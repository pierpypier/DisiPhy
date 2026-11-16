/* ---------- DUEMILA · Dal Giubileo alla fiamma di Milano Cortina (Torino, L'Aquila, Lampedusa, Roma, Genova, Bergamo, Parigi, Cortina d'Ampezzo) ---------- */
/* Un'intera giornata da sinistra a destra, e ventisei anni che si piegano (dal Giubileo del 2000 ai bracieri olimpici del 2026: l'euro, Pavarotti e le Olimpiadi della neve, il terremoto e la ricostruzione,
   Lampedusa, i due Papi e l'Oscar di Morricone, il ponte nuovo di Genova, il silenzio di Bergamo e l'Europeo, Notre-Dame che rinasce, Milano Cortina):
   alba a Torino, mattina all'Aquila, tarda mattina a Lampedusa, mezzogiorno a Roma, primo pomeriggio a Genova, pomeriggio a Bergamo, tardo pomeriggio a Parigi, notte a Cortina d'Ampezzo.
   In fondo, in Piazza Dibona, la fiamma del braciere si allarga in una rete di luci che copre l'Italia, l'Europa e il mondo: lì il motore mette il varco.
   Testi, tappe e dialoghi vengono da duemila.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico). Gli oggetti stanno in questo stesso file (nomi che iniziano per "dq"):
   elementi.js NON è stato modificato; si riusano solo funzioni già esistenti (PR._av, PR._nv, PR._ot, PR._mv, PR._fe, PR._gr, PR._rn) e fig() di disegno.js.
   Il tono per i temi dolorosi (11 settembre, terremoti, naufragi, ponte Morandi, pandemia, guerra) è sobrio e rispettoso: nessuna immagine di violenza. */
(function(){
const GT=372,W1=29400;
const P=PR._mv,N=PR._nv,O=PR._ot,A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {muro,matt,tetto,merl,fumo,fuoco,campanile,cupola}=P;
const F=PR._fe,{ln,cane,asino,pecora,cavallo,gatto}=F;
const G=PR._gr,{cip,pino}=G;
const {uom,dam,lampgas,lampel,panni,wq,orologio,valigia,mare,molo,barcaV,platano}=O;
const {tvc,crt,auto,bici,gru,bandiera,stella,cassa,sacco,palma,mat,lenz,baita,fiat500,vespa}=N;
const {cartello,acqua}=PR._rn;
const md=(i,n)=>((i%n)+n)%n;
const Z=[0,3780,6720,10920,14280,17640,22260,25620,29400];   /* inizio di ognuna delle 8 zone */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
/* luce: [posizione nel mondo, buio da 0 (giorno) a 1 (notte)] */
const NF=[[0,.14],[1400,0],[Z[6]+1500,.02],[Z[7]-300,.3],[Z[7]+500,.78],[Z[7]+1400,.9],[W1,.95]];
const nf=wx=>{if(wx<=NF[0][0])return NF[0][1];for(let i=1;i<NF.length;i++)if(wx<=NF[i][0]){const a=NF[i-1],b=NF[i];return a[1]+(b[1]-a[1])*(wx-a[0])/(b[0]-a[0])}return NF[NF.length-1][1]};
const INTRO="Duemila, dall’alba alla notte. Parti da Torino, dove una scienziata di quasi cent’anni guarda le Olimpiadi della neve e il mondo comincia a pagare in euro; poi L’Aquila, che si rialza pietra dopo pietra, e Lampedusa, l’isola dei pescatori e delle tartarughe che da sola tiene aperta una porta sul mare. A mezzogiorno Roma, dove un compositore con la scacchiera ha appena vinto il suo secondo Oscar; nel primo pomeriggio Genova, che rifà un ponte in meno di due anni, e poi Bergamo, che impara cosa vuol dire resistere. Infine Parigi, con una cattedrale che torna a respirare, e una notte sulle Dolomiti, dove due bracieri si accendono insieme. Il tempo qui si piega: scienziati, pescatori, infermiere e carpentieri di ogni anno ti vengono incontro.";
const NZ=[9,7,10,8,8,11,8,9];
const LKTXT=[
"Torino, antica capitale e città dell’auto, sta cambiando pelle: dentro la Mole Antonelliana, il grande monumento a forma di guglia, nel 2000 si trasferisce il Museo Nazionale del Cinema, e in città arrivano musei, caffè e locali nuovi. Sotto le Alpi, fra portici e palazzi sabaudi, i torinesi si preparano a un’impresa che nessuno immaginava: ospitare le Olimpiadi della neve.",
"Nella notte tra il 24 e il 25 dicembre 1999 Giovanni Paolo II apre la Porta Santa di San Pietro, a Roma, e comincia il Grande Giubileo del Duemila, che si chiude il 6 gennaio 2001. Nell’agosto del 2000, per la Giornata Mondiale della Gioventù, a Tor Vergata si riuniscono più di due milioni di ragazzi di circa centosessanta Paesi.",
"L’11 settembre 2001 quattro aerei di linea vengono dirottati negli Stati Uniti: due colpiscono le Torri Gemelle di New York, uno il Pentagono, uno cade in Pennsylvania. Quasi tremila persone perdono la vita e il mondo intero segue gli eventi in diretta alla televisione. È uno dei giorni che cambiano l’inizio del secolo. Il tono è molto sobrio e rispettoso.",
"Il 15 gennaio 2001 nasce Wikipedia, l’enciclopedia scritta da tutti; il 4 febbraio 2004 un universitario americano lancia Facebook e il 14 febbraio 2005 nasce YouTube. Intanto in Italia tutti cominciano ad avere un telefonino: ci si scrive con gli SMS e ci si saluta con le suonerie. Pochi anni dopo, nel 2007, arriverà anche lo smartphone.",
"Il 1° gennaio 2002 le monete e le banconote in euro entrano in tasca a milioni di europei, in dodici Paesi. In Italia la lira resta valida solo fino al 28 febbraio 2002; un euro vale 1936,27 lire. I negozianti hanno un doppio prezzo sulle etichette, e per settimane in ogni bar si fanno i conti a mente.",
"Il 2 aprile 2005, alle 21.37, Giovanni Paolo II muore a Roma a 84 anni. I funerali si svolgono in Piazza San Pietro l’8 aprile. Pochi giorni dopo, il 19 aprile, dopo un Conclave di due giorni e quattro votazioni, viene eletto Benedetto XVI. Il tono è sobrio e rispettoso.",
"Dal 10 al 26 febbraio 2006 Torino ospita i XX Giochi olimpici invernali, i primi in Italia dopo Cortina 1956. L’apertura è seguita da circa due miliardi di persone: la fiaccola è accesa da Stefania Belmondo e Luciano Pavarotti canta \"Nessun dorma\" nella sua ultima esibizione in pubblico. L’Italia vince 11 medaglie, di cui 5 d’oro, e per la prima volta i Giochi si vedono anche sui telefonini.",
"Il 9 luglio 2006, all’Olympiastadion di Berlino, l’Italia di Marcello Lippi batte la Francia ai rigori (5-3, dopo l’1-1 dei tempi supplementari) e vince il Mondiale di calcio per la quarta volta. Il giorno dopo, a Roma, al Circo Massimo, secondo il sindaco di allora, si ritrovano circa settecentomila persone per festeggiare.",
"Al mattino i torinesi prendono il bicerin, una bevanda calda fatta di caffè, cioccolato e crema di latte servita in un bicchierino di vetro, e un gianduiotto, il cioccolatino alla nocciola. Secondo la tradizione, a Torino sono nati anche i grissini. A fine giornata si va all’aperitivo.",
"L’Aquila, capoluogo dell’Abruzzo, fu fondata nel Duecento, secondo la leggenda, da novantanove castelli che si unirono in una sola città: per questo il numero novantanove compare ovunque, come nella Fontana delle 99 Cannelle. Ogni anno, il 28 e 29 agosto, si celebra la Perdonanza Celestiniana: la Porta Santa della Basilica di Collemaggio si apre per ricordare il perdono concesso da Celestino V nel 1294. Intorno alla città si coltiva lo zafferano di Navelli e sotto il Gran Sasso c’è un grande laboratorio di fisica sotterraneo.",
"Alle 3.32 della notte tra il 5 e il 6 aprile 2009 una forte scossa di terremoto colpisce L’Aquila e i paesi vicini. Muoiono 309 persone, i feriti sono circa 1600 e circa 70mila persone restano senza casa; il paese di Onna è quasi del tutto distrutto. Il tono è molto sobrio e rispettoso: non si mostra la violenza del crollo.",
"Dall’8 al 10 luglio 2009, tre mesi dopo il terremoto, i capi di Stato e di governo dei grandi Paesi del mondo si riuniscono per il G8 nella scuola della Guardia di Finanza di Coppito, alle porte della città. L’attenzione del mondo arriva all’Aquila, mentre molti aquilani vivono ancora nelle tende e negli alloggi provvisori.",
"Dopo il 2009 l’Aquila non si arrende: ogni anno la Perdonanza Celestiniana continua, e a poco a poco i ponteggi salgono sui palazzi e riaprono le strade. Per ricostruire un centro storico antico, pietra su pietra, serve molto tempo; nel 2026 L’Aquila sarà Capitale italiana della cultura.",
"Il 9 gennaio 2007 viene presentato il primo iPhone, in vendita dal 29 giugno 2007: il telefono diventa un piccolo computer. Il 15 settembre 2008 fallisce negli Stati Uniti la banca Lehman Brothers e comincia una grave crisi economica che arriva anche in Europa, con anni di lavoro incerto e di prezzi che crescono.",
"Il 13 gennaio 2012 la nave da crociera Costa Concordia urta uno scoglio davanti all’Isola del Giglio e si inclina: a bordo ci sono 4229 persone, più di 4000 si salvano, ma i morti sono 32. Il 20 e il 29 maggio 2012 due forti terremoti scuotono l’Emilia, provocando 27 vittime e migliaia di sfollati. Il tono è sobrio e rispettoso.",
"In Abruzzo si mangiano gli arrosticini, spiedini di carne di pecora tagliata a cubetti, cotti sulla brace in una lunga fornacella: secondo la tradizione nascono dai pastori. A tavola c’è anche il pecorino, e lo zafferano di Navelli, raccolto a mano all’alba, profuma risotti e dolci.",
"Lampedusa è la maggiore delle isole Pelagie, in Sicilia: dista circa duecento chilometri dalla costa siciliana e poco più di cento dalla Tunisia. Ci vivono circa seimila persone. Dal 1995 una riserva naturale tutela i suoi tratti di costa più belli, come la Spiaggia dei Conigli.",
"Sull’isola si vive soprattutto di pesca e, in estate, di turismo. I pescatori escono all’alba con piccole barche e rientrano a metà mattina con cassette di pesce azzurro, calamari e ricciole; di notte, a volte, pescano con le lampare. Le reti si riparano ogni giorno sulla banchina.",
"Da giugno a settembre le tartarughe marine Caretta caretta depongono le uova sulle spiagge di Lampedusa, in particolare all’Isola dei Conigli: volontari e ambientalisti controllano i nidi. Alcune tartarughe, prese per errore dagli ami dei pescatori, vengono portate al Centro di recupero, curate e liberate in mare.",
"Le case tradizionali di Lampedusa sono i dammusi: costruzioni basse, in pietra, con i muri molto spessi e il tetto a cupola, dipinti di bianco per tenere il fresco. Le finestre sono piccole, e dentro l’aria resta fresca anche con il caldo più forte.",
"Nel 2011, dopo le rivolte in Tunisia e in Libia, migliaia di persone arrivano a Lampedusa dall’Africa in barca. Da allora l’isola, con la Guardia Costiera, i pescatori, i medici e i volontari, diventa un punto di accoglienza e di salvataggio. Il tono è sobrio e rispettoso, senza prendere posizione sulle scelte politiche.",
"L’8 luglio 2013 Papa Francesco compie a Lampedusa il suo primo viaggio fuori da Roma: getta in mare una corona di fiori in ricordo di chi è morto nella traversata e celebra la Messa su un altare fatto con il legno di una barca. Parla della \"globalizzazione dell’indifferenza\", cioè del rischio di non accorgersi più degli altri.",
"Il 3 ottobre 2013, davanti a Lampedusa, un barcone con circa cinquecento persone, partito dalla Libia, prende fuoco e affonda a poche centinaia di metri dall’isola: le vittime accertate sono 368, i sopravvissuti 155. Dal 2016 una legge italiana dedica il 3 ottobre alla memoria delle vittime dell’immigrazione. Il tono è molto sobrio e rispettoso; non si mostra violenza.",
"Dopo il 3 ottobre 2013 l’Italia lancia l’operazione Mare Nostrum, una missione di salvataggio in mare che dura dal 18 ottobre 2013 al 31 ottobre 2014; dal 1° novembre 2014 la sostituisce una missione europea, Triton. Sull’isola sorge la Porta d’Europa, un monumento di ceramica bianca realizzato nel 2008 dall’artista Mimmo Paladino per ricordare chi non è arrivato.",
"Nel 2016 il documentario \"Fuocoammare\" di Gianfranco Rosi, girato per quasi un anno a Lampedusa, vince l’Orso d’oro al Festival di Berlino e nel 2017 è candidato all’Oscar. Racconta la vita di un ragazzino dell’isola, che costruisce fionde e studia l’inglese, accanto ai soccorsi in mare.",
"A Lampedusa si mangia pesce appena pescato, grigliato o in zuppa, con pomodorini, capperi e olio, e pane caldo; spesso la pasta si condisce con il pesce del giorno. Secondo l’uso dell’isola, si cena tardi, quando fa meno caldo.",
"Roma è la capitale d’Italia e la città dei Papi: nelle sue strade convivono duemila anni di storia, il traffico dei motorini, i tram e i turisti con il bastone per i selfie. Il Tevere scorre fra i palazzi ocra, e nei giardini i pini ombreggiano le passeggiate.",
"L’11 febbraio 2013 Benedetto XVI annuncia che lascerà il suo incarico di Papa: dal 28 febbraio la sede è vacante. Dopo il Conclave, il 13 marzo 2013 viene eletto il cardinale argentino Jorge Mario Bergoglio, il primo Papa gesuita e il primo proveniente dall’America Latina, che sceglie il nome di Francesco.",
"Il 2 marzo 2014 (la notte del 2 marzo, a Los Angeles) il film \"La grande bellezza\" del regista Paolo Sorrentino, girato fra i monumenti e le terrazze di Roma, vince l’Oscar come miglior film straniero: il cinema italiano torna sul palco dell’Academy dopo quindici anni.",
"Dal 1° maggio al 31 ottobre 2015 Milano ospita l’Esposizione Universale, dedicata al tema \"Nutrire il pianeta, energia per la vita\": 145 Paesi partecipano, e in sei mesi i visitatori sono più di 21 milioni. Simbolo del sito è l’Albero della Vita, una grande struttura di legno e acciaio che di sera si illumina con musica e fuochi.",
"Papa Francesco indice un Giubileo straordinario, detto \"della Misericordia\", che dura dall’8 dicembre 2015 al 20 novembre 2016. In tutto il mondo si aprono le Porte Sante, anche in cattedrali lontane da Roma, e a San Pietro arrivano milioni di pellegrini con il cappello e lo zaino.",
"Il 25 febbraio 2007 Ennio Morricone riceve un Oscar alla carriera, consegnato da Clint Eastwood. Il 28 febbraio 2016, a 87 anni, vince il suo primo Oscar vero e proprio per la colonna sonora del film \"The Hateful Eight\" di Quentin Tarantino: è la persona più anziana ad aver vinto un Oscar competitivo fino a quel momento. Dopo cinque candidature senza premio, ne arriva uno solo, ma giunge dopo tanti anni di lavoro.",
"A Roma si mangia l’amatriciana, un sugo di pomodoro, guanciale e pecorino che prende il nome dalla città di Amatrice, nel Lazio. Il 24 agosto 2016, alle 3.36, un terremoto di magnitudo 6.0 colpisce Amatrice e i paesi vicini: le vittime sono 299. Per questo, ogni anno, molte sagre e molte tavole romane ricordano Amatrice con un piatto di pasta. Il tono è molto sobrio e rispettoso.",
"A pranzo i romani mangiano carbonara, cacio e pepe, carciofi alla romana e supplì, le crocchette di riso fritte con la mozzarella dentro. Si finisce con un caffè al bancone, in piedi, e si discute di calcio.",
"Genova è un grande porto, con una città che sale dal mare alle colline e un centro storico fatto di vicoli stretti, i caruggi. La Lanterna, il faro di pietra, guida le navi da secoli; secondo la tradizione, qui è nato Cristoforo Colombo. Oggi il porto è pieno di container, e il Porto Antico, rinnovato dall’architetto genovese Renzo Piano, è il posto dove si passeggia la domenica.",
"Il 23 giugno 2016 i cittadini del Regno Unito votano in un referendum se restare o lasciare l’Unione europea: vince di poco chi vuole uscire. Il Regno Unito lascia l’Unione il 31 gennaio 2020, dopo anni di trattative. Il tono è neutro e descrittivo.",
"Il 15 aprile 2019, nel tardo pomeriggio, a Parigi si sviluppa un incendio nella cattedrale di Notre-Dame, all’inizio della Settimana Santa: crolla la guglia e brucia gran parte del tetto di legno. I pompieri lavorano tutta la notte per salvare le torri e le pareti; il mondo intero guarda la scena in televisione, e il presidente francese promette di ricostruire la cattedrale in cinque anni. Il tono è sobrio.",
"Il 14 agosto 2018, alle 11.36, durante un forte temporale, una parte del ponte Morandi, sul torrente Polcevera, a Genova, crolla: muoiono 43 persone, e alcune centinaia di abitanti delle case vicine devono lasciare le loro abitazioni. L’intero Paese partecipa al dolore di Genova. Il tono è molto sobrio e rispettoso; non si mostra violenza.",
"Nel giugno 2019 le parti rimaste del vecchio ponte vengono demolite; l’architetto genovese Renzo Piano dona alla città il progetto del nuovo viadotto, costruito da due grandi aziende italiane, anche di notte e senza fermarsi nemmeno durante l’emergenza del coronavirus. Il 28 aprile 2020 si posa l’ultima delle 19 campate, accolta dal suono delle sirene del cantiere e delle navi del porto.",
"Il 3 agosto 2020 viene inaugurato il ponte \"Genova San Giorgio\": è lungo 1067 metri, ha 19 campate sostenute da 18 pile di cemento armato ed è disegnato come la chiglia di una nave. Di sera si accendono 43 lampioni, uno per ogni vittima del vecchio ponte; il ponte si apre al traffico il 5 agosto.",
"A Genova la gente è riservata, concreta e un po’ brontolona: secondo la tradizione, i marinai genovesi hanno \"il diritto al mugugno\", cioè quello di lamentarsi senza offendere. Nei caruggi, le vie strette del centro, i panni stesi uniscono le case e si sente l’odore del pesto, fatto nel mortaio con basilico, pinoli, formaggio, aglio e olio.",
"A Genova la colazione è una fetta di focaccia calda con l’olio, a volte bagnata nel cappuccino, o un pezzo di farinata, la torta sottile di farina di ceci. A Recco, vicino a Genova, esiste anche la focaccia al formaggio, sottilissima e croccante: secondo la tradizione nasce nei periodi di assedio, quando in casa si trovava solo del formaggio.",
"Bergamo è divisa in due: Città Alta, antica e racchiusa dalle mura venete, patrimonio UNESCO dal 2017, e Città Bassa, più moderna. Le due parti sono unite da una storica funicolare. I bergamaschi dicono \"Bèrghem de hura\" e \"Bèrghem de hota\", la città di sopra e quella di sotto; nel 2023 la città è stata Capitale italiana della cultura insieme a Brescia.",
"Il 9 marzo 2020, con un decreto, tutta l’Italia diventa \"zona protetta\": comincia il lockdown, la chiusura per fermare il virus, che dura fino a maggio. Scuole, negozi e uffici si fermano, la gente resta in casa, dai balconi si canta e si espongono lenzuola con scritto \"Andrà tutto bene\". Il tono è sobrio e rispettoso.",
"La sera del 18 marzo 2020 una lunga colonna di camion dell’esercito esce dal cimitero di Bergamo, portando le bare delle vittime del coronavirus in altre città. L’immagine fa il giro del mondo; dal 2021 il 18 marzo è la Giornata nazionale in memoria delle vittime della pandemia. Il tono è molto sobrio e rispettoso: non si mostra nulla di violento.",
"Il 27 marzo 2020 Papa Francesco, da solo sotto la pioggia, prega nella grande Piazza San Pietro deserta per la fine della pandemia, in un momento seguito in diretta da persone di tutto il mondo. Dice che siamo tutti sulla stessa barca, fragili ma importanti.",
"Nei mesi del lockdown medici, infermieri e operatori sanitari lavorano giorno e notte con camici, mascherine e visiere. Dalle finestre, ogni sera, la gente applaude per ringraziarli. Molti ospedali italiani aprono nuovi reparti in pochi giorni.",
"Il 27 dicembre 2020 in Italia e in tutta Europa comincia la vaccinazione contro il coronavirus: la prima italiana a ricevere la dose è un’infermiera dell’Ospedale Spallanzani di Roma. Poco alla volta, nel 2021, le scuole, i negozi e i teatri riaprono.",
"Il 22 maggio 2021 a Rotterdam, in Olanda, il gruppo italiano dei Måneskin vince l’Eurovision Song Contest con \"Zitti e buoni\": l’Italia non vinceva da trentuno anni. I quattro ragazzi romani, giovanissimi, in poche settimane diventano famosi in tutto il mondo.",
"L’11 luglio 2021, allo stadio di Wembley a Londra, l’Italia di Roberto Mancini batte l’Inghilterra ai rigori (3-2, dopo l’1-1 dei tempi supplementari) e vince l’Europeo di calcio, cinquantatré anni dopo il primo titolo, quello del 1968. In tutta Italia la gente scende in strada con le bandiere.",
"Alle Olimpiadi di Tokyo, svolte nell’estate del 2021 per via della pandemia, l’Italia vince 40 medaglie, di cui 10 d’oro, un record. Il 1° agosto, in pochi minuti, Gianmarco Tamberi vince l’oro nel salto in alto (a pari merito con il qatariota Barshim) e Marcell Jacobs vince l’oro nei 100 metri.",
"Il 22 maggio 2024, a Dublino, l’Atalanta, la squadra di Bergamo, vince l’Europa League battendo il Bayer Leverkusen per 3-0: è il primo trofeo europeo nella storia del club. Una grande festa invade Bergamo, con migliaia di tifosi in piazza davanti al maxischermo.",
"A Bergamo si mangiano la polenta, spesso con i formaggi di montagna, e i casoncelli, la pasta ripiena condita con burro e pancetta. Fra i dolci ci sono la \"polenta e osei\", fatta di pan di Spagna e crema, e la torta Donizetti, in onore del compositore nato in città. Secondo la tradizione, la stracciatella, il gelato alla crema con scaglie di cioccolato, è nata proprio qui.",
"Parigi nasce sull’Île de la Cité, un’isola in mezzo alla Senna, dove sorge la cattedrale di Notre-Dame. Il fiume attraversa la città fra ponti di pietra, bancarelle di libri usati, battelli e palazzi chiari con i tetti grigi.",
"Il 24 febbraio 2022 la Russia attacca l’Ucraina: in Europa torna una guerra su larga scala, con milioni di persone costrette a lasciare la propria casa; molti Paesi europei, compresa l’Italia, accolgono i profughi. Il tono è sobrio e neutro, senza prendere posizione.",
"Il 30 novembre 2022 viene pubblicato ChatGPT, un programma di intelligenza artificiale con cui si può parlare scrivendo: in pochi mesi lo usano milioni di persone, per scrivere, studiare e programmare. Da allora l’intelligenza artificiale entra nella vita di tutti i giorni.",
"Dopo l’incendio del 2019 la cattedrale di Notre-Dame diventa un enorme cantiere: carpentieri, scalpellini, vetrai, scultori, organisti e restauratori lavorano insieme, in centinaia ogni giorno. La guglia, disegnata da Viollet-le-Duc nel 1859, viene ricostruita com’era, e la grande struttura di legno del tetto, chiamata \"la foresta\" perché usò oltre milleduecento querce, viene rifatta in legno di quercia, in parte lavorato a mano come nel Medioevo.",
"Dal 26 luglio all’11 agosto 2024 Parigi ospita i Giochi olimpici estivi. Per la prima volta la cerimonia di apertura non si svolge in uno stadio ma lungo la Senna, con gli atleti su battelli, sotto la pioggia; durante la cerimonia suonano di nuovo le campane di Notre-Dame. L’Italia vince 40 medaglie (12 d’oro, 13 d’argento e 15 di bronzo).",
"Il 7 dicembre 2024, a cinque anni e mezzo dall’incendio, la cattedrale riapre con una grande cerimonia alla presenza di capi di Stato e di governo; l’8 dicembre si celebra la prima Messa. Le campane suonano, la facciata è pulita e la guglia dorata sale di nuovo verso il cielo.",
"Il 24 dicembre 2024 Papa Francesco apre a San Pietro la Porta Santa del Giubileo 2025, \"dei pellegrini della speranza\". Il Papa muore il 21 aprile 2025; i funerali sono il 26 aprile e viene sepolto nella Basilica di Santa Maria Maggiore. L’8 maggio 2025 viene eletto Leone XIV, il primo Papa americano. Il Giubileo si chiude il 6 gennaio 2026, dopo circa 33 milioni di pellegrini. Il tono è sobrio e rispettoso.",
"A Parigi si fa colazione con un croissant al burro e un caffè con il latte, preso in piedi al bancone o a un tavolino di bistrot. In ogni quartiere c’è una boulangerie, una panetteria da cui, già al mattino presto, escono baguette calde e profumate.",
"Cortina d’Ampezzo si trova a 1224 metri, in una grande conca circondata da cime pallide, e da sempre è detta la \"Regina delle Dolomiti\". Le Dolomiti sono Patrimonio dell’Umanità UNESCO dal 26 giugno 2009. Al tramonto la roccia chiara si tinge di rosa: è l’enrosadira.",
"Nel 1956 Cortina ospita i VII Giochi olimpici invernali, i primi trasmessi in diretta televisiva a un pubblico di più Paesi europei. Il campione ampezzano di bob Eugenio Monti, detto il \"Rosso Volante\", corre sulla pista che porta ancora il suo nome. I Giochi trasformano Cortina in una località famosa in tutto il mondo.",
"Il 6 febbraio 2026 la cerimonia di apertura dei XXV Giochi olimpici invernali si svolge allo stadio di San Siro, a Milano, ma è diffusa su più luoghi. Per la prima volta nella storia dei Giochi si accendono due bracieri insieme, uno all’Arco della Pace a Milano e uno in Piazza Dibona a Cortina, al termine di un viaggio della fiamma di 63 giorni attraverso 110 province. A Milano lo accendono Alberto Tomba e Deborah Compagnoni; a Cortina Sofia Goggia e Gustav Thöni.",
"Sulle Tofane si corrono le gare di sci alpino femminile: l’Olimpia delle Tofane è una delle piste più veloci e difficili del circuito. Il nuovo Centro del ghiaccio per bob, slittino e skeleton sorge dove c’era la vecchia pista \"Eugenio Monti\", chiusa nel 2008 e ricostruita per i Giochi.",
"L’Italia chiude i Giochi del 2026 con 30 medaglie (10 d’oro, 6 d’argento e 14 di bronzo), il miglior risultato della sua storia alle Olimpiadi invernali, al quarto posto del medagliere. Fra i protagonisti ci sono Federica Brignone, con due ori nello sci alpino, Francesca Lollobrigida, con due ori nel pattinaggio di velocità, e Arianna Fontana, che arriva a 14 medaglie in vent’anni, da Torino 2006 a Milano Cortina. La cerimonia di chiusura è il 22 febbraio all’Arena di Verona.",
"Le mascotte dei Giochi sono due ermellini, Tina e Milo: Tina, bianca, rappresenta i Giochi olimpici, Milo, nato senza una zampina, cammina aiutandosi con la coda e rappresenta quelli paralimpici. I loro nomi richiamano Cortina e Milano. I Giochi paralimpici si svolgono dal 6 al 15 marzo 2026.",
"Il 31 marzo 2026, nella finale degli spareggi a Zenica, l’Italia viene eliminata dalla Bosnia ai rigori e non va ai Mondiali di calcio, per la terza volta di fila. Il torneo si gioca negli Stati Uniti, in Messico e in Canada e il 19 luglio 2026 la Spagna batte l’Argentina 1-0 dopo i supplementari. Il tono è neutro e un po’ ironico.",
"A Cortina si mangiano i casunziei, ravioli a mezzaluna ripieni di barbabietola rossa e conditi con burro fuso, canederli, zuppa d’orzo e polenta con i funghi. Sono piatti di montagna, che scaldano dopo una giornata sulla neve.",
"Il braciere olimpico di Cortina illumina la piazza con una luce arancione. Quando tutte le persone incontrate durante la giornata si sono salutate, la fiamma si allarga e si divide in tante piccole luci, come fiaccole: una per ogni volto incontrato, da Torino a Parigi. Le luci corrono sulle montagne, sulle strade, sui mari, sui ponti e sui tetti, e ricoprono l’Italia, l’Europa e il mondo, fino a fondersi in una grande luce bianca che copre tutto."
];
const NAME={"dm_rita": "Rita Levi-Montalcini, la scienziata", "dm_nicola": "Nicola, il muratore", "dm_salvatore": "Salvatore, il pescatore", "dm_morricone": "Ennio Morricone, il maestro", "dm_piero": "Piero, il carpentiere", "dm_chiara": "Chiara, l’infermiera", "dm_hugo": "Hugo, il carpentiere di Notre-Dame", "dm_ines": "Ines, la maestra di sci"};
const GREET={
"dm_rita": "Buongiorno, Pierpaolo! Siediti qui, che fa freddo ma la neve è bellissima.",
"dm_nicola": "Eh, benvenuto all’Aquila. Stai attento ai ponteggi, bello, che qui si costruisce.",
"dm_salvatore": "Amunì, vieni qui, siediti sulle reti. Hai già mangiato?",
"dm_morricone": "Buongiorno, giovanotto. Mi scusi se finisco questa mossa e poi la ascolto.",
"dm_piero": "Salve. Tieni il casco in testa, qui sotto si lavora. Ma dimmi, cercavi qualcuno?",
"dm_chiara": "Ciao! Siediti pure. Ho solo dieci minuti, ma per una chiacchierata va bene.",
"dm_hugo": "Salut, mon ami! Entra pure nel sagrato, stasera è una grande serata.",
"dm_ines": "Ciao, Pierpaolo! Vieni vicino al fuoco, che qui stanotte fa un freddo da lupi!"
};

/* ---- cielo: alba grigio-lilla e rosata, mattina limpida e fredda, tarda mattina abbagliante, mezzogiorno dorato, primo pomeriggio chiaro e ventoso, pomeriggio grigio-perla, tardo pomeriggio dorato, notte di stelle ---- */
const SKY=[[0,['#9a94b8','#d6c2d6','#f4dad4']],[1500,['#a0a8c8','#d8d4e4','#f2e4e0']],[Z[1],['#7ab0e0','#c4dcf0','#eaf0f4']],[Z[2],['#34a4ec','#96dcf4','#f6fafc']],[Z[3],['#4a9ce8','#b4d6f0','#fbe8c0']],[Z[4],['#6aa8e0','#cce0f0','#f0f2f4']],[Z[5],['#9ab0c0','#ccd4d8','#e6e4dc']],[Z[6],['#8aa8d0','#e8d4a8','#f8d890']],[Z[7]-900,['#7a98c8','#e8c898','#f8c880']],[Z[7]-150,['#4a4a8a','#c8789c','#f6b080']],[Z[7]+700,['#060a28','#0c1440','#142050']],[W1,['#04081e','#0a1238','#121c48']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,6*s);el(g,c,x-18*s,y+2*s,22*s,5*s);el(g,c,x+20*s,y+2*s,24*s,5*s)};
/* ---- livello 0: cielo, sole, luna sottile, stelle che girano, nuvole, nebbiolina dell'alba, perla di Bergamo, oro di Parigi ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const SE=Z[7]-300,nt=cl((xs-SE)/1500,0,1);
 if(nt>0){const an=t*.012,ca=Math.cos(an),sa=Math.sin(an);for(let i=0;i<190;i++){const bx=hr(i*3)*620-70,by=hr(i*7+1)*420-60,dx=bx-350,dy=by-70,sx=350+dx*ca-dy*sa,sy=70+dx*sa+dy*ca;if(sx<0||sx>480||sy<0||sy>GT)continue;const tw=.5+.5*Math.sin(t*2+i*1.7);dot(g,'rgba(255,252,235,'+(nt*(.3+.5*tw)*(sy<GT-60?1:.3))+')',sx,sy,.7+hr(i)*1.2)}}
 const u=cl(xs/SE,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*255,sf=cl((Z[7]+100-xs)/900,0,1);
 if(sf>.01){const low=1-Math.sin(u*Math.PI);g.globalAlpha=sf;const sg=g.createRadialGradient(sx,sy,6,sx,sy,240);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.3,'rgba(255,'+Math.round(210-low*70)+',140,.32)');sg.addColorStop(1,'rgba(255,200,120,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT+4);
  dot(g,'rgb(255,'+Math.round(250-low*70)+','+Math.round(215-low*110)+')',sx,sy,xs>Z[6]?15:19);g.globalAlpha=1}
 const mu=cl((xs-(Z[7]-200))/1500,0,1);if(mu>0){const mx=380-mu*40,my=110-mu*20;dot(g,'rgba(255,248,215,'+.1*mu+')',mx,my,30);dot(g,'rgba(246,240,214,'+mu+')',mx,my,12);const sp=skyAt(xs);dot(g,sp[0],mx+5,my-2,11*mu+1)}
 const cc=xs<1800?'rgba(240,222,226,.55)':xs<Z[7]-900?'rgba(255,255,255,.5)':xs<Z[7]+300?'rgba(255,176,140,.45)':'rgba(120,110,170,.14)';
 each(o-((t*3)%340)*.02,340,1,(x,i,r)=>{if(r>.4)return;nube(g,x+r*100,40+r*60,.9+r*.7,cc)});
 const fo=cl(1-xs/2400,0,1)*.35;if(fo>.01){g.fillStyle='rgba(222,214,226,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const bl=cl((xs-Z[2])/500,0,1)*cl((Z[3]-xs)/700,0,1)*.12;if(bl>.01){g.fillStyle='rgba(255,255,250,'+bl+')';g.fillRect(0,0,480,GT+4)}
 const fm=cl((xs-Z[5])/600,0,1)*cl((Z[6]-xs)/800,0,1)*.12;if(fm>.01){g.fillStyle='rgba(150,156,160,'+fm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-(Z[6]+600))/1200,0,1)*cl((Z[7]-xs)/900,0,1)*.2;if(wg>.01){g.fillStyle='rgba(255,170,80,'+wg+')';g.fillRect(0,0,480,GT+4)}}

/* ---- livello 1: orizzonte lontano ---- */
const CF=[1890,5250,8820,12600,15960,19950,23940,27510];
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(mixs(c,'#c4cce0',.25),'#262a5e',night*.72);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>{let e=cl((sp-Math.abs(xs-wc))/(sp*.5),0,1);if(wc==CF[0]&&xs<wc)e=1;if(wc==CF[7]&&xs>wc)e=1;return e};
 const mont=(sx,w,h,c,seed,snow)=>{const path=()=>{g.beginPath();g.moveTo(sx-w,hz+34);for(let q=0;q<=36;q++){const u=q/36,px=sx-w+u*2*w,hh=h*(Math.sin(u*Math.PI))*(.7+.3*Math.abs(Math.sin(u*7+seed)))+4*Math.sin(u*29+seed);g.lineTo(px,hz+14-hh)}g.lineTo(sx+w,hz+34);g.closePath()};g.fillStyle=dim(c);path();g.fill();if(snow){g.save();path();g.clip();g.fillStyle='rgba(255,255,255,'+(.85-night*.5)+')';g.fillRect(sx-w,hz-h-20,2*w,h+60);g.translate(0,h*snow*.4);g.fillStyle=dim(c);path();g.fill();g.restore()}};
 const lights=(sx,x0,x1,n)=>{if(night>.2)for(let q=0;q<n;q++){const tx=sx+x0+(x1-x0)*q/(n-1);glow(g,tx,hz+8-hr(q)*10,12,'255,180,80',.6*Math.min(1,night+.1));dot(g,'rgba(255,220,140,.95)',tx,hz+8-hr(q)*10,1.3)}};
 const casette=(sx,x0,x1,hh,cols,rf)=>{const cs=cols||['#e8dcc0','#d8c8a4','#c8a888','#e4d4b0'];for(let q=0;q<(x1-x0)/14;q++){const bx=sx+x0+q*14,h2=6+hr(q*3)*hh;rect(g,dim(cs[q%cs.length]),bx,hz+16-h2,11,h2+8);poly(g,dim(rf||'#b4583a'),[[bx-1,hz+16-h2],[bx+5.5,hz+11-h2],[bx+12,hz+16-h2]])}};
 const pinoF=(sx,x0,n,sp,hh)=>{for(let q=0;q<n;q++){const bx=sx+x0+q*sp;rect(g,dim('#5a4a34'),bx-.8,hz+6,1.6,10);el(g,dim('#3a5a34'),bx,hz+2-(hh||12)/2,(hh||12)*.5,(hh||12)*.4)}};
 const dome=(cx,r,c,lant)=>{g.fillStyle=dim(c);g.beginPath();g.arc(cx,hz+14,r,Math.PI,0);g.fill();rect(g,dim(c),cx-r,hz+10,2*r,6);if(lant){rect(g,dim(c),cx-2.4,hz+14-r-9,4.8,9);dot(g,dim(c),cx,hz+14-r-10,3.2);ln(g,dim('#e0b84a'),1.2,[cx,hz+14-r-13,cx,hz+14-r-19])}};
 const sea=(c1,c2)=>{const wg=g.createLinearGradient(0,hz+8,0,hz+34);wg.addColorStop(0,dim(c1));wg.addColorStop(1,dim(c2));g.fillStyle=wg;g.fillRect(0,hz+8,480,26)};
 const ship=(sx,sy,s,c)=>{poly(g,dim(c||'#2a2a30'),[[sx-18*s,sy],[sx-14*s,sy+5*s],[sx+16*s,sy+5*s],[sx+22*s,sy]]);rect(g,dim('#e8e0cc'),sx-12*s,sy-5*s,24*s,5*s);rect(g,dim('#e8e0cc'),sx-5*s,sy-10*s,10*s,5*s)};
 const peak=(sx,w,h,c,seed,sn)=>{const pts=[[sx-w,hz+34]];const n=14;for(let q=0;q<=n;q++){const u=q/n,e=1-Math.abs(u*2-1),hh=h*Math.pow(e,.8)*(.72+.28*hr(q*3+seed));pts.push([sx-w+u*2*w,hz+14-hh])}pts.push([sx+w,hz+34]);poly(g,dim(c),pts);if(sn){g.save();g.beginPath();pts.forEach((q,i)=>i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1]));g.closePath();g.clip();g.fillStyle='rgba(255,255,255,'+(.8-night*.45)+')';g.fillRect(sx-w,hz-h-10,2*w,h*.62);g.restore();poly(g,'rgba(40,50,90,'+(.12+night*.1)+')',[[sx,hz-h*.7],[sx+w*.5,hz+34],[sx+w,hz+34],[sx+w*.1,hz-h*.5]])}};
 /* zona 1: Alpi innevate con il Monviso, la collina di Superga con la basilica sopra Torino, tetti e ciminiere */
 const a1=env(CF[0],2300);if(a1>.02){g.globalAlpha=a1;const sx=fx(CF[0]);mont(sx-100,520,70,'#9a9cc0',6.1,.45);peak(sx+300,150,128,'#a8aece',3.6,1);mont(sx-480,240,80,'#9a9cc0',2.9,.4);
  mont(sx+640,120,38,'#7a8a6a',1.7);rect(g,dim('#e8e0d0'),sx+628,hz-6,24,14);dome(sx+640,10,'#c8b890',1);casette(sx,-520,300,16,['#e0d0b0','#d0c0a0','#e8dcc0','#d8c0b0']);lights(sx,-520,300,14);g.globalAlpha=1}
 /* zona 2: il Gran Sasso con la neve, i colli aquilani, i paesi di Onna e di Navelli, le gru lontane */
 const a2=env(CF[1],2000);if(a2>.02){g.globalAlpha=a2;const sx=fx(CF[1]);peak(sx-40,330,132,'#a8b0c4',2.5,1);peak(sx+380,170,84,'#b0b8cc',4.1,1);mont(sx-520,200,46,'#8a9a78',5.1);mont(sx+640,180,40,'#8a9a78',1.3);
  casette(sx,-460,-120,10,['#d8ccb0','#c8bca0','#e0d4b8']);casette(sx,200,520,10,['#d8ccb0','#c8bca0','#e0d4b8']);rect(g,dim('#c8bc98'),sx-210,hz-12,6,26);poly(g,dim('#8a5a44'),[[sx-212,hz-12],[sx-207,hz-20],[sx-202,hz-12]]);
  for(const cx of[-80,40,300]){ln(g,dim('#d8b020'),1.6,[sx+cx,hz+14,sx+cx,hz-24,sx+cx+22,hz-24]);ln(g,dim('#d8b020'),1,[sx+cx,hz-24,sx+cx+10,hz-24+12])}lights(sx,-460,520,12);g.globalAlpha=1}
 /* zona 3: il mare aperto, la costa bassa e rocciosa di Lampedusa, un traghetto bianco, l'Africa invisibile */
 const a3=env(CF[2],2300);if(a3>.02){g.globalAlpha=a3;const sx=fx(CF[2]);sea('#34c8e0','#1a98c8');rect(g,dim('#e0d8bc'),sx-380,hz+10,520,7);poly(g,dim('#d8d0b0'),[[sx-380,hz+10],[sx-340,hz+4],[sx-260,hz+5],[sx-160,hz+2],[sx-60,hz+6],[sx+20,hz+4],[sx+140,hz+10]]);
  for(let q=0;q<6;q++)el(g,dim('#5a8a4a'),sx-350+q*76,hz+6,9,3);ship(sx+300,hz+20,1.3,'#e8e4dc');for(let q=0;q<9;q++)el(g,'rgba(255,255,255,.45)',sx-420+q*110+((t*6+q*17)%30),hz+22+(q%3)*3,10,1.2);
  poly(g,dim('#e8e0c8'),[[sx-300,hz+10],[sx-296,hz-2],[sx-286,hz-2],[sx-282,hz+10]]);g.globalAlpha=1}
 /* zona 4: i Colli Albani, i pini di Roma, le linee degli antichi acquedotti, la cupola di San Pietro */
 const a4=env(CF[3],2300);if(a4>.02){g.globalAlpha=a4;const sx=fx(CF[3]);mont(sx-80,520,62,'#a8a88a',3.1);mont(sx+330,300,70,'#98a082',6.2);
  for(let q=0;q<14;q++){ar(g,dim('#c8b090'),sx-420+q*14,hz+16,10,32)}rect(g,dim('#c8b090'),sx-422,hz-18,196,4);casette(sx,-180,200,12,['#e0c090','#d8b080','#e8cc9c','#c8a070']);dome(sx+20,18,'#d8c8a8',1);pinoF(sx,-560,10,18,18);pinoF(sx,230,10,20,18);lights(sx,-180,200,8);g.globalAlpha=1}
 /* zona 5: il mare di Genova con la Lanterna, le colline coperte di case, le gru del porto, navi all'ancora */
 const a5=env(CF[4],2200);if(a5>.02){g.globalAlpha=a5;const sx=fx(CF[4]);sea('#6ab0d8','#3a78a8');mont(sx-200,420,70,'#7a8a78',3.1);mont(sx+360,300,86,'#6a7a68',6.2);
  casette(sx,-480,-120,24,['#e8c4a0','#d8a888','#e8d490','#c8907a']);casette(sx,180,420,26,['#e8c4a0','#d8a888','#e8d490','#c8907a']);
  poly(g,dim('#7a7468'),[[sx-20,hz+16],[sx-4,hz-4],[sx+50,hz-4],[sx+70,hz+16]]);rect(g,dim('#c8c0a8'),sx+6,hz-52,24,54);rect(g,dim('#a89e84'),sx+2,hz-54,32,3);rect(g,dim('#cfc8b0'),sx+12,hz-82,12,30);rect(g,dim(night>.3?'#ffe08a':'#e8d880'),sx+14,hz-92,8,10);poly(g,dim('#2a2a2e'),[[sx+12,hz-92],[sx+18,hz-100],[sx+24,hz-92]]);
  for(const cx of[-300,-250,-170]){ln(g,dim('#c8402a'),1.6,[sx+cx,hz+18,sx+cx,hz-10,sx+cx+16,hz-10]);rect(g,dim('#e8c030'),sx+cx+14,hz-10,3,12)}
  ship(sx-420,hz+22,1.2);ship(sx+120,hz+24,1,'#6a3a30');ship(sx+250,hz+20,.9);lights(sx,-480,420,14);g.globalAlpha=1}
 /* zona 6: le Prealpi bergamasche con la Presolana, la Città Alta con i suoi campanili e le mura */
 const a6=env(CF[5],2700);if(a6>.02){g.globalAlpha=a6;const sx=fx(CF[5]);peak(sx+260,260,106,'#a0a8b8',3.3,.45);peak(sx+560,200,84,'#a8b0bc',1.9,.3);mont(sx-420,300,50,'#8a9a80',2.2);
  mont(sx-80,260,52,'#8a9478',4.4);casette(sx,-300,120,12,['#d8c8a8','#c8b898','#e0d4b8'],'#a85a3a');rect(g,dim('#c8bc98'),sx-150,hz-14,7,28);poly(g,dim('#8a5a44'),[[sx-152,hz-14],[sx-146.5,hz-24],[sx-141,hz-14]]);rect(g,dim('#c8bc98'),sx-20,hz-8,6,22);poly(g,dim('#8a5a44'),[[sx-22,hz-8],[sx-17,hz-16],[sx-12,hz-8]]);dome(sx-60,9,'#a8b098',0);merl(g,sx-300,hz+14,420,dim('#b8ac90'),32);
  casette(sx,260,560,10,['#d8c8a8','#c8b898']);lights(sx,-300,120,10);g.globalAlpha=1}
 /* zona 7: i tetti grigi di Parigi con i comignoli, la collina di Montmartre con il Sacré-Cœur, la Tour Eiffel */
 const a7=env(CF[6],2300);if(a7>.02){g.globalAlpha=a7;const sx=fx(CF[6]);for(let q=0;q<46;q++){const bx=sx-560+q*24,h2=10+hr(q*5)*18;rect(g,dim(['#e8dcc0','#d8ccb0','#e0d4b8'][q%3]),bx,hz+16-h2,22,h2+8);poly(g,dim('#68707a'),[[bx-1,hz+16-h2],[bx+3,hz+10-h2],[bx+19,hz+10-h2],[bx+23,hz+16-h2]]);if(q%4==1)rect(g,dim('#8a5a44'),bx+15,hz+4-h2,2,6)}
  mont(sx-300,240,46,'#8a9a78',1.3);for(const d of[[-300,9],[-318,6],[-282,6]])dome(sx+d[0],d[1],'#f0ece0',d[1]>8);
  const ex=sx+330;poly(g,dim('#4a4440'),[[ex-14,hz+16],[ex-4,hz-52],[ex,hz-80],[ex+4,hz-52],[ex+14,hz+16]]);rect(g,dim('#4a4440'),ex-9,hz-24,18,3);ln(g,dim('#4a4440'),1,[ex-10,hz+4,ex+10,hz-22]);ln(g,dim('#4a4440'),1,[ex+10,hz+4,ex-10,hz-22]);lights(sx,-560,560,18);g.globalAlpha=1}
 /* zona 8: le Tofane, il Cristallo, il Sorapiss e le Cinque Torri pallide di luna e di neve */
 const a8=env(CF[7],2700);if(a8>.02){g.globalAlpha=a8;const sx=fx(CF[7]);peak(sx-420,260,110,'#7a84a8',2.2,1);peak(sx-60,230,138,'#8a94b8',4.4,1);peak(sx+260,210,120,'#8088b0',1.1,1);peak(sx+560,180,92,'#7a84a8',5.5,1);
  for(let q=0;q<5;q++){const bx=sx+700+q*16;poly(g,dim('#aab4d0'),[[bx-6,hz+22],[bx-4,hz-26-q%2*12],[bx+4,hz-26-q%2*12],[bx+6,hz+22]])}
  mont(sx-700,260,34,'#2a3a40',3.2);pinoF(sx,-700,22,26,18);casette(sx,-400,-60,12,['#8a7a68','#7a6a58','#9a8a74'],'#d8dce8');casette(sx,100,500,12,['#8a7a68','#7a6a58','#9a8a74'],'#d8dce8');lights(sx,-400,500,16);g.globalAlpha=1}}

