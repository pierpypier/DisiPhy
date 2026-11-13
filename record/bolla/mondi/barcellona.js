/* ---------- BARCELLONA · Dalla Boqueria alla Font Màgica (Boqueria e Rambla, Barri Gòtic, Born e Ciutadella, Barceloneta, Eixample e Passeig de Gràcia, Sagrada Família, Gràcia e Park Güell, Montjuïc, Plaça d'Espanya e Font Màgica) ---------- */
/* Un'intera giornata da sinistra a destra: alba al mercato della Boqueria e sulla Rambla, mattina nel Barri Gòtic fra mura romane e cattedrale,
   tarda mattina al Born e nel Parco della Ciutadella, mezzogiorno alla Barceloneta fra case di pescatori e spiaggia, primo pomeriggio sul Passeig de Gràcia,
   pomeriggio alla Sagrada Família, tardo pomeriggio a Gràcia e al Park Güell, tramonto sulla collina di Montjuïc, notte a Plaça d'Espanya davanti alla Font Màgica.
   Il varco finale è l'ultimo getto della fontana, che sale illuminato verso il Palau Nacional. Il tempo si piega: Gaudí convive con la gente di oggi, e la città è quella di oggi.
   Testi, tappe e dialoghi vengono da barcellona.txt (definitivi, usati senza riscriverli; solo l'apostrofo e le virgolette sono resi tipografici). Gli oggetti stanno in elementi.js (nomi che iniziano per "bc").
   Il tono per i temi dolorosi (il bombardamento del 1938, la caduta della città nel 1714, l'incidente di Gaudí) è sempre sobrio e rispettoso; le leggende sono presentate con "si dice". */
