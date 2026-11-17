/* ---------- PREISTORIA · Dal fuoco dei Neanderthal alle grotte dei Sapiens (steppa, riparo, costa, Africa, Levante, Giura Svevo, grotte dipinte, campo dei mammut) ---------- */
/* Un'intera giornata da sinistra a destra, e un tempo che si piega (circa 300.000 anni): alba sulla steppa fredda, mattina sotto la roccia, tarda mattina sulla costa,
   mezzogiorno in Africa, primo pomeriggio nel Levante, pomeriggio nel Giura Svevo, tardo pomeriggio nelle grotte dipinte, tramonto nel campo dei cacciatori di mammut.
   Testi, tappe e dialoghi vengono da preistoria.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico).
   Il tono per i temi delicati (sepolture, scomparsa dei Neanderthal, caccia) è sobrio e rispettoso; le questioni discusse restano con "gli studiosi pensano" / "forse".
   Nessun oggetto di elementi.js è stato modificato: tutti i disegni nuovi (prefisso "pv") sono definiti qui dentro e registrati in PR. */
(function(){
const GT=372,W1=22000;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl;
const md=(i,n)=>((i%n)+n)%n;
const Z=[0,2600,5300,8000,10700,13500,16300,19000,W1+400];   /* inizio di ognuna delle 8 zone */
const ZC=[1300,3950,6650,9350,12100,14900,17650,20700];      /* centro di ogni zona */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
const zc=(tab,wx)=>{let i=0;while(i<6&&wx>ZC[i+1])i++;if(wx<=ZC[0])return mixs(tab[0],tab[0],0);if(wx>=ZC[7])return mixs(tab[7],tab[7],0);return mixs(tab[i],tab[i+1],cl((wx-ZC[i])/(ZC[i+1]-ZC[i]),0,1))};
const ln=(g,c,w,p)=>{g.strokeStyle=c;g.lineWidth=w;g.lineCap='round';g.lineJoin='round';g.beginPath();g.moveTo(p[0],p[1]);for(let i=2;i<p.length;i+=2)g.lineTo(p[i],p[i+1]);g.stroke();g.lineCap='butt';g.lineJoin='miter'};
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};
const reg=(n,f)=>{PR[n]=(g,x,y,t,a)=>{A.setDK(0);f(g,x,y,t,a)}};
let TT=0;
const SKN_N=['#e4bea0','#dcb090','#e8c8aa'],SKN_S=['#6a3e28','#7e4c32','#946040','#a8724c','#c89468'];

/* ---- cielo: alba grigio-rosa, mattina fredda, mezzogiorno azzurro intenso, pomeriggio dorato, tardo pomeriggio arancio, tramonto rosa e viola (non ancora notte) ---- */
const SKY=[[0,['#8c92bc','#f0b4bc','#ffe2cc']],[1300,['#7eb0e8','#c4d8ee','#fcebd8']],[2700,['#5ea2ea','#a8d0f0','#eef4f4']],[5400,['#4a9cee','#9ccaf4','#f2f8f8']],[8000,['#2674e0','#5ca8ee','#e6f2f6']],[10700,['#3a82dc','#a0c4e4','#f8ecc4']],[13500,['#5a88d0','#e0c890','#ffdc98']],[16300,['#6a7cc0','#f0b078','#ffc880']],[19000,['#5a4aa4','#e87a9c','#ffa868']],[W1+400,['#3e2a84','#c85a92','#ff9462']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,7*s);el(g,c,x-18*s,y+2*s,22*s,5*s);el(g,c,x+20*s,y+2*s,24*s,5*s)};
const INTRO="Preistoria, dall’alba al tramonto. Parti dalla steppa fredda dove vivevano i Neanderthal, con le loro lance, le loro pelli e il loro fuoco; poi entra nel riparo sotto la roccia, dove una donna custodisce le braci. Nella tarda mattina la costa e le grotte dei segni; a mezzogiorno l’Africa, dove è nata la tua specie e dove si macinano i primi colori. Nel primo pomeriggio il Levante, la strada fra i continenti dove Neanderthal e Sapiens si incontrano; poi le grotte del Giura Svevo, con il flauto, l’uomo-leone e la piccola Venere. Al tardo pomeriggio le grotte dipinte; al tramonto il campo dei cacciatori di mammut, con le case di ossa e le storie attorno al fuoco. Il tempo qui si piega: cacciatori, artigiani, pittori e narratori di ogni epoca ti vengono incontro.";
const LKTXT=[
"Durante le ere glaciali buona parte dell’Europa era una steppa fredda e secca, con erba bassa, pochi alberi e animali giganti. Qui, circa cinquantamila anni fa, vivevano i Neanderthal: una specie umana vicina alla nostra, adattata al freddo.",
"I Neanderthal scheggiavano la pietra con grande metodo: preparavano il blocco con colpi mirati e poi ne staccavano schegge già pronte, da usare come coltelli, punte e raschiatoi. Le punte si fissavano alle aste di legno con una colla nera ricavata dalla corteccia di betulla, la pece di betulla. Gli studiosi chiamano questo metodo \"Levallois\", dal nome di un sobborgo di Parigi.",
"I Neanderthal cacciavano cavalli, bisonti, uri e cervi e, almeno in certe zone, anche rinoceronti lanosi e mammut. Lo facevano in gruppo e da vicino, con lance di legno munite di punte di pietra: una caccia pericolosa, e infatti nei loro scheletri si vedono molte ossa rotte e poi guarite.",
"Con raschiatoi di pietra e con levigatori d’osso, i Neanderthal lavoravano le pelli per farne coperte e vestiti contro il gelo. Alcuni levigatori d’osso, trovati nella Francia sud-occidentale e vecchi di circa 50.000 anni, somigliano a quelli che i conciatori usano ancora oggi.",
"Il fuoco era il centro del gruppo: scaldava, teneva lontani i predatori, cuoceva il cibo e serviva a fare la colla. Su alcuni strumenti francesi di circa 50.000 anni fa, al microscopio, si vedono le tracce dei colpi contro la pirite: per alcuni studiosi i Neanderthal sapevano accendere il fuoco da soli, ma l’ipotesi è discussa.",
"A Shanidar, in una grotta dell’attuale Iraq, un Neanderthal con un braccio rattrappito e vecchie ferite alla testa, forse cieco da un occhio e probabilmente sordo, visse fino a un’età avanzata per l’epoca: secondo gli studiosi, il gruppo si prese cura di lui. A El Sidrón, in Spagna, il tartaro dei denti di un giovane con un ascesso conserva tracce di corteccia di pioppo e di una muffa, forse usati come rimedi.",
"In alcune grotte (La Chapelle-aux-Saints in Francia, Shanidar in Iraq, Kebara in Israele) i resti di Neanderthal sono stati trovati in fosse, in posizioni curate. Gli studiosi discutono quanto fossero vere sepolture e che significato avessero; la storia dei fiori sulla tomba di Shanidar resta incerta.",
"A Krapina, in Croazia, in un riparo di circa 130.000 anni fa, sono stati trovati otto artigli di aquila di mare con tagli, intacchi e superfici levigate: secondo gli studiosi facevano parte di un gioiello, forse una collana. Sono fra i più antichi gioielli europei conosciuti.",
"A Gibilterra, nelle grotte della grande rupe sul mare, i Neanderthal raccoglievano molluschi, pescavano, macellavano foche e uccelli e, a quanto pare, raccoglievano penne di rapaci. È uno dei luoghi dove, forse, hanno resistito più a lungo: fino a circa 40.000 anni fa.",
"In una grotta spagnola sul mare, la Cueva de los Aviones, sono state trovate conchiglie forate e colorate con pigmenti rossi e gialli, vecchie di circa 115.000-120.000 anni: per gli studiosi sono ornamenti dei Neanderthal, più antichi di gioielli simili attribuiti a Homo sapiens.",
"Nella grotta di Gorham, a Gibilterra, una serie di linee incrociate incise sul pavimento di roccia è vecchia di oltre 39.000 anni: i suoi scopritori la attribuiscono ai Neanderthal. In grotte spagnole (La Pasiega, Maltravieso, Ardales) alcuni segni rossi, fra cui una mano a negativo, sono datati ad almeno 64.000 anni fa: gli studiosi discutono ancora sulla data e su chi li abbia fatti.",
"A Bruniquel, in Francia, a più di trecento metri dall’ingresso di una grotta, circa 176.500 anni fa i Neanderthal spezzarono circa quattrocento pezzi di stalagmite e li disposero in cerchi, con tracce di fuoco. Nessuno sa a cosa servissero: è una delle costruzioni più antiche conosciute.",
"A Jebel Irhoud, in Marocco, sono stati trovati resti di circa 315.000 anni fa, fra i più antichi attribuiti a Homo sapiens: un volto già simile al nostro, con una scatola cranica ancora allungata. Con loro c’erano utensili di pietra, tracce di fuoco e ossa di animali della savana.",
"Nella valle dell’Omo, in Etiopia, il teschio chiamato Omo I è vecchio di almeno 233.000 anni: la data è stata calcolata nel 2022 grazie a una cenere vulcanica. Ha tutti i tratti di un Homo sapiens moderno, con la fronte alta e il mento.",
"A Blombos, sulla costa del Sudafrica, circa 100.000 anni fa qualcuno macinò ocra e la mescolò con carbone, ossa e un liquido dentro grandi conchiglie di abalone: è il più antico laboratorio di colori conosciuto. A cosa servisse il composto, nessuno lo sa: pittura, protezione per la pelle o altro.",
"Nella stessa grotta, circa 75.000 anni fa, quarantuno piccole conchiglie furono forate e colorate di rosso per farne una collana, e un blocco d’ocra fu inciso con linee incrociate. Circa 73.000 anni fa un segno a griglia rossa fu tracciato su un pezzo di roccia: è uno dei più antichi disegni conosciuti.",
"Il Levante, la striscia di terra fra l’Africa e l’Asia, fu per decine di migliaia di anni una via di passaggio: quando il clima diventava più umido il deserto si copriva di praterie e lasciava passare uomini e animali. Qui vissero, in tempi diversi, sia Homo sapiens sia Neanderthal.",
"Nella grotta di Misliya, sul monte Carmelo in Israele, è stata trovata una parte di mascella superiore di Homo sapiens vecchia di 177.000-194.000 anni: è uno dei più antichi resti della nostra specie fuori dall’Africa. Alcuni viaggi verso nord furono dunque molto precoci.",
"A Qafzeh, in Galilea, circa 100.000 anni fa, un ragazzo di dodici o tredici anni, con un trauma alla testa, fu deposto in una tomba con due palchi di cervo sul petto. Nella grotta furono trovati anche pezzi d’ocra e conchiglie forate e colorate. È una delle più antiche sepolture note di Homo sapiens.",
"Nello stesso Levante, a Kebara e a Tabun, vivevano anche i Neanderthal: gli studiosi pensano che i due gruppi si siano alternati nelle stesse grotte e poi incontrati. Il DNA racconta che i loro figli esistono ancora: le persone non africane di oggi portano in media circa l’uno-due per cento di DNA neanderthaliano, ricevuto da incroci avvenuti, secondo gli studi più recenti, circa 47.000 anni fa.",
"Intorno a 42.000-40.000 anni fa Homo sapiens abita le grotte del Giura Svevo, in Germania, dove ha lasciato i più antichi strumenti musicali e le più antiche statuette conosciute. Oggi queste grotte sono patrimonio dell’umanità.",
"A Hohle Fels e a Geißenklösterle sono stati trovati flauti di osso d’avvoltoio e di avorio di mammut, con fori per le dita, vecchi di 35.000-42.000 anni: sono i più antichi strumenti musicali conosciuti.",
"Dalla grotta di Hohlenstein-Stadel viene l’uomo-leone: una statuetta di avorio di mammut alta circa trentuno centimetri, con il corpo di un uomo e la testa di un leone, vecchia di circa 40.000 anni. Fu ritrovata in molti frammenti e ricomposta.",
"A Hohle Fels è stata trovata una statuetta di avorio di mammut alta circa sei centimetri: una figura femminile con seni e fianchi molto accentuati, vecchia di circa 40.000 anni, fra le più antiche raffigurazioni umane note. Al posto della testa ha un anello: forse si portava appesa al collo.",
"In Europa, per alcune migliaia di anni, Neanderthal e Homo sapiens vissero nelle stesse regioni; poi, fra circa 41.000 e 39.000 anni fa, i Neanderthal scompaiono. Non c’è una causa sola: gli studiosi pensano a gruppi piccoli, a cambiamenti del clima, alla competizione e alle mescolanze, e il loro DNA continua a vivere in noi.",
"In una gola dell’Ardèche, in Francia, un grande arco di roccia naturale scavalca il fiume. Poco lontano si apre la grotta Chauvet: una frana ne chiuse l’ingresso migliaia di anni fa e così, quando fu scoperta nel 1994, le sue pitture erano rimaste intatte.",
"Nella grotta Chauvet, circa 36.000 anni fa, furono dipinti e incisi leoni, rinoceronti, cavalli, orsi e mammut, con carbone e ocra, sfruttando i rilievi della roccia per dare movimento alle figure. Sono fra le pitture più antiche d’Europa, e già di una bravura sorprendente.",
"In molte grotte del mondo si vedono mani \"a negativo\": si appoggia la mano alla roccia e si soffia il colore intorno. A Sulawesi, in Indonesia, ce ne sono di vecchie di almeno 40.000 anni, e una scena con un maiale e figure umane di almeno 51.200 anni è oggi la pittura narrativa più antica conosciuta. In Europa, un disco rosso nella grotta di El Castillo, in Spagna, ha almeno 40.800 anni.",
"A Lascaux, in Francia, circa 17.000 anni fa, furono dipinte centinaia di figure, fra cui i grandi uri della Sala dei Tori. La grotta fu scoperta nel 1940 da quattro ragazzi che inseguivano un cane; poi fu chiusa ai visitatori per proteggerla, e oggi se ne visitano le copie.",
"Ad Altamira, in Spagna, sul soffitto di una sala sono dipinti bisonti a colori, di circa 15.000 anni fa, che sfruttano le gobbe della roccia per sembrare in rilievo. Furono scoperti nel 1879 da una bambina, María, figlia del proprietario del terreno; per anni molti studiosi non credettero che fossero antichi, finché nel 1902 furono riconosciuti autentici.",
"A Mezhyrich, in Ucraina, circa 18.000 anni fa, nel periodo più freddo dell’ultima era glaciale, alcune famiglie costruirono case circolari con centinaia di ossa e zanne di mammut, coperte di pelli. Una di queste case, secondo uno studio recente, fu usata per più di quattro secoli.",
"A Dolní Věstonice, nella Repubblica Ceca, circa 29.000-25.000 anni fa, furono modellate figurine di argilla, fra cui una statuetta femminile alta circa undici centimetri, e cotte in forni di terra: sono fra le più antiche ceramiche conosciute. Molte figurine si spezzarono nel fuoco.",
"A Sungir, in Russia, circa 34.000 anni fa, due ragazzi di circa dieci e dodici anni furono sepolti insieme, testa contro testa, con più di diecimila perline d’avorio di mammut, denti di volpe polare forati, bracciali e lance d’avorio. Gli studiosi pensano che il gruppo li avesse curati in vita, nonostante i loro problemi fisici, e che li abbia onorati da morti.",
"Per sopravvivere al gelo, i Sapiens cucivano abiti di pelle con aghi d’osso: il più antico ago con la cruna conosciuto, trovato in Siberia, ha circa 50.000 anni (ma forse non lo fece Homo sapiens). Gli abiti si decoravano con perline d’avorio e con denti di animali.",
"Quando il sole cala, il campo si raccoglie attorno al fuoco: si mangia, si ripara, si scheggia, si suona e si parla. Come raccontassero, e di che cosa, nessuno lo sa; ma pitture, collane e statuette mostrano che già allora la gente voleva ricordare e raccontare.",
"Sotto la parete delle mani, la luce passa lo stesso."
];
const NAME={"pv_selce": "Selce, il cacciatore e scheggiatore",
 "pv_cenere": "Cenere, la custode del fuoco",
 "pv_marea": "Marea, la raccoglitrice di conchiglie",
 "pv_ocra": "Ocra, la macinatrice di colori",
 "pv_passo": "Passo, il viandante",
 "pv_avorio": "Avorio, l’intagliatore",
 "pv_carbone": "Carbone, il pittore",
 "pv_brace": "Brace, la narratrice"};
const GREET={
 pv_selce:"Ehi, Pierpaolo! Siediti qui, ma attento alle schegge: tagliano come denti. Mi chiamano Selce, e questo è il posto migliore della valle per trovare pietra buona. Da un sasso giusto, con un colpo giusto, nasce un coltello.",
 pv_cenere:"Ehi, Pierpaolo! Siediti, che il fuoco è per tutti. Io sono Cenere e il fuoco è il mio lavoro: accenderlo, nutrirlo, non lasciarlo morire. Un riparo senza fuoco è soltanto un buco nella roccia.",
 pv_marea:"Ehi, Pierpaolo! Vieni giù, che il mare è basso e le conchiglie sono pronte. Io sono Marea e questa è la mia spiaggia: cozze per la cena e, per il resto del giorno, colori.",
 pv_ocra:"Ehi, Pierpaolo! Benvenuto: ti riconosco, hai la mia faccia. Io sono Ocra, e il rosso che vedi sulle mani non è sangue: è il mio mestiere.",
 pv_passo:"Ehi, Pierpaolo! Siediti, il sole è alto e il cammino è lungo. Io sono Passo, perché passo di qua da una vita: questa è la terra dove prima o poi tutti arrivano.",
 pv_avorio:"Ehi, Pierpaolo! Entra, ma non pestare le schegge: sono avorio, e ogni pezzetto vale ore di lavoro. Io sono Avorio e intaglio le zanne di mammut: dentro c’è sempre qualcuno che aspetta di uscire.",
 pv_carbone:"Ehi, Pierpaolo! Entra piano, che la roccia ascolta. Io sono Carbone e dipingo le pareti: tu porti la luce, io porto gli animali.",
 pv_brace:"Ehi, Pierpaolo! Siediti qui, vicino al fuoco: sta per finire il giorno, e il finire del giorno è il momento delle storie. Io sono Brace, e le storie le tengo accese come il fuoco."
};

/* ---- alberi e disegni di base ---- */
const pino=(g,x,y,s,c)=>{c=c||'#3c5a34';rect(g,'#4a3626',x-2*s,y-26*s,4*s,26*s);for(let q=0;q<4;q++)poly(g,q%2?c:mixs(c,'#5a7a44',.4),[[x-(24-q*5)*s,y-(10+q*13)*s],[x,y-(34+q*13)*s],[x+(24-q*5)*s,y-(10+q*13)*s]])};
const betulla=(g,x,y,s)=>{rect(g,'#e6e2d6',x-2.4*s,y-60*s,4.8*s,60*s);for(let q=0;q<7;q++)rect(g,'#3a3430',x-2.4*s,y-(8+q*8)*s,(2+(q%3))*s,1.4*s);ln(g,'#d8d2c0',2*s,[x,y-40*s,x+14*s,y-62*s]);ln(g,'#d8d2c0',2*s,[x,y-32*s,x-13*s,y-56*s]);[[0,-66,15,9],[13,-62,11,7],[-12,-58,11,7]].forEach(b=>el(g,'#c6b04a',x+b[0]*s,y+b[1]*s,b[2]*s,b[3]*s))};
const quercia=(g,x,y,s,c)=>{c=c||'#4a6a34';rect(g,'#5a4430',x-4*s,y-34*s,8*s,34*s);[[0,-52,28,20],[-18,-42,18,14],[18,-44,18,14]].forEach((b,i)=>el(g,i?mixs(c,'#6a8a44',.3):c,x+b[0]*s,y+b[1]*s,b[2]*s,b[3]*s))};
const acacia=(g,x,y,s)=>{ln(g,'#4a3626',4*s,[x,y,x+2*s,y-30*s,x-8*s,y-46*s]);ln(g,'#4a3626',3*s,[x+2*s,y-30*s,x+16*s,y-46*s]);el(g,'#7a8a44',x-2*s,y-50*s,36*s,8*s);el(g,'#8a9a50',x+2*s,y-54*s,28*s,6*s)};
const cespo=(g,x,y,s,c)=>{c=c||'#8a8a48';for(let q=0;q<7;q++)ln(g,q%2?c:mixs(c,'#c8b868',.4),1.8,[x+(q-3)*2.2*s,y,x+(q-3)*4.4*s,y-(10+hr(q)*10)*s])};
const sasso=(g,x,y,s,c)=>{c=c||'#9a9488';el(g,c,x,y-6*s,14*s,8*s);el(g,'rgba(255,255,255,.18)',x-4*s,y-9*s,8*s,3*s);el(g,'rgba(0,0,0,.14)',x+2*s,y-1*s,13*s,3*s)};
const ginepro=(g,x,y,s)=>{rect(g,'#4a3a2a',x-2*s,y-12*s,4*s,12*s);el(g,'#3a5a3a',x,y-24*s,12*s,22*s);el(g,'#4a6a44',x+3*s,y-28*s,8*s,14*s)};
function fiamma(g,x,y,t,s){s=s||1;glow(g,x,y-14*s,70*s,'255,170,70',.5+.1*Math.sin(t*9));for(let q=0;q<3;q++){const h=(26+Math.sin(t*8+q*2)*7)*s*(q==1?1.2:.8),w=(8-q)*s,dx=(q-1)*7*s;poly(g,q==1?'#ff8a28':'#ff5a1a',[[x+dx-w,y],[x+dx-w*.4,y-h*.6],[x+dx+Math.sin(t*6+q)*3,y-h],[x+dx+w*.5,y-h*.5],[x+dx+w,y]]);poly(g,'#ffd060',[[x+dx-w*.5,y],[x+dx,y-h*.6],[x+dx+w*.5,y]])}}
function fuocoP(g,x,y,t,s,sassi){s=s||1;for(let q=0;q<8;q++){const a=q/8*Math.PI*2;el(g,q%2?'#7a746a':'#8a8478',x+Math.cos(a)*22*s,y-3+Math.sin(a)*5*s,6*s,3.4*s)}el(g,'#2a2018',x,y-2,18*s,4*s);el(g,'#d84a18',x,y-3,12*s,2.6*s);fiamma(g,x,y-2,t,s)}
/* quadrupedi generici: cavalli, bisonti, mammut, rinoceronti lanosi, renne, gazzelle, uri, leoni, stambecchi */
const QP={
 cavallo:{c:'#8a6444',d:'#4a3224',L:30,H:24,mane:1,nb:[.42,-.1],hd:[.88,-.52],hs:[10,4.4],ha:.95,nw:8},
 bisonte:{c:'#4a3224',d:'#2a1c14',L:32,H:22,hump:1,horn:1,shag:1,nb:[.38,-.3],hd:[.76,.12],hs:[8,7],ha:.5,nw:15},
 mammut:{c:'#5e3c28',d:'#3a2418',L:46,H:40,trunk:1,tusk:1,dome:1,shag:1,thick:1,nb:[.5,-.2],hd:[.78,-.12],hs:[12,14],ha:0,nw:16},
 rino:{c:'#7a6a58',d:'#4a3e34',L:38,H:23,rhorn:1,shag:1,thick:1,nb:[.42,-.12],hd:[.86,.18],hs:[13,5.6],ha:.3,nw:11},
 renna:{c:'#a88a68',d:'#6a5038',L:26,H:22,antler:1,nb:[.42,-.15],hd:[.82,-.78],hs:[7,3.4],ha:.85,nw:5},
 gazzella:{c:'#cc9e68',d:'#8a6a40',L:20,H:20,ghorn:1,sl:1,nb:[.42,-.1],hd:[.8,-.82],hs:[6,3],ha:.85,nw:4},
 uro:{c:'#2a2018',d:'#16100c',L:38,H:26,horn:2,hump:.5,nb:[.38,-.3],hd:[.78,.1],hs:[9,7],ha:.5,nw:13},
 leone:{c:'#c8a468',d:'#9a7a48',L:32,H:19,cat:1,nb:[.42,-.1],hd:[.84,-.22],hs:[7,5.6],ha:.2,nw:9},
 stambecco:{c:'#8a7a60',d:'#5a4e3a',L:22,H:20,ghorn:2,sl:1,nb:[.42,-.1],hd:[.78,-.8],hs:[6,3.2],ha:.85,nw:5}
};
function quad(g,x,y,s,t,f,k,ph,still,col){const p=col?Object.assign({},QP[k],{c:col,d:col}):QP[k];g.save();g.translate(x,y);g.scale(f*s,s);const L=p.L,H=p.H,w=still?0:Math.sin(t*3+(ph||0)),th=p.thick?7:p.cat?5:p.sl?2.6:3.4,by=-H-4;
 const leg=(lx,a,c)=>ln(g,c,th,[lx,by+4,lx+Math.sin(a)*5,-2]);
 const nb0=L*p.nb[0],nb1=by+H*p.nb[1],hd0=L*p.hd[0],hd1=by+H*p.hd[1];
 leg(-L*.5,w,p.d);leg(L*.38,-w,p.d);
 if(p.mane||p.sl||p.antler)ln(g,p.d,2.2,[-L*.64,by-2,-L*.7,by+10]);else ln(g,p.d,3,[-L*.64,by-2,-L*.66,by+(p.cat?14:8)]);if(p.cat)dot(g,p.d,-L*.66,by+14,2.4);
 el(g,p.c,0,by,L*.7,H*.46);
 if(p.shag)el(g,p.d,L*.3,by+3,L*.38,H*.52);
 if(p.hump)el(g,p.c,L*.28,by-H*.32,L*.3,H*.34);
 if(p.sl){el(g,'rgba(255,255,255,.55)',0,by+H*.28,L*.55,H*.12);ln(g,p.d,1.6,[-L*.5,by+2,L*.4,by+2])}
 if(p.dome){el(g,p.c,L*.2,by-H*.34,L*.42,H*.32);for(let q=0;q<9;q++)ln(g,p.d,1.6,[-L*.5+q*L*.12,by+H*.38,-L*.5+q*L*.12-1,by+H*.62])}
 leg(-L*.32,-w,p.c);leg(L*.52,w,p.c);
 ln(g,p.c,p.nw,[nb0,nb1,hd0,hd1]);if(p.mane)ln(g,p.d,3.2,[nb0-4,nb1-H*.24,hd0-3,hd1-3]);
 g.fillStyle=p.c;g.beginPath();g.ellipse(hd0,hd1,p.hs[0],p.hs[1],p.ha,0,7);g.fill();
 const tipx=hd0+Math.cos(p.ha)*p.hs[0],tipy=hd1+Math.sin(p.ha)*p.hs[0];
 if(p.dome){el(g,p.c,hd0-3,hd1-8,14,12);el(g,p.d,hd0-6,hd1-16,10,5)}
 if(p.trunk){const tw=Math.sin(t*1.6+(ph||0))*4*(still?0:1);ln(g,p.c,10,[hd0+8,hd1+2,hd0+13,hd1+18,hd0+10+tw,hd1+34]);ln(g,p.c,6.4,[hd0+10+tw,hd1+34,hd0+4+tw,hd1+40]);ln(g,p.d,1,[hd0+9,hd1+6,hd0+13,hd1+20])}
 if(p.tusk){ln(g,'#f0e6c8',3.6,[hd0+6,hd1+10,hd0+22,hd1+22,hd0+34,hd1+14,hd0+38,hd1-2])}
 if(p.horn)ln(g,'#1a1410',2.6,[hd0+1,hd1-6,hd0+5,hd1-15,hd0+1,hd1-19]);
 if(p.rhorn){poly(g,'#cbbf9a',[[tipx-4,tipy-2],[tipx+12,tipy-14],[tipx+1,tipy+3]]);poly(g,'#cbbf9a',[[tipx-14,tipy-4],[tipx-8,tipy-12],[tipx-6,tipy-3]])}
 if(p.antler){ln(g,'#6a4a30',1.8,[hd0-1,hd1-4,hd0-3,hd1-20,hd0+6,hd1-26]);ln(g,'#6a4a30',1.6,[hd0-3,hd1-14,hd0-12,hd1-22]);ln(g,'#6a4a30',1.6,[hd0-3,hd1-20,hd0+8,hd1-16])}
 if(p.ghorn)ln(g,'#2a2018',2,[hd0-1,hd1-3,hd0-6,hd1-(p.ghorn==2?20:15),hd0-12,hd1-(p.ghorn==2?20:15)]);
 poly(g,p.d,[[hd0-4,hd1-p.hs[1]],[hd0-8,hd1-p.hs[1]-6],[hd0-1,hd1-p.hs[1]+1]]);
 dot(g,'#14100c',hd0+p.hs[0]*.22*Math.cos(p.ha),hd1+p.hs[0]*.22*Math.sin(p.ha)-p.hs[1]*.4,1.2);g.restore()}
function volare(g,x,y,s,w,c){g.strokeStyle=c||'#1a1a22';g.lineWidth=1.8*s;g.lineCap='round';g.beginPath();g.moveTo(x-9*s,y+Math.sin(w)*5*s);g.quadraticCurveTo(x-4*s,y-3*s,x,y);g.quadraticCurveTo(x+4*s,y-3*s,x+9*s,y+Math.sin(w)*5*s);g.stroke();g.lineCap='butt'}
function aquila(g,x,y,s,w){g.strokeStyle='#3a2a1a';g.lineWidth=3.2*s;g.lineCap='round';g.beginPath();g.moveTo(x-22*s,y+Math.sin(w)*6*s);g.quadraticCurveTo(x-10*s,y-6*s,x,y);g.quadraticCurveTo(x+10*s,y-6*s,x+22*s,y+Math.sin(w)*6*s);g.stroke();g.lineCap='butt';el(g,'#3a2a1a',x,y,5*s,2.6*s);poly(g,'#f4f0e6',[[x-5*s,y],[x-12*s,y+2*s],[x-5*s,y+4*s]]);dot(g,'#f4f0e6',x+4*s,y-1*s,2*s)}

/* ---- persone: Neanderthal (tozzi, arcata e naso grandi) e Sapiens, vestiti di pelli ---- */
function person(g,x,y,t,o){g.save();g.translate(x,y);if(o.nea)g.scale(1.16,.95);const acc=o.acc;fig(g,0,0,t,Object.assign({f:1,s:1,ph:0,hair:'#2a1a10',skin:'#e0b494',top:'#8a6040',bot:'#7a5438'},o,{acc:(g2,b)=>{if(o.nea){rect(g2,'#3a2a1c',3,-108+b,10,2.6);el(g2,o.skin||'#e0b494',13,-97+b,4,3.4)}if(o.cloak)poly(g2,o.cloak,[[-15,-92+b],[15,-92+b],[17,-62+b],[-17,-60+b]]);if(acc)acc(g2,b,t)}}));g.restore()}
const nea=(g,x,y,t,o)=>person(g,x,y,t,Object.assign({nea:1,skin:SKN_N[0],hair:'#3a2a1c',cloak:'#6a4a30'},o||{}));
const sap=(g,x,y,t,o)=>person(g,x,y,t,Object.assign({skin:SKN_S[2],hair:'#14100c',cloak:'#7a5a3c'},o||{}));
const lancia=(g,x,y,h,tip)=>{ln(g,'#7a5a38',2.6,[x,y,x+3,y-h]);poly(g,tip||'#8a8a92',[[x-2,y-h+2],[x+3,y-h-16],[x+8,y-h+2]]);ln(g,'#1a1410',2,[x+1,y-h+3,x+5,y-h+3])};

/* ---- cielo, sole, nuvole ---- */
function layerSky(g,o,t){const cam=o/.02;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const u=cl(xs/W1,0,1),sx=36+u*408,sy=330-Math.sin(u*Math.PI)*262;
 const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,260);sg.addColorStop(0,'rgba(255,'+Math.round(244-low*100)+','+Math.round(200-low*120)+',.85)');sg.addColorStop(.25,'rgba(255,'+Math.round(214-low*80)+',150,.35)');sg.addColorStop(1,'rgba(255,200,120,0)');g.fillStyle=sg;g.fillRect(sx-260,sy-260,520,520);dot(g,'rgba(255,'+Math.round(252-low*90)+','+Math.round(226-low*120)+',1)',sx,sy,xs<2000?12:14+low*9);
 const cc=xs<2700?'rgba(252,214,220,.55)':xs<13500?'rgba(255,255,255,.6)':xs<17000?'rgba(255,230,180,.6)':'rgba(255,170,140,.55)';
 each(o-((t*3)%360)*.02,360,1,(x,i,r)=>{if(r>.45)return;nube(g,x+r*100,46+r*52,.8+r*.7,cc)});
 const fo=cl(1-xs/2800,0,1)*.28;if(fo>.01){g.fillStyle='rgba(252,196,206,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const dust=cl((xs-13500)/1200,0,1)*cl((16300-xs)/1400,0,1)*.12;if(dust>.01){g.fillStyle='rgba(255,208,120,'+dust+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-16300)/1200,0,1)*.2;if(wg>.01){g.fillStyle='rgba(255,120,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}

/* ---- livello 1: orizzonte lontano ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,dim=c=>mixs(c,'#c8d4ec',.26);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const range=(sx,w,h,c,seed,snow)=>{const n=22,pts=[];for(let q=0;q<=n;q++)pts.push([sx-w+q*w*2/n,hz-h*(.3+.7*hr(q*3+seed))*Math.pow(Math.sin(Math.PI*q/n),.6)]);g.fillStyle=dim(c);g.beginPath();g.moveTo(sx-w,hz+34);pts.forEach(p=>g.lineTo(p[0],p[1]));g.lineTo(sx+w,hz+34);g.closePath();g.fill();
  if(snow)pts.forEach(p=>{if(hz-p[1]>h*.5)poly(g,'rgba(248,250,255,.92)',[[p[0],p[1]],[p[0]-9,p[1]+12],[p[0]-3,p[1]+9],[p[0]+2,p[1]+13],[p[0]+9,p[1]+11]])})};
 const base=(sx,w,c)=>{g.fillStyle=dim(c);g.beginPath();g.moveTo(sx-w,hz+34);for(let q=0;q<=24;q++){const px=sx-w+q*w/12;g.lineTo(px,hz+8-Math.sin(q*1.3)*2.4)}g.lineTo(sx+w,hz+34);g.closePath();g.fill()};
 const herd=(sx,x0,x1,n,c,sz)=>{for(let q=0;q<n;q++){const hx0=sx+x0+(x1-x0)*q/n+hr(q*5)*14;el(g,dim(c),hx0,hz+14+hr(q)*12,sz*2.4,sz*1.3);rect(g,dim(c),hx0+sz*1.6,hz+9+hr(q)*12,sz*.8,sz*1.2)}};
 /* 1 · steppa fredda: monti azzurri innevati, fiume largo, mandrie lontane */
 let e=env(1500,3300);if(e>.02){g.globalAlpha=e;const sx=fx(1500);range(sx,380,78,'#8aa0c8',3,1);range(sx+120,260,50,'#98aed0',9,1);base(sx,420,'#b4aa6c');rect(g,dim('#bcd6e8'),sx-300,hz+12,600,7);rect(g,'rgba(255,255,255,.4)',sx-260,hz+13,200,2);herd(sx,-360,330,16,'#4a3a2c',2.2);
  el(g,dim('#3a2a20'),sx+60,hz+18,6,3.4);ln(g,dim('#3a2a20'),2,[sx+66,hz+16,sx+68,hz+24]);g.globalAlpha=1}
 /* 2-3 · pareti di calcare con ripari, pini scuri, filo di fumo */
 e=env(4000,3300);if(e>.02){g.globalAlpha=e;const sx=fx(4000);base(sx,420,'#94a070');for(let q=0;q<6;q++){rect(g,dim('#d8d0b6'),sx-250+q*80,hz-26-hr(q)*30,70,70+hr(q)*30);rect(g,'rgba(60,40,20,.5)',sx-236+q*80,hz-6+hr(q+3)*20,22,12)}
  for(let q=0;q<18;q++)poly(g,dim('#365238'),[[sx-340+q*40,hz+10],[sx-334+q*40,hz-16-hr(q)*12],[sx-322+q*40,hz+10]]);
  for(let q=0;q<5;q++)el(g,'rgba(240,240,250,'+(.28-q*.04)+')',sx+110+Math.sin(t*.6+q)*4,hz-30-q*16,5+q*2,7);g.globalAlpha=1}
 /* 3 · la rupe sul mare, mare scintillante */
 e=env(6700,3300);if(e>.02){g.globalAlpha=e;const sx=fx(6700);rect(g,dim('#4a9ede'),sx-420,hz-8,840,48);rect(g,'rgba(255,255,255,.25)',sx-420,hz-8,840,4);for(let q=0;q<36;q++)rect(g,'rgba(255,255,255,.55)',sx-400+q*24+Math.sin(t*2+q)*3,hz-3+(q%6)*5,6,1.4);
  poly(g,dim('#8a96ae'),[[sx+10,hz+10],[sx+30,hz-22],[sx+74,hz-74],[sx+112,hz-80],[sx+130,hz-50],[sx+150,hz+10]]);poly(g,'rgba(255,255,255,.2)',[[sx+74,hz-74],[sx+112,hz-80],[sx+104,hz-34],[sx+80,hz-24]]);
  base(sx-260,160,'#d0c498');for(let q=0;q<8;q++)poly(g,dim('#4a6a44'),[[sx-380+q*30,hz+10],[sx-374+q*30,hz-14],[sx-364+q*30,hz+10]]);g.globalAlpha=1}
 /* 4 · Africa: oceano blu intenso, dune ocra, savana con acacie e antilopi */
 e=env(9350,3300);if(e>.02){g.globalAlpha=e;const sx=fx(9350);rect(g,dim('#2864b8'),sx-420,hz-8,840,48);rect(g,'rgba(255,255,255,.22)',sx-420,hz-8,840,4);for(let q=0;q<30;q++)rect(g,'rgba(255,255,255,.5)',sx-400+q*28+Math.sin(t*2+q)*3,hz-2+(q%5)*6,7,1.4);
  g.fillStyle=dim('#dab27a');g.beginPath();g.moveTo(sx-60,hz+34);for(let q=0;q<=14;q++)g.lineTo(sx-60+q*30,hz+6-Math.sin(q*.9)*10-4);g.lineTo(sx+360,hz+34);g.closePath();g.fill();
  base(sx-300,150,'#a89858');for(let q=0;q<7;q++){const ax=sx-380+q*40;rect(g,dim('#4a3a26'),ax,hz-8,1.6,14);el(g,dim('#5a7a3a'),ax+1,hz-9,11,2.8)}herd(sx,-300,-130,8,'#a47a4c',2);g.globalAlpha=1}
 /* 5 · il monte Carmelo con le grotte, il deserto chiaro */
 e=env(12100,3300);if(e>.02){g.globalAlpha=e;const sx=fx(12100);base(sx,440,'#e4d4a4');range(sx-40,300,64,'#c8b88c',21,0);for(let q=0;q<9;q++)el(g,'rgba(70,50,30,.6)',sx-190+q*40+hr(q)*10,hz-14+hr(q+1)*22,6,3.6);
  for(let q=0;q<10;q++)el(g,dim('#6a8a48'),sx-250+q*52,hz+6,13,5.4);g.globalAlpha=1}
 /* 6 · valli del Giura: falesie bianche, mammut lontani */
 e=env(14900,3300);if(e>.02){g.globalAlpha=e;const sx=fx(14900);base(sx,440,'#b8b48a');for(let q=0;q<5;q++){poly(g,dim('#e2dcc8'),[[sx-300+q*130,hz+16],[sx-296+q*130,hz-36-hr(q)*26],[sx-232+q*130,hz-40-hr(q+2)*20],[sx-210+q*130,hz+16]]);el(g,'rgba(60,40,20,.55)',sx-262+q*130,hz-10,9,6)}
  for(let q=0;q<10;q++)poly(g,dim('#36563a'),[[sx-340+q*70,hz+10],[sx-334+q*70,hz-12],[sx-322+q*70,hz+10]]);[[200,0],[250,1]].forEach(m=>{el(g,dim('#4a3426'),sx+m[0],hz+18,8,5);ln(g,dim('#4a3426'),2,[sx+m[0]+7,hz+16,sx+m[0]+10,hz+24])});g.globalAlpha=1}
 /* 7 · gole di calcare giallastro con gli ingressi delle grotte, colline verdi */
 e=env(17650,3300);if(e>.02){g.globalAlpha=e;const sx=fx(17650);base(sx,440,'#a8a060');for(let q=0;q<6;q++){poly(g,dim('#dcbc7c'),[[sx-320+q*120,hz+16],[sx-316+q*120,hz-44-hr(q+5)*24],[sx-246+q*120,hz-40-hr(q)*30],[sx-220+q*120,hz+16]]);el(g,'rgba(60,40,20,.6)',sx-280+q*120,hz-14+hr(q)*14,8,5)}
  for(let q=0;q<12;q++)el(g,dim('#5a7a44'),sx-340+q*60,hz+8,16,6);g.globalAlpha=1}
 /* 8 · la pianura immensa, case di ossa con il fumo, mandrie scure, sole che scende */
 e=env(20700,3300);if(e>.02){g.globalAlpha=e;const sx=fx(20700);base(sx,520,'#b8806a');herd(sx,-400,380,22,'#3a2a2c',2.4);for(let q=0;q<7;q++){const hx0=sx-300+q*90;el(g,dim('#8a5a3c'),hx0,hz+8,12,7);for(let k=0;k<3;k++)el(g,'rgba(70,40,50,'+(.34-k*.08)+')',hx0+Math.sin(t*.5+q+k)*5,hz-6-k*14,4+k*2,6)}g.globalAlpha=1}}

/* ---- livello 2: colline e boschetti di mezza distanza ---- */
const HILL=['#b4aa62','#8a9a5a','#c8b98c','#c89a62','#a8a068','#98a060','#9a9a60','#a8826a'];
function layerMid(g,o,t){const cam=o/.2,hz=326;
 for(let x=0;x<=480;x+=16){const wx=cam+x,zq=zn(wx),hh=(zq==3||zq==4)?1.5:16+10*Math.sin(wx*.004)+8*Math.sin(wx*.011+1);g.fillStyle=zc(HILL,wx);g.fillRect(x,hz-hh,17,GT+4-(hz-hh))}
 each(o,120,5,(x,i,r)=>{const wx=cam+x+60,zz=zn(wx),yy=hz+8;
  if(zz==1){if(r>.74)betulla(g,x+60,yy,.5+r*.2);else if(r>.55)pino(g,x+60,yy,.5,'#4a5e3c');else if(r<.16)sasso(g,x+60,yy+4,.8)}
  else if(zz==2){if(r>.5)pino(g,x+60,yy,.6+r*.3,'#3a5a34');else if(r>.3)quercia(g,x+60,yy,.5+r*.2,'#4a6a3a')}
  else if(zz==3){if(r>.6)pino(g,x+60,yy,.6+r*.2,'#4a6a3a');else if(r>.3)cespo(g,x+60,yy+2,1.2,'#7a8a48')}
  else if(zz==4){if(r>.7)acacia(g,x+60,yy,.5+r*.2);else if(r>.4)cespo(g,x+60,yy+2,1.4,'#b8a458');else if(r<.15)sasso(g,x+60,yy+4,.9,'#b89a78')}
  else if(zz==5){if(r>.58)quercia(g,x+60,yy,.5+r*.3,'#5a7a3a');else if(r>.4)ginepro(g,x+60,yy,.9)}
  else if(zz==6){if(r>.62)betulla(g,x+60,yy,.55+r*.2);else if(r>.38)pino(g,x+60,yy,.6,'#3a5a3a')}
  else if(zz==7){if(r>.4)pino(g,x+60,yy,.6+r*.4,'#34543a');else if(r>.2)quercia(g,x+60,yy,.5+r*.2,'#4a6a3a')}
  else{if(r>.7)cespo(g,x+60,yy+2,1.2,'#b09a6a');else if(r<.14)sasso(g,x+60,yy+4,.7,'#a8908a')}})}

/* ---- grotte e pareti di calcare ---- */
function grotta(g,x,w,h,k,cx){/* x centro, base GT+10; k: luce calda interna (0..1) */const yb=GT+10;
 poly(g,'#6a6050',[[x-w/2-10,yb],[x-w/2+4,yb-h*.7],[x-w*.28,yb-h-6],[x+w*.28,yb-h-6],[x+w/2-4,yb-h*.7],[x+w/2+10,yb]]);
 const gr=g.createLinearGradient(0,yb-h,0,yb);gr.addColorStop(0,'#1a1410');gr.addColorStop(1,k>0?'#4a3020':'#241a14');g.fillStyle=gr;g.beginPath();g.moveTo(x-w/2,yb);g.quadraticCurveTo(x-w/2,yb-h,x,yb-h);g.quadraticCurveTo(x+w/2,yb-h,x+w/2,yb);g.closePath();g.fill();
 if(k>0)glow(g,x,yb-h*.3,w*.55,'255,170,80',.4*k);
 for(let q=0;q<5;q++){const sxx=x-w*.34+q*w*.17;poly(g,'#7a6e5c',[[sxx-3,yb-h+4+(q%2)*4],[sxx,yb-h+14+hr(q+cx)*10],[sxx+3,yb-h+4+(q%2)*4]])}
 el(g,'rgba(0,0,0,.25)',x,yb,w*.5,6)}
function parete(g,x0,x1,h,c1,c2,seed){/* muro di roccia a strati: x0..x1 in schermo */ if(x1<-20||x0>500)return;const yb=GT+12,xa=Math.max(x0,-10),xb=Math.min(x1,490);
 const gr=g.createLinearGradient(0,yb-h,0,yb);gr.addColorStop(0,c1);gr.addColorStop(1,c2);g.fillStyle=gr;g.beginPath();g.moveTo(xa,yb);for(let x=xa;x<=xb;x+=12){const tp=cl(Math.min(x-x0,x1-x)/80,.1,1),wy=yb-h*tp*(.86+.14*hr(Math.floor((x-x0)/12)*3+seed));g.lineTo(x,wy)}g.lineTo(xb,yb);g.closePath();g.fill();
 for(let q=0;q<6;q++){const yy=yb-h*(.12+q*.15);g.fillStyle='rgba(60,40,20,.12)';g.fillRect(xa,yy,xb-xa,2)}for(let q=0;q<18;q++){const xx=x0+hr(q+seed)*(x1-x0);if(xx>xa&&xx<xb)rect(g,'rgba(255,255,255,.1)',xx,yb-h*(.3+hr(q*3)*.6),3,h*.18)}}
function arcoRoccia(g,x,w,h){/* grande ponte naturale di roccia sul fiume */const yb=GT+12;g.fillStyle='#d8b878';g.beginPath();g.moveTo(x-w/2-40,yb);g.lineTo(x-w/2-20,yb-h-20);g.lineTo(x-w/2+40,yb-h-34);g.lineTo(x+w/2-40,yb-h-34);g.lineTo(x+w/2+20,yb-h-14);g.lineTo(x+w/2+40,yb);g.lineTo(x+w/2-20,yb);g.quadraticCurveTo(x+w/2-30,yb-h*.9,x,yb-h*.9);g.quadraticCurveTo(x-w/2+30,yb-h*.9,x-w/2+20,yb);g.closePath();g.fill();
 for(let q=0;q<5;q++){g.fillStyle='rgba(80,50,20,.12)';g.fillRect(x-w/2-30,yb-h-10+q*20,w+60,2)}
 const gr=g.createLinearGradient(0,yb-h,0,yb);gr.addColorStop(0,'#f0b878');gr.addColorStop(1,'#b8d0c0');g.fillStyle=gr;g.beginPath();g.moveTo(x-w/2+22,yb-2);g.quadraticCurveTo(x-w/2+34,yb-h*.88,x,yb-h*.88);g.quadraticCurveTo(x+w/2-34,yb-h*.88,x+w/2-22,yb-2);g.closePath();g.fill();
 for(let q=0;q<5;q++)poly(g,'#3a6a4a',[[x-w/2-30+q*22,yb-h-24],[x-w/2-24+q*22,yb-h-44],[x-w/2-16+q*22,yb-h-24]])}

/* ---- livello 3: pareti, grotte e boschi lungo la strada (fissi al mondo) ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const S=wx=>wx-o,vis=(a,b)=>!(S(b)<-60||S(a)>540),segs=(L,h,c1,c2,sd)=>L.forEach((s,i)=>{if(vis(s[0],s[1]))parete(g,S(s[0]),S(s[1]),h,c1,c2,sd+i*5)});
 /* Z1: costone di calcare con la selce, betulle e pini radi */
 each(o,260,7,(x,i,r)=>{const wx=i*260;if(wx<0||wx>2650||(wx>600&&wx<1550))return;if(r>.62)betulla(g,x+80,gt+16,.9+r*.3);else if(r>.34)pino(g,x+80,gt+14,.8+r*.3,'#3c5a34');else if(r<.14)sasso(g,x+80,gt+18,1.2)});
 if(vis(600,1550)){const a=S(600),b=S(1550);parete(g,a,b,98,'#d8d0b8','#b0a68c',2);for(let q=0;q<5;q++)for(let k=0;k<14;k++){const sx0=a+10+k*((b-a)/14)+hr(q*9+k)*20;if(hr(q*5+k*3)>.35)rect(g,'rgba(52,52,62,.8)',sx0,gt-86+q*17+hr(k)*4,14+hr(q+k)*34,2.4)}}
 /* Z2: la parete di calcare con la grande sporgenza che fa da riparo */
 if(vis(2600,5300)){const a=S(2600),b=S(5300);parete(g,a,b,250,'#e0d8c2','#b8ae94',5);
  const ra=S(3180),rb=S(4620);if(rb>-40&&ra<520){g.fillStyle='#4a3c2c';g.beginPath();g.moveTo(ra,gt+12);g.lineTo(ra+30,gt-150);g.quadraticCurveTo((ra+rb)/2,gt-210,rb-30,gt-150);g.lineTo(rb,gt+12);g.closePath();g.fill();
   const gr=g.createLinearGradient(0,gt-190,0,gt+12);gr.addColorStop(0,'#3a2c20');gr.addColorStop(1,'#7a5a3c');g.fillStyle=gr;g.beginPath();g.moveTo(ra+26,gt+12);g.lineTo(ra+48,gt-138);g.quadraticCurveTo((ra+rb)/2,gt-190,rb-48,gt-138);g.lineTo(rb-26,gt+12);g.closePath();g.fill();
   const fx0=S(3920);glow(g,fx0,gt-20,260,'255,150,60',.34+.05*Math.sin(t*8));poly(g,'#e8e0c8',[[ra-20,gt-150],[ra+40,gt-160],[rb-30,gt-160],[rb+20,gt-148],[rb+20,gt-176],[ra-20,gt-176]])}
  each(o,230,9,(x,i,r)=>{const wx=i*230;if(wx<2700||wx>5300||(wx>3100&&wx<4700))return;if(r>.4)pino(g,x+70,gt+16,.9+r*.4,'#3a5a34');else quercia(g,x+70,gt+16,.8,'#4a6a3a')})}
 /* Z3: la costa: falesie basse, grotte sul mare, pini */
 if(vis(5300,8000)){const a=S(5300),b=S(8000);segs([[5480,6060],[6730,7860]],120,'#e4dcc4','#b8ae92',11);grotta(g,S(5760),220,138,.4,1);grotta(g,S(6980),170,110,.7,2);grotta(g,S(7560),200,126,.8,3);
  each(o,200,12,(x,i,r)=>{const wx=i*200;if(wx<5400||wx>7900)return;if(r>.5)pino(g,x+50,gt-86,.8+r*.2,'#4a6a3a');else if(r<.3)cespo(g,x+60,gt+16,1.6,'#7a8a48')})}
 /* Z4: Africa: scogliera bassa, grotta aperta sul mare, dune, acacie */
 if(vis(8000,10700)){const a=S(8000),b=S(10700);segs([[8850,9420]],104,'#e8d8b0','#c0a470',14);grotta(g,S(9130),260,130,.7,4);
  each(o,190,15,(x,i,r)=>{const wx=i*190;if(wx<8000||wx>10700)return;if(r>.6)acacia(g,x+60,gt+16,.9+r*.4);else if(r>.3){el(g,'#e2c288',x+60,gt+14,70,18);el(g,'rgba(255,240,200,.35)',x+50,gt+8,40,6)}})}
 /* Z5: il monte Carmelo: terrazze di calcare con le grotte, querce e pistacchi */
 if(vis(10700,13500)){const a=S(10700),b=S(13500);segs([[11540,12460],[12740,13180]],150,'#e0d4b0','#b8a880',17);grotta(g,S(11750),190,116,.5,5);grotta(g,S(12300),160,104,.6,6);grotta(g,S(12960),180,112,.4,7);
  each(o,210,18,(x,i,r)=>{const wx=i*210;if(wx<10800||wx>13400)return;if(r>.5)quercia(g,x+50,gt+16,.8+r*.4,'#5a7a3a');else if(r>.28)ginepro(g,x+50,gt+16,1.1)})}
 /* Z6: valle del Danubio: alte falesie bianche con le grotte del Giura, betulle */
 if(vis(13500,16300)){const a=S(13500),b=S(16300);segs([[13950,14700],[14950,15500],[15760,16300]],190,'#ece6d4','#c0b8a0',20);grotta(g,S(14420),230,170,.8,8);grotta(g,S(15240),200,150,.5,9);grotta(g,S(15900),170,130,.4,10);
  each(o,220,21,(x,i,r)=>{const wx=i*220;if(wx<13600||wx>16300)return;if(r>.5)betulla(g,x+50,gt+16,.9+r*.3);else if(r>.28)pino(g,x+50,gt+16,.9,'#3a5a34')})}
 /* Z7: la gola con il grande arco di roccia, pareti giallastre con ingressi stretti */
 if(vis(16300,19000)){const a=S(16300),b=S(19000);parete(g,a,b,250,'#ead29a','#b89a5c',23);
  [[16780,150,0],[17420,130,1],[17900,120,2],[18400,160,3]].forEach(c=>grotta(g,S(c[0]),c[1],c[1]*.75,.7,c[2]+20));
  if(vis(16300,17100)){g.save();const cx=S(16620);arcoRoccia(g,cx,320,170);g.restore()}
  each(o,180,24,(x,i,r)=>{const wx=i*180;if(wx<16300||wx>19000)return;if(r>.42)pino(g,x+50,gt+16,.9+r*.5,'#34543a');else if(r>.2)quercia(g,x+50,gt+16,.8,'#4a6a3a')})}
 /* Z8: pianura gelida, pochi alberi bassi */
 each(o,330,26,(x,i,r)=>{const wx=i*330;if(wx<19000||wx>22200)return;if(r>.6)cespo(g,x+50,gt+22,2,'#b09a6a');else if(r>.35)sasso(g,x+60,gt+24,1.3,'#a89088')})}

/* ---- suolo ---- */
const GTOP=['#b8ac5c','#aa9a7c','#dccda4','#d8a470','#ccbc90','#aaa868','#b6a47c','#aa927c'],GBOT=['#7e6e3c','#76644c','#b4a47e','#aa6c46','#a48e66','#78744a','#84745a','#705c4c'];
function groundDraw(g,cam,t){const gt=GT;
 for(let x=0;x<480;x+=24){const wx=cam+x+12;const ct=zc(GTOP,wx),cb=zc(GBOT,wx);rect(g,ct,x,gt,25,40);rect(g,mixs(ct,cb,.5),x,gt+40,25,50);rect(g,cb,x,gt+90,25,60)}
 each(cam,46,3,(x,i,r)=>{const wx=cam+x,zz=zn(wx),yy=gt+8+hr(i*3+1)*118;
  if(zz==1){if(r>.5){ln(g,'#8a7a3a',1.4,[x,yy,x-2,yy-6]);ln(g,'#d0c47a',1.4,[x+3,yy,x+5,yy-7])}else if(r<.12)el(g,'rgba(250,252,255,.7)',x,yy,10,2.6);else if(r<.3)el(g,'rgba(120,110,100,.6)',x,yy,4,2)}
  else if(zz==2){if(r>.5)el(g,'rgba(40,30,22,.35)',x,yy,8,2.4);else if(r<.18)el(g,'rgba(230,225,215,.4)',x,yy,5,1.8);else el(g,'rgba(250,244,230,.25)',x,yy,6,1.6)}
  else if(zz==3){if(r>.6)el(g,'rgba(120,110,96,.5)',x,yy,3.4,2);else if(r<.2)el(g,'#f2eadc',x,yy,3,1.8);else rect(g,'rgba(255,255,240,.25)',x,yy,8,1.2)}
  else if(zz==4){if(r>.6)el(g,'rgba(110,60,40,.35)',x,yy,8,2);else if(r<.2)el(g,'#f6eee0',x,yy,3.4,2);else el(g,'rgba(255,230,190,.28)',x,yy,7,1.6)}
  else if(zz==5){if(r>.5)el(g,'rgba(120,104,80,.5)',x,yy,5,2.4);else rect(g,'rgba(255,245,210,.28)',x,yy,7,1.2)}
  else if(zz==6){if(r>.5){ln(g,'#7a8040',1.4,[x,yy,x-2,yy-6]);ln(g,'#b0b068',1.4,[x+3,yy,x+4,yy-6])}else if(r<.2)el(g,'rgba(120,112,100,.55)',x,yy,4,2)}
  else if(zz==7){if(r>.5)el(g,'rgba(110,94,70,.45)',x,yy,5,2);else if(r<.2)el(g,'rgba(40,30,22,.3)',x,yy,4,1.6);else rect(g,'rgba(255,235,190,.22)',x,yy,8,1.2)}
  else{if(r>.55)el(g,'rgba(70,50,40,.35)',x,yy,7,2.2);else if(r<.2)el(g,'rgba(240,235,230,.4)',x,yy,6,1.6);else rect(g,'rgba(255,200,150,.2)',x,yy,7,1.2)}});
 /* fiumi e pozze: il fiume largo della steppa (zona 1), il torrente (zona 2), il fiume verde della gola (zona 7) */
 const rv=(a,b,y,c)=>{const xa=a-cam,xb=b-cam;if(xb<0||xa>480)return;const x0=Math.max(0,xa),x1=Math.min(480,xb);g.fillStyle=c;g.fillRect(x0,gt+y,x1-x0,5);rect(g,'rgba(255,255,255,.4)',x0+10,gt+y+1,Math.max(0,x1-x0-30),1.4)};
 rv(60,520,3,'rgba(150,196,226,.8)');rv(2640,3140,3,'rgba(130,176,206,.7)');rv(16300,17200,3,'rgba(100,170,150,.9)');
 const dw=cl(1-cam/1800,0,1);if(dw>.02)rect(g,'rgba(255,190,200,'+(.14*dw)+')',0,gt,480,150);
 const gd=cl((cam-13500)/700,0,1)*cl((16300-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.1*gd)+')',0,gt,480,150);
 const sg=cl((cam-16000)/1800,0,1);if(sg>.02)rect(g,'rgba(255,120,60,'+(.2*sg)+')',0,gt,480,150);
 const gw=cl((cam-20800)/900,0,1);if(gw>.02)rect(g,'rgba(255,214,120,'+(.14*gw)+')',0,gt,480,150)}

/* ---- vita: mandrie, uccelli, passanti ---- */
function layerLife(g,o,t){const cam=o,xs=cam+240,hz=GT;
 const hv=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.5),0,1);
 /* uccelli: aquila di mare sopra il riparo, gabbiani sulla costa, grifoni sul Giura, corvi in steppa */
 let e=hv(3900,2400);if(e>.05)for(let i=0;i<2;i++){const bx=((i*210+t*(14+i*3))%620)-70,by=70+hr(i*7)*40+Math.sin(t*.7+i*2)*12;aquila(g,bx,by,.7,t*3.2+i)}
 e=hv(7200,3600);if(e>.05)for(let i=0;i<6;i++){const bx=((i*120+t*(30+i*3))%600)-60,by=60+hr(i*5)*100+Math.sin(t*1.2+i)*10;volare(g,bx,by,1,t*7+i,'#f4f4f0')}
 e=hv(14900,2600);if(e>.05)for(let i=0;i<2;i++){const bx=((i*260+t*(16+i*4))%600)-60,by=50+hr(i*3)*50+Math.sin(t*.6+i)*10;aquila(g,bx,by,.9,t*2.6+i)}
 e=hv(1500,2400);if(e>.05)for(let i=0;i<4;i++){const bx=((i*160+t*(22+i*3))%620)-70,by=84+hr(i*9)*80+Math.sin(t*1.4+i)*8;volare(g,bx,by,.9,t*8+i)}
 e=hv(17650,2600);if(e>.05)for(let i=0;i<3;i++){const bx=((i*150+t*(20+i*3))%600)-60,by=70+hr(i*4)*90;volare(g,bx,by,.9,t*8+i)}
 e=hv(20700,3000);if(e>.05)for(let i=0;i<5;i++){const bx=((i*130+t*(18+i*3))%600)-60,by=80+hr(i*6)*90;volare(g,bx,by,.8,t*7+i,'#2a2030')}
 /* mandrie e animali a mezza distanza */
 each(o,520,31,(x,i,r)=>{const wx=cam+x,zz=zn(wx);const f=md(i,2)?1:-1,off=Math.sin(t*.12+i)*40;
  if(zz==1){if(r<.34){quad(g,x+20+off,hz+34,.78,t,f,'cavallo',i);quad(g,x+64+off,hz+38,.74,t,f,'cavallo',i+2)}else if(r<.62){quad(g,x+20+off,hz+36,.82,t,f,'bisonte',i);quad(g,x+70+off,hz+32,.8,t,f,'bisonte',i+3)}else if(r<.8)quad(g,x+40,hz+30,.7,t,f,'mammut',i,1)}
  else if(zz==2){if(r<.4)quad(g,x+30+off,hz+36,.8,t,f,'renna',i)}
  else if(zz==3){if(r<.2)quad(g,x+30,hz+38,.8,t,f,'cavallo',i)}
  else if(zz==4){if(r<.5){quad(g,x+20+off,hz+34,.8,t,f,'gazzella',i);quad(g,x+52+off,hz+38,.74,t,f,'gazzella',i+1);quad(g,x+84+off,hz+34,.78,t,f,'gazzella',i+2)}}
  else if(zz==5){if(r<.4){quad(g,x+30+off,hz+36,.8,t,f,'gazzella',i);quad(g,x+64+off,hz+34,.8,t,f,'renna',i+1)}}
  else if(zz==6){if(r<.4){quad(g,x+20+off,hz+36,.8,t,f,'renna',i);quad(g,x+60+off,hz+34,.84,t,f,'cavallo',i+1)}else if(r<.6)quad(g,x+40,hz+34,.64,t,f,'mammut',i,1)}
  else if(zz==7){if(r<.3)quad(g,x+30+off,hz+36,.8,t,f,'stambecco',i)}
  else{if(r<.4){quad(g,x+20,hz+36,.7,t,f,'mammut',i,1);quad(g,x+78,hz+34,.64,t,f,'mammut',i+1,1)}else if(r<.7)quad(g,x+40+off,hz+34,.8,t,f,'bisonte',i)}});
 /* qualche persona del gruppo che cammina lontano */
 each(o,640,57,(x,i,r)=>{const wx=cam+x,zz=zn(wx);if(r<.5)return;const dir=md(i,2)?1:-1,off=Math.sin(t*.16+i)*60,f=Math.cos(t*.16+i)*dir>0?1:-1;
  const sk=zz<=3?{nea:1,skin:SKN_N[md(i,3)],cloak:'#6a4a30',s:.5}:{skin:SKN_S[md(i,5)],cloak:'#7a5a3c',s:.5};person(g,x+off,hz+54,t+i,Object.assign({f,ph:i},sk))})}

