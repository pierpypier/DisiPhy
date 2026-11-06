/* ---------- NAIROBI · Dal Parco Nazionale alla Stazione dei Treni (Parco Nazionale, Langata e Karen, KICC e Kimathi Street, City Market e Moschea Jamia, Uhuru Park e Central Park, Museo Nazionale, Foresta di Karura, il mtaa e la nyama choma, Stazione ferroviaria e Museo ferroviario) ---------- */
/* Un'intera giornata da sinistra a destra: alba nel Parco Nazionale con i leoni e i grattacieli sullo stesso orizzonte, mattina a Langata e Karen fra giraffe,
   elefantini e la casa di Karen Blixen, tarda mattina nel centro fra il KICC e i matatu, mezzogiorno al City Market e alla Moschea Jamia, primo pomeriggio a Uhuru Park,
   pomeriggio dorato al Museo Nazionale, tramonto nella foresta di Karura, sera in un mtaa davanti alla griglia della nyama choma, notte alla stazione ferroviaria.
   In fondo al binario del treno c'è il varco.
   Testi, tappe e dialoghi vengono da nairobi.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico). Gli oggetti stanno in elementi.js (nomi che iniziano per "nb").
   Il tono per i temi dolorosi (colonizzazione, Mau Mau, sciopero della fame del 1992, costruzione della ferrovia) è sempre sobrio e rispettoso; le leggende sono presentate con "si dice". */
