/* ---------- NAPOLI 2 · Da Porta Nolana al golfo (Porta Nolana e Porta Capuana, Spaccanapoli e San Gregorio Armeno, Via dei Tribunali e il Duomo, il Rione Sanità, Via Toledo e Piazza del Plebiscito, Santa Lucia e Castel dell'Ovo, Mergellina e Posillipo, il Vomero e Castel Sant'Elmo, il lungomare e il Vesuvio) ---------- */
/* Un'intera giornata da sinistra a destra: alba al mercato di Porta Nolana, mattina fra Spaccanapoli e San Gregorio Armeno, tarda mattina in Via dei Tribunali e al Duomo,
   mezzogiorno nel Rione Sanità, primo pomeriggio in Via Toledo e in Piazza del Plebiscito, pomeriggio dorato sul mare di Santa Lucia, tardo pomeriggio a Mergellina e a Posillipo,
   tramonto dal Vomero, notte sul lungomare davanti al Vesuvio. In fondo al lungomare c'è il varco.
   Testi, tappe e dialoghi vengono da napoli2.txt (definitivi, usati senza riscriverli). Gli oggetti stanno in elementi.js (nomi che iniziano per "n2").
   Il tono per i temi delicati (catacombe, Fontanelle, la Napoli sotterranea) è sempre sobrio e rispettoso. */