/* ---- figure sedute, mani a negativo, dipinti, oggetti piccoli ---- */
function seduto(g,x,y,t,o){g.save();g.translate(x,y);g.scale((o.f||1)*(o.s||1),o.s||1);const sk=o.skin||'#e0b494',tp=o.top||'#8a6040',b=Math.sin(t*2+(o.ph||0))*.8;
 ln(g,tp,10,[-4,-8,18,-8]);el(g,'#3a2a1c',22,-5,6,3.4);poly(g,tp,[[-9,-12],[9,-12],[8,-46+b],[-8,-46+b]]);
 if(o.nea){el(g,sk,2,-58+b,10.5,10.5);rect(g,'#3a2a1c',4,-63+b,9,2.4);el(g,sk,12,-56+b,3.6,3)}else el(g,sk,2,-58+b,9.5,10);
 g.fillStyle=o.hair||'#2a1a10';g.beginPath();g.arc(1,-60+b,10.5,Math.PI,0);g.fill();dot(g,'#222',6,-58+b,1.4);
 limb(g,0,-44+b,22,1.1,6,sk);if(o.acc)o.acc(g,t,b);g.restore()}
function manoNeg(g,x,y,s,c,wall){g.save();g.translate(x,y);g.scale(s,s);const fing=[[-8,-6,-12,-22],[-4,-9,-5,-27],[1,-9,2,-28],[6,-8,9,-25],[10,0,19,-9]];
 g.strokeStyle=c;g.lineCap='round';fing.forEach(f=>{g.lineWidth=9;g.beginPath();g.moveTo(f[0],f[1]);g.lineTo(f[2],f[3]);g.stroke()});el(g,c,0,4,13,14);
 g.strokeStyle=wall;fing.forEach(f=>{g.lineWidth=3.6;g.beginPath();g.moveTo(f[0],f[1]);g.lineTo(f[2],f[3]);g.stroke()});el(g,wall,0,4,8.4,9);g.restore()}