/* ---- livello 2: palazzi e case lungo il percorso, più i monumenti grandi di ogni città ---- */
const abete=(g,x,y,h,sn,dim)=>{rect(g,dim?dim('#4a3a28'):'#4a3a28',x-1.6,y-10,3.2,10);for(let q=0;q<4;q++){const w=h*.3*(1-q*.18),yy=y-8-q*h*.2;poly(g,dim?dim('#2a5a3a'):'#2a5a3a',[[x-w,yy],[x,yy-h*.3],[x+w,yy]]);if(sn)poly(g,'rgba(255,255,255,.85)',[[x-w*.7,yy-h*.09],[x,yy-h*.3],[x+w*.7,yy-h*.09]])}};
function layerMid(g,o,t){const cam=o/.2,hz=326,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const wx=cam+x+120,zz=zn(wx);A.setDK(nf(cam+x));
  const band=['#8a8a96','#a09a90','#e8dcc0','#c8a878','#8a9098','#8a8c90','#b0aa9c','#dce4ec'][zz-1];rect(g,dim(band),x,hz+6,121,GT+4-hz-6);
  const win=(wx2,wy,w2,h2,sd)=>ar(g,hr(i*9+sd)>.4&&night>.25?'rgba(255,200,110,.85)':dim('#2a1810'),wx2,wy,w2,h2);
  const tall=(c,hh,ww,roof,cor)=>{rect(g,dim(c),x+8,hz+10-hh,ww,hh+14);rect(g,'rgba(255,255,255,.14)',x+8,hz+10-hh,5,hh+14);rect(g,'rgba(0,0,0,.12)',x+8+ww-8,hz+10-hh,8,hh+14);rect(g,dim(cor||'#c8b898'),x+6,hz+10-hh-3,ww+4,4);if(roof)poly(g,dim(roof),[[x+4,hz+10-hh-3],[x+8+ww/2,hz+10-hh-22],[x+12+ww,hz+10-hh-3]]);
   for(let q=0;q<Math.floor(ww/26);q++)for(let rr=0;rr<Math.floor(hh/34);rr++)win(x+14+q*26,hz+8-rr*34,10,20,q+rr*5)};
  if(zz==1){const hh=80+r*90,ww=r>.45?56:78;tall(['#d8a878','#c88a6a','#d8c078','#b8987a','#c8a090'][md(i,5)],hh,ww,null,'#a89878');for(let q=0;q<Math.floor(ww/18);q++)ar(g,dim('#4a3a30'),x+10+q*18,hz+16,14,22);rect(g,dim('#9a8a7a'),x+8,hz-6,ww,3);if(r<.3){rect(g,dim('#2a6ac8'),x+12,hz-hh*.5,16,24);dot(g,'#f0e8d8',x+20,hz-hh*.5+8,4)}rect(g,'rgba(255,255,255,.55)',x+6,hz+10-hh-4,ww+8,3)}
  else if(zz==2){if(r>.86){const cx=x+40;rect(g,dim('#d8b020'),cx,hz-110,5,126);ln(g,dim('#d8b020'),3,[cx+2,hz-108,cx+64,hz-108]);ln(g,dim('#8a8a8a'),1,[cx+54,hz-108,cx+54,hz-60]);rect(g,dim('#8a6a2a'),cx+50,hz-62,8,6)}else{const hh=80+r*60,ww=r>.45?70:96;tall(['#e4dcc4','#d8d0b8','#e0d8c0','#d0c8b0'][md(i,4)],hh,ww,null,'#b8aa88');if(r>.15&&r<.7){for(let q=0;q<5;q++)ln(g,dim('#6a6a70'),1.4,[x+10+q*(ww-4)/4,hz+14,x+10+q*(ww-4)/4,hz-hh]);for(let q=0;q<5;q++)ln(g,dim('#6a6a70'),1.4,[x+10,hz-q*hh/5.5,x+8+ww,hz-q*hh/5.5])}}}
  else if(zz==3){if(r>.8){palma(g,x+60,hz+12,t)}else{const hh=26+r*26,ww=r>.3?62:48;rect(g,dim('#f6f2e6'),x+10,hz+10-hh,ww,hh+14);g.fillStyle=dim('#f6f2e6');g.beginPath();g.ellipse(x+10+ww/2,hz+10-hh,ww*.46,ww*.3,0,Math.PI,0);g.fill();rect(g,'rgba(0,0,0,.08)',x+10+ww-10,hz+10-hh,10,hh+14);ar(g,dim('#3a7ab8'),x+18,hz+16,10,18);rect(g,dim('#3a7ab8'),x+10+ww-22,hz+2-hh*.5,8,8)}}
  else if(zz==4){if(r>.86)pino(g,x+60,hz+10,.85,t);else{const hh=70+r*60,ww=r>.4?100:76;tall(['#d8b878','#e0c088','#c8a070','#d8c098'][md(i,4)],hh,ww,'#a8503a','#8a7858');for(let q=0;q<Math.floor(ww/26);q++)rect(g,dim('#5a7a4a'),x+14+q*26,hz-hh*.2,10,22)}}
  else if(zz==5){if(r>.9){const cs=['#c8503a','#3a6ab8','#e0b030','#4a8a5a'];for(let q=0;q<3;q++)for(let w2=0;w2<2;w2++)rect(g,dim(cs[(q*2+w2+i)%4]),x+14+w2*40,hz+4-q*18,38,17)}else{const hh=70+r*110,ww=r>.5?84:60;tall(['#e8c8a0','#d8a888','#e8d490','#c8907a','#e0b878'][md(i,5)],hh,ww,null,'#b89878');if(r>.3)panni(g,x+8,hz-hh*.5,x+ww+8,hz-hh*.5+8,t,4)}}
  else if(zz==6){if(r>.9)pino(g,x+60,hz+10,.7,t);else{const hh=70+r*60,ww=r>.45?96:70;tall(['#c8bca0','#d8c8a8','#b8ac94','#e0d4b8'][md(i,4)],hh,ww,'#a85a3a','#9a8a78');for(let q=0;q<3;q++)ar(g,dim('#4a3a30'),x+10+q*30,hz+14,22,24)}}
  else if(zz==7){const hh=100+r*70,ww=r>.4?100:78;rect(g,dim('#e4d8bc'),x+8,hz+10-hh,ww,hh+14);rect(g,'rgba(255,255,255,.14)',x+8,hz+10-hh,5,hh+14);rect(g,'rgba(0,0,0,.1)',x+8+ww-8,hz+10-hh,8,hh+14);poly(g,dim('#5a626e'),[[x+4,hz+10-hh],[x+14,hz-hh-12],[x+4+ww,hz-hh-12],[x+12+ww,hz+10-hh]]);rect(g,dim('#8a5a44'),x+22+(i%3)*20,hz-hh-26,5,14);
   for(let q=0;q<Math.floor(ww/26);q++)for(let rr=0;rr<Math.floor(hh/34);rr++){win(x+14+q*26,hz+8-rr*34,10,22,q+rr*5);rect(g,dim('#2a2a30'),x+12+q*26,hz+8-rr*34,14,2)}}
  else{if(r>.5){abete(g,x+60,hz+14,70+r*40,1,dim);abete(g,x+30,hz+16,50+r*30,1,dim)}else{const hh=36+r*40,ww=r>.2?84:64;rect(g,dim('#8a8478'),x+8,hz+10-hh*.4,ww,hh*.4+14);rect(g,dim('#8a5a38'),x+8,hz+10-hh,ww,hh*.6);poly(g,dim('#5a4a40'),[[x+2,hz+10-hh],[x+8+ww/2,hz-hh-16],[x+14+ww,hz+10-hh]]);poly(g,'rgba(255,255,255,.9)',[[x+2,hz+10-hh],[x+8+ww/2,hz-hh-16],[x+14+ww,hz+10-hh],[x+8+ww/2,hz-hh-2]]);for(let q=0;q<2;q++)rect(g,night>.2?'rgba(255,200,110,.9)':dim('#2a1810'),x+18+q*26,hz+2-hh*.55,9,12)}}});
 /* monumenti grandi di ogni città (parallasse della fascia dei palazzi) */
 const fx2=wc=>240+(wc-cam)*.2;A.setDK(night);
 const lmk=(wc,fn)=>{const x=fx2(wc);if(x>-200&&x<680)fn(x)};
 /* Torino: la Mole Antonelliana con la guglia altissima e i cinque cerchi */
 lmk(560,x=>{rect(g,dim('#e4d8b4'),x-30,hz-58,60,76);for(let q=0;q<3;q++)for(let r2=0;r2<2;r2++)ar(g,dim('#4a3a30'),x-24+q*18,hz-30+r2*-26,10,18);rect(g,dim('#c8b898'),x-33,hz-62,66,5);poly(g,dim('#d8c8a0'),[[x-28,hz-62],[x-20,hz-104],[x+20,hz-104],[x+28,hz-62]]);for(let q=0;q<5;q++)rect(g,dim('#b8a880'),x-18+q*8,hz-100,2,36);rect(g,dim('#e4d8b4'),x-16,hz-136,32,34);rect(g,dim('#c8b898'),x-18,hz-138,36,4);poly(g,dim('#d8c8a0'),[[x-14,hz-138],[x-9,hz-168],[x+9,hz-168],[x+14,hz-138]]);rect(g,dim('#e4d8b4'),x-7,hz-196,14,28);poly(g,dim('#d8c8a0'),[[x-6,hz-196],[x,hz-218],[x+6,hz-196]]);ln(g,dim('#c8b898'),2.2,[x,hz-218,x,hz-262]);dot(g,'#e8c040',x,hz-264,2.6)});
 lmk(2380,x=>{for(const dx of[-58,58])ln(g,dim('#6a6a74'),3,[x+dx,hz+14,x+dx,hz-120]);ln(g,dim('#6a6a74'),2,[x-58,hz-118,x+58,hz-118]);[['#2a6ac8',-40,-86],['#101014',-6,-86],['#d83a2a',28,-86],['#e8c030',-23,-70],['#2aa04a',11,-70]].forEach(c=>{g.strokeStyle=dim(c[0]);g.lineWidth=3.2;g.beginPath();g.arc(x+c[1],hz+c[2]-12,14,0,7);g.stroke()})});
 /* L'Aquila: la facciata a quadrati bianchi e rosa di Collemaggio */
 lmk(5300,x=>{rect(g,dim('#f0e4e0'),x-50,hz-76,100,94);for(let q=0;q<10;q++)for(let r2=0;r2<9;r2++)if((q+r2)%2)rect(g,dim('#e4a4aa'),x-50+q*10,hz-76+r2*10,10,10);rect(g,dim('#d8c8b0'),x-54,hz-80,108,5);ar(g,dim('#4a3a34'),x-12,hz+16,24,36);ar(g,dim('#5a4a44'),x-40,hz+16,14,24);ar(g,dim('#5a4a44'),x+26,hz+16,14,24);dot(g,dim('#d8ccb8'),x,hz-50,11);dot(g,dim('#6a5a50'),x,hz-50,6)});
 /* Roma: il Colosseo e il Vittoriano bianco */
 lmk(11500,x=>{rect(g,dim('#d8c090'),x-100,hz-62,200,80);for(let r2=0;r2<3;r2++)for(let q=0;q<14;q++)ar(g,dim('#5a4630'),x-96+q*14,hz+10-r2*22,9,16);rect(g,dim('#c8b080'),x-102,hz-66,204,5);for(let q=0;q<14;q++)rect(g,dim('#4a3a28'),x-94+q*14,hz-60,6,8);rect(g,'rgba(0,0,0,.1)',x+40,hz-62,60,80)});
 lmk(12800,x=>{rect(g,dim('#f2eee2'),x-72,hz-52,144,70);for(let q=0;q<12;q++)rect(g,dim('#dcd6c4'),x-66+q*11,hz-46,4,50);for(let q=0;q<4;q++)rect(g,dim('#e8e4d6'),x-82+q*3,hz+16-q*5,164-q*6,5);rect(g,dim('#f2eee2'),x-76,hz-58,152,7);for(const dx of[-66,66]){poly(g,dim('#e0b84a'),[[x+dx-9,hz-58],[x+dx-6,hz-76],[x+dx+6,hz-76],[x+dx+9,hz-58]])}poly(g,dim('#d8d0b8'),[[x-8,hz-58],[x,hz-72],[x+8,hz-58]])});
 /* Genova: il lungo ponte bianco sulla valle, con le pile ellittiche */
 lmk(15700,x=>{rect(g,dim('#f4f2ec'),x-320,hz-34,640,6);rect(g,'rgba(0,0,0,.1)',x-320,hz-28,640,3);for(let q=0;q<10;q++){const px=x-300+q*66;poly(g,dim('#e6e4dc'),[[px-5,hz-28],[px+5,hz-28],[px+3,hz+14],[px-3,hz+14]])}for(let q=0;q<22;q++)dot(g,night>.2?'#ffe8a0':dim('#d8d4c4'),x-310+q*29,hz-37,1.4)});
 /* Bergamo: la Torre Civica con l'orologio e la cupola di Santa Maria Maggiore */
 lmk(19500,x=>{rect(g,dim('#c8bc98'),x-14,hz-120,28,138);rect(g,dim('#b8ac88'),x-16,hz-124,32,6);poly(g,dim('#8a5a44'),[[x-16,hz-124],[x,hz-152],[x+16,hz-124]]);dot(g,dim('#f4f0e0'),x,hz-96,7);ln(g,dim('#2a2a30'),1,[x,hz-96,x,hz-101]);ln(g,dim('#2a2a30'),1,[x,hz-96,x+4,hz-96]);for(let q=0;q<3;q++)ar(g,dim('#3a2e28'),x-5,hz-60+q*-8+14,10,16);rect(g,dim('#d8ccb0'),x+30,hz-46,90,64);for(let q=0;q<5;q++)ar(g,dim('#3a2e28'),x+36+q*16,hz+16,10,22);poly(g,dim('#a85a3a'),[[x+26,hz-46],[x+75,hz-66],[x+124,hz-46]])});
 /* Parigi: la facciata gotica di Notre-Dame con le due torri e la guglia ricostruita */
 lmk(23600,x=>{for(const dx of[-40,40]){rect(g,dim('#d0c8b4'),x+dx-18,hz-150,36,168);rect(g,'rgba(255,255,255,.12)',x+dx-18,hz-150,5,168);for(let r2=0;r2<2;r2++)ar(g,dim('#3a342c'),x+dx-6,hz-96+r2*-34+26,12,30);for(let q=0;q<4;q++)rect(g,dim('#d0c8b4'),x+dx-18+q*10,hz-158,6,8)}rect(g,dim('#d8d0bc'),x-22,hz-86,44,104);dot(g,dim('#3a342c'),x,hz-58,13);dot(g,dim('#8a9ac0'),x,hz-58,10);for(let q=0;q<8;q++)ln(g,dim('#3a342c'),1,[x,hz-58,x+Math.cos(q*.785)*10,hz-58+Math.sin(q*.785)*10]);for(const dx of[-26,0,26])poly(g,dim('#3a342c'),[[x+dx-8,hz+18],[x+dx-8,hz-10],[x+dx,hz-26],[x+dx+8,hz-10],[x+dx+8,hz+18]]);
  rect(g,dim('#9a9aa0'),x-2,hz-236,4,90);poly(g,dim('#9a9aa0'),[[x-6,hz-150],[x,hz-186],[x+6,hz-150]]);poly(g,dim('#b8b4aa'),[[x-3,hz-186],[x,hz-240],[x+3,hz-186]]);dot(g,'#e0b84a',x,hz-243,3)});
 /* Cortina: il campanile con il tetto a punta e la fiamma accesa nella piazza */
 lmk(27300,x=>{rect(g,dim('#c8bc9c'),x-12,hz-110,24,128);for(let q=0;q<3;q++)rect(g,night>.2?'rgba(255,200,110,.9)':dim('#2a1810'),x-3,hz-96+q*28,6,12);poly(g,dim('#5a8a6a'),[[x-14,hz-110],[x,hz-158],[x+14,hz-110]]);rect(g,dim('#e0b84a'),x-1,hz-168,2,12)});
 lmk(28500,x=>{glow(g,x,hz-30,90,'255,150,50',.45*night+.1);rect(g,dim('#6a6a70'),x-3,hz-14,6,30);poly(g,dim('#4a4a52'),[[x-22,hz-24],[x+22,hz-24],[x+12,hz-12],[x-12,hz-12]]);poly(g,'rgba(255,130,30,.95)',[[x-16,hz-24],[x-4+Math.sin(t*8)*2,hz-56],[x+2,hz-34],[x+8+Math.sin(t*9)*2,hz-52],[x+16,hz-24]]);poly(g,'rgba(255,220,100,.95)',[[x-8,hz-24],[x+Math.sin(t*7),hz-42],[x+8,hz-24]])});
 A.setDK(0)}

