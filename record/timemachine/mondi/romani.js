/* ---------- ROMA ANTICA · Dai sette colli alle luci dell'impero (Tevere, Foro Romano, Palatino, Fori Imperiali, Colosseo, Circo Massimo, Terme di Caracalla, insulae e Pantheon) ---------- */
/* Un'intera giornata da sinistra a destra, e un tempo che si piega (quasi mille anni in una sola giornata): alba sul Tevere, mattina nel Foro Romano della Repubblica,
   tarda mattina sul Palatino di Augusto, mezzogiorno nei Fori Imperiali e nei Mercati di Traiano, primo pomeriggio al Colosseo, pomeriggio al Circo Massimo,
   tardo pomeriggio alle Terme di Caracalla, notte fra le insulae, i vigili e il Pantheon. In fondo c'è il raggio di luna che scende dall'oculo del Pantheon: lì il motore mette il varco.
   Testi, tappe e dialoghi vengono da romani.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico). Gli oggetti stanno in elementi.js (nomi che iniziano per "ra").
   Il tono per i temi dolorosi (schiavitù, giochi dell'arena, esecuzioni, guerre civili, incendi) è sobrio e rispettoso; tradizioni e questioni discusse sono presentate con "si dice" o "secondo la tradizione", come nella scheda. */