const lampada=(g,x,y,t,s)=>{s=s||1;el(g,'#8a8478',x,y,7*s,3*s);el(g,'#5a5448',x,y-2*s,5*s,2*s);const h=(7+Math.sin(t*10+x)*2)*s;poly(g,'#ffb030',[[x-2*s,y-3*s],[x,y-3*s-h],[x+2*s,y-3*s]]);glow(g,x,y-6*s,34*s,'255,180,80',.6)};
const ciotola=(g,x,y,c,s)=>{s=s||1;poly(g,'#d8d0c0',[[x-8*s,y-6*s],[x+8*s,y-6*s],[x+5*s,y],[x-5*s,y]]);el(g,c,x,y-6*s,7*s,2*s)};
const ossoL=(g,x,y,w,a)=>{ln(g,'#e8e2d0',3,[x,y,x+Math.cos(a||0)*w,y+Math.sin(a||0)*w]);dot(g,'#e8e2d0',x,y,2.4);dot(g,'#e8e2d0',x+Math.cos(a||0)*w,y+Math.sin(a||0)*w,2.4)};
const zanna=(g,x,y,s,f)=>{g.save();g.translate(x,y);g.scale(f*s,s);g.strokeStyle='#f0e6c8';g.lineWidth=7;g.lineCap='round';g.beginPath();g.moveTo(0,0);g.quadraticCurveTo(26,-12,34,-40);g.stroke();g.strokeStyle='#cfc4a0';g.lineWidth=2;g.beginPath();g.moveTo(2,-1);g.quadraticCurveTo(24,-10,32,-38);g.stroke();g.lineCap='butt';g.restore()};
const pelleT=(g,x,y,w,h,c)=>{ln(g,'#6a4a30',3,[x-w/2,y,x-w/2,y-h-8]);ln(g,'#6a4a30',3,[x+w/2,y,x+w/2,y-h-8]);ln(g,'#6a4a30',2.6,[x-w/2,y-h-6,x+w/2,y-h-6]);poly(g,c||'#a07a56',[[x-w/2+3,y-h-4],[x+w/2-3,y-h-4],[x+w/2-1,y-h*.6],[x+w/2-7,y-h*.3],[x+w/2-4,y-8],[x,y-14],[x-w/2+6,y-6],[x-w/2+2,y-h*.4]]);for(let q=0;q<14;q++){const fx=x-w/2+8+hr(q)*(w-16),fy=y-h+hr(q*3)*(h-18);ln(g,'rgba(60,40,20,.3)',1.2,[fx,fy,fx+1,fy+5])}el(g,'rgba(255,230,200,.18)',x,y-h*.7,w*.3,h*.2);ln(g,'#c8b890',1.2,[x-w/2,y-h-6,x-w/2+3,y-h-4]);ln(g,'#c8b890',1.2,[x+w/2,y-h-6,x+w/2-3,y-h-4])};
const roccia=(g,x,y,w,h,c)=>{c=c||'#a49c8c';poly(g,c,[[x-w/2,y],[x-w*.42,y-h*.7],[x-w*.1,y-h],[x+w*.3,y-h*.86],[x+w/2,y]]);poly(g,'rgba(255,255,255,.16)',[[x-w*.1,y-h],[x+w*.3,y-h*.86],[x+w*.1,y-h*.5],[x-w*.25,y-h*.6]]);el(g,'rgba(0,0,0,.2)',x,y,w*.5,3)};
const pannello=(g,x,y,w,h,c1,c2,seed)=>{/* lastra di calcare verticale su cui si dipinge */const gr=g.createLinearGradient(0,y-h,0,y);gr.addColorStop(0,c1);gr.addColorStop(1,c2);g.fillStyle=gr;g.beginPath();g.moveTo(x-w/2,y);for(let q=0;q<=10;q++)g.lineTo(x-w/2+q*w/10,y-h+(hr(q*3+seed)-.5)*10);g.lineTo(x+w/2,y);g.closePath();g.fill();for(let q=0;q<4;q++)rect(g,'rgba(70,50,30,.1)',x-w/2,y-h*(.2+q*.2),w,2);rect(g,'rgba(0,0,0,.18)',x-w/2,y-4,w,4)};
const dip=(g,k,x,y,s,f,c,t)=>quad(g,x,y,s,t||0,f,k,0,1,c);