(function(){
const GT=372,W1=23200;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln,gatto}=PR._rm;
const N=PR._nb,{nf,lit,pers,gp,acacia,jaca,eucal,fico,cedro,bambu,felci,erba,cespu,giraffa,zebra,marabu,ibis,uccello}=N;
const md=(i,n)=>((i%n)+n)%n;
const LIT='rgb(255,226,150)';
const Z=[0,2800,5100,7700,10000,12400,14800,17700,20100,W1+400];   /* inizio di ognuna delle 9 zone */
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* ---- cielo: alba rosa e arancio, mattina limpida, azzurro intenso a mezzogiorno, pomeriggio dorato, tramonto rosso-arancio, sera blu cobalto, notte ---- */
const SKY=[[0,['#8a98c8','#f6b4b8','#ffd8b8']],[1300,['#4a9cf0','#b4d8f4','#f2eede']],[2800,['#2a84ec','#74b8f4','#d8ecf8']],[7700,['#1a6edc','#62aef0','#d6ecf8']],[10000,['#2a7ee0','#78b8f0','#eaf0ee']],[12400,['#3a84d8','#a8c8e8','#f8e4b8']],[14300,['#5a7cc8','#e8b890','#ffc88a']],[15400,['#6a4a98','#e8604a','#ffa050']],[16200,['#4a3a88','#c04a6a','#f88a58']],[17300,['#1a2c78','#3a4a98','#8a5a8a']],[18300,['#0e2260','#1c3a8a','#4a5a9a']],[19400,['#0a1a50','#14296a','#2a3a7a']],[20300,['#080e34','#101c54','#26306a']],[99999,['#080e34','#101c54','#26306a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Nairobi, dall’alba alla notte. Parti dal Parco Nazionale, dove un leone può guardare i grattacieli del centro, e scendi verso Langata e Karen, fra giraffe, elefantini orfani e la casa dell’autrice di \"La mia Africa\". A metà mattina entri nel centro: il KICC, i matatu che gridano le loro destinazioni, il City Market. Nel primo pomeriggio sei a Uhuru Park, dove Wangari Maathai fermò un grattacielo; poi il Museo Nazionale con il Ragazzo del Turkana, e al tramonto la foresta di Karura con la sua cascata. La sera, in un quartiere, si mangia nyama choma con una Tusker fredda; e a notte la stazione ferroviaria, da cui tutto è cominciato, ti aspetta con i suoi treni. Il tempo qui si piega: i nairobiani di ogni epoca ti vengono incontro, e la città è quella di oggi.";
const LKTXT=[
"Il Parco Nazionale di Nairobi: istituito nel 1946, il primo parco nazionale del Kenya, a soli sette chilometri dal centro. Si estende per 117 chilometri quadrati ed è recintato sul lato della città, ma aperto a sud, perché gli animali possano spostarsi. Dal cancello si vedono i grattacieli.",
"Nel parco vivono leoni, leopardi, giraffe, zebre, bufali, gnu, ippopotami, coccodrilli e più di quattrocento specie di uccelli. Con i grattacieli sullo sfondo, è uno dei pochi posti al mondo dove una capitale ha la savana alle porte.",
"Il luogo del rogo dell’avorio: nel 1989 il presidente Daniel arap Moi diede fuoco a dodici tonnellate di zanne, per protestare contro il bracconaggio; nel 2016 ne furono bruciate più di cento. Oggi restano le piattaforme di pietra annerite.",
"Il parco è uno dei luoghi dove vivono i rinoceronti neri, una specie in pericolo. I ranger li controllano ogni giorno, a piedi e in fuoristrada.",
"Il Giraffe Centre: fu creato nel 1979 da Jock Leslie-Melville e dalla moglie Betty per salvare la giraffa di Rothschild, quasi scomparsa. Da una piattaforma alta si danno le crocchette alle giraffe, che le prendono con la lunga lingua scura.",
"L’Orfanotrofio degli elefanti: il David Sheldrick Wildlife Trust nacque nel 1977 in ricordo di David Sheldrick, guardiano del Parco Tsavo. Accoglie elefantini rimasti senza mamma. Ogni giorno, dalle undici a mezzogiorno, i visitatori li vedono mentre bevono il latte dal biberon e si rotolano nel fango.",
"Il Museo Karen Blixen: la casa dove la scrittrice danese visse dal 1914 al 1931, nella sua fattoria ai piedi delle colline di Ngong. Da quell’esperienza nacque \"La mia Africa\", uscito nel 1937 e diventato film nel 1985. Il quartiere si chiama Karen in suo onore.",
"Il KICC, Kenyatta International Convention Centre: la torre cilindrica, di 28 piani e circa 105 metri, fu inaugurata nel 1973. In cima ci sono un eliporto e un belvedere. L’architetto, il norvegese Karl Henrik Nøstvik, si ispirò a un fiore: si dice un fiore di loto.",
"La statua di Dedan Kimathi, all’incrocio fra Kimathi Street e Mama Ngina Street: inaugurata nel 2007, ricorda il leader dei Mau Mau, catturato nel 1956 e impiccato il 18 febbraio 1957. Il bronzo lo mostra in uniforme, con un fucile e un pugnale.",
"Lo \"stage\": la fermata dei matatu. Ogni minibus ha il numero della sua linea sul parabrezza; il makanga grida le destinazioni e il motore parte spesso quando è pieno. Alcuni sono dipinti come opere d’arte, con neon, graffiti e musica altissima.",
"Il City Market: costruito nel 1930 vicino alla ferrovia, che allora passava per Loita Street. Sotto il grande tetto si vendono frutta, verdura, carne, pesce, fiori e artigianato: cesti, sculture, stoffe.",
"La Moschea Jamia: l’edificio attuale fu progettato da William Landels e costruito fra il 1925 e il 1933, con tre cupole e due minareti. Quando fu finita era l’edificio più alto di Nairobi. Può ospitare circa cinquemila fedeli.",
"I Jeevanjee Gardens: un piccolo parco nel centro, donato alla città da Alibhai Mulla Jeevanjee. Si va a pranzo sul prato, a riposare e a chiacchierare all’ombra.",
"Uhuru Park: \"uhuru\" in swahili vuol dire \"libertà\". Un grande prato con un lago, dove la domenica le famiglie fanno picnic e vanno in barca. Nel 1989 qui doveva sorgere un grattacielo di circa sessanta piani: il progetto fu fermato dopo la campagna di Wangari Maathai.",
"Il Freedom Corner: l’angolo del parco dove nel 1992 le madri dei prigionieri politici fecero uno sciopero della fame, sostenute da Wangari Maathai. Da allora è un luogo di memoria e di manifestazioni pacifiche.",
"La Fontana Nyayo, a Central Park: costruita nel 1983 per il ventesimo anniversario dell’indipendenza. È uno degli spazi verdi dove i nairobiani vanno a rilassarsi in pausa pranzo.",
"Il Museo Nazionale: nato nel 1910 da una società di naturalisti, che custodiva i reperti nelle proprie case. L’edificio sulla Museum Hill è del 1929 e un tempo si chiamava Coryndon Memorial Museum. Dentro ci sono la natura, la storia e le culture del Kenya.",
"Il Ragazzo del Turkana: uno scheletro quasi completo di Homo erectus, trovato nell’agosto del 1984 da Kamoya Kimeu sulle rive occidentali del lago Turkana. Ha circa un milione e mezzo o seicentomila anni ed è il più completo scheletro di un antico essere umano mai ritrovato.",
"Lo Snake Park, accanto al museo: serpenti, tartarughe e coccodrilli in recinti all’aperto, con guide che spiegano alle scolaresche.",
"La Karura Forest: oltre mille ettari di foresta nel cuore della città, riserva fin dal 1932. Oggi è curata dagli Amici di Karura ed è una zona senza plastica, con più di cinquanta chilometri di sentieri per correre, camminare e andare in bici.",
"La cascata di Karura: circa venti metri d’acqua nella valle del fiume, dopo un sentiero fra felci e fichi giganti. Dopo la pioggia è fortissima, e il rumore si sente da lontano.",
"Le grotte Mau Mau: si dice che i combattenti Mau Mau le usassero come rifugio negli anni Cinquanta. Per la gente del posto sono luoghi sacri: si entra in silenzio.",
"Il bosco di bambù e la vecchia chiesa: fra gli alberi c’è una piccola chiesa di pietra abbandonata, e un tratto di bambù dove la luce arriva a strisce. Nella foresta ci sono scimmie, dik-dik e più di duecento specie di uccelli.",
"La macelleria-griglia: dal bancone si sceglie il pezzo di capra o di manzo, che viene pesato, tagliato e messo sulla brace. Nairobi è considerata la capitale della nyama choma, la \"carne arrostita\".",
"Il duka: il piccolo chiosco di quartiere dove si compra di tutto, dal latte alle schede telefoniche. Spesso è anche agente M-Pesa: si porta il contante e lo si manda sul telefono, per pagare o spedire a casa. \"Pesa\" in swahili vuol dire soldi.",
"La tavola: su un vassoio di legno la carne a pezzi, una palla di ugali, la polenta di mais bianco, e il kachumbari, un’insalata di pomodoro e cipolla. Si mangia con le mani, con una Tusker fredda o un chai.",
"La stazione di Nairobi: la città nacque qui, nel 1899, come deposito della ferrovia dell’Uganda, su un terreno paludoso. La ferrovia fu costruita fra il 1896 e il 1901 da Mombasa a Kisumu, sul lago Vittoria.",
"Il Museo ferroviario, accanto alla stazione: aprì nel 1971 e conserva locomotive a vapore, vagoni d’epoca e fotografie. La ferrovia fu soprannominata \"Lunatic Express\" dalla stampa britannica, per i costi enormi.",
"Dal 31 maggio 2017 un treno moderno, il Madaraka Express, collega Nairobi e Mombasa in circa cinque ore. Parte dalla stazione di Syokimau, vicino all’aeroporto. \"Madaraka\" in swahili vuol dire \"potere\", \"autogoverno\".",
"In fondo al binario, la luce di un altro mondo ti chiama."
];
const NAME={
nb_wanjiru:"Wanjiru, la ranger",
nb_juma:"Juma, il makanga del matatu",
nb_akinyi:"Mama Akinyi, la venditrice di frutta e verdura",
nb_wangari:"Wangari Maathai",
nb_njeri:"Njeri, la guida del Museo Nazionale",
nb_kevin:"Kevin, lo sviluppatore di app",
nb_kariuki:"Mzee Kariuki, il maestro della griglia",
nb_ochieng:"Mzee Ochieng, l’ex ferroviere"
};
const GREET={
nb_wanjiru:"Jambo! Karibu! Sei Pierpaolo, no? Io sono Wanjiru, e questo è il mio ufficio: sette chilometri dal centro e già in mezzo ai leoni. Sali, ma tieni le dita fuori dal finestrino, sawa?",
nb_juma:"Sasa, msee! Niaje? Sei Pierpaolo, vero? Sono Juma, il makanga. Questo è il matatu migliore della città: musica, neon e tanto stile. Sali, poa!",
nb_akinyi:"Karibu, karibu, mtoto wangu! Compra le mie arance: le migliori del mercato, lo giuro! Tu sei Pierpaolo? Io sono Mama Akinyi. Siediti, che ti do una banana: gratis, la prima!",
nb_wangari:"Jambo, mtoto wangu! Benvenuto a Uhuru Park. Sono Wangari, e tu sei Pierpaolo, vero? Vieni, aiutami a piantare un albero: non si finisce mai di imparare a pazientare.",
nb_njeri:"Jambo! Karibu al museo, Pierpaolo. Sono Njeri, la tua guida. Prima domanda: sai da dove vengono tutti gli esseri umani? Da qui vicino, davvero. Vieni, ti presento un ragazzo molto vecchio.",
nb_kevin:"Sasa, msee! Niaje? Sei Pierpaolo, vero? Io sono Kevin, ma qui mi chiamano Kevo. Vieni, corriamo un po’: a Nairobi la cosa migliore dopo il lavoro è una foresta vera.",
nb_kariuki:"Karibu, karibu, mtoto wangu! Sei Pierpaolo, no? Io sono Mzee Kariuki. Siediti, che la carne è pronta quando è pronta: la fretta, con la griglia, è sbagliata. Pole pole.",
nb_ochieng:"Habari za jioni, mtoto wangu! Sei Pierpaolo, vero? Io sono Mzee Ochieng: il mio nome vuol dire \"nato di giorno\", ma ho passato la vita di notte accanto ai treni. Siediti, chai?"
};

const LX=[500,1200,1900,2500, 3300,4000,4700, 5700,6400,7250, 8200,8900,9600, 10600,11300,12000, 13000,13700,14400, 15400,16100,16800,17400, 18300,19000,19700, 20800,21650,22350,W1-350];

/* ---- livello 0: cielo, sole, luna, stelle, nuvole bianche grandi ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-17900)/2400,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/16300,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*255;
 if(xs<16800){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,15)}
 const mu=cl((xs-17000)/2600,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*210;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<2800?'rgba(252,206,214,.75)':xs<12600?'rgba(255,255,255,.9)':xs<15200?'rgba(255,220,160,.8)':xs<17600?'rgba(255,150,120,.6)':'rgba(140,120,190,.4)';
 each(o-((t*5)%340)*.02,340,1,(x,i,r)=>{if(r>.55)return;nube(g,x+r*100,40+r*46,.8+r*.7,cc)});
 const fo=cl(1-xs/2800,0,1)*.32;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-12400)/1000,0,1)*cl((14800-xs)/900,0,1)*.14;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-14800)/800,0,1)*cl((17000-xs)/900,0,1)*.26;if(wg>.01){g.fillStyle='rgba(255,110,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}

/* ---- livello 1: le colline di Ngong e la savana, lo skyline con il KICC, la foresta di Karura, le luci dei binari ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 /* le colline di Ngong, azzurre e lontane, con la savana e le acacie ai piedi (zone 1-2) */
 const ng=env(2000,5200);if(ng>.02){g.globalAlpha=ng;const sx=fx(2000);g.fillStyle=dim('#8a96c4');g.beginPath();g.moveTo(sx-400,hz+30);[[-400,-24],[-340,-46],[-290,-36],[-230,-70],[-170,-50],[-110,-82],[-50,-62],[10,-94],[70,-70],[130,-48],[190,-62],[250,-38],[320,-54],[400,-26]].forEach(p=>g.lineTo(sx+p[0],hz+p[1]));g.lineTo(sx+400,hz+30);g.closePath();g.fill();
  g.fillStyle=dim('#b0a860');g.beginPath();g.moveTo(sx-420,hz+34);for(let q=0;q<=28;q++){const px=sx-420+q*30;g.lineTo(px,hz+4-9*Math.abs(Math.sin(q*.8)))}g.lineTo(sx+420,hz+34);g.closePath();g.fill();
  for(let q=0;q<22;q++){const ax=sx-400+q*38+hr(q)*14,ah=hz+2-hr(q*3)*4;rect(g,dim('#4a4a2a'),ax,ah-8,1.4,9);el(g,dim('#6a7a34'),ax,ah-9,9,2.4)}g.globalAlpha=1}
 /* lo skyline di Nairobi con la torre cilindrica del KICC: all'alba sull'orizzonte della savana, poi dietro il centro, poi a notte illuminato */
 const sky1=(wc,sp,lights)=>{const e=env(wc,sp);if(e<.02)return;g.globalAlpha=e;const sx=fx(wc),on=lights?Math.max(night,.0):night;
  const tw=(bx,w,h,c,sd)=>{rect(g,dim(c),sx+bx,hz+16-h,w,h);rect(g,'rgba(255,255,255,.16)',sx+bx,hz+16-h,w*.24,h);rect(g,'rgba(0,0,0,.12)',sx+bx+w*.72,hz+16-h,w*.28,h);if(on>.25)for(let r=0;r<h/8;r++)for(let q=0;q<w/7;q++)if(hr(sd+r*9+q)>.55)rect(g,'rgba(255,226,150,'+(.8*Math.min(1,on))+')',sx+bx+2+q*7,hz+16-h+3+r*8,3,3)};
  [[-330,26,60,'#9ab0c0'],[-300,34,92,'#7a92a8'],[-262,24,70,'#b8b4a8'],[-236,36,110,'#8aa4b8'],[-196,28,80,'#a8b4bc'],[-166,40,126,'#7a8ea4'],[-124,26,66,'#b8b4a8'],[-96,34,100,'#98acbc'],[-62,22,74,'#a8b4bc'],[86,30,84,'#8aa0b4'],[120,38,118,'#7a92a8'],[160,26,70,'#b8b4a8'],[188,34,96,'#98acbc'],[226,28,60,'#a8b4bc'],[260,40,104,'#8aa4b8'],[304,26,74,'#b8b4a8'],[334,34,52,'#9ab0c0']].forEach((b,i)=>tw(b[0],b[1],b[2],b[3],i*31+wc%97));
  rect(g,dim('#8a96a0'),sx-198+14,hz+16-146,1.6,20);rect(g,dim('#8a96a0'),sx+138+14,hz+16-140,1.6,22);
  /* il KICC: cilindro chiaro e disco in cima */
  rect(g,dim('#e4e0d2'),sx-14,hz+16-142,30,142);rect(g,'rgba(255,255,255,.3)',sx-14,hz+16-142,8,142);rect(g,'rgba(0,0,0,.16)',sx+7,hz+16-142,9,142);rect(g,dim('#cfcab8'),sx-26,hz+16-148,54,5);el(g,dim('#cfcab8'),sx+1,hz+16-149,27,4);rect(g,dim('#e4e0d2'),sx-6,hz+16-160,14,10);rect(g,dim('#8a96a0'),sx,hz+16-174,1.6,14);
  if(on>.25)for(let r=0;r<13;r++)for(let q=0;q<3;q++)if(hr(r*3+q+wc)>.35)rect(g,'rgba(255,226,150,'+(.8*Math.min(1,on))+')',sx-10+q*9,hz+16-136+r*10,4,4);
  g.globalAlpha=1};
 sky1(1500,4700,0);sky1(7300,5600,0);sky1(11300,5000,0);sky1(21500,5400,1);
 /* l'alba sopra la savana: una fascia rosa vicino all'orizzonte */
 /* collina del museo e giardino botanico, verde e dorata (zona 6) */
 const mh=env(13600,4600);if(mh>.02){g.globalAlpha=mh;const sx=fx(13600);g.fillStyle=dim('#5a9a4c');g.beginPath();g.moveTo(sx-380,hz+34);for(let q=0;q<=26;q++){const px=sx-380+q*29;g.lineTo(px,hz-8-22*Math.sin(q*.5)-8*Math.sin(q*1.3))}g.lineTo(sx+380,hz+34);g.closePath();g.fill();
  for(let q=0;q<30;q++){const px=sx-380+q*26+hr(q)*10;el(g,dim(q%2?'#2f6a38':'#3a7a40'),px,hz-10-14*Math.sin(q*.5)-4*hr(q*3),12,7)}rect(g,dim('#e8e4d8'),sx-30,hz-34,44,18);poly(g,dim('#d0ccc0'),[[sx-36,hz-34],[sx-8,hz-46],[sx+20,hz-34]]);g.globalAlpha=1}
 /* la foresta di Karura: massa verde scura, cime di fichi e cedri, le torri degli uffici in lontananza (zona 7) */
 const kf=env(16300,5400);if(kf>.02){g.globalAlpha=kf;const sx=fx(16300);g.fillStyle=dim('#2a5a34');g.beginPath();g.moveTo(sx-420,hz+36);for(let q=0;q<=30;q++){const px=sx-420+q*28;g.lineTo(px,hz-14-18*Math.abs(Math.sin(q*.7))-8*Math.sin(q*1.9))}g.lineTo(sx+420,hz+36);g.closePath();g.fill();
  for(let q=0;q<34;q++){const px=sx-420+q*25+hr(q*3)*10;el(g,dim(q%3?'#1f4a2a':'#2e6a3a'),px,hz-8-12*Math.abs(Math.sin(q*.7))-hr(q)*10,15,9)}
  [[-120,14,42],[-90,18,60],[150,16,50]].forEach((b,i)=>{rect(g,dim('#8a9aac'),sx+b[0],hz+10-b[2],b[1],b[2]);if(night>.25)for(let r=0;r<b[2]/9;r++)if(hr(i*7+r)>.5)rect(g,'rgba(255,226,150,.8)',sx+b[0]+3,hz+10-b[2]+3+r*9,3,3)});
  g.fillStyle=dim('#8aa0a0');g.globalAlpha=kf*.18;g.fillRect(sx-430,hz-14,860,40);g.globalAlpha=1}
 /* le luci basse del mtaa e il lontano chiarore dei quartieri (zona 8) */
 const mt=env(19000,4600);if(mt>.02&&night>.2){g.globalAlpha=mt*Math.min(1,night*1.3);const sx=fx(19000);for(let r=0;r<3;r++)for(let q=0;q<46;q++)if(hr(q*5+r*13)>.38)rect(g,'rgba(255,214,130,'+(.5+.4*hr(q+r))+')',sx-380+q*17+r*5,hz+6+r*7,2.6,2.6);for(let q=0;q<5;q++)rect(g,'#7a828a',sx-300+q*140,hz-22,1.4,26);g.globalAlpha=1}
 /* i binari che si perdono nel buio, i fili elettrici, le luci gialle riflesse (zona 9) */
 const st=env(21700,4800);if(st>.02){g.globalAlpha=st;const sx=fx(21700);for(let r=0;r<2;r++)rect(g,'rgba(160,166,180,'+(.22+night*.25)+')',sx-420,hz+16+r*5,840,1.4);for(let q=0;q<22;q++){rect(g,dim('#4a4e5a'),sx-400+q*38,hz-30,1.6,46);dot(g,'rgba(255,226,150,'+(.5+.5*night)+')',sx-399+q*38,hz-30,2)}ln(g,dim('#3a3e48'),.8,[sx-420,hz-26,sx,hz-18,sx+420,hz-26]);for(let q=0;q<18;q++)rect(g,'rgba(255,214,120,'+(.4+.4*Math.sin(t*2+q)*night)+')',sx-380+q*44,hz+14+(q%3)*3,3,2);g.globalAlpha=1}}

/* ---- livello 2: savana e collinette rosse, giardini e ville di Karen, palazzi del centro, il mercato e la moschea, il prato di Uhuru, Museum Hill, il bosco, le case di lamiera, i capannoni della stazione ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;A.setDK(nf(cam+x));
  const wins=(n,top,bx)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',(bx===undefined?x+14:bx)+(q%4)*20,top+Math.floor(q/4)*14,6,5)};
  if(zz==1){if(r>.6)acacia(g,x+60,hz+10,.5+r*.3);else if(r>.34){el(g,dim('#a8643a'),x+50,hz+8,50+r*40,16+r*18);el(g,'rgba(255,255,255,.1)',x+40,hz-2,30,5)}else if(r>.2)poly(g,dim('#9a6a44'),[[x+30,hz+10],[x+40,hz-6],[x+48,hz-12],[x+56,hz-4],[x+66,hz+10]]);else{zebra(g,x+30,hz+8,.42,t,{graze:1});zebra(g,x+54,hz+10,.38,t,{f:-1})}
   if(r>.2&&r<.6){for(let q=0;q<3;q++)rect(g,dim('#8a8a88'),x+8+q*40,hz-8,2,18);ln(g,dim('#8a8a88'),.8,[x+8,hz-4,x+128,hz-4]);ln(g,dim('#8a8a88'),.8,[x+8,hz+4,x+128,hz+4])}}
  else if(zz==2){if(r>.74)jaca(g,x+60,hz+8,.6,t);else if(r>.56)eucal(g,x+50,hz+8,.5);else if(r>.3){rect(g,dim('#f2ede0'),x+12,hz-30,86,40);poly(g,dim('#a8452e'),[[x+6,hz-30],[x+28,hz-50],[x+82,hz-50],[x+104,hz-30]]);for(let q=0;q<4;q++){rect(g,dim('#6a8a9a'),x+20+q*20,hz-22,10,14)}rect(g,dim('#e4dcc8'),x+12,hz+2,86,4);wins(2,hz-24)}
   else if(r>.14){rect(g,dim('#9a9488'),x+16,hz-36,76,46);rect(g,dim('#7a7468'),x+12,hz-40,84,6);rect(g,dim('#2a3a3a'),x+30,hz-26,16,22);if(hr(i)>.3){ln(g,dim('#d9a43e'),6,[x+38,hz-20,x+34,hz-44,x+42,hz-62]);dot(g,dim('#d9a43e'),x+44,hz-62,5);rect(g,dim('#7a4a20'),x+40,hz-70,2,6)}rect(g,dim('#2a3a3a'),x+60,hz-26,16,22)}
   else{el(g,dim('#3a7a38'),x+50,hz+4,60,12);rect(g,dim('#b8b2a0'),x+0,hz+6,100,5)}}
  else if(zz==3){if(r>.7){const hh=130+r*70;rect(g,dim(['#6a90a8','#7aa0b0','#8ab0c0'][md(i,3)]),x+16,hz-hh,60,hh+10);rect(g,'rgba(255,255,255,.2)',x+16,hz-hh,12,hh+10);rect(g,'rgba(0,0,0,.14)',x+62,hz-hh,14,hh+10);for(let q=0;q<9;q++)rect(g,'rgba(255,255,255,.12)',x+16,hz-hh+10+q*(hh/9),60,1.6);rect(g,dim('#4a5a68'),x+34,hz-hh-12,24,12);ln(g,dim('#4a5a68'),1.4,[x+46,hz-hh-12,x+46,hz-hh-32]);if(night>.2)for(let q=0;q<hh/10;q++)for(let c2=0;c2<4;c2++)if(hr(i*13+q*5+c2)>.5)rect(g,'rgba(255,226,160,.8)',x+20+c2*14,hz-hh+6+q*10,6,4)}
   else if(r>.42){const hh=90+r*60;rect(g,dim('#b8b4a4'),x+8,hz-hh,84,hh+10);rect(g,'rgba(255,255,255,.18)',x+8,hz-hh,5,hh+10);for(let q=0;q<hh/16;q++){rect(g,dim('#8a867a'),x+6,hz-hh+8+q*16,88,3);for(let c2=0;c2<4;c2++){rect(g,dim('#3a4a58'),x+14+c2*20,hz-hh+12+q*16,12,9);if(night>.2&&hr(i*9+q*4+c2)>.5)rect(g,'rgba(255,226,160,.85)',x+14+c2*20,hz-hh+12+q*16,12,9)}}}
   else if(r>.18){rect(g,dim(['#d8c8a0','#c8a888','#b8c0a0'][md(i,3)]),x+10,hz-50,86,60);rect(g,dim('#8a7a5a'),x+8,hz-54,90,6);rect(g,dim('#2a6a46'),x+22,hz-44,60,12);for(let q=0;q<3;q++)rect(g,dim('#3a4a58'),x+20+q*28,hz-26,16,14);wins(0,0)}
   else jaca(g,x+60,hz+8,.55,t)}
  else if(zz==4){if(r>.9){rect(g,dim('#f4f0e4'),x+40,hz-120,16,126);rect(g,dim('#2a8a5a'),x+38,hz-122,20,6);g.fillStyle=dim('#2a8a5a');g.beginPath();g.arc(x+48,hz-122,10,Math.PI,0);g.fill()}
   else if(r<.2)acacia(g,x+60,hz+10,.6);else{const hh=70+r*50,c=dim(['#d8a070','#e8c06a','#c87a5a','#a8c0a0'][md(i,4)]);rect(g,c,x+8,hz-hh,92,hh+10);rect(g,'rgba(255,255,255,.18)',x+8,hz-hh,5,hh+10);for(let q=0;q<hh/20;q++){rect(g,dim('#6a5a4a'),x+6,hz-hh+10+q*20,96,2.4);for(let c2=0;c2<4;c2++)rect(g,dim('#2a3a48'),x+16+c2*21,hz-hh+16+q*20,10,10)}rect(g,dim(['#c8281e','#2a6aa8','#2a8a3a'][md(i,3)]),x+14,hz-6,60,8);wins(0,0)}}
  else if(zz==5){if(r>.84){rect(g,dim('#a8a8a0'),x+10,hz-110,86,120);for(let q=0;q<8;q++)for(let c2=0;c2<5;c2++)rect(g,'rgba(40,60,90,.5)',x+16+c2*15,hz-102+q*14,8,6);rect(g,dim('#8a8a82'),x+8,hz-114,90,6)}
   else if(r>.74){rect(g,dim('#e8e0c8'),x+18,hz-46,70,56);g.fillStyle=dim('#7aa098');g.beginPath();g.arc(x+53,hz-46,22,Math.PI,0);g.fill();rect(g,dim('#cfc8b0'),x+51,hz-82,4,14)}
   else if(r>.4){if(md(i,2))jaca(g,x+60,hz+8,.62,t);else acacia(g,x+60,hz+10,.6)}else{el(g,dim('#6aa850'),x+54,hz+6,64,12);el(g,dim('#5a9a44'),x+30,hz+2,40,9);rect(g,dim('#8a929a'),x+86,hz-26,2,32)}}
  else if(zz==6){if(r>.7)eucal(g,x+55,hz+8,.55);else if(r>.45){fico(g,x+55,hz+8,.5)}else if(r>.22){rect(g,dim('#f4f2ea'),x+14,hz-40,80,48);rect(g,dim('#dedad0'),x+12,hz-44,84,6);for(let q=0;q<4;q++)rect(g,dim('#7a9ab4'),x+22+q*19,hz-32,10,16);wins(0,0)}else{el(g,dim('#3f8a3a'),x+54,hz+4,54,12);for(let q=0;q<5;q++)dot(g,dim(['#e8402a','#f2c82a','#e86aa8'][q%3]),x+34+q*10,hz+2+(q%2)*2,2)}}
  else if(zz==7){if(r>.55)fico(g,x+55,hz+10,.62);else if(r>.3)cedro(g,x+55,hz+10,.7);else bambu(g,x+55,hz+10,.55,t);if(r>.7)felci(g,x+20,hz+10,.6)}
  else if(zz==8){if(r>.62){const hh=100+r*60;rect(g,dim(['#c8c0a8','#b8b4a0','#d0b890'][md(i,3)]),x+14,hz-hh,74,hh+10);rect(g,'rgba(255,255,255,.16)',x+14,hz-hh,5,hh+10);for(let q=0;q<hh/20;q++){rect(g,dim('#7a766a'),x+12,hz-hh+12+q*20,78,2.4);for(let c2=0;c2<3;c2++){rect(g,dim('#2a3a48'),x+20+c2*22,hz-hh+16+q*20,12,12);if(night>.15&&hr(i*9+q*5+c2)>.45)rect(g,'rgba(255,214,130,.9)',x+20+c2*22,hz-hh+16+q*20,12,12)}if(hr(i+q)>.7)rect(g,dim(['#c8402a','#2a6aa8','#f2c82a'][q%3]),x+22,hz-hh+30+q*20,26,6)}if(hr(i*3)>.5){el(g,dim('#d8d8d0'),x+78,hz-hh-4,8,5)}}
   else if(r>.18){const c=dim(['#d8c8a8','#c8d0b8','#e0b898','#b8c8d0'][md(i,4)]);rect(g,c,x+10,hz-36-r*20,84,48+r*20);poly(g,dim('#8a929a'),[[x+4,hz-36-r*20],[x+16,hz-50-r*20],[x+88,hz-50-r*20],[x+100,hz-36-r*20]]);for(let q=0;q<10;q++)rect(g,'rgba(255,255,255,.18)',x+16+q*8,hz-50-r*20,1.4,14);rect(g,dim('#2a3a48'),x+22,hz-22,14,16);rect(g,dim('#2a3a48'),x+56,hz-22,14,16);if(night>.15){rect(g,'rgba(255,214,130,.9)',x+22,hz-22,14,16);if(hr(i)>.4)rect(g,'rgba(255,214,130,.9)',x+56,hz-22,14,16)}}
   else jaca(g,x+55,hz+8,.6,t)}
  else{ /* zona 9 */ if(r>.7){rect(g,dim('#7a828a'),x+40,hz-90,4,96);for(let q=0;q<4;q++){rect(g,dim('#4a4e58'),x+30+(q%2)*12,hz-96+Math.floor(q/2)*6,10,5);if(night>.1)glow(g,x+35+(q%2)*12,hz-93+Math.floor(q/2)*6,14,'255,240,190',.6*Math.min(1,night+.2))}}
   else if(r>.38){rect(g,dim('#8a8e94'),x+8,hz-44,92,54);for(let q=0;q<4;q++)poly(g,dim('#6a6e74'),[[x+8+q*23,hz-44],[x+8+q*23,hz-58],[x+31+q*23,hz-44]]);rect(g,dim('#2a2e3a'),x+20,hz-26,24,30);rect(g,dim('#2a2e3a'),x+58,hz-26,24,30);if(night>.2){rect(g,'rgba(255,214,130,.7)',x+22,hz-24,20,26);rect(g,'rgba(255,214,130,.7)',x+60,hz-24,20,26)}}
   else{rect(g,dim('#b8b0a0'),x+12,hz-70,84,80);rect(g,dim('#8a867a'),x+10,hz-74,88,6);rect(g,dim('#1f6a3a'),x+24,hz-62,60,10);for(let q=0;q<3;q++)for(let c2=0;c2<4;c2++){rect(g,dim('#2a3a48'),x+20+c2*20,hz-46+q*14,10,8);if(night>.2&&hr(i*7+q*4+c2)>.4)rect(g,'rgba(255,226,160,.85)',x+20+c2*20,hz-46+q*14,10,8)}}
   ln(g,dim('#3a3e48'),.8,[x-6,hz-34,x+54,hz-28,x+114,hz-34])}});
 /* nel mezzo delle strade: nibbi e cicogne sono nel livello della vita; qui solo i piccoli fili del centro */}

