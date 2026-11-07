/* ---------- FIRENZE 2 · Dalla Stazione all’Arno (Santa Maria Novella, San Lorenzo, Piazza del Duomo, Piazza della Signoria, Santa Croce, Oltrarno, Piazzale Michelangelo e San Miniato, Lungarno) ---------- */
/* Un'intera giornata da sinistra a destra: alba alla stazione di Santa Maria Novella davanti alla basilica e agli obelischi sulle tartarughe,
   mattina a San Lorenzo fra le bancarelle di pelle e il Mercato Centrale, tarda mattina in Piazza del Duomo fra la Cupola, il Campanile e il Battistero,
   mezzogiorno in Piazza della Signoria fra la Loggia dei Lanzi, gli Uffizi e le buchette del vino, primo pomeriggio a Santa Croce,
   pomeriggio in Oltrarno fra Ponte Vecchio, Palazzo Pitti e Santo Spirito, tramonto al Piazzale Michelangelo e a San Miniato al Monte,
   notte sull'Arno fra la Torre di San Niccolò, la pescaia e il Ponte alle Grazie. Il varco è sul lungarno: fra due pile del ponte l'acqua si accende di una strada di luce dorata.
   Testi, tappe e dialoghi vengono da firenze2.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico). Gli oggetti stanno in elementi.js (nomi che iniziano per "f2").
   Il tono per i temi dolorosi (alluvione del 1966, rogo di Savonarola, esilio di Dante, peste, ponti distrutti nel 1944) è sempre sobrio e rispettoso. */
