/* ---------- BERLINO · Da Charlottenburg a Kreuzberg (Gedächtniskirche e Kurfürstendamm, Tiergarten e Siegessäule, Reichstag e Porta di Brandeburgo, Unter den Linden e Bebelplatz, Museumsinsel, Alexanderplatz e Nikolaiviertel, Potsdamer Platz e Checkpoint Charlie, East Side Gallery e Oberbaumbrücke, Kreuzberg di notte) ---------- */
/* Un'intera giornata da sinistra a destra: alba fresca alla Gedächtniskirche e sulla Ku'damm, mattina nel Tiergarten, tarda mattina davanti al Reichstag e alla Porta di Brandeburgo,
   mezzogiorno sotto i tigli dell'Unter den Linden, primo pomeriggio sulla Museumsinsel e all'Alexanderplatz, pomeriggio dorato a Potsdamer Platz e al Checkpoint Charlie,
   tramonto sulla East Side Gallery e sull'Oberbaumbrücke, sera e notte a Kreuzberg, sotto il viadotto della U1. In fondo, sotto l'arco di mattoni, c'è il varco.
   Testi, tappe e dialoghi vengono da berlino.txt (definitivi, usati senza riscriverli). Gli oggetti stanno in elementi.js (nomi che iniziano per "be").
   Il tono per i temi dolorosi (il Muro, il Memoriale, la guerra, i roghi di libri) è sempre sobrio e rispettoso. */
(function(){
const GT=372,W1=21600;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln}=PR._rm;
const {cas,pers}=PR._md;
const {nf,lit,mat,cupo,col,tiglio,platano,quercia,betulla,pino,cespo,folla}=PR._be;
const md=(i,n)=>((i%n)+n)%n;
const LIT='rgb(255,226,150)';
const Z=[0,2300,4500,6700,8800,11300,13700,15800,18200,W1+400];   /* inizio di ognuna delle 9 zone */
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
let TT=0;
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};

