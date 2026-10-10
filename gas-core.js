/* ================================================================
   gas-core.js — funzioni condivise del modulo gas medicinali
   (usato da gas-censimento.html e gas-riepilogo.html)
   ================================================================ */
const LS_CONFIG   = 'gas_config';
const LS_CATALOGO = 'gas_catalogo';
const LS_PRESIDI  = 'gas_presidi';
const LS_UI       = 'gas_ui';
const MAX_PRESIDI = 5;

const DEF_GAS = [
  ['o2','Ossigeno'],['n2o',"Protossido d'azoto"],['aria4','Aria 4 bar'],['aria8','Aria 8 bar'],
  ['co2','CO2'],['n2','Azoto'],['he','Elio'],['ar','Argon'],['evac','Evacuazione'],['vuoto','Vuoto']
];
const DEF_TIPI_UT = [['uni','UNI'],['afnor','AFNOR'],['nist','NIST'],['ega','EGA']];

/* ---------- helper di base ---------- */
function leggiOggetto(key, fallback){
  try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
  catch(e){ return fallback; }
}
function salva(key, val){ localStorage.setItem(key, JSON.stringify(val)); }
function escapeHtml(s){
  if(s === null || s === undefined) return '';
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function nuovoId(prefix){ return prefix + '_' + Date.now() + '_' + Math.floor(Math.random()*100000); }
function eur(n){
  if(typeof n !== 'number' || isNaN(n)) n = 0;
  return n.toLocaleString('it-IT', {minimumFractionDigits:2, maximumFractionDigits:2}) + ' €';
}
function uniq(a){ return Array.from(new Set(a)); }

/* ---------- configurazione, gas e tipi ---------- */
function leggiConfig(){
  return Object.assign({gasExtra:['','',''], tipiExtra:['','',''], freqLF:1, freqHF:3}, leggiOggetto(LS_CONFIG, {}));
}
function elencoGas(){
  const c = leggiConfig();
  const out = DEF_GAS.map(g => ({id:g[0], nome:g[1]}));
  c.gasExtra.forEach((n,i) => { if(n) out.push({id:'x'+(i+1), nome:n}); });
  return out;
}
function elencoTipiUt(){
  const c = leggiConfig();
  const out = DEF_TIPI_UT.map(t => ({id:t[0], nome:t[1]}));
  c.tipiExtra.forEach((n,i) => { if(n) out.push({id:'x'+(i+1), nome:n}); });
  return out;
}
function nomeGas(id){ const g = elencoGas().find(x => x.id === id); return g ? g.nome : '—'; }
function nomeTipoUt(id){ const t = elencoTipiUt().find(x => x.id === id); return t ? t.nome : '—'; }

/* ---------- dati ---------- */
function leggiCatalogo(){
  const c = Object.assign({ut:[], rd:[]}, leggiOggetto(LS_CATALOGO, {}));
  if(!Array.isArray(c.ut)) c.ut = [];
  if(!Array.isArray(c.rd)) c.rd = [];
  return c;
}
function leggiPresidi(){
  const p = leggiOggetto(LS_PRESIDI, []);
  return Array.isArray(p) ? p : [];
}

/* ---------- costi ---------- */
/* Sostituzione effettiva: il valore scelto nel censimento prevale su quello del catalogo */
function sostEff(item, override){
  return (override === 'completo' || override === 'kit' || override === 'entrambi') ? override : item.sostituzione;
}
/* Costo di UN ciclo di sostituzione di una unità */
function costoCiclo(item, sost){
  const c = Number(item.costoCompleto) || 0;
  const k = Number(item.costoKit) || 0;
  if(sost === 'kit') return k;
  if(sost === 'entrambi') return c + k;
  return c;
}
/* Frequenza annua in base al flag LF/HF del reparto */
function freqReparto(rep, cfg){
  return rep.freq === 'HF' ? (Number(cfg.freqHF) || 0) : (Number(cfg.freqLF) || 0);
}

/* ---------- unità terminali censite, per gas ---------- */
function utPerGas(rep, cat){
  const T = {};
  (rep.postazioni || []).forEach(p => {
    const q = Number(p.quantita) || 0;
    (p.ut || []).forEach(u => {
      const it = cat.ut.find(x => x.id === u.utId);
      if(!it) return;
      T[it.gas] = (T[it.gas] || 0) + q;
    });
  });
  return T;
}

/* ---------- ripartizione UT tra i riduttori dello stesso gas ----------
   - riduttore con "UT alimentate" compilato: usa quel valore
   - riduttori senza valore: si dividono equamente le UT del gas non
     già assegnate (resto distribuito dal primo)
   Restituisce { perRd:{idIstanzaRiduttore: n}, avvisi:[testo] } */
function alimentazioneReparto(rep, cat){
  const T = utPerGas(rep, cat);
  const perGas = {};
  (rep.quadri || []).forEach(q => (q.riduttori || []).forEach(r => {
    const it = cat.rd.find(x => x.id === r.rdId);
    if(!it) return;
    (perGas[it.gas] = perGas[it.gas] || []).push(r);
  }));

  const perRd = {}, avvisi = [];
  uniq(Object.keys(T).concat(Object.keys(perGas))).forEach(g => {
    const tot = T[g] || 0;
    const rds = perGas[g] || [];
    const man = rds.filter(r => r.utAlimentate !== '' && r.utAlimentate !== null && r.utAlimentate !== undefined);
    const auto = rds.filter(r => man.indexOf(r) === -1);
    let sumMan = 0;
    man.forEach(r => { const n = Number(r.utAlimentate) || 0; perRd[r.id] = n; sumMan += n; });

    if(auto.length){
      const resto = Math.max(tot - sumMan, 0);
      const base = Math.floor(resto / auto.length);
      let extra = resto - base * auto.length;
      auto.forEach(r => { perRd[r.id] = base + (extra > 0 ? 1 : 0); if(extra > 0) extra--; });
    }

    if(rds.length === 0 && tot > 0){
      avvisi.push(`${nomeGas(g)}: ${tot} UT censite ma nessun riduttore.`);
    } else if(rds.length > 0 && tot === 0){
      avvisi.push(`${nomeGas(g)}: ${rds.length} riduttore/i ma nessuna UT censita.`);
    } else if(rds.length > 0){
      if(auto.length === 0 && sumMan !== tot){
        avvisi.push(`${nomeGas(g)}: i riduttori dichiarano ${sumMan} UT, ma ne risultano ${tot} censite.`);
      } else if(auto.length > 0 && sumMan > tot){
        avvisi.push(`${nomeGas(g)}: i valori indicati (${sumMan} UT) superano le ${tot} UT censite.`);
      }
    }
  });
  return {perRd, avvisi};
}

/* ---------- aggregazione costi/quantità di un reparto ----------
   Una riga per voce di catalogo + tipo di sostituzione.
   ciclo = quantità × costo di un ciclo ; annuo = ciclo × frequenza LF/HF del reparto */
function aggregaReparto(rep, cat, cfg){
  const freq = freqReparto(rep, cfg);
  const mappa = {};
  let mancanti = 0;

  function aggiungi(sez, item, override, qta){
    const sost = sostEff(item, override);
    const key = sez + '|' + item.id + '|' + sost;
    if(!mappa[key]){
      mappa[key] = {
        sez, itemId:item.id, gas:item.gas, codice:item.codice || '',
        tipo: sez === 'ut' ? nomeTipoUt(item.tipo) : (item.tipo || ''),
        marca:item.marca || '', descrizione:item.descrizione || '',
        sost, qta:0, ciclo:0, annuo:0, unitario:costoCiclo(item, sost)
      };
    }
    const r = mappa[key];
    r.qta += qta;
    r.ciclo += qta * r.unitario;
    r.annuo = r.ciclo * freq;
  }

  (rep.quadri || []).forEach(q => (q.riduttori || []).forEach(r => {
    const it = cat.rd.find(x => x.id === r.rdId);
    if(!it){ mancanti++; return; }
    aggiungi('rd', it, r.sost, 1);
  }));
  (rep.postazioni || []).forEach(p => {
    const q = Number(p.quantita) || 0;
    (p.ut || []).forEach(u => {
      const it = cat.ut.find(x => x.id === u.utId);
      if(!it){ mancanti++; return; }
      aggiungi('ut', it, u.sost, q);
    });
  });

  const righe = Object.keys(mappa).map(k => mappa[k]);
  righe.sort((a,b) =>
    (a.sez === b.sez ? 0 : (a.sez === 'rd' ? -1 : 1)) ||
    nomeGas(a.gas).localeCompare(nomeGas(b.gas), 'it') ||
    a.codice.localeCompare(b.codice, 'it'));
  return {righe, mancanti, freq};
}

function sommaRighe(righe){
  return righe.reduce((s, r) => {
    s.ciclo += r.ciclo; s.annuo += r.annuo;
    if(r.sez === 'rd') s.rd += r.qta; else s.ut += r.qta;
    return s;
  }, {ciclo:0, annuo:0, rd:0, ut:0});
}