(function(){
const GT=372,W1=26630;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln,gatto}=PR._rm;
const {cas,cupo,mat,plat,olmo,pino,cedro,cipr,pers,gente}=PR._md;
const {nf,lit,tor,stesi,nicchia,scoglio}=PR._n2;
const md=(i,n)=>((i%n)+n)%n;
const LIT='rgb(255,226,150)';
const Z=[0,2500,5100,7600,10600,13700,16500,20300,23300,W1+400];   /* inizio di ognuna delle 9 zone */
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* ---- cielo: alba rosa e oro, mattina limpida, mezzogiorno bianco, pomeriggio dorato, tramonto rosso-arancio, crepuscolo viola, notte blu cobalto ---- */
const SKY=[[0,['#7a8ac4','#f4a8b4','#ffd2a8']],[1100,['#5a9cec','#f0c8c4','#ffe4b8']],[2500,['#2a8ae8','#7ac0f4','#dcf0fa']],[5100,['#1a78e0','#68b4f2','#d8eefa']],[7600,['#2a8cf0','#8cc8f6','#f2f6f8']],[10600,['#2a84e4','#80bef0','#f6f0dc']],[13700,['#3a84dc','#a8c8e8','#fbe6b4']],[16500,['#5a80cc','#eab890','#ffc88a']],[18800,['#6a64b0','#f0905c','#ffb060']],[20300,['#5a3c98','#e0584c','#ff9a4c']],[21800,['#4a2e88','#c04a78','#f4825a']],[22800,['#1a2c78','#34408e','#7a5a90']],[23600,['#0c1a58','#16306e','#2c4a86']],[24600,['#081448','#0e2260','#1e3a78']],[99999,['#081448','#0e2260','#1e3a78']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Napoli, dall’alba alla notte. Parti dal mercato di Porta Nolana, quando i banchi del pesce si aprono sotto le due torri aragonesi; poi Spaccanapoli ti porta fra i chiostri di maiolica e i presepi di San Gregorio Armeno. Nella tarda mattina Via dei Tribunali, il Duomo e le pizzerie; a mezzogiorno il Rione Sanità, dove è nato Totò. Nel primo pomeriggio Via Toledo, la Galleria Umberto, il Teatro San Carlo e Piazza del Plebiscito; poi il Castel dell’Ovo sul mare. Nel tardo pomeriggio Mergellina e Posillipo, dove ti aspetta un antico poeta; al tramonto il Vomero e Castel Sant’Elmo guardano tutto il golfo; a notte il lungomare e il Vesuvio. Il tempo qui si piega: gli abitanti di ogni epoca ti vengono incontro, e la città è quella di oggi.";
const LKTXT=[
"Il mercato di Porta Nolana nasce ai piedi di una porta del Quattrocento, voluta dagli Aragonesi su disegno di Giuliano da Maiano. Le sue due torri rotonde si chiamano Fede e Speranza. Ogni mattina il pesce arriva dal golfo: alici, polpi, vongole, cozze, triglie. Si sceglie parlando con il banco, a voce alta.",
"Porta Capuana fu costruita nel 1484, per volere di re Ferrante d’Aragona, su disegno di Giuliano da Maiano. Il suo arco di marmo bianco sta fra due torri chiamate Onore e Virtù. Accanto c’è Castel Capuano, più antico di Castel Nuovo. Oggi intorno si sentono molte lingue.",
"A Napoli il caffè si beve in piedi, al banco, in pochi sorsi. Esiste l’usanza del caffè sospeso: si pagano due caffè e se ne beve uno; l’altro resta pagato per uno sconosciuto che lo chiederà. Le origini non sono certe: c’è chi le fa risalire al dopoguerra. Ogni 10 dicembre c’è una giornata dedicata.",
"La sfogliatella è il dolce simbolo della città: la riccia ha una sfoglia a mille strati e un ripieno di ricotta, semolino e canditi; la frolla ha la pasta friabile. Si racconta che sia nata nel Seicento nel convento di Santa Rosa, sulla costiera amalfitana, e che nel 1818 l’oste Pasquale Pintauro, in Via Toledo, ne abbia fatto la versione che conosciamo.",
"Spaccanapoli è la lunga strada dritta che \"spacca\" il centro antico in due, seguendo il vecchio decumano inferiore dei Greci e dei Romani. Cambia nome più volte, ma si riconosce da lontano: stretta, piena di chiese, botteghe, panni stesi e motorini. Il centro storico di Napoli è patrimonio mondiale dell’UNESCO dal 1995.",
"In Piazza del Gesù Nuovo la chiesa ha la facciata di pietra tutta a punte, come un diamante. Di fronte c’è Santa Chiara, voluta nel Trecento dal re Roberto d’Angiò e dalla regina Sancia. Il suo chiostro è un giardino di maioliche gialle, verdi e azzurre, ridisegnato da Domenico Antonio Vaccaro fra il 1739 e il 1742. Il 4 agosto 1943 un bombardamento distrusse gran parte della chiesa; il chiostro si salvò.",
"Nella Cappella Sansevero, nel 1753, lo scultore napoletano Giuseppe Sanmartino finì il Cristo velato: un corpo di marmo coperto da un velo sottilissimo, scolpito nello stesso blocco. Lo volle il principe Raimondo di Sangro. Si racconta che il principe, uomo di scienza e di alchimia, avesse insegnato allo scultore a \"trasformare\" la stoffa in marmo: è una leggenda.",
"San Gregorio Armeno è la \"via dei presepi\": una stradina fra Via dei Tribunali e Spaccanapoli, piena di botteghe di artigiani. L’arte del presepe napoletano raggiunse la sua gloria nel Settecento, quando, si dice, re Carlo di Borbone amava allestirlo a corte. Ci sono i pastori antichi e anche personaggi di oggi.",
"Via dei Tribunali è l’antico decumano maggiore della città greca e romana. Oggi è la strada delle pizzerie: a ogni porta un forno a legna, e le code di chi aspetta il proprio numero. L’arte del pizzaiolo napoletano è patrimonio immateriale dell’UNESCO dal dicembre 2017. Alcune pizzerie sono storiche: l’Antica Pizzeria Port’Alba dice di essere aperta dal 1738, Da Michele dal 1870.",
"Il Duomo di Napoli, dedicato a Santa Maria Assunta, fu iniziato nel 1294 per volere di Carlo I d’Angiò; la facciata neogotica è dell’inizio del Novecento. Qui si custodisce il sangue di San Gennaro, il patrono: tre volte l’anno (il sabato prima della prima domenica di maggio, il 19 settembre e il 16 dicembre) si aspetta che nell’ampolla si sciolga, e la città attende con il fiato sospeso. La Cappella del Tesoro è del Seicento.",
"In Via dei Tribunali si apre una piccola chiesa ottagonale: il Pio Monte della Misericordia, fondato nel 1601 da sette giovani nobili per aiutare i poveri. Sull’altare c’è un quadro di Caravaggio, Le sette opere di Misericordia, dipinto nel 1607 a Napoli, dove il pittore era arrivato da poco.",
"Sotto Piazza San Gaetano c’era l’agorà dei Greci, poi il foro dei Romani. Sotto la chiesa di San Lorenzo Maggiore si vedono le strade antiche e il macellum, il mercato romano. Da qui si scende anche a Napoli Sotterranea: cisterne e cunicoli scavati nel tufo, usati come rifugi durante la guerra.",
"La Sanità è un rione in una valle ai piedi della collina di Capodimonte. Nel 1809, sotto Gioacchino Murat, fu costruito un grande ponte per arrivare alla reggia di Capodimonte senza passare di qui: il rione rimase a lungo isolato. Oggi è un quartiere vivissimo, dove tanti giovani lavorano per farlo conoscere.",
"Il Palazzo dello Spagnolo fu costruito nel 1738 da Ferdinando Sanfelice per il marchese Nicola Moscati. Il cortile ha una scala monumentale a doppia rampa, detta \"ali di falco\". È nascosto fra le bancarelle del mercato.",
"Sotto il rione ci sono antiche catacombe, scavate nel tufo: quelle di San Gennaro e quelle di San Gaudioso. Oggi le fa visitare una cooperativa di giovani del quartiere, La Paranza, nata nel 2006 con l’aiuto di don Antonio Loffredo.",
"Il Cimitero delle Fontanelle è una grande cava di tufo trasformata in ossario: custodisce circa quarantamila resti di persone morte soprattutto per la peste del 1656 e per il colera del 1836. Qui nacque il culto delle \"anime pezzentelle\": si \"adottava\" un teschio anonimo e se ne aveva cura. Il culto fu vietato nel 1969. È un luogo di silenzio, riaperto al pubblico nel 2026.",
"In Via Santa Maria Antesaecula, nel cuore della Sanità, Antonio De Curtis, in arte Totò, nacque il 15 febbraio 1898 e crebbe con la madre. Una lapide e un busto lo ricordano. Nei vicoli vicini, un murale lo mostra insieme a Peppino De Filippo in una scena del film La banda degli onesti.",
"Via Toledo è la grande strada pedonale dello shopping, aperta nel 1536 dal viceré spagnolo Pedro de Toledo. Sul lato ovest si sale nei Quartieri Spagnoli, una griglia di vicoli ripidi nata nel Cinquecento per alloggiare i soldati spagnoli. In Largo Maradona c’è il murale di Diego Armando Maradona, dipinto nel 1990 dopo il secondo scudetto. La stazione Toledo della metropolitana è famosa per i mosaici e per il suo \"cratere di luce\".",
"La Galleria Umberto I, costruita fra il 1887 e il 1890 dall’ingegnere Emanuele Rocco dopo il colera del 1884, ha quattro bracci coperti di vetro e ferro e una cupola alta circa 57 metri. Di fronte c’è il Teatro San Carlo, voluto da Carlo di Borbone e inaugurato il 4 novembre 1737: è il più antico teatro d’opera ancora in attività. Dopo un incendio, nel 1816, fu ricostruito in pochi mesi.",
"Il Gran Caffè Gambrinus apre nel 1860, accanto a Piazza del Plebiscito, e diventa subito il salotto della città, frequentato da artisti, scrittori e politici. Le sale sono piene di stucchi, specchi e dipinti. Qui il caffè si beve al banco e si accetta ancora il caffè sospeso.",
"Piazza del Plebiscito è la grande piazza semicircolare della città: da un lato il Palazzo Reale, dall’altro la chiesa di San Francesco di Paola, ispirata al Pantheon e chiusa dal colonnato voluto da Gioacchino Murat nel 1809. Poco più in là, sul mare, Castel Nuovo, detto Maschio Angioino: iniziato nel 1279 da Carlo I d’Angiò, ha cinque torri rotonde e un arco di trionfo di marmo per Alfonso d’Aragona.",
"Il Borgo Marinari è un piccolo porticciolo ai piedi del castello, con barche, circoli nautici e ristoranti. Un tempo era un villaggio di pescatori. Oggi ci si viene a mangiare il pesce e le specialità di mare, guardando i gozzi.",
"Castel dell’Ovo sorge sull’isolotto di Megaride, dove, secondo la tradizione, approdarono i primi coloni greci venuti da Cuma. In epoca romana qui c’era la villa di Lucullo. Le prime fortificazioni sono dell’epoca normanna: è il castello più antico della città. Il nome viene da una leggenda: si dice che il poeta Virgilio nascose un uovo magico nelle fondamenta, a protezione di Napoli.",
"Secondo il mito, la sirena Partenope, che non riuscì a incantare Ulisse con il suo canto, approdò proprio qui, sull’isolotto di Megaride. Dal suo nome nacque la prima città, Parthenope, e ancora oggi i napoletani si chiamano anche \"partenopei\". Più tardi, intorno al 470 a.C., i Greci fondarono una seconda città, Neapolis, cioè la \"città nuova\".",
"Santa Lucia è il vecchio borgo dei pescatori accanto al castello. Una barcarola napoletana del 1849, tradotta in italiano da Teodoro Cottrau, porta il suo nome: invitava a fare un giro in barca nella sera fresca. Qui si dice sia nato il polpo alla luciana, cotto con pomodoro e olio.",
"Mergellina è il porto da cui partono gli aliscafi per Capri, Ischia e Procida. Intorno ci sono barche di pescatori, yacht, bar e chioschi. Al tramonto i napoletani vengono qui a passeggiare, a mangiare un gelato e a guardare il mare.",
"Poco lontano da Mergellina c’è la chiesa di Santa Maria di Piedigrotta, antica chiesa dei pescatori, che dà il nome alla festa di Piedigrotta, ogni anno l’8 settembre. Per secoli la festa fu anche un grande concorso di canzoni napoletane: nel 1880 vi fu presentata Funiculì Funiculà.",
"Dietro la chiesa, il Parco Vergiliano a Piedigrotta custodisce un edificio romano che da secoli viene chiamato \"tomba di Virgilio\": è una tradizione, non c’è certezza. Accanto, dal 1939, riposa anche il poeta Giacomo Leopardi, morto a Napoli nel 1837. Qui si apre anche la Crypta Neapolitana, una galleria romana lunga circa 711 metri, scavata nel tufo ai tempi di Augusto.",
"Palazzo Donn’Anna sorge direttamente sul mare, all’inizio di Posillipo: lo volle Anna Carafa nel Seicento, su disegno di Cosimo Fanzago, ma non fu mai finito. Intorno a lui nascono tante leggende di fantasmi. Più avanti c’è Marechiaro, antico villaggio di pescatori, noto per una canzone di fine Ottocento, con la sua \"fenestella\" con un garofano sul davanzale.",
"Posillipo viene dal greco Pausilypon, \"che fa cessare il dolore\". Dal grande belvedere del Parco Virgiliano si vedono Nisida, i Campi Flegrei e il golfo. Sotto la collina c’è il Parco Sommerso della Gaiola, area marina protetta dal 2002, con resti romani sott’acqua.",
"Per salire al Vomero ci sono le funicolari: Chiaia, Montesanto, Centrale, e quella di Mergellina verso Posillipo. La più antica, quella di Chiaia, fu aperta il 15 ottobre 1889. La canzone Funiculì Funiculà, del 1880, non parla di queste, ma della funicolare del Vesuvio.",
"La Certosa di San Martino è un grande monastero sulla collina, trasformato in barocco nel Seicento da Cosimo Fanzago. Oggi è un museo: ospita il presepe Cuciniello, uno dei più belli di Napoli. Dal suo belvedere si vede tutta la città sotto i piedi.",
"Castel Sant’Elmo è una fortezza a forma di stella a sei punte: lo ricostruì il viceré Pedro de Toledo fra il 1537 e il 1547, su progetto dell’ingegnere militare Pedro Luis Escrivà. È in parte scavato nel tufo, con un profondo fossato. Dalle sue terrazze si vede tutta la città.",
"Dal belvedere si vede Spaccanapoli come una linea dritta nel centro, il porto, il mare, il Vesuvio e, nelle giornate limpide, Capri. Al tramonto la città si accende a poco a poco.",
"Il lungomare di Napoli corre per circa tre chilometri fra Santa Lucia e Mergellina, lungo Via Partenope e Via Caracciolo. Via Partenope è pedonale dall’estate del 2012 e un tratto di Via Caracciolo dal 2013: i napoletani lo chiamano il \"lungomare liberato\". La sera ci vengono a camminare, a correre, a bere qualcosa.",
"A metà del lungomare si apre la Rotonda Diaz, un belvedere con il monumento a cavallo del generale Armando Diaz. Davanti c’è la spiaggetta libera del lido Mappatella. Da qui si vede tutta la costa, fino al Vesuvio e, nelle giornate limpide, a Capri.",
"Via Partenope è la strada dei grandi alberghi dell’Ottocento e dei ristoranti con vista. Di notte il Castel dell’Ovo si illumina e si riflette nel mare scuro, con le barche del Borgo Marinari ferme sotto. È il luogo più fotografato della città.",
"Il Vesuvio è alto circa 1.281 metri. Nel 79 d.C. seppellì Pompei ed Ercolano; la sua ultima eruzione è del marzo 1944. Dal 1995 è un parco nazionale. Di notte è una sagoma scura contro il cielo blu, con le luci dei paesi sparse sulle pendici.",
"Quando le ultime luci del golfo si accendono, il mare, il Vesuvio e il cielo hanno, per un momento, lo stesso blu profondo, e il golfo intero sembra respirare."
];
const NAME={
n2_gennaro:"Gennaro, il pescivendolo",
n2_assunta:"Assunta, la presepaia",
n2_ciro:"Ciro, il pizzaiolo",
n2_toto:"Totò, il principe della risata",
n2_enzo:"Enzo, il barista",
n2_nando:"Nando, il vecchio pescatore",
n2_virgilio:"Virgilio, il poeta",
n2_awa:"Awa, la studentessa"
};
const GREET={
n2_gennaro:"Uè, buongiorno Pierpaolo! Vieni, guarda ccà: le alici sono appena arrivate. Io sono Gennaro e questo banco è di famiglia da sempre. Che ti do, guagliò?",
n2_assunta:"Uè, Pierpaolo, benvenuto! Sono Assunta e questa è la bottega di mio padre: qui è Natale tutto l’anno. Entra, ma non toccare i pastori, che sono nati ieri e già si credono vip.",
n2_ciro:"Uè, Pierpaolo! Siediti, che il forno è caldo e la pasta è pronta. Io sono Ciro e la pizza, qui, è una cosa seria. Che ti faccio, una Margherita o una marinara?",
n2_toto:"Buongiorno, giovanotto. Io sono Antonio De Curtis, ma lei mi chiami Totò: ormai è il nome che hanno tutti. Dicono che il tempo si pieghi, e io ne approfitto: guardi un po’, sono tornato a casa mia. Mi faccia il piacere, entri.",
n2_enzo:"Uè, Pierpaolo, buongiorno! Sono Enzo, barista da trent’anni. Prima il caffè, poi le chiacchiere: qui si fa così. Come lo vuoi, amaro o zuccherato?",
n2_nando:"Uè, Pierpaolo, siediti sullo scoglio: il mare è buono e il sole pure. Sono Nando e ho pescato per quarant’anni; adesso guardo gli altri che lo fanno.",
n2_virgilio:"Salve, giovane Pierpaolo. Mi chiamo Publio Virgilio Marone, e dicono che qui riposi il mio corpo. Il tempo si piega, mi dicono: ne approfitto per vedere come è cresciuta Napoli. Siediti, la vista è più bella di come la ricordassi.",
n2_awa:"Ciao, Pierpaolo! Io sono Awa, ma qui mi chiamano \"’a guagliona ’e ll’architettura\". Sei salito per il tramonto? Hai scelto il momento migliore: dal castello si vede tutto."
};
/* cupola di maiolica gialla e verde */
const cupM=(g,x,y,r,dk)=>{for(let q=0;q<8;q++){g.fillStyle=mixs(q%2?'#2f8a4a':'#e8c428','#262a5e',dk*.6);g.beginPath();g.moveTo(x,y);g.arc(x,y,r,Math.PI+q*Math.PI/8,Math.PI+(q+1)*Math.PI/8);g.closePath();g.fill()}rect(g,mixs('#c8b894','#262a5e',dk*.6),x-1.4,y-r-9,2.8,9)};
/* alberi di Napoli: leccio verde e palma (gli olmi e i platani di Madrid sono ingialliti dall'autunno) */
const alb=(g,x,y,s)=>{s=s||1;ln(g,'#5a4a36',7*s,[x,y,x-2*s,y-40*s,x+1*s,y-70*s]);[[0,-96,40,28,'#2f7a3a'],[-30,-80,26,20,'#2a6a34'],[30,-84,28,20,'#3a8a42'],[4,-118,24,18,'#3a8a42']].forEach(c=>{el(g,tn(c[4]),x+c[0]*s,y+c[1]*s,c[2]*s,c[3]*s);el(g,'rgba(255,255,255,.08)',x+(c[0]-c[2]*.2)*s,y+(c[1]-c[3]*.4)*s,c[2]*.5*s,c[3]*.4*s)})};
const palma=(g,x,y,s,t)=>{s=s||1;ln(g,'#7a6246',6*s,[x,y,x+4*s,y-50*s,x-2*s,y-100*s]);for(let q=0;q<9;q++){const an=-Math.PI/2+(q-4)*.42,sw=Math.sin((t||0)*1.4+q)*2;ln(g,q%2?'#2f7a3a':'#3a8a42',3.2*s,[x-2*s,y-100*s,x-2*s+Math.cos(an)*26*s,y-100*s+Math.sin(an)*20*s-6*s,x-2*s+Math.cos(an)*50*s+sw,y-100*s+Math.sin(an)*30*s+16*s])}dot(g,'#5a4a36',x-2*s,y-98*s,3*s)};
/* ---- facciate lungo la strada: ogni zona ha il suo carattere ---- */
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3);
 const lav=()=>{if(r>.3)stesi(g,x+8,gt-h*.55-20,w-34,i,TT)};
 if(st==1){/* Porta Nolana e Porta Capuana: palazzi di quattro-cinque piani rosa, ocra e terracotta, il mercato al piano terra, panni stesi */
  if(r>.9){mat(g,'#c8a878',x+40,gt-h-70,44,h+70,i);rect(g,'#a88858',x+36,gt-h-74,52,6);cupo(g,'#6a8a6a',x+62,gt-h-74,40,34);return}
  cas(g,x+4,w-26,h+20,i,k,{wall:['#d89a7a','#e8c070','#c87a6a','#e4d0a8','#d8a88a'][md(i,5)],bal:1,sh:['#2f6a42','#4a6a8a'][md(i,2)],roof:'f',gt:md(i,3)?'shop':'tav',sc:['#2a62b8','#c8281e','#2a8a5a'][md(i,3)]});lav();return}
 if(st==2){/* Spaccanapoli: facciate alte e strette di tufo e rosa, panni stesi da un balcone all'altro, qualche edicola votiva */
  cas(g,x+4,w-34,h+80,i,k,{wall:['#e2b862','#d8a08a','#c99a46','#e4cca0'][md(i,4)],bal:1,sh:'#3a5a4a',roof:'f',gt:'shop',sc:['#6a2a22','#2a4a6a','#4a3a22'][md(i,3)],cor:'rgba(0,0,0,.22)'});lav();
  if(r>.6)nicchia(g,x+w-52,gt-96,k,TT);return}
 if(st==3){/* Via dei Tribunali: palazzi ocra e rosa con pizzerie al piano terra, lavagne, qualche campanile di mattoni con la cupola di maiolica */
  if(r>.86){mat(g,'#c8a070',x+40,gt-h-80,46,h+80,i);rect(g,'#a88050',x+36,gt-h-84,54,6);ar(g,'#2a2a30',x+53,gt-h-30,20,34);cupM(g,x+63,gt-h-84,26,k);return}
  cas(g,x+4,w-24,h+50,i,k,{wall:['#d9a441','#d8908a','#e8c070','#c87a5a'][md(i,4)],bal:1,sh:'#2f6a42',roof:'f',gt:'tav'});lav();return}
 if(st==4){/* Rione Sanità: case colorate e scrostate (celeste, rosa, giallo, menta), bandiere azzurre, cupole di maiolica */
  if(r>.86){rect(g,'#e4d8b8',x+34,gt-h-30,70,h+30);cupM(g,x+69,gt-h-30,32,k);return}
  cas(g,x+4,w-24,h+30,i,k,{wall:['#8ac0d8','#e8a0a0','#e8d070','#a8d0b0','#d8a080'][md(i,5)],bal:1,sh:'#2f6a42',roof:'f',gt:md(i,2)?'shop':'tav',sc:'#6a2a22'});lav();
  if(r>.45){const bx=x+w-60,by=gt-h*.5;ln(g,IR_,1.4,[bx,by,bx,by-26]);poly(g,'#2a78d0',[[bx,by-26],[bx+22+Math.sin(TT*3+i)*2,by-22],[bx+20,by-10],[bx,by-12]])}return}
 if(st==5){/* Via Toledo e Plebiscito: palazzi di pietra chiara con portici, balconi di ferro, negozi, qualche cupola */
  if(r>.88){rect(g,'#e4d8b8',x+30,gt-h-40,80,h+40);g.fillStyle=mixs('#6a8a7a','#262a5e',k*.6);g.beginPath();g.ellipse(x+70,gt-h-40,36,34,0,Math.PI,0);g.fill();return}
  cas(g,x+6,w-20,h+60,i,k,{wall:['#e8dcc0','#d8c8a0','#ece0c8','#d8a890'][md(i,4)],bal:1,sh:'#7a7468',roof:'f',gt:md(i,3)?'shop':'arc',sc:['#2a3a5a','#6a2a22','#2a4a3a'][md(i,3)],cor:'#b8aa8a'});lav();return}
 if(st==6){/* Santa Lucia e Borgo Marinari: pochi palazzi pallidi sul mare, pini, palme, il muretto sul golfo */
  if(r>.55){(r>.82?pino:r>.68?palma:alb)(g,x+w*.5,gt-2,.9+hr(i)*.3,TT);return}
  if(r>.3){cas(g,x+10,w-50,h-10,i,k,{wall:['#e8d4a8','#e4c898','#d8b890'][md(i,3)],bal:1,sh:'#2f6a42',roof:'f',gt:'tav'});return}return}
 if(st==7){/* Mergellina e Posillipo: ville rosa antico e ocra sul pendio, pini marittimi, ulivi, ringhiere sul mare */
  if(r>.45){(r>.7?pino:cedro)(g,x+w*.5,gt-2,.9+hr(i)*.35,TT);return}
  if(r>.2){cas(g,x+8,w-44,h-20,i,k,{wall:['#d8a09a','#e4c070','#d8b890','#c8887a'][md(i,4)],bal:1,sh:'#3a5a4a',roof:'s'});return}return}
 if(st==8){/* Vomero: ville liberty, pini, cipressi, platani; terrazze e giardini */
  if(r>.35){[pino,cipr,alb,alb][md(i,4)](g,x+w*.5,gt,md(i,4)==1?120+hr(i)*30:1+hr(i)*.4,TT);return}
  cas(g,x+10,w-40,h,i,k,{wall:['#e8d4b0','#d8a890','#c8d0b0','#e4c8a0'][md(i,4)],bal:1,sh:'#3a5a4a',roof:'s',cor:'#b8a888'});return}
 /* 9: lungomare, Villa Comunale: alberi del giardino, ogni tanto un albergo con le finestre accese */
 if(r>.7){[alb,pino,palma][md(i,3)](g,x+w*.5,gt-2,1+hr(i)*.3,TT);return}return}
const IR_='#26292e';
/* ---- livello 0: cielo, sole, luna, nuvole, velo dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-23000)/2400,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/22300,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*250;
 if(xs<22800){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,15)}
 const mu=cl((xs-22800)/2800,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*210;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<2500?'rgba(252,206,214,.75)':xs<16500?'rgba(255,255,255,.85)':xs<21800?'rgba(255,176,140,.7)':'rgba(140,120,190,.4)';
 each(o-((t*5)%340)*.02,340,1,(x,i,r)=>{if(r>.55)return;nube(g,x+r*100,40+r*46,.7+r*.5,cc)});
 const fo=cl(1-xs/2500,0,1)*.32;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-13300)/1000,0,1)*cl((17000-xs)/900,0,1)*.14;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-19600)/800,0,1)*cl((23000-xs)/900,0,1)*.26;if(wg>.01){g.fillStyle='rgba(255,110,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* sagoma del Vesuvio: il Monte Somma e il Gran Cono, con la bocca del cratere */
const VES=[[-330,20],[-260,-16],[-200,-58],[-150,-90],[-104,-100],[-72,-90],[-42,-68],[-18,-62],[12,-82],[42,-106],[68,-118],[86,-116],[100,-104],[124,-80],[174,-44],[236,-14],[330,20]];
const vesu=(g,sx,by,col,sc)=>{g.fillStyle=col;g.beginPath();g.moveTo(sx+VES[0][0]*sc,by+34);VES.forEach(p=>g.lineTo(sx+p[0]*sc,by+p[1]*sc));g.lineTo(sx+330*sc,by+34);g.closePath();g.fill()};
/* ---- livello 1: il Vesuvio all'alba, i tetti e le cupole del centro, la collina del Vomero con Sant'Elmo, il mare con Capri, Ischia, Nisida e Posillipo, il Vesuvio di notte ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs*1+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 /* il mare del golfo: dal Borgo Marinari fino alla notte */
 const se=cl((xs-13400)/900,0,1),sh=hz-8;
 if(se>.02){const sun=cl((xs-19600)/1400,0,1)*cl((24000-xs)/1500,0,1),top=mixs(mixs('#8ac4ea','#f4a070',sun),'#1a3a78',night),bot=mixs(mixs('#3a8cc8','#c86a6a',sun),'#0a1a50',night);
  const sg=g.createLinearGradient(0,sh,0,GT+4);sg.addColorStop(0,top);sg.addColorStop(1,bot);g.globalAlpha=se;g.fillStyle=sg;g.fillRect(0,sh,480,GT+4-sh);
  each(o,26,3,(x,i,r)=>{if(r>.6)return;rect(g,'rgba(255,255,255,'+(.3*(1-night*.6)*(.5+.5*Math.sin(t*2+i)))+')',x,sh+6+hr(i*5)*70,6+r*16,1.4)});
  /* colonna di luce del sole basso o della luna sul mare */
  const us=cl(xs/22300,0,1),sxs=40+us*400;if(xs>19600&&xs<22800){const a=.5*cl((xs-19600)/700,0,1)*cl((22800-xs)/600,0,1);for(let q=0;q<14;q++)rect(g,'rgba(255,200,120,'+(a*(1-q/16))+')',sxs-18+Math.sin(t*2+q)*4-q*.6,sh+4+q*5.4,36+q*1.4+Math.sin(t*3+q)*4,1.8)}
  const mu=cl((xs-22800)/2800,0,1),mx=140+mu*240;if(mu>0)for(let q=0;q<14;q++)rect(g,'rgba(246,240,214,'+(.5*Math.min(1,mu*3)*(1-q/16))+')',mx-12+Math.sin(t*2+q)*5,sh+4+q*5.4,24+q*1.2,1.8);g.globalAlpha=1}
 /* Vesuvio all'alba, con la foschia alla base, e le gru del porto (zone 1-2) */
 const v1=env(1500,4800);if(v1>.02){g.globalAlpha=v1;const sx=fx(1500);vesu(g,sx,hz+6,dim('#9aa0cc'),1);poly(g,dim('#b8b4d4'),[[sx+30,hz-92],[sx+68,hz-112],[sx+84,hz-110],[sx+110,hz-76],[sx+60,hz-80]]);rect(g,'rgba(252,200,200,.4)',sx-340,hz+4,680,26);
  [[-260,50],[-210,40],[200,46]].forEach(c=>{rect(g,dim('#6a6e86'),sx+c[0],hz+30-c[1],3,c[1]);rect(g,dim('#6a6e86'),sx+c[0]-18,hz+30-c[1],40,3);ln(g,dim('#6a6e86'),1,[sx+c[0]+22,hz+33-c[1],sx+c[0]+22,hz+14])});g.globalAlpha=1}
 /* la collina del Vomero con Castel Sant'Elmo e la Certosa (zone 3-5) */
 const hv=env(9400,8000);if(hv>.02){g.globalAlpha=hv;const sx=fx(9400);g.fillStyle=dim('#7a9a62');g.beginPath();g.moveTo(sx-460,hz+30);g.quadraticCurveTo(sx-260,hz-50,sx-80,hz-78);g.quadraticCurveTo(sx+40,hz-96,sx+160,hz-70);g.quadraticCurveTo(sx+320,hz-40,sx+460,hz+30);g.closePath();g.fill();
  /* Sant'Elmo: fortezza a stella bassa e pallida sulla cima */
  poly(g,dim('#d4c8ac'),[[sx-40,hz-80],[sx-24,hz-98],[sx+6,hz-92],[sx+38,hz-100],[sx+56,hz-82],[sx+40,hz-72],[sx-30,hz-70]]);rect(g,dim('#a89c80'),sx-30,hz-92,70,4);
  /* Certosa con la cupola e le ville sul pendio */
  rect(g,dim('#e8dcc0'),sx+90,hz-76,56,22);g.fillStyle=dim('#8a929a');g.beginPath();g.ellipse(sx+118,hz-76,16,12,0,Math.PI,0);g.fill();
  for(let q=0;q<22;q++)rect(g,dim(['#e8c8a0','#d8a890','#e4d8b0'][q%3]),sx-200+q*18+hr(q)*8,hz-30-hr(q+3)*34-(q%5)*3,8+hr(q)*6,8);g.globalAlpha=1}
 /* i tetti, le cupole e i campanili del centro antico (zone 2-5) */
 const ce=env(6300,7400);if(ce>.02){g.globalAlpha=ce;const sx=fx(6300);for(let q=0;q<26;q++){const bx=sx-400+q*32+hr(q)*10,bh=14+hr(q*3)*26;rect(g,dim(['#d8b890','#e4c8a0','#d8a890','#e8d4b0'][q%4]),bx,hz+24-bh,28,bh+8);poly(g,dim('#a8604a'),[[bx-2,hz+24-bh],[bx+14,hz+16-bh],[bx+30,hz+24-bh]])}
  [[-290,'#2f8a4a'],[-120,'#e8c428'],[90,'#2f8a4a'],[250,'#e8c428']].forEach(c=>{g.fillStyle=dim(c[1]);g.beginPath();g.ellipse(sx+c[0],hz-4,14,16,0,Math.PI,0);g.fill();rect(g,dim('#e8dcc0'),sx+c[0]-14,hz-4,28,16)});
  [[-200,60],[30,74],[180,56]].forEach(c=>{mat(g,dim('#c8a878'),sx+c[0]-7,hz+24-c[1]-10,14,c[1]+10,5);cupo(g,dim('#6a8a6a'),sx+c[0],hz+14-c[1]-10,18,14)});g.globalAlpha=1}
 /* Capri, Ischia, Nisida e la collina di Posillipo sul mare (zone 6-8) */
 const cp=env(16800,5200);if(cp>.02){g.globalAlpha=cp;const sx=fx(16800);poly(g,dim('#8a96bc'),[[sx-120,sh+4],[sx-92,sh-24],[sx-60,sh-34],[sx-40,sh-20],[sx-14,sh-8],[sx+30,sh-38],[sx+70,sh-22],[sx+110,sh+4]]);g.globalAlpha=1}
 const is=env(21200,6000);if(is>.02){g.globalAlpha=is;const sx=fx(21200);poly(g,dim('#7a8cb0'),[[sx-200,sh+4],[sx-140,sh-14],[sx-70,sh-34],[sx-20,sh-40],[sx+50,sh-24],[sx+130,sh-8],[sx+200,sh+4]]);g.globalAlpha=1}
 const po=env(20000,5600);if(po>.02){g.globalAlpha=po;const sx=fx(20000);g.fillStyle=dim('#6a9a5a');g.beginPath();g.moveTo(sx+40,sh+8);g.quadraticCurveTo(sx+120,sh-60,sx+300,sh-52);g.lineTo(sx+420,sh+8);g.closePath();g.fill();for(let q=0;q<14;q++)rect(g,dim(['#e8c8a0','#d8a890','#f0e4c0'][q%3]),sx+120+q*17,sh-22-hr(q)*26,8,7);
  el(g,dim('#7a8aa8'),sx-80,sh+2,40,10);el(g,dim('#6a8a5a'),sx-86,sh-4,24,8);g.globalAlpha=1}
 /* Vesuvio di notte: sagoma nera con puntini di luce sulle pendici, la luna sopra, le luci del golfo */
 const v2=env(25900,5400);if(v2>.02){g.globalAlpha=v2;const sx=fx(25900);vesu(g,sx,hz+2,dim('#7a84b4'),1.2);for(let q=0;q<26;q++){const px=sx-330+q*25,py=hz+30-hr(q)*10;if(night>.4)dot(g,'rgba(255,220,120,'+(.5+.4*Math.sin(t*2+q))+')',px,py,1.2)}
  if(night>.4){for(let q=0;q<46;q++)dot(g,'rgba(255,214,110,'+(.35+.3*Math.sin(t*3+q))*night+')',sx-480+q*21,sh+4+hr(q*3)*6,1.2)}g.globalAlpha=1}
 /* luci del golfo lontano */
 if(night>.4&&se>.5)for(let q=0;q<40;q++)dot(g,'rgba(255,210,120,'+(.45*night*(.6+.4*Math.sin(t*3+q)))+')',((q*47+o*.9)%520)-20,sh+3+hr(q*5)*4,1.1)}