/* ---- oggetti: ogni "pv…" è un disegno ancorato al suolo (x,y = punto di appoggio) ---- */
reg('pvtarga',(g,x,y,t,a)=>{ln(g,'#6a4a2c',4,[x-30,y+2,x-30,y-96]);ln(g,'#6a4a2c',4,[x+30,y+2,x+30,y-96]);poly(g,'#c8b890',[[x-44,y-96],[x+44,y-96],[x+40,y-60],[x-40,y-60]]);rect(g,'rgba(60,40,20,.5)',x-44,y-62,88,3);ln(g,'#8a3a22',2,[x-30,y-90,x-24,y-80,x-18,y-90]);txt(g,String(a),x,y-72,a&&a.length>10?9:11,'#4a2a18','800')});
reg('pvbetulla',(g,x,y,t,a)=>betulla(g,x,y,a||1.2));reg('pvpino',(g,x,y,t,a)=>pino(g,x,y,a||1.3,'#3a5a34'));reg('pvquercia',(g,x,y,t,a)=>quercia(g,x,y,a||1.2,'#4a6a34'));reg('pvacacia',(g,x,y,t,a)=>acacia(g,x,y,a||1.2));reg('pvginepro',(g,x,y,t,a)=>ginepro(g,x,y,a||1.4));
reg('pvcespo',(g,x,y,t,a)=>{cespo(g,x,y+2,a||2,'#a09050');cespo(g,x+16,y+4,(a||2)*.8,'#8a8448')});
reg('pvsasso',(g,x,y,t,a)=>{sasso(g,x,y+4,a||1.6);sasso(g,x+22,y+6,(a||1.6)*.6)});
reg('pvselce',(g,x,y,t,a)=>{/* nuclei, schegge e scarti di selce */el(g,'#6a6a72',x,y-6,14,8);el(g,'#8a8a94',x-3,y-9,8,4);for(let q=0;q<14;q++){const px=x-70+q*10+hr(q)*8,py=y-1+hr(q*3)*10;poly(g,q%3?'#5a5a62':'#d0cfc8',[[px-4,py],[px+1,py-6],[px+5,py-1],[px+1,py+1]])}el(g,'#d8d4cc',x+60,y-4,16,6);el(g,'#b0aca4',x+56,y-6,8,3);sasso(g,x+34,y+4,.7,'#8a8478');sasso(g,x-52,y+6,.6,'#8a8478')});
reg('pvlancia',(g,x,y,t,a)=>{roccia(g,x,y,70,46,'#9a9488');lancia(g,x+16,y-2,120);ln(g,'#1a1410',2.6,[x+16,y-114,x+18,y-108])});
reg('pvfuocino',(g,x,y,t,a)=>fuocoP(g,x,y,t,a||1));
reg('pvpelle',(g,x,y,t,a)=>{pelleT(g,x,y,70,70,'#a07a56');pelleT(g,x+74,y,60,64,'#8a6a4a');if(a)nea(g,x-52,y+4,t,{f:1,s:.92,top:'#6a4a30',acc:(g2,b)=>{ln(g2,'#d8d4c8',3,[18,-80+b,34,-50]);el(g2,'#8a8a92',34,-48,5,3)}});for(let q=0;q<4;q++)ln(g,'#e8dcc0',1.6,[x+120,y-60+q*6,x+132,y-54+q*6]);ln(g,'#7a5a38',2.6,[x+130,y,x+130,y-100]);poly(g,'#7a5a3e',[[x+112,y-96],[x+148,y-96],[x+144,y-54],[x+116,y-56]])});
reg('pvossa',(g,x,y,t,a)=>{ossoL(g,x-30,y-2,26,.2);ossoL(g,x+4,y+2,22,-.3);ossoL(g,x+34,y-3,20,.5);dot(g,'#d8d0b8',x-4,y-4,5);el(g,'#d8d0b8',x+14,y-3,6,3.4);rect(g,'#c8b890',x+50,y-8,16,8);rect(g,'#8a6a40',x+52,y-6,12,2)});
reg('pvcacciatori',(g,x,y,t,a)=>{/* rilievo erboso con cacciatori che spiano la mandria */el(g,'#a89a4c',x,y,118,34);el(g,'#b8aa5a',x-10,y-8,90,24);for(let q=0;q<10;q++)cespo(g,x-80+q*17,y-26+hr(q)*8,.8,'#9a8a44');
 [[-34,-30,1],[0,-34,1],[30,-28,1]].forEach((p,i)=>{g.save();g.beginPath();g.rect(x-130,y-200,260,200-6+(i==1?-6:0));g.clip();nea(g,x+p[0],y+p[1]+22,t,{f:1,s:.74,top:'#6a4a30',acc:(g2,b)=>{lancia(g2,18,-4,96,'#8a8a92')}});g.restore()});
 el(g,'#a89a4c',x+8,y+6,120,16);for(let q=0;q<5;q++)dot(g,'rgba(255,255,255,.35)',x-34+q*18,y-50-q%2*4+q*-1,2+(q%2)*.8)});
reg('pvmandria',(g,x,y,t,a)=>{quad(g,x,y,1.5,t,1,'bisonte',1);quad(g,x+84,y-4,1.4,t,1,'cavallo',2);quad(g,x+150,y+2,1.6,t,1,'bisonte',3)});
reg('pvlab',(g,x,y,t,a)=>{seduto(g,x,y,t,{nea:1,f:1,s:1.12,skin:SKN_N[0],top:'#6a4a30',acc:(g2,t2,b)=>{ln(g2,'#8a8a92',3,[14,-24,22,-22]);el(g2,'#d0cfc8',22,-20,5,3)}});el(g,'#6a6a72',x+26,y-6,12,7);el(g,'#8a8a94',x+24,y-9,7,3);sasso(g,x+48,y+2,.6)});
reg('pvcarne',(g,x,y,t,a)=>{fuocoP(g,x,y,t,1.1);ln(g,'#6a4a30',2.6,[x-28,y-4,x-18,y-52]);ln(g,'#6a4a30',2.6,[x+28,y-4,x+18,y-52]);ln(g,'#7a5a38',3,[x-22,y-50,x+22,y-50]);poly(g,'#a8503a',[[x-14,y-50],[x+12,y-50],[x+8,y-34],[x-10,y-34]]);el(g,'#8a3a28',x,y-46,12,5);glow(g,x,y-20,80,'255,160,70',.3)});
reg('pvgiaciglio',(g,x,y,t,a)=>{el(g,'#7a5a3e',x,y-3,34,7);el(g,'#9a7a56',x-4,y-6,26,5);for(let q=0;q<6;q++)ln(g,'rgba(60,40,20,.3)',1.2,[x-24+q*9,y-6,x-22+q*9,y-1]);el(g,'#8a6a4a',x+62,y-2,26,5)});
reg('pvfocolare',(g,x,y,t,a)=>{/* il focolare del riparo: fuoco vivo, spiedo, ocra, fasci di legna */fuocoP(g,x,y,t,1.5);glow(g,x,y-20,190,'255,150,60',.3);for(let q=0;q<5;q++)ln(g,'#6a4a2a',3,[x-100+q*6,y-2,x-98+q*6,y-34]);ciotola(g,x+86,y+4,'#b04a30',1.3);el(g,'#b04a30',x+112,y+2,9,3);ln(g,'#6a4a30',2.4,[x-40,y-4,x-30,y-50]);ln(g,'#6a4a30',2.4,[x+40,y-4,x+30,y-50]);ln(g,'#7a5a38',3,[x-34,y-48,x+34,y-48]);poly(g,'#a8503a',[[x-18,y-48],[x+18,y-48],[x+12,y-30],[x-12,y-30]]);ossoL(g,x+50,y+8,18,.2);ossoL(g,x-64,y+8,16,-.2)});
reg('pvcura',(g,x,y,t,a)=>{/* l'anziano segnato accanto al fuoco, chi gli porge il cibo, il giovane che mastica la corteccia */fuocoP(g,x+10,y+2,t,.9);
 seduto(g,x-44,y+8,t,{nea:1,f:1,s:1.06,skin:SKN_N[1],top:'#6a4a30',hair:'#8a8480',acc:(g2,t2,b)=>{ln(g2,'#e0b494',3,[8,-30,12,-22])}});nea(g,x+72,y+8,t,{f:-1,s:.86,top:'#7a5a3c',acc:(g2,b)=>{ciotola(g2,20,-50+b,'#8a6a40',1)}});seduto(g,x+110,y+10,t,{nea:1,f:-1,s:.74,top:'#7a5a3c'});
 for(let q=0;q<5;q++)ln(g,['#6a8a44','#8a7a4a','#5a7a3a'][q%3],2,[x-90+q*4,y+4,x-88+q*5,y-6-q%2*4]);rect(g,'#8a6a40',x-100,y+2,16,5)});
reg('pvtomba',(g,x,y,t,a)=>{/* fosse con il corpo: 0 neanderthal (fosse poco profonda, pochi fiori), 1 Qafzeh (ragazzo con i palchi), 2 Sungir (due ragazzi testa a testa) */
 const v=a||0;el(g,'#5a4636',x,y+1,v==2?92:66,13);el(g,'#3a2c20',x,y+1,v==2?84:58,9);
 if(v==0){el(g,'#c8a082',x-6,y-1,34,6);el(g,'#d8b090',x-28,y-3,9,7);ln(g,'#c8a082',4,[x+4,y,x+22,y+3]);for(let q=0;q<7;q++)sasso(g,x-60+q*20,y+8,.5);[[-50,3],[-44,1],[54,4]].forEach((f,i)=>{ln(g,'#5a7a3a',1.4,[x+f[0],y+f[1]+4,x+f[0],y+f[1]-6]);dot(g,['#e8d0f0','#f4e08a','#f4f0e6'][i],x+f[0],y+f[1]-7,2.4)})}
 else if(v==1){el(g,'#c89a76',x,y-1,34,6);el(g,'#d8aa86',x-30,y-3,8,7);ln(g,'#f0e6d0',2.6,[x-8,y-5,x-12,y-18,x-18,y-24]);ln(g,'#f0e6d0',2.6,[x+6,y-5,x+10,y-18,x+16,y-22]);ln(g,'#f0e6d0',1.6,[x-12,y-14,x-22,y-16]);ln(g,'#f0e6d0',1.6,[x+10,y-14,x+20,y-12]);for(let q=0;q<10;q++)el(g,'rgba(190,60,40,.55)',x-50+q*11,y+7+(q%3),5,2.2);for(let q=0;q<5;q++)dot(g,['#e8d8c0','#c8503a','#e8c04a'][q%3],x-20+q*10,y+8,2.2);for(let q=0;q<6;q++)sasso(g,x-56+q*22,y+9,.5)}
 else{[-1,1].forEach((d,i)=>{const bx=x+d*24,cc=i?'#f4eee0':'#ece4d0';el(g,'#c89a76',bx,y-1,24,6);el(g,'#d8aa86',bx-d*24,y-2,7,6);for(let q=0;q<22;q++)dot(g,cc,bx-d*18+q*d*1.8,y-4+(q%3),1.5+(q%2)*.5);for(let q=0;q<4;q++)dot(g,'#d8d0c0',bx-d*20+q*d*12,y-1,2)});ln(g,'#f4eee0',2.8,[x-44,y+8,x+44,y+6]);ln(g,'#f4eee0',2.8,[x-48,y+11,x+48,y+11]);for(let q=0;q<8;q++)el(g,'rgba(190,60,40,.5)',x-44+q*12,y+9+(q%2),5,2)}});
