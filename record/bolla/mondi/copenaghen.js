/* ---------- COPENAGHEN · Dal porto della Sirenetta alla Stazione Centrale (Langelinie e Kastellet, Amalienborg e Chiesa di Marmo, Nyhavn, Strøget e Rosenborg, Slotsholmen, Christianshavn, Islands Brygge, Municipio e Tivoli, Vesterbro e Stazione Centrale) ---------- */
/* Un'intera giornata d'autunno da sinistra a destra: alba a Langelinie con la Sirenetta, la fontana di Gefion e il Kastellet, tarda mattina ad Amalienborg (cambio della guardia) e alla Chiesa di Marmo,
   mezzogiorno a Nyhavn con le case di Andersen e il Ponte dei Baci, primo pomeriggio sullo Strøget, alla Torre Rotonda, a Torvehallerne e a Rosenborg, pomeriggio a Slotsholmen (Christiansborg e il cantiere della Børsen),
   pomeriggio inoltrato a Christianshavn (canali, guglia a spirale, Christiania, Ponte Circolare), tramonto a Islands Brygge (bagno del porto, Serpente della Bicicletta), sera al Municipio, a Tivoli e alla Glyptotek,
   notte a Vesterbro e alla Stazione Centrale. Il varco finale è in fondo al binario, davanti al treno in sosta. Il tempo si piega: Andersen passeggia a Nyhavn accanto ai ciclisti di oggi, e la città è quella di oggi.
   Testi, tappe e dialoghi vengono da copenaghen.txt (definitivi, usati senza riscriverli; solo l'apostrofo e le virgolette sono resi tipografici). Gli oggetti stanno in elementi.js (nomi che iniziano per "cp").
   Il tono per i temi dolorosi (la morte di Andersen, l'incendio della Børsen, la prigionia di Leonora Christina) è sempre sobrio e rispettoso; le leggende sono presentate con "si dice". */