/* ---- livello 3: i palazzi e le piante lungo la strada ---- */
/* bld: palazzo generico. o: wall, roof ('f' piatto con cornice, 'p' tetto a spioventi, 't' lamiera), rc, cor, bal (balconi), laund (panni stesi), shop (negozio con tenda e insegna), sg (testo insegna), cw/rh (passo delle finestre) */
function bld(g,x,w,h,i,k,o){const gt=GT,y0=gt-h;rect(g,tn(o.wall),x,y0,w,h+6);rect(g,'rgba(255,255,255,.12)',x,y0,4,h+6);rect(g,'rgba(0,0,0,.1)',x+w-9,y0,9,h+6);
 if(o.roof=='p'){poly(g,tn(o.rc||'#a8452e'),[[x-6,y0],[x+w*.2,y0-28],[x+w*.8,y0-28],[x+w+6,y0]]);for(let r=0;r<4;r++)rect(g,'rgba(0,0,0,.14)',x-4+r*4,y0-r*7-2,w+8-r*8,1.4)}
 else if(o.roof=='t'){poly(g,tn('#8a929a'),[[x-4,y0],[x+8,y0-14],[x+w-8,y0-14],[x+w+4,y0]]);for(let q=0;q<w/9;q++)rect(g,'rgba(255,255,255,.2)',x+8+q*9,y0-14,1.4,14)}
 else{rect(g,tn(o.cor||'#a8a498'),x-3,y0-5,w+6,6);if(hr(i*3)>.6){rect(g,tn('#7a828a'),x+w*.6,y0-18,16,13);el(g,tn('#d8d8d0'),x+w*.2,y0-9,9,5)}}
 const sh=o.shop?40:6,rh=o.rh||32,cw=o.cw||26,rows=Math.max(1,Math.floor((h-sh-12)/rh)),cols=Math.max(1,Math.floor((w-14)/cw));
 for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){const wx=x+9+c*(w-18)/cols+((w-18)/cols-14)/2,wy=y0+10+r*rh,on=lit(k,i*17+r*5+c);rect(g,tn('#2e3a44'),wx-1,wy-1,16,rh*.55+2);rect(g,on?LIT:tn('#8aa6b6'),wx,wy,14,rh*.55);if(on&&k>.3)glow(g,wx+7,wy+8,18,'255,226,150',.3);rect(g,'rgba(255,255,255,.28)',wx+6.6,wy,1,rh*.55);
  if(o.bal&&c%2==(r%2)){rect(g,tn('#7a766a'),wx-4,wy+rh*.55+2,22,3.4);for(let q=0;q<5;q++)rect(g,tn('#4a4a50'),wx-3+q*5,wy+rh*.55-6,1,8);rect(g,tn('#4a4a50'),wx-4,wy+rh*.55-6,22,1.2)}}
 if(o.laund&&h>90){for(let r=0;r<2;r++){const ly=y0+24+r*38,lx=x+6+hr(i+r)*10;ln(g,'#4a4a50',.8,[lx,ly,lx+w-16,ly+2]);for(let q=0;q<5;q++)rect(g,tn(['#e8402a','#f2c82a','#2a6aa8','#f4f0e6','#4aa84a'][(q+i+r)%5]),lx+4+q*(w-26)/5,ly+1,8,11)}}
 if(o.shop){const sc=o.sc||['#c8281e','#2a6aa8','#2a8a3a','#e8802a'][md(i,4)];rect(g,tn('#2a2a30'),x+5,gt-34,w-10,34);rect(g,k>.15?LIT:tn('#5a6a74'),x+8,gt-31,w-16,24);for(let q=0;q<(w-16)/8;q++)rect(g,'rgba(0,0,0,.2)',x+8+q*8,gt-31,1,24);poly(g,tn(sc),[[x+2,gt-36],[x+w-2,gt-36],[x+w-8,gt-26],[x+8,gt-26]]);for(let q=0;q<6;q++)rect(g,'rgba(255,255,255,.4)',x+8+q*((w-16)/6)+4,gt-36,(w-16)/12,10);
  rect(g,tn('#f4f0e6'),x+10,gt-52,w-20,13);txt(g,o.sg||['DUKA','SALON','CHEMIST','HARDWARE','CAFE','TAILOR'][md(i,6)],x+w/2,gt-42,7.4,tn(sc),'900');if(k>.2)glow(g,x+w/2,gt-20,w*.6,'255,214,130',.2*k)}}