/* ---- suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#6e6e74',[46,5,26,'rgba(255,255,255,.1)']],[Z[1],Z[2],'#8e8c88',[40,5,26,'rgba(255,255,255,.16)']],[Z[2],Z[3],'#e4dcc0',0],[Z[3],Z[4],'#c8b898',[44,5,26,'rgba(255,255,255,.2)']],[Z[4],Z[5],'#58545a',1],[Z[5],Z[6],'#6a6c72',[30,7,20,'rgba(255,255,255,.1)']],[Z[6],Z[7],'#a8a49a',[56,5,26,'rgba(255,255,255,.2)']],[Z[7],Z[8],'#dce4ec',2]];
 rect(g,'#b8b0a0',0,gt,480,3);
 GZ.forEach((z,zi)=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0),zw=z[1]-z[0];g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const pz=(q,m)=>z[0]+((q*m)%zw)-cam;
  if(zi==2){rect(g,'#f2eee0',x0,gt+3,x1-x0,26);rect(g,'rgba(0,0,0,.08)',x0,gt+29,x1-x0,2);for(let q=0;q<46;q++)el(g,'rgba(255,255,255,.7)',pz(q,37),gt+40+hr(q*3)*100,10+hr(q)*14,2);for(let q=0;q<40;q++)dot(g,hr(q)>.5?'rgba(255,255,255,.5)':'rgba(120,100,70,.3)',pz(q,23),gt+36+hr(q*5)*108,1.4+hr(q)*1.4);for(let q=0;q<9;q++)el(g,'rgba(190,176,140,.5)',pz(q,171),gt+90+hr(q)*40,22,5)}
  else if(zi==4){rect(g,'#8a8a90',x0,gt+3,x1-x0,34);for(let q=0;q<70;q++)rect(g,'rgba(120,120,126,.5)',pz(q,29),gt+40+hr(q)*104,7,3);for(let q=0;q<30;q++)rect(g,'#f0eee0',pz(q,41),gt+86,22,3.6);rect(g,'#f0eee0',x0,gt+60,x1-x0,2);rect(g,'rgba(0,0,0,.2)',x0,gt+37,x1-x0,2);for(let q=0;q<10;q++)rect(g,'rgba(255,255,255,.7)',pz(q,131),gt+120,34,5)}
  else if(zi==7){rect(g,'#c8d4e0',x0,gt+3,x1-x0,22);for(let q=0;q<50;q++)el(g,'rgba(255,255,255,.8)',pz(q,37),gt+30+hr(q*3)*110,10+hr(q)*14,2);rect(g,'#8a8a82',x0,gt+60,x1-x0,34);for(let q=0;q<34;q++)dot(g,hr(q)>.5?'rgba(255,255,255,.5)':'rgba(40,40,40,.4)',pz(q,23),gt+62+hr(q*5)*30,1.6+hr(q)*1.4);for(let q=0;q<16;q++)rect(g,'#7a5a38',pz(q,53),gt+104,40,4)}
  else{const [bw0,rows,rh,k1]=z[3];for(let r=0;r<rows;r++){const yy=gt+7+r*rh,bw=bw0+r*5,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*17+r*7+zi);rect(g,hh>.65?k1:hh>.3?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,rh-2);rect(g,'rgba(0,0,0,.16)',px,yy+rh-3,bw-2,1.4)}}
   for(let q=0;q<50;q++)dot(g,hr(q)>.5?'rgba(255,248,230,.22)':'rgba(40,30,20,.2)',pz(q,23),gt+8+hr(q*5)*140,1+hr(q)*1.2);
   if(zi==0){rect(g,'#2a2a30',x0,gt+70,x1-x0,2);rect(g,'#2a2a30',x0,gt+76,x1-x0,2);rect(g,'rgba(180,180,190,.5)',x0,gt+69,x1-x0,1);for(let q=0;q<12;q++)el(g,'rgba(255,255,255,.75)',pz(q,311),gt+120+hr(q)*20,26,3)}
   if(zi==6){rect(g,'rgba(60,60,60,.25)',x0,gt+60,x1-x0,2);for(let q=0;q<10;q++)rect(g,'rgba(70,60,50,.3)',pz(q,311),gt+100,16,3)}}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/2400,0,1);if(dw>.02)rect(g,'rgba(226,214,226,'+(.2*dw)+')',0,gt,480,150);
 const sg=cl((cam-(Z[6]+600))/900,0,1)*cl((Z[7]-cam)/900,0,1);if(sg>.02)rect(g,'rgba(255,170,70,'+(.14*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- vita: gabbiani e berte, piccioni, rondini, pipistrelli di notte, cani, gatti, pecore, caprioli, passanti dei nostri anni ---- */
const capr=(g,x,y,t,f)=>{g.save();g.translate(x,y);g.scale(f,1);el(g,'#9a6a3a',0,-22,16,8);el(g,'#9a6a3a',16,-30,4,7);dot(g,'#9a6a3a',20,-38,4.5);ln(g,'#7a5028',1.6,[19,-42,18,-48]);ln(g,'#7a5028',1.6,[22,-42,24,-48]);for(const lx of[-10,-5,9,13])ln(g,'#7a5028',2,[lx,-18,lx+Math.sin(t*2+lx)*.8,0]);dot(g,'#f0e8d8',-15,-24,2.4);g.restore()};
function layerLife(g,o,t){const cam=o,xs=cam+240,hz=GT;
 const bird=(bx,by,s,w,c)=>{g.strokeStyle=c;g.lineWidth=s*1.9;g.beginPath();g.moveTo(bx-9*s,by+w);g.quadraticCurveTo(bx-4*s,by-4*s,bx,by);g.quadraticCurveTo(bx+4*s,by-4*s,bx+9*s,by+w);g.stroke()};
 const gv=cl((xs-(Z[2]-500))/600,0,1)*cl((Z[3]-xs)/700,0,1)+cl((xs-(Z[4]-300))/600,0,1)*cl((Z[5]-xs)/700,0,1)+cl((xs-(Z[6]+200))/600,0,1)*cl((Z[7]-200-xs)/700,0,1);if(gv>.05)for(let i=0;i<5;i++){const bx=((i*131+t*(20+i*4))%640)-80,by=60+hr(i*3)*100+Math.sin(t*1.6+i*2)*12,w=Math.sin(t*7+i)*3;g.globalAlpha=Math.min(1,gv);bird(bx,by,1.5,w,'#f6f4ee');g.globalAlpha=1}
 const rv=cl((xs-Z[1])/500,0,1)*cl((Z[2]-xs)/600,0,1)+cl((xs-Z[5])/600,0,1)*cl((Z[6]-xs)/700,0,1);if(rv>.05)for(let i=0;i<4;i++){const bx=((i*150+t*(40+i*5))%620)-70,by=100+hr(i*7)*120+Math.sin(t*3+i)*24,w=Math.sin(t*14+i)*3;g.globalAlpha=Math.min(1,rv);bird(bx,by,.9,w,'#1a1a26');g.globalAlpha=1}
 const bn=cl((xs-(Z[7]+300))/800,0,1);if(bn>.05)for(let i=0;i<5;i++){const bx=((i*97+t*(34+i*3))%560)-40,by=90+hr(i*5)*120+Math.sin(t*5+i)*18,w=Math.sin(t*14+i)*3.4;g.globalAlpha=bn;g.strokeStyle='rgba(10,8,20,.9)';g.lineWidth=2;g.beginPath();g.moveTo(bx-7,by+w);g.quadraticCurveTo(bx-3,by-3,bx,by+1);g.quadraticCurveTo(bx+3,by-3,bx+7,by+w);g.stroke();g.globalAlpha=1}
 const pig=(px,py,tt,f)=>{const bb=Math.sin(tt*6+px)>.7?2:0;el(g,'#8a8a96',px,py-6+bb,5.4,3.6);dot(g,'#6a6a80',px+4*f,py-9+bb,2.2);ln(g,'#c8808a',1,[px,py-3,px,py]);ln(g,'#c8808a',1,[px+2,py-3,px+2,py])};
 each(o,520,31,(x,i,r)=>{const wx=cam+x,zz=zn(wx);if(wx>W1-100)return;A.setDK(nf(wx));
  if(r<.3&&(zz==1||zz==4||zz==6||zz==7))for(let q=0;q<4;q++)pig(x+20+q*14,hz+46+(q%2)*5,t+q,q%2?1:-1);
  if(r>.3&&r<.4&&zz!=8&&zz!=3)cane(g,x+60,hz+42,t,['#b8935a','#6a5a48','#d8c8a0'][md(i,3)]);
  if(zz==8&&r>.3&&r<.42)cane(g,x+60,hz+46,t,'#c8602a');
  if(r>.46&&r<.58&&zz!=8)gatto(g,x+80,hz+46,t);
  if(zz==2&&r>.6&&r<.9)pecora(g,x+60,hz+52,.9,t,md(i,2)?1:-1);
  if(zz==8&&r>.62&&r<.8&&nf(wx)>.5)capr(g,x+60,hz+60,t,md(i,2)?1:-1)});
 each(o,430,57,(x,i,r)=>{const wx=cam+x,zz=zn(wx);if(r<.4||wx>W1-300)return;A.setDK(nf(wx));const dir=md(i,2)?1:-1,off=Math.sin(t*.18+i)*70,f=Math.cos(t*.18+i)*dir>0?1:-1,o2={s:.5,f:f,ph:i};
  const C=(a,n)=>a[md(i,n)];
  const PP={1:[['#5a4a6a','#4a5a7a','#8a3a3a'],['#3a3a48','#c8402a','#2a5aa6'],'#2a2a34'],2:[['#d8a020','#4a5a6a','#6a4a3a'],['#e8e0d0','#d8a020','#4a6a8a'],'#3a3a40'],3:[['#e8e0d0','#5a7aa8','#c8503a'],['#f4f0e4','#3a6aa8','#e0a840'],'#6a5a48'],4:[['#2a2a34','#8a5a4a','#4a6a8a'],['#d8d0c0','#2a2a34','#c8503a'],'#3a3a42'],5:[['#3a4a6a','#8a6a4a','#4a4a54'],['#e0b030','#3a4a6a','#d8d0c0'],'#2a2a34'],6:[['#4a5a7a','#6a5a44','#8a5a4a'],['#8aa8c8','#d8d0c0','#3a4a6a'],'#3a3a42'],7:[['#2a2a34','#4a5a6a','#6a4a4a'],['#2a2a34','#c8b8a0','#5a6a8a'],'#2a2a30'],8:[['#c8402a','#2a6ac8','#e8e0d0'],['#c8402a','#2a6ac8','#2a2a34'],'#2a2a34']}[zz];
  (md(i,2)?uom:dam)(g,x+off,hz+54,t+i,Object.assign({},o2,{tun:C(PP[0],3),top:C(PP[1],3),bot:PP[2],cap:zz==8?C(['#c8402a','#2a6ac8','#e8e0d0'],3):(zz==1&&md(i,2)?'ber':null),bc:'#3a3a48',fc:'#e8e0d0'}))});A.setDK(0);g.globalAlpha=1}

/* posizione di ognuna delle 70 tappe: distribuite in modo uniforme dentro la propria zona */
const LX=[];for(let z=0;z<8;z++){const n=NZ[z],w=(Z[z+1]-Z[z])/n;for(let k=0;k<n;k++)LX.push(Math.round(Z[z]+w*(k+.5)))}
const gapX=i=>Math.round((LX[i]+LX[i+1])/2);
const piedi=(g,c)=>{el(g,c,-4,-1,8,4);el(g,c,8,-1,8,4)};

/* ---- personaggi ---- */
const NP=(id,x,o,acc)=>({id,name:NAME[id],x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));const c=q=>tn(o[q]);fig(g,px,y,t,Object.assign({f,s:1},o,{skin:c('skin'),top:c('top'),bot:c('bot'),hair:c('hair'),acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:GREET[id]}}});
const npcs=[
 /* Rita Levi-Montalcini: capelli bianchi corti e ondulati, occhiali, cappotto chiaro e sciarpa rossa, tailleur grigio, piccola collana, un bicchierino di bicerin in mano */
 NP('dm_rita',gapX(0),{skin:'#e8c8a8',top:'#d6d2ca',bot:'#8a8a94',hair:'#efefec',long:1,s:.95},(g,b,t)=>{poly(g,tn('#e2ded6'),[[-14,-92+b],[14,-92+b],[17,-40],[-17,-40]]);poly(g,tn('#9a9aa2'),[[-4,-92+b],[4,-92+b],[3,-60+b],[-3,-60+b]]);rect(g,tn('#b83a4a'),-8,-93+b,16,7);ln(g,tn('#b83a4a'),4,[-4,-88+b,-7,-68+b]);dot(g,'#e8d8a8',0,-82+b,1.6);
  el(g,tn('#f4f2ee'),1,-109+b,13.5,6);dot(g,tn('#f4f2ee'),-9,-100+b,4);ln(g,'#3a3a40',1,[0,-102+b,13,-102+b]);dot(g,'rgba(255,255,255,.3)',5,-101+b,3.4);dot(g,'rgba(255,255,255,.3)',11,-101+b,3.4);
  ln(g,tn('#e8c8a8'),6,[12,-84+b,25,-72+b]);rect(g,'#f4ead8',23,-78+b,7,9);rect(g,'#5a3820',23,-76+b,7,2);rect(g,'#d8c8b0',23,-73+b,7,2);fumo(g,27,-80+b,t,1,'rgba(240,240,240,.5)');for(let q=0;q<4;q++)dot(g,'rgba(255,255,255,.9)',-10+q*7,-90+b+(q%2)*3,1.2);piedi(g,'#3a3a40')}),
 /* Nicola: casco giallo, giubbotto arancione da cantiere impolverato, baffi grigi, un metro di legno nella tasca, mani grandi */
 NP('dm_nicola',gapX(9),{skin:'#c8906a',top:'#e8782a',bot:'#5a5a60',hair:'#8a8a8e',s:1.04},(g,b,t)=>{rect(g,'#c8c8c8',-12,-72+b,24,3);rect(g,'rgba(255,255,255,.15)',-12,-90+b,24,4);el(g,'#f0c820',1,-111+b,13.5,7);rect(g,'#f0c820',-13,-111+b,28,3);ln(g,'#8a8a8e',2.4,[3,-95+b,12,-95+b]);
  rect(g,'#c8a870',8,-72+b,3,22);for(let q=0;q<5;q++)rect(g,'#2a2a2a',8,-70+b+q*4,3,.8);ln(g,tn('#c8906a'),7,[12,-84+b,25,-70+b]);el(g,'#d8d0c0',28,-68+b,6,3);for(let q=0;q<6;q++)dot(g,'rgba(220,210,190,.35)',-9+q*4,-60+b+(q%2)*8,1.4);piedi(g,'#5a4a30')}),
 /* Salvatore: pelle scura dal sole, cappello di tela, maglione scuro, una rete verde in mano e un galleggiante arancione */
 NP('dm_salvatore',gapX(17),{skin:'#a8683c',top:'#3a3a44',bot:'#4a5a6a',hair:'#3a3a3e',s:1.0},(g,b,t)=>{el(g,tn('#e0d8b8'),1,-111+b,15,6);rect(g,tn('#e0d8b8'),-13,-112+b,28,3);rect(g,tn('#e0d8b8'),-9,-120+b,20,10);
  ln(g,tn('#a8683c'),6,[12,-84+b,24,-68+b]);for(let q=0;q<6;q++){ln(g,'#3a8a4a',1,[22+q*2,-70+b,18+q*3,-44+b]);ln(g,'#3a8a4a',1,[20,-66+b+q*4,40,-64+b+q*4])}dot(g,'#f08a20',40,-60+b,3.4);piedi(g,'#2a2a2e')}),
 /* Ennio Morricone: capelli bianchi, occhiali tondi, giacca scura sobria e camicia chiara, un quaderno di pentagrammi in mano */
 NP('dm_morricone',gapX(30),{skin:'#e4c0a0',top:'#2a2a30',bot:'#2a2a30',hair:'#eeeeee',s:1.0},(g,b,t)=>{poly(g,tn('#f0ece0'),[[-5,-92+b],[5,-92+b],[4,-62+b],[-4,-62+b]]);ln(g,'#2a2a2e',1.2,[1,-103+b,13,-103+b]);dot(g,'rgba(255,255,255,.3)',5,-101+b,3.6);dot(g,'rgba(255,255,255,.3)',11,-101+b,3.6);
  ln(g,tn('#e4c0a0'),6,[12,-84+b,24,-74+b]);rect(g,'#f4f0e4',22,-86+b,20,16);for(let q=0;q<4;q++)ln(g,'#5a5a6a',.7,[24,-83+b+q*3.4,40,-83+b+q*3.4]);for(let q=0;q<4;q++)dot(g,'#1a1a1e',27+q*3.5,-80+b-q%2*3,1);piedi(g,'#14141a')}),
 /* Piero: alto e magro, casco bianco con gli occhiali da sole appoggiati, tuta arancione, guanti da lavoro, barba corta */
 NP('dm_piero',gapX(39),{skin:'#d8a47c',top:'#e8782a',bot:'#e8782a',hair:'#3a2a1a',s:1.06},(g,b,t)=>{rect(g,'#f0c820',-12,-58+b,24,3);el(g,'#f4f4f0',1,-111+b,13.5,7);rect(g,'#f4f4f0',-13,-111+b,28,3);rect(g,'#2a2a2e',-2,-114+b,10,3);ln(g,'#3a2a1a',3.2,[3,-92+b,12,-93+b]);
  ln(g,tn('#d8a47c'),6,[12,-84+b,25,-70+b]);dot(g,'#8a6a3a',26,-69+b,4);ln(g,'#c8c8c8',2,[-14,-70+b,-14,-52+b]);piedi(g,'#4a3a2a')}),
 /* Chiara: capelli castani raccolti, giacca blu, segni rossi della mascherina sul viso, zainetto, scarpe da corsa, un bicchiere di caffè */
 NP('dm_chiara',gapX(42),{skin:'#e8c4a0',top:'#2a4a8a',bot:'#2a2a34',hair:'#6a4428',s:.98},(g,b,t)=>{dot(g,'#6a4428',-10,-102+b,5.4);rect(g,'#3a3a44',-22,-90+b,12,26);dot(g,'rgba(210,90,90,.4)',6,-95+b,2.8);dot(g,'rgba(210,90,90,.4)',-2,-96+b,2.2);
  ln(g,tn('#e8c4a0'),6,[12,-84+b,25,-72+b]);rect(g,'#f4f0e8',23,-78+b,7,9);rect(g,'#8a5a34',23,-78+b,7,2.4);fumo(g,27,-80+b,t,1,'rgba(240,240,240,.5)');el(g,'#f4f4f4',-4,-1,8,4);el(g,'#e84a3a',8,-1,8,4)}),
 /* Hugo: capelli scuri corti, barba curata, giacca di velluto con i bottoni, cintura degli attrezzi con l'ascia, occhi lucidi */
 NP('dm_hugo',gapX(58),{skin:'#e0b490',top:'#5a3a2a',bot:'#3a3a44',hair:'#2a1a10',s:1.02},(g,b,t)=>{for(let q=0;q<4;q++)dot(g,'#c8a050',0,-86+b+q*10,1.4);rect(g,'#2a1a10',-13,-54+b,26,4);ln(g,'#6a4a2a',2.4,[-12,-52+b,-16,-34+b]);poly(g,'#9a9aa2',[[-22,-40+b],[-12,-46+b],[-10,-34+b],[-20,-30+b]]);ln(g,'#2a1a10',3,[3,-93+b,12,-93+b]);dot(g,'rgba(255,255,255,.6)',9,-99+b,1.2);
  ln(g,tn('#e0b490'),6,[12,-84+b,22,-70+b]);piedi(g,'#3a2a1a')}),
 /* Ines: guance rosse per il freddo, treccia sotto il berretto di lana, giacca blu da maestra di sci con la bandierina sulla manica, pass da volontaria, scarponi */
 NP('dm_ines',gapX(63),{skin:'#f0c0a4',top:'#2a4aa0',bot:'#2a2a34',hair:'#8a5a2a',s:.98},(g,b,t)=>{el(g,tn('#c8402a'),1,-111+b,13.5,6.4);rect(g,tn('#c8402a'),-12,-110+b,26,4);dot(g,'#f4f0e4',1,-119+b,3.4);ln(g,tn('#8a5a2a'),4,[-9,-100+b,-14,-84+b,-12,-72+b]);dot(g,'rgba(230,80,80,.4)',6,-95+b,3);dot(g,'#f4f0e4',-12,-80+b,2.4);rect(g,'#e8e8f0',-3,-80+b,7,10);rect(g,'#2a8a4a',-3,-80+b,7,3);ln(g,'#2a2a2e',1.2,[0,-82+b,0,-90+b]);
  rect(g,'#c8402a',12,-80+b,5,3);ln(g,tn('#f0c0a4'),6,[12,-84+b,23,-72+b]);dot(g,'#f4a030',24,-70+b,3.2);el(g,'#3a3a40',-4,-1,9,5);el(g,'#3a3a40',9,-1,9,5)})
];

