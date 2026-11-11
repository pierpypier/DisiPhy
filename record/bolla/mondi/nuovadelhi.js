/* ---------- NUOVA DELHI · Dal Gurdwara Bangla Sahib all’India Gate (Gurdwara Bangla Sahib, Connaught Place, Jantar Mantar e la baoli di Agrasen, Raisina Hill e il Rashtrapati Bhavan, Khan Market, la Tomba di Humayun, i Lodhi Gardens, l’India Gate) ---------- */
/* Un'intera giornata da sinistra a destra: alba e canti al Gurdwara Bangla Sahib con la cucina comune che già fuma, mattina fra i portici bianchi di
   Connaught Place, tarda mattina al Jantar Mantar e giù nella baoli, mezzogiorno bianco sulla collina di Raisina, primo pomeriggio a Khan Market,
   tardo pomeriggio fra i giardini della Tomba di Humayun, tramonto ai Lodhi Gardens, notte all'India Gate con le famiglie e il kulfi.
   In fondo, sotto l'arco, c'è il varco.
   Testi, tappe e dialoghi vengono da newdelhi.txt (definitivi, usati senza riscriverli). Gli oggetti stanno in elementi.js (nomi che iniziano per "nd").
   Il tono per i temi delicati (le proteste al Jantar Mantar, la storia delle dinastie, la Partizione a Khan Market) è sempre sobrio, senza prendere posizione. */
