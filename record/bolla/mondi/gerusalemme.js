/* ---------- GERUSALEMME · Dal mercato al Monte degli Ulivi (Mahane Yehuda, Porta di Jaffa e Cittadella, Quartiere Armeno e Monte Sion, Santo Sepolcro, Porta di Damasco, Via Dolorosa e suq, Quartiere Ebraico e Muro Occidentale, Spianata delle Moschee, Monte degli Ulivi di notte) ---------- */
/* Un'intera giornata da sinistra a destra: alba al mercato di Mahane Yehuda, mattina alla Porta di Jaffa e alla Cittadella, tarda mattina nel Quartiere Armeno e sul Monte Sion,
   mezzogiorno al Santo Sepolcro, primo pomeriggio alla Porta di Damasco, pomeriggio sulla Via Dolorosa e nel suq, tardo pomeriggio nel Quartiere Ebraico e al Muro Occidentale,
   tramonto sulla Spianata delle Moschee, notte sul Monte degli Ulivi. In fondo, davanti alla Porta d'Oro murata, c'è il varco.
   Testi, tappe e dialoghi vengono da gerusalemme.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico). Gli oggetti stanno in elementi.js (nomi che iniziano per "ge").
   Il tono per i temi dolorosi e per le tradizioni non provate è quello della scheda: descrittivo, sobrio e rispettoso verso tutte le comunità. */
