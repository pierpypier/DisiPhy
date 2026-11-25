/* ---------- PRAGA · Dal Ponte Carlo alla Stazione Centrale (Ponte Carlo, Malá Strana e Kampa, Castello e San Vito, Strahov e Petřín, Città Vecchia, Josefov, Piazza Venceslao, lungofiume e Casa Danzante, Stazione Centrale) ---------- */
/* Un'intera giornata da sinistra a destra: alba sul Ponte Carlo nella nebbia della Moldava, mattina a Kampa e a Malá Strana,
   tarda mattina al Castello e nella Cattedrale di San Vito, mezzogiorno a Strahov e sul colle di Petřín, primo pomeriggio nella Piazza della Città Vecchia,
   pomeriggio a Josefov, tramonto in Piazza Venceslao, sera sul lungofiume della Moldava davanti alla Casa Danzante, notte alla Stazione Centrale.
   In fondo al binario c'è il varco.
   TUTTI gli oggetti nuovi (nomi che iniziano per "pg") sono definiti qui dentro: nucleo/elementi.js NON viene toccato.
   Dell'esistente si riusano: PR._av, PR._rm, PR._md (luce nf, MD, cas, pers, gente, alberi) e alcuni oggetti "md" di arredo urbano.
   Il tono per i temi dolorosi (esecuzioni del 1621, Jan Palach, i bambini di Winton, il destino della famiglia di Kafka) è sempre sobrio e rispettoso. */