/* ---- cielo: alba fredda e rosata, mattina chiara, mezzogiorno pallido e luminoso, pomeriggio dorato, tramonto rosso-arancio sulla Spree, sera cobalto, notte ---- */
const SKY=[[0,['#7a90c0','#f4b8b8','#ffd8b8']],[1300,['#5aa4e8','#bcdcf2','#f4eedc']],[2300,['#3a90e6','#86c4f2','#dcecf6']],[6700,['#2a84e0','#74b4ec','#e4f0f4']],[11300,['#3a86d6','#9cc4e6','#f4ecd0']],[13700,['#4a84d0','#a8c8e4','#f8e8c0']],[15000,['#5a7cc0','#e8bc98','#ffcc88']],[15900,['#6a4a98','#e8604a','#ffa050']],[16800,['#4a3a88','#c04a6a','#f88a58']],[17700,['#1a2c78','#3a4a98','#8a5a8a']],[18600,['#0e2260','#1c3a8a','#4a5a9a']],[19600,['#0a1a50','#14296a','#2a3a7a']],[20500,['#080e34','#101c54','#26306a']],[99999,['#080e34','#101c54','#26306a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Berlino, dall’alba alla notte. Parti dalla Gedächtniskirche, la chiesa spezzata sulla Kurfürstendamm, e attraversi il Tiergarten, fra lo zoo, la Colonna della Vittoria e il palazzo del presidente. Nella tarda mattina arrivi davanti al Reichstag e alla Porta di Brandeburgo, accanto al campo di stele del Memoriale; a mezzogiorno passeggi sotto i tigli dell’Unter den Linden, fino alla Bebelplatz e all’università di Humboldt. Nel primo pomeriggio la Museumsinsel ti porta fra Nefertiti, il Duomo e il castello ricostruito; poi l’Alexanderplatz con la sua torre argentata, e Potsdamer Platz con il Checkpoint Charlie, dove il Muro divideva tutto. Al tramonto ti fermi alla East Side Gallery, sul tratto più lungo di Muro rimasto, e attraversi l’Oberbaumbrücke; la notte è di Kreuzberg, con i suoi Späti, la musica e il viadotto della metropolitana. Il tempo qui si piega: i berlinesi di ogni epoca ti vengono incontro, e la città è quella di oggi.";
const LKTXT=["La Gedächtniskirche, in Breitscheidplatz: la chiesa originale fu inaugurata il 1° settembre 1895 e quasi distrutta da un bombardamento nella notte del 22 novembre 1943. La torre rovinata è stata lasciata com’è, come memoria della guerra, e accanto è sorta la chiesa nuova di Egon Eiermann, consacrata il 17 dicembre 1961. I berlinesi la chiamano affettuosamente \"dente cavo\".", "La Kurfürstendamm, per tutti \"Ku’damm\": il grande viale elegante di Berlino Ovest, con negozi, caffè e teatri. Ai tempi della divisione era la vetrina dell’Ovest, quella che si vedeva anche dall’altra parte del Muro.", "Il KaDeWe, il \"Kaufhaus des Westens\": aperto nel 1907 da Adolf Jandorf, in Tauentzienstraße, ha otto piani e oltre sessantamila metri quadrati di superficie. Il sesto piano è la sua Feinschmeckeretage, il regno dei buongustai. Fu molto danneggiato in guerra e riaprì il 3 luglio 1950.", "Una targa a Charlottenburg, in Kaiser-Friedrich-Straße 59, ricorda Herta Heuwer: secondo la tradizione, il 4 settembre 1949 nel suo chiosco di Berlino Ovest inventò la Currywurst, la salsiccia con salsa al curry e ketchup. Altre città, come Amburgo, rivendicano la stessa invenzione: si dice che le origini siano discusse.", "Lo Zoo di Berlino, aperto il 1° agosto 1844 ai margini del Tiergarten: il più antico zoo ancora attivo in Germania, circa trentacinque ettari con migliaia di animali di oltre mille specie. La Porta degli Elefanti, sulla Budapester Straße, fu ricostruita nel 1984 secondo il progetto originale del 1899; nel parco c’è anche un acquario, aperto nel 1913.", "Il Großer Tiergarten: circa duecentodieci ettari di parco in mezzo alla città. Dal 1527 fu la riserva di caccia dei principi elettori del Brandeburgo; nel 1742 Federico II tolse le recinzioni e lo aprì al pubblico. Fra il 1833 e il 1840 Peter Joseph Lenné lo ridisegnò in stile giardino all’inglese, con prati, laghetti e ponticelli.", "La Siegessäule, la Colonna della Vittoria: alta circa sessantasette metri, inaugurata il 2 settembre 1873 e coronata da una statua dorata di Vittoria, opera di Friedrich Drake. Fu spostata al Großer Stern, la grande rotonda, nel 1938-1939. I berlinesi la chiamano \"Goldelse\", la \"Elsa d’oro\".", "Schloss Bellevue: costruito nel 1786 per il principe Augusto Ferdinando di Prussia, fratello minore di Federico II, su progetto di Michael Philipp Boumann. Dal 1994 è sede del presidente federale e dal gennaio 2006 la sua residenza ufficiale principale. Quando il presidente è in sede, sul tetto sventola il suo stendardo.", "Il Reichstag, sede del Parlamento tedesco: disegnato da Paul Wallot, la prima pietra fu posta il 9 giugno 1884 e l’edificio fu finito nel 1894. Sul frontone c’è la scritta \"Dem Deutschen Volke\", aggiunta nel 1916. Il 27 febbraio 1933 un incendio lo distrusse in gran parte; dopo la guerra restarono sui muri le scritte dei soldati sovietici, in parte conservate. Nel 1995 Christo e Jeanne-Claude lo impacchettarono, e nel 1999 Norman Foster lo ridisegnò con la cupola di vetro: il Bundestag vi si riunì per la prima volta il 19 aprile 1999.", "La Porta di Brandeburgo, simbolo della città: costruita fra il 1788 e il 1791 da Carl Gotthard Langhans per il re Federico Guglielmo II. È alta circa ventisei metri e larga più di sessanta, con sei colonne doriche. Sopra c’è la Quadriga di Johann Gottfried Schadow, del 1793; Napoleone la portò a Parigi nel 1806, ma tornò a Berlino nel 1814. Durante la divisione la porta rimase accanto al Muro, e il 22 dicembre 1989 la gente poté finalmente passarci attraverso.", "Il Memoriale agli ebrei assassinati d’Europa, progettato da Peter Eisenman e inaugurato il 10 maggio 2005: duemilasettecentoundici stele di cemento su circa diciannovemila metri quadrati. Sotto il campo c’è un centro di documentazione che racconta la persecuzione e lo sterminio. Un luogo di memoria, da attraversare in silenzio.", "L’Unter den Linden, \"sotto i tigli\": il grande viale che porta dalla Porta di Brandeburgo verso l’isola dei musei, bordato di palazzi storici, di tigli e di bancarelle. Qui si affacciano l’Opera di Stato, l’università e la chiesa di Sant’Edvige.", "L’Università Humboldt: nata a Berlino nel 1810 per iniziativa di Wilhelm von Humboldt, oggi porta il nome dei due fratelli Humboldt, Wilhelm e Alexander, dal 1949. La sede principale è un palazzo sull’Unter den Linden. Fra i suoi nomi illustri: Albert Einstein, Max Planck, Karl Marx e Hegel.", "La Bebelplatz, aperta nel 1741-1743 per volere di Federico II come piazza dell’Opera. La sera del 10 maggio 1933 studenti nazisti vi bruciarono circa ventimila libri di autori come Heinrich Heine, Karl Marx e Albert Einstein. Oggi una lastra di vetro nel selciato, \"La biblioteca vuota\" di Micha Ullman, mostra sotto i piedi gli scaffali bianchi e vuoti, abbastanza grandi per quei libri.", "La Museumsinsel, l’\"isola dei musei\": cinque musei sulla Spree, patrimonio mondiale dell’UNESCO dal 1999. L’Altes Museum è del 1830, il Neues Museum del 1855, l’Alte Nationalgalerie del 1876, il Bode-Museum fu completato nel 1904 e il Pergamonmuseum è del 1930. Il Pergamon è oggi chiuso per lavori: l’Altare di Pergamo dovrebbe tornare visibile dal 2027.", "Nel Neues Museum, riaperto nel 2009, c’è il busto di Nefertiti: alto circa quarantotto centimetri, risale a oltre tremilaquattrocento anni fa. Fu trovato il 6 dicembre 1912 a Amarna da una spedizione tedesca guidata da Ludwig Borchardt, nella bottega dello scultore Thutmose. L’Egitto ne chiede il ritorno da molti anni: la questione è ancora aperta.", "Il Duomo di Berlino, costruito fra il 1894 e il 1905 da Julius Raschdorff: la cupola è alta novantotto metri e per salirci ci sono duecentosessantasette gradini. Nella cripta ci sono novantaquattro sarcofagi di membri della casa degli Hohenzollern. Fu danneggiato dalla guerra e riaperto nel 1993; i restauri sono continuati fino al 2002.", "L’Humboldt Forum sorge dove prima c’era il Castello di Berlino: danneggiato nella guerra, fu demolito nel 1950 dal governo della Germania Est; al suo posto, dal 1976 al 2008, ci fu il Palast der Republik. Dopo la decisione del Bundestag del 2002, sono state ricostruite tre facciate barocche e la cupola ottocentesca; il progetto è di Franco Stella e la prima apertura è avvenuta il 16 dicembre 2020.", "La Fernsehturm, la torre della televisione: alta 368 metri con l’antenna, costruita dal 1965 e inaugurata il 3 ottobre 1969; il pubblico ci poté entrare dal 7 ottobre. La sfera ha un diametro di 32 metri e la piattaforma panoramica si trova a circa 203 metri; il ristorante girevole fa un giro completo in mezz’ora. Quando il sole colpisce la sfera, vi si disegna una croce luminosa: i berlinesi la chiamavano scherzosamente \"la vendetta del Papa\".", "L’Alexanderplatz, \"Alex\" per tutti: la grande piazza del centro dell’ex Berlino Est, nodo di tram, metropolitana e treni. Qui c’è l’orologio universale, la Weltzeituhr, che mostra l’ora in molte città del mondo: da sempre il punto d’incontro preferito dei berlinesi.", "Il Rotes Rathaus, il \"Municipio Rosso\", è di mattoni rossi ed è la sede del sindaco di Berlino. Davanti c’è la fontana di Nettuno, il Neptunbrunnen; accanto sorge la Marienkirche, una delle chiese più antiche della città, con una torre di mattoni.", "Il Nikolaiviertel, il quartiere attorno alla chiesa di San Nicola, è la zona più antica di Berlino, con vicoli stretti, osterie e case ricostruite dopo i danni della guerra. Qui si respira ancora un po’ di Medioevo, a due passi dal cemento dell’Alex.", "Potsdamer Platz: negli anni Venti era uno degli incroci più animati di Berlino, e il 20 ottobre 1924 vi fu messo in funzione il primo semaforo della Germania, in una torre. Dopo il 1961 il Muro tagliò la piazza in due e la zona rimase quasi vuota; dopo il 1990 è stata ricostruita, e il nuovo quartiere è stato completato nel 1998, con il Sony Center di Helmut Jahn aperto nel 2000.", "Il Checkpoint Charlie, all’angolo fra Friedrichstraße e Zimmerstraße, fu il valico per stranieri e militari alleati. Nell’ottobre 1961, dal 22 al 28, carri armati sovietici e americani si fronteggiarono qui; la cabina originale fu tolta il 22 giugno 1990. Oggi quella che si vede è una copia; il Museo del Muro vicino fu aperto il 14 giugno 1963.", "Il Muro fu costruito dal 13 agosto 1961: attorno a Berlino Ovest era lungo circa centocinquantacinque chilometri, dei quali circa quarantatré dividevano la città in due. Cadde il 9 novembre 1989; la Germania fu riunificata il 3 ottobre 1990. Oggi una doppia fila di pietre nel selciato segna in tante strade il suo percorso.", "La East Side Gallery: un tratto di Muro lungo 1.316 metri sulla riva della Spree, a Friedrichshain, dipinto da centodiciotto artisti di ventuno paesi. Cominciarono dopo la caduta del Muro, e la galleria fu inaugurata il 28 settembre 1990: è il tratto più lungo di Muro ancora in piedi.", "Il dipinto più famoso della East Side Gallery è il \"Bacio fraterno\" di Dmitri Vrubel: due leader, Brežnev e Honecker, che si baciano. Un altro è la Trabant che sfonda il Muro, di Birgit Kinder. Nel 2009 l’intera galleria è stata restaurata.", "L’Oberbaumbrücke sulla Spree, fra Friedrichshain e Kreuzberg: il ponte di mattoni in stile gotico del nord, costruito nel 1896 da Otto Stahn. Ha due livelli: sotto passano le auto e i pedoni, sopra la metropolitana (dal 1902). Le due torri sono solo decorative. Dopo il 1961 fu un valico solo per pedoni, aperto dal 1963 ai soli residenti di Berlino Ovest.", "Lo Späti, il minimarket che resta aperto fino a tardi, è una piccola istituzione berlinese: qui si compra da bere, si prendono due chiacchiere, ci si siede fuori sulla panchina. Vuoti, le bottiglie si riportano per ricevere indietro il deposito, il Pfand.", "Il viadotto della linea U1, che qui corre in alto sopra la strada: lo stesso treno giallo che sull’Oberbaumbrücke attraversa la Spree. Il rumore dei treni sopra le teste è la colonna sonora di Kreuzberg.", "Sotto l’arco, la musica ti chiama."];
const NAME={"be_ayse": "Ayşe, la proprietaria dell'edicola", "be_jonas": "Jonas, la guida in bicicletta", "be_brigitte": "Brigitte, la berlinese dell'89", "be_humboldt": "Alexander von Humboldt", "be_lena": "Lena, la guida della Museumsinsel", "be_dieter": "Dieter, il tassista", "be_mia": "Mia, la studentessa d'arte", "be_tobi": "Tobi, il barista"};
const GREET={"be_ayse": "Moin, moin, Pierpaolo! Sei in anticipo: a quest’ora la città è tutta mia. Sono Ayşe, ti vendo il giornale o ti racconto Berlino: scegli tu, tanto non si paga la seconda.", "be_jonas": "Hallo, Pierpaolo! Sali, sali, o almeno cammina con me: il Tiergarten si fa bene con calma. Sono Jonas, faccio il giro del parco ogni giorno e non mi stanco mai.", "be_brigitte": "Na, du! Sei Pierpaolo, vero? Siediti qui, che il prato è per tutti. Sono Brigitte, abito a Prenzlauer Berg e ho visto qui parecchie cose: ti racconto, ma con calma.", "be_humboldt": "Guten Tag, Pierpaolo! Mi dicono che qui il tempo si piega: magnifico, anche le leggi della fisica fanno eccezioni. Sono Alexander von Humboldt, e ho mille domande, ma comincio dalle tue.", "be_lena": "Hallo, Pierpaolo! Benvenuto sull’isola dei musei. Sono Lena e ti faccio da guida: promesso che non ti faccio vedere tutto in un giorno, sennò ti serve un letto.", "be_dieter": "Na, junger Mann! Sali, sali, che qui non si aspetta. Sono Dieter, tassista da trentacinque anni. Hai l’aria di uno che vuole capire Berlino: allora siediti, che ti spiego, senza contatore.", "be_mia": "Hey, Pierpaolo! Hai il tempismo perfetto: il tramonto sul Muro è la mia ora preferita. Sono Mia, studio arte e faccio da guida qui: ti racconto le storie dietro i colori, ok?", "be_tobi": "Na, Pierpaolo! Siediti, che la notte è lunga e lo Späti è aperto. Sono Tobi, lavoro dietro il bancone e vivo qui da dieci anni. Se cerchi la vera Berlino, sei esattamente nel posto giusto."};

/* ---- facciate di strada, zona per zona ---- */
/* blocco moderno di vetro e cemento */
const vetro=(g,x,w,h,i,k,c)=>{const top=GT-h;rect(g,c||['#8aa4b8','#9ab0c0','#7a98ac'][md(i,3)],x,top,w,h);rect(g,'rgba(255,255,255,.2)',x,top,6,h);rect(g,'rgba(0,0,0,.16)',x+w-12,top,12,h);
 for(let r=0;r<h/16-1;r++){rect(g,'rgba(255,255,255,.2)',x,top+8+r*16,w,2);for(let q=0;q<Math.floor(w/22);q++)if(lit(k,i*9+r*5+q))rect(g,LIT,x+8+q*22,top+10+r*16,14,10)}rect(g,'#6a727c',x-2,top-4,w+4,4);rect(g,'rgba(0,0,0,.2)',x,GT-8,w,8)};
/* palazzo di cemento prefabbricato dell'Est */
const plat=(g,x,w,h,i,k)=>{const top=GT-h;rect(g,'#bcbab2',x,top,w,h);rect(g,'rgba(255,255,255,.16)',x,top,5,h);rect(g,'rgba(0,0,0,.14)',x+w-12,top,12,h);
 for(let r=0;r<h/22-1;r++){rect(g,'rgba(0,0,0,.1)',x,top+14+r*22,w,1.4);for(let q=0;q<Math.floor((w-14)/20);q++){rect(g,'#6a727c',x+10+q*20,top+20+r*22,13,12);if(lit(k,i*9+r*5+q))rect(g,LIT,x+10+q*20,top+20+r*22,13,12)}}
 rect(g,['#c8503a','#2a6aa8','#e8c04a'][md(i,3)],x,top+6,w,6);rect(g,'#8a8e94',x-2,top-5,w+4,5);rect(g,'rgba(0,0,0,.2)',x,GT-8,w,8)};
/* magazzino di mattoni con tetto a denti di sega */
const maga=(g,x,w,h,i,k)=>{const top=GT-h;mat(g,'#8a4a3a',x,top,w,h,i);rect(g,'rgba(255,255,255,.1)',x,top,5,h);rect(g,'rgba(0,0,0,.16)',x+w-12,top,12,h);
 for(let q=0;q<Math.floor((w-16)/30);q++){ar(g,'#2a2630',x+12+q*30,top+h-4,16,42);if(lit(k,i*5+q))rect(g,LIT,x+14+q*30,top+h-36,12,26)}
 for(let q=0;q<3;q++)poly(g,'#4a4e58',[[x+q*w/3,top],[x+q*w/3+w/3,top-18],[x+(q+1)*w/3,top]]);if(md(i,3)==0){rect(g,'#6a3a2a',x+w-24,top-60,14,60);rect(g,'#4a2a1a',x+w-26,top-64,18,5)}rect(g,'rgba(0,0,0,.2)',x,GT-8,w,8)};
const grafi=(g,x,w,h,k)=>{h=Math.floor(h);const C=['#e8402a','#f2c82a','#4aa84a','#e86aa8','#2ac8b8','#8a4ad0'];for(let q=0;q<5;q++){const gx=x+8+((q*29+h)%Math.max(20,w-34)),gy=GT-30-((q*17+h)%60);rect(g,C[(q+h)%6],gx,gy,12+q%3*6,6+q%2*4);rect(g,'rgba(0,0,0,.4)',gx,gy+6+q%2*4,12+q%3*6,1.4)}};
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3);
 if(st==1){/* Charlottenburg: palazzi d'epoca con balconi di ferro, negozi al piano terra, platani dei viali */
  if(r>.86){platano(g,x+w*.5,gt,1.15+hr(i)*.25,TT);return}
  cas(g,x+6,w-30,h+60,i,k,{wall:['#d8c8a8','#c8b898','#e0d4b8','#bca888'][md(i,4)],bal:1,roof:md(i,2)?'s':'f',cor:'#a89878',gt:md(i,3)?'shop':'arc',sc:['#6a2a22','#2a4a3a','#2a3a5a'][md(i,3)]});return}
 if(st==2){/* Tiergarten: querce, tigli, betulle e pini, ogni tanto un cespuglio */
  if(r>.9){cespo(g,x+20,gt,90);return}
  [quercia,tiglio,betulla,pino,quercia][md(i,5)](g,x+w*.5,gt,md(i,5)==2?1.2+hr(i)*.3:1+hr(i)*.4,TT);return}
 if(st==3){/* quartiere del governo: blocchi di vetro, pietra chiara neoclassica, prati e alberi */
  if(r>.7){tiglio(g,x+w*.5,gt,1.1+hr(i)*.2,TT);return}
  if(r>.45){cas(g,x+6,w-30,h+10,i,k,{wall:['#e4dcc8','#d8d0b8'][md(i,2)],bal:0,roof:'f',cor:'#c4bca4',gt:'arc'});return}
  vetro(g,x+6,w-34,h+20,i,k);return}
 if(st==4){/* Unter den Linden: palazzi giallo pallido e rosa antico, tetti di ardesia e rame, tigli */
  if(r>.82){tiglio(g,x+w*.5,gt,1.3,TT);return}
  cas(g,x+4,w-24,h+30,i,k,{wall:['#e8dcb0','#e0c8c0','#d8d0b8','#ece4cc'][md(i,4)],bal:1,roof:'s',cor:'#c4b898',gt:md(i,3)==0?'arc':'shop',sc:['#2a3a5a','#6a2a22','#2a4a3a'][md(i,3)]});return}
 if(st==5){/* Museumsinsel: palazzi di pietra chiara, colonnati, il verde del Lustgarten */
  if(r>.72){tiglio(g,x+w*.5,gt,1.15,TT);return}
  cas(g,x+4,w-26,h+20,i,k,{wall:['#e4ddc8','#dcd4bc','#e8e0cc'][md(i,3)],bal:0,roof:'f',cor:'#c8c0a6',gt:'arc'});return}
 if(st==6){/* Alexanderplatz: cemento dell'Est e vetro; più a destra le case colorate del Nikolaiviertel */
  if(wx>12650){cas(g,x+6,w-34,h-20,i,k,{wall:['#d8a850','#c8683a','#6a8a9a','#d89a8a','#a8b878'][md(i,5)],bal:0,roof:'s',gt:'tav'});return}
  if(md(i,2)==0)vetro(g,x+8,w-40,h+80,i,k,'#9ab0c0');else plat(g,x+6,w-34,h+30,i,k);return}
 if(st==7){/* Potsdamer Platz: grattacieli e mattoni; poi, verso il Checkpoint, palazzi d'epoca */
  if(wx<14700){if(md(i,2)==0)vetro(g,x+8,w-44,h+100,i,k,['#8aa4b8','#a8b8c4','#7a98ac'][md(i,3)]);else maga(g,x+8,w-44,h+60,i,k);return}
  if(r>.84){tiglio(g,x+w*.5,gt,1.1,TT);return}
  cas(g,x+6,w-30,h+40,i,k,{wall:['#c8b898','#d8c8a8','#bca888'][md(i,3)],bal:1,roof:'f',cor:'#a89878',gt:'shop',sc:['#6a2a22','#2a3a5a','#2a4a3a'][md(i,3)]});return}
 if(st==8){/* East Side Gallery e Oberbaum: magazzini di mattoni, palazzi nuovi sul fiume, salici e pioppi */
  if(r>.8){betulla(g,x+w*.5,gt,1.5,TT);return}
  if(md(i,2)==0)maga(g,x+4,w-30,h+10,i,k);else vetro(g,x+6,w-40,h+30,i,k,'#9ab0c0');return}
 /* 9 · Kreuzberg: case colorate con balconi, bar con neon, murales e graffiti */
 cas(g,x+4,w-24,h+40,i,k,{wall:['#c8683a','#d8a850','#6a8a9a','#b8553a','#8a6a9a','#6a9a8a'][md(i,6)],bal:1,roof:md(i,2)?'f':'s',cor:'#a89878',gt:md(i,2)?'tav':'shop',sc:['#2a2630','#3a2a4a','#2a3a5a'][md(i,3)]});
 grafi(g,x,w,h+i%7*3,k);const nc=['#ff5a9a','#5af0b0','#ffd84a','#5ac8ff'][md(i,4)];rect(g,'#14110f',x+w-56,gt-112,38,12);rect(g,k>.1?nc:'#8a8478',x+w-53,gt-109,32,3);if(k>.1)glow(g,x+w-37,gt-106,30,'255,120,180',.25*k)}

/* ---- livello 0: cielo, sole, luna, stelle, nuvole, velo dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-18000)/2400,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/16400,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*250;
 if(xs<16900){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,15)}
 const mu=cl((xs-17200)/2400,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*210;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<1300?'rgba(252,206,214,.75)':xs<13700?'rgba(255,255,255,.85)':xs<16200?'rgba(255,176,140,.7)':'rgba(140,120,190,.4)';
 each(o-((t*5)%340)*.02,340,1,(x,i,r)=>{if(r>.5)return;nube(g,x+r*100,40+r*46,.7+r*.5,cc)});
 const fo=cl(1-xs/1300,0,1)*.3;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-11800)/1000,0,1)*cl((15400-xs)/900,0,1)*.12;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-15200)/800,0,1)*cl((17600-xs)/900,0,1)*.26;if(wg>.01){g.fillStyle='rgba(255,110,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}

/* ---- livello 1: il Tiergarten e la Colonna d'oro, la cupola del Reichstag e la Porta, il Duomo verde e la torre argentata, i grattacieli di Potsdamer Platz, la Spree e il ponte, i tetti di Kreuzberg ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 /* il Tiergarten come una linea verde lontana, con la Colonna d'oro (zone 1-3) */
 const tg=env(3300,5600);if(tg>.02){g.globalAlpha=tg;const sx=fx(3300);g.fillStyle=dim('#4a7a4a');g.beginPath();g.moveTo(sx-460,hz+34);for(let q=0;q<=32;q++)g.lineTo(sx-460+q*29,hz+2-12*Math.abs(Math.sin(q*.9))-6*Math.sin(q*2.1));g.lineTo(sx+460,hz+34);g.closePath();g.fill();
  rect(g,dim('#d8c890'),sx+80,hz-66,3,74);rect(g,dim('#c8a838'),sx+78,hz-40,7,3);dot(g,dim('#e8c850'),sx+81.5,hz-70,4);poly(g,dim('#e8c850'),[[sx+74,hz-74],[sx+81,hz-66],[sx+89,hz-74]]);g.globalAlpha=1}
 /* Reichstag con la cupola di vetro e la Porta con la quadriga (zone 3-4) */
 const rg=env(5900,4400);if(rg>.02){g.globalAlpha=rg;const sx=fx(5900);rect(g,dim('#d8cfb4'),sx-110,hz-34,150,50);rect(g,dim('#c8bf9e'),sx-114,hz-38,158,5);[-106,34].forEach(o2=>rect(g,dim('#d8cfb4'),sx+o2,hz-62,12,32));
  g.fillStyle=dim('#a8c8dc');g.beginPath();g.moveTo(sx-34,hz-38);g.quadraticCurveTo(sx-34,hz-82,sx-16,hz-84);g.quadraticCurveTo(sx+2,hz-82,sx+2,hz-38);g.closePath();g.fill();
  rect(g,dim('#d8cfb4'),sx+60,hz-44,66,60);rect(g,dim('#c8bf9e'),sx+56,hz-50,74,6);for(let q=0;q<6;q++)rect(g,dim('#bcb294'),sx+64+q*10,hz-40,3,54);rect(g,dim('#d8cfb4'),sx+70,hz-62,46,12);for(let q=0;q<4;q++)rect(g,dim('#4a9a82'),sx+74+q*9,hz-72,6,10);rect(g,dim('#4a9a82'),sx+88,hz-82,7,12);g.globalAlpha=1}
 /* il Duomo con la cupola verde e la Fernsehturm argentata (zone 5-6) */
 const dm=env(9900,3800);if(dm>.02){g.globalAlpha=dm;const sx=fx(9900);rect(g,dim('#e0d6b8'),sx-60,hz-26,120,46);cupo(g,dim('#5a9a86'),sx,hz-26,26,34);rect(g,dim('#c8a838'),sx-.8,hz-70,1.6,12);[-40,40].forEach(o2=>cupo(g,dim('#5a9a86'),sx+o2,hz-26,10,14));g.globalAlpha=1}
 const fn=env(11900,6200);if(fn>.02){g.globalAlpha=fn;const sx=fx(11900);rect(g,dim('#b0b0ac'),sx-2,hz-136,4,152);dot(g,dim('#c8ccd4'),sx,hz-138,9);rect(g,dim('#d8d8d8'),sx-.8,hz-170,1.6,26);if(night>.2){dot(g,Math.sin(t*3)>0?'#ff4a3a':'#8a2a2a',sx,hz-172,1.6);glow(g,sx,hz-138,26,'255,226,150',.4*night)}g.globalAlpha=1}
 /* i grattacieli di Potsdamer Platz, di vetro e di mattoni (zona 7) */
 const pt=env(14400,3800);if(pt>.02){g.globalAlpha=pt;const sx=fx(14400);[[-90,26,96,'#8aa4b8'],[-56,22,70,'#a85a42'],[-28,30,118,'#9ab0c0'],[10,24,84,'#7a98ac'],[40,34,104,'#a8b8c4'],[80,22,66,'#8a4a3a']].forEach((b,i)=>{rect(g,dim(b[3]),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2]);rect(g,'rgba(255,255,255,.2)',sx+b[0]-b[1]/2,hz+16-b[2],3,b[2]);if(night>.2)for(let q=0;q<b[2]/10;q++)if(hr(i*9+q)>.5)rect(g,'rgba(255,226,160,.8)',sx+b[0]-b[1]/2+4+(q%3)*7,hz+20-b[2]+q*8,3,3)});g.globalAlpha=1}
 /* la Spree con il riflesso del tramonto e le torri dell'Oberbaum (zona 8) */
 const sp=env(17200,4000);if(sp>.02){g.globalAlpha=sp;const sx=fx(17200);rect(g,'rgba(255,150,100,.38)',sx-520,hz+8,1040,26);for(let q=0;q<14;q++)rect(g,'rgba(255,220,170,'+(.3+.2*Math.sin(t*2+q))+')',sx-480+q*70,hz+12+(q%3)*7,34,1.6);
  [-60,60].forEach(o2=>{rect(g,dim('#8a3a2c'),sx+o2-8,hz-48,16,64);poly(g,dim('#4a4e58'),[[sx+o2-10,hz-48],[sx+o2,hz-72],[sx+o2+10,hz-48]])});rect(g,dim('#8a3a2c'),sx-60,hz-14,120,26);g.globalAlpha=1}
 /* i tetti di Kreuzberg di notte, con la Fernsehturm lontana che lampeggia (zona 9) */
 const kb=env(19800,5000);if(kb>.02){g.globalAlpha=kb;const sx=fx(19800);g.fillStyle=dim('#3a3a5a');g.beginPath();g.moveTo(sx-440,hz+34);for(let q=0;q<=22;q++)g.lineTo(sx-440+q*40,hz-6-14*hr(q*3+7)-(q%3)*5);g.lineTo(sx+440,hz+34);g.closePath();g.fill();
  for(let q=0;q<46;q++)if(hr(q*7+3)>.45)rect(g,'rgba(255,214,140,'+(.4+.4*Math.sin(t*2+q))+')',sx-430+q*19,hz-2+hr(q)*24,2.4,2.4);
  rect(g,dim('#b0b0ac'),sx+150,hz-120,2.4,130);dot(g,dim('#c8ccd4'),sx+151,hz-122,6);dot(g,Math.sin(t*3)>0?'#ff4a3a':'#6a1a1a',sx+151,hz-146,1.6);glow(g,sx+151,hz-122,24,'255,226,150',.4*night);g.globalAlpha=1}}