(function(){
const GT=372,W1=22400;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln}=PR._rm;
const {nf,lit,casa,pie,dome,cono,merl,ulivo,colA,pers,gente}=PR._ge;
const md=(i,n)=>((i%n)+n)%n;
const Z=[0,2300,4800,7200,9900,11900,14300,16700,18900,W1+400];   /* inizio di ognuna delle 9 zone */
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
let TT=0;
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
const D={
 "INTRO": "Gerusalemme, dall’alba alla notte. Parti dal mercato di Mahane Yehuda, quando i banchi si aprono fra spezie e pane; poi la Porta di Jaffa ti porta dentro le mura, accanto alla Cittadella. Nella tarda mattina i vicoli del Quartiere Armeno e la collina del Monte Sion; a mezzogiorno la basilica del Santo Sepolcro, dove diverse chiese condividono lo stesso tetto. Nel primo pomeriggio la Porta di Damasco ti apre il suq e la Via Dolorosa; poi il Quartiere Ebraico e le grandi pietre del Muro Occidentale. Al tramonto la Spianata delle Moschee brilla di oro e di piastrelle; a notte sali al Monte degli Ulivi, fra i vecchi olivi del Getsemani, a guardare la città illuminata. Il tempo qui si piega: gli abitanti di ogni epoca ti vengono incontro, e la città è quella di oggi.",
 "LKTXT": [
  "Il Mahane Yehuda, per tutti \"lo shuk\": il grande mercato nato alla fine dell’Ottocento come Shuk Beit Yaakov, di fronte al quartiere di Mahane Yehuda, fondato nel 1887. Alla fine degli anni Venti le autorità del Mandato britannico costruirono i banchi permanenti e le coperture. Oggi ha più di duecentocinquanta venditori.",
  "Il mercato ha due anime: la parte coperta, lungo la via Eitz Chaim, e quella all’aperto, lungo la via Mahane Yehuda. A ovest c’è anche il Mercato Iracheno, costruito nel 1931 e chiamato così per i tanti commercianti ebrei di origine irachena.",
  "Ai banchi di spezie la gente annusa prima di comprare: cumino, paprika, zafferano, sumac, miscele per il pane e per le zuppe. Accanto ci sono la halva a blocchi, i datteri, le noci e le caramelle di mille colori.",
  "Negli ultimi anni lo shuk è diventato anche un ritrovo serale, con più di venti bar, una decina di ristoranti e musica dal vivo. La musica forte, però, dopo le undici di sera è vietata.",
  "La Porta di Jaffa, costruita nel 1538 sotto Solimano il Magnifico come parte delle nuove mura. In ebraico si chiama Sha’ar Yafo, in arabo Bab al-Khalil, \"porta dell’Amico\": l’Amico è Abramo, che la tradizione ricorda sepolto a Hebron. Nel 1898 le autorità ottomane aprirono una breccia nel muro accanto alla porta per far entrare a cavallo l’imperatore tedesco Guglielmo II.",
  "La Cittadella, accanto alla Porta di Jaffa: una fortezza costruita e ricostruita da molte epoche, con una base che si ritiene erodiana. Si dice che i bizantini la chiamarono \"Torre di Davide\" credendo che fosse stata costruita dal re; il nome è rimasto. Oggi dentro c’è un museo sulla storia della città; il suo minareto ottomano si vede da lontano.",
  "Le mura attuali furono costruite intorno al 1537-1541 sotto Solimano il Magnifico: circa quattro chilometri, alte in media dodici metri, con trentaquattro torri di guardia e sette porte principali aperte al traffico. Si attribuiscono all’architetto ottomano Mimar Sinan o al suo ufficio. La città vecchia dentro occupa meno di un chilometro quadrato.",
  "Le ceramiche armene sono uno dei tratti più riconoscibili di Gerusalemme: nel 1919 le autorità britanniche invitarono il ceramista armeno David Ohannessian a restaurare le piastrelle cinquecentesche della Cupola della Roccia; poi aprì una bottega sulla Via Dolorosa. Il progetto non fu completato, ma da allora i laboratori armeni sono rimasti: oggi ce ne sono sei, quasi tutti nei quartieri Cristiano e Armeno.",
  "Nel Quartiere Armeno, dove gli armeni vivono da molte generazioni, c’è la cattedrale dedicata a San Giacomo, con il convento e i cortili che la circondano. Il quartiere è piccolo, silenzioso e chiuso, e ha un’atmosfera diversa da quella degli altri.",
  "Appena fuori dalla Porta di Sion c’è il Monte Sion, una collina piena di luoghi legati alla tradizione. L’Abbazia della Dormizione, benedettina, fu completata nel 1910. Il Cenacolo è il luogo che la tradizione indica per l’Ultima Cena e, secondo i cristiani, per la Pentecoste: sotto i governanti musulmani fu trasformato in moschea nel 1552. Una tradizione antica indica qui anche la tomba del re Davide.",
  "La Porta di Sion, una delle sette porte aperte delle mura: la sua pietra porta ancora i segni dei combattimenti del 1948. Un luogo da attraversare con sobrietà, ricordando chi ci ha combattuto e chi ci ha vissuto.",
  "Il cortile davanti al Santo Sepolcro: qui si entra nella basilica che tradizionalmente ricorda il luogo della crocifissione e della sepoltura di Gesù. La chiesa originale fu fondata dall’imperatore Costantino nel 335. Sulla facciata, sul davanzale di una finestra del secondo piano, c’è una piccola scala di legno che non si muove da almeno trecento anni.",
  "La \"scala immobile\", appoggiata a una finestra della facciata, esiste almeno dagli anni Venti del Settecento: la prima incisione che la mostra è del 1728. Non si muove perché la basilica è condivisa da più chiese e, secondo l’accordo dello \"Status Quo\", nulla può cambiare senza il consenso di tutte. La finestra appartiene alla Chiesa armena apostolica.",
  "Dentro la basilica, sotto la grande cupola, c’è l’Edicola, il piccolo edificio che custodisce il luogo venerato come la tomba di Gesù. Fu costruita nel 1810 e restaurata fra il 2016 e il 2017, dopo i lavori di quasi nove mesi. La basilica fu distrutta, ricostruita e danneggiata più volte: nel 614 da un incendio persiano, nel 1009 dal califfo al-Hakim, e nel 1808 da un grave incendio. I lavori dei Crociati la completarono nel 1149.",
  "Nel Santo Sepolcro convivono più comunità: i custodi principali sono la Chiesa greco-ortodossa, quella armena apostolica e quella cattolica (rappresentata dai francescani); copti, etiopi e siriaci hanno responsabilità minori. L’equilibrio fra le comunità è regolato dallo Status Quo, confermato nel 1852. Da generazioni sono due famiglie musulmane di Gerusalemme ad aprire e chiudere ogni giorno le porte della basilica.",
  "La Porta di Damasco, in arabo Bab al-Amud, la \"porta della Colonna\": da qui partiva la strada per Nablus e per Damasco. Dentro la piazza interna c’era una grande colonna romana con sopra la statua dell’imperatore Adriano. È l’unica porta della città in cui i merli sono sostituiti da piccole statuette di pietra, ed è il cuore del commercio della Gerusalemme araba.",
  "La Porta dei Leoni, sul lato orientale: i due \"leoni\" scolpiti ai lati sono in realtà pantere, l’emblema del sultano mamelucco Baibars del Duecento. Si dice che Solimano fece costruire le mura dopo aver sognato dei leoni pronti a divorarlo se non lo avesse fatto: una leggenda che spiega il nome.",
  "La Porta d’Oro, sul lato est, che dà sulla Spianata. In ebraico si chiama Sha’ar HaRahamim, \"porta della Misericordia\". È murata: i governanti musulmani la chiusero molti secoli fa, e da allora non si apre.",
  "La Via Dolorosa: circa cinquecento metri che i cristiani percorrono per ricordare il cammino di Gesù verso la crocifissione. Le prime nove stazioni sono lungo la strada, le ultime cinque dentro il Santo Sepolcro. Si cammina qui dal IV secolo; fra il Trecento e il Cinquecento i francescani ne contavano otto, a cui ne furono aggiunte sei per arrivare alle quattordici della Via Crucis europea.",
  "L’Arco dell’Ecce Homo: fa parte di una porta dell’epoca dell’imperatore Adriano; ha preso il nome attuale nel Cinquecento, perché la tradizione colloca qui il momento in cui Pilato presentò Gesù alla folla. Ogni venerdì i francescani percorrono la strada in processione.",
  "Il suq: il labirinto di vicoli coperti dove si compra di tutto, dalle spezie ai tessuti, dai dolci ai souvenir. Si passa dal profumo di caffè a quello di cardamomo, e ogni bottega ha la sua storia. Si contratta con un sorriso.",
  "Fra i dolci più amati c’è la knafeh: una pasta sottile con formaggio filante, bagnata di sciroppo e servita calda. Si dice che nasca a Nablus, ma a Gerusalemme ognuno sostiene che la propria sia la migliore. Si mangia in piedi, con le dita e con un sorriso.",
  "Il Cardo, la grande strada colonnata di epoca bizantina che attraversava Gerusalemme da nord a sud. Oggi un tratto è stato scavato e mostra colonne e lastre antiche fra negozi e bar, in un quartiere ricostruito in tempi recenti.",
  "La Hurva, \"la rovina\": una grande sinagoga del quartiere, con una cupola chiara e un arco aperto sulla piazza. Fu distrutta, lasciata in rovina per decenni e infine ricostruita: oggi è uno dei punti di riferimento del Quartiere Ebraico.",
  "Il Muro Occidentale, in ebraico HaKotel HaMa’aravi: un tratto del muro di sostegno della Spianata, lungo in tutto 488 metri, di cui circa 57 sono usati per la preghiera. Ha quarantacinque file di pietre: ventotto sopra il suolo e diciassette sotto. Per i musulmani è il Muro di al-Buraq; molti cristiani lo chiamano \"Muro del Pianto\". Molti vi infilano biglietti di preghiera nelle fessure: più di un milione ogni anno.",
  "A sinistra di chi guarda il Muro, l’Arco di Wilson, sotto il quale c’è una sala coperta per la preghiera, con una sezione per gli uomini e una per le donne. Qui si capisce quanto sia grande il muro e quanto sia profondo il suolo antico.",
  "La Spianata delle Moschee, per i musulmani Haram al-Sharif, il \"Nobile Santuario\"; per gli ebrei Har HaBayit, il \"Monte del Tempio\". È un grande spazio aperto, sacro per ebrei, cristiani e musulmani. I visitatori non musulmani possono salire solo in orari stabiliti, non il venerdì, il sabato e nei giorni di festa musulmani; non possono entrare negli edifici né pregare.",
  "La Cupola della Roccia, un santuario ottagonale completato nel 691 per volontà del califfo omayyade Abd al-Malik, senza minareti. La sua cupola, di circa venti metri, fu ricoperta nel 1993 con circa ottanta chili d’oro. Le piastrelle esterne furono volute da Solimano il Magnifico, e i lavori durarono sette anni; molte sono state sostituite fra gli anni Cinquanta e Sessanta.",
  "La Moschea di al-Aqsa, \"la più lontana\": la grande moschea sul lato sud della Spianata, dalla cupola grigio argento. È il principale luogo di preghiera della Gerusalemme musulmana e si riempie nei giorni di festa. Si osserva da fuori, con rispetto e in silenzio.",
  "Dal Monte degli Ulivi, di fronte alla città vecchia, Gerusalemme si vede tutta insieme: le mura, la cupola d’oro, le cupole e i campanili dei quartieri, i tetti della città nuova più lontano. Al tramonto la pietra si fa rosa; di notte, le mura si illuminano.",
  "Il Getsemani, ai piedi del Monte degli Ulivi: un giardino con otto olivi molto antichi, curato dai francescani, che hanno la custodia del luogo dal Trecento. Alcuni studi hanno datato tre di questi alberi al XII secolo: si ritiene che discendano dalle radici del boschetto più antico.",
  "La Chiesa di tutte le Nazioni, progettata dall’architetto italiano Antonio Barluzzi e consacrata nel 1924: dodici nazioni contribuirono a costruirla, e ciascuna è ricordata in uno dei mosaici delle dodici cupole. Nella navata sud sono conservati, sotto vetro, pavimenti a mosaico del IV secolo.",
  "Davanti alla Porta d’Oro, la luce passa lo stesso."
 ],
 "NAME": {
  "ge_yossi": "Yossi, il venditore di spezie",
  "ge_nadia": "Nadia, la guida della Cittadella",
  "ge_garo": "Garo, il ceramista armeno",
  "ge_marco": "Fra’ Marco, il francescano",
  "ge_solimano": "Solimano il Magnifico",
  "ge_samir": "Samir, il pasticciere",
  "ge_dana": "Dana, l’archeologa",
  "ge_ibrahim": "Ibrahim, il custode dell’oliveto"
 },
 "GREET": {
  "ge_yossi": "Boker tov, Pierpaolo! Vieni, vieni, assaggia: qui si compra solo se si annusa prima. Sono Yossi, e questo banco era di mio padre. Sababa?",
  "ge_nadia": "Ahlan wa sahlan, Pierpaolo! Benvenuto a Gerusalemme. Io sono Nadia e questa è casa mia: ti faccio da guida, ma non ti prometto di farti arrivare in orario, habibi.",
  "ge_garo": "Parev, Pierpaolo. Entra, ma attento ai piatti: sono più fragili di un diplomatico. Sono Garo, la mia famiglia dipinge ceramiche da tre generazioni.",
  "ge_marco": "Pax et bonum, Pierpaolo! Che bello sentire un po’ d’italiano, qui in mezzo. Sono fra’ Marco, e se ti metti all’ombra ti racconto questa casa: ci vivono in tanti, e hanno tutti ragione.",
  "ge_solimano": "Selam, Pierpaolo. Dicono che qui il tempo si pieghi: lo trovo conveniente, perché mi permette di rivedere le mie mura. Io sono Solimano, e a Gerusalemme ho fatto costruire quasi tutto quello che vedi intorno.",
  "ge_samir": "Ahlan, ahlan, Pierpaolo! Tfaddal, siediti, assaggia: qui non si parla a stomaco vuoto. Sono Samir, e la mia knafeh è la migliore di Gerusalemme. Lo dico io, e anche mia madre.",
  "ge_dana": "Boker tov, Pierpaolo! O forse buonasera: quando si scava, il tempo non conta. Sono Dana, archeologa. Ti porto a vedere la Gerusalemme sotto la Gerusalemme: promesso che non ti faccio sporcare troppo.",
  "ge_ibrahim": "Masa al-khair, Pierpaolo. Siediti qui, che la città di notte si guarda meglio con calma. Sono Ibrahim: i miei ulivi stanno qui da prima di me, e dureranno più di me."
 }
};

/* ---- cielo: alba chiara e rosata, mattina azzurra e secca, mezzogiorno bianco, pomeriggio dorato, tramonto rosa e arancio, crepuscolo blu intenso, notte ---- */
const SKY=[[0,['#8aa0d0','#f8b8b8','#ffd8b0']],[1300,['#5aaaf0','#b4dcf6','#f6eed8']],[2300,['#3a96ec','#8ccaf6','#e0f0f8']],[4800,['#2e8ce6','#7cc0f2','#e4f2f6']],[7200,['#2a86e2','#78b8f0','#eaf2f4']],[9900,['#3a8cde','#94c4ea','#f6eed0']],[12000,['#4a8ad2','#a8c8e4','#f8e6b8']],[14300,['#5a82c4','#e8c090','#ffc880']],[16000,['#6a5a9c','#f0707a','#ffb060']],[17200,['#7a4a8c','#e8607a','#ffa060']],[18300,['#3a3a8a','#c05a80','#f89a68']],[19200,['#1a2c78','#3a4a98','#8a5a8a']],[20200,['#0a1040','#14206a','#3a3a7a']],[22800,['#060a30','#101a58','#2a2e6a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};

/* ---- facciate di strada, zona per zona ---- */
const MIELE=['#e6d2a2','#dcc592','#eddcb0','#d6bc86','#e8d8b4'],ROSA=['#e8cfae','#e0c0a0','#ecd4b4'];
function fac(g,x,w,h,i,st,wx){const k=A.getDK(),r=hr(i*3);
 if(st==1){/* mercato: case basse di pietra chiara con la lamiera, insegne di panetterie */
  casa(g,x+4,w-30,h-40,i,k,{wall:MIELE[md(i,5)],roof:md(i,2)?'tin':'f',gt:md(i,3)==0?'arc':'shop',sc:['#c8402a','#2a62a8','#2a7a5a'][md(i,3)],sh:'#2a6a5a'});
  if(r>.4){rect(g,'#2a2a2e',x+w-70,GT-96,40,12);rect(g,'#f4ecd0',x+w-67,GT-94,34,8)}return}
 if(st==2){/* mura e vicoli coperti della Porta di Jaffa */
  if(r>.84){ulivo(g,x+w*.5,GT,1.2,TT);return}
  casa(g,x+4,w-30,h+10,i,k,{wall:MIELE[md(i,5)],roof:md(i,3)==0?'d':'f',gt:md(i,2)?'door':'arc',sh:'#6a4a2a'});return}
 if(st==3){/* Quartiere Armeno: alti muri chiari senza finestre, portali, cupolini */
  if(r>.86){PR.geCipresso(g,x+w*.5,GT,150);return}
  casa(g,x+4,w-24,h+50,i,k,{wall:ROSA[md(i,3)],sparse:1,roof:md(i,3)==1?'d':'f',gt:'door',sh:'#2a4a7a',cor:PS3x});return}
 if(st==4){/* Santo Sepolcro: pietra consumata, archi, campanili e cupole di conventi */
  casa(g,x+4,w-24,h+60,i,k,{wall:['#cdb88a','#c4ae80','#d4c094'][md(i,3)],sparse:1,roof:md(i,4)==2?'d':'f',gt:md(i,2)?'arc':'door',sh:'#5a3a2a',cor:'#a89460'});return}
 if(st==5){/* Porta di Damasco: case del suq sopra la rampa */
  if(r>.88){ulivo(g,x+w*.5,GT,1.2,TT);return}
  casa(g,x+4,w-30,h+20,i,k,{wall:MIELE[md(i,5)],roof:md(i,4)==0?'d':'f',gt:'shop',sc:['#e8a02a','#2a7a5a','#c8402a'][md(i,3)],sh:'#2a6a5a'});return}
 if(st==6){/* suq: facciate con insegne e tende */
  casa(g,x+4,w-26,h+40,i,k,{wall:['#d8c08a','#cfb47c','#e0cc9c'][md(i,3)],sparse:1,roof:'f',gt:md(i,3)==2?'arc':'shop',sc:['#c8402a','#2a62a8','#e8a02a','#8a4a9a'][md(i,4)],sh:'#6a4a2a'});return}
 if(st==7){/* Quartiere Ebraico: pietra chiara, sinagoghe con cupola, scavi */
  if(r>.84){PR.geCipresso(g,x+w*.5,GT,130);return}
  casa(g,x+4,w-26,h+20,i,k,{wall:['#efe2c0','#e8d8b0','#f2e8cc'][md(i,3)],roof:md(i,3)==0?'d':'f',gt:md(i,2)?'door':'arc',sh:'#2a4a7a'});return}
 if(st==8){/* Spianata: cipressi, ulivi, prati e arcate basse */
  if(r>.3){[PR.geCipresso,PR.geUlivo,PR.geCipresso,PR.gePino][md(i,4)](g,x+w*.5,GT,md(i,4)==1?1.1:140);return}
  casa(g,x+4,w-40,h-60,i,k,{wall:'#e8dcb8',roof:'f',gt:'arc'});return}
 /* 9 · Monte degli Ulivi: case basse di pietra, terrazze di ulivi, lanterne dei bar */
 if(r>.45){ulivo(g,x+w*.5,GT,1.2+hr(i)*.4,TT);return}
 casa(g,x+4,w-30,h-30,i,k,{wall:MIELE[md(i,5)],roof:md(i,2)?'f':'d',gt:md(i,2)?'door':'',sh:'#3a2a1c'})}
const PS3x='#b9a06a';

/* ---- livello 0: cielo, sole, luna, stelle, nuvole ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-18800)/2400,0,1);if(nt>0)for(let i=0;i<54;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/17900,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*250;
 if(xs<18200){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,17)}
 const mu=cl((xs-18800)/2400,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*210;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<1300?'rgba(252,206,214,.7)':xs<14300?'rgba(255,255,255,.8)':xs<17600?'rgba(255,170,140,.7)':'rgba(140,120,190,.4)';
 each(o-((t*4)%340)*.02,420,1,(x,i,r)=>{if(r>.4)return;nube(g,x+r*100,40+r*46,.6+r*.4,cc)});
 const fo=cl(1-xs/1300,0,1)*.3;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-11800)/1000,0,1)*cl((15400-xs)/900,0,1)*.12;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-15800)/800,0,1)*cl((18200-xs)/900,0,1)*.22;if(wg>.01){g.fillStyle='rgba(255,120,90,'+wg+')';g.fillRect(0,0,480,GT+4)}}

/* ---- livello 1: le colline e la città nuova, le mura con la Cittadella, le cupole del Santo Sepolcro, la cupola d'oro, il Monte degli Ulivi con la città illuminata ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 /* colline di pietra chiara con la città nuova (zone 1-2) */
 const ct=env(1400,4200);if(ct>.02){g.globalAlpha=ct;const sx=fx(1400);g.fillStyle=dim('#c8b890');g.beginPath();g.moveTo(sx-500,hz+34);for(let q=0;q<=34;q++)g.lineTo(sx-500+q*30,hz-10-12*Math.abs(Math.sin(q*.5))-5*Math.sin(q*1.7));g.lineTo(sx+520,hz+34);g.closePath();g.fill();
  for(let q=0;q<26;q++){const bx=sx-470+q*38,bh=14+hr(q*3)*28;rect(g,dim(['#ece0c0','#e0d0aa','#f2e8cc'][q%3]),bx,hz-bh-6,24,bh+8);rect(g,'rgba(0,0,0,.12)',bx+16,hz-bh-6,8,bh+8)}g.globalAlpha=1}
 /* le mura con la Cittadella e il suo minareto (zone 2-3) */
 const cw=env(4000,4600);if(cw>.02){g.globalAlpha=cw;const sx=fx(4000);rect(g,dim('#e0cc9c'),sx-200,hz-22,420,40);for(let q=0;q<18;q++)rect(g,dim('#e0cc9c'),sx-196+q*24,hz-30,12,8);[[-110,26],[40,30],[150,24]].forEach(b=>{rect(g,dim('#d8c28e'),sx+b[0],hz-22-b[1],26,b[1]+30);for(let q=0;q<3;q++)rect(g,dim('#d8c28e'),sx+b[0]+q*9,hz-30-b[1],6,8)});rect(g,dim('#efe0b8'),sx+70,hz-92,7,80);poly(g,dim('#8a929a'),[[sx+66,hz-92],[sx+73.5,hz-112],[sx+81,hz-92]]);dome(g,dim('#d0c8b8'),sx-30,hz-28,20,14);g.globalAlpha=1}
 /* le cupole e i campanili dei quartieri e del Santo Sepolcro (zone 3-5) */
 const sp=env(8600,6400);if(sp>.02){g.globalAlpha=sp;const sx=fx(8600);rect(g,dim('#d8c8a0'),sx-240,hz-14,520,30);[[-190,16,20],[-120,22,14],[-40,30,26],[30,14,18],[110,26,22],[190,20,16]].forEach((b,i)=>{rect(g,dim(i%2?'#e0d0aa':'#d4c298'),sx+b[0]-b[1],hz-14-b[2],b[1]*2,b[2]+14);if(i%2==0)dome(g,dim(['#8a8e94','#e8dcc0','#8a8e94'][i/2|0]),sx+b[0],hz-14-b[2],b[1]*.8,b[1]*.7)});rect(g,dim('#cdb88a'),sx+70,hz-78,10,66);cono(g,dim('#8a8e94'),sx+75,hz-78,18,16);dome(g,dim('#8a8e94'),sx-40,hz-44,30,22);g.globalAlpha=1}
 /* la grande cupola d'oro della Spianata, lontana (zone 7-8) */
 const dm=env(17300,4600);if(dm>.02){g.globalAlpha=dm;const sx=fx(17300);rect(g,dim('#d8c8a0'),sx-300,hz-12,600,28);for(let q=0;q<26;q++)rect(g,dim('#d8c8a0'),sx-296+q*23,hz-20,11,8);for(let q=0;q<8;q++)ar(g,dim('#e0d4b0'),sx-240+q*4,hz-12,0,0);rect(g,dim('#2a62a8'),sx-30,hz-40,60,28);dome(g,dim('#e6b83c'),sx,hz-40,34,32);glow(g,sx,hz-56,90,'255,200,120',.4*(1-night*.4));rect(g,dim('#e0d4b0'),sx+110,hz-80,6,68);cono(g,dim('#8a929a'),sx+113,hz-80,14,12);dome(g,dim('#aeb4be'),sx-130,hz-12,24,16);g.globalAlpha=1}
 /* il Monte degli Ulivi e la città illuminata: mura gialle, cupola dorata, minareti, campanili (zona 9) */
 const mo=env(20800,6000);if(mo>.02){g.globalAlpha=mo;const sx=fx(20800);g.fillStyle=dim('#4a5a3a');g.beginPath();g.moveTo(sx-560,hz+34);for(let q=0;q<=28;q++)g.lineTo(sx-560+q*40,hz-8-10*Math.sin(q*.6)-6*Math.sin(q*1.9));g.lineTo(sx+560,hz+34);g.closePath();g.fill();
  rect(g,dim('#3a3a56'),sx-360,hz-26,720,46);for(let q=0;q<30;q++)rect(g,'rgba(255,214,120,'+(.5+.4*Math.sin(t*2+q))+')',sx-352+q*24,hz-24,14,3);
  for(let q=0;q<31;q++)rect(g,'#d8b050',sx-360+q*24,hz-32,12,7);
  rect(g,dim('#2a62a8'),sx-30,hz-70,60,40);dome(g,'#f0c04a',sx,hz-70,40,40);glow(g,sx,hz-80,120,'255,200,110',.7);glow(g,sx,hz-80,50,'255,240,190',.7);
  [[-250,66],[-200,52],[200,76],[260,56]].forEach((b,i)=>{rect(g,dim('#d8c8a0'),sx+b[0]-3,hz-b[1]-20,6,b[1]);cono(g,dim('#aeb4be'),sx+b[0],hz-b[1]-20,10,12);glow(g,sx+b[0],hz-b[1]-20,24,'255,214,130',.45)});
  [[-150,40],[120,36],[-310,30]].forEach((b,i)=>{rect(g,dim('#d8c8a0'),sx+b[0]-10,hz-b[1]-20,20,b[1]);dome(g,dim(['#8a8e94','#e8dcc0','#8a8e94'][i]),sx+b[0],hz-b[1]-20,12,10);glow(g,sx+b[0],hz-b[1]-20,28,'255,214,130',.4)});
  for(let q=0;q<50;q++)if(hr(q*7+3)>.35)rect(g,'rgba(255,214,140,'+(.4+.4*Math.sin(t*2+q))+')',sx-540+q*22,hz+2+hr(q)*26,2.4,2.4);g.globalAlpha=1}}

/* ---- livello 2: profili di case, mura, cupole e ulivi, zona per zona ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;
  const wins=(n,top)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+14+(q%4)*20,top+Math.floor(q/4)*14,6,5)};
  const house=(c,hh)=>{rect(g,dim(c),x+4,hz-hh,w-24,hh+10);rect(g,'rgba(255,255,255,.18)',x+4,hz-hh,4,hh+10);rect(g,dim('#b9a06a'),x,hz-hh-4,w-16,5);wins(6,hz-hh+10)};
  if(zz==1){house(['#ece0c0','#e0d0aa','#f2e8cc'][md(i,3)],40+r*30);if(hr(i*3)>.6){rect(g,dim('#8e969e'),x+10,hz-84-r*30,40,10)}}
  else if(zz==2||zz==5){rect(g,dim('#e0cc9c'),x,hz-48-r*14,w-6,58+r*14);merl(g,dim('#e0cc9c'),x,hz-48-r*14,w-6,9);if(hr(i*3)>.7)el(g,dim('#4a6a3a'),x+60,hz-26,26,24);wins(3,hz-30)}
  else if(zz==3){house(ROSA[md(i,3)],54+r*40);if(md(i,3)==1)dome(g,dim('#eadfc4'),x+40,hz-58-r*40,18,16)}
  else if(zz==4){house(['#cdb88a','#d4c094'][md(i,2)],50+r*34);if(hr(i*3)>.55)dome(g,dim('#8a8e94'),x+44,hz-54-r*34,22,18);else if(hr(i*3)>.35){rect(g,dim('#cdb88a'),x+40,hz-100-r*34,12,48);cono(g,dim('#8a8e94'),x+46,hz-100-r*34,16,14)}}
  else if(zz==6){house(['#d8c08a','#cfb47c','#e0cc9c'][md(i,3)],46+r*24);if(hr(i*3)>.65)dome(g,dim('#e8dcc0'),x+38,hz-50-r*24,16,14)}
  else if(zz==7){house(['#efe2c0','#e8d8b0'][md(i,2)],52+r*30);if(hr(i*3)>.6)dome(g,dim('#f6f2e8'),x+42,hz-56-r*30,20,16)}
  else if(zz==8){if(r>.45){const cx=x+50;poly(g,dim('#1d3a28'),[[cx-7,hz+6],[cx-8,hz-34],[cx,hz-84-r*30],[cx+8,hz-34],[cx+7,hz+6]])}else{el(g,dim('#7a9064'),x+50,hz-16,34,20);rect(g,dim('#5a4a3a'),x+48,hz-6,4,14)}}
  else{if(r>.5){el(g,dim('#6a7e56'),x+50,hz-18,40,22);rect(g,dim('#4a3a2a'),x+48,hz-6,4,14)}else{house(MIELE[md(i,5)],36+r*26);if(night>.1)for(let q=0;q<4;q++)rect(g,'rgba(255,200,110,.85)',x+10+q*14,hz-24,6,10)}}});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}

/* ---- livello 3: la strada, zona per zona (più, nella zona 6, la volta di pietra dei vicoli coperti) ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>110+hr(i*5)*40,170);
 each2(170,8,Z[1],Z[2],2,i=>120+hr(i*5)*40,160);
 each2(180,9,Z[2],Z[3],3,i=>130+hr(i*5)*40,170);
 each2(180,10,Z[3],Z[4],4,i=>120+hr(i*5)*40,170);
 each2(190,11,Z[4],Z[5],5,i=>110+hr(i*5)*40,170);
 each2(170,12,Z[5],Z[6],6,i=>100+hr(i*5)*40,160);
 each2(190,13,Z[6],Z[7],7,i=>110+hr(i*5)*40,170);
 each2(170,14,Z[7],Z[8],8,i=>100+hr(i*5)*40,160);
 each2(180,15,Z[8],Z[9],9,i=>90+hr(i*5)*40,170);
 /* i vicoli coperti: la volta con le aperture da cui entra la luce a strisce (zona 6) */
 if(o+480>Z[5]&&o<Z[6]){A.setDK(0);each(o,120,31,(x,i,r)=>{const wx=i*120;if(wx<Z[5]-20||wx>Z[6])return;rect(g,'#c8b07a',x,0,120,52+r*14);rect(g,'rgba(60,40,10,.2)',x,52+r*14,120,3);ar(g,'#8a7a52',x+6,128,108,92);if(r>.45){poly(g,'rgba(255,230,160,.2)',[[x+30,52],[x+66,52],[x+96,GT],[x+8,GT]]);poly(g,'rgba(255,240,190,.14)',[[x+40,52],[x+54,52],[x+66,GT],[x+34,GT]])}})}}

/* ---- vita: piccioni e tortore, passeri, rondoni, cornacchie grigie, pappagalli verdi, gatti, passanti, asini ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 /* piccioni e tortore che si alzano sulle piazze */
 const pg=cl((xs-300)/400,0,1)*cl((16800-xs)/400,0,1);
 if(pg>.05)for(let i=0;i<5;i++){const bx=((i*117+t*(46+i*6))%600)-60,by=70+hr(i*3)*100+Math.sin(t*2+i*2)*14,w=Math.sin(t*10+i)*3.4;g.strokeStyle='rgba(120,126,140,'+(.9*Math.min(1,pg))+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke();rect(g,'rgba(90,96,110,.9)',bx-2,by,5,3)}
 /* passeri fra i tavolini dei caffè */
 if(xs<17000)for(let i=0;i<3;i++){const bx=((i*171+t*(80+i*9))%620)-70,by=100+hr(i*5+2)*120+Math.sin(t*3+i)*10,w=Math.sin(t*16+i)*2;g.strokeStyle='rgba(90,66,40,.85)';g.lineWidth=1.8;g.beginPath();g.moveTo(bx-5,by+w);g.lineTo(bx,by);g.lineTo(bx+5,by+w);g.stroke()}
 /* rondoni sopra i tetti: scuri, veloci, ad arco */
 const rn=cl((xs-2400)/300,0,1)*cl((17200-xs)/400,0,1);
 if(rn>.05)for(let i=0;i<5;i++){const bx=((i*101+t*(120+i*14))%640)-80,by=40+hr(i*9+1)*90+Math.sin(t*2.4+i*3)*26,w=Math.sin(t*18+i)*3;g.strokeStyle='rgba(30,30,40,'+(.85*rn)+')';g.lineWidth=2;g.beginPath();g.moveTo(bx-9,by+w);g.quadraticCurveTo(bx-2,by-6,bx+9,by-2+w);g.stroke();g.beginPath();g.moveTo(bx-9,by-w);g.quadraticCurveTo(bx-2,by+4,bx+9,by-3);g.stroke()}
 /* cornacchie grigie sopra i tetti */
 const cr=Math.max(cl((xs-2300)/300,0,1)*cl((7000-xs)/300,0,1),cl((xs-16800)/300,0,1)*cl((19800-xs)/300,0,1));
 if(cr>.05)for(let i=0;i<3;i++){const bx=((i*143+t*(52+i*7))%640)-80,by=60+hr(i*4+1)*110+Math.sin(t*1.6+i*2)*16,w=Math.sin(t*7+i)*4;g.strokeStyle='rgba(110,112,120,'+cr+')';g.lineWidth=3;g.beginPath();g.moveTo(bx-11,by+w);g.quadraticCurveTo(bx-5,by-6,bx,by);g.quadraticCurveTo(bx+5,by-6,bx+11,by+w);g.stroke();rect(g,'rgba(30,30,36,'+cr+')',bx-2,by,6,3)}
 /* pappagalli verdi fra gli alberi dei giardini (Monte Sion, Spianata) */
 const pp=Math.max(cl((xs-5800)/300,0,1)*cl((7200-xs)/300,0,1),cl((xs-16800)/300,0,1)*cl((18400-xs)/300,0,1));
 if(pp>.05)for(let i=0;i<3;i++){const bx=((i*151+t*(70+i*8))%600)-60,by=90+hr(i*6+5)*90+Math.sin(t*2.8+i)*14,w=Math.sin(t*12+i)*3;g.strokeStyle='rgba(60,170,60,'+pp+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke();rect(g,'rgba(230,60,50,'+pp+')',bx+4,by-1,3,2);ln(g,'rgba(60,170,60,'+pp+')',2,[bx-2,by+1,bx-13,by+6])}
 /* passanti che camminano piano per le strade */
 [[300,2000,-14,0],[2500,4400,16,1],[9950,11800,-12,2],[11950,14200,13,3],[14400,16600,-11,4]].forEach((rg,ri)=>{for(let i=0;i<2;i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.3),wx=rg[0]+(((t*sp+i*span/2)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));const d=sp>0?1:-1,by=GT+24+i*10+(ri%2)*4;g.save();g.translate(px,by);g.scale(d*.6,.6);
  fig(g,0,0,t*2,{f:1,s:.7,ph:i+ri,skin:tn(['#e0b090','#d8a078','#c88a64'][(i+ri)%3]),top:tn(['#c8503a','#2a8a9a','#e8c04a','#4a6a3a','#8a4a9a'][(i*2+ri)%5]),bot:tn('#2a2a36'),hair:tn('#2a1a10')});g.restore()}})}