/* ---- livello 2: case e palazzi lontani, zona per zona; sul Vomero il mare di tetti ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;
  const wins=(n,top)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+14+(q%4)*20,top+Math.floor(q/4)*14,6,5)};
  if(zz==1||zz==2||zz==3){const cs=['#d89a7a','#e8c070','#c87a6a','#e4d0a8','#d8a88a','#e2b862'];const hh=(zz==2?70:50)+r*40;rect(g,dim(cs[md(i,6)]),x+4,hz-hh,82,hh+10);rect(g,'rgba(255,255,255,.2)',x+4,hz-hh,4,hh+10);rect(g,dim('#a8604a'),x,hz-hh-4,90,5);if(hr(i*3)>.8)cupM(g,x+44,hz-hh-4,22,night*1.4);else if(hr(i*3)>.6){mat(g,dim('#c8a878'),x+60,hz-hh-40,22,40,i);cupo(g,dim('#6a8a6a'),x+71,hz-hh-40,24,18)}wins(8,hz-hh+8)}
  else if(zz==4||zz==5){const cs=['#8ac0d8','#e8a0a0','#e8d070','#a8d0b0','#e8dcc0','#d8c8a0'];const hh=46+r*40;rect(g,dim(cs[md(i,6)]),x+4,hz-hh,84,hh+10);rect(g,dim('#a89c80'),x,hz-hh-4,92,5);if(hr(i*3)>.8)cupM(g,x+46,hz-hh-4,24,night*1.4);wins(8,hz-hh+8)}
  else if(zz==6){if(hr(i*3)>.5){rect(g,dim(['#e8d4a8','#f0e4c8','#e4c898'][md(i,3)]),x+10,hz-40-r*20,70,50+r*20);rect(g,dim('#a89c80'),x+6,hz-44-r*20,78,5);wins(8,hz-30-r*20)}else if(hr(i*3)>.2){el(g,dim('#2a6a34'),x+50,hz-22,36,22)}}
  else if(zz==7){if(hr(i*3)>.35){rect(g,dim(['#d8a09a','#e4c070','#d8b890'][md(i,3)]),x+10,hz-30-r*30,60,40+r*30);poly(g,dim('#a8604a'),[[x+6,hz-30-r*30],[x+40,hz-48-r*30],[x+74,hz-30-r*30]]);wins(6,hz-24-r*30)}el(g,dim('#2a6a34'),x+80,hz-22,28,22)}
  else if(zz==8){/* mare di tetti visto dall'alto del Vomero */const hh=8+r*22;rect(g,dim(['#d8b890','#e4c8a0','#d8a890','#e8d4b0'][md(i,4)]),x+2,hz-hh+16,50,hh+24);poly(g,dim('#a8604a'),[[x,hz-hh+16],[x+27,hz-hh+8],[x+54,hz-hh+16]]);if(hr(i*3)>.75)cupM(g,x+80,hz+12,16,night*1.4);wins(4,hz-hh+22)}
  else{if(hr(i*3)>.72){rect(g,dim(['#d8c8a8','#e4d8b8','#c8b890'][md(i,3)]),x+6,hz-44-r*22,74,54+r*22);rect(g,dim('#6a5a42'),x+2,hz-48-r*22,82,6);for(let q=0;q<8;q++)rect(g,night>.3?'rgba(255,226,150,.9)':dim('#6a7a98'),x+14+(q%4)*16,hz-38-r*22+Math.floor(q/4)*16,8,9)}else if(hr(i*3)<.3)el(g,dim('#2a6a34'),x+54,hz-20,34,22)}});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
