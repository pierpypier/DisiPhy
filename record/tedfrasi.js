/* ================================================================
   tedfrasi.js — Frasi comuni Tedesco/Italiano per tedfile.html
   ----------------------------------------------------------------
   Stesso schema di citazioni.js: frasi su righe separate, formato
   "Frase in tedesco (pronuncia approssimativa) - Traduzione italiana"

   Per aggiungere nuove frasi: basta aggiungere una nuova riga dentro
   il template string qui sotto, rispettando questo formato.
   Nessun array da modificare a mano: il parsing avviene
   automaticamente più in basso.
   ================================================================ */
const FRASI_TED_RAW = `
Guten Morgen (guten MOR-ghen) - Buongiorno (al mattino)
Guten Tag (guten TAK) - Buongiorno
Guten Abend (guten AA-bent) - Buonasera
Gute Nacht (GHU-te nakt) - Buonanotte
Wie geht es dir? (vi ghèit es dir) - Come stai?
Mir geht es gut, danke (mir ghèit es gut, DAN-ke) - Sto bene, grazie
Wie heißt du? (vi haist du) - Come ti chiami?
Ich heiße Pierpaolo (ish HAI-se Pierpaolo) - Mi chiamo Pierpaolo
Freut mich, dich kennenzulernen (froit mish dish KE-nen-tsu-LER-nen) - Piacere di conoscerti
Woher kommst du? (vo-HER komst du) - Da dove vieni?
Ich komme aus Italien (ish KO-me aus i-TAA-lien) - Vengo dall'Italia
Sprichst du Englisch? (shprishst du ENG-lish) - Parli inglese?
Ich verstehe nicht (ish fer-SHTE-e nisht) - Non capisco
Kannst du das wiederholen? (kanst du das VI-der-HO-len) - Puoi ripeterlo?
Bitte sprich langsamer (BI-te shprish LANG-za-mer) - Per favore parla più lentamente
Entschuldigung (ent-SHUL-di-gung) - Scusa / Mi scusi
Danke schön (DAN-ke shoen) - Grazie mille
Bitte schön (BI-te shoen) - Prego
Kein Problem (kain pro-BLEM) - Nessun problema
Wie viel kostet das? (vi fil KOS-tet das) - Quanto costa?
Das ist zu teuer (das ist tsu TOI-er) - È troppo caro
Wo ist die Toilette? (vo ist di toa-LE-te) - Dov'è il bagno?
Wo ist der Bahnhof? (vo ist der BAAN-hof) - Dov'è la stazione?
Ich hätte gern einen Kaffee (ish HE-te ghern AI-nen ka-FE) - Vorrei un caffè
Die Rechnung, bitte (di REH-nung, BI-te) - Il conto, per favore
Ich bin müde (ish bin MYU-de) - Sono stanco
Ich habe Hunger (ish HAA-be HUN-gher) - Ho fame
Ich habe Durst (ish HAA-be durst) - Ho sete
Wie spät ist es? (vi shpet ist es) - Che ore sono?
Es ist zehn Uhr (es ist tsen ur) - Sono le dieci
Wann fährt der Zug ab? (van fert der tsuk ap) - Quando parte il treno?
Ich brauche Hilfe (ish BRAU-khe HIL-fe) - Ho bisogno di aiuto
Können Sie mir helfen? (KOE-nen zi mir HEL-fen) - Può aiutarmi?
Ich habe mich verlaufen (ish HAA-be mish fer-LAU-fen) - Mi sono perso
Wo kann ich das kaufen? (vo kan ish das KAU-fen) - Dove posso comprarlo?
Haben Sie das in einer anderen Größe? (HAA-ben zi das in AI-ner AN-de-ren GROE-se) - Ce l'ha in un'altra taglia?
Ich möchte ein Zimmer reservieren (ish MOESH-te ain TSI-mer re-zer-VI-ren) - Vorrei prenotare una camera
Ist hier noch frei? (ist hir noh frai) - È libero questo posto?
Gesundheit! (ghe-ZUNT-hait) - Salute! (dopo uno starnuto)
Alles Gute zum Geburtstag (A-les GHU-te tsum ghe-BURTS-tak) - Buon compleanno
Prost! (prost) - Salute! (per un brindisi)
Guten Appetit (GHU-ten a-pe-TIT) - Buon appetito
Ich liebe dich (ish LI-be dish) - Ti amo
Bis später (bis SHPE-ter) - A dopo
Auf Wiedersehen (auf VI-der-ze-en) - Arrivederci
Tschüss (chuess) - Ciao (per congedarsi)
Wie ist das Wetter heute? (vi ist das VE-ter HOI-te) - Com'è il tempo oggi?
Es regnet (es RE-ghnet) - Sta piovendo
Es ist kalt (es ist kalt) - Fa freddo
Morgens ist es bei uns immer ein bisschen chaotisch. (Morgens ist es bai uns immer ain bisschen kaotisch) - La mattina da noi è sempre un po' caotica.
Papa, hast du meinen Rucksack gesehen? (Papa, hast du mainen Rucksack gesehn) - Papà, hai visto il mio zaino?
Ich glaub, ich hab ihn gestern im Flur stehen lassen. (Ich glaub, ich hab in gestern im Flur schtehen lassen) - Credo di averlo lasciato ieri in corridoio.
Mach dir keinen Kopf, ich such kurz mit dir. (Mach dia kainem Kopf, ich such kurts mit dia) - Non preoccuparti, cerco un attimo insieme a te.
Das Frühstück steht schon auf dem Tisch. (Das Früstück schteht schon auf dem Tisch) - La colazione è già sul tavolo.
Ich bin noch nicht richtig wach. (Ich bin noch nicht richtig wach) - Non sono ancora del tutto sveglia.
Dann trink erst mal einen Kaffee, bevor du losmusst. (Dan trink erst mal einen Kafee, bevor du losmust) - Allora prima prenditi un caffè, prima di dover uscire.
Heute komm ich etwas später nach Hause. (Hoite komm ich etvas schpeta nach Hause) - Oggi torno a casa un po' più tardi.
Weißt du schon, was wir heute Abend essen? (Vaist du schon, vas via hoite Abend essen) - Sai già cosa mangiamo stasera?
Keine Ahnung, ich hab noch gar nicht darüber nachgedacht. (Kaine Ahnung, ich hab noch gar nicht darüba nachgedacht) - Non ne ho idea, non ci ho ancora pensato.
Ich kann später schnell zum Supermarkt gehen. (Ich kann schpeta schnell zum Supamarkt gehn) - Posso andare velocemente al supermercato più tardi.
Nimm bitte noch Milch und Brot mit. (Nimm bitte noch Milch und Brot mit) - Prendi per favore anche latte e pane.
Hast du eigentlich deine Hausaufgaben gemacht? (Hast du aigentlich daine Hausaufgaben gemacht) - Hai fatto i compiti, poi?
Ich mach sie nach dem Essen, versprochen. (Ich mach si nach dem Essen, fersprochen) - Li faccio dopo cena, promesso.
Du sagst das jedes Mal. (Du sagst das jedes Mal) - Lo dici ogni volta.
Diesmal mein ich es ernst. (Diesmal main ich es ernst) - Questa volta faccio sul serio.
Kannste mir kurz beim Handy helfen? (Kannste mia kurts baim Hendi helfen) - Mi dai una mano un attimo con il cellulare?
Was funktioniert denn nicht? (Vas funktioniert den nicht) - Che cosa non funziona?
Irgendwie lädt die App nicht mehr. (Irgendvia let die App nicht mea) - In qualche modo l'app non si carica più.
Warte, ich schau mal nach. (Varte, ich schau mal nach) - Aspetta, controllo un attimo.
Mama, hast du mein Ladekabel gesehen? (Mama, hast du main Ladekabel gesehn) - Mamma, hai visto il mio caricabatterie?
Das liegt doch neben deinem Bett. (Das ligt doch neben dainem Bett) - È lì accanto al tuo letto.
Ach so, stimmt, jetzt seh ich's. (Ach so, schtimmt, jetz seh ichs) - Ah sì, è vero, adesso lo vedo.
Wer hat eigentlich das Fenster offen gelassen? (Ver hat aigentlich das Fenster offen gelassen) - Chi ha lasciato aperta la finestra?
Ich war's nicht, ich bin seit Stunden nicht mehr da drin. (Ich vars nicht, ich bin sait Stunden nicht mea da drin) - Non sono stata io, è da ore che non entro lì.
Dann war's wahrscheinlich der Wind. (Dan vars varsainlich dea Vint) - Allora probabilmente è stato il vento.
Könnt ihr bitte ein bisschen leiser sein? (Könt ia bitte ain bisschen laisa sain) - Potete fare un po' meno rumore, per favore?
Ich telefoni gerade mit einer Freundin. (Ich telefoni gerade mit aina Froindin) - Sto parlando al telefono con un'amica.
Oh, sorry, wir haben dich gar nicht gehört. (Oh, sorri, via haben dich gar nicht gehört) - Oh, scusa, non ti abbiamo proprio sentita.
Ich geh kurz in mein Zimmer, ich muss was erledigen. (Ich geh kurts in main Zimmer, ich muss vas erledigen) - Vado un attimo in camera mia, devo sbrigare una cosa.
Denk dran, später den Tisch zu decken. (Denk dran, schpeta den Tisch zu decken) - Ricordati di apparecchiare più tardi.
Ja, mach ich. (Ja, mach ich) - Sì, lo faccio.
Warum ist das Licht im Bad schon wieder an? (Varum ist das Licht im Bad schon vida an) - Perché la luce del bagno è di nuovo accesa?
Keine Ahnung, das hab ich nicht angemacht. (Kaine Ahnung, das hab ich nicht angemacht) - Non ne ho idea, non l'ho accesa io.
Gibt's noch Joghurt im Kühlschrank? (Gibts noch Jogurt im Külsrank) - C'è ancora dello yogurt in frigorifero?
Ja, aber nur noch einen. (Ja, aba nua ainen) - Sì, ma ne è rimasto solo uno.
Den kannst du ruhig nehmen. (Den kannst du ruig nemen) - Puoi tranquillamente prendere quello.
Ich räum nachher mein Zimmer auf. (Ich roim nachhea main Zimmer auf) - Più tardi metto in ordine la mia camera.
Nachher heißt bei dir meistens morgen. (Nachhea haist bai dia maistens morgn) - Per te più tardi di solito significa domani.
Sehr witzig, Papa. (Zea vitzig, Papa) - Molto divertente, papà.
Was machen wir heute Abend zusammen? (Vas machen via hoite Abend zusammen) - Che facciamo insieme stasera?
Wie wär's mit einem Film? (Vi vers mit ainem Film) - Che ne dite di un film?
Aber bitte nichts, was wir schon dreimal gesehen haben. (Aba bitte nichts, vas via schon draimal gesehn haben) - Però niente che abbiamo già visto tre volte.
Dann such du etwas aus. (Dan such du etvas aus) - Allora scegli tu qualcosa.
Ich hab gerade überhaupt keinen Hunger. (Ich hab gerade überhaubt kainem Hunger) - In questo momento non ho proprio fame.
Dann essen wir eben etwas später. (Dan essen via eben etvas schpeta) - Allora mangiamo semplicemente un po' più tardi.
Kannst du mir noch ein Glas Wasser bringen? (Kanst du mia noch ain Glas Vassa bringen) - Mi puoi portare ancora un bicchiere d'acqua?
Klar, bin gleich wieder da. (Klar, bin glaich vida da) - Certo, torno subito.
Morgen müssen wir früh raus, also nicht zu spät ins Bett. (Morgen müssen via frü raus, also nicht zu schpät ins Bett) - Domani dobbiamo alzarci presto, quindi non andiamo a letto troppo tardi.
Nur noch zehn Minuten, dann komm ich. (Nua noch tsen Minuten, dan komm ich) - Ancora dieci minuti, poi vengo.
Du weißt schon, dass aus zehn Minuten schnell eine halbe Stunde wird. (Du vaist schon, das aus tsen Minuten schnell aine halbe Schtunde virt) - Lo sai che dieci minuti diventano presto mezz'ora.
Ja, ja, ich weiß. (Ja, ja, ich vais) - Sì, sì, lo so.
Gute Nacht, ihr beiden, schlaft gut. (Gute Nacht, ia baiden, schlaft gut) - Buonanotte a tutti e due, dormite bene.
Machen wir eine Pause (MA-khen vir AI-ne PAU-ze) - Facciamo una pausa
`;

/* ================================================================
   PARSING — trasforma il testo grezzo in un array di oggetti
   { de: "...", it: "..." } pronto all'uso in tedfile.html.
   ================================================================ */
const FRASI_TED = FRASI_TED_RAW
  .split('\n')
  .map(riga => riga.trim())
  .filter(riga => riga.length > 0)
  .map(riga => {
    const sep = ' - ';
    const idx = riga.indexOf(sep);
    if (idx === -1) return null;
    return {
      de: riga.slice(0, idx).trim(),
      it: riga.slice(idx + sep.length).trim()
    };
  })
  .filter(coppia => coppia !== null);