(function(){
const GT=372,W1=26200;
const P=PR._ra,G=PR._gr,A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {nf,rm,tg,rfolla,mur,tetto,colc}=P;
const {ln,cip,pino,plat,lauro,capra,pecora,asino,cane,cavallo,bue,gatto,torcia,pila,fumo,anf,giara}=G;
const md=(i,n)=>((i%n)+n)%n;
const Z=[0,2900,5800,8800,11800,15500,18500,22300,26600];   /* inizio di ognuna delle 8 zone */
const INT=24850;   /* da qui in poi si è dentro il Pantheon */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* ---- cielo: alba rosa e argentea, mattina dorata, tarda mattina, mezzogiorno bianco, primo pomeriggio dorato, pomeriggio ambrato, tardo pomeriggio arancione e rosato, tramonto, notte stellata ---- */
const SKY=[[0,['#7a88b8','#f2b4bc','#ffd8b0']],[1300,['#6aa8e8','#c0dcf0','#f8ecd8']],[2900,['#4a9ced','#9cd0f6','#f6f0dc']],[5800,['#3a94ea','#8cc8f2','#f2f6f0']],[8800,['#2f86e6','#86bef0','#f0f6fa']],[11800,['#3a88e0','#98c4ea','#f8f0d4']],[15500,['#4a86d0','#b4c0d8','#fbe0a8']],[18500,['#5a78c0','#e8a890','#ffc080']],[21000,['#6a5cb0','#f08a78','#ffb070']],[22300,['#3a3a8a','#8a5aa0','#f08a70']],[23200,['#14205a','#2a3a80','#4a4a96']],[24400,['#060e3a','#101e66','#2a3480']],[26700,['#04082e','#0c1858','#202c70']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,6*s);el(g,c,x-18*s,y+2*s,22*s,5*s);el(g,c,x+20*s,y+2*s,24*s,5*s)};
const INTRO="Roma antica, dall’alba alla notte. Parti dal Tevere, dove tutto comincia: il fiume, le barche, e secondo la tradizione due gemelli e una lupa; poi il Foro Romano, dove un avvocato famoso parla davanti a tutti, e il Palatino, dove vive il primo imperatore. A mezzogiorno i Fori di Traiano, con la colonna che racconta una guerra; nel primo pomeriggio il Colosseo, e subito dopo il Circo Massimo, dove i carri corrono sette giri. Nel tardo pomeriggio le Terme di Caracalla, fra vapore e conversazioni; e di notte le vie buie, le ronde dei vigili e il Pantheon, con la sua cupola aperta sulle stelle. Il tempo qui si piega: consoli, architetti, gladiatori e barcaioli di ogni epoca ti vengono incontro.";
const LKTXT=[
"Il Tevere nasce negli Appennini e dopo circa quattrocento chilometri arriva al mare. Roma sorge dove il fiume si può guadare, accanto a un’isola, fra colli facili da difendere: un posto ideale per i commerci, ma anche per le piene, che in certi inverni allagano le zone basse della città.",
"Secondo la tradizione, i gemelli Romolo e Remo, abbandonati nel fiume, furono allattati da una lupa e cresciuti da un pastore; Romolo avrebbe fondato la città sul Palatino il 21 aprile del 753 a.C., dopo un litigio con il fratello su chi dovesse comandare. Gli studiosi pensano che Roma sia nata dall’unione di più villaggi sui colli: il Palatino, il Campidoglio, il Quirinale, il Viminale, l’Esquilino, il Celio e l’Aventino.",
"Alla foce di un grande canale sotterraneo si apre un arco di pietra: è la Cloaca Maxima, la \"grande fogna\", che secondo la tradizione fu costruita al tempo dei re per prosciugare la valle fra i colli, dove oggi sorge il Foro. Molti secoli dopo è ancora in funzione, rifatta e rinforzata più volte.",
"Nel porto arrivano olio, vino, grano, pesce salato, marmo e legname da tutto il Mediterraneo. L’olio della Spagna viaggia in anfore panciute che si usano una volta sola: quelle rotte, accatastate per ordine, formano una collina artificiale alta come un palazzo, il Monte Testaccio, che secondo gli studiosi contiene i resti di circa cinquantatré milioni di anfore.",
"Il Foro è la piazza principale della città, nata in una valle bonificata dalla grande fogna. Qui si tengono mercati, processi, riunioni politiche, cerimonie religiose, e passano i cortei dei trionfi: tutta la vita pubblica di Roma sta in poche centinaia di passi.",
"Il Senato è l’assemblea degli ex magistrati, i cittadini più esperti, e si riunisce nella Curia. Ogni anno i cittadini eleggono due consoli che governano insieme: nessuno deve comandare da solo. Sulle insegne e sui monumenti compare la sigla SPQR, \"il Senato e il popolo romano\".",
"I Rostri sono la tribuna da cui parlano gli oratori e i magistrati davanti al popolo. Il nome viene dai \"rostri\", le punte di bronzo delle navi nemiche prese ad Anzio nel 338 a.C., che furono appese sulla facciata della piattaforma come trofeo.",
"Nel piccolo tempio rotondo di Vesta arde un fuoco che non deve mai spegnersi: simbolo della vita stessa di Roma. Lo custodiscono sei sacerdotesse, le Vestali, scelte da bambine, che servono per trent’anni e godono di grandi onori e di regole molto severe.",
"Il Palatino è il colle dove, secondo la tradizione, nasce Roma, e dove vivono i cittadini più potenti: dal suo nome, più tardi, deriverà la parola \"palazzo\". Qui abita anche Augusto, che il popolo chiama \"primo cittadino\".",
"Secondo lo storico Svetonio, Augusto viveva in una casa non molto grande e senza lusso, e dormì per quarant’anni nella stessa camera. Poco lontano, la casa di sua moglie Livia ha stanze affrescate con colori vivi: rosso, giallo, nero, con giardini e paesaggi dipinti.",
"Augusto si vantava, dice Svetonio, di aver trovato Roma di mattoni e di averla lasciata di marmo. È vero che durante il suo principato si costruiscono e si restaurano decine di templi e di edifici pubblici, usando il marmo bianco delle cave di Luni, vicino a Carrara. Nel suo elenco di imprese ne ricorda ottantadue solo restaurati in un anno.",
"Nel 13 a.C. il Senato decide di costruire un altare alla Pace, dedicato nel 9 a.C.: un recinto di marmo con processioni di senatori, sacerdoti e familiari scolpite sulle pareti e con motivi di foglie e fiori. Poco distante Augusto ha fatto costruire il suo mausoleo, un grande tumulo rotondo con alberi sempreverdi; davanti saranno esposte, incise su lastre di bronzo, le sue Res Gestae, cioè \"le cose compiute\".",
"Dopo due guerre contro i Daci (101-102 e 105-106 d.C.), nell’attuale Romania, l’imperatore Traiano costruisce il più grande dei fori imperiali, inaugurato intorno al 112 d.C. Per fargli posto si scava una parte del colle che univa il Campidoglio al Quirinale, e il progetto è attribuito all’architetto Apollodoro di Damasco.",
"La Basilica Ulpia, dal nome della famiglia di Traiano, è un grande edificio coperto con cinque navate, dove si discutono cause, si fanno affari e ci si ripara dal sole. Ai lati della colonna ci sono due biblioteche, una per i libri latini e una per quelli greci.",
"La colonna, inaugurata nel 113 d.C., è alta circa trentotto metri con il basamento e porta una striscia scolpita a spirale lunga quasi duecento metri, con più di duemilacinquecento figure. Racconta le due guerre contro i Daci: soldati che costruiscono un accampamento e un ponte, battaglie, discorsi dell’imperatore. All’interno una scala a chiocciola di 185 gradini sale fino in cima.",
"Scavati nel fianco del colle, i Mercati di Traiano sono un grande edificio a più livelli, con decine di botteghe con volte di mattoni, una strada coperta e una grande sala con le volte a crociera. Gli studiosi discutono se fossero un vero mercato o la sede di uffici dell’amministrazione, ma certamente qui si vendevano olio, frutta, fiori, spezie e pesce.",
"L’anfiteatro dei Flavi, il futuro Colosseo, sorge dove un tempo c’era un lago artificiale del parco della reggia di Nerone. Costruito sotto Vespasiano e inaugurato nell’80 d.C. sotto Tito con giochi, secondo le fonti, di cento giorni, può contenere tra i quarantacinquemila e i sessantamila spettatori. Il suo nome moderno viene forse dalla grande statua colossale che gli stava vicino.",
"Per riparare gli spettatori dal sole e dalla pioggia, sulla sommità si tende un enorme telone, il velarium, sostenuto da un reticolo di funi e di pulegge e manovrato da marinai esperti. È uno dei primi sistemi di copertura mobile che si conoscano.",
"L’arena, lunga circa settantasei metri e larga quarantasei, ha un pavimento di legno coperto di sabbia, in latino harena. Sotto, al tempo di Domiziano, si costruisce una rete di corridoi, gabbie e montacarichi dove si preparano animali, scenografie e combattenti.",
"I gladiatori si allenano nelle scuole, i ludi. Accanto al Colosseo c’è il Ludus Magnus, costruito da Domiziano, collegato all’arena da un passaggio sotterraneo: i combattenti entrano senza passare dalla strada. Molti sono schiavi o prigionieri, altri sono liberi che firmano un contratto.",
"La giornata comincia con la caccia agli animali, a mezzogiorno si tengono le esecuzioni dei condannati, nel pomeriggio ci sono i gladiatori. Il pubblico è disposto per rango, dai senatori in basso al popolo più in alto. È una tradizione romana difficile da guardare con occhi di oggi: va raccontata con sobrietà.",
"Il Circo Massimo sorge nella valle fra il Palatino e l’Aventino, e secondo la tradizione le corse risalgono al tempo dei re. Dopo molti incendi viene ricostruito quasi del tutto sotto Traiano. Le fonti antiche parlano di duecentocinquantamila spettatori; gli studiosi moderni propongono numeri più bassi, ma resta il più grande edificio per spettacoli della storia romana.",
"All’inizio della pista ci sono dodici cancelli, le carceres, da cui partono contemporaneamente fino a dodici carri. Il magistrato che presiede i giochi dà il via lasciando cadere un panno bianco dal palco; poi i carri fanno sette giri intorno alla barriera centrale.",
"La barriera al centro, la spina, è una lunga piattaforma con altari, statue, fontane e un obelisco egizio portato da Augusto; a ogni estremità c’è una meta di tre colonne coniche intorno a cui i carri girano. Per contare i giri, sette uova e sette delfini di bronzo si abbassano uno a uno. Le curve sono il punto più pericoloso della corsa.",
"Le squadre sono quattro, distinte da un colore: bianchi, rossi, verdi e azzurri. I tifosi si dividono sulle gradinate secondo il colore e gli aurighi più bravi diventano famosissimi, quasi come divinità: sui muri della città si scrivono i loro nomi, e qualcuno nasconde tavolette di piombo con scritte contro i rivali.",
"Costruite tra il 212 e il 216 d.C. da migliaia di operai, le Terme di Caracalla sono il più grande complesso di bagni pubblici di Roma fino a quel momento, esteso su circa tredici ettari. Ogni giorno vi entrano migliaia di persone, sei-ottomila secondo gli studiosi, e per entrare si paga pochissimo.",
"Si entra in uno spogliatoio, si fa un po’ di ginnastica nella palestra, poi si passa dal bagno caldo (calidarium), dalla stanza tiepida (tepidarium) e infine dal bagno freddo (frigidarium), l’ambiente più grande di tutti, prima di tuffarsi nella piscina scoperta. I Romani si lavano con olio, che poi si raschia via con uno strumento ricurvo.",
"Sotto gli ambienti caldi c’è un mondo nascosto: forni a legna che scaldano l’aria, la quale circola sotto i pavimenti e dentro le pareti, e lunghe gallerie dove passano carri di legna e lavoratori. L’acqua arriva da un ramo speciale dell’acquedotto, costruito apposta per le terme, e viene raccolta in grandi cisterne.",
"Le terme non sono solo bagni: ci sono palestre per fare sport, giardini per passeggiare, biblioteche in greco e in latino e sale per conversare. Fra le rovine, molti secoli dopo, si troveranno celebri statue colossali, come il Toro Farnese e l’Ercole Farnese.",
"Fuori dalle terme ci sono botteghe e taverne con un bancone di muratura e grandi giare incassate: si compra cibo caldo da portare via o da mangiare in piedi, come focacce, lenticchie, salsicce, uova sode, olive, e vino caldo con acqua.",
"La maggior parte dei Romani vive in affitto, nelle insulae: case di più piani, con botteghe al piano terra e appartamenti ai piani superiori, più piccoli e scomodi man mano che si sale. Augusto e poi Traiano stabiliscono altezze massime, circa ventuno e diciotto metri, ma non sempre sono rispettate.",
"Dopo gravi incendi, Augusto crea nel 6 d.C. un corpo di sette coorti di vigili, ciascuna incaricata di due delle quattordici regioni della città: la notte pattugliano le strade, e se scoppia un incendio corrono con secchi, asce e coperte bagnate. Sono insieme pompieri e guardie notturne.",
"Il Pantheon, \"di tutti gli dèi\", fu fatto costruire da Agrippa nel 27 a.C. e ricostruito da Adriano, intorno al 126 d.C., con la forma che vediamo: un grande portico di sedici colonne di granito davanti a una sala rotonda. Sul frontone resta scritto il nome di Agrippa.",
"All’interno il Pantheon è una sfera perfetta: la cupola è larga circa quarantatré metri, esattamente come l’altezza dal pavimento. Ed è in calcestruzzo senza ferro, più sottile e leggero salendo, con un’apertura di circa nove metri in cima, l’oculo, che è l’unica finestra: nei giorni di pioggia, l’acqua cade sul pavimento, che ha piccoli fori per farla scolare.",
"Sotto l’oculo, Roma continua."
];
const NAME={
ra_tito:"Tito, il barcaiolo",
ra_cicerone:"Cicerone, il console",
ra_augusto:"Augusto, il primo imperatore",
ra_apollodoro:"Apollodoro di Damasco, l’architetto",
ra_cresto:"Cresto, il gladiatore",
ra_diocle:"Diocle, l’auriga",
ra_prisca:"Prisca, la taverniera",
ra_sesto:"Sesto, il vigile del fuoco"
};
const GREET={
ra_tito:"Ave, Pierpaolo! Sali pure sulla banchina, ma stai attento ai sacchi: se scivoli, il Tevere ti porta fino al mare. Sono Tito, barcaiolo, e questo fiume è la mia domus da quando ero ragazzo.",
ra_cicerone:"Salve, Pierpaolo! Vieni, vieni, ho cinque minuti prima di un processo e posso usarli per spiegarti Roma. Sono Marco Tullio Cicerone, console di quest’anno: ti accorgerai che parlare è il mio mestiere, e a volte persino il mio svago.",
ra_augusto:"Salve, Pierpaolo. Siediti, la pietra è calda e il mio medico approva. Mi chiamo Gaio Giulio Cesare Ottaviano, ma il Senato ha voluto che mi chiamassero Augusto: non è un nome da conquistatore, è un nome da guardiano, e a me piace così.",
ra_apollodoro:"Chaire, Pierpaolo! Sali con prudenza e non toccare il filo a piombo, che mi serve per la prossima colonna. Sono Apollodoro, di Damasco, architetto di Traiano: questa piazza, questa colonna e quei mercati sono, in buona parte, il mio lavoro.",
ra_cresto:"Ave, Pierpaolo. Non toccare l’elmo: pesa più di quanto sembra. Sono Cresto, murmillo, e fra poco tocca a me: ma ho ancora il tempo di una chiacchiera, e di un sorso d’acqua.",
ra_diocle:"Salve, Pierpaolo. Non passare davanti ai cavalli, che si innervosiscono: sono i miei veri compagni di squadra. Sono Diocle, auriga dei Rossi: sono arrivato da lontano, e oggi sono qui per salutare questa pista che mi ha dato tutto.",
ra_prisca:"Salve, Pierpaolo! Siediti al bancone: oggi ho lenticchie, salsicce e vino caldo, e i bagnanti stanno uscendo affamati. Sono Prisca, libera da quando avevo ventitré anni, e questa taberna è tutta mia.",
ra_sesto:"Ave, Pierpaolo. A quest’ora di solito si dorme, ma io sono di ronda: sono Sesto, vigile, e per fortuna stanotte non ci sono fiamme. Abbassa la voce e cammina piano: i miei sono vicoli in cui i muri sentono tutto."
};

const LX=[400,1100,1800,2500, 3350,4050,4750,5400, 6250,6950,7650,8350, 9250,9950,10650,11350, 12250,12950,13650,14350,15050, 15950,16650,17350,18050, 18950,19650,20350,21050,21750, 22750,23450,24250,25100,25800];

/* ---- livello 0: cielo, sole, luna, stelle, nuvole alte e sottili; nel Pantheon la cupola a cassettoni ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-22800)/1500,0,1);
 if(nt>0)for(let i=0;i<120;i++){const sx=hr(i*3)*480,sy=hr(i*7+1)*310,tw=.5+.5*Math.sin(t*2+i*1.7);dot(g,'rgba(255,252,235,'+(nt*(.35+.55*tw)*(sy<GT-50?1:.35))+')',sx,sy,.7+hr(i)*1.2)}
 const u=cl(xs/22300,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*255;
 if(xs<22900){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*100)+','+Math.round(190-low*130)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*80)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT+4);dot(g,'rgba(255,250,225,.95)',sx,sy,14)}
 const mu=cl((xs-23000)/1500,0,1);if(mu>0){const mx=330-mu*30,my=110-mu*20;dot(g,'rgba(255,248,215,'+.12*mu+')',mx,my,34);dot(g,'rgba(246,240,214,'+mu+')',mx,my,13);dot(g,'rgba(200,196,170,'+.5*mu+')',mx-4,my-3,3.4)}
 const cc=xs<2900?'rgba(252,206,214,.5)':xs<15500?'rgba(255,255,255,.5)':xs<18500?'rgba(255,230,170,.55)':xs<22300?'rgba(255,184,140,.55)':'rgba(140,120,190,.2)';
 each(o-((t*3)%340)*.02,340,1,(x,i,r)=>{if(r>.4)return;nube(g,x+r*100,40+r*60,.9+r*.7,cc)});
 const fo=cl(1-xs/3000,0,1)*.3;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const dust=cl((xs-11800)/1200,0,1)*cl((18000-xs)/1000,0,1)*.14;if(dust>.01){g.fillStyle='rgba(255,208,120,'+dust+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-18800)/1500,0,1)*cl((23400-xs)/900,0,1)*.2;if(wg>.01){g.fillStyle='rgba(255,100,70,'+wg+')';g.fillRect(0,0,480,GT+4)}
 /* dentro il Pantheon: cupola a cassettoni che si restringono verso l'oculo */
 const ic=cl((xs-INT+400)/600,0,1);if(ic>.01){g.save();g.globalAlpha=ic;const ox=350+((W1-480)-cam)*.02,oy=44;
  const dg=g.createLinearGradient(0,0,0,GT+4);dg.addColorStop(0,'#10122c');dg.addColorStop(1,'#3a3244');g.fillStyle=dg;g.fillRect(0,0,480,GT+4);
  for(let r=0;r<7;r++){const rx=60+r*70,ry=22+r*42;for(let q=0;q<22;q++){const a0=Math.PI*(q/22+.0),a1=Math.PI*((q+.86)/22),c=(q+r)%2?'rgba(110,98,120,.55)':'rgba(70,60,86,.6)';g.fillStyle=c;g.beginPath();g.ellipse(ox,oy,rx,ry,0,a0,a1);g.ellipse(ox,oy,rx+54,ry+34,0,a1,a0,true);g.fill()}}
  for(let q=0;q<22;q++){const a=Math.PI*(q+.43)/22;ln(g,'rgba(20,14,30,.5)',1.2,[ox+Math.cos(a)*40,oy+Math.sin(a)*16,ox+Math.cos(a)*520,oy+Math.sin(a)*330])}
  g.restore()}}

/* ---- livello 1: orizzonte lontano per zona: Gianicolo e Tevere, Campidoglio, Palatino e mausoleo, Campidoglio e Colosseo, Celio ed Esquilino, Aventino, acquedotti e Colli Albani, tetti del Campo Marzio e cupola ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(mixs(c,'#c4cce0',.25),'#262a5e',night*.72);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const mont=(sx,w,h,c,seed)=>{g.fillStyle=dim(c);g.beginPath();g.moveTo(sx-w,hz+34);for(let q=0;q<=36;q++){const u=q/36,px=sx-w+u*2*w,hh=h*(Math.sin(u*Math.PI))*(.7+.3*Math.abs(Math.sin(u*7+seed)))+4*Math.sin(u*29+seed);g.lineTo(px,hz+14-hh)}g.lineTo(sx+w,hz+34);g.closePath();g.fill()};
 const lights=(sx,x0,x1,n)=>{if(night>.2)for(let q=0;q<n;q++){const tx=sx+x0+(x1-x0)*q/(n-1);glow(g,tx,hz+8-hr(q)*10,12,'255,180,80',.6*Math.min(1,night+.1));dot(g,'rgba(255,220,140,.95)',tx,hz+8-hr(q)*10,1.3)}};
 const casette=(sx,x0,x1,hh)=>{for(let q=0;q<(x1-x0)/14;q++){const bx=sx+x0+q*14,h2=6+hr(q*3)*hh;rect(g,dim(['#e8dcc0','#d8c8a4','#c8a888','#e4d4b0'][q%4]),bx,hz+16-h2,11,h2+8);poly(g,dim('#b4583a'),[[bx-1,hz+16-h2],[bx+5.5,hz+11-h2],[bx+12,hz+16-h2]])}};
 const arc=(sx,x0,x1,hgt)=>{rect(g,dim('#c8b890'),sx+x0,hz+14-hgt,x1-x0,6);for(let q=0;q<(x1-x0)/16;q++){rect(g,dim('#c8b890'),sx+x0+q*16,hz+14-hgt,12,hgt+8);g.fillStyle=dim('#7a8aa8');g.beginPath();g.arc(sx+x0+q*16+14,hz+22,6,Math.PI,0);g.fill()}};
 /* zona 1: il Gianicolo nella foschia, il fiume e l'isola */
 const a1=env(1400,4600);if(a1>.02){g.globalAlpha=a1;const sx=fx(1400);mont(sx-80,540,100,'#a8a0c0',1.3);mont(sx+320,380,70,'#b4aac8',4.1);casette(sx,-500,-100,22);rect(g,dim('#a0aa6a'),sx-520,hz+18,1040,12);ln(g,dim('#d8d0b8'),2,[sx+120,hz+14,sx+160,hz+14]);for(let q=0;q<5;q++)el(g,'rgba(252,214,222,.4)',sx-300+q*140,hz+8,80,6);g.globalAlpha=1}
 /* zona 2: il Campidoglio con il grande tempio di Giove */
 const a2=env(4400,3600);if(a2>.02){g.globalAlpha=a2;const sx=fx(4400);mont(sx,320,92,'#a89a70',2.2);casette(sx,-300,300,24);rect(g,dim('#f0e8d4'),sx-60,hz-72,120,20);for(let q=0;q<8;q++)rect(g,dim(q%2?'#e8dcc0':'#f6efe0'),sx-56+q*15,hz-84,5,34);poly(g,dim('#f0e8d4'),[[sx-66,hz-84],[sx,hz-102],[sx+66,hz-84]]);poly(g,dim('#d8b070'),[[sx-60,hz-86],[sx,hz-98],[sx+60,hz-86]]);lights(sx,-260,260,8);g.globalAlpha=1}
 /* zona 3: il Palatino con le case e i templi bianchi, in lontananza il mausoleo */
 const a3=env(7300,3600);if(a3>.02){g.globalAlpha=a3;const sx=fx(7300);mont(sx-100,340,80,'#9aa670',3.1);casette(sx,-400,60,34);for(let q=0;q<3;q++){rect(g,dim('#f6f0e0'),sx-300+q*90,hz-14-q*8,44,24);poly(g,dim('#f0e8d4'),[[sx-304+q*90,hz-14-q*8],[sx-278+q*90,hz-26-q*8],[sx-252+q*90,hz-14-q*8]])}
  el(g,dim('#6a8a52'),sx+260,hz+10,70,26);rect(g,dim('#8a7a62'),sx+198,hz+6,124,16);for(let q=0;q<6;q++)cip(g,sx+210+q*20,hz+10,40);g.globalAlpha=1}
 /* zona 4: il Campidoglio e in lontananza il Colosseo */
 const a4=env(10300,3600);if(a4>.02){g.globalAlpha=a4;const sx=fx(10300);mont(sx-200,260,70,'#a89a70',5.2);casette(sx,-460,-100,26);el(g,dim('#d4c298'),sx+240,hz+6,100,22);rect(g,dim('#d4c298'),sx+140,hz+6,200,16);for(let q=0;q<14;q++)rect(g,dim('#6a5a3a'),sx+146+q*14,hz+8,6,12);rect(g,dim('#bfae84'),sx+138,hz,204,5);mont(sx+420,300,50,'#9aaa78',2.7);g.globalAlpha=1}
 /* zona 5: i colli Celio ed Esquilino coperti di edifici */
 const a5=env(13650,4400);if(a5>.02){g.globalAlpha=a5;const sx=fx(13650);mont(sx-260,420,80,'#a8a078',1.9);mont(sx+260,460,96,'#98a672',6.3);casette(sx,-640,640,30);for(let q=0;q<8;q++)cip(g,sx-500+q*140,hz+10,40+hr(q)*20);lights(sx,-600,600,10);g.globalAlpha=1}
 /* zona 6: l'Aventino da una parte, il Palatino con le case sulle terrazze dall'altra */
 const a6=env(17000,3800);if(a6>.02){g.globalAlpha=a6;const sx=fx(17000);mont(sx-280,360,90,'#9aa468',4.4);mont(sx+260,420,110,'#a8a678',7.7);casette(sx,-600,-160,32);casette(sx,60,500,36);lights(sx,-500,500,10);g.globalAlpha=1}
 /* zona 7: le lunghe arcate degli acquedotti e i Colli Albani azzurri */
 const a7=env(20400,4600);if(a7>.02){g.globalAlpha=a7;const sx=fx(20400);mont(sx+60,520,96,'#8aa0c8',2.9);mont(sx-380,300,60,'#9aaace',5.1);arc(sx,-560,260,26);arc(sx,-40,520,22);casette(sx,-700,-580,20);g.globalAlpha=1}
 /* zona 8: la distesa di tetti del Campo Marzio, la cupola del Pantheon, il Colosseo illuminato, il Tevere con le lanterne */
 const a8=env(24200,5200);if(a8>.02){g.globalAlpha=a8;const sx=fx(24200);casette(sx,-640,640,26);rect(g,dim('#2a3a78'),sx-640,hz+18,1280,8);
  g.fillStyle=dim('#9a9488');g.beginPath();g.arc(sx+140,hz+8,34,Math.PI,0);g.fill();rect(g,dim('#8a5a48'),sx+106,hz+6,68,12);
  el(g,dim('#b8a678'),sx-360,hz+6,80,16);rect(g,dim('#b8a678'),sx-440,hz+6,160,12);for(let q=0;q<10;q++)rect(g,'rgba(255,200,110,'+(.4*night+.1)+')',sx-432+q*15,hz+8,5,7);
  lights(sx,-620,620,22);for(let q=0;q<6;q++)glow(g,sx+-560+q*200,hz+20,10,'255,180,80',.5*night);g.globalAlpha=1}}

