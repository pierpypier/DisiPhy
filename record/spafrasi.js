/* ================================================================
   spafrasi.js — Frasi comuni Spagnolo/Italiano per spafile.html
   ----------------------------------------------------------------
   Stesso schema di citazioni.js, tedfrasi.js e frafrasi.js: frasi
   su righe separate, formato:
   "Frase in spagnolo (pronuncia approssimativa) - Traduzione italiana"

   Per aggiungere nuove frasi: basta aggiungere una nuova riga dentro
   il template string qui sotto, rispettando questo formato.
   Nessun array da modificare a mano: il parsing avviene
   automaticamente più in basso.

   NOTA: al momento contiene solo 10 frasi di partenza; altre
   verranno aggiunte in seguito, in batch successivi.
   ================================================================ */
const FRASI_SPA_RAW = `
Buenos días (bue-nos di-as) - Buongiorno
Buenas tardes (bue-nas tar-des) - Buon pomeriggio
¿Cómo estás? (ko-mo es-tas) - Come stai?
Estoy bien, gracias (es-toi bien, gra-thias) - Sto bene, grazie
¿Cómo te llamas? (ko-mo te ya-mas) - Come ti chiami?
Me llamo Pierpaolo (me ya-mo Pierpaolo) - Mi chiamo Pierpaolo
Muchas gracias (mu-cias gra-thias) - Grazie mille
Por favor (por fa-vor) - Per favore
Disculpe (dis-kul-pe) - Mi scusi
¿Dónde está el baño? (don-de es-ta el ba-nio) - Dov'è il bagno?
`;

/* ================================================================
   PARSING — trasforma il testo grezzo in un array di oggetti
   { es: "...", it: "..." } pronto all'uso in spafile.html.
   ================================================================ */
const FRASI_SPA = FRASI_SPA_RAW
  .split('\n')
  .map(riga => riga.trim())
  .filter(riga => riga.length > 0)
  .map(riga => {
    const sep = ' - ';
    const idx = riga.indexOf(sep);
    if (idx === -1) return null;
    return {
      es: riga.slice(0, idx).trim(),
      it: riga.slice(idx + sep.length).trim()
    };
  })
  .filter(coppia => coppia !== null);