const arbus=(g,x,gt,s,t,i)=>{[acacia,jaca,eucal][md(i,3)](g,x,gt,s,t)};
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3);
 if(st==1){/* savana: acacie, rocce di terra rossa, termitai, erba dorata, cespugli */
  if(r>.62){acacia(g,x+w*.5,gt+4,1+r*.4);return}if(r>.4){poly(g,tn('#a8643a'),[[x+20,gt+6],[x+36,gt-26-r*30],[x+70,gt-40-r*30],[x+104,gt-20],[x+130,gt+6]]);rect(g,'rgba(0,0,0,.14)',x+90,gt-30,30,36);el(g,tn('#5a7a2e'),x+60,gt-4,22,8);return}
  if(r>.2){poly(g,tn('#9a6a44'),[[x+60,gt+6],[x+70,gt-24],[x+80,gt-36],[x+90,gt-22],[x+104,gt+6]]);erba(g,x+30,gt+4,60,TT);return}erba(g,x+w*.5,gt+4,100,TT);for(let q=0;q<3;q++)cespu(g,x+30+q*40,gt+6,1.2);return}
 if(st==2){/* Karen: ville bianche con tetto rosso, giardini, jacaranda, eucalipti, muretti di pietra */
  if(r>.66){jaca(g,x+w*.5,gt+4,1.3+r*.2,TT);return}if(r>.52){eucal(g,x+w*.5,gt+4,1.2);return}
  if(r>.3){bld(g,x+6,w-30,h-50,i,k,{wall:['#f2ede0','#efe6d0','#e8e4d8'][md(i,3)],roof:'p',rc:'#a8452e',cw:30,rh:34});rect(g,tn('#8a867a'),x-6,gt-12,w+4,12);return}
  rect(g,tn('#9a9488'),x-4,gt-30,w+8,36);for(let q=0;q<9;q++)rect(g,'rgba(0,0,0,.14)',x-4+q*20,gt-30,1.4,36);for(let q=0;q<4;q++)cespu(g,x+20+q*40,gt-26,1.2);return}
 if(st==3){/* centro: cemento anni Settanta con balconi, torri di vetro, vecchi edifici bassi con insegne */
  if(r>.86){jaca(g,x+w*.5,gt+4,1.2,TT);return}
  if(r>.62){const hh=h+90,c=['#6a90a8','#7aa0b0','#8ab0c0'][md(i,3)];rect(g,tn(c),x+10,gt-hh,w-34,hh+6);rect(g,'rgba(255,255,255,.2)',x+10,gt-hh,14,hh+6);rect(g,'rgba(0,0,0,.14)',x+w-52,gt-hh,18,hh+6);for(let q=0;q<hh/14;q++)rect(g,'rgba(255,255,255,.12)',x+10,gt-hh+8+q*14,w-34,1.6);for(let q=0;q<hh/14;q++)for(let c2=0;c2<5;c2++)if(lit(k,i*19+q*5+c2))rect(g,'rgba(255,226,150,.85)',x+16+c2*((w-46)/5),gt-hh+10+q*14,8,6);rect(g,tn('#4a5a68'),x+w*.3,gt-hh-12,40,12);return}
  if(r>.34){bld(g,x+6,w-20,h+40,i,k,{wall:['#b8b4a4','#c8c0b0','#a8a8a0'][md(i,3)],bal:1,cw:24,rh:30,shop:r>.5});return}
  bld(g,x+4,w-16,h-30,i,k,{wall:['#d8c8a0','#c8a888','#b8c0a0','#e0c8b0'][md(i,4)],cor:'#8a7a5a',shop:1,cw:30,rh:30});return}
 if(st==4){/* City Market e Jamia: palazzi di tre-quattro piani colorati con balconi e insegne, mercato, alberi dei Jeevanjee */
  if(r>.84){acacia(g,x+w*.5,gt+4,1.2);return}if(r>.72){jaca(g,x+w*.5,gt+4,1.2,TT);return}
  bld(g,x+4,w-14,h+10,i,k,{wall:['#d8a070','#e8c06a','#c87a5a','#a8c0a0','#d8b8c0'][md(i,5)],bal:1,laund:r>.55,shop:1,cw:24,rh:30});return}
 if(st==5){/* Uhuru Park e Central Park: alberi grandi sul prato, lampioni, i grattacieli oltre il parco */
  if(r>.5){[acacia,jaca,eucal][md(i,3)](g,x+w*.5,gt+4,1.15+r*.3,TT);return}if(r>.3){el(g,tn('#6aa850'),x+w*.5,gt+4,w*.5,10);el(g,tn('#5a9a44'),x+w*.3,gt,w*.3,8);PR.nblampione(g,x+w*.8,gt+8,TT,0,k);return}
  [acacia,jaca][md(i,2)](g,x+w*.5,gt+4,1.3,TT);cespu(g,x+20,gt+6,1.3,'#4a8a38');return}
 if(st==6){/* Museum Hill: alberi alti, siepi, un'ala moderna, muretti e aiuole */
  if(r>.6){[eucal,jaca,fico][md(i,3)](g,x+w*.5,gt+4,1.1+r*.2,TT);return}
  if(r>.34){bld(g,x+8,w-40,h-60,i,k,{wall:'#f4f2ea',cor:'#dedad0',cw:30,rh:34});rect(g,tn('#c8d8e0'),x+w-34,gt-h+10,30,h-4);rect(g,'rgba(255,255,255,.3)',x+w-34,gt-h+10,30,12);return}
  el(g,tn('#3f8a3a'),x+w*.5,gt+2,w*.46,12);for(let q=0;q<6;q++)dot(g,tn(['#e8402a','#f2c82a','#e86aa8'][q%3]),x+30+q*20,gt+(q%2)*3,2.4);rect(g,tn('#b8b2a0'),x,gt+4,w,6);return}
 if(st==7){/* Karura: fichi giganti, cedri, bambù, felci e radici */
  if(r>.66){fico(g,x+w*.5,gt+6,1.4+r*.3);return}if(r>.4){cedro(g,x+w*.5,gt+6,1.5);cedro(g,x+w*.5+50,gt+6,1.2);return}if(r>.2){bambu(g,x+w*.5,gt+6,1.3,TT);return}
  eucal(g,x+w*.5,gt+6,1.2);felci(g,x+20,gt+6,1.4);felci(g,x+w-40,gt+6,1.2);return}
 if(st==8){/* mtaa: case di cemento con tetti di lamiera, palazzi di quattro-sei piani con balconi e panni stesi, antenne paraboliche */
  if(r>.86){jaca(g,x+w*.5,gt+4,1.3,TT);return}
  if(r>.46){bld(g,x+4,w-16,h+60,i,k,{wall:['#c8c0a8','#b8b4a0','#d0b890','#b8c8c0'][md(i,4)],bal:1,laund:1,shop:r>.6,cw:24,rh:30});if(hr(i)>.4){el(g,tn('#d8d8d0'),x+w-22,gt-h-60-4,9,5)}return}
  bld(g,x+4,w-20,h-70,i,k,{wall:['#d8c8a8','#c8d0b8','#e0b898','#b8c8d0'][md(i,4)],roof:'t',shop:1,sg:['BUTCHERY','DUKA','CHOMA','SALON','HARDWARE'][md(i,5)],cw:28,rh:28});return}
 /* st==9 stazione: capannoni a dente di sega, sede ferroviaria, tralicci e fari */
 if(r>.78){rect(g,tn('#7a828a'),x+w*.5-2,gt-170,4,176);for(let q=0;q<6;q++){rect(g,tn('#4a4e58'),x+w*.5-16+(q%3)*11,gt-176+Math.floor(q/3)*7,9,5);if(k>.1)glow(g,x+w*.5-12+(q%3)*11,gt-173+Math.floor(q/3)*7,16,'255,240,190',.7*Math.min(1,k+.2))}return}
 if(r>.4){rect(g,tn('#8a8e94'),x+4,gt-h+30,w-8,h-24);for(let q=0;q<4;q++)poly(g,tn('#6a6e74'),[[x+4+q*((w-8)/4),gt-h+30],[x+4+q*((w-8)/4),gt-h+10],[x+4+(q+1)*((w-8)/4),gt-h+30]]);rect(g,tn('#2a2e3a'),x+20,gt-60,40,60);rect(g,k>.2?'rgba(255,214,130,.8)':tn('#4a5a68'),x+22,gt-58,36,56);return}
 bld(g,x+6,w-20,h+20,i,k,{wall:'#b8b0a0',cor:'#8a867a',cw:28,rh:32});rect(g,tn('#1f6a3a'),x+16,gt-h+14,w-40,12);return}
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>110+hr(i*5)*60,170);
 each2(190,8,Z[1],Z[2],2,i=>130+hr(i*5)*50,170);
 each2(170,9,Z[2],Z[3],3,i=>130+hr(i*5)*60,160);
 each2(160,10,Z[3],Z[4],4,i=>130+hr(i*5)*40,150);
 each2(180,11,Z[4],Z[5],5,i=>130+hr(i*5)*40,170);
 each2(190,12,Z[5],Z[6],6,i=>140+hr(i*5)*50,180);
 each2(190,13,Z[6],Z[7],7,i=>150+hr(i*5)*50,170);
 each2(170,14,Z[7],Z[8],8,i=>130+hr(i*5)*40,160);
 each2(190,15,Z[8],Z[9],9,i=>130+hr(i*5)*50,170)}