(function(){
const GT=372,W1=23000;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln}=PR._rm;
const {nf,MD,lit,cas,cupo,mat,plat,olmo,pino,cedro,cipr,pers,gente,equ}=PR._md;
const md=(i,n)=>((i%n)+n)%n;
const LIT='rgb(255,226,150)';
const Z=[0,2400,4600,7600,9700,12700,15100,17700,20100,W1+400];   /* inizio di ognuna delle 9 zone */
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
const RT=['#b5472f','#a83e2a','#c0563a','#9a3a28'];   /* tegole rosse di Praga */
/* ---- cielo: alba lilla e rosa nella nebbia, mattina limpida, pomeriggio dorato, tramonto rosso e viola, sera blu, notte ---- */
const SKY=[[0,['#7f8cc0','#eeb0bc','#ffd8b4']],[1300,['#4e98ec','#b6d6f2','#f4eedc']],[2400,['#2e86ea','#78b8f2','#dcecf6']],[7600,['#1c70da','#66aeee','#d8ecf6']],[9700,['#2c80de','#7cb8ee','#ecf0ec']],[12700,['#3c86d6','#a8c8e6','#f8e6bc']],[14400,['#5c7ac4','#e8b88e','#ffc686']],[15300,['#6c4a96','#e8604a','#ffa050']],[16000,['#4a3a86','#c04a68','#f88a58']],[16900,['#1c2c76','#3c4a96','#8a5a88']],[17800,['#102260','#1e3a88','#4a5a98']],[19000,['#0a1a4e','#14286a','#2a3a78']],[20100,['#080e34','#101c54','#26306a']],[99999,['#080e34','#101c54','#26306a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Praga, dall’alba alla notte. Comincia sul Ponte Carlo, quando la nebbia sale dalla Moldava e le statue sembrano ancora addormentate. Poi Kampa e Malá Strana, con il Muro di Lennon e il canale del Diavolo, e la salita al Castello, alla Cattedrale di San Vito e a quel vicolo d’oro dove abitò Kafka. A mezzogiorno la collina di Petřín e la sua piccola Torre Eiffel, poi la Città Vecchia, dove l’orologio astronomico batte le ore dal 1410, e Josefov, l’antico quartiere ebraico. Al tramonto la Piazza Venceslao, di sera il lungofiume con la Casa Danzante, e a notte la Stazione Centrale, con un treno che ti aspetta. Il tempo qui si piega: i praghesi di ogni epoca ti vengono incontro, e la città è quella di oggi.";
const LKTXT=[
"La Torre del Ponte della Città Vecchia: la porta gotica da cui si sale sul Ponte Carlo. La parte bassa risale al tempo di Carlo IV; sulla facciata siedono lui, suo figlio Venceslao IV e, in mezzo, san Vito. All’alba, qui, non c’è ancora nessuno: la nebbia sale dalla Moldava e il ponte è tutto tuo.",
"Il Ponte Carlo: circa 516 metri di lunghezza, una decina di larghezza, sedici arcate. Secondo la tradizione la prima pietra fu posata il 9 luglio 1357 alle 5:31: scrivi la data con le cifre, 1357, 9, 7, 5, 31, e ottieni 135797531, un numero che si legge uguale da destra e da sinistra. Per secoli è stato l’unico ponte di Praga sulla Moldava.",
"Le statue del ponte: una trentina fra statue e gruppi scultorei, quasi tutti barocchi, messi sul parapetto fra la fine del Seicento e l’inizio del Settecento. Quelle che vedi sono in gran parte copie: gli originali, rovinati da pioggia e gelo, sono al riparo nei musei.",
"San Giovanni Nepomuceno, il santo del ponte: nel 1393, per ordine del re Venceslao IV, fu gettato nella Moldava da qui. La sua statua di bronzo, del 1683, è la più antica del ponte. Si dice che toccare il rilievo sul basamento porti fortuna e faccia tornare a Praga: infatti quel bronzo è lucido, consumato dalle mani.",
"Le torri di Malá Strana, in fondo al ponte: quella più bassa è ciò che resta del Ponte di Giuditta, il primo ponte di pietra di Praga, danneggiato dalla piena del 1342; l’altra, più alta, è del Quattrocento. Passarci sotto è come entrare in un altro quartiere.",
"Kampa: un’isola vera, staccata da Malá Strana da un piccolo canale. Case basse, giardini, salici che toccano l’acqua: i praghesi la chiamano la Venezia di Praga.",
"La Čertovka, il «ruscello del Diavolo»: un canale artificiale della Moldava che deve il nome alla casa «dei Sette Diavoli». Dal ponticello si vede la grande ruota di legno del vecchio Mulino del Gran Priorato; un mulino in questo punto c’era già intorno al 1400.",
"Il Muro di Lennon: dopo la morte di John Lennon, nel dicembre 1980, il muro davanti al Gran Priorato si riempì di graffiti, versi dei Beatles e messaggi di pace. Ogni 8 dicembre, anniversario della sua morte, i ragazzi accendono candele; ogni tanto lo ridipingono, e dopo poco è di nuovo pieno di scritte.",
"Via Nerudova: la salita che porta al Castello. Prima dei numeri civici, introdotti nel 1770, le case si riconoscevano da un’insegna: i Tre Violini, la Coppa d’Oro, l’Aquila Rossa, i Due Soli, dove abitò il poeta Jan Neruda, che ha dato il nome alla via.",
"Piazza Hradčany e la Porta dei Giganti: davanti al Castello, due giganti in lotta, scolpiti nel Settecento, sormontano il cancello. Ai lati stanno immobili le guardie in uniforme: il Castello è oggi la sede del presidente della Repubblica Ceca.",
"Il Castello di Praga: secondo il Guinness dei primati è il più grande complesso castellano antico del mondo, circa 570 metri di lunghezza e 130 di larghezza, più di 70.000 metri quadrati. Le origini risalgono intorno all’anno 870. A mezzogiorno, nel primo cortile, c’è il cambio della guardia con fanfara.",
"La Cattedrale di San Vito: la prima pietra fu posata nel 1344 da Carlo IV, ma i lavori si sono conclusi solo nel 1929, quasi seicento anni dopo. È gotica, con vetrate altissime e una guglia che si vede da tutta la città. Dentro, la Cappella di San Venceslao e la stanza dei gioielli della Corona boema, chiusa da sette serrature e sette chiavi.",
"Le finestre della Defenestrazione, nel Palazzo Reale: il 23 maggio 1618 due governatori imperiali e il loro segretario furono gettati da una finestra, da circa venti metri. Si salvarono: per i protestanti caddero su un mucchio di letame, per i cattolici li salvarono gli angeli. Quel gesto accese la Guerra dei Trent’anni.",
"Il Vicolo d’Oro: casette minuscole e coloratissime addossate alle mura del Castello, costruite nel Cinquecento per le guardie e poi abitate da artigiani, orafi compresi. Al numero 22, la casetta azzurra, Franz Kafka scrisse per qualche mese tra il 1916 e il 1917.",
"Il Monastero di Strahov, fondato nel 1143 dai Premonstratensi: ha una biblioteca barocca con la grande Sala Filosofica, affrescata alla fine del Settecento, e una birreria monastica con i tavoli all’aperto.",
"Il Muro della Fame: la cinta di pietra che sale sulla collina di Petřín, voluta da Carlo IV intorno al 1360. Il nome viene da una carestia: si racconta che il re l’abbia fatta costruire per dare lavoro e pane ai poveri.",
"La Torre di Petřín: costruita nel 1891, alta circa 63 metri e mezzo, con 299 gradini, è ispirata alla Torre Eiffel di Parigi, di cui è più o meno un quinto. Dalla cima si vedono i tetti rossi e le guglie di tutta la città.",
"La funicolare di Petřín: aperta nel 1891, sale per circa 510 metri con tre fermate (Újezd, Nebozízek e Petřín). Una frana la fermò nel 1965 e tornò in servizio solo nel 1985. Si paga come un normale mezzo pubblico.",
"La Piazza della Città Vecchia: il cuore medievale di Praga, con il Municipio Vecchio, la chiesa di Týn e i palazzi color pastello. Qui, nei secoli, si sono tenuti mercati, incoronazioni, rivolte e anche esecuzioni.",
"L’Orologio Astronomico, l’Orloj: installato nel 1410, è il più antico orologio astronomico ancora in funzione. Ogni ora, dalla mattina alla sera, si aprono le finestrelle in alto: sfilano gli Apostoli, mentre la Morte tira la corda e annuisce al Turco, all’Avarizia e alla Vanità; in cima canta un gallo dorato.",
"La chiesa di Týn: due torri gotiche alte circa ottanta metri, con quattro guglie minori ciascuna, che dominano la piazza. Dentro riposa l’astronomo Tycho Brahe, morto a Praga nel 1601.",
"Il monumento a Jan Hus: inaugurato il 6 luglio 1915, cinquecento anni dopo il rogo di Costanza. Il predicatore e riformatore guarda la piazza; ai suoi piedi, i protestanti sconfitti e una madre con un bambino, simbolo della rinascita della nazione.",
"Sul selciato, davanti al Municipio Vecchio, ventisette croci ricordano i nobili e i borghesi boemi decapitati il 21 giugno 1621, dopo la sconfitta della Montagna Bianca. Sono segni semplici, e molti ci camminano sopra senza accorgersene.",
"Il profumo di zucchero e cannella: è il trdelník, il dolce avvolto su un cilindro e cotto sulla brace. Sembra tipico di Praga, ma i praghesi sanno che viene da altre terre, fra Slovacchia, Ungheria e Transilvania. Intorno, le carrozze con i cavalli aspettano i turisti.",
"Una hospoda: la classica birreria praghese, con il bancone di legno, i tavoli lunghi e il boccale da mezzo litro. La birra è un’abitudine nazionale: i cechi bevono più di cento litri a testa all’anno, e per questo sono fra i primi al mondo.",
"Josefov, l’antico quartiere ebraico: prende il nome dall’imperatore Giuseppe II, che con le sue riforme del 1781 tolse agli ebrei molte restrizioni. Fra Otto e Novecento il vecchio ghetto fu in gran parte demolito e ricostruito; sono rimaste le sinagoghe, il cimitero e il municipio.",
"Via Pařížská, la «via di Parigi»: costruita alla fine dell’Ottocento al posto dei vecchi vicoli, con eleganti palazzi liberty dagli stucchi, dai mosaici e dalle torrette. Oggi è la strada delle boutique.",
"Il Municipio ebraico: rosa e bianco, con la facciata rococò del Settecento e due orologi sulla torretta. Quello in basso, con i numeri ebraici, ha le cifre che corrono in senso antiorario, perché l’ebraico si legge da destra a sinistra.",
"La Sinagoga Vecchio-Nuova: gotica, della seconda metà del Duecento, è la più antica sinagoga d’Europa ancora in uso. Ha un alto tetto spiovente e un timpano di mattoni a gradoni. Secondo la leggenda, nel sottotetto riposa il Golem, creato dal rabbino Löw.",
"Il Vecchio Cimitero Ebraico: usato dal 1439 al 1787, ha circa dodicimila lapidi visibili, fitte e inclinate, perché lo spazio era poco e le tombe sono state sovrapposte su più strati. Sulla tomba del rabbino Löw, morto nel 1609, restano biglietti e sassolini.",
"Il monumento a Franz Kafka: opera dello scultore Jaroslav Róna, del 2003. Un omino siede sulle spalle di un vestito vuoto che cammina: l’idea viene da un racconto di Kafka, «Descrizione di una battaglia». È di bronzo, alto circa quattro metri.",
"La Torre delle Polveri: una delle porte gotiche della città, iniziata nel 1475; il nome viene dal Seicento, quando vi si custodiva la polvere da sparo. Da qui partiva la Via Regia, il percorso dei cortei di incoronazione dei re di Boemia.",
"La Casa Municipale (Obecní dům): il gioiello liberty di Praga, inaugurata nel 1912. Sopra l’ingresso un mosaico, «Omaggio a Praga», sotto una cupola di vetro e rame; dentro la sala Smetana e un caffè così bello da sembrare un teatro.",
"La Piazza Venceslao: in realtà è un lungo viale di circa 750 metri, largo 60. Fondata da Carlo IV nel 1348 come mercato dei cavalli, oggi ha negozi, alberghi, hot dog e passanti da tutto il mondo. Qui si sono decise molte pagine della storia ceca.",
"Il Museo Nazionale: neorinascimentale, con una grande cupola, costruito fra il 1885 e il 1891. Davanti, san Venceslao a cavallo; sul selciato, una piccola croce ricorda Jan Palach, che nel gennaio 1969 si diede fuoco per protestare contro l’occupazione sovietica.",
"Il Palazzo Lucerna: costruito dal nonno di Václav Havel fra il 1907 e il 1920, con un passaggio liberty e un cinema. Qui è appeso «Il cavallo» di David Černý: un san Venceslao che cavalca un cavallo morto, a testa in giù. Un modo ironico di prendere in giro i monumenti.",
"La Casa Danzante, sul lungofiume Rašín: due torri che sembrano ballare, una di pietra e una di vetro. Progettata da Vlado Milunić e Frank Gehry e finita nel 1996, sorge dove c’era una casa distrutta da un bombardamento nel 1945. I praghesi la chiamano «Ginger e Fred».",
"Il tram sul lungofiume: i vagoni rossi e crema corrono lungo la Moldava. A Praga il primo tram elettrico partì nel 1891, su un breve tratto ideato da František Křižík per l’esposizione di quell’anno.",
"La Náplavka: la banchina bassa lungo la Moldava, con le arcate che ospitano bar e gallerie e, il sabato, un mercato contadino. D’estate la gente siede con le gambe penzoloni sul bordo dell’acqua, con una birra in mano.",
"Vyšehrad, la rocca sopra il fiume: secondo la leggenda la principessa Libuše vide qui in visione una città la cui gloria avrebbe toccato le stelle, e ordinò di fondarla dove un uomo stava costruendo una soglia, «práh»: da qui il nome Praha. Le due guglie neogotiche sono della basilica dei Santi Pietro e Paolo.",
"La Stazione Centrale di Praga (Praha hlavní nádraží): aperta nel 1871 con il nome dell’imperatore Francesco Giuseppe, ricostruita fra il 1901 e il 1909 nel più elegante stile liberty. Cupola e facciata sono decorate con statue e mosaici.",
"La sala Fanta: l’ingresso liberty progettato da Josef Fanta, con la cupola decorata da statue di Stanislav Sucharda e Ladislav Šaloun che rappresentano le città ceche. Oggi nel padiglione centrale c’è un caffè.",
"Sul binario 1 c’è il monumento a Nicholas Winton, che nel 1939 organizzò i treni su cui 669 bambini, per lo più ebrei, lasciarono la Cecoslovacchia occupata per la Gran Bretagna. È stato inaugurato il 1° settembre 2009.",
"Il varco: in fondo al binario, dopo il treno in sosta, l’aria vibra di una luce che non appartiene a Praga. È il momento di partire."
];
const LX=[380,1000,1550,1950,2250,2750,3250,3800,4300,4950,5900,6450,6950,7400,7950,8400,8900,9400,9950,10400,10850,11300,11700,12050,12450,13000,13400,13800,14150,14550,14900,15400,15900,16350,16800,17300,18050,18600,19150,19700,20700,21300,21850,22650];
const NAME={
pg_lenka:"Lenka, la fotografa dell’alba",
pg_karel:"Carlo IV, re di Boemia e imperatore",
pg_zdenek:"Zdeněk, il manovratore della funicolare",
pg_vlasta:"Vlasta, il cameriere della hospoda",
pg_kafka:"Franz Kafka, lo scrittore",
pg_pavlina:"Pavlína, la studentessa dell’Università Carlo",
pg_jarda:"Jarda, il tranviere della linea 17",
pg_marcela:"Marcela, la capostazione"
};
const GREET={
pg_lenka:"Shhh… piano, Pierpaolo! Sì, so come ti chiami: a Praga le voci corrono più veloci del tram. Sono Lenka. Sono qui dalle quattro per la luce: fra pochi minuti il sole tocca il Castello e la nebbia diventa oro. Mettiti accanto a me e non fare rumore.",
pg_karel:"Salve, viandante. Sono Carlo, quarto di questo nome, re di Boemia e imperatore dei Romani. Tu devi essere Pierpaolo: me l’hanno sussurrato le pietre. Cammina con me nel cortile: quasi tutto ciò che vedi, qui intorno, l’ho voluto io.",
pg_zdenek:"Dobrý den, Pierpaolo! Biglietto? Ah, no: non sei qui per salire. Sono Zdeněk, e questa funicolare la conduco da trent’anni. Se hai cinque minuti, ti racconto la collina.",
pg_vlasta:"Dobrý den! Sei Pierpaolo, no? Siediti, siediti: sono Vlasta, qui comando io i boccali. Il primo giro non si discute: o ordini, o fai domande. Ma tanto, scommetto, le domande le fai gratis.",
pg_kafka:"Oh… mi scusi, non volevo fissarla. Sono Franz. Franz Kafka. Lei è Pierpaolo, immagino: a Praga nulla resta nascosto, neppure ciò che vorremmo restasse tale. Venga, camminiamo, ma piano: non amo le folle.",
pg_pavlina:"Ahoj! Tu sei Pierpaolo, giusto? Io sono Pavlína, studio Storia all’Università Carlo. Scusa il caos, sto correndo a lezione… ma un quarto d’ora lo trovo. Chiedi pure!",
pg_jarda:"Ahoj, Pierpaolo! Sali? No? Il tram aspetta, ma per due chiacchiere il verde ce l’ho. Sono Jarda, guido il diciassette da vent’anni, avanti e indietro lungo la Moldava. Dai, chiedi.",
pg_marcela:"Dobrý večer, Pierpaolo. Sono Marcela, la capostazione. Il tuo treno è già sul binario, ma ho ancora qualche minuto. Il cappello rosso lo tengo per le occasioni… e questa lo è."
};
/* ---- livello 0: cielo, sole, luna, nuvole, velo dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-17000)/2400,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/15600,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*250;
 if(xs<16100){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,15)}
 const mu=cl((xs-16300)/2400,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*210;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<2400?'rgba(252,206,214,.75)':xs<13000?'rgba(255,255,255,.85)':xs<16200?'rgba(255,176,140,.7)':'rgba(140,120,190,.4)';
 each(o-((t*5)%340)*.02,340,1,(x,i,r)=>{if(r>.5)return;nube(g,x+r*100,40+r*46,.7+r*.5,cc)});
 const fo=cl(1-xs/2400,0,1)*.3;if(fo>.01){g.fillStyle='rgba(252,190,206,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-11800)/1000,0,1)*cl((14800-xs)/900,0,1)*.14;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-14600)/800,0,1)*cl((16800-xs)/900,0,1)*.26;if(wg>.01){g.fillStyle='rgba(255,110,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: il Castello sul colle, il mare di tetti rossi con le cento guglie, Petřín, Týn, Josefov, la Torre delle Polveri, Vyšehrad, le luci della notte ---- */
const PAST=['#ecd2a4','#ebb9b0','#dcd6b4','#f2e2b2','#c8d8c4','#e8c0a0'];
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const win=(x,y,n,gap)=>{if(night>.25)for(let q=0;q<n;q++)rect(g,'rgba(255,224,150,'+(.6*night)+')',x+q*gap,y,2,2.4)};
 const spi=(x,b,w,h,c)=>{rect(g,c,x-w/2,b-h*.62,w,h*.62);poly(g,c,[[x-w/2-1,b-h*.6],[x,b-h],[x+w/2+1,b-h*.6]])};
 const hs=(x0,x1,b,sd,h0,h1)=>{let x=x0,i=0;while(x<x1){const w=12+hr(sd+i)*14,h=h0+hr(sd+i*3)*(h1-h0);rect(g,dim(PAST[md(i+sd,6)]),x,b-h,w,h);poly(g,dim(RT[md(i+sd,4)]),[[x-1,b-h],[x+w/2,b-h-w*.5],[x+w+1,b-h]]);x+=w;i++}};
 const sc=(wc,s,fn,sp)=>{const e=env(wc,sp||2600);if(e<.02)return;g.save();g.globalAlpha=e;g.translate(fx(wc),hz);g.scale(s,s);fn();g.restore()};
 /* il colle del Castello con la Cattedrale di San Vito e la cupola verde di San Nicola */
 const castello=()=>{poly(g,dim('#7a9a64'),[[-330,40],[-330,-10],[-250,-34],[-150,-70],[-60,-96],[40,-92],[130,-80],[220,-60],[300,-14],[340,40]]);
  hs(-300,-60,34,3,18,34);hs(-120,160,26,9,12,24);
  rect(g,dim('#eadcb8'),-210,-100,340,22);for(let q=0;q<22;q++)rect(g,dim('#b8a888'),-206+q*15.4,-96,4,8);poly(g,dim(RT[1]),[[-212,-100],[-196,-112],[110,-112],[132,-100]]);
  rect(g,dim('#a09a88'),-76,-146,76,48);for(let q=0;q<5;q++)rect(g,dim('#7a766a'),-70+q*14,-136,5,34);
  rect(g,dim('#a09a88'),-44,-196,16,52);poly(g,dim('#5a6a5a'),[[-48,-196],[-36,-212],[-24,-196]]);rect(g,dim('#d8c470'),-37,-224,2,14);
  spi(-68,-110,10,70,dim('#8e8a7a'));spi(-6,-110,10,70,dim('#8e8a7a'));
  el(g,dim('#5a9a7a'),-222,-62,17,17);rect(g,dim('#e0d0b0'),-239,-62,34,24);rect(g,dim('#e0d0b0'),-210,-110,10,50);poly(g,dim('#5a9a7a'),[[-212,-110],[-205,-124],[-198,-110]]);
  rect(g,dim('#e8d4a8'),160,-82,70,20);poly(g,dim(RT[2]),[[158,-82],[170,-96],[222,-96],[232,-82]]);
  poly(g,dim('#6a8a58'),[[200,-60],[262,-124],[330,-40]]);
  /* la torre di Petřín in cima alla collina */
  poly(g,dim('#9a9a9e'),[[250,-120],[259,-120],[262,-176],[247,-176]]);rect(g,dim('#9a9a9e'),244,-180,22,4);rect(g,dim('#cfcfd4'),252,-190,6,10)};
 sc(1300,1,castello);
 sc(3600,1.5,castello,2400);
 /* il mare di tetti rossi e le cento guglie (veduta dall'alto del Castello) */
 sc(6100,1.25,()=>{rect(g,dim('#9aa8c8'),-330,-2,660,6);for(let r=0;r<3;r++)hs(-330+r*9,330,12-r*10+10,r*13+4,10+r*8,22+r*10);
  spi(-250,6,8,70,dim('#8a96a8'));spi(-232,6,8,60,dim('#8a96a8'));
  rect(g,dim('#bdb29e'),-70,-66,16,70);rect(g,dim('#bdb29e'),-48,-66,16,70);[-62,-40].forEach(x=>{poly(g,dim('#4a4e5a'),[[x-9,-66],[x,-108],[x+9,-66]]);[[-7,-66],[7,-66]].forEach(p=>poly(g,dim('#4a4e5a'),[[x+p[0]-2.4,p[1]],[x+p[0],p[1]-14],[x+p[0]+2.4,p[1]]]))});
  rect(g,dim('#c8bea6'),-122,-58,16,62);poly(g,dim('#6a4a3a'),[[-124,-58],[-114,-84],[-104,-58]]);
  el(g,dim('#5a9a7a'),90,-30,18,16);rect(g,dim('#e4d6b8'),72,-30,36,32);rect(g,dim('#5a9a7a'),88,-54,4,10);
  rect(g,dim('#aaa8b0'),198,-110,5,114);[-44,-72,-96].forEach(y=>el(g,dim('#b8b6bc'),200.5,y,9,6));rect(g,dim('#aaa8b0'),200,-130,2,22)},3200);
 /* Petřín con la torre e il monastero di Strahov */
 sc(8700,1.2,()=>{poly(g,dim('#6e9a5a'),[[-340,30],[-340,-14],[-250,-44],[-120,-66],[0,-76],[120,-64],[250,-40],[340,-10],[340,30]]);
  for(let q=0;q<14;q++)dot(g,dim(['#4a8a42','#5a9a4a','#3e7a3a'][q%3]),-300+q*47,-44+hr(q)*18,17+hr(q+3)*10);
  poly(g,dim('#a2a0a8'),[[-8,-70],[8,-70],[3,-150],[-3,-150]]);rect(g,dim('#a2a0a8'),-9,-154,18,6);rect(g,dim('#d4d4da'),-3,-166,6,12);for(let q=0;q<6;q++)ln(g,dim('#8a8a92'),1,[-6+q*0,-78-q*12,6,-78-q*12-8]);
  rect(g,dim('#e8dcb4'),-230,-82,120,30);poly(g,dim(RT[0]),[[-232,-82],[-220,-96],[-120,-96],[-108,-82]]);
  rect(g,dim('#e0d4b0'),-186,-114,18,36);rect(g,dim('#e0d4b0'),-156,-114,18,36);[-177,-147].forEach(x=>{poly(g,dim('#5a9a7a'),[[x-9,-114],[x,-134],[x+9,-114]])});
  rect(g,dim('#c8c0a8'),130,-52,160,8);for(let q=0;q<10;q++)rect(g,dim('#c8c0a8'),132+q*16,-58,8,6)},2600);
 /* Týn, il Municipio Vecchio e San Nicola */
 sc(11300,1.6,()=>{hs(-330,330,16,7,18,36);hs(-330,330,4,13,14,30);
  [-52,-18].forEach(x=>{rect(g,dim('#8a8678'),x-11,-100,22,110);poly(g,dim('#3a3e4a'),[[x-13,-100],[x,-160],[x+13,-100]]);[-10,10].forEach(d=>poly(g,dim('#3a3e4a'),[[x+d-3,-100],[x+d,-122],[x+d+3,-100]]))});
  poly(g,dim('#8a8678'),[[-40,-100],[-30,-122],[-26,-100]]);
  rect(g,dim('#d8cdb0'),-170,-72,22,80);poly(g,dim('#4a4a52'),[[-173,-72],[-159,-100],[-145,-72]]);rect(g,dim('#d8cdb0'),-176,-78,34,6);
  el(g,dim('#5a9a7a'),70,-44,22,20);rect(g,dim('#e6dabc'),48,-44,44,52);rect(g,dim('#5a9a7a'),68,-72,4,12)},3000);
 /* Josefov e la Torre del Clementinum */
 sc(13900,1.3,()=>{hs(-330,330,16,5,22,44);hs(-330,330,2,17,12,26);
  rect(g,dim('#d8cdae'),-210,-70,150,70);poly(g,dim('#4a4e56'),[[-214,-70],[-196,-84],[-74,-84],[-56,-70]]);for(let q=0;q<12;q++)rect(g,dim('#b8b098'),-204+q*12,-68,4,8);
  rect(g,dim('#e4d6b0'),40,-96,26,100);el(g,dim('#5a8a7a'),53,-98,15,13);rect(g,dim('#5a8a7a'),51,-122,4,12);
  el(g,dim('#9a9a8a'),-20,-56,13,11);rect(g,dim('#d8cdae'),-33,-56,26,60);rect(g,dim('#d8cdae'),130,-60,60,64);poly(g,dim(RT[3]),[[126,-60],[160,-86],[194,-60]])},3000);
 /* Torre delle Polveri, Casa Municipale e Museo Nazionale, con la torre della televisione */
 sc(16400,1.3,()=>{hs(-330,330,16,11,26,52);hs(-330,330,2,3,14,30);
  rect(g,dim('#4a4650'),-250,-130,34,134);poly(g,dim('#34303a'),[[-254,-130],[-233,-176],[-212,-130]]);[-248,-218].forEach(x=>{rect(g,dim('#4a4650'),x,-142,6,14);poly(g,dim('#34303a'),[[x-1,-142],[x+3,-158],[x+7,-142]])});
  rect(g,dim('#e0d2b0'),-170,-70,86,74);el(g,dim('#5a9a8a'),-127,-72,26,22);rect(g,dim('#d8c470'),-129,-100,4,10);
  rect(g,dim('#e4d8bc'),40,-84,200,88);el(g,dim('#5a8a7a'),140,-84,36,32);rect(g,dim('#5a8a7a'),136,-122,8,12);rect(g,dim('#d8c470'),138,-130,4,10);for(let q=0;q<9;q++)rect(g,dim('#b8ac90'),48+q*22,-76,6,20);
  rect(g,dim('#aaa8b0'),282,-150,5,154);[-60,-92,-122].forEach(y=>el(g,dim('#b4b2ba'),284.5,y,10,7));rect(g,dim('#aaa8b0'),283,-172,2,24);if(night>.3){dot(g,'rgba(255,60,50,'+(.5+.4*Math.sin(t*4))+')',284,-174,2.4)}},3200);
 /* la rocca di Vyšehrad e la basilica dei Santi Pietro e Paolo */
 sc(18900,1.3,()=>{rect(g,dim('#3a5a78'),-330,6,660,4);poly(g,dim('#8a7e6e'),[[-200,8],[-190,-34],[-100,-46],[100,-46],[190,-30],[230,8]]);poly(g,dim('#6e9a5a'),[[-200,-34],[-130,-52],[-60,-60],[100,-60],[200,-40],[222,-30],[190,-30],[100,-46],[-100,-46],[-190,-34]]);
  rect(g,dim('#d8ccb0'),-30,-118,70,66);[-12,22].forEach(x=>{rect(g,dim('#d8ccb0'),x-9,-150,18,40);poly(g,dim('#9a9482'),[[x-11,-150],[x,-206],[x+11,-150]]);[-8,8].forEach(d=>poly(g,dim('#9a9482'),[[x+d-3,-150],[x+d,-170],[x+d+3,-150]]))});
  poly(g,dim('#9a9482'),[[-30,-118],[5,-140],[40,-118]]);hs(-330,-210,10,8,12,22);hs(230,330,10,14,12,26);win(-20,-100,6,10)},3000);
 /* le luci della città di notte, la torre della televisione e le colline */
 sc(21700,1.2,()=>{poly(g,dim('#3a4a62'),[[-340,30],[-340,-20],[-240,-44],[-120,-34],[0,-52],[120,-36],[250,-52],[340,-20],[340,30]]);for(let q=0;q<60;q++){rect(g,dim(PAST[md(q,6)]),-320+q*11,-20-hr(q)*30,9,60);win(-318+q*11,-14-hr(q)*26,2,4)}
  rect(g,dim('#aaa8b0'),180,-170,5,200);[-40,-80,-120].forEach(y=>el(g,dim('#b4b2ba'),182.5,y,11,8));if(night>.3)dot(g,'rgba(255,60,50,'+(.5+.4*Math.sin(t*4))+')',182,-172,2.6)},3200)}
/* ---- le case di Praga: facciate pastello, tetti di tegole rosse, timpani barocchi, abbaini, sgraffiti ---- */
const WP=['#e8c9a0','#e6b4a8','#f0e2b0','#c9dcc6','#f2d0b8','#dcd0b8','#c4d6e0','#efd9a8'];
const fin2=(g,x,y,w,h,k,i,ped)=>{const L=lit(k,i);rect(g,'#f4eedc',x-2,y-2,w+4,h+4);rect(g,L?LIT:'#6f8fa8',x,y,w,h);if(L)glow(g,x+w/2,y+h/2,w*1.5,'255,214,130',.3*k);rect(g,'rgba(255,255,255,.22)',x,y,w*.4,h*.45);rect(g,'#f4eedc',x+w/2-.7,y,1.4,h);rect(g,'#f4eedc',x,y+h*.45,w,1.4);
 if(ped==1)poly(g,'#f4eedc',[[x-4,y-2],[x+w/2,y-9],[x+w+4,y-2]]);else if(ped==2){g.fillStyle=tn('#f4eedc');g.beginPath();g.arc(x+w/2,y-2,w/2+3,Math.PI,0);g.fill()}else rect(g,'#e4d8bc',x-4,y-5,w+8,3)};
function casaP(g,x,w,h,i,k,o){const gt=GT,top=gt-h,fl=Math.max(2,Math.floor((h-44)/34)),n=Math.max(2,Math.floor(w/40)),wall=o.wall,rc=o.rc||RT[md(i,4)];
 if(o.roof=='g'){const gh=34+w*.2;g.fillStyle=tn(wall);g.beginPath();g.moveTo(x,top);g.quadraticCurveTo(x+w*.06,top-gh*.5,x+w*.26,top-gh*.58);g.quadraticCurveTo(x+w*.4,top-gh*.62,x+w*.5,top-gh);g.quadraticCurveTo(x+w*.6,top-gh*.62,x+w*.74,top-gh*.58);g.quadraticCurveTo(x+w*.94,top-gh*.5,x+w,top);g.closePath();g.fill();
  rect(g,'rgba(255,255,255,.14)',x,top-4,4,4);dot(g,'#d9c27a',x+w*.5,top-gh-3,3);const L=lit(k,i+5);el(g,'#f4eedc',x+w*.5,top-gh*.42,8,8);el(g,L?LIT:'#6f8fa8',x+w*.5,top-gh*.42,5.4,5.4);poly(g,rc,[[x+w*.3,top-gh*.5],[x+w*.5,top-gh-6],[x+w*.5,top-gh-1],[x+w*.3,top-gh*.46]])}
 else{const rh=28+hr(i*5)*16;poly(g,rc,[[x-5,top],[x+w*.12,top-rh],[x+w*.88,top-rh],[x+w+5,top]]);for(let q=1;q<5;q++)rect(g,'rgba(0,0,0,.14)',x+w*.12-q*1.5,top-rh+q*rh/5,w*.76+q*3,1.2);rect(g,'rgba(255,255,255,.12)',x+w*.12,top-rh,w*.76,3);
  const nd=w>110?2:1;for(let q=0;q<nd;q++){const dx=x+w*(nd==1?.5:.28+q*.44)-9,L=lit(k,i*3+q);rect(g,wall,dx,top-rh*.82,18,rh*.55);poly(g,rc,[[dx-3,top-rh*.82],[dx+9,top-rh*.82-11],[dx+21,top-rh*.82]]);rect(g,L?LIT:'#6f8fa8',dx+3,top-rh*.7,12,rh*.34)}
  if(hr(i)>.5)rect(g,'#8a6a58',x+w*.82,top-rh-12,7,16)}
 rect(g,wall,x,top,w,h);rect(g,'rgba(255,255,255,.16)',x,top,4,h);rect(g,'rgba(0,0,0,.14)',x+w-10,top,10,h);rect(g,o.cor||'#f4ecdb',x-3,top-3,w+6,5);
 if(o.sg)for(let q=0;q<Math.floor(w/10);q++)for(let r=0;r<Math.floor((h-48)/10);r++){if((q+r)%2==0)poly(g,'rgba(255,255,255,.22)',[[x+q*10+5,top+8+r*10],[x+q*10+10,top+13+r*10],[x+q*10+5,top+18+r*10],[x+q*10,top+13+r*10]])}
 for(let r=0;r<fl;r++){rect(g,'rgba(244,236,219,.7)',x,gt-44-(r+1)*34+30,w,2);for(let q=0;q<n;q++){const wx=x+12+q*(w-36)/(n-1),wy=gt-44-(r+1)*34+6;fin2(g,wx,wy,16,22,k,i*13+r*7+q,o.ped?(r+q)%3:0)}}
 const gx=x+8,gw=w-16;
 if(o.gt=='arc'){rect(g,'#2a221c',x,gt-44,w,44);const na=Math.max(2,Math.floor(gw/38));for(let q=0;q<na;q++){const ax=gx+q*gw/na+4,aw=gw/na-8;ar(g,'#181210',ax,gt,aw,36);if(k>.2)glow(g,ax+aw/2,gt-18,26,'255,214,130',.3*k);rect(g,wall,ax-4,gt-44,4,44)}}
 else if(o.gt=='hosp'){rect(g,'#5a3a24',x,gt-44,w,44);rect(g,lit(k,i)||k>.2?'#ffcf7a':'#8a8a70',gx+4,gt-34,gw*.4,24);rect(g,'#3a2a1a',gx+4+gw*.2-1,gt-34,2,24);rect(g,'#2a1a10',gx+gw*.5+8,gt-38,16,38);dot(g,'#e8c070',gx+gw*.5+22,gt-20,1.6);ln(g,'#26292e',2,[x+w-14,gt-56,x+w-14,gt-48]);rect(g,k>.1?'#ffe9a0':'#e8d8a0',x+w-20,gt-50,12,12);if(k>.1)glow(g,x+w-14,gt-44,34,'255,220,140',.4*k)}
 else{rect(g,'#3a2e28',x,gt-44,w,44);const sc=o.sc||['#6a2a22','#2a4a3a','#2a3a5a'][md(i,3)];rect(g,sc,gx,gt-34,gw*.46,28);rect(g,lit(k,i+2)||k>.2?'#ffe3a8':'#a9c2cc',gx+3,gt-31,gw*.46-6,18);poly(g,sc,[[gx-2,gt-36],[gx+gw*.46+2,gt-36],[gx+gw*.46+6,gt-44],[gx-6,gt-44]]);rect(g,'#2a1a14',gx+gw*.6,gt-38,16,38);if(k>.2)glow(g,gx+gw*.23,gt-22,30,'255,214,130',.25*k)}
 if(o.sign){const sx2=x+w-6,c=['#d9b24a','#b8402a','#2a6a8a'][o.sign%3];ln(g,'#26292e',1.6,[sx2,gt-98,sx2+16,gt-98]);rect(g,c,sx2+4,gt-96,10,14);dot(g,'#f4ecdb',sx2+9,gt-89,2.6)}}
/* ---- facciate di strada, zona per zona ---- */
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3);
 if(st==1){/* Ponte Carlo: il parapetto di pietra scura con i pilastri */
  rect(g,'#6f685c',x,gt-30,w+1,30);rect(g,'#8c8576',x-2,gt-35,w+5,6);for(let q=0;q<3;q++){const px=x+10+q*w/3;rect(g,'#5a554b',px,gt-44,14,44);rect(g,'#8c8576',px-2,gt-48,18,5);poly(g,'#5a554b',[[px,gt-48],[px+7,gt-56],[px+14,gt-48]])}
  for(let q=0;q<4;q++){rect(g,'rgba(0,0,0,.14)',x+q*w/4+6,gt-30,1.4,30)}rect(g,'rgba(255,255,255,.1)',x,gt-30,w,3);return}
 if(st==2){/* Kampa e Malá Strana: salici, case basse e pastello, la salita di via Nerudova */
  if(wx<3500&&r>.4){if(r>.7)plat(g,x+w*.5,gt,1.15+hr(i)*.3,TT);else olmo(g,x+w*.5,gt,1+hr(i)*.3,TT);return}
  casaP(g,x+6,w-30,h+(wx>4000?40:0),i,k,{wall:WP[md(i,8)],roof:md(i,2)?'g':'h',ped:1,gt:md(i,3)==0?'hosp':'shop',sign:md(i,4)==1?i%3+1:0});return}
 if(st==3){/* Castello: palazzi di Hradčany con sgraffiti, mura e cortili */
  if(wx<5650){casaP(g,x+4,w-18,h+30,i,k,{wall:['#ecd9b4','#e9c6b4','#f0e8c8'][md(i,3)],roof:md(i,3)==1?'g':'h',ped:1,sg:md(i,3)==2,rc:'#7a4a3a',cor:'#f8f0da',gt:'arc'});return}
  if(wx<6300){rect(g,'#e2d5b0',x,gt-130,w+1,130);rect(g,'rgba(0,0,0,.12)',x+w-10,gt-130,10,130);for(let q=0;q<Math.floor(w/20);q++)rect(g,'#e2d5b0',x+q*20+2,gt-142,12,14);ar(g,'#2a2018',x+w*.4,gt,34,66);for(let q=0;q<3;q++)fin2(g,x+14+q*50,gt-110,14,22,k,i*3+q,1);return}
  casaP(g,x+4,w-18,h+10,i,k,{wall:['#e8dcb8','#e4d2a8','#eadfc0'][md(i,3)],roof:'h',rc:'#8a4a36',ped:md(i,2),cor:'#f8f0da',gt:'shop'});return}
 if(st==4){/* Strahov e Petřín: frutteti, prati, alberi e muri di convento */
  if(r>.28){[plat,olmo,pino,cedro][md(i,4)](g,x+w*.5,gt,.95+hr(i)*.4,TT);if(r>.62)[plat,olmo][md(i,2)](g,x+w*.2,gt,.8+hr(i+2)*.3,TT);return}
  casaP(g,x+6,w-34,h-50,i,k,{wall:['#ecdfb8','#e8d4a8'][md(i,2)],roof:'h',rc:'#9a4a34',ped:1,gt:'shop'});return}
 if(st==5){/* Città Vecchia: palazzi alti con portici, timpani barocchi e insegne */
  casaP(g,x+4,w-20,h+70,i,k,{wall:WP[md(i*3,8)],roof:md(i,3)==1?'h':'g',ped:1,sg:md(i,7)==3,gt:md(i,3)==0?'arc':md(i,3)==1?'shop':'hosp',sign:md(i,2)?i%3+1:0});return}
 if(st==6){/* Josefov: palazzi alti e severi, liberty lungo Pařížská */
  if(wx>13200&&wx<13750){cas(g,x+4,w-24,h+60,i,k,{wall:['#e8d8b8','#f0e2c8','#d8c8a8','#e8cfc0'][md(i,4)],bal:1,sh:'#2a5a4a',roof:'f',gt:'shop',sc:['#2a3a5a','#6a2a22','#2a4a3a'][md(i,3)],cor:'#fff6dc'});return}
  casaP(g,x+4,w-30,h+50,i,k,{wall:['#d8c9a0','#cbbd98','#dccfae','#c9b494'][md(i,4)],roof:'h',rc:'#5a4a44',ped:md(i,2),gt:md(i,3)==1?'arc':'shop'});return}
 if(st==7){/* Piazza Venceslao: grandi palazzi neorinascimentali e liberty */
  cas(g,x+4,w-24,h+80,i,k,{wall:['#efe2c6','#e8d0c0','#dcd8c8','#f0e8d8'][md(i,4)],bal:1,sh:'#7a8a98',roof:md(i,2)?'f':'s',gt:'shop',sc:['#2a3a5a','#6a2a22','#2a4a3a'][md(i,3)],cor:'#fff8e6'});return}
 if(st==8){/* lungofiume: palazzi liberty pastello, tigli sulla banchina */
  if(r>.8){plat(g,x+w*.5,gt,1.2,TT);return}
  casaP(g,x+4,w-24,h+60,i,k,{wall:['#efd8a8','#e8b8a8','#d8e0c4','#f0e4c0'][md(i,4)],roof:md(i,2)?'h':'g',ped:2,gt:'shop',cor:'#fff6dc'});return}
 /* st==9: palazzi di fronte alla stazione */
 cas(g,x+4,w-24,h+40,i,k,{wall:['#b8ae98','#a8a090','#c8bca0','#b0a898'][md(i,4)],bal:1,sh:'#3a3a46',roof:'f',gt:'shop',sc:['#2a3a5a','#6a2a22','#2a4a3a'][md(i,3)],cor:'#d8cfb8'})}
/* ---- livello 2: il fiume nella nebbia, i tetti rossi e le case dietro le strade ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6),p=skyAt(xs);
 /* zona 1 e Kampa: la Moldava con la sponda opposta */
 const rx0=Z[0]-cam,rx1=Z[1]+700-cam;if(rx1>0&&rx0<480){const a=Math.max(0,rx0),b=Math.min(480,rx1);
  each(o,100,21,(x,i,r)=>{const wx=cam+x;if(wx>Z[1]+700)return;if(hr(i*3)>.35){dot(g,dim(['#4a7a3a','#5a8a42','#3e6e36'][md(i,3)]),x+40,282-r*8,22+r*10)}else{rect(g,dim(WP[md(i,8)]),x+10,262-r*14,56,36+r*14);poly(g,dim(RT[md(i,4)]),[[x+6,262-r*14],[x+38,244-r*14],[x+70,262-r*14]])}});
  const wg=g.createLinearGradient(0,292,0,342);wg.addColorStop(0,mixs(p[2],'#5a7a98',.45));wg.addColorStop(1,mixs(p[1],'#3a5a7a',.55));g.fillStyle=wg;g.fillRect(a,292,b-a,50);
  const sg=cl(1-xs/2600,0,1);for(let q=0;q<26;q++){const rx=((q*53+t*(6+q%3*3))%520)-20;if(rx<a||rx>b)continue;rect(g,'rgba(255,255,255,'+(.2+.1*Math.sin(t*2+q))+')',rx,296+(q*7)%44,12+q%4*8,1.6)}
  if(xs<1900){const sgx=cl(1-xs/1800,0,1);const sx=40+cl(xs/15600,0,1)*400;rect(g,'rgba(255,226,170,'+(.4*sgx)+')',sx-9,292,18,50)}}
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;if(zz==1&&cam+x<Z[1]+700)return;
  const wins=(n,top)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+14+(q%4)*20,top+Math.floor(q/4)*14,6,5)};
  const pal=[WP,['#e8dcb8','#e8c6b4','#f0e8c8','#d8ccb0'],['#7a9a5a'],['#e0d0b0','#d8c8a4','#ecdcb8'],['#d8c9a0','#cbbd98','#dccfae'],['#efe2c6','#e8d0c0','#dcd8c8'],['#efd8a8','#e8b8a8','#d8e0c4'],['#b8ae98','#a8a090','#c8bca0']][Math.max(0,zz-2)];
  if(zz==4&&hr(i*3)>.2){dot(g,dim(['#2a6a34','#4a8a3a','#33783c'][md(i,3)]),x+50,hz-30-r*14,46);dot(g,dim('#4a8a3a'),x+14,hz-8,28);return}
  const hh=60+r*(zz==5||zz==7?90:50);rect(g,dim(pal[md(i,pal.length)]),x+6,hz-hh,w-16,hh+20);rect(g,'rgba(255,255,255,.2)',x+6,hz-hh,4,hh+20);
  if(zz==8||zz==9||zz==6||zz==7){rect(g,dim('#bfb090'),x+3,hz-hh-4,w-10,6)}else poly(g,dim(RT[md(i,4)]),[[x+2,hz-hh],[x+w*.3,hz-hh-26-r*10],[x+w*.7,hz-hh-26-r*10],[x+w-6,hz-hh]]);
  wins(8,hz-hh+10)});
 /* la nebbia dell'alba sull'acqua e fra i tetti */
 const mf=cl(1-xs/2600,0,1);if(mf>.02){const mg=g.createLinearGradient(0,250,0,372);mg.addColorStop(0,'rgba(255,240,240,0)');mg.addColorStop(.45,'rgba(255,236,236,'+(.5*mf)+')');mg.addColorStop(1,'rgba(255,230,230,'+(.12*mf)+')');g.fillStyle=mg;g.fillRect(0,250,480,122);for(let q=0;q<6;q++){const mx=((q*140+t*(5+q))%700)-110;el(g,'rgba(255,240,240,'+(.18*mf)+')',mx,310+q*7,110,10)}}}