reg('pvartigli',(g,x,y,t,a)=>{/* la collana degli otto artigli di aquila di mare */seduto(g,x-30,y+6,t,{nea:1,f:1,s:1,skin:SKN_N[0],top:'#6a4a30',acc:(g2,t2,b)=>{g2.save();for(let q=0;q<8;q++){const aa=q/7*Math.PI;ln(g2,'#14100c',2.6,[16+Math.cos(aa)*-12,-26+Math.sin(aa)*4,16+Math.cos(aa)*-12,-20+Math.sin(aa)*4+5])}g2.restore()}});
 ln(g,'#7a5a38',2.4,[x+30,y+2,x+30,y-84]);ln(g,'#7a5a38',2.4,[x+30,y-84,x+66,y-84]);ln(g,'#c8b890',1.4,[x+34,y-84,x+34,y-74,x+50,y-66,x+62,y-74,x+62,y-84]);for(let q=0;q<8;q++){const px=x+36+q*3.4,py=y-70-Math.sin(q/7*Math.PI)*-4;poly(g,'#14100c',[[px-2,py-4],[px+2,py-4],[px+1,py+8],[px-1,py+9]])}
 for(let q=0;q<3;q++)poly(g,'#14100c',[[x+78+q*8,y-2],[x+86+q*8,y-6],[x+82+q*8,y+3]]);el(g,'#d8d0c0',x+96,y-3,10,3)});
/* costa */
reg('pvconchiglie',(g,x,y,t,a)=>{for(let q=0;q<16;q++){const px=x-70+q*9+hr(q)*5,py=y-1+hr(q*3)*12;el(g,q%3?'#2a3a4a':'#e8e0d0',px,py,5,3);if(q%3==0)ln(g,'rgba(120,100,80,.4)',1,[px-3,py,px+3,py])}el(g,'#6a4a30',x+60,y-8,16,9);rect(g,'#7a5a3c',x+46,y-14,28,5);for(let q=0;q<5;q++)el(g,'#2a3a4a',x+52+q*5,y-17,4,3);el(g,'rgba(0,0,0,.2)',x+60,y+2,16,3)});
reg('pvcozze',(g,x,y,t,a)=>{seduto(g,x,y+4,t,{nea:1,f:1,s:1,skin:SKN_N[2],top:'#7a5a3c',hair:'#4a3a2c',acc:(g2,t2,b)=>{ln(g2,'#8a8a92',3,[14,-24,24,-20]);el(g2,'#2a3a4a',26,-18,5,3)}});for(let q=0;q<9;q++)el(g,q%2?'#2a3a4a':'#e8e0d0',x+34+q*7,y+3+hr(q)*6,4.4,2.8);el(g,'#6a4a30',x-44,y-4,16,8);rect(g,'#7a5a3c',x-58,y-10,30,5)});
reg('pvscoglio',(g,x,y,t,a)=>{roccia(g,x,y,150,64,'#8a8e94');el(g,'#5a98c8',x+20,y+4,40,5);el(g,'rgba(255,255,255,.5)',x+14,y+3,22,1.6);cespo(g,x-40,y-20,1,'#5a7a48')});
reg('pvfoca',(g,x,y,t,a)=>{roccia(g,x-30,y,140,40,'#7e828a');el(g,'#6a6e74',x+10,y-42,34,11);el(g,'#7a7e84',x+34,y-46,9,7);dot(g,'#14100c',x+38,y-47,1.4);ln(g,'#aaa',1,[x+42,y-44,x+50,y-46]);ln(g,'#aaa',1,[x+42,y-43,x+50,y-42]);poly(g,'#5a5e64',[[x-20,y-40],[x-34,y-36],[x-22,y-34]]);ln(g,'#6a6e74',3,[x+10,y-36,x+4,y-30])});
reg('pvpenne',(g,x,y,t,a)=>{/* bambino con le penne di rapace, ceste di pelle */sap(g,x,y,t,{f:1,s:.58,skin:SKN_N[1],hair:'#3a2a1c',cloak:'#7a5a3c',acc:(g2,b)=>{[[18,-70],[22,-76],[26,-70]].forEach(p=>ln(g2,'#1a1a1e',2.4,[10,-78+b,p[0],p[1]+b]));ln(g2,'#f4f0e6',2,[10,-78+b,24,-84+b])}});for(let q=0;q<3;q++){ln(g,'#14100c',2,[x+50+q*5,y-2,x+60+q*5,y-36]);ln(g,'#e8e4d8',1.4,[x+54+q*5,y-6,x+60+q*5,y-36])}});
reg('pvcollanaC',(g,x,y,t,a)=>{/* conchiglie forate su una cordicella, ciotola di conchiglia con ocra, bambino che si prova la collana */ciotola(g,x+54,y+4,'#c84a30',1.4);el(g,'#d8a838',x+78,y+3,7,2.6);sap(g,x-8,y,t,{f:1,s:.6,skin:SKN_N[0],cloak:'#7a5a3c',hair:'#3a2a1c',acc:(g2,b)=>{for(let q=0;q<7;q++)dot(g2,q%2?'#f2e8d8':'#c8503a',3+q*1.6,-90+b+Math.abs(q-3)*1.2,1.7)}});ln(g,'#7a5a38',2.4,[x+90,y+2,x+90,y-60]);ln(g,'#c8b890',1.3,[x+90,y-58,x+70,y-52,x+90,y-44]);for(let q=0;q<6;q++)dot(g,q%2?'#f2e8d8':'#d86a3a',x+88-q*3.4,y-56+q*2.2,2)});
reg('pvsegni',(g,x,y,t,a)=>{/* pavimento di roccia con le linee incise, la mano a negativo, le barre rosse a scala */el(g,'#a8a090',x-80,y+2,64,12);for(let q=0;q<9;q++)ln(g,'#4a4238',1.8,[x-130+q*5+hr(q)*8,y-4,x-60-q*3+hr(q*3)*8,y+8-(q%2)*2]);for(let q=0;q<3;q++)ln(g,'#4a4238',1.8,[x-120+q*18,y+7,x-70+q*10,y-3]);
 pannello(g,x+30,y+4,140,150,'#e4dcc6','#b8ae94',4);manoNeg(g,x+44,y-72,1.1,'rgba(176,52,34,.9)','#d8d0ba');for(let q=0;q<6;q++){rect(g,'#b03422',x-30,y-130+q*14,34,4)}ln(g,'#b03422',4,[x-30,y-132,x-30,y-52]);ln(g,'#b03422',4,[x+4,y-132,x+4,y-52]);for(let q=0;q<4;q++)dot(g,'#b03422',x+70+q*8,y-118+q%2*10,2.2);lampada(g,x+92,y-4,t,1)});
reg('pvcerchio',(g,x,y,t,a)=>{/* il cerchio di stalagmiti nel buio della grotta di Bruniquel */el(g,'#3a2e24',x,y,130,18);for(let r=0;r<2;r++)for(let q=0;q<22;q++){const aa=q/22*Math.PI*2,rx=(r?84:112),ry=(r?9:12),px=x+Math.cos(aa)*rx,py=y+Math.sin(aa)*ry;rect(g,'#b4aa96',px-2.4,py-6-r*2,4.8,8+r*2);rect(g,'rgba(255,255,255,.2)',px-2.4,py-6-r*2,1.6,8)}
 for(let q=0;q<4;q++)el(g,'rgba(30,20,14,.7)',x-50+q*30,y-1,10,3);glow(g,x-30,y-30,150,'255,170,80',.4);nea(g,x-80,y+12,t,{f:1,s:.8,top:'#5a3e28',acc:(g2,b)=>{ln(g2,'#6a4a30',2.4,[14,-60+b,22,-110]);const h=8+Math.sin(t*9)*2;poly(g2,'#ffb030',[[19,-108],[22,-108-h],[26,-108]])}});nea(g,x+76,y+10,t,{f:-1,s:.76,top:'#5a3e28'})});
/* Africa */
reg('pvmacina',(g,x,y,t,a)=>{el(g,'#b8a890',x,y-3,34,7);el(g,'#a82e1e',x-6,y-6,20,4);el(g,'#c8503a',x-8,y-7,14,2.6);el(g,'#8a7a68',x+8,y-9,12,5);ciotola(g,x+54,y+3,'#c8503a',1.2);for(let q=0;q<8;q++)el(g,'#c8503a',x-56+q*5,y+4+hr(q)*4,3,1.6);ossoL(g,x+78,y+3,22,-.1)});
reg('pvabalone',(g,x,y,t,a)=>{[[0,0],[56,4]].forEach((s,i)=>{el(g,'#a8a4b0',x+s[0],y-6,30,12);el(g,'#d8c8e0',x+s[0],y-8,26,9);el(g,'#b03a28',x+s[0]+2,y-10,18,5);el(g,'#d85a3c',x+s[0],y-11,10,2.4);for(let q=0;q<4;q++)dot(g,'#5a3a8a',x+s[0]-16+q*10,y-6,1)});ln(g,'#e8e2d0',2.6,[x+30,y-14,x+44,y-4]);for(let q=0;q<6;q++)dot(g,'#2a2420',x-60+q*8,y+4+hr(q)*5,2);el(g,'#c8503a',x-34,y+4,14,3);el(g,'#b8a890',x-10,y+14,22,5)});
reg('pvperline',(g,x,y,t,a)=>{/* 41 conchiglie a spirale forate, blocco d'ocra inciso a rete, frammento con segno a griglia */ci(g,x,y);function ci(g,x,y){ln(g,'#6a4a30',1.6,[x-70,y-8,x-30,y-2,x+4,y-10]);for(let q=0;q<14;q++){const px=x-70+q*5.2,py=y-8+q*.35-Math.sin(q/13*Math.PI)*-5;g.save();g.translate(px,py);poly(g,'#e8d8c0',[[-2,2],[0,-4],[2,2]]);dot(g,'#c8503a',0,0,1.2);g.restore()}}
 rect(g,'#a82e1e',x+26,y-14,26,16);for(let q=0;q<5;q++){ln(g,'#5a1a10',1.2,[x+28+q*5,y-14,x+28+q*5,y+2]);ln(g,'#5a1a10',1.2,[x+26,y-11+q*3.4,x+52,y-11+q*3.4])}
 poly(g,'#d8d0be',[[x+66,y+2],[x+64,y-14],[x+84,y-18],[x+88,y+2]]);for(let q=0;q<4;q++){ln(g,'#b03422',1.6,[x+68+q*5,y-14,x+68+q*5,y]);ln(g,'#b03422',1.6,[x+66,y-12+q*4,x+86,y-12+q*4])}
 sap(g,x-100,y+4,t,{f:1,s:.62,skin:SKN_S[3],hair:'#14100c',cloak:'#7a5a3c',acc:(g2,b)=>{for(let q=0;q<7;q++)dot(g2,q%2?'#f2e8d8':'#c8503a',3+q*1.6,-90+b+Math.abs(q-3)*1.2,1.7)}})});
reg('pvjebel',(g,x,y,t,a)=>{/* collina di calcare con una grotta aperta, fuoco, persone dal volto simile al nostro, punte di pietra */roccia(g,x-70,y,110,70,'#d8cfb4');fuocoP(g,x+10,y+4,t,1);sap(g,x+56,y+2,t,{f:-1,s:.95,skin:SKN_S[0],hair:'#14100c',cloak:'#7a5a3c'});sap(g,x-40,y+14,t,{f:1,s:.86,skin:SKN_S[1],hair:'#14100c',top:'#9a7a56'});for(let q=0;q<5;q++)poly(g,'#7a7a84',[[x+90+q*8,y+4],[x+94+q*8,y-8],[x+98+q*8,y+4]])});
reg('pvomo',(g,x,y,t,a)=>{/* valle dell'Omo: terra rossa a strati con la cenere, teschio dalla fronte alta, persone alte e snelle che raccolgono frutti */g.fillStyle='#a8502a';g.fillRect(x-90,y-50,180,56);for(let q=0;q<5;q++)rect(g,q%2?'#e8e0d0':'#c86a3a',x-90,y-48+q*10,180,3+(q%2)*2);poly(g,'#7a3a20',[[x-90,y-50],[x-60,y-62],[x+10,y-56],[x+60,y-64],[x+90,y-50]]);
 roccia(g,x+34,y-50,40,16,'#c8b8a0');el(g,'#e8e0d0',x+34,y-70,10,11);el(g,'#d8d0c0',x+34,y-62,6,6);rect(g,'#5a4a3a',x+30,y-72,3,3);rect(g,'#5a4a3a',x+36,y-72,3,3);sap(g,x-122,y+6,t,{f:1,s:.92,skin:SKN_S[0],hair:'#14100c',top:'#8a6a46',acc:(g2,b)=>{dot(g2,'#c8503a',22,-56+b,3);dot(g2,'#e8b030',27,-54+b,3)}});sap(g,x+124,y+10,t,{f:-1,s:.82,skin:SKN_S[1],hair:'#14100c',top:'#8a6a46'});for(let q=0;q<3;q++){dot(g,'#c8503a',x-150+q*8,y+8,3)}});
reg('pvblombos',(g,x,y,t,a)=>{PR.pvabalone(g,x,y,t,a);ln(g,'#e8e2d0',2.6,[x+22,y-22,x+34,y-10]);glow(g,x+28,y-10,70,'255,255,230',.22)});
/* Levante */
reg('pvfila',(g,x,y,t,a)=>{/* un gruppo che cammina in fila con sacche di pelle e lance */[[0,1,.86],[56,1,.92],[110,1,.8],[158,1,.76]].forEach((p,i)=>{sap(g,x+p[0],y+i%2*6,t+i,{f:1,s:p[2],skin:SKN_S[(i+2)%5],hair:'#14100c',top:'#9a7a56',cloak:'#7a5a3c',acc:(g2,b)=>{lancia(g2,16,-4,90,'#8a8a92');el(g2,'#6a4a30',-14,-62+b,8,10)}})});for(let q=0;q<6;q++)el(g,'rgba(240,220,170,.3)',x+q*34-20,y+10,10,2)});
reg('pvmisliya',(g,x,y,t,a)=>{/* la mascella con i denti su una pietra, mucchi di punte sottili, cacciatori che tornano con una gazzella */roccia(g,x,y,70,38,'#c8c0a8');el(g,'#e8e0cc',x,y-44,14,6);for(let q=0;q<7;q++)rect(g,'#f4eee0',x-12+q*3.6,y-42,2.4,5);for(let q=0;q<9;q++)poly(g,'#7a7a84',[[x+50+q*6,y+4+hr(q)*5],[x+54+q*6,y-8],[x+58+q*6,y+4+hr(q)*5]]);
 sap(g,x+130,y+8,t,{f:-1,s:.88,skin:SKN_S[3],hair:'#14100c',acc:(g2,b)=>{g2.save();g2.translate(2,-66+b);g2.rotate(.2);el(g2,'#cc9e68',0,0,14,6);ln(g2,'#cc9e68',2,[-8,2,-12,12]);ln(g2,'#cc9e68',2,[8,2,12,12]);g2.restore()}});fuocoP(g,x-70,y+8,t,.8)});
reg('pvvicini',(g,x,y,t,a)=>{/* due piccoli gruppi che si guardano da lontano, uno tozzo e uno più alto e snello; una donna con un bambino fra i due */roccia(g,x-90,y,80,46,'#d2c8aa');roccia(g,x+94,y,80,46,'#d2c8aa');nea(g,x-100,y+4,t,{f:1,s:.9,top:'#6a4a30'});nea(g,x-70,y+12,t,{f:1,s:.84,top:'#7a5a3c'});sap(g,x+84,y+4,t,{f:-1,s:.98,skin:SKN_S[2],hair:'#14100c',top:'#9a7a56'});sap(g,x+112,y+12,t,{f:-1,s:.92,skin:SKN_S[1],hair:'#14100c',top:'#9a7a56'});
 sap(g,x,y+8,t,{f:1,s:.86,skin:SKN_S[4],hair:'#14100c',top:'#8a6a46',long:1,bot:'#8a6a46',acc:(g2,b)=>{g2.save();g2.translate(16,-70+b);el(g2,'#8a6a46',0,2,6,8);dot(g2,SKN_N[0],0,-8,4.6);g2.restore()}});glow(g,x,y-60,150,'255,220,140',.1)});
/* Giura Svevo */
reg('pvzanne',(g,x,y,t,a)=>{zanna(g,x-50,y+2,1.4,1);zanna(g,x+10,y+4,1.2,-1);for(let q=0;q<14;q++)poly(g,'#f4ecd4',[[x-30+q*6+hr(q)*8,y+8+hr(q*3)*10],[x-27+q*6+hr(q)*8,y+4+hr(q*3)*10],[x-24+q*6+hr(q)*8,y+8+hr(q*3)*10]]);for(let q=0;q<3;q++)poly(g,'#6a6a72',[[x+60+q*8,y+6],[x+62+q*8,y-8],[x+66+q*8,y+6]]);ossoL(g,x+100,y+4,36,.05);rect(g,'#b0aa9a',x+86,y-6,14,8)});
reg('pvflauto',(g,x,y,t,a)=>{seduto(g,x,y+4,t,{f:1,s:1.1,skin:SKN_S[3],hair:'#14100c',top:'#9a7a56',acc:(g2,t2,b)=>{ln(g2,'#f0e8d6',3,[8,-56+b,34,-50+b+Math.sin(t2*5)*1.5]);for(let q=0;q<5;q++)dot(g2,'#6a5a4a',14+q*4.4,-55+b,.8);for(let q=0;q<3;q++)dot(g2,'rgba(255,230,160,.8)',34+q*10,-58+b-Math.abs(Math.sin(t2*3+q))*10-q*5,2-q*.4)}});seduto(g,x+60,y+8,t,{f:-1,s:.9,skin:SKN_S[1],hair:'#14100c',top:'#8a6a46'});seduto(g,x+92,y+12,t,{f:-1,s:.8,skin:SKN_S[2],hair:'#14100c',top:'#8a6a46'});ln(g,'#e8e2d0',2,[x-70,y,x-40,y-3])});
reg('pvuomoleone',(g,x,y,t,a)=>{/* la statuetta d'avorio, uomo-leone: corpo d'uomo e testa di leone delle caverne, su una pietra */roccia(g,x,y,70,24,'#a8a090');const sy=y-24;el(g,'rgba(70,50,30,.45)',x,sy-36,30,46);g.save();g.translate(x,sy);g.scale(1.9,1.9);poly(g,'#e8d8a8',[[-6,-4],[6,-4],[5,-26],[-5,-26]]);rect(g,'#e8d8a8',-6,-4,5,4);rect(g,'#e8d8a8',1,-4,5,4);ln(g,'#e8d8a8',3,[-6,-24,-9,-10]);ln(g,'#e8d8a8',3,[6,-24,9,-10]);el(g,'#e8d8a8',0,-31,7,7);poly(g,'#d8c890',[[-5,-36],[-3,-40],[0,-37],[3,-40],[5,-36]]);el(g,'#d8c890',5,-30,4.4,3.6);for(let q=0;q<4;q++)rect(g,'#b8a870',-9,-20+q*3,2.4,1);dot(g,'#4a3a20',2,-32,.9);g.restore();glow(g,x,sy-40,60,'255,240,190',.3)});
reg('pvvenere',(g,x,y,t,a)=>{roccia(g,x,y,56,20,'#a8a090');el(g,'rgba(70,50,30,.45)',x,y-52,22,36);g.save();g.translate(x,y-20);g.scale(2.6,2.6);ln(g,'#e8d8a8',1.6,[0,-6,0,-18]);g.strokeStyle='#e8d8a8';g.lineWidth=1.8;g.beginPath();g.arc(0,-24,4,0,7);g.stroke();el(g,'#e8d8a8',-3.6,-14,3,4.6);el(g,'#e8d8a8',3.6,-14,3,4.6);el(g,'#e8d8a8',0,-9,6,5);poly(g,'#e8d8a8',[[-4,-6],[4,-6],[2,0],[-2,0]]);for(let q=0;q<3;q++)rect(g,'rgba(120,90,40,.5)',-4,-12+q*3,8,.5);g.restore();ln(g,'#7a5a38',1.2,[x,y-72,x-10,y-80]);glow(g,x,y-50,60,'255,240,190',.28)});
reg('pvultimi',(g,x,y,t,a)=>{/* un piccolo gruppo di Neanderthal in controluce su un'altura; sul prato un gruppo di Sapiens; fra i due una vallata vuota */el(g,'#c8a870',x-120,y+2,70,26);glow(g,x-120,y-60,140,'255,210,120',.3);[0,18,38].forEach((d,i)=>{g.save();g.globalAlpha=.9;nea(g,x-132+d,y-12-i%2*4,t,{f:1,s:.62,skin:'#2a2018',top:'#2a1e16',cloak:'#2a1e16',hair:'#1a1410',bot:'#2a1e16',acc:(g2,b)=>{lancia(g2,16,-4,80,'#2a2018')}});g.restore()});
 sap(g,x+72,y+8,t,{f:-1,s:.92,skin:SKN_S[2],hair:'#14100c',top:'#9a7a56'});sap(g,x+104,y+14,t,{f:-1,s:.86,skin:SKN_S[0],hair:'#14100c',top:'#9a7a56'});sap(g,x+134,y+8,t,{f:-1,s:.9,skin:SKN_S[3],hair:'#14100c',top:'#9a7a56'})});
