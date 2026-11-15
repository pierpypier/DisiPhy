/* ---------- TOKYO · Dal mercato di Tsukiji alla Tokyo Tower (Tsukiji e Ginza, Asakusa, fiume Sumida e Ryōgoku, Palazzo Imperiale e stazione di Tokyo, Akihabara e Ueno, Shinjuku, Harajuku e Meiji Jingū, Shibuya, Tokyo Tower e Zōjō-ji) ---------- */
/* Un'intera giornata d'autunno da sinistra a destra: alba al mercato esterno di Tsukiji e a Ginza, mattina ad Asakusa fra porte rosse e fumo d'incenso,
   tarda mattina lungo il fiume Sumida e a Ryōgoku, mezzogiorno alla stazione di Tokyo e al Palazzo Imperiale, primo pomeriggio ad Akihabara e nel parco di Ueno,
   tardo pomeriggio a Shinjuku, tramonto al Meiji Jingū e a Harajuku, crepuscolo a Shibuya, notte ai piedi della Tokyo Tower.
   Il varco finale è la luce arancione della Tokyo Tower che si accende contro il cielo blu notte. Il tempo si piega: Hokusai e Tokugawa Ieyasu convivono con la gente di oggi, e la città è quella di oggi.
   Testi, tappe e dialoghi vengono da tokyo.txt (definitivi, usati senza riscriverli; solo l'apostrofo e le virgolette sono resi tipografici). Gli oggetti stanno in elementi.js (nomi che iniziano per "tk").
   Il tono per i temi dolorosi (terremoto del 1923, bombardamenti del 1945, incendio di Meireki del 1657) è sempre sobrio e rispettoso; le leggende sono presentate con "si dice" o "secondo la leggenda". */
