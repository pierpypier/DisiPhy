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
