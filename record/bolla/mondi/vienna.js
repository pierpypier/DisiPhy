/* ---------- VIENNA · Dal Naschmarkt alla notte di Grinzing (Naschmarkt, Karlsplatz, Stephansplatz e Graben, Hofburg e Heldenplatz, il Ring, Belvedere, Prater, Schönbrunn, Grinzing) ---------- */
/* Un'intera giornata da sinistra a destra: alba al Naschmarkt, mattina a Karlsplatz fra la Karlskirche, la Secessione e il Musikverein, tarda mattina
   fra il Duomo di Santo Stefano e il Graben, mezzogiorno nell'Hofburg e a Heldenplatz fra i cavalli bianchi della Scuola Spagnola, primo pomeriggio sul Ring
   fra Opera, Parlamento e caffè storici, pomeriggio al Belvedere, pomeriggio inoltrato al Prater sotto la grande ruota rossa, tardo pomeriggio a Schönbrunn,
   tramonto e sera a Grinzing fra i vigneti e gli Heurigen. Il varco finale è un grande arco di rami di pino (il «Buschen») e di lanterne all’ingresso di un Heuriger.
   Il tempo si piega: Maria Teresa convive con la gente di oggi, e la città è quella di oggi.
   Testi, tappe e dialoghi vengono da vienna.txt (definitivi, usati senza riscriverli). Gli oggetti stanno in elementi.js (nomi che iniziano per "wi").
   Il tono per i temi dolorosi (l’assedio del 1683, le epidemie di peste, i bombardamenti del 1945, l’occupazione del dopoguerra) è sempre sobrio e rispettoso. */