/* ---- suolo: terra rossa e erba dorata, ville e prati di Karen, asfalto e marciapiedi, cemento del mercato, il grande prato, ghiaia del museo, sentieri di foresta, polvere del mtaa, banchina e binari ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#b8643a','k'],[Z[1],Z[2],'#b0623c','l'],[Z[2],Z[3],'#6a6a70','g'],[Z[3],Z[4],'#9a948a','c'],[Z[4],Z[5],'#7ab05a','b'],[Z[5],Z[6],'#d8c8a0','r'],[Z[6],Z[7],'#7a4a30','a'],[Z[7],Z[8],'#8a5a40','m'],[Z[8],Z[9],'#8e8e90','v']];
 rect(g,'#e0d8c0',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0),zw=z[1]-z[0];g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const pz=(q,m)=>z[0]+((q*m)%zw)-cam;
  if(z[3]=='k'){/* erba alta e dorata sul bordo, strada di terra rossa con le tracce delle ruote, sassi */
   rect(g,'#c8aa58',x0,gt+3,x1-x0,38);for(let q=0;q<90;q++)rect(g,q%3?'#b09440':'#d8be68',pz(q,47),gt+6+hr(q)*32,2,5+hr(q*3)*5);rect(g,'#b8643a',x0,gt+41,x1-x0,110);rect(g,'rgba(60,20,0,.2)',x0,gt+84,x1-x0,6);rect(g,'rgba(60,20,0,.2)',x0,gt+108,x1-x0,6);rect(g,'rgba(255,200,150,.12)',x0,gt+96,x1-x0,6);for(let q=0;q<70;q++)dot(g,hr(q)>.5?'rgba(120,60,30,.5)':'rgba(230,170,120,.4)',pz(q,41),gt+46+hr(q*5)*100,1+hr(q)*1.8)}
  if(z[3]=='l'){/* prato curato in alto, terra rossa battuta e ghiaia, qualche asse di passerella */
   rect(g,'#6aa850',x0,gt+3,x1-x0,34);for(let q=0;q<60;q++)rect(g,q%2?'#5a9a44':'#7ab85a',pz(q,43),gt+6+hr(q)*28,2,5);rect(g,'#b0623c',x0,gt+37,x1-x0,114);rect(g,'rgba(255,190,140,.14)',x0,gt+60,x1-x0,52);for(let q=0;q<110;q++)dot(g,hr(q)>.5?'rgba(255,230,200,.5)':'rgba(110,50,20,.45)',pz(q,31),gt+42+hr(q*5)*104,1+hr(q)*1.6);for(let q=0;q<24;q++){const px=pz(q,167);rect(g,'rgba(138,106,66,.5)',px,gt+118,34,10);rect(g,'rgba(60,40,20,.3)',px,gt+127,34,1.4)}}
  if(z[3]=='g'){/* asfalto con strisce pedonali e linea tratteggiata, cordolo, marciapiede di cemento con tombini */
   rect(g,'#5e5e66',x0,gt+3,x1-x0,48);for(let q=0;q<40;q++)rect(g,'#f4f0e0',pz(q,61),gt+27,24,3);for(let q=0;q<7;q++){const px=pz(q,719)+40;for(let s2=0;s2<6;s2++)rect(g,'rgba(250,250,240,.8)',px+s2*9,gt+4,5,46)}
   rect(g,'#8a867a',x0,gt+51,x1-x0,5);rect(g,'#b4b0a4',x0,gt+56,x1-x0,100);for(let r=0;r<5;r++){const yy=gt+62+r*19,bw=40+r*6,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5);rect(g,hh>.7?'rgba(255,255,255,.12)':hh>.35?'rgba(0,0,0,.05)':'rgba(255,255,255,.04)',px,yy,bw-2,17);rect(g,'rgba(0,0,0,.1)',px,yy,1.2,18)}}
   for(let q=0;q<7;q++){const px=pz(q,331);el(g,'#3a3a40',px,gt+110,11,4);el(g,'#5a5a60',px,gt+109,9,3)}}
  if(z[3]=='c'){/* cemento levigato del mercato, giunti, qualche pozzanghera del mattino, tombini */
   rect(g,'#9a948a',x0,gt+3,x1-x0,150);for(let r=0;r<6;r++){const yy=gt+9+r*20,bw=46+r*7,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*11+r*7);rect(g,hh>.65?'rgba(255,255,255,.1)':hh>.3?'rgba(0,0,0,.06)':'rgba(255,255,255,.04)',px,yy,bw-2,18);rect(g,'rgba(0,0,0,.1)',px,yy,1.2,19)}}
   for(let q=0;q<9;q++){const px=pz(q,229);el(g,'rgba(120,150,180,.5)',px,gt+80+hr(q)*50,30+hr(q)*20,5);el(g,'rgba(255,255,255,.3)',px-6,gt+78+hr(q)*50,12,1.6)}for(let q=0;q<6;q++){const px=pz(q,311);rect(g,'#4a4640',px,gt+54,20,8);for(let s2=0;s2<4;s2++)rect(g,'rgba(255,255,255,.1)',px+2+s2*5,gt+54,1.4,8)}}
  if(z[3]=='b'){/* il grande prato a strisce, il viale di cemento e ghiaia, le aiuole */
   for(let k=-1;k<Math.ceil(ww/70)+2;k++){const px=Math.floor((cam+x0)/70)*70+k*70-cam;rect(g,k%2?'rgba(255,255,255,.07)':'rgba(0,0,0,.05)',px,gt+3,70,150)}for(let q=0;q<90;q++)rect(g,q%2?'#5a9a44':'#8ac864',pz(q,37),gt+8+hr(q)*140,2,5);
   rect(g,'#cfc8b4',x0,gt+64,x1-x0,42);rect(g,'rgba(0,0,0,.1)',x0,gt+64,x1-x0,2);rect(g,'rgba(0,0,0,.08)',x0,gt+104,x1-x0,2);for(let q=0;q<40;q++)rect(g,'rgba(0,0,0,.1)',pz(q,53),gt+66,1.2,38);
   for(let q=0;q<10;q++){const px=pz(q,271);el(g,'#4a8a38',px,gt+130,26,8);for(let s2=0;s2<5;s2++)dot(g,['#e8402a','#f2c82a','#e86aa8','#f4f0e6'][(s2+q)%4],px-14+s2*7,gt+128+(s2%2)*3,2.2)}}
  if(z[3]=='r'){/* prato in alto, ghiaia chiara, lastre della scalinata */
   rect(g,'#5a9a44',x0,gt+3,x1-x0,34);for(let q=0;q<60;q++)rect(g,q%2?'#4a8a38':'#7ab85a',pz(q,43),gt+6+hr(q)*28,2,5);rect(g,'#d8c8a0',x0,gt+37,x1-x0,114);for(let q=0;q<150;q++)dot(g,hr(q)>.5?'rgba(255,250,230,.6)':'rgba(120,100,60,.4)',pz(q,29),gt+42+hr(q*5)*104,1+hr(q)*1.4);for(let q=0;q<10;q++){const px=pz(q,251);for(let s2=0;s2<3;s2++)rect(g,'rgba(120,110,90,.35)',px,gt+100+s2*9,46,8)}}
  if(z[3]=='a'){/* sentiero di terra battuta nella foresta, foglie, radici, macchie di luce */
   rect(g,'#6a3e28',x0,gt+3,x1-x0,150);rect(g,'#9a5a38',x0,gt+56,x1-x0,66);rect(g,'rgba(255,200,150,.1)',x0,gt+70,x1-x0,30);for(let q=0;q<150;q++)dot(g,['rgba(90,130,40,.7)','rgba(200,150,50,.7)','rgba(80,40,20,.6)'][q%3],pz(q,23),gt+8+hr(q*5)*140,1.4+hr(q)*1.4);
   for(let q=0;q<14;q++){const px=pz(q,163);ln(g,'#4a2a1a',2.6,[px,gt+60+hr(q)*50,px+20,gt+66+hr(q)*50,px+44,gt+60+hr(q)*50])}
   for(let q=0;q<9;q++){const px=pz(q,227);el(g,'rgba(255,236,160,'+(.1+.06*Math.sin(t+q))+')',px,gt+40+hr(q)*90,34,8)}}
  if(z[3]=='m'){/* marciapiede di cemento con tombini, strada di terra battuta e asfalto con le buche, polvere rossa */
   rect(g,'#a8a49a',x0,gt+3,x1-x0,38);for(let q=0;q<30;q++)rect(g,'rgba(0,0,0,.1)',pz(q,59),gt+3,1.2,38);rect(g,'#7a766a',x0,gt+41,x1-x0,4);rect(g,'#8a5a40',x0,gt+45,x1-x0,106);
   for(let q=0;q<6;q++){const px=pz(q,433);rect(g,'#4a4a50',px,gt+50+hr(q)*40,90+hr(q)*40,36);rect(g,'rgba(255,255,255,.06)',px,gt+50+hr(q)*40,90+hr(q)*40,3)}
   for(let q=0;q<10;q++){const px=pz(q,193);el(g,'#4a2e20',px,gt+60+hr(q*3)*80,16+hr(q)*10,5);el(g,'rgba(120,150,180,.3)',px-2,gt+59+hr(q*3)*80,10,2)}for(let q=0;q<120;q++)dot(g,'rgba(210,130,90,.35)',pz(q,17),gt+48+hr(q*5)*100,1+hr(q)*1.4);
   for(let q=0;q<5;q++){const px=pz(q,577);rect(g,'#3a3a40',px,gt+14,20,8)}}
  if(z[3]=='v'){/* banchina di cemento con la fascia gialla, binari con pietrisco */
   rect(g,'#9a9a98',x0,gt+3,x1-x0,86);for(let r=0;r<5;r++)rect(g,'rgba(0,0,0,.1)',x0,gt+16+r*17,x1-x0,1.4);for(let q=0;q<50;q++)rect(g,'rgba(255,255,255,.14)',pz(q,53),gt+10+hr(q)*72,3,1.6);
   rect(g,'#e8c828',x0,gt+88,x1-x0,4);rect(g,'#6a6a6e',x0,gt+92,x1-x0,34);for(let k=-1;k<Math.ceil(ww/14)+2;k++){const px=Math.floor((cam+x0)/14)*14+k*14-cam;rect(g,'#5a4a3a',px,gt+96,5,26)}rect(g,'#2a2a2e',x0,gt+102,x1-x0,2.4);rect(g,'#2a2a2e',x0,gt+114,x1-x0,2.4);rect(g,'rgba(255,255,255,.22)',x0,gt+102,x1-x0,.8);rect(g,'rgba(255,255,255,.22)',x0,gt+114,x1-x0,.8);
   const nn=nf(cam+240);if(nn>.4)for(let q=0;q<26;q++)rect(g,'rgba(255,214,120,'+(.1+.18*hr(q))*nn+')',pz(q,97),gt+102,18,1.4)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1800,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const gd=cl((cam-12200)/700,0,1)*cl((14800-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
 const sg=cl((cam-14600)/700,0,1)*cl((17000-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- vita: nibbi neri nel cielo, un aereo che scende verso l'aeroporto, ibis sacri in volo, cicogne marabù sugli alberi, cani e gatti di quartiere, passanti, pipistrelli di notte ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240,hz=GT;
 /* aereo che scende verso l'aeroporto (zona 1) */
 const pa=cl((3300-xs)/500,0,1);if(pa>.05){const u=(t*.035)%1,px=500-u*560-o*.04,py=40+u*70;g.globalAlpha=pa;el(g,'#f4f4ee',px,py,16,3.2);poly(g,'#f4f4ee',[[px+12,py-1],[px+20,py-12],[px+23,py-12],[px+18,py]]);poly(g,'#d8dce4',[[px-2,py],[px+8,py+9],[px+11,py+9],[px+6,py]]);rect(g,'#2a6aa8',px-14,py-.6,26,1.4);dot(g,'rgba(255,60,50,'+(.5+.5*Math.sin(t*6))+')',px-2,py+3,1.2);g.globalAlpha=1}
 /* nibbi neri in volo lento (zone 1-7) */
 const kv=Math.min(cl((xs-0)/200,0,1),cl((17400-xs)/500,0,1));if(kv>.05)for(let i=0;i<3;i++){const bx=((i*190+t*(14+i*5))%620)-70,by=46+hr(i*7)*80+Math.sin(t*.7+i*2)*16,w=Math.sin(t*3+i)*2;g.globalAlpha=kv;g.strokeStyle='#2a2428';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-12,by+w+2);g.quadraticCurveTo(bx-5,by-4,bx,by);g.quadraticCurveTo(bx+5,by-4,bx+12,by+w+2);g.stroke();poly(g,'#2a2428',[[bx-2,by+1],[bx+2,by+1],[bx+5,by+8],[bx,by+6],[bx-5,by+8]]);g.globalAlpha=1}
 /* ibis sacri in volo, in fila (zone 3-6) */
 const iv=Math.min(cl((xs-5100)/500,0,1),cl((14400-xs)/500,0,1));if(iv>.05)for(let i=0;i<4;i++){const bx=((i*34+t*(38+i))%700)-90+i*14,by=70+hr(i*3)*20+Math.abs(i-1.5)*8+Math.sin(t*2+i)*6,w=Math.sin(t*9+i)*3.2;g.globalAlpha=iv;g.strokeStyle='#f4f2ec';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-9,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+9,by+w);g.stroke();rect(g,'#2a2a2e',bx+1,by-1,6,2);g.globalAlpha=1}
 /* uccelli di sera sopra la foresta (zone 7-8) */
 const sv=cl((xs-15400)/500,0,1)*cl((19600-xs)/600,0,1);if(sv>.05)for(let i=0;i<5;i++){const bx=((i*131+t*(26+i*4))%640)-80,by=80+hr(i*3)*110+Math.sin(t*1.6+i*2)*14,w=Math.sin(t*10+i)*3;g.globalAlpha=sv;g.strokeStyle='rgba(20,18,30,.9)';g.lineWidth=2;g.beginPath();g.moveTo(bx-6,by+w);g.quadraticCurveTo(bx-2,by-3,bx,by);g.quadraticCurveTo(bx+2,by-3,bx+6,by+w);g.stroke();g.globalAlpha=1}
 /* pipistrelli attorno ai lampioni, di notte (zone 8-9) */
 const bn=cl((xs-18400)/800,0,1);if(bn>.05)for(let i=0;i<6;i++){const bx=((i*97+t*(34+i*3))%560)-40,by=90+hr(i*5)*120+Math.sin(t*5+i)*18,w=Math.sin(t*14+i)*3.4;g.globalAlpha=bn;g.strokeStyle='rgba(10,8,20,.9)';g.lineWidth=2;g.beginPath();g.moveTo(bx-7,by+w);g.lineTo(bx-2,by-2);g.lineTo(bx,by+1);g.lineTo(bx+2,by-2);g.lineTo(bx+7,by+w);g.stroke();g.globalAlpha=1}
 /* cicogne marabù in cima agli alberi (zone 3-6), cani e gatti di quartiere, passanti */
 each(o,520,31,(x,i,r)=>{const wx=cam+x,zz=zn(wx);A.setDK(nf(wx));
  if(zz>=3&&zz<=6&&r>.55){acacia(g,x+30,hz+10,1.15,t);marabu(g,x+38,hz-100,.85,t)}
  if(zz>=3&&zz<=8&&r<.22){if(md(i,2))gatto(g,x+60,hz+42,t,['#c9873a','#4a4a50','#e8e0d0'][md(i,3)]);else PR.nbcane(g,x+60,hz+46,t,['#b08a52','#3a3a3e','#d8c8a8'][md(i,3)])}});
 each(o,430,57,(x,i,r)=>{const wx=cam+x,zz=zn(wx);if(!(zz==3||zz==4||zz==5||zz==6||zz==8)||r<.4)return;A.setDK(nf(wx));const dir=md(i,2)?1:-1,off=Math.sin(t*.18+i)*70,T=['#c8503a','#2a6aa8','#e8c04a','#4aa86a','#8a4a9a','#f4f0e6'];pers(g,x+off,hz+54,t+i,{f:Math.cos(t*.18+i)*dir>0?1:-1,s:.5,skin:['#6a4028','#8a5a3a','#5a3420'][md(i,3)],top:T[md(i,6)],bot:['#2a3a5a','#3a3a46'][md(i,2)],ph:i})})}

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Wanjiru: cappello da ranger, divisa verde oliva, binocolo al collo, radio alla cintura, tazza di tè fumante */
 NP('nb_wanjiru',NAME.nb_wanjiru,800,GREET.nb_wanjiru,{skin:'#6a4028',top:'#5a6a38',bot:'#4a5230',hair:'#14100c',s:1.0},(g,b,t)=>{el(g,tn('#6a7a40'),0,-112+b,19,4.6);rect(g,tn('#6a7a40'),-9,-122+b,18,10);rect(g,tn('#3a4a24'),-9,-114+b,18,2.4);
  ln(g,'#14110f',1.2,[-6,-90+b,0,-78+b,6,-90+b]);rect(g,'#14110f',-6,-82+b,12,7);rect(g,'#3a3e44',-4,-81+b,3,4);rect(g,'#3a3e44',1,-81+b,3,4);rect(g,tn('#2a2a2e'),7,-56+b,5,10);ln(g,'#2a2a2e',1,[9,-56+b,9,-66+b]);dot(g,'#e8402a',9,-67+b,1.2);rect(g,tn('#8a6a3a'),-13,-48+b,26,3);
  rect(g,'#f4f0e6',17,-66,8,8);rect(g,'#c8a050',17,-64,8,2);for(let q=0;q<3;q++)el(g,'rgba(240,240,240,'+(.4*(1-((t*.5+q*.33)%1)))+')',21+Math.sin(t*2+q)*2,-71-((t*18+q*9)%22),3,2.4)}),
 /* Juma: giacca a vento colorata, cappellino con la visiera, cuffie al collo, banconote piegate in tasca, una mano che batte sul tetto del matatu */
 NP('nb_juma',NAME.nb_juma,6850,GREET.nb_juma,{skin:'#7a4a30',top:'#e8402a',bot:'#2a3a5a',hair:'#14100c',s:1.0},(g,b,t)=>{rect(g,tn('#2a6aa8'),-9,-121+b,18,9);el(g,tn('#2a6aa8'),0,-112+b,10,3);poly(g,tn('#1a4a88'),[[2,-113+b],[17,-111+b],[16,-108+b],[2,-110+b]]);
  rect(g,tn('#f2c82a'),-12,-76+b,24,3);rect(g,tn('#f2c82a'),-12,-66+b,24,3);ln(g,'#14110f',2.4,[-9,-92+b,0,-84+b,9,-92+b]);dot(g,'#14110f',-9,-90+b,3.6);dot(g,'#14110f',9,-90+b,3.6);rect(g,'#7aa86a',6,-60+b,7,5);rect(g,'#e8a02a',8,-62+b,6,4);
  ln(g,tn('#e8402a'),6,[8,-88+b,22,-102+b,26,-122+b+Math.sin(t*8)*3]);dot(g,tn('#7a4a30'),26,-124+b+Math.sin(t*8)*3,3.6)}),
 /* Mama Akinyi: foulard giallo, grembiule a quadri, occhiali, kiondo al braccio, il banco con la piramide di arance e la bilancia a piatti */
 NP('nb_akinyi',NAME.nb_akinyi,8500,GREET.nb_akinyi,{skin:'#6a4028',top:'#8a4a9a',bot:'#3a3a46',hair:'#14100c',s:1.0},(g,b,t)=>{el(g,tn('#e8a02a'),0,-110+b,13,10);rect(g,tn('#e8a02a'),-13,-112+b,26,5);poly(g,tn('#c8402a'),[[-13,-108+b],[-18,-100+b],[-12,-100+b]]);
  rect(g,tn('#f4f0e6'),-11,-82+b,22,32);for(let r=0;r<5;r++)for(let q=0;q<4;q++)if((r+q)%2==0)rect(g,tn('#c8402a'),-11+q*5.5,-82+r*6.4+b,5.5,6.4);ln(g,'#14110f',.9,[-5,-100+b,-2,-100+b]);g.strokeStyle='#14110f';g.lineWidth=.9;g.beginPath();g.arc(-3,-101+b,2.6,0,7);g.arc(3,-101+b,2.6,0,7);g.stroke();
  ln(g,'#8a5a2a',1.6,[-14,-76+b,-24,-66+b]);el(g,'#b8803a',-26,-60+b,9,6);el(g,'#8a5a2a',-26,-63+b,9,2.4);
  rect(g,'#7a5a34',-40,-40,80,5);rect(g,'#6a4a2a',-36,-35,70,35);rect(g,'rgba(255,255,255,.1)',-36,-35,70,3);for(let r=0;r<4;r++)for(let q=0;q<4-r;q++)dot(g,'#e8802a',-34+q*7+r*3.5,-45-r*6.6,3.4);for(let q=0;q<3;q++)dot(g,'#4a8a2a',8+q*6,-44,3.2);dot(g,'#4a8a2a',11,-50,3.2);ln(g,'#8a8e94',1.2,[26,-58,26,-44]);ln(g,'#8a8e94',1.2,[16,-58,36,-58]);el(g,'#8a8e94',17,-52,5,1.6);el(g,'#8a8e94',35,-52,5,1.6)}),
 /* Wangari: vestito lungo a stampe africane, foulard colorato, alberello in vaso fra le mani, sorriso largo */
 NP('nb_wangari',NAME.nb_wangari,10950,GREET.nb_wangari,{skin:'#6a4028',top:'#2a8a8a',bot:'#2a8a8a',hair:'#14100c',long:1,s:1.0},(g,b,t)=>{el(g,tn('#c8402a'),0,-110+b,13,10);rect(g,tn('#c8402a'),-13,-112+b,26,5);rect(g,tn('#f2c82a'),-13,-110+b,26,2);poly(g,tn('#c8402a'),[[-13,-108+b],[-19,-98+b],[-12,-98+b]]);
  for(let r=0;r<9;r++)for(let q=0;q<5;q++)if((r*3+q*2)%5==0)dot(g,tn(['#f2c82a','#c8402a','#f4f0e6'][(r+q)%3]),-12+q*5.6,-84+r*6.4+b*(r<4?1:0),2);for(let q=0;q<4;q++)rect(g,tn(['#f2c82a','#c8402a'][q%2]),-14+q*8,-14,5,3);
  el(g,tn('#c8402a'),0,-86+b,10,2.4);ln(g,'#2a6a28',2.4,[14,-86+b,14,-100+b]);rect(g,'#a8553a',8,-86+b,12,10);rect(g,'#8a4430',7,-87+b,14,3);ln(g,'#3a8a2a',1.8,[14,-88+b,14,-104+b]);[[-5,-98],[6,-100],[-3,-107],[5,-108],[0,-114]].forEach(c=>el(g,'#3a9a3a',14+c[0],c[1]+b,4,2.6));
  ln(g,'#14110f',1.4,[-3,-96+b,0,-94+b,3,-96+b])}),
 /* Njeri: camicia bianca con il logo, tesserino al collo, occhiali, quaderno e penna in mano */
 NP('nb_njeri',NAME.nb_njeri,13600,GREET.nb_njeri,{skin:'#7a4a30',top:'#f4f0e6',bot:'#c8702a',hair:'#14100c',s:1.0},(g,b,t)=>{dot(g,'#14110f',-6,-117+b,6);dot(g,'#14110f',-12,-103+b,4.6);
  g.strokeStyle='#14110f';g.lineWidth=.9;g.beginPath();g.arc(-2,-101+b,2.8,0,7);g.arc(4,-101+b,2.8,0,7);g.stroke();ln(g,'#14110f',.9,[0,-101+b,1,-101+b]);
  ln(g,'#3a3e44',.9,[-5,-90+b,0,-76+b,5,-90+b]);rect(g,'#f4f0e6',-3,-78+b,7,9);rect(g,'#c8402a',-3,-78+b,7,2);dot(g,'#c8402a',-9,-80+b,2.2);
  rect(g,'#2a6a8a',14,-70,9,12);rect(g,'rgba(255,255,255,.4)',15,-68,7,1.4);rect(g,'rgba(255,255,255,.4)',15,-64,7,1.4);ln(g,'#14110f',1.4,[22,-66,26,-74]);for(let q=0;q<4;q++)rect(g,tn(['#e8c04a','#c8402a'][q%2]),-10+q*6,-34,4,5)}),
 /* Kevin: maglietta tecnica, torcia in fronte, cuffie senza filo, orologio che vibra, telefono in mano */
 NP('nb_kevin',NAME.nb_kevin,15800,GREET.nb_kevin,{skin:'#6a4028',top:'#2a8a9a',bot:'#2a2a36',hair:'#14100c',s:1.0},(g,b,t)=>{rect(g,'#2a2a2e',-9,-112+b,18,3);rect(g,'#e8e8e0',2,-114+b,6,4);glow(g,6,-112+b,40+Math.sin(t*3)*3,'255,250,220',.5);dot(g,'#f4f4f0',-10,-100+b,2.4);dot(g,'#f4f4f0',10,-100+b,2.4);
  for(let q=0;q<3;q++)rect(g,'rgba(255,255,255,.3)',-9,-86+b+q*9,18,1.4);rect(g,'#e8402a',-3,-76+b,7,4);rect(g,'#14110f',16,-68,6,10);rect(g,'#7ac0ff',17,-67,4,8);dot(g,'#14110f',-14,-60,3.2);dot(g,'#7af0a0',-14,-60,1.2+Math.abs(Math.sin(t*3)))}),
 /* Mzee Kariuki: grembiule di plastica bianco, berretto di lana, occhiali sulla fronte, fazzoletto sulla spalla, coltellaccio in mano, pancia soddisfatta */
 NP('nb_kariuki',NAME.nb_kariuki,18430,GREET.nb_kariuki,{skin:'#5a3420',top:'#8a8a82',bot:'#3a3a46',hair:'#6a6a6a',s:1.08},(g,b,t)=>{el(g,tn('#3a3a40'),0,-114+b,11,6.4);rect(g,tn('#3a3a40'),-11,-114+b,22,5);rect(g,tn('#e8402a'),-11,-111+b,22,2);
  g.strokeStyle='#14110f';g.lineWidth=.9;g.beginPath();g.arc(-3,-106+b,2.6,0,7);g.arc(3,-106+b,2.6,0,7);g.stroke();
  el(g,'#f4f0e6',0,-62+b,15,24);rect(g,'#f4f0e6',-13,-88+b,26,22);rect(g,'rgba(0,0,0,.12)',-13,-88+b,4,50);rect(g,'rgba(255,255,255,.5)',-9,-88+b,2,26);for(let q=0;q<4;q++)dot(g,'rgba(140,40,30,.5)',-6+q*4,-56+b+(q%2)*5,1.6);
  rect(g,'#e8e0d0',-17,-92+b,9,5);rect(g,'#c8c0b0',-17,-87+b,9,2);ln(g,'#14110f',3,[16,-62,26,-64]);rect(g,'#c8c8c4',24,-86,5,22);rect(g,'#a8a8a4',24,-86,2,22);ln(g,'#14110f',3.4,[26,-64,26,-58])})
];
/* Mzee Ochieng: seduto sulla panchina del binario, giacca blu da ferroviere con i bottoni, cappello con visiera, sciarpa a righe, bastone e orologio da taschino */
npcs.push({id:'nb_ochieng',name:NAME.nb_ochieng,x:21200,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));const sk=tn('#6a4028'),jk=tn('#1f2f5a'),b=Math.sin(t*1.1)*.8;
  ln(g,tn('#2a2a36'),10,[px-2,y-40,px+f*22,y-42,px+f*24,y-8]);rect(g,tn('#14110f'),px+f*24-(f>0?2:12),y-9,14,7);
  poly(g,jk,[[px-12,y-38],[px-11,y-90+b],[px+11,y-90+b],[px+12,y-38]]);rect(g,'rgba(255,255,255,.08)',px-12,y-90+b,4,52);for(let q=0;q<4;q++)dot(g,'#e8c24a',px+f*1,y-82+q*10+b,1.6);
  for(let q=0;q<4;q++)rect(g,tn(q%2?'#c8402a':'#f4f0e6'),px-11+q*5.5,y-92+b,5.5,5);ln(g,tn('#c8402a'),3,[px-8,y-88+b,px-14,y-70+b]);
  dot(g,sk,px+f*2,y-102+b,10);dot(g,'#14110f',px+f*6,y-104+b,1.4);ln(g,'#f4f0e6',2.2,[px+f*2,y-96+b,px+f*8,y-94+b]);rect(g,tn('#1f2f5a'),px-8+f*2,y-117+b,18,9);el(g,tn('#1f2f5a'),px+f*2,y-109+b,11,3);poly(g,tn('#14204a'),[[px+f*8,y-108+b],[px+f*20,y-106+b],[px+f*19,y-103+b],[px+f*8,y-106+b]]);dot(g,'#e8c24a',px+f*2,y-114+b,1.6);
  ln(g,jk,6,[px+f*6,y-84+b,px+f*16,y-64+b,px+f*22,y-52]);dot(g,sk,px+f*22,y-51,3.4);ln(g,tn('#6a4a2a'),2.6,[px+f*23,y-54,px+f*27,y-6]);ln(g,'#e8c24a',1,[px+f*2,y-76+b,px+f*8,y-66+b]);dot(g,'#e8c24a',px+f*8,y-65+b,2.2)},d:{a:{t:GREET.nb_ochieng}}});

