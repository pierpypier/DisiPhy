/* ---------- MOSCA · Dalle Colline dei Passeri alle Tre Stazioni (Colline dei Passeri, Arbat, Cristo Salvatore, Piazza Rossa e Cremlino, metropolitana, Zamoskvorečje, Zarjad'e, Bolšoj e Tverskaja, Piazza delle Tre Stazioni) ---------- */
/* Un'intera giornata da sinistra a destra: alba sulle Colline dei Passeri e all'Università Lomonosov, mattina sull'Arbat, tarda mattina alla Cattedrale di Cristo Salvatore
   e lungo la Moscova, mezzogiorno sulla Piazza Rossa e al Cremlino, primo pomeriggio nella metropolitana (sottoterra la luce è sempre calda e artificiale),
   pomeriggio a Zamoskvorečje e alla Galleria Tret'jakov, tramonto al parco Zarjad'e, sera al Teatro Bolšoj e sulla Tverskaja, notte alla Piazza delle Tre Stazioni.
   In fondo al binario del treno che parte per la Siberia c'è il varco.
   Testi, tappe e dialoghi vengono da mosca.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico). Gli oggetti stanno in elementi.js (nomi che iniziano per "mo").
   Il tono per i temi dolorosi (demolizione della cattedrale nel 1931, morte di Puškin, epoca sovietica) è sempre sobrio e rispettoso; nessun verso di Puškin o di canzoni. */
