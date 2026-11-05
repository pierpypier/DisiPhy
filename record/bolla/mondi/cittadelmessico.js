/* ---------- CITTÀ DEL MESSICO · Dal mercato della Merced alla notte di Garibaldi (Merced, Zócalo e Templo Mayor, via Madero e Bellas Artes, Roma e Condesa, Reforma, Chapultepec, Coyoacán, Xochimilco, Plaza Garibaldi) ---------- */
/* Un'intera giornata da sinistra a destra: alba al mercato della Merced, mattina nello Zócalo e al Templo Mayor, tarda mattina sulla via Madero,
   primo pomeriggio a Roma e Condesa all'ora della comida, pomeriggio sulla Reforma fino all'Ángel, pomeriggio inoltrato nel bosco di Chapultepec,
   tardo pomeriggio a Coyoacán, tramonto sui canali di Xochimilco, notte a Plaza Garibaldi. In fondo, sotto l'arco di cempasúchil, c'è il varco.
   Testi, tappe e dialoghi vengono da messicocity.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico). Gli oggetti stanno in elementi.js (nomi che iniziano per "cm").
   Il tono per i temi dolorosi e per le tradizioni non provate è quello della scheda: descrittivo, sobrio e rispettoso. */
(function(){
const GT=372,W1=24600;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const C=PR._cm,{ln,gatto,pers,nf,lit,tez,muro,vn,bl,fio,papel,fresno,ahue,ahuj,lauro,alebrije,mariachi,piume,dome,cono,tenda}=C;
const md=(i,n)=>((i%n)+n)%n;
const Z=[0,2400,5400,7900,10300,12800,15600,18300,21000,W1+400];   /* inizio di ognuna delle 9 zone */
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
let TT=0;
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
const D={
 "INTRO": "Città del Messico, dall’alba alla notte. Parti dal mercato della Merced, quando i banchi si aprono fra chiles, frutta e tamales caldi; poi lo Zócalo ti porta nel cuore della città, accanto alle rovine del Templo Mayor. Nella tarda mattina la via Madero ti conduce fra piastrelle blu e marmi bianchi; all’ora della comida ti siedi a Roma e Condesa, davanti a un trompo di tacos al pastor. Il pomeriggio è fatto di viali, di un angelo dorato e di un bosco con un castello; poi Coyoacán, la Casa Azul e i colori degli alebrijes. Al tramonto le barche variopinte di Xochimilco scivolano sui canali; a notte, a Plaza Garibaldi, le trombe dei mariachi riempiono l’aria. Il tempo qui si piega: gli abitanti di ogni epoca ti vengono incontro, e la città è quella di oggi.",
 "LKTXT": [
  "La Merced, il grande mercato a est dello Zócalo, il più grande mercato tradizionale al dettaglio della città. L’edificio attuale è del 1957, inaugurato insieme ai mercati di Sonora e di Jamaica, ma qui si compra e si vende da secoli. Si dice che \"se non c’è alla Merced, non esiste\".",
  "La parte più grande del mercato è la navata della frutta, della verdura e dei legumi; vicino ci sono quella della carne e dei latticini e la zona dei cibi pronti. Ai banchi dei chiles ce ne sono di tutti i tipi, secchi e freschi: guajillo, ancho, pasilla, chipotle, habanero. Il venditore ti spiega a cosa servono, e ti dice quanto piccano.",
  "Accanto alla Merced c’è il Mercado de Sonora, fondato nello stesso 1957. È famoso per le erbe medicinali, le candele, gli oggetti della devozione popolare e, in autunno, per le decorazioni del Giorno dei Morti, la cartapesta e gli alebrijes.",
  "Poco più a sud, il Mercado de Jamaica, il grande mercato dei fiori della città, con più di mille banchi. Da qui arriva gran parte dei fiori che adornano le ofrendas del Giorno dei Morti, soprattutto i cempasúchil arancioni.",
  "Lo Zócalo, il cuore di Città del Messico. Il suo nome ufficiale è Plaza de la Constitución, ma tutti lo chiamano Zócalo, \"zoccolo\", perché per un certo periodo vi rimase soltanto la base di un monumento all’Indipendenza mai finito. È una delle piazze più grandi del mondo, più di duecento metri per lato. Ogni giorno un picchetto di soldati alza la grande bandiera alle otto del mattino e la ammaina alle sei di sera.",
  "Il Templo Mayor, il grande tempio dei Mexica: una piramide doppia dedicata a Huitzilopochtli, dio della guerra e del sole, e a Tláloc, dio della pioggia. Fu iniziato dopo il 1325 e ricostruito più volte, ogni volta più grande; dopo il 1521 fu smontato e coperto dalla nuova città, e la sua posizione fu dimenticata. Gli scavi moderni, dal 1978, ne hanno riportato alla luce le fondamenta, a pochi passi dalla Cattedrale.",
  "La Pietra di Coyolxauhqui: un grande disco di pietra scolpito, di più di tre metri di diametro, scoperto per caso nel 1978 da operai che scavavano per la compagnia elettrica. Mostra la dea Coyolxauhqui che, secondo il mito, fu sconfitta dal fratello Huitzilopochtli. Il ritrovamento diede il via agli scavi del Templo Mayor; oggi il disco si vede nel museo accanto agli scavi.",
  "La Cattedrale Metropolitana, sul lato nord dello Zócalo: una delle più grandi cattedrali dell’America Latina, costruita fra il 1573 e il 1813, quindi in quasi due secoli e mezzo, con stili che si sommano: rinascimentale, barocco, neoclassico. Poggia su un terreno morbido, l’antico fondo del lago: dentro, i lampadari sembrano pendere un po’ di lato.",
  "Il Palacio Nacional, sul lato est: la lunga facciata rossastra è la sede del governo federale. Si dice che sorga nel punto in cui si trovava il palazzo di Moctezuma, e che ne riusi molte pietre. Dal balcone centrale, ogni 15 settembre sera, si dà il Grido dell’Indipendenza sotto la campana di Dolores; sullo scalone Diego Rivera dipinse fra il 1929 e il 1935 un enorme murale sulla storia del Messico.",
  "La via Madero: una delle strade pedonali più frequentate del Centro Storico, che dallo Zócalo va verso ovest fino al Palacio de Bellas Artes. Si cammina fra negozi, caffè e palazzi antichi, e da lontano si sente la musica degli organilleros.",
  "La Casa de los Azulejos, la \"Casa delle Piastrelle\": un palazzo barocco del Settecento, appartenuto ai conti della valle di Orizaba, con la facciata coperta di piastrelle blu e bianche di Puebla. Dal 1919 ospita un celebre ristorante-negozio, e nel cortile interno c’è una fontana con mosaici. Si dice che il giovane che la fece così appariscente volesse dimostrare a suo padre di non essere un buono a nulla.",
  "La Torre Latinoamericana, inaugurata nel 1956: 44 piani, 182 metri con l’antenna, per quasi trent’anni il grattacielo più alto della città. Fu progettata per resistere ai terremoti, e infatti ha superato senza danni gravi i sismi del 1957, del 1985 e del 2017. In cima c’è un belvedere con la vista su tutta la città e, nei giorni limpidi, sui vulcani.",
  "Il Palacio de Bellas Artes: costruito fra il 1904 e il 1934, con l’esterno di marmo bianco fra liberty e neoclassico e l’interno déco. Dentro il teatro c’è un sipario di vetro fatto a New York dagli studi Tiffany, con quasi un milione di pezzi, che raffigura la valle di Messico con i vulcani Popocatépetl e Iztaccíhuatl. Sulle pareti dei piani superiori ci sono i murali di Rivera, Orozco, Siqueiros e Tamayo.",
  "La Colonia Roma, nata all’inizio del Novecento e battezzata con il nome della capitale italiana. Ha viali alberati, grandi case in stile francese e liberty, piazze con fontane, e oggi è piena di caffè, librerie e gallerie. In Plaza Río de Janeiro, al centro di una fontana, c’è la copia in bronzo del David di Michelangelo.",
  "La Condesa, a due passi da Roma, è famosa per le sue case art déco e per il Parque México. La grande strada ovale che lo circonda, l’Avenida Ámsterdam, ricalca la pista di un vecchio ippodromo. Alla sera si riempie di gente che passeggia con i cani.",
  "I tacos al pastor, il piatto simbolo della città: carne di maiale marinata nell’adobo (una salsa di chiles e spezie), infilata su un grande spiedo verticale, il trompo, con un ananas in cima; il taquero affetta la carne al momento e la serve su una piccola tortilla di mais con cipolla, coriandolo e ananas. Derivano dallo shawarma portato dagli immigrati libanesi all’inizio del Novecento.",
  "A Città del Messico il pasto principale è la comida, che si mangia nel primo pomeriggio, fra le due e le quattro. Molte persone vanno in una \"fonda\", una trattoria di quartiere, per la comida corrida: un menù fisso di più portate, con una zuppa, un riso o una pasta, un piatto di stufato e un’acqua fresca. E dopo si resta a tavola a chiacchierare: è la \"sobremesa\".",
  "Il Paseo de la Reforma, il grande viale della capitale. Fu aperto negli anni Sessanta dell’Ottocento per volere dell’imperatore Massimiliano, che lo chiamò Paseo de la Emperatriz in onore della moglie Carlota, per collegare il castello di Chapultepec con il centro. Oggi è circondato da grattacieli, e la domenica mattina si chiude alle auto: è la festa dei ciclisti.",
  "L’Ángel de la Independencia, il simbolo della città: una colonna alta circa 36 metri, con in cima una Vittoria alata ricoperta d’oro, inaugurata il 16 settembre 1910 per i cent’anni dell’Indipendenza. Alla base riposano alcuni eroi nazionali. Nel 1957 un terremoto fece cadere la statua, che fu restaurata e rimessa al suo posto; ancora oggi è il luogo dove i tifosi si ritrovano a festeggiare le vittorie della nazionale.",
  "Il Metro di Città del Messico, aperto nel 1969: ogni stazione ha un suo disegno, un pittogramma, pensato perché tutti, anche chi non sapeva leggere, potessero riconoscerla. La stazione Juanacatlán, il \"luogo delle farfalle\", ha una farfalla; quella di Chapultepec, la \"collina delle cavallette\", una cavalletta.",
  "In autunno, prima del Giorno dei Morti, lunghi tratti della Reforma si coprono di fiori di cempasúchil. I Mexica lo chiamavano \"fiore dei venti\" e, secondo la tradizione, il suo colore e il suo profumo guidano le anime dei defunti verso casa. Il Giorno dei Morti è una festa seria e affettuosa, riconosciuta dall’UNESCO, e non un \"Halloween messicano\".",
  "Il Bosque de Chapultepec, uno dei più grandi parchi urbani del continente, con circa 686 ettari fra boschi, laghi e musei. \"Chapultepec\" in nahuatl significa \"collina delle cavallette\". Era già un luogo di riposo per i sovrani mexica, e da qui un acquedotto portava l’acqua fino a Tenochtitlan.",
  "Il Museo Nazionale di Antropologia, aperto nel 1964: il più visitato del Messico, con ventitré sale che raccontano le culture dell’antico Messico, dai Maya ai Mexica. Al centro del grande cortile c’è una gigantesca tettoia a forma di ombrello, con l’acqua che scende tutt’intorno al pilastro. All’ingresso un enorme monolito di Tláloc accoglie i visitatori.",
  "La Piedra del Sol, nella sala mexica del museo: un disco di basalto di circa 3,6 metri di diametro e circa 24 tonnellate, ritrovato nel 1790 sotto lo Zócalo durante dei lavori. La chiamano \"calendario azteco\", ma non era un calendario: racconta i cinque \"soli\", le epoche del mondo secondo i Mexica, con al centro un volto, che si ritiene sia quello del dio del Sole.",
  "Il Castillo de Chapultepec, sulla cima della collina: costruito alla fine del Settecento, fu accademia militare, residenza dell’imperatore Massimiliano e di Carlota fra il 1864 e il 1867, poi residenza dei presidenti, e dal 1944 è il Museo Nazionale di Storia. È uno dei pochissimi castelli del Nordamerica ad aver ospitato dei sovrani. Dalle sue terrazze si vede la Reforma stendersi verso il centro.",
  "Il monumento ai Niños Héroes, a una delle entrate del parco: ricorda sei giovani cadetti del Collegio Militare che il 13 settembre 1847, durante la guerra con gli Stati Uniti, morirono difendendo il castello. Secondo la tradizione, uno di loro si sarebbe avvolto nella bandiera. È un luogo da attraversare con sobrietà, ricordando chi ci ha combattuto.",
  "Il cuore di Coyoacán: due piazze vicine, la Plaza Hidalgo e il Jardín Centenario, fra caffè, musicisti e gente che passeggia. Il nome Coyoacán viene dal nahuatl e significa probabilmente \"luogo dei coyote\": nel Jardín Centenario, una fontana con due coyote di bronzo lo ricorda.",
  "La Casa Azul, la casa-museo di Frida Kahlo: costruita nel 1904 dal padre di lei, è il luogo dove Frida nacque nel 1907 e dove morì nel 1954. È stata trasformata in museo nel 1958. Dentro ci sono i suoi dipinti, i suoi vestiti, il suo studio, la cucina e un giardino pieno di piante.",
  "Il Mercado de Coyoacán: un mercato di quartiere con circa trecentocinquanta banchi, famoso per le tostadas, tortillas croccanti con sopra pollo, tonno o verdure. Ci si va anche per la frutta, i fiori, le ceramiche e le spezie. Dopo una passeggiata, è il posto per fare merenda.",
  "Gli alebrijes sono creature fantastiche dai colori accesi, fatte di cartapesta e dipinte a mano. Nacquero a Città del Messico nel 1936, secondo il racconto, da un sogno di febbre dell’artigiano Pedro Linares. Oggi ogni artigiano ne inventa di nuovi: draghi, gatti alati, galli con corna.",
  "Le trajineras, le grandi barche variopinte di Xochimilco: lunghe, piatte, spinte con un lungo palo di legno dal trajinero, con un arco di fiori dipinto e di solito un nome di donna scritto sopra. Si affittano a ore, e si decide insieme dove andare e se mangiare o ascoltare la musica. Xochimilco, in nahuatl, significa \"luogo dei campi di fiori\".",
  "Le chinampas sono isole artificiali, fatte di fango, rami e piante, costruite dai popoli che abitavano il lago molto tempo prima dell’arrivo degli Spagnoli. Gli alberi di ahuejote, lungo i bordi, tengono ferma la terra. Qui si coltivano ancora fiori e ortaggi, e nel 1987 Xochimilco è stato dichiarato Patrimonio dell’Umanità dall’UNESCO.",
  "Sui canali ci sono barche di tutti i tipi: quelle che vendono quesadillas, elote, birra e micheladas, quelle con i fiori, quelle con un gruppo di mariachi pronto a suonare la canzone che chiedi. Le feste di compleanno, i matrimoni e le gite in famiglia si fanno spesso qui, sull’acqua.",
  "L’axolotl, in spagnolo ajolote: una piccola salamandra che vive solo qui e che rimane sempre \"bambina\", con le branchie a piume ai lati della testa. È in grave pericolo, e a Xochimilco ci sono progetti per proteggerlo. Per i Mexica era un animale importante.",
  "L’Isola delle Bambole, in una zona più interna dei canali: una piccola isola dove centinaia di bambole sono appese agli alberi. Secondo la leggenda, il custode dell’isola le appese negli anni Cinquanta per tenere lontano lo spirito di una bambina annegata nel canale. È un luogo che molti trovano inquietante; si visita con rispetto.",
  "Plaza Garibaldi, la piazza dei mariachi: a ogni ora, ma soprattutto di sera, gruppi di musicisti in abito da charro aspettano di essere chiamati per una canzone. Prende il nome da José \"Peppino\" Garibaldi, un nipote dell’eroe italiano Giuseppe Garibaldi, che combatté nella Rivoluzione messicana. Si contratta il prezzo prima, poi si sceglie la canzone.",
  "Il Salón Tenampa, il locale storico sul lato della piazza: aperto negli anni Venti, è considerato la casa dei mariachi di Città del Messico. Dentro si canta, si brinda e si ascolta musica fino a tardi. Il nome, dicono, potrebbe venire da una parola indigena che vuol dire \"luogo d’incontro\".",
  "Il Museo del Tequila e del Mezcal, sulla piazza, racconta due bevande tradizionali ricavate dall’agave, la pianta del deserto. Il tequila nasce nello stato di Jalisco, il mezcal soprattutto a Oaxaca. C’è anche una sezione sul mariachi e sulla storia della piazza.",
  "Sotto l’arco di cempasúchil, la luce passa lo stesso."
 ],
 "NAME": {
  "cm_lupe": "Doña Lupe, la venditrice di chiles",
  "cm_moctezuma": "Moctezuma II",
  "cm_chucho": "Don Chucho, l’organillero",
  "cm_beto": "Beto, il taquero",
  "cm_ximena": "Ximena, l’antropologa",
  "cm_rocio": "Rocío, l’artigiana di alebrijes",
  "cm_tono": "Toño, il trajinero",
  "cm_rafa": "Don Rafa, il mariachi"
 },
 "GREET": {
  "cm_lupe": "¡Buenos días, Pierpaolo! Pásele, pásele, no se quede ahí parado. Io sono Doña Lupe, e il mio banco è qui da prima che tu nascessi, mijo. ¿Qué va a llevar?",
  "cm_moctezuma": "Niltze, Pierpaolo. Dicono che qui il tempo si pieghi: lo trovo conveniente, perché mi permette di rivedere la mia città. Io sono Moctezuma, e sotto i tuoi piedi c’era il cuore di Tenochtitlan.",
  "cm_chucho": "¡Buenos días, joven Pierpaolo! Fermati un attimo e ascolta: questa è la musica che sente tutta la città, anche se nessuno ricorda come si chiama. Io sono Don Chucho, e la manovella la giro da quarant’anni.",
  "cm_beto": "¡Órale, Pierpaolo! Siéntate, siéntate, che la carne è appena uscita. Io sono Beto, e questo trompo gira da quando io avevo vent’anni. ¿Con todo?",
  "cm_ximena": "¡Hola, Pierpaolo! Che bello vederti qui, proprio all’ora in cui la luce è migliore. Sono Ximena, lavoro al museo, e questa è la terrazza da cui si capisce meglio la città. ¿Listo para subir?",
  "cm_rocio": "¡Hola, hola, Pierpaolo! Entra, ma attento a dove metti i piedi: qui ci sono gatti alati e draghi mezzi asciutti. Io sono Rocío, e i miei mostri sono tutti amici, vedrai.",
  "cm_tono": "¡Buenas tardes, joven Pierpaolo! Sali pure, che la barca non morde. Io sono Toño, e questa trajinera si chiama \"Rosalinda\", come mia madre. Il tramonto qui è il più bello, te lo garantisco.",
  "cm_rafa": "¡Muy buenas noches, Pierpaolo! Vieni, vieni, che la piazza si sta scaldando. Io sono Rafa, e la mia tromba suona da quando avevo quindici anni. ¿Te canto algo?"
 }
};

/* ---- cielo: alba fresca, mattina limpida d'alta quota, mezzogiorno bianco, pomeriggio dorato, tardo pomeriggio arancione, tramonto rosa e viola, notte ---- */
const SKY=[[0,['#7a98c8','#f6b4bc','#ffd6a8']],[1100,['#4a98e8','#a8d0f4','#f4e8d2']],[2400,['#2878e0','#5aa6f0','#cfe6f8']],[5400,['#2a80e6','#68b0f2','#dcecf8']],[7900,['#3a88e0','#8ec0f0','#f6efd8']],[10300,['#4a86d4','#9cc0e8','#f8eac0']],[12800,['#3c80d8','#98c0ee','#f2f0ec']],[14200,['#4a7ec8','#a4bce0','#f4e2b8']],[15600,['#5a74b8','#e8b890','#ffc07a']],[17400,['#5a6ab0','#f0a070','#ffb060']],[18300,['#6a5aa0','#f0687a','#ffa05a']],[19400,['#4a3a8a','#d85a86','#f8905a']],[20400,['#2a2a78','#8a4a8a','#e07a70']],[21000,['#10185a','#2a3478','#6a4a84']],[22000,['#070c3a','#101a58','#2a2e6a']],[W1+400,['#060a30','#101a58','#2a2e6a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
/* nuvolone di primo pomeriggio: torri bianche con il fondo grigio-azzurro */
const cumulo=(g,x,y,s,top,bot)=>{[[0,0,48,16],[-34,-2,30,14],[36,-1,34,15],[-8,-14,30,16],[18,-18,24,15],[-2,-30,18,12]].forEach(c=>el(g,top,x+c[0]*s,y+c[1]*s,c[2]*s,c[3]*s));el(g,bot,x,y+8*s,56*s,7*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-20300)/2200,0,1);if(nt>0)for(let i=0;i<54;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/20100,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*250;
 if(xs<20300){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,17)}
 const mu=cl((xs-20300)/2200,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*210;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 /* nuvole: poche all'alba e al mattino, nuvoloni carichi nel primo pomeriggio, rosa e arancio al tramonto */
 const cc=xs<1300?'rgba(252,206,214,.7)':xs<15400?'rgba(255,255,255,.82)':xs<19800?'rgba(255,170,140,.7)':'rgba(140,120,190,.4)';
 each(o-((t*4)%340)*.02,420,1,(x,i,r)=>{if(r>.4)return;nube(g,x+r*100,40+r*46,.6+r*.4,cc)});
 const cu=cl((xs-7000)/1800,0,1)*cl((16800-xs)/1800,0,1);if(cu>.02){g.globalAlpha=cu;const top=xs<15200?'rgba(255,255,255,.95)':'rgba(255,200,160,.9)',bot=xs<15200?'rgba(120,134,170,.85)':'rgba(200,110,110,.85)';each(o-((t*2)%700)*.02,380,3,(x,i,r)=>{if(r>.7)return;cumulo(g,x+r*60,150+r*70,.9+r*.8,top,bot)});g.globalAlpha=1}
 const fo=cl(1-xs/1300,0,1)*.3;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-7900)/1000,0,1)*cl((15400-xs)/900,0,1)*.1;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-15800)/800,0,1)*cl((19800-xs)/900,0,1)*.2;if(wg>.01){g.fillStyle='rgba(255,130,90,'+wg+')';g.fillRect(0,0,480,GT+4)}}

/* ---- livello 1: orizzonte lontano: torri della Cattedrale, Centro, Torre Latinoamericana, grattacieli della Reforma, collina di Chapultepec, vulcani, mare di luci ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const row=(sx,n,w0,c,hmin,hv,seed)=>{for(let q=0;q<n;q++){const bh=hmin+hr(q*3+seed)*hv,bx=sx+q*w0;rect(g,dim(c[q%c.length]),bx,hz-bh,w0-2,bh+34);rect(g,'rgba(0,0,0,.1)',bx+w0-7,hz-bh,5,bh+34);if(night>.3&&hr(q+seed)>.4)rect(g,'rgba(255,220,140,.7)',bx+3,hz-bh+5,3,3)}};
 /* 1-2 · tetti bassi del Centro, grandi tettoie del mercato e le due torri della Cattedrale */
 const m1=env(1900,4600);if(m1>.02){g.globalAlpha=m1;const sx=fx(1900);row(sx-560,34,28,['#d8c8a8','#c8b898','#e0cfb0','#c4a890'],10,22,3);
  for(let q=0;q<4;q++){g.fillStyle=dim('#9aaabb');g.beginPath();g.ellipse(sx-480+q*34,hz+2,17,10,0,Math.PI,0);g.fill()}
  rect(g,dim('#c4b898'),sx+120,hz-70,16,76);rect(g,dim('#c4b898'),sx+170,hz-70,16,76);dome(g,dim('#8a7e6e'),sx+128,hz-70,10,10);dome(g,dim('#8a7e6e'),sx+178,hz-70,10,10);rect(g,dim('#c4b898'),sx+120,hz-34,66,40);dome(g,dim('#9a8e7c'),sx+153,hz-34,16,12);g.globalAlpha=1}
 /* 2-3 · palazzi del Centro, Torre Latinoamericana, cupole arancioni di Bellas Artes */
 const m2=env(5600,5200);if(m2>.02){g.globalAlpha=m2;const sx=fx(5600);row(sx-520,34,30,['#d0c4a8','#c0b498','#dccfb4','#bcae94'],14,26,9);
  rect(g,dim('#aab4b8'),sx-60,hz-44,22,50);rect(g,dim('#9aa8b0'),sx-54,hz-80,10,40);rect(g,dim('#aab4b8'),sx-50,hz-96,2,18);rect(g,dim('#8a949a'),sx-52,hz-110,2,14);if(Math.sin(t*3)>0)dot(g,'#ff4040',sx-49,hz-112,1.6);
  dome(g,dim('#e8741a'),sx+80,hz-18,22,18);dome(g,dim('#f2c42a'),sx+80,hz-18,10,16);dome(g,dim('#e8741a'),sx+120,hz-12,12,10);g.globalAlpha=1}
 /* 4 · alberi e palazzine déco di Roma e Condesa */
 const m3=env(9300,4400);if(m3>.02){g.globalAlpha=m3;const sx=fx(9300);for(let q=0;q<24;q++){el(g,dim(['#4a7a44','#3a6a3c','#5a8a4a'][q%3]),sx-440+q*38,hz-6-hr(q)*10,24,16+hr(q+4)*10)}row(sx-400,18,40,['#e8dccc','#e0b8b0','#d8d0c0'],12,20,15);g.globalAlpha=1}
 /* 4-5 · i grattacieli di vetro della Reforma */
 const m4=env(11800,5200);if(m4>.02){g.globalAlpha=m4;const sx=fx(11800);[[-200,26,70],[-160,20,98],[-124,28,64],[-86,24,118],[-48,30,84],[0,22,104],[34,28,72],[74,24,92],[112,30,60],[150,22,80]].forEach((b,i)=>{const gl=['#7aa8c4','#8ab4cc','#6a98b8'][i%3];rect(g,dim(gl),sx+b[0],hz-b[2],b[1],b[2]+34);rect(g,'rgba(255,255,255,.25)',sx+b[0],hz-b[2],4,b[2]+34);for(let q=0;q<b[2]/8;q++)rect(g,'rgba(255,255,255,.12)',sx+b[0],hz-b[2]+q*8,b[1],1);if(night>.3)for(let q=0;q<b[2]/12;q++)if(hr(q+i*5)>.4)rect(g,'rgba(255,226,150,.8)',sx+b[0]+3+(q%3)*7,hz-b[2]+q*12+3,3,3)});g.globalAlpha=1}
 /* 5-6 · la collina boscosa di Chapultepec con il castello */
 const m5=env(14000,5000);if(m5>.02){g.globalAlpha=m5;const sx=fx(14000);g.fillStyle=dim('#5a8a4a');g.beginPath();g.moveTo(sx-420,hz+34);for(let q=0;q<=28;q++)g.lineTo(sx-420+q*30,hz-10-26*Math.sin(Math.PI*q/28)-5*Math.sin(q*1.9));g.lineTo(sx+420,hz+34);g.closePath();g.fill();
  for(let q=0;q<22;q++)el(g,dim(['#3a6a3a','#4a7a40'][q%2]),sx-300+q*28,hz-30-20*Math.sin(Math.PI*(q+3)/28*1.1)+hr(q)*6,16,9);
  rect(g,dim('#e8dcc0'),sx-20,hz-62,60,22);rect(g,dim('#d8ccaa'),sx-30,hz-76,14,36);rect(g,dim('#d8ccaa'),sx+30,hz-84,14,44);for(let q=0;q<3;q++){rect(g,dim('#d8ccaa'),sx-30+q*5,hz-82,3,6);rect(g,dim('#d8ccaa'),sx+30+q*5,hz-90,3,6)}g.globalAlpha=1}
 /* 7-8 · colline del sud e i due vulcani, Popocatépetl e Iztaccíhuatl, con un velo di nuvole in cima */
 const m6=env(19000,8000);if(m6>.02){g.globalAlpha=m6;const sx=fx(19000);g.fillStyle=dim('#8a7aa0');g.beginPath();g.moveTo(sx-640,hz+34);for(let q=0;q<=32;q++)g.lineTo(sx-640+q*40,hz-6-14*Math.sin(q*.45)-8*Math.sin(q*1.3));g.lineTo(sx+640,hz+34);g.closePath();g.fill();
  poly(g,dim('#6a5a8a'),[[sx-200,hz+4],[sx-150,hz-70],[sx-134,hz-78],[sx-118,hz-72],[sx-72,hz+4]]);poly(g,dim('#f4eef6'),[[sx-150,hz-70],[sx-134,hz-78],[sx-118,hz-72],[sx-124,hz-58],[sx-134,hz-64],[sx-142,hz-56]]);
  for(let q=0;q<3;q++)el(g,'rgba(255,255,255,'+(.25-q*.06)+')',sx-132+Math.sin(t*.3+q)*6+q*8,hz-84-q*12,14+q*8,5+q*2);
  poly(g,dim('#7a6a96'),[[sx+30,hz+4],[sx+60,hz-44],[sx+90,hz-30],[sx+120,hz-56],[sx+150,hz-34],[sx+186,hz-48],[sx+250,hz+4]]);poly(g,dim('#f0eaf2'),[[sx+60,hz-44],[sx+74,hz-37],[sx+90,hz-30],[sx+82,hz-34],[sx+68,hz-30]]);poly(g,dim('#f0eaf2'),[[sx+120,hz-56],[sx+132,hz-44],[sx+112,hz-46]]);poly(g,dim('#f0eaf2'),[[sx+186,hz-48],[sx+194,hz-40],[sx+176,hz-38]]);
  rect(g,'rgba(255,190,200,'+(.18*(1-night))+')',sx-640,hz-90,1280,124);g.globalAlpha=1}
 /* 9 · il mare di luci della città che si perde all'orizzonte */
 const m7=env(23200,5600);if(m7>.02){g.globalAlpha=m7;const sx=fx(23200);g.fillStyle=dim('#1a1a3e');g.beginPath();g.moveTo(sx-640,hz+34);for(let q=0;q<=32;q++)g.lineTo(sx-640+q*40,hz-12-8*Math.sin(q*.6)-5*Math.sin(q*1.8));g.lineTo(sx+640,hz+34);g.closePath();g.fill();
  glow(g,sx,hz-4,300,'255,190,100',.28);for(let q=0;q<150;q++){const lx=sx-620+q*8.3,ly=hz-8+hr(q*3)*30,cc=['255,226,140','255,120,90','130,240,150','255,210,90'][q%4];rect(g,'rgba('+cc+','+(.5+.4*Math.sin(t*2+q))+')',lx,ly,2.4,2.4)}g.globalAlpha=1}}

