/* ---------- OMINIDI · Dai primi agli Australopitechi (foresta di Hammerschmiede, lago di Toros-Menalla, Aramis, Laetoli, Hadar, Turkana, altopiano delle grotte, valle dei cugini robusti) ---------- */
/* Una sola giornata, dall'alba al tramonto, e più di dieci milioni di anni di storia che si piegano: alba umida nella foresta delle grandi scimmie,
   prima mattina sul lago accanto al deserto, mattina nel bosco di Aramis, tarda mattina sulla piana di cenere di Laetoli, mezzogiorno a Hadar,
   primo pomeriggio sul Turkana, pomeriggio sull'altopiano delle grotte, tramonto nella valle dei cugini robusti: in fondo una pista di orme sulla cenere
   si perde in una luce dorata abbagliante: lì il motore mette il varco.
   Testi, tappe e dialoghi vengono da ominidi.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico).
   Gli oggetti (nomi che iniziano per "om") sono definiti qui, in questo stesso file, e non toccano elementi.js né il motore.
   Nessun essere umano moderno, nessun abito, fuoco, capanna, pittura, sepoltura, cane o animale domestico: solo foresta, acqua, savana, cenere, frutti, erbe, sassi e ossa.
   I personaggi sono individui con pelo, volto sporgente e braccia lunghe, mai caricature; i temi dolorosi (Prima Famiglia, bambino di Taung, pozzo di Malapa) sono trattati
   con tono sobrio: i predatori si vedono solo da lontano, nessuna scena cruenta. */
