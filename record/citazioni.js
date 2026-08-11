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
Il tempo non si trova, si organizza.

`;
const QUOTES = QUOTES_RAW.split('\n').map(s => s.trim()).filter(s => s.length > 0);
