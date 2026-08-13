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