/* ---- facciate di strada: un edificio con finestre, cornicione, tetto e piano terra ---- */
function edif(g,x,w,h,i,k,o){const gt=GT,top=gt-h,n=Math.max(2,Math.floor(w/40)),fl=Math.max(1,Math.floor((h-52)/42));
 if(o.tz)tez(g,x,top,w,h,i);else if(o.stone)muro(g,o.wall,x,top,w,h,i);else{rect(g,o.wall,x,top,w,h);for(let q=0;q<w*h/900;q++)rect(g,'rgba(255,255,255,'+(.03+hr(q+i)*.05)+')',x+hr(q*3+i)*(w-8),top+hr(q*5+i)*(h-4),6+hr(q+1)*8,3)}
 rect(g,'rgba(255,255,255,.12)',x,top,5,h);rect(g,'rgba(0,0,0,.13)',x+w-11,top,11,h);
 for(let r=0;r<fl;r++)for(let q=0;q<n;q++){if(o.sparse&&hr(i*7+r*3+q)>.5)continue;const wx=x+11+q*(w-38)/Math.max(1,n-1),wy=gt-(r+1)*42-38;vn(g,wx,wy,13,23,k,i*13+r*7+q,o.fr);if(o.bal&&r>0)bl(g,wx-4,wy+24,21)}
 if(o.band)rect(g,o.band,x,top+h*.4,w,7);
 rect(g,o.cor||'#cfc4a8',x-3,top-4,w+6,6);
 if(o.roof=='tile'){poly(g,'#b8643a',[[x-6,top-4],[x+14,top-26],[x+w-14,top-26],[x+w+6,top-4]]);for(let q=0;q<w/8;q++)rect(g,'rgba(60,20,10,.2)',x+q*8,top-24,1.2,20)}
 else if(o.roof=='mans'){poly(g,'#4a4a58',[[x-6,top-4],[x+10,top-34],[x+w-10,top-34],[x+w+6,top-4]]);for(let q=0;q<Math.floor(w/44);q++){rect(g,'#5a5a68',x+14+q*44,top-30,14,18);poly(g,'#6a6a78',[[x+13+q*44,top-30],[x+21+q*44,top-38],[x+29+q*44,top-30]]);rect(g,lit(k,i+q)?'#ffe6a0':'#3a4a5a',x+17+q*44,top-26,6,10)}}
 else if(o.roof=='tin'){poly(g,'#8e969e',[[x-6,top-4],[x+14,top-22],[x+w-14,top-22],[x+w+6,top-4]]);for(let q=0;q<w/8;q++)rect(g,'rgba(255,255,255,.2)',x+q*8,top-20,1.4,16)}
 else if(o.roof=='d'){dome(g,'#dcd2b6',x+w*.5,top-4,w*.22,w*.2);dot(g,'#e8c04a',x+w*.5,top-4-w*.2-3,2)}
 else{rect(g,o.cor||'#cfc4a8',x-3,top-12,w+6,8);if(hr(i*5)>.5){const tx=x+w*(.3+.4*hr(i)),ty=top-12;rect(g,'#7a7a7a',tx-9,ty-9,2,9);rect(g,'#7a7a7a',tx+7,ty-9,2,9);el(g,'#d8dce0',tx,ty-17,10,8)}}
 if(o.gt=='arc'){const nn=Math.max(2,Math.floor(w/46)),aw=w/nn;for(let q=0;q<nn;q++)ar(g,'#2a1c10',x+q*aw+7,gt-4,aw-14,58);rect(g,o.cor||'#cfc4a8',x,gt-64,w,4)}
 else if(o.gt=='shop'){rect(g,'#2a2018',x+8,gt-56,w-16,50);rect(g,k>.2?'rgb(255,226,150)':'#4a3a2a',x+12,gt-52,w-24,40);poly(g,o.sc||'#c8402a',[[x+4,gt-62],[x+w-4,gt-62],[x+w-1,gt-46],[x+1,gt-46]]);for(let q=0;q<w/14;q++)rect(g,'rgba(255,255,255,.55)',x+6+q*14,gt-62,7,16)}
 else if(o.gt=='door'){ar(g,'#2a1a10',x+w/2-13,gt-6,26,52);ar(g,o.dc||'#6a4428',x+w/2-10,gt-6,20,46)}
 if(o.sign){rect(g,o.sign[0],x+10,gt-76,w-20,12);txt(g,o.sign[1],x+w/2,gt-67,7,o.sign[2]||'#fff')}
 rect(g,'rgba(0,0,0,.18)',x,gt-8,w,8)}
