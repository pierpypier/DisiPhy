/* ---------- SANTORINI · Da Kamari al tramonto di Oia (Kamari, Pyrgos, le vigne, Akrotiri, Fira e il Porto Vecchio, il vulcano, Imerovigli e Skaros, Oia e Ammoudi) ---------- */
/* Un'intera giornata da sinistra a destra: alba sulla spiaggia nera di Kamari, mattina a Pyrgos, tarda mattina fra le vigne a cesto, mezzogiorno ad Akrotiri,
   primo pomeriggio a Fira e sulla scalinata del Porto Vecchio, pomeriggio sul vulcano e alle sorgenti calde, tardo pomeriggio a Imerovigli,
   tramonto e notte a Oia e nel porticciolo di Ammoudi. In fondo alla scala che scende al mare c'è il varco.
   Testi, tappe e dialoghi vengono da santorini.txt (definitivi, usati senza riscriverli). Gli oggetti stanno in elementi.js (nomi che iniziano per "sn").
   Il tono per i temi delicati (terremoto del 1956, crollo del tetto di Akrotiri nel 2005, muli della Skala) è sempre sobrio e rispettoso. */
(function(){
const GT=372,W1=21000;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln,gatto}=PR._rm;
const {pers,gente,pino,cipr}=PR._md;
const {nf,cub,chiesa,mulino,grotta,secco,kou,bou,vaso,tamer,rovina,seduto}=PR._sn;
const {LG,LG2,BL,BI,ST}=PR._sn.pal;
const md=(i,n)=>((i%n)+n)%n;
const Z=[0,2500,5000,7500,10000,12700,15500,18300,W1+400];   /* inizio di ognuna delle 8 zone */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
const kf=(T,xs,n)=>{let i=0;while(i<T.length-2&&xs>T[i+1][0])i++;const a=T[i],b=T[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return a[1].map((c,k)=>mixs(c,b[1][k],u))};
let TT=0,AVC=0;
/* ---- cielo: alba rosa e lilla, mattina limpida, mezzogiorno bianco, pomeriggio dorato, tramonto rosa-arancio-viola, notte blu ---- */
const SKY=[[0,['#8a8ac0','#f4b0c0','#ffd8c0']],[1300,['#4a9cf0','#b4d8f4','#f6eedc']],[2500,['#2a84ec','#74b8f4','#d8ecf8']],[7500,['#1a70dc','#62aef0','#d6ecf8']],[10000,['#3a8ae8','#a8d0f4','#f4f6f4']],[12700,['#4a92e6','#b8d8f4','#fbf6e6']],[15500,['#3a86dc','#98c4ee','#f6ecd0']],[16800,['#4a7cc8','#e8c098','#ffd49a']],[18300,['#5a6cc0','#f0a070','#ffb878']],[19000,['#5a4a98','#e8605a','#ff9a58']],[19600,['#3a2c78','#b84a78','#f08a68']],[20200,['#1a2260','#4a3a88','#a85a88']],[20800,['#0a1040','#14206a','#2a3a7a']],[99999,['#0a1040','#14206a','#2a3a7a']]];
const SEA=[[0,['#7a7ab0','#e8a8b8']],[1300,['#3a88c8','#6cc4dc']],[10000,['#1f78c0','#58c8e0']],[15500,['#2a78b8','#68b8d0']],[16800,['#3a74b0','#d8b090']],[18300,['#5a6aa8','#e8a078']],[19000,['#6a4a88','#f09060']],[19600,['#3a2a68','#a8587a']],[20400,['#101a50','#2a3a78']],[99999,['#0c1448','#1c2a68']]];
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,8*s);el(g,c,x-18*s,y+2*s,22*s,6*s);el(g,c,x+20*s,y+2*s,24*s,6*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Santorini, dall’alba al tramonto. Parti dalla spiaggia nera di Kamari, quando il mare è ancora piatto e la roccia di Mesa Vouno si accende per prima; poi il villaggio alto di Pyrgos, con il suo castello veneziano, e le vigne intrecciate a cesto che il vento non riesce a spezzare. A mezzogiorno Akrotiri, la città dell’età del Bronzo rimasta sotto la cenere per quasi quattro mila anni; nel primo pomeriggio la scalinata e la funivia di Fira, poi il vulcano nel mezzo della baia, con il suo odore di zolfo e l’acqua tiepida che macchia di ruggine. Al tardo pomeriggio la roccia di Skaros e le chiesette con la cupola blu; al tramonto Oia, le case dei capitani, il castello in rovina e il porticciolo di Ammoudi con il pesce alla brace. Il tempo qui si piega: gli abitanti di ogni epoca ti vengono incontro, e l’isola è quella di oggi.";
const LKTXT=[
"Kamari ha una lunga spiaggia di sabbia e ciottoli neri: roccia lavica frantumata dal mare, perché Santorini è un vulcano. All’alba è fresca, ma verso le due del pomeriggio i ciottoli scottano i piedi.",
"Lungo il mare ci sono bar e taverne con i tavolini all’aperto. Qui il caffè più bevuto è freddo, il frappé o il freddo espresso: caffè sbattuto con ghiaccio, con una schiuma alta due dita.",
"Sulla spiaggia riposano le barche dei pescatori, tirate a riva. Al mattino presto si sentono le voci di chi sistema le reti e i motori che si accendono.",
"Dietro il paese sale a picco la roccia di Mesa Vouno: in cima, a oltre 360 metri, sorgeva la città antica di Thera, fondata nel IX secolo a.C. da coloni dorici guidati, secondo la tradizione, da Theras. Uno dei suoi due porti era qui, dove oggi c’è Kamari.",
"Pyrgos, uno dei villaggi più alti dell’isola, sta a gradoni sul colle ai piedi del monte Profitis Ilias, e per secoli è stato il capoluogo dell’isola. Le stradine si arrampicano a chiocciola fra case bianche, e da su si vede quasi tutta Santorini.",
"In cima a Pyrgos si trovano le rovine del kasteli, il castello veneziano: uno dei cinque castelli dell’isola, costruiti come rifugio dai pirati, con le case addossate a formare le mura attorno a una torre e a una chiesa.",
"Il Venerdì Santo, a Pyrgos, il villaggio si riempie di lanterne di latta accese sui muri e intorno al castello, mentre passa la processione dell’Epitaffio, la bara simbolica di Cristo. Vengono da tutta l’isola.",
"Sopra Pyrgos, a 567 metri, c’è il monastero del profeta Elia, il punto più alto dell’isola: è del Settecento e ha un piccolo museo di oggetti sacri. Da lassù si vede tutta Santorini circondata dal mare.",
"Le vigne di Santorini non crescono in filari ma a cesto, la kouloura: il tralcio viene intrecciato a forma di corona, appoggiata alla terra, e i grappoli crescono dentro, riparati dal vento e dal sole. Da lontano sembrano un campo di nidi.",
"Il suolo è cenere e pomice, sabbioso e quasi senza argilla: la fillossera, il parassita che distrusse le vigne d’Europa nell’Ottocento, qui non è sopravvissuta, e molte viti sono su radice propria, antiche. Piove poco, e le piante bevono anche la nebbia di mare.",
"Le cantine sono spesso mezze scavate nel terreno, per tenere fresco il vino. Qui si fa soprattutto assyrtiko, un’uva bianca dell’isola dal sapore secco e salino.",
"Il vinsanto è il vino dolce dell’isola: si ottiene da uva lasciata appassire al sole su stuoie, poi lasciata invecchiare per anni in botti di rovere. Ha colore ambrato e sentori di albicocca secca e di fico.",
"Akrotiri era una città dell’età del Bronzo, rimasta sotto uno spesso strato di cenere e pomice dopo la grande eruzione: per questo molte case sono conservate per più di un piano. Il suo nome antico non lo conosciamo.",
"Una piazzetta a forma di triangolo si apre davanti alla Casa Ovest, un edificio a più piani decorato con un grande fregio dipinto. Da qui partono le strade della città.",
"Il primo edificio che emerse fu il magazzino delle giare: enormi vasi di terracotta per olio, grano e vino, allineati in file. Accanto, un telaio: lì si tesseva.",
"Le pareti delle case erano dipinte: rondini e gigli, scimmie blu che si arrampicano sulle rocce, un pescatore con il suo carico di pesci, una flotta di navi con una città sullo sfondo. Quasi tutti gli originali sono oggi nei musei, ad Atene e a Fira.",
"Dal Porto Vecchio a Fira sale una scalinata a serpentina di 588 gradini larghi e bassi, circa 220 metri più in alto. A piedi si fa in un’ora, un’ora e mezza; un tempo era l’unica via per arrivare dal mare.",
"La funivia, la teleferiko, è del 1979: la donò un armatore, Evangelos Nomikos, tramite la fondazione di famiglia. In tre minuti sale i 220 metri fra il porto e Fira.",
"A Fira ci sono due chiese principali vicine fra loro, una ortodossa e una cattolica: la presenza cattolica viene dai Veneziani, che arrivarono sull’isola nel Duecento. Ortodossi e cattolici hanno convissuto qui per secoli.",
"Nel Museo della Preistoria di Thera, a Fira, sono conservati vasi, oggetti e alcuni affreschi trovati ad Akrotiri. È un luogo fresco e silenzioso, perfetto per un pomeriggio caldo.",
"Le barche partono dal Porto Vecchio di Fira e in una ventina di minuti arrivano a Nea Kameni, \"la nuova bruciata\": un’isola di lava nera nel mezzo della grande baia.",
"Nea Kameni è la più giovane: si formò fra il 1707 e il 1711, con esplosioni e colate di lava. Un sentiero di lava nera sale ai crateri: dalle fessure esce vapore caldo, c’è odore di zolfo e in certi punti la roccia scotta. L’ultima eruzione è stata nel 1950.",
"Poi la barca si ferma nella baia di Agios Nikolaos, a Palea Kameni: l’acqua è tiepida, sui 30-35 gradi, e color giallo-arancio per il ferro e lo zolfo. Si getta l’ancora al largo e si nuota per una trentina di metri.",
"La baia è la caldera, un buco enorme, di circa 12 chilometri per 7, con pareti alte 300 metri, nato dalla grande eruzione minoica di circa 3.600 anni fa. Dal mare la parete è un libro aperto: strati rossi, neri, grigi e bianchi, e in cima le case.",
"Imerovigli sta nel punto più alto del bordo della caldera, a circa 300 metri: il nome richiama una torre di guardia, e la chiamano \"il balcone dell’Egeo\". Da qui passa il sentiero di una decina di chilometri che unisce Fira a Oia.",
"La roccia di Skaros sporge nel vuoto: una volta ospitava un castello veneziano del Duecento, che fu il centro dell’isola. I terremoti lo fecero crollare e la gente si spostò altrove. Oggi ci si arriva con un sentiero a gradini che parte dalla chiesetta di Agios Georgios.",
"Le chiesette ortodosse sono imbiancate a calce, con la cupola dipinta di blu: la più fotografata è quella dell’Anastasi, la Resurrezione, in paese. Sulla roccia di Skaros c’è la cappella di Panagia Theoskepasti, \"la Madonna protetta da Dio\".",
"Molte case di qui sono scavate nella roccia tenera di cenere e pomice, sul fianco della caldera: hanno la volta a botte e muri spessi, e restano fresche d’estate e tiepide d’inverno. Una volta ci abitavano marinai e contadini.",
"Le rovine del castello di Agios Nikolaos stanno nel punto più alto del paese: di quel castello veneziano resta poco, ma da lassù si vede il tramonto più famoso dell’isola, e quando il sole tocca il mare qualcuno applaude.",
"In una delle case dei capitani, grandi edifici a due piani dell’Ottocento, c’è oggi il Museo della Marina, con modelli di navi e figure di prua. Raccontano un tempo in cui Oia era un paese di armatori e marinai.",
"Dal castello si vedono il mulino a vento restaurato e le cupole blu, come quelle di Agios Nikolaos e di Panagia Platsani. San Nicola è il protettore dei marinai.",
"Sotto il paese, ai piedi di una lunga scala di circa trecento gradini, c’è Ammoudi, il porticciolo di Oia: un molo, qualche barca e tre taverne di pesce una accanto all’altra, con i tavoli quasi nell’acqua.",
"In fondo alla scala c’è il mare: quando l’ultima luce lascia l’acqua, la strada non finisce, si trasforma."
];
const NAME={
sn_katerina:"Katerina, la taverniera di Kamari",
sn_sofia:"Kyria Sofia, la nonna di Pyrgos",
sn_thanasis:"Thanasis, il vignaiolo",
sn_marinatos:"Spyridon Marinatos, l’archeologo",
sn_nikos:"Nikos, il mulattiere della Skala",
sn_antonis:"Antonis, il capitano del vulcano",
sn_eleni:"Eleni, l’albergatrice di Imerovigli",
sn_stavros:"Stavros, il pescatore di Ammoudi"
};
const GREET={
sn_katerina:"Kalimera, Pierpaolo! Siediti, siediti, che il sole non è ancora uscito e il caffè è già pronto. Sono Katerina, e a quest’ora la spiaggia è tutta mia: dopo le dieci diventa di tutti, ela!",
sn_sofia:"Kalimera, paidi mou! Vieni, vieni qui all’ombra, che sei tutto rosso. Io sono Kyria Sofia, ma tutti mi chiamano yiayia, e tu non fare il timido: hai mangiato? Non hai mangiato. Siediti.",
sn_thanasis:"Yia sou, Pierpaolo! Attento dove metti i piedi: sono tutte viti, e ognuna ha più anni di te. Io sono Thanasis, e il vino non lo faccio io: lo accompagno, come un nipote difficile.",
sn_marinatos:"Kalos irthes, Pierpaolo! Piano, piano sulle passerelle: sotto i tuoi piedi c’è una città di tremila e seicento anni fa. Sono Spyridon Marinatos, e ci ho messo quasi trent’anni a convincere il mondo che l’avrei trovata... e l’ho trovata in poche ore.",
sn_nikos:"Yia sou, Pierpaolo. Piano sui gradini: sono tanti, e non sono tutti uguali. Io sono Nikos: la Skala la faccio da quarant’anni, e ti dico subito che non è un posto per correre.",
sn_antonis:"Kalispera, Pierpaolo! Salta su, e tieniti forte: il mare oggi è buono, ma il vulcano è sempre un po’ brontolone. Io sono Antonis, e questo è il mio caicco: ha più anni di me, ma meno acciacchi.",
sn_eleni:"Kalispera, Pierpaolo! Vieni, vieni sulla terrazza: è l’ora in cui il muro bianco prende fuoco. Sono Eleni, e questa camera era la cantina di mio nonno: a lui sembrerebbe strana, con la vista.",
sn_stavros:"Opa, Pierpaolo! Scendi piano, che i gradini sono tanti e il mare non scappa. Sono Stavros, e questi polpi appesi ad asciugare sono i miei gioielli: guardali ma non toccarli, ela!"
};
/* ---- facciate di strada, zona per zona ---- */
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3);
 if(st==1){/* Kamari: case basse bianche con persiane blu, taverne con terrazza di legno e graticcio, qualche tamerice, chiesetta */
  if(r>.78){tamer(g,x+w*.5,gt,1.3,TT);return}
  const kd=md(i,3);
  if(kd==0){cub(g,x+10,gt,w-50,76+hr(i)*30,k,i,{bou:'#d0307a'});return}
  if(kd==1){cub(g,x+20,gt,w-70,62,k,i,{door:0});rect(g,LG,x-6,gt-6,w+10,6);for(let q=0;q<5;q++)rect(g,LG2,x-2+q*(w-6)/4,gt-62,4,56);rect(g,'#c8a860',x-10,gt-70,w+16,8);for(let q=0;q<17;q++)rect(g,hr(q)>.5?'#a8884a':'#dcc078',x-8+q*(w+12)/17,gt-72,3,6);rect(g,BL,x+20,gt-60,w-70,6);return}
  chiesa(g,x+w*.5,gt,.85,k,i);return}
 if(st==2){/* Pyrgos: case-torre bianche, vicoli ad arco, campanili, scale esterne, gerani */
  if(r>.9){chiesa(g,x+w*.5,gt,.9,k,i,{camp:1});return}
  cub(g,x+4,gt,w-30,h+10,k,i,{bou:r>.55?'#d0307a':null,step:md(i,3)==0,fl:md(i,4)==1,door:r<.2?0:undefined});
  if(md(i,4)==2){cub(g,x+w-64,gt-h-4,50,40,k,i+5,{door:0})}
  if(md(i,5)==3)ar(g,'#2a2420',x+w-26,gt,24,44);return}
 if(st==3){/* le vigne: viti a cesto e muretti a secco, cantine con l'ingresso ad arco, case sparse */
  for(let q=0;q<3;q++)kou(g,x+26+q*54,gt-22,1.15,TT);
  secco(g,x-4,gt,w+4,22+hr(i)*8,'#8a7e6c');
  if(md(i,4)==1){cub(g,x+30,gt,86,60,k,i,{door:0});ar(g,'#2a2018',x+58,gt,30,40);ar(g,ST,x+54,gt,38,44);ar(g,'#2a2018',x+58,gt,30,40);bou(g,x+112,gt-56,.8,'#d0307a')}return}
 if(st==4){/* Akrotiri: case di pietra e fango alte anche tre piani, travi, finestre vuote */
  rovina(g,x+4,gt,w-26,95+hr(i*5)*60,i,k);if(md(i,3)==1)rect(g,'#5a3a22',x+w-40,gt-130,4,130);return}
 if(st==5){/* Fira: case bianche a gradoni sul bordo del precipizio, terrazze, campanili */
  if(r>.92){chiesa(g,x+w*.5,gt,.95,k,i,{camp:1});return}
  cub(g,x+2,gt,w-34,h-30,k,i,{bou:r>.5?'#d0307a':null,fl:md(i,2)==0,step:md(i,3)==0});
  if(md(i,3)==1)cub(g,x+34,gt-h+30,w-100,46,k,i+3,{door:0});if(md(i,4)==2)rect(g,'#e8e0c8',x+8,gt-h+16,w-50,3);return}
 if(st==7){/* Imerovigli: case-grotta con la volta, terrazze bianche, cupole blu, bouganville */
  if(r>.9){chiesa(g,x+w*.5,gt,1,k,i);return}
  if(md(i,3)==0){grotta(g,x+6,gt,w-50,105+hr(i)*30,k,i,{bou:'#d0307a'});return}
  cub(g,x+4,gt,w-36,h-10,k,i,{bou:r>.5?'#e8503a':null,fl:md(i,2)==1,step:md(i,4)==1});if(md(i,4)==2)cub(g,x+30,gt-h+10,w-96,40,k,i+3,{door:0});return}
 /* 8 · Oia: le case dei capitani color pastello, case-grotta, cupole blu, il mulino */
 if(r>.9){mulino(g,x+w*.5,gt,1.2,TT,k);return}
 if(r>.78){chiesa(g,x+w*.5,gt,1.1,k,i,{camp:1});return}
 const C=['#e8b8a8','#ecd49a','#a8c4dc','#f6f2e6'][md(i,4)];
 if(md(i,3)==0){grotta(g,x+6,gt,w-50,110+hr(i)*30,k,i,{bou:'#d0307a'});return}
 cub(g,x+4,gt,w-40,150+hr(i)*30,k,i,{wall:C,bou:r>.55?'#d0307a':null,sh:undefined});rect(g,'#f0eadc',x+2,gt-78,w-36,4);for(let q=0;q<Math.floor((w-40)/44);q++)ln(g,'#2c2e34',1.4,[x+12+q*44,gt-64,x+36+q*44,gt-64])}
