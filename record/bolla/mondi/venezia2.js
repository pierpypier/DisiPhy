/* ---------- VENEZIA 2 · Dalla Ferrovia alla Giudecca (stazione di Santa Lucia e Canal Grande, Cannaregio e Ghetto, Rialto, San Polo, Dorsoduro e Zattere, Piazza San Marco, Riva degli Schiavoni, Giudecca) ---------- */
/* Un'intera giornata da sinistra a destra: alba alla stazione di Santa Lucia, sul Ponte degli Scalzi e sul Canal Grande, mattina a Cannaregio fra il Ghetto
   e la Corte del Milion, tarda mattina a Rialto fra il ponte e il mercato del pesce, mezzogiorno a San Polo fra bàcari, Frari e San Rocco, primo pomeriggio
   a Dorsoduro (squero, Zattere e Salute), pomeriggio dorato in Piazza San Marco, tramonto sulla Riva degli Schiavoni, alla Pietà e all'Arsenale,
   notte alla Giudecca. In fondo alla riva, fra due briccole, un sentiero di luce dorata sull'acqua è il varco.
   Testi, tappe e dialoghi vengono da venezia2.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico). Gli oggetti stanno in elementi.js (nomi che iniziano per "v2").
   Il tono per i temi dolorosi (le pesti, il Ghetto, l'acqua granda, i bambini della Pietà, la prigionia di Marco Polo, la fine di Vivaldi) è sempre sobrio e rispettoso. */