/* ---- livello 2: profili di palazzi, alberi e tetti, zona per zona ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;
  const wins=(n,top)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+14+(q%4)*20,top+Math.floor(q/4)*14,6,5)};
  if(zz==1){rect(g,dim(['#d8c8a8','#c8b898','#e0d4b8'][md(i,3)]),x+6,hz-60-r*40,76,70+r*40);rect(g,'rgba(255,255,255,.2)',x+6,hz-60-r*40,4,70+r*40);poly(g,dim('#4a4e58'),[[x+2,hz-60-r*40],[x+14,hz-76-r*40],[x+66,hz-76-r*40],[x+78,hz-60-r*40]]);if(hr(i*3)>.6)rect(g,dim('#6a3a2a'),x+54,hz-96-r*40,6,18);wins(8,hz-52-r*40)}
  else if(zz==2){el(g,dim(['#2e6a34','#3e7a3e','#4a8a3a','#33783c'][md(i,4)]),x+50,hz-34-r*14,54,36+r*12);el(g,dim('#3a7a3a'),x+12,hz-14,30,20);rect(g,dim('#4a3a2c'),x+48,hz-8,4,18)}
  else if(zz==3){if(md(i,2)==0){rect(g,dim('#8aa0b4'),x,hz-56-r*40,w-20,66+r*40);for(let q=0;q<5;q++)rect(g,'rgba(255,255,255,.2)',x,hz-50-r*40+q*14,w-20,2)}else{rect(g,dim('#e4dcc8'),x+4,hz-46-r*24,w-12,56+r*24);rect(g,dim('#c8bf9e'),x,hz-50-r*24,w-4,5);for(let q=0;q<5;q++)rect(g,dim('#bcb294'),x+12+q*16,hz-42-r*24,3,40)}wins(6,hz-46-r*30)}
  else if(zz==4){rect(g,dim(['#e8dcb0','#e0c8c0','#d8d0b8'][md(i,3)]),x,hz-56-r*26,w-8,66+r*26);poly(g,dim('#4a8472'),[[x-3,hz-56-r*26],[x+16,hz-72-r*26],[x+w-26,hz-72-r*26],[x+w-5,hz-56-r*26]]);if(hr(i*3)>.7)el(g,dim('#3e7a3e'),x+70,hz-30,30,34);wins(8,hz-46-r*26)}
  else if(zz==5){rect(g,dim(['#e4ddc8','#dcd4bc'][md(i,2)]),x,hz-60-r*24,w-6,70+r*24);for(let q=0;q<7;q++)rect(g,dim('#c8c0a6'),x+6+q*13,hz-52-r*24,4,50);rect(g,dim('#c8c0a6'),x-3,hz-64-r*24,w,5);if(hr(i*3)>.72)cupo(g,dim('#5a9a86'),x+w*.4,hz-64-r*24,40,34);wins(6,hz-50-r*24)}
  else if(zz==6){if(cam+x<12650){rect(g,dim('#bcbab2'),x,hz-80-r*70,w-30,90+r*70);for(let q=0;q<7;q++)rect(g,'rgba(0,0,0,.14)',x,hz-70-r*70+q*14,w-30,1.4);wins(8,hz-70-r*70)}else{rect(g,dim(['#d8a850','#c8683a','#6a8a9a','#d89a8a'][md(i,4)]),x,hz-44-r*16,w-14,54+r*16);poly(g,dim('#8a3a2a'),[[x-3,hz-44-r*16],[x+44,hz-72-r*16],[x+w-11,hz-44-r*16]]);wins(6,hz-38-r*16)}}
  else if(zz==7){rect(g,dim(['#8aa4b8','#a8b8c4','#7a98ac','#a85a42'][md(i,4)]),x,hz-70-r*70,w-34,80+r*70);rect(g,'rgba(255,255,255,.2)',x,hz-70-r*70,5,80+r*70);for(let q=0;q<8;q++)rect(g,'rgba(255,255,255,.14)',x,hz-62-r*70+q*14,w-34,2);wins(8,hz-60-r*70)}
  else if(zz==8){rect(g,dim(['#8a4a3a','#8aa4b8','#7a3a2c'][md(i,3)]),x,hz-50-r*30,w-14,60+r*30);for(let q=0;q<3;q++)poly(g,dim('#4a4e58'),[[x+q*30,hz-50-r*30],[x+q*30+30,hz-64-r*30],[x+(q+1)*30,hz-50-r*30]]);if(hr(i*3)>.8)rect(g,dim('#6a3a2a'),x+w-34,hz-96,10,50);if(night>.1)for(let q=0;q<4;q++)rect(g,'rgba(255,200,110,.85)',x+8+q*20,hz-38-r*30,8,14)}
  else{rect(g,dim(['#c8683a','#6a8a9a','#d8a850','#8a6a9a','#b8553a'][md(i,5)]),x,hz-52-r*34,w-8,62+r*34);rect(g,dim('#a89878'),x-3,hz-56-r*34,w-2,5);if(night>.1)for(let q=0;q<5;q++)if(hr(i*7+q)>.3)rect(g,'rgba(255,200,110,.85)',x+8+q*18,hz-40-r*34,8,14);if(hr(i*3)>.7)rect(g,['#ff5a9a','#5af0b0','#ffd84a'][md(i,3)],x+24,hz-72-r*34,26,8)}});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}

/* ---- livello 3: la strada, zona per zona ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>130+hr(i*5)*50,170);
 each2(150,8,Z[1],Z[2],2,i=>120+hr(i*5)*40,150);
 each2(180,9,Z[2],Z[3],3,i=>120+hr(i*5)*40,170);
 each2(180,10,Z[3],Z[4],4,i=>120+hr(i*5)*40,170);
 each2(190,11,Z[4],Z[5],5,i=>120+hr(i*5)*40,170);
 each2(200,12,Z[5],Z[6],6,i=>100+hr(i*5)*60,190);
 each2(200,13,Z[6],Z[7],7,i=>100+hr(i*5)*50,190);
 each2(190,14,Z[7],Z[8],8,i=>100+hr(i*5)*40,180);
 each2(180,15,Z[8],Z[9],9,i=>130+hr(i*5)*50,170)}

/* ---- vita: piccioni, passeri, cornacchie, gabbiani sulla Spree, pipistrelli, volpi urbane, corridori ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 /* piccioni che si alzano in volo sulle piazze (dal Reichstag all'Alexanderplatz) */
 const pg=cl((xs-4600)/400,0,1)*cl((13600-xs)/400,0,1);
 if(pg>.05)for(let i=0;i<5;i++){const bx=((i*117+t*(46+i*6))%600)-60,by=70+hr(i*3)*100+Math.sin(t*2+i*2)*14,w=Math.sin(t*10+i)*3.4;g.strokeStyle='rgba(120,126,140,'+(.9*Math.min(1,pg))+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke();rect(g,'rgba(90,96,110,.9)',bx-2,by,5,3)}
 /* passeri, piccoli e veloci */
 if(xs<17400)for(let i=0;i<3;i++){const bx=((i*171+t*(80+i*9))%620)-70,by=100+hr(i*5+2)*120+Math.sin(t*3+i)*10,w=Math.sin(t*16+i)*2;g.strokeStyle='rgba(90,66,40,.85)';g.lineWidth=1.8;g.beginPath();g.moveTo(bx-5,by+w);g.lineTo(bx,by);g.lineTo(bx+5,by+w);g.stroke()}
 /* cornacchie grigie nel Tiergarten e a Kreuzberg di sera */
 const cr=Math.max(cl((xs-2300)/300,0,1)*cl((4800-xs)/300,0,1),cl((xs-18400)/300,0,1)*cl((21600-xs)/300,0,1));
 if(cr>.05)for(let i=0;i<3;i++){const bx=((i*143+t*(52+i*7))%640)-80,by=60+hr(i*4+1)*110+Math.sin(t*1.6+i*2)*16,w=Math.sin(t*7+i)*4;g.strokeStyle='rgba(40,42,50,'+cr+')';g.lineWidth=3;g.beginPath();g.moveTo(bx-11,by+w);g.quadraticCurveTo(bx-5,by-6,bx,by);g.quadraticCurveTo(bx+5,by-6,bx+11,by+w);g.stroke();rect(g,'rgba(40,42,50,'+cr+')',bx-2,by,6,3)}
 /* gabbiani sulla Spree: fra la Museumsinsel e il Nikolaiviertel e lungo il fiume al tramonto */
 const gb=Math.max(cl((xs-9000)/400,0,1)*cl((13700-xs)/400,0,1),cl((xs-15800)/400,0,1)*cl((18400-xs)/400,0,1));
 if(gb>.05)for(let i=0;i<4;i++){const bx=((i*131+t*(38+i*5))%600)-60,by=60+hr(i*7+3)*90+Math.sin(t*1.4+i)*18,w=Math.sin(t*5+i)*3;g.strokeStyle='rgba(250,250,250,'+(.9*gb)+')';g.lineWidth=2.2;g.beginPath();g.moveTo(bx-10,by+w);g.quadraticCurveTo(bx-5,by-5,bx,by);g.quadraticCurveTo(bx+5,by-5,bx+10,by+w);g.stroke()}
 /* pipistrelli all'imbrunire a Kreuzberg */
 const pb=cl((xs-17800)/500,0,1);
 if(pb>.05)for(let i=0;i<3;i++){const bx=((i*97+t*(60+i*9))%560)-40,by=80+hr(i*5+4)*100+Math.sin(t*4+i*3)*22,w=Math.sin(t*14+i)*4;g.fillStyle='rgba(20,18,30,'+pb+')';g.beginPath();g.moveTo(bx-7,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+7,by+w);g.lineTo(bx+3,by+1);g.lineTo(bx,by+3);g.lineTo(bx-3,by+1);g.fill()}
 /* volpi urbane che attraversano il viale nelle ore quiete: all'alba a Charlottenburg e nella notte di Kreuzberg */
 [[240,2200,26],[19200,21200,30]].forEach((rg,ri)=>{const span=rg[1]-rg[0],wx=rg[0]+((t*rg[2])%span),px=wx-cam;if(px<-60||px>540)return;A.setDK(nf(wx));PR.beVolpe(g,px,GT+64+ri*4,t,.9)});
 /* corridori nel Tiergarten e sul lungofiume, passanti per le strade */
 [[2400,4400,50,0],[16000,17900,-30,1],[6800,8700,-24,2]].forEach((rg,ri)=>{for(let i=0;i<2;i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.25),wx=rg[0]+(((t*sp+i*span/2)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));const d=sp>0?1:-1,by=GT+22+i*9;g.save();g.translate(px,by);g.scale(d*.6,.6);
  fig(g,0,0,t*3,{f:1,s:.7,ph:i,skin:tn('#e0b090'),top:tn(['#e8505a','#2a8a9a','#f2c82a'][i+ri*0]),bot:tn('#2a2a36'),hair:tn('#2a1a10')});g.restore()}})}