/* ---- oggetti: wrapper con la luce del Duemila ---- */
const DQ=f=>(g,x,y,t,a)=>{const k=nf(x+AVCAM);A.setDK(k);f(g,x,y,t,a,k)};
const def=(n,f)=>{PR[n]=DQ(f)};
const LIT='rgba(255,206,120,.92)',LEG2='#5a3e26';
def('dqtarga',(g,x,y,t,a)=>{cartello(g,x,y,a||'',200)});
def('dqlamp',(g,x,y,t,a,k)=>{lampel(g,x,y,t,k)});
def('dqlampG',(g,x,y,t,a,k)=>{lampgas(g,x,y,t,k)});
def('dqpino',(g,x,y,t,a)=>{pino(g,x,y,a||1,t)});
def('dqtransenna',(g,x,y,t,a)=>{for(const dx of[-26,26])rect(g,'#6a6a70',x+dx-1.5,y-40,3,40);for(let r=0;r<2;r++)for(let q=0;q<4;q++)rect(g,q%2?'#f0eee8':'#d83a2a',x-28+q*14,y-38+r*14,14,9);rect(g,'rgba(0,0,0,.18)',x-28,y-2,56,2)});
def('dqfico',(g,x,y,t,a)=>{const pad=(px,py,w,h,c)=>{el(g,c,px,py,w,h);for(let q=0;q<5;q++)dot(g,'#e8e0a0',px-w*.5+q*w*.25,py-h*.5+(q%2)*h*.5,.9)};pad(x,y-14,13,10,'#5a9a4a');pad(x-10,y-30,12,9,'#6aaa56');pad(x+10,y-32,12,9,'#5a9a4a');pad(x,y-46,11,8,'#6aaa56');pad(x+16,y-48,9,7,'#5a9a4a');dot(g,'#d8482a',x-10,y-39,3);dot(g,'#d8482a',x+12,y-41,3);dot(g,'#d8482a',x+1,y-53,3)});
def('dqabete',(g,x,y,t,a)=>{abete(g,x,y,a||110,1)});
/* ---- attrezzi di disegno comuni ---- */
const BOTS=['#2a2a34','#3a4a6a','#4a4238','#2a2a30'];
/* gruppo di passanti: colori maglia, cappelli (nomi o colori, null = niente), zaino */
const ppl=(g,x,y,t,n,sp,cols,o)=>{o=o||{};for(let q=0;q<n;q++){const c=cols[q%cols.length],w=q%3==2&&!o.nw;(w?dam:uom)(g,x+q*sp,y-(q%2)*3,t+q,Object.assign({s:o.s||.56,f:o.f||(q%2?1:-1),ph:q,tun:c,top:c,bot:(o.bots||BOTS)[q%4],cap:w?(o.capw||null):(o.cap?o.cap[q%o.cap.length]:null),fc:'#e8e0d0'},o.x||{},o.bp?{acc:bp(o.bp[q%o.bp.length])}:{}))}};
const bp=c=>(g2,b)=>{rect(g2,c,-24,-90+b,13,30);rect(g2,'rgba(0,0,0,.2)',-24,-76+b,13,2)};
const tric=(g,x,y,h,t,w)=>bandiera(g,x,y,h,t,w||36,1);
const ue=(g,x,y,h,t)=>{ln(g,LEG2,2.6,[x,y,x,y-h]);const s=Math.sin(t*2+x)*2;rect(g,'#1a3a9a',x,y-h+s*.3,36,24);for(let q=0;q<12;q++)dot(g,'#f8d030',x+18+Math.cos(q*Math.PI/6)*8,y-h+12+s*.3+Math.sin(q*Math.PI/6)*8,1.2)};
const anelli=(g,x,y,r)=>{[['#2a6ac8',0,0],['#14141a',2.3,0],['#d83a2a',4.6,0],['#e8c030',1.15,.95],['#2aa04a',3.45,.95]].forEach(c=>{g.strokeStyle=tn(c[0]);g.lineWidth=r*.2;g.beginPath();g.arc(x+(c[1]-2.3)*r,y+c[2]*r,r,0,7);g.stroke()})};
const brac=(g,x,y,t,s)=>{s=s||1;rect(g,'#5a5a62',x-5*s,y-26*s,10*s,26*s);rect(g,'#3a3a42',x-14*s,y-3*s,28*s,3*s);poly(g,'#6a6a72',[[x-26*s,y-44*s],[x+26*s,y-44*s],[x+14*s,y-26*s],[x-14*s,y-26*s]]);rect(g,'#8a8a92',x-27*s,y-47*s,54*s,4*s);
 for(let q=0;q<5;q++){const fl=Math.sin(t*8+q*1.7)*3*s,hh=(30+(q%2)*10)*s;poly(g,'rgba(255,120,30,.95)',[[x-22*s+q*10*s,y-46*s],[x-18*s+q*10*s+fl,y-46*s-hh],[x-12*s+q*10*s,y-46*s]])}
 poly(g,'rgba(255,214,90,.95)',[[x-12*s,y-46*s],[x+Math.sin(t*9)*2*s,y-46*s-34*s],[x+12*s,y-46*s]]);glow(g,x,y-60*s,110*s,'255,150,50',.5+.1*Math.sin(t*8))};
const cand=(g,x,y,k)=>{rect(g,'#f4f0e0',x-1.4,y-7,2.8,7);dot(g,'#ffd060',x,y-9,1.8);glow(g,x,y-9,10,'255,200,90',.7)};
const candRow=(g,x,y,n,sp)=>{for(let q=0;q<n;q++)cand(g,x+q*sp,y+(q%2)*1.5)};
const pan=(g,x,y,w,h,c1,c2,fn)=>{g.save();g.beginPath();g.roundRect(x-w/2,y-h,w,h,10);g.clip();const gr=g.createLinearGradient(0,y-h,0,y);gr.addColorStop(0,tn(c1));gr.addColorStop(1,tn(c2));g.fillStyle=gr;g.fillRect(x-w/2,y-h,w,h);if(fn)fn();g.restore();g.strokeStyle='rgba(30,24,40,.55)';g.lineWidth=3;g.beginPath();g.roundRect(x-w/2,y-h,w,h,10);g.stroke()};
const tav=(g,x,y,w,c,cl2)=>{rect(g,'#5a3e26',x-w/2+4,y-30,4,30);rect(g,'#5a3e26',x+w/2-8,y-30,4,30);rect(g,c||'#8a6a42',x-w/2,y-36,w,7);if(cl2)rect(g,cl2,x-w/2-2,y-37,w+4,5);rect(g,'rgba(0,0,0,.2)',x-w/2,y-30,w,2)};
const piatto=(g,x,y,r,c)=>{el(g,'#f4f0e8',x,y,r,r*.32);el(g,c||'#e0b050',x,y-1,r*.72,r*.2)};
const finestra=(g,x,y,w,h,k,lit)=>{rect(g,'#3a3028',x-2,y-2,w+4,h+4);rect(g,lit||(k>.3?'#2a3048':'#8aaac4'),x,y,w,h);rect(g,'rgba(0,0,0,.25)',x+w/2-.6,y,1.2,h)};
const sch=(g,x,y,w,h,c,k)=>{rect(g,'#1a1a20',x-2,y-2,w+4,h+4);rect(g,c,x,y,w,h);glow(g,x+w/2,y+h/2,Math.max(w,h)*.9,'150,200,255',.2+.25*k)};
const sagoma=(g,x,y,s,c,t,arms)=>{dot(g,c,x,y-46*s,8*s);poly(g,c,[[x-14*s,y-36*s],[x-9*s,y-40*s],[x+9*s,y-40*s],[x+14*s,y-36*s],[x+14*s,y],[x-14*s,y]]);if(arms)for(const d of[-1,1])ln(g,c,5*s,[x+d*12*s,y-34*s,x+d*(16+Math.sin(t*10+d)*3)*s,y-74*s])};
const pioggia=(g,x,y,w,h,t,a)=>{g.save();g.beginPath();g.rect(x,y,w,h);g.clip();g.strokeStyle='rgba(200,215,235,'+(a||.5)+')';g.lineWidth=1;g.beginPath();for(let q=0;q<46;q++){const px=x+((q*47+t*60)%(w+40))-20,py=y+((q*83+t*210)%h);g.moveTo(px,py);g.lineTo(px-3,py+9)}g.stroke();g.restore()};
const pugno=(g,x,y,c)=>{};

/* ================= ZONA 1 · Torino: il Giubileo, l'euro e le Olimpiadi della neve ================= */
def('dqtorino',(g,x,y,t,a,k)=>{
 /* portici lunghi con i tavolini sotto la neve, tram verde e giallo, passanti con sciarpe colorate */
 rect(g,'#d8c4a4',x-200,y-122,400,104);rect(g,'#c4ae8c',x-204,y-128,408,8);rect(g,'rgba(255,255,255,.92)',x-204,y-132,408,4);
 for(let q=0;q<8;q++){ar(g,'#3a2c2c',x-192+q*48,y-18,36,84);rect(g,'#c4ae8c',x-196+q*48,y-18,4,18)}rect(g,'#9a8a7c',x-204,y-18,408,3);
 for(let q=0;q<3;q++){const tx=x-150+q*70;rect(g,'#6a5a4a',tx-1,y-34,2,34);el(g,'#e8e0d0',tx,y-35,12,3);rect(g,'#3a3a40',tx-20,y-26,5,26);rect(g,'#3a3a40',tx+15,y-26,5,26);dot(g,'#f4f0e8',tx+3,y-38,2.4)}
 for(let q=0;q<2;q++){const ux=x-115+q*70;poly(g,'#b8c0cc',[[ux-24,y-70],[ux,y-84],[ux+24,y-70]]);poly(g,'rgba(255,255,255,.9)',[[ux-22,y-72],[ux,y-84],[ux+22,y-72],[ux,y-76]]);ln(g,'#6a6a70',2,[ux,y-84,ux,y-34])}
 ln(g,'#2a2a30',1,[x-204,y-150,x+206,y-150]);rect(g,'#2e8a4a',x+50,y-90,150,52);rect(g,'#e8c030',x+50,y-90,150,9);for(let q=0;q<5;q++)rect(g,'#bcd8ea',x+58+q*28,y-76,20,18);dot(g,'#1a1a1e',x+74,y-36,8);dot(g,'#1a1a1e',x+176,y-36,8);ln(g,'#2a2a30',2,[x+110,y-90,x+122,y-150]);
 ppl(g,x-30,y-2,t,3,36,['#3a3a48','#7a3a3a','#4a5a7a'],{cap:['#c8402a',null,'#2a6ac8']});
 for(let q=0;q<26;q++)dot(g,'rgba(255,255,255,.9)',x-200+((q*37+t*12)%400),y-190+((q*53+t*30)%170),1.2)});
def('dqgiubileo',(g,x,y,t,a,k)=>{
 /* la Porta Santa di bronzo aperta in una basilica illuminata, pellegrini con zaino e cappello giallo, un anziano Papa vestito di bianco, tende e bandiere sulla spianata */
 for(let q=0;q<6;q++){const tx=x-190+q*30,ty=y-(q%2)*6;poly(g,['#e8d8b0','#c8503a','#3a6ab8','#e0b030'][q%4],[[tx-18,ty-6],[tx,ty-34],[tx+18,ty-6]]);ln(g,'#5a4a3a',1.4,[tx,ty-34,tx,ty-52]);poly(g,['#c8402a','#2a8a4a','#e8c030','#2a6ac8'][q%4],[[tx,ty-52],[tx+12,ty-48+Math.sin(t*3+q)*2],[tx,ty-44]])}
 rect(g,'#dcd4c0',x-60,y-150,150,150);poly(g,'#cfc6b0',[[x-70,y-150],[x+15,y-186],[x+100,y-150]]);for(let q=0;q<6;q++)rect(g,'#eee6d4',x-52+q*26,y-142,8,130);
 glow(g,x+23,y-50,120,'255,215,130',.5+.1*Math.sin(t*3));ar(g,'#fff0c0',x+5,y,36,96);rect(g,'#7a5a2a',x-9,y-90,14,90);rect(g,'#7a5a2a',x+41,y-90,14,90);for(let q=0;q<4;q++){rect(g,'rgba(255,220,140,.5)',x-7,y-84+q*20,10,14);rect(g,'rgba(255,220,140,.5)',x+43,y-84+q*20,10,14)}
 rect(g,'#c8c0aa',x-72,y-8,174,8);rect(g,'#b8b09a',x-78,y-3,186,4);
 ppl(g,x+120,y-2,t,3,32,['#3a6ab8','#c8402a','#2a8a4a'],{cap:['#f0d020'],bp:['#8a3a2a','#2a4a6a','#4a6a3a']});
 uom(g,x-100,y-2,t,{s:.62,f:1,tun:'#f4f2ec',top:'#f4f2ec',bot:'#f4f2ec',cap:'#f8f8f4',acc:(g2,b)=>{ln(g2,tn('#e8c8a8'),6,[12,-84+b,22,-112+b+Math.sin(t*5)*4])}})});
def('dq11sett',(g,x,y,t,a,k)=>{
 /* un televisore acceso in una sala silenziosa: sullo schermo una grande città con due alte torri nel cielo azzurro; un fiore e una candela; nessuna immagine di violenza */
 rect(g,'#4a4a56',x-200,y-150,400,150);rect(g,'#3a3a46',x-200,y-10,400,10);tvc(g,x,y-4,3.2,k,'#9ac8ec');const sx=x-38,sy=y-100;rect(g,'#7a8aa8',sx+4,sy+46,50,10);rect(g,'#6a7a9a',sx+14,sy+12,8,44);rect(g,'#6a7a9a',sx+30,sy+8,8,48);
 glow(g,x,y-70,150,'150,200,255',.22+.1*k);for(const dx of[-120,-80,70,110])sagoma(g,x+dx,y-4,.8,['#2a2a34','#4a3a3a','#3a4a5a','#2a3040'][md(dx,4)],t,0);
 tav(g,x+150,y,56,'#6a4a2a','#d8d0c0');cand(g,x+140,y-40,k);rect(g,'#5a8a4a',x+160,y-62,1.6,24);dot(g,'#f4f0e8',x+160,y-64,4);dot(g,'#e8c040',x+160,y-64,1.6);rect(g,'rgba(200,220,240,.7)',x+156,y-42,8,6)});
def('dqrete',(g,x,y,t,a,k)=>{
 /* un ragazzo con il telefonino che scrive un SMS, un computer con il tubo catodico e un globo, un modem con le lucine, una cabina con il cartello "Scheda telefonica" */
 rect(g,'#c8c8cc',x-190,y-110,40,110);rect(g,'#8aa8c0',x-186,y-104,32,72);rect(g,'#e8c030',x-190,y-120,40,10);ln(g,'#4a4a52',1.4,[x-170,y-104,x-170,y-32]);rect(g,'#f4f0e4',x-144,y-84,26,20);txt(g,'SCHEDA',x-131,y-76,5,'#2a2a30','900');txt(g,'TELEFONICA',x-131,y-69,4,'#2a2a30','900');
 rect(g,'#8a6a42',x-90,y-42,160,6);rect(g,'#5a3e26',x-86,y-36,6,36);rect(g,'#5a3e26',x+60,y-36,6,36);crt(g,x-30,y-42,1.7,t,k,1);dot(g,'#5aa8e8',x-30,y-97,11);ln(g,'#e8f4ff',1,[x-41,y-97,x-19,y-97]);ln(g,'#e8f4ff',1,[x-30,y-108,x-30,y-86]);g.strokeStyle='#e8f4ff';g.lineWidth=1;g.beginPath();g.ellipse(x-30,y-97,5,11,0,0,7);g.stroke();
 rect(g,'#c8c0a8',x+16,y-50,38,8);for(let q=0;q<4;q++)dot(g,Math.sin(t*7+q*2)>.2?'#4aff6a':'#2a5a30',x+22+q*8,y-46,1.4);ln(g,'#2a2a30',1.6,[x+20,y-50,x+2,y-62]);
 glow(g,x-30,y-95,110,'120,190,255',.25+.2*k);
 uom(g,x+120,y-2,t,{s:.64,f:-1,tun:'#c8402a',top:'#c8402a',acc:(g2,b)=>{ln(g2,tn('#e8b890'),6,[12,-84+b,22,-96+b]);rect(g2,'#6a6a72',18,-110+b,8,14);rect(g2,'#a8d8ff',19,-108+b,6,8)}});
 rect(g,'#f4f4f4',x+88,y-134,38,16);poly(g,'#f4f4f4',[[x+110,y-118],[x+114,y-112],[x+116,y-118]]);txt(g,'SMS',x+107,y-122,7,'#2a2a30','900')});
def('dqeuro',(g,x,y,t,a,k)=>{
 /* un banco con il doppio prezzo in lire e in euro, la cassiera con la calcolatrice, il sacchetto di monete nuove, una banconota da mille lire accanto a una da dieci euro, la bandiera blu con dodici stelle */
 rect(g,'#c8b894',x-170,y-136,260,106);for(let q=0;q<3;q++){rect(g,'#a89874',x-170,y-110+q*34,260,3);for(let w=0;w<9;w++)rect(g,['#c8402a','#e0b030','#4a7ab8','#6a9a4a'][(w+q)%4],x-160+w*28,y-132+q*34,16,20)}
 dam(g,x-40,y-4,t,{s:.64,f:1,top:'#2a4a8a',acc:(g2,b)=>{ln(g2,tn('#e8c4a0'),6,[12,-84+b,24,-70+b]);rect(g2,'#8a8a92',20,-78+b,14,10);for(let q=0;q<3;q++)dot(g2,'#2a2a30',23+q*4,-74+b,1)}});
 rect(g,'#8a6a42',x-180,y-42,280,42);rect(g,'#a8885a',x-184,y-46,288,6);rect(g,'rgba(0,0,0,.2)',x-180,y-14,280,2);
 [['L. 1.000','€ 0,52'],['L. 2.000','€ 1,03'],['L. 3.000','€ 1,55'],['L. 4.000','€ 2,07']].forEach((p,q)=>{const px=x-150+q*60;rect(g,'#f8f4e4',px,y-94,40,26);txt(g,p[0],px+20,y-84,8,'#2a2a30','900');txt(g,p[1],px+20,y-73,8,'#1a3a9a','900')});
 poly(g,'rgba(240,240,248,.85)',[[x+30,y-46],[x+44,y-46],[x+46,y-64],[x+28,y-64]]);for(let q=0;q<4;q++)dot(g,q%2?'#e0c060':'#c8c8d0',x+33+q*3,y-50-(q%2)*3,2);rect(g,'#c8a868',x+54,y-50,24,4);rect(g,'#e8a8b0',x+80,y-50,22,4);txt(g,'1000',x+66,y-47,4,'#5a3a1a','900');txt(g,'10 €',x+91,y-47,4,'#8a2a3a','900');
 ue(g,x+130,y,150,t);uom(g,x+170,y-2,t,{s:.6,f:-1,tun:'#3a4a6a',top:'#6a4a3a',cap:'ber'})});
def('dqconclave',(g,x,y,t,a,k)=>{
 /* una piazza silenziosa con candele e fiori, una bara semplice di legno con un libro aperto, una fumata bianca che sale da un comignolo; tono sobrio */
 pan(g,x-100,y-24,200,200,'#1a2a5a','#7a6a8a',()=>{rect(g,'#5a4a4a',x-200,y-70,200,52);for(let q=0;q<14;q++)rect(g,'rgba(0,0,0,.18)',x-200+q*14,y-70,2,52);rect(g,'#6a5a58',x-150,y-102,16,34);for(let q=0;q<7;q++){const u=(t*.3+q/7)%1;el(g,'rgba(255,255,255,'+(.8*(1-u))+')',x-142+Math.sin(t+q*2)*8*u,y-104-u*84,6+u*14,5+u*10)}rect(g,'#9a8a7a',x-200,y-26,200,8)});
 rect(g,'#8a6a3a',x+30,y-30,86,20);rect(g,'#6a4a26',x+30,y-32,86,4);poly(g,'#f8f4ea',[[x+60,y-34],[x+72,y-38],[x+84,y-34],[x+72,y-31]]);ln(g,'#c8c0b0',.8,[x+72,y-38,x+72,y-31]);dot(g,'#f4f0e8',x+22,y-12,3);dot(g,'#e8c840',x+18,y-8,2.4);dot(g,'#f4f0e8',x+124,y-12,3);dot(g,'#d88aa0',x+128,y-8,2.4);
 ppl(g,x+10,y-2,t,5,34,['#2a2a34','#4a3a3a','#3a4a5a','#6a6a72'],{s:.5});candRow(g,x+14,y-52,5,34)});
def('dqtorino06',(g,x,y,t,a,k)=>{
 /* uno stadio pieno di luci con un grande braciere acceso, un tenore con un fazzoletto bianco, atleti con le tute colorate sulla neve, un tricolore, un telefonino con una piccola immagine di gara */
 pan(g,x,y-8,400,226,'#080e28','#1a2a58',()=>{for(let r=0;r<5;r++)rect(g,'#222a4a',x-200,y-210+r*22,400,16);for(let q=0;q<90;q++)dot(g,['#ffe8a0','#9ac8ff','#ffd0a0'][q%3],x-196+(q*47%392),y-206+((q*29)%100),1.1);rect(g,'#e8eef8',x-200,y-70,400,62);for(let q=0;q<6;q++)ln(g,'rgba(120,140,180,.5)',1,[x-200+q*70,y-70,x-230+q*80,y-8])});
 brac(g,x+120,y-30,t,1.2);uom(g,x-10,y-14,t,{s:.64,f:1,tun:'#14141a',top:'#14141a',bot:'#14141a',acc:(g2,b)=>{ln(g2,tn('#e0b490'),6,[12,-84+b,26,-100+b]);rect(g2,'#fff',24,-110+b,9,9)}});
 ppl(g,x-160,y-14,t,6,22,['#d83a2a','#2a6ac8','#e8c030','#2aa04a','#e8e8f0','#8a3aa8'],{s:.46});tric(g,x+40,y-12,74,t);
 rect(g,'#2a2a30',x+140,y-70,26,48);rect(g,'#bcd8f0',x+143,y-66,20,36);poly(g,'#e8e8f4',[[x+146,y-34],[x+153,y-52],[x+160,y-34]]);dot(g,'#c8402a',x+153,y-56,2.4);dot(g,'#5a5a62',x+153,y-27,2)});
def('dqberlino',(g,x,y,t,a,k)=>{
 /* un cortile con un maxischermo e centinaia di persone con bandiere tricolori e sciarpe azzurre, una coppa d'oro alzata nel cielo, bambini sulle spalle dei padri */
 rect(g,'#6a5a4a',x-200,y-170,400,170);for(let r=0;r<3;r++)for(let q=0;q<8;q++)finestra(g,x-190+q*48,y-160+r*40,18,26,k,q*r%3==1?'rgba(255,206,120,.9)':null);
 sch(g,x-110,y-150,200,100,'#2a8a3a',k);ln(g,'rgba(255,255,255,.6)',1,[x-10,y-148,x-10,y-52]);for(let q=0;q<9;q++)dot(g,q%2?'#2a5ac8':'#f4f0e4',x-90+q*18+Math.sin(t*2+q)*4,y-100+(q%3)*14,2.4);
 ppl(g,x-180,y-2,t,10,38,['#2a5ac8','#f4f0e4','#c8402a','#2a5ac8'],{s:.6});tric(g,x-130,y-2,78,t);tric(g,x+20,y-2,78,t+1);tric(g,x+150,y-2,78,t+2);
 uom(g,x+70,y-2,t,{s:.64,f:-1,tun:'#2a5ac8',top:'#2a5ac8',acc:(g2,b)=>{ln(g2,tn('#e8b890'),6,[12,-84+b,16,-122+b]);poly(g2,'#e8c030',[[8,-146+b],[24,-146+b],[21,-136+b],[18,-132+b],[18,-124+b],[14,-124+b],[14,-132+b],[11,-136+b]]);rect(g2,'#e8c030',10,-124+b,12,3)}});
 uom(g,x-80,y-58,t,{s:.34,f:1,tun:'#c8402a',top:'#c8402a'});uom(g,x+120,y-58,t,{s:.34,f:-1,tun:'#2a5ac8',top:'#2a5ac8'});for(let q=0;q<3;q++)el(g,'rgba(220,70,50,'+(.25-q*.05)+')',x-40+q*10+Math.sin(t+q)*6,y-80-q*18,14+q*5,8+q*3)});
def('dqbicerin',(g,x,y,t,a,k)=>{
 /* un caffè storico con il bancone di legno scuro e gli specchi, un bicerin a tre strati, gianduiotti in carta dorata, grissini in un bicchiere, un cameriere con il grembiule bianco */
 rect(g,'#4a2e22',x-200,y-160,400,160);for(let q=0;q<20;q++)rect(g,'rgba(0,0,0,.18)',x-200+q*20,y-160,2,160);rect(g,'#b8a060',x-176,y-146,108,88);rect(g,'#c8dce4',x-172,y-142,100,80);poly(g,'rgba(255,255,255,.3)',[[x-172,y-142],[x-140,y-142],[x-172,y-100]]);
 for(const lx of[-30,60,140]){ln(g,'#2a1a14',1,[x+lx,y-160,x+lx,y-130]);dot(g,'#ffe8b0',x+lx,y-126,8);glow(g,x+lx,y-126,60,'255,220,150',.4)}
 uom(g,x+110,y-2,t,{s:.66,f:-1,tun:'#f4f0e8',top:'#f4f0e8',bot:'#2a2a30',acc:(g2,b)=>{rect(g2,'#f4f0e8',-12,-62+b,24,44);rect(g2,'rgba(0,0,0,.1)',-12,-62+b,24,3);ln(g2,tn('#e8b890'),6,[12,-84+b,24,-76+b]);el(g2,'#c8c8d0',28,-76+b,10,2)}});
 rect(g,'#2a1a14',x-200,y-44,400,44);rect(g,'#6a4a32',x-204,y-48,408,6);
 rect(g,'rgba(240,240,250,.55)',x-60,y-92,22,44);rect(g,'#f4ecd8',x-58,y-90,18,12);rect(g,'#4a2a18',x-58,y-78,18,14);rect(g,'#2a1a12',x-58,y-64,18,16);fumo(g,x-49,y-92,t,2,'rgba(240,240,240,.5)');
 el(g,'#f4f0e8',x+10,y-48,24,4);for(let q=0;q<6;q++){const gx=x-4+q*6;poly(g,q%2?'#e0b84a':'#d8a830',[[gx,y-50],[gx+3,y-60],[gx+6,y-50]])}
 rect(g,'rgba(240,240,250,.5)',x+60,y-84,14,36);for(let q=0;q<7;q++)ln(g,'#e0c888',1.6,[x+62+q*1.6,y-48,x+60+q*2.2,y-100])});

/* ================= ZONA 2 · L'Aquila: la città che si rialza ================= */
def('dqaquila',(g,x,y,t,a,k)=>{
 /* la Fontana delle 99 Cannelle, la facciata rosa e bianca di Collemaggio, una processione con mantelli rossi e tamburi */
 rect(g,'#c8c0a8',x-190,y-42,200,42);rect(g,'#b0a890',x-194,y-46,208,6);for(let q=0;q<11;q++){const mx=x-180+q*18;dot(g,'#4a463e',mx,y-30,4.4);dot(g,'#c8c0a8',mx,y-30,2);ln(g,'rgba(180,220,255,.8)',1.4,[mx,y-26,mx+1,y-10]);el(g,'rgba(160,210,250,.6)',mx,y-8,6,2)}
 rect(g,'#6aa8d0',x-190,y-8,200,8);for(let q=0;q<5;q++)el(g,'rgba(255,255,255,.5)',x-170+q*40+Math.sin(t*2+q)*4,y-4,8,1.4);
 const fx=x+120;rect(g,'#f0e4e0',fx-52,y-130,104,130);for(let q=0;q<10;q++)for(let r=0;r<13;r++)if((q+r)%2)rect(g,'#e4a4aa',fx-52+q*10.4,y-130+r*10,10.4,10);rect(g,'#d8c8b0',fx-56,y-134,112,5);ar(g,'#4a3a34',fx-14,y,28,44);ar(g,'#5a4a44',fx-42,y,14,30);ar(g,'#5a4a44',fx+28,y,14,30);dot(g,'#d8ccb8',fx,y-92,12);dot(g,'#6a5a50',fx,y-92,7);
 for(let q=0;q<3;q++){uom(g,x-60+q*34,y-2,t,{s:.56,f:1,tun:'#b8302a',top:'#b8302a',bot:'#4a2a2a',cap:'#8a1a1a'});el(g,'#8a5a38',x-52+q*34,y-24,5,5)}});
def('dq6apr',(g,x,y,t,a,k)=>{
 /* il centro storico silenzioso all'alba: finestre con luci azzurre, 309 lumini in fila, un fascio di luce azzurra verso il cielo; sobrio */
 pan(g,x,y-26,400,230,'#202c4a','#6a7a9a',()=>{for(let q=0;q<9;q++){const bx=x-200+q*46,hh=70+hr(q*3)*70;rect(g,'#3a4256',bx,y-26-hh,44,hh);for(let r=0;r<Math.floor(hh/28);r++)for(let w=0;w<2;w++)rect(g,hr(q+r+w)>.4?'#8ac8f0':'#2a3040',bx+8+w*20,y-52-r*28,10,16)}
  const bg=g.createLinearGradient(0,y-250,0,y-26);bg.addColorStop(0,'rgba(120,200,255,0)');bg.addColorStop(1,'rgba(120,200,255,.55)');g.fillStyle=bg;g.beginPath();g.moveTo(x-18,y-26);g.lineTo(x-6,y-250);g.lineTo(x+6,y-250);g.lineTo(x+18,y-26);g.fill()});
 for(let q=0;q<30;q++)cand(g,x-182+q*12.6,y-6+(q%2)*2,k)});
def('dqg8',(g,x,y,t,a,k)=>{
 /* la scuola con le bandiere di tanti Paesi, giornalisti con le telecamere, tende bianche della Protezione Civile */
 rect(g,'#d8d4c4',x-110,y-134,220,134);rect(g,'#c4bea8',x-114,y-138,228,6);for(let q=0;q<8;q++)rect(g,'#e8e4d4',x-100+q*26,y-128,8,100);rect(g,'#7a9ab4',x-96,y-110,192,60);el(g,'#8a6a42',x,y-80,50,12);for(let q=0;q<8;q++)dot(g,'#2a2a34',x-40+q*11.4,y-92+(q%2)*20,4);
 ['#c8402a','#2a6ac8','#e8c030','#2aa04a','#e8e8f0','#8a3aa8','#e87a2a','#2a9aa8'].forEach((c,q)=>bandiera(g,x-120+q*34,y,100,t+q,28,0,c));
 for(let q=0;q<2;q++){poly(g,'#f4f4f0',[[x-200+q*50,y-4],[x-176+q*50,y-40],[x-152+q*50,y-4]]);rect(g,'#e8e8e4',x-196+q*50,y-4,40,2)}
 for(let q=0;q<2;q++)uom(g,x+130+q*34,y-2,t,{s:.6,f:-1,tun:'#2a3a5a',top:'#2a3a5a',acc:(g2,b)=>{rect(g2,'#1a1a20',8,-100+b,22,14);dot(g2,'#4a8aff',32,-93+b,2.4)}})});