/* grotte dipinte */
reg('pvlampada',(g,x,y,t,a)=>{sap(g,x,y,t,{f:1,s:.92,skin:SKN_S[3],hair:'#14100c',top:'#8a6a46',acc:(g2,b)=>{ln(g2,'#6a4a30',2.4,[16,-70+b,26,-84]);lampada(g2,26,-86,t,1.2)}});sap(g,x+56,y+10,t,{f:1,s:.84,skin:SKN_S[1],hair:'#14100c',top:'#8a6a46'});for(let q=0;q<4;q++)sasso(g,x+90+q*14,y+4,.5)});
reg('pvchauvet',(g,x,y,t,a)=>{/* parete di calcare con i leoni neri in fila, rinoceronti, cavalli e un orso */pannello(g,x,y+2,260,190,'#f0e6c8','#c8b890',7);for(let q=0;q<4;q++)dip(g,'leone',x-94+q*34,y-112+q%2*2,.9,1,'#1a1410',t);dip(g,'rino',x+30,y-60,.9,-1,'#2a2018',t);dip(g,'rino',x+76,y-66,.8,-1,'#2a2018',t);for(let q=0;q<3;q++)dip(g,'cavallo',x-96+q*16,y-44-q*3,.8,1,'#1a1410',t);dip(g,'bisonte',x+4,y-148,.7,1,'#4a2a1c',t);glow(g,x-90,y-60,180,'255,180,90',.2);lampada(g,x-120,y-3,t,1.2);lampada(g,x+126,y-3,t,1.2)});
reg('pvmani',(g,x,y,t,a)=>{/* parete di mani rosse a negativo, chi soffia il colore da un osso cavo, ciotole con i pigmenti */pannello(g,x,y+2,220,170,'#eadfc2','#bfb08a',9);for(let r=0;r<3;r++)for(let q=0;q<5;q++){const c=r==1?'rgba(200,150,40,.9)':r==2?'rgba(60,50,48,.9)':'rgba(176,52,34,.9)';manoNeg(g,x-80+q*40+(r%2)*10,y-100+r*34,.72,c,'#e4d8bc')}
 dot(g,'#b03422',x+80,y-60,6);sap(g,x+150,y+6,t,{f:-1,s:.92,skin:SKN_S[3],hair:'#14100c',top:'#8a6a46',acc:(g2,b)=>{ln(g2,'#e8e2d0',3,[-6,-66+b,-24,-60+b]);for(let q=0;q<4;q++)dot(g2,'rgba(176,52,34,.6)',-30-q*5,-60+b+Math.sin(q*2)*3,2)}});ciotola(g,x-120,y+3,'#b03422',1.2);ciotola(g,x-98,y+3,'#d8a838',1.2);ciotola(g,x-76,y+3,'#2a2420',1.2);lampada(g,x-140,y-1,t,1)});
reg('pvlascaux',(g,x,y,t,a)=>{/* la Sala dei Tori: pareti bianche con enormi uri neri e rossi, impalcatura di legno, un pittore */pannello(g,x,y+2,320,200,'#f8f2e0','#d0c4a4',12);dip(g,'uro',x-70,y-110,2.6,1,'#1a1410',t);dip(g,'uro',x+70,y-130,2.2,-1,'#a8381e',t);for(let q=0;q<3;q++)dip(g,'cavallo',x-130+q*30,y-52-q*4,.9,1,'#5a3a28',t);dip(g,'renna',x+86,y-52,.9,-1,'#2a2018',t);for(let q=0;q<9;q++)dot(g,'#b03422',x-120+q*10,y-170+(q%2)*5,2);
 ln(g,'#7a5a38',3,[x+132,y+2,x+132,y-150]);ln(g,'#7a5a38',3,[x+170,y+2,x+170,y-150]);for(let q=0;q<4;q++)ln(g,'#7a5a38',3,[x+130,y-30-q*38,x+172,y-30-q*38]);sap(g,x+150,y-116,t,{f:-1,s:.64,skin:SKN_S[3],hair:'#14100c',top:'#8a6a46'});lampada(g,x+108,y-3,t,1.2);lampada(g,x-150,y-2,t,1)});
reg('pvaltamira',(g,x,y,t,a)=>{/* il soffitto basso di roccia rosata con i bisonti sulle gobbe, la bambina con la lampada che guarda in su */g.fillStyle='rgba(30,20,18,.55)';g.fillRect(x-170,y-130,340,134);g.fillStyle='#b08a78';g.beginPath();g.moveTo(x-170,y-120);for(let q=0;q<=17;q++)g.lineTo(x-170+q*20,y-130+Math.sin(q*1.4)*10-(q%3)*3);g.lineTo(x+170,y-190);g.lineTo(x-170,y-190);g.closePath();g.fill();
 g.fillStyle='#8a6a5a';g.fillRect(x-170,y-232,340,90);rect(g,'#8a6a5a',x-196,y-232,26,236);rect(g,'#8a6a5a',x+170,y-232,26,236);for(let q=0;q<5;q++)dip(g,'bisonte',x-124+q*58,y-142+(q%2)*-2,1.1,q%2?1:-1,q%3?'#a8381e':'#2a1c14',t);for(let q=0;q<5;q++)el(g,'rgba(70,40,30,.25)',x-130+q*62,y-134,20,5);
 el(g,'rgba(0,0,0,.22)',x,y+2,170,5);sap(g,x-16,y+4,t,{f:1,s:.64,skin:SKN_N[0],hair:'#14100c',top:'#8a6a46',acc:(g2,b)=>{ln(g2,'#6a4a30',2.4,[12,-80+b,18,-104]);lampada(g2,18,-106,t,1.3)}});sap(g,x+50,y+8,t,{f:-1,s:.94,skin:SKN_S[3],hair:'#14100c',top:'#8a6a46'});glow(g,x,y-110,170,'255,190,110',.22)});
/* campo dei cacciatori di mammut */
reg('pvcapanna',(g,x,y,t,a)=>{/* capanna a cupola: base di crani e ossa lunghe, zanne ricurve sul tetto, pelli, fuoco che brilla all'ingresso */const s=a||1;g.save();g.translate(x,y);g.scale(s,s);
 g.fillStyle='#8a6a4c';g.beginPath();g.moveTo(-84,0);g.quadraticCurveTo(-84,-110,0,-118);g.quadraticCurveTo(84,-110,84,0);g.closePath();g.fill();
 g.fillStyle='#a07c58';g.beginPath();g.moveTo(-84,0);g.quadraticCurveTo(-84,-110,0,-118);g.quadraticCurveTo(-30,-84,-28,0);g.closePath();g.fill();
 for(let q=0;q<9;q++)el(g,'#ece4d0',-72+q*18,-12,8,10);for(let q=0;q<9;q++)ln(g,'#e6dec8',3,[-66+q*16.5,-22,-66+q*16.5,-40]);for(let q=0;q<4;q++)ln(g,'rgba(60,40,20,.35)',1.4,[-70+q*44,-100+q*6,-60+q*46,-30]);
 for(let q=0;q<4;q++){g.strokeStyle='#f0e6c8';g.lineWidth=5;g.lineCap='round';g.beginPath();g.moveTo(-60+q*40,-84);g.quadraticCurveTo(-48+q*40,-128,-30+q*40+(q%2)*10,-134);g.stroke();g.lineCap='butt'}
 g.fillStyle='#14100c';g.beginPath();g.moveTo(-22,0);g.lineTo(-22,-40);g.quadraticCurveTo(0,-58,22,-40);g.lineTo(22,0);g.closePath();g.fill();glow(g,0,-22,60,'255,160,70',.7);fiamma(g,0,-2,t,.7);ln(g,'#8a8478',2,[-26,0,26,0]);g.restore();rect(g,'rgba(255,170,80,.12)',x-84*s,y-2,168*s,6)});
reg('pvforno',(g,x,y,t,a)=>{/* forno di terra a cupola con le braci, figurine di argilla cotta, un vasaio che soffia sul fuoco */g.fillStyle='#8a6a4a';g.beginPath();g.moveTo(x-40,y);g.quadraticCurveTo(x-40,y-64,x,y-64);g.quadraticCurveTo(x+40,y-64,x+40,y);g.closePath();g.fill();el(g,'#2a1c14',x,y-14,16,12);glow(g,x,y-14,60,'255,150,60',.6+.1*Math.sin(t*8));el(g,'#e85a1c',x,y-8,10,4);
 [[70,'mammut'],[100,'rino'],[130,'leone']].forEach((p,i)=>{const px=x+p[0],py=y+4;g.save();el(g,'rgba(0,0,0,.2)',px,py,14,3);quad(g,px,py,.5,0,1,p[1],0,1,i%2?'#5a5654':'#2e2a2a');g.restore()});
 g.save();g.translate(x+168,y+4);g.scale(2,2);poly(g,'#8a8480',[[-4,0],[4,0],[3,-14],[-3,-14]]);el(g,'#8a8480',0,-8,6,4);dot(g,'#8a8480',0,-18,3);g.restore();for(let q=0;q<6;q++)poly(g,'#6a6460',[[x+190+q*6,y+6],[x+193+q*6,y+1],[x+196+q*6,y+6]]);
 sap(g,x-82,y+8,t,{f:1,s:.92,skin:SKN_S[3],hair:'#14100c',top:'#8a6a46',acc:(g2,b)=>{for(let q=0;q<3;q++)dot(g2,'rgba(255,200,120,.7)',26+q*7,-34-q*8-Math.abs(Math.sin(t*4+q))*6,2)}})});
reg('pvcucito',(g,x,y,t,a)=>{/* donna che cuce con un ago d'osso, mantelli e stivali di pelliccia, ciotola di perline */seduto(g,x,y+4,t,{f:1,s:1.08,skin:SKN_S[4],hair:'#d8d4cc',top:'#9a7a56',acc:(g2,t2,b)=>{ln(g2,'#e8e2d0',1.4,[12,-28,22,-22]);ln(g2,'#c8b890',.8,[22,-22,30,-12]);poly(g2,'#a88a64',[[14,-20],[36,-26],[38,-10],[16,-6]])}});ciotola(g,x+60,y+4,'#f4eee0',1.3);for(let q=0;q<7;q++)dot(g,'#f4eee0',x+54+q*2,y-5-q%2,1.2);
 ln(g,'#6a4a30',2.6,[x-92,y+2,x-92,y-88]);ln(g,'#6a4a30',2.6,[x-92,y-86,x-124,y-86]);poly(g,'#9a7852',[[x-120,y-86],[x-94,y-86],[x-98,y-38],[x-116,y-34]]);poly(g,'#7a5a3c',[[x-90,y-80],[x-70,y-80],[x-74,y-36],[x-88,y-34]]);for(let q=0;q<3;q++)dot(g,'#c8503a',x-104,y-72+q*14,1.4);poly(g,'#6a4a30',[[x+108,y+2],[x+108,y-18],[x+122,y-18],[x+130,y-4],[x+138,y+2]]);poly(g,'#6a4a30',[[x+144,y+2],[x+144,y-18],[x+158,y-18],[x+166,y-4],[x+174,y+2]])});
reg('pvfuoco8',(g,x,y,t,a)=>{/* il cerchio attorno al fuoco: anziana che parla con le mani aperte, bambini a bocca aperta, un flauto d'osso */fuocoP(g,x,y+8,t,1.4);glow(g,x,y-20,230,'255,150,70',.34);
 seduto(g,x-86,y+12,t,{f:1,s:1.1,skin:SKN_S[4],hair:'#f0ece4',top:'#9a7a56',acc:(g2,t2,b)=>{ln(g2,'#c89468',3.2,[10,-34,22,-34+Math.sin(t2*3)*5]);ln(g2,'#c89468',3.2,[8,-30,20,-24+Math.sin(t2*3+1)*5])}});
 seduto(g,x+92,y+14,t,{f:-1,s:.84,skin:SKN_S[1],hair:'#14100c',top:'#8a6a46'});seduto(g,x+120,y+8,t,{f:-1,s:.72,skin:SKN_S[2],hair:'#14100c',top:'#8a6a46'});seduto(g,x-120,y+8,t,{f:1,s:.74,skin:SKN_S[0],hair:'#14100c',top:'#8a6a46'});
 seduto(g,x+60,y+26,t,{f:-1,s:.9,skin:SKN_S[3],hair:'#14100c',top:'#8a6a46',acc:(g2,t2,b)=>{ln(g2,'#f0e8d6',2.4,[-6,-50+b,-26,-44+b])}});for(let q=0;q<3;q++)dot(g,'rgba(255,230,160,.7)',x+30-q*8,y-10-Math.abs(Math.sin(t*3+q))*10,2)});
reg('pvvarco',(g,x,y,t,a)=>{/* ingresso di una grotta in una collina: parete di mani rosse e animali dipinti; dal fondo un bagliore dorato */g.fillStyle='#9a6a4a';g.beginPath();g.moveTo(x-190,y+4);g.quadraticCurveTo(x-170,y-200,x,y-206);g.quadraticCurveTo(x+170,y-200,x+190,y+4);g.closePath();g.fill();
 g.fillStyle='#a87a56';g.beginPath();g.moveTo(x-190,y+4);g.quadraticCurveTo(x-170,y-200,x,y-206);g.quadraticCurveTo(x-80,y-160,x-90,y+4);g.closePath();g.fill();for(let q=0;q<6;q++)poly(g,'#6a8a44',[[x-150+q*60,y-176+(q%2)*12],[x-144+q*60,y-196+(q%2)*12],[x-136+q*60,y-176+(q%2)*12]]);
 const gr=g.createRadialGradient(x,y-80,10,x,y-80,120);gr.addColorStop(0,'rgba(255,248,210,1)');gr.addColorStop(.5,'rgba(255,214,120,.95)');gr.addColorStop(1,'rgba(180,110,50,.9)');g.fillStyle=gr;g.beginPath();g.moveTo(x-110,y+4);g.quadraticCurveTo(x-110,y-150,x,y-154);g.quadraticCurveTo(x+110,y-150,x+110,y+4);g.closePath();g.fill();
 glow(g,x,y-80,240,'255,226,150',.55+.1*Math.sin(t*2));for(let r=0;r<3;r++)for(let q=0;q<5;q++)manoNeg(g,x-82+q*41+(r%2)*10,y-128+r*36,.62,'rgba(176,52,34,.95)','rgba(255,226,160,.95)');dip(g,'bisonte',x-70,y-34,.8,1,'#7a2a18',t);dip(g,'cavallo',x+70,y-34,.7,-1,'#5a1e12',t);
 for(let q=0;q<9;q++)el(g,'rgba(255,240,200,'+(.12+.1*Math.sin(t*2+q))+')',x-100+q*25,y+2,16,3)});

