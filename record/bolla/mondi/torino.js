/* ---------- TORINO · Dal Valentino a Porta Nuova (Parco del Valentino e Po, Mole Antonelliana, Piazza Castello e Palazzo Carignano, Museo Egizio, Piazza San Carlo e Bicerin, portici di via Po, Superga, Stazione di Porta Nuova) ---------- */
/* Un'intera giornata da sinistra a destra: alba al Parco del Valentino, mattina alla Mole, tarda mattina in Piazza Castello,
   mezzogiorno al Museo Egizio, primo pomeriggio in Piazza San Carlo e al Bicerin, pomeriggio sotto i portici di via Po,
   tramonto a Superga, notte alla stazione di Porta Nuova. In fondo al binario c'è il varco.
   Testi, tappe e dialoghi vengono da torino.txt (definitivi). Gli oggetti stanno in elementi.js (nomi che iniziano per "to"). */
(function(){
const GT=372,W1=17400;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln}=PR._rm;
const {merl}=PR._mi;
const {nf,arcate,gente,bici,platano,lampG,lit}=PR._to;
const {OC,OC2,CR,CR2,MT,MT2,RS,RS2,PI,PI2,AR,AR2,VD,VD2,GH,VG}=PR._to.PAL;
const md=(i,n)=>((i%n)+n)%n;
const LIT='rgb(255,226,150)';
let TT=0;
const Z=[0,2400,4600,6800,8800,11000,13400,15400,W1+400];   /* inizio di ognuna delle 8 zone */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
/* ---- cielo: alba rosata con nebbiolina, mattina limpida, mezzogiorno pieno, pomeriggio dorato, tramonto rosa-arancio, crepuscolo viola, notte ---- */
const SKY=[[0,['#9aa6c4','#f6c4b8','#ffe2c0']],[1200,['#7aa8dc','#e0d8dc','#fbe9d0']],[2400,['#5ea6ec','#c4e2f6','#eaf4f6']],[4600,['#5eaaf0','#cce6f8','#f0f6f4']],[6800,['#5aa8f2','#d2eafa','#f4f8f6']],[8800,['#6aa6e6','#e0e4da','#fbeccc']],[11000,['#7aa2d6','#f0d8a4','#fcc878']],[12800,['#7a8ccc','#f4b88a','#ff9c5c']],[14000,['#6a6cc0','#f49a7a','#ff8458']],[15000,['#4a4aa0','#c8607e','#f08a5a']],[15500,['#2c2c78','#7a4a90','#d8706e']],[16100,['#0a1038','#1c2862','#4a3a6a']],[99999,['#0a1038','#1c2862','#4a3a6a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO=`Torino, dall’alba alla notte. Parti all’alba dal Parco del Valentino, dove il Po scorre piano sotto il castello; poi la Mole Antonelliana, con la sua guglia altissima, e Piazza Castello con i palazzi dei Savoia. A mezzogiorno il Museo Egizio, il più antico del mondo dedicato all’antico Egitto; nel primo pomeriggio Piazza San Carlo, i caffè storici e il bicerin. Poi i portici di via Po, fino a Piazza Vittorio e al fiume; al tramonto si sale a Superga, con il panorama sulle Alpi, e a notte la stazione di Porta Nuova ti aspetta con i suoi treni. Il tempo qui si piega: i torinesi di ogni epoca ti vengono incontro, e la città è quella di oggi.`;
const LKTXT=[
`Il Parco del Valentino: circa 45 ettari di verde sulla riva sinistra del Po, aperti ai torinesi quasi tutto il giorno. Qui si corre, si pranza sull’erba e si prendono i battelli. Nella zona c’è anche l’Orto botanico, con un erbario di circa 700.000 esemplari.`,
`Il Castello del Valentino: costruito fra il 1633 e il 1660 per Maria Cristina di Borbone, la "Madama Reale", dagli architetti Carlo e Amedeo di Castellamonte. Fa parte delle Residenze Sabaude, Patrimonio UNESCO. Oggi ospita l’università.`,
`Il Borgo Medievale: un finto villaggio del Quattrocento, costruito per l’Esposizione del 1884. Case, una rocca, una chiesetta, botteghe e un fossato, tutto copiato da castelli e paesi del Piemonte. Sembra vero, e infatti lo si visita volentieri.`,
`Il Po: il fiume più lungo d’Italia, 652 chilometri. A Torino ci sono i circoli dei canottieri, i battelli turistici e i ponti storici. All’alba, con la nebbia, il fiume si copre di silenzio.`,
`La Mole Antonelliana: alta 167,5 metri, il simbolo di Torino. Fu commissionata nel 1862 dalla comunità ebraica come sinagoga all’architetto Alessandro Antonelli, che continuò a cambiare il progetto e ad alzarla sempre di più. Poi la comprò il Comune. Il nome "Mole" viene proprio dalla sua massa di muratura.`,
`L’ascensore panoramico: trasparente, sale in 59 secondi fino a 85 metri, al tempietto sotto la guglia, attraversando l’aula centrale della Mole. Da lassù si vede tutta Torino e le Alpi.`,
`Dal 2000 la Mole ospita il Museo Nazionale del Cinema: lanterne magiche, macchine da presa, manifesti, set. Un percorso a spirale che sale sotto la cupola, e al centro, sdraiati sulle poltrone, i visitatori guardano i film.`,
`In cima alla guglia c’era una statua, il Genio alato, che un uragano abbatté nel 1904. Al suo posto, dal 1906, c’è una stella a dodici punte. La Mole compare anche sulle monete italiane da 2 centesimi.`,
`Piazza Castello: il centro del potere sabaudo, voluta da Carlo Emanuele I con un’ordinanza del 1606 e progettata da Ascanio Vittozzi, con portici tutt’intorno. Da qui partono le vie principali della città.`,
`Palazzo Madama: sopra una porta romana è diventato un castello medievale e poi una residenza barocca, con la facciata settecentesca. Prese il nome da due "Madame Reali", le reggenti. Qui sedette il primo Senato del Regno.`,
`Il Palazzo Reale: la residenza dei Savoia, Patrimonio UNESCO. Dentro, saloni dorati, lampadari di cristallo e un grande scalone. Davanti, una cancellata con i Dioscuri e le statue dei cavalli.`,
`Palazzo Carignano: la casa natale di Vittorio Emanuele II. Qui si riunì il primo Parlamento italiano, il 4 marzo 1861, e il Regno d’Italia fu proclamato il 17 marzo. La facciata è curva, di mattoni rossi e decorazioni di terracotta.`,
`Il Museo Egizio: fondato nel 1824, quando il re Carlo Felice comprò la collezione di Bernardino Drovetti, 5.268 pezzi. È il più antico museo al mondo dedicato interamente all’antico Egitto, con oltre 40.000 reperti. Nel 2015 è stato rinnovato.`,
`Nella sala delle statue ci sono i faraoni del Nuovo Regno: giganti di granito scuro seduti, con lo sguardo fisso. Fra loro c’è Ramses II, il faraone più famoso, ritratto con gli dèi Amon e Hathor.`,
`La tomba di Kha e di sua moglie Merit: l’architetto e la sua sposa, vissuti circa 3.400 anni fa. Fu trovata intatta da Ernesto Schiaparelli nel 1906 e portata a Torino tutta intera, con mobili, cibo, vestiti e perfino i sandali.`,
`Il Libro dei Morti: un rotolo di papiro con formule e disegni per accompagnare il defunto nell’aldilà. Il museo ne conserva tre versioni, fra cui una molto antica. Lunghi papiri illustrati, da guardare da vicino.`,
`Piazza San Carlo: il "salotto di Torino", con portici uniformi e due chiese gemelle in fondo. Al centro c’è la statua di Emanuele Filiberto a cavallo, che i torinesi chiamano "il Caval ’d brons". Qui si trovano caffè storici e pasticcerie.`,
`I caffè storici di Torino: il San Carlo, del 1822, ritrovo di patrioti e intellettuali; il Fiorio, del 1780, in via Po, dove si dice sia nato il cono gelato da passeggio; la Stratta, del 1836; e Baratti & Milano, dove nacque il cremino. Per Torino i caffè sono monumenti.`,
`Al Bicerin, in piazza della Consolata: aperto nel 1763, è il locale dove si beve il bicerin, un bicchierino con caffè, cioccolata e crema di latte, senza mescolare. La ricetta, dicono, è segreta. Ci venivano Cavour, Dumas, Puccini e Nietzsche.`,
`La Porta Palatina: una porta romana a due torri, del I secolo a.C., fra le meglio conservate d’Europa. Ricorda che Torino nasce come Augusta Taurinorum. Accanto, il Quadrilatero è pieno di locali e botteghe.`,
`I portici di Torino: circa 18 chilometri in tutto, di cui più di 12 continui. Quelli di via Po sono in pietra grigia, quelli di via Roma in marmo. Si cammina all’asciutto da una piazza all’altra, con la pioggia come con il sole.`,
`Piazza Vittorio Veneto: una delle più grandi piazze d’Europa, con portici monumentali. Vittorio Emanuele I volle due chilometri di portici dal Palazzo Reale fino qui. Di sera si riempie di gente che esce a bere qualcosa.`,
`La chiesa della Gran Madre di Dio: sulla riva destra del Po, di fronte a Piazza Vittorio, costruita nell’Ottocento. Ha una facciata neoclassica che ricorda il Pantheon di Roma. Si dice che nasconda misteri esoterici, ma sono leggende.`,
`I Murazzi: i lunghi muraglioni di pietra lungo il Po, con arcate dove una volta stavano i barcaioli. Poi sono diventati locali di musica e ritrovo di studenti. Qui il fiume è vicino e si sente il suo odore.`,
`La Basilica di Superga: progettata da Filippo Juvarra per un voto del duca Vittorio Amedeo II, che promise un monumento alla Madonna se avesse vinto la battaglia. Domina la collina e, sotto, nella cripta, riposano molti Savoia. Dalla cupola il panorama arriva alle Alpi.`,
`Il trenino a dentiera Sassi-Superga: parte dal quartiere di Sassi e sale in circa venti minuti, su una cremagliera, fino alla basilica. È un viaggio lento, ma la vista è bella.`,
`Il panorama di Superga: Pio XII, si dice, lo definì "il più bel panorama d’Europa". Si salgono 131 gradini fino al balcone della cupola; da lassù si vede la città, la pianura e tutta la catena delle Alpi.`,
`Il 4 maggio 1949, al ritorno da un’amichevole a Lisbona, un aereo con la squadra del Grande Torino, giornalisti ed equipaggio si schiantò contro il muraglione dietro la basilica: nessuno sopravvisse. Una lapide e dei fiori ricordano ogni anno quel giorno. Un luogo da attraversare in silenzio.`,
`La stazione di Porta Nuova: i lavori cominciarono nel 1861, l’apertura al pubblico fu nel dicembre 1864, e fu completata nel 1868. Ha 20 binari, circa 350 treni al giorno e circa 70 milioni di viaggiatori all’anno: è la terza stazione d’Italia.`,
`Davanti alla stazione c’è Piazza Carlo Felice, con i portici e un giardino con aiuole, fontane e panchine. È il primo luogo che vedono molti viaggiatori, e per molti è un benvenuto.`,
`Da Porta Nuova partono i treni veloci per Milano, i regionali per Genova e per la Liguria, e i treni per la Francia. È il momento in cui la città si svuota piano e il tabellone cambia.`,
`In fondo al binario, la luce di un altro mondo ti chiama.`
];
const NAME={
to_sara:`Sara, la studentessa del Politecnico`,
to_antonelli:`Alessandro Antonelli`,
to_cavour:`Camillo Benso, conte di Cavour`,
to_champollion:`Jean-François Champollion`,
to_franca:`Franca, la barista del Bicerin`,
to_levi:`Primo Levi`,
to_gianni:`Gianni, il tifoso granata`,
to_mario:`Mario, il capostazione`
};
const GREET={
to_sara:`Cerea! Sei già in piedi a quest’ora? Bravo. Io sono Sara, Pierpaolo, e il Valentino all’alba è il mio ufficio: corro, penso e il fiume mi dà ragione.`,
to_antonelli:`Eccolo, il viandante! Guarda su, giovanotto: più su, ancora più su. Sono Antonelli, Pierpaolo, e questa torre è la mia testardaggine fatta di mattoni.`,
to_cavour:`Salve, giovanotto! Sono Camillo Benso, conte di Cavour, e quest’oggi mi diverto a fare il turista a casa mia. Tu sei Pierpaolo? Ottimo: siediti, che di politica non si parla a stomaco vuoto.`,
to_champollion:`Ah, finalmente un visitatore! Vieni, vieni: qui ogni sala è un segreto. Sono Champollion, Pierpaolo, e Torino, con i suoi papiri, mi ha fatto sentire a casa.`,
to_franca:`Bundì! Siediti, neh, che il tavolo di marmo è fresco. Sono Franca, Pierpaolo, e qui il bicerin non si discute: si beve, e basta.`,
to_levi:`Buonasera. Si cammina bene, sotto questi portici, nevvero? Sono Primo Levi, Pierpaolo. Torino è la mia città: la conosco a passo d’uomo, e a passo di chimico.`,
to_gianni:`Cerea. Piano, neh, che qui si parla sottovoce. Io sono Gianni, Pierpaolo, tifoso granata da una vita. Vieni qui con me: è un posto che chiede rispetto.`,
to_mario:`Buonasera, neh! Hai fatto tardi, ma il treno ti aspetta: a Porta Nuova non si perde mai nessuno. Sono Mario, Pierpaolo, e questa stazione è casa mia.`
};
/* ---- un palazzo sabaudo con il portico al piano terra ---- */
function palazzo(g,x,w,h,i,k,wall,opt){const gt=GT,top=gt-h,po=opt.po||PI,fl=Math.max(2,Math.floor((h-84)/34));
 rect(g,wall,x,top,w,h);rect(g,'rgba(255,255,255,.12)',x,top,5,h);rect(g,'rgba(0,0,0,.14)',x+w-12,top,12,h);
 for(let r=0;r<fl;r++)for(let q=0;q<Math.max(2,Math.floor(w/38));q++){const n=Math.max(2,Math.floor(w/38)),wx=x+10+q*(w-34)/(n-1),wy=gt-92-(r+1)*34+6;rect(g,'#3a2e24',wx-2,wy-2,22,30);rect(g,lit(k,i*13+r*7+q)?LIT:'#6a7c94',wx,wy,18,26);rect(g,'rgba(255,255,255,.3)',wx+8.6,wy,1.2,26);if(r==0)rect(g,'#2a2a30',wx-4,wy+24,26,2.4)}
 rect(g,'rgba(0,0,0,.12)',x,gt-94,w,3);rect(g,opt.cor||CR2,x-3,top-6,w+6,8);rect(g,'rgba(0,0,0,.12)',x-3,top+2,w+6,3);
 poly(g,opt.roof||AR,[[x-6,top-6],[x+16,top-22],[x+w-16,top-22],[x+w+6,top-6]]);if(hr(i*5)>.55){rect(g,MT2,x+w*.3,top-36,8,16);rect(g,'#2a2a2a',x+w*.3-2,top-38,12,3)}
 arcate(g,x,gt,w,70,po,k,i,opt.shop!==false);if(opt.sign&&hr(i*7)>.4){const sw=34;rect(g,'#14110f',x+w/2-sw/2,gt-92,sw,9);rect(g,GOLD0,x+w/2-sw/2,gt-92,sw,1.2)}}
const GOLD0='#d9b24a';
/* ---- facciate di strada, zona per zona ---- */
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),top=gt-h;
 if(st==1){/* Valentino: platani e palazzi ottocenteschi lungo il corso, siepi */
  if(hr(i*3)>.4){rect(g,['#d8c690','#cdb87c','#dccb9c'][md(i,3)],x+10,top+30,w-24,h-30);for(let r=0;r<3;r++)for(let q=0;q<4;q++)rect(g,lit(k,i*5+r*4+q)?LIT:'#6a7c94',x+20+q*(w-60)/3,top+44+r*30,14,20);rect(g,'#b8a678',x+6,top+26,w-16,6);poly(g,AR,[[x+4,top+26],[x+20,top+8],[x+w-30,top+8],[x+w-12,top+26]])}
  platano(g,x+w*.5,gt-2,1.5+hr(i*7)*.5,k,TT);rect(g,'#3a6a3a',x-4,gt-14,w+8,14);for(let q=0;q<w/12;q++)dot(g,'#4a7a46',x+q*12,gt-14,8);return}
 if(st==2){palazzo(g,x,w,h,i,k,['#d9a94a','#a8472f','#c8873a','#d8b46a'][md(i,4)],{po:'#cfc8b4',sign:1});return}
 if(st==3){palazzo(g,x,w,h,i,k,['#e2b85a','#e8d9a8','#dcae50'][md(i,3)],{po:'#d8cfb8',cor:'#c8b078'});return}
 if(st==4){palazzo(g,x,w,h,i,k,['#d9a94a','#b8523a','#e0b868','#c8873a'][md(i,4)],{po:'#cdc4ae',sign:1});return}
 if(st==5){palazzo(g,x,w,h,i,k,['#e2b85a','#e8d9a8','#d8a848'][md(i,3)],{po:'#6a6068',cor:'#c8b078',sign:1});return}
 if(st==6){palazzo(g,x,w,h,i,k,['#d9a94a','#cf9e44','#e0b050'][md(i,3)],{po:'#a8a69a',cor:'#b88a34',sign:1});return}
 if(st==7){/* Superga: boschi di faggi sul pendio e un muro di pietra */
  for(let q=0;q<5;q++)dot(g,['#4a6a30','#7a8a34','#b0983a','#8a6a2a','#5a7a34'][(q+i)%5],x+q*w/4,top+30+hr(q+i)*24,30+hr(q*3+i)*14);
  for(let q=0;q<3;q++){const bx=x+16+q*w/3.2;ln(g,'#9a948a',5,[bx,gt-40,bx,gt-90-hr(q+i)*40])}
  rect(g,'#8a8478',x,gt-40,w,40);for(let r=0;r<4;r++)rect(g,'rgba(0,0,0,.12)',x,gt-40+r*10,w,1);rect(g,'#a09a8c',x-3,gt-46,w+6,6);return}
 /* 8: palazzi ottocenteschi gialli attorno alla stazione, di notte con le finestre accese */
 palazzo(g,x,w,h,i,k,['#d8b050','#cfa648','#e0bc60'][md(i,3)],{po:'#d8cfb8',cor:'#b88a34'})}
/* ---- livello 0: cielo, sole, luna, nuvole, nebbiolina dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-15500)/1500,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/14900,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*250;
 if(xs<15200){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,15)}
 const mu=cl((xs-15400)/2200,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*210;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<2400?'rgba(252,226,222,.7)':xs<11000?'rgba(255,252,246,.8)':xs<15000?'rgba(255,176,140,.7)':'rgba(140,120,190,.4)';
 each(o-((t*6)%340)*.02,340,1,(x,i,r)=>nube(g,x+r*100,40+r*46,.8+r*.5,cc));
 const fo=cl(1-xs/2400,0,1)*.4;if(fo>.01){g.fillStyle='rgba(252,206,206,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-8800)/1000,0,1)*cl((12000-xs)/900,0,1)*.12;if(wm>.01){g.fillStyle='rgba(255,208,140,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-12600)/800,0,1)*cl((15200-xs)/900,0,1)*.22;if(wg>.01){g.fillStyle='rgba(255,110,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: collina torinese con Superga, le Alpi con il Monviso, la Mole lontana, il panorama dal tramonto, le luci della stazione ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const sunset=cl((xs-12800)/1200,0,1)*cl((15600-xs)/1000,0,1);
 /* Alpi innevate */
 const alp=(px)=>{const q=px+o;return 70+34*Math.sin(q*.011+1)+22*Math.sin(q*.027)+12*Math.sin(q*.083)};
 g.fillStyle=dim('#a6b4d0');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20;g.lineTo(px,hz-alp(px)+10)}g.lineTo(480,hz+30);g.closePath();g.fill();
 g.fillStyle=dim(mixs('#f4f6fa','#f8b8a0',sunset));g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20,h=alp(px);g.lineTo(px,hz-h+10)}for(let q=24;q>=0;q--){const px=q*20,h=alp(px);g.lineTo(px,hz-h+10+Math.max(10,h*.34)+Math.sin(px*.3+o)*3)}g.closePath();g.fill();
 /* Monviso */
 const vm=env(8400,3600);if(vm>.02){g.globalAlpha=vm;const sx=fx(8400);poly(g,dim('#8a9ab8'),[[sx-110,hz+20],[sx-8,hz-122],[sx+4,hz-128],[sx+16,hz-118],[sx+120,hz+20]]);poly(g,dim(mixs('#f4f6fa','#f8b8a0',sunset)),[[sx-26,hz-84],[sx-8,hz-122],[sx+4,hz-128],[sx+16,hz-118],[sx+34,hz-80],[sx+14,hz-92],[sx,hz-78],[sx-12,hz-90]]);g.globalAlpha=1}
 /* collina torinese */
 g.fillStyle=dim('#7a9a78');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20,ph=hz+2-12*Math.abs(Math.sin((px+o)*.014))-6*Math.sin((px+o)*.05+1);g.lineTo(px,ph)}g.lineTo(480,hz+30);g.closePath();g.fill();
 /* Superga sul crinale (a sinistra) */
 const v1=env(900,2800);if(v1>.02){g.globalAlpha=v1;const sx=fx(900);g.fillStyle=dim('#6a8a6a');g.beginPath();g.moveTo(sx-200,hz+20);g.quadraticCurveTo(sx-60,hz-50,sx,hz-52);g.quadraticCurveTo(sx+80,hz-50,sx+210,hz+20);g.closePath();g.fill();
  rect(g,dim('#e4d6b0'),sx-16,hz-66,32,16);g.fillStyle=tn(dim('#7a9a88'));g.beginPath();g.ellipse(sx,hz-66,10,12,0,Math.PI,0);g.fill();rect(g,dim('#e4d6b0'),sx-26,hz-62,8,12);rect(g,dim('#e4d6b0'),sx+18,hz-62,8,12);g.globalAlpha=1}
 /* la Mole in lontananza, sopra i tetti del centro */
 const v2=env(5600,3400);if(v2>.02){g.globalAlpha=.9*v2;const sx=fx(5600);rect(g,dim('#c8b890'),sx-30,hz-10,60,24);rect(g,dim('#c8b890'),sx-20,hz-34,40,26);poly(g,dim('#c8b890'),[[sx-18,hz-34],[sx-8,hz-52],[sx+8,hz-52],[sx+18,hz-34]]);rect(g,dim('#c8b890'),sx-8,hz-72,16,20);poly(g,dim('#c8b890'),[[sx-5,hz-72],[sx+5,hz-72],[sx,hz-112]]);dot(g,dim('#f4d060'),sx,hz-114,2);
  for(let q=0;q<8;q++)rect(g,dim(q%2?'#d8b878':'#b8886a'),sx-150+q*40,hz+4-hr(q)*10,30,14+hr(q)*10);g.globalAlpha=1}
 /* panorama dal tramonto: tetti, la Mole e la pianura */
 const v3=env(14400,3000);if(v3>.02){g.globalAlpha=.95*v3;const sx=fx(14400);g.fillStyle=dim('#9a8aa0');g.fillRect(sx-300,hz+4,600,20);for(let q=0;q<30;q++){const bx=sx-290+q*20,bh=6+hr(q*3)*14;rect(g,dim(q%3?'#a8788a':'#b88a7a'),bx,hz+8-bh,16,bh+8);if(night>.2||hr(q)>.8)rect(g,'rgba(255,220,150,.8)',bx+6,hz+6-bh*.5,2,2)}
  const mx=sx-40;rect(g,dim('#c0a090'),mx-12,hz-16,24,22);rect(g,dim('#c0a090'),mx-8,hz-34,16,20);poly(g,dim('#c0a090'),[[mx-3,hz-34],[mx+3,hz-34],[mx,hz-78]]);dot(g,'#f4d060',mx,hz-80,2);g.globalAlpha=1}
 /* le luci e i binari verso Porta Nuova */
 const v5=env(16500,3200);if(v5>.02){g.globalAlpha=.92*v5;const sx=fx(16500);[[-180,34,60],[-140,26,84],[-100,40,50],[-30,30,96],[10,44,70],[70,30,110],[120,36,64],[170,28,90],[220,40,54]].forEach((b,i)=>{rect(g,dim('#8a96aa'),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2]);if(night>.3)for(let q=0;q<b[2]/9;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.85)',sx+b[0]-b[1]/2+3+(q%3)*8,hz+20-b[2]+q*9,4,3)});
  ln(g,dim('#6a7488'),2,[sx-250,hz-50,sx-250,hz+14]);ln(g,dim('#6a7488'),2,[sx-250,hz-50,sx-200,hz-50]);g.globalAlpha=1}
 if(night>.35)for(let q=0;q<46;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.3)+')',q*11+hr(q)*8,hz+20+hr(q*3)*8,1.2)}