const GRIG=['#d8b48a','#c8d4c0','#e0a08a','#bcc8d8','#e8d49a'],COL=['#e8c040','#d8607a','#c8402a','#e89a3a','#f0d49a','#7ab8a8'],PIET=['#d8cdb4','#cfc4a8','#e4d8bc','#c8bca0'],FRAN=['#e4d8bc','#e8dcc8','#d8b0a0','#d0c8b4'];
const glassTower=(g,x,w,h,i,k)=>{const gt=GT,top=gt-h,gl=['#6a98b8','#7aa8c4','#5a88a8','#8ab4cc'][md(i,4)];rect(g,gl,x,top,w,h);const gr=g.createLinearGradient(x,0,x+w,0);gr.addColorStop(0,'rgba(255,255,255,.28)');gr.addColorStop(1,'rgba(0,0,0,.2)');g.fillStyle=gr;g.fillRect(x,top,w,h);
 for(let r=0;r<h/12;r++)rect(g,'rgba(255,255,255,.14)',x,top+r*12,w,1);for(let q=0;q<w/14;q++)rect(g,'rgba(20,40,60,.22)',x+q*14,top,1.4,h);if(k>.3)for(let r=0;r<h/12;r++)for(let q=0;q<w/14;q++)if(hr(i*9+r*3+q)>.55)rect(g,'rgba(255,226,150,.8)',x+q*14+3,top+r*12+3,8,6);
 rect(g,'#4a5a68',x-2,top-6,w+4,6);rect(g,'#8a949a',x+w/2-1,top-26,2,20);rect(g,'rgba(0,0,0,.2)',x,gt-10,w,10)};
function fac(g,x,w,h,i,st,wx){const k=A.getDK(),r=hr(i*3);
 if(st==1){if(r>.86){PR.cmCane&&0;fresno(g,x+w*.5,GT,.8);return}edif(g,x+4,w-26,h+20,i,k,{wall:GRIG[md(i,5)],roof:md(i,3)==0?'tin':'flat',gt:md(i,3)==1?'shop':'door',sc:['#c8402a','#2a8a5a','#2a62a8'][md(i,3)],sign:r>.5?[['#f4f2ea','#c8222a','#2a62a8'][md(i,3)],['FRUTAS','CHILES','ABARROTES','MOLE'][md(i,4)],'#c8222a']:0,sparse:1,dc:'#7a5a38'});return}
 if(st==2){if(md(i,5)==3){/* il Portal de Mercaderes: portici di tezontle */edif(g,x+2,w-10,96,i,k,{tz:1,gt:'arc',cor:'#d8cdb4',sparse:0});return}
  edif(g,x+4,w-20,h-10,i,k,{tz:r>.35,wall:'#c8bca0',stone:r<=.35,gt:md(i,2)?'arc':'door',cor:'#d8cdb4',roof:'flat',fr:'#d8cdb4',sparse:1});return}
 if(st==3){edif(g,x+4,w-24,h+30,i,k,{wall:PIET[md(i,4)],stone:1,roof:md(i,3)==0?'d':'flat',gt:md(i,3)==2?'arc':'shop',sc:['#2a62a8','#c8222a','#2a8a5a'][md(i,3)],bal:1,sparse:0,cor:'#e4dcc4',band:md(i,2)?'#b8aa88':null});return}
 if(st==4){if(r>.82){fresno(g,x+w*.5,GT,1.1);return}if(md(i,3)==1){edif(g,x+4,w-24,h+60,i,k,{wall:FRAN[md(i,4)],stone:0,roof:'mans',gt:'door',bal:1,cor:'#bcae94'});return}edif(g,x+4,w-24,h+20,i,k,{wall:['#f2ece0','#e8c8c0','#d8e0d8'][md(i,3)],roof:'flat',gt:md(i,2)?'shop':'door',sc:['#2a8a5a','#e8408a','#2aa8c8'][md(i,3)],bal:1,band:'#e8b8b0',cor:'#d0c4b0'});return}
 if(st==5){if(r>.7){fresno(g,x+w*.5,GT,1.2);return}glassTower(g,x+10,w-50,h+90+hr(i*11)*150,i,k);return}
 if(st==6){fresno(g,x+w*.3,GT,1.2+r*.4);if(r>.5)ahue(g,x+w*.78,GT,.9+r*.3);return}
 if(st==7){if(r>.8){lauro(g,x+w*.5,GT,1.1);return}edif(g,x+6,w-30,h-30,i,k,{wall:COL[md(i,6)],roof:'tile',gt:md(i,2)?'door':'shop',sc:['#2a62a8','#c8222a'][md(i,2)],dc:'#6a4428',bal:md(i,3)==0,sparse:1,cor:'#f4ecd4',fr:'#6a3a1c'});if(r>.5)papel(g,x+6,GT-130-hr(i)*20,w-30,TT+i,9);return}
 if(st==8){if(r>.55){ahuj(g,x+w*.3,GT,1.2);ahuj(g,x+w*.7,GT,1);return}edif(g,x+6,w-40,h-60,i,k,{wall:['#d8c8a0','#c8d4b8','#e0d4c0'][md(i,3)],roof:'tin',gt:md(i,2)?'door':'',sparse:1,cor:'#b8aa88'});return}
 edif(g,x+4,w-24,h+10,i,k,{wall:['#b8222a','#e8b02a','#c8402a','#d88a2a'][md(i,4)],roof:'flat',gt:md(i,2)?'arc':'shop',sc:['#2a8a5a','#e8408a'][md(i,2)],sign:r>.4?['#14110f',['CANTINA','TEQUILA','MARIACHI','TACOS'][md(i,4)],['rgb(255,226,122)','rgb(255,106,74)','rgb(122,240,208)'][md(i,3)]]:0,cor:'#8a1a22',sparse:0,fr:'#3a1a14'})}

