/* ---------- ANTICO EGITTO · Dai campi del Nilo al Faro di Alessandria (campi e villaggio sul Nilo, Saqqara e Giza, Menfi e la scuola degli scribi, Tebe e Karnak, la Valle dei Re, Elefantina, Abu Simbel, Alessandria) ---------- */
/* Un'intera giornata da sinistra a destra, e un tempo che si piega: alba nei campi lungo il Nilo, mattina a Saqqara e a Giza sotto le prime piramidi, tarda mattina a Menfi nella scuola degli scribi,
   mezzogiorno a Tebe fra Karnak e Deir el-Bahari, primo pomeriggio nel villaggio degli artigiani e nella Valle dei Re, pomeriggio al porto di Elefantina, tardo pomeriggio ad Abu Simbel davanti ai colossi di Ramses II,
   tramonto e notte ad Alessandria fra la Biblioteca e il Faro. In fondo il Faro acceso: il suo fuoco sul mare è il varco.
   Testi, tappe e dialoghi vengono da egitto.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico). Gli oggetti stanno in elementi.js (nomi che iniziano per "eg").
   Il tono per i temi dolorosi (mummificazione, morte, guerre, la fine dell'Egitto indipendente) è sobrio e rispettoso; tradizioni e questioni discusse sono presentate con "si dice", "secondo la tradizione" o "secondo gli studiosi". */