(function(){
const GT=372,W1=23600,GO='#d9b24a';
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln}=PR._rm;
const {nf,faggio,bici,lamp,flag,gull,boat,guglia,cupola,clock,win,wat,pp}=PR._cp;
const md=(i,n)=>((i%n)+n)%n;
const Z=[0,2500,5300,7600,10700,13000,16300,18600,21000];   /* inizio di ognuna delle 9 zone */
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* ---- cielo: alba rosa pallido con velo di foschia, mattina limpida, mezzogiorno pieno, pomeriggio caldo e dorato, tramonto rosso-arancio, crepuscolo cobalto, notte ---- */
const SKY=[[0,['#8aa0c8','#f0c8d0','#ffe0c8']],[1500,['#6aa4e6','#b8d8f0','#f4f0e8']],[Z[1],['#3a8ee8','#7ec0f2','#dcecf8']],[Z[2],['#2a86ea','#78bcf4','#e6f2fa']],[Z[3],['#4a96e6','#a4cef0','#f6f6f0']],[Z[4],['#5a9ee0','#b8d4ee','#fcf0d4']],[Z[5],['#6a9ad8','#e0d0c0','#ffe0a8']],[Z[6],['#5a7ac8','#f0a070','#ffc060']],[17400,['#4a5ab0','#e8806a','#ff9a4a']],[Z[7],['#1e2a7a','#4a4a9a','#e87a5a']],[19800,['#141a5a','#2a3a8a','#6a5a9a']],[Z[8],['#0a0e3a','#141c52','#2a2a62']],[W1+400,['#080b30','#101648','#222458']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,40*s,5*s);el(g,c,x-22*s,y+2*s,26*s,4*s);el(g,c,x+26*s,y+2*s,30*s,4*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Copenaghen, dall’alba alla notte. Parti da Langelinie, quando il mare è ancora grigio e la Sirenetta è sola sul suo sasso, e passi dal Kastellet, la fortezza a stella dove la gente va a correre. A tarda mattina ti aspettano i palazzi gemelli di Amalienborg e la grande cupola verde della Chiesa di Marmo; a mezzogiorno Nyhavn, con le case colorate e le barche di legno. Nel primo pomeriggio cammini sullo Strøget, sali la rampa della Torre Rotonda, mangi qualcosa a Torvehallerne e passeggi nel giardino di Rosenborg. Poi si attraversa Slotsholmen, con il palazzo del Parlamento e il cantiere della Børsen, e si arriva a Christianshavn, tra canali, bici cargo e una guglia a spirale. Al tramonto i tuffatori del porto di Islands Brygge e il Serpente arancione della bici; la sera il Municipio e le luci di Tivoli; a notte Vesterbro e la Stazione Centrale con i suoi treni. Il tempo qui si piega: i copenaghesi di ogni epoca ti vengono incontro, e la città è quella di oggi.";
const LKTXT=[
"La Sirenetta: una statua di bronzo alta un metro e venticinque, su un sasso in riva al mare, a Langelinie. La volle il birraio Carl Jacobsen, figlio del fondatore della Carlsberg, dopo aver visto un balletto tratto dalla fiaba di Andersen. Fu inaugurata il 23 agosto 1913: la testa è della ballerina Ellen Price, il corpo della moglie dello scultore Edvard Eriksen, Eline. Chi la vede per la prima volta dice quasi sempre: “ma com’è piccola!”",
"La fontana di Gefion: la dea nordica che, secondo il mito, trasformò i suoi quattro figli in buoi e arò la terra che diventò l’isola di Zelanda, dove oggi sorge Copenaghen. La donò alla città la Fondazione Carlsberg per i cinquant’anni della birreria e fu inaugurata nel 1908; la scolpì Anders Bundgaard. Si dice che il buco lasciato in Svezia sia il lago Vänern, che infatti somiglia all’isola.",
"Il Kastellet, la Cittadella: una fortezza a stella a cinque punte, costruita dal 1662 al 1665 per il re Federico III con l’ingegnere olandese Henrik Rüse. Ha cinque bastioni, una porta con il busto del re, un mulino a vento e una piccola chiesa. Oggi è ancora un luogo militare, ma si entra liberamente e la gente ci passeggia e ci corre.",
"Amalienborg: quattro palazzi gemelli attorno a una piazza ottagonale, costruiti fra il 1750 e il 1760 su progetto di Nicolai Eigtved per quattro famiglie nobili. Dopo l’incendio del palazzo di Christiansborg, nel 1794, la famiglia reale li comprò, e ancora oggi vi abita. Al centro c’è la statua a cavallo di Federico V, opera del francese Jacques Saly: si dice che sia costata quanto, o più, dei palazzi stessi.",
"Il cambio della guardia: ogni giorno a mezzogiorno. I soldati partono dalla caserma vicino al castello di Rosenborg verso le 11 e 30, attraversano il centro e arrivano ad Amalienborg alle 12 in punto. Se in palazzo c’è il re, la parata è completa e c’è la banda; se la famiglia reale è via, la guardia è più piccola. La bandiera sul tetto dice chi è in casa: con la coda di rondine, non c’è nessuno.",
"La Chiesa di Marmo, che si chiama davvero Chiesa di Federico: la cupola, di 31 metri di diametro, è la più grande della Scandinavia, sorretta da dodici colonne. Cominciata nel Settecento, restò incompiuta per più di un secolo; la finì il finanziere C. F. Tietgen e fu inaugurata nell’agosto 1894. Il nome viene dal marmo norvegese delle prime pareti: la gran parte, però, è calcare.",
"Di fronte ad Amalienborg, sull’altra riva del porto, c’è l’Opera di Copenaghen: la disegnò Henning Larsen e fu un dono alla Danimarca della fondazione di A. P. Møller e Mærsk Mc-Kinney Møller; fu inaugurata il 15 gennaio 2005. Sta in asse con il palazzo e con la Chiesa di Marmo.",
"Nyhavn vuol dire “porto nuovo”: lo fece scavare re Cristiano V fra il 1670 e il 1675, con soldati danesi e prigionieri di guerra svedesi, per portare le navi fino al centro. Per secoli fu il quartiere dei marinai, della birra e delle taverne; la casa più antica, al numero 9, è del 1681. Oggi lungo il canale ci sono caffè e ristoranti: lo chiamano il bar all’aperto più lungo della Scandinavia.",
"Hans Christian Andersen visse a Nyhavn in tre case diverse: al numero 20 dal 1834 al 1838, al 67 dal 1845 al 1864, al 18 dal 1871 al 1875. Il numero 20 è la casa rossa dove, si dice, scrisse le sue prime fiabe. Sulle facciate c’è una targa; sono case private, e dentro non si entra.",
"Il Ponte dei Baci, Inderhavnsbroen: 180 metri per pedoni e ciclisti fra Nyhavn e Christianshavn. Si apre in due metà che scorrono per far passare le barche e poi si ricongiungono piano: da qui il soprannome. Aprì il 7 luglio 2016, con circa tre anni di ritardo.",
"Lo Strøget: la lunga via pedonale del centro, circa un chilometro e cento metri dalla piazza del Municipio a Kongens Nytorv. Il 17 novembre 1962 fu chiusa alle auto: allora, per molti, fu una pazzia; oggi è un modello copiato in tutta Europa. Ad Amagertorv, la piazza al centro, c’è la Fontana delle Cicogne, del 1894, dove tutti si danno appuntamento.",
"La Torre Rotonda, Rundetårn: costruita fra il 1637 e il 1642 per Cristiano IV, alta quasi 35 metri. Dentro non ci sono scale ma una rampa a spirale di circa 209 metri che gira sette volte e mezza attorno a un’anima vuota: serviva a portare in alto, con carri e cavalli, i libri e gli strumenti dell’osservatorio. Si racconta che nel 1716 lo zar Pietro il Grande la salì a cavallo. In cima c’è ancora un osservatorio aperto al pubblico, e sulla facciata un rebus dorato disegnato dal re in persona.",
"Torvehallerne: due sale di vetro e acciaio aperte nel settembre 2011 a Israels Plads, con più di sessanta banchi: pesce, formaggi, pane, caffè e smørrebrød, i panini aperti su pane di segale. Nello stesso posto, fino al 1958, c’era il mercato all’aperto della frutta e della verdura.",
"Il castello di Rosenborg: lo fece costruire Cristiano IV dal 1606 come residenza di campagna, ed è stato residenza dei re fino al 1710 circa. Nei sotterranei ci sono i gioielli della corona danese. Intorno c’è Kongens Have, il Giardino del Re, il più antico giardino reale della Danimarca: oggi è un parco per tutti, con prato, sdraio e scoiattoli. Da qui, verso le 11 e 30, parte il cambio della guardia.",
"Christiansborg, sull’isoletta di Slotsholmen: ospita il Parlamento, il Folketing, con 179 deputati, l’ufficio del Primo ministro e la Corte suprema, e si dice sia l’unico edificio al mondo che ospita tutti e tre i poteri dello Stato. Quello attuale è il terzo palazzo: la prima pietra fu posata nel 1907. La torre, alta 106 metri, è la più alta della città: dalla cima il panorama è gratuito.",
"Sotto il palazzo si visitano le rovine dei castelli precedenti: la fortezza del vescovo Absalon, del 1167, il castello medievale di Copenaghen e la Torre Blu, dove la principessa Leonora Christina fu tenuta prigioniera per ventidue anni. È un posto silenzioso, pieno di storie.",
"La Børsen, la vecchia Borsa: la costruì Cristiano IV fra il 1619 e il 1625 in stile rinascimentale olandese. La sua guglia di 56 metri, fatta con quattro code di drago intrecciate e tre corone in cima, era il simbolo della città; secondo la leggenda proteggeva la Børsen dagli incendi. Il 16 aprile 2024, durante i lavori sul tetto di rame, un incendio distrusse mezzo edificio e fece crollare la guglia: molti passanti aiutarono a portare fuori i quadri. Si ricostruisce dal settembre 2024: la guglia tornerà com’era e l’apertura è prevista per la fine del 2029.",
"Christianshavn: la fondò Cristiano IV nel 1617 come città di mercanti, sul modello delle città olandesi, con canali e bastioni. Per un po’ restò una città a sé; nel Seicento fu unita a Copenaghen. Oggi è un quartiere di canali, barche e case basse: le due strade lungo il canale si chiamano, alla lettera, “Sopra l’acqua” e “Sotto l’acqua”.",
"La Chiesa del Salvatore, Vor Frelsers Kirke: la chiesa è del 1696, ma la guglia a spirale, opera di Lauritz de Thurah, è del 1752: re Federico V la salì il giorno dell’inaugurazione, il 28 agosto. È alta circa 90 metri e la scala esterna gira quattro volte attorno alla punta, in senso antiorario. In tutto sono circa 400 gradini, e gli ultimi 150 sono all’aperto: con il vento la guglia dondola un poco.",
"Christiania, la “città libera”: il 26 settembre 1971 un gruppo di persone occupò le ex caserme di Bådsmandsstræde e fondò una comunità con regole sue, in parte ancora autogovernata. Ci vivono circa mille persone e ci passano più di un milione di visitatori all’anno. Dentro non ci sono auto: ci si muove a piedi e in bicicletta.",
"Il Ponte Circolare, Cirkelbroen: un ponte pedonale e ciclabile aperto nel 2015, opera dell’artista Olafur Eliasson. Ha cinque piattaforme circolari, ognuna con un albero di metallo che regge il ponte con cavi sottili, e gira in modo che le barche possano passare.",
"Il bagno del porto di Islands Brygge: aprì nel 2002, il primo bagno pubblico nell’acqua del porto, dopo anni di lavori per ripulirla. È gratuito, con vasche per bambini, una vasca per i tuffi con piattaforme fino a cinque metri e pontili di legno dove prendere il sole. Quando piove forte può restare chiuso un paio di giorni, finché la marea non cambia l’acqua.",
"Il Serpente della Bicicletta, Cykelslangen: una pista ciclabile arancione sopraelevata, lunga oltre duecento metri, aperta nel giugno 2014. Permette di andare da Vesterbro a Islands Brygge sopra l’acqua, senza scendere dalla bici. Subito dopo c’è il ponte Bryggebroen, del 2006.",
"Il lungomare di Islands Brygge: un tempo area industriale, oggi uno dei quartieri residenziali più amati, con i vecchi silos del grano trasformati in appartamenti. Alla sera la gente porta una birra e si siede sul bordo dell’acqua.",
"Il Municipio, di Martin Nyrop: costruito fra il 1892 e il 1905 in stile romantico nazionale, ispirato al palazzo pubblico di Siena; la torre è alta 105,6 metri. Dentro c’è l’Orologio Mondiale di Jens Olsen, in funzione dal 1955, con un calendario di 570.000 anni. Sulla piazza ci sono la Fontana del Drago, del 1904, e la colonna dei suonatori di lur, un antico strumento dell’età del Bronzo; nel gioco da tavolo Matador, il “Monopoli” danese, la Rådhuspladsen è la casella più cara.",
"Tivoli: aprì il 15 agosto 1843, ed è il secondo parco di divertimenti più antico del mondo ancora aperto, dopo Dyrehavsbakken, vicino a Copenaghen. Ci sono giardini, un lago, teatri, ristoranti, la montagna russa di legno Rutschebanen, del 1914, e il Teatro della Pantomima, con un sipario a coda di pavone. Alla sera il lago si illumina; in autunno arrivano le zucche di Halloween e poi il Natale.",
"La Ny Carlsberg Glyptotek, accanto a Tivoli: il museo del birraio Carl Jacobsen, lo stesso della Sirenetta, aperto il 1° maggio 1897. Dentro c’è un giardino d’inverno con palme sotto una cupola di vetro, dove la gente si riposa fra le statue.",
"Kødbyen, la “città della carne”: il mercato delle carni, costruito dal 1879 accanto alla stazione. La parte più antica, di mattoni rossi, vicino ai binari, si chiama “Brune Kødby”. Oggi i vecchi macelli e i magazzini frigoriferi ospitano ristoranti, bar, gallerie e locali di musica: di sera è pieno di gente.",
"La Stazione Centrale, København H, che i copenaghesi chiamano “Hovedbanegården”: la prima stazione della città aprì nel 1847; quella attuale, dell’architetto Heinrich Wenck, nel 1911. Ha sette banchine e tredici binari, e sta fra il centro e Vesterbro. Da qui partono i treni regionali, la metropolitana di superficie, i treni per l’aeroporto e quelli per la Svezia.",
"Sotto la tettoia i treni aspettano ai binari. Quelli per la Svezia passano sul ponte dell’Øresund, che collega Copenaghen a Malmö con ferrovia e strada. Nei treni ci sono spazi per le biciclette; di solito si parla piano, e prima di partire si guarda l’orologio.",
"In fondo al binario, la luce di un altro mondo ti chiama."];
const NAME={"cp_andersen":"Hans Christian Andersen","cp_freja":"Freja, la nuotatrice d’inverno","cp_jonas":"Jonas, il soldato della Guardia","cp_birgitte":"Birgitte, la pasticciera","cp_henrik":"Henrik, il carpentiere","cp_lars":"Lars, il papà con la bici cargo","cp_sofie":"Sofie, la studentessa di Tivoli","cp_karen":"Karen, la capotreno"};
const GREET={"cp_andersen": "Min ven! Benvenuto a Copenaghen, la città che mi accolse quando avevo quattordici anni e non conoscevo nessuno. Io sono Andersen, e tu sei Pierpaolo: lo so, perché gli scrittori ascoltano tutto. Vieni, camminiamo lungo il canale, ma pian piano, ché sono emotivo.", "cp_freja": "Mojn! Sì, sono bagnata, e sì, è autunno e sto benissimo. Io sono Freja, Pierpaolo, e vengo qui all’alba a guardare il mare dopo il mio bagno. Hej, ti dà fastidio il vento? Vedrai che dopo due passi ti scaldi.", "cp_jonas": "Hej! Se vuoi una foto, ti metti dietro la linea e non mi tocchi il colbacco. Io sono Jonas, Pierpaolo, e questo è il mio posto di lavoro: quattro palazzi e cento sguardi addosso. Sono fuori servizio per mezz’ora, quindi chiedi pure.", "cp_birgitte": "Hej hej! Assaggia, assaggia: qui si assaggia prima di comprare. Io sono Birgitte, Pierpaolo, e faccio pane e dolci da trent’anni. Hai fame? Hai fatto bene a venire a quest’ora: c’è meno coda.", "cp_henrik": "Hej! Il casco è obbligatorio, anche da qui dietro la rete. Io sono Henrik, Pierpaolo, e da due anni lavoro qui: ricostruiamo la Børsen, pezzo per pezzo. Chiedi pure, ma parlo con le mani occupate.", "cp_lars": "Hej! Occhio alla ruota: una bici cargo non frena come una normale. Io sono Lars, Pierpaolo, e nella cassa ci sono i miei due bambini che dormono. Ti spiego io come funziona il traffico: si va in bici, punto.", "cp_sofie": "Hej! Biglietto? Ah, no, sei un visitatore: vieni, ti racconto Tivoli prima che inizi il mio turno. Io sono Sofie, Pierpaolo, e qui lavoro nel fine settimana per pagarmi gli studi.", "cp_karen": "God aften! Biglietto? Ah, tu sei Pierpaolo. Io sono Karen, la capotreno: qui si parte in orario, o almeno ci si prova. Hai ancora due minuti, ma non farti ingannare dalla pace del binario."};

/* ---- facciate di strada, zona per zona ---- */
/* edificio generico: base sul terreno, ombra a destra, cornice, finestre bianche che di sera si accendono; tetto a falde (g), a gradoni (s), a mansarda (m) o di rame (c) */
function bl(g,x,w,h,c,k,i,o){o=o||{};const gt=GT;rect(g,c,x,gt-h,w,h);rect(g,'rgba(0,0,0,.1)',x+w*.78,gt-h,w*.22,h);rect(g,'rgba(255,255,255,.14)',x,gt-h,3,h);rect(g,o.cor||'rgba(255,255,255,.4)',x-2,gt-h-3,w+4,4);
 const rc=o.rc||'#8a3a2a';
 if(o.roof=='g'){poly(g,rc,[[x-5,gt-h-2],[x+w+5,gt-h-2],[x+w/2,gt-h-w*.46]]);poly(g,'rgba(0,0,0,.16)',[[x+w/2,gt-h-2],[x+w+5,gt-h-2],[x+w/2,gt-h-w*.46]]);rect(g,'#f4f0e4',x+w/2-6,gt-h-w*.2-8,12,14);rect(g,'#9fb4c0',x+w/2-4,gt-h-w*.2-6,8,10)}
 if(o.roof=='s'){const n=4,sw=w/(n*2+1);for(let q=0;q<n;q++){const yy=gt-h-6-q*10,xs0=x+q*sw*1.0,xe=x+w-q*sw;rect(g,c,xs0,yy,xe-xs0,10)}rect(g,'#f4f0e4',x+w/2-sw*.6,gt-h-6-n*10,sw*1.2,6)}
 if(o.roof=='m'){poly(g,rc,[[x-5,gt-h-2],[x+w+5,gt-h-2],[x+w-8,gt-h-30],[x+8,gt-h-30]]);for(let q=0;q<Math.floor(w/40);q++){const dx=x+14+q*40;rect(g,'#f4f0e4',dx,gt-h-24,14,17);rect(g,k>.22?'#ffe0a0':'#9fb4c0',dx+2,gt-h-21,10,12)}}
 if(o.roof=='c'){poly(g,'#4f9a86',[[x-5,gt-h-2],[x+w+5,gt-h-2],[x+w-10,gt-h-34],[x+10,gt-h-34]]);poly(g,'rgba(0,0,0,.16)',[[x+w*.6,gt-h-2],[x+w+5,gt-h-2],[x+w-10,gt-h-34]])}
 const cols=Math.max(2,Math.floor((w-10)/(o.cw||28))),rows=Math.max(1,Math.floor((h-(o.base||34))/(o.rh||34)));
 if(!o.nowin)for(let r=0;r<rows;r++)for(let q=0;q<cols;q++){const ww=(w-16)/cols;win(g,x+9+q*ww,gt-h+12+r*(o.rh||34),ww-9,(o.rh||34)-17,k,i*17+r*5+q,o.glass)}
 if(o.shop){rect(g,o.shop,x+3,gt-28,w-6,28);rect(g,'rgba(255,255,255,.18)',x+3,gt-28,w-6,3);for(let q=0;q<Math.floor(w/36);q++)rect(g,k>.2?'#ffe9a8':'#c8dce4',x+9+q*36,gt-21,26,19);if(o.aw){for(let q=0;q<Math.floor((w-6)/9);q++)rect(g,q%2?'#f4f0e4':o.aw,x+3+q*9,gt-36,9,8)}}
 if(o.bal)for(let r=0;r<rows;r++)for(let q=0;q<cols;q+=2){const ww=(w-16)/cols;rect(g,'#2a2d33',x+7+q*ww,gt-h+12+r*(o.rh||34)+(o.rh||34)-20,ww-5,2.4)}}
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3);
 if(st==1){/* Langelinie e Kastellet: mare a sinistra, poi bastioni erbosi, caserme rosse, faggi e tigli d'oro */
  if(wx<1200)return;
  if(md(i,3)==0){faggio(g,x+w*.5,gt,1.1,TT,md(i,2)?'#d9a23a':'#c8782a','#e8c04a');return}
  if(md(i,3)==1){poly(g,'#6a8a3a',[[x-20,gt],[x+30,gt-40],[x+w-30,gt-40],[x+w+20,gt]]);poly(g,'#86a64a',[[x+30,gt-40],[x+w-30,gt-40],[x+w-50,gt-30],[x+50,gt-30]]);return}
  bl(g,x+10,w-50,44,'#a8452a',k,i,{roof:'g',rc:'#6a4a3a',cw:30,rh:30,base:14,cor:'#e8dcc4'});return}
 if(st==2){/* Amalienborg e Chiesa di Marmo: palazzi classici crema e grigio, faggi d'oro; poi il porto aperto */
  if(wx>4680)return;
  if(r>.78){faggio(g,x+w*.5,gt,1.05,TT);return}
  bl(g,x+4,w-28,h+30,['#d8ceb4','#d0c8b0','#e0d8c0'][md(i,3)],k,i,{roof:'m',rc:'#5a6a62',cw:30,rh:34,cor:'#f0eadc'});return}
 if(st==3){/* Nyhavn: due file di case strette e colorate con finestre bianche, frontoni e tetti a falde */
  if(wx<5450)return;
  const c=['#e8c040','#c8402a','#4a7ab0','#d89a3a','#4a9a6a','#e8a8a0','#f0e0a0','#6a8ab0'][md(i,8)];
  bl(g,x+2,w-10,h+md(i,4)*22,c,k,i,{roof:md(i,3)==1?'s':'g',rc:['#7a3a2a','#5a5a62','#8a4a3a'][md(i,3)],cw:26,rh:34,cor:'#f4f0e4'});return}
 if(st==4){/* Strøget: palazzi di quattro-cinque piani con tetti ripidi, vetrine, insegne e tendoni */
  if(r>.88){faggio(g,x+w*.5,gt,1,TT,'#c8a030','#dcc050');return}
  bl(g,x+3,w-14,h+80,['#e8dcb8','#e0c878','#c8503a','#e8d8b0'][md(i,4)],k,i,{roof:'m',rc:['#6a3a2a','#5a5a62'][md(i,2)],cw:28,rh:34,cor:'#f4f0e4',shop:['#2a3a4a','#4a2a22','#2a4a3a'][md(i,3)],aw:['#c8402a','#2a6aa8','#2a8a5a'][md(i,3)]});
  if(md(i,4)==2){const sx=x+w-24;rect(g,'#2a2d33',sx,gt-150,4,60);rect(g,k>.1?'#ffd070':'#e8c8a0',sx+4,gt-146,16,36)}return}
 if(st==5){/* Slotsholmen: pietra grigia, case basse color crema sui canali, il cantiere con la gru */
  if(r>.84){faggio(g,x+w*.5,gt,1,TT);return}
  bl(g,x+4,w-24,h-12,['#e8dcb8','#b8b4aa','#d8d0b0'][md(i,3)],k,i,{roof:md(i,2)?'g':'c',rc:'#6a5a52',cw:30,rh:34,cor:'#f4f0e4'});return}
 if(st==6){/* Christianshavn: case di mercanti in ocra, rosso e giallo con frontoni e portoni, qualche casetta di legno */
  if(r>.86){faggio(g,x+w*.5,gt,1.05,TT,'#d9a23a','#c8782a');return}
  const c=['#d8a040','#b8402a','#e8c040','#c8703a'][md(i,4)];bl(g,x+4,w-18,h-10,c,k,i,{roof:md(i,2)?'g':'s',rc:'#6a3a2a',cw:28,rh:34,cor:'#f4f0e4',nowin:false});
  if(md(i,5)==1){rect(g,'#2a1a14',x+w*.4,gt-34,18,34)}return}
 if(st==7){/* Islands Brygge: palazzi moderni di mattoni e vetro con balconi, silos, prati lungo l'acqua */
  if(r>.82){faggio(g,x+w*.5,gt,1,TT,'#d9a23a','#e8c04a');return}
  bl(g,x+4,w-22,h+40,['#9a5a44','#b8b4a8','#c8c4b8','#8a4a38'][md(i,4)],k,i,{cw:30,rh:32,cor:'#6a6a70',glass:'#8aa4b4',bal:1});return}
 if(st==8){/* Municipio e Tivoli: palazzi chiari della piazza, padiglioni a pagoda e tetti rossi di Tivoli, lanterne colorate */
  if(wx>19620&&wx<20460){if(r>.5){faggio(g,x+w*.5,gt,1,TT,'#d9a23a','#c8782a');for(let q=0;q<5;q++){dot(g,['#e8402a','#e8c040','#4aa86a','#f4f0e4','#2a8ae8'][q],x+w*.5-40+q*20,gt-120+Math.sin(q)*8,3);if(k>.15)glow(g,x+w*.5-40+q*20,gt-120,14,'255,214,130',.35*k)}return}
   bl(g,x+10,w-50,70,['#e8dcc4','#c8503a'][md(i,2)],k,i,{roof:'c',cw:34,rh:30,base:12,cor:'#c8402a'});for(let q=0;q<6;q++)dot(g,['#e8402a','#e8c040','#4aa86a','#f4f0e4','#2a8ae8','#e0409a'][q],x+16+q*18,gt-82+Math.sin(q*1.3)*4,2.6);return}
  if(r>.86){faggio(g,x+w*.5,gt,1,TT);return}
  bl(g,x+4,w-22,h+60,['#e8e0cc','#d8d0b8','#e0d4b0'][md(i,3)],k,i,{roof:'m',rc:'#5a6a62',cw:30,rh:34,cor:'#f4f0e4',shop:'#2a2d33',aw:'#c8402a'});return}
 /* 9: Vesterbro: palazzi con balconi e finestre accese, mattoni rossi della stazione e dei vecchi mercati, qualche insegna */
 if(r>.9){faggio(g,x+w*.5,gt,.9,TT,'#8a7a4a','#a89a5a');return}
 bl(g,x+4,w-22,h+40,['#a8452a','#c8b898','#8a3a2a','#b89870'][md(i,4)],k,i,{roof:md(i,2)?'m':0,rc:'#5a5a62',cw:28,rh:34,cor:'#6a4a3a',bal:1,shop:md(i,3)==0?'#2a2d33':0});
 if(md(i,3)==1){const sx=x+w-30;rect(g,'#2a2d33',sx,gt-120,4,60);rect(g,k>.1?'#ff4a8a':'#d8a0b0',sx+4,gt-116,12,30);if(k>.1)glow(g,sx+10,gt-100,30,'255,74,138',.4*k)}}
/* ---- livello 0: cielo, sole, luna, stelle, nuvole veloci, velo di foschia dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
  gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
  const nt=cl((xs-(Z[7]+500))/2600,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
  const su=17900,u=cl(xs/su,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*240;
  if(xs<su+800){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT+4);dot(g,'rgba(255,'+Math.round(250-low*80)+','+Math.round(210-low*110)+',.95)',sx,sy,14)}
  const mu=cl((xs-(Z[7]+500))/3200,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*200;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
  const cc=xs<3000?'rgba(252,214,222,.55)':xs<Z[6]?'rgba(255,255,255,.66)':xs<Z[7]+600?'rgba(255,170,130,.6)':'rgba(150,120,190,.35)';
  each(o-((t*7)%420)*.02,420,1,(x,i,r)=>{if(r>.55)return;nube(g,x+r*100,36+r*56,.8+r*.5,cc)});
  const fo=cl(1-xs/3200,0,1)*.3;if(fo>.01){g.fillStyle='rgba(252,200,214,'+fo+')';g.fillRect(0,0,480,GT+4)}
  const wm=cl((xs-Z[3])/1000,0,1)*cl((Z[6]-xs)/1000,0,1)*.1;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
  const wg=cl((xs-Z[6])/1400,0,1)*cl((Z[8]+400-xs)/1400,0,1)*.2;if(wg>.01){g.fillStyle='rgba(255,130,90,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: mare aperto con gru e navi, profilo di guglie e cupole di rame (Marmo, Torre Rotonda, Christiansborg, Salvatore, Municipio), tetti della stazione, luci della città ---- */
const SKYL=[[900,'crane'],[1700,'crane'],[1950,'bast'],[4350,'dome'],[5100,'spire',70],[6500,'spire',90],[8800,'rot'],[9500,'spire',60],[10200,'spire',80],[11200,'tower'],[12500,'spire',70],[14200,'spiral'],[15000,'spire',60],[17000,'crane'],[17800,'silo'],[19100,'rad'],[19900,'spire',70],[20600,'dome2'],[22200,'sta'],[22900,'spire',60]];
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
  const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
  /* mare e acqua del porto, grigio-azzurro, dove c'è acqua */
  const sea=Math.max(env(600,3600),env(6200,4200),env(13300,2800),env(17300,3800),env(15800,900)*.0);
  if(sea>.02){g.globalAlpha=Math.min(1,sea*1.6);const sg=g.createLinearGradient(0,hz+10,0,GT+4);sg.addColorStop(0,dim('#a8bccc'));sg.addColorStop(1,dim('#6a86a0'));g.fillStyle=sg;g.fillRect(0,hz+10,480,GT-hz-6);for(let q=0;q<16;q++)rect(g,'rgba(255,255,255,.35)',((q*53+t*5)%520)-20,hz+16+(q%5)*10,20,1.3);g.globalAlpha=1}
  /* costa lontana e navi alla fonda (alba) */
  let e=env(1500,4200);if(e>.02){g.globalAlpha=e;const sx=fx(1500);g.fillStyle=dim('#9aa4b8');g.fillRect(sx-420,hz+6,860,5);[[-300,30],[-120,22],[160,26]].forEach(s=>{rect(g,dim('#7a8498'),sx+s[0],hz+4-s[1]*.2,60,6);rect(g,dim('#8a94a8'),sx+s[0]+10,hz-4,18,8)});g.globalAlpha=1}
  /* velo di foschia all'alba sul mare */const fo=cl(1-xs/2600,0,1)*.4;if(fo>.01){g.fillStyle='rgba(250,226,230,'+fo+')';g.fillRect(0,hz-20,480,60)}
  /* guglie e cupole verdi di rame, in lontananza */
  const rof=(sx,w,h,c)=>{rect(g,dim(c),sx-w/2,hz+16-h,w,h)};
  SKYL.forEach(s=>{const sx=fx(s[0]),ee=env(s[0],5600);if(ee<.02)return;g.globalAlpha=ee;const k=s[1];
   if(k=='crane'){rect(g,dim('#e8b030'),sx-1.6,hz-40,3,56);rect(g,dim('#e8b030'),sx-30,hz-40,56,2.4);ln(g,dim('#8a8f98'),.8,[sx-28,hz-38,sx,hz-56]);ln(g,dim('#8a8f98'),.8,[sx+22,hz-38,sx,hz-56])}
   else if(k=='bast'){g.fillStyle=dim('#7a9a58');g.beginPath();g.moveTo(sx-90,hz+16);g.lineTo(sx-60,hz+4);g.lineTo(sx+60,hz+4);g.lineTo(sx+90,hz+16);g.fill();rect(g,dim('#a8504a'),sx-50,hz+2,100,6);rect(g,dim('#e8e8ee'),sx+24,hz-12,6,14)}
   else if(k=='dome'){rof(sx,50,26,'#c8c4b8');cupola(g,sx,hz-10,32,dim('#5a9a88'),26);rect(g,dim('#c8c4b8'),sx-4,hz-42,8,6);dot(g,dim('#d9b24a'),sx,hz-46,2.4)}
   else if(k=='rot'){rect(g,dim('#a8553a'),sx-10,hz-44,20,60);cupola(g,sx,hz-44,10,dim('#5a8a78'),8)}
   else if(k=='spire'){const h=s[2];rof(sx,28,36,'#c8b898');poly(g,dim('#4f9a86'),[[sx-9,hz-20],[sx+9,hz-20],[sx+1,hz-20-h*.7],[sx-1,hz-20-h*.7]]);ln(g,dim('#d9b24a'),1,[sx,hz-20-h*.7,sx,hz-26-h*.7])}
   else if(k=='tower'){rof(sx,110,34,'#b0aea8');rect(g,dim('#a8a6a0'),sx-9,hz-84,18,70);poly(g,dim('#4f9a86'),[[sx-10,hz-84],[sx+10,hz-84],[sx+1,hz-124],[sx-1,hz-124]]);dot(g,dim('#d9b24a'),sx,hz-127,2)}
   else if(k=='spiral'){rof(sx,50,30,'#a8553a');rect(g,dim('#2a2d33'),sx-8,hz-44,16,30);poly(g,dim('#2a2d33'),[[sx-6,hz-44],[sx+6,hz-44],[sx+1,hz-84],[sx-1,hz-84]]);g.strokeStyle=dim('#d9b24a');g.lineWidth=1;g.beginPath();for(let q=0;q<=24;q++){const u=q/24;g.lineTo(sx+Math.sin(u*Math.PI*6)*(5*(1-u)+1),hz-44-u*40)}g.stroke();dot(g,dim('#d9b24a'),sx,hz-86,1.8)}
   else if(k=='silo'){[[-30,36,60],[0,34,76],[30,32,50]].forEach(a=>rect(g,dim('#b8b4aa'),sx+a[0]-a[1]/2,hz+16-a[2],a[1],a[2]))}
   else if(k=='rad'){rect(g,dim('#a8553a'),sx-60,hz-14,120,30);rect(g,dim('#9a4a34'),sx-7,hz-82,14,70);poly(g,dim('#4f9a86'),[[sx-8,hz-82],[sx+8,hz-82],[sx+1,hz-104],[sx-1,hz-104]]);clock(g,sx,hz-72,3.4,t)}
   else if(k=='dome2'){rof(sx,64,26,'#a8553a');cupola(g,sx,hz-10,22,dim('#a8b8c8'),16)}
   else if(k=='sta'){rof(sx,140,28,'#9a4a34');rect(g,dim('#9a4a34'),sx-10,hz-44,20,34);poly(g,dim('#5a6a62'),[[sx-16,hz-44],[sx+16,hz-44],[sx+8,hz-54],[sx-8,hz-54]]);clock(g,sx,hz-30,4,t)}
   if(night>.3&&k!='crane')for(let q=0;q<6;q++)rect(g,'rgba(255,226,150,'+(.8*night)+')',sx-16+q*5,hz+4-(q%3)*5,2,2.4);g.globalAlpha=1});
  /* tetti bassi lungo l'orizzonte */e=cl(1,0,1);g.globalAlpha=.9;each(o,60,31,(x,i,r)=>{const h=10+r*14;rect(g,dim(['#c8b8a0','#b8a48c','#cfc0a4','#bca89a'][md(i,4)]),x,hz+16-h,40+r*14,h);if(r>.6)poly(g,dim('#6a8a7a'),[[x-2,hz+16-h],[x+44+r*14,hz+16-h],[x+22+r*7,hz+10-h]])});g.globalAlpha=1;
  /* mare di luci della città (sera) */
  const ci=cl((night-.25)/.5,0,1);if(ci>.02){for(let q=0;q<150;q++){const lx=(q*37)%480,ly=hz+4+hr(q*3)*14;g.fillStyle='rgba(255,'+(200+hr(q)*50|0)+',120,'+(ci*(.5+.4*Math.sin(t*2+q))*.8)+')';g.fillRect(lx,ly,1.6,1.6)}}}