/* ---- livello 0: cielo, sole, luna, stelle, poche nuvole, velo dell'alba e del tramonto ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;AVC=cam;const xs=cam+240,p=kf(SKY,xs,3),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-19300)/1600,0,1);if(nt>0)for(let i=0;i<60;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.85*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/19200,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*255;
 if(xs<19700){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,260);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.85)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.38)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(250-low*110)+','+Math.round(220-low*150)+')',sx,sy,16)}
 const mu=cl((xs-19700)/1900,0,1);if(mu>0){const mx=120+mu*260,my=300-mu*200;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<2500?'rgba(252,206,214,.7)':xs<16500?'rgba(255,255,255,.75)':xs<19800?'rgba(255,170,140,.65)':'rgba(140,120,190,.35)';
 each(o-((t*4)%420)*.02,420,1,(x,i,r)=>{if(r>.35)return;nube(g,x+r*100,40+r*60,.7+r*.6,cc)});
 const fo=cl(1-xs/2300,0,1)*.3;if(fo>.01){g.fillStyle='rgba(252,170,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-15600)/900,0,1)*cl((18400-xs)/900,0,1)*.16;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-18400)/700,0,1)*cl((20000-xs)/900,0,1)*.26;if(wg>.01){g.fillStyle='rgba(255,110,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}
const mkdim=xs=>{const night=nf(xs+60),dawn=cl(1-xs/2300,0,1),gold=cl((xs-15600)/900,0,1)*cl((18400-xs)/900,0,1),ss=cl((xs-18400)/700,0,1)*cl((20000-xs)/900,0,1);
 return c=>{let r=mixs(c,'#262a5e',night*.7);if(dawn>.02)r=mixs(r,'#f0a8b8',dawn*.35);if(gold>.02)r=mixs(r,'#ffc880',gold*.22);if(ss>.02)r=mixs(r,'#ff9060',ss*.28);return r}};
/* parete della caldera a strati rossi, neri, grigi e bianchi, con la striscia di case in cima */
const STR=['#c8c2b0','#8c3b2a','#2c2a2e','#a8a49a','#b4583c','#3a3438','#e8e2d0'];
function caldWall(g,sx0,half,hz,hh,dim,seed,night,t,opt){opt=opt||{};g.save();g.beginPath();g.moveTo(sx0-half,hz+8);const top=[];for(let q=0;q<=half*2/16;q++){const yy=hz-hh+(hr(q*3+seed)-.5)*8-Math.sin(q/(half/8)*3.14)*(opt.bump||0);top.push([sx0-half+q*16,yy]);g.lineTo(sx0-half+q*16,yy)}g.lineTo(sx0+half,hz+8);g.closePath();g.clip();
 for(let q=0;q<7;q++)rect(g,dim(STR[(q+seed)%7]),sx0-half,hz-hh-6+q*(hh+10)/6,half*2,(hh+10)/6+1);for(let q=0;q<half/6;q++)rect(g,'rgba(0,0,0,.12)',sx0-half+q*12+hr(q+seed)*6,hz-hh,2,hh+8);rect(g,'rgba(255,255,255,.1)',sx0-half,hz-hh,half*2,5);g.restore();
 if(opt.town!==0)for(let q=0;q<top.length-1;q++){const p=top[q],bh=4+hr(q*7+seed)*7;rect(g,dim('#f6f2e8'),p[0],p[1]-bh,13,bh+1);if(hr(q*5+seed)>.82)dot(g,dim('#2b63b0'),p[0]+6,p[1]-bh-1,3);if(night>.3&&hr(q*9+seed)>.4)rect(g,'rgba(255,214,130,.9)',p[0]+3,p[1]-bh+2,2,2)}}
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=322,night=nf(xs+60),dim=mkdim(xs);
 const fx=wc=>240+(wc-cam)*.05,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const se=kf(SEA,xs,2),sg=g.createLinearGradient(0,hz,0,GT+4);sg.addColorStop(0,se[0]);sg.addColorStop(1,se[1]);g.fillStyle=sg;g.fillRect(0,hz,480,GT+4-hz);rect(g,'rgba(255,255,255,.2)',0,hz-1,480,4);
 const u=cl(xs/19200,0,1),sx=40+u*400;if(xs<19700){for(let q=0;q<14;q++){const w=6+q*5+Math.sin(t*2+q)*3;rect(g,'rgba(255,225,160,'+(.5-q*.025)+')',sx-w/2+Math.sin(t*1.5+q*2)*3,hz+3+q*3.6,w,1.5)}}
 const mu=cl((xs-19700)/1900,0,1);if(mu>0){const mx=120+mu*260;for(let q=0;q<10;q++){const w=5+q*3;rect(g,'rgba(240,240,200,'+(.35-q*.03)+')',mx-w/2+Math.sin(t*1.5+q)*2,hz+3+q*4.6,w,1.4)}}
 for(let q=0;q<26;q++){const wx=((q*83+o*1.0)%560)-40;rect(g,'rgba(255,255,255,'+(.1+.1*Math.sin(t*1.2+q))+')',wx,hz+6+hr(q)*42,8+hr(q+1)*14,1.3)}
 /* Mesa Vouno: la grande roccia chiara sopra Kamari, con la strada a tornanti e le rovine in cima (zone 1-2) */
 const mv=env(1700,4300);if(mv>.02){g.globalAlpha=mv;const s0=fx(1700);const P=[[-290,30],[-240,-10],[-190,-50],[-130,-92],[-70,-124],[-10,-150],[40,-158],[86,-146],[112,-110],[118,-40],[130,30]];g.fillStyle=dim('#b4a494');g.beginPath();P.forEach((p,i)=>i?g.lineTo(s0+p[0],hz+p[1]):g.moveTo(s0+p[0],hz+p[1]));g.closePath();g.fill();
  poly(g,dim('#dcc8b6'),[[s0-190,hz-50],[s0-130,hz-92],[s0-70,hz-124],[s0-10,hz-150],[s0-24,hz-100],[s0-100,hz-60]]);poly(g,dim('#8a7a6e'),[[s0+40,hz-158],[s0+86,hz-146],[s0+112,hz-110],[s0+118,hz-40],[s0+130,hz+30],[s0+56,hz+30]]);
  for(let q=0;q<7;q++)rect(g,dim('#efe6d6'),s0-34+q*9,hz-160-(q%2)*2,5,4);ln(g,dim('#f2ead8'),1.2,[s0-150,hz+4,s0-110,hz-14,s0-150,hz-26,s0-90,hz-44,s0-130,hz-58,s0-60,hz-80,s0-90,hz-98,s0-30,hz-120]);g.globalAlpha=1}
 /* Profitis Ilias con il monastero e l'antenna (zone 2-3) */
 const pi=env(4200,4600);if(pi>.02){g.globalAlpha=pi;const s0=fx(4200);el(g,dim('#9c9c8c'),s0,hz+30,210,118);el(g,dim('#b0b09c'),s0-40,hz+22,120,88);el(g,dim('#8a8a7c'),s0+80,hz+30,110,90);rect(g,dim('#f6f2e8'),s0-12,hz-92,24,12);poly(g,dim('#2b63b0'),[[s0-4,hz-92],[s0,hz-100],[s0+4,hz-92]]);ln(g,dim('#6a727c'),1.4,[s0+30,hz-80,s0+30,hz-124]);dot(g,night>.3?'#ff5a4a':dim('#8a929c'),s0+30,hz-125,1.8);g.globalAlpha=1}
 /* colline di vigne a cesto con qualche casa bianca (zona 3) */
 const vg=env(6300,4400);if(vg>.02){g.globalAlpha=vg;const s0=fx(6300);[[-150,70,36,'#a8b48a'],[-30,100,44,'#96a87a'],[110,90,40,'#bcb890'],[220,70,30,'#a0ae82']].forEach((p,i)=>{el(g,dim(p[3]),s0+p[0],hz+30,p[1]*1.5,p[2]*1.6);for(let q=0;q<10;q++)dot(g,dim('#6a7e52'),s0+p[0]+(hr(q+i*9)-.5)*p[1]*2,hz+30-hr(q*3+i)*p[2]*1.2,1.6)});rect(g,dim('#f6f2e8'),s0-90,hz-16,8,6);rect(g,dim('#f6f2e8'),s0+60,hz-24,10,7);g.globalAlpha=1}
 /* il promontorio spoglio di Akrotiri sul mare, con il faro e il grande tetto degli scavi (zona 4) */
 const ak=env(9000,4200);if(ak>.02){g.globalAlpha=ak;const s0=fx(9000);g.fillStyle=dim('#c8a078');g.beginPath();[[-300,30],[-250,-26],[-170,-34],[-100,-30],[-40,-22],[20,-16],[80,-8],[130,4],[170,30]].forEach((p,i)=>i?g.lineTo(s0+p[0],hz+p[1]):g.moveTo(s0+p[0],hz+p[1]));g.closePath();g.fill();poly(g,dim('#a8553a'),[[s0+80,hz-8],[s0+130,hz+4],[s0+170,hz+30],[s0+100,hz+30]]);rect(g,dim('#d8dcdf'),s0-150,hz-42,46,6);rect(g,dim('#f6f2e8'),s0+150,hz-6,5,12);rect(g,dim('#d8c090'),s0-60,hz-30,60,8);g.globalAlpha=1}
 /* la caldera: parete a strati, isole di lava, Aspronisi, Thirasia (zone 5-7) */
 const cd=env(13700,6200);if(cd>.02){g.globalAlpha=cd;const s0=fx(13700);caldWall(g,s0,230,hz,54,dim,2,night,t,{bump:8});caldWall(g,s0+300,110,hz,34,dim,5,night,t,{town:0});
  poly(g,dim('#f2eee2'),[[s0+40,hz+8],[s0+52,hz-4],[s0+68,hz-6],[s0+84,hz+8]]);
  g.fillStyle=dim('#2c2a2e');g.beginPath();[[-70,10],[-40,-6],[-14,-14],[8,-12],[34,-5],[64,10]].forEach((p,i)=>i?g.lineTo(s0+p[0],hz+p[1]):g.moveTo(s0+p[0],hz+p[1]));g.closePath();g.fill();poly(g,dim('#8c3b2a'),[[s0-30,hz-2],[s0-14,hz-14],[s0+2,hz-12],[s0-6,hz+4]]);
  poly(g,dim('#2c2a2e'),[[s0-170,hz+10],[s0-148,hz-2],[s0-120,hz-2],[s0-100,hz+10]]);for(let p=0;p<5;p++){const uu=(t*.15+p/5)%1;el(g,'rgba(250,250,245,'+(.35*(1-uu))+')',s0-6+Math.sin(uu*3+p)*4,hz-14-uu*30,3+uu*8,2+uu*5)}g.globalAlpha=1}
 /* Imerovigli e la roccia di Skaros (zona 7) */
 const sk=env(16500,3800);if(sk>.02){g.globalAlpha=sk;const s0=fx(16500);caldWall(g,s0-40,200,hz,58,dim,4,night,t,{bump:6});poly(g,dim('#9a5a3a'),[[s0+150,hz+8],[s0+154,hz-30],[s0+166,hz-56],[s0+180,hz-62],[s0+194,hz-48],[s0+204,hz-10],[s0+220,hz+8]]);poly(g,dim('#7a3e28'),[[s0+180,hz-62],[s0+194,hz-48],[s0+204,hz-10],[s0+220,hz+8],[s0+186,hz+8]]);for(let q=0;q<4;q++)rect(g,dim('#6a5e52'),s0+168+q*5,hz-66-(q%2)*2,4,5);rect(g,dim('#f6f2e8'),s0+160,hz-6,6,4);dot(g,dim('#2b63b0'),s0+163,hz-7,2.4);g.globalAlpha=1}
 /* Oia: il paese sul bordo della scogliera con il mulino, le cupole blu e il castello in rovina (zona 8) */
 const oi=env(19300,3800);if(oi>.02){g.globalAlpha=oi;const s0=fx(19300);caldWall(g,s0,240,hz,50,dim,3,night,t,{bump:10});[[-120,'#2b63b0'],[-30,'#2b63b0'],[70,'#2b63b0']].forEach(p=>{rect(g,dim('#f6f2e8'),s0+p[0]-8,hz-66,16,12);g.fillStyle=dim(p[1]);g.beginPath();g.ellipse(s0+p[0],hz-66,9,10,0,Math.PI,0);g.fill()});
  poly(g,dim('#f6f2e8'),[[s0+140,hz-48],[s0+146,hz-82],[s0+156,hz-82],[s0+162,hz-48]]);poly(g,dim('#b8925a'),[[s0+144,hz-82],[s0+151,hz-92],[s0+158,hz-82]]);rect(g,dim('#5e5348'),s0-190,hz-64,18,16);rect(g,dim('#5e5348'),s0-186,hz-70,5,6);
  if(night>.3)for(let q=0;q<30;q++)rect(g,'rgba(255,214,130,'+(.5+.4*Math.sin(t*3+q))+')',s0-200+hr(q)*400,hz-44-hr(q*3)*18,2,2);g.globalAlpha=1}
 if(night>.35){const a=(night-.3)*.8;for(let q=0;q<22;q++)rect(g,'rgba(255,214,130,'+a*(.3+.3*Math.sin(t*2+q))+')',((q*61+o*.6)%520)-20,hz+10+hr(q*5)*30,2,1.4)}}