(function(){
const GT=372,W1=28701;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln}=PR._rm;
const {cas,pino,cedro,cipr,plat,pers}=PR._md;
const {nf,ippo,til,cup,tram,stud}=PR._wi;
const md=(i,n)=>((i%n)+n)%n;
const LIT='rgb(255,226,150)';
const Z=[0,2806,4966,8193,11183,15152,18245,21693,25458];   /* inizio di ognuna delle 9 zone */
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* ---- cielo: alba limpida col velo rosa, mattina frizzante, mezzogiorno bianco, pomeriggio dorato, sole basso sugli ippocastani, arancione su Schönbrunn, tramonto rosa e viola, sera e notte ---- */
const SKY=[[0,['#7ea6e0','#e6c8d4','#ffd0b8']],[1400,['#4a9cf0','#a8d4f4','#f0f0e8']],[Z[1],['#2a84ec','#74b8f4','#d8ecf8']],[Z[2],['#2a7ee0','#78b8f0','#e4f0f4']],[Z[3],['#4a92e4','#a8d2f2','#f8f8f4']],[Z[4],['#4a8ae0','#b4d0ec','#fcead0']],[Z[5],['#5a92d8','#c0d4e8','#fcdcb4']],[Z[6],['#6a92d4','#e8c8a8','#ffd498']],[Z[7],['#7a86cc','#f0b088','#ffb870']],[Z[8]-1100,['#6a6ac0','#f09070','#ff9c5c']],[Z[8],['#5a4a9c','#e8707c','#ffa468']],[Z[8]+1100,['#3a3a8a','#b85a8c','#f88c6a']],[Z[8]+2000,['#1a2670','#3a4a98','#8a5a8a']],[Z[8]+2800,['#0a1650','#1a2a70','#3a3a80']],[W1+400,['#060e40','#101c58','#242a68']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,40*s,5*s);el(g,c,x-22*s,y+2*s,26*s,4*s);el(g,c,x+26*s,y+2*s,30*s,4*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Vienna, dall’alba alla notte. Parti dal Naschmarkt, quando i banchi si aprono fra cetriolini, olive e spezie; poi Karlsplatz ti porta sotto una cupola verde e una palla d’oro. Nella tarda mattina il Duomo di Santo Stefano ti guida fra tegole colorate e carrozze con due cavalli; a mezzogiorno, nell’Hofburg, i cavalli bianchi si preparano; nel primo pomeriggio ti siedi in un caffè storico del Ring, con un bicchiere d’acqua accanto alla tazza. Poi i giardini del Belvedere, la grande ruota rossa del Prater, il castello giallo di Schönbrunn; infine, a Grinzing, un ramo di pino appeso sopra una porta ti dice che il vino nuovo è pronto. Il tempo qui si piega: gli abitanti di ogni epoca ti vengono incontro, e la città è quella di oggi.";
const LKTXT=["Il Naschmarkt, il mercato più famoso di Vienna, lungo la Wienzeile, nel sesto distretto: circa centoventi fra banchi e locali, a due passi da Karlsplatz. Un mercato di frutta, verdura e latte esiste qui da secoli; il fiume Wien scorre coperto sotto i banchi, e quando fu regolato, all’inizio del Novecento, il mercato prese l’aspetto di oggi. Si apre al mattino presto dal lunedì al sabato; la domenica è chiuso.",
 "Fra i banchi ci sono olive in grandi bacinelle, formaggi, spezie, pane, cetriolini e crauti sott’aceto, rafano fresco (il “Kren”) e, in autunno, zucche e funghi. Intorno ai banchi si mangiano anche cucine di altri paesi, dal Mediterraneo al Medio Oriente al Giappone. Il venditore ti fa assaggiare quello che vuoi, prima che tu compri.",
 "Il sabato il Naschmarkt si allunga verso ovest con il mercatino delle pulci (Flohmarkt): vecchi vetri, mappe, dischi, libri, macchine fotografiche e oggetti di un’altra epoca. I collezionisti arrivano all’alba, per essere i primi a vedere quello che c’è.",
 "Ai numeri 40 e 38 della Linke Wienzeile, due palazzi dell’architetto Otto Wagner, finiti intorno al 1899: la Majolikahaus ha la facciata coperta di piastrelle di maiolica con fiori, la casa accanto ha decorazioni dorate e medaglioni. Sono fra i più bei esempi del Liberty viennese (Jugendstil), a pochi passi dai banchi.",
 "La Karlskirche, la chiesa di San Carlo, a Karlsplatz: costruita fra il 1716 e il 1737 per mantenere un voto fatto nel 1713 dall’imperatore Carlo VI durante un’epidemia di peste, e dedicata a San Carlo Borromeo, protettore degli appestati. Progettata da Johann Bernhard Fischer von Erlach e finita dal figlio Joseph Emanuel, ha una cupola verde alta circa 72 metri e due colonne come quelle di Traiano a Roma, con rilievi a spirale sulla vita del santo.",
 "Il palazzo della Secessione, costruito nel 1898 da Joseph Maria Olbrich per un gruppo di artisti che volevano rompere con l’arte accademica. Sopra l’ingresso c’è una grande sfera di foglie d’alloro dorate, che i viennesi chiamano scherzosamente “Krauthappl” (testa di cavolo), e una scritta: “Der Zeit ihre Kunst. Der Kunst ihre Freiheit” («A ogni tempo la sua arte, all’arte la sua libertà»). All’interno si conserva il grande fregio dipinto da Gustav Klimt per Beethoven, del 1902.",
 "Accanto a Karlsplatz restano due padiglioni Liberty di Otto Wagner, costruiti alla fine dell’Ottocento per la vecchia ferrovia urbana (Stadtbahn). Con le loro linee eleganti e i decori dorati, oggi sono un caffè e un luogo per mostre.",
 "Il Musikverein, inaugurato il 6 gennaio 1870, è la casa dei Wiener Philharmoniker, famoso per l’acustica della sua Sala d’Oro (Goldener Saal). Il Concerto di Capodanno si tiene qui ogni 1° gennaio e viene trasmesso in tutto il mondo: finisce con due bis tradizionali, “Sul bel Danubio blu” e la Marcia di Radetzky, con il pubblico che batte le mani a tempo.",
 "Il Duomo di Santo Stefano (Stephansdom), il cuore di Vienna, in piazza Stephansplatz. Le parti più antiche, la Porta dei Giganti e le Torri dei Pagani, sono romaniche e risalgono al XII secolo; il resto è in stile gotico. La torre sud, iniziata nel 1359, è alta circa 136 metri, e a lungo è stata la costruzione più alta della città.",
 "I viennesi chiamano la torre sud “Steffl”, “piccolo Stefano”. Per salire servono 343 gradini fino a una balconata a 72 metri, dove un tempo i guardiani cercavano gli incendi. Nella torre nord, più bassa, c’è la Pummerin, una grande campana di circa 20 tonnellate, la più grande dell’Austria, che suona solo in occasioni speciali, come il Capodanno.",
 "Il tetto del Duomo è lungo circa 111 metri ed è coperto da circa 230.000 tegole smaltate, che formano disegni a rombi e a zig-zag. Sul lato sud, sopra il coro, le tegole disegnano l’aquila bicipite degli Asburgo e gli stemmi di Vienna e dell’Austria; il tetto attuale è stato ricostruito dopo i gravi danni del 1945. È tanto ripido che, dicono, la neve non resta.",
 "Il Graben, una via pedonale elegante a due passi dal Duomo, con al centro la Pestsäule, la colonna della peste, detta anche colonna della Trinità. Dopo la grave epidemia del 1679, l’imperatore Leopoldo I promise di erigere una colonna se il flagello fosse finito; la versione di marmo e oro fu inaugurata nel 1693. In cima c’è la Trinità, in basso l’imperatore in preghiera.",
 "I Fiaker sono le carrozze a due cavalli di Vienna, e “Fiaker” è anche il nome del cocchiere. La parola viene da Parigi, dove le carrozze a nolo aspettavano davanti a un albergo in Rue Saint-Fiacre; a Vienna la prima licenza fu data nel 1693 dall’imperatore Leopoldo I. Oggi si prendono per un giro fra Stephansplatz, il Graben e l’Hofburg.",
 "L’Hofburg, il palazzo imperiale: per più di sette secoli la sede degli Asburgo; le parti più antiche risalgono al Duecento. Oggi vi hanno sede musei, la Biblioteca Nazionale, sale per congressi e gli uffici del Presidente della Repubblica. Davanti alla Neue Burg si apre Heldenplatz, la piazza degli Eroi, con due statue equestri, il principe Eugenio di Savoia e l’arciduca Carlo; è anche un luogo legato a momenti difficili del Novecento, e si attraversa con sobrietà.",
 "La Scuola Spagnola di Equitazione (Spanische Hofreitschule), la più antica scuola di equitazione classica ancora attiva, da più di 450 anni cura l’“alta scuola” con i cavalli lipizzani. Si esibisce nella Winter Riding School, un salone barocco bianco e luminoso finito nel 1735, sotto il ritratto dell’imperatore Carlo VI. Dal 2015 la sua arte è nell’elenco UNESCO del patrimonio culturale immateriale dell’umanità.",
 "I lipizzani nascono scuri, di solito neri o baio, e diventano grigio-bianchi fra i sei e i dieci anni. Sono allevati a Piber, in Stiria, e arrivano alla scuola verso i quattro anni. Si dice che la scuola tenga sempre almeno un cavallo scuro.",
 "Nel Michaelertrakt, davanti all’ingresso della Scuola Spagnola, il Museo Sisi e gli Appartamenti Imperiali (Kaiserappartements): il museo è dedicato all’imperatrice Elisabetta, detta Sissi, e mostra oggetti personali; gli appartamenti sono le stanze dove viveva l’imperatore Francesco Giuseppe.",
 "Ogni domenica (tranne durante le vacanze estive) i Wiener Sängerknaben, i Piccoli Cantori di Vienna, cantano la messa nella Cappella Imperiale dell’Hofburg insieme ai cantori e all’orchestra della Hofmusikkapelle. La tradizione risale al 1498, quando l’imperatore Massimiliano I portò il coro a Vienna. I ragazzi indossano la divisa alla marinara.",
 "Il Ring, il grande viale circolare di 5,3 chilometri e 57 metri di larghezza che circonda il centro storico, al posto delle vecchie mura. Il 20 dicembre 1857 l’imperatore Francesco Giuseppe I ordinò di demolire le mura con la frase «È mia volontà…»; il viale fu inaugurato il 1° maggio 1865. Ogni grande edificio ha uno stile storico scelto per la sua funzione: neorinascimentale l’Opera, neogreco il Parlamento, neogotico il Municipio. Lo percorrono i tram 1 e 2.",
 "L’Opera di Stato (Staatsoper), aperta il 25 maggio 1869 con il Don Giovanni di Mozart, fu il primo grande edificio del Ring. Nel marzo 1945 fu colpita dai bombardamenti e il 5 novembre 1955 riaprì con il Fidelio di Beethoven. Ogni anno, a febbraio, diventa una grande sala da ballo per il Ballo dell’Opera (Opernball); ci sono anche circa 560 posti in piedi.",
 "Il Parlamento, in stile neogreco, finito nel 1883 su progetto di Theophil Hansen, con davanti la fontana di Pallas Atena, completata nel 1902. Poco più in là il Municipio (Rathaus), neogotico, costruito fra il 1872 e il 1883 da Friedrich von Schmidt; la piazza davanti ospita d’inverno un mercatino di Natale e d’estate un festival del cinema.",
 "Il caffè viennese (Kaffeehaus) è un luogo dove si resta per ore con una sola tazza, un giornale e un bicchiere d’acqua portato su un vassoio d’argento. Tavolini di marmo, sedie di legno curvato, velluto rosso e camerieri in marsina, i “Herr Ober”. Dal 2011 la cultura dei caffè viennesi è nell’inventario austriaco del patrimonio culturale immateriale dell’UNESCO. Si dice che il primo caffè sia nato dopo l’assedio del 1683, con i sacchi di caffè lasciati dagli Ottomani.",
 "Con il caffè si mangiano dolci: strudel di mele, Kaiserschmarrn (una frittata dolce a pezzi), Palatschinken e la Sachertorte, una torta al cioccolato con marmellata di albicocche e una glassa lucida. Secondo la storia più raccontata, la inventò nel 1832 Franz Sacher, apprendista sedicenne del principe Metternich; per anni l’Hotel Sacher e la pasticceria Demel si contesero l’“originale”, fino all’accordo del 1963.",
 "Il Würstelstand è il chiosco delle salsicce, aperto fino a tardi: si mangiano Frankfurter, Burenwurst e la Käsekrainer, una salsiccia con pezzetti di formaggio, con senape e pane. Il suo soprannome buffo è “Eitrige”, per il formaggio che schizza; si ordina “Eine Eitrige mit an Buckl”, cioè con il cantuccio di pane. Dal 2024 questa cultura è nell’inventario austriaco del patrimonio immateriale dell’UNESCO.",
 "Sulla Schwarzenbergplatz, la fontana Hochstrahlbrunnen, inaugurata il 24 ottobre 1873 dall’imperatore Francesco Giuseppe per festeggiare l’arrivo a Vienna dell’acqua di montagna. La Prima Condotta dell’Acqua Alpina porta ancora oggi acqua di sorgente dal Rax e dallo Schneeberg, a circa un centinaio di chilometri; per questo a Vienna l’acqua del rubinetto è ottima.",
 "Il Belvedere, “bella vista” in italiano: due palazzi barocchi con un giardino in mezzo, costruiti da Johann Lukas von Hildebrandt per il principe Eugenio di Savoia, il Belvedere Inferiore fra il 1714 e il 1716, quello Superiore finito nel 1723. Nel 1752 Maria Teresa acquistò il complesso, che divenne uno dei primi musei pubblici d’Europa. Oggi il Belvedere Superiore conserva l’arte austriaca dal Medioevo a oggi, compresa la più grande raccolta al mondo di opere di Gustav Klimt, fra cui «Il bacio».",
 "Il giardino fra i due palazzi è un giardino alla francese su tre livelli, collegati da scalinate e cascate. Ai livelli alti ci sono statue di sfingi alate, simbolo di forza e intelligenza; più in basso statue di muse e, lungo le scale, dei dodici mesi dell’anno. In fondo si vede la città.",
 "Nel Salone di Marmo del Belvedere Superiore, il 15 maggio 1955, fu firmato il Trattato di Stato, che mise fine a dieci anni di occupazione alleata e restituì all’Austria la piena sovranità. Dal balcone, il ministro degli Esteri Leopold Figl mostrò il documento alla folla dicendo: «Österreich ist frei!» («L’Austria è libera!»). Un luogo da guardare con rispetto.",
 "Nel terzo distretto, la Hundertwasserhaus, una casa popolare costruita fra il 1983 e il 1985 su idea dell’artista Friedensreich Hundertwasser, con l’architetto Josef Krawina. Niente linee dritte: pavimenti ondulati, alberi sui balconi e sui tetti, una facciata di colori e mosaici. È un edificio abitato: si ammira da fuori.",
 "Il Prater, un grande parco di circa 6 chilometri quadrati nel secondo distretto, fu a lungo una riserva di caccia degli imperatori. Il 7 aprile 1766 l’imperatore Giuseppe II, figlio di Maria Teresa, lo aprì a tutti i cittadini. Il viale principale, la Hauptallee, è lungo 4,4 chilometri e bordato da ippocastani; ogni aprile ci partono e arrivano i corridori della maratona di Vienna.",
 "Il Wurstelprater è la parte del parco con le giostre, con più di 250 attrazioni: montagne russe, autoscontri, trenino fantasma, tiro a segno. Il nome viene da “Hanswurst”, il buffo personaggio dei teatrini popolari. Qui c’è anche la Liliputbahn, una piccola ferrovia in miniatura che percorre il parco.",
 "Il Riesenrad, la Grande Ruota, alto 64,75 metri, costruito nel 1897 per il giubileo d’oro dell’imperatore Francesco Giuseppe dall’ingegnere inglese Walter Basset. Aveva 30 cabine; dopo i danni della guerra ne furono rimesse 15. Un giro dura circa 12-15 minuti. È diventato famoso nel mondo con il film «Il terzo uomo» (1949), con Orson Welles in una cabina.",
 "Lo Schweizerhaus, una trattoria con un grande giardino di alberi, è famosa per la “Stelze”, lo stinco di maiale arrosto servito con senape e rafano, e per la birra alla spina (per adulti). Ai chioschi del parco si trova il lángos, una frittella ungherese con aglio e formaggio.",
 "Schloss Schönbrunn, il castello giallo, la residenza estiva degli Asburgo: 1.441 stanze, di cui circa 40 visitabili. Maria Teresa lo fece ampliare dal 1743, trasformando un vecchio padiglione di caccia; vi nacque e morì l’imperatore Francesco Giuseppe. Dal 1996 è Patrimonio dell’Umanità UNESCO.",
 "Nella Sala degli Specchi, nel 1762, un bambino di sei anni, Wolfgang Amadeus Mozart, suonò per Maria Teresa; si racconta che poi saltò in braccio all’imperatrice. Nella Grande Galleria, lunga 43 metri, nel 1961 si incontrarono il presidente Kennedy e il leader sovietico Chruščëv.",
 "Il grande giardino dietro il castello sale verso la Gloriette, un edificio ad archi costruito nel 1775 sulla cima della collina, che oggi ospita un caffè con una bella vista. Sul Grande Parterre ci sono 32 statue; poi la fontana di Nettuno, del 1780, un finto rudere romano costruito nel 1778 e un labirinto di siepi. Il giardino è aperto al pubblico dal 1779.",
 "Il Tiergarten Schönbrunn, il più antico zoo del mondo ancora esistente, aperto nel 1752 dall’imperatore Francesco I Stefano come serraglio imperiale. Si trova dentro il parco del castello, ed è sempre pieno di famiglie.",
 "Il Palmenhaus, una grande serra di ferro e vetro costruita intorno al 1882, con piante tropicali di vari climi. Entrando, l’aria è calda e umida, e sembra di essere lontano da Vienna.",
 "Grinzing, un antico villaggio di vignaioli nel diciannovesimo distretto, oggi dentro Vienna e raggiungibile con il tram 38. Le stradine sono acciottolate, le case basse hanno cortili con portoni ad arco. Nel 1817 Beethoven visse per un periodo in una casa su Pfarrplatz, oggi un Heuriger.",
 "“Heuriger” è la locanda del vignaiolo, ma anche il vino nuovo dell’anno. Il diritto di servire il proprio vino risale a un decreto di Giuseppe II del 1784. Si riconosce dal “Buschen”, un fascio di rami di pino appeso sopra la porta, con un cartello: “Ausg’steckt is”, cioè «è aperto». Si mangia al buffet e, in certe sere, si ascolta la Schrammelmusik, con fisarmonica e violino.",
 "Vienna ha poco meno di 600 ettari di vigne dentro i confini della città, in dieci dei suoi ventitré distretti. Il vino più tipico è il “Wiener Gemischter Satz”, un bianco ottenuto da uve di almeno tre varietà, piantate, raccolte e pressate insieme nella stessa vigna; dal 2013 ha la denominazione DAC. Con il vino si beve anche lo “Gspritzter”, con acqua frizzante, e per chi non beve il succo d’uva.",
 "Sopra Grinzing, la collina del Kahlenberg, un belvedere sui vigneti e sulla città. In questi boschi, il 12 settembre 1683, si svolse la battaglia che pose fine all’assedio ottomano di Vienna; le truppe alleate erano guidate dal re di Polonia Giovanni III Sobieski. Oggi è un luogo di passeggiate, da guardare con sobrietà.",
 "Sotto l’arco di rami di pino, la luce passa lo stesso."];
const NAME={"wi_gerti":"Frau Gerti, la venditrice di verdura","wi_franz":"Herr Franz, il Fiaker","wi_katharina":"Katharina, la cavallerizza","wi_karl":"Herr Karl, il cameriere del caffè","wi_sophie":"Sophie, la guida del Belvedere","wi_pepi":"Pepi, il gestore di una giostra","wi_mariateresa":"Maria Teresa d’Asburgo","wi_annemarie":"Annemarie, la viticoltrice"};
const GREET={"wi_gerti":"Grüß Gott, Pierpaolo! Kommen S’ nur, schauen S’ nur: guardare non costa niente. Io sono Frau Gerti, e il mio banco è qui da prima che tu nascessi, Schatzerl. Was darf’s sein?",
 "wi_franz":"Habe die Ehre, Herr Pierpaolo! Servas, sali pure, che la carrozza non morde e nemmeno i cavalli. Io sono Franz, il Fiaker, e questi due bei ragazzi sono Hansi e Fritzi.",
 "wi_katharina":"Grüß Gott, Pierpaolo! Fermati un attimo e guarda: i cavalli stanno per entrare. Io sono Katharina, cavalco i lipizzani da molti anni, e qui è il posto più bello per farlo.",
 "wi_karl":"Grüß Gott, der Herr Pierpaolo! Prego, si accomodi dove vuole: qui nessuno ha fretta. Io sono Karl, Herr Ober di questo caffè da trentacinque anni, e sono a sua disposizione.",
 "wi_sophie":"Servus, Pierpaolo! Che bello vederti, proprio all’ora in cui la luce è più bella sul giardino. Io sono Sophie, lavoro al Belvedere, e questa è la scalinata da cui si capisce meglio il posto.",
 "wi_pepi":"Servas, Pierpaolo! Kumm, kumm, bleib net so steh’n: la giostra gira, il tempo anche. Io sono Pepi, e il Prater è casa mia da quando ero in fasce.",
 "wi_mariateresa":"Gott zum Gruß, Pierpaolo. Dicono che qui il tempo si pieghi: lo trovo comodo, perché mi permette di rivedere la mia casa. Io sono Maria Teresa, e questo giallo l’ho voluto io.",
 "wi_annemarie":"Griaß di, Pierpaolo! Vieni, vieni, siediti: la sera si è appena scaldata. Io sono Annemarie, e questa è la mia vigna da quando ero ragazza. Prost!"};
/* ---- facciate di strada, zona per zona ---- */
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3);
  if(st==1){/* Naschmarkt: palazzi dell'Ottocento a cinque piani con balconi, tettoie del mercato, insegne Liberty */
   if(r>.8){rect(g,'#6a727c',x+10,gt-70,w-40,6);for(let q=0;q<5;q++)rect(g,['#2f7a46','#c8402a','#2a5a9a'][q%3],x+12+q*(w-44)/5,gt-64,(w-44)/5,22);rect(g,'#4a3a2a',x+14,gt-42,4,42);rect(g,'#4a3a2a',x+w-34,gt-42,4,42);return}
   cas(g,x+6,w-30,h+60,i,k,{wall:['#e8dcc0','#d8b890','#ecd0c0','#c8d0b8'][md(i,4)],bal:1,sh:'#6a7a5a',roof:'s',gt:md(i,2)?'shop':'tav',sc:['#2a4a3a','#6a2a22','#2a3a5a'][md(i,3)],cor:'#c8b890'});return}
  if(st==2){/* Karlsplatz: alberi con le prime foglie gialle, palazzi chiari, qualche padiglione */
   if(r>.55){[plat,ippo,til][md(i,3)](g,x+w*.5,gt,md(i,3)==1?1.1:1.2+hr(i)*.3,TT);return}
   cas(g,x+6,w-30,h+30,i,k,{wall:['#efe9da','#e4dcc8','#e8dcc0'][md(i,3)],bal:1,sh:'#8a8478',roof:md(i,2)?'s':'f',cor:'#c8c0a8'});return}
  if(st==3){/* zona pedonale: palazzi chiari con insegne di ferro battuto e vetrine, castagni in autunno */
   if(r>.86){plat(g,x+w*.5,gt,1,TT);return}
   cas(g,x+4,w-26,h+50,i,k,{wall:['#ece4cc','#e0d8c0','#d8d0b8','#efe9da'][md(i,4)],bal:1,sh:'#7a8478',roof:'s',gt:'shop',sc:['#2a2e38','#4a2a22','#2a3a3a'][md(i,3)],cor:'#c0b898'});
   if(md(i,3)==0){rect(g,IRN,x+w-48,gt-96,2,26);rect(g,'#c8a040',x+w-58,gt-72,22,12);rect(g,'#8a6a1a',x+w-58,gt-72,22,2)}return}
  if(st==4){/* Hofburg: palazzi color crema con arcate, ghiaia, alberi del Burggarten */
   if(r>.78){ippo(g,x+w*.5,gt,1.1,TT);return}
   cas(g,x+6,w-30,h+10,i,k,{wall:['#e6dcc4','#efe6cc','#dccfa8'][md(i,3)],bal:md(i,2),sh:'#6a7a66',roof:'s',gt:md(i,2)?'arc':'',cor:'#c8bc9c'});return}
  if(st==5){/* Ring: grandi palazzi chiari e platani lungo il viale */
   if(r>.45){[plat,ippo][md(i,2)](g,x+w*.5,gt,1.2+hr(i)*.3,TT);return}
   cas(g,x+4,w-24,h+60,i,k,{wall:['#efeadc','#e8e0cc','#f2ecdc','#e6dcc0'][md(i,4)],bal:1,sh:'#8a8478',roof:'f',cor:'#d0c8b0'});
   if(md(i,2)==0)cup(g,'#5fa08a',x+w*.5-8,gt-h-69,40,30,1);return}
  if(st==6){/* Belvedere: siepi squadrate, statue, alberi dorati, qualche palazzo sul bordo del parco */
   if(r>.7){const c=md(i,3);if(c==0)ippo(g,x+w*.5,gt,1.2,TT);else if(c==1)til(g,x+w*.5,gt,1.3);else cedro(g,x+w*.5,gt,1.1);return}
   if(r>.35){rect(g,'#2a6a34',x+10,gt-52,w-60,52);rect(g,'rgba(255,255,255,.1)',x+10,gt-52,w-60,4);rect(g,'rgba(0,0,0,.16)',x+10,gt-14,w-60,14);return}
   cas(g,x+10,w-50,h+10,i,k,{wall:['#efe6c8','#e4dcc0'][md(i,2)],bal:1,sh:'#6a7a66',roof:'f',cor:'#d0c8a8'});return}
  if(st==7){/* Prater: ippocastani d'oro, qualche chiosco colorato e lampadine */
   if(r>.2){ippo(g,x+w*.5,gt,1.2+hr(i)*.4,TT);return}
   rect(g,['#c8402a','#2a6aa8','#e8b030'][md(i,3)],x+30,gt-60,70,60);rect(g,'rgba(255,255,255,.2)',x+30,gt-60,70,6);for(let q=0;q<7;q++)dot(g,k>.1?'#fff2b8':'#e8e0c0',x+34+q*10,gt-66,2.2);return}
  if(st==8){/* Schönbrunn: siepi tagliate con precisione, alberi del parco, muri gialli */
   if(r>.68){[ippo,cedro,til][md(i,3)](g,x+w*.5,gt,1.15,TT);return}
   if(r>.3){rect(g,'#2a6a34',x+6,gt-62,w-40,62);rect(g,'rgba(255,255,255,.1)',x+6,gt-62,w-40,4);rect(g,'rgba(0,0,0,.16)',x+6,gt-14,w-40,14);return}
   cas(g,x+8,w-40,h-30,i,k,{wall:['#f2c94a','#e8bc3a'][md(i,2)],bal:0,sh:'#fbf8ee',roof:'f',cor:'#fbf8ee'});return}
  /* 9: Grinzing: case basse di vignaioli con portoni ad arco, muri bianchi e gialli, viti e noci */
  if(r>.7){[ippo,til][md(i,2)](g,x+w*.5,gt,1.2,TT);return}
  cas(g,x+6,w-40,h-60,i,k,{wall:['#f2ecd8','#e8c878','#e8d0c0','#d8e0c0'][md(i,4)],bal:0,sh:'#3a6a46',roof:'s',gt:'tav',cor:'#c8b890'})}
const IRN='#26292e';
/* ---- livello 0: cielo, sole, luna, stelle, nuvole sottili, velo dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
  gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
  const nt=cl((xs-(Z[8]+1700))/2000,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
  const su=Z[8]+1200,u=cl(xs/su,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*250;
  if(xs<su+700){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,15)}
  const mu=cl((xs-(Z[8]+1500))/2400,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*200;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
  const cc=xs<2800?'rgba(252,214,222,.55)':xs<Z[7]?'rgba(255,255,255,.62)':xs<Z[8]+1000?'rgba(255,186,140,.6)':'rgba(150,120,190,.35)';
  each(o-((t*4)%420)*.02,420,1,(x,i,r)=>{if(r>.55)return;nube(g,x+r*100,40+r*50,.8+r*.5,cc)});
  const fo=cl(1-xs/2800,0,1)*.28;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
  const wm=cl((xs-Z[4])/1000,0,1)*cl((Z[6]-xs)/1000,0,1)*.12;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
  const wg=cl((xs-Z[6])/1400,0,1)*cl((Z[8]+1400-xs)/1200,0,1)*.2;if(wg>.01){g.fillStyle='rgba(255,130,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: tetti di ardesia e di rame, la Karlskirche e la sfera d'oro, la torre sud del Duomo, le cupole del Ring, la ruota rossa, il Wienerwald e il mare di luci ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
  const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
  /* tetti di ardesia e di rame, camini e abbaini (zone 1-6) */
  const ra=cl((Z[6]+500-xs)/1500,0,1);if(ra>.02){g.globalAlpha=ra;each(o,44,3,(x,i,r)=>{const bh=30+hr(i*3)*36;rect(g,dim(['#e4dcc8','#d8c4a0','#c8b898','#ecd0c0'][md(i,4)]),x,hz+16-bh,40,bh);poly(g,dim(r>.82?'#6aa890':'#4a5058'),[[x-3,hz+16-bh],[x+8,hz+16-bh-13],[x+32,hz+16-bh-13],[x+43,hz+16-bh]]);if(r<.3)rect(g,dim('#3a3e46'),x+26,hz+16-bh-22,5,10);if(night>.3&&hr(i)>.4)rect(g,'rgba(255,226,160,.85)',x+10,hz+22-bh,5,4)});g.globalAlpha=1}
  /* Karlskirche con la cupola verde e le colonne, la sfera d'oro della Secessione (zone 1-2) */
  const kk=env(3200,3800);if(kk>.02){g.globalAlpha=kk;const sx=fx(3200);rect(g,dim('#d9ccae'),sx-40,hz-30,80,46);cup(g,sx,hz-30,64,52,dim('#5fa08a'),1);[-60,60].forEach(d=>{rect(g,dim('#d0c4a4'),sx+d-5,hz-60,10,76);cup(g,sx+d,hz-60,12,10,dim('#5fa08a'),0)});const gx=fx(3900);dot(g,dim('#d9b24a'),gx,hz-22,12);rect(g,dim('#f4f1e8'),gx-30,hz-6,60,22);g.globalAlpha=1}
  /* torre sud del Duomo e il tetto colorato (zone 3-4) */
  const st=env(6300,3600);if(st>.02){g.globalAlpha=st;const sx=fx(6300);rect(g,dim('#8a8478'),sx-9,hz-100,18,116);poly(g,dim('#9a9484'),[[sx-9,hz-100],[sx,hz-170],[sx+9,hz-100]]);poly(g,dim('#d8b040'),[[sx+30,hz+16],[sx+44,hz-44],[sx+120,hz-44],[sx+130,hz+16]]);for(let q=0;q<6;q++)rect(g,dim(['#2f7a4a','#c0302a','#26262c'][q%3]),sx+36+q*14,hz-38+(q%2)*10,10,8);g.globalAlpha=1}
  /* cupole verdi dei musei, Municipio, guglie della Votivkirche (zone 4-6) */
  const rg=env(12400,5600);if(rg>.02){g.globalAlpha=rg;const sx=fx(12400);[[-120,50,86],[-60,40,70],[20,52,96]].forEach(b=>{rect(g,dim('#e4dcc8'),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2])});cup(g,sx-120,hz-70,40,34,dim('#5fa08a'),1);cup(g,sx-8,hz-62,34,28,dim('#5fa08a'),1);rect(g,dim('#e0d8c2'),sx+90,hz-110,22,126);poly(g,dim('#6a7a66'),[[sx+86,hz-110],[sx+101,hz-170],[sx+116,hz-110]]);[0,30].forEach(d=>{rect(g,dim('#d8d0b8'),sx+150+d,hz-70,10,86);poly(g,dim('#6a7a66'),[[sx+148+d,hz-70],[sx+155+d,hz-110],[sx+162+d,hz-70]])});g.globalAlpha=1}
  /* la grande ruota rossa del Prater (zone 5-7) */
  const rw=env(19800,6200);if(rw>.02){g.globalAlpha=rw;const sx=fx(19800),cy=hz-64,R=62;g.strokeStyle=dim('#7a7e86');g.lineWidth=1.6;g.beginPath();g.arc(sx,cy,R,0,7);g.stroke();for(let q=0;q<16;q++){const an=q/16*6.283+t*.05;ln(g,dim('#7a7e86'),.8,[sx,cy,sx+Math.cos(an)*R,cy+Math.sin(an)*R]);rect(g,dim('#b8201c'),sx+Math.cos(an)*R-3,cy+Math.sin(an)*R,6,7)}ln(g,dim('#7a7e86'),2,[sx-20,hz+16,sx,cy,sx+20,hz+16]);g.globalAlpha=1}
  /* la Gloriette sulla collina e il castello giallo, lontani (zona 8) */
  const gl=env(23400,4400);if(gl>.02){g.globalAlpha=gl;const sx=fx(23400);g.fillStyle=dim('#6a9a4a');g.beginPath();g.moveTo(sx-200,hz+16);g.quadraticCurveTo(sx-90,hz-40,sx-60,hz-62);g.lineTo(sx+60,hz-62);g.quadraticCurveTo(sx+90,hz-40,sx+200,hz+16);g.closePath();g.fill();rect(g,dim('#e8e0c8'),sx-50,hz-86,100,24);for(let q=0;q<7;q++)rect(g,dim('#4a4234'),sx-44+q*14,hz-80,8,18);rect(g,dim('#e8e0c8'),sx-12,hz-102,24,16);rect(g,dim('#f2c94a'),sx-190,hz-14,100,30);poly(g,dim('#7aa890'),[[sx-194,hz-14],[sx-170,hz-28],[sx-114,hz-28],[sx-86,hz-14]]);g.globalAlpha=1}
  /* colline del Wienerwald con i filari di vigne, il Kahlenberg con il belvedere (zona 9) */
  const wv=env(27300,5600);if(wv>.02){g.globalAlpha=wv;const sx=fx(27300);g.fillStyle=dim('#5a7a50');g.beginPath();g.moveTo(sx-480,hz+30);[[-480,-30],[-400,-52],[-320,-40],[-240,-70],[-160,-56],[-80,-88],[0,-120],[40,-124],[110,-96],[190,-70],[270,-84],[350,-52],[430,-38],[490,-24]].forEach(p=>g.lineTo(sx+p[0],hz+p[1]));g.lineTo(sx+490,hz+30);g.closePath();g.fill();g.fillStyle=dim('#4a6a42');g.beginPath();g.moveTo(sx-480,hz+30);[[-480,-10],[-380,-28],[-300,-16],[-200,-40],[-100,-26],[0,-50],[120,-36],[240,-52],[360,-24],[490,-14]].forEach(p=>g.lineTo(sx+p[0],hz+p[1]));g.lineTo(sx+490,hz+30);g.closePath();g.fill();
   for(let r=0;r<5;r++)for(let q=0;q<26;q++){const vx=sx-300+q*22+r*5,vy=hz-8+r*5-Math.sin((q+2)/28*3.14)*(30-r*3);rect(g,dim(['#a8a838','#8aa83a','#b89a2e'][(q+r)%3]),vx,vy,14,2)}
   rect(g,dim('#e8dcc0'),sx+10,hz-134,14,10);poly(g,dim('#b8603a'),[[sx+7,hz-134],[sx+17,hz-144],[sx+27,hz-134]]);rect(g,dim('#d8d0b8'),sx+34,hz-130,6,6);g.globalAlpha=1}
  /* il mare di luci della città che si apre in basso (sera e notte) */
  const cl2=cl((xs-(Z[8]+1500))/1500,0,1);if(cl2>.02){for(let q=0;q<70;q++){const lx=hr(q*3)*480,ly=hz+8+hr(q*5)*44,a=cl2*(.4+.5*Math.sin(t*1.6+q));g.fillStyle=(q%5==0?'rgba(255,255,255,':q%3==0?'rgba(255,190,120,':'rgba(255,226,150,')+a+')';g.fillRect(lx,ly,1.8+hr(q)*1.6,1.8)}}}