(function(){
const GT=372,W1=26000;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln}=PR._rm;
const {nf,lit,star5,bulb,helm,merli,muro,torre,lamp,casa,betu,tigl,abete,acq,corvo,pers,gente}=PR._mo;
const md=(i,n)=>((i%n)+n)%n;
const LIT='rgb(255,226,150)';
const Z=[0,2400,5100,7800,11400,14300,17300,20200,23000,W1+400];   /* inizio di ognuna delle 9 zone */
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* ---- cielo: alba rosa pallido con la foschia, mattina limpida, azzurro pieno, pomeriggio dorato, tramonto rosso-arancio, crepuscolo cobalto, notte ---- */
const SKY=[[0,['#9aa6d0','#f4b8c0','#ffe0c8']],[1400,['#5aa8ee','#bcdcf4','#f4f0e2']],[2400,['#3a94ee','#88c4f4','#dcecf8']],[5100,['#2a88ea','#7cbcf2','#d8ecf8']],[7800,['#1a74e0','#62b0f0','#d6ecf8']],[11400,['#2a7ee0','#78b8f0','#eaf0ee']],[14300,['#4a84d0','#b4d0e8','#fae6b8']],[15800,['#5a7cc8','#ecb890','#ffc88a']],[17300,['#5a4a98','#e8604a','#ffa050']],[18800,['#4a3a88','#c04a6a','#f88a58']],[20200,['#1a2c78','#3a4a98','#8a5a8a']],[21400,['#10206a','#1e3a8a','#4a5a9a']],[23000,['#080e34','#101c54','#26306a']],[99999,['#080e34','#101c54','#26306a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Mosca, dall’alba alla notte. Parti dalle Colline dei Passeri, quando il grande grattacielo dell’università esce dalla foschia sopra la Moscova, e scendi verso l’Arbat, la via dei ritrattisti e del poeta Puškin. A metà mattina ti aspettano la Cattedrale di Cristo Salvatore e i ponti sul fiume; a mezzogiorno la Piazza Rossa, San Basilio, il Cremlino e il GUM. Nel primo pomeriggio scendi nella metropolitana, tra statue, mosaici e vetrate; poi attraversi il fiume verso Zamoskvorečje e la Galleria Tret’jakov. Al tramonto si sale sul Ponte Fluttuante di Zarjad’e a guardare il Cremlino che si accende; la sera il Bolšoj e la Tverskaja si illuminano, e a notte la Piazza delle Tre Stazioni ti aspetta con i suoi treni. Il tempo qui si piega: i moscoviti di ogni epoca ti vengono incontro, e la città è quella di oggi.";
const LKTXT=[
"La terrazza delle Colline dei Passeri: da qui Mosca si vede tutta, dal fiume ai grattacieli. La collina si alza di una ottantina di metri sopra la Moscova e dal 1935 al 1999 si è chiamata Colline di Lenin. All’alba i primi corridori e i fotografi aspettano che la foschia si alzi.",
"Sotto la terrazza, un ponte a due piani attraversa il fiume: in basso passano i treni della metropolitana, dentro le travi. La stazione Vorobjovy Gory, sul ponte, è l’unica di Mosca con le finestre. Il ponte è del 1958.",
"L’Università Lomonosov: la più antica di Russia, fondata nel 1755 per volere dell’imperatrice Elisabetta, su idea di Michail Lomonosov e di Ivan Šuvalov. Il grattacielo sulla collina è del 1953: 36 piani e 240 metri con la guglia, per quasi quarant’anni è stato l’edificio più alto d’Europa.",
"Il convento di Novodevičij, sull’ansa del fiume: lo fondò nel 1524 il granduca Vasilij III e dal 2004 è Patrimonio UNESCO. Davanti c’è uno stagno dove, si dice, Čajkovskij trovò l’ispirazione per il Lago dei cigni. Nel cimitero accanto riposano Čechov, Gogol e Šostakovič.",
"L’Arbat: una delle strade più antiche di Mosca, nominata fin dal Quindicesimo secolo. Dal 1986 è pedonale, la prima della città: prima ci passava il tram. Oggi è piena di ritrattisti, musicisti, caffè e negozi di souvenir.",
"Al numero 53 c’è la casa azzurra dove Puškin abitò con la moglie Natalija Gončarova, appena sposato, da febbraio a maggio del 1831. Oggi è un piccolo museo. Di fronte c’è la statua in bronzo dei due sposi.",
"Il muro di Viktor Coj, in un vicolo che parte dall’Arbat: il cantante del gruppo Kino morì in un incidente stradale il 15 agosto 1990, a 28 anni. Il giorno stesso qualcuno scrisse sul muro che era morto, e un altro rispose che era vivo. Da allora i fan continuano a scrivere.",
"Il Teatro Vachtangov: nato nel 1921 da uno studio di giovani attori guidati da Evgenij Vachtangov. Davanti c’è la fontana della principessa Turandot, dedicata allo spettacolo che l’ha reso famoso.",
"La Cattedrale di Cristo Salvatore: la più grande cattedrale della Chiesa ortodossa russa, alta 103 metri. Fu costruita dal 1839 al 1883 per ringraziare dopo la vittoria sull’esercito di Napoleone, nel 1812. Nel 1931 fu demolita; per più di trent’anni, fino al 1994, al suo posto ci fu una grande piscina all’aperto. La cattedrale attuale è stata ricostruita ed è stata consacrata nel 2000.",
"Il Museo Puškin delle Belle Arti, di fronte alla cattedrale: aprì nel 1912, per iniziativa del professor Ivan Cvetaev, padre della poetessa Marina Cvetaeva. Il nome del poeta gli fu dato solo nel 1937, per il centenario della sua morte. All’inizio conteneva soprattutto copie in gesso di statue antiche.",
"Il Ponte Lužkov è un ponte pedonale sul canale Vodootvodnyj. Gli sposi ci appendono un lucchetto con i loro nomi e gettano la chiave nell’acqua. Dal 2007 i lucchetti si appendono a grandi alberi di metallo, per non appesantire il ponte.",
"L’isola Bolotnaja e la vecchia fabbrica di cioccolato Ottobre Rosso: i mattoni rossi dell’Ottocento oggi ospitano caffè, gallerie e studi. Per decenni l’aria del quartiere ha profumato di cioccolato, e le tavolette Alënka sono ancora un classico.",
"La Piazza Rossa: circa 330 metri per 70, lastricata di pietra. \"Rossa\" non c’entra col colore: in russo antico krasnaja voleva dire \"bella\". Il Cremlino e la piazza sono Patrimonio UNESCO dal 1990. Lungo le mura c’è il mausoleo di Lenin, di pietra, del 1930, opera dell’architetto Aleksej Šusev.",
"La Cattedrale di San Basilio: la fece costruire Ivan il Terribile fra il 1555 e il 1561 per ricordare la conquista di Kazan’. Ha otto cappelle attorno a una nona centrale, e ogni cupola ha un disegno diverso. Si dice che lo zar abbia fatto accecare l’architetto perché non ne costruisse un’altra uguale: è quasi certamente una leggenda.",
"Il Cremlino: le mura rosse e le 20 torri furono costruite dal 1485 al 1495 da maestri italiani chiamati dallo zar Ivan III. La Torre Spasskaja, alta 71 metri, è del 1491, opera del milanese Pietro Antonio Solari. Il suo orologio segna l’ora ufficiale di Mosca e i suoi rintocchi accompagnano la mezzanotte di Capodanno.",
"Il GUM: il grande magazzino sul lato lungo della piazza, costruito fra il 1890 e il 1893 con la facciata di Pomerancev e il tetto di vetro e ferro dell’ingegnere Šuchov. Dentro ci sono tre gallerie, ponticelli e una fontana, e i chioschi dove si vende il gelato nel cono di cialda: si dice che la ricetta sia ancora quella degli anni Cinquanta.",
"Dentro il Cremlino, il Cannone dello Zar: fuso nel 1586 da Andrej Čochov, 5 metri e 34 di bronzo e circa 39 tonnellate, mai usato in guerra. Lì vicino la Campana dello Zar: del 1735, circa 200 tonnellate, mai suonata: dopo un incendio, nel 1737, se ne staccò un pezzo di più di 11 tonnellate.",
"La metropolitana di Mosca: aprì il 15 maggio 1935 con 13 stazioni e 11 chilometri di linea. Oggi ha circa trecento stazioni e, nelle ore di punta, passa un treno ogni novanta secondi. Sulle scale mobili si sta fermi a destra e si cammina a sinistra.",
"La stazione Ploščad’ Revoljucii, del 1938: sotto le arcate ci sono 76 statue in bronzo di Matvej Manizer, di soldati, studenti, operai, atleti e contadine. Alcune sono lucide perché i passeggeri le toccano per portare fortuna, soprattutto prima degli esami.",
"La stazione Majakovskaja, del 1938: archi sottili di acciaio e marmo rosa, e 34 mosaici sul soffitto di Aleksandr Dejneka, con il cielo, gli aerei e i paracadutisti di un giorno intero. Nel 1939 il progetto vinse il primo premio all’Esposizione di New York.",
"La stazione Novoslobodskaja, del 1952: 32 vetrate colorate illuminate da dietro, incorniciate di ottone, opera di artisti lettoni su disegno di Pavel Korin. Sei raccontano persone al lavoro, le altre fiori, stelle e disegni geometrici.",
"Zamoskvorečje: il nome vuol dire \"al di là della Moscova\". Era il quartiere dei mercanti e degli artigiani: oggi ha ancora strade tranquille, cortili, chiesette e palazzi bassi color pastello.",
"La Galleria Tret’jakov: il mercante Pavel Tret’jakov cominciò a comprare quadri di artisti russi nel 1856 e nel 1892 regalò a Mosca circa duemila opere. La facciata da fiaba, disegnata dal pittore Viktor Vasnecov, è dei primi del Novecento.",
"Il Parco delle Arti Muzeon: dal 1992 è un museo all’aperto di sculture. Ci sono anche molte statue di epoca sovietica, tolte dalle piazze negli anni Novanta e ricollocate qui fra gli alberi.",
"Il monumento a Pietro il Grande, di Zurab Cereteli: 98 metri di bronzo e acciaio, inaugurato nel 1997 per i trecento anni della flotta russa. Divide i moscoviti, ma lo riconoscono tutti: una nave su una nave, con lo zar in cima.",
"Il parco Zarjad’e: aperto il 9 settembre 2017 accanto alla Piazza Rossa, dove per quarant’anni c’era l’enorme albergo Rossija, demolito nel 2006-2007. Il nome significa \"dietro le file dei mercanti\". Dentro ci sono zone che imitano i paesaggi della Russia: tundra, steppa, foresta, palude.",
"Il Ponte Fluttuante: una passerella che si protende sul fiume senza alcun pilastro, sostenuta solo dalla riva. Da qui il Cremlino si vede da vicino, con San Basilio a sinistra e i battelli che passano sotto.",
"Il Kitaj-gorod: il vecchio quartiere dei commercianti, fra la Piazza Rossa e il fiume, era circondato da mura. Oggi ne restano pezzi, uno proprio qui nel parco. \"Kitaj\" oggi vuol dire Cina, ma sull’origine del nome gli storici non sono d’accordo.",
"La via Varvarka: una fila di chiesette e di case di boiardi. Si è salvato il palazzetto dei boiardi Romanov, del Cinquecento: da questa famiglia nacque la dinastia degli zar che regnò dal 1613 al 1917.",
"Il Teatro Bolšoj: la compagnia nacque nel 1776 e l’edificio attuale, dopo l’incendio del 1853, fu rifatto da Albert Kavos e riaperto nel 1856. In cima c’è la quadriga di Apollo di Pëtr Klodt. Il Lago dei cigni di Čajkovskij andò in scena qui per la prima volta il 4 marzo 1877. Dal 2005 al 2011 il teatro è stato restaurato.",
"La Tverskaja: la via principale di Mosca. Negli anni Trenta fu allargata e alcuni palazzi furono spostati indietro su nuove fondamenta: il municipio arretrò di circa 14 metri. Davanti al municipio c’è la statua del fondatore, Jurij Dolgorukij: Mosca compare per la prima volta nelle cronache nel 1147.",
"La Piazza Puškin: la statua del poeta, inaugurata il 6 giugno 1880, fu pagata con una sottoscrizione pubblica; per l’inaugurazione arrivò da Pietroburgo Dostoevskij, che pronunciò un discorso famoso. Nel 1950 la statua fu spostata sull’altro lato della strada. Il 6 giugno, compleanno del poeta, la gente porta fiori.",
"Gli Stagni del Patriarca: un laghetto in un quartiere tranquillo, famoso perché qui comincia il romanzo Il maestro e Margherita di Michail Bulgakov. Accanto c’è il monumento a Ivan Krylov, il favolista, circondato dagli animali delle sue favole.",
"La Piazza Komsomol’skaja, detta \"delle Tre Stazioni\": qui si affiancano la stazione di Leningrado, quella di Jaroslavl’ e quella di Kazan’, da cui partono i treni per Pietroburgo, per la Siberia, per il Volga e per l’Oriente. È una delle piazze più affollate di Mosca.",
"La stazione Jaroslavskij, rifatta nel 1902-1904 dall’architetto Fëdor Šechtel’ in stile neorusso, con tetti a punta e maioliche colorate, sembra un castello di fiaba. Da qui parte la Transiberiana, la ferrovia più lunga del mondo: 9.289 chilometri fino a Vladivostok. Su un binario c’è anche il segnale del chilometro zero.",
"La Komsomol’skaja dell’anello, del 1952: un grande salone con il soffitto giallo, 68 colonne e otto mosaici di Pavel Korin con i condottieri della storia russa. Il progetto è di Aleksej Šusev, lo stesso architetto del mausoleo in Piazza Rossa e della stazione di Kazan’.",
"Sotto le tettoie i treni a lunga percorrenza aspettano accanto alle banchine. Ogni carrozza ha la sua provodnica, la custode, che controlla i biglietti e porta il tè nei bicchieri col portabicchiere di metallo. Prima di partire, per tradizione, ci si siede un momento in silenzio.",
"In fondo al binario, la luce di un altro mondo ti chiama."
];
const NAME={
mo_puskin:"Aleksandr Puškin",
mo_katja:"Katja, la studentessa di fisica",
mo_valentina:"Valentina, la gelataia del GUM",
mo_sergej:"Sergej, il macchinista della metropolitana",
mo_olga:"Olga, la restauratrice della Tret’jakov",
mo_artem:"Artëm, il fattorino in bicicletta",
mo_irina:"Irina, la maschera del Bolšoj",
mo_svetlana:"Svetlana, la provodnica della Transiberiana"
};
const GREET={
mo_puskin:"Eh, brat, benvenuto a Mosca, la mia città: ci sono nato! Sono Puškin, e tu sei Pierpaolo: lo so perché da queste parti le notizie corrono. Davaj, facciamo due passi sull’Arbat, ma senza fretta.",
mo_katja:"Privet! Sei già in piedi a quest’ora? Ladno, ti perdono: la vista vale. Io sono Katja, Pierpaolo, e questa terrazza è il mio posto preferito. Davaj, ti faccio vedere Mosca dall’alto.",
mo_valentina:"Eh, giovanotto! Gelato? Sì, lo so, fa freddo, ma da noi il gelato si mangia anche col cappotto. Sono Valentina, Pierpaolo, e questo è il posto migliore della piazza.",
mo_sergej:"Privet. Stai lontano dalla linea gialla, ladno? Sono Sergej, Pierpaolo, e questo è il mio ufficio: lungo, sotterraneo e sempre in orario. Se ti va, ti racconto come si fa a far correre un treno ogni novanta secondi.",
mo_olga:"Privet! Scusa, ho le mani occupate: la tazza è sacra, il resto no. Sono Olga, Pierpaolo, e passo le giornate a togliere duecento anni di polvere ai quadri. Davaj, ti racconto cosa nasconde questa facciata.",
mo_artem:"Privet! Scusa, ho una consegna e sono in ritardo, ma per te mi fermo trenta secondi. Sono Artëm, Pierpaolo, e questo è il posto più bello di Mosca al tramonto: lo dico io, che di posti ne vedo cento al giorno.",
mo_irina:"Buonasera! Biglietto? Non ce l’hai? Non importa: per chi ama il teatro un posto in piedi si trova sempre. Sono Irina, Pierpaolo, e queste porte le apro da trentacinque anni.",
mo_svetlana:"Biglietto e passaporto, giovanotto. Ah, non devi partire? Ma tu sei Pierpaolo, vero? Mi hanno detto che il treno ti aspetta. Sono Svetlana, la capitana di questo vagone, e qui si fa come dico io."
};
/* ---- facciate di strada, zona per zona ---- */
const PAST=['#e8c870','#a8cca0','#8ab4cc','#e8b4a8','#d9a441','#c8d4a8'];
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3);
 if(st==1){/* Colline dei Passeri: boschetti di betulle e tigli ingialliti, qualche abete */
  if(r>.12){[betu,tigl,abete,betu][md(i,4)](g,x+w*.5,gt,1.1+hr(i)*.4,TT);return}
  rect(g,'#6a727c',x+10,gt-34,w-40,34);rect(g,'#8a929a',x+10,gt-38,w-40,5);return}
 if(st==2){/* Arbat: palazzi pastello di tre-quattro piani con stucchi, finestre ad arco, balconcini */
  if(r>.9){tigl(g,x+w*.5,gt,1.1,TT);return}
  casa(g,x+6,w-30,h+30,i,k,{wall:PAST[md(i,6)],bal:1,arch:1,sh:'#2f6a46',roof:md(i,2)?'g':'r',gt:md(i,3)==0?'cafe':md(i,3)==1?'shop':'',sc:['#c8402a','#2a4a8a','#3a6a3a'][md(i,3)]});return}
 if(st==3){/* lungofiume: case ottocentesche pastello, mattoni rossi della vecchia fabbrica, tigli */
  if(r>.82){tigl(g,x+w*.5,gt,1.15,TT);return}
  if(md(i,5)==2){mat2(g,x+4,w-24,h+10,i,k);return}
  casa(g,x+6,w-30,h+10,i,k,{wall:PAST[md(i+2,6)],arch:md(i,2),sh:'#6a4a3a',roof:'g'});return}
 if(st==4){/* Piazza Rossa: mura rosse del Cremlino con le torri; il Museo Storico di mattoni */
  if(md(i,4)==3){torre(g,x+w*.5,gt,40,hf(i,100)+24,k,{h2:40,rh:44,rc:md(i,2)?'#3a7a5a':'#4a8a62'});return}
  muro(g,x,gt,w+2,100+hr(i)*8,k,i);return}
 if(st==5){/* metropolitana: pilastri di marmo e archi, nicchie dorate */
  rect(g,'#9a7a4a',x,gt-170,w,170);rect(g,'rgba(255,255,255,.05)',x,gt-170,w,170);
  const aw=w-34;g.strokeStyle=tn('#e8d0a0');g.lineWidth=10;g.beginPath();g.arc(x+w/2,gt-110,aw/2,Math.PI,0);g.stroke();g.strokeStyle=tn('#b8503a');g.lineWidth=3;g.beginPath();g.arc(x+w/2,gt-110,aw/2-8,Math.PI,0);g.stroke();
  rect(g,'#d8b878',x+w/2-aw/2,gt-110,aw,110);rect(g,'rgba(60,30,10,.28)',x+w/2-aw/2,gt-110,aw,110);rect(g,'#e8dcc0',x,gt-176,26,176);rect(g,'rgba(255,255,255,.3)',x,gt-176,6,176);rect(g,'rgba(0,0,0,.14)',x+18,gt-176,8,176);
  dot(g,'#fff6d0',x+w/2,gt-118,4);glow(g,x+w/2,gt-118,48,'255,226,150',.4);return}
 if(st==6){/* Zamoskvorečje: casette di mercanti, chiese bianche con cupole dorate, vecchie fabbriche, alberi */
  if(r>.84){tigl(g,x+w*.5,gt,1.1,TT);return}
  if(md(i,6)==1){rect(g,'#f2ede0',x+30,gt-120,56,120);rect(g,'rgba(0,0,0,.1)',x+68,gt-120,18,120);rect(g,'#7a96b0',x+50,gt-70,12,28);bulb(g,x+58,gt-120,34,48,'#e8b830',0,0,1.1);return}
  if(md(i,6)==4){mat2(g,x+4,w-30,h-10,i,k);return}
  casa(g,x+8,w-36,h-10,i,k,{wall:PAST[md(i,6)],arch:1,sh:'#2f6a46',roof:md(i,2)?'r':'g',gt:md(i,4)==0?'cafe':''});return}
 if(st==7){/* Zarjad'e: le mura rosse sul fianco del fiume, boschetti, collinette */
  if(r>.55){[betu,tigl,abete][md(i,3)](g,x+w*.5,gt,1+hr(i)*.4,TT);return}
  muro(g,x,gt,w+2,88,k,i+5);return}
 if(st==8){/* Teatral'naja e Tverskaja: palazzi crema e gialli, vetrine illuminate, insegne */
  casa(g,x+4,w-20,h+60,i,k,{wall:['#e8dcc0','#e8d890','#e8c8a8','#d8dcc8'][md(i,4)],arch:md(i,2),bal:1,sh:'#8a8478',roof:'f',gt:'shop',sc:['#6a2a22','#2a4a3a','#3a2a4a'][md(i,3)]});
  const nc=['#ff5a9a','#5af0b0','#ffd84a','#5ac8ff'][md(i,4)];rect(g,'#14110f',x+w-56,gt-112,38,12);rect(g,k>.1?nc:'#8a8478',x+w-53,gt-109,32,3);if(k>.1)glow(g,x+w-37,gt-106,30,'255,120,180',.25*k);return}
 /* 9: stazioni: palazzi di mattoni e di pietra, alberghi, pali della linea elettrica */
 if(md(i,5)==1){rect(g,'#b8bcc4',x+6,gt-h-30,w-40,h+30);rect(g,'rgba(0,0,0,.12)',x+w-52,gt-h-30,12,h+30);for(let r2=0;r2<(h+20)/18;r2++)rect(g,k>.2?'rgba(255,226,150,.7)':'rgba(150,190,215,.7)',x+14,gt-h-22+r2*18,w-56,12);return}
 if(md(i,5)==3){ln(g,'#14110f',2.4,[x+w/2,gt,x+w/2,gt-150]);ln(g,'#14110f',1.2,[x-80,gt-148,x+w+80,gt-150]);return}
 casa(g,x+6,w-30,h+10,i,k,{wall:['#a8553a','#c8c0a8','#d8d0b8','#b8a890'][md(i,4)],arch:md(i,2),sh:'#6a727c',roof:'f',gt:md(i,3)==0?'cafe':''})}
const hf=(i,b)=>b+hr(i*5)*40;
/* palazzo di mattoni rossi (vecchia fabbrica) con finestroni */
function mat2(g,x,w,h,i,k){const gt=GT;mat(g,'#a8453a',x,gt-h,w,h,i);rect(g,'rgba(0,0,0,.14)',x+w-14,gt-h,14,h);rect(g,'#d6d0ba',x-3,gt-h-4,w+6,5);
 for(let r=0;r<Math.floor((h-30)/40);r++)for(let q=0;q<Math.max(2,Math.floor(w/34));q++){const wx=x+10+q*34;rect(g,'#24160e',wx-1,gt-(r+1)*40-14,16,28);rect(g,lit(k,i*7+q+r*5)?LIT:'#7a9ab4',wx+1,gt-(r+1)*40-12,12,24)}
 if(md(i,3)==0){rect(g,'#8a3a2a',x+w-34,gt-h-90,22,92);rect(g,'#14110f',x+w-36,gt-h-92,26,5)}}
const mat=(g,c,x,y,w,h,s)=>PR._md.mat(g,c,x,y,w,h,s);
/* ---- livello 0: cielo, sole, luna, nuvole, velo dell'alba, e il salone della metropolitana ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-21000)/2400,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/19200,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*250;
 if(xs<19600){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,15)}
 const mu=cl((xs-20400)/2600,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*210;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<2400?'rgba(252,206,214,.75)':xs<15000?'rgba(255,255,255,.85)':xs<20000?'rgba(255,176,140,.7)':'rgba(140,120,190,.4)';
 each(o-((t*5)%340)*.02,340,1,(x,i,r)=>{if(r>.5)return;nube(g,x+r*100,40+r*46,.7+r*.5,cc)});
 const fo=cl(1-xs/2400,0,1)*.32;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-14400)/900,0,1)*cl((17000-xs)/900,0,1)*.16;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-17000)/800,0,1)*cl((20000-xs)/900,0,1)*.26;if(wg>.01){g.fillStyle='rgba(255,110,70,'+wg+')';g.fillRect(0,0,480,GT+4)}
 /* il salone sotterraneo: volta calda, nervature, lampade */
 const ug=cl((xs-11250)/330,0,1)*cl((14550-xs)/330,0,1);if(ug>.01){g.globalAlpha=ug;const gi=g.createLinearGradient(0,0,0,GT+4);gi.addColorStop(0,'#a8783a');gi.addColorStop(.5,'#dcb878');gi.addColorStop(1,'#f0d498');g.fillStyle=gi;g.fillRect(0,0,480,GT+4);
  for(let i=-1;i<4;i++){const bx=i*180-(cam*.02)%180;g.strokeStyle='rgba(110,70,26,.35)';g.lineWidth=10;g.beginPath();g.arc(bx+90,GT+70,150,Math.PI,0);g.stroke();g.strokeStyle='rgba(255,236,190,.35)';g.lineWidth=3;g.beginPath();g.arc(bx+90,GT+70,144,Math.PI,0);g.stroke();glow(g,bx+90,34,100,'255,236,170',.5)}
  g.globalAlpha=1}}
/* ---- livello 1: il lontano — il fiume con il ponte e lo stadio, i grattacieli, le cupole, il Cremlino, le luci delle stazioni ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const win=(sx,by,w,h,seed)=>{if(night>.3)for(let q=0;q<h/9;q++)if(hr(seed+q)>.4)rect(g,'rgba(255,226,160,.85)',sx+3+(q%Math.max(1,Math.floor(w/9)))*8,by+4+q*9,4,3)};
 /* zona 1: la valle della Moscova con il ponte a due piani, lo stadio, il convento e il grattacielo dell'università */
 const e1=env(1200,2300);if(e1>.02){g.globalAlpha=e1;const sx=fx(1200);
  [[-330,34,70],[-290,26,96],[-250,30,60],[300,28,84],[336,24,60]].forEach((b,i)=>{rect(g,dim('#a8c4d8'),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2]);rect(g,'rgba(255,255,255,.2)',sx+b[0]-b[1]/2,hz+16-b[2],4,b[2])});
  [[-110,70,26],[-84,50,40],[-62,34,56]].forEach((b,i)=>{rect(g,dim('#e0d4b4'),sx+b[0]-b[1]/2-120,hz+16-b[2]*1.4,b[1],b[2]*1.4)});poly(g,dim('#d8b030'),[[sx-190,hz-56],[sx-184,hz-84],[sx-178,hz-56]]);rect(g,dim('#e0d4b4'),sx-208,hz-56,40,72);poly(g,dim('#e0d4b4'),[[sx-212,hz-56],[sx-188,hz-44],[sx-164,hz-56]]);
  g.fillStyle=dim('#5a8a52');g.beginPath();g.moveTo(sx-420,hz+34);for(let q=0;q<=28;q++){const px=sx-420+q*30;g.lineTo(px,hz+8-10*Math.abs(Math.sin(q*.8)))}g.lineTo(sx+420,hz+34);g.closePath();g.fill();
  rect(g,dim('#7a9ab4'),sx-420,hz+22,840,26);for(let q=0;q<14;q++)rect(g,'rgba(255,255,255,.22)',sx-400+q*60+Math.sin(t+q)*5,hz+26+(q%3)*6,18,1.6);
  /* ponte a due piani con il tubo di vetro e il treno che lo attraversa */
  rect(g,dim('#8a8e96'),sx-160,hz+14,320,6);ln(g,dim('#6a6e78'),2,[sx-160,hz+14,sx-110,hz-4,sx-40,hz+14]);ln(g,dim('#6a6e78'),2,[sx-40,hz+14,sx+30,hz-4,sx+100,hz+14]);el(g,'rgba(190,225,240,.5)',sx,hz+26,150,8);rect(g,dim('#6a6e78'),sx-150,hz+24,300,2);const tb=((t*30)%380)-190;rect(g,'#c8402a',sx+tb-22,hz+22,44,7);for(let q=0;q<4;q++)rect(g,LIT,sx+tb-18+q*10,hz+23,6,3);
  /* stadio a cerchio e convento con le cupole */
  el(g,dim('#c8ccd4'),sx+250,hz+14,70,13);el(g,dim('#8a929a'),sx+250,hz+9,60,8);rect(g,dim('#e4dcc8'),sx+120,hz-6,70,22);merli(g,sx+120,hz-6,70,dim('#c8583a'));[[130,20],[150,26],[172,18]].forEach(b=>bulb(g,sx+b[0]+8,hz-6,b[1],b[1]*1.4,dim('#e8b830'),0,0,.5));
  g.globalAlpha=1}
 /* zona 2: i tetti pastello e il grattacielo staliniano con la guglia */
 const e2=env(3750,2500);if(e2>.02){g.globalAlpha=e2;const sx=fx(3750);
  for(let q=0;q<16;q++){const bx=sx-360+q*46,bh=34+hr(q*3)*44;rect(g,dim(PAST[q%6]),bx,hz+16-bh,40,bh);poly(g,dim(q%2?'#4a7a5a':'#9a4a3a'),[[bx-3,hz+16-bh],[bx+8,hz+16-bh-12],[bx+32,hz+16-bh-12],[bx+43,hz+16-bh]]);win(bx,hz+16-bh,40,bh,q*7)}
  const tx=sx+70;rect(g,dim('#d8ccaa'),tx-40,hz-40,80,56);rect(g,dim('#d8ccaa'),tx-26,hz-90,52,50);rect(g,dim('#d8ccaa'),tx-16,hz-130,32,40);poly(g,dim('#d8b030'),[[tx-8,hz-130],[tx,hz-190],[tx+8,hz-130]]);star5(g,tx,hz-196,5,dim('#d8b030'));win(tx-26,hz-86,52,50,5);g.globalAlpha=1}
 /* zona 3: le cupole dorate della cattedrale, le ciminiere di mattoni, le torri rosse in lontananza */
 const e3=env(6450,2800);if(e3>.02){g.globalAlpha=e3;const sx=fx(6450);
  rect(g,dim('#e8e2d2'),sx-90,hz-30,150,46);rect(g,dim('#e8e2d2'),sx-40,hz-64,50,34);[[-30,60,70],[-76,26,32],[40,26,32],[-12,24,30]].forEach(b=>bulb(g,sx+b[0],hz-(b[0]==-30?64:30),b[1],b[2],dim('#e8b830'),0,0,.6));
  for(let q=0;q<9;q++){const bx=sx-340+q*40,bh=30+hr(q*5)*36;rect(g,dim(q%2?'#a8453a':'#b8553a'),bx,hz+16-bh,34,bh);win(bx,hz+16-bh,34,bh,q*3)}rect(g,dim('#8a3a2a'),sx-310,hz-70,12,86);rect(g,dim('#8a3a2a'),sx-250,hz-90,12,106);
  for(let q=0;q<4;q++){rect(g,dim(MT0),sx+170+q*50,hz-20-q%2*14,26,36+q%2*14);poly(g,dim('#3a7a5a'),[[sx+167+q*50,hz-20-q%2*14],[sx+183+q*50,hz-48-q%2*14],[sx+199+q*50,hz-20-q%2*14]])}g.globalAlpha=1}
 /* zona 4: le torri rosse del Cremlino, i bulbi di San Basilio, un grattacielo che spunta fra i tetti */
 const e4=env(9600,1800);if(e4>.02){g.globalAlpha=e4;const sx=fx(9600);
  rect(g,dim(MT0),sx-380,hz-14,760,30);merli(g,sx-380,hz-14,760,dim(MT0));
  [[-300,22,50],[-220,26,70],[-110,24,52],[60,30,86],[190,24,58],[290,26,66]].forEach((b,i)=>{rect(g,dim(MT0),sx+b[0]-b[1]/2,hz+16-b[2]-20,b[1],b[2]+20);poly(g,dim(i%2?'#3a7a5a':'#4a8a62'),[[sx+b[0]-b[1]/2-3,hz-4-b[2]],[sx+b[0],hz-4-b[2]-30],[sx+b[0]+b[1]/2+3,hz-4-b[2]]]);win(sx+b[0]-b[1]/2,hz-b[2],b[1],b[2],i*9)});
  [[-150,18,30,'#2f8a4a'],[-132,22,36,'#e8c030'],[-112,18,28,'#c8402a'],[-92,20,32,'#2a62b8']].forEach(d=>bulb(g,sx+d[0]-160,hz-18,d[1],d[2],dim(d[3]),1,dim('#f4f0e4'),.4));
  rect(g,dim('#d8ccaa'),sx+100,hz-70,30,86);poly(g,dim('#d8b030'),[[sx+103,hz-70],[sx+115,hz-112],[sx+127,hz-70]]);g.globalAlpha=1}
 /* zona 6: il monumento a Pietro il Grande, le cupole e le ciminiere */
 const e6=env(15800,1600);if(e6>.02){g.globalAlpha=e6;const sx=fx(15800);
  for(let q=0;q<12;q++){const bx=sx-330+q*56,bh=26+hr(q*7)*34;rect(g,dim(PAST[q%6]),bx,hz+16-bh,46,bh);win(bx,hz+16-bh,46,bh,q*5)}
  [[-200,22,36],[-60,24,40],[210,22,34]].forEach(d=>{rect(g,dim('#f2ede0'),sx+d[0]-12,hz-30,24,46);bulb(g,sx+d[0],hz-30,d[1],d[2],dim('#e8b830'),0,0,.5)});
  [[0,60],[8,50],[-4,40],[4,30]].forEach((b,i)=>{rect(g,dim('#8a7a52'),sx+80+b[0]-b[1]/2,hz+16-60-i*32,b[1],28);poly(g,dim('#f4f0e4'),[[sx+80+b[0]-b[1]/2,hz-44-i*32],[sx+80+b[0],hz-92-i*32],[sx+80+b[0]+b[1]/2,hz-44-i*32]])});g.globalAlpha=1}
 /* zona 7: il Cremlino che si accende, San Basilio, il grattacielo sull'altra riva */
 const e7=env(18750,1600);if(e7>.02){g.globalAlpha=e7;const sx=fx(18750);
  g.fillStyle='rgba(255,140,70,.16)';g.fillRect(0,hz-110,480,170);rect(g,dim(MT0),sx-400,hz-4,800,24);merli(g,sx-400,hz-4,800,dim(MT0));
  [[-310,24,60],[-210,28,76],[-90,24,56],[130,26,70],[260,30,84]].forEach((b,i)=>{rect(g,dim(MT0),sx+b[0]-b[1]/2,hz+16-b[2]-14,b[1],b[2]+14);poly(g,dim('#3a7a5a'),[[sx+b[0]-b[1]/2-3,hz+2-b[2]],[sx+b[0],hz-28-b[2]],[sx+b[0]+b[1]/2+3,hz+2-b[2]]]);win(sx+b[0]-b[1]/2,hz-b[2],b[1],b[2],i*11)});
  [[-30,24,40,'#c8402a'],[-6,28,50,'#e8c030'],[20,24,42,'#2f8a4a'],[44,22,36,'#2a62b8']].forEach(d=>bulb(g,sx+d[0]-10,hz-8,d[1],d[2],dim(d[3]),1,dim('#f4f0e4'),.5));
  [[-60,18,30],[0,24,40],[60,18,32]].forEach(d=>bulb(g,sx+d[0]+150,hz-4,d[1],d[2],dim('#e8b830'),0,0,.5));
  const tx=sx+360;rect(g,dim('#c8bc9c'),tx-30,hz-50,60,66);rect(g,dim('#c8bc9c'),tx-18,hz-100,36,50);poly(g,dim('#d8b030'),[[tx-8,hz-100],[tx,hz-150],[tx+8,hz-100]]);win(tx-18,hz-96,36,70,3);
  rect(g,dim('#6a7a96'),0,hz+22,480,26);for(let q=0;q<10;q++)rect(g,'rgba(255,170,90,.3)',q*52+Math.sin(t+q)*8,hz+26+(q%3)*6,22,1.6);g.globalAlpha=1}
 /* zona 8: la città illuminata */
 const e8=env(21600,1500);if(e8>.02){g.globalAlpha=e8;const sx=fx(21600);
  [[-300,50,70],[-240,40,100],[-180,56,64],[-110,34,116],[-50,48,80],[10,40,130],[70,52,90],[130,36,112],[190,46,70],[250,40,96],[310,50,78]].forEach((b,i)=>{rect(g,dim(i%2?'#d0c8ae':'#e4dcc4'),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2]);rect(g,'rgba(0,0,0,.08)',sx+b[0]+b[1]/2-8,hz+16-b[2],8,b[2]);win(sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2],i*13)});
  [[10,40,130]].forEach(b=>poly(g,dim('#d8b030'),[[sx+b[0]-6,hz+16-b[2]],[sx+b[0],hz-148],[sx+b[0]+6,hz+16-b[2]]]));g.globalAlpha=1}
 /* zona 9: le tre grandi stazioni, i binari e i fili, le luci della città */
 const e9=env(24700,1900);if(e9>.02){g.globalAlpha=e9;const sx=fx(24700);g.fillStyle=dim('#1e2a3e');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20;g.lineTo(px,hz-8-12*Math.abs(Math.sin((px+o)*.01))-6*Math.sin((px+o)*.05))}g.lineTo(480,hz+30);g.closePath();g.fill();
  [[-150,70,60],[-60,50,92],[30,80,64],[130,56,100],[220,44,70]].forEach((b,i)=>{rect(g,dim('#8a96aa'),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2]);win(sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2],i*17)});
  rect(g,dim('#9a9c8a'),sx-210,hz-70,26,86);poly(g,dim('#6a727c'),[[sx-214,hz-70],[sx-197,hz-100],[sx-180,hz-70]]);dot(g,'#f8f4e8',sx-197,hz-50,6);
  poly(g,dim('#8a3624'),[[sx+60,hz-30],[sx+80,hz-70],[sx+100,hz-30]]);for(let q=0;q<10;q++)ln(g,'rgba(40,40,50,.5)',1,[sx-300+q*70,hz+14,sx-240+q*70,hz-6]);glow(g,sx,hz-20,200,'255,240,200',.32*night);g.globalAlpha=1}
 if(night>.35)for(let q=0;q<46;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.3)+')',q*11+hr(q)*8,hz+20+hr(q*3)*8,1.2)}