(function(){
const GT=372,W1=22600;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const E=PR._eg,{nf,lit,pers,man,gente,TUN,SKN,OCR,palma,pap,canne,asino,pecora,cane,airone,volo,mud,merli,casa,ln,gatto,oca,croco,sciacallo,cavallo,falco,piram,pilone,osiri,sfingeAr,seduto,sacerdote}=E;
const md=(i,n)=>((i%n)+n)%n;
const Z=[0,2700,5400,8000,10600,13200,15800,18400,W1+400];   /* inizio di ognuna delle 8 zone */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* ---- cielo: alba rosa e arancio, mattina limpida, mezzogiorno bianco, pomeriggio dorato, tardo pomeriggio arancio, tramonto rosso e viola, crepuscolo blu, notte stellata ---- */
const SKY=[[0,['#7a86c0','#f4a8a8','#ffd0a0']],[1400,['#4a9cf0','#b4d8f4','#f6ecd0']],[2700,['#3a8cec','#7cbcf4','#e2f0f8']],[8000,['#2a7ee0','#6ab4f0','#e8f0f0']],[10600,['#3a80d8','#a8cae8','#f4f2e6']],[13200,['#4a84d4','#b4c8e4','#f8e4b8']],[15800,['#5a84c8','#e8c898','#ffd890']],[17200,['#7a78b8','#f4a870','#ffc078']],[18400,['#6a4a98','#e8704a','#ffa860']],[19400,['#3a2a88','#8a4a98','#f08060']],[20400,['#0c0c38','#1c1c60','#3a2a70']],[W1+400,['#080830','#141450','#2a2268']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,8*s);el(g,c,x-18*s,y+2*s,22*s,6*s);el(g,c,x+20*s,y+2*s,24*s,6*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Antico Egitto, dall’alba alla notte. Parti dai campi lungo il Nilo, dove tutto dipende dalla piena del fiume; poi Saqqara e Giza, dove nascono le prime piramidi. Nella tarda mattina Menfi e la scuola degli scribi, dove si imparano i segni degli dèi; a mezzogiorno Tebe, fra le colonne di Karnak e le terrazze del tempio di Hatshepsut. Nel primo pomeriggio il villaggio segreto degli artigiani e la Valle dei Re; poi Elefantina, dove si baratta di tutto sotto le tende. Nel tardo pomeriggio Abu Simbel, con i colossi di Ramses II; al tramonto Alessandria, la Biblioteca e il Faro; e di notte la luce del grande fuoco sul mare. Il tempo qui si piega: re, scribi, contadini e regine di ogni epoca ti vengono incontro.";
const LKTXT=[
"Il Nilo è la vita dell’Egitto: ogni estate esce dal suo letto e lascia sui campi un limo nero e fertile. Gli egizi chiamano la loro terra Kemet, la \"terra nera\", e il deserto intorno Deshret, la \"terra rossa\". Senza il fiume qui ci sarebbe solo sabbia.",
"Lo shaduf è una leva con un secchio da un lato e un contrappeso dall’altro, usata per sollevare l’acqua dal canale al campo. In Egitto arriva con il Nuovo Regno, circa 1500 anni prima di Cristo, e resterà in uso per millenni.",
"Si semina dopo la piena e si raccoglie in primavera: i cereali principali sono il farro, per il pane, e l’orzo, per la birra. Si miete con la falce, si batte il grano sull’aia con i buoi, e gli scribi misurano e registrano tutto, perché una parte va al tempio e al re.",
"Il villaggio si sveglia con il sole: il pane cuoce nei forni di terra, le donne macinano il grano e preparano la birra, i bambini corrono dietro alle oche. Le case sono di mattoni di fango seccati al sole, con il tetto piatto dove d’estate si dorme al fresco.",
"La piramide del re Djoser, costruita intorno al 2670 a.C.: sei gradoni di pietra calcarea, alta circa sessanta metri. È il primo grande edificio d’Egitto tutto di pietra e, secondo l’iscrizione su una statua del re, l’architetto fu Imhotep.",
"La Grande Piramide di Giza, la tomba del re Cheope, costruita intorno al 2560 a.C.: era alta circa centoquarantasei metri ed è fatta con oltre due milioni di blocchi. Per quasi quattromila anni è stata la costruzione più alta del mondo.",
"La Grande Sfinge, un leone accovacciato con la testa di un re, è scolpita nella roccia: lunga circa settantatré metri e alta venti. La maggior parte degli studiosi pensa che il volto sia quello del re Chefren, figlio di Cheope.",
"I costruttori delle piramidi non erano schiavi: a Giza gli scavi hanno trovato un villaggio con panifici, birrifici, magazzini e le tombe degli operai. Lavoravano in squadre con nomi come \"Amici di Cheope\" e ricevevano pane, birra e carne.",
"Menfi, in egizio Ineb-hedj, i \"Muri Bianchi\": secondo la tradizione fu fondata dal primo re, chiamato Menes, intorno al 3100 a.C. Per secoli è una capitale, con il grande tempio di Ptah, il dio degli artigiani.",
"Gli scribi imparano i geroglifici, \"le parole del dio\", ma nella vita di tutti i giorni usano una scrittura corsiva, lo ieratico. Si studia per anni, copiando testi a memoria su cocci di calcare, perché il papiro costa troppo.",
"Il papiro si ricava dagli steli di una pianta dei canneti: si tagliano a strisce, si incrociano, si pressano e si incollano in rotoli. Si scrive con un pennello di giunco e due inchiostri solidi, nero di carbone e rosso di ocra, che si bagnano su una tavolozza.",
"La Casa della Vita, in egizio Per-ankh, è la parte del tempio dove si copiano e si conservano i libri: testi religiosi, di medicina, di astronomia. Vi lavorano scribi, sacerdoti e medici.",
"Karnak è il grande tempio di Amon-Ra, il dio di Tebe, e quasi ogni re lo ha ingrandito, per circa duemila anni. Un viale di sfingi con la testa di ariete lo collega al tempio di Luxor, per quasi tre chilometri.",
"La Grande Sala Ipostila: una foresta di 134 colonne di pietra a forma di steli di papiro, alte al centro fino a circa venti metri. Fu fatta costruire dal re Seti I e completata da Ramses II, che la fecero coprire di rilievi dipinti.",
"Un obelisco è un pilastro di un solo pezzo di granito, con la punta a piramide. Hatshepsut ne fece alzare due a Karnak, alti circa trenta metri: uno è ancora in piedi ed è il più alto obelisco antico rimasto.",
"Il tempio di Hatshepsut a Deir el-Bahari si chiama Djeser-Djeseru, il \"Sublime dei sublimi\": tre terrazze con lunghi portici, che salgono verso la scogliera. Sulle pareti sono scolpiti i racconti del suo regno, fra cui il viaggio nella terra di Punt.",
"Set-Maat, il \"Luogo della Verità\", è il villaggio dove vivono gli artigiani che scavano e decorano le tombe dei re: oggi si chiama Deir el-Medina. Fu costruito apposta, con poche decine di case a schiera, circondato da un muro, a circa mezz’ora di cammino dalla Valle.",
"Dal Nuovo Regno i re non costruiscono più piramidi, ma si fanno scavare tombe nella roccia, in una valle nascosta sotto una cima a forma di piramide. Ne sono state trovate più di sessanta; la più famosa è quella del giovane re Tutankhamon, scoperta nel 1922.",
"Dentro la roccia si scava un lungo corridoio, si intonaca con il gesso, si traccia il disegno con una griglia di righe rosse, poi gli scultori incidono e i pittori colorano. Fra i colori c’è il blu egizio, il primo pigmento fabbricato dall’uomo.",
"Gli artigiani scrivevano appunti, lettere, conti, poesie e disegni su cocci di calcare, e ne restano più di diecimila. Da questi documenti sappiamo del primo sciopero registrato nella storia: nell’anno 29 di Ramses III, intorno al 1157 a.C., gli operai smisero di lavorare perché le razioni di grano erano in ritardo.",
"Elefantina, in egizio Abu, è un’isola nel Nilo al confine sud del paese, accanto alla Prima Cataratta. Il suo nome greco ricorda gli elefanti, o meglio l’avorio che arrivava da sud: da qui si commercia con la Nubia.",
"Nel mercato si baratta: le monete in Egitto non esistono ancora, e il valore si misura in deben, un peso di rame di circa novanta grammi. Una tunica, un paio di sandali o un pesce si pagano con altre merci.",
"Il nilometro è una scala di pietra che scende nell’acqua, con tacche per misurare la piena. Dal livello del fiume si capisce se il raccolto sarà buono o scarso, e di conseguenza quante tasse chiedere.",
"Ad Assuan si cava il granito rosa per obelischi, statue e sarcofagi: si batte la roccia con grosse sfere di pietra dura e si trasporta con slitte e barche. In una cava è rimasto un enorme obelisco incompiuto, abbandonato perché si è incrinato.",
"Il Grande Tempio di Abu Simbel è scavato in una parete di roccia in Nubia, per volontà di Ramses II. La facciata ha quattro statue del re seduto, alte circa venti metri, con ai piedi le statue più piccole dei suoi familiari.",
"Dentro il tempio, un lungo corridoio arriva al santuario con quattro statue sedute. Due volte l’anno, il 22 febbraio e il 22 ottobre, il sole entra fino in fondo e ne illumina tre; la quarta, il dio Ptah, resta nell’ombra.",
"Accanto sorge un tempio più piccolo, dedicato alla dea Hathor e alla regina Nefertari, la sposa preferita di Ramses. Sulla facciata le statue della regina sono alte quanto quelle del re: un onore molto raro.",
"Sulle pareti della prima sala il re racconta la battaglia di Kadesh contro gli Ittiti, nel 1274 a.C.: carri, soldati, accampamenti. Nei rilievi è una grande vittoria, ma per molti studiosi finì in parità, e anni dopo i due imperi firmarono un trattato di pace.",
"Il Faro sorge sull’isola di Pharos, davanti al porto: fu costruito intorno al 280 a.C. ed era alto più di cento metri, in tre parti, con la base quadrata, il tratto ottagonale e la cima rotonda. Di notte in cima brucia un fuoco; secondo fonti arabe uno specchio ne rifletteva la luce. Crollò a poco a poco per i terremoti, fino al Trecento.",
"Il Mouseion è il centro dove vivono e lavorano studiosi di tutto il Mediterraneo; accanto c’è la Biblioteca, con una grande raccolta di rotoli. Qui lavorano scienziati come Euclide ed Eratostene, che misurò la circonferenza della Terra.",
"Alessandria fu fondata nel 332 a.C. da Alessandro Magno e per tre secoli fu la capitale dei re macedoni d’Egitto, i Tolomei. Qui greci, egizi ed ebrei vivono fianco a fianco, e nel quartiere reale i palazzi si affacciano sul porto.",
"Per gli egizi il cielo è la dea Nut, che inghiotte il sole la sera e lo partorisce all’alba. Fra le stelle si aspetta Sopdet, quella che noi chiamiamo Sirio: la sua ricomparsa all’alba annuncia, più o meno, l’arrivo della piena e l’inizio dell’anno.",
"Sotto la luce del Faro, la strada continua."
];
const NAME={
eg_padi:"Padi, il contadino",
eg_imhotep:"Imhotep, architetto del re Djoser",
eg_meryra:"Meryra, lo scriba",
eg_hatshepsut:"Hatshepsut, regina e faraone",
eg_hori:"Hori, il pittore di tombe",
eg_henut:"Henut, la mercante",
eg_ramses:"Ramses II, re d’Egitto",
eg_cleopatra:"Cleopatra VII, regina d’Egitto"
};
const GREET={
eg_padi:"Ehi, Pierpaolo! Vieni giù sull’argine, che all’alba il fiume è tutto d’argento. Sono Padi e ho i piedi nel Kemet, la terra nera, da quando avevo cinque anni: più in là comincia la Deshret, la terra rossa, e lì non cresce niente.",
eg_imhotep:"Benvenuto, Pierpaolo. Sono Imhotep: il mio nome vuol dire \"colui che viene in pace\", e spero che ti porti fortuna. Questa che vedi è la casa eterna del mio re, Djoser: invece di una tomba bassa, come si è sempre fatto, ho messo tante tombe una sopra l’altra, come una scala verso il cielo.",
eg_meryra:"Entra, Pierpaolo, e siediti sulla stuoia: si scrive in ginocchio, con la schiena dritta. Sono Meryra, sesh di Menfi. Qui si insegnano i medu netjer, \"le parole del dio\", che voi chiamerete geroglifici: ma attento, ci vogliono anni.",
eg_hatshepsut:"Benvenuto, Pierpaolo, nel mio Djeser-Djeseru. Sono Hatshepsut, figlia di Thutmose I, e porto i titoli di re: per il mondo sono Maatkara, \"la verità è l’anima di Ra\". Sali piano le rampe: il tempio l’ho fatto bello, non comodo.",
eg_hori:"Shh, Pierpaolo, piano: siamo nella Valle e qui si lavora in silenzio. Sono Hori, disegnatore di tombe, e vengo dal villaggio di Set-Maat, il Luogo della Verità. Io coloro le pareti dove i re vivranno per sempre: entra, ma abbassa la testa e non toccare il rosso, è ancora fresco.",
eg_henut:"Ankh, udja, seneb, Pierpaolo! Vieni sotto la tenda, che il sole di Abu picchia come un fabbro. Sono Henut e qui, all’isola dell’avorio, passa tutto: oro, ebano, pelli di leopardo e qualunque cosa tu abbia da barattare. Dai, dimmi cosa mi porti.",
eg_ramses:"Avvicinati, Pierpaolo, e non farti spaventare dalla mia faccia: lassù ce l’ho più grande di te di venti metri. Sono Usermaatra-Setepenra, che voi chiamerete Ramses. Ho regnato più di sessant’anni e, quando una cosa mi piace, la faccio di pietra.",
eg_cleopatra:"Benvenuto, Pierpaolo, ad Alessandria, la città che Alessandro volle sul mare e che i miei antenati hanno reso la più splendida del mondo. Sono Cleopatra, settima di questo nome, regina d’Egitto. Guarda il Faro: lo accendono ogni sera, e questa sera lo accendono anche per te."
};

/* ---- livello 0: cielo, sole, luna sottile, stelle, pochissime nuvole ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-19000)/1800,0,1);if(nt>0)for(let i=0;i<80;i++)star(g,hr(i*3)*480,hr(i*7+1)*270,1+(i%4==0),nt*.9*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/19600,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*255;
 if(xs<19900){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,120,0)');g.fillStyle=sg;g.fillRect(sx-250,sy-250,500,500);dot(g,'rgba(255,'+Math.round(250-low*80)+','+Math.round(215-low*110)+',1)',sx,sy,15+low*7)}
 const mu=cl((xs-19600)/2200,0,1);if(mu>0){const mx=380-mu*130,my=300-mu*196;dot(g,'rgba(255,248,215,.12)',mx,my,30);g.fillStyle='#f6f0d6';g.beginPath();g.arc(mx,my,12,-Math.PI/2,Math.PI/2,true);g.bezierCurveTo(mx-4,my+9,mx-4,my-9,mx,my-12);g.fill()}
 const cc=xs<2700?'rgba(252,206,214,.5)':xs<13200?'rgba(255,255,255,.4)':xs<17000?'rgba(255,224,170,.45)':xs<19200?'rgba(255,150,120,.5)':'rgba(140,120,190,.25)';
 each(o-((t*4)%420)*.02,420,1,(x,i,r)=>{if(r>.3)return;nube(g,x+r*100,50+r*50,.6+r*.7,cc)});
 const fo=cl(1-xs/2800,0,1)*.3;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const dust=cl((xs-8000)/1200,0,1)*cl((18400-xs)/1400,0,1)*.1;if(dust>.01){g.fillStyle='rgba(255,208,120,'+dust+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-17400)/900,0,1)*cl((19800-xs)/1000,0,1)*.24;if(wg>.01){g.fillStyle='rgba(255,90,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}

/* ---- livello 1: orizzonte lontano: Nilo, campi e deserto, piramidi nella foschia, mura di Menfi, Karnak, la scogliera di Deir el-Bahari, la cima della Valle, il granito di Assuan, la roccia di Abu Simbel, il mare con il Faro ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(mixs(c,'#b8c4dc',.3),'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const base=(sx,w,c)=>{g.fillStyle=dim(c);g.beginPath();g.moveTo(sx-w,hz+34);for(let q=0;q<=24;q++){const px=sx-w+q*w/12;g.lineTo(px,hz+8-4*Math.abs(Math.sin(q*.9))-3*Math.sin(q*2.1))}g.lineTo(sx+w,hz+34);g.closePath();g.fill()};
 const torches=(sx,x0,x1,n)=>{if(night>.2)for(let q=0;q<n;q++){const tx=sx+x0+(x1-x0)*q/(n-1);glow(g,tx,hz+4,12,'255,180,80',.7*Math.min(1,night+.1));dot(g,'rgba(255,220,140,.95)',tx,hz+4,1.4)}};
 /* il Nilo: fascia verde dei campi, il fiume lucido e subito la sabbia rossa del deserto, palme e qualche piramide nella foschia (zone 1-2) */
 const f1=env(1700,5200);if(f1>.02){g.globalAlpha=f1;const sx=fx(1700);base(sx,450,'#c89a6a');rect(g,dim('#b8603a'),sx-450,hz+10,900,8);rect(g,dim('#5a9a40'),sx-450,hz+16,900,10);rect(g,dim('#8ab4c8'),sx-450,hz+26,900,6);for(let q=0;q<6;q++)rect(g,'rgba(255,255,255,.4)',sx-400+q*150,hz+28,60,1.4);
  for(let q=0;q<26;q++){const ax=sx-430+q*34+hr(q)*10;rect(g,dim('#4a3a22'),ax,hz-6,1.6,16);for(let r=0;r<4;r++)ln(g,dim('#3f7a38'),1.4,[ax+.8,hz-6,ax+.8+(r-1.5)*5,hz-2+(r%2)*2])}
  [[-300,30,18],[-160,22,14]].forEach(p=>poly(g,dim('#e6d2a2'),[[sx+p[0]-p[1],hz+10],[sx+p[0],hz+10-p[2]],[sx+p[0]+p[1],hz+10]]));g.globalAlpha=1}
 /* piramidi di Saqqara e di Giza sul bordo del deserto (zone 2) */
 const gz=env(4300,4400);if(gz>.02){g.globalAlpha=gz;const sx=fx(4300);base(sx,420,'#d0aa72');zigg_(g,sx-170,hz+14,64,44,dim('#e0cc9c'));poly(g,dim('#efe2bc'),[[sx-30,hz+14],[sx+24,hz-52],[sx+78,hz+14]]);poly(g,dim('#d0bc8c'),[[sx+24,hz-52],[sx+78,hz+14],[sx+34,hz+14]]);poly(g,dim('#e8d8aa'),[[sx+70,hz+14],[sx+112,hz-34],[sx+154,hz+14]]);poly(g,dim('#d0bc8c'),[[sx+112,hz-34],[sx+154,hz+14],[sx+120,hz+14]]);poly(g,dim('#e8d8aa'),[[sx+150,hz+14],[sx+176,hz-18],[sx+204,hz+14]]);g.globalAlpha=1}
 /* le mura bianche di Menfi e il tempio di Ptah (zone 3) */
 const mf=env(6700,4600);if(mf>.02){g.globalAlpha=mf;const sx=fx(6700);base(sx,380,'#c0a878');rect(g,dim('#efe6c8'),sx-360,hz-4,720,20);merli(g,sx-360,hz-4,720,dim('#ddd0aa'),58);[[-160,16,40],[-100,22,58],[-30,16,44],[40,24,64],[110,18,48],[180,22,56]].forEach(b=>{rect(g,dim('#e8dcb8'),sx+b[0],hz+14-b[2],b[1],b[2]);rect(g,'rgba(0,0,0,.12)',sx+b[0]+b[1]*.7,hz+14-b[2],b[1]*.3,b[2])});poly(g,dim('#e0cc9a'),[[sx-20,hz+14],[sx-14,hz-30],[sx+14,hz-30],[sx+20,hz+14]]);g.globalAlpha=1}
 /* Karnak: piloni e colonne, e la scogliera chiara di Deir el-Bahari (zone 4) */
 const kn=env(9300,5200);if(kn>.02){g.globalAlpha=kn;const sx=fx(9300);base(sx,430,'#c8a870');[[-220,36,46],[-170,40,60],[-120,34,40]].forEach(b=>{poly(g,dim('#dcc08a'),[[sx+b[0]-b[1]/2,hz+14],[sx+b[0]-b[1]/2+4,hz+14-b[2]],[sx+b[0]+b[1]/2-4,hz+14-b[2]],[sx+b[0]+b[1]/2,hz+14]])});for(let q=0;q<12;q++)rect(g,dim('#d8b878'),sx-80+q*9,hz-6,6,20);rect(g,dim('#c8a468'),sx-84,hz-10,112,5);
  rect(g,dim('#d4b47a'),sx+120,hz-70,4,84);poly(g,dim('#efe2bc'),[[sx+170,hz+14],[sx+190,hz-60],[sx+250,hz-80],[sx+330,hz-46],[sx+400,hz+14]]);poly(g,'rgba(0,0,0,.08)',[[sx+280,hz-60],[sx+330,hz-46],[sx+400,hz+14],[sx+290,hz+14]]);for(let r=0;r<3;r++)rect(g,dim('#e6cc90'),sx+226-r*10,hz-4-r*12+14,100+r*20,12);g.globalAlpha=1}
 /* la cima a piramide sopra la Valle dei Re e le colline gialle (zone 5) */
 const vl=env(12000,4600);if(vl>.02){g.globalAlpha=vl;const sx=fx(12000);base(sx,400,'#c8a468');poly(g,dim('#b8924e'),[[sx-250,hz+16],[sx-170,hz-16],[sx-90,hz-4],[sx-40,hz+16]]);poly(g,dim('#c8a060'),[[sx-70,hz+16],[sx+20,hz-86],[sx+130,hz+16]]);poly(g,dim('#9a7240'),[[sx+20,hz-86],[sx+130,hz+16],[sx+50,hz+16]]);poly(g,dim('#b8924e'),[[sx+110,hz+16],[sx+190,hz-24],[sx+280,hz-8],[sx+340,hz+16]]);g.globalAlpha=1}
 /* i massi rosa di granito della Prima Cataratta e l'isola (zone 6) */
 const el6=env(14500,5000);if(el6>.02){g.globalAlpha=el6;const sx=fx(14500);base(sx,400,'#b09070');rect(g,dim('#7aa0b8'),sx-400,hz+18,800,10);[[-260,40,22],[-180,30,18],[-90,52,28],[10,36,20],[110,46,26],[200,32,18],[270,38,22]].forEach((b,i)=>{el(g,dim('#c8806a'),sx+b[0],hz+18-b[2]*.5,b[1],b[2]*.7);el(g,'rgba(80,30,20,.18)',sx+b[0]+b[1]*.3,hz+18-b[2]*.4,b[1]*.5,b[2]*.5)});rect(g,dim('#d8b880'),sx+30,hz-18,60,32);merli(g,sx+30,hz-18,60,dim('#c8a468'),6);g.globalAlpha=1}
 /* la parete arancio di Abu Simbel con i quattro colossi, il fiume, la sabbia (zone 7) */
 const ab=env(16900,4600);if(ab>.02){g.globalAlpha=ab;const sx=fx(16900);base(sx,400,'#c89a60');poly(g,dim('#d88c4c'),[[sx-190,hz+16],[sx-180,hz-46],[sx-100,hz-56],[sx+60,hz-52],[sx+170,hz-40],[sx+200,hz+16]]);poly(g,'rgba(120,50,20,.2)',[[sx+60,hz-52],[sx+170,hz-40],[sx+200,hz+16],[sx+80,hz+16]]);for(let q=0;q<4;q++){rect(g,dim('#c8783c'),sx-110+q*46,hz-26,18,30);dot(g,dim('#c8783c'),sx-101+q*46,hz-30,6)}rect(g,dim('#7a98b0'),sx-400,hz+18,800,8);g.globalAlpha=1}
 /* il mare e la sagoma altissima del Faro con il suo fuoco (zone 8) */
 const al=env(21000,6200);if(al>.02){g.globalAlpha=al;const sx=fx(21000);rect(g,dim('#3a5a98'),sx-560,hz+8,1120,40);rect(g,dim('#6a88c0'),sx-560,hz+8,1120,3);for(let q=0;q<18;q++)rect(g,'rgba(255,200,140,.35)',sx-540+q*62,hz+14+(q%3)*5,26,1.4);
  rect(g,dim('#8a82a0'),sx-60,hz+6,90,6);rect(g,dim('#cfc8b4'),sx+10,hz-68,16,76);rect(g,dim('#d8d0bc'),sx+14,hz-96,8,30);rect(g,dim('#b0a894'),sx+8,hz-70,20,3);const fl=Math.sin(t*9)*1.4;poly(g,'rgba(255,170,70,.95)',[[sx+14,hz-98],[sx+18,hz-114+fl],[sx+22,hz-98]]);glow(g,sx+18,hz-102,50,'255,190,90',.25+.6*night);
  for(let q=0;q<3;q++){const bx=sx-300+q*180,bb=Math.sin(t*1.2+q)*1;poly(g,dim('#7a5a3a'),[[bx-14,hz+8+bb],[bx+14,hz+8+bb],[bx+10,hz+13+bb],[bx-10,hz+13+bb]]);poly(g,dim('#f0e6cc'),[[bx,hz-18+bb],[bx,hz+7+bb],[bx+12,hz+7+bb]])}
  base(sx+180,160,'#6a6a88');rect(g,dim('#d8c8a8'),sx+120,hz-10,200,22);for(let q=0;q<10;q++)rect(g,dim('#e8dcc0'),sx+126+q*20,hz-6,3,18);torches(sx,-340,-100,8);g.globalAlpha=1}}
function zigg_(g,x,y,w,h,c){for(let i=0;i<6;i++){const ww=w*(1-.74*i/6),th=h/6;rect(g,c,x-ww/2,y-(i+1)*th,ww,th);rect(g,'rgba(0,0,0,.1)',x+ww/2-ww*.16,y-(i+1)*th,ww*.16,th)}}

/* ---- livello 2: villaggi di mattoni crudi e palmeti, tombe basse e cantieri, tetti piatti di Menfi, templi di Tebe, colline gialle, tende e magazzini, rocce della Nubia, portici e palazzi di Alessandria ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120);A.setDK(nf(cam+x));
  const wins=(n,top,bx)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,214,140,.85)',bx+(q%4)*18,top+Math.floor(q/4)*14,5,6)};
  const house=(c,hh,ww)=>{rect(g,dim(c),x+10,hz-hh,ww,hh+10);rect(g,'rgba(255,255,255,.14)',x+10,hz-hh,5,hh+10);rect(g,'rgba(0,0,0,.14)',x+10+ww-9,hz-hh,9,hh+10);rect(g,dim('#9a7444'),x+7,hz-hh-4,ww+6,5);rect(g,dim('#2a1c10'),x+10+ww*.4,hz-hh*.5,10,hh*.5+10);wins(4,hz-hh+8,x+16)};
  if(zz==1){if(r>.7)palma(g,x+60,hz+10,.5+r*.2,t);else if(r>.5){rect(g,dim('#c8a458'),x+30,hz-18,60,28);el(g,dim('#d8b868'),x+60,hz-18,30,14)}else if(r>.3)pap(g,x+60,hz+8,70,t,8);else house(OCR[md(i,5)],24+r*34,70)}
  else if(zz==2){if(r>.8)palma(g,x+60,hz+10,.55+r*.2,t);else if(r>.5){poly(g,dim('#e0cc9c'),[[x+10,hz+10],[x+26,hz-22],[x+90,hz-22],[x+106,hz+10]]);for(let q=0;q<3;q++)rect(g,dim('#2a1c10'),x+36+q*20,hz-14,6,10)}else if(r>.25)house(OCR[md(i,5)],30+r*40,80);else{for(let q=0;q<4;q++)rect(g,dim(q%2?'#e0d0a0':'#d8c490'),x+10+q*22,hz-10-(q%2)*10,22,10+(q%2)*10)}}
  else if(zz==3){if(r>.82)palma(g,x+60,hz+10,.6,t);else{const hh=40+r*44;house(['#efe6c8','#e8dcb8','#d8c490'][md(i,3)],hh,84);rect(g,dim('#9a7444'),x+14,hz-hh-10,32,6)}}
  else if(zz==4){if(r>.88)palma(g,x+60,hz+10,.6,t);else if(r>.7){pilone(g,x+30,hz+10,40,60,dim('#dcc08a'));pilone(g,x+84,hz+10,40,60,dim('#dcc08a'))}else{const hh=48+r*50;house(['#d8b888','#e0c498','#d0ac78'][md(i,3)],hh,86)}}
  else if(zz==5){if(r>.86)palma(g,x+60,hz+10,.55,t);else if(r>.45){poly(g,dim('#c8a060'),[[x,hz+10],[x+30,hz-40-r*30],[x+60,hz-20],[x+100,hz-50-r*20],[x+120,hz+10]]);poly(g,'rgba(60,30,10,.16)',[[x+60,hz-20],[x+100,hz-50-r*20],[x+120,hz+10],[x+66,hz+10]])}else{const hh=26+r*34;house(['#d8c498','#ccb484','#c8a870'][md(i,3)],hh,72)}}
  else if(zz==6){if(r>.8)palma(g,x+60,hz+10,.55,t);else if(r>.5){rect(g,dim('#6a4a2a'),x+54,hz-60,2.4,60);poly(g,dim(['#c8402a','#2f5fa8','#f0e6cc'][md(i,3)]),[[x+57,hz-60],[x+96,hz-40],[x+96,hz-22],[x+57,hz-30]])}else house(OCR[md(i,5)],34+r*40,90)}
  else if(zz==7){if(r>.8)palma(g,x+60,hz+10,.6,t);else if(r>.35){poly(g,dim('#d88c4c'),[[x,hz+10],[x+16,hz-40-r*30],[x+70,hz-56-r*20],[x+110,hz-20],[x+124,hz+10]]);poly(g,'rgba(120,50,20,.2)',[[x+70,hz-56-r*20],[x+110,hz-20],[x+124,hz+10],[x+70,hz+10]])}else{rect(g,dim('#c8a060'),x+30,hz-18,50,28);poly(g,dim('#b88c4a'),[[x+24,hz-18],[x+55,hz-44],[x+86,hz-18]]);rect(g,dim('#2a1c10'),x+48,hz-8,12,18)}}
  else{if(r>.86)palma(g,x+60,hz+10,.6,t);else{const hh=50+r*56;rect(g,dim('#e8dcc0'),x+8,hz-hh,90,hh+10);rect(g,'rgba(255,255,255,.18)',x+8,hz-hh,6,hh+10);rect(g,dim('#c8b078'),x+8,hz-hh,90,5);for(let q=0;q<5;q++)rect(g,dim('#f4efe0'),x+14+q*18,hz-hh+8,6,hh-4);if(night>.2){glow(g,x+54,hz-hh*.4,30,'255,180,80',.3)}}}
 })}

/* ---- livello 3: le case lungo la strada, per zona ---- */
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3);
 if(st==1){/* campi e villaggi: palme, granai a cupola, papiri, case di mattoni crudi */
  if(r>.62){palma(g,x+w*.5,gt+6,1+r*.3,TT);return}if(r>.45){pap(g,x+w*.5,gt+4,86,TT,10);return}
  if(r>.3){for(let q=0;q<2;q++){const cx=x+50+q*70,cw=26-q*4,ch=46-q*8;g.fillStyle=tn('#cfa468');g.beginPath();g.moveTo(cx-cw,gt+4);g.lineTo(cx-cw,gt-ch*.5);g.quadraticCurveTo(cx-cw,gt-ch*1.1,cx,gt-ch*1.1);g.quadraticCurveTo(cx+cw,gt-ch*1.1,cx+cw,gt-ch*.5);g.lineTo(cx+cw,gt+4);g.closePath();g.fill();rect(g,'#2a1c10',cx-4,gt-ch*.6,8,8)}return}
  casa(g,x+6,w-60,h-50,i,k,{wall:OCR[md(i,5)],lad:r>.15,mat:0,trav:0});return}
 if(st==2){/* Saqqara e Giza: tombe a panca, blocchi, tende, case */
  if(r>.8){palma(g,x+w*.5,gt+6,1.1+r*.2,TT);return}
  if(r>.5){poly(g,'#e0cc9c',[[x+10,gt+4],[x+34,gt-36],[x+w-50,gt-36],[x+w-26,gt+4]]);poly(g,'rgba(0,0,0,.12)',[[x+w-50,gt-36],[x+w-26,gt+4],[x+w-70,gt+4]]);for(let q=0;q<3;q++)rect(g,'#2a1c10',x+50+q*26,gt-20,8,10);return}
  if(r>.3){for(let q=0;q<7;q++)rect(g,q%2?'#e0d0a0':'#d8c490',x+10+(q%4)*26,gt-12-Math.floor(q/4)*13,26,13);return}
  casa(g,x+6,w-30,h-50,i,k,{wall:OCR[md(i,5)],lad:r>.2,mat:r<.25,trav:0});return}
 if(st==3){/* Menfi: case bianche a cortile, palme, tetti piatti */
  if(r>.82){palma(g,x+w*.5,gt+6,1.1,TT);return}
  casa(g,x+6,w-20,h-30,i,k,{wall:['#efe6c8','#e8dcb8','#d8c490','#e4d4a8'][md(i,4)],lad:r>.45,mat:r<.3,mer:r>.7,trav:0});return}
 if(st==4){/* Tebe: arenaria, piloni, bracieri, palme */
  if(r>.86){palma(g,x+w*.5,gt+6,1.1,TT);return}
  if(r>.62){pilone(g,x+40,gt+4,50,100+r*30,'#dcc08a');pilone(g,x+110,gt+4,50,100+r*30,'#dcc08a');ln(g,'#6a4a28',2.4,[x+30,gt,x+30,gt-150]);poly(g,r>.7?RD:BL,[[x+30,gt-148],[x+46,gt-142],[x+46,gt-128],[x+30,gt-134]]);return}
  casa(g,x+4,w-14,h-20,i,k,{wall:['#d8b888','#e0c498','#d0ac78'][md(i,3)],lad:r>.5,trav:0});return}
 if(st==5){/* colline gialle, capanne di pietra, case a schiera */
  if(r>.8){palma(g,x+w*.5,gt+6,.9,TT);return}
  if(r>.45){poly(g,'#c8a060',[[x,gt+4],[x+30,gt-60-r*50],[x+80,gt-30],[x+130,gt-80-r*40],[x+w-20,gt+4]]);poly(g,'rgba(60,30,10,.16)',[[x+80,gt-30],[x+130,gt-80-r*40],[x+w-20,gt+4],[x+90,gt+4]]);ar(g,'#1a1210',x+60,gt+4,14,22);return}
  casa(g,x+6,w-50,h-60,i,k,{wall:['#d8c498','#ccb484','#c8a870'][md(i,3)],lad:r>.2,mat:0,trav:0});return}
 if(st==6){/* porto: magazzini, tende di mercato, giare, massi di granito */
  if(r>.84){palma(g,x+w*.5,gt+6,1.1,TT);return}
  if(r>.6){el(g,'#c8806a',x+60,gt-12,46,18);el(g,'#d4907a',x+120,gt-8,30,12);el(g,'rgba(80,30,20,.2)',x+70,gt-8,22,10);return}
  if(r>.36){ln(g,'#6a4a28',3,[x+16,gt+2,x+16,gt-72]);ln(g,'#6a4a28',3,[x+w-30,gt+2,x+w-30,gt-62]);poly(g,['#c8402a','#2f5fa8','#e0c060'][md(i,3)],[[x+8,gt-72],[x+w-22,gt-62],[x+w-18,gt-46],[x+4,gt-56]]);return}
  casa(g,x+6,w-20,h-40,i,k,{wall:OCR[md(i,5)],mat:1,trav:0});return}
 if(st==7){/* Nubia: rocce arancio, capanne di fango e paglia, palme */
  if(r>.82){palma(g,x+w*.5,gt+6,1.1,TT);return}
  if(r>.4){poly(g,'#d88c4c',[[x,gt+4],[x+16,gt-50-r*30],[x+80,gt-70-r*20],[x+130,gt-30],[x+w-20,gt+4]]);poly(g,'rgba(120,50,20,.2)',[[x+80,gt-70-r*20],[x+130,gt-30],[x+w-20,gt+4],[x+80,gt+4]]);return}
  for(let q=0;q<2;q++){const hx2=x+30+q*76;rect(g,'#c8a060',hx2,gt-26,46,30);poly(g,'#b88c4a',[[hx2-6,gt-26],[hx2+23,gt-56],[hx2+52,gt-26]]);ar(g,'#2a1c10',hx2+17,gt+4,12,18)}return}
 /* Alessandria: portici di marmo, palazzi bianchi, torce */
 if(r>.86){palma(g,x+w*.5,gt+6,1.1,TT);return}
 if(r>.5){rect(g,'#ece4d0',x+4,gt-h*.7,w-20,h*.7+8);rect(g,'rgba(255,255,255,.2)',x+4,gt-h*.7,6,h*.7+8);rect(g,'rgba(0,0,0,.12)',x+w-28,gt-h*.7,10,h*.7+8);rect(g,'#c8b078',x,gt-h*.7-6,w-12,7);for(let q=0;q<5;q++){rect(g,'#f8f4e8',x+12+q*28,gt-h*.7+10,10,h*.7-8);rect(g,'rgba(0,0,0,.14)',x+19+q*28,gt-h*.7+10,3,h*.7-8)}poly(g,'#e0d4b4',[[x-2,gt-h*.7-6],[x+(w-12)/2,gt-h*.7-26],[x+w-10,gt-h*.7-6]]);if(k>.2)glow(g,x+w*.4,gt-30,50,'255,170,70',.3*k);return}
 casa(g,x+4,w-20,h-10,i,k,{wall:['#efe6c8','#e8dcb8','#f4efe0'][md(i,3)],lad:0,mat:r<.35,mer:1,trav:0});
 ln(g,'#6a4a28',3,[x+w-8,gt+4,x+w-8,gt-50]);const fl=Math.sin(TT*9+i)*1.4;poly(g,'rgba(255,150,40,.95)',[[x+w-12,gt-50],[x+w-8,gt-66+fl],[x+w-4,gt-50]]);glow(g,x+w-8,gt-56,50,'255,170,70',.12+.3*k)}
const RD='#c8402a',BL='#2f6ad0';
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

/* ---- suolo: limo nero e argini verdi, sabbia dorata e lastre di calcare, argilla battuta, lastre di arenaria, ghiaia chiara, banchina e stuoie, sabbia della Nubia, lastricato chiaro di Alessandria ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#6a4c30','k'],[Z[1],Z[2],'#dcc088','s'],[Z[2],Z[3],'#b89a68','n'],[Z[3],Z[4],'#d4b27e','r'],[Z[4],Z[5],'#cdb888','b'],[Z[5],Z[6],'#b8946a','p'],[Z[6],Z[7],'#e0c490','d'],[Z[7],Z[8],'#c8c0aa','v']];
 rect(g,'#e0d0a8',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0),zw=z[1]-z[0];g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const pz=(q,m)=>z[0]+((q*m)%zw)-cam;
  const slabs=(base,bw0,dy)=>{for(let r=0;r<6;r++){const yy=gt+7+r*(dy||24),bw=bw0+r*8,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*17+r*3);rect(g,hh>.65?'rgba(255,245,220,.2)':hh>.3?'rgba(0,0,0,.05)':'rgba(255,255,255,.06)',px,yy,bw-2,(dy||24)-2);rect(g,'rgba(60,40,20,.25)',px+bw-2,yy,2,(dy||24)-2);rect(g,'rgba(60,40,20,.14)',px,yy+(dy||24)-2,bw,2)}}};
  if(z[3]=='k'){/* limo nero, argini di terra, verde dei campi, canaletta, orme */
   rect(g,'#7a9a48',x0,gt+3,x1-x0,24);for(let q=0;q<90;q++)rect(g,q%3?'#6a8a3e':'#9ab458',pz(q,47),gt+5+hr(q)*20,2,5);rect(g,'#5a4028',x0,gt+27,x1-x0,124);rect(g,'rgba(0,0,0,.16)',x0,gt+62,x1-x0,6);rect(g,'rgba(0,0,0,.16)',x0,gt+98,x1-x0,6);
   for(let q=0;q<110;q++)dot(g,hr(q)>.5?'rgba(255,230,190,.3)':'rgba(20,10,0,.4)',pz(q,31),gt+32+hr(q*5)*112,1+hr(q)*1.6);for(let q=0;q<6;q++){const px=pz(q,433);el(g,'rgba(110,160,172,.5)',px,gt+80+hr(q)*50,36+hr(q)*20,5)}}
  if(z[3]=='s'){/* sabbia dorata e lastre di calcare, ciottoli, strade di terra battuta */
   rect(g,'#d0b078',x0,gt+3,x1-x0,30);for(let q=0;q<150;q++)dot(g,hr(q)>.5?'rgba(255,240,200,.5)':'rgba(120,80,30,.35)',pz(q,29),gt+8+hr(q*5)*140,1+hr(q)*1.4);for(let q=0;q<10;q++){const px=pz(q,311);rect(g,'#ece0bc',px,gt+50+hr(q)*80,36+hr(q)*24,10);rect(g,'rgba(0,0,0,.14)',px,gt+58+hr(q)*80,36+hr(q)*24,2)}for(let q=0;q<5;q++)rect(g,'rgba(120,80,30,.18)',pz(q,613),gt+40+q*20,90,5)}
  if(z[3]=='n'){/* argilla battuta con giunti, stuoie */
   rect(g,'#b89a68',x0,gt+3,x1-x0,150);slabs('#b89a68',44,20);for(let q=0;q<8;q++){const px=pz(q,263);rect(g,['#c8a468','#a8845a'][q%2],px,gt+50+hr(q)*80,50,16);for(let s2=0;s2<8;s2++)rect(g,'rgba(60,30,10,.2)',px+s2*6,gt+50+hr(q)*80,1,16)}}
  if(z[3]=='r'){/* lastre di arenaria */
   slabs('#d4b27e',60,24);for(let q=0;q<9;q++)rect(g,'rgba(255,255,230,.08)',pz(q,177),gt+8,30,140);const nw=cl(1-Math.abs(cam-9000)/2600,0,1);if(nw>0)rect(g,'rgba(255,255,230,'+.1*nw+')',x0,gt+3,x1-x0,150)}
  if(z[3]=='b'){/* ghiaia chiara, sentieri di pietra, detriti */
   rect(g,'#cdb888',x0,gt+3,x1-x0,150);rect(g,'#bca878',x0,gt+50,x1-x0,52);for(let q=0;q<150;q++)dot(g,hr(q)>.5?'rgba(255,240,200,.5)':'rgba(110,80,40,.4)',pz(q,23),gt+8+hr(q*5)*140,1+hr(q)*1.5);for(let q=0;q<10;q++){const px=pz(q,271);rect(g,'rgba(140,110,60,.3)',px,gt+54+hr(q)*40,50+hr(q)*30,10)}}
  if(z[3]=='p'){/* banchina di pietra e mattoni, stuoie, corde */
   rect(g,'#b8946a',x0,gt+3,x1-x0,150);rect(g,'#9a7a54',x0,gt+3,x1-x0,34);slabs('#b8946a',50,24);for(let q=0;q<7;q++){const px=pz(q,331);rect(g,['#c85a3a','#2f5fa8','#e0c890'][q%3],px,gt+70+hr(q)*44,46,22);for(let s2=0;s2<6;s2++)rect(g,'rgba(0,0,0,.14)',px+s2*8,gt+70+hr(q)*44,1,22)}for(let q=0;q<4;q++){const px=pz(q,613);ln(g,'#7a5a30',2,[px,gt+120,px+30,gt+130,px+60,gt+124])}}
  if(z[3]=='d'){/* sabbia chiara, rampe di pietra, orme */
   rect(g,'#e0c490',x0,gt+3,x1-x0,150);for(let q=0;q<160;q++)dot(g,hr(q)>.5?'rgba(255,240,200,.5)':'rgba(140,90,40,.3)',pz(q,23),gt+8+hr(q*5)*140,1+hr(q)*1.4);for(let q=0;q<6;q++)rect(g,'rgba(160,100,50,.18)',pz(q,433),gt+30+q*18,120,6);const gw=cl((cam-16200)/600,0,1)*cl((18400-cam)/600,0,1);if(gw>0)rect(g,'rgba(255,140,50,'+(.12*gw)+')',x0,gt+3,x1-x0,150)}
  if(z[3]=='v'){/* lastricato chiaro, banchine di marmo */
   rect(g,'#c8c0aa',x0,gt+3,x1-x0,150);rect(g,'#e8e0cc',x0,gt+3,x1-x0,5);rect(g,'#f4efe0',x0,gt+8,x1-x0,3);slabs('#c8c0aa',58,22);for(let q=0;q<18;q++){const px=pz(q,97);rect(g,'rgba(255,200,110,'+(.06+.06*hr(q))+')',px,gt+10,26,130)}}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1800,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const sg=cl((cam-17200)/700,0,1)*cl((19400-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- vita: aironi e martin pescatori sul fiume, falchi e nibbi nel cielo, ibis, oche nei cortili, gatti sui tetti, cani, asini con le ceste, pecore, sciacalli ai bordi del deserto, passanti, pipistrelli di notte ---- */
function layerLife(g,o,t){const cam=o,xs=cam+240,hz=GT;
 const hv=cl((4200-xs)/500,0,1)*cl((xs+200)/400,0,1);if(hv>.05)for(let i=0;i<3;i++){const bx=((i*190+t*(16+i*4))%620)-70,by=60+hr(i*7)*70+Math.sin(t*.7+i*2)*14,w=Math.sin(t*3+i)*3;g.globalAlpha=hv;g.strokeStyle='#e8ecf0';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-12,by+w+2);g.quadraticCurveTo(bx-5,by-4,bx,by);g.quadraticCurveTo(bx+5,by-4,bx+12,by+w+2);g.stroke();ln(g,'#e8ecf0',1.6,[bx-2,by+2,bx-18,by+6]);g.globalAlpha=1}
 const sv=Math.min(cl((xs-2700)/500,0,1),cl((18000-xs)/500,0,1));if(sv>.05)for(let i=0;i<5;i++){const bx=((i*131+t*(26+i*4))%640)-80,by=70+hr(i*3)*110+Math.sin(t*1.6+i*2)*14,w=Math.sin(t*10+i)*3;g.globalAlpha=sv;if(i%2)falco(g,bx,by,1,w);else volo(g,bx,by,1,w,'rgba(20,18,30,.9)');g.globalAlpha=1}
 const bn=cl((xs-19600)/800,0,1);if(bn>.05)for(let i=0;i<6;i++){const bx=((i*97+t*(34+i*3))%560)-40,by=90+hr(i*5)*120+Math.sin(t*5+i)*18,w=Math.sin(t*14+i)*3.4;g.globalAlpha=bn;g.strokeStyle='rgba(10,8,20,.9)';g.lineWidth=2;g.beginPath();g.moveTo(bx-7,by+w);g.lineTo(bx-2,by-2);g.lineTo(bx,by+1);g.lineTo(bx+2,by-2);g.lineTo(bx+7,by+w);g.stroke();g.globalAlpha=1}
 each(o,520,31,(x,i,r)=>{const wx=cam+x,zz=zn(wx);A.setDK(nf(wx));
  if(zz>=2&&zz<=6&&r>.6)gatto(g,x+40,hz-118,t,['#c9873a','#8a7a6a','#2a2420'][md(i,3)]);
  if(zz>=1&&zz<=7&&r<.2)cane(g,x+60,hz+42,t,['#b8935a','#6a5a48','#d8c8a0'][md(i,3)]);
  if(zz<=2&&r>.3&&r<.5){pecora(g,x+20,hz+44,1.3,t,1);pecora(g,x+54,hz+50,1.2,t+1,-1)}
  if((zz==1||zz==2)&&r>.52&&r<.6){oca(g,x+30,hz+48,1.4,t,1);oca(g,x+56,hz+52,1.3,t+1,-1);oca(g,x+80,hz+46,1.3,t+2,1)}
  if((zz==1||zz==2||zz==5)&&r>.84)sciacallo(g,x+60,hz+22,1.1,t,md(i,2)?1:-1);
  if(zz==1&&r>.62&&r<.7)croco(g,x+60,hz+30,.9,t,1)});
 each(o,430,57,(x,i,r)=>{const wx=cam+x,zz=zn(wx);if(!(zz>=1&&zz<=8)||r<.4)return;A.setDK(nf(wx));const dir=md(i,2)?1:-1,off=Math.sin(t*.18+i)*70,f=Math.cos(t*.18+i)*dir>0?1:-1;
  if(r>.82)asino(g,x+off,hz+56,1,t+i,f);else if(zz==7&&r>.7&&r<.8)cavallo(g,x+off,hz+56,.9,t+i,f);else man(g,x+off,hz+54,t+i,{f:f,s:.5,kilt:TUN[md(i,6)],long:md(i,3)==0||zz==8,robe:TUN[md(i+2,6)],skin:['#c88e64','#b87c54','#c08660'][md(i,3)]})});A.setDK(0);g.globalAlpha=1}

/* ---- personaggi ---- */
const NP=(id,x,o,acc)=>({id,name:NAME[id],x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));const c=q=>tn(o[q]);fig(g,px,y,t,Object.assign({f,s:1},o,{skin:c('skin'),top:c('top'),bot:c('bot'),hair:c('hair'),acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:GREET[id]}}});
const KL=(g,b,c,pl)=>{poly(g,tn(c),[[-12,-52+b],[12,-52+b],[pl?17:15,-24],[pl?-17:-15,-24]]);rect(g,tn('#c8a050'),-12,-54+b,24,4);for(let q=0;q<5;q++)rect(g,'rgba(0,0,0,.1)',-12+q*6,-48+b,1.4,pl?22:24)};
const piedi=(g,c)=>{el(g,tn(c),-4,-1,8,4);el(g,tn(c),8,-1,8,4)};
const colA=(g,b,c1,c2)=>{poly(g,tn(c1),[[-14,-90+b],[14,-90+b],[10,-72+b],[-10,-72+b]]);for(let q=0;q<5;q++)dot(g,tn(c2),-8+q*4,-80+b+Math.abs(q-2)*1.4,1.7);ln(g,'#e0b84a',1,[-13,-90+b,-9,-73+b]);ln(g,'#e0b84a',1,[13,-90+b,9,-73+b])};
const nemesN=(g,b,c)=>{poly(g,tn(c),[[-13,-106+b],[-10,-116+b],[12,-116+b],[14,-106+b],[14,-84+b],[8,-84+b],[8,-98+b],[-8,-98+b],[-14,-84+b]]);for(let q=0;q<5;q++)rect(g,'rgba(0,0,0,.2)',-12,-112+b+q*5,24,1.2);dot(g,tn('#e0b84a'),0,-116+b,2)};
const barbaF=(g,b)=>{rect(g,tn('#2a2420'),9,-96+b,3,10);dot(g,tn('#2a2420'),10.5,-85+b,1.8)};
const cobra=(g,b)=>{ln(g,'#e0b84a',2.2,[7,-114+b,10,-120+b]);dot(g,tn('#e0b84a'),10,-121+b,2)};
const npcs=[
 /* Padi: gonnellino corto di lino, torso nudo bruciato dal sole, piedi sporchi di fango, falce curva, fascia sulla fronte, ciuffo di papiro dietro l'orecchio */
 NP('eg_padi',1090,{skin:'#b87c54',top:'#b87c54',bot:'#b87c54',hair:'#1a120c',s:1.0},(g,b,t)=>{KL(g,b,'#f0e6cc');piedi(g,'#4a3a28');for(let q=0;q<4;q++)dot(g,'#3a2a18',-8+q*7,-6+(q%2)*3,1.8);rect(g,tn('#f0e6cc'),-11,-110+b,24,3.4);ln(g,'#4a8a3a',2,[-8,-102+b,-12,-116+b]);for(let r=0;r<4;r++)ln(g,'#6aa848',1,[-12,-116+b,-12+(r-1.5)*4,-122+b]);
  ln(g,'#6a4a2a',3,[10,-84+b,22,-66,24,-36]);g.strokeStyle=tn('#9a9aa2');g.lineWidth=3;g.beginPath();g.arc(30,-40,12,Math.PI*1.05,Math.PI*2.05);g.stroke();ln(g,'#6a4a2a',3,[24,-36,20,-24])}),
 /* Imhotep: testa rasata, lunga gonna di lino bianco, collare largo, rotolo di papiro, corda con i nodi, tavolozza a tracolla */
 NP('eg_imhotep',3335,{skin:'#c08660',top:'#c08660',bot:'#f2ead2',hair:'#c08660',long:1,s:1.02},(g,b,t)=>{for(let q=0;q<4;q++)rect(g,'rgba(0,0,0,.08)',-12+q*7,-46,1.4,44);rect(g,tn('#c8a050'),-13,-58+b,26,3);colA(g,b,'#2f5fa8','#e0b84a');ln(g,'#8a6a3a',1.6,[-10,-88+b,6,-48]);rect(g,tn('#a87a48'),-3,-68+b,6,12);rect(g,tn('#eadfb8'),13,-74,16,12);ln(g,'#6a5030',1.4,[13,-72,29,-72]);dot(g,tn('#eadfb8'),13,-68,6);
  ln(g,'#c8a468',1.4,[-12,-60+b,-16,-44,-12,-34]);for(let q=0;q<4;q++)dot(g,'#6a4a2a',-13.6+q*0,-56+q*7,1.2)}),
 /* Meryra: testa rasata, gonna lunga pieghettata, tavolozza al collo, rotolo sotto il braccio, pennelli dietro l'orecchio, bastoncino */
 NP('eg_meryra',6840,{skin:'#c08660',top:'#c08660',bot:'#f2ead2',hair:'#c08660',long:1,s:1.0},(g,b,t)=>{for(let q=0;q<6;q++)rect(g,'rgba(0,0,0,.08)',-14+q*5.4,-46,1.4,44);rect(g,tn('#a87a48'),-11,-84+b,22,4);ln(g,'#c8b070',1.6,[-5,-104+b,-3,-116+b]);ln(g,'#c8b070',1.6,[-2,-104+b,1,-116+b]);rect(g,tn('#eadfb8'),-18,-72+b,10,26);ln(g,'#4a3a2a',1,[-18,-62+b,-8,-62+b]);ln(g,'#8a6a3a',1.8,[10,-76,28,-92]);dot(g,'#2a2018',-4,-82+b,2);dot(g,RD,3,-82+b,2);for(let q=0;q<2;q++)rect(g,'rgba(20,16,12,.6)',-10,-14,0,0)}),
 /* Hatshepsut: copricapo a righe con il cobra, barba finta, gonnellino pieghettato, grande collare d'oro, scettro e flagello */
 NP('eg_hatshepsut',10150,{skin:'#c88e64',top:'#c88e64',bot:'#c88e64',hair:'#c88e64',s:.98},(g,b,t)=>{KL(g,b,'#f4efe0',1);piedi(g,'#e0b84a');nemesN(g,b,'#2f5fa8');cobra(g,b);barbaF(g,b);colA(g,b,'#e0b84a','#2f6ad0');rect(g,tn('#e0b84a'),-13,-56+b,26,3.4);ln(g,'#e0b84a',2.4,[-12,-70,-18,-56]);ln(g,'#e0b84a',2.4,[12,-70,18,-56]);ln(g,'#e0b84a',3,[16,-6,16,-86]);dot(g,tn('#2f5fa8'),16,-90,4.4);ln(g,'#e0b84a',2,[22,-84,28,-70]);ln(g,'#c8402a',1.6,[26,-70,26,-60])}),
 /* Hori: gonnellino macchiato di colore, fascia sulla fronte, mani sporche di ocra e di blu, pennelli dietro l'orecchio, lampada a olio, coccio sotto il braccio */
 NP('eg_hori',11720,{skin:'#b87c54',top:'#b87c54',bot:'#b87c54',hair:'#1a120c',s:1.0},(g,b,t)=>{KL(g,b,'#e8dcc0');for(let q=0;q<5;q++)dot(g,['#c8402a','#2f6ad0','#e0b84a','#4a9a48'][q%4],-9+q*4.5,-34+q%2*5,1.8);piedi(g,'#6a4a2a');rect(g,tn('#f0e6cc'),-11,-110+b,24,3.4);ln(g,'#c8b070',1.6,[-5,-104+b,-3,-118+b]);ln(g,'#2f6ad0',1.6,[-2,-104+b,1,-118+b]);el(g,'#f2ead2',-14,-62,8,6);rect(g,'rgba(20,16,12,.7)',-18,-64,8,1.2);
  ln(g,tn(SKN),3,[12,-80+b,22,-66]);el(g,'#8a6a30',24,-64,4,2.4);ln(g,'#8a6a30',1.4,[26,-64,28,-62]);el(g,'rgba(255,170,60,.95)',24,-69+Math.sin(t*9)*.6,1.8,3.2);glow(g,24,-68,40,'255,190,90',.55);dot(g,tn('#2f6ad0'),20,-67,2.4);dot(g,tn('#c8402a'),26,-60,2)}),
 /* Henut: veste lunga di lino con la cintura colorata, collana di perline, bracciali, parrucca corta, bilancia in mano */
 NP('eg_henut',14230,{skin:'#c08660',top:'#f2ead2',bot:'#f2ead2',hair:'#1a120c',long:1,s:.98},(g,b,t)=>{rect(g,tn(RD),-13,-60+b,26,4);rect(g,tn(BL),-13,-56+b,26,2);for(let q=0;q<5;q++)rect(g,'rgba(0,0,0,.06)',-12+q*6,-46,1.2,44);for(let q=0;q<8;q++)dot(g,tn(q%3==0?'#2aa8a0':q%3==1?RD:'#e0b84a'),-9+q*2.6,-87+b+Math.abs(q-3.5)*1,2);poly(g,tn('#1a120c'),[[-13,-110+b],[-12,-94+b],[-8,-92+b],[-9,-106+b]]);poly(g,tn('#1a120c'),[[8,-106+b],[10,-92+b],[14,-96+b],[13,-110+b]]);
  ln(g,'#e0b84a',2.6,[11,-74,17,-70]);ln(g,'#e0b84a',2.6,[-17,-72,-11,-70]);ln(g,tn(SKN),3,[12,-72+b,22,-76]);ln(g,'#8a6a30',1.4,[22,-76,22,-88]);ln(g,'#8a6a30',1.4,[14,-88,30,-88]);ln(g,'#8a6a30',1,[14,-88,14,-82]);ln(g,'#8a6a30',1,[30,-88,30,-84]);el(g,'#c8a050',14,-81,5,1.6);el(g,'#c8a050',30,-83,5,1.6)}),
 /* Ramses II: corona azzurra con il cobra, barba finta, collare d'oro, gonnellino pieghettato, scettro e flagello, sandali dorati */
 NP('eg_ramses',16470,{skin:'#c88e64',top:'#c88e64',bot:'#c88e64',hair:'#c88e64',s:1.08},(g,b,t)=>{KL(g,b,'#f4efe0',1);piedi(g,'#e0b84a');el(g,tn('#2f6ad0'),0,-114+b,13,9);poly(g,tn('#2f6ad0'),[[-12,-112+b],[-8,-132+b],[8,-134+b],[13,-112+b]]);for(let q=0;q<4;q++)dot(g,tn('#e0b84a'),-6+q*4,-120+b,1.2);rect(g,tn('#e0b84a'),-12,-112+b,25,2.2);cobra(g,b);barbaF(g,b);colA(g,b,'#e0b84a','#c8402a');rect(g,tn('#e0b84a'),-13,-56+b,26,3.4);ln(g,'#e0b84a',2.4,[-12,-70,-17,-56]);ln(g,'#e0b84a',3,[16,-6,16,-100]);poly(g,tn('#e0b84a'),[[12,-100],[20,-100],[18,-108],[14,-108]]);ln(g,tn(SKN),4.4,[12,-72,16,-70]);dot(g,tn('#e0b84a'),20,-70,1.6);ln(g,'#e0b84a',1.6,[22,-84,28,-68]);ln(g,'#c8402a',1.6,[28,-68,28,-60])}),
 /* Cleopatra VII: diadema con il cobra, capelli raccolti in un nodo, veste lunga di lino finissimo, collare d'oro e di gemme, bracciali, sandali dorati */
 NP('eg_cleopatra',22050,{skin:'#cc946a',top:'#f6f0e0',bot:'#f6f0e0',hair:'#14100c',long:1,s:1.0},(g,b,t)=>{for(let q=0;q<5;q++)rect(g,'rgba(120,100,160,.1)',-13+q*6,-46,1.4,44);rect(g,tn('#e0b84a'),-13,-60+b,26,3);rect(g,tn('#e0b84a'),-12,-50+b,24,1.6);colA(g,b,'#e0b84a','#c8402a');for(let q=0;q<5;q++)dot(g,tn('#2aa8a0'),-8+q*4,-83+b,1.3);
  dot(g,tn('#14100c'),-9,-106+b,6.4);dot(g,tn('#14100c'),-13,-100+b,4);rect(g,tn('#e0b84a'),-11,-112+b,24,2.4);cobra(g,b);ln(g,'#e0b84a',2.6,[11,-74,17,-70]);ln(g,'#e0b84a',2.6,[-17,-72,-11,-70]);for(let q=0;q<2;q++)el(g,tn('#e0b84a'),-4+q*12,-2,5,3);ln(g,tn(SKN),3,[12,-72+b,20,-62]);dot(g,tn('#c8402a'),20,-62,2)})
];

