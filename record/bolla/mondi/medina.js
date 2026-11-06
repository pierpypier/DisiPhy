/* ---------- MEDINA DI FEZ · Dalla Porta Blu all’Arco di Zellige (Bab Bou Jeloud e Talaa Kebira, Qarawiyyin e Moulay Idriss II, concerie Chouara, Place Seffarine e madrase, Place Nejjarine e souk, Fès el-Jdid e Mellah, Borj Nord e Tombe Merinidi, il quartiere al crepuscolo, la Porta Blu di notte) ---------- */
/* Un’intera giornata da sinistra a destra: alba alla Porta Blu e sulla Talaa Kebira, mattina alla Qarawiyyin e al santuario di Moulay Idriss II,
   tarda mattina alle concerie Chouara, mezzogiorno a Place Seffarine e nelle madrase Attarine e Bou Inania, primo pomeriggio fra Place Nejjarine
   e le spezie, pomeriggio a Fès el-Jdid e nel Mellah, tardo pomeriggio sulla collina di Borj Nord e delle Tombe Merinidi, crepuscolo nei vicoli
   del quartiere, notte sotto la Porta Blu. In fondo alla piazza, sotto un grande arco di zellige blu e verde, c’è il varco.
   Testi, tappe e dialoghi vengono da medina.txt (definitivi, usati senza riscriverli). Gli oggetti stanno in elementi.js (nomi che iniziano per "fz").
   Il tono è descrittivo e rispettoso verso tutte le comunità e le fedi; le tradizioni non provate sono presentate con "si dice" o "secondo la tradizione". */