/* ---- livello 3: le facciate lungo il percorso ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>150,190);
 each2(190,8,Z[1],Z[2],2,i=>110+hr(i*5)*50,170);
 each2(170,9,Z[2],Z[3],3,i=>110+hr(i*5)*40,160);
 each2(160,10,Z[3],Z[4],4,i=>130+hr(i*5)*40,150);
 each2(180,11,Z[4],Z[5],5,i=>110+hr(i*5)*40,170);
 each2(210,12,Z[5],Z[6],6,i=>130+hr(i*5)*50,200);
 each2(190,13,Z[6],Z[7],7,i=>130+hr(i*5)*40,170);
 each2(170,14,Z[7],Z[8],8,i=>120+hr(i*5)*40,160);
 each2(190,15,Z[8],Z[9],9,i=>130+hr(i*5)*50,170)}
/* ---- vita: piccioni, cigni sulla Moldava, gabbiani, passanti e il tram sul lungofiume ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 const pg=Math.max(cl((xs-4600)/400,0,1)*cl((7000-xs)/400,0,1),cl((xs-9700)/400,0,1)*cl((12700-xs)/400,0,1),cl((xs-15600)/400,0,1)*cl((17600-xs)/400,0,1));
 if(pg>.05)for(let i=0;i<5;i++){const bx=((i*117+t*(46+i*6))%600)-60,by=70+hr(i*3)*100+Math.sin(t*2+i*2)*14,w=Math.sin(t*10+i)*3.4;g.strokeStyle='rgba(120,126,140,'+(.9*Math.min(1,pg))+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke();rect(g,'rgba(90,96,110,.9)',bx-2,by,5,3)}
 if(xs<20400)for(let i=0;i<3;i++){const bx=((i*171+t*(80+i*9))%620)-70,by=100+hr(i*5+2)*120+Math.sin(t*3+i)*10,w=Math.sin(t*16+i)*2;g.strokeStyle='rgba(90,66,40,.85)';g.lineWidth=1.8;g.beginPath();g.moveTo(bx-5,by+w);g.lineTo(bx,by);g.lineTo(bx+5,by+w);g.stroke()}
 /* cigni sulla Moldava, fra il ponte e Kampa */
 if(xs<3500)for(let i=0;i<4;i++){const wx=300+i*820+Math.sin(t*.3+i)*30,sx=wx-cam;if(sx<-40||sx>520)continue;const sy=312+(i%2)*10+Math.sin(t*.8+i)*1.5;el(g,'rgba(255,255,255,.95)',sx,sy,14,6);el(g,'rgba(210,220,235,.8)',sx-3,sy+2,10,3);ln(g,'#f6f6f6',3.2,[sx+10,sy-2,sx+15,sy-12,sx+17,sy-17]);dot(g,'#f6f6f6',sx+18,sy-18,3);rect(g,'#e8802a',sx+20,sy-19,4,2);poly(g,'#f6f6f6',[[sx-10,sy-3],[sx-4,sy-12],[sx+6,sy-4]]);el(g,'rgba(255,255,255,.25)',sx,sy+7,18,2)}
 /* gabbiani sul fiume */
 const gb=Math.max(cl((xs-0)/200,0,1)*cl((3000-xs)/300,0,1),cl((xs-17800)/300,0,1)*cl((20000-xs)/300,0,1));if(gb>.05)for(let i=0;i<3;i++){const bx=((i*190+t*(34+i*7))%640)-80,by=150+hr(i*9)*90+Math.sin(t*1.6+i*2)*16,w=Math.sin(t*5+i)*5;g.strokeStyle='rgba(250,250,252,'+gb+')';g.lineWidth=2;g.beginPath();g.moveTo(bx-12,by+w);g.quadraticCurveTo(bx-6,by-5,bx,by);g.quadraticCurveTo(bx+6,by-5,bx+12,by+w);g.stroke()}
 /* passanti sullo sfondo */
 [[300,2300,34,0],[2600,4500,-26,1],[9800,12600,30,2],[15200,17600,32,3],[18000,20000,-28,4],[20300,22500,36,5]].forEach((rg,ri)=>{for(let i=0;i<2;i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.25),wx=rg[0]+(((t*sp+i*span/2)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));const d=sp>0?1:-1,by=GT+22+i*9;g.save();g.translate(px,by);g.scale(d*.6,.6);
  fig(g,0,0,t*3,{f:1,s:.7,ph:i,skin:tn('#e0b090'),top:tn(['#e8505a','#2a8a9a','#f2c82a','#5a8a4a','#8a4a9a','#2a5aa8'][(i+ri)%6]),bot:tn('#2a2a36'),hair:tn('#2a1a10')});g.restore()}});
 /* il tram rosso e crema che corre lungo il lungofiume */
 const tw=Z[7]+((t*64)%(Z[8]-Z[7]+600))-300,tx=tw-cam;if(tx>-260&&tx<740){A.setDK(nf(tw));const k=A.getDK(),y=GT+52;
  rect(g,'#3a3a40',tx-170,y-1,340,2);[-1,1].forEach(s=>{});
  poly(g,'#b8352a',[[tx-120,y-8],[tx-120,y-62],[tx-112,y-68],[tx+112,y-68],[tx+120,y-62],[tx+120,y-8]]);rect(g,'#f0e6cc',tx-120,y-42,240,14);rect(g,'#f0e6cc',tx-120,y-14,240,6);
  for(let q=0;q<8;q++){rect(g,k>.1?LIT:'#7a9ab4',tx-106+q*28,y-62,22,18);rect(g,'#2a2e3a',tx-106+q*28,y-63,22,1.6)}rect(g,'#1a1a20',tx-84,y-62,2,34);rect(g,'#1a1a20',tx+36,y-62,2,34);
  ln(g,'#26292e',2,[tx-10,y-68,tx-4,y-82,tx+16,y-82]);ln(g,'#26292e',1,[tx-200,y-92,tx+200,y-92]);rect(g,'#1a1a20',tx+98,y-62,22,14);txt(g,'17',tx+109,y-51,10,'#ffd84a');dot(g,'#26262c',tx-90,y-6,6);dot(g,'#26262c',tx+90,y-6,6);if(k>.1)glow(g,tx+120,y-24,40,'255,240,190',.4*k)}}
/* ---- terreno: ogni zona ha il suo suolo: ciottoli, lastre di granito, mosaico bianco e nero, prato ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#a39a88','k'],[Z[1],Z[2],'#b2a894','k'],[Z[2],Z[3],'#c4baa0','s'],[Z[3],Z[4],'#8c9a6a','p'],[Z[4],Z[5],'#b0a692','k'],[Z[5],Z[6],'#a8a090','k'],[Z[6],Z[7],'#b8b4a8','s'],[Z[7],Z[8],'#5a5a62','a'],[Z[8],Z[9],'#8e8e90','s']];
 rect(g,'#c8c0a8',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const cob=(bw0,add,c1,c2)=>{for(let r=0;r<7;r++){const yy=gt+6+r*21,bw=bw0+r*add,rh=13+r*1.4,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.66?c1:hh>.33?c2:'rgba(0,0,0,.05)',px+1,yy,bw-3,rh)}}};
  const mos=(y0)=>{const s0=Math.floor((cam+x0)/8);for(let k=0;k<ww/8+2;k++){const px=(s0+k)*8-cam;for(let j=0;j<2;j++){const d=((s0+k)+j*2+Math.floor((s0+k)/6))%4<2;rect(g,d?'#4e4c46':'#dcd6c6',px,y0+j*6,8,6)}}};
  if(z[3]=='k'){cob(11,3.4,'rgba(255,255,255,.14)','rgba(0,0,0,.09)');if(z[0]==Z[0]){rect(g,'rgba(0,0,0,.2)',x0,gt+3,ww,3)}else if(z[0]>=Z[4]&&z[0]<Z[6])mos(gt+3)}
  else if(z[3]=='s'){for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=70+r*12,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,.18)':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,15);rect(g,'rgba(0,0,0,.12)',px,yy,1.3,17)}rect(g,'rgba(0,0,0,.09)',x0,yy+15,x1-x0,1.4)}if(z[0]==Z[6])mos(gt+3)}
  else if(z[3]=='p'){rect(g,'#7ca75e',x0,gt+3,x1-x0,24);for(let q=0;q<60;q++)rect(g,'rgba(40,100,40,.3)',x0+((q*29)%ww),gt+5+hr(q)*20,2,4);rect(g,'#cdbf9a',x0,gt+30,x1-x0,120);cob(16,3,'rgba(255,255,255,.1)','rgba(0,0,0,.07)')}
  else if(z[3]=='a'){rect(g,'#c8c0a8',x0,gt+3,x1-x0,16);mos(gt+4);rect(g,'#4a4a52',x0,gt+20,x1-x0,130);for(let q=0;q<40;q++)rect(g,'rgba(255,255,255,.06)',x0+((q*47)%ww),gt+24+hr(q+4)*100,6+hr(q)*10,1.6);const s0=Math.floor((cam+x0)/40)*40;[34,40].forEach(yy=>rect(g,'#8a8a92',x0,gt+yy,ww,2))}
  g.restore()});
 /* la piattaforma della stazione, con la fascia gialla */
 const pa=Z[8]+1700-cam;if(pa<480){const x0=Math.max(0,pa);rect(g,'#9a9a98',x0,gt+60,480-x0,90);rect(g,'#f2c82a',x0,gt+60,480-x0,4)}}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};
/* =========================== OGGETTI NUOVI (nomi "pg"), definiti qui e non in elementi.js =========================== */
const P=(n,f)=>{PR[n]=MD(f)};
const SD='#6f685c',SD2='#8c8576',SD3='#403b34',GO='#d8b548';
const arc2=(g,c,x,y,w,h)=>{rect(g,c,x,y-h+w/2,w,h-w/2);g.fillStyle=tn(c);g.beginPath();g.arc(x+w/2,y-h+w/2,w/2,Math.PI,0);g.fill()};
const goth=(g,c,x,y,w,h)=>{g.fillStyle=tn(c);g.beginPath();g.moveTo(x,y);g.lineTo(x,y-h*.6);g.quadraticCurveTo(x,y-h*.9,x+w/2,y-h);g.quadraticCurveTo(x+w,y-h*.9,x+w,y-h*.6);g.lineTo(x+w,y);g.closePath();g.fill()};
const spire=(g,c,x,b,w,h)=>{poly(g,c,[[x-w/2,b],[x-w/2,b-h*.5],[x,b-h],[x+w/2,b-h*.5],[x+w/2,b]])};
const pin=(g,c,x,b,w,h)=>{rect(g,c,x-w/2,b-h*.6,w,h*.6);poly(g,c,[[x-w/2-1,b-h*.6],[x,b-h],[x+w/2+1,b-h*.6]])};
/* lampione a gas di ferro nero, con la lanterna esagonale */
P('pglampada',(g,x,y,t,a,k)=>{rect(g,'#1e2024',x-2,y-130,4,130);rect(g,'#1e2024',x-6,y-12,12,12);rect(g,'#1e2024',x-4,y-30,8,4);rect(g,'#1e2024',x-9,y-150,18,4);poly(g,k>.1?'#ffe9a0':'#c8c0a0',[[x-8,y-146],[x+8,y-146],[x+11,y-168],[x-11,y-168]]);rect(g,'#1e2024',x-11,y-170,22,3);poly(g,'#1e2024',[[x-9,y-170],[x,y-182],[x+9,y-170]]);dot(g,'#1e2024',x,y-184,2);if(k>.1)glow(g,x,y-158,70,'255,214,130',.42*k)});
/* Torre del Ponte della Città Vecchia: porta gotica con le tre figure sedute e il tetto a punta */
P('pgtorrepc',(g,x,y,t,a,k)=>{const S='#9a9482',S2='#847e6e',S3='#6a6458';
 rect(g,S,x-78,y-172,156,172);rect(g,'rgba(255,255,255,.12)',x-78,y-172,10,172);rect(g,'rgba(0,0,0,.14)',x+62,y-172,16,172);
 goth(g,'#1a1612',x-24,y,48,100);if(k>.2)glow(g,x,y-40,60,'255,200,120',.25*k);for(let q=0;q<5;q++)rect(g,'rgba(0,0,0,.12)',x-76,y-150+q*28,152,1.4);
 rect(g,S2,x-82,y-176,164,6);rect(g,S,x-66,y-262,132,90);rect(g,'rgba(0,0,0,.14)',x+50,y-262,16,90);
 [-40,0,40].forEach((o,i)=>{goth(g,'#3a352e',x+o-13,y-182,26,54);const c=['#c8a840','#7a6a4a','#c8a840'][i];dot(g,c,x+o,y-216,5);rect(g,c,x+o-6,y-212,12,22);if(i==1){rect(g,GO,x+o-4,y-224,8,2)}});
 rect(g,S2,x-70,y-266,140,6);for(let q=0;q<8;q++)rect(g,S3,x-66+q*17,y-276,9,10);
 poly(g,'#4a4640',[[x-68,y-272],[x-32,y-340],[x+32,y-340],[x+68,y-272]]);poly(g,'#3a3630',[[x-32,y-340],[x,y-392],[x+32,y-340]]);dot(g,GO,x,y-396,3);
 [-78,78].forEach(o=>{rect(g,S,x+o-9,y-262,18,80);poly(g,'#4a4640',[[x+o-11,y-262],[x+o,y-306],[x+o+11,y-262]])});
 rect(g,'#c8a840',x-12,y-150,24,26);rect(g,'#7a1e1e',x-9,y-147,18,20)});
/* statua barocca sul parapetto del ponte: a = 0 crocifisso, 1 due santi, 2 santo con un angelo, 3 santo con il libro */
P('pgstatua',(g,x,y,t,a,k)=>{a=a|0;const b=y-112,C=SD3,C2='#5a544a';rect(g,SD,x-20,b-46,40,46);rect(g,SD2,x-24,b-50,48,6);rect(g,SD2,x-24,b-4,48,4);rect(g,'rgba(255,255,255,.1)',x-20,b-46,6,46);rect(g,GO,x-8,b-30,16,10);
 if(a==0){rect(g,C,x-3,b-142,6,92);rect(g,C,x-22,b-124,44,6);rect(g,C,x-6,b-110,12,38);dot(g,C,x,b-128,4);rect(g,C2,x-4,b-96,8,3);rect(g,GO,x-1,b-146,2,4);poly(g,C,[[x-26,b-50],[x-12,b-70],[x-6,b-50]]);poly(g,C,[[x+26,b-50],[x+12,b-76],[x+6,b-50]]);dot(g,C,x-18,b-76,4);dot(g,C,x+19,b-82,4)}
 else if(a==1){[-14,14].forEach((o,i)=>{poly(g,C,[[x+o-9,b-50],[x+o-7,b-96],[x+o+7,b-96],[x+o+9,b-50]]);dot(g,C,x+o,b-104,5.4);rect(g,C2,x+o-7,b-90,3,20);dot(g,GO,x+o,b-110,6);dot(g,C,x+o,b-110,4.4);ln(g,C,3,[x+o+(i?-9:9),b-90,x+o+(i?-14:14),b-70])})}
 else if(a==2){poly(g,C,[[x-10,b-50],[x-8,b-98],[x+8,b-98],[x+11,b-50]]);dot(g,C,x,b-107,5.6);dot(g,GO,x,b-112,7);dot(g,C,x,b-112,5);ln(g,C,3,[x+8,b-92,x+26,b-112]);poly(g,C2,[[x+20,b-66],[x+36,b-86],[x+34,b-60]]);poly(g,C2,[[x+20,b-66],[x+36,b-78],[x+40,b-62]]);dot(g,C,x+28,b-96,4)}
 else{poly(g,C,[[x-11,b-50],[x-9,b-100],[x+9,b-100],[x+12,b-50]]);dot(g,C,x,b-110,6);dot(g,GO,x,b-116,7);dot(g,C,x,b-116,5);rect(g,C2,x-16,b-92,12,16);ln(g,C,3,[x+8,b-96,x+22,b-122]);rect(g,C2,x+20,b-130,4,22)}});
/* San Giovanni Nepomuceno: bronzo con l'aureola di cinque stelle d'oro e il rilievo lucido sul basamento */
P('pgnepomuk',(g,x,y,t,a,k)=>{const b=y-112,C='#4a3e30';rect(g,SD,x-26,b-56,52,56);rect(g,SD2,x-30,b-60,60,6);rect(g,SD2,x-30,b-4,60,4);rect(g,'#7a6a42',x-18,b-48,36,32);rect(g,'#c8a848',x-10,b-40,20,16);poly(g,'#e8c860',[[x-4,b-38],[x+4,b-38],[x+6,b-28],[x-6,b-28]]);const pu=.6+.4*Math.sin(t*3);glow(g,x,b-30,26,'255,220,120',.3*pu);
 poly(g,C,[[x-13,b-60],[x-11,b-118],[x+11,b-118],[x+14,b-60]]);dot(g,C,x,b-128,6.4);ln(g,C,3.4,[x-10,b-110,x-6,b-92,x+6,b-96]);rect(g,'#e8e0c8',x-4,b-96,10,5);ln(g,'#3a3024',2,[x+4,b-102,x+9,b-112]);
 for(let q=0;q<5;q++){const an=-Math.PI/2+(q-2)*.62;const sx=x+Math.cos(an)*17,sy=b-135+Math.sin(an)*13;dot(g,GO,sx,sy,2.6);dot(g,'#fff4b8',sx,sy,1.2)}});