(function(){
const GT=372,W1=22000;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln}=PR._rm;
const {pers,gente,plat,cipr,cedro,pino}=PR._md;
const {nf,pal,fasce}=PR._f2;
const md=(i,n)=>((i%n)+n)%n;
const LIT='rgb(255,226,150)';
const Z=[0,2700,5400,8100,10900,13500,16100,18600,W1+400];   /* inizio di ognuna delle 8 zone */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* ---- cielo: alba rosa perla, mattina fresca, sole fra le nuvole, luce pallida, primo pomeriggio grigio-azzurro, oro, tramonto rosso-arancio, cobalto, notte ---- */
const SKY=[[0,['#9aa4cc','#f4bcc4','#ffe0c8']],[1300,['#5aa4ee','#bcdcf4','#f4f0e4']],[2700,['#3a8ce8','#82c0f4','#dcecf8']],[5400,['#3a84dc','#86b8e8','#e0ecf4']],[8100,['#7aa8d4','#c4d8e8','#f0eee4']],[10900,['#8aa4c0','#c0d0de','#e8ecee']],[13500,['#7a9cc8','#e8c898','#ffd8a0']],[15600,['#6a6aa8','#f0a070','#ffb878']],[16600,['#5a3a88','#e0584a','#ff9a50']],[17600,['#3a3a88','#b0486a','#f08a58']],[18500,['#12307a','#2a4aa0','#6a5a9a']],[19400,['#0a1c5a','#14307a','#2a4a8a']],[20400,['#070e30','#0e1a50','#222c66']],[99999,['#070e30','#0e1a50','#222c66']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Firenze, dall’alba alla notte. Parti dalla stazione, quando la foschia sale dall’Arno e i primi tram sono già in marcia, e cammini verso il cuore della città. Al mattino ti aspettano il Mercato Centrale e la chiesa dei Medici; a tarda mattina la Cupola di Brunelleschi, il Campanile di Giotto e il Battistero; a mezzogiorno Piazza della Signoria, gli Uffizi e i vinai, dove si beve un bicchiere di rosso in piedi. Nel primo pomeriggio Santa Croce, con le tombe dei grandi e i segni dell’alluvione; poi, di là d’Arno, Ponte Vecchio, Palazzo Pitti e le botteghe degli artigiani. Al tramonto sali al Piazzale Michelangelo e a San Miniato, dove i monaci cantano; a notte scendi sull’Arno, tra la pescaia e i remi, fino al punto in cui l’acqua si apre come una strada di luce. Il tempo qui si piega: Brunelleschi e Dante ti vengono incontro, e la città è quella di oggi.";
const LKTXT=[
"La stazione di Santa Maria Novella: prende il nome dalla basilica che le sta di fronte. Il primo scalo, chiamato Maria Antonia, è del 1848; l’edificio di oggi fu costruito fra il 1932 e il 1934 su progetto di un gruppo di giovani architetti toscani guidato da Giovanni Michelucci, e fu inaugurato nel 1935, fra molte polemiche. Oggi è considerato uno dei capolavori dell’architettura razionalista italiana.",
"Piazza Santa Maria Novella: dal 1563 vi si correva il Palio dei Cocchi, una gara di carri a due cavalli voluta da Cosimo I de’ Medici alla vigilia della festa di San Giovanni. Due obelischi di marmo, che poggiano su tartarughe di bronzo attribuite a Giambologna, segnavano le mete della corsa. Oggi la piazza ha aiuole, panchine e un bel via vai di gente.",
"La basilica di Santa Maria Novella: la grande chiesa dei domenicani, arrivati a Firenze nel 1221, fu costruita fra il Duecento e il Trecento e consacrata nel 1420. La facciata di marmo bianco e verde fu completata nel 1470 da Leon Battista Alberti per il mercante Giovanni Rucellai, il cui nome è scritto a grandi lettere sotto il frontone. Dentro ci sono, fra l’altro, il Crocifisso di Giotto e la Trinità di Masaccio.",
"L’Officina Profumo-Farmaceutica di Santa Maria Novella: nasce dalle erbe che i frati domenicani coltivavano nel loro convento dal 1221 per fare balsami e medicine, e si aprì al pubblico nel 1612. È una delle farmacie più antiche del mondo ancora in attività e si trova in via della Scala, a due passi dalla piazza.",
"Il mercato di San Lorenzo: nelle strade intorno alla basilica e al Mercato Centrale ci sono le bancarelle di pelle, con borse, cinture, guanti e sciarpe. Lavorare il cuoio è un mestiere antico a Firenze. Le bancarelle sono una cosa e il mercato coperto un’altra: le prime sono per chi cerca un regalo, il secondo per chi ha fame.",
"Il Mercato Centrale: una grande struttura di ferro, ghisa e vetro, progettata da Giuseppe Mengoni, l’architetto della Galleria di Milano, e costruita fra il 1870 e il 1874, mentre Firenze finiva il suo breve periodo da capitale d’Italia. Al piano terra ci sono macellai, pescivendoli, ortolani, formaggi e trippai; il primo piano, rinnovato nel 2014, è una grande sala con banchi di cucina.",
"La basilica di San Lorenzo: la chiesa dei Medici, ricostruita da Filippo Brunelleschi, ha una facciata mai finita, di mattoni a vista: Michelangelo ne aveva disegnata una di marmo, ma non fu mai fatta. Qui accanto ci sono la Sagrestia Vecchia di Brunelleschi e, nelle Cappelle Medicee, la Sagrestia Nuova di Michelangelo, iniziata nel 1520, con le tombe di alcuni membri della famiglia. L’ultima dei Medici, Anna Maria Luisa, morì nel 1743.",
"Palazzo Medici Riccardi: nel 1444 Cosimo il Vecchio affidò all’architetto Michelozzo il suo nuovo palazzo, sulla via Larga, oggi via Cavour. Con il bugnato massiccio e le grandi finestre era una dichiarazione di potere. Dentro c’è la piccola Cappella dei Magi, affrescata da Benozzo Gozzoli. Il nome Riccardi viene dalla famiglia che lo comprò dopo i Medici e lo ampliò.",
"La cattedrale di Santa Maria del Fiore: cominciata nel 1296 su progetto di Arnolfo di Cambio, fu consacrata il 25 marzo 1436 dal papa Eugenio IV. La facciata che si vede oggi, di marmi bianchi, verdi e rosa in stile neogotico, è del 1887: quella medievale, rimasta incompiuta, era stata smontata nel tardo Cinquecento.",
"La Cupola: costruita da Filippo Brunelleschi dal 1420 al 1436, senza armature di legno da terra, con due calotte una dentro l’altra e i mattoni disposti a spina di pesce. Si calcola che ci siano voluti più di quattro milioni di mattoni. Fra le due calotte corre una scala di 463 gradini.",
"Il Campanile di Giotto: l’artista Giotto cominciò la torre nel 1334, ma morì pochi anni dopo; la finì Francesco Talenti nel 1359. È alto 84,7 metri e per arrivare in cima ci sono 414 gradini. Ha la stessa decorazione di marmi colorati della cattedrale.",
"Il Battistero di San Giovanni: un edificio ottagonale in stile romanico, di marmo bianco e verde, costruito nell’XI secolo su strutture più antiche. Ha tre portali di bronzo: due sono di Lorenzo Ghiberti, e quello a est, lavorato dal 1425 al 1452, si chiama Porta del Paradiso, nome che si dice gli abbia dato Michelangelo. I pannelli originali sono oggi al Museo dell’Opera del Duomo.",
"Piazza della Signoria: da secoli il centro civile di Firenze. Palazzo Vecchio, cominciato nel 1299 su disegno di Arnolfo di Cambio per ospitare il governo della Repubblica, ha una torre alta 94 metri. Davanti al portale c’è una copia del David di Michelangelo, messa nel 1910: l’originale è alla Galleria dell’Accademia. Una targa, davanti alla Fontana del Nettuno, ricorda il luogo dove nel 1498 fu messo a morte il frate Girolamo Savonarola.",
"La Loggia dei Lanzi: un grande porticato aperto, costruito fra il 1376 e il 1382 per le cerimonie pubbliche. Il nome viene dai \"lanzi\", le guardie di Cosimo I che vi stavano di stanza. Oggi è un museo all’aria aperta, con il Perseo di bronzo di Benvenuto Cellini e il Ratto delle Sabine di Giambologna.",
"Gli Uffizi: a partire dal 1560 Cosimo I fece costruire da Giorgio Vasari un grande edificio per riunire gli uffici dello Stato, da cui il nome. Con il tempo vi furono sistemate le raccolte d’arte dei Medici: la galleria è aperta al pubblico dal 1769 e conserva, fra l’altro, la Nascita di Venere e la Primavera di Botticelli. Da qui parte il Corridoio Vasariano, un passaggio sopraelevato lungo circa 750 metri, costruito nel 1565 in pochi mesi fino a Palazzo Pitti.",
"Le buchette del vino: piccole aperture ad arco nei muri dei palazzi nobili, da cui le famiglie vendevano al dettaglio il vino delle loro tenute. Un resoconto scritto nel 1634 racconta che durante la peste si usavano per vendere senza toccarsi. Oggi in città se ne contano più di 180, e alcune sono tornate a servire vino, caffè e gelato.",
"Il Porcellino: sotto la Loggia del Mercato Nuovo, costruita fra il 1547 e il 1551 per volere di Cosimo I, c’è una fontana con un cinghiale di bronzo che tutti chiamano \"il Porcellino\". Quello di oggi è una copia dell’opera di Pietro Tacca, a sua volta ispirata a un marmo antico. Si dice che chi strofina il naso al cinghiale torni a Firenze, e che una moneta lasciata cadere dalla bocca porti fortuna se passa dalla grata.",
"Piazza Santa Croce: una grande piazza rettangolare davanti alla basilica, al centro di un quartiere di botteghe e di trattorie. Accanto alla scalinata c’è la statua di Dante Alighieri, scolpita da Enrico Pazzi nel 1865, seicento anni dopo la nascita del poeta.",
"La basilica di Santa Croce: la grande chiesa dei francescani, cominciata nel 1295 e consacrata nel 1443. La facciata di marmi colorati, in stile neogotico, è dell’Ottocento: fu rivestita fra il 1857 e il 1863 su progetto di Niccolò Matas. Dentro riposano Michelangelo, Galileo, Machiavelli e Rossini; c’è anche il monumento a Dante, una tomba vuota perché il poeta è sepolto a Ravenna.",
"Il Calcio Storico: ogni giugno la piazza si riempie di sabbia, e due semifinali e una finale, il 24 giugno, giorno di San Giovanni, patrono di Firenze, mettono di fronte quattro squadre di 27 calcianti, una per quartiere: gli Azzurri di Santa Croce, i Bianchi di Santo Spirito, i Rossi di Santa Maria Novella e i Verdi di San Giovanni. Si gioca per 50 minuti, e il premio è una vitella di razza chianina. Il ricordo è la partita giocata nel febbraio del 1530 mentre la città era assediata. È un gioco duro.",
"I segni dell’acqua: il 4 novembre 1966 l’Arno uscì dagli argini e Firenze fu sommersa. In alcune strade l’acqua superò i quattro metri, a Santa Croce l’acqua e il fango danneggiarono gravemente il Crocifisso di Cimabue, e le vittime furono trentacinque tra la città e la provincia. Migliaia di giovani, da molti Paesi, vennero ad aiutare a salvare libri e opere d’arte: li chiamarono \"angeli del fango\". Su molti muri una targa ricorda il livello raggiunto dall’acqua.",
"Il Ponte Vecchio: il ponte di oggi è del 1345, rifatto dopo l’alluvione del 1333. Dal 1442 sulle sue botteghe stavano i macellai; nel 1593 il granduca Ferdinando I li sostituì con orafi e gioiellieri, che ci sono ancora. Sopra le botteghe corre il Corridoio Vasariano. Nell’agosto del 1944, quando le truppe tedesche in ritirata fecero saltare gli altri ponti della città, questo fu risparmiato, mentre furono distrutti gli edifici vicini.",
"Palazzo Pitti: lo cominciò nel 1458 il banchiere Luca Pitti, rivale dei Medici; nel 1549 lo comprò Eleonora di Toledo, moglie di Cosimo I, e i Medici ne fecero la loro residenza. Dietro si apre il Giardino di Boboli, un grande giardino all’italiana con viali, siepi, statue, grotte e fontane.",
"Piazza Santo Spirito: il cuore dell’Oltrarno. La basilica fu cominciata nel 1444 su progetto di Brunelleschi, l’ultimo suo lavoro, e fu finita dopo la sua morte; la facciata è rimasta liscia, senza rivestimento. Dentro si dice che il crocifisso di legno sia di Michelangelo ragazzo. Dal lunedì al venerdì, di mattina, c’è il mercato.",
"L’Oltrarno, che i fiorentini chiamano \"Diladdarno\", cioè al di là dell’Arno, è il quartiere degli artigiani: orafi, incisori, rilegatori, intarsiatori, restauratori e doratori. Una tecnica di qui, usata dal Quattrocento, è la doratura di cornici e mobili con la foglia d’oro.",
"Il Piazzale Michelangelo: una grande terrazza panoramica progettata da Giuseppe Poggi nel 1869, quando Firenze era capitale d’Italia e la città veniva rinnovata. Al centro c’è una copia in bronzo del David, del 1873, con le copie delle quattro statue delle Cappelle Medicee. Sotto si vede tutta Firenze; ogni 24 giugno, per San Giovanni, da qui partono i fuochi d’artificio.",
"Le Rampe: la scalinata monumentale con grotte e fontane, voluta da Giuseppe Poggi, che sale dalla piazza della Torre di San Niccolò fino al Piazzale. Sotto il Piazzale c’è il Giardino delle Rose, che fiorisce a maggio e a giugno: a novembre le rose sono quasi spoglie.",
"La basilica di San Miniato al Monte: una delle chiese romaniche più belle di Firenze, cominciata nel 1018. La facciata è di marmo bianco e verde; dentro c’è un pavimento a intarsio con i segni dello zodiaco e, nell’abside, un mosaico dorato. Accanto vive una comunità di monaci olivetani, che cantano il canto gregoriano e vendono miele e liquori alle erbe.",
"Il cimitero delle Porte Sante: dietro la basilica, un cimitero monumentale chiuso da mura, dove riposano scrittori e artisti, fra cui Carlo Collodi, l’autore di Pinocchio. Le mura bastionate attorno furono progettate da Michelangelo per difendere la città nel 1530.",
"La Torre di San Niccolò: la porta sud delle mura di Arnolfo, eretta nel 1324. È l’unica porta di Firenze rimasta alta come in origine: le altre furono abbassate nel Cinquecento, mentre la collina di San Miniato la proteggeva dai colpi dei cannoni. Quasi tutte le mura furono demolite negli anni di Firenze capitale.",
"La pescaia di San Niccolò: una soglia che attraversa tutto il fiume e fa cadere l’acqua in uno scroscio bianco; di notte il rumore si sente da lontano. Un tempo, fuori dalle mura, c’erano mulini mossi da un canale che partiva a monte della pescaia. Sulle pescaie dell’Arno, come quella di Santa Rosa, si posano oggi i cormorani.",
"I canottieri: sull’Arno si rema da più di un secolo e mezzo. La prima società italiana di canottaggio nacque nel 1861 a Limite sull’Arno, a valle di Firenze; la Società Canottieri Firenze, del 1886, sta sotto gli Uffizi, in un lungo corridoio dove un tempo stavano i cavalli delle guardie dei Medici; sul Lungarno Ferrucci c’è la Canottieri Comunali.",
"Il Ponte alle Grazie: la prima versione, chiamata ponte di Rubaconte dal podestà che la fece costruire nel 1237, aveva nove arcate ed è più antica del Ponte Vecchio; sopra i piloni c’erano cappelle e botteghe, e il nome viene da una cappella con l’immagine della Madonna delle Grazie. Fu distrutto nel 1944 e ricostruito dopo la guerra. Da qui, di notte, si vede Ponte Vecchio illuminato.",
"Sul lungarno, nel buio, fra due pile del Ponte alle Grazie l’acqua dell’Arno si accende di una striscia di luce dorata che si allontana lungo il fiume. Sembra un sentiero: è la porta."
];
const NAME={
"f2_brunelleschi": "Filippo Brunelleschi",
"f2_dante": "Dante Alighieri",
"f2_giulia": "Giulia, la tranviera",
"f2_sandro": "Sandro, il lampredottaio",
"f2_marisa": "Marisa, la vinaia",
"f2_elena": "Elena, la doratrice dell’Oltrarno",
"f2_matteo": "Matteo, il monaco di San Miniato",
"f2_ginevra": "Ginevra, la rematrice dell’Arno"
};
const GREET={
"f2_brunelleschi": "O Pierpaolo, vieni qua, ti aspettavo! Da qui la vedo meglio. Sono Filippo di ser Brunellesco, e quella lassù è la mia cupola, che nessuno credeva si potesse fare. Alza il naso e stammi a sentire.",
"f2_dante": "O Pierpaolo, vieni, siediti qui accanto: la piazza, a quest’ora, è la più quieta di Firenze. Sono Dante degli Alighieri, e questa città la conosco meglio di chiunque, anche se non la vedo da più di settecento anni.",
"f2_giulia": "O Pierpaolo, ciao! Sono Giulia, tranviera: a quest’ora la città si sveglia con me. Il tram parte quando lo dico io, quindi per ora ti aspetta. Hai fatto il viaggio in treno, vero? Si vede dalla faccia!",
"f2_sandro": "O Pierpaolo! Ti aspettavo come il panino aspetta il brodo. Sono Sandro, e questo è il lampredotto più bono di San Lorenzo. Lo vuoi bagnato, vero?",
"f2_marisa": "O Pierpaolo, bimbo, entra, entra, che fuori fa fresco! Sono Marisa, e qui si beve in piedi e si parla in fretta... cioè il contrario, ci metto tutta la giornata. Cosa ti do: un bicchiere di rosso e un crostino?",
"f2_elena": "O Pierpaolo, vieni dentro ma non respirare forte: la foglia d’oro vola via con un soffio! Sono Elena, e qui l’oro lo mettiamo sulle cose che ancora non lo sanno.",
"f2_matteo": "Ciao, Pierpaolo, ben arrivato lassù! Hai fatto bene a salire con la luce che cala. Sono Matteo, monaco: da qui, al tramonto, Firenze sembra un presepe dipinto di arancione.",
"f2_ginevra": "O Pierpaolo, ce l’hai fatta! Sono Ginevra. Siediti sul pontile e stai zitto un attimo: senti quel rumore? È la pescaia, là in fondo, che fa cadere l’acqua. Di giorno non si sente, ma di notte è la voce del fiume."
};
/* ---- facciate di strada, zona per zona ---- */
const OC=['#d9b26a','#e0c070','#dca58c','#cf9a5a','#e8c860'];
function fac(g,x,w,h,i,st){const gt=GT,k=A.getDK(),r=hr(i*3);
 if(st==1){/* Santa Maria Novella: palazzi ocra e gialli con persiane verdi, il portico dell'ex ospedale, qualche platano */
  if(r>.86){plat(g,x+w*.5,gt,1.1,TT);return}
  pal(g,x+6,w-30,h+10,i,k,{wall:OC[md(i,5)],gt:md(i,5)==2?'arc':md(i,2)?'shop':'',sc:['#2a4a3a','#6a2a22','#2a3a5a'][md(i,3)],tab:md(i,6)==1});return}
 if(st==2){/* San Lorenzo: palazzi alti ocra e rosa, botteghe, tabernacoli */
  pal(g,x+4,w-24,h+50,i,k,{wall:['#dca58c','#d9b26a','#e0b878','#cf9a5a'][md(i,4)],gt:md(i,3)==1?'port':'shop',sc:['#6a2a22','#2a4a3a','#3a2a4a','#2a3a5a'][md(i,4)],tab:md(i,5)==2,alt:md(i,4)==3});return}
 if(st==3){/* Piazza del Duomo: palazzi ocra e rosa che si affacciano sulla piazza */
  pal(g,x+4,w-24,h+60,i,k,{wall:['#e0b878','#dca58c','#e8c860','#d9b26a'][md(i,4)],gt:md(i,2)?'shop':'port',sc:['#2a4a3a','#6a2a22','#3a2a4a'][md(i,3)],alt:md(i,3)==0,arch:1});return}
 if(st==4){/* Piazza della Signoria: facciate severe di pietra */
  pal(g,x+4,w-20,h+60,i,k,{wall:['#a89878','#b4a484','#9a8a6a','#aa9c80'][md(i,4)],gt:'port',arch:1,sh:'#2f5a3a'});return}
 if(st==5){/* Santa Croce: palazzi dipinti, botteghe e trattorie */
  pal(g,x+4,w-24,h+40,i,k,{wall:['#e8d8a0','#dca58c','#d9b26a','#c8d0a0','#e0b878'][md(i,5)],gt:md(i,3)==0?'tratt':md(i,3)==1?'shop':'port',sc:['#2a4a3a','#6a2a22','#2a3a5a'][md(i,3)],tab:md(i,7)==3,arch:1});return}
 if(st==6){/* Oltrarno: palazzi ocra, botteghe, muri di giardino con i cipressi */
  if(md(i,5)==3){rect(g,'#9a8a6a',x,gt-70,w-20,70);rect(g,'#b8a884',x-3,gt-76,w-14,7);for(let q=0;q<3;q++)cipr(g,x+30+q*50,gt-70,100+hr(i+q)*40);arc2(g,x+w*.4,gt);return}
  pal(g,x+4,w-24,h+30,i,k,{wall:['#d9b26a','#e0c070','#cf9a5a','#dca58c'][md(i,4)],gt:md(i,2)?'shop':'port',sc:['#2a4a3a','#6a2a22','#3a2a4a'][md(i,3)],alt:md(i,4)==1,tab:md(i,6)==2});return}
 if(st==7){/* il colle: muri di pietra, ville ocra, cipressi e pini */
  if(r>.45){[cipr,cipr,pino,cedro][md(i,4)](g,x+w*.5,gt,md(i,4)==2||md(i,4)==3?1:140+hr(i)*50);return}
  rect(g,'#9a8a6a',x,gt-80,w-20,80);for(let q=0;q<6;q++)rect(g,'rgba(0,0,0,.1)',x,gt-70+q*13,w-20,1.2);rect(g,'#b8a884',x-3,gt-86,w-14,7);cipr(g,x+30,gt-80,120);cipr(g,x+w-70,gt-80,100);arc2(g,x+w*.4,gt);return}
 /* 8: la riva opposta dell'Arno: palazzi gialli e ocra con le persiane, di notte le finestre si accendono */
 pal(g,x+4,w-20,h+30,i,k,{wall:['#e8c860','#d9b26a','#cf9a5a','#dca58c','#e0c070'][md(i,5)],gt:'',sh:'#2f5a3a',alt:md(i,4)==2});rect(g,'#5a554c',x+2,gt-12,w-18,12);rect(g,'#7a756a',x+2,gt-14,w-18,3)}
function arc2(g,x,y){rect(g,'#14100c',x,y-44,26,44);rect(g,'#14100c',x+2,y-52,22,10)}
/* ---- livello 0: cielo, sole, luna, nuvole basse e mobili, velo dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-18600)/2000,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/17400,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*240;
 if(xs<17900){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,15)}
 const mu=cl((xs-18000)/2400,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*200;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<2700?'rgba(252,206,214,.8)':xs<13500?'rgba(246,248,252,.9)':xs<17000?'rgba(255,176,140,.75)':'rgba(140,120,190,.45)';
 each(o-((t*9)%340)*.02,340,1,(x,i,r)=>{if(r>.7)return;nube(g,x+r*100,34+r*60,.8+r*.7,cc)});
 const fo=cl(1-xs/2700,0,1)*.34;if(fo>.01){g.fillStyle='rgba(252,200,210,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-12800)/1000,0,1)*cl((16000-xs)/1200,0,1)*.16;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-15800)/800,0,1)*cl((18200-xs)/900,0,1)*.26;if(wg>.01){g.fillStyle='rgba(255,110,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: l'orizzonte lontano ---- */
function cupF(g,sx,hz,s,dim){rect(g,dim('#e8dfc8'),sx-30*s,hz-28*s,60*s,30*s);g.fillStyle=dim('#c8542a');g.beginPath();g.moveTo(sx-34*s,hz-26*s);g.bezierCurveTo(sx-36*s,hz-62*s,sx-14*s,hz-92*s,sx,hz-96*s);g.bezierCurveTo(sx+14*s,hz-92*s,sx+36*s,hz-62*s,sx+34*s,hz-26*s);g.closePath();g.fill();[-.6,0,.6].forEach(q=>{g.strokeStyle=dim('#f0e8d8');g.lineWidth=1.4*s;g.beginPath();g.moveTo(sx+q*34*s,hz-26*s);g.quadraticCurveTo(sx+q*20*s,hz-80*s,sx,hz-96*s);g.stroke()});rect(g,dim('#f0e8d8'),sx-4*s,hz-112*s,8*s,16*s);rect(g,dim('#d8a850'),sx-.6*s,hz-122*s,1.2*s,10*s)}
function campF(g,sx,hz,s,dim){rect(g,dim('#e8dfc8'),sx-9*s,hz-112*s,18*s,114*s);rect(g,dim('#b8d0b0'),sx-9*s,hz-80*s,18*s,4*s);rect(g,dim('#d8b0a8'),sx-9*s,hz-54*s,18*s,4*s);rect(g,dim('#d8d0b8'),sx-11*s,hz-116*s,22*s,5*s)}
function torF(g,sx,hz,s,dim){rect(g,dim('#9a8a6a'),sx-22*s,hz-40*s,44*s,42*s);for(let q=0;q<6;q++)rect(g,dim('#aa9a7a'),sx-22*s+q*8*s,hz-48*s,5*s,9*s);rect(g,dim('#8a7a5a'),sx-5*s,hz-110*s,10*s,72*s);rect(g,dim('#aa9a7a'),sx-9*s,hz-122*s,18*s,12*s);poly(g,dim('#8a4a32'),[[sx-8*s,hz-122*s],[sx,hz-136*s],[sx+8*s,hz-122*s]])}
function roofs(g,sx,hz,n,sp,dim,pal2,seed){for(let q=0;q<n;q++){const bx=sx+q*sp-n*sp/2,bh=26+hr(q*3+seed)*34;rect(g,dim(pal2[q%pal2.length]),bx,hz+16-bh,sp-2,bh);poly(g,dim('#b8603a'),[[bx-3,hz+16-bh],[bx+6,hz+16-bh-8],[bx+sp-8,hz+16-bh-8],[bx+sp+1,hz+16-bh]])}}
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const PA=['#e0b878','#dca58c','#d9b26a','#cf9a5a','#e8c860'];
 /* il mare dei tetti di coppi, sempre presente, con qualche finestra accesa la sera */
 g.fillStyle=dim('#b8704a');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20;g.lineTo(px,hz+4-9*Math.abs(Math.sin((px+o)*.012))-5*Math.sin((px+o)*.05))}g.lineTo(480,hz+30);g.closePath();g.fill();
 /* Santa Maria Novella: la stazione bassa e il campanile della basilica (zona 1-2) */
 const e1=env(1500,4000);if(e1>.02){g.globalAlpha=e1;const sx=fx(1500);rect(g,dim('#d8d2c0'),sx-140,hz-6,230,22);rect(g,dim('#e8e0cc'),sx+20,hz-40,60,40);campF(g,sx+120,hz+10,.8,dim);rect(g,dim('#e8e0cc'),sx+180,hz-30,70,46);poly(g,dim('#e8e0cc'),[[sx+176,hz-30],[sx+215,hz-52],[sx+254,hz-30]]);cupF(g,sx+330,hz+20,.5,dim);roofs(g,sx-60,hz,12,40,dim,PA,2);g.globalAlpha=1}
 /* San Lorenzo e la Cupola fra i tetti (zona 2) */
 const e2=env(4200,4000);if(e2>.02){g.globalAlpha=e2;const sx=fx(4200);roofs(g,sx,hz,18,44,dim,PA,5);cupF(g,sx-60,hz+16,.62,dim);g.fillStyle=dim('#b5532e');g.beginPath();g.arc(sx+110,hz-14,30,Math.PI,0);g.fill();rect(g,dim('#e0d4b8'),sx+80,hz-14,60,30);g.globalAlpha=1}
 /* il Duomo alle spalle, la torre di Palazzo Vecchio in lontananza (zone 3-4) */
 const e3=env(6700,3400);if(e3>.02){g.globalAlpha=e3;const sx=fx(6700);roofs(g,sx,hz,16,44,dim,PA,8);torF(g,sx+160,hz+16,.8,dim);g.globalAlpha=1}
 const e4=env(9500,3800);if(e4>.02){g.globalAlpha=e4;const sx=fx(9500);roofs(g,sx,hz,18,44,dim,PA,11);torF(g,sx-30,hz+16,1,dim);campF(g,sx+140,hz+16,.55,dim);cupF(g,sx+250,hz+20,.5,dim);g.globalAlpha=1}
 /* Santa Croce e la Cupola (zona 5) */
 const e5=env(12200,3600);if(e5>.02){g.globalAlpha=e5;const sx=fx(12200);roofs(g,sx,hz,16,44,dim,PA,14);campF(g,sx-80,hz+16,.9,dim);poly(g,dim('#8a8a82'),[[sx-90,hz-90],[sx-80,hz-122],[sx-70,hz-90]]);cupF(g,sx+120,hz+20,.58,dim);g.globalAlpha=1}
 /* le colline di Boboli con i cipressi, il Forte di Belvedere (zona 6) */
 const e6=env(14800,3800);if(e6>.02){g.globalAlpha=e6;const sx=fx(14800);g.fillStyle=dim('#6a8a4a');g.beginPath();g.moveTo(sx-380,hz+30);for(let q=0;q<=30;q++){const px=sx-380+q*26;g.lineTo(px,hz-30-26*Math.abs(Math.sin(q*.5))-10*Math.sin(q*1.7))}g.lineTo(sx+380,hz+30);g.closePath();g.fill();for(let q=0;q<16;q++)poly(g,dim('#2a4a2e'),[[sx-300+q*40-3,hz-18-hr(q)*10],[sx-300+q*40,hz-62-hr(q+2)*30],[sx-300+q*40+3,hz-18-hr(q)*10]]);rect(g,dim('#c8b890'),sx+100,hz-46,70,22);for(let q=0;q<6;q++)rect(g,dim('#c8b890'),sx+100+q*13,hz-52,8,8);roofs(g,sx-140,hz+8,10,40,dim,PA,17);g.globalAlpha=1}
 /* Firenze vista dall'alto, le colline azzurre dell'Appennino (zona 7) */
 const e7=env(17400,4200);if(e7>.02){g.globalAlpha=e7;const sx=fx(17400);g.fillStyle=dim('#8aa0c8');g.beginPath();g.moveTo(sx-400,hz+10);[[-400,-30],[-330,-52],[-270,-38],[-200,-74],[-130,-54],[-60,-86],[0,-62],[70,-92],[140,-60],[210,-70],[280,-44],[340,-56],[400,-26]].forEach(p=>g.lineTo(sx+p[0],hz+p[1]));g.lineTo(sx+400,hz+10);g.closePath();g.fill();
  g.fillStyle=dim('#c8704a');g.beginPath();g.moveTo(sx-420,hz+40);for(let q=0;q<=34;q++){const px=sx-420+q*25;g.lineTo(px,hz+2-6*Math.abs(Math.sin(q*1.3)))}g.lineTo(sx+420,hz+40);g.closePath();g.fill();
  cupF(g,sx-30,hz+8,.95,dim);campF(g,sx+40,hz+8,1,dim);torF(g,sx+110,hz+10,1.1,dim);rect(g,dim('#d8c8a0'),sx+170,hz-4,54,12);roofs(g,sx-300,hz+8,22,28,dim,PA,23);if(night>.2)for(let q=0;q<26;q++)rect(g,'rgba(255,226,160,.85)',sx-300+hr(q)*600,hz+4+hr(q+3)*10,2,2);g.globalAlpha=1}
 /* di notte: le colline scure con San Miniato illuminata, la Cupola accesa, le luci del Ponte Vecchio (zona 8) */
 const e8=env(20400,3800);if(e8>.02){g.globalAlpha=e8;const sx=fx(20400);g.fillStyle=dim('#1a2a3a');g.beginPath();g.moveTo(sx-400,hz+30);for(let q=0;q<=30;q++){const px=sx-400+q*27;g.lineTo(px,hz-24-30*Math.abs(Math.sin(q*.45))-8*Math.sin(q*1.9))}g.lineTo(sx+400,hz+30);g.closePath();g.fill();
  for(let q=0;q<20;q++)poly(g,'#0e1a22',[[sx-360+q*38-3,hz-6],[sx-360+q*38,hz-48-hr(q)*30],[sx-360+q*38+3,hz-6]]);
  rect(g,'#f0e8c8',sx+60,hz-70,60,24);poly(g,'#f0e8c8',[[sx+56,hz-70],[sx+90,hz-90],[sx+124,hz-70]]);rect(g,'#f0e8c8',sx+140,hz-96,10,40);glow(g,sx+90,hz-60,90,'255,226,150',.3);
  cupF(g,sx-150,hz+14,.6,dim);rect(g,'rgba(255,214,130,.35)',sx-150-18,hz-30,36,40);for(let q=0;q<12;q++)dot(g,'rgba(255,214,130,.9)',sx-300+q*9,hz+8,1.5);
  g.globalAlpha=1}
 if(night>.35)for(let q=0;q<46;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.3)+')',q*11+hr(q)*8,hz+20+hr(q*3)*8,1.2)}