/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#cdc7b8','p'],[Z[1],Z[2],'#6aa850','t'],[Z[2],Z[3],'#c4beac','g'],[Z[3],Z[4],'#cfc3a6','c'],[Z[4],Z[5],'#d8d0b8','b'],[Z[5],Z[6],'#c8c4b8','r'],[Z[6],Z[7],'#9c9ca2','a'],[Z[7],Z[8],'#8a8a8e','m'],[Z[8],Z[9],'#4a4a52','v']];
 rect(g,'#d8d0b8',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const slabs=(bw0,add,al)=>{for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,15);rect(g,'rgba(0,0,0,.12)',px,yy,1.3,17)}rect(g,'rgba(0,0,0,.09)',x0,yy+15,x1-x0,1.4)}};
  const dash=(py,c,len,gap)=>{const s0=Math.floor((cam+x0)/(len+gap))*(len+gap);for(let k=-1;k<Math.ceil(ww/(len+gap))+2;k++)rect(g,c,s0+k*(len+gap)-cam,py,len,2)};
  if(z[3]=='p'){/* granito chiaro, pista ciclabile rossastra, strada con le strisce */
   slabs(46,5,.1);rect(g,'#8a8a88',x0,gt+86,x1-x0,3);rect(g,'#b8604a',x0,gt+89,x1-x0,24);dash(gt+100,'rgba(255,255,255,.5)',14,16);rect(g,'#8a8a88',x0,gt+113,x1-x0,3);rect(g,'#5a5a60',x0,gt+116,x1-x0,34);dash(gt+132,'#f4f0e6',26,22)}
  if(z[3]=='t'){/* prato umido, viale di ghiaia chiara con le foglie */
   for(let q=0;q<70;q++)rect(g,'rgba(40,100,40,.3)',x0+((q*29)%ww),gt+5+hr(q)*22,2,4);rect(g,'rgba(255,255,255,.2)',x0,gt+3,x1-x0,8);rect(g,'#d4c8a8',x0,gt+34,x1-x0,86);rect(g,'rgba(0,0,0,.08)',x0,gt+34,x1-x0,3);rect(g,'rgba(0,0,0,.08)',x0,gt+118,x1-x0,3);
   for(let q=0;q<90;q++)rect(g,'rgba(120,100,70,'+(.1+hr(q)*.15)+')',x0+((q*37)%ww),gt+40+hr(q+9)*76,3,1.6);for(let q=0;q<10;q++)rect(g,q%2?'#c8a838':'#a8602a',x0+((q*83)%ww),gt+44+hr(q+3)*70,4,2.4);rect(g,'#6aa850',x0,gt+122,x1-x0,28)}
  if(z[3]=='g'){/* lastre grandi della piazza del governo, il prato in alto */
   slabs(62,8,.12);rect(g,'#6aa850',x0,gt+3,x1-x0,16);rect(g,'rgba(0,0,0,.1)',x0,gt+19,x1-x0,2)}
  if(z[3]=='c'){/* viale sabbioso sotto i tigli, listello di selciato e ombre di foglie */
   rect(g,'#d8ccb0',x0,gt+3,x1-x0,60);for(let q=0;q<80;q++)rect(g,'rgba(60,90,40,'+(.06+hr(q)*.09)+')',x0+((q*31)%ww),gt+6+hr(q+5)*54,10,5);slabs(40,3,.08);dash(gt+66,'rgba(0,0,0,.18)',8,6);dash(gt+72,'rgba(0,0,0,.18)',8,6);rect(g,'#9a9488',x0,gt+78,x1-x0,3);rect(g,'#5a5a60',x0,gt+82,x1-x0,66);dash(gt+114,'#f4f0e6',24,26)}
  if(z[3]=='b'){/* grandi lastre chiare davanti ai musei, prato del Lustgarten */
   slabs(72,10,.14);rect(g,'#6aa850',x0,gt+3,x1-x0,12);for(let q=0;q<40;q++)rect(g,'rgba(40,100,40,.3)',x0+((q*29)%ww),gt+4+hr(q)*9,2,3)}
  if(z[3]=='r'){/* la piazza di cemento, il disegno a riquadri, i binari del tram */
   for(let r=0;r<7;r++)for(let k=-1;k<Math.ceil(ww/40)+2;k++){const px=Math.floor((cam+x0)/40)*40+k*40-cam,hh=hr(k*13+r*7+z[0]);rect(g,(r+Math.floor((cam+x0)/40)+k)%2?'rgba(0,0,0,.05)':'rgba(255,255,255,.1)',px,gt+9+r*19,38,17)}
   rect(g,'#6a6a6e',x0,gt+92,x1-x0,38);rect(g,'#8a8a8e',x0,gt+98,x1-x0,2);rect(g,'#8a8a8e',x0,gt+120,x1-x0,2);for(let k=-1;k<Math.ceil(ww/16)+2;k++){const px=Math.floor((cam+x0)/16)*16+k*16-cam;rect(g,'#4a4a4e',px,gt+96,5,28)}rect(g,'#c0c0c4',x0,gt+101,x1-x0,1.6);rect(g,'#c0c0c4',x0,gt+119,x1-x0,1.6)}
  if(z[3]=='a'){/* granito scuro dell'incrocio e, più in là, il selciato del Checkpoint */
   slabs(52,6,.1);rect(g,'#8a8a8e',x0,gt+84,x1-x0,3);rect(g,'#4a4a52',x0,gt+87,x1-x0,62);dash(gt+118,'#f4f0e6',24,26)}
  if(z[3]=='m'){/* lungofiume: prato, asfalto con i sampietrini, bordo di ciottoli */
   rect(g,'#7aa04a',x0,gt+3,x1-x0,18);for(let q=0;q<40;q++)rect(g,'rgba(40,100,40,.3)',x0+((q*29)%ww),gt+5+hr(q)*14,2,4);slabs(30,2,.07);rect(g,'#6a6a70',x0,gt+90,x1-x0,60);dash(gt+118,'#e8c828',30,18);for(let k=-1;k<Math.ceil(ww/10)+2;k++){const px=Math.floor((cam+x0)/10)*10+k*10-cam;rect(g,'rgba(255,255,255,.06)',px,gt+94+(k%5)*8,6,3)}}
  if(z[3]=='v'){/* asfalto bagnato con sampietrini, pozzanghere che riflettono le luci */
   slabs(24,2,.05);for(let q=0;q<30;q++){const px=x0+((q*61)%ww),py=gt+22+hr(q*3)*100;el(g,'rgba(120,150,210,.2)',px,py,22+hr(q)*20,3.6);el(g,'rgba(255,200,120,.14)',px+6,py,12,1.6)}
   rect(g,'#2a2a30',x0,gt+98,x1-x0,52);dash(gt+124,'rgba(255,255,255,.4)',22,28)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1300,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const gd=cl((cam-12200)/700,0,1)*cl((15200-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
 const sg=cl((cam-15200)/700,0,1)*cl((17400-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));const q=Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)});['skin','top','bot','hair'].forEach(k=>{if(q[k])q[k]=tn(q[k])});fig(g,px,y,t,q)},d:{a:{t:d}}});