def('dqricostruzione',(g,x,y,t,a,k)=>{
 /* palazzo con ponteggi e puntelli di legno, gru gialla, muratori con casco giallo che posano pietre chiare, un banner con la scritta L'Aquila */
 rect(g,'#e0d8c0',x-120,y-150,200,150);rect(g,'#c8bea0',x-124,y-154,208,6);for(let r=0;r<3;r++)for(let q=0;q<5;q++)finestra(g,x-104+q*36,y-132+r*40,16,26,k);
 for(let q=0;q<6;q++)ln(g,'#5a5a62',1.6,[x-118+q*36,y,x-118+q*36,y-150]);for(let q=0;q<5;q++)ln(g,'#5a5a62',1.6,[x-120,y-q*36,x+80,y-q*36]);for(const bx of[-160,-140])ln(g,'#8a6a3a',4,[x+bx,y,x-118,y-70]);
 rect(g,'#d8b020',x+120,y-190,6,190);ln(g,'#d8b020',4,[x+123,y-188,x+30,y-188]);ln(g,'#8a8a8a',1,[x+40,y-188,x+40,y-120]);rect(g,'#c8b898',x+34,y-124,12,8);
 for(let q=0;q<3;q++)uom(g,x+90+q*28,y-2,t,{s:.58,f:q%2?1:-1,tun:'#e8782a',top:'#e8782a',cap:'#f0c820'});for(let q=0;q<4;q++)rect(g,'#d8d0b8',x+60+q%2*14,y-12-Math.floor(q/2)*10,14,10);
 rect(g,'#f4f0e4',x-100,y-174,100,16);txt(g,'L’AQUILA',x-50,y-162,10,'#8a2a2a','900')});
def('dqcrisi',(g,x,y,t,a,k)=>{
 /* un giovane con il primo smartphone in piazza, una banca con la fila, il giornale con le frecce rosse verso il basso, un impiegato con lo scatolone */
 rect(g,'#c8c4b8',x-180,y-120,170,120);for(let q=0;q<5;q++)rect(g,'#e0dcd0',x-170+q*30,y-112,10,100);poly(g,'#b8b4a8',[[x-186,y-120],[x-95,y-148],[x-4,y-120]]);ppl(g,x-160,y-2,t,5,22,['#3a3a48','#5a4a3a','#4a5a6a','#6a3a3a'],{s:.52});
 uom(g,x-10,y-2,t,{s:.64,f:1,tun:'#2a6ac8',top:'#2a6ac8',acc:(g2,b)=>{ln(g2,tn('#e8b890'),6,[12,-84+b,22,-96+b]);rect(g2,'#1a1a20',18,-112+b,9,16);rect(g2,'#8ac8ff',19,-110+b,7,11)}});
 rect(g,'#f4f0e4',x+60,y-104,56,66);ln(g,'#2a2a30',1,[x+64,y-98,x+110,y-98]);poly(g,'#d83a2a',[[x+72,y-90],[x+84,y-90],[x+84,y-70],[x+90,y-70],[x+78,y-56],[x+66,y-70],[x+72,y-70]]);for(let q=0;q<4;q++)ln(g,'#8a8a90',1,[x+92,y-92+q*8,x+110,y-92+q*8]);ln(g,'#6a5a4a',2,[x+60,y,x+60,y-38]);ln(g,'#6a5a4a',2,[x+116,y,x+116,y-38]);
 uom(g,x+150,y-2,t,{s:.6,f:-1,tun:'#6a6a72',top:'#6a6a72',acc:(g2,b)=>{rect(g2,'#b8905a',10,-82+b,26,22);ln(g2,tn('#e8b890'),6,[12,-84+b,14,-66+b])}})});
def('dqconcordia',(g,x,y,t,a,k)=>{
 /* il mare grigio di gennaio con una grande nave bianca inclinata, barche di soccorso con luci arancioni; poi un campo con un campanile storto e capannoni con ponteggi, volontari con coperte; sobrio */
 pan(g,x-100,y-20,200,200,'#7a8a9a','#aab4c0',()=>{const wy=y-70;rect(g,'#5a7a92',x-200,wy,200,60);g.save();g.translate(x-100,wy+4);g.rotate(-.2);poly(g,'#f4f4f0',[[-84,-4],[84,-4],[70,22],[-70,22]]);rect(g,'#e8e8e4',-66,-26,120,22);rect(g,'#d8d8d4',-40,-44,60,18);rect(g,'#3a3a40',-12,-60,12,16);for(let q=0;q<10;q++)rect(g,'#6a7a9a',-60+q*11,-20,6,5);g.restore();
  for(let q=0;q<3;q++){const bx=x-160+q*40;poly(g,'#e8e8f0',[[bx,wy+34],[bx+22,wy+34],[bx+16,wy+42],[bx+4,wy+42]]);dot(g,'#ff8a30',bx+11,wy+30,2.4);glow(g,bx+11,wy+30,16,'255,140,50',.6)}});
 rect(g,'#b0b0b4',x+30,y-52,150,40);rect(g,'#9a9aa0',x+30,y-56,150,5);for(let q=0;q<6;q++)ln(g,'#6a6a72',1.4,[x+36+q*24,y-12,x+36+q*24,y-56]);
 g.save();g.translate(x+70,y);g.rotate(.06);rect(g,'#c8b898',-10,-140,20,140);poly(g,'#8a5a44',[[-12,-140],[0,-164],[12,-140]]);ar(g,'#3a2e28',-5,-110,10,18);g.restore();
 for(let q=0;q<3;q++)uom(g,x+110+q*26,y-2,t,{s:.56,f:-1,tun:'#e8782a',top:'#e8782a',acc:(g2,b)=>rect(g2,['#c8402a','#4a7ab8','#e8e0c0'][q],10,-84+b,22,12)})});
def('dqarrosticini',(g,x,y,t,a,k)=>{
 /* una lunga fornacella con le braci e gli arrosticini, un uomo con il grembiule, pane e olio, tazze con lo zafferano e fiori viola di crocus */
 rect(g,'#2a2a30',x-130,y-44,220,16);rect(g,'rgba(255,100,30,.8)',x-126,y-32,212,4);glow(g,x-20,y-34,130,'255,120,40',.35);for(let q=0;q<18;q++){ln(g,'#c8a878',1.2,[x-124+q*12,y-50,x-118+q*12,y-62]);rect(g,'#8a4a2a',x-123+q*12,y-52,5,4);rect(g,'#9a5a30',x-120+q*12,y-56,5,4)}
 rect(g,'#2a2a30',x-130,y-28,5,28);rect(g,'#2a2a30',x+86,y-28,5,28);fumo(g,x-60,y-60,t,3,'rgba(200,200,205,.5)');fumo(g,x+20,y-60,t+1,3,'rgba(200,200,205,.5)');
 uom(g,x+130,y-2,t,{s:.66,f:-1,tun:'#6a4a3a',top:'#6a4a3a',acc:(g2,b)=>{rect(g2,'#f4f0e8',-12,-62+b,24,44);ln(g2,tn('#e8b890'),6,[12,-84+b,-14,-62+b])}});
 tav(g,x-150,y,60,'#8a6a42','#f4f0e8');el(g,'#d8b070',x-160,y-40,12,4);rect(g,'#4a7a3a',x-138,y-56,6,20);for(let q=0;q<3;q++){const cx=x-170+q*18;rect(g,'#e8e0d0',cx+160,y-42,10,6);rect(g,'#d83a1a',cx+162,y-44,6,2)}
 for(let q=0;q<4;q++){const fx2=x+20+q*18,fy=y-4;for(let w=0;w<5;w++)el(g,'#8a4ab8',fx2+Math.cos(w*1.25)*3,fy-12+Math.sin(w*1.25)*3,3,2);ln(g,'#4a8a3a',1.2,[fx2,fy,fx2,fy-12]);dot(g,'#e8a020',fx2,fy-12,1.2)}});

/* ================= ZONA 3 · Lampedusa: la porta del Mediterraneo ================= */
def('dqlampedusa',(g,x,y,t,a,k)=>{
 /* un'isola bassa e chiara nel mare turchese, spiaggia bianchissima, scogliere, un'altra isola davanti, un traghetto bianco all'orizzonte */
 mare(g,x-200,y-6,400,70,t,k);rect(g,'#f4f0e0',x-200,y-6,400,10);for(let q=0;q<7;q++)el(g,'rgba(255,255,255,.7)',x-180+q*58+Math.sin(t*2+q)*4,y-8,18,1.6);
 poly(g,'#d8cfae',[[x-80,y-52],[x-40,y-60],[x+20,y-58],[x+70,y-50],[x+60,y-44],[x-70,y-44]]);for(let q=0;q<5;q++)el(g,'#6a9a56',x-60+q*26,y-58,8,3);
 poly(g,'#c8bc98',[[x+100,y-6],[x+110,y-60],[x+160,y-84],[x+200,y-70],[x+200,y-6]]);poly(g,'rgba(0,0,0,.12)',[[x+150,y-6],[x+160,y-84],[x+200,y-70],[x+200,y-6]]);for(let q=0;q<4;q++)el(g,'#7aa05a',x+120+q*20,y-70+q*6,10,4);
 poly(g,'#e8e4dc',[[x-170,y-66],[x-120,y-66],[x-126,y-58],[x-164,y-58]]);rect(g,'#f4f0e8',x-160,y-74,30,8);rect(g,'#c8402a',x-152,y-78,6,4);
 uom(g,x-30,y-2,t,{s:.56,f:1,tun:'#f4a830',top:'#f4a830',bot:'#e8e0c8'});dam(g,x,y-2,t,{s:.56,f:-1,top:'#3a9ac8'})});
def('dqpescatori',(g,x,y,t,a,k)=>{
 /* un pescatore con il cappello che rammenda una rete verde sulla banchina bianca, barca blu e rossa, cassette di pesce, un gatto tra le reti, gabbiani sulle bitte */
 poly(g,'#2a6ac8',[[x+40,y-34],[x+200,y-34],[x+176,y-6],[x+66,y-6]]);rect(g,'#c8402a',x+44,y-38,152,6);rect(g,'#f4f0e4',x+90,y-70,40,32);rect(g,'#3a6a8a',x+96,y-62,10,12);ln(g,'#5a4a3a',2.4,[x+150,y-38,x+150,y-100]);ln(g,'#5a4a3a',1,[x+150,y-100,x+60,y-34]);
 for(let q=0;q<3;q++){cassa(g,x-140+q*34,y,30,18,'#c8c8d0');for(let w=0;w<3;w++)el(g,'#b8c8d8',x-132+q*34+w*8,y-20,5,2)}
 for(let q=0;q<6;q++){ln(g,'#3a8a4a',1,[x-100+q*14,y-38,x-110+q*18,y-4]);ln(g,'#3a8a4a',1,[x-100,y-34+q*5,x-30,y-30+q*5])}dot(g,'#f08a20',x-30,y-6,3.6);
 uom(g,x-60,y-2,t,{s:.66,f:1,tun:'#3a3a44',top:'#3a3a44',bot:'#4a5a6a',skin:'#a8683c',cap:'#e0d8b8'});gatto(g,x+20,y-2,t);for(const bx of[-150,60]){rect(g,'#2a2a30',x+bx-3,y-14,6,14);el(g,'#f6f4ee',x+bx,y-18,5,3.4);dot(g,'#f6f4ee',x+bx+4,y-22,2.4);poly(g,'#e8a020',[[x+bx+6,y-22],[x+bx+10,y-21],[x+bx+6,y-20]])}});
def('dqcaretta',(g,x,y,t,a,k)=>{
 /* di notte sulla sabbia: una grande tartaruga, piccole tartarughine verso il mare, un volontario con luce rossa e cartello NIDO */
 pan(g,x,y-8,400,200,'#060a24','#1a2a4a',()=>{for(let q=0;q<26;q++)dot(g,'rgba(255,255,230,'+(.4+.4*Math.sin(t*2+q))+')',x-196+(q*61%392),y-200+hr(q)*90,1.2);dot(g,'#f4ecd0',x+130,y-170,12);rect(g,'#c8b890',x-200,y-70,400,62);mare(g,x-200,y-56,160,30,t,.8);for(let q=0;q<6;q++)el(g,'rgba(255,255,255,.4)',x-190+q*24,y-60,10,1.4);
  el(g,'#5a4a30',x+10,y-34,40,16);for(let q=0;q<7;q++)el(g,'rgba(0,0,0,.25)',x-20+q*10,y-36,4,6);el(g,'#6a5a3a',x+52,y-34,10,6);el(g,'#4a3a22',x-20,y-24,16,5);el(g,'#4a3a22',x+30,y-22,14,5);
  for(let q=0;q<5;q++)el(g,'#3a3226',x-70-q*16,y-26+(q%2)*5,4,2.4);glow(g,x+70,y-60,80,'255,60,40',.4)});
 uom(g,x+90,y-2,t,{s:.62,f:-1,tun:'#2a4a6a',top:'#2a4a6a',acc:(g2,b)=>{ln(g2,tn('#e8b890'),6,[12,-84+b,24,-72+b]);dot(g2,'#ff3a2a',26,-70+b,3);glow(g2,26,-70+b,24,'255,50,40',.6)}});rect(g,'#f4f0e4',x+126,y-76,34,20);ln(g,'#6a5a4a',2,[x+143,y-56,x+143,y-8]);txt(g,'NIDO',x+143,y-62,9,'#2a2a30','900')});
def('dqdammuso',(g,x,y,t,a,k)=>{
 /* una casa bianca a cupola, porta e finestra blu, fico d'India, una cisterna e un muretto a secco */
 rect(g,'#f6f2e6',x-60,y-70,120,70);g.fillStyle=tn('#f6f2e6');g.beginPath();g.ellipse(x,y-70,58,34,0,Math.PI,0);g.fill();rect(g,'rgba(0,0,0,.08)',x+36,y-70,24,70);ar(g,'#3a7ab8',x-36,y,24,44);rect(g,'#3a7ab8',x+10,y-50,22,24);rect(g,'#f6f2e6',x+19,y-50,2,24);rect(g,'#e8e0cc',x+80,y-40,36,40);g.fillStyle=tn('#e8e0cc');g.beginPath();g.ellipse(x+98,y-40,18,8,0,Math.PI,0);g.fill();rect(g,'#6a8aa8',x+92,y-48,12,4);
 rect(g,'#a89a7a',x-200,y-16,100,16);for(let q=0;q<12;q++)rect(g,hr(q)>.5?'#9a8c6c':'#b8aa8a',x-198+q*8,y-14+(q%2)*5,7,6);PR.dqfico(g,x-90,y,t);PR.dqfico(g,x+150,y,t)});
def('dq2011',(g,x,y,t,a,k)=>{
 /* il molo con le motovedette, volontari con giubbotti catarifrangenti che portano coperte e acqua, tende bianche con la croce rossa, un medico che accoglie un bambino; sobrio */
 molo(g,x-200,y,400);for(let q=0;q<2;q++){poly(g,'#e8e8ee',[[x+60+q*70,y-26],[x+130+q*70,y-26],[x+118+q*70,y-8],[x+72+q*70,y-8]]);rect(g,'#e8782a',x+64+q*70,y-26,64,5);rect(g,'#d8d8e0',x+86+q*70,y-48,20,22);dot(g,'#2a6aff',x+96+q*70,y-52,2.6);glow(g,x+96+q*70,y-52,16,'60,120,255',.6)}
 for(let q=0;q<2;q++){poly(g,'#f4f4f0',[[x-190+q*70,y-4],[x-155+q*70,y-56],[x-120+q*70,y-4]]);rect(g,'#d83a2a',x-159+q*70,y-34,8,2.4);rect(g,'#d83a2a',x-156+q*70,y-37,2.4,8)}
 for(let q=0;q<3;q++)uom(g,x-40+q*32,y-2,t,{s:.58,f:1,tun:'#e8c030',top:'#e8c030',acc:(g2,b)=>{rect(g2,'#d8d8e0',-12,-80+b,24,3);rect(g2,['#e8e0c0','#4a7ab8','#c8402a'][q],10,-84+b,22,12);if(q==1)rect(g2,'#aad8f0',30,-76+b,5,14)}});
 uom(g,x+0,y-2,t,{s:.66,f:-1,tun:'#f4f4f4',top:'#f4f4f4',bot:'#3a4a6a',acc:(g2,b)=>ln(g2,tn('#e8b890'),6,[12,-84+b,26,-74+b])});uom(g,x-36,y-2,t,{s:.38,f:1,tun:'#e8782a',top:'#e8782a'})});
def('dqfrancesco',(g,x,y,t,a,k)=>{
 /* un campo sportivo con un altare povero fatto di legno di barca, un uomo vestito di bianco che si china verso il mare con una corona, una motovedetta, pescatori in silenzio */
 rect(g,'#b8a878',x-200,y-12,400,12);const ax=x-10;poly(g,'#8a6a3a',[[ax-50,y-36],[ax+50,y-36],[ax+66,y-70],[ax-66,y-70]]);for(let q=0;q<4;q++)ln(g,'rgba(40,24,10,.5)',1.2,[ax-62+q*3,y-38-q*8,ax+62-q*3,y-38-q*8]);rect(g,'#6a4a26',ax-50,y-36,100,28);rect(g,'#f4f0e8',ax-30,y-74,60,4);cand(g,ax-40,y-72,k);cand(g,ax+40,y-72,k);
 uom(g,x-90,y-2,t,{s:.66,f:-1,tun:'#f6f4ee',top:'#f6f4ee',bot:'#f6f4ee',cap:'#fafaf6',acc:(g2,b)=>{ln(g2,tn('#e8c8a8'),6,[12,-84+b,26,-62+b]);g2.strokeStyle='#4a8a3a';g2.lineWidth=3;g2.beginPath();g2.arc(30,-58+b,8,0,7);g2.stroke();for(let q=0;q<5;q++)dot(g2,['#f4f0e8','#e8c030','#d83a5a'][q%3],30+Math.cos(q*1.26)*8,-58+b+Math.sin(q*1.26)*8,2)}});
 poly(g,'#e8e8ee',[[x+110,y-24],[x+170,y-24],[x+158,y-8],[x+122,y-8]]);rect(g,'#e8782a',x+114,y-24,52,4);ppl(g,x+60,y-2,t,3,26,['#3a3a44','#4a5a6a','#5a4a3a'],{s:.58,cap:['#e0d8b8',null,'#3a3a44']})});
def('dq3ottobre',(g,x,y,t,a,k)=>{
 /* alba di un mare calmo: una fila di candele e fiori sulla banchina, coperte bianche piegate, una tabella con la data, un peschereccio con le luci accese; sobrio */
 pan(g,x,y-4,400,150,'#8a98aa','#c4ccd4',()=>{mare(g,x-200,y-34,400,50,t,.2);rect(g,'rgba(200,210,225,.35)',x-200,y-150,400,150);poly(g,'#e8e8ee',[[x+100,y-52],[x+170,y-52],[x+158,y-36],[x+112,y-36]]);rect(g,'#c8c8d0',x+120,y-76,20,24);for(let q=0;q<3;q++){dot(g,'#ffd88a',x+112+q*22,y-60,2);glow(g,x+112+q*22,y-60,16,'255,210,130',.6)}});
 rect(g,'#b8b4a8',x-200,y-6,400,6);for(let q=0;q<8;q++){rect(g,'#f4f4f0',x-170+q*28,y-14,22,8);rect(g,'#e0e0dc',x-170+q*28,y-10,22,2)}candRow(g,x-166,y-20,12,22);for(let q=0;q<5;q++)dot(g,['#f4f0e8','#e8c840','#d88aa0'][q%3],x-120+q*52,y-18,3);
 rect(g,'#f4f0e4',x+80,y-124,90,34);txt(g,'3 OTTOBRE',x+125,y-110,11,'#2a2a30','900');txt(g,'2013',x+125,y-97,9,'#2a2a30','900');ln(g,'#6a5a4a',2,[x+100,y-90,x+100,y-6]);ln(g,'#6a5a4a',2,[x+150,y-90,x+150,y-6])});
def('dqporta',(g,x,y,t,a,k)=>{
 /* la Porta d'Europa: un grande portale bianco di ceramica che si apre sul mare, bambino con un fiore, nave grigia all'orizzonte */
 mare(g,x-200,y-6,400,100,t,k);rect(g,'#e4dcc4',x-200,y-6,400,6);
 for(const dx of[-70,38]){rect(g,'#f6f2ea',x+dx,y-170,32,170);for(let q=0;q<16;q++){dot(g,hr(q)>.5?'#3a5a8a':'#8a6a3a',x+dx+8+(q%2)*14,y-160+q*9,2+hr(q+3)*2)}}rect(g,'#f6f2ea',x-72,y-176,142,12);for(let q=0;q<10;q++)dot(g,hr(q+9)>.5?'#3a5a8a':'#c8503a',x-62+q*14,y-170,2.4);
 poly(g,'#6a727c',[[x-14,y-100],[x+14,y-100],[x+10,y-94],[x-10,y-94]]);rect(g,'#8a929c',x-6,y-108,12,8);uom(g,x+110,y-2,t,{s:.4,f:-1,tun:'#e8782a',top:'#e8782a',acc:(g2,b)=>{ln(g2,tn('#e8b890'),6,[12,-84+b,24,-72+b]);dot(g2,'#d83a5a',27,-72+b,3.4)}})});
def('dqfuocoammare',(g,x,y,t,a,k)=>{
 /* un ragazzino con la fionda di legno tra i fichi d'India, una nonna davanti a una radio, un pescatore con una nassa, la locandina del film con l'orso d'oro */
 for(let q=0;q<3;q++)PR.dqfico(g,x-170+q*34,y,t);rect(g,'#2a2a30',x+110,y-120,70,100);rect(g,'#c8a050',x+114,y-116,62,92);poly(g,'#14202a',[[x+118,y-112],[x+172,y-112],[x+172,y-62],[x+118,y-62]]);poly(g,'#e8c030',[[x+136,y-84],[x+146,y-98],[x+158,y-84],[x+152,y-72],[x+142,y-72]]);txt(g,'FUOCOAMMARE',x+145,y-50,6,'#2a2a30','900');
 uom(g,x-60,y-2,t,{s:.42,f:1,tun:'#c8402a',top:'#c8402a',acc:(g2,b)=>{ln(g2,tn('#e8b890'),6,[12,-84+b,30,-96+b]);ln(g2,'#6a4a2a',3,[30,-98+b,30,-114+b]);ln(g2,'#6a4a2a',3,[30,-100+b,22,-110+b])}});
 rect(g,'#7a5a3a',x-4,y-30,40,30);rect(g,'#2a2a30',x,y-26,16,10);dot(g,'#c8c8c0',x+8,y-21,3);dam(g,x+20,y-2,t,{s:.6,f:-1,top:'#3a3a44',hair:'#d8d8dc'});
 uom(g,x-110,y-2,t,{s:.62,f:1,tun:'#4a5a6a',top:'#4a5a6a',cap:'#2a2a34',acc:(g2,b)=>{g2.strokeStyle='#a8884a';g2.lineWidth=1.4;for(let q=0;q<4;q++){g2.beginPath();g2.ellipse(30,-52+b,9,14,0,0,7);g2.stroke()}ln(g2,'#a8884a',1,[24,-52+b,36,-52+b])}})});
def('dqcenapesce',(g,x,y,t,a,k)=>{
 /* una tavola all'aperto con pesce alla griglia, pasta con pomodori e capperi, pane, bicchieri di vino bianco, un cameriere, lampadine in fila */
 ln(g,'#2a2a30',1,[x-200,y-150,x-100,y-136,x,y-144,x+100,y-136,x+200,y-150]);for(let q=0;q<9;q++){const bx=x-200+q*50,by=y-150+Math.abs(q-4)*-3+(q%2?5:0)*0+q*0+ (q<4?q*3.5:(8-q)*3.5)*0.0;dot(g,'#ffe8a0',bx,y-146+Math.abs(q-4)*3,3.4);glow(g,bx,y-146+Math.abs(q-4)*3,26,'255,220,140',.5)}
 tav(g,x-30,y,230,'#8a6a42','#f4f0e8');el(g,'#4a4a52',x-100,y-42,34,6);for(let q=0;q<3;q++){el(g,'#c8c8d0',x-114+q*14,y-46,7,3);ln(g,'#8a8a92',.8,[x-120+q*14,y-44,x-108+q*14,y-48])}piatto(g,x-30,y-40,24,'#e0b050');for(let q=0;q<5;q++)dot(g,'#d83a2a',x-40+q*7,y-42-(q%2)*2,2.6);for(let q=0;q<4;q++)dot(g,'#4a7a3a',x-34+q*7,y-40,1);el(g,'#d8b070',x+30,y-42,16,5);for(let q=0;q<3;q++){rect(g,'rgba(240,240,250,.6)',x+60+q*14,y-56,7,18);rect(g,'#f0e098',x+61+q*14,y-48,5,10)}
 uom(g,x+130,y-2,t,{s:.66,f:-1,tun:'#f4f0e8',top:'#f4f0e8',bot:'#2a2a30',acc:(g2,b)=>{rect(g2,'#f4f0e8',-12,-62+b,24,44)}})});

/* ================= ZONA 4 · Roma: i due Papi, il Giubileo e la musica ================= */
const colonne=(g,x,y,n,sp,h,c)=>{for(let q=0;q<n;q++){rect(g,c,x+q*sp,y-h,8,h);rect(g,'rgba(0,0,0,.12)',x+q*sp+5,y-h,3,h);rect(g,tn('#d8d0bc'),x+q*sp-2,y-h-4,12,5)}rect(g,tn('#d8d0bc'),x-4,y-h-9,n*sp+4,6)};
def('dqroma',(g,x,y,t,a,k)=>{
 /* il Tevere tra i muraglioni, platani, un tram bianco e arancione, motorini sotto un pino, turisti con le macchine fotografiche e il bastone da selfie */
 rect(g,'#c8b898',x-200,y-44,400,6);rect(g,'#a89878',x-200,y-38,400,38);for(let q=0;q<8;q++)rect(g,'rgba(0,0,0,.1)',x-200+q*52,y-38,2,38);
 rect(g,'#5a8a6a',x-200,y-6,160,6);platano(g,x-150,y-44,1.3);platano(g,x+60,y-44,1.1);
 rect(g,'#f4f0e8',x+20,y-100,170,50);rect(g,'#e8782a',x+20,y-76,170,8);for(let q=0;q<6;q++)rect(g,'#7a9ab0',x+28+q*27,y-94,20,18);dot(g,'#1a1a1e',x+44,y-48,7);dot(g,'#1a1a1e',x+168,y-48,7);ln(g,'#2a2a30',2,[x+100,y-100,x+114,y-140]);ln(g,'#2a2a30',1,[x-200,y-140,x+210,y-140]);
 pino(g,x-80,y-4,1.1,t);vespa(g,x-110,y-2,1,'#c8402a',1);vespa(g,x-60,y-2,1,'#2a6ac8',-1);
 uom(g,x-10,y-2,t,{s:.6,f:1,tun:'#e8c030',top:'#e8c030',cap:'#f4f0e4',acc:(g2,b)=>{ln(g2,tn('#e8b890'),6,[12,-84+b,22,-110+b]);ln(g2,'#2a2a30',1.6,[22,-110+b,30,-132+b]);rect(g2,'#1a1a20',27,-142+b,8,12)}});dam(g,x+14,y-2,t,{s:.6,f:-1,top:'#3a9a6a',cap:'paglia'})});
def('dqrinuncia',(g,x,y,t,a,k)=>{
 /* un comignolo sul tetto della Cappella Sistina e la fumata bianca nel cielo del tramonto; la piazza con ombrelli e bandiere; una finestra illuminata con un uomo in bianco che saluta */
 pan(g,x-60,y-10,260,210,'#2a2a5a','#d89a7a',()=>{rect(g,'#6a5a52',x-190,y-60,260,52);for(let q=0;q<18;q++)rect(g,'rgba(0,0,0,.15)',x-190+q*14,y-60,2,52);rect(g,'#7a6a62',x-120,y-96,16,38);for(let q=0;q<8;q++){const u=(t*.25+q/8)%1;el(g,'rgba(255,255,255,'+(.85*(1-u))+')',x-112+Math.sin(t*.8+q*2)*10*u,y-98-u*84,6+u*16,5+u*12)}
  rect(g,'#8a7a70',x-30,y-130,60,74);rect(g,'#ffe0a0',x-14,y-118,28,40);glow(g,x,y-100,70,'255,220,140',.5);sagoma(g,x,y-78,.42,'#f6f4ee',t,0);ln(g,'#f6f4ee',2.4,[x+8,y-96,x+16,y-114+Math.sin(t*5)*3])});
 for(let q=0;q<6;q++){const ux=x+90+q%3*30,uy=y-8-Math.floor(q/3)*8;sagoma(g,ux,uy,.5,['#2a2a34','#4a3a3a','#3a4a5a'][q%3],t,0);dot(g,['#c8402a','#2a6ac8','#e8c030','#3a9a5a'][q%4],ux,uy-44,10);ln(g,'#2a2a30',1,[ux,uy-34,ux,uy-44])}tric(g,x+60,y,90,t);bandiera(g,x+205,y,90,t,26,0,'#e8c030')});