const MT0='#a8452e';
/* ---- livello 2: profili di palazzi, alberi e tetti, zona per zona ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;
  const wins=(n,top)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+14+(q%4)*20,top+Math.floor(q/4)*14,6,5)};
  if(zz==1){el(g,dim(['#a89a38','#c8a82e','#8a8a30','#2a6a34'][md(i,4)]),x+50,hz+14-r*6,52,24+r*8);el(g,dim('#c8a82e'),x+14,hz+20,30,14)}
  else if(zz==2){rect(g,dim(PAST[md(i,6)]),x+4,hz-56-r*34,80,66+r*34);rect(g,'rgba(255,255,255,.2)',x+4,hz-56-r*34,4,66+r*34);poly(g,dim(md(i,2)?'#4a7a5a':'#9a4a3a'),[[x,hz-56-r*34],[x+44,hz-76-r*34],[x+88,hz-56-r*34]]);wins(8,hz-48-r*34)}
  else if(zz==3){if(md(i,4)==1){rect(g,dim('#a8453a'),x,hz-60-r*30,w-10,70+r*30);wins(8,hz-50-r*30)}else{rect(g,dim(PAST[md(i+2,6)]),x,hz-50-r*30,w-8,60+r*30);rect(g,dim('#d6d0ba'),x-3,hz-54-r*30,w-2,5);wins(8,hz-40-r*30)}if(hr(i*3)>.7)el(g,dim('#a89a38'),x+70,hz-40,28,32)}
  else if(zz==4){rect(g,dim(MT0),x,hz-40-r*20,w+2,50+r*20);merli(g,x,hz-40-r*20,w+2,dim(MT0));if(hr(i*3)>.6){rect(g,dim(MT0),x+30,hz-90,26,60);poly(g,dim('#3a7a5a'),[[x+26,hz-90],[x+43,hz-122],[x+60,hz-90]])}}
  else if(zz==5){rect(g,dim('#e8dcc0'),x+10,hz-120,34,160);rect(g,'rgba(255,255,255,.25)',x+10,hz-120,6,160);rect(g,'rgba(80,40,10,.25)',x+44,hz-100,64,140);dot(g,'#fff6d0',x+76,hz-80,3.4);glow(g,x+76,hz-80,34,'255,226,150',.3)}
  else if(zz==6){rect(g,dim(PAST[md(i,6)]),x,hz-50-r*24,w-8,60+r*24);rect(g,dim('#d6d0ba'),x-3,hz-54-r*24,w-2,5);poly(g,dim('#8a3a2a'),[[x-3,hz-54-r*24],[x+20,hz-72-r*24],[x+w-28,hz-72-r*24],[x+w-5,hz-54-r*24]]);wins(8,hz-40-r*24);if(hr(i*3)>.8)el(g,dim('#c8a82e'),x+70,hz-36,28,32)}
  else if(zz==7){if(hr(i*3)>.5)el(g,dim(['#c8962a','#a89a38','#8a9a3a'][md(i,3)]),x+50,hz-10,60,34);else{rect(g,dim(MT0),x,hz-38-r*14,w+2,48+r*14);merli(g,x,hz-38-r*14,w+2,dim(MT0))}}
  else if(zz==8){rect(g,dim(['#e8dcc0','#e8d890','#e8c8a8'][md(i,3)]),x,hz-64-r*34,w-8,74+r*34);rect(g,dim('#d6d0ba'),x-3,hz-68-r*34,w-2,5);wins(8,hz-54-r*34);if(night>.1)for(let q=0;q<5;q++)rect(g,'rgba(255,200,110,.85)',x+8+q*18,hz-24,8,14)}
  else{rect(g,dim(['#a8553a','#c8c0a8','#bcb8aa'][md(i,3)]),x,hz-52-r*30,w-14,62+r*30);wins(10,hz-44-r*30);rect(g,dim('#6a6e78'),x+8,hz-60-r*30,w-30,6)}});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
/* ---- livello 3: la strada, zona per zona ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf2,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf2(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>150+hr(i*5)*60,170);
 each2(190,8,Z[1],Z[2],2,i=>130+hr(i*5)*50,170);
 each2(190,9,Z[2],Z[3],3,i=>130+hr(i*5)*40,160);
 each2(170,10,Z[3],Z[4],4,i=>104+hr(i*5)*20,170);
 each2(170,11,Z[4],Z[5],5,i=>150,170);
 each2(180,12,Z[5],Z[6],6,i=>130+hr(i*5)*40,170);
 each2(190,13,Z[6],Z[7],7,i=>150+hr(i*5)*50,170);
 each2(170,14,Z[7],Z[8],8,i=>140+hr(i*5)*40,160);
 each2(190,15,Z[8],Z[9],9,i=>140+hr(i*5)*60,170)}
/* ---- vita: cornacchie, piccioni, passeri, gabbiani, corridori, passanti con i cani, le auto della Tverskaja ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 /* piccioni sulle piazze (Arbat, Piazza Rossa, Bolšoj, stazioni) */
 const pg=Math.max(cl((xs-2600)/400,0,1)*cl((5000-xs)/400,0,1),cl((xs-7900)/400,0,1)*cl((11300-xs)/400,0,1),cl((xs-20300)/400,0,1)*cl((26000-xs)/400,0,1));
 if(pg>.05)for(let i=0;i<5;i++){const bx=((i*117+t*(46+i*6))%600)-60,by=70+hr(i*3)*100+Math.sin(t*2+i*2)*14,w=Math.sin(t*10+i)*3.4;g.strokeStyle='rgba(120,126,140,'+(.9*Math.min(1,pg))+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke();rect(g,'rgba(90,96,110,.9)',bx-2,by,5,3)}
 /* cornacchie grigie ovunque fuori dalla metropolitana */
 const ug=cl((xs-11250)/330,0,1)*cl((14550-xs)/330,0,1);
 if(ug<.5&&xs<24000)for(let i=0;i<3;i++){const bx=((i*201+t*(52+i*7))%640)-80,by=60+hr(i*5+4)*120+Math.sin(t*2.6+i)*12,w=Math.sin(t*9+i)*4;ln(g,'#3a3a40',2.6,[bx-9,by+w,bx,by,bx+9,by+w]);dot(g,'#5a5a62',bx,by+2,3.4)}
 /* passeri sulle colline */
 if(xs<2600)for(let i=0;i<4;i++){const bx=((i*171+t*(80+i*9))%620)-70,by=100+hr(i*5+2)*120+Math.sin(t*3+i)*10,w=Math.sin(t*16+i)*2;g.strokeStyle='rgba(90,66,40,.85)';g.lineWidth=1.8;g.beginPath();g.moveTo(bx-5,by+w);g.lineTo(bx,by);g.lineTo(bx+5,by+w);g.stroke()}
 /* gabbiani sul fiume (lungofiume e Zarjad'e) */
 const gb=Math.max(cl((xs-5300)/300,0,1)*cl((7900-xs)/300,0,1),cl((xs-17400)/300,0,1)*cl((19400-xs)/300,0,1));
 if(gb>.05)for(let i=0;i<4;i++){const bx=((i*131+t*(40+i*8))%600)-60,by=110+hr(i*3+9)*70+Math.sin(t*1.8+i*2)*16,w=Math.sin(t*6+i)*4;g.strokeStyle='rgba(244,244,248,'+(.95*Math.min(1,gb))+')';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-12,by+w);g.quadraticCurveTo(bx-5,by-5,bx,by);g.quadraticCurveTo(bx+5,by-5,bx+12,by+w);g.stroke()}
 /* corridori e passanti */
 [[300,2300,50,0],[5100,7700,-34,2],[16300,17400,40,1],[17500,19800,-38,0],[20300,22900,30,2]].forEach((rg,ri)=>{for(let i=0;i<2;i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.25),wx=rg[0]+(((t*sp+i*span/2)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));const d=sp>0?1:-1,by=GT+24+i*9;
  pers(g,px,by,t*3,{f:d,s:.7,ph:i,top:['#e8505a','#2a8a9a','#f2c82a'][(i+ri)%3],bot:'#2a2a36',hair:'#2a1a10'})}});
 /* le auto sulla Tverskaja */
 if(xs>20100&&xs<23200)for(let i=0;i<5;i++){const dir=i%2?-1:1,span=3000,wx=Z[7]+(((i*610+t*(60+i*6)*dir)%span)+span)%span,px=wx-cam;if(px<-80||px>560)continue;const by=GT+122-(i%2)*14;
  rect(g,['#c8402a','#2a62b8','#3a3a46','#e8e4d8','#3a8a4a'][i],px-26,by-16,52,12);poly(g,['#c8402a','#2a62b8','#3a3a46','#e8e4d8','#3a8a4a'][i],[[px-16,by-16],[px-9,by-27],[px+10,by-27],[px+18,by-16]]);rect(g,'#9ab4c8',px-8,by-25,16,8);dot(g,'#14110f',px-16,by-4,5);dot(g,'#14110f',px+16,by-4,5);dot(g,dir>0?'#fff6c0':'#ff5a4a',px+dir*26,by-11,3);dot(g,dir>0?'#ff5a4a':'#fff6c0',px-dir*26,by-11,2.4);glow(g,px+dir*30,by-10,36,'255,246,190',.3)}}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#d6cfb4','k'],[Z[1],Z[2],'#d8d2c0','l'],[Z[2],Z[3],'#b8b2a0','g'],[Z[3],Z[4],'#7a7470','c'],[Z[4],Z[5],'#d8c090','m'],[Z[5],Z[6],'#b8b4a4','b'],[Z[6],Z[7],'#a8a49a','r'],[Z[7],Z[8],'#5a5a62','a'],[Z[8],Z[9],'#8e8e90','v']];
 rect(g,'#e0d8c0',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const slabs=(bw0,add,al)=>{for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,15);rect(g,'rgba(0,0,0,.12)',px,yy,1.3,17)}rect(g,'rgba(0,0,0,.09)',x0,yy+15,x1-x0,1.4)}};
  if(z[3]=='k'){/* lastre di pietra della terrazza, poi ghiaia battuta e prato con la rugiada */
   slabs(64,10,.22);const gx=Math.max(x0,1500-cam);if(gx<x1){rect(g,'#6aa850',gx,gt+3,x1-gx,26);for(let q=0;q<50;q++)rect(g,'rgba(40,100,40,.3)',gx+((q*29)%Math.max(1,x1-gx)),gt+5+hr(q)*22,2,4);rect(g,'rgba(255,255,255,.22)',gx,gt+3,x1-gx,8);rect(g,'#cfc6a4',gx,gt+30,x1-gx,100);for(let q=0;q<90;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.3)':'rgba(120,100,60,.22)',gx+((q*47)%Math.max(1,x1-gx)),gt+34+hr(q+3)*88,2+hr(q)*3,1.6)}
   rect(g,'#b8b09a',x0,gt+120,x1-x0,3)}
  if(z[3]=='l'){slabs(26,5,.2);rect(g,'#7a766c',x0,gt+120,x1-x0,3);for(let q=0;q<4;q++)el(g,'#4a4a50',x0+((q*190+60-cam)%ww+ww)%ww,gt+130,7,3)}
  if(z[3]=='g'){slabs(70,12,.22);rect(g,'#b8b09a',x0,gt+120,x1-x0,3);for(let q=0;q<36;q++)dot(g,hr(q)>.4?'#d8a82e':'#b87a2a',x0+((q*37)%ww),gt+8+hr(q+2)*28,1.6)}
  if(z[3]=='c'){/* sampietrini scuri di granito e lastre chiare davanti al GUM */
   for(let r=0;r<7;r++){const yy=gt+7+r*19,bw=14+r*2.4,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5);rect(g,hh>.6?'rgba(255,255,255,.1)':hh>.3?'rgba(0,0,0,.14)':'rgba(255,255,255,.04)',px,yy,bw-1.6,Math.max(5,bw*.7))}}
   const gx0=Math.max(x0,9900-cam),gx1=Math.min(x1,10500-cam);if(gx1>gx0){rect(g,'#c8c0a8',gx0,gt+30,gx1-gx0,70);for(let r=0;r<4;r++)rect(g,'rgba(0,0,0,.09)',gx0,gt+30+r*17,gx1-gx0,1.2)}
   rect(g,'rgba(255,255,255,.06)',x0,gt+3,x1-x0,16);rect(g,'#5a544c',x0,gt+120,x1-x0,3)}
  if(z[3]=='m'){/* marmo lucido a disegni, banchina con la fascia gialla */
   rect(g,'#e0cca0',x0,gt+3,x1-x0,86);for(let r=0;r<5;r++)rect(g,'rgba(120,80,30,.12)',x0,gt+14+r*17,x1-x0,1.4);for(let k=-1;k<Math.ceil(ww/60)+2;k++){const px=Math.floor((cam+x0)/60)*60+k*60-cam;for(let r=0;r<5;r++)if((k+r)%2==0)rect(g,'rgba(120,70,40,.16)',px,gt+9+r*17,58,15)}
   rect(g,'rgba(255,255,255,.2)',x0,gt+10,x1-x0,6);rect(g,'#f2c82a',x0,gt+88,x1-x0,5);rect(g,'#3a3a40',x0,gt+93,x1-x0,34);rect(g,'#2a2a2e',x0,gt+104,x1-x0,2.4);rect(g,'#2a2a2e',x0,gt+116,x1-x0,2.4);rect(g,'rgba(255,255,255,.22)',x0,gt+104,x1-x0,.8);rect(g,'rgba(255,255,255,.22)',x0,gt+116,x1-x0,.8);for(let k=-1;k<Math.ceil(ww/14)+2;k++){const px=Math.floor((cam+x0)/14)*14+k*14-cam;rect(g,'#4a3a2a',px,gt+98,5,26)}}
  if(z[3]=='b'){/* ciottoli dei vicoli, lastre, aiuole */
   slabs(30,6,.14);for(let q=0;q<46;q++)rect(g,'#b8923a',x0+((q*57-cam)%ww+ww)%ww,gt+14+hr(q*3)*110,7,2.2);rect(g,'#a89c84',x0,gt+120,x1-x0,3);rect(g,'rgba(255,200,100,.08)',x0,gt+3,x1-x0,150)}
  if(z[3]=='r'){/* passerelle di legno, pietra chiara, prato e aiuole che imitano i paesaggi della Russia */
   rect(g,'#7aa844',x0,gt+3,x1-x0,34);for(let q=0;q<70;q++)dot(g,hr(q)>.4?'#d8a82e':'#b87a2a',x0+((q*37)%ww),gt+6+hr(q+2)*28,1.6);rect(g,'rgba(255,255,255,.18)',x0,gt+3,x1-x0,8);
   rect(g,'#9a7a4e',x0,gt+40,x1-x0,84);for(let r=0;r<8;r++)rect(g,'rgba(0,0,0,.14)',x0,gt+44+r*10.5,x1-x0,1.6);for(let k=-1;k<Math.ceil(ww/34)+2;k++){const px=Math.floor((cam+x0)/34)*34+k*34-cam;for(let r=0;r<8;r++)if(hr(k*7+r)>.5)rect(g,'rgba(0,0,0,.1)',px,gt+44+r*10.5,1.4,10)}rect(g,'#c8bc94',x0,gt+124,x1-x0,3);rect(g,'rgba(255,120,50,.14)',x0,gt+3,x1-x0,150)}
  if(z[3]=='a'){/* marciapiedi di granito, asfalto con strisce pedonali e linea tratteggiata */
   rect(g,'#b8b4a8',x0,gt+3,x1-x0,80);for(let r=0;r<5;r++)rect(g,'rgba(0,0,0,.1)',x0,gt+16+r*17,x1-x0,1.4);for(let q=0;q<60;q++)rect(g,'rgba(0,0,0,.1)',x0+((q*30-cam)%ww+ww)%ww,gt+3,1.4,80);
   rect(g,'#4a4a54',x0,gt+84,x1-x0,44);rect(g,'#8a8a88',x0,gt+82,x1-x0,3);for(let k=-1;k<Math.ceil(ww/46)+2;k++){const px=Math.floor((cam+x0)/46)*46+k*46-cam;rect(g,'#f4f0e6',px,gt+104,22,2.4)}
   for(let q=0;q<4;q++){const px=((q*360+120-cam)%700+700)%700-80;for(let w=0;w<8;w++)rect(g,'#f4f0e6',px+w*9,gt+86,5,38)}}
  if(z[3]=='v'){/* piazzale, banchina di cemento con la fascia gialla, binari */
   rect(g,'#9a9a98',x0,gt+3,x1-x0,86);for(let r=0;r<5;r++)rect(g,'rgba(0,0,0,.1)',x0,gt+16+r*17,x1-x0,1.4);for(let q=0;q<50;q++)rect(g,'rgba(255,255,255,.14)',x0+((q*53)%ww),gt+10+hr(q)*72,3,1.6);
   rect(g,'#e8c828',x0,gt+88,x1-x0,4);rect(g,'#6a6a6e',x0,gt+92,x1-x0,34);for(let k=-1;k<Math.ceil(ww/14)+2;k++){const px=Math.floor((cam+x0)/14)*14+k*14-cam;rect(g,'#5a4a3a',px,gt+96,5,26)}rect(g,'#2a2a2e',x0,gt+102,x1-x0,2.4);rect(g,'#2a2a2e',x0,gt+114,x1-x0,2.4);rect(g,'rgba(255,255,255,.22)',x0,gt+102,x1-x0,.8);rect(g,'rgba(255,255,255,.22)',x0,gt+114,x1-x0,.8)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1400,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const gd=cl((cam-14200)/700,0,1)*cl((16800-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
 const sg=cl((cam-17000)/700,0,1)*cl((19800-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{skin:tn(o.skin),top:tn(o.top),bot:tn(o.bot),hair:o.hair?tn(o.hair):o.hair,acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Katja: giacca a vento rossa, leggings da corsa, cuffie al collo, zaino leggero, coda di capelli, guance rosse */
 NP('mo_katja',NAME.mo_katja,1330,GREET.mo_katja,{skin:'#e8b8a0',top:'#d83a3a',bot:'#2a2a36',hair:'#6a4a2a',s:1.0},(g,b,t)=>{dot(g,'#e8806a',6,-96+b,2.6);ln(g,'#2a2a2e',2.6,[-8,-88+b,-8,-82+b,8,-82+b,8,-88+b]);dot(g,'#2a2a2e',-8,-84+b,3);dot(g,'#2a2a2e',8,-84+b,3);dot(g,'#6a4a2a',-13,-104+b,4.6);ln(g,'#6a4a2a',3.4,[-12,-102+b,-18,-92+b+Math.sin(t*3)*2]);rect(g,'#3a3e46',-18,-84+b,8,26);rect(g,'#f4f0e4',-11,-76+b,22,2)}),
 /* Puškin: redingote scura, cilindro, bastone, basette folte e ricci neri, un taccuino sotto il braccio */
 NP('mo_puskin',NAME.mo_puskin,3330,GREET.mo_puskin,{skin:'#e8c4a4',top:'#24202a',bot:'#24202a',hair:'#14110f',long:1,s:1.02},(g,b,t)=>{rect(g,'#14110f',-9,-124+b,18,15);rect(g,'#14110f',-14,-111+b,28,4);rect(g,'#3a3640',-9,-112+b,18,2.4);rect(g,'#14110f',5,-102+b,4,12);rect(g,'#14110f',-8,-104+b,3,9);rect(g,'#f4f0e4',-5,-90+b,12,5);poly(g,'#6a2a2a',[[-4,-86+b],[4,-86+b],[0,-76+b]]);
  ln(g,'#5a3a22',2.4,[18,-12,18,-86]);dot(g,'#c8a050',18,-88,3.2);rect(g,'#6a4a2a',-24,-72,14,18);rect(g,'#e8dcc0',-23,-71,12,16);ln(g,'#14110f',1,[-21,-66,-13,-66])}),
 /* Valentina: grembiule bianco, berretto bianco, guanti, sciarpa a quadri, cassa con il rotolo degli scontrini, mani rosse */
 NP('mo_valentina',NAME.mo_valentina,10030,GREET.mo_valentina,{skin:'#e0a888',top:'#e8e4d8',bot:'#3a3a46',hair:'#b8b8b8',s:1.0},(g,b,t)=>{rect(g,'#f4f0e6',-11,-78+b,22,36);rect(g,'rgba(0,0,0,.1)',-11,-78+b,3,36);rect(g,'#f4f0e6',-11,-116+b,22,7);rect(g,'#e8e4d8',-12,-110+b,24,3);for(let q=0;q<5;q++)rect(g,q%2?'#c8402a':'#f4f0e4',-10+q*4.4,-90+b,4.4,5);dot(g,'#e0806a',6,-96+b,2.6);dot(g,'#d8604a',-12,-52+b,3.2);dot(g,'#d8604a',12,-52+b,3.2);
  rect(g,'#4a4e54',18,-60,22,14);rect(g,'#2a2e34',20,-58,18,6);rect(g,'#f4f0e6',24,-68,10,8);ln(g,'#c8c0b0',1,[26,-66,36,-66])}),
 /* Sergej: divisa blu scura con berretto, valigetta di cuoio, guanti, tesserino al collo, occhi stanchi ma gentili */
 NP('mo_sergej',NAME.mo_sergej,12380,GREET.mo_sergej,{skin:'#d8a078',top:'#1c2a4a',bot:'#1c2a4a',hair:'#3a3a3e',s:1.04},(g,b,t)=>{el(g,'#14202e',0,-112+b,14,3.6);rect(g,'#14202e',-9,-122+b,18,10);rect(g,'#e8c040',-2,-118+b,4,3);rect(g,'#f4f0e4',-4,-86+b,8,12);rect(g,'#2a62b8',-3,-84+b,6,4);rect(g,'#6a4a2a',16,-50,24,18);rect(g,'#4a3220',16,-52,24,3);rect(g,'#c8a050',26,-46,4,4);ln(g,'#4a3220',2,[20,-52,22,-58,34,-58,36,-52])}),
 /* Olga: camice bianco con qualche macchia, lente d'ingrandimento sulla fronte, capelli raccolti con una matita, una tazza di tè */
 NP('mo_olga',NAME.mo_olga,15270,GREET.mo_olga,{skin:'#e0b090',top:'#f0eee8',bot:'#3a3a46',hair:'#6a4a30',s:1.0},(g,b,t)=>{rect(g,'rgba(0,0,0,.08)',-12,-84+b,3,40);dot(g,'#c8a050',-4,-60+b,2.6);dot(g,'#6a8a4a',6,-54+b,2);dot(g,'#c86a4a',-6,-48+b,1.8);dot(g,'#6a4a30',-5,-116+b,6);ln(g,'#e8c040',1.6,[-9,-118+b,-2,-112+b]);g.strokeStyle=tn('#8a8e94');g.lineWidth=1.6;g.beginPath();g.arc(4,-112+b,3.6,0,7);g.stroke();ln(g,'#8a8e94',1.6,[2,-112+b,-4,-108+b]);
  rect(g,'#e8e4d8',18,-64,8,8);rect(g,'#9a9ca2',17.6,-61,9,3);ln(g,'rgba(255,255,255,.5)',1,[21,-66,20,-70+Math.sin(t*3)*1])}),
 /* Artëm: giacca termica gialla, zaino quadrato per le consegne, casco appeso, cuffie al collo, macchina fotografica a tracolla */
 NP('mo_artem',NAME.mo_artem,18250,GREET.mo_artem,{skin:'#e0b090',top:'#f2c82a',bot:'#2a2e3a',hair:'#3a2a1a',s:1.0},(g,b,t)=>{rect(g,'#f2a82a',-26,-88+b,16,40);rect(g,'#14161c',-26,-88+b,16,6);rect(g,'rgba(255,255,255,.4)',-24,-72+b,12,2);ln(g,'#2a2a2e',2.6,[-8,-88+b,-8,-83+b,8,-83+b,8,-88+b]);dot(g,'#2a2a2e',-8,-84+b,3);dot(g,'#2a2a2e',8,-84+b,3);
  rect(g,'#14161c',6,-64+b,12,9);dot(g,'#4a6a8a',12,-60+b,3.2);ln(g,'#14161c',1.4,[-6,-88+b,10,-64+b]);dot(g,'#2a62b8',16,-52,6);rect(g,'#2a62b8',10,-52,12,3)}),
 /* Irina: tailleur bordeaux, spilla sul bavero, programma di sala in mano, occhiali con la catenella, capelli raccolti */
 NP('mo_irina',NAME.mo_irina,20490,GREET.mo_irina,{skin:'#e0b898',top:'#6a1a2a',bot:'#4a1a22',hair:'#b8b0a8',long:1,s:1.0},(g,b,t)=>{dot(g,'#b8b0a8',-4,-114+b,6.4);dot(g,'#e8c040',-6,-80+b,2.6);rect(g,'#f4f0e4',-4,-90+b,8,5);g.strokeStyle=tn('#6a4a2a');g.lineWidth=1.2;g.beginPath();g.arc(4,-102+b,3,0,7);g.stroke();ln(g,'#c8a050',.9,[1,-102+b,-9,-92+b,-8,-86+b,8,-86+b,9,-92+b]);
  rect(g,'#f4f0e4',18,-72,12,16);rect(g,'#a8802a',18,-72,12,2);ln(g,'#6a5a3a',1,[20,-66,28,-66]);ln(g,'#6a5a3a',1,[20,-62,26,-62])}),
 /* Svetlana: giacca e gonna grigie con un foulard rosso, berretto con la coccarda, mazzo di chiavi alla cintura, bicchiere di tè col portabicchiere di metallo */
 NP('mo_svetlana',NAME.mo_svetlana,25080,GREET.mo_svetlana,{skin:'#e0b090',top:'#6a6e78',bot:'#6a6e78',hair:'#8a6a3a',long:1,s:1.02},(g,b,t)=>{el(g,'#5a5e68',0,-112+b,14,3.6);rect(g,'#5a5e68',-9,-122+b,18,10);dot(g,'#e8402a',0,-117+b,2.6);poly(g,'#d8402a',[[-8,-90+b],[8,-90+b],[4,-80+b],[0,-76+b],[-4,-80+b]]);dot(g,'#c8a050',9,-52,2.4);ln(g,'#c8a050',1,[9,-52,12,-46]);
  rect(g,'#e8e4d8',18,-64,8,8);rect(g,'#9a9ca2',17.6,-62,9,4);ln(g,'rgba(255,255,255,.5)',1,[21,-66,20,-71+Math.sin(t*3)*1])})
];
/* ---- oggetti lungo il percorso ---- */
const LX=[450,1050,1650,2150, 2800,3520,4250,4800, 5500,6200,6850,7400, 8200,8900,9600,10200,10850, 11800,12500,13200,13850, 14700,15400,16100,16800, 17700,18400,19050,19700, 20650,21350,22000,22600, 23500,24150,24750,25250,25870];
const props=[
 /* zona 1 · Colline dei Passeri e Università Lomonosov */
 ['motarga',150,'COLLINE DEI PASSERI'],['mobetulla',260,1.1],['moterrazza',450],['molampione',720,1],['mochiosco',830,'te'],['momatri',930],['moponte',1050],['mocartello',1200,'ПАРК'],['mopanca',1290,1],['momono',1420,'#2ac86a'],['mocorvo',1520],['mouniv',1650],['mobetulla',1900,1.2],['moconvento',2160],
 /* zona 2 · Arbat */
 ['motarga',2470,'АРБАТ · ARBAT'],['moarbat',2800],['molampione',3070,3],['mopanca',3180,0],['mopuskin',3520],['mosposi',3780],['molampione',3930,3],['mocane',4020,'#c8a060'],['mocoj',4250],['mochiosco',4480,'te'],['mobetulla',4570,1],['movach',4800],['motiglio',5040,1],
 /* zona 3 · Cattedrale di Cristo Salvatore e lungofiume */
 ['motarga',5160,'ПРЕЧИСТЕНСКАЯ НАБЕРЕЖНАЯ'],['mocristo',5500],['molampione',5740,1],['mopanca',5800,1],['momuseo',6200],['motiglio',6480,1.1],['moponteluz',6850],['mottobre',7400],['momono',7660,'#8a5ae8'],
 /* zona 4 · Piazza Rossa e Cremlino */
 ['motarga',7860,'КРАСНАЯ ПЛОЩАДЬ'],['morossa',8200],['molampione',8530,3],['mosanbas',8900],['molampione',9170,3],['mospasskaja',9600],['mochiosco',9880,'te'],['mogum',10200],['mochiosco',10010,'gelato'],['mopanca',10520,1],['mocannone',10850],['molampione',11230,3],
 /* zona 5 · Metropolitana */
 ['mometro',11800],['motrenometro',12800],['morevol',12500],['momajak',13200],['mononov',13850],['mopanca',14120,1],
 /* zona 6 · Zamoskvorečje e Galleria Tret'jakov */
 ['motarga',14380,'ЗАМОСКВОРЕЧЬЕ'],['mozamos',14700],['molampione',15070,1],['motret',15400],['mobici',15720],['momuzeon',16100],['mopietro',16800],['mobetulla',17160,1.2],
 /* zona 7 · Parco Zarjad'e */
 ['motarga',17340,'ZARJAD’E'],['mozarja',17700],['mofluttuante',18400],['mokitaj',19050],['movarvarka',19700],['molampione',20100,1],
 /* zona 8 · Teatro Bolšoj e Tverskaja */
 ['motarga',20250,'ТЕАТРАЛЬНАЯ ПЛОЩАДЬ'],['mobolshoj',20650],['motver',21350],['mopzpusk',22000],['mostagni',22600],['motiglio',22900,1],
 /* zona 9 · Piazza delle Tre Stazioni */
 ['motarga',23080,'КОМСОМОЛЬСКАЯ ПЛОЩАДЬ'],['motre',23500],['mojaro',24150],['mokomso',24700],['mobinari',25250],['movarco',W1-130]
];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'mosca',name:'Mosca · Dalle Colline dei Passeri alle Tre Stazioni',width:W1,sky:['#9aa6d0','#f4b8c0','#ffe0c8'],gt:372,gr:['#d6cfb4','#a89c80'],chord:[196,246.9,293.7,370],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da mosca.txt) --- */
(function(){
const TOPX_MO={
mo_puskin:[
["Chi sei e dove sei nato?","Aleksandr Sergeevič Puškin, nato a Mosca nel 1799: il 26 maggio secondo il calendario di allora, il 6 giugno secondo il vostro. Nella Nemeckaja sloboda, la \"borgata tedesca\". Sono poeta, ma prima di tutto moscovita, nu."],
["Perché dicono che sei il più grande poeta russo?","Perché ho scritto nel russo che si parlava davvero, non in quello solenne dei libri di una volta. Il mio romanzo in versi Evgenij Onegin, i drammi come Boris Godunov, le fiabe: dopo di me i russi hanno scritto con un’altra lingua. Ma non vorrei vantarmi troppo, brat."],
["Dove hai studiato?","Al Liceo di Carskoe Selo, vicino a Pietroburgo, dal 1811, a dodici anni. Era una scuola nuova per i figli dei nobili: lì scrissi le prime poesie, e a quindici anni vidi stampata la prima. Con i compiti ero svogliato, ma i libri li divoravo."],
["Perché sei sull’Arbat?","Perché qui, al numero 53, ho abitato da giovane sposo, da febbraio a maggio del 1831. Ci sono rimasto poco, ma i moscoviti non dimenticano niente: ora c’è un museo e perfino una statua mia e di mia moglie. Mi hanno dato una casa che non ho mai finito di arredare!"],
["Come hai conosciuto tua moglie?","A un ballo a Mosca, nel dicembre del 1828, in una casa sul Tverskoj bulvar: Natalija Gončarova era la più bella della città. Mi sposai il 18 febbraio 1831, il 2 marzo per voi, nella chiesa della Grande Ascensione, in via Bolšaja Nikitskaja. Fu una bella giornata, nu."],
["Che cos’è stato l’autunno di Boldino?","Nel 1830 il colera mi fermò in campagna, a Boldino, per tre mesi. In quel tempo scrissi una cinquantina di opere, e finii l’Evgenij Onegin e I racconti del defunto Ivan Petrovič Belkin. Quando ti chiudono in casa, tanto vale usare bene il tempo."],
["Com’è finita la tua vita?","Con un duello a Pietroburgo, nel gennaio del 1837 secondo il mio calendario, contro un ufficiale francese, Georges d’Anthès. Morii due giorni dopo, a trentasette anni. Preferisco parlare d’altro: Mosca è piena di vita, davaj."],
["Com’è questa statua in piazza Puškin?","Mi hanno fatto un monumento in bronzo, inaugurato il 6 giugno 1880: l’hanno pagato i russi con una sottoscrizione, non lo zar. Venne da Pietroburgo Dostoevskij a parlare di me. Nel 1950 mi hanno spostato dall’altra parte della strada, e ora guardo la Tverskaja da un’altra sponda."],
["Che ne pensi del Museo Puškin delle Belle Arti?","Che nome! Il museo aprì nel 1912, quando portava il nome di uno zar. Solo nel 1937, per il centenario della mia morte, gli dettero il mio. All’inizio era pieno di copie in gesso, quindi mi hanno intitolato un museo di copie; oggi ci sono i quadri veri."],
["Cosa si mangia a Mosca?","Pirožki caldi, bliny con la panna acida, tè dal samovar, kvas ghiacciato. Una cosa semplice, ma preparata con amore. E ai moscoviti piace parlare mentre mangiano, ladno?"],
["Che usanza ti piace di più?","Non fischiare mai in una casa russa: si dice che si fischino via i soldi. Ancora oggi, se lo fai, qualcuno ti toccherà le labbra con un dito. Io che i soldi li perdevo senza fischiare, brat!"],
["Posso salutarti e proseguire la mia passeggiata?","Va’ pure, Pierpaolo, e non perderti: Mosca è grande, ma è gentile. Se ripassi sull’Arbat, cerca il numero 53 e salutami. Davaj, che il cammino ti sia lieve!"]
],
mo_katja:[
["Chi sei e che fai?","Katja, ventun anni, terzo anno di fisica all’università. Corro ogni mattina qui sulle colline, poi vado a lezione con i capelli ancora bagnati di rugiada. Non è il momento più elegante, ma funziona."],
["Perché sei qui all’alba?","Perché a quest’ora la terrazza è vuota e il cielo è rosa. Più tardi arrivano i pullman di turisti e non si vede più il fiume. Qui ripasso anche le formule: dopo la corsa il cervello è più sveglio, klass."],
["Cosa si vede da qui?","Il fiume, lo stadio Lužniki, il convento di Novodevičij, le cupole d’oro della cattedrale e i grattacieli di vetro del centro d’affari. Mosca ha circa tredici milioni di abitanti ed è la città più grande d’Europa. Da quassù, però, sembra un giocattolo."],
["Cos’è questo grattacielo?","Il palazzo principale dell’università: 36 piani e 240 metri con la guglia, costruito fra il 1949 e il 1953. Per quasi quarant’anni è stato l’edificio più alto d’Europa. È una delle Sette Sorelle, i sette grattacieli staliniani di Mosca."],
["Vivete lì dentro?","Nelle ali laterali ci sono i dormitori, che noi chiamiamo obščaga. Le stanze sono piccole ma hanno una vista pazzesca, e il quartiere è una città a sé, con mensa, biblioteche e negozi. D’inverno, però, il vento qui sulla collina è terribile."],
["Cos’è la Giornata di Tat’jana?","Il 25 gennaio, la festa degli studenti. L’università fu fondata nel 1755 con un decreto firmato proprio nel giorno di santa Tat’jana, che da allora è la nostra patrona. Coincide con la fine della sessione invernale: quindi, kruto, si festeggia due volte!"],
["Come si porta fortuna agli esami?","Alla stazione Ploščad’ Revoljucii si sfrega il naso del cane di bronzo: si dice che porti fortuna, e infatti è lucidissimo. Io ci passo sempre prima di un esame importante. Scientifica no, ma superstiziosa sì, nu."],
["Cosa mangiate in università?","Alla mensa kotlety con grechka, cioè polpette con grano saraceno, e il kompot, una specie di succo di frutta cotta. Nel dormitorio il doširak, i noodle istantanei, è un classico. Quando c’è lo stipendio, qualche pirožok del chiosco."],
["Cos’è il convento che si vede laggiù?","Novodevičij: mura merlate e cupole dorate sull’ansa del fiume, Patrimonio UNESCO. Davanti c’è uno stagno dove, si dice, Čajkovskij trovò l’ispirazione per il Lago dei cigni. Nel cimitero accanto riposano molti grandi, da Čechov a Gogol."],
["Come ti sposti in città?","Con la metro e con la Troika, la carta ricaricabile che vale anche per autobus e tram. C’è anche l’anello ferroviario, l’MCC, aperto nel 2016, che gira intorno alla città. E se sono in ritardo, un monopattino elettrico: davaj!"],
["Che differenza c’è tra Mosca e Pietroburgo?","Parole diverse! A Mosca l’ingresso del palazzo è podjezd, a Pietroburgo paradnaja; il kebab è šaurma a Mosca e šaverma là; il pollo è kuritsa a Mosca e kura là. E noi moscoviti pronunciamo le \"o\" come \"a\": \"Maskva\"."],
["Posso salutarti e proseguire la mia passeggiata?","Davaj, Pierpaolo! La giornata è lunga e Mosca non aspetta. Un consiglio: porta un maglione, anche se il sole sembra caldo. Poechali!"]
],
mo_valentina:[
["Chi sei e che fai?","Valentina, cinquantotto anni, vendo gelato al GUM da trent’anni. Ho cominciato da ragazza, e da allora ho visto passare tre generazioni di bambini con la bocca sporca di panna. La gente mangia gelato in ogni stagione, anche a meno dieci!"],
["Perché il gelato qui è famoso?","Perché è dolce di panna, un po’ come il fior di latte che fate voi, e viene servito in un cono di cialda. Si dice che la ricetta sia ancora quella degli anni Cinquanta. Io so solo che dopo il primo morso nessuno fa più domande."],
["Cos’è il GUM?","Il grande magazzino sulla piazza: Glavnyj universal’nyj magazin. Fu costruito fra il 1890 e il 1893, con il tetto di vetro e ferro dell’ingegnere Šuchov. Oggi ci sono negozi eleganti, caffè e una fontana: ma i chioschi del gelato sono i veri padroni."],
["Perché si chiama Piazza Rossa?","Non per il colore dei mattoni! In russo antico krasnaja voleva dire \"bella\", ed è una parola della stessa famiglia di krasivaja, che oggi significa \"bello\". Quindi è la Piazza Bella. Non è una scusa per i prezzi, eh?"],
["Cosa succede a Capodanno?","A mezzanotte tutta la Russia ascolta i rintocchi dell’orologio della Torre Spasskaja, con lo champagne in mano. Sulla tavola c’è l’insalata Olivier, dal nome di Lucien Olivier, il cuoco del ristorante Ermitage di Mosca che nell’Ottocento la inventò. E in televisione, ogni anno, gli stessi film."],
["Che film?","L’ironia del destino, che si dà ogni 31 dicembre, e Mosca non crede alle lacrime, che vinse l’Oscar come miglior film straniero. \"Mosca non crede alle lacrime\" è anche un modo di dire: qui ci si fa coraggio da soli, nu."],
["Cosa mangia un moscovita a pranzo?","Il biznes-lanč: un menù fisso con zuppa, insalata, secondo e bevanda a un prezzo onesto. La zuppa è sempre il borš o la soljanka. E poi il tè, mai senza."],
["Cosa si beve?","Tè, sempre, a volte con una cucchiaiata di marmellata. In estate il kvas, una bevanda fermentata di pane, e il mors, di mirtilli rossi. Il caffè lo bevono i giovani, noi vecchie facciamo la fila per il tè."],
["Come passano la domenica i moscoviti?","Alla dača! Il venerdì sera la città si svuota e le auto fanno code lunghissime. Si fa l’orto, il šašlik sulla brace e, per chi può, la banja, la sauna russa. Poi la domenica sera, di nuovo in fila per rientrare."],
["Che usanze ci sono a casa dei russi?","Si entra, si lasciano le scarpe all’ingresso e ti danno le tapočki, le pantofole. Non si dà la mano sulla soglia: si entra prima. E ti fanno mangiare finché non scoppi, perché dire di no è un’offesa."],
["Cosa ti piace di Mosca?","La sera, quando si accendono le luci e la gente smette di correre. I moscoviti sembrano freddi, ma se ti chiedi un’indicazione ti accompagnano fino in fondo. Basta saper aspettare il sorriso."],
["Posso salutarti e proseguire la mia passeggiata?","Davaj, Pierpaolo, vai pure. Ma prendi un gelato per la strada, e mangialo col cappotto, come si deve. Spasibo che sei passato!"]
],
mo_sergej:[
["Chi sei e che fai?","Sergej, macchinista da diciotto anni, quarantasei di età. Faccio turni lunghi e guido treni pieni di gente che sta già pensando alla cena. Quando non guido, abito in un quartiere di periferia e prendo, sì, anch’io la metro."],
["Come funziona la metro di Mosca?","Ha circa trecento stazioni, se si contano anche gli anelli ferroviari, e apre verso le cinque e mezza del mattino per chiudere all’una di notte. Nelle ore di punta passa un treno ogni novanta secondi, anzi, da qualche anno anche meno. Se perdi un treno, il prossimo è già qui."],
["Quando è nata?","Il 15 maggio 1935: 13 stazioni e 11 chilometri di linea. All’epoca fu un orgoglio enorme per la città. Oggi la usano milioni di persone ogni giorno, e i moscoviti la chiamano semplicemente \"metro\", come se fosse una persona di famiglia."],
["Perché le stazioni sono così belle?","Perché a Mosca la metro doveva essere un palazzo per tutti: marmo, bronzo, mosaici, lampadari. Qui a Ploščad’ Revoljucii ci sono 76 statue di bronzo di gente comune: soldati, operai, studenti, atleti. Alcune sono lucidissime, perché i passeggeri le toccano per scaramanzia."],
["Cos’è Majakovskaja?","Una delle stazioni più eleganti: archi sottili di acciaio e marmo rosa, e sul soffitto 34 mosaici di Dejneka con cieli, aerei e paracadutisti. Nel 1939 il progetto vinse il primo premio all’Esposizione di New York. Quando ci passo, rallento un po’: per ammirarla, certo."],
["Come ci si comporta in metro?","Sulle scale mobili si sta fermi a destra e si cammina a sinistra: chi lo dimentica si prende una gomitata educata. Si cede il posto agli anziani, alle donne con i bambini e a chi ha le braccia occupate. E in carrozza si legge, si guarda il telefono, ma si parla poco."],
["Perché le voci degli annunci sono diverse?","Sulla linea circolare, quando il treno va in senso orario, la voce che annuncia le fermate è maschile; in senso antiorario è femminile. Sulle altre linee, verso il centro parla una voce d’uomo, verso la periferia una di donna. Serve ai passeggeri non vedenti, e anche a chi si addormenta, nu."],
["Cosa ti è capitato di strano?","Una volta una signora è salita con un albero di Natale alto tre metri: non entrava nella porta, ma lo ha fatto entrare lo stesso. Un’altra con un gatto in una borsa: i gatti viaggiano in borsa, tranquilli. A Mosca la gente porta in metro di tutto, davaj."],
["Come si paga?","Con la Troika, la carta ricaricabile, oppure con il telefono o con la carta bancaria. Basta appoggiarla al tornello e si passa. Il prezzo della corsa è lo stesso, ovunque tu vada in città, spasibo."],
["Cosa fai dopo il turno?","Vado in dača da mio cognato, quando posso. Un po’ di orto, un po’ di banja e il tè con la marmellata. Poi la mattina dopo, di nuovo a guidare: il tè con la marmellata è la mia benzina."],
["Qual è la tua stazione preferita?","Novoslobodskaja, del 1952: 32 vetrate colorate illuminate da dietro, con cornici di ottone, di artisti lettoni su disegno di Pavel Korin. Sei raccontano persone al lavoro, le altre sono fiori e stelle. Sembra una chiesa, ma è una stazione: klass."],
["Posso salutarti e proseguire la mia passeggiata?","Davaj, Pierpaolo. Mi raccomando: alle porte, quando suona il segnale, non ci si prova a salire. Buon viaggio, e occhio al gradino!"]
],
mo_olga:[
["Chi sei e che fai?","Olga, trentanove anni, restauratrice alla Tret’jakov da dodici. Pulisco vernici ingiallite, chiudo le crepe e rimetto a posto i colori che si sono staccati. Il mio lavoro è far sembrare che io non sia mai stata lì."],
["Come si restaura un quadro?","Prima lo si guarda con luci speciali, anche ultraviolette, per capire cosa c’è sotto. Poi si pulisce con batuffoli e solventi, centimetro per centimetro: a volte ci vogliono mesi per un quadrato grande come una mano. E tutto quello che si fa deve potersi disfare, nu."],
["Cos’è la Tret’jakov?","Una galleria nata da un mercante, Pavel Tret’jakov, che dal 1856 comprava quadri di artisti russi. Nel 1892 regalò a Mosca la sua collezione, circa duemila opere. Oggi è un museo enorme, ma la prima stanza era in casa sua."],
["Qual è il tuo quadro preferito?","I tre bogatyr’ di Viktor Vasnecov: tre eroi a cavallo che guardano l’orizzonte. È un classico che ogni scolaro russo conosce. E poi l’icona della Trinità di Andrej Rublëv, conservata qui: quando la guardo, il tempo si ferma."],
["Perché la facciata è così fiabesca?","Perché l’ha disegnata lo stesso Vasnecov, che amava le fiabe russe: sembra un palazzo da leggenda, con mosaici e decorazioni di ispirazione antica. È dei primi del Novecento. Non per niente, i bambini quando la vedono dicono \"ma è un castello!\"."],
["Com’è Zamoskvorečje?","Un quartiere tranquillo, \"al di là della Moscova\": strade basse, cortili, chiesette e case color pastello. C’è la via Bol’šaja Ordynka, con i caffè, e le stradine dove si cammina senza fretta. Dopo il centro, qui sembra di tornare a respirare."],
["Cos’è il parco Muzeon?","Un museo all’aperto di sculture, nato nel 1992. Ci sono statue moderne e molte di epoca sovietica, tolte dalle piazze negli anni Novanta e portate qui fra gli alberi. I bambini ci giocano tra i giganti di bronzo, e a loro va benissimo."],
["E il monumento a Pietro il Grande?","Alto 98 metri, di Zurab Cereteli, inaugurato nel 1997: una nave su una nave, con lo zar in cima. Ai moscoviti non piace a tutti, ma tutti lo riconoscono. Quando il vento muove le vele, sembra quasi che parta."],
["Cos’è il Ponte Lužkov?","Un ponte pedonale dove gli sposi appendono un lucchetto con i nomi e buttano la chiave nell’acqua. Dal 2007 i lucchetti vanno su grandi alberi di metallo, per non appesantire il ponte. Ogni sabato d’estate è pieno di sposi: sembra un matrimonio unico."],
["Cos’è Ottobre Rosso?","Una vecchia fabbrica di cioccolato sull’isola Bolotnaja, oggi piena di caffè, gallerie e studi. Per anni l’aria del quartiere ha profumato di cioccolato. Le tavolette Alënka sono ancora un classico: sulla confezione c’è una bambina con il fazzoletto in testa."],
["Cosa fanno i moscoviti in autunno?","Aspettano il bab’e leto, l’estate di San Martino, quei giorni di sole dopo i primi freddi. Si va nei boschi a cercare funghi e si mettono sotto aceto i cetrioli. E la domenica, se c’è il sole, tutti a passeggiare nei parchi."],
["Posso salutarti e proseguire la mia passeggiata?","Davaj, Pierpaolo. Se passi dal parco Gorkij, porta un maglione: il fiume è fresco. E ricordati: guardare un quadro per cinque minuti, senza telefono, è già mezzo restauro."]
],
mo_artem:[
["Chi sei e che fai?","Artëm, ventisette anni, fattorino in bicicletta. Faccio circa cinquanta chilometri al giorno per portare pranzi e pacchi in giro. La sera, quando finisco, vengo qui con la macchina fotografica: kruto, no?"],
["Come funzionano le consegne?","Con un’app: ti arriva l’ordine, vai a prendere, consegni, e via al prossimo. Con la bici, in centro, di solito arrivo prima delle auto. D’inverno si va a piedi con lo zaino, e allora è un’altra storia."],
["Cos’è Zarjad’e?","Un parco aperto il 9 settembre 2017 dove prima c’era l’albergo Rossija, uno dei più grandi del mondo, costruito negli anni Sessanta e demolito nel 2006-2007. Il nome significa \"dietro le file dei mercanti\". Dentro ci sono zone che imitano tundra, steppa, foresta e palude."],
["Com’è il Ponte Fluttuante?","Una passerella che sporge sul fiume senza pilastri: sembra di camminare nel vuoto. Al tramonto la gente fa la fila per le foto, con il Cremlino che si accende dietro. Qualcuno ha anche chiesto la mano a qualcun altro: klass."],
["Quando è nata Mosca?","La prima volta compare nelle cronache nel 1147, quando il principe Jurij Dolgorukij invitò un altro principe a trovarlo \"a Mosca\". Ogni anno, il primo o secondo weekend di settembre, c’è il Giorno della Città con concerti e fuochi. Quest’anno era l’879° compleanno: non male!"],
["Cosa si mangia per strada?","Pirožki, bliny, la šaurma (il kebab, a Mosca si chiama così), il čeburek e il kukuruza, il mais bollito. E il kvas, quando fa caldo. D’inverno il tè nei bicchieri di carta, bollente."],
["Cos’è la via Varvarka?","Una stradina con chiesette bianche e rosse e la casa dei boiardi Romanov, del Cinquecento. Da quella famiglia nacque la dinastia degli zar che regnò dal 1613 al 1917. Se hai tempo, passa: sembra una Mosca da cartolina."],
["Qual è il momento più bello a Mosca?","Il tramonto, quando il sole accende le cupole d’oro e le mura del Cremlino diventano rosse. E la prima neve, quando tutto diventa silenzioso. Ma anche il bab’e leto, i giorni di sole dopo il freddo: nu, tutto bello."],
["Come reagite al maltempo?","Ci si lamenta, ma si esce lo stesso. D’inverno si mette un cappotto sopra un altro, e a meno venti si continua ad andare al lavoro. Qui si dice che non esiste il freddo, esiste solo il vestiario sbagliato."],
["Che slang parlate a Mosca?","Klass e kruto vogliono dire \"fico\", ladno è \"va bene\", prikol è \"che bello\" o \"che divertente\". Ci sono mille parole, ma con queste tre te la cavi già. E \"davaj\" va bene per tutto: andiamo, dai, ok, ciao."],
["Come sono i moscoviti?","Sempre di fretta, e non sorridono agli sconosciuti: sembra che siamo arrabbiati. Ma se chiedi aiuto, ti accompagnano fino in fondo e ti offrono il tè. Dicono che Mosca non crede alle lacrime: ma crede ai gesti, nu."],
["Posso salutarti e proseguire la mia passeggiata?","Davaj, Pierpaolo! Ormai il sole è sceso: vai al Bolšoj, il teatro è a due passi. Se mi vedi in giro con lo zaino giallo, saluta. Poechali!"]
],
mo_irina:[
["Chi sei e che fai?","Irina, sessantatré anni, controllo i biglietti, accompagno la gente al posto e rispondo a mille domande. In trentacinque anni ho visto ballare ogni titolo. Sono una spettatrice professionista, nu."],
["Perché si chiama Bolšoj?","Perché in russo bol’šoj vuol dire \"grande\". La compagnia nacque nel 1776, ben prima dell’edificio attuale. All’inizio era un teatro di quartiere, oggi è il più famoso di Russia."],
["Com’è l’edificio?","Otto colonne bianche e, in cima, la quadriga di Apollo di Pëtr Klodt. Dopo l’incendio del 1853, l’architetto Albert Kavos lo rifece e lo riaprì nel 1856. Dal 2005 al 2011 è stato restaurato: sei anni di cantiere, ma ne è valsa la pena."],
["Com’è la sala?","A ferro di cavallo, rossa e oro, con circa 1.740 posti e un lampadario di cristallo enorme. I palchi salgono in file ordinate fino al soffitto, e dall’alto la voce arriva chiarissima. Ogni sera, quando si abbassano le luci, il teatro sembra trattenere il fiato."],
["Cos’è il Lago dei cigni?","Il balletto di Čajkovskij. Andò in scena per la prima volta proprio qui, il 4 marzo 1877. Oggi lo ballano ogni stagione, e ogni volta le ragazze del corpo di ballo sono nuove e bravissime: davaj, se riesci, vallo a vedere."],
["Come ci si veste a teatro?","Eleganti, ma senza frac: l’importante è sentirsi in festa. All’ingresso si lascia sempre il cappotto al guardaroba e si prende il numerino; è obbligatorio, e nessuno discute. D’inverno le signore arrivano con gli stivali e si cambiano le scarpe nel foyer."],
["Cosa si porta agli artisti?","Fiori, sempre in numero dispari: tre, cinque, sette. I numeri pari sono solo per i funerali, quindi mai un mazzo di quattro o sei. Dopo lo spettacolo si portano sul palco o si lasciano alla porta degli artisti."],
["Come si applaude?","Tanto e a lungo: a Mosca il pubblico non esce di corsa. Si grida \"bravo!\" e \"bis!\", e a volte si applaude a tempo, tutti insieme. Il sipario si alza e si abbassa anche dieci volte, finché gli artisti non sono stremati."],
["Cosa si fa all’intervallo?","Si passeggia nel foyer e si va al buffet: tartine, panini, pasticcini e, per chi vuole, un bicchiere di champagne. Si chiacchiera di quello che si è visto, con un’aria da intenditori. Poi il campanello suona e tutti tornano di corsa."],
["Come ci si dà appuntamento a Mosca?","Con la frase v centre zala, \"al centro della sala\": è il punto d’incontro classico nelle stazioni della metro. Oppure \"sotto l’orologio\". Si arriva sempre con cinque minuti di anticipo, o te lo rinfacciano."],
["Cosa ti ha insegnato Mosca?","A essere puntuale e a non lamentarmi: quando qualcosa va storto si dice nu, ničego, \"non fa niente\", e si va avanti. Questa città ti stanca, ma ti dà un carattere forte. E ti insegna che il teatro non si salta mai."],
["Posso salutarti e proseguire la mia passeggiata?","Davaj, Pierpaolo. Ora va’, che la notte è lunga e il tuo treno ti aspetta. Spasibo della visita, e buon viaggio!"]
],
mo_svetlana:[
["Chi sei e che fai?","Svetlana, cinquantun anni, provodnica da venticinque. Sono la custode di un vagone: controllo i biglietti, pulisco, porto il tè, sveglio chi deve scendere. Sul treno nessuno ha un orario che non conosco io."],
["Cos’è la Transiberiana?","La ferrovia più lunga del mondo: 9.289 chilometri da Mosca a Vladivostok. La costruirono dal 1891 al 1916. Il treno \"Rossija\" ci mette poco più di sei giorni: un tempo che a molti pare lungo, e che io trovo breve."],
["Quanti fusi orari si attraversano?","Tanti: l’orologio cambia ogni giorno, ma i biglietti e gli orari sono sempre all’ora di Mosca, per non confondersi. Quindi sul treno ci sono due ore, quella di Mosca e quella del posto. Ma io mi regolo con il sole, nu."],
["Dove finisce l’Europa e comincia l’Asia?","Al chilometro 1.778 c’è un obelisco che segna il confine, tra gli Urali. Il treno rallenta, i passeggeri si affacciano ai finestrini, e qualcuno fa una foto con un piede di qua e uno di là. Io l’ho visto cento volte e mi emoziono ancora."],
["Com’è la vita a bordo?","Ci sono le carrozze aperte, con le cuccette, e quelle a scompartimenti da quattro. In fondo al vagone c’è il titan, un bollitore sempre acceso: con l’acqua bollente si fa il tè, e io lo servo nei bicchieri con il portabicchiere di metallo. Il tè in treno è un rito."],
["Cosa si mangia in treno?","Uova sode, cetrioli, pollo freddo, pane e salame, noodle istantanei; e alle fermate, sul binario, le signore vendono pirožki, patate calde e pesce affumicato. Mangiare in treno è una gara di condivisione: se hai un panino, ne offri la metà."],
["Che tradizione c’è prima di partire?","Ci si siede un momento in silenzio, come si fa prima di ogni viaggio, per sperare che vada bene. Si dice anche che non si debba tornare indietro per un oggetto dimenticato: se proprio lo si fa, ci si guarda allo specchio. Io lo faccio sempre, ladno?"],
["Com’è la stazione Jaroslavskij?","Una meraviglia: fu rifatta tra il 1902 e il 1904 dall’architetto Fëdor Šechtel’, in stile neorusso, con tetti a punta e maioliche colorate. Sembra un castello di fiaba. Qui, sul binario, c’è anche il segnale del chilometro zero."],
["Cosa sono le Tre Stazioni?","Tre stazioni affiancate: da Leningradskij si va a Pietroburgo, da Jaroslavskij in Siberia, da Kazanskij verso il Volga e l’Oriente. I moscoviti le chiamano tri vokzala. Kazanskij è la più affollata, ma Jaroslavskij è la più bella."],
["Com’è la stazione del metrò?","Komsomol’skaja, con il soffitto giallo e otto mosaici. Sembra un teatro: lampadari, stucchi, colonne. Ci passo ogni volta prima di prendere servizio, anche solo per guardarla un minuto."],
["Di cosa parlano i passeggeri?","Di tutto: pensionati con la dača, studenti, militari in licenza, turisti. Si fanno amicizie in un giorno, e ci si racconta la vita; in treno i russi si aprono più facilmente che in qualunque altro posto. Quando arrivano a destinazione, spesso piangono per l’addio."],
["Posso salutarti e proseguire la mia passeggiata?","Davaj, Pierpaolo. In fondo al binario c’è una luce: seguila, e non voltarti. Sčastlivogo puti, \"buon viaggio\"!"]
]
};
Object.assign(TOPX,TOPX_MO);
})();
