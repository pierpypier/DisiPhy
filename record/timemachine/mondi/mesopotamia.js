/* ---------- MESOPOTAMIA · Dai campi di Sumer alla Porta di Ishtar (campi e canali di Sumer, Uruk, Nippur, Ur, la Babilonia di Hammurabi, il porto e le taverne, Ninive e la biblioteca, la Via Processionale e la Porta di Ishtar) ---------- */
/* Un'intera giornata da sinistra a destra, e un tempo che si piega: alba nei campi e nelle paludi di Sumer, mattina a Uruk con il Tempio Bianco, tarda mattina nella scuola degli scribi di Nippur,
   mezzogiorno sotto la ziggurat di Ur, primo pomeriggio nella Babilonia di Hammurabi, pomeriggio al porto e fra le taverne, tardo pomeriggio a Ninive nella biblioteca di Assurbanipal,
   tramonto e notte a Babilonia lungo la Via Processionale, fra Esagila, i giardini e le terrazze degli astronomi. In fondo c'è la Porta di Ishtar, azzurra, e il varco con la luce che passa.
   Testi, tappe e dialoghi vengono da mesopotamia.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico). Gli oggetti stanno in elementi.js (nomi che iniziano per "ms").
   Il tono per i temi dolorosi (tombe reali, guerre, la caduta di Ninive) è sobrio e rispettoso; leggende e tradizioni non provate sono presentate con "si dice" o "secondo la tradizione". */