/* ---- oggetti lungo il percorso: [nome in elementi.js, posizione nel mondo, parametro] ---- */
const props=[
 /* zona 1 · Parco Nazionale di Nairobi */
 ['nbtarga',150,'NAIROBI NATIONAL PARK'],['nbacacia',270,1.15],['nbcancello',500],['nbfuoristrada',680],['nbregole',900],['nbbinocolo',985],['nbsavana',1200],['nbpicnic',1530],['nbponte',1650],['nbrogo',1900],['nbtorretta',2230],['nbcespu',2300],['nbrecinto',2370],['nbrinoc',2500],
 /* zona 2 · Langata e Karen */
 ['nbtarga',2900,'GIRAFFE CENTRE'],['nbjaca',2980,1.2],['nbgiraffecentre',3300],['nbbanca',3690],['nbcestino',3780],['nbelefanti',4020],['nbjaca',4350,1.2],['nbcestino',4420],['nbblixen',4700],['nbjaca',5020,1.3],
 /* zona 3 · Centro: KICC e Kimathi Street */
 ['nbtarga',5150,'KENYATTA AVENUE'],['nbcartellone',5330,'KARIBU NAIROBI'],['nbkicc',5700],['nblampione',6000],['nbsemaforo',6060],['nbtarga',6250,'KIMATHI STREET'],['nbkimathi',6400],['nblampione',6560],['nbvenditore',6620],['nbedicola',6730],['nbmatatu',6850],['nbstage',7250],['nbsemaforo',7660],
 /* zona 4 · City Market e Moschea Jamia */
 ['nbtarga',7770,'LOITA STREET'],['nbfrutta',7870,'#e8802a'],['nbcitymarket',8200],['nbfrutta',8640,'#2a8a4a'],['nbjamia',8900],['nbcestino',9120],['nbchai',9330],['nbjeevanjee',9600],['nblampione',9900],
 /* zona 5 · Uhuru Park e Central Park */
 ['nbtarga',10070,'UHURU PARK'],['nbuhuru',10600],['nbfiorib',10790,1],['nbalberello',11040],['nbfreedom',11300],['nbfontana',12000],['nblampione',12330],
 /* zona 6 · Museo Nazionale */
 ['nbtarga',12480,'NATIONAL MUSEUM'],['nbfrecce',12700],['nbmuseo',13000],['nbscultura',13400],['nbturkana',13700],['nbpanca',14020,1],['nbcaffe',14100],['nbsnake',14400],['nbcestino',14760],
 /* zona 7 · Foresta di Karura */
 ['nbtarga',14890,'KARURA FOREST'],['nbkarura',15400],['nbsentiero',15690],['nbtronco',15900],['nbfelci',15960],['nbcascata',16100],['nbtronco',16460],['nbfico',16520,1.3],['nbcorridore',16580,1],['nbgrotte',16800],['nbbambuchiesa',17400],['nbfelci',17620],
 /* zona 8 · il mtaa e la nyama choma */
 ['nbtarga',17780,'MTAA ROAD'],['nbjaca',17900,1.3],['nbmotot',18040,'#c8281e'],['nbmacelleria',18300],['nbcestino',18680],['nbluci',18900,300],['nbduka',19000],['nbmotot',19200,'#2a6aa8'],['nbbirra',19330],['nbtavola',19700],['nbjaca',20000,1.2],
 /* zona 9 · Stazione ferroviaria e Museo ferroviario */
 ['nbtarga',20180,'NAIROBI STATION'],['nborologio',20290],['nbstazione',20800],['nbtabellone',21090],['nbpanchina',21200],['nbchaiv',21330],['nbmuseoferr',21650],['nbsegnale',22050],['nblampione',22110,1],['nbmadaraka',22350],['nbvarco',W1-350]];