def('dqbellezza',(g,x,y,t,a,k)=>{
 /* una terrazza di notte con il Colosseo illuminato, tavoli con invitati eleganti, luci colorate, un uomo con completo chiaro e occhiali scuri, un grande schermo con una statuetta dorata */
 pan(g,x,y-4,400,230,'#080a24','#2a2a54',()=>{for(let q=0;q<30;q++)dot(g,'rgba(255,255,230,'+(.4+.4*Math.sin(t*2+q))+')',x-196+(q*61%392),y-230+hr(q)*80,1.1);
  el(g,'#d8b078',x-60,y-120,120,46);for(let r=0;r<3;r++)for(let q=0;q<14;q++)ar(g,'#4a3a28',x-170+q*17,y-90-r*20+22,8,16);glow(g,x-60,y-110,160,'255,190,110',.45);rect(g,'#3a2a3a',x-200,y-62,400,58);ln(g,'#2a2a30',1,[x-200,y-190,x-100,y-176,x,y-186,x+100,y-176,x+200,y-190]);for(let q=0;q<9;q++){const bx=x-200+q*50,by=y-188+(q<4?q:8-q)*3;dot(g,['#ff4a8a','#4ad8ff','#ffd84a','#8aff6a'][q%4],bx,by,3.4);glow(g,bx,by,22,'255,200,255',.4)}
  sch(g,x+90,y-210,80,50,'#14142a',k);poly(g,'#e8c030',[[x+126,y-196],[x+130,y-168],[x+134,y-196]]);dot(g,'#e8c030',x+130,y-200,4)});
 for(let q=0;q<3;q++){tav(g,x-130+q*80,y-6,44,'#6a4a3a','#f4f0e8');sagoma(g,x-146+q*80,y-8,.55,['#2a2a34','#8a2a4a','#2a3a6a'][q],t,0)}
 uom(g,x+130,y-2,t,{s:.66,f:-1,tun:'#e8dcc0',top:'#e8dcc0',bot:'#e8dcc0',acc:(g2,b)=>{ln(g2,'#14141a',1.8,[2,-103+b,13,-103+b]);dot(g2,'#14141a',6,-102+b,3.2);dot(g2,'#14141a',11,-102+b,3.2)}})});
def('dqexpo',(g,x,y,t,a,k)=>{
 /* un viale di padiglioni dalle forme diverse, l'Albero della Vita in legno e acciaio dorato dentro una vasca, folla con cappelli e bandiere, bambini con le mappe */
 poly(g,'#c8b88a',[[x-200,y-60],[x-170,y-110],[x-110,y-100],[x-90,y-60]]);poly(g,'#e8e0d0',[[x+130,y-60],[x+130,y-120],[x+200,y-90],[x+200,y-60]]);rect(g,'#8ac8d8',x+100,y-60,6,0);
 rect(g,'rgba(160,210,230,.7)',x-60,y-60,120,6);acqua(g,x-70,y-14,140,14,t,'#7ab0c0','#4a8aa0');
 poly(g,'#7a5a38',[[x-12,y-14],[x-6,y-110],[x+6,y-110],[x+12,y-14]]);for(let q=0;q<7;q++){const an=-1.4+q*.46;ln(g,'#e0b050',3.2,[x,y-104,x+Math.cos(an)*70,y-104+Math.sin(an)*60*0.8-20]);ln(g,'#e0b050',2,[x,y-90,x+Math.cos(an)*44,y-90+Math.sin(an)*36])}glow(g,x,y-130,100,'255,210,120',.25);
 ppl(g,x-190,y-2,t,5,24,['#e8782a','#3a8ac8','#c8402a','#4aa86a'],{s:.5,cap:['#e8d8a0',null,'#c8402a']});ppl(g,x+100,y-2,t,4,26,['#e8782a','#3a8ac8','#c8402a'],{s:.5,cap:['#e8d8a0']});tric(g,x+190,y,80,t);uom(g,x-40,y-2,t,{s:.44,f:1,tun:'#e8c030',top:'#e8c030',acc:(g2,b)=>{rect(g2,'#f4f0e4',12,-80+b,18,14);ln(g2,tn('#e8b890'),6,[12,-84+b,22,-74+b])}})});
def('dqmisericordia',(g,x,y,t,a,k)=>{
 /* una porta di bronzo spalancata, pellegrini con zaino e cappello verde in fila, un sacerdote con la stola viola, il colonnato; cartello PORTA SANTA */
 colonne(g,x-200,y-8,15,28,110,tn('#e4dcc8'));rect(g,'#c8c0a8',x-200,y-8,400,8);
 rect(g,'#d8d0bc',x-50,y-170,100,170);poly(g,'#c8c0a8',[[x-60,y-170],[x,y-200],[x+60,y-170]]);ar(g,'#ffe0a0',x-20,y,40,100);glow(g,x,y-50,90,'255,215,140',.55);rect(g,'#7a5a2a',x-36,y-96,16,96);rect(g,'#7a5a2a',x+20,y-96,16,96);for(let q=0;q<4;q++){rect(g,'rgba(255,220,140,.5)',x-33,y-90+q*22,10,16);rect(g,'rgba(255,220,140,.5)',x+23,y-90+q*22,10,16)}
 rect(g,'#f4f0e4',x-126,y-110,64,20);txt(g,'PORTA SANTA',x-94,y-96,7.5,'#2a2a30','900');ln(g,'#6a5a4a',2,[x-94,y-90,x-94,y-6]);
 ppl(g,x+70,y-2,t,5,28,['#3a6ab8','#c8402a','#2a8a4a','#e0a030'],{cap:['#3a9a4a'],bp:['#8a3a2a','#2a4a6a','#4a6a3a']});uom(g,x-130,y-2,t,{s:.64,f:1,tun:'#1a1a20',top:'#1a1a20',bot:'#1a1a20',acc:(g2,b)=>{rect(g2,'#8a3aa8',-4,-92+b,4,40);rect(g2,'#8a3aa8',2,-92+b,4,40)}})});
def('dqoscar',(g,x,y,t,a,k)=>{
 /* un palco con tendaggi dorati, un anziano con gli occhiali che sale con un foglio in mano, una statuetta dorata, il pubblico in piedi che applaude, un pianoforte e un leggio con pentagrammi */
 rect(g,'#1a1220',x-200,y-170,400,170);for(const s of[-1,1])for(let q=0;q<5;q++)poly(g,['#c8a040','#e0b850'][q%2],[[x+s*(120+q*16),y-170],[x+s*(120+q*16+10),y-170],[x+s*(110+q*16+10),y-20],[x+s*(110+q*16),y-20]]);rect(g,'#2a1c30',x-100,y-18,200,18);glow(g,x,y-100,130,'255,220,140',.35);
 poly(g,'#e8c030',[[x+30,y-70],[x+34,y-110],[x+38,y-70]]);dot(g,'#e8c030',x+34,y-116,5);rect(g,'#3a2a1a',x+22,y-66,24,8);
 uom(g,x-30,y-20,t,{s:.66,f:1,tun:'#1a1a20',top:'#1a1a20',bot:'#1a1a20',hair:'#eeeeee',acc:(g2,b)=>{ln(g2,'#2a2a2e',1.2,[2,-103+b,13,-103+b]);ln(g2,tn('#e4c0a0'),6,[12,-84+b,24,-74+b]);rect(g2,'#f4f0e4',22,-86+b,14,14)}});
 poly(g,'#1a1a20',[[x-190,y-20],[x-140,y-20],[x-130,y-60],[x-190,y-72]]);rect(g,'#1a1a20',x-186,y-20,4,20);rect(g,'#f4f0e4',x-172,y-80,16,12);
 for(let q=0;q<9;q++){sagoma(g,x-190+q*46,y+2,.6,['#2a2a34','#4a3a3a','#3a4a5a'][q%3],t,q%2)}});
def('dqamatrice',(g,x,y,t,a,k)=>{
 /* un tavolo con tovaglia a quadretti rossi, un piatto di spaghetti con sugo e guanciale, pecorino grattugiato; dietro un borgo di montagna con il campanile e una fila di candele; sobrio */
 pan(g,x,y-52,400,170,'#7ab0e0','#e8dcc0',()=>{poly(g,'#7a8a6a',[[x-200,y-60],[x-120,y-130],[x-20,y-100],[x+60,y-140],[x+200,y-70],[x+200,y-52],[x-200,y-52]]);for(let q=0;q<9;q++){const bx=x-150+q*30,hh=18+hr(q)*14;rect(g,'#d8c8a8',bx,y-52-hh-20,22,hh);poly(g,'#a85a3a',[[bx-2,y-52-hh-20],[bx+11,y-52-hh-30],[bx+24,y-52-hh-20]])}rect(g,'#c8bc98',x+10,y-130,12,50);poly(g,'#8a5a44',[[x+8,y-130],[x+16,y-144],[x+24,y-130]])});
 candRow(g,x-120,y-60,10,24);
 tav(g,x,y,300,'#8a6a42');rect(g,'#f4f0e4',x-150,y-44,300,9);for(let q=0;q<20;q++)for(let r=0;r<2;r++)if((q+r)%2)rect(g,'#d83a2a',x-150+q*15,y-44+r*4.5,15,4.5);
 el(g,'#f4f0e8',x,y-52,40,10);el(g,'#d8582a',x,y-55,30,7);for(let q=0;q<9;q++)ln(g,'#e8a040',1.4,[x-22+q*5.5,y-58,x-14+q*5.5,y-52]);for(let q=0;q<5;q++)rect(g,'#e89a9a',x-18+q*7,y-62+(q%2)*2,6,2.4);dot(g,'#f4f0e0',x-6,y-60,1.6);
 poly(g,'#e8d890',[[x+70,y-48],[x+100,y-48],[x+92,y-58]]);for(let q=0;q<6;q++)dot(g,'#f4ecb8',x+60+q*5,y-45,1.1);rect(g,'rgba(240,240,250,.6)',x-100,y-62,10,18)});
def('dqpranzo',(g,x,y,t,a,k)=>{
 /* tavoli con tovaglie bianche all'ombra, una carbonara con il tuorlo, supplì in un cono di carta, carciofi, vino bianco, un cameriere con il lungo grembiule */
 poly(g,'#c8402a',[[x-200,y-130],[x+200,y-130],[x+170,y-100],[x-170,y-100]]);for(let q=0;q<8;q++)poly(g,'#f4f0e8',[[x-190+q*50,y-130],[x-165+q*50,y-130],[x-150+q*50,y-100],[x-175+q*50,y-100]]);for(const s of[-1,1])ln(g,'#5a4a3a',3,[x+s*180,y-100,x+s*180,y]);
 tav(g,x-80,y,150,'#8a6a42','#f4f0e8');piatto(g,x-100,y-40,22,'#f0d890');dot(g,'#f0b020',x-100,y-42,3);for(let q=0;q<5;q++)rect(g,'#5a3a2a',x-112+q*5,y-45,3,1.2);
 poly(g,'#f0e8d4',[[x-50,y-38],[x-34,y-38],[x-42,y-66]]);for(let q=0;q<3;q++)dot(g,'#d89a30',x-46+q*4,y-60-q*0+(q%2)*-3,4);
 for(let q=0;q<3;q++){dot(g,'#6a8a4a',x-80+q*12,y-44,5);dot(g,'#7a9a56',x-80+q*12,y-47,3.6)}for(let q=0;q<2;q++){rect(g,'rgba(240,240,250,.6)',x-20+q*12,y-56,7,18);rect(g,'#f0e098',x-19+q*12,y-48,5,10)}
 tav(g,x+120,y,90,'#8a6a42','#f4f0e8');piatto(g,x+120,y-40,18,'#e0a050');
 uom(g,x+30,y-2,t,{s:.66,f:1,tun:'#f4f0e8',top:'#f4f0e8',bot:'#2a2a30',acc:(g2,b)=>{rect(g2,'#f4f0e8',-12,-62+b,24,60);rect(g2,'rgba(0,0,0,.1)',-12,-62+b,24,3)}})});

/* ================= ZONA 5 · Genova: il ponte nuovo ================= */
const faro=(g,x,y,h)=>{poly(g,'#c8c0a8',[[x-12,y],[x-8,y-h*.55],[x+8,y-h*.55],[x+12,y]]);rect(g,'#a89e84',x-11,y-h*.55-3,22,4);poly(g,'#cfc8b0',[[x-7,y-h*.55-3],[x-5,y-h],[x+5,y-h],[x+7,y-h*.55-3]]);rect(g,'#a89e84',x-8,y-h-3,16,4);rect(g,'#ffe08a',x-4,y-h-12,8,10);poly(g,'#2a2a2e',[[x-5,y-h-12],[x,y-h-20],[x+5,y-h-12]])};
const contain=(g,x,y,n,m)=>{const cs=['#c8503a','#3a6ab8','#e0b030','#4a8a5a','#8a4a8a'];for(let r=0;r<m;r++)for(let q=0;q<n;q++){rect(g,cs[(q*2+r)%5],x+q*34,y-(r+1)*17,32,16);for(let w=1;w<6;w++)rect(g,'rgba(0,0,0,.14)',x+q*34+w*5.4,y-(r+1)*17,1,16)}};
def('dqgenova',(g,x,y,t,a,k)=>{
 /* il porto con le grandi gru, container colorati, la Lanterna, il Bigo, barche a vela, case colorate sulla collina */
 for(let q=0;q<7;q++){const bx=x-200+q*30;rect(g,['#e8c4a0','#d8a888','#e8d490','#c8907a'][q%4],bx,y-100-hr(q)*50,26,100+hr(q)*50);for(let r=0;r<4;r++)rect(g,'rgba(40,30,20,.55)',bx+6,y-90+r*20-hr(q)*20,6,10)}
 faro(g,x+110,y-6,130);contain(g,x-60,y,4,3);contain(g,x+90,y,2,2);rect(g,'#2a2a30',x-12,y-30,6,30);
 ln(g,'#c8402a',4,[x-70,y,x-70,y-130]);ln(g,'#c8402a',4,[x-70,y-130,x+10,y-130]);ln(g,'#c8402a',3,[x-70,y-130,x-80,y-105]);ln(g,'#8a8a8a',1,[x,y-130,x,y-50]);rect(g,'#6a6a72',x-6,y-54,12,8);
 const bg=x-150;for(let q=0;q<6;q++)ln(g,'#a8aeb8',2,[bg,y-96,bg-50+q*20,y-6]);ln(g,'#a8aeb8',2,[bg,y-96,bg,y-110]);barcaV(g,x+170,y-6,t,.9,'#f4f4f0');barcaV(g,x-190,y-6,t+1,.7,'#4a6a8a')});
def('dqbrexit',(g,x,y,t,a,k)=>{
 /* una cabina elettorale di cartone, la scheda con le due caselle, un televisore con la tabella dei risultati, la bandiera britannica e quella europea */
 rect(g,'#c8a878',x-180,y-100,80,100);rect(g,'#b8986a',x-180,y-100,80,6);rect(g,'#8a3a3a',x-176,y-82,72,34);ln(g,'#5a4a3a',1,[x-160,y-46,x-150,y-30]);dot(g,'#2a2a30',x-150,y-30,2);
 rect(g,'#f4f0e4',x-70,y-110,80,106);txt(g,'REFERENDUM',x-30,y-100,7,'#2a2a30','900');rect(g,'#d8d4c4',x-62,y-90,64,22);txt(g,'REMAIN',x-38,y-77,8,'#1a3a9a','900');rect(g,'#fff',x-14,y-87,12,16);rect(g,'#d8d4c4',x-62,y-60,64,22);txt(g,'LEAVE',x-38,y-47,8,'#c8222a','900');rect(g,'#fff',x-14,y-57,12,16);ln(g,'#2a2a30',2,[x-10,y-50,x-4,y-60]);
 tvc(g,x+80,y-4,2.4,k,'#cfd8e0');for(let q=0;q<4;q++){rect(g,q%2?'#c8222a':'#1a3a9a',x+54+q*0,y-76+q*8,10+q*6+(q%2)*8,5)}
 ue(g,x+150,y,130,t);const ux=x+112;ln(g,LEG2,2.6,[ux,y,ux,y-130]);rect(g,'#1a2a6a',ux,y-130,36,24);ln(g,'#f4f0e4',4,[ux,y-130,ux+36,y-106]);ln(g,'#f4f0e4',4,[ux,y-106,ux+36,y-130]);ln(g,'#c8222a',2,[ux,y-130,ux+36,y-106]);ln(g,'#c8222a',2,[ux,y-106,ux+36,y-130]);ln(g,'#f4f0e4',7,[ux+18,y-130,ux+18,y-106]);ln(g,'#f4f0e4',7,[ux,y-118,ux+36,y-118]);ln(g,'#c8222a',4,[ux+18,y-130,ux+18,y-106]);ln(g,'#c8222a',4,[ux,y-118,ux+36,y-118])});
def('dqnotredame',(g,x,y,t,a,k)=>{
 /* il tramonto di Parigi: la cattedrale con le due torri e una grande nuvola di fumo, una folla silenziosa sui ponti e sui lungosenna, vigili del fuoco con le scale; sobrio */
 pan(g,x,y-8,400,234,'#4a4a6a','#e89a6a',()=>{for(const dx of[-44,44]){rect(g,'#6a5a58',x+dx-20,y-190,40,182);for(let q=0;q<4;q++)rect(g,'#6a5a58',x+dx-20+q*11,y-198,7,8);ar(g,'#2a2020',x+dx-6,y-120,12,34)}rect(g,'#6a5a58',x-24,y-130,48,122);dot(g,'#4a3a3a',x,y-96,11);
  for(let q=0;q<9;q++)el(g,'rgba(130,120,125,'+(.55-q*.04)+')',x+Math.sin(t*.4+q)*16-24+q*8,y-210-q*10+Math.sin(t+q)*2,40+q*7,16+q*3);rect(g,'#2a2a3a',x-200,y-34,400,26)});
 for(let q=0;q<10;q++)sagoma(g,x-190+q*38+(q%2)*8,y-2,.52,['#2a2a34','#4a3a3a','#3a4a5a'][q%3],t,0);
 rect(g,'#c8302a',x+130,y-20,60,20);ln(g,'#c8c8c8',2,[x+138,y-22,x+160,y-60]);ln(g,'#c8c8c8',2,[x+150,y-22,x+172,y-60]);for(let q=0;q<5;q++)ln(g,'#c8c8c8',1,[x+141+q*5,y-30-q*7,x+152+q*5,y-30-q*7])});
def('dq14agosto',(g,x,y,t,a,k)=>{
 /* una valle sotto la pioggia fine con il ponte interrotto visto da lontano, fiori e lumini in fila, uno striscione con la scritta GENOVA, volontari con giubbotti arancioni; sobrio */
 pan(g,x,y-30,400,190,'#6a7480','#a4acb4',()=>{poly(g,'#5a6a5a',[[x-200,y-30],[x-130,y-100],[x-60,y-60],[x,y-30]]);poly(g,'#5a6a5a',[[x+30,y-30],[x+110,y-110],[x+200,y-70],[x+200,y-30]]);rect(g,'#c4c4c0',x-200,y-134,160,8);for(let q=0;q<2;q++)poly(g,'#d4d4d0',[[x-120+q*60,y-126],[x-112+q*60,y-126],[x-108+q*60,y-30],[x-124+q*60,y-30]]);rect(g,'#c4c4c0',x+60,y-134,140,8);poly(g,'#d4d4d0',[[x+120,y-126],[x+130,y-126],[x+134,y-30],[x+116,y-30]]);rect(g,'rgba(180,190,200,.3)',x-200,y-190,400,190);pioggia(g,x-200,y-190,400,190,t,.45)});
 for(let q=0;q<26;q++){const fx2=x-186+q*14;cand(g,fx2,y-4,k);if(q%3==0)dot(g,['#f4f0e8','#e8c030','#d88aa0'][q%3==0?(q/3)%3:0],fx2+4,y-3,3)}
 ln(g,'#6a5a4a',2,[x-60,y-60,x-60,y-4]);ln(g,'#6a5a4a',2,[x+60,y-60,x+60,y-4]);rect(g,'#f4f0e4',x-60,y-96,120,34);txt(g,'GENOVA',x,y-72,18,'#c8222a','900');for(let q=0;q<2;q++)uom(g,x+110+q*26,y-2,t,{s:.58,f:-1,tun:'#e8782a',top:'#e8782a',cap:'#f4f4f0'})});
def('dqpontenuovo',(g,x,y,t,a,k)=>{
 /* un ponte di acciaio in costruzione: pile, un tratto di impalcato, una gru che solleva una lunga trave, operai in tuta arancione con casco bianco, scintille di saldatura, il mare e le navi lontane */
 for(let q=0;q<2;q++){poly(g,'#d8d4cc',[[x-130+q*150,y-130],[x-112+q*150,y-130],[x-116+q*150,y],[x-126+q*150,y]]);rect(g,'#c4c0b8',x-134+q*150,y-134,28,6)}
 rect(g,'#b8b4ac',x-200,y-140,230,8);rect(g,'#8a8a90',x-200,y-148,230,4);for(let q=0;q<10;q++)ln(g,'#7a7a80',1.4,[x-200+q*24,y-148,x-188+q*24,y-140]);
 ln(g,'#e8b020',6,[x+110,y,x+110,y-190]);ln(g,'#e8b020',4,[x+110,y-188,x-40,y-176]);ln(g,'#8a8a8a',1.2,[x+10,y-180,x+10,y-150]);rect(g,'#7a7a80',x-60,y-150,100,5);ln(g,'#8a8a8a',1,[x-52,y-146,x+10,y-180]);ln(g,'#8a8a8a',1,[x+32,y-146,x+10,y-180]);rect(g,'#4a4a52',x+100,y-46,24,22);
 for(let q=0;q<3;q++)uom(g,x+50+q*30,y-2,t,{s:.58,f:q%2?1:-1,tun:'#e8782a',top:'#e8782a',bot:'#e8782a',cap:'#f4f4f0',acc:q==1?(g2,b)=>{ln(g2,tn('#e8b890'),6,[12,-84+b,24,-62+b]);dot(g2,'#fff8c0',26,-60+b,2.4);glow(g2,26,-60+b,16,'255,240,150',.7)}:null});
 for(let q=0;q<6;q++){const u=(t*2+q*.4)%1;dot(g,'rgba(255,230,120,'+(1-u)+')',x+76+Math.sin(q*3)*12*u,y-48+u*40,1.4)}});
def('dqpontesg',(g,x,y,t,a,k)=>{
 /* un lungo ponte bianco con pile ellittiche e una fila di lampioni, una grande bandiera bianca con croce rossa, una banda con gli ottoni, famiglie con fiori */
 rect(g,'#f4f2ec',x-200,y-150,400,8);rect(g,'rgba(0,0,0,.12)',x-200,y-142,400,3);for(let q=0;q<4;q++){poly(g,'#ece8e0',[[x-170+q*110,y-142],[x-146+q*110,y-142],[x-152+q*110,y-8],[x-164+q*110,y-8]]);el(g,'#f4f2ec',x-158+q*110,y-142,14,6)}
 for(let q=0;q<14;q++){const lx=x-196+q*30;ln(g,'#6a6a70',1.2,[lx,y-150,lx,y-166]);dot(g,'#ffe8a0',lx,y-168,2.4);glow(g,lx,y-168,12,'255,230,150',.4)}
 ln(g,LEG2,3,[x+150,y,x+150,y-110]);rect(g,'#f4f4f0',x+150,y-110,60,40);ln(g,'#d83a2a',7,[x+180,y-110,x+180,y-70]);ln(g,'#d83a2a',7,[x+150,y-90,x+210,y-90]);
 for(let q=0;q<3;q++){uom(g,x-90+q*28,y-2,t,{s:.58,f:1,tun:'#1a2a5a',top:'#1a2a5a',bot:'#1a2a5a',cap:'#1a2a5a',acc:(g2,b)=>{ln(g2,tn('#e8b890'),6,[12,-84+b,26,-76+b]);poly(g2,'#e0b84a',[[24,-80+b],[38,-84+b],[38,-76+b]])}})}
 ppl(g,x+20,y-2,t,4,26,['#e8782a','#3a8ac8','#c8402a','#4aa86a'],{s:.54});for(let q=0;q<4;q++)dot(g,['#f4f0e8','#e8c030','#d83a5a','#c8402a'][q],x+26+q*26,y-52,3)});
def('dqmugugno',(g,x,y,t,a,k)=>{
 /* un caruggio stretto con alti palazzi, il bucato steso tra le finestre, un'insegna di bottega in legno, un mortaio di marmo con il pestello e il basilico, un anziano seduto sul gradino */
 rect(g,'#b8946a',x-200,y-200,90,200);rect(g,'#d8b890',x+110,y-200,90,200);for(let r=0;r<4;r++)for(let s of[-1,1])finestra(g,s<0?x-186:x+130,y-170+r*40,20,28,k);
 panni(g,x-110,y-150,x+110,y-146,t,5);panni(g,x-110,y-100,x+110,y-96,t+1,5);
 rect(g,'#7a5a38',x-100,y-90,70,26);txt(g,'BOTTEGA',x-65,y-72,10,'#f4e8c8','900');ln(g,'#4a3a2a',2,[x-100,y-64,x-100,y-30]);ln(g,'#4a3a2a',2,[x-30,y-64,x-30,y-30]);
 el(g,'#c8c8c8',x+30,y-12,28,12);rect(g,'#c8c8c8',x+10,y-22,40,14);el(g,'#9a9aa0',x+30,y-22,20,5);for(let q=0;q<6;q++){const lx=x+16+q*6;el(g,'#4aaa4a',lx,y-30-(q%2)*3,4,2.4)}ln(g,'#e8e8e8',4,[x+38,y-22,x+54,y-50]);
 uom(g,x+100,y-2,t,{s:.5,f:-1,tun:'#6a5a4a',top:'#6a5a4a',cap:'#2a2a34',hair:'#d8d8dc'});glow(g,x,y-150,140,'255,236,190',.2)});
def('dqfocaccia',(g,x,y,t,a,k)=>{
 /* un vassoio di rame con una focaccia alta e dorata con le fossette e il sale, farinata a spicchi, una focaccia sottile di Recco col formaggio, un fornaio con il grembiule bianco, la bocca del forno */
 poly(g,'#6a5a4a',[[x-200,y],[x-200,y-140],[x-140,y-170],[x-80,y-140],[x-80,y]]);ar(g,'#2a1a14',x-170,y,60,90);fuoco(g,x-140,y-14,t,1.2,k);glow(g,x-140,y-40,100,'255,140,50',.4);
 el(g,'#c87a3a',x+10,y-42,76,10);rect(g,'#e0a040',x-50,y-58,120,16);rect(g,'#f0bc58',x-50,y-58,120,6);for(let q=0;q<14;q++)dot(g,'#c88a30',x-42+q*8.4,y-52+(q%2)*5,1.8);for(let q=0;q<24;q++)dot(g,'#f6f2e4',x-48+q*5,y-56+(q%3)*4,.8);
 tav(g,x+120,y,110,'#8a6a42');for(let q=0;q<3;q++)poly(g,'#e8c860',[[x+86+q*22,y-38],[x+108+q*22,y-38],[x+97+q*22,y-58]]);el(g,'#e8d090',x+120,y-70,36,5);for(let q=0;q<5;q++)dot(g,'#f6f0d0',x+104+q*8,y-70,2);
 uom(g,x-40,y-2,t,{s:.66,f:1,tun:'#f4f0e8',top:'#f4f0e8',bot:'#f4f0e8',cap:'#f8f8f4',acc:(g2,b)=>{rect(g2,'#f4f0e8',-12,-62+b,24,60);ln(g2,tn('#e8b890'),6,[12,-84+b,28,-70+b])}})});

/* ================= ZONA 6 · Bergamo: la città che si ferma e riparte ================= */
def('dqbergamo',(g,x,y,t,a,k)=>{
 /* Città Alta: mura venete, torre civica, cupola, portici, funicolare, panchina */
 rect(g,'#a89878',x-200,y-70,400,70);for(let q=0;q<20;q++)rect(g,'rgba(0,0,0,.1)',x-200+q*20,y-70,1,70);for(let q=0;q<10;q++)rect(g,'#a89878',x-200+q*40,y-78,22,8);
 rect(g,'#c8b490',x-60,y-190,34,120);poly(g,'#9a5a3a',[[x-64,y-190],[x-43,y-214],[x-22,y-190]]);ar(g,'#3a2a20',x-50,y-150,14,30);dot(g,'#f4f0e0',x-43,y-176,6);
 el(g,'#7a9a8a',x+40,y-120,40,24);rect(g,'#d8c8a0',x+0,y-120,80,50);rect(g,'#d8c8a0',x+36,y-150,8,8);
 for(let q=0;q<5;q++)ar(g,'#4a3a2a',x+8+q*14,y-70,10,30);
 poly(g,'#8a3a3a',[[x+130,y],[x+190,y-60],[x+200,y-52],[x+140,y+4]]);rect(g,'#c85a3a',x+150,y-50,26,18);rect(g,'#7a5a38',x-150,y-26,50,5);rect(g,'#7a5a38',x-146,y-22,3,22);rect(g,'#7a5a38',x-106,y-22,3,22);uom(g,x-126,y-24,t,{s:.5,f:1,tun:'#6a5a4a',top:'#6a5a4a',cap:'#2a2a34',hair:'#d8d8dc'})});