/* ---- livello 3: la strada, zona per zona ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>150+hr(i*5)*60,170);
 each2(150,8,Z[1],Z[2],2,i=>140+hr(i*5)*50,150);
 each2(180,9,Z[2],Z[3],3,i=>130+hr(i*5)*50,170);
 each2(170,10,Z[3],Z[4],4,i=>120+hr(i*5)*50,160);
 each2(200,11,Z[4],Z[5],5,i=>120+hr(i*5)*40,190);
 each2(220,12,Z[5],Z[6],6,i=>110+hr(i*5)*50,200);
 each2(210,13,Z[6],Z[7],7,i=>110+hr(i*5)*50,190);
 each2(180,14,Z[7],Z[8],8,i=>120+hr(i*5)*50,170);
 each2(200,15,Z[8],Z[9],9,i=>120+hr(i*5)*50,180);
 /* il muretto sul mare dove la costa è aperta (zone 6, 7, 9) */
 [[Z[5],Z[6]],[Z[6],Z[7]],[Z[8],Z[9]]].forEach(z=>{const a=Math.max(z[0]-o,-10),b=Math.min(z[1]-o,490);if(b>a){A.setDK(nf(o+240));rect(g,'#b8b2a2',a,gt-18,b-a,18);rect(g,'#cfc9b8',a,gt-22,b-a,5);for(let q=0;q<Math.ceil((b-a)/40)+1;q++)rect(g,'rgba(0,0,0,.12)',a+q*40-((o+a)%40),gt-18,1.4,18)}})}