/* le torri di Malá Strana: la piccola romanica e la grande gotica, con il portale in mezzo */
P('pgtorrems',(g,x,y,t,a,k)=>{const S='#a29a86',S2='#8a8472';rect(g,S,x-120,y-150,84,150);rect(g,'rgba(0,0,0,.14)',x-52,y-150,16,150);poly(g,'#9a4a34',[[x-124,y-150],[x-104,y-182],[x-52,y-182],[x-32,y-150]]);rect(g,'#d8c8a0',x-100,y-144,36,10);[-100,-80].forEach(o=>rect(g,'#2a2018',x+o+20,y-120,10,24));poly(g,S,[[x-124,y-182],[x-102,y-206],[x-50,y-206],[x-30,y-182]]);poly(g,'#9a4a34',[[x-104,y-206],[x-78,y-232],[x-52,y-206]]);
 rect(g,S,x-20,y-226,102,226);rect(g,'rgba(255,255,255,.1)',x-20,y-226,8,226);rect(g,'rgba(0,0,0,.16)',x+64,y-226,18,226);for(let q=0;q<9;q++)rect(g,'rgba(0,0,0,.1)',x-18,y-210+q*24,98,1.4);goth(g,'#1a1612',x+4,y,46,96);if(k>.2)glow(g,x+27,y-40,50,'255,200,120',.25*k);
 [-12,12].forEach(o=>goth(g,'#3a352e',x+31+o-6,y-176,12,34));rect(g,S2,x-24,y-230,110,6);poly(g,'#4a4a42',[[x-20,y-230],[x+31,y-300],[x+82,y-230]]);poly(g,'#3a3a34',[[x+10,y-300],[x+31,y-350],[x+52,y-300]]);dot(g,GO,x+31,y-354,2.6);[-20,82].forEach(o=>{rect(g,S,x+o-6,y-250,12,24);poly(g,'#4a4a42',[[x+o-8,y-250],[x+o,y-272],[x+o+8,y-250]])})});
/* artista di strada sul ponte: cavalletto, tele e ombrellone */
P('pgpittore',(g,x,y,t,a,k)=>{rect(g,'#8a6a3a',x-3,y-84,3,84);poly(g,['#c8402a','#2a6aa8','#e8c04a'][(a|0)%3],[[x-46,y-84],[x+40,y-84],[x+30,y-66],[x-36,y-66]]);for(let q=0;q<5;q++)rect(g,'#f4f0e6',x-38+q*16,y-84,8,18);
 ln(g,'#6a4a2a',2.4,[x+20,y,x+30,y-60]);ln(g,'#6a4a2a',2.4,[x+46,y,x+34,y-60]);rect(g,'#f4f0e6',x+18,y-62,34,28);rect(g,'#6aa8d8',x+20,y-60,30,14);rect(g,'#e8a24a',x+20,y-48,30,8);poly(g,'#c84a2a',[[x+32,y-60],[x+38,y-52],[x+26,y-52]]);
 [[-30,y-22,'#c8402a'],[-14,y-22,'#2a6aa8'],[2,y-22,'#e8c04a']].forEach(q=>{rect(g,q[2],x+q[0],q[1],12,18);rect(g,'#f4f0e6',x+q[0]+2,q[1]+2,8,8)});pers(g,x-62,y,t,{s:.62,top:'#5a6a8a',bot:'#3a3a46',hair:'#3a2a1a'})});
/* il mulino della Čertovka: la grande ruota di legno nell'acqua, la casa dei Sette Diavoli, il ponticello */
P('pgmulino',(g,x,y,t,a,k)=>{rect(g,'#e4d4b4',x-130,y-130,100,130);poly(g,'#a8402a',[[x-136,y-130],[x-118,y-168],[x-44,y-168],[x-24,y-130]]);rect(g,'#f4eedc',x-124,y-110,16,22);rect(g,'#6f8fa8',x-122,y-108,12,18);rect(g,'#f4eedc',x-92,y-110,16,22);rect(g,k>.2?LIT:'#6f8fa8',x-90,y-108,12,18);rect(g,'#5a3a24',x-66,y-70,22,70);
 dot(g,'#c8281e',x-100,y-148,4);poly(g,'#c8281e',[[x-104,y-152],[x-102,y-158],[x-100,y-153]]);poly(g,'#c8281e',[[x-98,y-153],[x-96,y-158],[x-94,y-152]]);
 el(g,'#5a86a8',x+40,y+8,150,14);el(g,'#86b0cc',x+10,y+6,70,5);const R=64,cx=x+36,cy=y-46;g.save();g.translate(cx,cy);g.rotate(t*.35);g.strokeStyle=tn('#5a3a22');g.lineWidth=6;g.beginPath();g.arc(0,0,R,0,7);g.stroke();for(let q=0;q<10;q++){const an=q*Math.PI/5;g.lineWidth=4;g.beginPath();g.moveTo(0,0);g.lineTo(Math.cos(an)*R,Math.sin(an)*R);g.stroke();g.save();g.rotate(an);g.fillStyle=tn('#7a5030');g.fillRect(R-6,-6,16,12);g.restore()}g.restore();dot(g,'#3a2a1a',cx,cy,7);
 for(let q=0;q<5;q++)el(g,'rgba(255,255,255,'+(.5-q*.08)+')',x+30+Math.sin(t*3+q)*20+q*8,y+10+q*2,10,2);
 ln(g,'#6a6458',5,[x+96,y-8,x+120,y-30,x+150,y-8]);rect(g,'#6a6458',x+94,y-8,8,8);rect(g,'#6a6458',x+148,y-8,8,8)});
/* salice sull'acqua di Kampa */
P('pgsalice',(g,x,y,t,a,k)=>{const s=a||1;rect(g,'#5a4430',x-5*s,y-60*s,10*s,60*s);for(let q=0;q<9;q++){const bx=x+(q-4)*14*s,sw=Math.sin(t*.8+q)*3;g.strokeStyle=tn(q%2?'#7aa850':'#5a9040');g.lineWidth=2.4;g.beginPath();g.moveTo(x,y-70*s);g.quadraticCurveTo(bx*.6+x*.4+sw,y-96*s,bx+sw,y-20*s);g.stroke()}el(g,'#6a9a48',x,y-80*s,50*s,18*s)});
/* il Muro di Lennon: graffiti, cuori, simboli di pace, un paio di occhiali tondi, candele */
P('pglennon',(g,x,y,t,a,k)=>{rect(g,'#cfc8b8',x-130,y-130,260,130);rect(g,'#a89f8c',x-134,y-134,268,6);rect(g,'rgba(0,0,0,.1)',x+112,y-130,18,130);const C=['#e8402a','#f2c82a','#2a8ac8','#4aa84a','#8a4ad0','#f46aa8','#2ac8a0','#f4f0e6'];
 for(let q=0;q<26;q++){const bx=x-124+(q%9)*28+hr(q)*8,by=y-124+Math.floor(q/9)*40+hr(q+9)*12,c=C[md(q*3,8)];if(q%4==0){rect(g,c,bx,by,22,12);rect(g,'rgba(0,0,0,.25)',bx,by+8,22,2)}else if(q%4==1){dot(g,c,bx+10,by+8,9);dot(g,'#cfc8b8',bx+10,by+8,6)}else if(q%4==2){poly(g,c,[[bx,by+4],[bx+10,by+16],[bx+20,by+4],[bx+16,by],[bx+10,by+4],[bx+4,by]])}else{ln(g,c,3,[bx,by+12,bx+10,by,bx+22,by+14])}}
 g.strokeStyle=tn('#14110f');g.lineWidth=2.4;g.beginPath();g.arc(x-26,y-66,12,0,7);g.arc(x+4,y-66,12,0,7);g.stroke();ln(g,'#14110f',2.4,[x-14,y-66,x-8,y-66]);
 g.strokeStyle=tn('#2a6a3a');g.lineWidth=3;g.beginPath();g.arc(x+70,y-58,20,0,7);g.stroke();ln(g,'#2a6a3a',3,[x+70,y-78,x+70,y-38]);ln(g,'#2a6a3a',3,[x+70,y-58,x+56,y-44]);ln(g,'#2a6a3a',3,[x+70,y-58,x+84,y-44]);
 txt(g,'LOVE',x-70,y-100,13,'#d8283a');txt(g,'PEACE',x+40,y-100,12,'#2a6aa8');txt(g,'IMAGINE',x-60,y-34,11,'#8a4ad0');
 for(let q=0;q<6;q++){rect(g,'#f4f0e6',x-110+q*34,y-9,5,9);const f=.7+.3*Math.sin(t*9+q*2);el(g,'rgba(255,200,80,'+f+')',x-107.5+q*34,y-13,2,3.4)}glow(g,x,y-8,90,'255,200,110',.18)});
/* insegna di casa sporgente: a = 0 tre violini, 1 coppa d'oro, 2 aquila rossa, 3 due soli */
P('pgsegno',(g,x,y,t,a,k)=>{a=a|0;ln(g,'#26292e',2.4,[x-20,y-150,x+20,y-150]);ln(g,'#26292e',2,[x-20,y-150,x-20,y-140]);const sw=Math.sin(t*1.2)*1.2;
 if(a==0){[-12,0,12].forEach(o=>{el(g,'#a8602a',x+o+sw,y-132,5,9);rect(g,'#6a3a1a',x+o+sw-1,y-148,2,10)})}
 else if(a==1){poly(g,GO,[[x-9+sw,y-142],[x+9+sw,y-142],[x+5+sw,y-126],[x-5+sw,y-126]]);rect(g,GO,x-2+sw,y-126,4,8);rect(g,GO,x-8+sw,y-119,16,3)}
 else if(a==2){el(g,'#c8282a',x+sw,y-132,10,7);poly(g,'#c8282a',[[x-6+sw,y-136],[x-20+sw,y-148],[x-8+sw,y-128]]);poly(g,'#c8282a',[[x+6+sw,y-136],[x+20+sw,y-148],[x+8+sw,y-128]]);dot(g,'#c8282a',x+8+sw,y-140,3.4);rect(g,'#e8c04a',x+11+sw,y-141,4,2)}
 else{[-11,11].forEach(o=>{dot(g,'#f2c82a',x+o+sw,y-132,8);for(let q=0;q<8;q++){const an=q*Math.PI/4;ln(g,'#f2c82a',1.6,[x+o+sw+Math.cos(an)*8,y-132+Math.sin(an)*8,x+o+sw+Math.cos(an)*12,y-132+Math.sin(an)*12])}})}});
/* guardia del Castello in uniforme azzurro chiaro, fucile al piede */
P('pgguardia',(g,x,y,t,a,k)=>{rect(g,'#c8b890',x-24,y-124,48,124);rect(g,'#3a2a1a',x-22,y-120,44,120);fig(g,x,y,0,{f:1,s:1,skin:tn('#e0b090'),top:tn('#a8c0d8'),bot:tn('#a8c0d8'),hair:tn('#2a1a10'),acc:(g2,b)=>{rect(g2,tn('#6a8aa8'),-13,-114+b,26,6);rect(g2,tn('#f4f0e6'),-12,-60,24,3);rect(g2,tn('#f4f0e6'),-1,-90+b,2,44);ln(g2,'#3a3a40',2.4,[16,-100,16,-4]);rect(g2,'#8a6a3a',13,-110,6,12);dot(g2,tn('#d8c470'),0,-80+b,1.6);dot(g2,tn('#d8c470'),0,-70+b,1.6)}})});
/* Portale dei Giganti: due pilastri con i giganti che lottano, il cancello, lo stemma */
P('pgcancello',(g,x,y,t,a,k)=>{const S='#cfc6b0';[-80,80].forEach((o,s)=>{rect(g,S,x+o-26,y-150,52,150);rect(g,'rgba(255,255,255,.2)',x+o-26,y-150,8,150);rect(g,'rgba(0,0,0,.14)',x+o+10,y-150,16,150);rect(g,'#b8ae98',x+o-32,y-158,64,10);rect(g,'#b8ae98',x+o-30,y-12,60,12);
  const C='#8a8678',d=s?-1:1;poly(g,C,[[x+o-16,y-158],[x+o-20,y-210],[x+o-6,y-236],[x+o+8,y-226],[x+o+18,y-200],[x+o+14,y-158]]);dot(g,C,x+o-2*d,y-246,8);ln(g,C,7,[x+o+10*d,y-218,x+o+34*d,y-250]);ln(g,C,7,[x+o-12*d,y-200,x+o-30*d,y-170]);ln(g,C,5,[x+o+12*d,y-226,x+o+22*d,y-262])});
 rect(g,'#26292e',x-54,y-8,108,4);for(let q=0;q<13;q++){rect(g,'#26292e',x-52+q*8.5,y-120,2,112);poly(g,GO,[[x-53+q*8.5,y-120],[x-51+q*8.5,y-128],[x-49+q*8.5,y-120]])}rect(g,'#26292e',x-54,y-122,108,4);rect(g,'#26292e',x-54,y-60,108,3);dot(g,GO,x,y-92,10);dot(g,'#26292e',x,y-92,7);poly(g,GO,[[x-4,y-96],[x+4,y-96],[x,y-86]])});
/* Cattedrale di San Vito: la facciata con le due guglie, il rosone, i portali, la grande torre */
P('pgsanvito',(g,x,y,t,a,k)=>{const S='#8c8676',S2='#767060',S3='#a09a88';
 rect(g,S2,x+130,y-250,70,250);poly(g,'#5a6a5a',[[x+124,y-250],[x+165,y-290],[x+206,y-250]]);rect(g,'#6a6458',x+148,y-296,34,48);poly(g,'#3a4a3c',[[x+144,y-296],[x+165,y-340],[x+186,y-296]]);rect(g,'#3a4a3c',x+158,y-372,14,34);dot(g,GO,x+165,y-376,4);
 rect(g,S,x-150,y-250,300,250);rect(g,'rgba(255,255,255,.1)',x-150,y-250,8,250);rect(g,'rgba(0,0,0,.14)',x+130,y-250,20,250);
 [-112,112].forEach(o=>{rect(g,S3,x+o-38,y-330,76,86);rect(g,S,x+o-34,y-250,68,250);goth(g,'#2a3a5a',x+o-12,y-196,24,70);goth(g,'#3a4a6a',x+o-8,y-110,16,50);pin(g,S3,x+o,y-330,52,92);spire(g,S2,x+o,y-330,38,0.1);poly(g,S2,[[x+o-26,y-330],[x+o,y-440],[x+o+26,y-330]]);[-18,18].forEach(d=>pin(g,S2,x+o+d,y-330,8,54));dot(g,GO,x+o,y-444,3)});
 rect(g,S3,x-76,y-290,152,50);poly(g,S3,[[x-76,y-290],[x,y-346],[x+76,y-290]]);poly(g,S2,[[x-56,y-290],[x,y-332],[x+56,y-290]]);
 dot(g,'#c8d0e0',x,y-210,32);dot(g,'#2a3a5a',x,y-210,26);for(let q=0;q<12;q++){const an=q*Math.PI/6;ln(g,'#e8e0c8',2,[x,y-210,x+Math.cos(an)*26,y-210+Math.sin(an)*26])}dot(g,'#e8e0c8',x,y-210,5);
 for(let q=0;q<3;q++){goth(g,'#14100c',x-54+q*38,y,32,100);rect(g,S3,x-56+q*38,y-102,2,102);goth(g,'#2a3a5a',x-52+q*38,y-120,12,62)}
 [-76,76].forEach(o=>{pin(g,S3,x+o,y-240,10,70)});if(k>.2){glow(g,x,y-210,90,'255,214,140',.22*k);glow(g,x,y-40,120,'255,200,120',.18*k)}});
/* le finestre della Defenestrazione sul Palazzo Reale */
P('pgfinestre',(g,x,y,t,a,k)=>{rect(g,'#d8cba6',x-110,y-230,220,230);rect(g,'rgba(255,255,255,.14)',x-110,y-230,8,230);rect(g,'rgba(0,0,0,.14)',x+90,y-230,20,230);poly(g,'#7a4a36',[[x-116,y-230],[x-90,y-276],[x+90,y-276],[x+116,y-230]]);for(let q=0;q<6;q++)rect(g,'rgba(0,0,0,.14)',x-90+q*30,y-276+q*0,2,46);
 for(let q=0;q<3;q++){const wx=x-78+q*58,hit=q==1;rect(g,'#b8ac8a',wx-4,y-206,38,76);rect(g,hit?'#e8d890':'#5a7a94',wx,y-202,30,68);rect(g,'#b8ac8a',wx+14,y-202,2.4,68);rect(g,'#b8ac8a',wx,y-170,30,2.4);rect(g,'#b8ac8a',wx,y-190,30,2.4);if(hit){const sw=Math.sin(t*3)*.15+.7;glow(g,wx+15,y-168,50,'255,230,140',.35*sw)}}
 rect(g,'#b8ac8a',x-70,y-110,160,6);for(let q=0;q<3;q++)rect(g,'#6a5a44',x-60+q*58,y-96,30,96);rect(g,'#a89f84',x-30,y-60,60,26);txt(g,'1618',x,y-42,11,'#3a342a')});
/* il Vicolo d'Oro: casette minuscole e colorate; la numero 22 è azzurra */
P('pgvicolo',(g,x,y,t,a,k)=>{rect(g,'#a8a08c',x-170,y-190,340,190);for(let q=0;q<10;q++)rect(g,'rgba(0,0,0,.08)',x-170+q*34,y-190,2,190);for(let q=0;q<4;q++)arc2(g,'#6a645a',x-150+q*84,y-100,56,60);
 const H=[['#f4c8a0',70],['#f0e0a0',80],['#6aa8e0',74],['#e0a0a8',66],['#b8d8b0',78]];H.forEach((h,i)=>{const hx2=x-165+i*68,hh=h[1];rect(g,h[0],hx2,y-hh,62,hh);poly(g,'#b8472f',[[hx2-4,y-hh],[hx2+31,y-hh-22],[hx2+66,y-hh]]);rect(g,'#3a2a1a',hx2+8,y-44,16,44);const L=lit(k,i+3);rect(g,L||k>.2?LIT:'#6f8fa8',hx2+34,y-52,18,22);rect(g,'#f4eedc',hx2+42,y-52,1.4,22);if(i==2){rect(g,'#f4eedc',hx2+10,y-60,12,10);txt(g,'22',hx2+16,y-51,8,'#2a3a5a')}});
 pers(g,x+130,y,t,{s:.7,top:'#8a3a2a',bot:'#2a2a36'})});
/* Strahov: la chiesa con le due torri barocche, l'ala della biblioteca, i tavoli della birreria */
P('pgstrahov',(g,x,y,t,a,k)=>{rect(g,'#ecdfb4',x-150,y-130,300,130);rect(g,'rgba(255,255,255,.14)',x-150,y-130,8,130);poly(g,'#a8472f',[[x-154,y-130],[x-130,y-160],[x+130,y-160],[x+154,y-130]]);for(let q=0;q<7;q++){const wx=x-134+q*40;rect(g,'#f4eedc',wx-2,y-114,18,32);rect(g,lit(k,q)?LIT:'#6f8fa8',wx,y-112,14,28);poly(g,'#f4eedc',[[wx-3,y-114],[wx+7,y-122],[wx+17,y-114]])}
 rect(g,'#e8d8a8',x-40,y-210,80,210);poly(g,'#e8d8a8',[[x-40,y-210],[x,y-250],[x+40,y-210]]);[-52,52].forEach(o=>{rect(g,'#e8d8a8',x+o-14,y-250,28,120);el(g,'#4a8a6a',x+o,y-250,15,15);rect(g,'#4a8a6a',x+o-2,y-278,4,12);dot(g,GO,x+o,y-280,2.4);goth(g,'#2a2018',x+o-5,y-190,10,30)});
 arc2(g,'#2a2018',x-14,y,28,56);if(k>.2)glow(g,x,y-30,50,'255,200,120',.25*k);[-100,100].forEach((o,i)=>{rect(g,'#6a4a2a',x+o-22,y-34,44,4);rect(g,'#6a4a2a',x+o-2,y-30,4,30);dot(g,'#f4f0e6',x+o-8,y-39,3.4);rect(g,'#e8a224',x+o+4,y-45,6,10)})});
/* il Muro della Fame: pietra grigia che sale sul pendio, merli e alberi */
P('pgmuro',(g,x,y,t,a,k)=>{poly(g,'#8c9a6a',[[x-150,y],[x-150,y-30],[x+150,y-90],[x+150,y]]);poly(g,'#a8a498',[[x-150,y-20],[x-150,y-80],[x-40,y-80],[x-40,y-106],[x+60,y-106],[x+60,y-132],[x+150,y-132],[x+150,y-60],[x-40,y-20]]);for(let q=0;q<10;q++){rect(g,'#a8a498',x-148+q*30,y-90-q*5,14,12)}for(let q=0;q<18;q++)rect(g,'rgba(0,0,0,.1)',x-146+q*17,y-70-(q%4)*6-q*2,8,1.6);rect(g,'rgba(255,255,255,.14)',x-150,y-80,300,3)});
/* la Torre di Petřín: traliccio d'acciaio a otto lati, galleria e cupolino */
P('pgpetrin',(g,x,y,t,a,k)=>{const C='#8a8a92',C2='#6a6a72';poly(g,'rgba(0,0,0,0)',[[0,0],[0,0],[0,0]]);ln(g,C,6,[x-42,y,x-12,y-300]);ln(g,C,6,[x+42,y,x+12,y-300]);ln(g,C2,3,[x-6,y,x-3,y-300]);ln(g,C2,3,[x+6,y,x+3,y-300]);
 for(let q=0;q<10;q++){const yy=y-q*30,hw=42-q*3;ln(g,C2,2,[x-hw,yy,x+hw,yy]);ln(g,C2,1.6,[x-hw,yy,x+hw-3,yy-30]);ln(g,C2,1.6,[x+hw,yy,x-hw+3,yy-30])}
 rect(g,C,x-22,y-308,44,10);rect(g,'#b8b8c0',x-14,y-324,28,16);for(let q=0;q<4;q++)rect(g,'#6a8aa4',x-12+q*7,y-322,5,12);poly(g,C,[[x-14,y-324],[x,y-340],[x+14,y-324]]);rect(g,C,x-1,y-360,2,22);if(k>.3){for(let q=0;q<7;q++)dot(g,'rgba(255,230,150,'+(.8)+')',x-12+q*4,y-300,1.4);dot(g,'rgba(255,60,50,'+(.5+.5*Math.sin(t*4))+')',x,y-362,2.4)}rect(g,'#7a7a82',x-46,y-6,92,6)});