/* ---- livello 2: case e vigne a metà distanza, zona per zona ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=mkdim(cam+300);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108,H=24+r*40;
  const wins=(n,top,ww)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+10+(q%4)*14,top+Math.floor(q/4)*12,4,4)};
  const wh=(wx,h,ww,c)=>{rect(g,dim(c||'#f6f2e8'),wx,hz-h,ww,h+10);rect(g,'rgba(40,56,110,.14)',wx+ww*.7,hz-h,ww*.3,h+10);rect(g,'rgba(255,255,255,.4)',wx,hz-h,2,h+10)};
  if(zz==1){if(hr(i*3)>.6){ln(g,dim('#5a4a3a'),3,[x+50,hz+8,x+48,hz-20]);el(g,dim('#6f9a5a'),x+46,hz-24,16,5)}else{wh(x+6,26+r*18,60);rect(g,dim('#2b63b0'),x+14,hz-14,7,14);rect(g,dim('#2b63b0'),x+40,hz-18,6,8);wins(2,hz-24)}}
  else if(zz==2){wh(x+4,46+r*52,58);wh(x+50,30+r*30,48);if(hr(i*3)>.7){wh(x+80,66,12);poly(g,dim('#2b63b0'),[[x+78,hz-66],[x+86,hz-80],[x+94,hz-66]])}wins(4,hz-40-r*30)}
  else if(zz==3){el(g,dim(['#a8b48a','#98aa7a','#bcb890'][md(i,3)]),x+50,hz+2,64,20+r*10);for(let q=0;q<6;q++)dot(g,dim('#6a7e52'),x+16+q*14,hz-4-hr(q+i)*10,2);if(hr(i*3)>.72)wh(x+84,24,26)}
  else if(zz==4){rect(g,dim(['#c8a074','#b88a60','#d4b080'][md(i,3)]),x,hz-20-r*24,w-8,30+r*24);for(let q=0;q<4;q++)rect(g,'rgba(0,0,0,.12)',x+8+q*22,hz-14-r*24,10,12);rect(g,dim('#d8dcdf'),x-3,hz-26-r*24,w-2,4)}
  else if(zz==5){wh(x+2,34+r*40,46);wh(x+44,24+r*30,50);if(hr(i*3)>.8){g.fillStyle=dim('#2b63b0');g.beginPath();g.ellipse(x+30,hz-34-r*40,10,11,0,Math.PI,0);g.fill()}wins(4,hz-30-r*30)}
  else if(zz==6){if(hr(i*3)>.8){poly(g,dim('#f4f0e6'),[[x+40,hz+8],[x+70,hz+8],[x+66,hz+2],[x+44,hz+2]]);poly(g,dim('#fff'),[[x+54,hz+2],[x+54,hz-20],[x+66,hz+2]])}else if(hr(i*3)>.45)poly(g,dim('#2c2a2e'),[[x+20,hz+10],[x+36,hz-4+r*-6],[x+56,hz-4],[x+70,hz+10]])}
  else if(zz==7){wh(x+2,30+r*36,50);wh(x+46,22+r*26,52);if(hr(i*3)>.7){g.fillStyle=dim('#2b63b0');g.beginPath();g.ellipse(x+28,hz-30-r*36,10,12,0,Math.PI,0);g.fill()}wins(4,hz-24-r*26)}
  else{wh(x+2,34+r*36,54,['#f6f2e8','#e8b8a8','#ecd49a','#a8c4dc'][md(i,4)]);wh(x+52,22+r*26,52);if(hr(i*3)>.8){g.fillStyle=dim('#2b63b0');g.beginPath();g.ellipse(x+76,hz-26-r*26,9,11,0,Math.PI,0);g.fill()}wins(4,hz-28-r*30)}});
 if(night>.3)for(let q=0;q<50;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
/* ---- livello 3: la strada, zona per zona ---- */
const PTS=(g,pts,cam)=>{g.beginPath();pts.forEach((p,i)=>i?g.lineTo(p[0]-cam,p[1]):g.moveTo(p[0]-cam,p[1]))};
const topY=(pts,wx)=>{for(let i=1;i<pts.length;i++)if(wx<=pts[i][0]){const a=pts[i-1],b=pts[i];return a[1]+(b[1]-a[1])*(wx-a[0])/(b[0]-a[0])}return pts[pts.length-1][1]};
/* parete di roccia a strati con le case in cima (Fira dal Porto Vecchio, Ammoudi sotto Oia) */
function cliff(g,cam,pts,cols,town,seed,t){const a=pts[0][0],b=pts[pts.length-1][0];if(cam+480<a||cam>b)return;const k=A.getDK();g.save();PTS(g,pts,cam);g.clip();const ty=Math.min.apply(null,pts.map(p=>p[1]));
 for(let q=0;q<9;q++)rect(g,cols[q%cols.length],0,ty+q*34,480,35);for(let q=0;q<60;q++)rect(g,'rgba(0,0,0,.14)',((a+q*37+hr(q+seed)*20)-cam),ty,2,GT-ty);rect(g,'rgba(0,0,0,.18)',0,GT-30,480,30);g.restore();
 if(town)for(let wx=a+10;wx<b-20;wx+=26){const y0=topY(pts,wx),bh=10+hr(wx*.1+seed)*16,xx=wx-cam;if(xx<-30||xx>500)continue;rect(g,tn('#f6f2e8'),xx,y0-bh,22,bh+2);rect(g,'rgba(40,56,110,.14)',xx+15,y0-bh,7,bh+2);rect(g,tn('#e2dccd'),xx-1,y0-bh-2,24,3);if(hr(wx*.07+seed)>.8){g.fillStyle=tn('#2b63b0');g.beginPath();g.ellipse(xx+11,y0-bh-2,7,8,0,Math.PI,0);g.fill()}if(k>.3&&hr(wx*.3)>.4)rect(g,'rgba(255,214,130,.9)',xx+6,y0-bh+5,3,4)}}