(function(){
const GT=372,W1=22400;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,pa=A.pa,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln}=PR._rm;
const {lit,pers,gente}=PR._md;
const {nf,pal,gond,vap,cargo,palo,bric,gull,corm,chim,altana,fgo}=PR._v2;
const md=(i,n)=>((i%n)+n)%n;
const LIT='rgb(255,226,150)',WD='#8a6a42';
const Z=[0,2700,5400,8100,10800,13500,16200,18900,W1+400];   /* inizio di ognuna delle 8 zone */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
/* ---- cielo: alba rosa perla, mattina fresca, sole alto fra le nuvole, luce pallida, pomeriggio chiaro e freddo, luce dorata, tramonto rosso-arancio, blu cobalto, notte ---- */
const SKY=[[0,['#9aa6c8','#f2c0c4','#ffe0cc']],[1400,['#7ab0e0','#c6dcee','#f0eee0']],[2700,['#5aa0dc','#a8cce6','#e4eef2']],[5400,['#6aa6d8','#b8d4e6','#eaf0f0']],[8100,['#8ab0cc','#c8d8e0','#eef0ea']],[10800,['#7aa4c4','#b8ccd8','#e6ecec']],[13500,['#6a9ad0','#eac890','#ffdca8']],[15700,['#7a7ab8','#f0a878','#ffc080']],[16500,['#6a4a98','#e8704a','#ffa858']],[17600,['#5a3a88','#d85a52','#ff9a58']],[18600,['#2c3a80','#5a4a98','#c86a6a']],[19600,['#142a70','#24428c','#4a5aa0']],[21000,['#0a1648','#101e5a','#26306a']],[99999,['#0a1648','#101e5a','#26306a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,36*s,9*s);el(g,c,x-20*s,y+3*s,24*s,7*s);el(g,c,x+22*s,y+3*s,26*s,7*s);el(g,c,x+4*s,y-6*s,20*s,8*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Venezia, dall’alba alla notte. Parti dalla stazione, quando la nebbiolina si alza dall’acqua e i primi vaporetti sono già in viaggio, e scendi lungo il Canal Grande. Al mattino ti aspettano il Ghetto, la Corte del Milion e il mercato del pesce di Rialto; a mezzogiorno i bàcari, dove si beve un’ombra di vino in piedi, e le grandi chiese di San Polo. Nel primo pomeriggio lo squero delle gondole, le Zattere e la Salute; poi Piazza San Marco con la Basilica, il Campanile e il Palazzo Ducale. Al tramonto la Riva degli Schiavoni, la Pietà e l’Arsenale; a notte attraversi l’acqua fino alla Giudecca, dove Venezia si specchia nel bacino. Il tempo qui si piega: Marco Polo e Antonio Vivaldi ti vengono incontro, e la città è quella di oggi.";
const LKTXT=[
"La stazione di Santa Lucia: i lavori cominciarono nel 1860 e per farle posto si demolirono una chiesa e un convento dedicati a santa Lucia, da cui il nome. Il Ponte degli Scalzi è di pietra d’Istria, del 1934, e prese il posto di un ponte di ferro costruito dagli austriaci; il nome viene dalla vicina chiesa dei Carmelitani Scalzi, cioè \"senza scarpe\". È uno dei quattro ponti che attraversano il Canal Grande.",
"Il Canal Grande: lungo circa 3,8 chilometri, disegna una grande S che attraversa la città da una parte all’altra, con palazzi costruiti in molti secoli lungo le rive. Per tanto tempo il Ponte di Rialto fu l’unico modo per attraversarlo a piedi, e ancora oggi alcuni traghetti, cioè gondole che portano la gente da una riva all’altra, fanno quel lavoro. Ci passano vaporetti, taxi d’acqua, barche da carico e gondole.",
"Le briccole: gruppi di tre grossi pali di legno piantati nel fondale della laguna per segnare dove le barche possono passare senza incagliarsi. Davanti ai palazzi, invece, i pali da ormeggio dipinti a strisce colorate si chiamano pali da casada: si dice che i colori siano quelli della famiglia che abita il palazzo. Con l’acqua salata il legno si consuma, e ogni tanto va sostituito.",
"La Ca’ d’Oro: un palazzo gotico costruito nella prima metà del Quattrocento per il nobile Marino Contarini. Il nome, \"casa d’oro\", viene dalle decorazioni dorate e colorate che un tempo ricoprivano la facciata. Oggi è un museo.",
"Il Ghetto Nuovo: il 29 marzo 1516 il Senato della Repubblica decise che gli ebrei dovessero abitare in questa isoletta, dove un tempo c’erano le fonderie, \"geti\" in veneziano: si dice che da lì venga la parola \"ghetto\". Di notte i cancelli venivano chiusi. Poiché lo spazio era poco, le case crebbero in altezza, fino a sei o sette piani. Oggi il quartiere è vivo, con sinagoghe, un museo e un monumento che ricorda le persone deportate durante la guerra.",
"La Corte del Milion: si dice che qui sorgessero le case della famiglia Polo. Marco, nato nel 1254, partì da Venezia nel 1271 e tornò dopo ventiquattro anni. Il libro dei suoi viaggi si chiama \"Il Milione\", ma nessuno è sicuro del perché: forse da \"Emilione\", il soprannome di famiglia. Le case bruciarono nel Cinquecento; oggi lì vicino c’è un teatro, il Malibran.",
"Santa Maria dei Miracoli: una chiesa piccola come uno scrigno, costruita alla fine del Quattrocento e rivestita di marmi chiari e colorati. Fu fatta per custodire un’immagine della Madonna a cui si attribuivano dei miracoli. Oggi è una delle chiese preferite per i matrimoni.",
"Il Ponte di Rialto: fu costruito in pietra fra il 1588 e il 1591 dall’architetto Antonio da Ponte e ha una sola grande arcata di circa 28 metri. Prima c’erano ponti di legno, che più di una volta crollarono o presero fuoco. Fu l’unico ponte sul Canal Grande fino al 1854. Sopra ci sono due file di botteghe.",
"La Pescaria: il mercato del pesce di Rialto, che si dice sia qui da quasi mille anni. La loggia di oggi, in stile neogotico, è del 1907. Resta chiusa la domenica e il lunedì. Lungo i banchi ci sono lastre di marmo che indicano la misura minima dei pesci che si possono vendere.",
"L’Erbaria: il mercato di frutta e verdura lungo il Canal Grande, chiuso la domenica. Molti prodotti vengono dagli orti delle isole della laguna: Sant’Erasmo è chiamata l’orto di Venezia, e in primavera dà le castraure, i primi carciofini teneri.",
"San Giacomo di Rialto, detta San Giacometto: si dice che sia la chiesa più antica di Venezia, fondata nel 421. Sulla facciata c’è un grande orologio. Nel campo, il Gobbo di Rialto è una statua del Cinquecento, un uomo curvo che regge una scaletta e una colonna di granito: da lassù il banditore leggeva le leggi della Repubblica.",
"Il bàcaro: la piccola osteria veneziana dove si beve in piedi un’ombra, cioè un bicchierino di vino, con uno o due cicheti, gli stuzzichini. Si dice che l’ombra si chiami così perché un tempo i venditori di vino in Piazza San Marco spostavano il banco seguendo l’ombra del campanile. Fra i cicheti ci sono il baccalà mantecato, le sarde in saor e le polpette; a Venezia si beve anche lo spritz fatto con il Select, un aperitivo rosso nato in città nel 1920.",
"Campo San Polo: dopo Piazza San Marco è il più grande spazio aperto della città, e fu pavimentato nel 1493. Un tempo ci si facevano feste, mercati e, durante il Carnevale, le cacce al toro. Oggi ci giocano i bambini e ci si siede a chiacchierare.",
"La Basilica dei Frari: una grande chiesa francescana in stile gotico, di mattoni, con un campanile altissimo. Dentro c’è l’Assunta di Tiziano, dipinta nel 1518, sopra l’altare maggiore. Ci sono anche le tombe di Tiziano, di Antonio Canova, a forma di piramide, e del compositore Claudio Monteverdi.",
"La Scuola Grande di San Rocco: una confraternita fondata nel 1478 e dedicata a san Rocco, il santo protettore contro la peste. Dal 1564 il pittore Tintoretto la decorò con decine di grandi tele. Per guardare i soffitti senza torcersi il collo, ai visitatori si danno degli specchi.",
"Il Ponte dell’Accademia: unisce Dorsoduro a San Marco ed è di legno, con una sola ampia arcata. Il primo ponte, di ferro, è del 1854; quello di oggi è del Novecento. Dall’alto si vede il Canal Grande fino alla Salute.",
"Lo squero di San Trovaso: uno dei pochi cantieri dove si costruiscono e si riparano ancora le gondole. Esiste dal Seicento e, con le sue baracche di legno, sembra un piccolo chalet di montagna: si dice che lo stile ricordi le case dei carpentieri venuti dalle valli del Cadore.",
"Le Zattere: una lunga passeggiata affacciata sul canale della Giudecca. Si dice che il nome venga dalle zattere di legname che arrivavano qui e venivano scaricate. Oggi è il posto dove i veneziani passeggiano, prendono il sole e mangiano il gelato.",
"La Basilica della Salute: i veneziani la costruirono come ringraziamento dopo la peste del 1630-31, che uccise circa un terzo della popolazione. La progettò Baldassare Longhena e fu consacrata nel 1687. Il 21 novembre, nella festa della Madonna della Salute, si costruisce un ponte di barche sul Canal Grande e la città va a pregare e ad accendere una candela. Accanto, la Punta della Dogana ha in cima una sfera d’oro con una statua della Fortuna che gira con il vento.",
"Piazza San Marco: è l’unica che si chiama \"piazza\": tutte le altre, a Venezia, sono \"campi\". Si dice che Napoleone l’abbia chiamata il più bel salotto d’Europa. È anche il punto più basso della città: con la marea intorno agli 80 centimetri comincia ad allagarsi, e allora si montano le passerelle.",
"La Basilica di San Marco: fu costruita per custodire il corpo dell’evangelista Marco, che secondo la tradizione fu portato a Venezia da Alessandria d’Egitto nell’828. L’edificio che vediamo fu cominciato nel 1063. Dentro, mosaici dorati coprono le cupole e le pareti. I quattro cavalli di bronzo sulla facciata sono copie: gli originali, arrivati da Costantinopoli nel 1204, si conservano all’interno.",
"Il Campanile: alto 98,6 metri, è la torre più alta della città. Il 14 luglio 1902 crollò, ma fu ricostruito \"com’era, dov’era\" e inaugurato nel 1912. Dalla cima, nel 1609, Galileo mostrò il suo cannocchiale al doge. La Torre dell’Orologio, costruita fra il 1496 e il 1499, ha in cima due Mori di bronzo che battono le ore.",
"Il Palazzo Ducale: la residenza del doge e la sede del governo della Repubblica, in stile gotico. Dentro c’è la sala del Maggior Consiglio, con il Paradiso di Tintoretto, uno dei più grandi dipinti su tela del mondo. Il Ponte dei Sospiri, di pietra bianca e coperto, collega il palazzo alle prigioni: è dei primi anni del Seicento, e si dice che il nome venga dai sospiri dei condannati, ma lo rese famoso Lord Byron nell’Ottocento.",
"La Riva degli Schiavoni: la lunga passeggiata sul bacino. Il nome ricorda gli \"schiavoni\", cioè le genti venute dalla Dalmazia, che qui scaricavano le merci. Dal Ponte della Paglia, accanto al Palazzo Ducale, si vede il Ponte dei Sospiri dall’esterno.",
"La Pietà: l’ospedale della Pietà, fondato nel 1346, accoglieva i bambini abbandonati. Le bambine con più talento imparavano la musica e diventavano \"figlie di coro\": suonavano e cantavano durante le funzioni, nascoste dietro delle grate. Vivaldi ci lavorò come maestro e compositore. La chiesa che vediamo oggi fu finita nel 1761, dopo la sua morte; ancora oggi ci si fanno concerti.",
"L’isola di San Giorgio Maggiore, di fronte alla Piazzetta: la chiesa bianca fu progettata da Andrea Palladio e cominciata nel 1566; i lavori si conclusero all’inizio del Seicento. Dal campanile, dall’alto, si vede tutta la città.",
"L’Arsenale: il grande cantiere navale della Repubblica, che si dice fondato nel 1104. Nel Cinquecento ci lavoravano migliaia di operai, gli arsenalotti, e le galee si costruivano \"in serie\". Si racconta che nel 1574, davanti al re di Francia Enrico III, una galea fu montata in poche ore. Il portale, la Porta Magna, è del 1460 circa; i leoni di marmo furono portati dalla Grecia nel Seicento. Il nome \"arsenale\" viene dall’arabo.",
"Il canale della Giudecca separa l’isola dal resto della città: si attraversa in pochi minuti in vaporetto, con Venezia illuminata sull’altra riva. La Giudecca è una lunga isola stretta; un tempo era un luogo di giardini e ville dei nobili, poi di fabbriche.",
"La fondamenta della Giudecca: una riva tranquilla, con poca gente, da cui si vede tutta Venezia illuminata. In fondo c’è un enorme edificio neogotico di mattoni: il Mulino Stucky, un grande mulino per la farina, finito nel 1895, oggi un albergo.",
"Il Redentore: una chiesa progettata da Andrea Palladio e costruita dopo la peste del 1575-77, che uccise circa un terzo della popolazione. Ogni anno, la terza domenica di luglio, si fa la festa: un ponte di barche unisce le Zattere alla Giudecca, e la notte prima la laguna si riempie di barche con cene e fuochi d’artificio sul bacino.",
"Dalla fondamenta, di notte, Venezia si specchia sull’acqua: si vedono la Salute, la Dogana, il Campanile di San Marco e il Palazzo Ducale, con le luci che tremano. È l’ora in cui le barche a remi tornano a casa e la città si quieta.",
"Sulla riva, nel buio, fra due briccole l’acqua si accende di una strada di luce dorata che si allontana verso la laguna aperta. Sembra un sentiero: è la porta. In fondo, la luce di un altro mondo ti chiama."
];
const NAME={
v2_polo:"Marco Polo",
v2_vivaldi:"Antonio Vivaldi",
v2_marta:"Marta, la capitana del vaporetto",
v2_bepi:"Bepi, il pescivendolo della Pescaria",
v2_rosanna:"Rosanna, la padrona del bàcaro",
v2_alvise:"Alvise, il maestro dello squero",
v2_mario:"Mario, il cameriere del Caffè Florian",
v2_nicoletta:"Nicoletta, la rematrice della Giudecca"
};
const GREET={
v2_polo:"Ciò, ben arrivato nella mia corte, Pierpaolo! Sì, so il tuo nome: a Venezia le voci corrono più svelte del vento di scirocco. Sono Marco Polo, e se hai un momento ti racconto da dove vengono i miei \"milioni\".",
v2_vivaldi:"Ciò, Pierpaolo, vieni, vieni! Ti aspettavo: da questa riva si vede il tramonto più bello della laguna. Sono Antonio Vivaldi, prete, violinista e, come dire, un po’ rumoroso. Facciamo due passi finché la luce regge.",
v2_marta:"Bondì, Pierpaolo! Salta su, che si parte: sono Marta, capitana della linea 1. A quest’ora il Canal Grande è tutto nostro... o quasi.",
v2_bepi:"Ciò, mulo, vien qua! Pierpaolo, vero? Mi son Bepi, e vendo pesce da quarant’anni. Guarda che occhio che ha ’sto branzin: ti guarda anche lui!",
v2_rosanna:"Ciò, Pierpaolo, vien dentro, che fuori fa fredo! Sono Rosanna, e qui dentro c’è il calduccio del forno e un’ombra bona. Cosa ti dò?",
v2_alvise:"Ciò, Pierpaolo, vien pure, ma non toccare la pitura che xe fresca! Sono Alvise, e questa è la mia officina. Ti spiego come nasce una gondola, se hai pazienza.",
v2_mario:"Benvenuto, sior Pierpaolo! Il Florian la aspettava: noi camerieri sappiamo sempre chi sta per arrivare. Mario, a suo servizio, da quarant’anni sotto questi portici. Prego, un caffè mentre la luce è bella?",
v2_nicoletta:"Ciò, Pierpaolo, sei arrivato in tempo! Sono Nicoletta, nata qui alla Giudecca. Dai, siediti sul bordo e stai zitto un attimo: senti com’è silenziosa l’acqua, a quest’ora?"
};
/* ---- livello 0: cielo basso e mobile, sole, luna, nuvole veloci, velo dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-19400)/2000,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/17400,0,1),sx=40+u*400,sy=340-Math.sin(u*Math.PI)*235;
 if(xs<17900){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,240);sg.addColorStop(0,'rgba(255,'+Math.round(238-low*100)+','+Math.round(190-low*130)+',.75)');sg.addColorStop(.25,'rgba(255,'+Math.round(206-low*70)+',140,.3)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(246-low*100)+','+Math.round(214-low*140)+')',sx,sy,14)}
 const mu=cl((xs-18700)/2600,0,1);if(mu>0){const mx0=130+mu*250,my=300-mu*200;dot(g,'rgba(255,248,215,.18)',mx0,my,32);dot(g,'#f6f0d6',mx0,my,14);dot(g,'rgba(180,170,140,.4)',mx0-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx0+5,my+4,3)}
 const cc=xs<2700?'rgba(252,208,216,.72)':xs<13500?'rgba(255,255,255,.78)':xs<16400?'rgba(255,200,150,.7)':xs<18900?'rgba(255,150,118,.58)':'rgba(120,110,170,.4)';
 for(let i=0;i<9;i++){const sp=7+(i%3)*5,cx=(((i*131+t*sp-o*1.2)%700)+700)%700-110,cy=26+hr(i*3+1)*150,s=.7+hr(i*5)*.9;nube(g,cx,cy+3,s,'rgba(110,120,140,.14)');nube(g,cx,cy,s,cc)}
 const fo=cl(1-xs/2400,0,1)*.3;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-13300)/900,0,1)*cl((16000-xs)/900,0,1)*.16;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-16000)/800,0,1)*cl((18200-xs)/900,0,1)*.28;if(wg>.01){g.fillStyle='rgba(255,100,60,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: la laguna all'orizzonte, il ponte ferroviario, i campanili, la Salute, il Campanile, San Giorgio, il Redentore, le luci della città ---- */
const tower=(g,c,x,y,w,h,pc)=>{rect(g,c,x-w/2,y-h,w,h);rect(g,'rgba(0,0,0,.1)',x+w/2-4,y-h,4,h);rect(g,mixs(c,'#202020',.3),x-w/2+w*.25,y-h+8,w*.18,w*.34);rect(g,mixs(c,'#202020',.3),x+w*.07,y-h+8,w*.18,w*.34);poly(g,pc||'#6a727c',[[x-w/2-2,y-h],[x,y-h-w*1.5],[x+w/2+2,y-h]])};
const dome=(g,c,x,y,r,lan)=>{g.fillStyle=c;g.beginPath();g.arc(x,y,r,Math.PI,0);g.fill();rect(g,'rgba(255,255,255,.14)',x-r*.7,y-r*.8,r*.4,r*.5);if(lan){rect(g,c,x-r*.16,y-r-r*.32,r*.32,r*.34);poly(g,c,[[x-r*.2,y-r-r*.3],[x,y-r-r*.62],[x+r*.2,y-r-r*.3]])}};
const rowh=(g,sx,n,seed,dim,hz,sp)=>{for(let q=0;q<n;q++){const bx=sx-n*sp/2+q*sp,bh=22+hr(q*5+seed)*34;rect(g,dim(['#d0b090','#c8683a','#e4b0a0','#d8a850','#b8553a'][q%5]),bx,hz+16-bh,sp-4,bh);poly(g,dim('#a8553a'),[[bx-2,hz+16-bh],[bx+sp*.5-2,hz+16-bh-8],[bx+sp-2,hz+16-bh]]);if(hr(q*3+seed)>.6)chim(g,bx+sp*.3,hz+16-bh-5,dim('#c8683a'))}};
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs),dim=c=>mixs(c,'#262a5e',night*.7),sk=skyAt(xs);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 /* la laguna: acqua che prende il colore dell'orizzonte (zone 1, 5, 7, 8) */
 const lag=Math.max(env(1500,3000),env(12100,3200),env(17700,4600),env(21000,4600));
 if(lag>.02){g.globalAlpha=Math.min(1,lag*1.4);rect(g,mixs(sk[2],'#4a7a78',.5),0,hz+16,480,GT-hz-12);for(let q=0;q<26;q++)rect(g,night>.4?'rgba(255,214,130,.3)':'rgba(255,255,255,.3)',((q*53+Math.sin(t+q)*6)%480),hz+20+hr(q)*50,8+hr(q+2)*16,1.2);
  const u2=cl(xs/17400,0,1);if(xs<17900){const sx2=40+u2*400;for(let q=0;q<8;q++)rect(g,'rgba(255,214,140,'+(.5-q*.05)+')',sx2-22+q*2,hz+18+q*8,44-q*4,2)}g.globalAlpha=1}
 /* il ponte ferroviario sulla laguna e il treno (zona 1) */
 const br=env(1200,3000);if(br>.02){g.globalAlpha=br;const sx=fx(1200);rect(g,dim('#8a8f98'),sx-420,hz+10,840,5);for(let q=0;q<42;q++){ar(g,dim('#6a727c'),sx-418+q*20,hz+22,14,12)}rect(g,dim('#5a606a'),sx-420,hz+7,840,3);
  const tx=sx-420+((t*20)%860);rect(g,dim('#c8402a'),tx,hz+1,52,7);rect(g,dim('#f4f0e6'),tx+4,hz+3,44,3);g.globalAlpha=1}
 /* la cupola verde di San Simeon Piccolo e i campanili (zona 1) */
 const sg=env(2100,2600);if(sg>.02){g.globalAlpha=sg;const sx=fx(2100);rowh(g,sx,8,3,dim,hz,34);dome(g,dim('#5a9a7a'),sx-10,hz-34,30,1);rect(g,dim('#e4dccb'),sx-40,hz-34,60,50);tower(g,dim('#c8683a'),sx+78,hz+16,16,70,dim('#6a727c'));g.globalAlpha=1}
 /* i tetti e i campanili di Cannaregio, di Rialto e di San Polo (zone 2-4) */
 const ca=env(7000,6200);if(ca>.02){g.globalAlpha=ca;const sx=fx(7000);rowh(g,sx-300,14,5,dim,hz,38);rowh(g,sx+260,14,9,dim,hz,38);tower(g,dim('#c8683a'),sx-120,hz+16,16,96,dim('#6a727c'));tower(g,dim('#b8553a'),sx+330,hz+16,18,86,dim('#4a8a6a'));tower(g,dim('#d0b898'),sx+30,hz+16,15,76,dim('#6a727c'));g.globalAlpha=1}
 const fr=env(9800,3200);if(fr>.02){g.globalAlpha=fr;const sx=fx(9800);tower(g,dim('#a8452e'),sx+60,hz+16,24,130,dim('#7a3a2a'));rowh(g,sx-110,10,2,dim,hz,38);g.globalAlpha=1}
 /* la Giudecca di fronte e la facciata del Redentore, lontano (zona 5) */
 const gi=env(11800,3400);if(gi>.02){g.globalAlpha=gi;const sx=fx(11800);for(let q=0;q<20;q++){const bx=sx-380+q*38,bh=14+hr(q*3)*14;rect(g,dim(['#e4b0a0','#d9a441','#d0b090','#e8d6a8'][q%4]),bx,hz+16-bh,34,bh);poly(g,dim('#a8553a'),[[bx-1,hz+16-bh],[bx+17,hz+16-bh-5],[bx+35,hz+16-bh]])}
  rect(g,dim('#efe8dc'),sx-40,hz-34,64,50);poly(g,dim('#e4dccb'),[[sx-44,hz-34],[sx-8,hz-52],[sx+28,hz-34]]);dome(g,dim('#b8bcb8'),sx-8,hz-34,20,1);rect(g,dim('#efe8dc'),sx-58,hz-54,8,70);rect(g,dim('#efe8dc'),sx+34,hz-54,8,70);g.globalAlpha=1}
 /* la cupola bianca della Salute e la Dogana, lontano (zone 5-6) */
 const sa=env(13500,3000);if(sa>.02){g.globalAlpha=sa;const sx=fx(13500);rect(g,dim('#eee8dc'),sx-70,hz-24,140,40);dome(g,dim('#e4e0d4'),sx,hz-24,38,1);dome(g,dim('#d8d4c8'),sx-60,hz-14,16,1);dome(g,dim('#d8d4c8'),sx+60,hz-14,16,1);poly(g,dim('#e4dccb'),[[sx+100,hz+16],[sx+130,hz-12],[sx+160,hz+16]]);dot(g,dim('#d8b04a'),sx+130,hz-18,5);g.globalAlpha=1}
 /* le cupole di San Marco, il Campanile rosso con l'angelo d'oro e la Torre dell'Orologio (zona 6) */
 const sm=env(15100,3200);if(sm>.02){g.globalAlpha=sm;const sx=fx(15100);rowh(g,sx-200,10,7,dim,hz,34);[[-60,22],[-20,26],[22,22],[60,18],[-100,14]].forEach(d=>dome(g,dim('#9aa8a0'),sx+d[0],hz-8,d[1],1));rect(g,dim('#d8cfb8'),sx-120,hz-10,200,26);
  rect(g,dim('#b8452e'),sx+110,hz-130,22,146);rect(g,dim('#e4dccb'),sx+108,hz-138,26,16);poly(g,dim('#4a8a6a'),[[sx+108,hz-138],[sx+121,hz-176],[sx+134,hz-138]]);dot(g,dim('#d8b04a'),sx+121,hz-180,3.4);rect(g,dim('#d8b04a'),sx+119,hz-176,4,4);g.globalAlpha=1}
 /* le montagne innevate, appena visibili, nelle giornate limpide (zone 5-7) */
 const mo=env(16000,6400)*.5;if(mo>.02){g.globalAlpha=mo;const sx=fx(16000);g.fillStyle=dim('#a8b8d8');g.beginPath();g.moveTo(sx-440,hz+18);[[-440,0],[-380,-16],[-330,-8],[-270,-26],[-210,-12],[-150,-30],[-90,-14],[-30,-22],[40,-8],[110,-24],[170,-10],[240,-20],[320,-6],[380,-14],[440,0]].forEach(p=>g.lineTo(sx+p[0],hz+p[1]+4));g.lineTo(sx+440,hz+18);g.fill();g.fillStyle=dim('#f0f4fa');[[-270,-26],[-150,-30],[110,-24]].forEach(p=>{poly(g,dim('#f0f4fa'),[[sx+p[0]-10,hz+p[1]+10],[sx+p[0],hz+p[1]+4],[sx+p[0]+10,hz+p[1]+10]])});g.globalAlpha=1}
 /* San Giorgio Maggiore sull'isola di fronte alla riva, con il campanile di mattoni (zona 7) */
 const sgm=env(18000,3600);if(sgm>.02){g.globalAlpha=sgm;const sx=fx(18000);rect(g,dim('#9a8a78'),sx-150,hz+8,300,8);rect(g,dim('#c8a888'),sx-140,hz-6,120,18);for(let q=0;q<10;q++)rect(g,dim('#6a5a4a'),sx-132+q*11,hz,5,8);
  rect(g,dim('#f2eee4'),sx-8,hz-44,76,60);poly(g,dim('#e4dccb'),[[sx-12,hz-44],[sx+30,hz-66],[sx+72,hz-44]]);for(let q=0;q<5;q++)rect(g,dim('#d8d0bc'),sx+q*15-3,hz-42,5,56);dome(g,dim('#a8b0a8'),sx+26,hz-66,22,1);
  rect(g,dim('#b8452e'),sx+104,hz-96,18,112);poly(g,dim('#4a8a6a'),[[sx+100,hz-96],[sx+113,hz-128],[sx+126,hz-96]]);dot(g,dim('#d8b04a'),sx+113,hz-131,3);g.globalAlpha=1}
 /* le torri e le mura rosse dell'Arsenale (zona 7) */
 const ars=env(19100,2000);if(ars>.02){g.globalAlpha=ars;const sx=fx(19100);rect(g,dim('#a8452e'),sx-180,hz-6,360,22);for(let q=0;q<30;q++)rect(g,dim('#a8452e'),sx-180+q*12,hz-12,6,7);[[-100,50],[110,62]].forEach(d=>{rect(g,dim('#b8553a'),sx+d[0]-14,hz+16-d[1],28,d[1]);for(let q=0;q<4;q++)rect(g,dim('#b8553a'),sx+d[0]-14+q*8,hz+10-d[1],5,7)});g.globalAlpha=1}
 /* Giudecca di notte: il Mulino Stucky lontano e le luci di Venezia sull'altra riva, la Salute, la Dogana, il Campanile rosso e il Palazzo Ducale illuminati (zona 8) */
 const ci=env(21000,4800);if(ci>.02){g.globalAlpha=ci;const sx=fx(21000),lg=Math.max(.15,night);rowh(g,sx-430,26,11,dim,hz,34);
  [[-300,38],[-190,46],[-60,30],[40,40],[150,34],[260,46]].forEach((b,i)=>{rect(g,dim('#8a96aa'),sx+b[0]-16,hz+16-b[1],32,b[1]);for(let q=0;q<b[1]/9;q++)if(hr(i*7+q)>.35)rect(g,'rgba(255,226,160,'+(.9*lg)+')',sx+b[0]-12+(q%3)*9,hz+20-b[1]+q*9,4,3)});
  dome(g,dim('#9aa4b0'),sx-120,hz-18,26,1);rect(g,dim('#9aa4b0'),sx-148,hz-18,52,32);rect(g,dim('#b8452e'),sx+60,hz-96,16,112);poly(g,dim('#4a8a6a'),[[sx+57,hz-96],[sx+68,hz-124],[sx+79,hz-96]]);dot(g,'#ffd878',sx+68,hz-128,3);glow(g,sx+68,hz-120,34,'255,214,130',.5*lg);
  rect(g,dim('#d8c8c0'),sx+110,hz-12,150,28);for(let q=0;q<14;q++)rect(g,'rgba(255,226,160,'+(.8*lg)+')',sx+116+q*10,hz-4,4,6);
  for(let q=0;q<34;q++)rect(g,'rgba(255,200,110,'+(.34*lg*(.6+.4*Math.sin(t*2+q)))+')',sx-440+q*27+Math.sin(t+q)*3,hz+22+hr(q)*30,2,10+hr(q*3)*14);g.globalAlpha=1}
 if(night>.35)for(let q=0;q<46;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.3)+')',q*11+hr(q)*8,hz+22+hr(q*3)*8,1.2)}
/* ---- livello 2: profili di palazzi, tetti e altane dietro la prima fila (zone di terra e di canale; il bacino aperto resta libero) ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;
  const wins=(n,top)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+14+(q%4)*20,top+Math.floor(q/4)*14,6,5)};
  if(zz==1||zz==3){rect(g,dim(['#e6b4a4','#e8d6a8','#d8b090','#efe4d4'][md(i,4)]),x,hz-52-r*34,w-14,62+r*34);rect(g,dim('#efe8dc'),x-3,hz-56-r*34,w-8,4);for(let q=0;q<4;q++)pa(g,dim('#5a6a78'),x+10+q*22,hz-14,10,22);wins(8,hz-44-r*34);if(hr(i*3)>.7)chim(g,x+60,hz-56-r*34,dim('#c8683a'))}
  else if(zz==2){rect(g,dim(['#c8683a','#d8a850','#b4553a','#e4b0a0'][md(i,4)]),x,hz-64-r*40,w-10,74+r*40);poly(g,dim('#a8553a'),[[x-3,hz-64-r*40],[x+50,hz-74-r*40],[x+w-7,hz-64-r*40]]);if(hr(i*3)>.6)altana(g,x+30,hz-70-r*40,40);chim(g,x+80,hz-72-r*40,dim('#c8683a'));wins(8,hz-52-r*40)}
  else if(zz==4){rect(g,dim(['#b4553a','#d9a441','#c8683a','#e4b0a0'][md(i,4)]),x,hz-56-r*34,w-10,66+r*34);poly(g,dim('#a8553a'),[[x-3,hz-56-r*34],[x+50,hz-68-r*34],[x+w-7,hz-56-r*34]]);if(hr(i*3)>.75){rect(g,dim('#a8452e'),x+30,hz-120,20,70);poly(g,dim('#7a3a2a'),[[x+26,hz-120],[x+40,hz-146],[x+54,hz-120]])}wins(8,hz-46-r*34)}
  else if(zz==6){rect(g,dim(['#ece2cc','#e4dcc8','#efe6d2'][md(i,3)]),x,hz-60-r*30,w-8,70+r*30);rect(g,dim('#d0c8b0'),x-3,hz-64-r*30,w-2,5);if(hr(i*3)>.6)cupo(g,dim('#9aa8a0'),x+w*.4,hz-64-r*30,32,26);wins(8,hz-50-r*30)}});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
const cupo=PR._md.cupo;
/* ---- livello 3: la prima fila, zona per zona ---- */
const WALL={1:['#e6b4a4','#e8d6a8','#d8b090','#efe4d4','#c8a890','#b8c0b0'],3:['#e8d6a8','#efe4d4','#d8a850','#e6b4a4','#d8b090','#c8a890'],5:['#e6b4a4','#d9a441','#d8b090','#e8d6a8']};
const PER={1:190,2:180,3:190,4:170,5:190,6:190};
function rio(g,x,w,k,i){const c=mixs('#3a5a52','#10202c',Math.min(1,k*1.1));
 rect(g,[ '#e4b0a0','#d8a850','#c8683a'][md(i,3)],x+16,GT-132,w-32,100);for(let q=0;q<3;q++)pa(g,'#5a6a78',x+26+q*34,GT-50,14,26);
 poly(g,c,[[x+22,GT-34],[x+w-22,GT-34],[x+w-4,GT],[x+4,GT]]);rect(g,IS,x+8,GT-62,w-16,10);ar(g,'#1a2a24',x+w*.28,GT-34,w*.44,28);rect(g,IS2,x+8,GT-66,w-16,4);for(let q=0;q<9;q++)rect(g,IS2,x+10+q*(w-24)/8,GT-76,3,10);rect(g,IS2,x+8,GT-76,w-16,3);
 rect(g,'rgba(0,0,0,.2)',x,GT-120,12,120);rect(g,'rgba(0,0,0,.2)',x+w-12,GT-120,12,120)}
const IS='#ece6d6',IS2='#d4cdb8';
const WLS=['#c8683a','#d8a850','#b4553a','#e4b0a0','#a8704a','#d0b090'];
function fac(g,x,w,h,i,st,wx){const k=A.getDK(),r=hr(i*3);
 if(st==1||st==3){const W=WALL[st];pal(g,x+4,GT,w-12,h,i,k,{wall:W[md(i,W.length)],st:md(i,3)==1?'r':'g',gate:true,alt:r>.8,ch:r>.35,tr:IS});return}
 if(st==2){if(r>.9){rio(g,x,w,k,i);return}
  if(wx>3050&&wx<3700){pal(g,x+4,GT,w-12,260+hr(i*5)*50,i,k,{wall:['#7a5a48','#9a6a4a','#6a4a42','#8a5a46'][md(i,4)],st:'c',fl:6,ch:true,sh:'#3a4a3a'});return}
  pal(g,x+4,GT,w-12,h+30,i,k,{wall:WLS[md(i,6)],st:md(i,3)==2?'b':'c',alt:r>.6,ch:r>.3,sh:'#2f6a42'});return}
 if(st==4){pal(g,x+4,GT,w-12,h+20,i,k,{wall:[ '#b4553a','#e4b0a0','#d9a441','#c8683a','#efe4d4'][md(i,5)],st:['g','b','r','c','g'][md(i,5)],alt:r>.65,ch:r>.3,sh:'#2f6a42'});return}
 if(st==5){const W=WALL[5];pal(g,x+10,GT,w-24,62+hr(i*5)*40,i,k,{wall:W[md(i,4)],st:'c',fl:2,ch:true,sh:'#2f6a42'});return}
 if(st==6){const top=GT-h;rect(g,'#ece2cc',x,top,w,h);rect(g,'rgba(255,255,255,.16)',x,top,5,h);rect(g,'rgba(0,0,0,.12)',x+w-12,top,12,h);const n=Math.max(3,Math.floor(w/28));
  for(let rr=0;rr<2;rr++){const yy=GT-78-(rr+1)*44;for(let q=0;q<n;q++){const wx2=x+10+q*(w-30)/(n-1);PR._md.arco(g,'#c8bea4',wx2-3,yy+34,18,34);PR._md.arco(g,lit(k,i*13+rr*7+q)?LIT:'#4a5a6a',wx2,yy+32,12,28);rect(g,IS,wx2+4.5,yy+4,3,30)}rect(g,'#d0c8b0',x,yy+36,w,3)}
  const nn=Math.max(2,Math.floor(w/44)),aw=w/nn;rect(g,'#24160e',x,GT-62,w,62);for(let q=0;q<nn;q++){PR._md.arco(g,'#14100c',x+q*aw+6,GT-2,aw-12,58);if(k>.2)rect(g,'rgba(255,214,130,.55)',x+q*aw+12,GT-40,aw-24,30);rect(g,'#ece2cc',x+q*aw-3,GT-64,7,64)}
  rect(g,'#d0c8b0',x-3,top-4,w+6,6);for(let q=0;q<w/12;q++)rect(g,'#d0c8b0',x+q*12,top-14,4,10);return}}
function layerStreet(g,o,t){const gt=GT;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(PER[1],7,Z[0],Z[1],1,i=>130+hr(i*5)*60,178);
 each2(PER[2],8,Z[1],Z[2],2,i=>150+hr(i*5)*60,168);
 each2(PER[3],9,Z[2],Z[3],3,i=>130+hr(i*5)*50,178);
 each2(PER[4],10,Z[3],Z[4],4,i=>130+hr(i*5)*40,158);
 each2(PER[5],11,Z[4],Z[5],5,i=>60,178);
 each2(PER[6],12,Z[5],Z[6],6,i=>170+hr(i*5)*26,180)}
/* ---- terreno: ogni zona ha il suo suolo; nelle zone d'acqua il canale sta dietro, con i riflessi dei palazzi ---- */
const WZ=[1,0,1,0,1,0,1,1];
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#c9c3b0','k'],[Z[1],Z[2],'#8c8a86','c'],[Z[2],Z[3],'#a8a498','r'],[Z[3],Z[4],'#bcb6a2','p'],[Z[4],Z[5],'#cbc5b2','z'],[Z[5],Z[6],'#8e8e90','m'],[Z[6],Z[7],'#c8c2b0','v'],[Z[7],Z[8],'#66666e','g']];
 rect(g,'#e0d8c0',0,gt,480,3);
 GZ.forEach((z,zi)=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0),wz=WZ[zi];g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();
  rect(g,z[2],x0,gt+3,x1-x0,150);
  let py=gt+3;
  if(wz){/* il canale dietro: colore dell'acqua, riflessi dei palazzi, scintillii, bordo di pietra */
   for(let sx=Math.floor(x0/24)*24;sx<x1;sx+=24){const wx=cam+sx,k=nf(wx);g.fillStyle=PR._v2.wcol(k);g.fillRect(sx,gt+3,24,41);if(zi==6){g.fillStyle='rgba(255,130,80,'+(.3*cl(1-Math.abs(wx-17400)/1800,0,1))+')';g.fillRect(sx,gt+3,24,41)}}
   if(zi==0||zi==2||zi==4){const per=PER[zi+1];each(cam,per,[7,9,11][zi/2],(x,i)=>{const wx=i*per;if(wx<z[0]-per||wx>z[1])return;const W=WALL[zi+1],k=nf(wx);for(let r=0;r<5;r++){g.globalAlpha=.5-r*.07;g.fillStyle=mixs(W[md(i,W.length)],PR._v2.wcol(k),.42+r*.1);g.fillRect(x+12+Math.sin(t*1.3+r+i)*3,gt+4+r*8,150,5)}g.globalAlpha=1})}
   for(let q=0;q<46;q++)rect(g,nf(cam+x0+q*20)>.4?'rgba(255,214,130,.34)':'rgba(255,255,255,.26)',x0+((q*47-cam*1+Math.sin(t+q)*5)%ww+ww)%ww,gt+6+hr(q)*36,6+hr(q+2)*14,1.2);
   rect(g,'#d8d2c0',x0,gt+44,x1-x0,3);rect(g,'#b8b09a',x0,gt+47,x1-x0,4);rect(g,'rgba(0,0,0,.28)',x0,gt+51,x1-x0,3);py=gt+54}
  const slabs=(bw0,add,al)=>{for(let r=0;r<7;r++){const yy=py+4+r*(wz?14:19),bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,wz?11:15);rect(g,'rgba(0,0,0,.12)',px,yy,1.3,wz?13:17)}rect(g,'rgba(0,0,0,.09)',x0,yy+(wz?11:15),x1-x0,1.4)}};
  if(z[3]=='k'){slabs(66,10,.24);rect(g,'rgba(255,255,255,.12)',x0,py,x1-x0,16);for(let q=0;q<5;q++)dot(g,'#2a2c30',x0+((q*190+60-cam)%ww+ww)%ww,py+3,3)}
  if(z[3]=='c'){slabs(34,6,.14);rect(g,'rgba(255,255,255,.55)',x0,gt+96,x1-x0,2.6);rect(g,'rgba(255,255,255,.4)',x0,gt+126,x1-x0,2.6);for(let q=0;q<4;q++)el(g,'rgba(110,140,150,.25)',x0+((q*230+90-cam)%ww+ww)%ww,gt+110,22,3)}
  if(z[3]=='r'){slabs(30,6,.1);for(let q=0;q<10;q++)el(g,'rgba(120,160,175,.3)',x0+((q*121+40-cam)%ww+ww)%ww,py+16+hr(q)*70,16+hr(q+3)*14,3);for(let q=0;q<14;q++)rect(g,'rgba(255,255,255,.35)',x0+((q*83-cam)%ww+ww)%ww,py+10+hr(q*3)*80,6+hr(q)*8,1.4)}
  if(z[3]=='p'){slabs(40,8,.18);rect(g,'rgba(255,255,255,.5)',x0,gt+70,x1-x0,3);rect(g,'rgba(255,255,255,.5)',x0,gt+118,x1-x0,3)}
  if(z[3]=='z'){slabs(70,8,.22);rect(g,'rgba(255,255,255,.14)',x0,py,x1-x0,12);for(let q=0;q<3;q++)rect(g,'#6a5a42',x0+((q*600+200-cam)%ww+ww)%ww,py+2,60,8)}
  if(z[3]=='m'){for(let r=0;r<6;r++){const yy=gt+10+r*21;rect(g,'rgba(255,255,255,.55)',x0,yy,x1-x0,2.4);for(let k=-1;k<ww/(30+r*8)+2;k++){const px=Math.floor((cam+x0)/(30+r*8))*(30+r*8)+k*(30+r*8)-cam;rect(g,'rgba(255,255,255,.5)',px,yy,2.2,21)}}for(let q=0;q<60;q++)rect(g,'rgba(0,0,0,.08)',x0+((q*41-cam)%ww+ww)%ww,gt+8+hr(q)*130,5,3)}
  if(z[3]=='v'){slabs(80,10,.22);rect(g,'rgba(255,255,255,.12)',x0,py,x1-x0,14);for(let q=0;q<4;q++)rect(g,'#9a967f',x0+((q*210-cam)%ww+ww)%ww,py+1,40,3)}
  if(z[3]=='g'){slabs(46,8,.1);rect(g,'rgba(255,255,255,.08)',x0,py,x1-x0,14);for(let q=0;q<8;q++){const rx=x0+((q*160+30-cam)%ww+ww)%ww;dot(g,'#2a2c30',rx,py+4,3.2);dot(g,'#5a5c60',rx,py+4,1.6)}for(let q=0;q<14;q++)rect(g,'rgba(255,214,130,.2)',x0+((q*71-cam)%ww+ww)%ww,py+6,3,40+hr(q)*50)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1400,0,1);if(dw>.02)rect(g,'rgba(255,200,200,'+(.14*dw)+')',0,gt,480,150);
 const gd=cl((cam-13300)/700,0,1)*cl((15800-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
 const sg=cl((cam-16000)/700,0,1)*cl((18000-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};
/* ---- vita: barche sul canale, pali da casada, gabbiani, piccioni, passanti con i cani, nebbiolina dell'alba ---- */
function layerLife(g,o,t){const cam=o,xs=cam+240,WY=GT+30;
 /* nebbiolina bassa sull'acqua all'alba */
 const mist=cl(1-xs/2600,0,1);if(mist>.02)for(let q=0;q<8;q++){g.globalAlpha=mist*.3;el(g,'#f6eef0',((q*131+t*5)%620)-60,GT+8+q*5,110,9);g.globalAlpha=1}
 /* pali da casada davanti ai palazzi sul Canal Grande (zone 1 e 3) e gondole legate */
 [[1,Z[0],Z[1],190,7],[3,Z[2],Z[3],190,9]].forEach(zz=>{if(cam+520<zz[1]||cam>zz[2])return;each(cam,zz[3],zz[4],(x,i,r)=>{const wx=i*zz[3];if(wx<zz[1]||wx>zz[2])return;A.setDK(nf(wx));
  const wy=GT+16+Math.sin(t*1.1+i)*.8;palo(g,x+34,wy,56+r*14,r>.5?'#a8281e':'#1c3a8a',r>.5?'#f4f0e6':'#d8b04a');palo(g,x+124,wy,56+r*10,r>.5?'#1c3a8a':'#a8281e',r>.5?'#d8b04a':'#f4f0e6');if(r>.6)bric(g,x+80,GT+30,60,t,r>.8?1:2,A.getDK())})});
 /* barche in movimento: [da, a, velocità (negativa = verso sinistra), sfasamento, disegno] */
 const run=(a,b,spd,off,fn)=>{if(cam+520<a||cam-260>b)return;const span=b-a,wx=a+(((t*spd+off)%span)+span)%span,px=wx-cam;if(px<-260||px>740)return;A.setDK(nf(wx));fn(px,A.getDK(),spd<0?-1:1)};
 run(Z[0],Z[1]+300,28,0,(px,k,f)=>vap(g,px,WY+4,.5,f,k,'1',t));run(Z[0],Z[1]+300,-13,900,(px,k,f)=>gond(g,px,WY+10,.46,f,t,k,1));run(Z[0],Z[1]+300,-20,1700,(px,k,f)=>cargo(g,px,WY+8,.5,f));
 run(Z[2],Z[3]+300,15,300,(px,k,f)=>gond(g,px,WY+9,.46,f,t,k,1));run(Z[2],Z[3]+300,-24,1200,(px,k,f)=>cargo(g,px,WY+8,.5,f,'#c8402a'));run(Z[2],Z[3]+300,-12,2000,(px,k,f)=>gond(g,px,WY+12,.46,f,t,k,1));
 run(Z[4],Z[5]+300,26,100,(px,k,f)=>vap(g,px,WY+2,.46,f,k,'2',t));run(Z[4],Z[5]+300,-14,1500,(px,k,f)=>gond(g,px,WY+10,.46,f,t,k,1));
 run(Z[6],Z[7]+300,-16,0,(px,k,f)=>gond(g,px,WY+9,.46,f,t,k,1));run(Z[6],Z[7]+300,12,1300,(px,k,f)=>gond(g,px,WY+11,.46,f,t,k,1));run(Z[6],Z[7]+300,30,600,(px,k,f)=>vap(g,px,WY+2,.46,f,k,'2',t));
 run(Z[7],Z[8],-14,0,(px,k,f)=>gond(g,px,WY+10,.46,f,t,k,1));run(Z[7],Z[8],22,1800,(px,k,f)=>vap(g,px,WY+2,.46,f,k,'4.1',t));
 /* gabbiani reali in volo e piccioni nei campi e in Piazza */
 if(xs<20400)for(let i=0;i<4;i++){const bx=((i*151+t*(52+i*7))%640)-80,by=60+hr(i*5+2)*130+Math.sin(t*2+i)*12,w=Math.sin(t*9+i)*4;g.strokeStyle='rgba(235,238,242,.95)';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-10,by+w);g.quadraticCurveTo(bx-4,by-5,bx,by);g.quadraticCurveTo(bx+4,by-5,bx+10,by+w);g.stroke();rect(g,'#9aa0a8',bx-12,by+w-1,4,2);rect(g,'#9aa0a8',bx+8,by+w-1,4,2)}
 const pg=Math.max(cl((xs-9000)/300,0,1)*cl((10600-xs)/300,0,1),cl((xs-13700)/300,0,1)*cl((16100-xs)/300,0,1));
 if(pg>.05)for(let i=0;i<6;i++){const bx=((i*117+t*(46+i*6))%600)-60,by=80+hr(i*3)*100+Math.sin(t*2+i*2)*14,w=Math.sin(t*10+i)*3.4;g.strokeStyle='rgba(120,126,140,'+(.9*Math.min(1,pg))+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke();rect(g,'rgba(90,96,110,.9)',bx-2,by,5,3)}
 /* passanti con trolley e cani lungo le rive e nelle calli */
 [[200,2500,40,0],[2800,5300,-30,1],[5600,8000,36,2],[8300,10700,-30,3],[11000,13400,34,4],[13700,16100,-38,5],[16300,18800,30,6],[19000,22000,-26,7]].forEach((rg,ri)=>{for(let i=0;i<2;i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.25),wx=rg[0]+(((t*sp+i*span/2)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));const d=sp>0?1:-1,by=GT+66+i*7;
  pers(g,px,by,t*3,{f:d,s:.56,ph:i,top:['#e8505a','#2a8a9a','#f2c82a','#3a3a46','#f4f0e6','#8a4a9a','#2a6aa8','#c8503a'][(i+ri)%8],bot:'#2a2a36',hair:'#2a1a10'});
  if((ri+i)%3==0){const dx=px+d*34,bob=Math.abs(Math.sin(t*9+ri))*1.4;el(g,tn('#c8a060'),dx,by-9-bob,9,5);dot(g,tn('#c8a060'),dx+d*8,by-13-bob,4);[-5,-1,4,8].forEach(q=>rect(g,tn('#a88050'),dx+q-1,by-7,2,7));ln(g,'#8a8a90',.8,[dx-d*6,by-12,px+d*8,by-40])}
  if((ri+i)%3==1){rect(g,tn('#2a2e36'),px+d*18,by-16,10,14);ln(g,'#2a2e36',1.2,[px+d*20,by-16,px+d*10,by-30])}}})}
/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Marta: giubbotto blu con strisce riflettenti, berretto di lana, guanti senza dita, tazza termica, radiolina alla cintura */
 NP('v2_marta',NAME.v2_marta,1300,GREET.v2_marta,{skin:'#e0a888',top:'#1c3a6a',bot:'#2a3040',hair:'#8a5a3a',s:1.0},(g,b,t)=>{rect(g,'#e8e0a0',-12,-80+b,24,2.4);rect(g,'#e8e0a0',-12,-62+b,24,2.4);poly(g,'#4a4a56',[[-11,-108+b],[11,-108+b],[10,-118+b],[0,-123+b],[-10,-118+b]]);rect(g,'#2a2a34',-11,-110+b,22,3.4);rect(g,'#8a9098',4,-58,7,11);rect(g,'#c8ccd4',4,-60,7,3);rect(g,'#14161c',9,-52+b,5,9);dot(g,'#e0a888',-6.6,-48,3.6);dot(g,'#e0a888',6.6,-48,3.6);dot(g,'rgba(255,255,255,.5)',9,-66-((t*8)%12),1.2);rect(g,'#e8e0a0',-12,-44+b,24,2)}),
 /* Marco Polo: lunga veste scura di lana con la cintura, mantello foderato, berretto di pelliccia, borsa a tracolla piena di carte, barba corta */
 NP('v2_polo',NAME.v2_polo,3990,GREET.v2_polo,{skin:'#d8a078',top:'#3a2e38',bot:'#2a2430',hair:'#3a2a1a',long:1,s:1.02},(g,b,t)=>{poly(g,'#4a3a2a',[[-14,-88+b],[-20,-40],[-15,-6],[-12,-60]]);rect(g,'#8a6a3a',-12,-62+b,24,4);rect(g,'#d8b04a',-2,-63+b,4,6);el(g,'#6a4a32',0,-113+b,15,5);poly(g,'#6a4a32',[[-9,-114+b],[9,-114+b],[7,-123+b],[-7,-123+b]]);rect(g,'#4a3220',-10,-113+b,20,2.4);
  poly(g,'#2a1e14',[[0,-95+b],[10,-95+b],[8,-86+b],[2,-86+b]]);ln(g,'#7a5a38',2,[-12,-84+b,14,-58]);rect(g,'#a8764a',8,-66,16,18);rect(g,'#7a5030',8,-66,16,3);rect(g,'#f0e6c8',11,-72,3,9);rect(g,'#f0e6c8',16,-74,3,11)}),
 /* Bepi: grembiule azzurro, stivali di gomma verdi, maglione blu, cappello di lana, mani rosse, coltello lungo, ghiaccio sul banco */
 NP('v2_bepi',NAME.v2_bepi,6700,GREET.v2_bepi,{skin:'#d8a078',top:'#2a4a8a',bot:'#3a3a46',hair:'#9a9a9a',s:1.04},(g,b,t)=>{rect(g,'#3a8ac8',-12,-80+b,24,40);rect(g,'rgba(255,255,255,.22)',-12,-80+b,4,40);rect(g,'#2f8a4a',-9.6,-16,9.4,16);rect(g,'#2f8a4a',.4,-16,9.4,16);rect(g,'#1f6a36',-9.6,-16,9.4,3);rect(g,'#1f6a36',.4,-16,9.4,3);poly(g,'#2a2a4a',[[-11,-108+b],[11,-108+b],[10,-118+b],[0,-122+b],[-10,-118+b]]);rect(g,'#1a1a34',-11,-110+b,22,3.4);dot(g,'#d86a58',-6.6,-48,3.8);dot(g,'#d86a58',6.6,-48,3.8);ln(g,'#c8ccd4',2.2,[8,-50,32,-64]);rect(g,'#4a3a2a',6,-52,6,3)}),
 /* Rosanna: grembiule bianco a righe, capelli grigi raccolti, occhiali sul naso, canovaccio sulla spalla, orecchini a goccia */
 NP('v2_rosanna',NAME.v2_rosanna,8700,GREET.v2_rosanna,{skin:'#e0b090',top:'#8a4a5a',bot:'#2a2a36',hair:'#b8b8b8',s:1.0},(g,b,t)=>{rect(g,'#f4f0e6',-11,-76+b,22,34);for(let q=0;q<5;q++)rect(g,'rgba(60,90,160,.4)',-9+q*4.6,-76+b,1.8,34);dot(g,'#b8b8b8',-6,-116+b,6.4);dot(g,'#b8b8b8',-11,-104+b,4);ln(g,'#3a3a40',1,[2,-102+b,8,-102+b]);dot(g,'rgba(180,220,240,.5)',4,-101.5+b,2.6);dot(g,'rgba(180,220,240,.5)',9,-101.5+b,2.6);dot(g,'#d8b04a',-3,-94+b,2.2);dot(g,'#d8b04a',8,-94+b,2);rect(g,'#f4f0e6',-14,-92+b,10,5);rect(g,'#c8402a',-14,-90+b,10,1.2)}),
 /* Alvise: tuta blu macchiata di vernice e segatura, matita dietro l'orecchio, occhiali da lavoro sulla fronte, metro in tasca, pialla in mano */
 NP('v2_alvise',NAME.v2_alvise,12100,GREET.v2_alvise,{skin:'#d0987a',top:'#2a4a8a',bot:'#2a4a8a',hair:'#6a6a6a',s:1.03},(g,b,t)=>{for(let q=0;q<7;q++)dot(g,['#f4f0e6','#c8402a','#d8b878'][q%3],-9+q*3,-80+(q*7)%30+b,1.2);ln(g,'#e8c04a',1.6,[-4,-102+b,-10,-108+b]);rect(g,'#14110f',-8,-111+b,16,2.6);dot(g,'#9aa0a8',-4,-111+b,2.4);dot(g,'#9aa0a8',3,-111+b,2.4);rect(g,'#e8c04a',5,-68+b,3,14);poly(g,'#4a4a56',[[-11,-110+b],[11,-110+b],[10,-118+b],[0,-121+b],[-10,-118+b]]);rect(g,'#c89a4a',8,-56,18,7);rect(g,'#8a6a3a',8,-49,18,2);dot(g,'#f0e6c8',24,-56,1.4)}),
 /* Mario: giacca bianca con i bottoni dorati, farfallino nero, pantaloni neri con la piega, vassoio d'argento, baffetti curati */
 NP('v2_mario',NAME.v2_mario,14450,GREET.v2_mario,{skin:'#e0b090',top:'#f4f0e6',bot:'#14141a',hair:'#2a2a2e',s:1.02},(g,b,t)=>{for(let q=0;q<3;q++)dot(g,'#d8b04a',0,-84+q*9+b,1.5);poly(g,'#14141a',[[-6,-90+b],[0,-87+b],[6,-90+b],[6,-84+b],[0,-87+b],[-6,-84+b]]);rect(g,'#14141a',2,-98+b,9,1.6);el(g,'#c8ccd4',16,-60,17,3.4);el(g,'#e8ecf0',16,-62,15,2);rect(g,'#f4f0e6',14,-70,4,8);dot(g,'#8a4a2a',17,-72,3.6)}),
 /* Vivaldi: veste nera da prete con il colletto bianco, capelli rossi sotto il tricorno, mantello scuro, guanti, violino sotto il braccio, spartiti arrotolati */
 NP('v2_vivaldi',NAME.v2_vivaldi,17850,GREET.v2_vivaldi,{skin:'#ecd0c0',top:'#16161c',bot:'#16161c',hair:'#c8501e',long:1,s:1.02},(g,b,t)=>{rect(g,'#f4f0e6',-6,-91+b,12,4);poly(g,'#1c1c22',[[-15,-108+b],[0,-124+b],[15,-108+b],[6,-110+b],[-6,-110+b]]);rect(g,'#c8501e',-13,-106+b,4,10);dot(g,'#c8501e',-12,-96+b,3);poly(g,'#1a1a20',[[-14,-88+b],[-19,-44],[-14,-6],[-12,-60]]);
  el(g,'#8a4a22',-18,-66,7,9);el(g,'#8a4a22',-18,-56,5.6,6.4);rect(g,'#6a3a1a',-22,-84,3,22);ln(g,'#e8e0d0',1,[-27,-90,-12,-56]);rect(g,'#f0e6c8',14,-72,4,18);rect(g,'#f0e6c8',19,-70,4,16);dot(g,'#2a2a30',6.6,-48,3.2);dot(g,'#2a2a30',-6.6,-48,3.2)}),
 /* Nicoletta: felpa blu con il cappuccio, pantaloni impermeabili, capelli legati, guanti, lampadina frontale, il remo con la forcola */
 NP('v2_nicoletta',NAME.v2_nicoletta,21750,GREET.v2_nicoletta,{skin:'#e0a888',top:'#2a4a8a',bot:'#3a4a5a',hair:'#5a3a22',s:1.0},(g,b,t)=>{el(g,'#2a4a8a',-6,-88+b,11,6);rect(g,'#1a3a7a',-4,-84+b,8,3);ln(g,'#14110f',2,[-12,-104+b,13,-104+b]);dot(g,'#fff6c8',9,-106+b,2.6);glow(g,9,-106+b,26,'255,240,190',.5);dot(g,'#5a3a22',-12,-98+b,5);ln(g,'#5a3a22',3,[-12,-98+b,-16,-84+b]);dot(g,'#2a2a30',6.6,-48,3.4);dot(g,'#2a2a30',-6.6,-48,3.4);ln(g,WD,3,[28,-6,30,-124]);poly(g,WD,[[26,-124],[34,-124],[32,-104],[28,-104]]);rect(g,'#2a2c30',24,-50,8,4)})
];
/* ---- oggetti lungo il percorso ---- */
const LX=[450,1800,2150,2560, 3300,3980,4900, 6000,6750,7300,7850, 8650,9450,10050,10560, 11350,12000,12600,13050, 13950,15000,15500,16050, 16800,17550,18200,18650, 19450,20100,20850,21350,22270];
const props=[
 /* zona 1 · Ferrovia, Ponte degli Scalzi e Canal Grande (alba) */
 ['v2niz',150,'FERROVIA'],['v2lampione',320,0],['v2stazione',450],['v2carrello',700],['v2scalzi',880],['v2barcatelo',760],['v2bitta',1120,1],['v2lampione2',1160],['v2pontile',1250,'FERROVIA'],['v2tavolini',1560,'#2a5a8a'],['v2traghetto',1800],['v2bitta',1960,2],['v2briccole',2150],['v2gatto',2390,'#3a3a3e'],['v2cadoro',2560],
 /* zona 2 · Cannaregio: il Ghetto e la Corte del Milion (mattina) */
 ['v2niz',2860,'CAMPO DEL GHETTO'],['v2lampione',3000,0],['v2ghetto',3300],['v2gatto',3600,'#c9873a'],['v2lampione',3650,1],['v2stendino',3740,200],['v2milion',3980],['v2gatto',4180,'#e8e0d0'],['v2lampione2',4330],['v2niz',4520,'RIO TERÀ'],['v2vera',4590],['v2miracoli',4900],['v2lampione',5150,1],['v2panca',5260],
 /* zona 3 · Rialto (tarda mattina) */
 ['v2niz',5500,'RIALTO'],['v2lampione',5640,0],['v2rialto',6000],['v2bancarella',6330,'#c8402a'],['v2bitta',6420,1],['v2pescaria',6750],['v2erbaria',7300],['v2carrello',7520],['v2giacomo',7850],['v2lampione2',8070],
 /* zona 4 · San Polo: bàcari, Frari e San Rocco (mezzogiorno) */
 ['v2niz',8170,'CAMPO SAN POLO'],['v2bacaro',8650],['v2lampione',8900,1],['v2vera',9060],['v2gente',9140,[3,21]],['v2campo',9450],['v2plat',9720,1.2],['v2frari',10000],['v2lampione2',10250],['v2stendino',10330,170],['v2sanrocco',10560],['v2cestino',10740],
 /* zona 5 · Dorsoduro: squero, Zattere e Salute (primo pomeriggio) */
 ['v2niz',10880,'ZATTERE'],['v2accademia',11350],['v2barcatelo',11700],['v2lampione2',11640],['v2plat',11760,1.1],['v2squero',12000],['v2panca',12330],['v2zattere',12600],['v2plat',12900,1.2],['v2salute',13050],['v2bitta',13380,1],
 /* zona 6 · Piazza San Marco (pomeriggio dorato) */
 ['v2piazza',13950],['v2passerelle',14260],['v2florian',14450],['v2lampione2',14640],['v2basilica',15000],['v2orologio',15350],['v2campanile',15640],['v2gente',15800,[4,5]],['v2ducale',16050],
 /* zona 7 · Riva degli Schiavoni, Pietà e Arsenale (tramonto) */
 ['v2fronte',16480,0],['v2lampione',16620,1],['v2riva',16800],['v2gondolefila',17120,3],['v2bancarella',17250,'#2a6aa8'],['v2pieta',17550],['v2lampione2',17760],['v2panca',17980],['v2pontile',18200,'S. ZACCARIA'],['v2fronte',18380,1],['v2arsenale',18650],
 /* zona 8 · Giudecca (notte) */
 ['v2lampione2',18960],['v2traversata',19450],['v2case',19760,0],['v2lampione',19900,1],['v2stucky',20100],['v2case',20500,1],['v2lampione2',20640],['v2redentore',20850],['v2case',21140,2],['v2lampione',21220,1],['v2bacino',21350],['v2barcaremi',21640],['v2gatto',21960,'#8a8a90'],['v2lampione2',22100],['v2varco',22270]
];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'venezia2',name:'Venezia 2 · Dalla Ferrovia alla Giudecca',width:W1,sky:['#9aa6c8','#f2c0c4','#ffe0cc'],gt:372,gr:['#c9c3b0','#9a9482'],chord:[196,246.9,293.7,370],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerLife)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da venezia2.txt) --- */
(function(){
const TOPX_V2={
v2_polo:[
["Chi sei e dove sei nato?","Marco Polo, nato a Venezia nel 1254. Mio padre Niccolò e mio zio Matteo erano mercanti e passarono molti anni in Oriente, quando io ero ancora un ragazzino. Sono cresciuto fra i magazzini e le barche, e il mare l’avevo nel sangue."],
["Quando sei partito?","Nel 1271, a diciassette anni. Partii con mio padre e mio zio verso la corte del Gran Khan Kublai, che loro avevano già incontrato. Fu un viaggio lunghissimo, per mare e per terra, fra deserti e montagne altissime."],
["Quanto è durato il viaggio?","Ventiquattro anni: tornai a Venezia nel 1295. Si dice che i parenti non ci riconobbero più, vestiti come eravamo e con la faccia scurita dal sole. Capisci, Pierpaolo, ero partito ragazzo e tornavo uomo fatto."],
["Cosa hai visto laggiù?","Città grandissime, strade dritte, ponti, mercati pieni di sete e di spezie. Ho visto la carta usata come moneta, e certe pietre nere che bruciavano: oggi le chiamate carbone. Ho scritto tutto, o quasi, e molti non mi credevano."],
["Come è nato il libro dei tuoi viaggi?","Nel 1298 fui fatto prigioniero dai genovesi dopo una battaglia navale, a Curzola. In carcere conobbi uno scrittore, Rustichello da Pisa, e gli dettai i miei ricordi. Fu così che nacque il libro che voi chiamate \"Il Milione\"."],
["Perché \"Il Milione\"?","Eh, nessuno lo sa bene. Si dice che venga da \"Emilione\", il soprannome della mia famiglia; altri pensano che fosse per i milioni di racconti, o di bugie, che dicevo. Io preferisco non sbilanciarmi, caro mio."],
["È vero che hai portato gli spaghetti dalla Cina?","Ah, questa mi fa ridere! È una storia che vi raccontate, ma non è vera: la pasta in Italia si mangiava già. Dalla Cina, caso mai, ho raccontato la carta moneta, il carbone e le sete."],
["Com’era Venezia ai tuoi tempi?","Piena di navi, di magazzini e di mercanti da tutto il mondo: spezie, sete, legni, sale. Il centro era Rialto, qui vicino, e il cantiere dell’Arsenale lavorava giorno e notte. Alla fine del Duecento si ordinò anche ai vetrai di spostare le fornaci a Murano, per paura degli incendi."],
["Dove abitavi?","Qui, in questa zona di Cannaregio, vicino a San Giovanni Crisostomo. Mi dicono che le case della mia famiglia bruciarono nel Cinquecento, e che lì vicino c’è un teatro. Questa corte, però, porta ancora il mio soprannome: che soddisfazione!"],
["Cosa ti sorprende di più della Venezia di oggi?","Mi dicono che un aeroporto porta il mio nome! E poi barche che corrono senza remi né vele, e gente con una scatoletta in mano che parla da sola. Ma il silenzio delle calli, la sera, e l’acqua che sale e scende: quello è come prima."],
["Com’è finita la tua vita?","Morii a Venezia, nel gennaio del 1324, a quasi settant’anni, con la mia famiglia accanto: ebbi tre figlie. Mi seppellirono nella chiesa di San Lorenzo, a Castello. Si dice che un amico, sul letto di morte, mi chiese di ritrattare, e io risposi che non avevo raccontato nemmeno la metà di quel che avevo visto."],
["Posso salutarti e proseguire la mia passeggiata?","Certo, ciò, va’ pure. Vai verso Rialto: a quest’ora il mercato del pesce è in pieno movimento! E ricordati: le cose più belle, spesso, bisogna vederle prima di crederci."]
],
v2_vivaldi:[
["Chi sei e dove sei nato?","Antonio Vivaldi, nato a Venezia il 4 marzo 1678, qui a Castello. Mio padre era barbiere e violinista, ed è stato lui a mettermi in mano l’archetto. Mi chiamano \"il Prete Rosso\", per via dei capelli."],
["Com’è stata la tua nascita?","Si racconta che nacqui durante un terremoto, e che la levatrice, temendo per me, mi battezzò subito in casa. Ero gracile e avevo un affanno al petto: oggi lo chiamereste asma. Eppure ho vissuto sessantatré anni, ostrega!"],
["Perché sei prete e musicista?","Mi ordinarono sacerdote nel 1703, a venticinque anni. Ma dissi messa poche volte, perché il respiro mi mancava all’altare. La musica, per fortuna, si suona anche con il fiato corto."],
["Cos’è la Pietà?","Un ospedale, come si diceva allora, cioè un ricovero per i bambini abbandonati, fondato nel 1346, qui accanto. Le bambine imparavano un mestiere o, se avevano talento, la musica: diventavano le \"figlie di coro\". Io ne fui maestro di violino dal 1703."],
["Come suonavano queste ragazze?","Benissimo! Suonavano violini, violoncelli, organi, oboi, e cantavano, nascoste dietro le grate, senza farsi vedere dal pubblico. Da tutta Europa si veniva a sentirle. Per loro ho scritto quasi tutta la mia musica sacra e tanti concerti."],
["Cosa sono \"Le quattro stagioni\"?","Quattro concerti per violino: \"Primavera\", \"Estate\", \"Autunno\" e \"Inverno\", stampati nel 1725 in una raccolta intitolata \"Il cimento dell’armonia e dell’invenzione\". Con la musica ho voluto raccontare il canto degli uccelli, il temporale, la caccia, il gelo. Mi dicono che oggi si sentono ovunque, perfino al telefono!"],
["Quanto hai scritto?","Tanto, caro mio: più di cinquecento concerti, e poi opere per il teatro e musica per le chiese. Scrivevo in fretta, perché la testa correva più veloce della penna. I miei amici dicevano che sembravo sempre in ritardo."],
["Com’era Venezia ai tuoi tempi?","Una festa! Teatri, caffè in Piazza, gondole con le lanterne, e un Carnevale che durava mesi, con le maschere in ogni calle. Qui sulla riva, la sera, si sentivano suonare i violini da ogni finestra."],
["Perché hai lasciato Venezia?","Viaggiai molto, a Mantova, a Roma, in tante città dove mi chiamavano per le mie opere. Nel 1740 partii per Vienna, dove speravo nella protezione dell’imperatore. Fu il mio ultimo viaggio."],
["Come ti sembra Venezia oggi?","Una meraviglia: la chiesa qui accanto, che io non ho mai visto finita, perché la completarono nel 1761, dopo la mia morte; le barche a motore; la gente che porta il mio nome sui manifesti. Ogni sera, mi dicono, qualcuno suona le mie \"Stagioni\" qui a due passi: Dio mi perdoni, che gioia!"],
["Come è finita la tua vita?","Morii a Vienna il 28 luglio 1741, lontano da casa, con un funerale molto semplice. Non parliamone troppo: la musica è rimasta, e mi fa piacere che dopo tanti secoli ci sia ancora chi l’ascolta."],
["Posso salutarti e proseguire la mia passeggiata?","Certo, Pierpaolo, va’ pure. Attraversa il bacino verso la Giudecca: di notte, da lì, Venezia è un concerto di luci. Io resto qui a canticchiare un motivo prima che cali il buio."]
],
v2_marta:[
["Chi sei e dove sei nata?","Marta, nata a Cannaregio, qui dietro. Mio padre faceva il barcaiolo, e io da piccola mi addormentavo con il rumore dell’acqua. Guido i vaporetti da quasi vent’anni, e ancora oggi non mi stanco."],
["A che ora cominci a lavorare?","Alle cinque e qualcosa, quando la città dorme ancora. Prendo il turno con la nebbiolina, i pendolari assonnati, i pescivendoli e i fornai. Mi piace: a quest’ora Venezia è un posto per veneziani."],
["Perché si chiama vaporetto?","Il nome viene dai primi battelli a vapore dell’Ottocento: oggi vanno a motore, ma il nome è rimasto. Sono gli autobus dell’acqua: i veneziani li prendono per andare a scuola, al lavoro, al mercato. Altro che gita turistica!"],
["Cos’è la linea 1?","È la \"lenta\": parte da Piazzale Roma e percorre tutto il Canal Grande fermandosi a quasi ogni imbarcadero, fino al Lido. Per i turisti è la gita più bella della città; per me è il pendolare di tutti i giorni. Si ride, ma è la verità."],
["Com’è il Canal Grande da guidare?","Lungo circa 3,8 chilometri, a forma di S, con le curve strette e il traffico di taxi, barche da carico, gondole e traghetti. Bisogna sempre guardare cosa arriva dall’altra curva. È come una danza: se tutti rispettano il passo, non si urta mai."],
["Quanti ponti ci sono sul Canal Grande?","Solo quattro: gli Scalzi, il Ponte della Costituzione, Rialto e l’Accademia. Per secoli, fino al 1854, c’era solo il Rialto: per questo i traghetti, le gondole che portano da una riva all’altra, esistono ancora."],
["Cosa sono quei pali nell’acqua?","Le briccole: gruppi di tre pali che segnano il canale dove si può passare. Se esci dalla fila, la laguna è bassa e ti incagli. Davanti ai palazzi, invece, i pali a strisce si chiamano \"pali da casada\": si dice che i colori siano quelli della famiglia di casa."],
["Le onde danno fastidio?","Eccome: le onde dei motori battono contro le fondamenta e le rovinano. Per questo ci sono limiti di velocità, e noi andiamo piano. Un buon capitano \"scivola\", non fa onde."],
["E con la nebbia come fai?","Con la nebbia, in autunno e in inverno, si guida con il radar e con le orecchie: sirene lontane, campane, il suono dell’acqua sulle pietre. Ti dico, Pierpaolo, è la parte più bella e più difficile del mestiere. Si va piano e si ascolta."],
["E quando c’è l’acqua alta?","Gli imbarcaderi galleggianti salgono con la marea, ma quando l’acqua è molto alta alcuni ponti diventano troppo bassi e il vaporetto non passa: allora cambiamo percorso. È l’unico caso in cui la città ti dice: \"oggi di qua non si passa\"."],
["Qual è la tua fermata preferita?","La Ca’ d’Oro: un palazzo gotico del Quattrocento, tutto trafori di pietra. Si chiama \"casa d’oro\" perché un tempo la facciata aveva dorature e colori. Oggi è un museo, ma dal vaporetto basta alzare gli occhi."],
["Posso salutarti e proseguire la mia passeggiata?","Certo, Pierpaolo, va’ pure! Scendi a piedi verso il Ghetto: a quest’ora la mattina è bella nelle calli. E se hai fame, poi, ci sono i cicheti. Bona zornada!"]
],
v2_bepi:[
["Chi sei?","Bepi, cioè Giuseppe, ma qui sono Bepi per tutti. Sono nato a Castello e vendo pesce da quando ero un mulo, cioè un ragazzo. Mio padre faceva lo stesso mestiere, e prima di lui suo padre: sempre a Rialto."],
["A che ora ti alzi?","Alle quattro e mezza! Il pesce arriva all’alba, dalle barche della laguna e da Chioggia, e va sistemato sul ghiaccio prima che arrivino le signore con il carrellino. Alle undici e mezza è già ora di lavare tutto."],
["Da quanto c’è il mercato?","Si dice da quasi mille anni: Rialto è sempre stato il cuore dei commerci. La loggia che vedi, in stile gotico, però è recente: è del 1907. Prima c’erano altri porticati, e tanto odore di pesce, uguale."],
["Cosa sono quelle lastre di marmo?","Sono le misure minime dei pesci: se è più piccolo, si rimette in acqua. Una regola vecchia e giusta. Un pescivendolo furbo non vende il piccolo: svuoterebbe il mare e domani non avrebbe più niente da vendere."],
["Quando è chiuso il mercato?","La domenica e il lunedì. Il lunedì non c’è pesce fresco, perché la domenica i pescatori riposano: e io con il pesce vecchio non gioco. Il martedì è il giorno delle grandi spese, tutti da noi!"],
["Che pesci si trovano in laguna?","Dipende dalla stagione! Ora, in autunno, ci sono le moeche, i granchi che hanno appena cambiato guscio e si friggono interi: una bontà. Poi seppie, sardine, canoce e folpeti, che sono i polpetti, e d’inverno le granseole, i granchi grossi."],
["Come si riconosce il pesce fresco?","L’occhio lucido e pieno, le branchie rosse, la pelle che brilla, e un odore di mare, non di \"pesce\". Se lo tocchi, la carne deve tornare su. E se il pescivendolo ti dice \"fresco\" e non ti guarda negli occhi, scappa, tosa!"],
["Cos’è il baccalà mantecato?","Una crema fatta con lo stoccafisso, il merluzzo seccato, battuto a lungo con l’olio, e servita sulla polenta: la trovi ai bàcari. Lo stoccafisso arrivò a Venezia, si racconta, nel 1432 con Pietro Querini, un nobile veneziano naufragato in Norvegia. Qui lo chiamiamo baccalà, anche se i puristi storcono il naso."],
["E le sarde in saor?","Sarde fritte e messe sotto cipolle, aceto, uvetta e pinoli: il \"saor\" è il sapore agrodolce. Si dice che servisse ai marinai per conservare il pesce in viaggio. A luglio, per il Redentore, senza sarde in saor non è festa!"],
["I gabbiani rubano il pesce?","Eh, sono i veri padroni del mercato! Prendono il pesce dal banco appena giri la testa. I gabbiani reali sono furbi come i veneziani: aspettano, guardano, e zac. Io faccio finta di niente, ma ho sempre un occhio in alto."],
["E con l’acqua alta come fai?","Si lavora con gli stivali! I banchi hanno le gambe alte e si mettono su dei supporti: cassette in alto, ghiaccio in alto, e si va avanti. Il mercato non si ferma, ci mancherebbe."],
["Posso salutarti e proseguire la mia passeggiata?","Va’ pure, mulo! Prima dai un’occhiata all’Erbaria, qui accanto: i carciofi e il radicchio dell’orto della laguna. E poi vai a mangiare qualcosa: bon apetito e bona zornada!"]
],
v2_rosanna:[
["Chi sei?","Rosanna, nata a San Polo: questo bàcaro lo gestisco da trent’anni. Qui entra di tutto: operai, avvocati, pensionati, turisti persi. A tutti dico la stessa cosa: \"Cossa te dò?\"."],
["Cos’è un bàcaro?","Una piccola osteria dove si beve e si mangia in piedi, due chiacchiere al banco, senza tovaglia e senza fretta. Si dice che la parola venga da Bacco, il dio del vino. Ma per me è la seconda casa."],
["Cos’è un’ombra?","Un bicchierino di vino: \"andar per ombre\" vuol dire fare il giro dei bàcari. Si racconta che i venditori di vino in Piazza San Marco spostassero il banco per stare all’ombra del campanile, e che da lì venga il nome. Io dico che l’ombra più bella è quella che si beve in compagnia."],
["Cosa sono i cicheti?","Gli stuzzichini del bancone: polpette, crostini, baccalà mantecato sulla polenta, sarde in saor, folpeti, uova sode con le acciughe. Se ne mangiano due o tre con l’ombra e fa pranzo. Si dice \"far un giro de cicheti\", e non ti alzi mai da lì senza aver chiacchierato."],
["E lo spritz com’è?","A Venezia si fa con il Select, un aperitivo rosso nato in città nel 1920 dai fratelli Pilla, a Castello: prosecco, Select, un goccio di soda e un’oliva verde. L’Aperol è di Padova! Si dice che lo spritz sia nato quando i soldati austriaci allungavano il vino con l’acqua frizzante: \"spritzen\", in tedesco, vuol dire spruzzare."],
["A che ora si va al bàcaro?","A mezzogiorno per lo spuntino, alle sei per l’aperitivo, e anche alle undici di mattina per l’ombra di mezza mattina. Per noi è un rito: dopo il lavoro due ciacole al banco, e poi a casa. Chi non fa un’ombra con gli amici, a Venezia, non è veneziano."],
["Cosa vuol dire \"ciacole\"?","Chiacchiere! A Venezia si \"fa ciacole\" per ore: sul ponte, nel campo, al bàcaro. Ci si conosce tutti, e se non ci si conosce si parla lo stesso. Qui le notizie viaggiano più svelte di un vaporetto."],
["Cos’è Campo San Polo?","Dopo San Marco è il campo più grande: lo pavimentarono nel 1493, e un tempo ci si facevano feste, mercati e, a Carnevale, le cacce al toro. Oggi ci giocano i bambini a pallone, mentre i nonni stanno sulle panchine e controllano tutto."],
["E i Frari qui vicino?","È la grande basilica dei francescani, con la pala dell’Assunta di Tiziano, dipinta nel 1518, sopra l’altare. Il pittore è sepolto lì! E c’è anche la tomba del compositore Monteverdi. Quando sono stanca entro un attimo a guardare l’Assunta: sembra che salga davvero."],
["E San Rocco?","Alla Scuola di San Rocco ci sono i dipinti di Tintoretto, tanti e così in alto che ti danno gli specchi per guardare i soffitti senza rompersi il collo. Fatti dare lo specchio, tosa! È una cosa che solo a Venezia si vede."],
["Che feste ci sono a novembre?","Il 2 si mangiano le fave dei morti, dolcetti di mandorle a forma di fava. L’11, San Martino, i bambini girano con pentole e coperchi a chiedere dolci e monetine, e si mangia il San Martino, un biscotto di frolla a forma di santo a cavallo. Il 21, la Salute: pellegrinaggio e castradina, una zuppa di montone e verza."],
["Posso salutarti e proseguire la mia passeggiata?","Va’ pure, caro! Ma prima mangia qualcosa: a stomaco vuoto a Dorsoduro non si arriva! Vai verso lo squero delle gondole, che dal vivo è tutta un’altra storia. Bon camin!"]
],
v2_alvise:[
["Chi sei?","Alvise, squerariol: cioè uno di quelli che lavorano allo squero, il cantiere delle gondole. Mio padre faceva il remèr, quello che costruisce i remi. Il legno, a casa nostra, era di famiglia."],
["Cos’è lo squero?","Il cantiere dove si costruiscono e si riparano le gondole. Questo di San Trovaso esiste dal Seicento, ed è uno dei pochi ancora attivi in città. Si dice che lo stile da chalet ricordi le case dei carpentieri del Cadore: legno e montagna, in mezzo all’acqua."],
["Com’è fatta una gondola?","Lunga circa undici metri, fatta con circa 280 pezzi di otto legni diversi, fra cui rovere, noce, larice, ciliegio e olmo. Ogni legno sta al suo posto: il noce per la forcola, il rovere per le parti più robuste. Nessun chiodo a caso."],
["Perché è storta?","Non è simmetrica: il lato sinistro è più largo e curvo del destro, così la barca non gira in tondo spinta da un remo solo, a destra. Il gondoliere voga da un lato solo, e la forma fa il resto. Sembra storta, ma è giusta."],
["Cos’è il ferro di prua?","La lama di ferro sulla prua: ha sei denti in avanti, uno per ogni sestiere, e uno dietro, per la Giudecca. Si dice che la curva in alto ricordi il corno del doge, e la forma a S il Canal Grande. A me piace che ogni pezzo racconti qualcosa."],
["Perché è nera?","Si dice che nel Seicento una legge contro il lusso imponesse il nero a tutte le gondole, per finirla con le gare di decorazioni. Oggi è nera e lucida come uno specchio. E con il nero, i difetti si vedono: chi lavora bene lo sa."],
["Cos’è la forcola?","È il sostegno del remo, scolpita in un unico pezzo di noce. Ogni gondoliere ha la sua, fatta su misura per il suo modo di vogare: ha più curve e incavi, e permette di vogare in tanti modi. Un pezzo di arte, altro che arredo."],
["Quanto ci vuole a costruirne una?","Mesi di lavoro, a mano e con pochi attrezzi. Nessuna fretta: una gondola, se la fai bene, dura per decenni. Ogni anno tiriamo su quelle vecchie, le controlliamo, le ritocchiamo."],
["Quante gondole ci sono oggi?","Poche, rispetto a una volta: un tempo erano migliaia, oggi poche centinaia. Ma le gondole sono come i veneziani: poche, ma ostinate. Finché c’è chi voga, noi lavoriamo."],
["Cosa sono le Zattere, qui davanti?","La lunga riva sul canale della Giudecca. Si dice che il nome venga dalle zattere di legname che arrivavano qui e venivano scaricate. Noi dello squero siamo grati: senza zattere, niente legno!"],
["E la grande chiesa in fondo?","La Salute: i veneziani la fecero dopo la peste del 1630-31, come ringraziamento. Il 21 novembre andiamo tutti in pellegrinaggio su un ponte di barche sul Canal Grande. Io porto una candela per i miei vecchi, come tanti."],
["Posso salutarti e proseguire la mia passeggiata?","Va’ pure, Pierpaolo. Attraversa il Ponte dell’Accademia, che è tutto di legno come una barca, e vai verso San Marco. E se senti odore di vernice, sai dov’è la tua gondola."]
],
v2_mario:[
["Chi sei?","Mario, nato a Cannaregio, cameriere da quarant’anni. Servo il caffè in Piazza e non ho mai visto due giorni uguali. Fra la gente che passa, la luce che cambia e l’acqua che arriva, c’è sempre qualcosa di nuovo."],
["Cos’è il Florian?","Il caffè è stato aperto il 29 dicembre 1720 da Floriano Francesconi, con il nome \"Alla Venezia Trionfante\"; ma i veneziani lo chiamarono subito Florian. È il caffè più antico d’Italia ancora in attività! Qui sotto è passata mezza storia."],
["Cosa c’è dentro?","Sale piccole con specchi, dipinti, divanetti di velluto, decorate nell’Ottocento. Ogni sala ha il suo carattere, il suo odore di caffè e di legno antico. A novembre i veneziani ci vengono per la cioccolata calda."],
["Come si serve in Piazza?","Con il vassoio d’argento sul palmo, camminando in mezzo alla folla senza far cadere niente: è un’arte. E poi ci sono le orchestrine sui palchetti dei caffè, che suonano valzer e musica da film. Noi camerieri balliamo senza saperlo."],
["Il caffè in Piazza costa caro?","Eh, si paga il tavolino e la vista: la Basilica davanti e la musica. I veneziani il caffè lo prendono in piedi, al banco, in due sorsi, come in tutta Italia. Oppure se lo \"meritano\" con un’ombra al bàcaro: ognuno ha il suo rito."],
["E i piccioni?","Sono i padroni di casa da sempre. Una volta la Piazza era piena di gente che dava loro il mais; oggi il cameriere sa che il piccione è un cliente senza portafoglio. Basta non lasciargli il biscotto sul tavolino."],
["Cosa succede con l’acqua alta in Piazza?","La Piazza è il punto più basso della città: sopra gli 80 centimetri si allaga. Suonano le sirene, si montano le passerelle, e noi sistemiamo i tavolini nei punti più alti. In Basilica l’acqua entra prima: già con circa 65 centimetri bagna l’ingresso."],
["Cos’è il Campanile?","Alto 98 metri e mezzo, i veneziani lo chiamano \"el paròn de casa\", il padrone di casa. Il 14 luglio 1902 crollò all’improvviso, ma lo ricostruirono \"com’era, dov’era\" e lo inaugurarono nel 1912. Si dice che l’unica vittima sia stato il gatto del custode."],
["E la Torre dell’Orologio?","La torre azzurra e oro sopra l’arco, con i due Mori di bronzo che battono le ore con il martello sulla campana. Io mi regolo con loro, anche se ho l’orologio al polso. Un cameriere in ritardo, in Piazza, non è un cameriere!"],
["Perché la Piazza è così famosa?","Perché è l’unica che si chiama \"piazza\": tutte le altre, a Venezia, sono \"campi\". Si dice che Napoleone l’abbia chiamata il più bel salotto d’Europa. Io dico che è un salotto affollato, ma comodo per lavorare."],
["Cosa fai quando finisci il turno?","Vado a bere un’ombra con i colleghi, in un bàcaro lontano dalla Piazza, dove nessuno ti chiede un caffè. Due ciacole, un cicheto, e a casa. Dopo una giornata così, il silenzio di una calle è un lusso."],
["Posso salutarti e proseguire la mia passeggiata?","Con piacere, sior Pierpaolo! Vada verso la Riva, a est, e guardi il sole che cala sul bacino. Se torna, il tavolino è sempre libero per lei: servo volentieri."]
],
v2_nicoletta:[
["Chi sei?","Nicoletta, nata alla Giudecca. Di giorno faccio la maestra elementare, la sera e la domenica remo con il mio gruppo. Sono cresciuta con l’acqua davanti alla porta di casa: per me remare è come camminare."],
["Cos’è la voga alla veneta?","Si voga in piedi, con la faccia in avanti, con un solo remo appoggiato alla forcola: si spinge con tutto il corpo e si guarda dove si va. È un modo di vogare solo veneziano, che si usa per le gondole e per tante altre barche. Ci vuole equilibrio, e un po’ di cocciutaggine."],
["Che barche si usano?","Il sandolo, il pupparino, la caorlina e tante altre, ognuna con il suo uso. La caorlina, per esempio, è una barca lunga e solida, che può avere anche sei rematori. Con una caorlina si fa squadra: se uno sbaglia, sbagliano tutti."],
["Quando si fanno le regate?","In estate ce ne sono più di cento. La più importante è la Regata Storica, la prima domenica di settembre sul Canal Grande, con un corteo di barche in costume e poi la gara vera. Ogni veneziano ha il suo preferito."],
["Cos’è la Vogalonga?","Una volta l’anno, in primavera, si fa una lunga remata di circa trenta chilometri nella laguna, con centinaia di barche di tutti i tipi. Non è una gara: si va per il gusto di remare. Alla fine si arriva con le braccia di gelatina e il cuore pieno."],
["E le Befane?","Il 6 gennaio, nella regata delle Befane, i rematori si vestono da befane, con gonne e scialli, e remano sul Canal Grande. Si ride tantissimo, e fa un freddo cane. Una delle regate più allegre dell’anno."],
["Cos’è il Redentore?","La festa più amata dai veneziani: la terza domenica di luglio. Si ricorda la fine della peste del 1575-77, a cui seguì la costruzione della chiesa di Palladio. Il sabato sera tutti in barca nel bacino con la cena e i fuochi d’artificio, e un ponte di barche unisce le Zattere alla Giudecca."],
["Cosa si mangia al Redentore?","Ognuno porta le sue specialità dalla cucina: sarde in saor, pasta fatta in casa, pesce fritto, vino fresco. Si mangia sulle barche, a lume di lanterna, aspettando i fuochi. Chi non ha la barca, trova un posto sulla riva."],
["Com’è la vita di tutti i giorni, qui in città?","Tutto sull’acqua! I miei alunni vanno a scuola a piedi lungo la riva o con il vaporetto, e le gite sono quasi sempre in barca. Anche le ambulanze, i pompieri, la raccolta dei rifiuti e i traslochi vanno in barca. Per questo la Giudecca, più calma, mi sembra un paese."],
["Com’è la Giudecca?","Una lunga isola tranquilla di fronte a Venezia: case basse, orti dietro i cancelli, gatti ovunque, poco turismo, e ci si saluta tutti. In fondo c’è il Mulino Stucky, un mulino per la farina finito nel 1895, oggi un albergo. Dalla riva si vede tutta Venezia come in una cartolina."],
["Cos’è l’acqua alta?","In autunno e in inverno la marea sale: suonano le sirene, si montano le passerelle, e in ogni casa ci sono gli stivali di gomma vicino alla porta. Dal 2020, alle bocche di porto, ci sono le paratoie mobili del MOSE, che si alzano quando la marea prevista è molto alta. Il record, 194 centimetri, è del 4 novembre 1966."],
["Posso salutarti e proseguire la mia passeggiata?","Dai, vai! Cammina lungo la riva fino a due briccole che escono dall’acqua e guarda bene la superficie. Se vedi una strada di luce... seguila."]
]
};
Object.assign(TOPX,TOPX_V2);
})();