/* ---- livello 2: profili di mercato, palazzi, alberi e tetti, zona per zona ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;
  const wins=(n,top)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+14+(q%4)*20,top+Math.floor(q/4)*14,6,5)};
  const house=(c,hh)=>{rect(g,dim(c),x+4,hz-hh,w-24,hh+10);rect(g,'rgba(255,255,255,.18)',x+4,hz-hh,4,hh+10);rect(g,dim('#b9a98a'),x,hz-hh-4,w-16,5);wins(6,hz-hh+10)};
  if(zz==1){if(r>.5){[0,1,2].forEach(q=>{g.fillStyle=dim('#8a9aa8');g.beginPath();g.ellipse(x+20+q*32,hz+4,17,22,0,Math.PI,0);g.fill()});rect(g,dim('#6a7a88'),x+3,hz+4,70,4);rect(g,dim('#e8402a'),x+10,hz-34,50,8)}else house(GRIG[md(i,5)],40+r*50)}
  else if(zz==2){rect(g,dim(TZ_),x,hz-40-r*10,w-6,50+r*10);for(let q=0;q<5;q++)rect(g,'rgba(255,255,255,.14)',x+8+q*20,hz-30,8,12);if(r>.7){rect(g,dim('#bcb4a2'),x+30,hz-120,26,126);dome(g,dim('#8a7e6e'),x+43,hz-120,14,14)}wins(3,hz-26)}
  else if(zz==3){house(PIET[md(i,4)],56+r*44);rect(g,dim('#3a4a6a'),x+10,hz-18,w-40,3);if(md(i,5)==1)dome(g,dim('#e8741a'),x+40,hz-62-r*44,18,15)}
  else if(zz==4){if(r>.5){el(g,dim('#4a7a44'),x+50,hz-22,44,28);rect(g,dim('#5a4a3a'),x+48,hz-8,4,18)}else house(['#f2ece0','#e8c8c0','#e4d8bc'][md(i,3)],44+r*40)}
  else if(zz==5){if(r>.4){const gh=70+r*70;rect(g,dim('#6a98b8'),x+10,hz-gh,w-44,gh+10);rect(g,'rgba(255,255,255,.2)',x+10,hz-gh,5,gh+10);for(let q=0;q<gh/12;q++)rect(g,'rgba(255,255,255,.12)',x+10,hz-gh+q*12,w-44,1)}else{el(g,dim('#4a7a44'),x+50,hz-24,40,26);rect(g,dim('#5a4a3a'),x+48,hz-8,4,18)}}
  else if(zz==6){el(g,dim(['#2e6a3a','#3a7a44','#2a5e34'][md(i,3)]),x+50,hz-34-r*14,54,34+r*10);el(g,dim('#3a7a44'),x+30,hz-24,34,20);rect(g,dim('#5a4a3a'),x+46,hz-10,8,20)}
  else if(zz==7){house(COL[md(i,6)],34+r*20);poly(g,dim('#b8643a'),[[x-2,hz-34-r*20-4],[x+10,hz-50-r*20],[x+w-30,hz-50-r*20],[x+w-14,hz-34-r*20-4]]);if(r>.7)lauro_(g,x+40,hz,dim)}
  else if(zz==8){if(r>.4){rect(g,dim('#4a3a2a'),x+48,hz-110,3,116);el(g,dim('#4a7a3a'),x+50,hz-112,7,32);el(g,dim('#58963f'),x+44,hz-90,6,22)}else{g.fillStyle=dim('#e8ecea');g.beginPath();g.ellipse(x+48,hz+6,36,20,0,Math.PI,0);g.fill();for(let q=0;q<5;q++)rect(g,'rgba(60,120,60,.35)',x+18+q*13,hz-8,6,12)}}
  else{house(['#b8222a','#e8b02a','#c8402a'][md(i,3)],40+r*30);if(night>.1)for(let q=0;q<4;q++)rect(g,'rgba(255,'+(200-q*30)+',110,.85)',x+10+q*14,hz-24,6,10)}});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
const TZ_='#7a3a2e';
function lauro_(g,x,y,dim){el(g,dim('#2e6a38'),x,y-24,26,22);rect(g,dim('#4a3a2a'),x-2,y-8,4,14)}

/* ---- livello 3: la strada, zona per zona ---- */
function layerStreet(g,o,t){TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>110+hr(i*5)*40,170);
 each2(190,8,Z[1],Z[2],2,i=>120+hr(i*5)*50,180);
 each2(180,9,Z[2],Z[3],3,i=>130+hr(i*5)*40,170);
 each2(190,10,Z[3],Z[4],4,i=>110+hr(i*5)*40,180);
 each2(200,11,Z[4],Z[5],5,i=>110+hr(i*5)*40,190);
 each2(210,12,Z[5],Z[6],6,i=>100,200);
 each2(180,13,Z[6],Z[7],7,i=>110+hr(i*5)*40,170);
 each2(180,14,Z[7],Z[8],8,i=>100+hr(i*5)*40,170);
 each2(180,15,Z[8],Z[9],9,i=>100+hr(i*5)*40,170);
 A.setDK(0)}

/* ---- vita: piccioni, zanates, passeri, colibrì, scoiattoli, aironi, farfalle, passanti ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 const pg=Math.max(cl((xs-2400)/300,0,1)*cl((7000-xs)/300,0,1),cl((xs-15600)/300,0,1)*cl((17200-xs)/300,0,1));
 if(pg>.05)for(let i=0;i<5;i++){const bx=((i*117+t*(46+i*6))%600)-60,by=70+hr(i*3)*100+Math.sin(t*2+i*2)*14,w=Math.sin(t*10+i)*3.4;g.strokeStyle='rgba(120,126,140,'+(.9*Math.min(1,pg))+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke();rect(g,'rgba(90,96,110,.9)',bx-2,by,5,3)}
 /* zanates: neri, code lunghe, in volo sopra i tetti */
 const zz=cl((xs-300)/300,0,1)*cl((19000-xs)/400,0,1);
 if(zz>.05)for(let i=0;i<4;i++){const bx=((i*131+t*(70+i*8))%620)-70,by=50+hr(i*9+3)*100+Math.sin(t*2.4+i*3)*14,w=Math.sin(t*14+i)*3;g.strokeStyle='rgba(20,20,40,'+(.9*zz)+')';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-2,by-5,bx+7,by-1+w);g.stroke();g.beginPath();g.moveTo(bx-8,by-w);g.quadraticCurveTo(bx-2,by+4,bx+7,by-2);g.stroke();ln(g,'rgba(20,20,40,'+(.9*zz)+')',2,[bx-6,by,bx-20,by+3])}
 /* passeri nelle piazze */
 if(xs<17000)for(let i=0;i<3;i++){const bx=((i*171+t*(80+i*9))%620)-70,by=100+hr(i*5+2)*120+Math.sin(t*3+i)*10,w=Math.sin(t*16+i)*2;g.strokeStyle='rgba(90,66,40,.85)';g.lineWidth=1.8;g.beginPath();g.moveTo(bx-5,by+w);g.lineTo(bx,by);g.lineTo(bx+5,by+w);g.stroke()}
 /* colibrì e farfalle nel bosco e a Coyoacán */
 const hb=cl((xs-12800)/300,0,1)*cl((18000-xs)/300,0,1);
 if(hb>.05){for(let i=0;i<2;i++){const bx=((i*200+t*12)%560)-40,by=190+hr(i*3)*60+Math.sin(t*3+i)*10,wb=Math.sin(t*50+i)*5;el(g,'rgba(40,170,120,'+hb+')',bx,by,5,2.6);dot(g,'rgba(120,40,160,'+hb+')',bx+5,by-1,2);ln(g,'rgba(60,60,60,'+hb+')',1,[bx+7,by-1,bx+14,by+1]);el(g,'rgba(220,240,240,.5)',bx-1,by-3+wb*.2,5,1.4+Math.abs(wb)*.3)}
  for(let i=0;i<3;i++){const bx=((i*171+t*18)%560)-40,by=210+hr(i*7)*70+Math.sin(t*2+i)*14,w=Math.abs(Math.sin(t*9+i))*5;el(g,['rgba(240,150,40,','rgba(240,230,90,','rgba(250,250,250,'][i]+hb+')',bx-3,by,3+w*.4,4);el(g,['rgba(240,150,40,','rgba(240,230,90,','rgba(250,250,250,'][i]+hb+')',bx+3,by,3+w*.4,4)}}
 /* scoiattoli sul prato di Chapultepec */
 [[13350,.4],[14600,-.5]].forEach((s,i)=>{const sx=s[0]+Math.sin(t*s[1]+i)*60-cam;if(sx<-30||sx>510)return;A.setDK(0);const d=Math.cos(t*s[1]+i)*s[1]>0?1:-1,jy=Math.abs(Math.sin(t*6+i))*5;el(g,'#8a8a8e',sx,GT+66-jy,8,4.6);dot(g,'#8a8a8e',sx+7*d,GT+62-jy,3.4);poly(g,'#8a8a8e',[[sx+6*d,GT+58-jy],[sx+7*d,GT+54-jy],[sx+9*d,GT+59-jy]]);ln(g,'#7a7a80',3.4,[sx-6*d,GT+64-jy,sx-12*d,GT+52-jy,sx-6*d,GT+48-jy])});
 /* aironi sui canali */
 const hz2=cl((xs-18400)/300,0,1)*cl((21400-xs)/300,0,1);
 if(hz2>.05){const bx=((t*26)%620)-60,by=120+Math.sin(t*1.4)*12,w=Math.sin(t*5)*5;g.strokeStyle='rgba(240,240,244,'+hz2+')';g.lineWidth=3;g.beginPath();g.moveTo(bx-16,by+w);g.quadraticCurveTo(bx-6,by-8,bx,by);g.quadraticCurveTo(bx+6,by-8,bx+16,by+w);g.stroke();ln(g,'rgba(240,240,244,'+hz2+')',2.4,[bx+2,by,bx+14,by-6]);ln(g,'rgba(120,120,130,'+hz2+')',1.4,[bx-2,by,bx-20,by+6])}
 /* passanti che camminano piano per le strade */
 [[300,2200,-14,0],[5450,7800,15,1],[7950,10200,-12,2],[15650,18200,13,3],[21050,24300,-11,4]].forEach((rg,ri)=>{for(let i=0;i<2;i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.3),wx=rg[0]+(((t*sp+i*span/2)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));const d=sp>0?1:-1,by=GT+24+i*10+(ri%2)*4;g.save();g.translate(px,by);g.scale(d*.6,.6);
  fig(g,0,0,t*2,{f:1,s:.7,ph:i+ri,skin:tn(['#d8a078','#c08860','#b87850'][(i+ri)%3]),top:tn(['#c8503a','#2a8a9a','#e8c04a','#4a6a3a','#8a4a9a'][(i*2+ri)%5]),bot:tn('#2a2a36'),hair:tn('#1a1008')});g.restore()}})}