(function(){
const GT=372,W1=21800;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {nf,lit,casa,mina,tegole,star8,zel,fer,lamp,pers,gente,ln,gatto,cipr}=PR._fz;
const md=(i,n)=>((i%n)+n)%n;
const LIT='rgb(255,214,130)';
const Z=[0,2600,5000,7000,9800,12400,15100,17200,19400,W1+400];   /* inizio di ognuna delle 9 zone */
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
/* ---- cielo: alba grigio-rosa, mattina limpida, mezzogiorno bianco, pomeriggio dorato, tardo pomeriggio arancione, tramonto rosa-arancio-viola, notte blu ---- */
const SKY=[[0,['#7a86b4','#e6a8b4','#fbd2b8']],[1500,['#4a98ec','#a8d0f0','#f2ecdc']],[2600,['#2a82e8','#6cb4f2','#d4e8f8']],[5000,['#2a86ea','#74b8f4','#d8ecf8']],[8800,['#3a8cec','#a0cef4','#f4f6f4']],[11200,['#3a86e0','#a8cce8','#f8e6b8']],[14000,['#4a82d4','#c8d0e0','#f6dca8']],[15300,['#5a78c4','#e8b88a','#ffc888']],[16300,['#7a60a8','#f0885a','#ffb066']],[17200,['#5a4a98','#d8587a','#f89a58']],[18100,['#2a2c78','#6a4a9a','#c8688a']],[19000,['#121e5c','#1e3078','#3a3e84']],[19800,['#0a1442','#12205c','#242c64']],[99999,['#0a1442','#12205c','#242c64']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const nube=(g,x,y,s,c)=>{el(g,c,x,y,40*s,5*s);el(g,c,x-24*s,y+2*s,26*s,4*s);el(g,c,x+26*s,y+1*s,28*s,4*s)};
const INTRO="Fez, dall’alba alla notte. Parti dalla Porta Blu, quando i banchi si accendono e il vapore della bissara sale nell’aria fresca; poi la Talaa Kebira ti porta nel cuore della città, fra madrase di cedro e moschee dove si entra solo dalla soglia, in silenzio. Nella tarda mattina le vasche colorate delle concerie ti mostrano il mestiere più antico; a mezzogiorno il martello dei ramai batte il tempo della piazza. Il primo pomeriggio è per la tavola, con la pastilla e il tè alla menta; poi Fès el-Jdid, le grandi porte di ottone e le stelle di zellige tagliate a mano. Al tramonto, dall’alto della collina, la medina si accende di luci e i muezzin si rispondono da un minareto all’altro; a notte, sotto la Porta Blu, l’oud riempie l’aria. Il tempo qui si piega: gli abitanti di ogni epoca ti vengono incontro, e la città è quella di oggi.";
const LKTXT=[
"Bab Bou Jeloud, la Porta Blu, uno degli ingressi principali di Fès el-Bali. L’attuale porta è del 1913, costruita durante il protettorato francese accanto a una porta più antica e più semplice, che esiste ancora. Ha tre archi a ferro di cavallo rivestiti di zellige: blu all’esterno, il colore di Fez, e verde all’interno, il colore dell’Islam. Dal suo arco si vede il minareto della Bou Inania.",
"Appena sorge il giorno, sotto la porta i banchetti servono la bissara, una zuppa di fave secche con olio e cumino, il msemen caldo e il tè alla menta. È la colazione di chi va a lavorare, e si mangia spesso in piedi, con il pane.",
"La Talaa Kebira, \"la grande salita\", è la strada principale che dalla porta sale e scende verso il cuore religioso della città, fra botteghe, caffè e madrase. È troppo stretta per le auto: vi passano pedoni, carretti, asini e muli.",
"All’alba la voce del muezzin si alza da tanti minareti, uno dopo l’altro, e la città si sveglia. Nella medina il richiamo alla preghiera scandisce la giornata cinque volte, ed è un suono quotidiano e rispettoso, che accompagna chi lavora.",
"La Qarawiyyin, fondata nell’859 da Fatima al-Fihri, figlia di un mercante venuto da Kairouan, è una moschea con una scuola accanto, considerata la più antica università ancora attiva del mondo. Fu ampliata più volte nei secoli. È un luogo di preghiera: i visitatori che non sono musulmani guardano dalle porte, in silenzio.",
"La biblioteca della Qarawiyyin custodisce manoscritti rari, fra cui un Corano del IX secolo e una copia della Muqaddima di Ibn Khaldun. Fu restaurata su progetto dell’architetta Aziza Chaouni e riaperta nel 2016; durante i lavori il corso d’acqua che passava sotto il pavimento fu deviato in un canale.",
"Il santuario di Moulay Idriss II, il fondatore della seconda riva della città, considerato il patrono di Fez: i fedeli vengono a pregare e a chiedere una benedizione. Ha un tetto verde a piramide e uno dei minareti più alti della medina. Entrano solo i musulmani; chi non lo è guarda dalla soglia, rispettando il limite di legno.",
"Un fiume attraversa la medina, l’Oued Fès: un tempo dava energia ai mulini e alle concerie e portava l’acqua alle fontane e ai bagni pubblici. Oggi scorre in gran parte fra i muri e sotto le case, e se ne sente il rumore.",
"La Chouara è la più grande delle tre concerie di Fez e, secondo la tradizione, lavora da circa mille anni (si cita spesso l’XI secolo), con metodi che sono cambiati poco. Dall’alto delle terrazze delle botteghe di pelle si vedono le vasche di pietra come una tavolozza di colori.",
"Prima le pelli si immergono in vasche bianche con calce e una miscela con escrementi di piccione, che ammorbidisce il cuoio; poi si impastano con i piedi e solo dopo vanno nelle vasche dei colori. Le tinte sono naturali: papavero per il rosso, indaco per il blu, henné per l’arancio, zafferano per il giallo, menta per il verde, cedro per il marrone.",
"Chi sale sulle terrazze delle botteghe riceve un rametto di menta fresca da tenere sotto il naso, perché l’odore delle vasche è forte. Sulle terrazze si vendono borse, giacche e babouches fatte con le pelli appena tinte. È un luogo di lavoro, non un museo: si chiede il permesso prima di fotografare le persone.",
"Place Seffarine, la piazza dei ramai (\"saffarin\"), dove le botteghe di rame lavorano da secoli. Sulla piazza si affacciano la biblioteca della Qarawiyyin, la madrasa Seffarine del 1271, la prima fatta costruire dai Merinidi a Fez, e un antico hammam. Si sente da lontano il tac-tac dei martelli.",
"La madrasa Attarine, \"dei profumieri\", costruita fra il 1323 e il 1325 dal sultano merinide Abu Said Uthman II; prende il nome dal souk delle spezie e dei profumi che le sta accanto. Con il suo piccolo cortile di zellige, stucco intagliato e cedro è una delle più eleganti di Fez.",
"La madrasa Bou Inania, costruita fra il 1350 e il 1355 dal sultano merinide Abu Inan Faris: è la sola madrasa di Fez con un minareto e un tempo serviva anche da moschea del venerdì. Si dice che, quando gli presentarono il conto altissimo dei lavori, il sultano rispondesse che la bellezza non è mai cara e che gettasse il foglio nel fiume.",
"Di fronte alla Bou Inania, sul muro di una casa, c’è l’orologio ad acqua del 1357, costruito per la madrasa. Secondo la tradizione, a ogni ora si apriva una porticina e una sfera di metallo cadeva in una delle dodici ciotole di ottone.",
"La fontana di Nejjarine, \"dei falegnami\", nel centro dell’omonima piazza: una fontana ricoperta di zellige, con un tettuccio di cedro scolpito, un tempo punto di incontro per chi veniva a prendere l’acqua. Oggi vi si ferma chi passa, per guardare i mosaici.",
"Accanto alla fontana si trova il fondouk di Nejjarine, una locanda per mercanti commissionata nel 1711 sotto il sultano Moulay Ismail; oggi vi si trova un museo delle arti e dei mestieri del legno. Al piano terra si tenevano merci e animali, ai piani superiori dormivano i mercanti; attorno al cortile corrono gallerie di cedro intagliato su tre piani.",
"Il souk degli Attarine è il mercato delle spezie e dei profumi, accanto alla Qarawiyyin: cumino, zenzero, zafferano, cannella, paprika, e il ras el hanout, un miscuglio di spezie che ogni speziale compone a modo suo. L’aria profuma di fiori d’arancio e di incenso.",
"La cucina di Fez è considerata la più raffinata del Marocco: dolce e salata insieme, con spezie dosate con cura. La specialità della città è la pastilla, una torta di sfoglia sottilissima con piccione o pollo, mandorle e cannella, spolverata di zucchero a velo; il venerdì, dopo la preghiera, in molte case si mangia il couscous. Il tè alla menta si offre a ogni ospite.",
"Fès el-Jdid, \"la nuova Fez\", fu fondata nel 1276 dal sultano merinide Abu Yusuf Yaqub come città reale con palazzo, moschea e caserme: ha già più di settecento anni. Il Mechouar è la grande piazza fortificata davanti al palazzo.",
"Dar el-Makhzen, il Palazzo Reale di Fez, occupa circa ottanta ettari e non è aperto al pubblico. Dalla piazza si ammirano le sue grandi porte di ottone lucido, incorniciate da zellige e da cedro intagliato.",
"Il Mellah, il quartiere ebraico di Fez, fu costruito nel 1438 accanto al palazzo; lo si riconosce dai balconi di legno che si affacciano sulla strada. La sinagoga Ibn Danan, del Seicento, è stata restaurata e si visita; vicino c’è un cimitero con le tombe bianche in pendio. Per secoli artigiani, orafi e commercianti ebrei e musulmani hanno vissuto e lavorato fianco a fianco.",
"Lo zellige è un mosaico di terracotta: piastrelle quadrate di argilla di Fez, cotte e smaltate, che il maestro (maâlem) taglia a mano con il menqach, un martello-scalpello, in tante piccole forme che formano stelle e arabeschi. Il suono tac-tac-tac è uno dei suoni della medina.",
"Borj Nord, il forte sul poggio, fu costruito nel 1582 dal sultano saadiano Ahmad al-Mansur per controllare la città. Oggi è il Museo delle Armi, con spade, fucili intarsiati e cannoni. Dal tetto la vista sulla medina è fra le più belle.",
"Le Tombe Merinidi sono i resti di mausolei del Trecento, in rovina, sulla collina a nord della medina; non si sa con certezza chi sia sepolto in ciascuno. Oggi sono il punto più amato per guardare il tramonto sulla città.",
"Dalla collina, al tramonto, la medina sembra una distesa di tetti piatti color sabbia, con le antenne e i minareti. Poco dopo si alza il richiamo alla preghiera, da tutte le moschee quasi insieme, e le luci si accendono una dopo l’altra.",
"In ogni quartiere c’è un forno comune, il ferran. Le famiglie portano l’impasto su un vassoio di legno coperto da un panno, con un segno di riconoscimento, e il fornaio sa quale appartiene a chi. Il venerdì si cuociono anche carne e teglie. Insieme alla moschea, alla fontana, alla scuola coranica e all’hammam è uno dei punti fermi del quartiere.",
"L’hammam è il bagno pubblico caldo: si entra in sale calde con vapore, ci si lava con il sapone nero e il guanto kessa e si usa l’argilla ghassoul per pelle e capelli. È un posto per rilassarsi e chiacchierare, e ciascuno va ai suoi orari.",
"Alla sera, alla fontana del quartiere, ci si ferma a parlare mentre i bambini giocano e gli asini rientrano. I vicoli sono stretti, e le case si fanno ombra a vicenda. Chi ha fatto la strada tutto il giorno si siede un attimo e prende un tè.",
"Di sera la Porta Blu si illumina e le piastrelle brillano. Attorno, caffè e terrazze si riempiono di famiglie, di amici e di visitatori, e la piazza è un via vai di persone che passeggiano e chiacchierano.",
"Nei caffè sotto la porta, la sera, qualcuno prende l’oud e canta. A Fez la musica andalusa, il malhun e il chaabi sono vivi nelle feste e nei matrimoni, e a giugno la città ospita il Festival di Musica Sacra del Mondo, nato nel 1994.",
"Sotto l’arco di zellige, la luce passa lo stesso."
];
const NAME={
fz_zineb:"Zineb, la venditrice di msemen",
fz_fatima:"Fatima al-Fihri",
fz_youssef:"Youssef, il conciatore",
fz_brahim:"Si Brahim, il ramaio",
fz_latifa:"Lalla Latifa, la cuoca",
fz_mustapha:"Maâlem Mustapha, il maestro di zellige",
fz_imane:"Imane, la studentessa di architettura",
fz_hamid:"Hamid, il musicista"
};
const GREET={
fz_zineb:"Sbah lkhir, Pierpaolo! Mrhba, mrhba, siediti qui che il msemen è ancora caldo. Io sono Zineb, e questa piastra è mia da trent’anni, a khouya. Che ti preparo: miele o formaggio?",
fz_fatima:"Salam, Pierpaolo, ahlan wa sahlan. Mi dicono che a Fez il tempo si pieghi: ne approfitto per rivedere la mia città. Io sono Fatima al-Fihri, e questa moschea è nata da una promessa.",
fz_youssef:"Salam, Pierpaolo! Prendi la menta e mettila sotto il naso, e non fare quella faccia: a me l’odore non lo dice più nessuno. Io sono Youssef, e queste vasche sono il mio lavoro da quando avevo quindici anni.",
fz_brahim:"Salam, Pierpaolo! Entra, entra, mrhba. Senti questo rumore? È il cuore di Fez: tac, tac, tac. Io sono Si Brahim, e questo martello batte qui da quarant’anni. Un tè, prima di tutto.",
fz_latifa:"Mrhba, mrhba, Pierpaolo! Siediti, è l’ora del pranzo e nessuno esce da qui a stomaco vuoto. Io sono Latifa, e la mia cucina è più vecchia di me. Tfaddal, assaggia!",
fz_mustapha:"Salam, Pierpaolo! Fermati, non toccare la polvere: è argilla di Fez e si attacca alle scarpe! Io sono Mustapha, maâlem di zellige. Qui facciamo i mosaici che vedi sulle fontane, pezzo per pezzo, a mano. Tac, tac!",
fz_imane:"Ehi, Pierpaolo! Sei arrivato giusto in tempo: guarda che luce! Io sono Imane, studio architettura, e questa vista è la mia aula preferita. Siediti sul muretto: vedrai Fez accendersi.",
fz_hamid:"Masa lkhir, Pierpaolo! Siediti, che la serata comincia adesso. Io sono Hamid, e il mio oud ha più storie di me. Ti suono qualcosa?"
};
const RM2='#c8702a',VRG='#1f8a56';
const SA='#d8b27a',SA2='#c49660',SA3='#a87848';
/* ---- facciate di strada, zona per zona ---- */
function fac(g,x,w,h,i,st,wx){const k=A.getDK(),gt=GT,r=hr(i*3);
 if(st==1){/* Bab Bou Jeloud e Talaa Kebira: case ocra di tre-quattro piani, finestrelle ad arco, balconi di legno, tende dei caffè */
  casa(g,x+4,w-26,h+40,i,k,{wall:[SA,'#cf9f68','#dcb888','#c8955a'][md(i,4)],win:'ar',bal:md(i,3)!=1,roof:'p',door:['shop','arch','cedar'][md(i,3)],awn:md(i,2)?['#c8402a','#2a5aa8','#2a8a5a'][md(i,3)]:0});return}
 if(st==2){/* Qarawiyyin e Moulay Idriss II: pietra levigata, porte di cedro, tetti di tegole verdi, botteghe di profumi */
  casa(g,x+6,w-26,h+30,i,k,{wall:['#e0c898','#d8bc88','#e8d4a8'][md(i,3)],win:'ar',bal:md(i,2),roof:md(i,3)==1?'g':'p',door:md(i,2)?'cedar':'shop'});return}
 if(st==3){/* Concerie: case basse ocra intorno alle vasche, pelli stese sui tetti */
  casa(g,x+6,w-30,h-30,i,k,{wall:[SA2,'#cfa468','#d8b888','#b88858'][md(i,4)],win:md(i,2)?'sq':'ar',bal:0,roof:'v',door:md(i,3)==0?'cedar':'shop',awn:md(i,2)?0:'#e8b030'});return}
 if(st==4){/* Place Seffarine, Attarine, Bou Inania: facciate scure di cedro e muri ocra con insegne e botteghe */
  casa(g,x+4,w-24,h+20,i,k,{wall:['#8a5a34','#d0a870','#6a4226','#c8955a'][md(i,4)],win:'ar',bal:md(i,3)==2,roof:'p',door:md(i,2)?'shop':'cedar',awn:md(i,3)==1?'#2a5aa8':0});return}
 if(st==5){/* Place Nejjarine e souk: case alte ocra con balconi di cedro, botteghe di falegnami e spezie */
  casa(g,x+4,w-24,h+50,i,k,{wall:[SA,'#d0a066','#e0bc84','#c49660'][md(i,4)],win:'ar',bal:1,roof:'p',door:['shop','arch','shop'][md(i,3)],awn:md(i,3)==0?'#c8402a':md(i,3)==2?'#2a8a5a':0});return}
 if(st==6){/* Fès el-Jdid: il muro lungo e chiaro con i merli e le porte, poi le case del Mellah con i balconi di legno */
  if(md(i,3)==0){const W='#e6d8b8';rect(g,W,x,gt-130,w-14,130);rect(g,'rgba(255,255,255,.18)',x,gt-130,5,130);rect(g,'rgba(0,0,0,.1)',x+w-26,gt-130,12,130);for(let q=0;q<(w-14)/18;q++){rect(g,W,x+q*18,gt-142,12,14)}rect(g,'#d4c4a0',x-3,gt-132,w-8,4);fer(g,'#2a2018',x+w/2-26,gt,38,70);fer(g,k>.2?'rgb(255,210,140)':'#5a4a38',x+w/2-22,gt,30,64);return}
  casa(g,x+6,w-26,h+30,i,k,{wall:['#e0d0b0','#d8c8a8','#e8dcc0'][md(i,3)],win:'sq',bal:1,roof:'p',door:md(i,2)?'cedar':'arch'});return}
 if(st==7){/* Borj Nord: il pendio asciutto con muretti di mattoni, erba secca, qualche ulivo e cespugli */
  if(r>.55){const cx=x+w*.5;ln(g,'#6a5a46',5,[cx,gt,cx-3,gt-26,cx+2,gt-44]);[[0,-52,26,13,'#8a9a6a'],[-16,-44,16,9,'#7a8a5a'],[16,-46,18,9,'#98a878']].forEach(c=>el(g,c[4],cx+c[0],gt+c[1],c[2],c[3]));return}
  rect(g,'#b0764a',x+10,gt-34-r*30,w-50,34+r*30);for(let q=0;q<(34+r*30)/7;q++)rect(g,'rgba(40,14,4,.12)',x+10,gt-34-r*30+q*7,w-50,1);rect(g,'rgba(255,255,255,.12)',x+10,gt-34-r*30,4,34+r*30);rect(g,'#8a5a38',x+6,gt-38-r*30,w-42,5);
  for(let q=0;q<6;q++)ln(g,'#a89a50',1.4,[x+w-30+q*6,gt,x+w-30+q*6+(q%2?2:-2),gt-10-hr(q+i)*10]);return}
 if(st==8){/* il quartiere: case ocra con porte ad arco dipinte, finestrelle, balconi, lampade che si accendono */
  casa(g,x+4,w-24,h+20,i,k,{wall:[SA,'#d0a066','#e0bc84','#c8955a'][md(i,4)],win:'ar',bal:md(i,2),roof:'p',door:md(i,3)==1?'shop':'arch'});
  const dc=['#2a5aa8','#2a8a5a','#c8402a'][md(i,3)];rect(g,dc,x+w/2-20,gt-64,40,4);if(k>.15)glow(g,x+w/2,gt-50,40,'255,200,120',.3*k);return}
 /* 9: la piazza della Porta Blu di notte: case alte con finestre accese, terrazze di caffè con lanterne */
 casa(g,x+4,w-24,h+60,i,k,{wall:[SA,'#d0a066','#e0bc84','#c49660'][md(i,4)],win:'ar',bal:md(i,3)==0,roof:'p',door:'shop'});
 if(md(i,3)==1){const lc=['255,90,90','90,200,120','255,200,70','90,150,255'][md(i,4)];for(let q=0;q<3;q++){const lx=x+14+q*(w-50)/2;rect(g,'#2a2018',lx-.6,gt-112,1.2,10);rect(g,'rgb('+lc+')',lx-4,gt-102,8,11);glow(g,lx,gt-96,30,lc,.5*Math.max(.3,k))}}}
/* ---- livello 0: cielo, sole, luna, nuvole sottili, velo dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-18200)/2000,0,1);if(nt>0)for(let i=0;i<60;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.85*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/17400,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*252;
 if(xs<17600){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,15)}
 const mu=cl((xs-18000)/2400,0,1);if(mu>0){const mx=150+mu*230,my=300-mu*200;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<2600?'rgba(252,206,214,.5)':xs<14800?'rgba(255,255,255,.55)':xs<17800?'rgba(255,170,130,.55)':'rgba(140,120,190,.3)';
 each(o-((t*4)%340)*.02,340,1,(x,i,r)=>{if(r>.45)return;nube(g,x+r*100,40+r*60,.8+r*.6,cc)});
 const fo=cl(1-xs/2600,0,1)*.3;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-9400)/1200,0,1)*cl((14800-xs)/1200,0,1)*.13;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-15200)/900,0,1)*cl((18200-xs)/1000,0,1)*.28;if(wg>.01){g.fillStyle='rgba(255,120,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: i tetti e i minareti della medina, le colline spoglie con le Tombe e il forte, i monti lontani, il mare di luci ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 /* i monti lontani, sfumati (zone 6-8) */
 const mt=env(15400,6200);if(mt>.02){g.globalAlpha=mt*.8;const sx=fx(15400);g.fillStyle=dim('#9aa4c8');g.beginPath();g.moveTo(sx-420,hz+30);[[-420,-30],[-340,-56],[-270,-44],[-190,-86],[-110,-62],[-30,-96],[50,-70],[120,-92],[200,-58],[280,-74],[350,-44],[420,-30]].forEach(p=>g.lineTo(sx+p[0],hz+p[1]));g.lineTo(sx+420,hz+30);g.closePath();g.fill();g.globalAlpha=1}
 /* i tetti piatti e i minareti della medina nella luce chiara (zone 1-5) */
 const me=env(4800,6400);if(me>.02){g.globalAlpha=me;const sx=fx(4800);for(let q=0;q<34;q++){const bx=sx-400+q*26,bh=18+hr(q*3)*30;rect(g,dim(['#e4c898','#d8b888','#ecd6a8','#d0ac78'][q%4]),bx,hz+16-bh,24,bh);rect(g,'rgba(255,255,255,.18)',bx,hz+16-bh,3,bh);if(night>.3&&hr(q)>.5)rect(g,'rgba(255,226,160,.85)',bx+8,hz+22-bh,4,3)}
  [[-300,70,'#1f8a56'],[-120,86,'#d8b888'],[60,64,'#1f8a56'],[200,92,'#d8b888'],[320,60,'#1f8a56']].forEach((m,i)=>{rect(g,dim('#dcc090'),sx+m[0]-6,hz+16-m[1],12,m[1]);poly(g,dim(m[2]=='#1f8a56'?'#1f8a56':'#c8a870'),[[sx+m[0]-8,hz+16-m[1]],[sx+m[0],hz+16-m[1]-12],[sx+m[0]+8,hz+16-m[1]]]);dot(g,'#e8b830',sx+m[0],hz+16-m[1]-14,1.6)});
  [-200,-30,140,260].forEach(o2=>{poly(g,dim(VRG),[[sx+o2-26,hz-6],[sx+o2-6,hz-30],[sx+o2+6,hz-30],[sx+o2+26,hz-6]])});g.globalAlpha=1}
 /* le colline spoglie con il forte sul poggio e le rovine delle Tombe (zone 5-7) */
 const co=env(14200,6000);if(co>.02){g.globalAlpha=co;const sx=fx(14200);g.fillStyle=dim('#b89868');g.beginPath();g.moveTo(sx-380,hz+30);for(let q=0;q<=26;q++){const px=sx-380+q*29;g.lineTo(px,hz-24-26*Math.abs(Math.sin(q*.55))-10*Math.sin(q*1.7))}g.lineTo(sx+380,hz+30);g.closePath();g.fill();
  g.fillStyle=dim('#c8a878');g.beginPath();g.moveTo(sx-340,hz+30);for(let q=0;q<=22;q++){const px=sx-340+q*31;g.lineTo(px,hz-4-12*Math.abs(Math.sin(q*.9)))}g.lineTo(sx+340,hz+30);g.closePath();g.fill();
  rect(g,dim('#b0764a'),sx+60,hz-76,44,30);for(let q=0;q<5;q++)rect(g,dim('#b0764a'),sx+60+q*10,hz-82,6,7);
  for(let q=0;q<4;q++){rect(g,dim('#a8704a'),sx-120+q*22,hz-46,14,24);ar(g,'#f2a05a',sx-117+q*22,hz-22,8,14)}g.globalAlpha=1}
 /* le torri e il muro chiaro di Fès el-Jdid (zona 6) */
 const rj=env(13600,3600);if(rj>.02){g.globalAlpha=rj;const sx=fx(13600);rect(g,dim('#e6d8b8'),sx-200,hz-28,400,44);for(let q=0;q<22;q++)rect(g,dim('#e6d8b8'),sx-200+q*18,hz-36,11,9);[-150,0,130].forEach(o2=>{rect(g,dim('#dccaa0'),sx+o2-14,hz-70,28,60);for(let q=0;q<3;q++)rect(g,dim('#dccaa0'),sx+o2-14+q*10,hz-76,8,8)});tegole(g,sx+60,hz-28,60,22,dim('#1f8a56'));g.globalAlpha=1}
 /* il mare di luci gialle fra i minareti (zona 9) */
 const lt=env(20600,3800);if(lt>.02){g.globalAlpha=lt;const sx=fx(20600);g.fillStyle=dim('#1e2a3e');g.beginPath();g.moveTo(sx-460,hz+30);for(let q=0;q<=36;q++){const px=sx-460+q*26;g.lineTo(px,hz-8-16*Math.abs(Math.sin(q*.7))-6*Math.sin(q*2))}g.lineTo(sx+460,hz+30);g.closePath();g.fill();
  [-280,-100,90,260].forEach(o2=>{rect(g,dim('#24324a'),sx+o2-6,hz-84,12,92);poly(g,dim('#24324a'),[[sx+o2-8,hz-84],[sx+o2,hz-98],[sx+o2+8,hz-84]]);rect(g,'rgba(255,226,160,.9)',sx+o2-2,hz-76,4,5)});
  for(let q=0;q<120;q++)dot(g,'rgba(255,200,110,'+(.35+.4*Math.sin(t*3+q))*night+')',sx-440+hr(q)*880,hz-6+hr(q*3)*26,1.1+hr(q*5)*.6);glow(g,sx,hz,260,'255,200,110',.28*night);g.globalAlpha=1}}
/* ---- livello 2: profili di tetti piatti, minareti, tegole verdi e pelli ad asciugare, zona per zona ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=112,wins=(n,top)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.85)',x+12+(q%4)*22,top+Math.floor(q/4)*13,5,4)};
  const hh=zz==7?16+r*26:zz==3?30+r*30:44+r*50,wall=dim(['#e4c898','#d8b888','#ecd6a8','#d0ac78'][md(i,4)]);
  rect(g,wall,x,hz-hh,w-10,hh+10);rect(g,'rgba(255,255,255,.18)',x,hz-hh,4,hh+10);rect(g,'rgba(0,0,0,.1)',x+w-24,hz-hh,14,hh+10);for(let q=0;q<(w-10)/12;q++)rect(g,wall,x+q*12,hz-hh-5,8,5);
  if(zz==3&&hr(i*3)>.35)for(let q=0;q<4;q++){poly(g,dim(['#b83a2a','#e8b030','#2a5aa8','#c86a2a'][(q+i)&3]),[[x+6+q*24,hz-hh],[x+24+q*24,hz-hh],[x+22+q*24,hz-hh+16],[x+8+q*24,hz-hh+12]])}
  if(zz<=2&&hr(i*3)>.72){tegole(g,x+50,hz-hh-5,60,26,dim(VRG))}
  if(zz==2&&hr(i*3+1)>.82){mina(g,x+36,hz-hh-5,16,50,dim(VRG),night,i)}
  if(zz==1&&hr(i*5)>.78){mina(g,x+44,hz-hh-5,18,60,dim(VRG),night,i)}
  if(zz==5&&hr(i*3)>.8){rect(g,dim('#8a5a34'),x+20,hz-hh-12,40,12);rect(g,dim('#6a4226'),x+18,hz-hh-14,44,3)}
  if(zz==6&&hr(i*3)>.6){rect(g,dim('#e6d8b8'),x+10,hz-hh-26,60,26);for(let q=0;q<5;q++)rect(g,dim('#e6d8b8'),x+10+q*13,hz-hh-32,8,7)}
  if(zz==7&&hr(i*3)>.6)tegole(g,x+54,hz-hh-5,52,24,dim(VRG));
  if(zz==8&&hr(i*3)>.78){rect(g,dim('#dccaa0'),x+30,hz-hh-34,22,34);rect(g,'#e8b830',x+39,hz-hh-40,2,6)}
  if(hr(i*9)>.55&&zz!=3){el(g,dim('#d8d8d4'),x+80,hz-hh-8,6,3.4,-.5);rect(g,dim('#6a6e74'),x+79.4,hz-hh-6,1.4,6)}
  wins(8,hz-hh+12)});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
/* ---- livello 3: le strade, zona per zona ---- */
function layerStreet(g,o,t){const gt=GT;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(180,7,Z[0],Z[1],1,i=>130+hr(i*5)*60,166);each2(180,8,Z[1],Z[2],2,i=>110+hr(i*5)*50,166);each2(170,9,Z[2],Z[3],3,i=>110+hr(i*5)*40,156);
 each2(180,10,Z[3],Z[4],4,i=>120+hr(i*5)*40,166);each2(180,11,Z[4],Z[5],5,i=>120+hr(i*5)*40,166);each2(190,12,Z[5],Z[6],6,i=>110+hr(i*5)*40,176);
 each2(150,13,Z[6],Z[7],7,i=>40+hr(i*5)*30,140);each2(170,14,Z[7],Z[8],8,i=>130+hr(i*5)*40,156);each2(180,15,Z[8],Z[9],9,i=>120+hr(i*5)*50,166)}
/* ---- vita: piccioni, passeri, rondini e rondoni al tramonto, gatti e passanti ---- */
function layerLife(g,o,t){const cam=o,xs=cam+240;
 /* piccioni sui tetti e nelle piazze */
 if(xs<17000)for(let i=0;i<4;i++){const bx=((i*131+t*(40+i*6))%600)-60,by=60+hr(i*3)*110+Math.sin(t*2+i*2)*12,w=Math.sin(t*10+i)*3.4;g.strokeStyle='rgba(120,126,140,.9)';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke();rect(g,'rgba(90,96,110,.9)',bx-2,by,5,3)}
 /* passeri nei cortili */
 if(xs<18200)for(let i=0;i<3;i++){const bx=((i*171+t*(80+i*9))%620)-70,by=110+hr(i*5+2)*120+Math.sin(t*3+i)*10,w=Math.sin(t*16+i)*2;g.strokeStyle='rgba(90,66,40,.85)';g.lineWidth=1.8;g.beginPath();g.moveTo(bx-5,by+w);g.lineTo(bx,by);g.lineTo(bx+5,by+w);g.stroke()}
 /* rondini e rondoni nel cielo del tramonto */
 const sw=cl((xs-14800)/700,0,1)*cl((19200-xs)/900,0,1);if(sw>.05)for(let i=0;i<7;i++){const bx=((i*83+t*(110+i*12))%640)-80,by=40+hr(i*7)*120+Math.sin(t*4+i*2)*20,w=Math.sin(t*18+i)*4;g.strokeStyle='rgba(30,24,50,'+(.85*sw)+')';g.lineWidth=2;g.beginPath();g.moveTo(bx-9,by+w);g.quadraticCurveTo(bx-3,by-5,bx,by);g.quadraticCurveTo(bx+3,by-5,bx+9,by+w);g.stroke()}
 /* passanti nei vicoli: facchini, studenti, famiglie */
 [[300,2500,36,0],[2800,4900,-28,1],[7100,9700,30,2],[9900,12300,-26,3],[12500,15000,22,4],[17300,19300,-24,5],[19500,21400,26,6]].forEach((rg,ri)=>{for(let i=0;i<2;i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.25),wx=rg[0]+(((t*sp+i*span/2)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));const d=sp>0?1:-1;g.save();g.translate(px,GT+24+i*10);g.scale(d*.6,.6);
  fig(g,0,0,t*3,{f:1,s:.7,ph:i+ri,skin:tn(['#e0b090','#d09a70','#c88a64'][(i+ri)%3]),top:tn(['#e8e0cc','#8a8a9a','#c8503a','#2a6aa8','#3a3a46','#e8c04a','#2a8a5a'][(i*3+ri)%7]),bot:tn((i+ri)%2?'#3a3a46':'#d8d0b8'),hair:tn('#2a1a10')});g.restore()}})}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#bfae92','k'],[Z[1],Z[2],'#c8b898','l'],[Z[2],Z[3],'#b0a088','c'],[Z[3],Z[4],'#c4b496','p'],[Z[4],Z[5],'#c2b08e','n'],[Z[5],Z[6],'#d8cdb0','m'],[Z[6],Z[7],'#b89a6a','t'],[Z[7],Z[8],'#a89878','q'],[Z[8],Z[9],'#9a8c76','w']];
 rect(g,'#d8cdb0',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const slabs=(bw0,add,al,irr)=>{for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy+(irr?hh*3:0),bw-2-(irr?hh*6:0),15);rect(g,'rgba(0,0,0,.12)',px,yy,1.3,17)}rect(g,'rgba(0,0,0,.09)',x0,yy+15,x1-x0,1.4)}};
  const chan=()=>{rect(g,'rgba(40,30,20,.35)',x0,gt+118,x1-x0,5);rect(g,'rgba(120,170,200,.35)',x0,gt+119,x1-x0,2)};
  if(z[3]=='k'){slabs(34,6,.2,1);chan();for(let q=0;q<50;q++)rect(g,'rgba(0,0,0,.08)',x0+((q*41-cam)%ww+ww)%ww,gt+8+hr(q)*130,5,3)}
  if(z[3]=='l'){slabs(60,10,.26);rect(g,'rgba(0,0,0,.12)',x0,gt+84,x1-x0,2);chan()}
  if(z[3]=='c'){slabs(40,6,.14,1);rect(g,'#8a7a62',x0,gt+96,x1-x0,6);rect(g,'rgba(90,60,40,.3)',x0,gt+102,x1-x0,22);for(let q=0;q<40;q++)dot(g,['#c8402a','#e8b030','#2a5aa8'][q%3],x0+((q*37-cam)%ww+ww)%ww,gt+106+hr(q)*14,2)}
  if(z[3]=='p'){slabs(70,8,.3);for(let q=0;q<3;q++){const px=((q*300+80-cam)%900+900)%900-120;if(px>x0-80&&px<x1)for(let r=0;r<3;r++)for(let s=0;s<8;s++)rect(g,(r+s)%2?'#2a5aa8':'#f0ead8',px+s*8,gt+24+r*8,8,8)}}
  if(z[3]=='n'){slabs(46,7,.2,1);for(let q=0;q<5;q++){const px=((q*260+100-cam)%1300+1300)%1300-130;for(let r=0;r<2;r++)for(let s=0;s<16;s++)rect(g,(r+s)%3==0?'#2a8a5a':(r+s)%2?'#1f4fa8':'#f0ead8',px+s*8,gt+30+r*8,8,8)}chan()}
  if(z[3]=='m'){slabs(96,14,.28);rect(g,'rgba(255,255,255,.12)',x0,gt+3,x1-x0,14)}
  if(z[3]=='t'){rect(g,'#a88a5a',x0,gt+40,x1-x0,60);for(let q=0;q<160;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.22)':'rgba(90,60,30,.2)',x0+((q*43)%ww),gt+8+hr(q+3)*130,2+hr(q)*4,1.6);for(let q=0;q<60;q++)rect(g,'#a89a50',x0+((q*61)%ww),gt+6+hr(q)*30,2,5);for(let q=0;q<6;q++)el(g,'#7a6a4a',x0+((q*190+50-cam)%ww+ww)%ww,gt+100+hr(q)*30,10,3);for(let r=0;r<4;r++)rect(g,'rgba(70,40,20,.2)',x0,gt+14+r*34,x1-x0,1.6)}
  if(z[3]=='q'){slabs(34,6,.18,1);chan();rect(g,'rgba(255,170,90,.1)',x0,gt+3,x1-x0,20);for(let q=0;q<8;q++){const px=((q*210+40-cam)%1700+1700)%1700-70;el(g,'rgba(255,200,110,.18)',px,gt+60+hr(q)*40,30,8)}}
  if(z[3]=='w'){slabs(52,8,.22);rect(g,'rgba(255,230,160,.12)',x0,gt+3,x1-x0,60);for(let q=0;q<3;q++){const px=((q*420+160-cam)%1300+1300)%1300-100;rect(g,'#8a2a2a',px,gt+40+q*8,70,30);for(let s=0;s<7;s++)rect(g,['#e8b030','#2a5aa8','#f0ead8'][s%3],px+2+s*10,gt+42+q*8,6,26)}
   for(let q=0;q<26;q++)el(g,'rgba(250,248,240,.8)',((q*53-cam)%ww+ww)%ww+x0*0,gt+14+hr(q)*120,2.6,1.1)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1400,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const gd=cl((cam-9400)/900,0,1)*cl((14800-cam)/900,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
 const sg=cl((cam-15000)/700,0,1)*cl((18000-cam)/900,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Zineb: grembiule a fiori, foulard colorato sui capelli, mani infarinate, spatola di ferro, piastra rovente davanti */
 NP('fz_zineb',NAME.fz_zineb,980,GREET.fz_zineb,{skin:'#d8a078',top:'#c85a7a',bot:'#4a3a5a',hair:'#2a1a10',s:1.0},(g,b,t)=>{rect(g,tn('#f0ead8'),-11,-78+b,22,36);for(let q=0;q<6;q++)dot(g,tn(['#d85a7a','#4aa05a','#e8b030'][q%3]),-7+(q%3)*7,-72+b+Math.floor(q/3)*12,2.2);
  poly(g,tn('#2a8a9a'),[[-12,-108+b],[12,-108+b],[14,-98+b],[-14,-96+b]]);for(let q=0;q<4;q++)dot(g,tn('#f2c82a'),-8+q*5,-103+b,1.4);dot(g,'#f6f2e6',-15,-48,3.2);dot(g,'#f6f2e6',15,-48,3.2);
  ln(g,'#8a8e94',2,[14,-58,32,-36]);rect(g,'#6a6e74',28,-38,10,5);rect(g,'#2a2622',16,-30,34,8);glow(g,33,-28,32,'255,150,60',.4);rect(g,'#e8802a',20,-23,26,2);el(g,'#e8c068',28,-32,8,2.6)}),
 /* Fatima al-Fihri: lungo abito verde scuro, velo bianco, rotolo di pergamena sotto il braccio, calamaio di ottone */
 NP('fz_fatima',NAME.fz_fatima,3045,GREET.fz_fatima,{skin:'#e0b896',top:'#1f4a3a',bot:'#1f4a3a',hair:'#1f4a3a',long:1,s:1.02},(g,b,t)=>{poly(g,tn('#f4f0e6'),[[-15,-112+b],[1,-120+b],[15,-112+b],[16,-82+b],[0,-76+b],[-16,-82+b]]);el(g,tn('#e0b896'),2,-102+b,8,9);dot(g,'#222',6,-103+b,1.4);
  rect(g,tn('#e8dcb8'),-26,-78,22,8);el(g,tn('#d8c898'),-26,-74,2.6,4);el(g,tn('#d8c898'),-4,-74,2.6,4);rect(g,'rgba(120,90,40,.35)',-22,-76,14,1);rect(g,tn('#c8a040'),12,-64,8,9);rect(g,tn('#8a6a22'),12,-66,8,3);rect(g,tn('#2a6a4a'),-14,-84+b,28,2)}),
 /* Youssef: pantaloni rimboccati, gambe nude nell’acqua colorata, maglietta macchiata, menta dietro l’orecchio, mani rosse e gialle */
 NP('fz_youssef',NAME.fz_youssef,6200,GREET.fz_youssef,{skin:'#b88660',top:'#c8c4d8',bot:'#b88660',hair:'#2a1a10',s:1.02},(g,b,t)=>{for(let q=0;q<5;q++)dot(g,tn(['#c8402a','#2a5aa8','#e8b030','#e8802a','#4a9a5a'][q]),-8+q*4.4,-70+b+(q%2)*10,3);dot(g,tn('#c8402a'),-14,-52,3.6);dot(g,tn('#e8b030'),14,-52,3.6);
  ln(g,'#2f8a3a',1.6,[-9,-106+b,-14,-112+b]);dot(g,'#4aaa4a',-14,-113+b,2.4);
  el(g,tn('#b8a888'),0,-8,40,11);el(g,tn('#e8503a'),0,-10,34,8);el(g,'rgba(255,255,255,.22)',-8,-12,12,2.6)}),
 /* Si Brahim: grembiule di cuoio, berretto bianco di cotone, occhiali, martello di ferro, mani segnate dal metallo */
 NP('fz_brahim',NAME.fz_brahim,7450,GREET.fz_brahim,{skin:'#d0987a',top:'#e8e0cc',bot:'#3a3e48',hair:'#8a8a8a',s:1.02},(g,b,t)=>{poly(g,tn('#7a4a2a'),[[-10,-86+b],[10,-86+b],[12,-42],[-12,-42]]);rect(g,'rgba(0,0,0,.2)',-12,-60,24,2);el(g,tn('#f4f0e6'),0,-112+b,13,6);rect(g,tn('#f4f0e6'),-12,-113+b,24,6);
  ln(g,'#2a2622',1.2,[3,-102+b,12,-102+b]);dot(g,'rgba(200,225,240,.5)',5,-102+b,2.8);dot(g,'rgba(200,225,240,.5)',11,-102+b,2.8);
  ln(g,'#6a6e74',3.4,[16,-58,28,-84+Math.sin(t*8)*6]);rect(g,'#4a4e54',24,-90+Math.sin(t*8)*6,12,6);el(g,RM2,34,-30,16,4);poly(g,'#ecaa58',[[22,-30],[46,-30],[42,-36],[26,-36]])}),
 /* Lalla Latifa: grembiule a fiori, foulard colorato, mestolo di legno, mani infarinate */
 NP('fz_latifa',NAME.fz_latifa,12100,GREET.fz_latifa,{skin:'#d8a078',top:'#4a7a9a',bot:'#4a3a5a',hair:'#2a1a10',s:1.0},(g,b,t)=>{rect(g,tn('#f0ead8'),-11,-78+b,22,36);for(let q=0;q<6;q++)dot(g,tn(['#d85a7a','#2a8a5a','#e8b030'][q%3]),-7+(q%3)*7,-72+b+Math.floor(q/3)*12,2.2);
  poly(g,tn('#d8502a'),[[-12,-108+b],[12,-108+b],[14,-98+b],[-14,-96+b]]);for(let q=0;q<4;q++)dot(g,tn('#f4f0e6'),-8+q*5,-103+b,1.4);dot(g,'#f6f2e6',-15,-48,3.2);dot(g,'#f6f2e6',15,-48,3.2);
  ln(g,'#8a6a3a',2.6,[14,-64,30,-92]);el(g,'#8a6a3a',32,-95,5,3.4)}),
 /* Maâlem Mustapha: grembiule di tela coperto di polvere d’argilla, occhiali, menqach (martello a doppia testa), piastrelle fresche */
 NP('fz_mustapha',NAME.fz_mustapha,14840,GREET.fz_mustapha,{skin:'#d0987a',top:'#a8a090',bot:'#4a4a52',hair:'#8a8a8a',s:1.02},(g,b,t)=>{poly(g,tn('#c8b898'),[[-10,-86+b],[10,-86+b],[12,-42],[-12,-42]]);for(let q=0;q<8;q++)dot(g,'rgba(180,140,100,.5)',-8+hr(q)*16,-80+b+hr(q+3)*34,1.6);
  ln(g,'#2a2622',1.2,[3,-102+b,12,-102+b]);dot(g,'rgba(200,225,240,.5)',5,-102+b,2.8);dot(g,'rgba(200,225,240,.5)',11,-102+b,2.8);
  ln(g,'#8a6a3a',2.6,[16,-60,26,-74+Math.sin(t*6)*3]);rect(g,'#4a4e54',20,-80+Math.sin(t*6)*3,14,4);rect(g,'#4a4e54',20,-77+Math.sin(t*6)*3,2,6);rect(g,'#4a4e54',32,-77+Math.sin(t*6)*3,2,6);
  for(let q=0;q<4;q++)rect(g,['#1f4fa8','#2a8a5a','#f0ead8','#e8b830'][q],-34,-8-q*3.6,22,3.2)}),
 /* Imane: zaino, jeans, giubbotto leggero, foulard colorato sui capelli, macchina fotografica al collo; seduta dietro il muretto */
 NP('fz_imane',NAME.fz_imane,16160,GREET.fz_imane,{skin:'#e0b090',top:'#c8a868',bot:'#2c5aa6',hair:'#2a1a10',s:1.0},(g,b,t)=>{rect(g,tn('#8a3a2a'),-20,-88+b,10,30);poly(g,tn('#d8502a'),[[-12,-110+b],[12,-110+b],[14,-98+b],[-14,-96+b]]);for(let q=0;q<4;q++)dot(g,tn('#f2c82a'),-8+q*5,-105+b,1.4);
  ln(g,'#2a2a2e',1.4,[-6,-88+b,0,-72,6,-88+b]);rect(g,'#2a2a2e',-4,-74,9,6);dot(g,'#4a6a8a',.5,-71,2);
  rect(g,'#c8a878',-24,-34,58,34);rect(g,'#b89868',-27,-40,64,8);for(let q=0;q<3;q++)rect(g,'rgba(0,0,0,.1)',-24+q*20,-34,1.4,34)}),
 /* Hamid: djellaba grigia con il cappuccio, tarbush rosso a cono, babouches, oud sulle ginocchia; seduto su una sedia di vimini */
 NP('fz_hamid',NAME.fz_hamid,20650,GREET.fz_hamid,{skin:'#d0987a',top:'#8a8a94',bot:'#8a8a94',hair:'#3a3a3e',long:1,s:1.04},(g,b,t)=>{poly(g,tn('#7a7a86'),[[-12,-92+b],[0,-88+b],[12,-92+b],[8,-80+b],[-8,-80+b]]);poly(g,tn('#c8281e'),[[-9,-112+b],[9,-112+b],[6,-128+b],[-6,-128+b]]);rect(g,tn('#2a2a2e'),-1,-131+b,2,4);
  ln(g,'#c8a868',2.6,[-20,-36,-20,-4]);ln(g,'#c8a868',2.6,[24,-36,24,-4]);rect(g,'#c8a868',-22,-38,48,4);for(let q=0;q<5;q++)rect(g,'rgba(0,0,0,.14)',-20+q*9,-38,1.2,4);
  g.save();g.translate(4,-52);g.rotate(-.5);el(g,tn('#a8602a'),0,0,16,11);el(g,'#14110f',2,0,4,3.4);ln(g,'#c8a868',3,[10,-4,34,-14]);rect(g,'#2a1c14',32,-18,6,6);g.restore();ln(g,'#d0987a',3,[10,-70+b,0,-56]);ln(g,'#d0987a',3,[-12,-70+b,22,-50])})
];
/* ---- oggetti lungo il percorso ---- */
const LX=[500,1150,1750,2300,3150,3750,4350,4850,5550,6200,6750,7550,8250,8950,9550,10300,10950,11600,12150,12950,13600,14130,14880,15650,16250,16850,17750,18400,19000,19950,20700,21670];
const props=[
 /* zona 1 · Bab Bou Jeloud e Talaa Kebira */
 ['fztarga',150,'BAB BOU JELOUD'],['fzlampione',250],['fzporta',500],['fzgatto',760,'#8a8a8a'],['fzcolazione',1150],['fzsgabelli',1030],['fzmenta',1290],['fzasino',1420],['fzverdure',1500,0],['fzlampione',1560],['fztalaa',1750],['fzcarretto',1960],['fzlampione',2060],['fzalba',2300],['fzgatto',2420,'#c9873a'],['fzpiccioni',2500],
 /* zona 2 · Qarawiyyin e Moulay Idriss II */
 ['fztarga',2700,'TALAA KEBIRA'],['fzfontanella',2850],['fzqara',3150],['fzlampione',3340],['fzcartello',3420],['fzbiblio',3750],['fzgatto',3900,'#4a4a4e'],['fzcandele',4040],['fzlampione',4150],['fzmoulay',4350],['fzcartello',4540],['fzfiume',4850,0],['fzasino',5000,1],
 /* zona 3 · Concerie Chouara */
 ['fztarga',5100,'TANNERIE CHOUARA'],['fzpelli',5200],['fzchouara',5550],['fzmenta',5800],['fzvasche',6200],['fzterrazza',6750],['fzlampione',6930],
 /* zona 4 · Place Seffarine, Attarine e Bou Inania */
 ['fztarga',7100,'PLACE SEFFARINE'],['fzseffarine',7550],['fzrame',7820],['fzlampione',7990],['fzattarine',8250],['fzgatto',8400,'#d8d0c0'],['fztarga',8560,'MADRASA BOU INANIA'],['fzbouinania',8950],['fzlampione',9150],['fzclock',9550],['fzasino',9740,0],
 /* zona 5 · Place Nejjarine e il souk delle spezie */
 ['fztarga',9900,'PLACE NEJJARINE'],['fznejjarine',10300],['fzfalegnami',10600],['fzfondouk',10950],['fzdolci',11250],['fzlampione',11340],['fzspezie',11600],['fzgatto',11780,'#c9873a'],['fztavola',12150],['fzvaso',12350,2],
 /* zona 6 · Fès el-Jdid, le porte reali e il Mellah */
 ['fztarga',12500,'FÈS EL-JDID'],['fzmechouar',12950],['fzlampione',13200],['fzottone',13600],['fzlampione',13810],['fzmellah',14130],['fzgatto',14320,'#e0d0b0'],['fzcimitero',14520],['fzzellige',14880],
 /* zona 7 · Borj Nord e Tombe Merinidi */
 ['fztarga',15180,'BORJ NORD'],['fzborj',15650],['fzmuretto',15900],['fztombemer',16250],['fzmuretto',16500,'#6a6a70'],['fzpanorama',16850],['fzlampione',17050],
 /* zona 8 · il quartiere al crepuscolo */
 ['fztarga',17290,'DERB DU QUARTIER'],['fzforno',17750],['fzbambini',17960],['fzmoschea',18090],['fzdonna',18290,1],['fzhammam',18400],['fzasino',18640,1],['fzfontana',19000],['fzcaffetto',19230],['fzgatto',19330,'#8a7a6a'],
 /* zona 9 · la Porta Blu di notte */
 ['fztarga',19480,'BAB BOU JELOUD'],['fzportanotte',19950],['fzlanterne',20330,170],['fzcaffe',20700],['fzdolcibanco',21020],['fzpalloncini',21140],['fzlampione',21260],['fzvarco',21670]
];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'medinadifez',name:'Medina di Fez · Dalla Porta Blu all’Arco di Zellige',width:W1,sky:['#7a86b4','#e6a8b4','#fbd2b8'],gt:372,gr:['#bfae92','#8a7a62'],chord:[196,233.1,293.7,349.2],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerLife)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da medina.txt) --- */
(function(){
const TOPX_FZ={
fz_zineb:[
["Chi sei e che fai?","Zineb, cinquantaquattro anni, faccio msemen. Mi alzo prima dell’alba, perché alla porta i clienti arrivano quando il cielo è ancora grigio. La piastra l’ho avuta da mia madre, e il banco da lei."],
["Cos’è il msemen?","Una sfoglia di semola piegata e ripiegata tante volte, poi cotta sulla piastra con un filo d’olio: fuori croccante, dentro morbida. Si mangia con miele, burro o formaggio. Accanto ci sono l’harcha, i panini di semola, e i baghrir, le frittelle con mille buchini."],
["Cosa si mangia a colazione qui?","Dipende dalla fame. Chi lavora duro prende la bissara, una zuppa di fave secche con olio, cumino e paprika, e la mangia in piedi con il pane. Altri vogliono la harira o solo un tè con il msemen. I banchi sotto la porta aprono prima del sole."],
["Come si fa il tè?","Tè verde, tanta menta fresca e zucchero; si versa da in alto, nel bicchiere, per fare la schiuma. Si dice \"bismillah\" prima di bere e \"alhamdulillah\" alla fine. Qui nessuna visita è troppo breve per un bicchiere di tè."],
["Perché la porta è blu?","L’attuale Bab Bou Jeloud è del 1913, costruita durante il protettorato francese accanto a una porta più antica e più semplice, che sta ancora lì. Fuori è blu, il colore di Fez, e dentro è verde, il colore dell’Islam: passando, vedi le piastrelle cambiare. E dall’arco, guarda: si vede il minareto della Bou Inania."],
["Quanto è grande la medina?","Più di novemila vicoli, dicono, e più di centomila abitanti. Anche chi è nato qui qualche volta sbaglia svolta. Non ci sono automobili: dal 1981 l’UNESCO la protegge come patrimonio dell’umanità, e si va a piedi o con l’asino."],
["Cosa vuol dire \"balak\"?","È il grido di chi porta un carico: \"balak!\", cioè \"attento!\". Può essere un asino, un mulo, un carretto: hanno sempre la precedenza. Tu ti spingi contro il muro, li lasci passare e sorridi, Pierpaolo, e nessuno si offende."],
["Come ci si saluta?","Con calma: \"salam\", poi \"labas?\", cioè \"tutto bene?\", e si risponde \"labas, alhamdulillah\". Poi si chiede della famiglia, senza fretta. Per ringraziare si dice shukran, per \"va bene\" wakha, per \"basta così\" safi."],
["Com’è la giornata nella medina?","Comincia con il richiamo all’alba, poi i panettieri, i facchini e i bambini con lo zaino per la scuola. Le botteghe aprono verso le nove; a mezzogiorno il vicolo si svuota, e il venerdì, dopo la preghiera, molte famiglie mangiano il couscous insieme. A fine pomeriggio la gente esce a passeggiare."],
["Cosa mi consigli di assaggiare?","Qui alla porta, un msemen con il miele e un bicchiere di tè. Poi, se qualcuno ti invita a pranzo, non dire di no: la pastilla di Fez è dolce e salata insieme. E quando ti dicono \"tfaddal\", cioè \"prego, serviti\", si accetta con piacere."],
["Dove vado dopo?","Sali per la Talaa Kebira, la grande salita piena di botteghe, fino al cuore della città: la Qarawiyyin. Lì incontrerai una signora molto antica, che ha dato inizio a tutto. Non spaventarti: a Fez il tempo si piega."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se ripassi c’è un msemen che ti aspetta. Bslama, a khouya, e che Dio ti accompagni!"]
],
fz_fatima:[
["Chi sei e dove vivevi?","Fatima, figlia di Muhammad al-Fihri, un mercante venuto da Kairouan, nell’attuale Tunisia. La mia famiglia si stabilì a Fez, e dopo la morte di mio padre ricevetti, insieme a mia sorella Mariam, la sua eredità. Decisi di usarla per la comunità."],
["Com’era Fez ai tuoi tempi?","Una città giovane, divisa dal fiume in due rive: Idris I aveva fondato la prima nel 789, e suo figlio Idris II la seconda nell’809. Case, botteghe, mercati, acqua e orti. Si dice che il nome \"Fas\" venga da un piccone d’oro e d’argento trovato scavando le fondamenta: ma è solo una storia."],
["Cos’è la Qarawiyyin?","Nell’859 feci costruire una moschea con una scuola accanto; prese il nome dal quartiere, dove abitavano molte famiglie venute da Kairouan, \"al-Qayrawan\". Col tempo le dinastie seguenti la ingrandirono, nel X e nel XII secolo, aggiungendo sale e cortili. Oggi molti la considerano l’università più antica ancora in funzione."],
["Cosa si studiava?","Il Corano e il diritto, la lingua e la poesia, ma anche matematica, astronomia e medicina. Il sapere viaggiava: arrivavano libri da al-Andalus e dall’Oriente. Gli studenti si sedevano in cerchio attorno al maestro, che alla fine rilasciava un’autorizzazione a insegnare, l’ijaza."],
["E tua sorella?","Mariam: secondo la tradizione fondò la moschea degli Andalusi, sull’altra riva del fiume. Due sorelle, due moschee, un’unica idea: usare quello che si ha per dare a tutti la possibilità di imparare."],
["Cosa custodisce la biblioteca?","Manoscritti antichissimi: un Corano del IX secolo e, più tardi, una copia della Muqaddima di Ibn Khaldun, il grande storico. Era malandata e chiusa al pubblico; l’architetta Aziza Chaouni l’ha restaurata e riaperta nel 2016, deviando anche il fiume che passava sotto il pavimento. Mi piace pensare che i libri siano contenti."],
["Chi altri è passato di qui?","Si dice che qui studiarono, o passarono, grandi personaggi: il filosofo Maimonide, lo storico Ibn Khaldun e il viaggiatore Leone l’Africano, che da ragazzo andò a scuola a Fez prima di diventare famoso in Italia. Su alcune di queste storie gli studiosi discutono ancora."],
["Posso entrare?","La moschea è un luogo di preghiera, aperto ai fedeli musulmani. I visitatori guardano dalle porte, in silenzio, e vedono cortile e lampadari. È una regola di rispetto, come in ogni luogo di culto: la città vi accoglie lo stesso."],
["E il santuario con il tetto verde?","Poco più in là c’è il santuario di Moulay Idriss II, il fondatore della seconda riva e patrono della città: i fedeli vengono a pregare e a chiedere una benedizione. Una sbarra di legno segna il limite per chi non è musulmano: ci si ferma alla soglia e si guardano i portali."],
["Cosa pensi di Fez oggi?","Mi stupisce che sia ancora piena di artigiani, di scuole e di fontane, e che si cammini come ai miei tempi: con i piedi e con l’asino. Cambiano i telefoni, non il vicolo. E il fiume corre ancora sotto le case."],
["Dove vado dopo?","Scendi verso il fiume, dove il mestiere più antico fa i colori più accesi: le concerie Chouara. Chiedi di Youssef; ti darà un rametto di menta da tenere sotto il naso."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e studia con curiosità: una scuola nasce da un gesto solo. Fi aman Allah, e che Dio ti accompagni."]
],
fz_youssef:[
["Chi sei e che fai?","Youssef, quarantanove anni, conciatore. Mio padre e mio nonno facevano lo stesso lavoro, nelle stesse vasche. Ogni mattina sono qui all’alba: è un lavoro duro, ma non lo cambierei."],
["Cos’è questo posto?","La Chouara, la più grande delle tre concerie di Fez: vasche di pietra piene di liquidi bianchi e colorati, come una tavolozza di acquerelli. Secondo la tradizione è qui da circa mille anni, e lavora ancora con metodi che sono cambiati poco."],
["Come si lavora una pelle?","Prima la si immerge nelle vasche bianche, con calce e una miscela con escrementi di piccione, che contiene ammoniaca e rende morbida la pelle. Poi la si impasta con i piedi, anche per ore. Solo dopo va nelle vasche dei colori: il colore arriva dopo la fatica."],
["E i colori?","Papavero per il rosso, indaco per il blu, henné per l’arancio, zafferano per il giallo, menta per il verde e cedro per il marrone. Sono tinte naturali: per questo i colori non sono mai uguali due volte."],
["Perché dai la menta ai visitatori?","Per il naso: l’odore delle vasche è forte. A noi non serve più: ci si abitua. Quando un posto è casa tua, non lo senti più."],
["Dove asciugano le pelli?","Sui tetti della medina: le vedi stese al sole, rosse, gialle e blu. Verso sera le raccogliamo e le portiamo alle botteghe, dove diventano borse, giacche, cuscini e babouches, le pantofole che qui portano tutti."],
["Che pelli usate?","Capra, pecora e mucca: la capra e l’agnello sono le più morbide, per giacche e borse; la mucca per le cose più robuste. Una curiosità per te, Pierpaolo: in italiano avete una parola per un cuoio pregiato che viene da qui, il \"marocchino\". Lo sapevi?"],
["Com’è la tua giornata?","Si comincia all’alba, quando l’aria è fresca e la luce è buona; si lavora nelle vasche fino a mezzogiorno, poi si pulisce, si riposa e si prende il tè. Il venerdì, dopo la preghiera, si sta con la famiglia."],
["Vengono molti visitatori?","Sì, e li guardiamo dalle terrazze delle botteghe di pelle: salgono con la menta in mano. Una regola gentile: chiedi prima di fotografare le persone, e ringrazia chi ti ha fatto salire. Questo non è un museo: è il nostro posto di lavoro."],
["Chi impara il mestiere?","I figli, i nipoti, gli apprendisti. Si comincia pulendo e portando le pelli, poi si impara a riconoscere dal tatto quando una pelle è pronta. È un mestiere che si impara con le mani, non con i libri."],
["Dove vado dopo?","Risali un poco il fiume, verso Place Seffarine, la piazza dei ramai: senti un rumore, tac-tac-tac, che sembra il cuore della città. Lì c’è Si Brahim, che batte il rame da una vita."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e porta a casa una borsa fatta bene: dura una vita. Bslama, a khouya, e che Dio ti protegga!"]
],
fz_brahim:[
["Chi sei e che fai?","Brahim, sessantadue anni, ramaio. Ho imparato da mio padre, che aveva imparato dal suo: la bottega passa di mano in mano. Chiamami Si Brahim, e siediti."],
["Che oggetti fai?","Teiere, vassoi per il tè, pentole, bracieri, contenitori per le spezie, lampade. Il rame si scalda sul fuoco, si batte con il martello per dargli forma e poi si incide a mano con motivi geometrici e floreali. Un bel vassoio richiede giorni."],
["Perché si chiama Seffarine?","Dai \"saffarin\", i ramai: i nostri antenati hanno le botteghe qui da secoli. Nel Cinquecento un viaggiatore di Fez, Leone l’Africano, scrisse già di loro nelle sue descrizioni. Il rame invecchia bene, e le tradizioni pure."],
["Cosa c’è intorno alla piazza?","A nord la biblioteca della Qarawiyyin, a est la madrasa Seffarine, a sud-ovest un antico hammam. La madrasa è del 1271: fu la prima costruita dai Merinidi a Fez e ancora ospita studenti. Poco lontano scorre il fiume."],
["Cos’è una madrasa?","Una scuola con cortile e stanze per gli studenti, dove si studiano le scienze religiose e le lingue. A Fez ce ne sono tante: la Attarine, la più elegante, accanto alle spezie, e la Bou Inania, la più grande, a metà della salita. Si visitano fuori dall’ora di preghiera."],
["Come si cura il rame?","Con limone e sale si pulisce e torna lucido. Un vassoio ben tenuto passa di madre in figlia. Un oggetto di rame non si butta: si ribatte."],
["Come si tratta il prezzo?","Con calma e con il sorriso: si chiede \"bshal?\", cioè \"quanto?\"; il venditore dice un prezzo, tu ne dici uno più basso, si scherza e si arriva a metà. Se non compri, si dice \"shukran\" e nessuno si offende; se compri, ti offrono un tè."],
["Come si beve il tè?","Con pazienza: si sciacqua il tè, si lascia in infusione con la menta e lo si versa da in alto. Il primo bicchiere è un invito e si accetta volentieri. Si dice \"bismillah\" prima e \"alhamdulillah\" dopo."],
["Che suoni ci sono in medina?","Il martello dei ramai, il tac-tac degli zelligisti, il grido di chi porta un carico, \"balak!\", e il richiamo del muezzin, che entra in ogni bottega. Quando suona, molti smettono di lavorare e pregano; chi non prega aspetta in silenzio."],
["Cosa fanno i giovani oggi?","Alcuni continuano il mestiere, altri vanno a scuola e poi tornano; c’è chi fa il ramaio la mattina e il tassista la sera. Mostrano il vassoio finito ai clienti lontani sul telefono. Il rame resta, cambia il modo di venderlo."],
["Dove vado dopo?","Cammina verso la fontana di Nejjarine, dove si lavora il legno: ci trovi Lalla Latifa, la cuoca. A quest’ora è ora di pranzo, e lei non lascia nessuno a stomaco vuoto."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e un giorno porta a casa un piccolo vassoio: ogni volta che lo guardi, pensa che qualcuno l’ha battuto per te. Bslama e yallah, buon cammino!"]
],
fz_latifa:[
["Chi sei e che fai?","Latifa, cinquantasette anni, cuoca. Ho imparato da mia madre e da mia nonna, in questa stessa cucina. Adesso cucino per la mia famiglia e per gli ospiti, e il mio mestiere è far stare bene la gente."],
["Com’è la cucina di Fez?","Dicono la più raffinata del Marocco: dolce e salata insieme, con le spezie dosate con cura e tanta pazienza. Qui si dice \"cucina fassi\", e le cuoche di Fez hanno fama anche fuori dalla città."],
["Cos’è la pastilla?","La specialità di Fez: una sfoglia sottilissima, la warqa, ripiena di piccione (oggi spesso pollo) con mandorle, uova e cannella; sopra, zucchero a velo. Si fa per i matrimoni e per le feste: è dolce e salata insieme, e la prima volta sorprende sempre."],
["Cosa si mangia il venerdì?","Il couscous: dopo la preghiera di mezzogiorno, tutta la famiglia si siede davanti a un grande piatto con carne e sette verdure. Si mangia dal piatto comune, ciascuno dal suo lato."],
["Cos’è il tajine?","È la pentola di terracotta con il coperchio conico, ma anche il piatto che ci cuoce dentro: agnello con prugne e mandorle, pollo con limone sotto sale e olive, verdure. Cuoce piano, per ore, e il coperchio tiene il vapore."],
["Quali spezie si usano?","Cumino, zenzero, curcuma, cannella, zafferano, paprika, e il ras el hanout, \"il meglio del negozio\", un miscuglio che ogni speziale fa a modo suo. Le compro al souk degli Attarine, che prende il nome dai profumieri e dai droghieri."],
["E il pane?","L’impasto lo faccio a casa, ma lo cuoce il fornaio del quartiere: in ogni quartiere c’è un forno comune. Porto il vassoio coperto da un panno e con il mio segno, e il fornaio sa qual è il mio. Non sbaglia mai."],
["Quali dolci ci sono?","Chebakia, i dolci di sesamo e miele; m’hencha, la sfoglia arrotolata a serpente con mandorle e acqua di rose; sellou, una farina di mandorle, sesamo e spezie che si mangia a cucchiaiate. Con un bicchiere di tè, bsaha!"],
["Come ci si comporta a tavola?","Si mangia con la mano destra e con il pane, si dice \"bismillah\" prima di cominciare e \"alhamdulillah\" alla fine. Se sei ospite, chi cucina insiste perché mangi ancora: dire \"safi, shukran, bzaf\" è il modo gentile per fermarla, ma lei insisterà lo stesso."],
["Cos’è la piazza qui fuori?","Place Nejjarine, con la fontana \"dei falegnami\" e il vecchio fondouk, la locanda per mercanti, fatto costruire nel 1711 sotto il sultano Moulay Ismail. Sotto si tenevano le merci e gli animali, sopra dormivano i mercanti; oggi è un museo del legno."],
["Dove vado dopo?","Verso ovest, a Fès el-Jdid, la \"Fez nuova\", che nuova non è: ha più di settecento anni. Ci trovi Maâlem Mustapha, che taglia le piastrelle con un martello. Passa dalla Porta Blu e chiedi la strada: ti indicheranno bene."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se ripassi porta l’appetito. Saha wa hana, buon appetito e buon cammino!"]
],
fz_mustapha:[
["Chi sei e che fai?","Mustapha, cinquantasei anni, maâlem: il maestro. Taglio e monto lo zellige, mosaici di terracotta smaltata. Ho cominciato da ragazzino, portando l’acqua e pulendo; adesso ho allievi miei."],
["Cos’è lo zellige?","Piastrelle quadrate di argilla di Fez, cotte e smaltate, che poi si tagliano a mano in tante piccole forme: stelle, rombi, gocce. Si incastrano come un puzzle sul muro di una fontana, di una madrasa, di una casa."],
["Come si taglia?","Con il menqach, un martello-scalpello a due teste: si colpisce con decisione, e il pezzo si stacca con il suo bordo smussato che prende la luce. Per questo gli zellige brillano in modo diverso dalle piastrelle industriali. Il suono tac-tac-tac è uno dei suoni della medina."],
["E i colori?","Gli smalti si fanno con ossidi minerali: il cobalto per il blu, il rame per il verde, il ferro per i rossi e i toni terra, il manganese per il viola e il nero. Il blu cobalto è il colore di Fez: lo vedi sulla Porta Blu e sulle ceramiche."],
["Quanto ci vuole a imparare?","Anni e anni. Si comincia dalle cose semplici, pulire e selezionare, e solo dopo si tiene in mano il menqach. Si dice che sei un maâlem quando le tue mani sbagliano meno dei tuoi occhi."],
["Cos’è la grande piazza qui davanti?","Il Mechouar, di fronte al Palazzo Reale, Dar el-Makhzen: circa ottanta ettari, e non si visita. Ma dalla piazza si ammirano le grandi porte di ottone lucido, con cornici di zellige e di cedro intagliato."],
["Cos’è Fès el-Jdid?","Fu fondata nel 1276 dal sultano merinide Abu Yusuf Yaqub, come città reale, con palazzo, moschea e caserme. Il nome vuol dire \"Fez nuova\", ma per noi è antica."],
["Cos’è il Mellah?","Il quartiere ebraico, costruito nel 1438 vicino al palazzo; lo riconosci dai balconi di legno che si affacciano sulla strada. Per secoli artigiani, orafi e commercianti ebrei e musulmani hanno vissuto e lavorato fianco a fianco."],
["Cosa si può visitare lì?","La sinagoga Ibn Danan, del Seicento, restaurata, con il suo cortile e il soffitto di legno dipinto. Poco più in là c’è un cimitero con le tombe bianche in pendio, custodito con cura e con rispetto. È un pezzo della storia di Fez come tutti gli altri."],
["Dove si fanno le ceramiche?","I forni dei vasai oggi sono fuori dalle mura, a Ain Nokbi, dal 2013: fanno molto calore e fumo. Lì si vedono i tornitori, i dipintori e i tagliatori di zellige all’opera, e si può comprare un tajine fatto a mano."],
["Dove vado dopo?","A nord, sulla collina: il forte di Borj Nord e le Tombe Merinidi, per vedere tutta Fez dall’alto al tramonto. Ci trovi Imane, che studia architettura e fotografa tutto. Un taxi dalla Porta Blu ci mette poco."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e guarda i muri con più attenzione: ogni stella è stata tagliata da una mano. Bslama, a khouya, Allah ytik saha!"]
],
fz_imane:[
["Chi sei e che fai?","Imane, ventiquattro anni, studentessa di architettura e fotografa nel tempo libero. Sono una fassia, cioè di Fez, da generazioni. Vengo qui spesso a vedere il tramonto sulla medina."],
["Cosa si vede da qui?","Un mare di tetti piatti color sabbia, con le antenne paraboliche, i minareti e i tetti verdi della Qarawiyyin e del santuario di Moulay Idriss II. Sotto i tetti si intuisce il fiume. Dall’alto, la medina sembra un’unica, immensa casa."],
["Cosa sono queste rovine?","Le Tombe Merinidi: mausolei del Trecento, oggi in rovina, della dinastia che fece grande Fez; nessuno sa con certezza chi sia sepolto in ciascuno. Restano mura e archi, ed è il punto più amato per il tramonto."],
["E il forte lì vicino?","Borj Nord: lo fece costruire nel 1582 il sultano saadiano Ahmad al-Mansur per controllare la città. Oggi è il Museo delle Armi, con spade, fucili intarsiati e cannoni. Dal tetto la vista è fantastica, e si arriva in pochi minuti a piedi."],
["Cosa succede al tramonto?","Fra poco, da tutte le moschee, si alza il richiamo alla preghiera, quasi insieme, e da qui sembra un coro. È un’ora tranquilla: la gente sale a guardare le luci accendersi, e per un attimo la città si ferma."],
["Cosa studi di preciso?","Guardo la medina come il manuale più grande: le case con il cortile interno, i tetti che raccolgono l’aria, i vicoli stretti che fanno ombra e fresco. La Qarawiyyin è ancora attiva, ma oggi l’università ha anche sedi moderne fuori dal centro."],
["Com’è la vita in famiglia?","Si mangia tutti insieme; il venerdì, dopo la preghiera, il couscous dalla nonna; il tè mille volte al giorno. Le donne tengono la casa ma anche i negozi, gli ambulatori e le aule: ci sono mediche e professoresse in ogni famiglia. E il nonno racconta ancora di quando il quartiere aveva solo il forno e l’hammam."],
["Com’è il forno del quartiere?","Il cuore del quartiere: portiamo l’impasto su un vassoio di legno coperto da un panno, e il fornaio sa distinguerlo dagli altri. Il venerdì cuociono anche carne e teglie. Con la fontana, la moschea, la scuola coranica e l’hammam è uno dei punti fermi di ogni quartiere."],
["E l’hammam?","Ci vado una volta alla settimana, spesso con mia madre: si entra in sale calde, si usa il sapone nero, il guanto kessa per strofinare e l’argilla ghassoul per capelli e pelle. È un posto per parlare e rilassarsi, oltre che per lavarsi. Uomini e donne vanno a orari separati o in luoghi diversi."],
["Come ci si orienta in medina?","Il GPS non serve: i vicoli sono troppi e stretti. Si chiede la strada con un \"afak\", cioè \"per favore\", e qualcuno ti accompagna o ti disegna la mappa nell’aria. Anche chi è nato qui, qualche volta, sbaglia svolta."],
["Dove vado dopo?","Scendi nei vicoli in tempo per l’ora in cui le case si accendono: il forno, l’hammam, la fontana. Poi vai alla Porta Blu: di notte si riempie di musica, e lì c’è Hamid, che suona l’oud."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se ripassi dalla collina, portami una foto della tua serata. Bslama, e che Dio ti accompagni!"]
],
fz_hamid:[
["Chi sei e che fai?","Hamid, cinquantasei anni, musicista. Suono l’oud, un liuto con il corpo a pera, e canto. Suono nei caffè, alle feste e ai matrimoni; mio nonno suonava già alle nozze, e mio padre pure."],
["Che musica è?","La musica andalusa, nata in al-Andalus, la Spagna musulmana, e arrivata in Marocco con le famiglie che se ne andavano: a Fez è rimasta come musica classica, con lunghe suite e poesia cantata. Poi c’è il malhun, canto poetico degli artigiani, il chaabi, popolare, e la musica gnawa per le cerimonie. Molti dei primi abitanti di Fez, dicono, venivano da Cordova."],
["Com’è fatto l’oud?","Non ha tasti: la mano trova la nota ascoltando. Ha corde doppie e una cassa a pera che fa risuonare il suono. Prima di suonare lo accordo con calma, come si saluta un amico."],
["Quali altri strumenti ci sono?","Il rebab, un piccolo strumento a due corde suonato con l’archetto, il violino, il tamburo darbuka e il tar, il tamburello. Nelle orchestre andaluse stanno tutti insieme, e si ascoltano a vicenda."],
["Perché quel berretto rosso?","Il tarbush rosso si chiama anche \"fez\", e si dice che il nome venga proprio dalla nostra città. Oggi si porta soprattutto per cerimonie o per il teatro; io lo metto per le serate e per i matrimoni, e mi chiamano \"il signore col berretto\"."],
["Cos’è il festival?","A giugno Fez ospita il Festival di Musica Sacra del Mondo, nato nel 1994 per far incontrare culture e fedi con la musica: canti sufi, cori, musicisti da tutto il mondo. I concerti riempiono i giardini e le piazze, e in quei giorni la città è un unico concerto."],
["Com’è la sera in medina?","Dopo la preghiera del tramonto e la cena, la gente esce: famiglie, ragazzi, coppie, bambini con i palloncini. I caffè sotto la Porta Blu si riempiono, qualcuno suona, qualcuno gioca a carte, e tutti bevono tè alla menta."],
["Com’è un matrimonio a Fez?","Dura giorni: musica, tè, dolci, abiti ricamati; la sposa cambia vestito più volte. Le orchestre suonano fino a tardi. Prima arrivano il tè e i dolci, e la cena dopo: tutto con calma."],
["Cosa si indossa?","La djellaba, una tunica lunga con il cappuccio, per uomini e donne; le babouches di cuoio, che arrivano dalle concerie; il caftano per le feste. Sono comodi, e raccontano la città."],
["Com’è il Ramadan?","Il mese del digiuno: di giorno la città è silenziosa, e alla sera si accende. Al tramonto ci si ritrova a rompere il digiuno con datteri, latte e harira, poi si esce a passeggiare e a fare musica fino a tardi. È una festa di famiglia, vissuta con rispetto."],
["Dove vado dopo?","In fondo alla piazza c’è un grande arco di zellige, blu e verde, con le stelle di terracotta tagliate a mano da un maâlem: è l’ultima tappa della giornata. Cammina piano, Pierpaolo, e guarda la luce che passa fra le stelle."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e in fondo alla piazza guarda l’arco di zellige, blu e verde: la luce passa fra le stelle di terracotta. Se la vedi scaldarsi, non fermarti: passa comunque. Bslama, a khouya, e che Dio ti accompagni!"]
]
};
Object.assign(TOPX,TOPX_FZ);
})();
