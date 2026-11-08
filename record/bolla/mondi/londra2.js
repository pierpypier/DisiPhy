/* ---------- LONDRA 2 · Dal Serpentine al Meridiano (Hyde Park e Kensington Gardens, St James's Park e Westminster, Trafalgar Square e Covent Garden, la Tube, St Paul's e Borough Market, London Bridge e il Monumento, la Torre e il Tower Bridge, Greenwich) ---------- */
/* Un'intera giornata da sinistra a destra: alba sul Serpentine e a Kensington Gardens, mattina a St James's Park, a Buckingham Palace e a Westminster,
   tarda mattina fra Trafalgar Square e Covent Garden, mezzogiorno sottoterra nella Tube, primo pomeriggio a St Paul's e a Borough Market,
   pomeriggio dorato sul London Bridge e al Monumento, tramonto alla Torre e al Tower Bridge, sera e notte a Greenwich.
   Sulla collina dell'Osservatorio un raggio di luce verde segue la linea del meridiano: lì c'è il varco.
   Testi, tappe e dialoghi vengono da londra2.txt (definitivi, usati senza riscriverli). Gli oggetti stanno in elementi.js (nomi che iniziano per "l2").
   Il tono per i temi dolorosi (Grande Incendio, Blitz, infanzia di Dickens, fine dei due scrittori) è sempre sobrio e rispettoso; le leggende sono presentate con "si dice". */