/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#d4cbb4','m'],[Z[1],Z[2],'#d2c4a4','j'],[Z[2],Z[3],'#d8c8a8','a'],[Z[3],Z[4],'#cfc0a0','s'],[Z[4],Z[5],'#d8c8a0','d'],[Z[5],Z[6],'#cdbf9c','q'],[Z[6],Z[7],'#e0d4b8','e'],[Z[7],Z[8],'#e4d8bc','p'],[Z[8],Z[9],'#8a7a60','o']];
 rect(g,'#d8c8a0',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const slabs=(bw0,add,al)=>{for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(90,60,20,.07)':'rgba(255,255,255,.05)',px,yy,bw-2,15);rect(g,'rgba(90,60,20,.14)',px,yy,1.3,17)}rect(g,'rgba(90,60,20,.1)',x0,yy+15,x1-x0,1.4)}};
  if(z[3]=='m'){/* lastre chiare del mercato, corsie coperte più scure, gocce d'acqua dei banchi */
   slabs(48,5,.12);rect(g,'rgba(60,40,10,.1)',x0,gt+30,x1-x0,50);for(let q=0;q<26;q++)el(g,'rgba(120,150,170,.3)',x0+((q*47)%ww),gt+40+hr(q)*90,10+hr(q+3)*10,2)}
  if(z[3]=='j'){/* selciato a ciottoli e rampa */
   for(let q=0;q<150;q++){const px=x0+((q*23)%ww),py=gt+8+hr(q*3)*136;el(g,hr(q)>.5?'rgba(255,255,255,.14)':'rgba(90,60,20,.14)',px,py,7+hr(q+2)*5,3.4)}slabs(40,4,.06)}
  if(z[3]=='a'){/* lastre in salita, scale in pietra */
   slabs(54,6,.1);for(let k=0;k<12;k++){const sx=((Math.floor((cam+x0)/160)+k)*160)-cam;if(sx>x1)break;for(let s=0;s<4;s++)rect(g,s%2?'rgba(255,255,255,.18)':'rgba(90,60,20,.16)',sx,gt+8+s*8,64,7)}}
  if(z[3]=='s'){/* lastre consumate e ciottoli del cortile */
   slabs(46,4,.1);for(let q=0;q<90;q++)el(g,'rgba(90,60,20,.13)',x0+((q*29)%ww),gt+12+hr(q*5)*130,6+hr(q)*5,2.6)}
  if(z[3]=='d'){/* gradini larghi, rampa e piazzetta */
   slabs(66,8,.12);for(let s=0;s<5;s++)rect(g,'rgba(255,255,255,'+(.08+s*.01)+')',x0,gt+10+s*28,x1-x0,3)}
  if(z[3]=='q'){/* lastre lucide dei vicoli, con le strisce di luce dall'alto */
   slabs(40,3,.14);for(let k=0;k<12;k++){const sx=((Math.floor((cam+x0)/120)+k)*120)-cam+30;poly(g,'rgba(255,232,170,.22)',[[sx,gt+3],[sx+30,gt+3],[sx+70,gt+150],[sx+10,gt+150]])}}
  if(z[3]=='e'){/* pavimentazione chiara della piazza del Muro */
   slabs(72,10,.16);rect(g,'rgba(255,255,255,.1)',x0,gt+3,x1-x0,40)}
  if(z[3]=='p'){/* ampie lastre chiare, prato in alto */
   slabs(80,10,.16);rect(g,'#8aa456',x0,gt+3,x1-x0,14);for(let q=0;q<50;q++)rect(g,'rgba(50,90,30,.35)',x0+((q*29)%ww),gt+5+hr(q)*10,2,4);rect(g,'rgba(0,0,0,.08)',x0,gt+17,x1-x0,2)}
  if(z[3]=='o'){/* sentiero di terra battuta e di pietra, terrazze con ulivi */
   rect(g,'#9a8a6c',x0,gt+3,x1-x0,14);for(let q=0;q<60;q++)rect(g,'rgba(40,30,15,.22)',x0+((q*37)%ww),gt+30+hr(q)*110,10+hr(q+1)*10,3);for(let q=0;q<40;q++)rect(g,'rgba(255,240,200,.12)',x0+((q*41)%ww),gt+24+hr(q+7)*118,6,2);slabs(30,2,.05);rect(g,'#6a5a44',x0,gt+120,x1-x0,30)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1300,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const gd=cl((cam-11800)/700,0,1)*cl((15400-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
 const sg=cl((cam-15500)/700,0,1)*cl((18200-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,60,'+(.15*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));const q=Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)});['skin','top','bot','hair'].forEach(k=>{if(q[k])q[k]=tn(q[k])});fig(g,px,y,t,q)},d:{a:{t:d}}});
const npcs=[
 /* Yossi: grembiule bianco macchiato di colori, kippah scura, occhiali sulla fronte, mani gialle di curcuma, pala di metallo */
 NP('ge_yossi',D.NAME.ge_yossi,1330,D.GREET.ge_yossi,{skin:'#d8a078',top:'#e8e4da',bot:'#3a3a46',hair:'#2a1a10',s:1.02},(g,b,t)=>{rect(g,'#f4f0e6',-11,-92+b,22,46);[['#c8281e',-6,-80],['#e8b020',3,-70],['#6a8a2a',-4,-60],['#8a4a22',6,-82]].forEach(s=>dot(g,s[0],s[1],s[2]+b,2.6));el(g,'#241812',1,-114+b,8,3.4);
  g.strokeStyle=tn('#2a2a2e');g.lineWidth=1.2;g.beginPath();g.arc(-2,-109+b,2.6,0,7);g.arc(5,-109+b,2.6,0,7);g.stroke();dot(g,'#e8b020',-7,-48,3.4);dot(g,'#e8b020',7,-48,3.4);ln(g,'#8a8e94',2,[7,-48,22,-72]);poly(g,'#aeb4ba',[[19,-70],[27,-68],[24,-60],[18,-62]])}),
 /* Nadia: giacca beige, foulard azzurro, capelli scuri raccolti, badge da guida, bottiglia d'acqua, cartina piegata */
 NP('ge_nadia',D.NAME.ge_nadia,3280,D.GREET.ge_nadia,{skin:'#d8a078',top:'#c8b48a',bot:'#3a3a46',hair:'#2a1a14',s:1.0},(g,b,t)=>{poly(g,'#4aa8e0',[[-9,-91+b],[9,-91+b],[6,-82+b],[0,-78+b],[-6,-82+b]]);dot(g,'#2a1a14',-8,-113+b,5.4);rect(g,'#f4f0e6',4,-78+b,8,10);rect(g,'#2a62a8',4,-78+b,8,2);
  rect(g,'#b8d8ec',-12,-52,6,14);rect(g,'#2a62a8',-12,-54,6,3);rect(g,'#e8dcc0',8,-62,8,10);rect(g,'#c8402a',9,-60,6,1.4)}),
 /* Garo: grembiule scuro sporco di argilla, baffi grigi, occhiali sulla punta del naso, berretto di lana, pennello sottile */
 NP('ge_garo',D.NAME.ge_garo,5350,D.GREET.ge_garo,{skin:'#d8a078',top:'#3a3430',bot:'#3a3a46',hair:'#8a8a8a',s:1.0},(g,b,t)=>{rect(g,'#2a2420',-11,-92+b,22,48);for(let q=0;q<4;q++)rect(g,'rgba(200,170,130,.4)',-8+q*5,-76+q*7+b,6,3);
  poly(g,'#6a3a2a',[[-12,-108+b],[-10,-120+b],[12,-120+b],[14,-108+b]]);rect(g,'#4a2a1e',-12,-110+b,26,3);rect(g,'#8a8a8a',3,-96+b,8,2.4);
  g.strokeStyle=tn('#2a2a2e');g.lineWidth=1.2;g.beginPath();g.arc(7,-99+b,2.4,0,7);g.stroke();ln(g,'#6a4a2a',1.6,[7,-48,20,-66]);dot(g,'#2a62a8',20,-67,1.6);dot(g,'#f4f0e6',-9,-52,5);dot(g,'#2a62a8',-9,-52,3.4)}),
 /* Fra' Marco: tonaca marrone con il cordone bianco, barba corta, occhiali, zainetto di tela, rosario al polso */
 NP('ge_marco',D.NAME.ge_marco,8100,D.GREET.ge_marco,{skin:'#e0b090',top:'#6a4a2a',bot:'#6a4a2a',hair:'#5a4a3a',long:1,s:1.04},(g,b,t)=>{poly(g,'#5a3e22',[[-10,-92+b],[10,-92+b],[7,-84+b],[-7,-84+b]]);rect(g,'#f4f0e6',-12,-56,24,3);ln(g,'#f4f0e6',2,[6,-54,8,-34]);ln(g,'#f4f0e6',2,[2,-54,2,-38]);dot(g,'#f4f0e6',8,-33,2);
  rect(g,'#6a5a46',-19,-82+b,8,26);rect(g,'rgba(0,0,0,.18)',-19,-82+b,2,26);poly(g,'#4a3a2a',[[1,-97+b],[11,-97+b],[9,-91+b],[3,-91+b]]);
  g.strokeStyle=tn('#2a2a2e');g.lineWidth=1.2;g.beginPath();g.arc(7,-102+b,2.6,0,7);g.stroke();for(let q=0;q<5;q++)dot(g,'#2a1a10',-15+q*1.2,-50+q*2,1.3)}),
 /* Solimano: grande turbante bianco, caffetano blu e oro, barba curata, anelli, cintura ricamata, cannocchiale */
 NP('ge_solimano',D.NAME.ge_solimano,10800,D.GREET.ge_solimano,{skin:'#d8a078',top:'#2a4ea8',bot:'#2a4ea8',hair:'#2a1a14',long:1,s:1.04},(g,b,t)=>{rect(g,'#d8b43a',-2,-92+b,4,50);rect(g,'#d8b43a',-12,-56,24,5);for(let q=0;q<5;q++)dot(g,'#c8402a',-9+q*4.5,-53.5,1.3);
  el(g,'#f4f0e6',1,-118+b,17,11);el(g,'#e4dccc',1,-124+b,12,8);for(let q=0;q<4;q++)ln(g,'rgba(120,110,90,.4)',1,[-14+q*7,-114+b,-8+q*6,-124+b]);dot(g,'#c8402a',8,-121+b,2.4);
  poly(g,'#241812',[[-6,-96+b],[9,-96+b],[7,-86+b],[1,-83+b],[-4,-86+b]]);dot(g,'#e8c04a',-7,-49,2);dot(g,'#e8c04a',8,-49,2);rect(g,'#c8a838',8,-52,22,3);rect(g,'#6a4a1a',26,-54,6,7)}),
 /* Samir: grembiule bianco, cappellino di carta, maniche rimboccate, mani lucide di sciroppo, coltello largo, gran sorriso */
 NP('ge_samir',D.NAME.ge_samir,14070,D.GREET.ge_samir,{skin:'#d8a078',top:'#e8e4da',bot:'#3a3a46',hair:'#2a1a10',s:1.02},(g,b,t)=>{rect(g,'#f8f6f0',-11,-92+b,22,46);rect(g,'rgba(0,0,0,.08)',-11,-60+b,22,2);rect(g,'#f8f6f0',-9,-124+b,20,10);rect(g,'#e4e0d6',-11,-116+b,24,3);
  dot(g,'#d8a078',-12,-62,4);dot(g,'#d8a078',12,-62,4);dot(g,'rgba(255,200,90,.7)',-7,-48,3.4);dot(g,'rgba(255,200,90,.7)',7,-48,3.4);ln(g,'#8a8e94',3,[7,-48,22,-62]);poly(g,'#c8ccd0',[[19,-66],[30,-64],[28,-56],[18,-58]]);
  g.strokeStyle=tn('#6a2a1a');g.lineWidth=1.4;g.beginPath();g.arc(6,-99+b,3.4,.2,2.9);g.stroke()}),
 /* Dana: cappellino di tela, camicia color sabbia, pantaloni con tante tasche, spazzola da scavo nello zaino, taccuino di schizzi */
 NP('ge_dana',D.NAME.ge_dana,15700,D.GREET.ge_dana,{skin:'#e0b090',top:'#d8c49a',bot:'#7a6a4a',hair:'#4a2a1a',s:1.0},(g,b,t)=>{poly(g,'#c8b88a',[[-12,-108+b],[-10,-120+b],[12,-120+b],[14,-108+b]]);rect(g,'#b8a878',4,-110+b,14,3);
  rect(g,'#6a4a2a',-19,-86+b,9,30);rect(g,'#8a6a3a',-19,-86+b,9,3);ln(g,'#a8602a',2,[-16,-86+b,-14,-98+b]);rect(g,'#d8c8a0',-17,-100+b,4,10);
  [[-8,-26],[4,-26],[-8,-12],[4,-12]].forEach(p=>rect(g,'rgba(0,0,0,.2)',p[0],p[1],6,6));rect(g,'#e8dcc0',6,-62,10,12);rect(g,'#2a2a2e',6,-62,2,12);for(let q=0;q<3;q++)ln(g,'#2a2a2e',.8,[9,-59+q*3.4,14,-59+q*3.4])}),
 /* Ibrahim: giacca scura di lana, kefiah a quadretti attorno al collo, mani larghe, sacchetto di olive, bastone da passeggio */
 NP('ge_ibrahim',D.NAME.ge_ibrahim,19800,D.GREET.ge_ibrahim,{skin:'#c8946a',top:'#2a2a30',bot:'#3a3a42',hair:'#8a8a8a',s:1.02},(g,b,t)=>{for(let r=0;r<2;r++)for(let q=0;q<6;q++)rect(g,(q+r)%2?'#14110f':'#f4f0e6',-12+q*4,-93+r*4+b,4,4);poly(g,'#14110f',[[-12,-85+b],[12,-85+b],[0,-72+b]]);rect(g,'#f4f0e6',-3,-82+b,6,5);
  rect(g,'#9a8a6a',9,-58,9,10);for(let q=0;q<4;q++)dot(g,'#4a5a2a',11+q*1.6,-58,1.5);ln(g,'#6a4a2a',3,[10,-46,20,-80,22,0]);dot(g,'#c8946a',9,-47,4.6)})
];

/* ---- oggetti lungo il percorso ---- */
const LX=[400,900,1400,1950,2900,3650,4350,5250,5850,6450,6950,7750,8350,8950,9500,10450,11050,11600,12350,12950,13550,14100,14850,15400,16000,16500,17250,17950,18550,19350,20250,21000,W1-150];
const props=[
 /* zona 1 · Mercato di Mahane Yehuda */
 ['geTarga',160,'MAHANE YEHUDA'],['geShuk',400],['geColombi',650,0],['geLampione',690,0],['geEitz',900],['geGatto',1140,'#b8b0a0'],['geSpezie',1400],['geCassette',1720],['geSera',1950],['geLampione',2220,1],
 /* zona 2 · Porta di Jaffa e Cittadella */
 ['geTarga',2380,'JAFFA GATE'],['geJaffa',2900],['geTour',3150,5],['geCiambelle',3430],['geCittadella',3650],['geLampione',3930,0],['geBancaSouv',4090],['geMura',4350],['geGatto',4610,'#d8a060'],
 /* zona 3 · Quartiere Armeno e Monte Sion */
 ['geTarga',4880,'ARMENIAN ORTHODOX PATRIARCHATE ROAD'],['geCeramica',5250],['geArmena',5850],['geAsino',6160,0],['geSion',6450],['geVasi',6780,0],['geSionPorta',6950],['geGatto',7140,'#9a9a9a'],
 /* zona 4 · Santo Sepolcro */
 ['geTarga',7310,'CHRISTIAN QUARTER ROAD'],['geCortile',7750],['geLampione',8010,1],['geScala',8350],['geColombi',8640,0],['geBasilica',8950],['geStatusQuo',9500],['geGatto',9770,'#c9873a'],
 /* zona 5 · Porta di Damasco e mura */
 ['geTarga',9980,'DAMASCUS GATE'],['geDamasco',10450],['geLampione',10800,0],['geLeoni',11050],['geOro',11600],['geCipresso',11830,150],
 /* zona 6 · Via Dolorosa e suq */
 ['geTarga',12000,'VIA DOLOROSA'],['geDolorosa',12350],['geEcce',12950],['geRaggio',13230,60],['geSuq',13550],['geAsino',13860,1],['gePasticceria',14100],['geCaffe',14230,'#2a7a8a'],
 /* zona 7 · Quartiere Ebraico e Muro Occidentale */
 ['geTarga',14390,'JEWISH QUARTER ROAD'],['geCardo',14850],['gePanca',15130,0],['geHurva',15400],['geFontana',15660],['geMuro',16000],['geLampione',16250,0],['geWilson',16500],
 /* zona 8 · Spianata delle Moschee */
 ['geTarga',16760,'HARAM AL-SHARIF · TEMPLE MOUNT'],['geSpianata',17250],['geCupola',17950],['geFontana',18240,0],['geAqsa',18550],
 /* zona 9 · Monte degli Ulivi di notte */
 ['geTarga',19000,'MOUNT OF OLIVES'],['gePanorama',19350],['geLampione',19600,1],['geOlive',19980],['geGetsemani',20250],['geLampione',20560,0],['geNazioni',21000],['geAsino',21350,1],['geTerrazza',21560],['geLampione',21820,1],['geVarco',W1-150]
];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,D.LKTXT[i]]);
addWorld({id:'gerusalemme',name:'Gerusalemme · Dal mercato al Monte degli Ulivi',width:W1,sky:['#8aa0d0','#f8b8b8','#ffd8b0'],gt:372,gr:['#d4cbb4','#9a8a70'],chord:[220,261.6,329.6,392],amb:'#ffe2b0',
intro:D.INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da gerusalemme.txt) --- */
(function(){
const TOPX_GE={
 "ge_yossi": [
  [
   "Chi sei e che fai?",
   "Yossi, cinquantasei anni, nato a Gerusalemme. Vendo spezie da quando avevo dodici anni, achi: all’inizio portavo i sacchi, adesso comando io. Il naso è il mio mestiere."
  ],
  [
   "Com’è nato questo mercato?",
   "Alla fine dell’Ottocento come Shuk Beit Yaakov, di fronte al quartiere di Mahane Yehuda, che fu fondato nel 1887. Alla fine degli anni Venti le autorità del Mandato britannico costruirono i banchi permanenti e i tetti. Prima era tutto più sparso."
  ],
  [
   "Perché si chiama Mahane Yehuda?",
   "Prende il nome dal quartiere, chiamato così in ricordo di Yehuda, il fratello di Joseph Navon. Per noi è semplicemente \"lo shuk\": una parola che dice tutto, no?"
  ],
  [
   "Cos’è il Mercato Iracheno?",
   "Un’ala costruita nel 1931, a ovest, che ha preso il nome dai tanti commercianti ebrei di origine irachena, come la mia famiglia. Si trova lungo la via Mahane Yehuda. Mio nonno veniva da lì, e ancora oggi si sente nelle zuppe."
  ],
  [
   "Quanta gente lavora qui?",
   "Più di duecentocinquanta venditori, fra frutta, spezie, pane, pesce, formaggi e dolci. La parte coperta è lungo la via Eitz Chaim, quella all’aperto lungo la via Mahane Yehuda. Un formicaio, ma ordinato: ognuno sa dov’è il suo posto."
  ],
  [
   "Cosa si mangia di tipico?",
   "Dipende da chi chiedi: pane, olive, formaggi, hummus, halva. E poi la zuppa con la kubbeh, i grandi gnocchi ripieni della cucina irachena e curda, che ti scalda come una nonna. Se ti metti seduto con una scodella calda, non ti alzi più, Pierpaolo."
  ],
  [
   "Che spezie consigli?",
   "Cumino, paprika, zafferano e sumac, le mie preferite, e poi le miscele per il pane e per le zuppe. L’importante è comprarle poco alla volta: le spezie vecchie sanno di polvere. Annusa, tocca e non farti convincere dal primo che grida."
  ],
  [
   "Come cambia lo shuk di sera?",
   "Diventa un altro posto: i banchi si chiudono, le saracinesche si riempiono di murales e si aprono bar e ristoranti, più di venti bar e circa dieci ristoranti, con musica dal vivo. Dopo le undici, però, la musica forte è vietata. A quell’ora anch’io vado a dormire, nu."
  ],
  [
   "Com’è lavorare qui?",
   "Si comincia all’alba, si sta in piedi tutto il giorno, si litiga sui prezzi e ci si perdona. Il mercato è come una famiglia grande, con i suoi cugini antipatici. Ma se hai bisogno, qualcuno c’è sempre."
  ],
  [
   "Chi viene al mercato?",
   "Tutti: famiglie, studenti, turisti, gente di ogni fede. Ci si spinge, ci si scusa, si compra lo stesso pane. A Gerusalemme non sempre è facile, ma qui, fra le cassette di frutta, la convivenza funziona meglio."
  ],
  [
   "Dove vado dopo?",
   "Verso la città vecchia, a piedi o in autobus: la Porta di Jaffa è il modo più bello per entrare. Arrivi dalla parte delle mura, con le torri che ti guardano dall’alto. Lì ti aspetta Nadia, una guida che sa tutto."
  ],
  [
   "Posso salutarti e proseguire la mia passeggiata?",
   "Vai, Pierpaolo, e non uscire senza un sacchetto di datteri: portano fortuna. Se ripassi, ti offro il caffè col cardamomo. Shalom, e yalla, vai!"
  ]
 ],
 "ge_nadia": [
  [
   "Chi sei e che fai?",
   "Nadia, trentotto anni, guida. Sono nata e cresciuta dentro le mura, in una famiglia cristiana che ci vive da molte generazioni. Faccio questo lavoro perché mi piace raccontare la mia città come la vedo io: con tutti i suoi nomi."
  ],
  [
   "Cos’è la città vecchia?",
   "Un’area di meno di un chilometro quadrato, circondata dalle mura, con più di trentamila abitanti. Ci sono vicoli, mercati, chiese, moschee e sinagoghe a pochi passi l’una dall’altra. Nel 1981 è stata inserita nel patrimonio mondiale dell’UNESCO."
  ],
  [
   "Perché si parla di quattro quartieri?",
   "Il Quartiere Musulmano, il Cristiano, l’Armeno e l’Ebraico: è una divisione \"da mappa\", nata nell’Ottocento. Nella vita vera i quartieri non sono mai stati completamente separati: ci si mescola, si fa la spesa insieme, ci si incontra sulle stesse scale."
  ],
  [
   "Com’è fatta la Porta di Jaffa?",
   "Fu costruita nel 1538 da Solimano il Magnifico. In ebraico si chiama Sha’ar Yafo, in arabo Bab al-Khalil, \"Porta dell’Amico\", cioè Abramo, che la tradizione ricorda sepolto a Hebron. Notare la curva a gomito: serviva a rallentare chi entrava a cavallo, e anche gli assalitori."
  ],
  [
   "Cos’è quella breccia nel muro?",
   "Nel 1898 le autorità ottomane aprirono un varco accanto alla porta per far entrare l’imperatore tedesco Guglielmo II a cavallo, durante la sua visita. Un’apertura \"ufficiale\" per un ospite importante: da allora ci passano anche i carretti."
  ],
  [
   "Cos’è la Cittadella?",
   "La fortezza accanto alla porta: la sua base si ritiene erodiana, ma è stata ricostruita da molte epoche. Si dice che i bizantini la chiamassero \"Torre di Davide\" credendo che fosse del re; il nome è rimasto, anche se il re non c’entra. Oggi dentro c’è un museo sulla storia di Gerusalemme."
  ],
  [
   "Quanto sono lunghe le mura?",
   "Circa quattro chilometri, alte in media dodici metri, con trentaquattro torri di guardia. Le costruì Solimano fra il 1537 e il 1541. Si dice che il progetto sia dell’architetto Mimar Sinan, o almeno del suo ufficio. Un lavoro rapido, per essere un lavoro di pietra."
  ],
  [
   "Perché la pietra è così chiara?",
   "Perché a Gerusalemme si costruisce con la \"pietra di Gerusalemme\", un calcare che va dal bianco al rosa e al giallo. Nel 1918 il governatore militare britannico Ronald Storrs stabilì che gli edifici dovessero essere rivestiti con la pietra locale. Con la luce del tramonto sembra tutta di miele."
  ],
  [
   "Come ci si orienta qui dentro?",
   "Con la testa e con le scale: i vicoli salgono e scendono, e ogni quartiere ha il suo carattere. Non c’è una sola mappa, ma ci sono molte guide, e io sono una. Chiedi sempre, Pierpaolo: qui dare indicazioni è un’arte."
  ],
  [
   "Che nome si usa per i luoghi?",
   "Ognuno ha il suo, e li rispetto tutti: il Muro Occidentale, per i musulmani il Muro di al-Buraq; la Spianata delle Moschee, che è anche il Monte del Tempio. Quando racconto un luogo, dico i nomi di tutti. È il modo più gentile per camminare insieme."
  ],
  [
   "Dove vado dopo?",
   "Dentro il Quartiere Armeno e, poco fuori dalla Porta di Sion, il Monte Sion. Vai a piedi: è un po’ più lontano di quel che sembra. Lì incontri Garo, un ceramista che ti racconta una storia di colori."
  ],
  [
   "Posso salutarti e proseguire la mia passeggiata?",
   "Vai, Pierpaolo, e non farti prendere dalla fretta: qui la strada breve non è mai la più bella. Se ti perdi, chiedi a un gatto: ne sanno più di noi. Ma’a salameh, e buona strada, habibi!"
  ]
 ],
 "ge_garo": [
  [
   "Chi sei e che fai?",
   "Garo, sessantun anni, ceramista. Faccio piatti, tazze e piastrelle con i colori dell’Armenia e della Terra Santa. Un lavoro lento: la fretta si vede nel colore."
  ],
  [
   "Da dove vengono le ceramiche armene di Gerusalemme?",
   "Dal 1919, quando le autorità britanniche invitarono il ceramista armeno David Ohannessian a restaurare le piastrelle cinquecentesche della Cupola della Roccia. Poi aprì la sua bottega sulla Via Dolorosa. Nel 1922 altri maestri, Balian e Karakashian, aprirono un laboratorio fuori dalle mura e svilupparono lo stile gerosolimitano."
  ],
  [
   "E il restauro della Cupola?",
   "Non fu mai completato: il motivo ufficiale furono i fondi che mancavano. Le piastrelle della Cupola furono poi restaurate nel 1962 con tessere venute dalla Turchia. Ma da quei lavori sono rimaste le botteghe e i nostri disegni."
  ],
  [
   "Quante botteghe ci sono oggi?",
   "Sei, quasi tutte nei quartieri Cristiano e Armeno: una di fronte alla cattedrale di San Giacomo, una vicino alla Porta Nuova, una vicino alla Porta di Sion. Ognuna ha il suo stile, ma i colori sono quelli di tutti: blu, giallo, turchese, verde."
  ],
  [
   "Come si fa una ceramica?",
   "Si modella l’argilla, si lascia asciugare, si cuoce una prima volta, poi si dipinge a mano e si cuoce di nuovo. Il colore cambia nel fuoco: puoi dipingere un blu e ottenerne un altro. Per questo i vecchi dicono che il forno è il vero artista."
  ],
  [
   "Chi sono gli armeni di Gerusalemme?",
   "Una comunità piccola, che vive nel suo quartiere da molte generazioni, intorno alla cattedrale di San Giacomo e al convento. Il quartiere è chiuso, silenzioso, quasi un paese dentro la città. Siamo pochi, ma ci conosciamo tutti."
  ],
  [
   "Cos’è il Monte Sion?",
   "La collina appena fuori dalla Porta di Sion, piena di luoghi legati alla tradizione. Qui c’è l’Abbazia della Dormizione, benedettina, completata nel 1910; il Cenacolo, il luogo che la tradizione indica per l’Ultima Cena; e un luogo che la tradizione indica come la tomba del re Davide. Molte di queste identificazioni vengono dalla tradizione, non da prove certe."
  ],
  [
   "Cos’è il Cenacolo?",
   "Una sala di pietra con volte gotiche, parte di una chiesa dei Crociati. Nel 1552 fu trasformata in moschea; nell’Ottocento i frati vi potevano entrare soltanto due volte l’anno. Oggi si visita in silenzio, anche se non c’è molto da vedere: c’è molto da immaginare."
  ],
  [
   "Cosa successe alla Porta di Sion?",
   "Nel 1948 qui ci furono combattimenti, e la pietra della porta porta ancora i segni. Non ne parlo volentieri: ci sono ferite che non si dipingono. Se passi, Pierpaolo, passa piano, e guarda quelle pietre con rispetto."
  ],
  [
   "Dove vado dopo?",
   "Al Santo Sepolcro, a pochi passi: segui i vicoli e le campane. Troverai un frate italiano, fra’ Marco, che lo racconta meglio di me. E non farti spaventare dalla scala sulla facciata: sta lì da secoli."
  ],
  [
   "Posso comprare una tua ceramica?",
   "Certo, ma scegli quella che ti parla: non quella che ti piace di più, quella che ti guarda. Una buona ceramica ti resta in casa per tutta la vita e ti ricorda dove sei stato. E se si rompe, si ripara: non c’è niente da buttare."
  ],
  [
   "Posso salutarti e proseguire la mia passeggiata?",
   "Vai, Pierpaolo, e che la strada ti sia leggera. Se ripassi, ti faccio dipingere un piatto, ma ti avverto: il mio maestro dice che solo il terzo è passabile. Shnorhakalutyun, e buona giornata!"
  ]
 ],
 "ge_marco": [
  [
   "Chi sei e che fai?",
   "Fra’ Marco, quarantasei anni, bergamasco, francescano della Custodia di Terra Santa. Accompagno i pellegrini e aiuto a custodire i luoghi: il lavoro è più di scale e di chiavi che di prediche. Ma a me piace così."
  ],
  [
   "Cos’è il Santo Sepolcro?",
   "La basilica che i cristiani venerano come il luogo della crocifissione e della sepoltura di Gesù. La chiesa originale fu fondata dall’imperatore Costantino nel 335. Dentro c’è la grande rotonda con l’Edicola, che custodisce il luogo venerato come la tomba."
  ],
  [
   "Perché è stata distrutta più volte?",
   "Perché nei secoli ha attraversato guerre e incendi: nel 614 un incendio durante l’invasione persiana, nel 1009 la distruzione ordinata dal califfo al-Hakim. I Crociati la ricostruirono e nel 1149 i lavori furono completati. Nel 1808 un grave incendio fece crollare la cupola della rotonda."
  ],
  [
   "Chi la custodisce?",
   "Tre comunità principali: i greco-ortodossi, gli armeni apostolici e noi cattolici, con i francescani. Copti, etiopi e siriaci hanno responsabilità minori su alcune cappelle. È un po’ come un condominio con sei famiglie: ogni scala ha il suo proprietario."
  ],
  [
   "Cos’è lo Status Quo?",
   "Un accordo, confermato nel 1852, che stabilisce chi può fare cosa in ogni angolo della basilica, quando e per quanto. Nulla si muove senza il consenso di tutti. Sembra un po’ esagerato, ma è anche la ragione per cui qui, da secoli, si convive."
  ],
  [
   "E la scala sulla facciata?",
   "La \"scala immobile\": è appoggiata a una finestra che appartiene agli armeni, e la prima immagine che la mostra è un’incisione del 1728. Nessuno la muove, perché toccarla vorrebbe dire decidere da soli. Qui anche una scala è una questione di diplomazia, Pierpaolo."
  ],
  [
   "Chi apre le porte?",
   "Da generazioni, due famiglie musulmane di Gerusalemme. Aprono e chiudono ogni giorno il portone della basilica: un servizio di fiducia, che dura da secoli. È una delle cose che mi commuove di più: il custode delle chiavi non è del nostro gruppo."
  ],
  [
   "Cos’è l’Edicola?",
   "Il piccolo edificio al centro della rotonda: costruito nel 1810 e restaurato fra il 2016 e il 2017, in circa nove mesi di lavori, dopo che era stato giudicato instabile. Il restauro è costato circa quattro milioni di dollari, con il contributo di diversi donatori. La fila per entrare, invece, non l’ha toccata nessuno."
  ],
  [
   "Cos’è la Via Dolorosa?",
   "Il percorso di circa cinquecento metri che porta fin qui: nove stazioni sono lungo la strada e le ultime cinque dentro la basilica. Ogni venerdì i francescani lo percorrono in processione. Cammina piano, Pierpaolo: è fatto per camminare in silenzio."
  ],
  [
   "Cosa curano i francescani oltre a questa basilica?",
   "Molti luoghi, fra cui il Getsemani, dove abbiamo la custodia dal Trecento. Là ci sono otto olivi molto antichi e la Chiesa di tutte le Nazioni, consacrata nel 1924. Se ci vai, saluta gli olivi da parte mia: ci sono affezionato."
  ],
  [
   "Dove vado dopo?",
   "Fuori dalla basilica, verso nord e verso est: la Porta di Damasco ti aspetta, con le sue torri e i suoi mercati. Lì incontri un sultano un po’ speciale, che di mura se ne intende. Non stupirti: qui il tempo si piega."
  ],
  [
   "Posso salutarti e proseguire la mia passeggiata?",
   "Vai, Pierpaolo, e che il Signore ti dia pace. Se hai una candela, accendila per qualcuno che ami: non costa niente e vale tanto. Pax et bonum, e ricordati: la pazienza è una virtù francescana."
  ]
 ],
 "ge_solimano": [
  [
   "Chi sei e dove regnavi?",
   "Solimano, sultano dell’Impero ottomano dal 1520 al 1566. Gli europei mi chiamano \"il Magnifico\", i miei sudditi \"il Legislatore\". Governai terre lontane, e Gerusalemme fu fra quelle che curai con più attenzione."
  ],
  [
   "Perché hai fatto le mura?",
   "Per proteggere la città e per darle un volto. Fra il 1537 e il 1541 le fecero ricostruire sulle rovine di quelle più antiche: circa quattro chilometri, alte in media dodici metri, con trentaquattro torri di guardia. Un lavoro grande, per una città piccola."
  ],
  [
   "Chi le ha progettate?",
   "Si attribuiscono all’architetto Mimar Sinan, il mio capo architetto, o al suo ufficio. Non lo dico io per vanità: dove ci sono pietre e disegni, c’è Sinan. Anche se non mi ha mai detto quante pietre ci volevano."
  ],
  [
   "Quante porte ci sono?",
   "Sette porte principali sono aperte al traffico; la Porta d’Oro, sul lato est, è murata. Ogni porta ha il suo nome e la sua storia. Una città senza porte non è una città: è un campo."
  ],
  [
   "Parlami della Porta di Jaffa.",
   "Fu costruita nel 1538, come parte delle mura. In arabo si chiama Bab al-Khalil, \"Porta dell’Amico\", cioè Abramo, che si ricorda sepolto a Hebron. Ha una curva a gomito, perché a un attaccante non bisogna lasciare strada dritta."
  ],
  [
   "E questa, dove siamo?",
   "La Porta di Damasco, Bab al-Amud, la \"porta della Colonna\": dentro la piazza c’era una colonna romana con una statua dell’imperatore Adriano. Da qui partiva la strada per Nablus e per Damasco. È l’unica porta con statuette di pietra al posto dei merli, ed è piena di commercio: un sultano ama i mercati."
  ],
  [
   "Perché i leoni sulla Porta?",
   "In verità sono pantere: l’emblema del sultano mamelucco Baibars, un governante del Duecento. Si dice che io abbia ordinato le mura dopo un sogno di leoni che minacciavano di divorarmi se non le avessi costruite: per questo la porta porta il loro nome. Una bella leggenda, ma io dormo molto bene."
  ],
  [
   "Perché la Porta d’Oro è murata?",
   "Perché i governanti musulmani la chiusero molti secoli fa. In ebraico si chiama Sha’ar HaRahamim, \"porta della Misericordia\". Una porta chiusa può essere più famosa di mille aperte: ognuno ci vede la propria speranza."
  ],
  [
   "Cosa hai fatto alla Cupola della Roccia?",
   "Fu costruita nel 691 per volontà del califfo Abd al-Malik. Durante il mio regno la fecero rivestire all’esterno di piastrelle: i lavori durarono sette anni. Molte sono state sostituite nel Novecento, ma i colori sono quelli dei miei artigiani."
  ],
  [
   "Come vedi la Gerusalemme di oggi?",
   "Con meraviglia, e anche con qualche preoccupazione: è una città sacra per molti, e tutti vogliono sentirsi a casa. Quando regnavo non esistevano i quartieri come li disegnate adesso: quella mappa è dell’Ottocento. Spero che il rispetto resti la regola."
  ],
  [
   "Dove vado dopo?",
   "Dentro la porta, nei vicoli del suq e sulla Via Dolorosa: lì c’è un pasticciere, Samir, che fa il dolce migliore della città, o almeno così dice. Fidati del tuo naso: i miei cuochi lo seguivano sempre."
  ],
  [
   "Posso salutarti e proseguire la mia passeggiata?",
   "Vai, Pierpaolo, e cammina con le mani aperte: è il modo più antico per essere ben accolti. Se ripassi, guarda le mura al tramonto: sembrano d’oro. Allah’a emanet ol, e buona strada!"
  ]
 ],
 "ge_samir": [
  [
   "Chi sei e che fai?",
   "Samir, cinquantadue anni, pasticciere. La bottega era di mio padre e prima ancora di mio nonno. Faccio dolci per tutti: musulmani, cristiani, ebrei, turisti. Lo zucchero non guarda la fede, habibi."
  ],
  [
   "Cos’è la knafeh?",
   "Un dolce di pasta sottilissima e formaggio filante, cotto in una grande teglia rotonda e bagnato di sciroppo. Si serve caldo, con i pistacchi sopra. Si dice che nasca a Nablus, ma a Gerusalemme ognuno sostiene che la propria sia la migliore."
  ],
  [
   "Com’è il suq?",
   "Un labirinto di vicoli coperti, con volte di pietra e bancarelle sui due lati: spezie, tessuti, lanterne, frutta secca e dolci. Si passa dal profumo del caffè a quello del cardamomo. Si contratta con un sorriso: chi si arrabbia ha già perso."
  ],
  [
   "Cos’è la Porta di Damasco?",
   "La porta da cui sei entrato, Bab al-Amud, la \"porta della Colonna\": dentro la piazza c’era una colonna romana con la statua dell’imperatore Adriano. È il cuore del commercio della Gerusalemme araba. Qui i miei nonni vendevano già i dolci."
  ],
  [
   "Cos’è la Via Dolorosa?",
   "La strada dove i cristiani seguono la via di Gesù verso la crocifissione. Circa cinquecento metri: nove stazioni sul percorso, cinque dentro il Santo Sepolcro. Per noi che ci viviamo è soprattutto la strada di casa, ma la rispettiamo."
  ],
  [
   "Da quando si cammina qui?",
   "Fin dal IV secolo i pellegrini percorrono questa strada. Fra il Trecento e il Cinquecento i francescani contavano otto stazioni, poi se ne aggiunsero sei per arrivare alle quattordici della Via Crucis europea. Il percorso cambia un po’, come cambia la gente che lo cammina."
  ],
  [
   "Cos’è l’Arco dell’Ecce Homo?",
   "L’arco di pietra che attraversa la strada: fa parte di una porta dell’epoca dell’imperatore Adriano. Ha preso il nome attuale nel Cinquecento, perché la tradizione colloca qui il momento in cui Pilato presentò Gesù alla folla. Ci passo ogni mattina, e ogni mattina alzo gli occhi."
  ],
  [
   "Che si fa il venerdì?",
   "I francescani percorrono la strada in processione, con una croce, cantando e pregando. Per un’ora il suq rallenta, e noi ci fermiamo a guardare, senza fretta. Qui la convivenza è anche questo: lasciare passare l’altro."
  ],
  [
   "E le ceramiche armene?",
   "Le vedi sulla via: una famiglia armena ha una bottega proprio qui. Un ceramista, David Ohannessian, nel 1919 aprì la sua bottega sulla Via Dolorosa dopo essere stato invitato a restaurare le piastrelle della Cupola della Roccia. Da allora i colori armeni fanno parte del suq."
  ],
  [
   "Com’è vivere in città vecchia?",
   "Bello e faticoso: le scale, i vicoli, i turisti, ma anche i vicini, che sono famiglia. Qui si sa tutto di tutti, nel bene e nel male. Non cambierei questo posto con nessun altro, Pierpaolo, nemmeno per un prato."
  ],
  [
   "Cosa si beve nel suq?",
   "Caffè con il cardamomo, tè con la menta o con la salvia, succo di melograno spremuto al momento. Si beve in piedi, in un bicchierino, parlando con il vicino. Un caffè qui dura pochi minuti, ma la chiacchierata finisce quando vuole lei."
  ],
  [
   "Posso salutarti e proseguire la mia passeggiata?",
   "Vai, Pierpaolo, e porta con te un pezzo di dolce: il Muro Occidentale è più in là, nel Quartiere Ebraico. Lì ti aspetta un’archeologa, Dana, che sa tutto di pietre. Ma’a salameh, e vieni a trovarmi!"
  ]
 ],
 "ge_dana": [
  [
   "Chi sei e che fai?",
   "Dana, quarantun anni, archeologa e guida. Scavo e racconto: di giorno fra le rovine, di sera fra i miei appunti. La cosa bella di Gerusalemme è che sotto ogni strada ce n’è un’altra."
  ],
  [
   "Cos’è il Cardo?",
   "La grande strada colonnata di epoca bizantina che attraversava Gerusalemme da nord a sud. Oggi un tratto scavato mostra colonne e lastre antiche fra negozi e bar. Camminare qui significa passeggiare dentro una mappa di fondazione."
  ],
  [
   "Cos’è il Quartiere Ebraico?",
   "Una zona di vicoli, scale e sinagoghe nella parte sud-orientale della città vecchia, in gran parte ricostruita in tempi recenti. Accanto alle case ci sono scavi aperti, con rovine di diverse epoche. È un quartiere tranquillo, con tanti bambini."
  ],
  [
   "Cos’è la Sinagoga Hurva?",
   "\"Hurva\" significa \"la rovina\": una grande sinagoga con la cupola chiara, distrutta, rimasta in rovina per decenni e poi ricostruita. Oggi è uno dei punti di riferimento del quartiere. Ha un nome buffo per una cosa così bella, ma è un nome di memoria."
  ],
  [
   "Cos’è il Muro Occidentale?",
   "In ebraico HaKotel HaMa’aravi: un tratto del muro di sostegno della Spianata, lungo in tutto 488 metri. La parte usata per la preghiera è lunga circa 57 metri. Alla piazza arrivano ebrei da tutto il mondo, ma anche visitatori di ogni fede."
  ],
  [
   "Quanto è alto?",
   "Circa diciannove metri sopra la piazza. Ha quarantacinque file di pietre: ventotto visibili e diciassette sotto il suolo. In basso ci sono blocchi enormi, in alto pietre più piccole di epoche diverse: un muro che si legge come un libro."
  ],
  [
   "Che pietra è?",
   "Calcare locale, detto meleke, forse estratto da cave vicine, sotto il Quartiere Musulmano o a nord-ovest della città. I blocchi inferiori sono così grandi che non si capisce come siano stati spostati. Ogni volta che li guardo resto senza parole."
  ],
  [
   "Perché ha tanti nomi?",
   "In ebraico si chiama HaKotel; per i musulmani è il Muro di al-Buraq, legato a una tradizione del Profeta; molti cristiani lo chiamano \"Muro del Pianto\", un nome che si diffuse soprattutto nell’Ottocento. Ognuno ci vede qualcosa di suo, ma tutti rispettano il silenzio."
  ],
  [
   "Cosa sono i biglietti nelle fessure?",
   "Preghiere scritte a mano, piegate e infilate nelle fessure fra le pietre: più di un milione ogni anno. Una delle prime testimonianze racconta di un rabbino, Chaim ibn Attar, morto nel 1743, che consigliò a un fedele di scrivere un’invocazione e di metterla nel muro. È una tradizione di fiducia."
  ],
  [
   "Cos’è l’Arco di Wilson?",
   "Una grande volta di pietra a sinistra della piazza, sotto la quale c’è una sala coperta per la preghiera, con una sezione per gli uomini e una per le donne. È un posto silenzioso, con scaffali di libri e luci basse. Qui capisci quanto in profondità arriva la storia."
  ],
  [
   "Come mi comporto alla piazza?",
   "Con rispetto: abiti sobri, spalle e ginocchia coperte, voce bassa, niente foto durante la preghiera. Gli uomini e le donne pregano in zone separate. Se non sei sicuro, osserva e imita: la discrezione è sempre benvenuta."
  ],
  [
   "Posso salutarti e proseguire la mia passeggiata?",
   "Vai, Pierpaolo, e quando sali verso la Spianata cammina con cura: è un luogo sacro per tanti. Se mi cerchi, sono sempre dove si scava. Shalom, e che la pietra ti sia leggera!"
  ]
 ],
 "ge_ibrahim": [
  [
   "Chi sei e che fai?",
   "Ibrahim, cinquantotto anni, nato sul Monte degli Ulivi. Curo gli ulivi di famiglia e faccio un po’ da guida a chi sale. L’olio che faccio lo regalo agli amici, e quasi tutti sono amici."
  ],
  [
   "Cos’è il Monte degli Ulivi?",
   "La collina di fronte alla città vecchia, divisa da questa da una valle. Ci sono chiese, giardini, terrazze di ulivi e un antichissimo cimitero ebraico sul pendio. Da quassù Gerusalemme si vede come un unico disegno."
  ],
  [
   "Cosa si vede da qui?",
   "Le mura, la grande cupola d’oro della Spianata, i campanili e le cupole dei quartieri, e più lontano i tetti della città nuova. Di notte le mura si illuminano di giallo. Se hai fortuna, senti anche le campane e il richiamo alla preghiera insieme."
  ],
  [
   "Cos’è la cupola d’oro?",
   "La Cupola della Roccia, completata nel 691. Fino al 1959 la cupola era ricoperta di piombo scuro; poi fu rivestita di piastre dorate, e nel 1993 con circa ottanta chili d’oro. Di sera, con il sole che scende, sembra una lanterna."
  ],
  [
   "E la lunga moschea accanto?",
   "La Moschea di al-Aqsa, \"la più lontana\": il principale luogo di preghiera della Gerusalemme musulmana. Ha una cupola grigio argento e si riempie nei giorni di festa. Per noi è il luogo più sacro dopo La Mecca e Medina."
  ],
  [
   "Cos’è la Spianata?",
   "Il grande spazio sopra il Muro, per i musulmani Haram al-Sharif, per gli ebrei Har HaBayit, il Monte del Tempio. I visitatori non musulmani possono salire in orari stabiliti, ma non entrare negli edifici né pregare. È un luogo così sacro che bisogna parlarne piano."
  ],
  [
   "Perché quella porta nel muro è murata?",
   "È la Porta d’Oro, che si vede dal basso: i governanti musulmani la chiusero molti secoli fa. In ebraico si chiama Sha’ar HaRahamim, \"porta della Misericordia\". Una porta chiusa che resta lì ad aspettare: forse è questo il segreto delle porte."
  ],
  [
   "Cos’è il Getsemani?",
   "Il giardino ai piedi del monte: ci sono otto olivi antichissimi, curati dai francescani, che ne hanno la custodia dal Trecento. Alcuni studi hanno datato tre di questi alberi al XII secolo; si ritiene che discendano dalle radici del boschetto più antico. Gli olivi, Pierpaolo, hanno più memoria degli uomini."
  ],
  [
   "Cos’è la Chiesa di tutte le Nazioni?",
   "La chiesa accanto al giardino, progettata dall’italiano Antonio Barluzzi e consacrata nel 1924. Fu costruita con il contributo di dodici nazioni, ciascuna ricordata in una delle dodici cupole. Dentro c’è una penombra viola che mette pace."
  ],
  [
   "Perché la pietra della città è così chiara?",
   "Perché si costruisce con la pietra locale: un calcare che va dal bianco al rosa e al giallo. Nel 1918 il governatore britannico Ronald Storrs stabilì che gli edifici andassero rivestiti con questa pietra. Per questo, al tramonto, la città sembra fatta di miele."
  ],
  [
   "Come si fa l’olio?",
   "Si raccolgono le olive a mano, in autunno, stendendo dei teli sotto gli alberi; poi si portano al frantoio e si spremono. Un olio buono è verde, un po’ piccante e profuma d’erba. Si fa insieme, in famiglia, e si finisce sempre a cantare."
  ],
  [
   "Posso salutarti e proseguire la mia passeggiata?",
   "Vai, Pierpaolo, e scendi piano: la strada è ripida, ma la vista ripaga. Se vedi la Porta d’Oro brillare, non fermarti: la luce passa comunque. Ma’a salameh, e che Dio ti accompagni!"
  ]
 ]
};
Object.assign(TOPX,TOPX_GE);
})();