(function(){
const GT=372;
const T=PR._tk,Z=T.Z,W1=T.W1,nf=T.nf;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln,gatto}=PR._rm;
const {pp,suit,ginkgo,momiji,pino,cedro,vsign,chochin,roof,win,fili,pagoda,treno,taxi,torre,vend,bici}=T;
const md=(i,n)=>((i%n)+n)%n;
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
const TL='#464a54',TL2='#30343e';
/* ---- cielo: alba fredda e azzurra con una striscia rosa, mattina luminosa, mezzogiorno bianco, pomeriggio arancione, tramonto rosa e viola, crepuscolo blu con striscia arancione, notte ---- */
const SKY=[[0,['#6f9ede','#cdd6ee','#f7c4c8']],[1500,['#4aa0ee','#a8d0f4','#e6f2fa']],[Z[1],['#3a98f0','#8cc8f6','#e0eef8']],[Z[2],['#2a90ec','#7ec0f4','#dcecf6']],[Z[3],['#3a98f0','#a8d4f6','#f4f8fb']],[Z[4],['#4a9cec','#b4d4f0','#f6f4e8']],[Z[5],['#5a9ae0','#e8c898','#ffd09a']],[Z[5]+1200,['#5a8ad0','#f0b080','#ffbe7a']],[Z[6],['#5a6cc0','#e890a0','#ffa870']],[Z[6]+1500,['#4a4aa8','#b86aa8','#f08a70']],[Z[7],['#1e2c78','#3a3a98','#f27a30']],[Z[7]+1400,['#101a5e','#22288a','#c8602e']],[Z[8],['#0a1040','#141a5a','#4a2a66']],[Z[8]+1500,['#080c36','#10184c','#2a2060']],[W1+400,['#080c36','#10184c','#2a2060']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Tokyo, dall’alba alla notte. Parti dal mercato esterno di Tsukiji, quando i banchi del pesce e delle frittate si aprono; poi Ginza, e il fiume Sumida ti porta ad Asakusa, fra la porta del tuono e il fumo dell’incenso. Nella tarda mattina il fiume ti conduce a Ryōgoku, dove il pittore Hokusai disegnava onde e dove si lotta il sumo; a mezzogiorno la stazione dai mattoni rossi e il castello di Edo, ora Palazzo Imperiale. Nel primo pomeriggio Akihabara e il parco di Ueno; nel tardo pomeriggio Shinjuku, la stazione più affollata del mondo, e i suoi vicoli. Al tramonto il bosco del Meiji Jingū e Harajuku; al crepuscolo Shibuya, con il suo incrocio e il cane Hachikō. A notte la Tokyo Tower si accende d’arancione sopra la città. Il tempo qui si piega: gli abitanti di ogni epoca ti vengono incontro, e la città è quella di oggi.";
const LKTXT=[
"Tsukiji significa “terra riportata”: il quartiere è nato su terreno strappato al mare. Il grande mercato all’ingrosso aprì l’11 febbraio 1935, al posto di quello di Nihonbashi distrutto dal terremoto del 1923, e chiuse il 6 ottobre 2018: da allora le aste del pesce e l’ingrosso sono a Toyosu, a due chilometri e mezzo da qui. Qui è rimasto il mercato esterno, con più di quattrocento botteghe.",
"Il tamagoyaki è una frittata arrotolata a strati in una padella rettangolare: leggermente dolce, morbida, tagliata a fette e spesso servita su un bastoncino. Si compra per strada e si mangia in piedi, davanti al banco, mentre il mercato si sveglia. Si sceglie con calma, ma si mangia in fretta: è ancora caldo.",
"Accanto al mercato c’è un tempio buddista che non somiglia a nessun altro: la sala principale di oggi fu costruita nel 1934, dopo il terremoto del 1923, su progetto di Itō Chūta, che si ispirò all’architettura dell’India antica. Dentro, fra statue e incenso, c’è perfino un organo a canne.",
"Ginza (“sede dell’argento”) prende il nome dalla zecca d’argento aperta qui nel 1612, ai tempi del primo shōgun Tokugawa. All’incrocio principale sta il palazzo Wakō, con la torre dell’orologio del 1932: è il punto d’incontro più noto del quartiere.",
"Il Kabukiza è il teatro del kabuki: aperto nel 1889, è stato ricostruito più volte, dopo incendi e bombardamenti; l’edificio di oggi è del 2013, con una torre moderna dietro la facciata tradizionale. Nel kabuki recitano soltanto attori uomini, anche nelle parti femminili.",
"Il Kaminarimon, la “porta del tuono”, è l’ingresso del Sensō-ji. La grande lanterna rossa è alta 3,9 metri e pesa circa 700 chili; ai lati stanno le statue di Fūjin, dio del vento, e di Raijin, dio del tuono. La porta bruciò nel 1865 e fu ricostruita solo nel 1960, con la donazione di Matsushita Kōnosuke, fondatore della Panasonic.",
"Dal Kaminarimon al tempio corre la Nakamise-dōri, una delle più antiche vie di negozi del Giappone, che porta alla seconda porta, l’Hōzōmon. Si vendono dolcetti caldi, crackers di riso, ventagli e souvenir. Sul lato interno dell’Hōzōmon sono appesi enormi sandali di paglia, che secondo la tradizione tengono lontani gli spiriti cattivi.",
"Il Sensō-ji è il tempio più antico di Tokyo. Secondo la leggenda, nel 628 due fratelli pescatori trovarono nel fiume Sumida una statua di Kannon, la figura buddista della compassione; il tempio fu fondato nel 645. La sala principale e la pagoda sono ricostruzioni del dopoguerra. Davanti alla sala si fa un rito semplice: si porta verso di sé il fumo dell’incenso, per la salute, e si pesca un omikuji, il foglietto della fortuna; se è “kyō”, sfortuna, lo si lega agli appositi sostegni, per lasciarla lì.",
"Accanto al tempio sta Asakusa Jinja, il santuario shintoista dedicato ai tre uomini che, secondo la tradizione, fondarono il Sensō-ji. A maggio, nel fine settimana intorno al terzo sabato, vi si tiene il Sanja Matsuri, una delle più grandi feste di Tokyo: i quartieri portano a spalla i mikoshi, i santuari portatili. Come al tempio, anche qui si parla piano.",
"Il Sumida attraversa la città verso la baia ed è il fiume dell’antica Edo: sulle sue rive nacque e visse Hokusai. Oggi sopra le rive si alza la Tokyo Skytree, la torre inaugurata nel 2012: 634 metri, il numero che in giapponese si legge “mu-sa-shi”, dal nome di un’antica provincia.",
"Il Sumida Hokusai Museum, aperto nel novembre 2016 nel quartiere dove il pittore nacque, è un edificio rivestito d’alluminio, progettato da Sejima Kazuyo. Dentro ci sono stampe e disegni di Hokusai, fra cui la celebre Grande Onda. Hokusai cambiò nome più di trenta volte e, si dice, si trasferì novantatré volte.",
"Ryōgoku è il quartiere del sumo. Il primo palazzo permanente per i tornei fu costruito qui nel 1909; l’arena di oggi è in uso dal 1985. I grandi tornei si tengono a gennaio, maggio e settembre, per quindici giorni; nelle scuderie vicine i lottatori si allenano e mangiano il chanko-nabe, un grande stufato.",
"La stazione di Tokyo aprì il 20 dicembre 1914, su progetto di Tatsuno Kingo: una facciata di mattoni rossi lunga più di trecento metri, con cupole. Fu danneggiata dai bombardamenti del 1945 e restaurata nel 2012 per tornare com’era in origine. Oggi da qui partono i treni ad alta velocità, gli shinkansen.",
"Nelle stazioni giapponesi si compra l’ekiben, il bento da viaggio: una scatola con riso, pesce, verdure e frittata, e ogni scatola racconta una regione. Si mangia in treno o su una panchina, con le bacchette di legno che escono dalla busta. Un piccolo pranzo da portare con sé.",
"Dove sorge il Palazzo Imperiale c’era il castello di Edo, fondato nel 1457 da Ōta Dōkan. Tokugawa Ieyasu ne fece la sua sede nel 1590, e da qui i suoi successori governarono per oltre duecentosessant’anni. Nel 1868, alla fine dello shogunato, Edo prese il nome di Tokyo e il castello divenne la residenza dell’imperatore.",
"Il mastio del castello, alto cinque piani, fu distrutto dal grande incendio di Meireki del 1657, in cui si stima che siano morte circa centomila persone, e non fu mai ricostruito. Resta solo la base di pietra, il Tenshudai: si guarda in alto, verso lo spazio vuoto dove sorgeva. Qui si sta in silenzio.",
"Akihabara è il quartiere dell’elettronica, dei videogiochi e dei fumetti giapponesi. Dopo la guerra le bancarelle del mercato nero sotto i binari si specializzarono nei pezzi per radio, e da lì nacque il quartiere. Il nome viene da Akiba, nome con cui la gente chiamò un santuario antincendio costruito dopo il grande incendio del 1869.",
"Kanda Myōjin è un santuario vicino ad Akihabara, fondato, secondo la tradizione, nel 730. A maggio degli anni dispari vi si tiene il Kanda Matsuri, con grandi cortei di mikoshi. Ci sono amuleti per i computer e i telefoni, e accanto ai tradizionali ema, le tavolette di legno, ce ne sono con i personaggi degli anime.",
"Il parco di Ueno aprì nel 1873, uno dei primi parchi pubblici del Giappone, dove prima sorgevano templi distrutti nella battaglia del 1868. Lì vicino c’è lo zoo, il più antico del paese, aperto nel 1882. I panda, che dal 1972 ne erano il simbolo, a gennaio 2026 sono tornati in Cina: oggi il Giappone non ne ha nessuno.",
"Lo stagno Shinobazu è diviso in tre parti: quella dei loti, che a luglio e agosto si riempie di foglie e fiori rosa; quella dei cormorani, vicina allo zoo; e quella delle barche a pedali. Su un’isoletta, raggiunta da un ponte, c’è il piccolo tempio di Benten, divinità dell’acqua e delle arti.",
"La stazione di Shinjuku è la più trafficata del mondo: ogni giorno ci passano circa tre milioni e mezzo di persone, e ha più di duecento uscite. Treni, metropolitane e autobus si incrociano qui, e per non perdersi bisogna imparare a memoria l’uscita giusta.",
"Il Tochō, il palazzo del governo metropolitano, è stato progettato da Tange Kenzō e completato nel 1990: due torri gemelle, alte 243 metri. Dai piani di osservazione a 202 metri, gratuiti, la vista si apre su tutta la città, e nelle giornate limpide d’inverno si vede anche il monte Fuji.",
"Omoide Yokochō, “il vicolo dei ricordi”, è un dedalo di vicoli nati dopo la guerra, quando qui c’era un mercato nero. Oggi sono locali minuscoli che cuociono spiedini di pollo, gli yakitori, su griglie a carbone, con i treni che passano a pochi metri. Si mangia in piedi o seduti spalla a spalla.",
"Golden Gai è un quartiere di sei vicoli con circa duecento bar minuscoli, alcuni con pochissimi posti. Ogni locale ha il suo carattere e il suo padrone: musica, cinema, libri, fotografia. In alcuni si paga un piccolo coperto, e in molti ci si conosce per nome.",
"Kabukichō è il quartiere dei locali notturni e delle insegne luminose. Sul tetto del cinema Toho, dal 2015, spunta una gigantesca testa di Godzilla, il mostro nato nel cinema giapponese nel 1954, che a orari fissi ruggisce e sbuffa fumo. Di sera è una zona vivace, con locali per adulti: si guarda e si prosegue.",
"Il Meiji Jingū è dedicato all’imperatore Meiji, morto nel 1912, e all’imperatrice Shōken, ed è stato inaugurato nel 1920. La foresta che lo circonda non è nata da sola: furono piantati circa centomila alberi, di circa trecentosessantacinque specie, donati da tutto il Giappone. Oggi sembra un bosco naturale in mezzo alla città.",
"Lungo il viale stanno due muri di botti: da una parte le botti di sake, offerte al santuario dalle distillerie; dall’altra le botti di vino della Borgogna, regalate dai produttori francesi in omaggio all’imperatore, che amava la cultura occidentale. Sono botti decorative, in genere vuote.",
"Il santuario fu distrutto dai bombardamenti del 1945 e ricostruito nel 1958 grazie alle offerte della gente. L’edificio è di cipresso, con il tetto di rame, quasi senza colori. Qui si fanno due inchini, due battiti di mani e un ultimo inchino; i desideri si scrivono sugli ema, le tavolette di legno. Gli omikuji del Meiji Jingū non danno punteggi di fortuna, ma contengono poesie waka dell’imperatore e dell’imperatrice.",
"Appena fuori dal santuario si cambia mondo: la Takeshita-dōri è una stradina pedonale piena di moda colorata, creperie e negozi di accessori; l’Omotesandō, il viale alberato che porta al santuario, è invece fatto di boutique e architettura. Il quartiere è la patria dello stile “kawaii”, cioè “carino”.",
"Davanti alla stazione sta la statua in bronzo di Hachikō, un cane Akita nato nel 1923. Ogni giorno accompagnava il suo padrone, il professor Ueno, alla stazione di Shibuya e lo aspettava al ritorno. Quando il professore morì all’improvviso nel 1925, Hachikō continuò a tornare ogni giorno, fino alla sua morte, l’8 marzo 1935. La statua fu inaugurata nel 1934, e lui era presente. Oggi “ci vediamo da Hachikō” è l’appuntamento più usato di Tokyo.",
"Lo Scramble di Shibuya è l’incrocio pedonale più famoso del mondo: quando il semaforo diventa verde, i veicoli si fermano in tutte le direzioni e fino a circa tremila persone attraversano insieme, anche in diagonale. Nessuno si urta: ci si lascia portare.",
"Sul tetto di Shibuya Scramble Square, aperto nel 2019, c’è Shibuya Sky: una terrazza a circa 230 metri da cui si vede l’incrocio dall’alto, i grattacieli e, nelle giornate limpide, il Fuji. Al tramonto è il posto dove si sale per guardare Tokyo accendersi.",
"Dietro i grandi schermi, le stradine sono piene di taverne, ristoranti, sale karaoke e sale giochi. Il karaoke, “orchestra vuota”, è un rito: si prende una stanza privata per un’ora o più e si canta con gli amici, spesso fino a tardi. Dopo cena si va al “secondo giro”, il nijikai.",
"Lo Zōjō-ji era il tempio di famiglia dei Tokugawa: Ieyasu lo fece trasferire qui nel 1598, e nel suo recinto riposano sei shōgun. Il portale rosso, il Sangedatsumon, è del 1622: è il più antico edificio di legno di Tokyo. Passandoci sotto, secondo la dottrina buddista, ci si libera di avidità, rabbia e ignoranza.",
"Ai piedi della torre c’è il parco di Shiba, costruito sui terreni che un tempo appartenevano al tempio. Di giorno vi si portano i bambini, di sera le coppie e i fotografi. Dalle panchine si vede la torre in tutta la sua altezza: un buon posto per fermarsi a guardare.",
"La Tokyo Tower fu aperta il 23 dicembre 1958: 333 metri, più alta della torre Eiffel, a cui si ispira, ma molto più leggera. È dipinta di arancione internazionale e di bianco, come richiede la sicurezza aerea. Oggi non è più la più alta della città, superata dalla Skytree, ma per molti è ancora “la” torre.",
"Quando la luce arancione della Tokyo Tower si accende contro il cielo blu notte, per un momento la torre, il tempio ai suoi piedi e la città hanno lo stesso colore caldo."];
const NAME={"tk_sachiko": "Sachiko, la venditrice di tamagoyaki", "tk_ryo": "Ryō, il tiratore di risciò", "tk_hokusai": "Katsushika Hokusai", "tk_ieyasu": "Tokugawa Ieyasu", "tk_kenta": "Kenta, il commesso dei videogiochi", "tk_hiroshi": "Hiroshi, l’impiegato", "tk_yui": "Yui, la miko", "tk_mio": "Mio, la studentessa"};
const GREET={"tk_sachiko":"Ohayō gozaimasu, Pierpaolo-san! Vieni, vieni, il tamagoyaki è appena uscito dalla padella. Sono Sachiko e questo banco era di mio marito, prima ancora di suo padre. Quanti pezzi ne vuoi, anta?",
 "tk_ryo":"Oi, Pierpaolo! Benvenuto ad Asakusa, sō daze! Sono Ryō e il risciò è questo qui: se vuoi ti porto in giro per mezz’ora, ma intanto ti racconto tutto. Salta su, o almeno fermati un attimo!",
 "tk_hokusai":"Oi, giovanotto! Fermo lì, non muoverti: ti sto già disegnando. Sono Hokusai, o come mi chiamano oggi: il vecchio di cui hanno fatto un museo. Dicono che il tempo si pieghi: a me va bene, mi serve solo più carta.",
 "tk_ieyasu":"Hō, ecco un giovanotto di un altro tempo. Sono Tokugawa Ieyasu. Questo fossato lo volli io, e quelle mura, a dire il vero, le hanno alzate in tanti. Siediti: mi dicono che oggi si mangia in piedi, ma noi parleremo con calma.",
 "tk_kenta":"A-ah, irasshaimase! Pierpaolo-san, vero? Sono Kenta e il negozio è questo qui: vendo giochi vecchi, quelli che non fanno più. Entra pure, ma attento a non toccare con le mani sporche, ne!",
 "tk_hiroshi":"Ah, Pierpaolo-san, konnichiwa! Scusa il completo, torno dal lavoro. Mi chiamo Hiroshi. Dammi un attimo: finisco il caffè in lattina e poi ti faccio vedere il vero Shinjuku.",
 "tk_yui":"Konnichiwa, Pierpaolo-san. Benvenuto al Meiji Jingū. Mi chiamo Yui e qui lavoro il fine settimana. Prima di salire alla sala principale, hai fatto l’inchino al grande torii? Se non l’hai fatto, non preoccuparti: te lo ricordo io.",
 "tk_mio":"Eh, Pierpaolo! Sei puntuale: pochi turisti lo sono. Sono Mio, ci vediamo qui da Hachikō, come fanno tutti. Dai che ti spiego un po’ di Shibuya, ma tieni stretto lo zaino: qui siamo in tanti."};

function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-(Z[7]+500))/2200,0,1);if(nt>0)for(let i=0;i<46;i++)star(g,hr(i*3)*480,hr(i*7+1)*240,1+(i%4==0),nt*.7*(.4+.5*Math.sin(t*2+i)));
 const su=Z[6]+1900,u=cl(xs/su,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*250;
 if(xs<su+900){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT+4);dot(g,'rgba(255,'+Math.round(250-low*80)+','+Math.round(210-low*110)+',.95)',sx,sy,15)}
 const mu=cl((xs-(Z[7]+700))/2800,0,1);if(mu>0){const mx=150+mu*230,my=290-mu*170;dot(g,'rgba(255,248,215,.18)',mx,my,32);dot(g,'#f6f0d6',mx,my,14);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4)}
 /* poche nuvole sottili e alte */
 const cc=xs<2800?'rgba(252,214,222,.5)':xs<Z[5]?'rgba(255,255,255,.55)':xs<Z[7]?'rgba(255,190,140,.5)':xs<Z[8]?'rgba(255,150,120,.4)':'rgba(150,120,190,.3)';
 each(o-((t*3)%500)*.02,500,1,(x,i,r)=>{if(r>.6)return;const yy=36+r*90;el(g,cc,x+r*100,yy,70+r*40,2.6);el(g,cc,x+r*100+30,yy+5,48,2)});
 const fo=cl(1-xs/2800,0,1)*.28;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-Z[5])/1000,0,1)*cl((Z[6]+800-xs)/1200,0,1)*.2;if(wm>.01){g.fillStyle='rgba(255,170,80,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-Z[6])/1500,0,1)*cl((Z[7]+400-xs)/1200,0,1)*.2;if(wg>.01){g.fillStyle='rgba(255,110,120,'+wg+')';g.fillRect(0,0,480,GT+4)}
 const hs=cl((xs-Z[6]-1200)/1400,0,1)*cl((Z[8]+900-xs)/1600,0,1);if(hs>.01){const h2=g.createLinearGradient(0,200,0,GT+4);h2.addColorStop(0,'rgba(255,120,30,0)');h2.addColorStop(1,'rgba(255,130,40,'+(.5*hs)+')');g.fillStyle=h2;g.fillRect(0,200,480,GT-196)}}