/* ---- livello 2: case basse con tetti di rame, navi, silos, fili e pali della ferrovia ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
  const z=xs<2600?0:xs>21300?3:xs>16200&&xs<18700?2:1;
  if(z==0){each(o,420,5,(x,i,r)=>{if(r>.6)return;const sx=x+r*80;rect(g,dim('#7a8498'),sx,hz+4,110,12);rect(g,dim('#e8e4dc'),sx+20,hz-8,40,12);rect(g,dim('#c8202a'),sx+66,hz-4,8,8);ln(g,dim('#5a6478'),1.4,[sx+84,hz+4,sx+84,hz-30])});return}
  if(z==3){each(o,130,5,(x,i,r)=>{if(r>.7)return;const h=34+r*34,w=80+r*30;rect(g,dim(['#a8553a','#c8b898','#b8a48c'][md(i,3)]),x,hz+14-h,w,h);rect(g,'rgba(0,0,0,.14)',x+w*.7,hz+14-h,w*.3,h);if(night>.3)for(let q=0;q<h/12;q++)for(let p=0;p<w/14;p++)if(hr(i*9+q*3+p)>.45)rect(g,'rgba(255,226,150,'+(.8*night)+')',x+6+p*14,hz+18-h+q*12,5,6)});
   g.strokeStyle=dim('#4a4e56');g.lineWidth=1;for(let q=0;q<3;q++){g.beginPath();for(let x=0;x<=480;x+=20)g.lineTo(x,hz-20+q*10+Math.sin((x+o)*.04)*3);g.stroke()}each(o,160,9,(x)=>{rect(g,dim('#4a4e56'),x,hz-30,2.4,48);rect(g,dim('#4a4e56'),x-14,hz-30,30,2)});return}
  if(z==2){each(o,150,23,(x,i,r)=>{const w=60+r*30,h=70+hr(i+3)*70;rect(g,dim('#b8b4aa'),x,hz+12-h,w,h);rect(g,'rgba(0,0,0,.14)',x+w*.7,hz+12-h,w*.3,h);if(r>.5)rect(g,dim('#9a4a38'),x+w,hz+12-h*.6,50,h*.6);if(night>.25)for(let q=0;q<h/10;q++)for(let p=0;p<w/9;p++)if(hr(i*13+q*5+p)>.5)rect(g,'rgba(255,226,150,'+(.8*night)+')',x+3+p*9,hz+14-h+q*10,3,4)});return}
  /* case di città con tetti ripidi di rame e mattoni */
  each(o,150,5,(x,i,r)=>{if(r>.72)return;const h=40+r*44,w=70+r*36;rect(g,dim(['#e0d4b8','#c8a888','#d8c098','#b8b0a4'][md(i,4)]),x,hz+14-h,w,h);rect(g,'rgba(0,0,0,.1)',x+w*.7,hz+14-h,w*.3,h);poly(g,dim(i%2?'#4f9a86':'#8a4a3a'),[[x-3,hz+14-h],[x+w+3,hz+14-h],[x+w/2,hz-h-w*.2]]);if(night>.3&&r>.2)rect(g,'rgba(255,226,150,'+(.8*night)+')',x+w*.3,hz+20-h,6,8)});
  each(o,230,9,(x,i,r)=>{if(r>.5)return;faggio(g,x,hz+16,.8,t,dim('#c8a038'),dim('#dcc060'))})}