/* ---- livello 2: profili di alberi, tetti e cupole, zona per zona ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;
  if(zz==1){el(g,dim('#4a7a40'),x+30,hz-40,30,36+r*12);el(g,dim('#5a8a46'),x+78,hz-34,26,30);if(hr(i*3)>.6){rect(g,dim('#d6c690'),x+20,hz-50,70,60);rect(g,dim('#4a4e58'),x+16,hz-56,78,7)}}
  else if(zz==2){rect(g,dim(['#c8873a','#a8472f','#d9a94a'][md(i,3)]),x,hz-34-r*20,w,44+r*20);poly(g,dim(AR),[[x-4,hz-34-r*20],[x+12,hz-48-r*20],[x+w-12,hz-48-r*20],[x+w+4,hz-34-r*20]])}
  else if(zz==3){rect(g,dim('#e2b85a'),x,hz-36-r*12,w,46+r*12);if(hr(i*3)>.6){rect(g,dim('#8a3a2a'),x+30,hz-70-r*10,22,40);poly(g,dim('#8a5a42'),[[x+26,hz-70-r*10],[x+41,hz-90-r*10],[x+56,hz-70-r*10]])}else poly(g,dim(AR),[[x-4,hz-36-r*12],[x+12,hz-52-r*12],[x+w-12,hz-52-r*12],[x+w+4,hz-36-r*12]])}
  else if(zz==4){rect(g,dim(['#b8523a','#d9a94a'][md(i,2)]),x,hz-40-r*14,w,50+r*14);poly(g,dim('#8a5a42'),[[x-4,hz-40-r*14],[x+14,hz-54-r*14],[x+w-14,hz-54-r*14],[x+w+4,hz-40-r*14]]);if(hr(i*3)>.7){rect(g,dim('#2a2a2e'),x+40,hz-84,22,40)}}
  else if(zz==5){rect(g,dim('#e2b85a'),x,hz-38-r*12,w,48+r*12);if(hr(i*3)>.55){g.fillStyle=tn(dim('#6a8a78'));g.beginPath();g.ellipse(x+54,hz-40-r*12,24,26,0,Math.PI,0);g.fill();rect(g,dim('#e4d8b4'),x+36,hz-44-r*12,36,10)}else poly(g,dim(AR),[[x-4,hz-38-r*12],[x+12,hz-52-r*12],[x+w-12,hz-52-r*12],[x+w+4,hz-38-r*12]])}
  else if(zz==6){rect(g,dim(['#d9a94a','#cf9e44'][md(i,2)]),x,hz-44-r*18,w,54+r*18);poly(g,dim(AR),[[x-4,hz-44-r*18],[x+12,hz-58-r*18],[x+w-12,hz-58-r*18],[x+w+4,hz-44-r*18]]);if(hr(i*3)>.8)el(g,dim('#4a7a40'),x+54,hz-72,26,26)}
  else if(zz==7){g.fillStyle=dim(['#5a7a4a','#7a8a3a','#8a7a34'][md(i,3)]);g.beginPath();g.ellipse(x+54,hz+20,76,60+r*50,0,Math.PI,0);g.fill();for(let q=0;q<5;q++)dot(g,dim(['#b0983a','#4a6a34','#8a6a2a'][q%3]),x+14+q*20,hz-14-hr(q+i)*40,9)}
  else{rect(g,dim('#d8b050'),x,hz-44-r*20,w,54+r*20);if(night>.3)for(let q=0;q<10;q++)if(hr(i*9+q)>.4)rect(g,'rgba(255,226,160,.85)',x+10+(q%4)*22,hz-36-r*20+Math.floor(q/4)*14,8,6);rect(g,dim('#6a6e78'),x+8,hz-52-r*20,w-16,6)}});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
/* ---- livello 3: la strada, zona per zona ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,0,2400,1,i=>150+hr(i*5)*60,150);
 each2(190,8,2400,4600,2,i=>190+hr(i*5)*70,170);
 each2(200,9,4600,6800,3,i=>180+hr(i*5)*50,180);
 each2(200,10,6800,8800,4,i=>170+hr(i*5)*60,180);
 each2(190,11,8800,11000,5,i=>180+hr(i*5)*50,170);
 each2(200,12,11000,13400,6,i=>200+hr(i*5)*70,180);
 each2(180,13,13400,15400,7,i=>110+hr(i*5)*60,160);
 each2(190,14,15400,W1+400,8,i=>180+hr(i*5)*70,170);
 /* il filo dei cavi del tram sopra la strada, in città */
 if(o+480>2400&&o<13400){g.strokeStyle='rgba(30,30,34,.5)';g.lineWidth=1;for(let q=0;q<40;q++){const wx=2500+q*270,x=wx-o;if(x<-150||x>630||wx>13300)continue;const a2=gt-150-hr(q)*30;g.beginPath();g.moveTo(x,a2);g.quadraticCurveTo(x+135,a2+14,x+270,a2+(hr(q+1)-.5)*8);g.stroke()}}}