/* ---- livello 2: magazzini e pioppi, templi bianchi, ville, edifici di mattoni, arcate, giardini, insulae buie ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const wx=cam+x+120,zz=zn(wx);if(wx>INT-200)return;A.setDK(nf(cam+x));
  const tl=(w,hh,c)=>{poly(g,dim(c||'#b4583a'),[[x+6,hz-hh],[x+10+w/2,hz-hh-14],[x+14+w,hz-hh]])};
  const house=(c,hh,ww,roof)=>{rect(g,dim(c),x+10,hz-hh,ww,hh+10);rect(g,'rgba(255,255,255,.14)',x+10,hz-hh,5,hh+10);rect(g,'rgba(0,0,0,.14)',x+10+ww-9,hz-hh,9,hh+10);tl(ww,hh,roof);rect(g,dim('#2a1c10'),x+10+ww*.4,hz-hh*.5,10,hh*.5+10);if(night>.2&&hr(i*7)>.4)rect(g,'rgba(255,214,140,.85)',x+10+ww*.7,hz-hh*.7,5,6)};
  const temp=(c)=>{rect(g,dim(c),x+10,hz-26,76,36);for(let q=0;q<5;q++)rect(g,dim('#f6efe0'),x+14+q*15,hz-30,5,40);poly(g,dim(c),[[x+6,hz-30],[x+48,hz-48],[x+90,hz-30]])};
  if(zz==1){if(r>.7)cip(g,x+60,hz+10,64+r*30);else if(r>.35){rect(g,dim('#a8503a'),x+4,hz-24,110,34);poly(g,dim('#8a4030'),[[x-2,hz-24],[x+59,hz-40],[x+120,hz-24]]);for(let q=0;q<4;q++)rect(g,dim('#2a1810'),x+14+q*26,hz-12,14,22)}else house(['#d49a58','#c88e4e'][md(i,2)],26+r*22,56)}
  else if(zz==2){if(r>.75)temp('#f0e8d4');else if(r>.4)house(['#e8dcc0','#d8c8a4'][md(i,2)],40+r*44,64);else{rect(g,dim('#d4c4a0'),x+4,hz-50,100,60);for(let q=0;q<5;q++)ar(g,dim('#4a3a2a'),x+12+q*18,hz+10,12,26)}}
  else if(zz==3){if(r>.7)cip(g,x+60,hz+10,70+r*40);else if(r>.45)temp('#fbf8f0');else house(['#f6f0e0','#f0e8d8','#e8dcc0'][md(i,3)],36+r*50,62)}
  else if(zz==4){if(r>.75)temp('#f6f0e0');else{rect(g,dim(r>.4?BRKM:'#e0d4b4'),x+6,hz-30-r*30,100,60+r*30);for(let q=0;q<4;q++)ar(g,dim('#2a1810'),x+14+q*24,hz+10,14,22);rect(g,dim('#c8a888'),x+4,hz-34-r*30,104,5)}}
  else if(zz==5){if(r>.75)pino(g,x+60,hz+10,.8+r*.3,t);else{rect(g,dim('#d4c298'),x+4,hz-44-r*26,110,54+r*26);for(let q=0;q<5;q++)ar(g,dim('#2a1c10'),x+10+q*21,hz-8,12,22);for(let q=0;q<5;q++)ar(g,dim('#2a1c10'),x+10+q*21,hz-34-r*26+36,12,22);rect(g,dim('#bfae84'),x+2,hz-46-r*26,114,5)}}
  else if(zz==6){if(r>.8)pino(g,x+60,hz+10,.9,t);else{rect(g,dim('#d8c8a0'),x+4,hz-34-r*14,110,44+r*14);for(let q=0;q<4;q++){ar(g,dim('#2a1c10'),x+10+q*26,hz+10,16,28);rect(g,dim(['#c8402a','#3a9a4a','#2f6ab0','#f4f0e4'][(q+i)%4]),x+8+q*26,hz-18,20,5)}rect(g,dim('#bfae84'),x+2,hz-36-r*14,114,5)}}
  else if(zz==7){if(r>.55)pino(g,x+60,hz+10,.9+r*.4,t);else if(r>.3)cip(g,x+60,hz+10,80);else{rect(g,dim(BRKM),x+6,hz-30-r*50,100,60+r*50);for(let q=0;q<3;q++)ar(g,dim('#2a1810'),x+16+q*30,hz+10,16,30);rect(g,dim('#c8a888'),x+4,hz-34-r*50,104,5)}}
  else{if(r>.8)cip(g,x+60,hz+10,70+r*40);else{const hh=70+r*60;rect(g,dim('#6a4a44'),x+6,hz-hh,96,hh+10);poly(g,dim('#5a3a34'),[[x+2,hz-hh],[x+54,hz-hh-12],[x+106,hz-hh]]);for(let q=0;q<Math.floor(hh/24);q++)for(let s=0;s<3;s++)if(hr(i*9+q*3+s)>.4)rect(g,'rgba(255,200,110,.85)',x+16+s*28,hz-hh+10+q*24,7,10)}}})}
const BRKM='#b8704e';

/* ---- livello 3: le facciate lungo la strada, per zona ---- */
function casaR(g,x,w,h,i,k,o){o=o||{};const y0=GT-h;pila(g,x,GT+6,w,h+6,o.wall||'#e8dcc0',9);if(o.base)rect(g,'#a89a82',x-2,GT-14,w+4,20);tetto(g,x,y0,w,Math.min(40,w*.3),o.roof);
 const rows=Math.max(1,Math.floor((h-36)/34)),cols=Math.max(1,Math.floor((w-16)/32));for(let r=0;r<rows;r++)for(let q=0;q<cols;q++){const wx=x+10+q*(w-20)/cols+((w-20)/cols-9)/2,wy=y0+14+r*34,on=lit(k,i*13+r*5+q);rect(g,'#2a2018',wx-1,wy-1,10,15);rect(g,on?'rgb(255,206,120)':'#4a3a2c',wx,wy,8,13);if(on)glow(g,wx+4,wy+6,16,'255,200,110',.3)}
 if(o.door!==0){ar(g,'#2a1810',x+w*.5-12,GT+4,24,38);rect(g,k>.3?'rgb(255,206,120)':'#5a4430',x+w*.5-7,GT-20,14,22)}}