const npcs=[
 /* Ayşe: giacca imbottita scura, sciarpa colorata, capelli raccolti, grembiule da lavoro, pila di giornali sotto il braccio, termos di tè */
 NP('be_ayse',NAME.be_ayse,780,GREET.be_ayse,{skin:'#d8a078',top:'#2a2e3a',bot:'#2a2a36',hair:'#2a1a10',long:1,s:1.0},(g,b,t)=>{for(let q=0;q<3;q++)rect(g,'rgba(255,255,255,.1)',-12,-80+q*10+b,24,1.6);rect(g,'#6a4a3a',-11,-64+b,22,22);rect(g,'rgba(0,0,0,.14)',-11,-64+b,3,22);
  poly(g,'#e8402a',[[-9,-91+b],[9,-91+b],[6,-82+b],[0,-78+b],[-6,-82+b]]);rect(g,'#f2c82a',-9,-88+b,18,2);rect(g,'#2a8a6a',-9,-85+b,18,2);dot(g,'#2a1a10',-6,-117+b,6.4);
  rect(g,'#e8e4d8',-29,-76,17,22);rect(g,'#c8402a',-27,-74,13,2);rect(g,'#2a6aa8',-27,-69,13,2);rect(g,'#14110f',-27,-64,11,1.4);rect(g,'#14110f',-27,-60,9,1.4);
  rect(g,'#9aa0aa',17,-72,6,16);rect(g,'#c8281e',17,-75,6,3);rect(g,'rgba(255,255,255,.4)',18,-70,1.6,12)}),
 /* Jonas: giacca a vento verde, occhiali da sole, zaino, bicicletta nera con la targhetta del tour, casco appeso al manubrio, mani sporche di grasso */
 NP('be_jonas',NAME.be_jonas,4090,GREET.be_jonas,{skin:'#e0b896',top:'#2a7a4a',bot:'#2a3a4a',hair:'#6a4a2a',s:1.04},(g,b,t)=>{rect(g,'#2a2a2e',-17,-86+b,9,30);rect(g,'#3a3a40',-17,-86+b,9,3);rect(g,'#14110f',-7,-108+b,15,3.6);dot(g,'#2a2a2e',-2,-106.5+b,2.6);dot(g,'#2a2a2e',5,-106.5+b,2.6);rect(g,'#3a3a3e',10,-62,5,4);
  [26,70].forEach(o=>{g.strokeStyle=tn('#14110f');g.lineWidth=2.6;g.beginPath();g.arc(o,-20,18,0,7);g.stroke();for(let q=0;q<5;q++){const an=q*1.2566+t*0;ln(g,'rgba(120,120,126,.7)',.7,[o,-20,o+Math.cos(an)*17,-20+Math.sin(an)*17])}});
  ln(g,'#1a1a1e',3.2,[26,-20,44,-44,64,-44,70,-20]);ln(g,'#1a1a1e',3,[44,-44,48,-20,26,-20]);ln(g,'#1a1a1e',3,[64,-44,66,-66,58,-70]);rect(g,'#1a1a1e',52,-68,16,3);rect(g,'#c8a838',40,-40,10,6);
  el(g,'#e8802a',64,-76,8,6);rect(g,'#2a2a2e',58,-76,12,2);rect(g,'#3a3a3e',46,-46,8,3)}),
 /* Brigitte: cappotto marrone, sciarpa a righe, capelli grigi corti, occhiali, borsa di stoffa con un giornale, scarpe comode */
 NP('be_brigitte',NAME.be_brigitte,5400,GREET.be_brigitte,{skin:'#e0b090',top:'#6a4a30',bot:'#4a3a2a',hair:'#bcbcbc',s:.98},(g,b,t)=>{for(let q=0;q<4;q++)rect(g,q%2?'#c8402a':'#f4f0e6',-9,-91+q*2.6+b,18,1.8);
  g.strokeStyle=tn('#2a2a2e');g.lineWidth=1.2;g.beginPath();g.arc(-2,-106.5+b,2.8,0,7);g.arc(5,-106.5+b,2.8,0,7);g.stroke();rect(g,'#6a4a30',-10,-52,20,10);rect(g,'rgba(0,0,0,.14)',-10,-52,3,10);
  rect(g,'#e8e0cc',-27,-70,16,20);rect(g,'#c8402a',-25,-68,12,2);rect(g,'#f4f0e6',-26,-62,12,10);rect(g,'#14110f',-24,-60,8,1.2);rect(g,'#14110f',-24,-57,8,1.2);ln(g,'#e8e0cc',1.8,[-24,-70,-19,-80,-14,-70])}),
 /* Alexander von Humboldt: redingote scura, cravatta bianca, capelli ondulati grigi, taccuino in mano, barometro a tracolla, una pianta nel taschino */
 NP('be_humboldt',NAME.be_humboldt,8070,GREET.be_humboldt,{skin:'#e0b896',top:'#2a2630',bot:'#2a2630',hair:'#a8a8a8',long:1,s:1.02},(g,b,t)=>{rect(g,'#f4f0e6',-8,-92+b,16,6);poly(g,'#f4f0e6',[[-5,-86+b],[0,-80+b],[5,-86+b]]);for(let q=0;q<4;q++)dot(g,'#a8a8a8',-9+q*6,-117+b,4.4);
  ln(g,'#6a4a2a',1.6,[-10,-90+b,14,-48]);rect(g,'#2a1e14',9,-58,10,2);dot(g,'#c8a838',2,-70,5);dot(g,'#f4f0e6',2,-70,3.6);ln(g,'#14110f',.8,[2,-70,2,-73]);ln(g,'#14110f',.8,[2,-70,4,-69]);
  rect(g,'#e8dcc0',-27,-72,13,17);rect(g,'#6a4a2a',-27,-72,13,2);ln(g,'#14110f',.8,[-25,-66,-16,-66]);ln(g,'#14110f',.8,[-25,-62,-17,-62]);rect(g,'#e0b896',-14,-68,3,4);
  rect(g,'#2a8a4a',6,-80+b,2,6);poly(g,'#4aa86a',[[6,-80+b],[2,-88+b],[10,-86+b]]);poly(g,'#4aa86a',[[7,-80+b],[12,-86+b],[10,-78+b]])}),
 /* Lena: cappotto beige, sciarpa di lana, zaino, tablet con le immagini, cartellino con il nome, occhiali neri, scarpe da ginnastica */
 NP('be_lena',NAME.be_lena,9620,GREET.be_lena,{skin:'#e0b896',top:'#c8b898',bot:'#2a2a36',hair:'#4a2a1a',long:1,s:1.0},(g,b,t)=>{rect(g,'#2a2a2e',-17,-84+b,8,28);poly(g,'#8a3a4a',[[-10,-92+b],[10,-92+b],[7,-82+b],[0,-78+b],[-7,-82+b]]);rect(g,'rgba(255,255,255,.2)',-8,-88+b,16,1.6);
  g.strokeStyle=tn('#14110f');g.lineWidth=1.5;g.beginPath();g.arc(-2,-106.5+b,3,0,7);g.arc(5,-106.5+b,3,0,7);g.stroke();rect(g,'#f4f0e6',4,-74+b,9,5);rect(g,'#2a6aa8',4,-74+b,9,1.4);
  rect(g,'#14161c',-29,-80,16,22);rect(g,'#7aa4c8',-28,-79,14,19);rect(g,'#e8c850',-26,-77,5,4);rect(g,'#c8402a',-19,-77,5,4);rect(g,'#5a8a6a',-26,-71,12,5)}),
 /* Dieter: giacca di pelle consunta, cappello di lana, baffi grigi, occhiali da vista, tazza di caffè in mano, taxi crema accanto */
 NP('be_dieter',NAME.be_dieter,12060,GREET.be_dieter,{skin:'#d8a078',top:'#4a3a2a',bot:'#3a3a46',hair:'#a8a8a8',s:1.04},(g,b,t)=>{el(g,'#3a3a4a',0,-117+b,15,6);rect(g,'#3a3a4a',-14,-118+b,28,5);rect(g,'#2a2a38',-14,-114+b,28,2);
  rect(g,'#8a8e94',-5,-97+b,12,2.4);rect(g,'rgba(255,255,255,.12)',-9,-84+b,3,30);rect(g,'rgba(0,0,0,.18)',2,-70+b,8,3);
  g.strokeStyle=tn('#2a2a2e');g.lineWidth=1.4;g.beginPath();g.arc(-2,-106.5+b,2.8,0,7);g.arc(5,-106.5+b,2.8,0,7);g.stroke();
  rect(g,'#f4f0e6',14,-72,8,8);rect(g,'#c8402a',14,-72,8,2);rect(g,'#6a4a2a',15,-70,6,2);for(let q=0;q<2;q++)el(g,'rgba(235,235,235,'+(.4*(1-((t*.7+q*.5)%1)))+')',18+Math.sin(t*2+q)*2,-78-((t*14+q*10)%18),3,2)}),
 /* Mia: giubbotto di jeans pieno di spille, pantaloni neri, sciarpa colorata, macchina fotografica al collo, bomboletta sul portachiavi, capelli corti rossi */
 NP('be_mia',NAME.be_mia,16720,GREET.be_mia,{skin:'#e0b896',top:'#3a5a8a',bot:'#14110f',hair:'#c8281e',s:1.0},(g,b,t)=>{poly(g,'#f2c82a',[[-10,-92+b],[10,-92+b],[7,-82+b],[0,-78+b],[-7,-82+b]]);rect(g,'#e86aa8',-9,-89+b,18,2);rect(g,'#2ac8b8',-9,-85+b,18,2);
  [[-7,-70,'#f2c82a'],[4,-66,'#e8402a'],[-3,-76,'#4aa84a'],[7,-74,'#f4f0e6'],[-8,-62,'#e86aa8']].forEach(p=>dot(g,p[2],p[0],p[1]+b,1.8));
  rect(g,'#14110f',-8,-72+b,16,10);dot(g,'#3a3a40',0,-67+b,3.6);dot(g,'#8aa4c8',0,-67+b,1.8);rect(g,'#14110f',-7,-76+b,5,3);
  ln(g,'#8a8e94',1,[12,-56,14,-44]);rect(g,'#c8281e',12,-44,5,10);rect(g,'#f4f0e6',12,-41,5,3)}),
 /* Tobi: maglietta nera, giacca di jeans, cappellino, cuffie al collo, bottiglia in mano, sneakers consumate, un tatuaggio sul braccio */
 NP('be_tobi',NAME.be_tobi,19160,GREET.be_tobi,{skin:'#e0b090',top:'#14110f',bot:'#2a3a4a',hair:'#3a2a1a',s:1.02},(g,b,t)=>{rect(g,'#3a5a8a',-12,-90+b,5,34);rect(g,'#3a5a8a',8,-90+b,5,34);rect(g,'#2a4a78',-12,-90+b,25,3);
  rect(g,'#14110f',-13,-117+b,28,6);poly(g,'#14110f',[[8,-112+b],[22,-110+b],[8,-107+b]]);ln(g,'#2a2a2e',2.2,[-8,-90+b,-10,-84+b,0,-80+b,10,-84+b,8,-90+b]);dot(g,'#c8402a',-10,-84+b,3);dot(g,'#c8402a',10,-84+b,3);
  rect(g,'#2a6a46',14,-66,5,14);rect(g,'#1a4a30',15,-70,3,5);rect(g,'rgba(255,255,255,.3)',15,-64,1.4,10);for(let q=0;q<3;q++)rect(g,'#14110f',-17,-62+q*3,5,1.2)})
];