/* ---- livello 1: palazzi di vetro della baia e gru del porto, la Skytree, Marunouchi, Shinjuku con il Tochō e il Fuji, il bosco del Meiji, Shibuya, la Tokyo Tower ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const tw=(sx,bw,bh,c,i)=>{rect(g,dim(c),sx,hz+16-bh,bw,bh);rect(g,'rgba(255,255,255,.16)',sx,hz+16-bh,3,bh);if(night>.2)for(let q=0;q<Math.floor(bh/9);q++)if(hr(i*13+q)>.55)rect(g,'rgba(255,226,160,'+(.8*night)+')',sx+4+hr(q+i)*(bw-10),hz+16-bh+q*9+3,2.4,2.4)};
 /* Fuji: sagoma azzurra con la cima innevata (zona 6) */
 const fj=env(16900,5400);if(fj>.02){g.globalAlpha=fj*.9;const sx=fx(16900),b=hz+16;poly(g,dim('#8e9cc8'),[[sx-300,b],[sx-90,b-70],[sx-44,b-110],[sx+44,b-110],[sx+90,b-70],[sx+300,b]]);poly(g,dim('#f4f4fa'),[[sx-54,b-98],[sx-44,b-110],[sx+44,b-110],[sx+54,b-98],[sx+28,b-90],[sx+10,b-102],[sx-12,b-88],[sx-34,b-96]]);g.globalAlpha=1}
 /* baia: palazzi di vetro, gru del porto, tetti bassi di Tsukiji (zona 1-2) */
 const bay=env(1500,3000);if(bay>.02){g.globalAlpha=bay;const sx=fx(1500);[[-420,34,110],[-380,26,150],[-330,40,96],[-270,30,130],[-120,44,100],[-60,32,140],[40,28,90],[330,38,120],[380,30,160],[440,26,100]].forEach((b,i)=>tw(sx+b[0],b[1],b[2],['#8ab0cc','#9ab8d0','#a4bcd2'][i%3],i));
  [-200,170,260].forEach((d,i)=>{const cx=sx+d;g.strokeStyle=dim('#d8402a');g.lineWidth=2;g.beginPath();g.moveTo(cx,hz+16);g.lineTo(cx,hz-70);g.lineTo(cx+50,hz-70);g.moveTo(cx+50,hz-70);g.lineTo(cx+50,hz+16);g.moveTo(cx-22,hz-70);g.lineTo(cx,hz-70);g.stroke();rect(g,dim('#f4f0e6'),cx+14,hz-74,22,5)});g.globalAlpha=1}
 const lo=cl((Z[2]+600-xs)/1500,0,1);if(lo>.02){g.globalAlpha=lo;each(o,42,3,(x,i,r)=>{const bh=18+hr(i*3)*22;rect(g,dim(['#d8cfc0','#c8c0b4','#e0d4c0'][md(i,3)]),x,hz+16-bh,38,bh);poly(g,dim('#4a4e58'),[[x-3,hz+16-bh],[x+10,hz+16-bh-8],[x+28,hz+16-bh-8],[x+41,hz+16-bh]])});g.globalAlpha=1}
 /* Skytree: bianca e argento, sopra le case basse (si nasconde quando c'è quella vicina) */
 const sk=env(7600,6800)*cl((Math.abs(xs-6950)-350)/350,0,1);if(sk>.02){g.globalAlpha=sk;const sx=fx(7600),b=hz+16,c1=dim('#dfe6ee'),c2=dim('#aab6c6');
  for(let q=0;q<10;q++){const y0=b-q*22,y1=b-(q+1)*22,h0=14-q*1,h1=14-(q+1)*1;ln(g,c2,1,[sx-h0,y0,sx+h1,y1]);ln(g,c2,1,[sx+h0,y0,sx-h1,y1])}
  ln(g,c1,3,[sx-14,b,sx-4,b-230]);ln(g,c1,3,[sx+14,b,sx+4,b-230]);rect(g,c1,sx-4,b-230,8,230);el(g,c1,sx,b-190,10,5);el(g,c1,sx,b-205,8,4);ln(g,c1,1.6,[sx,b-232,sx,b-262]);g.globalAlpha=1}
 /* Marunouchi: torri di vetro e fossato */
 const ma=env(9900,3800);if(ma>.02){g.globalAlpha=ma;const sx=fx(9900);[[-300,40,110],[-250,36,150],[-190,46,126],[-120,34,170],[-60,40,140],[10,30,190],[70,44,120],[140,36,160],[200,40,104],[260,32,138]].forEach((b,i)=>tw(sx+b[0],b[1],b[2],['#8aa8c4','#9ab4cc','#7a98b4'][i%3],i+20));rect(g,dim('#7a8088'),sx-340,hz+10,700,6);g.globalAlpha=1}
 /* Akihabara e Ueno: palazzi stretti */
 const ak=env(12900,3400);if(ak>.02){g.globalAlpha=ak;const sx=fx(12900);[[-260,26,96],[-226,30,120],[-190,24,84],[-160,34,130],[-120,28,100],[-80,30,116],[200,40,70],[250,34,90],[300,44,60]].forEach((b,i)=>tw(sx+b[0],b[1],b[2],['#c4ccd8','#d4c8c0','#b8c4d0'][i%3],i+40));g.globalAlpha=1}
 /* Shinjuku e il Tochō */
 const sj=env(16200,4200);if(sj>.02){g.globalAlpha=sj;const sx=fx(16200);[[-320,40,130],[-270,34,170],[-230,46,148],[-180,36,196],[-130,42,160],[130,38,150],[180,44,184],[240,34,140],[290,40,120],[340,36,100]].forEach((b,i)=>tw(sx+b[0],b[1],b[2],['#6a7088','#5a6078','#7a8098'][i%3],i+60));
  [-34,8].forEach(d=>{rect(g,dim('#4a4e5e'),sx+d,hz+16-190,26,190);rect(g,dim('#4a4e5e'),sx+d+6,hz+16-214,14,26);rect(g,dim('#3a3e4c'),sx+d,hz+16-190,5,190)});g.globalAlpha=1}
 /* foresta del Meiji Jingū */
 const fo=env(19700,4600);if(fo>.02){g.globalAlpha=fo;const sx=fx(19700);for(let q=0;q<34;q++){const bx=sx-500+q*30,bh=22+hr(q*3)*34;el(g,dim(q%3?'#2a4a32':'#34603e'),bx,hz+14-bh*.5,26,bh*.75+8)}rect(g,dim('#2a4a32'),sx-520,hz+10,1040,10);g.globalAlpha=1}
 /* Shibuya: grattacieli */
 const sb=env(22300,3800);if(sb>.02){g.globalAlpha=sb;const sx=fx(22300);[[-300,40,120],[-250,34,150],[-200,44,130],[-140,36,170],[-80,48,140],[60,30,150],[110,40,190],[170,34,130],[230,44,160],[290,32,110]].forEach((b,i)=>tw(sx+b[0],b[1],b[2],['#8a8ea0','#9a9ab0','#7a7e94'][i%3],i+80));g.globalAlpha=1}
 /* Tokyo Tower in lontananza, accesa */
 const tt=env(25400,6000);if(tt>.02){g.globalAlpha=tt;torre(g,fx(25400)+60,hz+16,.46,night,true);g.globalAlpha=1}
 /* mare di luci della città */
 const cl2=cl((xs-(Z[7]+500))/1800,0,1);if(cl2>.02){for(let q=0;q<70;q++){const lx=hr(q*3)*480,ly=hz+8+hr(q*5)*44,a=cl2*(.4+.5*Math.sin(t*1.6+q));g.fillStyle=(q%5==0?'rgba(255,255,255,':q%3==0?'rgba(255,150,100,':'rgba(255,226,150,')+a+')';g.fillRect(lx,ly,1.8+hr(q)*1.6,1.8)}}}
/* ---- livello 2: piani intermedi (case basse, tetti, torri di vetro, insegne, alberi del parco, foresta, schermi) ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const wx=cam+x+120,zz=zn(wx);
  const wins=(n,top)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+12+(q%5)*12,top+Math.floor(q/5)*12,5,4)};
  const blk=(c,hh,ww)=>{ww=ww||70;rect(g,dim(c),x+6,hz-hh,ww,hh+10);rect(g,'rgba(255,255,255,.16)',x+6,hz-hh,4,hh+10);wins(10,hz-hh+8)};
  if(zz==1){if(r>.84)blk(['#9ab8d0','#8ab0cc'][md(i,2)],100+r*70,60);else if(r>.5){blk(['#e0d4b8','#d8c8a8','#e4dac0'][md(i,3)],40+r*30);rect(g,dim('#d8301e'),x+66,hz-62,6,26)}else{blk(['#d4c8b4','#c8bca8'][md(i,2)],34+r*20);poly(g,dim('#4a4e58'),[[x,hz-34-r*20],[x+30,hz-46-r*20],[x+84,hz-34-r*20]])}}
  else if(zz==2){if(r>.82)ginkgo(g,x+50,hz+6,.7,t,0);else{blk(['#6a5444','#7a6450','#5a4838'][md(i,3)],36+r*26);poly(g,dim('#3a3e46'),[[x-2,hz-36-r*26],[x+36,hz-52-r*26],[x+82,hz-36-r*26]])}}
  else if(zz==3){if(r>.78)ginkgo(g,x+50,hz+6,.7,t,0);else blk(['#c8ccd4','#d8d4cc','#b8c0cc'][md(i,3)],66+r*50,76)}
  else if(zz==4){if(r>.8)pino(g,x+50,hz+6,.7);else{blk(['#8aa8c4','#a0b4c8','#7a98b4'][md(i,3)],110+r*90,78);for(let q=0;q<5;q++)rect(g,'rgba(255,255,255,.12)',x+10+q*13,hz-110-r*90,1.2,110+r*90)}}
  else if(zz==5){if(wx<Z[4]+1700){blk(['#c4ccd8','#d8c8c0','#b8c4d0'][md(i,3)],90+r*70,62);rect(g,dim(['#e84a9a','#40b8f0','#f2c82a'][md(i,3)]),x+66,hz-80-r*50,8,44)}else if(r>.5)(md(i,2)?ginkgo:momiji)(g,x+50,hz+6,.7,t,0);else blk(['#d8d0b8','#c8c0aa'][md(i,2)],40+r*24,76)}
  else if(zz==6){blk(['#6a7088','#5a6078','#7a8098'][md(i,3)],120+r*110,66);rect(g,dim(['#ff4f9a','#40d8f0','#ffd040'][md(i,3)]),x+12,hz-130-r*110,20,12);if(night>.15||wx>Z[5]+1400)rect(g,'rgba(255,170,90,.12)',x+6,hz-120-r*110,70,130+r*110)}
  else if(zz==7){if(r>.8)ginkgo(g,x+50,hz+6,.9,t,0);else cedro(g,x+50,hz+8,1.1)}
  else if(zz==8){blk(['#8a8ea0','#9a9ab0','#7a7e94'][md(i,3)],100+r*100,70);const sc=['#ff4f9a','#40d8f0','#ffd040'][md(i,3)];rect(g,dim(sc),x+14,hz-96-r*100,42,22);if(night>.1)glow(g,x+35,hz-85-r*100,36,sc=='#ff4f9a'?'255,80,160':sc=='#40d8f0'?'60,220,240':'255,210,60',.4*night)}
  else{if(r>.15)(md(i,2)?ginkgo:cedro)(g,x+50,hz+6,md(i,2)?.8:1);else{rect(g,dim('#7a1c10'),x+20,hz-30,50,34);roof(g,dim(TL),x+45,hz-30,80,18,5)}}})}
/* ---- livello 3: la strada con le facciate; in zona 3 il fiume con il ponte e il battello ---- */
const RIVER=[Z[2],Z[3]];
function bld(g,x,w,h,c,i,k,o){o=o||{};const top=GT-h,fh=o.fh||30,n=Math.max(2,Math.floor((w-24)/(o.cw||24)));
 rect(g,c,x,top,w,h);rect(g,'rgba(255,255,255,.14)',x,top,4,h);rect(g,'rgba(0,0,0,.16)',x+w-10,top,10,h);
 const fl=Math.max(1,Math.floor((h-(o.gt?56:20))/fh));
 for(let r=0;r<fl;r++)for(let q=0;q<n;q++)win(g,x+12+q*((w-34)/Math.max(1,n-1)),top+12+r*fh,o.ww||14,o.wh||16,k,i*17+r*5+q);
 if(o.glass){const gg=g.createLinearGradient(0,top,0,GT);gg.addColorStop(0,'rgba(255,255,255,.26)');gg.addColorStop(1,'rgba(255,160,80,.12)');g.fillStyle=gg;g.fillRect(x,top,w,h);for(let r=0;r<Math.floor(h/18);r++)rect(g,'rgba(255,255,255,.14)',x,top+r*18,w,1)}
 if(o.roof=='tile')roof(g,TL,x+w/2,top+4,w+10,18,5);else{rect(g,'#7a808c',x-2,top-5,w+4,6);if(hr(i*3)>.6){rect(g,'#8a909c',x+8,top-18,16,13);ln(g,'#5a5e66',1.4,[x+w-14,top-5,x+w-14,top-26])}}
 for(let s=0;s<(o.signs||0);s++)vsign(g,x+(s%2?w-18:3),top+24+s*40,14,50+(s%2)*12,['#e8402a','#f2c82a','#2a8ad8','#e84a9a','#3fb86a'][(i+s)%5],i*5+s,k,['255,100,60','255,200,80','80,170,240','255,90,170','80,220,130'][(i+s)%5]);
 if(o.gt=='shop'){rect(g,o.sc||'#3a2a22',x+4,GT-46,w-8,46);rect(g,k>.12?'rgb(255,214,150)':'#e8e0d0',x+8,GT-42,w-16,24);noren(g,['#2a4a8a','#f4f0e6','#8a2a22'][md(i,3)],x+10,GT-48,w-20,12);if(k>.12)glow(g,x+w/2,GT-30,w*.6,'255,190,110',.3*k)}}