const lit=(k,i)=>k>.3&&hr(i)>.35;
/* blocco ad arcate di travertino */
function arcb(g,x,w,h,c,n,k){const y0=GT-h;rect(g,c,x,y0,w,h+6);rect(g,'rgba(255,255,255,.1)',x,y0,5,h+6);rect(g,'rgba(0,0,0,.14)',x+w-8,y0,8,h+6);rect(g,'#bfae84',x-2,y0-4,w+4,5);const m=Math.floor(h/46);for(let r=0;r<m;r++)for(let q=0;q<n;q++){const ax=x+8+q*(w-16)/n;ar(g,'#2a1c10',ax,GT+4-r*46,(w-16)/n-8,36);if(r>0&&k>.3&&hr(q+r*3+x)>.5)rect(g,'rgba(255,206,120,.8)',ax+3,GT-r*46-26,(w-16)/n-14,14)}}
const torchF=(g,x,y)=>{ln(g,'#6a4a28',3.4,[x,y,x,y-70]);poly(g,'#8a6a30',[[x-7,y-70],[x+7,y-70],[x+4,y-80],[x-4,y-80]]);const fl=Math.sin(TT*9+x)*1.6;poly(g,'rgba(255,140,40,.95)',[[x-5,y-80],[x,y-100+fl],[x+5,y-80]]);poly(g,'rgba(255,220,100,.95)',[[x-3,y-80],[x,y-92+fl],[x+3,y-80]]);glow(g,x,y-86,60,'255,170,70',.3+.35*A.getDK())};
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3),gap=[.25,.1,.2,.1,.2,.2,.3,.25][st-1];if(r<gap)return;
 if(wx>INT-120){/* interno del Pantheon: parete circolare con nicchie e colonne */
  rect(g,'#8a7a68',x,gt-150,w,156);rect(g,'rgba(0,0,0,.2)',x,gt-150,w,10);for(let q=0;q<3;q++){const nx=x+10+q*56;g.fillStyle=tn('#3a3238');g.beginPath();g.rect(nx,gt-96,36,70);g.arc(nx+18,gt-96,18,Math.PI,0);g.fill()}for(let q=0;q<=2;q++)rect(g,'#b8a898',x+q*56-2,gt-150,6,156);rect(g,'#c8b8a8',x,gt-154,w,6);return}
 if(st==1){if(r>.82){cip(g,x+w*.5,gt+8,110);return}if(r>.7){ln(g,'#4a6a3a',3,[x+w*.5,gt+6,x+w*.5,gt-90]);el(g,'#5a8a44',x+w*.5,gt-96,16,30);return}
  if(r>.45){/* magazzino lungo e basso con tettoia */rect(g,'#2a2230',x+6,gt-64,w-20,70);rect(g,'#a8503a',x+6,gt-64,w-20,70);rect(g,'rgba(0,0,0,.2)',x+6,gt-64,w-20,70);for(let q=0;q<4;q++)ar(g,'#1a1410',x+16+q*(w-60)/4,gt+6,26,40);tetto(g,x+6,gt-64,w-20,22,'#8a4030');for(let q=0;q<3;q++)anf(g,x+w-40+q*10,gt+6,.6);return}
  casaR(g,x+6,w-60,h-50,i,k,{wall:['#d49a58','#c88e4e'][md(i,2)],roof:'#a8503a',base:1});return}
 if(st==2){if(r>.82){stat2(g,x+w*.5,gt+6);return}if(r>.68){cip(g,x+w*.5,gt+8,120);return}
  if(r>.5){/* tempietto con colonne */rect(g,'#3a3040',x+8,gt-80,w-36,86);for(let q=0;q<4;q++)colc(g,x+16+q*(w-52)/3,gt+6,80,10);poly(g,'#f0e8d4',[[x,gt-82],[x+w/2-14,gt-110],[x+w-28,gt-82]]);return}
  arcb(g,x+6,w-40,h-20,['#e4d8b8','#dccca0'][md(i,2)],4,k);return}
 if(st==3){if(r>.8){lauro(g,x+w*.5,gt+6,1.8);return}if(r>.7){cip(g,x+w*.4,gt+8,120);cip(g,x+w*.6,gt+8,100);return}
  if(r>.55){for(let q=0;q<3;q++)rect(g,'#f4f0e4',x+10+q*34,gt-14-q*8,32,14+q*8);return}
  casaR(g,x+6,w-40,h-30,i,k,{wall:['#f6f0e0','#f0e8d8','#e8dcc0'][md(i,3)],roof:'#b4583a',base:1});return}
 if(st==4){if(r>.84){stat2(g,x+w*.5,gt+6);return}if(r>.66){rect(g,'#3a3040',x+6,gt-70,w-30,76);for(let q=0;q<5;q++)colc(g,x+12+q*(w-44)/4,gt+6,70,10);rect(g,'#d4c4a0',x,gt-82,w-18,12);return}
  arcb(g,x+6,w-30,h-10,[BRKM,'#d8c8a0','#c86a48'][md(i,3)],4,k);return}
 if(st==5){if(r>.8){pino(g,x+w*.5,gt+6,1.5,TT);return}if(r>.7){stat2(g,x+w*.5,gt+6);return}arcb(g,x+6,w-30,h,['#dccca0','#d4c298'][md(i,2)],5,k);return}
 if(st==6){if(r>.8){pino(g,x+w*.5,gt+6,1.5,TT);return}
  rect(g,'#d8c8a0',x+6,gt-70,w-30,76);for(let q=0;q<5;q++){const ax=x+14+q*(w-50)/5;ar(g,'#2a1810',ax,gt+6,24,46);rect(g,['#c8402a','#3a9a4a','#2f6ab0','#f4f0e4','#e0c060'][(q+i)%5],ax-2,gt-50,28,6)}rect(g,'#bfae84',x+4,gt-74,w-26,5);return}
 if(st==7){if(r>.7){pino(g,x+w*.5,gt+6,1.6+r*.3,TT);return}if(r>.55){plat(g,x+w*.5,gt+6,1.3,TT);return}if(r>.45){lauro(g,x+w*.5,gt+6,1.8);return}
  rect(g,'#c8b894',x+6,gt-30,w-20,36);rect(g,'#7a6a52',x+6,gt-34,w-20,5);for(let q=0;q<5;q++)rect(g,'#e8dcc0',x+14+q*26,gt-60-r*10,10,30);return}
 if(r>.78){cip(g,x+w*.5,gt+8,130);return}if(r>.66){torchF(g,x+50,gt+6);return}
 casaR(g,x+6,w-30,h+60,i,k,{wall:['#7a4a3a','#8a5a44','#6a4034'][md(i,3)],roof:'#5a2e28',base:0})}
const stat2=(g,x,y)=>{rect(g,'#a89a82',x-20,y-24,40,24);rect(g,'#d8d0bc',x-16,y-28,32,6);poly(g,'#ece6d8',[[x-9,y-28],[x-7,y-80],[x+7,y-80],[x+9,y-28]]);dot(g,'#ece6d8',x,y-88,8)};
function layerStreet(g,o,t){TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>90+hr(i*5)*60,170);each2(180,8,Z[1],Z[2],2,i=>120+hr(i*5)*60,170);each2(180,9,Z[2],Z[3],3,i=>110+hr(i*5)*50,170);each2(180,10,Z[3],Z[4],4,i=>130+hr(i*5)*70,170);
 each2(190,11,Z[4],Z[5],5,i=>140+hr(i*5)*60,170);each2(190,12,Z[5],Z[6],6,i=>90+hr(i*5)*40,170);each2(190,13,Z[6],Z[7],7,i=>100+hr(i*5)*40,170);each2(170,14,Z[7],Z[8],8,i=>120+hr(i*5)*90,160)}

/* ---- suolo: banchine di travertino, lastricato chiaro con la via Sacra, marmo bianco, marmo e mosaici, sabbia, sabbia ambrata, mosaici e ghiaia, basalto nero, marmi policromi ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#b8a888','q'],[Z[1],Z[2],'#d4cab0','f'],[Z[2],Z[3],'#ebe5d6','m'],[Z[3],Z[4],'#e0d8c4','n'],[Z[4],Z[5],'#d8c48e','s'],[Z[5],Z[6],'#d0b070','a'],[Z[6],Z[7],'#cfc4a8','g'],[Z[7],INT,'#3a3a44','b'],[INT,Z[8],'#cfc6b0','p']];
 rect(g,'#e0d4b0',0,gt,480,3);
 const slabs=(x0,x1,ww,cw,rows,rh,k1,k2,seed)=>{for(let r=0;r<rows;r++){const yy=gt+7+r*rh,bw=cw+r*5,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*seed+r*7);rect(g,hh>.65?k1:hh>.3?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,rh-2);rect(g,k2,px+bw-2,yy,2,rh-2)}}};
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0),zw=z[1]-z[0];g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const pz=(q,m)=>z[0]+((q*m)%zw)-cam;
  if(z[3]=='q'){slabs(x0,x1,ww,64,3,22,'rgba(255,255,255,.14)','rgba(40,30,20,.28)',13);for(let q=0;q<60;q++)dot(g,hr(q)>.5?'rgba(120,100,60,.4)':'rgba(255,250,220,.4)',pz(q,37),gt+80+hr(q*5)*70,1+hr(q)*1.6);for(let q=0;q<6;q++)el(g,'rgba(120,130,70,.35)',pz(q,311),gt+100+hr(q)*40,22,4)}
  if(z[3]=='f'){slabs(x0,x1,ww,70,2,22,'rgba(255,255,255,.2)','rgba(60,50,40,.25)',19);for(let r=0;r<3;r++){const yy=gt+56+r*20;rect(g,r%2?'#3a3a44':'#2e2e38',x0,yy,x1-x0,18);const bw=64,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++)rect(g,'rgba(255,255,255,.1)',s0+k*bw+(r*23%bw)-cam,yy,2,18)}for(let q=0;q<50;q++)dot(g,'rgba(120,110,90,.35)',pz(q,29),gt+118+hr(q*5)*30,1.2)}
  if(z[3]=='m'){slabs(x0,x1,ww,84,5,28,'rgba(255,255,255,.3)','rgba(70,60,50,.25)',17);for(let q=0;q<40;q++)dot(g,'rgba(255,240,200,.3)',pz(q,23),gt+8+hr(q*5)*140,1+hr(q)*1.2)}
  if(z[3]=='n'){slabs(x0,x1,ww,76,5,28,'rgba(255,255,255,.24)','rgba(70,60,50,.28)',21);for(let q=0;q<12;q++){const px=pz(q,211),py=gt+30+hr(q)*100;poly(g,['rgba(170,60,50,.3)','rgba(60,110,90,.3)','rgba(200,170,90,.3)'][q%3],[[px,py],[px+16,py+6],[px,py+12],[px-16,py+6]])}}
  if(z[3]=='s'){for(let r=0;r<7;r++)rect(g,r%2?'rgba(160,120,60,.12)':'rgba(255,240,190,.12)',x0,gt+8+r*20,x1-x0,10);for(let q=0;q<170;q++)dot(g,hr(q)>.5?'rgba(255,250,230,.5)':'rgba(140,100,50,.4)',pz(q,25),gt+6+hr(q*5)*144,1+hr(q)*1.4);for(let q=0;q<8;q++)rect(g,'rgba(140,100,50,.2)',pz(q,229),gt+30+hr(q)*100,40+hr(q)*40,3)}
  if(z[3]=='a'){for(let r=0;r<7;r++)rect(g,r%2?'rgba(170,110,40,.14)':'rgba(255,220,150,.12)',x0,gt+8+r*20,x1-x0,10);for(let q=0;q<170;q++)dot(g,hr(q)>.5?'rgba(255,235,190,.5)':'rgba(120,80,30,.45)',pz(q,27),gt+6+hr(q*5)*144,1+hr(q)*1.5);for(let q=0;q<10;q++){const px=pz(q,189),py=gt+20+hr(q)*110;ln(g,'rgba(120,80,30,.4)',2,[px,py,px+50,py+2])}}
  if(z[3]=='g'){slabs(x0,x1,ww,60,2,20,'rgba(255,255,255,.14)','rgba(60,40,30,.25)',23);for(let r=0;r<2;r++)for(let q=0;q<Math.ceil(ww/18)+2;q++){const bw=18,s0=Math.floor((cam+x0)/bw)*bw,px=s0+q*bw-cam;rect(g,(q+r)%2?'#f0ece0':'#2a2420',px,gt+54+r*18,bw,18)}for(let q=0;q<150;q++)dot(g,hr(q)>.5?'rgba(255,255,245,.5)':'rgba(120,100,70,.5)',pz(q,27),gt+96+hr(q*5)*54,1+hr(q)*1.4)}
  if(z[3]=='b'){for(let r=0;r<6;r++){const yy=gt+7+r*24,bw=70+r*8,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*29+r*7);poly(g,hh>.5?'rgba(255,255,255,.06)':'rgba(0,0,0,.16)',[[px+3,yy+2],[px+bw-4,yy],[px+bw-2,yy+21],[px+2,yy+22]]);}}for(let q=0;q<9;q++)el(g,'rgba(80,100,160,.3)',pz(q,271),gt+40+hr(q)*100,26,3)}
  if(z[3]=='p'){const bw=60,s0=Math.floor((cam+x0)/bw)*bw;for(let r=0;r<5;r++)for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam,yy=gt+8+r*28,c=((k+r)%2)?'#b84a38':'#e0d8c4';rect(g,c,px,yy,bw-2,26);rect(g,'rgba(0,0,0,.12)',px+bw-2,yy,2,26);if((k+r)%2==0)dot(g,'rgba(120,70,60,.3)',px+30,yy+13,9)}}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1800,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const sg=cl((cam-18900)/900,0,1)*cl((22600-cam)/900,0,1);if(sg>.02)rect(g,'rgba(255,90,60,'+(.15*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- vita: gabbiani e anatre sul Tevere, rondini, colombe nei portici, falchi, cani, gatti, asini con le ceste, buoi, cavalli, passanti, pipistrelli di notte ---- */
