/* =====================================================================
   MONDI
   addWorld({ id, name, width, sky[3], gt(orizzonte terra), gr[2](terra), chord[],amb,
              intro, look[[maxX,testo]], back[{k,fn}], mid[{k,fn}], gdraw, props[[nome,x,arg]],
              npcs[{id,name,x,draw,d}] })
   k = velocita' parallasse (0 = fermo, 1 = come il terreno)
   Dialoghi: d:{a:{t:'testo', o:[['scelta','nodoSuccessivo'|null,funzione?]], m:'ricordo?'}}
   ===================================================================== */
const WORLDS=[];const addWorld=w=>WORLDS.push(w);

const TOPX={};  /* battute dei personaggi: TOPX.idpersonaggio=[[domanda,risposta],...] */

/* Dialogo a menu: domande in ordine, 4 per volta. Fatta la serie, compaiono le 4 successive; finite tutte si riparte dalle prime. T=[[etichetta,testo],...] */
function topicsD(greet,T){const n=T.length,asked=new Set(),
 pick=()=>{if(asked.size>=n)asked.clear();let f=0;while(asked.has(f))f++;const p=f-f%4;const ids=[];for(let i=p;i<Math.min(p+4,n);i++)if(!asked.has(i))ids.push(i);return ids.map(i=>[T[i][0],'t'+i])},d={a:{t:greet,o:()=>pick()}};
 T.forEach((x,i)=>{d['t'+i]={t:x[1],m:i%3==2?'n'+i:undefined,o:()=>{asked.add(i);return pick()}}});return d}