/* ---- livello 3: facciate di strada ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>100+hr(i*5)*40,170);
 each2(200,8,Z[1],Z[2],2,i=>110+hr(i*5)*40,180);
 each2(90,9,Z[2],Z[3],3,i=>120+hr(i*5)*60,84);
 each2(150,10,Z[3],Z[4],4,i=>110+hr(i*5)*40,140);
 each2(170,11,Z[4],Z[5],5,i=>100+hr(i*5)*40,150);
 each2(120,12,Z[5],Z[6],6,i=>110+hr(i*5)*50,108);
 each2(190,13,Z[6],Z[7],7,i=>120+hr(i*5)*50,170);
 each2(190,14,Z[7],Z[8],8,i=>100+hr(i*5)*40,170);
 each2(170,15,Z[8],W1+400,9,i=>100+hr(i*5)*40,150)}
/* ---- vita: gabbiani sul porto, cornacchie grigie, piccioni nelle piazze, foglie d'autunno che cadono ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
  const gu=Math.max(cl(1-(xs-1500)/1500,0,1),cl((xs-4400)/500,0,1)*cl((7500-xs)/500,0,1),cl((xs-11800)/500,0,1)*cl((13200-xs)/500,0,1),cl((xs-16200)/400,0,1)*cl((18800-xs)/400,0,1));
  if(gu>.05)for(let i=0;i<4;i++){const bx=((i*171+t*(34+i*8))%640)-80,by=60+hr(i*7+3)*70+Math.sin(t*1.4+i)*8,w=Math.sin(t*6+i)*4;g.strokeStyle='rgba(244,244,248,'+(.95*gu)+')';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-9,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+9,by+w);g.stroke();g.strokeStyle='rgba(120,130,150,'+(.8*gu)+')';g.lineWidth=1.4;g.beginPath();g.moveTo(bx-9,by+w);g.lineTo(bx-12,by+w+2);g.moveTo(bx+9,by+w);g.lineTo(bx+12,by+w+2);g.stroke()}
  const cr=cl((xs-2600)/300,0,1)*cl((21800-xs)/300,0,1);
  if(cr>.05)for(let i=0;i<3;i++){const bx=((i*131+t*(48+i*7))%620)-70,by=70+hr(i*5+2)*90+Math.sin(t*2+i)*8,w=Math.sin(t*10+i)*2.6;g.strokeStyle='rgba(60,62,70,'+(.85*cr)+')';g.lineWidth=1.8;g.beginPath();g.moveTo(bx-6,by+w);g.quadraticCurveTo(bx,by-4,bx+6,by+w);g.stroke();g.beginPath();g.moveTo(bx-6,by+w);g.lineTo(bx-1,by+3);g.lineTo(bx+6,by+w);g.stroke()}
  const pg=Math.max(cl(1-Math.abs(xs-3200)/700,0,1),cl(1-Math.abs(xs-8100)/700,0,1),cl(1-Math.abs(xs-19100)/700,0,1));
  if(pg>.05)for(let i=0;i<3;i++){const bx=((i*251+t*(36+i*6))%640)-80,by=120+hr(i*9)*50+Math.sin(t*3+i)*4,w=Math.sin(t*14+i)*3;g.strokeStyle='rgba(120,124,140,'+pg+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-6,by+w);g.quadraticCurveTo(bx,by-4,bx+6,by+w);g.stroke()}
  /* foglie d'autunno che scendono piano */
  const lf=cl((xs-200)/600,0,1)*cl((19500-xs)/900,0,1);if(lf>.05)for(let i=0;i<16;i++){const u=((t*.045+i/16+hr(i)*.3)%1),lx=((i*97+t*14+Math.sin(t+i)*20)%520)-20,ly=u*440;g.save();g.translate(lx,ly);g.rotate(t*1.4+i);g.fillStyle=['rgba(232,170,40,'+lf*.85+')','rgba(200,110,30,'+lf*.85+')','rgba(222,196,70,'+lf*.85+')'][md(i,3)];g.beginPath();g.ellipse(0,0,3.4,1.8,0,0,7);g.fill();g.restore()}}
