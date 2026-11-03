/* ---------- MADRID · Dal Tempio di Debod alla Stazione di Atocha (Tempio di Debod e Parque del Oeste, Palazzo Reale e Plaza de Oriente, Plaza Mayor e Puerta del Sol, La Latina e El Rastro, Barrio de las Letras e Paseo del Prado, Parco del Retiro, Cibeles e Gran Vía, Malasaña, Stazione di Atocha) ---------- */
/* Un'intera giornata da sinistra a destra: alba al Tempio di Debod e nel Parque del Oeste, mattina al Palazzo Reale e alla Plaza de Oriente,
   tarda mattina fra la Plaza Mayor, il Mercado de San Miguel e la Puerta del Sol, ora dell'aperitivo a La Latina, primo pomeriggio nel Barrio de las Letras
   e sul Paseo del Prado, pomeriggio nel Retiro, tramonto alla Cibeles e sulla Gran Vía, sera a Malasaña, notte alla Stazione di Atocha.
   In fondo al binario del treno ad alta velocità c'è il varco.
   Testi, tappe e dialoghi vengono da madrid.txt (definitivi, usati senza riscriverli). Gli oggetti stanno in elementi.js (nomi che iniziano per "md").
   Il tono per i temi dolorosi (prigionia e morte di Cervantes, insurrezione del 1808) è sempre sobrio e rispettoso. */