def('dqlockdown',(g,x,y,t,a,k)=>{
 /* piazza vuota con una sola panchina, un cartello 'ANDRÀ TUTTO BENE' con arcobaleno disegnato da un bambino, finestre accese, una persona con mascherina distante */
 rect(g,'#9a9aa0',x-200,y-150,400,150);for(let r=0;r<3;r++)for(let q=0;q<8;q++){rect(g,(q+r)%3==0?'#ffd890':'#4a4a5a',x-190+q*48,y-140+r*44,18,28)}
 for(let q=0;q<5;q++){ln(g,['#d83a3a','#e8a030','#e8d830','#4aaa4a','#3a6ad8'][q],3,[x-90,y-70-q*0,x-90,y-70])}
 rect(g,'#f4f0e4',x-100,y-100,90,60);for(let q=0;q<5;q++){const c=['#d83a3a','#e8a030','#e8d830','#4aaa4a','#3a6ad8'][q];ln(g,c,3,[x-90+q*0,y-56,x-90,y-56]);ln(g,c,2.4,[x-90+q*2,y-46,x-80+q*2,y-66,x-50+q*2,y-66,x-40+q*2,y-46])}txt(g,'ANDRÀ TUTTO BENE',x-55,y-86,7.5,'#2a2a30','900');
 rect(g,'#6a4a2a',x+40,y-24,60,5);rect(g,'#6a4a2a',x+44,y-20,3,20);rect(g,'#6a4a2a',x+93,y-20,3,20);
 uom(g,x+150,y-2,t,{s:.62,f:-1,tun:'#3a4a6a',top:'#3a4a6a',acc:(g2,b)=>{rect(g2,'#e8f0f4',3,-98+b,10,6)}});glow(g,x,y-80,160,'255,230,170',.12)});
def('dq18marzo',(g,x,y,t,a,k)=>{
 /* sera: una colonna di mezzi militari lungo una strada vuota, luci e lumini, silenzio; sobrio */
 pan(g,x,y-6,400,200,'#0a0e22','#2a2a46',()=>{for(let q=0;q<24;q++)dot(g,'rgba(255,255,230,.6)',x-190+(q*83%380),y-190+hr(q)*70,1);rect(g,'#2a2a34',x-200,y-40,400,40);ln(g,'#c8c8d0',1.4,[x-200,y-18,x+200,y-18]);
  for(let q=0;q<4;q++){const vx=x-190+q*100;rect(g,'#4a5a42',vx,y-66,80,24);rect(g,'#4a5a42',vx+60,y-80,18,16);rect(g,'#2a3a2a',vx+10,y-80,40,14);dot(g,'#1a1a1e',vx+16,y-40,7);dot(g,'#1a1a1e',vx+56,y-40,7);dot(g,'#ffd890',vx+78,y-60,2.4);glow(g,vx+80,y-60,16,'255,220,150',.5)}
  for(let q=0;q<30;q++)dot(g,'rgba(255,214,130,'+(.7+.3*Math.sin(t*3+q))+')',x-190+q*13,y-5,1.5)})});
def('dqpapa',(g,x,y,t,a,k)=>{
 /* piazza San Pietro vuota sotto la pioggia, una figura bianca sola, il crocifisso, la cupola, lampioni accesi */
 pan(g,x,y-4,400,230,'#4a505c','#8a909c',()=>{rect(g,'#8a8a90',x-200,y-26,400,26);el(g,'#9a9aa0',x,y-120,100,50);rect(g,'#b8b4a8',x-60,y-120,120,94);dot(g,'#a4a0a0',x,y-160,18);ln(g,'#6a6a70',2,[x,y-178,x,y-196]);ln(g,'#6a6a70',2,[x-5,y-190,x+5,y-190]);
  for(let q=0;q<6;q++)rect(g,'#9a968c',x-50+q*18,y-110,6,84);for(const s of[-1,1])for(let q=0;q<7;q++){dot(g,'#a4a0a0',x+s*(80+q*16),y-30,5)}
  for(let q=0;q<4;q++){const lx=x-150+q*100;ln(g,'#3a3a40',1.6,[lx,y-26,lx,y-76]);dot(g,'#ffe0a0',lx,y-78,3);glow(g,lx,y-78,24,'255,224,160',.5)}
  sagoma(g,x,y-4,.5,'#f6f4ee',t,0);pioggia(g,x-200,y-230,400,230,t,.6)})});
def('dqmedici',(g,x,y,t,a,k)=>{
 /* corsia d'ospedale: letti allineati, macchinari, un camice bianco con mascherina e visiera, cuffie, una tazza di caffè; sobrio */
 rect(g,'#dce4e8',x-200,y-170,400,170);rect(g,'#c8d0d4',x-200,y-26,400,26);
 for(let q=0;q<4;q++){const bx=x-190+q*76;rect(g,'#f4f4f4',bx,y-48,60,18);rect(g,'#9ab0bc',bx+4,y-62,18,14);rect(g,'#4a5a6a',bx+4,y-30,3,30);rect(g,'#4a5a6a',bx+54,y-30,3,30);rect(g,'#1a2a2a',bx+30,y-100,24,18);rect(g,'#6ad8a0',bx+33,y-96,18,10);ln(g,'#6ad8a0',1,[bx+33,y-91,bx+38,y-94,bx+42,y-88,bx+47,y-94,bx+51,y-91])}
 uom(g,x+80,y-2,t,{s:.66,f:-1,tun:'#e8f4f0',top:'#e8f4f0',bot:'#3a8aa8',cap:'#3a8aa8',acc:(g2,b)=>{rect(g2,'rgba(200,230,240,.5)',3,-110+b,12,16);rect(g2,'#e8f0f4',3,-98+b,10,6);for(let q=0;q<3;q++)dot(g2,'rgba(220,60,60,.4)',8,-96+b+q,1.6)}});
 rect(g,'#f4ead8',x+130,y-34,10,11);rect(g,'#5a3820',x+130,y-32,10,2)});
def('dqvday',(g,x,y,t,a,k)=>{
 /* una siringa e un cerotto su un braccio, fila di persone, cartello 'VACCINATI', una ragazza con un fiore */
 rect(g,'#e8f0f4',x-200,y-150,400,150);rect(g,'#2a8aa8',x-200,y-156,400,10);rect(g,'#f4f0e4',x-70,y-136,110,30);txt(g,'VACCINATI',x-15,y-116,12,'#2a6a8a','900');
 ppl(g,x-190,y-2,t,6,26,['#3a6ab8','#c8402a','#2a8a4a','#e0a030'],{s:.56});
 rect(g,'#e8c8a8',x+80,y-60,70,18);rect(g,'#f4f0e8',x+110,y-58,12,10);poly(g,'#f4f4f4',[[x+60,y-72],[x+112,y-66],[x+112,y-62],[x+60,y-68]]);rect(g,'#c8c8d0',x+40,y-76,22,10);
 uom(g,x+150,y-2,t,{s:.58,f:-1,tun:'#e8c030',top:'#e8c030',acc:(g2,b)=>{ln(g2,'#4aaa4a',1.6,[12,-70+b,12,-90+b]);dot(g2,'#e8587a',12,-92+b,3)}})});
def('dqmaneskin',(g,x,y,t,a,k)=>{
 /* palco di notte con luci laser, tre sagome con chitarre e basso e microfono, folla con braccia alzate, coriandoli */
 pan(g,x,y-4,400,230,'#0a0618','#2a1a3a',()=>{for(let q=0;q<6;q++){const an=-1.2+q*.5;ln(g,'rgba(255,60,120,.35)',2,[x-150+q*60,y-170,x-150+q*60+Math.sin(t+q)*70,y-30])}rect(g,'#1a1a22',x-160,y-60,320,10);
  for(let q=0;q<4;q++){const fx2=x-100+q*66;sagoma(g,fx2,y-60,.55,'#101018',t,0);ln(g,'#e8c030',2.4,[fx2-12,y-80,fx2+16,y-92])}
  for(let q=0;q<26;q++){const px=x-190+q*15;dot(g,'#14141c',px,y-8-(q%3)*4,7);ln(g,'#14141c',2.2,[px,y-12,px+Math.sin(t*4+q)*5,y-34])}
  for(let q=0;q<18;q++){const u=(t*.5+q*.17)%1;dot(g,['#ff4a8a','#4ad8ff','#ffd84a'][q%3],x-190+q*21,y-200+u*180,1.6)}})});
def('dqwembley',(g,x,y,t,a,k)=>{
 /* stadio con l'arco, prato verde, una coppa dorata, bandiera azzurra, tifosi con sciarpe */
 rect(g,'#3a9a4a',x-200,y-40,400,40);for(let q=0;q<8;q++)rect(g,'rgba(0,0,0,.08)',x-200+q*50,y-40,25,40);
 rect(g,'#6a6a78',x-200,y-120,400,80);for(let q=0;q<40;q++)dot(g,['#2a6ac8','#f4f0e8','#e8c030','#c8402a'][q%4],x-196+q*10,y-110+(q%5)*14,2);
 ln(g,'#e8e8f0',5,[x-180,y-40,x-120,y-170,x-60,y-40]);ln(g,'#e8e8f0',5,[x+60,y-40,x+120,y-170,x+180,y-40]);
 rect(g,'#e8c030',x-8,y-84,16,4);poly(g,'#e8c030',[[x-14,y-120],[x+14,y-120],[x+8,y-90],[x-8,y-90]]);dot(g,'#e8c030',x-14,y-110,5);dot(g,'#e8c030',x+14,y-110,5);rect(g,'#e8c030',x-3,y-90,6,6);rect(g,'#6a4a2a',x-12,y-84,24,5);
 bandiera(g,x-130,y,120,t,30,0,'#2a6ac8');ppl(g,x+40,y-2,t,5,28,['#2a6ac8','#f4f4f0','#2a6ac8'],{s:.56})});
def('dqtokyo',(g,x,y,t,a,k)=>{
 /* pista olimpica rossa, un velocista con la maglia azzurra che taglia il traguardo, un saltatore con il braccio alzato, medaglia d'oro al collo */
 rect(g,'#b83a2a',x-200,y-30,400,30);for(let q=0;q<5;q++)rect(g,'rgba(255,255,255,.7)',x-200,y-26+q*6,400,1);rect(g,'#2a6ac8',x-200,y-120,400,90);for(let q=0;q<20;q++)dot(g,'rgba(255,255,255,.5)',x-196+q*20,y-80+(q%4)*14,2);
 uom(g,x-60,y-8,t,{s:.66,f:1,tun:'#2a5ac8',top:'#2a5ac8',bot:'#2a5ac8',acc:(g2,b)=>{ln(g2,tn('#e8b890'),6,[12,-84+b,22,-114+b]);ln(g2,tn('#e8b890'),6,[-12,-84+b,-24,-112+b])}});
 ln(g,'#f4f0e8',2,[x+40,y-8,x+40,y-60]);ln(g,'#f4f0e8',2,[x+120,y-8,x+120,y-60]);ln(g,'#f4f0e8',2,[x+30,y-60,x+130,y-60]);rect(g,'#e8c030',x+60,y-30,14,4);dot(g,'#e8c030',x+67,y-24,8)});
def('dqatalanta',(g,x,y,t,a,k)=>{
 /* stadio nerazzurro: sciarpe a strisce nere e azzurre, una coppa, coriandoli, tifosi, una capra stilizzata sulla bandiera */
 rect(g,'#3a9a4a',x-200,y-30,400,30);rect(g,'#2a2a34',x-200,y-120,400,90);for(let q=0;q<40;q++)dot(g,['#2a6ac8','#14141c'][q%2],x-196+q*10,y-110+(q%5)*14,2.4);
 for(let q=0;q<8;q++){const sx=x-180+q*46;for(let r=0;r<6;r++)rect(g,r%2?'#14141c':'#3a8ae0',sx,y-100+r*7,34,7);ln(g,'#14141c',1,[sx,y-100,sx,y-58])}
 for(let q=0;q<26;q++){const u=(t*.4+q*.21)%1;dot(g,['#3a8ae0','#14141c','#f4f0e8'][q%3],x-190+q*15,y-180+u*150,1.8)}
 poly(g,'#e8c030',[[x-14,y-90],[x+14,y-90],[x+9,y-62],[x-9,y-62]]);dot(g,'#e8c030',x-16,y-84,5);dot(g,'#e8c030',x+16,y-84,5)});
def('dqpolenta',(g,x,y,t,a,k)=>{
 /* tagliere con polenta fumante e uccelli, casa di pietra col camino acceso, pentolone di rame, panchina, bicchieri */
 poly(g,'#7a6a58',[[x-200,y],[x-200,y-110],[x-130,y-150],[x-60,y-110],[x-60,y]]);ar(g,'#2a1a14',x-150,y,60,60);fuoco(g,x-130,y-8,t,1,k);glow(g,x-130,y-30,90,'255,150,60',.35);
 tav(g,x+30,y,200,'#8a6a42');rect(g,'#c8a050',x-30,y-56,100,10);el(g,'#f0c840',x+20,y-60,40,14);fumo(g,x+20,y-68,t,1.2,'rgba(240,240,240,.5)');for(let q=0;q<3;q++){dot(g,'#5a3a2a',x+90+q*10,y-52,4);dot(g,'#f4f0e0',x+90+q*10,y-56,2)}
 el(g,'#c87a3a',x+140,y-46,30,8);rect(g,'#c87a3a',x+110,y-70,60,26);rect(g,'rgba(240,240,250,.6)',x+40,y-60,8,16)});

/* ================= ZONA 7 · Parigi: Cantiere Olimpico ================= */
def('dqparigi',(g,x,y,t,a,k)=>{
 /* Senna, bouquinistes, ponti, la Torre in lontananza, un battello */
 rect(g,'#c8b898',x-200,y-34,400,34);acqua(g,x-200,y-8,200,8,t,'#6a9ab0','#4a7a90');for(let q=0;q<8;q++)rect(g,['#2a5a3a','#3a3a2a'][q%2],x-190+q*24,y-60,20,26);
 barcaV(g,x+60,y-4,t,.9,'#f4f0e8');platano(g,x+150,y-34,1.2);dam(g,x+40,y-2,t,{s:.62,f:-1,top:'#c8402a',cap:'#2a2a34'});uom(g,x+10,y-2,t,{s:.62,f:1,tun:'#2a3a5a',top:'#2a3a5a',cap:'#2a2a34'})});
def('dqucraina',(g,x,y,t,a,k)=>{
 /* una sala con una mappa, bandiere gialle e blu, una bambina con un orsetto, una tenda; sobrio */
 rect(g,'#e8e4d8',x-200,y-150,400,150);rect(g,'#c8c0a8',x-200,y-26,400,26);ln(g,LEG2,2.6,[x-120,y,x-120,y-110]);rect(g,'#2a6ac8',x-120,y-110,50,18);rect(g,'#e8d030',x-120,y-92,50,18);
 rect(g,'#f4f0e0',x-30,y-130,80,60);for(let q=0;q<6;q++)ln(g,'#8a7a6a',1,[x-24+q*13,y-124,x-18+q*13,y-76]);dot(g,'#d83a3a',x+10,y-100,3);
 sagoma(g,x+110,y-4,.5,'#4a6aa8',t,0);dot(g,'#c88a50',x+128,y-34,6);dot(g,'#c88a50',x+128,y-42,4)});
def('dqchatgpt',(g,x,y,t,a,k)=>{
 /* uno schermo con un cursore lampeggiante e righe di testo, tazza di caffè, tastiera, cuffie */
 rect(g,'#6a5a48',x-200,y-52,400,52);crt(g,x-60,y-52,2.4,t,k);rect(g,'#14142a',x-110,y-136,100,70);for(let q=0;q<4;q++)rect(g,'#6ad8a0',x-100,y-124+q*12,60+(q%3)*10,3);if(Math.floor(t*2)%2)rect(g,'#f4f4f0',x-100,y-76,6,10);
 rect(g,'#2a2a30',x+0,y-60,100,8);for(let q=0;q<10;q++)rect(g,'#4a4a52',x+4+q*9.4,y-60,8,5);rect(g,'#f4ead8',x+130,y-70,12,16);rect(g,'#5a3820',x+130,y-68,12,2);fumo(g,x+136,y-72,t,1,'rgba(240,240,240,.5)')});
def('dqcantiere',(g,x,y,t,a,k)=>{
 /* palchi in costruzione, impalcature, gru, operai al lavoro, anelli olimpici a metà, la Torre */
 for(let q=0;q<5;q++){ln(g,'#8a8a90',2,[x-190+q*40,y,x-190+q*40,y-150]);ln(g,'#8a8a90',1.4,[x-190+q*40,y-150+q*0,x-150+q*40,y])}for(let r=0;r<4;r++)rect(g,'#7a7a80',x-190,y-r*38-4,160,3);
 anelli(g,x+40,y-130,.9,k);ln(g,'#e8b020',5,[x+170,y,x+170,y-180]);ln(g,'#e8b020',3,[x+170,y-178,x+60,y-170]);
 for(let q=0;q<3;q++)uom(g,x+60+q*30,y-2,t,{s:.58,f:q%2?1:-1,tun:'#e8782a',top:'#e8782a',bot:'#e8782a',cap:'#f4f4f0'})});
def('dqolimpiadi',(g,x,y,t,a,k)=>{
 /* una barca lungo la Senna con le delegazioni, ponti illuminati, pioggia, pubblico con ombrelli, un tripudio di colori */
 pan(g,x,y-4,400,230,'#5a6070','#aab0bc',()=>{rect(g,'#c8b898',x-200,y-40,400,40);acqua(g,x-200,y-34,400,30,t,'#5a8aa0','#3a6a80');
  for(let q=0;q<4;q++){const bx=x-180+q*90+Math.sin(t*.7+q)*4;barcaV(g,bx,y-30,t+q,.7,'#f4f0e8');for(let w=0;w<3;w++)dot(g,['#e8c030','#c8402a','#2a6ac8'][w],bx+w*10-8,y-60,3)}
  for(let q=0;q<12;q++){const ux=x-190+q*33;dot(g,['#c8402a','#2a6ac8','#e8c030'][q%3],ux,y-52,10);ln(g,'#2a2a30',1,[ux,y-42,ux,y-52])}pioggia(g,x-200,y-230,400,230,t,.5)})});
def('dqriapertura',(g,x,y,t,a,k)=>{
 /* Notre-Dame restaurata: facciata chiara e pulita, guglia nuova, folla, ghirlanda di luci */
 rect(g,'#e4d8bc',x-70,y-190,36,182);rect(g,'#e4d8bc',x+34,y-190,36,182);rect(g,'#e4d8bc',x-34,y-130,68,122);dot(g,'#c8b890',x,y-96,12);for(let q=0;q<4;q++){rect(g,'#e4d8bc',x-70+q*10,y-198,6,8);rect(g,'#e4d8bc',x+34+q*10,y-198,6,8)}ar(g,'#6a5a48',x-8,y-8,16,40);poly(g,'#d8c8a0',[[x-6,y-130],[x,y-210],[x+6,y-130]]);
 ppl(g,x-190,y-2,t,5,24,['#3a6ab8','#c8402a','#2a8a4a'],{s:.52});ppl(g,x+100,y-2,t,5,24,['#e0a030','#8a3aa8','#2a8a4a'],{s:.52});for(let q=0;q<14;q++){dot(g,'#ffe8a0',x-180+q*28,y-6-Math.abs(Math.sin(q))*6,2.2)}});
def('dqroma2025',(g,x,y,t,a,k)=>{
 /* San Pietro in festa: pellegrini, bandiere di molti paesi, Porta Santa del Giubileo 2025 con i fiori */
 colonne(g,x-200,y-8,15,28,100,tn('#e4dcc8'));rect(g,'#c8c0a8',x-200,y-8,400,8);ar(g,'#ffe0a0',x-20,y,40,90);glow(g,x,y-50,80,'255,215,140',.5);
 for(let q=0;q<5;q++)bandiera(g,x-180+q*70,y,110,t+q,28,0,['#c8402a','#2a6ac8','#2a8a4a','#e8c030','#f4f0e8'][q]);ppl(g,x+60,y-2,t,5,28,['#3a6ab8','#c8402a','#2a8a4a'],{cap:['#3a9a4a'],bp:['#8a3a2a','#2a4a6a']})});
def('dqcolazioneP',(g,x,y,t,a,k)=>{
 /* tavolino di bistrot con croissant, caffè, baguette, giornale; sedie di vimini; una piccola Torre sullo sfondo */
 tav(g,x,y,110,'#2a2a30');rect(g,'#f4ead8',x-30,y-52,14,12);rect(g,'#5a3820',x-30,y-50,14,2);el(g,'#d89a40',x+10,y-48,24,9);el(g,'#e8b050',x+10,y-51,18,5);poly(g,'#e8d8b0',[[x+44,y-44],[x+86,y-48],[x+86,y-44],[x+44,y-40]]);
 for(const s of[-1,1]){ln(g,'#5a4a3a',2.4,[x+s*80,y,x+s*80,y-36]);rect(g,'#7a5a3a',x+s*80-10,y-40,20,5)}
 ln(g,'#7a7a82',2,[x+150,y,x+130,y-110,x+150,y-130]);ln(g,'#7a7a82',2,[x+170,y,x+190,y-110,x+170,y-130])});

/* ================= ZONA 8 · Cortina: la fiamma sulle Dolomiti ================= */
def('dqcortina',(g,x,y,t,a,k)=>{
 /* chalet in legno con fiori alle finestre, neve, abeti, una slitta, lampioncini; le Tofane sullo sfondo */
 poly(g,'#7a5a38',[[x-200,y],[x-200,y-70],[x-120,y-110],[x-40,y-70],[x-40,y]]);rect(g,'#f4f4f8',x-206,y-76,170,10);for(let q=0;q<3;q++){rect(g,'#ffd890',x-180+q*40,y-50,18,22);glow(g,x-171+q*40,y-39,20,'255,210,140',.5)}
 abete(g,x+40,y,1.1,t);abete(g,x+110,y,.9,t);abete(g,x+180,y,1.2,t);rect(g,'#8a4a2a',x+70,y-12,50,6);ln(g,'#4a4a52',2,[x+70,y-4,x+118,y-4])});
def('dq1956',(g,x,y,t,a,k)=>{
 /* un vecchio fotogramma in bianco e nero con sciatori e il trampolino, bordo seppia */
 pan(g,x,y-4,400,230,'#8a8478','#c8c0ac',()=>{poly(g,'#e8e4d8',[[x-200,y-20],[x-100,y-140],[x,y-60],[x+120,y-150],[x+200,y-20]]);ln(g,'#4a4a48',3,[x+120,y-150,x+150,y-60]);for(let q=0;q<6;q++)sagoma(g,x-150+q*44,y-20,.4,'#3a3a38',t,0);rect(g,'#6a6458',x-200,y-26,400,6)})});
def('dqfiamma',(g,x,y,t,a,k)=>{
 /* il calderone dei Giochi con la fiamma, scalini, tedofori, bandiere dei cinque continenti */
 rect(g,'#9a9aa0',x-60,y-70,120,70);for(let q=0;q<5;q++)rect(g,'rgba(0,0,0,.1)',x-60,y-70+q*14,120,2);rect(g,'#6a6a72',x-20,y-110,40,40);poly(g,'#4a4a52',[[x-36,y-120],[x+36,y-120],[x+22,y-100],[x-22,y-100]]);fuoco(g,x,y-120,t,2.6,k);glow(g,x,y-150,140,'255,170,70',.5);
 for(const s of[-1,1])bandiera(g,x+s*130,y,120,t,30,0,s<0?'#2a6ac8':'#c8402a')});
def('dqpista',(g,x,y,t,a,k)=>{
 /* pista di sci con le porte, neve, uno sciatore, abeti innevati */
 poly(g,'#f4f6fa',[[x-200,y-150],[x+200,y-20],[x+200,y],[x-200,y]]);for(let q=0;q<4;q++){const gx=x-150+q*90,gy=y-120+q*26;ln(g,'#c8222a',2,[gx,gy,gx,gy-24]);rect(g,'#c8222a',gx,gy-24,10,6)}
 abete(g,x-190,y,1,t);abete(g,x+170,y,1.1,t);sagoma(g,x+20,y-60,.42,'#2a4aa0',t,0)});
def('dqmedaglie',(g,x,y,t,a,k)=>{
 /* un podio con tre medaglie, bandiere, una cerimonia con tedofori, coriandoli */
 rect(g,'#c8c8d0',x-70,y-40,50,40);rect(g,'#e8c030',x-20,y-60,50,60);rect(g,'#c8803a',x+30,y-30,50,30);txt(g,'2',x-45,y-14,16,'#2a2a30','900');txt(g,'1',x+5,y-24,18,'#2a2a30','900');txt(g,'3',x+55,y-8,14,'#2a2a30','900');
 for(const [px,py,c] of[[x-45,y-40,'#c8c8d0'],[x+5,y-60,'#e8c030'],[x+55,y-30,'#c8803a']]){sagoma(g,px,py,.5,'#2a4aa0',t,0);dot(g,c,px,py-34,3.4)}
 ppl(g,x-190,y-2,t,3,26,['#3a6ab8','#c8402a'],{s:.52});ppl(g,x+110,y-2,t,3,26,['#e8c030','#2a8a4a'],{s:.52})});
def('dqtinamilo',(g,x,y,t,a,k)=>{
 /* la mascotte: due simpatici animali (ermellini) di pelo bianco, sciarpe, cartello 'TINA E MILO' */
 for(let q=0;q<2;q++){const bx=x-50+q*100;el(g,'#f4f0e8',bx,y-36,30,20);dot(g,'#f4f0e8',bx,y-66,16);dot(g,'#2a2a30',bx-6,y-68,2);dot(g,'#2a2a30',bx+6,y-68,2);dot(g,'#2a2a30',bx,y-62,2);rect(g,q?'#2a6ac8':'#c8402a',bx-14,y-56,28,6)}
 rect(g,'#f4f0e4',x-70,y-130,140,28);txt(g,'TINA E MILO',x,y-110,14,'#2a6ac8','900')});
def('dqmondiale',(g,x,y,t,a,k)=>{
 /* tribuna di una pista da curling o da hockey, tifosi, una bandiera tricolore */
 rect(g,'#e8f0f8',x-200,y-40,400,40);rect(g,'#d8e0e8',x-200,y-38,400,2);rect(g,'#6a6a78',x-200,y-130,400,90);for(let q=0;q<40;q++)dot(g,['#3a6ad8','#c8402a','#f4f0e8','#2a8a4a'][q%4],x-196+q*10,y-120+(q%5)*14,2.2);
 bandiera(g,x-130,y,110,t,34,1,'#2a8a4a');el(g,'#4a4a52',x+60,y-20,28,8)});
def('dqcena',(g,x,y,t,a,k)=>{
 /* una malga: tavolo con tovaglia, canederli in brodo, strudel, vin brulè, caminetto, panchine */
 poly(g,'#7a5a38',[[x-200,y],[x-200,y-100],[x-130,y-140],[x-60,y-100],[x-60,y]]);ar(g,'#2a1a14',x-150,y,60,60);fuoco(g,x-130,y-8,t,1,k);glow(g,x-130,y-30,90,'255,150,60',.35);
 tav(g,x+50,y,220,'#8a6a42','#f4f0e8');piatto(g,x+10,y-40,24,'#e8d8b0');for(let q=0;q<3;q++)dot(g,'#d8b878',x+4+q*8,y-44,4);rect(g,'#d8a050',x+60,y-48,30,8);rect(g,'#f0e4c8',x+60,y-52,30,4);rect(g,'#c8402a',x+110,y-54,10,16);fumo(g,x+115,y-56,t,1,'rgba(240,240,240,.5)')});
def('dqvarco',(g,x,y,t,a,k)=>{
 /* il varco finale: un arco luminoso con la fiamma olimpica, luce dorata */
 glow(g,x,y-100,160,'255,220,150',.5);ar(g,'#ffe8b0',x-34,y,68,160);rect(g,'#c8c0a8',x-42,y-166,8,166);rect(g,'#c8c0a8',x+34,y-166,8,166);rect(g,'#c8c0a8',x-42,y-172,84,8);
 fuoco(g,x,y-14,t,1.6,k);for(let q=0;q<5;q++)dot(g,'#f4f0e8',x-30+q*15,y-182,1.6)});

/* ---- oggetti lungo il percorso: [nome in PR, posizione nel mondo, parametro] ---- */
const TAPPE=['dqtorino','dqgiubileo','dq11sett','dqrete','dqeuro','dqconclave','dqtorino06','dqberlino','dqbicerin','dqaquila','dq6apr','dqg8','dqricostruzione','dqcrisi','dqconcordia','dqarrosticini','dqlampedusa','dqpescatori','dqcaretta','dqdammuso','dq2011','dqfrancesco','dq3ottobre','dqporta','dqfuocoammare','dqcenapesce','dqroma','dqrinuncia','dqbellezza','dqexpo','dqmisericordia','dqoscar','dqamatrice','dqpranzo','dqgenova','dqbrexit','dqnotredame','dq14agosto','dqpontenuovo','dqpontesg','dqmugugno','dqfocaccia','dqbergamo','dqlockdown','dq18marzo','dqpapa','dqmedici','dqvday','dqmaneskin','dqwembley','dqtokyo','dqatalanta','dqpolenta','dqparigi','dqucraina','dqchatgpt','dqcantiere','dqolimpiadi','dqriapertura','dqroma2025','dqcolazioneP','dqcortina','dq1956','dqfiamma','dqpista','dqmedaglie','dqtinamilo','dqmondiale','dqcena','dqvarco'];