(function(){
const GT=372,W1=20000;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln}=PR._rm;
const {cas,cupo,plat,olmo,pers,gente}=PR._md;
const {nf,lit,ippo,salice,folla}=PR._l2;
const md=(i,n)=>((i%n)+n)%n;const GD='#d8b448';
const LIT='rgb(255,226,150)';
const Z=[0,2600,5600,7800,9800,12400,14400,16400,W1+400];   /* inizio di ognuna delle 8 zone */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* ---- cielo: alba rosa perla, mattina fresca, tarda mattina con nuvole, primo pomeriggio chiaro e freddo, pomeriggio dorato, tramonto rosso-arancio, crepuscolo cobalto, notte ---- */
const SKY=[[0,['#9aa4c8','#f2c4c8','#ffe2d0']],[1400,['#5aa0e0','#a8d0ee','#e8f0f0']],[2600,['#4a98e0','#9ccaee','#e4eef0']],[5600,['#4a90d8','#9cc4e8','#e8eef0']],[7800,['#4a90d8','#9cc4e8','#e8eef0']],[9800,['#6a9ccc','#b8d0e0','#e8ecec']],[12400,['#6a96c8','#d8c8a8','#ffe0a0']],[14400,['#5a74b8','#e8a878','#ffc080']],[15200,['#6a4a98','#e8604a','#ffa050']],[15900,['#4a3a88','#c04a6a','#f88a58']],[16600,['#1a2c78','#3a4a98','#8a5a8a']],[17800,['#0e2260','#1c3a8a','#4a5a9a']],[19000,['#080e34','#101c54','#26306a']],[99999,['#080e34','#101c54','#26306a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,38*s,10*s);el(g,c,x-20*s,y+3*s,24*s,8*s);el(g,c,x+22*s,y+3*s,26*s,8*s);el(g,c,x+4*s,y-7*s,22*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Londra, dall’alba alla notte. Parti dal Serpentine, quando la foschia si alza dal lago e i nuotatori sono già in acqua, e attraversi Kensington Gardens fino al Peter Pan. Al mattino ti aspettano i pellicani di St James’s Park, il Big Ben e l’Abbazia di Westminster; a metà mattina Trafalgar Square e Covent Garden. A mezzogiorno scendi nella Tube, la metropolitana più antica del mondo; poi la cupola di St Paul’s, il Millennium Bridge, il Globe e Borough Market. Nel pomeriggio il London Bridge e il Monumento al Grande Incendio; al tramonto la Torre di Londra e il Tower Bridge si accendono sul fiume; a notte arrivi a Greenwich, dove comincia l’ora del mondo. Il tempo qui si piega: Samuel Pepys e Charles Dickens ti vengono incontro, e la città è quella di oggi.";
const LKTXT=[
"L’Albert Memorial: la regina Vittoria lo volle per ricordare il marito Alberto, morto nel 1861. È alto 54 metri, in stile neogotico, e fu aperto nel 1872. Di fronte c’è la Royal Albert Hall, inaugurata nel 1871: un teatro rotondo con più di cinquemila posti, che ogni estate ospita i concerti dei Proms.",
"Peter Pan: la statua di bronzo dello scultore George Frampton, voluta dall’autore J. M. Barrie. Comparve in segreto nella notte del 1° maggio 1912, perché i bambini credessero che l’avessero portata le fate; Barrie avvisò con un annuncio sul Times. È nel punto in cui Peter atterra in un libro di Barrie del 1902.",
"Il Serpentine: il lago nacque nel 1730, quando la regina Carolina fece sbarrare un fiumiciattolo, il Westbourne. Dal 1864 il Serpentine Swimming Club organizza una gara di nuoto ogni mattina di Natale; il trofeo, la Peter Pan Cup, c’è dal 1904. I soci nuotano tutto l’anno, anche d’inverno, la mattina presto.",
"Rotten Row: una larga pista di sabbia che attraversa il parco verso Hyde Park Corner. Si dice che il nome venga dal francese \"route du roi\", la strada del re, ma gli studiosi non sono sicuri. Il parco fu terreno di caccia di Enrico VIII dal 1536 e Carlo I lo aprì al pubblico nel 1637.",
"Buckingham Palace: ha 775 stanze. La prima a viverci fu la regina Vittoria, nel 1837. In certi giorni, alle 11, davanti ai cancelli c’è il cambio della guardia: soldati con la giubba rossa, il colbacco di pelo nero e la banda.",
"St James’s Park: uno dei parchi più antichi di Londra. Dal 1664 ci vivono i pellicani: la prima coppia fu un dono dell’ambasciatore russo a re Carlo II. Oggi se ne prende cura il personale dei parchi reali, che dà loro il pesce ogni giorno.",
"Il Big Ben: il nome è quello della campana, non della torre, che si chiama Elizabeth Tower. La torre è alta 96 metri, la campana pesa quasi 14 tonnellate e batte l’ora dal 1859. Si dice che il soprannome venga da sir Benjamin Hall, che sorvegliò l’installazione, o da un pugile, Benjamin Caunt: nessuno lo sa di preciso.",
"L’Abbazia di Westminster: fu consacrata nel 1065 da Edoardo il Confessore. Da Guglielmo il Conquistatore, nel Natale del 1066, quasi tutti i sovrani inglesi vi sono stati incoronati. Nell’Angolo dei Poeti ci sono tombe e lapidi di Chaucer, Shakespeare e Dickens.",
"Trafalgar Square: nacque per ricordare la battaglia di Trafalgar, del 1805. La colonna di Nelson è alta 51,6 metri e i quattro leoni di bronzo di Landseer ci sono dal 1867. Sul quarto basamento, rimasto vuoto per anni, dal 1999 si espongono opere d’arte che cambiano. A dicembre arriva dalla Norvegia un grande abete: è un dono dal 1947.",
"Covent Garden: la piazza fu disegnata da Inigo Jones nel 1630, all’italiana, per il conte di Bedford. Fino al 1974 qui c’era il grande mercato della frutta e della verdura; oggi ci sono bancarelle, negozi e artisti di strada. Per esibirsi bisogna superare un’audizione.",
"St Paul’s Covent Garden: la chiesa disegnata da Inigo Jones, chiamata \"la chiesa degli attori\". Sotto il suo portico, il 9 maggio 1662, Samuel Pepys vide uno spettacolo di burattini italiani, forse l’antenato di Punch. Oggi una targa lo ricorda.",
"La Tube: la metropolitana di Londra, la più antica del mondo, aprì nel gennaio 1863 tra Paddington e Farringdon, con treni a vapore e carrozze di legno. Oggi ha 11 linee e 272 stazioni. Sulle scale mobili si sta fermi a destra e si cammina a sinistra: a Londra ti rimproverano con garbo se sbagli.",
"Baker Street: una delle stazioni originali del 1863 della Metropolitan Railway. Ha dieci binari, più di ogni altra stazione della rete. Sui muri ci sono tante sagome di Sherlock Holmes, il detective di Conan Doyle che abitava al 221B.",
"Embankment: sulla banchina nord della Northern line si sente ancora la voce originale di \"Mind the gap\", incisa da un attore, Oswald Laurence. Quando fu sostituita, la vedova, che veniva qui ad ascoltarla, scrisse alla metropolitana: nel 2013 l’hanno rimessa.",
"St Paul’s: la cattedrale di Christopher Wren, costruita dal 1675 al 1710 dopo il Grande Incendio del 1666. La cupola è alta 111 metri; 257 gradini portano alla Galleria dei Sussurri, dove una voce sussurrata si sente dall’altra parte. Durante il Blitz, nel 1940, i volontari la difesero dalle bombe incendiarie: la fotografia di quella notte è famosa.",
"Il Millennium Bridge: il ponte pedonale sospeso fra St Paul’s e il Tate Modern. Aprì il 10 giugno 2000 e due giorni dopo lo chiusero perché oscillava: i londinesi lo chiamarono \"Wobbly Bridge\", il ponte ballerino. Fu riaperto nel 2002. Il Tate Modern è un’ex centrale elettrica, la Bankside Power Station, piena d’arte moderna dal 2000.",
"Il Globe: il teatro di Shakespeare, aperto nel 1599, bruciò nel 1613 quando un colpo di cannone di scena incendiò il tetto di paglia durante Enrico VIII. Quello di oggi, nato grazie all’attore Sam Wanamaker, è del 1997 e ha l’unico tetto di paglia permesso a Londra dal 1666. In platea si sta in piedi.",
"Borough Market: si dice che esista da circa mille anni vicino a London Bridge; dal 1756 sta dov’è oggi, e le tettoie vittoriane sono del 1851. Si vendono frutta, formaggi, pane, funghi e cibo di strada da mezzo mondo. Poco più in là c’è il George Inn, l’unica locanda con i ballatoi di legno rimasta a Londra.",
"London Bridge: il ponte medievale, finito nel 1209, aveva case e botteghe sopra e durò seicento anni. Quello di Rennie, del 1831, fu venduto nel 1968 a un americano e rimontato in Arizona; una storia dice che lo credesse il Tower Bridge, ma lui lo negò sempre. Quello di oggi è del 1973, largo e semplice.",
"Il Monumento: una colonna di pietra alta 202 piedi, circa 61 metri, tanti quanti la distanza dal forno di Pudding Lane dove il 2 settembre 1666 cominciò il Grande Incendio. Lo progettarono Wren e Robert Hooke, e fu finito nel 1677. Con 311 gradini si arriva alla balconata sotto l’urna dorata.",
"All Hallows by the Tower: la chiesa più antica della City, fondata nel 675. Dalla sua torre, il 5 settembre 1666, Pepys guardò bruciare Londra. Si salvò dall’incendio, ma fu colpita dalle bombe nella Seconda guerra mondiale e ricostruita negli anni Cinquanta.",
"La Torre di Londra: Guglielmo il Conquistatore cominciò la Torre Bianca nel 1078, con pietra di Caen portata dalla Normandia. È stata fortezza, palazzo, zecca, zoo reale e prigione, e custodisce i Gioielli della Corona. Dal 1988 è Patrimonio UNESCO.",
"I corvi della Torre: ce ne sono sempre almeno sei, curati dal Ravenmaster. Si dice che, se i corvi lasciassero la Torre, cadrebbero la Torre e il regno. Gli Yeoman Warders, detti Beefeaters, sono ex militari con almeno ventidue anni di servizio e vivono con le famiglie dentro le mura.",
"Il Tower Bridge: progettato da Horace Jones e da John Wolfe Barry, fu aperto il 30 giugno 1894. Ha due torri alte 65 metri e due ponti mobili, le \"bascule\", che si alzano per far passare le navi alte: centinaia di volte all’anno. Non è il London Bridge, che è più a monte: molti li scambiano.",
"La Cutty Sark: un clipper del tè, varato a Dumbarton nel 1869, fra i velieri più veloci del suo tempo. Nel 2007 prese fuoco durante il restauro e riaprì nel 2012, sollevata di tre metri dal suo bacino. Vicino c’è l’ingresso del Greenwich Foot Tunnel: 370 metri sotto il Tamigi, aperto giorno e notte.",
"L’Old Royal Naval College: nacque come ospedale dei marinai, disegnato da Wren e da Hawksmoor. Dentro c’è la Painted Hall, dipinta da James Thornhill tra il 1707 e il 1726: la chiamano \"la Cappella Sistina d’Inghilterra\". Di fronte la Queen’s House di Inigo Jones, il primo edificio classico d’Inghilterra.",
"La Trafalgar Tavern: aprì nel 1837 sul fiume, con grandi finestre a semicerchio che guardano il Tamigi. Si dice che Dickens ci abbia ambientato il pranzo di nozze di \"Il nostro comune amico\". Nell’Ottocento i ministri arrivavano in barca da Westminster per le cene di whitebait, minuscoli pesci del Tamigi fritti.",
"Il Royal Observatory: fondato nel 1675 da Carlo II. Una striscia di metallo nel cortile segna il meridiano zero: da una parte l’est, dall’altra l’ovest. Nel 1884 una conferenza internazionale scelse Greenwich come zero dell’ora del mondo. Ogni giorno, all’una, scende la palla rossa sul tetto.",
"Sulla collina, nel buio, un raggio verde parte dal tetto dell’Osservatorio e va verso nord, sopra la città: è il meridiano. In fondo, la luce di un altro mondo ti chiama."
];
const NAME={
l2_jo:"Jo, la nuotatrice del Serpentine",
l2_colin:"Colin, il tassista nero",
l2_dickens:"Charles Dickens",
l2_ravi:"Ravi, il macchinista della Tube",
l2_sally:"Sally, la fruttivendola di Borough Market",
l2_pepys:"Samuel Pepys",
l2_graham:"Graham, lo Yeoman Warder",
l2_maureen:"Maureen, la padrona della Trafalgar Tavern"
};
const GREET={
l2_jo:"Wotcha! Sei Pierpaolo, vero? Sì, sto per buttarmi nel lago, e no, non sono matta: è solo un po’ nippy, cioè freschino. Io sono Jo, e dalla riva ti racconto Londra, finché l’acqua non mi chiama.",
l2_colin:"Oi, guv! Ti serve un taxi? No? Allora un passaggio di chiacchiere, che è gratis. Io sono Colin, Pierpaolo, e questo gioiello nero lo guido da trent’anni: non perdo mai la strada, a differenza dei miei clienti.",
l2_dickens:"Ah, my dear fellow, un’altra anima in giro per Londra! Sei Pierpaolo, me l’ha detto un venditore di caldarroste. Charles Dickens, per servirti. Vieni, facciamo due passi: io penso meglio con i piedi che con la testa.",
l2_ravi:"Mind the gap, mate! Cioè: occhio al vuoto fra treno e banchina, ma anche fra te e me, perché sto per attaccare bottone. Sono Ravi, Pierpaolo, guido treni sotto Londra e oggi sono in pausa pranzo.",
l2_sally:"Alright, darlin’! Una mela? Assaggia, è gratis: la prima la offro io, la seconda la paghi. Sono Sally, Pierpaolo, e qui ci sono da trent’anni: se non ci sono io, qualcuno dice che è domenica.",
l2_pepys:"Ah, my friend, benvenuto sotto il Monumento! Sei Pierpaolo, vero? Mi permetto di saperlo: le chiacchiere a Londra viaggiano più in fretta dei carri. Sono Samuel Pepys, e se hai un minuto ti racconto come ho visto bruciare la città.",
l2_graham:"Good evening, young man! Hai l’aria di uno che ha fame di storie: sei Pierpaolo, giusto? Sono Graham, Yeoman Warder, per i turisti Beefeater: in questa Torre ci vivo, ci lavoro e ci chiudo i cancelli.",
l2_maureen:"Wotcha, love! Entra, entra, che fuori è nippy, ma dire freddo è poco. Sei Pierpaolo, vero? Io sono Maureen, la padrona di casa: un tavolo te lo trovo sempre, il resto della vita no."
};
/* ---- facciate di strada, zona per zona ---- */
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3);
 if(st==1){/* Hyde Park e Kensington Gardens: platani e ippocastani ingialliti; ogni tanto le case bianche a stucco di Kensington */
  if(r>.38){[plat,ippo,plat][md(i,3)](g,x+w*.5,gt,md(i,3)==1?1.1+hr(i)*.3:1.2+hr(i)*.3,TT);return}
  cas(g,x+8,w-40,h-10,i,k,{wall:['#f0ece0','#e8e2d0','#f4f0e6'][md(i,3)],bal:1,sh:'#2a2a2e',roof:'f',cor:'#d0c8b0'});return}
 if(st==2){/* Westminster: facciate chiare di Whitehall; a St James's Park solo alberi e salici */
  if(wx>4150&&wx<4750){if(md(i,2))salice(g,x+w*.5,gt,1.2,TT);else plat(g,x+w*.5,gt,1.2,TT);return}
  if(r>.84){plat(g,x+w*.5,gt,1.15,TT);return}
  cas(g,x+6,w-30,h+40,i,k,{wall:['#e6dcc4','#dcd0b4','#ece4cc'][md(i,3)],bal:1,sh:'#8a8478',roof:md(i,2)?'s':'f',cor:'#c8c0a8'});return}
 if(st==3){/* Trafalgar e Covent Garden: case di mattoni a quattro piani, pub con balconi e insegne */
  cas(g,x+4,w-24,h+60,i,k,{wall:['#9a4a38','#8a5a3a','#b8683a','#d8c8a0','#7a3a30'][md(i,5)],bal:1,sh:['#2a4a3a','#2a2a3a','#6a2a22'][md(i,3)],roof:'s',gt:md(i,3)==0?'tav':'shop',sc:['#6a2a22','#2a4a3a','#2a3a5a'][md(i,3)]});return}
 if(st==4){/* la Tube: piastrelle chiare, travi, archi di mattoni; il corridoio d'ingresso poi la banchina con il tunnel dei binari */
  const pl=wx>=8450;rect(g,pl?'#d6ceb4':'#dcd4bc',x,0,w+1,gt);for(let q=0;q<25;q++)rect(g,'rgba(0,0,0,.05)',x,q*15,w,1);for(let q=0;q<14;q++)rect(g,'rgba(0,0,0,.05)',x+q*15,0,1,gt);
  rect(g,'#2a2620',x,0,w+1,52);rect(g,'#14110f',x,50,w+1,5);rect(g,LIT,x+14,38,w-28,4);glow(g,x+w/2,40,120,'255,226,150',.3);
  if(pl){[0,1].forEach(q=>{rect(g,'#7a3a2a',x+q*w*.5+4,56,6,gt-56)});ar(g,'#0c0a08',x+26,gt-18,w-52,230);ar(g,'#1a1612',x+48,gt-22,w-96,190);for(let q=0;q<3;q++)ln(g,'rgba(255,214,130,.4)',1,[x+w/2,gt-120,x+w/2-26+q*26,gt-22]);dot(g,LIT,x+w/2,gt-118,3);glow(g,x+w/2,gt-118,50,'255,226,150',.25)}
  else{const c=['#c8402a','#2a6aa8','#e8c04a','#4aa86a'][md(i,4)];rect(g,'#14110f',x+32,gt-212,56,76);rect(g,c,x+35,gt-209,50,70);for(let q=0;q<4;q++)rect(g,'rgba(255,255,255,.55)',x+40,gt-202+q*14,28+(q%2)*8,4);if(md(i,2)){rect(g,'#2a4a8a',x+112,gt-208,40,30);txt(g,'WAY OUT',x+132,gt-189,7,'#f4f0e6')}}
  rect(g,'#2a4a8a',x,gt-40,w+1,6);rect(g,'#14110f',x,gt-8,w+1,8);return}
 if(st==5){/* South Bank e Borough: mattoni, arcate ferroviarie, qualche torre di vetro */
  if(md(i,4)==1){rect(g,'#9ab4c4',x+10,gt-h-50,w-50,h+50);rect(g,'rgba(255,255,255,.18)',x+10,gt-h-50,6,h+50);for(let r2=0;r2<(h+40)/16;r2++)for(let q=0;q<(w-50)/14;q++)if(k>.2&&hr(i*31+r2*7+q)>.5)rect(g,LIT,x+14+q*14,gt-h-44+r2*16,8,6);return}
  cas(g,x+4,w-24,h+20,i,k,{wall:['#9a4a38','#8a4a38','#a8553a','#b8a888'][md(i,4)],bal:md(i,2),sh:'#2a3a3a',roof:'f',gt:'shop',sc:['#2a4a3a','#6a2a22','#2a3a5a'][md(i,3)]});return}
 if(st==6){/* la City: palazzi di pietra e mattoni, uffici di vetro, ombre lunghe */
  if(md(i,3)==1){rect(g,'#9ab4c4',x+6,gt-h-70,w-40,h+70);rect(g,'rgba(255,255,255,.18)',x+6,gt-h-70,6,h+70);rect(g,'rgba(0,0,0,.12)',x+w-56,gt-h-70,16,h+70);for(let r2=0;r2<(h+60)/16;r2++)for(let q=0;q<(w-40)/14;q++)if(k>.2&&hr(i*31+r2*7+q)>.5)rect(g,LIT,x+10+q*14,gt-h-64+r2*16,8,6);return}
  cas(g,x+4,w-24,h+30,i,k,{wall:['#c8b890','#d4c8a4','#9a4a38','#d8d0b8'][md(i,4)],bal:1,sh:'#3a3a3a',roof:'f',cor:'#b8b09a',gt:md(i,2)?'shop':'',sc:'#3a3a4a'});return}
 if(st==7){/* la Torre e il fiume: pietra chiara, qualche albero sul prato, mura e merli */
  if(r>.7){plat(g,x+w*.5,gt,1.2,TT);return}
  cas(g,x+6,w-30,h-10,i,k,{wall:['#c8bea0','#d4ccb0','#b8b09a'][md(i,3)],bal:md(i,2),sh:'#4a4a4a',roof:'f',cor:'#a8a088'});
  for(let q=0;q<Math.floor(w/20);q++)rect(g,'#b8b09a',x+8+q*20,gt-h-22,10,12);return}
 /* 8: Greenwich: edifici Regency chiari e alberi del parco; sulla collina solo prato e alberi scuri */
 if(wx>19000||r>.6){[plat,ippo,olmo][md(i,3)](g,x+w*.5,gt,1.1+hr(i)*.4,TT);return}
 cas(g,x+6,w-30,h+10,i,k,{wall:['#e8dfc4','#f0ece0','#d8d0b8'][md(i,3)],bal:1,sh:'#3a4a5a',roof:md(i,2)?'s':'f',gt:'shop',sc:['#2a3a5a','#6a2a22'][md(i,2)]})}
/* ---- livello 0: cielo, sole, luna, stelle, nuvole basse e mobili, velo dell'alba, fuochi d'artificio lontani ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-16200)/2400,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/15200,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*220;
 if(xs<15600){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,240);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*110)+',.8)');sg.addColorStop(1,'rgba(255,220,160,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT+4);dot(g,'rgba(255,'+Math.round(250-low*80)+','+Math.round(210-low*110)+',.95)',sx,sy,13)}
 const mu=cl((xs-16400)/2600,0,1);if(mu>0){const mx=150+mu*230,my=300-mu*190;dot(g,'rgba(255,248,215,.16)',mx,my,34);dot(g,'#f6f0d6',mx,my,14);dot(g,'rgba(180,190,210,.5)',mx-4,my-3,3.4)}
 /* nuvole basse e veloci, con improvvise schiarite; più cariche al mattino e dopo il tramonto */
 const cc=xs<2600?'rgba(252,206,214,.8)':xs<12400?'rgba(236,240,244,.9)':xs<14600?'rgba(255,220,170,.8)':xs<15900?'rgba(255,150,120,.7)':'rgba(120,110,170,.45)';
 each(o-((t*9)%340)*.02,170,1,(x,i,r)=>{if(r>.62)return;nube(g,x+r*100,34+r*70,.8+r*.7,cc)});
 const fo=cl(1-xs/2600,0,1)*.34;if(fo>.01){g.fillStyle='rgba(252,196,206,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-11800)/1000,0,1)*cl((14200-xs)/900,0,1)*.14;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-14200)/800,0,1)*cl((16400-xs)/900,0,1)*.26;if(wg>.01){g.fillStyle='rgba(255,110,70,'+wg+')';g.fillRect(0,0,480,GT+4)}
 /* qualche botto lontano: fuochi d'artificio sopra la città, dal crepuscolo in poi */
 if(nt>.15)for(let b=0;b<3;b++){const cy=5+b*1.9,ph=((t+b*2.3)%(5+b))/(5+b);if(ph>.55)continue;const q=ph/.55,bx=70+b*150+hr(b*7+Math.floor((t+b*2.3)/(5+b)))*80,by=60+hr(b*3)*50+(b%2)*16,col=['255,120,80','120,200,255','255,230,120'][b];for(let s=0;s<16;s++){const an=s*Math.PI/8,rr=q*(44+b*8);g.fillStyle='rgba('+col+','+(1-q)*nt+')';g.fillRect(bx+Math.cos(an)*rr,by+Math.sin(an)*rr+q*q*16,2.6,2.6)}}}
/* ---- livello 1: gli alberi del parco e la Royal Albert Hall, Westminster e la ruota, la cupola di St Paul's e i grattacieli, Tower Bridge e Canary Wharf, Greenwich ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs*1+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const torre=(sx,w,h,c,wn)=>{rect(g,dim(c),sx-w/2,hz+16-h,w,h);rect(g,'rgba(255,255,255,.12)',sx-w/2,hz+16-h,3,h);if(night>.3&&wn)for(let q=0;q<h/12;q++)if(hr(sx+q)>.45)rect(g,'rgba(255,226,160,.8)',sx-w/2+3,hz+20-h+q*12,w-6,3)};
 const tre=(sx,n,sp,c1)=>{g.fillStyle=dim(c1);g.beginPath();g.moveTo(sx-sp,hz+30);for(let q=0;q<=n;q++){const px=sx-sp+q*(2*sp/n);g.lineTo(px,hz+4-10*Math.abs(Math.sin(q*.9))-hr(q)*8)}g.lineTo(sx+sp,hz+30);g.closePath();g.fill()};
 /* Hyde Park: i filari di alberi dorati, la cupola di vetro della Royal Albert Hall, torri di vetro in lontananza (zona 1) */
 const hp=env(1500,3600);if(hp>.02){g.globalAlpha=hp;const sx=fx(1500);tre(sx,26,380,'#9a9a38');tre(sx+30,22,330,'#c8a82e');
  const hdd=(c,cx,cy,rx,ry)=>{g.fillStyle=dim(c);g.beginPath();g.ellipse(cx,cy,rx,ry,0,Math.PI,0);g.fill()};
  rect(g,dim('#a8553a'),sx-180,hz-20,100,36);hdd('#9ab4c4',sx-130,hz-20,40,22);torre(sx+210,16,60,'#9ab4c4',1);torre(sx+236,12,84,'#a8c0d0',1);g.globalAlpha=1}
 /* Westminster: la torre dell'orologio, il palazzo con i pinnacoli, la grande ruota lungo il fiume (zone 2-3) */
 const ws=env(4900,3800);if(ws>.02){g.globalAlpha=ws;const sx=fx(4900);for(let q=0;q<12;q++){const bx=sx-260+q*44,bh=24+hr(q*3)*30;rect(g,dim('#d8c8a0'),bx,hz+16-bh,38,bh);poly(g,dim('#3a3e48'),[[bx-3,hz+16-bh],[bx+8,hz+16-bh-10],[bx+30,hz+16-bh-10],[bx+41,hz+16-bh]])}
  rect(g,dim('#b8a070'),sx+60,hz-60,16,76);poly(g,dim('#4a5a5a'),[[sx+58,hz-60],[sx+68,hz-86],[sx+78,hz-60]]);dot(g,dim('#f2ecd4'),sx+68,hz-44,5);rect(g,dim('#b8a070'),sx+80,hz-12,80,28);for(let q=0;q<9;q++)poly(g,dim('#b8a070'),[[sx+80+q*9,hz-12],[sx+84+q*9,hz-22],[sx+88+q*9,hz-12]]);
  g.strokeStyle=dim('#9a9ea6');g.lineWidth=1.4;g.beginPath();g.arc(sx-200,hz-34,42,0,7);g.stroke();for(let q=0;q<8;q++){const an=q*Math.PI/4;ln(g,dim('#9a9ea6'),.9,[sx-200,hz-34,sx-200+Math.cos(an)*42,hz-34+Math.sin(an)*42])}ln(g,dim('#9a9ea6'),1.4,[sx-200,hz-34,sx-210,hz+16]);g.globalAlpha=1}
 /* Covent Garden e il West End: i tetti dei teatri, la guglia di St Martin e la cupola della National Gallery (zona 3) */
 const cg=env(6700,3200);if(cg>.02){g.globalAlpha=cg;const sx=fx(6700);for(let q=0;q<14;q++){const bx=sx-300+q*44,bh=30+hr(q*5)*34;rect(g,dim(['#a8553a','#c8b890','#b8683a'][q%3]),bx,hz+16-bh,38,bh);poly(g,dim(SLC),[[bx-3,hz+16-bh],[bx+8,hz+16-bh-12],[bx+30,hz+16-bh-12],[bx+41,hz+16-bh]]);if(night>.3)rect(g,'rgba(255,226,160,.7)',bx+8,hz+20-bh,6,5)}
  rect(g,dim('#d0c8b0'),sx+110,hz-24,10,40);poly(g,dim('#d0c8b0'),[[sx+108,hz-24],[sx+115,hz-70],[sx+122,hz-24]]);g.globalAlpha=1}
 /* la cupola di St Paul's, il Tate, lo Shard e i grattacieli di vetro (zone 5-6) */
 const sp=env(11200,4400);if(sp>.02){g.globalAlpha=sp;const sx=fx(11200);g.fillStyle=dim('#a8a8a0');g.beginPath();g.ellipse(sx-100,hz-6,34,34,0,Math.PI,0);g.fill();rect(g,dim('#d8d4c4'),sx-134,hz-6,68,22);rect(g,dim('#d8d4c4'),sx-104,hz-60,8,18);dot(g,dim('#d8b448'),sx-100,hz-64,3);
  [[sx-240,22,60,'#9ab4c4'],[sx-210,16,84,'#a8c0d0'],[sx-20,24,70,'#9ab4c4'],[sx+10,18,96,'#a8c0d0'],[sx+40,28,60,'#9ab4c4'],[sx+120,20,80,'#9ab4c4']].forEach(b=>torre(b[0],b[1],b[2],b[3],1));
  poly(g,dim('#b8ccd8'),[[sx+70,hz+16],[sx+84,hz-92],[sx+98,hz+16]]);rect(g,dim('#5a4a3e'),sx+160,hz-34,18,50);rect(g,dim('#5a4a3e'),sx+156,hz-52,6,20);g.globalAlpha=1}
 /* le torri della City: il cetriolo, il grattacielo a punta, le gru (zone 6-7) */
 const ct=env(13700,3600);if(ct>.02){g.globalAlpha=ct;const sx=fx(13700);[[-210,22,76],[-170,18,100],[-120,26,64],[-50,24,90],[20,30,70],[90,20,110],[150,24,80]].forEach((b,i)=>torre(sx+b[0],b[1],b[2],['#9ab4c4','#a8c0d0','#8aa4b8'][i%3],1));
  g.fillStyle=dim('#a8c4d4');g.beginPath();g.ellipse(sx-84,hz-34,10,32,0,0,7);g.fill();ln(g,dim('#6a6e78'),1.4,[sx+190,hz+16,sx+190,hz-60]);ln(g,dim('#6a6e78'),1.4,[sx+168,hz-56,sx+230,hz-56]);g.globalAlpha=1}
 /* Tower Bridge e Canary Wharf: due torri gotiche lontane, la nave da guerra grigia (zona 7) */
 const tb=env(15700,3400);if(tb>.02){g.globalAlpha=tb;const sx=fx(15700);[-24,24].forEach(o2=>{rect(g,dim('#b8b09a'),sx+o2-8,hz-50,16,66);poly(g,dim('#4a5a6a'),[[sx+o2-10,hz-50],[sx+o2,hz-70],[sx+o2+10,hz-50]])});rect(g,dim('#4a8ac8'),sx-24,hz-48,48,5);poly(g,dim('#6a727c'),[[sx+90,hz+16],[sx+100,hz+4],[sx+190,hz+4],[sx+200,hz+16]]);rect(g,dim('#6a727c'),sx+130,hz-6,30,10);
  for(let q=0;q<7;q++)torre(sx-250+q*24,18,40+hr(q*3)*50,'#8aa4b8',1);g.globalAlpha=1}
 /* Greenwich: Canary Wharf illuminata, i pennoni della Cutty Sark, le cupole gemelle, la collina con l'Osservatorio (zona 8) */
 const gw=env(18300,4800);if(gw>.02){g.globalAlpha=gw;const sx=fx(18300);for(let q=0;q<9;q++)torre(sx-300+q*22,16+(q%3)*4,40+hr(q*9)*60,'#8aa4b8',1);torre(sx-100,28,130,'#a8c0d0',1);poly(g,dim('#a8c0d0'),[[sx-114,hz-114],[sx-100,hz-142],[sx-86,hz-114]]);if(night>.2)dot(g,'rgba(255,60,60,'+(.5+.5*Math.sin(t*3))+')',sx-100,hz-144,2.4);
  g.fillStyle=dim('#4a7a3a');g.beginPath();g.moveTo(sx+40,hz+30);g.quadraticCurveTo(sx+160,hz-60,sx+300,hz+30);g.fill();rect(g,dim('#8a3a2a'),sx+150,hz-40,30,18);dot(g,dim('#d8281e'),sx+165,hz-46,3);
  [-8,0,8].forEach(o3=>ln(g,dim('#3a3028'),1.2,[sx+o3*3-20,hz+16,sx+o3*3-20,hz-40]));
  [-26,26].forEach(o4=>{rect(g,dim('#d8d4c4'),sx+90+o4-14,hz-6,28,22);g.fillStyle=dim('#7a8a96');g.beginPath();g.ellipse(sx+90+o4,hz-6,12,16,0,Math.PI,0);g.fill()});g.globalAlpha=1}
 if(night>.35)for(let q=0;q<46;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.3)+')',q*11+hr(q)*8,hz+20+hr(q*3)*8,1.2)}