(function(){
const GT=372,W1=22600;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const M=PR._ms,{SKN,MC,nf,lit,pers,man,gente,TUN,palma,canne,cesp,acqua,bue,pecora,asino,cane,airone,volo,cammello,mud,merli,zigg,casa,porta,leone,toro,drago,ln,gatto}=M;
const md=(i,n)=>((i%n)+n)%n;
const Z=[0,2700,5400,8000,10600,13200,15800,18400,W1+400];   /* inizio di ognuna delle 8 zone */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* ---- cielo: alba rosa e arancio, mattina limpida, mezzogiorno bianco, pomeriggio dorato, tardo pomeriggio arancio, tramonto arancio e viola, crepuscolo blu, notte stellata ---- */
const SKY=[[0,['#7a86c0','#f4a8a8','#ffd0a0']],[1400,['#4a9cf0','#b4d8f4','#f6ecd0']],[2700,['#3a8cec','#7cbcf4','#e2f0f8']],[8000,['#2a7ee0','#6ab4f0','#e8f0f0']],[10600,['#3a80d8','#a8cae8','#f4f2e6']],[13200,['#4a84d4','#b4c8e4','#f8e4b8']],[15800,['#5a84c8','#e8c898','#ffd890']],[17200,['#7a78b8','#f4a870','#ffc078']],[18400,['#6a5aa8','#f08a5a','#ffb060']],[19400,['#3a2a88','#8a4a98','#f08060']],[20400,['#0c0c38','#1c1c60','#3a2a70']],[W1+400,['#080830','#141450','#2a2268']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,8*s);el(g,c,x-18*s,y+2*s,22*s,6*s);el(g,c,x+20*s,y+2*s,24*s,6*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Mesopotamia, dall’alba alla notte. Il nome vuol dire \"terra tra i fiumi\": il Tigri e l’Eufrate. Parti dai campi d’orzo e dalle paludi del sud, dove l’acqua dei canali tiene in vita tutto; poi Uruk, con le sue mura e il Tempio Bianco, dove nacque la scrittura. Nella tarda mattina la scuola degli scribi di Nippur; a mezzogiorno la ziggurat di Ur, la casa della Luna. Nel primo pomeriggio la Babilonia di Hammurabi e le sue leggi; poi il porto, il mercato e le taverne, dove si beve birra con la cannuccia. Al tardo pomeriggio Ninive e la biblioteca del re Assurbanipal; al tramonto la Via Processionale di Babilonia, fra i leoni di mattoni, e a notte le stelle sopra la Porta di Ishtar. Il tempo qui si piega: re, sacerdotesse, scribi e contadini di ogni epoca ti vengono incontro.";
const LKTXT=[
"Qui la vita viene dall’acqua: i campi stanno fra il Tigri e l’Eufrate e senza canali non crescerebbe niente. Gli abitanti di Sumer scavano e ripuliscono i canali ogni anno, e il raccolto principale è l’orzo.",
"Lo shaduf: una leva con un secchio da un lato e un peso dall’altro, usata per sollevare l’acqua dal canale al campo. Una sua immagine è incisa su un sigillo accadico di circa quattro mila duecento anni fa.",
"Nel sud del paese, dove i due fiumi si perdono nell’acqua, la gente vive fra le paludi: costruisce case e barche con le canne e pesca fra i canneti. È un modo di vivere che attraversa i millenni.",
"Il villaggio si sveglia con il sole: il pane d’orzo cuoce nei forni di fango, i dattieri portano i cesti, i bambini corrono dietro alle pecore. Una parte del raccolto va al tempio, che lo conserva e lo distribuisce.",
"Le mura di Uruk, circa nove chilometri di mattoni di fango: la tradizione le attribuisce al re Gilgamesh, e un poema antico le celebra. Dentro vivevano decine di migliaia di persone: all’epoca nessuna altra città al mondo era così grande.",
"Il Tempio Bianco, dedicato al dio del cielo Anu: un edificio rivestito di gesso bianco, costruito in cima a una grande terrazza intorno al 3300 a.C. Si vedeva da lontano, in mezzo alla pianura, come un faro.",
"Il quartiere sacro di Eanna, la \"casa del cielo\", dedicato alla dea Inanna: i muri dei templi erano decorati con migliaia di coni di argilla rossi, bianchi e neri infilati nell’intonaco. Da qui viene anche il vaso di Warka, uno dei primi rilievi che raccontano una scena: persone che portano offerte alla dea.",
"A Uruk, intorno al 3300 a.C., nacquero le prime tavolette scritte: servivano a contare l’orzo, le pecore e le razioni del tempio. Dai conti sulla terra cotta è partita la scrittura.",
"L’edubba, la \"Casa delle tavolette\": la scuola degli scribi. I ragazzi imparavano a scrivere il sumerico e l’accadico, a contare e a conoscere molte materie. Le scuole di questo tipo più studiate sono a Nippur e in altre città, e ci hanno lasciato i compiti degli alunni.",
"Si scriveva con una canna tagliata a punta su una tavoletta di argilla ancora morbida: i segni a forma di cuneo hanno dato il nome alla scrittura cuneiforme. Poi la tavoletta si lasciava seccare al sole, o si cuoceva per farla durare.",
"Nippur era la città sacra di Enlil, il dio dei venti e capo degli dèi sumeri. I re di molte città andavano qui a ricevere la sua benedizione, e la sua scuola di scribi era la più celebre.",
"Le lettere e i contratti si scrivevano su tavolette e si chiudevano in una busta di argilla, sigillata con un sigillo a cilindro, una piccola pietra incisa che si faceva rotolare sull’argilla fresca lasciando un disegno.",
"La ziggurat di Ur, dedicata al dio Luna, Nanna: una grande torre a gradoni di mattoni cotti legati con il bitume, costruita dal re Ur-Nammu nel XXI secolo a.C. Il tempio del dio stava in cima. In seguito il re babilonese Nabonedo la restaurò.",
"Il Giparu, il complesso dove viveva la grande sacerdotessa del dio Luna. Una delle prime sacerdotesse note fu Enheduanna, figlia del re Sargon di Akkad. Nel 1927 l’archeologo Leonard Woolley trovò un disco di alabastro con il suo nome e la sua figura.",
"Nel cimitero reale di Ur, scavato fra il 1922 e il 1934, ci sono circa milleottocentocinquanta tombe, di cui sedici sono ritenute reali: contenevano gioielli, lire, vasi e oggetti d’oro e di lapislazzuli. In alcune, secondo gli studiosi, erano sepolti anche i servitori del defunto. La tomba più nota è quella della regina Puabi.",
"Ur era una città di commercianti e artigiani: le case avevano un cortile interno e una stanza per il culto della famiglia, e le botteghe stavano nelle vie vicine. Il porto sul canale portava barche cariche di orzo, lana e datteri.",
"La Babilonia di Hammurabi, agli inizi della sua grandezza: una città sul fiume Eufrate, con canali, mura di mattoni e templi. Hammurabi, sesto re della dinastia amorrea, la rese la capitale di quasi tutta la Mesopotamia.",
"La stele del Codice di Hammurabi: una pietra scura alta circa due metri e venticinque, con duecentottantadue leggi scritte in cuneiforme. In alto il re è raffigurato davanti al dio Sole, Shamash, dio della giustizia. I giudici si servivano di questo testo.",
"Dal palazzo il re scriveva ai suoi funzionari lettere su tavolette di argilla, occupandosi di tutto: canali da ripulire, tasse da raccogliere, liti fra vicini. Ogni anno del suo regno aveva un nome, ricordato per un fatto importante.",
"Marduk, il dio patrono di Babilonia, aveva il suo tempio nel centro della città: con il crescere della potenza della città, crebbe anche la sua importanza fra gli dèi di tutta la regione.",
"Al porto arrivano barche cariche di orzo, lana, datteri e pesce, e da lontano rame, legno di cedro e pietre preziose, che si dice vengano da terre come Dilmun, Magan e Meluhha. I mercanti si fanno pagare in argento e in orzo.",
"Una taverna di Babilonia: si beve birra d’orzo, spesso con una lunga cannuccia, e si mangia pane e stufati. A servire erano spesso le donne, e il codice di Hammurabi dedica alcune leggi alle taverne.",
"Nel mercato tutto si pesa e si mette per iscritto: l’argento si misura in sicli e mine, l’orzo con vasi di misura. Gli accordi si firmano con i sigilli, davanti ai testimoni.",
"Nelle cucine si cuoce il pane in forni di fango a forma di campana e si fanno stufati con carne, cipolle, porri e aglio. Alcune ricette scritte intorno al 1750 a.C. sono arrivate fino a noi, su tre tavolette.",
"Ninive, sulle rive del Tigri: la grande capitale dell’Assiria, fatta ingrandire dal re Sennacherib con mura imponenti e molte porte. Un acquedotto portava l’acqua alla città dai monti.",
"All’ingresso dei palazzi assiri stavano grandi tori con le ali e la testa umana, i lamassu, guardiani contro il male. Le pareti delle sale erano coperte di rilievi in pietra che mostravano battaglie, banchetti e cacce.",
"La biblioteca del re Assurbanipal: migliaia di tavolette di argilla con poemi, preghiere, presagi, liste di parole e libri di medicina, raccolte copiando i testi di tutta la Mesopotamia. Furono ritrovate a metà dell’Ottocento: se ne contano circa trentamila fra tavolette e frammenti.",
"I rilievi di Ninive mostrano il re che caccia i leoni in una grande cerimonia, e, in un’altra scena, banchetta sotto una pergola con la regina. Sono fra i capolavori dell’arte assira.",
"La Via Processionale: una larga strada lunga circa ottocento metri, fra due muri alti decorati con oltre cento leoni di mattoni smaltati, l’animale della dea Ishtar. Ogni anno, per la festa di Capodanno, vi passavano le statue degli dèi in processione.",
"La Porta di Ishtar, l’ottava porta della città, costruita intorno al 575 a.C. dal re Nabucodonosor II: la facciata è rivestita di mattoni smaltati azzurri, con file di tori e di draghi in rilievo. Il tetto e le porte erano di cedro.",
"Il tempio di Esagila, dedicato al dio Marduk, e accanto la ziggurat Etemenanki, la \"casa del fondamento del cielo e della terra\". Secondo alcuni studiosi è la torre che ha ispirato il racconto biblico della Torre di Babele.",
"Secondo la tradizione greca, a Babilonia c’erano dei giardini pensili, giardini a terrazze costruiti per una regina nostalgica dei monti della sua terra. Gli archeologi non ne hanno mai trovato le tracce, e alcuni studiosi pensano che si trattasse di un giardino di un’altra città.",
"Gli astronomi babilonesi osservavano il cielo ogni notte dalle terrazze dei templi e annotavano su tavolette la posizione della luna, dei pianeti e delle stelle. Il mese cominciava con la luna nuova, e dal loro modo di contare in base sessanta deriva il nostro modo di misurare i minuti e i gradi.",
"Sotto la Porta di Ishtar, la luce passa lo stesso."
];
const NAME={
ms_urlamma:"Ur-Lamma, l’irrigatore",
ms_gilgamesh:"Gilgamesh, re di Uruk",
ms_urningal:"Ur-Ningal, il maestro scriba",
ms_enheduanna:"Enheduanna, la sacerdotessa di Ur",
ms_hammurabi:"Hammurabi, re di Babilonia",
ms_amat:"Amat-Shamash, la taverniera",
ms_assurbanipal:"Assurbanipal, re d’Assiria",
ms_nabucodonosor:"Nabucodonosor II, re di Babilonia"
};
const GREET={
ms_urlamma:"Ehi, Pierpaolo! Vieni qui sull’argine, che al mattino l’acqua è ancora fresca. Sono Ur-Lamma e questo canale lo pulisco da quando ero un ragazzo: senza id, il fiume, qui non nasce neanche un filo d’erba.",
ms_gilgamesh:"Ehi, Pierpaolo! Sali, sali: da qui si vede tutta Uruk. Io sono Gilgamesh, lugal di questa città, e le mura che vedi, dicono, le ho fatte costruire io. Dicono anche tante altre cose, ma le mura sono vere.",
ms_urningal:"Entra, Pierpaolo, e siediti in fondo: qui si parla piano e si scrive dritto. Sono Ur-Ningal, dubsar, e questa è l’edubba, la Casa delle tavolette. Se sbagli un segno, non ti picchio: ti faccio rifare tutta la tavoletta.",
ms_enheduanna:"Benvenuto, Pierpaolo. Io sono Enheduanna, en di Nanna, la luna che brilla sopra Ur. Mio padre fu un grande re, ma io preferisco essere ricordata per le parole: se vorrai, te ne regalo qualcuna.",
ms_hammurabi:"Shulmu, Pierpaolo. Sono Hammurabi, re di Babilonia e protettore della kittum, la giustizia. Mi dicono che il mio nome sia legato a una pietra: ma io sono più orgoglioso dei miei canali.",
ms_amat:"Shulmu, Pierpaolo! Entra, che fuori c’è la polvere. Sono Amat-Shamash, e la mia shikaru è la più buona del porto. Se sai contare in orzo, sei il benvenuto.",
ms_assurbanipal:"Avvicinati, Pierpaolo. Sono Assurbanipal, shar kishshati, re del mondo, se credi ai miei scribi. Io so leggere e scrivere, cosa che i miei predecessori lasciavano agli altri. Qui, fra queste tavolette, mi sento a casa.",
ms_nabucodonosor:"Benvenuto, Pierpaolo, nella città più bella che io conosca. Sono Nabucodonosor, re di Babilonia: il mio nome vuol dire più o meno \"Nabu, proteggi il mio erede\". Questa porta l’ho fatta io, e se la guardi nel buio, si accende da sola."
};
const LX=[450,1150,1800,2400, 3050,3750,4400,5000, 5900,6550,7150,7700, 8500,9150,9800,10350, 10950,11600,12250,12850, 13650,14300,14950,15500, 16250,16900,17500,18000, 18850,19600,20400,21150,21800,22350];

/* ---- livello 0: cielo, sole, luna, stelle, nuvole sottili ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-19000)/1800,0,1);if(nt>0)for(let i=0;i<60;i++)star(g,hr(i*3)*480,hr(i*7+1)*260,1+(i%4==0),nt*.85*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/19600,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*255;
 if(xs<19900){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,120,0)');g.fillStyle=sg;g.fillRect(sx-250,sy-250,500,500);dot(g,'rgba(255,'+Math.round(250-low*80)+','+Math.round(215-low*110)+',1)',sx,sy,15+low*7)}
 const mu=cl((xs-19000)/2200,0,1);if(mu>0){const mx=380-mu*130,my=300-mu*196;dot(g,'rgba(255,248,215,.14)',mx,my,36);g.fillStyle='#f6f0d6';g.beginPath();g.arc(mx,my,15,-Math.PI/2,Math.PI/2,true);g.bezierCurveTo(mx-9,my+9,mx-9,my-9,mx,my-15);g.fill()}
 const cc=xs<2700?'rgba(252,206,214,.6)':xs<13200?'rgba(255,255,255,.55)':xs<17000?'rgba(255,224,170,.6)':xs<19200?'rgba(255,150,120,.55)':'rgba(140,120,190,.3)';
 each(o-((t*4)%340)*.02,340,1,(x,i,r)=>{if(r>.4)return;nube(g,x+r*100,50+r*50,.8+r*.7,cc)});
 const fo=cl(1-xs/2800,0,1)*.3;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const dust=cl((xs-13200)/1200,0,1)*cl((18400-xs)/1400,0,1)*.14;if(dust>.01){g.fillStyle='rgba(255,208,120,'+dust+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-17400)/900,0,1)*cl((19800-xs)/1000,0,1)*.24;if(wg>.01){g.fillStyle='rgba(255,110,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}

/* ---- livello 1: orizzonte lontano: campi piatti e palme, il Tempio Bianco, la ziggurat di Ur, le torri di Babilonia, le mura di Ninive, le mura di Babilonia con l'Etemenanki ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(mixs(c,'#b8c4dc',.3),'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const base=(sx,w,c)=>{g.fillStyle=dim(c);g.beginPath();g.moveTo(sx-w,hz+34);for(let q=0;q<=24;q++){const px=sx-w+q*w/12;g.lineTo(px,hz+8-4*Math.abs(Math.sin(q*.9))-3*Math.sin(q*2.1))}g.lineTo(sx+w,hz+34);g.closePath();g.fill()};
 const torches=(sx,x0,x1,n)=>{if(night>.2)for(let q=0;q<n;q++){const tx=sx+x0+(x1-x0)*q/(n-1);glow(g,tx,hz+4,12,'255,180,80',.7*Math.min(1,night+.1));dot(g,'rgba(255,220,140,.95)',tx,hz+4,1.4)}};
 /* i campi di Sumer: orizzonte piatto, canali che brillano, filari di palme da dattero (zone 1-2) */
 const f1=env(1500,4600);if(f1>.02){g.globalAlpha=f1;const sx=fx(1500);base(sx,430,'#a8a860');rect(g,dim('#7a9a50'),sx-430,hz+14,860,10);for(let q=0;q<5;q++)rect(g,'rgba(180,220,230,.5)',sx-380+q*170,hz+16+(q%2)*4,70,1.6);
  for(let q=0;q<24;q++){const ax=sx-410+q*35+hr(q)*10;rect(g,dim('#4a3a22'),ax,hz-6,1.6,16);for(let r=0;r<4;r++)ln(g,dim('#3f7a38'),1.4,[ax+.8,hz-6,ax+.8+(r-1.5)*5,hz-2+(r%2)*2])}g.globalAlpha=1}
 /* il Tempio Bianco di Uruk sopra la terrazza, bianco abbagliante in lontananza (zone 1-2) */
 const tb=env(3000,4200);if(tb>.02){g.globalAlpha=tb;const sx=fx(3000);rect(g,dim('#c0a478'),sx-34,hz-6,68,22);rect(g,dim('#d8c8a0'),sx-22,hz-14,44,10);rect(g,dim('#fffaf0'),sx-14,hz-28,28,16);rect(g,'rgba(255,255,255,.5)',sx-14,hz-28,5,16);glow(g,sx,hz-20,40,'255,250,220',.25*(1-night));
  base(sx+130,260,'#a8a060');for(let q=0;q<8;q++)rect(g,dim('#b8996c'),sx-300+q*32,hz+2-(q%3)*3,24,16);g.globalAlpha=1}
 /* la ziggurat di Ur al centro, rossa e a tre gradoni (zone 3-5) */
 const ur=env(9300,5200);if(ur>.02){g.globalAlpha=ur;const sx=fx(9300);base(sx,380,'#b09860');zigg(g,sx,hz+16,150,70,3,dim('#a8583a'),'rgba(255,214,170,.2)',0);rect(g,dim('#2f5fa8'),sx-12,hz-58,24,8);
  [[-250,24,26],[-200,20,18],[190,26,22],[250,18,16]].forEach((b,i)=>{rect(g,dim('#c09a68'),sx+b[0],hz+14-b[2],b[1],b[2]);rect(g,'rgba(0,0,0,.14)',sx+b[0]+b[1]*.7,hz+14-b[2],b[1]*.3,b[2])});g.globalAlpha=1}
 /* le torri di Babilonia (zone 5-6) */
 const bb=env(12400,4600);if(bb>.02){g.globalAlpha=bb;const sx=fx(12400);base(sx,380,'#b0a068');[[-200,22,48],[-150,26,66],[-90,24,52],[-30,30,76],[40,24,58],[100,28,70],[160,22,50],[210,26,60]].forEach((b,i)=>{rect(g,dim('#cfae78'),sx+b[0],hz+14-b[2],b[1],b[2]);rect(g,'rgba(0,0,0,.14)',sx+b[1]*.7+b[0],hz+14-b[2],b[1]*.3,b[2]);merli(g,sx+b[0],hz+14-b[2],b[1],dim('#b8946a'),4);rect(g,dim('#2a1c10'),sx+b[0]+b[1]*.4,hz+14-b[2]*.6,3,8)});
  zigg(g,sx+250,hz+14,70,46,3,dim('#a8683e'),'rgba(255,214,150,.2)',0);g.globalAlpha=1}
 /* le mura di Ninive con le porte, in lontananza sul Tigri (zone 7) */
 const ni=env(16900,4400);if(ni>.02){g.globalAlpha=ni;const sx=fx(16900);base(sx,400,'#b0a068');rect(g,dim('#d0a070'),sx-380,hz-8,760,24);merli(g,sx-380,hz-8,760,dim('#b48458'),60);for(let q=0;q<7;q++){rect(g,dim('#d8aa78'),sx-340+q*112,hz-26,22,42);merli(g,sx-340+q*112,hz-26,22,dim('#b48458'),2)}
  [-120,140].forEach(b=>{rect(g,dim('#dcb07e'),sx+b-20,hz-40,16,56);rect(g,dim('#dcb07e'),sx+b+8,hz-40,16,56);ar(g,dim('#2a1810'),sx+b-8,hz+16,16,24)});rect(g,dim('#7a98a8'),sx-380,hz+16,760,6);g.globalAlpha=1}
 /* le mura di Babilonia e la sagoma alta dell'Etemenanki, con le torce (zone 8) */
 const eb=env(20500,5600);if(eb>.02){g.globalAlpha=eb;const sx=fx(20500);base(sx,420,'#7a7a98');rect(g,dim('#4a6ab0'),sx-400,hz-4,800,20);rect(g,dim('#e8d8a0'),sx-400,hz+2,800,2);merli(g,sx-400,hz-4,800,dim('#3a5aa0'),64);
  zigg(g,sx-70,hz+16,96,98,5,dim('#a8683e'),'rgba(255,214,150,.2)',0);rect(g,dim('#2f5fa8'),sx-82,hz-92,24,10);for(let q=0;q<4;q++){rect(g,dim('#5a7ac0'),sx+60+q*70,hz-30-(q%2)*10,30,46);merli(g,sx+60+q*70,hz-30-(q%2)*10,30,dim('#3a5aa0'),2)}
  torches(sx,-380,380,16);g.globalAlpha=1}}

/* ---- livello 2: campi e canali con le leve, mura e case di Uruk, tetti piatti di Nippur, templi e botteghe di Ur, strade di Babilonia, il porto, palazzi di Ninive, la Via Processionale ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120);A.setDK(nf(cam+x));
  const wins=(n,top,bx)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,214,140,.85)',bx+(q%4)*18,top+Math.floor(q/4)*14,5,6)};
  const house=(c,hh,ww)=>{rect(g,dim(c),x+10,hz-hh,ww,hh+10);rect(g,'rgba(255,255,255,.14)',x+10,hz-hh,5,hh+10);rect(g,'rgba(0,0,0,.14)',x+10+ww-9,hz-hh,9,hh+10);rect(g,dim('#9a7444'),x+7,hz-hh-4,ww+6,5);rect(g,dim('#2a1c10'),x+10+ww*.4,hz-hh*.5,10,hh*.5+10);wins(4,hz-hh+8,x+16)};
  if(zz==1){if(r>.7)palma(g,x+60,hz+10,.5+r*.2,t);else if(r>.5){ln(g,dim('#8a6a3a'),1.6,[x+20,hz+8,x+20,hz-26]);ln(g,dim('#8a6a3a'),1.6,[x+96,hz+8,x+96,hz-22]);ln(g,dim('#8a6a3a'),1.2,[x+20,hz-22,x+96,hz-16]);el(g,dim('#8ab0b8'),x+60,hz-12,18,3)}else if(r>.3){canne(g,x+60,hz+8,56,40,t,dim('#b8a850'))}else house('#bf9a60',26+r*30,70)}
  else if(zz==2){if(r>.8)palma(g,x+60,hz+10,.55+r*.2,t);else if(r>.3)house(MC[md(i,5)],36+r*50,84);else{mud(g,x+6,hz-30,100,40,dim('#c4a068'));merli(g,x+6,hz-30,100,dim('#b48e54'),8)}}
  else if(zz==3){if(r>.82)palma(g,x+60,hz+10,.6,t);else{house(MC[md(i,5)],40+r*42,84);if(r>.5){rect(g,dim('#9a7444'),x+14,hz-48-r*40,32,6)}}}
  else if(zz==4){if(r>.88)palma(g,x+60,hz+10,.6,t);else if(r>.7){zigg(g,x+55,hz+10,90,52,2,dim('#a8583a'),'rgba(255,214,170,.2)',0)}else{const hh=50+r*52;house(['#c8946a','#bc8660','#d0a074'][md(i,3)],hh,86);rect(g,dim('#9a5a3a'),x+10,hz-hh*.55,86,4)}}
  else if(zz==5){if(r>.84)palma(g,x+60,hz+10,.6,t);else{const hh=44+r*60;house(MC[md(i+2,5)],hh,88);rect(g,dim('#9a7444'),x+4,hz-hh-10,100,6);if(r>.5)for(let q=0;q<4;q++)rect(g,dim(['#c85a3a','#2f5fa8','#e0b84a','#f0e6cc'][q]),x+14+q*20,hz-hh-18,18,7)}}
  else if(zz==6){if(r>.8)palma(g,x+60,hz+10,.55,t);else if(r>.5){rect(g,dim('#6a4a2a'),x+54,hz-70,2.4,70);poly(g,dim('#f0e6cc'),[[x+57,hz-68],[x+84,hz-28],[x+57,hz-28]]);poly(g,dim('#8a6a40'),[[x+30,hz-4],[x+36,hz+6],[x+86,hz+6],[x+96,hz-6]])}else house(MC[md(i,5)],36+r*42,92)}
  else if(zz==7){if(r>.84)palma(g,x+60,hz+10,.6,t);else{const hh=60+r*56;mud(g,x+8,hz-hh,92,hh+10,dim('#d4aa78'));merli(g,x+8,hz-hh,92,dim('#b48458'),8);for(let q=0;q<3;q++)rect(g,dim('#e8d0a0'),x+16+q*28,hz-hh+10,12,hh-6);ar(g,dim('#2a1810'),x+38,hz+10,22,36);if(night>.2)glow(g,x+49,hz-14,22,'255,170,70',.4)}}
  else{if(r>.86)palma(g,x+60,hz+10,.6,t);else{const hh=56+r*60;rect(g,dim('#1a45a0'),x+8,hz-hh,90,hh+10);rect(g,'rgba(255,255,255,.16)',x+8,hz-hh,6,hh+10);rect(g,dim('#e8d8a0'),x+8,hz-hh+10,90,2);merli(g,x+8,hz-hh,90,dim('#2a60c8'),8);for(let q=0;q<3;q++)rect(g,dim('#f0e6c0'),x+18+q*26,hz-hh+20,10,5);if(night>.2){glow(g,x+54,hz-hh*.4,30,'255,180,80',.3)}}}
 })}

/* ---- livello 3: le case lungo la strada, per zona ---- */
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3);
 if(st==1){/* canali e paludi: palme da dattero, capanne di canne, fasci di canne, recinti, ceste */
  if(r>.62){palma(g,x+w*.5,gt+6,1+r*.3,TT);return}if(r>.34){for(let q=0;q<3;q++)canne(g,x+30+q*40,gt+4,38,60+q*14,TT);return}
  if(r>.18){for(let q=0;q<7;q++)ln(g,'#7a5a30',2,[x+20+q*14,gt+4,x+20+q*14,gt-28]);ln(g,'#7a5a30',1.6,[x+20,gt-20,x+104,gt-20]);ln(g,'#7a5a30',1.6,[x+20,gt-8,x+104,gt-8]);return}
  for(let q=0;q<3;q++){el(g,'#c8a870',x+30+q*34,gt-4,15,9);rect(g,'#8a6a40',x+15+q*34,gt-14,30,2)}cesp(g,x+130,gt+4,1,'#6a8a3a');return}
 if(st==2){/* Uruk: mura e case di mattoni crudi con cortile, palme */
  if(r>.76){palma(g,x+w*.5,gt+6,1.1+r*.2,TT);return}
  if(r>.34){casa(g,x+6,w-30,h-30,i,k,{wall:MC[md(i,5)],mat:r>.55,lad:r>.65});return}
  mud(g,x,gt-60,w+4,66,'#c4a068');merli(g,x,gt-60,w+4,'#b48e54',12);for(let q=0;q<4;q++)rect(g,'rgba(60,30,0,.14)',x+10+q*38,gt-40,18,3);return}
 if(st==3){/* Nippur: case a cortile con tetti piatti e travi, qualche palma e pozzo */
  if(r>.82){palma(g,x+w*.5,gt+6,1.1,TT);return}
  if(r>.62){el(g,'#8a7a64',x+w*.5,gt+2,22,6);rect(g,'#9a8a74',x+w*.5-18,gt-18,36,18);el(g,'#2a2018',x+w*.5,gt-18,16,5);ln(g,'#5a3e22',3,[x+w*.5-22,gt-18,x+w*.5-22,gt-52,x+w*.5+22,gt-52,x+w*.5+22,gt-18]);return}
  casa(g,x+6,w-20,h-20,i,k,{wall:MC[md(i+1,5)],lad:r>.4,mat:r<.3});return}
 if(st==4){/* Ur: case a due piani di mattoni cotti e crudi, botteghe, qualche cortile */
  if(r>.86){palma(g,x+w*.5,gt+6,1.1,TT);return}
  casa(g,x+4,w-14,h+10,i,k,{wall:['#c8946a','#bc8660','#d0a074','#b4784a'][md(i,4)],cor:'#8a5a3a',lad:r>.5,mat:r>.7});return}
 if(st==5){/* Babilonia di Hammurabi: strade polverose, case a terrazza con teli, scribi */
  if(r>.84){palma(g,x+w*.5,gt+6,1.1,TT);return}
  casa(g,x+4,w-14,h+20,i,k,{wall:MC[md(i+3,5)],mat:1,lad:r>.55,mer:r>.8});return}
 if(st==6){/* porto: magazzini di mattoni, case con tenda, ceste, barili */
  if(r>.84){palma(g,x+w*.5,gt+6,1.1,TT);return}
  if(r>.5){mud(g,x+6,gt-70,w-24,76,'#b4906a');rect(g,'#5a3e22',x+2,gt-76,w-16,8);porta(g,x+w*.5-8,gt+4,34,50,'#2a1c10');for(let q=0;q<5;q++)rect(g,'rgba(60,30,0,.15)',x+14+q*30,gt-60,3,50);return}
  casa(g,x+6,w-20,h-30,i,k,{wall:MC[md(i,5)],mat:1});for(let q=0;q<3;q++)el(g,'#b4683a',x+w-30+q*0,gt+2-q*10,8,5);return}
 if(st==7){/* Ninive: palazzi di mattoni con merli e colonnati di pietra, scalinate, palme */
  if(r>.84){palma(g,x+w*.5,gt+6,1.1,TT);return}
  mud(g,x+4,gt-h-10,w-20,h+16,'#d4aa78');merli(g,x+4,gt-h-10,w-20,'#b48458',12);for(let q=0;q<4;q++){rect(g,'#e8d0a0',x+14+q*34,gt-h+10,14,h-12);rect(g,'rgba(0,0,0,.14)',x+24+q*34,gt-h+10,3,h-12);rect(g,'#c8aa78',x+11+q*34,gt-h+6,20,5)}
  rect(g,'rgba(255,255,255,.14)',x+4,gt-h-10,5,h+16);for(let q=0;q<3;q++)rect(g,'#c8aa78',x+8-q*4,gt-q*5-6+6,w-28+q*8,5);if(k>.2)glow(g,x+w*.4,gt-30,50,'255,170,70',.3*k);return}
 /* st==8 Babilonia di Nabucodonosor: muri smaltati azzurri con file di leoni, terrazze di mattoni, torce */
 if(r>.86){palma(g,x+w*.5,gt+6,1.1,TT);return}
 if(r>.45){rect(g,'#1a45a0',x+2,gt-h-30,w-14,h+36);rect(g,'rgba(255,255,255,.16)',x+2,gt-h-30,6,h+36);rect(g,'rgba(0,0,0,.16)',x+w-26,gt-h-30,12,h+36);rect(g,'#e8d8a0',x+2,gt-h-16,w-14,3);rect(g,'#f0e6c0',x+2,gt-h-12,w-14,2);for(let q=0;q<(w-14)/24;q++)leone(g,x+16+q*24,gt-14,1);merli(g,x+2,gt-h-30,w-14,'#2a60c8',10);for(let q=0;q<5;q++)dot(g,'#f0e6c0',x+10+q*24,gt-h-4,2.4);return}
 mud(g,x+4,gt-h+10,w-20,h-4,'#c8a468');rect(g,'#a88454',x,gt-h+6,w-12,6);for(let q=0;q<4;q++)rect(g,'#7a5a30',x+14+q*32,gt-h+16,10,4);for(let q=0;q<3;q++){ln(g,'#3a8a38',2,[x+20+q*40,gt-h+10,x+22+q*40,gt-h+34]);dot(g,'#4a9a3e',x+22+q*40,gt-h+34,3)}palma(g,x+w-30,gt-h+10,.5,TT);if(k>.2)glow(g,x+w*.5,gt-40,50,'255,170,70',.3*k)}
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>110+hr(i*5)*50,170);
 each2(180,8,Z[1],Z[2],2,i=>120+hr(i*5)*60,170);
 each2(180,9,Z[2],Z[3],3,i=>120+hr(i*5)*50,170);
 each2(180,10,Z[3],Z[4],4,i=>130+hr(i*5)*50,170);
 each2(180,11,Z[4],Z[5],5,i=>130+hr(i*5)*50,170);
 each2(190,12,Z[5],Z[6],6,i=>110+hr(i*5)*50,180);
 each2(190,13,Z[6],Z[7],7,i=>120+hr(i*5)*50,170);
 each2(170,14,Z[7],Z[8],8,i=>100+hr(i*5)*60,160)}