/* ---- oggetti lungo il percorso: [nome in elementi.js, posizione nel mondo, parametro] ---- */
const props=[
 /* zona 1 · il Nilo, i campi e il villaggio */
 ['egtarga',110,'IL NILO'],['egpalma',240,1.1],['egnilo',560],['egpapiri',920],['egpalma',1010,.9],['msshaduf',1290],['egpalma',1500,1],['egsantuario',1620],['egraccolto',1900],['egpalma',2160,1],['eggranaio',2270],['egvillaggio',2500],['egoche',2680],
 /* zona 2 · Saqqara e Giza */
 ['egtarga',2790,'SAQQARA'],['egpalma',2900,1.1],['egdjoser',3300],['egcantiere',3790],['egpiramide',4180],['egsfinge',4800],['egoperai',5240],
 /* zona 3 · Menfi */
 ['egtarga',5490,'MENFI'],['egpalma',5640,1.1],['egmenfi',6000],['egpalma',6430,1],['egscuola',6800],['egpapiro',7240],['egcasavita',7700],
 /* zona 4 · Tebe */
 ['egtarga',8060,'TEBE'],['egkarnak',8300],['egpalma',8760,1],['egipostila',9000],['egobelisco',9420],['egbarcasacra',9720],['egdeir',10150],
 /* zona 5 · Deir el-Medina e la Valle dei Re */
 ['egtarga',10690,'DEIR EL-MEDINA'],['egsetmaat',11000],['egvalle',11700],['egtomba',12250],['egostraca',12800],
 /* zona 6 · Elefantina */
 ['egtarga',13290,'ELEFANTINA'],['egelefantina',13700],['egmercato',14350],['egnilometro',14950],['egcave',15450],
 /* zona 7 · Abu Simbel */
 ['egtarga',15890,'ABU SIMBEL'],['egstendardo',16000,0],['egabusimbel',16400],['egbabbuini',16760],['egstendardo',16860,1],['egsole',17050],['egcarro',17330],['egnefertari',17640],['egstendardo',17830,2],['egkadesh',18080],
 /* zona 8 · Alessandria */
 ['egtarga',18490,'ALESSANDRIA'],['mstorcia',18620],['egfaro',18900],['mstorcia',19300],['egmouseion',19680],['egstatuaG',19990],['mstorcia',20120],['egquartiere',20420],['mstorcia',20760],['egnotte',21200],['mstorcia',21590],['egscala',21860],['mstorcia',21980],['egvarco',W1-130]];