(function(){
const GT=372,W1=27500;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln,gatto}=PR._rm;
const {pino,cipr,cas}=PR._md;
const {nf,plano,palma,lamp,cup,spire,GO,IR,crane}=PR._bc;
const md=(i,n)=>((i%n)+n)%n;
const Z=[0,3000,6600,9300,12100,15000,17900,20700,23800];   /* inizio di ognuna delle 9 zone */
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* ---- cielo: alba chiara col rosa sul mare, mattina luminosa, mezzogiorno pieno, pomeriggio dorato, tramonto rosa e arancio, crepuscolo blu intenso, notte viola e oro ---- */
const SKY=[[0,['#7ea6e0','#f4c8cc','#ffd8b8']],[1400,['#4a9cf0','#a8d4f4','#f0f0e8']],[Z[1],['#2a84ec','#74b8f4','#d8ecf8']],[Z[2],['#2a7ee0','#78b8f0','#e4f0f4']],[Z[3],['#3a8ce8','#a8d4f4','#fafaf6']],[Z[4],['#4a92e4','#b8d4ee','#fcf0d0']],[Z[5],['#5a9ae0','#d0d4e0','#ffe6b0']],[Z[6],['#6a92d4','#ecc890','#ffcf90']],[Z[7],['#5a6ec0','#f0a080','#ffc080']],[22300,['#2a3a8a','#9a5aa0','#f08a6a']],[Z[8],['#14205e','#3a2f84','#8a4a9a']],[25800,['#0a1040','#1e1a5a','#4a2a7a']],[W1+400,['#080c36','#1a1450','#3e2470']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,40*s,5*s);el(g,c,x-22*s,y+2*s,26*s,4*s);el(g,c,x+26*s,y+2*s,30*s,4*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Barcellona, dall’alba alla notte. Parti dal mercato della Boqueria, quando i banchi del pesce e della frutta si aprono sulla Rambla; poi il Barri Gòtic ti porta fra le colonne di un tempio romano, la cattedrale e le sue oche. Nella tarda mattina il Born e il parco della Ciutadella; a mezzogiorno la Barceloneta, con le sue case basse e la spiaggia. Nel primo pomeriggio il Passeig de Gràcia e le case di Gaudí; poi la Sagrada Família, che finalmente ha la sua torre più alta, e il Park Güell con i suoi mosaici. Al tramonto la collina di Montjuïc guarda tutta la città; a notte l’acqua della Font Màgica cambia colore. Il tempo qui si piega: gli abitanti di ogni epoca ti vengono incontro, e la città è quella di oggi.";
const LKTXT=[
"La Rambla: 1,2 chilometri di viale alberato fra Plaça de Catalunya e il porto. Un tempo era un torrente stagionale fuori dalle mura; il nome viene, si ritiene, da una parola araba che indica un letto di sabbia. In cima c’è la Font de Canaletes: si dice che chi ne beve torna a Barcellona, e qui i tifosi del Barça festeggiano le vittorie.",
"Al Pla de l’Os il pavimento della Rambla è un mosaico di Joan Miró, inaugurato nel 1976: cerchi, linee nere e macchie di rosso, giallo, blu e bianco su cui tutti camminano senza accorgersene. Poco più su c’è il Gran Teatre del Liceu, il teatro dell’opera, aperto nel 1847, ricostruito dopo gli incendi del 1861 e del 1994 e riaperto nel 1999.",
"La Boqueria, il Mercat de Sant Josep: le prime tracce di banchi di carne vicino all’antica porta risalgono al 1217. Il mercato attuale ha avuto la prima pietra il 19 marzo 1840, su progetto di Josep Mas i Vila, sul terreno di un convento bruciato nel 1835; l’ingresso con le vetrate colorate è del 1913 e la grande tettoia di ferro del 1914. Oggi ha più di duecento banchi.",
"Qui il pesce arriva dalla costa: gamberi rossi, seppie, calamari, sardine, e il merluzzo salato che si mette a bagno per un giorno prima di cucinarlo. I banchi del pesce sono entrati nella parte centrale del mercato solo nel 1911. Si compra chiedendo al banco, non toccando.",
"Appena dietro la Rambla c’è Plaça Reial, una piazza con i portici, le palme e una fontana. I due lampioni a sei bracci, con un elmo alato in cima, li ha disegnati nel 1879 un giovane Gaudí: è la sua prima commissione pubblica a Barcellona.",
"Barcellona nasce come Barcino, una colonia romana fondata fra il 15 e il 10 a.C. sotto Augusto, su una piccola altura chiamata Mons Taber. Di quel tempo restano tratti delle mura, che arrivano fino al IV secolo, e quattro colonne del tempio nel cortile di un edificio di Carrer del Paradís.",
"La cattedrale della Santa Croce e di Sant’Eulalia: i lavori del Gotico cominciarono il 1° maggio 1298 e durarono circa centocinquant’anni; la facciata neogotica è dell’Ottocento (1887-1890) e la torre centrale fu finita nel 1913. Nel chiostro vivono tredici oche bianche, una per ogni anno che, secondo la tradizione, aveva Eulalia quando fu martirizzata.",
"Plaça de Sant Jaume è stata il centro della città fin dai tempi di Barcino, quando qui c’era il foro. Oggi ha la forma di una piazza ampia e regolare e due palazzi uno di fronte all’altro: il Palau de la Generalitat, sede del governo della Catalogna, e il Palazzo del Comune. È il luogo delle feste e dei cortei.",
"In Carrer del Bisbe un ponte di pietra con archi e decorazioni unisce due palazzi. Sembra medievale, ma fu costruito nel 1928 da Joan Rubió i Bellver: anche il nome “Barri Gòtic” è del Novecento.",
"Una piccola piazza silenziosa con una fontana, qualche albero e una chiesa barocca. Sulla facciata si vedono i segni delle schegge di un bombardamento del 30 gennaio 1938, durante la guerra civile: morirono 42 persone, in gran parte bambini. Una targa le ricorda. Qui si passa a voce bassa.",
"La chiesa di Santa Maria del Mar fu costruita fra il 1329 e il 1383, in appena cinquantaquattro anni: una rapidità rara per l’epoca, e da qui il suo stile così unitario. La costruirono la gente del quartiere e i “bastaixos”, i facchini del porto, che portavano a spalla le pietre dalle cave di Montjuïc.",
"Sotto la grande tettoia di ferro dell’ex mercato del Born, del 1876, si vedono le rovine di un intero quartiere: le case e le strade che furono demolite dopo la caduta della città nel 1714. Oggi il Born è un centro culturale; accanto, nel Fossar de les Moreres, si ricorda quell’anno.",
"Carrer de Montcada è una via stretta con i palazzi dei mercanti medievali. Cinque di quelli ospitano il Museu Picasso, aperto nel 1963: Pablo Picasso visse a Barcellona da ragazzo e da giovane, fra il 1895 e il 1904.",
"Dopo la caduta di Barcellona nel 1714, il re Filippo V fece costruire qui una grande fortezza: la Ciutadella. Fu demolita dopo il 1869 e al suo posto nacque il parco, ideato da Josep Fontserè e pronto per l’Esposizione Universale del 1888. La grande cascata monumentale la costruì lui con l’aiuto di un giovane studente, Antoni Gaudí.",
"La Barceloneta è un quartiere nato nel 1753, con le strade tracciate in perfetta griglia dall’ingegnere militare Juan Martín Cermeño, per dare una casa a chi aveva perso la propria quando fu costruita la Ciutadella. Le case sono piccole e basse, con i panni stesi ai balconi e la vita che si fa in strada.",
"Alla Barceloneta è nata, si racconta negli anni Cinquanta e in una taverna senza insegna, la “bomba”: una palla di patata ripiena di carne, fritta e servita con salsa piccante e alioli. Oggi ogni bar del quartiere ha la sua versione.",
"Le spiagge di Barcellona sono state rifatte per le Olimpiadi del 1992, con sabbia nuova e il lungomare. Sulla spiaggia della Barceloneta c’è “L’Estel Ferit”, la stella ferita: quattro cubi di metallo impilati di Rebecca Horn, che i barcellonesi chiamano semplicemente “els cubs”.",
"Il Port Vell è il vecchio porto, con le barche e i moli. Dalla Torre di Sant Sebastià parte dal 1931 la funivia che attraversa il porto e sale fino a Montjuïc. Da lassù si vede tutta la spiaggia.",
"L’Eixample, “l’ampliamento”: il quartiere dalle strade dritte progettato da Ildefons Cerdà, il cui piano fu approvato fra il 1859 e il 1860. Gli isolati misurano circa 113 metri di lato e hanno gli angoli smussati, per far girare meglio i carri e far entrare la luce. Le strade sono larghe circa 20 metri.",
"Sul marciapiede del Passeig de Gràcia si cammina su piastrelle esagonali con un polpo, una chiocciola e una stella marina. Le aveva disegnate Gaudí nel 1904 per la Casa Batlló, ma finirono nelle stanze di servizio della Pedrera; oggi sono la firma del viale.",
"Sul Passeig de Gràcia, in un solo isolato, stanno tre case moderniste di architetti rivali: la Casa Amatller di Puig i Cadafalch, la Casa Lleó Morera di Domènech i Montaner e la Casa Batlló di Gaudí. Per questo l’isolato si chiama “della discordia”.",
"La Casa Milà, soprannominata “La Pedrera”, la cava, perché la facciata ondulata sembra una cava di pietra. Gaudí la costruì fra il 1906 e il 1912; sul tetto i comignoli somigliano a figure che sorvegliano la città.",
"La facciata della Natività, a est, è l’unica che Gaudí poté seguire di persona: una facciata piena di figure di pietra, piante, animali e angeli, dove si racconta la nascita di Gesù. Delle sue torri vide finita solo la prima, quella di San Barnaba, nel 1926.",
"La facciata della Passione, a ovest, è severa e spigolosa: fu costruita molti anni dopo la morte di Gaudí su disegni dello scultore Josep Maria Subirachs. La facciata della Gloria, a sud, sarà la più grande e non è ancora finita.",
"Dentro la basilica le colonne si aprono in alto come rami e sembrano una foresta di pietra. Le vetrate sono più fredde, in blu e verde, dal lato dell’alba, e più calde, in arancio e rosso, dal lato del tramonto.",
"La Torre di Gesù Cristo, la torre centrale, è arrivata a 172,5 metri con la croce posata il 20 febbraio 2026 e fu inaugurata il 10 giugno 2026, centenario della morte di Gaudí. È la chiesa più alta del mondo, ma volutamente un po’ più bassa di Montjuïc: Gaudí non voleva superare l’opera di Dio. I lavori continuano, per finire la facciata della Gloria.",
"Gràcia fu un comune autonomo fino al 1897 e ha ancora l’aria di un paese dentro la città. Le sue piazzette, come Plaça del Sol e Plaça de la Vila con la torre dell’orologio, si riempiono di tavolini, bambini e vermut. Ogni agosto per una settimana le vie si decorano a gara.",
"I castells sono torri umane che si costruiscono nelle feste; dal 2010 sono patrimonio immateriale dell’umanità. In basso la “pinya”, poi il “tronc”, in cima i più piccoli e l’“enxaneta”, che sale fino in cima e alza la mano. Si costruiscono da sei fino a dieci piani, al suono della gralla.",
"Park Güell doveva essere un quartiere-giardino alla moda inglese, progettato da Gaudí per Eusebi Güell fra il 1900 e il 1914. Il progetto non ebbe successo e il parco divenne pubblico: oggi è patrimonio UNESCO. La zona monumentale si paga, il resto del parco è libero.",
"In una casa rosa nel parco Gaudí visse dal 1906 al 1925. Oggi è un piccolo museo con i mobili e gli oggetti dell’architetto.",
"Montjuïc, “monte degli ebrei” o forse “monte di Giove”, è la grande collina verde sul porto. Nel 1929 vi si tenne l’Esposizione Internazionale: da allora restano il Palau Nacional, oggi sede del museo d’arte della Catalogna, i giardini e la grande scalinata.",
"Il Poble Espanyol, il “paese spagnolo”, fu costruito per l’Esposizione del 1929: un villaggio con più di cento edifici copiati da diverse regioni della Spagna, oggi con botteghe di artigiani e bar.",
"Per le Olimpiadi del 1992 Montjuïc ospitò gli sport sulla “anella olimpica”: lo stadio rinnovato e intitolato a Lluís Companys, il Palau Sant Jordi di Arata Isozaki e la torre di telecomunicazioni di Santiago Calatrava. Oggi vi si fanno concerti e partite.",
"Il castello di Montjuïc sta in cima alla collina e oggi appartiene alla città ed è soprattutto un belvedere. Da qui la vista sul porto, sul mare e sulla città al tramonto è una delle più belle.",
"Plaça d’Espanya fu costruita per l’Esposizione del 1929. Le due Torri Veneziane, alte 47 metri e ispirate al campanile di San Marco, segnano l’inizio del lungo viale che sale verso Montjuïc. Accanto sta la vecchia arena, trasformata in centro commerciale con una terrazza panoramica.",
"Il lungo viale che sale verso il Palau Nacional ha fontane ai lati e i padiglioni della fiera di Barcellona. Di sera si riempie di famiglie che vanno a vedere la Font Màgica.",
"La Font Màgica fu inaugurata nel 1929 e progettata dall’ingegnere Carles Buïgas. È uno spettacolo gratuito di acqua, luce e musica: i getti, alti fino a circa cinquanta metri, cambiano colore a tempo di musica. Si va a vederlo in giorni stabiliti, seduti sui gradini.",
"Quando l’ultimo getto sale, l’acqua si illumina tutta insieme e, per un momento, la fontana, la collina e il cielo hanno lo stesso colore."];
const NAME={"bc_pep":"Pep, il pescivendolo","bc_nuria":"Núria, la guida del Barri Gòtic","bc_laia":"Laia, la fornaia","bc_manel":"Manel, il vecchio pescatore","bc_carme":"Carme, l'architetta","bc_gaudi":"Antoni Gaudí","bc_aina":"Aina, la casteller","bc_amina":"Amina, la restauratrice del museo"};
const GREET={"bc_pep":"Bon dia, Pierpaolo! Vieni, guarda questi gamberi: sono arrivati stamattina. Sono Pep e questo banco era di mio padre. Che ti servo, company?",
 "bc_nuria":"Bon dia, Pierpaolo! Sono Núria e questa è casa mia: due mila anni di storia in poche vie. Segui l’ombrellino e non perderti nei vicoli, va?",
 "bc_laia":"Bon dia, Pierpaolo! Entra, che il pane è appena uscito. Sono Laia, il forno è di famiglia. Hai fame? Si vede da come guardi.",
 "bc_manel":"Ei, Pierpaolo! Siediti, nano: il mare sta calmo e il sole è buono. Sono Manel, ho pescato per trent’anni e adesso servo i pescatori degli altri.",
 "bc_carme":"Bon dia, Pierpaolo! Guarda in su: la città si legge dai balconi. Sono Carme e mi occupo di questi palazzi da trent’anni. Ti spiego tutto, sisplau.",
 "bc_gaudi":"Bon dia, giovanotto. Mi chiamo Antoni Gaudí e questa è la mia vita. Dicono che il tempo si pieghi: lo trovo comodo, perché così posso rivedere la mia chiesa e vedere finalmente la torre.",
 "bc_aina":"Bon dia, Pierpaolo! Sono Aina, vengo dall’allenamento. Sali con me su una torre? Scherzo, ma se vuoi ti spiego come funziona.",
 "bc_amina":"Salam, Pierpaolo! Bon dia, o buenas tardes: fa lo stesso. Sono Amina, lavoro qui dietro, al museo. Siediti, che il tramonto da qui è speciale."};
/* ---- facciate di strada, zona per zona ---- */
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3);
  if(st==1){/* Rambla: palazzi di tre o quattro piani con balconi di ferro, platani in fila, insegne di bar e di negozi */
   if(r>.74){plano(g,x+w*.5,gt,1.15+hr(i)*.2,TT);return}
   cas(g,x+6,w-30,h+30,i,k,{wall:['#e8c88a','#e8b8a0','#d8c090','#ecd0b0'][md(i,4)],bal:1,sh:'#3f6a4a',roof:'f',gt:md(i,2)?'shop':'tav',sc:['#2a4a3a','#6a2a22','#2a3a5a'][md(i,3)],cor:'#c8a870'});return}
  if(st==2){/* Barri Gòtic: muri alti di pietra gialla, balconi con panni stesi, persiane verdi, lampioni di ferro appesi ai muri */
   if(r>.9){return}
   cas(g,x+4,w-26,h+90,i,k,{wall:['#d8c48c','#cbb67c','#d4bd88','#c8b078'][md(i,4)],bal:md(i,2),sh:'#4a6a4a',roof:md(i,3)?'s':'f',gt:md(i,3)==0?'arc':'',cor:'#b8a470'});
   if(md(i,3)==1){ln(g,IR,1.6,[x+w-36,gt-150,x+w-18,gt-150]);rect(g,IR,x+w-20,gt-150,3,14);rect(g,k>.1?'#ffe8a0':'#d8d0b0',x+w-22,gt-136,7,10);if(k>.1)glow(g,x+w-18,gt-132,26,'255,214,130',.5*k)}
   if(md(i,3)==2){const ly=gt-190;ln(g,'#6a6a70',1,[x+10,ly,x+w-24,ly+6]);for(let q=0;q<4;q++)rect(g,['#f6f2e6','#c8402a','#2a6aa8','#e8c040'][q],x+20+q*28,ly+2+q*1.4,7,12)}return}
  if(st==3){/* Born: facciate di pietra chiara, forni e pasticcerie, biciclette appoggiate ai muri */
   if(r>.84){plano(g,x+w*.5,gt,1.1,TT);return}
   cas(g,x+4,w-26,h+50,i,k,{wall:['#e4d8b4','#dccaa0','#e8dcc0'][md(i,3)],bal:1,sh:'#5a7a5a',roof:'s',gt:md(i,2)?'shop':'tav',sc:['#6a3a22','#2a4a3a','#4a2a22'][md(i,3)],cor:'#c8b888'});return}
  if(st==4){/* Barceloneta: case basse con balconi stretti, panni stesi, persiane colorate */
   if(r>.9){palma(g,x+w*.5,gt,120+hr(i)*30,TT);return}
   const c=['#e8c870','#e8a888','#bcd4d8','#f0d8a0','#d8a8b0'][md(i,5)];
   cas(g,x+6,w-34,h-50,i,k,{wall:c,bal:1,sh:['#c8402a','#2a6aa8','#3f8a46','#8a4a9a'][md(i,4)],roof:'f',gt:md(i,3)==0?'tav':'',cor:'#b8a478'});
   const ly=gt-(h-50)+30+md(i,2)*34;ln(g,'#6a6a70',1,[x+2,ly,x+w-24,ly+4]);for(let q=0;q<4;q++)rect(g,['#f6f2e6','#c8402a','#2a6aa8','#e8c040'][(q+i)%4],x+10+q*24,ly+2+q,6,11);return}
  if(st==5){/* Eixample: palazzi di sei piani con balconi di ferro e angoli smussati, platani lungo il viale */
   if(r>.5){plano(g,x+w*.5,gt,1.25+hr(i)*.3,TT);return}
   cas(g,x+4,w-24,h+90,i,k,{wall:['#efe0b8','#ecd0b0','#e8c8a0','#f0e0c8'][md(i,4)],bal:1,sh:'#4a6a4a',roof:'f',gt:'shop',sc:['#2a2e38','#4a2a22','#2a3a3a'][md(i,3)],cor:'#c8b890'});return}
  if(st==6){/* Sagrada Família: palazzi dell'Eixample intorno, platani, recinzioni di cantiere */
   if(r>.55){plano(g,x+w*.5,gt,1.2,TT);return}
   cas(g,x+4,w-24,h+60,i,k,{wall:['#ecdcb4','#e4d4a8','#f0e4c8'][md(i,3)],bal:1,sh:'#4a6a4a',roof:'f',cor:'#c8b890'});return}
  if(st==7){/* Gràcia: case di tre o quattro piani con balconi, colori caldi, pini e palme */
   if(r>.82){[pino,palma][md(i,2)](g,x+w*.5,gt,md(i,2)?130:1.1,TT);return}
   cas(g,x+4,w-30,h+10,i,k,{wall:['#e87a6a','#f2d070','#8ac4c8','#e8b8a0','#d8c890'][md(i,5)],bal:1,sh:'#3f6a4a',roof:'s',gt:'tav',cor:'#c8b078'});
   if(md(i,2)==0){bandier(g,x+6,x+w-24,gt-(h+10)+50,9,TT)}return}
  if(st==8){/* Montjuïc: giardini a terrazze, siepi, cipressi e pini, balaustre di pietra */
   if(r>.6){[pino,cipr][md(i,2)](g,x+w*.5,gt,md(i,2)?130:1,TT);return}
   rect(g,'#2a6a34',x+6,gt-62,w-40,62);rect(g,'rgba(255,255,255,.1)',x+6,gt-62,w-40,4);rect(g,'rgba(0,0,0,.16)',x+6,gt-14,w-40,14);if(r<.25){for(let q=0;q<10;q++){rect(g,'#e0d4b0',x+10+q*(w-50)/10,gt-88,5,26)}rect(g,'#e8dcb8',x+6,gt-92,w-38,6)}return}
  /* 9: Plaça d'Espanya: padiglioni di pietra chiara dell'Esposizione, platani, lampioni */
  if(r>.6){plano(g,x+w*.5,gt,1.25,TT);return}
  cas(g,x+6,w-40,h-10,i,k,{wall:['#e4dcc4','#d8cdae','#e8e0cc'][md(i,3)],bal:0,sh:'#6a7a66',roof:'f',gt:'arc',cor:'#c8bc9c'})}
const bandier=(g,x0,x1,y,n,t)=>{ln(g,'#4a4038',1,[x0,y,(x0+x1)/2,y+10,x1,y]);for(let q=1;q<n;q++){const u=q/n,bx=x0+(x1-x0)*u,by=y+Math.sin(u*Math.PI)*10;poly(g,['#c8402a','#e8b030','#2a6aa8','#f6f2e6','#3f8a46'][q%5],[[bx-4,by],[bx+4,by],[bx,by+9+Math.sin(t*2+q)*.8]])}};
/* ---- livello 0: cielo, sole, luna, stelle, nuvole bianche, velo rosa dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
  gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
  const nt=cl((xs-(Z[8]-200))/2200,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
  const su=22500,u=cl(xs/su,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*250;
  if(xs<su+800){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT+4);dot(g,'rgba(255,'+Math.round(250-low*80)+','+Math.round(210-low*110)+',.95)',sx,sy,15)}
  const mu=cl((xs-(Z[8]+300))/2600,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*200;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
  const cc=xs<2800?'rgba(252,214,222,.55)':xs<Z[7]?'rgba(255,255,255,.62)':xs<Z[8]+600?'rgba(255,170,130,.6)':'rgba(150,120,190,.35)';
  each(o-((t*4)%420)*.02,420,1,(x,i,r)=>{if(r>.55)return;nube(g,x+r*100,40+r*50,.8+r*.5,cc)});
  const fo=cl(1-xs/2800,0,1)*.28;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
  const wm=cl((xs-Z[4])/1000,0,1)*cl((Z[7]-xs)/1000,0,1)*.12;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
  const wg=cl((xs-Z[6])/1400,0,1)*cl((Z[8]+400-xs)/1200,0,1)*.2;if(wg>.01){g.fillStyle='rgba(255,130,90,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: tetti della città vecchia con le guglie e le palme, il mare, la città a strade dritte, la Sagrada Família, Collserola con la torre, Montjuïc con il Palau Nacional e il castello ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
  const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
  /* colline verdi di Collserola con la torre di telecomunicazioni (zone 3-8) */
  const co=env(14000,9500);if(co>.02){g.globalAlpha=co;const sx=fx(14000);g.fillStyle=dim('#7aa070');g.beginPath();g.moveTo(sx-560,hz+16);[[-560,-8],[-440,-34],[-320,-52],[-200,-40],[-90,-70],[0,-84],[100,-62],[200,-80],[310,-50],[420,-34],[540,-14],[600,0]].forEach(p=>g.lineTo(sx+p[0],hz-p[1]*0-Math.abs(p[1])+0+16-16));g.lineTo(sx+600,hz+16);g.closePath();g.fill();rect(g,dim('#e8e8ee'),sx-150,hz-150,3,86);ln(g,dim('#e8e8ee'),1,[sx-150,hz-110,sx-160,hz-60]);ln(g,dim('#e8e8ee'),1,[sx-148,hz-110,sx-138,hz-60]);rect(g,dim('#e8e8ee'),sx-154,hz-118,10,4);rect(g,dim('#e8e8ee'),sx-153,hz-100,8,3);g.globalAlpha=1}
  /* tetti della città vecchia, guglie della cattedrale e palme (zone 1-3) */
  const rv=cl((Z[3]+600-xs)/1500,0,1);if(rv>.02){g.globalAlpha=rv;each(o,44,3,(x,i,r)=>{const bh=26+hr(i*3)*34;rect(g,dim(['#e4d4a8','#d8c090','#ecd0b0','#d4bc84'][md(i,4)]),x,hz+16-bh,40,bh);poly(g,dim(r>.8?'#8a5a3a':'#a8553a'),[[x-3,hz+16-bh],[x+8,hz+16-bh-11],[x+32,hz+16-bh-11],[x+43,hz+16-bh]]);if(r>.9)ln(g,dim('#4a8a3a'),2,[x+20,hz+16-bh-8,x+20,hz+16-bh-30])});g.globalAlpha=rv}
  const ca=env(4300,3400);if(ca>.02){g.globalAlpha=ca;const sx=fx(4300);rect(g,dim('#d8cba4'),sx-40,hz-30,80,46);[-34,34].forEach(d=>{rect(g,dim('#cfc29a'),sx+d-9,hz-84,18,100);poly(g,dim('#cfc29a'),[[sx+d-10,hz-84],[sx+d,hz-130],[sx+d+10,hz-84]])});poly(g,dim('#cfc29a'),[[sx-12,hz-30],[sx,hz-100],[sx+12,hz-30]]);g.globalAlpha=1}
  /* il mare (Barceloneta e Montjuïc) con qualche vela */
  const sa=Math.max(env(10700,4200),cl((xs-Z[6])/2000,0,1)*cl((W1+800-xs)/1500,0,1));if(sa>.02){g.globalAlpha=sa;const sy=hz+4;const gr2=g.createLinearGradient(0,sy,0,sy+18);gr2.addColorStop(0,dim('#4aa0d8'));gr2.addColorStop(1,dim('#2a74b8'));g.fillStyle=gr2;g.fillRect(0,sy,480,18);for(let q=0;q<18;q++)rect(g,'rgba(255,255,255,.45)',hr(q*3)*480,sy+2+hr(q+4)*13+Math.sin(t+q)*.6,8+hr(q)*10,1.2);
   [[60,.8],[260,1],[390,.7]].forEach((b,i)=>{const bx=b[0]+Math.sin(t*.2+i)*6;poly(g,dim('#f6f2e6'),[[bx,sy-22*b[1]],[bx,sy],[bx+14*b[1],sy]]);poly(g,dim('#e8d8c0'),[[bx-2,sy-16*b[1]],[bx-2,sy],[bx-10*b[1],sy]]);rect(g,dim('#6a5a4a'),bx-10,sy,26*b[1],2)});g.globalAlpha=1}
  /* la torre a forma di vela sul mare (zona 4) e la torre Glòries (zona 4-5) */
  const wv=env(10500,3600);if(wv>.02){g.globalAlpha=wv;const sx=fx(10500);g.fillStyle=dim('#e8f0f4');g.beginPath();g.moveTo(sx-20,hz+10);g.quadraticCurveTo(sx-24,hz-70,sx-4,hz-120);g.quadraticCurveTo(sx+30,hz-60,sx+22,hz+10);g.closePath();g.fill();rect(g,'rgba(120,160,200,.35)',sx-12,hz-90,6,90);rect(g,'rgba(120,160,200,.35)',sx+2,hz-70,6,76);g.globalAlpha=1}
  const gl=env(12300,3400);if(gl>.02){g.globalAlpha=gl;const sx=fx(12300);g.fillStyle=dim('#c85a4a');g.beginPath();g.moveTo(sx-14,hz+14);g.bezierCurveTo(sx-18,hz-50,sx-12,hz-100,sx,hz-114);g.bezierCurveTo(sx+12,hz-100,sx+18,hz-50,sx+14,hz+14);g.closePath();g.fill();for(let q=0;q<12;q++)rect(g,dim(q%2?'#e8b070':'#8aa8d8'),sx-12+(q%3)*8,hz-96+q*8,6,5);g.globalAlpha=1}
  /* città dalle strade dritte con le torri della Sagrada Família (zone 5-7) */
  const rc=env(15500,6200);if(rc>.02){g.globalAlpha=rc;each(o,40,6,(x,i,r)=>{const wx=cam+x+120;if(wx<Z[4]-300||wx>Z[7]+300)return;const bh=22+hr(i*5)*26;rect(g,dim(['#e8dcb8','#e8c8a8','#dcd0a8'][md(i,3)]),x,hz+16-bh,34,bh);rect(g,dim('#9a8a6a'),x-2,hz+16-bh-3,38,3)});g.globalAlpha=1}
  const sg=env(16700,4600);if(sg>.02){g.globalAlpha=sg;const sx=fx(16700);[[-96,70],[-72,92],[-48,80],[-24,100],[24,100],[48,82],[72,92],[96,70]].forEach((tw,i)=>{rect(g,dim('#d8b884'),sx+tw[0]-4,hz+16-tw[1],8,tw[1]);poly(g,dim(['#e8402a','#2a6aa8','#f2c82a','#3f8a46'][i%4]),[[sx+tw[0]-5,hz+16-tw[1]],[sx+tw[0],hz+16-tw[1]-14],[sx+tw[0]+5,hz+16-tw[1]]])});rect(g,dim('#d8b884'),sx-8,hz+16-170,16,170);poly(g,dim('#d8b884'),[[sx-8,hz-154],[sx,hz-176],[sx+8,hz-154]]);rect(g,dim('#f6f4ee'),sx-1.2,hz-206,2.4,32);rect(g,dim('#f6f4ee'),sx-7,hz-198,14,2.4);rect(g,dim('#d8b884'),sx-48,hz+16-120,96,6);g.globalAlpha=1}
  /* la collina di Montjuïc con il Palau Nacional, il castello e la torre bianca di Calatrava (zone 8-9) */
  const mj=env(24600,7600);if(mj>.02){g.globalAlpha=mj;const sx=fx(24600);g.fillStyle=dim('#5a8a4a');g.beginPath();g.moveTo(sx-460,hz+18);[[-460,-6],[-380,-30],[-300,-52],[-220,-70],[-140,-84],[-60,-96],[40,-102],[120,-96],[200,-80],[300,-60],[400,-30],[480,-6]].forEach(p=>g.lineTo(sx+p[0],hz-Math.abs(p[1])+18));g.lineTo(sx+480,hz+18);g.closePath();g.fill();
   rect(g,dim('#d8c898'),sx-90,hz-64,180,34);for(let q=0;q<8;q++)rect(g,dim('#e8dcb8'),sx-82+q*22,hz-58,6,24);cup(g,dim('#9ab4a0'),sx,hz-64,48,30,0);[-1,1].forEach(s=>{rect(g,dim('#d8c898'),sx+s*80-8,hz-86,16,26);cup(g,dim('#9ab4a0'),sx+s*80,hz-86,18,14,0)});
   rect(g,dim('#c8b88e'),sx+190,hz-104,70,14);for(let q=0;q<5;q++)rect(g,dim('#c8b88e'),sx+190+q*15,hz-110,8,7);
   const cx2=sx-200;g.strokeStyle=dim('#f6f4ee');g.lineWidth=3;g.beginPath();g.moveTo(cx2,hz-60);g.quadraticCurveTo(cx2-8,hz-100,cx2-1,hz-128);g.stroke();dot(g,dim('#f6f4ee'),cx2-1,hz-130,3);
   if(night>.2)for(let q=0;q<28;q++)rect(g,'rgba(255,214,130,'+(.4+.4*Math.sin(t*2+q))*night+')',sx-110+hr(q*3)*220,hz-66+hr(q*5)*30,1.6,1.6);g.globalAlpha=1}
  /* il mare di luci della città (sera e notte) */
  const cl2=cl((xs-(Z[8]-300))/1800,0,1);if(cl2>.02){for(let q=0;q<70;q++){const lx=hr(q*3)*480,ly=hz+8+hr(q*5)*44,a=cl2*(.4+.5*Math.sin(t*1.6+q));g.fillStyle=(q%5==0?'rgba(255,255,255,':q%3==0?'rgba(255,190,120,':'rgba(255,226,150,')+a+')';g.fillRect(lx,ly,1.8+hr(q)*1.6,1.8)}}}