function layerStreet(g,o,t){const gt=GT;TT=t;const cam=o;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 /* Mesa Vouno alle spalle di Kamari: la parete di roccia con la strada a tornanti e le rovine in cima */
 if(cam+480>1800&&cam<2700){A.setDK(nf(2200));const P=[[1800,372],[1860,340],[1940,280],[2030,216],[2130,176],[2230,156],[2340,166],[2440,196],[2540,256],[2630,330],[2700,372]];g.save();PTS(g,P,cam);g.clip();rect(g,tn('#b4a494'),0,150,480,230);for(let q=0;q<26;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.12)':'rgba(70,50,40,.16)',1840+q*34-cam,150,10+hr(q+1)*10,230);rect(g,'rgba(255,170,190,'+.18*cl(1-cam/1800,0,1)+')',0,150,480,230);g.restore();
  ln(g,tn('#f2ead8'),2,[1980-cam,350,2080-cam,330,1990-cam,304,2130-cam,276,2030-cam,246,2200-cam,214,2120-cam,196,2250-cam,172]);for(let q=0;q<8;q++)rect(g,tn('#efe6d6'),2190+q*14-cam,150-(q%2)*3,9,6);for(let q=0;q<30;q++)dot(g,tn('#7a8a5a'),1900+hr(q)*760-cam,300+hr(q*3)*60,2+hr(q+5)*2)}
 each2(260,7,Z[0],Z[1],1,i=>80+hr(i*5)*30,170);
 each2(170,8,Z[1],Z[2],2,i=>110+hr(i*5)*80,150);
 each2(200,9,Z[2],Z[3],3,i=>0,190);
 /* Akrotiri: il grande tetto di acciaio e legno, con l'ombra fresca sotto */
 if(cam+480>Z[3]&&cam<Z[4]+200){A.setDK(nf(8800));const sx0=Math.max(0,Z[3]-cam),ex=Math.min(480,Z[4]+100-cam);if(ex>sx0){each2(190,10,Z[3],Z[4],4,i=>0,170);
  const sh=g.createLinearGradient(0,112,0,gt);sh.addColorStop(0,'rgba(40,30,24,.28)');sh.addColorStop(1,'rgba(40,30,24,.04)');g.fillStyle=sh;g.fillRect(sx0,112,ex-sx0,gt-112);rect(g,tn('#e4e7ea'),sx0,52,ex-sx0,58);rect(g,tn('#a8aeb4'),sx0,108,ex-sx0,5);rect(g,'rgba(255,255,255,.4)',sx0,52,ex-sx0,4);
  for(let k=Math.floor((cam+sx0)/40);k<=Math.ceil((cam+ex)/40);k++){const px=k*40-cam;if(px<sx0-40||px>ex)continue;ln(g,'#9aa0a8',1.4,[px,56,px+20,108,px+40,56])}
  for(let k=Math.floor((cam+sx0)/160);k<=Math.ceil((cam+ex)/160);k++){const px=k*160-cam;if(px<sx0-4||px>ex)continue;rect(g,tn(LGC),px-2,52,5,58)}
  for(let k=Math.floor((Z[3]+200)/400);k*400<Z[4];k++){const px=k*400+60-cam;if(px<-10||px>490)continue;rect(g,tn('#7a7f86'),px-4,112,8,gt-112);rect(g,tn('#5a5f66'),px-8,gt-6,16,6)}}}
 each2(180,11,Z[4],Z[5],5,i=>120+hr(i*5)*70,170);
 /* zona 6: il vulcano e il mare (Porto Vecchio con la parete di Fira, Nea Kameni, Palea Kameni) */
 if(cam+480>Z[5]-300&&cam<Z[6]+300){A.setDK(nf(13700));
  cliff(g,cam,[[12400,372],[12400,150],[12600,128],[12800,138],[13000,170],[13200,230],[13400,300],[13520,372]],STR.map(c=>tn(c)),1,3,t);
  A.setDK(nf(13900));if(cam+480>13350&&cam<14450){g.save();PTS(g,[[13350,372],[13440,330],[13560,296],[13700,262],[13820,226],[13900,214],[13990,226],[14080,262],[14200,300],[14330,334],[14420,372]],cam);g.clip();rect(g,tn(NRC),0,200,480,180);for(let q=0;q<40;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.07)':'rgba(0,0,0,.2)',13350+q*28-cam,214,10,170);poly(g,tn(ROC),[[13560-cam,300],[13640-cam,296],[13700-cam,340],[13580-cam,340]]);poly(g,tn(ROC),[[14040-cam,262],[14120-cam,280],[14100-cam,340],[14020-cam,300]]);g.restore();
   for(let q=0;q<7;q++){const uu=(t*.22+q/7)%1;el(g,'rgba(245,245,240,'+(.4*(1-uu))+')',13900+Math.sin(uu*3+q)*8-cam,214-uu*60,6+uu*16,4+uu*9)}}
  A.setDK(nf(14600));if(cam+480>14250&&cam<14950){g.save();PTS(g,[[14250,372],[14330,350],[14450,338],[14600,344],[14720,336],[14830,352],[14900,372]],cam);g.clip();rect(g,tn(NRC),0,330,480,50);for(let q=0;q<9;q++)rect(g,'rgba(0,0,0,.2)',14250+q*72-cam,336,10,40);g.restore()}
  for(let q=0;q<2;q++){const bx=[14150,15050][q]-cam+Math.sin(t*.6+q)*6;if(bx>-60&&bx<540){poly(g,tn('#f4f0e6'),[[bx,352],[bx+48,352],[bx+40,360],[bx+6,360]]);poly(g,tn('#fff'),[[bx+22,352],[bx+22,328],[bx+40,352]]);rect(g,tn('#2a62b8'),bx,352,48,2.4)}}
  for(let q=0;q<30;q++){const wx=((q*97+cam*1.0)%560)-40;rect(g,'rgba(255,255,255,'+(.22+.14*Math.sin(t*1.6+q))+')',wx,356+hr(q)*14,10+hr(q+2)*14,1.5)}}
 each2(190,13,Z[6],Z[7],7,i=>130+hr(i*5)*50,170);
 each2(200,14,Z[7],20050,8,i=>0,180);
 /* sotto Oia: la scogliera alta sopra il porticciolo di Ammoudi, con le case e le luci in cima */
 A.setDK(nf(20700));cliff(g,cam,[[20050,372],[20120,300],[20220,230],[20350,196],[20520,184],[20700,178],[20900,186],[21100,180],[21300,176],[21500,176],[21500,372]],['#6a4a3a','#3a3034','#8a4a34','#9a9286'].map(c=>tn(c)),1,6,t)}