/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#bdb8ac','m'],[Z[1],Z[2],'#dcd6c6','p'],[Z[2],Z[3],'#b9b6b0','v'],[Z[3],Z[4],'#a8a49a','r'],[Z[4],Z[5],'#7e7e86','a'],[Z[5],Z[6],'#cdbf9a','b'],[Z[6],Z[7],'#c8a888','c'],[Z[7],Z[8],'#a89a78','x'],[Z[8],Z[9],'#cdbfa8','g']];
 rect(g,'#c8c0a8',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const slabs=(bw0,add,al)=>{for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(60,40,20,.07)':'rgba(255,255,255,.05)',px,yy,bw-2,15);rect(g,'rgba(60,40,20,.12)',px,yy,1.3,17)}rect(g,'rgba(60,40,20,.1)',x0,yy+15,x1-x0,1.4)}};
  const cob=(n,al)=>{for(let q=0;q<n;q++){const px=x0+((q*23)%ww),py=gt+8+hr(q*3)*136;el(g,hr(q)>.5?'rgba(255,255,255,'+al+')':'rgba(60,40,20,.14)',px,py,7+hr(q+2)*5,3.4)}};
  if(z[3]=='m'){/* cemento levigato, corsie bagnate, selciato */
   slabs(52,5,.1);rect(g,'rgba(40,60,80,.12)',x0,gt+30,x1-x0,46);for(let q=0;q<26;q++)el(g,'rgba(120,150,170,.32)',x0+((q*47)%ww),gt+34+hr(q)*100,12+hr(q+3)*12,2.4);cob(40,.1)}
  if(z[3]=='p'){/* lastre chiare dello Zócalo, ombre nette */
   slabs(96,12,.18);rect(g,'rgba(255,255,255,.1)',x0,gt+3,x1-x0,34);for(let q=0;q<12;q++){const sx=((Math.floor((cam+x0)/200)+q)*200)-cam+30;rect(g,'rgba(60,40,20,.06)',sx,gt+3,2,150)}}
  if(z[3]=='v'){/* lastre grigie della via pedonale, tombini, scalinate di marmo */
   slabs(60,5,.14);for(let q=0;q<5;q++){const sx=((Math.floor((cam+x0)/260)+q)*260)-cam+120;el(g,'rgba(40,40,44,.4)',sx,gt+70,13,4);el(g,'rgba(120,120,130,.4)',sx,gt+69,10,3)}}
  if(z[3]=='r'){/* marciapiedi irregolari con radici, piastrelle consumate */
   slabs(46,4,.12);for(let q=0;q<14;q++){const sx=((Math.floor((cam+x0)/150)+q)*150)-cam+40;el(g,'rgba(70,60,50,.28)',sx,gt+14+hr(q)*10,22,3.4);rect(g,'rgba(100,150,70,.3)',sx-20,gt+48,40,4)}cob(30,.08)}
  if(z[3]=='a'){/* asfalto largo, pista ciclabile verde, aiuole */
   rect(g,'#5a5a62',x0,gt+60,x1-x0,90);rect(g,'#3a9a5a',x0,gt+30,x1-x0,26);rect(g,'rgba(255,255,255,.35)',x0,gt+56,x1-x0,2);for(let k=-1;k<ww/60+2;k++){const sx=Math.floor((cam+x0)/60)*60+k*60-cam;rect(g,'rgba(255,255,255,.6)',sx,gt+100,32,3)}rect(g,'#8a8a90',x0,gt+3,x1-x0,22);for(let q=0;q<10;q++)fio(g,x0+((q*58+cam*0)%ww),gt+14+hr(q)*4,3.4)}
  if(z[3]=='b'){/* viali di ghiaia, prato, rampe */
   rect(g,'#7aa04a',x0,gt+3,x1-x0,36);for(let q=0;q<80;q++)rect(g,'rgba(50,90,30,.4)',x0+((q*29)%ww),gt+5+hr(q)*32,2,4);rect(g,'rgba(0,0,0,.08)',x0,gt+38,x1-x0,2);for(let q=0;q<90;q++)el(g,hr(q)>.5?'rgba(255,255,255,.18)':'rgba(120,90,50,.18)',x0+((q*31)%ww),gt+48+hr(q*3)*96,5+hr(q+2)*4,2.2)}
  if(z[3]=='c'){/* lastroni di pietra e selciato */
   slabs(44,5,.12);cob(80,.16);for(let q=0;q<6;q++){const sx=((Math.floor((cam+x0)/180)+q)*180)-cam+60;rect(g,'rgba(255,180,100,.14)',sx,gt+6,70,6)}}
  if(z[3]=='x'){/* canale verde in alto, pontile di legno, argine erboso */
   rect(g,'#3f7a62',x0,gt+3,x1-x0,66);for(let q=0;q<26;q++)el(g,'rgba(255,255,255,.2)',x0+((q*37+t*10)%ww),gt+8+hr(q)*54,16+hr(q+2)*10,1.6);for(let q=0;q<14;q++)el(g,'rgba(255,170,130,.22)',x0+((q*53)%ww),gt+14+hr(q*2)*50,18,2.4);rect(g,'rgba(0,0,0,.14)',x0,gt+62,x1-x0,8);
   rect(g,'#8a7048',x0,gt+70,x1-x0,90);for(let r=0;r<6;r++){rect(g,'rgba(60,40,20,.28)',x0,gt+80+r*14,x1-x0,1.6);for(let k=0;k<ww/30+2;k++){const sx=Math.floor((cam+x0)/30)*30+k*30-cam+(r%2)*15;rect(g,'rgba(60,40,20,.2)',sx,gt+70+r*14,1.4,14)}}rect(g,'rgba(255,230,180,.12)',x0,gt+70,x1-x0,6)}
  if(z[3]=='g'){/* lastre chiare lucide, riflessi colorati */
   slabs(70,8,.16);rect(g,'rgba(255,255,255,.1)',x0,gt+3,x1-x0,40);for(let q=0;q<14;q++){const sx=((Math.floor((cam+x0)/150)+q)*150)-cam+40,cc=['255,214,120','255,100,70','110,230,140','255,214,120'][q%4];el(g,'rgba('+cc+',.16)',sx,gt+54+hr(q)*70,48,6)}}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1300,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const gd=cl((cam-7800)/700,0,1)*cl((15200-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,210,110,'+(.1*gd)+')',0,gt,480,150);
 const sg=cl((cam-15400)/700,0,1)*cl((19600-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,60,'+(.14*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));const q=Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)});['skin','top','bot','hair'].forEach(k=>{if(q[k])q[k]=tn(q[k])});fig(g,px,y,t,q)},d:{a:{t:d}}});
const npcs=[
 /* Doña Lupe: grembiule a righe, trecce grigie raccolte, scialle colorato, mani rosse di polvere di chile, piccola pala di metallo */
 NP('cm_lupe',D.NAME.cm_lupe,1230,D.GREET.cm_lupe,{skin:'#c08860',top:'#c8503a',bot:'#3a3a46',hair:'#9a9a9a',s:1.0},(g,b,t)=>{for(let q=0;q<6;q++)rect(g,q%2?'#e8e4da':'#2a7ab8',-11+q*3.7,-84+b,3.7,40);poly(g,'#c8206a',[[-14,-92+b],[14,-92+b],[11,-80+b],[-11,-80+b]]);for(let q=0;q<4;q++)rect(g,['#2aa8a0','#f2c42a','#f4f2e8','#2aa8a0'][q],-12+q*6,-90+b,2,8);
  dot(g,'#9a9a9a',-8,-113+b,5);ln(g,'#9a9a9a',3,[-9,-100+b,-13,-82+b]);dot(g,'#c8222a',-13,-50+b,4.4);dot(g,'#c8222a',13,-50+b,4.4);ln(g,'#8a8e94',2,[13,-50,24,-72]);poly(g,'#aeb4ba',[[21,-70],[30,-68],[27,-60],[20,-62]])}),
 /* Moctezuma II: mantello turchese, grande copricapo di piume di quetzal, orecchini d'oro, sandali dorati, bastone ornato */
 NP('cm_moctezuma',D.NAME.cm_moctezuma,3780,D.GREET.cm_moctezuma,{skin:'#b87850',top:'#1fa8b8',bot:'#1fa8b8',hair:'#14110f',long:1,s:1.04},(g,b,t)=>{rect(g,'#e8c04a',-12,-56,24,4);for(let q=0;q<5;q++)dot(g,'#e8c04a',-9+q*4.5,-54,1.4);rect(g,'#f4f0e6',-3,-92+b,6,12);
  piume(g,1,-118+b,38,11,'#2a9a4a','#1fa88a');rect(g,'#e8c04a',-12,-112+b,26,4);dot(g,'#c8222a',1,-110+b,2.4);dot(g,'#e8c04a',-10,-98+b,3);dot(g,'#e8c04a',12,-98+b,3);el(g,'#e8c04a',-6,-2,8,3);el(g,'#e8c04a',8,-2,8,3);
  ln(g,'#e8c04a',2.6,[18,-2,20,-130]);dot(g,'#2a9a4a',20,-134,4);dot(g,'#e8c04a',20,-134,2)}),
 /* Don Chucho: divisa cachi abbottonata, berretto con visiera, organetto di legno con la manovella, scimmietta di pezza, cappello per le monete */
 NP('cm_chucho',D.NAME.cm_chucho,6200,D.GREET.cm_chucho,{skin:'#c8946a',top:'#b8a878',bot:'#a89868',hair:'#8a8a8a',s:1.02},(g,b,t)=>{for(let q=0;q<4;q++)dot(g,'#e8c04a',0,-86+q*9+b,1.2);rect(g,'#a89868',-12,-115+b,24,7);rect(g,'#8a7a50',3,-110+b,16,3);
  rect(g,'#7a4a22',-26,-90+b,34,32);rect(g,'rgba(255,255,255,.14)',-26,-90+b,5,32);for(let q=0;q<5;q++){rect(g,'#e8c04a',-22+q*6,-100+b,3,10);}rect(g,'#5a3418',-26,-62+b,34,3);dot(g,'#e8c04a',-18,-74+b,2);dot(g,'#e8c04a',-8,-74+b,2);
  ln(g,'#d8a838',2,[8,-72+b,18,-66+b+Math.sin(t*8)*3]);dot(g,'#d8a838',18,-66+b+Math.sin(t*8)*3,2);dot(g,'#8a6a4a',-14,-104+b,4.4);dot(g,'#8a6a4a',-10,-108+b,3);poly(g,'#c8222a',[[-14,-112+b],[-8,-112+b],[-11,-108+b]]);ln(g,'#8a6a4a',1.6,[-18,-102+b,-24,-96+b]);
  el(g,'#4a2a14',34,-3,11,3.4);el(g,'#3a1e0e',34,-5,7,2.6);for(let q=0;q<4;q++)dot(g,'#e8c04a',30+q*3,-6,1.2)}),
 /* Beto: grembiule bianco macchiato di rosso, cappellino, maniche arrotolate, coltello lungo con una fetta di ananas sulla punta */
 NP('cm_beto',D.NAME.cm_beto,9750,D.GREET.cm_beto,{skin:'#c08860',top:'#e8e4da',bot:'#3a3a46',hair:'#2a1a10',s:1.02},(g,b,t)=>{rect(g,'#f4f2e8',-11,-92+b,22,46);for(let q=0;q<5;q++)dot(g,'#c8222a',-8+q*4,-70+(q%2)*10+b,2.4);rect(g,'#c8222a',-12,-114+b,24,6);rect(g,'#a81a20',3,-110+b,16,3);
  dot(g,'#c08860',-12,-62,4.4);dot(g,'#c08860',12,-62,4.4);ln(g,'#c8ccd0',3,[12,-50,32,-70+Math.sin(t*4)*3]);dot(g,'#f2c42a',34,-72+Math.sin(t*4)*3,5);dot(g,'#c8a020',34,-72+Math.sin(t*4)*3,2)}),
 /* Ximena: giacca verde scuro, occhiali, cappello di paglia, taccuino di schizzi, badge del museo */
 NP('cm_ximena',D.NAME.cm_ximena,15080,D.GREET.cm_ximena,{skin:'#e0b090',top:'#2a4a3a',bot:'#4a4a42',hair:'#4a2a1a',s:1.0},(g,b,t)=>{el(g,'#e8d090',1,-110+b,20,4);el(g,'#e8d090',1,-116+b,11,6);rect(g,'#2a4a3a',-11,-112+b,24,2.4);
  g.strokeStyle=tn('#2a2a2e');g.lineWidth=1.2;g.beginPath();g.arc(3,-101+b,2.8,0,7);g.arc(10,-101+b,2.8,0,7);g.stroke();ln(g,'#2a2a2e',1,[6,-101+b,7,-101+b]);
  ln(g,'#c8222a',1.4,[-4,-90+b,0,-82+b,4,-90+b]);rect(g,'#f4f2e8',-3,-82+b,7,9);rect(g,'#2a62a8',-3,-82+b,7,2);rect(g,'#e8dcc0',8,-62,11,13);rect(g,'#2a2a2e',8,-62,2,13);for(let q=0;q<3;q++)ln(g,'#2a2a2e',.8,[11,-59+q*3.4,17,-59+q*3.4])}),
 /* Rocío: grembiule sporco di colori, foulard, pennelli dietro l'orecchio, mani macchiate, orecchini a farfalla, un alebrije in mano */
 NP('cm_rocio',D.NAME.cm_rocio,18080,D.GREET.cm_rocio,{skin:'#c08860',top:'#c8503a',bot:'#3a3a56',hair:'#2a1a10',s:1.0},(g,b,t)=>{rect(g,'#f4f0e6',-11,-92+b,22,46);[['#e8408a',-6,-80],['#2aa8c8',3,-70],['#f2c42a',-4,-60],['#6ab83a',6,-82],['#8a4ab8',-2,-52]].forEach(s=>dot(g,s[0],s[1],s[2]+b,2.8));
  rect(g,'#2aa8c8',-12,-108+b,26,5);dot(g,'#e8408a',-10,-106+b,2.4);ln(g,'#6a4a2a',1.4,[-6,-106+b,-11,-122+b]);ln(g,'#c8402a',1.4,[-3,-107+b,-6,-123+b]);poly(g,'#e8408a',[[-12,-96+b],[-8,-99+b],[-8,-93+b]]);poly(g,'#2aa8c8',[[-12,-96+b],[-16,-99+b],[-16,-93+b]]);
  dot(g,'#e8408a',13,-50+b,4);dot(g,'#2aa8c8',-13,-50+b,4);C.alebrije(g,22,-48,.34,0,t)}),
 /* Toño: camicia a quadri, cappello di paglia, stivali di gomma, lungo palo di legno, piccola croce al collo */
 NP('cm_tono',D.NAME.cm_tono,18930,D.GREET.cm_tono,{skin:'#c08860',top:'#8a2a2a',bot:'#2a4a3a',hair:'#2a1a10',s:1.02},(g,b,t)=>{for(let r=0;r<5;r++)for(let q=0;q<6;q++)if((q+r)%2)rect(g,'#2a1414',-12+q*4,-91+r*8+b,4,4);
  el(g,'#d8c080',1,-110+b,20,4);el(g,'#d8c080',1,-116+b,11,6);rect(g,'#8a2a2a',-11,-112+b,24,2.4);rect(g,'#e8c04a',0,-86+b,1.6,6);rect(g,'#e8c04a',-1.4,-84+b,4.4,1.4);rect(g,'#1e3a2a',-9,-8,12,8);rect(g,'#1e3a2a',3,-8,12,8);
  ln(g,'#7a5a38',3.4,[20,0,30,-90,34,-170]);ln(g,'rgba(255,255,255,.3)',1,[19,0,29,-90,33,-170])}),
 /* Don Rafa: abito nero da charro con bottoni d'argento, sombrero, tromba sotto il braccio */
 {id:'cm_rafa',name:D.NAME.cm_rafa,x:22050,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));mariachi(g,px,y,t,{f,s:1.04,a:0,ph:2,acc2:(g2,b)=>{rect(g2,'#c8222a',-12,-56,24,3);ln(g2,'#d8d8e0',1,[-13,-114+b,15,-114+b])}})},d:{a:{t:D.GREET.cm_rafa}}}
];

/* ---- oggetti lungo il percorso ---- */
const LX=[400,950,1500,2000, 2900,3500,4050,4600,5150, 5800,6400,7000,7550, 8300,8900,9500,10000, 10750,11300,11850,12400, 13200,13750,14250,14800,15350, 16000,16650,17250,17850, 18650,19200,19700,20200,20700, 21600,22500,23400,W1-150];
const props=[
 /* zona 1 · Mercato della Merced */
 ['cmTarga',120,'MERCADO LA MERCED'],['cmMerced',400],['cmLampadine',690,300],['cmTamales',720],['cmNavate',950],['cmCarrello',1110],['cmCane',1330,0],['cmSonora',1500],['cmChapulines',1720],['cmGatto',1780,'#8a8a90'],['cmJamaica',2000],['cmMetro',2240,0],['cmZanates',2330],
 /* zona 2 · Zócalo e Templo Mayor */
 ['cmTarga',2480,'PLAZA DE LA CONSTITUCIÓN'],['cmZocalo',2900],['cmDanza',3200],['cmPalloncini',3300],['cmTemplo',3500],['cmLampione',3790,1],['cmCoyol',4050],['cmLampione',4310,0],['cmCattedrale',4600],['cmPalacio',5150],['cmGatto',5320,'#c9873a'],
 /* zona 3 · Via Madero, Casa de los Azulejos e Bellas Artes */
 ['cmTarga',5480,'CALLE MADERO'],['cmMadero',5800],['cmLampione',6050,1],['cmAzulejos',6400],['cmLampione',6670,0],['cmTorre',7000],['cmAlameda',7280],['cmBellas',7550],
 /* zona 4 · Roma e Condesa */
 ['cmTarga',8000,'ÁLVARO OBREGÓN'],['cmRoma',8300],['cmFresno',8620,1.1],['cmCondesa',8900],['cmCane',9180,2],['cmFresno',9300,1],['cmTrompo',9500],['cmComida',10000],['cmBici',10230,'#2aa8c8'],
 /* zona 5 · Paseo de la Reforma */
 ['cmTarga',10450,'PASEO DE LA REFORMA'],['cmReforma',10750],['cmLampione',11030,1],['cmAngel',11300],['cmFresno',11580,1.1],['cmMetro',11850,1],['cmZanates',12090],['cmCempa',12400],['cmLampione',12690,0],
 /* zona 6 · Bosque de Chapultepec */
 ['cmTarga',12880,'BOSQUE DE CHAPULTEPEC'],['cmBosque',13200],['cmChapulin',13480],['cmAhuehuete',13600,1.1],['cmMuseo',13750],['cmElote',14010],['cmPiedra',14250],['cmAhuehuete',14500,1],['cmCastillo',14800],['cmLampione',15130,0],['cmNinos',15350],['cmCane',15540,1],
 /* zona 7 · Coyoacán */
 ['cmTarga',15700,'COYOACÁN'],['cmHidalgo',16000],['cmSanJuan',16330],['cmCasaAzul',16650],['cmLauro',16960,1],['cmPapel',17050,250],['cmMercCoy',17250],['cmGatto',17480,'#e8e4da'],['cmAlebrije',17850],['cmLampione',18150,0],
 /* zona 8 · Xochimilco */
 ['cmTarga',18380,'XOCHIMILCO'],['cmEmbarc',18650],['cmChinampa',19200],['cmBarcaCibo',19700],['cmAxolotl',20200],['cmIsola',20700],['cmAhuejote',20900,1.1],
 /* zona 9 · Plaza Garibaldi di notte */
 ['cmTarga',21080,'PLAZA GARIBALDI'],['cmGaribaldi',21600],['cmTenampa',22500],['cmLampione',22800,1],['cmMuseoTeq',23400],['cmLampione',23750,0],['cmLampadine',24000,300],['cmVarco',W1-135]
];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,D.LKTXT[i]]);
addWorld({id:'cittadelmessico',name:'Città del Messico · Dalla Merced a Garibaldi',width:W1,sky:['#7a98c8','#f6b4bc','#ffd6a8'],gt:372,gr:['#bdb8ac','#8a8478'],chord:[196,246.9,293.7,370],amb:'#ffd08a',
intro:D.INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da messicocity.txt) --- */
(function(){
const TOPX_CM={
 "cm_lupe": [
  [
   "Chi sei e che fai?",
   "Lupe, cinquantanove anni, venditrice di chiles. Sono nata qui intorno, a due isolati: alle quattro del mattino sono già in piedi, perché il banco si prepara prima dell’alba. Il mercato è casa mia, mijo."
  ],
  [
   "Com’è fatto questo mercato?",
   "Grande: più navate, un po’ di corsie coperte e tante scalette. L’edificio attuale è del 1957, aperto insieme ai mercati di Sonora e di Jamaica. Ma in questa zona si commercia da molto tempo prima: qui si dice \"se non c’è alla Merced, non esiste\"."
  ],
  [
   "Cosa si vende qui?",
   "Tutto, da mattina a sera: frutta e verdura nella navata grande, carne e formaggi in quella accanto, cibi pronti da una parte. E poi cesti, pentole, stoffe, candele. Il Metro arriva proprio dentro, quindi puoi uscire dal treno e trovarti in mezzo ai banchi."
  ],
  [
   "Quanti tipi di chile ci sono?",
   "Tantissimi, e ognuno ha il suo carattere: il guajillo è rosso e fruttato, l’ancho è scuro e dolce, il pasilla è quasi nero, il chipotle sa di fumo, l’habanero... l’habanero fa piangere, Pierpaolo, attenzione. Si assaggia poco alla volta, e il segreto è mangiarlo con una tortilla, non con l’acqua."
  ],
  [
   "Cosa si mangia a colazione?",
   "Dipende dalla fame. Una guajolota: un tamal dentro un panino, \"carboidrato nel carboidrato\", con un bicchiere di atole caldo o di champurrado, che è con il cioccolato. Oppure pan dulce con il café de olla: caffè con cannella e zucchero grezzo. Ma i miei clienti preferiscono sempre gli stessi tamales."
  ],
  [
   "Come si parla con i venditori?",
   "Con cortesia e con allegria. Ci chiamano \"casera\" o \"casero\" se sei cliente fisso, \"jefe\" o \"jefa\" se vuoi farti amico il venditore. Il prezzo si può discutere un poco, ma non troppo: qui si compra tutti i giorni e ci si rivede."
  ],
  [
   "Cos’è un tianguis?",
   "Un mercato all’aperto, che si monta a giorni fissi in ogni quartiere: la parola viene dal nahuatl, \"tianquiztli\". Anche gli antichi Mexica ne avevano uno enorme, a Tlatelolco, e si dice che ci passassero decine di migliaia di persone ogni giorno. A me piace pensare che io sono una loro lontana collega."
  ],
  [
   "Cosa sono i mercati di Sonora e di Jamaica?",
   "Due mercati vicini, aperti insieme alla Merced. Quello di Jamaica, a poca distanza da noi, è il grande mercato dei fiori, e prima del Giorno dei Morti qui vengono tutti a comprare i cempasúchil, quelli arancioni, per le ofrendas. A Sonora, accanto a noi, si trovano anche i teschi di zucchero e la cartapesta. Per noi è una festa di famiglia: si ricordano i nostri morti con allegria e con rispetto."
  ],
  [
   "Com’è la giornata di una venditrice?",
   "Lunga: si apre alle sei, si chiude verso le sette di sera. In mezzo c’è la comida, che mangio a turno con la vicina del banco accanto: ci si dà il cambio, e se uno ha fame ti porta qualcosa da assaggiare. È un lavoro duro, ma non sei mai sola."
  ],
  [
   "Cosa mi consigli di comprare?",
   "Una bustina di guajillo e una di cumino, per cucinare a casa, e una manciata di semi di zucca tostati, che sono una merenda ottima. Ti metto tutto in un sacchetto di carta e ti spiego come usarli: poi, Pierpaolo, se non ti piace, non è colpa mia."
  ],
  [
   "Dove vado dopo?",
   "Verso lo Zócalo, a piedi o con il Metro: è la piazza grande, dove c’è la Cattedrale e ci sono le rovine del Templo Mayor. Lì incontrerai un signore molto antico, che conosce bene il posto: un sovrano di Tenochtitlan. Non spaventarti: qui il tempo si piega."
  ],
  [
   "Posso salutarti e proseguire la mia passeggiata?",
   "Vai, Pierpaolo, e non uscire senza un sacchetto di frutta secca: porta fortuna. Se ripassi, ti offro un tamal caldo con l’atole. ¡Ándale, hasta pronto, mijo!"
  ]
 ],
 "cm_moctezuma": [
  [
   "Chi sei e dove regnavi?",
   "Moctezuma Xocoyotzin, il secondo di questo nome, huey tlatoani, \"grande oratore\", dei Mexica dal 1502 al 1520. Governai Tenochtitlan e le terre che le pagavano tributo. Gli europei mi chiamarono \"imperatore\", ma il mio titolo era più semplice: colui che parla."
  ],
  [
   "Com’era Tenochtitlan?",
   "Una città su un’isola in mezzo al lago di Texcoco, con strade d’acqua e strade di terra, ponti che si potevano sollevare e tre grandi strade rialzate che la univano alla riva. Gli studiosi stimano più di duecentomila abitanti. Gli Spagnoli, quando la videro, dissero che sembrava un incantesimo: non avevano mai visto niente di simile."
  ],
  [
   "Come nacque la città?",
   "Secondo la tradizione, i Mexica vagarono a lungo finché ricevettero un segno: un’aquila su un cactus, con un serpente fra gli artigli. Lo trovarono su un’isola del lago e lì, nel 1325, fondarono Tenochtitlan. Quell’immagine è oggi sulla bandiera del Messico: non è bello?"
  ],
  [
   "Cos’era il Templo Mayor?",
   "Il cuore sacro della città, una doppia piramide: a sinistra il santuario di Tláloc, la pioggia; a destra quello di Huitzilopochtli, il sole e la guerra. Ogni sovrano lo ampliava, e fu ricostruito più volte. Un frate cronista, Sahagún, riferì che il recinto sacro contava settantotto edifici, e il tempio li dominava tutti."
  ],
  [
   "E il mercato di Tlatelolco?",
   "La città gemella a nord, con il mercato più grande che gli Spagnoli avessero mai visto: dicevano sessantamila persone al giorno, ordinate, con giudici che controllavano pesi e prezzi. Si vendeva di tutto: cotone, fiori, erbe, ceramiche, cacao, cibi pronti. La parola \"tianguis\", che usate ancora oggi per i mercati all’aperto, viene dalla mia lingua."
  ],
  [
   "Cos’è il cacao per voi?",
   "Una bevanda per i nobili e i guerrieri, schiumosa, amara e speziata, spesso servita fredda, non dolce come la vostra. I semi di cacao servivano anche per pagare: nei mercati si contavano i chicchi. Voi la chiamate cioccolato, ma la parola viene dalla nostra."
  ],
  [
   "Come si viveva con tutta quest’acqua?",
   "Si imparò a dominarla: dighe, canali e un acquedotto che portava l’acqua dolce dalle sorgenti di Chapultepec, voluto da uno dei miei predecessori. E per mangiare c’erano le chinampas, isole di fango e di rami coltivate a fiori e ortaggi, tenute ferme dagli alberi di ahuejote. Molte di quelle isole esistono ancora a Xochimilco, e mi piace saperlo."
  ],
  [
   "Cosa accadde con gli Spagnoli?",
   "L’8 novembre 1519 Cortés e i suoi uomini entrarono in città lungo una delle strade rialzate, e io li accolsi. Gli storici ancora discutono sulle mie intenzioni e sulle parole che ci scambiammo. Non è un ricordo lieto: ne parlo con sobrietà, perché dopo quell’incontro tutto cambiò."
  ],
  [
   "E poi come finì?",
   "Morii nel 1520, in giorni di tensione e di violenza di cui le fonti danno versioni diverse. Il 13 agosto 1521, dopo un lungo assedio e un’epidemia di vaiolo che colpì duramente la popolazione, Tenochtitlan cadde, e sulle sue rovine fu costruita una nuova capitale. È la città dove cammini adesso, e porta in sé tutte e due le storie."
  ],
  [
   "Cosa pensi della Città del Messico di oggi?",
   "Con meraviglia e un po’ di nostalgia: la piazza è ancora una piazza viva, piena di gente, di musica e di bancarelle. E mi fa sorridere una cosa: la Piedra del Sol, il grande disco di pietra dei Mexica, fu ritrovata nel 1790 proprio sotto questa piazza. Oggi è uno dei simboli del Messico."
  ],
  [
   "Dove vado dopo?",
   "A ovest, lungo la via Madero: dallo Zócalo vai dritto, e arrivi alla Casa de los Azulejos e al Palacio de Bellas Artes. Lì cerca Don Chucho, che gira una manovella e fa uscire una musica che ai miei tempi non esisteva, ma che mi piace molto."
  ],
  [
   "Posso salutarti e proseguire la mia passeggiata?",
   "Vai, Pierpaolo, e cammina con il passo di chi ha tempo: la città non finirà domani. Se ripassi dallo Zócalo, guarda la bandiera quando la ammainano al tramonto. Tlazohcamati, e buon cammino!"
  ]
 ],
 "cm_chucho": [
  [
   "Chi sei e che fai?",
   "Chucho, sessantatré anni, organillero. Giro la manovella da quando ero ragazzino, dopo mio padre. L’organo però è in affitto: ogni mattina lo prendo da un signore che ne ha parecchi. Si vive di monete e di buon umore, joven."
  ],
  [
   "Come funziona l’organetto?",
   "È una scatola di legno con un cilindro pieno di chiodini di ottone: girando la manovella, i chiodini toccano le canne e escono le note. Pesa più di trenta chili, e la schiena lo sa. Il segreto è girare sempre alla stessa velocità, né troppo svelto né troppo piano."
  ],
  [
   "Da dove vengono gli organetti?",
   "Dalla Germania, nell’Ottocento: arrivarono con gli immigrati, e dicono anche con qualcuno dall’Italia, e diventarono popolari ai tempi di Porfirio Díaz. Qualcuno racconta che furono un regalo del governo tedesco, ma chissà. In Germania non li fanno più, e in America Latina ne restano pochi: Messico, Cile e Argentina."
  ],
  [
   "Che canzoni suonate?",
   "Valzer, pasodoble e polke di una volta, e poi le canzoni che conosce tutta la gente: \"Sobre las olas\", \"Las Mañanitas\", per i compleanni, e \"Cielito lindo\", che si canta anche se non la sai. Se mi chiedi una canzone, la suono: se la so."
  ],
  [
   "Perché quella divisa?",
   "È la divisa tradizionale degli organilleros, color cachi o grigia, con il berretto con visiera. Una volta c’era anche la scimmietta vera, che raccoglieva le monete; oggi ne è rimasto il pupazzo, che fa lo stesso effetto. Al pubblico piace sempre."
  ],
  [
   "Cosa succede quando piove?",
   "Piove, e il legno dell’organetto soffre: così ci si rifugia sotto i portici e si aspetta. In estate, il pomeriggio, arriva quasi sempre un acquazzone. Se vedi le nuvole scure, joven, porta l’ombrello: \"ahorita llueve\"."
  ],
  [
   "Quali sono i suoni della città?",
   "Ogni quartiere ha la sua colonna sonora: la voce registrata dei \"tamales oaxaqueños, calientitos\", il fischio a vapore del camotero con le sue patate dolci, il flauto dell’arrotino, la campanella dell’immondizia, il \"gaaas\" di chi porta le bombole e la voce lamentosa di chi compra materassi e lavatrici. Se senti uno di questi, sei davvero a Città del Messico."
  ],
  [
   "Cos’è la Casa de los Azulejos oggi?",
   "Un posto dove si fa colazione fra le piastrelle: chilaquiles, enchiladas, caffè con latte. Io di solito faccio colazione al banco, con un tamal e un atole. Ma se hai tempo e un po’ di pesos, vale la pena salire anche solo a vedere lo scalone."
  ],
  [
   "Cos’è la torre che si vede da qui?",
   "La Torre Latinoamericana, aperta nel 1956: ha 44 piani e un belvedere in cima. Ha superato senza danni gravi i terremoti del 1957, del 1985 e del 2017, e per questo la rispettiamo molto. Nei giorni limpidi, da lassù, si vedono il \"Popo\" e l’\"Izta\", i due vulcani."
  ],
  [
   "E il palazzo bianco con le cupole?",
   "Il Palacio de Bellas Artes, costruito dal 1904 al 1934. Dentro c’è un sipario di vetro dei laboratori Tiffany di New York, con quasi un milione di pezzi. Il palazzo è di marmo, e si dice che affondi un poco ogni anno, come quasi tutto qui; ci si va per concerti, per l’opera e per il Ballet Folklórico."
  ],
  [
   "Dove vado dopo?",
   "A sud, verso Roma e Condesa, dove si mangia la comida: da Beto, il taquero. Prendi il Metro o un pesero, il minibus: chiedi \"por favor, ¿Roma Norte?\" e scendi quando senti l’odore della carne. Ahorita, joven, che è quasi ora."
  ],
  [
   "Posso salutarti e proseguire la mia passeggiata?",
   "Vai, Pierpaolo, e se ti piace la musica, lascia una moneta nel mio cappello: l’organetto si nutre di quello. Ma si accetta tutto, anche un grazie. Hasta luego, joven, y buen camino."
  ]
 ],
 "cm_beto": [
  [
   "Chi sei e che fai?",
   "Beto, quarantun anni, taquero. Affetto la carne sul trompo, la servo sulla tortilla e faccio tutto in tre secondi. Ci vogliono anni per imparare a tagliarla sottile e a lanciare l’ananas giusto, joven."
  ],
  [
   "Cos’è il pastor?",
   "Carne di maiale marinata nell’adobo, una salsa di chiles, spezie e un po’ di achiote, impilata su un grande spiedo verticale, il trompo, con un ananas in cima. Si taglia a fette sottili mentre gira davanti al fuoco, e si serve su una piccola tortilla di mais. Il pezzo di ananas lo faccio volare dal coltello al taco, è lo spettacolo."
  ],
  [
   "Da dove viene il pastor?",
   "Dallo shawarma: gli immigrati libanesi lo portarono in Messico all’inizio del Novecento, prima con l’agnello, poi con il maiale. A Puebla nacquero i \"tacos árabes\", e a Città del Messico divennero \"al pastor\", con il chile e l’ananas. È un piatto di due mondi, come questa città."
  ],
  [
   "Come si ordina?",
   "\"Una orden de pastor\", cioè cinque tacos, o \"tres de pastor, con todo\", cioè con cipolla e coriandolo. Poi le salse: verde, rossa, e quella che non devi chiedere se non sei sicuro. Si mangia in piedi, con le dita, e si dice \"gracias\" quando si finisce."
  ],
  [
   "Ci sono altri tacos?",
   "Mille: suadero, che è un taglio di manzo morbido; tripa, per chi ha coraggio; i tacos de canasta, già pronti in un cesto, che si mangiano a colazione; i campechanos, un po’ di tutto. A Città del Messico, dicono, i tacos sono un’ora: la sera, quando si chiude il lavoro."
  ],
  [
   "Cos’è la comida?",
   "Il pranzo, che qui è il pasto principale: verso le due o le tre, non prima. Molti vanno in una fonda a mangiare la comida corrida, un menù del giorno con zuppa, riso, stufato e acqua fresca. E dopo si resta seduti a chiacchierare: la sobremesa può durare un’ora o quattro."
  ],
  [
   "Cosa si beve con i tacos?",
   "L’agua fresca: di jamaica, che è di ibisco, di horchata, che è di riso e cannella, di tamarindo. Oppure una Coca in bottiglia di vetro, per i tradizionalisti. La birra, di sera, per chi vuole. A me basta un’acqua di jamaica gelata, perché qui il sole picchia."
  ],
  [
   "Perché si chiama Roma questo quartiere?",
   "Per Roma, la tua: è nato all’inizio del Novecento e prese il nome da lì, per sembrare elegante e un po’ europeo. E nella piazza qui vicino c’è perfino un David di Michelangelo, copia in bronzo! Tu che sei italiano, Pierpaolo, ti sentirai a casa; ma non dire che è brutto."
  ],
  [
   "Cos’è la Condesa?",
   "Il quartiere accanto, con le case art déco e il Parque México. La grande strada ovale, l’Avenida Ámsterdam, segue la pista di un vecchio ippodromo. Di domenica è piena di cani con i padroni e di bambini in bicicletta; Roma e Condesa sono i quartieri più amati dai cani, te lo dico io."
  ],
  [
   "Cosa si fa quando c’è un terremoto?",
   "Si esce con calma, e si va in un luogo aperto. Qui il terremoto del 19 settembre 1985 fece molti danni e molte vittime, e un’altra scossa grave ci fu lo stesso giorno del 2017; da allora c’è un sistema di allarme sismico, con sirene per strada e nei telefoni, e ogni anno, il 19 settembre, si fa una prova. Ne parliamo con rispetto: ognuno di noi ha un ricordo."
  ],
  [
   "Dove vado dopo?",
   "Verso nord-ovest, sulla Reforma, il grande viale: vai fino all’Ángel de la Independencia, quello dorato. E se ti va, continua fino al bosco di Chapultepec: lì ti aspetta Ximena, una vera esperta di pietre antiche. Ahorita il Metro è lento, a piedi ci metti meno."
  ],
  [
   "Posso salutarti e proseguire la mia passeggiata?",
   "Vai, Pierpaolo, y que te vaya bien. Se ripassi, ti preparo un taco \"de la casa\" e ti spiego come lanciare l’ananas. ¡Sale y vale, nos vemos!"
  ]
 ],
 "cm_ximena": [
  [
   "Chi sei e che fai?",
   "Ximena, quarantacinque anni, antropologa. Racconto il Messico antico ai visitatori, a scolaresche e a chiunque abbia curiosità: ogni giorno mi chiedono la stessa cosa, \"ma era davvero tutto così?\". E io rispondo: \"dipende da chi lo ha scritto\"."
  ],
  [
   "Cos’è Chapultepec?",
   "Il bosco più grande della città, e il nome in nahuatl significa \"collina delle cavallette\". Era già un luogo di riposo per i sovrani mexica, e da qui partiva un acquedotto per portare l’acqua alla capitale. Oggi la domenica è il giardino di tutti: famiglie, picnic, barche sul lago."
  ],
  [
   "Com’è il bosco oggi?",
   "Immenso: più di seicento ettari, con laghi, musei e un grande zoo. La gente viene a correre, a pedalare, a fare merenda sui prati; ci sono venditori di frutta con chile e limone, di elote, di palloncini. Ma il bosco resta di tutti: si rispetta e si lascia pulito."
  ],
  [
   "Cos’è il museo di antropologia?",
   "Il più importante del Messico, aperto nel 1964, con ventitré sale per le culture dell’antico Messico, dai Maya agli Olmechi ai Mexica. Al centro del cortile c’è un enorme \"ombrello\" di cemento con l’acqua che cade intorno al pilastro. Se piove, joven, ti ripari meglio lì che a casa."
  ],
  [
   "Cosa c’è all’ingresso?",
   "Un monolito di Tláloc, il dio della pioggia, alto e pesante: è il benvenuto più antico del museo. Se in estate piove, e di solito piove, dicono che sia lui a salutare. Mi piace pensare che sia vero."
  ],
  [
   "Cos’è la Piedra del Sol?",
   "Il disco di pietra di circa 24 tonnellate che vedi nella sala mexica: fu ritrovato nel 1790 sotto lo Zócalo, durante lavori di livellamento. Lo chiamano \"calendario azteco\", ma non era un calendario: racconta le cinque epoche del mondo secondo i Mexica. È un po’ il \"Colosseo\" nostro, Pierpaolo."
  ],
  [
   "Quali parole del nahuatl usiamo ancora?",
   "Moltissime. \"Cioccolato\" viene da xocolatl, \"avocado\" da ahuacatl, \"pomodoro\" in spagnolo è \"tomate\" da tomatl, \"chile\", \"coyote\", \"tamal\" e \"guajolote\", che significa tacchino. Quando mangi qui, Pierpaolo, in realtà parli un po’ nahuatl."
  ],
  [
   "Cos’è il castello dove siamo?",
   "Il Museo Nazionale di Storia, nel castello di Chapultepec. Oggi ci sono stanze arredate, giardini, vetrate colorate e una terrazza: da qui si vede la Reforma stendersi fino al centro. Ma io preferisco la vista al tramonto, quando i grattacieli diventano dorati."
  ],
  [
   "Com’è l’altitudine per chi arriva?",
   "La città è a 2.240 metri: all’inizio si può avere il fiato corto e un po’ di sonno. Si beve molta acqua, si cammina piano e si mangia con calma. E il pomeriggio, in estate, arriva un acquazzone quasi puntuale: se qualcuno ti dice \"ahorita llueve\", portati l’ombrello."
  ],
  [
   "Quanto è grande la città?",
   "Quasi nove milioni di abitanti nella città, più di venti milioni nell’area intorno, divisa in sedici \"alcaldías\". Ci vuole un’ora e mezza per attraversarla, anche con il Metro. E poi la città sprofonda un po’ ogni anno, perché è costruita su un lago prosciugato: gli edifici più antichi \"pendono\", ma si adattano."
  ],
  [
   "Dove vado dopo?",
   "A sud, a Coyoacán: un quartiere coloniale pieno di piazze, di caffè e di murales, dove c’è anche la Casa Azul di Frida Kahlo. Lì incontri Rocío, che fa alebrijes, creature fantastiche. Prendi un taxi o un Uber: con il traffico, un’ora di strada, e gli alebrijes ti aspettano."
  ],
  [
   "Posso salutarti e proseguire la mia passeggiata?",
   "Vai, Pierpaolo, e se ti fermi a guardare un’antichità, fallo con calma: le pietre non scappano. Se ripassi, ti racconto cosa c’è nelle sale che non hai visto. ¡Nos vemos, y que te vaya muy bien!"
  ]
 ],
 "cm_rocio": [
  [
   "Chi sei e che fai?",
   "Rocío, trentasei anni, artigiana di alebrijes. Li costruisco con fil di ferro, carta e colla, poi li dipingo a mano: ci vogliono giorni, anche settimane, per un animale grande. Mia nonna diceva: \"la pazienza è il primo colore\"."
  ],
  [
   "Cos’è un alebrije?",
   "Una creatura fantastica, metà un animale e metà un altro: una volpe con le ali, un gallo con le corna, un drago a strisce. Si fa con la cartapesta, si asciuga, si dipinge con tantissimi colori e disegni. Ognuno è unico, come un sogno."
  ],
  [
   "Da dove vengono?",
   "Nacquero a Città del Messico nel 1936: secondo il racconto, un artigiano, Pedro Linares, si ammalò con la febbre e sognò una foresta piena di animali strani che gridavano \"alebrijes\". Quando guarì, li costruì di cartapesta. Oggi ne facciamo ancora, e ogni ottobre c’è una grande parata di alebrijes giganti."
  ],
  [
   "Ci sono alebrijes di legno?",
   "Sì, quelli di Oaxaca: scolpiti in legno e dipinti, e sono un’altra famiglia, un’altra arte, con la sua storia. I nostri, quelli di cartapesta, sono leggeri e nascono nella capitale. Se compri un alebrije, chiedi sempre di che tipo è e chi lo ha fatto."
  ],
  [
   "Cosa significa Coyoacán?",
   "Dal nahuatl, probabilmente \"luogo dei coyote\": per questo nella piazza c’è la fontana con i due coyote di bronzo. Una volta, dicono, qui c’erano davvero. Oggi ci sono soprattutto cani, gatti e turisti con la macchina fotografica."
  ],
  [
   "Cos’è la Casa Azul?",
   "La casa di Frida Kahlo, a due passi da qui: è dove nacque, nel 1907, e dove morì nel 1954, ed è museo dal 1958. Dentro c’è la sua vita: gli abiti, i colori, la cucina, il giardino. La coda è lunga, ma ne vale la pena, e non dimenticare di guardare il blu del muro."
  ],
  [
   "Com’è la vita nel quartiere?",
   "Tranquilla e piena di musica: il fine settimana, nelle piazze, suonano chitarre, arpe e organetti; si vendono churros, elote e esquites in un bicchiere con maionese e chile. Si fa merenda e si chiacchiera: qui \"vedersi un attimo\" significa tre ore."
  ],
  [
   "Com’è il Giorno dei Morti qui?",
   "Una festa di famiglia: si prepara l’ofrenda, un altare con le foto dei cari defunti, i cempasúchil arancioni, candele, carta ritagliata (papel picado), il pan de muerto e i cibi che piacevano a loro. I petali fanno un sentiero per guidare le anime verso casa; \"cempasúchil\" in nahuatl vuol dire \"venti fiori\". Si ricorda con affetto, non con paura."
  ],
  [
   "Come si parla a Città del Messico?",
   "Con molte parole speciali. \"Chido\" e \"padre\" significano bello, \"neta\" è la verità, \"órale\" è un modo per dire \"va bene\" o \"dai\", e \"ahorita\" può voler dire \"adesso\", \"fra poco\" o \"mai\": dipende dal tono. Per i mezzi, c’è il Metro: ogni stazione ha un disegno, per esempio una cavalletta a Chapultepec."
  ],
  [
   "Cosa si mangia al mercato di Coyoacán?",
   "Le tostadas, che sono dischi di tortilla croccante coperti di fagioli, pollo, avocado e salsa: ce ne sono di mille tipi, e la gente fa la fila per le più famose. Poi i dolci: i churros caldi, i frutti con limone e chile, e l’agua de jamaica, rossa e fresca. Porta pazienza, perché al sabato c’è tutta Città del Messico."
  ],
  [
   "Dove vado dopo?",
   "Ancora più a sud, a Xochimilco: i canali con le barche colorate, dove c’è Toño, il trajinero. Arrivi con il tram leggero e poi a piedi fino all’imbarco: al tramonto la luce è bellissima. Digli che ti manda Rocío, e ti farà il prezzo da amico."
  ],
  [
   "Posso salutarti e proseguire la mia passeggiata?",
   "Vai, Pierpaolo, e prendi con te un piccolo alebrije: ti farà compagnia, e se qualche volta ti sembra che si muova, è normale. ¡Que te vaya chido, nos vemos pronto!"
  ]
 ],
 "cm_tono": [
  [
   "Chi sei e che fai?",
   "Toño, quarantasette anni, trajinero. Porto la gente sui canali: famiglie, coppie, comitive, matrimoni. Mio padre coltivava fiori su una chinampa, e io da bambino lo aiutavo; poi ho preso il palo e non l’ho più lasciato."
  ],
  [
   "Com’è fatta una trajinera?",
   "Lunga e piatta, adatta ai canali stretti, con un arco coperto di fiori dipinti e un nome di donna scritto sopra: Rosalinda, Fernanda, Beatriz. Si spinge con un lungo palo di legno che si appoggia al fondo, senza motore. Ci sono tavoli lunghi e panche, e si può mangiare a bordo."
  ],
  [
   "Cosa significa Xochimilco?",
   "Dal nahuatl, \"luogo dei campi di fiori\". Qui i fiori si coltivano da sempre, e ancora oggi ci sono i mercati dei fiori e delle piante. Se un giorno ti regalano un mazzo, probabilmente è passato di qui."
  ],
  [
   "Cosa sono le chinampas?",
   "Le isole coltivate che vedi fra i canali: fatte di fango e di rami, con gli alberi di ahuejote lungo i bordi a tenere ferma la terra. Esistono da molto prima degli Spagnoli, e nel 1987 l’UNESCO ha dichiarato Xochimilco Patrimonio dell’Umanità. Qui ancora si coltivano ortaggi e fiori, come facevano i nostri antenati."
  ],
  [
   "Si mangia sui canali?",
   "Eccome: le barchette del cibo si avvicinano e ti servono quesadillas, elote con crema e chile, sopes, e bevande: pulque, micheladas, acqua fresca. C’è chi viene solo a mangiare, e chi a ballare. E se vuoi musica, un gruppo di mariachi si affianca e ti suona la canzone che chiedi."
  ],
  [
   "Come funziona il giro?",
   "Si va all’imbarco, si sceglie la barca, si decide il prezzo all’ora e quante ore: da una a quattro. Bisogna accordarsi prima, joven, e chiedere cosa è incluso. Poi ci si siede, si aspetta la prima barca del cibo e si lascia che il tempo scorra."
  ],
  [
   "Cos’è l’axolotl?",
   "Un animale che vive solo qui: una salamandra rosa chiaro con le branchie a piume, che rimane \"bambina\" per tutta la vita. È in grave pericolo, per l’inquinamento e per i pesci introdotti, e ci sono progetti per salvarlo. Se ne vedi uno, saluta: è un piccolo tesoro di Xochimilco."
  ],
  [
   "Cos’è l’Isola delle Bambole?",
   "Un’isoletta più dentro i canali, con centinaia di bambole appese agli alberi. Secondo la leggenda, il custode le appese negli anni Cinquanta per tenere lontano lo spirito di una bambina annegata. A molti fa paura, ad altri tristezza: io non ci vado di sera."
  ],
  [
   "Come si fa a non perdersi?",
   "Con il palo e con l’abitudine: i canali sono un labirinto lungo decine di chilometri, ma il trajinero conosce ogni curva. Quando il sole cala, i riflessi sull’acqua diventano arancioni e rosa, e tutto sembra più lento. È l’ora in cui lavoro meglio."
  ],
  [
   "Com’è la giornata di un trajinero?",
   "Si comincia presto: si pulisce la barca, si dà una mano di vernice se serve, si controllano il palo e i tavoli. Poi arrivano i clienti, e fra un giro e l’altro si mangia qualcosa di caldo, un tamal o una zuppa, sul bordo del canale. A fine giornata si lega la trajinera al suo posto, e si resta un po’ a parlare con i colleghi: qui ci conosciamo tutti."
  ],
  [
   "Dove vado dopo?",
   "A nord, verso il Centro, in una piazza di notte: Plaza Garibaldi, la piazza dei mariachi. Torna in città con un taxi o con il tram leggero e il Metro; la piazza si anima dopo le nove. E lì c’è Don Rafa, che ha suonato per metà Messico."
  ],
  [
   "Posso salutarti e proseguire la mia passeggiata?",
   "Vai, Pierpaolo, y cuídate mucho. Se ripassi, portami un disegno della mia barca: lo appendo al palo. ¡Que Dios te bendiga, hasta la vista!"
  ]
 ],
 "cm_rafa": [
  [
   "Chi sei e che fai?",
   "Rafa, cinquantotto anni, mariachi e trombettista. Faccio parte di un gruppo di otto: violini, trombe, chitarre, vihuela e guitarrón. Suoniamo ai compleanni, ai matrimoni, alle serenate e qui in piazza, a chiunque abbia voglia di cantare."
  ],
  [
   "Perché si chiama Plaza Garibaldi?",
   "In onore di José \"Peppino\" Garibaldi, nipote dell’italiano Giuseppe Garibaldi, che combatté con le truppe di Madero nella Rivoluzione messicana. Tu che sei italiano, Pierpaolo, devi sentirti a casa: il tuo Garibaldi qui ha una piazza intera, piena di musica. La piazza si chiamava prima in altri modi, ma questo è rimasto."
  ],
  [
   "Cos’è il Salón Tenampa?",
   "Il locale storico, aperto negli anni Venti da un commerciante venuto da Jalisco: da allora è la casa dei mariachi della capitale. Qui si canta e si brinda da quasi cento anni. Sul nome, \"Tenampa\", ognuno ha la sua teoria: forse vuol dire \"luogo d’incontro\"."
  ],
  [
   "Come si riconosce un mariachi?",
   "Dall’abito da charro, il costume dei cavalieri di Jalisco: giacca corta, pantaloni con bottoni d’argento, fiocco, sombrero. E dagli strumenti: violini, trombe, la chitarra, la vihuela, che è piccola e acuta, e il guitarrón, il basso grande che tiene il ritmo. Se manca il guitarrón, non è un vero mariachi!"
  ],
  [
   "Come si ingaggia un mariachi?",
   "Ti avvicini a un gruppo, dici la canzone e ti accordi sul prezzo prima che comincino: così non ci sono sorprese. Si può chiedere una sola canzone o più. Se sono per una serenata a una persona cara, si va sotto la sua finestra, e si canta piano."
  ],
  [
   "Cos’ha di speciale il mariachi?",
   "Nel 2011 l’UNESCO lo ha riconosciuto Patrimonio Culturale Immateriale dell’Umanità: non solo la musica, ma anche i costumi, le canzoni e il modo di trasmettere. Per noi è un orgoglio e una responsabilità: ci si insegna di padre in figlio, e ogni generazione ci mette qualcosa di suo."
  ],
  [
   "Che canzoni si cantano?",
   "Rancheras, boleros e canzoni d’amore e di nostalgia: \"Cielito lindo\", che tutti cantano in coro, \"La Negra\", che è la nostra fanfara, e tante altre. Il bello è che anche chi non conosce le parole canta lo stesso, e nessuno lo giudica."
  ],
  [
   "Cosa si beve qui?",
   "Tequila e mezcal, per chi vuole, in un piccolo bicchiere da sorseggiare; poi il pulque, antica bevanda di agave, e per chi non beve acqua fresca e atole. Se vuoi capirne di più, nel Museo del Tequila e del Mezcal, qui sulla piazza, ti spiegano tutto. Ma sempre con moderazione, joven."
  ],
  [
   "Cos’è il Giorno dei Morti per voi?",
   "Una festa di famiglia: si ricordano i defunti con le ofrendas, le candele, i cibi che preferivano, il pan de muerto e i fiori di cempasúchil, che con il loro colore e il loro profumo guidano le anime. A volte i mariachi suonano nei cimiteri, per chi lo chiede. Non è tristezza: è affetto che non finisce."
  ],
  [
   "Com’è la notte in città?",
   "Una seconda città: fino a tardi si mangia, si canta e si passeggia. Per cena si prende qualcosa di leggero, tacos, un tamal, una zuppa; per le strade, la sera, passa ancora il venditore di tamales con la sua voce registrata. A notte alta, la musica non finisce mai del tutto."
  ],
  [
   "Come si diventa mariachi?",
   "Con la famiglia e con tanta pratica: io ho cominciato da ragazzino, ascoltando mio padre e i miei zii, e provando ogni sera dopo cena. Si impara a suonare, ma anche a cantare forte e a stare in gruppo. E bisogna saper sorridere anche quando i piedi fanno male: la serata è lunga, e il pubblico non deve accorgersene."
  ],
  [
   "Posso salutarti e proseguire la mia passeggiata?",
   "Vai, Pierpaolo, e in fondo alla piazza guarda l’arco di fiori arancioni: sono i cempasúchil, e fra i petali passa la luce. Se la vedi brillare, non fermarti: passa comunque. ¡Hasta siempre, amigo, y que Dios te acompañe!"
  ]
 ]
};
Object.assign(TOPX,TOPX_CM);
})();