/* la funicolare di Petřín: binari inclinati e la cabina rossa */
P('pgfunicolare',(g,x,y,t,a,k)=>{rect(g,'#c8b890',x-120,y-80,70,80);poly(g,'#7a4a36',[[x-126,y-80],[x-85,y-106],[x-44,y-80]]);rect(g,'#2a2018',x-104,y-50,22,50);txt(g,'LANOVKA',x-85,y-86,7,'#2a2018');
 const x0=x-40,y0=y-6,x1=x+190,y1=y-130;ln(g,'#3a3a40',3,[x0,y0,x1,y1]);ln(g,'#3a3a40',3,[x0,y0+10,x1,y1+10]);for(let q=0;q<9;q++){const u=q/8;ln(g,'#5a4a3a',2.4,[x0+(x1-x0)*u,y0+(y1-y0)*u-1,x0+(x1-x0)*u,y0+(y1-y0)*u+12])}
 const u=.28+.1*Math.sin(t*.4),cx=x0+(x1-x0)*u,cy=y0+(y1-y0)*u;g.save();g.translate(cx+16,cy-10);g.rotate(Math.atan2(y1-y0,x1-x0));rect(g,'#b8352a',-34,-34,68,34);rect(g,'#f0e6cc',-34,-12,68,6);for(let q=0;q<4;q++)rect(g,k>.1?LIT:'#8ab0c8',-30+q*16,-30,12,12);rect(g,'#3a3a40',-34,-2,68,4);dot(g,'#26262c',-22,4,4);dot(g,'#26262c',22,4,4);g.restore()});
/* l'Orloj: la torre del Municipio Vecchio con l'orologio astronomico, il calendario, le finestre degli Apostoli e il gallo dorato */
P('pgorloj',(g,x,y,t,a,k)=>{const S='#cfc4a8',S2='#b4a98c';rect(g,'#e4d4b0',x-150,y-130,112,130);poly(g,'#a8472f',[[x-154,y-130],[x-130,y-160],[x-60,y-160],[x-34,y-130]]);for(let q=0;q<3;q++){rect(g,'#f4eedc',x-136+q*34,y-108,18,28);rect(g,lit(k,q+9)?LIT:'#6f8fa8',x-134+q*34,y-106,14,24)}
 rect(g,S,x-38,y-310,76,310);rect(g,'rgba(255,255,255,.14)',x-38,y-310,8,310);rect(g,'rgba(0,0,0,.14)',x+22,y-310,16,310);for(let q=0;q<12;q++)rect(g,'rgba(0,0,0,.07)',x-36,y-300+q*25,72,1.4);
 rect(g,S2,x-42,y-316,84,8);rect(g,S,x-34,y-366,68,52);[-22,0,22].forEach(o=>{goth(g,'#2a2a3a',x+o-5,y-324,10,24)});poly(g,'#4a8a6a',[[x-42,y-366],[x,y-440],[x+42,y-366]]);poly(g,'#3a7a5a',[[x-14,y-420],[x,y-452],[x+14,y-420]]);rect(g,GO,x-1,y-470,2,18);const gall=Math.sin(t*3);poly(g,GO,[[x-6,y-478],[x+6,y-478],[x+2,y-470],[x-2,y-470]]);
 /* quadrante astronomico */
 dot(g,'#c8a440',x,y-198,36);dot(g,'#1c2a5a',x,y-198,31);dot(g,'#3a5a9a',x,y-188,24);dot(g,'#6a4a2a',x,y-198,15);for(let q=0;q<24;q++){const an=q*Math.PI/12;ln(g,GO,1.2,[x+Math.cos(an)*26,y-198+Math.sin(an)*26,x+Math.cos(an)*31,y-198+Math.sin(an)*31])}g.save();g.translate(x,y-198);g.rotate(t*.05);dot(g,GO,24,0,4);ln(g,GO,1.6,[0,0,24,0]);g.restore();dot(g,'#e8e8f0',-8,-190,3.4);
 rect(g,GO,x-4,y-236,8,6);
 /* quadrante del calendario */
 dot(g,'#c8a440',x,y-124,30);dot(g,'#e8dcc0',x,y-124,26);for(let q=0;q<12;q++){const an=q*Math.PI/6;rect(g,['#c8402a','#4aa84a','#e8c04a','#2a6aa8'][Math.floor(q/3)],x+Math.cos(an)*18-3,y-124+Math.sin(an)*18-3,6,6)}dot(g,'#2a6aa8',x,y-124,9);dot(g,GO,x,y-124,3);
 /* statue ai lati e finestrelle degli Apostoli: ogni tanto si animano */
 [-48,48].forEach(o=>{rect(g,'#6a5a3a',x+o-5,y-204,10,30);dot(g,'#6a5a3a',x+o,y-210,4)});rect(g,'#c8a440',x+46,y-190,5,22);dot(g,'#e8e0c8',x+49,y-195,3);rect(g,'#2a2218',x+46,y-170,8,2);
 const ap=(t%16)<3.6;[-14,14].forEach((o,i)=>{rect(g,'#14100c',x+o-9,y-266,18,30);if(ap){for(let q=0;q<3;q++){dot(g,GO,x+o-4+((t*10+q*7)%12)*(i?-1:1)*.5+4,y-252,2.4);rect(g,'#7a6a3a',x+o-6+(q*4),y-249,2.6,10)}}else rect(g,'#2a2218',x+o-9,y-266,18,30)});
 for(let q=0;q<5;q++)rect(g,'rgba(255,255,255,.1)',x-20+q*4,y-296,1,8)});
/* la chiesa di Týn: due torri gotiche con quattro guglie ciascuna, il timpano e le arcate */
P('pgtyn',(g,x,y,t,a,k)=>{const S='#8a8678',D='#34363e';rect(g,S,x-130,y-250,260,250);rect(g,'rgba(255,255,255,.1)',x-130,y-250,8,250);rect(g,'rgba(0,0,0,.14)',x+104,y-250,26,250);
 [-82,82].forEach(o=>{rect(g,'#9a9688',x+o-34,y-300,68,100);rect(g,S,x+o-30,y-250,60,250);goth(g,'#2a2a34',x+o-8,y-190,16,60);goth(g,'#2a2a34',x+o-8,y-110,16,50);poly(g,D,[[x+o-36,y-300],[x+o,y-420],[x+o+36,y-300]]);[-26,26].forEach(d=>poly(g,D,[[x+o+d-9,y-300],[x+o+d,y-352],[x+o+d+9,y-300]]));[-12,12].forEach(d=>rect(g,'#9a9688',x+o+d-5,y-312,10,14));dot(g,GO,x+o,y-424,2.6)});
 poly(g,'#9a9688',[[x-52,y-250],[x-30,y-318],[x,y-352],[x+30,y-318],[x+52,y-250]]);for(let q=0;q<4;q++)ln(g,'#7a766a',1.6,[x-40+q*24,y-250,x-34+q*20,y-330+q*6]);dot(g,GO,x,y-330,7);dot(g,'#f4e8a8',x,y-330,3.6);
 dot(g,'#c8d0e0',x,y-210,20);dot(g,'#2a3a5a',x,y-210,16);goth(g,'#14100c',x-14,y,28,80);if(k>.2)glow(g,x,y-120,100,'255,214,140',.15*k);
 rect(g,'#e8dcb8',x-150,y-62,60,62);poly(g,'#a8472f',[[x-154,y-62],[x-120,y-86],[x-86,y-62]]);for(let q=0;q<3;q++){arc2(g,'#2a2018',x-146+q*18,y,14,34)}});
/* il monumento a Jan Hus: grande basamento di granito e bronzo scuro */
P('pghus',(g,x,y,t,a,k)=>{const G='#8a8a84',B='#3e4a3e';rect(g,'#7a7a74',x-84,y-16,168,16);rect(g,G,x-72,y-70,144,56);rect(g,'rgba(255,255,255,.14)',x-72,y-70,8,56);rect(g,'rgba(0,0,0,.14)',x+54,y-70,18,56);rect(g,'#9a9a94',x-78,y-76,156,8);
 poly(g,B,[[x-66,y-72],[x-62,y-110],[x-44,y-124],[x-34,y-108],[x-38,y-72]]);dot(g,B,x-50,y-132,6);poly(g,B,[[x+66,y-72],[x+62,y-104],[x+46,y-120],[x+34,y-104],[x+38,y-72]]);dot(g,B,x+52,y-116,5.4);poly(g,B,[[x+44,y-72],[x+50,y-96],[x+58,y-96],[x+62,y-72]]);dot(g,'#4a5a4a',x+58,y-100,3.6);
 rect(g,'#9a9a94',x-22,y-186,44,116);poly(g,B,[[x-18,y-72],[x-14,y-190],[x+14,y-190],[x+18,y-72]]);dot(g,B,x,y-202,9);poly(g,B,[[x-10,y-196],[x,y-212],[x+10,y-196]]);ln(g,'#2a342a',3,[x-8,y-170,x+4,y-150,x-2,y-130]);rect(g,'#5a6a5a',x-5,y-186,10,3)});
/* ventisette croci inserite nel selciato */
P('pgcroci',(g,x,y,t,a,k)=>{for(let r=0;r<3;r++)for(let q=0;q<9;q++){const cx=x-116+q*29+(r%2)*6,cy=y+14+r*13;rect(g,'#e8e4d8',cx-1.6,cy-4,3.2,10);rect(g,'#e8e4d8',cx-4.4,cy-1.4,8.8,3)}rect(g,'#cfc8b0',x-134,y+4,268,3)});
/* bancarella di trdelník: i cilindri dorati sulla brace */
P('pgtrdelnik',(g,x,y,t,a,k)=>{rect(g,'#6a4a2a',x-56,y-40,112,6);rect(g,'#6a4a2a',x-50,y-36,6,36);rect(g,'#6a4a2a',x+44,y-36,6,36);poly(g,'#c8281e',[[x-64,y-112],[x+64,y-112],[x+54,y-92],[x-54,y-92]]);for(let q=0;q<5;q++)rect(g,'#f4f0e6',x-60+q*24+12,y-112,12,20);rect(g,'#2a1a10',x-44,y-58,88,18);for(let q=0;q<4;q++){const cx=x-33+q*22;g.save();g.translate(cx,y-62);g.rotate(Math.sin(t*2)*.04);rect(g,'#d8a24a',-8,-14,16,28);for(let r=0;r<4;r++)rect(g,'rgba(120,60,10,.4)',-8,-12+r*7,16,1.6);g.restore()}for(let q=0;q<4;q++)dot(g,'rgba(255,'+(110+q*30)+',40,.9)',x-36+q*24,y-44,3.4);glow(g,x,y-48,60,'255,150,60',.3);for(let q=0;q<4;q++)el(g,'rgba(240,240,240,'+(.3*(1-((t*.5+q*.25)%1)))+')',x-20+Math.sin(t+q)*14,y-84-((t*28+q*16)%40),7,5);txt(g,'TRDELNÍK',x,y-98,9,'#f2e8c8');pers(g,x+72,y,t,{s:.8,top:'#e8e4d8',bot:'#2a2a36',hair:'#4a2a1a'})});
/* carrozza con cavallo, per i giri della Città Vecchia */
P('pgcarrozza',(g,x,y,t,a,k)=>{const c='#4a2e1c';el(g,c,x+70,y-60,32,16);poly(g,c,[[x+94,y-68],[x+108,y-96],[x+118,y-94],[x+108,y-60]]);poly(g,c,[[x+112,y-96],[x+126,y-96],[x+126,y-88],[x+114,y-86]]);[[-18,0],[-6,0],[22,0],[34,0]].forEach((l,i)=>ln(g,c,5,[x+66+l[0],y-52,x+66+l[0]+(i%2?3:-3),y]));ln(g,'#1a1210',4,[x+38,y-64,x+30,y-36+Math.sin(t*2)*3]);
 rect(g,'#14161c',x-60,y-90,100,50);poly(g,'#14161c',[[x-62,y-90],[x-50,y-112],[x+30,y-112],[x+42,y-90]]);rect(g,'#c8a440',x-60,y-70,100,3);rect(g,k>.1?LIT:'#6a8aa4',x-48,y-84,28,26);rect(g,k>.1?LIT:'#6a8aa4',x-10,y-84,28,26);[-44,26].forEach(o=>{dot(g,'#c8a440',x+o,y-14,16);dot(g,'#14161c',x+o,y-14,12);dot(g,'#c8a440',x+o,y-14,3)});ln(g,'#14161c',3,[x+42,y-50,x+60,y-52]);pers(g,x+34,y-62,t,{s:.64,top:'#1a1a2a',bot:'#1a1a2a',hair:'#14110f'});rect(g,'#14110f',x+28,y-114,12,8)});
/* la hospoda: facciata di legno scuro, insegna dorata, lanterna, tavoli con i boccali */
P('pghospoda',(g,x,y,t,a,k)=>{rect(g,'#4a3020',x-110,y-120,220,120);rect(g,'rgba(255,255,255,.07)',x-110,y-120,8,120);poly(g,'#7a2a22',[[x-118,y-120],[x-100,y-150],[x+100,y-150],[x+118,y-120]]);rect(g,'#2a1a10',x-104,y-118,208,28);txt(g,'HOSPODA',x,y-97,18,'#e8c24a');
 [-70,10].forEach((o,i)=>{rect(g,'#2a1a10',x+o-2,y-86,54,56);rect(g,k>.1||i?'#ffcf7a':'#a8a07a',x+o+2,y-82,46,48);rect(g,'#2a1a10',x+o+24,y-82,2,48);dot(g,'#e8d8a8',x+o+10,y-60,5);rect(g,'#f4f0e6',x+o+30,y-72,10,16);rect(g,'#e8a224',x+o+31,y-70,8,12)});
 rect(g,'#2a1a10',x+72,y-80,28,80);rect(g,'#14110f',x+76,y-76,20,76);ln(g,'#26292e',2,[x-114,y-132,x-114,y-112]);rect(g,k>.1?'#ffe9a0':'#e8d8a0',x-122,y-124,16,16);if(k>.1)glow(g,x-114,y-116,40,'255,220,140',.4*k);
 poly(g,'#8a5a30',[[x+104,y-134],[x+108,y-118],[x+126,y-118],[x+130,y-134]]);txt(g,'PIVO',x+117,y-124,6,'#f4e8c0');
 [-60,0,60].forEach(o=>{rect(g,'#6a4a2a',x+o-22,y-34,44,4);rect(g,'#6a4a2a',x+o-2,y-30,4,30);dot(g,'#f4f0e6',x+o-8,y-40,3.6);rect(g,'#e8a224',x+o+4,y-46,7,12);rect(g,'#f4f0e6',x+o+3,y-48,9,3)})});
/* la Sinagoga Vecchio-Nuova: intonaco chiaro, altissimo tetto spiovente, timpani a gradoni di mattoni */
P('pgsinagoga',(g,x,y,t,a,k)=>{rect(g,'#c8c0ae',x-96,y-122,192,122);rect(g,'rgba(255,255,255,.12)',x-96,y-122,8,122);rect(g,'rgba(0,0,0,.14)',x+76,y-122,20,122);
 poly(g,'#7a4a36',[[x-100,y-122],[x-70,y-250],[x+70,y-250],[x+100,y-122]]);for(let q=0;q<7;q++)rect(g,'rgba(0,0,0,.14)',x-96+q*3,y-122-q*18,192-q*6,1.6);
 const bk='#b8603a';poly(g,bk,[[x-96,y-122],[x-96,y-142],[x-80,y-142],[x-80,y-170],[x-62,y-170],[x-62,y-198],[x-42,y-198],[x-42,y-226],[x,y-250],[x+42,y-226],[x+42,y-198],[x+62,y-198],[x+62,y-170],[x+80,y-170],[x+80,y-142],[x+96,y-142],[x+96,y-122]]);
 for(let r=0;r<5;r++)for(let q=0;q<7-r;q++)if((q+r)%2==0)rect(g,'#e0b8a0',x-60+q*17+r*8,y-148-r*20,8,10);
 [-52,-18,18,52].forEach(o=>{goth(g,'#2a2a34',x+o-6,y-52,12,52)});rect(g,'#a89f8c',x-118,y-76,26,76);poly(g,'#7a4a36',[[x-120,y-76],[x-105,y-96],[x-90,y-76]]);goth(g,'#2a2a34',x-111,y-52,12,36);if(k>.2)glow(g,x,y-40,90,'255,200,120',.18*k)});
/* il Municipio ebraico: torretta rosa con due orologi, quello ebraico con le cifre in senso antiorario */
P('pgmunicipio',(g,x,y,t,a,k)=>{rect(g,'#f0d4d0',x-100,y-130,200,130);rect(g,'rgba(255,255,255,.2)',x-100,y-130,8,130);poly(g,'#a8472f',[[x-106,y-130],[x-80,y-156],[x+80,y-156],[x+106,y-130]]);for(let q=0;q<5;q++){const wx=x-84+q*36;rect(g,'#fff8ec',wx-3,y-106,22,34);rect(g,lit(k,q+2)?LIT:'#6f8fa8',wx,y-104,16,30);g.fillStyle=tn('#fff8ec');g.beginPath();g.arc(wx+8,y-106,11,Math.PI,0);g.fill()}
 rect(g,'#f0d4d0',x-24,y-230,48,100);poly(g,'#4a8a6a',[[x-28,y-230],[x,y-262],[x+28,y-230]]);dot(g,'#4a8a6a',x,y-266,4);
 dot(g,'#fff8ec',x,y-206,19);dot(g,'#f4f0e6',x,y-206,16);for(let q=0;q<12;q++){const an=q*Math.PI/6;rect(g,'#2a2a30',x+Math.cos(an)*12-1,y-206+Math.sin(an)*12-1,2.4,2.4)}ln(g,'#2a2a30',1.4,[x,y-206,x,y-216]);ln(g,'#2a2a30',1.4,[x,y-206,x+7,y-204]);
 dot(g,'#fff8ec',x,y-160,19);dot(g,'#e8dcc0',x,y-160,16);for(let q=0;q<12;q++){const an=-q*Math.PI/6-Math.PI/2;txt(g,'א',x+Math.cos(an)*11,y-157+Math.sin(an)*11,5,'#2a2a30')}ln(g,'#2a2a30',1.4,[x,y-160,x-4,y-168]);ln(g,'#2a2a30',1.4,[x,y-160,x-8,y-156])});
/* il Vecchio Cimitero Ebraico: muro, sambuchi, lapidi fitte e inclinate */
P('pgcimitero',(g,x,y,t,a,k)=>{rect(g,'#9a8a74',x-140,y-84,280,84);rect(g,'rgba(0,0,0,.12)',x-140,y-84,280,6);for(let q=0;q<20;q++)rect(g,'rgba(0,0,0,.08)',x-136+q*14,y-70,6,3);
 for(let q=0;q<26;q++){const sx=x-130+(q%13)*21,sy=y-6-Math.floor(q/13)*18-hr(q)*6,tl=(hr(q+4)-.5)*.5;g.save();g.translate(sx,sy);g.rotate(tl);rect(g,['#8a8a84','#a8a49a','#7a7a74'][q%3],-7,-26-hr(q)*10,14,26+hr(q)*10);g.fillStyle=tn(['#8a8a84','#a8a49a','#7a7a74'][q%3]);g.beginPath();g.arc(0,-26-hr(q)*10,7,Math.PI,0);g.fill();rect(g,'rgba(0,0,0,.2)',-3,-22-hr(q)*10,6,1.4);g.restore()}
 [-90,60].forEach((o,i)=>{rect(g,'#4a3a28',x+o-4,y-150,8,70);el(g,'#4a6a38',x+o,y-150,46,28);el(g,'#5a7a44',x+o-14,y-158,24,16);el(g,'#3e5a30',x+o+16,y-146,26,14)})});
/* il monumento a Kafka: un vestito vuoto che cammina, con l'omino sulle spalle */
P('pgkafka',(g,x,y,t,a,k)=>{const B='#4a4430',B2='#6a6244';rect(g,'#7a7a74',x-34,y-12,68,12);const w=Math.sin(t*.8)*.02;
 poly(g,B,[[x-20,y-12],[x-14,y-104],[x+4,y-104],[x+2,y-12]]);poly(g,B,[[x+4,y-12],[x+4,y-104],[x+24,y-104],[x+30,y-12]]);rect(g,'#2a2618',x-22,y-14,16,6);rect(g,'#2a2618',x+16,y-14,16,6);
 poly(g,B2,[[x-34,y-206],[x+38,y-206],[x+32,y-100],[x-26,y-100]]);ln(g,'#2a2618',3,[x+2,y-206,x+2,y-100]);ln(g,B,12,[x-34,y-200,x-44,y-130]);ln(g,B,12,[x+38,y-200,x+48,y-130]);poly(g,B,[[x-8,y-206],[x+8,y-206],[x+4,y-216],[x-4,y-216]]);
 poly(g,B2,[[x-12,y-222],[x+10,y-222],[x+12,y-246],[x-10,y-246]]);dot(g,'#5a5238',x,y-252,7);ln(g,B2,6,[x-8,y-224,x-26,y-206]);ln(g,B2,6,[x+8,y-224,x+26,y-206]);dot(g,'#c8a838',x+3,y-232,1.2);rect(g,'rgba(255,255,255,.15)',x-30,y-206,8,100)});
/* la Torre delle Polveri: nera, gotica, a pianta quadrata, con i torrioni e la corona di guglie */
P('pgpolveri',(g,x,y,t,a,k)=>{const S='#5a5650',S2='#46423c';rect(g,S,x-52,y-220,104,220);rect(g,'rgba(255,255,255,.1)',x-52,y-220,8,220);rect(g,'rgba(0,0,0,.2)',x+36,y-220,16,220);for(let q=0;q<8;q++)rect(g,'rgba(0,0,0,.12)',x-50,y-210+q*26,100,1.4);
 goth(g,'#14110f',x-22,y,44,96);if(k>.2)glow(g,x,y-40,60,'255,200,120',.25*k);[-16,16].forEach(o=>goth(g,'#2a2a34',x+o-5,y-150,10,34));rect(g,S2,x-58,y-228,116,12);for(let q=0;q<8;q++)rect(g,S,x-56+q*15,y-240,9,12);
 [-48,48].forEach(o=>{rect(g,S,x+o-9,y-300,18,74);poly(g,S2,[[x+o-11,y-300],[x+o,y-340],[x+o+11,y-300]])});rect(g,S,x-38,y-296,76,70);poly(g,S2,[[x-42,y-296],[x,y-376],[x+42,y-296]]);[-24,0,24].forEach(o=>pin(g,S,x+o,y-300,9,40));[-18,18].forEach(o=>goth(g,'#2a2a34',x+o-4,y-264,8,28));dot(g,GO,x,y-380,2.6);rect(g,GO,x-12,y-188,24,24);dot(g,'#7a1e1e',x,y-176,6)});