const LGC='#8a5a32',NRC='#2c2a2e',ROC='#8c3b2a';
/* ---- vita: gabbiani, rondoni, passeri, falco della regina, berte al crepuscolo, escursionisti e passanti ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 const gul=Math.max(cl((300-xs)/300+1,0,1)*cl((2700-xs)/300,0,1),cl((xs-9800)/400,0,1)*cl((15700-xs)/400,0,1),cl((xs-18300)/300,0,1)*cl((19600-xs)/400,0,1));
 if(gul>.05)for(let i=0;i<4;i++){const bx=((i*131+t*(40+i*6))%600)-60,by=60+hr(i*3)*110+Math.sin(t*1.6+i*2)*16,w=Math.sin(t*6+i)*3.6;g.strokeStyle='rgba(250,250,250,'+(.95*Math.min(1,gul))+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-9,by+w);g.quadraticCurveTo(bx-3,by-5,bx,by);g.quadraticCurveTo(bx+3,by-5,bx+9,by+w);g.stroke();rect(g,'rgba(240,200,60,.9)',bx+1,by+2,3,1.6)}
 if(xs>7000&&xs<19800)for(let i=0;i<4;i++){const bx=((i*151+t*(110+i*12))%640)-80,by=40+hr(i*5+2)*130+Math.sin(t*3+i)*22,w=Math.sin(t*18+i)*2.4;g.strokeStyle='rgba(30,30,40,.85)';g.lineWidth=2;g.beginPath();g.moveTo(bx-7,by+w);g.quadraticCurveTo(bx-2,by-5,bx+1,by);g.quadraticCurveTo(bx+4,by-5,bx+8,by+w);g.stroke()}
 if(xs<7600)for(let i=0;i<3;i++){const bx=((i*171+t*(70+i*9))%620)-70,by=130+hr(i*5+2)*120+Math.sin(t*3+i)*10,w=Math.sin(t*16+i)*2;g.strokeStyle='rgba(100,76,50,.85)';g.lineWidth=1.8;g.beginPath();g.moveTo(bx-5,by+w);g.lineTo(bx,by);g.lineTo(bx+5,by+w);g.stroke()}
 const fa=cl((xs-10000)/400,0,1)*cl((18000-xs)/400,0,1);if(fa>.05){const bx=((t*22)%620)-70,by=90+Math.sin(t*.5)*24,w=Math.sin(t*1.2)*3;g.strokeStyle='rgba(70,50,40,'+(.9*fa)+')';g.lineWidth=3.2;g.beginPath();g.moveTo(bx-18,by+w+3);g.quadraticCurveTo(bx-8,by-4,bx,by);g.quadraticCurveTo(bx+8,by-4,bx+18,by+w+3);g.stroke();rect(g,'rgba(60,44,36,'+fa+')',bx-2,by,5,3)}
 const be=cl((xs-18900)/300,0,1)*cl((20800-xs)/400,0,1);if(be>.05)for(let i=0;i<3;i++){const bx=((i*190+t*(34+i*5))%620)-70,by=282+i*10+Math.sin(t*1.3+i)*5,w=Math.sin(t*3+i)*3;g.strokeStyle='rgba(30,24,40,'+(.8*be)+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-12,by+w);g.quadraticCurveTo(bx-4,by-3,bx,by);g.quadraticCurveTo(bx+4,by-3,bx+12,by+w);g.stroke()}
 [[2600,4900,24,0],[10100,12600,-22,1],[15600,18200,30,2],[18400,20000,-20,3]].forEach((rg,ri)=>{for(let i=0;i<2;i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.25),wx=rg[0]+(((t*sp+i*span/2)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));const d=sp>0?1:-1,by=GT+22+i*9;g.save();g.translate(px,by);g.scale(d*.6,.6);
  fig(g,0,0,t*3,{f:1,s:.7,ph:i,skin:tn('#e0b090'),top:tn(['#e8505a','#2a8a9a','#f2c82a','#f4f0e6'][(i+ri)%4]),bot:tn('#3a3a46'),hair:tn('#2a1a10'),acc:(g2,b)=>{el(g2,tn('#e8d8a0'),1,-112+b,16,4);rect(g2,tn('#e8d8a0'),-8,-121+b,16,9)}});g.restore()}})}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#3a383e','k'],[Z[1],Z[2],'#dcd6c4','l'],[Z[2],Z[3],'#d6cfb8','c'],[Z[3],Z[4],'#a88a60','o'],[Z[4],Z[5],'#ebe7dc','w'],[Z[5],Z[6],'#8a5a32','d'],[Z[6],Z[7],'#e8e2d2','p'],[Z[7],Z[8],'#d2cbbb','s']];
 rect(g,'#c8c0ac',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const slabs=(bw0,add,al)=>{for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,15);rect(g,'rgba(0,0,0,.12)',px,yy,1.3,17)}rect(g,'rgba(0,0,0,.09)',x0,yy+15,x1-x0,1.4)}};
  const planks=(c1,c2,bw)=>{for(let r=0;r<7;r++){const yy=gt+6+r*21;rect(g,r%2?c1:c2,x0,yy,x1-x0,19);rect(g,'rgba(0,0,0,.25)',x0,yy+19,x1-x0,1.6);const s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++)rect(g,'rgba(0,0,0,.2)',s0+k*bw-cam+(r%2)*bw*.5,yy,1.4,19)}};
  if(z[3]=='k'){/* sabbia e ciottoli neri di lava, schiuma sul bagnasciuga */
   rect(g,'#2a282e',x0,gt+3,x1-x0,22);for(let q=0;q<150;q++){const px=x0+((q*29)%ww),py=gt+10+hr(q)*136;el(g,hr(q+1)>.55?'rgba(150,146,150,.35)':hr(q+2)>.4?'rgba(10,8,12,.45)':'rgba(90,86,92,.4)',px,py,1.6+hr(q+3)*3.4,1+hr(q+4)*1.8)}
   rect(g,'rgba(90,200,215,.55)',x0,gt+3,x1-x0,7);for(let q=0;q<12;q++){const px=x0+((q*53-cam*1.0)%ww+ww)%ww,ph=Math.sin(t*1.1+q)*2;rect(g,'rgba(255,255,255,.55)',px,gt+7+ph,26+hr(q)*30,2.4)}rect(g,'rgba(255,255,255,.3)',x0,gt+9+Math.sin(t*1.1)*2,x1-x0,1.6)}
  if(z[3]=='l'){slabs(60,10,.3);rect(g,'#b8b09c',x0,gt+120,x1-x0,3)}
  if(z[3]=='c'){/* cenere e pomice chiara */
   for(let q=0;q<120;q++)el(g,hr(q)>.5?'rgba(255,255,255,.3)':'rgba(150,140,120,.26)',x0+((q*47)%ww),gt+8+hr(q+3)*135,2+hr(q)*3.4,1.2+hr(q+5)*1.4);for(let r=0;r<4;r++)rect(g,'rgba(160,150,130,.18)',x0,gt+22+r*32,x1-x0,2);rect(g,'#b8b09a',x0,gt+120,x1-x0,2.6)}
  if(z[3]=='o'){/* terra ocra degli scavi e passerella di legno */
   for(let q=0;q<100;q++)rect(g,hr(q)>.5?'rgba(255,230,180,.2)':'rgba(90,50,20,.22)',x0+((q*41)%ww),gt+80+hr(q+3)*68,3+hr(q)*4,2);rect(g,'#6a4a2a',x0,gt+34,x1-x0,3);planks('#9a7448','#8a6640',54);rect(g,'rgba(40,20,0,.3)',x0,gt+6,x1-x0,3)}
  if(z[3]=='w'){slabs(70,8,.4);for(let q=0;q<6;q++)rect(g,'rgba(70,60,60,.4)',x0,gt+22+q*24,x1-x0,3);rect(g,'#bdb6a2',x0,gt+120,x1-x0,3)}
  if(z[3]=='d'){/* ponte di legno, molo, sentiero di lava */
   const ls=Math.max(x0,13600-cam),le=Math.min(x1,14300-cam);planks('#9a7448','#8a6640',64);if(le>ls){rect(g,'#2c2a2e',ls,gt+3,le-ls,150);for(let q=0;q<90;q++){const px=ls+((q*37)%(le-ls)),py=gt+8+hr(q)*136;el(g,hr(q+1)>.6?'#8c3b2a':hr(q+2)>.4?'#45424a':'#1a181c',px,py,2+hr(q+3)*4,1.4+hr(q+4)*2)}rect(g,'rgba(255,255,255,.06)',ls,gt+3,le-ls,12)}}
  if(z[3]=='p'){slabs(56,8,.34);rect(g,'#c0b8a2',x0,gt+3,x1-x0,5);for(let q=0;q<5;q++)rect(g,'rgba(255,255,255,.4)',x0,gt+24+q*26,x1-x0,2)}
  if(z[3]=='s'){/* pietra lucida di Oia, poi il molo di cemento di Ammoudi */
   const am=Math.max(x0,20000-cam);if(am>x0){slabs(46,7,.4);rect(g,'rgba(255,255,255,.16)',x0,gt+3,Math.min(am,x1)-x0,10)}
   if(am<x1){rect(g,'#8e8e90',am,gt+3,x1-am,150);for(let r=0;r<5;r++)rect(g,'rgba(0,0,0,.1)',am,gt+16+r*24,x1-am,1.4);for(let q=0;q<50;q++)rect(g,'rgba(255,255,255,.12)',am+((q*53)%(x1-am)),gt+10+hr(q)*130,3,1.6);rect(g,'#b0b0b4',am,gt+3,x1-am,3)}}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1400,0,1);if(dw>.02)rect(g,'rgba(255,170,180,'+(.14*dw)+')',0,gt,480,150);
 const gd=cl((cam-15400)/700,0,1)*cl((18000-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
 const sg=cl((cam-18000)/600,0,1)*cl((19800-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};
/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVC));fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Katerina: grembiule blu, capelli grigi sotto il foulard, occhiali da sole sulla testa, chiavi al polso, scopa e caffè freddo */
 NP('sn_katerina',NAME.sn_katerina,1130,GREET.sn_katerina,{skin:'#d8a078',top:'#3a5a8a',bot:'#4a4a52',hair:'#b8b8b8',s:1.0},(g,b,t)=>{rect(g,'#2f5fa8',-11,-78+b,22,36);rect(g,'rgba(255,255,255,.25)',-11,-78+b,22,3);poly(g,'#d8d0c0',[[-12,-107+b],[12,-107+b],[13,-98+b],[-13,-98+b]]);rect(g,'#14110f',-3,-113+b,12,3);dot(g,'#c8c8d0',-14,-48,2.6);
  ln(g,'#8a6a3a',2.2,[-22,-8,-30,-100]);poly(g,'#c8a860',[[-34,-8],[-18,-8],[-22,-24],[-30,-24]]);rect(g,'rgba(240,244,250,.85)',16,-62,5,12);rect(g,'#d8b890',16,-56,5,6);rect(g,'#f4f0e6',17,-65,2,4)}),
 /* Kyria Sofia: vestito scuro a fiorellini, grembiule, foulard sui capelli bianchi, rosario di legno, cestino di capperi */
 NP('sn_sofia',NAME.sn_sofia,3200,GREET.sn_sofia,{skin:'#d8a078',top:'#2c2832',bot:'#2c2832',hair:'#ececec',long:1,s:.96},(g,b,t)=>{for(let q=0;q<9;q++)dot(g,'#c8503a',-8+(q%3)*8,-82+Math.floor(q/3)*12+b,1.6);rect(g,'#f4f0e6',-11,-70+b,22,26);poly(g,'#f4f0e6',[[-12,-109+b],[11,-109+b],[14,-96+b],[-13,-96+b]]);rect(g,'rgba(0,0,0,.08)',2,-109+b,9,12);
  ln(g,'#8a5a32',1.6,[12,-66,15,-58,12,-50]);dot(g,'#8a5a32',12,-50,2.4);el(g,'#b88a4a',-24,-52,11,7);rect(g,'#b88a4a',-33,-58,18,3);for(let q=0;q<5;q++)dot(g,'#6a8a3a',-30+q*4,-58,1.8)}),
 /* Thanasis: cappello di paglia, camicia di lino con le maniche rimboccate, forbici da potatura, stivali sporchi di cenere, bicchiere */
 NP('sn_thanasis',NAME.sn_thanasis,5750,GREET.sn_thanasis,{skin:'#c8946a',top:'#e8e0c8',bot:'#6a5e50',hair:'#4a3a28',s:1.02},(g,b,t)=>{el(g,'#d8c070',1,-112+b,20,5);rect(g,'#d8c070',-9,-123+b,18,11);rect(g,'#8a6a2a',-9,-115+b,18,2.4);rect(g,'rgba(0,0,0,.1)',2,-86+b,10,40);rect(g,'#8a8a92',8,-66,2.4,9);rect(g,'#8a8a92',11,-66,2.4,9);el(g,'#cfc8b4',-4,-4,10,5);el(g,'#cfc8b4',8,-4,10,5);rect(g,'rgba(240,244,250,.85)',18,-62,5,11);rect(g,'#e8d890',18,-56,5,5)}),
 /* Spyridon Marinatos: completo cachi, casco di sughero, piccola giara antica fra le mani, taccuino di schizzi */
 NP('sn_marinatos',NAME.sn_marinatos,9400,GREET.sn_marinatos,{skin:'#d8a078',top:'#c8b080',bot:'#b8a070',hair:'#e8e8e8',s:1.04},(g,b,t)=>{el(g,'#f2ecd8',1,-111+b,19,5.6);poly(g,'#f2ecd8',[[-11,-112+b],[-8,-125+b],[9,-125+b],[12,-112+b]]);rect(g,'#8a7a5a',-11,-114+b,23,2);rect(g,'rgba(0,0,0,.1)',-11,-80+b,22,3);rect(g,'#2a1a10',2,-96+b,8,1.6);
  el(g,'#b8603a',13,-58,7,9);rect(g,'#b8603a',10,-70,6,5);ln(g,'#3a1e12',1.4,[6,-62,20,-62]);rect(g,'#e8e0c8',-26,-72,12,16);rect(g,'#5a3a22',-26,-72,2,16);ln(g,'#3a3a3a',.8,[-23,-68,-17,-68])}),
 /* Nikos: cappello di tela, camicia sbottonata, sciarpa al collo, bastone corto, ciotola d'acqua */
 NP('sn_nikos',NAME.sn_nikos,10800,GREET.sn_nikos,{skin:'#c8946a',top:'#b8b0a0',bot:'#3a3a40',hair:'#8a8a8a',s:1.02},(g,b,t)=>{el(g,'#d8d0b0',1,-111+b,18,4.6);rect(g,'#d8d0b0',-8,-120+b,17,9);rect(g,'#b83a2a',-10,-91+b,20,5);rect(g,'rgba(0,0,0,.2)',-1,-86+b,2,40);el(g,'#2a2a2e',-4,-4,10,5);el(g,'#2a2a2e',8,-4,10,5);ln(g,'#6a4a2a',2.6,[18,-60,26,-12]);el(g,'#8a8a92',-24,-60,8,3);el(g,'#7ab0d8',-24,-61,6,1.6)}),
 /* Antonis: maglia a righe bianche e blu, cappello da marinaio, barba bianca, occhiali scuri, amuleto blu a forma d'occhio */
 NP('sn_antonis',NAME.sn_antonis,13450,GREET.sn_antonis,{skin:'#c8946a',top:'#f4f0e6',bot:'#3a3a46',hair:'#d8d8d8',s:1.04},(g,b,t)=>{for(let q=0;q<5;q++)rect(g,'#2a62b8',-12,-86+q*9+b,24,3);rect(g,'#1a2a4a',-11,-116+b,23,7);poly(g,'#1a2a4a',[[8,-110+b],[22,-109+b],[8,-105+b]]);dot(g,'#e8c04a',1,-112+b,1.6);poly(g,'#ececec',[[-6,-96+b],[9,-96+b],[7,-85+b],[-4,-85+b]]);rect(g,'#14110f',2,-104+b,10,4);
  ln(g,'#8a5a32',2.2,[22,-4,22,-70]);ln(g,'#8a5a32',2.2,[14,-70,30,-70]);dot(g,'#2a62b8',22,-60,5);dot(g,'#f4f4f0',22,-60,3.4);dot(g,'#14161c',22,-60,1.8)}),
 /* Eleni: camicia bianca, jeans, grembiule da cucina, mazzo di chiavi, cesto di lenzuola sotto il braccio, capelli scuri raccolti */
 NP('sn_eleni',NAME.sn_eleni,17400,GREET.sn_eleni,{skin:'#d8a078',top:'#f4f0e6',bot:'#3a5a8a',hair:'#2a1a10',s:1.0},(g,b,t)=>{rect(g,'#e8d8a0',-11,-76+b,22,34);rect(g,'rgba(0,0,0,.1)',2,-76+b,9,34);dot(g,'#2a1a10',-8,-110+b,5.4);dot(g,'#d8c050',13,-50,2.6);ln(g,'#c8b040',1,[13,-50,16,-44]);
  el(g,'#b88a4a',-26,-62,13,9);rect(g,'#f4f0e6',-37,-72,22,9);rect(g,'rgba(0,0,0,.1)',-27,-72,12,9)}),
 /* Stavros: berretto di lana blu, maglia sdrucita, stivali di gomma, retina in spalla, coltellino alla cintura */
 NP('sn_stavros',NAME.sn_stavros,20330,GREET.sn_stavros,{skin:'#b88a64',top:'#6a6a72',bot:'#4a4a50',hair:'#9a9a9a',s:1.02},(g,b,t)=>{el(g,'#2a4a8a',1,-110+b,13,7);rect(g,'#2a4a8a',-12,-112+b,24,4);rect(g,'rgba(0,0,0,.2)',-11,-60+b,22,2);el(g,'#1a1a1e',-4,-4,10,6);el(g,'#1a1a1e',8,-4,10,6);
  poly(g,'rgba(140,128,90,.8)',[[-14,-92+b],[-4,-96+b],[-2,-60+b],[-16,-58+b]]);for(let q=0;q<4;q++)ln(g,'rgba(80,70,50,.7)',.8,[-14,-90+q*8+b,-3,-92+q*8+b]);rect(g,'#c8c8d0',10,-58,2,7);rect(g,'#5a3a22',10,-52,2,3)})
];
/* ---- oggetti lungo il percorso ---- */
const LX=[400,1000,1650,2250, 2900,3500,4100,4700, 5400,6000,6600,7200, 7900,8500,9150,9700, 10400,11000,11700,12350, 13200,13900,14500,15150, 15900,16500,17100,17850, 18750,19400,19900,20500,20870];
const props=[
 /* zona 1 · Kamari e la spiaggia nera */
 ['sntarga',150,['ΚΑΜΑΡΙ','KAMARI']],['snpalma',270,1.1],['snlettini',400],['snlampione',640,0],['sngatto',690,'#3a3a3e'],['snbar',1000],['snombrellone',1260,1],['snlampione',1470,0],['snbarche',1650],['snfichi',1930,1],['snmesa',2250],['snlampione',2430,0],
 /* zona 2 · Pyrgos */
 ['sntarga',2560,['ΠΥΡΓΟΣ','PYRGOS']],['snpyrgos',2900],['snlampione',3090,0],['snkasteli',3500],['sngatto',3740,'#c9873a'],['snlanterne',4100],['snfichi',4390,1.1],['snprofitis',4700],['snlampione',4930,0],
 /* zona 3 · Le vigne */
 ['sntarga',5110,['ΑΜΠΕΛΙΑ','VINEYARDS']],['snvigna',5400],['snterra',6000],['sncantina',6600],['snvinsanto',7200],['snfichi',7420,1.2],
 /* zona 4 · Akrotiri */
 ['sntarga',7620,['ΑΚΡΩΤΗΡΙ','AKROTIRI']],['sncitta',7900],['sntriangolo',8500],['snscavo',8830],['sngiare',9150],['snaffreschi',9700],
 /* zona 5 · Fira e il Porto Vecchio */
 ['sntarga',10090,['ΦΗΡΑ','FIRA']],['snskala',10400],['snmulo',10650],['snfunivia',11000],['snsouvenir',11380],['sncattedrali',11700],['sngatto',11960,'#a8a090'],['snmuseo',12350],['snlampione',12560,0],
 /* zona 6 · Il vulcano */
 ['sntarga',12780,['ΠΑΛΑΙΟ ΛΙΜΑΝΙ','OLD PORT']],['snmolo',13000],['sncaicco',13400],['sncratere',13900],['snsorgenti',14500],['sncaldera',15150],
 /* zona 7 · Imerovigli e Skaros */
 ['sntarga',15600,['ΙΜΕΡΟΒΙΓΛΙ','IMEROVIGLI']],['snbalcone',15900],['snskaros',16500],['sncupole',17100],['sneleni',17450],['sngrotte',17850],['sngatto',18180,'#d8d0c0'],
 /* zona 8 · Oia e Ammoudi */
 ['sntarga',18390,['ΟΙΑ','OIA']],['snlampione',18550,1],['sncastello',18750],['sncapitani',19400],['snlampione',19680,1],['snmulino',19900],['snpolpi',20250],['snammoudi',20500],['snvarco',20870]
];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'santorini',name:'Santorini · Da Kamari al tramonto di Oia',width:W1,sky:['#8a8ac0','#f4b0c0','#ffd8c0'],gt:372,gr:['#3a383e','#24222a'],chord:[196,246.9,293.7,370],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da santorini.txt); l'ultima è il saluto --- */
(function(){
const TOPX_SN={
sn_katerina:[
["Chi sei e che fai?","Katerina, cinquantadue anni, nata qui a Kamari. Ho un bar sulla spiaggia che apro prima dell’alba da trent’anni: spazzo i ciottoli, sistemo i lettini, accendo la macchina del caffè. Mio marito dice che sono sposata con la spiaggia, e non ha tutti i torti."],
["Perché la spiaggia è nera?","Perché Santorini è un vulcano, Pierpaolo: la sabbia e i ciottoli sono lava frantumata dal mare. Il nero scotta: alle due del pomeriggio si cammina a saltelli, e si impreca in tutte le lingue. Per questo da me ci sono le ciabattine, e le vendo a prezzo giusto... quasi."],
["Cos’è questo caffè freddo?","Il freddo espresso, o il frappé: caffè sbattuto con acqua e ghiaccio, con una schiuma alta due dita. Lo beviamo tutti, anche d’inverno, e i turisti si stupiscono. Per ordinare il caffè greco normale devi dire come lo vuoi: sketo, senza zucchero, metrio, medio, o glyko, dolce."],
["Cos’è la montagna alle nostre spalle?","Mesa Vouno, la \"montagna di mezzo\". In cima, a oltre 360 metri, c’era la città antica di Thera: la fondarono nel IX secolo a.C. dei coloni dorici arrivati da Sparta, guidati, secondo la tradizione, da un certo Theras, da cui l’isola prende il suo nome antico. I suoi porti erano qui, a Kamari, e a Perissa, dall’altra parte."],
["Chi la scavò?","Un barone tedesco, Friedrich Hiller von Gaertringen, che a cavallo fra Otto e Novecento scavò per anni la città e le tombe. Sono venuti fuori l’agorà, il teatro, le case; molti reperti sono nel museo di Fira. Io ci salgo ogni primavera: poche ore, una bottiglia d’acqua, un cappello e una vista che ripaga di tutto."],
["Da dove viene il nome Santorini?","Da Santa Irini, Santa Irene. Si dice che i Veneziani, nel Duecento, abbiano battezzato l’isola da una chiesa dedicata alla santa: c’è chi pensa a una cappella a Thirasia e chi, oggi, alla basilica di Agia Irini ai piedi di Mesa Vouno, proprio qua dietro. Il nome ufficiale, in greco, resta Thira."],
["Cos’è il meltemi?","Il vento del nord, che d’estate soffia forte, soprattutto a luglio e ad agosto. Rinfresca, ma ti porta via ombrelloni e cappello, e a volte annulla le gite in barca. Nei giorni di meltemi i miei lettini sembrano un esercito in rotta, e io gli corro dietro."],
["Cosa si mangia a colazione?","Yogurt greco con miele e noci, un koulouri, l’anello di pane al sesamo ancora caldo, formaggio e olive. Oppure una tiropita, la sfoglia al formaggio. Si mangia seduti, con calma: la fretta è un’usanza dei turisti."],
["Com’è la stagione qui?","Va più o meno da aprile a ottobre. Poi molte taverne chiudono, i lavoratori stagionali tornano a casa e il paese si fa silenzioso: si sentono di nuovo le campane e i cani. Ci si ritrova tra noi al kafeneion, a giocare a carte e a lamentarsi del tempo, come tutti i greci."],
["E i ritmi della giornata?","Il giorno ha due tempi: la mattina presto e la sera. Nel primo pomeriggio fa troppo caldo, molti chiudono e fanno un sonnellino: la siesta è sacra, e guai a telefonare fra le tre e le cinque. Poi la sera si fa la volta, la passeggiata sul lungomare, e si cena tardi."],
["Dove vado dopo?","A Pyrgos, il villaggio alto dell’isola, a pochi chilometri: ci arrivi in autobus, in taxi o a piedi se sei coraggioso. Lì c’è Kyria Sofia, la nonna di tutti: se ti invita a pranzo, non dire di no, perché è una cosa seria. E porta un maglioncino: lassù tira più vento."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e bevi acqua: il sole di Santorini inganna. Se torni a sera, ti faccio una tomatokeftedes... almeno una! Kalo taxidi, agapi mou, e passa a salutare!"]
],
sn_sofia:[
["Chi sei e che fai?","Sofia, settantotto anni, sempre vissuta a Pyrgos. Ho cresciuto quattro figli, nove nipoti e un orto che non mi ha mai ringraziato. Mio marito faceva il contadino e io il pane: ci siamo capiti benissimo."],
["Com’è Pyrgos?","Il paese è sul colle ai piedi del monte Profitis Ilias ed è stato per secoli il capoluogo dell’isola: in cima c’è il castello veneziano, il kasteli, che serviva da rifugio quando arrivavano i pirati. È uno dei cinque castelli dell’isola, costruito attorno a una torre e a una chiesa, con le case che fanno da muro. Le stradine sono a chiocciola per confondere i pirati, e anche i turisti."],
["Cosa succede a Pasqua?","Il Venerdì Santo mettiamo centinaia di lanterne di latta sui muri e intorno al castello, e quando passa l’Epitaffio, la processione con la bara simbolica di Cristo, il paese è tutto luce e silenzio. Vengono da tutta l’isola e anche da fuori. Ogni anno mi si inumidiscono gli occhi, e non è il fumo."],
["E il monastero lassù?","È Profitis Ilias, il monastero del profeta Elia, a 567 metri: il punto più alto dell’isola. È del Settecento e ha un piccolo museo di oggetti sacri. Da lassù si vede tutta Santorini, e con la foschia ti sembra di essere in cielo: la festa del santo è il 20 luglio e ci si va a piedi, quando si riesce."],
["Cos’è la fava di Santorini?","Non è la fava che pensi tu: è un purè di piselli gialli spezzati, di una varietà dell’isola, cotto a lungo con la cipolla e servito con olio, cipolla cruda e capperi. Si coltiva qui da oltre tremila anni, e le tracce sono comparse perfino negli scavi di Akrotiri. Mia madre la faceva di venerdì, e noi non osavamo dire di no."],
["E le polpette di pomodoro?","Le tomatokeftedes: pomodorini dell’isola, piccoli e dolcissimi, schiacciati con cipolla, menta e farina, e fritti. Ogni famiglia ha la sua ricetta e ogni famiglia dice che la sua è la migliore: noi, ovviamente, siamo quelli che hanno ragione."],
["Cos’altro mangiate di particolare?","La melanzana bianca, più dolce e con pochi semi, che quando la friggi non beve olio; i capperi, che crescono sui muri a secco e si mettono sotto sale o sotto aceto; e il chlorotyri, un formaggio fresco e morbido, che mettiamo sull’insalata al posto della feta. Poi i paximadia, i biscotti d’orzo secchi, bagnati e conditi con pomodoro e olio."],
["Com’è la tua giornata?","Mi alzo alle sei, accendo la candela davanti all’icona, bevo il caffè greco in tazzina, sketo, senza zucchero, e vado in chiesa se c’è la liturgia. Poi cucino, innaffio i vasi, chiacchiero con la vicina dalla finestra. Dopo pranzo il sonnellino, e di sera sul muretto a guardare chi passa."],
["Com’è il paese d’inverno?","Tranquillo: la gente di fuori se ne va e restiamo noi e i gatti. Si accende il camino, si fanno il pane e le marmellate, e gli uomini vanno al kafeneion a giocare a tavli, il backgammon, litigando con grande cortesia. Il vento, quello sì, non va mai in vacanza."],
["Cos’è l’onomastico?","Qui si festeggia più l’onomastico del compleanno: il giorno del santo di cui porti il nome. Chi si chiama Maria, il 15 agosto, la festa dell’Assunta, ha la casa piena di visite e di dolci. Il mio è Santa Sofia, e quel giorno vengono tutti: io offro il liquore e i biscotti, e nessuno se ne va a mani vuote."],
["Dove vado dopo?","Scendi tra le vigne: troverai Thanasis, che coltiva viti più vecchie di me e dei miei fratelli messi insieme. Digli che ti manda Sofia e che mi porti una bottiglia di vinsanto per Natale: il vinsanto è dolce, e io pure."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, paidi mou, e mangia quello che ti danno, che qui rifiutare è un’offesa. Se ripassi, porta scarpe comode e fame. Stin ygeia sou, e che la Panagia ti accompagni!"]
],
sn_thanasis:[
["Chi sei e che fai?","Thanasis, quarantanove anni, vignaiolo di terza generazione. Le viti le ho ereditate, perché qui durano più di noi. Le poto, le lego, le guardo e... le ringrazio."],
["Cos’è questa vite a cesto?","La kouloura: il tralcio viene intrecciato in una specie di corona bassa, appoggiata alla terra, e i grappoli crescono dentro, riparati dal vento forte e dal sole. Da lontano le vigne sembrano un campo di nidi. Si fa a mano, e non ce ne sono due uguali: ogni vignaiolo ha la sua mano."],
["Perché non ci sono filari?","Perché il vento qui non perdona: con i filari i tralci si spezzerebbero. Le viti vecchie si rinnovano da un ramo del cesto, e per questo i ceppi nascono dove nasce il cesto, non in fila. È come una famiglia stretta attorno al fuoco per tenersi al caldo."],
["Com’è la terra?","Non è terra: è cenere e pomice, sabbiosa, chiara, quasi senza argilla. L’acqua non la trattiene e piove poco: le viti bevono la nebbia di mare che sale la notte e la mattina, con radici lunghissime. Hanno sete, e per questo l’uva è concentrata."],
["Cos’è la fillossera?","Un parassita che, alla fine dell’Ottocento, distrusse le vigne d’Europa. Qui non è mai sopravvissuto: il suolo sabbioso non gli piace. Così le nostre viti sono su radice propria, non innestate, e molte hanno più di cent’anni: c’è chi dice che alcune ne abbiano molti di più."],
["Cos’è l’assyrtiko?","È il re: un’uva bianca dell’isola, con grande acidità e un sapore salino, minerale, che ricorda il mare e la pietra. Poi c’è il nykteri, più ricco, che un tempo si vendemmiava di notte per evitare il caldo. Accanto all’assyrtiko ci sono l’athiri e l’aidani, per le sfumature."],
["E il vinsanto?","È il nostro vino dolce: l’uva viene lasciata appassire al sole su stuoie, poi pressata e lasciata riposare per anni in botti di rovere. Viene ambrato, denso, con sentori di albicocca secca, fico e caramello. Se ne beve un sorso, non un bicchiere: è un vino da ospiti, e dicono che sia come un abbraccio."],
["Da quanto si fa vino qui?","Da circa 3.500 anni, dicono gli esperti. E nell’Ottocento i capitani di Oia caricavano il vinsanto sulle navi per portarlo lontano. Il nostro vino ha viaggiato più di me, e io sono stato fino a Salonicco."],
["Com’è la vendemmia?","Si vendemmia in piena estate, spesso all’alba, a mano, con le casse di plastica e i cesti, perché il cesto va aperto con cura. Il lavoro è di famiglia: figli, nipoti, cugini, amici, e a mezzogiorno si mangia insieme, con fava, pomodori e il vino dell’anno scorso. È la parte che amo di più: il resto è fatica."],
["Cosa pensi dei turisti in cantina?","Le cantine oggi sono piene di visitatori al tramonto: degustazioni, vista, fotografie. Io li accolgo volentieri, ma dico sempre: tenete il bicchiere come un neonato e guardate la vite prima di bere. Un buon vino si impara guardando il vigneto, non l’etichetta."],
["Dove vado dopo?","Scendi verso sud, ad Akrotiri: lì c’è una città di quasi quattromila anni fa, sepolta dalla cenere. Troverai un professore con il casco di sughero, Marinatos, che parla di scavi come io parlo di vigne. Digli che le viti sono più lente dei muri, ma più simpatiche."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se passi di qui a settembre vieni a darmi una mano: la fatica si impara, la pazienza no. Se ti offrono vinsanto, bevine un sorso piccolo e fai finta di capire. Stin ygeia mas, ela!"]
],
sn_marinatos:[
["Chi sei e che fai?","Spyridon Marinatos, archeologo, nato nel 1901 a Lixouri, nell’isola di Cefalonia. Ho scavato a Creta, in Messenia, alle Termopili; ma il mio sogno era Santorini. Dirigo questi scavi dal 1967."],
["Perché Akrotiri?","Nel 1939 scrissi un articolo in cui sostenevo che una grande eruzione del vulcano di Thera avesse colpito la civiltà minoica di Creta. Per provarlo mi serviva una prova sul terreno, e ci sono volute quasi trent’anni. Nel 1967 scelsi Akrotiri, a sud-ovest dell’isola, dove si trovavano vecchi oggetti, e il posto era quello giusto."],
["Com’è cominciato lo scavo?","Provammo con dei cunicoli, ma la cenere e la pomice franavano: troppo pericoloso. Passammo a scavi dall’alto, strato per strato, e dopo poche ore comparvero i primi muri. Nelle prime due stagioni, il 1967 e il 1968, capimmo che sotto non c’era un villaggio, ma una città."],
["Com’era la città?","Un centro ricco e ben organizzato, con strade, piazze, case a due e a tre piani con scale interne, finestre e canali di scolo per le acque. I muri sono rimasti in piedi sotto la cenere per un’altezza che quasi nessun altro sito preistorico può vantare. Mi hanno chiamato \"la Pompei dell’Egeo\": rispondo che Pompei è più giovane di circa diciassette secoli."],
["Cosa non avete trovato?","Corpi. Non ci sono scheletri, e di oggetti preziosi ne troviamo pochissimi: questo fa pensare che gli abitanti, avvertiti dai terremoti, abbiano abbandonato la città prima dell’eruzione. Dove siano andati non lo sappiamo: è la domanda che mi tiene sveglio la notte."],
["E gli affreschi?","Sono la gioia. Muri dipinti con rondini e gigli, scimmie blu che si arrampicano sulle rocce, un pescatore che porta il suo carico, una flotta di navi con una città sullo sfondo. I colori sono di minerali e per questo sono durati: ocra, rosso, blu. Oggi quasi tutti sono nel Museo Archeologico Nazionale di Atene, e alcuni nel museo della Preistoria di Fira."],
["Cosa c’era nel magazzino?","Giare, i pithoi: vasi altissimi per olio, grano e vino, allineati in file. Fu il primo edificio a emergere dallo scavo. Accanto c’era un telaio, segno che lì si tesseva: la vita di tutti i giorni ci parla più dei tesori."],
["Con chi commerciava Akrotiri?","Gli oggetti importati mostrano scambi con Creta minoica, con la Grecia continentale, con il Dodecaneso, con Cipro, la Siria e l’Egitto. Era un porto, un nodo di rotte nel mezzo dell’Egeo. Il suo nome antico non lo conosciamo: un bel mistero."],
["Cos’è successo con l’eruzione?","Fu enorme: coprì l’isola di cenere e pomice e creò la caldera, la grande baia che vedi dal mare. Oggi la si colloca intorno al 1600 a.C., più o meno. Io credevo che avesse messo fine alla civiltà minoica; oggi molti studiosi pensano che Creta sia andata avanti per più di un secolo, e che l’eruzione sia stata una fra le cause del declino. Mi sta bene: la scienza si corregge."],
["E Atlantide?","Platone raccontò di un’isola scomparsa nel mare, e c’è chi pensa che l’eruzione di Santorini abbia ispirato quella leggenda. Io non prometto nulla: dico solo che un’isola rotonda, spaccata da un’eruzione, è una bella storia. Gli abitanti di oggi sorridono e te la vendono in cartolina."],
["Com’è lo scavo oggi?","Mi dicono che sopra le case c’è un grande tetto di acciaio e legno, e che nel 2005 la nuova copertura, ancora in costruzione, crollò e vi morì un visitatore: un dolore enorme. Il sito rimase chiuso fino al 2012. Da allora si cammina su passerelle, al riparo, sopra le case."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e guarda i muri, non solo gli affreschi: sono i muri che ricordano. Mi dicono che io riposi qui, nello scavo che ho amato: non mi dispiace affatto. A Fira ti aspetta Nikos, il mulattiere, che di scale ne sa più di tutti noi. Kalo taxidi, paidi mou!"]
],
sn_nikos:[
["Chi sei e che fai?","Nikos, sessantun anni. Mio padre faceva questo lavoro e prima di lui mio nonno: portare su e giù gente e merci dal porto al paese. Un tempo i muli portavano vino, legna e sacchi di farina; oggi soprattutto persone con la valigia."],
["Com’è fatta la scalinata?","Sono 588 gradini, larghi e bassi, a serpentina, che collegano Fira al Porto Vecchio, circa 220 metri più in basso. A piedi ci metti da un’ora a un’ora e mezza, con il sole addosso. Un tempo era l’unica via per arrivare dal mare."],
["E la funivia?","La teleferiko è del 1979: la donò un armatore, Evangelos Nomikos, tramite la fondazione di famiglia. In tre minuti sei su, 220 metri più in alto, e può portare fino a mille e duecento persone all’ora. Una parte degli incassi, oggi, va alla comunità e anche ai mulattieri."],
["E i muli?","Lavorano su questa scalinata da secoli, ma oggi ci sono regole: un animale non può portare più di un quinto del proprio peso, e chi pesa più di cento chili non può salire in sella. C’è anche chi dice che non basti e che gli animali andrebbero lasciati a riposo del tutto: se ne discute molto, e ognuno si fa la sua idea. Io posso dirti che li conosco per nome."],
["Come mi consigli di salire?","Hai tre scelte: la funivia, il mulo o le tue gambe. Io ti consiglio la funivia se c’è poca coda, e le gambe se hai tempo e scarpe buone. E occhio a dove metti i piedi: sono gradini che hanno visto passare molti animali, e lo si vede."],
["Com’è il Porto Vecchio?","Giù c’è il porticciolo dove arrivano le barche e i battelli delle navi da crociera: le grandi navi restano ancorate al largo e i passeggeri sbarcano a gruppi. Nei giorni di molte navi la coda per la funivia è lunga, e a volte conviene salire a piedi o aspettare. Ci si abitua: anche i muli."],
["Cos’è questa storia delle due cattedrali?","Fira ne ha due vicine, una ortodossa e una cattolica: la presenza cattolica viene dai Veneziani, che arrivarono sull’isola nel Duecento. Per secoli ortodossi e cattolici hanno convissuto, più o meno in pace, e a Pasqua si sentono le campane di tutte e due. È uno dei motivi per cui l’isola ha un’aria particolare."],
["Come divenne Fira il capoluogo?","Prima il centro dell’isola era il castello di Skaros, sulla roccia qui vicino. Col tempo gli abitanti si trasferirono qui, e Fira divenne il capoluogo. Il nome ufficiale è Thira, ma la gente del posto dice Fira, e gli stranieri pure: io non mi offendo."],
["C’è qualcosa da vedere al fresco?","Il Museo della Preistoria di Thera, qui sopra: vasi, oggetti e alcuni affreschi trovati ad Akrotiri, in sale fresche e silenziose. È perfetto per un pomeriggio caldo. Dopo andiamo a prenderci un caffè e un bicchiere d’acqua."],
["Com’è la vita a Fira?","La mattina i negozi aprono tardi e a mezzogiorno il caldo spazza via tutti. La sera si riempie: i gioiellieri, i caffè sul bordo del precipizio, la passeggiata. D’inverno è un paese vero, di gente che si conosce: ci si saluta per nome e si discute del vento."],
["Dove vado dopo?","Scendi al porto e sali su una barca per il vulcano: parte da lì e dura un paio d’ore. Ti aspetta il capitano Antonis, che parla del vulcano come se fosse suo zio. Porta un cappello e scarpe da camminare, niente infradito."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e bevi un po’ d’acqua prima di scendere: la scala è lunga e l’ombra è poca. Se ripassi di qui, saluta il mio mulo preferito: si chiama Kostas ed è il più saggio di tutti. Ela, siga siga, e buon vento!"]
],
sn_antonis:[
["Chi sei e che fai?","Antonis, cinquantotto anni, capitano. Porto la gente dal Porto Vecchio al vulcano da trent’anni, con questa barca di legno. Il mare lo conosco come casa mia; il vulcano come un parente di cui non ti fidi del tutto."],
["Perché si chiamano Kameni?","Kameni vuol dire \"bruciata\": Nea Kameni è la \"nuova bruciata\", Palea Kameni la \"vecchia bruciata\". Sono due isole di lava nera al centro della grande baia, la caldera. Sono nate poco a poco, da tante piccole eruzioni, molte sott’acqua."],
["Quando è nata Nea Kameni?","Si è formata fra il 1707 e il 1711, con esplosioni e colate di lava: prima, lì, c’era solo mare. Poi, nel Novecento, ci sono state altre eruzioni, e l’ultima è stata nel 1950, fra gennaio e febbraio. Mio nonno diceva che da bambino sentì il fumo e l’odore fino a casa."],
["Com’è nata la caldera?","Dalla grande eruzione minoica di circa 3.600 anni fa: un buco enorme, di circa 12 chilometri per 7, con pareti alte 300 metri. Dal mare la parete è un libro aperto: strati rossi, neri, grigi e bianchi, uno sopra l’altro. E in cima, come un merletto, le case bianche."],
["Come si visita il vulcano?","Sbarchiamo e saliamo a piedi per un sentiero di lava nera: in tutto, fra salita, discesa e foto, ci vuole circa un’ora e un quarto. In cima ci sono i crateri: da alcune fessure esce vapore caldo, c’è un forte odore di zolfo, e in certi punti la roccia scotta. Non allontanarti dal sentiero e non toccare: il vulcano non è un museo."],
["Il vulcano è pericoloso?","È dormiente, non spento: oggi ci sono solo fumarole e sorgenti calde, e i vulcanologi lo controllano ogni giorno con gli strumenti. Tra metà 2024 e inizio 2025 la zona ha avuto uno sciame sismico notevole, e noi marinai ce ne siamo accorti. Per questo qui si rispettano i sentieri e si ascoltano le autorità."],
["E le sorgenti calde?","Ci fermiamo a Palea Kameni, nella baia di Agios Nikolaos: l’acqua è tiepida, sui 30-35 gradi, e color giallo-arancio per il ferro e lo zolfo. Getto l’ancora al largo e si nuota per una trentina di metri fino alla baia. Portate costumi scuri: quelli chiari si macchiano."],
["Che isole ci sono qui intorno?","Intorno al vulcano c’è un anello: Santorini, la più grande, Thirasia sull’altro lato e Aspronisi, \"isola bianca\", un piccolo scoglio chiaro. Una volta erano un’unica isola tonda, che gli antichi Greci chiamavano Strongyle, \"la rotonda\". Poi un giorno si ruppe, e noi navighiamo dentro."],
["Cos’è il meltemi per un capitano?","Il capo. A luglio e ad agosto, se soffia forte, le gite si fanno più brevi o saltano del tutto. Io ascolto il vento prima del bollettino: una bella giornata di mare vale più di mille euro, ma è il vento a comandare."],
["Hai delle abitudini a bordo?","Sul timone ho il mati, l’amuleto a forma d’occhio blu, contro il malocchio. Prima di partire controllo le cime, il motore e il cielo, in questo ordine. Il mare non è un nemico, ma non è un cliente da imbrogliare."],
["Dove vado dopo?","Ti riporto al Porto Vecchio; poi, a nord, a pochi chilometri sul bordo della caldera, c’è Imerovigli. Lì ti aspetta Eleni, che ha una casa-grotta e una vista che vale più di tutto il mio caicco. Al tramonto il sentiero lungo il ciglio è più bello che mai."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando guarderai la caldera dall’alto ricordati che l’hai già vista da dentro. Se ripassi, ti porto a vedere il tramonto dal mare. Kalo taxidi, e buon vento in poppa!"]
],
sn_eleni:[
["Chi sei e che fai?","Eleni, quarantaquattro anni, nata a Imerovigli. Ho un piccolo albergo in una casa-grotta di famiglia: otto camere, una cucina, e un gatto che non paga e comanda. Mi alzo alle sei, apro le tende, preparo la colazione, e alle undici sono già stanca come una portatrice di sacchi."],
["Cos’è una casa-grotta?","Una casa scavata nella roccia tenera di cenere e pomice, sul fianco della caldera: ha il tetto a volta e i muri spessi. D’estate resta fresca, d’inverno tiepida: la natura è il miglior condizionatore. Una volta ci abitavano marinai e contadini; oggi sono camere di lusso, e i nonni ridono."],
["Com’è stato il terremoto del 1956?","Un terremoto fortissimo, fra i più forti del Novecento in Grecia, che danneggiò gravemente l’isola: molti edifici crollarono e tanti abitanti se ne andarono. Si dice che le case-grotta, scavate nella roccia, abbiano resistito meglio di molte altre. Mia nonna ne parla ancora a bassa voce."],
["Cosa vuol dire Imerovigli?","Il nome richiama una torre di guardia: Imerovigli sta nel punto più alto del bordo della caldera, a circa 300 metri, e la chiamano \"il balcone dell’Egeo\". Da qui si vede tutto: il vulcano, le isole, Fira a sud e Oia a nord. A me piace dire che è il posto migliore dell’isola, e che Oia è invidiosa."],
["Cos’è la roccia di Skaros?","Era il centro dell’isola, con un castello veneziano costruito nel Duecento: poi i terremoti lo fecero crollare e la gente si spostò. Oggi ci arrivi con un sentiero a gradini che parte dalla chiesetta di Agios Georgios, in una decina di minuti. In cima restano pietre, vento e un silenzio enorme."],
["E le cupole blu?","Sono chiesette ortodosse imbiancate a calce, con la cupola dipinta di blu: la più fotografata è quella dell’Anastasi, la Resurrezione, qui in paese. Sulla roccia di Skaros c’è la cappella di Panagia Theoskepasti, \"la Madonna protetta da Dio\". Si imbiancano ogni primavera, prima di Pasqua."],
["Cos’è il sentiero lungo la caldera?","Il sentiero che corre lungo il ciglio e unisce Fira a Oia: circa dieci chilometri, e passa proprio davanti alla mia terrazza. Si fa in qualche ora, meglio la mattina presto o nel tardo pomeriggio, con scarpe buone e acqua. Mi stupisco ancora di quanta gente lo faccia in infradito."],
["Com’è la tua giornata?","Lenzuola, asciugamani, colazione con yogurt e miele e il pane del forno, richieste strane: «scusi, il tramonto è compreso?». Rispondo sempre di sì, ci mancherebbe. D’estate il vento porta via i tovaglioli, e io ne compro a scatoloni."],
["C’è acqua a sufficienza?","L’acqua a Santorini è un tema: piove poco, e per secoli le case hanno raccolto la pioggia in cisterne scavate nella roccia. Oggi in buona parte arriva dal mare dissalato, e ogni goccia si conta. Quando ti dico di fare la doccia breve non sto scherzando, Pierpaolo."],
["E d’inverno?","D’inverno Imerovigli è un’altra: molti alberghi chiudono, restano i residenti, le chiesette, le nuvole basse sulla caldera. Si accende il camino, si fa il pane, si aspettano i giorni di sole. A volte il mare è così grigio che sembra un’altra isola."],
["Dove vado dopo?","A nord, a Oia: un paio d’ore di cammino lungo il bordo, oppure un autobus. Al tramonto c’è un’onda di gente e, più in basso, nel porticciolo di Ammoudi, c’è Stavros, che pesca da quando aveva sette anni. Se ci arrivi a piedi, puoi dire di aver attraversato mezza Santorini."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e non perderti il momento in cui il sole tocca il mare: dura poco ed è la cosa più generosa che Santorini ti dia. Se hai fame, chiedi un po’ di fava e un bicchiere di assyrtiko. Kalo vradi, agapi mou, e buon cammino!"]
],
sn_stavros:[
["Chi sei e che fai?","Stavros, sessantatré anni, nato a Oia. Pesco da quando uscivo con mio padre alle quattro del mattino. Barca piccola, rete e canna: il resto lo fa il mare. A volte lo fa bene, a volte no."],
["Quanto è lunga la scala?","Per arrivare ad Ammoudi dal paese si scende una lunga scalinata: sono circa trecento gradini, c’è chi dice duecentoquattordici, e dipende dalla fatica. Una volta i muli portavano su il pesce e giù le cassette; oggi li usano anche per portare la gente, ma io preferisco i miei piedi. Scendere è facile: è risalire che fa ricordare i peccati."],
["Com’è il porticciolo?","Ammoudi è il porto di Oia, giù sotto la scogliera: un molo, qualche barca colorata, e tre taverne di pesce una accanto all’altra. La sera i tavoli sono a un passo dall’acqua: il pesce che mangi è stato pescato qualche ora prima. Se non trovi posto, aspetta: non sei il primo."],
["Cosa si mangia qui?","Triglie, sarde, calamari, polpo alla brace: si grigliano con olio, limone e origano. Il polpo si lascia asciugare al sole sulle corde, così diventa più saporito. Con un po’ di fava, pomodorini e un bicchiere di assyrtiko non serve altro. Kali orexi!"],
["Com’era Oia in passato?","Un paese di marinai: nell’Ottocento aveva una flotta di velieri, più di cento, che commerciava nel Mediterraneo orientale, fino ad Alessandria e alla Russia. I capitani si costruirono grandi case a due piani, le case dei capitani, sul punto più alto del paese. In una di queste c’è oggi il Museo della Marina, con modelli di navi e figure di prua."],
["E il cantiere navale?","Qui sotto, nella baia di Armeni, c’era un cantiere dove si costruivano e si riparavano i velieri. Poi arrivarono le navi a vapore, il commercio si spostò verso il Pireo e molti marinai di Oia cambiarono vita. Il mare è rimasto, ma il lavoro è un altro."],
["E il terremoto del 1956?","Il terremoto distrusse parte del paese, la gente fuggì, e anche il castello andò in gran parte giù: oggi ne restano il basamento della torre e un po’ di mura. Mio padre ne parlava a voce bassa. Dopo, Oia è rinata a poco a poco."],
["Com’è il tramonto?","Famoso in tutto il mondo: la gente sale al castello, sui muretti, sulle terrazze, ore prima, e quando il sole tocca il mare qualcuno applaude. Io lo guardo da qui sotto, tranquillo: non c’è coda per il mare. Sul far della sera tutto diventa rosa, poi viola, poi blu, e quando si accendono le luci comincia un’altra Oia."],
["Cosa sono quelle cupole blu?","Chiesette ortodosse imbiancate a calce, con la cupola dipinta di blu, come Agios Nikolaos e Panagia Platsani. San Nicola è il protettore dei marinai: sulla mia barca ho la sua icona, accanto a un coltello e a un pezzo di pane. Prima di uscire mi faccio il segno della croce."],
["Com’è la vita di un pescatore?","Esco prima dell’alba, tiro le reti, torno, pulisco il pesce, ripasso le reti con l’ago: il resto della giornata aggiusto, aspetto, chiacchiero al kafeneion. Il pescato non è più quello di una volta: il mare è cambiato e il lavoro è duro, ma non lo cambierei. Se un giorno non vado in mare, sto male."],
["Cosa mi consigli di fare qui?","Fai un tuffo dal molo o dalle rocce: l’acqua è profonda, pulita e un po’ fresca. Occhio ai ricci di mare sugli scogli: sono dispettosi. E poi risali con calma, quando il cielo è ancora chiaro: i gradini al buio sono un’altra faccenda."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e guarda il mare: quando l’ultima luce lascia l’acqua, la strada non finisce, si trasforma. Io sono qui domani all’alba, come tutti i giorni. Opa, ela, stin ygeia mas, e buonanotte!"]
]
};
Object.assign(TOPX,TOPX_SN);
})();