const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'nairobi',name:'Nairobi · Dal Parco Nazionale alla Stazione dei Treni',width:W1,sky:['#8a98c8','#f6b4b8','#ffd8b8'],gt:372,gr:['#b8643a','#8a4a2a'],chord:[220,277.2,329.6,415.3],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da nairobi.txt) --- */
(function(){
const TOPX_NB={
nb_wanjiru:[
["Chi sei e che fai?","Wanjiru, trentaquattro anni, ranger del Kenya Wildlife Service da otto. Controllo gli animali, accompagno i visitatori, controllo la recinzione e scrivo rapporti. La mattina presto è la parte migliore: il parco è tutto per me."],
["Cos’è questo parco?","Il Parco Nazionale di Nairobi: nato nel 1946, è il primo parco nazionale del Kenya. È a soli sette chilometri dal centro e copre 117 chilometri quadrati. Lo chiamano \"il parco della capitale\": non ce ne sono molti, al mondo, con la savana a pochi minuti dai grattacieli."],
["Come mai gli animali non escono in città?","Sul lato nord, est e ovest c’è una recinzione elettrica; il lato sud è aperto, così gli animali possono spostarsi verso le grandi pianure. Ogni tanto qualcuno va a esplorare, e allora arriviamo noi. Con una parola gentile, si risolve quasi tutto: poa."],
["Che animali ci sono?","Leoni, leopardi, giraffe, zebre, bufali, gnu, ippopotami, coccodrilli, iene e più di quattrocento specie di uccelli. All’alba, con la foschia, sembra un altro mondo. Il leone che dorme con i grattacieli dietro è la mia foto preferita."],
["E i rinoceronti?","Il parco ospita i rinoceronti neri, una specie in pericolo: sono grigio scuro, con due corna, e hanno la vista pessima. Li controlliamo ogni giorno, a piedi e in fuoristrada. Vederne uno, fra l’erba alta, è come incontrare un amico raro."],
["Cos’è il luogo del rogo dell’avorio?","Un’area del parco dove nel 1989 il presidente Moi bruciò dodici tonnellate di zanne, per dire al mondo che il bracconaggio doveva finire. Nel 2016 ne furono bruciate più di cento. Oggi restano le pietre annerite: ci vado a pensare quando sono triste."],
["Com’è una giornata da ranger?","Si comincia con un tè con latte e un mandazi, alle cinque e mezza. Poi giro di controllo, radio sempre accesa, attenzione ai segni sul terreno. Alle undici, un salto all’Orfanotrofio degli elefanti, vicino: i cuccioli mi fanno sempre ridere."],
["Cos’è l’orfanotrofio degli elefanti?","Un centro nato nel 1977, il David Sheldrick Wildlife Trust, per salvare gli elefantini rimasti senza mamma. Ogni giorno dalle undici a mezzogiorno si vedono i cuccioli bere il latte dai biberon e rotolarsi nel fango. Con il tempo li riportiamo nella natura."],
["Cosa si vede dall’aeroporto?","Gli aerei! Il parco confina con la zona dell’aeroporto, e gli aerei passano bassi sopra la savana, mentre le giraffe masticano senza fare una piega. Gli animali si sono abituati, noi ormai non ci facciamo più caso."],
["Come convivono gli abitanti e il parco?","Con harambee: i ranger, le scuole, le famiglie e i giovani lavorano insieme per proteggere gli animali. Molti ragazzi vengono qui a imparare e poi diventano guide. Un parco vive se la città lo ama."],
["Cosa fanno i nairobiani nel weekend?","Qualcuno viene al parco per un picnic, qualcuno va alla foresta di Karura, qualcuno si siede a mangiare nyama choma con gli amici. La domenica, molti vanno in chiesa la mattina, e poi si va tutti a pranzo. Il pomeriggio, a Nairobi, è per stare insieme."],
["Posso salutarti e proseguire la mia passeggiata?","Sawa, Pierpaolo! Fai un salto a Langata a trovare le giraffe: ti fanno il solletico con la lingua. Kwaheri, e usa la crema solare: il sole di Nairobi è più forte di quanto sembri!"]
],
nb_juma:[
["Chi sei e che fai?","Juma, ventinove anni, makanga: il conduttore del matatu. Il guidatore guida, io chiamo i passeggeri, apro e chiudo la porta, incasso i soldi e dico al guidatore quando partire. Se il matatu è una nave, io sono il capitano che grida."],
["Cos’è un matatu?","Un minibus condiviso, con una linea fissa: il numero è sul parabrezza. Ci sono tanti: a Nairobi ne girano circa venticinquemila ogni giorno! La nostra linea 46 va a Kawangware."],
["Perché si chiama \"matatu\"?","Viene dal kikuyu: la parola vuol dire \"tre\". Si dice che all’inizio la corsa costasse tre centesimi, poi trenta. Il nome è rimasto per tutti. Quando ce lo chiedono, lo ripetiamo con orgoglio."],
["Da quando esistono i matatu?","Le origini sono degli anni Sessanta, ma nel 1973 furono legalizzati e da allora sono cresciuti tantissimo. Negli anni Ottanta e Novanta nacque la moda di dipingerli e di metterci musica hip-hop. Oggi senza matatu Nairobi non sarebbe Nairobi."],
["Cos’è un \"nganya\"?","In sheng, il matatu più decorato e più figo, con graffiti, neon, schermi e casse enormi. Dentro ci sono anche otto televisori che mandano video musicali! Si sente gospel, afrobeats e gengetone, a volume altissimo. Il nome è sul vetro: Onyx, Bora Uhai... ogni matatu ha il suo."],
["Cosa gridi dalla porta?","Le destinazioni e il numero della linea: \"Kawangware, Kawangware, tuko tayari!\". Il makanga che sta in strada chiede ai colleghi \"vipi hapo town?\", cioè com’è la situazione in centro. Se non gridi, il passeggero ti passa davanti: bisogna farsi sentire."],
["Come si sale?","Si sale, ci si siede dove c’è posto, e si paga: in contanti o con M-Pesa. Il matatu parte spesso quando è pieno, non a un orario preciso. Se vuoi scendere, gridi \"stage!\" e io batto sul tetto per far fermare l’autista."],
["Che parole usate in sheng?","Msee vuol dire \"ragazzo, tipo\"; poa e fiti vogliono dire \"bene, fico\"; mtaa è il quartiere dove vivi; sasa e niaje sono modi per dire \"ciao, come va?\". Lo sheng è un mix di swahili e inglese, nato nei quartieri dell’Eastlands. Chi lo parla ti riconosce subito."],
["Cos’è il \"kanjo\"?","Gli agenti del comune che controllano le strade e le bancarelle: li chiamiamo kanjo. A volte bisogna spostare il matatu in fretta, se arrivano! È un gioco del gatto e del topo che dura da sempre. Ma si sta tutti con il sorriso."],
["Come ci si comporta in matatu?","Si saluta chi sta vicino, si cede il posto agli anziani, e quando si scende si dice \"asante\", grazie. Non si litiga: se c’è poco spazio, ci si stringe. Un matatu vive di buone maniere, anche se sembra caos."],
["Cosa si mangia per strada?","Mandazi caldi, mais arrostito, chapo, che sarebbe il chapati, e noccioline. Con un chai caldo, il mattino alle sei, è la colazione dei campioni. Con quella dentro, si resiste a ogni traffico, fiti sana!"],
["Posso salutarti e proseguire la mia passeggiata?","Sawa, msee Pierpaolo! Se ti serve la linea 46, ci vediamo qui. Intanto goditi la città: pole pole, ma non troppo, che il matatu parte! Tutaonana!"]
],
nb_akinyi:[
["Chi sei e che fai?","Mama Akinyi, cinquantadue anni, vendo frutta e verdura al City Market da venticinque. \"Akinyi\", nella lingua luo, vuol dire \"nata al mattino\": così si danno i nomi, secondo l’ora della nascita. Io sono nata all’alba e lavoro all’alba."],
["Cos’è il City Market?","Il mercato coperto del centro: fu costruito nel 1930 vicino alla ferrovia, che allora passava per Loita Street. Sotto questo grande tetto si vende di tutto: frutta, verdura, carne, pesce, fiori e artigianato. Chi non conosce il City Market non conosce Nairobi."],
["Cos’è lo \"sukuma wiki\"?","La verdura di tutti i giorni, simile al cavolo nero: \"sukuma wiki\" vuol dire \"spingi la settimana\", perché costa poco e ti fa arrivare a fine settimana. Si cuoce con cipolla e pomodoro. In ogni casa kenyana, ogni giorno, c’è sukuma wiki nel piatto."],
["E l’ugali?","La polenta di farina di mais bianca: si cuoce nell’acqua e si mescola con forza, finché è compatta. Si mangia con le mani, facendo una pallina e inzuppandola nello stufato. L’ugali è il cuore della tavola kenyana: senza ugali, non è pranzo."],
["Cosa si beve a colazione?","Il chai: tè nero cotto con latte, zucchero e spesso spezie. Con il mandazi, il dolce triangolare fritto, è una coppia perfetta. Se vieni a casa mia, ti dicono \"karibu chai\", e rifiutare è quasi un’offesa."],
["Come si contratta?","Con il sorriso! Il cliente chiede \"bei gani?\", quanto costa, io dico un prezzo, lui lo trova alto, io dico \"punguza kidogo\", ti abbasso un poco. Si ride, si discute e si arriva a metà strada. Chi non contratta, qui, non si diverte."],
["Come si paga?","Quasi tutti con M-Pesa, che esiste dal 2007: \"pesa\" vuol dire soldi, la M sta per \"mobile\". Mi mandano il pagamento sul telefono e io lo vedo subito, senza resto. Per una mama mboga come me, è stato un grande cambiamento: poa sana."],
["Cos’è \"mama mboga\"?","La donna che vende verdure, \"mboga\", nei mercati o nei chioschi di quartiere. È un mestiere antico e importante: sfamiamo mezza città. Molte di noi si uniscono in un \"chama\", un gruppo dove ognuna mette un po’ di soldi e a turno li prende una: harambee!"],
["Cos’è la moschea qui vicino?","La Moschea Jamia: costruita fra il 1925 e il 1933, con tre cupole e due minareti. Quando fu finita era l’edificio più alto di Nairobi. A Nairobi ci sono chiese, moschee e templi uno vicino all’altro, e ci si rispetta: è una bella cosa."],
["Cosa si fa la domenica?","Molti vanno in chiesa la mattina, con il vestito buono, poi si pranza in famiglia, spesso con nyama choma o con il pilau. I bambini giocano, i nonni raccontano storie. La domenica è il giorno del riposo, e della famiglia."],
["Cos’è \"harambee\"?","\"Tiriamo insieme\": il motto del Kenya. Quando una famiglia non riesce a pagare le tasse scolastiche o un funerale, la comunità fa una raccolta fondi. Ognuno dà quel che può, e nessuno viene lasciato indietro. Questa è la mia Nairobi."],
["Posso salutarti e proseguire la mia passeggiata?","Sawa, mtoto wangu! Porta con te un avocado: te lo regalo. E se passi a Uhuru Park, saluta gli alberi da parte mia. Kwaheri, e asante sana!"]
],
nb_wangari:[
["Chi sei e dove sei nata?","Wangari Muta Maathai, nata il primo aprile del 1940 a Ihithe, vicino a Nyeri, in una famiglia di contadini. Il Kenya era ancora una colonia. Molti mi chiamano \"Mama Miti\", la madre degli alberi: un nome che mi onora."],
["Come sei diventata scienziata?","Con borse di studio: andai negli Stati Uniti, al Mount St. Scholastica College, poi all’università di Pittsburgh, dove nel 1966 presi il master in biologia. Tornai a Nairobi e studiai anatomia veterinaria. Nel 1971 presi il dottorato: fui la prima donna dell’Africa orientale e centrale a farlo."],
["Cos’è il Green Belt Movement?","Il Movimento della Cintura Verde, nato nel 1977. L’idea era semplice: le donne piantano alberi, e con gli alberi ritrovano legna da ardere, acqua pulita, cibo e un piccolo guadagno. Oggi gli alberi piantati sono decine di milioni: harambee, tutti insieme!"],
["Cos’è \"harambee\"?","Una parola swahili che vuol dire \"tiriamo insieme\": è il motto del Kenya. Quando una comunità si unisce per una scuola, una strada o un funerale, si fa harambee. Con gli alberi è lo stesso: nessuno li pianta da solo."],
["Cos’è successo a Uhuru Park nel 1989?","Il governo voleva costruire qui un grattacielo di circa sessanta piani, nel parco dei cittadini. Scrissi lettere, parlai con i giornali, lo dissi a voce alta. Mi presero per pazza, ma i finanziatori si ritirarono e il progetto fu fermato. Il prato è ancora qui: guardalo!"],
["Cos’è il Freedom Corner?","Il posto dove, nel 1992, le madri dei prigionieri politici fecero uno sciopero della fame, per chiedere la liberazione dei loro figli. Io stavo con loro. Il 3 marzo la polizia sciolse la protesta con la forza e fui ferita; ma le madri non si fermarono, e un anno dopo tutti furono liberati."],
["Cos’è la foresta di Karura?","Una foresta di più di mille ettari, a nord della città. Nel 1999 si cercava di darne parti a privati. Con altre persone andammo a piantare alberi per protesta, e fummo aggrediti. Ma la campagna andò avanti, e oggi Karura è un parco per tutti i nairobiani."],
["Sei stata anche in politica?","Sì. Nel 2002 fui eletta in Parlamento per il distretto di Tetu, nella mia terra, e nel 2003 diventai viceministra dell’ambiente. Non mi piaceva la politica di partito, ma era un modo per difendere gli alberi, l’acqua e le persone."],
["Com’è stato il Nobel?","Nel 2004 ricevetti il Premio Nobel per la pace: fui la prima donna africana, e la prima ambientalista. Quella sera, a Oslo, pensai alle donne che piantavano alberi nei villaggi. Il premio era anche loro."],
["Cos’è la storia del colibrì?","Mi piace raccontarla: c’è un incendio nella foresta, e tutti gli animali scappano. Solo il colibrì va al fiume, prende una goccia con il becco e la lascia sul fuoco. \"Cosa fai?\" gli chiedono. Lui risponde: \"Faccio la mia parte\". Io volevo essere quel colibrì."],
["Cosa consigli a chi vuole cambiare le cose?","Di cominciare da una piccola cosa, e di non smettere. Ho scritto nel mio libro \"Unbowed\" che quello che la gente chiama coraggio è spesso solo perseveranza. Un albero non cresce in un giorno, ma cresce ogni giorno: pole pole."],
["Posso salutarti e proseguire la mia passeggiata?","Tutaonana, Pierpaolo: ci rivedremo. Mi dicono che nel 2011, quando morii, portarono la mia bara proprio qui, a Uhuru Park, e piantarono alberi in mia memoria. Pianta un albero, quando puoi. Safari njema!"]
],
nb_njeri:[
["Chi sei e che fai?","Njeri, ventinove anni, guida del Museo Nazionale. Spiego ai visitatori la storia dell’uomo, la natura e le culture del Kenya. Quando arrivano le scolaresche il museo si riempie di grida: è il mio momento preferito."],
["Cos’è questo museo?","Nacque nel 1910 da una società di naturalisti, che conservava i reperti a casa propria, finché non servì un posto più grande. L’edificio qui sulla Museum Hill è del 1929 e un tempo si chiamava Coryndon Memorial Museum. Oggi è il museo più importante del Kenya."],
["Chi è il Ragazzo del Turkana?","Uno scheletro quasi completo di Homo erectus, trovato nell’agosto del 1984 da Kamoya Kimeu, un cacciatore di fossili, sulle rive del lago Turkana. Aveva fra i nove e i dodici anni, ma era già alto più di un metro e sessanta. Dopo un milione e mezzo di anni, è ancora qui con noi."],
["Perché il Kenya è la \"culla dell’umanità\"?","Perché nella Rift Valley e intorno al lago Turkana si sono trovati moltissimi fossili dei nostri antenati. Il Ragazzo del Turkana è il più famoso, ma ce ne sono molti altri. Per gli scienziati è come un grande libro di famiglia."],
["Cosa c’è oltre ai fossili?","Natura, uccelli, mammiferi, storia, e le culture di tutti i gruppi etnici del Paese: sono quarantadue, ognuno con i suoi oggetti, vestiti, strumenti musicali. In Kenya si parlano molte lingue: le lingue ufficiali sono l’inglese e lo swahili, ma ognuno ha anche la sua lingua di casa."],
["Cos’è lo Snake Park?","Un recinto all’aperto vicino al museo con serpenti, tartarughe e coccodrilli. I bambini lo adorano, e alcuni gridano e poi vogliono rivederlo. Le guide spiegano quali serpenti sono pericolosi e quali no."],
["Come si saluta in Kenya?","Con una stretta di mano, lunga e calda, e con una domanda: \"Habari?\", che vuol dire \"come va?\". Si risponde \"Nzuri\", \"bene\". Agli anziani si dice \"Shikamoo\", e loro rispondono \"Marahaba\": è un segno di rispetto."],
["Che ore sono, in swahili?","L’ora swahili parte dall’alba: le sei del mattino sono \"saa kumi na mbili\", le dodici, e il giro ricomincia. Quindi \"saa moja\" è le sette, \"saa mbili\" le otto. Se non lo sai, sbagliare un appuntamento è un classico!"],
["Com’è il clima a Nairobi?","Fresco, perché siamo a circa milleottocento metri: non fa mai troppo caldo. Ci sono due stagioni delle piogge, quelle lunghe da marzo a maggio e quelle corte a ottobre-novembre. A luglio fa freddo, e i nairobiani si mettono maglioni e sciarpe, ridendo dei turisti in pantaloncini."],
["Cos’è la kanga?","Un tessuto colorato a stampa, che le donne usano come gonna, scialle o per portare i bambini. Quasi tutte hanno un proverbio scritto in swahili sul bordo: un messaggio per chi lo legge. Si regalano per compleanni, matrimoni e nascite."],
["Qual è il tuo proverbio preferito?","\"Haraka haraka haina baraka\": la fretta non porta fortuna. Lo diciamo quando qualcuno corre troppo. Un altro è \"Mwenda pole hajikwai\": chi va piano non inciampa. Nairobi è una città veloce, ma i proverbi ci ricordano di rallentare."],
["Posso salutarti e proseguire la mia passeggiata?","Sawa, Pierpaolo! Se vuoi vedere un posto dove gli alberi hanno salvato una città, vai a Karura: il sole sta calando e la luce è magica. Kwaheri, e porta con te la curiosità!"]
],
nb_kevin:[
["Chi sei e che fai?","Kevin, ventisette anni, sviluppatore di app in una startup. Passo le giornate davanti a uno schermo, quindi la sera scappo nella foresta. Qualcuno la chiama \"Silicon Savannah\": Nairobi, la capitale tecnologica dell’Africa orientale. Che titolo, eh?"],
["Cos’è Karura?","Una foresta urbana di più di mille ettari, con oltre cinquanta chilometri di sentieri per correre, camminare e andare in bici. Ci sono una cascata, un bosco di bambù, grotte e una vecchia chiesa. È una zona senza plastica: porta la tua bottiglia di metallo."],
["Come è stata salvata?","Nel 1999 si cercava di dare parti della foresta a privati. Wangari Maathai guidò la campagna per fermare la vendita, e la foresta fu salvata. Oggi è curata dagli Amici di Karura, una comunità di volontari. Ogni volta che corro qui, la ringrazio in silenzio."],
["Cosa si vede lungo il sentiero?","Fichi enormi, felci, scimmie sui rami, uccelli di mille colori e, se sei fortunato, un dik-dik, una piccola antilope timida. La cascata è alta circa venti metri; dopo la pioggia è bellissima. Le grotte, dicono, furono rifugio dei Mau Mau: si entra in silenzio."],
["Cos’è M-Pesa?","Il servizio di denaro mobile lanciato da Safaricom nel marzo del 2007. \"Pesa\" in swahili vuol dire soldi, la M sta per \"mobile\". Con M-Pesa si paga il matatu, la verdura, l’affitto, tutto con il telefono. Io non porto più il portafoglio, davvero."],
["Cos’è Ushahidi?","Un software di mappatura nato nel 2008, dopo le elezioni del 2007, per raccogliere segnalazioni dei cittadini su una mappa. \"Ushahidi\" in swahili vuol dire \"testimone\". È stata una delle idee kenyane che hanno fatto il giro del mondo, insieme a M-Pesa."],
["Cos’è la \"Silicon Savannah\"?","Il soprannome di Nairobi per la sua scena tecnologica: startup, spazi di coworking e hub come l’iHub. Molte app qui sono pensate per il telefono, perché quasi tutti hanno un cellulare. Lavoro con ragazzi che arrivano da tutto il paese: è poa sana."],
["Parli sheng?","Sheng, sì! È un mix di swahili e inglese, nato fra i giovani dei quartieri dell’Eastlands. Msee vuol dire \"tipo\", poa e fiti \"bene\", mtaa \"quartiere\", niaje e sasa \"come va\". Lo parlano quasi tutti i giovani di Nairobi, e a volte i genitori fanno finta di non capire."],
["Come si lavora a Nairobi?","In un caffè con il wifi, con una tazza di chai o di caffè kenyano, o in un hub con altri sviluppatori. Per gli spostamenti, matatu, taxi con app e i moto-taxi, i boda boda, quando c’è traffico. Il traffico qui è un pezzo del programma, impari a pianificare!"],
["Cosa si mangia dopo la corsa?","Mais arrostito sulla brace, mahindi choma, con un po’ di limone e peperoncino. O la mutura, una salsiccia di carne e frattaglie, venduta per strada. Oppure chapo e fagioli, i ndengu. Dopo una corsa a Karura, tutto è buonissimo."],
["Cos’è il \"Kenyan time\"?","Una battuta: l’orario è indicativo, e \"alle otto\" può voler dire \"alle nove\". Io cerco di essere puntuale, ma il traffico non rispetta i miei piani. Ci ricordiamo del proverbio: \"Haraka haraka haina baraka\", la fretta non porta fortuna."],
["Posso salutarti e proseguire la mia passeggiata?","Sawa, Pierpaolo! Il sole sta calando: stasera vai a mangiare nyama choma, nel mtaa, vicino a dove abito. Kwaheri, e ricordati il proverbio: \"mwenda pole hajikwai\", chi va piano non inciampa. Pole pole!"]
],
nb_kariuki:[
["Chi sei e che fai?","Mzee Kariuki, sessantotto anni, macellaio e maestro di nyama choma da quarant’anni. Mia moglie dice che passo più tempo con la brace che con lei. Ma lei adora la carne, quindi mi perdona."],
["Cos’è la nyama choma?","\"Carne arrostita\": di solito capra o manzo, cotta lentamente sulla brace. Si sceglie il pezzo al bancone, si pesa e si taglia. Nairobi è considerata la capitale della nyama choma: ogni quartiere ha la sua macelleria-griglia."],
["Con cosa si mangia?","Con l’ugali, la polenta di mais bianco, e il kachumbari, un’insalata di pomodoro e cipolla con un po’ di peperoncino e limone. A volte con il sukuma wiki. Il sale e il peperoncino sono i condimenti: la carne è la regina e non ha bisogno d’altro."],
["Come si mangia?","Con le mani! Si fa una pallina di ugali, la si schiaccia con il pollice e si prende un pezzo di carne con il kachumbari. A fine pasto, c’è sempre un buon stuzzicadenti: la nyama choma ha una bella masticazione, come si dice."],
["Cos’è la Tusker?","La nostra birra: una lager chiara, popolarissima in tutto il Kenya, da più di cent’anni. Sul marchio c’è un elefante, e lo slogan, tradotto, dice \"la mia birra, il mio paese\". Con la nyama choma è un matrimonio perfetto. Chi non beve, ha il chai."],
["Quando si mangia nyama choma?","A compleanni, lauree, addii al celibato, partite importanti e ogni volta che si vuole far festa. A Nairobi la si mangia anche senza motivo! Gli amici ordinano un chilo di carne e restano a parlare per ore."],
["Cos’è la mutura?","Una salsiccia di carne, frattaglie e spezie, cotta sulla brace e venduta per strada. È una specialità popolare, specialmente la sera. Se vuoi provare la vera cucina di quartiere, la mutura è un buon inizio."],
["Ti ricordi l’indipendenza?","Ero un bambino, ma lo ricordo: il 12 dicembre 1963 il Kenya divenne indipendente, e si fece festa in tutto il Paese. Mio padre, che aveva un piccolo negozio, mi portò in piazza con una bandierina in mano. Quel giorno si festeggia ancora oggi, con il nome di Jamhuri Day."],
["Cos’è il Madaraka Day?","Il primo giugno: ricorda il giorno del 1963 in cui il Kenya ottenne l’autogoverno, prima dell’indipendenza piena. \"Madaraka\" vuol dire \"potere\", \"autogoverno\". È una festa nazionale, con discorsi e parate. Da noi, naturalmente, si fa anche una nyama choma."],
["Cos’è \"harambee\"?","\"Tiriamo insieme\": il motto del Kenya. Quando un vicino ha bisogno di pagare le tasse scolastiche di un figlio, o un funerale, ci si riunisce e ognuno dà quel che può. A volte ci si ritrova davanti a una griglia, con la carne offerta da tutti."],
["Per chi tifate?","Per i club inglesi, soprattutto: ogni locale ha un televisore e il sabato è una battaglia di sciarpe. Poi c’è il derby di casa, quello fra Gor Mahia e AFC Leopards, un duello amatissimo. Alla fine, tutti a mangiare e a bere insieme."],
["Posso salutarti e proseguire la mia passeggiata?","Sawa, Pierpaolo! Prima di andare, prenditi un pezzetto di carne: il mio regalo. Vai alla stazione, adesso: la notte è lunga, e il treno non aspetta. Kwaheri, e asante per aver mangiato con me!"]
],
nb_ochieng:[
["Chi sei e che fai?","Mzee Ochieng, settant’anni, per trentacinque anni ferroviere della Kenya Railways. Controllavo i segnali, le carrozze e gli orari. Ora vengo qui ogni sera a guardare i treni: la vecchia abitudine non muore."],
["Com’è nata Nairobi?","Dalla ferrovia. Nel 1899 il binario arrivò in questa zona, che era una palude stagionale, e i britannici ci costruirono un deposito. Dalle prime baracche degli operai è nata la città. Il nome viene dai Maasai: \"enkare nyrobi\", il posto delle acque fresche."],
["Com’era la ferrovia dell’Uganda?","Una ferrovia lunga più di novecento chilometri, costruita dal 1896 al 1901 da Mombasa fino a Kisumu, sul lago Vittoria, allora chiamata Port Florence. Ci lavorarono migliaia di operai arrivati dall’India, in condizioni durissime. Fu una grande impresa e anche una grande fatica."],
["Perché la chiamano \"Lunatic Express\"?","Fu un soprannome dato dalla stampa britannica dell’epoca: pensava che la ferrovia fosse una follia, per i costi enormi e le vite perse. Si chiamava anche \"Iron Snake\", il serpente di ferro. Oggi il nome fa sorridere, ma ricorda un sacrificio vero."],
["Cos’è il museo ferroviario?","Un piccolo museo accanto alla stazione, con vecchie locomotive a vapore, vagoni d’epoca e fotografie. Ci vado spesso a salutare una locomotiva, come si saluta un vecchio collega. Chi ama i treni resta sempre un ragazzino."],
["Cos’è il Madaraka Express?","Il treno moderno che dal 31 maggio 2017 collega Nairobi e Mombasa, in circa cinque ore. Parte dalla stazione di Syokimau, vicino all’aeroporto. Una volta il viaggio durava una notte intera con il vecchio treno: oggi si parte e si arriva in giornata."],
["Come si lavora in ferrovia?","Con tanta attenzione: bandierine, segnali luminosi, orari. Il treno deve partire all’ora, ma anche arrivare in sicurezza. Un buon ferroviere conosce ogni rumore dei binari: il treno parla, basta saperlo ascoltare."],
["Cosa c’è di bello nella stazione, di notte?","Le luci gialle, il vapore del chai, il rumore dei carrelli, i viaggiatori che aspettano con borse e cuscini. E laggiù, il KICC illuminato sul cielo scuro. Di notte la città è più lenta, e la stazione è il suo cuore."],
["Cosa si dice prima di un viaggio?","\"Safari njema\", buon viaggio. E si saluta con calore chi parte: si fa una piccola festa alla stazione, con parenti e amici. In Kenya i viaggi si fanno insieme, anche se si parte da soli."],
["Cosa porta la gente in treno?","Borse di tela a righe, cuscini, un cestino di cibo, chai in un thermos. Si mangia il chapati, le uova sode, i mandazi. Un treno kenyano è sempre una piccola tavola in movimento: ci si offre il cibo a vicenda."],
["Cosa insegna la ferrovia?","La pazienza e la fiducia. Un binario va avanti dritto, anche in salita; si va piano ma si arriva. Un proverbio dice \"mwenda pole hajikwai\": chi va piano non inciampa. L’ho imparato guardando i treni."],
["Posso salutarti e proseguire la mia passeggiata?","Kwaheri, Pierpaolo, mtoto wangu. In fondo al binario c’è una luce: seguila e non voltarti. Safari njema!"]
]
};
Object.assign(TOPX,TOPX_NB);
})();
