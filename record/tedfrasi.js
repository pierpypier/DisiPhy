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
Ich hab heute gleich in der ersten Stunde einen Test. (Ich hab hoite glaich in dea ersten Schtunde ainen Test) - Oggi ho un test già alla prima ora.
Hast du für die Prüfung gestern noch gelernt? (Hast du füa di Prüfung gestern noch gelernt) - Hai studiato ancora ieri per l'esame?
Ein bisschen, aber ich hätte mehr machen sollen. (Ain bisschen, aba ich hätte mea machen sollen) - Un po', ma avrei dovuto studiare di più.
Unser Lehrer war heute ziemlich entspannt. (Unsa Lehra var hoite ziemlich entspannt) - Oggi il nostro insegnante era piuttosto tranquillo.
Wir haben die Stunde fast nur geredet. (Via haben di Schtunde fast nua geredet) - Abbiamo passato quasi tutta l'ora a parlare.
In der Pause bin ich kurz nach draußen gegangen. (In dea Pause bin ich kurts nach draußen gegangen) - Durante l'intervallo sono uscita un attimo.
Meine Freundin hat mir etwas Lustiges erzählt. (Meine Froindin hat mia etvas Lustiges erzählt) - La mia amica mi ha raccontato una cosa divertente.
Wir mussten so lachen, dass alle rübergeschaut haben. (Via mussten so lachen, dass alle rüba geschaut haben) - Abbiamo riso così tanto che tutti si sono girati a guardarci.
Was habt ihr in der nächsten Stunde? (Vas habt ia in dea nächsten Schtunde) - Che avete nell'ora successiva?
Englisch, und danach haben wir zwei Stunden frei. (Englisch, und danach haben via tsvai Stunden frai) - Inglese, e dopo abbiamo due ore libere.
Ich hab mein Heft zu Hause liegen lassen. (Ich hab main Heft tsu Hause liegen lassen) - Ho lasciato il quaderno a casa.
Kannst du mir kurz ein Blatt geben? (Kanst du mia kurts ain Blatt geben) - Mi dai un foglio un attimo?
Ich hab die Aufgabe überhaupt nicht verstanden. (Ich hab di Aufgabe übahaupt nicht ferschtanden) - Non ho proprio capito l'esercizio.
Frag einfach die Lehrerin, bevor du irgendwas Falsches aufschreibst. (Frag ainfach di Lehrerin, bevor du irgendvas Falsches aufschraibst) - Chiedi semplicemente all'insegnante prima di scrivere qualcosa di sbagliato.
Heute haben wir überraschend früh Schluss. (Hoite haben via überraschend frü Schluss) - Oggi finiamo sorprendentemente presto.
Dann können wir nach der Schule noch in die Stadt gehen. (Dan können via nach dea Schule noch in di Schtadt gehen) - Allora dopo scuola possiamo ancora andare in centro.
Ich muss erst noch ein paar Sachen erledigen. (Ich muss erst noch ain paa Sachen erledigen) - Prima devo ancora sbrigare alcune cose.
Hast du die Hausaufgaben schon ins Online-Portal eingetragen? (Hast du di Hausaufgaben schon ins Online-Portal eingetragen) - Hai già inserito i compiti nel portale online?
Noch nicht, das mach ich später. (Noch nicht, das mach ich schpeta) - Non ancora, lo faccio più tardi.
In der Kantine war heute richtig viel los. (In dea Kantine var hoite richtig fil los) - Oggi in mensa c'era davvero molta gente.
Ich hab nur schnell etwas gegessen und bin wieder hoch. (Ich hab nua schnell etvas gegessen und bin vida hoch) - Ho mangiato qualcosa velocemente e sono tornata su.
Mein Akku ist schon wieder fast leer. (Main Akku ist schon vida fast lea) - La batteria è di nuovo quasi scarica.
Ich hab zum Glück ein Ladekabel dabei. (Ich hab tsum Glück ain Ladekabel dabai) - Per fortuna ho con me un caricabatterie.
Der Unterricht heute war echt anstrengend. (Dea Untarricht hoite var echt anschtrengend) - Oggi le lezioni sono state davvero stancanti.
Ich freu mich schon auf den Feierabend. (Ich froi mich schon auf den Faierabend) - Non vedo già l'ora che finisca la giornata di lavoro.
Im Büro ist heute ziemlich viel zu tun. (Im Büro ist hoite ziemlich fil tsu tun) - Oggi in ufficio c'è parecchio da fare.
Ich muss zuerst meine E-Mails beantworten. (Ich muss tsuerst maine Imails beantworten) - Devo prima rispondere alle mie e-mail.
Hast du die Nachricht vom Kunden gesehen? (Hast du di Nachricht fom Kunden gesehn) - Hai visto il messaggio del cliente?
Ja, ich kümmer mich gleich darum. (Ja, ich kümmar mich glaich darum) - Sì, me ne occupo subito.
Kannst du mir die Datei weiterleiten? (Kanst du mia di Datai vaitaerlaiten) - Puoi inoltrarmi il file?
Moment, ich such sie gerade auf meinem Rechner. (Moment, ich such si gerade auf mainem Rechner) - Un attimo, la sto cercando sul computer.
Der Drucker funktioniert schon wieder nicht. (Dea Drucka funktioniert schon vida nicht) - La stampante non funziona di nuovo.
Probier mal, ihn aus- und wieder einzuschalten. (Probia mal, in aus und vida ainzuschalten) - Prova a spegnerla e riaccenderla.
Ich hab gleich einen Termin mit meinem Chef. (Ich hab glaich ainen Termin mit mainem Chef) - Tra poco ho un appuntamento con il mio capo.
Dann sollte ich vorher noch die Unterlagen zusammensuchen. (Dan sollte ich forhea noch di Untalagen tsusammensuchen) - Allora prima dovrei ancora raccogliere i documenti.
Das Gespräch hat länger gedauert als gedacht. (Das Gespräch hat lenga gedauat als gedacht) - La conversazione è durata più del previsto.
Ich brauche jetzt erst mal fünf Minuten Ruhe. (Ich brauche jetz erst mal fünf Minuten Rue) - Adesso ho bisogno di cinque minuti di tranquillità.
Hast du schon Mittagspause gemacht? (Hast du schon Mittagspause gemacht) - Hai già fatto la pausa pranzo?
Noch nicht, ich muss diese Sache vorher fertig machen. (Noch nicht, ich muss diese Sache forhea fertig machen) - Non ancora, prima devo finire questa cosa.
Dann komm später einfach mit uns mit. (Dan komm schpeta ainfach mit uns mit) - Allora più tardi vieni semplicemente con noi.
Was steht für heute Nachmittag noch auf dem Plan? (Vas schteht füa hoite Nachmittag noch auf dem Plan) - Cos'altro c'è in programma per oggi pomeriggio?
Ich muss noch eine Präsentation vorbereiten. (Ich muss noch aine Präsentatsion forberaiten) - Devo ancora preparare una presentazione.
Schick mir die Zahlen bitte, sobald du sie hast. (Schick mia di Tsalen bitte, sobald du si hast) - Mandami i dati appena li hai.
Kein Problem, ich schick sie dir vor drei. (Kain Problem, ich schick si dia for drai) - Nessun problema, te li mando prima delle tre.
Heute komm ich mit der Arbeit kaum hinterher. (Hoite komm ich mit dea Arbaeit kaum hinterhea) - Oggi riesco a malapena a stare dietro al lavoro.
Mach dir keinen Stress, eins nach dem anderen. (Mach dia kainen Schtress, ains nach dem anderen) - Non stressarti, una cosa alla volta.
Ich bin mit allem durch, ich kann Feierabend machen. (Ich bin mit allem durch, ich kann Faierabend machen) - Ho finito tutto, posso staccare.
Vergiss nicht, deine Sachen vom Schreibtisch mitzunehmen. (Fagiss nicht, daine Sachen fom Schreib-tisch mitzunehmen) - Non dimenticare di prendere le tue cose dalla scrivania.
Wir sehen uns morgen wieder. (Via sehn uns morgen vida) - Ci vediamo di nuovo domani.
Endlich Feierabend, ich bin total platt. (Endlich Faierabend, ich bin total platt) - Finalmente è finita, sono completamente distrutto.
Ich muss heute noch ein paar Sachen für morgen vorbereiten. (Ich muss hoite noch ain paa Sachen füa morgen forberaiten) - Devo ancora preparare alcune cose per domani.
Hast du daran gedacht, deinen Wecker zu stellen? (Hast du daran gedacht, dainen Vekka tsu schtellen) - Ti sei ricordata di mettere la sveglia?
Mein Rucksack ist schon fertig gepackt. (Main Rucksack ist schon fertig gepackt) - Il mio zaino è già pronto.
Ich muss morgen etwas früher los als sonst. (Ich muss morgen etvas früa los als sonst) - Domani devo uscire un po' prima del solito.
Kannst du mir später noch eine Nachricht schicken? (Kanst du mia schpeta noch aine Nachricht schicken) - Puoi mandarmi un messaggio più tardi?
Ich hab gerade keine Zeit, ich bin mitten in etwas drin. (Ich hab gerade kaine Tsait, ich bin mitten in etvas drin) - In questo momento non ho tempo, sono nel bel mezzo di una cosa.
Das erledige ich lieber gleich, dann hab ich es hinter mir. (Das erledige ich lieba glaich, dan hab ich es hinter mia) - Preferisco sbrigarmene subito, così me la tolgo di mezzo.
Wir müssen noch ein paar Sachen für die Woche einkaufen. (Via müssen noch ain paa Sachen füa di Woche einkaufen) - Dobbiamo ancora comprare alcune cose per la settimana.
Was fehlt uns denn noch aus dem Supermarkt? (Vas fehlt uns den noch aus dem Supamarkt) - Cosa ci manca ancora dal supermercato?
Schreib es lieber auf, sonst vergessen wir am Ende die Hälfte. (Schraib es lieba auf, sonst fergessen via am Ende di Hälfte) - Meglio scriverlo, altrimenti alla fine dimentichiamo metà delle cose.
Ich hab gesehen, dass die Milch fast leer ist. (Ich hab gesehn, dass di Milch fast lea ist) - Ho visto che il latte è quasi finito.
Die Nudeln stehen ganz oben im Schrank. (Di Nudeln schtehen gants oben im Schrank) - La pasta è nello scaffale più in alto.
Wir haben kaum noch Obst zu Hause. (Via haben kaum noch Obst tsu Hause) - Abbiamo quasi finito la frutta a casa.
Nimm ruhig die größere Packung, die hält länger. (Nimm ruig di grössere Packung, di hält lenga) - Prendi pure la confezione più grande, dura più a lungo.
Ich stell die Sachen schon mal in den Kühlschrank. (Ich schtell di Sachen schon mal in den Külsrank) - Metto intanto le cose in frigorifero.
Hast du gesehen, dass morgen Regen angesagt ist? (Hast du gesehn, dass morgen Regen angesagt ist) - Hai visto che per domani è prevista pioggia?
Dann nehme ich lieber einen Schirm mit. (Dan neeme ich lieba ainen Schirm mit) - Allora porto meglio un ombrello.
Das Wetter soll am Nachmittag wieder besser werden. (Das Vetta soll am Nachmittag vida besser werden) - Nel pomeriggio il tempo dovrebbe migliorare di nuovo.
Wir könnten am Wochenende einen Ausflug machen. (Via könnten am Vochende ainen Ausflug machen) - Potremmo fare una gita nel fine settimana.
Mal sehen, wie das Wetter wird. (Mal sehn, vi das Vetta virt) - Vediamo come sarà il tempo.
Ich hab den Termin gerade in meinen Kalender eingetragen. (Ich hab den Termin gerade in mainen Kalenda eingetragen) - Ho appena segnato l'appuntamento nel mio calendario.
Der Termin wurde kurzfristig verschoben. (Dea Termin vurde kurzfrischtig fershoben) - L'appuntamento è stato spostato all'ultimo momento.
Ich muss vorher noch etwas im Büro erledigen. (Ich muss forhea noch etvas im Büro erledigen) - Prima devo ancora sbrigare una cosa in ufficio.
Mein Kollege hat mir die Unterlagen per E-Mail geschickt. (Main Kollege hat mia di Untalagen per I-Meil geschickt) - Il mio collega mi ha mandato i documenti via e-mail.
Ich schau mir das später in Ruhe an. (Ich schau mia das schpeta in Rue an) - Lo guardo più tardi con calma.
Kannst du die Datei noch einmal öffnen? (Kanst du di Datai noch ainmal öffnen) - Puoi aprire di nuovo il file?
Irgendwas stimmt mit dem Drucker nicht. (Irgentvas schtimmt mit dem Drucka nicht) - C'è qualcosa che non va con la stampante.
Ich hab das Dokument versehentlich geschlossen. (Ich hab das Dokument fersehentlich geschlossen) - Ho chiuso il documento per errore.
Zum Glück hatte ich es vorher gespeichert. (Tsum Glück hatte ich es forhea gespeichert) - Per fortuna l'avevo salvato prima.
Wir besprechen den Rest morgen früh. (Via besprechen den Rest morgen frü) - Discutiamo del resto domani mattina.
Ich bin heute ziemlich spät dran. (Ich bin hoite ziemlich schpät dran) - Oggi sono piuttosto in ritardo.
Der Bus war schon voll, als ich eingestiegen bin. (Dea Bus var schon foll, als ich eingestiegen bin) - L'autobus era già pieno quando sono salita.
Deshalb musste ich die ganze Zeit stehen. (Deshalb musste ich di gants Tsait schtehen) - Per questo ho dovuto stare in piedi per tutto il tragitto.
Ich hoffe, dass ich heute pünktlich nach Hause komme. (Ich hoffe, dass ich hoite pünktlich nach Hause komme) - Spero di tornare a casa puntuale oggi.
Was möchtest du nach der Schule machen? (Vas möchtest du nach dea Schule machen) - Cosa vuoi fare dopo la scuola?
Ich wollte mich eigentlich mit einer Freundin treffen. (Ich wollte mich aigentlich mit aina Froindin treffen) - In realtà volevo incontrare un'amica.
Wir haben uns schon seit ein paar Wochen nicht gesehen. (Via haben uns schon sait ain paa Vohen nicht gesehn) - Non ci vediamo da qualche settimana.
Dann komm nicht zu spät zum Abendessen. (Dan komm nicht tsu schpät tsum Abendessen) - Allora non fare troppo tardi per cena.
Ich weiß noch nicht, wann ich zurück bin. (Ich vais noch nicht, van ich tsurück bin) - Non so ancora quando torno.
Schick einfach kurz Bescheid, wenn du losgehst. (Schick ainfach kurts Beschaid, ven du losgehst) - Mandami solo un messaggio quando parti.
Mein Handy war den ganzen Vormittag auf lautlos. (Main Hendi var den gantsen Vormittag auf lautlos) - Il mio cellulare è rimasto silenzioso per tutta la mattina.
Ich hab deine Nachricht erst gerade gesehen. (Ich hab daine Nachricht erst gerade gesehn) - Ho appena visto il tuo messaggio.
Wir können später gemeinsam darüber sprechen. (Via können schpeta gemeinsam darüba sprechen) - Possiamo parlarne insieme più tardi.
Heute Abend möchte ich einfach ein bisschen abschalten. (Hoite Abend möchte ich ainfach ain bisschen abschalten) - Stasera voglio semplicemente staccare un po'.
Lass uns nach dem Essen noch eine Folge anschauen. (Lass uns nach dem Essen noch aine Folge anschauen) - Guardiamoci ancora una puntata dopo cena.
Mach den Fernseher bitte nicht so laut. (Mach den Fernseha bitte nicht so laut) - Non tenere la televisione così alta, per favore.
Ich hab morgen früh einen wichtigen Termin. (Ich hab morgen frü ainen wichtigen Termin) - Domani mattina ho un appuntamento importante.
Dann sollten wir heute nicht allzu spät ins Bett gehen. (Dan sollten via hoite nicht alltsu schpät ins Bett gehen) - Allora stasera non dovremmo andare a letto troppo tardi.
Leg dein Handy lieber weg und komm essen. (Laik dain Hendi lieba veg und komm essen) - Metti via il cellulare e vieni a mangiare.
Nur noch einen Moment, ich komme gleich. (Nua noch ainen Moment, ich komme glaich) - Ancora un momento e arrivo.
Wir reden später weiter, jetzt ist erst mal Essen angesagt. (Via reden schpeta vaita, jetz ist erst mal Essen angesagt) - Ne parliamo più tardi, adesso prima si mangia.
Ich hab die Spülmaschine schon ausgeräumt. (ich hab di spüülmascine scion ausgeräumt) - Ho già svuotato la lavastoviglie.
Mach bitte das Licht im Flur aus. (mach bitte das licht im flur aus) - Per favore spegni la luce in corridoio.
Wo sind eigentlich die Wohnungsschlüssel? (vo zint eigentlich di vonungsschlüssl) - Dove sono le chiavi di casa, già?
Die Waschmaschine läuft noch, also warte kurz. (di vasmascine leuft noch, also varte kurtz) - La lavatrice sta ancora andando, quindi aspetta un attimo.
Der Hund hat schon wieder mein Frühstück geklaut. (der hund hat scion vider main früstück geklaut) - Il cane mi ha rubato di nuovo la colazione.
Kannst du den Tisch decken? Das Essen ist gleich fertig. (kanst du den tisc deken? das essen ist glaic fertig) - Puoi apparecchiare? La cena è quasi pronta.
Ich muss heute früher los, ich hab einen Termin. (ich muss hoite früer los, ich hab einen termin) - Oggi devo uscire prima, ho un appuntamento.
Hast du deine Hausaufgaben schon gemacht? (hast du daine hausaufgaben scion gemacht) - Hai già fatto i compiti?
Unser Lehrer hat die Klassenarbeit auf nächste Woche verschoben. (unzer leerer hat di klassenarbeit auf nechste voche ferscoben) - Il nostro insegnante ha rimandato il compito in classe alla prossima settimana.
Für Mathe brauche ich echt länger als gedacht. (für mate brauche ich echt lenger als gedacht) - Per matematica ci metto davvero più tempo del previsto.
Du kannst heute Abend noch raus, aber sei um zehn wieder da. (du kanst hoite abent noch raus, aber zai um tzen vider da) - Stasera puoi ancora uscire, ma alle dieci devi essere di nuovo a casa.
Räum erst dein Zimmer auf, dann kannst du spielen. (reum erst dain zimmer auf, dan kanst du scpilen) - Prima riordina la tua camera, poi puoi giocare.
Ich hab dir doch gesagt, dass du dein Handy nachts nicht benutzen sollst. (ich hab dir doch gesagt, das du dain hendi nachts nicht benutzen zolst) - Ti avevo detto che di notte non devi usare il cellulare.
Heute gibt's zum Mittagessen Nudeln mit Gemüse. (hoite gibt's zum mittagessen nudeln mit gemüze) - Oggi a pranzo ci sono pasta e verdure.
Leg das Handy beim Essen bitte weg. (leg das hendi baim essen bitte vek) - Metti via il cellulare mentre mangiamo, per favore.
Ich nehme morgens meistens nur einen Kaffee und ein Stück Brot. (ich näme morgens maistens nur ainen kaffe und ain Stück brot) - La mattina di solito prendo solo un caffè e un pezzo di pane.
Die Apotheke macht in einer halben Stunde zu. (di apoteke macht in ainer halben stunde zu) - La farmacia chiude tra mezz'ora.
Ich brauche etwas gegen Kopfschmerzen, aber nichts Starkes. (ich brauche etvas gegen kopfscmerzen, aber nichts starkes) - Mi serve qualcosa per il mal di testa, ma niente di forte.
Der Zug nach München fährt heute von Gleis sieben. (der zug nach münchen fert hoite fon glais zibn) - Il treno per Monaco oggi parte dal binario sette.
Weißt du, ob der Zug schon Verspätung hat? (vaist du, ob der zug scion ferspetung hat) - Sai se il treno è già in ritardo?
Ich steig an der nächsten Station aus. (ich staig an der nechsten station aus) - Scendo alla prossima fermata.
Die U-Bahn war so voll, dass ich kaum einsteigen konnte. (di u-baan var zo fol, das ich kaum ainstaigen konte) - La metropolitana era così piena che riuscivo a malapena a salire.
Fährt dieser Bus auch bis zum Hauptbahnhof? (fert diza bus auc bis zum hauptbaanhof) - Questo autobus arriva anche fino alla stazione centrale?
Wir müssen umsteigen, sonst fahren wir in die falsche Richtung. (vir müssen umstaigen, sonst faren vir in di false ricchtung) - Dobbiamo cambiare, altrimenti andiamo nella direzione sbagliata.
Der Flug geht erst heute Abend, wir haben also noch Zeit. (der flug geet erst hoite abent, vir habn also noch tsait) - Il volo parte solo stasera, quindi abbiamo ancora tempo.
Hast du schon online eingecheckt? (hast du scion onlain eingecekt) - Hai già fatto il check-in online?
Wo muss ich hin, wenn ich nur Handgepäck habe? (vo muss ich hin, ven ich nur handgepek habe) - Dove devo andare se ho solo il bagaglio a mano?
Die Fähre legt in zwanzig Minuten ab. (di fere legt in tsvantsig minuten ap) - Il traghetto parte tra venti minuti.
Vom Hafen bis zur Altstadt sind es nur zehn Minuten zu Fuß. (fom haafen bis tsur altstadt zint es nur tzen minuten zu fus) - Dal porto al centro storico ci sono solo dieci minuti a piedi.
Fahr an der nächsten Kreuzung links und dann immer geradeaus. (far an der nechsten kroitzung links und dan immer geradeaus) - Alla prossima rotonda gira a sinistra e poi vai sempre dritto.
Mein Auto springt plötzlich nicht mehr an. (main auto springt plötzlic nicht meer an) - La mia auto all'improvviso non parte più.
Ich hatte gerade einen kleinen Unfall, aber niemand ist verletzt. (ich hate gerade ainen klainen unfall, aber nimant ist ferletzt) - Ho appena avuto un piccolo incidente, ma nessuno si è fatto male.
Wegen des starken Regens ist die Straße komplett überflutet. (vegen des starken regens ist di strasse komplet überflutet) - A causa della forte pioggia la strada è completamente allagata.
Bei uns ist gerade der Strom ausgefallen. (bai uns ist gerade der strom ausgefalen) - Da noi è appena saltata la corrente.
Könnten Sie mir bitte noch ein Handtuch aufs Zimmer bringen? (könnten zi mir bitte noch ain handtuch aufs tsimmer bringen) - Potrebbe portarmi ancora un asciugamano in camera, per favore?
In unserem Bad funktioniert die Dusche nicht richtig. (in unzerem baat funktioniert di dusce nicht richtig) - Nel nostro bagno la doccia non funziona bene.
Die Klimaanlage ist ziemlich laut, besonders nachts. (di klimaanlage ist ziemlich laut, besonders nachts) - L'aria condizionata è piuttosto rumorosa, soprattutto di notte.
Der Gastgeber war supernett und hat uns sogar früher einchecken lassen. (der gastgeber var supernett und hat uns sogar früer ainceken lassen) - Il proprietario è stato gentilissimo e ci ha persino permesso di fare il check-in prima.
Für drei Personen hätten wir gern einen Tisch am Fenster. (für drai personen heten vir gern ainen tisc am fenster) - Per tre persone vorremmo un tavolo vicino alla finestra.
Ich nehme den Fisch, aber bitte ohne Zwiebeln. (ich näme den fisc, aber bitte one tsvibeln) - Prendo il pesce, ma senza cipolle, per favore.
Hast du noch Lust auf einen Drink nach dem Essen? (hast du noch lust auf ainen drink nach dem essen) - Ti va ancora di bere qualcosa dopo cena?
Ich muss noch Milch und Eier kaufen. (ich muss noch milc und aia kaufen) - Devo ancora comprare latte e uova.
Die Jacke sieht gut aus, aber sie ist mir ein bisschen zu teuer. (di iake ziit gut aus, aber zi ist mir ain bisschen tsu toia) - La giacca è bella, ma per me è un po' troppo costosa.
Ich schicke dir die Unterlagen später per E-Mail. (ich scike dir di unterlagen speter per imeil) - Ti mando i documenti più tardi per email.
Kannst du mich kurz hören? Meine Internetverbindung spinnt schon wieder. (kanst du mich kurtz hören? maine internetferbindung spinnt scion vider) - Mi senti un attimo? La connessione Internet fa di nuovo i capricci.
Der Drucker erkennt meinen Laptop einfach nicht. (der druker erkennt mainen leptop ainfac nicht) - La stampante proprio non riconosce il mio portatile.
Das Museum ist viel größer, als ich erwartet hatte. (das muzeum ist fiil gröser, als ich erwartet hate) - Il museo è molto più grande di quanto mi aspettassi.
Wir sind gestern stundenlang durch die Altstadt gelaufen. (vir zint gestern stundenlang durc di altstadt gelaufen) - Ieri abbiamo camminato per ore nel centro storico.
Hast du die Schlüssel gesehen? (Hast du di Shlüssel gezéen?) - Hai visto le chiavi?
Ich hab den Herd schon ausgemacht. (Ish hab den Hert shon aus-gemakt) - Ho già spento i fornelli.
Mach bitte das Licht im Flur aus. (Makh bitte das Likt im Fluur aus) - Spegni per favore la luce nel corridoio.
Die Spülmaschine ist schon wieder kaputt. (Di Shpühlmashiine ist shon vieder kaputt) - La lavastoviglie si è di nuovo rotta.
Wer geht heute mit dem Hund raus? (Vér geet hoite mit dem Hund raus?) - Chi porta fuori il cane oggi?
Gibt's noch Kaffee für mich? (Ghipts nokh Kafee für mish?) - C'è ancora caffè per me?
Iss dein Frühstück auf, du kommst zu spät. (Iss dain Frühshtük auf, du kommst tsu shpèt) - Finisci la colazione, farai tardi.
Hast du deine Hausaufgaben schon fertig? (Hast du daine Hausaufgaben shon fertikh?) - Hai già finito i compiti?
Der Lehrer hat uns viel zu viel aufgegeben. (Der Léarer hat uns fiil tsu fiil aufgegeeben) - Il professore ci ha dato troppi compiti.
Darf ich heute Abend länger draußen bleiben? (Darf ish hoite Aabent lènger drausen blaiben?) - Posso stare fuori più a lungo stasera?
Räum bitte dein Zimmer auf, bevor du rausgehst. (Roim bitte dain Tsimmer auf, befoor du rausgeest) - Metti in ordine la stanza prima di uscire.
Ich brauch was gegen Kopfschmerzen. (Ish braukh vas geegen Kopfshmertsen) - Ho bisogno di qualcosa contro il mal di testa.
Haben Sie das auch ohne Rezept? (Haaben Zii das aukh oone Retsept?) - Ce l'avete anche senza ricetta?
Der Zug hat mal wieder Verspätung. (Der Tsuuk hat maal vieder Fershpèetung) - Il treno è di nuovo in ritardo.
Von welchem Gleis fährt der Zug nach München? (Fon velshem Glais fèrt der Tsuuk nakh Münshen?) - Da quale binario parte il treno per Monaco?
Steig hier um, die U-Bahn fährt nur bis hier. (Shtaik hiir um, di Uubaan fèrt nuur bis hiir) - Cambia qui, la metro arriva solo fino a qui.
Der Bus kommt heute einfach nicht. (Der Buss kommt hoite ainfakh nikht) - L'autobus oggi proprio non arriva.
Wo ist der Check-in-Schalter für diesen Flug? (Voo ist der Chek-in-Shalter für diisen Fluuk?) - Dov'è il banco check-in per questo volo?
Die Fähre legt in zehn Minuten ab. (Di Fèere leekt in tseen Minuuten ap) - Il traghetto parte tra dieci minuti.
Entschuldigung, wie komm ich zum Marktplatz? (Entshuldigung, vii komm ish tsum Marktplats?) - Scusi, come arrivo alla piazza del mercato?
Biegen Sie an der Ampel links ab. (Biigen Zii an der Ampel links ap) - Giri a sinistra al semaforo.
Mein Auto springt einfach nicht an. (Main Auto shpringt ainfakh nikht an) - La mia auto proprio non si accende.
Wir hatten einen kleinen Unfall auf der Autobahn. (Viir hatten ainen klainen Unfal auf der Autobaan) - Abbiamo avuto un piccolo incidente in autostrada.
Können Sie mir den Pannendienst rufen? (Können Zii mir den Pannendiinst ruufen?) - Può chiamarmi il soccorso stradale?
Wegen des Staus komm ich später. (Veegen des Shtaus komm ish shpèter) - A causa del traffico arriverò più tardi.
Der Keller steht schon wieder unter Wasser. (Der Keller shteet shon vieder unter Vasser) - La cantina è di nuovo allagata.
Wir hätten gern ein ruhiges Zimmer zum Hof. (Viir hèten gern ain ruiges Tsimmer tsum Hoof) - Vorremmo una camera tranquilla sul cortile.
Die Klimaanlage funktioniert leider nicht. (Di Klimaanlaage funktsioniirt laider nikht) - Purtroppo il condizionatore non funziona.
Im Zimmer nebenan ist es die ganze Nacht laut. (Im Tsimmer neebenan ist es di gantse Nakht laut) - Nella camera accanto c'è rumore tutta la notte.
Wann checken wir am besten aus? (Van cheken viir am besten aus?) - Quando conviene fare il check-out?
Der Schlüssel für die Wohnung liegt unter der Matte. (Der Shlüssel für di Voonung liikt unter der Matte) - La chiave dell'appartamento è sotto lo zerbino.
Können wir schon mal die Karte haben? (Können viir shon maal di Karte haaben?) - Possiamo già avere il menu?
Für mich bitte das Schnitzel ohne Pommes. (Für mish bitte das Shnitsel oone Pommes) - Per me lo schnitzel senza patatine, grazie.
Sollen wir uns noch auf ein Bier treffen? (Zolen viir uns nokh auf ain Biir treffen?) - Ci vediamo ancora per una birra?
Ich hab gestern was total Peinliches erlebt. (Ish hab gestern vas total Painlishes erleebt) - Ieri mi è successa una cosa davvero imbarazzante.
Brauchst du noch was vom Supermarkt? (Brauchst du nokh vas fom Zuupermarkt?) - Ti serve ancora qualcosa dal supermercato?
Die Tomaten sehen heute nicht so frisch aus. (Di Tomaaten seen hoite nikht zoo frish aus) - I pomodori oggi non sembrano tanto freschi.
Haben Sie das auch in einer anderen Größe? (Haaben Zii das aukh in ainer anderen Grösse?) - Ce l'avete anche in un'altra taglia?
Das Meeting wurde schon wieder verschoben. (Das Miiting vurde shon vieder fershooben) - La riunione è stata di nuovo rimandata.
Kannste mir kurz die Präsentation schicken? (Kannste miir kurts di Prèsentatsioon shiken?) - Puoi mandarmi velocemente la presentazione?
Meine Kamera geht nicht, könnt ihr mich hören? (Maine Kaamera geet nikht, könnt iir mish hören?) - La mia camera non funziona, mi sentite?
Der Drucker hat schon wieder kein Papier. (Der Druker hat shon vieder kain Papiir) - La stampante è di nuovo senza carta.
Das WLAN ist hier echt langsam. (Das Veelaan ist hiir ekt langzaam) - Il wifi qui è davvero lento.
Die Ausstellung im Museum war echt beeindruckend. (Di Ausshtelung im Muzeeum var ekt be-aindrukend) - La mostra al museo era davvero impressionante.
Wollen wir heute Abend ins Kino gehen? (Volen viir hoite Aabent ins Kiino geen?) - Vogliamo andare al cinema stasera?
Die Altstadt ist wirklich schön zum Bummeln. (Di Altshtat ist virklish shöön tsum Bumeln) - Il centro storico è davvero bello per passeggiare.
Der Weg zur Hütte war steiler als gedacht. (Der Veek tsur Hütte var shtailer als gedakht) - Il sentiero per il rifugio era più ripido del previsto.
Am Strand war es heute total voll. (Am Shtrant var es hoite total foll) - In spiaggia oggi era tutto pieno.
Kommt ihr uns dieses Wochenende besuchen? (Kommt iir uns diizes Vokhenende bezuukhen?) - Venite a trovarci questo weekend?
Der Handwerker kommt erst nächste Woche. (Der Hantverker kommt erst nèkste Vokhe) - L'operaio viene solo la prossima settimana.
Wie geht's dir, lange nicht gesehen! (Vii geets diir, lange nikht gezeen!) - Come stai, non ci vediamo da tanto!
Mir tut seit heute Morgen der Bauch weh. (Miir tuut zait hoite Morgen der Baukh vee) - Da stamattina mi fa male la pancia.
Rufen Sie sofort einen Krankenwagen! (Ruufen Zii zofort ainen Krankenvaagen!) - Chiamate subito un'ambulanza!
Jemand hat mir das Fahrrad geklaut. (Yemant hat miir das Faarrat geklaut) - Qualcuno mi ha rubato la bicicletta.
Gehst du heute noch ins Fitnessstudio? (Geest du hoite nokh ins Fitnesshtudio?) - Vai ancora oggi in palestra?
Morgen soll es den ganzen Tag regnen. (Morgen zol es den gantsen Taak reegnen) - Domani dovrebbe piovere tutto il giorno.
Ich muss noch schnell Geld überweisen. (Ish muss nokh shnel Gelt übervaizen) - Devo ancora fare velocemente un bonifico.
Die Karte wurde leider abgelehnt. (Di Karte vurde laider apgelent) - La carta purtroppo è stata rifiutata.
Das Vorstellungsgespräch lief richtig gut. (Das Foorshtelungsgeshprèkh liif rishtikh guut) - Il colloquio di lavoro è andato davvero bene.
Unser Kater will einfach nicht fressen. (Unzer Kaater vill ainfakh nikht fressen) - Il nostro gatto proprio non vuole mangiare.
Wir feiern ihren Geburtstag im Garten. (Viir faiern iiren Geburtstaak im Garten) - Festeggiamo il suo compleanno in giardino.
Ich hab schon zehn Nachrichten von ihr bekommen. (Ish hab shon tseen Nakhrikhten fon iir bekommen) - Ho già ricevuto dieci messaggi da lei.
Ehrlich gesagt, da bin ich anderer Meinung. (Eerlish gezaakt, da bin ish anderer Mainung) - Sinceramente, su questo non sono d'accordo.
Ich freu mich total auf morgen. (Ish froi mish total auf morgen) - Sono davvero contento per domani.
Um wie viel Uhr treffen wir uns genau? (Um vii fiil Uur treffen viir uns genau?) - A che ora ci vediamo esattamente?
Wir sollten wirklich mehr Müll trennen. (Viir zolten virklish meer Müll trennen) - Dovremmo davvero fare più la raccolta differenziata.
Lesen ist echt mein liebstes Hobby. (Leezen ist ekt main liipstes Hobi) - Leggere è davvero il mio hobby preferito.
Der Sprachkurs fängt nächste Woche an. (Der Shprakhkurs fèngt nèkste Vokhe an) - Il corso di lingua inizia la prossima settimana.
Ich hab da neulich eine super Frau kennengelernt. (Ish hab da noilish aine zuuper Frau kenengelernt) - Ho conosciuto di recente una donna fantastica.
Hast du das neue Buch von ihr schon gelesen? (Hast du das noie Buukh fon iir shon gelezen?) - Hai già letto il suo nuovo libro?
Ich hab heute Morgen noch schnell die Betten gemacht. (ich hab hoite morgen noch scnell di betten gemacht) - Stamattina ho rifatto velocemente i letti.
Kannst du bitte die Fenster zumachen? Es zieht ziemlich. (kanst du bitte di fenster tsumachen? es tsiit ziemlich) - Puoi chiudere le finestre, per favore? C'è parecchia corrente.
Die Katze sitzt schon seit einer Stunde vor der Tür. (di katze sitzt scion sait ainer stunde for der tür) - Il gatto è davanti alla porta già da un'ora.
Ich hab vergessen, den Müll rauszubringen. (ich hab fergeben, den mül rauszubringen) - Mi sono dimenticato di portare fuori la spazzatura.
Das Geschirr kann noch ein bisschen in der Spülmaschine bleiben. (das ghescir kan noch ain bisschen in der spülmascine blaiben) - I piatti possono restare ancora un po' nella lavastoviglie.
Frühstück steht auf dem Tisch, bedien dich einfach. (früstück steht auf dem tisc, bediin dich ainfac) - La colazione è sul tavolo, serviti pure.
Wer möchte noch Kaffee? Ich mach gerade welchen. (ver möcte noch kaffe? ich mach gerade velchen) - Chi vuole ancora del caffè? Lo sto preparando.
Warte kurz, das Brot ist noch im Toaster. (varte kurtz, das brot ist noch im toaster) - Aspetta un attimo, il pane è ancora nel tostapane.
Wir essen heute zusammen, auch wenn's spät wird. (vir essen hoite tsusammen, auc ven's spet virt) - Oggi mangiamo insieme, anche se facciamo tardi.
Ich hab keine Ahnung, was wir heute kochen sollen. (ich hab kaine anung, vas vir hoite kochen zollen) - Non ho idea di cosa dovremmo cucinare oggi.
Denk dran, morgen deine Sportsachen mitzunehmen. (denk dran, morgen daine sportzachen mitzunehmen) - Ricordati di portare domani le tue cose da palestra.
Hast du eigentlich für den Test gelernt? (hast du eigentlich für den test gelernt) - Hai studiato per il test?
Die Lehrerin hat uns eine Menge Aufgaben aufgegeben. (di leererin hat uns aine menge aufgaben aufgegeben) - L'insegnante ci ha assegnato un sacco di esercizi.
Ich versteh diese Aufgabe einfach nicht. (ich fersc te deze aufgabe ainfac nicht) - Proprio non capisco questo esercizio.
Wenn du fertig bist, kannst du mir deinen Text zeigen. (ven du fertig bist, kanst du mir dainen text tsaigen) - Quando hai finito, puoi farmi vedere il tuo testo.
Du musst mir Bescheid sagen, bevor du irgendwo hingehst. (du musst mir bescait sagen, bevor du irgendo hingest) - Devi avvisarmi prima di andare da qualche parte.
Heute gibt's keine Bildschirmzeit mehr, es ist schon spät. (hoite gibt's kaine bildschirmtsait meer, es ist scion spet) - Oggi niente più tempo davanti allo schermo, è già tardi.
Kannste morgen den Einkauf mitnehmen? (kanste morgen den ain-kauf mitnemen) - Domani puoi fare anche la spesa?
Ich hab mir beim Arzt einen Termin für nächste Woche geben lassen. (ich hab mir baim artzt ainen termin für nechste voche geben lassen) - Ho preso dal medico un appuntamento per la prossima settimana.
Seit gestern tut mir der Hals beim Schlucken weh. (sait gestern tut mir der hals baim schlucken vee) - Da ieri mi fa male la gola quando deglutisco.
Der Arzt meinte, ich soll mich ein paar Tage schonen. (der artzt meinte, ich zol mich ain paar tage scionen) - Il medico ha detto che dovrei stare a riposo per qualche giorno.
Ich hab meine Versichertenkarte zu Hause liegen lassen. (ich hab maine fersichertenkarte tsu hause liegen lassen) - Ho lasciato a casa la tessera sanitaria.
Am Bahnhof ist heute wegen einer Störung ziemlich viel los. (am baanhof ist hoite wegen ainer störung ziemlich fiil los) - Oggi alla stazione c'è parecchia confusione a causa di un guasto.
Der Zug kommt auf einem anderen Gleis an. (der tsug kommt auf ainem anderen glais an) - Il treno arriva su un altro binario.
Ich hab meinen Anschluss fast verpasst. (ich hab mainen anschluss fast ferpasst) - Ho rischiato di perdere la coincidenza.
Die nächste Straßenbahn fährt in fünf Minuten. (di nechste strassenbaan fert in fünf minuten) - Il prossimo tram parte tra cinque minuti.
Entschuldigung, wo ist hier die nächste Bushaltestelle? (entsculdigung, vo ist hier di nechste bushaltestelle) - Mi scusi, dov'è la fermata dell'autobus più vicina?
Die Linie fährt heute nur bis zum Rathaus. (di linie fert hoite nur bis tsum rathaus) - Oggi questa linea arriva solo fino al municipio.
Am Flughafen mussten wir unsere Koffer noch einmal öffnen. (am flughafen mussten vir unsere koffer noch ainmal öffnen) - In aeroporto abbiamo dovuto aprire di nuovo le valigie.
Mein Gate wurde kurzfristig geändert. (main geit wurde kurtzfristig geändert) - Il mio gate è stato cambiato all'ultimo momento.
Zum Glück hatte der Flug keine große Verspätung. (tsum glück hate der flug kaine grosse ferspetung) - Per fortuna il volo non ha avuto un grosso ritardo.
Wir haben im Hafen noch etwas Zeit, bevor das Schiff ablegt. (vir habn im haafen noch etvas tsait, bevor das schiff ableegt) - Abbiamo ancora un po' di tempo al porto prima che parta la nave.
Fahr vorsichtig, die Straße ist wegen des Regens rutschig. (far forzichtig, di strasse ist wegen des regens rutschig) - Guida con prudenza, la strada è scivolosa per la pioggia.
Mein Navi zeigt eine völlig andere Route an. (main nawi tsaigt aine föllig andere route an) - Il navigatore mi indica un percorso completamente diverso.
Hinter uns hat es gerade gekracht. (hinter uns hat es gerade gekracht) - Dietro di noi è appena avvenuto un incidente.
Der Pannendienst kommt laut App in ungefähr vierzig Minuten. (der pannen-dienst kommt laut äp in ungefer fiarzig minuten) - Secondo l'app, il soccorso stradale arriva tra circa quaranta minuti.
Das Wasser läuft unter der Spüle raus. (das vasser leuft unter der spüle raus) - L'acqua esce da sotto il lavello.
Der Elektriker kommt morgen Vormittag vorbei. (der elektrik-er kommt morgen formittag vorbei) - L'elettricista passa domani in mattinata.
Die Heizung macht seit gestern komische Geräusche. (di haizung macht sait gestern komisce geroische) - Il riscaldamento fa strani rumori da ieri.
In unserem Zimmer ist es nachts viel zu laut. (in unzerem tsimmer ist es nachts fiil tsu laut) - Nella nostra camera di notte c'è troppo rumore.
Wir hätten gern ein anderes Zimmer, wenn das möglich ist. (vir heten gern ain anderes tsimmer, ven das möglich ist) - Vorremmo un'altra camera, se fosse possibile.
Die Wohnung war genauso wie auf den Fotos. (di vonung var genauso vi auf den fotos) - L'appartamento era esattamente come nelle foto.
Unser Gastgeber hat uns eine tolle Restaurantempfehlung gegeben. (unzer gastgeber hat uns aine tolle restaurant-empfelung gegeben) - Il nostro host ci ha consigliato un ottimo ristorante.
Ich hätte gern die Rechnung, wenn's geht. (ich hete gern di rechnung, vens geet) - Vorrei il conto, se possibile.
Für mich bitte ein stilles Wasser. (für mich bitte ain stilles vasser) - Per me un'acqua naturale, per favore.
Der Laden hat leider genau meine Größe nicht mehr. (der laden hat leider genau maine größe nicht meer) - Purtroppo il negozio non ha più proprio la mia taglia.
Ich hab die Datei gerade in den gemeinsamen Ordner hochgeladen. (ich hab di daitai gerade in den gemeinsamen ordner hochgeladen) - Ho appena caricato il file nella cartella condivisa.
Die Besprechung dauert hoffentlich nicht länger als eine Stunde. (di besprechung dauert hoffentlich nicht lenger als aine stunde) - Spero che la riunione non duri più di un'ora.
Mein Akku ist fast leer, ich brauch dringend ein Ladegerät. (main akku ist fast leer, ich brauch dringend ain ladegeret) - La batteria è quasi scarica, mi serve urgentemente un caricabatterie.
Ich hab gestern Abend noch die Küche sauber gemacht. (ich hab gestern abent noch di küce sauber gemacht) - Ieri sera ho ancora pulito la cucina.
Mach die Tür bitte nicht offen, sonst kommt die Kälte rein. (mach di tür bitte nicht offen, sonst kommt di kelte rain) - Non lasciare aperta la porta, altrimenti entra il freddo.
Wo hast du die Ersatzschlüssel hingelegt? (vo hast du di ersatzschlüssl hingelegt) - Dove hai messo le chiavi di riserva?
Der Staubsauger macht seit ein paar Tagen komische Geräusche. (der staubsauger macht sait ain paar tagen komisce geroische) - L'aspirapolvere fa strani rumori da qualche giorno.
Ich häng die Wäsche noch schnell auf, dann können wir los. (ich heng di vesce noch scnell auf, dan können vir los) - Stendo velocemente il bucato, poi possiamo andare.
Hast du den Kühlschrank zugemacht? (hast du den külscrank tsugemacht) - Hai chiuso il frigorifero?
Der Kaffee ist schon kalt, ich mach mir lieber einen neuen. (der kaffe ist scion kalt, ich mach mir liber ainen noien) - Il caffè è già freddo, me ne preparo un altro.
Kannst du mir das Salz rüberreichen? (kanst du mir das zalz rüberraichen) - Mi passi il sale?
Heute Abend bestellen wir einfach etwas zu essen. (hoite abent bestellen vir ainfac etvas tsu essen) - Stasera ordiniamo semplicemente qualcosa da mangiare.
Ich bin noch nicht satt, ich nehme mir ein bisschen Salat. (ich bin noch nicht zatt, ich näme mir ain bisschen zalat) - Non sono ancora sazio, prendo un po' di insalata.
Vergiss deinen Rucksack nicht, sonst musst du wieder umdrehen. (fergiss dainen rucksack nicht, sonst musst du vider umdrehen) - Non dimenticare lo zaino, altrimenti dovrai tornare indietro.
Meine Tochter hat morgen eine wichtige Prüfung. (maine tochter hat morgen aine wichtige prüfung) - Mia figlia ha domani un esame importante.
Der Unterricht fällt heute aus, weil der Lehrer krank ist. (der unterricht felt hoite aus, vail der leerer krank ist) - Oggi la lezione è annullata perché l'insegnante è malato.
Ich hab meinem Sohn versprochen, ihn nach der Schule abzuholen. (ich hab mainem zon fersprochen, in nach der scule abtshuolen) - Ho promesso a mio figlio di andarlo a prendere dopo la scuola.
Du darfst bei deiner Freundin übernachten, aber nur bis Sonntag. (du darfst bai dainer froindin übernachten, aber nur bis sontag) - Puoi dormire dalla tua amica, ma solo fino a domenica.
Warum bist du noch wach? Morgen musst du früh aufstehen. (varum bist du noch vac? morgen musst du frü aufsteen) - Perché sei ancora sveglio? Domani devi alzarti presto.
Die Tabletten sollst du nach dem Essen nehmen. (di tabletten zolst du nach dem essen nemen) - Devi prendere le compresse dopo aver mangiato.
Ich hab seit heute Morgen ein komisches Gefühl im Bauch. (ich hab sait hoite morgen ain komisches gefül im bauc) - Da stamattina ho una strana sensazione alla pancia.
Wenn es schlimmer wird, fahren wir lieber ins Krankenhaus. (ven es schlimmer virt, faren vir liber ins krankenhaus) - Se peggiora, andiamo piuttosto in ospedale.
Der Arzt möchte noch ein paar Untersuchungen machen. (der artzt möcte noch ain paar untersuchungen machen) - Il medico vuole fare ancora alcuni esami.
Der Zug steht schon seit zehn Minuten im Bahnhof. (der tsug steht scion sait tzen minuten im baanhof) - Il treno è fermo in stazione già da dieci minuti.
Ich hab meinen Koffer im Zug liegen lassen. (ich hab mainen koffer im tsug liegen lassen) - Ho lasciato la valigia sul treno.
Gibt's hier irgendwo einen Fahrkartenautomaten? (gibt's hier irgendo ainen fartkartenautomaten) - C'è da qualche parte una biglietteria automatica?
Die Rolltreppe ist kaputt, wir müssen die Treppe nehmen. (di rolltreppe ist kaputt, vir müssen di treppe nemen) - La scala mobile è guasta, dobbiamo usare le scale.
Die U-Bahn fährt heute wegen Bauarbeiten nicht durch. (di u-baan fert hoite wegen bauarbeiten nicht durc) - Oggi la metropolitana non passa a causa dei lavori.
Ich hab den Bus gerade noch erwischt. (ich hab den bus gerade noch erwischt) - Sono riuscito a prendere l'autobus per un pelo.
Der Fahrer hat plötzlich stark gebremst. (der farer hat plötzlich stark gebremst) - L'autista ha frenato bruscamente all'improvviso.
Unser Flug wurde wegen des Wetters gestrichen. (unzer flug wurde wegen des vetters gestrichen) - Il nostro volo è stato cancellato a causa del maltempo.
Wo kann ich meinen Koffer abgeben? (vo kan ich mainen koffer abgeben) - Dove posso consegnare la valigia?
Wir müssen uns beeilen, das Boarding beginnt gleich. (vir müssen uns beailen, das boarding beginnt glaic) - Dobbiamo sbrigarci, il boarding sta per iniziare.
Der Parkplatz am Hafen ist leider schon voll. (der parkplatz am haafen ist leider scion fol) - Purtroppo il parcheggio al porto è già pieno.
Das Schiff schwankt heute ziemlich stark. (das schiff schwankt hoite ziemlich stark) - Oggi la nave oscilla parecchio.
Geh bis zur Ampel und dann rechts ab. (ge bis tsur ampel und dan rechts ap) - Vai fino al semaforo e poi gira a destra.
Ich glaube, wir sind an der falschen Adresse. (ich glaube, vir zint an der falschen adresse) - Credo che siamo all'indirizzo sbagliato.
Mein Reifen verliert langsam Luft. (main raifen ferliirt langsam luft) - Il mio pneumatico perde aria lentamente.
Ich muss die Werkstatt anrufen, bevor es schlimmer wird. (ich muss di verkstatt anrufen, bevor es schlimmer virt) - Devo chiamare l'officina prima che peggiori.
Der Verkehr steht heute fast überall. (der ferker steht hoite fast überal) - Oggi il traffico è praticamente fermo ovunque.
Nach dem Gewitter ist der Keller voll Wasser gelaufen. (nach dem gevitter ist der keller fol vasser gelaufen) - Dopo il temporale la cantina si è riempita d'acqua.
Das Internet ist seit einer Stunde komplett weg. (das internet ist sait ainer stunde komplet vek) - Internet è completamente fuori uso da un'ora.
Wir würden gern noch eine Nacht bleiben, falls das Zimmer frei ist. (vir würden gern noch aine nacht blaiben, falls das tsimmer frai ist) - Vorremmo restare un'altra notte, se la camera è libera.
Könnten Sie jemanden wegen der kaputten Heizung schicken? (könnten zi jemanden wegen der kaputten haizung schicken) - Potrebbe mandare qualcuno per il riscaldamento guasto?
Der Gastgeber hat uns den Schlüssel in einer kleinen Box hinterlegt. (der gastgeber hat uns den schlüssl in ainer klainen box hinterlegt) - L'host ci ha lasciato la chiave in una piccola cassetta.
Ich würde gern zuerst die Tageskarte sehen. (ich würde gern tsuerst di tageskarte zeen) - Vorrei prima vedere il menù del giorno.
Kann ich die Suppe auch ohne Sahne bekommen? (kan ich di zuppe auc one zaane bekommen) - Posso avere la zuppa anche senza panna?
Wir haben uns nach dem Konzert noch auf einen Kaffee getroffen. (vir habn uns nach dem konzert noch auf ainen kaffe getroffen) - Dopo il concerto ci siamo incontrati per un caffè.
Die Hose sitzt gut, aber ich probiere lieber noch eine andere an. (di hose sitzt gut, aber ich probiire liber noch aine andere an) - I pantaloni stanno bene, ma preferisco provarne ancora un altro paio.
Ich muss die Präsentation bis Freitag fertig haben. (ich muss di presentation bis fraitag fertig habn) - Devo avere la presentazione pronta entro venerdì.
Ich hab die Pflanzen heute Morgen gegossen. (ich hab di pflantsen hoite morgen gegossen) - Stamattina ho annaffiato le piante.
Lass deine Schuhe bitte nicht mitten im Wohnzimmer stehen. (lass daine scue bitte nicht mitten im vonzimmer steen) - Non lasciare le scarpe in mezzo al soggiorno, per favore.
Ich hab die Batterien schon ausgetauscht. (ich hab di batterien scion ausgetauscht) - Ho già cambiato le batterie.
Der Wecker hat heute überhaupt nicht geklingelt. (der vekker hat hoite überhaupt nicht geklingelt) - Stamattina la sveglia non è proprio suonata.
Kannst du die Wäsche aus dem Trockner nehmen? (kanst du di vesce aus dem trockner nemen) - Puoi togliere il bucato dall'asciugatrice?
Im Gefrierschrank ist kaum noch Platz. (im gefrierscrank ist kaum noch platz) - Nel congelatore non c'è quasi più spazio.
Ich mach schnell die Fenster auf, bevor wir frühstücken. (ich mach scnell di fenster auf, bevor vir früstücken) - Apro velocemente le finestre prima di fare colazione.
Heute Abend machen wir Pfannkuchen für alle. (hoite abent machen vir pfankuchen für alle) - Stasera facciamo i pancake per tutti.
Nimm dir ruhig noch ein Brötchen. (nim dir ruig noch ain brötchen) - Prenditi pure un altro panino.
Wer hat den letzten Joghurt gegessen? (ver hat den letzten jogurt gegessen) - Chi ha mangiato l'ultimo yogurt?
Ich muss nach dem Mittagessen noch den Abwasch machen. (ich muss nach dem mittagessen noch den apvasc machen) - Dopo pranzo devo ancora lavare i piatti.
Heute haben wir ausnahmsweise früher Feierabend. (hoite habn vir ausnamsvaize früer feierabent) - Oggi eccezionalmente finiamo prima di lavorare.
In welcher Klasse ist dein Sohn jetzt? (in velcer klasse ist dain zon ietzt) - In che classe è adesso tuo figlio?
Meine Tochter hat für Geschichte ein Referat vorbereitet. (maine tochter hat für gescichte ain referat forbereitet) - Mia figlia ha preparato una presentazione di storia.
Sie kommt mit Chemie ganz gut zurecht. (zi kommt mit chemie ganz gut tsurecht) - Se la cava abbastanza bene in chimica.
Der Lehrer hat ihnen erlaubt, die Aufgabe zu zweit zu machen. (der leerer hat inen erlaubt, di aufgabe tsu tsveit tsu machen) - L'insegnante ha permesso loro di fare l'esercizio in coppia.
Du kannst nach dem Abendessen noch eine Stunde fernsehen. (du kanst nach dem abentessen noch aine stunde fernzeen) - Dopo cena puoi guardare ancora un'ora di televisione.
Heute musst du spätestens um elf im Bett sein. (hoite musst du spetestens um elf im bett zain) - Stasera devi essere a letto entro le undici al più tardi.
Ich will nur kurz wissen, wo du bist. (ich vil nur kurtz wissen, vo du bist) - Voglio solo sapere brevemente dove sei.
Nimm vorsichtshalber einen Regenschirm mit. (nim forzictshalber ainen regenscirm mit) - Per sicurezza porta un ombrello.
Meine Nase ist seit gestern total verstopft. (maine nase ist sait gestern total ferstopft) - Ho il naso completamente chiuso da ieri.
Hast du schon etwas gegen den Husten genommen? (hast du scion etvas gegen den husten genommen) - Hai già preso qualcosa per la tosse?
Ich vertrage dieses Medikament leider nicht. (ich fertrage dieses medikament leider nicht) - Purtroppo non tollero questo farmaco.
In der Notaufnahme war ziemlich viel los. (in der notaufnahme var ziemlich fiil los) - Al pronto soccorso c'era parecchia confusione.
Mein Zug wurde gerade auf Gleis zwölf angekündigt. (main tsug wurde gerade auf glais tsvölf angekündigt) - Hanno appena annunciato il mio treno al binario dodici.
Wir sollten lieber zehn Minuten früher am Bahnhof sein. (vir zolten liber tzen minuten früer am baanhof zain) - Faremmo meglio ad arrivare in stazione dieci minuti prima.
Der Schaffner kontrolliert gerade die Fahrkarten. (der scafner kontrolirt gerade di fartkarten) - Il controllore sta controllando i biglietti.
Wo müssen wir für die nächste Linie hin? (vo müssen vir für di nechste linie hin) - Dove dobbiamo andare per la prossima linea?
Die Straßenbahn kommt heute ungewöhnlich spät. (di strassenbaan kommt hoite ungewönlic spet) - Oggi il tram arriva insolitamente tardi.
Ich nehme lieber den Bus, dann müssen wir nicht so weit laufen. (ich näme liber den bus, dan müssen vir nicht so vait laufen) - Preferisco prendere l'autobus, così non dobbiamo camminare tanto.
An dieser Haltestelle halten zwei verschiedene Linien. (an diza haltestelle halten tsvai ferscidene linien) - A questa fermata fermano due linee diverse.
Wir haben beim Sicherheitscheck fast nichts mehr in den Taschen gehabt. (vir habn baim ziherhaitscheck fast nichts meer in den taschen gehabt) - Al controllo di sicurezza avevamo praticamente più nulla nelle tasche.
Mein Koffer ist auf dem Gepäckband noch nicht aufgetaucht. (main koffer ist auf dem gepeckband noch nicht aufgetaucht) - La mia valigia non è ancora comparsa sul nastro bagagli.
Der Abflug verspätet sich um etwa eine halbe Stunde. (der abflug ferspetet zich um etva aine halbe stunde) - La partenza è in ritardo di circa mezz'ora.
Wir sollten vor der Überfahrt noch etwas essen. (vir zolten for der überfart noch etvas essen) - Prima della traversata dovremmo mangiare qualcosa.
Der Wind ist draußen ziemlich stark geworden. (der vint ist draussen ziemlich stark geworden) - Fuori il vento è diventato piuttosto forte.
Bieg nach der Tankstelle rechts ab. (biig nach der tankstelle rechts ap) - Gira a destra dopo il distributore di benzina.
Ich glaube, die nächste Straße ist die richtige. (ich glaube, di nechste strasse ist di richtige) - Credo che la prossima strada sia quella giusta.
Das Auto macht beim Bremsen ein seltsames Geräusch. (das auto macht baim bremsen ain zeltsames geroisch) - L'auto fa uno strano rumore quando freno.
Zum Glück ist nur der Außenspiegel kaputt. (tsum glück ist nur der aussenspigel kaputt) - Per fortuna è rotto solo lo specchietto esterno.
Die Feuerwehr hat die Straße vorübergehend gesperrt. (di feuerver hat di strasse forübergehend gesperrt) - I vigili del fuoco hanno chiuso temporaneamente la strada.
Wir hatten wegen des Stromausfalls plötzlich kein Licht mehr. (vir hatten wegen des stromausfalls plötzlich kain licht meer) - A causa del blackout all'improvviso non avevamo più luce.
Der Aufzug im Hotel ist heute außer Betrieb. (der auftsug im hotel ist hoite ausser betrib) - L'ascensore dell'hotel oggi è fuori servizio.
Könnten wir beim Frühstück einen Tisch draußen bekommen? (könnten vir baim früstück ainen tisc draussen bekommen) - Potremmo avere un tavolo fuori per la colazione?
Das Wasser in der Dusche wird einfach nicht warm. (das vasser in der dusce virt ainfac nicht varm) - L'acqua della doccia proprio non diventa calda.
Wir haben gestern im Museum eine interessante Ausstellung gesehen. (vir habn gestern im muzeum aine interessante ausstellung gesehen) - Ieri abbiamo visto una mostra interessante al museo.
Der Eintritt für die Ausstellung ist heute kostenlos. (der aintritt für di ausstellung ist hoite kostenlos) - Oggi l'ingresso alla mostra è gratuito.
Der Film war anders, als ich erwartet hatte, aber ich fand ihn gut. (der film var anders, als ich erwartet hate, aber ich fant in gut) - Il film era diverso da come me l'aspettavo, ma mi è piaciuto.
Ich hab heute endlich den Kleiderschrank aufgeräumt. (ich hab hoite endlich den klaiderscrank aufgeräumt) - Oggi finalmente ho riordinato l'armadio.
Die Batterien für die Fernbedienung sind schon wieder leer. (di batterien für di fernbedinung zint scion vider leer) - Le batterie del telecomando sono già scariche di nuovo.
Stell das Fenster im Schlafzimmer bitte auf Kipp. (stell das fenster im sclafzimmer bitte auf kipp) - Lascia socchiusa la finestra della camera da letto, per favore.
Der Hund schläft heute den ganzen Vormittag. (der hund sleeft hoite den ganzen formittag) - Oggi il cane dorme per tutta la mattinata.
Ich muss noch die Handtücher zusammenlegen. (ich muss noch di handtücher tsusammenlegen) - Devo ancora piegare gli asciugamani.
Die Waschmaschine ist fertig, du kannst sie ausräumen. (di vasmascine ist fertig, du kanst zi ausroimen) - La lavatrice ha finito, puoi svuotarla.
Ich hab morgens nie viel Hunger. (ich hab morgens nie fiil hunger) - La mattina non ho mai molta fame.
Kannst du den Käse aus dem Kühlschrank holen? (kanst du den kese aus dem külscrank holen) - Puoi prendere il formaggio dal frigorifero?
Wir machen heute Abend etwas Einfaches, ich bin ziemlich müde. (vir machen hoite abent etvas ainfaches, ich bin ziemlich müde) - Stasera facciamo qualcosa di semplice, sono piuttosto stanco.
Lass den Teller ruhig stehen, ich räum später alles weg. (lass den teller ruig steen, ich roim speter alles vek) - Lascia pure il piatto lì, sistemo tutto più tardi.
Ich hab morgen einen Elternabend in der Schule. (ich hab morgen ainen elternabent in der scule) - Domani ho una riunione dei genitori a scuola.
Die Hausaufgaben für Deutsch waren diesmal ziemlich einfach. (di hausaufgaben für doitsch varen diesmal ziemlich ainfac) - Questa volta i compiti di tedesco erano piuttosto facili.
Meine Tochter lernt gerade für eine wichtige Klausur. (maine tochter lernt gerade für aine wichtige klausur) - Mia figlia sta studiando per un esame importante.
Der Unterricht beginnt morgen erst um neun. (der unterricht beginnt morgen erst um noin) - Domani le lezioni iniziano solo alle nove.
Ich hab dir doch gesagt, dass du vorher fragen musst. (ich hab dir doch gesagt, das du forher fragen musst) - Ti avevo detto che prima devi chiedere.
Wenn du deine Aufgaben erledigt hast, kannst du zu deinen Freunden gehen. (ven du daine aufgaben erledigt hast, kanst du tsu dainen froinden geen) - Quando hai finito i compiti, puoi andare dai tuoi amici.
Heute gibt's keine Ausnahme, morgen musst du wieder früh aufstehen. (hoite gibt's kaine ausname, morgen musst du vider frü aufsteen) - Oggi niente eccezioni, domani devi alzarti presto di nuovo.
Ich hab in der Apotheke nach etwas für meine Allergie gefragt. (ich hab in der apoteke nach etvas für maine allergie gefragt) - In farmacia ho chiesto qualcosa per la mia allergia.
Der Apotheker hat mir ein Nasenspray empfohlen. (der apoteker hat mir ain nasenscpray empfohlen) - Il farmacista mi ha consigliato uno spray nasale.
Ich fühle mich seit ein paar Tagen nicht besonders gut. (ich füle mich sait ain paar tagen nicht besonders gut) - Da qualche giorno non mi sento molto bene.
Die Untersuchung dauert laut Arzt nicht lange. (di untersuchung dauert laut artzt nicht lange) - Secondo il medico la visita non durerà molto.
Der Zug fährt heute ausnahmsweise fünf Minuten früher ab. (der tsug fert hoite ausnamsvaize fünf minuten früer ap) - Oggi eccezionalmente il treno parte cinque minuti prima.
Wir sitzen ganz vorne im Zug. (vir sitzen gants forne im tsug) - Siamo seduti proprio davanti sul treno.
Ich hab noch ein Ticket für die Rückfahrt besorgt. (ich hab noch ain tiket für di rückfart besorgt) - Ho preso anche un biglietto per il viaggio di ritorno.
Die nächste U-Bahn kommt in weniger als drei Minuten. (di nechste u-baan kommt in veniger als drai minuten) - La prossima metropolitana arriva tra meno di tre minuti.
Wir müssen an der Endstation umsteigen. (vir müssen an der endstation umstaigen) - Dobbiamo cambiare alla stazione capolinea.
Die Anzeige zeigt an, dass die Linie unterbrochen ist. (di antsaige tsaigt an, das di linie unterbrochen ist) - Il display indica che la linea è interrotta.
Der Busfahrer hat uns noch schnell mitgenommen. (der busfarer hat uns noch scnell mitgenommen) - L'autista dell'autobus ci ha fatto salire al volo.
Ich steige lieber vorne ein, da ist meistens mehr Platz. (ich staige liber forne ain, da ist maistens meer platz) - Preferisco salire davanti, lì di solito c'è più spazio.
Am Flughafen ist heute unglaublich viel Betrieb. (am flughafen ist hoite unglaublic fiil betrib) - Oggi in aeroporto c'è un movimento incredibile.
Wir haben nur noch zwanzig Minuten bis zum Boarding. (vir habn nur noch tsvantsig minuten bis tsum boarding) - Abbiamo solo venti minuti prima del boarding.
Mein Sitzplatz ist direkt am Fenster. (main zitzplatz ist direkt am fenster) - Il mio posto è proprio vicino al finestrino.
Die Fähre ist wegen des starken Winds später abgefahren. (di fere ist wegen des starken vints speter abgefaren) - Il traghetto è partito più tardi a causa del forte vento.
Vom Parkplatz bis zum Hafen sind es ungefähr fünf Minuten. (fom parkplatz bis tsum haafen zint es ungefer fünf minuten) - Dal parcheggio al porto sono circa cinque minuti.
Ich glaube, wir haben gerade die falsche Ausfahrt genommen. (ich glaube, vir habn gerade di false ausfart genommen) - Credo che abbiamo appena preso l'uscita sbagliata.
Fahr einfach langsam weiter, wir können später wenden. (far ainfac langsam vaita, vir können speter venden) - Continua semplicemente piano, possiamo fare inversione più avanti.
Mein Auto zeigt plötzlich eine Warnleuchte an. (main auto tsaigt plötzlich aine varnloichte an) - La mia auto mostra improvvisamente una spia.
Ich rufe lieber den Pannendienst, bevor ich weiterfahre. (ich rufe liber den pannen-dienst, bevor ich vaita-fare) - Preferisco chiamare il soccorso stradale prima di ripartire.
Die Kreuzung ist wegen einer Baustelle gesperrt. (di kroitzung ist wegen ainer baustelle gesperrt) - L'incrocio è chiuso a causa di un cantiere.
Nach dem Unwetter liegen überall Äste auf der Straße. (nach dem unvetter liegen überal este auf der strasse) - Dopo il maltempo ci sono rami dappertutto sulla strada.
Unser Hotel liegt ziemlich nah am Bahnhof. (unzer hotel ligt ziemlich naa am baanhof) - Il nostro hotel è abbastanza vicino alla stazione.
Das WLAN-Passwort steht auf einem Zettel neben dem Fernseher. (das ve-lan-passvort steht auf ainem tsettel neben dem fernzeer) - La password del Wi-Fi è su un foglietto accanto alla televisione.
Im Bad fehlt leider noch Seife. (im baat felt leider noch zaife) - Purtroppo in bagno manca ancora il sapone.
Das Zimmer wurde heute Morgen noch nicht gereinigt. (das tsimmer wurde hoite morgen noch nicht gereinigt) - La camera stamattina non è ancora stata pulita.
Wir würden gern zwei zusätzliche Kissen bekommen. (vir würden gern tsvai etsütslice kissen bekommen) - Vorremmo avere due cuscini aggiuntivi.
Die Wohnung ist schön, aber nachts hört man jedes Geräusch von draußen. (di vonung ist scön, aber nachts hört man jedes geroisc fon draussen) - L'appartamento è bello, ma di notte si sente ogni rumore proveniente dall'esterno.
Der Vermieter hat gesagt, dass der Techniker morgen kommt. (der fermiter hat gesagt, das der techniker morgen kommt) - Il proprietario ha detto che il tecnico verrà domani.
Ich hätte gern einen Tisch für zwei, wenn etwas frei ist. (ich hete gern ainen tisc für tsvai, ven etvas frai ist) - Vorrei un tavolo per due, se c'è posto.
Kann ich statt Pommes auch einen Salat dazu bekommen? (kan ich statt pommes auc ainen zalat datsu bekommen) - Posso avere un'insalata al posto delle patatine?
Der Kellner hat uns ein Gericht des Tages empfohlen. (der kellner hat uns ain gerict des tages empfohlen) - Il cameriere ci ha consigliato un piatto del giorno.
Nach dem Essen sind wir noch ein bisschen durch die Stadt gelaufen. (nach dem essen zint vir noch ain bisschen durc di stadt gelaufen) - Dopo cena abbiamo fatto ancora una passeggiata per la città.
Heute ist die Luft draußen angenehm frisch. (hoite ist di luft draussen angenehm frisc) - Oggi l'aria fuori è piacevolmente fresca.
Ich hab die ganze Nacht kaum geschlafen. (ich hab di gantse nacht kaum geschlafen) - Stanotte ho dormito a malapena.
Das Wetter soll am Wochenende deutlich besser werden. (das vetter zol am vochenende doitlec besser werden) - Nel fine settimana il tempo dovrebbe migliorare nettamente.
Bei dem Wind nehme ich lieber eine Jacke mit. (bai dem vint näme ich liber aine iake mit) - Con questo vento preferisco portare una giacca.
Morgen soll es den ganzen Tag regnen. (morgen zol es den ganzen tag regnen) - Domani dovrebbe piovere tutto il giorno.
Ich hab mein Konto gerade online überprüft. (ich hab main konto gerade onlain überprift) - Ho appena controllato il mio conto online.
Die Überweisung müsste spätestens morgen ankommen. (di übervaizung müsste spetestens morgen ankommen) - Il bonifico dovrebbe arrivare al più tardi domani.
Meine Karte wurde an der Kasse plötzlich abgelehnt. (maine karte wurde an der kasse plötzlich abgeleent) - La mia carta è stata improvvisamente rifiutata alla cassa.
Ich hab den Betrag lieber noch einmal kontrolliert. (ich hab den betrag liber noch ainmal kontrolliert) - Ho preferito controllare ancora una volta l'importo.
Kannst du mir das Geld bis Freitag überweisen? (kanst du mir das gelt bis fraitag übervaizen) - Puoi farmi il bonifico entro venerdì?
Ich hab nächste Woche ein Vorstellungsgespräch. (ich hab nechste voche ain forstellungsgespräch) - La prossima settimana ho un colloquio di lavoro.
Die Stelle klingt interessant, vor allem wegen der Arbeitszeiten. (di stelle klingt interessant, for allem wegen der arbeits-tsaiten) - Il posto sembra interessante, soprattutto per gli orari di lavoro.
Ich möchte im Gespräch ehrlich über meine Erfahrung sprechen. (ich möcte im gespräch eerlic über maine erfaarung sprechen) - Durante il colloquio voglio parlare sinceramente della mia esperienza.
Mein Chef hat mir mehr Verantwortung angeboten. (main scèf hat mir meer ferantvortung angeboten) - Il mio capo mi ha offerto maggiori responsabilità.
Ich überlege noch, ob ich den Job wechseln soll. (ich überlege noch, ob ich den job veksln zol) - Sto ancora pensando se cambiare lavoro.
Unsere Katze muss nächste Woche zum Tierarzt. (unzere katze muss nechste voche tsum tierartzt) - La nostra gatta deve andare dal veterinario la prossima settimana.
Der Hund hat seit gestern keinen Appetit. (der hund hat sait gestern kainen appetit) - Il cane non ha appetito da ieri.
Der Tierarzt will ihn zur Sicherheit untersuchen. (der tierartzt vil in tsur ziherhait untersuchen) - Il veterinario vuole visitarlo per sicurezza.
Wir feiern dieses Jahr Weihnachten bei meinen Eltern. (vir faiern dieses jaar va nachts bei mainen eltern) - Quest'anno festeggiamo il Natale dai miei genitori.
Zum Geburtstag schenken wir ihr etwas ganz Besonderes. (tsum geburtstag schenken vir ir etvas gants besonderes) - Per il compleanno le regaliamo qualcosa di davvero speciale.
Auf der Hochzeit waren viel mehr Leute als erwartet. (auf der hochtsait varen fiil meer loite als erwartet) - Al matrimonio c'erano molte più persone del previsto.
Ich hab dir gerade eine Nachricht geschickt. (ich hab dir gerade aine nachricht geschickt) - Ti ho appena mandato un messaggio.
Warum bekomme ich ständig diese Benachrichtigungen? (varum bekomme ich ständig deze benachrichtigungen) - Perché continuo a ricevere queste notifiche?
Die App funktioniert nach dem Update irgendwie nicht mehr richtig. (di äp funktioniert nach dem update irgendwie nicht meer richtig) - Dopo l'aggiornamento l'app non funziona più bene.
Da bin ich ganz deiner Meinung. (da bin ich gants dainer mainung) - Su questo sono completamente d'accordo con te.
Ich sehe das ein bisschen anders als du. (ich zee das ain bisschen anders als du) - Io la vedo un po' diversamente da te.
Ganz ehrlich, ich würde das nicht machen. (gants eerlic, ich würde das nicht machen) - Sinceramente, io non lo farei.
Das hat mich heute ziemlich geärgert. (das hat mich hoite ziemlich geärgert) - Questa cosa oggi mi ha dato parecchio fastidio.
Ich bin gerade total entspannt. (ich bin gerade total entspannt) - In questo momento sono completamente rilassato.
Heute war einfach nicht mein Tag. (hoite var ainfac nicht main tag) - Oggi non era proprio la mia giornata.
Ich freu mich schon auf das Wochenende. (ich froi mich scion auf das vochenende) - Non vedo già l'ora che arrivi il fine settimana.
Wir treffen uns am Samstag gegen sechs. (vir treffen uns am zamstag gegen zeks) - Ci vediamo sabato verso le sei.
Hast du den Termin für Montag noch im Kopf? (hast du den termin für montag noch im kopf) - Ti ricordi ancora dell'appuntamento di lunedì?
Ich hab mir die Uhrzeit extra aufgeschrieben. (ich hab mir di urtsait extra aufgeschrieben) - Mi sono segnato apposta l'orario.
Wir sollten spätestens um halb acht losfahren. (vir zolten spetestens um halb acht losfaren) - Dovremmo partire al più tardi alle sette e mezza.
Ich bringe das Glas später zum Container. (ich bringe das glas speter tsum kontainer) - Più tardi porto il vetro al cassonetto.
Wir versuchen zu Hause weniger Strom zu verbrauchen. (vir fersuchen tsu hause veniger strom tsu ferbrauchen) - Cerchiamo di consumare meno elettricità in casa.
Das Fahrrad ist für kurze Strecken viel praktischer. (das farat ist für kurtse strecken fiil praktischer) - La bicicletta è molto più pratica per i tragitti brevi.
Ich lese gerade einen Roman, den mir ein Freund empfohlen hat. (ich leze gerade ainen roman, den mir ain froint empfohlen hat) - Sto leggendo un romanzo che mi ha consigliato un amico.
Wir hören beim Kochen meistens Musik. (vir hören baim kochen maistens musik) - Mentre cuciniamo ascoltiamo quasi sempre musica.
Am Wochenende spielen wir manchmal Karten. (am vochenende scpilen vir manchmal karten) - Nel fine settimana a volte giochiamo a carte.
Ich hab mich für einen Abendkurs angemeldet. (ich hab mich für ainen abentkurs angemeldet) - Mi sono iscritto a un corso serale.
Der Sprachkurs findet zweimal pro Woche statt. (der sprac kurs findet tsvai-mal pro voche statt) - Il corso di lingua si tiene due volte alla settimana.
An der Uni hatte ich besonders gern Geschichte. (an der uni hate ich besonders gern gescichte) - All'università mi piaceva particolarmente la storia.
Wir haben uns gestern zum ersten Mal persönlich getroffen. (vir habn uns gestern tsum ersten mal persönlich getroffen) - Ieri ci siamo incontrati di persona per la prima volta.
Stell dich ruhig vor, die anderen kennen dich noch nicht. (stell dich ruig for, di anderen kennen dich noch nicht) - Presentati pure, gli altri non ti conoscono ancora.
Ich hab das Buch gestern zu Ende gelesen. (ich hab das buc gestern tsu ende gelesen) - Ieri ho finito di leggere il libro.
Der Film war spannend, aber das Ende hat mich überrascht. (der film var spannend, aber das ende hat mich überrascht) - Il film era avvincente, ma il finale mi ha sorpreso.
Ich hab heute Morgen die Küche gelüftet. (ich hab hoite morgen di küce gelüftet) - Stamattina ho arieggiato la cucina.
Die Haustür klemmt seit gestern ein bisschen. (di haustür klemmt sait gestern ain bisschen) - La porta d'ingresso si inceppa un po' da ieri.
Ich hab die Schlüssel diesmal direkt neben die Tasche gelegt. (ich hab di schlüssl diesmal direkt neben di tasce gelegt) - Questa volta ho messo le chiavi proprio accanto alla borsa.
Der Hund wartet schon ungeduldig auf sein Futter. (der hund wartet scion ungeduldig auf zain futter) - Il cane aspetta già impazientemente il suo cibo.
Ich muss noch die Bettwäsche wechseln. (ich muss noch di betvesce veksln) - Devo ancora cambiare la biancheria da letto.
Die Spülmaschine ist noch nicht ganz voll. (di spülmascine ist noch nicht gants fol) - La lavastoviglie non è ancora completamente piena.
Stell die Milch bitte wieder in den Kühlschrank. (stell di milc bitte vider in den külscrank) - Rimetti il latte in frigorifero, per favore.
Zum Frühstück hätte ich gern etwas Obst. (tsum früstück hete ich gern etvas obst) - A colazione vorrei della frutta.
Heute Mittag essen wir schnell etwas in der Küche. (hoite mittag essen vir scnell etvas in der küce) - Oggi a pranzo mangiamo velocemente qualcosa in cucina.
Kannst du nachher den Tisch abwischen? (kanst du nacher den tisc apviscen) - Puoi pulire il tavolo più tardi?
Mein Sohn hat seine Sporttasche in der Schule vergessen. (main zon hat zaine sporttasce in der scule fergeben) - Mio figlio ha dimenticato la borsa da sport a scuola.
Für Physik muss ich noch ein Kapitel lesen. (für fizik muss ich noch ain kapitel lesen) - Per fisica devo ancora leggere un capitolo.
Die Klassenlehrerin möchte morgen mit uns sprechen. (di klassenleererin möcte morgen mit uns sprechen) - La coordinatrice di classe vuole parlare con noi domani.
Er hat heute wegen der Hausaufgaben schlechte Laune. (er hat hoite wegen der hausaufgaben slechte laune) - Oggi è di cattivo umore per i compiti.
Du kannst die Tür offen lassen, ich komme gleich nach. (du kanst di tür offen lassen, ich komme glaic nach) - Puoi lasciare aperta la porta, arrivo subito.
Ich will nur, dass du mir kurz Bescheid gibst. (ich vil nur, das du mir kurtz bescait gibst) - Voglio solo che mi avvisi velocemente.
Nach zehn Uhr gibt's bei uns kein Handy mehr. (nach tzen uur gibt's bai uns kain hendi meer) - Dopo le dieci da noi niente più cellulare.
Ich hab mir in der Apotheke etwas gegen Sodbrennen geholt. (ich hab mir in der apoteke etvas gegen zodbrennen geholt) - In farmacia ho preso qualcosa contro il bruciore di stomaco.
Die Ärztin hat gesagt, ich soll viel trinken. (di ärtstin hat gesagt, ich zol fiil trinken) - La dottoressa ha detto che devo bere molto.
Ich hab zum Glück kein Fieber. (ich hab tsum glück kain fiber) - Per fortuna non ho la febbre.
Falls die Schmerzen bleiben, gehe ich noch mal zum Arzt. (falls di scmerzen blaiben, ge-e ich noch mal tsum artzt) - Se il dolore persiste, torno dal medico.
Der Regionalzug hält nicht an jeder Station. (der regionaltsug helt nicht an jeder station) - Il treno regionale non ferma in ogni stazione.
Wir haben noch genug Zeit, um einen Kaffee zu trinken. (vir habn noch genug tsait, um ainen kaffe tsu trinken) - Abbiamo ancora abbastanza tempo per bere un caffè.
Mein Sitzplatz ist leider schon besetzt. (main zitzplatz ist leider scion besetzt) - Purtroppo il mio posto è già occupato.
In der U-Bahn gibt es heute eine Durchsage nach der anderen. (in der u-baan gibt es hoite aine durcsage nach der anderen) - Oggi in metropolitana c'è un annuncio dopo l'altro.
Die Station ist von hier aus nur zwei Haltestellen entfernt. (di station ist fon hier aus nur tsvai haltestellen entfernt) - Da qui la stazione dista solo due fermate.
Ich hab den Bus verpasst und muss jetzt zu Fuß gehen. (ich hab den bus ferpasst und muss ietzt tsu fus geen) - Ho perso l'autobus e adesso devo andare a piedi.
Der Bus steckt wegen des Verkehrs im Stau. (der bus steckt wegen des ferkers im stau) - L'autobus è bloccato nel traffico.
Wir sollten lieber eine frühere Verbindung nehmen. (vir zolten liber aine früere ferbindung nemen) - Faremmo meglio a prendere una coincidenza precedente.
Beim Check-in mussten wir unsere Ausweise zeigen. (baim check-in mussten vir unsere ausvaize tsaigen) - Al check-in abbiamo dovuto mostrare i documenti.
Ich hab meinen Pass sicherheitshalber ins Handgepäck gelegt. (ich hab mainen pass ziherhaitshalber ins handgepek gelegt) - Per sicurezza ho messo il passaporto nel bagaglio a mano.
Unser Flug startet heute von Terminal zwei. (unzer flug startet hoite fon terminal tsvai) - Il nostro volo parte oggi dal terminal due.
Die Fähre ist ziemlich voll, aber wir haben noch einen Sitzplatz gefunden. (di fere ist ziemlich fol, aber vir habn noch ainen zitzplatz gefunden) - Il traghetto è piuttosto pieno, ma abbiamo trovato ancora un posto a sedere.
Vom Hafen aus kannst du die Festung sehen. (fom haafen aus kanst du di festung zeen) - Dal porto puoi vedere la fortezza.
Wir sind an der Kreuzung vorbeigefahren und mussten umdrehen. (vir zint an der kroitzung forbaigefaren und mussten umdrehen) - Siamo passati oltre l'incrocio e abbiamo dovuto tornare indietro.
Hier irgendwo müsste eine Tankstelle sein. (hier irgendo müsste aine tankstelle zain) - Qui da qualche parte dovrebbe esserci un distributore.
Die Batterie ist leer, deshalb geht die Fernbedienung nicht. (di batteri ist leer, deshalp geet di fernbedinung nicht) - La batteria è scarica, per questo il telecomando non funziona.
Ich hab eine Panne, können Sie mir bitte helfen? (ich hab aine panne, können zi mir bitte helfen) - Ho un guasto, può aiutarmi per favore?
Auf dieser Straße ist morgens immer Stau. (auf diza strasse ist morgens immer stau) - Su questa strada al mattino c'è sempre traffico.
Der Gehweg ist nach dem Regen komplett voller Wasser. (der gee-vek ist nach dem regen komplet voller vasser) - Dopo la pioggia il marciapiede è completamente pieno d'acqua.
Im Hotelzimmer fehlt eine Steckdose neben dem Bett. (im hoteltsimmer felt aine steckdose neben dem bett) - Nella camera d'hotel manca una presa vicino al letto.
Könnten Sie bitte jemanden schicken, um den Fernseher zu reparieren? (könnten zi bitte jemanden schicken, um den fernzeer tsu reparieren) - Potrebbe mandare qualcuno a riparare il televisore?
Der Frühstücksraum öffnet erst um sieben Uhr. (der früstücksraum öffnet erst um ziben uur) - La sala colazione apre solo alle sette.
Im Ferienhaus gab es sogar eine kleine Terrasse. (im ferienhaus gab es sogar aine klaine terrasse) - Nella casa vacanze c'era persino una piccola terrazza.
Wir haben uns im Restaurant für das Menü des Hauses entschieden. (vir habn uns im restaurant für das menü des hauses entschieden) - Al ristorante abbiamo scelto il menù della casa.
Ich nehme lieber etwas Leichtes, ich hab heute keinen großen Hunger. (ich näme liber etvas laictes, ich hab hoite kainen grossen hunger) - Preferisco qualcosa di leggero, oggi non ho molta fame.
Die Portion war größer, als ich gedacht hatte. (di portion var gröser, als ich gedacht hate) - La porzione era più grande di quanto pensassi.
Nach der Arbeit gehen wir noch kurz in unsere Stammkneipe. (nach der arbeit geen vir noch kurtz in unsere stamm-knaipe) - Dopo il lavoro passiamo ancora un attimo nel nostro locale abituale.
Ich hab ihm die Geschichte gestern schon erzählt. (ich hab im di gescichte gestern scion erzählt) - Gliel'ho già raccontata ieri, la storia.
Heute muss ich unbedingt noch den Boden wischen. (hoite muss ich unbedingt noch den boden viscen) - Oggi devo assolutamente ancora lavare il pavimento.
Die Lampe im Flur geht manchmal von allein aus. (di lampe im flur geet manchmal fon allein aus) - La lampada in corridoio a volte si spegne da sola.
Ich hab die Tür abgeschlossen, bevor ich gegangen bin. (ich hab di tür abgeschlosen, bevor ich gegangen bin) - Ho chiuso a chiave la porta prima di uscire.
Unser Kater versteckt sich gern unter dem Sofa. (unzer kater fersteckt zich gern unter dem sofa) - Il nostro gatto ama nascondersi sotto il divano.
Die Wäsche ist noch feucht, ich lass sie lieber länger trocknen. (di vesce ist noch foicht, ich lass zi liber lenger trocknen) - Il bucato è ancora umido, preferisco lasciarlo asciugare più a lungo.
Der Geschirrspüler zeigt einen Fehler an. (der ghesirspüler tsaigt ainen feeler an) - La lavastoviglie segnala un errore.
Ich hab heute Morgen ein Ei und ein Brötchen gegessen. (ich hab hoite morgen ain ai und ain brötchen gegessen) - Stamattina ho mangiato un uovo e un panino.
Kannst du schon mal das Gemüse schneiden? (kanst du scion mal das gemüze scnaiden) - Puoi intanto tagliare le verdure?
Nach dem Essen trinken wir meistens noch einen Tee. (nach dem essen trinken vir maistens noch ainen tee) - Dopo cena di solito beviamo ancora un tè.
Heute bleibt die Küche kalt, wir essen unterwegs. (hoite blaibt di küce kalt, vir essen unterwegs) - Oggi non cuciniamo, mangiamo fuori.
Meine Tochter muss morgen eine Präsentation halten. (maine tochter muss morgen aine presentation halten) - Mia figlia domani deve fare una presentazione.
In Englisch hat sie sich deutlich verbessert. (in englisc hat zi zich doitlec ferbessert) - In inglese è migliorata notevolmente.
Der neue Lehrer wirkt ziemlich nett. (der noie leerer virkt ziemlich nett) - Il nuovo insegnante sembra piuttosto simpatico.
Wir haben heute nach der Schule noch einen Termin. (vir habn hoite nach der scule noch ainen termin) - Oggi dopo la scuola abbiamo ancora un appuntamento.
Du weißt genau, wann du zu Hause sein musst. (du vaist genau, van du tsu hause zain musst) - Sai benissimo quando devi essere a casa.
Ich möchte, dass du mir vorher eine Nachricht schreibst. (ich möcte, das du mir forher aine nachricht scraibst) - Voglio che prima mi mandi un messaggio.
Du kannst deine Freunde einladen, aber sag mir vorher Bescheid. (du kanst daine froinde ainladen, aber sag mir forher bescait) - Puoi invitare i tuoi amici, ma prima avvisami.
Ich hab heute Morgen meine Tablette vergessen. (ich hab hoite morgen maine tablette fergeben) - Stamattina ho dimenticato la mia compressa.
Der Husten ist inzwischen fast weg. (der husten ist inzwischen fast vek) - Ormai la tosse è quasi passata.
Ich hab einen Termin beim Zahnarzt nächste Woche. (ich hab ainen termin baim tsanartzt nechste voche) - La prossima settimana ho un appuntamento dal dentista.
Die Praxis hat heute wegen Urlaub geschlossen. (di praxis hat hoite wegen urlaub geschlossen) - Lo studio oggi è chiuso per ferie.
Der Zug ist schon wieder zehn Minuten später dran. (der tsug ist scion vider tzen minuten speter dran) - Il treno è di nuovo in ritardo di dieci minuti.
Ich hab am Automaten noch eine Fahrkarte gekauft. (ich hab am automaten noch aine fartkarte gekauft) - Ho comprato ancora un biglietto alla macchinetta.
Auf welchem Gleis fährt der Zug nach Köln ab? (auf velchem glais fert der tsug nach köln ap) - Da quale binario parte il treno per Colonia?
Die Durchsage war so leise, dass ich nichts verstanden hab. (di durcsage var zo laize, das ich nichts ferstanden hab) - L'annuncio era così basso che non ho capito niente.
Die U-Bahn steht gerade wegen eines technischen Problems. (di u-baan steht gerade wegen aines technischen problems) - La metropolitana è ferma per un problema tecnico.
Ich nehme die nächste Bahn, die kommt gleich. (ich näme di nechste baan, di kommt glaic) - Prendo la prossima metro, arriva tra poco.
In der Straßenbahn war heute kaum noch ein Sitzplatz frei. (in der strassenbaan var hoite kaum noch ain zitzplatz frai) - Oggi sul tram non c'era quasi più un posto libero.
Der Bus fährt nur noch bis zur nächsten Haltestelle. (der bus fert nur noch bis tsur nechsten haltestelle) - L'autobus arriva solo fino alla prossima fermata.
Am Flughafen haben sie unser Handgepäck gewogen. (am flughafen habn zi unzer handgepek gewogen) - In aeroporto ci hanno pesato il bagaglio a mano.
Ich hab meinen Ausweis schon griffbereit. (ich hab mainen ausvais scion griffberait) - Ho già il documento a portata di mano.
Unser Gate ist ziemlich weit weg von hier. (unzer geit ist ziemlich vait vek fon hier) - Il nostro gate è piuttosto lontano da qui.
Die Fähre kommt laut Anzeige in zehn Minuten an. (di fere kommt laut antsaige in tzen minuten an) - Secondo il display il traghetto arriva tra dieci minuti.
Wir sollten die Tickets besser griffbereit haben. (vir zolten di tikets besser griffberait habn) - Faremmo meglio ad avere i biglietti a portata di mano.
Kannst du kurz nachsehen, ob wir hier richtig sind? (kanst du kurtz nachzeen, ob vir hier richtig zint) - Puoi controllare un attimo se siamo nel posto giusto?
Die Altstadt ist von hier aus gut zu Fuß erreichbar. (di altstadt ist fon hier aus gut tsu fus erreich-bar) - Da qui il centro storico è facilmente raggiungibile a piedi.
Ich hab beim Einparken einen Pfosten übersehen. (ich hab baim ainparken ainen pfosten überzeen) - Durante il parcheggio non ho visto un paletto.
Zum Glück ist am Auto nur ein kleiner Kratzer. (tsum glück ist am auto nur ain klainer kratser) - Per fortuna sull'auto c'è solo un piccolo graffio.
Der Motor klingt seit heute Morgen irgendwie anders. (der motor klingt sait hoite morgen irgendwie anders) - Da stamattina il motore suona in qualche modo diverso.
An der nächsten Ecke gibt es eine Werkstatt. (an der nechsten ecke gibt es aine verkstatt) - All'angolo successivo c'è un'officina.
Die Feuerwehr musste wegen des Rauchs kommen. (di feuerver musste wegen des rauchs kommen) - I vigili del fuoco sono dovuti intervenire a causa del fumo.
Bei uns im Viertel fällt seit Stunden der Strom aus und ein. (bai uns im firtel felt sait stunden der strom aus und ain) - Nel nostro quartiere la corrente va e viene da ore.
Das Hotel hat uns netterweise ein Babybett ins Zimmer gestellt. (das hotel hat uns nettervaize ain babybett ins tsimmer gestellt) - L'hotel è stato così gentile da mettere una culla in camera.
Der Wasserhahn tropft die ganze Nacht. (der vasserhaan tropft di gantse nacht) - Il rubinetto gocciola tutta la notte.
Die Heizung lässt sich überhaupt nicht einstellen. (di haizung lest zich überhaupt nicht ain-stellen) - Il riscaldamento non si riesce proprio a regolare.
Der Fernseher im Zimmer hat keinen Ton. (der fernzeer im tsimmer hat kainen ton) - Il televisore in camera non ha audio.
Wir haben für morgen einen Tisch reserviert. (vir habn für morgen ainen tisc reserviert) - Abbiamo prenotato un tavolo per domani.
Ich hätte gern noch etwas Brot dazu. (ich hete gern noch etvas brot datsu) - Vorrei ancora un po' di pane insieme.
Ich muss vor dem Schlafengehen noch die Küche aufräumen. (ich muss for dem sclafengeen noch di küce aufroimen) - Prima di andare a dormire devo ancora sistemare la cucina.
Die Sicherung ist schon wieder rausgeflogen. (di zic-erung ist scion vider rausgeflogen) - È saltato di nuovo il fusibile.
Ich hab die nassen Handtücher über die Heizung gehängt. (ich hab di nassen handtücher über di haizung gehengt) - Ho appeso gli asciugamani bagnati sul riscaldamento.
Mach bitte die Waschmaschine erst morgen an. (mach bitte di vasmascine erst morgen an) - Metti in funzione la lavatrice solo domani, per favore.
Unser Hund bellt jedes Mal, wenn es an der Tür klingelt. (unzer hund belt jedes mal, ven es an der tür klingelt) - Il nostro cane abbaia ogni volta che suona il campanello.
Hast du den Herd ausgeschaltet? (hast du den hert ausgeschaltet) - Hai spento i fornelli?
Ich hab keine Zeit für ein großes Frühstück. (ich hab kaine tsait für ain grosses früstück) - Non ho tempo per una colazione abbondante.
Stell die Marmelade wieder in den Schrank. (stell di marmelade vider in den scrank) - Rimetti la marmellata nell'armadietto.
Wer macht heute den Abwasch? (ver macht hoite den apvasc) - Chi lava i piatti oggi?
Wir können später gemeinsam einkaufen gehen. (vir können speter gemeinsam ain-kaufen geen) - Possiamo andare a fare la spesa insieme più tardi.
Hast du deinen Stundenplan schon bekommen? (hast du dainen stundenplan scion bekommen) - Hai già ricevuto il tuo orario scolastico?
Morgen schreiben wir einen Test in Biologie. (morgen scraiben vir ainen test in biologie) - Domani abbiamo un test di biologia.
Die Matheaufgabe sieht komplizierter aus, als sie ist. (di mateaufgabe ziit komplizierter aus, als zi ist) - L'esercizio di matematica sembra più complicato di quanto sia.
Ich muss heute noch einen Aufsatz für die Schule fertig schreiben. (ich muss hoite noch ainen aufsatz für di scule fertig scraiben) - Oggi devo ancora finire un tema per la scuola.
Wenn du Hilfe brauchst, kannst du mich jederzeit fragen. (ven du hilfe braucst, kanst du mich tsu jeder-tsait fragen) - Se hai bisogno di aiuto, puoi chiedermi in qualsiasi momento.
Du darfst heute länger aufbleiben, weil morgen keine Schule ist. (du darfst hoite lenger aufblaiben, vail morgen kaine scule ist) - Stasera puoi stare alzato più a lungo perché domani non c'è scuola.
Ich möchte wissen, mit wem du unterwegs bist. (ich möcte wissen, mit vem du unterwegs bist) - Voglio sapere con chi sei in giro.
Wir besprechen das morgen in Ruhe. (vir besprechen das morgen in ru-e) - Ne parliamo con calma domani.
Nimm lieber etwas Warmes mit, es wird abends kühl. (nim liber etvas varmes mit, es virt abents küül) - Porta qualcosa di caldo, la sera farà fresco.
Ich hab mir beim Sport den Knöchel leicht verstaucht. (ich hab mir baim sport den knöchel laict ferstaucht) - Mi sono leggermente slogato la caviglia facendo sport.
Die Ärztin hat mir geraten, ein paar Tage keinen Sport zu machen. (di ärtstin hat mir geraten, ain paar tage kainen sport tsu machen) - La dottoressa mi ha consigliato di non fare sport per qualche giorno.
Ich muss dieses Rezept noch in der Apotheke einlösen. (ich muss dieses rezept noch in der apoteke ainlösen) - Devo ancora andare in farmacia con questa ricetta.
Der Blutdruck war bei der Kontrolle ganz normal. (der blutdruk var bai der kontrolle gants normal) - La pressione era del tutto normale durante il controllo.
Der Zug hat wegen eines technischen Defekts angehalten. (der tsug hat wegen aines technischen defekts angehalten) - Il treno si è fermato a causa di un guasto tecnico.
Ich glaube, mein Platz ist im nächsten Wagen. (ich glaube, main platz ist im nechsten vagen) - Credo che il mio posto sia nella carrozza successiva.
Kannst du kurz auf meinen Koffer aufpassen? (kanst du kurtz auf mainen koffer aufpassen) - Puoi tenere d'occhio un attimo la mia valigia?
Die U-Bahn fährt am Wochenende seltener. (di u-baan fert am vochenende zeltener) - La metropolitana passa meno frequentemente nel fine settimana.
Ich hab keine Lust, schon wieder so lange zu warten. (ich hab kaine lust, scion vider zo lange tsu varten) - Non ho voglia di aspettare così tanto di nuovo.
An der nächsten Station kannst du in die andere Linie wechseln. (an der nechsten station kanst du in di andere linie vekseln) - Alla prossima stazione puoi cambiare con l'altra linea.
Der Bus kommt heute wegen des Berufsverkehrs später. (der bus kommt hoite wegen des berufsferkers speter) - Oggi l'autobus arriva più tardi a causa del traffico dell'ora di punta.
Ich hab extra eine Verbindung ohne Umsteigen ausgesucht. (ich hab extra aine ferbindung one umstaigen ausgesucht) - Ho scelto apposta una tratta senza cambi.
Wir müssen am Flughafen noch durch die Passkontrolle. (vir müssen am flughafen noch durc di passkontrolle) - In aeroporto dobbiamo ancora passare il controllo passaporti.
Unser Flug landet voraussichtlich um halb elf. (unzer flug landet vorauszictlic um halb elf) - Il nostro volo dovrebbe atterrare alle dieci e mezza.
Ich hoffe, dass unser Gepäck diesmal gleich mitkommt. (ich hoffe, das unzer gepek diesmal glaic mitkommt) - Spero che questa volta i nostri bagagli arrivino subito.
Die Fähre fährt bei schlechtem Wetter manchmal gar nicht. (di fere fert bai slechtem vetter manchmal gar nicht) - Con il brutto tempo il traghetto a volte non parte proprio.
Vom Hafen fahren regelmäßig Busse ins Zentrum. (fom haafen faren regelmessig busse ins tsentrum) - Dal porto partono regolarmente autobus per il centro.
Wir haben uns an diesem Platz komplett verfahren. (vir habn uns an dizem platz komplet ferfaren) - In questa zona ci siamo completamente persi.
Geh einfach immer Richtung Zentrum, dann findest du es. (ge ainfac immer richtung tsentrum, dan findest du es) - Vai semplicemente sempre verso il centro, poi lo trovi.
Ich hab beim Starten nur ein Klickgeräusch gehört. (ich hab baim starten nur ain klickgeroisc gehört) - Quando ho provato ad avviare l'auto ho sentito solo un clic.
Die Werkstatt konnte den Fehler heute nicht finden. (di verkstatt konte den feeler hoite nicht finden) - L'officina oggi non è riuscita a trovare il guasto.
Auf der Autobahn ist ein langer Stau entstanden. (auf der autobaan ist ain langer stau entstanden) - Sull'autostrada si è formata una lunga coda.
Wegen der Baustelle ist die ganze Straße gesperrt. (wegen der baustelle ist di gantse strasse gesperrt) - A causa del cantiere l'intera strada è chiusa.
Im Hotel war nachts ständig jemand auf dem Flur unterwegs. (im hotel var nachts ständig jemand auf dem flur unterwegs) - Di notte in hotel c'era continuamente qualcuno in giro per il corridoio.
Könnten wir bitte ein Zimmer auf der ruhigeren Seite bekommen? (könnten vir bitte ain tsimmer auf der ruigeren zaite bekommen) - Potremmo avere una camera sul lato più tranquillo?
Die Dusche verliert irgendwo Wasser. (di dusce ferliirt irgendo vasser) - La doccia perde acqua da qualche parte.
Ich hab dem Vermieter schon ein Foto vom Schaden geschickt. (ich hab dem fermiter scion ain foto fom scaden geschickt) - Ho già mandato al proprietario una foto del danno.
Ich hab vorhin noch schnell den Müll getrennt. (ich hab forhin noch scnell den mül getrennt) - Poco fa ho ancora separato velocemente i rifiuti.
Die Spüle ist voll, ich räume sie nachher aus. (di spüle ist fol, ich roime zi nacher aus) - Il lavello è pieno, lo sistemo più tardi.
Kannst du bitte die Wäsche aus der Maschine holen? (kanst du bitte di vesce aus der mascine holen) - Puoi togliere il bucato dalla lavatrice, per favore?
Ich hab den Schlüssel irgendwo auf dem Küchentisch liegen lassen. (ich hab den schlüssl irgendo auf dem kücentisc liegen lassen) - Ho lasciato le chiavi da qualche parte sul tavolo della cucina.
Der Hund wartet schon vor seinem Napf. (der hund wartet scion for zainem napf) - Il cane aspetta già davanti alla sua ciotola.
Mach bitte die Rollläden runter, bevor du gehst. (mach bitte di rollleden runter, bevor du gest) - Abbassa le tapparelle prima di uscire, per favore.
Zum Frühstück reicht mir heute eine Banane. (tsum früstück raict mir hoite aine banane) - Oggi a colazione mi basta una banana.
Ich hab den Saft gerade in den Kühlschrank gestellt. (ich hab den zaft gerade in den külscrank gestellt) - Ho appena messo il succo in frigorifero.
Was möchtest du heute Abend essen? (vas möctest du hoite abent essen) - Cosa vuoi mangiare stasera?
Wir haben noch Reis vom Mittagessen übrig. (vir habn noch rais fom mittagessen übrig) - Ci è rimasto ancora del riso da pranzo.
Meine Tochter hat morgen eine Klassenfahrt. (maine tochter hat morgen aine klassenfart) - Mia figlia domani ha una gita scolastica.
Der Lehrer hat die Prüfung überraschend leicht gemacht. (der leerer hat di prüfung überraschend laict gemacht) - L'insegnante ha reso l'esame sorprendentemente facile.
In Geschichte interessiert er sich besonders für die Antike. (in gescichte interessirt er zich besonders für di antike) - In storia è particolarmente interessato all'antichità.
Sie muss ihre Hausaufgaben noch vor dem Abendessen erledigen. (zi muss ire hausaufgaben noch for dem abentessen erledigen) - Deve finire i compiti prima di cena.
Du brauchst mich nicht anzurufen, schreib mir einfach eine Nachricht. (du braucst mich nicht anzurufen, scraib mir ainfac aine nachricht) - Non hai bisogno di chiamarmi, mandami semplicemente un messaggio.
Heute Abend darfst du bei uns im Wohnzimmer schlafen. (hoite abent darfst du bai uns im vonzimmer sclafen) - Stasera puoi dormire da noi in soggiorno.
Ich möchte nicht, dass du so spät allein nach Hause gehst. (ich möcte nicht, das du zo spet allein nach hause gest) - Non voglio che tu torni a casa da solo così tardi.
Wenn du wiederkommst, schließ bitte leise die Tür. (ven du viderkommst, slies bitte laize di tür) - Quando torni, chiudi piano la porta, per favore.
Ich hab heute in der Apotheke ein Pflaster gekauft. (ich hab hoite in der apoteke ain pflaster gekauft) - Oggi in farmacia ho comprato un cerotto.
Der Arzt hat mir empfohlen, mich ein paar Tage auszuruhen. (der artzt hat mir empfohlen, mich ain paar tage aus-tsuru-en) - Il medico mi ha consigliato di riposarmi per qualche giorno.
Ich hab seit gestern leichtes Fieber. (ich hab sait gestern laictes fiber) - Ho un po' di febbre da ieri.
Im Wartezimmer waren schon ziemlich viele Leute. (im varte-tsimmer varen scion ziemlich fiil loite) - In sala d'attesa c'erano già parecchie persone.
Unser Zug fährt heute ausnahmsweise vom anderen Bahnsteig ab. (unzer tsug fert hoite ausnamsvaize fom anderen baanstaig ap) - Oggi il nostro treno parte eccezionalmente dall'altra banchina.
Ich hab meinen Sitzplatz online reserviert. (ich hab mainen zitzplatz onlain reserviert) - Ho prenotato il mio posto online.
Der Zug ist gerade ohne Halt durch den Bahnhof gefahren. (der tsug ist gerade one halt durc den baanhof gefaren) - Il treno è appena passato dalla stazione senza fermarsi.
Die Rolltreppe nach oben ist außer Betrieb. (di rolltreppe nach oben ist ausser betrib) - La scala mobile per salire è fuori servizio.
Wir müssen eine Station zurückfahren. (vir müssen aine station tsurückfaren) - Dobbiamo tornare indietro di una fermata.
Die Bahn ist wegen einer Demonstration umgeleitet worden. (di baan ist wegen ainer demonstration umgeleitet worden) - Il trasporto ferroviario è stato deviato a causa di una manifestazione.
Der Bus hält heute nicht direkt vor dem Museum. (der bus helt hoite nicht direkt for dem muzeum) - Oggi l'autobus non ferma direttamente davanti al museo.
Ich hab beim Busfahrer nach dem richtigen Ticket gefragt. (ich hab baim busfarer nach dem richtigen tiket gefragt) - Ho chiesto all'autista dell'autobus quale fosse il biglietto giusto.
Am Flughafen war die Schlange bei der Sicherheitskontrolle riesig. (am flughafen var di slange bai der ziherhaitskontrolle rizig) - In aeroporto la fila al controllo di sicurezza era enorme.
Ich hab noch Zeit, um mir einen Kaffee zu holen. (ich hab noch tsait, um mir ainen kaffe tsu holen) - Ho ancora tempo per prendere un caffè.
Das Boarding wurde um zwanzig Minuten vorgezogen. (das boarding wurde um tsvantsig minuten forgezogen) - Il boarding è stato anticipato di venti minuti.
Wir mussten im Hafen ziemlich lange auf die Fähre warten. (vir mussten im haafen ziemlich lange auf di fere varten) - Abbiamo dovuto aspettare parecchio il traghetto al porto.
Die See ist heute erstaunlich ruhig. (di zee ist hoite erstaunlic ruig) - Oggi il mare è sorprendentemente calmo.
An der nächsten Ampel kannst du wenden. (an der nechsten ampel kanst du venden) - Al prossimo semaforo puoi fare inversione.
Ich hab die Straße auf der Karte markiert. (ich hab di strasse auf der karte markirt) - Ho segnato la strada sulla mappa.
Mein Auto braucht dringend einen Ölwechsel. (main auto brauct dringend ainen ölveksel) - La mia auto ha urgente bisogno di un cambio dell'olio.
Der Abschleppdienst hat das Auto zur Werkstatt gebracht. (der apsclepp-dienst hat das auto tsur verkstatt gebracht) - Il carro attrezzi ha portato l'auto in officina.
Die Ampel ist seit gestern kaputt. (di ampel ist sait gestern kaputt) - Il semaforo è guasto da ieri.
Nach dem Starkregen sind mehrere Keller vollgelaufen. (nach dem starkregen zint merere keller folgelaufen) - Dopo il forte acquazzone diverse cantine si sono allagate.
Im Hotel gibt es leider kein freies WLAN. (im hotel gibt es leider kain fraies ve-lan) - Purtroppo in hotel non c'è Wi-Fi gratuito.
Könnten Sie bitte die Minibar aus dem Zimmer entfernen? (könnten zi bitte di minibar aus dem tsimmer entfernen) - Potrebbe rimuovere il minibar dalla camera, per favore?
Die Klimaanlage lässt sich nicht ausschalten. (di klimaanlage lest zich nicht ausschalten) - L'aria condizionata non si riesce a spegnere.
Unser Gastgeber hat uns einen Schlüssel für die Garage gegeben. (unzer gastgeber hat uns ainen schlüssl für di garage gegeben) - Il nostro host ci ha dato una chiave per il garage.
Ich hab den Tisch lieber draußen reserviert. (ich hab den tisc liber draussen reserviert) - Ho preferito prenotare il tavolo fuori.
Für mich bitte das Tagesgericht und ein Mineralwasser. (für mich bitte das tagesgerict und ain mineralvasser) - Per me il piatto del giorno e un'acqua minerale, per favore.
Kann ich die Rechnung auch mit Karte bezahlen? (kan ich di rechnung auc mit karte bezahlen) - Posso pagare il conto anche con la carta?
Wir haben uns nach dem Abendessen noch lange unterhalten. (vir habn uns nach dem abentessen noch lange unterhalten) - Dopo cena abbiamo parlato a lungo.
Ich muss heute noch das Badezimmer putzen. (ich muss hoite noch das bade-tsimmer putzen) - Oggi devo ancora pulire il bagno.
Die Glühbirne im Schlafzimmer ist durchgebrannt. (di glübirne im sclafzimmer ist durcgebrant) - La lampadina in camera da letto si è bruciata.
Ich hab den Haustürschlüssel in der Jackentasche gefunden. (ich hab den haustür-schlüssl in der iakentasce gefunden) - Ho trovato la chiave di casa nella tasca della giacca.
Die Katze kratzt ständig an der Tür. (di katze kratst ständig an der tür) - Il gatto graffia continuamente la porta.
Ich lass die Wäsche noch eine Weile auf dem Balkon. (ich lass di vesce noch aine vaile auf dem balkon) - Lascio ancora per un po' il bucato sul balcone.
Die Spülmaschine ist fertig, aber ich hab keine Lust, sie auszuräumen. (di spülmascine ist fertig, aber ich hab kaine lust, zi auszuroimen) - La lavastoviglie ha finito, ma non ho voglia di svuotarla.
Kannst du bitte die Kaffeemaschine einschalten? (kanst du bitte di kaffeemascine ainscalten) - Puoi accendere la macchina del caffè, per favore?
Ich hab heute Morgen nur einen Joghurt gegessen. (ich hab hoite morgen nur ainen jogurt gegessen) - Stamattina ho mangiato solo uno yogurt.
Zum Mittag machen wir uns schnell ein Sandwich. (tsum mittag machen vir uns scnell ain sandwich) - A pranzo ci prepariamo velocemente un panino.
Wer möchte später noch ein Stück Kuchen? (ver möcte speter noch ain stück kuchen) - Chi vuole ancora una fetta di torta più tardi?
Mein Sohn hat seinen Schlüssel schon wieder verloren. (main zon hat zainen schlüssl scion vider ferloren) - Mio figlio ha perso di nuovo le sue chiavi.
Die Lehrerin hat heute eine wichtige Mitteilung gemacht. (di leererin hat hoite aine wichtige mitteilung gemacht) - Oggi l'insegnante ha fatto un'importante comunicazione.
Für die Prüfung muss ich noch ziemlich viel lernen. (für di prüfung muss ich noch ziemlich fiil lernen) - Per l'esame devo ancora studiare parecchio.
Mein Kind kommt mit der neuen Schule gut klar. (main kint kommt mit der noien scule gut klar) - Mio figlio si trova bene nella nuova scuola.
Ich hab dir erlaubt, heute länger draußen zu bleiben. (ich hab dir erlaubt, hoite lenger draussen tsu blaiben) - Ti ho permesso di restare fuori più a lungo oggi.
Bevor du gehst, musst du noch dein Zimmer aufräumen. (bevor du gest, musst du noch dain tsimmer aufroimen) - Prima di uscire devi ancora riordinare la tua camera.
Sag mir bitte ungefähr, wann du zurückkommst. (sag mir bitte ungefer, van du tsurückkommst) - Dimmi più o meno quando torni, per favore.
Ich hab in letzter Zeit ziemlich schlecht geschlafen. (ich hab in letzter tsait ziemlich slecht geschlafen) - Ultimamente ho dormito piuttosto male.
Nimm das Medikament nicht auf nüchternen Magen. (nim das medikament nicht auf nüchternen magen) - Non prendere il farmaco a stomaco vuoto.
Ich hab morgen früh eine Blutuntersuchung. (ich hab morgen frü aine blutuntersuchung) - Domani mattina ho un esame del sangue.
Der Arzt hat mir eine Überweisung zum Facharzt gegeben. (der artzt hat mir aine übervaizung tsum facarzt gegeben) - Il medico mi ha dato un'impegnativa per uno specialista.
Der Zug steht noch am Bahnsteig, aber die Türen sind schon zu. (der tsug steht noch am baanstaig, aber di türen zint scion tsu) - Il treno è ancora al binario, ma le porte sono già chiuse.
Wir müssen uns beeilen, sonst fährt der Zug ohne uns ab. (vir müssen uns beailen, sonst fert der tsug one uns ap) - Dobbiamo sbrigarci, altrimenti il treno parte senza di noi.
Ich hab im Zug keinen Empfang. (ich hab im tsug kainen empfank) - Sul treno non ho campo.
Die U-Bahn ist um diese Uhrzeit meistens ziemlich leer. (di u-baan ist um deze uurtsait maistens ziemlich leer) - A quest'ora la metropolitana è di solito piuttosto vuota.
Wir sind an der falschen Station ausgestiegen. (vir zint an der falschen station ausgestigen) - Siamo scesi alla stazione sbagliata.
Gibt's hier einen Aufzug zum Bahnsteig? (gibt's hier ainen auf-tsug tsum baanstaig) - C'è un ascensore per il binario?
Der Bus war so voll, dass niemand mehr einsteigen konnte. (der bus var zo fol, das ni-mant meer ainstaigen konte) - L'autobus era così pieno che non poteva più salire nessuno.
Ich hab die Haltestelle fast übersehen. (ich hab di haltestelle fast überzeen) - Ho quasi superato la fermata.
Wir müssen am Flughafen noch unser Gepäck aufgeben. (vir müssen am flughafen noch unzer gepek aufgeben) - In aeroporto dobbiamo ancora consegnare i bagagli.
Wo finde ich die Gepäckausgabe? (vo finde ich di gepeck-ausgabe) - Dov'è il ritiro bagagli?
Unser Flug hat ein neues Abflug-Gate bekommen. (unzer flug hat ain noies abflug-geit bekommen) - Al nostro volo è stato assegnato un nuovo gate di partenza.
Die Fähre ist schon fast voll, wir sollten jetzt einsteigen. (di fere ist scion fast fol, vir zolten ietzt ainstaigen) - Il traghetto è quasi pieno, dovremmo salire adesso.
Kann man die Fahrkarten auch direkt am Hafen kaufen? (kan man di fartkarten auc direkt am haafen kaufen) - Si possono comprare i biglietti direttamente al porto?
Ich glaube, hinter diesem Gebäude geht es zur Altstadt. (ich glaube, hinter dizem gebäude geet es tsur altstadt) - Credo che dietro questo edificio si vada al centro storico.
Die Straße endet gleich an einem großen Platz. (di strasse endet glaic an ainem grossen platz) - La strada finisce proprio in una grande piazza.
Ich hab beim Rückwärtsfahren den Bordstein erwischt. (ich hab baim rückvertsfaren den bordstain erwischt) - In retromarcia ho urtato il marciapiede.
Der Wagen lässt sich plötzlich nicht mehr lenken. (der vagen lest zich plötzlich nicht meer lenken) - All'improvviso l'auto non si lascia più sterzare.
Ich stelle das Warndreieck hinter dem Auto auf. (ich stelle das varndraieck hinter dem auto auf) - Metto il triangolo di emergenza dietro l'auto.
Der Verkehr ist heute wegen eines Unfalls völlig zusammengebrochen. (der ferker ist hoite wegen aines unfals föllig tsusammengebrochen) - Oggi il traffico è completamente paralizzato a causa di un incidente.
In unserer Straße wird seit Tagen an den Leitungen gearbeitet. (in unzerer strasse virt sait tagen an den laitungen gearbeitet) - Nella nostra strada lavorano sulle tubature da giorni.
Im Hotelzimmer riecht es stark nach Rauch. (im hoteltsimmer riect es stark nach rauch) - Nella camera d'hotel c'è un forte odore di fumo.
Wir haben leider nur ein kleines Fenster zum Innenhof. (vir habn leider nur ain klaines fenster tsum innenhof) - Purtroppo abbiamo solo una piccola finestra sul cortile interno.
Der Wasserkocher im Zimmer funktioniert nicht. (der vasserkocher im tsimmer funktioniert nicht) - Il bollitore in camera non funziona.
Der Gastgeber hat uns sofort auf unsere Nachricht geantwortet. (der gastgeber hat uns zofort auf unsere nachricht geantwortet) - L'host ha risposto subito al nostro messaggio.
Wir mussten wegen des Lärms mitten in der Nacht das Zimmer wechseln. (vir mussten wegen des lärms mitten in der nacht das tsimmer veksln) - A causa del rumore abbiamo dovuto cambiare camera nel cuore della notte.
Ich hab vor dem Frühstück noch kurz den Briefkasten geleert. (ich hab for dem früstück noch kurtz den briefkasten geleert) - Prima di colazione ho svuotato velocemente la cassetta della posta.
Die Nachbarn sind schon wieder ziemlich laut. (di nachbarn zint scion vider ziemlich laut) - I vicini sono già di nuovo piuttosto rumorosi.
Ich muss noch die Schuhe sauber machen. (ich muss noch di scue sauber machen) - Devo ancora pulire le scarpe.
Wo ist das Ladekabel für mein Handy? (vo ist das ladekabel für main hendi) - Dov'è il cavo di ricarica del mio cellulare?
Der Hund hat sich unter dem Tisch versteckt. (der hund hat zich unter dem tisc fersteckt) - Il cane si è nascosto sotto il tavolo.
Ich hab vergessen, die Spülmaschine anzuschalten. (ich hab fergeben, di spülmascine antsuschalten) - Ho dimenticato di accendere la lavastoviglie.
Mach bitte das Licht im Keller aus. (mach bitte das licht im keller aus) - Spegni la luce in cantina, per favore.
Zum Frühstück mache ich mir meistens Haferflocken. (tsum früstück mache ich mir maistens haferflocken) - A colazione di solito mi preparo dei fiocchi d'avena.
Ich hab noch einen Kaffee auf dem Herd stehen. (ich hab noch ainen kaffe auf dem hert steen) - Ho ancora un caffè sul fornello.
Heute Abend essen wir bei meinen Eltern. (hoite abent essen vir bai mainen eltern) - Stasera mangiamo dai miei genitori.
Die Kinder sind nach dem Essen direkt ins Wohnzimmer gegangen. (di kinder zint nach dem essen direkt ins vonzimmer gegangen) - I bambini dopo cena sono andati direttamente in soggiorno.
Hast du schon für die Mathearbeit gelernt? (hast du scion für di matearbeit gelernt) - Hai già studiato per il compito di matematica?
Meine Tochter muss für morgen noch ein Buch lesen. (maine tochter muss für morgen noch ain buc lesen) - Mia figlia deve ancora leggere un libro per domani.
Der Lehrer hat die Aufgabe an der Tafel erklärt. (der leerer hat di aufgabe an der tafel erklärt) - L'insegnante ha spiegato l'esercizio alla lavagna.
Sie hat in letzter Zeit bessere Noten bekommen. (zi hat in letzter tsait bessere noten bekommen) - Ultimamente ha preso voti migliori.
Ich will, dass du heute rechtzeitig nach Hause kommst. (ich vil, das du hoite recht-tsaitig nach hause kommst) - Voglio che oggi torni a casa in orario.
Du kannst das Fahrrad nehmen, aber pass auf der Straße auf. (du kanst das farat nemen, aber pass auf der strasse auf) - Puoi prendere la bicicletta, ma fai attenzione per strada.
Ich hab dir schon zweimal gesagt, dass es Zeit zum Schlafengehen ist. (ich hab dir scion tsvai-mal gesagt, das es tsait tsum sclafengeen ist) - Ti ho già detto due volte che è ora di andare a dormire.
Wenn du dich nicht gut fühlst, bleib heute lieber zu Hause. (ven du dich nicht gut füülst, blaib hoite liber tsu hause) - Se non ti senti bene, oggi resta piuttosto a casa.
Ich hab in der Apotheke nach einem Mittel gegen Erkältung gefragt. (ich hab in der apoteke nach ainem mittel gegen erkeltung gefragt) - In farmacia ho chiesto un rimedio contro il raffreddore.
Der Apotheker meinte, ich soll viel Wasser trinken. (der apoteker meinte, ich zol fiil vasser trinken) - Il farmacista ha detto che dovrei bere molta acqua.
Ich hab seit gestern Ohrenschmerzen. (ich hab sait gestern oren-scmerzen) - Ho mal d'orecchio da ieri.
Die Untersuchung war zum Glück schnell vorbei. (di untersuchung var tsum glück scnell forbai) - Per fortuna la visita è finita rapidamente.
Der Zug nach Berlin hat heute zehn Minuten Verspätung. (der tsug nach berlin hat hoite tzen minuten ferspetung) - Il treno per Berlino oggi ha dieci minuti di ritardo.
Ich hab den Fahrplan auf meinem Handy gespeichert. (ich hab den farplan auf mainem hendi gespeichert) - Ho salvato l'orario dei treni sul cellulare.
Der Zug ist gerade eingefahren. (der tsug ist gerade eingefaren) - Il treno è appena entrato in stazione.
Wir müssen auf die andere Seite des Bahnsteigs. (vir müssen auf di andere zaite des baanstaigs) - Dobbiamo andare dall'altra parte del binario.
Die U-Bahn fährt heute nur alle zehn Minuten. (di u-baan fert hoite nur alle tzen minuten) - Oggi la metropolitana passa solo ogni dieci minuti.
Ich hab an der nächsten Station einen Termin. (ich hab an der nechsten station ainen termin) - Ho un appuntamento alla prossima stazione.
Die Rolltreppe nach unten ist ziemlich langsam. (di rolltreppe nach unten ist ziemlich langsam) - La scala mobile per scendere è piuttosto lenta.
Der Bus ist einfach an uns vorbeigefahren. (der bus ist ainfac an uns forbaigefaren) - L'autobus ci è semplicemente passato davanti.
Ich hoffe, dass wir im nächsten Bus einen Sitzplatz bekommen. (ich hoffe, das vir im nechsten bus ainen zitzplatz bekommen) - Spero che sul prossimo autobus troviamo un posto a sedere.
Am Flughafen mussten wir ziemlich lange auf das Gepäck warten. (am flughafen mussten vir ziemlich lange auf das gepek varten) - In aeroporto abbiamo dovuto aspettare parecchio i bagagli.
Mein Reisepass steckt noch in meinem Rucksack. (main raizepass steckt noch in mainem rucksack) - Il mio passaporto è ancora nello zaino.
Das Gate ist plötzlich auf die andere Seite verlegt worden. (das geit ist plötzlich auf di andere zaite ferlegt worden) - Il gate è stato improvvisamente spostato dall'altra parte.
Wir sind schon früh am Hafen angekommen. (vir zint scion frü am haafen angekommen) - Siamo arrivati al porto già presto.
Die Überfahrt dauert bei ruhiger See ungefähr eine Stunde. (di überfart dauert bai ruiger zee ungefer aine stunde) - Con il mare calmo la traversata dura circa un'ora.
Entschuldigung, können Sie mir den Weg zum Marktplatz zeigen? (entsculdigung, können zi mir den veg tsum markt-platz tsaigen) - Mi scusi, può indicarmi la strada per la piazza del mercato?
Nimm die zweite Straße links, dann siehst du das Rathaus. (nim di tsvaita strasse links, dan ziist du das rathaus) - Prendi la seconda strada a sinistra, poi vedrai il municipio.
Mein Auto verliert Kühlwasser. (main auto ferliirt külvasser) - La mia auto perde liquido di raffreddamento.
Ich hab den Abschleppdienst schon verständigt. (ich hab den apsclepp-dienst scion ferstendigt) - Ho già chiamato il carro attrezzi.
Der Reifen ist komplett platt. (der raifen ist komplet platt) - La gomma è completamente a terra.
Auf der Umgehungsstraße geht es gerade überhaupt nicht voran. (auf der umgeungsstrasse geet es gerade überhaupt nicht foran) - Sulla tangenziale in questo momento non si va avanti per niente.
Die Baustelle sorgt jeden Morgen für einen riesigen Stau. (di baustelle sorgt jeden morgen für ainen rizigen stau) - Il cantiere provoca ogni mattina un ingorgo enorme.
Das Wasser ist nach dem Gewitter bis ins Erdgeschoss gelaufen. (das vasser ist nach dem gevitter bis ins erdgescos gelaufen) - Dopo il temporale l'acqua è arrivata fino al piano terra.
Im Hotel war das Zimmer bei unserer Ankunft noch nicht fertig. (im hotel var das tsimmer bai unzerer ankunft noch nicht fertig) - In hotel la camera non era ancora pronta quando siamo arrivati.
Könnten Sie bitte jemanden schicken, der sich die Klimaanlage anschaut? (könnten zi bitte jemanden schicken, der zich di klimaanlage anschaut) - Potrebbe mandare qualcuno a controllare l'aria condizionata?
Wir haben an der Rezeption nach einem ruhigen Zimmer gefragt. (vir habn an der rezeption nach ainem ruigen tsimmer gefragt) - Alla reception abbiamo chiesto una camera tranquilla.
Der Vermieter hat uns erlaubt, später auszuchecken. (der fermiter hat uns erlaubt, speter auszutscheken) - Il proprietario ci ha permesso di fare il check-out più tardi.
Ich hab heute Morgen schon den Brief für die Schule unterschrieben. (ich hab hoite morgen scion den brief für di scule unterschrieben) - Stamattina ho già firmato la comunicazione per la scuola.
Die Fenster sind voller Staub, die müsste ich mal putzen. (di fenster zint voller staub, di müsste ich mal putzen) - Le finestre sono piene di polvere, dovrei pulirle.
Ich hab die Schlüssel extra an denselben Platz gelegt. (ich hab di schlüssl extra an denselben platz gelegt) - Ho messo apposta le chiavi nello stesso posto.
Der Kater sitzt seit einer Stunde auf der Fensterbank. (der kater sitzt sait ainer stunde auf der fensterbank) - Il gatto è seduto sul davanzale da un'ora.
Die Waschmaschine macht beim Schleudern ein komisches Geräusch. (di vasmascine macht baim scleudern ain komisches geroisc) - La lavatrice fa uno strano rumore durante la centrifuga.
Ich muss noch den Trockner ausräumen. (ich muss noch den trockner ausroimen) - Devo ancora svuotare l'asciugatrice.
Kannst du das Brot schon mal aufschneiden? (kanst du das brot scion mal aufscnaiden) - Puoi intanto tagliare il pane?
Ich hab heute ausnahmsweise keinen Kaffee getrunken. (ich hab hoite ausnamsvaize kainen kaffe getrunken) - Oggi, eccezionalmente, non ho bevuto caffè.
Zum Mittag gibt's bei uns Nudeln mit Tomatensoße. (tsum mittag gibt's bai uns nudeln mit tomatensoße) - A pranzo da noi ci sono pasta al sugo di pomodoro.
Ich stelle das Essen schon mal auf den Tisch. (ich stelle das essen scion mal auf den tisc) - Metto intanto il cibo in tavola.
Meine Tochter hat ihren Schulranzen im Flur stehen lassen. (maine tochter hat iren sculrantsen im flur steen lassen) - Mia figlia ha lasciato lo zaino di scuola in corridoio.
Der Unterricht fällt heute wegen Krankheit aus. (der unterrict felt hoite wegen krankhait aus) - Oggi la lezione è annullata per malattia.
Für diese Aufgabe brauchst du keine Hilfe von mir. (für deze aufgabe braucst du kaine hilfe fon mir) - Per questo esercizio non hai bisogno del mio aiuto.
Er hat morgen eine mündliche Prüfung. (er hat morgen aine mündliche prüfung) - Domani ha un esame orale.
Die Lehrerin hat gesagt, dass die Arbeit gut geworden ist. (di leererin hat gesagt, das di arbeit gut geworden ist) - L'insegnante ha detto che il compito è venuto bene.
Du kannst nach dem Lernen noch eine Folge schauen. (du kanst nach dem lernen noch aine folge schauen) - Dopo aver studiato puoi guardare ancora un episodio.
Ich will nicht jedes Mal daran erinnern müssen. (ich vil nicht jedes mal daran erinnern müssen) - Non voglio dovertelo ricordare ogni volta.
Du bist alt genug, um selbst darauf zu achten. (du bist alt genug, um zelbst darauf tsu achten) - Sei abbastanza grande da pensarci da solo.
Heute solltest du etwas früher ins Bett gehen. (hoite zoltest du etvas früer ins bett geen) - Oggi dovresti andare a letto un po' prima.
Ich hab in der Apotheke nach Nasenspray gefragt. (ich hab in der apoteke nach nasen-spray gefragt) - In farmacia ho chiesto uno spray nasale.
Die Schmerzen sind inzwischen deutlich schwächer geworden. (di scmerzen zint inzwischen doitlec svecher geworden) - Nel frattempo i dolori sono diminuiti notevolmente.
Ich hab vorsichtshalber noch mal die Temperatur gemessen. (ich hab forzictshalber noch mal di temperatur gemessen) - Per sicurezza ho misurato di nuovo la temperatura.
Der Arzt möchte noch ein Blutbild machen lassen. (der artzt möcte noch ain blutbilt machen lassen) - Il medico vuole far fare anche un esame emocromocitometrico.
Ich hab meinen Zug gerade noch erwischt. (ich hab mainen tsug gerade noch erwischt) - Sono riuscito a prendere il treno proprio all'ultimo momento.
Der Schaffner kontrolliert gerade die Fahrkarten. (der scafner kontrolliert gerade di fartkarten) - Il controllore sta controllando i biglietti.
Unser Wagen ist ziemlich weit hinten. (unzer vagen ist ziemlich vait hinten) - La nostra carrozza è piuttosto in fondo.
Ich glaube, wir sitzen in die falsche Richtung. (ich glaube, vir sitzen in di falsche richtung) - Credo che siamo seduti nella direzione sbagliata.
Die U-Bahn-Türen schließen automatisch. (di u-baan-türen schließen automatisch) - Le porte della metropolitana si chiudono automaticamente.
Wir müssen gleich aussteigen, mach dich schon mal bereit. (vir müssen glaic ausstaigen, mach dich scion mal berait) - Dobbiamo scendere tra poco, preparati.
An dieser Haltestelle hält die Straßenbahn nur auf der anderen Seite. (an diza haltestelle helt di strassenbaan nur auf der anderen zaite) - A questa fermata il tram si ferma solo dall'altra parte.
Der Busfahrer hat wegen des starken Regens langsam gemacht. (der busfarer hat wegen des starken regens langsam gemacht) - L'autista dell'autobus è andato piano a causa della forte pioggia.
Wir haben am Flughafen schon online eingecheckt. (vir habn am flughafen scion onlain aingecheckt) - Abbiamo già fatto il check-in online in aeroporto.
Ich muss meinen Koffer noch am Schalter abgeben. (ich muss mainen koffer noch am scalter abgeben) - Devo ancora consegnare la valigia al banco.
Der Flug ist wegen schlechten Wetters verspätet. (der flug ist wegen slechten vetters ferspetet) - Il volo è in ritardo a causa del maltempo.
Auf der Fähre haben wir draußen einen schönen Platz gefunden. (auf der fere habn vir draussen ainen scönen platz gefunden) - Sul traghetto abbiamo trovato un bel posto all'aperto.
Der Hafen liegt nur zehn Minuten vom Bahnhof entfernt. (der haafen ligt nur tzen minuten fom baanhof entfernt) - Il porto dista solo dieci minuti dalla stazione.
Wenn du an der Kirche vorbeikommst, bist du fast da. (ven du an der kirce forbaikommst, bist du fast da) - Quando passi davanti alla chiesa, sei quasi arrivato.
Wir sind einfach der Beschilderung gefolgt. (vir zint ainfac der bescilderung gefolgt) - Abbiamo semplicemente seguito la segnaletica.
Mein Auto springt morgens manchmal nicht sofort an. (main auto springt morgens manchmal nicht zofort an) - La mia auto a volte al mattino non parte subito.
Ich hab beim Fahren plötzlich eine Warnleuchte gesehen. (ich hab baim faren plötzlich aine varnloichte gesehen) - Mentre guidavo ho visto improvvisamente una spia.
Zum Glück war der Pannendienst schnell vor Ort. (tsum glück var der pannendienst scnell for ort) - Per fortuna il soccorso stradale è arrivato rapidamente.
Die Polizei hat die Straße nach dem Unfall gesperrt. (di politsai hat di strasse nach dem unfal gesperrt) - La polizia ha chiuso la strada dopo l'incidente.
In der Innenstadt steht heute alles still. (in der innenstadt steht hoite alles still) - Oggi in centro è tutto fermo.
Seit dem Stromausfall funktioniert der Aufzug nicht mehr. (sait dem stromausfal funktioniert der auf-tsug nicht meer) - Da quando è saltata la corrente, l'ascensore non funziona più.
Im Hotel gibt es leider keine zusätzlichen Handtücher. (im hotel gibt es leider kaine zusätzlichen handtücher) - Purtroppo in hotel non ci sono asciugamani aggiuntivi.
Unser Zimmer liegt direkt neben dem Aufzug. (unzer tsimmer ligt direkt neben dem auf-tsug) - La nostra camera è proprio accanto all'ascensore.
Die Klimaanlage ist nachts viel zu laut. (di klimaanlage ist nachts fiil tsu laut) - L'aria condizionata di notte è troppo rumorosa.
Der Gastgeber hat uns eine gute Pizzeria in der Nähe empfohlen. (der gastgeber hat uns aine gute pitzeria in der ne-e empfohlen) - L'host ci ha consigliato una buona pizzeria nelle vicinanze.
Ich hab gestern endlich den Keller aufgeräumt. (ich hab gestern endlich den keller aufgeroimt) - Ieri finalmente ho riordinato la cantina.
Die Schlüssel liegen wahrscheinlich noch in meiner Arbeitstasche. (di schlüssl liegen varscainlic noch in meiner arbetstasce) - Probabilmente le chiavi sono ancora nella mia borsa da lavoro.
Mach das Fenster zu, es zieht hier ziemlich stark. (mach das fenster tsu, es tsiit hier ziemlich stark) - Chiudi la finestra, qui c'è parecchia corrente.
Der Kater hat schon wieder das Wasser umgestoßen. (der kater hat scion vider das vasser umgestossen) - Il gatto ha rovesciato di nuovo l'acqua.
Ich hab die Waschmaschine für heute Abend programmiert. (ich hab di vasmascine für hoite abent programmiert) - Ho programmato la lavatrice per stasera.
Die Teller können noch eine Runde in die Spülmaschine. (di teller können noch aine runde in di spülmascine) - I piatti possono ancora fare un giro in lavastoviglie.
Ich nehme morgens lieber etwas Herzhaftes. (ich näme morgens liber etvas herzhaftes) - Al mattino preferisco qualcosa di salato.
Der Kaffee ist mir heute viel zu stark. (der kaffe ist mir hoite fiil tsu stark) - Oggi il caffè è decisamente troppo forte per me.
Wir haben noch genug Brot für morgen früh. (vir habn noch genug brot für morgen frü) - Abbiamo ancora abbastanza pane per domani mattina.
Heute Abend machen wir eine Suppe, wenn du magst. (hoite abent machen vir aine zuppe, ven du magst) - Stasera facciamo una zuppa, se vuoi.
Ich hab vergessen, wann die nächste Elternversammlung ist. (ich hab fergeben, van di nechste elternfersamlung ist) - Ho dimenticato quando sarà la prossima riunione dei genitori.
In welcher Klasse ist dein neuer Lehrer? (in velcher klasse ist dain noier leerer) - In quale classe insegna il tuo nuovo professore?
Sie hat für die Prüfung viel weniger gelernt als geplant. (zi hat für di prüfung fiil veniger gelernt als geplant) - Ha studiato molto meno del previsto per l'esame.
Der Lehrer hat uns eine Woche mehr Zeit gegeben. (der leerer hat uns aine voche meer tsait gegeben) - L'insegnante ci ha dato una settimana in più.
Ich möchte erst deine Hausaufgaben sehen, bevor du rausgehst. (ich möcte erst daine hausaufgaben zeen, bevor du rausgest) - Voglio vedere prima i tuoi compiti, prima che tu esca.
Du kannst später mit deinen Freunden telefonieren. (du kanst speter mit dainen froinden telefonieren) - Puoi telefonare più tardi ai tuoi amici.
Wir haben doch abgemacht, dass du heute zu Hause bleibst. (vir habn doch abgemacht, das du hoite tsu hause blaibst) - Avevamo stabilito che oggi restavi a casa.
Ich weiß, dass du müde bist, aber du musst noch duschen. (ich vais, das du müde bist, aber du musst noch duscen) - So che sei stanco, ma devi ancora fare la doccia.
Wenn du fertig bist, räum bitte deine Sachen weg. (ven du fertig bist, roim bitte daine zachen vek) - Quando hai finito, metti a posto le tue cose, per favore.
Haben Sie etwas gegen Kopfschmerzen? (haben zi etvas gegen kopfscmerzen) - Avete qualcosa contro il mal di testa?
Ich hätte gern etwas, das nicht müde macht. (ich hete gern etvas, das nicht müde macht) - Vorrei qualcosa che non faccia venire sonnolenza.
Die Apothekerin hat mir dieses Spray empfohlen. (di apotekerin hat mir dieses spray empfohlen) - La farmacista mi ha consigliato questo spray.
Ich soll die Tabletten dreimal am Tag nehmen. (ich zol di tabletten draimal am tag nemen) - Devo prendere le compresse tre volte al giorno.
Die Untersuchung dauert wahrscheinlich nicht lange. (di untersuchung dauert varscainlic nicht lange) - Probabilmente la visita non durerà molto.
Der Zug nach Hamburg steht bereits am Gleis. (der tsug nach hamburg steht bereits am glais) - Il treno per Amburgo è già al binario.
Ich hab nur einen kleinen Rucksack dabei. (ich hab nur ainen klainen rucksack dabai) - Ho con me solo un piccolo zaino.
Weißt du, ob dieser Zug auch in Bonn hält? (vaist du, ob dizer tsug auc in bon hält) - Sai se questo treno ferma anche a Bonn?
Der Fahrkartenautomat nimmt meine Karte nicht an. (der fartkartenautomat nimmt maine karte nicht an) - La macchinetta dei biglietti non accetta la mia carta.
Wir haben wegen der Verspätung unseren Anschluss verpasst. (vir habn wegen der ferspetung unzeren anschluss ferpasst) - A causa del ritardo abbiamo perso la coincidenza.
Die nächste U-Bahn fährt in drei Minuten. (di nechste u-baan fert in drai minuten) - La prossima metropolitana parte tra tre minuti.
Ich steige lieber an der Endstation aus. (ich staige liber an der endstation aus) - Preferisco scendere al capolinea.
Auf dem Bahnsteig ist heute ungewöhnlich viel los. (auf dem baanstaig ist hoite ungewöhnlic fiil los) - Oggi sul binario c'è insolitamente molta gente.
Die Straßenbahn kommt laut Anzeige in fünf Minuten. (di strassenbaan kommt laut antsaige in fünf minuten) - Secondo il display il tram arriva tra cinque minuti.
Kannste mir sagen, ob der Bus hier zum Hauptbahnhof fährt? (kanste mir sagen, ob der bus hier tsum hauptbaanhof fert) - Mi puoi dire se da qui passa l'autobus per la stazione centrale?
Am Check-in-Schalter mussten wir unsere Koffer öffnen. (am check-in-scalter mussten vir unsere koffer öffnen) - Al banco del check-in abbiamo dovuto aprire le valigie.
Ich hab noch keine Bordkarte auf dem Handy. (ich hab noch kaine bortkarte auf dem hendi) - Non ho ancora la carta d'imbarco sul cellulare.
Das Flugzeug steht schon auf der Startbahn. (das flug-tsoik steht scion auf der startbaan) - L'aereo è già sulla pista di decollo.
Die Fähre legt pünktlich um neun Uhr ab. (di fere legt pünktlic um noyn uur ap) - Il traghetto parte puntualmente alle nove.
Vom Deck aus hat man einen tollen Blick auf die Küste. (fom deck aus hat man ainen tollen blick auf di küste) - Dal ponte si gode di una vista magnifica sulla costa.
Bieg an der nächsten Kreuzung rechts ab. (big an der nechsten kroitsung reccs ap) - Gira a destra al prossimo incrocio.
Das Navi führt uns gerade durch eine gesperrte Straße. (das navi füürt uns gerade durc aine gesperte strasse) - Il navigatore ci sta portando proprio attraverso una strada chiusa.
Mein Auto macht beim Bremsen ein seltsames Geräusch. (main auto macht baim bremsen ain zeltsames geroisc) - La mia auto fa uno strano rumore quando freno.
Ich hab den Pannendienst angerufen, sie sind unterwegs. (ich hab den pannendienst angerufen, zi zint unterwegs) - Ho chiamato il soccorso stradale, stanno arrivando.
Wegen des Streiks fährt heute kaum ein Bus. (wegen des straiks fert hoite kaum ain bus) - A causa dello sciopero oggi circola a malapena qualche autobus.
Nach dem Unwetter waren mehrere Straßen nicht mehr befahrbar. (nach dem unvetter varen merere strassen nicht meer befarbar) - Dopo il maltempo diverse strade non erano più percorribili.
Könnten wir bitte noch zwei zusätzliche Kissen bekommen? (könnten vir bitte noch tsvai zusätzliche kissen bekommen) - Potremmo avere altri due cuscini, per favore?
Das Zimmer ist schön, aber das Bett ist ziemlich unbequem. (das tsimmer ist scön, aber das bett ist ziemlich unbequem) - La camera è bella, ma il letto è piuttosto scomodo.
Ich hab heute Morgen die Pflanzen auf dem Balkon gegossen. (ich hab hoite morgen di pflantsen auf dem balkon gegossen) - Stamattina ho annaffiato le piante sul balcone.
Die Mülltonne muss heute noch an die Straße gestellt werden. (di mültonne muss hoite noch an di strasse gestellt werden) - Oggi bisogna ancora mettere il bidone della spazzatura in strada.
Ich hab die Fernbedienung zwischen den Sofakissen gefunden. (ich hab di fernbedinung tsvischen den sofakissen gefunden) - Ho trovato il telecomando tra i cuscini del divano.
Der Hund hat sich vor dem Gewitter unter dem Bett versteckt. (der hund hat zich for dem gevitter unter dem bett fersteckt) - Il cane si è nascosto sotto il letto prima del temporale.
Kannst du nachsehen, ob noch genug Waschmittel da ist? (kanst du nachzeen, ob noch genug vaschmittel da ist) - Puoi controllare se c'è ancora abbastanza detersivo?
Ich hab die Spülmaschine diesmal nicht ganz voll gemacht. (ich hab di spülmascine diesmal nicht gants fol gemacht) - Questa volta non ho riempito completamente la lavastoviglie.
Mach die Balkontür zu, sonst wird es drinnen kalt. (mach di balkontür tsu, sonst virt es drinnen kalt) - Chiudi la porta del balcone, altrimenti dentro farà freddo.
Ich hab morgens meistens überhaupt keinen Hunger. (ich hab morgens maistens überhaupt kainen hunger) - Al mattino di solito non ho proprio fame.
Kannst du mir noch ein Glas Orangensaft einschenken? (kanst du mir noch ain glas orangensaft ainscenken) - Puoi versarmi ancora un bicchiere di succo d'arancia?
Wir haben heute keine Lust zu kochen. (vir habn hoite kaine lust tsu kochen) - Oggi non abbiamo voglia di cucinare.
Die Kinder erzählen beim Abendessen immer, was in der Schule passiert ist. (di kinder erzählen baim abentessen immer, vas in der scule passiert ist) - A cena i bambini raccontano sempre cosa è successo a scuola.
Ich muss morgen früh mit der Klassenlehrerin telefonieren. (ich muss morgen frü mit der klassenleererin telefonieren) - Domani mattina devo parlare al telefono con la coordinatrice di classe.
In der Pause dürfen die Schüler auf den Hof gehen. (in der pause dürfen di scüler auf den hof geen) - Durante la ricreazione gli studenti possono andare in cortile.
Mein Sohn hat heute seine Hausaufgaben freiwillig gemacht. (main zon hat hoite zaine hausaufgaben fraivilig gemacht) - Oggi mio figlio ha fatto i compiti spontaneamente.
Die Lehrerin hat ihm geraten, mehr zu lesen. (di leererin hat im geraten, meer tsu lesen) - L'insegnante gli ha consigliato di leggere di più.
Du kannst heute Abend länger fernsehen, wenn du alles erledigt hast. (du kanst hoite abent lenger fernzeen, ven du alles erledigt hast) - Stasera puoi guardare la TV più a lungo se hai finito tutto.
Ich hab nichts dagegen, solange du pünktlich zurück bist. (ich hab nichts dagegen, zolang du pünktlic tsurück bist) - Non ho nulla in contrario, purché tu torni puntuale.
Vergiss nicht, mir Bescheid zu geben, wenn du später kommst. (fergiss nicht, mir bescait tsu geben, ven du speter kommst) - Non dimenticare di avvisarmi se torni più tardi.
Heute Abend machen wir keine Ausnahme. (hoite abent machen vir kaine ausname) - Stasera non facciamo eccezioni.
Ich brauche etwas gegen diese Halsschmerzen. (ich brauche etvas gegen deze hals-scmerzen) - Ho bisogno di qualcosa contro questo mal di gola.
Haben Sie auch eine günstigere Alternative? (haben zi auc aine günstigere alternative) - Avete anche un'alternativa più economica?
Ich darf das Medikament nur nach dem Essen nehmen. (ich darf das medikament nur nach dem essen nemen) - Posso prendere il farmaco solo dopo aver mangiato.
Der Arzt hat mir geraten, mich heute zu schonen. (der artzt hat mir geraten, mich hoite tsu schonen) - Il medico mi ha consigliato di riguardarmi oggi.
Falls es schlimmer wird, gehe ich direkt ins Krankenhaus. (falls es sclemmer virt, ge-e ich direkt ins krankenhaus) - Se peggiora, vado direttamente in ospedale.
Wir haben gerade noch einen Platz im Zug bekommen. (vir habn gerade noch ainen platz im tsug bekommen) - Siamo riusciti appena in tempo a trovare un posto sul treno.
Der Zug steht wegen eines Signals noch im Bahnhof. (der tsug steht wegen aines signals noch im baanhof) - Il treno è ancora in stazione a causa di un segnale.
Ich muss in München umsteigen. (ich muss in münchen umstaigen) - Devo cambiare treno a Monaco.
Der Schalter für die Fahrkarten ist schon geschlossen. (der scalter für di fartkarten ist scion geschlossen) - Lo sportello dei biglietti è già chiuso.
Wir nehmen lieber die nächste Verbindung. (vir nemen liber di nechste ferbindung) - Preferiamo prendere la prossima coincidenza.
Die U-Bahn war heute wegen einer Störung komplett überfüllt. (di u-baan var hoite wegen ainer störung komplet überfült) - Oggi la metropolitana era completamente affollata a causa di un guasto.
Wo müssen wir umsteigen, um zum Zentrum zu kommen? (vo müssen vir umstaigen, um tsum tsentrum tsu kommen) - Dove dobbiamo cambiare per arrivare in centro?
Ich hab meine Tasche fast in der Bahn liegen lassen. (ich hab maine tasce fast in der baan liegen lassen) - Ho quasi dimenticato la mia borsa sul treno.
Der Bus fährt nur an Werktagen. (der bus fert nur an verk-tagen) - L'autobus circola solo nei giorni feriali.
Kannst du mich an der nächsten Haltestelle rauslassen? (kanst du mich an der nechsten haltestelle rauslassen) - Puoi farmi scendere alla prossima fermata?
Am Flughafen müssen wir zuerst zum Check-in-Schalter. (am flughafen müssen vir tsuerst tsum check-in-scalter) - In aeroporto dobbiamo prima andare al banco del check-in.
Ich hab nur Handgepäck, deshalb muss ich keinen Koffer aufgeben. (ich hab nur handgepek, deshalb muss ich kainen koffer aufgeben) - Ho solo il bagaglio a mano, quindi non devo imbarcare nessuna valigia.
Unser Abflug wurde auf einen späteren Zeitpunkt verschoben. (unzer abflug wurde auf ainen speteren tsaitpunkt ferchoben) - La nostra partenza è stata posticipata.
Die Fähre schwankt heute ziemlich stark. (di fere schwankt hoite ziemlich stark) - Oggi il traghetto oscilla parecchio.
Wir müssen uns am Hafen noch die Tickets abholen. (vir müssen uns am haafen noch di tikets abholen) - Al porto dobbiamo ancora ritirare i biglietti.
Der Stadtplan ist auf der Rückseite viel übersichtlicher. (der stadtplan ist auf der rückzaite fiil überzictlicer) - La mappa della città è molto più chiara sul retro.
Von hier aus sind es zu Fuß etwa fünfzehn Minuten. (fon hier aus zint es tsu fus etwa fünf-tsen minuten) - Da qui sono circa quindici minuti a piedi.
Ich hab beim Tanken aus Versehen den falschen Zapfhahn genommen. (ich hab baim tanken aus ferzeen den falschen tsapfaan genommen) - Durante il rifornimento ho preso per errore la pompa sbagliata.
Die Bremsen fühlen sich seit ein paar Tagen komisch an. (di bremsen fülen zich sait ain paar tagen komisc an) - Da qualche giorno i freni mi sembrano strani.
Nach dem kleinen Unfall haben wir die Daten ausgetauscht. (nach dem klainen unfal habn vir di daten ausgetauscht) - Dopo il piccolo incidente ci siamo scambiati i dati.
Der Verkehr läuft heute überraschend gut. (der ferker läuft hoite überrascend gut) - Oggi il traffico scorre sorprendentemente bene.
In unserem Viertel sind mehrere Straßen wegen Bauarbeiten gesperrt. (in unzerem firtel zint merere strassen wegen bauarbeiten gesperrt) - Nel nostro quartiere diverse strade sono chiuse per lavori.
Könnten Sie bitte jemanden wegen des defekten Schlosses schicken? (könnten zi bitte jemanden wegen des defekten schlosses schicken) - Potrebbe mandare qualcuno per la serratura guasta, per favore?
Das Wasser in der Dusche wird leider nicht richtig warm. (das vasser in der dusce virt leider nicht richtig varm) - Purtroppo l'acqua della doccia non diventa abbastanza calda.
Wir haben an der Rezeption nach einem weiteren Schlüssel gefragt. (vir habn an der rezeption nach ainem vaiteren schlüssl gefragt) - Alla reception abbiamo chiesto un'altra chiave.
Ich hab heute Morgen den Geschirrspüler ausgeräumt, bevor ich zur Arbeit gegangen bin. (ich hab hoite morgen den geschirspüler ausgeroimt, bevor ich tsur arbeit gegangen bin) - Stamattina ho svuotato la lavastoviglie prima di andare al lavoro.
Die Haustür fällt immer ziemlich laut ins Schloss. (di haustür felt immer ziemlich laut ins schloss) - La porta d'ingresso si chiude sempre con un rumore piuttosto forte.
Ich hab die Ersatzschlüssel beim Nachbarn gelassen. (ich hab di ersatzschlüssl baim nachbarn gelassen) - Ho lasciato le chiavi di riserva dal vicino.
Unsere Katze schläft tagsüber meistens auf dem Sessel. (unzere katze schläft tagsüber maistens auf dem sessel) - La nostra gatta durante il giorno dorme quasi sempre sulla poltrona.
Die Waschmaschine läuft noch, also warte bitte mit dem Wäschekorb. (di vasmascine läuft noch, also varte bitte mit dem vescekorb) - La lavatrice è ancora in funzione, quindi aspetta con il cesto della biancheria.
Ich hab das Geschirr von gestern Abend noch nicht weggeräumt. (ich hab das geschir fon gestern abent noch nicht veggeroimt) - Non ho ancora sistemato i piatti di ieri sera.
Machst du heute Kaffee oder soll ich? (machst du hoite kaffe oder zol ich) - Fai tu il caffè oggi o lo faccio io?
Ich hab mir schnell ein belegtes Brot gemacht. (ich hab mir scnell ain belegtes brot gemacht) - Mi sono preparato velocemente un panino.
Fürs Mittagessen brauchen wir noch frisches Gemüse. (fürs mittagessen brauchen vir noch frisches gemüze) - Per pranzo ci servono ancora delle verdure fresche.
Nach dem Essen räumen wir gemeinsam den Tisch ab. (nach dem essen roimen vir gemeinsam den tisc ap) - Dopo cena sparecchiamo insieme.
Die Schule hat nächste Woche einen Wandertag geplant. (di scule hat nechste voche ainen vandertag geplant) - La scuola ha organizzato un'escursione per la prossima settimana.
In welchem Fach hast du eigentlich die meisten Probleme? (in velchem fac hast du eigentlich di maisten probleme) - In quale materia hai più difficoltà?
Der Lehrer hat die Prüfung auf Freitag verschoben. (der leerer hat di prüfung auf fraitag ferscoben) - L'insegnante ha spostato l'esame a venerdì.
Sie hat sich gestern nach dem Unterricht noch mit einer Freundin getroffen. (zi hat zich gestern nach dem unterrict noch mit ainer froindin getroffen) - Ieri dopo le lezioni si è incontrata ancora con un'amica.
Du kannst heute deine Hausaufgaben im Wohnzimmer machen. (du kanst hoite daine hausaufgaben im vonzimmer machen) - Oggi puoi fare i compiti in soggiorno.
Ich möchte nicht, dass du morgens immer in letzter Minute losgehst. (ich möcte nicht, das du morgens immer in letzter minute losgest) - Non voglio che ogni mattina tu esca all'ultimo momento.
Wenn du ausgehst, nimm bitte dein Handy mit. (ven du ausgest, nim bitte dain hendi mit) - Quando esci, porta con te il cellulare, per favore.
Wir können darüber reden, sobald du wieder zu Hause bist. (vir können darüber reden, sobald du vider tsu hause bist) - Possiamo parlarne appena sei di nuovo a casa.
Heute ist die letzte Folge, danach gehen wir schlafen. (hoite ist di letzte folge, danach geen vir sclafen) - Stasera c'è l'ultimo episodio, poi andiamo a dormire.
Ich hab in der Apotheke nach etwas gegen Allergien gefragt. (ich hab in der apoteke nach etvas gegen allergien gefragt) - In farmacia ho chiesto qualcosa contro le allergie.
Haben Sie diese Salbe auch ohne Rezept? (haben zi deze zalbe auc one rezept) - Avete questa pomata anche senza ricetta?
Der Arzt hat gesagt, dass die Wunde gut verheilt. (der artzt hat gesagt, das di vunde gut ferhailt) - Il medico ha detto che la ferita sta guarendo bene.
Ich soll nächste Woche noch einmal zur Kontrolle kommen. (ich zol nechste voche noch ainmal tsur kontrolle kommen) - Devo tornare la prossima settimana per un controllo.
Der Zug ist pünktlich, das hätte ich heute nicht erwartet. (der tsug ist pünktlic, das hete ich hoite nicht erwartet) - Il treno è puntuale, oggi non me l'aspettavo.
Ich hab extra einen Platz am Fenster reserviert. (ich hab extra ainen platz am fenster reserviert) - Ho prenotato apposta un posto vicino al finestrino.
Der Zug fährt heute aus einem anderen Bahnhof ab. (der tsug fert hoite aus ainem anderen baanhof ap) - Oggi il treno parte da un'altra stazione.
Wir haben nur fünf Minuten bis zum nächsten Zug. (vir habn nur fünf minuten bis tsum nechsten tsug) - Abbiamo solo cinque minuti fino al prossimo treno.
In der U-Bahn ist gerade kein einziger Sitzplatz frei. (in der u-baan ist gerade kain ainziger zitzplatz frai) - In metropolitana in questo momento non c'è neanche un posto libero.
Ich steige eine Station früher aus und gehe den Rest zu Fuß. (ich staige aine station früer aus und ge-e den rest tsu fus) - Scendo una fermata prima e faccio il resto a piedi.
Die Anzeige zeigt eine Verzögerung von fünf Minuten an. (di antsaige tsaigt aine ferzögerung fon fünf minuten an) - Il display indica un ritardo di cinque minuti.
Der Busfahrer hat die Tür direkt vor meiner Nase zugemacht. (der busfarer hat di tür direkt for meiner nase tsugemacht) - L'autista dell'autobus mi ha chiuso la porta proprio davanti al naso.
Ich hab online gesehen, dass unser Flug verspätet ist. (ich hab onlain gesehen, das unser flug ferspetet ist) - Ho visto online che il nostro volo è in ritardo.
Wo kann ich hier meinen Koffer wiegen? (vo kan ich hier mainen koffer wiegen) - Dove posso pesare qui la mia valigia?
Wir müssen nach der Sicherheitskontrolle sofort zu unserem Gate. (vir müssen nach der ziherhaitskontrolle zofort tsu unzerem geit) - Dopo i controlli di sicurezza dobbiamo andare subito al nostro gate.
Die Fähre hat wegen des starken Windes Verspätung. (di fere hat wegen des starken vindes ferspetung) - Il traghetto è in ritardo a causa del forte vento.
Auf dem Deck ist es heute ziemlich windig. (auf dem deck ist es hoite ziemlich vindig) - Oggi sul ponte c'è parecchio vento.
Entschuldigung, ist das Museum von hier aus weit? (entsculdigung, ist das muzeum fon hier aus vait) - Mi scusi, il museo è lontano da qui?
Du bist in die falsche Richtung gelaufen, dreh lieber um. (du bist in di falsce richtung gelaufen, dre-e liber um) - Hai camminato nella direzione sbagliata, torna indietro.
Beim Losfahren hat plötzlich die Motorleuchte aufgeleuchtet. (baim losfaren hat plötzlich di motorloichte aufgeleuchtet) - Quando sono partito si è accesa improvvisamente la spia del motore.
Ich glaube, mit dem Reifen stimmt etwas nicht. (ich glaube, mit dem raifen stimmt etvas nicht) - Credo che ci sia qualcosa che non va con la gomma.
Der Abschleppwagen soll in etwa zwanzig Minuten da sein. (der apscleppvagen zol in etwa tsvantsig minuten da zain) - Il carro attrezzi dovrebbe arrivare tra circa venti minuti.
Der Verkehr hat sich nach dem Unfall schnell wieder normalisiert. (der ferker hat zich nach dem unfal scnell vider normalisiert) - Dopo l'incidente il traffico è tornato rapidamente alla normalità.
Wegen eines Rohrbruchs ist das Wasser in mehreren Häusern abgestellt. (wegen aines roorbruchs ist das vasser in mereren hoizern apgestellt) - A causa della rottura di una tubatura, l'acqua è stata interrotta in diverse case.
Unser Hotelzimmer war bei der Ankunft eiskalt. (unzer hoteltsimmer var bai der ankunft aiskalt) - La nostra camera d'hotel era gelida al nostro arrivo.
Die Rezeption hat uns sofort eine zusätzliche Decke gebracht. (di rezeption hat uns zofort aine zusätzliche decke gebracht) - La reception ci ha portato subito una coperta aggiuntiva.
Ich hab im B&B nach einem späteren Check-out gefragt. (ich hab im be-e-en-be nach ainem speteren check-out gefragt) - Nel B&B ho chiesto di poter fare il check-out più tardi.
Der Gastgeber war sehr freundlich und hat uns alles erklärt. (der gastgeber var zeer froindlic und hat uns alles erklärt) - L'host è stato molto gentile e ci ha spiegato tutto.
Im Restaurant würde ich gern draußen sitzen. (im restaurant würde ich gern draussen sitzen) - Al ristorante vorrei sedermi fuori.
Wir haben noch nichts bestellt, wir warten auf einen Freund. (vir habn noch nichts bestellt, vir varten auf ainen froint) - Non abbiamo ancora ordinato, stiamo aspettando un amico.
Kannst du mir die Speisekarte kurz rüberschieben? (kanst du mir di speisekarte kurtz rüber-sciben) - Puoi passarmi un attimo il menù?
Ich hab den Staubsauger heute schon zweimal benutzt. (ich hab den staubsauger hoite scion tsvai-mal benutzt) - Oggi ho già usato l'aspirapolvere due volte.
Die Wäsche ist noch feucht, ich hänge sie später auf. (di vesce ist noch foict, ich henge zi speter auf) - Il bucato è ancora umido, lo stendo più tardi.
Ich hab die Schlüssel diesmal direkt neben die Tür gelegt. (ich hab di schlüssl diesmal direkt neben di tür gelegt) - Questa volta ho messo le chiavi proprio accanto alla porta.
Der Hund wartet schon ungeduldig vor der Haustür. (der hund wartet scion ungeduldig for der haustür) - Il cane aspetta già impaziente davanti alla porta di casa.
Die Katze will unbedingt ins Schlafzimmer. (di katze vil unbedingt ins sclafzimmer) - Il gatto vuole assolutamente entrare in camera da letto.
Ich muss noch schnell die Küche wischen. (ich muss noch scnell di küce viscen) - Devo ancora dare velocemente una passata in cucina.
Kannst du bitte die leere Flasche wegbringen? (kanst du bitte di leere flasche vekbringen) - Puoi portare via la bottiglia vuota, per favore?
Heute hab ich überhaupt keine Zeit für ein großes Frühstück. (hoite hab ich überhaupt kaine tsait für ain grosses früstück) - Oggi non ho proprio tempo per una colazione abbondante.
Ich mach mir später etwas Warmes zu essen. (ich mach mir speter etvas varmes tsu essen) - Più tardi mi preparo qualcosa di caldo da mangiare.
Stell den Käse bitte wieder in den Kühlschrank. (stell den keze bitte vider in den külscrank) - Rimetti il formaggio in frigorifero, per favore.
Wir essen heute zusammen, auch wenn es etwas später wird. (vir essen hoite tsusammen, auc ven es etvas speter virt) - Oggi mangiamo insieme, anche se sarà un po' più tardi.
Ich hab vergessen, dass morgen schulfrei ist. (ich hab fergeben, das morgen sculfrai ist) - Ho dimenticato che domani non c'è scuola.
Die Klassenarbeit lief besser als erwartet. (di klassenarbeit lief besser als erwartet) - Il compito in classe è andato meglio del previsto.
Für Physik braucht er gerade ziemlich viel Zeit. (für fizik braucht er gerade ziemlich fiil tsait) - In questo periodo per fisica gli serve parecchio tempo.
Der Lehrer hat die Ergebnisse noch nicht bekannt gegeben. (der leerer hat di ergebnisse noch nicht bekannt gegeben) - L'insegnante non ha ancora comunicato i risultati.
Sie möchte später selbst entscheiden, welchen Kurs sie nimmt. (zi möcte speter zelbst entscaiden, velchen kurs zi nimmt) - Più avanti vuole decidere da sola quale corso frequentare.
Du weißt genau, wann du zu Hause sein musst. (du vaist genau, van du tsu hause zain musst) - Sai benissimo a che ora devi essere a casa.
Ich hab nichts dagegen, wenn du einen Freund mitbringst. (ich hab nichts dagegen, ven du ainen froint mitbringst) - Non ho nulla in contrario se porti un amico.
Dein Handy bleibt während des Essens auf dem Tisch liegen. (dain hendi blaibt während des essens auf dem tisc liegen) - Durante il pasto il tuo cellulare resta sul tavolo.
Morgen musst du selbst daran denken, deinen Wecker zu stellen. (morgen musst du zelbst daran denken, dainen vecker tsu stellen) - Domani devi ricordarti da solo di puntare la sveglia.
Ich hab heute in der Apotheke mein Rezept eingelöst. (ich hab hoite in der apoteke main rezept eingelöst) - Oggi in farmacia ho ritirato i medicinali con la mia ricetta.
Gibt es etwas, das ich bei Bauchschmerzen nehmen kann? (gibt es etvas, das ich bai bauchscmerzen nemen kan) - C'è qualcosa che posso prendere per il mal di pancia?
Ich hab die Salbe zweimal täglich auftragen sollen. (ich hab di zalbe tsvai-mal täglich auftragen zollen) - Dovevo applicare la pomata due volte al giorno.
Die Ärztin hat mir geraten, mehr zu trinken. (di ärtstin hat mir geraten, meer tsu trinken) - La dottoressa mi ha consigliato di bere di più.
Im Krankenhaus musste ich ziemlich lange warten. (im krankenhaus musste ich ziemlich lange varten) - In ospedale ho dovuto aspettare parecchio.
Der Zug ist heute erstaunlich pünktlich angekommen. (der tsug ist hoite erstaunlic pünktlic angekommen) - Oggi il treno è arrivato sorprendentemente puntuale.
Ich hab meinen Platz wegen der Sonne gewechselt. (ich hab mainen platz wegen der zonne gewechselt) - Ho cambiato posto a causa del sole.
Der Schaffner hat uns erklärt, wo wir umsteigen müssen. (der scafner hat uns erklärt, vo vir umstaigen müssen) - Il controllore ci ha spiegato dove dobbiamo cambiare.
Auf dem Nachbargleis fährt gleich ein Regionalzug ab. (auf dem nachbarglais fert glaic ain regionaltsug ap) - Sul binario accanto parte tra poco un treno regionale.
Die U-Bahn bleibt an dieser Station manchmal länger stehen. (di u-baan blaibt an diza station manchmal lenger steen) - In questa stazione la metropolitana a volte rimane ferma più a lungo.
Ich hab die falsche Linie genommen und muss jetzt zurück. (ich hab di falsce linie genommen und muss ietzt tsurück) - Ho preso la linea sbagliata e adesso devo tornare indietro.
Der Bahnsteig ist über die Unterführung erreichbar. (der baanstaig ist über di unterfürung erreichbar) - Il binario è raggiungibile attraverso il sottopassaggio.
Die Straßenbahn war wegen einer technischen Störung außer Betrieb. (di strassenbaan var wegen ainer tecni-scen störung ausser betrib) - Il tram era fuori servizio a causa di un guasto tecnico.
Ich hab beim Einsteigen fast meinen Regenschirm verloren. (ich hab baim ainstaigen fast mainen regenscirm ferloren) - Salendo sull'autobus ho quasi perso l'ombrello.
Der Bus kommt laut App in zwei Minuten. (der bus kommt laut äpp in tsvai minuten) - Secondo l'app l'autobus arriva tra due minuti.
Am Flughafen hab ich zuerst meinen Reisepass gesucht. (am flughafen hab ich tsuerst mainen raizepass gesucht) - In aeroporto per prima cosa ho cercato il passaporto.
Wir müssen noch durch die Passkontrolle. (vir müssen noch durc di passkontrolle) - Dobbiamo ancora passare il controllo passaporti.
Ich hab meinen Koffer mit einem auffälligen Anhänger versehen. (ich hab mainen koffer mit ainem auffelligen anhenger ferzeen) - Ho messo un'etichetta ben visibile sulla mia valigia.
Die Fähre fährt heute wegen des Wetters nicht. (di fere fert hoite wegen des vetters nicht) - Oggi il traghetto non parte a causa del maltempo.
Wir sollten früh genug am Hafen sein. (vir zolten frü genug am haafen zain) - Dovremmo essere al porto abbastanza presto.
Die Altstadt beginnt gleich hinter dieser Brücke. (di altstadt beginnt glaic hinter diza brücke) - Il centro storico inizia proprio dietro questo ponte.
Von dort oben hast du einen besseren Überblick über die Stadt. (fon dort oben hast du ainen besseren überblick über di stadt) - Da lassù hai una vista migliore sulla città.
Ich hab mich in den kleinen Gassen total verlaufen. (ich hab mich in den klainen gassen total ferlaufen) - Mi sono completamente perso nei vicoli.
Mein Auto steht seit gestern in der Werkstatt. (main auto steht sait gestern in der verkstatt) - La mia auto è in officina da ieri.
Der Motor geht während der Fahrt einfach aus. (der motor geet während der fart ainfac aus) - Il motore si spegne semplicemente durante la marcia.
Ich hab den Notruf gewählt, weil jemand verletzt war. (ich hab den notruf gewelt, vail jemand ferletzt var) - Ho chiamato i soccorsi perché qualcuno era ferito.
Nach dem Sturm lagen überall Äste auf der Straße. (nach dem sturm lagen überall este auf der strasse) - Dopo la tempesta c'erano rami dappertutto sulla strada.
Bei uns ist heute Nachmittag kurz der Strom ausgefallen. (bai uns ist hoite nachmittag kurtz der strom ausgefallen) - Oggi pomeriggio da noi è saltata brevemente la corrente.
Die Rezeption hat uns ein anderes Zimmer angeboten. (di rezeption hat uns ain anderes tsimmer angeboten) - La reception ci ha offerto un'altra camera.
Das Waschbecken im Bad läuft nicht richtig ab. (das vaschbecken im baad läuft nicht richtig ap) - Il lavandino del bagno non scarica bene.
Unser Gastgeber hat uns den Code für die Eingangstür geschickt. (unzer gastgeber hat uns den kode für di ingangstür geschickt) - Il nostro host ci ha mandato il codice per la porta d'ingresso.
Im Restaurant würde ich gern etwas Vegetarisches bestellen. (im restaurant würde ich gern etvas vegetarisces bestellen) - Al ristorante vorrei ordinare qualcosa di vegetariano.
Ich hab die Heizung heute Morgen ein bisschen runtergedreht. (ich hab di haitzung hoite morgen ain biscen runtergedreht) - Stamattina ho abbassato un po' il riscaldamento.
Die Wäsche muss noch gefaltet und in den Schrank gelegt werden. (di vesce muss noch gefaltet und in den scrank gelegt werden) - Il bucato deve ancora essere piegato e messo nell'armadio.
Ich hab den Schlüssel von innen stecken lassen. (ich hab den schlüssl fon innen stecken lassen) - Ho lasciato la chiave inserita dall'interno.
Unser Hund schläft neuerdings in der Küche. (unzer hund schläft noierdings in der küce) - Ultimamente il nostro cane dorme in cucina.
Die Katze sitzt schon wieder auf dem Küchentisch. (di katze sitzt scion vider auf dem kücentisc) - Il gatto è di nuovo sul tavolo della cucina.
Ich muss noch den Boden im Flur saugen. (ich muss noch den boden im flur saugen) - Devo ancora passare l'aspirapolvere sul pavimento del corridoio.
Lass die Tür offen, der Hund will rein. (lass di tür offen, der hund vil rain) - Lascia la porta aperta, il cane vuole entrare.
Ich hab für morgen früh schon den Tisch gedeckt. (ich hab für morgen frü scion den tisc gedeckt) - Ho già apparecchiato la tavola per domani mattina.
Die Milch ist leer, die muss auf die Einkaufsliste. (di milch ist leer, di muss auf di einkaufsliste) - Il latte è finito, bisogna metterlo nella lista della spesa.
Zum Abendessen gibt es heute Reste vom Wochenende. (tsum abentessen gibt es hoite reste fom vocenende) - Stasera a cena mangiamo gli avanzi del fine settimana.
Ich hab extra etwas für dich übrig gelassen. (ich hab extra etvas für dich übrig gelassen) - Ho lasciato apposta qualcosa per te.
Morgen schreibt ihr einen Test in Deutsch, oder? (morgen schreibt ir ainen test in doitsch, oder) - Domani avete una verifica di tedesco, vero?
Ich hab noch nicht verstanden, was die Aufgabe genau bedeutet. (ich hab noch nicht ferstanden, vas di aufgabe genau bedeutet) - Non ho ancora capito esattamente cosa significa l'esercizio.
Die Lehrerin will die Arbeiten nächste Woche zurückgeben. (di leererin vil di arbeiten nechste voche tsurückgeben) - L'insegnante vuole restituire i compiti la prossima settimana.
Er hat sich für einen anderen Studiengang entschieden. (er hat zich für ainen anderen studiengang entscieden) - Ha scelto un altro corso di laurea.
Heute fällt die letzte Stunde aus. (hoite felt di letzte stunde aus) - Oggi l'ultima ora è cancellata.
Du musst mir nicht jedes Detail erzählen. (du musst mir nicht jedes detail erzählen) - Non devi raccontarmi ogni dettaglio.
Wenn du fertig bist, kannst du deinen Freunden schreiben. (ven du fertig bist, kanst du dainen froinden schreiben) - Quando hai finito puoi scrivere ai tuoi amici.
Wir sind spätestens um zehn wieder da. (vir zint spetestens um tzen vider da) - Saremo di ritorno entro le dieci al massimo.
Ich will nur wissen, mit wem du unterwegs bist. (ich vil nur vissen, mit vem du unterwegs bist) - Voglio solo sapere con chi sei in giro.
Haben Sie etwas gegen eine verstopfte Nase? (haben zi etvas gegen aine ferstopfte naze) - Avete qualcosa per il naso chiuso?
Ich hab die Packungsbeilage noch gar nicht gelesen. (ich hab di packungsbailaage noch gar nicht gelesen) - Non ho ancora letto il foglietto illustrativo.
Die Tabletten darf man nicht zusammen mit Alkohol nehmen. (di tabletten darf man nicht tsusammen mit alkohol nemen) - Le compresse non si possono assumere insieme all'alcol.
Ich fühle mich heute schon deutlich besser. (ich füle mich hoite scion doitlec besser) - Oggi mi sento già decisamente meglio.
Im Wartebereich hängt ein Bildschirm mit den Aufrufen. (im varteberaic hängt ain bildscirm mit den aufrufen) - Nella sala d'attesa c'è uno schermo con le chiamate dei pazienti.
Unser Zug fährt in zehn Minuten weiter. (unzer tsug fert in tzen minuten vaiter) - Il nostro treno riparte tra dieci minuti.
Ich hab den Sitzplatz direkt hinter der Tür. (ich hab den zitzplatz direkt hinter der tür) - Ho il posto proprio dietro la porta.
Die Durchsage war so leise, dass ich nichts verstanden habe. (di durczaage var zo laize, das ich nichts ferstanden habe) - L'annuncio era così basso che non ho capito nulla.
Wir haben noch genügend Zeit für einen Kaffee am Bahnhof. (vir habn noch genügend tsait für ainen kaffe am baanhof) - Abbiamo ancora abbastanza tempo per un caffè alla stazione.
Die U-Bahn steht gerade wegen einer technischen Störung. (di u-baan steht gerade wegen ainer tecni-scen störung) - La metropolitana è ferma in questo momento a causa di un guasto tecnico.
Ich hab meine Fahrkarte versehentlich zweimal gekauft. (ich hab maine fartkarte ferzeentlic tsvai-mal gekauft) - Ho comprato per errore due volte il biglietto.
Die nächste Straßenbahn fährt erst in zwölf Minuten. (di nechste strassenbaan fert erst in tsvölf minuten) - Il prossimo tram parte tra dodici minuti.
Der Bus fährt heute eine Umleitung. (der bus fert hoite aine um-laitung) - Oggi l'autobus fa una deviazione.
Ich hab beim Aussteigen meinen Schal im Bus liegen lassen. (ich hab baim ausstaigen mainen scaal im bus liegen lassen) - Scendendo dall'autobus ho lasciato la sciarpa sul bus.
Wir sollten wegen des Berufsverkehrs früher losfahren. (vir zolten wegen des berufsferkers früer losfaren) - Dovremmo partire prima a causa del traffico dell'ora di punta.
Der Flug wurde gerade aufgerufen. (der flug wurde gerade aufgerufen) - Hanno appena chiamato il nostro volo.
Ich muss noch durch die Sicherheitskontrolle und dann zum Gate. (ich muss noch durc di ziherhaitskontrolle und dan tsum geit) - Devo ancora passare i controlli di sicurezza e poi andare al gate.
Mein Koffer ist nach der Landung nicht angekommen. (main koffer ist nach der landung nicht angekommen) - La mia valigia non è arrivata dopo l'atterraggio.
Wir haben auf dem Schiff einen Platz im Schatten gefunden. (vir habn auf dem sciff ainen platz im scatten gefunden) - Sulla nave abbiamo trovato un posto all'ombra.
Der Kapitän hat wegen des Wetters eine andere Route gewählt. (der kapitän hat wegen des vetters aine andere route gewelt) - Il capitano ha scelto un'altra rotta a causa del tempo.
Gehen Sie bis zur nächsten Kreuzung und biegen Sie dann links ab. (geen zi bis tsur nechsten kroitsung und bigen zi dan links ap) - Vada fino al prossimo incrocio e poi giri a sinistra.
Ich hab das Gebäude von Weitem schon erkannt. (ich hab das gebäude fon vaitem scion erkannt) - Ho riconosciuto l'edificio già da lontano.
Mein Auto startet seit heute Morgen überhaupt nicht mehr. (main auto startet sait hoite morgen überhaupt nicht meer) - Da stamattina la mia auto non parte proprio più.
Ich hab eine Panne und brauche dringend Hilfe. (ich hab aine panne und brauche dringend hilfe) - Ho un guasto e ho urgentemente bisogno di aiuto.
Zum Glück ist bei dem Unfall niemand schwer verletzt worden. (tsum glück ist bai dem unfal ni-mant scver ferletzt worden) - Per fortuna nell'incidente nessuno è rimasto gravemente ferito.
Nach dem Gewitter ist in unserem Viertel der Strom ausgefallen. (nach dem gevitter ist in unzerem firtel der strom ausgefallen) - Dopo il temporale è saltata la corrente nel nostro quartiere.
Das Hotel hat uns wegen der Störung kostenlos ein Frühstück angeboten. (das hotel hat uns wegen der störung kostenlos ain früstück angeboten) - L'hotel ci ha offerto gratuitamente la colazione a causa del problema.
Ich hab an der Rezeption nach einem Adapter gefragt. (ich hab an der rezeption nach ainem adapter gefragt) - Alla reception ho chiesto un adattatore.
Die Dusche war sauber, aber der Abfluss war verstopft. (di dusce var sauber, aber der apfluss var ferstopft) - La doccia era pulita, ma lo scarico era intasato.
Wir haben die Ferienwohnung erst spät am Abend gefunden. (vir habn di ferienvonung erst spet am abent gefunden) - Abbiamo trovato l'appartamento per le vacanze solo tardi la sera.
Unser Gastgeber hat uns sogar einen Parkplatz reserviert. (unzer gastgeber hat uns sogar ainen parkplatz reserviert) - Il nostro host ci ha persino riservato un parcheggio.
Ich hab heute die Bettwäsche gewechselt. (ich hab hoite di bettvesce gewechselt) - Oggi ho cambiato la biancheria del letto.
Die Haustür klemmt seit ein paar Tagen. (di haustür klemmt sait ain paar tagen) - La porta d'ingresso si inceppa da qualche giorno.
Ich hab die Schlüsselbund gestern auf dem Schreibtisch liegen lassen. (ich hab den schlüsslbund gestern auf dem scraibtisc liegen lassen) - Ieri ho lasciato il mazzo di chiavi sulla scrivania.
Der Hund bringt mir jeden Morgen sein Spielzeug. (der hund bringt mir jeden morgen zain spil-tsoig) - Il cane mi porta il suo giocattolo ogni mattina.
Unsere Katze mag das neue Katzenfutter überhaupt nicht. (unzere katze mag das noie katzenfutter überhaupt nicht) - Alla nostra gatta non piace affatto il nuovo cibo per gatti.
Ich hab den Wäscheständer ins Wohnzimmer gestellt. (ich hab den vesce-stender ins vonzimmer gestellt) - Ho messo lo stendibiancheria in soggiorno.
Das Waschmittel ist fast leer, wir brauchen eine neue Packung. (das vaschmittel ist fast leer, vir brauchen aine noie pakung) - Il detersivo è quasi finito, ci serve una confezione nuova.
Lass das Licht im Flur an, ich komme gleich. (lass das licht im flur an, ich komme glaic) - Lascia accesa la luce in corridoio, arrivo subito.
Ich hab mir morgens angewöhnt, zuerst ein Glas Wasser zu trinken. (ich hab mir morgens angewönt, tsuerst ain glas vasser tsu trinken) - Ho preso l'abitudine di bere prima un bicchiere d'acqua al mattino.
Heute gibt's zum Frühstück Rührei und Toast. (hoite gibt's tsum früstück rürei und toast) - Oggi a colazione ci sono uova strapazzate e toast.
Kannst du bitte die Butter aus dem Kühlschrank holen? (kanst du bitte di buter aus dem külsc-rank holen) - Puoi prendere il burro dal frigorifero, per favore?
Wir haben beim Abendessen über den Urlaub gesprochen. (vir habn baim abentessen über den urlaub gesprochen) - A cena abbiamo parlato delle vacanze.
Das Essen ist noch zu heiß, warte ein bisschen. (das essen ist noch tsu hais, varte ain biscen) - Il cibo è ancora troppo caldo, aspetta un po'.
Meine Tochter hat morgen eine wichtige Präsentation in der Schule. (maine tochter hat morgen aine wichtige präsentation in der scule) - Mia figlia domani ha una presentazione importante a scuola.
Er kommt mit Mathe inzwischen viel besser zurecht. (er kommt mit mate inzwischen fiil besser tsu-recht) - Ormai se la cava molto meglio con la matematica.
Der Lehrer hat uns gestern die korrigierten Arbeiten zurückgegeben. (der leerer hat uns gestern di korrigierten arbeiten tsurückgegeben) - Ieri l'insegnante ci ha restituito i compiti corretti.
In der Bibliothek kann man in Ruhe lernen. (in der bibliothek kan man in ru-e lernen) - In biblioteca si può studiare tranquillamente.
Ich hab dir doch gesagt, dass du morgen früher aufstehen musst. (ich hab dir doch gesagt, das du morgen früer aufsteen musst) - Te l'ho detto che domani devi alzarti prima.
Du darfst heute bis halb elf bei deinen Freunden bleiben. (du darfst hoite bis halb elf bai dainen froinden blaiben) - Oggi puoi restare dai tuoi amici fino alle dieci e mezza.
Schreib mir kurz, wenn du angekommen bist. (scraib mir kurtz, ven du angekommen bist) - Scrivimi un messaggio quando sei arrivato.
Ich möchte, dass du dich an unsere Abmachung hältst. (ich möcte, das du dich an unzere apmachung heltst) - Voglio che tu rispetti il nostro accordo.
Haben Sie etwas gegen einen leichten Husten? (haben zi etvas gegen ainen laicten husten) - Avete qualcosa per una leggera tosse?
Ich nehme lieber etwas Pflanzliches. (ich näme liber etvas pflantslices) - Preferisco qualcosa a base di piante.
Die Ärztin hat mir ein neues Medikament verschrieben. (di ärtstin hat mir ain noies medikament fercriben) - La dottoressa mi ha prescritto un nuovo farmaco.
Ich hab heute keinen Appetit, mir ist ein bisschen übel. (ich hab hoite kainen apetit, mir ist ain biscen übel) - Oggi non ho appetito, ho un po' di nausea.
Der Arzt möchte wissen, wann die Beschwerden angefangen haben. (der artzt möcte vissen, van di besverden angefangen haben) - Il medico vuole sapere quando sono iniziati i disturbi.
Der Zug ist gerade auf Gleis sieben eingefahren. (der tsug ist gerade auf glais ziben eingefaren) - Il treno è appena entrato al binario sette.
Ich hab im Zug einen freien Vierer gefunden. (ich hab im tsug ainen fraien firer gefunden) - Sul treno ho trovato uno scompartimento libero da quattro posti.
Wir müssen in der nächsten Station aussteigen. (vir müssen in der nechsten station ausstaigen) - Dobbiamo scendere alla prossima stazione.
Der Anschlusszug wartet leider nicht auf verspätete Fahrgäste. (der anschlus-tsug wartet leider nicht auf ferspetete far-geste) - Purtroppo il treno in coincidenza non aspetta i passeggeri in ritardo.
Die U-Bahn ist gerade ziemlich voll geworden. (di u-baan ist gerade ziemlich fol geworden) - La metropolitana si è riempita parecchio proprio adesso.
Ich hab die Station auf der Karte markiert. (ich hab di station auf der karte markirt) - Ho segnato la stazione sulla mappa.
An der nächsten Haltestelle müssen wir in den Bus umsteigen. (an der nechsten haltestelle müssen vir in den bus umstaigen) - Alla prossima fermata dobbiamo cambiare e prendere l'autobus.
Der Bus hat wegen einer Baustelle zehn Minuten Verspätung. (der bus hat wegen ainer baustelle tzen minuten ferspetung) - L'autobus ha dieci minuti di ritardo a causa di un cantiere.
Ich hab meinen Fahrschein in der Jacke vergessen. (ich hab mainen farscain in der iake fergeben) - Ho dimenticato il biglietto nella giacca.
Am Flughafen ist heute besonders viel los. (am flughafen ist hoite besonders fiil los) - Oggi in aeroporto c'è particolarmente tanta gente.
Wo muss ich mein Handgepäck kontrollieren lassen? (vo muss ich main handgepek kontrollieren lassen) - Dove devo far controllare il bagaglio a mano?
Wir haben noch eine Stunde bis zum Boarding. (vir habn noch aine stunde bis tsum boarding) - Abbiamo ancora un'ora prima dell'imbarco.
Auf der Fähre darf man das Auto während der Fahrt nicht verlassen. (auf der fere darf man das auto während der fart nicht ferlassen) - Sul traghetto non si può lasciare l'auto durante la traversata.
Der Wind ist auf dem Wasser deutlich stärker als an Land. (der vind ist auf dem vasser doitlec sterker als an land) - Sul mare il vento è decisamente più forte che a terra.
An der Ecke findest du einen kleinen Supermarkt. (an der ecke findest du ainen klainen zupamarkt) - All'angolo trovi un piccolo supermercato.
Geh einfach geradeaus, bis du den großen Brunnen siehst. (ge-e ainfac geradeaus, bis du den grossen brunnen ziist) - Vai semplicemente dritto finché non vedi la grande fontana.
Beim Starten macht der Motor ein klackerndes Geräusch. (baim starten macht der motor ain klackerndes geroisc) - Quando avvio il motore il motore fa un rumore metallico.
Ich hab unterwegs eine Reifenpanne bekommen. (ich hab unterwegs aine raifenpanne bekommen) - Ho bucato mentre ero in viaggio.
Zum Glück konnte ich das Auto sicher am Straßenrand abstellen. (tsum glück konte ich das auto zicher am strassenrant apstellen) - Per fortuna ho potuto parcheggiare l'auto in sicurezza sul bordo della strada.
Die Feuerwehr musste wegen des Rauchs ins Gebäude. (di foierver musste wegen des rauchs ins gebäude) - I vigili del fuoco hanno dovuto entrare nell'edificio a causa del fumo.
Nach dem starken Regen war die Unterführung komplett überflutet. (nach dem starken regen var di unterfürung komplet überflutet) - Dopo la forte pioggia il sottopassaggio era completamente allagato.
Im Hotel war das WLAN so langsam, dass kaum etwas funktioniert hat. (im hotel var das ve-lan zo langsam, das kaum etvas funktioniert hat) - In hotel il Wi-Fi era così lento che funzionava a malapena qualcosa.
Könnten Sie bitte die Heizung in unserem Zimmer überprüfen? (könnten zi bitte di haitzung in unzerem tsimmer überprüfen) - Potrebbe controllare il riscaldamento nella nostra camera, per favore?
Wir haben im Ferienhaus alles so vorgefunden, wie es beschrieben war. (vir habn im ferienhaus alles zo forgefunden, vi es beschrieben var) - Nella casa vacanze abbiamo trovato tutto come era descritto.
Ich hab die Fenster heute weit aufgemacht, damit frische Luft reinkommt. (ich hab di fenster hoite vait aufgemacht, damit frisce luft rainkommt) - Oggi ho spalancato le finestre per far entrare aria fresca.
Die Schlüssel sind diesmal in der Schublade neben dem Telefon. (di schlüssl zint diesmal in der scublade neben dem telefon) - Questa volta le chiavi sono nel cassetto accanto al telefono.
Ich muss noch den Mülleimer in der Küche leeren. (ich muss noch den müleimer in der küce leren) - Devo ancora svuotare il cestino della cucina.
Der Hund hat seine Decke im Wohnzimmer zerfetzt. (der hund hat zaine decke im vonzimmer zerfetst) - Il cane ha fatto a pezzi la sua coperta in soggiorno.
Die Katze wartet schon vor dem Futternapf. (di katze wartet scion for dem futternapf) - Il gatto sta già aspettando davanti alla ciotola.
Ich hab die Handtücher gerade aus dem Trockner genommen. (ich hab di handtücher gerade aus dem trockner genommen) - Ho appena tolto gli asciugamani dall'asciugatrice.
Die Waschmaschine zeigt plötzlich einen Fehler an. (di vasmascine tsaigt plötzlich ainen fehler an) - La lavatrice improvvisamente segnala un errore.
Kannst du bitte die letzte Lampe im Flur ausschalten? (kanst du bitte di letzte lampe im flur ausschalten) - Puoi spegnere l'ultima luce in corridoio, per favore?
Ich trinke meinen Kaffee heute lieber auf dem Balkon. (ich trinke mainen kaffe hoite liber auf dem balkon) - Oggi preferisco bere il caffè sul balcone.
Zum Frühstück hatte ich nur ein Brötchen mit Käse. (tsum früstück hatte ich nur ain brötcen mit keze) - A colazione ho mangiato solo un panino con formaggio.
Kannst du den Salat schon mal auf den Tisch stellen? (kanst du den zalat scion mal auf den tisc stellen) - Puoi mettere intanto l'insalata in tavola?
Wir haben nach dem Essen noch einen Spaziergang gemacht. (vir habn nach dem essen noch ainen spaciergang gemacht) - Dopo cena abbiamo fatto ancora una passeggiata.
Mein Sohn hat heute seine Brotdose zu Hause vergessen. (main zon hat hoite zaine brotdoze tsu hause fergeben) - Oggi mio figlio ha dimenticato a casa il contenitore del pranzo.
In der nächsten Stunde schreiben wir einen Test. (in der nechsten stunde schreiben vir ainen test) - Nell'ora successiva facciamo una verifica.
Für die Hausaufgabe muss sie einen kurzen Text schreiben. (für di hausaufgabe muss zi ainen kurtzen text schreiben) - Per i compiti deve scrivere un breve testo.
Der neue Schüler sitzt direkt neben ihm. (der noie scüler sitzt direkt neben im) - Il nuovo studente siede proprio accanto a lui.
Ich hab dir extra einen Zettel für morgen hingelegt. (ich hab dir extra ainen tsettel für morgen hingelegt) - Ti ho lasciato apposta un biglietto per domani.
Du musst Bescheid sagen, wenn sich deine Pläne ändern. (du musst bescait sagen, ven zich daine pläne ändern) - Devi avvisarmi se cambiano i tuoi programmi.
Heute darfst du selbst entscheiden, was wir anschauen. (hoite darfst du zelbst entscaiden, vas vir anschauen) - Oggi puoi decidere tu cosa guardiamo.
Ich möchte, dass du mir kurz Bescheid gibst, bevor du losfährst. (ich möcte, das du mir kurtz bescait gibst, bevor du losferst) - Voglio che mi avvisi brevemente prima di partire.
Haben Sie etwas gegen eine verstopfte Nase und Kopfschmerzen? (haben zi etvas gegen aine ferstopfte naze und kopfscmerzen) - Avete qualcosa per il naso chiuso e il mal di testa?
Ich hab die Tropfen dreimal am Tag nehmen müssen. (ich hab di tropfen draimal am tag nemen müssen) - Ho dovuto prendere le gocce tre volte al giorno.
Die Apotheke macht heute schon um sechs zu. (di apoteke macht hoite scion um zeks tsu) - Oggi la farmacia chiude già alle sei.
Mein Termin beim Arzt wurde auf nächste Woche verschoben. (main termin baim artzt wurde auf nechste voche ferscoben) - Il mio appuntamento dal medico è stato spostato alla prossima settimana.
Ich hab plötzlich starke Rückenschmerzen bekommen. (ich hab plötzlich starke rücken-scmerzen bekommen) - Ho avuto improvvisamente un forte mal di schiena.
Unser Zug kommt heute auf einem anderen Gleis an. (unzer tsug kommt hoite auf ainem anderen glais an) - Oggi il nostro treno arriva su un altro binario.
Ich hab die Verbindung mit dem schnelleren Zug gewählt. (ich hab di ferbindung mit dem scnellereren tsug gewelt) - Ho scelto il collegamento con il treno più veloce.
Der Zug hält hier nur zwei Minuten. (der tsug helt hier nur tsvai minuten) - Il treno qui si ferma solo due minuti.
Wir können während der Fahrt etwas essen. (vir können während der fart etvas essen) - Possiamo mangiare qualcosa durante il viaggio.
Die U-Bahn fährt unter der ganzen Innenstadt durch. (di u-baan fert unter der ganzen innenstadt durc) - La metropolitana passa sotto tutto il centro della città.
Ich hab am Automaten eine Tageskarte gekauft. (ich hab am automaten aine tageskarte gekauft) - Ho comprato un biglietto giornaliero alla macchinetta.
Die nächste Station ist nur zwei Minuten entfernt. (di nechste station ist nur tsvai minuten entfernt) - La prossima stazione dista solo due minuti.
Der Bus ist heute pünktlicher als sonst. (der bus ist hoite pünktlicer als sonst) - Oggi l'autobus è più puntuale del solito.
Ich hab meinen Rucksack auf dem Sitz neben mir abgestellt. (ich hab mainen rucksack auf dem zitz neben mir apgestellt) - Ho appoggiato lo zaino sul sedile accanto a me.
Am Flughafen mussten wir unsere Schuhe ausziehen. (am flughafen mussten vir unsere scue aus-tsien) - In aeroporto abbiamo dovuto toglierci le scarpe.
Ich hab die Bordkarte schon als PDF auf dem Handy. (ich hab di bortkarte scion als pe-de-ef auf dem hendi) - Ho già la carta d'imbarco in PDF sul cellulare.
Unser Flug geht erst heute Abend. (unzer flug geet erst hoite abent) - Il nostro volo parte solo stasera.
Die Fähre ist pünktlich im Hafen angekommen. (di fere ist pünktlic im haafen angekommen) - Il traghetto è arrivato puntualmente al porto.
Wir haben die Autoschlüssel vor dem Einsteigen noch mal kontrolliert. (vir habn di autosc-lüssl for dem ainstaigen noch mal kontrolliert) - Prima di salire abbiamo controllato ancora una volta le chiavi dell'auto.
Nach dem Kreisverkehr nimmst du die erste Ausfahrt. (nach dem kraisferker nimst du di erste ausfart) - Dopo la rotatoria prendi la prima uscita.
Das Navi hat uns über eine kleinere Straße geschickt. (das navi hat uns über aine klainere strasse geschickt) - Il navigatore ci ha fatto passare per una strada secondaria.
Ich hab beim Parken einen Pfosten übersehen. (ich hab baim parken ainen pfosten überzeen) - Durante il parcheggio non ho visto un paletto.
Die Batterie ist leer, deshalb springt der Wagen nicht an. (di baterie ist leer, deshalb springt der vagen nicht an) - La batteria è scarica, per questo l'auto non parte.
Wir mussten das Auto am Straßenrand stehen lassen. (vir mussten das auto am strassenrand steen lassen) - Abbiamo dovuto lasciare l'auto sul bordo della strada.
Der Strom ist während des Gewitters zweimal ausgefallen. (der strom ist während des gevitters tsvai-mal ausgefallen) - Durante il temporale è saltata la corrente due volte.
Wegen der Baustelle kommt man hier momentan nicht durch. (wegen der baustelle kommt man hier momentan nicht durc) - A causa del cantiere al momento non si riesce a passare da qui.
Im Hotel fehlt uns noch eine zweite Zimmerkarte. (im hotel felt uns noch aine tsvaita tsimmerkarte) - In hotel ci manca ancora una seconda tessera della camera.
Das Fenster im Bad lässt sich nicht richtig schließen. (das fenster im baad lest zich nicht richtig schließen) - La finestra del bagno non si chiude bene.
Der Gastgeber hat uns die Hausregeln per Nachricht geschickt. (der gastgeber hat uns di hausregeln per nachricht geschickt) - L'host ci ha mandato le regole della casa per messaggio.
Ich hab den Küchentisch vor dem Frühstück abgewischt. (ich hab den kücentisc for dem früstück abgewischt) - Ho pulito il tavolo della cucina prima di colazione.
Die Spülmaschine ist fertig, du kannst sie ausräumen. (di spülmascine ist fertig, du kanst zi ausroimen) - La lavastoviglie ha finito, puoi svuotarla.
Ich hab die Schlüssel in meiner Jackentasche gefunden. (ich hab di schlüssl in meiner iakentasce gefunden) - Ho trovato le chiavi nella tasca della mia giacca.
Der Hund kratzt schon wieder an der Wohnungstür. (der hund kratzt scion vider an der vonungstür) - Il cane gratta di nuovo alla porta di casa.
Unsere Katze hat sich im Schrank versteckt. (unzere katze hat zich im scrank fersteckt) - Il nostro gatto si è nascosto nell'armadio.
Ich muss noch die Wäsche aus der Maschine holen. (ich muss noch di vesce aus der mascine holen) - Devo ancora togliere il bucato dalla lavatrice.
Das Licht im Schlafzimmer ist noch an. (das licht im sclafzimmer ist noch an) - La luce in camera da letto è ancora accesa.
Mach bitte die Tür hinter dir zu. (mach bitte di tür hinter dir tsu) - Chiudi la porta dietro di te, per favore.
Ich hab heute Morgen keine Zeit gehabt, in Ruhe zu frühstücken. (ich hab hoite morgen kaine tsait gehabt, in ru-e tsu früstücken) - Stamattina non ho avuto tempo di fare colazione con calma.
Der Kaffee steht schon auf dem Küchentisch. (der kaffe steht scion auf dem kücentisc) - Il caffè è già sul tavolo della cucina.
Zum Mittagessen machen wir Nudeln mit Gemüse. (tsum mittagessen machen vir nudeln mit gemüze) - A pranzo facciamo pasta con verdure.
Wer möchte noch ein Stück Kuchen? (ver möcte noch ain stück kuchen) - Chi vuole ancora una fetta di torta?
Beim Abendessen war es heute ungewöhnlich still. (baim abentessen var es hoite ungewöhnlic still) - Stasera a cena c'era un silenzio insolito.
Die Schule hat uns eine Nachricht über die App geschickt. (di scule hat uns aine nachricht über di äpp geschickt) - La scuola ci ha mandato un messaggio tramite l'app.
Sie muss für morgen noch ein Referat vorbereiten. (zi muss für morgen noch ain referat forbereiten) - Deve ancora preparare una presentazione per domani.
In Geschichte hat er gerade ein interessantes Thema. (in gescichte hat er gerade ain interesantes tema) - In storia sta affrontando un argomento interessante.
Die Mathelehrerin hat die Aufgabe an der Tafel erklärt. (di mateleererin hat di aufgabe an der tafel erklärt) - L'insegnante di matematica ha spiegato l'esercizio alla lavagna.
Ich hab ihm geholfen, den Text zu verstehen. (ich hab im geholfen, den text tsu fersteen) - L'ho aiutato a capire il testo.
Du kannst nach dem Lernen eine Pause machen. (du kanst nach dem lernen aine pause machen) - Dopo aver studiato puoi fare una pausa.
Heute Abend musst du nicht früh ins Bett. (hoite abent musst du nicht frü ins bett) - Stasera non devi andare a letto presto.
Ich will nur, dass du mir vorher Bescheid sagst. (ich vil nur, das du mir forer bescait sagst) - Voglio solo che me lo dica prima.
Du kannst mitkommen, aber du musst um elf wieder da sein. (du kanst mitkommen, aber du musst um elf vider da zain) - Puoi venire, ma devi essere di nuovo qui alle undici.
Ich hab dir erlaubt, länger aufzubleiben. (ich hab dir erlaubt, lenger auftsubleiben) - Ti ho permesso di stare sveglio più a lungo.
Haben Sie etwas gegen Sodbrennen? (haben zi etvas gegen zodbrennen) - Avete qualcosa contro il bruciore di stomaco?
Ich brauche eine neue Packung von diesem Medikament. (ich brauche aine noie pakung fon disem medikament) - Ho bisogno di una nuova confezione di questo farmaco.
Die Schmerzen sind seit gestern deutlich schwächer. (di scmerzen zint sait gestern doitlec svecher) - I dolori sono decisamente più lievi da ieri.
Der Arzt hat mir Blut abgenommen. (der artzt hat mir blut abgenommen) - Il medico mi ha fatto un prelievo di sangue.
Ich musste im Wartezimmer fast eine Stunde sitzen. (ich musste im varte-tsimmer fast aine stunde sitzen) - Ho dovuto aspettare quasi un'ora in sala d'attesa.
Der Zug nach Köln fährt heute zehn Minuten später ab. (der tsug nach köln fert hoite tzen minuten speter ap) - Il treno per Colonia parte oggi con dieci minuti di ritardo.
Ich hab mein Ticket schon auf dem Handy gespeichert. (ich hab main tiket scion auf dem hendi gespeichert) - Ho già salvato il biglietto sul cellulare.
Der Zug ist ziemlich voll, aber wir haben noch Sitzplätze bekommen. (der tsug ist ziemlich fol, aber vir habn noch zitzplätse bekommen) - Il treno è piuttosto affollato, ma abbiamo trovato ancora dei posti a sedere.
Kannst du kurz auf meinen Koffer aufpassen? (kanst du kurtz auf mainen koffer aufpassen) - Puoi tenere d'occhio un attimo la mia valigia?
Die U-Bahn fährt heute nur bis zum Hauptbahnhof. (di u-baan fert hoite nur bis tsum hauptbaanhof) - Oggi la metropolitana arriva solo fino alla stazione centrale.
Ich hab keine Ahnung, auf welcher Seite wir aussteigen müssen. (ich hab kaine anung, auf velcher zaita vir ausstaigen müssen) - Non ho idea da quale lato dobbiamo scendere.
Die Rolltreppe zur U-Bahn ist außer Betrieb. (di rolltreppe tsur u-baan ist ausser betrib) - La scala mobile per la metropolitana è fuori servizio.
Der Bus war so voll, dass niemand mehr einsteigen konnte. (der bus var zo fol, das niemand meer ainstaigen konte) - L'autobus era così pieno che non poteva più salire nessuno.
Ich hab die Haltestelle fast verpasst. (ich hab di haltestelle fast ferpasst) - Ho quasi perso la fermata.
Am Flughafen mussten wir ziemlich lange auf unser Gepäck warten. (am flughafen mussten vir ziemlich lange auf unser gepäck varten) - In aeroporto abbiamo dovuto aspettare parecchio i bagagli.
Der Flug geht heute von einem anderen Gate. (der flug geet hoite fon ainem anderen geit) - Oggi il volo parte da un altro gate.
Ich hab vergessen, meine Flüssigkeiten aus dem Rucksack zu nehmen. (ich hab fergeben, maine flüssigkeiten aus dem rucksack tsu nemen) - Ho dimenticato di tirare fuori i liquidi dallo zaino.
Auf der Fähre gibt es einen kleinen Laden. (auf der fere gibt es ainen klainen laden) - Sul traghetto c'è un piccolo negozio.
Wir sind kurz vor der Abfahrt noch an Bord gegangen. (vir zint kurtz for der apfart noch an bort gegangen) - Siamo saliti a bordo poco prima della partenza.
Das Rathaus ist von hier aus leicht zu finden. (das rathauss ist fon hier aus laict tsu finden) - Il municipio è facile da trovare da qui.
Wir sind einfach den Schildern Richtung Zentrum gefolgt. (vir zint ainfac den schildern richtung tsentrum gefolgt) - Abbiamo semplicemente seguito i cartelli verso il centro.
Beim Rückwärtsfahren hab ich einen Pfosten erwischt. (baim rückvertsfaren hab ich ainen pfosten erwischt) - Facendo retromarcia ho urtato un paletto.
Der Mechaniker meint, dass die Reparatur zwei Tage dauert. (der mecaniker maint, das di reparatur tsvai tage dauert) - Il meccanico dice che la riparazione richiederà due giorni.
Ich hab den Pannendienst über die App gerufen. (ich hab den pannendienst über di äpp gerufen) - Ho chiamato il soccorso stradale tramite l'app.
Nach dem Unfall mussten wir auf die Polizei warten. (nach dem unfal mussten vir auf di politsai varten) - Dopo l'incidente abbiamo dovuto aspettare la polizia.
Der Gehweg ist wegen der Bauarbeiten gesperrt. (der ge-e-vek ist wegen der bauarbeiten gesperrt) - Il marciapiede è chiuso a causa dei lavori.
Bei starkem Regen läuft das Wasser hier nicht richtig ab. (bai starkem regen läuft das vasser hier nicht richtig ap) - Quando piove forte, qui l'acqua non defluisce bene.
Unser Hotelzimmer liegt direkt neben dem Aufzug. (unzer hoteltsimmer ligt direkt neben dem auftsug) - La nostra camera d'hotel è proprio accanto all'ascensore.
Könnten wir bitte ein ruhigeres Zimmer bekommen? (könnten vir bitte ain ruigeres tsimmer bekommen) - Potremmo avere una camera più tranquilla, per favore?
Im Bad funktioniert die Steckdose nicht. (im baad funktioniert di steckdoze nicht) - In bagno la presa elettrica non funziona.
Der Gastgeber hat uns schon vor der Anreise alle wichtigen Infos geschickt. (der gastgeber hat uns scion for der anraize alle wichtigen infos geschickt) - L'host ci ha già mandato tutte le informazioni importanti prima del nostro arrivo.
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