/* la Casa Municipale: facciata liberty, la grande tettoia di vetro e ferro, il mosaico, la cupola verde */
P('pgobecni',(g,x,y,t,a,k)=>{rect(g,'#eadcb4',x-150,y-190,300,190);rect(g,'rgba(255,255,255,.14)',x-150,y-190,8,190);rect(g,'rgba(0,0,0,.12)',x+130,y-190,20,190);rect(g,'#d8c890',x-156,y-196,312,8);
 el(g,'#4a9a7a',x-100,y-196,46,40);rect(g,'#d8c470',x-102,y-248,4,16);dot(g,GO,x-100,y-250,3.4);rect(g,'#e4d4a8',x-130,y-196,60,0);
 g.fillStyle=tn('#e8dcb8');g.beginPath();g.arc(x+20,y-122,76,Math.PI,0);g.fill();const mc=['#e8c04a','#c8402a','#2a8a9a','#4aa86a','#f4f0e6','#8a4a9a'];for(let q=0;q<18;q++){const an=Math.PI+q*Math.PI/18;poly(g,mc[q%6],[[x+20+Math.cos(an)*30,y-122+Math.sin(an)*30],[x+20+Math.cos(an)*66,y-122+Math.sin(an)*66],[x+20+Math.cos(an+.18)*66,y-122+Math.sin(an+.18)*66],[x+20+Math.cos(an+.18)*30,y-122+Math.sin(an+.18)*30]])}dot(g,'#4a2a1a',x+20,y-122,0);
 rect(g,'#2a8a6a',x-60,y-84,160,6);poly(g,'#4aa08a',[[x-60,y-84],[x-44,y-110],[x+84,y-110],[x+100,y-84]]);for(let q=0;q<9;q++)ln(g,'#2a6a54',1.6,[x-50+q*17,y-110,x-56+q*18,y-84]);for(let q=0;q<5;q++)ln(g,GO,2,[x-60+q*40,y-78,x-60+q*40,y-60]);
 for(let q=0;q<4;q++){const wx=x-58+q*44;rect(g,'#2a1a10',wx,y-70,30,70);rect(g,k>.1?LIT:'#7a9ab4',wx+3,y-67,24,64);rect(g,'#d8c470',wx+14,y-67,2,64)}if(k>.2)glow(g,x+20,y-40,110,'255,214,130',.22*k);txt(g,'OBECNÍ DŮM',x+20,y-146,11,'#5a4a22')});
/* il Museo Nazionale: grande edificio neorinascimentale con la cupola di rame, le statue e la scalinata */
P('pgmuseo',(g,x,y,t,a,k)=>{const S='#e4d8bc';rect(g,S,x-190,y-160,380,160);rect(g,'rgba(255,255,255,.14)',x-190,y-160,8,160);rect(g,'rgba(0,0,0,.12)',x+168,y-160,22,160);rect(g,'#d0c4a4',x-196,y-168,392,10);
 rect(g,S,x-80,y-240,160,90);rect(g,'#d0c4a4',x-86,y-248,172,10);for(let q=0;q<6;q++){rect(g,'#c8bc9c',x-70+q*26,y-232,10,80);goth(g,'#3a4a5a',x-62+q*26,y-160,10,40)}
 el(g,'#4a8a7a',x,y-248,52,52);rect(g,'#4a8a7a',x-4,y-306,8,18);rect(g,GO,x-3,y-322,6,18);dot(g,GO,x,y-324,3);for(let q=0;q<6;q++)ln(g,'#3a7a6a',1.4,[x,y-300,x+(q-2.5)*18,y-250]);
 [-176,176].forEach(o=>{pin(g,'#3a7a6a',x+o,y-168,22,50)});for(let q=0;q<9;q++){const wx=x-176+q*40;if(Math.abs(wx-x)<84)continue;rect(g,'#c8bc9c',wx-2,y-142,20,44);rect(g,k>.1?LIT:'#6f8fa8',wx,y-140,16,40);g.fillStyle=tn('#c8bc9c');g.beginPath();g.arc(wx+8,y-142,10,Math.PI,0);g.fill()}
 for(let q=0;q<6;q++)rect(g,'#c8bc9c',x-70+q*28,y-80,6,50);rect(g,'#d0c4a4',x-80,y-84,160,6);for(let q=0;q<6;q++)rect(g,'rgba(120,110,90,'+(.2+q*.02)+')',x-92-q*3,y-q*5-0,184+q*6,5);
 if(k>.2)glow(g,x,y-100,140,'255,214,130',.16*k)});
/* la statua di san Venceslao a cavallo, con i quattro santi ai piedi */
P('pgwenc',(g,x,y,t,a,k)=>{const B='#3e4a3a',G='#8a8a84';rect(g,G,x-56,y-14,112,14);rect(g,'#9a9a94',x-46,y-84,92,72);rect(g,'rgba(255,255,255,.14)',x-46,y-84,8,72);rect(g,'#a8a8a2',x-50,y-90,100,8);[-52,52].forEach((o,i)=>{poly(g,B,[[x+o-8,y-14],[x+o-6,y-52],[x+o+6,y-52],[x+o+8,y-14]]);dot(g,B,x+o,y-58,5)});
 el(g,B,x,y-120,36,16);poly(g,B,[[x+26,y-128],[x+40,y-158],[x+50,y-156],[x+40,y-120]]);poly(g,B,[[x+44,y-158],[x+58,y-158],[x+58,y-150],[x+46,y-148]]);[-22,-8,18,32].forEach((l,i)=>ln(g,B,5,[x+l,y-112,x+l+(i%2?4:-4),y-84]));ln(g,'#1a2a1a',4,[x-34,y-124,x-42,y-96+Math.sin(t*2)*2]);
 poly(g,B,[[x-8,y-126],[x-6,y-168],[x+8,y-168],[x+10,y-126]]);dot(g,B,x,y-176,6);rect(g,B,x-8,y-186,16,6);ln(g,B,2.4,[x+10,y-164,x+18,y-226]);poly(g,B,[[x+18,y-226],[x+28,y-216],[x+18,y-208]]);ln(g,B,2.4,[x-8,y-150,x-24,y-176]);poly(g,B,[[x-24,y-176],[x-6,y-182],[x-8,y-160]])});
/* piccola croce di bronzo e fiori nel selciato: Jan Palach */
P('pgpalach',(g,x,y,t,a,k)=>{rect(g,'#6a5a3a',x-2,y+10,4,22);rect(g,'#6a5a3a',x-9,y+17,18,3.4);[[-22,'#f4f0e6'],[-16,'#e8402a'],[18,'#f4f0e6'],[24,'#f2c82a']].forEach(q=>{ln(g,'#2a7a3a',1.6,[x+q[0],y+30,x+q[0],y+20]);dot(g,q[1],x+q[0],y+18,3.4)});rect(g,'#f4f0e6',x+34,y+20,5,10);const f=.7+.3*Math.sin(t*8);el(g,'rgba(255,200,80,'+f+')',x+36.5,y+16,2,3.4);glow(g,x+36,y+18,24,'255,200,110',.3)});
/* il passaggio Lucerna con il cavallo appeso a testa in giù */
P('pglucerna',(g,x,y,t,a,k)=>{rect(g,'#d8c8a4',x-100,y-190,200,190);rect(g,'rgba(255,255,255,.14)',x-100,y-190,8,190);arc2(g,'#2a1e16',x-56,y,112,150);rect(g,'#f2c070',x-48,y-142,96,142);glow(g,x,y-70,100,'255,200,120',.28);
 for(let q=0;q<5;q++)ln(g,'#c8a440',2,[x-44+q*22,y-142,x-44+q*22,y-120]);ln(g,'#26292e',1.4,[x-20,y-142,x-20,y-110]);ln(g,'#26292e',1.4,[x+20,y-142,x+20,y-110]);
 const c='#4a3a2a',sw=Math.sin(t*1.3)*2;el(g,c,x+sw,y-92,30,12);poly(g,c,[[x-24+sw,y-98],[x-38+sw,y-120],[x-30+sw,y-122],[x-16+sw,y-96]]);[-16,-4,12,24].forEach((l,i)=>ln(g,c,4,[x+l+sw,y-84,x+l+(i%2?3:-3)+sw,y-60]));ln(g,'#1a1210',3,[x+30+sw,y-90,x+36+sw,y-118]);poly(g,'#3a3a40',[[x-8+sw,y-84],[x-4+sw,y-60],[x+6+sw,y-60],[x+8+sw,y-84]]);dot(g,'#3a3a40',x+sw,y-52,5);ln(g,'#3a3a40',2,[x+2+sw,y-80,x+12+sw,y-100]);
 rect(g,'#2a1e16',x-100,y-196,200,8);if(k>.2)glow(g,x,y-100,120,'255,214,130',.15*k)});
/* la Casa Danzante: la torre di pietra inclinata e quella di vetro con la vita stretta e il cappello a rete */
P('pgdancing',(g,x,y,t,a,k)=>{const S='#e4dccc';poly(g,S,[[x-84,y],[x-84,y-240],[x-6,y-250],[x-6,y]]);rect(g,'rgba(255,255,255,.2)',x-84,y-240,8,240);rect(g,'rgba(0,0,0,.12)',x-18,y-250,12,250);
 for(let r=0;r<7;r++)for(let q=0;q<3;q++){const wx=x-76+q*22+Math.sin(r*.9)*2,wy=y-228+r*30,L=lit(k,r*3+q);rect(g,'#f4eedc',wx-2,wy-2,18,22);rect(g,L?LIT:'#6f8fa8',wx,wy,14,18)}
 for(let q=0;q<5;q++)rect(g,'rgba(120,110,90,.3)',x-84,y-232+q*52,78,2);poly(g,'#d8d0be',[[x-84,y-240],[x-60,y-262],[x-6,y-250]]);
 [-4,6,18,28].forEach((o,i)=>ln(g,'#b8b0a0',5,[x+o,y,x+o+(i<2?-4:4),y-52]));
 g.fillStyle=tn('#a8c8d8');g.beginPath();g.moveTo(x+2,y-52);g.quadraticCurveTo(x+16,y-110,x+30,y-122);g.quadraticCurveTo(x+4,y-150,x+14,y-230);g.lineTo(x+76,y-246);g.quadraticCurveTo(x+84,y-200,x+60,y-150);g.quadraticCurveTo(x+66,y-110,x+56,y-52);g.closePath();g.fill();
 g.strokeStyle=tn('#5a7a94');g.lineWidth=1.4;for(let q=0;q<6;q++){g.beginPath();g.moveTo(x+4+q*10,y-52);g.quadraticCurveTo(x+16+q*10,y-110,x+30+q*7,y-122);g.quadraticCurveTo(x+10+q*10,y-150,x+16+q*11,y-230);g.stroke()}for(let q=0;q<8;q++){ln(g,'#5a7a94',1.2,[x+8,y-60-q*24,x+60,y-60-q*24])}rect(g,'rgba(255,255,255,.25)',x+8,y-230,12,160);
 g.strokeStyle=tn('#8a8a92');g.lineWidth=1.4;g.beginPath();g.arc(x+46,y-262,20,Math.PI,0);for(let q=-2;q<=2;q++){g.moveTo(x+46+q*8,y-262);g.quadraticCurveTo(x+46+q*6,y-282,x+46,y-282)}g.stroke();poly(g,'#7a7a82',[[x+14,y-240],[x+76,y-252],[x+66,y-262],[x+24,y-254]]);
 if(k>.3){glow(g,x+36,y-150,90,'255,230,170',.18*k);glow(g,x-40,y-120,90,'255,214,130',.12*k)}});
/* fermata del tram con la pensilina di vetro e il cartello della linea */
P('pgfermata',(g,x,y,t,a,k)=>{rect(g,'#2a5aa8',x-46,y-130,3,130);rect(g,'#2a5aa8',x-60,y-142,32,18);txt(g,'17',x-44,y-128,12,'#f4f0e6');rect(g,'rgba(180,215,235,.5)',x-20,y-100,110,84);rect(g,'#3a3a40',x-22,y-102,114,4);rect(g,'#3a3a40',x-22,y-18,114,3);[-20,36,90].forEach(o=>rect(g,'#3a3a40',x+o-2,y-100,4,84));rect(g,'#f4f0e6',x+4,y-88,26,34);for(let q=0;q<6;q++)rect(g,'rgba(40,40,60,.5)',x+7,y-84+q*5,20,1.4);rect(g,'#6a4a2a',x+48,y-40,32,5);rect(g,'#6a4a2a',x+50,y-36,3,18);rect(g,'#6a4a2a',x+74,y-36,3,18);if(k>.2)glow(g,x+40,y-60,70,'255,230,170',.2*k)});
/* la Náplavka: la banchina di pietra con le arcate che ospitano i bar, le lucine, i tavolini */
P('pgnaplavka',(g,x,y,t,a,k)=>{rect(g,'#9a927e',x-150,y-120,300,120);rect(g,'rgba(255,255,255,.1)',x-150,y-120,8,120);rect(g,'#7a735f',x-156,y-128,312,10);for(let q=0;q<4;q++){const ax=x-136+q*72;arc2(g,'#2a2018',ax,y,56,86);rect(g,k>.1?'#ffcf7a':'#6a5a40',ax+6,y-50,44,48);if(k>.1)glow(g,ax+28,y-40,60,'255,200,120',.28*k);rect(g,'#6a4a2a',ax+12,y-34,32,3);dot(g,'#f4f0e6',ax+20,y-38,2.6);rect(g,'#e8a224',ax+30,y-43,5,8)}
 for(let q=0;q<14;q++){const lx=x-140+q*21,ly=y-136+Math.abs(Math.sin(q*.45))*10;dot(g,['#ffe27a','#ff9a6a','#8ad0ff'][q%3],lx,ly,2.4)}ln(g,'#26292e',1,[x-150,y-136,x-70,y-124,x,y-136,x+70,y-124,x+150,y-136]);ln(g,'#26292e',2.4,[x-150,y-128,x+150,y-128]);for(let q=0;q<14;q++)rect(g,'#26292e',x-148+q*22,y-140,1.4,12)});
/* la stazione: facciata liberty con la grande finestra semicircolare, le torri a cupola e la scritta dorata */
P('pgstazione',(g,x,y,t,a,k)=>{const S='#e4d8b4';rect(g,S,x-190,y-170,380,170);rect(g,'rgba(255,255,255,.14)',x-190,y-170,8,170);rect(g,'rgba(0,0,0,.12)',x+168,y-170,22,170);rect(g,'#d0c49c',x-196,y-178,392,10);
 [-150,150].forEach(o=>{rect(g,'#eadfbc',x+o-34,y-250,68,100);el(g,'#4a8a6a',x+o,y-250,34,30);rect(g,'#d8c470',x+o-2,y-286,4,12);dot(g,GO,x+o,y-290,3);[-24,24].forEach(d=>{rect(g,'#c8bc94',x+o+d-4,y-244,8,24);dot(g,'#b8ac84',x+o+d,y-250,4)});goth(g,'#3a4a5a',x+o-8,y-170,16,44)});
 g.fillStyle=tn('#eadfbc');g.beginPath();g.arc(x,y-130,88,Math.PI,0);g.fill();g.fillStyle=tn(k>.1?'#ffd890':'#a8c8d8');g.beginPath();g.arc(x,y-124,70,Math.PI,0);g.fill();for(let q=0;q<9;q++){const an=Math.PI+q*Math.PI/8;ln(g,'#5a7a94',1.8,[x,y-124,x+Math.cos(an)*70,y-124+Math.sin(an)*70])}for(let q=1;q<4;q++){g.strokeStyle=tn('#5a7a94');g.lineWidth=1.6;g.beginPath();g.arc(x,y-124,q*17.5,Math.PI,0);g.stroke()}
 g.fillStyle=tn('#d8c470');g.beginPath();g.arc(x,y-130,88,Math.PI*1.02,Math.PI*1.98);g.lineWidth=0;[0].forEach(()=>{});rect(g,'#c8bc94',x-92,y-130,184,6);
 rect(g,'#2a2218',x-110,y-86,220,18);txt(g,'PRAHA HLAVNÍ NÁDRAŽÍ',x,y-73,12,'#e8c24a');
 for(let q=0;q<5;q++){const wx=x-100+q*42;arc2(g,'#1a1612',wx,y,28,66);rect(g,k>.1?LIT:'#6a8aa4',wx+4,y-60,20,56)}dot(g,'#f4eedc',x,y-232,14);dot(g,'#2a2a30',x,y-232,11);ln(g,'#f4eedc',1.6,[x,y-232,x,y-240]);ln(g,'#f4eedc',1.6,[x,y-232,x+6,y-228]);rect(g,'#d0c49c',x-14,y-250,28,6);if(k>.2){glow(g,x,y-100,150,'255,214,130',.2*k)}});
/* la sala Fanta: la grande apertura a arco con i lampadari e i tavolini del caffè */
P('pgsala',(g,x,y,t,a,k)=>{rect(g,'#e4d8b4',x-130,y-190,260,190);rect(g,'rgba(255,255,255,.12)',x-130,y-190,8,190);arc2(g,'#d0c49c',x-100,y,200,176);arc2(g,'#2a1e16',x-88,y,176,164);rect(g,'#f4d890',x-88,y-160,176,160);glow(g,x,y-90,130,'255,214,130',.3);
 for(let q=0;q<3;q++){const cx=x-52+q*52;ln(g,'#c8a440',1.4,[cx,y-158,cx,y-134]);dot(g,'#fff2c0',cx,y-130,6);dot(g,'rgba(255,240,180,.5)',cx,y-130,11)}for(let q=0;q<5;q++){ln(g,'#c8a440',2,[x-80+q*40,y-80,x-80+q*40,y-4])}ln(g,'#c8a440',3,[x-88,y-100,x+88,y-100]);
 [-44,0,44].forEach(o=>{rect(g,'#3a2a1a',x+o-14,y-34,28,3);rect(g,'#3a2a1a',x+o-1,y-31,2,31);dot(g,'#f4f0e6',x+o-5,y-38,2.6);rect(g,'#c8402a',x+o+3,y-42,4,7)});[-76,76].forEach(o=>{rect(g,'#c8bc94',x+o-4,y-150,8,150)})});
/* il monumento a Nicholas Winton sul binario 1 */
P('pgwinton',(g,x,y,t,a,k)=>{rect(g,'#6a6a6e',x-36,y-14,72,14);rect(g,'#8a8a8e',x-30,y-34,60,22);rect(g,'#c8a848',x-22,y-30,44,12);const B='#4a4034';poly(g,B,[[x-9,y-34],[x-7,y-106],[x+7,y-106],[x+9,y-34]]);dot(g,B,x,y-116,6.4);rect(g,B,x-8,y-124,16,4);ln(g,B,4,[x+8,y-100,x+18,y-70]);rect(g,'#5a4a34',x+14,y-76,14,12);for(let q=0;q<3;q++){ln(g,'#2a7a3a',1.6,[x-30+q*6,y-14,x-30+q*6,y-24]);dot(g,['#f4f0e6','#e8402a','#f2c82a'][q],x-30+q*6,y-26,3)}});
/* tabellone delle partenze, scritto in ceco */
P('pgtabellone',(g,x,y,t,a,k)=>{rect(g,'#26292e',x-2,y-60,4,60);rect(g,'#14161c',x-60,y-140,120,82);rect(g,'#1e2230',x-57,y-137,114,76);txt(g,'ODJEZDY',x,y-125,8,'#f4f0e6');const rows=[['VÍDEŇ','22:30','3'],['BERLÍN','22:50','5'],['BUDAPEŠŤ','23:10','1'],['KRAKOV','23:40','7']];rows.forEach((r,i)=>{const c=i==0&&Math.floor(t*2)%2?'#ffe27a':'#f2c82a';g.save();g.font='bold 7px monospace';g.textAlign='left';g.fillStyle=c;g.fillText(r[0],x-52,y-108+i*14);g.fillText(r[1],x+8,y-108+i*14);g.fillText(r[2],x+44,y-108+i*14);g.restore()});glow(g,x,y-100,80,'255,226,120',.14)});
/* chiosco dei párek v rohlíku, il würstel nel panino */
P('pgparek',(g,x,y,t,a,k)=>{rect(g,'#c8402a',x-40,y-70,80,70);rect(g,'#f4eedc',x-40,y-44,80,4);rect(g,'#2a2018',x-34,y-62,68,18);rect(g,k>.1?'#ffcf7a':'#e8d8a8',x-32,y-60,64,14);txt(g,'PÁREK',x,y-48,9,'#c8402a');poly(g,'#f2c82a',[[x-52,y-96],[x+52,y-96],[x+40,y-72],[x-40,y-72]]);for(let q=0;q<4;q++)rect(g,'#f4f0e6',x-52+q*26+13,y-96,13,24);rect(g,'#8a8a90',x-30,y-34,60,12);for(let q=0;q<4;q++)el(g,'#e8a870',x-22+q*14,y-30,6,3.4);for(let q=0;q<3;q++)el(g,'rgba(240,240,240,'+(.3*(1-((t*.5+q*.3)%1)))+')',x-10+Math.sin(t+q)*10,y-40-((t*24+q*14)%30),5,4);pers(g,x+62,y,t,{s:.78,top:'#e8e4d8',bot:'#2a2a36',hair:'#2a1a10'})});
/* binari e banchina della stazione: pensilina di ferro e vetro, orologio, il treno in sosta con le luci accese */
P('pgbinari',(g,x,y,t,a,k)=>{rect(g,'#3a3e46',x-260,y-170,520,14);for(let q=0;q<9;q++){rect(g,'#6a727c',x-250+q*60,y-156,5,156)}for(let q=0;q<7;q++){rect(g,k>.1?'#f4f4e8':'#c8c8c0',x-230+q*76,y-168,22,4);if(k>.1)glow(g,x-219+q*76,y-166,40,'255,255,220',.3*k)}
 poly(g,'#e8eaee',[[x-250,y-30],[x-250,y-110],[x+50,y-110],[x+120,y-92],[x+176,y-56],[x+196,y-40],[x+196,y-30]]);rect(g,'#b8352a',x-250,y-52,446,10);rect(g,'#6a6e78',x-250,y-42,446,8);
 for(let q=0;q<14;q++){rect(g,'#2a2e3a',x-238+q*26,y-98,18,28);rect(g,k>.1?LIT:'#7a9ab4',x-236+q*26,y-96,14,24)}poly(g,'#2a2e3a',[[x+70,y-102],[x+116,y-90],[x+150,y-62],[x+70,y-62]]);poly(g,'#7a9ab4',[[x+76,y-98],[x+112,y-88],[x+142,y-66],[x+76,y-66]]);dot(g,k>.1?'#fff6c0':'#e8e8d8',x+190,y-40,3);if(k>.1)glow(g,x+196,y-40,50,'255,246,190',.4*k);
 for(let q=0;q<12;q++)dot(g,'#2a2e3a',x-230+q*36,y-22,7);rect(g,'#14161c',x-250,y-18,446,6);
 rect(g,'#9a9a98',x-260,y+4,520,20);rect(g,'#f2c82a',x-260,y+4,520,4);gente(g,x-40,y+14,t,3,71);gente(g,x+60,y+16,t,2,77);rect(g,'#3a5a8a',x-70,y+4,10,16);rect(g,'#8a3a2a',x+22,y+6,10,16);
 rect(g,'#26292e',x-190,y-144,3,140);dot(g,'#f4eedc',x-188,y-150,13);dot(g,'#2a2a30',x-188,y-150,10);ln(g,'#f4eedc',1.4,[x-188,y-150,x-188,y-158]);ln(g,'#f4eedc',1.4,[x-188,y-150,x-182,y-147])});