/* ---- oggetti lungo il percorso ---- */
const LX=[420,1000,1700,2100,2780,3400,3950,4380,5050,5750,6400,7150,7800,8470,9350,9950,10600,11150,11800,12450,13050,13600,14250,14950,15520,16300,17000,17750,18800,19800,21450];
const props=[
 /* zona 1 · Charlottenburg e Kurfürstendamm */
 ['beTarga',190,'BREITSCHEIDPLATZ'],['beGedaechtnis',420],['beEdicola',690,'ZEITUNGEN'],['beLampione',880,0],['beKudamm',1000],['beUbahn',1210,'ZOO'],['beTarga',1290,'KURFÜRSTENDAMM'],['beBus',1340],['beCestino',1590],['beKadewe',1700],['beColonna',1900],['beLampione',1960,1],['beHeuwer',2100],['beBici',2290,2],
 /* zona 2 · Tiergarten */
 ['beTarga',2420,'HARDENBERGPLATZ'],['beZoo',2780],['beLampione',3000,0],['beCespuglio',3050,70],['beTiergarten',3400],['beScoiattolo',3230],['beCespuglio',3640,60],['beCinghiale',3720],['beSiegessaeule',3950],['beAmpel',4060],['beBandiera',4220],['beBellevue',4380],
 /* zona 3 · Reichstag e Porta di Brandeburgo */
 ['beTarga',4620,'PLATZ DER REPUBLIK'],['beReichstag',5050],['beLampione',5290,0],['beBandiere',5500],['beBrandenburg',5750],['beColonna',6030],['beTarga',6130,'PARISER PLATZ'],['beMemoriale',6400],['beCestino',6650],
 /* zona 4 · Unter den Linden */
 ['beTarga',6790,'UNTER DEN LINDEN'],['beLinden',7150],['beUniversita',7800],['beLampione',8090,0],['bePanca',8170,0],['beBebelplatz',8470],['beScoiattolo',8750],
 /* zona 5 · Museumsinsel */
 ['beTarga',8880,'MUSEUMSINSEL'],['beMuseumsinsel',9350],['beBandiera',9570],['beNeues',9950],['beLampione',10200,0],['beDom',10600],['beCestino',10820],['beForum',11150],
 /* zona 6 · Alexanderplatz e Nikolaiviertel */
 ['beTram',11520],['beFernseh',11800],['beTaxi',11960],['beColonna',12200],['beAlex',12450],['beUbahn',12770,'ALEX'],['beTarga',12840,'ALEXANDERPLATZ'],['beRathaus',13050],['beNikolai',13600],
 /* zona 7 · Potsdamer Platz e Checkpoint Charlie */
 ['beTarga',13830,'POTSDAMER PLATZ'],['bePotsdamer',14250],['beAmpel',14590],['beTarga',14690,'FRIEDRICHSTRASSE'],['beCheckpoint',14950],['beLampione',15240,1],['beMuro',15520],['beBici',15740,1],
 /* zona 8 · East Side Gallery e Oberbaumbrücke */
 ['beTarga',15880,'MÜHLENSTRASSE'],['beEsg',16300],['bePanca',16600,0],['beBacio',17000],['beLampione',17260,0],['beTarga',17330,'OBERBAUMBRÜCKE'],['beOberbaum',17750],['beCigni',18000],
 /* zona 9 · Kreuzberg di notte */
 ['beTarga',18300,'SKALITZER STRASSE'],['beLampione',18530,1],['beSpati',18800],['beBici',19000,3],['beViadotto',19800],['beUbahn',20260,'U1'],['beLampione',20400,1],['beCestino',20600],['beTarga',20700,'GÖRLITZER BAHNHOF'],['beColonna',20980],['beLampione',21240,1],['beVarco',21450]
];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'berlino',name:'Berlino · Da Charlottenburg a Kreuzberg',width:W1,sky:['#7a90c0','#f4b8b8','#ffd8b8'],gt:372,gr:['#cdc7b8','#9a968a'],chord:[220,261.6,329.6,392],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da berlino.txt) --- */
(function(){
const TOPX_BE={
"be_ayse":[
["Chi sei e cosa fai?", "Ayşe, quarantasette anni, nata e cresciuta a Berlino. Questa edicola era di mio padre: apro all’alba e vendo giornali, caffè e le solite chiacchiere. Il Kiez sono io, Mensch."],
["Cos’è la Kurfürstendamm?", "Il grande viale commerciale dell’ovest, con negozi, caffè e teatri. Per tutti è il \"Ku’damm\". Ai tempi della divisione era la vetrina di Berlino Ovest, quella che faceva invidia anche dall’altra parte del Muro."],
["Cos’è quella torre rovinata lì accanto?", "La Gedächtniskirche, la chiesa del ricordo. La prima chiesa fu inaugurata nel 1895 e un bombardamento la distrusse quasi tutta nella notte del 22 novembre 1943. La torre l’hanno lasciata così, come un monito: la guerra non si dimentica."],
["E la chiesa nuova?", "Disegnata da Egon Eiermann e consacrata il 17 dicembre 1961: pareti a nido d’ape con ventunomiladuecentonovantadue vetri blu, ispirati a quelli di Chartres. Quando c’è il sole dentro sembra un acquario di luce. Entra, Pierpaolo, ne vale la pena."],
["Perché la chiamate \"dente cavo\"?", "Perché la torre rovinata sembra proprio un dente consumato: in tedesco, \"hohler Zahn\". C’è chi chiama le due costruzioni \"rossetto e portacipria\", perché la torre nuova è stretta e la chiesa bassa e ottagonale. I berlinesi non rispettano nemmeno i monumenti, alter!"],
["Cos’è il KaDeWe?", "Il Kaufhaus des Westens, aperto nel 1907 da Adolf Jandorf: otto piani e più di sessantamila metri quadrati. Il sesto piano è la Feinschmeckeretage, il paradiso dei golosi. Fu molto danneggiato in guerra e riaprì il 3 luglio 1950."],
["Chi ha inventato la Currywurst?", "Si dice che sia stata Herta Heuwer, il 4 settembre 1949, nel suo chiosco a Berlino Ovest: salsiccia a fette con una salsa di ketchup e curry. A Charlottenburg c’è una targa che la ricorda. Altre città, come Amburgo, dicono che l’idea sia loro: ma qui ci crediamo, wa?"],
["E il döner kebab?", "Si dice che il döner nel panino sia nato proprio a Berlino, negli anni Settanta, da un immigrato turco. Per noi è come il pane: lo mangiamo a tutte le ore. Mio padre diceva che un berlinese senza döner è come un tedesco senza puntualità."],
["Cos’è la Berliner Schnauze?", "Il modo di parlare dei berlinesi: diretto, ironico, un po’ brusco, ma con il cuore buono. \"Ick\" invece di \"ich\", \"dit\" invece di \"das\", \"wa?\" alla fine delle frasi. Non è maleducazione, Pierpaolo: è il nostro modo di dire \"ti voglio bene\"."],
["Com’era Berlino durante la divisione?", "Era divisa in due dal Muro, costruito dal 13 agosto 1961. Io non c’ero, ma i miei genitori sì: ricordano un Ovest con le sue luci e un Est che si vedeva solo da lontano. Ne parliamo con rispetto: per tante famiglie fu una ferita."],
["Quando è tornata unita?", "Il Muro cadde il 9 novembre 1989 e la Germania fu riunificata il 3 ottobre 1990. Da allora Berlino è di nuovo una sola città, con una sola capitale. Ancora oggi, però, ogni quartiere ha il suo carattere: janz jut, no?"],
["Posso salutarti e proseguire la mia passeggiata?", "Vai, Pierpaolo, e cammina verso est: la città diventa sempre più grande e sempre più bella. Se hai fame, compra qualcosa lungo la strada. Tschüss, e fai il bravo!"]
],
"be_jonas":[
["Chi sei e che fai?", "Jonas, trentaquattro anni, guida in bicicletta. Porto in giro i turisti per Berlino, e il Tiergarten è la mia tappa preferita. Nei giorni di sole è un salotto verde, wa?"],
["Cos’è il Tiergarten?", "Il \"giardino degli animali\": circa duecentodieci ettari di parco in mezzo alla città, fra le zone più grandi della Germania. Dentro ci sono prati, laghetti, ponticelli e sentieri. È il polmone verde di Berlino, Alter."],
["Com’è nato?", "Nel 1527 era una riserva di caccia dei principi elettori del Brandeburgo, recintata e piena di animali. Nel 1742 Federico II tolse le recinzioni e lo aprì al pubblico. Fra il 1833 e il 1840 Peter Joseph Lenné lo ridisegnò all’inglese, con laghetti e prati."],
["Perché sembra così giovane?", "Perché dopo la guerra restò poco: gli alberi furono tagliati per scaldarsi nei duri anni del dopoguerra. Ne sopravvissero circa settecento su più di duecentomila. Fra il 1949 e il 1959 lo hanno ripiantato. Ogni albero qui ha una storia."],
["Cos’è la Siegessäule?", "La Colonna della Vittoria, alta circa sessantasette metri, inaugurata il 2 settembre 1873 e progettata da Heinrich Strack. In cima c’è la dea Vittoria, di bronzo dorato, opera di Friedrich Drake. Si vede da lontano, quando c’è il sole è una torcia."],
["Perché la chiamano \"Goldelse\"?", "\"Elsa d’oro\": il soprannome viene da un romanzo del 1866 di E. Marlitt. Nel 1938-1939 fu spostata qui, al Großer Stern, dalla piazza davanti al Reichstag. Il periodo fu buio, ma la colonna ha attraversato tutto e ha continuato a brillare."],
["Cos’è il Großer Stern?", "La grande rotonda, la \"grande stella\", dove si incontrano cinque viali. In mezzo c’è la colonna, intorno scorrono le auto, e i ciclisti come me fanno lo slalom. Non farti prendere dalla fretta, Pierpaolo: qui il verde ha la precedenza."],
["Cos’è Schloss Bellevue?", "Il palazzo chiaro lì in fondo: costruito nel 1786 per il principe Augusto Ferdinando, fratello minore di Federico II. Dal 1994 è sede del presidente federale e dal 2006 è la residenza ufficiale principale. Quando c’è il presidente, sul tetto sventola il suo stendardo."],
["Cos’è lo zoo?", "Lo Zoo di Berlino, aperto il 1° agosto 1844: il più antico zoo ancora attivo in Germania, circa trentacinque ettari ai margini del Tiergarten. Ci sono migliaia di animali di oltre mille specie, più un acquario del 1913. Va’ con calma: ci si perde più facilmente che in una biblioteca."],
["E la Porta degli Elefanti?", "L’ingresso monumentale sulla Budapester Straße: l’originale è del 1899, fu distrutto nella guerra e ricostruito secondo il progetto nel 1984. Ai lati ci sono due grandi elefanti di pietra. È la foto che fanno tutti, e ha ragione."],
["Ci sono i panda?", "Sì: la femmina Meng Meng ha avuto due volte dei gemelli, nel 2019 e nel 2024. Sono animali in prestito, arrivati dalla Cina. I miei clienti li aspettano tutto il giorno e poi si addormentano loro prima."],
["Posso salutarti e proseguire la mia passeggiata?", "Vai, Pierpaolo, e prosegui verso il Reichstag: attraversi il parco e sei già al governo. Se vedi una volpe, non rincorrerla. Tschüss, e buona strada!"]
],
"be_brigitte":[
["Chi sei e dove abiti?", "Brigitte, sessantotto anni, berlinese di Prenzlauer Berg, che allora stava a Est. Ho lavorato in un ufficio per tutta la vita. Icke ho visto cambiare questa città tre volte, wa?"],
["Cos’è il Reichstag?", "Il Parlamento tedesco: la prima pietra fu posta nel 1884 e l’edificio disegnato da Paul Wallot fu finito nel 1894. Sulla facciata c’è la scritta \"Dem Deutschen Volke\", \"Al popolo tedesco\", aggiunta nel 1916. Dal 1999 ci lavora il Bundestag."],
["Cosa successe nel 1933?", "Il 27 febbraio 1933 un incendio lo distrusse in gran parte. Fu uno dei momenti bui della nostra storia, e i sopravvissuti ne parlavano a bassa voce. Un edificio può essere una ferita, Pierpaolo, e il Reichstag lo è stato."],
["Perché ci sono scritte sui muri dentro?", "Alcune sono state lasciate dai soldati sovietici nel maggio del 1945, alla fine della guerra, e sono state in parte conservate durante i lavori degli anni Novanta. Fanno parte della storia del palazzo. Le scritte offensive, però, le hanno tolte."],
["Chi ha disegnato la cupola?", "Norman Foster, tra il 1995 e il 1999: una cupola di vetro e specchi con una rampa a spirale, dalla quale si vedono la città e l’aula sotto di sé. Per salire bisogna prenotare. Ci sono andata con mia nipote: lei era più eccitata della cupola stessa."],
["Cosa c’entra Christo?", "Nel 1995 Christo e Jeanne-Claude impacchettarono tutto il Reichstag con un telo argentato: due settimane di Berlino in festa, milioni di persone. Io ero lì con un panino in mano e non volevo più andarmene. Pazzesco, ma bellissimo."],
["Com’è la Porta di Brandeburgo?", "Costruita fra il 1788 e il 1791 da Carl Gotthard Langhans, alta circa ventisei metri e larga più di sessanta, con sei colonne. In cima c’è la Quadriga di Schadow, con la dea Vittoria: Napoleone la portò a Parigi nel 1806, ma tornò a Berlino nel 1814. Un viaggio lungo per dei cavalli di rame."],
["Com’era la Porta ai tempi del Muro?", "Era lì, vicinissima al Muro, e nessuno ci poteva passare. Nel 1987 Ronald Reagan, davanti al Muro, chiese a Gorbačëv di abbatterlo. Il 22 dicembre 1989 la gente finalmente passò sotto la Porta: io ho pianto, Pierpaolo."],
["Cosa ricordi dell’89?", "Il Muro fu costruito il 13 agosto 1961, quando io avevo tre anni, e cadde il 9 novembre 1989, quando ne avevo trentuno. Quella sera arrivò l’annuncio che i cittadini della DDR potevano andare all’Ovest, e la gente corse ai valichi. Io rimasi a guardare, e poi corsi anch’io: non sapevo ridere e piangere insieme, prima."],
["Cos’è il Memoriale lì accanto?", "Il Memoriale agli ebrei assassinati d’Europa, di Peter Eisenman, inaugurato il 10 maggio 2005: duemilasettecentoundici stele di cemento su circa diciannovemila metri quadrati. Sotto c’è un centro di documentazione. È un luogo di memoria: si cammina piano e in silenzio."],
["Cos’è l’Ampelmännchen?", "L’omino del semaforo pedonale: nato a Berlino Est il 13 ottobre 1961 su proposta di Karl Peglau, e disegnato da Anneliese Wegner. Si dice che il suo cappello sia ispirato a una foto di Honecker con un cappello di paglia. Dopo la riunificazione volevano toglierlo, ma i berlinesi lo hanno salvato: giusto così!"],
["Posso salutarti e proseguire la mia passeggiata?", "Vai, Pierpaolo, e segui il viale che comincia dietro la Porta: l’Unter den Linden. All’ombra dei tigli c’è un signore che ti aspetta, con parecchi libri e molta curiosità. Tschüss, e non dimenticare il passato!"]
],
"be_humboldt":[
["Chi sei e dove sei nato?", "Alexander von Humboldt, nato a Berlino il 14 settembre 1769. Ho passato la vita a osservare il mondo: piante, montagne, correnti, stelle. A Berlino sono tornato, e a Berlino ho finito i miei giorni."],
["Dove sei stato?", "Nel 1799 partii da La Coruña verso le Americhe e arrivai in luglio a Cumaná, nell’attuale Venezuela. Viaggiai fra foreste, fiumi e vulcani fino al 1804, quando tornai in Europa sbarcando a Bordeaux. Cinque anni di meraviglie, Pierpaolo."],
["Hai scalato il Chimborazo?", "Nel giugno del 1802 ci provai, e raggiunsi circa cinquemilaseicento metri: allora un record per un europeo. Non arrivai alla cima, ma imparai come cambiano le piante con l’altitudine. Il resto lo scrissi nei taccuini, con gran fatica."],
["Dove hai vissuto dopo il viaggio?", "A Parigi, dal 1805 al 1827, dove ho pubblicato le mie ricerche sulle Americhe. Nel 1827 sono tornato a Berlino su richiesta del re e ho tenuto lezioni aperte a tutti. Nel 1829 feci anche un viaggio fino agli Urali, in Russia."],
["Cos’è il \"Kosmos\"?", "La mia grande opera: iniziata nel 1834, il primo volume uscì nel 1845. Volevo raccontare l’intero mondo come un tutto, dalle stelle ai muschi. Ho scritto fino alla fine, perché c’è sempre qualcosa da aggiungere."],
["Che c’entra tuo fratello?", "Wilhelm, il mio fratello maggiore, linguista e uomo di Stato: fu lui a dare l’impulso all’università di Berlino, nata nel 1810. Oggi porta il nome di tutti e due, dal 1949. Un onore che condividiamo volentieri."],
["Com’è l’università oggi?", "Il palazzo qui dietro ospita la sede principale, sul viale. Fra i nomi che l’hanno attraversata ci sono Albert Einstein, Max Planck, Karl Marx e Hegel. Una compagnia di tutto rispetto, anche se a cena ci sarebbero discussioni vivaci."],
["Cos’è la Bebelplatz?", "La piazza qui accanto, aperta nel 1741-1743 per volere di Federico II come piazza dell’Opera; fu ribattezzata nel 1947. Ci stanno l’Opera di Stato, la chiesa di Sant’Edvige e la vecchia biblioteca. Una piazza elegante, che però porta un ricordo molto amaro."],
["Cosa successe alla Bebelplatz nel 1933?", "Lo so da chi me l’ha raccontato, perché io non c’ero più: la sera del 10 maggio 1933 studenti nazisti vi bruciarono circa ventimila libri di autori come Heine, Marx ed Einstein. Oggi una lastra di vetro nel selciato mostra scaffali vuoti. Brucia un libro e una civiltà si impoverisce: non è sentimentalismo, Pierpaolo."],
["Che cos’è l’Humboldt Forum?", "Il grande palazzo sull’isola: ospita musei e mostre, con il mio nome e quello di mio fratello. Sorge dove c’era il Castello di Berlino, demolito nel 1950; dopo il Palast der Republik, dal 2002 si è deciso di ricostruire tre facciate e la cupola. Mi fa uno strano effetto vedere il mio nome su un castello."],
["Come sei morto?", "Il 6 maggio 1859 a Berlino, a ottantanove anni: la mia curiosità durò quanto il corpo. Fino all’ultimo giorno scrissi e lessi. Non cerco compassione: una vita piena non ha bisogno di rimpianti."],
["Posso salutarti e proseguire la mia passeggiata?", "Vai, Pierpaolo, e continua verso est, fino all’isola dei musei: lì si raccoglie quello che l’uomo ha fatto e ha trovato. Guarda tutto, domanda tutto. Auf Wiedersehen, e porta con te un taccuino!"]
],
"be_lena":[
["Chi sei e che fai?", "Lena, ventinove anni, guida alla Museumsinsel. Ho studiato storia dell’arte e adesso racconto l’isola a chi arriva. Il lavoro è bello, ma i piedi si lamentano."],
["Cos’è la Museumsinsel?", "L’isola dei musei, nella Spree, con cinque musei: patrimonio dell’UNESCO dal 1999. È uno dei complessi museali più importanti d’Europa. Qui si può passare dall’Egitto alla pittura dell’Ottocento nel giro di cento metri."],
["Quali sono i cinque musei?", "L’Altes Museum, del 1830; il Neues Museum, completato nel 1855; l’Alte Nationalgalerie, del 1876; il Bode-Museum, completato nel 1904 con il nome di Kaiser-Friedrich-Museum; e il Pergamonmuseum, del 1930. Ognuno ha il suo stile e la sua storia."],
["E il Pergamonmuseum?", "È chiuso per lavori, perché ha bisogno di grandi riparazioni. Riaprirà a tappe, e l’Altare di Pergamo dovrebbe tornare visibile dal 2027. Se ti dicono \"sì, apre domani\", sorridi, ma controlla."],
["Chi è Nefertiti?", "Una regina egizia, e il suo busto è il pezzo forte del Neues Museum: alto circa quarantotto centimetri, di oltre tremilaquattrocento anni fa. Fu trovato il 6 dicembre 1912 a Amarna da una squadra tedesca guidata da Ludwig Borchardt, nella bottega dello scultore Thutmose. Pesa circa venti chili: non provare a prenderlo in braccio."],
["Perché si parla di restituirla?", "Perché l’Egitto la chiede indietro da quando fu mostrata al pubblico, nel 1924. La Germania sostiene che il busto sia stato portato via in modo regolare, in base a un accordo del 1912. È una discussione aperta: io, da guida, la racconto con tutti i punti di vista."],
["Cos’è il Berliner Dom?", "Il Duomo, costruito fra il 1894 e il 1905 da Julius Raschdorff in stile rinascimentale e barocco. La cupola è alta novantotto metri. Dalla galleria della cupola la vista è bellissima."],
["Quanti gradini ci sono?", "Duecentosessantasette per arrivare alla galleria della cupola. Io ci salgo ogni tanto per vedere la città, ma di solito mando i turisti e aspetto in basso. Il cuore, Pierpaolo, ringrazia."],
["Cos’è la cripta?", "Nei sotterranei ci sono novantaquattro sarcofagi di membri della casa degli Hohenzollern. Il Duomo fu danneggiato durante la guerra e riaprì nel 1993; i restauri sono proseguiti fino al 2002. Un luogo silenzioso, pieno di storia."],
["Cos’è l’Humboldt Forum?", "Il castello ricostruito qui accanto. Il Castello di Berlino fu danneggiato nella guerra e demolito nel 1950; dal 1976 al 2008 al suo posto ci fu il Palast der Republik. Oggi ci sono tre facciate barocche ricostruite e una cupola con una croce dorata, mentre il lato verso il fiume è moderno. La polemica non è mai finita."],
["Cosa mi consigli di vedere?", "Se hai poco tempo: Nefertiti nel Neues Museum, il prato davanti al Duomo e un giro sul ponte per guardare l’isola dall’acqua. Poi prenditi un caffè sul fiume. Una visita fatta con calma vale più di dieci corse."],
["Posso salutarti e proseguire la mia passeggiata?", "Vai, Pierpaolo, e continua verso la torre della televisione: la vedi da qualsiasi punto. Quando sei in alto, guarda giù e cerca l’isola, piccola come un francobollo. Tschüss, e ricorda: la cultura non scade!"]
],
"be_dieter":[
["Chi sei e che fai?", "Dieter, sessantun anni, nato a Berlino Est. Faccio il tassista da trentacinque anni e conosco ogni buca di questa città. Se non mi credi, chiedilo al mio ammortizzatore."],
["Cos’è l’Alexanderplatz?", "L’Alex, la grande piazza del centro dell’ex Berlino Est: tram, metropolitana, treni, tutto passa da qui. È il punto d’incontro dei berlinesi, sotto l’orologio universale. Un po’ brutta, un po’ bella, ma è casa."],
["Quanto è alta la torre?", "La Fernsehturm è alta 368 metri con l’antenna, la costruzione è cominciata nel 1965 e fu inaugurata il 3 ottobre 1969. Il pubblico ci poté entrare dal 7 ottobre. Dalla piattaforma, a circa duecentotré metri, vedi tutto Berlino, quando non piove."],
["Com’è fatta la sfera?", "Ha un diametro di 32 metri e dentro c’è un ristorante girevole che fa un giro completo in mezz’ora. All’inizio ne faceva uno all’ora: da quando l’hanno ristrutturata, nel 1997, va al doppio. Non è che ti viene il mal di mare, Pierpaolo?"],
["Cos’è la croce luminosa sulla sfera?", "Quando il sole la colpisce, sulla sfera si forma una croce luminosa. I berlinesi, che non risparmiano nessuno, l’hanno chiamata \"la vendetta del Papa\": si dice per via dello Stato senza Dio che l’aveva costruita. Un’ironia nata per caso, ma ha fatto storia."],
["Cos’è il Rotes Rathaus?", "Il Municipio Rosso, di mattoni rossi: ci sta il sindaco di Berlino. Davanti c’è la fontana di Nettuno, e accanto la Marienkirche, una chiesa medievale. Se ti piace il rosso mattone, qui ne hai fino a stufarti."],
["Cos’è il Nikolaiviertel?", "Il quartiere intorno alla chiesa di San Nicola, la zona più vecchia di Berlino: vicoli stretti, osterie e case ricostruite dopo i danni della guerra. Vicino al cemento dell’Alex sembra un altro mondo. Se hai fame, ci trovi anche una buona birra."],
["Cos’era il Palast der Republik?", "Un grande palazzo della DDR, costruito nel 1976 al posto del vecchio castello e demolito nel 2008. Ci sono stati anni di polemiche su cosa farne. Per qualcuno era casa, per altri un’offesa: i ricordi qui sono due, Pierpaolo."],
["Cos’è Potsdamer Platz?", "Negli anni Venti era un incrocio animatissimo: il 20 ottobre 1924 vi fu messo in funzione il primo semaforo della Germania, in una torre. Dopo il 1961 il Muro tagliò la piazza e restò quasi vuota. Il nuovo quartiere è stato completato nel 1998, e il Sony Center è del 2000."],
["Cos’è il Checkpoint Charlie?", "Il valico di Friedrichstraße e Zimmerstraße per stranieri e alleati. Nell’ottobre 1961, dal 22 al 28, carri armati sovietici e americani si fronteggiarono qui; la cabina originale fu tolta il 22 giugno 1990. Quella di oggi è una copia, e i finti soldati che si facevano pagare le foto sono stati vietati nel 2019."],
["Com’è guidare a Berlino?", "Un’avventura: i ciclisti sbucano ovunque, i tram non perdonano e i pedoni aspettano il verde come in chiesa. Qui si parla senza peli sulla lingua, la famosa Schnauze. Ma alla fine, si arriva sempre."],
["Posso salutarti e proseguire la mia passeggiata?", "Vai, Pierpaolo, e fai attenzione ai ciclisti. Se vuoi vedere il tramonto sul Muro dipinto, vai a est verso la Spree: lo trovi facile. Tschüss, e stai al largo dalle rotaie!"]
],
"be_mia":[
["Chi sei e che fai?", "Mia, ventisei anni, studentessa d’arte e guida volontaria. Passo i pomeriggi alla East Side Gallery a raccontare i dipinti e a litigare con i turisti che si siedono sopra. Un lavoro così, Pierpaolo, non si trova in nessun annuncio."],
["Cos’è la East Side Gallery?", "Un tratto di Muro lungo 1.316 metri, sulla riva della Spree, a Friedrichshain. È il tratto più lungo di Muro ancora in piedi. Qui il Muro non separa più: racconta."],
["Come è nata?", "Subito dopo la caduta del Muro, il 9 novembre 1989, gli artisti cominciarono a dipingerlo. La galleria fu inaugurata ufficialmente il 28 settembre 1990. Fu il primo grande atto di libertà di quegli anni, e si sentiva ovunque."],
["Quanti artisti hanno dipinto?", "Centodiciotto artisti provenienti da ventuno paesi, per oltre cento dipinti. Ognuno ha scelto cosa dire: pace, speranza, rabbia, ironia. Sembra un unico lungo fumetto, ma ogni pannello ha la sua voce."],
["Chi sono i due che si baciano?", "È il \"Bacio fraterno\" di Dmitri Vrubel: Brežnev e Honecker, due leader comunisti, che si baciano alla maniera dei compagni. Prende in giro un gesto politico dell’epoca. È uno dei murali più fotografati del mondo."],
["E la Trabant?", "La piccola auto della DDR che sfonda il Muro, dipinta da Birgit Kinder. Per molti est-tedeschi la Trabant era il simbolo del quotidiano: lenta, rumorosa, amatissima. Quel dipinto dice: \"ce l’abbiamo fatta, anche con la Trabi\"."],
["Come si è conservata?", "Con tanta fatica: nel 1996 Kani Alavi, uno degli artisti, ha fondato un’associazione per proteggerla. Nel 2009 è stata restaurata tutta, e dal 2018 appartiene alla fondazione Stiftung Berliner Mauer. La vernice, Pierpaolo, non perdona il tempo: va curata."],
["Cos’è l’Oberbaumbrücke?", "Il ponte di mattoni rossi sulla Spree, fra Friedrichshain e Kreuzberg, costruito nel 1896 da Otto Stahn in stile gotico del nord. Sopra passa la metropolitana, dal 1902. Le due torri non servono a niente: sono solo bellezza."],
["Che c’entra il Muro con il ponte?", "Dopo il 1961 il ponte divenne un valico pedonale, aperto dal 1963 solo ai residenti di Berlino Ovest. Nella guerra la parte centrale era stata distrutta e fu ricostruita in acciaio: il ponte riaprì nel 1994. Ci passo ogni giorno, e ogni giorno penso a chi non poteva."],
["Quanto era lungo il Muro?", "Circa centocinquantacinque chilometri attorno a Berlino Ovest, di cui circa quarantatré dividevano la città. C’erano nove valichi fra Est e Ovest. Dietro quei numeri ci sono persone: ricordalo, quando fai le foto."],
["Posso fare una foto e firmare il muro?", "Foto sì, firma no: è un monumento protetto e le scritte rovinano i dipinti. Se vuoi lasciare un segno, lascialo nella memoria: è il modo più gentile. Il Muro l’abbiamo abbattuto, ma i suoi dipinti vanno rispettati."],
["Posso salutarti e proseguire la mia passeggiata?", "Vai, Pierpaolo, e attraversa l’Oberbaumbrücke con il sole che cala: la città diventa oro e rosso. Dall’altra parte c’è Kreuzberg, la parte più viva di Berlino. Tschüss, e portati dietro un po’ di colore!"]
],
"be_tobi":[
["Chi sei e che fai?", "Tobi, trentun anni, nato a Lipsia e arrivato a Berlino dieci anni fa. Faccio il barista in un locale qui vicino e la notte conosco tutti. Lo dico io: nessuno fa i caffè come me, Alter."],
["Cos’è Kreuzberg?", "Un quartiere di Berlino, un Kiez enorme e diverso: persone da tutto il mondo, locali, murales, mercati. Una volta era al margine, vicino al Muro; oggi è una delle zone più vive. Qui nessuno ti guarda male: ognuno è il vicino di qualcuno."],
["Cos’è uno Späti?", "Il minimarket che apre fino a tardi: ci compri da bere, qualcosa da mangiare, e ti siedi fuori sulla panchina a chiacchierare. Il nome viene da \"spät\", tardi. È la nostra piazza, Pierpaolo: la nostra osteria all’aperto."],
["Cos’è il Pfand?", "Il deposito sulle bottiglie e sulle lattine: quando le restituisci, ti ridanno i soldi. Qui c’è gente che raccoglie le bottiglie vuote per arrotondare, e lasciarle accanto al bidone è un gesto di rispetto. Una cosa semplice che funziona, wa?"],
["Si dice che Berlino sia la capitale della musica elettronica...", "È la verità, o quasi: nel marzo 2024 la cultura techno di Berlino è stata riconosciuta come patrimonio culturale immateriale, con il parere del comitato di esperti della commissione tedesca per l’UNESCO. Non è solo musica: è un modo di stare insieme. Chi la frequenta lo sa."],
["Com’è nata questa scena?", "Si dice che dopo la caduta del Muro, nei primi anni Novanta, nella zona dell’ex Est ci fossero tanti edifici vuoti, e che giovani musicisti li abbiano riempiti di suoni e di luci. Le cose cominciarono così, fra case abbandonate e curiosità. Poi la voce si sparse: Berlino, la città dove si può essere liberi."],
["Come si entra nei club?", "Con calma, con la fila e con rispetto: ogni locale ha le sue regole, e spesso non si usa il telefono per fotografare dentro. Chi si comporta bene entra, chi fa il furbo no. È una regola non scritta: la pista è di tutti."],
["Cos’è il treno giallo qui sopra?", "La U1, la linea della metropolitana che qui corre in alto su un viadotto e poi attraversa la Spree sull’Oberbaumbrücke. Si sente passare ogni pochi minuti. Dopo un po’ non lo senti più: è come il respiro del quartiere."],
["Com’è vivere a Berlino?", "Mi piace: ognuno è libero di essere com’è, e nessuno ti giudica per il cappello. C’è confusione, c’è il freddo, la burocrazia, ma c’è anche una forte voglia di fare. È una città che non si finisce mai di scoprire."],
["Gli italiani che fanno a Berlino?", "Ce ne sono tanti, Pierpaolo: cuochi, musicisti, studenti, artisti. Ho amici di Napoli, di Bologna e di Palermo, e se vuoi una buona pizza qui, sai a chi chiedere. Berlino accoglie tutti, purché non si spacchi la testa sul primo spigolo."],
["Cosa mi consigli per stasera?", "Cammina, ascolta, entra dove senti la musica e non avere fretta. Se hai sete, vai allo Späti; se hai fame, c’è qualcosa da mangiare in ogni angolo. E se vuoi sentire la città respirare, fermati sotto il viadotto quando passa un treno."],
["Posso salutarti e proseguire la mia passeggiata?", "Vai, Pierpaolo, e passa sotto l’arco di mattoni in fondo alla strada: da lì la musica si sente meglio. Io resto qui: la notte è lunga e il bancone aspetta. Tschüss, e che sia una buona serata!"]
]
};
Object.assign(TOPX,TOPX_BE);
})();