/* ---- livello 2: profili di palazzi, alberi e tetti, zona per zona ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;
  const wins=(n,top)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+14+(q%4)*20,top+Math.floor(q/4)*14,6,5)};
  const roof=(top,bw)=>{rect(g,dim('#b8603a'),x-4,top-8,bw+8,9);poly(g,dim('#a8502e'),[[x-6,top-8],[x+8,top-16],[x+bw-6,top-16],[x+bw+8,top-8]])};
  if(zz==7){if(hr(i*3)>.35){poly(g,dim('#1d3a28'),[[x+30,hz+10],[x+34,hz-70-r*40],[x+38,hz+10]]);poly(g,dim('#1d3a28'),[[x+60,hz+10],[x+64,hz-52-r*30],[x+68,hz+10]]);el(g,dim('#4a6a3a'),x+90,hz-14,34,24)}else{rect(g,dim('#d9b26a'),x,hz-40-r*20,66,50+r*20);roof(hz-40-r*20,66);wins(4,hz-30-r*20)}return}
  const pk=zz==1?['#e4d8c0','#d8a880','#ece4d0']:zz==2?['#dca58c','#d9b26a','#e0b878']:zz==3?['#e0b878','#dca58c','#e8c860']:zz==4?['#a89878','#b4a484','#9a8a6a']:zz==5?['#e8d8a0','#dca58c','#d9b26a']:zz==6?['#d9b26a','#e0c070','#cf9a5a']:['#e8c860','#d9b26a','#cf9a5a','#dca58c'];
  const hh=(zz==2||zz==3?64:zz==8?44:52)+r*30;rect(g,dim(pk[md(i,pk.length)]),x,hz-hh,w-8,hh+10);rect(g,'rgba(255,255,255,.14)',x,hz-hh,4,hh+10);roof(hz-hh,w-8);
  for(let q=0;q<3;q++)rect(g,dim('#2f5a3a'),x+14+q*28,hz-hh+14,6,14);wins(8,hz-hh+10);
  if(zz==3&&hr(i*3)>.8){rect(g,dim('#e8dfc8'),x+30,hz-hh-70,16,62);poly(g,dim('#8a4a32'),[[x+26,hz-hh-70],[x+38,hz-hh-86],[x+50,hz-hh-70]])}
  if(zz==8){rect(g,dim('#4a463e'),x-2,hz+2,w-4,8)}});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
/* ---- livello 3: la strada, zona per zona ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st)})};
 each2(190,7,Z[0],Z[1],1,i=>140+hr(i*5)*50,170);
 each2(170,8,Z[1],Z[2],2,i=>130+hr(i*5)*40,160);
 each2(180,9,Z[2],Z[3],3,i=>130+hr(i*5)*40,170);
 each2(170,10,Z[3],Z[4],4,i=>130+hr(i*5)*40,160);
 each2(180,11,Z[4],Z[5],5,i=>120+hr(i*5)*40,170);
 each2(180,12,Z[5],Z[6],6,i=>130+hr(i*5)*40,170);
 each2(170,13,Z[6],Z[7],7,i=>130+hr(i*5)*40,160);
 each2(180,14,Z[7],Z[8],8,i=>130+hr(i*5)*40,170)}
/* ---- vita: piccioni, gabbiani sull'Arno, passanti con i cani ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 const pg=Math.max(cl((xs-5400)/400,0,1)*cl((13500-xs)/400,0,1),cl((xs-300)/300,0,1)*cl((2700-xs)/300,0,1));
 if(pg>.05)for(let i=0;i<5;i++){const bx=((i*117+t*(46+i*6))%600)-60,by=70+hr(i*3)*100+Math.sin(t*2+i*2)*14,w=Math.sin(t*10+i)*3.4;g.strokeStyle='rgba(120,126,140,'+(.9*Math.min(1,pg))+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke();rect(g,'rgba(90,96,110,.9)',bx-2,by,5,3)}
 /* gabbiani reali sui tetti e sul fiume */
 const gg=Math.max(cl((xs-13500)/400,0,1)*cl((16000-xs)/400,0,1),cl((xs-18600)/400,0,1),cl((2700-xs)/300,0,1)*.7);
 if(gg>.05&&xs<21000)for(let i=0;i<3;i++){const bx=((i*171+t*(54+i*7))%620)-70,by=60+hr(i*5+2)*90+Math.sin(t*2+i)*12,w=Math.sin(t*8+i)*4;g.strokeStyle='rgba(240,240,244,'+(.9*Math.min(1,gg))+')';g.lineWidth=2.2;g.beginPath();g.moveTo(bx-10,by+w);g.quadraticCurveTo(bx-4,by-5,bx,by);g.quadraticCurveTo(bx+4,by-5,bx+10,by+w);g.stroke()}
 /* passeri, e pipistrelli la sera */
 if(xs<17000)for(let i=0;i<3;i++){const bx=((i*171+t*(80+i*9))%620)-70,by=100+hr(i*5+2)*120+Math.sin(t*3+i)*10,w=Math.sin(t*16+i)*2;g.strokeStyle='rgba(90,66,40,.85)';g.lineWidth=1.8;g.beginPath();g.moveTo(bx-5,by+w);g.lineTo(bx,by);g.lineTo(bx+5,by+w);g.stroke()}
 if(xs>17400)for(let i=0;i<3;i++){const bx=((i*131+t*(60+i*8))%600)-60,by=110+hr(i*7)*100+Math.sin(t*4+i)*16,w=Math.sin(t*14+i)*3;g.strokeStyle='rgba(20,16,30,.8)';g.lineWidth=1.8;g.beginPath();g.moveTo(bx-7,by+w);g.quadraticCurveTo(bx-2,by-3,bx,by);g.quadraticCurveTo(bx+2,by-3,bx+7,by+w);g.stroke()}
 /* passanti, corridori e persone con il cane per le vie */
 [[300,2600,40,0],[5600,8000,-34,1],[10900,13400,30,2],[18700,21200,-28,3]].forEach((rg,ri)=>{for(let i=0;i<2;i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.25),wx=rg[0]+(((t*sp+i*span/2)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));const d=sp>0?1:-1,by=GT+24+i*9;g.save();g.translate(px,by);g.scale(d*.6,.6);
  fig(g,0,0,t*3,{f:1,s:.7,ph:i,skin:tn('#e0b090'),top:tn(['#e8505a','#2a8a9a','#f2c82a','#4a7aa8'][(i+ri)%4]),bot:tn('#2a2a36'),hair:tn('#2a1a10')});
  if(ri==1&&i==0){el(g,tn('#b8803a'),34,-14,12,6);dot(g,tn('#b8803a'),44,-22,5);ln(g,tn('#6a4a2a'),1.2,[14,-62,34,-22])}g.restore()}})}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#c8c4b8','a'],[Z[1],Z[2],'#b4ae9c','l'],[Z[2],Z[3],'#d2cab4','g'],[Z[3],Z[4],'#7c7468','c'],[Z[4],Z[5],'#d0c8b0','b'],[Z[5],Z[6],'#a8a090','r'],[Z[6],Z[7],'#b4ac98','p'],[Z[7],Z[8],'#8a867c','m']];
 rect(g,'#d8d0b8',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const slabs=(bw0,add,al,irr)=>{for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(0,0,0,.07)':'rgba(255,255,255,.05)',px,yy,bw-2,15);rect(g,'rgba(0,0,0,.12)',px+(irr?hh*6:0),yy,1.3,17)}rect(g,'rgba(0,0,0,.09)',x0,yy+15,x1-x0,1.4)}};
  if(z[3]=='a'){/* piazzale della stazione: lastre grigie, binari del tram incassati, strisce pedonali */
   slabs(46,8,.18);rect(g,'#4a4a54',x0,gt+84,x1-x0,44);rect(g,'#8a8a88',x0,gt+82,x1-x0,3);rect(g,'#6a6e76',x0,gt+100,x1-x0,2);rect(g,'#6a6e76',x0,gt+112,x1-x0,2);for(let q=0;q<26;q++)rect(g,'rgba(255,255,255,.07)',x0+((q*37-cam)%ww+ww)%ww,gt+90+hr(q)*30,10,1.6);
   for(let q=0;q<3;q++){const px=((q*420+160-cam)%900+900)%900-120;for(let w=0;w<8;w++)rect(g,'#f4f0e6',px+w*9,gt+86,5,38)}}
  if(z[3]=='l'){slabs(40,7,.12,1);for(let q=0;q<30;q++)rect(g,'rgba(70,110,140,.22)',x0+((q*53-cam)%ww+ww)%ww,gt+20+hr(q)*110,16,2);for(let q=0;q<40;q++)rect(g,hr(q)>.5?'#6a9a42':'#c8a050',x0+((q*61-cam)%ww+ww)%ww,gt+14+hr(q*3)*120,3,2);rect(g,'#9a948a',x0,gt+120,x1-x0,3)}
  if(z[3]=='g'){slabs(70,12,.26);rect(g,'#9a9484',x0,gt+120,x1-x0,3);rect(g,'rgba(0,0,0,.1)',x0,gt+84,x1-x0,2)}
  if(z[3]=='c'){slabs(32,8,.12,1);for(let q=0;q<80;q++)rect(g,'rgba(0,0,0,.09)',x0+((q*41-cam)%ww+ww)%ww,gt+8+hr(q)*130,6,3);rect(g,'#5a5246',x0,gt+98,x1-x0,2.4);rect(g,'#5a5246',x0,gt+114,x1-x0,2.4)}
  if(z[3]=='b'){slabs(78,12,.28);rect(g,'#aaa28c',x0,gt+120,x1-x0,3);for(let q=0;q<20;q++)rect(g,'rgba(255,255,255,.1)',x0+((q*83-cam)%ww+ww)%ww,gt+10+hr(q)*120,18,2)}
  if(z[3]=='r'){/* selciato di sassi dell'Oltrarno */
   for(let r=0;r<8;r++)for(let k=0;k<Math.ceil(ww/16)+2;k++){const px=Math.floor((cam+x0)/16)*16+k*16-cam+(r%2)*8,yy=gt+6+r*18,hh=hr(k*7+r*3+Math.floor(cam/16)*0);el(g,hh>.5?'rgba(255,255,255,.1)':'rgba(0,0,0,.09)',px,yy+8,7,5)}
   rect(g,'#8a8474',x0,gt+120,x1-x0,3)}
  if(z[3]=='p'){/* viali e gradoni del colle: ghiaia, pietra, asfalto del Piazzale */
   rect(g,'#c8bc9c',x0,gt+3,x1-x0,150);for(let q=0;q<160;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.3)':'rgba(120,100,60,.2)',x0+((q*47)%ww),gt+8+hr(q+3)*130,2+hr(q)*3,1.6);for(let r=0;r<6;r++)rect(g,'rgba(0,0,0,.08)',x0,gt+16+r*24,x1-x0,1.6);for(let q=0;q<30;q++)dot(g,hr(q)>.5?'#c8402a':'#d8a82e',x0+((q*61)%ww),gt+10+hr(q+7)*130,1.5)}
  if(z[3]=='m'){/* lungarno: l'acqua dietro la spalletta, la strada di pietra bagnata, i lumini */
   const night=nf(cam+x0+120);rect(g,'#24323a',x0,gt+3,x1-x0,38);rect(g,'rgba(255,255,255,.1)',x0,gt+3,x1-x0,5);
   for(let q=0;q<50;q++)rect(g,'rgba(180,210,200,'+(.2+.2*Math.sin(t*2+q))*.8+')',x0+((q*37-cam+Math.sin(t+q)*6)%ww+ww)%ww,gt+6+hr(q)*30,10+hr(q+2)*14,1.4);
   for(let q=0;q<18;q++){const lx=((q*210-cam+40)%ww+ww)%ww;if(night>.2)for(let r=0;r<5;r++)rect(g,'rgba(255,214,130,'+(.35*night)+')',x0+lx-6+Math.sin(t*2+r+q)*3,gt+6+r*7,12,2)}
   const gx=22000-130-cam;if(gx>-200&&gx<700)for(let r=0;r<9;r++)rect(g,'rgba(255,214,120,'+(.5*(1-r/10))+')',gx-60+r*3,gt+5+r*4,120-r*6,3);
   rect(g,'#6a665c',x0,gt+41,x1-x0,22);rect(g,'#8a867a',x0,gt+38,x1-x0,5);rect(g,'rgba(0,0,0,.16)',x0,gt+56,x1-x0,6);for(let q=0;q<40;q++)rect(g,'rgba(0,0,0,.12)',x0+((q*26-cam)%ww+ww)%ww,gt+43,1.4,18);
   rect(g,'#8c887c',x0,gt+63,x1-x0,90);slabs(34,6,.1,1);for(let r=0;r<6;r++)rect(g,'rgba(255,255,255,'+(.06+.08*night)+')',x0,gt+70+r*14,x1-x0,2);
   for(let q=0;q<24;q++)rect(g,'rgba(255,214,130,'+(.25*night)+')',x0+((q*47-cam)%ww+ww)%ww,gt+70+hr(q)*70,18,2)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1600,0,1);if(dw>.02)rect(g,'rgba(255,180,180,'+(.12*dw)+')',0,gt,480,150);
 const gd=cl((cam-13000)/700,0,1)*cl((15800-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
 const sg=cl((cam-15800)/700,0,1)*cl((18000-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Giulia: giubbotto blu con le strisce riflettenti, berretto di lana, guanti senza dita, termos, tesserino, treccia lunga */
 NP('f2_giulia',NAME.f2_giulia,1060,GREET.f2_giulia,{skin:'#e0b090',top:'#2a4a8a',bot:'#3a3a46',hair:'#4a2a1a',s:1.0},(g,b,t)=>{rect(g,'#d8e0e8',-12,-78+b,24,2.4);rect(g,'#d8e0e8',-12,-62+b,24,2.4);el(g,'#6a6a72',0,-113+b,13.4,5);rect(g,'#7a7a82',-12,-112+b,24,3);ln(g,'#4a2a1a',4,[-11,-104+b,-18,-90+b,-14,-72]);rect(g,'#f4f0e6',-3,-86+b,6,8);rect(g,'#c8c8cc',16,-74,7,15);rect(g,'#c8281e',16,-78,7,4)}),
 /* Sandro: grembiule bianco macchiato, maniche rimboccate, berretto di lana, coltello lungo e tagliere */
 NP('f2_sandro',NAME.f2_sandro,3995,GREET.f2_sandro,{skin:'#d8908a',top:'#8a8a94',bot:'#2a2a36',hair:'#9a9aa0',s:1.04},(g,b,t)=>{rect(g,'#f4f0e6',-11,-80+b,22,40);rect(g,'rgba(0,0,0,.1)',-11,-80+b,3,40);rect(g,'#a8452e',-5,-66+b,6,4);rect(g,'#a8452e',2,-54+b,5,3);el(g,'#2a2a30',0,-113+b,13.4,5);rect(g,'#3a3a40',-12,-112+b,24,3);rect(g,'#c8a470',10,-60,24,4);ln(g,'#c8ccd0',2.6,[14,-64,34,-84]);rect(g,'#14110f',4,-102+b,6,1.6)}),
 /* Brunelleschi: lungo lucco scuro con il cappuccio, mantello corto, compasso e fogli arrotolati, capelli corti e grigi */
 NP('f2_brunelleschi',NAME.f2_brunelleschi,6830,GREET.f2_brunelleschi,{skin:'#e0b896',top:'#2a2230',bot:'#2a2230',hair:'#9a9aa0',long:1,s:1.02},(g,b,t)=>{poly(g,'#3a3040',[[-14,-92+b],[14,-92+b],[16,-76+b],[-16,-76+b]]);el(g,'#2a2230',0,-92+b,16,5);poly(g,'#2a2230',[[-12,-110+b],[-4,-118+b],[12,-110+b],[10,-94+b],[-10,-94+b]]);poly(g,'#e0b896',[[-7,-110+b],[9,-108+b],[8,-96+b],[-6,-96+b]]);rect(g,'#9a9aa0',-9,-114+b,16,5);ln(g,'#c8a050',1.8,[18,-72,26,-98]);ln(g,'#c8a050',1.8,[18,-72,32,-96]);dot(g,'#c8a050',18,-72,2.2);rect(g,'#e8dcc0',-26,-76,8,24);rect(g,'rgba(0,0,0,.2)',-26,-70,8,1.4);rect(g,'#b8b0a0',-10,-44,6,3)}),
 /* Marisa: grembiule scuro, capelli corti tinti di rosso, occhiali con la catenella, canovaccio, anelli grossi, taglierino */
 NP('f2_marisa',NAME.f2_marisa,10340,GREET.f2_marisa,{skin:'#e0b090',top:'#6a2a3a',bot:'#2a2a36',hair:'#c8281e',s:1.0},(g,b,t)=>{rect(g,'#2a2630',-11,-80+b,22,40);rect(g,'#1a1618',-11,-80+b,22,3);rect(g,'#f4f0e6',-14,-92+b,10,5);rect(g,'#2a4a8a',-14,-90+b,10,1.2);ln(g,'#c8a050',1,[-6,-98+b,-9,-86+b,9,-86+b,6,-98+b]);ln(g,'#2a2a2e',1.2,[3,-101+b,9,-101+b]);dot(g,'#e8c04a',-17,-62,2.6);dot(g,'#e8c04a',18,-60,2.6);ln(g,'#c8ccd0',2,[14,-64,32,-72]);rect(g,'#c8402a',24,-70,10,6)}),
 /* Dante: lucco e cappuccio rossi, corona d'alloro, naso aquilino, il libro sotto il braccio */
 NP('f2_dante',NAME.f2_dante,11380,GREET.f2_dante,{skin:'#e0b896',top:'#a8281e',bot:'#a8281e',hair:'#6a5a4a',long:1,s:1.04},(g,b,t)=>{el(g,'#a8281e',0,-90+b,16,6);poly(g,'#a8281e',[[-12,-110+b],[-4,-118+b],[12,-110+b],[10,-94+b],[-10,-94+b]]);poly(g,'#e0b896',[[-7,-110+b],[9,-108+b],[8,-96+b],[-6,-96+b]]);poly(g,'#e0b896',[[9,-103+b],[16,-100+b],[9,-97+b]]);for(let q=0;q<8;q++)dot(g,'#4a7a3a',-8+q*3,-115+b+(q%2)*1.5,1.8);rect(g,'#6a3a22',-26,-76,12,16);rect(g,'#e8dcc0',-24,-74,9,12);rect(g,'rgba(255,255,255,.15)',-12,-86+b,3,40)}),
 /* Elena: grembiule di tela macchiato di colla e polvere dorata, capelli raccolti con un pennello, occhiali da lavoro */
 NP('f2_elena',NAME.f2_elena,15870,GREET.f2_elena,{skin:'#e0b090',top:'#8a6a5a',bot:'#3a3a46',hair:'#4a2a1a',s:1.0},(g,b,t)=>{rect(g,'#c8b88a',-11,-80+b,22,40);rect(g,'rgba(0,0,0,.1)',-11,-80+b,3,40);for(let q=0;q<9;q++)dot(g,'#e6c264',-8+(q*7)%16,-74+b+q*3.4,1.2);dot(g,'#4a2a1a',-5,-116+b,5.6);ln(g,'#8a6a3a',2,[-6,-120+b,-14,-134+b]);rect(g,'#e6c264',-16,-134+b,4,5);g.strokeStyle='#14110f';g.lineWidth=1;g.beginPath();g.arc(3,-101+b,3.2,0,7);g.stroke();ln(g,'#14110f',1,[6,-101+b,9,-101+b]);rect(g,'#e6c264',16,-72,10,8);rect(g,'#f4f0e6',16,-72,10,2)}),
 /* Matteo: tonaca bianca con il cappuccio, cintura di cuoio, sandali con le calze di lana, barattolo di miele */
 NP('f2_matteo',NAME.f2_matteo,17890,GREET.f2_matteo,{skin:'#e0b090',top:'#f0ece0',bot:'#e8e2d2',hair:'#5a4a3a',long:1,s:1.03},(g,b,t)=>{poly(g,'#e4ded0',[[-14,-92+b],[14,-92+b],[10,-100+b],[-10,-100+b]]);el(g,'#e4ded0',-6,-96+b,12,7);rect(g,'#6a4a2a',-12,-62+b,24,3.4);dot(g,'#b8a060',0,-60.6+b,1.6);rect(g,'#e8a82a',-27,-72,11,13);rect(g,'#6a4a2a',-27,-75,11,4);rect(g,'rgba(255,255,255,.3)',-26,-70,3,9);rect(g,'#5a4a3a',-10,-8,8,3);rect(g,'#c8c0b0',-9,-12,6,5)}),
 /* Ginevra: giacca tecnica nera, fascia sulle orecchie, lampada frontale, capelli legati, guanti, il remo */
 NP('f2_ginevra',NAME.f2_ginevra,20440,GREET.f2_ginevra,{skin:'#e0b090',top:'#1c1c22',bot:'#1c1c22',hair:'#4a2a1a',s:1.0},(g,b,t)=>{rect(g,'#c8281e',-12,-110+b,24,4);rect(g,'#f4f0e6',-1,-92+b,3,34);ln(g,'#4a2a1a',4,[-11,-108+b,-22,-98+b,-20,-84+b]);rect(g,'#2a2a30',7,-112+b,6,5);dot(g,'#f4f0e6',11,-109.6+b,2);if(A.getDK()>.4)glow(g,22,-108+b,36,'255,250,225',.4);ln(g,'#c8c4b8',3,[22,-10,26,-118]);poly(g,'#c8281e',[[22,-130],[32,-126],[28,-96],[24,-98]]);dot(g,'#2a2a30',-14,-56,3)})
];
/* ---- oggetti lungo il percorso ---- */
const LX=[420,1250,1850,2480,3050,3700,4400,5020,5750,6350,7250,7800,8620,9330,9900,10300,10700,11300,11950,12550,13150,13950,14650,15260,15800,16500,17150,17800,18350,19000,19700,20350,20950,21650];
const props=[
 /* zona 1 · Santa Maria Novella: stazione, tram, obelischi, basilica, officina */
 ['f2targa',130,'PIAZZA DELLA STAZIONE'],['f2stazione',420],['f2ztl',720],['f2tram',830],['f2piccioni',1180,4],['f2obelisco',1250],['f2aiuola',1400],['f2panca',1500,1],['f2cestino',1550],['f2smn',1850],['f2obelisco',2150],['f2bici',2260],['f2targa',2330,'VIA DELLA SCALA'],['f2officina',2480],['f2cantonata',2650,'#dca58c'],
 /* zona 2 · San Lorenzo */
 ['f2farola',2760,0],['f2lpelle',3050],['f2caldarroste',3290],['f2moto',3350],['f2mcentrale',3700],['f2cestino',3960],['f2trippaio',4000],['f2lavagna',4090,'LAMPREDOTTO'],['f2sanlorenzo',4400],['f2bici',4650],['f2medici',5020],['f2farola',5280,0],
 /* zona 3 · Piazza del Duomo */
 ['f2targa',5430,'PIAZZA DEL DUOMO'],['f2duomo',5750],['f2guida',6040],['f2piccioni',6160,5],['f2cupola',6350],['f2caldarroste',6600],['f2nicchia',6830],['f2souvenir',7010],['f2campanile',7250],['f2farola',7440,0],['f2battistero',7800],['f2piccioni',7960,4],
 /* zona 4 · Piazza della Signoria */
 ['f2targa',8130,'PIAZZA DELLA SIGNORIA'],['f2david',8420],['f2palvecchio',8620],['f2nettuno',8890],['f2piccioni',9030,5],['f2cosimo',9120],['f2loggia',9330],['f2tavolini',9600,'#3a6a4a'],['f2uffizi',9900],['f2farola',10150,0],['f2buchetta',10300],['f2gatto',10440,'#3a3a3e'],['f2porcellino',10700],
 /* zona 5 · Santa Croce */
 ['f2targa',10930,'PIAZZA DI SANTA CROCE'],['f2dante',11300],['f2panca',11470,1],['f2scroce',11950],['f2caldarroste',12260],['f2piccioni',12360,5],['f2calcio',12550],['f2alluvione',13150],['f2farola',13400,0],
 /* zona 6 · Oltrarno */
 ['f2targa',13520,'LUNGARNO ACCIAIOLI'],['f2pontevecchio',13950],['f2farola',14290,1],['f2pitti',14650],['f2boboli',14960],['f2platano',15040,1.2],['f2sspirito',15260],['f2fontana',15480],['f2platano',15590,1.2],['f2panca',15650],['f2bottega',15800],['f2moto',16010],
 /* zona 7 · Piazzale Michelangelo e San Miniato */
 ['f2targa',16130,'VIALE MICHELANGIOLO'],['f2piazzale',16500],['f2pullman',16820],['f2caldarroste',17000],['f2rampe',17150],['f2cipresso',17390,150],['f2fotografi',17560],['f2sminiato',17800],['f2farola',18110,0],['f2portesante',18350],['f2cipresso',18530,170],
 /* zona 8 · Lungarno */
 ['f2targa',18640,'LUNGARNO SERRISTORI'],['f2torre',19000],['f2farola',19300,1],['f2pescaia',19700],['f2panca',19950,1],['f2farola',20120,1],['f2canottieri',20350],['f2tavolini',20760,'#c8402a'],['f2farola',20820,1],['f2grazie',20950],['f2varco',21650]
];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'firenze2',name:'Firenze 2 · Dalla Stazione all’Arno',width:W1,sky:['#9aa4cc','#f4bcc4','#ffe0c8'],gt:372,gr:['#c8c4b8','#8a867c'],chord:[196,246.9,293.7,370],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da firenze2.txt) --- */
(function(){
const TOPX_F2={
f2_brunelleschi:[
[
"Chi sei e dove sei nato?",
"Filippo Brunelleschi, nato a Firenze nel 1377, figlio di un notaio. Mio padre mi voleva notaio, ma io ho imparato il mestiere dell’orafo: l’oro, i metalli, gli ingranaggi. Tutto ciò che si fa con le mani, caro mio, mi è sempre piaciuto più delle carte."
],
[
"Cos’è stato il concorso del 1401?",
"Si cercava l’artista per le porte di bronzo del Battistero, e fummo in sette a presentare una formella con il Sacrificio di Isacco. Vinse Lorenzo Ghiberti, e io ci rimasi male. Da allora lasciai l’oro e mi dedicai all’architettura; si dice che a Roma, con l’amico Donatello, andassi a studiare le rovine antiche."
],
[
"Perché la cupola era un problema?",
"La cattedrale era cominciata nel 1296 e aspettava da più di un secolo qualcuno capace di coprirla. Il vuoto da chiudere era enorme e a quell’altezza non si potevano alzare armature di legno da terra. Nel 1418 ci fu un concorso e lo vinsi io, con un’idea che a molti sembrava da matti."
],
[
"Come l’hai costruita?",
"Con due calotte, una dentro l’altra, e una scala nell’intercapedine. I mattoni sono messi a spina di pesce, così si reggono man mano che si sale, senza armature da terra. I lavori cominciarono nell’agosto del 1420 e finirono, lanterna esclusa, nel 1436: si calcolano più di quattro milioni di mattoni."
],
[
"Hai inventato anche delle macchine?",
"Certo! Per sollevare pietre e mattoni lassù ho progettato argani e gru mosse dai buoi, e le ho disegnate io, perché nessuno ne aveva viste di simili. Si dice anche che, per non far perdere tempo agli operai, in cima ci fosse perfino un posto dove mangiare e bere."
],
[
"È vera la storia dell’uovo?",
"Si racconta che, per far capire che le idee difficili sembrano facili solo dopo, io abbia sfidato tutti a far stare un uovo dritto sul marmo: nessuno ci riuscì, e io lo schiacciai appena sul fondo. È un racconto che gira da secoli, e lo lascio girare. Io so soltanto che la cupola sta su."
],
[
"Cos’altro hai costruito?",
"L’Ospedale degli Innocenti, cominciato nel 1419, un ricovero per i bambini abbandonati, con un portico leggero di colonne e di archi. Poi la Sagrestia Vecchia di San Lorenzo, la Cappella dei Pazzi e, per ultimo, Santo Spirito, cominciato nel 1444. Ho sempre cercato le proporzioni giuste: un quadrato, un cerchio, e tutto torna."
],
[
"Cos’è la prospettiva?",
"È il modo di far sembrare vera la profondità su una superficie piatta: tutte le linee vanno a un punto lontano, il punto di fuga. Con degli esperimenti ottici ho mostrato come si fa, e poi i pittori l’hanno messa nei loro dipinti. Masaccio mi ha perfino ritratto in un affresco, al Carmine."
],
[
"Come lavoravi con gli altri artisti?",
"Con Ghiberti, che lavorò con me alla cupola all’inizio, non ci siamo mai capiti. Con Donatello, invece, ci intendevamo con un’occhiata. Io sono uno che parla poco e disegna molto, e chi non sa leggere un disegno, con me, fa fatica."
],
[
"Come è finita la tua vita?",
"Sono morto a Firenze il 15 aprile del 1446, a quasi settant’anni. Mi seppellirono nella cattedrale, un onore raro per un architetto, ma col tempo si perse la memoria del posto: la mia tomba fu ritrovata solo nel 1972, negli scavi dell’antica Santa Reparata. E la lanterna in cima alla cupola la finirono altri dopo di me."
],
[
"Cosa ti sorprende di più di Firenze oggi?",
"Quella fila di gente che sale i miei 463 gradini e poi fa ritratti in un lampo con una scatoletta! E i carri di ferro, senza cavalli né buoi, che corrono sulle rotaie. Ma la Cupola non è cambiata: dà ancora ombra a mezza città."
],
[
"Posso salutarti e proseguire la mia passeggiata?",
"Va’ pure, Pierpaolo. Scendi verso Piazza della Signoria: a mezzogiorno è piena di statue e di buon vino. E se alzi lo sguardo, vedrai che la mia cupola ti segue per un bel pezzo."
]
],
f2_dante:[
[
"Chi sei e dove sei nato?",
"Dante Alighieri, nato a Firenze nel 1265, fra maggio e giugno, in una famiglia della piccola nobiltà. Studiai grammatica, retorica, filosofia e teologia, e per me il Battistero di San Giovanni è sempre stato la chiesa di casa: ci fui battezzato. Sono fiorentino fino al midollo, caro mio, anche quando non ero a Firenze."
],
[
"Chi era Beatrice?",
"Una fanciulla fiorentina che gli studiosi identificano con Bice Portinari: la incontrai che avevo poco più di otto anni, e non la dimenticai più. Morì nel 1290, e per lei scrissi la \"Vita Nova\"; poi tornò, in un altro modo, nella Commedia. Gli amori veri, amico mio, non si sciolgono con gli anni."
],
[
"Perché ti sei dato alla politica?",
"A Firenze, per partecipare al governo, bisognava iscriversi a un’Arte, cioè a una corporazione: nel 1295 mi iscrissi a quella dei Medici e Speziali. Nel 1300 fui eletto priore, una delle cariche più alte della città. Allora Firenze era divisa fra i guelfi Bianchi e i guelfi Neri, e le liti non finivano mai."
],
[
"Perché sei stato mandato in esilio?",
"Nel 1301 ero a Roma, in missione dal papa Bonifacio VIII, e intanto in città presero il potere i Neri. Nel 1302 mi condannarono, e se mi avessero preso mi avrebbero ucciso; persi la casa e i beni. Non dirò di più, Pierpaolo: è una ferita che il tempo non ha chiuso."
],
[
"Dove sei vissuto dopo?",
"Di corte in corte, ospite di signori più o meno generosi: a Verona, presso Cangrande della Scala, e infine a Ravenna, presso i da Polenta. Chi vive dell’ospitalità altrui impara presto quanto costa, e quanto è lunga la strada del ritorno."
],
[
"Cos’è la Commedia?",
"Un viaggio attraverso Inferno, Purgatorio e Paradiso, che scrissi in volgare, la lingua che si parlava a Firenze, e non in latino: volevo che la capisse anche chi non era un dotto. Mi dicono che da quella lingua sia nato poi l’italiano di tutti. Io mi accontento di sapere che si legge ancora."
],
[
"Perché non sei tornato quando potevi?",
"Nel 1315 ci fu un’amnistia per gli esiliati, ma per rientrare avrei dovuto ammettere colpe che non avevo e pagare. Rifiutai, e fu una scelta che mi costò cara. Ho preferito la dignità al ritorno."
],
[
"Dove sei sepolto?",
"A Ravenna, dove morii il 14 settembre del 1321, poco dopo aver finito il Paradiso. Qui, in Santa Croce, hanno fatto un monumento per me, un cenotafio, cioè una tomba senza nessuno dentro. Quando passo davanti, mi viene da sorridere: mi cercano dove non sono."
],
[
"Cosa pensi di questa statua e di questa piazza?",
"La statua è del 1865, di Enrico Pazzi, fatta per i seicento anni dalla mia nascita: mi hanno dato una faccia più severa del vero. Mi dicono che ogni giugno la piazza si riempie di sabbia e quattro squadre ci giocano al calcio a modo loro, picchiandosi per una vitella: ai miei tempi ci si picchiava anche senza premio. Per fortuna oggi è quieta."
],
[
"Com’era questa zona ai tuoi tempi?",
"Quando ero giovane la basilica non c’era ancora: i francescani cominciarono a costruirla nel 1295, e vidi salire i primi muri. Oggi mi dicono che dentro riposano Michelangelo, Galileo, Machiavelli e tanti altri: non li ho conosciuti, ma credo che la compagnia sia buona."
],
[
"Cosa ti sorprende di più della Firenze di oggi?",
"Che il fiorentino, la mia lingua, sia diventato la lingua di tutta l’Italia, e che i fiorentini continuino a dire \"icché\" per \"che cosa\" e \"la hasa\" per \"la casa\", con quella gorgia. E poi i carri di ferro che corrono da soli sulle rotaie, e le persone che parlano da sole con una scatoletta in mano. Ma litigare e chiacchierare, qui, non è mai passato di moda."
],
[
"Posso salutarti e proseguire la mia passeggiata?",
"Va’ pure, Pierpaolo, e buon cammino. Passa il fiume e vai in Oltrarno: lì le botteghe lavorano ancora con le mani, come ai miei tempi. Se hai sete, chiedi un bicchiere, e stai attento al conto."
]
],
f2_giulia:[
[
"Chi sei e dove sei nata?",
"Giulia, nata all’Isolotto, il quartiere di là d’Arno, e ora il mio tram ci passa proprio davanti: ironia della sorte. Guido da otto anni e mi garba ancora: la città vista dal finestrino cambia a ogni curva."
],
[
"A che ora cominci?",
"Molto prima dell’alba. Il centro dorme ancora, ma la stazione è già sveglia: pendolari, studenti, operai, gente con il trolley che scappa per il primo treno. A quest’ora, con la foschia che sale dall’Arno, Firenze è tutta per chi lavora."
],
[
"Che tram guidi?",
"La T1, che parte da qui, da Alamanni-Stazione, passa sull’Arno su un ponte nuovo e arriva a Scandicci; dall’altra parte arriva fino all’ospedale di Careggi. La T1 corre dal 2010. La T2, invece, va all’aeroporto."
],
[
"Il tram va in centro?",
"No, il centro storico si gira a piedi: la ZTL, la zona a traffico limitato, tiene fuori quasi tutte le auto, e le strade sono strette quanto un carro. Per i tragitti lunghi c’è il tram; per il resto, scarpe comode! Da qui al Duomo sono una decina di minuti, quindici se ti fermi a guardare."
],
[
"Com’è questa stazione?",
"Bassa, lunga, di pietra chiara e di vetro, fatta negli anni Trenta da un gruppo di giovani architetti toscani. Allora fece discutere, oggi la considerano un capolavoro di quel modo di costruire che si chiama razionalismo. Io mi accontento che il tabellone dica la verità."
],
[
"Chi prende il tram?",
"Di tutto: studenti che vanno a lezione, nonne con la spesa, operai, infermieri che vanno a Careggi, turisti che vanno in aeroporto con la valigia. Il fiorentino, quando sale, non guarda il telefono: guarda se c’è posto a sedere."
],
[
"Come parlano i fiorentini?",
"Con la gorgia: la \"c\" in mezzo alle parole diventa un’aspirata, e \"la casa\" suona quasi \"la hasa\". Poi ci sono le parole nostre: \"icché\" vuol dire che cosa, \"babbo\" è il papà, \"bimbo\" il bambino, \"mi garba\" mi piace, \"grullo\" sciocco, \"bono\" buono. E se ti dico \"ganzo\", vuol dire bello, in gamba."
],
[
"Cosa si mangia a colazione?",
"Un cappuccino e un cornetto, in piedi, al banco, in due minuti. Chi ha più tempo si prende anche la schiacciata, il pane basso unto d’olio, che qui si mangia a ogni ora. In stazione, a quest’ora, i bar sono più veloci del tram."
],
[
"Com’è Firenze a novembre?",
"Bagnata e profumata: foschia sull’Arno, ombrello nello zaino, caldarroste agli angoli e l’olio nuovo, che si mangia con la fettunta, una fetta di pane tostato con aglio e olio. È la stagione dei fiorentini: di turisti ce ne sono meno, e si torna a respirare."
],
[
"Cosa sono quegli obelischi in piazza?",
"Due obelischi di marmo, ciascuno su quattro tartarughe di bronzo: segnavano le mete del Palio dei Cocchi, una gara di carri che si correva proprio qui. Oggi la piazza ospita una gara più modesta: chi trova la panchina libera."
],
[
"Cosa fai dopo il turno?",
"Mi tolgo il giubbotto e vado in San Frediano, di là d’Arno, a sedermi da un vinaino con le amiche. Un bicchiere di rosso, un crostino, due chiacchiere, e a letto presto, perché domani ci si rialza prima del sole."
],
[
"Posso salutarti e proseguire la mia passeggiata?",
"Va’ pure, Pierpaolo, e buona giornata! Vai a San Lorenzo: Sandro, il trippaio, ti aspetta con il pentolone. Se ti chiede se lo vuoi bagnato, di’ di sì: fidati di una tranviera."
]
],
f2_sandro:[
[
"Chi sei e dove sei nato?",
"Sandro, nato in San Frediano, di là d’Arno. Faccio il trippaio da trent’anni, e il mestiere me l’ha insegnato mio zio, che aveva il carretto qui vicino. In famiglia, il pentolone si tratta meglio di un parente."
],
[
"Cos’è il lampredotto?",
"Il quarto stomaco del bovino. Si lava bene e si cuoce per ore nel brodo con pomodoro, cipolla, prezzemolo e sedano, finché diventa tenero. Detto così, forse non invoglia: assaggialo e poi ne parliamo."
],
[
"Come si ordina?",
"Si dice \"un panino con il lampredotto, bagnato\". Bagnato vuol dire che il coperchio del panino lo tuffo nel brodo, così è morbido e gocciola. Poi scegli: salsa verde, piccante, o tutte e due."
],
[
"Cos’è la salsa verde?",
"Prezzemolo, aglio, acciughe, capperi, e a volte l’uovo sodo, con olio e aceto. È la salsa che taglia la ricchezza della carne. Il piccante, invece, è per chi vuole sentirsi vivo."
],
[
"E la trippa alla fiorentina?",
"È un’altra cosa: la trippa in umido, cotta nel pomodoro, da mangiare nel piatto. Il lampredotto invece è in panino, da mangiare in piedi, per strada. Qui sono due religioni, e io le professo tutte e due."
],
[
"Perché il pane toscano non sa di sale?",
"Si dice che fosse per via delle tasse sul sale, nel Medioevo: era così caro che nel pane lo tolsero. Vero o no, il pane sciocco, cioè senza sale, va benissimo con i salumi, con i formaggi e con l’olio. Il lampredotto, poi, il sale ce l’ha di suo."
],
[
"Cos’è il Mercato Centrale?",
"Una grande costruzione di ferro, ghisa e vetro, progettata da Giuseppe Mengoni, lo stesso della Galleria di Milano, e finita nel 1874. Giù ci sono macellai, pescivendoli, ortolani e formaggi, e su, dal 2014, una sala con tanti banchi da mangiare. Il mercato vero, però, per me è quello di sotto."
],
[
"Com’è la vera bistecca alla fiorentina?",
"È una costata con l’osso a T, di razza Chianina, alta almeno tre dita, cotta sulla brace e servita al sangue. Se la chiedi ben cotta, al ristorante ti guardano storto. Si paga all’etto, e di solito si divide in due."
],
[
"Cosa si mangia a novembre?",
"L’olio nuovo con la fettunta, e poi le zuppe: la ribollita, che si chiama così perché si bolle due volte, e la pappa al pomodoro per chi ha nostalgia dell’estate. E le castagne, le caldarroste, che a San Lorenzo profumano ogni angolo."
],
[
"Come si riconosce un buon trippaio?",
"Dalla fila di gente del posto, dal pentolone sempre in caldo e dal coltello ben affilato. Se hai il menù in sei lingue con le foto, vai altrove. Se trovi il cartello scritto a mano e due persone in grembiule che litigano, sei nel posto giusto."
],
[
"Cos’è la basilica qui accanto?",
"San Lorenzo, la chiesa dei Medici: l’ha ricostruita Brunelleschi, ma la facciata non è mai stata finita e i mattoni sono ancora a vista. A noi del quartiere ci pare bella lo stesso, perché è sincera."
],
[
"Posso salutarti e proseguire la mia passeggiata?",
"Va’ pure, Pierpaolo, e mangia bene! Vai verso il Duomo, che è dietro l’angolo, e guarda in su: ti aspetta uno che ha costruito una cupola senza impalcature. Se ti viene fame, sai dove sono."
]
],
f2_marisa:[
[
"Chi sei e dove sei nata?",
"Marisa, nata a Santa Croce, a due passi da qui. Il vinaino era del mio babbo e ora lo gestisco io, da più di vent’anni. Ci passa di tutto: impiegati, studenti, signore con le borse e turisti persi."
],
[
"Cos’è un vinaino?",
"Un posticino piccolo, dove si beve il vino a bicchiere e si mangia qualcosa di freddo: affettati, formaggi, crostini. Si sta in piedi al banco, o fuori sul marciapiede. Niente tovaglie e niente fretta."
],
[
"Cosa sono le buchette del vino?",
"Piccole porte ad arco nei muri dei palazzi: i nobili vendevano il vino delle loro tenute direttamente dalla strada. Un resoconto scritto nel 1634 racconta che durante la peste si usavano per vendere senza toccarsi. Oggi in città ne contano più di 180, e qualcuna è tornata a servire vino, caffè e gelato."
],
[
"Cos’è il Chianti?",
"Il vino rosso delle nostre colline, fra Firenze e Siena. Si beve con i salumi, con i formaggi e con la carne alla brace. Il fiasco impagliato è l’immagine che tutti hanno in testa, ma il vino buono, ormai, lo trovi anche in bottiglia: l’importante è il bicchiere."
],
[
"Cosa sono i crostini neri?",
"Crostini di pane toscano con un patè di fegatini di pollo: è il nero che dà il nome. Sono l’antipasto più fiorentino che ci sia e li trovi in ogni trattoria. Mangiane uno con un goccio di vino e capisci tutto."
],
[
"Cosa si mangia di solito in un vinaino?",
"Salumi, come la finocchiona, che è un salame con i semi di finocchio, formaggi come il pecorino, il pane toscano e l’olio. E la schiacciata, il pane basso con l’olio e il sale grosso, che a Firenze si mangia a tutte le ore."
],
[
"E il dolce?",
"Cantucci da inzuppare nel vin santo, un vino dolce da dessert. È il modo di chiudere il pasto senza fare tanta fatica. Se ti avanza un cantuccio, bimbo, inzuppalo ancora."
],
[
"Cos’è quel David in piazza?",
"Qui vicino, davanti a Palazzo Vecchio, c’è un David di marmo: è una copia, messa nel 1910. L’originale è alla Galleria dell’Accademia. Noi fiorentini lo andiamo a vedere ogni tanto, ma la copia ci basta per darci un appuntamento: \"ci si vede sotto il David\"."
],
[
"Cos’è il Porcellino?",
"Un cinghiale di bronzo, in realtà, sotto la Loggia del Mercato Nuovo, vicino a Ponte Vecchio. Si strofina il naso per tornare a Firenze e si butta una moneta nella bocca: se scivola nella grata, porta fortuna. E i soldi, per fortuna, vanno in beneficenza."
],
[
"Come si fa a mangiare bene senza farsi raggirare?",
"Guarda dove mangiano i fiorentini: il menù corto, il pane toscano, il vino della casa. Diffida dei cartelli con le foto dei piatti e dei camerieri che ti fermano per strada. A Firenze il posto buono si riconosce dalla gente che sa già cosa ordinare."
],
[
"Cosa fai quando chiudi?",
"Sistemo i bicchieri, saluto i clienti fissi e vado a fare quattro passi lungo l’Arno. A novembre il fiume ha la foschia e le luci del Ponte Vecchio sembrano di un altro secolo. Poi a letto presto: domani ci si rialza."
],
[
"Posso salutarti e proseguire la mia passeggiata?",
"Va’ pure, bimbo, e stai attento al conto! Cammina verso Santa Croce: ai piedi della basilica c’è Dante che ti aspetta. Salutalo da parte mia, e digli che il suo vino è sempre pronto."
]
],
f2_elena:[
[
"Chi sei e dove sei nata?",
"Elena, nata in San Frediano, a due passi da qui. Ho imparato il mestiere a bottega, da un maestro che non parlava mai: guardavo le sue mani e rifacevo. Ci ho messo anni, e ogni tanto penso di non aver ancora finito."
],
[
"Cos’è la doratura?",
"Si copre il legno, di una cornice o di un mobile, con la foglia d’oro, sottile quasi come un respiro. È una tecnica che a Firenze si usa dal Quattrocento, e la usano ancora le botteghe come la mia."
],
[
"Perché si dice \"Diladdarno\"?",
"Oltrarno, o \"Diladdarno\", cioè al di là dell’Arno, è il quartiere sull’altra riva. Qui ci sono le botteghe: orafi, incisori, rilegatori, intarsiatori, restauratori. Gli orafi stanno sul ponte, gli altri artigiani nelle vie qui attorno."
],
[
"Com’è la tua giornata in bottega?",
"Si comincia presto, con il caffè al banco e le porte aperte. Si lavora piano, con la radio bassa, e a mezzogiorno una schiacciata e un po’ di sole sul marciapiede. La sera si ripulisce, perché la foglia d’oro finisce dappertutto: ne trovo nei capelli anche la domenica."
],
[
"Cos’è Santo Spirito?",
"La piazza del quartiere: alberi, una fontana di pietra, bar, studenti sui gradini della chiesa, bambini con il pallone. Dal lunedì al venerdì, di mattina, c’è il mercatino; la seconda domenica del mese quello dell’artigianato; la terza, la Fierucolina, con i prodotti dei contadini."
],
[
"E la chiesa?",
"La basilica di Santo Spirito è di Brunelleschi, e fuori è un po’ sbrigativa: la facciata è liscia, senza rivestimento. Ma dentro, ti dico, è tutta colonne e archi chiari, in perfetto ordine. E dicono che il crocifisso di legno sia di Michelangelo ragazzo."
],
[
"Perché sul Ponte Vecchio ci sono gli orafi?",
"Dal 1593, per ordine del granduca Ferdinando I: prima c’erano i macellai, e l’odore arrivava fin dentro il corridoio dei Medici. Così li sostituì con orafi e gioiellieri, che sono ancora lì. Io non vendo l’oro: lo metto sulle cose, che è un’altra faccenda."
],
[
"Cosa c’è dietro Palazzo Pitti?",
"Il Giardino di Boboli: viali, siepi, statue, grotte e fontane. Il palazzo lo comprò nel 1549 Eleonora di Toledo, la moglie di Cosimo I, e i Medici ne fecero la loro residenza. Io ci vado la domenica a sedermi, quando posso, e a guardare i cipressi."
],
[
"Come si impara questo mestiere?",
"A bottega, guardando e rifacendo, per anni. Non c’è scorciatoia: la foglia si rompe se hai fretta. E bisogna avere pazienza anche con i clienti, che dopo aver saputo il prezzo di un’ora di lavoro dicono: \"ma proprio tanto?\"."
],
[
"Cosa vuol dire essere di Santo Spirito?",
"Che sei di un quartiere più che di una zona: ci si sente appartenere. A giugno, per il Calcio Storico, i Bianchi di Santo Spirito sono i nostri, e se ci scherzi sopra ti guardano storto. Io tifo per i Bianchi da quando ero una bimba."
],
[
"Cosa si fa la sera in Oltrarno?",
"Aperitivo in piazza, vino e stuzzichini, e poi cena nelle trattorie di San Frediano. A novembre, dopo il lavoro, si sta dentro, ma c’è sempre un tavolino fuori con le coperte sulle sedie. Il rumore della piazza arriva fino qui: chi dorme poco, ci si abitua."
],
[
"Posso salutarti e proseguire la mia passeggiata?",
"Va’ pure, Pierpaolo, e non farti scappare il tramonto! Sali al Piazzale Michelangelo e poi ancora più su, fino a San Miniato: se arrivi presto, trovi i monaci che cantano. E se vedi un po’ d’oro sul vetro, è passato di qua il sole."
]
],
f2_matteo:[
[
"Chi sei e da dove vieni?",
"Matteo, monaco di San Miniato. Sono nato nel Mugello, a nord di Firenze, e sono entrato in monastero a ventiquattro anni, dopo aver fatto altri mestieri. Da allora la mia casa è questa collina."
],
[
"Chi sono i monaci olivetani?",
"Monaci benedettini: seguiamo la regola di san Benedetto, che dice di pregare e di lavorare. Per questo la nostra giornata è fatta di canto, di studio e di lavoro manuale: l’orto, le api, il laboratorio."
],
[
"Com’è la tua giornata?",
"Si comincia prima dell’alba con la preghiera. Poi il lavoro e, nel tardo pomeriggio, a novembre verso le cinque e mezza, la messa cantata, seguita dai vespri. Si cena presto, poi silenzio: la sera qui è lunga e buona."
],
[
"Cos’è il canto gregoriano?",
"È il canto antico della liturgia, a una voce sola, senza strumenti, in latino. Non si canta per fare bella figura, ma per pregare: se piace a chi ascolta, è un di più. Puoi entrare, ma in silenzio."
],
[
"Cosa producete?",
"Miele, tisane, liquori alle erbe e saponi, che vendiamo in un piccolo negozio accanto alla basilica. Le api le curo io, e ogni anno ho una nuova ragione per fidarmi di loro."
],
[
"Chi era san Miniato?",
"Un martire dei primi secoli. Si dice che, dopo essere stato decapitato, abbia preso la testa in mano, attraversato l’Arno e sia salito fin quassù, dove poi fu costruita la chiesa. Una leggenda, certo, ma qui nessuno la racconta come una barzelletta."
],
[
"Com’è questa basilica?",
"Una delle chiese romaniche più belle di Firenze: la costruzione cominciò nel 1018. La facciata è di marmo bianco e verde, con un mosaico dorato in alto; dentro c’è il pavimento a intarsio con i segni dello zodiaco e, nell’abside, un altro mosaico. Per me il segreto è la luce: a quest’ora entra di traverso."
],
[
"E il campanile?",
"Durante l’assedio di Firenze del 1529-1530 fu usato per i cannoni, e si racconta che Michelangelo lo proteggesse con dei materassi contro le palle nemiche. Non so quanto sia vero, ma i materassi mi sembrano un’idea da fiorentino."
],
[
"Cos’è il cimitero dietro la basilica?",
"Le Porte Sante: un cimitero monumentale con le tombe di scrittori, di artisti e di tante famiglie fiorentine, fra cui Carlo Collodi, l’autore di Pinocchio. Molti fiorentini salgono la domenica a trovare i loro cari. È un luogo di silenzio, con la vista più bella di Firenze."
],
[
"Cosa pensi dei turisti?",
"Salgono per la vista e per il tramonto, ed è giusto: chi arriva quassù trova sempre qualcosa. Chiediamo solo silenzio durante la messa e i vespri, e di non fare foto in chiesa. Il Piazzale, giù, è il salotto della città; qui è la stanza della preghiera."
],
[
"Com’è l’inverno lassù?",
"Freddo e umido, con la nebbia che sale dall’Arno e copre la città: sembra di stare sopra un mare. Si accende la stufa, si mangia semplice, una zuppa di pane e verdure, e si ringrazia. Le campane, nella nebbia, sono ancora più belle."
],
[
"Posso salutarti e proseguire la mia passeggiata?",
"Va’ pure, Pierpaolo. Scendi per le Rampe, verso il fiume: di notte l’Arno ha un suo modo di parlare. In fondo, vicino al pontile dei remi, c’è una ragazza che ti aspetta. Buon cammino, e un sorso d’acqua ogni tanto!"
]
],
f2_ginevra:[
[
"Chi sei e dove sei nata?",
"Ginevra, nata a Firenze, in Gavinana, a due passi dal fiume. Studio Scienze naturali, e la sera e la domenica remo con la mia squadra. L’Arno per me è come il cortile di casa, anche se ogni tanto ci fa i dispetti."
],
[
"Come si rema sull’Arno?",
"In barche lunghe e sottili, a quattro o a otto, seduti: si va avanti guardando indietro! Il timoniere vede la strada e dice quando virare, e gli altri si fidano della sua voce. Un errore, e la barca si mette di traverso."
],
[
"Dove si rema?",
"Nel tratto di fiume fra le pescaie del centro, con le sponde di pietra e i ponti. Si passa sotto il Ponte Vecchio e, quando il sole cala, il fiume diventa tutto oro: ti dimentichi dei muscoli. Poi arrivi alla pescaia e ti fermi."
],
[
"Cos’è la pescaia?",
"Una soglia bassa che attraversa tutto il fiume e frena la corrente; l’acqua ci cade sopra con quel rumore di cascata. Un tempo, fuori dalle mura, c’erano i mulini mossi da un canale che partiva a monte di questa pescaia. Oggi, invece, ci si ferma a guardarla."
],
[
"Chi vive sul fiume?",
"I cormorani neri, soprattutto, in fila sulla pescaia di Santa Rosa: da una ventina d’anni sono fissi. Poi gabbiani, anatre e, ogni tanto, un airone cenerino che sta fermo come una statua. Io li saluto tutti: sono i miei compagni di allenamento."
],
[
"Cosa vuol dire \"un troveresti nemmeno l’acqua in Arno\"?",
"Si dice a chi non trova ciò che ha sotto il naso: \"tu non troveresti nemmeno l’acqua in Arno!\". Il fiorentino ha un proverbio per ogni occasione, e di solito è un’offesa gentile. Io lo dico ai miei compagni di squadra quando perdono un remo."
],
[
"Com’è stata l’alluvione del 1966?",
"Il 4 novembre del 1966 l’Arno uscì dagli argini e invase la città, con acqua e fango fino a quasi cinque metri in certe strade. Morirono trentacinque persone, e furono danneggiate moltissime opere d’arte; arrivarono giovani da tutto il mondo ad aiutare, e li chiamarono \"angeli del fango\". Su molti muri c’è ancora la targa con l’altezza dell’acqua, e ogni volta che passo la guardo."
],
[
"Quando sale il fiume?",
"In autunno, con le piogge: noi guardiamo il livello e, se è troppo alto, non si esce. D’estate, invece, è basso e quasi tranquillo. Nessuno, qui, prende l’Arno alla leggera."
],
[
"Quali sono le società di canottaggio?",
"Ce ne sono diverse: la Canottieri Firenze, del 1886, sta sotto gli Uffizi, in un lungo corridoio dove un tempo stavano i cavalli delle guardie dei Medici. Qui sul Lungarno Ferrucci c’è la Comunale. La più antica d’Italia, però, è a Limite sull’Arno, a valle di Firenze, ed è del 1861."
],
[
"Che feste ci sono sul fiume?",
"Il 24 giugno, San Giovanni, il patrono di Firenze, i fuochi d’artificio partono dal Piazzale Michelangelo e si riflettono nell’Arno. La sera del 7 settembre c’è la Rificolona: i bambini sfilano con le lanterne di carta colorata fino a Piazza Santissima Annunziata. E a Pasqua, nel Duomo, lo Scoppio del Carro: una colombina di fuochi che accende un carro trainato da buoi."
],
[
"Com’è il lungarno la sera?",
"Si cammina, si prende un gelato anche a novembre, si fa aperitivo ai tavolini con i lumini e le coperte. Gli innamorati si fermano sui ponti e i ciclisti sfrecciano. Firenze ha il difetto di essere bellissima: la gente non si abitua mai."
],
[
"Posso salutarti e proseguire la mia passeggiata?",
"Va’ pure, Pierpaolo, ma non correre. Cammina lungo il lungarno fino al Ponte alle Grazie e poi guarda l’acqua fra due pile del ponte, con calma. Se vedi una strada di luce, seguila."
]
]
};
Object.assign(TOPX,TOPX_F2);
})();