function layerLife(g,o,t){const cam=o,xs=cam+240,hz=GT;
 const bird=(bx,by,s,w,c)=>{g.strokeStyle=c;g.lineWidth=s*1.9;g.beginPath();g.moveTo(bx-9*s,by+w);g.quadraticCurveTo(bx-4*s,by-4*s,bx,by);g.quadraticCurveTo(bx+4*s,by-4*s,bx+9*s,by+w);g.stroke()};
 const gv=cl((3200-xs)/600,0,1)*cl((xs+300)/500,0,1);if(gv>.05)for(let i=0;i<5;i++){const bx=((i*131+t*(24+i*4))%640)-80,by=60+hr(i*3)*110+Math.sin(t*1.6+i*2)*14,w=Math.sin(t*9+i)*3;g.globalAlpha=gv;bird(bx,by,1.1,w,'#f4f4f4');g.globalAlpha=1}
 const rv=cl((xs-2900)/500,0,1)*cl((15500-xs)/600,0,1);if(rv>.05)for(let i=0;i<4;i++){const bx=((i*150+t*(40+i*5))%620)-70,by=100+hr(i*7)*120+Math.sin(t*3+i)*24,w=Math.sin(t*14+i)*3;g.globalAlpha=rv;bird(bx,by,.9,w,'#1a1a26');g.globalAlpha=1}
 const kv=cl((xs-8800)/500,0,1)*cl((14000-xs)/500,0,1);if(kv>.05)for(let i=0;i<3;i++){const bx=((i*260+t*(14+i*3))%640)-80,by=50+hr(i*9)*70+Math.sin(t*.8+i*3)*10;g.globalAlpha=kv;bird(bx,by,1.6,2+Math.sin(t*2+i),'#6a5a4a');g.globalAlpha=1}
 const bn=cl((xs-23200)/800,0,1)*cl((INT+200-xs)/400,0,1);if(bn>.05)for(let i=0;i<5;i++){const bx=((i*97+t*(34+i*3))%560)-40,by=90+hr(i*5)*120+Math.sin(t*5+i)*18,w=Math.sin(t*14+i)*3.4;g.globalAlpha=bn;g.strokeStyle='rgba(10,8,20,.9)';g.lineWidth=2;g.beginPath();g.moveTo(bx-7,by+w);g.lineTo(bx-2,by-2);g.lineTo(bx,by+1);g.lineTo(bx+2,by-2);g.lineTo(bx+7,by+w);g.stroke();g.globalAlpha=1}
 each(o,520,31,(x,i,r)=>{const wx=cam+x,zz=zn(wx);if(wx>INT-100)return;A.setDK(nf(wx));
  if(zz==1&&r<.3){bue(g,x+30,hz+48,.9,t,-1)}
  if(zz>=1&&zz<=8&&r>.3&&r<.4)cane(g,x+60,hz+42,t,['#b8935a','#6a5a48','#d8c8a0'][md(i,3)]);
  if(zz>=2&&zz<=8&&zz!=6&&r>.46&&r<.58)gatto(g,x+80,hz+46,t);
  if((zz==3||zz==7)&&r<.25)pecora(g,x+20,hz+44,1.1,t,1);
  if(zz==6&&r>.6&&r<.7)cavallo(g,x+60,hz+50,.6,t,md(i,2)?1:-1,'#7a5a3a')});
 each(o,430,57,(x,i,r)=>{const wx=cam+x,zz=zn(wx);if(r<.4||wx>INT-100)return;A.setDK(nf(wx));const dir=md(i,2)?1:-1,off=Math.sin(t*.18+i)*70,f=Math.cos(t*.18+i)*dir>0?1:-1;
  if(r>.82&&zz!=8)asino(g,x+off,hz+56,1,t+i,f);else if(md(i,3)==0)tg(g,x+off,hz+54,t+i,{f:f,s:.5,porp:md(i,2)});else rm(g,x+off,hz+54,t+i,{f:f,s:.5,c:['#f0e8d8','#d8c8a8','#b4583a','#2f6ab0','#e0c060','#8a9a6a'][md(i,6)],long:md(i,5)==1,robe:['#f0e8d8','#e0c060','#b4583a'][md(i,3)],skin:['#d0996c','#c88e64','#b87c54'][md(i,3)]})});A.setDK(0);g.globalAlpha=1}

/* ---- personaggi ---- */
const NP=(id,x,o,acc)=>({id,name:NAME[id],x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));const c=q=>tn(o[q]);fig(g,px,y,t,Object.assign({f,s:1},o,{skin:c('skin'),top:c('top'),bot:c('bot'),hair:c('hair'),acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:GREET[id]}}});
const barba=(g,b,col,n,rows)=>{for(let r=0;r<rows;r++)for(let q=r;q<n-r;q++)dot(g,col,-3+q*2.2,-92+b+r*4.6+(q%2)*1.6,3.2)};
const tunica=(g,b,c)=>{poly(g,c,[[-12,-52+b],[12,-52+b],[15,-24],[-15,-24]]);rect(g,'#5a3a22',-12,-54+b,24,5)};
const piedi=(g,c)=>{el(g,c,-4,-1,8,4);el(g,c,8,-1,8,4)};
const togaN=(g,b,porp)=>{poly(g,tn('#ece4d0'),[[-13,-92+b],[-2,-94+b],[15,-60+b],[17,-28],[8,-28],[-3,-62+b]]);poly(g,tn(porp||PORP),[[-2,-94+b],[3,-93+b],[19,-60+b],[17,-55+b]]);rect(g,tn('#d8ceb4'),-14,-30,31,2)};
const PORP='#7a2a5a',GLD='#e0b84a',BRZ='#b8903a';
const npcs=[
 /* Tito: tunica corta di lana grezza, cappello di paglia, mani larghe e callose, cima di corda sulla spalla, pertica, barba corta */
 NP('ra_tito',900,{skin:'#b8845c',top:'#c8b898',bot:'#b8845c',hair:'#2a1a10',s:1.04},(g,b,t)=>{tunica(g,b,'#c8b898');barba(g,b,'#2a1a10',6,1);el(g,tn('#d8c070'),0,-112+b,22,4.6);dot(g,tn('#d8c070'),0,-113+b,9.4);rect(g,tn('#a88a38'),-9.4,-114+b,18.8,2.4);
  g.strokeStyle=tn('#b8a070');g.lineWidth=3;g.beginPath();g.ellipse(-4,-82+b,10,5,.5,0,7);g.stroke();ln(g,'#7a5a30',2.6,[16,-4,26,-170]);piedi(g,'#6a4a2a')}),
 /* Cicerone: toga bianca con bordo di porpora, anello d'oro, fronte alta, capelli radi, tavoletta cerata sotto il braccio, mano che gesticola */
 NP('ra_cicerone',4570,{skin:'#d0a07a',top:'#f4eee0',bot:'#f4eee0',hair:'#7a6a5a',long:1,s:1.0},(g,b,t)=>{togaN(g,b);const w=Math.sin(t*3)*3;ln(g,tn('#d0a07a'),7,[12,-84+b,26+w,-104+b+w]);dot(g,tn(GLD),26+w,-106+b+w,2.4);rect(g,tn('#7a5a30'),-24,-76+b,14,18);rect(g,tn('#e8d8a0'),-22,-74+b,10,13);el(g,tn('#d0a07a'),-3,-114+b,10,4);piedi(g,'#6a4a2a')}),
 /* Augusto: toga semplice con sottile fascia di porpora, ciuffo sulla fronte, occhi chiari, sandali alti, coperta sulle ginocchia */
 NP('ra_augusto',6700,{skin:'#d8aa86',top:'#f4eee0',bot:'#f4eee0',hair:'#9a7a54',long:1,s:.98},(g,b,t)=>{togaN(g,b);poly(g,tn('#8a7a94'),[[-16,-58+b],[16,-56+b],[18,-28],[-18,-28]]);rect(g,tn('#6a5a74'),-16,-58+b,34,3);poly(g,tn('#9a7a54'),[[2,-112+b],[10,-108+b],[4,-104+b]]);dot(g,'#aab8c8',6,-101+b,1.1);piedi(g,'#8a6a3a');rect(g,'#8a6a3a',-8,-6,10,4)}),
 /* Apollodoro: tunica di lino grigio, mantello corto, tavolette di cera sotto il braccio, compasso di bronzo alla cintura, barba corta, mani macchiate di polvere di marmo */
 NP('ra_apollodoro',10560,{skin:'#c8946a',top:'#a8a8a8',bot:'#c8946a',hair:'#2a1a10',s:1.02},(g,b,t)=>{tunica(g,b,'#a8a8a8');poly(g,tn('#7a7a82'),[[-13,-92+b],[-4,-92+b],[0,-66+b],[-16,-60+b]]);barba(g,b,'#2a1a10',6,1);rect(g,tn('#7a5a30'),-24,-78+b,16,10);rect(g,tn('#e8d8a0'),-22,-76+b,12,6);ln(g,tn(BRZ),2,[8,-52,12,-38]);ln(g,tn(BRZ),2,[8,-52,4,-38]);ln(g,'#c8c8c0',3,[12,-84+b,18,-60]);piedi(g,'#6a4a2a')}),
 /* Cresto: tunica corta, fasce di cuoio sul braccio e sulla gamba, spalle larghe, cicatrici, capelli corti, elmo con cresta a pesce sotto il braccio */
 NP('ra_cresto',14050,{skin:'#c08660',top:'#d8c8a0',bot:'#c08660',hair:'#1a120c',s:1.1},(g,b,t)=>{tunica(g,b,'#d8c8a0');rect(g,tn('#6a4a28'),-14,-78+b,6,16);rect(g,tn('#6a4a28'),-10,-20,10,10);ln(g,'#9a5a40',1.2,[-12,-70+b,-12,-64+b]);ln(g,'#9a5a40',1.2,[-9,-70+b,-9,-65+b]);
  el(g,tn('#8a8a92'),-18,-70+b,10,8);poly(g,tn('#a8503a'),[[-26,-76+b],[-24,-88+b],[-14,-82+b]]);rect(g,tn(BRZ),-26,-72+b,14,3);piedi(g,'#5a3a22')}),
 /* Diocle: tunica rossa, elmo di cuoio, cinture di cuoio intorno al torace, coltello ricurvo alla cintura, fascia sul capo, ramo di palma */
 NP('ra_diocle',16800,{skin:'#c8946a',top:'#c8402a',bot:'#c8946a',hair:'#2a1a10',s:1.04},(g,b,t)=>{tunica(g,b,'#c8402a');for(let q=0;q<3;q++)rect(g,tn('#6a4a28'),-12,-86+b+q*9,24,3);el(g,tn('#7a5a30'),1,-112+b,12,8);rect(g,tn('#7a5a30'),-11,-111+b,24,3);rect(g,tn('#f4eee0'),-12,-106+b,24,2);ln(g,tn('#b8b8c0'),2.4,[-8,-52,-14,-42,-8,-38]);
  ln(g,'#5a3e22',2,[14,-4,18,-110]);for(let q=0;q<6;q++)el(g,tn(q%2?'#2f7a3a':'#3a8a44'),18+q%2*6,-112+q*8,7,2.6);piedi(g,'#5a3a22')}),
 /* Prisca: tunica lunga color ocra, grembiule di lino, velo sui capelli raccolti, anelli d'argento, mestolo di legno, panno sulla spalla */
 NP('ra_prisca',21650,{skin:'#d8a47c',top:'#c8a050',bot:'#c8a050',hair:'#3a2a1a',long:1,s:.98},(g,b,t)=>{rect(g,tn('#f4eee0'),-11,-70+b,22,40);rect(g,tn('#e8e0cc'),-12,-112+b,24,8);poly(g,tn('#e8e0cc'),[[-12,-110+b],[-18,-86+b],[-8,-92+b]]);rect(g,tn('#e8e0cc'),-13,-90+b,8,22);
  const w=Math.sin(t*2)*4;ln(g,'#6a4a28',2.6,[14,-82+b,28+w,-96]);el(g,tn('#8a6a40'),30+w,-98,6,3.4);dot(g,'#c8c8d0',22,-80+b,1.6);piedi(g,'#6a4a2a')}),
 /* Sesto: tunica corta di lana scura, cintura di cuoio, ascia alla cintura, secchio di cuoio, mantello leggero, lanterna di corno, sandali chiodati */
 NP('ra_sesto',23080,{skin:'#c08a64',top:'#4a3a32',bot:'#c08a64',hair:'#2a1a10',s:1.04},(g,b,t)=>{tunica(g,b,'#4a3a32');rect(g,tn('#6a4a28'),-12,-54+b,24,4);poly(g,tn('#3a3a44'),[[-13,-92+b],[-4,-92+b],[0,-66+b],[-17,-58+b]]);ln(g,'#5a3e22',2.4,[-12,-54,-16,-38]);poly(g,'#9a9aa2',[[-16,-40],[-8,-44],[-10,-34]]);
  rect(g,tn('#6a4a28'),-26,-62,13,16);ln(g,'#3a2a1a',1.4,[-26,-62,-19,-72,-13,-62]);ln(g,'#3a2a1a',1.4,[12,-84+b,22,-70]);rect(g,tn('#3a2a1a'),18,-72,12,16);rect(g,'rgba(255,214,130,.95)',20,-70,8,12);glow(g,24,-64,50,'255,190,90',.6);piedi(g,'#3a2a1a')})
];