function noren(g,c,x,y,w,h){const n=Math.max(2,Math.round(w/14));for(let q=0;q<n;q++)rect(g,c,x+q*w/n,y,w/n-1.5,h)}
function fac(g,x,w,h,i,st,wx,k,t){const r=hr(i*3);
 if(st==1){if(wx>2400&&r>.62){bld(g,x+4,w-30,h+70,['#dcd4c0','#d0c8b4'][md(i,2)],i,k,{fh:30,cw:28,gt:'shop',sc:'#2a2e38'});return}
  if(r>.84){bld(g,x+4,w-34,h+110,['#9ab8d0','#8ab0cc'][md(i,2)],i,k,{glass:1,cw:20,fh:22,ww:10,wh:10});return}
  bld(g,x+4,w-30,h-20+md(i,3)*14,['#e8dcc0','#d8c8a8','#dccaa6','#c8d0d8'][md(i,4)],i,k,{roof:r<.45?'tile':'',signs:1+md(i,2),gt:'shop',sc:'#3a2a22'});return}
 if(st==2){if(r>.9){ginkgo(g,x+w*.5,GT,1.4,TT,k);return}bld(g,x+4,w-30,h-30+md(i,3)*12,['#6a5444','#7a6450','#5a4838','#8a7458'][md(i,4)],i,k,{roof:'tile',gt:'shop',sc:'#2a1c14',cw:26,signs:md(i,2)});if(md(i,3)==0)chochin(g,x+10,GT-70,7,k);return}
 if(st==3){if(r>.5)ginkgo(g,x+w*.5,GT,1.2+r*.3,TT,k);return}
 if(st==4){if(r>.5){bld(g,x+4,w-30,h+120+r*60,['#8aa8c4','#a0b4c8','#7a98b4'][md(i,3)],i,k,{glass:1,cw:16,fh:22,ww:10,wh:10});return}
  rect(g,'#9a9ea0',x-6,GT-70,w+12,70);poly(g,'#7a7e80',[[x-6,GT-70],[x+4,GT-74],[x+w+2,GT-74],[x+w+12,GT-70]]);for(let q=0;q<5;q++)for(let rr=0;rr<5;rr++)rect(g,hr(q*7+rr+i)>.5?'rgba(255,255,255,.1)':'rgba(0,0,0,.1)',x-4+q*(w+10)/5,GT-70+rr*14,(w+10)/5-1,13);pino(g,x+w*.35,GT-70,1.3);pino(g,x+w*.8,GT-70,1.1);return}
 if(st==5){if(wx<Z[4]+1700){bld(g,x+4,w-40,h+40+md(i,3)*30,['#c4ccd8','#d8c8c0','#b8c4d0','#d0d4c8'][md(i,4)],i,k,{signs:3,gt:'shop',sc:'#2a2a34',cw:34,fh:34});return}
  if(r>.7){bld(g,x+4,w-40,h-20,['#d8d0b8','#c8c0aa'][md(i,2)],i,k,{roof:'tile',cw:30});return}(md(i,2)?ginkgo:momiji)(g,x+w*.5,GT,1.5,TT,k);return}
 if(st==6){if(r>.8){bld(g,x+4,w-30,h+170,['#5a6078','#4a5068'][md(i,2)],i,k,{glass:1,cw:16,fh:20,ww:10,wh:9});return}
  bld(g,x+4,w-34,h+70+md(i,3)*30,['#6a7088','#7a8098','#5a6078','#8a8a98'][md(i,4)],i,k,{signs:3,gt:'shop',sc:'#1c1c26',cw:30});if(md(i,2)==0)chochin(g,x+12,GT-64,7,k);return}
 if(st==7){if(wx<Z[6]+1900){cedro(g,x+w*.5,GT+10,2.2);if(md(i,2))cedro(g,x+w*.2,GT+10,1.8);return}
  if(r>.62){ginkgo(g,x+w*.5,GT,1.5,TT,k);return}bld(g,x+4,w-34,h-40+md(i,3)*14,['#ffb0d0','#ffe070','#b0e0ff','#d8c0ff','#b8f0d0'][md(i,5)],i,k,{roof:'',signs:1,gt:'shop',sc:'#2a2a34',cw:26});return}
 if(st==8){bld(g,x+4,w-30,h+60+md(i,3)*40,['#8a8ea0','#9a9ab0','#7a7e94'][md(i,3)],i,k,{signs:2,gt:'shop',sc:'#14142a',cw:32,fh:34});const sc=['#ff4f9a','#40d8f0','#ffd040'][md(i,3)],sy=GT-(h+60+md(i,3)*40)+20;rect(g,'#14142a',x+22,sy-2,w-74,44);rect(g,sc,x+24,sy,w-78,40);dot(g,'rgba(255,255,255,.8)',x+40,sy+20,9);rect(g,'rgba(255,255,255,.7)',x+60,sy+14,w-120,3);if(k>.1)glow(g,x+w/2-12,sy+20,w*.7,sc=='#ff4f9a'?'255,80,160':sc=='#40d8f0'?'60,220,240':'255,210,60',.4*k);return}
 if(r>.5){(md(i,2)?ginkgo:cedro)(g,x+w*.5,GT,md(i,2)?1.5:1.6,TT,k);return}
 if(r>.15){cedro(g,x+w*.3,GT,1.5);ginkgo(g,x+w*.75,GT,1.3,TT,k);return}
 rect(g,'#7a1c10',x+10,GT-60,70,60);roof(g,TL,x+45,GT-58,110,30,8)}
let TT=0;
function layerStreet(g,o,t){TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;const k=nf(wx);A.setDK(k);fac(g,x,wd,hf(i),i,st,wx,k,t)})};
 each2(190,7,Z[0],Z[1],1,i=>110+hr(i*5)*40,170);
 each2(170,8,Z[1],Z[2],2,i=>110+hr(i*5)*30,150);
 each2(200,9,Z[2],Z[3],3,i=>110,160);
 each2(190,10,Z[3],Z[4],4,i=>90+hr(i*5)*50,170);
 each2(200,11,Z[4],Z[5],5,i=>110+hr(i*5)*40,180);
 each2(200,12,Z[5],Z[6],6,i=>110+hr(i*5)*50,180);
 each2(180,13,Z[6],Z[7],7,i=>100+hr(i*5)*30,170);
 each2(200,14,Z[7],Z[8],8,i=>110+hr(i*5)*40,180);
 each2(190,15,Z[8],W1+400,9,i=>100+hr(i*5)*30,170);
 /* il fiume Sumida: acqua dietro la passeggiata, ponte d'acciaio, battello */
 const ra=RIVER[0]-o,rb=RIVER[1]-o;if(rb>0&&ra<480){const x0=Math.max(0,ra),x1=Math.min(480,rb);A.setDK(0);const k=nf(o+240);
  g.save();g.beginPath();g.rect(x0,GT-50,x1-x0,50);g.clip();const gr=g.createLinearGradient(0,GT-50,0,GT);gr.addColorStop(0,'#7ab4d0');gr.addColorStop(1,'#4a88ac');g.fillStyle=gr;g.fillRect(x0,GT-50,x1-x0,50);
  for(let q=0;q<26;q++){const sx=((q*53+t*8*(q%2?1:-1)+o*0)%560+560)%560-40;rect(g,'rgba(255,255,255,.4)',sx,GT-44+hr(q+3)*38,12+hr(q)*14,1.6)}
  /* ponte */
  const bx=7900-o;if(bx>-340&&bx<820){for(let q=0;q<5;q++){rect(g,'#6a7a8a',bx-300+q*150-4,GT-64,8,64)}rect(g,'#8a9aaa',bx-310,GT-68,600,8);g.strokeStyle='#5a6a7a';g.lineWidth=2;g.beginPath();for(let q=0;q<20;q++){g.moveTo(bx-300+q*30,GT-60);g.lineTo(bx-285+q*30,GT-92);g.lineTo(bx-270+q*30,GT-60)}g.stroke();rect(g,'#8a9aaa',bx-310,GT-94,600,4)}
  /* battello turistico */
  const bt=((t*26)%2400)-200+Z[2]-o;if(bt>-160&&bt<640){rect(g,'#f4f4f8',bt,GT-34,120,18);rect(g,'#2a6aa8',bt,GT-20,120,5);for(let q=0;q<9;q++)rect(g,'#7ab0d0',bt+6+q*12,GT-31,9,9);rect(g,'#e8e8ee',bt+34,GT-44,50,10);rect(g,'#d8301e',bt+56,GT-52,6,8)}
  g.restore();rect(g,'#a8aab2',x0,GT-4,x1-x0,8);rect(g,'rgba(255,255,255,.25)',x0,GT-4,x1-x0,1.6);rect(g,'#8a8c94',x0,GT+3,x1-x0,4);
  const dkk=nf(o+240);if(dkk>.05){g.fillStyle='rgba(20,26,70,'+(.4*dkk)+')';g.fillRect(x0,GT-50,x1-x0,50)}}}