/* ---- suolo: fango e argini, terra battuta di Uruk, argilla, mattoni cotti di Ur, lastre polverose, banchina e stuoie, pietra di Ninive, lastricato rosso e giallo della Via Processionale ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#9a7a48','k'],[Z[1],Z[2],'#c4a068','u'],[Z[2],Z[3],'#b8946a','n'],[Z[3],Z[4],'#b4784a','r'],[Z[4],Z[5],'#c8a874','b'],[Z[5],Z[6],'#a88858','p'],[Z[6],Z[7],'#c8aa80','s'],[Z[7],Z[8],'#8a4a3a','v']];
 rect(g,'#e0d0a8',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0),zw=z[1]-z[0];g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const pz=(q,m)=>z[0]+((q*m)%zw)-cam;
  if(z[3]=='k'){/* argini di terra e fango scuro, erba bassa, canne, solchi dei campi, impronte */
   rect(g,'#7a9a48',x0,gt+3,x1-x0,26);for(let q=0;q<80;q++)rect(g,q%3?'#6a8a3e':'#9ab458',pz(q,47),gt+5+hr(q)*22,2,5);rect(g,'#8a6a3a',x0,gt+29,x1-x0,120);rect(g,'rgba(60,30,0,.16)',x0,gt+60,x1-x0,6);rect(g,'rgba(60,30,0,.16)',x0,gt+96,x1-x0,6);rect(g,'rgba(255,214,150,.1)',x0,gt+78,x1-x0,8);
   for(let q=0;q<100;q++)dot(g,hr(q)>.5?'rgba(255,230,190,.4)':'rgba(70,40,15,.5)',pz(q,31),gt+34+hr(q*5)*110,1+hr(q)*1.6);for(let q=0;q<6;q++){const px=pz(q,433);el(g,'rgba(110,160,172,.5)',px,gt+80+hr(q)*50,36+hr(q)*20,5);el(g,'rgba(255,255,255,.25)',px-8,gt+78+hr(q)*50,12,1.6)}}
  if(z[3]=='u'){/* terra battuta, scale di mattoni, cortili d'argilla e bitume */
   rect(g,'#b49060',x0,gt+3,x1-x0,30);for(let q=0;q<50;q++)rect(g,'rgba(0,0,0,.08)',pz(q,59),gt+3,1.4,30);rect(g,'#c4a068',x0,gt+33,x1-x0,118);for(let q=0;q<150;q++)dot(g,hr(q)>.5?'rgba(255,240,200,.45)':'rgba(110,70,30,.4)',pz(q,29),gt+38+hr(q*5)*108,1+hr(q)*1.4);for(let q=0;q<8;q++){const px=pz(q,331);rect(g,'rgba(40,30,20,.3)',px,gt+60+hr(q)*60,40+hr(q)*30,5)}}
  if(z[3]=='n'){/* pavimento d'argilla battuta con giunti, qualche tavoletta caduta */
   rect(g,'#b8946a',x0,gt+3,x1-x0,150);for(let r=0;r<6;r++){const yy=gt+9+r*20,bw=44+r*6,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*11+r*7);rect(g,hh>.65?'rgba(255,255,255,.1)':hh>.3?'rgba(0,0,0,.06)':'rgba(255,255,255,.04)',px,yy,bw-2,18);rect(g,'rgba(0,0,0,.1)',px+bw-2,yy,2,18)}}
   for(let q=0;q<9;q++){const px=pz(q,263);rect(g,'#c8a468',px,gt+50+hr(q)*80,9,6);rect(g,'rgba(60,30,10,.4)',px+1,gt+52+hr(q)*80,6,1)}}
  if(z[3]=='r'){/* lastre di mattoni cotti rossicci */
   rect(g,'#b4784a',x0,gt+3,x1-x0,150);for(let r=0;r<7;r++){const yy=gt+6+r*21,bw=38+r*5,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5);rect(g,hh>.7?'rgba(255,214,170,.16)':hh>.35?'rgba(0,0,0,.07)':'rgba(255,255,255,.04)',px,yy,bw-2,19);rect(g,'rgba(40,20,10,.2)',px+bw-2,yy,2,19)}}
   for(let q=0;q<14;q++){const px=pz(q,229);rect(g,'rgba(30,22,20,.25)',px,gt+40+hr(q)*90,24+hr(q)*30,3)}}
  if(z[3]=='b'){/* strade polverose con lastre rade, canaletta e ponticelli, polvere dorata */
   rect(g,'#c8a874',x0,gt+3,x1-x0,150);rect(g,'#b8946a',x0,gt+50,x1-x0,52);for(let q=0;q<120;q++)dot(g,hr(q)>.5?'rgba(255,230,170,.4)':'rgba(110,70,30,.35)',pz(q,23),gt+8+hr(q*5)*140,1+hr(q)*1.4);for(let q=0;q<9;q++){const px=pz(q,271);rect(g,'rgba(120,80,40,.3)',px,gt+54+hr(q)*40,50+hr(q)*30,10)}
   for(let q=0;q<3;q++){const px=pz(q,877);rect(g,'#7a98a8',px,gt+104,60,8);rect(g,'#a89070',px-4,gt+102,68,3)}}
  if(z[3]=='p'){/* banchina di mattoni cotti, scalini d'argilla verso il fiume, stuoie e corde */
   rect(g,'#a88858',x0,gt+3,x1-x0,150);rect(g,'#8a6a48',x0,gt+3,x1-x0,34);for(let q=0;q<36;q++)rect(g,'rgba(0,0,0,.12)',pz(q,53),gt+3,1.4,34);rect(g,'#a88858',x0,gt+37,x1-x0,110);for(let q=0;q<7;q++){const px=pz(q,331);rect(g,['#c85a3a','#2f5fa8','#e0c890'][q%3],px,gt+70+hr(q)*44,46,22);for(let s2=0;s2<6;s2++)rect(g,'rgba(0,0,0,.14)',px+s2*8,gt+70+hr(q)*44,1,22)}
   for(let q=0;q<4;q++){const px=pz(q,613);ln(g,'#7a5a30',2,[px,gt+120,px+30,gt+130,px+60,gt+124])}}
  if(z[3]=='s'){/* lastre di pietra chiare di Ninive, scalini larghi, bitume nelle fughe */
   rect(g,'#c8aa80',x0,gt+3,x1-x0,150);for(let r=0;r<6;r++){const yy=gt+7+r*24,bw=64+r*8,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*17+r*3);rect(g,hh>.65?'rgba(255,240,210,.2)':hh>.3?'rgba(0,0,0,.05)':'rgba(255,255,255,.06)',px,yy,bw-2,22);rect(g,'rgba(30,24,22,.3)',px+bw-2,yy,2,22);rect(g,'rgba(30,24,22,.18)',px,yy+22,bw,2)}}
   const gw=cl((cam-16200)/600,0,1)*cl((18200-cam)/600,0,1);if(gw>0)rect(g,'rgba(255,150,60,'+(.1*gw)+')',x0,gt+3,x1-x0,150)}
  if(z[3]=='v'){/* la strada lastricata di pietre rosse e gialle, bordata di bianco, con i giunti di bitume */
   rect(g,'#8a4a3a',x0,gt+3,x1-x0,150);rect(g,'#e8d8a0',x0,gt+3,x1-x0,5);rect(g,'#f0e6c0',x0,gt+8,x1-x0,3);rect(g,'#e8d8a0',x0,gt+146,x1-x0,6);for(let r=0;r<6;r++){const yy=gt+13+r*22,bw=54,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*11+r*3);rect(g,(k+r)%3==1?'rgba(232,184,80,.7)':hh>.5?'rgba(176,84,60,.55)':'rgba(140,64,44,.55)',px,yy,bw-3,20);rect(g,'rgba(255,255,255,.1)',px,yy,bw-3,2);rect(g,'rgba(20,14,12,.35)',px+bw-3,yy,3,20)}}
   for(let q=0;q<18;q++){const px=pz(q,97);rect(g,'rgba(255,200,110,'+(.08+.08*hr(q))+')',px,gt+10,26,130)}}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1800,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const gd=cl((cam-13200)/700,0,1)*cl((15800-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
 const sg=cl((cam-16800)/700,0,1)*cl((19400-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- vita: aironi e martin pescatori fra i canneti, rondini e cornacchie sui tetti, asini con le ceste, pecore, cani da guardia, dromedari dell'ultima epoca, passanti, pipistrelli di notte ---- */
function layerLife(g,o,t){const cam=o,xs=cam+240,hz=GT;
 /* aironi in volo sopra i canali (zone 1-2) */
 const hv=cl((4200-xs)/500,0,1)*cl((xs+200)/400,0,1);if(hv>.05)for(let i=0;i<3;i++){const bx=((i*190+t*(16+i*4))%620)-70,by=60+hr(i*7)*70+Math.sin(t*.7+i*2)*14,w=Math.sin(t*3+i)*3;g.globalAlpha=hv;g.strokeStyle='#c8d0d8';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-12,by+w+2);g.quadraticCurveTo(bx-5,by-4,bx,by);g.quadraticCurveTo(bx+5,by-4,bx+12,by+w+2);g.stroke();ln(g,'#c8d0d8',1.6,[bx-2,by+2,bx-18,by+6]);g.globalAlpha=1}
 /* ibis e rondini (zone 2-7) */
 const sv=Math.min(cl((xs-2700)/500,0,1),cl((17800-xs)/500,0,1));if(sv>.05)for(let i=0;i<5;i++){const bx=((i*131+t*(26+i*4))%640)-80,by=70+hr(i*3)*110+Math.sin(t*1.6+i*2)*14,w=Math.sin(t*10+i)*3;g.globalAlpha=sv;volo(g,bx,by,1,w,'rgba(20,18,30,.9)');g.globalAlpha=1}
 /* pipistrelli attorno alle torce, di notte (zone 8) */
 const bn=cl((xs-19600)/800,0,1);if(bn>.05)for(let i=0;i<6;i++){const bx=((i*97+t*(34+i*3))%560)-40,by=90+hr(i*5)*120+Math.sin(t*5+i)*18,w=Math.sin(t*14+i)*3.4;g.globalAlpha=bn;g.strokeStyle='rgba(10,8,20,.9)';g.lineWidth=2;g.beginPath();g.moveTo(bx-7,by+w);g.lineTo(bx-2,by-2);g.lineTo(bx,by+1);g.lineTo(bx+2,by-2);g.lineTo(bx+7,by+w);g.stroke();g.globalAlpha=1}
 /* cornacchie sui tetti, cani che dormono davanti alle case, asini con le ceste, pecore, dromedari */
 each(o,520,31,(x,i,r)=>{const wx=cam+x,zz=zn(wx);A.setDK(nf(wx));
  if(zz>=3&&zz<=6&&r>.6){volo(g,x+40,hz-130+Math.sin(t*2+i)*2,.9,0,'#1a1a22');el(g,'#1a1a22',x+40,hz-128,5,3);}
  if(zz>=2&&zz<=7&&r<.2)cane(g,x+60,hz+42,t,['#b8935a','#6a5a48','#d8c8a0'][md(i,3)]);
  if(zz<=2&&r>.3&&r<.5){pecora(g,x+20,hz+44,1.3,t,1);pecora(g,x+54,hz+50,1.2,t+1,1)}
  if(zz>=7&&r>.55&&r<.8)cammello(g,x+60,hz+58,.8,t,md(i,2)?1:-1)});
 each(o,430,57,(x,i,r)=>{const wx=cam+x,zz=zn(wx);if(!(zz>=2&&zz<=8)||r<.4)return;A.setDK(nf(wx));const dir=md(i,2)?1:-1,off=Math.sin(t*.18+i)*70,f=Math.cos(t*.18+i)*dir>0?1:-1;
  if(r>.8)asino(g,x+off,hz+56,1,t+i,f);else man(g,x+off,hz+54,t+i,{f:f,s:.5,kilt:TUN[md(i,6)],long:md(i,3)==0,robe:TUN[md(i+2,6)],skin:['#d0996c','#c88e64','#b87c54'][md(i,3)]})});A.setDK(0);g.globalAlpha=1}


/* ---- personaggi ---- */
const NP=(id,x,o,acc)=>({id,name:NAME[id],x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));const c=q=>tn(o[q]);fig(g,px,y,t,Object.assign({f,s:1},o,{skin:c('skin'),top:c('top'),bot:c('bot'),hair:c('hair'),acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:GREET[id]}}});
/* barba a ciocche: n colonne, righe decrescenti */
const barba=(g,b,col,n,rows)=>{for(let r=0;r<rows;r++)for(let q=r;q<n-r;q++)dot(g,tn(col),-3+q*2.2,-92+b+r*4.6+(q%2)*1.6,3.2)};
const kilt=(g,b,c)=>{poly(g,tn(c),[[-12,-52+b],[12,-52+b],[15,-24],[-15,-24]]);rect(g,tn('#5a3a22'),-12,-54+b,24,5);for(let q=0;q<5;q++)rect(g,'rgba(0,0,0,.1)',-12+q*6,-48+b,1.4,24)};
const piedi=(g,c)=>{el(g,tn(c),-4,-1,8,4);el(g,tn(c),8,-1,8,4)};
const npcs=[
 /* Ur-Lamma: torso nudo bruciato dal sole, gonna corta di lana grezza, cappello di paglia, zappa di legno, ciuffo di canne dietro l'orecchio, piedi nel fango */
 NP('ms_urlamma',1030,{skin:'#c08660',top:'#c08660',bot:'#c08660',hair:'#1a120c',s:1.0},(g,b,t)=>{kilt(g,b,'#d8d0b8');piedi(g,'#6a4a2a');for(let q=0;q<3;q++)dot(g,'#4a2a18',-6+q*8,-8+(q%2)*3,1.6);
  el(g,tn('#d8c070'),0,-112+b,20,4.4);dot(g,tn('#d8c070'),0,-113+b,9.4);rect(g,tn('#a88a38'),-9.4,-114+b,18.8,2.4);ln(g,'#8a9a40',2,[-9,-104+b,-12,-114+b,-14,-122+b]);ln(g,'#8a9a40',2,[-8,-104+b,-8,-116+b,-9,-124+b]);
  ln(g,'#7a5a30',3,[10,-84+b,24,-52,28,-10]);poly(g,tn('#8a6a3a'),[[22,-14],[40,-4],[30,2],[24,-6]]);rect(g,'rgba(255,255,255,.2)',14,-70,2,4);el(g,'rgba(0,0,0,.2)',2,-84+b,0,0)}),
 /* Gilgamesh: barba riccia lunga, fascia d'oro sulla fronte, gonna corta con cintura larga, ascia alla cintura, braccia forti, sandali */
 NP('ms_gilgamesh',3850,{skin:'#c88e64',top:'#c88e64',bot:'#c88e64',hair:'#14100c',s:1.08},(g,b,t)=>{kilt(g,b,'#f0e6cc');rect(g,tn('#5a3a22'),-13,-58+b,26,8);rect(g,tn('#e0b84a'),-3,-57+b,6,6);rect(g,tn('#e0b84a'),-12,-61+b,24,2);
  barba(g,b,'#14100c',9,3);rect(g,tn('#e0b84a'),-11,-111+b,23,3);dot(g,tn('#e0b84a'),0,-110+b,2);
  ln(g,'#6a4a2a',3,[-10,-52+b,-20,-30]);poly(g,tn('#8a8a92'),[[-24,-34],[-14,-38],[-10,-22],[-20,-20]]);for(let q=0;q<2;q++)dot(g,tn('#e0b84a'),-13+q*26,-62+b*0,0);
  ln(g,'#e0b84a',2.4,[-12,-70+b,-16,-70+b]);ln(g,'#e0b84a',2.4,[12,-70+b,16,-70+b]);for(let q=0;q<3;q++){ln(g,'#5a3a22',1.2,[-9,-10+q*3,6,-4+q*0]);}ln(g,'#5a3a22',1.4,[-6,-1,-12,-26]);ln(g,'#5a3a22',1.4,[6,-1,10,-26])}),
 /* Ur-Ningal: lunga veste di lana con lo scialle frangiato, testa rasata, calamo dietro l'orecchio, tavoletta e piccola verga */
 NP('ms_urningal',6020,{skin:'#d0996c',top:'#d8c8a0',bot:'#d8c8a0',hair:'#d0996c',long:1,s:1.0},(g,b,t)=>{poly(g,tn('#c8a888'),[[-13,-90+b],[11,-90+b],[13,-70+b],[-11,-52+b],[-15,-60+b]]);for(let q=0;q<6;q++)rect(g,tn('#8a5a3a'),-14+q*4.6,-60+b+q*0,2,4);for(let q=0;q<5;q++)rect(g,tn('#8a5a3a'),-17+q*7,-3,4,3);
  ln(g,'#9a7a3a',2,[-5,-105+b,-3,-119+b]);rect(g,tn('#c8a468'),14,-74,14,10);rect(g,'rgba(60,30,10,.45)',16,-71,10,1.2);rect(g,'rgba(60,30,10,.45)',16,-68,7,1.2);ln(g,'#7a5a3a',2.4,[12,-72,32,-100]);ln(g,'#7a5a3a',1.4,[32,-100,33,-108])}),
 /* Enheduanna: veste a balze, berretto rotondo da sacerdotessa, gioielli di lapislazzuli, cilindro al collo, tavoletta e calamo */
 NP('ms_enheduanna',9250,{skin:'#d0996c',top:'#f0e6cc',bot:'#f0e6cc',hair:'#14100c',long:1,s:1.0},(g,b,t)=>{for(let q=0;q<3;q++){el(g,tn(q%2?'#2f5fa8':'#e8dcc0'),0,-34+q*14,17-q*.6,3.2);}rect(g,tn('#2f5fa8'),-13,-60+b,26,3);
  el(g,tn('#e8dcc0'),0,-113+b,12,8);rect(g,tn('#e8dcc0'),-12,-118+b,24,8);rect(g,tn('#2f5fa8'),-12,-111+b,24,3);rect(g,tn('#e0b84a'),-12,-114+b,24,1.6);
  for(let q=0;q<7;q++)dot(g,tn('#2f5fa8'),-8+q*2.8,-87+b+Math.abs(q-3)*1.2,1.8);rect(g,tn('#3a3238'),-2,-83+b,5,10);ln(g,'#e0b84a',1,[0,-88+b,0,-84+b]);
  rect(g,tn('#c8a468'),14,-76,13,10);rect(g,'rgba(60,30,10,.45)',16,-73,9,1.2);ln(g,'#7a5a3a',1.8,[10,-70,22,-84]);dot(g,tn('#2f5fa8'),-13,-72+b,1.8);dot(g,tn('#2f5fa8'),13,-72+b,1.8)}),
 /* Hammurabi: lunga barba curata, berretto rotondo con la fascia, veste frangiata, sigillo a cilindro al collo, tavoletta in mano */
 NP('ms_hammurabi',11700,{skin:'#d0996c',top:'#e8e0d0',bot:'#e8e0d0',hair:'#1a120c',long:1,s:1.04},(g,b,t)=>{poly(g,tn('#8a2a2a'),[[-13,-90+b],[-9,-90+b],[5,-44+b],[1,-44+b]]);rect(g,tn('#8a2a2a'),-13,-2,26,3);for(let q=0;q<5;q++)rect(g,tn('#c8a050'),-17+q*7,-3,4,3);
  barba(g,b,'#2a1a10',8,4);el(g,tn('#e8dcc0'),0,-112+b,13,6.4);rect(g,tn('#e8dcc0'),-12,-117+b,24,7);rect(g,tn('#8a2a2a'),-12,-112+b,24,2.4);
  rect(g,tn('#3a3238'),-2,-84+b,4,9);ln(g,'#e0b84a',1,[0,-88+b,0,-84+b]);rect(g,tn('#c8a468'),14,-76,14,10);rect(g,'rgba(60,30,10,.45)',16,-73,10,1.2);rect(g,'rgba(60,30,10,.45)',16,-70,8,1.2)}),
 /* Amat-Shamash: veste lunga di lana con la cintura, scialle sulle spalle, bracciali di rame, capelli con il nastro, brocca in mano */
 NP('ms_amat',14400,{skin:'#d0996c',top:'#8a4a3a',bot:'#8a4a3a',hair:'#1a120c',long:1,s:.98},(g,b,t)=>{poly(g,tn('#c8a050'),[[-13,-90+b],[13,-90+b],[14,-74+b],[-14,-74+b]]);rect(g,tn('#e0b84a'),-13,-60+b,26,3.4);for(let q=0;q<5;q++)rect(g,tn('#e0b84a'),-17+q*7,-3,4,3);
  dot(g,tn('#1a120c'),-9,-108+b,5.4);ln(g,'#c85a3a',2.4,[-12,-104+b,-4,-112+b]);dot(g,tn('#c87a3a'),-11,-60,0);ln(g,'#c87a3a',2.6,[11,-54,17,-56]);ln(g,'#c87a3a',2.6,[-17,-56,-11,-54]);
  el(g,tn('#b4683a'),24,-46,9,12);rect(g,tn('#b4683a'),20,-62,8,10);el(g,tn('#8a4a2a'),24,-63,5,2);el(g,'rgba(255,255,255,.14)',21,-48,2.4,7);ln(g,tn(SKN),4,[12,-72,22,-52]);for(let q=0;q<3;q++)dot(g,'rgba(255,255,255,.6)',22+q*2,-66-q*3,1.1)}),
 /* Assurbanipal: barba arricciata a file, alto copricapo con la fascia, veste ricamata con le frange, bracciali, calamo e tavoletta */
 NP('ms_assurbanipal',17500,{skin:'#d0996c',top:'#a83a3a',bot:'#f0e6cc',hair:'#14100c',long:1,s:1.06},(g,b,t)=>{rect(g,tn('#e0b84a'),-12,-54+b,24,3);for(let r=0;r<3;r++)for(let q=0;q<4;q++)dot(g,tn('#e0b84a'),-9+q*6,-34+r*10,1.6);for(let q=0;q<5;q++)rect(g,tn('#a83a3a'),-17+q*7,-3,4,3);
  barba(g,b,'#1a120c',9,4);for(let r=0;r<3;r++)rect(g,'rgba(255,255,255,.14)',-3,-90+b+r*4.6,18,.8);poly(g,tn('#e0b84a'),[[-9,-113+b],[-7,-136+b],[9,-136+b],[11,-113+b]]);rect(g,tn('#a83a3a'),-9,-120+b,20,4);rect(g,tn('#e0b84a'),-9,-127+b,20,2);rect(g,tn('#e0b84a'),-8,-137+b,18,3);
  ln(g,'#e0b84a',2.4,[-14,-62,-10,-60]);ln(g,'#e0b84a',2.4,[10,-54,16,-56]);rect(g,tn('#c8a468'),14,-78,14,11);rect(g,'rgba(60,30,10,.45)',16,-74,10,1.2);ln(g,'#7a5a3a',1.8,[10,-72,22,-86])}),
 /* Nabucodonosor II: alto copricapo con la fascia d'oro, barba arricciata, veste azzurra e oro, sandali borchiati, anello con sigillo, bastone d'oro */
 NP('ms_nabucodonosor',19800,{skin:'#cc946a',top:'#2f5fa8',bot:'#2f5fa8',hair:'#14100c',long:1,s:1.08},(g,b,t)=>{rect(g,tn('#e0b84a'),-13,-56+b,26,4);for(let r=0;r<4;r++)for(let q=0;q<4;q++)dot(g,tn('#e8c860'),-9+q*6,-34+r*8,1.4);for(let q=0;q<5;q++)rect(g,tn('#e0b84a'),-17+q*7,-3,4,3);for(let q=0;q<4;q++)rect(g,tn('#e0b84a'),-12+q*6,-88+b,3,1.6);
  barba(g,b,'#14100c',9,4);rect(g,tn('#2f5fa8'),-10,-136+b,22,24);rect(g,tn('#e0b84a'),-10,-124+b,22,3.4);rect(g,tn('#e0b84a'),-10,-137+b,22,3);for(let q=0;q<4;q++)dot(g,tn('#e8c860'),-6+q*5,-130+b,1.2);
  ln(g,'#e0b84a',3,[16,-6,16,-122]);dot(g,tn('#e0b84a'),16,-126,4.6);dot(g,tn('#2f5fa8'),16,-126,2);ln(g,tn(SKN),4.4,[12,-72,16,-70]);dot(g,tn('#e0b84a'),20,-70,1.6);for(let q=0;q<2;q++)dot(g,tn('#e0b84a'),-6+q*12,-4,.9)})
];

/* ---- oggetti lungo il percorso: [nome in elementi.js, posizione nel mondo, parametro] ---- */
const props=[
 /* zona 1 · campi, canali e paludi */
 ['mstarga',120,'CAMPI DI SUMER'],['mspalma',250,1.1],['msorzo',350,230],['mscanale',480],['mspalma',640,.9],['msaratro',780],['msorzo',930,160],['msshaduf',1150],['mspecore',1500],['mspalma',1580,1],['mscanneto',1700],['mscasacanne',1870],['msbarcacanna',2050],['mscane',2220,'#b8935a'],['msmagazzino',2360],['msforno',2560],['msgiare',2650],
 /* zona 2 · Uruk */
 ['mstarga',2790,'URUK'],['mspalma',2880,1.1],['msmura',3060],['msasino',3380,-1],['mstempiobianco',3780],['msbancarella',4130,'#c85a3a'],['mseanna',4420],['mspalma',4730,1],['mstavolette',5000],['msgiare',5230],
 /* zona 3 · Nippur */
 ['mstarga',5490,'NIPPUR'],['msedubba',5950],['msargilla',6560],['mspalma',6890,1],['msziggenlil',7160],['msgiare',7380],['mssigilli',7700],
 /* zona 4 · Ur */
 ['mstarga',8060,'UR'],['mspalma',8210,1.1],['msziggurat',8520],['msaltare',8830],['msgiparu',9180],['mslira',9420],['mstombe',9800],['msbottega',10330],
 /* zona 5 · Babilonia di Hammurabi */
 ['mstarga',10690,'BABILONIA'],['msbabilonia',10960],['msstele',11600],['mspalma',11880,1],['mspalazzo',12250],['mspalma',12550,1],['msmarduk',12880],
 /* zona 6 · il porto e le taverne */
 ['mstarga',13290,'IL PORTO'],['msporto',13660],['mspalma',13960,1],['mstaverna',14290],['msbilancia',14960],['mscucina',15500],
 /* zona 7 · Ninive */
 ['mstarga',15890,'NINIVE'],['msmuraninive',16260],['mspalma',16560,1],['mslamassu',16900],['msbiblioteca',17500],['msrilievo',17930,0],['msrilievo',18340,1],
 /* zona 8 · Babilonia di Nabucodonosor */
 ['mstarga',18590,'VIA PROCESSIONALE'],['mstorcia',18700],['msvia',18860,200],['mstorcia',19040],['msportantina',19240],['msstendardo',19370,0],['mstorcia',19480],['msishtar',19620,0],['msstendardo',19930,1],['mstorcia',20050],['msetemenanki',20230],['mstorcia',20400],['msesagila',20610],['mstorcia',20840],['mspalma',20920,1],['msgiardini',21160],['mstorcia',21420],['msosservatorio',21800],['msstendardo',22030,2],['mstorcia',22120],['msvarco',W1-130]];

const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'mesopotamia',name:'Mesopotamia · Dai campi di Sumer alla Porta di Ishtar',width:W1,sky:['#7a86c0','#f4a8a8','#ffd0a0'],gt:372,gr:['#9a7a48','#7a5a30'],chord:[220,261.6,329.6,392],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerLife)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da mesopotamia.txt) --- */
(function(){
const TOPX_MS={
ms_urlamma:[
["Chi sei e che fai?","Ur-Lamma, quarantaquattro anni, contadino e irrigatore. Cura i campi di orzo del tempio e i miei, con mia moglie e i miei tre dumu. Il mio mestiere è portare l’acqua dove serve e tenerla lontana da dove non serve."],
["Perché la chiamate la terra tra i fiumi?","Perché il Tigri e l’Eufrate scorrono ai due lati: in greco diranno \"Mesopotamia\", appunto \"tra i fiumi\". Le piene vengono in primavera, a volte troppo forti, a volte troppo deboli. Per questo i canali sono la nostra vita."],
["Come funzionano i canali?","Si scavano a mano, con zappe e ceste, e a ogni stagione si ripuliscono dal fango. Piccole chiuse di terra e di canne regolano quanta acqua entra nei campi. Se un vicino ti ruba l’acqua, è guai: per questo ci sono i funzionari che controllano."],
["Cos’è quella leva con il secchio?","Lo shaduf: una pertica che gira su un palo, con il secchio da una parte e un peso di fango dall’altra. Con un po’ di pratica un uomo solo versa il secchio nel canale più alto, senza fatica. Una sua immagine è incisa su un sigillo accadico di circa quattro mila duecento anni fa: la nostra è una trovata vecchia."],
["Cosa coltivate?","Soprattutto orzo, che resiste meglio al sale della terra, e poi un po’ di grano, lenticchie, cipolle e aglio. Fra le palme dei datteri coltiviamo anche gli ortaggi all’ombra. Il še, l’orzo, è tutto: pane, birra e paga."],
["Come si semina?","Con l’aratro di legno tirato da due buoi, che porta un imbuto: il seme cade nel solco mentre si ara, così non si spreca niente. Si semina in autunno, dopo l’allagamento. È un lavoro lungo, e ci vuole una bella schiena."],
["Quando si raccoglie?","In primavera, con tutta la famiglia, e anche i vicini. Si taglia l’orzo con le falci, si lega in covoni e si batte sull’aia. È il periodo più faticoso, ma anche il più allegro: si lavora cantando."],
["Dove vivi?","In una casa di fango e di canne, con il tetto di stuoie. Più a sud, nelle paludi, la gente costruisce case con le canne intrecciate in forma di grande volta, e va a pescare in barca fra i canneti. Sembra poco, ma d’estate ci si sta freschi."],
["Cosa mangiate e bevete?","Pane d’orzo, datteri, cipolle e aglio, pesce del canale e, nei giorni buoni, un po’ di agnello. La sera una scodella di zuppa di lenticchie e un boccale di kaš, la birra, bevuta con la cannuccia. A casa mia nessuno ha mai avuto fame, per fortuna."],
["Cosa fa il tempio con il raccolto?","Ne prende una parte e la conserva nei magazzini, poi la distribuisce ai lavoratori come razione di orzo, di olio e di birra. Gli scribi segnano tutto su tavolette di argilla: i primi segni scritti, a Uruk, servivano proprio a contare orzo e pecore. Così nessuno sbaglia, e nessuno imbroglia, almeno in teoria."],
["Dove vado dopo?","A Uruk, che si vede laggiù: segui il canale e vai verso il bianco del Tempio Bianco, sulla sua terrazza. Lì c’è Gilgamesh, il re, che ha fatto costruire le mura. Fatti raccontare com’è nata la città."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e che l’acqua non ti manchi mai. Se ripassi, ti offro una scodella di zuppa e un pezzo di pane caldo. Buona strada e buon raccolto!"]
],
ms_gilgamesh:[
["Chi sei e che fai?","Gilgamesh, re di Uruk. Nell’elenco dei re sumeri compaio nel XXVII secolo a.C., fra i primi della mia dinastia, ma molti mi conoscono come l’eroe di un poema. Non so quale dei due io preferisca: governare è faticoso, farsi cantare è comodo."],
["Com’è fatta Uruk?","È la città più grande che si conosca: decine di migliaia di abitanti, case a cortile, strade strette, templi con le pareti decorate. Le botteghe stanno raggruppate per mestiere: i vasai da una parte, i fabbri da un’altra. E tutti sentono il profumo del pane."],
["Parlami delle mura.","Circa nove chilometri di mattoni di fango, con torri e porte. Il poema che racconta le mie imprese le elogia, dicendo che brillano come il rame. Che si sappia: ho solo dato ordine, il lavoro l’hanno fatto in tanti."],
["Cos’è Eanna?","La casa di Inanna, la dea dell’amore e della guerra: il quartiere sacro con i templi dalle pareti coperte di coni di argilla rossi, bianchi e neri. Quando il sole li colpisce, sembrano un tappeto. Ogni anno le si portano offerte e canti."],
["E il Tempio Bianco?","È il tempio di Anu, il dio del cielo, in cima a questa terrazza: le pareti sono coperte di gesso bianco, e si vedono da lontano nella pianura. Quando sali, ti sembra di toccare il cielo. Prova a non guardare giù."],
["Chi è Enkidu?","Secondo il poema, il mio amico: un uomo selvaggio creato dagli dèi per tenermi testa. Ci siamo battuti, poi siamo diventati fratelli. Raccontano che senza di lui non avrei fatto metà di quello che ho fatto."],
["Cosa c’entra la foresta dei cedri?","Il poema dice che con Enkidu andammo nella foresta dei cedri a sfidare il guardiano Humbaba. Non so quanto ci sia di vero, ma ai bambini piace sempre. A me piacciono i cedri: il loro legno profuma per mille anni."],
["Cos’è la storia del diluvio?","Cerco l’immortalità, e un saggio sopravvissuto, Utnapishtim, mi racconta di una grande inondazione mandata dagli dèi e di una barca che salvò la vita. È una storia che passa di bocca in bocca, e la ritroverai anche altrove. Alla fine capisco che l’uomo deve morire: ma lascia le mura."],
["Dove sono scritte le tue storie?","Su tavolette di argilla: le copie più famose sono state ritrovate a Ninive, nella biblioteca di Assurbanipal, a metà dell’Ottocento. Una tavoletta con il racconto del diluvio fece scalpore quando fu tradotta. Alla fine, per restare nella memoria bisogna farsi scrivere."],
["Cosa si fa in città di bello?","Si va al tempio, si va al mercato, si beve birra, si ascolta musica. I bambini giocano con le palline di argilla, e per le feste si organizzano processioni. A Uruk c’è sempre qualcosa da festeggiare, e io sono sempre il primo."],
["Dove vado dopo?","A Nippur, dove c’è la scuola degli scribi: la scrittura è nata da queste parti, e lì la insegnano ai ragazzi. Ti aspetta un maestro, Ur-Ningal, con una verga e tanta pazienza. Impara qualcosa, Pierpaolo, che non fa mai male."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando vedrai delle mura, ricordati di me. Le mura restano, e le storie anche. Che gli dèi ti accompagnino!"]
],
ms_urningal:[
["Chi sei e che fai?","Ur-Ningal, cinquantadue anni, scriba e maestro. Insegno ai ragazzi a leggere, a scrivere e a contare, e a fare i conti per i templi e per i mercanti. Un buon scriba non fa mai la fame, Pierpaolo."],
["Cos’è l’edubba?","La \"casa della tavoletta\", la scuola degli scribi. Ha un capo, che si chiama \"padre della casa delle tavolette\", con un aiutante e un maestro che insegna; spesso un allievo più grande, il \"fratello maggiore\", sorveglia i piccoli. Le aule hanno panche basse di mattoni, in file."],
["Com’è nata la scrittura?","Pare a Uruk, intorno al 3300 a.C., per tenere i conti di orzo, pecore e razioni del tempio. All’inizio erano disegni, poi diventarono segni a forma di cuneo. Una cosa nata per fare i conti, che oggi serve anche per i poemi!"],
["Come si scrive?","Si prende un po’ di argilla umida, si forma una tavoletta, e con una canna tagliata a punta si premono i segni. I cunei si fanno con un movimento rapido: la mano tiene la tavoletta e il calamo, e non si sbaglia. Poi si lascia seccare al sole."],
["Cosa si studia?","Prima i segni, poi le liste di parole, in sumerico e in accadico: nomi di animali, piante, mestieri, città. Poi la matematica, la misura dei campi, le leggi, la musica e i testi antichi da imparare a memoria. Si comincia da piccoli e si finisce da grandi: circa dodici anni."],
["Come si contano i numeri?","In base sessanta: con il segno del cuneo si scrive 1, e lo stesso segno vale 60 se si sposta di posto. Non abbiamo il segno dello zero, ma lo si capisce dal contesto. Tuo nipote userà ancora il sessanta, per i minuti dell’ora e per i gradi degli angoli."],
["Com’è una giornata di scuola?","Si arriva presto, si recita la lezione del giorno prima, si copia il modello del maestro su una tavoletta nuova, e a mezzogiorno si mangia. Al pomeriggio altra scrittura, altri esercizi. Un ragazzo ha scritto che tornato a casa raccontò tutto al padre, che fu contento: una giornata riuscita."],
["Chi va a scuola?","Soprattutto figli maschi di scribi, di mercanti, di sacerdoti e di funzionari, perché la scuola costa. Qualche ragazza, se la famiglia ha un mestiere da insegnare, ma sono poche. La dea degli scribi è Nisaba: le si dedicano le prime tavolette."],
["A cosa servono le lettere e i contratti?","Servono per comprare, vendere, prestare, sposarsi, adottare, dividere l’eredità: tutto per iscritto. La tavoletta si chiude in una busta di argilla e si sigilla con un cilindro inciso, davanti ai testimoni. Se qualcuno la rompe, si vede."],
["Perché Nippur è importante?","È la città di Enlil, il dio dei venti e capo degli dèi sumeri: qui vengono i re a farsi benedire. In una delle nostre case della scuola, che gli archeologi chiamano \"Casa F\", sono state trovate moltissime copie degli stessi poemi, scritte dagli allievi. Così sappiamo cosa si studiava."],
["Dove vado dopo?","A Ur, verso sud, dove la grande ziggurat della Luna domina la pianura. Lì c’è Enheduanna, sacerdotessa e poetessa: scriveva così bene che il suo nome è arrivato fino a voi. Salutala da parte mia."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati: chi sa scrivere, ricorda anche per gli altri. Se ripassi, ti do una tavoletta fresca e un calamo. Shulmu, e buona strada!"]
],
ms_enheduanna:[
["Chi sei e che fai?","Sono Enheduanna, \"ornamento del cielo\": è il mio nome di sacerdotessa. Vivo nel Giparu, il complesso della sacerdotessa del dio Luna. Mi occupo dei riti, delle offerte e della vita del tempio, e scrivo inni."],
["Chi è tuo padre?","Sargon di Akkad, re dal 2334 a.C. circa al 2279 a.C. circa: il primo a unire sotto un unico governo le città del nord e del sud della Mesopotamia, quella che chiamate il primo impero. La sua capitale, Akkad, non è mai stata ritrovata. Mi nominò sacerdotessa a Ur per legare le due terre."],
["Che cos’è un’en-sacerdotessa?","La \"en\" è la più alta sacerdotessa del dio Luna: rappresenta la sposa del dio, e la sua figura ha un prestigio quasi regale. Dopo di me molte principesse ricevettero questo incarico. Non sappiamo tutti i dettagli dei compiti, ma ti dico che non c’era tempo per annoiarsi."],
["Cos’è la ziggurat?","Una grande torre a gradoni di mattoni, con il tempio del dio in cima. Quella che vedi è stata costruita dopo di me dal re Ur-Nammu, con mattoni cotti legati con il bitume. Il dio Nanna, la luna, è il patrono di Ur: la città porta quasi il suo nome."],
["Cosa mangiano gli dèi?","Ogni giorno i sacerdoti portano alla statua del dio pane, datteri, carne e birra, come a un re in casa sua, e la vestono con abiti nuovi. Poi le offerte vengono distribuite al personale del tempio. Si dice che il dio mangi, ma sono sempre i sacerdoti a sparecchiare."],
["Cosa scrivi?","Inni agli dèi e ai loro templi, e due poemi alla dea Inanna, fra cui \"L’esaltazione di Inanna\", di oltre cento righe. È uno dei primi casi in cui una persona firma ciò che ha scritto: ne vado un po’ fiera."],
["Perché fosti allontanata?","Un uomo di nome Lugal-Ane prese il potere a Ur e mi cacciò dal Giparu, perché non confermai la sua autorità. Pregai Inanna di aiutarmi, e alla fine tornai al mio posto. Non è bello essere cacciati, ma una poetessa sa trasformare tutto in versi."],
["Come si conta il tempo?","Con la luna: il mese comincia quando si vede la falce nuova, e ci sono dodici mesi nell’anno. Ogni tanto si aggiunge un mese in più per far tornare i conti con il sole. Per questo, a Ur, la luna è anche il nostro calendario."],
["E la musica?","A Ur la musica non manca mai: lire con la testa di toro, arpe, tamburi e cori di sacerdoti. Quando la lira suona, il tempio sembra respirare. Lo si vede anche nelle tombe dei re, dove ne hanno trovato molte."],
["E il disco con il tuo nome?","È un disco di alabastro, grande circa come un piatto, con la mia figura mentre faccio un’offerta e una scritta sul retro che dice chi sono. Fu trovato nel 1927 dall’archeologo Leonard Woolley fra le rovine del mio Giparu, spezzato in pezzi e poi ricomposto. Non mi lamento: dopo quattromila anni sono ancora qui."],
["Dove vado dopo?","A nord, a Babilonia, dove un re chiamato Hammurabi ha scritto le leggi su una pietra. Ci vogliono giorni di cammino, ma il tempo qui si piega, e tu arrivi subito. Portagli i miei saluti, ma non chiedergli se ha letto i miei inni."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e che la luna ti sia amica. Se vedi un altare, fermati un momento: il silenzio è la preghiera più antica. Shulmu, e buona strada!"]
],
ms_hammurabi:[
["Chi sei e che fai?","Hammurabi, sesto re della dinastia amorrea di Babilonia, al governo dal 1792 al 1750 a.C. circa. Ho unito sotto la mia autorità gran parte della Mesopotamia, da Sumer ai confini del nord. Un re deve difendere i suoi, e farli vivere in pace."],
["Com’è Babilonia?","Una città sull’Eufrate, con mura di mattoni, canali e templi: non è ancora la capitale più grande di tutte, ma lo diventerà. Il suo dio protettore è Marduk. Le case sono a cortile, con tetti piatti dove d’estate si dorme all’aria aperta."],
["Perché hai scritto le leggi su una pietra?","Perché tutti potessero vederle e nessuno potesse dire di non conoscerle. La stele è alta circa due metri e venticinque, di pietra scura, con in cima me davanti al dio Sole Shamash, dio della giustizia. Una legge scritta è più difficile da piegare di una legge a voce."],
["Quante leggi ci sono?","Duecentottantadue, scritte in cuneiforme: casi concreti, uno dopo l’altro, nella forma \"se un uomo fa questo, allora gli accade quest’altro\". Qualcuna è dura, come la legge che pretende un danno uguale a quello causato. Ma in tutte c’è l’idea che il forte non debba schiacciare il debole."],
["Cosa dicono sul lavoro?","Ci sono norme per i costruttori di case, che devono rispondere dei crolli, per i barcaioli, per i pastori, per i medici, per i mercanti e per chi prende denaro in prestito. Ognuno sa cosa rischia e cosa gli spetta. È un po’ come un contratto fra il re e il popolo."],
["Com’è la società?","Ci sono gli uomini liberi, quelli che dipendono dal palazzo e gli schiavi, ognuno con diritti e doveri diversi. Gli schiavi, spesso prigionieri o debitori, lavorano in casa o nei campi, ma possono comprare la propria libertà. Non è un mondo giusto per tutti, e lo dico con sincerità."],
["E la famiglia?","Il matrimonio si fa con un contratto scritto, con la dote della sposa, che resta sua. Si può adottare un figlio, e chi non ha eredi lo fa spesso. Una moglie può avere beni propri, fare affari e andare in tribunale."],
["Come governi?","Scrivo molte lettere ai miei funzionari: dico di ripulire un canale, di risolvere una lite, di pagare una razione di orzo. Ogni anno del mio regno ha un nome, legato a un fatto importante: l’anno in cui ho costruito un tempio, quello in cui ho scavato un canale. Così i conti tornano."],
["Perché ti stanno tanto a cuore i canali?","Perché un canale pulito vale più di un esercito: porta l’acqua ai campi, fa crescere l’orzo e tiene lontana la fame. Nelle mie lettere ai funzionari ordino spesso di ripulirli prima della piena, e di non lasciare che i vicini si rubino l’acqua. Un re che dimentica i canali dimentica il suo popolo."],
["Dove sta ora la tua stele?","Lontano: nel XII secolo a.C. un re dell’Elam la portò come bottino a Susa, nell’attuale Iran, e lì fu ritrovata nel 1901 da una spedizione francese. Oggi si trova al museo del Louvre, a Parigi. Una pietra che ha viaggiato più di me."],
["Dove vado dopo?","Al porto, sul fiume: da lì ripartono le barche e si incontrano i mercanti. C’è una taverna dove una donna, Amat-Shamash, serve birra e racconta storie. Ricordati di pagare in orzo, se puoi."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e cammina con la verità: è il miglior bagaglio. Se hai un problema, un buon giudice è sempre dalla parte della kittum. Shulmu, e buona strada!"]
],
ms_amat:[
["Chi sei e che fai?","Amat-Shamash, quarantasette anni, taverniera e birraia. La taverna è mia, e la birra la faccio io con le mie mani. Le donne hanno sempre fatto la birra, qui: è un mestiere antico."],
["Come si fa la birra?","Si impasta e si cuoce un pane d’orzo, lo si sbriciola in acqua con del malto e lo si lascia fermentare in grandi giare. Poi si filtra e si aggiunge qualche aroma, magari del miele o dei datteri. Ci sono birre chiare, scure, dolci, forti: ne facciamo di molte varietà."],
["Perché si beve con la cannuccia?","Perché in fondo alla giara restano i pezzetti di orzo, e con la cannuccia lunga si beve il liquido senza ingoiarli. Si passa la giara in giro, e ognuno ha la sua. Un modo di stare insieme, più che di bere."],
["Chi è Ninkasi?","La dea della birra: un inno a lei, scritto intorno al 1800 a.C. ma molto più antico, è anche una specie di ricetta, che si ricordava cantandola. Lo cantano le birraie mentre lavorano. Se la birra viene male, di solito la colpa è mia, non sua."],
["Quanto costa una birra?","Si paga in orzo, in argento o con altro: un boccale per tanto orzo, secondo la misura. Anche gli operai ricevono la birra come parte della paga, insieme al pane e all’olio. Il buon umore, per fortuna, è gratis."],
["Cosa dicono le leggi sulle taverne?","Le leggi del re Hammurabi pretendono che la taverniera accetti orzo in pagamento a misura giusta, e che non versi \"poco\" per imbrogliare: chi imbroglia rischia di finire in acqua. Se in taverna si riuniscono dei cospiratori, bisogna avvertire le autorità. Io rispetto tutto, e non ho mai avuto guai."],
["Cosa si mangia?","Pane caldo, stufati di agnello o di capra con cipolle, porri e aglio, pesce del fiume, formaggio, datteri. Alcune ricette dei cuochi del palazzo, scritte intorno al 1750 a.C. su tre tavolette, sono arrivate fino a voi: più di trenta. Ma da me si mangia più semplice, e si mangia di più."],
["Cosa arriva al porto?","Orzo, lana, datteri, pesce, e da lontano rame, legno di cedro, lapislazzuli e stoffe. Si dice che le navi vengano da Dilmun, Magan e Meluhha, paesi dall’altra parte del mare. Ogni carico ha il suo odore, e io riconosco il rame dal fiuto."],
["Come si pesa e si contratta?","Con la bilancia a due piatti e i pesi di pietra: la mina e il siclo sono le misure dell’argento. Ogni accordo si mette per iscritto su una tavoletta, con il sigillo a cilindro di chi compra e di chi vende, e due testimoni. Chi contratta con un sorriso paga meno."],
["Come ci si diverte?","Con la musica, con i canti e con i giochi da tavolo: c’è un gioco con una scacchiera di venti caselle, il \"gioco reale di Ur\", che si fa con i dadi a punta, e se ne trovano di bellissimi. I bambini giocano con trottole e palline di argilla. E si chiacchiera, soprattutto."],
["Dove vado dopo?","A nord, molto a nord, fino a Ninive, sul Tigri: è la capitale degli assiri, e il loro re Assurbanipal ha una biblioteca grande come un tempio. Là ci sono più tavolette di quante ne puoi contare. Prendi una brocca d’acqua per il viaggio."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se passi di qui di sera, la prima giara è per te. Ricordati di brindare come si deve: con gli occhi negli occhi. Shulmu, e buon cammino!"]
],
ms_assurbanipal:[
["Chi sei e che fai?","Assurbanipal, re d’Assiria dal 668 a.C. circa. Governo un grande impero, dall’Egitto alla Mesopotamia, e mi occupo di guerre, di templi e di libri. Delle tre cose, la terza è quella che mi riesce meglio."],
["Com’è Ninive?","Una grande città sul Tigri, con mura alte, molte porte e palazzi con le scalinate e i rilievi. Mio nonno Sennacherib la fece ingrandire: un acquedotto di pietra portava l’acqua dai monti, e le strade erano larghe. Ci vive moltissima gente."],
["Come si governa l’impero?","Con governatori nelle province, con messaggeri che portano lettere sulle strade e con un grande esercito di fanti e di carri. Ogni provincia paga tributi in argento, grano o cavalli. Ma il vero strumento del re è la tavoletta: tutto ciò che accade, lo scrivo o lo faccio scrivere."],
["Parlami della tua biblioteca.","Raccolgo tavolette da tutto il paese: poemi, preghiere, presagi, liste di parole, ricette di medicina, lettere. Nei secoli ne verranno ritrovate circa trentamila, fra tavolette intere e frammenti. È il mio vanto: un re che conserva la memoria del mondo."],
["Come l’hai messa insieme?","Con ordini ai miei scribi: copiare testi dai templi di Babilonia e delle altre città, e portarli qui a Ninive. Ogni tavoletta porta una formula in fondo, con il mio nome. Un buon libro, Pierpaolo, vale un esercito: il primo non si arrende mai."],
["Cosa c’è nei tuoi scaffali?","Di tutto: il poema di Gilgamesh, gli inni agli dèi, i presagi sul cielo e sulle viscere degli animali, le tavolette di medicina con erbe e unguenti, e i dizionari con le parole sumeriche e accadiche. Per un re, sapere è una forma di potere."],
["Sai davvero leggere?","Sì, e ne vado fiero: ho studiato l’arte dello scriba, con i suoi segni, e ho imparato a leggere le vecchie tavolette sumeriche e accadiche. Pochi re lo fanno. Ma devo confessare che a volte il mio scriba corregge i miei errori in silenzio."],
["Cos’è la caccia al leone?","Una cerimonia reale: i leoni, portati in gabbia, venivano liberati davanti al re, che li affrontava con l’arco e la lancia. I rilievi del mio palazzo la mostrano con grande drammaticità. Si doveva vedere un re forte: e un re forte dev’essere anche ben protetto."],
["Cosa sono i tori alati?","I lamassu: guardiani di pietra con corpo di toro, ali di uccello e testa d’uomo, posti ai portali dei palazzi per tenere lontano il male. Hanno cinque zampe, quando si guardano di lato, per sembrare in cammino anche di fronte. Un trucco da scultori."],
["Come è finita Ninive?","Nel 612 a.C., dopo la mia morte, una coalizione di babilonesi e di medi la conquistò e la incendiò. Fu un fatto doloroso: l’incendio, però, cuocendo l’argilla, conservò le tavolette fino a quando furono ritrovate nell’Ottocento. Ironia della storia: il fuoco salvò la mia biblioteca."],
["Dove vado dopo?","A Babilonia, a sud, dove regnerà un re di nome Nabucodonosor: quella città, dopo la mia, tornerà ad essere la più splendida. Ha costruito una porta azzurra che vale da sola il viaggio. Sii gentile, e saluta le sue stelle."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se trovi una tavoletta per terra, rispettala: dentro c’è la voce di qualcuno. Se ripassi, ti faccio fare una copia. Shulmu, e che i miei dèi ti proteggano!"]
],
ms_nabucodonosor:[
["Chi sei e che fai?","Nabucodonosor, secondo di questo nome, re di Babilonia dal 605 a.C., quando morì mio padre Nabopolassar. Ho fatto di Babilonia una capitale ricca e splendida, con nuove mura, palazzi e templi. Un re deve lasciare qualcosa di bello, oltre alle guerre."],
["Com’è Babilonia?","Una grande città sull’Eufrate, circondata da una doppia cinta di mura e attraversata dal fiume, con un ponte, i templi e il palazzo. Le sue strade sono ampie e le sue porte monumentali. A volte penso che la città sia più bella di me."],
["Parlami della Porta di Ishtar.","È l’ottava porta della città, costruita intorno al 575 a.C.: la facciata è di mattoni smaltati di un azzurro profondo, con file di tori, simbolo di Adad, e di draghi, simbolo di Marduk. Il tetto e i battenti erano di cedro. Con il sole sembra fatta di lapislazzuli."],
["E la Via Processionale?","Lunga circa ottocento metri, lastricata di pietre rosse e gialle, fra due muri azzurri decorati con oltre cento leoni, animale di Ishtar. Sotto le pietre abbiamo scritto una preghiera a Marduk. Ci passano le statue degli dèi nei giorni più belli dell’anno."],
["Cos’è la festa di Capodanno?","Si chiama Akitu e si celebra in primavera, per diversi giorni: il re si inchina davanti a Marduk, si leggono i poemi della creazione e le statue degli dèi escono in processione dal tempio, attraverso questa porta, fino a una casa fuori dalla città. È la festa più importante dell’anno."],
["Cos’è la ziggurat?","L’Etemenanki, la \"casa del fondamento del cielo e della terra\": una torre a gradoni di mattoni, altissima, accanto al tempio di Marduk, chiamato Esagila. Secondo alcuni studiosi è la torre che ha ispirato il racconto biblico di Babele. Io so soltanto che i miei mattonai la restaurarono con cura."],
["E i giardini pensili?","Se ne parla molto, nei racconti dei greci: giardini a terrazze costruiti, si dice, per una regina che sentiva la nostalgia dei monti. Ma non ne è mai stata trovata alcuna traccia a Babilonia. Io ti dico che i giardini ci sono, e che nessuno ha fatto un bel giardino senza acqua."],
["Come studiate le stelle?","I nostri astronomi salgono sulle terrazze dei templi e osservano ogni notte la luna, i pianeti e le stelle, annotando tutto su tavolette. Il mese comincia con la falce nuova, e a poco a poco si impara a prevedere le eclissi di luna. Per noi il cielo è un grande libro, e gli dèi lo scrivono ogni notte."],
["Com’è la notte a Babilonia?","Le torce sono accese sulle mura e sulle porte, il fiume riflette la luna, le terrazze si riempiono di famiglie che cercano il fresco. In estate molti dormono sui tetti. E gli astronomi, lassù, contano il tempo che passa."],
["Cosa rimarrà di tutto questo?","Le rovine, e qualche mattone azzurro. All’inizio del Novecento l’archeologo tedesco Robert Koldewey, dopo anni di scavi a Babilonia, riportò alla luce la porta e la via: oggi una parte è stata ricostruita in un museo di Berlino. Non è la stessa cosa che qui, di notte, ma è un bel segno di rispetto."],
["Dove vado dopo?","Avanti, verso la Porta di Ishtar: attraversala quando le torce sono alte. Oltre c’è un altro mondo, e un altro tempo. Non avere paura: la luce passa comunque."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e che Marduk e Nabu ti guidino. Se un giorno ti capita di vedere un mattone azzurro, ricordati di me. Shulmu, e buon viaggio fra le stelle!"]
]
};
Object.assign(TOPX,TOPX_MS);
})();