(function(){
const GT=372,W1=21400;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln}=PR._rm;
const {nf,lit,dome,bulbo,chh,jali,merli,colon,fin,cond,neem,peepal,gulmohar,ashoka,bouga,fed}=PR._nd;
const md=(i,n)=>((i%n)+n)%n;
const LIT='rgb(255,226,150)';
const Z=[0,2700,5300,8200,10800,13200,15900,18500,W1+400];   /* inizio di ognuna delle 8 zone */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* ---- cielo: alba rosata e dorata, mattina chiara, mezzogiorno bianco di foschia, pomeriggio ambrato, tramonto arancio e viola, sera cobalto, notte ---- */
const SKY=[[0,['#7f8fc4','#f2b4b4','#ffdcb8']],[1300,['#5a98e0','#b4d4ee','#f4ecd4']],[2700,['#4a92e4','#a8d0ee','#f2ecd8']],[5300,['#4a92e0','#a0c8ea','#f0ead4']],[8200,['#5ea0e0','#c8dcee','#faf6ea']],[10800,['#5a98dc','#bcd4ea','#f8efd4']],[13200,['#5290d6','#b4cde6','#f6e8c4']],[14600,['#6a88c8','#e8bc90','#ffc880']],[15900,['#7a6cb0','#f2a060','#ffb060']],[17000,['#5a3e8a','#d85a78','#ff9a58']],[18000,['#2e2a6e','#8a4a8e','#e8786a']],[18800,['#12184e','#2a3a82','#5a4a8a']],[20000,['#0a1040','#14246a','#2a3a7a']],[W1+400,['#0a1040','#14246a','#2a3a7a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Nuova Delhi, dall’alba alla notte. Parti dal Gurdwara Bangla Sahib, quando i canti si alzano e la cucina comune ha già i pentoloni sul fuoco; poi i portici bianchi di Connaught Place e, lì vicino, l’osservatorio di pietra del Jantar Mantar con la scalinata nascosta di una vecchia baoli. A mezzogiorno il grande colle del palazzo presidenziale; nel primo pomeriggio i libri e i caffè di Khan Market, poi la Tomba di Humayun nel suo giardino a quattro quadranti. Al tramonto i Lodhi Gardens, fra tombe antiche, parrocchetti e camminatori; a notte l’India Gate, illuminata, con le famiglie sui prati e il kulfi che gira. Il tempo qui si piega: gli abitanti di ogni epoca ti vengono incontro, e la città è quella di oggi.";
const LKTXT=[
"Il Gurdwara Bangla Sahib sta a un passo da Connaught Place: lo riconosci dalla cupola dorata e dall’alto pennone. Prima di entrare si lasciano le scarpe, si lavano i piedi e si copre il capo; all’ingresso ci sono foulard per chi non ne ha. Entrano tutti, di ogni fede, e nessuno paga.",
"Dietro il tempio c’è il sarovar, la grande vasca d’acqua. Secondo la tradizione l’acqua del pozzo che Guru Har Krishan usò per aiutare i malati ha poteri benefici, e molti fedeli ne portano a casa un poco.",
"Il langar è la cucina comune: ogni giorno migliaia di persone ricevono un pasto semplice e vegetariano, seduti sul pavimento uno accanto all’altro, senza distinzione. A cucinare, servire e lavare i piatti sono volontari.",
"Nella sala principale si cantano inni accompagnati dalla musica, il kirtan. All’uscita si riceve il kada prasad, un dolce caldo di farina, burro chiarificato e zucchero, offerto nelle mani a coppa.",
"Connaught Place, per tutti CP: due grandi cerchi di portici bianchi in stile georgiano, costruiti fra il 1929 e il 1933 su progetto dell’architetto Robert Tor Russell, e dedicati al duca di Connaught. Il cerchio interno si chiama ufficialmente Rajiv Chowk e quello esterno Indira Chowk, ma i delhiti dicono sempre CP.",
"Al centro di CP c’è il Central Park, un giardino circolare. Sotto, c’è la stazione della metro Rajiv Chowk, dove si incrociano la linea Gialla e la linea Blu.",
"Sotto la piazza si nasconde il Palika Bazaar, un mercato sotterraneo di corridoi stretti, pieno di abiti, borse, elettronica e souvenir. Qui si contratta, e si contratta con un sorriso.",
"Vicino a CP c’è un tempio di Hanuman, il dio scimmia, più antico della piazza: prima che nascesse la città nuova il luogo era una cresta rocciosa con alberi spinosi, e il tempio c’era già. Il martedì, giorno dedicato a Hanuman, i fedeli arrivano a frotte.",
"Il Jantar Mantar è un osservatorio all’aperto, costruito nel 1724 dal maharaja Jai Singh II di Jaipur: il nome significa grosso modo \"strumento di calcolo\". Fu il primo dei cinque osservatori che Jai Singh costruì in India e serviva a osservare il cielo a occhio nudo, senza telescopi.",
"Il Samrat Yantra, \"lo strumento supremo\", è una gigantesca meridiana: una lunga scala inclinata e, ai lati, due archi graduati su cui scorre l’ombra e si legge l’ora solare.",
"Accanto ci sono il Jai Prakash Yantra, formato da due grandi catini a emisfero, e il Ram Yantra, due edifici cilindrici con un pilastro al centro: servivano a misurare l’altezza e la posizione degli astri. Il Misra Yantra, \"lo strumento misto\", indicava il mezzogiorno in altre città del mondo.",
"La strada accanto al Jantar Mantar è da molti anni il luogo dove a Delhi si fanno proteste e sit-in di ogni genere, con striscioni e microfoni: una specie di \"angolo degli oratori\" in mezzo alla capitale.",
"Nascosta fra i palazzi di un quartiere di uffici c’è la baoli di Agrasen: un pozzo a gradini lungo circa 60 metri e largo 15, con 103 gradini (c’è chi ne conta 108). Si dice che il primo costruttore sia stato il leggendario re Agrasen; l’aspetto attuale risale al Trecento ed è attribuito alla comunità degli Agrawal.",
"Ai piedi della collina di Raisina si apre il grande viale cerimoniale che sale verso il palazzo presidenziale. Ai lati stanno i due Segretariati, Nord e Sud, disegnati da Herbert Baker, collega e rivale di Lutyens.",
"Il Rashtrapati Bhavan, \"la casa del Presidente\", è la residenza del Presidente dell’India. Lutyens lo progettò come casa del Viceré: ha quattro piani e 340 stanze, fu abitato dal 1929 e cambiò nome nel 1950.",
"Davanti al palazzo svetta la Colonna di Jaipur, dono del maharaja di Jaipur, con una stella di vetro in cima. I capitelli delle colonne del palazzo, detti \"ordine di Delhi\", hanno minuscole campane di pietra agli angoli: si dice che non suonino per una vecchia credenza, secondo cui il loro suono avrebbe annunciato la fine di un impero.",
"Il Kartavya Path, \"il sentiero del dovere\", è il lungo viale dritto che va dal Rashtrapati Bhavan all’India Gate. Si chiamò Kingsway, poi Rajpath dopo l’indipendenza, e ha il nome attuale dal 2022. Ogni 26 gennaio vi sfila la parata della Festa della Repubblica.",
"Khan Market nacque nel 1951, voluto dal Ministero della Riabilitazione per dare lavoro ai profughi della Partizione del 1947, in gran parte venuti dalla provincia di frontiera del nord-ovest. Ha la forma di una U a due piani: negozi sotto, appartamenti sopra.",
"Qui sopravvivono le librerie di una volta: scaffali di legno fino al soffitto, pile di libri usati, il libraio che sa a memoria dove sta ogni titolo e chi l’ha comprato.",
"Fra i negozi ci sono caffè con tavolini all’aperto e terrazze sopra i tetti: la mattina studenti e impiegati, nel pomeriggio signore con le borse della spesa, la sera gente elegante. Il chai arriva in bicchierini di vetro, direttamente dal chaiwallah dell’angolo.",
"Fra una vetrina e l’altra resistono i negozi di una volta: la frutta fresca in pile ordinate, i fiori, i dolci in scatola. In inverno si vendono mandarini e arance da sbucciare al sole.",
"Dal cancello occidentale si cammina verso la Tomba di Humayun: la prima che si incontra è quella di Isa Khan, un nobile di un’epoca più antica di quella dell’imperatore. È ottagonale, dentro un giardino ottagonale, con la sua piccola moschea.",
"La tomba dell’imperatore moghul Humayun fu voluta dalla vedova Bega Begum, detta Haji Begum, e costruita fra il 1565 e il 1572 su progetto dell’architetto persiano Mirak Mirza Ghiyas. Fu la prima grande tomba-giardino dell’India, e oggi è un sito UNESCO.",
"Il giardino intorno alla tomba è un charbagh, un giardino a quattro parti divise da canali e vialetti, che nella tradizione persiana è l’immagine del paradiso. I canali sono stati rimessi in funzione dopo il restauro.",
"Intorno ci sono altre tombe: il Nila Gumbad, \"la cupola blu\", con tessere smaltate azzurre, poco fuori dal recinto, e la Tomba del Barbiere, un edificio quadrato con doppia cupola. Il nome della seconda viene dalla tradizione popolare: non si sa con certezza chi vi sia sepolto.",
"I Lodhi Gardens sono un parco di circa novanta acri con tombe del Quattrocento e del primo Cinquecento, fra cui quella di Mohammed Shah, della dinastia dei Sayyid, del 1444. Il parco fu sistemato dagli inglesi e aperto il 9 aprile 1936 con il nome di Lady Willingdon Park; dopo l’indipendenza prese quello attuale.",
"Nel cuore del parco stanno il Bara Gumbad, \"il grande cupolone\", con la sua moschea a tre cupole, e di fronte lo Shisha Gumbad, \"la cupola di vetro\", dove restano tracce di piastrelle smaltate.",
"La tomba di Sikandar Lodi, sultano di Delhi fra il Quattrocento e il Cinquecento, sta dentro un giardino murato. È ottagonale, con una veranda intorno e una cupola.",
"Il ponte Athpula, \"dagli otto pilastri\", attraversa un laghetto; poco più in là c’è un giardino pensato per attirare le farfalle. Al tramonto la gente si ferma sulle panchine a guardare gli uccelli che rientrano.",
"L’India Gate è un arco di arenaria alto 42 metri, disegnato da Lutyens e inaugurato nel 1931. Ricorda i soldati dell’esercito indo-britannico morti nella Prima guerra mondiale e nella terza guerra anglo-afghana: circa 13.300 nomi sono incisi sulle sue pareti.",
"Poco dietro l’arco c’è un baldacchino di pietra sotto cui sta una statua di granito nero di Subhas Chandra Bose, detto Netaji. Più in là il memoriale nazionale della guerra, con anelli concentrici, ricorda i soldati caduti dopo l’indipendenza; la fiamma dell’Amar Jawan Jyoti, accesa sotto l’arco negli anni Settanta, vi fu portata nel 2022.",
"Alla sera il Kartavya Path si riempie di famiglie: bambini che corrono, coppie sui prati, carretti di cibo e palloncini luminosi. I canali ai lati riflettono le luci.",
"Sotto l’arco, la strada continua: la luce arriva fino in fondo."
];
const NAME={
nd_harjinder:"Harjinder, il volontario del langar",
nd_rajesh:"Rajesh, l’autista di autorisciò",
nd_anjali:"Anjali, la guida astronoma",
nd_lutyens:"Sir Edwin Lutyens, l’architetto",
nd_vikram:"Vikram, il libraio di Khan Market",
nd_zoya:"Zoya, la restauratrice",
nd_sunita:"Sunita, la signora delle camminate",
nd_mohan:"Mohan, il venditore di kulfi"
};
const GREET={
nd_harjinder:"Sat Sri Akal, Pierpaolo! Copriti il capo con questo foulard e lascia pure le scarpe laggiù: qui si entra a piedi nudi e a cuore aperto. Sono Harjinder, e il pane di stamattina ha già le mie mani dentro, ji.",
nd_rajesh:"Arre, Pierpaolo-ji! Chalo, chalo, sali sul mio autorisciò: meter se, giuro sui miei figli! Sono Rajesh, e Delhi la conosco meglio di mia moglie, ma questo non dirglielo.",
nd_anjali:"Arre, Pierpaolo! Benvenuto al Jantar Mantar. Sono Anjali: di giorno studio le stelle, nel fine settimana porto i curiosi a spasso fra le pietre. Chalo, ti faccio vedere come si leggeva il cielo senza telescopi, yaar.",
nd_lutyens:"Good afternoon... o buongiorno? Il sole di Delhi confonde chiunque, my dear Pierpaolo. Sono Edwin Lutyens, e questa collina, con tutta la modestia, l’ho disegnata io. Ho portato anche l’ombrello: non si sa mai con le nuvole inglesi.",
nd_vikram:"Namaste, Pierpaolo! Entra, entra, ma non toccare la pila in equilibrio laggiù: è lì dal 1998 e io ho paura. Sono Vikram, la libreria era di mio nonno. Cerchi qualcosa o vuoi solo respirare l’odore di carta, ji?",
nd_zoya:"Salaam, Pierpaolo! Non c’è fretta: la tomba è qui da più di quattrocentocinquant’anni, aspetta anche te. Sono Zoya, lavoro qui: se vedi qualcuno con le mani bianche di calce e il naso per aria, sono io.",
nd_sunita:"Namaste, Pierpaolo! Hai scelto l’ora giusta: a quest’ora il parco è tutto oro e uccelli. Sono Sunita, e se vuoi la mia compagnia devi stare al passo, beta.",
nd_mohan:"Arre, Pierpaolo! Thanda thanda kulfi! Vieni, vieni, ti faccio provare quella al pistacchio: una pallina sola, giuro... va bene, due. Sono Mohan, e questo è il mio ufficio: sotto l’arco, con vista sul palazzo presidenziale, bhaiya."
};
/* ---- una casa di Delhi: muro, finestre con persiane, cornicione, condizionatori, tetto piatto con parapetto o piccola cupola ---- */
function bld(g,x,w,h,i,k,o){const gt=GT,top=gt-h;rect(g,o.wall,x,top,w,h);rect(g,'rgba(255,255,255,.2)',x,top,5,h);rect(g,'rgba(0,0,0,.1)',x+w-14,top,14,h);rect(g,o.cor||'#c8b898',x-3,top-5,w+6,6);
 if(o.par)merli(g,o.cor||'#c8b898',x,top-5,w,8);
 const rows=Math.max(1,Math.floor((h-62)/40)),cols=Math.max(2,Math.floor((w-16)/34));
 for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){const wx=x+10+c*((w-20)/cols)+((w-20)/cols-18)/2,wy=top+12+r*40;fin(g,wx,wy,18,26,k,i*5+r*3+c,o.sh);if(o.bal)rect(g,'#2a2e34',wx-4,wy+26,26,2.6);if(hr(i*7+r*5+c)>.82)cond(g,wx+2,wy+28)}
 if(o.gf=='arc'){for(let c=0;c<cols;c++)ar(g,'#2e211a',x+10+c*((w-20)/cols)+4,gt-4,((w-20)/cols)-8,52)}
 else{rect(g,'#33241c',x+8,gt-48,w-16,46);for(let c=0;c<cols;c++){rect(g,k>.2?'rgba(255,200,110,.7)':'rgba(230,205,160,.55)',x+12+c*((w-20)/cols),gt-44,((w-20)/cols)-8,34);rect(g,o.sc||'#c8402a',x+10+c*((w-20)/cols),gt-52,((w-20)/cols)-4,7)}}
 if(o.roof=='chh')chh(g,x+w*.5,top-5,34,44,o.cor||'#c8b898','#f4f0e6');if(o.roof=='dome')dome(g,'#f4f0e6',x+w*.5,top-5,44,26)}
/* ---- facciate di strada, zona per zona ---- */
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3);
 if(st==1){/* Gurdwara: palazzi bassi color crema e rosa con balconi, alberi di neem e peepal, bouganville */
  if(r>.45){[neem,peepal,neem][md(i,3)](g,x+w*.5,gt,1+hr(i)*.3);if(md(i,2))bouga(g,x+w*.5+34,gt,1.1);return}
  bld(g,x+6,w-30,h-30,i,k,{wall:['#ecdfc8','#e8c8a8','#f0e6d0'][md(i,3)],sh:'#4a8a6a',bal:1,gf:'shop',roof:md(i,2)?'chh':null,cor:'#c8b898'});return}
 if(st==2){/* Connaught Place: i portici bianchi, due piani, colonne, insegne e condizionatori */
  rect(g,'#f4f0e4',x,gt-h,w+12,h);rect(g,'rgba(0,0,0,.08)',x,gt-h,w+12,10);rect(g,'rgba(255,255,255,.4)',x,gt-h,5,h);
  for(let q=0;q<4;q++){const cx=x+q*((w+12)/4);rect(g,'#33241c',cx+6,gt-54,(w+12)/4-12,50);rect(g,k>.3?'rgba(255,200,110,.7)':'rgba(236,216,176,.5)',cx+8,gt-50,(w+12)/4-16,36);rect(g,['#2a62b8','#c8402a','#2a7a5a','#c89820'][md(i+q,4)],cx+6,gt-62,(w+12)/4-12,9)}
  for(let q=0;q<5;q++){const cx=x+q*((w+12)/4);rect(g,'#f8f4ea',cx-4,gt-60,9,60);rect(g,'rgba(0,0,0,.1)',cx+1,gt-60,4,60)}rect(g,'#f8f4ea',x-2,gt-70,w+16,9);
  for(let q=0;q<4;q++){const cx=x+q*((w+12)/4);fin(g,cx+12,gt-h+22,22,Math.max(26,h-110),k,i*4+q,null)}rect(g,'#e8e4d6',x-2,gt-h-6,w+16,8);if(r>.6)cond(g,x+30,gt-h+60);return}
 if(st==3){/* Jantar Mantar: muri bassi, alberi, qualche torre di uffici di vetro */
  if(r>.62){const th=h+60;rect(g,'#8aa0b4',x+10,gt-th,w-60,th);rect(g,'rgba(255,255,255,.18)',x+10,gt-th,6,th);for(let q=0;q<th/18;q++)rect(g,k>.25&&hr(i*9+q)>.4?'rgba(255,226,150,.7)':'rgba(190,220,240,.55)',x+16,gt-th+8+q*18,w-72,10);rect(g,'#6a7a88',x+10,gt-th,w-60,5);return}
  if(r>.3){neem(g,x+w*.5,gt,1.1+hr(i)*.2);return}
  rect(g,'#e8d8b8',x+4,gt-50,w-30,50);merli(g,'#e8d8b8',x+4,gt-50,w-30,9);for(let q=0;q<4;q++)ar(g,'#3a3028',x+14+q*34,gt-4,18,30);neem(g,x+w-10,gt,.9);return}
 if(st==4){/* Raisina: alberi potati a palla, muro di arenaria con le grate di ferro */
  if(r>.35){ashoka(g,x+w*.5,gt,1.15+hr(i)*.2);if(md(i,2))ashoka(g,x+w*.5+46,gt,1);return}
  rect(g,'#b4503a',x+4,gt-44,w-20,44);rect(g,'#8e3a2a',x+4,gt-48,w-20,6);merli(g,'#c9694a',x+4,gt-48,w-20,8);for(let q=0;q<10;q++)rect(g,'#26292e',x+10+q*((w-40)/9),gt-96,2,50);rect(g,'#26292e',x+4,gt-96,w-20,3);chh(g,x+w*.5,gt-48,30,40,'#c9694a','#ecdfb8');return}
 if(st==5){/* Khan Market: palazzine di due piani col portico e le insegne, qualche albero */
  if(r>.84){peepal(g,x+w*.5,gt,1.1);return}
  bld(g,x+6,w-20,h-10,i,k,{wall:['#e8d8b8','#ecdfc8','#e0c8a0','#f0e6d0'][md(i,4)],sh:['#c8402a','#2a62b8','#2a8a5a'][md(i,3)],bal:1,gf:'shop',sc:['#2a62b8','#c8402a','#2a8a5a','#e8a020'][md(i,4)],cor:'#c8b898'});return}
 if(st==6){/* Tomba di Humayun: alberi enormi, muro di arenaria rossa con merli */
  if(r>.3){[peepal,neem,gulmohar][md(i,3)](g,x+w*.5,gt,1.25+hr(i)*.35);return}
  rect(g,'#b4503a',x,gt-70,w-10,70);rect(g,'#8e3a2a',x,gt-74,w-10,6);merli(g,'#c9694a',x,gt-74,w-10,9);for(let q=0;q<4;q++)ar(g,'#2a1812',x+18+q*40,gt-4,18,40);return}
 if(st==7){/* Lodhi Gardens: grandi alberi, ogni tanto un muro di pietra grigia con una tomba che spunta */
  if(r>.22){[peepal,gulmohar,neem,peepal][md(i,4)](g,x+w*.5,gt,1.3+hr(i)*.4);return}
  rect(g,'#8c8a82',x+10,gt-52,w-40,52);rect(g,'#7a766c',x+6,gt-58,w-32,7);merli(g,'#8c8a82',x+10,gt-58,w-40,8);dome(g,'#9a9690',x+w*.4,gt-58,52,32);rect(g,'#a89040',x+w*.4-1,gt-96,2,10);return}
 /* 8: India Gate di notte: alberi scuri ai lati del viale, lucine, tendoni delle bancarelle */
 if(r>.25){neem(g,x+w*.5,gt,1.2+hr(i)*.3);if(k>.3)for(let q=0;q<5;q++)dot(g,'rgba(255,214,130,'+(.5+.4*Math.sin(TT*3+q+i))+')',x+w*.5-40+q*20,gt-60-hr(q+i)*70,1.8);return}
 rect(g,'#2a2e34',x+10,gt-30,w-50,30);for(let q=0;q<6;q++)rect(g,['#e8402a','#f2c82a','#2a8a5a'][q%3],x+14+q*20,gt-46,18,16);dot(g,LIT,x+w*.4,gt-52,3);glow(g,x+w*.4,gt-52,40,'255,214,130',.3*k)}
/* ---- livello 0: cielo, sole, luna, nuvole, velo dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-17800)/2200,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/17000,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*250;
 if(xs<17700){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,15)}
 const mu=cl((xs-17300)/2600,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*210;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<2700?'rgba(252,206,214,.7)':xs<14200?'rgba(255,250,240,.8)':xs<17200?'rgba(255,176,140,.7)':'rgba(140,120,190,.4)';
 each(o-((t*5)%340)*.02,340,1,(x,i,r)=>{if(r>.4)return;nube(g,x+r*100,40+r*46,.6+r*.5,cc)});
 const fo=cl(1-xs/2700,0,1)*.3;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const hz=cl((xs-1800)/1400,0,1)*cl((14400-xs)/1400,0,1)*.13;if(hz>.01){g.fillStyle='rgba(240,226,190,'+hz+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-12000)/1000,0,1)*cl((14800-xs)/900,0,1)*.12;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-15000)/900,0,1)*cl((18200-xs)/900,0,1)*.28;if(wg>.01){g.fillStyle='rgba(255,110,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: cupola dorata e pennone del gurdwara, palazzi bianchi di CP, Jantar Mantar, la collina di Raisina, Humayun, i Lodhi, l'arco illuminato ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs*1+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 /* gurdwara: palazzi bassi, la cupola dorata e l'alto pennone con il vessillo (zona 1) */
 const g1=env(1500,3200);if(g1>.02){g.globalAlpha=g1;const sx=fx(1500);[[-190,60,34],[-130,46,50],[-80,70,30],[60,60,34],[120,48,56],[180,70,36],[240,50,28]].forEach((b,i)=>{rect(g,dim(i%2?'#ece4d0':'#f4eee0'),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2]);rect(g,'rgba(0,0,0,.08)',sx+b[0]+b[1]/2-6,hz+16-b[2],6,b[2])});
  rect(g,dim('#f4eee0'),sx-46,hz-14,92,30);g.fillStyle=dim('#e2b232');g.beginPath();g.moveTo(sx-24,hz-14);g.bezierCurveTo(sx-34,hz-36,sx-10,hz-54,sx,hz-58);g.bezierCurveTo(sx+10,hz-54,sx+34,hz-36,sx+24,hz-14);g.closePath();g.fill();rect(g,dim('#b88a1c'),sx-1,hz-68,2,12);
  [-40,40].forEach(c=>{rect(g,dim('#f4eee0'),sx+c-6,hz-26,12,14);g.fillStyle=dim('#e2b232');g.beginPath();g.ellipse(sx+c,hz-26,8,9,0,Math.PI,0);g.fill()});
  rect(g,dim('#e8902a'),sx+110,hz-86,3,104);poly(g,dim('#f08a22'),[[sx+113,hz-86],[sx+138,hz-80],[sx+113,hz-66]]);g.globalAlpha=1}
 /* Connaught Place: lunghi palazzi bianchi a colonne, antenne, il tetto delle torri (zone 2) */
 const g2=env(4000,3400);if(g2>.02){g.globalAlpha=g2;const sx=fx(4000);for(let q=0;q<14;q++){const bx=sx-330+q*48,bh=34+hr(q*3)*30;rect(g,dim('#f0ece0'),bx,hz+16-bh,46,bh);for(let c=0;c<5;c++)rect(g,'rgba(0,0,0,.06)',bx+4+c*9,hz+16-bh+8,3,bh-8);rect(g,dim('#d8d4c4'),bx-1,hz+16-bh-3,48,4);if(night>.3&&hr(q)>.4)rect(g,'rgba(255,226,160,.85)',bx+10,hz+22-bh,5,4)}
  rect(g,dim('#9a9aa0'),sx+240,hz-80,2,96);rect(g,dim('#9a9aa0'),sx+160,hz-60,2,76);g.globalAlpha=1}
 /* Jantar Mantar: triangoli e archi ocra fra le torri di uffici (zona 3) */
 const g3=env(6800,3600);if(g3>.02){g.globalAlpha=g3;const sx=fx(6800);[[-200,26,96],[-150,34,120],[-90,30,80],[150,36,110],[210,28,90],[270,34,130]].forEach((b,i)=>{rect(g,dim('#9aaabc'),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2]);if(night>.3&&hr(i)>.3)rect(g,'rgba(255,226,160,.85)',sx+b[0]-b[1]/2+4,hz+22-b[2],5,4)});
  poly(g,dim('#d8a050'),[[sx-60,hz+16],[sx-60,hz-56],[sx+10,hz+16]]);poly(g,dim('#c07a34'),[[sx+10,hz+16],[sx+10,hz-26],[sx+60,hz+16]]);rect(g,dim('#b4503a'),sx-90,hz-16,28,32);g.strokeStyle=dim('#b4503a');g.lineWidth=5;g.beginPath();g.arc(sx+60,hz+16,40,Math.PI,Math.PI*1.5);g.stroke();g.globalAlpha=1}
 /* Raisina: la lunga collina con i due Segretariati e la cupola del palazzo (zone 3-5) */
 const g4=env(9500,4400);if(g4>.02){g.globalAlpha=g4;const sx=fx(9500);g.fillStyle=dim('#c8b890');g.beginPath();g.moveTo(sx-460,hz+34);g.lineTo(sx-300,hz+4);g.lineTo(sx-120,hz-14);g.lineTo(sx+120,hz-14);g.lineTo(sx+300,hz+4);g.lineTo(sx+460,hz+34);g.closePath();g.fill();
  g.fillStyle=dim('#7a9a58');g.beginPath();g.moveTo(sx-460,hz+34);for(let q=0;q<=30;q++)g.lineTo(sx-460+q*31,hz+14-8*Math.abs(Math.sin(q*.9)));g.lineTo(sx+460,hz+34);g.closePath();g.fill();
  [-1,1].forEach(s=>{const bx=sx+s*150;rect(g,dim('#b4503a'),bx-60,hz-30,120,24);rect(g,dim('#ecdfb8'),bx-60,hz-52,120,22);for(let c=0;c<9;c++)rect(g,'rgba(0,0,0,.1)',bx-54+c*13,hz-48,3,18);rect(g,dim('#ecdfb8'),bx-8,hz-62,16,12);g.fillStyle=dim('#cdc6ac');g.beginPath();g.ellipse(bx,hz-62,12,8,0,Math.PI,0);g.fill();[-52,52].forEach(c=>{g.fillStyle=dim('#ecdfb8');g.beginPath();g.ellipse(bx+c,hz-52,6,7,0,Math.PI,0);g.fill()})});
  rect(g,dim('#ecdfb8'),sx-34,hz-46,68,32);rect(g,dim('#d8d0b8'),sx-18,hz-74,36,28);g.fillStyle=dim('#cdc6ac');g.beginPath();g.ellipse(sx,hz-74,34,28,0,Math.PI,0);g.fill();rect(g,dim('#b88a1c'),sx-1,hz-112,2,16);if(night>.3)glow(g,sx,hz-50,120,'255,200,110',.3*night);g.globalAlpha=1}
 /* Khan Market: tetti bassi e chiome (zona 5) */
 const g5=env(12000,3000);if(g5>.02){g.globalAlpha=g5;const sx=fx(12000);g.fillStyle=dim('#5a8a48');g.beginPath();g.moveTo(sx-300,hz+30);for(let q=0;q<=26;q++)g.lineTo(sx-300+q*23,hz-6-14*Math.abs(Math.sin(q*.9))-6*Math.sin(q*2.1));g.lineTo(sx+300,hz+30);g.closePath();g.fill();
  for(let q=0;q<9;q++){const bx=sx-240+q*56,bh=28+hr(q*3)*26;rect(g,dim(['#e8d8b8','#e0c8a0','#ecdfc8'][q%3]),bx,hz+16-bh,48,bh);if(night>.3&&hr(q)>.4)rect(g,'rgba(255,226,160,.85)',bx+10,hz+22-bh,5,4)}g.globalAlpha=1}
 /* Humayun: la grande cupola bianca sulla massa rossa (zona 6) */
 const g6=env(14500,3600);if(g6>.02){g.globalAlpha=g6;const sx=fx(14500);g.fillStyle=dim('#4a7a3a');g.beginPath();g.moveTo(sx-340,hz+30);for(let q=0;q<=28;q++)g.lineTo(sx-340+q*24,hz-4-14*Math.abs(Math.sin(q*1.1))-6*Math.sin(q*2.3));g.lineTo(sx+340,hz+30);g.closePath();g.fill();
  rect(g,dim('#b4503a'),sx-110,hz-26,220,42);rect(g,dim('#b4503a'),sx-56,hz-58,112,34);rect(g,dim('#f4f0e6'),sx-30,hz-80,60,22);g.fillStyle=dim('#f4f0e6');g.beginPath();g.ellipse(sx,hz-80,44,44,0,Math.PI,0);g.fill();rect(g,dim('#b88a1c'),sx-1,hz-130,2,14);
  [-70,-36,36,70].forEach(c=>{g.fillStyle=dim('#f4f0e6');g.beginPath();g.ellipse(sx+c,hz-58,8,9,0,Math.PI,0);g.fill()});glow(g,sx,hz-80,160,'255,170,80',.18);g.globalAlpha=1}
 /* Lodhi: le cupole grigie fra gli alberi alti (zona 7) */
 const g7=env(17200,3400);if(g7>.02){g.globalAlpha=g7;const sx=fx(17200);g.fillStyle=dim('#3a6a38');g.beginPath();g.moveTo(sx-320,hz+30);for(let q=0;q<=26;q++)g.lineTo(sx-320+q*25,hz-10-18*Math.abs(Math.sin(q*.8))-8*Math.sin(q*2.1));g.lineTo(sx+320,hz+30);g.closePath();g.fill();
  [[-140,60,40],[0,70,56],[150,50,36]].forEach(b=>{rect(g,dim('#8c8a82'),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2]);g.fillStyle=dim('#9a9690');g.beginPath();g.ellipse(sx+b[0],hz+16-b[2],b[1]*.34,b[1]*.3,0,Math.PI,0);g.fill()});g.globalAlpha=1}
 /* l'arco illuminato in fondo al viale, i lampioni, le luci della città (zona 8) */
 const g8=env(20300,4600);if(g8>.02){g.globalAlpha=g8;const sx=fx(20300);g.fillStyle=dim('#1e2a3e');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20;g.lineTo(px,hz-8-12*Math.abs(Math.sin((px+o)*.01))-6*Math.sin((px+o)*.05))}g.lineTo(480,hz+30);g.closePath();g.fill();
  rect(g,dim('#c07a46'),sx-26,hz-62,52,78);rect(g,'#14110f',sx-9,hz-30,18,46);rect(g,dim('#a8683a'),sx-30,hz-68,60,8);glow(g,sx,hz-30,160,'255,190,90',.55*night);
  rect(g,dim('#ecdfb8'),sx+120,hz-10,60,26);g.fillStyle=dim('#cdc6ac');g.beginPath();g.ellipse(sx+150,hz-10,18,14,0,Math.PI,0);g.fill();glow(g,sx+150,hz-14,80,'255,200,110',.3*night);
  for(let q=0;q<10;q++)dot(g,'rgba(255,214,130,'+(.5+.4*Math.sin(t*2+q))*night+')',sx-120+q*26,hz+12,1.8);g.globalAlpha=1}
 if(night>.35)for(let q=0;q<46;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.3)+')',q*11+hr(q)*8,hz+20+hr(q*3)*8,1.2)}