(function(){
const GT=372;
/* ===================== testi (da ominidi.txt) ===================== */
const LKTXT=[
"Più di undici milioni di anni fa una parte dell’Europa era più calda e più umida di oggi, coperta da foreste lungo fiumi e laghi. Qui vivevano grandi scimmie senza coda, parenti lontane di oranghi, gorilla, scimpanzé e di noi: gli studiosi le chiamano ominidi, ma non erano ancora esseri umani.",
"A Hammerschmiede, nella Baviera di oggi, sono stati trovati i resti di Danuvius guggenmosi, una grande scimmia vissuta circa 11,6 milioni di anni fa. Secondo gli studiosi si arrampicava con le lunghe braccia e camminava in piedi sui rami, con le gambe dritte e un alluce robusto che afferrava. Se sia un nostro parente stretto o un ramo lontano dell’albero è ancora una domanda aperta.",
"Lungo lo stesso fiume vivevano animali di cui oggi restano solo le ossa: i deinoteri, parenti degli elefanti con le zanne ricurve verso il basso, e altri grandi erbivori, poi orsi antichi, iene e piccoli animali simili a lontre. Era un ambiente ricchissimo, con più di cento specie di vertebrati.",
"Nei milioni di anni successivi il clima si raffreddò e si fece più secco, con stagioni più marcate. Gli studiosi pensano che per questo le foreste europee si ridussero e le grandi scimmie d’Europa scomparvero; in Africa, invece, la storia continuò.",
"A Toros-Menalla, nel Ciad di oggi, circa sette milioni di anni fa un grande lago bagnava un paesaggio a mosaico: rive con pesci e coccodrilli, boschi lungo l’acqua, savana alberata e, poco più in là, dune di sabbia. Sono fra le più antiche prove di deserto nel sud del Sahara.",
"Nel 2001 in Ciad è stato trovato un cranio di circa sette milioni di anni fa, soprannominato Toumaï, \"speranza di vita\" in una lingua locale. Appartiene a Sahelanthropus tchadensis: ha un volto piatto con arcate marcate sopra gli occhi, canini piccoli e un cervello grande come quello di uno scimpanzé. Gli studiosi discutono ancora se fosse un parente stretto della linea umana o una grande scimmia vissuta poco dopo la separazione.",
"Sulle colline di Tugen, in Kenya, circa sei milioni di anni fa viveva Orrorin tugenensis, il cui nome vuol dire \"uomo originale\" nella lingua dei Tugen. Un osso di coscia fa pensare che camminasse in piedi ma anche che si arrampicasse bene sugli alberi. Alcuni studiosi ne sono convinti, altri no.",
"Perché camminare su due gambe? Gli studiosi hanno molte idee: muoversi fra gli alberi, portare il cibo con le mani, attraversare le radure, risparmiare energia. Nessuna è sicura, e forse più ragioni si sono sommate. Camminare in piedi arrivò molto prima della pietra lavorata e del fuoco.",
"Ad Aramis, nell’Afar etiope di oggi, circa 4,4 milioni di anni fa c’erano sorgenti d’acqua dolce, macchie di bosco fitto, alberi di fico, bagolari e palme ai margini, e più lontano praterie. Chi scoprì la zona pensa che fosse un bosco umido; altri studiosi la immaginano più aperta, quasi una savana alberata: la questione è ancora discussa.",
"Nel 1994 ad Aramis fu trovato lo scheletro parziale di una femmina di Ardipithecus ramidus, soprannominata Ardi, vissuta circa 4,4 milioni di anni fa. Alta circa 120 centimetri, con un cervello piccolo come quello di uno scimpanzé, è il più antico scheletro così completo di un parente dell’uomo. Lo studio durò oltre quindici anni: il suo cranio era schiacciato in più di sessanta pezzi.",
"Il piede di Ardi era rigido, adatto a spingere il passo, ma conservava un alluce divaricato, che poteva afferrare i rami. Secondo i suoi scopritori camminava in piedi a terra e saliva sugli alberi camminando sui palmi delle mani lungo i rami; altri studiosi non sono d’accordo sui dettagli. Non somigliava a uno scimpanzé: l’antenato che abbiamo in comune con loro era diverso da tutti gli esseri di oggi.",
"Ardipithecus aveva canini piccoli, simili nei maschi e nelle femmine, e denti adatti a una dieta molto varia: frutti, foglie, semi, e forse insetti e piccoli animali. Alcuni studiosi pensano che i maschi litigassero meno di quelli degli scimpanzé: è un’ipotesi, non una certezza.",
"A Laetoli, in Tanzania, circa 3,66 milioni di anni fa la savana alberata fu coperta da uno strato sottile di cenere vulcanica, caduta da un vulcano lontano. Poi arrivò la pioggia, che trasformò la cenere in una crosta morbida: un foglio perfetto su cui chiunque passasse lasciava il segno.",
"Prima di Laetoli, circa 4,2-3,8 milioni di anni fa, sulle rive del lago Turkana, in Kenya, e in Etiopia viveva Australopithecus anamensis, il più antico australopiteco conosciuto. Un osso di gamba, la tibia, mostra che camminava in piedi; un cranio quasi intero, trovato in Etiopia nel 2016, ha circa 3,8 milioni di anni. Il nome Australopithecus, \"scimmia del sud\", fu dato nel 1925 a un altro fossile, in Sudafrica.",
"Sulla cenere bagnata passarono animali di ogni specie e anche alcuni che camminavano in piedi. Le loro orme, riconosciute nel 1978 dal gruppo di Mary Leakey, formano una pista lunga circa 27 metri, fatta da tre individui; uno sembra mettere i piedi nelle impronte di un altro. Subito dopo un’altra eruzione coprì tutto, e la cenere conservò le orme per milioni di anni.",
"Scoperte nel 2014-2015 e descritte nel 2016, altre due piste, a circa 150 metri di distanza, appartengono ad almeno due individui, uno dei quali alto circa un metro e sessanta, molto più dei primi tre. Gli studiosi pensano che fossero tutti Australopithecus afarensis, di taglie molto diverse. Quanto il loro passo somigliasse al nostro è ancora discusso.",
"A Hadar, in Etiopia, fra circa 3,4 e 2,9 milioni di anni fa, un fiume con meandri bagnava una pianura e un lago si allargava e si ritirava. Qui visse per quasi un milione di anni Australopithecus afarensis, la specie di cui sono stati trovati più resti: abitava boschi lungo l’acqua, praterie e cespugli senza una vera preferenza.",
"Il 24 novembre 1974 Donald Johanson e Tom Gray trovarono a Hadar uno scheletro vecchio di circa 3,2 milioni di anni. È Lucy, una femmina adulta alta poco più di un metro e pesante circa trenta chili, di cui si è conservato circa il 40 per cento. Il nome viene da una canzone dei Beatles che la squadra ascoltava; in amarico si chiama Dinkinesh, \"sei meravigliosa\".",
"Nel 1975, in un altro punto di Hadar, furono scoperte più di duecento ossa di almeno 13 individui di età diverse, poi saliti a 17: adulti, adolescenti e bambini vissuti circa 3,2 milioni di anni fa. Sono chiamati la \"Prima Famiglia\", ma non è certo che fossero parenti. Come siano morti non si sa: gli studiosi hanno pensato a un’inondazione o ai predatori.",
"A Dikika, vicino a Hadar, nel 2000 è stato trovato lo scheletro di una bambina di circa tre anni vissuta 3,3 milioni di anni fa. Fu chiamata Selam, \"pace\". Le gambe e i piedi dicono che sapeva camminare in piedi; le scapole, simili a quelle dei gorilla, e le dita ricurve fanno pensare che si arrampicasse molto. L’osso della gola, simile a quello delle scimmie africane, fa pensare che non parlasse come noi.",
"Gli australopitechi avevano denti larghi con lo smalto spesso, buoni per masticare cibi duri. Gli studiosi pensano che mangiassero frutti, foglie, semi, radici, erbe e forse insetti e piccoli animali. Nessuno cuoceva niente: il fuoco è una storia di molto più tardi.",
"Vicino al lago Turkana, in Kenya, circa 3,3 milioni di anni fa un fiume largo trasportava sassi di lava scura che si ammucchiavano sulle sue sponde. Era un posto ideale per chi cercava sassi duri e già rotondi, con alberi lungo l’acqua e prati secchi intorno.",
"A Lomekwi, sulla sponda occidentale del lago Turkana, sono stati trovati strumenti di pietra di circa 3,3 milioni di anni fa: sassi grandi usati come martelli e come incudini, nuclei e schegge staccate con colpi forti. Sono i più antichi strumenti di pietra conosciuti, vecchi di circa 700.000 anni più dei precedenti. Chi li fece non si sa: forse un australopiteco, forse un parente come Kenyanthropus platyops, il cui cranio fu trovato lì vicino.",
"A Dikika sono state trovate ossa di animali di circa 3,4 milioni di anni fa con segni che i loro scopritori attribuiscono a lame di pietra, usate per staccare la carne e aprire le ossa; altri studiosi pensano a segni di calpestio. A Bouri, circa 2,5 milioni di anni fa, ossa di antilope e di cavallo con tagli chiari furono trovate vicino ai resti di Australopithecus garhi, il cui nome vuol dire \"sorpresa\" nella lingua afar. A Gona, poco lontano, ci sono strumenti scheggiati di circa 2,6 milioni di anni fa.",
"Nella stessa regione del Turkana, circa 3,5 milioni di anni fa, viveva anche Kenyanthropus platyops, \"l’uomo del Kenya dalla faccia piatta\", trovato alla fine degli anni Novanta. Alcuni lo considerano una specie a sé, altri una variante di Australopithecus afarensis. Il punto è che già allora più specie di parenti dell’uomo camminavano nelle stesse valli: l’albero della nostra famiglia è un cespuglio, non una scala.",
"Nel Sudafrica di oggi, a nord-ovest di Johannesburg, l’altopiano è pieno di grotte e di pozzi: gli animali, e a volte gli australopitechi, cadevano dentro o venivano trascinati nelle grotte dai predatori, e le loro ossa diventavano roccia. Gli australopitechi non vivevano nelle grotte: le grotte sono solo i luoghi dove le ossa si sono conservate meglio. Oggi la regione, chiamata Culla dell’Umanità, è patrimonio mondiale dell’UNESCO dal 1999 e custodisce circa il 40 per cento dei fossili di ominidi conosciuti.",
"Nel 1924, in una cava di calcare a Taung, fu trovato il cranio di un bambino di circa tre anni: il suo cervello si era conservato come un calco di pietra. Raymond Dart lo descrisse nel 1925 come una specie nuova, Australopithecus africanus, e molti esperti non gli credettero. Gli studiosi pensano che a catturare il piccolo fosse stata un’aquila, come mostrano i segni sul cranio; la sua età, circa 2,8 milioni di anni, è discussa.",
"A Sterkfontein, nel 1947, Robert Broom e John Robinson trovarono un cranio quasi intero di un’adulta di Australopithecus africanus, soprannominata \"signora Ples\". È il cranio più completo di tutta la specie. I fossili di Sterkfontein appartengono a un periodo fra circa 2,8 e 2,1 milioni di anni fa, e la scoperta contribuì a convincere molti esperti che gli australopitechi fossero davvero parenti dell’uomo.",
"A Sterkfontein è stato trovato anche \"Piccolo Piede\", uno scheletro quasi intero, con circa il 90 per cento delle ossa: scoperto a partire dagli anni Novanta, fu liberato dalla roccia in molti anni di lavoro. Le analisi più recenti gli danno circa 3,67 milioni di anni, ma la data e la specie sono ancora discusse.",
"Nel 2008 a Malapa il figlio di nove anni di un paleontologo, Matthew Berger, scoprì una clavicola fossile: era il primo osso di Australopithecus sediba, vissuto circa 1,98 milioni di anni fa. Furono poi trovati scheletri parziali di un giovane maschio e di una femmina adulta, caduti in un pozzo profondo. \"Sediba\" vuol dire \"sorgente\" nella lingua sotho; il giovane è chiamato Karabo, \"la risposta\". Mescola tratti da australopiteco e tratti più simili a Homo: gli studiosi discutono dove collocarlo.",
"A Ledi-Geraru, in Etiopia, fra circa 2,8 e 2,6 milioni di anni fa, fiumi e laghi poco profondi si allargavano e si ritiravano in un paesaggio verde. Nel 2025 sono stati descritti denti che mostrano che un australopiteco di una specie nuova e i primi Homo vivevano lì nello stesso periodo. Gli studiosi pensano che prima di 2,5 milioni di anni fa nell’Africa orientale vivessero fino a quattro rami della nostra famiglia.",
"Dopo circa 2,5 milioni di anni fa compaiono i Paranthropus, i \"robusti\": mandibole massicce, molari enormi, una cresta ossea sul cranio per ancorare i muscoli. Il \"Teschio Nero\" di circa 2,5 milioni di anni fa, in Kenya, è di Paranthropus aethiopicus; il primo cranio di Paranthropus boisei fu trovato da Mary Leakey a Olduvai, in Tanzania, il 17 luglio 1959. I Paranthropus sono considerati un ramo laterale, non un nostro antenato diretto.",
"Per decenni Paranthropus boisei fu chiamato \"Uomo schiaccianoci\" per i suoi denti enormi. Le analisi dei denti di 22 individui del Kenya hanno mostrato che mangiava soprattutto erbe e giunchi, in media circa il 77 per cento della dieta, come gli antenati di zebre, maiali e ippopotami.",
"Nello stesso tempo compaiono i primi membri del nostro genere, Homo: la mandibola più antica, trovata a Ledi-Geraru, ha circa 2,8 milioni di anni. Poco dopo, circa 2,6 milioni di anni fa, nella stessa zona appaiono strumenti di pietra scheggiata semplici, detti Oldowan dal nome della gola di Olduvai: forse li fece Homo. Da quale australopiteco discenda il nostro genere è ancora una domanda aperta.",
"Sulla cenere, la strada continua."
];
const NAME={
om_ramo:"Ramo, il camminatore dei rami",
om_riva:"Riva, l’esploratrice del lago",
om_fico:"Fico, la raccoglitrice del bosco",
om_orma:"Orma, il camminatore di Laetoli",
om_acacia:"Acacia, la madre della valle",
om_sasso:"Sasso, il battitore di pietre",
om_brezza:"Brezza, la giovane dell’altopiano",
om_molare:"Molare, il masticatore di erbe"
};
const GREET={
om_ramo:"Ehi, Pierpaolo! Vieni sotto questo ramo, ma guarda dove metti i piedi: a terra c’è solo fango, qui sopra stiamo meglio. Mi chiamano Ramo, e da qui si vede tutto il fiume. Un posto in alto è sempre un buon posto.",
om_riva:"Ehi, Pierpaolo! Resta sul bordo asciutto, qui il fango è traditore e l’acqua ha i denti. Io sono Riva, e da questa sponda vedo lago, bosco e dune tutti insieme. Un posto così non ce n’è un altro.",
om_fico:"Ehi, Pierpaolo! Siediti all’ombra, ma non su quel ramo: è per i frutti, non per le persone. Io sono Fico, e questo albero è il mio orologio: quando i frutti sono maturi, so che è il momento. Mangia piano, il bosco non scappa.",
om_orma:"Ehi, Pierpaolo! Non correre sulla cenere: è molle e ricorda tutto. Io sono Orma, e vado sempre per primo, così gli altri mettono i piedi dove li ho messi io. Guarda dietro di te: vedi? Le impronte restano.",
om_acacia:"Ehi, Pierpaolo! Vieni all’ombra, a mezzogiorno il sole picchia sulla testa. Io sono Acacia, e questa è casa mia: un po’ di fiume, un po’ di bosco, un po’ di prato. Una mia lontana parente, Lucy, la troveranno proprio qui.",
om_sasso:"Ehi, Pierpaolo! Stai lontano dalle schegge: tagliano come denti. Io sono Sasso, e batto pietra contro pietra. Un giorno qualcuno ci troverà e si chiederà chi eravamo. Io rispondo: eravamo qui.",
om_brezza:"Ehi, Pierpaolo! Non avvicinarti troppo a quel buco: è un pozzo, e il pozzo non perdona. Io sono Brezza, e da qui in alto si vede lontano, ma tu vieni da ancora più lontano. Raccontami: com’è?",
om_molare:"Ehi, Pierpaolo! Siediti qui, nell’erba: il sole sta tramontando, e il tramonto è il miglior momento per mangiare in pace. Mi chiamano Molare, e questa è la mia cena. Non si fanno bei discorsi a stomaco vuoto, ma io ne faccio comunque."
};
const WNAME="Ominidi · Dai primi agli Australopitechi";
const INTRO="Preistoria, dall’alba al tramonto. Parti dalla foresta umida dove vivevano le grandi scimmie, più di undici milioni di anni fa; poi vai sul lago, fra l’acqua e le dune, dove i primi parenti dell’uomo forse imparavano a camminare in piedi. Nella mattina il bosco di Aramis, e nella tarda mattina la piana di cenere di Laetoli, dove restano le orme. A mezzogiorno la valle di Hadar, la terra di Lucy; nel primo pomeriggio la valle delle prime pietre battute; poi l’altopiano delle grotte del Sudafrica, con il bambino di Taung. Al tramonto la valle dei cugini robusti, dove arrivano i primi Homo. Il tempo qui si piega: scimmie, camminatori, raccoglitrici e cugini di ogni epoca ti vengono incontro.";
const TQA={
om_ramo:[
["Chi sei e che fai?","Ramo, grande scimmia senza coda: mi muovo di ramo in ramo, cerco frutti e foglie e sto attento ai predatori. Sono una parente lontana di tutti voi, anche di te. Non sono ancora un essere umano, ma nemmeno una scimmia come le altre."],
["Parli davvero?","A modo mio: con versi, gesti e sguardi. Come fossero i nostri suoni nessuno lo sa; per te il tempo si piega e mi capisci lo stesso. Capita, nei viaggi lunghi."],
["Come ti chiameranno gli studiosi?","Danuvius guggenmosi: il nome viene dal dio romano del Danubio, il grande fiume della zona, e da Sigulf Guggenmos, un appassionato che scoprì la cava dove finiranno le mie ossa. Io mi accontento di Ramo."],
["Cammini in piedi?","Sui rami sì: tengo le gambe dritte, mi tengo con una mano al ramo sopra e cammino lungo il tronco. Gli studiosi lo chiamano un modo di arrampicarsi a gambe e braccia distese. Per terra, chissà: nessuno lo sa."],
["Perché hai un alluce così grande?","Per afferrare: lo uso come un pollice sul piede e tengo bene i rami grandi e piccoli. I tuoi parenti più tardi avranno un alluce più corto, adatto a camminare a terra. A ognuno il suo alluce."],
["Cosa mangi?","Frutti, soprattutto, ma anche foglie, semi e quello che trovo. I miei denti hanno lo smalto spesso: gli studiosi dicono che sono adatti a una dieta varia. Un cugino più piccolo, qui vicino, mangia soprattutto foglie: il bosco basta per tutti."],
["Dove dormi?","Su un ramo robusto, e se posso intreccio rami e foglie per farmi un giaciglio, come le grandi scimmie di oggi. Se lo facessi davvero, però, nessuno lo sa. Ho preso l’abitudine di dormire con una mano attaccata a qualcosa."],
["Chi abita qui con te?","I giganti: i deinoteri, enormi, con le zanne rivolte verso il basso, e altri elefanti antichi con la mascella lunga. Poi orsi, iene e piccoli nuotatori simili a lontre. Meglio stare in alto e guardare."],
["Sei un mio antenato?","Chissà. Gli studiosi non sono d’accordo: alcuni pensano che io sia vicino alla linea che porta a voi, altri che sia un ramo lontano. Io so solo che i miei piedi stringono il ramo e che mi piace camminare con la schiena dritta."],
["Cosa succederà alla foresta?","Nei milioni di anni a venire il clima si raffredderà e si farà più secco, con stagioni più marcate: la foresta si dirada e i frutti non ci sono tutto l’anno. Gli studiosi pensano che per questo le grandi scimmie d’Europa spariranno. Non è una bella storia, ma è vera."],
["Dove vado dopo?","Verso sud, dove la foresta si apre e arriva un lago accanto a un deserto: lì cammina Riva, fra l’acqua e le dune. Porta pazienza: il viaggio è lungo, ma la luce ti aiuta."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e tieni sempre una mano libera: serve per afferrare quello che non vedi. Se sali su un ramo, prova a camminare dritto sul tronco: è il mio modo di salutare. Buona strada!"]
],
om_riva:[
["Chi sei e che fai?","Riva. Cammino sul bordo del lago in cerca di frutti, semi e foglie. Conosco i punti dove l’acqua è bassa e quelli dove stanno i coccodrilli. Siamo un gruppo piccolo, ci avvisiamo con versi e sguardi."],
["Come ti chiameranno gli studiosi?","Sahelanthropus tchadensis, \"il parente del Sahel del Ciad\". Un cranio come il mio sarà trovato nel 2001 e soprannominato Toumaï, \"speranza di vita\" in una lingua locale. Un bel nome: spero di meritarlo."],
["Sei umana?","Questa domanda se la fanno anche gli studiosi. Alcuni dicono che sono una parente vicina della linea umana, altri che sono una grande scimmia vissuta poco dopo la separazione. Io so di essere Riva, e per ora mi basta."],
["Cammini in piedi?","Spesso sì: un osso di coscia e due ossa dell’avambraccio trovati nella mia zona fanno pensare che camminassi su due gambe sul terreno e mi arrampicassi sugli alberi. Gli studiosi li hanno descritti solo nel 2022, e non tutti sono convinti. Io cammino e basta."],
["Come sono fatti i tuoi denti?","I canini sono piccoli, non sporgenti come quelli di uno scimpanzé; il volto invece è ancora largo e con forti arcate sopra gli occhi. Il mio cervello è piccolo, come quello di uno scimpanzé. Un frutto, però, so riconoscerlo da lontano."],
["Cosa mangi?","Frutti, semi e foglie, penso: nessuno sa con precisione. Il lago dà pesci, ma non è cosa nostra. Il bosco lungo l’acqua ci dà abbastanza."],
["Che animali vivono qui?","Pesci grandi, coccodrilli, ippopotami e animali simili, elefanti antichi, giraffidi, cavalli a tre dita, maiali selvatici e scimmie. È un posto affollato: occhio all’acqua e al cielo."],
["E quel deserto?","Le dune ci sono già: gli studiosi dicono che sono fra le più antiche prove di deserto nel sud del Sahara. Il lago va e viene, ora sale, ora si ritira. Chi vive qui impara che il paesaggio cambia."],
["Perché camminate in piedi?","Non lo so, e non lo sanno nemmeno i tuoi studiosi: per attraversare le radure, per portare il cibo, per risparmiare energia, per vedere lontano. Forse un po’ di tutto. Io so che a due gambe vedo più lontano."],
["Hai dei parenti?","Sulle colline del Kenya, a est, vive Orrorin, \"uomo originale\" nella lingua dei Tugen. Gli studiosi pensano che anche lui camminasse in piedi e salisse sugli alberi. Ci separa circa un milione di anni e molte pianure."],
["Dove vado dopo?","A sud-est, dove la valle diventa bosco e l’acqua esce dalla terra: il bosco di Aramis. Cerca Fico: conosce ogni albero e ogni frutto. E non farti vedere dai coccodrilli."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se un giorno trovi un osso lungo nella sabbia, non buttarlo: potrebbe essere il mio saluto. Io alzo una mano e cammino fino all’acqua. Buon viaggio!"]
],
om_fico:[
["Chi sei e che fai?","Fico. Raccolgo frutti, semi e foglie nel bosco di Aramis. Cammino in piedi per attraversare le radure e salgo sugli alberi quando serve. Gli studiosi un giorno mi chiameranno Ardipithecus ramidus."],
["Cosa vuol dire quel nome?","Nella lingua degli Afar, \"ardi\" vuol dire \"suolo\" e \"ramid\" vuol dire \"radice\": il suolo e la radice, due cose che conosco bene. Un giorno una mia parente sarà chiamata Ardi, e gli studiosi studieranno le sue ossa per anni."],
["Sei alta?","Circa un metro e venti. Il mio cervello è piccolo, come quello di uno scimpanzé, ma so trovare il fico più dolce a un’ora di distanza."],
["Come cammini?","Sul terreno in piedi; sugli alberi mi muovo sui palmi delle mani lungo i rami. Il mio piede è rigido, adatto a spingere il passo, ma ha un alluce che si apre e afferra. Gli studiosi discutono su come lo usassi davvero."],
["Sei uno scimpanzé?","No. Non cammino sulle nocche delle mani e le mie proporzioni sono diverse. Gli studiosi pensano che l’antenato che abbiamo in comune con loro non somigliasse né a uno scimpanzé né a voi."],
["Cosa mangi?","Frutti di fico e di altri alberi, noci, semi, foglie e, se capita, insetti e piccoli animali. Gli studiosi dicono che i miei denti sono da onnivora. Non sono schizzinosa, ma il fico è il mio preferito."],
["Perché i tuoi canini sono piccoli?","Non mi servono per litigare: i maschi e le femmine hanno canini e taglie simili. Alcuni studiosi pensano che da noi i maschi litighino meno che fra gli scimpanzé: è un’ipotesi, non una certezza."],
["Com’è questo posto?","Un bosco con sorgenti d’acqua dolce, macchie di alberi fitti, palme ai margini e più lontano le praterie. Chi mi studierà dirà che è un bosco umido; altri diranno che è più aperto, quasi una savana alberata. Io dico che i fichi ci sono."],
["Chi abita qui?","Scimmie dalla coda lunga che mangiano foglie, antilopi kudu, istrici, pappagalli, pavoni e gufi; più lontano iene e altri animali che preferisco non incontrare. Noi sentiamo il bosco, e il bosco sente noi."],
["E la tua famiglia?","Un gruppo piccolo, con piccoli e anziani. Come vivessimo davvero, nessuno lo sa: solo le ossa e i denti ne parlano. Io credo che ci aiutiamo e ci dividiamo i frutti."],
["Dove vado dopo?","Verso una piana dove la cenere di un vulcano ha coperto la terra e la pioggia l’ha resa morbida: lì cammina Orma. Segui le impronte e fai attenzione a dove metti i piedi."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e che il bosco ti sia dolce. Prima di partire raccogli un fico per la strada: è il mio modo di salutare. Buona strada!"]
],
om_orma:[
["Chi sei e che fai?","Orma, adulto del gruppo: cammino davanti, scelgo il sentiero e controllo che nessuno resti indietro. Non sono il più veloce, ma sono fra i più alti. Gli studiosi mi chiameranno Australopithecus afarensis."],
["Cosa vuol dire Australopithecus?","\"Scimmia del sud\": il nome fu dato nel 1925 a un altro di noi, un piccolo trovato in Sudafrica. Io sono molto più a nord, ma la famiglia è la stessa. Gli studiosi amano i nomi lunghi."],
["Cos’è questa cenere?","Un vulcano lontano ha buttato cenere, e poi è venuta la pioggia: la terra è diventata morbida come un impasto. Un’altra eruzione la coprirà presto, e le orme si conserveranno per milioni di anni. Me lo hanno raccontato dopo."],
["Quante orme lasciate?","Tre di noi sulla pista che sarà riconosciuta nel 1978 dal gruppo di Mary Leakey, lunga circa ventisette metri. Uno cammina mettendo i piedi nelle orme dell’altro, forse per comodità o per gioco: nessuno lo sa. Più in là c’è un’altra pista, di due compagni più grandi."],
["Camminate proprio come me?","Quasi: il tallone tocca per primo, il piede rotola sull’arco e spinge con l’alluce, che sta in linea con le altre dita. Gli studiosi discutono ancora quanto il mio passo somigliasse al tuo: forse piegavo un poco le ginocchia."],
["Quanto sei grande?","Circa un metro e sessanta, uno dei più alti: le orme della seconda pista sono lunghe quasi ventisette centimetri. Le femmine e i giovani sono più piccoli; gli studiosi pensano che le taglie fra noi fossero molto diverse."],
["Chi cammina con te?","Quattro o cinque del gruppo, fra cui due più piccole. Come ci organizziamo non lo sa nessuno: noi ci capiamo con sguardi e suoni, e c’è sempre chi guarda avanti e chi guarda indietro."],
["Che animali passano di qui?","Giraffe, rinoceronti, cavalli a tre dita, gazzelle, lepri, faraone, babbuini, iene e grandi felini che ho imparato a riconoscere dall’odore. I loro passi sono sulla cenere come i miei: nessuno è speciale, quando piove."],
["Da dove venite?","Dai miei antenati più vecchi, a nord, sulle rive del lago Turkana: gli Australopithecus anamensis, vissuti fra 4,2 e 3,8 milioni di anni fa. Un loro cranio quasi intero, trovato nel 2016 in Etiopia, ha circa 3,8 milioni di anni. Gli studiosi pensano che siano i nostri nonni, o forse dei cugini."],
["Camminate sempre?","No: sugli alberi ci saliamo ancora. Abbiamo braccia lunghe e dita ricurve; la notte, forse, stiamo in alto. Camminare in piedi serve a muoversi fra le acacie; arrampicarsi serve a dormire tranquilli."],
["Dove vado dopo?","A est, verso il fiume e la valle dove la terra è rossa: Hadar. Cerca Acacia: ha molte storie e un po’ di parenti. Stai attento al sole: a mezzogiorno è tutto bianco."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e cammina senza fretta. Se vedi un’orma, non calpestarla: qualcuno l’ha lasciata per te. Io alzo il braccio e riparto per primo. Buona strada!"]
],
om_acacia:[
["Chi sei e che fai?","Acacia, madre e raccoglitrice. Cerco frutti, semi, foglie e radici e li porto ai miei piccoli. Gli studiosi mi chiameranno Australopithecus afarensis: la mia specie vive nella valle per quasi un milione di anni."],
["Chi è Lucy?","Una parente di un tempo che verrà: uno scheletro trovato il 24 novembre 1974 da Donald Johanson e Tom Gray, vecchio di circa 3,2 milioni di anni. Alta poco più di un metro, pesava circa trenta chili, e ne resta circa il quaranta per cento. Il nome viene da una canzone, e in Etiopia la chiamano Dinkinesh, \"sei meravigliosa\". A me piace."],
["Chi sono i tuoi?","Un gruppo grande. In un punto della valle si ritroveranno le ossa di almeno tredici di noi, poi diventeranno diciassette, di età diverse: gli studiosi li chiameranno la Prima Famiglia, ma non è certo che fossero parenti. Come sia andata non si sa: un’inondazione, dicono, o altro. Non è una storia da pranzo: la lascio qui."],
["Hai dei figli?","Una piccola che cammina e si aggrappa. Una come lei, Selam, \"pace\", sarà trovata nel 2000 a Dikika: tre anni, vissuta 3,3 milioni di anni fa. Le sue gambe sapevano camminare, le sue scapole e le sue dita dicono che saliva molto sugli alberi. Siamo fatti così: per terra e in cima."],
["Come cammini?","In piedi, con le gambe dritte; ma ho braccia lunghe, dita ricurve e un torace a cono, come chi sale sugli alberi. Gli studiosi dicono che sono fatta per tutti e due i mondi. Io dico che c’è sempre un albero dove salire."],
["Cosa mangiate?","Frutti, foglie, semi, radici, erbe e forse insetti e piccoli animali. Abbiamo denti larghi con lo smalto spesso, buoni per masticare cibi duri. Non cuociamo niente: il fuoco è una cosa di molto più tardi."],
["Parlate?","Ci capiamo con versi, gesti e sguardi. Nella gola di Selam c’è un piccolo osso, lo ioide, simile a quello delle scimmie africane: gli studiosi pensano che non parlassimo come voi, ma nessuno è certo. A me basta che mia figlia capisca quando le dico \"stai qui\"."],
["Chi vi minaccia?","I felini dai denti a sciabola, le iene, i coccodrilli dei canali. Stiamo in gruppo, guardiamo il cielo e il suolo e, quando possiamo, forse, dormiamo in alto. Non è una vita facile, ma è la nostra."],
["Fate degli attrezzi?","Io no. Si dice però che a Dikika, circa 3,4 milioni di anni fa, qualcuno abbia usato pietre taglienti sulle ossa: gli studiosi non sono d’accordo se i segni vengano da una pietra o dal calpestio. Io, per ora, uso le mani."],
["Vedete altri parenti?","Sì, a volte. A nord, sulle rive del lago, vive un cugino dalla faccia piatta; più lontano, qualcuno batte i sassi. Il mondo ha molti rami, e non so quanti arrivano fino a te."],
["Dove vado dopo?","Verso il lago Turkana, dove i fiumi hanno portato sassi di lava scura: lì Sasso batte pietra contro pietra come nessun altro. Cammina nella polvere, e bevi quando puoi."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se per strada trovi un’acacia, siediti all’ombra: è il mio modo di dire \"sei il benvenuto\". Io resto a guardare i piccoli. Buona strada!"]
],
om_sasso:[
["Chi sei e che fai?","Sasso. Non so chi mi abbia insegnato: provo, guardo, riprovo. Sono un australopiteco e vivo vicino al lago; gli studiosi mi chiameranno forse Australopithecus garhi, forse un altro cugino. Il nome non cambia il colpo."],
["Cosa fai con quei sassi?","Ne tengo uno in mano come martello e batto un altro, appoggiato su una pietra più grande. Quando il colpo è giusto, salta via una scheggia con il bordo tagliente. Con un buon colpo e un buon sasso si apre qualunque cosa."],
["È difficile?","Più di quanto sembri: bisogna scegliere il sasso, trovare l’angolo giusto e colpire forte e preciso. I sassi di Lomekwi, vicino al lago Turkana, sono grandi e pesanti: servono mani forti e pazienza. Il primo colpo riuscito non si dimentica."],
["Perché lo fai?","Per tagliare la carne dalle ossa e per rompere le ossa e arrivare al midollo. Alcune ossa di antilope e di cavallo, a Bouri, hanno segni di tagli di circa 2,5 milioni di anni fa. Gli studiosi pensano che vengano da pietre come queste."],
["Chi altro fa attrezzi?","Non lo sa nessuno. Vicino al lago vive un cugino dalla faccia piatta, Kenyanthropus platyops; altri dicono che i primi a scheggiare bene sono quelli del genere Homo, i più snelli che arriveranno dopo di noi. Io dico che chi ha un sasso in mano lo sa fare."],
["Cosa mangi?","Frutti, semi, radici, foglie e, quando capita, carne e midollo, forse da animali già morti. Gli studiosi non sono certi di come me li procuro. Qui nessuno spreca niente."],
["Avete il fuoco?","No. Il fuoco è un’altra storia, molto più lontana: arriverà più di un milione di anni dopo di me. Io ho il sole e le mani. Per ora basta."],
["Com’è questo posto?","Un letto di fiume pieno di sassi di lava scura: una dispensa, per chi cerca sassi. Intorno acacie, prati secchi e il lago verde-azzurro. Se sali sulla collina vedi gli ippopotami nell’acqua."],
["Questi attrezzi sono i più antichi?","Quelli di Lomekwi sì: sono i più antichi che gli studiosi conoscano, circa 3,3 milioni di anni fa. Più vicini ai tuoi tempi ci sono quelli di Gona, circa 2,6 milioni, e quelli di Ledi-Geraru. Non so chi li abbia fatti: so che il mondo è pieno di mani."],
["Come vive il tuo gruppo?","Piccolo, con donne, piccoli e vecchi. Quando uno trova un posto buono o una carcassa, si avvisa. Si cammina insieme e si controlla il cielo."],
["Dove vado dopo?","Verso sud, molto più lontano: un altopiano con grotte e pozzi, in Sudafrica, dove vive Brezza. Il cammino è lungo, ma qui il tempo si piega e arrivi in un passo."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se senti due sassi che si toccano piano, ascolta: è un suono antico, ed è il nostro. Io alzo il martello e ricomincio. Buona strada!"]
],
om_brezza:[
["Chi sei e che fai?","Brezza. Vivo sull’altopiano con il mio gruppo: cerco frutti, radici e semi sotto gli alberi lungo il torrente. Gli studiosi mi chiameranno Australopithecus africanus. Il nome mi piace, perché c’è dentro l’Africa."],
["Dove siamo?","Sull’altopiano a nord-ovest di quella che chiameranno Johannesburg: prateria alta, pochi alberi, colline di roccia chiara con buchi e grotte. Un giorno sarà chiamata Culla dell’Umanità, patrimonio dell’UNESCO dal 1999: circa il quaranta per cento dei fossili di ominidi conosciuti viene da qui."],
["Abitate nelle grotte?","No: viviamo fuori, all’aria aperta. Le grotte e i pozzi sono i posti dove le ossa si conservano: a volte qualcuno ci cade, a volte i predatori ci trascinano le prede. Ci chiameranno \"uomini delle caverne\", ma ci vedranno male."],
["Chi è il bambino di Taung?","Un piccolo di circa tre anni, trovato nel 1924 in una cava a Taung. Raymond Dart lo descrisse nel 1925 come una specie nuova, e molti esperti non gli credettero. Gli studiosi pensano che un’aquila l’abbia portato via, come dicono i segni sul cranio: per questo guardo sempre il cielo."],
["E la signora Ples?","Un’adulta della mia specie: un cranio quasi intero, trovato a Sterkfontein nel 1947 da Robert Broom e John Robinson. È il cranio più completo di tutta la specie. Una nonna illustre, senza che lo sappia."],
["E Piccolo Piede?","Uno scheletro quasi intero, circa il novanta per cento delle ossa, in una grotta di Sterkfontein: scoperto a partire dagli anni Novanta e liberato dalla roccia in molti anni. Gli studiosi gli danno circa 3,67 milioni di anni, ma la data e la specie sono discusse. A me sembra un buon vicino di casa."],
["Cosa mangiate?","Frutti selvatici, semi, radici, foglie e, forse, insetti o piccoli animali. Quando i frutti mancano, si mastica quello che c’è. I nostri denti sono larghi e forti: un po’ di fatica ci sta."],
["Cosa sono quei buchi?","Pozzi aperti nella roccia chiara: la luce entra da sopra e giù c’è il buio. A volte qualcuno ci cade. Per questo guardiamo dove mettiamo i piedi, e anche dove mettiamo gli occhi."],
["Come camminate?","In piedi, e bene; ma saliamo anche sugli alberi, e le nostre braccia lunghe lo sanno. Alcuni studiosi pensano che, dopo di noi, un cugino chiamato Australopithecus sediba mescolerà i nostri tratti con quelli del genere Homo; altri discutono dove metterlo. A me basta camminare."],
["Che animali ci sono?","Antilopi, babbuini, iene, felini dai denti a sciabola e leopardi, aquile e altri grandi uccelli. Il cielo guarda sempre dall’alto. Un buon posto è dove si vede arrivare chi viene."],
["Dove vado dopo?","Verso est, dove il sole cala su una pianura grande come il cielo: lì vive Molare, che mastica erba tutto il giorno. Ha la testa grossa e il cuore tranquillo. Nella stessa pianura vivono anche altri cugini, più snelli."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando senti un volo sopra di te non avere paura: alza gli occhi e saluta. Io guardo il cielo con te. Buona strada!"]
],
om_molare:[
["Chi sei e che fai?","Molare, grande mangiatore d’erba. Mastico per ore, e il tramonto è l’ora migliore. Gli studiosi mi chiameranno Paranthropus boisei: Paranthropus vuol dire \"accanto all’uomo\"."],
["Perché hai una testa così?","Per masticare: le mie mandibole sono grosse e i miei molari enormi, e sulla testa ho una cresta di osso a cui si attaccano i muscoli. Quando si mastica per ore, serve una buona attrezzatura. I miei cugini dei boschi hanno denti più piccoli."],
["Ti chiamano Uomo schiaccianoci?","Sì: il mio cranio sarà trovato il 17 luglio 1959 da Mary Leakey a Olduvai, in Tanzania, e i giornali mi chiameranno così per i denti. Gli studiosi scopriranno poi che non schiaccio noci: mangio soprattutto erbe e giunchi, circa il 77 per cento in media. Altro che noci!"],
["Come ti procuri l’erba?","La strappo con le mani e la mastico; scavo anche radici e fusti. Mangio quello che mangiano gli antenati delle zebre, dei maiali e degli ippopotami: stiamo tutti allo stesso tavolo. La steppa non è mai vuota: bisogna imparare ad apprezzarla."],
["Siete nostri antenati?","Non direttamente: gli studiosi mi considerano un ramo laterale della famiglia, che si separò dal vostro circa due milioni e mezzo di anni fa. Siamo cugini robusti: abbiamo vissuto accanto ai primi Homo per molto tempo."],
["Chi altro vive qui?","Il Teschio Nero, cioè Paranthropus aethiopicus, un mio parente più antico, vissuto in Kenya circa due milioni e mezzo di anni fa. Poi i vicini più snelli, i primi Homo. E un australopiteco che gli studiosi hanno scoperto da pochi denti e non hanno ancora battezzato."],
["Come sono i primi Homo?","Dei più antichi gli studiosi hanno solo una mandibola e alcuni denti, trovati a Ledi-Geraru, vecchi di circa 2,8 milioni di anni. Si pensano più snelli di me. Non mi fanno paura: mangiamo cose diverse."],
["Hai dei nemici?","I soliti: felini dai denti a sciabola, iene, coccodrilli. Per questo stiamo in gruppo e mangiamo guardando in giro. Un grande corpo aiuta, ma l’attenzione aiuta di più."],
["Come finisce la vostra storia?","Ci spegneremo circa un milione e duecentomila anni fa, e nessuno sa con certezza perché. Gli studiosi pensano che abbiano contato il clima, che diventerà più secco, e la concorrenza con altri parenti. Non mi preoccupo: il giorno è lungo e le erbe sono tante."],
["Cosa pensi di tutti gli altri?","Che siamo una grande famiglia con molti rami e che ognuno ha il suo posto: chi mastica, chi scheggia, chi cammina, chi sale. Il vostro albero, Pierpaolo, non è una scala. È più un cespuglio, ed è bello così."],
["Dove vado dopo?","Dove il sole tocca la pianura: c’è una lunga pista di orme sulla cenere che va verso la luce. Attraversala quando la luce è più forte. Oltre c’è un altro mondo e un altro tempo: non avere paura, la strada continua."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e che l’erba ti sia sempre morbida. Se vedi un’orma nella cenere, cammina accanto, non sopra: è il nostro modo di dire \"sono passato di qui\". Buon viaggio!"]
]
};
/* ===================== misure del percorso ===================== */
const CNT=[4,4,4,4,5,4,5,5],SPC=560;
const Z=[],ZE=[],LX=[];let W1=0;
{let x=0;CNT.forEach((n,z)=>{Z.push(x);for(let k=0;k<n;k++)LX.push(x+360+k*SPC);x+=360+(n-1)*SPC+420;ZE.push(x)});W1=x+500;ZE[7]=W1}
const CE=Z.map((z,i)=>(z+ZE[i])/2);
const zoneAt=wx=>{let z=7;while(z>0&&wx<Z[z])z--;return z};
const ZNAME=['LA FORESTA DEI GRANDI PRIMATI','IL LAGO E IL BORDO DEL DESERTO','IL BOSCO DI ARAMIS','LA PIANA DI CENERE DI LAETOLI','LA VALLE DI HADAR E DIKIKA','LA VALLE DELLE PRIME PIETRE','L’ALTOPIANO DELLE GROTTE','LA VALLE DEI CUGINI ROBUSTI'];
const ZEPO=['circa 12-11 milioni di anni fa · Europa','circa 7-5,8 milioni di anni fa · Africa','circa 4,4 milioni di anni fa · Etiopia','circa 4,2-3,66 milioni di anni fa · Tanzania','circa 3,4-2,9 milioni di anni fa · Etiopia','circa 3,4-2,5 milioni di anni fa · Kenya ed Etiopia','circa 3,7-2 milioni di anni fa · Sudafrica','circa 2,8-1,2 milioni di anni fa · Africa orientale'];
/* ===================== colori e luce ===================== */
const PM={};
const pc=c=>PM[c]||(PM[c]=c.charAt(0)=='#'?(h=>{h=h.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]})(c):c.match(/[\d.]+/g).slice(0,3).map(Number));
const mixh=(a,b,u)=>{const p=pc(a),q=pc(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
const cl=(v,a,b)=>Math.max(a,Math.min(b,v));
const sm=u=>{u=cl(u,0,1);return u*u*(3-2*u)};
/* luce: tinta e quantità lungo il percorso (alba grigio-verde, mattina chiara, verde-dorata, lavata, bianca, dorata, arancio, rosa e viola) */
const KF=[[0,[70,100,92],.30],[Z[1]-200,[110,140,130],.18],[CE[1],[255,236,200],.08],[CE[2],[196,222,128],.13],[CE[3],[222,234,246],.12],[CE[4],[255,255,250],.27],[CE[5],[255,214,140],.20],[CE[6],[255,190,108],.27],[Z[7]+500,[255,150,92],.36],[W1-900,[238,120,110],.42],[W1,[170,96,138],.46]];
const lightAt=wx=>{let i=1;while(i<KF.length-1&&wx>KF[i][0])i++;const a=KF[i-1],b=KF[i],u=cl((wx-a[0])/(b[0]-a[0]),0,1);return[a[1][0]+(b[1][0]-a[1][0])*u,a[1][1]+(b[1][1]-a[1][1])*u,a[1][2]+(b[1][2]-a[1][2])*u,a[2]+(b[2]-a[2])*u]};
let LT=lightAt(0),LQ=0,CAMX=0;const TM=new Map();
const setL=wx=>{const q=Math.round(wx/40);if(q!==LQ){LQ=q;LT=lightAt(q*40);if(TM.size>40000)TM.clear()}};
const T=c=>{const k=c+'|'+LQ;let r=TM.get(k);if(r)return r;const p=pc(c),a=LT[3];r='rgb('+Math.round(p[0]+(LT[0]-p[0])*a)+','+Math.round(p[1]+(LT[1]-p[1])*a)+','+Math.round(p[2]+(LT[2]-p[2])*a)+')';TM.set(k,r);return r};
const rect=(g,c,x,y,w,h)=>{g.fillStyle=T(c);g.fillRect(x,y,w,h)};
const poly=(g,c,p)=>{g.fillStyle=T(c);g.beginPath();g.moveTo(p[0][0],p[0][1]);for(let i=1;i<p.length;i++)g.lineTo(p[i][0],p[i][1]);g.closePath();g.fill()};
const dot=(g,c,x,y,r)=>{g.fillStyle=T(c);g.beginPath();g.arc(x,y,Math.max(.1,r),0,7);g.fill()};
const el=(g,c,x,y,rx,ry,r)=>{g.fillStyle=T(c);g.beginPath();g.ellipse(x,y,Math.max(.1,rx),Math.max(.1,ry),r||0,0,7);g.fill()};
const ln=(g,c,w,p)=>{g.strokeStyle=T(c);g.lineWidth=w;g.lineCap='round';g.beginPath();g.moveTo(p[0],p[1]);for(let i=2;i<p.length;i+=2)g.lineTo(p[i],p[i+1]);g.stroke();g.lineCap='butt'};
const qc=(g,c,w,x0,y0,cx,cy,x1,y1)=>{g.strokeStyle=T(c);g.lineWidth=w;g.lineCap='round';g.beginPath();g.moveTo(x0,y0);g.quadraticCurveTo(cx,cy,x1,y1);g.stroke();g.lineCap='butt'};
const sh=(g,x,y,rx,ry,a)=>{g.fillStyle='rgba(30,20,10,'+(a||.22)+')';g.beginPath();g.ellipse(x,y,rx,ry,0,0,7);g.fill()};
const glow=(g,x,y,r,col,a)=>{if(a<.02)return;const gr=g.createRadialGradient(x,y,1,x,y,r);gr.addColorStop(0,'rgba('+col+','+a+')');gr.addColorStop(1,'rgba('+col+',0)');g.fillStyle=gr;g.fillRect(x-r,y-r,2*r,2*r)};
const lb=(g,c,p,q,w0,w1)=>{const dx=q[0]-p[0],dy=q[1]-p[1],L=Math.hypot(dx,dy)||1,nx=-dy/L,ny=dx/L;poly(g,c,[[p[0]+nx*w0/2,p[1]+ny*w0/2],[q[0]+nx*w1/2,q[1]+ny*w1/2],[q[0]-nx*w1/2,q[1]-ny*w1/2],[p[0]-nx*w0/2,p[1]-ny*w0/2]]);dot(g,c,p[0],p[1],w0/2);dot(g,c,q[0],q[1],w1/2)};
const txt=(g,s,x,y,sz,c,al,w)=>{g.save();g.font='italic '+(w||800)+' '+sz+'px "Trebuchet MS",sans-serif';g.textAlign='left';g.shadowColor='rgba(0,0,0,.55)';g.shadowBlur=6;g.globalAlpha=al;g.fillStyle=c;g.fillText(s,x,y);g.restore()};
/* disposizione degli elementi su un livello con parallasse k: ogni elemento ha una posizione nel mondo (xw) e compare quando la camera gli passa vicino */
const anch=(xs,k,stp,seed,cb)=>{const R=250/k+stp,a=Math.floor((xs-R)/stp),b=Math.ceil((xs+R)/stp);for(let i=a;i<=b;i++){const r=hr(i*7+seed),r2=hr(i*13+seed+5),xw=i*stp+(r-.5)*stp*.8;cb(240+(xw-xs)*k,xw,r,r2,i)}};
const wave=(x,s,w)=>(Math.sin(x*w+s)+.6*Math.sin(x*w*2.3+s*2)+.3*Math.sin(x*w*5.1+s*3.3))/1.9;
/* ===================== piante, rocce, acqua ===================== */
const HC='#bccabe';
const hzm=(c,u)=>u>0?mixh(c,HC,u):c;
function tBroad(g,x,y,s,r,hz){const h=(160+r*70)*s,w=(10+r*5)*s,tr=hzm('#4a3a2e',hz),c1=hzm('#243f2a',hz),c2=hzm('#35603a',hz),c3=hzm('#4a7a44',hz),lx=x+(r-.5)*16*s;
 lb(g,tr,[x,y+4],[lx,y-h*.66],w*1.35,w*.7);ln(g,tr,w*.45,[lx,y-h*.52,lx+30*s,y-h*.8]);ln(g,tr,w*.4,[lx,y-h*.55,lx-26*s,y-h*.78]);
 const cx=lx,cy=y-h*.82;[[-46,12,48,28],[40,10,46,26],[0,-6,56,34],[-18,-20,42,26],[26,-18,38,24],[-60,30,34,18],[58,26,34,18]].forEach((q,i)=>el(g,i<3?c1:c2,cx+q[0]*s,cy+q[1]*s,q[2]*s,q[3]*s));
 [[-22,-30,30,14],[20,-26,26,12],[-4,-12,26,12]].forEach(q=>el(g,c3,cx+q[0]*s,cy+q[1]*s,q[2]*s,q[3]*s));
 for(let i=0;i<4;i++){const a=cx+(hr(i*3+r*50)-.5)*80*s;ln(g,hzm('#3a5a30',hz),1.6*s,[a,cy+20*s,a+(i%2?3:-3),cy+70*s+i*14*s])}}
function tFig(g,x,y,s,r,hz,fr){const h=(80+r*30)*s,tr=hzm('#5a4636',hz),c1=hzm('#4e7634',hz),c2=hzm('#6e9a42',hz),c3=hzm('#8cb454',hz);
 lb(g,tr,[x,y+3],[x+(r-.5)*12*s,y-h*.55],14*s,8*s);ln(g,tr,6*s,[x,y-h*.4,x-30*s,y-h*.75]);ln(g,tr,6*s,[x,y-h*.4,x+34*s,y-h*.72]);
 const cy=y-h*.82;[[-40,10,46,26],[40,8,44,26],[0,0,58,34],[-16,-16,38,22],[22,-14,34,20]].forEach((q,i)=>el(g,i<2?c1:c2,x+q[0]*s,cy+q[1]*s,q[2]*s,q[3]*s));
 [[-20,-26,24,10],[18,-22,22,9]].forEach(q=>el(g,c3,x+q[0]*s,cy+q[1]*s,q[2]*s,q[3]*s));
 if(fr)for(let i=0;i<7;i++)dot(g,i%3?'#8a5a72':'#c8a04a',x+(hr(i*5+r*90)-.5)*84*s,cy+8*s+hr(i*9+r*30)*28*s,2.4*s)}
function tPalm(g,x,y,s,r,hz){const h=(95+r*40)*s,tr=hzm('#6a5a40',hz),lf=hzm('#3e6e30',hz),lf2=hzm('#5e8e3c',hz),tx=x+(r-.5)*30*s;
 qc(g,tr,7*s,x,y+2,x+(tx-x)*.2,y-h*.5,tx,y-h);for(let i=0;i<8;i++)dot(g,hzm('#4a3c2a',hz),x+(tx-x)*(i/8)*(i/8)*.9,y-h*(i+.6)/8.6,1.8*s);
 for(let i=0;i<8;i++){const a=-Math.PI*.95+i*(Math.PI*.9/7),L=(38+hr(i*3+r*40)*16)*s,ex=tx+Math.cos(a)*L,ey=y-h+Math.sin(a)*L*.5+L*.42;qc(g,i%2?lf:lf2,3.4*s,tx,y-h,tx+Math.cos(a)*L*.55,y-h+Math.sin(a)*L*.7-6*s,ex,ey)}}
function tAcacia(g,x,y,s,r,hz){const h=(70+r*45)*s,tr=hzm('#4e4030',hz),c1=hzm('#6c7c3e',hz),c2=hzm('#8c9a50',hz),lx=x+(r-.5)*16*s;
 lb(g,tr,[x,y+3],[lx,y-h*.62],8*s,5*s);ln(g,tr,4*s,[lx,y-h*.5,lx-34*s,y-h*.88]);ln(g,tr,4*s,[lx,y-h*.55,lx+38*s,y-h*.9]);ln(g,tr,3*s,[lx,y-h*.6,lx+4*s,y-h]);
 const cy=y-h*.95;el(g,c1,lx,cy+6*s,(54+r*24)*s,10*s);el(g,c1,lx-28*s,cy+2*s,34*s,8*s);el(g,c1,lx+30*s,cy+1*s,38*s,8*s);el(g,c2,lx-6*s,cy-1*s,(46+r*18)*s,6.5*s);el(g,c2,lx+22*s,cy-4*s,26*s,5*s)}
function tBush(g,x,y,s,r,hz,c){const a=hzm(c||'#4c6a34',hz),b=hzm(c?mixh(c,'#fff',.15):'#6a8a44',hz);el(g,a,x,y-9*s,(24+r*14)*s,(13+r*5)*s);el(g,a,x-18*s,y-5*s,16*s,9*s);el(g,b,x+4*s,y-15*s,(15+r*8)*s,7*s)}
function tThorn(g,x,y,s,r,hz){const c=hzm('#7a8444',hz),d=hzm('#566030',hz);ln(g,hzm('#4a3c2c',hz),2.4*s,[x,y,x-4*s,y-16*s]);ln(g,hzm('#4a3c2c',hz),2*s,[x+6*s,y,x+10*s,y-12*s]);el(g,d,x,y-18*s,(22+r*10)*s,6*s);el(g,c,x+4*s,y-21*s,(18+r*8)*s,5*s)}
function tReed(g,x,y,s,r,hz,n){n=n||12;const c1=hzm('#a2b068',hz),c2=hzm('#7e9650',hz);for(let i=0;i<n;i++){const hh=(34+hr(i*7+r*60)*40)*s,a=(hr(i*11+r*20)-.5)*.55,ex=x+Math.sin(a)*hh+(i-n/2)*2.4*s;ln(g,i%2?c1:c2,1.7*s,[x+(i-n/2)*2.4*s,y,ex,y-hh]);if(i%3==0){el(g,hzm('#5a3c28',hz),ex,y-hh,1.8*s,5*s,a)}}}
function tGrass(g,x,y,s,r,hz,col){const c=hzm(col||'#9aa64a',hz),d=hzm(col?mixh(col,'#000',.25):'#76843a',hz);for(let i=0;i<8;i++){const hh=(14+hr(i*5+r*40)*18)*s,a=(i-3.5)*.18+(hr(i*3+r*7)-.5)*.2;qc(g,i%2?c:d,1.6*s,x+(i-3.5)*2*s,y,x+(i-3.5)*2*s+Math.sin(a)*hh*.4,y-hh*.7,x+Math.sin(a)*hh+(i-3.5)*2*s,y-hh)}}
function tDry(g,x,y,s,r,hz){const c=hzm('#c8b46c',hz),d=hzm('#a28c4c',hz);for(let i=0;i<11;i++){const hh=(30+hr(i*5+r*40)*34)*s,a=(i-5)*.11+(hr(i*3+r*7)-.5)*.16;qc(g,i%2?c:d,1.5*s,x+(i-5)*2.2*s,y,x+(i-5)*2.2*s+Math.sin(a)*hh*.5,y-hh*.6,x+(i-5)*2.2*s+Math.sin(a)*hh,y-hh)}}
function tFern(g,x,y,s,r,hz){const c=hzm('#3d6e3a',hz),d=hzm('#58904a',hz);for(let i=0;i<7;i++){const a=-Math.PI*.9+i*Math.PI*.8/6,L=(26+hr(i+r*30)*12)*s;qc(g,i%2?c:d,3*s,x,y,x+Math.cos(a)*L*.5,y+Math.sin(a)*L*.9,x+Math.cos(a)*L,y+Math.sin(a)*L*.4+8*s)}}
function tDead(g,x,y,s,r,hz){const c=hzm('#d8d0bc',hz),d=hzm('#b4a88e',hz),h=(60+r*40)*s;lb(g,c,[x,y+2],[x+(r-.5)*8*s,y-h],8*s,4*s);ln(g,c,3.2*s,[x+(r-.5)*4*s,y-h*.6,x-22*s,y-h*.9]);ln(g,d,2.6*s,[x+(r-.5)*5*s,y-h*.75,x+18*s,y-h*1.02]);ln(g,d,2*s,[x+(r-.5)*3*s,y-h*.4,x+20*s,y-h*.62])}
function tRock(g,x,y,s,r,hz,col){const c=hzm(col||'#7a7468',hz),d=hzm(mixh(col||'#7a7468','#000',.28),hz),e=hzm(mixh(col||'#7a7468','#fff',.2),hz),w=(22+r*20)*s,h=(14+r*14)*s;
 poly(g,d,[[x-w,y],[x-w*.9,y-h*.5],[x-w*.4,y-h],[x+w*.3,y-h*.95],[x+w*.95,y-h*.4],[x+w,y]]);poly(g,c,[[x-w*.8,y-h*.1],[x-w*.4,y-h*.9],[x+w*.3,y-h*.88],[x+w*.2,y-h*.3]]);poly(g,e,[[x-w*.35,y-h*.9],[x+w*.25,y-h*.86],[x+w*.1,y-h*.6],[x-w*.4,y-h*.7]])}
/* acqua: fascia con riflessi che scintillano */
function water(g,x0,y0,x1,y1,t,c1,c2,seed,gl){const gr=g.createLinearGradient(0,y0,0,y1);gr.addColorStop(0,T(c1));gr.addColorStop(1,T(c2));g.fillStyle=gr;g.fillRect(x0,y0,x1-x0,y1-y0);
 const n=Math.floor((x1-x0)/16);for(let i=0;i<n;i++){const r=hr(i*7+seed),r2=hr(i*3+seed+9),a=.25+.35*Math.sin(t*1.6+i*1.9),yy=y0+3+r2*(y1-y0-6);if(a>.05){g.globalAlpha=Math.min(.7,a)*(gl||1);g.fillStyle='#fff';g.fillRect(x0+i*16+r*10,yy,5+r*9,1.2);g.globalAlpha=1}}}
/* ===================== ominidi: individui con pelo, volto sporgente, braccia lunghe ===================== */
const FUR=['#3a2a20','#4b3829','#54402e','#46352a','#5a4634'];
function pose(o,t){const po=o.pose||'stand',ph=o.ph||0,sw=Math.sin(t*1.3+ph),br=Math.sin(t*1.8+ph)*.005;let J;
 if(po=='sit'){const e=o.eat?Math.max(0,Math.sin(t*2.2+ph)):0;
  J={hip:[-.03,-.11],sh:[.05,-.43+br],hd:[.10,-.56+br],kl:[.16,-.25],fl:[.26,0],kr:[.21,-.27],fr:[.31,0],el:[.12,-.24],hl:[.19,-.30],er:[.14,-.30],hr:[.23,-.34]};
  if(o.eat){J.er=[.16,-.38-e*.05];J.hr=[.23-e*.07,-.36-e*.17]}else{J.er[1]+=sw*.01}}
 else if(po=='walk'){const p=t*(o.sp||5)+ph,a=Math.sin(p),b=Math.sin(p+Math.PI),bo=Math.abs(Math.cos(p))*.012;
  J={hip:[0,-.45+bo],sh:[.045,-.76+bo+br],hd:[.085,-.88+bo+br],kr:[a*.07+.03,-.25],fr:[a*.13,-Math.max(0,Math.cos(p))*.045],kl:[b*.07+.03,-.25],fl:[b*.13,-Math.max(0,Math.cos(p+Math.PI))*.045],
   el:[.05-b*.05,-.56],hl:[.05-b*.11,-.38],er:[.05-a*.05,-.56],hr:[.05-a*.11,-.38]}}
 else{J={hip:[0,-.46],sh:[.04,-.77+br],hd:[.075,-.89+br],kl:[.03,-.24],fl:[-.025,0],kr:[0,-.24],fr:[.06,0],el:[.075,-.57],hl:[.085+sw*.012,-.37],er:[.045,-.57],hr:[.055-sw*.012,-.37]}}
 if(o.up){J.er=[.10,-.96];J.hr=o.up===2?[.17,-1.07]:[.13,-1.11]}
 if(o.hold){J.er=[.07,-.62];J.hr=o.hold}
 if(o.reach){J.er=[.14,-.66];J.hr=o.reach}
 return J}
function head(g,cx,cy,H,o,t,ph){const R=H*.118*(o.hs||1),fur=o.fur,sk=o.skin,skl=mixh(sk,'#c0a088',.25),fd=mixh(fur,'#000',.45),mz=(o.mz==null?.4:o.mz),ch=o.chew?Math.sin(t*7+ph)*.014*H:0;
 el(g,mixh(sk,'#000',.2),cx-R*.5,cy+R*.05,R*.2,R*.3);
 el(g,fur,cx-R*.12,cy-R*.1,R*1.08,R*(o.fh||.98));
 if(o.crest){poly(g,fd,[[cx-R*.85,cy-R*.55],[cx-R*.2,cy-R*1.45],[cx+R*.5,cy-R*1.3],[cx+R*.95,cy-R*.45]]);el(g,fur,cx-R*.1,cy-R*.95,R*.85,R*.5)}
 el(g,sk,cx+R*.5,cy+R*.28,R*.8,R*.86);
 el(g,sk,cx+R*.5,cy+R*.92+ch,R*(.62+(o.jaw||0)),R*.38);
 el(g,skl,cx+R*(.95+mz*.3),cy+R*.5,R*(.5+mz*.25),R*.44);
 if(o.cheek){el(g,mixh(sk,'#a08468',.25),cx+R*.28,cy+R*.5,R*.55,R*.52)}
 el(g,fur,cx+R*.1,cy-R*.52,R*.95,R*.38,-.12);
 el(g,mixh(sk,'#000',.45),cx+R*.62,cy-R*.18,R*.5,R*(o.brow==null?.2:o.brow),.05);
 const bl=Math.sin(t*.7+ph*3)>.985;
 if(!bl){el(g,'#e4d8bc',cx+R*.7,cy-R*.02,R*.2,R*.19);dot(g,'#1c1410',cx+R*.76,cy-R*.02,R*.12);dot(g,'#fff',cx+R*.8,cy-R*.07,R*.04)}else ln(g,'#1c1410',1,[cx+R*.52,cy,cx+R*.88,cy]);
 dot(g,'#1c1410',cx+R*(1.2+mz*.45),cy+R*.4,R*.07);
 qc(g,'#1c1410',1,cx+R*.62,cy+R*.82+ch,cx+R*1.0,cy+R*.88+ch*1.5,cx+R*(1.2+mz*.4),cy+R*.74+ch)}
function foot(g,x,y,H,o,far){const c=mixh(o.skin,'#000',far?.35:.15);el(g,c,x+H*.045,y-H*.012,H*.075,H*.026);if(o.toe=='splay')el(g,c,x+H*.1,y-H*.03,H*.045,H*.018,-.5);else dot(g,c,x+H*.11,y-H*.014,H*.016)}
function homi(g,x,y,t,o){const H=o.h||88,f=o.f||1,fur=o.fur||'#4b3829',sk=o.skin||'#7a5e4c',ph=o.ph||0,O=Object.assign({},o,{fur:fur,skin:sk}),J=pose(o,t),fd=mixh(fur,'#000',.42),fl=mixh(fur,'#fff',.12),rb=o.rob||1,aw=o.aw||1,P=(a)=>[a[0]*H,a[1]*H];
 g.save();g.translate(x,y);g.scale(f,1);
 if(!o.noshadow)sh(g,0,0,H*(o.pose=='sit'?.3:.28),H*.04,.24);
 const L=(c,p,q,w0,w1)=>{lb(g,fd,P(p),P(q),w0*H+1.6,w1*H+1.6);lb(g,c,P(p),P(q),w0*H,w1*H)};
 /* gamba e braccio lontani */
 L(mixh(fur,'#000',.2),J.hip,J.kl,.15*rb,.11);L(mixh(fur,'#000',.2),J.kl,J.fl,.11,.075);foot(g,J.fl[0]*H,J.fl[1]*H,H,O,1);
 L(mixh(fur,'#000',.25),J.sh,J.el,.1*rb*aw,.075);const hlp=o.hand2||J.hl;L(mixh(fur,'#000',.25),J.el,hlp,.075,.06);dot(g,mixh(sk,'#000',.25),hlp[0]*H,hlp[1]*H,H*.03);
 /* torso a cono: largo in basso */
 L(fur,J.hip,J.sh,.34*rb,.27*rb);el(g,fl,(J.hip[0]*.4+J.sh[0]*.6)*H+H*.02,(J.hip[1]*.4+J.sh[1]*.6)*H,H*.06,H*.11*rb,.1);
 for(let i=0;i<9;i++){const q=hr(i*7+ph*10),u=q,px=(J.hip[0]+(J.sh[0]-J.hip[0])*u)*H+(hr(i*3+ph)-.5)*H*.16,py=(J.hip[1]+(J.sh[1]-J.hip[1])*u)*H;ln(g,i%2?fd:fl,1,[px,py,px+H*.014,py+H*.035])}
 /* gamba vicina */
 L(fur,J.hip,J.kr,.16*rb,.115);L(fur,J.kr,J.fr,.115,.078);foot(g,J.fr[0]*H,J.fr[1]*H,H,O,0);
 /* testa */
 L(fur,J.sh,J.hd,.13,.11);head(g,J.hd[0]*H,J.hd[1]*H,H,O,t,ph);
 /* braccio vicino */
 L(fur,J.sh,J.er,.1*rb*aw,.078);L(fur,J.er,o.hand||J.hr,.078,.062);const hh=o.hand||J.hr;dot(g,mixh(sk,'#000',.1),hh[0]*H,hh[1]*H,H*.04);
 if(o.acc)o.acc(g,H,J,t);
 g.restore()}
/* individui di taglie e specie diverse */
const SP={
 danuvius:{h:88,fur:'#4a362a',rob:1.15,aw:1.25,hs:.98,mz:.3,toe:'splay',brow:.22},
 sahel:{h:92,fur:'#5a4635',rob:.95,aw:1.12,mz:.4,brow:.34,toe:'splay',hs:1},
 ardi:{h:104,fur:'#54402f',rob:.95,aw:1.12,mz:.38,brow:.2,toe:'splay'},
 afar:{h:84,fur:'#5c4838',rob:1.0,aw:1.08,mz:.4,brow:.22},
 afarM:{h:132,fur:'#4e3c2e',rob:1.12,aw:1.05,mz:.4,brow:.26},
 kenyan:{h:96,fur:'#6a5440',rob:.98,aw:1.05,mz:.12,brow:.14,cheek:1},
 africanus:{h:88,fur:'#5a4634',rob:.98,aw:1.05,mz:.3,brow:.18,hs:1.04},
 para:{h:106,fur:'#46372b',rob:1.3,aw:1.02,mz:.2,brow:.28,crest:1,cheek:1,jaw:.2,hs:1.12},
 homo:{h:100,fur:'#6a5440',rob:.84,aw:.98,mz:.12,brow:.12,hs:1.04,fh:1.06}
};
const hm=(k,o)=>Object.assign({},SP[k],o);
/* ===================== animali ===================== */
const AS={
 deino:{bl:66,bh:46,lg:54,lw:23,hl:42,hh:25,nk:8,na:.3,ha:.28,col:'#7a6c62',trunk:78,tusk:'down',tl:50,ear:1,tail:34},
 gomph:{bl:52,bh:36,lg:42,lw:17,hl:40,hh:19,nk:6,na:.3,ha:.3,col:'#8a7864',trunk:56,tusk:'fwd',tl:34,ear:1,tail:26},
 rhino:{bl:52,bh:27,lg:25,lw:15,hl:40,hh:15,nk:8,na:.3,ha:.5,col:'#8e8a7c',horn:'single',ear:1,tail:20},
 horse3:{bl:34,bh:13,lg:38,lw:5.5,nk:28,na:.6,hl:27,hh:7,ha:.95,col:'#b48e5c',cd:'#60442e',mane:1,tail:26,ear:1},
 giraffe:{bl:33,bh:14,lg:54,lw:5,nk:78,na:.18,hl:24,hh:6,ha:.45,col:'#c8a460',spots:'#7a5a30',horn:'ossi',tail:24,ear:1},
 siva:{bl:42,bh:23,lg:34,lw:9,nk:34,na:.42,hl:30,hh:10,ha:.75,col:'#8a6a48',horn:'palm',tail:14,ear:1},
 kudu:{bl:30,bh:12,lg:34,lw:4.2,nk:20,na:.55,hl:22,hh:6,ha:.75,col:'#a89478',horn:'twist',stripes:'#eee6d2',tail:12,ear:1},
 gazelle:{bl:22,bh:8,lg:26,lw:3.4,nk:15,na:.5,hl:15,hh:4.6,ha:.7,col:'#c8a470',horn:'lyre',tail:8,ear:1},
 pig:{bl:25,bh:12,lg:12,lw:5,nk:3,na:.3,hl:23,hh:8,ha:.55,col:'#6a5a4a',tusk:'small',tail:8,ear:1,mane:1},
 bear:{bl:30,bh:17,lg:15,lw:9,nk:5,na:.3,hl:21,hh:9,ha:.45,col:'#4a3a30',tail:6,ear:1},
 cat:{bl:28,bh:10,lg:18,lw:5.5,nk:5,na:.4,hl:17,hh:7,ha:.4,col:'#a88a52',spots:'#3a2a1a',tail:26,ear:1},
 hyena:{bl:26,bh:11,lg:20,lw:4.4,nk:8,na:.5,hl:19,hh:7,ha:.55,col:'#8a7a58',spots:'#3a2a1a',tail:12,ear:1,mane:1},
 otter:{bl:11,bh:4.5,lg:4,lw:3.4,nk:2,na:.3,hl:8,hh:3.4,ha:.2,col:'#5a4638',tail:12,ear:0}
};
function quad(g,x,y,t,sp,o){const A=Object.assign({},AS[sp],o),s=A.s||1,f=A.f||1,bl=A.bl,bh=A.bh,lg=A.lg,col=A.col,cd=A.cd||mixh(col,'#000',.3),cb=A.cb||mixh(col,'#fff',.14),w=A.lw,cy=-lg-bh*.85,w0=A.walk||0,ph=A.ph||0;
 g.save();g.translate(x,y);g.scale(f*s,s);
 if(!A.noshadow)sh(g,0,0,bl*1.1,Math.max(3,bh*.14),.22);
 const leg=(hx,k,c)=>{const a=w0?Math.sin(t*w0+ph+k*Math.PI)*.5:0,lift=w0?Math.max(0,Math.cos(t*w0+ph+k*Math.PI))*lg*.2:0,fx=hx+Math.sin(a)*lg*.75;lb(g,c,[hx,cy+bh*.35],[fx,-lift-1],w,w*.62);el(g,mixh(c,'#000',.4),fx+1,-lift,w*.55,w*.3)};
 const dr=A.drink?1:0;
 leg(-bl*.62,.5,cd);leg(bl*.6,0,cd);
 if(A.tail)qc(g,cd,Math.max(2,w*.5),-bl*.95,cy-bh*.1,-bl*1.25,cy+bh*.2,-bl*1.2-A.tail*.1,cy+bh*.2+A.tail);
 el(g,col,-bl*.55,cy+bh*.08,bl*.5,bh*.95);el(g,col,bl*.5,cy+bh*.05,bl*.52,bh*.95);el(g,col,0,cy,bl*.9,bh);if(A.hump)el(g,col,bl*.35,cy-bh*.8,bl*.32,bh*.5);
 el(g,cb,0,cy+bh*.52,bl*.8,bh*.34);
 if(A.spots)for(let i=0;i<10;i++){const q=hr(i*7+3),r2=hr(i*5+9);dot(g,A.spots,(q*2-1)*bl*.8,cy+(r2*2-1)*bh*.65,Math.max(1.4,bh*.14))}
 if(A.stripes)for(let i=0;i<6;i++)ln(g,A.stripes,1.2,[-bl*.5+i*bl*.2,cy-bh*.7,-bl*.5+i*bl*.2+2,cy+bh*.5]);
 /* collo e testa */
 const bx=bl*.74,by=cy-bh*.35,nx=bx+Math.sin(A.na)*A.nk,ny=by-Math.cos(A.na)*A.nk,ha=A.ha+(dr?.55:0),hx=nx+Math.cos(ha)*A.hl*.42,hy=ny+Math.sin(ha)*A.hl*.42;
 if(A.nk>6)lb(g,col,[bx,by],[nx,ny],bh*1.05,Math.max(3,A.hh*1.2));
 if(A.mane&&A.nk>6)ln(g,cd,Math.max(2,bh*.3),[bx-bl*.35,by-bh*.3,nx-3,ny-2]);
 if(A.mane&&A.nk<=6)ln(g,cd,3,[-bl*.5,cy-bh,bl*.7,cy-bh*.9]);
 if(A.ear)lb(g,col,[hx-A.hl*.1,hy-A.hh*.7],[hx-A.hl*.28-(sp=='deino'||sp=='gomph'?10:0),hy-A.hh*(sp=='deino'||sp=='gomph'?.1:1.8)],A.hh*(sp=='deino'||sp=='gomph'?2.4:.9),A.hh*.35);
 el(g,col,hx,hy,A.hl*.58,A.hh,ha);el(g,cb,hx+Math.cos(ha)*A.hl*.38,hy+Math.sin(ha)*A.hl*.38+A.hh*.18,A.hl*.28,A.hh*.62,ha);dot(g,'#120c08',hx+Math.cos(ha)*A.hl*.1-1,hy-A.hh*.28+Math.sin(ha)*A.hl*.1,Math.max(1,A.hh*.18));
 const tx=hx+Math.cos(ha)*A.hl*.55,ty=hy+Math.sin(ha)*A.hl*.55+A.hh*.35;
 if(A.trunk){const L=A.trunk,sw=Math.sin(t*1.2+ph)*4,tgY=dr?-ty+4:0,e=dr?-ty-1:L*.85;let px=tx,py=ty;for(let i=1;i<=5;i++){const u=i/5,qx=tx+Math.sin(u*1.4)*L*.22+sw*u,qy=Math.min(-1,ty+u*(dr?-ty-1:L*.9));lb(g,col,[px,py],[qx,qy],A.hh*(1.2-u*.55),A.hh*(1.2-(i)/5*.55));px=qx;py=qy}}
 if(A.tusk=='down'){const j=hx+A.hl*.25,k=hy+A.hh*.6;qc(g,'#e8e0c8',4.4,j,k,j+16,k+A.tl*.7,j+4,k+A.tl)}
 if(A.tusk=='fwd'){qc(g,'#e8e0c8',3.6,hx+A.hl*.3,hy+A.hh*.4,hx+A.hl*.7,hy+A.hh*1.5,hx+A.hl*.55,hy+A.hh*2.6);qc(g,'#e8e0c8',3.2,hx+A.hl*.25,hy+A.hh*.7,hx+A.hl*.5,hy+A.hh*2,hx+A.hl*.4,hy+A.hh*3)}
 if(A.tusk=='small')ln(g,'#e8e0c8',1.6,[tx-2,ty-2,tx+1,ty-6]);
 if(A.horn=='single'){poly(g,'#cfc6aa',[[tx-A.hl*.12,ty-A.hh*.2],[tx-A.hl*.02,ty-A.hh*2.3],[tx+A.hl*.12,ty-A.hh*.4]])}
 if(A.horn=='twist'){qc(g,'#5a4430',2,hx-2,hy-A.hh,hx-12,hy-A.hh-18,hx-6,hy-A.hh-34);qc(g,'#5a4430',2,hx+2,hy-A.hh,hx-4,hy-A.hh-18,hx+2,hy-A.hh-34)}
 if(A.horn=='lyre'){qc(g,'#3a2c20',1.6,hx-1,hy-A.hh,hx-8,hy-A.hh-8,hx-3,hy-A.hh-16);qc(g,'#3a2c20',1.6,hx+2,hy-A.hh,hx-2,hy-A.hh-8,hx+3,hy-A.hh-16)}
 if(A.horn=='ossi'){ln(g,cd,2.2,[hx-1,hy-A.hh,hx-1,hy-A.hh-7]);ln(g,cd,2.2,[hx+3,hy-A.hh,hx+4,hy-A.hh-7]);dot(g,cd,hx-1,hy-A.hh-8,1.6);dot(g,cd,hx+4,hy-A.hh-8,1.6)}
 if(A.horn=='palm'){poly(g,'#6a4e34',[[hx-6,hy-A.hh],[hx-14,hy-A.hh-26],[hx-2,hy-A.hh-22],[hx+6,hy-A.hh-30],[hx+10,hy-A.hh-6]]);poly(g,'#8a6c4a',[[hx-4,hy-A.hh-2],[hx-10,hy-A.hh-20],[hx+4,hy-A.hh-22],[hx+6,hy-A.hh-4]])}
 leg(-bl*.45,1,col);leg(bl*.78,.5,col);
 g.restore()}
function hippoW(g,x,y,t,s,f,sub){g.save();g.translate(x,y);g.scale((f||1)*s,s);const c='#6e6a74',d='#55515c',up=(sub||0)+Math.sin(t*.6+x)*1.5;
 el(g,c,0,-6+up,30,13);el(g,c,26,-10+up,16,9);el(g,d,36,-8+up,10,7);dot(g,'#1a1418',26,-17+up,2.4);dot(g,'#1a1418',33,-15+up,1.4);el(g,d,18,-18+up,4,3);dot(g,'#c8a0a0',41,-9+up,1.2);
 g.restore();g.strokeStyle='rgba(255,255,255,.35)';g.lineWidth=1;g.beginPath();g.ellipse(x,y,36*s,3*s,0,0,7);g.stroke();g.beginPath();g.ellipse(x,y,48*s+Math.sin(t)*3,5*s,0,0,7);g.stroke()}
function croc(g,x,y,t,s,f,w){g.save();g.translate(x,y);g.scale((f||1)*s,s);const c='#5a6a44',d='#3a4a2c',bi=Math.sin(t*.4+x)*.5;sh(g,0,0,52,3,.2);
 poly(g,d,[[-62,-4],[-30,-10],[8,-11],[14,-6],[-30,-3]]);poly(g,c,[[-64,-3],[-34,-11],[2,-14],[30,-11],[56,-8],[60,-5],[34,-3],[4,-2],[-30,-2]]);
 for(let i=0;i<10;i++)poly(g,d,[[-50+i*8,-9],[-48+i*8,-14-(i%2)*1],[-45+i*8,-9]]);
 el(g,c,20,-4,6,3,.3);el(g,c,-16,-3,6,3,-.3);el(g,d,52,-8-bi*.3,4,2.4);dot(g,'#e0c050',40,-12,1.8);dot(g,'#120c08',40,-12,.9);for(let i=0;i<6;i++)ln(g,'#e8e0d0',.8,[44+i*2.5,-5,44+i*2.5,-3.4]);
 g.restore()}
function crocW(g,x,y,t,s,f){g.save();g.translate(x,y);g.scale((f||1)*s,s);el(g,'#4a5a38',0,-2,22,3.6);el(g,'#4a5a38',18,-4,9,2.4);dot(g,'#e0c050',8,-6,1.6);dot(g,'#e0c050',14,-6,1.4);g.restore();g.strokeStyle='rgba(255,255,255,.3)';g.lineWidth=1;g.beginPath();g.ellipse(x,y,28*s+Math.sin(t)*2,3*s,0,0,7);g.stroke()}
function bird(g,x,y,t,s,c,ph){const a=Math.sin(t*5+(ph||0))*7*s;g.strokeStyle=T(c||'#3a3a3a');g.lineWidth=1.6*s;g.lineCap='round';g.beginPath();g.moveTo(x-9*s,y-a*.8);g.quadraticCurveTo(x-4*s,y-a-3*s,x,y);g.quadraticCurveTo(x+4*s,y-a-3*s,x+9*s,y-a*.8);g.stroke();g.lineCap='butt'}
function eagle(g,x,y,t,s,f){g.save();g.translate(x,y);g.scale((f||1)*s,s);const a=Math.sin(t*.9+x)*2;const c='#3a2c20';
 poly(g,c,[[-46,2+a],[-24,-7+a],[-8,-5],[0,-3],[8,-5],[24,-7+a],[46,2+a],[30,0+a],[14,4],[6,5],[-6,5],[-14,4],[-30,0+a]]);poly(g,'#cfc6a8',[[-10,-2],[10,-2],[8,5],[-8,5]]);el(g,c,12,-1,6,3);poly(g,c,[[-8,5],[-14,13],[-3,13],[0,6]]);poly(g,'#e0b040',[[17,-1],[21,0],[17,1]]);
 for(let i=0;i<5;i++)ln(g,c,1.4,[-44+i*4,2+a,-44+i*4-2,5+a]);g.restore()}
function tort(g,x,y,s){el(g,'#6a5a3a',x,y-5*s,10*s,6*s);el(g,'#7e6c44',x,y-8*s,7*s,3.2*s);for(let i=0;i<4;i++)ln(g,'#4a3c26',.8,[x-6*s+i*4*s,y-9*s,x-6*s+i*4*s,y-3*s]);dot(g,'#7a6a48',x+11*s,y-5*s,2.6*s);dot(g,'#120c08',x+12*s,y-6*s,.6*s);el(g,'#6a5a3a',x-5*s,y-1*s,2.4*s,1.4*s);el(g,'#6a5a3a',x+5*s,y-1*s,2.4*s,1.4*s)}
function hare(g,x,y,s,f){g.save();g.translate(x,y);g.scale((f||1)*s,s);el(g,'#9a8466',0,-6,8,5);el(g,'#9a8466',-6,-5,5,4);el(g,'#9a8466',7,-9,4,3.4);lb(g,'#9a8466',[8,-10],[6,-20],2.4,1.6);lb(g,'#9a8466',[9,-10],[10,-20],2.4,1.6);dot(g,'#120c08',9,-10,.8);dot(g,'#e8e0d0',-11,-6,2);g.restore()}
function guinea(g,x,y,s,f){g.save();g.translate(x,y);g.scale((f||1)*s,s);el(g,'#3c3e4a',0,-8,8,6.4);el(g,'#3c3e4a',-6,-7,5,4);for(let i=0;i<6;i++)dot(g,'#e8e8f0',-5+i*2.2,-9+(i%2)*3,.8);ln(g,'#3a3a3a',1.2,[6,-10,9,-16]);dot(g,'#5a7ec0',9.5,-17,2);dot(g,'#c04030',11,-18,.8);ln(g,'#5a4a3a',1,[-2,-2,-2,0]);ln(g,'#5a4a3a',1,[2,-2,2,0]);g.restore()}
function porc(g,x,y,s,f){g.save();g.translate(x,y);g.scale((f||1)*s,s);el(g,'#4a3a2e',0,-8,13,7.4);for(let i=0;i<12;i++){const a=-Math.PI*.95+i*Math.PI*.1;ln(g,i%2?'#e8e0cc':'#2a2018',1.2,[Math.cos(a)*9,-8+Math.sin(a)*5,Math.cos(a)*18,-8+Math.sin(a)*13])}el(g,'#5a4a3c',12,-5,5,3.4);dot(g,'#120c08',15,-6,.8);g.restore()}
function monk(g,x,y,t,s,o){o=o||{};g.save();g.translate(x,y);g.scale((o.f||1)*s,s);const c=o.c||'#2a2420',w=o.w||'#e8e4dc',k=Math.sin(t*1.5+(o.ph||0))*2;
 qc(g,w,3,-8,-6,-16,2+k,-20,12);el(g,c,0,-8,9,6);el(g,w,3,-11,5,3);el(g,c,9,-14,4.4,4);lb(g,c,[4,-9],[10,-3],3,2);lb(g,c,[-5,-4],[-3,2],3,2);dot(g,'#3a2a24',11,-14,2);dot(g,'#fff',12,-15,.6);g.restore()}
function peaf(g,x,y,s,f){g.save();g.translate(x,y);g.scale((f||1)*s,s);for(let i=0;i<7;i++){const a=Math.PI*(.75+i*.06);ln(g,'#3a8a6a',2,[-10,-12,-10+Math.cos(a)*30,-12+Math.sin(a)*22])}for(let i=0;i<5;i++)dot(g,'#c8b84a',-10+Math.cos(Math.PI*(.78+i*.07))*28,-12+Math.sin(Math.PI*(.78+i*.07))*20,1.6);el(g,'#2a5aa8',2,-14,6,8,-.4);el(g,'#2a5aa8',9,-26,3,3.6);dot(g,'#e8e0d0',10,-27,.9);ln(g,'#2a5aa8',1,[8,-30,8,-34]);ln(g,'#6a5a4a',1.2,[0,-8,0,0]);ln(g,'#6a5a4a',1.2,[4,-8,4,0]);g.restore()}
function owl(g,x,y,t,s){g.save();g.translate(x,y);g.scale(s,s);el(g,'#8a6e4a',0,-9,6,9);poly(g,'#8a6e4a',[[-5,-16],[-3,-21],[0,-17]]);poly(g,'#8a6e4a',[[5,-16],[3,-21],[0,-17]]);el(g,'#e8dcc0',0,-14,5,4.2);dot(g,'#e8b020',-2,-14,1.6);dot(g,'#e8b020',2,-14,1.6);const b=Math.sin(t*.6+x)>.95?0:.9;dot(g,'#120c08',-2,-14,b);dot(g,'#120c08',2,-14,b);poly(g,'#c88a3a',[[-1,-12.6],[1,-12.6],[0,-10.8]]);for(let i=0;i<4;i++)ln(g,'#5a4430',1,[-3+i*2,-6,-3+i*2,-3]);g.restore()}
function parrot(g,x,y,t,s){g.save();g.translate(x,y);g.scale(s,s);el(g,'#4aa83a',0,-8,4.2,8,.2);el(g,'#3a8a2a',-3,-3,3,7,.5);el(g,'#4aa83a',2,-17,4,4);poly(g,'#d04a30',[[4,-17],[8,-15],[4,-14]]);dot(g,'#fff',3.4,-18,1);dot(g,'#120c08',3.6,-18,.5);ln(g,'#7a5a3a',1.2,[0,0,0,-1]);g.restore()}
/* ===================== livelli di sfondo ===================== */
const SKYK=[['#6f847c','#a2b4a6','#dccab4'],['#7ab8e2','#bcdcec','#f6ecd2'],['#74b0d0','#b8d8c0','#ecefc4'],['#6c98c2','#b0c8dc','#e8eef0'],['#c4d8ea','#eef2f2','#fffaf0'],['#9cc0e0','#ecdcb0','#f6d894'],['#8cb0d8','#f0d4a0','#f6c478'],['#5a5aa0','#f0907a','#ffba5c']];
const SKYE=['#3e3a78','#b05a86','#f08a54'];
function skyCol(xs){if(xs>=CE[7]){const u=cl((xs-CE[7])/(W1-CE[7]),0,1);return[0,1,2].map(k=>mixh(SKYK[7][k],SKYE[k],u))}let i=0;while(i<6&&xs>=CE[i+1])i++;if(xs<=CE[0])return SKYK[0];const u=sm((xs-CE[i])/(CE[i+1]-CE[i]));return[0,1,2].map(k=>mixh(SKYK[i][k],SKYK[i+1][k],u))}
const sunAt=xs=>{const u=cl(xs/W1,0,1);return{x:40+u*400,y:338-Math.sin(u*Math.PI)*282,u:u}};
const zw=(z,xs)=>{const half=(ZE[z]-Z[z])/2,d=Math.abs(xs-CE[z])-half+120;return d<=0?1:sm(1-d/420)};
function cloud(g,x,y,s,c){el(g,c,x,y,40*s,9*s);el(g,c,x-24*s,y+3*s,26*s,7*s);el(g,c,x+26*s,y+2*s,28*s,8*s);el(g,c,x+4*s,y-6*s,24*s,8*s)}
function layerSky(g,o,t){const cam=o/.02;CAMX=cam;const xs=cam+240;setL(xs);const c=skyCol(xs),gr=g.createLinearGradient(0,0,0,GT+4);gr.addColorStop(0,c[0]);gr.addColorStop(.62,c[1]);gr.addColorStop(1,c[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const S=sunAt(xs),low=1-Math.sin(S.u*Math.PI),rr=19+low*low*22,hide=cl(1-xs/(Z[1]+300),0,1);
 const sc=mixh('#fffbe8','#ff9a48',cl(low*1.5,0,1));
 glow(g,S.x,S.y,200+low*140,low>.6?'255,150,80':'255,238,190',(.42+low*.2)*(1-hide*.9));
 if(hide<.9){g.globalAlpha=1-hide;dot(g,sc,S.x,S.y,rr);g.globalAlpha=1}
 /* nuvole */
 const cc=xs<CE[1]?'rgba(226,236,230,.55)':xs<CE[3]-300?'rgba(255,255,255,.7)':xs<CE[4]-300?'rgba(150,158,172,.78)':xs<CE[6]?'rgba(255,255,250,.5)':xs<CE[7]?'rgba(255,214,170,.6)':'rgba(255,150,130,.62)';
 each(o-((t*3)%360)*.02,360,1,(x,i,r)=>{if(r>.55)return;cloud(g,x+r*100,34+r*70,.9+r*.8,cc)});
 if(xs>CE[2]+300&&xs<CE[4]){const a=cl((xs-CE[2]-300)/500,0,1)*cl((CE[4]-xs)/500,0,1);g.globalAlpha=a*.9;each(o-((t*2)%420)*.02,420,4,(x,i,r)=>{cloud(g,x+r*60,26+r*30,1.5+r*.6,'rgba(110,118,132,.85)');cloud(g,x+r*60+30,52+r*20,1.1,'rgba(150,158,172,.7)')});g.globalAlpha=1;
  g.globalAlpha=a*.12;for(let i=0;i<4;i++){const bx=90+i*110;poly(g,'#fffbe0',[[bx,0],[bx+36,0],[bx+90-i*10,GT],[bx+40,GT]])}g.globalAlpha=1}
 const mi=cl(1-xs/(Z[1]+300),0,1)*.5;if(mi>.01){const mg=g.createLinearGradient(0,200,0,GT+4);mg.addColorStop(0,'rgba(190,206,196,0)');mg.addColorStop(1,'rgba(200,214,204,'+mi+')');g.fillStyle=mg;g.fillRect(0,200,480,GT-196)}
 const du=cl((xs-Z[4])/500,0,1)*cl((Z[7]-xs+200)/600,0,1)*.2;if(du>.01){const mg=g.createLinearGradient(0,250,0,GT+4);mg.addColorStop(0,'rgba(255,214,140,0)');mg.addColorStop(1,'rgba(255,214,140,'+du+')');g.fillStyle=mg;g.fillRect(0,250,480,GT-246)}
 const sg=cl((xs-Z[7])/900,0,1);if(sg>.01){const mg=g.createLinearGradient(0,170,0,GT+4);mg.addColorStop(0,'rgba(255,120,80,0)');mg.addColorStop(1,'rgba(255,130,70,'+sg*.38+')');g.fillStyle=mg;g.fillRect(0,170,480,GT-166)}}
function ridge(g,o,base,amp,wl,seed,col,sc){const p=[[0,GT+6]];for(let x=0;x<=488;x+=8)p.push([x,base-amp*(.5+.5*wave((o+x)*(sc||1),seed,wl))]);p.push([488,GT+6]);poly(g,col,p)}
function lake(g,x0,y0,x1,y1,t,c1,c2,seed){water(g,x0,y0,x1,y1,t,c1,c2,seed,1)}
const FZ=[
 (g,o,t,xs)=>{ridge(g,o,326,66,.006,1,'#8ea4a6');g.globalAlpha=.6;quad(g,200+Math.sin(t*.04)*50,342,t,'deino',{s:.46,f:1,col:'#7a8c8a',cd:'#6a7c7a',cb:'#8c9c98',walk:.5,noshadow:1});g.globalAlpha=1;ridge(g,o*1.4,338,38,.011,2,'#6e8a7a');ridge(g,o*2,350,22,.02,3,'#587a60')},
 (g,o,t,xs)=>{ridge(g,o,322,38,.008,4,'#eadaae');ridge(g,o*1.2,334,24,.014,5,'#dcc690');lake(g,0,336,480,352,t,'#4cc0c0','#2aa0a8',3);for(let i=0;i<7;i++)quad(g,70+i*58+Math.sin(t*.1+i)*8,334,t,'giraffe',{s:.2,f:-1,col:'#9a8a68',spots:'#8a7858',cd:'#8a7a58',walk:.5,ph:i,noshadow:1});
  each(o*2,26,8,(x,i,r)=>{el(g,'#4a6a44',x+r*10,336,9+r*5,4+r*3)});each(o*1.5,40,6,(x,i,r)=>{ln(g,'#a6b070',1.4,[x,352,x+2,344-r*5])});g.globalAlpha=.25;el(g,'#fff4d0',330+Math.sin(t*.2)*14,322,60,9);g.globalAlpha=1},
 (g,o,t,xs)=>{ridge(g,o,322,50,.007,6,'#7a9a6a');ridge(g,o*1.3,334,34,.012,7,'#5f8450');each(o*1.6,20,9,(x,i,r)=>{el(g,'#4a7040',x+r*10,342,12+r*8,8+r*6)})},
 (g,o,t,xs)=>{ridge(g,o,312,52,.006,8,'#8aa2c0');ridge(g,o*1.1,336,8,.02,9,'#c6c8c2');const cx=250+(CE[3]-xs)*.05+60;poly(g,'#6c6c78',[[cx-120,338],[cx-16,262],[cx+16,262],[cx+120,338]]);poly(g,'#85858f',[[cx-60,338],[cx-16,262],[cx-4,262],[cx-10,338]]);
  for(let i=0;i<9;i++){const a=.55-i*.05;el(g,'rgba(140,140,150,'+a+')',cx+Math.sin(t*.4+i)*6+i*7,258-i*15,8+i*3.2,6+i*2.4)}
  for(let i=0;i<3;i++)quad(g,60+i*40,338,t,'giraffe',{s:.2,f:1,col:'#a49a7c',spots:'#8a7e60',cd:'#8a7e60',walk:.4,ph:i*2,noshadow:1});each(o*2,30,10,(x,i,r)=>{el(g,'#6e7a56',x+r*12,340,8,4)})},
 (g,o,t,xs)=>{ridge(g,o*.8,308,20,.004,11,'#aeaec0');ridge(g,o,320,50,.008,12,'#b8704a');for(let i=0;i<3;i++)ridge(g,o,326+i*5,50-i*8,.008,12,i%2?'#c88458':'#a45e3c');ridge(g,o*1.2,338,30,.013,13,'#a05c3c');g.globalAlpha=.9;el(g,'#cfe2e8',330+(CE[4]-xs)*.05,342,86,4.6);g.globalAlpha=1;
  quad(g,150,330,t,'cat',{s:.4,f:1,col:'#4a3a30',cd:'#4a3a30',cb:'#4a3a30',spots:null,noshadow:1});quad(g,168,331,t,'hyena',{s:.36,f:-1,col:'#4a3a30',cd:'#4a3a30',cb:'#4a3a30',spots:null,noshadow:1})},
 (g,o,t,xs)=>{ridge(g,o,320,42,.009,14,'#4a4642');ridge(g,o*1.2,332,28,.014,15,'#5e5852');lake(g,0,338,480,358,t,'#42c0b8','#2a8e92',5);for(let i=0;i<4;i++)hippoW(g,60+i*100,350,t,.5,i%2?-1:1,2);
  for(let i=0;i<9;i++)quad(g,310+i*14,338,t,'kudu',{s:.2,f:-1,col:'#8a7a5c',cd:'#7a6a4c',walk:.3,ph:i,noshadow:1})},
 (g,o,t,xs)=>{ridge(g,o,322,44,.01,16,'#d8caa4');each(o,95,17,(x,i,r)=>{el(g,'#4a3a2c',x+r*30,332+r*10,10+r*5,5+r*2.6);el(g,'#d8caa4',x+r*30,326+r*10,12+r*5,4)});ridge(g,o*1.25,336,24,.013,18,'#e0cc86');each(o*1.3,36,11,(x,i,r)=>{ln(g,'#c8b468',1.3,[x,345,x+3,340-r*4])})},
 (g,o,t,xs)=>{ridge(g,o,338,10,.012,19,'#a8603e');const S=sunAt(xs);const lx=S.x;lake(g,0,340,480,362,t,'#e0904c','#a85a30',7);g.globalAlpha=.5;for(let i=0;i<12;i++){const w=cl(1-Math.abs(i-6)/6,0,1);g.fillStyle='rgba(255,230,160,'+(.5*w)+')';g.fillRect(lx-30+i*5+Math.sin(t*2+i)*2,341+i%3,4,18-(i%3)*3)}g.globalAlpha=1;
  for(let i=0;i<14;i++)quad(g,30+i*32+Math.sin(t*.1+i)*5,338,t,i%3?'horse3':'kudu',{s:.17,f:i%2?1:-1,col:'#3a2a24',cd:'#3a2a24',cb:'#3a2a24',walk:.3,ph:i,noshadow:1})}
];
function layerFar(g,o,t){const cam=o/.05,xs=cam+240;setL(xs);const i=zoneAt(xs-350),u=i<7?sm(cl((xs-(Z[i+1]-350))/700,0,1)):0;
 FZ[i](g,o,t,xs);if(u>.01&&i<7){g.globalAlpha=u;FZ[i+1](g,o,t,xs);g.globalAlpha=1}
 const mi=cl(1-xs/(Z[1]+300),0,1)*.35;if(mi>.01){g.fillStyle='rgba(200,214,204,'+mi+')';g.fillRect(0,280,480,GT-276)}}
/* livello medio (k .25): fiumi, laghi e vegetazione, ancorati ai luoghi del mondo */
function vegM1(g,x,y,xw,r,r2,t){const z=zoneAt(xw),s=.55+r*.4,hz=.35;
 if(z==0){if(r2<.7)tBroad(g,x,y,s,r,hz+.1);else tFern(g,x,y,1.2,r,hz)}
 else if(z==1){if(r2<.35)tDead(g,x,y,.8+r*.4,r,.2);else if(r2<.6)tPalm(g,x,y,.5+r*.3,r,.3);else tReed(g,x,y,.8+r*.4,r,.2,14)}
 else if(z==2){if(r2<.5)tFig(g,x,y,.7+r*.4,r,.3,1);else if(r2<.8)tPalm(g,x,y,.55+r*.3,r,.3);else tBroad(g,x,y,.45,r,.35)}
 else if(z==3){if(r2<.65)tAcacia(g,x,y,.7+r*.5,r,.3);else tBush(g,x,y,.9,r,.3,'#6c7c4c')}
 else if(z==4){if(r2<.45)tAcacia(g,x,y,.7+r*.5,r,.3);else if(r2<.7)tThorn(g,x,y,1,r,.3);else tDry(g,x,y,1,r,.3)}
 else if(z==5){if(r2<.6)tRock(g,x,y,1+r*.6,r,.2,'#4e4a46');else tAcacia(g,x,y,.5+r*.3,r,.35)}
 else if(z==6){if(r2<.5)tRock(g,x,y,1.1+r*.7,r,.25,'#d6caa6');else if(r2<.8)tAcacia(g,x,y,.5+r*.3,r,.35);else tDry(g,x,y,1,r,.3)}
 else{if(r2<.5)tReed(g,x,y,1+r*.5,r,.25,16);else if(r2<.8)tAcacia(g,x,y,.55+r*.3,r,.35);else tDry(g,x,y,1.1,r,.3,'#c8a458')}}
function layerMid(g,o,t){const cam=o/.25,xs=cam+240;setL(xs);
 /* acqua: fiume dell'alba, lago, ruscelli, fiume a meandri, lago turchese, lago color rame */
 const WZ=[[0,350,'#6a7e74','#4a5e54',1],[1,345,'#58c0c0','#2c9aa0',2],[3,362,'#9ab4bc','#7e98a2',3],[4,356,'#b8a07c','#9a8466',4],[5,350,'#48c0b8','#2e9496',5],[7,350,'#e0904c','#b0602e',7]];
 WZ.forEach(q=>{const a=zw(q[0],xs);if(a>.02){g.globalAlpha=a;lake(g,0,q[1],480,GT+3,t,q[2],q[3],q[4]);if(q[0]==0||q[0]==4)each(o,60,3,(x,i,r)=>{ln(g,'rgba(255,255,255,.35)',1,[x+r*20,q[1]+6+r*10,x+r*20+16,q[1]+6+r*10])});g.globalAlpha=1}});
 anch(xs,.25,300,21,(sx,xw,r,r2)=>{setL(xw);vegM1(g,sx,GT+2,xw,r,r2,t)});
 setL(xs);
 /* animali lontani sulle rive */
 anch(xs,.25,1400,77,(sx,xw,r,r2)=>{const z=zoneAt(xw);setL(xw);
  if(z==0&&r2<.6)hippoW(g,sx,356,t,.6,r>.5?1:-1,1);
  if(z==1)hippoW(g,sx,354,t,.7,r>.5?1:-1,2);
  if(z==3)quad(g,sx,GT-4,t,'giraffe',{s:.34,f:r>.5?1:-1,col:'#c8a460',spots:'#7a5a30',walk:.35,ph:r*9});
  if(z==4)quad(g,sx,GT-4,t,r2>.5?'kudu':'giraffe',{s:.4,f:r>.5?1:-1,walk:.3,ph:r*9});
  if(z==5)hippoW(g,sx,358,t,.6,r>.5?1:-1,2);
  if(z==6)quad(g,sx,GT-6,t,'kudu',{s:.45,f:r>.5?1:-1,walk:.3,ph:r*9});
  if(z==7)quad(g,sx,GT-6,t,r2>.5?'horse3':'pig',{s:.5,f:r>.5?1:-1,walk:.3,ph:r*9})})}
/* ===================== terreno e vita ===================== */
const GC=[['#4a3a2a','#2e2418'],['#dcc08c','#b89a68'],['#5e4a34','#3e3022'],['#bdb9ae','#9a968a'],['#c09060','#98683e'],['#6e665c','#4a443c'],['#b0602e','#843e1e'],['#9a8650','#6a5a34'],['#b8b2a4','#8e887a']];
const gcol=wx=>{let z=zoneAt(wx),a=GC[z];if(z<7){const u=sm((wx-(Z[z+1]-260))/520);if(u>0)a=[mixh(a[0],GC[z+1][0],u),mixh(a[1],GC[z+1][1],u)]}else{const u=sm((wx-(W1-1300))/700);a=[mixh(a[0],GC[8][0],u),mixh(a[1],GC[8][1],u)]}return a};
function groundDraw(g,cam,t){setL(cam+240);for(let sx=0;sx<480;sx+=16){const wx=cam+sx+8;setL(wx);const c=gcol(wx),gr=g.createLinearGradient(0,GT,0,520);gr.addColorStop(0,T(c[0]));gr.addColorStop(1,T(c[1]));g.fillStyle=gr;g.fillRect(sx,GT,17,520-GT)}
 each(cam,46,9,(x,i,r)=>{const wx=x+cam,z=zoneAt(wx),r2=hr(i*3+11),y=GT+12+r2*(520-GT-26);setL(wx);const dk=mixh(gcol(wx)[1],'#000',.2),lt=mixh(gcol(wx)[0],'#fff',.2);
  if(z==0){if(r<.4)el(g,'#5a4a2a',x,y,6+r*8,1.8+r*2,r);else if(r<.6)el(g,'#3a4a2a',x,y,8,2.6);else if(r<.7){el(g,'#2a2218',x,y,16,3.6);el(g,'rgba(120,150,140,.4)',x-3,y-.6,9,1.2)}}
  else if(z==1){if(r<.45)ln(g,lt,1,[x,y,x+14+r*10,y-1]);else if(r<.65)ln(g,dk,1,[x,y,x+6,y+3,x+12,y+1]);else if(r<.75)dot(g,'#8a7a66',x,y,1.8+r*2)}
  else if(z==2){if(r<.45)el(g,r<.25?'#8a6a2a':'#6a5a26',x,y,5+r*6,1.8,r);else if(r<.6)ln(g,'#4a3a28',2,[x,y,x+12,y+2,x+22,y-1]);else if(r<.7)dot(g,'#6a7a56',x,y,3)}
  else if(z==3){if(r<.4){g.strokeStyle='rgba(60,60,70,.35)';g.lineWidth=1;g.beginPath();g.ellipse(x,y,3+r*3,1,0,0,7);g.stroke()}else if(r<.55)dot(g,'#3a3a40',x,y,1.8+r*2);else if(r<.65)ln(g,dk,1,[x,y,x+8,y+2,x+16,y-1,x+20,y+2]);else if(r<.72)tGrass(g,x,y,.6,r,0,'#7aa850')}
  else if(z==4){if(r<.35)ln(g,dk,1,[x,y,x+10,y+1,x+14,y-3,x+22,y]);else if(r<.55)dot(g,'#8a7a6a',x,y,2+r*2);else if(r<.65)tDry(g,x,y,.5,r,0)}
  else if(z==5){if(r<.7){const n=1+(r*5|0);for(let k=0;k<n;k++)dot(g,k%2?'#2c2a28':'#4a4642',x+k*5,y+(k%2)*2,1.8+hr(i+k)*3)}}
  else if(z==6){if(r<.3)tDry(g,x,y,.55,r,0);else if(r<.5)dot(g,'#e0d4b0',x,y,1.6+r*3);else if(r<.6)ln(g,dk,1,[x,y,x+12,y-1])}
  else{if(r<.4)tGrass(g,x,y,.6,r,0,'#a89a4a');else if(r<.55){el(g,'#6a5a34',x,y,10,2.4)}else if(r<.65)ln(g,'#e8d4a4',1,[x,y,x+14,y+1])}})}
/* oggetti a terra e impronte */
function fp(g,x,y,s,fl,col){const c=col||'#8e8a7e',d=mixh(c,'#000',.55);g.save();g.translate(x,y);g.scale((fl||1)*s,s*.55);el(g,d,0,1,13,4);el(g,c,.5,.4,11.4,3.2);for(let i=0;i<5;i++)dot(g,d,8+i*1.2,-1.6+i*.8,1.2);g.restore()}
function hoof(g,x,y,s,k){const d='#4a463e';if(k==0){el(g,d,x,y,2*s,3*s);el(g,d,x+4*s,y,2*s,3*s)}else if(k==1){for(let i=0;i<3;i++)el(g,d,x+i*4*s,y+(i%2)*1.5*s,2.4*s,3*s)}else if(k==2){el(g,d,x,y,1.4*s,2*s);el(g,d,x+3*s,y+1,1.4*s,2*s)}else{for(let i=0;i<3;i++)ln(g,d,1.2,[x,y,x+3+i*2,y-2+i*2])}}
function crater(g,x,y,r){g.strokeStyle='rgba(70,70,80,.45)';g.lineWidth=1;g.beginPath();g.ellipse(x,y,r*1.6,r*.55,0,0,7);g.stroke();el(g,'rgba(255,255,255,.18)',x-r*.4,y-r*.1,r*.6,r*.2)}
function trail(g,x0,x1,y,step,s,ph,col,fl){for(let x=x0,i=0;x<x1;x+=step,i++)fp(g,x,y+(i%2?3:-3)*s*.6,s,fl,col)}
function pebbles(g,x,y,n,sp,col,s){for(let i=0;i<n;i++){const r=hr(i*7+x*.13);el(g,col||'#4a4642',x+(r-.5)*sp,y+(hr(i*3+x)-.5)*14,(2+r*4)*(s||1),(1.4+r*2.4)*(s||1))}}
function puddle(g,x,y,rx,ry,c){el(g,'#2a2218',x,y,rx+2,ry+1);el(g,c||'rgba(120,150,150,.8)',x,y,rx,ry);el(g,'rgba(255,255,255,.35)',x-rx*.3,y-ry*.3,rx*.4,ry*.25)}
function bone(g,x,y,L,s,c,cuts){const b=c||'#e0d6bc',d=mixh(b,'#000',.3);g.save();g.translate(x,y);g.scale(s,s);lb(g,b,[-L/2,-4],[L/2,-4],7,7);dot(g,b,-L/2-3,-7,5);dot(g,b,-L/2-3,-1,5);dot(g,b,L/2+3,-7,5);dot(g,b,L/2+3,-1,5);if(cuts)for(let i=0;i<5;i++)ln(g,d,1.2,[-L*.2+i*5,-8,-L*.2+i*5+3,0]);g.restore()}
function skull(g,x,y,s,k){g.save();g.translate(x,y);g.scale(s,s);const b='#e2d8bc',d='#a8987a',dk='#2a2018';
 const cr=k=='robust',fl=k=='kenya';sh(g,0,0,30,4,.25);
 el(g,d,2,-18,30,19);el(g,b,0,-20,27,19);if(cr){el(g,b,-2,-36,18,7);ln(g,d,1.2,[-14,-33,16,-33])}
 poly(g,b,[[4,-26],[30,-24],[40+(fl?-6:0),-12],[38+(fl?-6:0),-6],[10,-4],[2,-10]]);
 el(g,d,24,-23,12,4,0.05);el(g,dk,22,-19,5,5.6);if(cr){el(g,b,16,-8,15,8);for(let i=0;i<4;i++)rect(g,'#f0e8d4',10+i*4.4,-6,3.6,5)}else for(let i=0;i<5;i++)rect(g,'#f0e8d4',22+i*3.4-(fl?3:0),-7,2.8,4);
 el(g,b,18,-3,18,5);if(k=='sahel')el(g,'#c8bc9c',26,-26,14,5);dot(g,dk,36-(fl?6:0),-14,1.4);g.restore()}
function femur(g,x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.rotate(-.12);lb(g,'#e0d6bc',[-40,0],[34,-6],8,6);dot(g,'#e0d6bc',-44,-4,9);dot(g,'#e8e0ca',-46,-8,6);dot(g,'#e0d6bc',-42,6,6);dot(g,'#e0d6bc',38,-8,7);dot(g,'#e0d6bc',38,-2,6);g.restore()}
function pedestal(g,x,y,w,h){tRock(g,x,y,w/80,.45,0,'#8c8272')}
function termitaio(g,x,y,s){poly(g,'#8a5a34',[[x-22*s,y],[x-14*s,y-30*s],[x-6*s,y-52*s],[x+2*s,y-60*s],[x+10*s,y-44*s],[x+16*s,y-26*s],[x+24*s,y]]);poly(g,'#a8744a',[[x-14*s,y-30*s],[x-6*s,y-52*s],[x+2*s,y-60*s],[x-2*s,y-30*s]]);for(let i=0;i<6;i++)ln(g,'#6a4228',1,[x-14*s+i*5*s,y-6*s-i*6*s,x-8*s+i*5*s,y-12*s-i*6*s])}
function log(g,x,y,L,s,c){const a=c||'#5a4636';lb(g,a,[x-L/2,y-4*s],[x+L/2,y-5*s],9*s,8*s);ell(g,x+L/2,y-5*s,3*s,4.4*s,'#b89a70');el(g,'#4a6a36',x-L*.15,y-9*s,L*.22,3*s);el(g,'#4a6a36',x+L*.2,y-9*s,L*.15,2.4*s)}
function ell(g,x,y,rx,ry,c){el(g,c,x,y,rx,ry)}
function fruit(g,x,y,c,s){dot(g,c||'#8a5a72',x,y-2*(s||1),2.6*(s||1));dot(g,'rgba(255,255,255,.4)',x-.8,y-3*(s||1),.8)}
function flake(g,x,y,s,c){poly(g,c||'#b8b2a4',[[x,y],[x+7*s,y-2*s],[x+10*s,y-6*s],[x+3*s,y-6*s]]);poly(g,'#e4dfd2',[[x+3*s,y-6*s],[x+10*s,y-6*s],[x+9*s,y-4*s]])}
function sitgrass(g,x,y,s){tGrass(g,x,y,s,.3,0,'#a89a4a')}
/* livello di vita: etichette dei luoghi, vegetazione e animali a metà campo, uccelli */
const AN=[ /* [tappa, dx, y, sp, scala, faccia, opzioni] */
 [2,-70,30,'deino',.8,1,{drink:1}],[2,200,18,'gomph',.5,-1,{walk:.4}],[3,-260,24,'rhino',.55,1,{walk:.3}],[0,-240,14,'bear',.5,1,{walk:.3}],[1,300,10,'otter',1,-1,{walk:1}],[1,330,12,'otter',1,-1,{walk:1,ph:2}],
 [4,-140,26,'pig',.8,1,{walk:.5}],[4,230,18,'horse3',.7,-1,{walk:.4}],[7,250,16,'pig',.8,-1,{walk:.5}],[6,-220,20,'horse3',.7,1,{walk:.4}],
 [8,100,14,'kudu',.8,1,{walk:.3}],[8,-300,12,'kudu',.7,-1,{walk:.3,ph:2}],[9,-300,18,'pig',.7,1,{walk:.4}],[11,200,20,'pig',.7,-1,{walk:.4}],
 [12,-100,22,'giraffe',.65,1,{walk:.35}],[12,260,16,'horse3',.65,-1,{walk:.4}],[13,230,14,'gazelle',.8,-1,{walk:.5}],[15,-300,22,'rhino',.6,1,{walk:.3}],[15,300,14,'giraffe',.6,-1,{walk:.35,ph:3}],
 [16,-120,24,'giraffe',.7,1,{walk:.3}],[16,240,18,'kudu',.8,-1,{walk:.3}],[17,260,14,'gazelle',.8,-1,{walk:.5}],[19,-300,20,'kudu',.75,1,{walk:.3}],[20,250,20,'horse3',.7,-1,{walk:.4}],
 [21,-130,18,'kudu',.8,1,{walk:.3}],[23,230,20,'kudu',.75,-1,{walk:.3}],[24,200,14,'gazelle',.8,-1,{walk:.5}],[24,260,14,'gazelle',.8,-1,{walk:.5,ph:1}],
 [25,-250,18,'kudu',.7,1,{walk:.3}],[26,-250,16,'gazelle',.8,1,{walk:.5}],[28,260,22,'kudu',.7,-1,{walk:.3}],
 [30,-120,14,'horse3',.7,1,{walk:.4}],[30,230,18,'pig',.75,-1,{walk:.5}],[31,-250,20,'horse3',.7,1,{walk:.4,ph:2}],[33,-290,14,'pig',.7,1,{walk:.5}]];
const BABU=[[25,160,16],[28,-180,14],[11,-160,18]];
function layerLife(g,o,t){const cam=o,xs=cam+240;
 ZNAME.forEach((n,z)=>{const x=Z[z]+90-cam;if(x>-420&&x<480){setL(Z[z]+90);txt(g,n,x,62,15,'#fff',.85);txt(g,ZEPO[z],x,82,12,'#ffe8a8',.8,700)}});
 each(cam,64,5,(x,i,r)=>{const wx=x+cam,z=zoneAt(wx),y=GT+6+r*20;setL(wx);if(hr(i*5+1)>.6)return;
  if(z==0)tFern(g,x,y,.8,r,.15);else if(z==1)tReed(g,x,y,.6,r,0,8);else if(z==2)tBush(g,x,y,.8,r,0,'#4a6a34');else if(z==3)tBush(g,x,y,.6,r,.1,'#7a8a54');else if(z==4)tThorn(g,x,y,.9,r,0);else if(z==5)tRock(g,x,y,.8+r*.5,r,0,'#4e4a46');else if(z==6)tDry(g,x,y,.7,r,0);else tReed(g,x,y,.8,r,0,10)});
 AN.forEach((a,i)=>{const x=LX[a[0]]+a[1]-cam+Math.sin(t*.07+i)*18;if(x<-160||x>640)return;setL(x+cam);quad(g,x,GT+a[2],t,a[3],Object.assign({s:a[4],f:a[5]},a[6],{ph:(a[6].ph||0)+i}))});
 BABU.forEach((b,i)=>{const x=LX[b[0]]+b[1]-cam;if(x<-60||x>540)return;setL(x+cam);quad(g,x,GT+b[2],t,'pig',{s:.55,f:i%2?1:-1,col:'#6a5a3c',cd:'#4a3c28',cb:'#7a6a48',walk:.5,ph:i,nk:3,hl:20,tusk:null})});
 /* tartarughe, lepri, faraone, istrici sparsi */
 anch(xs,1,520,41,(sx,xw,r,r2)=>{const z=zoneAt(xw);setL(xw);const y=GT+30+r*40;if(z==1&&r2<.6)tort(g,sx,y,1);else if(z==3&&r2<.5)hare(g,sx,y,1,r>.5?1:-1);else if(z==3)guinea(g,sx,y,1,r>.5?1:-1);else if(z==2&&r2<.5)porc(g,sx,y,1,1);else if(z==4&&r2<.4)tort(g,sx,y,1.1);else if(z==7&&r2<.5)hare(g,sx,y,1,-1)});
 /* uccelli in cielo e aquila */
 anch(xs,1,700,55,(sx,xw,r,r2)=>{const z=zoneAt(xw);setL(xw);const px=sx+Math.sin(t*.2+r*9)*60,py=100+r*120;if(z==0||z==2)bird(g,px,py,t,1,'#2a2a2a',r*9);else if(z==1||z==5||z==7){for(let k=0;k<4;k++)bird(g,px+k*22,py+k*8,t,.9,z==7?'#3a2a2a':'#3a4a50',k)}else if(z==6||z==3)eagle(g,px,70+r*50,t,.9,Math.sin(t*.1+r*5)>0?1:-1)})}
/* ===================== oggetti delle tappe (35) ===================== */
const OB={
 foresta:(g,x,y,t)=>{tBroad(g,x-200,y+4,1.25,.3,0);tBroad(g,x+230,y+4,1.05,.7,0);log(g,x+20,y+16,150,1.2);tFern(g,x-60,y+8,1.5,.4,0);tFern(g,x+110,y+12,1.3,.7,0);for(let i=0;i<4;i++)fruit(g,x-120+i*28,y+24,'#a04a3a',1.2)},
 ramo:(g,x,y,t)=>{lb(g,'#4a3a2e',[x+190,y+6],[x+178,y-170],30,18);lb(g,'#4e3e30',[x+180,y-70],[x-150,y-64],16,9);lb(g,'#3e3024',[x+170,y-122],[x-40,y-126],9,5);ln(g,'#4e3e30',6,[x-40,y-126,x-90,y-112]);
  [[x+170,y-170,80,40],[x+90,y-142,46,22],[x-50,y-134,36,16],[x-140,y-72,26,14],[x+60,y-72,28,12]].forEach((q,i)=>{el(g,'#2c4a30',q[0],q[1],q[2],q[3]);el(g,'#42703c',q[0]-q[2]*.2,q[1]-q[3]*.4,q[2]*.6,q[3]*.5)});for(let i=0;i<5;i++)ln(g,'#3e6a34',1.6,[x+100-i*40,y-124,x+100-i*40+3,y-90+i*8]);el(g,'#4a6a30',x+60,y+16,60,5);for(let i=0;i<4;i++)dot(g,'#a05a4a',x+40+i*14,y-60+(i%2)*5,2.6)},
 giganti:(g,x,y,t)=>{puddle(g,x-60,y+30,70,9,'rgba(96,118,106,.85)');puddle(g,x+110,y+24,40,6,'rgba(96,118,106,.85)');for(let i=0;i<3;i++){el(g,'rgba(40,30,20,.5)',x-120+i*70,y+42,18,4);el(g,'rgba(40,30,20,.35)',x-120+i*70+2,y+42,12,2.4)}tReed(g,x+200,y+8,1.3,.4,0,12);tReed(g,x-210,y+8,1.1,.6,0,12);log(g,x+60,y+12,110,1,'#4e4030');for(let i=0;i<3;i++)fruit(g,x+120+i*14,y+16,'#8a4a52',1)},
 cambia:(g,x,y,t)=>{[[-130,.8,.2],[110,.9,.6],[260,.7,.4]].forEach(q=>{const bx=x+q[0],h=140*q[1];lb(g,'#5a4a3a',[bx,y+4],[bx+6,y-h],9,5);ln(g,'#5a4a3a',3,[bx+4,y-h*.7,bx-30,y-h*.95]);ln(g,'#5a4a3a',3,[bx+4,y-h*.8,bx+34,y-h*1.02]);for(let i=0;i<9;i++)el(g,i%3?'#c8b440':'#a8843a',bx+(hr(i*3+bx)-.5)*70,y-h*.95-(hr(i*7+bx))*26,9,5,.5)});
  for(let i=0;i<7;i++)tDry(g,x-180+i*62,y+10+(i%3)*6,1.1,hr(i),0);for(let i=0;i<6;i++){const p=(t*14+i*70)%260;el(g,'#c8a838',x-100+i*50+Math.sin(t+i)*14,y-160+p,4,2,t+i)}homi(g,x+30,y+6,t,hm('danuvius',{h:78,f:1}));lb(g,'#4a3a2e',[x+22,y+10],[x+40,y+10],12,10)},
 lago:(g,x,y,t)=>{el(g,'#6a4a30',x-30,y+32,150,16);water(g,x-170,y+16,x+110,y+46,t,'#5ac0be','#3a9aa0',3,1);g.save();g.beginPath();g.ellipse(x-30,y+32,150,16,0,0,7);g.clip();water(g,x-180,y+16,x+120,y+48,t,'#62c8c4','#3a9aa0',3,1);crocW(g,x-80,y+30,t,.9,1);hippoW(g,x+20,y+34,t,.75,-1,2);g.restore();tReed(g,x-190,y+8,1.4,.3,0,14);tReed(g,x+160,y+8,1.5,.6,0,14);tReed(g,x+190,y+10,1.1,.2,0,10);tort(g,x+120,y+22,1.3);pebbles(g,x+60,y+54,6,80,'#b8a080',1)},
 touma:(g,x,y,t)=>{g.globalAlpha=.16;poly(g,'#fff6d0',[[x-200,y-250],[x-150,y-250],[x+30,y+8],[x-40,y+8]]);g.globalAlpha=1;pedestal(g,x,y+6,110,34);skull(g,x,y-24,1.2,'sahel');tReed(g,x+170,y+8,1,.5,0,10);pebbles(g,x-100,y+24,6,90,'#8a7a66',1)},
 orrorin:(g,x,y,t)=>{pedestal(g,x,y+6,100,30);femur(g,x,y-22,1.3);const w=Math.sin(t*.25);homi(g,x-180+w*30,y+4,t,hm('sahel',{h:70,pose:'walk',sp:4,f:Math.cos(t*.25)>0?1:-1,noshadow:0}));lb(g,'#4a3a2e',[x+200,y+6],[x+196,y-130],20,12);homi(g,x+188,y-52,t,hm('sahel',{h:66,up:1,f:-1,noshadow:1}));el(g,'#3a5a30',x+196,y-136,40,20);for(let i=0;i<6;i++)dot(g,'#8a5a3a',x-60+i*18,y+26+(i%2)*4,2.6)},
 passo:(g,x,y,t)=>{const w=Math.sin(t*.22)*80,fl=Math.cos(t*.22)>0?1:-1;tBush(g,x-200,y+4,1.4,.3,0);tBush(g,x+210,y+4,1.4,.7,0);el(g,'rgba(40,30,20,.2)',x+w-20*fl,y+4,60,3.4);homi(g,x+w,y+4,t,hm('sahel',{h:92,pose:'walk',sp:3,f:fl,aw:1.15}));lb(g,'#4a3a2e',[x+250,y+6],[x+246,y-120],18,11);homi(g,x+240,y-40,t,hm('sahel',{h:60,up:1,f:-1,noshadow:1}));trail(g,x-170,x-40,y+34,36,1,0,'#6a5a46',1);trail(g,x+80,x+170,y+40,36,.9,0,'#6a5a46',1)},
 aramis:(g,x,y,t)=>{tFig(g,x-190,y+6,1.25,.3,0,1);tFig(g,x+290,y+6,1.35,.8,0,1);lb(g,'#4a3a2e',[x+60,y+6],[x+66,y-120],14,8);ln(g,'#4a3a2e',4,[x+66,y-100,x+120,y-112]);owl(g,x+104,y-108,t,1.2);monk(g,x-150,y-152,t,1.3,{c:'#1e1a18',f:1,ph:1});peaf(g,x+170,y+12,1.1,-1);parrot(g,x-96,y-120,t,1.2);porc(g,x-30,y+22,1.1,1);for(let i=0;i<6;i++)fruit(g,x-100+i*26,y+30+(i%3)*4,i%2?'#8a5a72':'#a08a4a',1.1);tFern(g,x+10,y+8,1.1,.5,0)},
 ardi:(g,x,y,t)=>{g.globalAlpha=.2;poly(g,'#fff0b8',[[x-120,y-240],[x-70,y-240],[x+60,y+8],[x-30,y+8]]);g.globalAlpha=1;homi(g,x,y+6,t,hm('ardi',{h:112,f:1}));log(g,x-130,y+14,110,1);ln(g,'#5a4636',3,[x+90,y+10,x+150,y+2,x+190,y+8]);tFern(g,x+160,y+10,1.2,.6,0);for(let i=0;i<4;i++)dot(g,'#e0d6bc',x-80+i*30,y+30,2.6)},
 piede:(g,x,y,t)=>{lb(g,'#4a3a2e',[x-170,y-52],[x+170,y-58],18,14);dot(g,'#4a3a2e',x-170,y-52,9);g.save();g.translate(x,y-82);const sk='#6a5242';poly(g,sk,[[-60,-2],[-40,-14],[10,-12],[46,-6],[56,6],[20,14],[-30,14],[-58,12]]);poly(g,'#7a6252',[[-40,-12],[10,-11],[44,-5],[16,0],[-30,0]]);for(let i=0;i<4;i++)el(g,sk,48+i*3,-4+i*5,12-i*1.5,4,.2+i*.08);el(g,sk,36,-24,24,7,-.7);el(g,'#4a3a30',68,-30,5,3,-.7);g.restore();
  el(g,'#2a1e14',x-40,y+30,70,12);el(g,'#4a3a2a',x-40,y+30,64,9);el(g,'#2a1e14',x-8,y+22,7,3.4,-.6);for(let i=0;i<4;i++)el(g,'#2a1e14',x-4+i*10,y+30+i*1.5,5,3);tFern(g,x+210,y+10,1.1,.4,0)},
 denti:(g,x,y,t)=>{tFig(g,x+10,y+10,1.5,.5,0,1);homi(g,x-80,y+4,t,hm('ardi',{h:96,pose:'sit',eat:1,f:1,ph:0}));homi(g,x+60,y+4,t,hm('ardi',{h:90,pose:'sit',eat:1,f:-1,ph:2.4}));for(let i=0;i<6;i++)fruit(g,x-30+i*14,y+22+(i%2)*4,'#8a5a72',1.3);for(let i=0;i<4;i++)dot(g,'#8a6a3a',x+130+i*8,y+26,2);log(g,x-210,y+14,100,.9)},
 piana:(g,x,y,t)=>{tAcacia(g,x-170,y+6,1.2,.4,0);tAcacia(g,x+220,y+6,1.5,.7,0);puddle(g,x+20,y+34,80,8);puddle(g,x-70,y+46,36,5);for(let i=0;i<12;i++)crater(g,x-220+i*38,y+22+hr(i*3)*34,3+hr(i)*3);for(let i=0;i<8;i++)tGrass(g,x-200+i*55,y+12+hr(i)*30,.8,hr(i),0,'#6a9a40');pebbles(g,x+120,y+44,8,120,'#2c2a2e',1.2);g.strokeStyle='rgba(60,60,70,.4)';g.lineWidth=1;g.beginPath();g.moveTo(x-130,y+24);g.lineTo(x-100,y+30);g.lineTo(x-80,y+24);g.lineTo(x-50,y+36);g.stroke()},
 primiaustr:(g,x,y,t)=>{el(g,'#6a5a46',x-40,y+30,190,18);g.save();g.beginPath();g.ellipse(x-40,y+30,184,15,0,0,7);g.clip();water(g,x-230,y+14,x+150,y+46,t,'#58c8c0','#3aa0a4',9,1);hippoW(g,x-100,y+30,t,.7,1,2);g.restore();pedestal(g,x+150,y+6,96,30);skull(g,x+150,y-24,1.1,'anam');homi(g,x-200,y+8,t,hm('afar',{h:80,pose:'walk',sp:3,f:1,fur:'#523f2d'}));tReed(g,x-250,y+6,1.2,.3,0,12)},
 pista:(g,x,y,t)=>{trail(g,x-320,x+320,y+30,46,1.7,0,'#8e8a7e',1);trail(g,x-300,x+300,y+28,38,1.1,0,'#9a968a',1);trail(g,x-290,x+300,y+42,38,1.05,0,'#9a968a',1);
  for(let i=0;i<10;i++)hoof(g,x-300+i*60,y+60+(i%2)*4,1.2,0);for(let i=0;i<5;i++)hoof(g,x-260+i*120,y+14,1.4,1);for(let i=0;i<6;i++)hoof(g,x-280+i*100,y+54,1,2);for(let i=0;i<8;i++)hoof(g,x-240+i*70,y+66,1,3);for(let i=0;i<14;i++)crater(g,x-300+i*44,y+20+hr(i*3)*44,2.4+hr(i)*2);g.globalAlpha=.12;rect(g,'#fff',x-340,y+22,680,40);g.globalAlpha=1;tAcacia(g,x+330,y+6,1.1,.3,0)},
 chicamm:(g,x,y,t)=>{trail(g,x-320,x+320,y+40,56,1.9,0,'#8e8a7e',1);trail(g,x-300,x+300,y+48,50,1.1,0,'#9a968a',1);const w=Math.sin(t*.18)*14;homi(g,x-60+w,y+6,t,hm('afarM',{h:122,pose:'walk',sp:3,f:1,ph:0}));homi(g,x+20+w,y+10,t,hm('afar',{h:84,pose:'walk',sp:3,f:1,ph:2}));homi(g,x+100+w,y+8,t,hm('afar',{h:72,pose:'walk',sp:3,f:1,ph:4}));tAcacia(g,x+260,y+6,1.3,.5,0);tBush(g,x-230,y+8,1.2,.4,0,'#6a7a4a')},
 valle:(g,x,y,t)=>{poly(g,'#d8b884',[[x-300,y+22],[x-300,y+56],[x+300,y+56],[x+300,y+24],[x+120,y+34],[x-80,y+28]]);poly(g,'#c0a070',[[x-300,y+22],[x-80,y+28],[x+120,y+34],[x+300,y+24],[x+300,y+30],[x-300,y+30]]);tReed(g,x-250,y+14,1.5,.3,0,14);tReed(g,x+230,y+14,1.4,.6,0,14);tAcacia(g,x-130,y+8,1.4,.2,0);tAcacia(g,x+120,y+8,1.1,.8,0);tRock(g,x+20,y+10,1.2,.5,0,'#9a8266');for(let i=0;i<4;i++)pebbles(g,x-200+i*130,y+44,5,70,'#8a7a66',1)},
 lucy:(g,x,y,t)=>{tAcacia(g,x+70,y+8,1.9,.6,0);lb(g,'#4e4030',[x+70,y+10],[x+72,y-90],16,10);homi(g,x,y+6,t,hm('afar',{h:96,f:1,reach:[.2,-.66],ph:1,fur:'#4a3a2e'}));for(let i=0;i<4;i++)dot(g,'#e0d6bc',x-120+i*20,y+34,2);tDry(g,x-180,y+10,1.1,.3,0);tDry(g,x+210,y+10,1.1,.7,0)},
 famiglia:(g,x,y,t)=>{poly(g,'#d6b682',[[x-340,y-4],[x+340,y-4],[x+340,y+26],[x-340,y+26]]);rect(g,'#b8986a',x-340,y-8,680,5);rect(g,'#b8986a',x-340,y+26,680,4);const S=[[-170,92,'afar',1,0],[-110,98,'afar',1,2],[-60,62,'afar',1,4],[-10,54,'afar',1,1],[40,74,'afar',1,3],[90,44,'afar',1,5],[130,36,'afar',1,2]];S.forEach((q,i)=>homi(g,x+q[0]+Math.sin(t*.1+i)*6,y+14+(i%3)*4,t,hm('afar',{h:q[1],pose:'walk',sp:1.8,f:i==1?-1:1,ph:q[4],fur:FUR[i%5],noshadow:1})));tReed(g,x-320,y-4,1.1,.3,0,10);tReed(g,x+320,y-4,1.1,.6,0,10)},
 selam:(g,x,y,t)=>{tAcacia(g,x+120,y+8,1.4,.4,0);lb(g,'#4e4030',[x+120,y-40],[x-30,y-90],9,5);homi(g,x-20,y+6,t,hm('afar',{h:56,f:1,up:2,fur:'#54422f',hs:1.12,rob:.9}));for(let i=0;i<5;i++)dot(g,'#e0d6bc',x-150+i*22,y+34,2);tDry(g,x-180,y+10,1,.3,0);tRock(g,x+240,y+8,1,.4,0,'#9a8266')},
 pranzo:(g,x,y,t)=>{tAcacia(g,x,y+8,1.7,.5,0);g.globalAlpha=.18;el(g,'#000',x,y+20,170,14);g.globalAlpha=1;homi(g,x-110,y+4,t,hm('afar',{h:86,pose:'sit',eat:1,f:1,ph:0}));homi(g,x+10,y+4,t,hm('afar',{h:80,pose:'sit',eat:1,f:-1,ph:2,fur:'#54422f'}));homi(g,x+120,y+4,t,hm('afar',{h:90,pose:'sit',f:-1,ph:4,fur:'#3e3026'}));termitaio(g,x+240,y+10,1.2);for(let i=0;i<5;i++)dot(g,'#a88a4a',x-60+i*14,y+26,2.2);tDry(g,x-230,y+10,1.2,.5,0)},
 letto:(g,x,y,t)=>{poly(g,'#6a645c',[[x-320,y+14],[x+320,y+14],[x+320,y+58],[x-320,y+58]]);for(let i=0;i<16;i++)pebbles(g,x-300+i*40,y+26+(i%3)*10,6,60,i%2?'#2a2826':'#4a4642',1.2);tRock(g,x-120,y+12,2.4,.5,0,'#3a3836');tRock(g,x+100,y+12,2,.3,0,'#4a4642');tAcacia(g,x+250,y+6,1.3,.5,0);tAcacia(g,x-260,y+6,1.1,.2,0)},
 lomekwi:(g,x,y,t)=>{tRock(g,x-220,y+10,2.2,.5,0,'#4a4642');tRock(g,x+250,y+10,1.8,.2,0,'#4a4642');pebbles(g,x+130,y+30,12,140,'#3a3836',1.4);for(let i=0;i<6;i++)flake(g,x-170+i*16,y+26+(i%2)*5,1.2);tRock(g,x+170,y+14,1,.8,0,'#8a867a');for(let i=0;i<3;i++)tRock(g,x+60+i*20,y+34,.6,.3+i*.2,0,'#6a665e')},
 tagli:(g,x,y,t)=>{pedestal(g,x,y+6,170,26);bone(g,x,y-20,110,1.3,'#e0d6bc',1);flake(g,x+86,y-8,1.6);[[-190,1],[-140,-1],[190,-1]].forEach((q,i)=>homi(g,x+q[0],y-6,t,hm('afar',{h:66,pose:'sit',eat:i==0,f:q[1],ph:i*2,fur:FUR[i],noshadow:1})));pebbles(g,x+100,y+30,6,100,'#4a4642',1)},
 cugini:(g,x,y,t)=>{el(g,'#6a5a46',x+30,y+28,200,14);g.save();g.beginPath();g.ellipse(x+30,y+28,194,12,0,0,7);g.clip();water(g,x-170,y+16,x+230,y+42,t,'#58c8c0','#3aa0a4',11,1);g.restore();const w=Math.sin(t*.2)*30;homi(g,x-70+w,y+6,t,hm('kenyan',{h:98,pose:'walk',sp:2.4,f:1}));homi(g,x+90-w,y+10,t,hm('afar',{h:88,pose:'walk',sp:2.4,f:-1,ph:3}));tReed(g,x-250,y+8,1.3,.4,0,12);tReed(g,x+270,y+8,1.3,.7,0,12)},
 altopiano:(g,x,y,t)=>{poly(g,'#d6c8a2',[[x+110,y+4],[x+120,y-60],[x+170,y-110],[x+250,y-124],[x+330,y-90],[x+350,y+4]]);poly(g,'#b8a984',[[x+250,y-124],[x+330,y-90],[x+350,y+4],[x+290,y+4]]);poly(g,'#2e2218',[[x+190,y+4],[x+190,y-34],[x+206,y-50],[x+232,y-50],[x+248,y-34],[x+248,y+4]]);poly(g,'#e8c890',[[x+200,y+4],[x+200,y-30],[x+212,y-42],[x+226,y-42],[x+238,y-30],[x+238,y+4]]);
  g.strokeStyle='#e8dcb8';g.lineWidth=5;g.beginPath();g.ellipse(x-60,y+36,86,13,0,0,7);g.stroke();el(g,'#2e2218',x-60,y+36,80,10);g.globalAlpha=.2;poly(g,'#fff0b8',[[x-100,y-230],[x-30,y-230],[x+40,y+36],[x-150,y+36]]);g.globalAlpha=1;for(let i=0;i<12;i++){const p=(t*10+i*30)%230;dot(g,'rgba(255,240,190,.7)',x-60+Math.sin(i*2.1+t*.5)*20+(p/230)*-0,y-200+p*.9+ (i%3)*0,1.4)}tDry(g,x-250,y+10,1.2,.3,0);tRock(g,x-190,y+8,1.4,.6,0,'#d6caa6')},
 taung:(g,x,y,t)=>{tAcacia(g,x+30,y+8,1.8,.5,0);homi(g,x-80,y+4,t,hm('africanus',{h:88,pose:'sit',f:1,ph:0}));homi(g,x-18,y+4,t,hm('africanus',{h:50,pose:'sit',f:1,ph:2,hs:1.15,rob:.85,fur:'#54422f'}));eagle(g,x+120+Math.sin(t*.3)*60,y-300+Math.cos(t*.3)*14,t,1.1,Math.cos(t*.3)>0?1:-1);tRock(g,x+170,y+10,1.3,.4,0,'#c8bc98');el(g,'#a8987a',x+170,y-14,13,9);for(let i=0;i<6;i++)dot(g,'#f0e8d0',x+164+i*2,y-16+(i%3)*2,1)},
 ples:(g,x,y,t)=>{pedestal(g,x-60,y+6,110,34);skull(g,x-60,y-26,1.2,'ples');homi(g,x+110,y+6,t,hm('africanus',{h:92,f:-1,ph:2}));tDry(g,x+230,y+10,1.3,.4,0);tRock(g,x-200,y+8,1.5,.6,0,'#d6caa6')},
 piccolopiede:(g,x,y,t)=>{poly(g,'#d6c8a2',[[x-110,y+6],[x-110,y-100],[x-60,y-150],[x+60,y-150],[x+110,y-100],[x+110,y+6]]);poly(g,'#b8a984',[[x+60,y-150],[x+110,y-100],[x+110,y+6],[x+74,y+6]]);poly(g,'#4a3626',[[x-62,y+6],[x-62,y-62],[x-40,y-92],[x+40,y-92],[x+62,y-62],[x+62,y+6]]);poly(g,'#7a5a3a',[[x-54,y+6],[x-54,y-58],[x-36,y-84],[x+36,y-84],[x+54,y-58],[x+54,y+6]]);
  g.globalAlpha=.3;poly(g,'#fff0b8',[[x-30,y-150],[x+30,y-150],[x+60,y+2],[x-60,y+2]]);g.globalAlpha=1;rect(g,'#c8a878',x-54,y-2,108,8);for(let i=0;i<5;i++)ln(g,'#efe6cc',2.4,[x-26+i*5,y-20-Math.sin(i)*3,x-14+i*7,y-34+i*2]);dot(g,'#efe6cc',x-34,y-14,5);lb(g,'#efe6cc',[x-16,y-8],[x+36,y-8],4,4);for(let i=0;i<5;i++)ln(g,'#efe6cc',2,[x+38+i*3,y-8,x+46+i*4,y-2]);
  tAcacia(g,x+230,y+8,1.4,.5,0);homi(g,x+176,y+6,t,hm('africanus',{h:84,pose:'walk',sp:2,f:1}));tDry(g,x-190,y+10,1.1,.5,0)},
 malapa:(g,x,y,t)=>{el(g,'#e8dcb8',x,y+34,96,17);el(g,'#2a2018',x,y+34,88,13);g.save();g.beginPath();g.ellipse(x,y+34,88,13,0,0,7);g.clip();water(g,x-90,y+38,x+90,y+48,t,'#48a0a8','#2a6a74',5,.6);g.restore();for(let i=0;i<4;i++)lb(g,'#efe6cc',[x-30+i*18,y+34],[x-18+i*18,y+37],3,3);g.globalAlpha=.2;poly(g,'#fff0b8',[[x-60,y-240],[x+10,y-240],[x+80,y+34],[x-90,y+34]]);g.globalAlpha=1;tThorn(g,x-190,y+8,1.6,.2,0);tThorn(g,x+190,y+8,1.5,.6,0);homi(g,x+250,y+8,t,hm('africanus',{h:104,pose:'walk',sp:2.2,f:-1,aw:1.15,fur:'#4a3a2e'}));tRock(g,x-260,y+8,1.2,.4,0,'#d6caa6')},
 cugini2:(g,x,y,t)=>{el(g,'#8a6030',x,y+34,230,16);g.save();g.beginPath();g.ellipse(x,y+34,224,14,0,0,7);g.clip();water(g,x-230,y+20,x+230,y+50,t,'#e0904c','#b0602e',13,1);g.restore();const w=Math.sin(t*.15)*16;[[-160,'para',108,1],[-40,'afar',84,1],[90,'homo',100,1]].forEach((q,i)=>homi(g,x+q[0]+w,y+4,t,hm(q[1],{h:q[2]*.9,pose:'walk',sp:1.6,f:q[3],ph:i*2,noshadow:1})));tReed(g,x-270,y+10,1.5,.3,0,16);tReed(g,x+270,y+10,1.5,.7,0,16)},
 teste:(g,x,y,t)=>{g.globalAlpha=.18;el(g,'#ff9a48',x,y-30,160,60);g.globalAlpha=1;pedestal(g,x,y+6,120,36);skull(g,x,y-26,1.5,'robust');skull(g,x+160,y+6,.7,'robust');tReed(g,x-200,y+10,1.5,.4,0,16);tReed(g,x+240,y+10,1.3,.7,0,14)},
 falciatori:(g,x,y,t)=>{for(let i=0;i<9;i++)tDry(g,x-260+i*68,y+8+(i%3)*5,1.5,hr(i*3),0);quad(g,x-120,y+22,t,'horse3',{s:.9,f:1,ha:1.2,nk:30,walk:0});quad(g,x+180,y+26,t,'pig',{s:1,f:-1,ha:.8,walk:0});quad(g,x+130,y+16,t,'horse3',{s:.8,f:-1,ha:1.25,nk:30,walk:0,ph:2});homi(g,x-180,y+6,t,hm('para',{h:90,pose:'sit',eat:1,f:1,ph:1}))},
 homo:(g,x,y,t)=>{const w=Math.sin(t*.12)*10;[0,1,2,3].forEach(i=>homi(g,x-150+i*74+w,y+6+(i%2)*4,t,hm('homo',{h:[104,96,100,76][i],pose:'walk',sp:2.6,f:1,ph:i*1.7,fur:FUR[(i+2)%5],noshadow:0,acc:i==1?(g2,H,J,t2)=>flake(g2,J.hr[0]*H-2,J.hr[1]*H+4,.9,'#8a867a'):null})));[[240,0],[300,1],[350,2]].forEach(q=>homi(g,x+q[0],y-6,t,hm('para',{h:70,pose:'sit',f:-1,fur:'#241c16',skin:'#241c16',ph:q[1],noshadow:1})));for(let i=0;i<7;i++)tDry(g,x-280+i*90,y+16,1.3,hr(i),0)},
 varco:(g,x,y,t,a)=>{const aw=a||x,gx=x+(W1-130-aw);trail(g,x-300,x+300,y+34,60,1.4,0,'#8e8a7e',1);trail(g,x-270,x+300,y+44,54,1.05,0,'#9a968a',1);trail(g,x-220,x+300,y+26,52,.9,0,'#9a968a',1);if(gx>-300&&gx<760){const k=cl(1-Math.abs(gx-240)/900,.3,1);glow(g,gx,y-40,420,'255,220,120',.6*k);glow(g,gx,y-40,200,'255,246,200',.75*k);g.globalAlpha=.18*k;for(let i=0;i<9;i++){const an=-1.3+i*.3;poly(g,'#fff4c0',[[gx,y-40],[gx+Math.cos(an)*700,y-40+Math.sin(an)*700],[gx+Math.cos(an+.06)*700,y-40+Math.sin(an+.06)*700]])}g.globalAlpha=1}}};
const PN=['foresta','ramo','giganti','cambia','lago','touma','orrorin','passo','aramis','ardi','piede','denti','piana','primiaustr','pista','chicamm','valle','lucy','famiglia','selam','pranzo','letto','lomekwi','tagli','cugini','altopiano','taung','ples','piccolopiede','malapa','cugini2','teste','falciatori','homo','varco'];
const OBX={};PN.forEach(n=>{OBX[n]=OB[n]});
Object.keys(OBX).forEach(n=>{PR['om'+n]=(g,x,y,t,a)=>{setL(x+CAMX);OBX[n](g,x,y,t,a)}});
/* arredo del luogo: gli oggetti che riempiono lo spazio fra una tappa e l'altra */
const AR=[['tronco','ramo','frutti','pozza','pianta','fango'],['osso','tartaruga','canne','tronco','frutti','impronte'],['fichi','noci','radici','foglie','osso','sasso'],['impronte','crateri','ramo','sasso','crosta','frutti'],['tronco','sasso','ciottoli','impronte','osso','radici'],['sasso','schegge','ciottoli','osso','impronte','mucchio'],['sasso','ramo','bacche','radici','osso','erba'],['erba','radici','osso','schegge','impronte','ciottoli']];
PR.omarredo=(g,x,y,t,a)=>{setL(x+CAMX);const z=a.z,k=a.k,r=a.r;
 if(k=='tronco')log(g,x,y+16,90+r*60,1,'#52402f');else if(k=='ramo'){ln(g,'#5a4636',3,[x-40,y+22,x,y+16,x+34,y+24]);ln(g,'#5a4636',2,[x,y+16,x+10,y+4])}else if(k=='frutti'||k=='fichi'||k=='bacche'){for(let i=0;i<5;i++)fruit(g,x+i*11-24,y+22+(i%3)*5,k=='fichi'?'#8a5a72':k=='bacche'?'#a03a3a':'#b0803a',1.2)}
 else if(k=='pozza')puddle(g,x,y+30,50+r*30,7);else if(k=='pianta'){tBush(g,x,y+8,1.1,r,0,'#4a6a34');for(let i=0;i<6;i++)fruit(g,x-20+i*8,y-8-(i%2)*8,'#c0402a',1)}
 else if(k=='fango'){el(g,'#2a2218',x,y+30,60,10);fp(g,x-14,y+30,1,1,'#4a3c2c');fp(g,x+14,y+32,1.2,1,'#4a3c2c')}
 else if(k=='osso')bone(g,x,y+22,50+r*30,1,'#e6dcc4',z==5);else if(k=='tartaruga')tort(g,x,y+24,1.3);else if(k=='canne')tReed(g,x,y+8,1.1+r*.4,r,0,10);
 else if(k=='impronte'){trail(g,x-60,x+60,y+34,34,1.1,0,z>=3?'#8e8a7e':'#4a3c2c',1);if(z==4||z==5||z==7)hoof(g,x-30,y+48,1.2,2)}
 else if(k=='noci'){for(let i=0;i<6;i++)dot(g,'#8a6a3a',x-30+i*11,y+24+(i%3)*4,2.6)}else if(k=='radici'){ln(g,'#7a5a3a',3,[x-20,y+22,x+10,y+28,x+30,y+20]);el(g,'#4a3a28',x-24,y+22,10,4)}
 else if(k=='foglie'){for(let i=0;i<7;i++)el(g,i%2?'#6a8a3a':'#8a7a2a',x-40+i*14,y+24+(i%3)*5,10,4,i)}else if(k=='sasso')tRock(g,x,y+14,1+r*.8,r,0,z==6?'#d6caa6':z==5?'#4a4642':'#7a7468');
 else if(k=='crateri'){for(let i=0;i<5;i++)crater(g,x-50+i*26,y+24+(i%3)*10,3+i%2*2)}else if(k=='crosta'){ln(g,'rgba(70,70,80,.5)',1.2,[x-50,y+26,x-20,y+32,x,y+26,x+30,y+34,x+54,y+28]);ln(g,'rgba(70,70,80,.4)',1,[x-10,y+28,x-4,y+40])}
 else if(k=='ciottoli')pebbles(g,x,y+28,9,90,z==5?'#2c2a28':'#8a7a66',1.2);else if(k=='schegge'){for(let i=0;i<5;i++)flake(g,x-30+i*14,y+24+(i%2)*6,1)}else if(k=='mucchio'){for(let i=0;i<9;i++)dot(g,i%2?'#3a3836':'#5a5650',x-14+(i%4)*8+(i>5?4:0),y+22-(i>3?5:0)-(i>6?5:0),4.4)}
 else if(k=='erba')tDry(g,x,y+14,1.3+r*.4,r,0,z==7?'#c8a458':null)};
/* ===================== personaggi ===================== */
const NP=(id,x,fn)=>({id,name:NAME[id],x,draw:(g,px,y,t,f)=>{setL(px+CAMX);fn(g,px,y,t,f)},d:{a:{t:GREET[id]}}});
const npcs=[
 /* Ramo: grande scimmia sul ramo orizzontale sopra il fiume, una mano al ramo sopra la testa */
 NP('om_ramo',LX[1]+10,(g,x,y,t,f)=>{homi(g,x,y-64,t,hm('danuvius',{h:92,f:f,up:1,noshadow:1,ph:.5}))}),
 /* Riva: Sahelanthropus sulla riva, braccia lunghe, volto piatto con arcate marcate */
 NP('om_riva',LX[4]+280,(g,x,y,t,f)=>{homi(g,x,y,t,hm('sahel',{h:98,f:f,ph:1.3}))}),
 /* Fico: Ardipithecus sotto il fico, un frutto in mano */
 NP('om_fico',LX[8]+280,(g,x,y,t,f)=>{homi(g,x,y,t,hm('ardi',{h:108,f:f,ph:2,hold:[.2,-.55],acc:(g2,H,J)=>fruit(g2,.2*H,-.55*H+4,'#8a5a72',1.6)}))}),
 /* Orma: afarensis maschio, alto e robusto */
 NP('om_orma',LX[14]-150,(g,x,y,t,f)=>{homi(g,x,y,t,hm('afarM',{h:130,f:f,ph:.7}))}),
 /* Acacia: femmina adulta, con la piccola accanto */
 NP('om_acacia',LX[19]+100,(g,x,y,t,f)=>{homi(g,x,y,t,hm('afar',{h:94,f:f,ph:1.1,fur:'#46362a',acc:(g2,H,J,t2)=>homi(g2,H*.34,0,t2,hm('afar',{h:50,f:1,hs:1.15,rob:.85,fur:'#54422f',ph:3,noshadow:1,hold:null}))}))}),
 /* Sasso: batte un sasso sull'incudine piatta */
 NP('om_sasso',LX[22]+20,(g,x,y,t,f)=>{const p=(t%2.4)/2.4,hy=p<.7?-.30-Math.sin(p/.7*Math.PI/2)*.34:p<.8?-.64+(p-.7)/.1*.38:-.26,hx=.3,hit=p>=.78&&p<.95;
  homi(g,x,y,t,hm('afar',{h:112,f:f,ph:.2,rob:1.1,fur:'#3e3026',hand:[hx,hy],hand2:[hx-.04,hy+.02],acc:(g2,H,J)=>{poly(g2,'#6a665c',[[.2*H,0],[.24*H,-.2*H],[.52*H,-.2*H],[.58*H,0]]);poly(g2,'#8a867a',[[.24*H,-.2*H],[.52*H,-.2*H],[.5*H,-.17*H],[.26*H,-.17*H]]);dot(g2,'#4a4642',hx*H+2,hy*H-4,6);if(hit){for(let i=0;i<5;i++)dot(g2,'rgba(240,230,200,'+(1-(p-.78)*5)+')',.4*H+i*5,-.28*H-(p-.78)*120*(i%3+1),1.4)}flake(g2,.46*H,-.2*H,.9)}}))}),
 /* Brezza: giovane dell'altopiano, un ciuffo d'erba in mano */
 NP('om_brezza',LX[25]+170,(g,x,y,t,f)=>{homi(g,x,y,t,hm('africanus',{h:80,f:f,ph:2.4,hs:1.1,rob:.9,fur:'#4a3a2e',hold:[.2,-.5],acc:(g2,H)=>tGrass(g2,.2*H,-.5*H+6,.7,.4,0,'#a89a4a')}))}),
 /* Molare: Paranthropus seduto nell'erba, mastica */
 NP('om_molare',LX[32]+30,(g,x,y,t,f)=>{tDry(g,x-50*f,y+10,1.1,.3,0);homi(g,x,y,t,hm('para',{h:112,pose:'sit',eat:1,chew:1,f:f,ph:.9}));tDry(g,x+40*f,y+14,1.2,.6,0)})
];
const props=[];PN.forEach((n,i)=>props.push(['om'+n,n=='ramo'?LX[1]+10:LX[i]]));
{let n=0;for(let z=0;z<8;z++)for(let x=Z[z]+120;x<ZE[z]-120;x+=300+hr(n*3+z)*90,n++){const r=hr(n*5+2);if(LX.some(q=>Math.abs(q-x)<150))continue;if(z==7&&x>W1-1200)continue;props.push(['omarredo',x,{z:z,k:AR[z][(r*6)|0],r:r}])}}
[LX[34]+450,LX[34]+880].forEach(x=>props.push(['omvarco',x,x]));
props.sort((a,b)=>a[1]-b[1]);
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'ominidi',name:WNAME,width:W1,sky:['#6f847c','#a2b4a6','#dccab4'],gt:GT,gr:['#4a3a2a','#2e2418'],chord:[196,246.9,293.7,392],amb:'#fff0c8',
 intro:INTRO,look:look,
 gdraw:(g,cam,t)=>{groundDraw(g,cam,t)},
 back:[{k:.02,fn:layerSky},{k:.05,fn:layerFar},{k:.25,fn:layerMid}],
 mid:[{k:1,fn:layerLife}],
 props:props,npcs:npcs});
Object.keys(TQA).forEach(k=>{TOPX[k]=TQA[k]});
})();
