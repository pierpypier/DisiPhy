/* ================================================================
   frafrasi.js — Frasi comuni Francese/Italiano per frafile.html
   ----------------------------------------------------------------
   Stesso schema di citazioni.js e tedfrasi.js: frasi su righe
   separate, formato:
   "Frase in francese (pronuncia approssimativa) - Traduzione italiana"

   Per aggiungere nuove frasi: basta aggiungere una nuova riga dentro
   il template string qui sotto, rispettando questo formato.
   Nessun array da modificare a mano: il parsing avviene
   automaticamente più in basso.

   NOTA: al momento contiene solo 10 frasi di partenza; altre
   verranno aggiunte in seguito, in batch successivi.
   ================================================================ */
const FRASI_FRA_RAW = `
Bonjour (bon-giur) - Buongiorno
Bonsoir (bon-suar) - Buonasera
Comment ça va? (ko-man sa va) - Come va?
Ça va bien, merci (sa va bian, mer-si) - Sto bene, grazie
Comment tu t'appelles? (ko-man tu ta-pel) - Come ti chiami?
Je m'appelle Pierpaolo (gio ma-pel Pierpaolo) - Mi chiamo Pierpaolo
Merci beaucoup (mer-si bo-ku) - Grazie mille
S'il vous plaît (sil vu ple) - Per favore
Excusez-moi (eks-ku-ze mua) - Mi scusi
Où sont les toilettes? (u son le tua-let) - Dove sono i bagni?
`;

/* ================================================================
   PARSING — trasforma il testo grezzo in un array di oggetti
   { fr: "...", it: "..." } pronto all'uso in frafile.html.
   ================================================================ */
const FRASI_FRA = FRASI_FRA_RAW
  .split('\n')
  .map(riga => riga.trim())
  .filter(riga => riga.length > 0)
  .map(riga => {
    const sep = ' - ';
    const idx = riga.indexOf(sep);
    if (idx === -1) return null;
    return {
      fr: riga.slice(0, idx).trim(),
      it: riga.slice(idx + sep.length).trim()
    };
  })
  .filter(coppia => coppia !== null);