/* ---- terreno: ogni zona ha il suo suolo; l'acqua del porto e dei canali sta dietro il bordo della banchina ---- */
const WATER=[[-100,1150,'#7e98ac','#5f7e96'],[4650,7350,'#7a96aa','#5a7a92'],[12000,14100,'#6f8c7e','#587a74'],[15300,16100,'#6f8c7e','#587a74'],[16500,18500,'#7a96aa','#5a7a92']];
function groundDraw(g,cam,t){const gt=GT;
  const GZ=[[Z[0],Z[1],'#c4c0b4','b'],[Z[1],Z[2],'#b0aca0','c'],[Z[2],Z[3],'#b0a898','c'],[Z[3],Z[4],'#cfcabc','w'],[Z[4],Z[5],'#b8b4aa','b'],[Z[5],Z[6],'#b0a898','c'],[Z[6],Z[7],'#c0b89c','p'],[Z[7],Z[8],'#b8b4aa','b'],[Z[8],W1+400,'#a8a8a8','u']];
  rect(g,'#d0ccc0',0,gt,480,3);
  GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
   const slabs=(bw0,add,al)=>{for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,0)',px,yy,bw-1.5,17)}}};
   if(z[3]=='b'){/* lastre di granito e ghiaia, erba bagnata nei parchi */slabs(70,8,.22);for(let q=0;q<150;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.35)':'rgba(120,110,90,.25)',x0+((q*43)%ww),gt+40+hr(q+3)*110,2+hr(q)*3,1.6)}
   if(z[3]=='c'){/* ciottoli e pavé */for(let r=0;r<7;r++){const yy=gt+7+r*19,bw=20+r*5,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5);rect(g,hh>.6?'rgba(255,255,255,.18)':hh>.25?'rgba(60,50,40,.14)':'rgba(255,255,255,.04)',px,yy,bw-1.6,8);rect(g,'rgba(60,50,40,.1)',px,yy+9,bw-1.6,8)}}}
   if(z[3]=='w'){/* pavé chiaro della via pedonale e granito a onde */slabs(56,8,.3);for(let r=0;r<3;r++){g.strokeStyle='rgba(120,116,108,.3)';g.lineWidth=1.4;g.beginPath();for(let q=-1;q<=ww/22+1;q++){const px=x0+q*22-((cam)%22),py=gt+30+r*34+Math.sin((q+Math.floor(cam/22))*.9)*5;q==-1?g.moveTo(px,py):g.lineTo(px,py)}g.stroke()}}
   if(z[3]=='p'){/* pontili di legno e banchina, prato lungo l'acqua */rect(g,'#7a9a4a',x0,gt+3,x1-x0,22);for(let q=0;q<90;q++)rect(g,'rgba(60,90,30,.3)',x0+((q*37)%ww),gt+4+hr(q)*20,2,3);slabs(80,8,.2);rect(g,'#a8824a',x0,gt+84,x1-x0,66);for(let r=0;r<4;r++)rect(g,'rgba(60,40,20,.25)',x0,gt+90+r*16,x1-x0,1.6)}
   if(z[3]=='u'){/* asfalto, granito, banchine con fascia gialla, binari con pietrisco */slabs(80,14,.16);rect(g,'#9a9aa0',x0,gt+3,x1-x0,40);if(z[0]+0<cam+480&&cam>Z[8]+1200){}rect(g,'#bcb8ac',x0,gt+95,x1-x0,60);rect(g,'#f2c82a',x0,gt+95,x1-x0,3);rect(g,'#6a6a70',x0,gt+132,x1-x0,6);rect(g,'#4a4a50',x0,gt+142,x1-x0,6);for(let q=0;q<60;q++)rect(g,'rgba(0,0,0,.3)',x0+((q*29)%ww),gt+124+hr(q)*30,2,2)}
   if(z[3]!='u'&&z[3]!='p')for(let q=0;q<3;q++)rect(g,'rgba(250,250,246,.4)',x0+((q*150+40-cam)%ww+ww)%ww,gt+44,36,2.4);
   g.restore()});
  /* acqua */WATER.forEach(w=>{const a=w[0]-cam,b=w[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b);wat(g,x0,gt+3,x1-x0,60,t,w[2],w[3]);rect(g,'#bcb8ac',x0,gt+63,x1-x0,6);rect(g,'rgba(255,255,255,.3)',x0,gt+63,x1-x0,1.6);rect(g,'#8a8f98',x0,gt+69,x1-x0,6);if(a>0)rect(g,'#bcb8ac',a-3,gt+3,3,72);if(b<480)rect(g,'#bcb8ac',b,gt+3,3,72);
   const wk=nf(cam+240);if(wk>.2)for(let q=0;q<10;q++)rect(g,'rgba(255,214,130,'+(.25*wk)+')',x0+((q*47+t*8)%(x1-x0+1)),gt+10+(q%5)*10,14,1.4)});
  /* foglie sul terreno */for(let q=0;q<46;q++){const lx=((q*61-cam*1)%520+520)%520-20;rect(g,['rgba(232,170,40,.7)','rgba(200,110,30,.7)','rgba(222,196,70,.7)'][q%3],lx,gt+80+hr(q+7)*66,3,1.8)}
  for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
  const dw=cl(1-cam/2400,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
  const gd=cl((cam-Z[4])/700,0,1)*cl((Z[6]-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
  const sgl=cl((cam-Z[6]+200)/800,0,1)*cl((Z[8]+600-cam)/900,0,1);if(sgl>.02)rect(g,'rgba(255,120,80,'+(.16*sgl)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{skin:tn(o.skin),top:tn(o.top),bot:tn(o.bot),hair:o.hair?tn(o.hair):o.hair,acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Freja: accappatoio bianco sopra il maglione, berretto di lana rosso, capelli bagnati, borsa del nuoto, termos, guance rosse */
 NP('cp_freja',NAME.cp_freja,770,GREET.cp_freja,{skin:'#f0c8a0',top:'#ece8e0',bot:'#3a3a46',hair:'#c8a060',s:1.0},(g,b,t)=>{rect(g,'#ece8e0',-12,-90+b,24,50);rect(g,'rgba(0,0,0,.1)',5,-90+b,7,50);rect(g,'#c8c0b4',-12,-62,24,3);ln(g,'#b8b0a4',2,[-3,-90+b,-3,-60]);
  el(g,'#c8402a',1,-110+b,12.5,8);rect(g,'#c8402a',-11,-108+b,24,5);dot(g,'#f4f0e4',1,-119+b,3.4);dot(g,'#e86a6a',7,-97+b,2.4);ln(g,'#c8a060',3,[-9,-98+b,-10,-84+b]);
  rect(g,'#2a4a8a',-26,-62,12,16);ln(g,'#2a2d33',1.4,[-23,-62,-20,-68,-17,-62]);rect(g,'#c8402a',14,-66,6,14);rect(g,'#9a9ea6',14,-68,6,3)}),
 /* Jonas: uniforme blu di gala, colbacco di pelo d'orso, fucile a tracolla, guanti bianchi, sorriso furbo */
 NP('cp_jonas',NAME.cp_jonas,3430,GREET.cp_jonas,{skin:'#e8b890',top:'#25448a',bot:'#6a8ac0',hair:'#16120f',s:1.04},(g,b,t)=>{el(g,'#16120f',1,-120+b,11.5,15);rect(g,'#c8202a',6,-126+b,2.6,10);rect(g,'#f4f0e4',-12,-60,6,8);rect(g,'#f4f0e4',8,-60,6,8);
  ln(g,'#e8e8ee',1.6,[-10,-90+b,10,-48+b]);ln(g,'#2a2d33',2.6,[-8,-92+b,-8,-30]);rect(g,GO,-4,-70+b,8,3);rect(g,'#f4f0e4',-12,-90+b,24,3);dot(g,'#e8402a',9,-95+b,1)}),
 /* Andersen: alto e magro, cilindro, redingote scura, fazzoletto bianco in mano, taccuino sotto il braccio, timido sorriso */
 NP('cp_andersen',NAME.cp_andersen,6440,GREET.cp_andersen,{skin:'#ecd0b0',top:'#2a2630',bot:'#3a3640',hair:'#6a5238',s:1.14},(g,b,t)=>{rect(g,'#16120f',-8,-136+b,20,26);rect(g,'#16120f',-13,-111+b,30,4);rect(g,'#4a4650',-8,-114+b,20,3);poly(g,'#2a2630',[[-13,-90+b],[13,-90+b],[16,-34],[-16,-34]]);rect(g,'#f4f0e4',-3,-90+b,6,12);poly(g,'#7a2a32',[[-2,-86+b],[2,-86+b],[1,-70+b],[-1,-70+b]]);
  rect(g,'#6a4a2a',-16,-70,10,14);rect(g,'#8a6a3a',-16,-70,10,3);poly(g,'#f6f4ee',[[14,-58],[22,-62],[24,-52],[16,-50]]);dot(g,'#f6f4ee',20,-58,3)}),
 /* Birgitte: grembiule bianco, cuffia, bandana a pois, guanti da forno, vassoio di pasticcini, farina sulle guance */
 NP('cp_birgitte',NAME.cp_birgitte,9570,GREET.cp_birgitte,{skin:'#f0c8a0',top:'#f4f0e6',bot:'#3a3a46',hair:'#c8a870',s:1.0},(g,b,t)=>{rect(g,'#f4f0e6',-12,-86+b,24,50);rect(g,'rgba(0,0,0,.08)',5,-86+b,7,50);rect(g,'#e8e0d0',-8,-64,16,3);
  el(g,'#c8402a',1,-110+b,13,7);for(let q=0;q<4;q++)dot(g,'#fff',-8+q*6,-110+b,1.2);dot(g,'#f4f0e6',-6,-97+b,2);dot(g,'#f4f0e6',8,-95+b,1.8);
  rect(g,'#c8b898',12,-64,34,3);for(let q=0;q<4;q++)el(g,['#c8903a','#e8c880','#a8622a','#e8b060'][q],18+q*9,-68,4.6,3.4);dot(g,'#d8402a',-14,-52,3.6)}),
 /* Henrik: casco giallo, giacca catarifrangente arancione, cintura con gli attrezzi, guanti di cuoio, matita dietro l'orecchio, termos */
 NP('cp_henrik',NAME.cp_henrik,12410,GREET.cp_henrik,{skin:'#e0b088',top:'#f08a1a',bot:'#3a3a46',hair:'#6a4a2a',s:1.04},(g,b,t)=>{el(g,'#f2c82a',1,-110+b,13,9);rect(g,'#f2c82a',-12,-108+b,26,4);rect(g,'#e8e8ee',-12,-72+b,24,4);rect(g,'#e8e8ee',-12,-60+b,24,4);ln(g,'#e8e8ee',3,[-12,-88+b,-12,-52]);ln(g,'#e8e8ee',3,[12,-88+b,12,-52]);
  rect(g,'#6a4a2a',-12,-48,24,5);rect(g,'#9a9ea6',-8,-44,4,10);rect(g,'#c8402a',2,-44,4,8);rect(g,'#a8824a',-9,-44,3,3);ln(g,'#f2c82a',1.6,[-9,-100+b,-12,-96+b]);rect(g,'#6a8a9a',16,-64,7,16);rect(g,'#c8402a',16,-66,7,3)}),
 /* Lars: giacca antipioggia blu, casco da bici, sciarpa di lana, la bici cargo con i due bambini che dormono */
 NP('cp_lars',NAME.cp_lars,13860,GREET.cp_lars,{skin:'#ecc8a0',top:'#2a5a7a',bot:'#3a3a46',hair:'#8a6a3a',s:1.04},(g,b,t)=>{el(g,'#2a8a5a',1,-112+b,13,8);rect(g,'#2a8a5a',-12,-108+b,26,3);rect(g,'#c8503a',-12,-90+b,24,7);rect(g,'#c8503a',8,-90+b,5,16);rect(g,'rgba(0,0,0,.14)',5,-84+b,7,44);
  g.strokeStyle='#222';g.lineWidth=2;[-4,54].forEach(d=>{g.beginPath();g.arc(30+d,-11,11,0,7);g.stroke()});poly(g,'#d8a030',[[18,-16],[44,-16],[48,-40],[14,-40]]);rect(g,'rgba(255,255,255,.3)',14,-40,34,3);dot(g,'#f0c8a0',26,-44,6);dot(g,'#c8a070',26,-47,6.4);dot(g,'#f0c8a0',40,-44,6);dot(g,'#4a3a2a',40,-47,6.4);
  ln(g,'#9a9ea6',2.4,[56,-11,70,-34,88,-34]);ln(g,'#9a9ea6',2.4,[50,-17,56,-11]);rect(g,'#f4f0e4',84,-42,8,7)}),
 /* Sofie: giacca rossa con il logo del parco, cappello di lana lilla, guanti, badge al collo, zaino con i libri */
 NP('cp_sofie',NAME.cp_sofie,19790,GREET.cp_sofie,{skin:'#f0c8a0',top:'#c8203a',bot:'#2a3a5a',hair:'#8a5a3a',s:.98},(g,b,t)=>{el(g,'#8a6ac0',1,-110+b,12.5,8);rect(g,'#8a6ac0',-11,-108+b,24,4);dot(g,'#f4f0e4',1,-119+b,3.4);rect(g,'#f4f0e4',-6,-84+b,12,16);dot(g,'#c8203a',0,-76+b,3.4);rect(g,'#f4f0e4',-2,-90+b,4,4);
  rect(g,'#3a3a46',-20,-86+b,8,32);rect(g,'#2a8a6a',-20,-76+b,8,5);dot(g,'#4a3a2a',-9,-96+b,3);dot(g,'#2a2d33',-12,-52,3.4);dot(g,'#2a2d33',12,-52,3.4)}),
 /* Karen: divisa rossa e grigia con berretto, fischietto al collo, tablet in mano, sciarpa scura, sguardo attento */
 NP('cp_karen',NAME.cp_karen,22960,GREET.cp_karen,{skin:'#e8b890',top:'#a82a2c',bot:'#4a4e56',hair:'#7a5a3a',s:1.02},(g,b,t)=>{rect(g,'#6a6e76',-12,-86+b,24,6);rect(g,'#2a2d33',-12,-90+b,24,6);el(g,'#a82a2c',1,-112+b,13,7);rect(g,'#a82a2c',-12,-110+b,26,5);rect(g,'#2a2d33',2,-106+b,12,3);dot(g,GO,1,-113+b,2.4);
  ln(g,'#c8c8d0',1.2,[-6,-84+b,-6,-70+b]);dot(g,'#c8c8d0',-6,-68+b,2.4);rect(g,'#2a2d33',13,-66,12,16);rect(g,'#6ab4e8',14,-65,10,10);rect(g,'#f2c82a',-12,-50,24,2)})
];
/* ---- oggetti lungo il percorso ---- */
const LX=[520,1250,1950,3000,3750,4350,4950,5800,6500,7150,8100,8800,9500,10250,11200,11900,12500,13500,14200,14900,15700,16800,17500,18150,19100,19900,20600,21550,22200,22850,23470];
const W=(n,c,a)=>[["cpW",c-100,[n,a,1,0]],["cpW",c+100,[n,a,2,0]]];
const props=[
["cptarga",90,"LANGELINIE"],["cpbench",250,null],["cplamp",330,null],["cpsirenetta",520,null],["cpbench",900,null],["cpfolla",1010,3],["cplamp",1100,null],
["cpgefion",1250,null],["cptiglio",1430,1.2],["cpbench",1520,null],["cplamp",1640,null],["cpfaggio",1760,1.1],["cptarga",1800,"KASTELLET"],["cpkastellet",1950,null],["cpfaggio",2240,1.2],["cpciclista",2380,[1,1]],
["cptarga",2620,"AMALIENBORG"],...W("cpamalie",3000,null),["cpbandiera",3530,150],["cpcambio",3750,null],["cplamp",3990,null],["cpfaggio",4080,1.1],["cpmarmo",4350,null],["cplamp",4600,null],["cpbench",4720,null],["cpopera",4950,null],["cplamp",5200,null],["cpciclista",5000,[-1,.8,1]],
...W("cpnyhavn",5800,null),["cptavolo",5560,null],["cpstufa",5680,null],["cptavolo",5900,null],["cpstufa",6030,null],["cpandersen",6500,null],["cpstufa",6330,null],["cptavolo",6690,null],["cplamp",6880,null],["cpbaci",7150,null],["cpfolla",7350,3],
["cptarga",7660,"STRØGET"],["cphotdog",7850,null],["cpstroget",8100,null],["cprack",8330,7],["cplamp",8560,null],["cprundet",8800,null],["cpciclista",8960,[-1,1.2]],["cprack",9150,6],["cptorve",9500,null],["cpcargo",9830,'#c8402a'],["cplamp",9950,null],["cprosenborg",10250,null],["cptiglio",10620,1.1],
["cptarga",10780,"SLOTSHOLMEN"],...W("cpchrist",11200,null),["cprack",11540,8],["cpsotto",11900,null],["cplamp",12100,null],...W("cpborsen",12500,null),["cprack",12830,6],["cplamp",12960,null],
["cptarga",13060,"CHRISTIANSHAVN"],["cpcanale",13500,null],["cplamp",14000,null],["cpsalvatore",14200,null],["cpchristiania",14900,null],["cpcirkel",15700,null],["cprack",16150,6],
["cptarga",16380,"ISLANDS BRYGGE"],["cpbagno",16800,null],["cplamp",17100,null],["cpserpente",17500,null],["cpbench",17900,null],["cpsilos",18150,null],["cplamp",18500,null],
["cptarga",18700,"RÅDHUSPLADSEN"],["cplamp",18850,null],["cpmunicipio",19100,null],["cpdrago",19370,null],["cpcolonna",19500,null],["cplamp",19620,null],["cptivoli",19900,null],["cplamp",20280,null],["cpglyp",20600,null],["cprack",20930,5],
["cptarga",21080,"VESTERBROGADE"],["cphotdog",21200,null],["cpkodbyen",21550,null],["cprack",21880,8],...W("cpstazione",22200,null),["cpbinari",22850,null],["cpvarco",23470,null]];
props.sort((a,b)=>a[1]-b[1]);
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'copenaghen',name:'Copenaghen · Dalla Sirenetta alla Centrale',width:W1,sky:['#8aa0c8','#f0c8d0','#ffe0c8'],gt:372,gr:['#c4c0b4','#a8a498'],chord:[220,261.6,329.6,392],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da copenaghen.txt; la prima è il saluto, l'ultima è il commiato) --- */
(function(){
const TOPX_CP={
"cp_andersen":[
["Chi sei e dove sei nato?", "Hans Christian Andersen, nato a Odense, sull’isola di Fionia, il 2 aprile 1805. Mio padre era calzolaio e mia madre lavava i panni per le famiglie: eravamo poveri, ma lui mi leggeva i libri e mi faceva il teatrino. Poi Copenaghen mi ha fatto scrittore, nå."],
["Perché sei famoso?", "Per le fiabe: ne ho scritte più di centocinquanta, e oggi le leggono in più di cento lingue. La Principessa sul pisello, Il brutto anatroccolo, La regina delle nevi, I vestiti nuovi dell’imperatore: i titoli li conoscono tutti. Io volevo essere famoso come romanziere e autore di teatro, e invece mi ricordano per le fiabe: pyt!"],
["Come sei arrivato a Copenaghen?", "Nel 1819, a quattordici anni, partii da Odense con pochi soldi per fare l’attore. Mi andò male, ma alcune persone buone mi aiutarono e mi mandarono a studiare. Era durissimo, ma ero testardo."],
["Dove hai abitato a Nyhavn?", "In tre case: al numero 20, la casa rossa, dal 1834 al 1838; poi al 67 dal 1845 al 1864; infine al 18 dal 1871 al 1875. Qui il canale era pieno di marinai e di taverne, ma per uno scrittore è una miniera di storie."],
["Com’è nata la Sirenetta?", "La Sirenetta uscì il 7 aprile 1837 nel terzo fascicolo delle mie fiabe, insieme a I vestiti nuovi dell’imperatore. All’inizio quei fascicoli non si vendevano quasi per niente. Oggi a Langelinie c’è una statua di bronzo: l’hanno inaugurata nel 1913, molto dopo la mia morte."],
["Hai mai visitato Tivoli?", "Tivoli aprì nel 1843, e ci andai da visitatore: musica, lanterne, un giardino fuori dalle mura. Si dice che mi abbia ispirato L’usignolo. Se passi di sera, guarda le luci sul lago: è una bella fiaba anche quella."],
["Perché Il brutto anatroccolo è così famoso?", "Lo scrissi nel 1843. Molti dicono che parli un po’ di me: un ragazzo povero che non si sente al suo posto e poi scopre di essere un cigno. Io non lo confermo, altså: lascio che lo dicano i lettori."],
["Cosa pensi della Copenaghen di oggi?", "Quante biciclette, min ven! Ai miei tempi c’erano carrozze e cavalli; oggi i ciclisti ti sfrecciano accanto con il campanello e nessuno si scusa, ma tutti ti avvisano. Mi hanno detto che da qualche anno, in centro, entrano più biciclette che automobili."],
["Cosa si mangia, secondo te?", "Il pane di segale con il burro e un po’ di tutto sopra: lo smørrebrød. Ai miei tempi, a metà Ottocento, cominciarono ad aprire a Copenaghen locali dove si mangia solo quello. Oggi si dice che si debba cominciare dall’aringa, ma io non vedo l’ora del dolce."],
["Ti sei mai innamorato?", "Mi innamoravo spesso, e quasi sempre senza risposta: anche della cantante Jenny Lind. Non mi sono mai sposato. Ho avuto tanti amici, però, e tanti lettori: non è poco."],
["Cosa hai lasciato alla città?", "Il Boulevard H. C. Andersen, che passa vicino al Municipio, porta il mio nome. E il 2 aprile, il mio compleanno, nel mondo si festeggia la Giornata internazionale del libro per ragazzi. Morii qui nel 1875, a settant’anni, e riposo al cimitero Assistens: non male per un figlio di calzolaio."],
["Posso salutarti e proseguire la mia passeggiata?", "Va’ pure, Pierpaolo, e non perderti: Copenaghen è piccola, ma ha un cuore grande. Se ripassi da Nyhavn, cerca la casa rossa e salutami. Hej hej, e che il cammino ti sia lieve!"]],
"cp_freja":[
["Chi sei e che fai?", "Freja, ventisei anni, faccio la grafica in uno studio e abito a Østerbro, qui vicino. Vengo al mare in bici prima di andare al lavoro, con l’asciugamano nella borsa. Il caffè dopo il bagno è il momento migliore della giornata."],
["Perché fai il bagno d’inverno?", "Per il tuffo, e poi per la sauna e il caffè: in quasi tutte le città ci sono club di nuotatori d’inverno. Si dice che faccia bene e che dia energia. La regola è una sola: mai nuotare da soli. Il primo stabilimento per bagni d’inverno di Copenaghen aprì alla fine dell’Ottocento, ad Amager, e da allora non si è più fermato."],
["È vero che si nuota nel porto?", "Sì! Ci sono bagni nel porto, come quello di Islands Brygge, gratuiti e aperti anche d’inverno; i bagnini ci sono d’estate. Se piove forte a volte chiudono un paio di giorni, perché l’acqua deve cambiare con la marea. Fedt, no?"],
["Cos’è l’hygge?", "Una parola che vuol dire stare bene insieme, al caldo e con calma: una candela, un tè, due amici. Dicono che l’85% dei danesi associ le candele all’hygge. E “lyseslukker”, il guastafeste, vuol dire alla lettera “quello che spegne la luce”."],
["Cosa fate quando fa buio presto?", "Si accendono le candele ovunque, anche negli uffici e nei caffè. Il primo dicembre si accende la candela del calendario dell’Avvento, una candela con i numeri che si consuma un giorno alla volta. E si aspetta con pazienza che torni la luce, altså."],
["Come si festeggia un compleanno?", "Sul tavolo c’è la bandiera danese, anche piccola, e chi compie gli anni porta la torta a colleghi e compagni. Se a venticinque anni non sei sposata, ti coprono di cannella: l’anno scorso è toccato a me, avevo la cannella anche nelle orecchie. A trent’anni, se sei single, ti regalano un macinapepe gigante."],
["Cosa mangi a colazione?", "Pane, di segale o bianco, con burro, marmellata o formaggio bianco, e caffè: di solito a casa. Nel weekend, se ho tempo, una kanelsnegl, la lumaca di cannella, dal fornaio. Lækkert!"],
["Cosa pensi della Sirenetta?", "Che è proprio piccola: un metro e venticinque, 175 chili di bronzo. La gente arriva e dice “tutto qui?”, ma io la trovo carina. Nel 1964 le tagliarono la testa e ogni volta che l’hanno rovinata l’hanno riparata, quindi è una sopravvissuta."],
["Cosa si vede da qui?", "Il Kastellet, dove corro sui bastioni: una fortezza a stella costruita intorno al 1660. I soldati ci sono ancora, ma si entra liberamente; d’autunno ci sono anatre nel fossato e foglie gialle ovunque. È il mio posto del cuore."],
["Come si saluta in danese?", "Con “hej”, che vale sia per “ciao” sia per “arrivederci”: “hej hej” quando si va via. Al mattino si dice “mojn”, e per chiedere come va “hva’ så?”. Con queste parole te la cavi già."],
["Come si paga, e si lascia la mancia?", "Quasi ovunque si paga con la carta o con il telefono, anche un caffè da due euro. La mancia non si lascia: il servizio è già incluso nel prezzo, per legge. Se vuoi, arrotondi, ma nessuno si offende."],
["Posso salutarti e proseguire la mia passeggiata?", "Hej hej, Pierpaolo! Se vuoi fare un tuffo, il porto di Islands Brygge è più avanti, ma porta l’asciugamano. E ricordati: il freddo non è un problema, basta saperlo vestire. Pyt, a presto!"]],
"cp_jonas":[
["Chi sei e che fai?", "Jonas, ventidue anni, soldato della Guardia Reale. Faccio i turni di guardia ad Amalienborg e nel resto del tempo mi alleno: la guardia non è solo cerimonia, è un reparto di fanteria vero. In caserma stiamo vicino al castello di Rosenborg."],
["Come funziona il cambio della guardia?", "Ogni giorno si parte dalla caserma verso le 11 e 30, si attraversa il centro e si arriva qui a mezzogiorno in punto. I nuovi soldati sostituiscono i vecchi e fanno turni di ventiquattro ore. Nel cortile, l’ufficiale consegna la bandiera, e tutto deve essere preciso."],
["Cosa vuol dire se c’è la banda?", "Che il re è in casa: allora c’è la parata completa, con musica e più soldati. Se la famiglia reale è via, la guardia è più piccola e senza grande cerimonia. E la bandiera sul tetto ti dice tutto: con la coda di rondine non c’è nessuno."],
["Com’è l’uniforme?", "Blu, con il colbacco di pelo d’orso alto quasi quanto la mia testa. È pesante e scalda: d’autunno va bene, d’estate un po’ meno. Quando passa il vento, devo tenere il mento alto e non muovere un muscolo."],
["Si può parlare ai soldati di guardia?", "Quando sono di guardia, di solito no: non siamo statue, ma stiamo in servizio e non rispondiamo. Se ti avvicini troppo ti dicono di fare un passo indietro. Fuori turno invece, come adesso, si chiacchiera volentieri."],
["Chi sono i soldati della Guardia?", "Un tempo molti entravano di leva; oggi molti ragazzi scelgono di entrare di propria volontà, dopo un periodo di addestramento di circa tre mesi. Ci sono ragazzi di tutta la Danimarca, anche di piccole isole. Con alcuni siamo diventati grandi amici."],
["Cosa fai nel tempo libero?", "Vado in bici, ovvio, e con gli amici mi fermo a mangiare un hot dog da un pølsevogn, il chiosco rosso. La “rød pølse”, la salsiccia rossa, con ketchup e senape è il classico. Non sarà un piatto da ristorante, ma è l’hygge di strada."],
["Perché ci sono bandiere ovunque?", "Perché la Dannebrog, la bandiera rossa con la croce bianca, la usiamo per tutto: compleanni, feste, matrimoni, anche per decorare l’albero di Natale. Si dice che sia caduta dal cielo nel 1219, durante una battaglia in Estonia. Non è un gesto politico: è una festa, altså."],
["Cosa si vede dalla piazza?", "La Chiesa di Marmo con la cupola verde, i giardini che scendono al porto e, di là dall’acqua, l’Opera, aperta nel 2005. La sera le luci del porto sono bellissime. Se hai tempo, passa dal molo: il tramonto qui è un regalo."],
["Come si dice grazie in danese?", "“Tak”, e “mange tak” se è tanto. Dopo mangiato si dice “tak for mad”, grazie per il cibo, anche a casa di amici: chi ti ospita si commuove sempre. E se non sai cosa dire, un sorriso e “hej” funzionano."],
["Come ti sposti in città quando sei libero?", "In bici, sempre, anche in uniforme civile sotto la pioggia. Per le distanze più lunghe c’è la metropolitana, che gira anche di notte. Il trucco è semplice: segnala con la mano quando giri e non fermarti in mezzo alla pista ciclabile, altrimenti ti suonano il campanello!"],
["Posso salutarti e proseguire la mia passeggiata?", "Hej hej, Pierpaolo! Se alle dodici in punto senti una banda, è la parata: non perdertela. Mi raccomando, tienti dietro la linea. Tak per la chiacchierata!"]],
"cp_birgitte":[
["Chi sei e che fai?", "Birgitte, cinquantadue anni, faccio pane e dolci. Mi sveglio alle quattro, accendo il forno, e quando arrivano i clienti ho già finito mezza giornata. È un lavoro duro, ma l’odore del pane la mattina non lo cambierei con niente."],
["Cos’è il wienerbrød?", "In danese si chiama “pane viennese”, e fuori dalla Danimarca lo chiamate “danish”. Si racconta che nel 1850 uno sciopero dei fornai abbia portato pasticceri austriaci a Copenaghen, e i danesi imparando lo resero più burroso. Per questo, dicono, un viennese lo chiama “Copenaghener”."],
["Quali sono i dolci più tipici?", "La kanelsnegl, la lumaca di cannella, è la regina; poi la spandauer, con la crema, e la tebirkes, con i semi di papavero. Con un caffè, a metà mattina, sono perfetti. Prova la lumaca ancora tiepida: fedt!"],
["Cos’è il rugbrød?", "Il pane di segale scuro, denso e un po’ acido, che i danesi mangiano ogni giorno. Si taglia sottile e lo si imburra, poi ci si mette sopra qualcosa: ed ecco lo smørrebrød. A casa mia la segale c’è sempre, anche quando non c’è altro."],
["Come si mangia lo smørrebrød?", "Con coltello e forchetta, mai con le mani. L’ordine tradizionale è: prima l’aringa, poi altro pesce, poi la carne, infine il formaggio. Ma molti danesi ti diranno che regole non ce ne sono: mangia come ti pare, purché con calma."],
["Cos’è la madpakke?", "Il pranzo al sacco: una o due fette di segale con burro e qualcosa sopra, avvolte in carta oleata, spesso con un elastico. I danesi lo portano ovunque, a scuola e al lavoro. Si mangia verso mezzogiorno: la “frokost”, il pranzo."],
["Quando si mangia?", "Pranzo a mezzogiorno, cena presto: molte famiglie cenano verso le sei. Nei ristoranti di Copenaghen l’ora di punta è fra le sei e mezza e le otto. Se arrivi alle dieci con la pancia vuota, qualcosa troverai, ma non in tutti i posti."],
["E per i compleanni?", "Chi compie gli anni porta la torta a scuola o al lavoro: non ti aspetti che te la portino. È la “lagkage”, una torta a strati con marmellata o crema e panna. E sulla torta, sempre, una bandierina danese."],
["Cos’è il fastelavn?", "Una festa di febbraio, un po’ Carnevale e un po’ Halloween: i bambini si vestono e colpiscono una botte piena di dolci, “per far uscire il gatto”. Nei forni si vendono le fastelavnsboller, i panini con la panna. Io ne faccio duecento."],
["Cos’è la Mortensaften?", "La sera del 10 novembre, a San Martino, si mangia l’oca. È una cena tradizionale con patate e cavolo rosso, e io quest’anno ho già un sacco di prenotazioni. L’autunno qui sa di oca e di cannella."],
["Perché Torvehallerne è così famoso?", "Perché è un mercato vero: pesce, formaggi, pane e caffè, con più di sessanta banchi, e per i copenaghesi è anche il posto dove si fanno amicizia. Aprì a settembre 2011, dopo decenni di mercato all’aperto nello stesso posto. Mi piace che qui si venga a chiacchierare, non solo a comprare."],
["Posso salutarti e proseguire la mia passeggiata?", "Hej hej, Pierpaolo! Porta con te una lumaca di cannella per la strada, la mangi con calma. E tak per essere passato: mi hai fatto una bella pausa!"]],
"cp_henrik":[
["Chi sei e che fai?", "Henrik, quarantacinque anni, carpentiere. Ho sempre lavorato ai tetti di edifici storici, e da due anni sono qui: tagliare il legno giusto per un tetto è come fare un puzzle in tre dimensioni. È un lavoro lento, ma lo si fa una volta sola."],
["Cos’è la Børsen?", "La vecchia Borsa: la costruì il re Cristiano IV, tra il 1619 e il 1625, per fare di Copenaghen un centro di commercio. È uno degli edifici più antichi della città. Con i suoi mattoni rossi, i frontoni di pietra e la guglia, era il simbolo della Copenaghen delle torri."],
["Cos’è successo alla Børsen?", "Il 16 aprile 2024 un incendio, durante i lavori sul tetto di rame, ha distrutto circa metà dell’edificio e fatto crollare la guglia. Molta gente si è messa in fila per portare fuori i quadri, e quasi tutto si è salvato. La causa non è stata accertata, ma la polizia ha escluso che sia stato un reato."],
["Come si ricostruisce una guglia?", "Con tanta pazienza: quattro code di drago intrecciate, alte cinquantasei metri, non si fanno in una settimana. La nuova guglia sarà come quella del 1776. Il rame nuovo impiegherà fino a settant’anni per prendere il colore verde del vecchio: noi non lo vedremo mai, altså."],
["Quanto ci vorrà?", "La fine dei lavori è prevista per la fine del 2029. Intanto c’è il centro visitatori, fatto di quindici container, con le finestre sul cantiere: ha avuto più di cinquantamila visite. Mi fa piacere che la gente guardi come lavoriamo."],
["Cos’è la leggenda del drago?", "Si dice che la guglia proteggesse l’edificio dagli incendi, ma, come vedi, non è bastato. I draghi hanno in cima tre corone, per la Danimarca, la Norvegia e la Svezia. Sono simboli di forza e di guardia: a noi basta che torni al suo posto."],
["Cosa si vede da qui?", "La torre di Christiansborg, alta 106 metri: dentro c’è il Parlamento, con 179 deputati. Dalla cima il panorama è gratuito: si sale quasi tutto in ascensore, e solo l’ultimo pezzo è una scala a chiocciola. Io ci vado il giorno dopo la paga, con mia figlia."],
["Cosa mangi sul cantiere?", "La madpakke, ovviamente: due fette di segale con il paté di fegato, avvolte nella carta. Il caffè dal termos, a pranzo mezz’ora di pausa. Non è cucina da ristorante, ma ti dà la forza per il pomeriggio."],
["Come si lavora con il maltempo?", "Si lavora, con l’abbigliamento giusto. Dicono che in Danimarca non esiste il cattivo tempo, ma solo i vestiti sbagliati: qui a novembre piove, tira vento, e il cappello impermeabile è sacro. Si va in bici anche con la pioggia, ma con una giacca vera."],
["Cos’è il design danese?", "Cose semplici, belle e fatte bene: legno, linee pulite, niente fronzoli. Ogni anno c’è un festival, “3daysofdesign”, dove i negozi mostrano le novità. Io mi fido di una sedia che dura quarant’anni."],
["Che usanza ti piace di più?", "Il Sankt Hans, il 23 giugno: si accendono fuochi sulle spiagge, si fa un discorso e si brucia un fantoccio di strega. È la festa di mezza estate, e sembra che il sole non voglia più andare a letto. Se torni a giugno, vieni con noi."],
["Posso salutarti e proseguire la mia passeggiata?", "Hej hej, Pierpaolo! Torna fra qualche anno, a guglia finita, e portami un caffè. E tak per avermi ascoltato: fa piacere, a volte."]],
"cp_lars":[
["Chi sei e che fai?", "Lars, trentotto anni, lavoro in un ufficio qui in zona e porto i bambini all’asilo in bici. Abbiamo due figli e una bici cargo, che per noi vale come un’auto. Si carica tutto: bambini, spesa, e a volte anche il cane."],
["Perché tutti vanno in bici?", "Perché la città è piatta e ci sono piste ciclabili separate dalla strada, circa trecentosettantacinque chilometri. In centro oggi passano più biciclette che auto, e circa quattro persone su dieci vanno al lavoro o a studiare in bici. Fedt, no?"],
["Quali sono le regole?", "Si tiene la destra, si alza la mano prima di fermarsi e si indica con il braccio la direzione prima di girare. Il semaforo rosso vale anche per le bici: la multa è di circa mille corone. E di sera servono la luce bianca davanti e quella rossa dietro; senza, sono circa settecento corone."],
["Cos’è la “bici Christiania”?", "La bici cargo con la cassa davanti: la inventò Lars Engstrøm a Christiania, e la prima, nel 1984, la regalò alla sua ragazza per il compleanno. È nata per portare i bambini e il resto, a Christiania dove le auto non entrano. Per legge i bambini piccoli devono essere seduti sul loro sedile con le cinture."],
["Come si fa con la pioggia e il freddo?", "Si va lo stesso: si indossa l’antipioggia, i guanti, e si pedala. I bambini hanno la loro coperta nella cassa. Dopo il primo inverno non ci fai più caso, altså."],
["Cos’è la kolonihave?", "Un piccolo giardino con una casetta, dove le famiglie passano il fine settimana: coltivano fiori e verdure, grigliano e fanno il caffè. Il primo giardino di questo tipo, a Copenaghen, fu fondato nel 1891 per gli operai. Sulla casetta c’è sempre una bandiera danese e, d’estate, una torta alle fragole sul tavolo."],
["Cosa si fa la domenica?", "Si va al parco, o alla kolonihave, o al mare. In estate un tuffo al porto, poi un gelato e a casa presto: il lunedì si lavora. È la vita più semplice del mondo, ma ci piace così."],
["È vero che Christiania ha regole sue?", "Sì: è una comunità in parte autogovernata, nata nel 1971 nelle ex caserme di Bådsmandsstræde. Ci vivono circa mille persone e ci passa più di un milione di visitatori all’anno. Dentro si cammina e si va in bici; le auto non entrano, e questo lo apprezzo."],
["Cosa c’è da fare a Christianshavn?", "Girare lungo i canali, mangiare qualcosa sul porto e salire sulla guglia della Chiesa del Salvatore, se non soffri di vertigini. Gli ultimi 150 gradini sono all’aperto e con il vento la scala dondola un poco. Io ci salgo a ottobre, quando l’aria è limpida."],
["Come si tiene una bici in città?", "La legge dice che quando la lasci devi chiuderla con un lucchetto. In città ci sono circa duecentottanta negozi di bici, e le rastrelliere sono sempre piene. Se perdi la tua, di solito la ritrovi, ma non sempre, pyt!"],
["Come si passa l’estate in città?", "Al porto di Islands Brygge: ingresso gratuito, tuffi dalla torre e sdraio sui pontili. Poi si prende il Serpente della Bicicletta, la pista arancione sopraelevata aperta nel 2014, per tornare a casa senza scendere dalla bici. Tutto in dieci minuti, hygge e fatica insieme."],
["Posso salutarti e proseguire la mia passeggiata?", "Hej hej, Pierpaolo! Mi raccomando, alla prima bici che passa, attento alle ruote e al campanello. E tak per la chiacchierata: i bambini si sono svegliati, ora si torna a casa!"]],
"cp_sofie":[
["Chi sei e che fai?", "Sofie, ventitré anni, studio all’università e nel weekend lavoro a Tivoli. Accompagno i visitatori e aiuto alle giostre. Quando c’è la sera di luci, mi piace restare a guardare."],
["Cos’è Tivoli?", "Un giardino con giostre, teatri, ristoranti e un lago, in pieno centro. Aprì il 15 agosto 1843: è il secondo parco di divertimenti più antico del mondo ancora aperto. Si dice che il fondatore, Georg Carstensen, abbia convinto il re dicendo che, quando la gente si diverte, non pensa alla politica."],
["Cosa si fa di sera?", "Ci si siede vicino al lago a guardare le luci, o si va al Teatro della Pantomima, dove il sipario ha la coda di pavone. D’estate il venerdì ci sono i concerti rock gratuiti, “Friday Rock”, e il sabato i fuochi d’artificio, alle undici e mezza di sera. Altro non serve, lækkert."],
["Cosa c’è d’autunno?", "A ottobre arriva Halloween, con le zucche gigantesche e le decorazioni, e poi Natale con i mercatini e le luci. Il parco cambia faccia ogni stagione, e io faccio la guida un po’ a tema. Non è vero che si va solo d’estate!"],
["Com’è la montagna russa di legno?", "Si chiama Rutschebanen ed è del 1914: va a circa cinquanta chilometri all’ora su un percorso di 720 metri, alto dodici. Non è velocissima, ma con le curve di legno sembra di tornare indietro nel tempo. Ancora oggi su ogni vagone c’è un frenatore che fa il giro con i passeggeri."],
["Cosa sono le coppole bianche?", "La “studenterhue”, il cappello bianco con il nastro che si indossa alla maturità, l’ultima settimana di giugno. I diplomati salgono su camion decorati e fanno il giro della città, fermandosi a casa di ogni compagno per un brindisi. Io l’ho fatto: un giorno intero di musica e panini."],
["Com’è la vita da studente?", "A settembre c’è la “studiestart”, la settimana di accoglienza, con feste e giochi per conoscersi. Si va in bici ovunque, si mangia alla mensa e si cucina a casa, e chi può lavora nel weekend. È dura, ma si fanno amicizie per la vita."],
["Si paga in contanti?", "Quasi mai: carta o telefono, ovunque, anche per un caffè. E anche i monopattini elettrici devono rispettare le regole delle bici: si tiene la destra e ci si ferma al rosso. Fedt!"],
["Cos’è Rådhuspladsen per voi?", "La piazza del Municipio, il “chilometro zero” di Copenaghen. Nel Matador, il Monopoli danese, è la casella più cara: tutti la conoscono per questo! Alla sera la piazza è piena di luci e di gente che aspetta il bus."],
["Cos’è la Glyptotek?", "Il museo accanto a Tivoli, fondato dal birraio Carl Jacobsen, lo stesso della Sirenetta. Dentro c’è un giardino d’inverno con palme e statue sotto una cupola di vetro, un posto per riposarsi. Io ci vado quando ho gli esami: fa pensare meglio."],
["Come si brinda?", "Si dice “skål” e si guarda negli occhi tutti, uno per uno, prima di bere. Non farlo porta sfortuna, dicono. E se qualcuno ti ospita, a fine pasto ricordati “tak for mad”, altrimenti ci resta male."],
["Posso salutarti e proseguire la mia passeggiata?", "Hej hej, Pierpaolo! Se hai tempo, entra a Tivoli e guarda le luci sul lago: è una cosa che ti rimane. Tak per aver parlato con me, e buona serata!"]],
"cp_karen":[
["Chi sei e che fai?", "Karen, quarantanove anni, capotreno da venti. Controllo i biglietti, aiuto chi sale con valigie e biciclette e do il via alla partenza. Il mio ufficio è un corridoio che si muove."],
["Com’è la Stazione Centrale?", "La chiamano “Hovedbanegården”, o semplicemente “Hovedbanen”. L’edificio attuale è del 1911, dell’architetto Heinrich Wenck; la prima stazione, nel 1847. Ha sette banchine e tredici binari, ed è il punto da cui parte quasi tutto."],
["Dove vanno i treni?", "Ai quartieri vicini, all’aeroporto, ai paesi della Danimarca e alla Svezia, sul ponte dell’Øresund che arriva a Malmö, con treno e auto. Copenaghen ha circa 670.000 abitanti, e un milione e quattrocentomila con la zona intorno. Il treno è il modo più comodo per muoversi."],
["Come si viaggia in treno con la bici?", "Ci sono spazi appositi per le biciclette, e di solito serve un biglietto per la bici: controlla prima di salire. Si lascia la bici ben legata e si dà la precedenza a chi ha una carrozzina. È parte della vita: con il treno si arriva alla stazione e con la bici si va ovunque."],
["Come si paga il biglietto?", "Con l’app o la carta, alle macchinette. La vecchia carta Rejsekort, a metà 2026, ha smesso di funzionare per il check-in: se ne hai una, chiedi in biglietteria. Prendi l’abitudine di controllare, che è meglio."],
["Cosa si fa a Vesterbro?", "Soprattutto di sera: Kødbyen, il vecchio mercato della carne costruito dal 1879, è pieno di ristoranti, bar e gallerie. Prima ci lavoravano i macellai, oggi ci vanno i ragazzi a ballare. L’odore, per fortuna, è quello del cibo."],
["Quando si cena?", "Presto, intorno alle sei per molte famiglie. Nei ristoranti l’ora di punta è fra le sei e mezza e le otto; se arrivi più tardi, in alcuni posti la cucina è già chiusa. E ricorda: la mancia non è obbligatoria, perché il servizio è già incluso."],
["Quali parole danesi servono in stazione?", "“Billet” è il biglietto, “spor” il binario, “afgang” la partenza e “forsinket” vuol dire in ritardo. Se senti “forsinket”, chiedi: spesso è questione di pochi minuti. E per ringraziare, “tak”."],
["Cosa fanno i danesi in treno?", "Di solito si parla piano, si legge, si guarda il telefono. Se hai fame, c’è chi apre una madpakke con il pane di segale. Non è maleducato: è abitudine."],
["Cosa significa “pyt”?", "“Non importa, lascia perdere”: una parola che usiamo quando qualcosa va storto, un treno perso o un caffè versato. Si dice con un sorriso e si va avanti. A volte mi salva la giornata, altså."],
["Cos’è il Mortensaften e cosa si mangia a novembre?", "Il 10 novembre, a San Martino, si mangia l’oca con cavolo rosso e patate. Poi arrivano le candele dell’Avvento, il primo dicembre, e la città si riempie di luci. Per noi novembre è il mese dell’hygge."],
["Posso salutarti e proseguire la mia passeggiata?", "Hej hej, Pierpaolo. In fondo al binario c’è una luce: seguila, e non voltarti. Buon viaggio, e tak per la compagnia!"]]};
Object.assign(TOPX,TOPX_CP);
})();