/* ---- livello 2: profili di palazzi, alberi e tetti, zona per zona ---- */
const SLC='#2e3138';
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;
  const wins=(n,top)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+14+(q%4)*20,top+Math.floor(q/4)*14,6,5)};
  if(zz==1){if(hr(i*3)>.4){el(g,dim(['#a89a38','#c8a82e','#8a8a30'][md(i,3)]),x+50,hz-34-r*14,48,34+r*10);el(g,dim('#8a8a30'),x+14,hz-14,30,20)}else{rect(g,dim('#f0ece0'),x+4,hz-44-r*20,80,54+r*20);rect(g,dim(SLC),x+2,hz-48-r*20,84,6);wins(8,hz-36-r*20)}}
  else if(zz==2){if(hr(i*3)>.62){el(g,dim(['#a89a38','#6a8a3a','#8a8a30'][md(i,3)]),x+50,hz-34-r*14,48,34+r*10)}else{rect(g,dim(['#e6dcc4','#dcd0b4','#ece4cc'][md(i,3)]),x+4,hz-56-r*30,80,66+r*30);poly(g,dim(SLC),[[x,hz-56-r*30],[x+14,hz-72-r*30],[x+70,hz-72-r*30],[x+86,hz-56-r*30]]);wins(8,hz-48-r*30)}}
  else if(zz==3){rect(g,dim(['#9a4a38','#8a5a3a','#b8683a','#7a3a30'][md(i,4)]),x,hz-52-r*34,w-8,62+r*34);poly(g,dim(SLC),[[x-3,hz-52-r*34],[x+14,hz-72-r*34],[x+w-24,hz-72-r*34],[x+w-5,hz-52-r*34]]);rect(g,dim('#5a3a2a'),x+16,hz-96-r*34,6,22);wins(8,hz-44-r*34)}
  else if(zz==4){}
  else if(zz==5){if(md(i,3)==0){rect(g,dim('#9ab4c4'),x+10,hz-110-r*50,40,120+r*50);rect(g,'rgba(255,255,255,.14)',x+10,hz-110-r*50,5,120+r*50)}else{rect(g,dim(['#9a4a38','#a8553a','#8a4a38'][md(i,3)]),x,hz-50-r*28,w-8,60+r*28);wins(8,hz-42-r*28)}}
  else if(zz==6){if(md(i,3)==1){rect(g,dim('#9ab4c4'),x+6,hz-96-r*44,44,106+r*44);rect(g,'rgba(255,255,255,.14)',x+6,hz-96-r*44,5,106+r*44);wins(8,hz-84-r*44)}else{rect(g,dim(['#c8b890','#d4c8a4','#9a4a38'][md(i,3)]),x,hz-56-r*30,w-8,66+r*30);rect(g,dim('#b8b09a'),x-3,hz-60-r*30,w-2,5);wins(8,hz-48-r*30)}}
  else if(zz==7){if(hr(i*3)>.5){el(g,dim(['#a89a38','#6a8a3a','#b89a34'][md(i,3)]),x+50,hz-34-r*14,48,34+r*10)}else{rect(g,dim(['#c8bea0','#d4ccb0'][md(i,2)]),x,hz-46-r*24,w-10,56+r*24);for(let q=0;q<5;q++)rect(g,dim('#b8b09a'),x+q*20,hz-54-r*24,11,10);wins(8,hz-38-r*24)}}
  else if(zz==8){if(hr(i*3)>.45){el(g,dim(['#2a5a34','#a89a38','#33783c'][md(i,3)]),x+50,hz-36-r*14,52,36+r*10)}else{rect(g,dim(['#e8dfc4','#f0ece0','#d8d0b8'][md(i,3)]),x+4,hz-50-r*26,80,60+r*26);wins(8,hz-42-r*26)}}});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