/* ---- oggetti lungo il percorso: [nome in elementi.js, posizione nel mondo, parametro] ---- */
const props=[
 /* zona 1 · il Tevere e il porto fluviale */
 ['ratarga',120,'TEVERE'],['racipresso',250,110],['ratevere',400],['rapino',760,1.3],['ralupa',1100],['rabarca',840],['raaltare',1380],['racloaca',1800],['rafontanella',2150,0],['raanfore',2480],['racarro',2830],
 /* zona 2 · il Foro Romano */
 ['ratarga',2990,'FORO ROMANO'],['raforo',3350],['rastatua',3760,1],['racuria',4050],['rabraciere',4400,0],['rarostri',4750],['rastatua',5090,1.1],['ravesta',5400],
 /* zona 3 · il Palatino */
 ['ratarga',5900,'PALATINO'],['rapalatino',6250],['ralauro',6610,1.8],['racasa',6950],['rafontanella',7300,0],['ramarmo',7650],['racipresso',8030,120],['raara',8350],
 /* zona 4 · i Fori Imperiali */
 ['ratarga',8900,'FORI IMPERIALI'],['rafotraiano',9250],['rabasilica',9950],['racolonna',10650],['rafontanella',11000,0],['ramercati',11350],
 /* zona 5 · il Colosseo */
 ['ratarga',11900,'COLOSSEO'],['racolosseo',12250],['ravelario',12950],['raarena',13650],['raludus',14350],['raspalti',15050],
 /* zona 6 · il Circo Massimo */
 ['ratarga',15600,'CIRCO MASSIMO'],['racirco',15950],['racancelli',16650],['raspina',17350],['rafazioni',18050],
 /* zona 7 · le Terme di Caracalla */
 ['ratarga',18600,'TERME'],['raterme',18950],['rabagno',19650],['rasotto',20350],['ragiardini',21050],['rataverna',21750],['rapino',22120,1.4],
 /* zona 8 · le insulae e il Pantheon */
 ['ratarga',22420,'NOTTE'],['rainsulae',22750],['ralanterna',23250],['raronda',23450],['ratorcia',23850,0],['rapantheon',24250],['ratorcia',24640,0],['racupola',25100],['racupola',25640],['ravarco',W1-130]];