const props=TAPPE.map((n,i)=>[n,n=='dqvarco'?W1-130:LX[i]]);
['TORINO','L’AQUILA','LAMPEDUSA','ROMA','GENOVA','BERGAMO','PARIGI','CORTINA D’AMPEZZO'].forEach((n,z)=>props.push(['dqtarga',Z[z]+90,n]));
/* riempitivi tra una tappa e l'altra */
const FILL=[['dqlamp'],['dqtransenna'],['dqfico'],['dqpino',.9],['dqlamp'],['dqlamp'],['dqlampG'],['dqabete',110]];
for(let i=0;i<LX.length-1;i++){const z=zn(LX[i]),z2=zn(LX[i+1]);if(z!=z2)continue;const f=FILL[z-1],mx=Math.round((LX[i]+LX[i+1])/2);if(i%2==0)props.push([f[0],mx-70,f[1]]);}
props.sort((a,b)=>a[1]-b[1]);

const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'duemila',name:'Duemila · Dal Giubileo alla fiamma',width:W1,sky:['#9a94b8','#d6c2d6','#f4dad4'],gt:372,gr:['#7a7a80','#4a4a52'],chord:[261.6,329.6,392,523.3],amb:'#ffe8d0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)}],
mid:[{k:1,fn:LV(layerLife)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da duemila.txt) --- */
(function(){
const TOPX_DM={
dm_rita:[
["Salve, chi è lei?", "Mi chiamo Rita Levi-Montalcini, sono nata a Torino il 22 aprile 1909. Faccio la neurobiologa: studio come crescono le cellule nervose. Dal 2001 sono anche senatrice a vita, ma in laboratorio ci vado ancora, nonostante i miei quasi novantasette anni."],
["Ha vinto il Nobel, vero?", "Sì, nel 1986, per la Medicina, insieme al collega americano Stanley Cohen. Avevamo scoperto una proteina, chiamata NGF, che aiuta le cellule nervose a crescere. La scoperta è nata negli Stati Uniti, dove sono rimasta per ventisei anni a lavorare."],
["Cos’è un fattore di crescita?", "È come un messaggero: una molecola che dice a certe cellule di crescere e di restare vive. Capire come funziona aiuta a capire il cervello e anche certe malattie. La ricerca continua ancora oggi, e continuerà molto dopo di noi."],
["Com’era la Torino della sua giovinezza?", "Una città severa e ordinata, con i portici, i palazzi sabaudi e tanta voglia di studiare. Ero una ragazza in una famiglia ebrea, con una sorella gemella, Paola, che dipingeva. Per fare la scienziata ho dovuto convincere mio padre, ma ci sono riuscita!"],
["Cosa pensa delle Olimpiadi?", "Mi piace vedere la città piena di bandiere, di ragazzi, di lingue diverse. Dicono che alla cerimonia di apertura abbia cantato Pavarotti: la musica unisce, e anche lo sport, quando è fatto bene. Io, a dire la verità, preferisco il bicerin allo sci!"],
["E l’euro?", "Da quattro anni paghiamo con monete e banconote nuove: un euro vale 1936 lire e qualcosa. All’inizio facevamo i conti a mente in due monete, ma ormai ci siamo abituati. Un tempo i soldi avevano pochi zeri in più, ora ne hanno tanti in meno."],
["Come sono cambiati i ragazzi con i telefonini?", "Hanno il mondo nelle tasche: si scrivono, si fotografano, cercano tutto in rete. A me piace che sappiano tante cose, ma consiglio sempre di non fidarsi di tutto quello che si trova: bisogna controllare, come in laboratorio."],
["Cosa si mangia a Torino?", "Il bicerin, come questo: caffè, cioccolato e crema di latte. Poi gli agnolotti, il vitello tonnato, la bagna cauda, il gianduiotto. Secondo la tradizione, i grissini sono nati proprio qui. Una tavola piemontese è sempre generosa."],
["Cosa devo vedere a Torino?", "La Mole Antonelliana: dentro c’è il Museo del Cinema e un ascensore di vetro che sale fino in cima. Poi il Museo Egizio, uno dei più grandi del mondo, e i portici fino al Po. E se hai tempo, un aperitivo con la vista sulle Alpi."],
["Cosa consiglia ai giovani?", "Di studiare, di essere curiosi e di non scoraggiarsi se qualcuno dice che una cosa è impossibile. E alle ragazze dico: ogni ragazza che studia è una vittoria per tutti. Per questo ho creato una fondazione che aiuta le giovani africane a frequentare la scuola."],
["Dove vado dopo?", "Scendi verso il Centro Italia: in Abruzzo, all’Aquila, una città antica con novantanove cannelle d’acqua. Là cerca Nicola, un muratore. Dicono che nel 2009, per il mio centesimo compleanno, ci saranno molti auguri... ma io lavoro e cammino, quindi vai tranquillo!"],
["Posso salutarla e proseguire la mia passeggiata?", "Certo, Pierpaolo! Salutami le montagne e ricordati: la curiosità è il miglior mestiere. State bene, tutti!"]
],
dm_nicola:[
["Chi sei?", "Nicola, faccio il muratore e il restauratore. Sono nato qui, all’Aquila, e qui lavoro. Pietra su pietra, come si è sempre fatto. Il mio mestiere adesso è tenere in piedi i palazzi che ci hanno lasciato."],
["Cos’è questa fontana?", "Sono le 99 Cannelle: novantanove mascheroni di pietra, ognuno diverso dall’altro, da cui esce acqua. Secondo la leggenda la città nacque nel Duecento dall’unione di novantanove castelli. Per questo il numero novantanove, all’Aquila, è un po’ sacro."],
["Cos’è successo nel 2009?", "La notte del 6 aprile, alle 3.32, c’è stato il terremoto: circa magnitudo 6,3. Hanno perso la vita 309 persone. Io non racconto i dettagli, dico solo che L’Aquila si è rotta e che ci vorrà tanto tempo per aggiustarla."],
["Come si ricostruisce un centro storico?", "Piano piano. Prima si puntellano i muri con travi di ferro e di legno, poi si mettono i ponteggi, poi si lavora con pietra e calce, come una volta. Ogni palazzo è diverso, e ogni muro ha la sua storia. Serve pazienza: dicono che nel 2026 L’Aquila sarà Capitale italiana della cultura, e io spero di vederlo!"],
["Cos’è la Perdonanza?", "La festa più bella: il 28 e 29 agosto si apre la Porta Santa della Basilica di Collemaggio, per ricordare il perdono di Celestino V, nel 1294. C’è il corteo con i costumi, i tamburi e i mantelli rossi. Anche in questi anni difficili non l’abbiamo mai saltata."],
["Cos’è lo zafferano di Navelli?", "L’oro rosso dell’Abruzzo. È il fiore viola del Crocus: si raccoglie a mano all’alba, a ottobre, e dentro ci sono tre filamenti rossi. Ci vogliono centinaia di fiori per una piccola quantità. Con un pizzico si fa un risotto da re."],
["Cosa sono gli arrosticini?", "Spiedini di carne di pecora tagliata a cubetti, cotti su una lunga brace stretta, la fornacella. Si mangiano con le mani, con il pane e un po’ d’olio. Secondo la tradizione li facevano i pastori. Se vieni a trovarci, ne devi mangiare una dozzina!"],
["Cos’è stato il G8?", "Nel luglio 2009, tre mesi dopo il terremoto, i capi dei grandi Paesi del mondo si sono riuniti a Coppito, qui vicino. Sono arrivati giornalisti da ovunque. Speravamo che l’attenzione del mondo non se ne andasse con loro, e che L’Aquila non fosse dimenticata."],
["Com’è la vita di tutti i giorni all’Aquila?", "Si va al bar a prendere il caffè, si cammina sul Corso, si saluta la gente per nome. L’Aquila è una città universitaria, quindi c’è sempre qualche studente in giro. Si sta fra le montagne e si vive con le stagioni: la neve d’inverno, i prati d’estate."],
["Cosa c’è sotto il Gran Sasso?", "Un laboratorio di fisica scavato nella montagna: scienziati di tutto il mondo vengono a studiare le particelle, perché sotto la roccia c’è più silenzio. Io non ci capisco molto, ma mi piace pensare che sotto i nostri monti si faccia scienza di prima qualità."],
["Dove vado dopo?", "Vai al Sud, fino a Lampedusa, un’isola in mezzo al mare più a sud d’Italia. Cerca Salvatore, un pescatore: è uno che sa tante storie. Portati un cappello, che là il sole non perdona."],
["Posso salutarti e proseguire la mia passeggiata?", "Certo, bello. Torna a trovarci quando i ponteggi saranno spariti. Stai bene, e porta rispetto alla pietra."]
],
dm_salvatore:[
["Chi sei?", "Salvatore, pescatore. Ho cinquantadue anni e sono nato qui, a Lampedusa. La barca era di mio padre, e anche i suoi nodi nelle reti sono ancora lì. Talìa, guarda che mare: questa è la mia casa."],
["Com’è Lampedusa?", "Un’isola bassa e chiara, lunga più o meno undici chilometri e larga tre. Siamo più vicini alla Tunisia che alla Sicilia: dall’altra parte c’è l’Africa. Siamo circa seimila persone, e d’inverno ci conosciamo tutti."],
["Cosa pescate?", "Soprattutto pesce azzurro, poi ricciole, calamari, a volte tonni piccoli. Usciamo prima dell’alba e torniamo a metà mattina. Di notte, qualche volta, andiamo con le lampare: sembra di pescare con le stelle."],
["Che cosa sono le Caretta caretta?", "Tartarughe marine, grandi come un tavolo. Da giugno a settembre vengono a fare il nido sulla spiaggia, all’Isola dei Conigli: i volontari controllano e proteggono le uova. Se una tartaruga si impiglia in un amo, noi la portiamo al centro di recupero."],
["Come sono le case di Lampedusa?", "I dammusi: case basse di pietra, bianche di calce, con i muri spessi e il tetto a cupola. Dentro si sta freschi anche quando fuori brucia. Le finestre sono piccole, e c’è sempre una cisterna per la pioggia."],
["Cos’è successo il 3 ottobre 2013?", "Davanti all’isola è affondato un barcone con tante persone, partito dalla Libia: le vittime sono state 368, i salvati 155. Noi pescatori siamo usciti con le barche, e ancora oggi, quando guardo il mare, ci penso. Non c’è molto da dire: si ricorda e si rispetta."],
["E il Papa?", "Nel luglio 2013 Papa Francesco è venuto qui, per il suo primo viaggio fuori Roma. Ha buttato una corona di fiori in mare, in ricordo di chi non ce l’ha fatta, e ha celebrato la Messa su un altare fatto con il legno di una barca. Dicono che un giorno verrà un altro Papa, ma questo si vedrà."],
["Com’è la giornata di un pescatore?", "Sveglia alle tre, caffè forte, poi si va in barca. Al ritorno si scarica il pesce, si ripara la rete, si pulisce il motore. Il pomeriggio si dorme un po’, poi la sera si cena e si guarda il mare. Una vita semplice, ma è la mia."],
["Com’è l’isola d’estate e d’inverno?", "D’estate è piena di turisti, di bagnanti e di barche; d’inverno resta il vento, e quasi solo noi. Il traghetto parte da Porto Empedocle, in Sicilia, e c’è anche l’aereo. Meglio sempre avere pazienza: qui se il mare è cattivo, non si parte e basta."],
["Cosa si mangia qui?", "Pesce, naturalmente: alla griglia, in zuppa, o con la pasta, con pomodorini e capperi, e un filo d’olio. E pane caldo, tanto. A pranzo si mangia presto, a cena tardi, perché con il caldo si aspetta la sera."],
["Dove vado dopo?", "Vai a Roma, in continente. Cerca il maestro Ennio Morricone, uno che fa musica per il cinema: dicono che nel 2016 prenderà un Oscar... e che nello stesso anno un film girato qui a Lampedusa vincerà a Berlino. Il tempo corre, talìa!"],
["Posso salutarti e proseguire la mia passeggiata?", "Certo, picciotto. Buon viaggio, e che il mare ti sia leggero. State bene!"]
],
dm_morricone:[
["Buongiorno, chi è lei?", "Mi chiamo Ennio Morricone, sono nato a Roma, a Trastevere, il 10 novembre 1928. Scrivo musica: per il cinema, per l’orchestra, per il teatro. Ne ho scritta tanta, centinaia di colonne sonore, e ogni mattina continuo a lavorare."],
["Come ha cominciato?", "Mio padre era trombettista, così a sei anni ho cominciato con la tromba. Mi sono diplomato in tromba al Conservatorio di Santa Cecilia nel 1946 e poi ho studiato composizione. Sognavo di fare il medico, ma la musica ha vinto."],
["Quali film ha musicato?", "Tanti: i western di Sergio Leone, come \"Per un pugno di dollari\", \"Il buono, il brutto, il cattivo\" e \"C’era una volta il West\", poi \"Nuovo Cinema Paradiso\" e molti altri. La musica, nel film, deve servire alla storia, non fare spettacolo da sola."],
["Ha vinto l’Oscar, vero?", "Due volte, in un certo senso. Nel 2007 mi hanno dato l’Oscar alla carriera, consegnato da Clint Eastwood. E il 28 febbraio 2016, a Los Angeles, la notte del 29 in Italia, ho vinto quello vero, per le musiche di \"The Hateful Eight\", di Quentin Tarantino. Avevo ottantasette anni: mi hanno detto che nessuno così anziano lo aveva mai vinto."],
["Com’è la sua giornata?", "Mi alzo molto presto, prima dell’alba. Scrivo a mano, a matita, su carta da musica, senza fretta. Poi, a metà mattina, un po’ di ginnastica, qualche mossa agli scacchi e il pranzo con mia moglie."],
["Gli scacchi?", "Una grande passione. Dicono che comporre e giocare a scacchi siano simili: tutto è struttura, ogni mossa conta, e ogni nota, come ogni pezzo, ha il suo posto. Non sono un campione, ma mi diverto."],
["Com’è Roma, oggi?", "Bella e caotica. Il Tevere con i platani, il Colosseo, i motorini che ti sorpassano da tutte le parti. È la mia città, non l’ho mai lasciata. C’è un Papa nuovo da tre anni e un Giubileo straordinario in corso, quindi vedrai tanti pellegrini con lo zaino."],
["Cosa si mangia a Roma?", "Carbonara, cacio e pepe, amatriciana, carciofi alla romana. I supplì, per i più coraggiosi. Si finisce con un caffè al bancone. Io, a pranzo, resto sul semplice: un piatto di pasta e una passeggiata."],
["E \"La grande bellezza\"?", "Un film di Paolo Sorrentino, girato in giro per Roma, che nel 2014 ha vinto l’Oscar per il miglior film straniero. Mi è piaciuto: mostra Roma con la sua malinconia e le sue feste. Il cinema italiano ha bisogno di essere ricordato così."],
["Cosa ama di più della sua città?", "Il rumore delle campane a mezzogiorno, le fontanelle con l’acqua fresca, i nasoni, e i vicoli dove, girando un angolo, trovi un pezzo di duemila anni fa. A Roma tutto sembra eterno, anche se un po’ scrostato."],
["Dove vado dopo?", "Vai a nord, a Genova, sul mare. Là a un certo punto c’è un ponte nuovo, disegnato da un architetto genovese. Cerca Piero, un carpentiere che ci lavora: vedrai che ti racconta con orgoglio."],
["Posso salutarla e proseguire la mia passeggiata?", "Con piacere, giovanotto. Buon viaggio e ascolta la musica, anche quando non la senti. State bene!"]
],
dm_piero:[
["Chi sei?", "Piero, carpentiere. Ho quarantaquattro anni e sono nato a Sampierdarena, qui vicino. Da due anni lavoro a questo ponte: saldo, controllo, monto. Ormai conosco ogni trave come un fratello."],
["Com’è fatto questo ponte?", "Si chiama \"Genova San Giorgio\": lo ha disegnato Renzo Piano, un genovese. È lungo 1067 metri, ha 19 campate sostenute da 18 pile, e l’impalcato bianco di acciaio ha la forma di una chiglia di nave. Sembra un veliero sopra la valle."],
["Cos’è successo qui nel 2018?", "Il 14 agosto 2018, alle 11.36, con un temporale fortissimo, è crollato il ponte Morandi: sono morte 43 persone. Genova si è fermata. Io, quel giorno, me lo ricordo ancora: per questo lavorare qui è un modo di rispondere."],
["Come avete costruito il ponte?", "A turni, giorno e notte, anche quando c’è stato il coronavirus: il cantiere non si è mai fermato del tutto. L’ultima campata l’abbiamo posata il 28 aprile, con le sirene del cantiere e delle navi nel porto che suonavano. Il 3 agosto sarà l’inaugurazione: ci stiamo preparando."],
["Cos’è il mugugno?", "È il nostro diritto di lamentarci. Secondo la tradizione, i marinai genovesi potevano mugugnare senza essere puniti. Noi genovesi brontoliamo, ma poi facciamo le cose: belìn, magari non diciamo grazie, ma lavoriamo meglio di tutti."],
["Com’è il porto oggi?", "Un posto enorme, pieno di gru, di navi e di container colorati: è uno dei porti più importanti d’Italia. Da qui partono e arrivano merci da tutto il mondo. I camalli di una volta oggi lavorano con le gru e con i computer, ma il porto è sempre il cuore di Genova."],
["Cosa si mangia a Genova?", "La focaccia calda con l’olio, la farinata, il pesto con il mortaio, le trofie, il pandolce a Natale. A Recco fanno anche la focaccia col formaggio, sottilissima: secondo la tradizione nasce nei tempi di assedio, quando in casa c’era solo il formaggio."],
["Come sono i caruggi?", "Strettissimi, tanto che quando un vicino stende i panni quasi tocca la tua finestra. Ci sono botteghe antiche, chiesette nascoste e la luce che arriva solo a mezzogiorno. Per girarli bene devi avere buone gambe e buona memoria."],
["Cosa fai nel tempo libero?", "Vado a vedere il Genoa o la Sampdoria: qui il tifo è diviso, e il derby della Lanterna è una festa. D’estate faccio il bagno, quando riesco; d’inverno porto i miei figli sulle funicolari e sugli ascensori, che a Genova ci sono ovunque."],
["Cristoforo Colombo era genovese?", "Secondo la tradizione, sì: è nato qui. Dicono anche che ci sia una casa in cui sarebbe cresciuto, ma questo non lo so con certezza. Quello che so è che da qui sono partiti tanti marinai, e che il mare ci ha sempre dato da vivere."],
["Dove vado dopo?", "Vai verso nord-est, in Lombardia, a Bergamo, in una città di pietra e di mura. Cerca Chiara, un’infermiera, nella Città Alta: ti racconta come si fa a non mollare, e fa bene al cuore."],
["Posso salutarti e proseguire la mia passeggiata?", "Certo, ragazzo. Fai buon viaggio e, quando torni, guarda il ponte di sera, con i lampioni accesi. State bene."]
],
dm_chiara:[
["Chi sei?", "Chiara, infermiera. Ho trentatré anni, sono nata a Bergamo, in Città Bassa, e adesso lavoro in ospedale. Sono una di quelle che dicono: \"Mola mia\", cioè \"non mollare\" in bergamasco."],
["Com’è la vita di un’infermiera?", "Fatta di turni, di notti, di camici e di tanto caffè. Si impara a stare accanto alle persone, a rassicurarle, a farle sorridere anche quando hanno paura. E si sta in piedi molto: le scarpe da corsa sono i nostri migliori amici."],
["Com’è stata la primavera del 2020?", "Il 9 marzo l’Italia ha chiuso tutto per fermare il virus, e Bergamo è stata fra le città più colpite. Il 18 marzo i camion dell’esercito sono usciti dalla città di sera: quel silenzio non lo dimentico. Preferisco ricordare le persone, i colleghi, i lenzuoli con scritto \"Andrà tutto bene\"."],
["Cosa avete imparato?", "Che da soli non si va da nessuna parte: ci siamo aiutati fra colleghi, fra vicini, fra sconosciuti. La sera la gente applaudiva dalle finestre, e a volte ci mettevano lettere e disegni nei sacchetti fuori dal reparto. Un biglietto ben fatto è meglio di una medaglia."],
["E i vaccini?", "Il 27 dicembre 2020 è cominciata la vaccinazione in tutta Europa, e la prima in Italia è stata un’infermiera di Roma. Io l’ho fatto qualche settimana dopo, a gennaio. Sembrava una cosa piccola, ma per noi era la speranza di tornare a una vita normale."],
["Com’è Bergamo?", "Una città con due anime: la Bèrghem de hura, quella alta, antica e cinta da mura venete dichiarate patrimonio UNESCO nel 2017, e la Bèrghem de hota, quella bassa, più moderna. In mezzo ci sono la funicolare e le scalette. È piccola ma ha un cuore enorme."],
["Cosa si mangia a Bergamo?", "Polenta con i formaggi di montagna, i casoncelli con burro e pancetta, la polenta e osei che è un dolce, e la torta Donizetti. Dicono che la stracciatella, il gelato, sia nata qui. Una trattoria bergamasca ti riempie la pancia e il cuore."],
["Chi era Donizetti?", "Un compositore d’opera, Gaetano Donizetti, nato a Bergamo nel 1797: ogni anno, alla fine di novembre, la città lo ricorda con un festival. Le sue musiche si sentono nei teatri di tutto il mondo. Anche noi, al pomeriggio, canticchiamo qualcosa."],
["E l’Atalanta?", "La nostra squadra, la Dea. Dicono che il 22 maggio 2024, a Dublino, vincerà l’Europa League battendo il Bayer Leverkusen 3-0, il primo trofeo europeo della sua storia: se succede, la città impazzisce! Qui il nerazzurro è una religione."],
["Dove ci si diverte a Bergamo?", "Sul Sentierone, il grande viale in Città Bassa, per la passeggiata e il gelato; in Città Alta per un aperitivo con vista; all’Accademia Carrara per i quadri. Chi ha più tempo sale sulle mura, che sono lunghe circa sei chilometri."],
["Dove vado dopo?", "Ti consiglio Parigi, in Francia. Là c’è una cattedrale che è stata quasi distrutta da un incendio e poi riaperta. Cerca Hugo, un carpentiere: parla anche italiano, la nonna era piemontese."],
["Posso salutarti e proseguire la mia passeggiata?", "Certo! Torna quando vuoi. Mola mia, Pierpaolo, e stai bene."]
],
dm_hugo:[
["Chi sei?", "Hugo, carpentiere. Ho quarantun anni e vivo a Parigi, però mia nonna era di Cuneo, per questo parlo un po’ di italiano. Lavoro alla cattedrale e faccio parte di una comunità di mestiere, i compagnons."],
["Cos’è successo nel 2019?", "Il 15 aprile, nel tardo pomeriggio, a Notre-Dame è scoppiato un incendio, all’inizio della Settimana Santa. La guglia è caduta e il tetto di legno è bruciato. I pompieri hanno lavorato tutta la notte per salvare le torri, e il mondo guardava, senza parole. Non lo dimenticherò mai."],
["Cosa avete rifatto?", "La guglia, disegnata da Viollet-le-Duc nel 1859, e il tetto di legno, chiamato \"la forêt\", la foresta, perché erano servite più di milleduecento querce. Abbiamo usato querce francesi e, per molte travi, l’ascia a mano, come nel Medioevo. Ogni trave ha la sua personalità."],
["Quanta gente ha lavorato?", "Centinaia di persone ogni giorno: carpentieri, scalpellini, vetrai, scultori, organisti, restauratori, vigili del fuoco di guardia. Tutti insieme, ognuno con il suo mestiere. Il presidente aveva promesso cinque anni e abbiamo fatto di tutto per rispettare la promessa."],
["Cos’è successo oggi?", "Oggi, 7 dicembre 2024, la cattedrale riapre con una grande cerimonia e tanti capi di Stato. Domani, l’8 dicembre, ci sarà la prima Messa. Le campane suonano, la facciata è pulita, la guglia dorata brilla: io sono qui da stamattina e ho ancora la pelle d’oca."],
["E le Olimpiadi?", "Quest’estate Parigi ha ospitato i Giochi: la cerimonia di apertura si è fatta sulla Senna, con gli atleti sui battelli, sotto la pioggia. Le campane di Notre-Dame hanno suonato per la prima volta dopo l’incendio. L’Italia ha vinto quaranta medaglie, voilà!"],
["Com’è Parigi di tutti i giorni?", "Si prende la metropolitana, si va in bicicletta, si cammina molto. Si dice \"bonjour\" appena si entra in un negozio, anche solo per guardare. I parigini sembrano seri, ma se sorridi per primo ti rispondono con gentilezza."],
["Cosa si mangia a Parigi?", "Al mattino, un croissant al burro e un caffè con il latte. A pranzo un croque-monsieur o un piatto del giorno, a cena una bistecca con le patatine fritte, i formaggi e un bicchiere di vino. E la baguette, naturalmente, calda, sotto il braccio."],
["Cosa sono i bouquinistes?", "Le bancarelle verdi lungo la Senna, dove si vendono libri vecchi, stampe e cartoline. Ci sono da secoli. Passeggiare lì, la sera, con una baguette in mano, per me è la felicità."],
["E gli scioperi?", "A volte i parigini scioperano: un po’ per protesta, un po’ per tradizione. Allora i mezzi non funzionano e si cammina di più. Non è un dramma: c’è chi si lamenta, ma poi si va a bere un caffè e si discute."],
["Dove vado dopo?", "Vai verso le Alpi italiane, a Cortina d’Ampezzo, nelle Dolomiti: là, nel 2026, ci sono le Olimpiadi invernali, con due bracieri. Cerca Ines, una maestra di sci: ti racconterà una notte che non si dimentica."],
["Posso salutarti e proseguire la mia passeggiata?", "Certo, mon ami! Che il tuo viaggio sia leggero. À bientôt, e salutami le montagne!"]
],
dm_ines:[
["Chi sei?", "Ines, ho trentasei anni e sono maestra di sci. D’inverno insegno sulle piste, d’estate faccio la guida in montagna. Sono ampezzana, e la mia famiglia fa parte delle Regole, le comunità antiche della nostra valle."],
["Com’è Cortina?", "Siamo a 1224 metri, in una conca circondata da montagne: le Tofane, il Pomagagnon, il Cristallo, il Sorapiss e le Cinque Torri. Per questo ci chiamano la \"Regina delle Dolomiti\". Nei giorni sereni, al tramonto, la roccia diventa rosa: si chiama enrosadira."],
["Cosa sono le Regole?", "Comunità che da secoli gestiscono insieme boschi, pascoli e il Parco naturale delle Dolomiti d’Ampezzo: sono undici, due alte e nove basse. Chi ne fa parte si chiama regoliere. La sede è la \"Ciasa de ra Regoles\". Un pezzo del nostro territorio è di tutti, e si protegge insieme."],
["Cos’è \"ciasa\"?", "Casa, in ampezzano, la nostra lingua ladina. Parliamo italiano a scuola e al lavoro, ma in famiglia e fra amici capita ancora di usare il ladino: è un tesoro, e non lo vogliamo perdere. I bambini lo imparano anche dalle canzoni."],
["Cosa succede stasera?", "Stasera si aprono i Giochi olimpici invernali. La cerimonia è a Milano, a San Siro, e qui, in Piazza Dibona, si accende uno dei due bracieri: per la prima volta nella storia ce ne sono due, insieme, uno a Milano e uno a Cortina. Qui l’ha acceso una grande campionessa e un campione di tanti anni fa."],
["Cortina ha già avuto le Olimpiadi?", "Nel 1956! Mio nonno se lo ricorda: furono i primi Giochi invernali trasmessi in diretta televisiva in più Paesi europei. Il campione ampezzano Eugenio Monti, il \"Rosso Volante\", correva sul bob. Quel giorno Cortina divenne famosa in tutto il mondo."],
["Cosa sono le Dolomiti UNESCO?", "Il 26 giugno 2009 l’UNESCO ha riconosciuto le Dolomiti Patrimonio naturale dell’Umanità, per la bellezza delle loro cime e per la loro storia geologica. Noi che ci viviamo non lo avevamo dimenticato, ma sentirselo dire da tutto il mondo è stato bello."],
["Cosa si mangia a Cortina?", "I casunziei, ravioli a mezzaluna con la barbabietola rossa e il burro fuso; i canederli, la zuppa d’orzo, la polenta con i funghi, lo strudel. Sono cibi di montagna: dopo una giornata sulla neve, scaldano il cuore."],
["Dove si gareggia?", "Le donne dello sci alpino corrono sulle Tofane, sull’Olimpia delle Tofane: una pista veloce e difficile. Il bob, lo slittino e lo skeleton gareggiano nel nuovo centro del ghiaccio, costruito dove c’era la vecchia pista \"Eugenio Monti\". Noi tifiamo e facciamo i volontari."],
["Chi sono Tina e Milo?", "Le mascotte: due ermellini. Tina, bianca, è per i Giochi olimpici, e Milo, nato senza una zampina, cammina aiutandosi con la coda ed è per quelli paralimpici. I loro nomi vengono da Cortina e da Milano: sono simpaticissimi, i bambini li adorano."],
["Dove vado dopo?", "Non c’è un’altra tappa, Pierpaolo. Guarda il braciere: la giornata è finita. Quando la fiamma si allarga, lasciati portare: troverai tutte le persone che hai incontrato, e poi la luce bianca."],
["Posso salutarti e proseguire la mia passeggiata?", "Certo! Torna quando vuoi, a Cortina c’è sempre una finestra aperta. Stai bene, e sempre in alto!"]
]
};

Object.assign(TOPX,TOPX_DM);
})();