/* ---- personaggi ---- */
const NP=(id,x,o,acc)=>({id,name:NAME[id],x,draw:(g,px,y,t,f)=>{A.setDK(0);person(g,px,y,t,Object.assign({f,s:1},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:GREET[id]}}});
const barbaP=(g,b,c,n)=>{for(let q=0;q<n;q++)dot(g,c,-3+q*2.4,-92+b+Math.abs(q-n/2+.5)*.9+1,3.2);for(let q=0;q<n-2;q++)dot(g,c,-1+q*2.4,-88+b+(q%2),2.6)};
const npcs=[
 /* Selce: cacciatore e scheggiatore neanderthal, barba arruffata, mantello di pelli, lancia di legno con la punta di selce fissata con la pece, scheggia in mano */
 NP('pv_selce',1290,{nea:1,s:1.04,skin:SKN_N[0],hair:'#3a2a1c',top:'#7a5a3c',bot:'#6a4a30',cloak:'#6a4a30'},(g,b,t)=>{barbaP(g,b,'#3a2a1c',6);ln(g,'#6a4a30',3.4,[-14,-86+b,14,-86+b]);lancia(g,22,-2,118,'#7a7a84');el(g,'#1a1410',23,-117,3,1.6);poly(g,'#d0cfc8',[[14,-46+b],[22,-54+b],[24,-46+b],[18,-42+b]]);for(let q=0;q<3;q++)ln(g,'#e8dcc0',1.4,[-12+q*3,-90+b,-10+q*3,-80+b])}),
 /* Cenere: custode del fuoco neanderthal, capelli lunghi raccolti con una striscia di cuoio, mantello di pelo, collana di artigli neri, rametto e scheggia, mani annerite */
 NP('pv_cenere',3980,{nea:1,s:.98,skin:SKN_N[1],hair:'#4a3626',top:'#8a6a48',bot:'#6a4a30',long:1,cloak:'#7a5a3c'},(g,b,t)=>{poly(g,'#4a3626',[[-12,-108+b],[-14,-82+b],[-8,-76+b],[-4,-100+b]]);ln(g,'#c8a070',2.4,[-12,-96+b,-6,-104+b]);for(let q=0;q<8;q++){const aa=q/7*Math.PI;poly(g,'#14100c',[[-6+q*2.4,-82+b+Math.sin(aa)*5],[-4.6+q*2.4,-82+b+Math.sin(aa)*5],[-5+q*2.4,-75+b+Math.sin(aa)*5]])}ln(g,'#6a4a2a',1.8,[14,-62+b,26,-72+b]);poly(g,'#d0cfc8',[[24,-70+b],[30,-76+b],[31,-70+b]]);el(g,'#2a2420',16,-58+b,4,3);el(g,'#2a2420',-14,-58+b,4,3)}),
 /* Marea: raccoglitrice neanderthal, capelli lunghi sciolti e salati, mantello di pelle di cervo, collana di piccole conchiglie con un tocco di rosso, mani d'ocra, sacca di molluschi, coltello alla cintura */
 NP('pv_marea',6650,{nea:1,s:.98,skin:SKN_N[2],hair:'#5a4630',top:'#9a7a54',bot:'#7a5a3c',cloak:'#9a7a54'},(g,b,t)=>{poly(g,'#5a4630',[[-12,-108+b],[-16,-80+b],[-10,-70+b],[-5,-98+b]]);for(let q=0;q<7;q++)dot(g,q==3?'#c8503a':'#f2e8d8',-6+q*2.2,-84+b+Math.abs(q-3)*1.4,1.5);el(g,'#6a4a30',-16,-52+b,9,11);for(let q=0;q<3;q++)dot(g,'#2a3a4a',-18+q*4,-58+b,2.2);rect(g,'#6a4a30',-12,-52+b,24,3);ln(g,'#8a8a92',2.4,[10,-50+b,14,-40+b]);el(g,'#b8402a',15,-58+b,4,3);el(g,'#b8402a',-14,-58+b,4,3)}),
 /* Ocra: macinatrice di colori sapiens, alta e snella, pelle scura, capelli corti e ricci, fronte alta, mento marcato, collana di conchiglie a spirale, mani e avambracci rossi di ocra, pietra e osso come spatola */
 NP('pv_ocra',9250,{skin:SKN_S[0],hair:'#14100c',top:'#a8805a',bot:'#8a6444',long:1,s:1.02,cloak:null},(g,b,t)=>{for(let q=0;q<9;q++)dot(g,'#14100c',-8+q*2.2,-107+b+Math.abs(q-4)*.6,3.2);ln(g,'#b8402a',6.4,[12,-84+b,12+Math.sin(-.15)*30,-84+b+Math.cos(-.15)*30]);ln(g,'#b8402a',6.4,[-12,-84+b,-12+Math.sin(.15)*30,-84+b+Math.cos(.15)*30]);for(let q=0;q<7;q++)dot(g,'#f2e8d8',-6+q*2.2,-84+b+Math.abs(q-3)*1.3,1.5);el(g,'#b8a890',20,-50+b,9,4);el(g,'#a82e1e',19,-53+b,6,2);ln(g,'#e8e2d0',2.4,[-18,-50+b,-8,-58+b]);poly(g,'#7a4a2a',[[-13,-48+b],[13,-48+b],[17,-20],[-17,-20]])}),
 /* Passo: viandante sapiens, alto e asciutto, barba corta, mantello di pelle di gazzella, sacca di cuoio a tracolla, lancia con la punta di pietra, piedi avvolti in pelli */
 NP('pv_passo',12020,{skin:SKN_S[3],hair:'#14100c',top:'#b08a5c',bot:'#8a6a46',s:1.06,cloak:'#c8a070'},(g,b,t)=>{barbaP(g,b,'#14100c',5);lancia(g,24,-2,120,'#7a7a84');ln(g,'#6a4a30',2.4,[-12,-90+b,10,-52+b]);el(g,'#6a4a30',10,-46+b,9,10);for(let q=0;q<5;q++)dot(g,q%2?'#f2e8d8':'#c8503a',-6+q*2.4,-84+b+Math.abs(q-2)*1.3,1.5);el(g,'#7a5a3c',-4,-2,9,5);el(g,'#7a5a3c',8,-2,9,5)}),
 /* Avorio: intagliatore sapiens, asciutto, barba corta, capelli legati, collana di perline d'avorio, bulino di selce e una statuetta in lavorazione, polvere d'avorio sulle ginocchia */
 NP('pv_avorio',14780,{skin:SKN_S[4],hair:'#2a1c10',top:'#a88a64',bot:'#7a5a3c',s:1.0,cloak:'#8a6a46'},(g,b,t)=>{barbaP(g,b,'#2a1c10',4);dot(g,'#2a1c10',-11,-104+b,3.6);for(let q=0;q<7;q++)dot(g,'#f4ecd4',-6+q*2.2,-84+b+Math.abs(q-3)*1.3,1.5);ln(g,'#8a8a92',2.4,[16,-52+b,24,-58+b]);poly(g,'#e8d8a8',[[18,-46+b],[24,-46+b],[23,-62+b],[19,-62+b]]);el(g,'#e8d8a8',21,-64+b,3,3);zanna(g,-26,-6,.8,1);for(let q=0;q<8;q++)dot(g,'#f4ecd4',-14+q*3,-22+hr(q)*8,1.1)}),
 /* Carbone: pittore di grotte sapiens, mani e viso macchiati di nero e di rosso, capelli corti legati con una cordicella, lampada di pietra con grasso e stoppino, osso cavo, ciotole di conchiglia, carbone dietro l'orecchio */
 NP('pv_carbone',17500,{skin:SKN_S[2],hair:'#14100c',top:'#8a6a46',bot:'#6a4a30',s:1.03,cloak:'#7a5a3c'},(g,b,t)=>{rect(g,'rgba(30,24,22,.8)',3,-102+b,8,2.6);rect(g,'rgba(176,52,34,.8)',-2,-96+b,9,2.4);ln(g,'#c8a070',1.6,[-9,-104+b,-6,-108+b]);ln(g,'#14100c',2,[-8,-106+b,-5,-100+b]);ln(g,'#6a4a30',2.4,[16,-72+b,24,-82+b]);lampada(g,24,-84+b,t,1.3);ln(g,'#e8e2d0',2.6,[-16,-52+b,-2,-62+b]);ciotola(g,-18,-48+b,'#b03422',.9);ciotola(g,18,-46+b,'#2a2420',.9);el(g,'#2a2420',15,-56+b,4,3);el(g,'#b03422',-14,-56+b,4,3)}),
 /* Brace: narratrice sapiens anziana, capelli bianchi in due trecce, mantello di pelo con perline d'avorio, collana di denti di volpe, ago d'osso nella manica, mani segnate dal freddo */
 NP('pv_brace',21120,{skin:SKN_S[4],hair:'#ece8e0',top:'#a08060',bot:'#8a6a4a',long:1,s:.98,cloak:'#8a6a46'},(g,b,t)=>{ln(g,'#ece8e0',3.4,[-9,-100+b,-14,-78+b]);ln(g,'#ece8e0',3.4,[11,-100+b,15,-80+b]);dot(g,'#c8503a',-14,-76+b,1.6);dot(g,'#c8503a',15,-78+b,1.6);for(let q=0;q<6;q++)poly(g,'#f4f0e6',[[-6+q*2.4,-84+b],[-4.6+q*2.4,-84+b],[-5.4+q*2.4,-77+b]]);for(let q=0;q<7;q++)dot(g,'#f4ecd4',-10+q*3.4,-64+b+Math.abs(q-3)*.8,1.3);ln(g,'#e8e2d0',1.2,[10,-80+b,16,-70+b]);ln(g,'#e8e2d0',1.2,[-12,-62+b,-20,-56+b]);poly(g,'rgba(255,170,80,.15)',[[-18,-50+b],[18,-50+b],[24,0],[-24,0]])})
];

/* ---- oggetti lungo il percorso: [nome, posizione nel mondo, parametro] ---- */
const props=[
 /* zona 1 · la steppa fredda dei Neanderthal */
 ['pvtarga',120,'LA STEPPA'],['pvbetulla',270,1.2],['pvcespo',360,2],['pvsasso',560,1.6],['pvbetulla',700,1],['pvfuocino',820,1],['pvselce',1030],['pvlab',1130],['pvlancia',1470],['pvcacciatori',1650],['pvmandria',1830],['pvcespo',1960,1.6],['pvpelle',2150,1],['pvossa',2330],['pvlancia',2470],
 /* zona 2 · il riparo sotto la roccia */
 ['pvtarga',2720,'IL RIPARO'],['pvpino',2880,1.2],['pvquercia',3000,1],['pvfocolare',3300],['pvgiaciglio',3560],['pvcura',3780],['pvgiaciglio',4120],['pvtomba',4300,0],['pvossa',4500],['pvcarne',4620],['pvartigli',4860],['pvpino',5200,1.4],
 /* zona 3 · la costa e le grotte dei segni */
 ['pvtarga',5420,'LA COSTA'],['pvscoglio',5560],['pvcozze',5680],['pvconchiglie',5900],['pvpenne',6040],['pvcollanaC',6340],['pvfoca',6480],['pvsasso',6800,1.4],['pvsegni',6960],['pvcespo',7140,1.6],['pvcerchio',7580],['pvconchiglie',7800],['pvpino',7900,1.2],
 /* zona 4 · Africa, la culla di Homo sapiens */
 ['pvtarga',8110,'AFRICA'],['pvacacia',8280,1],['pvjebel',8470],['pvomo',8920],['pvmacina',9120],['pvacacia',9360,1.2],['pvblombos',9560],['pvconchiglie',9820],['pvperline',10120],['pvacacia',10440,1],
 /* zona 5 · il Levante, la terra di passaggio */
 ['pvtarga',10810,'IL LEVANTE'],['pvginepro',10960,1.4],['pvfila',11100],['pvquercia',11420,1.1],['pvmisliya',11760],['pvginepro',12130,1.3],['pvtomba',12310,1],['pvquercia',12600,1],['pvvicini',12970],['pvginepro',13300,1.2],
 /* zona 6 · la valle del Danubio e il Giura Svevo */
 ['pvtarga',13610,'GIURA SVEVO'],['pvbetulla',13780,1.2],['pvcespo',13900,1.8],['pvflauto',14440],['pvzanne',14630],['pvsasso',14930,1.4],['pvuomoleone',15010],['pvbetulla',15240,1],['pvvenere',15500],['pvcespo',15680,1.6],['pvultimi',16010],
 /* zona 7 · le grotte dipinte */
 ['pvtarga',16420,'LA GOLA'],['pvpino',16540,1.3],['pvlampada',16720],['pvpino',17000,1.4],['pvchauvet',17200],['pvsasso',17380,1.2],['pvmani',17830],['pvlascaux',18290],['pvaltamira',18760],
 /* zona 8 · il campo dei cacciatori di mammut */
 ['pvtarga',19060,'IL CAMPO'],['pvcapanna',19420,1.1],['pvcespo',19700,2],['pvforno',19900],['pvcapanna',20250,.8],['pvtomba',20470,2],['pvcucito',20900],['pvcespo',21050,1.8],['pvfuoco8',21380],['pvcapanna',21640,.7],['pvvarco',21850]
];
const LX=[450,1000,1560,2100, 3250,3750,4250,4800, 5750,6350,6950,7550, 8450,8900,9550,10150, 11150,11750,12300,12960, 13900,14450,15000,15500,16000, 16700,17200,17800,18300,18750, 19400,19950,20450,20900,21350,21850];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'preistoria',name:'Preistoria · Dal fuoco alle grotte dipinte',width:W1,sky:['#8c92bc','#f0b4bc','#ffe2cc'],gt:372,gr:['#b8ac5c','#7e6e3c'],chord:[196,246.9,293.7,392],amb:'#ffe8c0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerLife)}],
props:props,npcs:npcs});
PR._pv={quad,person,nea,sap,seduto,fiamma,fuocoP,manoNeg,lampada,pino,betulla,quercia,acacia,aquila,volare,groundDraw,zc,mixs};
})();