(function(){
const GT=372,W1=23000;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln}=PR._rm;
const {nf,lit,cas,cupo,mat,plat,olmo,pino,cedro,cipr,pers}=PR._md;
const md=(i,n)=>((i%n)+n)%n;
const LIT='rgb(255,226,150)';
const Z=[0,2400,4600,7600,9700,12700,15100,17700,20100,W1+400];   /* inizio di ognuna delle 9 zone */
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* ---- cielo: alba rosa e dorata, mattina chiara, azzurro intenso e secco, pomeriggio dorato, tramonto rosso-arancio, sera blu cobalto, notte ---- */
const SKY=[[0,['#8a98c8','#f6b4b8','#ffd8b8']],[1300,['#4a9cf0','#b4d8f4','#f2eede']],[2400,['#2a84ec','#74b8f4','#d8ecf8']],[7600,['#1a6edc','#62aef0','#d6ecf8']],[9700,['#2a7ee0','#78b8f0','#eaf0ee']],[12700,['#3a84d8','#a8c8e8','#f8e4b8']],[14400,['#5a7cc8','#e8b890','#ffc88a']],[15300,['#6a4a98','#e8604a','#ffa050']],[16000,['#4a3a88','#c04a6a','#f88a58']],[16900,['#1a2c78','#3a4a98','#8a5a8a']],[17800,['#0e2260','#1c3a8a','#4a5a9a']],[19000,['#0a1a50','#14296a','#2a3a7a']],[20100,['#080e34','#101c54','#26306a']],[99999,['#080e34','#101c54','#26306a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Madrid, dall’alba alla notte. Parti dal Tempio di Debod, un vero tempio egizio che guarda il sole nascere sul parco, e scendi verso il Palazzo Reale e la Plaza Mayor. A metà mattina senti il rumore del Mercado de San Miguel e arrivi alla Puerta del Sol, il chilometro zero di tutta la Spagna. Poi La Latina con le sue tapas, il Barrio de las Letras dove visse Cervantes, il Prado e il lago del Retiro. Al tramonto la fontana della Cibeles e la Gran Vía si accendono; la sera Malasaña si riempie di bar e di chiacchiere, e a notte la stazione di Atocha, con il suo giardino tropicale, ti aspetta con i treni. Il tempo qui si piega: i madrileni di ogni epoca ti vengono incontro, e la città è quella di oggi.";
const LKTXT=[
"Il Tempio di Debod: un vero tempio egizio, costruito nel secondo secolo avanti Cristo in Nubia e regalato dall’Egitto alla Spagna nel 1968, per ringraziarla dell’aiuto nel salvare i templi di Abu Simbel. Fu smontato e rimontato pietra per pietra a Madrid, e aperto al pubblico nel 1972. È l’unico di questo genere in Spagna.",
"Il Parque del Oeste: un lungo parco in pendio, a ovest del centro, con viali, prati e la Rosaleda, il giardino delle rose. Al mattino presto ci passano i corridori e i signori con il cane. Verso sera ci si ferma a guardare il sole che tramonta.",
"La Plaza de España: al centro c’è il monumento a Cervantes, con in bronzo Don Chisciotte e Sancio Panza ai suoi piedi. Intorno, due grattacieli costruiti negli anni Cinquanta, l’Edificio España e la Torre de Madrid. Da qui parte la Gran Vía.",
"La Plaza de Oriente: un’ampia piazza-giardino davanti al Palazzo Reale, con le statue di antichi re e, al centro, Filippo IV a cavallo. Di fronte c’è il Teatro Real, il teatro dell’opera di Madrid.",
"Il Palazzo Reale: 3.418 stanze e 135.000 metri quadrati, il più grande palazzo reale d’Europa occidentale. Fu costruito fra il 1738 e il 1755, dopo che la notte di Natale del 1734 un incendio distrusse il vecchio Alcázar. Oggi serve per le cerimonie ufficiali.",
"La Cattedrale dell’Almudena: la prima pietra fu posata nel 1883 e papa Giovanni Paolo II la consacrò il 15 giugno 1993, dopo più di un secolo di lavori. È dedicata alla Vergine dell’Almudena, patrona di Madrid.",
"I Giardini di Sabatini: ordinati e simmetrici, sul lato nord del palazzo, sorgono dove un tempo c’erano le scuderie reali. Nel Novecento sono stati trasformati in un giardino pubblico con una grande vasca, siepi squadrate e statue di re.",
"La Plaza Mayor: un grande rettangolo chiuso da portici, costruito fra il 1617 e il 1619 sotto Filippo III dall’architetto Juan Gómez de Mora. Al centro c’è il re a cavallo. Ha subito tre grandi incendi: la facciata dipinta della Casa de la Panadería è la più bella.",
"Il Mercado de San Miguel: un mercato coperto in ferro e vetro, vicino alla piazza. Si mangiano in piedi tapas, ostriche, prosciutto e formaggi, con un bicchiere in mano, fra gente che chiacchiera.",
"L’Arco de Cuchilleros e la Casa Botín: dalla piazza una scalinata sotto un grande arco porta a Calle Cuchilleros, dove c’è la Casa Botín, aperta nel 1725, che il Guinness dei primati considera il ristorante più antico del mondo ancora in attività. Il maialino si cuoce in un forno a legna.",
"La Puerta del Sol: la piazza a mezzaluna al centro di Madrid. Una targa sul selciato, davanti al palazzo con l’orologio, segna il chilometro zero da cui partono le strade principali della Spagna. A Capodanno la gente mangia dodici chicchi d’uva ai rintocchi di quell’orologio.",
"L’Orso e il Corbezzolo: la statua, inaugurata nel 1967, riproduce lo stemma di Madrid: un orso che si appoggia a un albero di corbezzolo e ne guarda i frutti. È il posto dove ci si dà appuntamento: \"ci vediamo all’orso\".",
"El Rastro: il mercato delle pulci di Madrid, ogni domenica e festivo, dalle nove alle tre circa, fra Plaza de Cascorro e Ribera de Curtidores. Ci sono documenti che lo citano già nel 1740. Il nome viene dalle concerie e dal macello di una volta: \"rastro\" vuol dire traccia.",
"La Cava Baja: la strada delle tapas. Un tempo era piena di locande per chi arrivava a Madrid; oggi ci sono taverne con huevos rotos, vermut e croquetas. La Posada de la Villa, qui, esiste dal 1642.",
"La Real Colegiata di San Isidro: fu la cattedrale di Madrid finché non fu finita l’Almudena. Sull’altare maggiore ci sono le spoglie di sant’Isidro, il patrono della città, un contadino medievale, che si festeggia il 15 maggio.",
"La Calle de las Huertas: nel cuore del Barrio de las Letras, il quartiere dove nel Secolo d’Oro vivevano Cervantes, Lope de Vega, Quevedo e Góngora. Sul selciato, lettere di bronzo riportano frasi degli scrittori del quartiere.",
"In Calle de Cervantes 2 sorgeva la casa dove l’autore del Don Chisciotte visse e morì: una targa del 1834 sopra il portone la ricorda. L’edificio originale fu demolito nell’Ottocento.",
"Il Convento delle Trinitarie Scalze: Cervantes fu sepolto qui nel 1616, perché le suore Trinitarie avevano contribuito al suo riscatto quando era prigioniero ad Algeri. Nel 2015 i ricercatori ritrovarono nella cripta alcuni suoi resti, in una cassetta con le iniziali M.C.",
"Il Museo del Prado: Juan de Villanueva lo progettò nel 1785 come gabinetto di storia naturale e fu inaugurato come museo il 10 novembre 1819. Ci sono Las Meninas di Velázquez, le Pitture nere di Goya e il Giardino delle delizie di Bosch.",
"La Fuente de Neptuno: il dio del mare su un carro tirato da cavalli marini, davanti al Prado, progettata da Ventura Rodríguez nel Settecento. È dove si radunano a festeggiare i tifosi dell’Atlético.",
"La Puerta de Alcalá: un arco trionfale con cinque passaggi, di granito e pietra bianca, voluto da Carlo III e finito nel 1778, su progetto di Francesco Sabatini. Era una delle antiche porte della città; oggi sta in mezzo al traffico, accanto al parco.",
"L’Estanque Grande: il grande lago del Retiro, con il monumento ad Alfonso XII sul lato, un lungo colonnato con una statua a cavallo. Si noleggiano barche a remi blu e ci si lascia andare a fil d’acqua.",
"Il Palacio de Cristal: un padiglione di ferro e vetro costruito nel 1887 da Ricardo Velázquez Bosco, ispirato al Crystal Palace di Londra, per ospitare le piante dell’Esposizione delle Filippine. Oggi ci sono mostre d’arte.",
"L’Angelo Caduto, accanto alla Rosaleda, il giardino delle rose: una scultura di Ricardo Bellver, ispirata al Paradiso perduto di Milton, mostra Lucifero che precipita. Si dice che sia l’unica statua pubblica al mondo del diavolo.",
"La Fuente de Cibeles: la dea Cibele su un carro tirato da due leoni, al centro di un incrocio. La progettò Ventura Rodríguez nel 1777, per Carlo III. Quando il Real Madrid vince, i tifosi vanno a festeggiare qui.",
"Il Palazzo di Cibeles: inaugurato nel 1919 come Palacio de Comunicaciones, la sede delle poste e dei telegrafi, fu chiamato \"la cattedrale delle comunicazioni\". Oggi è il Municipio di Madrid.",
"L’Edificio Metrópolis: all’inizio della Gran Vía, costruito fra il 1907 e il 1911 dagli architetti francesi Jules e Raymond Février. In cima c’è una cupola nera di ardesia, con una Vittoria alata dorata del 1977 che ha sostituito una fenice.",
"La Gran Vía: il grande viale che attraversa il centro, approvato nel 1904, iniziato nel 1910 e finito nel 1929. Fu aperto \"a colpi di piccone\" fra vecchie strade. Il palazzo della Telefónica, del 1929, con i suoi circa 89 metri fu uno dei primi grattacieli d’Europa.",
"La Plaza del Dos de Mayo: qui sorgeva il parco d’artiglieria di Monteleón, dove il 2 maggio 1808 il popolo di Madrid si rivoltò contro le truppe di Napoleone. Restano l’arco di mattoni dell’antico ingresso e il monumento ai capitani Daoíz e Velarde, che guidarono la difesa.",
"La Calle Manuela Malasaña: il quartiere prende il nome da Manuela Malasaña, una ragazza di diciassette anni morta nell’insurrezione del 1808, a quanto si racconta. Qui ci sono il Teatro Maravillas, birrerie e locali dove la sera si va \"de marcha\".",
"Malasaña conserva bar di cent’anni, negozi di dischi e di abiti vintage. Negli anni Ottanta, dopo la morte di Franco nel 1975, qui nacque la Movida madrileña: musica, cinema e moda che cambiarono la Spagna. Oggi ne resta un’aria un po’ kitsch.",
"La Plaza de San Ildefonso: una piazzetta di Malasaña con terrazze, tavolini e gente che chiacchiera fino a tardi. A Madrid si cena tardi, e la sera non finisce presto.",
"La Stazione di Atocha: la prima stazione di Madrid, inaugurata il 9 febbraio 1851 per la linea che arrivava ad Aranjuez. Fu ricostruita nel 1892 dopo un incendio. Dal 1992 la parte nuova accoglie i treni ad alta velocità e quelli locali.",
"Il giardino tropicale di Atocha: nella vecchia tettoia di ferro e vetro, lunga 152 metri e alta 27, ci sono circa 7.000 piante di 260 specie, in un’area di 4.000 metri quadrati. Si cammina sotto le palme, nell’aria umida, prima di prendere il treno.",
"Alla nuova stazione, progettata da Rafael Moneo fra il 1985 e il 1992, partono i treni AVE: nel 1992, per l’Expo di Siviglia, il primo treno ad alta velocità andò da Madrid ad Andalusia. Da Madrid le linee si aprono a raggiera in tutta la Spagna.",
"In fondo al binario, la luce di un altro mondo ti chiama."
];
const NAME={
md_cervantes:"Miguel de Cervantes",
md_paco:"Paco, il pensionato con il cane",
md_manolo:"Manolo, il venditore di panini ai calamari",
md_pilar:"Pilar, la tabernera di La Latina",
md_nacho:"Nacho, il noleggiatore di barche del lago",
md_rafa:"Rafa, il tassista",
md_lola:"Lola, la barista di Malasaña",
md_ines:"Inés, la capotreno dell’alta velocità"
};
const GREET={
md_cervantes:"Eh, amigo, pardiez! Benvenuto nel mio quartiere. Sono Miguel de Cervantes, e tu devi essere Pierpaolo: a Madrid le notizie corrono più in fretta di un cavallo. Se vuoi, facciamo due passi, ma piano: ho dei bei ricordi qui.",
md_paco:"¡Hombre! Già in piedi a quest’ora? Qui, al tempio, ci vengo ogni mattina con Canelo. Sono Paco, e tu sei Pierpaolo, vero? Venga, ti faccio vedere come si guarda l’alba a Madrid.",
md_manolo:"¡Anda, chaval! Ti vedo con la faccia di uno che ha fame. Sono Manolo, e tu sei Pierpaolo, no? Siediti al bancone: qui i panini ai calamari si mangiano in piedi, ma per te faccio un’eccezione.",
md_pilar:"¡Hola, guapo! Tu sei Pierpaolo, vero? Sono Pilar. Entra, entra: la domenica, con il Rastro, qui è un manicomio, ma c’è sempre posto per uno che ha fame. Vermut o caña?",
md_nacho:"¡Buenas! Barca? Sono Nacho, e tu sei Pierpaolo, no? Ho una barca blu che ti aspetta dalla mattina. Venga, che il lago a quest’ora è una favola.",
md_rafa:"¡Eh, chaval! Taxi libero! No? Tranquillo, tu sei Pierpaolo, vero? Sono Rafa. Se vuoi ti porto dove vuoi, ma per il tramonto qui sei già nel posto migliore.",
md_lola:"¡Hola, guapo! Entra, che fuori si gela. Sono Lola, e questo è il mio bar. Tu sei Pierpaolo? Allora siediti: a Malasaña la sera comincia ora e finisce quando finisce.",
md_ines:"¡Buenas noches! Biglietto, per favore. Ah, non devi partire? Tu sei Pierpaolo, vero? Mi hanno detto che il treno ti aspetta. Sono Inés, la capotreno: qui comando io, ma con il sorriso."
};
/* ---- facciate di strada, zona per zona ---- */
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3);
 if(st==1){/* Parque del Oeste: pini, platani e cedri lungo i viali, ogni tanto i palazzi di mattoni del bordo del parco */
  if(r>.4){[pino,plat,cedro][md(i,3)](g,x+w*.5,gt,md(i,3)==1?1.1+hr(i)*.3:.9+hr(i)*.3,TT);return}
  cas(g,x+10,w-50,h-30,i,k,{wall:['#a8553a','#c8683a','#d8c4a0'][md(i,3)],bal:1,sh:'#2f6a42',roof:'f'});return}
 if(st==2){/* Palazzo Reale: palazzi di pietra chiara con balconi di ferro e persiane, qualche albero del giardino */
  if(r>.82){plat(g,x+w*.5,gt,1.1,TT);return}
  cas(g,x+6,w-30,h+30,i,k,{wall:['#ece6d4','#e4dcc8','#efe9da'][md(i,3)],bal:1,sh:'#8a8478',roof:md(i,2)?'s':'f',cor:'#c8c0a8'});return}
 if(st==3){/* Plaza Mayor e Puerta del Sol: facciate ocra, rosse e gialle, tetti di ardesia nera, portici e negozi */
  cas(g,x+4,w-24,h+40,i,k,{wall:['#b8553a','#d9a441','#c98a30','#e8c24a'][md(i,4)],bal:1,sh:'#3a5a3a',roof:'s',gt:md(i,3)==0?'arc':'shop',sc:['#6a2a22','#2a4a3a','#3a2a4a'][md(i,3)],cor:'#a89878'});return}
 if(st==4){/* La Latina: case di tre-quattro piani rosse, ocra e gialle, torri campanarie di mattoni, taverne al piano terra */
  if(r>.82){mat(g,'#a8553a',x+50,gt-h-60,46,h+60,i);rect(g,'rgba(0,0,0,.14)',x+84,gt-h-60,12,h+60);rect(g,'#c8b890',x+46,gt-h-64,54,6);arco2(g,x+60,gt-h-40);cupo(g,'#6a727c',x+73,gt-h-64,40,34);return}
  cas(g,x+8,w-30,h-20,i,k,{wall:['#c8683a','#d9a441','#e8c24a','#b8553a'][md(i,4)],bal:1,sh:'#2f6a42',roof:md(i,2)?'s':'f',gt:'tav'});return}
 if(st==5){/* Barrio de las Letras: case di quattro-cinque piani terracotta e ocra con persiane verdi, platani alti */
  if(r>.84){plat(g,x+w*.5,gt,1.25,TT);return}
  cas(g,x+6,w-20,h+50,i,k,{wall:['#c8683a','#d8a850','#d9a441','#b8553a'][md(i,4)],bal:1,sh:'#2f6a42',roof:'f',gt:'shop',sc:['#2a4a3a','#6a2a22','#2a3a5a'][md(i,3)]});return}
 if(st==6){/* Retiro: platani, olmi, cedri e pini altissimi, foglie ocra */
  if(r>.15){[plat,olmo,cedro,pino][md(i,4)](g,x+w*.5,gt,md(i,4)==0?1.3+hr(i)*.3:1.2+hr(i)*.4,TT);return}
  cas(g,x+14,w-60,h-40,i,k,{wall:'#d8c4a0',bal:1,sh:'#2f6a42',roof:'s'});return}
 if(st==7){/* Cibeles e Gran Vía: palazzi bianchi con cupolini, balconi e statue; di sera le finestre si accendono */
  cas(g,x+4,w-24,h+60,i,k,{wall:['#efeadc','#e8e0cc','#f2ecdc'][md(i,3)],bal:1,sh:'#8a8478',roof:'f',cor:'#d0c8b0'});
  if(md(i,2)==0)cupo(g,['#3a4a58','#5a3a30','#2a4a40'][md(i,3)],x+w*.5-8,gt-h-69,40,30);return}
 if(st==8){/* Malasaña: case di quattro-cinque piani con balconi di ferro, bar con insegne al neon, negozi vintage */
  cas(g,x+4,w-20,h+50,i,k,{wall:['#c8683a','#d8a850','#6a8a9a','#b8553a','#8a6a9a'][md(i,5)],bal:1,sh:'#2f6a42',roof:'f',gt:'tav'});
  const nc=['#ff5a9a','#5af0b0','#ffd84a','#5ac8ff'][md(i,4)];rect(g,'#14110f',x+w-56,gt-112,38,12);rect(g,k>.1?nc:'#8a8478',x+w-53,gt-109,32,3);if(k>.1)glow(g,x+w-37,gt-106,30,'255,120,180',.25*k);return}
 /* 9: Atocha: palazzi di mattoni e di pietra, qualche blocco moderno di cemento e vetro, pali della linea elettrica */
 if(md(i,5)==1){rect(g,'#c8ccd0',x+6,gt-h-20,w-40,h+20);rect(g,'rgba(0,0,0,.12)',x+w-52,gt-h-20,12,h+20);for(let r2=0;r2<(h+10)/18;r2++)rect(g,k>.2?'rgba(255,226,150,.6)':'rgba(150,190,215,.7)',x+14,gt-h-12+r2*18,w-56,12);for(let q=0;q<6;q++)rect(g,'#6a727c',x+14+q*(w-56)/5,gt-h-12,2,h);return}
 cas(g,x+6,w-30,h+10,i,k,{wall:['#a8553a','#c8c0a8','#d8d0b8'][md(i,3)],bal:md(i,2),sh:'#6a727c',roof:'f'})}
function arco2(g,x,y){rect(g,'#14100c',x,y,26,30);rect(g,'#14100c',x+2,y-8,22,10)}
/* ---- livello 0: cielo, sole, luna, nuvole, velo dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-17000)/2400,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/15600,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*250;
 if(xs<16100){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,15)}
 const mu=cl((xs-16300)/2400,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*210;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<2400?'rgba(252,206,214,.75)':xs<13000?'rgba(255,255,255,.85)':xs<16200?'rgba(255,176,140,.7)':'rgba(140,120,190,.4)';
 each(o-((t*5)%340)*.02,340,1,(x,i,r)=>{if(r>.5)return;nube(g,x+r*100,40+r*46,.7+r*.5,cc)});
 const fo=cl(1-xs/2400,0,1)*.32;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-11800)/1000,0,1)*cl((14800-xs)/900,0,1)*.14;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-14600)/800,0,1)*cl((16800-xs)/900,0,1)*.26;if(wg>.01){g.fillStyle='rgba(255,110,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: la Sierra de Guadarrama, la Casa de Campo, le cupole e i tetti di ardesia, il Retiro, la Gran Vía con i grattacieli, le luci della stazione ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs*1+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 /* Sierra de Guadarrama, lontana e azzurrina, con le cime chiare (zone 1-2) */
 const sg=env(1500,4200);if(sg>.02){g.globalAlpha=sg;const sx=fx(1500);g.fillStyle=dim('#8aa0c4');g.beginPath();g.moveTo(sx-380,hz+30);[[-380,-30],[-320,-52],[-270,-40],[-210,-84],[-150,-64],[-90,-100],[-40,-78],[20,-110],[80,-84],[140,-58],[200,-76],[260,-44],[330,-60],[390,-30]].forEach(p=>g.lineTo(sx+p[0],hz+p[1]));g.lineTo(sx+390,hz+30);g.closePath();g.fill();
  [[-90,-100],[20,-110],[-210,-84]].forEach(p=>poly(g,dim('#e8eef6'),[[sx+p[0]-14,hz+p[1]+14],[sx+p[0],hz+p[1]],[sx+p[0]+14,hz+p[1]+14],[sx+p[0]+6,hz+p[1]+10],[sx+p[0],hz+p[1]+16],[sx+p[0]-6,hz+p[1]+10]]));
  g.fillStyle=dim('#5a8a52');g.beginPath();g.moveTo(sx-420,hz+34);for(let q=0;q<=28;q++){const px=sx-420+q*30;g.lineTo(px,hz+6-10*Math.abs(Math.sin(q*.8)))}g.lineTo(sx+420,hz+34);g.closePath();g.fill();g.globalAlpha=1}
 /* le torri bianche e il Palazzo Reale lontano (zona 1-2) */
 const pl=env(2900,3000);if(pl>.02){g.globalAlpha=pl;const sx=fx(2900);[[-110,34,70],[-50,26,100],[20,44,64],[80,30,86],[140,36,60]].forEach((b,i)=>{rect(g,dim('#e4dcc8'),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2]);rect(g,'rgba(0,0,0,.1)',sx+b[0]+b[1]/2-6,hz+16-b[2],6,b[2])});poly(g,dim('#6a727c'),[[sx-66,hz-84],[sx-50,hz-118],[sx-34,hz-84]]);g.globalAlpha=1}
 /* le cupole della cattedrale, i campanili e i tetti di ardesia nera con le piccole finestre (zone 2-4) */
 const ce=env(5400,5200);if(ce>.02){g.globalAlpha=ce;const sx=fx(5400);
  for(let q=0;q<16;q++){const bx=sx-340+q*44,bh=34+hr(q*3)*40;rect(g,dim('#d0b898'),bx,hz+16-bh,38,bh);poly(g,dim('#3a3e48'),[[bx-3,hz+16-bh],[bx+8,hz+16-bh-14],[bx+30,hz+16-bh-14],[bx+41,hz+16-bh]]);rect(g,dim('#5a5e68'),bx+14,hz+16-bh-10,6,6)}
  g.fillStyle=dim('#8a929a');g.beginPath();g.arc(sx-40,hz-30,34,Math.PI,0);g.fill();rect(g,dim('#d8d0bc'),sx-74,hz-30,68,46);rect(g,dim('#c8c0a8'),sx-42,hz-70,4,12);poly(g,dim('#6a727c'),[[sx+90,hz-70],[sx+100,hz-96],[sx+110,hz-70]]);rect(g,dim('#d8d0bc'),sx+90,hz-70,20,86);poly(g,dim('#6a727c'),[[sx+170,hz-50],[sx+180,hz-76],[sx+190,hz-50]]);rect(g,dim('#d8d0bc'),sx+170,hz-50,20,66);g.globalAlpha=1}
 /* torri di mattoni e cupole di chiese (zona 4-5) */
 const lt=env(9200,3600);if(lt>.02){g.globalAlpha=lt;const sx=fx(9200);for(let q=0;q<12;q++){const bx=sx-260+q*44,bh=40+hr(q*5)*44;rect(g,dim(['#c8683a','#d9a441','#b8553a'][q%3]),bx,hz+16-bh,38,bh);if(night>.3&&hr(q)>.4)rect(g,'rgba(255,226,160,.85)',bx+10,hz+22-bh,5,4)}
  rect(g,dim('#a8553a'),sx+10,hz-74,24,90);poly(g,dim('#6a727c'),[[sx+6,hz-74],[sx+22,hz-100],[sx+38,hz-74]]);g.fillStyle=dim('#8a929a');g.beginPath();g.arc(sx-100,hz-12,26,Math.PI,0);g.fill();rect(g,dim('#d8d0bc'),sx-126,hz-12,52,28);g.globalAlpha=1}
 /* gli alberi del Retiro e, lontano, la porta di pietra (zone 5-6) */
 const re=env(13200,3800);if(re>.02){g.globalAlpha=re;const sx=fx(13200);g.fillStyle=dim('#9a9a38');g.beginPath();g.moveTo(sx-340,hz+30);for(let q=0;q<=30;q++){const px=sx-340+q*23;g.lineTo(px,hz-14-16*Math.abs(Math.sin(q*.9))-8*Math.sin(q*2.1))}g.lineTo(sx+340,hz+30);g.closePath();g.fill();
  g.fillStyle=dim('#c8a82e');g.beginPath();g.moveTo(sx-300,hz+30);for(let q=0;q<=26;q++){const px=sx-300+q*23;g.lineTo(px,hz+2-10*Math.abs(Math.sin(q*1.3)))}g.lineTo(sx+300,hz+30);g.closePath();g.fill();
  rect(g,dim('#d8d0bc'),sx+200,hz-30,54,46);rect(g,dim('#c8c0a8'),sx+196,hz-34,62,6);[[212,10],[227,14],[242,10]].forEach(p=>rect(g,'#3a3a42',sx+p[0],hz+16-p[1]-10,8,p[1]+10));g.globalAlpha=1}
 /* i palazzi bianchi della Gran Vía con le cupole e i grattacieli (zone 7-8) */
 const gv=env(17000,4400);if(gv>.02){g.globalAlpha=.94*gv;const sx=fx(17000);[[-300,40,70],[-250,34,96],[-200,44,66],[-140,30,110],[-90,40,78],[-30,36,126],[20,46,84],[80,32,118],[130,42,70],[190,34,100],[240,40,76],[290,30,90]].forEach((b,i)=>{rect(g,dim(i%2?'#e0d8c4':'#ece6d4'),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2]);rect(g,'rgba(0,0,0,.08)',sx+b[0]+b[1]/2-6,hz+16-b[2],6,b[2]);if(i%3==0)cupo(g,dim('#3a4a58'),sx+b[0],hz+16-b[2],b[1]*.7,18);if(night>.25)for(let q=0;q<b[2]/9;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.85)',sx+b[0]-b[1]/2+3+(q%3)*8,hz+20-b[2]+q*9,4,3)});
  rect(g,dim('#e4dcc8'),sx-112,hz-150,38,40);rect(g,dim('#e4dcc8'),sx-106,hz-176,26,26);rect(g,dim('#e4dcc8'),sx-96,hz-196,8,22);g.globalAlpha=1}
 /* le luci della stazione di Atocha, i binari e i fili (zona 9) */
 const at=env(21600,3600);if(at>.02){g.globalAlpha=at;const sx=fx(21600);g.fillStyle=dim('#1e2a3e');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20;g.lineTo(px,hz-10-14*Math.abs(Math.sin((px+o)*.01))-6*Math.sin((px+o)*.05))}g.lineTo(480,hz+30);g.closePath();g.fill();
  [[-120,60,50],[-50,44,80],[30,70,60],[110,50,90],[190,40,64]].forEach((b,i)=>{rect(g,dim('#8a96aa'),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2]);if(night>.3)for(let q=0;q<b[2]/9;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.85)',sx+b[0]-b[1]/2+3+(q%4)*8,hz+20-b[2]+q*9,4,3)});
  for(let q=0;q<8;q++){ln(g,'rgba(40,40,50,.5)',1,[sx-260+q*70,hz+14,sx-200+q*70,hz-6])}glow(g,sx,hz-20,180,'255,240,200',.35*night);g.globalAlpha=1}
 if(night>.35)for(let q=0;q<46;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.3)+')',q*11+hr(q)*8,hz+20+hr(q*3)*8,1.2)}