const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'anticaroma',name:'Roma antica · Dai sette colli alle luci dell’impero',width:W1,sky:['#7a88b8','#f2b4bc','#ffd8b0'],gt:372,gr:['#a8683e','#7a4a2c'],chord:[196,246.9,293.7,392],amb:'#ffe8c0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerLife)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da romani.txt) --- */
(function(){
const TOPX_RA={
ra_tito:[
["Chi sei e che fai?","Tito, quarantasette anni, barcaiolo. Porto persone e merci da una riva all’altra, e a volte risalgo il fiume carico fino ai magazzini. Mio padre faceva lo stesso mestiere, e anche suo padre: nella nostra famiglia il remo si tramanda come un anello."],
["Com’è il Tevere?","Giallo, lento d’estate e capriccioso d’inverno: quando piove sui monti, sale e allaga il Foro Boario, e allora si lavora con l’acqua alle ginocchia. Nasce negli Appennini e dopo quasi quattrocento chilometri arriva al mare; i poeti lo chiamano \"biondo\". Per me è un buon amicus, ma ogni tanto bisogna perdonargli un po’ di cattivo umore."],
["Come è nata Roma?","Secondo la tradizione, due gemelli, Romolo e Remo, vennero abbandonati sul fiume e allattati da una lupa; Romolo fondò la città sul Palatino il 21 aprile del 753 a.C., dopo un litigio con il fratello su chi dovesse comandare. È una storia che si raccontò molto tempo dopo, e gli studiosi pensano che Roma sia nata dall’unione di vari villaggi sui colli. Ma ogni 21 aprile si fa festa lo stesso, e io brindo con il resto della gente."],
["Cos’è quell’arco di pietra da cui esce l’acqua?","È la Cloaca Maxima, la grande fogna: secondo la tradizione fu costruita al tempo dei re per prosciugare la valle dove poi è nato il Foro. Da allora l’hanno rifatta più volte, e ancora funziona. Dicono che un grande uomo ci sia passato in barca per controllare i lavori: io ci credo, perché qui sotto a volte c’è più acqua che in certi fiumi."],
["E quel ponte di legno?","È il ponte Sublicio, il più antico: il nome viene dai pali, e si racconta che fu costruito senza chiodi di ferro, così da poterlo smontare in fretta. Una leggenda narra che un soldato, Orazio Coclite, lo difese da solo contro un esercito nemico, mentre i compagni lo tagliavano alle sue spalle: poi si gettò nel fiume e tornò a nuoto. Io ci passo sotto ogni giorno e mi ricordo di nuotare bene."],
["Cosa trasportano le barche?","Di tutto: olio, vino, grano, pesce salato, marmo, legname. Le navi grandi si fermano al porto di Ostia, poi le merci salgono a Roma sulle chiatte, che di solito si tirano controcorrente con buoi o uomini che camminano lungo la riva. Un carico di grano d’Africa passa per queste mani prima di diventare pane."],
["Cos’è quella collina di cocci?","È il Monte Testaccio: una collina fatta di anfore rotte, soprattutto quelle dell’olio che arriva dalla Spagna. Le anfore si usano una volta sola, e i cocci si buttano qui, in ordine, con della calce sopra. Gli studiosi diranno che dentro ce ne sono circa cinquantatré milioni: io ne ho sentite rompere abbastanza per crederci."],
["Cosa mangi per colazione?","Pane, formaggio, un po’ di olive e un sorso di vino allungato con acqua; la puls, una polenta di farro, se mia moglie ha tempo. A mezzogiorno qualcosa di freddo: pane, fichi, un uovo. La cena vera la faccio la sera, in casa, con la famiglia."],
["Chi proteggono i vostri dèi?","Ogni casa ha i suoi Lari, piccole statue su un altarino dove si offre un po’ di cibo o di vino; al porto onoriamo Portuno, il dio dei porti, e il Tevere stesso, che si chiama Tiberino. Il 24 giugno, per la festa di Fortuna, molti romani salgono su barche addobbate, scendono lungo il fiume e fanno un pranzo in allegria: io, ovviamente, remo tutto il giorno."],
["Siete organizzati fra di voi?","Sì, in associazioni, i collegia: noi barcaioli abbiamo la nostra, con una cassa comune, un protettore e una festa all’anno con banchetto. Se uno di noi muore, la cassa paga il funerale e qualcuno porta i fiori alla tomba. Un barcaiolo da solo conta poco, ma tutti insieme possiamo bloccare il porto."],
["Dove vado dopo?","Cammina verso il Foro Romano, dove ogni mattina si ritrovano avvocati, giudici e mercanti. Oggi, nel tempo che si piega, è un Foro di circa due secoli fa, e ti troverai davanti a Cicerone: parla in fretta, ma ascolta ancora meglio. Tieni la strada di pietra nera e non ti perdi."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se vedi una barca senza barcaiolo non salirci: di solito significa che il fiume ha già deciso per lei. Se ripassi, ti faccio provare la pertica. Vale, amicus, e remi in acqua!"]
],
ra_cicerone:[
["Chi sei e che fai?","Cicerone, quarantatré anni, avvocato e console della res publica. Sono nato ad Arpino, in una famiglia agiata ma senza antenati in Senato: per questo mi chiamano homo novus, uomo nuovo, e arrivare fin qui è stata una bella impresa. Qui ci si fa strada con la parola, e io ne ho molta."],
["Come funziona la politica a Roma?","Ogni anno si eleggono due consoli che governano insieme, così nessuno comanda da solo; c’è poi il Senato, composto da ex magistrati, e le assemblee del popolo. Un giovane ambizioso segue il cursus honorum: questore, edile, pretore e, se la sorte lo aiuta, console. Il Foro è il luogo dove tutto questo si discute, si vota e a volte si litiga."],
["Come funziona un processo?","Una giuria di cittadini ascolta l’accusa e la difesa, poi vota con tavolette di cera: una lettera per assolvere, una per condannare. Ai discorsi si assegna un tempo misurato con una clessidra ad acqua, e gli avvocati sono chiamati \"patroni\" perché difendono i clienti come dei protettori. In teoria non si pagano, ma ogni favore, si sa, ha la sua memoria."],
["Come hai fatto a diventare famoso?","Nel 70 a.C. accusai Verre, un ex governatore della Sicilia che aveva spremuto la provincia con tasse e furti. Raccolsi le prove sul posto e le portai in tribunale: il difensore si ritirò e Verre lasciò Roma prima della fine. Da allora tutti mi conoscono, e quei discorsi, che chiamano Verrine, li studieranno anche i ragazzi del futuro."],
["Cos’è successo quest’anno con Catilina?","Quest’anno, il 63 a.C., un nobile in rovina, Lucio Sergio Catilina, ha organizzato una congiura per prendere il potere con la forza. L’ho scoperta e l’ho denunciata in Senato; lui ha lasciato Roma per raggiungere i suoi sostenitori in Etruria, dove, si racconterà, morì in battaglia l’anno dopo. È stato il momento più grande e più difficile della mia vita: una pagina dolorosa, che ricordo con sobrietà."],
["Come si diventa oratori?","Si studiano la grammatica, la poesia e la retorica, spesso con maestri greci: io stesso ho studiato ad Atene e a Rodi. Poi si impara a memoria, associando ogni parte del discorso a un luogo di una casa immaginaria, e a usare la voce e i gesti. Parlare bene è un’arte che richiede anni, e ancora più umiltà."],
["Come si veste un cittadino?","Con la toga, un grande mantello di lana bianca che si drappeggia con pazienza: chi si candida la porta più candida del solito, e da questa parola viene \"candidato\". I magistrati hanno un bordo di porpora. Per chi non la sa mettere, ci sono schiavi che aiutano: io ne ho tre, e ogni mattina litigo comunque con la piega."],
["Come inizia la tua giornata?","All’alba, quando i clienti vengono a salutarmi nel mio atrio: è la salutatio, un rito in cui gli amici meno potenti vengono a rendere omaggio al loro patrono e a chiedere aiuto. Poi si va al Foro per processi e affari. A mezzogiorno un pranzo leggero e un riposo, e il pomeriggio per lo studio."],
["Com’è la tua famiglia?","Ho una moglie, Terenzia, una figlia, Tullia, e un figlio piccolo, Marco. In casa mi aiutano schiavi e liberti: Tirone, un mio ex schiavo, scrive i miei discorsi con un sistema di abbreviazioni. Il paterfamilias comanda, ma una buona moglie in una domus romana sa sempre come far valere la sua opinione."],
["Come si scrivono lettere e libri?","Si scrive su rotoli di papiro con una penna di canna e inchiostro nero; le lettere private le portano corrieri, spesso schiavi di fiducia, perché non c’è un servizio postale per i privati. I libri si copiano a mano, e le botteghe dei librai, vicino al Foro, sono un buon posto per i curiosi. Una buona biblioteca, per me, è la stanza più importante della casa."],
["Dove vado dopo?","Sali sul Palatino, il colle dove abitano i potenti. Quest’anno, a settembre, nascerà un bambino di nome Gaio Ottavio: un giorno lo chiameranno Augusto e farà di Roma una città di marmo. Il tempo qui è curioso, ma il Palatino sta lassù, e sei un buon camminatore."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando ti sembrerà che qualcuno parli troppo, ricordati che anch’io sono fatto così. Se ripassi, ti insegno a tenere un discorso in tre minuti. Vale, amicus, e che la tua parola sia sempre meglio di una spada!"]
],
ra_augusto:[
["Chi sei e che fai?","Il primo cittadino di Roma, il princeps, come dicono: in pratica, il suo primo imperatore. Il mio compito, dopo anni di guerre civili, è mantenere la pace e far funzionare la città, le province e l’esercito. Sono vecchio, ma ho ancora molte cose da sistemare."],
["Come sei diventato imperatore?","Ero il pronipote di Giulio Cesare, e quando lui morì, nel 44 a.C., scoprii di essere stato adottato nel suo testamento: avevo appena diciotto anni. Dopo molte guerre contro i suoi nemici e poi contro Marco Antonio, il conflitto finì nel 31 a.C. con la battaglia navale di Azio. Il resto è stato amministrazione, e un po’ di fortuna."],
["Perché ti chiamano Augusto?","Nel 27 a.C. il Senato mi conferì questo titolo, che significa \"venerabile\", quasi sacro. Io rifiutai di farmi chiamare re o dittatore, perché i Romani non amano i re: governo in modo che la repubblica sembri ancora in piedi. È un equilibrio sottile, e a volte mi chiedo se qualcuno lo capirà dopo di me."],
["Com’è la tua casa?","Più semplice di quanto si pensi: secondo Svetonio ho dormito per quarant’anni nella stessa camera, d’estate e d’inverno, e le mie tuniche, se credi a quello che si dice, le tessono mia moglie, mia sorella e mia figlia. Livia, mia moglie, ha una casa vicina con stanze affrescate dai colori magnifici. Una casa frugale ti ricorda che il potere è un lavoro, non un lusso."],
["È vero che hai trasformato Roma?","Si dice che ho trovato una città di mattoni e l’ho lasciata di marmo: è un modo gentile di dire che ho fatto restaurare e costruire moltissimi templi e edifici, usando il marmo bianco di Luni. Abbiamo diviso Roma in quattordici regioni e ripulito le strade e gli acquedotti. Il marmo, però, è la parte meno importante: contano le persone che ci vivono."],
["Cosa sono i vigiles?","Dopo gli incendi che hanno devastato interi quartieri, nel 6 d.C. ho creato un corpo di vigili, divisi in coorti, che di notte pattugliano le strade e intervengono con secchi e asce se scoppia un incendio. Un compito poco glorioso, ma ogni città che vuole durare ne ha bisogno. Molti di loro sono liberti, e dopo il servizio possono diventare cittadini."],
["Cos’è quel recinto di marmo nel Campo Marzio?","È l’Ara Pacis, l’altare della Pace, decretato dal Senato nel 13 a.C. e dedicato nel 9 a.C. Sulle pareti ci sono processioni di senatori, sacerdoti e familiari, con foglie e fiori che parlano di fertilità. Dopo tanti anni di guerra, vedere la pace scolpita nel marmo mi sembra il modo migliore di ricordarla."],
["Come passi la giornata?","Mi sveglio presto e lavoro con i segretari: lettere, decreti, udienze. Faccio un pasto leggero, di solito pane, formaggio e fichi, poi un breve riposo. La sera, a cena con gli amici, mi piace giocare ai dadi, e per i Saturnali organizzo scambi di piccoli regali spiritosi."],
["Hai dato il tuo nome a qualcosa?","Un mese: quello che si chiamava Sestile ora si chiama Agosto, in mio onore. Prima di me, Giulio Cesare aveva dato il suo nome a Luglio, quando riformò il calendario. Così, ogni estate, i Romani passano due mesi con i nomi di due parenti: un onore che non so se merito, ma almeno è facile da ricordare."],
["Come si ricorderà la tua vita?","Sto preparando un elenco delle cose che ho fatto, le Res Gestae: voglio che, dopo la mia morte, venga inciso su lastre di bronzo davanti al mio mausoleo. Dentro ci sono i templi restaurati, le leggi, le feste date al popolo, e un po’ di orgoglio. Non so se la storia sarà d’accordo con ogni riga, ma almeno ho detto la mia."],
["Dove vado dopo?","Attraversa il tempo di circa un secolo: il tuo prossimo incontro è con Apollodoro di Damasco, architetto di Traiano, che ha scavato un colle per fare posto al suo foro. È un uomo che pensa in grande e misura tutto due volte. Segui il rumore dei martelli."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricorda il mio motto: affrettati lentamente. Si fanno più cose così che di corsa. Se ripassi, ti faccio vedere la mia collezione di cose curiose. Vale, amicus, e che la tua strada sia in pace!"]
],
ra_apollodoro:[
["Chi sei e che fai?","Apollodoro, nato a Damasco, in Siria, architetto e ingegnere militare. Progetto edifici, ponti e macchine d’assedio per l’imperatore, e ogni linea che disegno deve reggere, perché se sbagli un angolo, l’errore dura più di te. Parlo greco con i colleghi e un latino da cantiere con gli operai."],
["Qual è stata la tua opera più ardita?","Il ponte sul Danubio, costruito tra il 103 e il 105 d.C. per far passare le legioni verso la Dacia. Venti pile di muratura sostenevano archi di legno, per una lunghezza di oltre un chilometro: per più di mille anni sarà il ponte più lungo del mondo. Lo costruimmo in meno di due anni, con le casse a tenuta per le fondamenta nel fiume."],
["Perché Traiano ha costruito questo foro?","Dopo due guerre contro i Daci, tra il 101 e il 106 d.C., voleva un monumento degno delle sue vittorie, pagato con il bottino della Dacia. Per fargli posto abbiamo dovuto scavare una parte del colle che univa il Campidoglio al Quirinale. Un’iscrizione sul basamento della colonna ricorda quanto è alto il pezzo di montagna che abbiamo tolto."],
["Com’è fatta la Colonna?","Alta cento piedi romani nel fusto, circa trenta metri, e quasi quaranta con il basamento. È composta da grandi blocchi di marmo bianco di Luni, e dentro c’è una scala a chiocciola di centottantacinque gradini. In cima ci sarà la statua dell’imperatore: i miei colleghi dicono che è la colonna più alta che abbiano mai visto."],
["Come si progetta una cosa così?","Con disegni su tavolette, modelli in legno o in cera e molte misure: usiamo il piede romano, circa trenta centimetri, la groma per tracciare angoli retti, il livello d’acqua e il filo a piombo. Ogni parte deve entrare nel disegno generale come una frase nel discorso. Un progetto che non si può spiegare agli operai non è un progetto, è un sogno."],
["Cosa raccontano i rilievi?","Le due guerre contro i Daci, scena dopo scena: soldati che costruiscono un accampamento e un ponte, battaglie, discorsi dell’imperatore, popolazioni che si arrendono. Ci sono più di duemilacinquecento figure, e l’imperatore compare molte volte. È anche propaganda, naturalmente, ma chi legge la spirale con calma impara molto sulle armi, sui vestiti e sui lavori dei soldati."],
["Come si costruisce un edificio così?","Con il calcestruzzo romano, fatto di calce, sabbia vulcanica e pietrisco, che si indurisce anche sott’acqua, rivestito di mattoni, travertino o marmo. Le travi si alzano con gru a ruota, in cui gli uomini camminano come criceti. Un cantiere è una piccola città: carpentieri, scalpellini, muratori, fabbri e uomini che portano acqua."],
["Cos’è la Basilica Ulpia?","Una grande sala coperta, con cinque navate, che prende il nome dalla famiglia di Traiano, gli Ulpii. Ci si discutono cause, si fanno contratti e si passeggia al riparo dal sole e dalla pioggia. Ai due lati si aprono le biblioteche, una latina e una greca: sono il mio angolo preferito."],
["E i Mercati?","Un complesso scavato nel fianco del colle, su più livelli, con botteghe sotto volte di mattoni e una strada coperta. Gli studiosi dicono, e ne discutono, che forse non erano solo un mercato ma anche uffici dell’amministrazione. Ma qui si vendevano olio, frutta, fiori, spezie e pesce, e ogni mattina l’odore ti dice dove sei."],
["Quanti operai servono?","Moltissimi, e di tipi diversi: schiavi, liberi pagati, soldati, specialisti del marmo. Chi lavora sulla colonna lavora in alto, con funi e impalcature: ogni anno qualcuno cade, e se ne parla sottovoce. Un buon architetto si ricorda sempre di quanto pesa il lavoro degli altri."],
["Dove vado dopo?","Verso il Colosseo, poco lontano: lo costruirono i Flavi quando io ero ragazzo, e ancora oggi è la cosa più grande che Roma abbia fatto per il suo popolo. Lì troverai un gladiatore di nome Cresto: ha molto da raccontare, se lo ascolti con rispetto."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricorda che ogni grande edificio nasce da un disegno piccolo. Se ripassi, ti mostro come si costruisce un ponte sull’acqua. Vale, amicus, e che il tuo passo sia sempre ben fondato!"]
],
ra_cresto:[
["Chi sei e che fai?","Cresto, ventinove anni, gladiatore della scuola qui accanto. Sono nato libero a Capua, ma ho accumulato debiti e ho firmato un contratto con un lanista, il capo di una scuola: ho giurato di sopportare fuoco, catene, frustate e spada. Da allora il mio lavoro è combattere, e il mio nome è sui cartelloni."],
["Capua è una città famosa?","Famosissima per i gladiatori: lì, nel 73 a.C., una banda di combattenti scappò da una scuola, guidata da un trace, Spartaco, e per due anni mise in difficoltà gli eserciti di Roma. Quella rivolta finì male, ma da allora i Romani guardano le scuole con più attenzione. Oggi i ludi sono sotto il controllo dell’imperatore."],
["Cos’è il Colosseo?","L’anfiteatro dei Flavi: Vespasiano lo ha cominciato e Tito lo ha inaugurato nell’80 d.C. con giochi che, si racconta, durarono cento giorni. Contiene tra i quarantacinquemila e i sessantamila spettatori, e ha ottanta arcate sul fronte. Quando entri, il rumore ti arriva addosso come una marea."],
["Come ci si allena?","Nel ludus, in celle strette, con un orario preciso. Si mangia molto orzo e legumi, tanto che ci chiamano \"mangiatori d’orzo\", e si dice che qualcuno beva anche una bevanda di cenere vegetale per rinforzare le ossa. Ci si allena con spade di legno più pesanti di quelle vere contro un palo, e un medico controlla ogni ferita."],
["Che tipi di gladiatori ci sono?","Il murmillo, come me, ha un elmo con cresta, uno scudo grande e una spada corta; il reziario combatte con rete e tridente, senza elmo; il trace ha uno scudo piccolo e una spada ricurva. Gli scontri si fanno per coppie, scelte perché le armi siano ben bilanciate. Una buona coppia fa spettacolo, una cattiva fa solo rumore."],
["Come si svolge un combattimento?","C’è un arbitro con un bastone, e musicisti con trombe e un organo ad acqua. Quando uno è ferito, può chiedere la grazia: la decisione spetta a chi organizza i giochi, che ascolta anche il pubblico. Il gesto con il pollice, di cui tutti parlano, nessuno sa davvero come fosse. Non tutti i combattimenti finiscono con una morte, ed è bene che sia così."],
["Come sono i giorni di gioco?","La mattina ci sono le cacce agli animali, a mezzogiorno si eseguono le condanne, nel pomeriggio vengono i gladiatori. Prima si sfila in processione, poi ci si scalda con armi di legno. È un lavoro che bisogna fare con rispetto: per chi guarda e per chi combatte."],
["Si può uscire da questa vita?","Sì: un gladiatore che ha vinto abbastanza e ha il favore del pubblico riceve una spada di legno, la rudis, simbolo di libertà. Alcuni diventano istruttori o guardie del corpo. Sui muri della città si scrivono i nomi dei campioni, e c’è chi sospira per loro: io ne ho visti, di nomi, e anche di sospiri."],
["Com’è il pubblico?","Disposto per rango: senatori in basso, cavalieri sopra, popolo più in alto, donne ancora più su. Ogni posto ha il suo numero e ogni ingresso ha una tessera. Quando fa caldo, il telone si stende sulle gradinate, e ogni tanto si spruzza acqua profumata di zafferano per rinfrescare l’aria."],
["Cosa c’è sotto l’arena?","Un labirinto di corridoi, gabbie e montacarichi, costruito sotto Domiziano. Lì stanno gli animali che arrivano dall’Africa e dall’Asia, le macchine delle scenografie e noi, prima di salire. Da una botola si esce all’improvviso nell’arena, e il sole ti colpisce come uno schiaffo."],
["Dove vado dopo?","Al Circo Massimo, dove corrono i carri: l’altra grande passione dei Romani. Cerca un auriga di nome Diocle: è un campione, e ha una storia che vale la pena di ascoltare. E non scommettere troppo: i bianchi e i verdi hanno più tifosi che buon senso."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se qualcuno ti dice che i gladiatori sono tutti uguali, rispondigli che nessun uomo è uguale a un altro. Se ripassi, ti faccio provare lo scudo. Vale, amicus, e che il tuo avversario sia sempre leale!"]
],
ra_diocle:[
["Chi sei e che fai?","Gaio Appuleio Diocle, auriga della fazione dei Rossi, nato in Lusitania, nella provincia più occidentale dell’impero. Conduco una quadriga, il carro a quattro cavalli, e gareggio qui, nel Circo Massimo, da molti anni. Quasi nessuno resiste così a lungo, e io me ne stupisco ogni mattina."],
["Come hai cominciato?","Avevo diciotto anni, nel 122 d.C., quando esordii a Roma con i Bianchi; la prima vittoria arrivò due anni dopo. Poi passai ai Verdi e infine ai Rossi, dove sono diventato quello che sono. Una buona carriera si costruisce con pazienza, e con un po’ di coraggio."],
["Quante gare hai vinto?","Le iscrizioni dicono: 4257 corse, 1462 vittorie, e quasi tremila volte fra i primi tre. Ho vinto più di cento volte dopo essere partito ultimo, e molte volte la gara più importante, quella subito dopo la processione degli dèi. Non ricordo tutti i numeri, ma i miei tifosi sì."],
["E quanto hai guadagnato?","Trentacinque milioni e ottocentomila sesterzi, più o meno: una cifra enorme, la più alta che un auriga abbia mai guadagnato. Per darti un’idea, un soldato semplice ne guadagna circa milleduecento all’anno. La mia fortuna viene dai premi, e dalla prudenza: non spendo tutto in una notte."],
["Quando ti ritirerai?","A quarantadue anni: ho deciso che dopo questa stagione smetto, e mi ritiro a Preneste, nella mia casa in collina. I miei tifosi e i miei colleghi, mi dicono, faranno scrivere in mio onore un’iscrizione, con tutti i miei numeri e i nomi dei miei cavalli migliori. Mi piace pensare che i miei cavalli saranno ricordati quanto me."],
["Come si corre?","Dodici carri partono insieme dai cancelli quando il magistrato lascia cadere un panno bianco; si fanno sette giri intorno alla spina, curvando più stretto possibile alle mete. Le redini si legano intorno alla vita, così, se cadi, hai un coltello per tagliarle prima di essere trascinato. È un lavoro di tecnica e di sangue freddo: un’esitazione sola, e finisci contro la barriera."],
["Come sono i tuoi cavalli?","Alcuni vengono dalla Spagna, altri dall’Africa, e si scelgono per la velocità e per il carattere. I più famosi si chiamano Cotino, Galata, Lucido, Pompeiano e Abigeo: con loro ho vinto almeno cento corse ciascuno. Un cavallo si cura come un figlio: acqua, orzo, massaggi, e parole gentili al mattino."],
["Perché ci sono quattro colori?","Le fazioni sono quattro: bianchi, rossi, verdi e azzurri, e ognuna ha i suoi tifosi, i suoi stallieri, i suoi veterinari e i suoi fornitori. Anche l’imperatore ha il suo colore preferito. Tra i tifosi più accesi c’è chi scrive maledizioni su tavolette di piombo contro i rivali, ma io preferisco vincere in pista."],
["Com’è il pubblico?","Enorme: le fonti antiche parlano di centinaia di migliaia di spettatori, anche se gli studiosi dubitano. Ognuno porta cuscini e cibo, scommette, urla. In alto, sul Palatino, c’è il palco imperiale, da cui l’imperatore guarda i giochi insieme ai suoi ospiti."],
["Come vive un auriga?","Si allena ogni giorno, si controlla il peso e la schiena, si fa curare da medici e massaggiatori. Molti aurighi muoiono giovani per cadute e incidenti: io sono uno dei fortunati. Il successo ti dà fama e denaro, ma il Circo non perdona nessuno."],
["Dove vado dopo?","Alle Terme di Caracalla, a sud: dopo la corsa tutti i Romani vanno a lavarsi, e anch’io lo faccio. Nel tempo che si piega, sono state costruite settant’anni dopo di me: ma i bagni sono bagni. Cerca una donna di nome Prisca, che tiene una taverna lì davanti."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se fai una corsa, non guardare mai il cavallo del vicino: guarda la meta davanti a te. Se ripassi, ti faccio salire su un carro fermo. Vale, amicus, e che i tuoi cavalli siano sempre in vantaggio!"]
],
ra_prisca:[
["Chi sei e che fai?","Prisca, quarantun anni, ex schiava. La mia padrona, a Roma, mi ha liberata dopo quindici anni di servizio, e ora porto il suo nome di famiglia, come fanno tutte le liberte. Con i miei risparmi ho aperto questo thermopolium, e qui, finalmente, comando io."],
["Cos’è un thermopolium?","Una taverna con un bancone di muratura e grandi giare incassate, da cui si serve cibo caldo da portare via o da mangiare in piedi. Io vendo focacce, lenticchie, salsicce, uova, olive e formaggio, e un vino caldo allungato con acqua che i bagnanti adorano. Il cibo è semplice, ma caldo, e a Roma questo basta."],
["Perché ci sono le terme proprio qui?","Le ha volute l’imperatore Caracalla: i lavori sono cominciati nel 212 d.C. e sono finiti, quasi, nel 216, con migliaia di operai. Chiamarle \"bagni\" è poco: sono un intero quartiere, con palestre, giardini e biblioteche. L’acqua arriva con un ramo speciale dell’acquedotto, costruito apposta, e finora nessuno ha mai visto una vasca vuota."],
["Quanta gente ci va?","Ogni giorno entrano migliaia di persone, sei-ottomila, dicono gli studiosi di domani. Ricchi e poveri, uomini e donne, giovani e vecchi: per entrare si paga una moneta piccolissima, il quadrante, e per i bambini spesso nulla. In certe occasioni, per le feste o per farsi amare, gli imperatori fanno entrare tutti gratis."],
["Quando si va alle terme?","Di solito nel pomeriggio, dopo il lavoro e prima della cena; in estate le terme restano aperte più a lungo. Io apro la taverna all’ora giusta: subito prima dell’uscita, quando i clienti hanno fame e sete. Un buon commerciante conosce le abitudini degli altri meglio delle sue."],
["Come funziona il bagno?","Si lascia il mantello in una nicchia dello spogliatoio, si fa un po’ di ginnastica, si passa dal bagno caldo, dal tiepido e dal freddo, poi ci si tuffa nella piscina. Niente sapone: ci si spalma di olio, che poi si raschia via con uno strumento di bronzo, lo strigile. Chi ha uno schiavo lo manda a portare le ampolle; chi non lo ha, fa da solo."],
["Chi frequenta le terme?","Tutti: senatori, soldati, mercanti, artigiani. Per uomini e donne, a seconda dei periodi, ci sono orari o sale diverse; si racconta che l’imperatore Adriano abbia vietato il bagno misto, ma non tutti rispettano le regole. Le terme sono uno dei pochi posti dove il povero e il ricco, per un’ora, sono quasi uguali."],
["Cosa si fa alle terme oltre al bagno?","Si gioca a palla, ai dadi, si fa ginnastica, ci si fa massaggiare e depilare, si ascoltano musici e poeti, si leggono libri nelle biblioteche e si fanno affari. E si chiacchiera: da noi, la notizia che al Foro è un segreto, qui è già una canzone."],
["Come funzionano i riscaldamenti?","Sotto le sale calde ci sono forni a legna, e l’aria calda circola sotto il pavimento e dentro le pareti. Giù nei sotterranei lavorano uomini che portano la legna con carri, giorno e notte, quasi senza vedere il sole. Per questo i pavimenti sono caldissimi e si portano sandali di legno."],
["Cosa si mangia a Roma?","Al mattino pane e formaggio; a mezzogiorno qualcosa di freddo, pane, frutta e olive; la sera, la cena, con zuppe, legumi, pesce e un po’ di carne. Il condimento più amato è il garum, una salsa di pesce fermentato: puzza, ma dà sapore a tutto. A casa, per la festa, ci vuole un po’ di miele e di datteri."],
["Dove vado dopo?","Quando scende la notte, vai verso il Campo Marzio, dove c’è il Pantheon, il tempio di tutti gli dèi. Le strade sono buie e strette, ma per fortuna ci sono i vigiles: troverai un certo Sesto che fa la ronda. Porta una lanterna e non ti perdi."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando senti odore di focaccia calda, fermati: è il miglior segno che sei nel posto giusto. Se ripassi, ti offro una scodella di lenticchie. Vale, amicus, e buon appetito!"]
],
ra_sesto:[
["Chi sei e che fai?","Sesto, ventinove anni, vigile della coorte di questa zona. Di notte giro per le strade con la lanterna e controllo che nessuno lasci un braciere acceso o una porta aperta. Se scoppia un incendio, siamo i primi ad arrivare con secchi, asce e coperte bagnate."],
["Chi vi ha creati?","L’imperatore Augusto, nel 6 d.C., dopo una serie di incendi gravi. Siamo sette coorti, con circa mille uomini ciascuna, e ogni coorte sorveglia due delle quattordici regioni di Roma; a capo di tutto c’è un prefetto. In pratica siamo pompieri e guardie notturne, e il nostro nome, un giorno, sopravviverà come \"vigili del fuoco\"."],
["Come sono i vostri strumenti?","Secchi di cuoio e di legno, scale a pioli, asce per demolire le case vicine e fermare il fuoco, coperte imbevute d’acqua, pertiche con uncini e anche pompe a mano. Non è tecnologia da museo, ma funziona: la regola d’oro è arrivare presto e non farsi prendere dal panico. Un buon vigile ha le mani pronte e la testa fredda."],
["È vero che Roma ha subito un grande incendio?","Nel 64 d.C., sì: partì dalle botteghe vicino al Circo Massimo e bruciò per giorni, con il vento che spingeva le fiamme da una collina all’altra. Gran parte della città fu distrutta o danneggiata, e le cause furono molto discusse. Dopo, si ricostruì con muri di pietra, strade più larghe e portici, per rendere più difficile la diffusione del fuoco."],
["Come vivono i Romani nelle insulae?","In appartamenti in affitto: botteghe al pianterreno e stanze più su. Più si sale, meno si paga, ma più si fa fatica: scale ripide, niente acqua corrente, fumo di bracieri e rischio di incendio. L’acqua si prende dalle fontanelle all’angolo, e l’altezza massima, con Traiano, è di circa diciotto metri, anche se non tutti rispettano la regola."],
["Com’è la notte a Roma?","Buia e rumorosa: di giorno i carri non possono entrare in città, così arrivano tutti di notte, con un gran fracasso di ruote e di buoi. Se esci, devi portare una lanterna o uno schiavo con una torcia; e attento, perché c’è chi svuota i vasi dalla finestra senza guardare. Un poeta satirico, Giovenale, dice che prima di uscire a cena bisogna fare testamento."],
["Dove si mangia di notte?","Nelle taverne rimaste aperte: vino, lenticchie, dadi e qualche canzone stonata. Se vedi una lampada accesa, di solito è lì che i nottambuli si fermano. I vigili non sono guardie severe: se non c’è disordine, ci sediamo anche noi a mangiare qualcosa."],
["Come funziona l’acqua a Roma?","Con gli acquedotti: undici, che portano l’acqua da sorgenti lontane fino a fontane, terme e case dei ricchi. Il primo fu costruito nel 312 a.C., quasi trecento anni prima di Augusto, e quasi tutto sotto terra: la pendenza è dolce, quasi invisibile. I Romani ne vanno fieri, e fanno bene: le città sono vive finché l’acqua corre."],
["Cos’è il Pantheon?","Il tempio di tutti gli dèi: fu fatto costruire da Agrippa nel 27 a.C. e ricostruito da Adriano, intorno al 126 d.C., con la forma che vedi: un portico di sedici colonne di granito e una grande rotonda. Sul frontone c’è ancora scritto il nome di Agrippa: Adriano non l’ha tolto. Una forma di rispetto, e anche di astuzia."],
["Com’è fatto dentro?","Entra e guarda in alto: la cupola è larga circa quarantatré metri, come l’altezza dal pavimento, e in cima ha un’apertura di nove metri, l’oculo, l’unica finestra. È in calcestruzzo senza ferro, più sottile e leggero salendo; fuori era rivestita di tegole di bronzo. Quando piove, l’acqua entra e scola nei fori del pavimento; quando c’è la luna, un cerchio di luce si muove sul marmo."],
["Dove vado dopo?","Dentro il Pantheon, sotto l’oculo: è lì che finisce la tua giornata. Il varco ti aspetta dove cade la luce della luna. Cammina fino al centro e guarda su: Roma ti accompagna fino a lì."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando senti odore di fumo, prima di scappare guarda da dove viene: la prudenza vale più del coraggio. Se ripassi, ti faccio tenere la lanterna. Vale, amicus, e buona notte!"]
]
};
Object.assign(TOPX,TOPX_RA);
})();