/* ---- livello 2: piani intermedi (tettoie del mercato, vicoli, facciate di pietra, caseggiati bassi, palazzi a smusso, cantieri, giardini) ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;
  const wins=(n,top)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+14+(q%4)*20,top+Math.floor(q/4)*14,6,5)};
  const blk=(c,hh)=>{rect(g,dim(c),x+6,hz-hh,68,hh+10);rect(g,'rgba(255,255,255,.18)',x+6,hz-hh,4,hh+10);wins(8,hz-hh+8)};
  if(zz==1){if(r>.62){rect(g,dim('#6a727c'),x+4,hz-30,84,5);for(let q=0;q<6;q++)rect(g,dim(['#2f7a46','#c8402a'][q%2]),x+4+q*14,hz-26,14,16)}else if(r>.4){plano(g,x+50,hz+6,.7,undefined)}else{blk(['#e8c88a','#e8b8a0','#d8c090'][md(i,3)],56+r*50);rect(g,dim('#8a8e96'),x+4,hz-60-r*50,72,3)}}
  else if(zz==2){blk(['#d8c48c','#cbb67c','#d4bd88'][md(i,3)],74+r*60);if(r>.8){rect(g,dim('#cbb67c'),x+34,hz-150,10,80);poly(g,dim('#cbb67c'),[[x+32,hz-150],[x+39,hz-190],[x+46,hz-150]])}}
  else if(zz==3){if(r>.7){plano(g,x+50,hz+6,.75,undefined)}else{blk(['#e4d8b4','#dccaa0'][md(i,2)],60+r*44);if(r<.2)poly(g,dim('#a8553a'),[[x+4,hz-60-r*44],[x+40,hz-80-r*44],[x+76,hz-60-r*44]])}}
  else if(zz==4){if(r>.7){palma(g,x+50,hz+6,90,undefined)}else{blk(['#e8c870','#e8a888','#bcd4d8','#f0d8a0'][md(i,4)],34+r*26);rect(g,dim('#b8a478'),x+4,hz-34-r*26,72,3)}}
  else if(zz==5){if(r>.7){plano(g,x+50,hz+6,.75,undefined)}else{blk(['#efe0b8','#ecd0b0','#e8c8a0'][md(i,3)],74+r*40);rect(g,dim('#c8b890'),x+6,hz-72-r*40,68,5);if(r<.25)poly(g,dim('#e0d4b0'),[[x+6,hz-76-r*40],[x+10,hz-84-r*40],[x+70,hz-84-r*40],[x+74,hz-76-r*40]])}}
  else if(zz==6){if(r>.8){const hh=130;rect(g,dim('#e8b830'),x+40,hz-hh,5,hh+6);rect(g,dim('#e8b830'),x+8,hz-hh,70,4)}else if(r>.5){plano(g,x+50,hz+6,.75,undefined)}else{blk(['#ecdcb4','#e4d4a8'][md(i,2)],70+r*40)}}
  else if(zz==7){if(r>.55){pino(g,x+50,hz+6,.7)}else{const cc=['#e87a6a','#f2d070','#8ac4c8','#e8b8a0'][md(i,4)];rect(g,dim(cc),x+10,hz-52-r*20,64,60+r*20);poly(g,dim('#a8553a'),[[x+4,hz-52-r*20],[x+42,hz-72-r*20],[x+80,hz-52-r*20]]);wins(4,hz-44-r*20)}}
  else if(zz==8){if(r>.5){[pino,cipr][md(i,2)](g,x+50,hz+6,md(i,2)?90:.7)}else{rect(g,dim('#2a6a34'),x+8,hz-40,70,40);for(let q=0;q<6;q++)rect(g,dim('#e0d4b0'),x+12+q*11,hz-54,5,16);rect(g,dim('#e8dcb8'),x+8,hz-58,70,5)}}
  else{if(r>.6){plano(g,x+50,hz+6,.8,undefined)}else{rect(g,dim(['#e4dcc4','#d8cdae'][md(i,2)]),x+6,hz-56-r*20,72,64+r*20);for(let q=0;q<5;q++)rect(g,dim('#eee4c4'),x+12+q*13,hz-52-r*20,5,50);rect(g,dim('#d0c49e'),x+4,hz-60-r*20,76,5);wins(4,hz-40-r*20)}}})}
/* ---- livello 3: la strada con le facciate, i monumenti vengono dagli oggetti ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>110+hr(i*5)*40,170);
 each2(170,8,Z[1],Z[2],2,i=>110+hr(i*5)*40,150);
 each2(180,9,Z[2],Z[3],3,i=>110+hr(i*5)*40,160);
 each2(180,10,Z[3],Z[4],4,i=>110+hr(i*5)*40,160);
 each2(200,11,Z[4],Z[5],5,i=>110+hr(i*5)*30,180);
 each2(200,12,Z[5],Z[6],6,i=>110+hr(i*5)*40,180);
 each2(190,13,Z[6],Z[7],7,i=>110+hr(i*5)*40,170);
 each2(200,14,Z[7],Z[8],8,i=>110+hr(i*5)*40,170);
 each2(190,15,Z[8],W1+400,9,i=>100+hr(i*5)*40,170)}
/* ---- vita: piccioni, rondoni, gabbiani, pappagalli verdi ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
  const pg=cl((xs-200)/400,0,1)*cl((Z[3]+200-xs)/400,0,1);
  if(pg>.05)for(let i=0;i<4;i++){const bx=((i*117+t*(46+i*6))%600)-60,by=70+hr(i*3)*100+Math.sin(t*2+i*2)*14,w=Math.sin(t*10+i)*3.4;g.strokeStyle='rgba(120,126,140,'+(.9*Math.min(1,pg))+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke()}
  if(xs<Z[8]+400)for(let i=0;i<4;i++){const bx=((i*171+t*(86+i*9))%620)-70,by=60+hr(i*5+2)*120+Math.sin(t*3+i)*10,w=Math.sin(t*16+i)*2;g.strokeStyle='rgba(40,36,44,.85)';g.lineWidth=1.8;g.beginPath();g.moveTo(bx-6,by+w);g.quadraticCurveTo(bx,by-4,bx+6,by+w);g.stroke();g.beginPath();g.moveTo(bx-6,by+w);g.lineTo(bx-1,by+3);g.lineTo(bx+6,by+w);g.stroke()}
  const gu=Math.max(cl((xs-Z[3]+200)/300,0,1)*cl((Z[4]+300-xs)/300,0,1),cl((xs-Z[7]+200)/300,0,1)*cl((Z[8]+900-xs)/500,0,1));
  if(gu>.05)for(let i=0;i<3;i++){const bx=((i*251+t*(34+i*8))%640)-80,by=70+hr(i*7+3)*60+Math.sin(t*1.4+i)*8,w=Math.sin(t*6+i)*4;g.strokeStyle='rgba(240,240,244,'+(.95*gu)+')';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-9,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+9,by+w);g.stroke();g.strokeStyle='rgba(120,130,150,'+(.8*gu)+')';g.lineWidth=1.4;g.beginPath();g.moveTo(bx-9,by+w);g.lineTo(bx-12,by+w+2);g.moveTo(bx+9,by+w);g.lineTo(bx+12,by+w+2);g.stroke()}
  const pa=cl((xs-Z[0]-200)/300,0,1)*cl((Z[2]-xs)/300,0,1)+cl((xs-Z[4])/300,0,1)*cl((Z[7]-xs)/300,0,1);
  if(pa>.05)for(let i=0;i<2;i++){const bx=((i*311+t*(70+i*14))%640)-80,by=110+hr(i*9+1)*70+Math.sin(t*4+i)*6,w=Math.sin(t*18+i)*3.4;g.strokeStyle='rgba(76,196,56,'+Math.min(1,pa)+')';g.lineWidth=3;g.beginPath();g.moveTo(bx-6,by+w);g.quadraticCurveTo(bx,by-3,bx+6,by+w);g.stroke();g.strokeStyle='rgba(230,50,40,'+Math.min(1,pa)+')';g.lineWidth=1.6;g.beginPath();g.moveTo(bx+6,by+w);g.lineTo(bx+9,by+w+1);g.stroke()}}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
  const GZ=[[Z[0],Z[1],'#cfc8b4','l'],[Z[1],Z[2],'#b8ad96','c'],[Z[2],Z[3],'#d8d0b8','p'],[Z[3],Z[4],'#e8dcb4','s'],[Z[4],Z[5],'#9a9a94','a'],[Z[5],Z[6],'#d6ceb8','q'],[Z[6],Z[7],'#c8b890','j'],[Z[7],Z[8],'#d4c8a8','m'],[Z[8],W1+400,'#bcb8a8','f']];
  rect(g,'#d8d0b8',0,gt,480,3);
  GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
   const slabs=(bw0,add,al)=>{for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,0)',px,yy,bw-1.5,17)}}};
   if(z[3]=='l'){/* lastre chiare del viale pedonale, ondulazioni del selciato, auto che passano lente ai due lati */slabs(64,10,.22);rect(g,'#b8b09a',x0,gt+120,x1-x0,3);for(let q=0;q<4;q++){const wx=cam+x0+(q*211+40);}rect(g,'rgba(120,110,90,.18)',x0,gt+30,x1-x0,2);rect(g,'rgba(120,110,90,.18)',x0,gt+86,x1-x0,2)}
   if(z[3]=='c'){/* lastre di pietra consumate, vicoli stretti */for(let r=0;r<7;r++){const yy=gt+7+r*19,bw=26+r*6,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5);el(g,hh>.6?'rgba(255,255,255,.12)':hh>.25?'rgba(0,0,0,.1)':'rgba(0,0,0,.04)',px+bw/2,yy+9,bw/2-1,8)}}}
   if(z[3]=='p'){/* pietra chiara, ghiaia dei viali, prato del parco */slabs(70,12,.26);for(let q=0;q<4;q++)rect(g,'#7aa844',x0+((q*300+120-cam)%ww+ww)%ww,gt+118,100,12)}
   if(z[3]=='s'){/* sabbia chiara, assi di legno della passeggiata */for(let q=0;q<170;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.45)':'rgba(160,130,80,.25)',x0+((q*43)%ww),gt+8+hr(q+3)*130,2+hr(q)*3,1.6);rect(g,'#c8a870',x0,gt+3,x1-x0,30);for(let q=0;q<40;q++)rect(g,'rgba(80,50,20,.3)',x0+((q*30-cam)%ww+ww)%ww,gt+3,1.6,30);rect(g,'rgba(255,255,255,.2)',x0,gt+3,x1-x0,6)}
   if(z[3]=='a'){/* marciapiede di piastrelle esagonali grigio-verdi, asfalto con strisce pedonali */rect(g,'#9aaa96',x0,gt+3,x1-x0,52);for(let r=0;r<3;r++)for(let q=0;q<Math.ceil(ww/30)+2;q++){const px=Math.floor((cam+x0)/30)*30+q*30-cam+(r%2)*15,py=gt+10+r*15;poly(g,(q+r)%2?'#8a9a88':'#a4b4a0',[0,1,2,3,4,5].map(i=>[px+Math.cos(i*Math.PI/3)*14,py+Math.sin(i*Math.PI/3)*6]))}rect(g,'#8a8a88',x0,gt+58,x1-x0,100);for(let q=0;q<10;q++)rect(g,'rgba(250,250,246,.6)',x0+((q*120+30-cam)%ww+ww)%ww,gt+70,16,60);rect(g,'rgba(255,255,255,.14)',x0,gt+58,x1-x0,3)}
   if(z[3]=='q'){/* lastre di pietra, aiuole, prato davanti alla basilica */slabs(76,10,.2);rect(g,'#7aa844',x0,gt+3,x1-x0,16);for(let q=0;q<60;q++)dot(g,hr(q)>.5?'#8ab854':'#6a9838',x0+((q*37)%ww),gt+5+hr(q+2)*12,1.4);rect(g,'rgba(255,255,255,.2)',x0,gt+3,x1-x0,6)}
   if(z[3]=='j'){/* ghiaia dei sentieri, scale a rampa */for(let q=0;q<170;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.4)':'rgba(120,100,60,.22)',x0+((q*43)%ww),gt+8+hr(q+3)*130,2+hr(q)*3,1.6);for(let r=0;r<3;r++)rect(g,'rgba(160,140,100,.22)',x0,gt+30+r*38,x1-x0,2)}
   if(z[3]=='m'){/* ampie scalinate di pietra, ghiaia dei giardini */for(let r=0;r<6;r++){const yy=gt+6+r*22;rect(g,'rgba(255,255,255,.2)',x0,yy,x1-x0,2.4);rect(g,'rgba(0,0,0,.08)',x0,yy+3,x1-x0,3)}for(let q=0;q<120;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.35)':'rgba(120,100,60,.2)',x0+((q*47)%ww),gt+8+hr(q+3)*130,2+hr(q)*3,1.6)}
   if(z[3]=='f'){/* lastre chiare del viale, selciato bagnato dagli spruzzi con riflessi di luce */slabs(80,14,.16);for(let q=0;q<7;q++){const px=x0+((q*191+60-cam)%ww+ww)%ww,hu=(q*50+t*30)%360;el(g,'hsla('+hu+',90%,62%,.22)',px,gt+40+hr(q)*90,40,5);el(g,'rgba(255,255,255,.1)',px,gt+40+hr(q)*90,22,2)}}
   g.restore()});
  for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
  const dw=cl(1-cam/1700,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
  const gd=cl((cam-Z[4])/700,0,1)*cl((Z[6]-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
  const sgl=cl((cam-Z[7]+200)/800,0,1)*cl((Z[8]+600-cam)/900,0,1);if(sgl>.02)rect(g,'rgba(255,120,80,'+(.16*sgl)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{skin:tn(o.skin),top:tn(o.top),bot:tn(o.bot),hair:o.hair?tn(o.hair):o.hair,acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Pep: grembiule bianco e stivali di gomma, cappellino di lana, coltello largo, mani rosse dal ghiaccio, penna dietro l'orecchio */
 NP('bc_pep',NAME.bc_pep,2190,GREET.bc_pep,{skin:'#d8a078',top:'#3a5a7a',bot:'#3a3a46',hair:'#6a5a4a',s:1.02},(g,b,t)=>{rect(g,'#f6f4ee',-11,-84+b,22,50);rect(g,'rgba(0,0,0,.1)',-11,-84+b,3,50);rect(g,'#e8e4dc',-6,-66+b,12,8);
  rect(g,'#1f3a2a',-10,-14,9,14);rect(g,'#1f3a2a',2,-14,9,14);rect(g,'#14281c',-10,-14,9,3);rect(g,'#14281c',2,-14,9,3);
  poly(g,'#c8402a',[[-12,-108+b],[14,-108+b],[13,-120+b],[-11,-120+b]]);rect(g,'#a8301e',-12,-110+b,26,3);dot(g,'#c8402a',1,-122+b,4);
  dot(g,'#e8806a',-12,-52,3.4);dot(g,'#e8806a',12,-52,3.4);ln(g,'#14110f',1.4,[-9,-104+b,-9,-97+b]);
  rect(g,'#9a9ea6',12,-62,22,6);poly(g,'#c8c8d0',[[14,-62],[36,-62],[34,-54],[14,-55]]);rect(g,'#5a3a22',10,-64,6,10)}),
 /* Núria: giacca verde scuro, sciarpa colorata, borsa a tracolla, cartellino da guida, ombrellino chiuso come puntatore */
 NP('bc_nuria',NAME.bc_nuria,4840,GREET.bc_nuria,{skin:'#e8b890',top:'#24503a',bot:'#3a3a46',hair:'#4a2a1a',s:1.0},(g,b,t)=>{
  poly(g,'#e8402a',[[-9,-92+b],[9,-92+b],[5,-80+b],[-5,-80+b]]);poly(g,'#f2c82a',[[-7,-90+b],[0,-86+b],[7,-90+b]]);poly(g,'#2a7ab8',[[-4,-82+b],[0,-72+b],[4,-82+b]]);
  ln(g,'#6a4a2a',2.4,[-11,-88+b,10,-52]);rect(g,'#6a4a2a',-10,-58,14,12);rect(g,'#f6f4ee',-2,-70+b,8,10);rect(g,'#2a7ab8',-2,-70+b,8,2);
  ln(g,'#14110f',2.4,[12,-62,30,-26]);poly(g,'#14110f',[[10,-66],[16,-66],[22,-36],[18,-36]]);rect(g,'#c8a040',9,-66,8,3);
  poly(g,'#4a2a1a',[[-12,-108+b],[-15,-84+b],[-8,-90+b],[-6,-106+b]])}),
 /* Laia: grembiule bianco, bandana rossa sui capelli, braccia robuste, un cesto di pane sotto un braccio */
 NP('bc_laia',NAME.bc_laia,6760,GREET.bc_laia,{skin:'#e8b890',top:'#8a6a4a',bot:'#4a4a56',hair:'#4a2a1a',s:1.0},(g,b,t)=>{rect(g,'#f8f6ee',-11,-82+b,22,44);rect(g,'rgba(0,0,0,.1)',-11,-82+b,3,44);rect(g,'#e4e0d6',-6,-64+b,12,8);
  poly(g,'#c8301e',[[-12,-108+b],[14,-108+b],[13,-120+b],[-11,-120+b]]);dot(g,'#c8301e',-13,-104+b,3.4);dot(g,'#f6f2e6',-4,-114+b,1.2);dot(g,'#f6f2e6',4,-113+b,1.2);
  ln(g,'#f2d4b8',7.6,[-12,-84+b,-18,-62]);ln(g,'#f2d4b8',7.6,[12,-84+b,18,-64]);dot(g,'#fafaf6',-18,-62,3.2);
  el(g,'#8a5a2a',20,-54,13,6);rect(g,'#8a5a2a',7,-60,26,4);for(let q=0;q<3;q++)el(g,['#d8a050','#c8883a','#e0b468'][q],12+q*8,-64,6,4)}),
 /* Manel: maglione blu a righe, cappello di tela, pelle bruciata dal sole, mani larghe e callose, pipa spenta */
 NP('bc_manel',NAME.bc_manel,10690,GREET.bc_manel,{skin:'#c89070',top:'#2a4a8a',bot:'#4a4a52',hair:'#c8c8c8',s:1.02},(g,b,t)=>{for(let q=0;q<5;q++)rect(g,'rgba(246,242,230,.8)',-13,-86+q*9+b,26,2.6);
  el(g,'#d8cba0',1,-111+b,17,3.6);poly(g,'#d8cba0',[[-9,-112+b],[11,-112+b],[8,-122+b],[-7,-122+b]]);rect(g,'#8a7a5a',-9,-113+b,20,2.4);
  rect(g,'#3a2a1a',6,-97+b,10,2.4);dot(g,'#5a4020',17,-97+b,2.6);dot(g,'#b88a68',-12,-52,3.6);dot(g,'#b88a68',12,-52,3.6);ln(g,'#c8c8c8',1.6,[-2,-96+b,5,-95+b])}),
 /* Carme: giacca beige, occhiali tondi, cartellina sotto il braccio, matita fra i capelli grigi */
 NP('bc_carme',NAME.bc_carme,13230,GREET.bc_carme,{skin:'#e8b890',top:'#d8c8a0',bot:'#3a3a46',hair:'#a8a8ac',s:1.0},(g,b,t)=>{rect(g,'rgba(255,255,255,.14)',-13,-90+b,3,46);rect(g,'#f4f0e6',-5,-90+b,10,12);
  g.strokeStyle='#2a2a2e';g.lineWidth=1.2;g.beginPath();g.arc(-2,-101+b,4.4,0,7);g.arc(7,-101+b,4.4,0,7);g.moveTo(2.4,-101+b);g.lineTo(2.6,-101+b);g.stroke();
  ln(g,'#e8c040',2,[-6,-114+b,6,-108+b]);rect(g,'#6a4a2a',-24,-80,16,22);rect(g,'#8a6a44',-24,-80,16,3);rect(g,'#f4f0e6',-22,-77,12,2)}),
 /* Antoni Gaudí: abito scuro liso, barba bianca, occhi chiarissimi, cappello floscio, Vangelo tascabile, mani sporche di polvere di pietra */
 NP('bc_gaudi',NAME.bc_gaudi,16150,GREET.bc_gaudi,{skin:'#e8c4a0',top:'#2a2a30',bot:'#2a2a30',hair:'#e8e8ec',s:1.03},(g,b,t)=>{rect(g,'rgba(255,255,255,.1)',-13,-90+b,3,46);rect(g,'#e8e4dc',-4,-90+b,8,10);rect(g,'#5a4a3a',6,-72+b,7,8);
  poly(g,'#f2f2f4',[[-9,-98+b],[9,-98+b],[7,-84+b],[0,-80+b],[-7,-84+b]]);
  el(g,'#3a3a40',1,-111+b,17,3.6);poly(g,'#3a3a40',[[-9,-112+b],[11,-112+b],[7,-122+b],[-6,-121+b]]);dot(g,'#9ac8e8',6,-102+b,1.6);
  dot(g,'#d8c8b0',-12,-52,3.6);dot(g,'#d8c8b0',12,-52,3.6)}),
 /* Aina: camicia bianca, fascia nera in vita, jeans, zainetto, capelli raccolti, braccia forti */
 NP('bc_aina',NAME.bc_aina,18800,GREET.bc_aina,{skin:'#e8b890',top:'#f6f4ee',bot:'#2c5aa6',hair:'#3a2214',s:1.0},(g,b,t)=>{rect(g,'#14110f',-12,-60+b,24,8);rect(g,'rgba(0,0,0,.08)',-12,-90+b,3,30);
  dot(g,'#3a2214',-8,-116+b,6);ln(g,'#3a2214',3,[-8,-110+b,-13,-100+b]);rect(g,'#c8402a',-19,-86+b,8,28);rect(g,'#a8301e',-19,-86+b,8,3);ln(g,'#f2d4b8',8,[-11,-84+b,-17,-62]);ln(g,'#f2d4b8',8,[11,-84+b,17,-62])}),
 /* Amina: giacca di jeans, foulard colorato, guanti da lavoro in tasca, borsa di tela, occhiali scuri sulla testa */
 NP('bc_amina',NAME.bc_amina,21800,GREET.bc_amina,{skin:'#d8a47c',top:'#3a5a8a',bot:'#3a3a46',hair:'#2a1608',s:1.0},(g,b,t)=>{rect(g,'rgba(255,255,255,.12)',-13,-90+b,3,46);
  poly(g,'#e8802a',[[-12,-110+b],[14,-110+b],[13,-100+b],[-11,-100+b]]);poly(g,'#e8402a',[[-8,-92+b],[8,-92+b],[4,-80+b],[-4,-80+b]]);dot(g,'#f2c82a',-3,-86+b,1.4);dot(g,'#2a7ab8',3,-87+b,1.4);
  rect(g,'#2a2a2e',-2,-114+b,12,3);rect(g,'#2a2a2e',-3,-115+b,4,3);rect(g,'#e8d8a8',-9,-66,8,9);rect(g,'#d8c8a0',-24,-72,14,18);rect(g,'#a89870',-24,-72,14,3);ln(g,'#a89870',1.4,[-22,-72,-15,-84,-10,-72])})
];
/* ---- oggetti lungo il percorso ---- */
const LX=[480,1050,1800,2300,2780,3450,4100,5350,5950,6380,7400,7980,8480,9100,9800,10350,11250,11880,12680,13200,13900,14550,15700,16650,17150,17650,18450,19250,19950,20500,21300,22350,22950,23560,24500,25300,26100,27370];
const W=(n,c,a)=>[["bcW",c-100,[n,a,1,0]],["bcW",c+100,[n,a,2,0]]];
const props=[
["bctarga",70,"LA RAMBLA"],["bcplatano",190,1.15],["bcchiosco",300,0],["bccanaletes",480,null],["bcplatano",640,1.2],["bcbici",720,null],["bclampione",830,null],["bcpappagalli",890,120],
["bcmiro",1050,null],["bcpiccioni",1230,null],["bcliceu",1310,null],["bcplatano",1500,1.2],["bcchiosco",1570,1],["bcboqueria",1800,null],["bcplatano",2020,1.1],["bcgatto",2080,null],
["bcpesce",2300,null],["bctarga",2520,"PLAÇA REIAL"],["bcreial",2780,null],
["bctarga",3080,"BARRI GÒTIC"],["bcbarcino",3450,null],["bcmusicista",3790,null],["bccattedrale",4100,null],["bcbanco",4400,null],["bcoche",4650,null],["bcpiccioni",4960,null],
...W("bcsantjaume",5350,null),["bcbisbe",5950,null],["bcfelip",6380,null],
["bctarga",6670,"EL BORN"],["bcbici",6720,null],["bcforno",6930,null],["bcsantamaria",7400,null],["bcpalma",7700,null],["bcborn",7980,null],["bcmontcada",8480,null],["bcarco",8760,null],["bcciutadella",9100,null],
["bctarga",9380,"LA BARCELONETA"],["bccase",9800,null],["bcgatto",10100,'#6a6a72'],["bcbombes",10350,null],["bcbaracchino",10800,null],["bcombrellone",11000,'#e8402a'],["bcpalma",11110,120],["bccubs",11250,null],["bctorretta",11480,null],["bcombrellone",11600,'#2a6aa8'],["bcportvell",11880,null],
["bctarga",12180,"PASSEIG DE GRÀCIA"],["bcplatano",12320,1.2],["bceixample",12680,null],["bcsemaforo",12960,null],["bcpanot",13200,null],["bcillla",13900,null],["bcpedrera",14550,null],["bcfermata",14830,null],["bcmoto",14930,null],
["bctarga",15080,"SAGRADA FAMÍLIA"],["bcrecinzione",15250,null],["bcnativita",15700,null],["bcrecinzione",16160,null],["bcgelati",16330,null],["bcpassione",16650,null],["bccode",16930,null],["bcforesta",17150,null],["bctorre",17650,null],
["bctarga",17980,"GRÀCIA"],["bcplacasol",18450,null],["bccastell",19250,null],["bcparkguell",19950,null],["bccasamuseu",20500,null],
["bctarga",20780,"MONTJUÏC"],...W("bcpalau",21300,null),["bcbelvedere",21850,null],["bcpoble",22350,null],["bcvenditore",22640,null],["bcanella",22950,null],["bcfontanella",23250,null],["bccastello",23560,null],
["bctarga",23900,"PLAÇA D’ESPANYA"],...W("bcespanya",24500,null),["bcambulante",24900,null],["bcavinguda",25300,null],["bcfotografo",25650,null],...W("bcfont",26100,null),["bcfamiglie",26500,null],["bclampione2",26640,null],["bcfamiglie",26860,null],["bclampione2",27000,null],["bcvarco",27370,null]];
props.sort((a,b)=>a[1]-b[1]);
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'barcellona',name:'Barcellona · Dalla Boqueria alla Font Màgica',width:W1,sky:['#7ea6e0','#f4c8cc','#ffd8b8'],gt:372,gr:['#cfc8b4','#a8a28e'],chord:[196,246.9,293.7,370],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da barcellona.txt) --- */
(function(){
const TOPX_BC={
"bc_pep":[
["Chi sei e che fai?","Pep, sessantun anni, pescivendolo di terza generazione. Mi alzo alle quattro e mezza, che il pesce non aspetta nessuno. Ostres, a quest’ora fa un freddo che il ghiaccio sembra caldo."],
["Quanto è vecchio questo mercato?","Vecchissimo: già nel 1217 si parla di tavoli per vendere carne qui fuori dalle mura. Il tetto di ferro che vedi, invece, è del 1914. Se i banchi potessero parlare, bona nit a tutti!"],
["Cosa si compra a quest’ora?","Adesso vengono i barcellonesi, quelli veri, con il carrellino e la lista in testa. Dopo le undici arrivano i turisti e il mercato diventa una festa. Chi lavora lo sa: prima si compra, poi si fotografa."],
["Che pesce mi consigli?","Le seppie, i gamberi rossi e il merluzzo salato, il “bacallà”, che qui si mette a bagno per un giorno. Se vuoi un piatto da re, i gamberi di Palamós. Mira, annusa: il pesce fresco non puzza, sa di mare."],
["Come si cucina?","Ci sono i classici: il “suquet”, una zuppa di pesce, l’“arròs negre”, riso nero con l’inchiostro di seppia, e la “fideuà”, con la pasta al posto del riso. Con il merluzzo salato si fa anche un’insalata fresca, l’“esqueixada”. Bon profit, Pierpaolo!"],
["Come si fa colazione qui?","Ai banconi del mercato c’è l’“esmorzar de forquilla”, la colazione con la forchetta: uova, salsicce, fagioli, magari un panino caldo. Altrimenti un “cafè amb llet” e un “entrepà”, un panino. A mezzogiorno non si ha più fame, vale?"],
["A che ora si mangia?","Tardi, rispetto a voi italiani: il pranzo verso le due, ed è il pasto principale, con il “menú del dia” a prezzo fisso. La cena dopo le nove. Se alle sette chiedi da mangiare, ti guardano come se fossi un marziano."],
["Cos’è la fontana in cima alla Rambla?","La Font de Canaletes. Si dice che chi beve la sua acqua torna sempre a Barcellona. Quando il Barça vince, la gente si riunisce lì a festeggiare: visca el Barça!"],
["E il mosaico per terra?","Quello di Miró, a metà della Rambla: ce lo ha lasciato lui, come regalo alla città. La gente ci cammina sopra senza accorgersene e i turisti lo guardano dall’alto. Un artista in mezzo alla strada, che bella idea."],
["Cosa c’è dietro la Rambla?","Plaça Reial, una piazza con i portici e le palme. I due lampioni con l’elmo alato li ha disegnati Gaudí nel 1879, ancora giovane. Un lampione disegnato da un genio, e nessuno ci fa caso: Barcellona è così."],
["Dove vado dopo?","Entra nel Barri Gòtic, a due passi: vicoli, mura romane, la cattedrale. Lì ti aspetta Núria, una guida che sa tutto. Va, non ti perdere, o chiedi al primo che incontri."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se ripassi ti faccio assaggiare un gambero crudo, come si deve. Salut, e che il mare ti porti fortuna! Adéu!"]],
"bc_nuria":[
["Chi sei e che fai?","Núria, quarantacinque anni, archeologa e guida. Racconto la città a chi la visita: vicoli, pietre e leggende. Il mio lavoro è far parlare i sassi."],
["Com’è nata Barcellona?","Come Barcino, una colonia romana fondata fra il 15 e il 10 a.C. sotto Augusto. Qui vicino, nel cortile di Carrer del Paradís, restano quattro colonne del tempio sull’altura. Sono nascoste in un edificio medievale: devi saperlo per trovarle."],
["Il Barri Gòtic è davvero medievale?","In gran parte sì, ma il nome è del Novecento. Il ponte di Carrer del Bisbe, per esempio, sembra gotico e invece è del 1928: lo ha costruito Rubió i Bellver. Non lo dire ai turisti, ostres."],
["Perché le oche nella cattedrale?","Sono tredici, e si dice che ricordino gli anni di Sant’Eulalia, la santa patrona, quando fu martirizzata. Starnazzano nel chiostro e nessuno le disturba. Sono le uniche a cui la cattedrale non chiede il biglietto."],
["Cos’è quella danza a cerchio davanti alla cattedrale?","La sardana! Si balla la domenica a mezzogiorno, tenendosi per mano, al ritmo di una “cobla”, la banda di fiati. Le borse si lasciano in mezzo al cerchio e nessuno le tocca. Chi vuole può unirsi: bastano scarpe comode."],
["Cosa sono quei giganti di cartapesta?","I “gegants”, pupazzi alti che sfilano nelle feste, soprattutto alla Mercè, verso il 24 settembre. Ci sono anche i draghi che sputano fuoco e i “capgrossos”, teste grosse. Il “correfoc” è un corteo di diavoli con le scintille: porta un cappello!"],
["Cos’è Sant Jordi?","Il 23 aprile: si regalano rose e libri. Si dice che San Giorgio abbia ucciso il drago e dalle gocce di sangue sia nata una rosa. È un giorno lavorativo ma la città si riempie di bancarelle: milioni di rose in tutta la Catalogna."],
["Com’è il Natale qui?","Davanti alla cattedrale c’è la Fira de Santa Llúcia, un mercato natalizio antico, a fine novembre. Si vende il “caganer”, un pastorello che fa i suoi bisogni nel presepe. E il “Tió”, un tronco che i bambini battono con un bastone perché “faccia” i regali."],
["Cosa c’è in Plaça Sant Felip Neri?","Una piazzetta silenziosa con una fontana. Sulla facciata della chiesa ci sono i fori delle schegge di un bombardamento del 30 gennaio 1938: morirono 42 persone, quasi tutte bambini. Qui si abbassa la voce, Pierpaolo."],
["Cosa mi consigli di fare qui?","Perderti. Senza mappa, a testa alta, fra le piazzette: ogni angolo ha un bar, un cortile, una scala. Compra un panino, siediti su un gradino e guarda passare la città."],
["Dove vado dopo?","Verso il mare, nel Born: Santa Maria del Mar, il parco, i palazzi. Lì c’è Laia, che fa il pane e sa tutto del quartiere. Digli che ti mando io."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e mi raccomando: guarda in alto, che i dettagli sono in alto. Gràcies per l’ascolto e bon viatge!"]],
"bc_laia":[
["Chi sei e che fai?","Laia, trentaquattro anni, fornaia. Mi alzo prima dell’alba per impastare, e a mezzogiorno ho già finito la giornata. Il segreto del pane è la pazienza, nano."],
["Com’è nata Santa Maria del Mar?","Che storia! La gente del quartiere e i facchini del porto, i “bastaixos”, portavano a spalla le pietre dalle cave di Montjuïc. La chiesa è stata costruita in soli cinquantaquattro anni. Il popolo ha costruito la sua chiesa."],
["Che pane si mangia qui?","Il “pa de pagès”, la pagnotta rustica, con la crosta croccante e la mollica morbida. Va bene con tutto. Qui non esiste una tavola senza pane."],
["Cos’è il “pa amb tomàquet”?","Il piatto più semplice e più amato: una fetta di pane strofinata con il pomodoro maturo, un filo d’olio e un pizzico di sale. Con il prosciutto o il formaggio è una “torrada”. Lo mangiamo a colazione, a pranzo e a cena."],
["Cosa sono quei dolcetti con i pinoli?","I “panellets”! Palline di pasta di mandorle coperte di pinoli. Si mangiano per la Castanyada, il 31 ottobre e il 1° novembre, con le castagne arrostite, le patate dolci e il vino dolce. Ne abbiamo venduti a vagonate: ne restano pochi, sbrigati."],
["Quali altri dolci per le feste?","Il 6 gennaio il “tortell de Reis”, una ciambella con frutta candita e una sorpresa dentro. A Pasqua la “mona”, e per San Giovanni, il 23 giugno, la “coca”, con frutta candita e pinoli, mangiata con il cava. Ogni festa ha il suo dolce, non puoi sbagliare calendario."],
["Cosa c’è sotto il mercato del Born?","Le rovine di un quartiere intero: case e strade distrutte dopo la caduta della città nel 1714. Oggi è un centro culturale e si cammina su passerelle. Fa impressione, ma è una memoria che i barcellonesi tengono."],
["Come sono i parchi qui vicino?","Il Parco della Ciutadella è il giardino di tutti: la domenica famiglie, canottieri, bambini. La grande cascata l’ha costruita Fontserè con un giovane Gaudí come aiutante. Un genio che tirava su l’acqua ancora studente, immagina."],
["Come ci si saluta?","Con due baci, uno per guancia, anche fra sconosciuti presentati da un amico. Si dice “bon dia”, e per salutare “adéu”. Se un barcellonese ti dà del tu subito, non è maleducazione: è confidenza."],
["Com’è la vita nel Born?","Tranquilla di mattina, vivace la sera. Le botteghe piccole, i bar con i tavolini, il vermut la domenica a mezzogiorno. La domenica molti negozi chiudono: è il giorno della famiglia e delle passeggiate."],
["Dove vado dopo?","Verso il mare: la Barceloneta, un quartiere di pescatori. Lì c’è Manel, un vecchio pescatore che ti racconta tutto. Portagli un panino da parte mia."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se torni passa a prendere un panellet. Salut, e bon profit per tutto!"]],
"bc_manel":[
["Chi sei e che fai?","Manel, cinquantotto anni, nato qui. Uscivo con la barca prima dell’alba e tornavo con il pesce. Adesso ho un baracchino e servo vermut, tapas e chiacchiere."],
["Com’è nata la Barceloneta?","Nel 1753, con le strade dritte come righe, per dare una casa a chi l’aveva perduta quando hanno costruito la Ciutadella. Le case sono piccole, a due piani, e si vive in strada. I miei nonni dicevano che si sa tutto di tutti."],
["Perché i balconi sono pieni di panni?","Perché le case sono piccole e il sole è gratis. Stendiamo sui balconi, ci mettiamo le piante, ci sediamo sui gradini. Se vedi un gatto sul davanzale, è il padrone."],
["Cos’è una “bomba”?","Una palla di patata ripiena di carne, fritta, con salsa piccante e alioli. Si dice che sia nata qui, negli anni Cinquanta, in una taverna senza insegna. Oggi ogni bar ha la sua e tutti giurano che la propria è la migliore."],
["Cosa si mangia di mare?","Cozze, acciughe, calamari fritti e il riso con il pesce: l’“arròs negre” e la “fideuà”. Si mangiano la domenica a pranzo, in famiglia, e si finisce a cantare. Con un bicchiere di vino bianco fresco."],
["Com’è la spiaggia?","Rifatta per le Olimpiadi del 1992, con sabbia nuova e il lungomare. Prima c’erano le baracche e le fabbriche. Oggi ci corrono, nuotano e giocano a pallavolo anche d’inverno."],
["Cosa sono quei cubi di metallo?","“Els cubs”, la stella ferita di Rebecca Horn: quattro cubi storti, come una torre che sta per cadere ma non cade. La gente ci si dà appuntamento: “ci vediamo ai cubi”. Ricorda le vecchie baracche di legno dei ristoranti sul mare."],
["Cos’è la notte di Sant Joan?","Il 23 giugno si accendono i falò sulla spiaggia, si lanciano i petardi e si mangia la coca con il cava. Si salta il fuoco per scacciare gli spiriti cattivi. La spiaggia si riempie e nessuno dorme."],
["Com’è il mestiere del pescatore oggi?","Duro: si esce di notte, si torna all’alba, il pesce va ai mercati e ai ristoranti. Ma il mare è una buona compagnia. E i gabbiani sono i veri padroni del porto."],
["Come ci si muove a Barcellona?","A piedi, in metro, in autobus, in bici. La metro gialla, la L4, va dritta da qui al Passeig de Gràcia: pochi minuti e sei nel quartiere delle case di Gaudí. Con la funivia poi, se vuoi vedere il porto dall’alto."],
["Dove vado dopo?","Nell’Eixample: il quartiere dalle strade dritte e dalle case famose. Lì c’è Carme, un’architetta che ti fa vedere i palazzi con occhi nuovi. Digli che ti manda il vecchio pescatore."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se hai fame torna: la bomba è sempre calda. Visca el mar, e adéu!"]],
"bc_carme":[
["Chi sei e che fai?","Carme, cinquantadue anni, architetta. Restauro le case moderniste, le pareti e le piastrelle. Il mio lavoro è tenere vivi i palazzi, come un medico."],
["Com’è fatto l’Eixample?","Un quartiere progettato a tavolino da Ildefons Cerdà, con un piano approvato fra il 1859 e il 1860. Isolati quasi quadrati, di circa 113 metri di lato, e strade larghe circa 20 metri. Un’idea moderna per l’epoca, pensata per la luce e l’aria."],
["Perché gli angoli sono smussati?","Si chiamano “xamfrans”. Servivano a far girare i carri e a far entrare più luce. Oggi sono perfetti per i bar con i tavolini, le fermate e le biciclette. L’idea di Cerdà ha avuto una vita migliore del previsto."],
["Cos’è l’Illa de la Discòrdia?","Un solo isolato con tre case di tre architetti rivali: Puig i Cadafalch, Domènech i Montaner e Gaudí. Ognuno voleva superare gli altri. Si litigavano il quartiere a colpi di facciate, e noi ne godiamo ancora."],
["Perché la Casa Batlló è così strana?","Ha balconi a forma di maschera e colonne di pietra che sembrano ossa: la gente la chiama “casa dels ossos”, la casa delle ossa. Il tetto a squame colorate somiglia alla schiena di un drago. Si dice che la torre sia la lancia di San Giorgio."],
["E la Pedrera?","Il vero nome è Casa Milà, ma i barcellonesi l’hanno ribattezzata “La Pedrera”, la cava, perché sembra scavata nella pietra. Sul tetto i comignoli sembrano soldati che sorvegliano la città. A me sembrano guardiani buoni."],
["Cosa sono le piastrelle del marciapiede?","Quelle con il polpo, la chiocciola e la stella marina le ha disegnate Gaudí. Se ne vedono altre, a fiore, in tutta la città: sono le “panots”, un simbolo di Barcellona. Guarda dove metti i piedi, Pierpaolo, c’è arte per terra."],
["Come si vive in un appartamento qui?","Si vive in un “pis”, con i balconi, le persiane e un cortile interno nell’isolato. Molti palazzi hanno ancora il portinaio. Il bello è che c’è sempre un vicino che ti conosce."],
["Come ci si orienta?","Con il mare e la montagna! Da una parte c’è il mare, dall’altra le colline di Collserola. Si dice “lato mare” o “lato montagna” per spiegare da che parte sta una via."],
["Cosa succede alle strade di oggi?","Il Comune sta trasformando alcune vie in “assi verdi” con alberi e piazzette, come Consell de Cent. Meno auto, più panchine e bambini. Alcuni applaudono, altri discutono: è Barcellona."],
["Dove vado dopo?","Alla Sagrada Família: è a una ventina di minuti a piedi, o una fermata di metro. Lì c’è un signore con la barba bianca che ti racconta tutto. Non ti stupire: qui il tempo si piega."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e guarda sempre in su: i palazzi di Barcellona si vedono meglio dal marciapiede. Gràcies, e bon viatge!"]],
"bc_gaudi":[
["Chi sei?","Antoni Gaudí, architetto. Sono nato il 25 giugno 1852 a Reus, o forse a Riudoms: io stesso ho detto l’una e l’altra cosa. Mio padre era calderaio, e vedendolo battere il rame ho imparato a pensare in tre dimensioni."],
["Come hai cominciato qui?","Nel 1883 mi hanno dato il cantiere, dopo che il primo architetto se ne era andato. La prima pietra l’avevano posata nel 1882, il giorno di San Giuseppe. Di quello che c’era, solo la cripta: ho cambiato quasi tutto."],
["Perché ci metti così tanto?","Si dice che io abbia risposto che il mio cliente non ha fretta. Il mio cliente è Dio, e la chiesa si finanzia con le offerte della gente. Chi costruisce una cosa così sa che non la vedrà finita."],
["Cosa vedo qui?","Tre facciate: la Natività, a est, che ho seguito io, piena di vita; la Passione, a ovest, costruita dopo di me su disegni di Subirachs, severa; e la Gloria, a sud, la più grande, ancora in costruzione. Ognuna racconta una parte della storia in pietra."],
["Perché le colonne sembrano alberi?","Perché la natura è il miglior maestro. Le colonne si aprono in alto come rami e reggono la volta senza i contrafforti esterni. Il gotico ha bisogno di grucce: io no."],
["Come hai progettato senza disegni?","Con i modelli appesi: catene e sacchetti di piombo che formano le curve. Li guardavo capovolti con uno specchio: la forma di un arco che regge, perché la gravità non sbaglia. Ho imparato questo nella cripta della Colònia Güell."],
["Cos’è questa torre che vedo?","La torre di Gesù Cristo: 172,5 metri, finita nel 2026, cent’anni dopo la mia morte. L’ho voluta un po’ più bassa di Montjuïc, perché un’opera dell’uomo non deve superare quella di Dio. Dicono che sia la chiesa più alta del mondo; a me interessa che sia la più luminosa."],
["E le vetrate?","Le hanno fatte dopo di me, con le mie idee: fredde, in azzurro e verde, dal lato dell’alba; calde, in arancio e rosso, dal lato del tramonto. La luce deve cambiare con il giorno: la chiesa respira."],
["Come hai vissuto?","Ho lavorato anche al Palau Güell, al Park Güell e alla Pedrera. Ho vissuto in una casa del Park Güell, dal 1906 al 1925, poi nel laboratorio qui, accanto alla chiesa. Mangiavo poco e camminavo molto. Ogni giorno andavo a pregare a Sant Felip Neri a piedi."],
["Cosa è successo nel 1926?","Il 7 giugno un tram mi investì sulla Gran Via. Ero vestito povero e nessuno mi riconobbe, e mi portarono all’ospedale dei poveri. Morii il 10 giugno e fui sepolto nella cripta di questa chiesa. Non mi lamento: è un posto buono."],
["Dove vado dopo?","Al Park Güell e a Gràcia, in collina: lì c’è la mia casa e una ragazza che ti spiega i castells. Sali con calma e guarda il mare dalla terrazza. Va, giovanotto."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, e guarda sempre la natura prima di guardare i libri. Bon viatge, Pierpaolo, e che Dio ti accompagni. Adéu."]],
"bc_aina":[
["Chi sei e che fai?","Aina, ventisei anni, studentessa e casteller. Mi alleno due sere a settimana con la mia “colla”, la squadra, e nei fine settimana si costruiscono le torri. Sono nel “tronc”, il piano di mezzo."],
["Cos’è un castell?","Una torre umana: alla base la “pinya”, una folla che regge tutto; sopra il “tronc”; in cima i bambini. L’ultimo, l’“enxaneta”, sale fino in cima, alza la mano e scende: l’“aleta”. Si sale da sei a dieci piani."],
["Com’è l’allenamento?","Si prova la tecnica, ci si fida degli altri e si ride molto. Si indossa una fascia nera in vita che protegge la schiena e fa da appiglio, e i bambini hanno un caschetto. A suonare c’è la gralla, uno strumento a fiato."],
["Quando si vedono i castells?","Nelle feste di quartiere e alla Mercè, di solito da giugno a ottobre. Dal 2010 sono patrimonio immateriale dell’umanità. In Plaça Sant Jaume è una festa vera: tutti zitti quando sale l’enxaneta."],
["Cos’è Gràcia?","Un paese dentro la città. Fino al 1897 era un comune indipendente, e ancora oggi si sente. Le piazzette, i bar, le botteghe: tutti si conoscono."],
["Come si vive nelle piazze?","Le piazze sono i nostri salotti: i bambini giocano, i nonni leggono il giornale, i ragazzi bevono una birra. Il vermut è un rito: all’ora dell’aperitivo, con un’oliva e una fetta d’arancia. Tutto si fa fuori."],
["Cos’è la Festa Major?","Ad agosto, per una settimana, ogni via di Gràcia si decora a tema, con carta, plastica riciclata e fantasia. Le vie fanno a gara e si lavora per mesi. Per me è la festa più bella dell’anno, bé, dopo i castells."],
["Che cos’è il Park Güell?","Doveva essere un quartiere-giardino per ricchi, progettato da Gaudí fra il 1900 e il 1914, ma non ebbe successo. Oggi è un parco pubblico con la salamandra di mosaici e la panchina ondulata. La parte monumentale si paga, il resto è libero: io ci vado a correre."],
["Chi sono quegli uccelli verdi?","Le “cotorres”, pappagalli verdi che vivono sulle palme. Fanno nidi enormi e sono rumorosissimi. Ormai fanno parte dei barcellonesi, come noi."],
["Come ci si muove?","A piedi, soprattutto: la città è da camminare. Poi la metro, il bus, la bicicletta. Io vado sempre in monopattino e ci arrivo prima di tutti, vale?"],
["Dove vado dopo?","A Montjuïc, al tramonto: prendi la metro verde, la L3, fino a Plaça d’Espanya e sali a piedi. Lì c’è Amina, che lavora al museo e ti racconta tutto. Va, non perdere il tramonto!"],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se senti il suono della gralla, fermati: è l’inizio di una torre. Salut, e visca Gràcia!"]],
"bc_amina":[
["Chi sei e che fai?","Amina, ventinove anni, restauratrice. Sono nata nel Raval, i miei genitori vengono dal nord del Marocco. A casa parlo arabo, per strada catalano e castigliano: a volte nella stessa frase."],
["Cos’è Montjuïc?","La collina sul porto. Il nome si traduce “monte degli ebrei”: si pensa per un antico cimitero medievale sul pendio, ma c’è chi dice “monte di Giove”. È una delle ipotesi, nessuno è sicuro. Qui si viene a respirare."],
["Cos’è il Palau Nacional?","Il palazzo con la cupola che vedi. Lo hanno costruito per l’Esposizione del 1929, insieme ai giardini e alla grande scalinata. Oggi ospita il museo d’arte della Catalogna: io lavoro lì."],
["Cosa c’è nel museo?","Soprattutto affreschi romanici, staccati dalle chiese dei Pirenei e portati qui per salvarli: Cristi e santi con occhi grandi e colori forti. Io li pulisco con pazienza, millimetro per millimetro. Ostres, quanto sono belli."],
["Cos’è il Poble Espanyol?","Un villaggio costruito per la stessa Esposizione, con più di cento edifici copiati da regioni diverse della Spagna. Ci sono botteghe di artigiani e bar. Un viaggio in Spagna in una passeggiata, con un caffè."],
["E lo stadio e la torre bianca?","Sono dell’anello olimpico, delle Olimpiadi del 1992: lo stadio, il Palau Sant Jordi e la torre di Calatrava. Barcellona è cambiata con i Giochi: il mare, le spiagge, le strade nuove. Oggi ci fanno concerti e partite."],
["Che cosa si vede dal castello?","Il porto, il mare, la città che si accende. Ci si sale con la funivia dal porto o a piedi fra i giardini. D’estate, qui si proiettano film all’aperto: una cosa da non perdere, vale?"],
["Com’è il Raval, dove sei nata?","Un quartiere di arrivi: si sentono catalano, spagnolo, arabo, urdu, tagalog. Ci sono comunità pakistane, filippine, latinoamericane, marocchine. È rumoroso, vivo e pieno di colori, ma si mangia benissimo."],
["Come vivi il Ramadan?","A casa si rompe il digiuno al tramonto con datteri e una zuppa calda, la harira, poi si esce con gli amici. A Barcellona in quel mese la sera ci sono tantissimi locali aperti. La città si adatta: è anche questo, essere barcellonese."],
["Dove si mangia bene a poco?","A Poble-sec, ai piedi di Montjuïc, la via di Blai è piena di bar con i “pintxos”, stuzzichini su uno stecchino. Si prende un pintxo, si tiene lo stecchino e si paga alla fine. Ti consiglio di arrivare con la fame."],
["Dove vado dopo?","Scendi verso Plaça d’Espanya: ti aspetta la Font Màgica, dove l’acqua balla con le luci. Prendi posto sui gradini, ma non dimenticare un giubbotto: la sera fa fresco. Yalla, che si sta facendo buio!"],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando vedi l’ultimo getto alzarsi, fai un desiderio: lo dicono tutti. Shukran per l’ascolto, salam, e adéu!"]]};
Object.assign(TOPX,TOPX_BC);
})();