/* ---- livello 2: profili di palazzi, alberi e tetti, zona per zona ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;
  const wins=(n,top)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+14+(q%4)*20,top+Math.floor(q/4)*14,6,5)};
  if(zz==1){if(hr(i*3)>.45){el(g,dim(['#2a6a34','#8a8a30','#33783c'][md(i,3)]),x+50,hz-34-r*14,48,34+r*10);el(g,dim('#8a8a30'),x+14,hz-14,30,20);rect(g,dim('#5a3a22'),x+48,hz-8,4,18)}else{rect(g,dim(['#e4d8c0','#d8a880','#ece4d0'][md(i,3)]),x+6,hz-60-r*40,68,70+r*40);rect(g,'rgba(255,255,255,.2)',x+6,hz-60-r*40,4,70+r*40);wins(8,hz-52-r*40)}}
  else if(zz==2){rect(g,dim(['#f0e8d4','#e4dcc8','#ece4d0'][md(i,3)]),x+4,hz-56-r*34,80,66+r*34);rect(g,'rgba(255,255,255,.2)',x+4,hz-56-r*34,4,66+r*34);if(hr(i*3)>.7){poly(g,dim('#6a727c'),[[x,hz-56-r*34],[x+44,hz-90-r*34],[x+88,hz-56-r*34]])}wins(8,hz-48-r*34)}
  else if(zz==3){rect(g,dim(['#c8683a','#d9a441','#b8553a','#e8c24a'][md(i,4)]),x,hz-50-r*34,w-8,60+r*34);poly(g,dim(SLC),[[x-3,hz-50-r*34],[x+14,hz-72-r*34],[x+w-26,hz-72-r*34],[x+w-5,hz-50-r*34]]);if(hr(i*3)>.6)rect(g,dim('#3a3e48'),x+30,hz-84-r*34,10,12);wins(8,hz-40-r*34)}
  else if(zz==4){rect(g,dim(['#c8683a','#d9a441','#e8c24a','#b8553a'][md(i,4)]),x,hz-44-r*26,w-10,54+r*26);rect(g,dim('#a89878'),x-3,hz-48-r*26,w-4,5);if(hr(i*3)>.75){rect(g,dim('#a8553a'),x+30,hz-96,24,60);poly(g,dim('#6a727c'),[[x+26,hz-96],[x+42,hz-118],[x+58,hz-96]])}wins(8,hz-36-r*26)}
  else if(zz==5){rect(g,dim(['#c8683a','#d8a850','#d9a441'][md(i,3)]),x,hz-56-r*30,w-8,66+r*30);rect(g,dim('#a89878'),x-3,hz-60-r*30,w-2,5);for(let q=0;q<4;q++)rect(g,dim('#2f6a42'),x+10+q*22,hz-48-r*30,5,12);if(hr(i*3)>.78)el(g,dim('#a89a38'),x+70,hz-40,30,36);wins(8,hz-40-r*30)}
  else if(zz==6){el(g,dim(['#a89a38','#c8a82e','#8a8a30','#2a6a34'][md(i,4)]),x+50,hz-36-r*20,60,46+r*16);el(g,dim('#c8a82e'),x+14,hz-16,34,26)}
  else if(zz==7){rect(g,dim(['#efeadc','#e8e0cc','#f2ecdc'][md(i,3)]),x,hz-64-r*34,w-8,74+r*34);rect(g,dim('#d0c8b0'),x-3,hz-68-r*34,w-2,5);if(hr(i*3)>.55)cupo(g,dim('#3a4a58'),x+w*.4,hz-68-r*34,34,26);wins(8,hz-54-r*34)}
  else if(zz==8){rect(g,dim(['#c8683a','#d8a850','#6a8a9a','#8a6a9a'][md(i,4)]),x,hz-50-r*28,w-6,60+r*28);rect(g,dim('#d0c8b0'),x-3,hz-54-r*28,w,5);if(night>.1)for(let q=0;q<5;q++)rect(g,'rgba(255,200,110,.85)',x+8+q*18,hz-38-r*28,8,14);if(hr(i*3)>.8)rect(g,['#ff5a9a','#5af0b0','#ffd84a'][md(i,3)],x+30,hz-70-r*28,26,8)}
  else{rect(g,dim(['#a8553a','#c8c0a8','#bcb8aa'][md(i,3)]),x,hz-52-r*30,w-14,62+r*30);wins(10,hz-44-r*30);rect(g,dim('#6a6e78'),x+8,hz-60-r*30,w-30,6)}});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
const SLC='#2e3138';
/* ---- livello 3: la strada, zona per zona ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>150+hr(i*5)*60,170);
 each2(190,8,Z[1],Z[2],2,i=>130+hr(i*5)*50,170);
 each2(170,9,Z[2],Z[3],3,i=>130+hr(i*5)*40,160);
 each2(160,10,Z[3],Z[4],4,i=>130+hr(i*5)*40,150);
 each2(180,11,Z[4],Z[5],5,i=>130+hr(i*5)*40,170);
 each2(210,12,Z[5],Z[6],6,i=>150+hr(i*5)*60,200);
 each2(190,13,Z[6],Z[7],7,i=>150+hr(i*5)*50,170);
 each2(170,14,Z[7],Z[8],8,i=>140+hr(i*5)*40,160);
 each2(190,15,Z[8],Z[9],9,i=>140+hr(i*5)*60,170)}
/* ---- vita: piccioni, passeri, cotorre verdi, corridori e passanti con i cani ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 /* piccioni che si alzano in volo sulle piazze (Palazzo Reale, Plaza Mayor, Puerta del Sol) */
 const pg=Math.max(cl((xs-2800)/400,0,1)*cl((4800-xs)/400,0,1),cl((xs-4800)/400,0,1)*cl((7600-xs)/400,0,1));
 if(pg>.05)for(let i=0;i<5;i++){const bx=((i*117+t*(46+i*6))%600)-60,by=70+hr(i*3)*100+Math.sin(t*2+i*2)*14,w=Math.sin(t*10+i)*3.4;g.strokeStyle='rgba(120,126,140,'+(.9*Math.min(1,pg))+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke();rect(g,'rgba(90,96,110,.9)',bx-2,by,5,3)}
 /* passeri ovunque, piccoli e veloci */
 if(xs<20400)for(let i=0;i<3;i++){const bx=((i*171+t*(80+i*9))%620)-70,by=100+hr(i*5+2)*120+Math.sin(t*3+i)*10,w=Math.sin(t*16+i)*2;g.strokeStyle='rgba(90,66,40,.85)';g.lineWidth=1.8;g.beginPath();g.moveTo(bx-5,by+w);g.lineTo(bx,by);g.lineTo(bx+5,by+w);g.stroke()}
 /* cotorre verdi fra gli alberi dei parchi (Parque del Oeste, Retiro) */
 const pp=Math.max(cl((xs-300)/300,0,1)*cl((2400-xs)/300,0,1),cl((xs-12900)/300,0,1)*cl((15100-xs)/300,0,1));
 if(pp>.05)for(let i=0;i<5;i++){const bx=((i*107+t*(76+i*6))%600)-60,by=90+hr(i*3)*110+Math.sin(t*2.2+i)*14,w=Math.sin(t*14+i)*3;ln(g,'#3aa83a',2.8,[bx-7,by+w,bx,by,bx+7,by+w]);dot(g,'#5ac85a',bx+5,by-2,2.6);rect(g,'#e84a3a',bx+7,by-3,2.4,1.6);ln(g,'#2a8a2a',1.4,[bx-6,by+1,bx-16,by+5])}
 /* corridori nel Parque del Oeste e nel Retiro, passanti per le strade */
 [[300,2300,50,0],[12900,15000,40,1],[5000,7500,-30,2]].forEach((rg,ri)=>{for(let i=0;i<2;i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.25),wx=rg[0]+(((t*sp+i*span/2)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));const d=sp>0?1:-1,by=GT+22+i*9;g.save();g.translate(px,by);g.scale(d*.6,.6);
  fig(g,0,0,t*3,{f:1,s:.7,ph:i,skin:tn('#e0b090'),top:tn(['#e8505a','#2a8a9a','#f2c82a'][i+ri*0]),bot:tn('#2a2a36'),hair:tn('#2a1a10')});g.restore()}})}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#d6cfb4','k'],[Z[1],Z[2],'#d8d2c0','l'],[Z[2],Z[3],'#b8b2a0','g'],[Z[3],Z[4],'#8c8070','c'],[Z[4],Z[5],'#cfc6ae','b'],[Z[5],Z[6],'#dccfa8','r'],[Z[6],Z[7],'#a8a49a','a'],[Z[7],Z[8],'#5a5a62','m'],[Z[8],Z[9],'#8e8e90','v']];
 rect(g,'#e0d8c0',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const slabs=(bw0,add,al)=>{for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,15);rect(g,'rgba(0,0,0,.12)',px,yy,1.3,17)}rect(g,'rgba(0,0,0,.09)',x0,yy+15,x1-x0,1.4)}};
  if(z[3]=='k'){/* prato umido di rugiada, ghiaia battuta nei viali, lastre di pietra chiara attorno al tempio */
   rect(g,'#6aa850',x0,gt+3,x1-x0,26);for(let q=0;q<60;q++)rect(g,'rgba(40,100,40,.3)',x0+((q*29)%ww),gt+5+hr(q)*22,2,4);rect(g,'rgba(255,255,255,.22)',x0,gt+3,x1-x0,8);
   for(let q=0;q<120;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.3)':'rgba(120,100,60,.22)',x0+((q*47)%ww),gt+34+hr(q+3)*80,2+hr(q)*3,1.6);rect(g,'#b8b09a',x0,gt+100,x1-x0,2.4);rect(g,'rgba(120,100,60,.18)',x0,gt+104,x1-x0,22);
   const sx=Math.max(x0,0-cam),ex=Math.min(x1,1000-cam);if(ex>sx){rect(g,'#e8e2d0',sx,gt+30,ex-sx,60);for(let r=0;r<4;r++)rect(g,'rgba(0,0,0,.09)',sx,gt+30+r*15,ex-sx,1.2);for(let k=0;k<Math.ceil((ex-sx)/36)+1;k++)rect(g,'rgba(0,0,0,.09)',sx+k*36-((cam+sx)%36),gt+30,1.2,60)}}
  if(z[3]=='l'){slabs(70,12,.22);rect(g,'#b8b09a',x0,gt+120,x1-x0,3);rect(g,'rgba(0,0,0,.1)',x0,gt+84,x1-x0,2)}
  if(z[3]=='g'){slabs(26,5,.2);for(let q=0;q<90;q++)rect(g,'rgba(0,0,0,.09)',x0+((q*41-cam)%ww+ww)%ww,gt+8+hr(q)*130,5,3);rect(g,'#7a766c',x0,gt+120,x1-x0,3);for(let q=0;q<4;q++)el(g,'#4a4a50',x0+((q*190+60-cam)%ww+ww)%ww,gt+130,7,3)}
  if(z[3]=='c'){slabs(30,7,.14);rect(g,'#6a6054',x0,gt+98,x1-x0,2.4);rect(g,'#6a6054',x0,gt+114,x1-x0,2.4);rect(g,'rgba(255,255,255,.06)',x0,gt+3,x1-x0,16)}
  if(z[3]=='b'){slabs(60,10,.22);for(let q=0;q<46;q++)rect(g,'#b8923a',x0+((q*57-cam)%ww+ww)%ww,gt+14+hr(q*3)*110,7,2.2);rect(g,'#a89c84',x0,gt+120,x1-x0,3)}
  if(z[3]=='r'){/* prato con le foglie ocra, ghiaia chiara dei viali */
   rect(g,'#7aa844',x0,gt+3,x1-x0,34);for(let q=0;q<80;q++)dot(g,hr(q)>.4?'#d8a82e':'#b87a2a',x0+((q*37)%ww),gt+6+hr(q+2)*28,1.6);rect(g,'rgba(255,255,255,.18)',x0,gt+3,x1-x0,8);
   for(let q=0;q<140;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.34)':'rgba(120,100,60,.2)',x0+((q*43)%ww),gt+42+hr(q+3)*88,2+hr(q)*3,1.6);for(let q=0;q<26;q++)dot(g,'#d8a82e',x0+((q*61)%ww),gt+46+hr(q+7)*84,1.5);rect(g,'#c8bc94',x0,gt+122,x1-x0,3)}
  if(z[3]=='a'){/* marciapiedi di granito, asfalto con strisce pedonali e linea tratteggiata */
   rect(g,'#b8b4a8',x0,gt+3,x1-x0,80);for(let r=0;r<5;r++)rect(g,'rgba(0,0,0,.1)',x0,gt+16+r*17,x1-x0,1.4);for(let q=0;q<60;q++)rect(g,'rgba(0,0,0,.1)',x0+((q*30-cam)%ww+ww)%ww,gt+3,1.4,80);
   rect(g,'#4a4a54',x0,gt+84,x1-x0,44);rect(g,'#8a8a88',x0,gt+82,x1-x0,3);for(let q=0;q<40;q++)rect(g,'rgba(255,255,255,.07)',x0+((q*37-cam)%ww+ww)%ww,gt+90+hr(q)*30,10,1.6);for(let k=-1;k<Math.ceil(ww/46)+2;k++){const px=Math.floor((cam+x0)/46)*46+k*46-cam;rect(g,'#f4f0e6',px,gt+104,22,2.4)}
   for(let q=0;q<4;q++){const px=((q*360+120-cam)%700+700)%700-80;for(let w=0;w<8;w++)rect(g,'#f4f0e6',px+w*9,gt+86,5,38)}}
  if(z[3]=='m'){/* strade strette: selciato, marciapiedi con i tavolini, qualche scalino */
   rect(g,'#7a7a82',x0,gt+3,x1-x0,80);for(let r=0;r<5;r++){const yy=gt+9+r*15,bw=26+r*5,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*10,hh=hr(k*13+r*5);rect(g,hh>.6?'rgba(255,255,255,.1)':'rgba(0,0,0,.08)',px,yy,bw-2,12)}}
   rect(g,'#3a3a44',x0,gt+84,x1-x0,40);rect(g,'rgba(255,200,100,.1)',x0,gt+84,x1-x0,4);for(let q=0;q<28;q++)rect(g,'rgba(255,255,255,.08)',x0+((q*37-cam)%ww+ww)%ww,gt+90+hr(q)*30,10,1.6);rect(g,'#8a8a88',x0,gt+82,x1-x0,3)}
  if(z[3]=='v'){/* piazzale, banchina di cemento con la fascia gialla, binari */
   rect(g,'#9a9a98',x0,gt+3,x1-x0,86);for(let r=0;r<5;r++)rect(g,'rgba(0,0,0,.1)',x0,gt+16+r*17,x1-x0,1.4);for(let q=0;q<50;q++)rect(g,'rgba(255,255,255,.14)',x0+((q*53)%ww),gt+10+hr(q)*72,3,1.6);
   rect(g,'#e8c828',x0,gt+88,x1-x0,4);rect(g,'#6a6a6e',x0,gt+92,x1-x0,34);for(let k=-1;k<Math.ceil(ww/14)+2;k++){const px=Math.floor((cam+x0)/14)*14+k*14-cam;rect(g,'#5a4a3a',px,gt+96,5,26)}rect(g,'#2a2a2e',x0,gt+102,x1-x0,2.4);rect(g,'#2a2a2e',x0,gt+114,x1-x0,2.4);rect(g,'rgba(255,255,255,.22)',x0,gt+102,x1-x0,.8);rect(g,'rgba(255,255,255,.22)',x0,gt+114,x1-x0,.8)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1400,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const gd=cl((cam-12200)/700,0,1)*cl((14800-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
 const sg=cl((cam-14600)/700,0,1)*cl((16800-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const glassV=(g,x,y)=>{rect(g,'rgba(240,240,240,.7)',x-3,y-9,6,9);rect(g,'#e8802a',x-3,y-7,6,6);dot(g,'#4a8a3a',x,y-8,1.2)};
const npcs=[
 /* Paco: coppola di lana, giacca di tweed, giornale arrotolato, guance rosse, Canelo al guinzaglio */
 NP('md_paco',NAME.md_paco,800,GREET.md_paco,{skin:'#e0a888',top:'#8a7a5a',bot:'#3a3a46',hair:'#b8b8b8',s:1.0},(g,b,t)=>{el(g,'#5a5048',0,-112+b,17,4.6);poly(g,'#5a5048',[[-10,-113+b],[10,-113+b],[8,-122+b],[-8,-122+b]]);rect(g,'#3a3430',6,-112+b,10,2.4);dot(g,'#e0806a',6,-96+b,2.6);
  for(let q=0;q<6;q++){rect(g,'rgba(60,50,30,.25)',-11+q*4,-86+b,2,26)}rect(g,'#e8e4d8',-22,-76,22,5);rect(g,'rgba(60,60,60,.5)',-20,-75,16,1);
  ln(g,'#6a4a2a',1.2,[14,-62,34,-22]);el(g,'#b8803a',40,-16,13,7);dot(g,'#b8803a',50,-24,5.4);poly(g,'#8a5a22',[[47,-28],[50,-34],[53,-27]]);dot(g,'#14110f',53,-25,1.2);[-7,-1,8,13].forEach(o=>rect(g,'#9a6a2a',40+o,-12,2.8,12));ln(g,'#b8803a',3.4,[28,-18,22,-26+Math.sin(t*6)*3])}),
 /* Manolo: grembiule bianco sopra una camicia a quadri, strofinaccio sulla spalla, baffi, un po' sudato */
 NP('md_manolo',NAME.md_manolo,5480,GREET.md_manolo,{skin:'#d8a078',top:'#8a9ab8',bot:'#2a2a36',hair:'#2a1a10',s:1.04},(g,b,t)=>{for(let q=0;q<4;q++)rect(g,'rgba(255,255,255,.4)',-12,-88+q*10+b,24,2);for(let q=0;q<3;q++)rect(g,'rgba(255,255,255,.4)',-8+q*8,-90+b,2,44);
  rect(g,'#f4f0e6',-11,-76+b,22,34);rect(g,'rgba(0,0,0,.12)',-11,-76+b,3,34);rect(g,'#e8e4d8',-4,-70+b,8,8);rect(g,'#14110f',2,-98+b,10,2.4);rect(g,'#f4f0e6',-14,-92+b,10,5);dot(g,'rgba(190,225,255,.8)',10,-108+b+(t*8%10),1.2)}),
 /* Pilar: grembiule scuro, capelli neri raccolti, grandi orecchini, canovaccio, un bicchierino di vermut */
 NP('md_pilar',NAME.md_pilar,8720,GREET.md_pilar,{skin:'#d8a078',top:'#6a2a3a',bot:'#2a2a36',hair:'#14110f',s:1.0},(g,b,t)=>{rect(g,'#2a2630',-11,-78+b,22,36);rect(g,'#1a1618',-11,-78+b,22,3);dot(g,'#14110f',-6,-116+b,6.4);dot(g,'#14110f',-12,-100+b,5);dot(g,'#e8c04a',-3,-94+b,2.6);dot(g,'#e8c04a',8,-94+b,2.2);rect(g,'#f4f0e6',-14,-92+b,10,5);rect(g,'#c8402a',-14,-90+b,10,1.2);glassV(g,20,-62)}),
 /* Cervantes: mantello scuro, colletto bianco rigido, cappello di feltro, barba e baffi sottili, penna d'oca, mano sinistra sul fianco */
 NP('md_cervantes',NAME.md_cervantes,10890,GREET.md_cervantes,{skin:'#e0b896',top:'#2a2630',bot:'#2a2630',hair:'#4a3a28',long:1,s:1.02},(g,b,t)=>{el(g,'#1a1a1e',0,-112+b,19,4.6);rect(g,'#1a1a1e',-9,-122+b,18,10);rect(g,'#3a3a40',-9,-114+b,18,2.4);rect(g,'#f4f0e6',-9,-91+b,16,5);for(let q=0;q<5;q++)rect(g,'rgba(0,0,0,.14)',-8+q*3.4,-91+b,1,5);
  rect(g,'#2a1e14',3,-98+b,9,1.8);poly(g,'#2a1e14',[[0,-94+b],[8,-94+b],[5,-86+b],[2,-86+b]]);ln(g,'#2a2630',7,[-12,-84+b,-24,-68,-12,-56]);
  ln(g,'#e8e0d0',1.8,[14,-66,28,-100]);poly(g,'#f4f0e6',[[26,-98],[36,-112],[30,-96]]);rect(g,'#e0b896',12,-70,4,5)}),
 /* Nacho: maglietta col logo del noleggio, cappellino, remo in mano, cuffie al collo, taccuino degli orari */
 NP('md_nacho',NAME.md_nacho,13920,GREET.md_nacho,{skin:'#c8946a',top:'#2a7ab8',bot:'#c8b890',hair:'#2a1a10',s:1.02},(g,b,t)=>{rect(g,'#f4f0e6',-7,-76+b,14,6);rect(g,'#2a7ab8',-12,-114+b,26,7);poly(g,'#1a5a88',[[8,-110+b],[22,-108+b],[8,-105+b]]);ln(g,'#2a2a2e',2,[-8,-90+b,-10,-84+b,0,-80+b,10,-84+b,8,-90+b]);
  ln(g,'#8a6a3a',3,[22,-14,22,-120]);poly(g,'#2a62b8',[[18,-124],[28,-124],[26,-96],[20,-96]]);rect(g,'#f4f0e6',-18,-70,10,12);rect(g,'#6a4a2a',-18,-70,10,2)}),
 /* Rafa: camicia a quadretti, occhiali da sole sulla fronte, thermos di caffè, il taxi bianco con la striscia rossa */
 NP('md_rafa',NAME.md_rafa,15900,GREET.md_rafa,{skin:'#d8a078',top:'#c8d0e0',bot:'#3a3a46',hair:'#3a3a3e',s:1.04},(g,b,t)=>{for(let q=0;q<4;q++)rect(g,'rgba(40,60,120,.35)',-12,-88+q*10+b,24,3);for(let q=0;q<3;q++)rect(g,'rgba(40,60,120,.35)',-8+q*8,-90+b,3,44);
  rect(g,'#14110f',-6,-108+b,14,3.6);dot(g,'#2a2a2e',-2,-106.5+b,2.6);dot(g,'#2a2a2e',5,-106.5+b,2.6);rect(g,'#9a9ca2',16,-72,6,14);rect(g,'#c8281e',16,-76,6,4)}),
 /* Lola: maglietta di un gruppo, grembiule di jeans, tatuaggi sulle braccia, capelli corti rossi, canovaccio sulla spalla */
 NP('md_lola',NAME.md_lola,18260,GREET.md_lola,{skin:'#e0b090',top:'#3a2a4a',bot:'#2a2a36',hair:'#c8281e',s:1.0},(g,b,t)=>{rect(g,'#3a5a8a',-11,-76+b,22,34);rect(g,'#2a4a78',-11,-76+b,22,3);dot(g,'#f2c82a',0,-84+b,3);for(let q=0;q<3;q++){rect(g,'#2a2a4a',-16,-68+q*6,4,2);rect(g,'#2a2a4a',12,-70+q*6,4,2)}rect(g,'#f4f0e6',-14,-92+b,10,5);poly(g,'#c8281e',[[-10,-110+b],[10,-110+b],[12,-102+b],[-12,-102+b]])}),
 /* Inés: giacca e gonna scure di servizio, foulard colorato, tablet sotto il braccio, targhetta col nome */
 NP('md_ines',NAME.md_ines,21880,GREET.md_ines,{skin:'#d8a078',top:'#2a2e4a',bot:'#2a2e4a',hair:'#4a2a1a',long:1,s:1.0},(g,b,t)=>{poly(g,'#e8402a',[[-8,-90+b],[8,-90+b],[4,-80+b],[0,-76+b],[-4,-80+b]]);poly(g,'#f2c82a',[[-6,-88+b],[0,-84+b],[6,-88+b]]);rect(g,'#14161c',-26,-80,12,16);rect(g,'#6a8aa4',-25,-79,10,13);rect(g,'#f4f0e6',4,-74+b,8,4);dot(g,'#4a2a1a',-8,-110+b,5)})
];
/* ---- oggetti lungo il percorso ---- */
const LX=[400,1250,1900,2850,3400,3950,4400,5050,5880,6400,6900,7350,8000,8600,9250,10150,10750,11400,11950,12450,13100,13700,14450,14950,15550,16300,16850,17400,18400,19000,19500,20000,20800,21400,22000,22650];
const props=[
 /* zona 1 · Tempio di Debod e Parque del Oeste */
 ['mdtarga',150,'PARQUE DEL OESTE'],['mdpino',240,1],['mddebod',400],['mdfarola',660,0],['mdpino',960,1.1],['mdpanca',1010,1],['mdcipresso',1110,120],['mdoeste',1250],['mdfontanella',1500],['mdplatano',1560,1.2],['mdcestino',1610],['mdbici',1690],['mdtarga',1770,'PLAZA DE ESPAÑA'],['mdespana',1900],['mdfarola',2230,0],['mdpanca',2310,1],
 /* zona 2 · Palazzo Reale e Plaza de Oriente */
 ['mdtarga',2480,'CALLE DE BAILÉN'],['mdoriente',2850],['mdtavolini',3090,'#8a3a2a'],['mdfarola',3140,1],['mdpalazzo',3400],['mdcavallo',3710],['mdtransenna',3790],['mdalmudena',3950],['mdfarola',4200,1],['mdbanca',4260],['mdsabatini',4400],['mdlavagna',4600,'SABATINI'],
 /* zona 3 · Plaza Mayor e Puerta del Sol */
 ['mdtarga',4700,'PLAZA MAYOR'],['mdmayor',5050],['mdfarola',5300,0],['mdbar',5470],['mdbanca',5700],['mdmiguel',5880],['mdfarola',6120,0],['mdmusico',6180],['mdcuchi',6400],['mdtarga',6660,'PUERTA DEL SOL'],['mdsol',6900],['mdedicola',7150],['mdfiori',7230],['mdorso',7350],['mdfarola',7520,1],
 /* zona 4 · La Latina e El Rastro */
 ['mdtarga',7700,'CALLE DE TOLEDO'],['mdrastro',8000],['mdbarile',8370],['mdgatto',8420,'#3a3a3e'],['mdcava',8600],['mdlavagna',8860,'VERMUT'],['mdfarola',8990,0],['mdisidro',9250],['mdgatto',9510],['mdcestino',9560],
 /* zona 5 · Barrio de las Letras e Paseo del Prado */
 ['mdtarga',9800,'BARRIO DE LAS LETRAS'],['mdhuertas',10150],['mdlavagna',10370,'MENÚ DEL DÍA'],['mdcervcasa',10750],['mdfarola',11000,0],['mdtrinitarie',11400],['mdplatano',11660,1.2],['mdprado',11950],['mdbici',12250],['mdnettuno',12450],['mdsemaforo',12650],
 /* zona 6 · Parco del Retiro */
 ['mdtarga',12800,'PARQUE DEL RETIRO'],['mdalcala',13100],['mdplatano',13400,1.3],['mdestanque',13700],['mdolmo',14040,1.2],['mdpalloni',14110],['mdlanterna',14190],['mdpanca',14250,1],['mdcristal',14450],['mdlanterna',14690],['mdcartomante',14800],['mdangelo',14950],['mdcedro',15090,1.2],
 /* zona 7 · Cibeles e Gran Vía */
 ['mdtarga',15180,'CALLE DE ALCALÁ'],['mdcibeles',15550],['mdtaxi',15800],['mdbus',16010],['mdpcibeles',16300],['mdsemaforo',16600],['mdmetropolis',16850],['mdcastagne',17090],['mdtarga',17140,'GRAN VÍA'],['mdgranvia',17400],['mdmonopattino',17640],
 /* zona 8 · Malasaña */
 ['mdtarga',17800,'CALLE DE FUENCARRAL'],['mddosmayo',18400],['mdfarola',18700,0],['mdmanuela',19000],['mdmonopattino',19260],['mdvintage',19500],['mdfarola',19760,0],['mdildefonso',20000],
 /* zona 9 · Stazione di Atocha */
 ['mdtarga',20150,'PASEO DE LA INFANTA ISABEL'],['mdfarola',20400,0],['mdatocha',20800],['mdbus',21090],['mdgiardino',21400],['mdbinari',22000],['mdcarrello',22330],['mdfarola',22470,0],['mdvarco',22650]
];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'madrid',name:'Madrid · Dal Tempio di Debod alla Stazione di Atocha',width:W1,sky:['#8a98c8','#f6b4b8','#ffd8b8'],gt:372,gr:['#d6cfb4','#a89c80'],chord:[196,246.9,293.7,370],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da madrid.txt) --- */
(function(){
const TOPX_MD={
md_cervantes:[
["Chi sei e dove sei nato?","Miguel de Cervantes Saavedra, nato nel 1547 ad Alcalá de Henares, vicino a Madrid. Sono soldato e scrittore, o almeno così mi presento. Dei due mestieri, il secondo mi ha dato più guai, ma anche più gloria."],
["Perché sei a Madrid?","Perché Madrid dal 1561 è la capitale: il re Filippo II ci portò la corte, e chi voleva vivere di penna doveva starci. Vivevo in Calle del León, che oggi si chiama Calle de Cervantes, e qui sono morto. Nel quartiere abitavano Lope de Vega, Quevedo e Góngora: tutti in poche strade."],
["Perché ti chiamano \"il monco di Lepanto\"?","Perché nel 1571, alla battaglia di Lepanto, fui ferito e persi l’uso della mano sinistra. Ne vado fiero: l’ho perso combattendo per la mia fede e il mio re. Poi, nel 1575, i pirati mi catturarono e restai cinque anni prigioniero ad Algeri."],
["Chi pagò il tuo riscatto?","I frati Trinitari, nel 1580. Per questo ho voluto essere sepolto nel loro convento, qui a Madrid. Gli debbo la libertà: pardiez, bisogna pagare i propri debiti."],
["Che cos’è il Don Chisciotte?","Il mio libro: la storia di un hidalgo della Mancia che legge troppi romanzi di cavalleria e decide di farsi cavaliere. Esce nel 1605, stampato a Madrid dalla tipografia di Juan de la Cuesta; la seconda parte esce nel 1615. Dicono che sia il primo romanzo moderno: io volevo solo far ridere."],
["Chi sono Sancio Panza e Ronzinante?","Sancio è il suo scudiero, un contadino basso e furbo, sempre affamato e pieno di proverbi; Ronzinante è il cavallo magro. L’hidalgo scambia mulini a vento per giganti: tutti conoscono quella scena. Vedo che avete messo i miei due matti in bronzo a Plaza de España: che onore!"],
["Com’era il tuo rapporto con Lope de Vega?","Complicato! Lope era il più famoso autore di teatro dell’epoca e viveva a pochi passi da me, in Calle de Cervantes. Eravamo rivali, ma in un quartiere così piccolo ci si incontrava per forza. Madrid è anche questo: si litiga e poi si va a prendere un vino insieme."],
["Come sei morto?","Il 22 aprile 1616, a sessantotto anni, a casa mia. Mi seppellirono il giorno dopo nel convento delle Trinitarie. Nei secoli nessuno ha più saputo dove fosse la tomba, finché nel 2015 mi hanno ritrovato nella cripta, con una cassetta con le iniziali M.C."],
["Cosa ne pensi di Madrid oggi?","Mi stupisce! Alla mia epoca la Plaza Mayor la stavano ancora finendo: fu ultimata fra il 1617 e il 1619, subito dopo il mio tempo. Oggi la città è piena di luci, di gente e di cibo. Vedo che i madrileni parlano molto e stanno poco a casa: mi piacciono."],
["Cosa si mangiava ai tuoi tempi?","Il Don Chisciotte comincia con un pasto: un’olla di più manzo che montone, e il sabato duelos y quebrantos, uova e lardo. L’olla è la madre del cocido madrileño di oggi, hombre. Per noi la tavola era semplice, ma si mangiava con gusto e con proverbi."],
["Hai un proverbio da regalarmi?","Ne ho mille nel Don Chisciotte, e Sancio li spara a raffica! Uno che mi piace: \"Dime con quién andas y te diré quién eres\", dimmi con chi vai e ti dirò chi sei. Scegli bene i compagni di strada, Pierpaolo: il viaggio è più bello."],
["Posso salutarti e proseguire la mia passeggiata?","Va’ pure, amigo, e se ripassi dal Barrio de las Letras cerca la targa di Calle de Cervantes 2: ci sono sempre. Buon viaggio, e che i mulini a vento ti siano sempre amici!"]
],
md_paco:[
["Chi sei e che fai?","Paco, settantun anni, nato a Madrid, madrileño de pura cepa. Ho lavorato trentotto anni alla Telefónica, in quel grattacielo sulla Gran Vía. Ora vengo qui con il cane: alla mia età è il lavoro migliore."],
["Cos’è questo tempio?","Il Tempio di Debod, un vero tempio egizio. L’Egitto lo regalò alla Spagna nel 1968, per ringraziarla dell’aiuto nel salvare i templi di Abu Simbel. Lo rimontarono qui pietra per pietra e lo aprirono nel 1972. Qué pasada, no?"],
["Perché la gente viene qui al tramonto?","Perché da qui il sole cala sopra la Casa de Campo, il grande parco a ovest, e il tempio si colora di rosso. È il posto più romantico di Madrid: coppie, fotografi, chitarristi. Io preferisco l’alba: meno gente e più cane."],
["Si può entrare?","Sì, è gratis, ma ora bisogna prenotare in anticipo. Dentro ci sono le sale con i rilievi e un plastico che mostra com’era sul Nilo. Il lunedì, quando è chiuso, ci si accontenta del giro intorno e dello specchio d’acqua."],
["Com’è il clima di Madrid?","Secco e con il cielo azzurro, quasi sempre. Siamo a circa 650 metri: la capitale più alta dell’Unione europea. Per questo l’estate è torrida e l’inverno gelido: si dice \"nueve meses de invierno y tres de infierno\", nove mesi d’inverno e tre d’inferno."],
["Che cosa significa \"gato\"?","I madrileni si chiamano \"gatos\", gatti. Si dice che il soprannome venga dai soldati che nel 1085, con il re Alfonso VI, scalarono le mura della città come gatti. Di vero gatto, per tradizione, è chi ha genitori e nonni nati a Madrid: io lo sono, naturalmente."],
["Com’è nata Madrid?","Gli storici dicono che nasce come fortezza musulmana nel IX secolo, dove oggi c’è il Palazzo Reale. Il nome arabo era Mayrit. Mica male per un villaggio sul fiume, oggi capitale di tutta la Spagna!"],
["Cos’è quella piazza laggiù con i due grattacieli?","La Plaza de España: l’Edificio España e la Torre de Madrid, due grattacieli degli anni Cinquanta. In mezzo c’è il monumento a Cervantes con Don Chisciotte e Sancio. Da lì parte la Gran Vía, la nostra Broadway, come dicono i madrileni."],
["Cosa si fa a colazione?","Un café con leche e una tostada con olio e pomodoro, oppure chocolate con churros nei giorni di festa. Si fa colazione presto e poco, perché il pranzo è alle due o alle tre. Il resto della giornata si regge a cañas e tapas."],
["Cosa fate la domenica?","Si fa il paseo, la passeggiata in famiglia, e si va al Rastro. Poi un vermut con la famiglia e il pranzo, che finisce alle quattro. Il pomeriggio, la partita: a Madrid ci sono due squadre, il Real, i \"blancos\", e l’Atlético, i \"colchoneros\", i materassai."],
["Perché \"colchoneros\"?","Perché in passato le maglie dell’Atlético, a righe rosse e bianche, ricordavano le fodere dei materassi. Il soprannome è rimasto, e i tifosi lo portano con orgoglio. Il derby è una guerra gentile: tanti sfottò e poi tutti a bere insieme."],
["Posso salutarti e proseguire la mia passeggiata?","Venga, Pierpaolo, ma non perderti il Palazzo Reale: è a due passi. Canelo ti saluta con la coda. Que te vaya bien, hombre!"]
],
md_manolo:[
["Chi sei e che fai?","Manolo, cinquantasei anni, nato a Lavapiés. Questo bar era di mio padre, e ora è mio: trent’anni dietro lo stesso bancone. Friggo calamari, servo cañas e ascolto la vita degli altri: il mio lavoro è fare da psicologo."],
["Cos’è il panino ai calamari?","Il bocadillo de calamares: anelli di calamaro fritti in un panino croccante, con una fetta di limone. Si dice che l’abbiano inventato i bar attorno alla Plaza. A Madrid non c’è mare, ma abbiamo un panino di mare: genio, eh?"],
["Cos’è la Plaza Mayor?","La piazza più bella di Madrid: la costruirono fra il 1617 e il 1619, sotto Filippo III, con l’architetto Juan Gómez de Mora. Ha subìto tre grandi incendi, ma l’hanno sempre ricostruita. La facciata dipinta della Casa de la Panadería è la mia preferita."],
["Cos’è il Mercado de San Miguel?","Un mercato coperto in ferro e vetro, vicino alla piazza: sembra una serra. Ci si mangia in piedi un po’ di tutto, tapas, ostriche, prosciutto, formaggio, con un bicchiere in mano. Costa un po’ caro, ma ci si diverte."],
["Cosa c’è a Calle Cuchilleros?","La Casa Botín, aperta nel 1725: il Guinness dei primati la considera il ristorante più antico del mondo ancora aperto. Il loro piatto è il cochinillo, il maialino arrosto nel forno a legna. Io, per rispetto, ci vado solo una volta l’anno."],
["Cos’è il chilometro zero?","Alla Puerta del Sol, per terra, davanti al palazzo con l’orologio, c’è una targa: da lì partono le strade principali della Spagna. Si misura tutto da quel punto. Quindi, tecnicamente, tutta la Spagna parte da qui, e io la servo ogni giorno."],
["Cos’è l’orso con il corbezzolo?","Lo stemma di Madrid: un orso che mangia i frutti di un corbezzolo. La statua è all’angolo della Puerta del Sol, davanti a Calle de Alcalá. Qui ci si dà appuntamento con \"ci vediamo all’orso\": ci sono sempre mille persone che aspettano."],
["Cosa sono le dodici uvas?","A Capodanno, a mezzanotte, si mangiano dodici chicchi d’uva, uno per ogni rintocco dell’orologio della Puerta del Sol. Si dice che la moda sia partita nel 1909, quando i viticoltori di Alicante ebbero troppa uva da vendere. Sia come sia, funziona: porta fortuna per dodici mesi."],
["A che ora si mangia a Madrid?","Il pranzo alle due o alle tre, la cena dopo le nove. Chi cena prima delle nove, per noi, è un turista. E l’orario cambia anche nei bar: la gente esce alle dieci di sera e si va a dormire quando finisce la voglia."],
["Cosa sono le tapas e le cañas?","La caña è la birra piccola alla spina, e la tapa è lo stuzzichino. In molti bar la tapa si porta con la bevanda, ma non dappertutto. Si dice \"ir de cañas\" o \"ir de tapas\": è un’uscita, non un pasto, e ci si sposta di bar in bar."],
["Come parlano i madrileni?","Con parole brevi e tante esclamazioni. \"Vale\" vuol dire \"va bene\", \"guay\" è \"fico\", \"tío\" e \"tía\" sono \"amico, amica\", \"mola\" è \"mi piace\", \"madre mía\" è la tua faccia quando vedi il conto. E tutti dicono \"venga\", che vuol dire \"dai\"."],
["Posso salutarti e proseguire la mia passeggiata?","¡Venga, Pierpaolo! Vai pure alla Puerta del Sol, ma prima prendi un bocadillo per la strada: de rechupete! Que te vaya bonito!"]
],
md_pilar:[
["Chi sei e che fai?","Pilar, quarantanove anni, la quarta generazione della taverna di famiglia. Mia nonna serviva i viaggiatori, mia madre i vicini, io tutti. Se non servo almeno cento cañas prima di mezzogiorno, mi sento male."],
["Com’è La Latina?","Il quartiere più vecchio di Madrid: vicoli stretti, case basse, balconi di ferro, torri di mattoni. La Cava Baja e la Cava Alta erano piene di locande per chi arrivava in città. Oggi sono piene di taverne, ma il profumo di cucina è lo stesso."],
["Cos’è El Rastro?","Il mercato delle pulci: ogni domenica e festivo, dalle nove alle tre, da Plaza de Cascorro giù per la Ribera de Curtidores. Ci sono documenti che lo citano già nel 1740. Il nome viene dalle concerie e dal macello di una volta: \"rastro\" vuol dire traccia."],
["Cosa si trova al Rastro?","Di tutto: vecchi libri, dischi, mobili, lampade, cianfrusaglie, qualche vero tesoro. Si contratta, e si dice \"¿cuánto es lo menos?\". Attento alle tasche, perché con la folla c’è sempre qualcuno con la mano lesta."],
["Cos’è il vermut?","L’aperitivo della domenica, dopo il Rastro: vermut rosso con ghiaccio, una fetta d’arancia e un’oliva, a volte con un goccio di soda. Si beve in piedi o in terrazza, con patatine, acciughe e olive. Si chiama \"hacer el vermut\", e a Madrid è quasi un rito."],
["Che tapas servite?","Patatas bravas, croquetas, tortilla de patatas, gambas al ajillo e i huevos rotos: uova fritte sopra le patate con prosciutto o chorizo. Qui non si guarda l’orologio: si mangia finché si ha voglia. Si dice che, se è sul conto, non è una tapa!"],
["Cos’è il cocido madrileño?","Il piatto-simbolo della città: ceci, carne, salsiccia e verdure, serviti in tre portate: prima il brodo con la pasta, poi i ceci e le verdure, poi le carni. Si mangia da ottobre a marzo. Alle due del pomeriggio, in un giorno freddo, è la cosa più bella del mondo."],
["C’è una locanda antica qui vicino?","La Posada de la Villa, in Cava Baja: esiste dal 1642, quindi quasi quattrocento anni. Fanno l’agnello arrosto nel forno a legna. Per i madrileni è un monumento: ci si va per i compleanni e i battesimi."],
["Chi è San Isidro?","Il patrono di Madrid, un contadino del Medioevo, vissuto, si dice, attorno al XII secolo. Il 15 maggio si fa la sua festa: la gente si veste da chulapos e chulapas, con i vestiti tradizionali, e si va a mangiare nella pradera, il prato. Le sue spoglie sono nella Colegiata, qui vicino."],
["Cos’è la Verbena de la Paloma?","La festa del 15 agosto, in La Latina, dedicata alla Vergine della Paloma: balli, musica, bancarelle e vestiti tradizionali. Anche d’estate si esce di notte, perché di giorno è troppo caldo. Madrid ad agosto è deserta, ma qui, quella sera, c’è un mondo di gente."],
["Cos’è la sobremesa?","Il tempo che si passa a tavola dopo aver mangiato, a chiacchierare. Nessuno ti porta il conto subito: bisogna chiederlo, \"la cuenta, por favor\". Fretta qui non esiste: quando mangi con amici, la giornata si ferma."],
["Posso salutarti e proseguire la mia passeggiata?","¡Venga, guapo! Vai pure, ma torna: il mio vermut aspetta. E se vedi il Prado, salutalo da parte mia. ¡Hasta luego, Pierpaolo!"]
],
md_nacho:[
["Chi sei e che fai?","Nacho, trentatré anni, da sette anni gestisco le barche dell’Estanque. D’inverno, quando il lago è più tranquillo, faccio il fotografo di matrimoni. Il Retiro è il mio ufficio: non mi lamento."],
["Cos’è il Retiro?","Il parco più grande del centro di Madrid: circa un chilometro e mezzo quadrato. Era il giardino di un palazzo reale, il Buen Retiro. Dal 1868 è pubblico: prima era riservato ai re e ai loro invitati."],
["Come funziona il lago?","Si noleggiano barche a remi blu, a ore. Sul lato c’è il monumento ad Alfonso XII, un grande colonnato con la statua a cavallo. Meglio andare al mattino: nel pomeriggio, il fine settimana, è un ingorgo di barche."],
["Cos’è il Palacio de Cristal?","Un padiglione di ferro e vetro costruito nel 1887 dall’architetto Ricardo Velázquez Bosco, ispirato al Crystal Palace di Londra. Serviva per l’Esposizione delle Filippine, che allora erano una colonia spagnola. Oggi ospita mostre d’arte: sembra una bolla di cristallo in mezzo agli alberi."],
["E l’Angelo Caduto?","La statua di Lucifero che cade, di Ricardo Bellver, vicino alla Rosaleda. Si dice che sia l’unica statua pubblica del diavolo al mondo. E si dice anche che sia a 666 metri sul livello del mare: una coincidenza che piace ai turisti."],
["C’è un albero speciale?","Sì, un ahuehuete, un cipresso messicano, vicino alla Puerta de Felipe IV: è considerato uno degli alberi più vecchi di Madrid. Ci sono platani enormi, cedri, e in autunno il parco diventa tutto giallo e arancio. A ottobre è il momento più bello, qué pasada."],
["Cosa è successo nel 2021?","Dal luglio 2021 il Retiro, insieme al Paseo del Prado, è Patrimonio UNESCO, con il nome di \"Paesaggio della Luce\". Ci hanno messo dentro i musei, il Jardín Botánico e il parco. Noi, a dire il vero, lo sapevamo già che era un posto speciale."],
["Cosa si fa al Retiro la domenica?","Si passeggia, si va in barca, si ascolta la musica dal vivo e si guardano gli artisti di strada: burattinai, maghi, musicisti. Le famiglie fanno il picnic sul prato, e le coppie si siedono sulle panchine. La domenica il Retiro è il salotto di Madrid."],
["Cos’è la Rosaleda?","Il giardino delle rose, accanto all’Angelo Caduto: con centinaia di rose di tutti i colori. In primavera è la meraviglia, a ottobre ne restano ancora un po’. È uno dei posti più fotografati, e io me lo godo gratis."],
["Cos’è la Puerta de Alcalá?","L’arco monumentale all’ingresso del parco, con cinque aperture. Era una delle porte d’accesso alla città e oggi è nel mezzo del traffico. Quando mi perdo, mi oriento con lei: è il mio punto fisso."],
["Com’è il caldo a Madrid?","Fortissimo: d’estate si arriva ai quaranta gradi. Il record nel Retiro è di 40,7 gradi, il 14 agosto 2021. Ad agosto la città si svuota, e si vedono i cartelli \"cerrado por vacaciones\": tutti al mare, tranne noi."],
["Posso salutarti e proseguire la mia passeggiata?","Venga, Pierpaolo, e ricorda: se ti stanchi di camminare, il Retiro ti perdona. Ora vai verso la Cibeles, che il tramonto è lì. ¡Chao, tío!"]
],
md_rafa:[
["Chi sei e che fai?","Rafa, cinquantadue anni, tassista da trent’anni. Conosco Madrid meglio di mia madre, e lei sostiene di conoscerla meglio di me. Il bello è che ogni giorno scopro una strada nuova."],
["Com’è il taxi di Madrid?","Bianco, con una striscia rossa diagonale sulla portiera. Quando sul tettuccio c’è la luce verde significa che è libero. Il tassametro è obbligatorio, e noi siamo educati: se non lo siamo, il cliente se ne accorge, eh."],
["Cos’è la fontana della Cibeles?","La dea Cibele su un carro tirato da due leoni. La progettò Ventura Rodríguez nel 1777, per Carlo III. Per i madrileni è un simbolo: ci si dà appuntamento, ci si fa la foto, e ci si festeggia."],
["Perché i tifosi vanno alla Cibeles?","Perché quando il Real Madrid vince, la gente si raduna alla Cibeles a festeggiare. L’Atlético, invece, va alla fontana di Nettuno, lungo il Paseo del Prado. Ognuno ha la sua dea o il suo dio, e il traffico, quel giorno, è un caos."],
["Cos’è questo palazzo bianco?","Il Palazzo di Cibeles, ex Palacio de Comunicaciones: lo inaugurarono nel 1919 come sede delle poste e dei telegrafi, e lo chiamarono \"la cattedrale delle comunicazioni\". Oggi è il Municipio. Guarda che torri e che guglie: sembra una chiesa, ma dentro ci sono gli uffici del Comune e, in cima, un belvedere."],
["Com’è nata la Gran Vía?","Con un’idea ardita: aprire un viale in mezzo ai vecchi vicoli del centro. Fu approvata nel 1904, i lavori cominciarono nel 1910 e finirono nel 1929. I madrileni dissero che era stato un \"hachazo\", un colpo d’ascia, sulla mappa della città."],
["Cos’è la Telefónica?","Il palazzo con l’orologio sulla Gran Vía, alto circa 89 metri: uno dei primi grattacieli d’Europa. Un mio amico ci ha lavorato per trentotto anni, Paco, lo conosci. Oggi dentro ci sono spazi culturali e mostre."],
["Cos’è l’Edificio Metrópolis?","Il palazzo ad angolo all’inizio della Gran Vía, con la cupola nera e la Vittoria alata dorata. Lo costruirono due architetti francesi. Dalla terrazza del Círculo de Bellas Artes, qui vicino, si vede da vicino: il tramonto da lassù è da piangere."],
["Com’è il traffico a Madrid?","Un incubo! C’è la M-30, la tangenziale che gira intorno al centro, e le ore di punta sono alle otto del mattino e alle nove di sera. Sì, hai capito bene: alle nove di sera, perché a Madrid si esce tardi. Io il caffè lo prendo sempre in macchina."],
["Come si dice \"ciao\" a Madrid?","\"Hola\" e \"qué tal\". Per salutare, due baci sulle guance, uno per parte, se ci si conosce. \"Venga\", \"vale\" e \"anda ya\" sono le parole che si sentono di più: \"anda ya\" vuol dire \"ma dai, non ci credo\"."],
["Quale squadra tifano i madrileni?","Dipende! I \"blancos\" del Real, con la maglia bianca, e i \"colchoneros\" dell’Atlético, rossi e bianchi. Il derby è una festa e una guerra insieme. Nella mia famiglia, ci siamo divisi: io Real, mio fratello Atlético, e a Natale non ci si parla di calcio."],
["Posso salutarti e proseguire la mia passeggiata?","¡Venga, Pierpaolo! Se ti serve un passaggio per Malasaña, un fischio e arrivo. Altrimenti buon tramonto, y ¡cuídate, tío!"]
],
md_lola:[
["Chi sei e che fai?","Lola, trentotto anni, barista. Prima cantavo in un gruppo, ma i locali pagavano in birra. Così ho aperto un bar: adesso la birra la vendo io. Sono felice, ma la chitarra è ancora qui dietro, sul bancone."],
["Perché si chiama Malasaña?","Dal nome di Manuela Malasaña, una ragazza di diciassette anni morta, a quanto si racconta, durante l’insurrezione del 2 maggio 1808. Prima il quartiere si chiamava Barrio de las Maravillas. È un nome che a molti madrileni piace, perché ricorda una ragazza coraggiosa."],
["Cos’è successo il 2 maggio 1808?","Il popolo di Madrid si rivoltò contro le truppe di Napoleone. Qui c’era il parco d’artiglieria di Monteleón: i capitani Daoíz e Velarde guidarono la difesa e morirono. Di quell’arco è rimasto l’ingresso e di fronte c’è il loro monumento. Goya dipinse la scena, e il quadro è al Prado."],
["Cos’è la Movida?","Il movimento culturale degli anni Ottanta, nato qui dopo la morte di Franco nel 1975. Musica, cinema, moda, locali aperti tutta la notte. Era la voglia di libertà, dopo anni di silenzio. Oggi ne resta un’aria un po’ kitsch, ma ci siamo affezionati."],
["Com’è il quartiere oggi?","Pieno di bar storici, negozi di dischi e di abiti vintage, locali con musica dal vivo, caffè di qualità. La sera le terrazze sono piene fino a tardi, e il fine settimana è un fiume di gente. Madrid è così: non si ferma mai."],
["A che ora si esce la sera?","Si cena verso le dieci, e si esce dopo mezzanotte \"de marcha\", cioè a fare festa. Se arrivi a un locale alle undici, sei il primo. A Madrid l’orario lo decide il buon umore, non l’orologio."],
["Come si ordina una birra?","\"Una caña\" è il bicchierino di birra alla spina; \"un doble\" o \"un tubo\", come si dice a Madrid, è più grande. Si ordina e spesso ti portano una tapa. Se vuoi un bicchiere d’acqua: \"un agua del grifo\", acqua del rubinetto, ed è ottima."],
["Come si fa la tortilla?","Con patate, uova e, qui scatta la guerra, con o senza cipolla: \"con cebolla o sin cebolla\". Nel mio bar fanno entrambe, ma io faccio finta di non avere preferenze. Quando la servo calda, sembra una nuvola di uova e di patate."],
["Come sono i madrileni?","Aperti e rumorosi: parlano molto, ridono forte e ti invitano a bere dopo cinque minuti. Moltissimi madrileni non sono nati qui, e in pochi mesi diventano di casa. Un forestiero, a Madrid, dopo cinque minuti è già di casa."],
["Dove si ascolta il flamenco?","A Madrid ci sono i tablaos, locali dove si vede il flamenco dal vivo: chitarra, canto e ballo. Non è nato qui, ma i madrileni lo adorano. E poi ci sono locali piccoli dove la gente suona per il gusto di farlo."],
["Cosa si fa quando si chiude il bar?","Si sistema, si lavano i bicchieri e si fa colazione con una tostada e un café con leche. A volte, chi ha ballato tutta la notte, torna a casa con il cioccolato e i churros, in una cioccolateria aperta presto. È un rito."],
["Posso salutarti e proseguire la mia passeggiata?","¡Venga, guapo! Ti lascio andare, ma torna: la chitarra ti aspetta. E se vai ad Atocha, saluta il giardino. ¡Hasta luego, Pierpaolo!"]
],
md_ines:[
["Chi sei e che fai?","Inés, quarantacinque anni, capotreno sull’AVE da quindici. Controllo che tutto funzioni, aiuto i passeggeri, guido l’equipaggio. Ho visto Madrid da ogni finestrino: la mia preferita è quella dell’alba."],
["Com’è nata la stazione di Atocha?","È la prima stazione di Madrid: inaugurata il 9 febbraio 1851 per la linea che arrivava ad Aranjuez, la seconda ferrovia della Spagna. Fu ricostruita nel 1892 dopo un incendio, con una tettoia di ferro e vetro. Oggi è la stazione principale dell’alta velocità."],
["Cos’è il giardino tropicale?","La vecchia tettoia, lunga 152 metri e alta 27, trasformata in una serra con circa 7.000 piante di 260 specie. Una volta c’erano anche molte tartarughe nello stagno, ma nel 2018 ne hanno spostate parecchie per l’affollamento. Si cammina sotto le palme prima di partire: qué pasada."],
["Chi ha progettato la parte nuova?","Rafael Moneo, fra il 1985 e il 1992: costruì la nuova stazione dietro la vecchia e trasformò la tettoia in giardino. Nel 1992, per l’Expo di Siviglia, partì il primo treno ad alta velocità, l’AVE, da Madrid ad Andalusia. Da allora la Spagna è un’altra."],
["Quanto è veloce l’AVE?","Fino a trecento chilometri all’ora. Madrid-Siviglia in circa due ore e mezza, e per Barcellona più o meno lo stesso. Sembra di stare in un aereo, con il vantaggio che non si deve arrivare tre ore prima. Ma i controlli ai bagagli ci sono, come in aeroporto."],
["Perché si dice che Madrid è il centro della Spagna?","Perché lo è: sta nel cuore della penisola. Le strade principali partono dal chilometro zero della Puerta del Sol e le linee ferroviarie si aprono a raggiera da Madrid verso tutte le direzioni. Per andare da Barcellona a Siviglia, in treno, di solito si passa da qui."],
["Che treni ci sono?","Oltre all’AVE ci sono i treni regionali e i Cercanías, i treni dei pendolari, che portano ogni giorno migliaia di persone dai paesi vicini. Chi viene da Alcalá de Henares, la città natale di Cervantes, arriva in poco più di mezz’ora. Atocha è un formicaio."],
["Cosa mangia la gente in treno?","Bocadillos con tortilla o con jamón, frutta, un po’ di formaggio. Molti si portano la colazione da casa, e in treno si chiacchiera con chi sta vicino. Il panino al prosciutto è il re dei viaggi, de rechupete."],
["Come si dice addio in spagnolo?","\"Hasta luego\", a dopo, anche se non ci si rivedrà. Oppure \"hasta pronto\" e \"buen viaje\". In Spagna non si dice mai un addio secco: si lascia sempre una porta aperta. Quindi ci vediamo, Pierpaolo, hasta luego."],
["Cosa ami di Madrid?","La luce e la gente: Madrid è una città che accoglie tutti e li trasforma in madrileni. Il cielo azzurro e secco, il caffè sul bancone, le piazze piene. E il fatto che da qui si possa partire per tutta la Spagna."],
["Che consiglio dai a chi parte?","Di arrivare con qualche minuto di anticipo, guardare dal finestrino e non aver fretta. Il viaggio fa parte della meta. E prima di salire, una cosa: respira. Madrid ti aspetterà."],
["Posso salutarti e proseguire la mia passeggiata?","¡Claro, Pierpaolo! In fondo al binario c’è una luce: seguila, e non voltarti. ¡Buen viaje, y hasta luego!"]
]
};
Object.assign(TOPX,TOPX_MD);
})();