/* ---- livello 2: profili di palazzi, alberi e tetti, zona per zona ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;
  const wins=(n,top)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+14+(q%4)*20,top+Math.floor(q/4)*14,6,5)};
  if(zz==1){if(hr(i*3)>.45){el(g,dim(['#2a6a34','#3a7a3a','#33783c'][md(i,3)]),x+50,hz-34-r*14,48,34+r*10);el(g,dim('#4a8a3e'),x+14,hz-14,30,20);rect(g,dim('#5a3a22'),x+48,hz-8,4,18)}else{rect(g,dim(['#ecdfc8','#e8c8a8','#f0e6d0'][md(i,3)]),x+6,hz-56-r*36,70,66+r*36);rect(g,'rgba(255,255,255,.2)',x+6,hz-56-r*36,4,66+r*36);if(hr(i*5)>.6){g.fillStyle=dim('#e2b232');g.beginPath();g.ellipse(x+40,hz-56-r*36,14,14,0,Math.PI,0);g.fill()}wins(8,hz-48-r*36)}}
  else if(zz==2){rect(g,dim(['#f4f0e4','#ece8da','#f0ecde'][md(i,3)]),x,hz-56-r*30,w-4,66+r*30);for(let q=0;q<7;q++)rect(g,'rgba(0,0,0,.07)',x+6+q*14,hz-44-r*30,4,50+r*30);rect(g,dim('#d8d4c4'),x-2,hz-60-r*30,w,5);if(hr(i*3)>.8)rect(g,dim('#9a9aa0'),x+50,hz-100-r*30,2,40);wins(8,hz-48-r*30)}
  else if(zz==3){if(hr(i*3)>.55){rect(g,dim('#9aaabc'),x+10,hz-90-r*50,52,100+r*50);for(let q=0;q<7;q++)rect(g,night>.2&&hr(i+q)>.4?'rgba(255,226,160,.8)':'rgba(190,220,240,.5)',x+14,hz-82-r*50+q*14,44,8)}else{rect(g,dim(['#d8a050','#b4503a','#e8d0a0'][md(i,3)]),x,hz-40-r*20,w-20,50+r*20);if(hr(i*5)>.5)poly(g,dim('#d8a050'),[[x+10,hz+10],[x+10,hz-70],[x+80,hz+10]]);el(g,dim('#3a7a3a'),x+90,hz-24,30,28)}}
  else if(zz==4){if(hr(i*3)>.4){el(g,dim('#2f6a38'),x+40,hz-46-r*16,26,46+r*14);el(g,dim('#2f6a38'),x+84,hz-40,24,40)}else{rect(g,dim('#b4503a'),x,hz-30,w+10,40);rect(g,dim('#ecdfb8'),x,hz-52,w+10,22);for(let q=0;q<8;q++)rect(g,'rgba(0,0,0,.1)',x+6+q*13,hz-48,3,16);if(hr(i*7)>.5){g.fillStyle=dim('#cdc6ac');g.beginPath();g.ellipse(x+50,hz-52,18,14,0,Math.PI,0);g.fill()}}}
  else if(zz==5){rect(g,dim(['#e8d8b8','#e0c8a0','#ecdfc8'][md(i,3)]),x,hz-52-r*28,w-8,62+r*28);rect(g,dim('#c8b898'),x-3,hz-56-r*28,w-2,5);for(let q=0;q<4;q++)rect(g,dim(['#c8402a','#2a62b8','#2a8a5a'][(q+i)%3]),x+10+q*22,hz-42-r*28,16,5);if(hr(i*3)>.7)el(g,dim('#3a7a3a'),x+70,hz-40,30,36);wins(8,hz-34-r*28)}
  else if(zz==6){el(g,dim(['#3a6a30','#4a7a38','#2a6a34','#5a8a38'][md(i,4)]),x+50,hz-40-r*20,64,50+r*16);if(hr(i*3)>.6){rect(g,dim('#b4503a'),x+10,hz-30,50,40);g.fillStyle=dim('#f4f0e6');g.beginPath();g.ellipse(x+35,hz-30,16,16,0,Math.PI,0);g.fill()}}
  else if(zz==7){el(g,dim(['#2f6a34','#3a7a38','#2a5a30'][md(i,3)]),x+50,hz-44-r*22,66,54+r*18);if(hr(i*3)>.6){rect(g,dim('#8c8a82'),x+6,hz-34,46,44);g.fillStyle=dim('#9a9690');g.beginPath();g.ellipse(x+29,hz-34,18,15,0,Math.PI,0);g.fill()}}
  else{el(g,dim(['#14301c','#1a3a22','#102a18'][md(i,3)]),x+50,hz-46-r*22,64,56+r*18);if(night>.3)for(let q=0;q<4;q++)dot(g,'rgba(255,214,130,'+(.5+.4*Math.sin(t*3+q+i))+')',x+24+q*14,hz-36+hr(q+i)*20,1.6)}});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
/* ---- livello 3: la strada, zona per zona ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>150+hr(i*5)*60,170);
 each2(190,8,Z[1],Z[2],2,i=>150+hr(i*5)*40,178);
 each2(180,9,Z[2],Z[3],3,i=>130+hr(i*5)*40,170);
 each2(170,10,Z[3],Z[4],4,i=>130+hr(i*5)*40,160);
 each2(190,11,Z[4],Z[5],5,i=>150+hr(i*5)*40,170);
 each2(210,12,Z[5],Z[6],6,i=>150+hr(i*5)*60,200);
 each2(200,13,Z[6],Z[7],7,i=>150+hr(i*5)*50,180);
 each2(180,14,Z[7],Z[8],8,i=>140+hr(i*5)*40,170)}
/* ---- vita: parrocchetti verdi, nibbi in volo alto, piccioni, pipistrelli al crepuscolo ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 /* piccioni che si alzano al Gurdwara e a Connaught Place */
 const pg=cl((xs-100)/400,0,1)*cl((5300-xs)/400,0,1);
 if(pg>.05)for(let i=0;i<5;i++){const bx=((i*117+t*(46+i*6))%600)-60,by=70+hr(i*3)*100+Math.sin(t*2+i*2)*14,w=Math.sin(t*10+i)*3.4;g.strokeStyle='rgba(120,126,140,'+(.9*Math.min(1,pg))+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke();rect(g,'rgba(90,96,110,.9)',bx-2,by,5,3)}
 /* nibbi: grandi rapaci scuri che girano lentamente nel cielo di giorno */
 const kg=cl((xs-2600)/500,0,1)*cl((14800-xs)/500,0,1);
 if(kg>.05)for(let i=0;i<2;i++){const bx=((i*290+t*(14+i*5))%700)-110,by=62+i*34+Math.sin(t*.7+i*3)*12,w=Math.sin(t*1.4+i)*2.5;g.strokeStyle='rgba(74,56,44,'+(.9*Math.min(1,kg))+')';g.lineWidth=3;g.beginPath();g.moveTo(bx-22,by+6+w);g.quadraticCurveTo(bx-10,by-6,bx,by);g.quadraticCurveTo(bx+10,by-6,bx+22,by+6+w);g.stroke();rect(g,'rgba(74,56,44,'+(.9*Math.min(1,kg))+')',bx-3,by-1,7,3);ln(g,'rgba(74,56,44,.9)',2,[bx-4,by+2,bx-10,by+9])}
 /* passeri */
 if(xs<19600)for(let i=0;i<3;i++){const bx=((i*171+t*(80+i*9))%620)-70,by=100+hr(i*5+2)*120+Math.sin(t*3+i)*10,w=Math.sin(t*16+i)*2;g.strokeStyle='rgba(90,66,40,.85)';g.lineWidth=1.8;g.beginPath();g.moveTo(bx-5,by+w);g.lineTo(bx,by);g.lineTo(bx+5,by+w);g.stroke()}
 /* parrocchetti verdi dal collare, rumorosi, nei parchi e fra gli alberi */
 const pp=Math.max(cl((xs-200)/300,0,1)*cl((2700-xs)/300,0,1),cl((xs-10800)/300,0,1)*cl((13600-xs)/300,0,1),cl((xs-15900)/300,0,1)*cl((18400-xs)/300,0,1));
 if(pp>.05)for(let i=0;i<6;i++){const bx=((i*107+t*(76+i*6))%600)-60,by=90+hr(i*3)*110+Math.sin(t*2.2+i)*14,w=Math.sin(t*14+i)*3;ln(g,'#3aa83a',2.8,[bx-7,by+w,bx,by,bx+7,by+w]);dot(g,'#5ac85a',bx+5,by-2,2.6);rect(g,'#e84a3a',bx+7,by-3,2.4,1.6);ln(g,'#2a8a2a',1.4,[bx-6,by+1,bx-18,by+6])}
 /* pipistrelli della frutta al tramonto sui Lodhi e sull'India Gate */
 const bt=cl((xs-16800)/500,0,1)*cl((20400-xs)/500,0,1);
 if(bt>.05)for(let i=0;i<4;i++){const bx=((i*150+t*(30+i*7))%620)-60,by=70+hr(i*7)*90+Math.sin(t*1.6+i*2)*16,w=Math.sin(t*9+i)*4;g.fillStyle='rgba(20,16,30,'+(.8*Math.min(1,bt))+')';g.beginPath();g.moveTo(bx-12,by+w);g.quadraticCurveTo(bx-6,by-6,bx,by);g.quadraticCurveTo(bx+6,by-6,bx+12,by+w);g.quadraticCurveTo(bx+6,by+2,bx,by+3);g.quadraticCurveTo(bx-6,by+2,bx-12,by+w);g.fill()}}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#e4dcc8','k'],[Z[1],Z[2],'#d8d2c0','l'],[Z[2],Z[3],'#c0b496','g'],[Z[3],Z[4],'#b88a74','c'],[Z[4],Z[5],'#cfc6ae','b'],[Z[5],Z[6],'#dccfa8','r'],[Z[6],Z[7],'#c8a888','a'],[Z[7],Z[8],'#8a5a50','m']];
 rect(g,'#e0d8c0',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const slabs=(bw0,add,al)=>{for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,15);rect(g,'rgba(0,0,0,.12)',px,yy,1.3,17)}rect(g,'rgba(0,0,0,.09)',x0,yy+15,x1-x0,1.4)}};
  if(z[3]=='k'){/* marmo bianco del gurdwara: grandi lastre lucide, il canale dell'acqua lungo il bordo */
   slabs(60,12,.34);rect(g,'rgba(255,255,255,.2)',x0,gt+3,x1-x0,10);rect(g,'#b8b09a',x0,gt+122,x1-x0,3);rect(g,'rgba(110,170,200,.5)',x0,gt+128,x1-x0,10);for(let q=0;q<10;q++)rect(g,'rgba(255,255,255,.5)',x0+((q*61+t*8-cam)%ww+ww)%ww,gt+131,14,1.4)}
  if(z[3]=='l'){/* lastroni dei portici di CP e il bordo del marciapiede */
   slabs(70,12,.26);rect(g,'#b8b09a',x0,gt+120,x1-x0,3);rect(g,'rgba(0,0,0,.1)',x0,gt+84,x1-x0,2);for(let q=0;q<50;q++)rect(g,'rgba(0,0,0,.08)',x0+((q*47-cam)%ww+ww)%ww,gt+10+hr(q)*110,4,2)}
  if(z[3]=='g'){/* ghiaia e prati del Jantar Mantar */
   rect(g,'#6aa850',x0,gt+3,x1-x0,22);for(let q=0;q<60;q++)rect(g,'rgba(40,100,40,.3)',x0+((q*29)%ww),gt+5+hr(q)*18,2,4);rect(g,'rgba(255,255,255,.2)',x0,gt+3,x1-x0,6);
   for(let q=0;q<130;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.3)':'rgba(120,100,60,.22)',x0+((q*47)%ww),gt+30+hr(q+3)*100,2+hr(q)*3,1.6);rect(g,'#a89c80',x0,gt+120,x1-x0,3)}
  if(z[3]=='c'){/* pietra rosa e granito rosso dei viali di Raisina */
   slabs(40,8,.16);rect(g,'#8e5a46',x0,gt+98,x1-x0,2.4);rect(g,'#8e5a46',x0,gt+114,x1-x0,2.4);rect(g,'rgba(255,255,255,.07)',x0,gt+3,x1-x0,16);rect(g,'rgba(255,230,200,.1)',x0,gt+3,x1-x0,50)}
  if(z[3]=='b'){/* lastre della piazzetta, un po' di asfalto per le auto */
   slabs(60,10,.22);rect(g,'#5a5a60',x0,gt+104,x1-x0,26);rect(g,'#8a8a88',x0,gt+102,x1-x0,3);for(let q=-1;q<ww/50+2;q++)rect(g,'#f4f0e6',Math.floor((cam+x0)/50)*50+q*50-cam,gt+116,24,2.4);for(let q=0;q<26;q++)rect(g,'rgba(255,255,255,.07)',x0+((q*57-cam)%ww+ww)%ww,gt+108+hr(q)*16,10,1.6)}
  if(z[3]=='r'){/* prati e canali del giardino, vialetti di pietra chiara */
   rect(g,'#7aa844',x0,gt+3,x1-x0,38);for(let q=0;q<80;q++)dot(g,hr(q)>.4?'#8ab84c':'#6a984a',x0+((q*37)%ww),gt+6+hr(q+2)*30,1.6);rect(g,'rgba(255,255,255,.18)',x0,gt+3,x1-x0,8);
   for(let q=0;q<140;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.34)':'rgba(120,100,60,.2)',x0+((q*43)%ww),gt+46+hr(q+3)*80,2+hr(q)*3,1.6);rect(g,'#c8bc94',x0,gt+122,x1-x0,3)}
  if(z[3]=='a'){/* terra battuta rosata dei sentieri, prati, foglie secche */
   rect(g,'#7aa04a',x0,gt+3,x1-x0,30);for(let q=0;q<70;q++)dot(g,hr(q)>.5?'#b88a2a':'#8ab04c',x0+((q*31)%ww),gt+6+hr(q+2)*24,1.6);rect(g,'rgba(255,255,255,.14)',x0,gt+3,x1-x0,6);
   for(let q=0;q<150;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.3)':'rgba(120,70,40,.22)',x0+((q*43)%ww),gt+40+hr(q+3)*88,2+hr(q)*3,1.6);for(let q=0;q<24;q++)dot(g,'#b88a2a',x0+((q*61)%ww),gt+46+hr(q+7)*84,1.5);rect(g,'#a89070',x0,gt+122,x1-x0,3)}
  if(z[3]=='m'){/* il grande viale: granito rosso, prato ai lati, canali che riflettono le luci */
   slabs(46,8,.1);rect(g,'#2e5a3a',x0,gt+3,x1-x0,16);rect(g,'rgba(120,170,230,.5)',x0,gt+20,x1-x0,8);for(let q=0;q<14;q++)rect(g,'rgba(255,214,130,'+(.2+.3*Math.sin(t*2+q))+')',x0+((q*53+t*5-cam)%ww+ww)%ww,gt+22,18,1.6);rect(g,'#6a3a30',x0,gt+118,x1-x0,3);rect(g,'rgba(255,200,120,.08)',x0,gt+60,x1-x0,60)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1600,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const gd=cl((cam-12600)/700,0,1)*cl((14800-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
 const sg=cl((cam-14800)/700,0,1)*cl((17800-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));const oo=Object.assign({},o);['skin','top','bot','hair'].forEach(k=>{if(oo[k])oo[k]=tn(oo[k])});fig(g,px,y,t,Object.assign({f},oo,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Harjinder: turbante color zafferano, lunga barba curata, grembiule bianco infarinato, kara d'acciaio al polso, mestolo di acciaio */
 NP('nd_harjinder',NAME.nd_harjinder,1820,GREET.nd_harjinder,{skin:'#c8946a',top:'#f4f0e6',bot:'#f4f0e6',hair:'#1d120c',s:1.02},(g,b,t)=>{el(g,'#e08a22',1,-109+b,14.4,9);poly(g,'#e08a22',[[-9,-110+b],[1,-124+b],[11,-110+b]]);rect(g,'rgba(0,0,0,.18)',-10,-106+b,22,1.6);
  poly(g,'#2a2420',[[-8,-99+b],[10,-99+b],[9,-86+b],[1,-80+b],[-7,-86+b]]);for(let q=0;q<4;q++)rect(g,'#a8a8a8',-5+q*4,-96+b,1,12);
  rect(g,'#f4f0e6',-11,-76+b,22,34);rect(g,'rgba(0,0,0,.1)',-11,-76+b,3,34);dot(g,'rgba(220,210,190,.9)',-4,-66+b,2.4);dot(g,'rgba(220,210,190,.9)',5,-58+b,2);rect(g,'#c8ccd0',12,-68,5,3);
  ln(g,'#9aa0a6',2,[16,-66,27,-96]);el(g,'#b8bcc0',28,-98,5,3.4)}),
 /* Rajesh: camicia cachi, asciugamano a quadri sulle spalle, occhiali da sole sulla fronte, ciondolo di Hanuman, bicchierino di chai */
 NP('nd_rajesh',NAME.nd_rajesh,4810,GREET.nd_rajesh,{skin:'#c8946a',top:'#b8a878',bot:'#3a3a46',hair:'#2a1a10',s:1.02},(g,b,t)=>{rect(g,'#f4f0e6',-14,-91+b,28,6);for(let q=0;q<7;q++){rect(g,'#c8402a',-14+q*4,-91+b,2,6)}rect(g,'#c8402a',-14,-88+b,28,1.6);
  rect(g,'#14110f',-6,-108+b,14,3.6);dot(g,'#2a2a2e',-2,-106.5+b,2.6);dot(g,'#2a2a2e',5,-106.5+b,2.6);dot(g,'#f08a22',0,-80+b,2.6);rect(g,'rgba(230,240,255,.9)',16,-74,5,8);rect(g,'#a8602a',16,-70,5,4);
  for(let q=0;q<3;q++){const u=(t*.5+q/3)%1;dot(g,'rgba(255,255,255,'+(.3*(1-u))+')',18+Math.sin(u*6+q)*2,-78-u*14,1.6+u*2)}}),
 /* Anjali: kurta di cotone color acqua, jeans, cappellino, zaino, cuffie al collo, bacchetta di legno per indicare le stelle */
 NP('nd_anjali',NAME.nd_anjali,6200,GREET.nd_anjali,{skin:'#d8a880',top:'#2a8a9a',bot:'#2a4a8a',hair:'#14110f',long:1,s:1.0},(g,b,t)=>{rect(g,'#f4f0e6',-12,-112+b,24,6);poly(g,'#f4f0e6',[[4,-108+b],[17,-108+b],[4,-105+b]]);
  rect(g,'#c8503a',-21,-88+b,9,32);rect(g,'#a8402a',-21,-88+b,9,4);ln(g,'#2a2a2e',2,[-8,-90+b,-9,-84+b,0,-80+b,9,-84+b,8,-90+b]);dot(g,'#2a2a2e',-8,-90+b,2.6);dot(g,'#2a2a2e',8,-90+b,2.6);
  ln(g,'#8a6a3a',1.8,[16,-66,32,-134]);rect(g,'#f4f0e6',-20,-70,8,11);rect(g,'#2a62b8',-20,-70,8,2)}),
 /* Sir Edwin Lutyens: abito di tweed e panciotto, cappello a falda, baffi, matita dietro l'orecchio, rotolo di disegni, ombrello */
 NP('nd_lutyens',NAME.nd_lutyens,9480,GREET.nd_lutyens,{skin:'#e0b896',top:'#7a6a52',bot:'#6a5a46',hair:'#9a9a9a',s:1.04},(g,b,t)=>{el(g,'#4a3a2a',1,-111+b,17,4.4);rect(g,'#4a3a2a',-8,-122+b,18,11);rect(g,'#2a2018',-8,-114+b,18,2.4);
  rect(g,'#9a9a9a',-6,-96+b,13,2.4);rect(g,'#5a4a3a',-8,-86+b,16,32);for(let q=0;q<3;q++)dot(g,'#c8b078',0,-80+b+q*8,1.2);ln(g,'#e8c040',1.6,[-12,-104+b,-14,-98+b]);
  ln(g,'#f2ecd8',5,[-22,-76,-27,-46]);ln(g,'#c8402a',1.2,[-23,-70,-26,-66]);ln(g,'#2a2a2e',2,[22,-12,22,-100]);ln(g,'#2a2a2e',2,[22,-100,26,-104,30,-100])}),
 /* Vikram: occhiali a mezzaluna con la catenella, camicia a quadri con le maniche arrotolate, bicchierino di chai, cartellino del prezzo */
 NP('nd_vikram',NAME.nd_vikram,12010,GREET.nd_vikram,{skin:'#c8946a',top:'#8a9ab8',bot:'#3a3a46',hair:'#9a9a9a',s:1.02},(g,b,t)=>{for(let q=0;q<4;q++)rect(g,'rgba(40,60,120,.35)',-12,-88+q*10+b,24,3);for(let q=0;q<3;q++)rect(g,'rgba(40,60,120,.35)',-8+q*8,-90+b,3,44);
  el(g,'#2a2a2e',-3,-100+b,4.4,2.4);el(g,'#2a2a2e',6,-100+b,4.4,2.4);ln(g,'#2a2a2e',.8,[-8,-100+b,-12,-96+b,-12,-90+b]);rect(g,'#f4f0e6',-12,-70,9,12);rect(g,'rgba(230,240,255,.9)',16,-74,5,8);rect(g,'#a8602a',16,-70,5,4);rect(g,'#f2e8cc',20,-66,5,8)}),
 /* Zoya: camicia di lino, pantaloni da lavoro, cappellino, taccuino a quadretti, metro avvolgibile, tracce di calce sulle mani */
 NP('nd_zoya',NAME.nd_zoya,14380,GREET.nd_zoya,{skin:'#d8a880',top:'#d8c8a0',bot:'#6a5a46',hair:'#14110f',long:1,s:1.0},(g,b,t)=>{rect(g,'#f4f0e6',-12,-112+b,24,6);poly(g,'#f4f0e6',[[4,-108+b],[17,-108+b],[4,-105+b]]);
  poly(g,'#e8d8c0',[[-9,-90+b],[9,-90+b],[5,-82+b],[0,-78+b],[-5,-82+b]]);rect(g,'#e8c040',-13,-52,6,6);rect(g,'#14110f',-13,-49,6,1.4);rect(g,'#f4f0e6',16,-74,10,13);for(let q=0;q<3;q++)rect(g,'rgba(60,80,140,.4)',16,-72+q*4,10,.8);
  dot(g,'rgba(255,255,255,.7)',-15,-64,2);dot(g,'rgba(255,255,255,.7)',17,-66,1.8);dot(g,'rgba(255,255,255,.6)',6,-48,2)}),
 /* Sunita: salwar kameez color pesca, scalda-colli leggero, visiera, binocolo al collo, bottiglia d'acqua, scarpe da ginnastica bianche */
 NP('nd_sunita',NAME.nd_sunita,17640,GREET.nd_sunita,{skin:'#c8946a',top:'#f0b898',bot:'#f0b898',hair:'#b8b8b8',s:1.0},(g,b,t)=>{rect(g,'#f4f0e6',-12,-111+b,24,5);poly(g,'#f4f0e6',[[4,-107+b],[19,-107+b],[4,-103+b]]);dot(g,'#b8b8b8',-10,-100+b,4.4);
  poly(g,'#c8e0d8',[[-10,-90+b],[10,-90+b],[8,-82+b],[0,-72+b],[-8,-82+b]]);ln(g,'#2a2a2e',1.2,[-6,-90+b,-5,-78+b]);ln(g,'#2a2a2e',1.2,[6,-90+b,5,-78+b]);dot(g,'#2a2a2e',-4,-76+b,3.4);dot(g,'#2a2a2e',4,-76+b,3.4);rect(g,'#4a4e54',-7,-79+b,14,2);
  rect(g,'#7ab0d8',16,-72,5,13);rect(g,'#f4f0e6',16,-74,5,3)}),
 /* Mohan: cappello di cotone bianco, camicia bianca, asciugamano sulla spalla, campanello di ottone, cucchiaino di latta */
 NP('nd_mohan',NAME.nd_mohan,19480,GREET.nd_mohan,{skin:'#c8946a',top:'#f4f0e6',bot:'#e8e4d4',hair:'#2a1a10',s:1.02},(g,b,t)=>{poly(g,'#f4f0e6',[[-9,-110+b],[-7,-119+b],[11,-119+b],[12,-110+b]]);rect(g,'rgba(0,0,0,.14)',-9,-111+b,21,1.6);
  rect(g,'#c8402a',-14,-90+b,8,24);for(let q=0;q<4;q++)rect(g,'rgba(255,255,255,.5)',-14,-86+b+q*5,8,1.4);
  dot(g,'#c8a838',18,-70,3.4);rect(g,'#6a4a2a',17,-66,2,6);ln(g,'#b8bcc0',1.6,[15,-64,24,-82]);el(g,'#b8bcc0',25,-84,3,2)}),
];
/* ---- oggetti lungo il percorso ---- */
const LX=[650,1330,2000,2520, 3250,3830,4480,5000, 5780,6450,7050,7480,7960, 8800,9700,10230,10600, 11300,11850,12360,12800, 13900,14520,15100,15500, 16280,16950,17820,18250, 19150,19800,20640,W1-130];
const props=[
 /* zona 1 · Gurdwara Bangla Sahib */
 ['ndtarga',110,'GURDWARA BANGLA SAHIB'],['ndneem',200,1.1],['ndscarpe',300],['ndfoulard',430],['ndportale',650],['ndfedeli',520,{n:3,s:3}],['ndpediluvio',940],['ndbouga',1010,1],['ndsarovar',1330],['ndcalendule',1740],['ndsedie',1840],['ndlangar',2000],['ndcane',2350,1],['ndkirtan',2520],['ndlampade',2200],['ndgatto',2660,'#c9873a'],
 /* zona 2 · Connaught Place */
 ['ndtarga',2790,'CONNAUGHT PLACE'],['ndcp',3250],['ndgente',3330,{n:3,s:21}],['ndlampione',3560],['ndcentral',3830],['ndmetro',4150],['ndpalika',4480],['ndpalloncini',4620],['ndfila',4690],['ndhanuman',5000],['ndscimmia',5190,-1],['ndfarola',5260,1],
 /* zona 3 · Jantar Mantar e baoli */
 ['ndtarga',5420,'JANTAR MANTAR'],['ndjantar',5780],['ndcartello',6050,'JANTAR MANTAR'],['ndsamrat',6450],['ndgente',6700,{n:2,s:11}],['ndjairam',7050],['ndsitin',7480],['ndbaoli',7960],['ndcane',8140,-1],
 /* zona 4 · Raisina Hill */
 ['ndtarga',8260,'RAISINA HILL'],['ndsegretari',8800],['ndguardia',9170,1],['ndrashtrapati',9700],['ndlampione',9300],['ndaiuola',10080],['ndjaipur',10230],['ndguardia',10400,-1],['ndviale',10600],['ndlampione',10730],
 /* zona 5 · Khan Market */
 ['ndtarga',10900,'KHAN MARKET'],['ndgatto',11080,'#8a8a8e'],['ndkhan',11300],['ndbancarella',11610],['ndlibreria',11850],['ndmoto',12130],['ndcaffe',12360],['ndchaiwalla',12600],['ndfrutta',12800],['ndauto',13050],
 /* zona 6 · Tomba di Humayun */
 ['ndtarga',13290,'HUMAYUN TOMB'],['ndportale6',13400],['ndisakhan',13900],['ndhumayun',14520],['ndimpalcatura',14300,150],['ndcanale',15100,200],['ndpavone',14950,1],['ndnila',15450],['ndbarbiere',15730],['ndgente',14780,{n:2,s:15}],
 /* zona 7 · Lodhi Gardens */
 ['ndtarga',15960,'LODHI GARDENS'],['ndyoga',16080],['ndcancello',16280],['ndbacheca',16520],['ndpavone',16640,-1],['ndbara',16950],['ndcammina',17250,1],['ndshisha',17400],['ndsikandar',17820],['ndpanca',18040,1],['ndathpula',18250],['ndcestino',18420],
 /* zona 8 · India Gate di notte */
 ['ndtarga',18620,'KARTAVYA PATH'],['ndfarola',18800,1],['ndindiagate',19150],['ndlampione',19340],['ndkulfi',19570],['ndfedeli',19400,{n:2,s:23}],['ndbaldacchino',19800],['ndmemoriale',20090],['ndfamiglia',20380],['ndviale',20640,1],['ndluminosi',20890],['ndbhutta',21010],['ndfarola',21180,1],['ndvarco',W1-130]
];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'nuovadelhi',name:'Nuova Delhi · Dal Gurdwara Bangla Sahib all’India Gate',width:W1,sky:['#7f8fc4','#f2b4b4','#ffdcb8'],gt:372,gr:['#e4dcc8','#b8b09a'],chord:[196,246.9,293.7,392],amb:'#ffdcb0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da newdelhi.txt) --- */
(function(){
const TOPX_ND={
nd_harjinder:[
["Chi sei e che fai?","Harjinder, cinquantaquattro anni, sikh nato a Delhi. Di giorno vendo ricambi per motorini, ma ogni mattina all’alba vengo qui a fare sewa, il servizio volontario: oggi tocca alle verdure. Mia moglie dice che al tempio lavoro più che a casa, e ha ragione."],
["Cos’è un gurdwara?","Letteralmente \"la porta del Guru\": il luogo dove i sikh si riuniscono per pregare, cantare e mangiare insieme. Tradizionalmente ha porte su ogni lato, per dire che è aperto a tutti, di ogni fede. Il libro sacro, il Guru Granth Sahib, qui è trattato come un maestro vivo: sta su un trono, sotto un baldacchino, e lo si saluta con rispetto."],
["Perché si lasciano le scarpe e si copre la testa?","È un segno di rispetto, come in tante case di preghiera: fuori le scarpe, i piedi si lavano nell’acqua all’ingresso e il capo si copre con un fazzoletto, che qui ti diamo gratis. Non conta chi sei, conta come entri: con umiltà. Niente tabacco, niente alcol e cellulare in silenzio, bhai."],
["Com’è nato il Bangla Sahib?","Qui sorgeva il bungalow del raja Jai Singh, e nel 1664 ci soggiornò Guru Har Krishan, l’ottavo guru dei sikh, ancora un bambino. Durante un’epidemia aiutò i malati, e dal pozzo diede loro l’acqua. Nel 1783 il generale Baghel Singh vi costruì un primo piccolo santuario: \"bangla\" vuol dire proprio bungalow, ecco il nome, Pierpaolo."],
["Cos’è il sarovar?","La grande vasca d’acqua dietro il tempio. Secondo la tradizione l’acqua del pozzo a cui attinse il Guru ha poteri benefici, e molti ne portano a casa una bottiglietta. Io ci cammino attorno ogni mattina: guardare la cupola d’oro nell’acqua mi rimette a posto la testa."],
["Cos’è il langar?","La cucina comune: qui si dà da mangiare a chiunque, gratis, tutti i giorni, a migliaia di persone. Si mangia seduti per terra, uno accanto all’altro, ricchi e poveri, perché davanti al piatto siamo tutti uguali. Dal, roti, verdure e un po’ di dolce: semplice e vegetariano, così può mangiarlo chiunque."],
["Chi cucina?","Volontari come me: c’è chi taglia le verdure seduto in cerchio a chiacchierare, chi mescola pentoloni grandi come vasche, chi stende i roti, chi serve e chi lava. Ci sono anche le macchine che fanno il pane a ritmo, ma tante pagnotte si girano ancora a mano. Si dice che nel langar il cibo più buono sia quello fatto con più mani."],
["Cos’è il kada prasad?","Il dolce che ricevi all’uscita dalla sala di preghiera: farina, burro chiarificato e zucchero, caldo e un po’ denso. Si prende a mani giunte e a coppa, e si mangia tutto: lasciarne è quasi un’offesa. Dopo il primo boccone, ji, capirai perché i bambini fanno la fila due volte."],
["Cosa sono quei canti?","Il kirtan: inni cantati con harmonium e tabla, dalla mattina presto alla sera. La musica qui non è un contorno, è il modo in cui si prega. Io non so cantare, ma so dondolarmi a tempo: Waheguru!"],
["Chi sono i sikh e perché il turbante?","I sikh seguono dieci guru, a cominciare da Guru Nanak, nato nel Quattrocento in Punjab; la nostra fede dice di lavorare onestamente, ricordare Dio e condividere con gli altri. Il turbante, il dastar, copre i capelli, che non si tagliano, ed è un segno di rispetto e di impegno. Ce ne sono di tutti i colori, ma il blu e l’arancione vanno per la maggiore."],
["Dove vado dopo?","A piedi a Connaught Place: è a poco più di un chilometro, lungo viali alberati. Troverai Rajesh, che guida un autorisciò e parla più veloce del suo motore. Digli che ti manda Harjinder e vedrai che ti fa lo sconto... o almeno ci prova, ji."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e prima di uscire prendi un po’ di kada prasad: a stomaco pieno si cammina meglio. Se ripassi all’alba, ti metto subito a tagliare le cipolle. Sat Sri Akal, e che Waheguru ti accompagni!"]
],
nd_rajesh:[
["Chi sei e che fai?","Rajesh, quarantasette anni, di Meerut, a Delhi da venticinque. Guido un autorisciò, uno di quelli verdi e gialli, dall’alba a notte fonda: roba da matti, ma mi piace. Sul cruscotto ho la foto di Hanuman e quella delle mie due figlie, così sono protetto da tutte le parti."],
["Cos’è Connaught Place?","Il cuore commerciale della Delhi nuova: due grandi cerchi di portici bianchi, costruiti fra il 1929 e il 1933 e dedicati al duca di Connaught. Oggi ci sono caffè, uffici, librerie e un traffico che nemmeno Hanuman riuscirebbe a saltare. Io ci lavoro da vent’anni e ogni giorno trovo un angolo nuovo."],
["Come ci si orienta qui?","È un cerchio dentro un cerchio, quindi chi si perde gira in tondo e ritrova sempre lo stesso venditore di palloncini. Le strade a raggiera portano fuori e ogni blocco ha la sua lettera. Il trucco: scegli un caffè come punto di riferimento e non perderlo di vista, bhai. Oppure chiedi a un autista: noi sappiamo tutto."],
["Si chiama CP o Rajiv Chowk?","Sulla carta il cerchio interno è Rajiv Chowk e quello esterno Indira Chowk, intitolati a due primi ministri. Ma io non ho mai sentito un passeggero dire \"portami a Rajiv Chowk\", se non per la metro. Tutti dicono CP, e CP resta: i nomi cambiano, le abitudini no."],
["Com’è fatto un autorisciò di Delhi?","Tre ruote, un motore a gas (il CNG), il tettuccio verde e il corpo giallo, e tanta personalità. Il tassametro ci sarebbe, e \"meter se\" è la frase magica; se non funziona, si tratta il prezzo prima di salire. Un sorriso e un po’ di pazienza valgono più di una moneta, Pierpaolo."],
["Com’è la metro?","Sotto i nostri piedi c’è la stazione Rajiv Chowk, dove si incrociano la linea Gialla e la Blu: una delle più affollate. La metro di Delhi è nata alla fine del 2002 e da allora ha cambiato la vita di tutti: puntuale, fresca e pulita. Il primo vagone è riservato alle donne, e guai a sbagliare vagone!"],
["Perché tutti suonano il clacson?","Il clacson qui è un linguaggio: un colpetto vuol dire \"sono qui\", due \"attento\", uno lungo \"levati, se no...\". Sui camion c’è scritto \"Horn OK Please\", cioè \"suona pure\", e tutti lo prendono alla lettera. Il segreto è il jugaad: arrangiarsi con quello che c’è e arrivare comunque."],
["Cos’è il Palika Bazaar?","Il mercato sotterraneo sotto CP: corridoi bassi, luci al neon, negozi che vendono di tutto, dalle magliette ai cavi del telefono. Qui si contratta: il prezzo di partenza è un invito a ballare. Offri metà, sorridi, fai finta di andartene: funziona quasi sempre."],
["Cos’è il tempio di Hanuman qui vicino?","Un tempio del dio scimmia che c’era già prima della piazza: dicono che qui, prima di CP, ci fosse una cresta di roccia con alberi spinosi, e il tempio stava lì. Il martedì è il giorno di Hanuman e i fedeli arrivano con ghirlande di calendula e dolci. Molti autisti passano a salutarlo prima di cominciare il turno, io per primo."],
["Cosa si mangia e si beve da queste parti?","Al mattino un chai in un bicchierino di coccio, il kulhad: lo si beve e poi lo si rompe, e la terra si riprende l’argilla. A pranzo chole bhature, ceci speziati con un pane gonfio e fritto che ti fa venire sonno fino a sera. E di sera il chaat: patate, yogurt, tamarindo e spezie in un solo cucchiaio."],
["Dove vado dopo?","A dieci minuti da qui c’è il Jantar Mantar, l’osservatorio di pietra: ti ci porto io, ma poi scendi e cammini. Ti aspetta Anjali, una guida che studia le stelle. Dice che le stelle sono sempre puntuali, io no: ha ragione."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e tienti forte: il primo dosso è sempre una sorpresa. Se ripassi da CP, cerca il mio autorisciò: la foto di Hanuman sul cruscotto non sbaglia mai. Phir milenge, bhai, e che la strada sia libera!"]
],
nd_anjali:[
["Chi sei e che fai?","Anjali, ventinove anni, dottoranda in astrofisica e guida part-time. Sono nata a Delhi, e il cielo di Delhi, con le luci e la foschia, mostra poche stelle: così vengo qui a consolarmi con quelle di pietra. Gli amici dicono che sono l’unica che passa il sabato a fare ombre."],
["Cos’è il Jantar Mantar?","Un osservatorio all’aperto. Il nome viene da \"yantra\", strumento, e \"mantra\", formula: più o meno \"strumento di calcolo\". Non ci sono telescopi: tutto si osserva a occhio nudo, con scale, archi e ombre. È un osservatorio fatto per i giorni di sole."],
["Chi lo costruì e perché?","Lo costruì nel 1724 il maharaja Jai Singh II di Jaipur, su richiesta dell’imperatore moghul Muhammad Shah, che voleva calendari e tavole astronomiche aggiornati. Quello di Delhi fu il primo dei cinque osservatori di Jai Singh: gli altri sono a Jaipur, Ujjain, Varanasi e Mathura. Un re e uno scienziato insieme: caso rarissimo."],
["Cos’è il Samrat Yantra?","Il \"supremo strumento\": una gigantesca meridiana. La scala è inclinata come l’asse terrestre, e l’ombra che cade sugli archi graduati dà l’ora solare con una precisione sorprendente. È il pezzo forte: tutti lo fotografano, ma pochi sanno leggerne l’ombra."],
["E gli altri strumenti?","Il Jai Prakash sono due catini a emisfero con cui si mappa il cielo; il Ram Yantra, due cilindri aperti con un pilastro al centro, serve per misurare altezza e posizione degli astri. Il Misra Yantra, \"lo strumento misto\", è l’unico a non essere stato inventato da Jai Singh, e indicava il mezzogiorno in altre città del mondo. Mi piace pensare che fosse il suo \"fuso orario\"."],
["Come si legge l’ora?","Si guarda dove cade l’ombra sulla scala graduata: è l’ora solare locale, non quella dell’orologio al polso. Con la luce giusta un’ombra cammina sulla pietra e ti fa vedere il tempo che passa: una sensazione strana e bellissima. Poi guardi il telefono e litighi con il tempo, come tutti."],
["Cos’è la strada con le tende qui accanto?","Il posto dove da molti anni a Delhi si fanno sit-in, proteste e scioperi, con striscioni e microfoni: un po’ il nostro \"angolo degli oratori\". L’osservatorio sta lì in mezzo, come un nonno paziente. Delhi è così: pietra antica e voci di oggi, tutto insieme."],
["Cos’è la baoli di Agrasen?","A una passeggiata da qui, nascosta fra palazzi di uffici, c’è la baoli di Agrasen: un pozzo a gradini lungo circa 60 metri e largo 15, con 103 gradini (c’è chi ne conta 108, e non ci mettiamo d’accordo mai). Si dice che l’abbia costruita il leggendario re Agrasen; l’aspetto attuale risale al Trecento. Scendi con calma: i gradini sono tanti e l’aria sotto è fresca."],
["A cosa servivano le baoli?","A raccogliere e conservare l’acqua in una città dove piove soprattutto nel monsone, da luglio a settembre. Si scendeva a riempire le brocche e, d’estate, anche per stare al fresco: laggiù la temperatura cala parecchio. Il livello dell’acqua saliva e scendeva lungo i gradini, e si scendeva finché non la si trovava."],
["È vero che è infestata?","Si dice, e ogni delhita ha la sua storia da brivido da raccontare ai turisti, ma nessuno ha mai visto niente. È comparsa in qualche film bollywoodiano, per via della luce che cade giù in diagonale. Al mattino presto è un posto silenzioso: ogni tanto ci vengo a studiare."],
["Dove vado dopo?","Verso sud, nella Delhi dei viali larghi, a Raisina Hill, davanti al palazzo presidenziale. Lì ti aspetta un signore inglese con un completo di tweed, che ha disegnato mezza città: sir Edwin Lutyens. Fai attenzione: è un uomo spiritoso, ma molto fiero del suo lavoro."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e guarda ogni tanto per terra: un’ombra ben messa vale più di un orologio. Se ripassi, portami un chai e ti spiego anche le costellazioni, anche se qui se ne vedono poche. Chalo, phir milenge, yaar!"]
],
nd_lutyens:[
["Chi sei e che fai?","Edwin Lutyens, architetto, nato a Londra nel 1869. Ho disegnato ville di campagna e monumenti per mezzo mondo, ma qui ho avuto l’impresa della vita: una capitale intera. Vi arrivai la prima volta nel 1912, con una borsa di disegni e poche idee chiare, I say."],
["Perché una nuova capitale?","Nel dicembre 1911, al grande Durbar, re Giorgio V annunciò che la capitale dell’India si sarebbe spostata da Calcutta a Delhi. Delhi era già stata capitale di molti imperi: la nuova città fu pensata accanto alle antiche, come una nuova pagina in un libro molto lungo. Fu un giorno rumoroso, mi dicono."],
["Come la progettaste?","Con Herbert Baker, un collega bravo e, vedremo, un po’ testardo. Una collina, Raisina, come cuore; un grande asse rettilineo; strade larghe, rotonde, alberi: una geometria quasi musicale. Ci vollero circa vent’anni, e la città fu inaugurata nel febbraio 1931 dal viceré, lord Irwin."],
["Cos’è questo palazzo?","Il Viceroy’s House, oggi Rashtrapati Bhavan: quattro piani, 340 stanze, arenaria rossa e crema, una grande cupola. Fu abitato dal 1929 e dal 1950 ci vive il Presidente dell’India. Il giardino sul retro ha aiuole, fontane e canali alla maniera moghul: un tempo lo chiamavano Giardino Moghul, oggi si chiama Amrit Udyan, e si apre al pubblico solo in certi periodi dell’anno."],
["Cos’è l’ordine di Delhi?","Una piccola invenzione mia: un capitello con foglie e minuscole campane di pietra agli angoli. Le campane non suonano, e si dice che sia per una vecchia credenza, secondo cui il loro suono avrebbe annunciato la fine di un impero. Io ci vedo soprattutto un buon gioco di ombre."],
["E la colonna lì davanti?","È la Colonna di Jaipur, dono del maharaja di Jaipur: un’alta colonna di pietra chiara con una stella di vetro in cima, montata nel 1930. I rilievi alla base sono dello scultore Charles Sargeant Jagger. È il pezzo che tutti fotografano per ultimo e ricordano per primo."],
["Perché dicono che il palazzo si nasconde?","Una questione di pendenza, my dear fellow. Baker disegnò i due Segretariati ai lati della salita, io volevo il palazzo più alto e visibile; alla fine la salita risultò più ripida del previsto e il palazzo sparisce in parte finché non sei in cima. Per anni io ne diedi la colpa a Baker, e lui a me: un classico fra architetti."],
["Come fu costruita la città?","Una capitale nuova costa sempre qualcosa a qualcuno: per costruirla furono acquisite migliaia di acri, e alcuni villaggi, come Raisina, dovettero spostarsi. Sul cantiere lavorarono moltissimi muratori, scalpellini e carrettieri indiani, e senza di loro non sarebbe rimasta in piedi una sola pietra. Mi è sempre sembrato giusto ricordarlo."],
["Cos’è l’India Gate?","Un arco trionfale alto 42 metri, in fondo al viale, per ricordare i soldati dell’esercito indo-britannico morti nella Grande Guerra e nella terza guerra anglo-afghana. La prima pietra la pose nel 1921 il duca di Connaught, e l’arco fu inaugurato nel febbraio 1931 da lord Irwin. Sulle pareti sono incisi circa 13.300 nomi: è il monumento in cui ho messo meno ironia e più silenzio."],
["Il viale ha cambiato nome?","Lo chiamavamo Kingsway; dopo l’indipendenza si chiamò Rajpath e dal 2022 Kartavya Path. Sotto il baldacchino dove stava la statua del re, ora c’è quella di Netaji Subhas Chandra Bose. Non sta a me giudicare: osservo solo che le pietre non cambiano nome, lo cambiano le persone, e va bene così."],
["Come vedi la Delhi di oggi?","Con meraviglia e un po’ di vertigine. Disegnai una città pensata per un governo, e oggi ci vivono milioni di persone: c’è una metropolitana sotto il mio viale, parrocchetti verdi sui portici, scimmie sui cornicioni dei ministeri. Quello che non avevo previsto è quanto i delhiti l’avrebbero reinventata a modo loro."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e cammina sul mio viale con le scarpe comode: non è breve come sembra. Al mercato di Khan, fra gli scaffali, troverai un libraio che sa tutto di libri e di profughi: salutalo da parte mia. Good luck, my dear fellow, e occhio al sole: ruba il cappello!"]
],
nd_vikram:[
["Chi sei e che fai?","Vikram, cinquantasei anni, libraio. Il negozio lo aprì mio nonno qui negli anni Cinquanta, ma la famiglia vendeva già libri a Peshawar. Ho imparato a leggere sul bancone, e a vendere prima ancora di scrivere: è tutto quello che sa fare un libraio, tranne il caffè."],
["Com’è nato Khan Market?","Nel 1951 il ministero per la Riabilitazione lo costruì per dare lavoro e una casa ai profughi della Partizione del 1947, tanti dalla provincia di frontiera del nord-ovest. Famiglie intere dormivano nei negozi e al mattino li riaprivano. È stato un posto in cui ricominciare, prima di diventare un posto in cui fare shopping."],
["Perché si chiama così?","Dal nome di Khan Abdul Jabbar Khan, detto Dr. Khan Sahib, politico della provincia di frontiera e fratello maggiore del \"Gandhi della frontiera\", che nel 1947 aiutò molti profughi a mettersi in salvo. I primi commercianti lo battezzarono così per gratitudine. Ogni tanto qualcuno lo scambia con il fratello minore, ma noi lo sappiamo."],
["Com’è fatto?","Una U a due piani: sotto i negozi, sopra le case di chi ci lavorava. Erano 154 negozi e 74 appartamenti, con affitti piccolissimi. Per questo il mercato ha un’aria da vicinato: ci si conosce, e si sa tutto di tutti."],
["Chi viene qui?","Diplomatici delle ambasciate vicine, funzionari, studenti, famiglie del quartiere e turisti: un po’ di tutto. Secondo le classifiche degli agenti immobiliari è una delle vie commerciali più care del mondo, e noi ci scherziamo: \"il mercato dei profughi\" con gli affitti dei ricchi. Ma i vecchi negozi resistono, per orgoglio."],
["Come si sceglie un libro?","Con le mani: si sfoglia, si annusa, si chiede consiglio. Di libri usati c’è sempre una pila, e il prezzo si tratta un po’; sui libri nuovi, no. Il mio trucco: se un cliente guarda un titolo tre volte, glielo metto da parte."],
["Cosa leggere per capire Delhi?","\"City of Djinns\" di William Dalrymple, un viaggio fra le molte città di Delhi, e \"Twilight in Delhi\" di Ahmed Ali, un romanzo del 1940 sulla vecchia Delhi che si spegne piano. Sono due modi diversi per innamorarsi della stessa città. Se poi vuoi un fumetto, ho anche quelli."],
["Com’è una giornata al mercato?","Alle dieci aprono i caffè, a mezzogiorno si riempiono di impiegati, il pomeriggio è di signore con le borse e di studenti con i portatili, la sera di gente elegante. Il chai arriva su un vassoio, in bicchierini di vetro, dal chaiwallah dell’angolo. In mezzo a tutto questo io tengo aperto fino a sera."],
["Cosa vuol dire \"Dilli dilwalon ki\"?","È un detto: \"Delhi è di chi ha cuore\". Vuol dire che ci si accoglie, si litiga, si mangia insieme e poi si chiede scusa; i delhiti sono famosi per essere generosi col cibo e un po’ sfacciati con le parole. Qui ti offrono un chai anche se non compri niente, Pierpaolo."],
["Come sono le stagioni a Delhi?","D’estate fa un caldo tale che si vive con l’aria condizionata e si esce a sera, quando soffia ancora il \"loo\", il vento caldo e secco. Il monsone, da luglio a settembre, porta pioggia e fango. Ma l’inverno, con il sole basso e le arance in strada, è la stagione dei delhiti: ci si siede fuori al sole a sbucciare mandarini."],
["Dove vado dopo?","Alla Tomba di Humayun: pochi chilometri, in autorisciò o in metro. Ti aspetta Zoya, che il giardino lo conosce a memoria e lo cura come un bambino. Portale rispetto, e porta con te un libro: ci sono posti che si leggono meglio con un libro in tasca."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se un libro ti piace compralo subito: la prossima volta potrebbe averlo preso qualcun altro. Mi trovi qui, fra la pila in equilibrio e il chai ormai freddo. Namaste, e buona lettura, ji!"]
],
nd_zoya:[
["Chi sei e che fai?","Zoya, trentasei anni, architetta restauratrice: mi occupo di conservare le tombe moghul del quartiere di Nizamuddin. Sono nata a due passi da qui e da piccola giocavo sui prati della tomba. Oggi li curo: è una specie di rivincita."],
["Cos’è questa tomba?","Il mausoleo dell’imperatore moghul Humayun, voluto dalla vedova Bega Begum, detta Haji Begum: i lavori cominciarono nel 1565, circa nove anni dopo la morte dell’imperatore, e finirono nel 1572. È fatta di arenaria rossa e marmo bianco, con una grande cupola doppia. Molti la chiamano la sorella maggiore del Taj Mahal."],
["Chi la progettò?","Un architetto persiano di Herat, Mirak Mirza Ghiyas, scelto dalla stessa Bega Begum: morì prima della fine e il lavoro fu completato dal figlio, Sayyid Muhammad. È stata la prima grande tomba-giardino del subcontinente indiano, quella da cui discende tutto il resto. Oggi è un sito UNESCO."],
["Cos’è il giardino?","Un charbagh, un \"giardino a quattro\", diviso in quattro quadranti da canali d’acqua e vialetti: nella tradizione persiana è l’immagine del paradiso. L’acqua scorre dai canali alle vasche e durante il restauro l’abbiamo rimessa in funzione dopo tanti anni. Stare qui al tramonto con il rumore dell’acqua è il mio modo di staccare."],
["Di cosa è fatta?","Arenaria rossa per le pareti, marmo bianco per la cupola e per gli intarsi, un po’ di pietra nera nei dettagli. La cupola è doppia: una esterna, che si vede da lontano, e una interna, più bassa, che dà la proporzione dentro. I chhatri, i piccoli chioschi con cupola, avevano piastrelle smaltate azzurre: ne restano tracce."],
["Com’è stato il restauro?","L’hanno condotto l’Aga Khan Trust for Culture insieme all’Archaeological Survey of India: i lavori principali sono andati dal 2007 al 2013. Si sono tolti i materiali moderni inadatti e si è tornati a tecniche e materiali tradizionali, con l’aiuto di tanti artigiani. Ogni volta che entro, il primo pensiero è: \"chi ci ha lavorato prima di me?\""],
["Com’è la tua giornata da restauratrice?","Mi alzo presto, indosso il caschetto, preparo la malta di calce da provare e controllo dove è entrata l’acqua: l’acqua è sempre il nemico, soprattutto col monsone. Le radici dei fichi, i piccioni, la polvere, il caldo: tutto lavora contro la pietra, e io lavoro contro tutto. Il mio mestiere è dire di no alle scorciatoie."],
["E le altre tombe intorno?","Quella di Isa Khan, di un’epoca precedente, ottagonale con la sua moschea; la Tomba del Barbiere, un edificio quadrato con doppia cupola, il cui nome viene dalla tradizione popolare, e non si sa chi vi sia sepolto; e, poco fuori, la Nila Gumbad, la cupola blu. È quasi un quartiere di tombe: ognuna ha la sua storia, e nessuna è davvero chiusa."],
["Chi viene a visitarla?","La domenica è di famiglie con i cestini, coppie, scolaresche in fila e fotografi a caccia dell’ora d’oro. I bambini corrono sui prati e le nonne si siedono sui bordi dei canali. È bello che un monumento sia anche un giardino pubblico: una tomba che sa essere allegra."],
["Com’è il quartiere di Nizamuddin?","Appena fuori c’è il quartiere intorno alla dargah, la tomba di un santo sufi: il giovedì sera lì si canta il qawwali, musica devozionale che ti entra nelle ossa. Le stradine sono strette e piene di profumi di carne alla brace e di petali di rosa. È un posto da vivere almeno una volta, con rispetto e a testa coperta."],
["Dove si mangia bene da queste parti?","A Nizamuddin: kebab alla brace, nihari (uno stufato lento) e sheermal, un pane dolce al latte e zafferano. Si mangia con le dita, seduti su panche di legno, in mezzo alla gente. E se il cameriere dice \"è finito\", insisti un po’."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e prima del tramonto passa dai Lodhi Gardens: lì c’è Sunita, che cammina da vent’anni lo stesso giro e conosce ogni albero. Khuda hafiz, e portami una foto del tramonto: da qui lo guardo sempre da sola!"]
],
nd_sunita:[
["Chi sei e che fai?","Sunita, sessantasette anni, insegnante di scuola media in pensione. Sono nata a Delhi, ho insegnato geografia per trentacinque anni e adesso insegno a camminare. Il mio gruppo si chiama \"I Passi Lenti\", ma non siamo lenti per niente, beta."],
["Cosa sono i Lodhi Gardens?","Un parco di circa novanta acri con tombe del Quattrocento e del primo Cinquecento, fra cui quella di Mohammed Shah, della dinastia dei Sayyid, del 1444. Intorno ai monumenti ci sono prati, alberi giganti e vialetti: il polmone verde di questa zona. A Delhi chi può ci viene ogni giorno."],
["Perché c’era un nome inglese?","Si chiamava Lady Willingdon Park quando fu aperto, il 9 aprile 1936, dal nome della moglie del viceré. Dopo l’indipendenza prese il nome attuale. Il parco fu sistemato attorno a tombe che esistevano già da cinque secoli: i nomi cambiano, i prati restano."],
["Cos’è il Bara Gumbad?","Il \"grande cupolone\": un edificio quadrato su un basamento, con accanto una moschea a tre cupole. Di fronte c’è lo Shisha Gumbad, la \"cupola di vetro\", dove restano pezzi di piastrelle smaltate azzurre. Sul suo uso e sul suo significato ci sono ancora domande aperte: è uno dei misteri del parco."],
["E la tomba qui vicino?","Quella di Sikandar Lodi, sultano di Delhi fra il Quattrocento e il Cinquecento. Sta dentro un giardino murato con una porta: è ottagonale, con una veranda intorno e una cupola. È il posto dove i camminatori si fermano a prendere fiato fingendo di guardare l’architettura."],
["Com’è una camminata qui?","Si va in senso orario o antiorario secondo la fazione, e le liti sono memorabili. All’alba arrivano gli sportivi, la mattina i vecchietti con le scarpe da ginnastica, la sera le famiglie. A fine giro si prende un tè o un succo: la vera ricompensa."],
["E lo yoga?","Nei parchi di Delhi, la mattina, ci sono gruppi che fanno yoga sull’erba e i \"laughter club\", dove si ride tutti insieme a comando, senza barzellette: all’inizio è imbarazzante, poi diventa contagioso. Io ci vado il mercoledì, ma dico a tutti che ci vado per la salute."],
["Che animali si vedono?","Parrocchetti verdi con il collare rosso che strillano sui rami, scoiattoli striati che ti scappano fra i piedi, nibbi neri in alto e, con un po’ di fortuna, i buceri grigi al tramonto, che fanno versi strani. Con il binocolo li conto uno a uno: sono la mia lista della spesa."],
["Che alberi ci sono?","Alberi enormi: il neem, che qui si usa da sempre come medicina e per pulire i denti, il peepal, un albero sacro, e tanti altri. Sotto un neem si sta più freschi di qualche grado, dicono i vecchi. Fra i rami cantano i bulbul."],
["E con le stagioni?","D’estate si cammina all’alba per il caldo, il monsone riempie il parco di fango e di farfalle, e d’inverno la mattina ha la nebbia e l’aria pesante: in certi giorni di smog molti restano a casa, anche i più testardi. Poi arriva un po’ di vento, il cielo si pulisce, e il parco sembra un regalo. Delhi ha circa novanta specie di farfalle, e qui se ne vedono parecchie."],
["Dove vado dopo?","All’India Gate, di notte: prendi un autorisciò o la metro e fai due passi sul viale. Troverai Mohan, che vende il kulfi più freddo di Delhi e lo racconta come un professore. Fatti aspettare sotto l’arco: la sera è meglio quando le luci si accendono tutte insieme."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e cammina piano: nel parco non si ha mai fretta, in città sì. Se ripassi di mattina presto, ti presento il gruppo e ti metto in fila per la risata. Namaste, beta, e che il vento ti sia amico!"]
],
nd_mohan:[
["Chi sei e che fai?","Mohan, quarantacinque anni, venditore di kulfi. Faccio questo lavoro da trent’anni: ho cominciato con mio zio, a spingere il carretto. Il carretto è il mio ufficio, il viale i miei clienti."],
["Cos’è l’India Gate?","Un arco di arenaria alto 42 metri, disegnato da sir Edwin Lutyens e inaugurato nel 1931. Prima si chiamava Memoriale di guerra di tutta l’India. Di giorno è rosso mattone, di sera diventa oro e ambra: è un attore nato."],
["Chi ricorda?","I soldati dell’esercito indo-britannico caduti nella Prima guerra mondiale e nella terza guerra anglo-afghana: circa 13.300 nomi sono incisi sulle sue pareti. Io non li so leggere tutti, ma ogni tanto qualcuno viene a cercarne uno: un nonno, un bisnonno. E allora il viale si fa silenzioso per un po’."],
["E la fiamma?","Sotto l’arco, dagli anni Settanta, bruciava l’Amar Jawan Jyoti, la \"fiamma del soldato immortale\". Nel 2022 è stata portata al memoriale nazionale della guerra, poco più in là, che ricorda i caduti dopo l’indipendenza. Vai a vederlo: i cerchi concentrici di muri bassi con i nomi sono un posto dove si parla piano."],
["Chi è la statua sotto il baldacchino?","Subhas Chandra Bose, detto Netaji, in granito nero, alta circa otto metri e mezzo. La sera la illuminano dal basso e sembra più grande. I turisti si mettono in posa davanti a lui, e io pure, quando non c’è nessuno."],
["Com’è il viale di sera?","Dopo il tramonto il Kartavya Path si riempie: famiglie con le stuoie e le borse, bambini scalzi, coppie sui prati, palloncini luminosi. I canali d’acqua ai lati riflettono le luci. Io vendo e intanto guardo: è lo spettacolo più bello di Delhi, e il biglietto è gratis."],
["Cosa succede il 26 gennaio?","È la Festa della Repubblica: su questo viale sfila la grande parata, con carri, soldati, cammelli e ballerini. Qualche giorno dopo c’è anche la cerimonia del Beating Retreat, con le bande militari. In quei giorni arrivo alle quattro del mattino per trovare posto, e porto un po’ di kulfi anche per i poliziotti."],
["Com’è fatto il kulfi?","Si bolle il latte a lungo finché si addensa, poi si aggiungono cardamomo, pistacchio, zafferano e a volte acqua di rosa; si versa negli stampini e si congela, senza sbattere come il gelato. Risultato: più denso e più cremoso. Io lo servo in una coppetta di coccio, e si lecca tutto, anche il fondo."],
["Cos’altro si mangia qui?","Il chaat, spuntini piccanti con patate, ceci e yogurt; i golgappa, palline croccanti riempite di acqua speziata, che si mangiano in un boccone solo; il bhutta, la pannocchia arrostita con limone e sale piccante. E d’inverno noccioline calde. Il mio consiglio: un po’ di tutto, ma il kulfi per ultimo."],
["Com’è la vita di un venditore?","Si comincia nel pomeriggio: si spinge il carretto fino al viale, si sistema il ghiaccio, si conta il resto e si sorride. Nei giorni di festa la folla è tanta che finisco il kulfi alle otto. D’estate vendo molto di più che d’inverno: il freddo è il mio nemico, il caldo il mio migliore amico."],
["Cosa mi consigli di fare qui?","Passeggia lungo il viale fino al palazzo presidenziale, se hai gambe, oppure siediti sul prato e fai quello che fanno tutti: niente. Di giorno è bellissimo, di sera è un’altra cosa. Porta un golfino: dopo il tramonto il vento è fresco, soprattutto in autunno e in inverno."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e guarda l’arco da sotto: la strada continua e la luce arriva fino in fondo, fino al palazzo. È la parte che mi piace di più: finisce la giornata, ma la strada no. Chalo, phir milenge, bhaiya, e che il tuo viaggio sia thanda come il mio kulfi!"]
]
};
Object.assign(TOPX,TOPX_ND);
})();