/* --- Battute: 12 per personaggio (da preistoria.txt) --- */
(function(){
const TOPX_PV={
pv_selce:[
["Chi sei e che fai?", "Selce, trent’anni più o meno, cacciatore e scheggiatore. Preparo punte, coltelli e raschiatoi per il mio gruppo, una quindicina di persone fra parenti e bambini. Chi sa scegliere la pietra, qui, non resta mai solo."],
["Cosa vuol dire Neanderthal?", "È un nome che non è nostro: un giorno qualcuno ci chiamerà così, dalla valle di Neander, in Germania, dove nell’Ottocento furono trovate le nostre ossa. Viviamo in Europa e in Asia occidentale da molto prima di voi: si pensa da circa 400.000 anni fa fino a circa 40.000 anni fa. Siamo una specie umana cugina della tua, non una tua antenata."],
["Perché sei così robusto?", "Per il freddo e per la fatica. Un corpo largo, con il torace ampio e le braccia e le gambe corte, conserva meglio il calore, e per cacciare da vicino serve forza. Si pensa che anche il naso grande serva a scaldare l’aria gelata. Non sarò il più bello della valle, ma l’inverno non mi fa paura."],
["Come si fa una punta di selce?", "Prima preparo il nucleo, il blocco di pietra, con tanti colpi piccoli. Poi, con un colpo solo, stacco una scheggia già della forma giusta: punta, lama o raschiatoio. I tuoi studiosi chiamano questo metodo \"Levallois\", da un sobborgo di Parigi: a me basta che il colpo vada bene."],
["Come attacchi la punta alla lancia?", "Con la pece di betulla. Si scalda la corteccia con cura, senza farla bruciare, e ne esce una colla nera e appiccicosa che tiene la punta ferma sul legno. In Italia, su strumenti di circa 200.000 anni fa, ne sono rimaste le tracce: gli studiosi dicono che è una delle cose più raffinate che sappiamo fare."],
["Cosa cacciate?", "Cavalli, bisonti, uri, cervi e renne, e in certe zone anche rinoceronti lanosi e mammut. Si va in gruppo, in silenzio, e si colpisce da vicino con la lancia: è pericoloso, e molti di noi hanno ossa rotte e guarite. Quello che si prende si usa tutto: carne, pelle, ossa e tendini."],
["Mangiate solo carne?", "Soprattutto in inverno, perché la steppa dà poco altro. Ma quando si può mangiamo anche semi, frutti, radici e funghi, e sulla costa i molluschi. In Spagna, dicono i vostri studiosi, alcuni gruppi mangiavano soprattutto pinoli, muschio e funghi: lo racconta il tartaro dei loro denti."],
["Cosa indossate?", "Pelli di renna, di cavallo e di lupo, lavorate fino a renderle morbide. Si raschiano con la pietra e si lisciano con attrezzi d’osso: alcuni, vecchi di circa 50.000 anni e trovati nel sud-ovest della Francia, somigliano a quelli che i conciatori usano ancora oggi. Un attrezzo nostro che dura: che bello."],
["Parlate?", "Sì, ci capiamo, con suoni, gesti e sguardi. Come fosse la nostra lingua nessuno lo sa, e anche gli studiosi ne discutono. So solo che quando indico una lancia e guardo mio fratello, lui capisce."],
["Dove vivete?", "Dove ci sono riparo, acqua e selvaggina: sotto sporgenze di roccia, in grotte, o all’aperto con tende di pelli. Non siamo \"uomini delle caverne\", come dite voi: le grotte sono solo i posti dove le nostre cose si sono conservate meglio."],
["Dove vado dopo?", "Là dove sale quel filo di fumo, sotto la parete di pietra chiara: il riparo di Cenere. È lei che custodisce il fuoco e sa molte cose che io non so, comprese le erbe. Dille che ti manda Selce, e porta rispetto al fuoco."],
["Posso salutarti e proseguire la mia passeggiata?", "Vai, Pierpaolo. Se per strada trovi una pietra che suona bene quando la colpisci, tienila: è buona. Io alzo la mano aperta, e quel gesto lo capisci anche tu. Buona strada!"]
],
pv_cenere:[
["Chi sei e che fai?", "Cenere, custode del fuoco e dei bambini del gruppo, e quella che chiamano quando qualcuno sta male. Qui ognuno fa un po’ di tutto, ma il fuoco è il mio posto preferito. Un gruppo di una dozzina di persone come il nostro ha bisogno di qualcuno che resti, mentre gli altri vanno a caccia."],
["Come si accende il fuoco?", "Si può prendere da un incendio naturale e tenerlo vivo, oppure farne uno nuovo: si colpisce la selce contro un pezzo di pirite, una pietra dorata e pesante, e le scintille cadono sull’esca. Su strumenti francesi di circa 50.000 anni fa i vostri studiosi vedono al microscopio i segni di quei colpi. Ma non tutti sono d’accordo: nessuno è tornato indietro a farcelo vedere."],
["A cosa serve il fuoco?", "A tutto: scalda, tiene lontani i leoni e le iene delle caverne, cuoce la carne e le radici, indurisce la punta delle lance e scalda la betulla per la colla. E la sera è il nostro posto d’incontro: attorno alle fiamme si sta insieme."],
["Come cucinate?", "Si arrostisce sulla brace, si cuoce nella cenere calda, si spezzano le ossa per il midollo. Anche semi e radici si possono cuocere: gli studiosi ne hanno trovato i segni in alcune grotte. Una cosa cotta è più facile da mangiare e dura di più."],
["Cosa fate quando qualcuno si ammala?", "Si resta accanto a chi sta male, si dà da bere e da mangiare, e si prova con le erbe. In una grotta in Spagna, a El Sidrón, il tartaro dei denti di un giovane con un ascesso conserva tracce di corteccia di pioppo e di una muffa: forse cercava sollievo. Non so se l’abbia trovato."],
["Ti prendi cura anche dei feriti?", "Certo. A Shanidar, in Iraq, un uomo di circa quarant’anni aveva un braccio rattrappito, vecchie ferite alla testa, forse un occhio cieco e probabilmente era sordo, ma visse a lungo: per gli studiosi qualcuno si prese cura di lui, perché da solo non ce l’avrebbe fatta. È per questo che ci stiamo vicini."],
["Seppellite i morti?", "A volte sì. In alcune grotte, come La Chapelle-aux-Saints in Francia, i nostri sono stati trovati in fosse poco profonde. Gli studiosi discutono quanto fossero sepolture vere e cosa significassero; la storia dei fiori su una tomba a Shanidar, per esempio, è incerta. Io so solo che non si lascia solo chi se ne va."],
["Cos’è la tua collana?", "Artigli di aquila di mare, come quelli di Krapina, in Croazia: lì, circa 130.000 anni fa, ne hanno trovati otto con tagli, intacchi e punte levigate. Gli studiosi pensano che fossero un gioiello. Un’aquila viva non si prende facilmente: c’è da essere fieri."],
["Quanto si vive?", "Poco, per voi: pochi di noi arrivano a quarant’anni. Il freddo, la caccia e le malattie pesano, e i piccoli sono i più fragili. Per questo ci si sta vicini, e si ricorda chi non c’è più."],
["Come dormite?", "Sulle pelli, vicino al focolare, con la roccia alle spalle: il calore resta nelle pietre. In alcune grotte ci sono focolari uno sopra l’altro, strato su strato: vuol dire che i nostri tornavano qui per generazioni."],
["Dove vado dopo?", "Verso il mare, a sud: segui il torrente fino alla costa, dove l’aria sa di sale. Cerca Marea, quella che raccoglie le conchiglie: ha più segni e colori di tutti noi."],
["Posso salutarti e proseguire la mia passeggiata?", "Vai, Pierpaolo, e che il fuoco non ti manchi mai. Se hai freddo, ricordati di me: una brace basta a riaccendere un giorno. Buon viaggio."]
],
pv_marea:[
["Chi sei e che fai?", "Marea, ventotto anni più o meno, raccoglitrice. Raccolgo molluschi, pesco nelle pozze e cerco conchiglie belle per i colori. Il mio gruppo mangia bene qui: il mare, d’inverno, non è mai duro come la steppa."],
["Dove siamo?", "Sulla costa del sud, vicino a una rupe enorme che i tuoi chiameranno Gibilterra. Nelle sue grotte i nostri hanno vissuto a lungo: è uno dei posti dove, forse, i Neanderthal hanno resistito più che altrove, fino a circa 40.000 anni fa."],
["Cosa mangiate dal mare?", "Cozze, patelle, pesci, e a volte una foca, che si macella con cura sugli scogli. In queste grotte gli studiosi hanno trovato anche ossa di uccelli e gusci arrostiti: si cuoce anche il mare."],
["Perché raccogli le penne?", "Le penne scure dei rapaci e dei corvi sono belle, e secondo gli studiosi i Neanderthal le usavano come ornamento: in alcune grotte del sud ci sono ossa di rapaci con i segni di chi le spennava. Io le trovo belle, e questo mi basta."],
["Cosa sono queste conchiglie colorate?", "Conchiglie con un buco e con ocra rossa o gialla. Nella grotta di Los Aviones, in Spagna, ne hanno trovate di vecchie di 115.000-120.000 anni: per gli studiosi sono ornamenti nostri, più antichi di gioielli simili attribuiti a Homo sapiens. Il mare regala, e noi sapevamo che era bello."],
["Cos’è quell’incisione nella grotta?", "Nella grotta di Gorham ci sono linee incrociate incise sulla pietra, fatte con cura: i suoi scopritori dicono che hanno più di 39.000 anni e che le facemmo noi. Cosa significhino non lo so: una mappa, un gioco, un segno per ricordare. Alcuni studiosi non sono d’accordo, e questo è bello: vuol dire che ci pensano ancora."],
["E le mani sulla pietra?", "In alcune grotte spagnole, come Maltravieso, ci sono mani a negativo e segni rossi, come una scala di barre. Alcuni studiosi li datano ad almeno 64.000 anni fa, quando c’eravamo solo noi in Europa; altri discutono sulla data e su chi li fece. Si appoggia la mano, si soffia il colore e resta il contorno: è facile da fare e difficile da dimenticare."],
["Cos’è il cerchio di pietre?", "A Bruniquel, in Francia, a più di trecento metri dall’ingresso di una grotta, i nostri spezzarono circa quattrocento pezzi di stalagmite e li disposero in cerchi, con tracce di fuoco: circa 176.500 anni fa. A cosa servissero nessuno lo sa. Mi piace pensare che fosse un luogo per stare insieme, ma è solo un pensiero."],
["Perché fate cose che non servono a mangiare?", "Forse non è vero che non servono: un colore, una collana, un segno aiutano a riconoscersi e a ricordare. I vostri studiosi se lo chiedono ancora e non sono d’accordo fra loro. Io so che quando indosso questa collana mi sento di casa."],
["Conosci i Sapiens?", "Ne ho sentito parlare: gente nuova che arriva da est e da sud, più alta e più snella, con altri attrezzi e altri gioielli. A volte ci si incontra, ci si guarda, ci si scambia qualcosa. Dicono che qualche volta nascano anche dei bambini: se è vero, un po’ di noi continuerà a vivere in loro."],
["Dove vado dopo?", "Attraversa il mare verso sud, oltre il deserto, fino all’Africa, dove è nata la tua specie. Lì, davanti a una grotta sull’oceano, c’è Ocra, che macina i colori meglio di me. Mostrale questa conchiglia."],
["Posso salutarti e proseguire la mia passeggiata?", "Vai, Pierpaolo, e che il mare ti sia basso e le conchiglie tante. Se ne trovi una con un buco, non è un caso: tienila. Buona strada!"]
],
pv_ocra:[
["Chi sei e che fai?", "Ocra, ventiquattro anni, macinatrice di colori e raccoglitrice di molluschi. Macino l’ocra e preparo i colori, mentre gli altri raccolgono il cibo. Il mio gruppo vive in questa grotta sopra l’oceano."],
["Da dove viene Homo sapiens?", "Dall’Africa, e non da un solo posto: a Jebel Irhoud, in Marocco, sono stati trovati resti di circa 315.000 anni fa, e a Omo, in Etiopia, un teschio di almeno 233.000 anni. Gli studiosi pensano che la nostra specie sia nata un po’ dappertutto nel continente, con gruppi che si incontravano e si scambiavano figli e idee."],
["Come siamo fatti?", "Con la fronte alta, il viso piccolo, il mento e la testa tonda. I primi di noi, a Jebel Irhoud, avevano già un volto simile ma la scatola cranica ancora allungata: la forma della testa è cambiata lentamente, in migliaia di anni."],
["Cosa mangiate?", "Molluschi, soprattutto: patelle, cozze, abalone, e pesce, e carne di antilope quando capita. Sulla costa del Sudafrica, a Pinnacle Point, gli studiosi hanno trovato resti di pasti di mare di circa 164.000 anni fa: i molluschi, forse, ci hanno tenuti in vita nei tempi più duri."],
["Cos’è l’ocra?", "Una roccia ricca di ferro che, macinata, diventa polvere rossa o gialla. Gli studiosi pensano a molti usi: decorare il corpo, proteggere la pelle, conciare, fare colla. Io la uso per il colore, perché è bella."],
["Cos’è questo laboratorio?", "Due conchiglie di abalone dove si macina l’ocra con carbone, ossa bruciate e un liquido, e poi si mescola con un osso. Le tracce di un laboratorio così, a Blombos, hanno circa 100.000 anni: è il più antico laboratorio di colori conosciuto. A cosa serviva il composto? Dipingere, forse, o proteggere la pelle dal sole."],
["Perché le perline?", "Sono piccole conchiglie a spirale, con un buco fatto a mano e colorate di rosso: ne infilo decine su un filo. A Blombos ne hanno trovate quarantuno, di circa 75.000 anni fa. Servono a dire chi sei e a chi appartieni: una collana si capisce anche senza parole."],
["E questi segni?", "Linee incrociate incise su un blocco d’ocra, di circa 75.000 anni fa, e un segno rosso a griglia su un pezzo di roccia, di circa 73.000: gli studiosi lo considerano uno dei più antichi disegni conosciuti. Cosa voglia dire, nessuno lo sa. Per me è un modo di lasciare qualcosa che resta."],
["Sei diversa dai Neanderthal?", "Di corpo sì: noi più alti e snelli, loro più tozzi e robusti. Ma di testa e di mani siamo cugini: colori, collane, fuoco, cura dei feriti, li hanno anche loro. Non siamo meglio: siamo diversi. Un giorno i nostri gruppi si incontreranno, e molti dei tuoi porteranno con sé un po’ di loro."],
["Perché alcuni di voi partono?", "Per cercare cibo, per seguire gli animali, per il clima che cambia: quando le piogge tornano, il deserto si apre e il cammino diventa possibile. Alcuni dei nostri si spinsero verso nord già moltissimo tempo fa; altri partirono in tanti, circa 60.000 anni fa."],
["Dove vado dopo?", "A nord, attraverso il deserto, fino al Levante: la terra fra l’Africa e l’Asia. Lì c’è Passo, che cammina da una vita e conosce tutti i sentieri; chiedigli chi ha incontrato sulla strada."],
["Posso salutarti e proseguire la mia passeggiata?", "Vai, Pierpaolo, e che il sole ti scaldi senza bruciarti. Se trovi un colore che ti piace, portalo con te: serve a ricordare. Buona strada!"]
],
pv_passo:[
["Chi sei e che fai?", "Passo, trent’anni, guida del mio gruppo, una trentina di persone. Conosco i sentieri, i pozzi d’acqua e le stagioni degli animali: il mio compito è non perdere nessuno."],
["Dove siamo?", "Sul monte Carmelo, in quella che un giorno sarà Israele: una valle di boschi radi, prati e grotte, a metà strada fra l’Africa e il resto del mondo. Per migliaia di anni questa fu una strada: quando il clima è più umido, il deserto si fa verde e la gente passa."],
["Chi è venuto qui per primo?", "I nostri antenati, molto tempo fa: nella grotta di Misliya, qui vicino, gli studiosi hanno trovato una mascella con i denti di Homo sapiens vecchia di 177.000-194.000 anni, fra i più antichi resti della nostra specie fuori dall’Africa. Non fu l’ultimo viaggio, ma fu un grande inizio."],
["Chi è sepolto a Qafzeh?", "Un ragazzo di dodici o tredici anni, circa 100.000 anni fa: aveva avuto una ferita alla testa, e fu deposto in una fossa nella roccia con due palchi di cervo sul petto. Intorno c’era ocra rossa. Non sappiamo perché lo abbiano fatto così, ma sappiamo che era voluto e che lo ricordavano."],
["Cosa sono queste conchiglie?", "Conchiglie forate e dipinte di rosso, giallo e nero: a Qafzeh ne hanno trovate altre simili. Le porto sempre con me, e quando le guardo ricordo da dove vengo."],
["Chi vive qui oltre a voi?", "Anche i Neanderthal: nelle grotte di Kebara e di Tabun, vicino alle nostre. Gli studiosi pensano che i due gruppi si siano alternati nelle stesse grotte secondo il clima, e che poi si siano incontrati. A Kebara un Neanderthal fu sepolto circa 60.000 anni fa. Non so che parola useresti tu: per me sono vicini."],
["I due gruppi si sono mescolati?", "Sì, e il DNA lo racconta: fra circa 50.000 e 43.000 anni fa, e in particolare intorno a 47.000, per qualche migliaio di anni, noi e loro ebbero figli insieme. Oggi chi non è africano porta in media circa l’uno-due per cento di DNA neanderthaliano. Quindi, Pierpaolo, hai un po’ di Neanderthal anche tu."],
["Dove vanno gli altri gruppi?", "Verso nord, verso est, verso sud: alcuni arrivano in Europa, altri in Asia, e altri ancora, secondo alcuni studiosi circa 65.000 anni fa, perfino in Australia. La grande uscita dall’Africa, quella che porta più gente, è circa 60.000 anni fa. Cammina chi ha fame di cose nuove, e chi ha fame e basta."],
["Come attraversate i deserti?", "Seguendo le piogge: quando arrivano i periodi più umidi compaiono laghi e prati, e il cammino si apre. Si porta l’acqua nelle sacche di pelle, si parte presto e si riposa nelle ore calde. E si va in tanti, perché in tanti si resiste."],
["Cosa portate con voi?", "Poco: punte di pietra, pelli, un po’ d’ocra, qualche conchiglia, il fuoco da rifare ogni volta. E le storie: le cose più leggere e più preziose."],
["Dove vado dopo?", "A nord-ovest, dove le grandi valli portano verso l’Europa: segui il Danubio e arriverai ai monti con le grotte del Giura. Cerca Avorio, che trasforma le zanne di mammut in figure: dicono che sappia far parlare anche un osso."],
["Posso salutarti e proseguire la mia passeggiata?", "Vai, Pierpaolo, e che la strada ti sia leggera. Se trovi una sorgente, segnala il posto a chi viene dopo di te: è il modo più antico di dire grazie. Buon cammino!"]
],
pv_avorio:[
["Chi sei e che fai?", "Avorio, ventotto anni, intagliatore. Dalle zanne di mammut ricavo perline, ciondoli e figure: il gruppo mi lascia fare, perché le cose belle tengono unita la gente."],
["Dove siamo?", "Nel Giura Svevo, in quella che un giorno sarà la Germania, fra il Danubio e le sue valli di calcare con tante grotte: Hohle Fels, Vogelherd, Geißenklösterle, Hohlenstein-Stadel. Un giorno diventeranno patrimonio dell’umanità, per l’arte dell’era glaciale."],
["Come si intaglia l’avorio?", "Si stacca un pezzo di zanna con selci affilate, poi si incide con il bulino di selce e si leviga. Serve pazienza: gli studiosi stimano centinaia di ore di lavoro per una figura grande come l’uomo-leone, e un errore non si può rifare."],
["Cos’è l’uomo-leone?", "Una statuetta di avorio alta circa trentuno centimetri, con il corpo di un uomo e la testa di un leone delle caverne. Viene da Hohlenstein-Stadel, ha circa 40.000 anni, ed è stata trovata in molti frammenti e rimessa insieme dagli studiosi. Chi fosse, nessuno lo sa: uno spirito, un sacerdote, o la paura e il coraggio insieme."],
["E la piccola Venere?", "Una figura di avorio alta sei centimetri, vecchia di circa 40.000 anni, trovata a Hohle Fels: ha seni e fianchi grandi e, al posto della testa, un anello, forse per portarla al collo. È fra le più antiche raffigurazioni umane conosciute. Chi l’ha fatta pensava forse alla vita, o alla famiglia: io non lo so."],
["Cos’è quel flauto?", "Un osso d’ala di avvoltoio con cinque fori. Si soffia da un’estremità e si cambia nota con le dita. A Hohle Fels e a Geißenklösterle ne hanno trovati, anche d’avorio di mammut, vecchi di 35.000-42.000 anni: sono i più antichi strumenti musicali che conosciamo."],
["Quali animali intagli?", "Cavalli, mammut, leoni, bisonti, uccelli acquatici: gli animali che vedo ogni giorno e che mi fanno paura o fame. Una figura piccola sta in una mano e si porta dappertutto."],
["Che fine fanno i Neanderthal?", "Per qualche migliaio di anni abbiamo vissuto nelle stesse regioni; poi, fra circa 41.000 e 39.000 anni fa, loro scompaiono dall’Europa. Non c’è un motivo solo: gruppi piccoli, clima che cambia, competizione, mescolanze. Nulla indica una grande guerra, per quanto ne sanno gli studiosi; e un po’ di loro vive ancora in noi."],
["Perché fate arte?", "Nessuno lo sa: per ricordare, per raccontare, per credere, per stare insieme, per bellezza. Forse tutte queste cose insieme. Io so solo che una cosa fatta per bellezza dura più di una fatta per fame."],
["Che tempo fa qui?", "Freddo, quasi sempre: è un periodo glaciale, con estati brevi e inverni lunghi. La steppa è piena di renne, cavalli e mammut, e ogni tanto arriva il vento di ghiaccio. Per questo ci vestiamo con le pelli e restiamo vicini al fuoco."],
["Dove vado dopo?", "A ovest, in Francia: lì ci sono grotte dipinte dove la roccia diventa una parete di animali. Cerca Carbone, il pittore: dipinge con carbone e ocra, e dice che i suoi cavalli corrono."],
["Posso salutarti e proseguire la mia passeggiata?", "Vai, Pierpaolo, e che le tue mani trovino sempre qualcosa da fare. Se trovi un osso bello, tienilo: dentro potrebbe esserci un flauto. Buona strada!"]
],
pv_carbone:[
["Chi sei e che fai?", "Carbone, pittore di grotte. In realtà siamo in tanti, in tempi diversi: chi dipinse a Chauvet 36.000 anni fa non conobbe chi dipinse a Lascaux 17.000 anni fa, ma il gesto è lo stesso. Qui il tempo si piega, e io sono tutti loro."],
["Perché dipingete in fondo alle grotte?", "Non lo sa nessuno. Gli studiosi pensano a riti, a racconti, a luoghi dove parlare con gli animali o con gli antenati, a luoghi dove la voce risuona. Io so soltanto che al buio, alla luce di una lampada, un cavallo dipinto sembra respirare."],
["Come si fanno i colori?", "Ocra rossa e gialla macinate, nero di carbone o di manganese, mescolati con acqua o con grasso. Si stende con le dita, con pennelli di pelo o con muschio, oppure si soffia da un osso cavo: così nascono i contorni sfumati e le mani a negativo."],
["Come ci vedete, là dentro?", "Con lampade di pietra piene di grasso animale con uno stoppino, e con torce. A Lascaux ci sono ancora i buchi nella roccia dove stavano le impalcature di legno per salire. La luce è piccola: si dipinge una figura alla volta."],
["Cos’è Chauvet?", "Una grotta in Francia, nell’Ardèche, vicino a un grande ponte naturale di roccia. Circa 36.000 anni fa vi furono dipinti leoni, rinoceronti, cavalli, orsi e mammut; la grotta fu chiusa da una frana e dimenticata, e tre speleologi la ritrovarono nel 1994. Dentro ci sono anche le impronte di un ragazzino con accanto il segno di una torcia: gli studiosi pensano che abbiano circa 26.000 anni."],
["Cos’è Lascaux?", "La grotta della Sala dei Tori: circa 17.000 anni fa vi furono dipinti uri lunghi anche cinque metri, cavalli, cervi e segni. Fu scoperta nel 1940 da quattro ragazzi che inseguivano un cane; poi fu chiusa ai visitatori per proteggerla, e oggi se ne visitano le copie."],
["E Altamira?", "In Spagna, un soffitto di bisonti dipinti di rosso, nero e marrone sulle gobbe della roccia, di circa 15.000 anni fa. Li scoprì nel 1879 una bambina, María, alzando gli occhi verso il soffitto: molti studiosi non credevano che fossero antichi, finché nel 1902 furono riconosciuti autentici. Aveva visto quello che gli adulti non guardavano."],
["Cosa sono queste mani?", "Mani a negativo: si appoggia la mano sulla roccia e si soffia il colore intorno. Se ne vedono in tutto il mondo: a Sulawesi, in Indonesia, ce ne sono di vecchie di almeno 40.000 anni; in Spagna, a El Castillo, un disco rosso ha almeno 40.800 anni, e non si sa se lo fece un Neanderthal o un Sapiens."],
["Si dipingeva solo in Europa?", "No: a Sulawesi una scena con un maiale e tre figure umane, di almeno 51.200 anni fa, è oggi la pittura narrativa più antica conosciuta. Alcuni studiosi discutono se racconti davvero una storia, ma la data è solida. La pittura non nasce solo in Europa, Pierpaolo: nasce con noi."],
["Dipingevano anche i bambini?", "Forse sì, o almeno guardavano: in alcune grotte sembrano esserci tracce di bambini, e a Chauvet un ragazzino percorse un lungo tratto con una torcia. Imparare da piccoli, guardando i grandi, è il modo più antico per diventare pittore."],
["Dove vado dopo?", "A est, dove la pianura si apre: la terra dei cacciatori di mammut, con case fatte di ossa. Cerca Brace, che racconta storie come io dipingo: ne conosce moltissime. Ma ascolta fino in fondo: sono lunghe."],
["Posso salutarti e proseguire la mia passeggiata?", "Vai, Pierpaolo, e che la luce ti porti fuori come ti ha portato dentro. Se vedi una mano rossa su una parete, non toccarla: è lì da tanto tempo. Buona strada!"]
],
pv_brace:[
["Chi sei e che fai?", "Brace, anziana del campo: cucio, curo i piccoli e racconto. Sono vecchia per i nostri tempi, e mi chiamano la memoria, perché ricordo i nomi dei morti e dei luoghi."],
["Come sono fatte le vostre case?", "Basi di crani di mammut e di ossa lunghe piantate nel terreno, zanne curve per il tetto, e sopra le pelli. Il fuoco sta al centro. A Mezhyrich, in Ucraina, ne hanno trovate quattro, di circa 18.000 anni fa: una fu abitata per più di quattro secoli. Non è male, per una casa di ossa."],
["Cacciate tutti quei mammut?", "Non tutti. Alcune ossa vengono da animali morti da tempo e raccolti, e certe case furono costruite con ossa più vecchie di chi ci abitava: gli studiosi lo scoprono datando le piccole ossa trovate accanto ai focolari. Si costruisce con quello che c’è: un mammut è una montagna di cose utili."],
["Cos’è questo forno di terra?", "A Dolní Věstonice, nella Repubblica Ceca, circa 29.000-25.000 anni fa, si modellò l’argilla in figure di animali e di donne e si cosse in forni di terra: sono fra le più antiche ceramiche conosciute. Molte figure si spezzarono nel fuoco. Alcuni studiosi pensano che fosse voluto."],
["Come vi vestite?", "Con pelli cucite con aghi d’osso e filo di tendine, e decorate con perline d’avorio e denti di volpe. Il più antico ago con la cruna, in Siberia, ha circa 50.000 anni; da noi gli aghi sono sempre più comuni. Un buon cappuccio vale quanto una buona lancia."],
["Cos’è Sungir?", "Una sepoltura in Russia, di circa 34.000 anni fa: due ragazzi, di circa dieci e dodici anni, furono deposti testa contro testa con più di diecimila perline d’avorio, denti di volpe polare, bracciali e lance d’avorio. Gli studiosi pensano che il gruppo li avesse curati in vita e li abbia onorati da morti. Ci si ricorda di chi si è amato, Pierpaolo, in tanti modi."],
["Come cacciate?", "In gruppo, con lance di legno, di osso o d’avorio, e con attrezzi che allungano il braccio, come il propulsore, che in Europa trovi soprattutto negli ultimi 20.000 anni. Si cacciano renne, cavalli, bisonti e, a volte, il mammut. Si caccia con rispetto: un animale grande è il pasto di tutti."],
["Che storie raccontate?", "Di animali, di antenati, del sole che torna, di chi parte e non torna. Come fossero davvero le nostre storie nessuno lo sa: le parole non lasciano ossa. Ma le pitture, le collane e le statuette dicono che raccontare, già allora, era importante come mangiare."],
["Come siamo arrivati fin qui?", "Con un lungo viaggio: la nostra specie nasce in Africa, almeno 300.000 anni fa; poi incontra i cugini, i Neanderthal e i Denisova, ci si mescola, ci si separa. Alcuni di noi sono andati a est e a nord, fin dove il ghiaccio comincia. Siamo la stessa lunga famiglia, Pierpaolo."],
["Cosa resterà di noi?", "Pietre, ossa, avorio, colori sulle pareti, mani rosse sulla roccia, e un poco di DNA nel sangue di chi verrà. Più di tutto resterà il bisogno di raccontare: se te lo senti addosso, è antico."],
["Dove vado dopo?", "Dove il sole tocca la collina: c’è una grotta con le mani di tutti noi dipinte sulla parete. Attraversala quando la luce è più forte. Oltre c’è un altro mondo e un altro tempo: non avere paura, la luce passa comunque."],
["Posso salutarti e proseguire la mia passeggiata?", "Vai, Pierpaolo, e che il fuoco ti scaldi sempre la strada. Se un giorno vedi una mano rossa su una roccia, appoggia la tua accanto: è il nostro modo di dire \"ero qui\". Buon viaggio!"]
]
};
Object.assign(TOPX,TOPX_PV);
})();