/* ---- livello 3: la strada, zona per zona (la Tube ha pareti di piastrelle a tutta altezza) ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b+per)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a||wx>=b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(200,7,Z[0],Z[1],1,i=>140+hr(i*5)*50,190);
 each2(200,8,Z[1],Z[2],2,i=>130+hr(i*5)*50,190);
 each2(200,9,Z[2],Z[3],3,i=>130+hr(i*5)*40,190);
 each2(200,10,Z[3],Z[4],4,i=>130+hr(i*5)*40,200);
 each2(200,11,Z[4],Z[5],5,i=>130+hr(i*5)*40,190);
 each2(200,12,Z[5],Z[6],6,i=>140+hr(i*5)*60,190);
 each2(200,13,Z[6],Z[7],7,i=>130+hr(i*5)*40,190);
 each2(200,14,Z[7],Z[8],8,i=>130+hr(i*5)*50,190)}
/* ---- vita: piccioni, pappagalli verdi, gabbiani sul Tamigi, corvi alla Torre, pipistrelli di sera, la volpe di notte ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 const rng=(a,b,m)=>cl((xs-a)/m,0,1)*cl((b-xs)/m,0,1);
 /* piccioni a Trafalgar Square e a Covent Garden */
 const pg=rng(5700,7700,400);if(pg>.05)for(let i=0;i<5;i++){const bx=((i*117+t*(46+i*6))%600)-60,by=70+hr(i*3)*100+Math.sin(t*2+i*2)*14,w=Math.sin(t*10+i)*3.4;g.strokeStyle='rgba(120,126,136,.9)';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-7,by+w);g.lineTo(bx,by);g.lineTo(bx+7,by+w);g.stroke();dot(g,'rgba(120,126,136,.9)',bx,by+1,2)}
 /* parrocchetti verdi a Kensington Gardens */
 const pp=rng(0,2700,300);if(pp>.05)for(let i=0;i<5;i++){const bx=((i*107+t*(76+i*6))%600)-60,by=90+hr(i*3)*110+Math.sin(t*2.2+i)*14,w=Math.sin(t*14+i)*3;ln(g,'#3aa83a',2.8,[bx-7,by+w,bx,by,bx+7,by+w]);dot(g,'#3aa83a',bx+1,by+1,2.2);ln(g,'#2a8a2a',1.4,[bx-2,by+2,bx-12,by+8])}
 /* passeri ovunque, piccoli e veloci (di giorno) */
 if(xs<16000&&!(xs>7800&&xs<9800))for(let i=0;i<3;i++){const bx=((i*171+t*(80+i*9))%620)-70,by=100+hr(i*5+2)*120+Math.sin(t*3+i)*10,w=Math.sin(t*16+i)*2;g.strokeStyle='rgba(90,66,40,.85)';g.lineWidth=1.6;g.beginPath();g.moveTo(bx-4,by+w);g.lineTo(bx,by);g.lineTo(bx+4,by+w);g.stroke()}
 /* gabbiani sul Tamigi: da St Paul's a Greenwich */
 const gb=rng(9800,20000,500);if(gb>.05&&!(xs>7800&&xs<9800))for(let i=0;i<4;i++){const bx=((i*131+t*(40+i*5))%640)-80,by=110+hr(i*7)*80+Math.sin(t*1.6+i*2)*16,w=Math.sin(t*5+i)*5;g.strokeStyle='rgba(240,242,246,.95)';g.lineWidth=2;g.beginPath();g.moveTo(bx-10,by+w*.4);g.quadraticCurveTo(bx-4,by-4-w,bx,by);g.quadraticCurveTo(bx+4,by-4-w,bx+10,by+w*.4);g.stroke()}
 /* corvi in volo alla Torre */
 const cv=rng(14400,16400,300);if(cv>.05)for(let i=0;i<3;i++){const bx=((i*151+t*(52+i*7))%600)-60,by=80+hr(i*5)*90+Math.sin(t*2.4+i)*12,w=Math.sin(t*9+i)*4;g.strokeStyle='rgba(20,22,28,.95)';g.lineWidth=2.8;g.beginPath();g.moveTo(bx-8,by+w);g.lineTo(bx,by);g.lineTo(bx+8,by+w);g.stroke()}
 /* pipistrelli al crepuscolo e di notte */
 const nb=cl((xs-14800)/900,0,1);if(nb>.05)for(let i=0;i<4;i++){const bx=((i*143+t*(60+i*8))%560)-40,by=120+hr(i*9)*90+Math.sin(t*3+i)*20,w=Math.sin(t*20+i)*5;poly(g,'rgba(14,14,24,'+nb+')',[[bx,by],[bx-9,by-3+w],[bx-6,by+3],[bx,by+1],[bx+6,by+3],[bx+9,by-3+w]])}
 /* corridori nei parchi, passanti e cani */
 [[300,2500,50,0],[3600,4800,-30,2],[11000,13000,-30,1]].forEach((rg,ri)=>{for(let i=0;i<2;i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.25),wx=rg[0]+(((t*sp+i*span*.5)%span)+span)%span,sx=wx-cam;if(sx<-60||sx>540)continue;A.setDK(nf(wx));g.save();g.translate(sx,452-8*i);
  fig(g,0,0,t*3,{f:sp>0?1:-1,s:.7,ph:i,skin:tn('#e0b090'),top:tn(['#e8505a','#2a8a9a','#f2c82a'][(i+ri)%3]),bot:tn('#2a2a36'),hair:tn('#2a1a10')});g.restore()}})}
