/* ================================================================
   citazioni.js
   Frasi motivazionali / citazioni / curiosità mostrate a rotazione
   in assistent.html. Una frase per riga, testo semplice: NESSUN
   apice, NESSUNA virgola di fine riga, NESSUN carattere da
   "scappare". Per aggiungere una nuova frase basta scrivere una
   nuova riga qui dentro e salvare — non serve toccare assistent.html.

   Caricato da assistent.html tramite un tag <script> con src="citazioni.js",
   posizionato PRIMA dello script principale della pagina, così la
   variabile QUOTES qui definita è già pronta quando serve.
   ================================================================ */
const QUOTES_RAW = `
Un passo alla volta, ma tutti i giorni.
La costanza batte l'intensità.
Fatto è meglio che perfetto.
Piccole cose, fatte bene, fanno grandi risultati.
Organizza oggi, respira domani.
La chiarezza nasce dall'ordine.
Un obiettivo scritto è già mezzo raggiunto.
La disciplina è la libertà di domani.
Prima le cose importanti.
So di non sapere. — Socrate
Panta rei, tutto scorre. — Eraclito
La conoscenza inizia dalla meraviglia. — Platone
L'eccellenza è un'abitudine, non un atto isolato. — ispirato ad Aristotele
Historia magistra vitae: la storia è maestra di vita. — Cicerone
Non è che abbiamo poco tempo, ma che ne perdiamo molto. — Seneca
Non sono le cose a turbarci, ma il giudizio che ne diamo. — Epitteto
Il miglior modo di vendicarsi è non essere come chi ti ha offeso. — Marco Aurelio
Datemi una leva e solleverò il mondo. — Archimede
Ars longa, vita brevis: l'arte è lunga, la vita è breve. — Ippocrate
L'acqua è il principio di tutte le cose. — Talete (attribuita)
L'uomo è la misura di tutte le cose. — Protagora
Nulla esiste se non atomi e spazio vuoto. — Democrito
Eppur si muove. — frase attribuita a Galileo Galilei
La semplicità è l'estrema sofisticazione. — frase attribuita a Leonardo da Vinci
Cogito, ergo sum: penso, dunque sono. — Cartesio
Agisci sempre in modo che la tua azione possa valere come legge universale. — Immanuel Kant
F = ma: la forza è il prodotto tra massa e accelerazione. — Seconda legge di Newton
Ad ogni azione corrisponde una reazione uguale e contraria. — Terza legge di Newton
Un corpo in quiete resta in quiete, uno in moto resta in moto, finché una forza non agisce su di esso. — Prima legge di Newton
E = mc²: energia e massa sono equivalenti. — Albert Einstein
La velocità della luce nel vuoto è la stessa per ogni osservatore. — Relatività ristretta, Einstein
L'entropia di un sistema isolato non può diminuire nel tempo. — Secondo principio della termodinamica
L'energia non si crea né si distrugge, si trasforma. — Primo principio della termodinamica
Due corpi si attraggono con una forza proporzionale al prodotto delle masse e inversamente proporzionale al quadrato della distanza. — Gravitazione universale, Newton
I pianeti percorrono orbite ellittiche con il Sole in uno dei due fuochi. — Prima legge di Keplero
A temperatura costante, la pressione di un gas è inversamente proporzionale al volume. — Legge di Boyle
Non è possibile conoscere con precisione assoluta posizione e velocità di una particella. — Principio di indeterminazione, Heisenberg
La luce si comporta sia come onda che come particella. — Dualismo onda-particella
Un corpo immerso in un fluido riceve una spinta verso l'alto pari al peso del fluido spostato. — Principio di Archimede
La carica elettrica totale di un sistema isolato si conserva. — Legge di conservazione della carica
Il campo magnetico generato da una corrente è proporzionale alla sua intensità. — Legge di Ampère
Una variazione di flusso magnetico induce una forza elettromotrice. — Legge di Faraday
Il DNA ha una struttura a doppia elica. — Watson e Crick, 1953
753 a.C. — Data tradizionale della fondazione di Roma.
44 a.C. — Giulio Cesare viene assassinato alle Idi di marzo.
476 d.C. — Caduta dell'Impero Romano d'Occidente.
1088 — Fondazione dell'Università di Bologna, tra le più antiche d'Europa.
1215 — Firma della Magna Carta in Inghilterra.
1347 — La Peste Nera inizia a diffondersi in Europa.
1453 — Caduta di Costantinopoli, fine dell'Impero Bizantino.
1492 — Cristoforo Colombo raggiunge le Americhe.
1517 — Martin Lutero affigge le sue 95 tesi, inizio della Riforma protestante.
1600 — Giordano Bruno viene arso sul rogo a Roma.
1687 — Newton pubblica i Philosophiae Naturalis Principia Mathematica.
1789 — Presa della Bastiglia, inizio della Rivoluzione francese.
1861 — Proclamazione del Regno d'Italia.
1869 — Mendeleev pubblica la prima tavola periodica degli elementi.
1945 — Fine della Seconda guerra mondiale.
1969 — Missione Apollo 11: il primo uomo mette piede sulla Luna.
Non fare agli altri ciò che non vorresti fosse fatto a te. — Confucio
Un viaggio di mille miglia inizia con un singolo passo. — Lao Tzu
Tutto è numero. — Pitagora (attribuita)
Il fine giustifica i mezzi. — frase attribuita a Niccolò Machiavelli
Non ridere, non piangere, né detestare, ma comprendere. — Baruch Spinoza
La mente alla nascita è una tabula rasa. — John Locke
Non sono d'accordo con quello che dici, ma difenderò fino alla morte il tuo diritto di dirlo. — frase attribuita a Voltaire
L'uomo è nato libero, e ovunque è in catene. — Jean-Jacques Rousseau
La ragione è schiava delle passioni. — David Hume
Ciò che non uccide fortifica. — Friedrich Nietzsche
Il talento colpisce un bersaglio che nessuno può colpire; il genio uno che nessuno può vedere. — Arthur Schopenhauer
La vita si comprende all'indietro, ma si vive in avanti. — Søren Kierkegaard
I filosofi hanno finora interpretato il mondo; si tratta ora di cambiarlo. — Karl Marx
La banalità del male. — espressione coniata da Hannah Arendt
Il problema con il mondo è che gli stupidi sono sicuri di sé, mentre gli intelligenti sono pieni di dubbi. — frase attribuita a Bertrand Russell
Il cuore ha le sue ragioni che la ragione non conosce. — Blaise Pascal
Nel paese dei ciechi, un orbo è re. — proverbio ripreso da Erasmo da Rotterdam
V = RI: la tensione è il prodotto tra resistenza e corrente. — Legge di Ohm
La forza tra due cariche elettriche è proporzionale al prodotto delle cariche e inversamente proporzionale al quadrato della distanza. — Legge di Coulomb
L'allungamento di una molla è proporzionale alla forza applicata. — Legge di Hooke
Volumi uguali di gas, a parità di temperatura e pressione, contengono lo stesso numero di molecole. — Legge di Avogadro
Il quadrato del periodo orbitale è proporzionale al cubo del semiasse maggiore dell'orbita. — Terza legge di Keplero
La pressione esercitata su un fluido si trasmette inalterata in ogni direzione. — Principio di Pascal
Il rapporto tra seno dell'angolo di incidenza e seno dell'angolo di rifrazione è costante. — Legge di Snell
L'energia irraggiata da un corpo nero è proporzionale alla quarta potenza della sua temperatura. — Legge di Stefan-Boltzmann
L'energia viene scambiata in quantità discrete chiamate quanti. — Max Planck
La corrente indotta si oppone sempre alla variazione di flusso che l'ha generata. — Legge di Lenz
In un triangolo rettangolo, il quadrato dell'ipotenusa è uguale alla somma dei quadrati dei cateti. — Teorema di Pitagora
Elettricità e magnetismo sono manifestazioni dello stesso campo elettromagnetico. — Equazioni di Maxwell
Dove la velocità di un fluido aumenta, la pressione diminuisce. — Principio di Bernoulli
Un sistema all'equilibrio reagisce a una perturbazione opponendosi ad essa. — Principio di Le Chatelier
I caratteri ereditari si trasmettono secondo proporzioni prevedibili. — Leggi di Mendel
Le specie si evolvono attraverso la selezione naturale delle variazioni più adatte. — Charles Darwin
Le galassie si allontanano tra loro a una velocità proporzionale alla distanza. — Legge di Hubble
3000 a.C. circa — I Sumeri sviluppano la scrittura cuneiforme.
776 a.C. — Data tradizionale della prima Olimpiade in Grecia.
221 a.C. — Unificazione della Cina sotto la dinastia Qin.
1054 — Grande Scisma tra Chiesa d'Oriente e Chiesa d'Occidente.
1054 — Astronomi cinesi osservano l'esplosione che darà origine alla Nebulosa del Granchio.
1440 circa — Gutenberg introduce la stampa a caratteri mobili in Europa.
1543 — Copernico pubblica il "De revolutionibus orbium coelestium".
1610 — Galileo osserva per la prima volta i satelliti di Giove.
1776 — Dichiarazione d'Indipendenza degli Stati Uniti.
1815 — Battaglia di Waterloo, fine dell'epoca napoleonica.
1859 — Darwin pubblica "L'origine delle specie".
1876 — Alexander Graham Bell brevetta il telefono.
1903 — I fratelli Wright compiono il primo volo a motore.
1928 — Alexander Fleming scopre la penicillina.
1936 — Alan Turing formalizza il concetto di macchina di Turing, alla base dell'informatica moderna.
1957 — Lancio dello Sputnik, primo satellite artificiale in orbita.
La morte non è nulla per noi: finché ci siamo noi non c'è lei. — Epicuro
Cerco un uomo. — frase attribuita a Diogene di Sinope
La virtù è l'unico vero bene. — Zenone di Cizio
Sapere è potere. — Francesco Bacone
La nottola di Minerva spicca il volo solo al calar della sera. — Georg W. F. Hegel
L'uomo è condannato ad essere libero. — Jean-Paul Sartre
Nel cuore dell'inverno ho scoperto in me un'estate invincibile. — Albert Camus
Non si nasce donne, si diventa. — Simone de Beauvoir
La libertà di ciascuno finisce dove inizia quella degli altri. — idea centrale di John Stuart Mill
Che so io? — Michel de Montaigne
L'interesse individuale, ben indirizzato, può generare benessere collettivo. — idea centrale di Adam Smith
Verum ipsum factum: il vero coincide con ciò che si costruisce. — idea centrale di Giambattista Vico
A pressione costante, il volume di un gas è direttamente proporzionale alla temperatura. — Legge di Charles
A volume costante, la pressione di un gas è direttamente proporzionale alla temperatura. — Legge di Gay-Lussac
PV = nRT: pressione, volume, quantità e temperatura di un gas ideale sono legate da questa equazione. — Equazione di stato dei gas perfetti
La pressione totale di una miscela di gas è la somma delle pressioni parziali dei singoli componenti. — Legge di Dalton
La lunghezza d'onda a cui un corpo emette il massimo di radiazione è inversamente proporzionale alla sua temperatura. — Legge di Wien
La luce può espellere elettroni da un metallo, dimostrando la natura corpuscolare della radiazione. — Effetto fotoelettrico, Albert Einstein
In ogni nodo di un circuito elettrico, la somma delle correnti entranti è uguale a quelle uscenti. — Legge di Kirchhoff
Due elettroni non possono occupare lo stesso stato quantico all'interno di un atomo. — Principio di esclusione di Pauli
Le proprietà chimiche degli elementi variano in modo periodico al crescere del numero atomico. — Legge periodica, Dmitri Mendeleev
La velocità di una reazione chimica aumenta con la temperatura. — Legge di Arrhenius
Ogni sostanza radioattiva impiega un tempo costante, il tempo di dimezzamento, per ridursi della metà. — Legge del decadimento radioattivo
Il DNA si replica copiando ciascuno dei due filamenti della doppia elica. — Meselson e Stahl, 1958
331 a.C. — Alessandro Magno fonda la città di Alessandria d'Egitto.
1096 — Inizio della Prima Crociata verso Gerusalemme.
1522 — La spedizione di Magellano-Elcano completa la prima circumnavigazione del globo.
1633 — Galileo Galilei è processato dall'Inquisizione per il sostegno al modello eliocentrico.
1665 — Newton getta le basi del calcolo infinitesimale durante la peste di Londra.
1755 — Il terremoto di Lisbona scuote anche il pensiero filosofico europeo sull'ottimismo.
1848 — Ondata di moti rivoluzionari in tutta Europa.
1885 — Karl Benz costruisce la prima automobile con motore a scoppio.
1919 — Un'eclissi solare permette di confermare osservativamente la relatività generale di Einstein.
1989 — Caduta del Muro di Berlino.
Il Big Bang è avvenuto circa 13,8 miliardi di anni fa. — cosmologia
L'universo osservabile ha un diametro stimato di circa 93 miliardi di anni luce. — cosmologia
La Via Lattea contiene tra i 100 e i 400 miliardi di stelle. — astronomia
La luce del Sole impiega circa 8 minuti per raggiungere la Terra. — astronomia
Circa il 68% dell'universo è composto da energia oscura, ancora poco compresa. — cosmologia
Le prime stelle si sono formate poche centinaia di milioni di anni dopo il Big Bang. — cosmologia
Al centro della maggior parte delle galassie, inclusa la nostra, si trova un buco nero supermassiccio. — astronomia
La sonda Voyager 1, lanciata nel 1977, è oggi l'oggetto costruito dall'uomo più lontano dalla Terra. — esplorazione spaziale
Le prime forme di vita sulla Terra risalgono a circa 3,8-4 miliardi di anni fa. — origine della vita
Nel 1953 l'esperimento di Miller e Urey dimostrò che molecole organiche possono formarsi da elementi semplici in condizioni simili alla Terra primordiale. — origine della vita
I cianobatteri, tra i primi organismi fotosintetici, arricchirono l'atmosfera terrestre di ossigeno circa 2,4 miliardi di anni fa. — origine della vita
Le prime cellule complesse con nucleo, gli eucarioti, comparvero circa 1,5-2 miliardi di anni fa. — origine della vita
Circa 6-7 milioni di anni fa si separarono le linee evolutive che portarono a uomini e scimpanzé. — evoluzione umana
L'Australopithecus, vissuto in Africa tra 3 e 4 milioni di anni fa, camminava già in posizione eretta. — evoluzione umana
Homo habilis, comparso circa 2,4 milioni di anni fa, è considerato tra i primi produttori di utensili in pietra. — evoluzione umana
Homo sapiens comparve in Africa circa 300.000 anni fa. — evoluzione umana
Tutto nasce dall'apeiron, l'infinito indeterminato. — Anassimandro
L'essere è, il non essere non è. — Parmenide
Con abili discorsi si può far apparire forte anche la causa più debole. — Gorgia
La storia è filosofia che si apprende con gli esempi. — Erodoto
La guerra è un maestro violento. — Tucidide
La misura della vita non sta nella sua lunghezza, ma nel suo giusto uso. — Plutarco
La grazia divina non elimina la natura, ma la perfeziona. — Tommaso d'Aquino
La vita dell'uomo, allo stato di natura, è solitaria, povera, sgradevole, brutale e breve. — Thomas Hobbes
Viviamo nel migliore dei mondi possibili. — Gottfried Leibniz
I confini del mio linguaggio sono i confini del mio mondo. — Ludwig Wittgenstein
Il flusso di calore attraverso un materiale è proporzionale al gradiente di temperatura. — Legge di Fourier
Le particelle si diffondono da zone a concentrazione maggiore verso zone a concentrazione minore. — Legge di Fick
L'entropia di un sistema allo zero assoluto tende a un valore minimo costante. — Terzo principio della termodinamica
La massa e l'energia curvano lo spazio-tempo, generando ciò che percepiamo come gravità. — Relatività generale, Einstein
L'equazione che descrive come evolve nel tempo lo stato quantistico di un sistema. — Equazione di Schrödinger
Ad ogni particella in movimento è associata una lunghezza d'onda. — Ipotesi di de Broglie
La frequenza percepita di un'onda cambia se la sorgente e l'osservatore sono in moto relativo. — Effetto Doppler
In un sistema isolato, la quantità di moto totale si conserva. — Conservazione della quantità di moto
In assenza di momenti esterni, il momento angolare di un sistema si conserva. — Conservazione del momento angolare
Il tempo scorre più lentamente per un osservatore in movimento rispetto a uno fermo. — Dilatazione del tempo, relatività ristretta
3200 a.C. — Nascita della scrittura geroglifica nell'antico Egitto.
2560 a.C. circa — Costruzione della Grande Piramide di Giza.
1206 — Gengis Khan unifica le tribù mongole e fonda l'Impero Mongolo.
1804 — Napoleone Bonaparte si incorona imperatore dei francesi.
1871 — Unificazione della Germania sotto Guglielmo I.
1914 — L'assassinio dell'arciduca Francesco Ferdinando innesca la Prima guerra mondiale.
1929 — Il crollo di Wall Street segna l'inizio della Grande Depressione.
1947 — L'India ottiene l'indipendenza dal dominio britannico.
Il Sole da solo rappresenta circa il 99,8% della massa dell'intero Sistema Solare. — astronomia
Andromeda, la galassia più vicina alla Via Lattea, è destinata a scontrarsi con essa tra circa 4 miliardi di anni. — astronomia
Una stella di neutroni può avere la massa del Sole concentrata in una sfera di appena 20 km di diametro. — astrofisica
Il primo esopianeta attorno a una stella simile al Sole fu scoperto nel 1995. — astronomia
La Luna si allontana dalla Terra di circa 3,8 centimetri ogni anno. — astronomia
Saturno ha una densità inferiore a quella dell'acqua: galleggerebbe se esistesse un oceano abbastanza grande. — astronomia
La fotosintesi ossigenica trasformò profondamente l'atmosfera terrestre, rendendo possibile la vita complessa. — origine della vita
I primi organismi pluricellulari complessi comparvero circa 600 milioni di anni fa. — origine della vita
L'esplosione del Cambriano, circa 540 milioni di anni fa, vide una rapida diversificazione delle forme di vita animale. — origine della vita
La vita conquistò le terre emerse a partire da circa 470 milioni di anni fa, con le prime piante. — origine della vita
Homo erectus, comparso circa 2 milioni di anni fa, fu tra i primi ominidi a controllare il fuoco. — evoluzione umana
I Neanderthal abitarono l'Europa e l'Asia occidentale fino a circa 40.000 anni fa. — evoluzione umana
L'uomo moderno migrò dall'Africa verso il resto del mondo a partire da circa 70.000 anni fa. — evoluzione umana
L'agricoltura si diffuse a partire da circa 10.000 anni fa, segnando l'inizio del Neolitico. — storia dell'uomo
Secondo il mito, Zeus detronizzò il padre Crono per diventare il re degli dei dell'Olimpo. — mitologia greca
Prometeo rubò il fuoco agli dei per donarlo agli uomini, e per questo fu condannato da Zeus. — mitologia greca
Nel mito del vaso di Pandora, la speranza fu l'unica cosa che restò intrappolata una volta liberati tutti i mali. — mitologia greca
Il labirinto di Cnosso custodiva il Minotauro, sconfitto da Teseo con l'aiuto di Arianna. — mitologia greca
Icaro precipitò in mare per essersi avvicinato troppo al Sole con ali di cera costruite dal padre Dedalo. — mitologia greca
Le Muse, figlie di Zeus e Mnemosine, ispiravano le arti e le scienze nell'antica Grecia. — mitologia greca
Secondo l'Iliade, la guerra di Troia fu scatenata dal rapimento di Elena da parte di Paride. — mitologia greca
Nell'Odissea, Ulisse impiegò dieci anni per tornare a Itaca dopo la fine della guerra di Troia. — mitologia greca
Ipazia di Alessandria fu una delle prime donne filosofe e matematiche di cui abbiamo testimonianza storica. — storia della filosofia
Boezio scrisse "La consolazione della filosofia" in carcere, in attesa dell'esecuzione. — storia della filosofia
Il tempo esiste solo perché esiste una mente capace di percepirlo. — Sant'Agostino, "Confessioni"
Tra più spiegazioni possibili, va preferita quella più semplice. — Rasoio di Ockham, Guglielmo di Ockham
Giordano Bruno sostenne l'esistenza di infiniti mondi abitati nell'universo. — Giordano Bruno
Conosci te stesso. — massima iscritta sul tempio di Delfi
Una volta sognai di essere una farfalla, e al risveglio non sapevo più se ero un uomo che aveva sognato di essere farfalla, o una farfalla che sognava di essere uomo. — Zhuangzi
La conoscenza umana attraversa tre stadi: teologico, metafisico e infine scientifico. — Auguste Comte
Una teoria scientifica deve poter essere, in linea di principio, falsificabile. — Karl Popper
Il potere non si possiede, si esercita attraverso le relazioni sociali. — idea centrale di Michel Foucault
In una reazione chimica la massa totale dei reagenti è uguale a quella dei prodotti. — Legge di conservazione della massa, Lavoisier
La velocità di raffreddamento di un corpo è proporzionale alla differenza di temperatura con l'ambiente. — Legge del raffreddamento di Newton
Una particella può attraversare una barriera di energia anche se, classicamente, non ne avrebbe l'energia sufficiente. — Effetto tunnel quantistico
Il calore scambiato in una reazione chimica dipende solo dagli stati iniziale e finale, non dal percorso. — Legge di Hess
La probabilità di un evento si aggiorna alla luce di nuove informazioni secondo una regola precisa. — Teorema di Bayes
Prima di essere misurata, una particella quantistica può trovarsi in una sovrapposizione di più stati. — meccanica quantistica
Alcuni gas atmosferici trattengono il calore, riscaldando la superficie terrestre. — effetto serra
La crosta terrestre è divisa in placche che si muovono lentamente nel tempo. — Teoria della tettonica delle placche, Alfred Wegener
In ogni sistema matematico sufficientemente potente esistono affermazioni vere che non possono essere dimostrate al suo interno. — Teorema di incompletezza, Kurt Gödel
Il codice genetico è quasi universale: la stessa sequenza di basi codifica gli stessi amminoacidi in quasi tutti gli organismi. — biologia molecolare
399 a.C. — Socrate viene condannato a morte dal tribunale ateniese.
1291 — Nasce la Confederazione Svizzera con il Patto federale.
1607 — Fondazione di Jamestown, primo insediamento inglese permanente in America.
1865 — Termina la Guerra di secessione americana con l'abolizione della schiavitù.
1889 — Inaugurazione della Torre Eiffel a Parigi.
1911 — Ernest Rutherford propone il modello nucleare dell'atomo.
1945 — Le bombe atomiche vengono sganciate su Hiroshima e Nagasaki.
1961 — Yuri Gagarin diventa il primo essere umano nello spazio.
Una nana bianca ha una massa paragonabile al Sole racchiusa in un volume simile a quello della Terra. — astrofisica
Il buco nero supermassiccio al centro della Via Lattea ha una massa di circa 4 milioni di volte quella del Sole. — astronomia
La radiazione cosmica di fondo è il bagliore residuo del Big Bang, osservabile in ogni direzione del cielo. — cosmologia
Nell'universo osservabile ci sono più stelle che granelli di sabbia su tutte le spiagge della Terra, secondo le stime attuali. — astronomia
Il Sistema Solare impiega circa 230 milioni di anni per completare un'orbita attorno al centro della Via Lattea. — astronomia
La prima immagine diretta di un buco nero fu pubblicata nel 2019, grazie all'Event Horizon Telescope. — astronomia
I mitocondri, "centrali energetiche" delle cellule, discendono probabilmente da batteri inglobati da altre cellule miliardi di anni fa. — teoria dell'endosimbiosi
I primi vertebrati comparvero negli oceani circa 500 milioni di anni fa. — origine della vita
Le prime piante con semi si diffusero sulla terraferma a partire da circa 370 milioni di anni fa. — origine della vita
I dinosauri dominarono la Terra per oltre 160 milioni di anni, fino alla loro estinzione circa 66 milioni di anni fa. — storia della vita
L'uso sistematico del fuoco da parte degli ominidi risale probabilmente a circa 1 milione di anni fa. — evoluzione umana
Le più antiche pitture rupestri conosciute, come quelle di Lascaux e Altamira, risalgono a circa 15.000-20.000 anni fa. — preistoria
La scrittura comparve indipendentemente in diverse civiltà a partire da circa 5.000 anni fa. — storia dell'uomo
Homo sapiens e Neanderthal convissero e si incrociarono in Europa e Medio Oriente per migliaia di anni. — evoluzione umana
Secondo il mito, Atena nacque già adulta e armata dalla testa di Zeus. — mitologia greca
Persefone, rapita da Ade, trascorre parte dell'anno negli inferi: il mito spiega così l'alternarsi delle stagioni. — mitologia greca
Eracle dovette compiere dodici fatiche per espiare le proprie colpe. — mitologia greca
Narciso si innamorò del proprio riflesso, da cui prende nome il narcisismo. — mitologia greca
Le Sirene ammaliavano i marinai con il loro canto, spingendoli verso naufragi mortali. — mitologia greca
Sisifo fu condannato a spingere per l'eternità un masso su una montagna, che ogni volta ricadeva a valle. — mitologia greca
Il Vello d'Oro fu conquistato da Giasone con l'aiuto degli Argonauti e della maga Medea. — mitologia greca
L'oracolo di Delfi, dedicato ad Apollo, era consultato per conoscere il volere degli dei. — mitologia greca
Il mondo è composto da quattro elementi: terra, acqua, aria e fuoco. — Empedocle
L'aria è il principio primo di tutte le cose. — Anassimene
Achille non potrà mai raggiungere la tartaruga, se essa parte in vantaggio. — Paradosso di Zenone di Elea
Se i buoi avessero mani, raffigurerebbero gli dei a forma di buoi. — Senofane
Il sapere filosofico e la fede religiosa non sono in contraddizione tra loro. — idea centrale di Averroè
Avicenna sistematizzò il sapere medico antico nel "Canone di medicina", testo di riferimento per secoli. — Avicenna
La vera perfezione dell'uomo consiste nell'acquisizione della conoscenza. — idea centrale di Mosè Maimonide
La libertà politica si garantisce dividendo il potere tra organi diversi. — idea centrale di Montesquieu
L'attenzione è la forma più rara e pura di generosità. — Simone Weil
Conosci il nemico e conosci te stesso: in cento battaglie non correrai mai pericolo. — Sun Tzu, "L'arte della guerra"
Il flusso del campo elettrico attraverso una superficie chiusa è proporzionale alla carica racchiusa. — Legge di Gauss
Quando due o più onde si sovrappongono, l'onda risultante è la somma delle singole onde. — Principio di sovrapposizione
Ad ogni simmetria continua di un sistema fisico corrisponde una legge di conservazione. — Teorema di Noether
Ripetendo un esperimento un numero sufficiente di volte, la media dei risultati converge al valore atteso. — Legge dei grandi numeri
Osserviamo un universo compatibile con l'esistenza di osservatori, perché altrimenti non saremmo qui a osservarlo. — Principio antropico
Massa inerziale e massa gravitazionale sono equivalenti. — Principio di equivalenza, Einstein
Un fotone che collide con un elettrone perde energia, aumentando la propria lunghezza d'onda. — Effetto Compton
Anche i buchi neri emettono una debole radiazione e possono, in teoria, evaporare nel tempo. — Radiazione di Hawking
La somma di molte variabili casuali indipendenti tende a distribuirsi secondo una curva a campana. — Teorema del limite centrale
Un sistema fisico evolve seguendo il percorso che minimizza una grandezza chiamata azione. — Principio di minima azione
3100 a.C. circa — Unificazione dell'Alto e Basso Egitto sotto il primo faraone.
509 a.C. — Nasce la Repubblica romana.
27 a.C. — Ottaviano Augusto diventa il primo imperatore romano.
800 — Carlo Magno viene incoronato imperatore del Sacro Romano Impero.
1066 — Battaglia di Hastings: Guglielmo il Conquistatore conquista l'Inghilterra.
1799 — Napoleone prende il potere in Francia con il colpo di stato del 18 brumaio.
1839 — Nascita ufficiale della fotografia con il dagherrotipo di Louis Daguerre.
1990 — Tim Berners-Lee sviluppa il World Wide Web.
Il Sole si trova a circa 26.000 anni luce dal centro della Via Lattea. — astronomia
Marte ospita l'Olympus Mons, il vulcano più alto conosciuto nel Sistema Solare. — astronomia
Le stelle di neutroni, le pulsar, possono ruotare centinaia di volte al secondo su se stesse. — astrofisica
Le galassie più distanti mai osservate si trovano a oltre 13 miliardi di anni luce da noi. — astronomia
Titano, luna di Saturno, è l'unico corpo del Sistema Solare oltre alla Terra con laghi stabili di liquido in superficie. — astronomia
Il telescopio spaziale Hubble è in orbita attorno alla Terra dal 1990. — astronomia
Le prime tracce di fotosintesi risalgono a circa 3,4 miliardi di anni fa. — origine della vita
Le stromatoliti, strutture create da microrganismi, sono tra le più antiche testimonianze di vita sulla Terra. — origine della vita
La simbiosi tra diverse forme di vita ha giocato un ruolo chiave nell'evoluzione delle cellule complesse. — origine della vita
L'estinzione di massa del Permiano-Triassico, circa 252 milioni di anni fa, eliminò la maggior parte delle specie viventi. — storia della vita
Homo floresiensis, soprannominato "l'uomo di Flores", era una specie umana di piccola statura vissuta in Indonesia. — evoluzione umana
La domesticazione del cane risale a circa 15.000-30.000 anni fa, rendendolo il primo animale addomesticato dall'uomo. — storia dell'uomo
La Rivoluzione Neolitica portò l'uomo da una vita nomade di caccia e raccolta a comunità agricole stanziali. — storia dell'uomo
Le prime città conosciute, come Uruk e Çatalhöyük, sorsero tra 9.000 e 6.000 anni fa. — storia dell'uomo
Orfeo scese negli Inferi per riportare in vita Euridice, ma la perse per aver guardato indietro. — mitologia greca
Medusa aveva serpenti al posto dei capelli e trasformava in pietra chiunque la guardasse negli occhi. — mitologia greca
Perseo decapitò Medusa con l'aiuto di uno scudo riflettente donato da Atena. — mitologia greca
Edipo, senza saperlo, uccise il padre e sposò la madre, adempiendo una profezia che aveva cercato di evitare. — mitologia greca
Cassandra ricevette da Apollo il dono della profezia, ma anche la maledizione di non essere mai creduta. — mitologia greca
Atlante fu condannato a sorreggere il peso della volta celeste sulle proprie spalle. — mitologia greca
Pigmalione si innamorò di una statua da lui scolpita, che Afrodite trasformò in donna. — mitologia greca
Eco, punita da Era, poteva solo ripetere le ultime parole altrui, e si consumò d'amore per Narciso. — mitologia greca
Conosci l'arte di vivere bene e morire bene: sono la stessa disciplina. — Seneca
Il denaro non ha odore. — frase attribuita all'imperatore Vespasiano
È molto più sicuro essere temuti che amati, se non si possono avere entrambe le cose. — Niccolò Machiavelli, "Il Principe"
Utopia: un luogo che non esiste, ma che aiuta a immaginare un mondo migliore. — ispirato a Tommaso Moro
Fecero un deserto e lo chiamarono pace. — riportata da Tacito, "Agricola"
Ama e fa' ciò che vuoi. — Sant'Agostino
Le forme di governo si succedono in un ciclo continuo di corruzione e rinascita. — Polibio, teoria dell'anaciclosi
È meglio essere un essere umano insoddisfatto che un maiale soddisfatto. — John Stuart Mill
Non esiste vento favorevole per il marinaio che non sa dove andare. — attribuita a Seneca
Il piacere in sé non è un male, ma alcune sue fonti portano più dolori di quanti piaceri diano. — Epicuro
La forza centripeta necessaria per mantenere un corpo in moto circolare è diretta verso il centro della traiettoria. — meccanica classica
Il periodo di un pendolo semplice dipende dalla lunghezza e dall'accelerazione di gravità, non dalla massa. — legge del pendolo, Galileo Galilei
La resistenza di un conduttore aumenta con la sua lunghezza e diminuisce con la sua sezione. — seconda legge di Ohm
Un gas reale si discosta dal comportamento ideale a causa delle interazioni tra le molecole. — equazione di Van der Waals
Una mole di sostanza contiene circa 6,022 × 10²³ particelle. — numero di Avogadro
La pressione atmosferica diminuisce con l'aumentare dell'altitudine. — fisica dell'atmosfera
Il suono si propaga più velocemente nei solidi che nei liquidi, e più velocemente nei liquidi che nei gas. — acustica
La quantità di sostanza trasformata in una reazione elettrochimica è proporzionale alla carica che l'attraversa. — leggi di Faraday sull'elettrolisi
Ogni corpo emette radiazione elettromagnetica in funzione della propria temperatura. — legge di Planck sulla radiazione del corpo nero
Le reazioni chimiche avvengono più facilmente quando le molecole hanno orientazione corretta ed energia sufficiente. — teoria delle collisioni
218 a.C. — Annibale attraversa le Alpi con il suo esercito durante la Seconda guerra punica.
313 — Editto di Milano: Costantino concede libertà di culto ai cristiani nell'Impero Romano.
395 — L'Impero Romano si divide definitivamente in Impero d'Oriente e d'Occidente.
1130 — Ruggero II viene incoronato re di Sicilia, unificando i domini normanni del sud Italia.
1648 — La Pace di Westfalia pone fine alla Guerra dei Trent'anni.
1917 — La Rivoluzione russa porta i bolscevichi al potere guidati da Lenin.
1918 — Termina la Prima guerra mondiale.
1991 — Dissoluzione dell'Unione Sovietica.
Il Sistema Solare si trova in un braccio a spirale della Via Lattea chiamato Braccio di Orione. — astronomia
Giove è il pianeta più massiccio del Sistema Solare: la sua massa supera il doppio di tutti gli altri pianeti messi insieme. — astronomia
La Grande Macchia Rossa di Giove è una tempesta che infuria da almeno 300 anni. — astronomia
Le comete sono resti ghiacciati risalenti alla formazione del Sistema Solare, circa 4,6 miliardi di anni fa. — astronomia
La fusione nucleare all'interno delle stelle trasforma idrogeno in elio, producendo l'energia che le fa brillare. — astrofisica
Nel 2015 fu rilevata per la prima volta un'onda gravitazionale, generata dalla fusione di due buchi neri. — astrofisica
I funghi furono tra i primi organismi a colonizzare le terre emerse, precedendo le piante. — origine della vita
Gli insetti comparvero sulla Terra circa 400 milioni di anni fa, e oggi rappresentano la maggioranza delle specie animali conosciute. — storia della vita
I primi mammiferi, di piccole dimensioni, convissero con i dinosauri per oltre 100 milioni di anni. — storia della vita
Dopo l'estinzione dei dinosauri, i mammiferi si diversificarono rapidamente occupando le nicchie ecologiche rimaste libere. — storia della vita
Homo neanderthalensis aveva una capacità cranica mediamente superiore a quella dell'uomo moderno. — evoluzione umana
La ruota fu inventata in Mesopotamia intorno al 3500 a.C., inizialmente per uso vasaio più che per il trasporto. — storia dell'uomo
La metallurgia del bronzo si diffuse a partire da circa 3300 a.C., dando inizio all'Età del Bronzo. — storia dell'uomo
L'Età del Ferro iniziò intorno al 1200 a.C. in Medio Oriente, con la diffusione della lavorazione del ferro. — storia dell'uomo
Pandora fu la prima donna secondo il mito, creata da Efesto su ordine di Zeus. — mitologia greca
Il tallone d'Achille, unico punto vulnerabile dell'eroe, gli fu fatale durante la guerra di Troia. — mitologia greca
Il Cavallo di Troia permise ai Greci di espugnare la città con l'inganno, dopo dieci anni d'assedio. — mitologia greca
Circe trasformò i compagni di Ulisse in maiali con le sue arti magiche. — mitologia greca
Scilla e Cariddi erano due mostri marini che minacciavano i naviganti nello stretto di Messina, secondo il mito. — mitologia greca
Demetra, dea dell'agricoltura, fece appassire la terra per il dolore del rapimento della figlia Persefone. — mitologia greca
Dedalo costruì il labirinto di Creta su richiesta del re Minosse per rinchiudervi il Minotauro. — mitologia greca
Le tre Moire tessevano, misuravano e recidevano il filo della vita di ogni essere umano. — mitologia greca
Meglio un'ingiustizia subita che commessa. — massima di tradizione socratica
Non si può mai entrare due volte nello stesso fiume. — Eraclito
La felicità non è una meta, ma un modo di viaggiare. — pensiero stoico
La luce viaggia nel vuoto a circa 299.792 km al secondo, un limite invalicabile per la materia. — fisica
Il calore si trasmette da un corpo più caldo a uno più freddo fino al raggiungimento dell'equilibrio termico. — termodinamica
La forza di attrito si oppone al moto relativo tra due superfici a contatto. — meccanica classica
1936-1939 — Guerra civile spagnola.
2001 — Attentati dell'11 settembre negli Stati Uniti.
La Terra impiega circa 365 giorni e 6 ore per completare un'orbita attorno al Sole. — astronomia
Le stelle che vediamo di notte sono spesso già "vecchie": la loro luce ha impiegato anni o secoli per raggiungerci. — astronomia
Gli anfibi furono i primi vertebrati a colonizzare stabilmente la terraferma, circa 370 milioni di anni fa. — storia della vita
I primi uccelli si evolsero da dinosauri piumati circa 150 milioni di anni fa. — storia della vita
La scrittura alfabetica, antenata di molti alfabeti moderni, si sviluppò nell'area fenicia intorno al 1050 a.C. — storia dell'uomo
Il vaso di Pandora era, nella versione più antica del mito, un'anfora (pithos). — mitologia greca
Zeus, Poseidone e Ade si divisero il dominio del mondo su cielo, mare e regno dei morti. — mitologia greca
Ascolta il doppio di quanto parli: hai due orecchie e una sola bocca.
Un buon leader chiede, non impone.
La critica costruttiva si fa in privato, il complimento in pubblico.
Chi non ammette errori, ne farà di peggiori.
Il rispetto si guadagna con la coerenza, non con l'autorità.
Prometti poco, mantieni molto.
Un "no" detto in tempo vale più di un "sì" forzato.
La fiducia si costruisce lentamente e si perde in un istante.
Chi delega bene, moltiplica il proprio tempo.
Non confondere la fretta con l'efficienza.
Le riunioni utili hanno un obiettivo chiaro, non solo un orario.
Un problema condiviso è già mezzo risolto.
Chi ascolta per capire, non per rispondere, impara di più.
La pazienza è una competenza, non solo una virtù.
Il silenzio, a volte, è la risposta più saggia.
Chiedi scusa quando serve, non quando conviene.
Un collega aiutato oggi è un alleato domani.
La reputazione si costruisce in anni e si distrugge in minuti.
Non giudicare una persona da un solo giorno storto.
Chi semina fiducia, raccoglie collaborazione.
Meglio una verità scomoda che una bugia comoda.
L'empatia non è debolezza, è intelligenza applicata alle relazioni.
Prima di correggere qualcuno, chiediti se lo faresti anche in pubblico su te stesso.
Le persone dimenticano cosa hai detto, ma non come le hai fatte sentire.
Un buon compromesso lascia entrambe le parti leggermente insoddisfatte, e va bene così.
La qualità del lavoro parla più a lungo di qualsiasi scusa.
Chi si assume la colpa impara, chi la scarica si ripete.
Organizzare il tempo è organizzare le priorità, non gli orari.
Non tutte le battaglie meritano di essere combattute.
La disponibilità ha un limite: proteggila.
Un feedback dato con rispetto vale più di una lode superficiale.
Chiedere aiuto non è un fallimento, è strategia.
La costanza supera il talento quando il talento non si allena.
Il lavoro di squadra funziona quando ognuno conosce il proprio ruolo, non solo il proprio compito.
Chi ascolta le critiche con calma, cresce più in fretta di chi le respinge.
Le scadenze si rispettano meglio se comunicate per tempo, non imposte all'ultimo.
Un buon rapporto professionale si basa su aspettative chiare, non su presunzioni.
La gentilezza non costa nulla, ma vale moltissimo.
Chi cambia idea davanti a un'evidenza migliore mostra intelligenza, non incoerenza.
Non è debolezza dire "non lo so", è onestà.
Il tempo dedicato ad ascoltare un collaboratore raramente è tempo perso.
Le regole chiare prevengono più conflitti di mille buone intenzioni.
Un errore ammesso subito costa meno di un errore nascosto a lungo.
La produttività non si misura in ore, ma in risultati.
Chi rispetta il tempo altrui, rispetta anche il proprio.
Le relazioni si nutrono di piccoli gesti costanti, non di grandi gesti occasionali.
Meglio chiedere una volta in più che sbagliare una volta in meno.
La calma, in una discussione, è spesso l'argomento più forte.
Chi impara a dire "ho bisogno di aiuto" costruisce squadre più solide.
Il vero valore di una persona si vede in come tratta chi non può ricambiarle nulla.
Il fiume Nilo e il fiume Rio delle Amazzoni si contendono il primato di corso d'acqua più lungo del pianeta. — geografia
La Russia attraversa 11 fusi orari, più di qualsiasi altro paese al mondo. — geografia
Il Sahara è il deserto caldo più esteso del mondo, ma il deserto più grande in assoluto è l'Antartide. — geografia
La Fossa delle Marianne, nell'oceano Pacifico, è il punto più profondo conosciuto degli oceani terrestri. — geografia
Il Vaticano è lo stato indipendente più piccolo del mondo per superficie. — geografia
Il Monte Everest è la montagna più alta sul livello del mare, ma il vulcano Mauna Kea, misurato dalla base sui fondali oceanici, è più alto in totale. — geografia
Il lago Baikal, in Siberia, contiene circa il 20% dell'acqua dolce liquida non ghiacciata del pianeta. — geografia
L'Islanda non ha zanzare, una delle poche regioni abitate al mondo dove questo insetto non è presente. — natura
I polpi hanno tre cuori e sangue di colore blu. — natura
Le formiche non hanno polmoni: respirano attraverso piccoli fori chiamati spiracoli. — natura
Alcuni alberi di sequoia in California sono vissuti per oltre 3.000 anni. — natura
I colibrì sono gli unici uccelli in grado di volare all'indietro. — natura
Le balenottere azzurre sono gli animali più grandi mai esistiti sulla Terra, dinosauri inclusi. — natura
Le tartarughe delle Galápagos possono vivere oltre 100 anni. — natura
I koala dormono in media tra le 18 e le 22 ore al giorno. — natura
Il miele non scade mai, se conservato correttamente: sono stati trovati vasetti commestibili in antiche tombe egizie. — curiosità
Il cuore umano batte in media circa 100.000 volte al giorno. — corpo umano
Gli esseri umani condividono circa il 60% del proprio DNA con le banane. — corpo umano
Il corpo umano adulto contiene circa 37.000 miliardi di cellule. — corpo umano
La pelle è l'organo più esteso del corpo umano. — corpo umano
Il naso umano può distinguere oltre mille miliardi di odori diversi, secondo alcune stime scientifiche. — corpo umano
Le unghie crescono più velocemente sulle mani che usiamo di più. — corpo umano
Il cervello umano consuma circa il 20% dell'energia totale del corpo, pur pesando solo il 2% del peso corporeo. — corpo umano
La lingua italiana deriva in gran parte dal fiorentino del Trecento, grazie soprattutto a Dante Alighieri. — lingue
Il mandarino standard è la lingua materna più parlata al mondo per numero di parlanti nativi. — lingue
L'alfabeto greco ha dato origine, attraverso l'etrusco, anche all'alfabeto latino che usiamo oggi. — lingue
La parola "OK" è tra le espressioni più riconosciute al mondo, in quasi ogni lingua. — lingue
Il primo messaggio email della storia fu inviato nel 1971 da Ray Tomlinson. — tecnologia
Il primo sito web della storia è ancora online ed è stato pubblicato nel 1991 al CERN. — tecnologia
Lo smartphone medio contiene più potenza di calcolo dei computer usati per le missioni Apollo sulla Luna. — tecnologia
Il termine "bug" per indicare un errore informatico nacque quando fu trovata una vera falena in un computer nel 1947. — tecnologia
La password più comune al mondo resta ancora oggi una variante di "123456", secondo diverse analisi di sicurezza. — tecnologia
Il primo videogioco commerciale, Pong, fu lanciato nel 1972. — tecnologia
La Grande Muraglia Cinese non è visibile a occhio nudo dallo spazio, contrariamente a un mito molto diffuso. — curiosità
Il cioccolato fu inizialmente consumato come bevanda amara dalle civiltà mesoamericane, non come dolce solido. — curiosità
La pizza margherita prende il nome dalla regina Margherita di Savoia, a cui fu dedicata nel 1889. — curiosità
Il caffè è, dopo il petrolio, una delle materie prime più scambiate al mondo. — curiosità
Venezia è costruita su oltre 100 isolette collegate da centinaia di ponti. — geografia
Il Giappone è composto da oltre 6.800 isole, anche se solo circa 400 sono abitate. — geografia
L'Australia è sia il paese più grande che l'isola più grande del mondo. — geografia
Il numero di stelle visibili a occhio nudo in una notte serena, senza inquinamento luminoso, è di circa 2.500-3.000. — astronomia
Un fulmine può raggiungere una temperatura cinque volte superiore a quella della superficie del Sole. — natura
I fiocchi di neve non hanno mai, secondo l'osservazione scientifica, una forma esattamente identica l'uno all'altro. — natura
Lo Stretto di Gibilterra separa l'Europa dall'Africa con appena 14 km di mare aperto nel punto più stretto. — geografia
La Groenlandia, pur chiamandosi "terra verde", è ricoperta per oltre l'80% da ghiacci perenni. — geografia
Il record di permanenza continuativa nello spazio da parte di un essere umano supera i 400 giorni consecutivi. — esplorazione spaziale
La biblioteca di Alessandria d'Egitto fu uno dei più grandi centri di sapere del mondo antico, poi andato perduto nel corso dei secoli. — storia della cultura
Gli scacchi, nella loro forma antica, nacquero probabilmente in India intorno al VI secolo. — giochi e cultura
Il violino Stradivari deve il proprio pregio anche alla particolare qualità del legno usato nel Seicento. — musica
La musica classica veniva composta, in origine, quasi sempre su commissione di corti o chiese. — musica
Il pane è uno degli alimenti più antichi preparati dall'uomo, con tracce risalenti a oltre 14.000 anni fa. — storia dell'alimentazione
Le Olimpiadi moderne furono fondate nel 1896 da Pierre de Coubertin, ispirandosi ai giochi dell'antica Grecia. — storia dello sport
La Cappella Sistina fu affrescata da Michelangelo tra il 1508 e il 1512. — arte
Il Colosseo di Roma poteva ospitare fino a circa 50.000-80.000 spettatori. — architettura
La Gioconda di Leonardo da Vinci è esposta al Museo del Louvre di Parigi dal 1797. — arte
Il Partenone di Atene fu costruito nel V secolo a.C. in onore della dea Atena. — architettura
La Torre di Pisa pende a causa di un cedimento del terreno iniziato già durante la sua costruzione, nel XII secolo. — architettura
Il Taj Mahal fu fatto costruire nel Seicento dall'imperatore Shah Jahan in memoria della moglie. — architettura
Van Gogh vendette in vita un solo dipinto, nonostante la sua vasta produzione artistica. — arte
Il Duomo di Firenze fu completato con una cupola progettata da Filippo Brunelleschi nel Quattrocento. — architettura
La Statua della Libertà fu un dono della Francia agli Stati Uniti, inaugurata nel 1886. — arte
Machu Picchu, cittadella Inca in Perù, fu costruita nel XV secolo senza l'uso della ruota o del ferro. — architettura
Pompei rimase sepolta dalle ceneri del Vesuvio per quasi 1700 anni prima di essere riscoperta. — archeologia
I mosaici di Ravenna, risalenti al V-VI secolo, sono tra i più importanti esempi di arte paleocristiana e bizantina in Italia. — arte
Il numero pi greco (π) ha infinite cifre decimali non periodiche. — matematica
Euclide sistematizzò la geometria nei suoi "Elementi", intorno al 300 a.C. — matematica
Lo zero come cifra numerica fu sviluppato in India, prima di diffondersi nel mondo arabo ed europeo. — matematica
La sequenza di Fibonacci ricorre spesso in natura, ad esempio nella disposizione dei semi di girasole. — matematica
Il numero aureo, circa 1,618, è considerato da secoli un rapporto esteticamente armonioso. — matematica
I numeri primi sono infiniti, come dimostrato già da Euclide. — matematica
Il sistema numerico decimale che usiamo oggi si basa sulla numerazione posizionale indo-araba. — matematica
Pitagora e la sua scuola attribuivano ai numeri un significato quasi mistico, oltre che matematico. — matematica
Il concetto di infinito matematico fu formalizzato rigorosamente solo nell'Ottocento da Georg Cantor. — matematica
Gli algoritmi che regolano oggi computer e internet derivano da principi di logica matematica sviluppati nei secoli. — matematica
L'Ultimo Teorema di Fermat, enunciato nel Seicento, fu dimostrato solo nel 1994, dopo oltre 350 anni. — matematica
Il calcolo delle probabilità nacque nel Seicento dallo studio dei giochi d'azzardo. — matematica
L'Iliade e l'Odissea sono tradizionalmente attribuite al poeta greco Omero. — letteratura
La Divina Commedia di Dante Alighieri fu scritta nei primi anni del Trecento. — letteratura
Il romanzo Don Chisciotte di Cervantes è considerato tra le opere fondanti del romanzo moderno. — letteratura
Le opere di Shakespeare sono state tradotte in più lingue di quelle di qualunque altro autore in lingua inglese. — letteratura
I Promessi Sposi di Alessandro Manzoni contribuirono a definire l'italiano moderno come lingua letteraria. — letteratura
Le Mille e una notte raccoglie racconti provenienti da tradizioni persiane, arabe e indiane. — letteratura
Il termine "romanzo" derivava originariamente dal fatto che queste opere erano scritte in lingua "romanza", cioè volgare, e non in latino. — letteratura
La biblioteca di Alessandria custodiva, secondo le fonti antiche, centinaia di migliaia di rotoli di papiro. — storia della cultura
Secondo la tradizione, Omero sarebbe stato cieco. — letteratura
Il termine "biblioteca" deriva dal greco e significa letteralmente "custodia dei libri". — lingue
Ludwig van Beethoven compose alcune delle sue opere più celebri quando era ormai quasi completamente sordo. — musica
Il pianoforte fu inventato agli inizi del Settecento da Bartolomeo Cristofori. — musica
La notazione musicale moderna si sviluppò a partire dal Medioevo, in ambito monastico. — musica
Wolfgang Amadeus Mozart iniziò a comporre musica già a cinque anni d'età. — musica
Il termine "opera lirica" nacque in Italia tra Cinquecento e Seicento. — musica
Il diapason standard usato oggi per accordare gli strumenti fissa il La a 440 Hz. — musica
Gli antichi greci consideravano la musica strettamente legata alla matematica e all'armonia dei numeri. — musica
Il canto gregoriano prende il nome da papa Gregorio Magno, a cui la tradizione ne attribuisce la sistemazione. — musica
I fratelli Lumière proiettarono pubblicamente i primi filmati nel 1895 a Parigi. — cinema
Il cinema muto fu accompagnato per decenni da musica dal vivo nelle sale. — cinema
Il primo film sonoro di grande successo commerciale fu "Il cantante di jazz", nel 1927. — cinema
Il teatro greco antico nacque come parte di cerimonie religiose in onore del dio Dioniso. — teatro
Le maschere del teatro greco servivano anche ad amplificare la voce degli attori. — teatro
La Commedia dell'Arte, nata in Italia nel Cinquecento, si basava su personaggi fissi e improvvisazione. — teatro
Il colore arrivò stabilmente al cinema solo a partire dagli anni Trenta del Novecento. — cinema
I primi effetti speciali cinematografici furono sperimentati già a fine Ottocento dal regista Georges Méliès. — cinema
La Terra ha un'età stimata di circa 4,54 miliardi di anni. — geologia
Il nucleo interno della Terra è solido nonostante le temperature elevatissime, a causa dell'enorme pressione. — geologia
La crosta oceanica è generalmente più sottile e più giovane di quella continentale. — geologia
I terremoti si originano prevalentemente lungo i margini delle placche tettoniche. — geologia
L'eruzione del vulcano Krakatoa, nel 1883, produsse uno dei suoni più forti mai registrati nella storia. — geologia
Le montagne dell'Himalaya continuano a crescere di alcuni millimetri ogni anno per la collisione tra placche. — geologia
Il diamante è una delle sostanze naturali più dure conosciute, composta interamente da carbonio. — geologia
Le rocce sedimentarie si formano per accumulo e compattazione di detriti nel corso di lunghi periodi di tempo. — geologia
Il ciclo delle rocce descrive la trasformazione continua tra rocce ignee, sedimentarie e metamorfiche. — geologia
Circa il 71% della superficie terrestre è ricoperto da acqua. — geografia fisica
L'acqua dolce liquida disponibile rappresenta solo una piccola percentuale dell'acqua totale presente sulla Terra. — geografia fisica
Le correnti oceaniche influenzano in modo determinante il clima dei continenti. — scienze della Terra
Il campo magnetico terrestre protegge il pianeta da gran parte delle radiazioni solari dannose. — geofisica
I poli magnetici terrestri non coincidono esattamente con i poli geografici. — geofisica
L'atmosfera terrestre è composta per circa il 78% da azoto e il 21% da ossigeno. — scienze della Terra
I ghiacciai custodiscono al loro interno informazioni sul clima di migliaia di anni fa. — scienze della Terra
Le fosse oceaniche più profonde superano i 10.000 metri di profondità. — geologia
Il sistema circolatorio umano è composto da circa 100.000 km di vasi sanguigni. — anatomia
Il fegato è l'unico organo interno umano capace di rigenerarsi parzialmente dopo una lesione. — anatomia
Il vaccino contro il vaiolo, sviluppato da Edward Jenner nel 1796, fu tra i primi vaccini della storia. — storia della medicina
La scoperta dei gruppi sanguigni da parte di Karl Landsteiner, nel 1901, rese possibili le trasfusioni sicure. — storia della medicina
Le ossa del corpo umano adulto sono 206. — anatomia
Il cuore umano ha quattro camere: due atri e due ventricoli. — anatomia
Il sistema immunitario è in grado di "ricordare" agenti patogeni incontrati in precedenza. — medicina
I raggi X furono scoperti casualmente da Wilhelm Röntgen nel 1895. — storia della medicina
Il sonno svolge un ruolo fondamentale nel consolidamento della memoria. — medicina
Il corpo umano produce circa un litro e mezzo di saliva al giorno. — anatomia
I polmoni umani contengono milioni di piccole sacche chiamate alveoli, dove avviene lo scambio di gas. — anatomia
Il sistema nervoso trasmette impulsi elettrici a velocità che possono superare i 100 metri al secondo. — anatomia
La scoperta della struttura del DNA, nel 1953, aprì la strada alla genetica moderna. — storia della medicina
Il primo trapianto di cuore umano riuscito fu eseguito nel 1967 da Christiaan Barnard. — storia della medicina
Le impronte digitali sono uniche per ogni individuo, gemelli identici inclusi. — anatomia
Il corpo umano è composto per circa il 60% da acqua. — anatomia
La ruota idraulica fu tra le prime macchine capaci di sfruttare l'energia naturale per il lavoro umano. — storia della tecnica
La bussola, inventata in Cina, permise per la prima volta una navigazione più precisa in mare aperto. — storia della tecnica
La polvere da sparo fu scoperta in Cina, probabilmente durante esperimenti alchemici. — storia della tecnica
Il motore a vapore, perfezionato da James Watt nel Settecento, fu tra i motori della Rivoluzione Industriale. — storia della tecnica
Il telegrafo elettrico rese possibile, per la prima volta, la comunicazione quasi istantanea a lunga distanza. — storia della tecnica
La lampadina a incandescenza fu perfezionata da Thomas Edison alla fine dell'Ottocento. — storia della tecnica
Il frigorifero domestico si diffuse su larga scala solo a partire dal Novecento. — storia della tecnica
Il transistor, inventato nel 1947, sostituì gradualmente le valvole termoioniche nell'elettronica. — storia della tecnica
Il primo microprocessore commerciale fu introdotto nel 1971. — storia della tecnica
Il codice Morse permise di trasmettere messaggi complessi tramite semplici impulsi elettrici. — storia della tecnica
Il GPS, inizialmente sviluppato per uso militare, divenne di uso civile diffuso a partire dagli anni Novanta. — storia della tecnica
La plastica sintetica moderna nacque agli inizi del Novecento con l'invenzione della bachelite. — storia della tecnica
Il primo computer elettronico programmabile, l'ENIAC, occupava un'intera stanza. — storia della tecnica
Il velcro fu inventato osservando al microscopio i piccoli uncini dei semi di bardana attaccati al pelo di un cane. — storia della tecnica
Il forno a microonde nacque per caso, dall'osservazione dello scioglimento di una barretta di cioccolato vicino a un magnetron. — storia della tecnica
Il codice a barre fu brevettato negli anni Cinquanta, ma si diffuse commercialmente solo un ventennio più tardi. — storia della tecnica
Oggi dobbiamo andare a fare la spesa — Today we have to go grocery shopping
Vado ad accompagnare i bambini a scuola — I'm going to take the kids to school
What would you like for breakfast? — Cosa vuoi per colazione?
Good morning, I'd like to buy a bus ticket — Buongiorno, vorrei comprare un biglietto dell'autobus
A che ora parte il treno? — What time does the train leave?
Can you pass me the salt, please? — Puoi passarmi il sale, per favore?
Ho lasciato le chiavi in macchina — I left the keys in the car
Do you have any plans for the weekend? — Hai programmi per il weekend?
Devo portare il cane a fare una passeggiata — I need to take the dog for a walk
It's starting to rain, take an umbrella — Sta iniziando a piovere, prendi un ombrello
Quanto costa questo, per favore? — How much is this, please?
Can I have the bill, please? — Posso avere il conto, per favore?
Mi si è scaricato il telefono — My phone battery died
I'll call you back in five minutes — Ti richiamo tra cinque minuti
Dove hai parcheggiato la macchina? — Where did you park the car?
Let's meet at the usual place — Vediamoci nel posto solito
Sto aspettando l'autobus da venti minuti — I've been waiting for the bus for twenty minutes
Do you know where the nearest pharmacy is? — Sai dov'è la farmacia più vicina?
Ho dimenticato l'ombrello a casa — I forgot my umbrella at home
Turn left at the next traffic light — Gira a sinistra al prossimo semaforo
Che tempo fa oggi? — What's the weather like today?
I'm running a bit late, sorry — Sono un po' in ritardo, scusa
Puoi abbassare la musica, per favore? — Can you turn down the music, please?
I need to charge my phone — Devo caricare il telefono
Andiamo a fare due passi dopo cena? — Shall we go for a walk after dinner?
Can you help me carry these bags? — Puoi aiutarmi a portare queste borse?
Ho mal di testa, prendo un'aspirina — I have a headache, I'll take an aspirin
What time do you usually wake up? — A che ora ti svegli di solito?
Devo fare il pieno di benzina — I need to fill up the tank
I booked a table for two at eight — Ho prenotato un tavolo per due alle otto
Ci vediamo domani mattina — See you tomorrow morning
Do you want tea or coffee? — Vuoi tè o caffè?
Il bucato è quasi asciutto — The laundry is almost dry
Can you pick up some milk on your way home? — Puoi prendere del latte tornando a casa?
Sto cercando parcheggio da dieci minuti — I've been looking for parking for ten minutes
The Wi-Fi isn't working — Il Wi-Fi non funziona
Ho appuntamento dal dentista alle tre — I have a dentist appointment at three
Would you like a hand with dinner? — Vuoi una mano con la cena?
Ci siamo quasi, manca poco — We're almost there, not much left
Excuse me, is this seat taken? — Scusi, questo posto è occupato?
Devo fare benzina prima di partire — I need to get gas before we leave
Can you turn the heating on, it's cold — Puoi accendere il riscaldamento, fa freddo
Vado a buttare la spazzatura — I'm going to take out the trash
I'll be there in ten minutes — Sarò lì tra dieci minuti
Hai finito i compiti? — Have you finished your homework?
Let's set the table for dinner — Apparecchiamo la tavola per cena
Domani ho una riunione importante — I have an important meeting tomorrow
Can I open the window? It's a bit warm — Posso aprire la finestra? Fa un po' caldo
Ho bisogno di stampare questi documenti — I need to print these documents
What time does the pharmacy close? — A che ora chiude la farmacia?
Buonanotte, a domani — Good night, see you tomorrow
Quando ero studente andavo a scuola a piedi — When I was a student I used to walk to school
As soon as possible, we'll replace the living room furniture — Appena possibile, sostituiremo l'arredo del soggiorno
Da piccolo passavo le estati dai nonni — As a child I used to spend summers at my grandparents'
Next year we'll paint the kitchen — L'anno prossimo tinteggeremo la cucina
Ieri sera abbiamo guardato un film insieme — Last night we watched a movie together
I'll pick you up after work — Ti vengo a prendere dopo il lavoro
Da ragazzo giocavo a calcio ogni domenica — As a boy I used to play football every Sunday
We're going to visit my parents this weekend — Andremo a trovare i miei genitori questo weekend
Prima lavoravo in un altro ufficio — I used to work in a different office before
By the time you arrive, dinner will be ready — Quando arriverai, la cena sarà pronta
Quest'estate abbiamo fatto un bel viaggio — This summer we took a nice trip
I'll finish this later — Lo finisco più tardi
Mi sono svegliato tardi stamattina — I woke up late this morning
We used to live in a smaller house — Vivevamo in una casa più piccola
Quando sarò grande voglio fare il medico — When I grow up I want to be a doctor
She'll call you back tomorrow — Ti richiamerà domani
Da bambina avevo paura del buio — As a child I was afraid of the dark
Next month we're moving to a new apartment — Il mese prossimo traslochiamo in un nuovo appartamento
Ho già lavato i piatti — I've already washed the dishes
We'll talk about it later, okay? — Ne parliamo più tardi, va bene?
Sveglia, è ora di andare a scuola! — Wake up, it's time to go to school!
Did you brush your teeth? — Ti sei lavato i denti?
Metti a posto la tua camera, per favore — Tidy up your room, please
Can you set the table? Dinner is almost ready — Puoi apparecchiare la tavola? La cena è quasi pronta
Chi porta fuori il cane stasera? — Who's taking the dog out tonight?
It's your turn to do the dishes — Tocca a te lavare i piatti
Abbiamo finito il latte, devo comprarne altro — We're out of milk, I need to buy more
Don't forget your gym bag — Non dimenticare la borsa della palestra
Metti il cappotto, fuori fa freddo — Put your coat on, it's cold outside
Have you done your homework yet? — Hai già fatto i compiti?
Spegni la televisione, è ora di cena — Turn off the TV, it's dinner time
Can you help me fold the laundry? — Puoi aiutarmi a piegare il bucato?
Domani i bambini hanno la partita di calcio — Tomorrow the kids have a football match
Remember to take out the recycling — Ricordati di portare fuori la differenziata
Chi ha lasciato le luci accese? — Who left the lights on?
Please lower your voice, the baby is sleeping — Abbassa la voce per favore, il bambino dorme
Stasera ordiniamo la pizza? — Shall we order pizza tonight?
I already told you twice — Te l'ho già detto due volte
Vai a fare la doccia prima di cena — Go take a shower before dinner
We need to buy more toilet paper — Dobbiamo comprare altra carta igienica
Hai preso l'ombrello? Sta per piovere — Did you take the umbrella? It's about to rain
Can you check if the door is locked? — Puoi controllare se la porta è chiusa a chiave?
Domani devo andare dal dottore per un controllo — Tomorrow I have to go to the doctor for a check-up
I'll put the kids to bed tonight — Stasera metto a letto i bambini io
Chi ha usato il mio caricabatterie? — Who used my charger?
We're almost out of coffee — Stiamo finendo il caffè
Ricordati di dare da mangiare al gatto — Remember to feed the cat
Can you turn down the volume, please? — Puoi abbassare il volume, per favore?
Domenica andremo a trovare la nonna — On Sunday we're going to visit grandma
I need to iron a shirt for tomorrow — Devo stirare una camicia per domani
Buonanotte, sogni d'oro — Good night, sweet dreams
49 a.C. — Giulio Cesare attraversa il Rubicone, dando avvio alla guerra civile romana. — storia
1783 — I fratelli Montgolfier realizzano la prima ascensione umana in mongolfiera. — storia
Le api comunicano la posizione del cibo attraverso una danza che indica direzione e distanza. — biologia
I telomeri, le estremità dei cromosomi, si accorciano progressivamente ad ogni divisione cellulare. — biologia
Could you please turn off the lights before leaving? — Potresti spegnere le luci prima di uscire, per favore?
Ho lasciato la macchina dal meccanico stamattina — I left the car at the mechanic's this morning
Arianna diede a Teseo un gomitolo di filo per aiutarlo a ritrovare la via d'uscita dal labirinto. — mitologia greca
Il centauro Chirone, saggio e mite a differenza degli altri centauri, fu maestro di eroi come Achille. — mitologia greca
Nulla si genera e nulla si distrugge, tutto si trasforma per aggregazione e separazione di elementi. — Anassagora
L'Uno è la fonte ineffabile da cui tutto emana, secondo la filosofia neoplatonica. — Plotino
La forza di Coriolis devia il moto dei corpi in un sistema di riferimento rotante, come la Terra. — fisica
La superconduttività è la capacità di alcuni materiali di condurre elettricità senza resistenza, a temperature molto basse. — fisica
La materia oscura non emette né assorbe luce, ma la sua presenza si deduce dagli effetti gravitazionali sulle galassie. — cosmologia
Proxima Centauri, la stella più vicina al Sole dopo il sistema solare stesso, dista circa 4,2 anni luce dalla Terra. — astronomia
Il Giappone conta oltre 90.000 tra templi buddisti e santuari shintoisti sparsi sul territorio. — curiosità
Il Mar Morto ha una salinità così alta che è praticamente impossibile affondarvi nuotando. — curiosità
La somma degli angoli interni di un triangolo euclideo è sempre 180 gradi. — geometria
Il teorema di Talete permette di calcolare distanze inaccessibili tramite triangoli simili. — geometria
Il pH misura l'acidità o la basicità di una soluzione su una scala che va da 0 a 14. — chimica
Il legame idrogeno tra le molecole d'acqua è responsabile della sua elevata tensione superficiale. — chimica
La stele di Rosetta, scoperta nel 1799, permise a Champollion di decifrare i geroglifici egizi. — archeologia
Ötzi, l'uomo venuto dal ghiaccio, è una mummia naturale di oltre 5.300 anni ritrovata sulle Alpi nel 1991. — archeologia
Il Tyrannosaurus rex viveva più vicino nel tempo all'uomo moderno che al Diplodocus. — dinosauri
Molti dinosauri, inclusi gli antenati degli uccelli, erano ricoperti di piume. — dinosauri
Il corpo umano possiede 23 coppie di cromosomi nelle cellule somatiche. — genetica
Un gene è una sequenza di DNA che contiene informazioni funzionali per un prodotto biologico. — genetica
I ribosomi sono strutture cellulari che sintetizzano proteine seguendo le informazioni dell'RNA messaggero. — biologia
I globuli bianchi svolgono funzioni fondamentali nella difesa dell'organismo dalle infezioni. — immunologia
Il sistema linfatico contribuisce al drenaggio dei liquidi dai tessuti e alla risposta immunitaria. — biologia
Le balene appartengono all'ordine dei cetacei, un gruppo di mammiferi adattati alla vita acquatica. — zoologia
Le piante carnivore integrano la nutrizione catturando piccoli organismi, soprattutto in ambienti poveri di nutrienti. — botanica
I funghi sono un regno distinto sia dalle piante sia dagli animali. — biologia
English: Could you repeat that more slowly, please? — Italiano: Potrebbe ripeterlo più lentamente, per favore?
English: We missed the train, so we took the next one. — Italiano: Abbiamo perso il treno, quindi abbiamo preso il successivo.
English: There is a pharmacy near the hotel. — Italiano: C'è una farmacia vicino all'hotel.
English: I left my passport in the room. — Italiano: Ho lasciato il passaporto in camera.
English: What time does the shop open tomorrow? — Italiano: A che ora apre il negozio domani?
English: We were having dinner when you called. — Italiano: Stavamo cenando quando hai chiamato.
English: I will send the documents this afternoon. — Italiano: Manderò i documenti questo pomeriggio.
English: The ticket machine is not working. — Italiano: La macchinetta dei biglietti non funziona.
English: She has lived here since 2020. — Italiano: Vive qui dal 2020.
English: Did you see my glasses on the desk? — Italiano: Hai visto i miei occhiali sulla scrivania?
English: We are going to visit the archaeological site tomorrow. — Italiano: Domani visiteremo il sito archeologico.
English: I have never travelled by night train. — Italiano: Non ho mai viaggiato su un treno notturno.
Secondo il mito, Ermes era il messaggero degli dei e proteggeva anche viaggiatori e mercanti. — mitologia greca
Artemide era associata alla caccia, alla natura selvaggia e alla Luna nella tradizione mitologica greca. — mitologia greca
Ares rappresentava la dimensione brutale e sanguinosa della guerra nella mitologia greca. — mitologia greca
Efesto era il dio greco del fuoco, della metallurgia e della lavorazione dei metalli. — mitologia greca
Afrodite era la dea greca associata all'amore e alla bellezza. — mitologia greca
Poseidone era il dio greco del mare, dei terremoti e dei cavalli. — mitologia greca
Aristotele distingueva tra potenza e atto per spiegare il cambiamento e la realizzazione delle cose. — filosofia
Platone descrisse la conoscenza sensibile come distinta dalla conoscenza delle realtà intelligibili. — filosofia
La quantità di moto di un corpo è uguale al prodotto della sua massa per la sua velocità. — meccanica
L'energia cinetica di un corpo è proporzionale alla sua massa e al quadrato della sua velocità. — meccanica
La potenza misura la rapidità con cui viene trasferita o trasformata energia. — fisica
Un oggetto a temperatura uniforme emette radiazione elettromagnetica su un intervallo di lunghezze d'onda. — termodinamica
Un corpo elettricamente neutro possiede quantità uguali di carica positiva e negativa. — elettrostatica
La pressione è definita come il rapporto tra una forza perpendicolare e l'area sulla quale agisce. — fisica
Il carbonio può formare una straordinaria varietà di molecole grazie alla capacità di stabilire quattro legami covalenti. — chimica
Il pH misura l'acidità o la basicità di una soluzione acquosa attraverso la concentrazione degli ioni idrogeno. — chimica
Un catalizzatore accelera una reazione chimica senza essere consumato nel processo complessivo. — chimica
Il sodio reagisce energicamente con l'acqua formando idrossido di sodio e idrogeno. — chimica
Il rame è un ottimo conduttore elettrico e termico. — chimica
Il ferro arrugginisce attraverso reazioni di ossidazione che coinvolgono ossigeno e acqua. — chimica
Il cervello umano contiene miliardi di neuroni collegati attraverso una complessa rete di sinapsi. — neuroscienze
Le sinapsi permettono ai neuroni di comunicare attraverso segnali chimici o elettrici. — neuroscienze
La memoria non è una registrazione perfetta del passato, ma il risultato di processi biologici di codifica e recupero. — neuroscienze
Il sonno REM è caratterizzato da intensa attività cerebrale e dalla presenza frequente di sogni vividi. — neuroscienze
Un anno venusiano dura circa 225 giorni terrestri, mentre un giorno solare su Venere dura circa 117 giorni terrestri. — astronomia
Mercurio completa un'orbita attorno al Sole in circa 88 giorni terrestri. — astronomia
Urano ruota attorno a un asse fortemente inclinato, quasi parallelo al piano della sua orbita. — astronomia
Le aurore polari sono prodotte dall'interazione tra particelle cariche provenienti dal Sole e l'atmosfera terrestre. — fisica dello spazio
Un triangolo equilatero ha tre lati e tre angoli della stessa misura. — geometria
La circonferenza di un cerchio è uguale a 2πr, dove r rappresenta il raggio. — geometria
Le cellule procariotiche non possiedono un nucleo delimitato da una membrana.
Il reticolo endoplasmatico rugoso è ricoperto di ribosomi e partecipa alla sintesi delle proteine.
I mitocondri producono gran parte dell'ATP utilizzato dalle cellule e possiedono un proprio DNA.
Il sangue è classificato come un tessuto connettivo perché contiene cellule immerse in una matrice extracellulare liquida.
Le piastrine partecipano ai processi che portano alla coagulazione del sangue.
Il camaleonte può muovere i due occhi in modo indipendente l'uno dall'altro.
I polpi possiedono tre cuori e il loro sangue contiene emocianina, una proteina contenente rame.
I coralli sono animali appartenenti al gruppo degli cnidari, non piante.
English: I forgot my umbrella at the office. — Italiano: Ho dimenticato il mio ombrello in ufficio.
English: We have been waiting for the doctor for twenty minutes. — Italiano: Stiamo aspettando il medico da venti minuti.
English: Could I have a window seat, please? — Italiano: Potrei avere un posto vicino al finestrino, per favore?
English: The museum was closed when we arrived. — Italiano: Il museo era chiuso quando siamo arrivati.
English: I need to buy a charger for my phone. — Italiano: Devo comprare un caricabatterie per il mio telefono.
English: My daughter will be home after school. — Italiano: Mia figlia sarà a casa dopo la scuola.
English: We usually have breakfast before leaving home. — Italiano: Di solito facciamo colazione prima di uscire di casa.
English: The train has already left the platform. — Italiano: Il treno è già partito dal binario.
English: I was reading when the lights went out. — Italiano: Stavo leggendo quando è andata via la luce.
English: Please keep this receipt in case you need to return the item. — Italiano: Conservi questo scontrino nel caso debba restituire l'articolo.
English: Tomorrow we are meeting our friends at the station. — Italiano: Domani incontreremo i nostri amici alla stazione.
English: She has just finished her homework. — Italiano: Ha appena finito i compiti.
English: How long does the journey take by bus? — Italiano: Quanto dura il viaggio in autobus?
English: I will be back before dinner. — Italiano: Tornerò prima di cena.
Nella mitologia greca, Dioniso era associato al vino, alla festa e al teatro.
Nella mitologia greca, Demetra era associata all'agricoltura e alla fertilità della terra.
Il mito di Orfeo ed Euridice racconta il viaggio di Orfeo nel mondo dei morti per tentare di riportare indietro Euridice.
Secondo la tradizione mitologica greca, Icaro cadde in mare dopo essersi avvicinato troppo al Sole con ali costruite dal padre Dedalo.
Il labirinto di Cnosso è collegato nella tradizione mitologica al Minotauro e al re Minosse.
Parmenide sostenne che ciò che è non può nascere dal nulla né trasformarsi in ciò che non è.
Epicuro riteneva che una vita felice richiedesse, tra le altre cose, la liberazione dalle paure infondate.
Diogene di Sinope è una delle figure più note della scuola cinica dell'antica Grecia.
Archimede formulò il principio secondo cui un corpo immerso in un fluido riceve una spinta verso l'alto pari al peso del fluido spostato.
Un oggetto in equilibrio traslazionale ha risultante delle forze esterne uguale a zero.
Il momento di una forza rispetto a un punto dipende dalla forza e dalla distanza perpendicolare dalla sua linea d'azione.
Un prisma ottico può separare la luce bianca nelle diverse componenti dello spettro visibile.
Il campo magnetico terrestre contribuisce a deviare una parte delle particelle cariche provenienti dal vento solare.
Saturno possiede un sistema di anelli composto principalmente da frammenti di ghiaccio e materiale roccioso.
Giove è il pianeta più grande del Sistema Solare.
La Luna mostra quasi sempre la stessa faccia alla Terra perché il suo periodo di rotazione è uguale al periodo della sua orbita.
Un'eclissi solare si verifica quando la Luna si trova tra la Terra e il Sole e ne copre almeno parzialmente il disco osservato dalla Terra.
Un'eclissi lunare avviene quando la Terra si trova tra il Sole e la Luna e la Luna attraversa l'ombra terrestre.
Il numero zero svolge un ruolo fondamentale sia come numero sia come elemento neutro dell'addizione.
Un quadrato possiede quattro lati congruenti e quattro angoli retti.
Il volume di un cubo di lato l è l³.
Il teorema di Talete permette di ricavare relazioni tra segmenti quando una famiglia di rette parallele interseca due trasversali.
La probabilità di un evento certo è uguale a 1.
Una soluzione chimica è una miscela omogenea nella quale una o più sostanze sono distribuite uniformemente in un solvente.
Durante una reazione chimica, gli atomi vengono riarrangiati ma non creati né distrutti.
Il numero atomico di un elemento corrisponde al numero di protoni presenti nel nucleo dei suoi atomi.
Il diamante e la grafite sono due forme allotropiche del carbonio con strutture cristalline differenti.
Le reazioni di neutralizzazione tra un acido e una base possono produrre acqua e un sale.   
Il deserto di Atacama è uno dei luoghi più aridi della Terra al di fuori delle regioni polari. — curiosità dal mondo
Il Salar de Uyuni in Bolivia è la più grande distesa salata del mondo ed è particolarmente estesa durante la stagione secca. — curiosità dal mondo
Il Giappone comprende migliaia di isole distribuite nell'Oceano Pacifico occidentale. — geografia
Il Mar Morto si trova in una depressione terrestre e la sua superficie è molto al di sotto del livello del mare. — geografia
In Islanda molte abitazioni sono riscaldate sfruttando l'energia geotermica. — curiosità dal mondo
Il Nilo attraversa diversi Paesi africani prima di raggiungere il Mar Mediterraneo. — geografia
Il Kilimangiaro è la montagna più alta dell'Africa. — geografia
English: Could you show me where the entrance is? — Italiano: Potrebbe mostrarmi dov'è l'ingresso?
English: I left my bag on the train, but I remember the carriage number. — Italiano: Ho lasciato la borsa sul treno, ma ricordo il numero della carrozza.
English: We need to change trains at the next station. — Italiano: Dobbiamo cambiare treno alla prossima stazione.
English: I ordered this yesterday, but it has not arrived yet. — Italiano: Ho ordinato questo ieri, ma non è ancora arrivato.
English: She was waiting outside when the shop opened. — Italiano: Stava aspettando fuori quando il negozio ha aperto.
English: I have never seen such a beautiful building. — Italiano: Non ho mai visto un edificio così bello.
English: If the weather is good tomorrow, we will go for a walk. — Italiano: Se domani il tempo sarà bello, andremo a fare una passeggiata.
English: Do you know whether this bus stops near the museum? — Italiano: Sai se questo autobus si ferma vicino al museo?
English: I forgot to charge my phone before leaving home. — Italiano: Ho dimenticato di caricare il telefono prima di uscire di casa.
English: We were looking for a quiet restaurant near the station. — Italiano: Cercavamo un ristorante tranquillo vicino alla stazione.
English: Please tell me if the meeting starts at nine. — Italiano: Per favore, dimmi se la riunione inizia alle nove.
English: He has already sent the email to the office. — Italiano: Ha già mandato l'email all'ufficio.
English: I will take the underground because the roads are busy. — Italiano: Prenderò la metropolitana perché le strade sono trafficate.
English: We arrived early, so we had coffee before the lesson. — Italiano: Siamo arrivati presto, quindi abbiamo preso un caffè prima della lezione.
English: Can I pay by card, or do you need cash? — Italiano: Posso pagare con la carta o serve contante?
Le cellule comunicano tra loro attraverso segnali chimici ed elettrici che regolano numerosi processi biologici. — biologia
Il sistema immunitario distingue molte strutture estranee all'organismo attraverso recettori altamente specifici. — immunologia
I batteri possono scambiarsi materiale genetico anche attraverso processi diversi dalla riproduzione cellulare. — microbiologia
La selezione naturale può modificare la frequenza dei caratteri ereditabili all'interno di una popolazione nel corso delle generazioni. — evoluzione
Le mutazioni sono cambiamenti nella sequenza del DNA e possono avere effetti diversi sull'organismo. — genetica
Le piante trasportano acqua e sali minerali dalle radici alle parti aeree attraverso lo xilema. — botanica
Le radici delle piante assorbono acqua e sali minerali dal terreno attraverso strutture specializzate. — botanica
Le impronte digitali si formano durante lo sviluppo fetale e sono influenzate anche da condizioni presenti nell'ambiente uterino. — biologia
Il cervello consuma una quantità significativa di energia rispetto alla sua massa complessiva. — neuroscienze
Il diaframma è un muscolo importante per la respirazione e separa la cavità toracica da quella addominale. — anatomia
Per Democrito, la materia era costituita da particelle indivisibili chiamate atomi. — filosofia antica
Zenone di Elea formulò celebri paradossi destinati a mettere alla prova le idee comuni sul movimento e sulla molteplicità. — filosofia antica
Aristotele classificò diverse forme di governo nella sua riflessione sulla politica. — filosofia
Secondo Platone, il mito della caverna rappresenta un percorso dalla percezione delle apparenze verso la conoscenza. — filosofia
Seneca sostenne che il valore della vita non dipende soltanto dalla sua durata, ma anche dal modo in cui viene utilizzata. — filosofia
Marco Aurelio apparteneva alla tradizione stoica e scrisse riflessioni personali oggi raccolte con il titolo Meditazioni. — filosofia
Epicuro fondò la sua scuola ad Atene in un luogo tradizionalmente noto come il Giardino. — filosofia antica
Il principio di inerzia afferma che un corpo mantiene il proprio stato di moto rettilineo uniforme se la risultante delle forze esterne è nulla. — fisica
La densità di una sostanza è il rapporto tra la sua massa e il volume occupato. — fisica
La velocità media è data dal rapporto tra lo spazio percorso e il tempo impiegato. — fisica
La riflessione è il fenomeno per cui la luce cambia direzione tornando nel mezzo da cui proveniva quando incontra una superficie riflettente. — ottica
Un oggetto immerso in acqua riceve una spinta verso l'alto dovuta alla pressione esercitata dal liquido. — fisica
La seconda legge della termodinamica stabilisce che nei processi spontanei l'entropia totale di un sistema isolato non diminuisce. — termodinamica
Il mercurio è l'unico elemento metallico che si trova allo stato liquido a temperatura ambiente in condizioni ordinarie. — chimica
Il diamante è molto duro perché gli atomi di carbonio sono collegati da una struttura tridimensionale di legami covalenti. — chimica
Il principio di Archimede permette di spiegare perché una nave di acciaio può galleggiare grazie al volume d'acqua che sposta. — fisica
In un triangolo rettangolo, l'altezza relativa all'ipotenusa divide il triangolo in due triangoli simili tra loro e con quello di partenza. — geometria
1204 — La Quarta Crociata culmina nel sacco di Costantinopoli da parte dei crociati latini.
1588 — La flotta inglese sconfigge l'Invincibile Armata spagnola.
1683 — La Battaglia di Vienna ferma l'avanzata ottomana nell'Europa centrale.
1707 — Entra in vigore l'Atto di Unione tra Inghilterra e Scozia.
1893 — La Nuova Zelanda diventa il primo paese al mondo a concedere il voto alle donne.
1912 — Il transatlantico Titanic affonda durante il suo viaggio inaugurale.
1927 — Charles Lindbergh compie la prima trasvolata atlantica in solitaria senza scalo.
1953 — Edmund Hillary e Tenzing Norgay raggiungono per primi la vetta dell'Everest.
Secondo il mito, Tantalo fu condannato a soffrire fame e sete eterne pur avendo cibo e acqua a portata di mano. — mitologia greca
Aracne sfidò Atena in una gara di tessitura e fu trasformata in ragno per la sua superbia. — mitologia greca
Niobe, vantandosi dei propri figli, li vide uccisi dalle frecce di Apollo e Artemide. — mitologia greca
Ganimede fu rapito da Zeus per diventare coppiere degli dei sull'Olimpo. — mitologia greca
Cerbero, il cane a tre teste, custodiva l'ingresso del regno dei morti. — mitologia greca
Bellerofonte domò il cavallo alato Pegaso per affrontare la Chimera. — mitologia greca
Endimione ricevette da Zeus il dono di un sonno eterno e di un'eterna giovinezza. — mitologia greca
Cratilo, allievo di Eraclito, sosteneva che il mutamento continuo rendesse impossibile persino nominare le cose. — filosofia antica
Antistene, considerato tra i fondatori della scuola cinica, predicava una vita semplice e priva di bisogni superflui. — filosofia antica
Crisippo sistematizzò gran parte della logica e dell'etica della Stoa antica. — filosofia antica
La teoria dell'inflazione cosmica ipotizza un'espansione estremamente rapida dell'universo nei primi istanti dopo il Big Bang. — cosmologia
Un effetto di lente gravitazionale si verifica quando la massa di una galassia devia e amplifica la luce proveniente da oggetti più lontani. — cosmologia
L'orizzonte degli eventi di un buco nero è il confine oltre il quale nulla, nemmeno la luce, può più sfuggire. — astrofisica
Le stelle di popolazione III, mai osservate direttamente, sarebbero state le primissime stelle formatesi nell'universo. — cosmologia
Durante l'epoca della reionizzazione, la radiazione delle prime stelle e galassie ionizzò nuovamente il gas neutro dell'universo. — cosmologia
Petra, in Giordania, fu scavata direttamente nella roccia dai Nabatei oltre duemila anni fa. — curiosità dal mondo
La Grande Barriera Corallina australiana è la più estesa struttura vivente della Terra. — curiosità dal mondo
Chichén Itzá, in Messico, fu un importante centro della civiltà Maya. — curiosità dal mondo
Angkor Wat, in Cambogia, è il più grande complesso religioso mai costruito al mondo. — curiosità dal mondo
Sull'Isola di Pasqua si trovano centinaia di enormi statue di pietra chiamate moai. — curiosità dal mondo
I fiordi norvegesi si formarono grazie all'erosione dei ghiacciai durante le ere glaciali. — curiosità dal mondo
Heinrich Schliemann individuò nel XIX secolo il sito ritenuto corrispondere all'antica Troia. — archeologia
L'Esercito di Terracotta, scoperto nel 1974, proteggeva la tomba del primo imperatore cinese. — archeologia
Howard Carter scoprì la tomba pressoché intatta di Tutankhamon nel 1922. — archeologia
Le rovine dell'antica Cartagine testimoniano ancora oggi la potenza di quella civiltà punica. — archeologia
Stonehenge, nel sud dell'Inghilterra, fu costruito in diverse fasi a partire da circa 5.000 anni fa. — archeologia
Il Velociraptor era in realtà molto più piccolo di come viene rappresentato nei film, grande all'incirca come un tacchino. — dinosauri
Il Triceratops utilizzava le sue corna soprattutto per il combattimento tra esemplari della stessa specie. — dinosauri
Lo Spinosaurus è ritenuto uno dei pochi dinosauri adattati a una vita semi-acquatica. — dinosauri
L'estinzione dei dinosauri non aviani è collegata all'impatto dell'asteroide di Chicxulub, in Messico. — dinosauri
L'Archaeopteryx, vissuto circa 150 milioni di anni fa, è considerato un anello di collegamento tra dinosauri e uccelli. — dinosauri
Il Decameron di Giovanni Boccaccio raccoglie cento novelle narrate durante la peste del Trecento. — letteratura
Il Canzoniere di Francesco Petrarca influenzò profondamente la poesia amorosa europea successiva. — letteratura
L'Eneide di Virgilio narra il viaggio di Enea dalle rovine di Troia fino alle origini di Roma. — letteratura
Le Metamorfosi di Ovidio raccolgono numerosi miti trasformati in un unico grande poema. — letteratura
Sofocle ed Euripide, insieme a Eschilo, sono considerati i grandi tragediografi dell'antica Atene. — letteratura
I need to renew my passport before the trip — Devo rinnovare il passaporto prima del viaggio
Can you recommend a good restaurant nearby? — Puoi consigliarmi un buon ristorante qui vicino?
We're running low on printer paper at the office — In ufficio stiamo finendo la carta per la stampante
Did you remember to lock the front door? — Ti sei ricordato di chiudere a chiave la porta d'ingresso?
I'll drop the kids off and then head to work — Accompagno i bambini e poi vado al lavoro
The flight has been delayed by two hours — Il volo è stato ritardato di due ore
Uluru, in Australia, è uno dei monoliti di arenaria più grandi del mondo ed è sacro per le popolazioni aborigene. — curiosità dal mondo
Il Grand Canyon, negli Stati Uniti, è stato scavato nel corso di milioni di anni dal fiume Colorado. — curiosità dal mondo
In Cappadocia, in Turchia, intere abitazioni furono scavate nella roccia vulcanica fin dall'antichità. — curiosità dal mondo
Le Isole Fær Øer, tra Norvegia e Islanda, contano più pecore che abitanti. — curiosità dal mondo
Il Monte Fuji, in Giappone, è un vulcano ancora considerato attivo dai vulcanologi. — curiosità dal mondo
La Foresta Nera, in Germania, prende il nome dalla fittissima vegetazione di conifere che la ricopre. — curiosità dal mondo
Table Mountain, a Città del Capo, è spesso avvolta da una nube che gli abitanti chiamano tovaglia. — curiosità dal mondo
Le Grotte di Postumia, in Slovenia, si estendono per oltre venti chilometri sotto la superficie. — curiosità dal mondo
Il lago Titicaca, tra Perù e Bolivia, è considerato il lago navigabile più alto del mondo. — curiosità dal mondo
In Antartide vivono colonie di pinguini adattate a temperature estremamente rigide. — curiosità dal mondo
La Valle della Morte, negli Stati Uniti, ha registrato alcune delle temperature più alte mai misurate sulla Terra. — curiosità dal mondo
Il bosco di Hallerbos, in Belgio, si tinge di blu ogni primavera per la fioritura dei giacinti selvatici. — curiosità dal mondo
Il Grande Buco Blu, al largo del Belize, è una gigantesca dolina sottomarina visibile anche dall'alto. — curiosità dal mondo
Il Salto Angel, in Venezuela, è la cascata con il maggior dislivello ininterrotto del mondo. — curiosità dal mondo
Il Deserto Bianco, in Egitto, deve il proprio nome alle particolari formazioni rocciose di gesso. — curiosità dal mondo
Le Isole Galápagos ispirarono Charles Darwin durante il suo viaggio a bordo del Beagle. — curiosità dal mondo
A Wadi Rum, in Giordania, il paesaggio desertico è stato usato spesso come ambientazione cinematografica. — curiosità dal mondo
Il ghiacciaio Perito Moreno, in Argentina, è uno dei pochi ghiacciai al mondo ancora in avanzamento. — curiosità dal mondo
Il vulcano Kilauea, alle Hawaii, è tra i più attivi al mondo. — curiosità dal mondo
Sull'isola di Socotra, in Yemen, cresce l'albero del sangue di drago, dalla forma insolita a ombrello. — curiosità dal mondo
La Grotta dei Cristalli di Naica, in Messico, ospita alcuni dei cristalli naturali più grandi mai scoperti. — curiosità dal mondo
Le formazioni Danxia, in Cina, mostrano rocce stratificate dai colori sorprendenti dovuti a minerali diversi. — curiosità dal mondo
La Skeleton Coast, in Namibia, prende il nome dai numerosi relitti di navi naufragate lungo la costa. — curiosità dal mondo
Il deserto del Gobi, tra Cina e Mongolia, è uno dei più estesi deserti freddi del mondo. — curiosità dal mondo
Le sorgenti termali di Pamukkale, in Turchia, hanno creato nel tempo terrazze di calcare bianco. — curiosità dal mondo
Ho perso la coincidenza per due minuti — I missed my connection by two minutes
Could you tell me which platform the train leaves from? — Potrebbe dirmi da quale binario parte il treno?
Dobbiamo rinnovare l'abbonamento dell'autobus — We need to renew the bus pass
I'll water the plants while you're away — Innaffierò le piante mentre sei via
Have you packed your suitcase yet? — Hai già fatto la valigia?
Il negozio chiude tra dieci minuti — The shop closes in ten minutes
Can you switch off the oven, please? — Puoi spegnere il forno, per favore?
Domani ho la riunione con il capo — Tomorrow I have the meeting with the boss
We're going to repaint the fence this weekend — Questo weekend ridipingeremo la staccionata
Ho lasciato il portafoglio a casa, torno subito — I left my wallet at home, I'll be right back
Could you water the garden tonight? — Potresti innaffiare il giardino stasera?
Sto imparando a suonare la chitarra — I'm learning to play the guitar
Where can I find a supermarket around here? — Dove posso trovare un supermercato da queste parti?
Ci siamo persi cercando il museo — We got lost looking for the museum
I'll email you the report by tomorrow morning — Ti manderò la relazione via email entro domani mattina
Ho appena finito di caricare la lavastoviglie — I've just finished loading the dishwasher
Do you need a hand with the suitcases? — Hai bisogno di una mano con le valigie?
Domani porteremo i documenti in ufficio — Tomorrow we'll bring the documents to the office
I forgot to set my alarm this morning — Ho dimenticato di impostare la sveglia stamattina
Puoi controllare se abbiamo ancora zucchero? — Can you check if we still have any sugar?
We should book the hotel before it gets fully booked — Dovremmo prenotare l'hotel prima che si esaurisca la disponibilità
Ho lasciato il cellulare in silenzioso tutto il giorno — I've had my phone on silent all day
Is there a discount for students? — C'è uno sconto per studenti?
Domani mattina porto la macchina a fare il tagliando — Tomorrow morning I'm taking the car for a service
I'll pick up the dry cleaning on my way home — Ritiro il lavaggio a secco tornando a casa
Trolltunga, in Norvegia, è una sporgenza rocciosa sospesa a centinaia di metri sopra un lago glaciale. — curiosità dal mondo
A Zhangjiajie, in Cina, si trovano imponenti pilastri di arenaria che hanno ispirato ambientazioni cinematografiche. — curiosità dal mondo
Bagan, in Myanmar, conserva migliaia di antichi templi buddisti sparsi nella pianura. — curiosità dal mondo
La Baia di Ha Long, in Vietnam, è punteggiata da migliaia di isolotti calcarei. — curiosità dal mondo
Nella penisola dello Yucatán, in Messico, i cenote sono voragini naturali riempite d'acqua dolce. — curiosità dal mondo
Le dune del deserto del Namib, in Namibia, sono tra le più alte del mondo. — curiosità dal mondo
Il lago Hillier, in Australia, ha un colore rosa acceso di origine ancora oggetto di studio. — curiosità dal mondo
A Meteora, in Grecia, alcuni monasteri furono costruiti sulla sommità di alti pinnacoli rocciosi. — curiosità dal mondo
Le Isole Lofoten, in Norvegia, sono famose per i loro fiordi e per i villaggi di pescatori colorati. — curiosità dal mondo
Le Chocolate Hills, nelle Filippine, sono centinaia di collinette coniche che d'estate assumono un colore bruno. — curiosità dal mondo
Il Rio delle Amazzoni trasporta più acqua di qualsiasi altro fiume al mondo. — curiosità dal mondo
Il Monte Roraima, al confine tra Venezuela, Brasile e Guyana, è un altopiano isolato dalle pareti quasi verticali. — curiosità dal mondo
A Bryce Canyon, negli Stati Uniti, l'erosione ha modellato migliaia di guglie di roccia chiamate hoodoo. — curiosità dal mondo
La depressione della Dancalia, in Etiopia, è una delle zone più calde e vulcanicamente attive della Terra. — curiosità dal mondo
Lungo la Great Ocean Road, in Australia, si affacciano sul mare i celebri faraglioni dei Dodici Apostoli. — curiosità dal mondo
Il ghiacciaio Vatnajökull, in Islanda, è tra i più estesi d'Europa. — curiosità dal mondo
Il Rub al Khali, nella penisola arabica, è uno dei deserti di sabbia più vasti del pianeta. — curiosità dal mondo
La Foresta Pietrificata, in Arizona, conserva tronchi d'albero trasformati in pietra milioni di anni fa. — curiosità dal mondo
Il Parco di Yellowstone ospita centinaia di geyser, tra cui il celebre Old Faithful. — curiosità dal mondo
Le Cuevas de Mármol, in Cile, sono grotte scolpite dall'acqua in una roccia calcarea dalle venature marmoree. — curiosità dal mondo
Le Grotte di Škocjan, in Slovenia, ospitano uno dei canyon sotterranei più grandi del mondo. — curiosità dal mondo
Il parco Torres del Paine, in Cile, prende il nome dalle sue imponenti torri di granito. — curiosità dal mondo
Il Monte Kailash, in Tibet, è considerato sacro da più religioni e non è mai stato scalato per rispetto religioso. — curiosità dal mondo
La Grotta di Fingal, in Scozia, è famosa per le sue colonne naturali di basalto esagonale. — curiosità dal mondo
Le Waitomo Glowworm Caves, in Nuova Zelanda, brillano al buio per la presenza di larve bioluminescenti. — curiosità dal mondo
Sto cercando la fermata del tram più vicina — I'm looking for the nearest tram stop
Could you validate my ticket, please? — Potrebbe convalidare il mio biglietto, per favore?
Abbiamo perso l'ultimo autobus della sera — We missed the last bus of the evening
I need to return this item, do you have the receipt? — Devo restituire questo articolo, ha lo scontrino?
Domani devo consegnare la relazione al direttore — Tomorrow I have to hand in the report to the manager
Can we reschedule the meeting to Thursday? — Possiamo spostare la riunione a giovedì?
Ho lasciato gli appunti a scuola — I left my notes at school
Did the teacher give you any homework today? — La maestra ti ha dato compiti oggi?
Dobbiamo cambiare le lenzuola del letto — We need to change the bed sheets
I'll take the stairs, the lift is out of order — Prendo le scale, l'ascensore è fuori servizio
Vorrei prenotare un tavolo per stasera — I'd like to book a table for tonight
Do you accept contactless payments? — Accettate pagamenti contactless?
Abbiamo dimenticato di spegnere il forno — We forgot to turn off the oven
The printer is out of ink again — La stampante è di nuovo senza inchiostro
Mio figlio ha la febbre, resto a casa oggi — My son has a fever, I'm staying home today
We should leave early to avoid traffic — Dovremmo partire presto per evitare il traffico
Hai visto le chiavi di casa da qualche parte? — Have you seen the house keys anywhere?
I'll drop by the post office this afternoon — Passo dall'ufficio postale questo pomeriggio
Il volo è stato cancellato per maltempo — The flight was cancelled due to bad weather
Can you keep an eye on the kids for a minute? — Puoi tenere d'occhio i bambini per un minuto?
Domani portiamo i vestiti in lavanderia — Tomorrow we'll take the clothes to the laundry
I need to update my address with the bank — Devo aggiornare il mio indirizzo in banca
Ci siamo fermati a fare benzina lungo l'autostrada — We stopped to get gas along the highway
Is breakfast included in the price of the room? — La colazione è inclusa nel prezzo della camera?
Stasera portiamo fuori il cane insieme — Tonight we'll take the dog out together
Il Giant's Causeway, in Irlanda del Nord, è formato da decine di migliaia di colonne di basalto esagonali. — curiosità dal mondo
La Reed Flute Cave, vicino a Guilin, in Cina, è nota per le sue formazioni calcaree illuminate artisticamente. — curiosità dal mondo
Il Lac Rose, in Senegal, deve il suo colore rosato ad alghe e alla forte concentrazione di sale. — curiosità dal mondo
Le Everglades, in Florida, formano una delle più vaste zone umide subtropicali del pianeta. — curiosità dal mondo
Il Deserto dei Pinnacoli, in Australia, è disseminato di migliaia di formazioni calcaree simili a colonne. — curiosità dal mondo
La Laguna Blu, in Islanda, è una spa geotermale alimentata dalle acque calde del sottosuolo vulcanico. — curiosità dal mondo
La struttura di Richat, in Mauritania, è visibile dallo spazio ed è nota anche come Occhio del Sahara. — curiosità dal mondo
Il vulcano Ijen, in Indonesia, è famoso per le fiamme blu prodotte dalla combustione dei gas solforosi. — curiosità dal mondo
Le Scogliere di Moher, in Irlanda, si affacciano a picco sull'oceano Atlantico per oltre duecento metri. — curiosità dal mondo
I Laghi di Plitvice, in Croazia, sono un susseguirsi di bacini turchesi collegati da cascate. — curiosità dal mondo
L'Antelope Canyon, in Arizona, è celebre per le pareti di roccia levigate dall'acqua in forme sinuose. — curiosità dal mondo
I Lençóis Maranhenses, in Brasile, sono dune di sabbia bianca punteggiate da lagune d'acqua piovana. — curiosità dal mondo
A Deadvlei, in Namibia, alberi secolari ormai morti si stagliano su un terreno d'argilla bianca. — curiosità dal mondo
Il lago di Melissani, in Grecia, si trova all'interno di una grotta parzialmente crollata. — curiosità dal mondo
Le Blood Falls, in Antartide, prendono il nome dal colore rossastro dell'acqua ricca di ossido di ferro. — curiosità dal mondo
La fortezza di Sigiriya, in Sri Lanka, sorge sulla sommità di un'imponente rupe rocciosa. — curiosità dal mondo
La Montagna Arcobaleno di Vinicunca, in Perù, mostra bande di colore dovute a diversi strati minerali. — curiosità dal mondo
La Grotta Azzurra, sull'isola di Capri, deve il suo colore a un particolare gioco di luce riflessa. — curiosità dal mondo
Giethoorn, nei Paesi Bassi, è un villaggio dove gli spostamenti avvengono soprattutto in barca lungo i canali. — curiosità dal mondo
La Valle di Cocora, in Colombia, ospita alcune delle palme da cera più alte del mondo. — curiosità dal mondo
I Tsingy de Bemaraha, in Madagascar, sono formazioni calcaree aguzze modellate dall'erosione. — curiosità dal mondo
Il Tunnel dell'Amore, in Ucraina, è un tratto ferroviario avvolto da una fitta vegetazione ad arco. — curiosità dal mondo
Il Cirque de Gavarnie, in Francia, è un anfiteatro naturale scavato tra le montagne dei Pirenei. — curiosità dal mondo
Le Nine Hells di Beppu, in Giappone, sono sorgenti termali dai colori vivaci dovuti ai minerali disciolti. — curiosità dal mondo
Il lago Nakuru, in Kenya, è spesso tinto di rosa dalla presenza di migliaia di fenicotteri. — curiosità dal mondo
Ho dimenticato di mettere il caricabatterie in valigia — I forgot to pack the charger in my suitcase
Could you tell me the wifi password? — Potrebbe dirmi la password del wifi?
Il traghetto parte tra un'ora — The ferry leaves in an hour
We need to renew our passports before summer — Dobbiamo rinnovare i passaporti prima dell'estate
Ho lasciato la borsa in taxi per sbaglio — I accidentally left my bag in the taxi
Can you tell me how to get to the city center? — Puoi dirmi come arrivare al centro città?
Domani i ragazzi hanno la gita scolastica — Tomorrow the kids have their school trip
Have you already handed in your homework? — Hai già consegnato i compiti?
Dobbiamo sistemare la caldaia prima dell'inverno — We need to get the boiler fixed before winter
I'll leave the spare key with the neighbour — Lascio la chiave di riserva al vicino
Vorremmo un tavolo vicino alla finestra — We'd like a table near the window
Do you have anything in a smaller size? — Avete qualcosa in una taglia più piccola?
Abbiamo perso il volo di coincidenza — We missed our connecting flight
The meeting has been moved to next week — La riunione è stata spostata alla prossima settimana
Mia moglie lavora fino a tardi stasera — My wife is working late tonight
We should double check the reservation — Dovremmo ricontrollare la prenotazione
Hai spento le luci prima di uscire? — Did you turn off the lights before leaving?
I'll send you the invoice by the end of the week — Ti manderò la fattura entro fine settimana
Il semaforo è rosso, aspettiamo — The traffic light is red, let's wait
Can you check the departure time again? — Puoi controllare di nuovo l'orario di partenza?
Domani portiamo il gatto dal veterinario — Tomorrow we're taking the cat to the vet
I need to renew my gym membership — Devo rinnovare l'abbonamento in palestra
Ci vediamo davanti all'ingresso principale — Let's meet in front of the main entrance
Is there a charge for extra luggage? — C'è un costo per il bagaglio in eccesso?
Stasera facciamo il bucato prima di andare a letto — Tonight we'll do the laundry before going to bed
Wave Rock, in Australia, è una formazione rocciosa dalla caratteristica forma a onda. — curiosità dal mondo
Gli eucalipti arcobaleno, diffusi tra Hawaii e Filippine, hanno una corteccia che cambia colore mentre invecchia. — curiosità dal mondo
Il Blue Hole di Dahab, in Egitto, è una profonda voragine sottomarina lungo la costa del Mar Rosso. — curiosità dal mondo
Il Caño Cristales, in Colombia, è soprannominato il fiume dei cinque colori per le piante acquatiche che lo popolano. — curiosità dal mondo
Le Salinas Grandes, in Argentina, formano un'immensa distesa bianca di sale ad alta quota. — curiosità dal mondo
L'Ol Doinyo Lengai, in Tanzania, è l'unico vulcano al mondo a eruttare una lava scura e relativamente fredda. — curiosità dal mondo
Le Cascate Vittoria, tra Zambia e Zimbabwe, sono tra le cascate più larghe del mondo. — curiosità dal mondo
Le Cascate dell'Iguazú, tra Argentina e Brasile, sono composte da centinaia di salti d'acqua distinti. — curiosità dal mondo
Le Cascate del Niagara, tra Canada e Stati Uniti, riversano ogni secondo enormi quantità d'acqua. — curiosità dal mondo
Le Grotte di Batu, in Malesia, ospitano santuari induisti all'interno di grandi caverne calcaree. — curiosità dal mondo
La Grande Rift Valley attraversa l'Africa orientale per migliaia di chilometri. — curiosità dal mondo
Il Delta dell'Okavango, in Botswana, è un raro esempio di delta fluviale che non sfocia in un mare. — curiosità dal mondo
Nel Serengeti, tra Tanzania e Kenya, avviene ogni anno una delle più grandi migrazioni di mammiferi al mondo. — curiosità dal mondo
Lo Spotted Lake, in Canada, mostra in estate centinaia di pozze colorate ricche di minerali. — curiosità dal mondo
Il Sótano de las Golondrinas, in Messico, è una delle voragini naturali più profonde del mondo. — curiosità dal mondo
La baia di Mosquito Bay, a Porto Rico, brilla di notte per la presenza di organismi bioluminescenti. — curiosità dal mondo
Le Blue Mountains, in Australia, devono il loro nome alla foschia bluastra generata dagli oli degli eucalipti. — curiosità dal mondo
Il cratere di Ngorongoro, in Tanzania, ospita una delle più alte concentrazioni di fauna selvatica dell'Africa. — curiosità dal mondo
Il fiume sotterraneo di Puerto Princesa, nelle Filippine, scorre per diversi chilometri dentro una grotta. — curiosità dal mondo
La grotta di Son Doong, in Vietnam, è considerata la più grande cavità naturale conosciuta al mondo. — curiosità dal mondo
La Diamond Beach, in Islanda, prende il nome dai frammenti di iceberg che si depositano sulla sabbia nera. — curiosità dal mondo
Il Fly Geyser, in Nevada, è un geyser artificiale dai colori sgargianti creato per errore durante una perforazione. — curiosità dal mondo
Alla Racetrack Playa, nella Valle della Morte, alcune rocce sembrano spostarsi da sole lasciando lunghe tracce nel fango. — curiosità dal mondo
Skaftafell, in Islanda, è una regione dove ghiacciai e vulcani si incontrano nello stesso paesaggio. — curiosità dal mondo
La Laguna Colorada, in Bolivia, ha un colore rossastro dovuto ad alghe e minerali disciolti nell'acqua. — curiosità dal mondo
Ho dimenticato di annaffiare le piante prima di partire — I forgot to water the plants before leaving
Could you save me a seat, please? — Potresti tenermi un posto, per favore?
Il check-in apre due ore prima del volo — Check-in opens two hours before the flight
We need to buy new towels for the bathroom — Dobbiamo comprare asciugamani nuovi per il bagno
Ho perso la ricevuta del pagamento — I lost the payment receipt
Can you tell me where the fitting room is? — Puoi dirmi dov'è il camerino?
Domani i bambini fanno l'esame di matematica — Tomorrow the kids have their maths exam
Have you fed the fish this morning? — Hai dato da mangiare ai pesci stamattina?
Dobbiamo cambiare la password del wifi — We need to change the wifi password
I'll take care of dinner tonight — Stasera penso io alla cena
Vorrei cambiare la data della prenotazione — I'd like to change the booking date
Do you sell umbrellas here? — Vendete ombrelli qui?
Abbiamo dimenticato la carta d'imbarco a casa — We forgot the boarding pass at home
The delivery is expected tomorrow morning — La consegna è prevista domani mattina
Mio marito porta il cane dal veterinario — My husband is taking the dog to the vet
We should confirm the appointment by phone — Dovremmo confermare l'appuntamento per telefono
Hai controllato la posta elettronica oggi? — Have you checked your email today?
I'll water the garden tomorrow morning — Innaffierò il giardino domani mattina
Il negozio apre alle nove — The shop opens at nine
Can you help me set up the new printer? — Puoi aiutarmi a configurare la nuova stampante?
Domani portiamo la spesa a casa dei nonni — Tomorrow we'll bring the shopping to grandma and grandpa's house
I need to change some money before the trip — Devo cambiare un po' di soldi prima del viaggio
Ci vediamo alla fermata del treno — Let's meet at the train stop
Is there a lift in this building? — C'è un ascensore in questo palazzo?
Stasera controlliamo insieme i compiti — Tonight we'll check the homework together
Ho dimenticato di prenotare il tavolo per stasera — I forgot to book the table for tonight
Could you turn up the heating a bit? — Potresti alzare un po' il riscaldamento?
Il pullman è in ritardo di venti minuti — The coach is running twenty minutes late
We're thinking about repainting the bedroom — Stiamo pensando di ridipingere la camera da letto
Ho perso lo scontrino della spesa — I lost the shopping receipt
Can you show me the way to the station? — Puoi indicarmi la strada per la stazione?
Domani abbiamo il colloquio di lavoro — Tomorrow we have the job interview
Have you watered the plants today? — Hai innaffiato le piante oggi?
Dobbiamo prenotare il dentista per i bambini — We need to book the dentist for the kids
I'll take out the recycling tonight — Stasera porto fuori la differenziata
Vorrei restituire questo paio di scarpe — I'd like to return this pair of shoes
Do you have this jacket in another colour? — Avete questa giacca in un altro colore?
Abbiamo lasciato le luci accese tutta la notte — We left the lights on all night
The parcel should arrive by Friday — Il pacco dovrebbe arrivare entro venerdì
Mia figlia ha una recita a scuola domani — My daughter has a school play tomorrow
We should double-check the flight times — Dovremmo ricontrollare gli orari del volo
Hai chiuso il rubinetto del gas? — Did you turn off the gas tap?
I'll pick up some bread on the way back — Prendo del pane tornando indietro
Il bar chiude presto la domenica — The café closes early on Sundays
Can you check if there's still milk in the fridge? — Puoi controllare se c'è ancora latte in frigo?
Domani portiamo la macchina dal meccanico per il tagliando — Tomorrow we're taking the car to the mechanic for a service
I need to renew my driving licence — Devo rinnovare la patente
Ci vediamo all'uscita della scuola — Let's meet at the school gate
Is there parking nearby? — C'è un parcheggio nelle vicinanze?
Stasera prepariamo le valigie insieme — Tonight we'll pack the suitcases together
Ho lasciato il telefono a casa per sbaglio — I accidentally left my phone at home
Could you switch the channel, please? — Potresti cambiare canale, per favore?
Il negozio di alimentari apre alle otto — The grocery store opens at eight
We're going to visit my in-laws this weekend — Questo weekend andiamo a trovare i suoceri
Ho dimenticato di spegnere la stufa — I forgot to turn off the heater
Can you help me carry the boxes upstairs? — Puoi aiutarmi a portare le scatole di sopra?
Domani abbiamo la riunione dei genitori a scuola — Tomorrow we have the parents' meeting at school
Did you turn off your alarm before the holidays? — Hai disattivato la sveglia prima delle vacanze?
Dobbiamo cambiare le batterie del telecomando — We need to change the remote's batteries
I'll walk the dog before breakfast — Porto fuori il cane prima di colazione
Vorremmo cambiare la stanza, è troppo rumorosa — We'd like to change rooms, it's too noisy
Do you close for lunch? — Chiudete per la pausa pranzo?
Abbiamo lasciato il forno acceso per sbaglio — We accidentally left the oven on
The train has been cancelled due to a strike — Il treno è stato cancellato per uno sciopero
Mio padre porta i nipoti al parco oggi — My father is taking the grandchildren to the park today
We should confirm our seats at the theatre — Dovremmo confermare i nostri posti a teatro
Hai stampato i biglietti per il concerto? — Have you printed the concert tickets?
I'll charge my laptop before the meeting — Carico il portatile prima della riunione
Il negozio di scarpe è chiuso il lunedì — The shoe shop is closed on Mondays
Can you turn the volume down, the baby is sleeping? — Puoi abbassare il volume, il bambino dorme?
Domani portiamo i documenti in comune — Tomorrow we'll bring the documents to the town hall
I need to update the software on my computer — Devo aggiornare il software sul computer
Ci vediamo al parcheggio dietro il supermercato — Let's meet at the car park behind the supermarket
Is there a pharmacy open on Sundays? — C'è una farmacia aperta la domenica?
Stasera controlliamo insieme la lista della spesa — Tonight we'll check the shopping list together
Porto, Portogallo — Da vedere: il Ponte Dom Luís I, le cantine di vino a Vila Nova de Gaia, il quartiere Ribeira. Consiglio pratico: attraversa il ponte a piedi al tramonto per la vista migliore sul fiume Douro.
Lisbona, Portogallo — Da vedere: il quartiere di Alfama, il Castello di São Jorge, la Torre di Belém. Consiglio pratico: usa il tram 28 per salire le colline del centro storico senza fatica.
Siviglia, Spagna — Da vedere: la Cattedrale, l'Alcázar, il quartiere di Triana. Consiglio pratico: visita l'Alcázar la mattina presto per evitare la calura e la folla.
Barcellona, Spagna — Da vedere: la Sagrada Família, il Parco Güell, il quartiere Gotico. Consiglio pratico: prenota online i biglietti della Sagrada Família con largo anticipo.
Bilbao, Spagna — Da vedere: il Museo Guggenheim, il Casco Viejo, il ponte di Zubizuri. Consiglio pratico: assaggia i pintxos nei bar del centro storico nel tardo pomeriggio.
Parigi, Francia — Da vedere: la Torre Eiffel, il Louvre, Montmartre. Consiglio pratico: sali sulla Torre Eiffel a piedi fino al secondo piano per saltare parte della fila.
Lione, Francia — Da vedere: il quartiere di Vieux Lyon, la Basilica di Notre-Dame de Fourvière, i traboules. Consiglio pratico: chiedi in un bar locale come raggiungere i passaggi segreti chiamati traboules.
Nizza, Francia — Da vedere: la Promenade des Anglais, la Città Vecchia, la collina del Castello. Consiglio pratico: sali alla collina del Castello all'alba per una vista sulla baia senza folla.
Bordeaux, Francia — Da vedere: Place de la Bourse, il quartiere Saint-Pierre, la Cité du Vin. Consiglio pratico: prenota una degustazione di vino in una delle cantine vicine alla città.
Amsterdam, Paesi Bassi — Da vedere: i canali del centro storico, la casa di Anna Frank, il quartiere Jordaan. Consiglio pratico: esplora i canali in bicicletta, il mezzo più comodo per muoversi in città.
Bruges, Belgio — Da vedere: la Piazza del Mercato, il campanile, i canali. Consiglio pratico: fai un giro in barca lungo i canali nel tardo pomeriggio, con luce più morbida.
Bruxelles, Belgio — Da vedere: la Grand Place, l'Atomium, il quartiere europeo. Consiglio pratico: assaggia le patatine fritte belghe in una delle friggitorie storiche del centro.
Berlino, Germania — Da vedere: la Porta di Brandeburgo, il Museo Pergamon, i resti del Muro. Consiglio pratico: dedica mezza giornata all'East Side Gallery per vedere i murales sul Muro.
Monaco di Baviera, Germania — Da vedere: Marienplatz, il Municipio Nuovo, il parco Englischer Garten. Consiglio pratico: assisti al concerto delle campane del Glockenspiel a mezzogiorno.
Amburgo, Germania — Da vedere: il porto storico, la Speicherstadt, la Elbphilharmonie. Consiglio pratico: sali sulla terrazza panoramica dell'Elbphilharmonie, spesso gratuita con prenotazione.
Vienna, Austria — Da vedere: il Palazzo di Schönbrunn, la Cattedrale di Santo Stefano, i caffè storici. Consiglio pratico: prenota con anticipo l'ingresso a Schönbrunn per evitare le code.
Salisburgo, Austria — Da vedere: la Fortezza di Hohensalzburg, la Città Vecchia, la casa natale di Mozart. Consiglio pratico: sali alla fortezza in funicolare per una vista completa sulla città.
Zurigo, Svizzera — Da vedere: il lago di Zurigo, la Città Vecchia, la Bahnhofstrasse. Consiglio pratico: fai una passeggiata lungo il lago nel tardo pomeriggio, quando la luce è più suggestiva.
Lucerna, Svizzera — Da vedere: il Ponte della Cappella, il Monte Pilatus, la Città Vecchia. Consiglio pratico: sali sul Monte Pilatus con la funivia per una vista sulle Alpi in giornate serene.
Praga, Repubblica Ceca — Da vedere: il Ponte Carlo, il Castello di Praga, la Piazza della Città Vecchia. Consiglio pratico: attraversa il Ponte Carlo all'alba per goderlo senza la folla del giorno.
Cracovia, Polonia — Da vedere: la Piazza del Mercato, il Castello di Wawel, il quartiere di Kazimierz. Consiglio pratico: prenota in anticipo una visita guidata alle miniere di sale di Wieliczka.
Budapest, Ungheria — Da vedere: il Bastione dei Pescatori, il Parlamento, le terme Széchenyi. Consiglio pratico: visita il Bastione dei Pescatori al tramonto per la vista migliore sul Danubio.
Lubiana, Slovenia — Da vedere: il Castello, il ponte dei Draghi, il centro storico lungo il fiume Ljubljanica. Consiglio pratico: sali al castello con la funicolare per risparmiare tempo ed energie.
Zagabria, Croazia — Da vedere: la Cattedrale, il quartiere Gornji Grad, il mercato di Dolac. Consiglio pratico: visita il mercato di Dolac al mattino, quando i banchi sono più forniti.
Dubrovnik, Croazia — Da vedere: le Mura cittadine, la Città Vecchia, il forte di Lovrijenac. Consiglio pratico: cammina sulle mura nelle prime ore del mattino per evitare caldo e folla.
Atene, Grecia — Da vedere: l'Acropoli, il Partenone, il quartiere di Plaka. Consiglio pratico: visita l'Acropoli appena apre, prima che il caldo e la folla aumentino.
Santorini, Grecia — Da vedere: il villaggio di Oia, le case bianche di Fira, le spiagge vulcaniche. Consiglio pratico: raggiungi Oia in anticipo per trovare un buon posto e ammirare il tramonto.
Copenaghen, Danimarca — Da vedere: Nyhavn, il palazzo di Christiansborg, i giardini di Tivoli. Consiglio pratico: gira il quartiere di Nyhavn in bicicletta, il mezzo più diffuso in città.
Stoccolma, Svezia — Da vedere: il centro storico di Gamla Stan, il Museo Vasa, il municipio. Consiglio pratico: visita il Museo Vasa nelle prime ore per godertelo con calma.
Oslo, Norvegia — Da vedere: il Parco Vigeland, il Municipio, il museo delle navi vichinghe. Consiglio pratico: prendi il traghetto per la penisola di Bygdøy per visitare i musei marittimi.
Bergen, Norvegia — Da vedere: il quartiere di Bryggen, il mercato del pesce, il monte Fløyen. Consiglio pratico: sali sul monte Fløyen con la funicolare per una vista sui fiordi.
Helsinki, Finlandia — Da vedere: la Cattedrale bianca, la fortezza di Suomenlinna, il mercato del porto. Consiglio pratico: raggiungi Suomenlinna in traghetto, incluso nel biglietto dei trasporti urbani.
Reykjavik, Islanda — Da vedere: la chiesa di Hallgrímskirkja, il porto vecchio, la laguna blu vicina. Consiglio pratico: prenota con anticipo un tour per l'osservazione dell'aurora boreale in inverno.
Edimburgo, Scozia — Da vedere: il Castello, il Royal Mile, la collina di Arthur's Seat. Consiglio pratico: cammina fino ad Arthur's Seat al mattino presto per una vista sulla città senza folla.
Londra, Inghilterra — Da vedere: il Big Ben, il British Museum, il quartiere di Notting Hill. Consiglio pratico: usa la Oyster card per muoverti in modo economico su bus e metropolitana.
Dublino, Irlanda — Da vedere: il Trinity College, il quartiere di Temple Bar, la Guinness Storehouse. Consiglio pratico: prenota online i biglietti per la Guinness Storehouse per saltare la fila.
Tallinn, Estonia — Da vedere: la Città Vecchia medievale, la collina di Toompea, le mura cittadine. Consiglio pratico: percorri le mura panoramiche nel tardo pomeriggio per una luce più suggestiva.
Riga, Lettonia — Da vedere: la Città Vecchia, la Casa delle Teste Nere, il mercato centrale. Consiglio pratico: visita il mercato centrale, allestito in antichi hangar per dirigibili.
Vilnius, Lituania — Da vedere: la Città Vecchia, la collina dei Tre Croci, il quartiere di Uzupis. Consiglio pratico: sali alla collina delle Tre Croci per una vista d'insieme sulla città.
Valletta, Malta — Da vedere: la Concattedrale di San Giovanni, i Giardini Barrakka, le fortificazioni. Consiglio pratico: visita i Giardini Barrakka a mezzogiorno per assistere allo sparo del cannone.
Lussemburgo, Lussemburgo — Da vedere: la Città Vecchia, le Casematte del Bock, il quartiere di Grund. Consiglio pratico: scendi nel quartiere di Grund per una vista dal basso sulle fortificazioni.
Monaco, Principato di Monaco — Da vedere: il Palazzo dei Principi, il Museo Oceanografico, il porto di Monte Carlo. Consiglio pratico: assisti al cambio della guardia davanti al Palazzo dei Principi a mezzogiorno.
San Marino, San Marino — Da vedere: le Tre Torri, il centro storico, il Museo di Stato. Consiglio pratico: raggiungi la prima torre a piedi per una vista panoramica sulla Romagna.
Sintra, Portogallo — Da vedere: il Palazzo Nazionale, il Palácio da Pena, il Castello dei Mori. Consiglio pratico: arriva presto al mattino, i palazzi diventano molto affollati nel weekend.
Granada, Spagna — Da vedere: l'Alhambra, il quartiere Albaicín, il Generalife. Consiglio pratico: prenota il biglietto per l'Alhambra con largo anticipo, spesso esaurito con settimane di preavviso.
Verona, Italia — Da vedere: l'Arena romana, la Casa di Giulietta, Piazza delle Erbe. Consiglio pratico: assisti a uno spettacolo estivo nell'Arena se il periodo del viaggio coincide con la stagione lirica.
Firenze, Italia — Da vedere: il Duomo, gli Uffizi, Ponte Vecchio. Consiglio pratico: prenota online il biglietto degli Uffizi per evitare le lunghe code all'ingresso.
Venezia, Italia — Da vedere: Piazza San Marco, il Ponte di Rialto, il quartiere di Cannaregio. Consiglio pratico: esplora Cannaregio nelle prime ore del mattino per vivere Venezia lontano dalla folla.
Matera, Italia — Da vedere: i Sassi, la Cattedrale, le chiese rupestri. Consiglio pratico: visita i Sassi anche di sera, quando l'illuminazione rende l'atmosfera particolarmente suggestiva.
Danzica, Polonia — Da vedere: la Città Vecchia, la via Długa, il porto storico. Consiglio pratico: passeggia lungo la via Długa la sera, quando le facciate colorate sono illuminate.
I am waiting for the bus. — Sto aspettando l'autobus.
She will travel to Rome next summer. — Lei viaggerà a Roma la prossima estate.
We visited the museum yesterday. — Abbiamo visitato il museo ieri.
Can I have the bill, please? — Posso avere il conto, per favore?
He is doing his homework. — Lui sta facendo i compiti.
They will move to a new house next month. — Si trasferiranno in una nuova casa il mese prossimo.
I usually take the train to work. — Di solito prendo il treno per andare al lavoro.
Where is the nearest pharmacy? — Dov'è la farmacia più vicina?
My sister works in an office downtown. — Mia sorella lavora in un ufficio in centro.
We were watching a movie when the phone rang. — Stavamo guardando un film quando ha squillato il telefono.
Could you help me find this address? — Potrebbe aiutarmi a trovare questo indirizzo?
The children are playing in the garden. — I bambini stanno giocando in giardino.
I have already booked the hotel room. — Ho già prenotato la camera d'albergo.
She works as a teacher at the local school. — Lei lavora come insegnante nella scuola del quartiere.
We will meet at the station at six. — Ci incontreremo alla stazione alle sei.
He forgot his umbrella at home. — Ha dimenticato l'ombrello a casa.
I would like to try on this jacket. — Vorrei provare questa giacca.
The plane departs from gate twelve. — L'aereo parte dal gate dodici.
My parents are cooking dinner together. — I miei genitori stanno cucinando la cena insieme.
I need to renew my passport soon. — Devo rinnovare il passaporto presto.
The shop closes at eight in the evening. — Il negozio chiude alle otto di sera.
We are learning English at school this year. — Quest'anno stiamo imparando l'inglese a scuola.
He missed the last train home. — Ha perso l'ultimo treno per tornare a casa.
I will call you as soon as I arrive. — Ti chiamerò appena arrivo.
The family gathered for a birthday dinner. — La famiglia si è riunita per una cena di compleanno.
I Neanderthal seppellivano i loro morti, spesso con oggetti simbolici. — preistoria
La grotta di Chauvet, in Francia, contiene pitture rupestri risalenti a circa 36.000 anni fa. — preistoria
Le veneri paleolitiche sono piccole statuette femminili scolpite a partire da circa 40.000 anni fa. — preistoria
Il primo cane addomesticato risale a circa 15.000 anni fa, secondo le stime più accreditate. — preistoria
L'uomo di Cro-Magnon è il nome dato ai primi Homo sapiens europei, vissuti circa 40.000 anni fa. — preistoria
Gli utensili in pietra scheggiata più antichi conosciuti, trovati a Lomekwi in Kenya, risalgono a circa 3,3 milioni di anni fa. — preistoria
Il mammut lanoso si estinse quasi ovunque circa 10.000 anni fa, ma piccole popolazioni sopravvissero sull'isola di Wrangel fino a circa 4.000 anni fa. — preistoria
Durante le glaciazioni, ampie zone come Doggerland collegavano la Gran Bretagna al continente europeo. — preistoria
Göbekli Tepe, in Turchia, è considerato uno dei più antichi complessi monumentali costruiti dall'uomo, con circa 11.000 anni. — preistoria
I Denisova sono un gruppo umano arcaico conosciuto principalmente da resti fossili trovati in Siberia. — preistoria
Il fossile noto come Lucy, un Australopithecus afarensis, fu scoperto in Etiopia nel 1974. — preistoria
Il Ragazzo di Turkana è uno scheletro quasi completo di Homo erectus, vissuto circa 1,5 milioni di anni fa. — preistoria
L'atlatl, o propulsore, permetteva ai cacciatori preistorici di lanciare le lance con maggiore forza e distanza. — preistoria
Le più antiche ceramiche conosciute, trovate a Dolní Věstonice, risalgono a circa 29.000 anni fa. — preistoria
L'ocra rossa veniva usata dall'uomo preistorico sia come pigmento sia, forse, in rituali simbolici. — preistoria
Il periodo Mesolitico segna la fase di transizione tra il Paleolitico e il Neolitico. — preistoria
Gli aghi in osso, usati per cucire pelli e tessuti, sono tra le più antiche testimonianze dell'abbigliamento umano. — preistoria
Stonehenge, in Inghilterra, fu costruito in diverse fasi a partire da circa 5.000 anni fa. — preistoria
Lo Smilodon, noto come tigre dai denti a sciabola, si estinse insieme a gran parte della megafauna del Pleistocene. — preistoria
L'alce irlandese, con corna che potevano superare i tre metri di apertura, si estinse circa 7.700 anni fa. — preistoria
Le prime tracce di fuoco controllato dall'uomo risalgono forse a circa 1 milione di anni fa, anche se la data resta dibattuta. — preistoria
L'industria litica Acheuleana, caratterizzata dalle amigdale, fu usata per centinaia di migliaia di anni. — preistoria
Il ponte di terra di Beringia collegava l'Asia al Nord America durante le epoche glaciali. — preistoria
I megaliti europei, come i dolmen e i menhir, venivano spesso eretti per scopi funerari o rituali. — preistoria
Le più antiche evidenze di fibre e corde intrecciate risalgono a circa 30.000 anni fa. — preistoria
I have never been to London. — Non sono mai stato a Londra.
We are going shopping this afternoon. — Questo pomeriggio andiamo a fare shopping.
She had already left when I arrived. — Lei era già partita quando sono arrivato.
Can you close the door, it's cold in here. — Puoi chiudere la porta, fa freddo qui.
They are renovating their kitchen. — Stanno ristrutturando la cucina.
I will finish this report by Friday. — Finirò questo rapporto entro venerdì.
We took the wrong bus this morning. — Stamattina abbiamo preso l'autobus sbagliato.
My brother is studying for his exams. — Mio fratello sta studiando per gli esami.
Excuse me, does this train stop at the airport? — Mi scusi, questo treno ferma all'aeroporto?
The waiter recommended the fish of the day. — Il cameriere ha consigliato il pesce del giorno.
I was reading when the lights went out. — Stavo leggendo quando è andata via la luce.
We will visit our grandparents this weekend. — Questo fine settimana andremo dai nonni.
He always arrives late to meetings. — Arriva sempre tardi alle riunioni.
Could you lower the price a little? — Potrebbe abbassare un po' il prezzo?
I have lost my keys again. — Ho perso di nuovo le chiavi.
The plane was delayed because of the storm. — L'aereo ha subito un ritardo a causa del temporale.
We are packing our suitcases for the trip. — Stiamo facendo le valigie per il viaggio.
She will start a new job next Monday. — Lei inizierà un nuovo lavoro lunedì prossimo.
I need directions to the town hall. — Ho bisogno di indicazioni per il municipio.
My colleagues are preparing the presentation. — I miei colleghi stanno preparando la presentazione.
We used to walk to school every day. — Andavamo a scuola a piedi ogni giorno.
Is there a fitting room nearby? — C'è un camerino qui vicino?
He fixed the car by himself. — Ha riparato l'auto da solo.
The kids will play football in the park. — I bambini giocheranno a calcio nel parco.
I forgot to lock the front door. — Ho dimenticato di chiudere a chiave la porta d'ingresso.
Il Codice di Hammurabi, risalente al XVIII secolo a.C., è una delle più antiche raccolte di leggi scritte conosciute. — Babilonia
La civiltà della Valle dell'Indo sviluppò città pianificate come Mohenjo-Daro e Harappa già nel III millennio a.C. — civiltà antiche
Gli Accadi, guidati da Sargon, crearono uno dei primi imperi della storia intorno al 2334 a.C. — Mesopotamia
La città sumera di Uruk è considerata tra i primi grandi centri urbani della storia. — Mesopotamia
I Sumeri svilupparono un sistema numerico in base sessanta, ancora oggi usato per misurare il tempo. — Mesopotamia
La civiltà minoica, fiorita a Creta, costruì complessi palaziali come quello di Cnosso. — civiltà antiche
Gli Ittiti, in Anatolia, furono tra i primi popoli a lavorare sistematicamente il ferro. — civiltà antiche
La civiltà micenea, in Grecia, precedette di secoli l'epoca classica greca. — civiltà antiche
L'antico Egitto fu unificato sotto un unico faraone intorno al 3100 a.C., secondo la tradizione con Narmer. — Egitto
Il fiume Nilo, con le sue inondazioni regolari, permise lo sviluppo dell'agricoltura nell'antico Egitto. — Egitto
La dinastia Shang, in Cina, è la prima per cui esistono testimonianze scritte, risalenti a circa il 1600 a.C. — civiltà antiche
Gli Assiri costruirono uno dei più grandi imperi del Vicino Oriente antico, con capitale Ninive. — Mesopotamia
I Fenici erano celebri navigatori e commercianti che fondarono colonie in tutto il Mediterraneo. — civiltà antiche
La città di Ebla, in Siria, ha restituito migliaia di tavolette cuneiformi risalenti al III millennio a.C. — Mesopotamia
Nella civiltà egizia, gli scribi occupavano un ruolo sociale di grande prestigio. — Egitto
I Sumeri costruirono le prime ziqqurat, templi a gradoni dedicati alle divinità cittadine. — Mesopotamia
L'Epopea di Gilgamesh, scritta in Mesopotamia, è considerata tra le più antiche opere letterarie conosciute. — Mesopotamia
La civiltà olmeca, in Mesoamerica, è considerata la cultura madre delle successive civiltà come Maya e Aztechi. — civiltà antiche
L'antico regno di Kush, a sud dell'Egitto, sviluppò una propria scrittura e costruì piramidi proprie. — civiltà antiche
I Babilonesi svilupparono conoscenze astronomiche avanzate, registrando i movimenti dei pianeti su tavolette. — Babilonia
La civiltà di Norte Chico, in Perù, è tra le più antiche civiltà urbane delle Americhe. — civiltà antiche
Il tempio di Karnak, in Egitto, fu ampliato nel corso di secoli da diversi faraoni. — Egitto
Gli Elamiti, nell'attuale Iran, svilupparono una civiltà parallela a quella sumera in Mesopotamia. — civiltà antiche
La scrittura della Valle dell'Indo non è ancora stata decifrata con certezza dagli studiosi. — civiltà antiche
I primi documenti scritti servivano principalmente per la contabilità e l'amministrazione dei beni. — storia della scrittura
I need to make a doctor's appointment. — Devo prendere un appuntamento dal medico.
We will celebrate her birthday at a restaurant. — Festeggeremo il suo compleanno al ristorante.
He has been working here for ten years. — Lavora qui da dieci anni.
Could you send me the invoice by email? — Potrebbe inviarmi la fattura via email?
I am looking for a book about ancient history. — Sto cercando un libro sulla storia antica.
They will get married next spring. — Si sposeranno la prossima primavera.
We had dinner with our neighbors last night. — Ieri sera abbiamo cenato con i vicini di casa.
I usually go to the gym after work. — Di solito vado in palestra dopo il lavoro.
Is this seat taken? — Questo posto è occupato?
She is learning to play the piano. — Sta imparando a suonare il piano.
We will call a taxi to the airport. — Chiameremo un taxi per l'aeroporto.
I dropped my phone and broke the screen. — Mi è caduto il telefono e si è rotto lo schermo.
He is fixing the wifi connection. — Sta sistemando la connessione wifi.
We were stuck in traffic for an hour. — Siamo rimasti bloccati nel traffico per un'ora.
Could you water the plants while I'm away? — Potresti annaffiare le piante mentre sono via?
I will pick up the kids from school. — Andrò a prendere i bambini a scuola.
The bank is closed on Sundays. — La banca è chiusa la domenica.
We are planning a trip to the mountains. — Stiamo pianificando un viaggio in montagna.
He lost his job last month. — Ha perso il lavoro il mese scorso.
I need a haircut before the wedding. — Ho bisogno di un taglio di capelli prima del matrimonio.
She will send the package tomorrow morning. — Spedirà il pacco domani mattina.
We are cleaning the house before the guests arrive. — Stiamo pulendo la casa prima che arrivino gli ospiti.
I forgot my wallet at the restaurant. — Ho dimenticato il portafoglio al ristorante.
The weather will improve by the weekend. — Il tempo migliorerà entro il fine settimana.
He walks the dog every morning. — Porta a spasso il cane ogni mattina.
I Sumeri abitavano la Mesopotamia meridionale, tra i fiumi Tigri ed Eufrate. — civiltà sumera
La città di Ur fu uno dei più importanti centri urbani sumeri, nota anche per le sue tombe reali. — civiltà sumera
I Sumeri inventarono la scrittura cuneiforme incidendo simboli su tavolette di argilla fresca. — civiltà sumera
Ogni città sumera era governata come uno stato indipendente, spesso in competizione con le altre. — civiltà sumera
I sacerdoti sumeri amministravano i templi, che fungevano anche da centri economici. — civiltà sumera
I Sumeri svilupparono uno dei primi calendari lunari conosciuti. — civiltà sumera
La ziggurat di Ur, dedicata al dio Nanna, è uno degli edifici sumeri meglio conservati. — civiltà sumera
I Sumeri usavano sigilli cilindrici per firmare documenti e proteggere le merci. — civiltà sumera
Il termine Sumeri deriva dal nome accadico dato a questo popolo, che chiamava se stesso in altro modo nella propria lingua. — civiltà sumera
I Sumeri credevano in un pantheon di divinità legate ai fenomeni naturali e alle città. — civiltà sumera
La città di Lagash fu un importante centro sumero, noto per lunghe rivalità con Umma. — civiltà sumera
I Sumeri svilupparono sistemi di irrigazione per sfruttare le acque di Tigri ed Eufrate. — civiltà sumera
Le prime scuole conosciute, chiamate edubba, formavano gli scribi sumeri fin da giovani. — civiltà sumera
I Sumeri redigevano contratti scritti per compravendite, prestiti e matrimoni. — civiltà sumera
La lista reale sumera elenca sovrani leggendari con regni di durata straordinaria. — civiltà sumera
I Sumeri usavano un sistema contabile basato su piccoli gettoni di argilla per registrare beni. — civiltà sumera
La città di Eridu è considerata da alcuni la più antica città sumera secondo la tradizione mitologica. — civiltà sumera
I Sumeri costruivano le loro case con mattoni di fango essiccato al sole. — civiltà sumera
Il mito sumero del diluvio universale precede di secoli quello narrato nella Bibbia. — civiltà sumera
I Sumeri praticavano il commercio a lunga distanza, scambiando grano e tessuti con metalli e legname. — civiltà sumera
La civiltà sumera fu progressivamente assorbita da Accadi e Babilonesi intorno al II millennio a.C. — civiltà sumera
I Sumeri divisero il cerchio in 360 parti, un'eredità ancora oggi usata in geometria. — civiltà sumera
Le tavolette sumere più antiche contenevano soprattutto registrazioni di magazzino e razioni alimentari. — civiltà sumera
I Sumeri costruirono canali artificiali per il trasporto fluviale delle merci. — civiltà sumera
La dea Inanna, associata all'amore e alla guerra, era una delle divinità più venerate dai Sumeri. — civiltà sumera
I have to return this book to the library. — Devo restituire questo libro in biblioteca.
We will paint the fence this weekend. — Questo fine settimana tingeremo la staccionata.
She was cooking when the phone rang. — Stava cucinando quando ha squillato il telefono.
Can you show me the way to the nearest station? — Puoi indicarmi la strada per la stazione più vicina?
They are building a new bridge downtown. — Stanno costruendo un nuovo ponte in centro.
I will submit the application tomorrow. — Invierò la domanda domani.
We missed the connecting flight. — Abbiamo perso il volo di coincidenza.
My cousin is visiting us next week. — Mio cugino ci verrà a trovare la prossima settimana.
Excuse me, where can I buy a bus ticket? — Mi scusi, dove posso comprare un biglietto dell'autobus?
The teacher explained the lesson again. — L'insegnante ha spiegato di nuovo la lezione.
I was sleeping when the alarm went off. — Stavo dormendo quando è suonata la sveglia.
We will repaint the living room next month. — Ridipingeremo il soggiorno il mese prossimo.
He always checks his email before breakfast. — Controlla sempre le email prima di colazione.
Could you repeat that, please? — Potresti ripetere, per favore?
I have broken my glasses again. — Ho rotto di nuovo gli occhiali.
The concert was cancelled due to rain. — Il concerto è stato annullato a causa della pioggia.
We are organizing a surprise party for him. — Stiamo organizzando una festa a sorpresa per lui.
She will graduate next June. — Lei si laureerà a giugno prossimo.
I need to charge my phone before we leave. — Devo caricare il telefono prima di uscire.
My colleagues are working on a new project. — I miei colleghi stanno lavorando a un nuovo progetto.
We used to spend summers at the seaside. — Passavamo le estati al mare.
Is there a supermarket around the corner? — C'è un supermercato dietro l'angolo?
He repaired the roof after the storm. — Ha riparato il tetto dopo la tempesta.
The students will present their projects on Friday. — Gli studenti presenteranno i loro progetti venerdì.
I forgot to turn off the oven. — Ho dimenticato di spegnere il forno.
Gli imbalsamatori egizi rimuovevano gli organi interni del defunto e li conservavano in appositi vasi canopi. — antico Egitto
Il Libro dei Morti raccoglieva formule magiche destinate ad accompagnare il defunto nell'aldilà. — antico Egitto
Maat era la dea egizia dell'ordine cosmico, della verità e della giustizia. — antico Egitto
L'ankh, croce con un'ansa superiore, era il simbolo egizio della vita. — antico Egitto
Il faraone Akhenaton tentò di imporre il culto quasi esclusivo del dio Aton, il disco solare. — antico Egitto
Il celebre busto di Nefertiti fu scoperto ad Amarna nel 1912. — antico Egitto
Ramesse II regnò per circa sessantasei anni e fece costruire i templi di Abu Simbel. — antico Egitto
Cleopatra VII fu l'ultima sovrana dell'Egitto tolemaico, morta nel 30 a.C. — antico Egitto
La Sfinge di Giza fu scolpita da un unico blocco di roccia calcarea naturale. — antico Egitto
Il calendario egizio, tra i più antichi conosciuti, era diviso in tre stagioni legate alle piene del Nilo. — antico Egitto
Il villaggio di Deir el-Medina ospitava gli artigiani che costruivano le tombe reali nella Valle dei Re. — antico Egitto
Il senet, un antico gioco da tavolo egizio, è tra i più antichi giochi conosciuti al mondo. — antico Egitto
Gli egizi ricavavano il papiro da una pianta acquatica diffusa lungo il Nilo, usandolo per scrivere. — antico Egitto
La Valle dei Re, sulla sponda occidentale del Nilo, ospita le tombe di numerosi faraoni del Nuovo Regno. — antico Egitto
Gli obelischi egizi erano spesso dedicati al dio del sole Ra. — antico Egitto
Il blu egizio è considerato uno dei primi pigmenti sintetici prodotti dall'uomo. — antico Egitto
Lo scarabeo era un amuleto molto diffuso nell'antico Egitto, simbolo di rinascita. — antico Egitto
Hatshepsut, una delle poche donne faraone, organizzò una celebre spedizione commerciale verso la terra di Punt. — antico Egitto
Thot, dio egizio della scrittura e della saggezza, era spesso raffigurato con la testa di ibis. — antico Egitto
I sacerdoti egizi si radevano completamente il corpo come segno di purezza rituale. — antico Egitto
Secondo la religione egizia, il cuore del defunto veniva pesato sulla bilancia contro la piuma di Maat. — antico Egitto
Il faraone era considerato un dio vivente e mediatore tra gli dei e il popolo. — antico Egitto
I Colossi di Memnone sono due enormi statue erette in onore del faraone Amenhotep III. — antico Egitto
Il papiro Edwin Smith, uno dei più antichi testi medici conosciuti, descrive casi chirurgici e traumatici. — antico Egitto
La piramide a gradoni di Djoser, attribuita all'architetto Imhotep, è considerata il primo grande edificio in pietra della storia. — antico Egitto
I need to withdraw some cash from the ATM. — Devo prelevare dei contanti al bancomat.
We will watch the sunset from the terrace. — Guarderemo il tramonto dalla terrazza.
She has just finished her shift at the hospital. — Ha appena finito il turno in ospedale.
Could you turn on the heating, please? — Potresti accendere il riscaldamento, per favore?
They are painting the fence in the garden. — Stanno tinteggiando la staccionata in giardino.
I will train for the marathon this year. — Mi allenerò per la maratona quest'anno.
We rented a car for the weekend. — Abbiamo noleggiato un'auto per il fine settimana.
My grandmother is knitting a scarf. — Mia nonna sta lavorando a maglia una sciarpa.
Excuse me, is this seat free? — Mi scusi, questo posto è libero?
He was jogging in the park this morning. — Stamattina stava facendo jogging nel parco.
We will attend the concert next Friday. — Andremo al concerto venerdì prossimo.
I dropped my keys down the drain. — Mi sono caduto le chiavi nel tombino.
She is preparing for a job interview. — Si sta preparando per un colloquio di lavoro.
We were camping when the storm started. — Eravamo in campeggio quando è iniziato il temporale.
Could you feed the cat this evening? — Potresti dar da mangiare al gatto stasera?
I will return the rented equipment tomorrow. — Restituirò l'attrezzatura noleggiata domani.
The library closes early on Saturdays. — La biblioteca chiude presto il sabato.
We are planting tomatoes in the garden. — Stiamo piantando pomodori in giardino.
He broke his arm while skiing. — Si è rotto un braccio sciando.
I need new batteries for the remote. — Ho bisogno di pile nuove per il telecomando.
She will publish her first novel next year. — Pubblicherà il suo primo romanzo l'anno prossimo.
We are decorating the house for Christmas. — Stiamo addobbando la casa per Natale.
I forgot my umbrella at the office. — Ho dimenticato l'ombrello in ufficio.
The train was ten minutes late this morning. — Il treno stamattina è arrivato con dieci minuti di ritardo.
He volunteers at the shelter on weekends. — Fa volontariato al rifugio nei weekend.
La cittadella di Micene era protetta da mura ciclopiche e dalla celebre Porta dei Leoni. — civiltà micenea
La lineare B, usata dai Micenei, fu decifrata solo nel 1952 da Michael Ventris. — civiltà micenea
Heinrich Schliemann scavò il sito di Micene nell'Ottocento, portando alla luce la cosiddetta maschera di Agamennone. — civiltà micenea
La civiltà micenea fiorì approssimativamente tra il 1600 e il 1100 a.C. — civiltà micenea
Il collasso della civiltà micenea, intorno al 1200 a.C., aprì la fase nota come Medioevo ellenico. — civiltà micenea
Le città greche antiche, chiamate poleis, erano entità politiche indipendenti tra loro. — antica Grecia
Sparta educava i giovani attraverso un rigido addestramento noto come agoge. — antica Grecia
Le riforme di Clistene, ad Atene nel 508 a.C., posero le basi della democrazia ateniese. — antica Grecia
Nella battaglia di Maratona, nel 490 a.C., gli Ateniesi sconfissero l'esercito persiano. — antica Grecia
Alle Termopili, nel 480 a.C., un piccolo contingente greco guidato da Leonida resistette a lungo alle forze persiane. — antica Grecia
Nella battaglia navale di Salamina, nel 480 a.C., la flotta greca sconfisse quella persiana. — antica Grecia
Sotto la guida di Pericle, Atene visse un periodo di grande fioritura culturale e politica nel V secolo a.C. — antica Grecia
Il teatro greco nacque nell'ambito di feste religiose dedicate al dio Dioniso. — antica Grecia
Il giuramento di Ippocrate stabiliva principi etici ancora oggi centrali nella pratica medica. — antica Grecia
La guerra del Peloponneso, tra Atene e Sparta, si protrasse dal 431 al 404 a.C. — antica Grecia
La Lega di Delo fu un'alleanza militare guidata da Atene contro la minaccia persiana. — antica Grecia
I Greci fondarono numerose colonie lungo le coste del Mediterraneo e del Mar Nero. — antica Grecia
Le leggi di Draconte, ad Atene, erano note per la loro estrema severità. — antica Grecia
Solone introdusse riforme ad Atene che posero le premesse per i futuri sviluppi democratici. — antica Grecia
L'agorà era il principale spazio pubblico delle città greche, centro di commercio e vita politica. — antica Grecia
La falange oplitica era la formazione di combattimento tipica dei soldati greci pesantemente armati. — antica Grecia
Tucidide è considerato tra i fondatori della storiografia basata sull'analisi critica delle fonti. — antica Grecia
Erodoto viene spesso definito il padre della storia per la sua opera sulle guerre persiane. — antica Grecia
Le tombe a tholos, a forma di alveare, sono tipiche dell'architettura funeraria micenea. — civiltà micenea
I Micenei praticavano un'economia palaziale, con i beni gestiti e redistribuiti dal potere centrale. — civiltà micenea
I have to renew my gym membership. — Devo rinnovare l'abbonamento in palestra.
We will host my in-laws for dinner tonight. — Stasera ospiteremo i miei suoceri per cena.
She had finished the exam before the bell rang. — Aveva finito l'esame prima che suonasse la campanella.
Could you switch off the printer, please? — Potresti spegnere la stampante, per favore?
They are installing new windows in the house. — Stanno installando nuove finestre in casa.
I will apply for a promotion next month. — Farò domanda per una promozione il mese prossimo.
We booked a table for our anniversary. — Abbiamo prenotato un tavolo per il nostro anniversario.
My uncle is teaching me how to fish. — Mio zio mi sta insegnando a pescare.
Excuse me, is this the queue for the ticket office? — Mi scusi, è questa la fila per la biglietteria?
He was working from home when the internet went down. — Stava lavorando da casa quando è saltata la connessione internet.
We will join a language course in September. — A settembre inizieremo un corso di lingua.
I spilled coffee on my laptop this morning. — Stamattina ho versato il caffè sul portatile.
She is negotiating a new contract with her employer. — Sta negoziando un nuovo contratto con il datore di lavoro.
We were hiking when it started to rain heavily. — Stavamo facendo trekking quando ha iniziato a piovere forte.
Could you separate the recycling before Friday? — Potresti fare la raccolta differenziata prima di venerdì?
I will return your umbrella tomorrow. — Ti restituirò l'ombrello domani.
The plumber is fixing the leak in the bathroom. — L'idraulico sta riparando la perdita in bagno.
We are considering moving abroad next year. — Stiamo pensando di trasferirci all'estero l'anno prossimo.
He sprained his ankle during the match. — Si è slogato la caviglia durante la partita.
I need to update my insurance policy. — Devo aggiornare la mia polizza assicurativa.
She will host a video call with the whole team. — Organizzerà una videochiamata con tutto il team.
We are borrowing our neighbor's ladder. — Stiamo prendendo in prestito la scala del vicino.
Is there a discount for students at the museum? — C'è uno sconto per studenti al museo?
He commutes to work by bicycle every day. — Va al lavoro in bicicletta ogni giorno.
The electrician will come to check the fuse box. — L'elettricista verrà a controllare il quadro elettrico.
Socrate fu condannato a morte ad Atene nel 399 a.C. e costretto a bere la cicuta. — antica Grecia
Platone fondò ad Atene l'Accademia, una delle prime istituzioni di alta formazione del mondo occidentale. — antica Grecia
Aristotele fondò il Liceo ad Atene dopo aver lasciato l'Accademia di Platone. — antica Grecia
Alessandro Magno fu istruito in gioventù dal filosofo Aristotele. — antica Grecia
L'impero di Alessandro Magno, al suo apice, si estese dalla Grecia fino al nord-ovest dell'India. — antica Grecia
Alessandro Magno morì a Babilonia nel 323 a.C. all'età di trentadue anni. — antica Grecia
Il periodo ellenistico iniziò dopo la morte di Alessandro e diffuse la cultura greca su un vasto territorio. — antica Grecia
Gli ateniesi potevano votare per esiliare una persona per dieci anni attraverso la pratica dell'ostracismo. — antica Grecia
La trireme greca era una veloce nave da guerra spinta da tre file di rematori. — antica Grecia
Secondo la leggenda, il corridore Fidippide corse da Maratona ad Atene per annunciare la vittoria greca. — antica Grecia
I tre principali ordini architettonici dell'antica Grecia erano dorico, ionico e corinzio. — antica Grecia
L'identità di Omero, autore dell'Iliade e dell'Odissea, resta oggetto di dibattito tra gli studiosi. — antica Grecia
I simposi greci erano incontri in cui gli uomini discutevano di filosofia e politica bevendo vino. — antica Grecia
Eracle compì dodici straordinarie fatiche come penitenza impostagli dal re Euristeo. — mitologia greca
Teseo uccise il Minotauro all'interno del labirinto costruito da Dedalo a Creta. — mitologia greca
Giasone guidò gli Argonauti in una spedizione per recuperare il Vello d'Oro. — mitologia greca
Secondo il mito, Prometeo rubò il fuoco agli dei e lo donò all'umanità. — mitologia greca
Sisifo fu condannato a spingere in eterno un masso su per una collina nell'oltretomba. — mitologia greca
Orfeo scese nell'oltretomba per riportare in vita la moglie Euridice. — mitologia greca
Narciso si innamorò del proprio riflesso e si consumò contemplandolo. — mitologia greca
I Titani, generazione di divinità precedente, furono spodestati dagli dei dell'Olimpo guidati da Zeus. — mitologia greca
Caronte era il traghettatore mitologico che conduceva le anime attraverso il fiume Stige. — mitologia greca
Cerbero era il cane a tre teste che sorvegliava l'ingresso dell'oltretomba. — mitologia greca
Nike era la divinità greca che personificava la vittoria. — mitologia greca
Estia era la dea del focolare e della vita domestica tra le divinità dell'Olimpo. — mitologia greca
Il tempo non si trova, si organizza.
`;
const QUOTES = QUOTES_RAW.split('\n').map(s => s.trim()).filter(s => s.length > 0);