/* ---- vita: gabbiani, piccioni, rondoni, passanti e corridori ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 /* gabbiani sul mercato del pesce e sul mare */
 const gu=Math.max(cl((xs-100)/300,0,1)*cl((2400-xs)/300,0,1),cl((xs-13300)/400,0,1)*cl((26400-xs)/400,0,1));
 if(gu>.05)for(let i=0;i<4;i++){const bx=((i*131+t*(40+i*6))%620)-70,by=60+hr(i*3+1)*110+Math.sin(t*1.6+i*2)*12,w=Math.sin(t*5+i)*3.6,dk=nf(cam+bx);g.strokeStyle='rgba('+Math.round(246-dk*150)+','+Math.round(246-dk*140)+','+Math.round(250-dk*110)+','+(.95*Math.min(1,gu))+')';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-11,by+w);g.quadraticCurveTo(bx-5,by-5,bx,by);g.quadraticCurveTo(bx+5,by-5,bx+11,by+w);g.stroke()}
 /* piccioni sulle piazze (San Gaetano, Plebiscito) */
 const pg=Math.max(cl((xs-6500)/400,0,1)*cl((7600-xs)/400,0,1),cl((xs-12400)/400,0,1)*cl((13700-xs)/400,0,1));
 if(pg>.05)for(let i=0;i<5;i++){const bx=((i*117+t*(46+i*6))%600)-60,by=70+hr(i*3)*100+Math.sin(t*2+i*2)*14,w=Math.sin(t*10+i)*3.4;g.strokeStyle='rgba(120,126,140,'+(.9*Math.min(1,pg))+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke();rect(g,'rgba(90,96,110,.9)',bx-2,by,5,3)}
 /* rondoni sopra i tetti, fino al tramonto */
 if(xs<21000)for(let i=0;i<3;i++){const bx=((i*171+t*(90+i*9))%620)-70,by=90+hr(i*5+2)*110+Math.sin(t*3+i)*10,w=Math.sin(t*16+i)*2;g.strokeStyle='rgba(50,44,52,.85)';g.lineWidth=1.8;g.beginPath();g.moveTo(bx-6,by+w);g.lineTo(bx,by);g.lineTo(bx+6,by+w);g.stroke()}
 /* passanti per le strade, corridori e ciclisti sul lungomare */
 [[200,2300,30,0],[10700,13500,-34,1],[23400,26200,46,2],[23500,26300,-30,3]].forEach((rg,ri)=>{for(let i=0;i<2;i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.25),wx=rg[0]+(((t*sp+i*span/2)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));const d=sp>0?1:-1,by=GT+22+i*9;g.save();g.translate(px,by);g.scale(d*.6,.6);
  fig(g,0,0,t*(ri>1?3:1.6),{f:1,s:.7,ph:i,skin:tn('#e0b090'),top:tn(['#e8505a','#2a8a9a','#f2c82a','#f4f0e6'][(i+ri)%4]),bot:tn('#2a2a36'),hair:tn('#2a1a10')});g.restore()}})}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#6e6a66','k'],[Z[1],Z[2],'#625e5c','l'],[Z[2],Z[3],'#6c6864','g'],[Z[3],Z[4],'#68625c','c'],[Z[4],Z[5],'#cfc8b4','b'],[Z[5],Z[6],'#a89c84','r'],[Z[6],Z[7],'#a09a8c','a'],[Z[7],Z[8],'#b0a68c','m'],[Z[8],Z[9],'#8a8a90','v']];
 rect(g,'#8a847a',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const slabs=(bw0,add,al,dk)=>{for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(0,0,0,'+(dk||.06)+')':'rgba(255,255,255,.05)',px,yy,bw-2,15);rect(g,'rgba(0,0,0,.14)',px,yy,1.3,17)}rect(g,'rgba(0,0,0,.1)',x0,yy+15,x1-x0,1.4)}};
  if(z[3]=='k'){/* basoli di pietra lavica scura, bagnati dal mercato, con pozzanghere d'acqua e ghiaccio sciolto */
   slabs(30,6,.12,.14);for(let q=0;q<10;q++)el(g,'rgba(150,190,220,.3)',x0+((q*137+40-cam)%ww+ww)%ww,gt+30+hr(q*3)*100,16+hr(q)*14,3);rect(g,'rgba(255,255,255,.06)',x0,gt+3,x1-x0,14)}
  if(z[3]=='l'){slabs(24,5,.2,.1);rect(g,'rgba(255,255,255,.07)',x0,gt+60,x1-x0,6);rect(g,'rgba(0,0,0,.14)',x0,gt+120,x1-x0,3)}
  if(z[3]=='g'){slabs(28,6,.14,.1);for(let q=0;q<60;q++)rect(g,'rgba(0,0,0,.1)',x0+((q*41-cam)%ww+ww)%ww,gt+8+hr(q)*130,5,3);rect(g,'#4a4640',x0,gt+120,x1-x0,3)}
  if(z[3]=='c'){slabs(30,7,.12,.1);rect(g,'#4a4640',x0,gt+98,x1-x0,2.4);rect(g,'#4a4640',x0,gt+114,x1-x0,2.4);rect(g,'rgba(255,255,255,.05)',x0,gt+3,x1-x0,16);for(let q=0;q<4;q++){const px=((q*430+60-cam)%1300+1300)%1300-60;for(let s=0;s<5;s++)rect(g,'rgba(255,255,255,.09)',px,gt+90+s*8,70-s*6,3)}}
  if(z[3]=='b'){/* lastre di pietra chiara con la striscia di basoli neri; sotto la Galleria il mosaico di marmo */
   slabs(60,10,.22,.05);rect(g,'#3a3a40',x0,gt+36,x1-x0,16);for(let k=0;k<Math.ceil(ww/12)+2;k++)rect(g,'rgba(255,255,255,.08)',Math.floor((cam+x0)/12)*12+k*12-cam,gt+36,1.4,16);
   const sx=Math.max(x0,11500-cam),ex=Math.min(x1,11820-cam);if(ex>sx){rect(g,'#ece2c8',sx,gt+58,ex-sx,70);const p0=Math.floor((cam+sx)/30);for(let k=0;k<Math.ceil((ex-sx)/30)+1;k++)for(let r=0;r<3;r++)rect(g,(k+r)%2?'#5a4a3a':'#c8a878',(p0+k)*30-cam+4,gt+60+r*22,22,18)}}
  if(z[3]=='r'){/* il molo e la terrazza sul mare: cemento chiaro, tufo e sale */
   slabs(46,8,.18,.07);rect(g,'rgba(255,255,255,.09)',x0,gt+3,x1-x0,16);for(let q=0;q<40;q++)rect(g,'rgba(255,255,255,.3)',x0+((q*57-cam)%ww+ww)%ww,gt+10+hr(q*3)*120,4,1.6);rect(g,'#7a7062',x0,gt+122,x1-x0,3)}
  if(z[3]=='a'){/* marciapiedi di granito, la passeggiata sul mare di Mergellina e Posillipo */
   slabs(50,8,.16,.07);for(let q=0;q<60;q++)rect(g,'rgba(0,0,0,.08)',x0+((q*30-cam)%ww+ww)%ww,gt+5,1.4,120);rect(g,'#7a766c',x0,gt+118,x1-x0,3);for(let k=-1;k<Math.ceil(ww/60)+2;k++){const px=Math.floor((cam+x0)/60)*60+k*60-cam;rect(g,'rgba(255,255,255,.18)',px,gt+130,26,2.4)}}
  if(z[3]=='m'){/* tufo e pietra, scalinate, viali alberati con il prato */
   slabs(54,9,.2,.08);rect(g,'#7aa844',x0,gt+3,x1-x0,22);for(let q=0;q<60;q++)rect(g,'rgba(40,100,40,.3)',x0+((q*29)%ww),gt+5+hr(q)*17,2,4);rect(g,'rgba(255,255,255,.14)',x0,gt+3,x1-x0,6);for(let q=0;q<5;q++)rect(g,'rgba(0,0,0,.1)',x0,gt+110+q*8,x1-x0,2)}
  if(z[3]=='v'){/* lungomare liberato: lastre di pietra, la pista ciclabile e la striscia tratteggiata, i cerchi di luce dei lampioni */
   slabs(56,9,.14,.08);rect(g,'#9a5a52',x0,gt+96,x1-x0,26);rect(g,'rgba(255,255,255,.14)',x0,gt+96,x1-x0,2);for(let k=-1;k<Math.ceil(ww/40)+2;k++){const px=Math.floor((cam+x0)/40)*40+k*40-cam;rect(g,'rgba(255,255,255,.4)',px,gt+108,18,2.4)}
   const nn=nf(cam+240);if(nn>.3)for(let q=0;q<5;q++){const px=((q*200+60-cam)%900+900)%900-120;el(g,'rgba(255,214,100,'+(.1*nn)+')',px,gt+60,90,26)}}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1400,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const gd=cl((cam-13400)/700,0,1)*cl((17000-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
 const sg=cl((cam-19600)/700,0,1)*cl((22800-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Gennaro: grembiule bianco bagnato, stivali, berretto di lana blu, cornetto rosso al collo, penna dietro l'orecchio, mani rosse e fredde */
 NP('n2_gennaro',NAME.n2_gennaro,800,GREET.n2_gennaro,{skin:'#d8a078',top:'#5a6a8a',bot:'#3a4a3a',hair:'#8a8a8a',s:1.04},(g,b,t)=>{rect(g,'#f4f0e6',-12,-78+b,24,38);rect(g,'rgba(120,170,220,.35)',-12,-52+b,24,12);rect(g,'rgba(0,0,0,.1)',-12,-78+b,3,38);
  g.fillStyle='#2a4a8a';g.beginPath();g.arc(1,-104+b,12.4,Math.PI,0);g.fill();rect(g,'#2a4a8a',-12,-106+b,26,6);dot(g,'#f4f0e6',1,-118+b,2.6);
  ln(g,'#d8283a',2.4,[-4,-88+b,0,-82+b,4,-88+b]);ln(g,'#d8283a',2.6,[0,-82+b,2,-76+b,-1,-72+b]);ln(g,'#2a2a30',1.2,[-9,-108+b,-9,-100+b]);dot(g,'#e0605a',-14,-48,3.6);dot(g,'#e0605a',14,-48,3.6);rect(g,'#c8c8c4',16,-66,16,3);el(g,'#b8c8d0',26,-62,8,3)}),
 /* Assunta: grembiule sporco di colla e colori, capelli raccolti con una matita, un pastorello di terracotta in mano, occhiali sul naso */
 NP('n2_assunta',NAME.n2_assunta,4930,GREET.n2_assunta,{skin:'#e0b090',top:'#8a4a5a',bot:'#3a3a46',hair:'#6a5a4a',s:1.0},(g,b,t)=>{rect(g,'#c8b890',-11,-78+b,22,36);dot(g,'#e8c850',-4,-66+b,2.4);dot(g,'#4a8ad0',4,-56+b,2.6);dot(g,'#c8402a',-2,-50+b,2);dot(g,'#6a5a4a',-6,-112+b,6);ln(g,'#f2c82a',2,[-6,-118+b,-14,-124+b]);
  ln(g,'#2a2a30',1,[0,-103+b,10,-103+b]);dot(g,'rgba(255,255,255,.3)',4,-103+b,3);poly(g,'#c8803a',[[16,-70],[22,-70],[21,-58],[17,-58]]);dot(g,'#e8b890',19,-73,2.4);ln(g,'#8a5a22',1.2,[23,-72,28,-60])}),
 /* Ciro: maglietta bianca infarinata, grembiule, cappello bianco, la pala di legno per infornare, avambracci robusti */
 NP('n2_ciro',NAME.n2_ciro,5470,GREET.n2_ciro,{skin:'#d8a078',top:'#f4f0e6',bot:'#3a3a46',hair:'#2a1a10',s:1.06},(g,b,t)=>{rect(g,'#e8e4d8',-11,-76+b,22,34);rect(g,'rgba(255,255,255,.7)',-6,-88+b,8,6);rect(g,'#f4f0e6',-11,-120+b,22,10);rect(g,'rgba(0,0,0,.08)',-11,-118+b,22,2);
  ln(g,'#c8a870',3,[20,-14,22,-126]);el(g,'#c8a870',22,-132,11,8);dot(g,'rgba(255,255,255,.6)',-8,-60+b,2);dot(g,'rgba(255,255,255,.6)',5,-52+b,1.6)}),
 /* Totò: abito scuro, bombetta, volto lungo e mobile, cravatta a farfalla, bastone */
 NP('n2_toto',NAME.n2_toto,10125,GREET.n2_toto,{skin:'#e0b896',top:'#2a2a34',bot:'#2a2a34',hair:'#1a1a1e',s:1.04},(g,b,t)=>{rect(g,'#1a1a1e',-10,-124+b,20,12);el(g,'#1a1a1e',0,-112+b,17,3.6);rect(g,'#f4f0e6',-3,-92+b,6,14);poly(g,'#14110f',[[-9,-90+b],[0,-87+b],[9,-90+b],[0,-93+b]]);
  el(g,'#e0b896',2,-92+b,5,6);rect(g,'#14110f',3,-102+b,8,1.6);ln(g,'#5a3a22',2.4,[20,-4,20,-70]);dot(g,'#c8a838',20,-72,3.4);rect(g,'#f4f0e6',-14,-60,6,12)}),
 /* Enzo: giacca bianca da barista, farfallino, strofinaccio, tazzina sul vassoio, baffetti curati */
 NP('n2_enzo',NAME.n2_enzo,12310,GREET.n2_enzo,{skin:'#d8a078',top:'#f4f0e6',bot:'#14110f',hair:'#3a3a3e',s:1.02},(g,b,t)=>{rect(g,'rgba(0,0,0,.14)',-12,-88+b,3,44);poly(g,'#14110f',[[-6,-89+b],[0,-86+b],[6,-89+b],[0,-92+b]]);rect(g,'#f4f0e6',-18,-78,8,14);rect(g,'#14110f',2,-98+b,8,1.8);
  ln(g,'#c8c8c4',2,[16,-74,30,-84]);el(g,'#c8c8c4',32,-86,12,2.4);rect(g,'#f4f0e6',27,-95,6,7);rect(g,'#6a3a22',28,-94,4,2);for(let q=0;q<2;q++)el(g,'rgba(230,230,230,'+(.35*(1-((t*.6+q*.5)%1)))+')',30+Math.sin(t+q)*2,-100-((t*20+q*10)%14),2.6,2)}),
 /* Nando: maglione a righe blu e bianche, cappello di tela, reti sulla spalla, mani segnate dal sale, pipa spenta */
 NP('n2_nando',NAME.n2_nando,14330,GREET.n2_nando,{skin:'#c88a64',top:'#3a5a8a',bot:'#4a4a3a',hair:'#d8d8d8',s:1.02},(g,b,t)=>{for(let q=0;q<5;q++)rect(g,'rgba(244,240,230,.7)',-13,-86+q*9+b,26,3);
  el(g,'#c8b890',0,-112+b,18,4.2);rect(g,'#c8b890',-10,-122+b,20,10);rect(g,'#8a7a5a',-10,-114+b,20,2);ln(g,'#8a8a6a',1.2,[-10,-84,-20,-48,-16,-20]);for(let q=0;q<5;q++)ln(g,'rgba(140,170,170,.7)',.8,[-12-q*2,-80+q*10,-18-q*2,-74+q*10]);
  ln(g,'#3a2a1a',2,[6,-98+b,12,-94+b]);dot(g,'#3a2a1a',13,-93+b,2.4)}),
 /* Virgilio: toga bianca con il bordo scuro, sandali, un rotolo di papiro, capelli corti e fronte alta, ghirlanda d'alloro */
 NP('n2_virgilio',NAME.n2_virgilio,18480,GREET.n2_virgilio,{skin:'#e0b896',top:'#ece6d6',bot:'#ece6d6',hair:'#3a2a1a',long:1,s:1.04},(g,b,t)=>{rect(g,'rgba(0,0,0,.1)',-13,-88+b,5,44);poly(g,'#d4cdb8',[[-13,-90+b],[8,-88+b],[12,-60+b],[-6,-56+b]]);ln(g,'#8a3a3a',2,[-13,-48,13,-48]);
  for(let q=0;q<6;q++){dot(g,'#4a8a3a',-10+q*4,-113+b-(q%2)*1.4,2.2)}rect(g,'#e8dcc0',14,-84,6,26);el(g,'#d8c8a0',17,-84,4,2.4);el(g,'#d8c8a0',17,-58,4,2.4);ln(g,'#8a6a3a',.8,[15,-78,19,-78]);ln(g,'#8a6a3a',.8,[15,-72,19,-72])}),
 /* Awa: giacca di jeans, foulard colorato sui capelli, zaino con i tubi dei disegni, taccuino e matita, sorriso ampio */
 NP('n2_awa',NAME.n2_awa,22600,GREET.n2_awa,{skin:'#8a5a3e',top:'#4a6a9a',bot:'#2a2a36',hair:'#14110f',s:1.0},(g,b,t)=>{rect(g,'#3a5a8a',-12,-88+b,24,28);rect(g,'rgba(255,255,255,.15)',-12,-88+b,3,28);poly(g,'#e8402a',[[-12,-110+b],[12,-110+b],[14,-102+b],[-14,-102+b]]);for(let q=0;q<4;q++)rect(g,['#f2c82a','#2a8ac8','#4aa84a','#f4f0e6'][q],-10+q*6,-108+b,4,5);
  rect(g,'#6a4a2a',-22,-86,10,34);ln(g,'#d8d0b8',4,[-20,-90,-14,-120]);rect(g,'#f4f0e6',14,-74,10,14);ln(g,'#2a2a30',1,[18,-72,26,-62]);dot(g,'#f4f0e6',-3,-98+b,1.4);dot(g,'#f4f0e6',4,-98+b,1.4)})
];
/* ---- oggetti lungo il percorso ---- */
const LX=[450,1110,1680,2200,2850,3600,4400,4700,5400,6000,6500,6980,8000,8600,9150,9700,10200,11150,11830,12400,13100,14150,15150,15750,16200,17000,17800,18500,19500,20050,20700,21500,22200,22800,23700,24450,25200,26000,26500];
const props=[
 /* zona 1 · Porta Nolana e Porta Capuana */
 ['n2targa',140,'PORTA NOLANA'],['n2lampione',300,0],['n2nolana',450],['bucato',640,200],['n2banco',700,'#2a78d0'],['n2banco',880,'#c8281e'],['n2motorino',960,'#c8402a'],['n2capuana',1110],['bucato',1300,220],['n2lampione',1470,0],['edicola',1520],['n2bar',1680],['n2tavolini',1840],['n2carretto',1990,1],['n2sfoglia',2200],['n2motorino',2340,'#7ac0e0'],
 /* zona 2 · Spaccanapoli e San Gregorio Armeno */
 ['n2targa',2580,'SPACCANAPOLI'],['n2spacca',2850],['n2motorino',3040,'#e8c428'],['n2lampione',3120,0],['bucato',3140,200],['n2guglia',3240],['n2gesu',3430],['n2santachiara',3700],['n2chiostro',4060],['n2gatto',4260,'#3a3a3e'],['n2sansevero',4400],['n2presepi',4700],['n2lampione',5040,0],
 /* zona 3 · Via dei Tribunali, Duomo, Pio Monte, San Gaetano */
 ['n2targa',5180,'VIA DEI TRIBUNALI'],['n2pizzeria',5400],['n2tavolini',5690,'#c8402a'],['n2cornetti',5800],['n2duomo',6000],['n2lampione',6190,0],['n2piomonte',6500],['n2targa',6770,'PIAZZA SAN GAETANO'],['n2gaetano',6980],['n2gatto',7260,'#c9873a'],['n2motorino',7330,'#2a62b8'],['n2lampione',7450,0],
 /* zona 4 · Rione Sanità */
 ['n2targa',7680,'RIONE SANITÀ'],['n2ponte',8000],['n2motorino',8300,'#c8281e'],['bucato',8460,220],['n2spagnolo',8600],['n2carretto',8850,3],['n2catacombe',9150],['n2fontanelle',9700],['n2targa',9980,'VIA ANTESAECULA'],['n2totocasa',10200],['n2motorino',10450,'#7ac0e0'],['n2lampione',10540,0],
 /* zona 5 · Via Toledo, Galleria, San Carlo, Gambrinus, Plebiscito */
 ['n2targa',10700,'VIA TOLEDO'],['n2toledo',10950],['n2cornetti',11180],['n2metro',11340],['n2galleria',11660],['n2sancarlo',12000],['n2gambrinus',12400],['n2lampione',12580,0],['n2plebiscito',12900],['n2carrozza',13130],['n2maschio',13400],
 /* zona 6 · Santa Lucia, Borgo Marinari, Castel dell'Ovo */
 ['n2targa',13800,'BORGO MARINARI'],['n2borgo',14150],['n2lampione',14560,1],['n2ovo',15150],['n2sirena',15750],['n2santalucia',16200],
 /* zona 7 · Mergellina e Posillipo */
 ['n2targa',16600,'MERGELLINA'],['n2mergellina',17000],['n2piedigrotta',17800],['n2tomba',18400],['n2crypta',18900],['n2donnanna',19500],['n2lampione',19760,0],['n2posillipo',20050],
 /* zona 8 · Vomero, Certosa, Sant'Elmo */
 ['n2targa',20400,'VOMERO'],['n2funicolare',20700],['n2certosa',21500],['n2santelmo',22200],['n2belvedere',22800],
 /* zona 9 · lungomare e Vesuvio */
 ['n2lampgiallo',23400],['n2muretto',23700],['n2lampgiallo',23960],['n2rotonda',24450],['n2lampgiallo',24700],['n2ovonotte',25200],['n2lampgiallo',25560],['n2vesuvio',26000],['n2pescatore',26250],['n2varco',26500]
];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'napoli2',name:'Napoli 2 · Da Porta Nolana al golfo',width:W1,sky:['#7a8ac4','#f4a8b4','#ffd2a8'],gt:372,gr:['#6e6a66','#4a4642'],chord:[196,246.9,293.7,370],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da napoli2.txt) --- */
(function(){
const TOPX_N2={
n2_gennaro:[
["Chi sei e che fai?","Gennaro, cinquantotto anni, pescivendolo come mio padre e mio nonno. Mi alzo alle quattro, quando il mercato è ancora mezzo al buio e il mare è tutto da portare qua. Mannaggia, il freddo di quest’ora... ma ’o pesce nun aspetta."],
["Cos’è questa porta?","Porta Nolana, del Quattrocento, dei tempi degli Aragonesi. Le due torri si chiamano Fede e Speranza: e per fare il mercato servono tutt’e due! Ci passa gente da secoli e nessuno ha mai pagato il biglietto."],
["Cosa si compra a quest’ora?","Adesso vengono le signore con la sporta e la lista in testa, e i ristoratori che scelgono per il pranzo. Alici, polpi, cozze, vongole, triglie: quello che ha dato il golfo. Dopo le nove arrivano anche i turisti, e il mercato diventa una festa."],
["Che pesce mi consigli?","Dipende dalla giornata: oggi le alici e i polpi sono un sogno, le vongole sono perfette per gli spaghetti. Guarda l’occhio: un pesce fresco ha l’occhio lucido e sa di mare, non di niente. Se ti dicono il contrario, scappa!"],
["Come si cucina?","Alici fritte, polpo bollito con limone, zuppa di cozze, spaghetti alle vongole: i classici. La frittura di paranza, tanti pesciolini piccoli in un cuoppo di carta, si mangia con le mani, in piedi. Buon appetito, Pierpaolo!"],
["Cosa si mangia alla Vigilia di Natale?","Si mangia di magro, ma tantissimo: spaghetti con le vongole, il baccalà, il capitone, le fritture. Per i napoletani la Vigilia senza pesce non è Vigilia. Il giorno dopo si fa la pausa... e poi si ricomincia!"],
["Cos’è il caffè sospeso?","Si paga un caffè in più e si lascia al banco per chi non può permetterselo: lo chiede lui, senza spiegazioni. Si dice che sia nato nel dopoguerra, ma nessuno è sicuro. Ogni 10 dicembre c’è anche una giornata dedicata."],
["Perché tanti portano un cornetto rosso?","È il cornicello portafortuna, contro il malocchio. Si dice che non si debba comprare da soli, ma ricevere in regalo, così porta bene. A me l’ha regalato mia moglie e da trent’anni nun l’ho più tolto."],
["Come si parla qui?","Con parole che l’italiano non ha: \"guagliò\" vuol dire ragazzo, \"uè\" è un saluto o una sorpresa, \"jamme\" è \"andiamo\". E si parla con le mani: se mi agito, non sto litigando, sto solo spiegando."],
["Com’è questo quartiere?","Qui vicino c’è la stazione, e passano persone da ogni parte del mondo. Al mercato senti il napoletano, l’italiano e tante altre lingue che si mescolano. Il pesce lo vendiamo a tutti, e tutti ridono lo stesso."],
["Dove vado dopo?","Cammina verso Spaccanapoli, la strada dritta che taglia il centro. A San Gregorio Armeno c’è Assunta, che fa i presepi. Dille che ti manda Gennaro ’o pescatore: ti fa vedere il Natale tutto l’anno."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e stai attento ai motorini, che qui passano dappertutto! Statte buono, e torna quando vuoi: le alici sono sempre fresche. Ciao, guagliò!"]
],
n2_assunta:[
["Chi sei e che fai?","Assunta, quarantun anni, presepaia come mio padre. Faccio le statuine: la terracotta, i vestiti di stoffa, gli occhi di vetro. Un pastore piccolo vuole una settimana: la pazienza è tutto, guagliò."],
["Perché il presepe è così importante a Napoli?","Perché è il nostro teatro: dentro c’è la Natività, ma anche il pescivendolo, la lavandaia, l’oste, il mercato. Si dice che nel Settecento Carlo di Borbone amasse tanto il presepe da prepararlo a corte; così diventò una moda per i nobili e poi per tutti. Da allora non ci ha più lasciati."],
["Chi sono i personaggi?","Benino, il pastore che dorme: si dice che tutto il presepe sia il suo sogno. Poi ci sono la lavandaia, il pescatore, il monaco che fa la questua, i Re Magi. Ogni famiglia ha i suoi preferiti, e litiga per metterli al posto giusto."],
["E quelle statuine di personaggi famosi?","Quelle sono la nostra satira: ogni anno facciamo calciatori, cantanti, personaggi della TV. Nessuno si offende... quasi! Il presepe di San Gregorio Armeno mescola il sacro e il profano, e ai napoletani va bene così."],
["Come si fa un pastore?","La testa, le mani e i piedi sono di terracotta dipinta; il corpo è di fil di ferro e stoppa; i vestiti si cuciono a mano. Gli occhi sono di vetro, per questo ti guardano. Poi si fa il paesaggio con sughero e muschio, chiano chiano."],
["Quando si fa il presepe?","Le botteghe lavorano tutto l’anno, ma da novembre la via è piena di gente. Nelle case lo si prepara intorno all’8 dicembre e lo si lascia fino al 6 gennaio. Quel giorno si smonta tutto con un po’ di nostalgia."],
["Cos’è la Cappella Sansevero?","Là c’è il Cristo velato, scolpito nel 1753 da Giuseppe Sanmartino: un velo di marmo così sottile che sembra stoffa vera. Si racconta che il principe di Sansevero, alchimista, avesse insegnato il segreto allo scultore: una leggenda, ma ci credono in tanti. Tra gli studenti si dice che prima della laurea sia meglio non andarci!"],
["Cosa c’è a Santa Chiara?","Un chiostro di maioliche dipinte, un giardino di piastrelle gialle, verdi e azzurre, rifatto nel Settecento. Nel 1943 un bombardamento distrusse gran parte della chiesa, ma il chiostro si salvò. Fa impressione, quel contrasto."],
["Cosa si mangia a Natale?","Gli struffoli, palline di pasta fritte nel miele, e i roccocò. La sera della Vigilia si gioca a tombola, con i numeri che hanno ognuno un significato: è la smorfia. Si gridano i numeri ridendo, e il nonno bara sempre."],
["Che usanze ci sono?","Il 17 gennaio si accendono i falò di Sant’Antonio Abate; il 19 settembre si aspetta il sangue di San Gennaro. Napoli è una città che crede e scherza insieme, e a volte non sai dove finisce l’una e comincia l’altra. Mi piace così."],
["Dove vado dopo?","Vai in Via dei Tribunali, qui dietro: pizzerie, il Duomo, San Gennaro. Lì c’è Ciro, il pizzaiolo, che ti fa una Margherita come si deve. Digli che ti manda Assunta."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se torni a dicembre trovi la via così piena che dovrai camminare di lato! Statte buono, e buon viaggio. Ciao!"]
],
n2_ciro:[
["Chi sei e che fai?","Ciro, trentasette anni, pizzaiolo di famiglia. Alle sei di mattina lavoro l’impasto, a mezzogiorno accendo il forno a legna e fino a notte non mi fermo. È una vita che profuma di farina e di fuoco."],
["Che c’entra l’UNESCO con la pizza?","Dal dicembre 2017 l’arte del pizzaiolo napoletano è patrimonio immateriale dell’umanità. Non la pizza in sé, ma il gesto: impastare, stendere a mano, infornare. Quando l’hanno annunciato, in strada hanno festeggiato come per uno scudetto."],
["Come si fa la pizza?","Farina, acqua, sale e lievito: quattro cose, ma ci vuole tempo, perché l’impasto deve riposare e lievitare. Si stende con le mani, mai con il mattarello, lasciando il bordo alto, il cornicione. Nel forno a legna bastano meno di due minuti."],
["Margherita e marinara?","La marinara ha pomodoro, aglio e origano; la Margherita pomodoro, mozzarella e basilico. Si dice che nel 1889 il pizzaiolo Raffaele Esposito ne preparò una con i colori della bandiera per la regina Margherita di Savoia. Nessuno sa se è andata proprio così, ma è una bella storia."],
["Esistono altri tipi di pizza?","Sì: la pizza fritta, che è un calzone che fa il bagno nell’olio, e la pizza a portafoglio, piegata in quattro e mangiata per strada, con la carta. Si dice che la portafoglio sia nata per chi non aveva tempo di sedersi. Sono quelle che mangio quando esco con gli amici."],
["Cos’è il 17 gennaio?","È Sant’Antonio Abate, protettore del fuoco e, per noi, dei pizzaioli. Si accendono i falò e si fa festa; ormai è anche la Giornata mondiale della pizza. Quel giorno nessun napoletano resiste."],
["Come si mangia la pizza?","Con coltello e forchetta se sei educato, con le mani se sei napoletano. La si mangia calda, subito, appena esce dal forno, che la pizza fredda è un delitto. E dopo, un caffè: la pizza e il caffè sono sposati."],
["Cosa c’è nel Duomo?","Il sangue di San Gennaro, il patrono. Tre volte l’anno (a maggio, il 19 settembre e il 16 dicembre) la città aspetta con il fiato sospeso che nell’ampolla si sciolga. Quando succede, c’è l’applauso, e si dice che sia buon segno per tutta Napoli."],
["Cosa c’è sotto questa piazza?","Sotto Piazza San Gaetano c’era l’agorà dei Greci, poi il foro romano. Napoli Sotterranea è fatta di tufo, cisterne e cunicoli: per questo si dice che qui due città vivono una sopra l’altra. Io ci scendo solo con la guida, mannaggia, che mi perdo."],
["Cosa mangi la domenica?","Il ragù: carne e pomodoro che cuociono per ore, piano piano, e la casa profuma già dalla mattina. Si mangia con i maccheroni e poi la carne a parte. Il pranzo della domenica, in famiglia, è sacro."],
["Dove vado dopo?","Va’ alla Sanità, un quartiere appena sopra il centro: il ponte, i palazzi, le catacombe. Lì è nato un principe: Totò. Chi lo incontra, ride dall’anima."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando torni ti faccio una pizza fritta che te la ricordi per un mese. Statte buono, e buon appetito! Ciao!"]
],
n2_toto:[
["Chi sei?","Antonio De Curtis, detto Totò, nato qui, nel rione Sanità, il 15 febbraio 1898. Mia madre, Anna Clemente, mi chiamava Totò e così sono rimasto: un nome piccolo per una faccia grande. Chi mi vuole bene dice \"il principe della risata\"."],
["Hai davvero un titolo nobiliare?","Sì, per via di una storia lunga: nel 1933 fui adottato da un marchese, Francesco Maria Gagliardi Focas, e un tribunale di Napoli, nel 1946, mi riconobbe nome e titoli. Sono un principe, ma il principe non mi ha mai dato da mangiare: a farlo è sempre stato Totò. Mi faccia il piacere, non lo dica al notaio."],
["Com’è iniziata la tua carriera?","Dal teatro, dall’avanspettacolo: si recitava in sale piccole, con il pubblico a un metro, e bisognava far ridere subito. Poi è venuto il cinema. Ho fatto tanti film, e a volte le facce che facevo mi sembravano più vere di quelle vere."],
["Quali sono i tuoi film più famosi?","Guardie e ladri, nel 1951; Miseria e nobiltà, con la scena degli spaghetti; Siamo uomini o caporali?, del 1955; Totò, Peppino e la malafemmina, del 1956. Con Pasolini ho fatto Uccellacci e uccellini. Insomma, ho lavorato assai."],
["Chi era Peppino?","Peppino De Filippo, il mio compagno di scena: io ero il furbo, lui il povero che subiva. Insieme facevamo ridere anche i muri. Nel rione ci hanno dipinti sul muro, nella scena della Banda degli onesti: vada a vederli."],
["Cosa scrivevi oltre ai film?","Poesie in napoletano e canzoni. Nel 1951 scrissi Malafemmena, diventata un classico della canzone napoletana. Una mia poesia, ’A livella, parla di quanto siamo uguali davanti alla morte: non le dico i versi, vada a leggerla."],
["Com’era il rione quando eri ragazzo?","Povero e vivo: vicoli stretti, panni stesi, mercato, vicini che sapevano tutto di tutti. Si viveva in strada e si imparava a far ridere per non piangere. Oggi vedo che i ragazzi hanno fatto rinascere il rione, e ne sono contento."],
["Cosa sono le Fontanelle?","Una grande cava dove, dopo la peste del 1656 e il colera del 1836, furono portati circa quarantamila morti, quasi tutti poveri e senza nome. I napoletani li hanno \"adottati\" con rispetto, perché le anime avessero pace. Qui non si scherza: ci si leva il cappello."],
["È vero che non vedevi più bene?","Verissimo. Negli ultimi anni ho quasi perso la vista, ma ho lavorato fino alla fine. Il pubblico non lo sapeva: bastavano la voce e un po’ di mestiere. Mi faccia il piacere, il cinema si fa anche a tentoni."],
["Cos’è successo alla fine?","Morii a Roma, il 15 aprile 1967, a sessantanove anni. Ci furono due funerali, uno a Roma e uno a Napoli, con una folla enorme per le strade. Riposo nella cappella di famiglia, nel cimitero di Santa Maria del Pianto: sono tornato a Napoli, come volevo."],
["Dove vado dopo?","Scenda verso il centro, per Via Toledo: la grande strada, la Galleria, il caffè. Lì c’è Enzo, che prepara il caffè come un’opera d’arte. Gli dica che lo manda il Principe, così le fa lo sconto... forse."],
["Posso salutarti e proseguire la mia passeggiata?","Vada, giovanotto, e si ricordi: la risata è una cosa seria. Arrivederci, Pierpaolo, e che San Gennaro la protegga. Mi faccia il piacere, saluti Napoli da parte mia!"]
],
n2_enzo:[
["Chi sei e che fai?","Enzo, quarantanove anni, barista. Faccio il caffè da quando ero ragazzo; per me è più un rito che una bevanda. Mia moglie dice che sono sposato con la macchina, e un po’ ha ragione."],
["Come si beve il caffè?","In piedi, al banco, in pochi sorsi: la tazzina deve essere bollente e il caffè cremoso. Si paga alla cassa e poi si porta lo scontrino al bancone. A casa tanti usano ancora la cuccumella, la caffettiera napoletana che si capovolge."],
["Com’è nato il Gambrinus?","Nel 1860, come \"Gran Caffè\", accanto alla piazza e al Palazzo Reale: diventò subito il salotto di artisti, scrittori e politici. Le sale sono piene di stucchi e specchi. Si dice che qui sia nata una canzone famosissima, ma non ti dico quale!"],
["Che dolci ci sono?","Il babà, morbido e bagnato al rum; la sfogliatella riccia, croccante, e la frolla; la pastiera a Pasqua; le zeppole di San Giuseppe, il 19 marzo, con crema e amarena. Ogni festa ha il suo dolce. A Napoli non si sbaglia mai calendario."],
["Cos’è il San Carlo?","Il teatro qui accanto: lo volle Carlo di Borbone, inaugurato il 4 novembre 1737, il giorno del suo onomastico. È il più antico teatro d’opera ancora in attività. Dentro è tutto rosso e oro: ci si veste bene anche solo per guardare la facciata."],
["E la Galleria Umberto?","È la galleria con la cupola di vetro: ci passano tutti, d’estate è fresca e d’inverno riparata. Il pavimento è un mosaico da guardare con il naso in giù, la cupola con il naso in su. È il salotto di tutti i napoletani, anche di quelli che non hanno un salotto."],
["Come si vive ai Quartieri Spagnoli?","In strada: i bassi con la porta aperta, i panni stesi, i bambini che giocano a pallone, la signora che chiama dal balcone. Un tempo erano i quartieri dei soldati spagnoli, oggi sono pieni di trattorie e di murales. Ai napoletani il rumore non dà fastidio: è compagnia."],
["Cosa rappresenta Maradona per Napoli?","Più di un calciatore: arrivò nel 1984 e vinse gli scudetti del 1987 e del 1990. Quando morì, nel 2020, la città si fermò, e lo stadio ha preso il suo nome. Poi il Napoli ha vinto di nuovo nel 2023 e nel 2025, e la città è tornata a cantare."],
["Com’è la metro?","La stazione Toledo è un museo sottoterra: mosaici, luce blu come in mare. Molti turisti la fotografano senza nemmeno prendere il treno. Io dico: se vuoi vedere Napoli dal basso, scendi lì."],
["Come comunicano i napoletani?","Con le mani, soprattutto: la mano \"a borsetta\" vuol dire \"ma che dici?\", la mano che si agita vuol dire \"pazienza\". Se non capisci, guarda: il gesto è metà del discorso. A volte basta uno sguardo per dirsi tutto."],
["Dove vado dopo?","Giù verso il mare: Santa Lucia, il castello, il Borgo Marinari. Lì c’è Nando, un vecchio pescatore che ne sa una più del diavolo. Digli che ti manda Enzo del caffè."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati: la tazzina si beve calda e la compagnia si divide. Statte buono, e alla prossima! Ciao!"]
],
n2_nando:[
["Chi sei e che fai?","Nando, sessantatré anni, nato a Santa Lucia. Uscivo di notte con il gozzo e tornavo all’alba col pesce. Oggi ripulisco le reti e racconto storie ai ragazzi."],
["Com’è il Borgo?","Un piccolo porto con le barche, i circoli nautici, i ristoranti. Una volta c’erano solo pescatori e reti stese; oggi ci vengono a mangiare da tutta la città. Ma al mattino presto è ancora nostro."],
["Cos’è questo castello?","Castel dell’Ovo, il più antico di Napoli, su un isolotto che si chiamava Megaride. Secondo la tradizione qui approdarono i primi Greci, e in epoca romana c’era la villa di Lucullo. Per un pescatore è un faro: lo vedi da lontano e sai che sei a casa."],
["Perché si chiama \"dell’Ovo\"?","Perché, si dice, il poeta Virgilio nascose un uovo magico nelle fondamenta, dentro una gabbia: finché l’uovo non si rompe, il castello sta in piedi e la città è salva. È una leggenda, ma i napoletani ci credono: non si sa mai!"],
["Chi è la sirena Partenope?","Il mito dice che la sirena, rifiutata da Ulisse, finì sulla riva proprio qui. Da lei viene il primo nome della città: Partenope. Per questo ci chiamiamo anche \"partenopei\". Si dice che qualcuno la senta ancora cantare, ma io ho sentito solo i gabbiani."],
["Cosa si mangia di mare?","La frittura di paranza, tanti pesciolini piccoli; il polpo alla luciana, cotto con pomodoro e olio; la zuppa di cozze, gli spaghetti alle vongole. Quando mangi sul mare, non chiedere cosa hanno pescato ieri: chiedi cosa hanno pescato oggi. Chi lo sa, risponde subito!"],
["Com’è il mestiere del pescatore?","Duro: si esce di notte, si torna presto, il mare comanda. Ma quando c’è la luna sul golfo, non lo cambierei con nessun altro. E i gabbiani sono i padroni del porto: fanno la guardia ai pesci."],
["Le canzoni napoletane?","Napoli è canzone: Santa Lucia, ’O sole mio, Funiculì Funiculà. Si cantano a tavola, in barca, alle feste. ’O sole mio è del 1898: tutto il mondo la canta, ma a cantarla qui ti viene la pelle d’oca."],
["Dove si fa il bagno?","Sugli scogli, d’estate. Davanti alla Rotonda Diaz c’è il lido Mappatella, una spiaggetta libera per tutti: i napoletani vengono con l’asciugamano, la \"mappatella\", e si arrangiano. Basta un pezzo di mare e un po’ di sole."],
["Cos’è il Vesuvio per voi?","’O Vesuvio è il nostro vicino di casa: lo guardiamo ogni giorno e ci fa compagnia, ma lo rispettiamo. È alto più di milleduecento metri, ha seppellito Pompei nel 79 d.C. e la sua ultima eruzione è del 1944. Oggi dorme... speriamo che continui!"],
["Dove vado dopo?","Verso Mergellina, lungo il mare: il porto, la chiesa di Piedigrotta e, dentro il parco, un antico poeta. Uno con la toga: non ti spaventare, è Virgilio. Salutalo da parte mia."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se hai fame passa a mangiare con me: il pesce lo so scegliere io. Statte buono, e che il mare ti sia leggero! Ciao!"]
],
n2_virgilio:[
["Chi sei?","Publio Virgilio Marone, poeta. Nacqui il 15 ottobre del 70 a.C. ad Andes, vicino Mantova, e morii a Brindisi nel 19 a.C. Ho scritto le Bucoliche, le Georgiche e l’Eneide. Mi chiamano il poeta di Roma, ma il mio cuore era qui."],
["Perché Napoli?","Perché qui trovai la quiete per studiare e scrivere. Il filosofo Sirone, un epicureo, mi insegnò qui la sua filosofia. E qui concepii le Georgiche, il poema della terra e dei campi."],
["Com’era la città ai tuoi tempi?","Neapolis era ancora una città greca di lingua e di cultura: si parlava greco, si facevano giochi e spettacoli. I Romani vi venivano a riposare e a studiare. Il golfo era azzurro come adesso, se mi permetti."],
["Cosa racconta l’Eneide?","Racconta di Enea che fugge da Troia e arriva in Italia: è il poema della fondazione di Roma. Molti secoli dopo un altro poeta, Dante, mi scelse come guida nel suo viaggio. Non so se meritavo l’onore, ma ne sono felice."],
["Cos’è la Crypta Neapolitana?","Una galleria lunga circa settecento metri, scavata nel tufo ai tempi di Augusto, fra Mergellina e Fuorigrotta. Dicono che l’abbia scavata io in una notte, con la magia: sciocchezze, i Romani avevano ingegneri bravissimi. Ma mi piace che lo dicano."],
["Perché ti chiamano mago?","Nel Medioevo i napoletani fecero di me un mago: tante leggende, fra cui la gabbia con l’uovo nelle fondamenta del Castel dell’Ovo. Io ero un poeta, non un incantatore. Ma i miracoli, a volte, sono soltanto versi ben scritti."],
["È davvero la tua tomba?","Questo edificio romano, in cima al parco, è chiamato \"tomba di Virgilio\" da secoli, ma non c’è certezza che le mie ossa vi siano arrivate. Accanto, dal 1939, riposa anche Giacomo Leopardi, che morì a Napoli nel 1837. Siamo buona compagnia, due poeti sulla stessa collina."],
["Cosa significa Posillipo?","Viene dal greco Pausilypon: \"che fa cessare il dolore\". Mi sembra azzeccato: basta guardare il golfo per sentirsi più leggeri. Qui i Romani avevano ville affacciate sul mare, e oggi ci sono i bagnanti."],
["Come sei morto?","Tornavo dalla Grecia con l’imperatore Augusto, mi ammalai e morii a Brindisi, nel 19 a.C. L’Eneide non era finita. Si racconta che volessi bruciarla; Augusto la salvò, e gliene sono grato."],
["Cosa pensi del Vesuvio?","Ai miei tempi era un monte verde, e nessuno pensava al fuoco. L’eruzione che seppellì Pompei venne nel 79 d.C., quasi un secolo dopo la mia morte. Oggi lo guardo da qui e mi sembra un vecchio amico che dorme."],
["Dove vado dopo?","Sali sulla collina del Vomero, al grande castello a forma di stella. Là ti aspetta Awa, una ragazza che studia architettura e conosce la città come le sue tasche. Sali con la funicolare: è più comodo che salire a piedi."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e guarda il tramonto: è l’ora in cui il golfo somiglia di più ai versi. Vale, e buon viaggio."]
],
n2_awa:[
["Chi sei e che fai?","Awa, venticinque anni, studentessa di architettura. Sono nata a Napoli, i miei genitori vengono dal Senegal. A casa parlo wolof e italiano, per strada napoletano, e a volte tutte e tre in una frase."],
["Cos’è il wolof?","Una lingua del Senegal, che i miei parlano ancora. \"Jërëjëf\" vuol dire grazie. A Napoli lo dico alle mie amiche e loro rispondono \"grazie assaje\": ormai ci scambiamo le parole come figurine."],
["Com’è crescere a Napoli?","Rumoroso e caldo, nel senso buono: i vicini ti conoscono, la signora del piano di sopra ti porta il caffè. Qui si diventa subito della famiglia. A casa mamma cucina il thieboudienne, pesce e riso con le verdure, e il sabato la tavola è piena di amici di ogni origine."],
["Come si sale al Vomero?","Con le funicolari: Chiaia, Montesanto e Centrale. La più antica, quella di Chiaia, aprì nel 1889. La canzone Funiculì Funiculà, però, non parla di loro: è del 1880 e festeggiava la funicolare del Vesuvio."],
["Cos’è Castel Sant’Elmo?","La fortezza a forma di stella a sei punte: la ricostruì il viceré Pedro de Toledo fra il 1537 e il 1547. È scavata nel tufo, con un fossato profondo. Il panorama dal belvedere vicino è gratis, e vale più di un biglietto."],
["Cosa c’è alla Certosa di San Martino?","Un grande monastero sulla collina, oggi museo. Dentro c’è il presepe Cuciniello, uno dei più belli di Napoli: pastori antichi in una scena enorme. Se vuoi un tuffo nel Settecento, vai lì a dicembre."],
["Com’è la vita al Vomero?","È il quartiere delle passeggiate: Via Scarlatti con i negozi, Piazza Vanvitelli con i bar, il gelato dopo cena. I napoletani vengono a \"fare la vasca\", cioè camminare su e giù chiacchierando. Per un’ora il tempo si ferma."],
["Com’è la metro?","La Linea 1 è la \"metro dell’arte\": ogni stazione ha opere di artisti. Toledo, con i mosaici blu e il \"cratere di luce\", è considerata una delle più belle d’Europa. Quando sono in ritardo la odio, poi la guardo e le perdono tutto."],
["Cosa vedo dal belvedere?","Tutto il golfo: Spaccanapoli, che è una linea dritta nel centro, il porto, il mare e il Vesuvio. Nelle giornate limpide si vede anche Capri. Al tramonto la città si accende a poco a poco, come una lampada."],
["Cosa si mangia per strada?","Il cuoppo di fritto, la pizza a portafoglio, il panino con la frittata di maccheroni... Napoli si mangia camminando. Io adoro la frittata di maccheroni nel panino: è la cosa più napoletana che esista."],
["Dove vado dopo?","Scendi sul lungomare: Rotonda Diaz, Via Partenope, il Castel dell’Ovo illuminato. Quando fa buio il golfo si accende, e il Vesuvio resta lì, nero, a guardare. Prendi la funicolare e poi cammina, jamme, ma piano piano."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando senti il mare, fermati: il resto è solo cammino. Jërëjëf per l’ascolto, e a presto! Ciao!"]
]
};
Object.assign(TOPX,TOPX_N2);
})();
