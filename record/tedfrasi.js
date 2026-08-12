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
Hast du schon Kaffee gemacht? (Hast du schon Kafee gemacht) - Hai già fatto il caffè?
Ich stell gleich das Brot auf den Tisch. (Ich schtell glaich das Brot auf den Tisch) - Metto subito il pane sul tavolo.
Diletta, dein Frühstück wird kalt. (Diletta, dain Früschstück virt kalt) - Diletta, la tua colazione si raffredda.
Ich komm ja schon, ich muss nur noch meine Haare machen. (Ich komm ja schon, ich muss nua noch maine Hare machen) - Arrivo, devo solo sistemarmi i capelli.
Wo ist eigentlich meine Brille? (Vo ist aigentlich maine Brille) - Dov'è la mia brille, poi?
Die liegt auf dem Küchentisch. (Di ligt auf dem Küchentisch) - È sul tavolo della cucina.
Ich hab heute überhaupt keine Lust auf Müsli. (Ich hab hoite übahaupt kaine Lust auf Müsli) - Oggi non ho proprio voglia di muesli.
Dann mach dir ein Brot mit Käse. (Dan mach dia ain Brot mit Kese) - Allora preparati un panino con il formaggio.
Kannst du mir die Butter rüberschieben? (Kanst du mia di Butta rübaschieben) - Mi passi il burro?
Natürlich, hier bitte. (Natürlic, hia bitte) - Certo, tieni.
Ist noch Saft da? (Ist noch Saft da) - C'è ancora del succo?
Nur ein bisschen, aber für dich reicht es noch. (Nua ain bisschen, aba füa dich raicht es noch) - Solo un po', ma per te ce n'è ancora abbastanza.
Ich muss mich echt beeilen, sonst verpasse ich den Bus. (Ich muss mich echt beeilen, sonst fapasse ich den Bus) - Devo proprio sbrigarmi, altrimenti perdo l'autobus.
Wie spät ist es denn? (Vi schpät ist es den) - Che ore sono?
Schon halb acht, du solltest langsam los. (Schon halb acht, du solltest langsam los) - Sono già le sette e mezza, dovresti iniziare ad andare.
Mist, ich dachte, es wäre erst sieben. (Mist, ich dachte, es vere seia erst sieben) - Accidenti, pensavo fossero appena le sette.
Hast du alles für die Schule eingepackt? (Hast du alles füa di Schule eingepackt) - Hai messo tutto nello zaino per la scuola?
Ich glaube schon, aber ich schau lieber noch mal nach. (Ich glaube schon, aba ich schau lieba noch mal nach) - Credo di sì, ma preferisco controllare ancora.
Dein Mathebuch liegt noch auf dem Sofa. (Dain Mathebuch ligt noch auf dem Sofa) - Il tuo libro di matematica è ancora sul divano.
Oh nein, das hätte ich fast vergessen. (Oh nain, das hätte ich fast vergessen) - Oh no, me ne stavo quasi dimenticando.
Nimm auch deine Jacke mit, draußen ist es frisch. (Nimm auch daine Jacke mit, draußen ist es frisch) - Porta anche la giacca, fuori fa fresco.
Ich brauch die Jacke heute nicht. (Ich brauch di Jacke hoite nicht) - Oggi non mi serve la giacca.
Morgens denkst du das immer, und später frierst du. (Morgens denkst du das immer, und schpeta friaerst du) - La mattina dici sempre così, e poi più tardi hai freddo.
Wo sind meine Schlüssel? (Vo sint maine Schlüssel) - Dove sono le mie chiavi?
Hast du sie gestern mit nach oben genommen? (Hast du si gestern mit nach oben genommen) - Le hai portate di sopra ieri?
Nein, ich hab sie gleich neben die Tür gelegt. (Nain, ich hab si glaich neben di Tür gelegt) - No, le ho messe proprio accanto alla porta.
Da sind sie ja. (Da sint si ja) - Eccole qua.
Ich zieh mich noch schnell um, dann bin ich fertig. (Ich zie mich noch schnell um, dan bin ich fertig) - Mi cambio velocemente e poi sono pronta.
Vergiss deine Brotdose nicht. (Fagiss daine Brot-dose nicht) - Non dimenticare il portapranzo.
Die ist schon in meinem Rucksack. (Di ist schon in mainem Rucksack) - È già nello zaino.
Papa, kannst du mich heute zur Schule fahren? (Papa, kanst du mich hoite tsur Schule faren) - Papà, puoi accompagnarmi a scuola oggi?
Klar, ich muss sowieso in die gleiche Richtung. (Klar, ich muss sowieso in di glaiche Richtung) - Certo, tanto devo andare nella stessa direzione.
Dann kann ich noch fünf Minuten länger schlafen. (Dan kann ich noch fünf Minuten länger schlafen) - Allora posso dormire altri cinque minuti.
Aber wirklich nur fünf Minuten. (Aba wirklich nua fünf Minuten) - Ma davvero solo cinque minuti.
Ich hab mein Handy fast leer. (Ich hab main Hendi fast lea) - Ho quasi scarico il cellulare.
Dann nimm deine Powerbank mit. (Dan nimm daine Pauerbank mit) - Allora porta con te il powerbank.
Die liegt irgendwo in meinem Zimmer. (Di ligt irgendwo in mainem Zimmer) - È da qualche parte nella mia camera.
Dann such sie jetzt lieber, bevor wir losmüssen. (Dan such si jetz lieba, bevor via losmüssen) - Allora cercala adesso, prima che dobbiamo uscire.
Ich muss auch noch meine Zähne putzen. (Ich muss auch noch maine Tsenne putzen) - Devo ancora lavarmi i denti.
Und ich muss noch schnell duschen. (Und ich muss noch schnell duschen) - E devo anche fare velocemente una doccia.
Dann wird's aber langsam knapp mit der Zeit. (Dan virts aba langsam knapp mit dea Tsait) - Allora comincia a essere un po' tardi.
Keine Sorge, ich bin in zehn Minuten fertig. (Kaine Sorge, ich bin in tsen Minuten fertig) - Non preoccuparti, tra dieci minuti sono pronta.
Das sagst du, seit du aufgestanden bist. (Das sagst du, sait du aufgestanden bist) - Lo dici da quando ti sei alzata.
Heute ist einfach alles irgendwie durcheinander. (Hoite ist ainfach alles irgendwie durcheinanda) - Oggi è tutto un po' scombussolato.
Ich hab meine Arbeitssachen schon bereitgelegt. (Ich hab maine Arbaeitssachen schon baraeitgelegt) - Ho già preparato le cose per il lavoro.
Die Tasche steht direkt neben der Haustür. (Di Tasche schteht direkt neben dea Haustür) - La borsa è proprio accanto alla porta d'ingresso.
Hast du deinen Ausweis dabei? (Hast du dainen Ausvais dabai) - Hai con te il documento?
Ja, und mein Handy hab ich auch. (Ja, und main Hendi hab ich auch) - Sì, e ho anche il cellulare.
Dann sind wir eigentlich startklar. (Dan sint via aigentlich schtartklar) - Allora in pratica siamo pronti per partire.
Warte noch kurz, ich muss das Fenster zumachen. (Varte noch kurts, ich muss das Fenster zumachen) - Aspetta un attimo, devo chiudere la finestra.
So, jetzt können wir los. (So, jetz können via los) - Ecco, adesso possiamo andare.
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