/* varco finale: il treno fermo con i finestrini illuminati e, in fondo al binario, la luce di un altro mondo */
P('pgvarco',(g,x,y,t,a,k)=>{rect(g,'#6a6e78',x-200,y-6,400,6);const pu=.7+.3*Math.sin(t*3);
 const gr=g.createRadialGradient(x+130,y-70,2,x+130,y-70,170);gr.addColorStop(0,'rgba(255,255,255,'+pu+')');gr.addColorStop(.3,'rgba(190,150,255,'+(.5*pu)+')');gr.addColorStop(1,'rgba(110,231,255,0)');g.fillStyle=gr;g.fillRect(x-60,y-250,380,340);
 poly(g,'#e4e6ea',[[x-210,y-6],[x-210,y-120],[x+30,y-120],[x+80,y-100],[x+110,y-60],[x+120,y-6]]);rect(g,'#b8352a',x-210,y-40,330,6);rect(g,'#c8ccd2',x-210,y-52,330,8);
 for(let q=0;q<9;q++){rect(g,'#2a2e3a',x-196+q*32,y-104,22,30);rect(g,LIT,x-194+q*32,y-102,18,26);glow(g,x-185+q*32,y-90,26,'255,226,150',.25)}
 poly(g,'#2a2e3a',[[x+20,y-110],[x+66,y-98],[x+96,y-66],[x+20,y-66]]);poly(g,'#6a8aa4',[[x+26,y-106],[x+62,y-96],[x+88,y-70],[x+26,y-70]]);
 rect(g,'#f2c82a',x-210,y-10,330,4);for(let q=0;q<11;q++)rect(g,'rgba(0,0,0,.12)',x-208+q*30,y-116,1.4,110);
 glow(g,x-100,y-90,150,'255,255,220',.18);poly(g,'rgba(246,250,255,'+(.6*pu)+')',[[x+124,y-120],[x+150,y-120],[x+150,y-6],[x+124,y-6]]);
 for(let q=0;q<6;q++)dot(g,'rgba(255,255,255,'+(.5*pu)+')',x+140+Math.sin(t+q*2)*34,y-70+Math.cos(t*1.3+q)*50,2.4)});