/* ---- vita: anatre e cigni sul Po, airone, piccioni, rondoni al tramonto, corridori e ciclisti ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 /* anatre, cigni e un airone sul fiume */
 [[1900,0],[1990,1],[2090,0],[2240,2]].forEach((d,i)=>{const px=d[0]+Math.sin(t*.3+i*2)*24-cam;if(px<-30||px>510)return;A.setDK(nf(d[0]));const by=GT+30+(i%2)*10+Math.sin(t*1.4+i)*1.2;
  if(d[1]==2){ln(g,'#9aa2aa',2,[px,by,px,by-26]);el(g,'#9aa2aa',px,by-30,5,8);ln(g,'#6a7280',2,[px,by-36,px+8,by-44,px+14,by-44]);return}
  if(d[1]==1){el(g,'#f4f4f0',px,by-4,12,6);ln(g,'#f4f4f0',3,[px+8,by-6,px+11,by-18]);dot(g,'#f4f4f0',px+12,by-19,2.6);rect(g,'#e88a2a',px+14,by-20,3,1.6);return}
  el(g,'#8a7a5a',px,by-3,7,4);dot(g,'#2a6a4a',px+6,by-7,3);rect(g,'#e8b02a',px+8.6,by-7,3,1.6)});
 /* piccioni in Piazza San Carlo e in via Po */
 [9020,9500,9980,11300,12100].forEach((cx,gi)=>{for(let i=0;i<5;i++){const wx=cx+i*38+hr(i+gi)*26,px=wx-cam;if(px<-20||px>500)continue;A.setDK(nf(wx));const fly=(Math.sin(t*.3+i*2.1+gi)>.93);const by=GT+36+hr(i*3+gi)*60-(fly?30+Math.sin(t*9+i)*8:0),bx=px+Math.sin(t*.5+i)*10;
  el(g,'#8a8e9a',bx,by-5,6,3.6);dot(g,'#6a7a8a',bx+5,by-8,2.8);rect(g,'#d8a0a8',bx+7.4,by-8,2,1);if(fly){ln(g,'#9aa0aa',1.6,[bx-2,by-6,bx-8,by-12-Math.sin(t*9+i)*4]);ln(g,'#9aa0aa',1.6,[bx+1,by-6,bx+7,by-12-Math.sin(t*9+i)*4])}else{rect(g,'#6a6e78',bx-2,by-2,1,3);rect(g,'#6a6e78',bx+1,by-2,1,3)}}});
 /* rondoni al tramonto */
 const sa=cl((xs-13300)/500,0,1)*cl((15300-xs)/600,0,1);
 if(sa>.05)for(let i=0;i<9;i++){const bx=((i*97+t*(64+i*6))%620)-70,by=70+hr(i)*120+Math.sin(t*2.4+i*2)*26,w=Math.sin(t*14+i)*3;g.strokeStyle='rgba(40,26,44,'+(.8*sa)+')';g.lineWidth=2;g.beginPath();g.moveTo(bx-8,by-w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke()}
 /* gabbiani sopra il fiume la mattina presto */
 const ga=cl((xs-300)/400,0,1)*cl((3000-xs)/500,0,1);
 if(ga>.05)for(let i=0;i<4;i++){const bx=((i*131+t*(40+i*7))%640)-80,by=70+hr(i)*90+Math.sin(t*1.6+i*2)*20,w=Math.sin(t*8+i)*4;g.strokeStyle='rgba(60,70,90,'+(.8*Math.min(1,ga))+')';g.lineWidth=2.2;g.beginPath();g.moveTo(bx-9,by+w);g.quadraticCurveTo(bx-4,by-4,bx,by);g.quadraticCurveTo(bx+4,by-4,bx+9,by+w);g.stroke()}
 /* corridori nel parco e ciclisti in città */
 [[200,2300,60,0],[2500,4400,-34,1],[11100,13300,34,2]].forEach((rg,ri)=>{for(let i=0;i<(ri?2:3);i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.2),wx=rg[0]+(((t*sp+i*span/3)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));const d=sp>0?1:-1,by=GT+22+i*9;g.save();g.translate(px,by);g.scale(d*.6,.6);
  if(ri){[[-13,0],[13,0]].forEach(w=>{g.strokeStyle=tn('#2a2a2e');g.lineWidth=2.4;g.beginPath();g.arc(w[0],-10,10,0,7);g.stroke()});ln(g,['#2a6aaa','#c8302a','#2a8a5a'][(i+ri)%3],2.4,[-13,-10,-2,-24,8,-24,13,-10]);fig(g,-2,-16,t,{f:1,s:.55,skin:'#e0b090',top:['#e8d8c0','#6a8aa8','#c8503a'][i],bot:'#2c3a5a',hair:'#1a1a1a'})}
  else fig(g,0,0,t*3,{f:1,s:.7,ph:i,skin:'#e0b090',top:['#e8505a','#2a8a9a','#f2c82a'][i],bot:'#2a2a36',hair:'#2a1a10'});g.restore()}})}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[0,2400,'#cdc6ae','g'],[2400,4600,'#b6b2aa','c'],[4600,6800,'#cfc8b4','m'],[6800,8800,'#c8c2b0','m'],[8800,11000,'#bdb6a4','c'],[11000,13400,'#a8a8a6','m'],[13400,15400,'#a89a80','g'],[15400,W1+400,'#686a74','p']];
 rect(g,'#d8d0bc',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  if(z[3]=='g'){const gr=z[0]==0;for(let q=0;q<110;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.2)':'rgba(70,50,30,.2)',x0+((q*47)%Math.max(1,x1-x0)),gt+8+hr(q+3)*138,2+hr(q)*4,1.6);if(gr){rect(g,'#6a9a50',x0,gt+3,x1-x0,16);for(let q=0;q<40;q++)rect(g,'rgba(40,90,40,.3)',x0+((q*29)%Math.max(1,x1-x0)),gt+5+hr(q)*12,2,4);rect(g,'rgba(255,255,255,.22)',x0,gt+3,x1-x0,10)}else{rect(g,'#6a8a48',x0,gt+3,x1-x0,12)}}
  if(z[3]=='m'||z[3]=='c'){const cob=z[3]=='c';for(let r=0;r<7;r++){const yy=gt+9+r*19,off=(r%2)*(cob?14:0),bw=cob?(34+r*8):(70+r*12),s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil((x1-x0)/bw)+2;k++){const px=s0+k*bw-cam+off,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,.14)':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,.04)',px,yy,bw-2,15);rect(g,'rgba(0,0,0,.16)',px,yy,1.3,17)}rect(g,'rgba(0,0,0,.1)',x0,yy+15,x1-x0,1.4)}}
  if(z[3]=='p'){rect(g,'#9a9ca6',x0,gt+3,x1-x0,24);rect(g,'#e8d84a',x0,gt+27,x1-x0,3);for(let q=0;q<40;q++)rect(g,'rgba(255,255,255,.1)',x0+((q*53)%Math.max(1,x1-x0)),gt+34+hr(q)*110,3,1.6);for(let r=0;r<6;r++)rect(g,'rgba(0,0,0,.14)',x0,gt+40+r*22,x1-x0,1.4)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1400,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const gd=cl((cam-9000)/700,0,1)*cl((13400-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.1*gd)+')',0,gt,480,150);
 const sg=cl((cam-13000)/700,0,1)*cl((15400-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Sara: tuta da corsa, fascia per capelli, coda, zaino, bottiglia d'acqua */
 NP('to_sara',NAME.to_sara,2110,GREET.to_sara,{skin:'#e8b890',top:'#e8505a',bot:'#2a2a36',hair:'#4a2a18',s:.98},(g,b,t)=>{rect(g,'#2a8a9a',-17,-86+b,6,34);rect(g,'#1c6a78',-17,-86+b,6,5);rect(g,'#f4f0e8',-11,-109+b,24,4);ln(g,'#4a2a18',5,[-10,-106+b,-20,-92+b+Math.sin(t*3)*2,-18,-80+b]);
  rect(g,'#7ac8e8',20,-66,6,14);rect(g,'#f4f4f4',20,-70,6,4);rect(g,'rgba(255,255,255,.4)',21,-64,1.4,10)}),
 /* Antonelli: redingote nera, cilindro, barba grigia, rotolo di progetti, matita */
 NP('to_antonelli',NAME.to_antonelli,3330,GREET.to_antonelli,{skin:'#e0b898',top:'#1c1c22',bot:'#1c1c22',hair:'#b0b0b0',long:true,s:1.02},(g,b,t)=>{poly(g,'#1c1c22',[[-14,-90+b],[14,-90+b],[22,-4],[-22,-4]]);rect(g,'#f4f0e8',-3,-90+b,6,10);rect(g,'#1c1c22',-12,-126+b,24,18);rect(g,'#1c1c22',-17,-110+b,34,4);rect(g,'#6a6a70',-12,-112+b,24,2.4);
  poly(g,'#b0b0b0',[[-7,-96+b],[9,-96+b],[7,-84+b],[0,-80+b],[-6,-86+b]]);ln(g,'#c89a50',1.6,[12,-104+b,14,-110+b]);rect(g,'#e8dcb8',20,-80,7,34);rect(g,'rgba(0,0,0,.2)',20,-80,2,34);ln(g,'#8a6a2a',1,[21,-80,26,-74])}),
 /* Cavour: redingote scura, panciotto, occhiali tondi, barba corta, cilindro, una carta in mano */
 NP('to_cavour',NAME.to_cavour,6330,GREET.to_cavour,{skin:'#e8c0a0',top:'#2a2a34',bot:'#2a2a34',hair:'#5a4a3a',long:true,s:1.0},(g,b,t)=>{poly(g,'#2a2a34',[[-14,-90+b],[14,-90+b],[22,-4],[-22,-4]]);rect(g,'#c8b890',-7,-84+b,14,26);rect(g,'#2a2a34',-11,-124+b,22,16);rect(g,'#2a2a34',-16,-110+b,32,4);
  g.strokeStyle=tn('#c8a050');g.lineWidth=1.2;g.beginPath();g.arc(7,-100+b,3.6,0,7);g.stroke();g.beginPath();g.arc(-1,-100+b,3.6,0,7);g.stroke();ln(g,'#c8a050',1,[2.6,-100+b,3.4,-100+b]);poly(g,'#5a4a3a',[[-7,-96+b],[9,-96+b],[6,-86+b],[-5,-88+b]]);
  rect(g,'#f4ecd0',22,-72,14,18);for(let q=0;q<3;q++)rect(g,'rgba(40,40,60,.5)',24,-69+q*4.4,10,1)}),
 /* Champollion: redingote scura, cravatta allentata, capelli ricci disordinati, taccuino pieno di segni */
 NP('to_champollion',NAME.to_champollion,7570,GREET.to_champollion,{skin:'#e0b898',top:'#3a2e2a',bot:'#2a2a30',hair:'#2a1a10',s:1.0},(g,b,t)=>{for(let q=0;q<7;q++)dot(g,'#2a1a10',-12+q*4.2,-112+b+(q%2)*-3,5);dot(g,'#2a1a10',-13,-100+b,4);poly(g,'#f4f0e8',[[-3,-90+b],[5,-90+b],[2,-76+b]]);
  rect(g,'#e8dcb8',-34,-70,16,22);rect(g,'rgba(0,0,0,.2)',-34,-70,2,22);for(let q=0;q<3;q++)for(let r=0;r<3;r++)rect(g,'rgba(60,30,10,.7)',-30+r*4.4,-66+q*6,3,3.4);ln(g,'#2a2a2e',1.4,[-20,-60,-14,-70])}),
 /* Franca: grembiule scuro lungo, camicia bianca, capelli raccolti, occhiali con catenella, vassoio di bicchierini */
 NP('to_franca',NAME.to_franca,10350,GREET.to_franca,{skin:'#e8b890',top:'#f4f0e8',bot:'#2a2228',hair:'#b8b0a8',long:true,s:1.0},(g,b,t)=>{poly(g,'#2a2228',[[-13,-72+b],[13,-72+b],[22,-4],[-22,-4]]);rect(g,'#2a2228',-13,-72+b,26,26);dot(g,'#b8b0a8',-4,-116+b,6);
  g.strokeStyle=tn('#4a4a4a');g.lineWidth=1.1;g.beginPath();g.arc(7,-100+b,3.8,0,7);g.stroke();g.beginPath();g.arc(-1,-100+b,3.8,0,7);g.stroke();ln(g,'#c8c8c8',.8,[-5,-96+b,-8,-86+b,-4,-80+b,6,-80+b,8,-96+b]);
  rect(g,'#c8a868',16,-62,26,3);for(let q=0;q<4;q++){rect(g,'rgba(240,240,255,.8)',18+q*6,-74,4,12);rect(g,'#7a4a2a',18.4+q*6,-68,3.2,5)}}),
 /* Primo Levi: giacca di tweed, cravatta, occhiali, capelli grigi, un libro sotto il braccio */
 NP('to_levi',NAME.to_levi,11600,GREET.to_levi,{skin:'#e0b898',top:'#8a7a62',bot:'#4a4a52',hair:'#c0c0c0',s:1.0},(g,b,t)=>{for(let q=0;q<9;q++)rect(g,'rgba(60,50,36,.28)',-11+q*2.8,-88+b+(q%2)*8,1.2,10);rect(g,'#2a3a5a',-1.4,-90+b,3,30);poly(g,'#f4f0e8',[[-4,-90+b],[4,-90+b],[0,-84+b]]);
  g.strokeStyle=tn('#2a2a2a');g.lineWidth=1.2;g.beginPath();g.arc(7,-100+b,3.8,0,7);g.stroke();g.beginPath();g.arc(-1,-100+b,3.8,0,7);g.stroke();ln(g,'#2a2a2a',1,[2.8,-100+b,3.2,-100+b]);
  rect(g,'#6a2a2a',18,-70,10,32);rect(g,'#e8dcb8',27,-70,2,32);rect(g,'rgba(255,255,255,.3)',20,-66,6,1.6)}),
 /* Gianni: sciarpa granata, cappellino con il toro, giaccone scuro, mazzo di fiori */
 NP('to_gianni',NAME.to_gianni,15030,GREET.to_gianni,{skin:'#d8a888',top:'#2a2a30',bot:'#3a3a44',hair:'#c0c0c0',s:1.0},(g,b,t)=>{rect(g,'#7a1c24',-13,-92+b,26,8);rect(g,'#7a1c24',-4,-86+b,7,28);rect(g,'#f4f0e8',-4,-72+b,7,3);
  rect(g,'#7a1c24',-12,-114+b,24,8);poly(g,'#7a1c24',[[8,-109+b],[20,-107+b],[8,-105+b]]);dot(g,'#f4f0e8',0,-110+b,2.2);
  for(let q=0;q<5;q++){ln(g,'#3a6a3a',1.2,[24+q*2,-48,24+q*2.6,-62]);dot(g,['#f4f0e8','#c8281e','#e8c040'][q%3],24+q*2.6,-64,2.6)}}),
 /* Mario: divisa blu con bottoni dorati, cappello rosso con visiera, paletta, fischietto, taccuino */
 NP('to_mario',NAME.to_mario,16760,GREET.to_mario,{skin:'#e0b090',top:'#1c2a4a',bot:'#1c2a4a',hair:'#14110f',s:1.02},(g,b,t)=>{rect(g,'#c8281e',-12,-114+b,26,7);poly(g,'#8a1e16',[[8,-108+b],[22,-106+b],[8,-103+b]]);dot(g,GOLD0,1,-112+b,1.8);
  for(let q=0;q<4;q++)dot(g,GOLD0,0,-84+b+q*10,1.5);rect(g,'rgba(255,255,255,.15)',-13,-90+b,3,46);ln(g,'#c8c8c8',1,[4,-88+b,8,-70+b]);dot(g,'#c8c8c8',8,-69+b,2);
  ln(g,'#c8c8c8',1.6,[24,-66,24,-38]);dot(g,'#c8281e',24,-72,7);dot(g,'#f4f4f4',24,-72,3.6);rect(g,'#2a2a30',-35,-62,12,16)})
];
/* ---- testi della scheda: le tappe, nell'ordine in cui si incontrano ---- */
const LX=[450,1000,1560,2050, 3300,3700,4000,4300, 4980,5500,5960,6400, 7500,7880,8200,8520, 9250,9850,10300,10750, 11450,12000,12500,13050, 13750,14150,14560,15020, 15900,16330,16700,17080];
/* ---- oggetti lungo il percorso ---- */
const props=[
 ['totarga',250,'PARCO DEL VALENTINO'],['toplatano',120,1.2],['topanca',340,0],['tolamp',380],['tofontanella',470],['tomappa',540],['toscoiattolo',700,1],['toplatano',780,1.1],['tolamp',860],['tocastello',1000],['topanca',1230,0],['toplatano',1330,1.2],['tolamp',1390],['tocestino',1440],['toscoiattolo',1420,-1],
 ['toborgo',1560],['tolamp',1760],['topanca',1830,0],['topo',2060],['tolamp',2290],
 ['totarga',2480,'VIA MONTEBELLO'],['tolamp',2620,1],['tochiosco',2800],['tobici',2990],['totavolini',3040],['tomole',3300],['tolamp',3520,1],['totavolini',3640],['tobici',3830],['tolamp',3980,1],['totavolini',4160],['tochiosco',4400],['tolamp',4520,1],
 ['totarga',4690,'PIAZZA CASTELLO'],['tobandiere',4800],['toequestre',4980,0],['tolamp',5160,1],['topalmadama',5500],['tofontanella',5700],['toaiuola',5800,110],['toreale',5960],['tolamp',6180,1],['tocarignano',6400],['tobandiere',6640],
 ['totarga',6900,'VIA ACCADEMIA DELLE SCIENZE'],['tolamp',7020,1],['toegizio',7500],['tolamp',7820,1],['tocartellone',7960],['tobacheca',8200],['tocestino',8300],['tolamp',8420,1],['tocartellone',8560],['tobici',8700],
 ['totarga',8900,'PIAZZA SAN CARLO'],['tolamp',9000,1],['toequestre',9180,1],['tosancarlo',9420],['totavolini',9650],['tocaffe',9850,'CAFFÈ SAN CARLO'],['tolamp',10060,1],['tobicerin',10300],['tovetrina',10580,'CIOCCOLATO'],['toporta',10780],['tolamp',10950,1],
 ['totarga',11100,'VIA PO'],['tolamp',11230,1],['tobancarella',11420],['tobancarella',11820],['tolamp',11900,1],['tovittorio',12060],['togranmadre',12560],['tolamp',12780,1],['tomurazzi',13090],
 ['tofaggio',13500,1.1],['tosuperga',13750],['tofaggio',14000,1],['totram',14160],['topanca',14340,0],['topanorama',14600],['tomappa',14400,'SENTIERI'],['tofaggio',14800,1.2],['tolapide',15020],['tostaccionata',15240,150],
 ['totarga',15500,'CORSO VITTORIO EMANUELE II'],['tostazione',15900],['tolamp',16150,1],['topiazzacf',16340],['totabellone',16560],['tocarrello',16620],['todistributore',16420],['totreni',16760],['toorologio',16690],['tovarco',17030]];
/* un lampione ogni tanto, dove la strada è libera */
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'torino',name:'Torino · Dal Valentino a Porta Nuova',width:W1,sky:['#9aa6c4','#f6c4b8','#ffe2c0'],gt:372,gr:['#cdc6ae','#8a8478'],chord:[196,246.9,293.7,370],amb:'#ffe6c0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da torino.txt) --- */
(function(){
const TOPX_TO={
to_sara:[
[`Come ti chiami e cosa studi?`,`Sara, ventidue anni, studio ingegneria al Politecnico. Vengo da fuori, ma Torino mi ha adottata subito. Di mattina corro, nel pomeriggio studio e la sera faccio l’aperitivo: neh, vita da studentessa.`],
[`Che cos’è il Parco del Valentino?`,`Circa 45 ettari di verde lungo la riva sinistra del Po. Ci si corre, si pranza sull’erba, si prende il sole. È il parco di tutti i torinesi, e d’estate è pieno fino a notte.`],
[`Com’è il castello?`,`Il Castello del Valentino: costruito fra il 1633 e il 1660 per la "Madama Reale", Maria Cristina di Borbone, dagli architetti Carlo e Amedeo di Castellamonte. È in stile francese, con i tetti spioventi e le torri. Fa parte delle Residenze Sabaude, Patrimonio UNESCO.`],
[`Perché l’università è nel castello?`,`Oggi ospita una parte della Facoltà di Architettura, quella dove studiano i miei amici. Dormire in un castello è un’altra storia, ma studiare sì. Sembra di studiare in un film.`],
[`Cos’è il Borgo Medievale?`,`Un villaggio finto del Quattrocento, costruito per l’Esposizione del 1884, copiando castelli e case del Piemonte. Ci sono la rocca, le botteghe, il ponte levatoio. È finto, ma ben fatto: sembra davvero medievale.`],
[`Come si vive il Po a Torino?`,`Con i canottieri, i battelli turistici e i ponti storici. Il Po è il fiume più lungo d’Italia, 652 chilometri, e qui è largo e lento. All’alba, con la nebbia, è il momento più bello.`],
[`Cosa c’è all’Orto botanico?`,`Uno dei più importanti centri di studio d’Italia: un erbario con circa 700.000 esemplari e una biblioteca con circa 500.000 volumi. Ci vado a studiare quando fa caldo, perché ha tanta ombra. Le piante sono buone compagne di studio.`],
[`Cosa si faceva a Torino Esposizioni?`,`Nel palazzo, fino al 1990, si teneva il Salone dell’Automobile, e Torino era la capitale dell’auto. Oggi c’è il Palazzo del Ghiaccio e il Teatro Nuovo. A volte si sente ancora la nostalgia dei motori.`],
[`Perché Torino è la città dell’auto?`,`Perché la Fiat nacque qui nel 1899, e con lei una città di operai e di ingegneri. Il Lingotto è un’ex fabbrica con la pista di prova sul tetto. Il Politecnico, poi, ha formato generazioni di ingegneri.`],
[`E la cucina?`,`Bagna cauda, tajarin, agnolotti, vitello tonnato, bunet. E il gianduiotto, un cioccolatino alle nocciole: si dice nato nell’Ottocento a Torino. Se mi offri un caffè, ti dico anche dove comprarlo.`],
[`Che cos’è "bogianen"?`,`"Non ti muovere", in piemontese: è lo spirito dei torinesi, testardi e un po’ riservati. Si dice che nasca dai soldati sabaudi che resistevano a ogni costo. E ci identifichiamo, anche con un po’ di orgoglio.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo! Va’ verso la Mole: te la vedi da lontano. E se ti viene voglia di tornare, a quest’ora trovi qui sempre qualcuno che corre. Cerea, e buona giornata!`],
],
to_antonelli:[
[`Chi sei e dove sei nato?`,`Alessandro Antonelli, nato a Ghemme, nel Novarese, nel 1798. Sono architetto e ingegnere, e ho lavorato soprattutto in Piemonte. Mi hanno chiamato "il genio della muratura", e un po’ ci credo.`],
[`Come è nata la Mole?`,`Nel 1862 la comunità ebraica di Torino, dopo aver ottenuto i diritti civili con lo Statuto Albertino del 1848, mi incaricò di costruire una sinagoga. Volevo qualcosa di grande, un edificio che parlasse. Il progetto crebbe, e anche il costo.`],
[`Perché è così alta?`,`Perché ogni anno la cambiavo, la alzavo ancora. L’altezza finale è di 167,5 metri; quando morii, nel 1888, era di circa 153. Un’altra mano la completò, ma l’idea è mia.`],
[`Perché si chiama "Mole"?`,`Per la sua massa di muratura: all’epoca era una delle costruzioni in muratura più alte del mondo. Il Comune di Torino la comprò, perché la comunità ebraica non aveva più i soldi. Fu dedicata a Vittorio Emanuele II.`],
[`Chi la finì?`,`Dopo di me la proseguirono, a partire dal 1877, il Comune e mio figlio Costanzo. Le ultime parti furono completate nel 1897. Io non vidi la fine: quando si lavora a un’opera così, si lavora per i figli.`],
[`Com’è fatta dentro?`,`Un enorme salone vuoto, con la volta altissima: si vede la guglia dall’interno. Oggi un ascensore di vetro sale fino a 85 metri, in 59 secondi. Per me era un sogno, oggi è un mezzo di trasporto.`],
[`Cos’è il Genio alato?`,`La statua in cima alla guglia: un uragano la abbatté nel 1904 e rimase incastrata. Al suo posto, dal 1906, c’è una stella a dodici punte. Anch’io la mia stella la inseguivo da una vita.`],
[`Cos’è il Museo del Cinema?`,`Dal 2000 la Mole ospita il Museo Nazionale del Cinema: lanterne magiche, macchine da presa, manifesti, set. Un luogo che amo, perché racconta come le immagini siano diventate vita. Se uno vuole una sala per i sogni, eccola.`],
[`Hai costruito altro?`,`Sì: la cupola di San Gaudenzio a Novara, alta più di 120 metri, e tante case a Torino, fra cui la Casa Scaccabarozzi, detta "Fetta di polenta", strettissima e a forma di cuneo. Mi piaceva stupire la gente.`],
[`Cos’è la "Fetta di polenta"?`,`Una casa a forma di cuneo, larga pochi metri su un lato e più ampia sull’altro, nata da un terreno minuscolo. Si dice che nessuno credesse che reggesse, ma regge ancora. Un’altra sfida, vinta.`],
[`Cosa ne pensi dei critici?`,`Mi dicevano pazzo: "una torre sopra una torre". Ma dopo cent’anni nessuno immagina Torino senza la Mole. Le critiche passano, i mattoni restano.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo, va’ pure! Se hai fiato, sali con l’ascensore, e guarda Torino dall’alto. Ricordati: la bellezza costa fatica, e l’altezza più ancora.`],
],
to_cavour:[
[`Chi sei e dove sei nato?`,`Nato a Torino il 10 agosto 1810, in una famiglia nobile. Studiai da ufficiale, ma mi appassionai all’agricoltura, ai canali e all’economia. Dopo, venne la politica.`],
[`Che cosa hai fatto in agricoltura?`,`Nelle mie tenute di Leri, nel Vercellese, introdussi concimi e macchine nuove, e coltivai riso e barbabietole. Fui un imprenditore agricolo prima di essere un politico. E promossi anche il Canale Cavour per irrigare le risaie.`],
[`Come sei diventato primo ministro?`,`Nel 1852 divenni presidente del Consiglio del Regno di Sardegna, e vi restai quasi sempre fino alla morte. Sostenni le ferrovie, le banche, il commercio e i diritti civili. Per fare un Paese bisogna prima farlo funzionare.`],
[`Cosa è successo nel 1861?`,`Il primo Parlamento italiano si riunì qui, a Palazzo Carignano, il 4 marzo 1861. Il 17 marzo fu proclamato il Regno d’Italia, con Vittorio Emanuele II come re. Fu il giorno in cui l’idea diventò realtà.`],
[`Chi ha vissuto a Palazzo Carignano?`,`È la casa natale di Vittorio Emanuele II. Un palazzo barocco di mattoni rossi, con la facciata curva. Dentro l’aula del Parlamento subalpino è ancora com’era: sembra di sentire le voci.`],
[`Che cos’è il Risorgimento?`,`Il movimento che portò all’unità d’Italia, con le guerre, le alleanze e le rivolte. Io puntai sulla diplomazia e sull’esercito piemontese; Garibaldi sull’impeto e sulla spedizione dei Mille. Due strade diverse per la stessa meta.`],
[`Come ti ricordano i torinesi?`,`Con una statua, una piazza e un’infinità di vie. Ma soprattutto con i caffè: frequentavo il Fiorio, in via Po, e il Bicerin. Ai tavolini si prendevano grandi decisioni, e qualche volta grandi pettegolezzi.`],
[`Che cos’è Piazza Castello?`,`La piazza del potere dei Savoia, voluta da Carlo Emanuele I con un’ordinanza del 1606 e progettata da Ascanio Vittozzi. Con Palazzo Madama e Palazzo Reale, è il cuore della città. Qui si decideva il destino di mezza Italia.`],
[`Che cos’è Palazzo Madama?`,`Un castello medievale su una porta romana, poi residenza barocca con la facciata del Settecento. Prese il nome dalle "Madame Reali", le reggenti. Fu anche la sede del primo Senato del Regno.`],
[`Perché Torino non è rimasta capitale?`,`Fu capitale solo per pochi anni: nel 1865 il Governo si trasferì a Firenze, e nel 1871 a Roma, dopo la presa della città. Per i torinesi fu un dispiacere, ma anche un sacrificio per l’Italia. Una città che ha dato tutto e non l’ha mai pretesa.`],
[`Come finì la tua vita?`,`Morii il 6 giugno 1861, per la febbre, poche settimane dopo la nascita del Regno. Avevo cinquant’anni. Non vidi Roma capitale, ma l’avevo scritto sul mio programma.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Vai, Pierpaolo, e passa al Museo Egizio: una città che ama l’Egitto non è una città piccola. Quando ti stanchi, un bicerin ti rimette in piedi. Cerea, e salutami i portici.`],
],
to_champollion:[
[`Chi sei e dove sei nato?`,`Jean-François Champollion, nato a Figeac, in Francia, nel 1790. Fin da ragazzo studiavo le lingue: greco, latino, ebraico, arabo, copto. Il mio sogno era leggere i geroglifici.`],
[`Che cosa avevi scoperto?`,`Nel 1822 riuscii a decifrare i geroglifici, partendo dalla Stele di Rosetta, che aveva lo stesso testo in tre scritture. Capii che i segni erano insieme suoni e idee. Fu una gioia grande, tanto da svenire per l’emozione, si racconta.`],
[`Perché sei venuto a Torino?`,`Nel 1824, per studiare la collezione egizia, appena acquistata dal re Carlo Felice. Qui c’erano papiri e statue che nessun altro possedeva. Usai i papiri di Torino per mettere alla prova il mio metodo, e funzionò.`],
[`Com’è nata la collezione?`,`Nel 1824 il re Carlo Felice comprò la raccolta di Bernardino Drovetti, console francese in Egitto: 5.268 pezzi. È il nucleo del museo, il più antico al mondo dedicato interamente all’antico Egitto. Una scelta lungimirante.`],
[`Cosa si vede oggi?`,`Più di 40.000 reperti: statue, sarcofagi, papiri, oggetti di vita quotidiana. Nel 2015 il museo è stato rinnovato, e nel 2024 ha avuto più di un milione di visitatori. L’Egitto, a Torino, è tutt’altro che un museo polveroso.`],
[`Chi è Ramses II?`,`Il faraone più famoso del Nuovo Regno, che regnò più di sessant’anni. Qui c’è una sua statua con gli dèi Amon e Hathor. Gli egizi lo chiamavano "il Grande Antenato".`],
[`Che cos’è la tomba di Kha?`,`La tomba intatta di Kha, architetto, e di sua moglie Merit: l’archeologo Ernesto Schiaparelli la trovò nel 1906 e la portò a Torino tutta intera. Dentro c’erano mobili, cibo, abiti e oggetti di ogni giorno. Quasi un trasloco di tremila e quattrocento anni fa.`],
[`Cos’è il Libro dei Morti?`,`Un rotolo di papiro con formule per accompagnare il defunto nell’aldilà. Il museo ne conserva tre versioni, fra cui una molto antica. Lunghi papiri illustrati, da leggere come fumetti sacri.`],
[`Come si leggono i geroglifici?`,`Alcuni segni valgono suoni, come lettere; altri valgono parole o idee; altri ancora specificano il significato. Si possono leggere da sinistra a destra o da destra a sinistra: si guarda verso dove "guardano" le figure. È un enigma bello, che non finisce mai.`],
[`Come sono andate le tue spedizioni?`,`Nel 1828 e 1829 andai in Egitto, per vedere le iscrizioni sulla pietra. Tornai con quaderni pieni e la salute rovinata. Morii a Parigi nel 1832, a quarantuno anni, ma la mia grammatica uscì dopo, grazie a mio fratello.`],
[`Cosa consigli di vedere?`,`Non perdere la sala dei Re, dove le statue siedono in fila nella penombra. E guarda lentamente i papiri: dietro ogni segno c’è una persona. Dopo, vai a mangiare, che il passato mette appetito.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo! Fa’ attenzione ai segni sulle pareti: spesso dicono più di quanto sembra. Vai, e che gli dèi del Nilo ti siano propizi. Au revoir!`],
],
to_franca:[
[`Come ti chiami e da quanto lavori qui?`,`Franca, cinquantotto anni, e lavoro qui da trent’anni. Ho servito studenti, preti, turisti e qualche personaggio famoso. Il bicerin è sempre uguale: la gente cambia, il bicerin no.`],
[`Che cos’è il bicerin?`,`Un bicchierino con caffè, cioccolata e crema di latte, a strati, senza mescolare. Si beve piano, dall’alto verso il basso. In origine le tre cose si servivano separate, poi si misero insieme in un bicchiere.`],
[`Quali sono le varianti?`,`"Pur e fiur", cioè caffè e latte; "pur e barba", caffè e cioccolato; e "’n poc ’d tut", un po’ di tutto. Il bicerin è quello classico, con tutti e tre gli ingredienti. La ricetta, dicono, è custodita come un segreto di Stato.`],
[`Quando è nato il locale?`,`Nel 1763, aperto da Giuseppe Dentis, un acquacedratario, cioè uno che vendeva bibite. È in piazza della Consolata, davanti al santuario. Un locale piccolo, ma con tanta storia.`],
[`Chi veniva qui?`,`Cavour, Dumas, Puccini, Nietzsche, Calvino, Gozzano. Si dice che anche Cavour ci passasse prima di andare a Palazzo. A volte penso che sedute su queste sedie, le idee funzionino meglio.`],
[`Cos’è il Caffè San Carlo?`,`Un caffè del 1822 in Piazza San Carlo, che all’inizio si chiamava Caffè di Piazza d’Armi. Fu un ritrovo di patrioti e intellettuali del Risorgimento; ci passarono anche Giolitti, Crispi e Gramsci. Un tempo lo chiusero più volte, perché sospettavano che vi si facessero complotti.`],
[`E il Caffè Fiorio?`,`In via Po, dal 1780, frequentato da aristocratici e ufficiali. Si dice che qui sia nato il cono gelato da passeggio. Lo chiamavano "il caffè dei Codini", perché i suoi clienti erano molto conservatori.`],
[`E Baratti & Milano?`,`La pasticceria nella Galleria Subalpina, dove, si racconta, Ferdinando Baratti creò il primo cremino. È un posto tutto specchi, velluti e vetrine di cioccolatini. Il cioccolato, a Torino, è una religione.`],
[`Cos’è il gianduiotto?`,`Un cioccolatino a forma di barchetta, di cioccolato e nocciole piemontesi. Si dice che nasca all’epoca di Napoleone, quando il cacao scarseggiava e si usò la nocciola. Il suo nome viene da Gianduja, la maschera di Torino.`],
[`Cos’è il vermouth?`,`Un vino aromatizzato con erbe: si dice che il primo sia stato venduto a Torino nel 1786 da Antonio Benedetto Carpano. A Torino si fa l’aperitivo con il vermouth, e si dice "l’ora del vermouth". Mio papà ne era appassionato.`],
[`Cos’è la Consolata?`,`Il santuario della Consolata, qui accanto, è uno dei più cari ai torinesi. Una chiesa barocca, con un campanile romanico molto antico. Si dice che sia il luogo di un’antica cappella, ma non so dire altro.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo, va’ pure! Fai due passi sotto i portici e arriva fino al fiume. Quando torni, un bicerin ti aspetta, neh. Cerea, e fa’ il bravo!`],
],
to_levi:[
[`Chi sei e dove sei nato?`,`Primo Levi, nato a Torino nel 1919, in una famiglia ebraica. Ho studiato chimica all’università e mi sono laureato nel 1941. Il mio mestiere è stato quello di chimico, il resto è venuto dopo.`],
[`Che cosa ami di Torino?`,`I suoi portici, i suoi caffè, la sua riservatezza, il suo ordine. Ho vissuto quasi tutta la vita in una casa di questa città. Il Po, la collina, le Alpi che si vedono in fondo ai viali: mi mancherebbero ovunque.`],
[`Che lavoro hai fatto?`,`Per molti anni ho lavorato alla SIVA, una fabbrica di vernici, fra Torino e Settimo Torinese, e ne sono diventato direttore generale. Mi piaceva il laboratorio: la materia ha una pazienza che gli uomini non hanno. Lì ho imparato a osservare.`],
[`Che cos’è "Il sistema periodico"?`,`Un libro del 1975, in cui ogni racconto prende il nome da un elemento chimico: l’argento, il ferro, il carbonio. Parlo di chimica e di vita insieme. È il libro a cui sono più affezionato, e che i miei lettori amano di più.`],
[`Che cosa è stato per te il periodo della guerra?`,`Nel febbraio del 1944, dopo il campo di Fossoli, fui deportato ad Auschwitz. Fui liberato dall’Armata Sovietica alla fine di gennaio del 1945, e tornai a Torino nell’ottobre dello stesso anno. Non è una storia che si racconta in due battute; la dissi nei miei libri.`],
[`Che cos’è "Se questo è un uomo"?`,`Il mio primo libro, pubblicato nel 1947 dalla casa editrice De Silva. Più tardi, nel 1958, uscì da Einaudi, e lo lessero in tanti. Lo scrissi perché dovevo testimoniare, e perché non si dimenticasse.`],
[`E "La tregua"?`,`Il libro del mio lungo viaggio di ritorno, attraverso l’Europa devastata, uscito nel 1963. È più luminoso del primo, pieno di personaggi e di incontri. Fu la mia storia di ritorno a casa.`],
[`Perché ricordare è importante?`,`Perché ciò che è accaduto può ripetersi, se si dimentica. Non per odiare, ma per capire e per evitare. Un libro è una piccola sentinella.`],
[`Come scrivi?`,`Con la precisione del chimico: poche parole, scelte bene, senza ornamenti inutili. Ho sempre pensato che la chiarezza sia una forma di rispetto per il lettore. E la ricerca della parola giusta è un piacere, come trovare un reagente.`],
[`Che cosa fai oggi a Torino?`,`Cammino sotto i portici, guardo le vetrine delle librerie, e ogni tanto mi fermo in un caffè. Mi piace osservare i torinesi: riservati, educati, un po’ ironici. Una città che parla piano, ma non dimentica.`],
[`Cosa consigli di leggere?`,`Cominciate da quello che vi incuriosisce: un libro di storia, di scienza, un romanzo. Io leggevo molto di chimica e di montagna. Un buon lettore è un buon cittadino.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo. Cammina fino al fiume e guarda la collina: è un bel modo di finire la giornata. Ti auguro un buon cammino, e di ricordarti sempre delle persone.`],
],
to_gianni:[
[`Come ti chiami e per chi tifi?`,`Gianni, sessantasette anni, tifoso del Torino. Mio nonno mi portò allo stadio da bambino, e da allora non ho più smesso. Il granata è un colore che si porta nel cuore, anche quando si perde.`],
[`Cos’è Superga?`,`Una collina a est di Torino, con la basilica sul crinale. Per i torinesi è un luogo di domenica, di passeggiate e di ricordi. E per i tifosi del Toro è un posto sacro.`],
[`Chi ha costruito la basilica?`,`Filippo Juvarra, per un voto del duca Vittorio Amedeo II: promise un monumento alla Madonna, se avesse vinto la battaglia. La costruzione risale al primo Settecento. Dentro, nella cripta, riposano molti Savoia.`],
[`Com’è il panorama?`,`Il più bello che si può chiedere: la città, la pianura e tutta la catena delle Alpi. Si dice che Pio XII lo abbia definito "il più bel panorama d’Europa". Se sali i 131 gradini fino alla cupola, ti puoi credere un uccello.`],
[`Come si sale a Superga?`,`Con il trenino a dentiera Sassi-Superga, che sale in circa venti minuti fra gli alberi, oppure in macchina o a piedi. Il trenino è il più bello: si sale piano e si guarda. Un modo di arrivare con calma.`],
[`Cos’è successo qui il 4 maggio 1949?`,`Al ritorno da un’amichevole a Lisbona, l’aereo con i giocatori del Grande Torino, i dirigenti, i giornalisti e l’equipaggio si schiantò contro il muraglione dietro la basilica. Nessuno si salvò. È la ferita più grande dello sport italiano, e non mi va di dire di più.`],
[`Chi era il Grande Torino?`,`Una squadra che vinse cinque scudetti di fila negli anni Quaranta, e fornì dieci giocatori alla Nazionale. Per tutti, era la squadra imbattibile, una leggenda. Mi hanno insegnato ad amarla, anche se non l’ho mai vista giocare.`],
[`Come ricordate quella data?`,`Ogni 4 maggio, i tifosi di ogni parte d’Italia vengono qui, con sciarpe e fiori, e si leggono i nomi uno per uno. C’è una lapide sul muraglione, con le luci e i fiori. Si sta in silenzio, e anche i bambini capiscono.`],
[`Perché si chiama "granata"?`,`Per il colore delle maglie, un rosso scuro come il frutto del melograno. Il Torino è stato fondato nel 1906; il suo simbolo è un toro, lo stesso della città. Il Toro non è una squadra: è un modo di sentire.`],
[`Cos’è il derby di Torino?`,`La partita fra Torino e Juventus, la squadra bianconera nata nel 1897. Ha il nome di "derby della Mole". Per la città si divide in due, ma non ci si odia: ci si prende in giro per tutto l’anno.`],
[`Cosa mangiate quando andate a vedere la partita?`,`Panini, un goccio di vino, una focaccia. Prima e dopo la partita, una passeggiata per i sentieri della collina. E, se perdiamo, una buona cena per consolarsi. Il Toro insegna a perdere con dignità.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo. Guarda le Alpi al tramonto e fai un pensiero a chi riposa qui. Poi vai a Porta Nuova, che ti aspetta il treno. Cerea, e forza Toro!`],
],
to_mario:[
[`Come ti chiami e che lavoro fai?`,`Mario, cinquantacinque anni, capostazione. Controllo gli orari, i binari e la sicurezza, e rispondo a tutte le domande dei viaggiatori. Lavoro in ferrovia da trent’anni, e ogni giorno è diverso.`],
[`Quando è nata Porta Nuova?`,`I lavori cominciarono nel 1861, la stazione fu aperta al pubblico nel dicembre 1864 e fu completata nel 1868. Il progetto fu diretto da Alessandro Mazzucchetti. Quando aprì, Torino aveva appena smesso di essere la capitale.`],
[`Com’è fatta?`,`Una facciata lunga, color rosso scuro, con grandi archi e decorazioni bianche. Dentro c’è un salone di partenza con colonne, stucchi e affreschi, e una galleria centrale. Il restauro ha conservato il suo rosso, con luci a LED di notte.`],
[`Quanta gente ci passa?`,`Circa 192.000 viaggi al giorno, più o meno 70 milioni di viaggiatori l’anno, e circa 350 treni al giorno. Con 20 binari, è la terza stazione d’Italia. Un formicaio, neh, ma ordinato.`],
[`Dove vanno i treni?`,`Per Milano con l’alta velocità, Frecciarossa e Italo; per Genova e la Liguria, passando per Asti e Alessandria; e per la Francia e le valli alpine. Da qui si va dappertutto, o quasi. Io dico che da Torino si parte e si torna sempre.`],
[`Cos’è Piazza Carlo Felice?`,`La piazza davanti alla stazione, con portici e un giardino ovale con fontane e panchine. È la prima cosa che vedono i viaggiatori, ed è il benvenuto di Torino. Di sera è tranquilla, ma c’è sempre qualcuno in giro.`],
[`Cosa vuol dire "Porta Nuova"?`,`Il nome ricorda una delle porte della città, da cui si entrava a Torino. Le città crescono e cambiano le loro mura, ma i nomi restano. Oggi la porta è un’idea, e la stazione è il suo ingresso vero.`],
[`Come si lavora in una stazione di notte?`,`Silenzio, pochi treni, qualche pendolare e qualche turista perso. Vedi cose strane: valigie dimenticate, innamorati che si salutano, ragazzi che dormono sulle panchine. Una stazione di notte è un piccolo teatro.`],
[`Cosa si mangia al volo prima di partire?`,`Un panino, un trancio di focaccia, un caffè al bancone. A Torino il caffè va fatto bene: lo si beve in piedi, in fretta, ma con rispetto. Se hai tempo, un gianduiotto in tasca.`],
[`Che cosa consigli a chi arriva a Torino?`,`Di camminare sotto i portici, di guardare in su, verso la Mole, e di sedersi in un caffè storico. Poi di salire a Superga, se c’è bel tempo. E di non lasciarsi ingannare dal carattere riservato dei torinesi: sotto, c’è calore.`],
[`Hai un detto piemontese per i viaggiatori?`,`"Bogianen" è "non ti muovere", ma io dico "bon viage" e "cerea". Qui a Torino si parla poco, ma ogni parola ha il suo peso. E se tutto va bene, il treno è in orario, neh.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo, sali pure! In fondo al binario c’è una luce: seguila, e non voltarti. Ti auguro un buon viaggio: cerea, e torna a trovarci!`],
],
};
Object.assign(TOPX,TOPX_TO);
})();