/* ---- vita: corvi, piccioni, gabbiani sul fiume, cormorani allo stagno ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 const cv=cl(1-Math.max(0,xs-(Z[7]+400))/600,0,1);
 if(cv>.05)for(let i=0;i<4;i++){const bx=((i*171+t*(70+i*9))%620)-70,by=60+hr(i*5+2)*120+Math.sin(t*3+i)*10,w=Math.sin(t*12+i)*2.6;g.strokeStyle='rgba(22,22,28,'+(.9*cv)+')';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke()}
 const pg=Math.max(cl((xs-Z[1])/300,0,1)*cl((Z[2]+200-xs)/300,0,1),cl((xs-Z[3])/300,0,1)*cl((Z[4]+300-xs)/300,0,1),cl((xs-Z[4])/300,0,1)*cl((Z[5]-xs)/300,0,1));
 if(pg>.05)for(let i=0;i<4;i++){const bx=((i*117+t*(44+i*6))%600)-60,by=80+hr(i*3)*100+Math.sin(t*2+i*2)*14,w=Math.sin(t*10+i)*3.4;g.strokeStyle='rgba(120,126,140,'+(.9*Math.min(1,pg))+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke()}
 const gu=Math.max(cl((xs-Z[0])/200,0,1)*cl((Z[1]-xs)/300,0,1),cl((xs-Z[2]+200)/300,0,1)*cl((Z[3]+300-xs)/300,0,1));
 if(gu>.05)for(let i=0;i<3;i++){const bx=((i*251+t*(34+i*8))%640)-80,by=70+hr(i*7+3)*60+Math.sin(t*1.4+i)*8,w=Math.sin(t*6+i)*4;g.strokeStyle='rgba(240,240,244,'+(.95*gu)+')';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-9,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+9,by+w);g.stroke();g.strokeStyle='rgba(120,130,150,'+(.8*gu)+')';g.lineWidth=1.4;g.beginPath();g.moveTo(bx-9,by+w);g.lineTo(bx-12,by+w+2);g.moveTo(bx+9,by+w);g.lineTo(bx+12,by+w+2);g.stroke()}
 const bt=cl((xs-Z[7]-600)/300,0,1)*cl((W1-xs)/600,0,1);
 if(bt>.05)for(let i=0;i<3;i++){const bx=((i*211+t*(30+i*6))%560)-40,by=120+hr(i*11)*90,w=Math.sin(t*14+i)*5;g.strokeStyle='rgba(20,18,30,'+(.8*bt)+')';g.lineWidth=2;g.beginPath();g.moveTo(bx-8,by);g.quadraticCurveTo(bx-4,by-6+w,bx,by);g.quadraticCurveTo(bx+4,by-6+w,bx+8,by);g.stroke()}}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#9a9ca4','a'],[Z[1],Z[2],'#a8a49a','s'],[Z[2],Z[3],'#b4b2ac','c'],[Z[3],Z[4],'#d4cfc0','p'],[Z[4],Z[5],'#8a8c94','k'],[Z[5],Z[6],'#7a7c86','n'],[Z[6],Z[7],'#d8cfb8','g'],[Z[7],Z[8],'#7a7c88','x'],[Z[8],W1+400,'#9a968a','h']];
 rect(g,'#b8b4a8',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const slabs=(bw0,add,al)=>{for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,0)',px,yy,bw-1.5,17)}}};
  const stripes=(y0,hh,gap,al)=>{for(let q=0;q<14;q++)rect(g,'rgba(250,250,246,'+al+')',x0+((q*gap+30-cam)%ww+ww)%ww,gt+y0,22,hh)};
  const tact=()=>{rect(g,'#e8c82a',x0,gt+3,x1-x0,6);for(let q=0;q<Math.ceil(ww/8)+1;q++)rect(g,'rgba(120,90,0,.35)',x0+((q*8-cam)%ww+ww)%ww,gt+3,2,6)};
  if(z[3]=='a'){/* asfalto grigio con strisce pedonali, cemento bagnato, mattonelle gialle in rilievo */rect(g,'#7a7c84',x0,gt+3,x1-x0,60);tact();for(let q=0;q<12;q++)rect(g,'rgba(60,70,90,.2)',x0+((q*97+20-cam)%ww+ww)%ww,gt+14+hr(q)*40,30+hr(q+1)*30,8);stripes(70,56,170,.55);rect(g,'rgba(255,255,255,.1)',x0,gt+63,x1-x0,3)}
  if(z[3]=='s'){/* lastre di pietra grigia e selciato */slabs(60,10,.2);for(let r=0;r<3;r++)rect(g,'rgba(60,60,60,.12)',x0,gt+30+r*40,x1-x0,2)}
  if(z[3]=='c'){/* passeggiata di cemento con assi di legno lungo il fiume */slabs(90,10,.16);rect(g,'#a07a4a',x0,gt+3,x1-x0,20);for(let q=0;q<Math.ceil(ww/16)+1;q++)rect(g,'rgba(60,30,10,.3)',x0+((q*16-cam)%ww+ww)%ww,gt+3,1.4,20);rect(g,'rgba(255,255,255,.18)',x0,gt+3,x1-x0,4)}
  if(z[3]=='p'){/* grandi lastre di granito e ghiaia chiara */slabs(96,12,.3);for(let q=0;q<90;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.4)':'rgba(120,100,60,.2)',x0+((q*47)%ww),gt+8+hr(q+3)*130,2+hr(q)*3,1.6)}
  if(z[3]=='k'){/* asfalto con strisce larghe, poi ghiaia dei viali del parco */const pk=cam+x0>Z[4]+1800;if(!pk){rect(g,'#7e808a',x0,gt+3,x1-x0,150);tact();stripes(60,66,150,.5)}else{rect(g,'#c8bfa0',x0,gt+3,x1-x0,150);for(let q=0;q<140;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.4)':'rgba(120,100,60,.22)',x0+((q*43)%ww),gt+8+hr(q+3)*130,2+hr(q)*3,1.6);for(let q=0;q<40;q++)dot(g,['#e8b830','#c8381e','#e0a020'][q%3],x0+((q*37)%ww),gt+10+hr(q+5)*120,1.6)}}
  if(z[3]=='n'){/* asfalto, mattonelle, passaggi sotterranei */rect(g,'#6a6c78',x0,gt+3,x1-x0,150);rect(g,'#9a9aa6',x0,gt+3,x1-x0,40);for(let q=0;q<Math.ceil(ww/36)+1;q++)rect(g,'rgba(0,0,0,.1)',x0+((q*36-cam)%ww+ww)%ww,gt+3,1.4,40);stripes(62,60,190,.5);for(let q=0;q<8;q++)el(g,'rgba(255,170,90,.12)',x0+((q*131+50-cam)%ww+ww)%ww,gt+90+hr(q)*40,50,6)}
  if(z[3]=='g'){/* ghiaia chiara e larga del viale, lastre di pietra */const fz=cam+x0>Z[6]+1900;if(!fz){rect(g,'#d8d0b8',x0,gt+3,x1-x0,150);for(let q=0;q<150;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.45)':'rgba(120,100,60,.24)',x0+((q*43)%ww),gt+8+hr(q+3)*130,2+hr(q)*3,1.6);rect(g,'rgba(150,130,90,.2)',x0,gt+60,x1-x0,2);rect(g,'rgba(150,130,90,.2)',x0,gt+100,x1-x0,2);slabs(110,16,.16)}else{rect(g,'#9a9ca6',x0,gt+3,x1-x0,150);slabs(50,6,.2);rect(g,'#c8c4b8',x0,gt+3,x1-x0,26)}}
  if(z[3]=='x'){/* asfalto con le larghe strisce pedonali che si incrociano */rect(g,'#6a6c78',x0,gt+3,x1-x0,150);for(let q=0;q<22;q++){rect(g,'rgba(250,250,246,.7)',x0+((q*34-cam)%ww+ww)%ww-40,gt+60,18,70);}for(let q=0;q<3;q++)poly(g,'rgba(250,250,246,.22)',[[x0+((q*220-cam*1)%ww+ww)%ww,gt+60],[x0+((q*220-cam*1)%ww+ww)%ww+30,gt+60],[x0+((q*220-cam)%ww+ww)%ww+180,gt+150],[x0+((q*220-cam)%ww+ww)%ww+150,gt+150]]);rect(g,'#a0a0ac',x0,gt+3,x1-x0,30)}
  if(z[3]=='h'){/* lastre di pietra, ghiaia, asfalto lucido */slabs(84,14,.18);for(let q=0;q<7;q++){const px=x0+((q*191+60-cam)%ww+ww)%ww;el(g,'rgba(255,140,60,.16)',px,gt+40+hr(q)*90,44,5)}}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1700,0,1);if(dw>.02)rect(g,'rgba(160,190,255,'+(.14*dw)+')',0,gt,480,150);
 const gd=cl((cam-Z[5])/700,0,1)*cl((Z[6]+400-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,170,80,'+(.14*gd)+')',0,gt,480,150);
 const sgl=cl((cam-Z[6]+200)/800,0,1)*cl((Z[7]+300-cam)/900,0,1);if(sgl>.02)rect(g,'rgba(255,120,110,'+(.14*sgl)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{skin:tn(o.skin),top:tn(o.top),bot:tn(o.bot),hair:o.hair?tn(o.hair):o.hair,acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Sachiko: grembiule bianco, bandana azzurra, stivali di gomma, bacchette lunghe, guance rosse */
 NP('tk_sachiko',NAME.tk_sachiko,1385,GREET.tk_sachiko,{skin:'#e0b090',top:'#8a9aaa',bot:'#3a3a46',hair:'#3a2a22',s:1.0},(g,b,t)=>{rect(g,'#f6f4ee',-11,-84+b,22,44);rect(g,'rgba(0,0,0,.1)',-11,-84+b,3,44);rect(g,'#e8e4dc',-6,-66+b,12,8);
  poly(g,'#4a8ad0',[[-12,-110+b],[14,-110+b],[13,-120+b],[-11,-120+b]]);dot(g,'#4a8ad0',-13,-106+b,3.4);
  rect(g,'#2a3a3a',-10,-14,9,14);rect(g,'#2a3a3a',2,-14,9,14);rect(g,'#1a2a2a',-10,-14,9,3);rect(g,'#1a2a2a',2,-14,9,3);
  dot(g,'#e8806a',-6,-98+b,2.6);dot(g,'#e8806a',9,-98+b,2.6);ln(g,'#c8a070',1.6,[14,-72,34,-98]);ln(g,'#c8a070',1.6,[16,-70,38,-92])}),
 /* Ryō: giacca corta scura (hanten), fascia sulla fronte, pantaloni attillati, tabi, asciugamano sulle spalle */
 NP('tk_ryo',NAME.tk_ryo,4090,GREET.tk_ryo,{skin:'#d8a47c',top:'#2a2e44',bot:'#1c1c24',hair:'#14100c',s:1.02},(g,b,t)=>{rect(g,'rgba(255,255,255,.14)',-13,-90+b,3,46);rect(g,'#f4f0e6',-11,-92+b,22,5);poly(g,'#f4f0e6',[[-12,-92+b],[-6,-80+b],[-8,-60+b],[-14,-60+b]]);
  rect(g,'#f4f0e6',-12,-108+b,24,4);rect(g,'#c8301e',-3,-108+b,6,4);rect(g,'#f2ead8',-9,-8,8,6);rect(g,'#f2ead8',3,-8,8,6)}),
 /* Hokusai: veste macchiata d'inchiostro, capelli bianchi legati, barba rada, pennelli nella cintura, rotolo sotto il braccio */
 NP('tk_hokusai',NAME.tk_hokusai,7880,GREET.tk_hokusai,{skin:'#d8b490',top:'#6a7a8a',bot:'#4a5a6a',hair:'#e8e8ec',long:1,s:1.0},(g,b,t)=>{rect(g,'rgba(20,20,40,.35)',-10,-80+b,8,14);rect(g,'rgba(20,20,40,.35)',2,-60,10,10);rect(g,'#2a2a34',-12,-56+b,24,4);
  for(let q=0;q<3;q++)ln(g,'#6a4a2c',1.8,[-6+q*5,-56+b,-8+q*6,-70+b]);poly(g,'#e8e8ec',[[-9,-99+b],[9,-99+b],[5,-88+b],[0,-85+b],[-5,-88+b]]);dot(g,'#e8e8ec',-9,-114+b,4);ln(g,'#e8e8ec',2.4,[-7,-108+b,-12,-100+b]);
  rect(g,'#f2ead8',-26,-72,22,8);rect(g,'#c8a878',-28,-72,3,8);rect(g,'#c8a878',-6,-72,3,8)}),
 /* Tokugawa Ieyasu: kimono scuro con lo stemma a tre foglie, spada corta alla cintura, viso tondo, ventaglio chiuso */
 NP('tk_ieyasu',NAME.tk_ieyasu,10930,GREET.tk_ieyasu,{skin:'#e8c8a4',top:'#2a2a3a',bot:'#2a2a3a',hair:'#14100c',long:1,s:1.02},(g,b,t)=>{dot(g,'#e8c840',0,-70+b,4.4);for(let q=0;q<3;q++){const an=-1.57+q*2.09;dot(g,'#2a2a3a',Math.cos(an)*2.4,-70+b+Math.sin(an)*2.4,1.6)}
  rect(g,'#8a8a92',-14,-56+b,28,3);ln(g,'#14141a',2.6,[-10,-58+b,-26,-46]);ln(g,'#c8a838',1.4,[-10,-58+b,-24,-47]);poly(g,'#14100c',[[-9,-110+b],[11,-110+b],[9,-118+b],[-7,-118+b]]);
  ln(g,'#c8b078',3,[12,-62,20,-48]);rect(g,'#8a6a42',18,-52,4,16)}),
 /* Kenta: maglietta con un personaggio dei fumetti, grembiule del negozio, occhiali, zaino, cavo di ricarica al collo */
 NP('tk_kenta',NAME.tk_kenta,12650,GREET.tk_kenta,{skin:'#e8c8a0',top:'#3a4a7a',bot:'#4a4a56',hair:'#2a1a10',s:1.0},(g,b,t)=>{dot(g,'#f2c82a',0,-76+b,7);dot(g,'#2a2a34',-2,-77+b,1.2);dot(g,'#2a2a34',2,-77+b,1.2);rect(g,'#e84a4a',-11,-62+b,22,22);rect(g,'rgba(255,255,255,.4)',-8,-58+b,16,3);
  g.strokeStyle=tn('#14141a');g.lineWidth=1.2;g.beginPath();g.arc(2,-101+b,4,0,7);g.arc(10,-101+b,4,0,7);g.stroke();rect(g,'#8a4a2a',-24,-92+b,10,28);ln(g,'#e8e8ee',1.4,[-6,-90+b,-6,-72+b,0,-70+b])}),
 /* Hiroshi: completo blu scuro, camicia bianca, cravatta allentata, borsa nera, caffè in lattina */
 NP('tk_hiroshi',NAME.tk_hiroshi,15520,GREET.tk_hiroshi,{skin:'#e0b890',top:'#26324e',bot:'#26324e',hair:'#14100c',s:1.0},(g,b,t)=>{poly(g,'#f4f4f8',[[-5,-90+b],[5,-90+b],[0,-70+b]]);poly(g,'#6a2a2a',[[-1.4,-88+b],[1.4,-88+b],[2,-68+b],[0,-64+b],[-2,-68+b]]);rect(g,'#14141a',-26,-40,16,12);rect(g,'#3a3e46',-22,-44,8,4);
  rect(g,'#c8c8d0',14,-62,6,10);rect(g,'#d83a2a',14,-60,6,4)}),
 /* Yui: camicia bianca e hakama rossi, capelli lunghi con il nastro bianco, calze bianche e sandali, scopa di bambù */
 NP('tk_yui',NAME.tk_yui,19700,GREET.tk_yui,{skin:'#f0d0b0',top:'#f8f6f0',bot:'#c8301e',hair:'#14100c',long:1,s:1.0},(g,b,t)=>{rect(g,'rgba(0,0,0,.1)',-11,-90+b,3,46);rect(g,'#d8d4c8',-10,-90+b,20,3);poly(g,'#14100c',[[-12,-108+b],[-16,-70+b],[-9,-76+b],[-7,-106+b]]);rect(g,'#f8f6f0',-14,-86+b,5,3);rect(g,'#f4f0e6',-8,-6,6,6);rect(g,'#f4f0e6',3,-6,6,6);
  ln(g,'#8a6a3a',2.4,[18,-100,24,-4]);poly(g,'#b8984a',[[18,-30],[32,-30],[34,-2],[18,-2]]);for(let q=0;q<5;q++)ln(g,'rgba(80,50,10,.5)',1,[20+q*3,-30,20+q*3.4,-2])}),
 /* Mio: felpa larga, sneakers, zaino con portachiavi, auricolari, ciocche colorate, telefono con gli adesivi */
 NP('tk_mio',NAME.tk_mio,21470,GREET.tk_mio,{skin:'#f0cca8',top:'#9a9ab8',bot:'#3a3a56',hair:'#14100c',s:1.0},(g,b,t)=>{rect(g,'rgba(255,255,255,.14)',-13,-90+b,3,46);rect(g,'#7a7a98',-13,-52+b,26,5);
  ln(g,'#ff80b0',2.4,[-9,-108+b,-12,-92+b]);ln(g,'#40d8f0',2.4,[-5,-108+b,-7,-94+b]);dot(g,'#f6f4ee',-7,-100+b,2.2);ln(g,'#f6f4ee',1,[-7,-98+b,-8,-86+b]);
  rect(g,'#c8402a',-26,-90+b,12,36);dot(g,'#f2c82a',-21,-52,2.6);rect(g,'#2a2a34',14,-66,9,15);rect(g,'#ff80b0',15,-64,3,3);rect(g,'#40d8f0',19,-60,3,3)})
];
/* ---- oggetti lungo il percorso ---- */
const LX=[500,1300,2100,2780,3300,3850,4800,5450,6100,6900,7600,8300,9300,10000,10650,11300,12150,12950,13550,14150,15100,15950,16650,17250,17780,18500,19150,19800,20450,21400,22100,22800,23400,24500,25150,25850,26770];
const WP=(n,c,a)=>[["tkW",c-100,[n,a,1,0]],["tkW",c+100,[n,a,2,0]]];
const props=[
["tkcartello",40,"TSUKIJI"],["tkpalo",250,1],["tkmercato",500,null],["tkvend",860,null],["tkgatto",1010,null],["tkpalo",1090,0],["tktamago",1300,null],["tkbici",1580,null],["tkkoban",1700,null],["tkpalo",1900,1],["tkhongan",2100,null],["tkpiccioni",2420,null],["tkpalo",2540,0],["tkwako",2780,null],["tkcartello",2950,"GINZA"],["tkfolla",3060,3],["tkkabukiza",3300,null],
["tkcartello",3540,"ASAKUSA"],["tkkaminari",3850,null],["tkrisci",4190,null],["tkfolla",4370,3],["tkginkgo",4440,1.3],["tkpalo",4340,1],...WP("tknakamise",4800,null),...WP("tksenso",5450,null),["tkpiccioni",5860,null],["tklanterna",5900,1.1],["tkjinja",6100,null],
["tkcartello",6440,"SUMIDA"],["tksumida",6900,null],["tkpalo",7250,0],["tkpanchina",7330,null],["tkhokusai",7600,null],["tkcartello",7990,"RYŌGOKU"],["tkkokugikan",8300,null],["tkginkgo",8590,1.2],
["tkcartello",8760,"MARUNOUCHI"],["tkpino",8960,1.3],...WP("tkstazione",9300,null),["tkfolla",9790,3],["tkbento",10000,null],...WP("tkpalazzo",10650,null),["tkmastio",11300,null],
["tkcartello",11650,"AKIHABARA"],["tkakiba",12150,null],["tkvend",12380,'x'],["tkgiochi",12520,null],["tkpalo",12790,1],["tkkanda",12950,null],["tklanterna",13250,1],["tkueno",13550,null],["tkshinobazu",14150,null],
["tkcartello",14520,"SHINJUKU"],["tkshinjuku",15100,null],["tkpanchina",15500,null],["tkdocho",15950,null],["tkomoide",16650,null],["tkgolden",17250,null],["tkkabuki",17780,null],
["tkcartello",18020,"HARAJUKU"],["tktorii",18500,null],["tkbotti",19150,null],["tkhonden",19800,null],["tktakeshita",20450,null],
["tkcartello",20920,"SHIBUYA"],["tkhachiko",21400,null],...WP("tkscramble",22100,null),["tkshibuyasky",22800,null],["tkvicoli",23400,null],
["tkcartello",23830,"SHIBA"],["tklanterna",24280,1.1],["tkzojoji",24500,null],["tkshiba",25150,null],["tkpanchina",25550,null],["tktokyotower",25850,null],["tklampada",26200,null],["tkvarco",26770,null]];
props.sort((a,b)=>a[1]-b[1]);
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'tokyo',name:'Tokyo · Da Tsukiji alla Tokyo Tower',width:W1,sky:['#6f9ede','#cdd6ee','#f7c4c8'],gt:372,gr:['#9a9ca4','#7a7c84'],chord:[196,220,261.6,329.6],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da tokyo.txt) --- */
(function(){
const TOPX_TK={
"tk_sachiko":[
["Chi sei e che fai?","Sachiko, cinquantotto anni, nata a due passi da qui. Mi alzo alle tre e mezza per preparare le uova, perché alle cinque la gente ha già fame. Maa, il mercato non dorme mai, ne."],
["Quanto è vecchio questo mercato?","Il grande mercato all’ingrosso aprì nel 1935, al posto di quello di Nihonbashi distrutto dal terremoto del 1923. Nel 2018 le aste e l’ingrosso si sono trasferiti a Toyosu, ma noi del mercato esterno siamo rimasti: più di quattrocento botteghe, tutte ancora qui. Sō sō, abbiamo tenuto la parte più viva."],
["Che cos’è il tamagoyaki?","Uova sbattute con un po’ di dashi, il brodo di pesce, e un pizzico di zucchero, cotte a strati in una padella rettangolare e arrotolate con le bacchette lunghe. Ogni strato va girato con un colpo di polso: ci vogliono anni di mani. Alla fine ti esce una frittata dolce e morbida, come un cuscino."],
["Cosa si mangia a colazione, in Giappone?","La colazione classica è riso, zuppa di miso, pesce alla griglia, sottaceti e un uovo; chi ha fretta passa al konbini a prendere un onigiri, la palla di riso. Poi c’è il natto, i fagioli di soia fermentati, che o li ami o scappi. Io li adoro, ma non te li impongo."],
["Perché tutti dicono “itadakimasu”?","Prima di mangiare si dice “itadakimasu”, “ricevo con gratitudine”, e alla fine “gochisōsama”, “grazie del pasto”. Si ringrazia chi ha cucinato, chi ha pescato, ma anche la natura. Non è una formula vuota: mia nonna mi dava uno scappellotto, se me ne scordavo."],
["Come si mangia il sushi?","Con le mani va benissimo, oppure con le bacchette; si intinge il pesce, non il riso, in poca salsa di soia, e si mangia in un solo boccone. Il wasabi lo mette già il cuoco sotto il pesce: chiederne altro è quasi un’offesa. Ma ridi, ridi: nessuno ti sgrida se sbagli."],
["Si lascia la mancia?","No, mai: il servizio è compreso, e un lavoro fatto bene è già il suo premio. Se lasci dei soldi sul banco, ti corro dietro per restituirteli! Un “arigatō” e un piccolo inchino bastano e avanzano."],
["Che pesce si mangia nelle varie stagioni?","Qui si mangia “shun”, cioè ogni cosa nel suo momento migliore. In inverno il granchio e i pesci più grassi, in primavera il bonito, d’estate l’anguilla. Il mercato cambia colore ogni mese, e noi con lui."],
["Cos’è quel tempio dall’aria indiana?","Il Tsukiji Hongan-ji, qui accanto: la sala di oggi è del 1934, ispirata ai templi dell’India. All’inizio sembra una follia, poi ti ci affezioni: dentro c’è perfino un organo a canne! Entra in silenzio, anche se fuori è un baccano."],
["Che cosa fai dopo il lavoro?","A mezzogiorno ho già finito, e se ho tempo vado a Ginza a guardare le vetrine, senza comprare. La sera un bagno caldo, una birra e a letto presto: il mercato chiama all’alba. Qui si dice “andare a letto con le galline”, e io ci vado davvero."],
["Dove vado dopo?","Ad Asakusa, dove c’è il tempio più antico di Tokyo. Cammina fino alla stazione di Ginza, un quarto d’ora a piedi, e prendi la linea arancione: ha il capolinea proprio ad Asakusa. Lì c’è Ryō, un ragazzo che tira il risciò: digli che ti manda Sachiko."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo-san, e torna a prendere un pezzo di tamagoyaki ancora caldo. Itterasshai, e che la giornata ti sia buona!"]],
"tk_ryo":[
["Chi sei e che fai?","Ryō, ventisette anni, tiro il risciò da cinque. Corro tutto il giorno coi turisti a bordo: altro che palestra! Sono nato a due vie da qui, e qui noi Edokko parliamo corto e schietto: bera-bō!"],
["Com’è nato il Sensō-ji?","Secondo la leggenda, nel 628 due fratelli pescatori trovarono nel fiume Sumida una statua della Kannon; il tempio fu fondato nel 645. Quella statua è nascosta dentro e non la vede nessuno da più di mille anni. Capisci che mistero?"],
["Perché la lanterna è così grossa?","Per far capire che stai entrando in un posto importante! Misura quasi quattro metri e pesa circa settecento chili. La porta bruciò nel 1865 e fu rifatta solo nel 1960, con i soldi del fondatore della Panasonic. Per il Sanja Matsuri la lanterna si richiude come una fisarmonica, per far passare i carri."],
["Cos’è un risciò?","Si dice “jinrikisha”, “veicolo a forza d’uomo”. Nacque proprio qui a Tokyo, intorno al 1869, e per anni fu il taxi della città. Oggi portiamo solo i turisti e i curiosi, ma con classe, ne."],
["Cosa si mangia sulla Nakamise?","Dolcetti caldi ripieni di pasta di fagioli rossi, crackers di riso grigliati con la soia, gelato al tè verde. Un’avvertenza: in Giappone mangiare camminando non si fa. Ci si ferma accanto al banco, si mangia e poi si riparte."],
["Come si prega al tempio?","Al Sensō-ji, che è buddista, ci si inchina, si lancia una moneta nella cassetta e si prega a mani giunte, senza battere le mani. I due battiti sono per i santuari shintoisti, come quello qui accanto. E il fumo dell’incenso, portalo verso di te: fa bene alla salute."],
["Cosa sono gli omikuji?","I foglietti della fortuna, cento yen l’uno. Al Sensō-ji dicono che escano parecchi “kyō”, sfortuna! Se ti capita, lo leghi ai sostegni e lasci la sfortuna lì. A me è uscito kyō tre volte di fila: ormai ci scherzo sopra."],
["Com’è il Sanja Matsuri?","A maggio, nel fine settimana intorno al terzo sabato: i quartieri portano a spalla i mikoshi, i santuari portatili, fra migliaia di persone. Si grida a ritmo per darsi il tempo e per farsi forza. È la festa più calda dell’anno, e io non me la perdo."],
["Che cosa vuol dire essere un Edokko?","Essere nati a Tokyo da generazioni, schietti, generosi, un po’ testardi. Si dice che l’Edokko non tenga i soldi per il giorno dopo: se ne ha, li spende in compagnia. Io ci provo, ma l’affitto me lo ricorda ogni mese, sō daze."],
["Com’è la vita ad Asakusa?","Quartiere di artigiani e di botteghe, con le case basse dove ci si conosce tutti. Qui il kimono si noleggia a ore e vedrai quanta gente lo indossa per le foto. Il vicino ti porta i dolci, tu gli porti il pesce: una vita di scambi."],
["Dove vado dopo?","A Ryōgoku, lungo il fiume Sumida: scendi lungo la riva e con la Skytree davanti non ti perdi. Lì c’è un vecchio pittore che ha un museo con il suo nome: Hokusai, quello della Grande Onda. Parla a scatti e non sta mai fermo."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se torni ti porto a fare un giro vero, fino al fiume! Mata dōzo, e stai in forma, oi!"]],
"tk_hokusai":[
["Chi sei?","Hokusai, pittore di Edo. Sono nato nel 1760, qui a Honjo, dove adesso c’è questo quartiere con la torre alta. Disegnavo già da bambino e non ho più smesso. Mi dicono che il mio nome oggi è su un museo, bera-bō, e io non ho ancora finito il lavoro!"],
["Perché hai così tanti nomi?","Ne ho cambiati più di trenta! “Hokusai” vuol dire “studio del nord”; Katsushika è il nome della zona dove sono nato. Ogni nome nuovo era un inizio: nuova pelle, nuovo stile. Negli ultimi anni mi firmavo “Gakyō Rōjin Manji”, il vecchio pazzo di pittura."],
["E i traslochi?","Novantatré volte, mi dicono! Io e mia figlia Ōi, anche lei pittrice, vivevamo fra pennelli e carta, e quando la stanza era troppo sporca si cambiava casa. Pulire costa più tempo che traslocare, fa’ conto."],
["Parlami della Grande Onda.","Si chiama “Sotto l’onda al largo di Kanagawa” ed è nella serie delle “Trentasei vedute del monte Fuji”, fatta quando ero già sui settant’anni. L’onda si alza enorme sulle barche dei pescatori, e il Fuji, piccolo, sta lì sullo sfondo. Io volevo che la gente guardasse l’onda, non la montagna."],
["Da dove viene quel blu?","È blu di Prussia, un pigmento nuovo arrivato dall’Europa attraverso i mercanti olandesi. Lo stampavamo insieme all’indaco, per ottenere un blu più profondo e più acceso. La prima volta che l’ho visto ho pensato: questo è il colore del mare vero."],
["Come si facevano le stampe?","Io disegnavo, poi un intagliatore scavava il disegno su tavole di legno e uno stampatore passava i colori, uno alla volta. Così se ne facevano migliaia di copie, a prezzi che la gente comune poteva pagare. Oggi le chiudono in vetrina, e io sbuffo."],
["Com’era Edo?","Enorme: già nel Settecento era una delle città più grandi del mondo, con quasi un milione di abitanti. E piena di fuoco: l’incendio di Meireki, nel 1657, prima ancora che nascessi, ne aveva distrutta buona parte. Il fuoco tornava sempre, e noi ricostruivamo sempre."],
["Che ne pensi del tuo museo?","Mi dicono che l’abbia disegnato una signora, Sejima Kazuyo, e che l’abbia rivestito d’alluminio. L’ho girato intorno: luccica, è strano e per niente pittoresco! È stato aperto nel 2016. Da vivo non ho mai avuto un posto fisso, ora ho un museo: che beffa."],
["Cosa sai del sumo?","Qui a Ryōgoku si lotta da secoli: Edo andava matta per il sumo e la gente faceva la fila. Oggi c’è il Kokugikan: tre tornei all’anno, a gennaio, maggio e settembre. Io ho disegnato i lottatori più volte: che muscoli, che pance, che facce!"],
["Che consiglio dai a un artista?","Che a sei anni disegnavo cose per imitare, che a cinquanta avevo fatto tante cose senza valore, e che a settanta cominciavo a capire la struttura di animali e piante. Scrissi che a centodieci anni ogni punto e ogni linea sarebbero stati vivi. Si dice che le mie ultime parole fossero un desiderio: altri cinque anni, per diventare un vero pittore."],
["Dove vado dopo?","Torna verso il centro, alla stazione dai mattoni rossi, e da lì al castello degli shōgun, che oggi è il palazzo dell’imperatore. Lì c’è il fondatore di Edo, Ieyasu. È un tipo che sa aspettare: io non ne ho mai avuto la pazienza."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e non smettere di guardare: l’occhio è il primo pennello. Sayōnara, e ricordati dell’onda!"]],
"tk_ieyasu":[
["Chi sei?","Tokugawa Ieyasu, nato nel 1543 in terra di Mikawa. Fui ostaggio da ragazzo, poi guerriero, poi fondatore del governo degli shōgun. Ho passato la vita ad aspettare il momento giusto: chi ha fretta, perde."],
["Perché hai scelto Edo?","Nel 1590 Hideyoshi mi diede otto province dell’est al posto delle mie terre. Molti lo videro come un esilio. Io vidi una baia e un fiume: acqua per le navi e spazio per una grande città."],
["Com’era Edo allora?","Un castello modesto, un centinaio di capanne col tetto di paglia e l’insenatura di Hibiya a due passi: fango e canneti. Prosciugammo paludi, scavammo canali, alzammo mura. Non fu rapido: i miei nipoti vedevano ancora il lavoro da fare."],
["Come sei diventato shōgun?","Vinsi a Sekigahara nel 1600 e nel 1603 l’imperatore mi diede il titolo di shōgun. Nel 1605 lo passai a mio figlio Hidetada, ma continuai a governare da Sunpu, dove morii nel 1616. Il governo dei Tokugawa durò oltre duecentosessant’anni, fino al 1867."],
["Cosa è successo al castello?","Nel 1868 la città cambiò nome e divenne Tokyo, “capitale dell’est”, e il castello diventò la residenza dell’imperatore. Il mastio, di cinque piani, bruciò nel 1657, molto dopo di me, e non fu mai ricostruito. Il basamento è ancora lì: andalo a vedere."],
["Qual è il segreto della pazienza?","Mi si attribuisce un detto: se il cuculo non canta, aspetta che canti. Non so se l’abbia detto io, ma lo condivido. Chi sa aspettare vede cadere gli impazienti."],
["E il tempio di famiglia?","Lo Zōjō-ji: lo feci trasferire nel 1598 sul fianco sud-ovest del castello, per proteggerlo. Lì riposano sei dei miei discendenti. E al Sensō-ji, ad Asakusa, diedi il ruolo di tempio protettore della mia famiglia."],
["Che cos’è quell’edificio rosso, con le cupole?","La stazione, mi dicono: aprì nel 1914 e da lì partono treni che corrono come frecce. Ai miei corrieri servivano giorni per arrivare a Kyoto; oggi basta una mattina. Bella cosa, la fretta, quando serve davvero."],
["Cosa sai di Ginza?","La zecca d’argento: la fondai nel 1612, trasferendo qui una fonderia da Sunpu. Il nome, “sede dell’argento”, è rimasto, e oggi ci vendono borse e gioielli. Il denaro ha sempre trovato la sua strada."],
["Com’era la vita a Edo?","I samurai nei quartieri alti, i mercanti e gli artigiani nella città bassa, lo “shitamachi”. Il porto, i mercati, le feste. E il fuoco: nel 1657 morirono circa centomila persone. Dopo quell’incendio la città fu ricostruita con strade più regolari e con squadre di pompieri."],
["Dove vado dopo?","Ad Akihabara: prendi la linea verde Yamanote da Tokyo, due fermate: Kanda e poi Akihabara. Lì c’è un giovane, Kenta, che vende giochi vecchi. Dicono sia imbattibile nei giochi di strategia: andiamo a vedere."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, giovanotto. Si dice che io abbia detto: la vita è come portare un carico pesante lungo una strada lunga, non avere fretta. Saraba, Pierpaolo."]],
"tk_kenta":[
["Chi sei e che fai?","Kenta, trentun anni, commesso. Sono venuto a Tokyo a diciotto anni per l’università e non ho più lasciato Akiba. Qui vendo e ricompro giochi vecchi: il mio lavoro è il mio hobby. Yabai, vero?"],
["Cos’è Akihabara?","Il quartiere dell’elettronica, dei videogiochi, dei manga e degli anime. Si chiama anche “Akiba”, o “città dell’elettricità”. Un posto strano e magico, dove i telefoni nuovi stanno accanto alle valvole delle radio e alle statuine."],
["Com’è nata?","Dopo la guerra qui c’era un mercato nero sotto i binari: le bancarelle vendevano pezzi di radio, e l’elettronica è rimasta. Il nome viene da un santuario antincendio del 1869, che la gente chiamò Akiba. Tutto nasce da un incendio, eh."],
["Cos’è Kanda Myōjin?","Il santuario vicino: ci vanno a far benedire i computer e i telefoni, e ci sono gli ema con i personaggi degli anime. A maggio, negli anni dispari, c’è il grande Kanda Matsuri con i mikoshi. Mi dicono che esista dal 730, ma io so solo che porta fortuna ai miei negozi."],
["Cosa sono le macchinette gachapon?","Giri la manopola e ti esce una capsula con una sorpresa: figurine, portachiavi, a volte cose assurde. Ne esistono a centinaia di tipi. “Gacha” è il rumore della manopola, “pon” quello della capsula che cade."],
["E le sale giochi?","Si sviluppano su più piani, con un rumore pazzesco. Le gru con i peluche, i giochi di ritmo, le cabine per le foto. Si va con gli amici dopo il lavoro e nessuno si vergogna di giocare: gli adulti sono i primi."],
["Cosa sono i maid cafe?","Locali in cui le cameriere ti accolgono con “okaerinasai”, bentornato, e disegnano un cuoricino col ketchup sulla tua frittata di riso. È uno spettacolo, un gioco: nessuno lo prende sul serio, e tutti si divertono. Sugoi, vero?"],
["Cosa vuol dire “otaku”?","Una volta era quasi un insulto: una persona chiusa in casa con la propria passione. Oggi molti lo dicono con orgoglio: chi è appassionato di qualcosa fin nei dettagli. Io lo sono: ho più di tremila giochi in casa. Il mio capo dice che devo comprare un’altra casa."],
["Com’è vivere in un appartamento a Tokyo?","Piccolissimo: il mio è un monolocale di venti metri quadrati. Tutto va in verticale: scaffali fino al soffitto, il futon che si chiude nell’armadio. Per questo si vive molto fuori: konbini, caffè, bagni pubblici."],
["E Ueno, qui vicino?","A Ueno c’è il parco più bello per le passeggiate, con i musei e lo stagno Shinobazu pieno di loti a luglio. Lo zoo è il più antico del Giappone, ma a gennaio di quest’anno i panda sono tornati in Cina e ora non ce ne sono più. C’è ancora chi ci va, per ricordarli."],
["Dove vado dopo?","A Shinjuku: dalla stazione di Akihabara prendi la linea gialla Chūō-Sōbu, senza cambi. Ti porta nel cuore degli uffici e dei neon. Lì c’è Hiroshi, un impiegato che torna a casa tardi ma sa dove si mangia bene: digli che ti manda quello dei giochi."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo-san, e se torni ti faccio provare un gioco di quando ero bambino: la musica ti resta in testa per una settimana. Mata ne, e ganbatte!"]],
"tk_hiroshi":[
["Chi sei e che fai?","Hiroshi, quarantadue anni, impiegato in un’azienda di software. Esco di casa alle sette e torno la sera: le giornate sono lunghe, ma si sopportano con un buon bento e un caffè in lattina. Qui ci chiamano “salaryman”, gli impiegati in completo."],
["Com’è questa stazione?","La più trafficata del mondo: circa tre milioni e mezzo di persone al giorno, con più di duecento uscite. Io ancora ogni tanto sbaglio uscita, e sono dieci anni che ci passo! Prima regola: impara a memoria il numero dell’uscita giusta."],
["Come ci si comporta in treno?","In silenzio: niente telefonate, il telefono in modalità “manner”, niente cibo. Si cedono i posti riservati e molti dormono seduti, con la testa che dondola. E se il treno è in ritardo, la compagnia ti dà un certificato da mostrare al capo!"],
["Come ci si scambia i biglietti da visita?","Con due mani e un piccolo inchino, e si leggono con attenzione prima di metterli via, mai nella tasca dietro. Il biglietto è un po’ la persona stessa. Io ne ho sempre una scorta nel taschino."],
["Cos’è quel palazzo con due torri?","Il Tochō, il palazzo del governo di Tokyo: due torri gemelle progettate da Tange Kenzō e finite nel 1990. Dai piani a 202 metri la vista è gratis, e a me piace salire d’inverno, quando si vede il Fuji. Ci vado a ricaricarmi."],
["Cos’è Omoide Yokochō?","“Il vicolo dei ricordi”: nato dopo la guerra come mercato nero, oggi è pieno di baracchini di yakitori. Il fumo, il rumore dei treni, le bacchette. Ci vado con i colleghi il venerdì: nel tempo di una birra ci raccontiamo tutto."],
["Cos’è il “nomikai”?","Dopo il lavoro si va a bere insieme. La prima ordinazione è quasi sempre una birra alla spina, e poi si brinda: “kanpai!”. Si versa agli altri prima che a sé stessi. All’izakaya, la taverna, ti portano subito un piccolo antipasto non ordinato, l’otōshi, che si paga come coperto."],
["E Golden Gai?","Sei vicoli, circa duecento bar minuscoli, alcuni con cinque posti. Ogni bar ha il suo padrone e il suo stile. In certi ti chiedono un piccolo coperto: entra solo dove ti senti accolto, che non tutti accettano nuovi clienti."],
["E quella testa di Godzilla?","Sul cinema Toho, dal 2015. Godzilla è il mostro nato nel cinema giapponese nel 1954 e per noi è quasi un parente. A orari fissi ruggisce e sbuffa fumo, e la gente alza i telefoni. Io lo saluto sempre, passando."],
["Com’è il lavoro qui?","Pesante, ma qualcosa sta cambiando: più ferie e più lavoro da casa. D’estate in ufficio si va senza cravatta, “cool biz”, per tenere i condizionatori meno bassi. A mezzogiorno si pranza col bento o a un ristorante vicino, con il menu fisso."],
["Dove vado dopo?","A Harajuku e al Meiji Jingū: prendi la linea verde Yamanote, due fermate da Shinjuku. Al tramonto il santuario è un bosco di silenzio, ma chiude presto. Lì c’è Yui, una ragazza che lavora al santuario."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo-san, e se torni a Shinjuku la prima birra la offro io. Otsukare-sama deshita, e ganbatte!"]],
"tk_yui":[
["Chi sei e che fai?","Yui, ventiquattro anni, studentessa di letteratura, e miko il sabato e la domenica. Aiuto i fedeli, vendo amuleti, preparo gli ema e spazzo la ghiaia, che in autunno è una lotta continua. Una vita molto tranquilla, ne."],
["Chi è onorato qui?","L’imperatore Meiji, morto nel 1912, e l’imperatrice Shōken. Il santuario fu inaugurato nel 1920. Si dice che l’imperatore abbia scritto più di centomila poesie waka: una vita da poeta, oltre che da sovrano."],
["Com’è nata la foresta?","Non è nata da sola: furono piantati circa centomila alberi, donati da tutto il Giappone, con un progetto che doveva farla crescere da sola. Oggi ospita uccelli e insetti e sembra un bosco antichissimo. In mezzo a Tokyo, è un piccolo miracolo."],
["Cosa è successo al santuario?","Fu distrutto dai bombardamenti del 1945 e ricostruito nel 1958 con le offerte di tantissime persone. L’edificio è di cipresso e rame, quasi senza colori. Il bello è proprio quel non decorare."],
["Come si prega in un santuario?","Al torii ci si inchina, poi si cammina ai lati, perché il centro è riservato al kami. Alla vasca si prende il mestolo: prima la mano sinistra, poi la destra, poi si sciacqua la bocca. Alla sala: due inchini, due battiti, la preghiera e un inchino."],
["Cosa sono gli ema e gli omikuji?","Gli ema sono tavolette di legno su cui si scrivono i desideri: gli studenti per gli esami, le coppie per le nozze. Gli omikuji di qui non dicono “fortuna” o “sfortuna”: contengono una poesia dell’imperatore o dell’imperatrice, e tocca a te capirla."],
["Perché le botti di vino?","Le botti di sake sono offerte delle distillerie, quelle di vino della Borgogna sono regali dei produttori francesi, perché l’imperatore amava la cultura occidentale. Sono vuote, ma gli sguardi dei turisti le riempiono, ne."],
["Cosa vedo nel fine settimana?","Cortei di nozze, con la sposa sotto un grande ombrello rosso. A metà novembre c’è lo Shichi-Go-San, “sette-cinque-tre”: i bambini di tre, cinque e sette anni vengono al santuario in kimono per ringraziare e augurarsi di crescere bene. Sono adorabili."],
["Cosa si fa a Capodanno?","Si fa la “prima visita dell’anno”, hatsumōde: milioni di persone vengono ai santuari fra l’1 e il 3 gennaio, un fiume di preghiere e di desideri. Si compra un amuleto nuovo e si riporta quello vecchio. Noi miko abbiamo le mani blu dal freddo."],
["Com’è Harajuku?","Appena fuori dal santuario ti trovi nello stile “kawaii”, il carino: la Takeshita-dōri con i vestiti e le crêpe, e l’Omotesandō, un viale di boutique. Dal bosco alla moda in cinque minuti. E io adoro tutti e due i mondi."],
["Dove vado dopo?","A Shibuya, una fermata di Yamanote o una passeggiata. Dopo il tramonto l’incrocio si illumina, e lì c’è Mio, una studentessa che ti spiega tutto. Provati a fare lo Scramble: è tutta un’altra cosa che guardarlo."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo-san, e prima di uscire fai un inchino al torii: è un grazie al bosco. Ki o tsukete, e arigatō!"]],
"tk_mio":[
["Chi sei e che fai?","Mio, ventun anni, studio economia e faccio il “baito”, il lavoretto, in un konbini la sera. Vivo con una coinquilina in un appartamento minuscolo: dividiamo tutto, anche i dolci. Maji, è una vita bellissima e stancante."],
["Chi è Hachikō?","Un cane Akita nato nel 1923: accompagnava il suo padrone, il professor Ueno, alla stazione e lo aspettava al ritorno. Il professore morì all’improvviso nel 1925 e Hachikō continuò a tornare ogni giorno fino al 1935. Ogni anno, l’8 aprile, c’è una cerimonia in suo onore davanti alla stazione."],
["Come funziona “ci vediamo da Hachikō”?","È il punto d’incontro di tutta Shibuya: si aspetta qualcuno qui, telefono in mano e sguardo sul passaggio. In Giappone arrivare in ritardo è quasi un reato: io arrivo sempre dieci minuti prima. E tu sei arrivato presto, bravo."],
["Come si attraversa lo Scramble?","Quando il semaforo diventa verde per tutti i pedoni insieme, fino a circa tremila persone attraversano in tutte le direzioni, anche in diagonale. Nessuno si scontra: guardi un punto lontano e ti lasci portare. All’inizio sembra impossibile, poi ti diverte."],
["Cos’è Shibuya Sky?","Una terrazza a circa 230 metri sul tetto di Scramble Square, aperta nel 2019. Si vede l’incrocio dall’alto, come un formicaio, e al tramonto la luce è la più bella. Conviene prenotare prima, altrimenti ti tocca aspettare."],
["Come parlano i giovani?","Con parole corte: “yabai” può voler dire “terribile” o “fantastico”, “mecha” vuol dire “molto”, “maji” “davvero”, e “uso!” “non ci credo!”. “Konbini” è l’abbreviazione di “convenience store”. Capisci già un po’ di giapponese, sugoi!"],
["Cosa si fa per divertirsi?","Si va a fare le foto in cabina, il purikura, in gruppo, con effetti e decorazioni, e poi si dividono le stampe. Il karaoke è fra amici, in una stanza privata, con i microfoni: “karaoke” vuol dire “orchestra vuota”. Dopo cena, il “nijikai”, il secondo giro, è quasi sempre karaoke."],
["Cosa si fa al konbini?","Tutto: onigiri, bento, caffè caldo, biglietti dei concerti, pagare le bollette; molti sono aperti ventiquattr’ore. Dove lavoro io, a mezzanotte entra più gente che di giorno. Il konbini è la vita di Tokyo, davvero."],
["Come si vive con i terremoti?","Con calma e con le esercitazioni: il telefono suona un allarme, a scuola si fanno le prove. Il primo settembre c’è la Giornata della prevenzione dei disastri, in ricordo del grande terremoto del 1923, e si fanno esercitazioni in tutto il paese. Si impara cosa mettere nello zaino d’emergenza."],
["E i rifiuti?","In giro ci sono pochi cestini: si porta a casa la spazzatura o si butta al konbini. La raccolta differenziata è severa, con un calendario per ogni tipo di rifiuto. Nessuno getta niente in strada, e le macchinette di bevande hanno il loro cestino accanto."],
["Dove vado dopo?","Alla Tokyo Tower, a Minato: la torre arancione che si vede dappertutto. Prendi la metro verso Minato: vedrai il suo bagliore da lontano. Ai suoi piedi c’è lo Zōjō-ji, un tempio rosso: guarda in su, è una cartolina. Non c’è nessuno ad aspettarti: sei tu che aspetti la torre."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando vedi la torre accesa fai una foto per me! Jaa ne, e buona fortuna!"]]};
Object.assign(TOPX,TOPX_TK);
})();