const LX=[560,1290,1900,2500, 3300,4180,4800,5240, 6000,6800,7240,7700, 8300,9000,9420,10150, 11000,11700,12250,12800, 13700,14350,14950,15450, 16400,17050,17640,18080, 18900,19680,20420,21200,W1-130];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'egitto',name:'Antico Egitto · Dai campi del Nilo al Faro di Alessandria',width:W1,sky:['#7a86c0','#f4a8a8','#ffd0a0'],gt:372,gr:['#6a4c30','#4a3220'],chord:[220,261.6,329.6,392],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerLife)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da egitto.txt) --- */
(function(){
const TOPX_EG={
eg_padi:[
["Chi sei e che fai?","Padi, quarantun anni, contadino. Lavoro un pezzo di terra del tempio con mia moglie Tamit e i nostri quattro figli. Il mio mestiere è aspettare il fiume e poi dargli una mano a far crescere il grano."],
["Perché il Nilo è così importante?","Perché qui non piove quasi mai: l’acqua arriva con la piena, in estate, e lascia un fango nero che fa crescere tutto. Il dio della piena si chiama Hapi, e quando arriva si fa festa. Se il fiume sbaglia anno, sono guai per tutti."],
["Come contate le stagioni?","Sono tre, di quattro mesi ciascuna: Akhet, la piena; Peret, quando la terra riemerge e si semina; Shemu, il raccolto. L’anno ha dodici mesi di trenta giorni, più cinque giorni extra alla fine, e comincia quando la stella Sopdet, che voi chiamerete Sirio, ricompare all’alba. Più o meno nei giorni in cui arriva l’acqua."],
["Cos’è quella leva con il secchio?","Lo shaduf: un’asta che gira su un palo, con il secchio da una parte e un peso di fango dall’altra. Con un po’ di pratica un uomo solo solleva l’acqua dal canale al campo senza sfiancarsi. Da noi è arrivato da poco, intorno al 1500 a.C., e dicono che i contadini lo useranno per millenni: una bella trovata."],
["Cosa coltivate?","Soprattutto farro e orzo: il farro, che noi chiamiamo bedet, per il pane, l’orzo per la birra. Poi lino per le tele, lenticchie, fave, cipolle, porri, aglio e un po’ di frutta, datteri e fichi. Chi ha un orto vicino al canale non fa mai la fame."],
["Come si lavora la terra?","Dopo la piena si ara con l’aratro di legno e i buoi, si getta il seme e poi si fanno passare le pecore, che lo pestano nel solco. In primavera si miete con la falce: vengono tutti, anche donne e bambini. Poi si batte il grano sull’aia, e gli scribi misurano ogni sacco, perché una parte va al tempio e al re."],
["Dove vivi?","In una casa di mattoni di fango e paglia seccati al sole, con il tetto piatto. D’estate la notte si dorme lassù, al fresco, sotto le stelle. In cortile c’è il forno e ci sono le oche, che come guardiane valgono più di un cane."],
["Cosa mangiate e bevete?","Pane, pane e ancora pane, ce ne sono decine di tipi, con cipolle, fagioli, pesce del fiume e datteri. La carne solo nei giorni di festa. E la henqet, la birra d’orzo, leggera e nutriente: la bevono tutti, bambini compresi, e a volte ci pagano il lavoro."],
["Come vi vestite?","Con il lino, che si fa con il lino coltivato qui: io porto un gonnellino, mia moglie una tunica lunga. I bambini piccoli vanno spesso nudi, con la testa rasata e una ciocca di capelli sul lato. E uomini e donne si bordano gli occhi di kohl nero: è bello, e ripara dalla luce."],
["È vero che costruite le piramidi?","Alcuni di noi vanno ai cantieri quando i campi sono sott’acqua, ai tempi dei grandi re. Non sono schiavi: lavorano in squadre, vivono in un villaggio con forni e magazzini e ricevono pane, birra e carne. Ma i vostri studiosi l’hanno capito solo nel Novecento, quando a Giza hanno trovato quel villaggio e le tombe degli operai."],
["Dove vado dopo?","Segui il fiume verso nord, verso Saqqara e le piramidi: si vedono laggiù, anche se sembrano piccole. Il primo che incontri è Imhotep, un uomo che ha avuto un’idea di pietra. Chiedigli com’è nata la prima."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e che Hapi ti porti una piena generosa. Se ripassi di qui, ti offro una pagnotta calda e una tazza di henqet. Ankh, udja, seneb: vita, prosperità e salute!"]
],
eg_imhotep:[
["Chi sei e che fai?","Imhotep, visir del re Djoser, che regna verso il 2670 a.C. Sono il suo primo ministro, un sacerdote e il suo architetto capo. Il mio mestiere è far stare in piedi un regno e, ogni tanto, anche un edificio."],
["Come sei diventato così importante?","Raccontano che sono nato fra la gente comune e che il talento mi ha portato vicino al re. Di certo c’è che il mio nome è scritto alla base di una statua di Djoser, trovata qui a Saqqara: è la prova più solida che sono esistito. Non male, per uno che sa fare i conti."],
["Come è fatta la tua piramide?","Sei gradoni di pietra calcarea, uno sopra l’altro, alti in tutto circa sessanta metri. Prima di me le tombe dei re erano mastabe, grandi panche di mattoni di fango: io le ho fatte in pietra e le ho sovrapposte, ingrandendo il progetto più di una volta. È il primo grande edificio d’Egitto tutto di pietra."],
["E intorno alla piramide?","Un grande recinto con un muro a nicchie, e un ingresso con colonne a forma di fasci di canne. Dentro ci sono finti edifici di pietra per le feste del re, e sotto la piramide gallerie e camere, alcune rivestite di piastrelle blu. Tutto dev’essere pronto per l’eternità, e l’eternità è esigente."],
["Perché si costruiscono le piramidi?","Per l’aldilà: secondo la nostra fede il re, dopo la morte, sale al cielo e si unisce agli dèi, e il suo corpo deve riposare al sicuro. La forma a scala, e poi quella liscia dei miei successori, è una via verso il sole. Per noi la morte non è una fine, è un viaggio che va preparato bene."],
["Chi lavora al cantiere?","Cavatori, scalpellini, trasportatori, muratori, scribi, panettieri, birrai: migliaia di persone. Si taglia la pietra con scalpelli di rame e si sposta con slitte, corde e rampe; il come preciso, nei secoli, farà discutere molti studiosi. Una cosa è certa: senza organizzazione non si alza nemmeno una pietra."],
["Parlami della Grande Piramide.","È a Giza e sarà costruita un secolo dopo di me per il re Cheope, intorno al 2560 a.C.: alta circa centoquarantasei metri, con oltre due milioni di blocchi. Il suo nome era Akhet-Khufu, \"l’orizzonte di Cheope\". Per quasi quattromila anni nessuno costruirà niente di più alto."],
["Cos’è il diario di Merer?","Merer era un ispettore ai tempi di Cheope: scrisse su papiro i viaggi delle sue barche, che portavano calcare bianco da Tura a Giza per rivestire la piramide. Il suo diario è stato ritrovato nel 2013 a Wadi al-Jarf, sul Mar Rosso, ed è il papiro con scritto più antico che si conosca. Un po’ di burocrazia, e dopo quasi quattromilaseicento anni diventa un tesoro."],
["E la Sfinge?","Una creatura con il corpo di leone e la testa di un re, scolpita nella roccia di Giza: lunga circa settantatré metri, alta venti. La maggior parte degli studiosi pensa che sia il volto di Chefren, il figlio di Cheope. Per noi è una guardiana della piana dei morti, e più tardi qualcuno la venererà come Horus dell’Orizzonte."],
["È vero che eri anche un medico?","Così dirà la tradizione: nessun testo del mio tempo lo conferma, ma i secoli mi hanno voluto bene. Molto dopo di me mi faranno dio dei guaritori, e i Greci mi chiameranno come il loro Asclepio. E un papiro di circa il 1600 a.C., che i vostri studiosi chiameranno Edwin Smith, descrive quarantotto casi di ferite, con diagnosi e cura: qualcuno pensa che derivi da un testo molto più antico."],
["Dove vado dopo?","A Menfi, qui vicino: la città dei Muri Bianchi. Lo scriba Meryra ti insegnerà i segni con cui si scrivono i nomi dei re e degli dèi. Ma porta pazienza: il pennello è più duro del martello."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando vedi una scala ricordati che anche il cielo comincia con un gradino. Se ripassi, ti faccio salire fino in cima. Ankh, udja, seneb, e buon cammino!"]
],
eg_meryra:[
["Chi sei e che fai?","Meryra, quarantasette anni, scriba e maestro nel tempio di Ptah. Tengo i conti dei magazzini e insegno ai ragazzi a leggere, a scrivere e a contare. Uno scriba non porta pesi e non si brucia al sole: te lo dico io, è il mestiere migliore."],
["Come si diventa scriba?","Si comincia da bambini, spesso seguendo il mestiere del padre. Per anni si copiano testi a memoria su cocci di calcare, perché il papiro costa troppo, e se sbagli il maestro non perdona. Un testo che tutti imparano loda lo scriba e prende in giro tutti gli altri mestieri: si chiama la Satira dei mestieri, ed è stato scritto molto prima di me."],
["Quante scritture avete?","Per ora due: i geroglifici, con centinaia di segni a figura, per i templi e per le tombe; e lo ieratico, un corsivo veloce, per i conti e le lettere. Molto dopo di noi arriverà anche il demotico, ancora più rapido. Si scrive in righe, e le figure guardano verso l’inizio della riga: basta guardarle in faccia per capire da che parte si legge."],
["Con cosa si scrive?","Con un pennello di giunco, e non con una penna: la punta si sfrangia e si mastica un po’, così. L’inchiostro è solido, in due pozzetti della tavolozza: nero di carbone e rosso di ocra, legati con la gomma. Il nero è per il testo, il rosso per i titoli e per le correzioni."],
["Cos’è il papiro?","Una pianta che cresce nei canneti del Delta. Si tagliano gli steli a strisce sottili, si incrociano in due strati, si pressano e si battono: la linfa li incolla. I fogli si uniscono in rotoli, lunghi anche parecchi metri: un buon rotolo costa più di quanto sembra."],
["Cosa scrivete?","Di tutto: conti, lettere, contratti, racconti, inni, istruzioni di saggezza. E i grandi libri per l’aldilà, che i vostri studiosi chiameranno Libro dei Morti: il suo titolo vero è \"Libro per uscire al giorno\". Di più non dico, sono parole serie."],
["Cos’è la Casa della Vita?","Il Per-ankh, una parte del tempio dove si copiano e si conservano i libri: testi religiosi, di astronomia, di medicina. C’è un papiro, che un giorno un collezionista di nome Ebers comprerà nel 1873, con ricette di erbe, miele e grasso, e anche incantesimi, perché per noi cura e magia vanno insieme. I medici lo consultano e lo ricopiano da secoli."],
["Parlami di Menfi.","In egizio si chiama Ineb-hedj, i Muri Bianchi. Secondo la tradizione fu fondata dal primo re, Menes, intorno al 3100 a.C., e per secoli è una delle grandi capitali. Qui sta il tempio di Ptah, il dio degli artigiani, e un artigiano che non prega Ptah ha le mani di burro."],
["Cos’è quell’ovale con i segni dentro?","Un cartiglio, un anello di corda che racchiude il nome di un re, per proteggerlo. Ogni faraone ne ha due, quello di nascita e quello di incoronazione. Il nome del re scritto così non si cancella, ed è un bel modo di restare."],
["Un giorno qualcuno saprà ancora leggere questi segni?","Una pietra aiuterà: la Stele di Rosetta, del 196 a.C., che ripete un decreto dei sacerdoti per il re Tolomeo V in geroglifici, in demotico e in greco. Sarà trovata nel 1799 da soldati di Napoleone, e nel 1822 il francese Champollion riuscirà a leggere i geroglifici, che per più di mille anni nessuno capiva. Oggi la pietra sta a Londra, al British Museum."],
["Dove vado dopo?","A Tebe, a sud, la città del dio Amon, che noi chiamiamo Waset. Lì c’è il grande tempio di Karnak, e ai piedi della montagna, dietro un viale di terrazze, c’è una regina che si fa chiamare re: Hatshepsut. Salutala con rispetto."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se trovi un coccio scritto per strada, rispettalo: dentro c’è la mano di un ragazzo che ha faticato. Se ripassi, ti faccio provare il pennello. Ankh, udja, seneb!"]
],
eg_hatshepsut:[
["Chi sei e che fai?","Hatshepsut, figlia di Thutmose I e moglie di Thutmose II. Alla sua morte ho governato per suo figlio, il piccolo Thutmose III, e poi ho preso i titoli di faraone: ho regnato circa ventidue anni, dal 1479 a.C. circa. Tempi interessanti, per una donna con la corona."],
["Come si regna da donna?","Con l’immagine: nelle statue e nei rilievi mi mostrano con il gonnellino e la barba finta dei re, perché il faraone è il re, e io dovevo essere come lui. Nei testi uso anche il femminile. E sulle pareti racconto che il dio Amon è mio padre divino: un buon modo per far tacere i dubbi."],
["Parlami del tuo tempio.","Tre terrazze con lunghi portici, una rampa che sale verso la scogliera, giardini con alberi di mirra. Dicono che il mio fidato Senenmut, capo dei lavori, l’abbia progettato; si chiama Djeser-Djeseru, il \"Sublime dei sublimi\", e sta ai piedi della montagna come se fosse nato con lei. Sarà costruito circa mille anni prima del Partenone."],
["Cos’è la terra di Punt?","Un paese lontano e ricco d’incenso, probabilmente verso il sud del Mar Rosso: dove sia, con precisione, gli studiosi ancora discutono. Nell’anno nono del mio regno ho mandato laggiù una flotta, che è tornata con alberi d’incenso ancora con le radici nelle ceste, ebano, avorio, oro, pelli di leopardo e scimmie. Ho scelto il commercio, non la guerra, e i rilievi di questo tempio lo raccontano."],
["Cosa sono quegli obelischi?","Due pilastri di granito di Assuan, alti circa trenta metri, che ho fatto alzare a Karnak per il dio Amon. Erano i più alti del mondo, a quel tempo. Uno è ancora in piedi, e sarà il più alto obelisco antico rimasto; l’altro si spezzerà e cadrà."],
["Cos’è Karnak?","La casa di Amon-Ra, il dio di Tebe: ogni re vuole aggiungere qualcosa. Io ho messo gli obelischi e una cappella rossa; Seti I e Ramses II, dopo di me, hanno riempito la sala delle colonne: centotrentaquattro colonne a forma di papiro, come una palude di pietra. È fatta per far sentire piccoli: e ci riesce."],
["Chi sono i vostri dèi?","Tanti. Amon-Ra, il re degli dèi di Tebe, con la sposa Mut e il figlio Khonsu; Hathor, la dea della gioia e della musica; Osiri, che regna sul mondo dei morti; Iside e Horus. Molti hanno il corpo d’uomo e la testa d’animale, falco, sciacallo, ibis, ariete: ogni animale racconta qualcosa del carattere del dio."],
["Cos’è la Bella Festa della Valle?","Una volta l’anno la statua di Amon esce da Karnak su una barca sacra, portata a spalla dai sacerdoti, attraversa il Nilo e visita i templi sulla riva ovest, compreso il mio. Le famiglie vanno alle tombe dei parenti, mangiano, bevono e cantano. Una festa dove i vivi fanno compagnia ai morti."],
["Cosa vi mettete addosso?","La mirra e l’incenso sono i miei profumi preferiti, e profumo anche il tempio. Uomini e donne si bordano gli occhi di kohl nero, fatto con minerali macinati e grasso: ripara dal sole e, dicono, dalle malattie degli occhi. E poi parrucche, unguenti, gioielli: un egizio senza profumo è mezzo vestito."],
["Cosa è rimasto di te?","Dopo la mia morte, intorno al 1458 a.C., molti miei nomi e immagini furono scalpellati dai monumenti, e i motivi si discutono ancora. La mia mummia, secondo gli studiosi, fu riconosciuta solo nel 2007, grazie a un dente: oggi riposa al Cairo. Vedi che non si cancella proprio tutto."],
["Dove vado dopo?","Dietro la montagna, oltre il crinale: lì si scava la Valle dei Re, e nel villaggio nascosto di Set-Maat vive Hori, il pittore di tombe. Parla piano: il lavoro che fanno è un segreto del re."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati che un regno si ricorda per ciò che costruisce. Se ripassi, ti faccio vedere i giardini di mirra. Ankh, udja, seneb: vita, prosperità e salute!"]
],
eg_hori:[
["Chi sei e che fai?","Hori, trentanove anni, pittore. Lavoro in una squadra del re insieme a scalpellini, intonacatori, disegnatori e scultori, sotto un capo squadra e due scribi. Mio padre faceva questo mestiere e, se gli dèi vogliono, lo farà anche mio figlio."],
["Cos’è Set-Maat?","Un villaggio costruito apposta per noi, più o meno ai tempi dei primi re di questa dinastia, verso il 1500 a.C.: case a schiera, una strada sola, un muro intorno, a mezz’ora a piedi dalla Valle. Durante la settimana di lavoro dormiamo in capanne di pietra vicino alle tombe e torniamo a casa nei giorni di riposo. I vostri studiosi lo chiameranno Deir el-Medina."],
["Perché i re hanno una valle e non più le piramidi?","Le piramidi si vedevano da lontano e i ladri le trovavano. Adesso si scava nella roccia, in una valle nascosta sotto una cima che sembra una piramide naturale. Gli studiosi conteranno più di sessanta tombe: un cimitero di re, e noi siamo i suoi custodi."],
["Come si fa una tomba?","Si scava con scalpelli di rame e mazzuoli, si intonaca con il gesso, poi il disegnatore traccia le figure in rosso, con una griglia di righe per le proporzioni, e il capo le corregge in nero. Gli scultori incidono i contorni e i pittori riempiono i colori: ogni mano ha il suo compito. Se sbagli un geroglifico, lo rifai, senza discussioni."],
["Che colori usate?","Ocra rossa e gialla, nero di carbone, bianco di calce, verde di minerali di rame e il blu egizio: il primo colore fatto dall’uomo, cuocendo sabbia, calce e rame. Si macinano e si legano con la gomma. Il blu è il mio preferito: ha il colore del cielo e del fiume."],
["Cosa disegnate nelle tombe?","La vita del defunto, i campi, i banchetti, la caccia, e soprattutto il viaggio nell’aldilà. Dopo la morte il cuore viene pesato su una bilancia contro la piuma di Ma’at, la verità: se è leggero come la piuma, si va nei Campi di Iaru, dove il grano cresce alto e non finisce mai. Un buon pittore deve conoscere bene le formule, o rovina l’eternità di qualcuno."],
["Come si prepara un morto?","Chi può si fa imbalsamare, e ci vogliono circa settanta giorni. Si toglie il cervello dal naso con un uncino, si estraggono gli organi, che vanno in quattro vasi, ma il cuore resta al suo posto; poi il corpo si secca con il natron, si unge e si avvolge in bende di lino con gli amuleti. Non è un lavoro per il mio stomaco, ma chi lo fa è un artista a modo suo."],
["Chi è Tutankhamon?","Un ragazzo che diventa re a nove anni, intorno al 1332 a.C., e regna circa nove anni. La sua tomba è piccola, fatta in fretta, e sarà nascosta sotto i detriti e le capanne degli operai di un’altra tomba. Nel 1922 un archeologo, Howard Carter, la troverà intatta, con più di cinquemila oggetti e la famosa maschera d’oro. La \"maledizione\" è solo una leggenda."],
["Cos’è questa storia dello sciopero?","Sotto il re Ramses III, nell’anno 29, intorno al 1157 a.C., le razioni di grano non arrivarono per giorni. I miei colleghi uscirono dal villaggio, si sedettero davanti ai templi con gli attrezzi posati e rimasero lì finché qualcuno li ascoltò. I vostri studiosi lo chiameranno il primo sciopero registrato nella storia, e lo sanno da un papiro di Torino e dai cocci."],
["Come si vive a Set-Maat?","Siamo pagati in razioni, che arrivano dal tempio: grano, pesce, verdure, legna e acqua. E scriviamo tutto, anche le scuse: sui cocci c’è chi manca al lavoro perché è malato, perché deve imbalsamare un parente o perché deve fare la birra! La settimana ha dieci giorni, con due di riposo."],
["Dove vado dopo?","A sud, lungo il fiume, fino a Elefantina, l’isola dell’avorio: lì Henut, una mercante, vende di tutto e ti dà un consiglio sul prezzo. Porta un po’ di orzo in tasca, che non si sa mai."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati che il silenzio è il miglior colore. Se ripassi, ti faccio vedere come si dipinge una piuma di Ma’at. Ankh, udja, seneb!"]
],
eg_henut:[
["Chi sei e che fai?","Henut, cinquantadue anni, mercante di stoffe di lino, olio e perline. Il banco è mio e lo gestisco con mio figlio. Da noi le donne possono comprare, vendere, avere beni propri e andare in tribunale: io lo faccio da una vita, e ci vado volentieri."],
["Cos’è questo posto?","Abu, in egizio, vuol dire \"elefante\" e \"avorio\": i Greci diranno Elefantina. È un’isola proprio sul confine sud, ai piedi della Prima Cataratta, dove il fiume rompe fra gli scogli di granito. C’è un tempio di Khnum, il dio con la testa di ariete che modella gli uomini al tornio da vasaio, e che si dice custodisca le sorgenti della piena."],
["Come si paga qui?","Si baratta. Le monete non esistono: arriveranno molti secoli dopo di noi. Il valore si misura in deben, un peso di rame di circa novanta grammi: una tunica, un paio di sandali e un pesce hanno ognuno il loro prezzo in deben, e poi si paga con la merce che vale altrettanto. Chi baratta con un sorriso paga meno."],
["Cosa arriva dal sud?","Dalla Nubia, che gli egizi chiamano Ta-Sety, \"terra dell’arco\": oro, avorio, ebano, pelli di leopardo, piume di struzzo e incenso. Si dice che il nome \"Nubia\" venga da nub, che vuol dire oro. Le carovane arrivano a dorso d’asino, poi si carica tutto sulle barche: lo vedi dalla fila di sacchi."],
["E dal nord?","Cedro dal Libano, olio, vino, e dal Sinai rame e turchesi. Il cedro si compra a Biblo: un funzionario, Wenamon, ci andrà a comprarne il legno e sarà trattato malissimo, racconteranno. Il cedro serve per le barche sacre e per le porte dei templi; io mi accontento di una trave per il tetto."],
["Cos’è quella scala che scende nel fiume?","Il nilometro: una scalinata con delle tacche, per misurare la piena. Se l’acqua sale troppo poco, il raccolto sarà scarso e la fame busserà alla porta; se sale molto, la terra è contenta. Da queste misure si capisce anche quante tasse chiedere: ecco perché i funzionari ci passano ogni giorno."],
["Perché ad Assuan cavano tanto granito?","Perché per obelischi, statue e sarcofagi ci vuole pietra dura. Si batte la roccia con sfere di pietra ancora più dura, giorno dopo giorno, e poi si trascina il blocco su slitte e lo si carica su una barca, durante la piena. In una cava c’è un obelisco gigante rimasto lì, perché si è incrinato mentre lo scavavano."],
["Cosa si mangia qui?","Pane, cipolle, pesce del fiume, datteri e fichi, formaggio e miele per i dolci, e la henqet, la birra: spessa, e a volte si filtra con un setaccio o si beve con una cannuccia. Si mangia con le mani, seduti per terra su una stuoia o su sgabelli bassi. La carne solo per le feste."],
["Come vi divertite?","Con il senet, una scacchiera di trenta caselle in tre file: si gioca in due, tirando bastoncini o ossicini come dadi, ed è anche il viaggio dell’anima verso l’aldilà. I bambini hanno bambole, palle, trottole e animali di legno. Mio nipote ha un coccodrillo con la bocca che si apre: nessuno lo batte."],
["Come si risolvono le liti?","Davanti al kenbet, un tribunale di anziani e di funzionari del luogo, e i casi più gravi vanno dal visir. Da noi non c’è un codice scritto come quelli di altri paesi: si giudica secondo la Ma’at, la giustizia, e secondo i precedenti. Chi truffa sul peso si fa dei nemici, e dalle mie parti è peggio di una multa."],
["Dove vado dopo?","A sud, in Nubia, a più giorni di barca lungo il fiume. Il re Ramses ha fatto scavare nella montagna un tempio con quattro statue enormi: te lo ritrovi davanti senza accorgertene. Salutalo bene, ma non farti guardare dall’alto in basso."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se passi di nuovo di qui, portami una cosa che non ho mai visto: sono curiosa quasi quanto sono ricca. Ankh, udja, seneb, e buon vento alla tua vela!"]
],
eg_ramses:[
["Chi sei e che fai?","Ramses II, secondo di questo nome, re d’Egitto dal 1279 a.C. per circa sessantasei anni: un regno così lungo che molti sudditi non hanno mai visto un altro re. La mia capitale è Pi-Ramses, nel Delta, ma passo molto tempo anche a Menfi e a Tebe. Dicono che abbia un centinaio di figli: non li ho mai contati."],
["Com’è fatto Abu Simbel?","Due templi scavati nella roccia della Nubia. Quello grande, il mio, ha una facciata con quattro mie statue sedute, alte circa venti metri; sopra la porta c’è il dio Ra-Horakhty con la testa di falco, e in cima una fila di babbuini che salutano il sole. Ci è voluto circa vent’anni, e un po’ di pazienza dei miei scalpellini."],
["Cos’è questa storia del sole nel santuario?","Due volte l’anno, il 22 febbraio e il 22 ottobre, il sole entra per il lungo corridoio e illumina le statue in fondo al santuario, tranne quella del dio Ptah, che sta nell’ombra. Dicono che siano i giorni della mia incoronazione e della mia nascita: gli studiosi ne discutono. Oggi, dopo il trasloco del tempio, la data è spostata di un giorno."],
["E il tempio piccolo?","È di Nefertari, la mia grande sposa, e della dea Hathor. Sulla facciata le sue statue sono alte quanto le mie: è un onore molto raro, per una regina. Le sue pareti e la sua tomba, nella Valle delle Regine, sono tra le più belle d’Egitto."],
["Cos’è la battaglia di Kadesh?","Nel quinto anno del mio regno, nel 1274 a.C., portai l’esercito in Siria contro gli Ittiti del re Muwatalli, vicino alla città di Kadesh, sul fiume Oronte. Due finti disertori ci ingannarono sulla posizione del nemico, e i carri ittiti ci piombarono addosso. Sui muri la presento come una vittoria; per molti studiosi finì in parità, e i muri sono pur sempre miei."],
["Com’è finita la guerra con gli Ittiti?","Con un trattato di pace, intorno al 1259 a.C., con il re Hattusili III: non aggressione, aiuto reciproco in caso di attacco, consegna dei fuggiaschi. È considerato il più antico trattato di pace che si conosca; esistono due versioni, una in egizio e una in accadico, e una tavoletta ittita è a Istanbul. E in seguito sposai una principessa ittita: la diplomazia, a volte, si fa a letto."],
["Cos’altro hai costruito?","Il Ramesseum, il mio tempio a Tebe per l’eternità; la sala delle colonne di Karnak, completata; un grande cortile a Luxor; la città di Pi-Ramses; e il mio nome inciso su tanti monumenti, anche su quelli dei re di prima, ai quali ho aggiunto una nuova iscrizione. Ho riempito l’Egitto di me stesso, ma almeno è tutto ben fatto."],
["Chi era Khaemwaset?","Uno dei miei figli, sacerdote a Menfi, che ha passato la vita a restaurare le piramidi e i monumenti dei re antichi, scrivendo sui blocchi chi li aveva costruiti. Per questo, un giorno, qualcuno lo chiamerà il primo egittologo. Un figlio che rispetta il passato: cosa posso desiderare di più?"],
["Cosa succede a questo tempio nel Novecento?","Quando si costruirà una grande diga ad Assuan, il lago avrebbe sommerso Abu Simbel. Fra il 1964 e il 1968, con aiuti da molti paesi, il tempio fu tagliato in grandi blocchi e rimontato più in alto: circa sessantacinque metri sopra e duecento indietro. Una seconda costruzione per me: ne sono lusingato."],
["Cosa ne è stato di te?","Sono morto a circa novant’anni e mi hanno sepolto nella Valle dei Re, ma la mia mummia fu spostata per salvarla dai ladri; oggi è al Cairo. Si racconta che nel 1976 la mandarono a Parigi per curarla da un fungo, con un passaporto che diceva \"re, defunto\". Almeno un viaggio fuori dall’Egitto l’ho fatto!"],
["Dove vado dopo?","Lontano, verso nord, fino al mare: laggiù Alessandro il Macedone fondò la città di Alessandria. Dopo di me regneranno i Tolomei, e l’ultima, una regina chiamata Cleopatra, ti aspetta vicino a un fuoco altissimo. Va’ al tramonto, quando il cielo è rosso."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando vedi una statua enorme, ricordati che dietro c’è sempre qualcuno che aveva paura di essere dimenticato. Se ripassi, ti faccio sedere sulle mie ginocchia: sono di pietra, ma comode. Ankh, udja, seneb!"]
],
eg_cleopatra:[
["Chi sei e che fai?","Cleopatra Tea Filopatore, che in greco vuol dire \"dea che ama il padre\". Sono regina e faraone dal 51 a.C., quando avevo circa diciotto anni. La mia famiglia, i Tolomei, discende da un generale macedone di Alessandro e governa l’Egitto da quasi trecento anni."],
["Che lingue parli?","Il greco è la lingua mia e della corte, ma sono la prima della mia famiglia a imparare l’egizio. Si dice che ne parli molte altre, fra cui ebraico, arabo, etiope e partico. Parlare con i sudditi nella loro lingua è un buon modo di essere ascoltata."],
["Com’è Alessandria?","Fu fondata da Alessandro nel 332 a.C. sulla costa del Mediterraneo, con porti, strade larghe e dritte, palazzi e templi greci ed egizi. Qui vivono Greci, Egizi, Ebrei e gente di ogni parte del mare: nei tribunali si parla greco, nei mercati anche egizio. È la città più cosmopolita che esista."],
["Parlami del Faro.","Lo fece iniziare il mio avo Tolomei I e lo finì suo figlio, intorno al 280 a.C.: è alto più di cento metri, con la base quadrata, una parte ottagonale e la cima rotonda, dove brucia il fuoco; si dice che uno specchio lo ripeta. L’architetto, si racconta, fu Sostrato di Cnido. Crollerà molto dopo di me, per i terremoti, fra il Medioevo e il Trecento: ma i suoi blocchi e le sue statue riposano ancora sotto il mare."],
["Cos’è il Mouseion?","La Casa delle Muse: un centro di studio con portici, giardini e una sala comune. Accanto c’è la Biblioteca, con centinaia di migliaia di rotoli, le cifre sono incerte, raccolti anche copiando i libri delle navi che arrivano. Qui lavorano Euclide, che scrive di geometria, ed Eratostene, che misura la Terra con le ombre di due bastoni, uno qui e uno ad Assuan. Come finirà? Poco a poco, dicono gli studiosi, e non con un solo incendio."],
["Cos’è successo con Cesare e con Antonio?","Nel 48 a.C. Giulio Cesare arrivò ad Alessandria: ci fu una guerra di palazzo contro mio fratello Tolomeo XIII, e io rimasi regina. Con Cesare ebbi un figlio, Cesarione; dopo la sua morte, nel 44 a.C., mi alleai con Marco Antonio, da cui ebbi altri tre figli. Per me era politica per tenere libero l’Egitto; gli altri l’hanno raccontata come una storia d’amore."],
["Sei più greca o più egizia?","Per il sangue sono macedone, ma per il trono sono egizia: per gli egizi sono un faraone, e mi presento anche come una nuova Iside, la dea madre. I miei predecessori si facevano incoronare a Menfi dal sommo sacerdote di Ptah, e io costruisco o restauro i templi e partecipo alle feste. Un re deve stare con il suo popolo: un popolo ricorda chi si ricorda di lui."],
["Com’è finita?","Nel 31 a.C. la mia flotta e quella di Antonio furono sconfitte da Ottaviano ad Azio, in Grecia; l’anno dopo Ottaviano entrò in Egitto. Secondo la tradizione morii per il morso di un serpente, l’aspide, simbolo dei re; gli storici discutono, e forse fu un veleno. Dopo di me l’Egitto è una provincia di Roma: un tema doloroso, e lo lascio dire a voi."],
["Cosa si commercia da qui?","L’Egitto è il granaio del Mediterraneo: dal porto di Alessandria partono navi cariche di grano per Roma, e di papiro e di lino, e arrivano vino, olio e merci dal mare. Il papiro serve alla Biblioteca e a tutto il mondo che scrive. Per questo, a questa terra, ci tengono tutti."],
["Perché guardate così tanto le stelle?","Per noi il cielo è la dea Nut, che inghiotte il sole la sera e lo partorisce all’alba. Fra le stelle si aspetta Sopdet, che i Greci chiamano Sothis e voi Sirio: quando ricompare prima dell’alba, il Nilo sta per crescere e comincia l’anno. E dalle terrazze della Biblioteca gli studiosi osservano il cielo e lo trasformano in numeri."],
["Dove vado dopo?","Alla fine del molo: il fuoco del Faro è alto, e la sua luce passa il mare. Seguilo e troverai il passaggio. Non avere paura: dopo ogni notte, c’è un’alba."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati dell’Egitto quando vedi una stella o un fuoco in cima a una torre. Se un giorno torni, ti ricevo con musica e datteri. Ankh, udja, seneb, e che Iside ti accompagni!"]
]
};
Object.assign(TOPX,TOPX_EG);
})();