/* ---- livello 2: piani intermedi (tettoie del mercato, chiese barocche, caffè, giardini, giostre, vigne e case basse) ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;
  const wins=(n,top)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+14+(q%4)*20,top+Math.floor(q/4)*14,6,5)};
  const blk=(c,hh)=>{rect(g,dim(c),x+6,hz-hh,68,hh+10);rect(g,'rgba(255,255,255,.18)',x+6,hz-hh,4,hh+10);wins(8,hz-hh+8)};
  if(zz==1){if(r>.62){rect(g,dim('#6a727c'),x+4,hz-30,84,5);for(let q=0;q<6;q++)rect(g,dim(['#2f7a46','#c8402a'][q%2]),x+4+q*14,hz-26,14,16)}else{blk(['#e4d8c0','#d8b890','#ecd0c0'][md(i,3)],56+r*50);poly(g,dim('#4a5058'),[[x+2,hz-50-r*50],[x+40,hz-70-r*50],[x+78,hz-50-r*50]])}}
  else if(zz==2){if(r>.7){el(g,dim(['#c8a82e','#a89a34'][md(i,2)]),x+50,hz-34,40,34);rect(g,dim('#5a4636'),x+48,hz-8,4,18)}else{blk(['#efe9da','#e4dcc8'][md(i,2)],60+r*40);if(r<.2){cup(g,dim('#5fa08a'),x+40,hz-70-r*40,34,28,1)}}}
  else if(zz==3){blk(['#ece4cc','#d8d0b8','#e0d8c0'][md(i,3)],62+r*44);poly(g,dim('#4a5058'),[[x+2,hz-62-r*44],[x+40,hz-84-r*44],[x+78,hz-62-r*44]]);if(r>.86){rect(g,dim('#8a8478'),x+38,hz-120,8,90);poly(g,dim('#8a8478'),[[x+36,hz-120],[x+42,hz-170],[x+48,hz-120]])}}
  else if(zz==4){if(r>.75){ippo(g,x+50,hz+6,.7,undefined)}else{blk(['#e6dcc4','#efe6cc'][md(i,2)],60+r*30);if(r<.25)cup(g,dim('#5fa08a'),x+40,hz-70-r*30,40,32,1)}}
  else if(zz==5){if(r>.55){ippo(g,x+50,hz+6,.75,undefined)}else{blk(['#efeadc','#e8e0cc'][md(i,2)],70+r*40);rect(g,dim('#d0c8b0'),x+6,hz-66-r*40,68,5);if(r<.3){poly(g,dim('#e0d8c2'),[[x+6,hz-70-r*40],[x+40,hz-92-r*40],[x+74,hz-70-r*40]])}}}
  else if(zz==6){if(r>.4){rect(g,dim('#2a6a34'),x+8,hz-34,70,34);rect(g,'rgba(255,255,255,.1)',x+8,hz-34,70,3)}else if(r>.2){ippo(g,x+50,hz+6,.7,undefined)}else{blk('#efe6c8',50+r*40);cup(g,dim('#6aa890'),x+40,hz-50-r*40,44,30,0)}}
  else if(zz==7){if(r>.35){ippo(g,x+50,hz+6,.8,undefined)}else{const cc=['#c8402a','#2a6aa8','#e8b030'][md(i,3)];rect(g,dim(cc),x+16,hz-44,48,44);for(let q=0;q<5;q++)dot(g,night>.2?'#fff2b8':dim('#e8e0c0'),x+20+q*9,hz-48,2)}}
  else if(zz==8){if(r>.55){[ippo,cedro][md(i,2)](g,x+50,hz+6,.7,undefined)}else if(r>.25){rect(g,dim('#2a6a34'),x+8,hz-40,70,40)}else{rect(g,dim('#f2c94a'),x+4,hz-50,90,56);for(let q=0;q<5;q++)rect(g,dim('#fbf8ee'),x+12+q*16,hz-38,8,14)}}
  else{if(r>.7){ippo(g,x+50,hz+6,.7,undefined)}else{rect(g,dim(['#f2ecd8','#e8c878','#e8d0c0'][md(i,3)]),x+6,hz-40-r*14,76,50+r*14);poly(g,dim('#b8603a'),[[x,hz-40-r*14],[x+44,hz-62-r*14],[x+88,hz-40-r*14]]);arco2(g,x+36,hz-18);if(night>.15)rect(g,'rgba(255,226,160,.85)',x+14,hz-30,6,5)}}})}
function arco2(g,x,y){rect(g,'#2a1c14',x,y,16,24);rect(g,'#2a1c14',x+2,y-5,12,6)}
/* ---- livello 3: la strada con le facciate, i monumenti vengono dagli oggetti ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>120+hr(i*5)*50,170);
 each2(190,8,Z[1],Z[2],2,i=>110+hr(i*5)*50,170);
 each2(180,9,Z[2],Z[3],3,i=>110+hr(i*5)*40,170);
 each2(190,10,Z[3],Z[4],4,i=>110+hr(i*5)*40,170);
 each2(200,11,Z[4],Z[5],5,i=>120+hr(i*5)*40,180);
 each2(200,12,Z[5],Z[6],6,i=>120+hr(i*5)*40,190);
 each2(210,13,Z[6],Z[7],7,i=>120+hr(i*5)*50,200);
 each2(200,14,Z[7],Z[8],8,i=>120+hr(i*5)*40,190);
 each2(180,15,Z[8],W1+400,9,i=>120+hr(i*5)*50,170)}
/* ---- vita: piccioni, passeri, cornacchie, tram sul Ring e nel viale, Fiaker, corridori nel Prater ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
  const pg=cl((xs-Z[1])/400,0,1)*cl((Z[5]+200-xs)/400,0,1);
  if(pg>.05)for(let i=0;i<5;i++){const bx=((i*117+t*(46+i*6))%600)-60,by=70+hr(i*3)*100+Math.sin(t*2+i*2)*14,w=Math.sin(t*10+i)*3.4;g.strokeStyle='rgba(120,126,140,'+(.9*Math.min(1,pg))+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke();rect(g,'rgba(90,96,110,.9)',bx-2,by,5,3)}
  if(xs<Z[8]+1200)for(let i=0;i<3;i++){const bx=((i*171+t*(80+i*9))%620)-70,by=100+hr(i*5+2)*120+Math.sin(t*3+i)*10,w=Math.sin(t*16+i)*2;g.strokeStyle='rgba(90,66,40,.85)';g.lineWidth=1.8;g.beginPath();g.moveTo(bx-5,by+w);g.lineTo(bx,by);g.lineTo(bx+5,by+w);g.stroke()}
  const cw=cl((xs-300)/300,0,1)*cl((Z[6]+400-xs)/400,0,1);if(cw>.05)for(let i=0;i<2;i++){const bx=((i*251+t*(34+i*8))%640)-80,by=60+hr(i*7+3)*70+Math.sin(t*1.4+i)*8,w=Math.sin(t*6+i)*4;g.strokeStyle='rgba(30,30,36,'+(.9*cw)+')';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-9,by+w);g.quadraticCurveTo(bx-4,by-4,bx,by);g.quadraticCurveTo(bx+4,by-4,bx+9,by+w);g.stroke()}
  /* tram rosso e bianco sul Ring e a Karlsplatz */
  [[Z[1]+200,Z[2]-200,-70],[Z[4]+300,Z[5]-300,90]].forEach((rg,ri)=>{const span=rg[1]-rg[0];if(xs<rg[0]-300||xs>rg[1]+300)return;const sp=rg[2],wx=rg[0]+(((t*sp+ri*span/3)%span)+span)%span,px=wx-cam;if(px<-200||px>680)return;A.setDK(nf(wx));tram(g,px,GT+84,t,A.getDK(),sp>0?1:-1)});
  /* un Fiaker che passa, fra Stephansplatz e l'Hofburg */
  if(xs>Z[2]+200&&xs<Z[4]-200){const sp=52,span=Z[4]-Z[2],wx=Z[2]+(((t*sp)%span)+span)%span,px=wx-cam;if(px>-300&&px<760){A.setDK(nf(wx));PR.wifiaker(g,px,GT+80,t,1)}}
  /* corridori e ciclisti sulla Hauptallee */
  [[Z[6]+200,Z[7]-200,46,0]].forEach(rg=>{for(let i=0;i<3;i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.25),wx=rg[0]+(((t*sp+i*span/3)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));g.save();g.translate(px,GT+22+i*9);g.scale(.6,.6);fig(g,0,0,t*3,{f:1,s:.7,ph:i,skin:tn('#e0b090'),top:tn(['#e8505a','#2a8a9a','#f2c82a'][i]),bot:tn('#2a2a36'),hair:tn('#2a1a10')});g.restore()}})}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
  const GZ=[[Z[0],Z[1],'#b4b4b0','n'],[Z[1],Z[2],'#d8d2c0','l'],[Z[2],Z[3],'#cfc8b4','p'],[Z[3],Z[4],'#d8d0b8','h'],[Z[4],Z[5],'#b8b4a8','r'],[Z[5],Z[6],'#e0d8c0','b'],[Z[6],Z[7],'#a8a498','q'],[Z[7],Z[8],'#e4dcc4','s'],[Z[8],W1+400,'#8e8a84','c']];
  rect(g,'#e0d8c0',0,gt,480,3);
  GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
   const slabs=(bw0,add,al)=>{for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,15);rect(g,'rgba(0,0,0,.12)',px,yy,1.3,17)}rect(g,'rgba(0,0,0,.09)',x0,yy+15,x1-x0,1.4)}};
   if(z[3]=='n'){/* asfalto e lastre di cemento bagnate dal lavaggio, qualche pozzanghera */slabs(60,8,.16);for(let q=0;q<5;q++)el(g,'rgba(180,210,235,.35)',x0+((q*173+40-cam)%ww+ww)%ww,gt+30+hr(q)*90,30,4);rect(g,'#8a8a88',x0,gt+120,x1-x0,3);rect(g,'rgba(255,255,255,.14)',x0,gt+3,x1-x0,10)}
   if(z[3]=='l'){slabs(70,12,.22);rect(g,'#b8b09a',x0,gt+120,x1-x0,3);for(let q=0;q<3;q++)rect(g,'#6aa850',x0+((q*260+30-cam)%ww+ww)%ww,gt+110,90,12)}
   if(z[3]=='p'){slabs(56,10,.24);for(let q=0;q<5;q++)dot(g,'#4a4a50',x0+((q*190+60-cam)%ww+ww)%ww,gt+120,4);rect(g,'#9a948a',x0,gt+128,x1-x0,2)}
   if(z[3]=='h'){for(let q=0;q<150;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.34)':'rgba(120,100,60,.2)',x0+((q*47)%ww),gt+8+hr(q+3)*120,2+hr(q)*3,1.6);slabs(90,16,.12);rect(g,'#c8bc9c',x0,gt+122,x1-x0,3)}
   if(z[3]=='r'){/* marciapiedi di lastre grigie, pista ciclabile rossa, binari del tram */rect(g,'#b8b4a8',x0,gt+3,x1-x0,60);for(let r=0;r<4;r++)rect(g,'rgba(0,0,0,.1)',x0,gt+16+r*15,x1-x0,1.4);for(let q=0;q<60;q++)rect(g,'rgba(0,0,0,.1)',x0+((q*30-cam)%ww+ww)%ww,gt+3,1.4,60);rect(g,'#b8645a',x0,gt+64,x1-x0,22);rect(g,'rgba(255,255,255,.4)',x0,gt+66,x1-x0,1.4);rect(g,'#4a4a54',x0,gt+88,x1-x0,38);rect(g,'#8a8a88',x0,gt+86,x1-x0,3);rect(g,'#9a9a9e',x0,gt+98,x1-x0,2);rect(g,'#9a9a9e',x0,gt+112,x1-x0,2);for(let k=-1;k<Math.ceil(ww/18)+2;k++){const px=Math.floor((cam+x0)/18)*18+k*18-cam;rect(g,'rgba(0,0,0,.25)',px,gt+96,3,20)}}
   if(z[3]=='b'){/* ghiaia chiara dei viali, bordi di pietra delle aiuole */for(let q=0;q<170;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.4)':'rgba(120,100,60,.2)',x0+((q*43)%ww),gt+8+hr(q+3)*120,2+hr(q)*3,1.6);for(let r=0;r<3;r++)rect(g,'rgba(160,140,100,.22)',x0,gt+30+r*38,x1-x0,2);rect(g,'#b8ad92',x0,gt+122,x1-x0,3)}
   if(z[3]=='q'){/* asfalto e foglie cadute del viale di ippocastani, prato secco, binari del trenino */rect(g,'#7aa844',x0,gt+3,x1-x0,26);for(let q=0;q<60;q++)dot(g,hr(q)>.4?'#d8a82e':'#b87a2a',x0+((q*37)%ww),gt+6+hr(q+2)*22,1.6);rect(g,'rgba(255,255,255,.18)',x0,gt+3,x1-x0,8);for(let q=0;q<170;q++)dot(g,['#d8a82e','#c88a2a','#b8782a','#e8c04a'][q%4],x0+((q*41)%ww),gt+34+hr(q+5)*112,1.5+hr(q)*1.2);rect(g,'rgba(0,0,0,.08)',x0,gt+60,x1-x0,40);rect(g,'#8a8478',x0,gt+122,x1-x0,3)}
   if(z[3]=='s'){/* ghiaia chiara dei grandi viali, righe rastrellate */for(let q=0;q<5;q++)rect(g,'rgba(160,140,100,.2)',x0,gt+16+q*26,x1-x0,1.4);for(let q=0;q<150;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.4)':'rgba(120,100,60,.2)',x0+((q*43)%ww),gt+8+hr(q+3)*124,2+hr(q)*3,1.6);rect(g,'#c8bc94',x0,gt+122,x1-x0,3)}
   if(z[3]=='c'){/* acciottolato delle stradine, terra battuta dei cortili */for(let r=0;r<7;r++){const yy=gt+7+r*19,bw=22+r*5,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5);el(g,hh>.6?'rgba(255,255,255,.1)':hh>.25?'rgba(0,0,0,.1)':'rgba(255,255,255,.04)',px+bw/2,yy+8,bw/2-1,8)}}rect(g,'rgba(120,100,70,.18)',x0,gt+108,x1-x0,22)}
   g.restore()});
  for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
  const dw=cl(1-cam/1700,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
  const gd=cl((cam-Z[4])/700,0,1)*cl((Z[6]-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
  const sg=cl((cam-Z[7]+200)/800,0,1)*cl((Z[8]+1600-cam)/900,0,1);if(sg>.02)rect(g,'rgba(255,120,60,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{skin:tn(o.skin),top:tn(o.top),bot:tn(o.bot),hair:o.hair?tn(o.hair):o.hair,acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Frau Gerti: grembiule blu, fazzoletto in testa, maniche arrotolate, guanti a mezze dita, taccuino dei prezzi */
 NP('wi_gerti',NAME.wi_gerti,914,GREET.wi_gerti,{skin:'#e0b090',top:'#d8d4c8',bot:'#3a3a46',hair:'#6a5a4a',s:1.0},(g,b,t)=>{rect(g,'#2a5a9a',-11,-80+b,22,38);rect(g,'#1e4a86',-11,-80+b,22,3);rect(g,'#1e4a86',-6,-62+b,12,8);rect(g,'rgba(255,255,255,.14)',-11,-80+b,3,38);
  poly(g,'#c8402a',[[-12,-103+b],[14,-103+b],[13,-114+b],[-11,-114+b]]);dot(g,'#f4f0e6',-4,-109+b,1.4);dot(g,'#f4f0e6',4,-108+b,1.4);dot(g,'#f4f0e6',9,-110+b,1.4);dot(g,'#c8402a',-13,-101+b,3.4);
  rect(g,'#d8d4c8',-17,-86+b,9,6);rect(g,'#7a6a5a',-10,-52,7,5);rect(g,'#7a6a5a',4,-52,7,5);rect(g,'#f4f0e0',9,-66,12,16);rect(g,'#c8402a',9,-66,2.4,16);for(let q=0;q<3;q++)rect(g,'rgba(60,60,60,.55)',13,-62+q*4,7,1)}),
 /* Herr Franz: giacca scura e panciotto, bombetta, fazzoletto bianco nel taschino, frusta */
 NP('wi_franz',NAME.wi_franz,7953,GREET.wi_franz,{skin:'#d8a880',top:'#2a2a30',bot:'#2a2a30',hair:'#8a8a8a',s:1.03},(g,b,t)=>{rect(g,'#5a4a42',-6,-88+b,12,40);rect(g,'#f4f0e6',-2,-90+b,4,10);rect(g,'#f4f0e6',7,-80+b,5,4);for(let q=0;q<3;q++)dot(g,GOLDN,0,-80+b+q*10,1.2);
  el(g,'#1a1a1e',1,-111+b,17,3.4);rect(g,'#1a1a1e',-9,-124+b,20,13);el(g,'#1a1a1e',1,-124+b,10,4);rect(g,'#4a4a52',-9,-114+b,20,2.4);rect(g,'#8a8a8a',4,-96+b,8,2);
  ln(g,'#6a4a2a',1.6,[14,-62,42,-24]);ln(g,'#2a2a2e',.8,[42,-24,50,-12,44,-4])}),
 /* Katharina: giacca marrone con bottoni dorati, bicorno sotto il braccio, pantaloni chiari, guanti bianchi, stivali neri */
 NP('wi_katharina',NAME.wi_katharina,9613,GREET.wi_katharina,{skin:'#e8b890',top:'#6a4020',bot:'#e8e0cc',hair:'#6a3a1a',s:1.0},(g,b,t)=>{for(let q=0;q<4;q++)dot(g,GOLDN,0,-84+b+q*9,1.5);rect(g,'rgba(255,255,255,.12)',-13,-90+b,3,46);
  rect(g,'#14110f',-10,-15,9,15);rect(g,'#14110f',2,-15,9,15);dot(g,'#6a3a1a',-10,-106+b,5.6);rect(g,'#f8f6ee',-10,-52,7,5);rect(g,'#f8f6ee',4,-52,7,5);
  poly(g,'#14110f',[[10,-72],[28,-64],[22,-54],[8,-62]]);ln(g,GOLDN,1.2,[10,-72,28,-64,22,-54])}),
 /* Herr Karl: marsina nera, camicia bianca, farfallino, grembiule lungo bianco, vassoio d'argento con un bicchiere d'acqua, tovagliolo sul braccio */
 NP('wi_karl',NAME.wi_karl,14128,GREET.wi_karl,{skin:'#e0b896',top:'#1a1a1e',bot:'#1a1a1e',hair:'#c8c8c8',s:1.02},(g,b,t)=>{rect(g,'#f4f0e6',-5,-90+b,10,22);poly(g,'#14110f',[[-6,-90+b],[0,-87+b],[6,-90+b],[6,-84+b],[0,-87+b],[-6,-84+b]]);
  poly(g,'#1a1a1e',[[-12,-48+b],[-19,-22],[-8,-30]]);rect(g,'#f8f6ee',-11,-60+b,22,58);rect(g,'rgba(0,0,0,.1)',-11,-60+b,3,58);rect(g,'#f4f0e6',10,-64,13,6);rect(g,'#c8c8c8',3,-97+b,8,2);
  ln(g,'#8a8a8e',1.6,[12,-74+b,24,-94]);el(g,'#d4d8de',26,-96,17,3.4);el(g,'#9aa0a8',26,-94.5,17,1.6);rect(g,'rgba(210,235,255,.85)',23,-109,6,13);rect(g,'rgba(255,255,255,.6)',24,-108,1.6,11)}),
 /* Sophie: giacca verde scuro, occhiali, sciarpa colorata, tablet e badge del museo */
 NP('wi_sophie',NAME.wi_sophie,16227,GREET.wi_sophie,{skin:'#e8b890',top:'#2a4a36',bot:'#3a3a46',hair:'#4a2a1a',s:1.0},(g,b,t)=>{poly(g,'#4a2a1a',[[-12,-108+b],[-15,-84+b],[-8,-90+b],[-6,-106+b]]);
  poly(g,'#e8402a',[[-9,-92+b],[9,-92+b],[5,-80+b],[-5,-80+b]]);poly(g,'#f2c82a',[[-7,-90+b],[0,-86+b],[7,-90+b]]);poly(g,'#2a7ab8',[[-4,-82+b],[0,-76+b],[4,-82+b]]);
  g.strokeStyle='#2a2a2e';g.lineWidth=1.2;g.beginPath();g.arc(-2,-101+b,4.4,0,7);g.arc(7,-101+b,4.4,0,7);g.moveTo(2.4,-101+b);g.lineTo(2.6,-101+b);g.stroke();
  rect(g,'#14161c',-26,-80,12,16);rect(g,'#6a8aa4',-25,-79,10,13);rect(g,'#f4f0e6',5,-72+b,7,9);rect(g,'#2a7ab8',5,-72+b,7,2);ln(g,'#8a8a8e',.8,[8,-84+b,8,-72+b])}),
 /* Pepi: giacca a quadri, cappello di feltro, baffi, mani sporche di grasso, grande chiave inglese */
 NP('wi_pepi',NAME.wi_pepi,20223,GREET.wi_pepi,{skin:'#d0a078',top:'#8a7a5a',bot:'#4a4a52',hair:'#3a3a3e',s:1.02},(g,b,t)=>{for(let q=0;q<4;q++)rect(g,'rgba(50,40,24,.3)',-12,-88+q*10+b,24,2);for(let q=0;q<3;q++)rect(g,'rgba(50,40,24,.3)',-8+q*8,-90+b,2,44);
  el(g,'#6a5a48',1,-111+b,17,3.6);poly(g,'#6a5a48',[[-9,-112+b],[11,-112+b],[8,-122+b],[-7,-122+b]]);rect(g,'#3a3430',-8,-114+b,18,2.6);rect(g,'#14110f',2,-96+b,10,2.6);
  dot(g,'#2a2a2e',-9,-52,3.2);dot(g,'#2a2a2e',9,-52,3.2);ln(g,'#8a8e94',3.4,[16,-62,36,-20]);poly(g,'#8a8e94',[[32,-18],[44,-20],[44,-10],[38,-10],[38,-14],[32,-14]]);dot(g,'#5a5e66',38,-20,3)}),
 /* Maria Teresa: ampio abito di seta con ricami e merletti, capelli incipriati, piccolo diadema, collana di perle, ventaglio */
 NP('wi_mariateresa',NAME.wi_mariateresa,22158,GREET.wi_mariateresa,{skin:'#f0d0b8',top:'#8aa4d0',bot:'#8aa4d0',hair:'#e8e8f0',long:1,s:1.04},(g,b,t)=>{poly(g,'#8aa4d0',[[-12,-62+b],[12,-62+b],[44,0],[-44,0]]);poly(g,'rgba(255,255,255,.14)',[[-12,-62+b],[-4,-62+b],[-18,0],[-44,0]]);
  for(let r=0;r<4;r++)for(let q=-r;q<=r+1;q++)dot(g,GOLDN,q*8-4,-52+r*12,1.6);poly(g,GOLDN,[[-44,-2],[44,-2],[44,0],[-44,0]]);
  poly(g,'#f8f6ee',[[-9,-90+b],[9,-90+b],[6,-80+b],[-6,-80+b]]);for(let q=0;q<6;q++)dot(g,'#fbf9f2',-7+q*2.8,-86+b+Math.abs(q-2.5)*.8,1.4);rect(g,'#f8f6ee',-18,-70,8,7);rect(g,'#f8f6ee',10,-70,8,7);
  el(g,'#e8e8f0',1,-119+b,14,9);dot(g,'#e8e8f0',-10,-116+b,5);dot(g,'#e8e8f0',12,-116+b,5);poly(g,GOLDN,[[-5,-124+b],[-3,-130+b],[0,-125+b],[3,-130+b],[5,-124+b]]);
  poly(g,'#f4e8d0',[[14,-60],[30,-86],[40,-68]]);for(let q=0;q<4;q++)ln(g,GOLDN,.8,[14,-60,22+q*5,-84+q*5]);ln(g,'#8a6a2a',1.2,[14,-60,18,-52])}),
 /* Annemarie: grembiule scuro, camicetta bianca, foulard colorato, mani segnate dal lavoro, grande mestolo di legno */
 NP('wi_annemarie',NAME.wi_annemarie,26753,GREET.wi_annemarie,{skin:'#e0b090',top:'#f4f0e6',bot:'#3a3a46',hair:'#6a3a22',s:1.0},(g,b,t)=>{rect(g,'#2a2630',-11,-78+b,22,36);rect(g,'#1a1618',-11,-78+b,22,3);rect(g,'rgba(255,255,255,.12)',-11,-78+b,3,36);
  poly(g,'#e8802a',[[-8,-91+b],[8,-91+b],[4,-80+b],[-4,-80+b]]);dot(g,'#c8402a',-3,-86+b,1.4);dot(g,'#f2c82a',3,-87+b,1.4);ln(g,'#6a3a22',5,[-11,-102+b,-15,-86+b,-11,-70+b]);dot(g,'#c8402a',-11,-70+b,2.6);
  ln(g,'#8a5a2a',3,[14,-60,26,-102]);el(g,'#8a5a2a',28,-106,6,5);dot(g,'#c8946a',9,-52,3.2)})
];
const GOLDN='#d9b24a';
/* ---- oggetti lungo il percorso ---- */
const LX=[440,1442,2047,2606,3231,3896,4266,4746,5321,6116,6677,7443,7868,8773,9839,10271,10683,11001,11588,12343,12928,14128,14568,14952,15612,16227,16915,17390,17970,18695,19333,20618,21163,22158,22643,23183,24668,25173,26098,26753,27466,28091,28571];
const props=[
["witarga",70,"NASCHMARKT"],
["winasch",440,null],
["wilampione",710,0],
["wicestino",772,null],
["winasch",914,1],
["wiu",1048,null],
["wibici",1177,null],
["wibanchi",1442,null],
["wilampione",1662,0],
["wipiccioni",1742,null],
["wiflohmarkt",2047,null],
["wicestino",2344,null],
["wimajolika",2606,null],
["witarga",2876,"KARLSPLATZ"],
["wikarlskirche",3231,null],
["wipanca",3556,1],
["wimaroni",3676,null],
["wisecessione",3896,null],
["wilampione",4066,0],
["wiwagner",4266,null],
["wiplatano",4506,1.1],
["wimusikverein",4746,null],
["witarga",5036,"STEPHANSPLATZ"],
["wiW",5326,["wistephansdom",null,1,-105.0]],
["wiW",5526,["wistephansdom",null,2,-105.0]],
["wimozart",5776,null],
["wimaroni",5896,null],
["wisteffl",6116,null],
["wipanca",6341,0],
["witetto",6677,null],
["wihaas",7063,null],
["wigraben",7443,null],
["wilampione",7733,0],
["wifiaker",7868,null],
["witarga",8263,"MICHAELERPLATZ"],
["wibandiere",8423,null],
["wihofburg",8773,null],
["wiheldenplatz",9303,null],
["wilampione",9613,1],
["wireitschule",9839,null],
["wilipizzani",10271,null],
["wisisi",10683,null],
["wicappella",11001,null],
["witarga",11253,"RING"],
["wiring",11588,null],
["wibandiere",11968,null],
["wiW",12243,["wiopera",null,1,0.0]],
["wiW",12443,["wiopera",null,2,0.0]],
["wiW",12828,["wiparlamento",null,1,0.0]],
["wiW",13028,["wiparlamento",null,2,0.0]],
["wiW",13398,["wirathaus",null,1,0.0]],
["wiW",13598,["wirathaus",null,2,0.0]],
["wiplatano",13858,1.2],
["wicaffe",14128,null],
["widolci",14568,null],
["wicestino",14770,null],
["wiwurstel",14952,null],
["witarga",15222,"SCHWARZENBERGPLATZ"],
["wiW",15512,["wihochstrahl",null,1,0.0]],
["wiW",15712,["wihochstrahl",null,2,0.0]],
["wiW",16127,["wibelvedere",null,1,0.0]],
["wiW",16327,["wibelvedere",null,2,0.0]],
["wibanner",16596,null],
["wigiardino",16915,null],
["wisalone",17390,null],
["wisiepe",17720,3],
["wihundert",17970,null],
["witarga",18315,"PRATER"],
["wiW",18595,["wiprater",null,1,0.0]],
["wiW",18795,["wiprater",null,2,0.0]],
["wiscoiattolo",19019,null],
["wiwurstelprater",19333,null],
["wililiput",19828,null],
["wigiostra",20223,null],
["wiriesenrad",20618,null],
["wiW",21063,["wischweizer",null,1,0.0]],
["wiW",21263,["wischweizer",null,2,0.0]],
["wilangos",21558,null],
["witarga",21773,"SCHLOSS SCHÖNBRUNN"],
["wischloss",22158,null],
["wispecchi",22643,null],
["wiW",23083,["wigloriette",null,1,0.0]],
["wiW",23283,["wigloriette",null,2,0.0]],
["winettuno",23763,null],
["wirovina",24203,null],
["wizoo",24668,null],
["wicane",24908,null],
["wipalmenhaus",25173,null],
["witarga",25528,"GRINZING"],
["wiW",25890,["wigrinzing",null,1,107.5]],
["wiW",26090,["wigrinzing",null,2,107.5]],
["wifiori",26393,null],
["wiW",26653,["wiheuriger",null,1,0.0]],
["wiW",26853,["wiheuriger",null,2,0.0]],
["wibotte",27117,null],
["wiW",27366,["wivigne",null,1,0.0]],
["wiW",27566,["wivigne",null,2,0.0]],
["wiW",27991,["wikahlen",null,1,0.0]],
["wiW",28191,["wikahlen",null,2,0.0]],
["wivarco",28571,null]];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'vienna',name:'Vienna · Dal Naschmarkt alla notte di Grinzing',width:W1,sky:['#7ea6e0','#e6c8d4','#ffd0b8'],gt:372,gr:['#b4b4b0','#8a8a88'],chord:[196,246.9,293.7,370],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da vienna.txt) --- */
(function(){
const TOPX_WI={
"wi_gerti":[
["Chi sei e che fai?","Gerti, cinquantotto anni, venditrice di verdura e di sottaceti. Mi alzo alle cinque, perché il mercato apre alle sei, e il banco lo preparo con i prodotti che arrivano al mattino. Il Naschmarkt è il mio salotto, Schatzerl."],
["Com’è fatto questo mercato?","È una lunga fila di banchi lungo la Wienzeile, circa centoventi fra banchi e locali, con le tettoie e le casse in mezzo alla via. Sotto i tuoi piedi scorre il fiume Wien, ma coperto: ti sembra di camminare su un marciapiede, invece c’è l’acqua. Si apre dal lunedì al sabato; la domenica è chiuso, e i viennesi lo sanno."],
["Cosa si vende qui?","Di tutto, ma soprattutto da mangiare: verdura, frutta, olive in grandi bacinelle, formaggi, spezie, pane, cetriolini e crauti. Ci sono anche ristorantini di cucine di tutto il mondo, per un pranzo in piedi. Il sabato, in fondo, c’è il mercatino delle pulci, ed è pieno di gente."],
["Come si chiamano le verdure di qui?","Qui in Austria cambiano nome! I pomodori sono “Paradeiser”, le patate “Erdäpfel”, i cetrioli “Gurkerl”, e il rafano è il “Kren”, che si grattugia sul manzo bollito. In autunno ci sono le zucche, i funghi e il Kürbiskernöl, l’olio scuro di semi di zucca della Stiria: sull’insalata è leiwand."],
["Cosa si mangia a colazione?","Una “Semmel” fresca o un “Kipferl”, con burro e marmellata di albicocche, le “Marillen”, e un caffè. Oppure una “Jause”, una merenda salata con pane, formaggio fresco al paprika e cetriolini. L’ora della Jause è a metà mattina, e nessuno la salta."],
["Come si parla con i venditori?","Con gentilezza e con un po’ di Schmäh, cioè una battuta spiritosa: a Vienna si scherza con serietà. Ci si saluta con “Grüß Gott” o “Servus”; alle signore si dice “Gnä’ Frau”, ai signori “Habe die Ehre”. E “ein bisserl” significa un pochino, ma a me lo chiedono sempre due volte."],
["Da quanto esiste il mercato?","Da secoli: già nel Cinquecento qui si vendeva il latte, e col tempo sono arrivati i contadini con la verdura. All’inizio del Novecento, quando il fiume Wien fu regolato, il mercato prese l’aspetto di oggi, con le sue bancarelle in stile Liberty. Tra i banchi senti la storia, Schatzerl."],
["Cosa sono quelle case decorate qui accanto?","Sono i numeri 38 e 40 della Linke Wienzeile, due palazzi di Otto Wagner, finiti intorno al 1899. Il 40 è coperto di piastrelle di maiolica con i fiori, il 38 ha decorazioni dorate. Le guardo ogni mattina mentre apro il banco, e non mi stufano mai."],
["Si può bere l’acqua del rubinetto a Vienna?","Certo, e la bevono tutti! L’acqua arriva dalle montagne, dal Rax e dallo Schneeberg, tramite un acquedotto aperto nel 1873: qui il rubinetto vale quasi un’acqua minerale. Se hai sete, Schatzerl, riempi la borraccia a una fontanella."],
["Cosa mi consigli di comprare?","Un sacchetto di cetriolini, un vasetto di marmellata di Marillen e un po’ di semi di zucca tostati per la strada. Ti metto tutto in un “Sackerl” e ti spiego come usarli; se poi non ti piace, non è colpa mia."],
["Dove vado dopo?","A est, fino a Karlsplatz: vedi la cupola verde e le due colonne? È la Karlskirche, e accanto, con la palla d’oro in cima, c’è il palazzo della Secessione. Poi vai verso il Duomo, a Stephansplatz: lì trovi Herr Franz con i suoi cavalli."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, und gib auf dich acht! Se ripassi, ti regalo un cetriolino e ti racconto il resto del mercato. Baba, Schatzerl, und auf Wiedersehen!"]],
"wi_franz":[
["Chi sei e che fai?","Franz, cinquantadue anni, Fiaker. Mio padre e mio nonno facevano lo stesso lavoro, e io sono salito a cassetta da ragazzo. Porto la gente in giro per il centro, e a ognuno racconto qualcosa."],
["Come funziona un giro?","Si concorda il percorso e il prezzo prima di salire, così non ci sono sorprese. Si parte da Stephansplatz, si passa per il Graben e per l’Hofburg, e di solito si torna qui. Se fa fresco, c’è un plaid per le gambe."],
["Perché si chiama Fiaker?","Viene da Parigi: le carrozze a nolo stavano davanti a un albergo in Rue Saint-Fiacre, e il nome è rimasto. A Vienna la prima licenza fu data nel 1693 dall’imperatore Leopoldo I, e da allora il Fiaker è una piccola istituzione."],
["Come stanno i cavalli?","Prima di tutto vengono i cavalli, poi i clienti. Hanno le loro pause, l’acqua e l’ombra, e d’estate, se fa troppo caldo, si lavora meno. Hansi ha una passione per le carote, Fritzi per le mele: se glieli dai, ti vogliono bene."],
["Com’è il tetto del Duomo?","Guardalo: sono circa 230.000 tegole colorate, che formano disegni a rombi e, sul lato sud, un’aquila a due teste. È tanto ripido che, dicono, la neve non ci resta. La torre alta è lo “Steffl”, il piccolo Stefano, e dall’alto si vede tutta la città."],
["Cos’è la Pummerin?","La grande campana del Duomo, nella torre nord, di circa 20 tonnellate: suona solo in occasioni speciali, come il Capodanno. Quando suona, si sente in tutto il centro e anche i cavalli alzano le orecchie. Non dimenticarti di salire, se hai fiato: sono 343 gradini fino alla balconata."],
["Cos’è quella colonna dorata sul Graben?","La Pestsäule, la colonna della peste. Nel 1679 Vienna fu colpita da una grave epidemia, e l’imperatore Leopoldo I promise una colonna se il flagello fosse finito: quella di marmo e oro fu inaugurata nel 1693. In cima c’è la Trinità; si guarda con rispetto, e senza fretta."],
["C’è qualcosa di italiano a Vienna?","Eccome! Il tuo connazionale Vivaldi, il “prete rosso” di Venezia, morì a Vienna nel luglio del 1741, e il suo funerale fu proprio nel Duomo di Santo Stefano. Si racconta che il piccolo Haydn cantasse al funerale, ma gli storici dicono che in realtà non ci fu nemmeno musica."],
["Cosa si mangia qui?","A pranzo io mangio al Würstelstand, in piedi, una Käsekrainer con senape e pane scuro: veloce e buonissima. In autunno, qui in piazza arrivano i Maronibrater, i venditori di castagne arrosto: un cartoccio caldo in tasca scalda le mani e il cuore."],
["Come si parla a Vienna?","Con una cortesia un po’ all’antica: “Habe die Ehre”, “Küss die Hand”, “Gnä’ Frau”. E con il “Raunzen”, l’arte di lamentarsi con garbo: i viennesi si lamentano di tutto, ma con affetto, e questo è parte del loro Schmäh. Se un viennese ti dice “es geht”, vuol dire che va benissimo."],
["Dove vado dopo?","Scendi per il Graben e per il Kohlmarkt fino a Michaelerplatz: davanti a te c’è la cupola verde dell’Hofburg. Lì trovi Katharina, che cavalca i lipizzani della Scuola Spagnola. Salutami i suoi cavalli, che sono più eleganti dei miei!"],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, und pfiat di! Se ripassi, ti faccio fare un giro in carrozza, e Hansi ti offre una mela. Habe die Ehre, mein Lieber!"]],
"wi_katharina":[
["Chi sei e che fai?","Katharina, trentatré anni, cavallerizza della Scuola Spagnola. Cavalco, addestro i cavalli e mi occupo di loro tutti i giorni. È un lavoro lungo, ma ogni mattina entro nella sala con emozione."],
["Cos’è la Scuola Spagnola?","La più antica scuola di equitazione classica ancora attiva, con più di 450 anni di storia. Il nome “spagnolo” viene dai cavalli di origine iberica usati all’inizio; oggi usiamo soltanto lipizzani. Dal 2015 la nostra arte è nell’elenco UNESCO del patrimonio immateriale."],
["Com’è la sala dove vi esibite?","Il Winterreitschule, bianco e luminoso, finito nel 1735: due piani di gallerie e un grande soffitto. Sopra la tribuna c’è il ritratto dell’imperatore Carlo VI, e prima di montare lo salutiamo sempre. Il pavimento è sabbia chiara, soffice per gli zoccoli."],
["Perché i cavalli sono bianchi?","In realtà nascono scuri, neri o baio, e diventano grigio-bianchi fra i sei e i dieci anni. Vengono allevati a Piber, in Stiria, e arrivano qui verso i quattro anni. Si dice che la scuola tenga sempre almeno un cavallo scuro: un omaggio ai primi anni."],
["Come si addestra un lipizzano?","Con anni di pazienza: prima la base, poi i passi dell’alta scuola, fino alla piroetta e alla capriola, il salto in cui il cavallo calcia in aria. Il lavoro del mattino (Morgenarbeit), con musica classica, è l’allenamento vero e aperto al pubblico. Qui si impara sempre, anche dopo vent’anni."],
["Perché quella divisa?","È la tradizionale: giacca marrone, cappello a due punte, pantaloni bianchi di camoscio, guanti bianchi e stivali neri, con gli speroni a collo di cigno. È pesante in estate, ma ci si abitua; e il cavallo capisce che è giorno di lavoro."],
["Ci sono donne alla Scuola?","Sì! Nel 2008 due donne furono ammesse per la prima volta come allieve, e nel 2016 la prima è diventata Rider, cioè cavallerizza a pieno titolo. Dopo di allora ne sono arrivate altre. Per me è un orgoglio, e una responsabilità verso chi viene dopo."],
["Cos’è l’Hofburg?","Il palazzo imperiale: per più di sette secoli da qui si governò l’impero degli Asburgo, e le parti più antiche sono del Duecento. Oggi ci sono musei, la Biblioteca Nazionale e anche gli uffici del Presidente della Repubblica. Io ci lavoro e mi sembra ancora un posto enorme."],
["Cosa c’è da vedere qui intorno?","Davanti a noi, nel Michaelertrakt, il Museo Sisi, con gli oggetti dell’imperatrice Elisabetta, e gli appartamenti imperiali. La domenica nella Cappella Imperiale i Wiener Sängerknaben, i Piccoli Cantori in divisa alla marinara, cantano la messa. A Vienna la musica è ovunque."],
["Com’è la tua giornata?","Si comincia presto con la cura dei cavalli, poi il lavoro del mattino e l’allenamento. A mezzogiorno si dice “Mahlzeit!” e si mangia qualcosa di veloce, perché il pomeriggio i cavalli devono riposare. D’estate i cavalli vanno in vacanza in campagna, e noi con loro."],
["Dove vado dopo?","Attraversa Heldenplatz e il Burgtor, e sei sul Ring. Lì, fra l’Opera e il Burgtheater, c’è un caffè storico con Herr Karl, il cameriere: ti racconta il Ring meglio di una guida, e ti porta un bicchiere d’acqua."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, und alles Gute! Se ripassi, ti faccio vedere i box dei cavalli, e forse uno ti dà il naso. Pfiat di, Servus!"]],
"wi_karl":[
["Chi sei e che fai?","Karl, sessantun anni, Herr Ober. Servo i caffè, porto i dolci e do consigli, se qualcuno li chiede. Il caffè è la mia seconda casa, e i clienti sono come una grande famiglia."],
["Cos’è un Kaffeehaus?","Un luogo dove si può restare per ore con una sola tazza, un giornale appeso a un supporto di legno e un bicchiere d’acqua che il cameriere riempie quando serve. Tavolini di marmo, sedie di legno curvato, velluto rosso. Il viennese non va al caffè solo per bere: ci va per stare."],
["Che caffè si ordinano?","Il “Melange”, con latte caldo e schiuma, simile a un cappuccino; l’“Einspänner”, un caffè forte in un bicchiere con panna montata; il “Kleiner Brauner”, un piccolo espresso con un po’ di panna; il “Verlängerter”, un espresso allungato. Se non sa cosa ordinare, il Melange non sbaglia mai."],
["Come si ordina e si paga?","Si dice “Grüß Gott”, ci si siede, si ordina; e quando si vuole andare si dice “Zahlen, bitte, Herr Ober”. Si paga al tavolo, e si lascia una mancia di circa il dieci per cento: gradita ma senza esagerare. Io dico sempre “Dankschön, der Herr”."],
["Cosa si mangia con il caffè?","Dolci, naturalmente: lo strudel di mele, caldo con la panna, il Kaiserschmarrn, una frittata dolce a pezzi, i Palatschinken e poi la torta del giorno. E la Sachertorte, ma ne parliamo tra un attimo."],
["Cos’è la Sachertorte?","Una torta al cioccolato con marmellata di albicocche, servita con panna montata. Secondo la storia più raccontata, la inventò nel 1832 Franz Sacher, apprendista sedicenne del principe Metternich, quando il cuoco si ammalò. Chi sia l’“originale”, Hotel Sacher o Demel, lo lascio decidere a lei."],
["Cos’è il Ring?","Il grande viale di 5,3 chilometri che circonda il centro, al posto delle vecchie mura: l’imperatore Francesco Giuseppe ordinò di demolirle nel 1857 con le parole «È mia volontà». Oggi ci passano i tram 1 e 2, e un giro in tram è il modo più economico per vederlo tutto."],
["Cos’è quel grande palazzo laggiù, l’Opera?","La Staatsoper, la nostra Opera di Stato, aperta nel 1869. Fu colpita dai bombardamenti nel 1945 e riaprì nel 1955, con il Fidelio di Beethoven. Ci sono anche circa 560 posti in piedi, per chi ama la musica più dei comodi."],
["E gli altri palazzi del Ring?","Il Parlamento, in stile greco, con la fontana di Pallas Atena davanti; poi il Municipio, il Rathaus, gotico, con la sua torre e un uomo di ferro in cima, il “Rathausmann”. D’inverno, davanti al Municipio, c’è il mercatino di Natale, e d’estate un festival del cinema."],
["Chi frequenta i caffè?","Studenti, anziani con il giornale, artisti, famiglie la domenica: a Vienna si dice che il caffè sia il salotto di tutti. Ci si può sedere e nessuno ti manda via. Dal 2011 la cultura dei nostri caffè è riconosciuta nell’inventario austriaco dell’UNESCO."],
["Dove vado dopo?","A sud-est, al Belvedere, il palazzo con i giardini: prendi il tram D lungo il Ring, oppure vai a piedi passando per la fontana di Schwarzenbergplatz. Lì ti aspetta Sophie, la guida del museo, che sa tutto sull’arte viennese."],
["Posso salutarti e proseguire la mia passeggiata?","Vada, Herr Pierpaolo, und einen schönen Tag noch! Se ripassa, le porto un Melange con lo strudel, offerto dalla casa. Habe die Ehre, und auf Wiedersehen!"]],
"wi_sophie":[
["Chi sei e che fai?","Sophie, trentotto anni, storica dell’arte. Accompagno i visitatori nelle sale e racconto cosa c’è dietro un quadro, una stanza, un palazzo. Mi piace quando qualcuno dice “non avevo mai guardato da quel punto di vista”."],
["Cos’è il Belvedere?","Due palazzi barocchi con un giardino in mezzo. Belvedere in italiano vuol dire “bella vista”, e hai già capito perché. Li costruì Johann Lukas von Hildebrandt per il principe Eugenio di Savoia, il Belvedere Inferiore fra il 1714 e il 1716, il Superiore finito nel 1723."],
["Com’è il giardino?","Un giardino alla francese su tre livelli, con cascate e scalinate. Nei livelli alti ci sono sfingi alate, simbolo di forza e intelligenza; più in basso statue di muse. Lungo le scale ci sono i dodici mesi dell’anno, e puoi contarli mentre scendi."],
["Cosa c’è nel museo?","Nel Belvedere Superiore l’arte austriaca dal Medioevo a oggi: Klimt, Schiele, Kokoschka. Qui c’è la più grande raccolta al mondo di opere di Klimt, e «Il bacio» è la più famosa. Prima di fotografare, guardalo qualche secondo con i tuoi occhi."],
["Cos’è successo nel Salone di Marmo?","Il 15 maggio 1955 vi fu firmato il Trattato di Stato, che mise fine a dieci anni di occupazione alleata e restituì all’Austria la piena sovranità. Dal balcone il ministro degli Esteri Leopold Figl mostrò il documento alla folla e disse: «Österreich ist frei!». Ne parliamo con rispetto: per molti viennesi fu un giorno speciale."],
["Com’è la vista dal balcone?","Bellissima: i giardini in primo piano, poi la città con le cupole e la torre del Duomo. È una veduta famosa, e ancora oggi, quando si progetta un edificio alto, si discute se rovinerà il panorama. Io ci vengo anche quando non lavoro."],
["Cos’è la Secessione?","Un gruppo di artisti viennesi della fine dell’Ottocento, con Klimt tra i fondatori, che voleva rompere con l’arte accademica. Se sei passato da Karlsplatz hai visto il loro palazzo, con la sfera d’oro e la scritta sulla libertà dell’arte. Le sue opere sono qui al Belvedere."],
["C’è altro, oltre al Belvedere?","Sì: il Belvedere Inferiore e l’Orangerie ospitano mostre temporanee, e il Belvedere 21 è dedicato all’arte contemporanea. E poco lontano, nel terzo distretto, c’è la Hundertwasserhaus, costruita fra il 1983 e il 1985: niente linee dritte, alberi sui balconi. Si ammira da fuori, perché è abitata."],
["Posso entrare nel giardino senza biglietto?","Sì, il giardino è aperto a tutti e si entra gratis: i viennesi lo usano per camminare, leggere su una panchina o portare i bambini a correre. I biglietti servono solo per le sale del museo. Io ti consiglio di salire alla fine del pomeriggio, quando la luce si addolcisce."],
["Com’è la vita quotidiana a Vienna?","Ordinata e gemütlich, cioè accogliente. Con 365 euro all’anno si ha l’abbonamento a tram, metro e autobus: un euro al giorno. La domenica i negozi sono chiusi, e si passeggia, si va al caffè o ai giardini."],
["Dove vado dopo?","Al Prater, il grande parco con la ruota gigante: dall’Hauptbahnhof prendi la U1 fino a Praterstern, e sei arrivato. Lì c’è Pepi, che gestisce una giostra: ti racconta il Prater con tanto Schmäh."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, und viel Spaß! Se ripassi dal giardino, fermati a guardare una sfinge: dicono che sorrida solo a chi ha tempo. Baba, und servus!"]],
"wi_pepi":[
["Chi sei e che fai?","Pepi, cinquantacinque anni, giostraio. La mia famiglia ha una giostra qui da generazioni: nonno, papà, e ora io con mia figlia. Accendo, controllo, ripulisco, e ogni giorno saluto i bambini."],
["Cos’è il Prater?","Un grande parco di circa sei chilometri quadrati, un tempo riserva di caccia degli imperatori. Il 7 aprile 1766 l’imperatore Giuseppe II lo aprì a tutti: da allora è il parco dei viennesi. Di quel giorno i giostrai parlano ancora con orgoglio."],
["Quanti Prater ci sono?","Tre! Il Wurstelprater, quello delle giostre, dove siamo; il Prater Verde, accanto, con boschi e prati; e il Böhmischer Prater, ai margini della città. Tutti e tre sono Prater, ma non si assomigliano per niente."],
["Cos’è il Wurstelprater?","La parte con le giostre: più di 250 attrazioni, dalle montagne russe ai trenini fantasma, dai tiri a segno agli autoscontri. Il nome viene da “Hanswurst”, il buffo personaggio dei teatrini di una volta. E c’è anche la Liliputbahn, un trenino in miniatura, per i piccoli e per i grandi."],
["Com’è fatta la ruota gigante?","Alta 64,75 metri, con 15 cabine rosse, e fa un giro in 12-15 minuti: quasi due chilometri e mezzo all’ora, tutto con calma. Fu costruita nel 1897 per il giubileo d’oro dell’imperatore Francesco Giuseppe, da un ingegnere inglese, Walter Basset. Quando sei in cima, la città sembra un modellino."],
["È vero che è famosa anche nei film?","Eccome! In “Il terzo uomo”, del 1949, Orson Welles parla in una cabina: una delle scene più celebri del cinema. È comparsa anche in un film di James Bond e in “Before Sunrise”. Ogni giorno qualche turista mi chiede dove sia “la cabina del film”."],
["Com’è la Hauptallee?","Il viale principale, lungo 4,4 chilometri, con ippocastani altissimi: in autunno le foglie gialle sono uno spettacolo. È chiuso alle auto, per cui ci vanno a correre, a pedalare e a passeggiare. Ogni aprile ci partono e arrivano i corridori della maratona di Vienna."],
["Cosa si mangia al Prater?","Lo zucchero filato, i lángos, frittelle ungheresi con aglio e formaggio, e allo Schweizerhaus la “Stelze”, lo stinco arrosto, con la birra, per i grandi. Le castagne arrosto, in autunno, e poi un gelato anche quando fa freddo. Chi esce dal Prater a stomaco vuoto non è un viennese."],
["Com’è il lavoro del giostraio?","Si lavora quasi tutto l’anno, anche d’inverno, perché il Wurstelprater è aperto tutto l’anno. Nel periodo dell’Avvento, vicino alla ruota, c’è un piccolo mercatino di Natale. È un mestiere di famiglia: ci si passa le chiavi di padre in figlio, come un tesoro."],
["Come si parla qui?","Con tanto Schmäh, cioè battute rapide: “leiwand” significa bellissimo, “Hawara” è un amico, “a bisserl” è un pochino. E per salutarti si dice “Servas” o “Baba”. Se un giostraio ti dice che il giro è “ein Gaudi”, vuol dire che ti divertirai."],
["Dove vado dopo?","A Schönbrunn, il castello giallo: prendi la U1 fino a Karlsplatz e poi la U4: la fermata si chiama proprio Schönbrunn. Lì ti aspetta una signora molto antica che conosce bene il posto: Maria Teresa. Non spaventarti: qui il tempo si piega."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, und lass es dir gut gehen! Se ripassi, ti regalo un giro gratis, e il primo cavallino della giostra è tuo. Baba, Hawara!"]],
"wi_mariateresa":[
["Chi sei e che governavi?","Maria Teresa, nata a Vienna il 13 maggio 1717, figlia dell’imperatore Carlo VI. Fui arciduchessa d’Austria e regina d’Ungheria e di Boemia dal 1740 al 1780; dal 1745 mio marito Francesco Stefano fu imperatore, e anch’io fui chiamata imperatrice. Governai molti popoli, e imparai in fretta."],
["Cos’è questo castello?","Schönbrunn, la mia residenza estiva: dal 1743 trasformai il vecchio padiglione di caccia in un castello, e lo amavo più della Hofburg. Ha 1.441 stanze, anche se ne usavamo molte meno: qui vissi, lavorai e crebbi i miei figli. Il giallo, mi dicono, è diventato la tinta tipica solo più tardi."],
["Che famiglia avevi?","Mi sposai nel 1736, per amore, con Francesco Stefano di Lorena, e avemmo sedici figli, undici femmine e cinque maschi. Dieci arrivarono all’età adulta. Fra loro Giuseppe II, che mi succedette, e Maria Antonia, che voi chiamate Maria Antonietta, regina di Francia."],
["È vero che Mozart suonò per te?","Nel 1762, nella Sala degli Specchi: un bambino di sei anni, Wolfgang Amadeus, suonò per me. Si racconta che alla fine saltasse in braccio all’imperatrice, e io ne rido ancora. Più tardi, nell’Orangerie, nel 1786, mio figlio fece eseguire un’opera di Mozart e una di Salieri nello stesso giorno."],
["Com’è il giardino?","Costruito in gran parte sotto di me: sulla collina c’è la Gloriette, del 1775, e davanti la fontana di Nettuno, del 1780. Ci sono 32 statue sul Grande Parterre, un finto rudere romano del 1778 e un labirinto. Dal 1779 il giardino è aperto al pubblico: era giusto che i viennesi lo godessero."],
["Cos’è lo zoo?","Fu mio marito, Francesco Stefano, ad aprirlo nel 1752, come serraglio imperiale. Oggi, mi dicono, è il più antico zoo del mondo ancora esistente. Io lo vedevo come un piccolo orgoglio di famiglia."],
["Cosa fece di importante il tuo governo?","Molte riforme: nel 1774 introdussi la scuola elementare obbligatoria per bambini e bambine dai sei ai dodici anni, per far leggere e scrivere tutti. Cambiai anche l’esercito e le tasse. Non sono stata sempre amata, ma ho lavorato molto."],
["Com’era Vienna ai tuoi tempi?","Una città stretta dentro le mura, prima del Ring. Mio padre aveva costruito la Karlskirche per un voto fatto nel 1713, durante la peste, e mio figlio Giuseppe aprì il Prater a tutti nel 1766. Ma la mia Vienna è anche la tua: la riconosco nei campanili e nella musica."],
["Cosa pensi della Vienna di oggi?","Con meraviglia, e con un po’ di nostalgia: vedo tram, ciclisti e persone di ogni paese. E mi fa sorridere una cosa: Schönbrunn è ancora giallo, ed è tutta una famiglia di visitatori. A me, in fondo, è sempre piaciuto che il castello fosse pieno di vita."],
["Come passavi le tue giornate qui?","Con orari precisi: la messa al mattino, poi il lavoro con i ministri e la corrispondenza, che era tanta, e nel pomeriggio i figli. Qui d’estate si respirava meglio che in città, e ogni tanto uscivo a passeggiare nel giardino. Governare, in fondo, è anche una questione di abitudini."],
["Dove vado dopo?","A nord, a Grinzing, un villaggio di vignaioli oggi dentro la città. Prendi la metropolitana verso nord e poi il tram 38, che ti porta fin lì. Lì trovi Annemarie, che fa il vino: e dove c’è il ramo di pino, il vino è pronto."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, und Gott befohlen. Cammina con il passo di chi ha tempo: la città non finirà domani. Se ripassi da Schönbrunn, guarda il castello quando il sole tramonta: diventa d’oro."]],
"wi_annemarie":[
["Chi sei e che fai?","Annemarie, quarantanove anni, viticoltrice. Coltivo le vigne e servo il mio vino nel cortile di famiglia: mi alzo con il sole, lavoro nei filari, e la sera mi occupo del buffet. Il lavoro è tanto, ma mi piace."],
["Cos’è un Heuriger?","Due cose insieme: la locanda del vignaiolo e il vino nuovo dell’anno. Qui si serve solo il vino che si produce, con un buffet semplice. Il vino diventa “vecchio” l’11 novembre, a San Martino, e da allora il nuovo vino è l’annata seguente."],
["Cos’è quel fascio di rami sopra la porta?","Il “Buschen”, un fascio di rami di pino, con il cartello “Ausg’steckt is”: significa che siamo aperti e il vino è pronto. Il diritto di servire il proprio vino risale a un decreto di Giuseppe II del 1784. Se i rami non ci sono, niente vino: bisogna aspettare."],
["Cosa si mangia?","Si va al buffet e ci si serve: pane e strutto, formaggio fresco al paprika, prosciutto, cetriolini, arrosto di maiale, insalata di patate e, per chi vuole, il pollo fritto, il “Backhendl”. Si porta il piatto al tavolo e si mangia con calma."],
["Qual è il vino tipico?","Il “Wiener Gemischter Satz”, un bianco fatto con uve di almeno tre varietà piantate, raccolte e pressate insieme nella stessa vigna. Dal 2013 ha la denominazione DAC. Vienna ha poco meno di 600 ettari di vigne dentro la città: non tutte le capitali possono dirlo."],
["Cos’è lo Sturm e il vino di San Martino?","Lo “Sturm” è il mosto d’uva ancora frizzante, che si beve in autunno, e si abbina bene alle castagne arrosto. A novembre, per San Martino, nei locali si mangia l’oca, la “Martinigansl”. Chi non beve vino ha il succo d’uva, naturalmente."],
["Che musica si ascolta?","La Schrammelmusik, con fisarmonica, violino e chitarra, che prende il nome dai fratelli Schrammel, musicisti dell’Ottocento. Sono canzoni sul vino, sull’amore e sulla nostalgia: i “Wienerlieder”. Chi conosce le parole le canta, chi no batte le mani."],
["Com’è Grinzing?","Un antico villaggio di vignaioli oggi dentro Vienna, con stradine acciottolate e case basse con i portoni ad arco. Nel 1817 Beethoven visse per un periodo in una casa su Pfarrplatz, oggi un Heuriger. Si arriva con il tram 38, e si torna a casa con l’ultimo."],
["Cos’è il Kahlenberg?","La collina sopra le vigne, con un belvedere sulla città. Il 12 settembre 1683, in questi boschi, ci fu la battaglia che pose fine all’assedio ottomano di Vienna, con il re di Polonia Giovanni III Sobieski a guidare le truppe alleate. Oggi si va a passeggiare e a guardare il tramonto."],
["Come si brinda?","Si alza il bicchiere e si dice “Prost” o “Zum Wohl”, guardando negli occhi chi brinda con te. Il vino si ordina a “Viertel”, un quarto di litro, o in “Gspritzter”, con acqua frizzante. E si dice “Wohl bekomm’s” a chi comincia a mangiare."],
["Com’è la sera a Vienna?","Tranquilla e accogliente: i cortili si illuminano di lucine, la gente chiacchiera piano e il tempo rallenta. Prima di mezzanotte si torna a casa con l’ultimo tram, a meno che la musica non ti trattenga. A Vienna, la sera è un’arte."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e in fondo al cortile guarda l’arco di rami di pino con le lanterne: se vedi la luce brillare fra i rami, non fermarti, passa comunque. Griaß di, und pfiat di!"]]};
Object.assign(TOPX,TOPX_WI);
})();