/* ---- terreno: ogni zona ha il suo suolo ---- */
const GS=[[0,2000,'#d6cfb4','k'],[2000,2600,'#c8a468','s'],[2600,3600,'#a8a49a','m'],[3600,4300,'#d6cfb4','k'],[4300,5600,'#a8a49a','a'],[5600,6500,'#b8b2a0','g'],[6500,7800,'#8c8070','c'],[7800,8450,'#b8b4a8','t'],[8450,9800,'#a8a49a','v'],[9800,10600,'#b8b2a0','q'],[10600,11000,'#8a8e94','p'],[11000,12400,'#8c8070','c'],[12400,13400,'#b8b2a0','q'],[13400,14400,'#a8a49a','a'],[14400,15600,'#c8c0a8','e'],[15600,16400,'#b8b2a0','q'],[16400,18000,'#8c8070','c'],[18000,W1+400,'#9a9078','h']];
function groundDraw(g,cam,t){const gt=GT;
 rect(g,'#e0d8c0',0,gt,480,3);
 GS.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const slabs=(bw0,add,al)=>{for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,15);rect(g,'rgba(0,0,0,.12)',px,yy,1.3,17)}rect(g,'rgba(0,0,0,.09)',x0,yy+15,x1-x0,1.4)}};
  const speck=(n,c1,c2,y0,sp)=>{for(let q=0;q<n;q++)rect(g,hr(q)>.5?c1:c2,x0+((q*47)%ww),gt+y0+hr(q+3)*sp,2+hr(q)*3,1.6)};
  const road=(c,line)=>{rect(g,c,x0,gt+84,x1-x0,44);rect(g,'#8a8a88',x0,gt+82,x1-x0,3);for(let q=0;q<40;q++)rect(g,'rgba(255,255,255,.07)',x0+((q*37-cam)%ww+ww)%ww,gt+90+hr(q)*34,6,2);if(line)for(let q=0;q<6;q++){const px=((q*150-cam)%900+900)%900-60;rect(g,'rgba(255,255,255,.7)',px,gt+105,60,3)}};
  if(z[3]=='k'){/* prato umido di rugiada e ghiaia battuta dei viali */
   rect(g,'#6aa850',x0,gt+3,x1-x0,26);for(let q=0;q<60;q++)rect(g,'rgba(40,100,40,.3)',x0+((q*29)%ww),gt+5+hr(q)*22,2,4);rect(g,'rgba(255,255,255,.22)',x0,gt+3,x1-x0,4);
   speck(120,'rgba(255,255,255,.3)','rgba(120,100,60,.22)',34,80);rect(g,'#b8b09a',x0,gt+120,x1-x0,3);for(let q=0;q<22;q++)dot(g,hr(q)>.4?'#d8a82e':'#b87a2a',x0+((q*41)%ww),gt+8+hr(q+2)*18,1.6);
   const sx=Math.max(x0,200-cam),ex=Math.min(x1,900-cam);if(z[0]==0&&ex>sx){rect(g,'#e8e2d0',sx,gt+30,ex-sx,60);for(let r=0;r<4;r++)rect(g,'rgba(0,0,0,.09)',sx,gt+30+r*15,ex-sx,1.4)}}
  if(z[3]=='s'){/* la pista di sabbia di Rotten Row e il viale accanto */
   rect(g,'#7aa844',x0,gt+3,x1-x0,16);rect(g,'#c8a468',x0,gt+19,x1-x0,52);for(let q=0;q<60;q++)rect(g,'rgba(120,80,30,.26)',x0+((q*37)%ww),gt+22+hr(q)*46,4,2);rect(g,'rgba(255,255,255,.2)',x0,gt+19,x1-x0,2);speck(80,'rgba(255,255,255,.3)','rgba(120,100,60,.22)',76,60);rect(g,'#b8b09a',x0,gt+76,x1-x0,3)}
  if(z[3]=='g'){slabs(70,12,.22);rect(g,'#b8b09a',x0,gt+120,x1-x0,3);rect(g,'rgba(0,0,0,.1)',x0,gt+84,x1-x0,2)}
  if(z[3]=='c'){slabs(26,5,.2);for(let q=0;q<90;q++)rect(g,'rgba(0,0,0,.09)',x0+((q*41-cam)%ww+ww)%ww,gt+8+hr(q)*130,5,3);rect(g,'#6a6054',x0,gt+98,x1-x0,2.4);rect(g,'#6a6054',x0,gt+114,x1-x0,2.4);rect(g,'rgba(255,255,255,.06)',x0,gt+3,x1-x0,16)}
  if(z[3]=='m'){/* il viale rosso che porta a Buckingham Palace: asfalto rosso, marciapiedi di granito */
   rect(g,'#b8b4a8',x0,gt+3,x1-x0,80);for(let r=0;r<5;r++)rect(g,'rgba(0,0,0,.1)',x0,gt+16+r*17,x1-x0,1.4);speck(60,'rgba(255,255,255,.2)','rgba(0,0,0,.1)',6,70);road('#a8483e',true)}
  if(z[3]=='a'){rect(g,'#b8b4a8',x0,gt+3,x1-x0,80);for(let r=0;r<5;r++)rect(g,'rgba(0,0,0,.1)',x0,gt+16+r*17,x1-x0,1.4);speck(60,'rgba(255,255,255,.2)','rgba(0,0,0,.1)',6,70);road('#4a4a54',true)}
  if(z[3]=='q'){/* lungofiume e marciapiedi di granito e pietra */
   slabs(60,10,.2);rect(g,'#8a8478',x0,gt+120,x1-x0,3);rect(g,'rgba(0,0,0,.1)',x0,gt+84,x1-x0,2)}
  if(z[3]=='p'){/* il ponte pedonale: assi di acciaio e metallo */
   rect(g,'#5a626c',x0,gt+3,x1-x0,150);for(let k=-1;k<Math.ceil(ww/18)+2;k++){const px=Math.floor((cam+x0)/18)*18+k*18-cam;rect(g,'rgba(0,0,0,.35)',px,gt+3,1.6,150);rect(g,'rgba(255,255,255,.07)',px+2,gt+3,6,150)}for(let r=0;r<6;r++)rect(g,'rgba(0,0,0,.25)',x0,gt+20+r*22,x1-x0,1.4)}
  if(z[3]=='e'){/* pietra e ciottoli dei cortili della Torre, il prato dei corvi */
   slabs(40,8,.16);rect(g,'#4a8a3a',x0,gt+3,x1-x0,20);for(let q=0;q<40;q++)rect(g,'rgba(40,100,40,.3)',x0+((q*29)%ww),gt+5+hr(q)*16,2,4);rect(g,'rgba(255,255,255,.1)',x0,gt+3,x1-x0,3)}
  if(z[3]=='h'){/* ghiaia dei sentieri del parco, prato scuro sulla collina */
   rect(g,'#5a7a42',x0,gt+3,x1-x0,24);for(let q=0;q<60;q++)rect(g,'rgba(30,80,30,.3)',x0+((q*29)%ww),gt+5+hr(q)*20,2,4);speck(140,'rgba(255,255,255,.26)','rgba(120,100,60,.22)',34,86);rect(g,'#a89c80',x0,gt+120,x1-x0,3)}
  if(z[3]=='t'){/* corridoio della Tube: pavimento di piastrelle grigie, bordo giallo ai tornelli */
   rect(g,'#9a9a98',x0,gt+3,x1-x0,150);for(let r=0;r<8;r++)rect(g,'rgba(0,0,0,.1)',x0,gt+12+r*17,x1-x0,1.4);for(let k=-1;k<Math.ceil(ww/34)+2;k++){const px=Math.floor((cam+x0)/34)*34+k*34-cam;rect(g,'rgba(0,0,0,.08)',px,gt+3,1.2,150)}rect(g,'rgba(255,238,190,.12)',x0,gt+3,x1-x0,30)}
  if(z[3]=='v'){/* la banchina: sul fondo i binari, poi il bordo giallo con i puntini in rilievo, poi il pavimento */
   rect(g,'#3a3a3e',x0,gt+3,x1-x0,32);for(let k=-1;k<Math.ceil(ww/16)+2;k++){const px=Math.floor((cam+x0)/16)*16+k*16-cam;rect(g,'#5a4a3a',px,gt+8,6,22)}rect(g,'#8a8e94',x0,gt+12,x1-x0,2.4);rect(g,'#8a8e94',x0,gt+26,x1-x0,2.4);
   rect(g,'#9a9a98',x0,gt+36,x1-x0,120);for(let r=0;r<7;r++)rect(g,'rgba(0,0,0,.09)',x0,gt+50+r*17,x1-x0,1.4);rect(g,'#e8c82a',x0,gt+36,x1-x0,5);for(let k=-1;k<Math.ceil(ww/6)+2;k++){const px=Math.floor((cam+x0)/6)*6+k*6-cam;rect(g,'rgba(60,60,40,.45)',px,gt+42,2,5)}}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1600,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const gd=cl((cam-12000)/700,0,1)*cl((14200-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
 const sg=cl((cam-14200)/700,0,1)*cl((16400-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};
/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));const c=Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)});['skin','top','bot','hair'].forEach(q=>{if(c[q])c[q]=tn(c[q])});fig(g,px,y,t,c)},d:{a:{t:d}}});
const npcs=[
 /* Jo: cuffia gialla, occhialini sulla fronte, accappatoio azzurro, borsa di tela, thermos fumante */
 NP('l2_jo',NAME.l2_jo,1990,GREET.l2_jo,{skin:'#e8b890',top:'#8ab8e0',bot:'#8ab8e0',hair:'#ffd82a',long:1,s:1.0},(g,b,t)=>{el(g,'#ffd82a',0,-109+b,11.5,6);rect(g,'#14110f',-8,-104+b,16,2.6);dot(g,'#9ab4c4',-4,-103+b,2);dot(g,'#9ab4c4',4,-103+b,2);dot(g,'#e0806a',6,-96+b,2.6);
  rect(g,'#f4f0e6',-11,-64,22,3);rect(g,'#c8402a',14,-68,16,18);ln(g,'#8a3a2a',1.6,[16,-68,6,-84]);rect(g,'#9a9ca2',-25,-64,6,14);rect(g,'#c8281e',-25,-67,6,3);
  for(let q=0;q<3;q++)el(g,'rgba(240,240,240,'+(.4*(1-((t*.5+q/3)%1)))+')',-22+Math.sin(t+q)*3,-72-((t*.5+q/3)%1)*20,3,2.4)}),
 /* Colin: coppola di tweed, giacca imbottita verde, sciarpa a quadri, occhiali, thermos */
 NP('l2_colin',NAME.l2_colin,4030,GREET.l2_colin,{skin:'#d8a078',top:'#3a4a3a',bot:'#3a3a46',hair:'#b8b8b8',s:1.04},(g,b,t)=>{el(g,'#6a5a44',0,-110+b,14,5);poly(g,'#6a5a44',[[2,-110+b],[16,-108+b],[14,-105+b],[2,-106+b]]);
  rect(g,'#a02a2a',-9,-92+b,18,6);for(let q=0;q<4;q++)rect(g,'#2a5a3a',-8+q*4.4,-92+b,2,6);dot(g,'rgba(40,40,50,.85)',-2,-99+b,3);dot(g,'rgba(40,40,50,.85)',6,-99+b,3);dot(g,'#d8a078',-2,-99+b,2);dot(g,'#d8a078',6,-99+b,2);
  for(let q=0;q<3;q++)rect(g,'rgba(0,0,0,.18)',-11,-76+q*10,22,1.4);rect(g,'#9a9ca2',16,-72,6,14);rect(g,'#c8281e',16,-75,6,3)}),
 /* Dickens: cilindro, soprabito scuro con gilet rosso, barba, bastone, taccuino */
 NP('l2_dickens',NAME.l2_dickens,7240,GREET.l2_dickens,{skin:'#e0b896',top:'#2a2630',bot:'#2a2630',hair:'#4a3a28',long:1,s:1.02},(g,b,t)=>{rect(g,'#14110f',-9,-132+b,18,22);rect(g,'#14110f',-14,-111+b,28,3);rect(g,'#8a2a3a',-9,-132+b,18,3);poly(g,'#5a4a3a',[[-6,-97+b],[7,-97+b],[5,-84+b],[0,-80+b],[-5,-84+b]]);
  rect(g,'#8a2a3a',-4,-86,8,28);ln(g,GD,1,[-4,-72,4,-70]);ln(g,'#3a2a1a',2.4,[20,-66,24,-4]);dot(g,GD,20,-67,2.4);rect(g,'#6a3a22',-24,-70,12,16);rect(g,'#e8dcc0',-23,-69,10,14)}),
 /* Ravi: divisa blu, giubbotto giallo catarifrangente, cartellino al collo, cuffie, scatola del pranzo */
 NP('l2_ravi',NAME.l2_ravi,9250,GREET.l2_ravi,{skin:'#c8946a',top:'#1c2a4a',bot:'#1c2a4a',hair:'#14110f',s:1.02},(g,b,t)=>{rect(g,'#c8e02a',-11,-86,5,38);rect(g,'#c8e02a',6,-86,5,38);rect(g,'rgba(255,255,255,.7)',-11,-70,22,2.4);ln(g,'#14110f',2.2,[-8,-92+b,0,-84+b,8,-92+b]);rect(g,'#f4f0e6',-4,-76,8,10);dot(g,'#d8281e',0,-71,2.4);
  rect(g,'#c8402a',16,-54,14,10);rect(g,'#f4f0e6',17,-52,12,2)}),
 /* Sally: cappellino di lana rosso, grembiule verde, lavagnetta dei prezzi, una mela */
 NP('l2_sally',NAME.l2_sally,12030,GREET.l2_sally,{skin:'#e0b090',top:'#6a2a3a',bot:'#2a2a36',hair:'#c8c8c8',s:1.0},(g,b,t)=>{el(g,'#c8402a',0,-110+b,12,7);dot(g,'#f4f0e6',0,-118+b,3.4);ln(g,'#e8c82a',1.6,[7,-106+b,9,-98+b]);rect(g,'#2a5a3a',-11,-78,22,38);rect(g,'rgba(255,255,255,.2)',-11,-78,3,38);
  rect(g,'#2a302c',-25,-72,14,18);for(let q=0;q<3;q++)rect(g,'rgba(255,255,255,.6)',-23,-69+q*5,10,1.2);dot(g,'#d8283a',19,-62,4.4);dot(g,'#2a7a3a',20,-67,1.2)}),
 /* Pepys: parrucca ricciuta, colletto bianco, cappello a tese larghe, taccuino sotto il braccio */
 NP('l2_pepys',NAME.l2_pepys,13510,GREET.l2_pepys,{skin:'#e0b896',top:'#2a2630',bot:'#2a2630',hair:'#4a2a18',long:1,s:1.02},(g,b,t)=>{el(g,'#4a2a18',-11,-92+b,9,19);el(g,'#4a2a18',11,-92+b,9,19);for(let q=0;q<4;q++){dot(g,'#5a3a22',-12,-104+q*9+b,4);dot(g,'#5a3a22',12,-104+q*9+b,4)}
  el(g,'#14110f',0,-116+b,20,4);rect(g,'#14110f',-10,-130+b,20,14);ln(g,'#e8e0d0',2,[8,-128+b,18,-136+b]);poly(g,'#f4f0e6',[[-9,-86+b],[9,-86+b],[4,-78+b],[-4,-78+b]]);rect(g,'#2a1810',-4,-96+b,8,1.4);rect(g,'#6a3a22',14,-70,12,16);rect(g,'#e8dcc0',15,-69,10,14)}),
 /* Graham: berretto Tudor nero, tunica blu con bordi rossi e la corona ricamata, alabarda */
 NP('l2_graham',NAME.l2_graham,15440,GREET.l2_graham,{skin:'#d8a078',top:'#1c2a5a',bot:'#1c2a5a',hair:'#8a8a8a',long:1,s:1.04},(g,b,t)=>{el(g,'#14110f',0,-111+b,16,5);rect(g,'#14110f',-9,-120+b,18,10);ln(g,'#c8281e',1.8,[-9,-112+b,-14,-102+b]);ln(g,'#c8281e',1.8,[9,-112+b,14,-102+b]);
  rect(g,'#c8281e',-11,-80,3.4,40);rect(g,'#c8281e',8,-80,3.4,40);rect(g,'#c8281e',-11,-52,22,3);poly(g,GD,[[-5,-70],[-5,-77],[-2.4,-73],[0,-79],[2.4,-73],[5,-77],[5,-70]]);rect(g,'#8a8a8a',-5,-96+b,10,2.2);
  ln(g,'#6a4a2a',2.4,[21,-124,21,-4]);poly(g,'#aab0b8',[[16,-124],[21,-142],[26,-124]]);dot(g,GD,-8,-60,1.4);dot(g,GD,-4,-58,1.4)}),
 /* Maureen: chignon grigio, occhiali sulla fronte, grembiule scuro, canovaccio sulla spalla, un boccale */
 NP('l2_maureen',NAME.l2_maureen,18480,GREET.l2_maureen,{skin:'#e0b090',top:'#8a3a3a',bot:'#2a2a36',hair:'#c8c8c8',s:1.0},(g,b,t)=>{dot(g,'#c8c8c8',-4,-117+b,6);dot(g,'#9a9a9a',-4,-117+b,2);dot(g,'rgba(40,40,50,.85)',-3,-106+b,3);dot(g,'rgba(40,40,50,.85)',5,-106+b,3);dot(g,'#e0b090',-3,-106+b,2);dot(g,'#e0b090',5,-106+b,2);
  rect(g,'#2a2630',-11,-76,22,36);for(let q=0;q<3;q++)rect(g,'rgba(255,255,255,.12)',-11,-70+q*10,22,1.4);rect(g,'#f4f0e6',-13,-90,6,22);dot(g,GD,-6,-92+b,2);rect(g,'#e8a82a',16,-62,7,11);rect(g,'#f4f0e6',16,-64,7,3)})
];
/* ---- oggetti lungo il percorso ---- */
const LX=[450,1100,1700,2330,3250,4450,5000,5420,6100,6700,7300,8100,8750,9350,10300,10950,11550,12150,12850,13450,14050,14900,15330,15980,16900,17650,18350,19100,19700];
const props=[
 /* zona 1 · Hyde Park e Kensington Gardens */
 ['l2targa',150,'KENSINGTON GARDENS'],['l2ippo',250,1],['l2albert',450],['l2lampione',800,1],['l2panca',860,1],['l2platano',960,1.2],['l2peter',1100],['l2cestino',1360],['l2cane',1420,'#8a3a2a'],['l2lampione',1470,1],['l2serpentine',1700],['l2salice',2060,1.1],['l2panca',2100,1],['l2rotten',2330],['l2platano',2560,1.2],
 /* zona 2 · The Mall, Buckingham Palace, St James's Park, Westminster */
 ['l2targa',2700,'THE MALL'],['l2vittoria',2900],['l2lampione',3050,0],['l2buck',3250],['l2guardia',3430],['l2lampione',3700,0],['l2taxi',3790],['l2baracchetta',3900],['l2fermata',4120],['l2targa',4180,"ST JAMES'S PARK"],['l2stjames',4450],['l2panca',4730,1],['l2cabina',4780],['l2posta',4830],['l2bigben',5000],['l2abbey',5420],
 /* zona 3 · Trafalgar Square e Covent Garden */
 ['l2targa',5700,'TRAFALGAR SQUARE'],['l2trafalgar',6100],['l2lampione',6400,0],['l2targa',6470,'COVENT GARDEN'],['l2covent',6700],['l2caldarroste',6960],['l2lampione',7020,0],['l2stpaulcg',7300],['l2cabina',7580],['l2lampione',7690,0],
 /* zona 4 · la Tube */
 ['l2ingresso',8100],['l2mappa',8470],['l2roundel',8600,'BAKER STREET'],['l2busker',8520],['l2baker',8750],['l2panca_t',8990],['l2roundel',9120,'EMBANKMENT'],['l2embank',9350],['l2mappa',9490],['l2panca_t',9440],['l2uscita',9570],
 /* zona 5 · St Paul's, South Bank e Borough Market */
 ['l2targa',9900,"ST PAUL'S"],['l2stpaul',10300],['l2lampione',10640,1],['l2millennium',10950],['l2lampione',11260,1],['l2globe',11550],['l2targa',11850,'BANKSIDE'],['l2banco',11960],['l2borough',12150],['l2lampione',12350,1],
 /* zona 6 · London Bridge e il Monumento */
 ['l2targa',12450,'LONDON BRIDGE'],['l2lbridge',12850],['l2lampione',13140,0],['l2monumento',13450],['l2allhallows',14050],['l2fermata',14330],
 /* zona 7 · Torre di Londra e Tower Bridge */
 ['l2targa',14500,'TOWER HILL'],['l2torre',14900],['l2lampione',15150,0],['l2corvi',15330],['l2lampione',15700,0],['l2tbridge',15980],['l2panca',16260,2],
 /* zona 8 · Greenwich */
 ['l2targa',16500,'GREENWICH'],['l2cutty',16900],['l2lampione',17250,1],['l2bancarella',17400],['l2naval',17650],['l2lampione',17960,1],['l2tavern',18350],['l2stufa',18640],['l2pontile',18760],['l2volpe',18950],['l2lampione',19000,1],['l2observ',19100],['l2lampione',19420,1],['l2raggio',19700]
];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'londra2',name:'Londra 2 · Dal Serpentine al Meridiano',width:W1,sky:['#9aa4c8','#f2c4c8','#ffe2d0'],gt:372,gr:['#d6cfb4','#a89c80'],chord:[174.6,220,261.6,349.2],amb:'#ffe6c0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da londra2.txt; Graham ne ha 11) --- */
(function(){
const TOPX_L2={
l2_jo:[
["Chi sei e che fai?","Jo, quarantasei anni, lavoro in un ufficio nella City e nuoto nel Serpentine da dieci anni. I soci del club possono entrare in acqua tutto l’anno, tra le cinque e le nove e mezza di mattina: io vengo prima del lavoro, e dopo sono una persona nuova. Poi, naturalmente, una cuppa, cioè una tazza di tè."],
["Non hai freddo?","Certo che ho freddo, mate: i primi trenta secondi fanno male, poi il corpo si abitua e ti senti invincibile per tutta la giornata. Il segreto è un accappatoio lungo, un thermos di tè e due chiacchiere con gli altri soci appena esci. Dopo, tutti ridiamo senza motivo: dev’essere il freddo."],
["Com’è nato questo lago?","Lo fece creare la regina Carolina nel 1730, sbarrando un piccolo fiume, il Westbourne. Si chiama Serpentine anche se di curve ne ha una sola: i londinesi non sono pignoli, quando si tratta di nomi. D’estate il Lido è aperto a tutti, d’inverno solo ai soci."],
["Cos’è la gara di Natale?","Ogni 25 dicembre, alle nove, i soci fanno una gara di cento iarde per la Peter Pan Cup: la tradizione è del 1864. Per partecipare bisogna aver gareggiato in sette delle nove gare invernali, e io il sabato mattina sono troppo pigra! Il pubblico guarda in cappotto e cappello da Babbo Natale, e fa un tifo da stadio."],
["E questa statua di Peter Pan?","È il bronzo con le fate, i topi e gli scoiattoli, laggiù sul prato. Una mattina del 1912 comparve all’improvviso: l’autore, Barrie, l’aveva fatta mettere di notte, perché i bambini credessero che l’avessero portata le fate. Mi piace da matti: è il mio modo di dire \"buongiorno\" al parco."],
["Chi sono questi pappagalli verdi?","Parrocchetti dal collare: a Kensington Gardens ce ne sono a stormi, e strillano come una scolaresca in gita. Come siano arrivati a Londra nessuno lo sa con certezza: si dice che due siano scappati da una gabbia tanti anni fa, ma sono solo storie. Ormai sono londinesi quanto me: sempre in giro, sempre rumorosi."],
["Cosa si fa nel parco la domenica?","Si corre, si va in barca sul lago, si passeggia con il cane; i cavalli galoppano sulla Rotten Row, la pista di sabbia. In un angolo, vicino a Marble Arch, c’è lo Speakers’ Corner: chiunque sale su una cassetta e dice la sua, fra applausi, battute e fischi. Il nome Rotten Row, si dice, viene dal francese \"route du roi\", ma nessuno lo sa di preciso."],
["Di che parlano i londinesi?","Del tempo! È l’argomento numero uno, anche con gli sconosciuti: \"Nippy, isn’t it?\" è un saluto vero e proprio. A Londra puoi trovare quattro stagioni in un giorno, e per questo in borsa c’è sempre un ombrellino. Se piove a dirotto si dice \"lovely weather for ducks\", un tempo meraviglioso per le anatre."],
["Come si saluta?","Con un \"alright?\" o con un \"how are you?\", che non è una vera domanda: la risposta giusta è \"fine, thanks, you?\". Poi si dice \"cheers\" o \"ta\" per ringraziare, e \"sorry\" per tutto, anche quando sei tu quello pestato su un piede. È un modo gentile di non disturbare."],
["Che cosa si mangia a colazione?","Il full English: uova, salsicce, bacon, fagioli in salsa di pomodoro, pomodoro grigliato, funghi e pane tostato. Con un tè forte con il latte, il \"builder’s tea\", color mattone. Dopo il tuffo ne mangerei due, ma di solito mi basta un toast con la marmellata."],
["Come ci si muove in città?","A piedi, in Tube e in autobus: i bus rossi a due piani, con il posto migliore in cima, in prima fila, come un capitano su una nave. Si cammina veloci, a testa bassa, e se ti fermi in mezzo al marciapiede qualcuno ti scansa con un \"sorry\" che sembra tutto fuorché un \"sorry\". Ma lo facciamo con affetto."],
["Posso salutarti e proseguire la mia passeggiata?","Vai pure, mate, e non farti prendere dal freddo: stringiti nella sciarpa e cammina verso il Big Ben. Quando attraversi, guarda prima a destra e poi a sinistra: qui si guida a sinistra! Cheers, ta-ra!"]
],
l2_colin:[
["Chi sei e che fai?","Colin, cinquantotto anni, tassista nero da trent’anni. Lavoro dalle sei di mattina a metà pomeriggio, e ogni passeggero mi racconta un pezzetto della sua vita: sono più bravo di uno psicologo e costo meno. Il bello è che la sera, a casa, nessuno mi chiede dove sto andando."],
["Cos’è la Knowledge?","L’esame che devi superare per guidare un taxi nero: bisogna imparare a memoria circa venticinquemila strade nel raggio di sei miglia da Charing Cross e migliaia di luoghi da raggiungere. Dura da due a quattro anni, ed esiste dal 1865. Chi la studia gira in scooter con una cartellina sul manubrio: li chiamano \"Knowledge boys\", anche se ci sono tante ragazze."],
["Che effetto fa sul cervello?","Pare che il mio ippocampo, la parte che ricorda i luoghi, sia più grosso del tuo, mate! Gli scienziati hanno misurato i cervelli dei tassisti, ed è cresciuto con lo studio. In compenso io non ricordo mai dove ho messo le chiavi di casa."],
["Come si ferma un taxi?","Quando la luce gialla con la scritta \"TAXI\" sul tetto è accesa, il taxi è libero: alzi il braccio e io mi fermo. Mi dici dove vai dal finestrino, sali dietro e il resto lo faccio io. Il mio taxi ha un raggio di sterzata strettissimo e un sacco di spazio per le valigie."],
["Cosa sono quelle casette verdi?","Le baracchette dei tassisti: ne sono rimaste tredici, in giro per Londra. Furono create nel 1875 perché i vetturini potessero mangiare e bere un tè al caldo, invece di finire al pub. Dentro entrano solo i tassisti con la licenza, ma dalla finestrella vendono un panino al bacon a chiunque!"],
["Cos’è questo viale rosso?","Il Mall, il viale che porta a Buckingham Palace: l’asfalto è rosso, e fa un bel colpo d’occhio. Quando passa un corteo si blocca tutto e noi ci prendiamo un tè. I soldati davanti al Palazzo sono soldati veri, non comparse: se li provochi per una foto non ti sorridono!"],
["Che cos’è il Big Ben?","La campana, non la torre! La torre si chiama Elizabeth Tower, e la campana pesa quasi quattordici tonnellate. L’orologio è così preciso che i tecnici lo regolano mettendo vecchi penny sul pendolo: una monetina in più e rallenta, una in meno e corre."],
["Cosa succede ai primi di novembre?","Arriva la Bonfire Night, il 5 novembre: falò e fuochi d’artificio nei parchi, per ricordare il complotto di Guy Fawkes del 1605. Si mangiano mele caramellate e dolci di toffee. Mio nipote si mette il cappello di lana e urla \"wow\" a ogni botto; i cani, invece, si nascondono sotto il letto."],
["Cos’è lo slang cockney?","Il rhyming slang: invece di \"scale\" si dice \"apples and pears\", invece di \"telefono\" \"dog and bone\", invece di \"piedi\" \"plates of meat\". E \"have a butcher’s\" vuol dire \"dai un’occhiata\". Si dice che sia cockney chi è nato abbastanza vicino da sentire le campane di Bow."],
["Si lascia la mancia?","Al taxi si arrotonda: se il conto è di diciassette sterline e quaranta, dai venti e dici \"keep the change\", tieni il resto. Al pub nessuno aspetta la mancia al banco: al massimo offri da bere al barista con \"and one for yourself\". Nei ristoranti si guarda sul conto se il servizio è già incluso."],
["Cosa non devo fare a Londra?","Non saltare mai la fila! La coda è sacra: puoi tagliare la strada a un’auto, ma non devi superare un londinese in fila alla fermata. E \"sorry\" si dice sempre, anche quando hai ragione, e qualche volta soprattutto allora."],
["Posso salutarti e proseguire la mia passeggiata?","Vai pure, mate! Se ti serve un passaggio, cerca la luce gialla e dì \"Colin ti manda\". E ricordati: guarda a destra prima di attraversare, i bus rossi non frenano per i turisti pensierosi. Cheers, ta-ra!"]
],
l2_dickens:[
["Chi sei e dove sei nato?","Charles Dickens, nato il 7 febbraio 1812 a Portsmouth, ma è Londra la città che mi ha fatto scrittore. Ci arrivai bambino e non l’ho più lasciata. Sono quello di \"Oliver Twist\", di \"David Copperfield\" e di \"Canto di Natale\"."],
["Com’è stata la tua infanzia?","A dodici anni, nel 1824, mio padre finì nella prigione per debiti del Marshalsea, e io dovetti lasciare la scuola. Lavorai in una fabbrica di lucido da scarpe vicino a Hungerford Stairs, qui a due passi: dieci ore al giorno a incollare etichette per sei scellini alla settimana. Fu poco tempo, ma mi segnò per tutta la vita."],
["Come cominciasti a scrivere?","A quindici anni facevo il garzone in uno studio legale e la sera studiavo stenografia; poi diventai cronista. I miei primi bozzetti uscirono nel 1836 con il nome \"Boz\", e poi arrivò \"Il circolo Pickwick\", a puntate: fu un successo. Il pubblico comprava ogni numero con impazienza."],
["Perché i tuoi romanzi uscivano a puntate?","Per far crescere l’attesa. Ogni settimana o ogni mese un capitolo: la gente si affollava davanti agli uffici della mia rivista, in Wellington Street, a due passi da qui, per leggere il seguito. Poi un romanzo intero diventava un libro, e io ricominciavo da capo."],
["Dove abitavi?","Per un paio d’anni, dal 1837 al 1839, in una casa al numero 48 di Doughty Street, a Bloomsbury. Lì scrissi \"Oliver Twist\" e \"Nicholas Nickleby\", e oggi, mi dicono, è un museo: immagina, una casa con il mio nome sul campanello!"],
["Com’era Londra ai tuoi tempi?","Fumosa, rumorosa, piena di carrozze, di nebbia e di mercati. C’erano quartieri poverissimi accanto a quelli ricchi, e io li camminavo tutti, di giorno e di notte, per raccogliere storie. Intanto ferrovie e stazioni nascevano ovunque, e la città cresceva a vista d’occhio."],
["Cos’è questa piazza?","Covent Garden, il cuore dei teatri: ricordo i carretti di frutta e di verdura all’alba e le grida dei mercanti. Mi dicono che il mercato se n’è andato nel 1974, ma gli artisti sono rimasti. Da ragazzo sognavo di fare l’attore; poi ho recitato lo stesso, con le mie letture pubbliche."],
["Cos’è \"Canto di Natale\"?","Una storia scritta in poche settimane, che uscì nel dicembre del 1843: l’avaro Scrooge e i tre spiriti. Ancora oggi, a Natale, la si legge, la si recita e la si adatta in tutto il mondo. Capital!"],
["Dove ti piaceva mangiare e bere?","Alla Trafalgar Tavern, a Greenwich, con gli amici e con il mio illustratore George Cruikshank, per le cene di whitebait, minuscoli pesci del Tamigi fritti. Mi dicono che ci ho ambientato perfino il pranzo di nozze di \"Il nostro comune amico\". E al George Inn, a Southwark, che nomino in \"La piccola Dorrit\"."],
["Come ti sembra Londra di oggi?","Una meraviglia: la metropolitana che corre sotto i piedi, cabine rosse per parlare con gli amici lontani, torri di vetro, gente che cammina con la testa china sulla scatoletta. Potrei scriverci tre romanzi. Una cosa però è rimasta uguale: tutti hanno bisogno di una buona storia."],
["Com’è finita la tua vita?","Morii a cinquantotto anni, nel giugno del 1870, dopo una vita di lavoro e di letture in giro per il paese. Riposo nell’Abbazia di Westminster, nell’Angolo dei Poeti, accanto a molti dei miei maestri. Non parliamo di cose tristi, my dear fellow: mi dicono che la gente mi legge ancora, e questo mi rallegra."],
["Posso salutarti e proseguire la mia passeggiata?","Va’ pure, Pierpaolo, e non perderti: qui vicino c’è l’ingresso della metropolitana, il mondo di sotto. Io resto a fare due passi e a raccogliere una storia o due. Capital, che bella giornata! Bless my soul!"]
],
l2_ravi:[
["Chi sei e che fai?","Ravi, quarantun anni, macchinista della Tube da quindici. Guido un convoglio con centinaia di persone dietro, ma dalla cabina sento solo il motore e la radio: è una vita bella e silenziosa. Ogni tanto saluto un collega che passa dall’altra parte, con un cenno veloce."],
["Quante linee ha la Tube?","Undici linee e 272 stazioni, per circa quattrocento chilometri di binari. Sorpresa: più della metà della rete corre all’aperto, in superficie, non sotto terra. Il nome \"Tube\" viene dal tubo dei tunnel, che in certi tratti è proprio stretto."],
["Quando è nata?","Nel gennaio del 1863, fra Paddington e Farringdon: la prima metropolitana del mondo, con treni a vapore e carrozze di legno illuminate a gas. Per fortuna sui miei treni oggi non c’è fumo! Ma la prima linea esiste ancora, dentro la rete di oggi."],
["Perché la mappa è così strana?","Perché non è una mappa geografica, ma un diagramma: la disegnò nel 1931 Harry Beck, un disegnatore tecnico, e la propose in modo non ufficiale, a poche ghinee. Capì che ai passeggeri non importa la distanza, ma dove cambiare linea. I londinesi dicono: è bellissima, ma a volte a piedi si fa prima."],
["Come ci si comporta in Tube?","Sulle scale mobili si sta fermi a destra e si cammina a sinistra; si lascia scendere prima di salire; si cede il posto a chi ne ha più bisogno. Nessuno guarda negli occhi nessuno, e lo zaino si toglie e si tiene fra i piedi. Se parli, parli piano: è una regola non scritta."],
["Cos’è il \"Mind the gap\"?","L’annuncio che avverte del vuoto fra treno e banchina. A Embankment, sulla banchina nord della Northern line, c’è ancora la voce originale, quella dell’attore Oswald Laurence. Quando fu sostituita, la vedova, che veniva qui ad ascoltarla, scrisse alla metropolitana, e nel 2013 l’hanno rimessa. Mi commuovo ogni volta."],
["Come si paga?","Con la Oyster, la tessera azzurra, o con la carta contactless o il telefono: appoggi sul lettore giallo del tornello e passi. Il prezzo dipende dalle zone e dall’ora, e c’è un tetto giornaliero per non spendere troppo. Nessuno compra più il biglietto di carta: lo vedrai solo nei musei."],
["Cos’è la Night Tube?","Il venerdì e il sabato notte alcune linee (Central, Jubilee, Northern, Piccadilly e Victoria) restano aperte tutta la notte. Chi esce da un locale, da un concerto o da un turno di lavoro torna a casa senza aspettare il bus. Ogni tanto faccio anch’io un turno di notte: passeggeri assonnati e un sacco di chiacchiere."],
["Cosa ti è capitato di strano?","Una volta una signora è salita con un cactus grande come un bambino, e lo teneva per mano. Un’altra con un cane in una borsa da ginnastica, un musicista con un contrabbasso, un signore con un pesce rosso in un sacchetto. Londra porta in Tube di tutto, e nessuno si volta."],
["Qual è la tua stazione preferita?","Baker Street: sui muri ci sono le sagome di Sherlock Holmes su tante piastrelle, e dieci binari, più di ogni altra stazione della rete. Mi piace perché anche chi ha fretta, lì, alza un attimo gli occhi per cercarle. Sono nascoste in ogni angolo, come i segreti di un detective."],
["Cosa fai dopo il turno?","Torno a casa, a Wembley, e il fine settimana vado dalla famiglia di mia sorella per un curry e per il pranzo della domenica, il Sunday roast: arrosto, patate al forno e Yorkshire pudding. A volte il pub con i colleghi, a bere una pinta e a parlare di... treni, naturalmente. Sorted."],
["Posso salutarti e proseguire la mia passeggiata?","Alright, Pierpaolo! Quando senti il segnale, le porte si chiudono: non provare a infilarti, che ti lasciano fuori con le borse! Mind the gap, e buon viaggio. Ta-ra!"]
],
l2_sally:[
["Chi sei e che fai?","Sally, cinquantadue anni, vendo frutta e verdura da trent’anni. Mi alzo alle quattro, apro il banco, sistemo le cassette: mele, pere, funghi e verdure che arrivano dalla campagna fuori Londra. Il lunedì il mercato è chiuso, e quel giorno dormo come un sasso."],
["Da quanto tempo esiste il mercato?","Si dice che sia qui da circa mille anni, vicino al ponte: nessuno sa quando sia nato di preciso. Sul posto di oggi sta dal 1756, e le mie tettoie di ferro verde sono dell’Ottocento. Ogni volta che alzo la saracinesca mi sento una piccola parte di una lunga storia."],
["Cosa si vende?","Di tutto: formaggi dalla Francia e dal Somerset, pane a lievito madre, olive, salumi, funghi, spezie, torte e cibo di strada da mezzo mondo. Puoi pranzare passeggiando con venti assaggi, e nessuno ti dice niente. Il trucco è assaggiare e poi comprare davvero qualcosa, naturalmente."],
["Cosa mangiano i londinesi?","Fish and chips, col sale e l’aceto di malto, e i \"mushy peas\", piselli schiacciati. Poi il \"pie and mash\", torta di carne e purè con una salsa verde di prezzemolo che chiamano \"liquor\", e le anguille in gelatina dell’East End: io non le consiglio, ma sono una tradizione. La domenica c’è il Sunday roast, con l’arrosto e il Yorkshire pudding."],
["E il tè?","Forte, con il latte, magari con lo zucchero: una cuppa risolve metà dei problemi, e un biscotto l’altra metà. Il pomeriggio c’è l’afternoon tea, con tramezzini, scones, marmellata e panna: e qui si litiga se mettere prima la marmellata o prima la panna! Io, per non sbagliare, ne mangio due."],
["Come ti rivolgi ai clienti?","Love, darlin’, mate, sweetheart: parole affettuose per tutti, dal banchiere al turista. Non è mancanza di rispetto, è affetto. E si dice sempre \"ta\", \"cheers\" o \"thanks a lot\", e \"sorry\" anche quando ci pestano un piede."],
["Cos’è questo teatro rotondo laggiù?","Il Globe, il teatro di Shakespeare: quello vero bruciò nel 1613, quando un colpo di cannone di scena incendiò il tetto di paglia. Oggi ne hanno costruito uno quasi uguale, e in platea si sta in piedi, anche se piove: i \"groundlings\", la gente del cortile, si bagnano e ridono. A teatro, a Londra, si va anche col mal tempo."],
["Cos’è il ponte ballerino?","Il Millennium Bridge, il ponte pedonale fra St Paul’s e il Tate Modern: aprì nel 2000 e fu chiuso dopo due giorni perché oscillava come una barca. I londinesi lo chiamarono \"Wobbly Bridge\". Ora è fermo come un sasso, io ci passo ogni mattina e lo saluto."],
["Si può salire sulla cupola di St Paul’s?","Sì, ci sono 528 gradini fino in cima, senza ascensore: io ci sono salita una volta e ci ho messo mezz’ora, con tre pause per il fiatone. A 257 gradini c’è la Galleria dei Sussurri: se sussurri a un lato, ti sentono dall’altra parte. Dalla cima si vede tutta Londra, fino al fiume e oltre."],
["Cosa si mangia a pranzo in ufficio?","Il \"meal deal\": un panino, una bibita e un sacchetto di patatine a prezzo fisso, da mangiare alla scrivania o su una panchina. Chi ha più tempo va al pub o a un mercato come il mio. E il venerdì, per chi lavora in città, c’è il \"pint after work\", la pinta dopo il lavoro."],
["Cosa si fa il giorno dopo Natale?","È il Boxing Day, il 26 dicembre: negozi in saldo, partite di calcio e panini con gli avanzi del tacchino. Si dorme tardi, si cammina nel parco per smaltire il pudding e si manda un messaggio a quelli che ti hanno fatto un regalo orribile. Io lo apro il banco comunque, si sa mai."],
["Posso salutarti e proseguire la mia passeggiata?","Vai pure, darlin’! Ma prima prendi una mela per la strada: ti serve, la City è lunga. E se vedi un tipo con un cappello strano e un taccuino, saluta da parte mia. Cheers, ta-ra!"]
],
l2_pepys:[
["Chi sei e dove sei nato?","Samuel Pepys, nato a Londra il 23 febbraio 1633, in Salisbury Court, qui vicino a Fleet Street. Figlio di un sarto, ma con un po’ di studi e un cugino ben piazzato sono arrivato alla Marina Reale. Il cognome si dice \"Piips\", my friend, non \"Pepis\"!"],
["Perché sei famoso?","Per il mio diario: lo scrissi dal 1° gennaio 1660 al 31 maggio 1669, in una stenografia mia che quasi nessuno capiva. Ci ho messo di tutto: il lavoro, il teatro, la cena, le liti con mia moglie. Fu stampato solo nel 1825, più di un secolo dopo la mia morte: che pazienza, i miei posteri!"],
["Perché hai smesso di scrivere?","Per gli occhi: a scrivere con poca luce temevo di perdere la vista, e nel maggio del 1669 chiusi il diario. Per fortuna non diventai cieco, e continuai a dettare lettere a un segretario. I miei libri, poi, li ho lasciati al Magdalene College, a Cambridge, con l’obbligo di tenerli come stanno."],
["Cos’è questo Monumento?","Una colonna alta quanto la distanza che la separa dal forno del fornaio Farriner, in Pudding Lane: 202 piedi, circa 61 metri. La progettarono il mio amico Christopher Wren e Robert Hooke, e la finirono nel 1677. Mi fa uno strano effetto: è il ricordo della cosa peggiore che io abbia mai visto."],
["Come cominciò il Grande Incendio?","Nella notte tra sabato e domenica, il 2 settembre 1666, nel forno di Thomas Farriner, il fornaio del re. Le case erano di legno e così vicine che quasi si toccavano; un vento forte portò le fiamme da una via all’altra. Il fuoco durò quattro giorni."],
["Tu dov’eri?","Mi svegliò una domestica prima dell’alba, perché da casa mia, in Seething Lane, si vedeva il bagliore. Poi salii sulla torre della chiesa di All Hallows by the Tower e guardai la città che bruciava: una vista che non dimenticherò. Fu una pena, ma io sono un uomo che guarda e annota."],
["E il tuo famoso formaggio?","Il parmigiano, sì! Valeva molto, e con un collega della Marina, sir William Penn, scavammo una buca nel giardino per nascondere il vino e il formaggio. Non si sa che fine abbiano fatto: forse sono ancora sotto Seething Lane. Questo, my friend, è un mistero londinese."],
["Come si salvò Londra?","Si abbatterono delle case per fare dei vuoti e fermare le fiamme, e il vento calò. Si salvarono la Torre, con la sua polvere da sparo, e anche casa mia. Dopo, circa tredicimila case e ottantasette chiese erano cenere, compresa la vecchia St Paul’s: fu Wren a costruire quella nuova."],
["Cosa si beveva ai tuoi tempi?","Il caffè, in gran quantità: ne ho bevuto litri nelle caffetterie, dove si parlava di affari e di novità per un penny a tazza. E il 25 settembre 1660 assaggiai per la prima volta una tazza di \"tee\", una bevanda cinese: lo annotai, naturalmente. Oggi mi dicono che voi londinesi ne bevete un oceano."],
["Cosa facevi nel tempo libero?","Andavo a teatro, ascoltavo musica, mangiavo e bevevo bene. Il 9 maggio 1662, sotto il portico di St Paul’s a Covent Garden, vidi uno spettacolo di burattini italiani, molto grazioso: forse l’antenato di Punch. A fine giornata chiudevo il diario con la mia solita frase: \"e così a letto\"."],
["Come ti sembra Londra oggi?","Mi manca il fiume pieno di barche a vela, ma mi stupisce tutto il resto: carrozze senza cavalli, gente che parla con una scatoletta in mano, torri di vetro più alte di ogni campanile. E la cupola di St Paul’s, che io morii senza vederla finita, è sempre lì: Lord, che gioia!"],
["Posso salutarti e proseguire la mia passeggiata?","Certo, my friend, va’ pure. Vai verso la Torre: da qui, a quest’ora, il tramonto sul fiume è una meraviglia. Io scrivo due righe e poi, come sempre, \"e così a letto\"."]
],
l2_graham:[
["Chi sei e che fai?","Graham, cinquantotto anni, Yeoman Warder da otto. Prima ho servito ventidue anni nell’esercito, come richiedono le regole. Faccio la guida, sorveglio la Torre, partecipo alle cerimonie, e vivo qui con la mia famiglia, dentro le mura, con la vista sul fiume: un affitto speciale."],
["Perché \"Beefeater\"?","Non si sa con certezza: si dice che un tempo i guardiani ricevessero porzioni di manzo come parte della paga, e così \"mangiatori di manzo\". I miei colleghi scherzano che i veri beefeater sono i corvi: mangiano manzo crudo ogni giorno. Io mi accontento di una bistecca la domenica."],
["Quanti siete?","Una trentina, tra uomini e donne, e uno di noi è il Ravenmaster, che si occupa solo dei corvi. Viviamo qui con le famiglie, in tutto circa centocinquanta persone, compreso un medico e un cappellano. È un piccolo villaggio dentro la città."],
["E i corvi?","Ce ne sono sempre almeno sei: si dice che se i corvi lasciassero la Torre, cadrebbero la Torre e il regno. Per questo li trattiamo da re, e mangiano manzo crudo ogni giorno. Hanno nomi e caratteri: alcuni mi rubano il panino con un’eleganza che non ti dico."],
["Cos’è la Torre?","Un castello, ma anche palazzo, prigione, zecca, deposito di armi e, un tempo, zoo reale. Il nucleo è la Torre Bianca, che Guglielmo il Conquistatore cominciò nel 1078. Il nome \"bianca\" viene dal colore della pietra e da una mano di calce che si diede alle sue pareti."],
["I Gioielli della Corona?","Sono in un edificio blindato: corone, scettri, spade e calici d’oro usati nelle cerimonie. La gente fa la fila per vederli, e noi li custodiamo con una tecnologia che non ti racconto. Non si fotografano, e se lo fai ti rimproveriamo con garbo."],
["Cos’è la Cerimonia delle Chiavi?","Ogni sera alle 21.53 il capo dei Yeoman Warders esce con una lanterna e le chiavi, e chiude i cancelli della Torre, con una scorta di soldati e un breve scambio di battute con la sentinella. Va avanti da più di settecento anni, senza saltare un giorno. È gratis, ma si prenota in anticipo."],
["Cos’è \"The Keys\"?","Un pub segreto dentro la Torre, riservato a noi Yeoman Warders e ai nostri ospiti. Si chiama \"The Keys\", le chiavi, e dopo la Cerimonia ci si va a bere una birra e a raccontarsi la giornata. Per entrare bisogna essere invitati: neppure i corvi hanno il permesso."],
["Cosa si vede da qui al tramonto?","Il Tower Bridge qui accanto, con le sue torri azzurre e bianche, e il fiume che diventa oro. Il ponte si alza circa un paio di volte al giorno per far passare le navi alte: ho imparato a riconoscere il segnale di avviso. Quando le ali si sollevano, tutti si fermano a guardare."],
["Cosa mangi dopo il lavoro?","Una bella \"pie\", una torta di carne, e una pinta di bitter, la birra scura: le stesse cose che mangiano i Yeoman Warders da sempre. La domenica mia moglie prepara un Sunday roast che tiene in riga un reggimento. E dopo, un tè, perché senza tè non si digerisce."],
["Posso salutarti e proseguire la mia passeggiata?","Dismissed, young man! Vai pure, Pierpaolo: dal Tower Bridge il Tamigi, al tramonto, diventa tutto d’oro. La strada è ancora lunga: Greenwich ti aspetta, e anche l’ora esatta del mondo. Good night!"]
],
l2_maureen:[
["Chi sei e che fai?","Maureen, sessantun anni, nata e cresciuta a Greenwich. Faccio la padrona di pub da trent’anni: servo da bere, ascolto storie e, a fine serata, mando tutti a casa con un \"drink up, please!\". Metà dei clienti sono turisti e metà sono parenti."],
["Cos’è la Trafalgar Tavern?","Un pub affacciato sul Tamigi che esiste dal 1837: dai finestroni vedi il fiume e le barche. Si dice che Dickens ci venisse spesso e che abbia ambientato qui un pranzo di nozze di un suo romanzo. Nell’Ottocento si mangiavano i whitebait, pesciolini fritti: li ho ancora sul menù, assaggiali con il limone."],
["Come si ordina in un pub?","Al banco, non al tavolo: vai tu al bar, ordini, paghi e porti. Niente mancia per le bevande: si arrotonda, o si dice \"and one for yourself\" per offrire un drink al barista. Per il cibo ti danno il numero del tavolo e ti portano il piatto."],
["Cos’è un \"round\"?","Il giro: a turno, ognuno paga da bere a tutto il gruppo. Se sei in compagnia e non paghi il tuo giro, sei nei guai: è un patto sociale. Non importa quanto spendi, l’importante è che tocchi a ognuno."],
["Quanto è grande una pinta?","Cinquecentosessantotto millilitri, per la precisione: la pinta imperiale. La metà si chiama \"a half\". Se ordini senza dire niente, ti portano una pinta, e non c’è modo di scappare."],
["Cos’è il \"last orders\"?","Quando il locale sta per chiudere suona la campanella e io grido \"last orders!\", l’ultimo giro. Poi, \"time, please!\", e hai dieci-venti minuti per finire il bicchiere. È un rito, e io lo faccio con un sorriso: dopo, tutti a casa, che fuori fa freddo."],
["Cosa si mangia al pub?","Fish and chips, \"bangers and mash\", cioè salsicce con purè e cipolle, la pie, la torta di carne, e la domenica il Sunday roast: arrosto con patate, carote, Yorkshire pudding e \"gravy\", la salsa di carne. Sono piatti semplici, ma mettono il buonumore. E, naturalmente, una cuppa."],
["Cosa si fa di sera in un pub?","Si chiacchiera, si gioca a freccette, e il giovedì c’è il pub quiz: squadre, penne e domande impossibili; il premio, spesso, è una cassetta di patatine. A Natale ci sono i \"crackers\", tubi di carta che fanno \"pop\", con dentro una coroncina di carta che si indossa a tavola. Si ride molto, e si perde sempre."],
["Cos’è questa nave qui vicino?","La Cutty Sark, un clipper costruito nel 1869 per portare il tè dalla Cina, fra i velieri più veloci del suo tempo. Oggi è sollevata da terra e ci puoi camminare sotto: sembra navigare nel vetro. Lì accanto c’è l’ingresso del tunnel pedonale, 370 metri sotto il fiume, aperto giorno e notte: io lo uso per andare a trovare mia sorella dall’altra parte."],
["Cos’è il meridiano di Greenwich?","La linea da cui comincia l’ora del mondo: lo zero dei fusi orari, scelto nel 1884 da una conferenza internazionale. Sulla collina c’è una striscia di metallo: metti un piede di qua e uno di là e sei in due emisferi. Quando fa buio, un raggio verde parte dal tetto e passa sopra Londra, fino alle undici di sera."],
["Come si fa Natale a Greenwich?","Tacchino, patate arrosto, i cavoletti di Bruxelles che nessuno vuole ma tutti mettono nel piatto, e poi il Christmas pudding, con un po’ di brandy fiammeggiante. Si mettono i cappelli di carta e si fa il brindisi. Il pomeriggio, una passeggiata nel parco, perché dopo tutto quel cibo, altrimenti, non ti alzi più."],
["Posso salutarti e proseguire la mia passeggiata?","Va’, Pierpaolo, e guarda in alto: il raggio verde ti segna la strada, sopra il colle. Spero di averti riempito di fish and chips e di chiacchiere! Cheers, love: non c’è un’ora giusta per andarsene, ma questa è la tua."]
]
};
Object.assign(TOPX,TOPX_L2);
})();