/* =========================== PERSONAGGI =========================== */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Lenka: giubbotto verde, berretto di lana, treppiede sulla spalla, macchina fotografica al collo */
 NP('pg_lenka',NAME.pg_lenka,700,GREET.pg_lenka,{skin:'#e0b090',top:'#4a6a4a',bot:'#2a2a36',hair:'#8a4a2a',long:1,s:1.0},(g,b,t)=>{poly(g,'#6a3a52',[[-9,-112+b],[9,-112+b],[8,-120+b],[-8,-120+b]]);dot(g,'#6a3a52',0,-122+b,3);rect(g,'#14161c',-6,-80+b,12,9);dot(g,'#3a3a40',0,-75+b,3.4);dot(g,'#8ab0d0',0,-75+b,1.6);ln(g,'#2a2a2e',1.4,[-6,-88+b,-4,-80+b]);ln(g,'#2a2a2e',1.4,[6,-88+b,4,-80+b]);ln(g,'#3a3a40',2.4,[-14,-118,14,-20]);ln(g,'#3a3a40',2,[14,-20,24,-4]);ln(g,'#3a3a40',2,[14,-20,6,-4])}),
 /* Carlo IV: corona, mantello d'ermellino rosso, scettro e globo */
 NP('pg_karel',NAME.pg_karel,6150,GREET.pg_karel,{skin:'#e0b896',top:'#7a1e2a',bot:'#4a1a22',hair:'#4a3a28',long:1,s:1.04},(g,b,t)=>{poly(g,'#7a1e2a',[[-14,-92+b],[14,-92+b],[20,-8],[-20,-8]]);rect(g,'#f4f0e6',-14,-92+b,28,6);for(let q=0;q<5;q++)rect(g,'#14110f',-10+q*5,-91+b,1.6,3);poly(g,'#e8c04a',[[-8,-114+b],[8,-114+b],[10,-124+b],[5,-119+b],[0,-126+b],[-5,-119+b],[-10,-124+b]]);rect(g,'#e8c04a',-8,-92+b,16,2);rect(g,'#2a1e14',2,-98+b,10,2);ln(g,'#e8c04a',2.4,[20,-10,20,-100]);dot(g,'#e8c04a',20,-104,4);ln(g,'#e8c04a',1.4,[20,-108,20,-114]);ln(g,'#e8c04a',1.4,[17,-111,23,-111])}),
 /* Zdeněk: giubba blu della funicolare, berretto da ferroviere, fischietto, manovella */
 NP('pg_zdenek',NAME.pg_zdenek,9150,GREET.pg_zdenek,{skin:'#d8a078',top:'#2a4a7a',bot:'#2a2e3a',hair:'#8a8a8a',s:1.02},(g,b,t)=>{rect(g,'#1e3a68',-10,-116+b,20,6);rect(g,'#1e3a68',-12,-111+b,26,2.4);rect(g,'#e8c04a',-3,-114+b,6,3);for(let q=0;q<3;q++)dot(g,'#e8c04a',-3,-84+q*8+b,1.2);rect(g,'#c8c8d0',3,-82+b,5,4);ln(g,'#b8b8c0',1,[5,-80+b,10,-72]);ln(g,'#3a3a40',3,[16,-62,26,-40]);dot(g,'#c8402a',27,-38,3.4);rect(g,'#f4f0e6',-8,-92+b,16,4)}),
 /* Vlasta: grembiule lungo scuro, boccali in mano, baffi */
 NP('pg_vlasta',NAME.pg_vlasta,12270,GREET.pg_vlasta,{skin:'#d8a078',top:'#f4f0e6',bot:'#2a2a36',hair:'#4a3a28',s:1.06},(g,b,t)=>{rect(g,'#1e1a18',-12,-78+b,24,60);rect(g,'#f4f0e6',-12,-78+b,24,4);rect(g,'#14110f',2,-98+b,10,2.4);for(let q=0;q<3;q++){const o=q*7;rect(g,'#f4f0e6',14+o*.4,-84-o+b,8,12);rect(g,'#e8a224',15+o*.4,-82-o+b,6,9);rect(g,'#f4f0e6',14+o*.4,-86-o+b,8,3)}rect(g,'#f4f0e6',-14,-92+b,10,5);ln(g,'#1e1a18',2,[-12,-80,-18,-70])}),
 /* Kafka: abito nero, bombetta, cravatta, magro, orecchie grandi, valigetta */
 NP('pg_kafka',NAME.pg_kafka,14780,GREET.pg_kafka,{skin:'#d8c0a8',top:'#1e1e24',bot:'#1e1e24',hair:'#14110f',s:1.04},(g,b,t)=>{el(g,'#14110f',0,-112+b,17,4);poly(g,'#14110f',[[-9,-113+b],[9,-113+b],[8,-124+b],[-8,-124+b]]);rect(g,'#3a3a40',-9,-115+b,18,2.4);rect(g,'#f4f0e6',-3,-92+b,6,22);poly(g,'#14110f',[[-2,-92+b],[2,-92+b],[1,-72+b],[-1,-72+b]]);rect(g,'#2a2a30',-11,-88+b,3,40);dot(g,'#d8c0a8',-10,-104+b,2.6);dot(g,'#d8c0a8',10,-104+b,2.6);rect(g,'#5a3a22',16,-22,18,14);rect(g,'#3a2412',16,-22,18,2.4);ln(g,'#2a2a2e',1.6,[22,-22,22,-26])}),
 /* Pavlína: zaino, libri, felpa universitaria, capelli a coda */
 NP('pg_pavlina',NAME.pg_pavlina,16650,GREET.pg_pavlina,{skin:'#e0b090',top:'#c8402a',bot:'#2a3a5a',hair:'#3a2418',s:.98},(g,b,t)=>{rect(g,'#3a4a6a',-18,-86+b,8,32);rect(g,'#2a3a58',-18,-86+b,8,4);dot(g,'#3a2418',8,-110+b,3.4);ln(g,'#3a2418',3,[8,-108+b,12,-96+b]);rect(g,'#e8c04a',-2,-74+b,5,3);rect(g,'#f4f0e6',14,-74,12,14);rect(g,'#2a5aa8',14,-74,12,3);rect(g,'#c8402a',14,-68,12,3);ln(g,'#c8402a',2.4,[8,-84+b,14,-70])}),
 /* Jarda: divisa blu del tram, berretto, borsello del cambio, nastrino */
 NP('pg_jarda',NAME.pg_jarda,18800,GREET.pg_jarda,{skin:'#d8a078',top:'#2a4a8a',bot:'#2a2e3a',hair:'#5a4a3a',s:1.06},(g,b,t)=>{rect(g,'#1e3a70',-10,-116+b,20,6);rect(g,'#14264a',-13,-111+b,28,2.4);rect(g,'#c8402a',-3,-114+b,6,3);rect(g,'#c8402a',-11,-82+b,22,3);for(let q=0;q<4;q++)dot(g,'#e8c04a',-4,-86+q*7+b,1.2);rect(g,'#6a4a2a',10,-62,10,10);ln(g,'#6a4a2a',1.4,[12,-62,12,-66]);rect(g,'#14110f',2,-98+b,10,2)}),
 /* Marcela: cappello rosso, giacca blu della ferrovia, paletta di segnalazione e fischietto */
 NP('pg_marcela',NAME.pg_marcela,21700,GREET.pg_marcela,{skin:'#e0b090',top:'#2a3a6a',bot:'#2a3a6a',hair:'#8a5a2a',long:1,s:1.0},(g,b,t)=>{rect(g,'#c8281e',-10,-118+b,20,9);rect(g,'#c8281e',-13,-111+b,26,2.4);rect(g,'#e8c04a',-3,-116+b,6,4);rect(g,'#c8402a',-8,-90+b,16,4);for(let q=0;q<3;q++)dot(g,'#e8c04a',0,-82+q*8+b,1.2);ln(g,'#3a3a40',2.4,[16,-4,16,-90]);dot(g,'#c8281e',16,-98,9);dot(g,'#f4f0e6',16,-98,4.4);ln(g,'#c8c8d0',1.4,[-6,-84+b,-2,-78+b])})
];
/* =========================== OGGETTI LUNGO IL PERCORSO =========================== */
const props=[
 /* zona 1 · Ponte Carlo all'alba */
 ['mdtarga',150,'KARLŮV MOST'],['pgtorrepc',380],['pglampada',560],['pgstatua',900,1],['pgpittore',1060,0],['pglampada',1210],['pgstatua',1330,0],['pgpittore',1450,1],['pgstatua',1640,2],['pglampada',1780],['pgnepomuk',1950],['pgstatua',2100,3],['pgtorrems',2250],
 /* zona 2 · Kampa e Malá Strana */
 ['mdtarga',2470,'KAMPA'],['pgsalice',2600,1.1],['mdpanca',2720,1],['mdcestino',2800],['mdbici',2880],['pgsalice',2980,.9],['pgmulino',3250],['mdfiori',3440],['mdgatto',3500,'#3a3a3e'],['pglennon',3800],['pglampada',4000],['mdtarga',4120,'NERUDOVA'],['pgsegno',4220,0],['pgsegno',4340,1],['pgsegno',4460,2],['pgsegno',4560,3],
 /* zona 3 · Castello e San Vito */
 ['mdtarga',4700,'HRADČANY'],['pgcancello',4950],['pglampada',5200],['pgguardia',5500],['pgguardia',5600],['pglampada',5750],['mdlanterna',5900],['pgsanvito',6450],['mdpanca',6720,1],['pgfinestre',6950],['mdlanterna',7150],['pgvicolo',7400],['pglampada',7570],
 /* zona 4 · Strahov e Petřín */
 ['mdtarga',7700,'STRAHOV'],['pgstrahov',7950],['mdtavolini',8180],['mdplatano',8250,1.2],['pgmuro',8400],['mdpino',8650,1.1],['mdpanca',8720,1],['pgpetrin',8900],['mdcedro',9050,1.1],['pgfunicolare',9400],['mdcestino',9640],
 /* zona 5 · Città Vecchia */
 ['mdtarga',9750,'STARÉ MĚSTO'],['pgcarrozza',9950],['pglampada',10180],['pgorloj',10400],['pgtyn',10850],['pghus',11300],['pglampada',11500],['pgcroci',11700],['pgtrdelnik',12050],['pghospoda',12450],['mdlavagna',12600,'PIVO'],
 /* zona 6 · Josefov */
 ['mdtarga',12800,'JOSEFOV'],['pglampada',13050],['mdtarga',13250,'PAŘÍŽSKÁ'],['pgsegno',13340,3],['mdbanca',13600],['pgmunicipio',13800],['pgsinagoga',14150],['pgcimitero',14550],['mdpanca',14700,1],['pgkafka',14900],
 /* zona 7 · Torre delle Polveri e Piazza Venceslao */
 ['mdtarga',15150,'NÁMĚSTÍ REPUBLIKY'],['pgpolveri',15400],['pglampada',15620],['pgobecni',15900],['mdsemaforo',16130],['pgwenc',16350],['pgpalach',16560],['pgmuseo',16800],['pglampada',17020],['pglucerna',17300],['pgparek',17520],
 /* zona 8 · Lungofiume */
 ['mdtarga',17780,'RAŠÍNOVO NÁBŘEŽÍ'],['pgdancing',18050],['pglampada',18280],['pgfermata',18600],['pgnaplavka',19150],['mdpanca',19400,1],['pgsalice',19620,1.2],['mdgatto',19780,'#b8803a'],['pglampada',19950],
 /* zona 9 · Stazione Centrale */
 ['mdtarga',20150,'HLAVNÍ NÁDRAŽÍ'],['pgstazione',20700],['pglampada',20960],['pgsala',21300],['pgparek',21560],['pgbinari',21980],['pgwinton',21850],['pgtabellone',22300],['mdcarrello',22380],['pgvarco',22650]
];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'praga',name:'Praga · Dal Ponte Carlo alla Stazione Centrale',width:W1,sky:['#7f8cc0','#eeb0bc','#ffd8b4'],gt:372,gr:['#a39a88','#8a8070'],chord:[196,246.9,293.7,370],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio --- */
(function(){
const TOPX_PG={
pg_lenka:[
["Perché sei qui a quest’ora, con il treppiede?","Perché l’alba sul Ponte Carlo dura poco e non si ripete mai uguale. Con la nebbia sulla Moldava e il sole che colpisce il Castello hai forse dieci minuti di luce buona. Dopo arrivano i turisti, e la foto è un’altra."],
["Come fai a stare qui da sola senza folla?","Vengo verso le quattro e mezza. A quell’ora ci sono solo i netturbini, qualche musicista che torna a casa e noi fotografi, che ci salutiamo con un cenno e basta. Prima delle sette il ponte è quasi tuo, poi diventa un fiume di gente."],
["Quanto è lungo questo ponte?","Circa cinquecentosedici metri, sedici arcate, una decina di metri di larghezza. Per secoli è stato l’unico passaggio sul fiume: chi voleva andare dal Castello alla città doveva passare di qui. Il resto lo fa la leggenda."],
["Che leggenda?","Dicono che la prima pietra sia stata posata il 9 luglio 1357 alle 5:31, perché i numeri 1-3-5-7-9-7-5-3-1 si leggono uguali da entrambi i lati. Sul fatto che servissero davvero i numeri o gli astrologi, io resto scettica, ma mi piace come storia."],
["Davvero nella malta hanno messo le uova?","Si racconta di sì, per renderla più forte, e a Praga si dice pure vino e latte. Gli studiosi non sono tutti d’accordo, quindi la dico così: è una bella storia, non lo giuro. A me basta che il ponte regga da più di seicento anni."],
["Perché le statue sembrano così scure?","Sono quasi tutte barocche, in arenaria, e l’inquinamento e il tempo le hanno annerite. Molte oggi sono copie: gli originali sono stati portati al riparo, al museo. Però al mattino, con la luce radente, anche il nero sembra velluto."],
["C’è una statua da toccare per fortuna?","Sì, quella di San Giovanni Nepomuceno, in bronzo. Sul basamento c’è un rilievo lucido, consumato dalle mani: la gente lo tocca per tornare a Praga. Io lo tocco ogni volta che passo, per scaramanzia, anche se vivo qui."],
["Che cosa c’è da vedere oltre alle statue?","Gli artisti di strada, le caricature, i ritratti, qualcuno che suona il violino o il jazz. E sotto, la Moldava con i cigni. Al mattino presto invece c’è solo il rumore dei passi sul selciato e le campane lontane."],
["Che cosa fai dopo le foto?","Vado a fare colazione da un panificio che conosco, dove i koláče, dolcetti con marmellata o ricotta, sono ancora caldi. Poi caffè e mi metto a scegliere le foto. Molti praghesi fanno colazione veloce, spesso in piedi."],
["Come si dice «buongiorno» in ceco?","«Dobré ráno» la mattina presto, «Dobrý den» durante il giorno. Entrando in un negozio qui si saluta sempre: non dirlo sembra maleducato. E «Děkuji» è grazie, anche se fra giovani senti più spesso «díky»."],
["Qual è il tuo punto segreto per fotografare Praga?","Non è segreto, ma pochi ci arrivano presto: la riva di Kampa, sotto il ponte, con il ponte stesso che si riflette nell’acqua. Se vuoi una vista dall’alto, sali a Petřín nel tardo pomeriggio. Ma l’alba è mia, eh!"],
["Posso salutarti e proseguire la mia passeggiata?","Certo, Pierpaolo! Vai verso Malá Strana, il sole ormai ha preso il Castello. Mi raccomando, guarda sempre in alto: a Praga le cose più belle stanno sopra le teste. Na shledanou!"]
],
pg_karel:[
["Chi sei e come sei arrivato al trono?","Sono nato a Praga nel 1316 e fui battezzato Venceslao; Carlo è il nome che presi da giovane, a Parigi. Mio padre era Giovanni di Lussemburgo, re di Boemia, e mia madre Elisabetta apparteneva alla dinastia dei Přemyslidi. Fui re di Boemia e poi imperatore."],
["Perché hai voluto fare di Praga una grande capitale?","Perché era la mia città. La volevo bella, sacra e frequentata da studiosi e mercanti. Sotto di me Praga divenne capitale dell’Impero e sede di un’arcidiocesi, e ci arrivarono molti stranieri."],
["Quando hai fondato l’università?","Nel 1348. Fu la prima dell’Europa centrale, a nord delle Alpi e a est del Reno. La volevo perché i miei sudditi non dovessero più andare a studiare a Parigi o a Bologna. Oggi si chiama Università Carlo, in mio onore."],
["Che cos’è la Città Nuova?","Un quartiere intero che fondai sempre nel 1348, a sud della Città Vecchia. Strade larghe, piazze grandi, come la futura Piazza Venceslao, che era il mercato dei cavalli. Era un progetto urbanistico per i tempi moderno."],
["Perché il Ponte Carlo porta il tuo nome?","Perché lo feci costruire io, dopo che il vecchio ponte romanico fu travolto da una piena nel 1342. La posa della prima pietra è fissata al 1357, e i lavori andarono avanti fino ai primi del Quattrocento. A dire il vero il nome «Ponte Carlo» venne molto dopo la mia morte."],
["Che cosa ti rende fiero della cattedrale?","San Vito: la iniziai nel 1344, con un architetto francese, Matthias di Arras, e poi con il giovane Peter Parler. Io non la vidi finita: fu completata soltanto nel 1929, quasi seicento anni dopo. Una cattedrale è un patto con chi verrà."],
["Che mi dici del castello di Karlštejn?","È la fortezza che feci costruire fuori città, per custodire le insegne imperiali e le reliquie. Ci andavo a ritirarmi e a pregare, e a lavorare: ero un uomo di governo, ma anche di devozione. Non è un castello da fiaba, ma è un bel posto per pensare."],
["È vero che hai fatto costruire il Muro della Fame?","Si dice che lo feci costruire intorno al 1360 per dare lavoro ai poveri durante una carestia. La cinta fa parte delle mura della Città Nuova, ed è ancora visibile sulla collina di Petřín. Che sia nata proprio per quello, non posso giurarlo, ma la leggenda è bella."],
["Parlavi più lingue?","Sì: ceco, latino, tedesco, francese e italiano. Sono nato in terra boema ma ho studiato a Parigi e visitato l’Italia. Petrarca fu mio amico per lettera, e io volevo parlare a tutti nella loro lingua."],
["Che cosa vorresti che i praghesi ricordassero di te?","Che li chiamarono «padre della patria»: Pater patriae. Non perché fossi perfetto, ma perché ho dato loro una città dove studiare, pregare e commerciare. Se oggi passeggi tra torri e ponti, un po’ è merito di quegli anni."],
["Hai un consiglio per chi visita Praga?","Alza gli occhi, sempre. E non limitarti alle grandi strade: le chiese, le corti e i portali raccontano più dei libri. Fermati dove ti piace, e se puoi, ascolta le campane."],
["Posso salutarti e proseguire la mia passeggiata?","Va’ pure, Pierpaolo. Che il tuo cammino sia lungo come questa città. E ricorda: ciò che si costruisce con pazienza resta. Che Dio ti accompagni."]
],
pg_zdenek:[
["Da quanto tempo lavori sulla funicolare?","Trent’anni, quasi trentuno. Ho cominciato da giovane, dopo il servizio militare, e non me ne sono più andato. Alla gente sembro uno che guarda solo i binari, ma sulla collina impari a leggere il tempo."],
["Come funziona questa funicolare?","Due cabine collegate da una fune: una sale, una scende, e si bilanciano. Aperta nel 1891, è lunga circa cinquecento metri. Una volta funzionava ad acqua; oggi è elettrica, ma il principio è lo stesso di allora."],
["Perché l’hanno chiusa per tanti anni?","Per una frana: nel 1965 il terreno si mosse e la linea fu fermata. Ci vollero vent’anni di lavori e polemiche: riaprì nel 1985. Per chi vive qui, quando si ferma la funicolare, si ferma un pezzo di Praga."],
["Posso usare il biglietto dei mezzi pubblici?","Sì, la funicolare rientra nel sistema dei trasporti della città: è parte di quello che i praghesi chiamano «MHD», il trasporto urbano. Un biglietto a tempo vale su metro, tram, bus e funicolare. Non dimenticare di timbrare o di attivarlo con l’app!"],
["Che cosa c’è in cima alla collina?","Il parco di Petřín, il frutteto, il roseto, e la torre. Quella che i praghesi chiamano «la piccola Eiffel»: è alta circa 63 metri e mezzo, con 299 gradini. Se il tempo è buono, da lassù vedi tutta Praga e i suoi tetti rossi."],
["È vero che la torre è una copia della torre Eiffel?","Più che una copia è un omaggio: fu costruita nel 1891 dopo una visita di alcuni praghesi all’Esposizione di Parigi. Più piccola, certo. A noi piace dire che sta su un colle, quindi in cima è più alta di quella di Parigi."],
["Che gente sale sulla funicolare?","Turisti con la macchina fotografica, ragazzi che salgono a baciarsi, famiglie con il passeggino, pensionati che vanno nel parco a passeggiare con la borsa della spesa. A maggio, quando gli alberi sono in fiore, c’è la coda. Ci sono anche tanti innamorati, perché sotto i ciliegi si bacia, è tradizione."],
["Che cosa si fa a Praga il primo maggio?","Si va a Petřín con la persona che si ama e ci si bacia sotto un albero fiorito, come vuole la tradizione legata al poeta Karel Hynek Mácha, che a Petřín ambientò il suo poema. Si dice che garantisca amore per tutto l’anno."],
["Che cosa mangiate a pranzo?","Io porto un panino con salame e cetriolino, o un «chlebíček», una tartina con maionese e uova. Oppure vado alla hospoda dietro l’angolo: una zuppa, un piatto del giorno, e la birra analcolica se sono di turno. Il lunedì tutti fanno il «menu del giorno» a prezzo fisso."],
["Come si dice «birra» e «salute» in ceco?","«Pivo» è la birra, «Na zdraví» è salute. Quando si brinda, guardare l’altro negli occhi è obbligatorio: se no, dicono, vi aspettano sette anni di sfortuna in amore. Ho visto turisti sbiancare."],
["Qual è la parte più bella del tuo lavoro?","Il silenzio fra una corsa e l’altra. Dalla cabina vedo la città scendere e salire come in un presepe. D’inverno, con la neve sui tetti, mi sembra di guidare dentro una cartolina."],
["Posso salutarti e proseguire la mia passeggiata?","Ma certo, Pierpaolo! Scendi con calma, che le scale di Petřín sono ripide ma belle. Se hai tempo, fermati a un chiosco a prendere un «trdelník»: è turistico, ma caldo. Na shledanou!"]
],
pg_vlasta:[
["Che cos’è una hospoda?","È la birreria di quartiere, il cuore della vita sociale: bancone di legno, tavoli lunghi, la spina, e il cameriere che ti conosce. Non è un ristorante elegante: è dove vai dopo il lavoro, la domenica a pranzo, o per la partita."],
["Come si ordina la birra?","Dici «pivo», e basta: nel locale arriva quella della casa, di solito una lager. Spesso il cameriere porta il boccale e fa un segno sul sottobicchiere: ogni linea è una birra. Alla fine contiamo le righe."],
["Perché ogni tanto mettete il segno sul sottobicchiere?","Per tenere il conto senza scrivere ogni volta. Per i clienti fissi, alcuni locali non fanno nemmeno quello: continuano a portare finché non fai un segno di no. E se vuoi fermarti, metti il sottobicchiere sopra il boccale."],
["Che cosa sono la «hladinka», lo «šnyt» e il «mlíko»?","Sono tre modi di spillare. La «hladinka» ha il boccale pieno di liquido con una schiuma sottile; lo «šnyt» è mezzo boccale, più liquido che schiuma; il «mlíko», il «latte», è quasi tutto schiuma, cremosa e dolce. Ci vuole mano per farli bene."],
["Quanta birra bevono i cechi?","Una quantità enorme: più di cento litri a testa l’anno, uno dei consumi più alti al mondo. Ma è un po’ come dire che gli italiani mangiano pasta: non siamo tutti ubriachi, è solo cultura. Da noi la birra è quasi un alimento."],
["Che cosa mangiate con la birra?","Spesso qualcosa di sostanzioso: il «smažený sýr», formaggio impanato e fritto con le patate e la salsa tartara; gli «utopenci», salsicce sott’aceto; il «tlačenka», una specie di salume. Chi vuole mangiare davvero sceglie la svíčková o il vepřo-knedlo-zelo."],
["Che cosa sono la «svíčková» e il «vepřo-knedlo-zelo»?","La svíčková è manzo in salsa cremosa di verdure, con panna acida e mirtilli rossi, e i canederli di pane. «Vepřo-knedlo-zelo» sono tre parole: maiale, canederlo, cavolo acido. I cechi dicono che è il piatto nazionale, e lo mangiano la domenica."],
["È vero che i prezzi sono più bassi nelle birrerie fuori dal centro?","Verissimo. Nel centro paghi anche tre volte più che in una hospoda di quartiere. Se vuoi risparmiare, vai a Žižkov o a Vinohrady, dove la birra costa quasi come l’acqua. Oppure cerca una «tankovna», dove la birra arriva dai grandi serbatoi."],
["Che cosa dite quando si brinda?","«Na zdraví!», e guardi negli occhi chi brindi, sempre. Poi si batte il boccale sul tavolo, o sul sottobicchiere. Se non lo fai, passi per un maleducato: i miei clienti anziani non perdonano."],
["Come ci si comporta in una hospoda?","Se il tavolo è già occupato a metà, chiedi «Je tu volno?», «È libero?», e ti siedi. Si fa conversazione, anche con sconosciuti. Non si va dal cameriere con fretta: ti vede, vieni servito."],
["Dimmi una curiosità storica sulla birra di Praga.","Nel Medioevo i monaci e i cittadini producevano birra in quantità, e molti monasteri la facevano da secoli: a Strahov ne hanno ancora una propria. Non mi chiedere date precise, ma la tradizione è lunghissima."],
["Posso salutarti e proseguire la mia passeggiata?","Certo, Pierpaolo, ma la prossima volta ti siedi e ti offro il primo boccale. «Na zdraví» e buona strada! Al ritorno, dimmi se hai provato il formaggio fritto."]
],
pg_kafka:[
["Chi è davvero Franz Kafka?","Un impiegato che scrive. Sono nato a Praga il 3 luglio 1883, in una famiglia ebraica di lingua tedesca. Di giorno lavoravo in un istituto di assicurazioni contro gli infortuni sul lavoro, di notte scrivevo. Non ho mai pensato di essere un grande scrittore."],
["Che rapporto hai con Praga?","Non riesco a lasciarla: è come una madre con gli artigli, ho scritto una volta a un amico. Mi trattiene e mi spaventa. In questa città ho vissuto quasi tutta la vita, e ogni vicolo mi sembra un labirinto."],
["Dove abitavi?","In molte case, tutte nel centro, a due passi dalla Piazza della Città Vecchia, dove sono nato. Per un periodo, nel 1916-17, stetti in una casetta del Vicolo d’Oro, al numero 22, la più piccola e azzurra: la sorella Ottla l’aveva presa per me, per scrivere in pace."],
["Qual è la tua opera più famosa?","«La metamorfosi», del 1915: un uomo, Gregor Samsa, si sveglia trasformato in un enorme insetto, e la sua famiglia non sa che fare di lui. Non vorrei spiegarla: ognuno vi legge ciò che teme. Ho scritto anche «Il processo» e «Il castello», incompiuti."],
["Perché i tuoi romanzi sono rimasti incompiuti?","Perché non mi sembravano mai abbastanza. Scrivevo a lampi, la notte, e il mattino dopo mi sembrava tutto sbagliato. «Il processo» e «Il castello» li lasciai senza fine; quasi tutto uscì dopo la mia morte, per volontà di altri."],
["Che cosa ti disse tuo padre?","Era un commerciante duro e sicuro di sé, e io mi sentivo piccolo. Gli scrissi una lunga lettera, che lui non lesse mai. Parlava di paura e di autorità: due cose che si ritrovano nei miei libri."],
["Era vero che volevi bruciare i tuoi scritti?","Chiesi all’amico Max Brod di distruggere tutto ciò che non era stato pubblicato. Lui non lo fece: pubblicò i romanzi e li salvò. Gli dissi di bruciarli, ma forse sapevo che non l’avrebbe fatto. Gli sono grato e anche no."],
["Di che cosa soffrivi?","Di tubercolosi, scoperta nel 1917. Mi consumò lentamente. Morii il 3 giugno 1924 in una clinica di Kierling, vicino a Vienna, a quarantuno anni. Ma non voglio parlarne a lungo: la vita è fatta di più cose."],
["Perché a Praga ti ricordano così tanto?","Perché i praghesi ormai mi considerano un figlio della città, anche se scrivevo in tedesco. Mi hanno dedicato un museo e un monumento qui a Josefov, dello scultore Jaroslav Róna, del 2003: un abito vuoto che cammina, con un omino sulle spalle."],
["Come immagini oggi la vita a Praga?","Mi sembra una città troppo affollata, ma anche più libera. Mi piacciono i caffè, dove si sta ore senza che nessuno ti cacci. Mi sono sempre piaciute le passeggiate lungo il fiume, e le salite con vista sui tetti."],
["Hai un consiglio per chi ti legge?","Non cercare per forza il significato: lascia che il racconto lavori su di te. Se un giorno ti sembra di non capire, va bene: capita anche a me. E ricorda che dietro ogni porta c’è un portiere, ma anche un’altra porta."],
["Posso salutarti e proseguire la mia passeggiata?","Certo, vada pure. Mi ha fatto bene parlare, ed è raro. Se trova un varco, lo attraversi senza chiedere permesso: nei miei libri quasi nessuno ci riesce. Buona strada, Pierpaolo."]
],
pg_pavlina:[
["Che cosa studi all’Università Carlo?","Storia, ma mi piace anche archeologia urbana. L’università è la più antica dell’Europa centrale: la fondò Carlo IV nel 1348. Le lezioni si tengono in vari edifici sparsi per il centro, e fra una e l’altra corri."],
["Come si vive da studente a Praga?","Con pochi soldi ma molta fantasia. Si condivide l’appartamento, si mangia nelle mense universitarie, si va alla hospoda del quartiere dopo l’esame. Il trasporto pubblico per gli studenti costa pochissimo, quindi giriamo con tram e metro."],
["Che cosa mangiate a mensa?","Cose semplici: una zuppa, un secondo con patate e salsa, una porzione di «knedlíky», i canederli. Il venerdì spesso c’è il pesce o il «smažený sýr». Il caffè con latte caldo, e basta. E il «koláč» come dolce, se avanza qualche moneta."],
["Che cos’è il Majáles?","La festa degli studenti di maggio, nata nell’Ottocento e ripresa dopo la caduta del regime. Si elegge un «re del Majáles», ci sono concerti e un corteo, e tutti si travestono. È una settimana senza esami, o quasi."],
["Che cosa fai nel fine settimana?","Spesso vado «na chatu», in una casetta di campagna. Molti cechi ne hanno una, di famiglia o in affitto: si esce da Praga il venerdì e si torna la domenica sera. Si taglia l’erba, si fa il fuoco, si raccolgono i funghi."],
["Raccogliere funghi è davvero uno sport nazionale?","Quasi. I cechi sono appassionati: nei boschi, a fine estate, sembra di essere a una festa. Si conoscono tutte le varietà e si custodiscono i posti segreti. Se vuoi farlo, vai con qualcuno che sa riconoscere quelli buoni!"],
["Che cosa fate a Natale?","La sera del 24 si mangia carpa fritta con insalata di patate, e prima si tiene il pesce vivo nella vasca da bagno! Poi arriva «Ježíšek», Gesù Bambino, che porta i regali: non Babbo Natale. Si aspetta il tintinnio di un campanello."],
["E il 5 dicembre?","La sera di San Nicola, Mikuláš, passano per strada tre figure: un santo con la barba, un angelo e un diavolo, «čert». I bambini devono recitare una poesia: se sono stati buoni, ricevono dolci; altrimenti il diavolo minaccia di metterli nel sacco."],
["Come passate la Pasqua?","Con la «pomlázka»: i ragazzi fanno il giro di casa con un frustino di rami intrecciati e, per tradizione, sfiorano le ragazze per augurare salute e bellezza. Le ragazze rispondono regalando uova dipinte. Fa ridere, ma oggi si fa con molta più attenzione."],
["Che cosa sapete del 1989?","Che a novembre ci fu la Rivoluzione di Velluto: studenti e cittadini scesero in piazza, soprattutto a Piazza Venceslao e a Národní třída, e il regime comunista cadde senza violenza. Il 17 novembre oggi è giornata di memoria: si portano candele e fiori."],
["Come si dicono i nomi nelle case ceche?","Scarpe fuori, pantofole dentro! Appena entri in una casa ceca, ti offrono le «bačkory», le ciabatte. Rifiutarle è fuori luogo. E si celebra ancora l’onomastico, «svátek»: il calendario ha un nome per ogni giorno."],
["Posso salutarti e proseguire la mia passeggiata?","Certo! Ma ora devo davvero correre. Se ti capita, fai un salto in Piazza Venceslao al tramonto: si accende tutto. Ahoj e buona strada, Pierpaolo!"]
],
pg_jarda:[
["Da quanto guidi il tram 17?","Vent’anni circa. Parto dal deposito, sali e scendi lungo la Moldava. La linea passa sul lungofiume e davanti al Teatro Nazionale; ogni giorno vedo il fiume cambiare colore."],
["Quanto sono antichi i tram di Praga?","Il primo tram elettrico partì nel 1891, per merito dell’ingegnere František Křižík: un tratto breve, per l’Esposizione. Da allora non ci siamo più fermati. Oggi la rete è fra le più estese in Europa centrale."],
["Che cosa devo sapere per salire?","Che il biglietto va convalidato o attivato subito. I controllori in borghese sono bravissimi a trovare chi si dimentica, e la multa non è piccola. Se sei in dubbio, chiedi a me: ti rispondo volentieri, ma al semaforo."],
["Com’è la metropolitana di Praga?","Tre linee, A verde, B gialla e C rossa. La prima aprì il 9 maggio 1974. La fermata Náměstí Míru è una delle più profonde della città: la scala mobile è lunghissima, circa 87 metri, e dura più di due minuti. Se ci sali con un dolore alle ginocchia, preparati."],
["Come si comporta la gente nel tram?","Con rispetto, ma in silenzio. Ci si siede se si può, si cede il posto agli anziani, e a nessuno piace sentire un telefono a voce alta. Qui si dice: «Ticho jako v kostele», silenzio come in chiesa."],
["Che cosa guardi dal finestrino?","La Casa Danzante, che sta sulla riva. A me ricorda due ballerini, e infatti l’hanno chiamata «Ginger e Fred». Quando passo, sorrido sempre: sorge dove nel 1945 cadde una bomba, e per anni rimase un vuoto fra le case."],
["Come si dice «grazie» e «prego»?","«Děkuji» è grazie, «prosím» è prego, e anche «per favore» e «ecco»: è una parola multiuso. Quando dai un biglietto: «prosím». Quando lo ricevi: «děkuji». Se aggiungi «Na shledanou», «arrivederci», sei a posto."],
["Che cosa fai nelle giornate libere?","D’estate vado sul fiume, in barca o a pescare. D’inverno, quando c’è freddo, mi chiudo in una hospoda con gli amici e giochiamo a carte. Con i figli andiamo a pattinare, o a sciare sui monti Giganti."],
["Che cosa vuol dire «paráda»?","È una parola da tutti i giorni: «fantastico», «ottimo». Se ti dicono «To je paráda!», ne sono contenti. «Bezva» è lo stesso, ma più giovane. Fra amici si dice «čau» per ciao, e «hele» per «guarda»."],
["Ti piace vivere nel centro?","Per lavoro sì, ma io abito fuori, in un quartiere di condomini costruiti negli anni Settanta. I «panelák» non sono belli, ma in quegli appartamenti è cresciuta tutta la mia generazione. Ci sono i parchi, il negozio, e la birra la sera."],
["Che cosa ne pensi dei turisti?","Che ci sono sempre, e che dobbiamo voler loro bene. Le code in centro mi fanno impazzire, ma mi fa piacere quando qualcuno mi chiede dove passa il tram per la Casa Danzante. L’importante è non fermarsi sui binari per una foto!"],
["Posso salutarti e proseguire la mia passeggiata?","Ma certo, Pierpaolo. Io riparto fra due minuti, con il fischio e la campana. Fai bene a proseguire: la stazione è in fondo, dopo la Náplavka. Ahoj e buon viaggio!"]
],
pg_marcela:[
["Che cosa fa una capostazione?","Coordino i treni, controllo che partano in orario, ascolto la radio dei macchinisti e do il segnale. È una responsabilità: se un treno parte con un minuto di ritardo, a Brno qualcuno lo sente. Ma il cappello rosso mi dà sicurezza."],
["Quanto è antica questa stazione?","La stazione aprì nel 1871 con il nome di «Stazione Francesco Giuseppe», in onore dell’imperatore. L’attuale edificio liberty, progettato da Josef Fanta, fu costruito fra il 1901 e il 1909. È stato un po’ il simbolo di Praga moderna."],
["Che cosa c’è di particolare nella sala Fanta?","La grande hall liberty, con le vetrate e le decorazioni dorate. Dopo anni in cui era chiusa o cambiata, è tornata come in origine. Se alzi gli occhi, vedi mosaici e figure allegoriche: la maggior parte della gente corre senza vederli."],
["Chi è Nicholas Winton?","Un inglese che nel 1939, poco prima della guerra, organizzò otto treni da Praga a Londra per salvare 669 bambini, per lo più ebrei. Per decenni non ne parlò quasi con nessuno. Oggi, sul binario 1, c’è un monumento che lo ricorda, inaugurato il 1° settembre 2009."],
["Come ci si comporta in stazione?","Con calma. Il tabellone mostra l’orario in ceco e inglese. Se ti dicono «Nástupiště», è il binario. E «Odjezdy» è partenze, «Příjezdy» arrivi. Per le biglietterie ci sono le macchinette, ma io consiglio la cassa: le macchine non sorridono."],
["Dove vanno i treni da qui?","A Vienna, Berlino, Budapest, Cracovia, a volte anche più lontano. Il treno per Vienna impiega quattro ore circa. I cechi viaggiano molto in treno: l’Intercity è comodo e ha il vagone ristorante, dove si ordina una birra al tavolo."],
["Che cosa portano i cechi in viaggio?","Un panino con salame e cetriolino, una bottiglia d’acqua e, per il fine settimana, lo zaino. Chi va «na chatu» porta anche il barattolo di cetrioli sottaceto e un pezzo di formaggio. Il treno è un’abitudine di famiglia."],
["Le stazioni di qui hanno anche un cuore?","Eccome! La mattina arrivano i pendolari, con le facce stanche e il caffè; alle sei del pomeriggio ci sono i fidanzati che si salutano, e la sera quelli che tornano dai nonni. Ogni binario ha la sua storia, e io le ascolto."],
["Qual è la parola ceca più bella per salutare?","Direi «Na shledanou», arrivederci, che letteralmente significa «alla rivedersi». Fra amici si dice «čau» o «ahoj». Se vuoi essere gentile, aggiungi «Hezký den», «buona giornata». Con un sorriso, vale doppio."],
["Qual è la cosa più strana che ti sia capitata in stazione?","Una sera trovai un uomo che dormiva sulla panca con il violino in grembo. Lo svegliai per dirgli che l’ultimo treno era partito: rispose che non lo prendeva, lo aspettava per suonargli una serenata. Gli offrii un tè. Alla fine il violino suonò."],
["Che cosa succede in fondo al binario?","Ah, tu l’hai visto. Dopo il treno in sosta, l’aria vibra: lo vedo anch’io, ogni tanto, quando la notte è limpida. Io non ci sono mai entrata, ma chi parte con la mente aperta di solito ci passa. Fidati del tuo passo."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo: il treno ti aspetta, e il fischio di partenza è per te. Segui la luce in fondo al binario senza voltarti. Dobrou cestu: buon viaggio!"]
]
};
Object.assign(TOPX,TOPX_PG);
})();
