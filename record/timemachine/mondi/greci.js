/* ---------- GRECI · Dagli uliveti dell'Attica alle stelle di Capo Sunio (uliveti dell'Attica, Pireo, Acropoli, Agorà e Pnice, Delfi, Termopili, Olimpia, Capo Sunio) ---------- */
/* Un'intera giornata da sinistra a destra, e un tempo che si piega (più di tre secoli e mezzo in una sola giornata): alba negli uliveti dell'Attica, primo mattino al Pireo,
   mattina sull'Acropoli, tarda mattina nell'Agorà, alla Pnice e al teatro di Dioniso, mezzogiorno a Delfi, primo pomeriggio alle Termopili, pomeriggio a Olimpia,
   tramonto e notte a Capo Sunio. In fondo ci sono le stelle sopra il mare che salgono verso l'Olimpo: lì il motore mette il varco.
   Testi, tappe e dialoghi vengono da greci.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico). Gli oggetti stanno in elementi.js (nomi che iniziano per "gr").
   Il tono per i temi dolorosi (schiavitù, iloti, guerra, Leonida e i suoi uomini, Socrate) è sobrio e rispettoso; tradizioni e questioni discusse sono presentate con "si dice" o "secondo la tradizione", come nella scheda. */
(function(){
const GT=372,W1=23000;
const P=PR._gr,A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln,nf,gp,gfolla,pila,ulv,cip,pino,plat,lauro,capra,anf,giara,muretto,fumo,asino,pecora,cane,cavallo,gatto,col,rupe,mareN,tmp}=P;
const md=(i,n)=>((i%n)+n)%n;
const Z=[0,2700,5400,8000,10850,13550,16200,19250,W1+400];   /* inizio di ognuna delle 8 zone */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* ---- cielo: alba rosa e arancio, mattina brillante, tarda mattina bianca, mezzogiorno a picco, primo pomeriggio dorato, pomeriggio ambrato, tramonto rosso e viola, notte stellata ---- */
const SKY=[[0,['#7a80b8','#f2a8b0','#ffd0a4']],[1300,['#5aa4ec','#b8d8f2','#f8ecd8']],[2700,['#3a9aee','#7cc0f6','#dff0fa']],[5400,['#4a9ced','#9cd0f6','#f2f6f4']],[8000,['#3a90ea','#94c8f2','#f4f8fa']],[10850,['#2f86e6','#86bef0','#eef6fa']],[13550,['#3a88e0','#98c4ea','#f8f0d4']],[16200,['#4a86d0','#b4c0d8','#fbe6b8']],[18300,['#5a78c0','#e8b090','#ffc890']],[19400,['#6a5cb0','#f08a78','#ffb86c']],[20400,['#3a3a8a','#8a5aa0','#f08a70']],[21300,['#14205a','#2a3a80','#4a4a96']],[23400,['#060e3a','#101e66','#2a3480']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,6*s);el(g,c,x-18*s,y+2*s,22*s,5*s);el(g,c,x+20*s,y+2*s,24*s,5*s)};
const INTRO="Antica Grecia, dall’alba alla notte. Parti dagli uliveti dell’Attica, dove si raccoglie l’olio che dà luce e ricchezza; poi il Pireo, il porto da cui salpano le triremi, e l’Acropoli, dove Fidia e i suoi scultori costruiscono il Partenone. Nella tarda mattina l’Agorà e la Pnice, dove i cittadini decidono tutto da soli; a mezzogiorno Delfi, dove la Pizia parla a nome di Apollo. Nel primo pomeriggio le Termopili, dove Leonida e i suoi uomini aspettano i Persiani; poi Olimpia, dove si gareggia in onore di Zeus; al tramonto Capo Sunio, il tempio di Poseidone, e di notte le stelle e i racconti di Omero. Il tempo qui si piega: filosofi, atleti, re, sacerdotesse e contadini di ogni epoca ti vengono incontro.";
const LKTXT=[
"L’Attica è una terra di sassi e di sole, e quello che qui cresce meglio è l’ulivo. Gli ateniesi dicono che il primo lo regalò la dea Atena, in una gara con il dio Poseidone per proteggere la città. Gli ulivi vivono per secoli e danno l’olio, la ricchezza più antica del posto.",
"Le olive si raccolgono in autunno: si battono i rami con lunghe canne e si raccolgono dalle reti stese a terra. Poi vanno al frantoio, dove una macina le schiaccia e un torchio a leva ne spreme l’olio. Serve per cucinare, per le lampade, per i profumi e per pulirsi la pelle dopo lo sport.",
"Qui la terra è povera e si coltiva soprattutto l’orzo, più del grano: il grano per il pane migliore arriva anche dal mare. La vite dà il vino, che si beve sempre allungato con acqua. E sul monte Imetto le api fanno un miele famoso in tutta la Grecia.",
"La famiglia vive attorno a un cortile: la casa è fatta di mattoni di fango su una base di pietra, con il tetto di tegole. Il focolare è sacro alla dea Estia, e ogni mattina si offre qualcosa agli dèi di casa. Le donne filano e tessono la lana al telaio, e quasi tutti i vestiti si fanno in casa.",
"Il Pireo è il porto di Atene, a circa sette chilometri dalla città, e ha tre bacini naturali: Kantharos, il più grande, per il commercio, e Zea e Munichia per le navi da guerra. Fu Temistocle a capire che era il posto giusto e a fortificarlo, a partire dal 493 a.C. Da qui parte la potenza di Atene, che vive del mare.",
"Le triremi non stanno in acqua, ma al coperto: ogni nave ha il suo scivolo in pendenza e una lunga tettoia aperta verso il mare, lunga più di trenta metri e larga circa sei. Al Pireo ce ne sono centinaia. Si tirano a secco per tenerle leggere e asciutte, e per ripararle.",
"La trireme è la nave da guerra di Atene: lunga circa trentasette metri, con tre file di rematori su ogni lato, in tutto centosettanta. Sulla prua ha un rostro di bronzo per sfondare le navi nemiche. È veloce e agile, e gira su se stessa in pochissimo spazio.",
"Due lunghe mura collegano il Pireo ad Atene, per circa sei chilometri: se la città è assediata, il mare resta raggiungibile. Al porto arrivano merci da tutto il Mediterraneo, grano compreso, e vivono anche molti stranieri. La città del porto è disegnata a scacchiera, con strade dritte che si incrociano ad angolo retto: la tradizione ricorda l’architetto Ippodamo di Mileto.",
"L’Acropoli è una rocca che domina Atene, dove sorgono i templi della dea Atena. Si sale da una porta monumentale, i Propilei. Ogni anno, nella festa delle Panatenee, una processione di fanciulle, cavalieri e animali per il sacrificio sale fin qui per portare un nuovo mantello alla dea.",
"Il Partenone è il grande tempio di Atena: si costruisce dal 447 a.C. con marmo bianco del monte Pentelico e le decorazioni finiscono nel 432 a.C. Gli architetti sono Ictino e Callicrate, Pericle dirige i lavori e Fidia guida gli scultori. Le colonne sono otto sui lati corti e diciassette su quelli lunghi.",
"Dentro il Partenone c’è la statua di Atena Parthenos, \"la Vergine\": alta circa dodici metri, d’oro e d’avorio su un’anima di legno, dedicata nel 438 a.C. Le lastre d’oro della veste si possono staccare e pesare. Davanti alla statua c’è una vasca poco profonda piena d’olio.",
"Su questa rocca, secondo il mito, Atena e Poseidone si sfidarono per proteggere la città: Poseidone colpì la roccia con il tridente e fece sgorgare l’acqua salata, Atena fece nascere un ulivo, e gli dèi scelsero lei. Si racconta che i Persiani bruciarono l’albero nel 480 a.C. e che un germoglio rispuntò il giorno dopo.",
"L’Agorà è il cuore di Atene: un grande spazio aperto dove si compra, si discute, si fa politica e si va in tribunale. Intorno ci sono portici e gli edifici del governo, come il Bouleuterion, dove siede il Consiglio dei Cinquecento, e la Tholos, un edificio rotondo dove mangiano e dormono i consiglieri di turno.",
"Qui si compra di tutto: olio, vino, pesce, fichi, stoffe, vasi. Si paga con monete d’argento: la più famosa ha la civetta di Atena e la chiamano proprio \"civetta\". Una dracma vale sei oboli, e più o meno è la paga di un giorno di un operaio specializzato.",
"Ad Atene i cittadini maschi adulti decidono da soli, votando per alzata di mano nell’assemblea sulla collina della Pnice, circa quaranta volte l’anno. Per i giudici e per molti incarichi si estrae a sorte, con una macchina di pietra, il kleroterion. Si può anche mandare in esilio per dieci anni una persona scrivendo il suo nome su un coccio: è l’ostracismo. Donne, stranieri e schiavi non votano.",
"Ai piedi dell’Acropoli c’è il teatro del dio Dioniso, dove in primavera si svolgono le gare di tragedie e di commedie. Gli attori sono tutti uomini e portano maschere; il coro canta e danza nel cerchio dell’orchestra. Qui hanno presentato le loro opere autori come Eschilo, Sofocle, Euripide e Aristofane.",
"Il santuario di Delfi sale sul fianco del monte Parnaso lungo la Via Sacra. Ai lati le città greche hanno costruito piccoli \"tesori\", edifici di marmo dove custodiscono le offerte ad Apollo: quello degli Ateniesi è un piccolo tempio dorico di marmo di Paro; quello dei Sifni ha un fregio ricchissimo.",
"Il tempio di Apollo è il cuore di Delfi: all’ingresso sono incise frasi come \"Conosci te stesso\" e \"Nulla di troppo\". Dentro, in una stanza più bassa, siede la Pizia, la sacerdotessa che dà le risposte del dio. I greci credevano che Delfi fosse l’ombelico del mondo, e una pietra, l’omphalos, lo segna.",
"Prima di consultare l’oracolo ci si purifica alla fonte Castalia, che sgorga fra due pareti di roccia. Si porta un dono, si offre una focaccia sacra e si sacrifica una capra: se rabbrividisce quando le spruzzano acqua fredda, il dio è disposto a rispondere. La Pizia dà le risposte un giorno al mese, e non d’inverno.",
"In alto, sul crinale, c’è lo stadio dove ogni quattro anni si svolgono i Giochi Pitici, in onore di Apollo. Il premio è una corona d’alloro. All’inizio c’erano solo gare di canto con la cetra; poi si sono aggiunte corse, lotta e gare di carri.",
"Termopili vuol dire \"porte calde\", per le sorgenti di acqua calda che sgorgano qui. Il passo è così stretto, fra la montagna ripida e il mare, che pochi uomini possono fermare un esercito intero. È una delle strade principali verso il sud della Grecia.",
"In un punto ancora più stretto sorge un vecchio muro, costruito anni fa dai Focesi e rimesso in sesto dai Greci. Lì si schiera l’esercito alleato: circa settemila uomini da molte città, con i trecento spartani di Leonida.",
"Dietro il muro i Greci hanno acceso i fuochi e preparato il campo. Gli spartani, prima della battaglia, si pettinano i lunghi capelli e fanno ginnastica: una spia persiana li vede e non capisce. Per loro è un rito: ci si pettina e ci si cura quando si sta per affrontare una grande prova.",
"Sulle montagne passa un sentiero, l’Anopea, che gira dietro il passo. Secondo Erodoto un uomo del posto, Efialte, lo rivela ai Persiani. Leonida allora congeda quasi tutti gli alleati e resta con i trecento spartani e con i Tespiesi: resistono su una piccola altura, fino alla fine.",
"Olimpia è un santuario in una valle verde, vicino al fiume Alfeo, dedicato a Zeus. Al centro c’è l’Altis, il bosco sacro con templi, altari e statue. L’altare di Zeus è un grande cumulo di cenere dei sacrifici: durante i Giochi, ogni quattro anni, si sacrificano cento buoi.",
"Il tempio di Zeus è il più grande di Olimpia. Dentro c’è la statua di Zeus seduto su un trono, alta circa dodici metri, d’oro e d’avorio, opera di Fidia: i greci la contano fra le meraviglie del mondo. Sui frontoni sono scolpite la corsa di carri di Pelope e la battaglia fra Lapiti e Centauri.",
"Lo stadio è una lunga pista di terra battuta, lunga circa 192 metri: la distanza di una corsa, lo \"stadion\", da cui viene la parola \"stadio\". Gli spettatori, decine di migliaia, si siedono sull’erba dei pendii. Gli atleti gareggiano nudi e i giudici si chiamano ellanodici.",
"Prima delle gare gli atleti si allenano per mesi. Si ungono d’olio, si cospargono di sabbia e, a fine allenamento, si raschiano via sudore e sabbia con lo strigile. Ci sono corsa, lotta, pugilato, pankration (un misto di lotta e pugni) e pentathlon: disco, giavellotto, salto, corsa e lotta.",
"Il tempio di Poseidone sorge in cima alla scogliera di Capo Sunio, a circa sessanta metri sopra il mare, e lo si costruisce intorno al 444-440 a.C. È di marmo bianco con colonne doriche, e si vede da molto lontano, dal mare.",
"Sunio è un punto di riferimento per i naviganti che arrivano ad Atene. Gli ateniesi celebrano qui una festa in onore di Poseidone, con una processione di navi, e dopo la battaglia di Salamina vi hanno dedicato una nave persiana catturata.",
"Secondo il mito, il re Egeo aspettava dalla scogliera il ritorno del figlio Teseo, partito per Creta ad affrontare il Minotauro. Teseo aveva promesso di cambiare le vele nere in bianche se fosse sopravvissuto, ma se ne dimenticò. Egeo vide le vele nere e si gettò in mare: da lui prende il nome il mar Egeo. Alcuni raccontano la scena dall’Acropoli di Atene.",
"Di notte il cielo sopra Capo Sunio è pieno di stelle. Per i Greci molte sono eroi e animali trasformati in costellazioni: Orione il cacciatore, l’Orsa, le Pleiadi, sette sorelle. I contadini le usano come calendario: quando le Pleiadi tramontano all’alba, a fine autunno, è tempo di arare.",
"Sotto le stelle di Sunio, la strada sale verso l’Olimpo."
];
const NAME={
gr_nicarco:"Nicarco, il contadino",
gr_eumene:"Eumene, il rematore di trireme",
gr_fidia:"Fidia, lo scultore",
gr_socrate:"Socrate, il filosofo",
gr_aristonice:"Aristonice, la Pizia",
gr_leonida:"Leonida, re di Sparta",
gr_milone:"Milone di Crotone, il lottatore",
gr_omero:"Omero, il poeta"
};
const GREET={
gr_nicarco:"Chàire, Pierpaolo! Vieni sotto l’ulivo, che all’alba è il momento più bello: la rugiada sulle foglie e il sole che spunta dall’Imetto. Sono Nicarco e qui nell’Attica la terra è sassosa e povera, ma l’ulivo, la elaía, cresce anche sui sassi, e allora anche noi.",
gr_eumene:"Ehi, Pierpaolo, aggrappati a quella cima e vieni su! Sono Eumene e al Pireo la mia casa è un banco di legno, il terzo della fila a sinistra. Sono rematore di trireme da quando avevo vent’anni, e a Salamina ho remato per Atene con la schiena rotta e il cuore leggero.",
gr_fidia:"Chàire, Pierpaolo! Attento ai blocchi, che il marmo pesa più dell’orgoglio degli scultori. Sono Fidia e qui, sulla rocca di Atena, Pericle mi ha affidato i lavori più belli: il Partenone e una dea d’oro e d’avorio più alta di una casa.",
gr_socrate:"Chàire, Pierpaolo! Ti vedo con lo sguardo di chi cerca qualcosa: bene, anch’io. Sono Socrate, figlio di Sofronisco, e giro per l’Agorà facendo una cosa strana: domande. Tu sai già cosa è giusto e cosa è bello? Io no, e per questo parlo con tutti.",
gr_aristonice:"Chàire, Pierpaolo, e benvenuto a Delfi, l’ombelico del mondo. Sono Aristonice, la Pizia: prima ero una donna di qui, con le capre e il telaio, oggi sono la voce di Apollo. Siediti, ma non farmi domande troppo in fretta: il dio non ha mai fretta, e io nemmeno.",
gr_leonida:"Pierpaolo. Avvicinati, ma non intralciare i miei uomini: si stanno pettinando. Sono Leonida, re di Sparta, e se i Persiani vogliono passare, dovranno chiedere. Qui siamo pochi e il mare è alle nostre spalle: eppure mi sento a mio agio.",
gr_milone:"Chàire, Pierpaolo! Non avere paura delle mie mani: sono grandi, ma stringono solo gli avversari. Sono Milone di Crotone, sei volte vincitore della lotta qui a Olimpia. Se vuoi un consiglio, non sfidarmi a mangiare: dicono che una volta ho finito un bue intero in un giorno.",
gr_omero:"Siediti qui, Pierpaolo, e ascolta il mare: è il mio primo maestro. Sono Omero, o almeno così mi chiamano: c’è chi dice che sono nato a Chio, chi a Smirne, e che sono cieco. Io so solo che canto storie, e che il pubblico ritorna."
};
const LX=[400,1150,1850,2400, 3250,3900,4650,5150, 5900,6650,7350,7800, 8550,9250,9900,10450, 11250,11950,12650,13200, 14000,14700,15350,15950, 16750,17500,18250,18900, 19800,20550,21250,22000,22800];

/* ---- livello 0: cielo, sole, luna sottile, stelle, nuvole alte e sottili ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-20400)/1500,0,1);
 if(nt>0)for(let i=0;i<120;i++){const sx=hr(i*3)*480,sy=hr(i*7+1)*310,tw=.5+.5*Math.sin(t*2+i*1.7);dot(g,'rgba(255,252,235,'+(nt*(.35+.55*tw)*(sy<GT-50?1:.35))+')',sx,sy,.7+hr(i)*1.2)}
 const u=cl(xs/19600,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*255;
 if(xs<20400){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*100)+','+Math.round(190-low*130)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*80)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT+4);dot(g,'rgba(255,250,225,.95)',sx,sy,14)}
 const mu=cl((xs-20700)/1500,0,1);if(mu>0){const mx=330-mu*30,my=110-mu*20;dot(g,'rgba(255,248,215,'+.12*mu+')',mx,my,30);g.fillStyle='rgba(246,240,214,'+mu+')';g.beginPath();g.arc(mx,my,12,-Math.PI/2,Math.PI/2,true);g.bezierCurveTo(mx-5,my+8,mx-5,my-8,mx,my-12);g.fill()}
 const cc=xs<2700?'rgba(252,206,214,.5)':xs<16200?'rgba(255,255,255,.5)':xs<19250?'rgba(255,214,160,.55)':xs<20800?'rgba(255,140,120,.5)':'rgba(140,120,190,.2)';
 each(o-((t*3)%340)*.02,340,1,(x,i,r)=>{if(r>.4)return;nube(g,x+r*100,40+r*60,.9+r*.7,cc)});
 const fo=cl(1-xs/2800,0,1)*.3;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const dust=cl((xs-13550)/1200,0,1)*cl((16200-xs)/1000,0,1)*.14;if(dust>.01){g.fillStyle='rgba(255,208,120,'+dust+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-16300)/1500,0,1)*.12+cl((xs-18800)/900,0,1)*cl((21200-xs)/1000,0,1)*.22;if(wg>.01){g.fillStyle='rgba(255,100,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}

/* ---- livello 1: orizzonte lontano: l'Imetto lilla, Salamina, la rupe dell'Acropoli, il Parnaso, il passo delle Termopili, le colline di Olimpia, il mare di Sunio e l'Olimpo ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(mixs(c,'#c4cce0',.25),'#262a5e',night*.72);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const mont=(sx,w,h,c,sn,seed)=>{const pk=[];g.fillStyle=dim(c);g.beginPath();g.moveTo(sx-w,hz+34);for(let q=0;q<=40;q++){const u=q/40,px=sx-w+u*2*w,hh=h*(Math.sin(u*Math.PI))*(.62+.38*Math.abs(Math.sin(u*9+seed)))+8*Math.sin(u*31+seed);pk.push([px,hz+14-hh]);g.lineTo(px,hz+14-hh)}g.lineTo(sx+w,hz+34);g.closePath();g.fill();
  if(sn){g.fillStyle=dim('#f4f6fc');pk.forEach((p,i)=>{if(i>0&&i<40&&p[1]<hz+14-h*sn&&pk[i-1][1]>=p[1]&&pk[i+1][1]>=p[1]){g.beginPath();g.moveTo(p[0],p[1]);g.lineTo(p[0]-9,p[1]+11+hr(i)*8);g.lineTo(p[0]-3,p[1]+8);g.lineTo(p[0]+2,p[1]+13);g.lineTo(p[0]+9,p[1]+12);g.closePath();g.fill()}})}};
 const sea=(sx,w,c)=>{rect(g,dim(c),sx-w,hz+12,2*w,24);for(let q=0;q<10;q++)rect(g,'rgba(255,255,255,.3)',sx-w+q*w/5+hr(q)*20,hz+16+(q%3)*5,26,1.4)};
 const oliv=(sx,x0,x1)=>{rect(g,dim('#8a9a7a'),sx+x0,hz+16,x1-x0,16);for(let q=0;q<(x1-x0)/9;q++)dot(g,dim(hr(q)>.5?'#a8b894':'#788a68'),sx+x0+q*9+hr(q*3)*4,hz+17+hr(q)*8,3.4)};
 const torches=(sx,x0,x1,n)=>{if(night>.2)for(let q=0;q<n;q++){const tx=sx+x0+(x1-x0)*q/(n-1);glow(g,tx,hz+6,12,'255,180,80',.7*Math.min(1,night+.1));dot(g,'rgba(255,220,140,.95)',tx,hz+6,1.4)}};
 /* zona 1: il monte Imetto color lilla, gli uliveti grigio-verdi e la linea azzurra del mare */
 const a1=env(1400,4600);if(a1>.02){g.globalAlpha=a1;const sx=fx(1400);sea(sx,500,'#7aa8d0');mont(sx-80,540,140,'#a090c0',0,1.3);mont(sx+300,380,100,'#b0a2c8',0,4.1);oliv(sx,-500,520);g.globalAlpha=1}
 /* zona 2: il mare del Pireo con Salamina all'orizzonte e le navi */
 const a2=env(4000,3600);if(a2>.02){g.globalAlpha=a2;const sx=fx(4000);sea(sx,620,'#5a9cd0');mont(sx+240,200,50,'#6a8a78',0,2.2);mont(sx-320,260,60,'#7a9a88',0,5.2);for(let q=0;q<4;q++){const bx=sx-140+q*70;rect(g,dim('#4a3a2a'),bx,hz+14,16,4);ln(g,dim('#4a3a2a'),1,[bx+8,hz+14,bx+8,hz+2]);poly(g,dim('#f0ecdc'),[[bx+8,hz+3],[bx+14,hz+12],[bx+8,hz+12]])}g.globalAlpha=1}
 /* zone 3-4: la rupe dell'Acropoli con il Partenone dorato, la collina della Pnice */
 const a3=env(8200,5400);if(a3>.02){g.globalAlpha=a3;const sx=fx(8200);rect(g,dim('#b4a888'),sx-700,hz+16,1400,18);mont(sx-240,170,60,'#a8946a',0,3.1);
  g.fillStyle=dim('#a08a62');g.beginPath();g.moveTo(sx-150,hz+34);g.lineTo(sx-140,hz-30);g.lineTo(sx-110,hz-48);g.lineTo(sx+110,hz-48);g.lineTo(sx+140,hz-26);g.lineTo(sx+170,hz+34);g.closePath();g.fill();rect(g,dim('#b8a070'),sx-140,hz-34,300,6);
  rect(g,dim('#f0dcaa'),sx-70,hz-62,140,16);for(let q=0;q<9;q++)rect(g,dim(q%2?'#e8d29a':'#f6e6b6'),sx-66+q*16,hz-76,4,30);poly(g,dim('#f0dcaa'),[[sx-76,hz-76],[sx,hz-92],[sx+76,hz-76]]);rect(g,dim('#e8d29a'),sx+90,hz-70,10,24);
  torches(sx,-150,150,7);g.globalAlpha=1}
 /* zona 5: le pareti di roccia del Parnaso e la valle di ulivi fino al mare */
 const a5=env(12200,3600);if(a5>.02){g.globalAlpha=a5;const sx=fx(12200);sea(sx-200,420,'#6a9ccc');mont(sx+60,520,230,'#8a7a62',.0,2.2);mont(sx+340,340,170,'#9a8a72',0,6.1);for(let q=0;q<7;q++)ln(g,dim('#5a4a3a'),2,[sx-240+q*70,hz-10,sx-230+q*70,hz-100-hr(q)*60]);oliv(sx,-520,-60);for(let q=0;q<5;q++)el(g,'rgba(255,255,255,.45)',sx-120+q*90,hz-100-(q%2)*30,50,6);g.globalAlpha=1}
 /* zona 6: il passo stretto fra la montagna e il mare, le navi, gli accampamenti persiani */
 const a6=env(14900,3400);if(a6>.02){g.globalAlpha=a6;const sx=fx(14900);sea(sx+120,360,'#5a8cc0');mont(sx-200,420,190,'#7a6a50',0,1.7);mont(sx-20,200,130,'#6a5a42',0,4.4);for(let q=0;q<10;q++)dot(g,dim('#4a6a3a'),sx-360+q*34,hz-10-hr(q)*60,6);for(let q=0;q<3;q++){const bx=sx+80+q*80;rect(g,dim('#3a2a1a'),bx,hz+14,18,4);poly(g,dim('#f0ecdc'),[[bx+8,hz+3],[bx+14,hz+12],[bx+8,hz+12]])}for(let q=0;q<7;q++){poly(g,dim('#9a8a68'),[[sx+120+q*14,hz+14],[sx+126+q*14,hz+6],[sx+132+q*14,hz+14]])}torches(sx,100,230,6);g.globalAlpha=1}
 /* zona 7: le colline boscose di Olimpia e la valle del fiume Alfeo */
 const a7=env(17700,3800);if(a7>.02){g.globalAlpha=a7;const sx=fx(17700);mont(sx-120,520,120,'#6a8a58',0,2.9);mont(sx+260,380,150,'#5a7a4a',0,5.7);rect(g,dim('#7ab0c8'),sx-500,hz+18,1000,4);for(let q=0;q<18;q++)dot(g,dim('#486a3a'),sx-480+q*54,hz+6-hr(q)*30,10);g.globalAlpha=1}
 /* zona 8: il mare scuro, le isole come ombre, e in lontananza l'Olimpo */
 const a8=env(21200,5800);if(a8>.02){g.globalAlpha=a8;const sx=fx(21200);rect(g,dim('#2a3a78'),sx-640,hz+10,1280,26);for(let q=0;q<22;q++)rect(g,'rgba(255,170,140,.25)',sx-620+q*56,hz+16+(q%3)*5,30,1.4);
  mont(sx-300,200,56,'#2a2a52',0,1.1);mont(sx-60,160,40,'#2a2a52',0,2.5);mont(sx+420,260,70,'#2a2a52',0,4.9);g.globalAlpha=1}
 const ol=cl((xs-21000)/1400,0,1);if(ol>.02){g.globalAlpha=ol;const sx=fx(22500)+Math.sin(t*.1)*0;mont(sx,420,250,'#6a6c9a',.55,3.3);for(let q=0;q<5;q++)el(g,'rgba(255,214,130,'+(.5-q*.07)+')',sx-170+q*84,hz-36-(q%2)*18,70,8);glow(g,sx,hz-120,160,'255,214,130',.18);g.globalAlpha=1}}

/* ---- livello 2: fattorie e ulivi, tettoie del porto, città bassa, tornanti di Delfi, pendii con i fuochi, boschi di Olimpia, la scogliera di Sunio ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120);A.setDK(nf(cam+x));
  const tl=(w,hh,c)=>{poly(g,dim(c||'#b4583a'),[[x+6,hz-hh],[x+10+w/2,hz-hh-14],[x+14+w,hz-hh]])};
  const house=(c,hh,ww,roof)=>{rect(g,dim(c),x+10,hz-hh,ww,hh+10);rect(g,'rgba(255,255,255,.14)',x+10,hz-hh,5,hh+10);rect(g,'rgba(0,0,0,.14)',x+10+ww-9,hz-hh,9,hh+10);tl(ww,hh,roof);rect(g,dim('#2a1c10'),x+10+ww*.4,hz-hh*.5,10,hh*.5+10);if(night>.2&&hr(i*7)>.4)rect(g,'rgba(255,214,140,.85)',x+10+ww*.7,hz-hh*.7,5,6)};
  if(zz==1){if(r>.6)ulv(g,x+60,hz+10,.55+r*.2,t);else if(r>.3)house(['#d49a58','#c88e4e','#dca468'][md(i,3)],30+r*30,56,'#b4583a');else cip(g,x+60,hz+10,60+r*30)}
  else if(zz==2){if(r>.7){ln(g,dim('#4a3a2a'),2,[x+50,hz+10,x+50,hz-50]);poly(g,dim('#f0ecdc'),[[x+50,hz-48],[x+78,hz-20],[x+50,hz-20]])}else{rect(g,dim('#2a2230'),x+4,hz-34,100,44);poly(g,dim('#b4583a'),[[x-2,hz-34],[x+54,hz-56],[x+110,hz-34]]);for(let q=0;q<3;q++)rect(g,dim('#e8dcc0'),x+10+q*38,hz-34,5,44)}}
  else if(zz==3){if(r>.7){for(let q=0;q<3;q++)rect(g,dim('#f4eee0'),x+10+q*20,hz-14-q*4,18,14+q*4);ln(g,dim('#7a5a34'),2,[x+80,hz+10,x+80,hz-60])}else if(r>.4)ulv(g,x+60,hz+10,.6,t);else house(['#e8dcc0','#e0d2b4'][md(i,2)],40+r*50,60,'#b4583a')}
  else if(zz==4){if(r>.82)plat(g,x+60,hz+10,.6,t);else house(['#e8dcc0','#d8c8a4','#e4d4b0','#d49a58'][md(i,4)],34+r*56,66,'#b4583a')}
  else if(zz==5){if(r>.6){cip(g,x+60,hz+10,70+r*40)}else if(r>.3){rect(g,dim('#c8b894'),x+10,hz-20,80,30);rect(g,dim('#f4eee0'),x+30,hz-46,40,26);poly(g,dim('#f4eee0'),[[x+26,hz-46],[x+50,hz-58],[x+74,hz-46]])}else{rect(g,dim('#b8a888'),x+4,hz-12,110,22);rect(g,'rgba(0,0,0,.1)',x+4,hz-2,110,3)}}
  else if(zz==6){if(r>.4)pino(g,x+60,hz+10,.8+r*.4,t);else{poly(g,dim('#9a8a68'),[[x+10,hz+10],[x+40,hz-32],[x+80,hz+10]]);if(night>.2)glow(g,x+44,hz-4,26,'255,170,70',.5)}}
  else if(zz==7){if(r>.6)plat(g,x+60,hz+10,.75+r*.3,t);else if(r>.3){poly(g,dim(['#e8dcc0','#d8c8a0'][md(i,2)]),[[x+10,hz+10],[x+44,hz-34],[x+82,hz+10]])}else ulv(g,x+60,hz+10,.6,t)}
  else{if(r>.4)cip(g,x+60,hz+10,70+r*40);else{rect(g,dim('#5a4a5a'),x+4,hz-16,100,26);poly(g,dim('#4a3a4a'),[[x+10,hz-16],[x+40,hz-48],[x+70,hz-16]])}if(night>.3&&r<.4)glow(g,x+54,hz-10,26,'255,170,70',.5)}})}

/* ---- livello 3: le facciate lungo la strada, per zona ---- */
const tile=(g,x,y,w,hh,c)=>{poly(g,c||'#b4583a',[[x-6,y],[x+w/2,y-hh],[x+w+6,y]]);for(let q=0;q<Math.floor(w/10);q++)ln(g,'rgba(60,20,10,.28)',1.2,[x+w/2,y-hh,x+6+q*10,y]);poly(g,'rgba(0,0,0,.14)',[[x+w/2,y-hh],[x+w+6,y],[x+w/2,y]]);rect(g,'#7a3a22',x-6,y-2,w+12,3)};
function casaG(g,x,w,h,i,k,o){o=o||{};const y0=GT-h;pila(g,x,GT+6,w,h+6,o.wall||'#e8dcc0',9);if(o.base)rect(g,'#a89a82',x-2,GT-14,w+4,20);tile(g,x,y0,w,Math.min(46,w*.34),o.roof);
 const rows=Math.max(1,Math.floor((h-36)/34)),cols=Math.max(1,Math.floor((w-16)/32));for(let r=0;r<rows;r++)for(let q=0;q<cols;q++){const wx=x+10+q*(w-20)/cols+((w-20)/cols-9)/2,wy=y0+14+r*34,on=lit(k,i*13+r*5+q);rect(g,'#2a2018',wx-1,wy-1,10,15);rect(g,on?'rgb(255,206,120)':'#4a3a2c',wx,wy,8,13);if(on)glow(g,wx+4,wy+6,16,'255,200,110',.3)}
 if(o.door!==0){ar(g,'#2a1810',x+w*.5-12,GT+4,24,38);rect(g,k>.3?'rgb(255,206,120)':'#5a4430',x+w*.5-7,GT-20,14,22)}}
const lit=P.lit;
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3),gap=[.3,.1,.2,.1,.3,.34,.3,.4][st-1];if(r<gap)return;
 if(st==1){if(r>.8){ulv(g,x+w*.5,gt+6,1.1+r*.5,TT);return}if(r>.66){muretto(g,x+10,gt+6,w-30,30);ulv(g,x+w*.5,gt+6,.9,TT);return}if(r>.58){cip(g,x+w*.5,gt+8,110);return}
  casaG(g,x+6,w-70,h-40,i,k,{wall:['#d49a58','#c88e4e','#dca468'][md(i,3)],roof:'#b4583a',base:1});return}
 if(st==2){if(r>.84){for(let q=0;q<4;q++)anf(g,x+20+q*18,gt+6,1);return}
  if(r>.5){/* tettoia aperta sul mare: colonne e tetto a due spioventi */rect(g,'#2a2230',x+6,gt-76,w-30,82);tile(g,x+6,gt-76,w-30,40,'#b4583a');for(let q=0;q<4;q++)col(g,x+10+q*(w-40)/3,gt+6,76,9,'#f2ece0','#d4ccb8');return}
  casaG(g,x+6,w-50,h-30,i,k,{wall:['#e8dcc0','#e0d2b4'][md(i,2)],roof:'#b4583a',base:1});return}
 if(st==3){if(r>.8){for(let q=0;q<3;q++)rect(g,'#f4eee0',x+10+q*34,gt-14-q*8,32,14+q*8);return}if(r>.7){ulv(g,x+w*.5,gt+6,1,TT);return}
  if(r>.5){for(let q=0;q<5;q++)ln(g,'#7a5a34',3,[x+10+q*30,gt+6,x+10+q*30,gt-80]);for(let q=0;q<3;q++)ln(g,'#8a6a40',3,[x+10,gt-q*28-10,x+130,gt-q*28-10]);return}
  casaG(g,x+6,w-40,h-30,i,k,{wall:['#f0e8d8','#e8dcc0'][md(i,2)],roof:'#b4583a',base:1});return}
 if(st==4){if(r>.82){plat(g,x+w*.5,gt+6,1.2,TT);return}if(r>.62){rect(g,'#3a3040',x+6,gt-70,w-30,76);for(let q=0;q<5;q++)col(g,x+12+q*(w-44)/4,gt+6,70,9);rect(g,'#d4c4a0',x,gt-82,w-18,12);return}
  casaG(g,x+6,w-44,h-40,i,k,{wall:['#e8dcc0','#d8c8a4','#e4d4b0','#d49a58'][md(i,4)],roof:'#b4583a',base:1});return}
 if(st==5){if(r>.8){cip(g,x+w*.4,gt+8,120);cip(g,x+w*.6,gt+8,100);return}if(r>.62){lauro(g,x+w*.5,gt+6,1.8);return}if(r>.5){muretto(g,x+6,gt+6,w-20,42,'#b0a088');return}
  casaG(g,x+6,w-60,h-50,i,k,{wall:['#f0e8d8','#e8dcc0','#e0d0b0'][md(i,3)],roof:'#b4583a',base:1});return}
 if(st==6){if(r>.6){pino(g,x+w*.5,gt+6,1.4+r*.5,TT);return}if(r>.46){el(g,'#8a7a62',x+50,gt+4,34,18);el(g,'#9a8a72',x+90,gt+4,22,12);return}
  poly(g,'#c8b888',[[x+10,gt+6],[x+60,gt-60],[x+110,gt+6]]);poly(g,'rgba(0,0,0,.18)',[[x+60,gt-60],[x+110,gt+6],[x+66,gt+6]]);ar(g,'#2a1c10',x+50,gt+6,20,34);if(k>.3)glow(g,x+60,gt-10,40,'255,170,70',.4);return}
 if(st==7){if(r>.6){plat(g,x+w*.5,gt+6,1.3+r*.3,TT);return}if(r>.46){ulv(g,x+w*.5,gt+6,1.1,TT);return}if(r>.4){for(let q=0;q<4;q++)rect(g,'#e8dcc0',x+10+q*22,gt-16,18,16);return}
  poly(g,['#e8dcc0','#d8c8a0','#c8a888'][md(i,3)],[[x+10,gt+6],[x+60,gt-54],[x+112,gt+6]]);poly(g,'rgba(0,0,0,.16)',[[x+60,gt-54],[x+112,gt+6],[x+66,gt+6]]);ar(g,'#2a1c10',x+52,gt+6,16,26);return}
 if(r>.7){cip(g,x+w*.5,gt+8,130);return}if(r>.5){torchF(g,x+50,gt+6);return}
 rect(g,'#a89a82',x+10,gt-30,70,36);rect(g,'#c8bca4',x+6,gt-34,78,6)}
const torchF=(g,x,y)=>{ln(g,'#6a4a28',3.4,[x,y,x,y-70]);poly(g,'#8a6a30',[[x-7,y-70],[x+7,y-70],[x+4,y-80],[x-4,y-80]]);const fl=Math.sin(TT*9+x)*1.6;poly(g,'rgba(255,140,40,.95)',[[x-5,y-80],[x,y-100+fl],[x+5,y-80]]);poly(g,'rgba(255,220,100,.95)',[[x-3,y-80],[x,y-92+fl],[x+3,y-80]]);glow(g,x,y-86,60,'255,170,70',.3+.35*A.getDK())};
function layerStreet(g,o,t){TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>100+hr(i*5)*60,170);each2(180,8,Z[1],Z[2],2,i=>110+hr(i*5)*50,170);each2(180,9,Z[2],Z[3],3,i=>110+hr(i*5)*50,170);each2(180,10,Z[3],Z[4],4,i=>100+hr(i*5)*50,170);
 each2(190,11,Z[4],Z[5],5,i=>100+hr(i*5)*40,170);each2(190,12,Z[5],Z[6],6,i=>90+hr(i*5)*40,170);each2(190,13,Z[6],Z[7],7,i=>90+hr(i*5)*40,170);each2(190,14,Z[7],Z[8],8,i=>90+hr(i*5)*50,160)}

/* ---- suolo: terra rossastra e sassosa, banchine del porto, lastre di marmo bianco, terra battuta e polvere, ghiaia chiara, erba secca e sassi, sabbia e polvere bianca, roccia chiara ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#a8683e','t'],[Z[1],Z[2],'#b8a888','q'],[Z[2],Z[3],'#e0d6c2','m'],[Z[3],Z[4],'#c8a870','d'],[Z[4],Z[5],'#cdc2a6','g'],[Z[5],Z[6],'#a89a68','e'],[Z[6],Z[7],'#d8c498','s'],[Z[7],Z[8],'#b4aa94','r']];
 rect(g,'#e0d4b0',0,gt,480,3);
 const slabs=(x0,x1,ww,cw,rows,rh,k1,k2,seed)=>{for(let r=0;r<rows;r++){const yy=gt+7+r*rh,bw=cw+r*5,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*seed+r*7);rect(g,hh>.65?k1:hh>.3?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,rh-2);rect(g,k2,px+bw-2,yy,2,rh-2)}}};
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0),zw=z[1]-z[0];g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const pz=(q,m)=>z[0]+((q*m)%zw)-cam;
  if(z[3]=='t'){for(let r=0;r<8;r++)rect(g,r%2?'rgba(60,20,8,.14)':'rgba(255,200,160,.08)',x0,gt+10+r*17,x1-x0,6);for(let q=0;q<110;q++)dot(g,hr(q)>.5?'rgba(235,215,190,.55)':'rgba(90,50,30,.5)',pz(q,29),gt+8+hr(q*5)*140,1+hr(q)*2);for(let q=0;q<26;q++)el(g,'rgba(120,110,95,.5)',pz(q,83),gt+14+hr(q*3)*134,5+hr(q)*5,2.4)}
  if(z[3]=='q'){slabs(x0,x1,ww,64,3,22,'rgba(255,255,255,.14)','rgba(40,30,20,.28)',13);for(let r=0;r<4;r++){const yy=gt+78+r*18;rect(g,r%2?'#9a7a52':'#8a6a46',x0,yy,x1-x0,16);const bw=70,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++)rect(g,'rgba(30,18,8,.4)',s0+k*bw+(r*23%bw)-cam,yy,2,16)}for(let q=0;q<40;q++)el(g,'rgba(230,200,150,.5)',pz(q,41),gt+78+hr(q*3)*70,3+hr(q)*3,1)}
  if(z[3]=='m'){slabs(x0,x1,ww,68,6,24,'rgba(255,255,255,.28)','rgba(70,60,50,.28)',17);for(let q=0;q<50;q++)dot(g,'rgba(255,240,200,.3)',pz(q,23),gt+8+hr(q*5)*140,1+hr(q)*1.2);for(let q=0;q<5;q++){const px=pz(q,433);rect(g,'rgba(255,255,255,.5)',px,gt+40+hr(q)*90,60,5)}}
  if(z[3]=='d'){for(let r=0;r<7;r++)rect(g,r%2?'rgba(120,80,40,.1)':'rgba(255,230,170,.1)',x0,gt+8+r*20,x1-x0,10);for(let q=0;q<150;q++)dot(g,hr(q)>.5?'rgba(255,230,180,.5)':'rgba(110,70,30,.45)',pz(q,25),gt+6+hr(q*5)*144,1+hr(q)*1.6);for(let q=0;q<10;q++)rect(g,'rgba(120,80,40,.2)',pz(q,229),gt+30+hr(q)*100,40+hr(q)*40,5)}
  if(z[3]=='g'){slabs(x0,x1,ww,72,2,22,'rgba(255,255,255,.2)','rgba(60,40,30,.3)',19);for(let q=0;q<150;q++)dot(g,hr(q)>.5?'rgba(255,255,245,.55)':'rgba(120,100,70,.5)',pz(q,27),gt+34+hr(q*5)*116,1+hr(q)*1.6);for(let q=0;q<8;q++)lauroS(g,pz(q,331),gt+30+hr(q)*100)}
  if(z[3]=='e'){for(let r=0;r<8;r++)rect(g,r%2?'rgba(80,70,30,.12)':'rgba(255,230,150,.1)',x0,gt+8+r*17,x1-x0,8);for(let q=0;q<70;q++){const px=pz(q,31),py=gt+10+hr(q*5)*138;ln(g,'rgba(110,100,50,.6)',1,[px,py,px+Math.sin(t+q)*1.4,py-6])}for(let q=0;q<30;q++)el(g,'rgba(130,120,100,.6)',pz(q,59),gt+12+hr(q*3)*132,4+hr(q)*5,2.4);for(let q=0;q<6;q++)el(g,'rgba(100,140,170,.4)',pz(q,311),gt+60+hr(q)*60,16,3)}
  if(z[3]=='s'){for(let r=0;r<7;r++)rect(g,r%2?'rgba(200,170,110,.14)':'rgba(255,240,190,.1)',x0,gt+8+r*20,x1-x0,10);for(let q=0;q<150;q++)dot(g,hr(q)>.5?'rgba(255,250,230,.5)':'rgba(140,110,60,.35)',pz(q,25),gt+6+hr(q*5)*144,1+hr(q)*1.4);for(let q=0;q<22;q++){const px=pz(q,47),py=gt+12+hr(q*7)*130;ln(g,'rgba(90,130,50,.7)',1,[px,py,px+1,py-5]);ln(g,'rgba(90,130,50,.7)',1,[px+3,py,px+4,py-6])}}
  if(z[3]=='r'){slabs(x0,x1,ww,60,6,24,'rgba(255,255,255,.1)','rgba(20,10,30,.35)',23);for(let q=0;q<70;q++)dot(g,'rgba(230,220,200,.3)',pz(q,35),gt+10+hr(q*5)*140,1.1);for(let q=0;q<22;q++){const px=pz(q,53),py=gt+12+hr(q*7)*130;ln(g,'rgba(120,110,60,.6)',1,[px,py,px+Math.sin(t+q)*1.2,py-6])}}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1800,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const sg=cl((cam-18500)/900,0,1)*cl((21200-cam)/900,0,1);if(sg>.02)rect(g,'rgba(255,90,60,'+(.15*sg)+')',0,gt,480,150)}
const lauroS=(g,x,y)=>{el(g,'#3a7a44',x,y,9,5);el(g,'#2f6a3a',x+6,y-3,6,4)};
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- vita: gabbiani e delfini, rondini, falchi, avvoltoi e aquile, civette, capre, asini con le ceste, cani, gatti, passanti, cavalieri, pipistrelli di notte ---- */
function layerLife(g,o,t){const cam=o,xs=cam+240,hz=GT;
 const bird=(bx,by,s,w,c)=>{g.strokeStyle=c;g.lineWidth=s*1.9;g.beginPath();g.moveTo(bx-9*s,by+w);g.quadraticCurveTo(bx-4*s,by-4*s,bx,by);g.quadraticCurveTo(bx+4*s,by-4*s,bx+9*s,by+w);g.stroke()};
 /* gabbiani sul mare (Pireo e Sunio) */
 const gv=Math.max(cl((xs-2900)/500,0,1)*cl((5600-xs)/500,0,1),cl((xs-19600)/800,0,1)*cl((21600-xs)/600,0,1)*.7);if(gv>.05)for(let i=0;i<5;i++){const bx=((i*131+t*(24+i*4))%640)-80,by=60+hr(i*3)*110+Math.sin(t*1.6+i*2)*14,w=Math.sin(t*9+i)*3;g.globalAlpha=gv;bird(bx,by,1.1,w,'#f4f4f4');g.globalAlpha=1}
 /* rondini nelle prime zone */
 const rv=cl((7600-xs)/600,0,1)*cl((xs+300)/500,0,1);if(rv>.05)for(let i=0;i<4;i++){const bx=((i*150+t*(40+i*5))%620)-70,by=100+hr(i*7)*120+Math.sin(t*3+i)*24,w=Math.sin(t*14+i)*3;g.globalAlpha=rv;bird(bx,by,.9,w,'#1a1a26');g.globalAlpha=1}
 /* falchi, avvoltoi e aquile (l'uccello di Zeus) nel cielo di Delfi e di Olimpia */
 const kv=Math.max(cl((xs-10900)/500,0,1)*cl((13400-xs)/500,0,1),cl((xs-16300)/500,0,1)*cl((19000-xs)/500,0,1));if(kv>.05)for(let i=0;i<3;i++){const bx=((i*260+t*(14+i*3))%640)-80,by=50+hr(i*9)*70+Math.sin(t*.8+i*3)*10;g.globalAlpha=kv;bird(bx,by,1.7,2+Math.sin(t*2+i),'#3a2a1a');g.globalAlpha=1}
 /* civetta che torna a casa all'alba */
 const cv=cl(1-xs/1600,0,1);if(cv>.05){const bx=((t*30)%560)-40,by=130+Math.sin(t*2)*10;g.globalAlpha=cv;bird(bx,by,1.4,Math.sin(t*10)*3,'#6a4a30');g.globalAlpha=1}
 /* pipistrelli di notte */
 const bn=cl((xs-21200)/800,0,1);if(bn>.05)for(let i=0;i<5;i++){const bx=((i*97+t*(34+i*3))%560)-40,by=90+hr(i*5)*120+Math.sin(t*5+i)*18,w=Math.sin(t*14+i)*3.4;g.globalAlpha=bn;g.strokeStyle='rgba(10,8,20,.9)';g.lineWidth=2;g.beginPath();g.moveTo(bx-7,by+w);g.lineTo(bx-2,by-2);g.lineTo(bx,by+1);g.lineTo(bx+2,by-2);g.lineTo(bx+7,by+w);g.stroke();g.globalAlpha=1}
 /* capre e pecore sui pendii, cani, gatti, asini e passanti */
 each(o,520,31,(x,i,r)=>{const wx=cam+x,zz=zn(wx);A.setDK(nf(wx));
  if((zz==1||zz==5||zz==6)&&r<.3){capra(g,x+20,hz+44,1.1,t,1);capra(g,x+56,hz+50,1,t+1,-1)}
  if(zz==7&&r<.3){pecora(g,x+20,hz+44,1.2,t,1);pecora(g,x+54,hz+50,1.1,t+1,1)}
  if(zz>=1&&zz<=8&&r>.3&&r<.4)cane(g,x+60,hz+42,t,['#b8935a','#6a5a48','#d8c8a0'][md(i,3)]);
  if(zz>=2&&zz<=4&&r>.46&&r<.58)gatto(g,x+80,hz+46,t);
  if(zz==7&&r>.6&&r<.7)cavallo(g,x+60,hz+50,.6,t,md(i,2)?1:-1,'#7a5a3a')});
 each(o,430,57,(x,i,r)=>{const wx=cam+x,zz=zn(wx);if(r<.4)return;A.setDK(nf(wx));const dir=md(i,2)?1:-1,off=Math.sin(t*.18+i)*70,f=Math.cos(t*.18+i)*dir>0?1:-1;
  if(r>.82&&zz!=8)asino(g,x+off,hz+56,1,t+i,f);else gp(g,x+off,hz+54,t+i,{f:f,s:.5,kilt:['#f0e8d8','#d8c8a8','#b4583a','#2f6ab0','#e0c060'][md(i,5)],long:md(i,3)==0,robe:['#f0e8d8','#e0c060','#b4583a'][md(i,3)],skin:['#d0996c','#c88e64','#b87c54'][md(i,3)]})});A.setDK(0);g.globalAlpha=1}

/* ---- personaggi ---- */
const NP=(id,x,o,acc)=>({id,name:NAME[id],x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));const c=q=>tn(o[q]);fig(g,px,y,t,Object.assign({f,s:1},o,{skin:c('skin'),top:c('top'),bot:c('bot'),hair:c('hair'),acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:GREET[id]}}});
const barba=(g,b,col,n,rows)=>{for(let r=0;r<rows;r++)for(let q=r;q<n-r;q++)dot(g,col,-3+q*2.2,-92+b+r*4.6+(q%2)*1.6,3.2)};
const tunica=(g,b,c)=>{poly(g,c,[[-12,-52+b],[12,-52+b],[15,-24],[-15,-24]]);rect(g,'#5a3a22',-12,-54+b,24,5)};
const piedi=(g,c)=>{el(g,c,-4,-1,8,4);el(g,c,8,-1,8,4)};
const npcs=[
 /* Nicarco: chitone corto di lana grezza annodato su una spalla, cappello di paglia a tesa larga, mani nere d'olio, lunga canna, sacco a tracolla */
 NP('gr_nicarco',850,{skin:'#b8845c',top:'#c8b898',bot:'#b8845c',hair:'#2a1a10',s:1.0},(g,b,t)=>{tunica(g,b,'#c8b898');poly(g,tn('#a8987a'),[[-13,-90+b],[-4,-90+b],[2,-60+b],[-14,-56+b]]);el(g,tn('#d8c070'),0,-112+b,22,4.6);dot(g,tn('#d8c070'),0,-113+b,9.4);rect(g,tn('#a88a38'),-9.4,-114+b,18.8,2.4);
  ln(g,'#7a5a30',2.6,[12,-6,22,-150]);ln(g,'#6a5a3a',2,[-12,-86+b,10,-50]);el(g,tn('#8a7a5a'),-2,-58+b,9,7);dot(g,'#2a2018',16,-80,2.4);piedi(g,'#6a4a2a')}),
 /* Eumene: chitone corto di lana, fazzoletto in testa, spalle larghe, cuscino di cuoio sotto il braccio, sacchetto con pane e cipolle alla cintura */
 NP('gr_eumene',4230,{skin:'#c08660',top:'#d8c8a0',bot:'#c08660',hair:'#1a120c',s:1.04},(g,b,t)=>{tunica(g,b,'#d8c8a0');rect(g,tn('#c8402a'),-12,-111+b,24,5);poly(g,tn('#c8402a'),[[10,-110+b],[18,-104+b],[12,-102+b]]);rect(g,tn('#8a5a38'),12,-76,18,10);rect(g,'rgba(0,0,0,.2)',12,-70,18,2);el(g,tn('#c8a468'),-8,-52,5,6);piedi(g,'#5a3a22')}),
 /* Fidia: tunica corta macchiata di polvere di marmo e di cera, capelli ricci e barba curata, benda sulla fronte, scalpelli e mazzuolo alla cintura, squadra e compasso */
 NP('gr_fidia',6980,{skin:'#c8906a',top:'#e8e0cc',bot:'#c8906a',hair:'#3a2a1a',s:1.02},(g,b,t)=>{tunica(g,b,'#e8e0cc');for(let q=0;q<5;q++)dot(g,'rgba(255,255,255,.6)',-8+q*5,-70+b+(q%2)*6,2);barba(g,b,'#3a2a1a',7,2);rect(g,tn('#c8402a'),-12,-111+b,24,3);for(let q=0;q<6;q++)dot(g,tn('#3a2a1a'),-10+q*4,-116+b,3);
  ln(g,'#8a8a92',2.2,[8,-56,14,-40]);ln(g,'#8a8a92',2.2,[4,-56,8,-38]);rect(g,'#6a4a28',10,-58,4,8);ln(g,'#7a5a30',2.6,[14,-74,24,-96]);poly(g,'#8a8a92',[[22,-98],[30,-96],[28,-88],[22,-90]]);ln(g,'#6a4a28',2,[-12,-76,-22,-60,-14,-56]);piedi(g,'#5a3a22')}),
 /* Socrate: naso schiacciato, occhi sporgenti, pancia rotonda, barba incolta, mantello consunto, piedi scalzi, bastone, sorriso furbo */
 NP('gr_socrate',8800,{skin:'#c8906a',top:'#b8a888',bot:'#b8a888',hair:'#5a4a3a',long:1,s:1.0},(g,b,t)=>{poly(g,tn('#a89878'),[[-14,-92+b],[10,-92+b],[16,-44],[-16,-40]]);el(g,tn('#b8a888'),2,-60+b,15,16);barba(g,b,'#7a7a74',6,2);el(g,tn('#c8906a'),8,-101+b,5,3.4);dot(g,'#f4f0e4',6,-103+b,2.2);dot(g,'#14110f',7,-103+b,1.1);ln(g,'#14110f',1,[5,-96+b,10,-97+b]);
  ln(g,'#6a4a28',3,[14,-4,16,-120]);el(g,tn('#c8906a'),-4,-2,8,3);el(g,tn('#c8906a'),9,-2,8,3)}),
 /* Aristonice: lunga veste bianca da fanciulla, corona e ramo d'alloro, capelli grigi raccolti, sguardo calmo e profondo */
 NP('gr_aristonice',12010,{skin:'#d0996c',top:'#f8f4ea',bot:'#f8f4ea',hair:'#9a9a9a',long:1,s:1.0},(g,b,t)=>{rect(g,tn('#2f6a3a'),-12,-90+b,24,3);rect(g,tn('#c8a030'),-13,-62+b,26,2);for(let q=0;q<7;q++)el(g,tn('#2f7a3a'),-10+q*3.6,-113+b,3.4,2);dot(g,tn('#9a9a9a'),-9,-98+b,4.4);
  ln(g,'#5a4028',2,[12,-6,18,-100]);for(let q=0;q<5;q++){el(g,tn(q%2?'#2f7a3a':'#3a8a44'),16+q%2*5,-96-q*8,5,2.6)}}),
 /* Leonida: elmo di bronzo con cimiero, mantello rosso, corazza di bronzo, scudo rotondo e lancia, lunghi capelli pettinati e barba corta */
 NP('gr_leonida',14420,{skin:'#b8805a',top:'#b8903a',bot:'#b8805a',hair:'#3a2a1a',s:1.08},(g,b,t)=>{tunica(g,b,'#c8402a');poly(g,tn('#c8402a'),[[-13,-92+b],[-26,-50],[-12,-44],[-6,-86+b]]);poly(g,tn('#b8903a'),[[-12,-90+b],[12,-90+b],[11,-56+b],[-11,-56+b]]);for(let q=0;q<3;q++)rect(g,'rgba(0,0,0,.18)',-11,-82+b+q*10,22,1.6);
  el(g,tn('#b8903a'),1,-111+b,13,8);rect(g,tn('#b8903a'),-12,-110+b,26,4);poly(g,tn('#c8402a'),[[-6,-118+b],[0,-136+b],[10,-134+b],[13,-118+b]]);barba(g,b,'#3a2a1a',5,1);
  ln(g,'#5a3e22',2.6,[18,-4,20,-170]);poly(g,'#9a9aa2',[[18,-170],[23,-170],[20,-184]]);scudoN(g,10,-60,19,'#a8503a');piedi(g,'#5a3a22')}),
 /* Milone: corpo possente, mantello bianco su una spalla, corona di ulivo selvatico, nastri rossi al braccio, boccetta d'olio e strigile, mani enormi */
 NP('gr_milone',18010,{skin:'#c8906a',top:'#c8906a',bot:'#d49a58',hair:'#2a1a10',s:1.14},(g,b,t)=>{poly(g,tn('#d49a58'),[[-13,-52+b],[13,-52+b],[16,-24],[-16,-24]]);rect(g,tn('#8a5a38'),-13,-54+b,26,4);poly(g,tn('#c8906a'),[[-14,-92+b],[14,-92+b],[15,-52+b],[-15,-52+b]]);poly(g,tn('#f4eee0'),[[-14,-92+b],[-2,-94+b],[8,-56+b],[-16,-52+b]]);
  for(let q=0;q<7;q++)el(g,tn('#5a8a3a'),-10+q*3.6,-113+b+Math.abs(q-3)*.8,3.2,2.2);rect(g,tn('#c8402a'),14,-76,5,3);rect(g,tn('#c8402a'),14,-72,5,3);dot(g,tn('#c8906a'),24,-62,6);el(g,tn('#c8a030'),24,-76,3,6);ln(g,'#8a8a92',2,[26,-56,32,-46]);piedi(g,'#5a3a22')}),
 /* Omero: lunga tunica grigia con mantello, barba bianca, occhi chiusi, lira con poche corde, bastone, mani lunghe e sottili; accanto uno sgabello e la torcia */
 NP('gr_omero',20000,{skin:'#c8a07a',top:'#8a8a92',bot:'#8a8a92',hair:'#e8e8e8',long:1,s:1.0},(g,b,t,)=>{poly(g,tn('#6a6a74'),[[-14,-92+b],[10,-92+b],[14,-56+b],[-16,-52+b]]);barba(g,b,'#f0f0f0',7,3);ln(g,'#2a1a10',1.2,[5,-103+b,9,-103+b]);
  poly(g,tn('#a8683a'),[[8,-60],[24,-64],[26,-44],[10,-40]]);for(let q=0;q<4;q++)ln(g,'rgba(240,230,200,.8)',.8,[11+q*4,-62,12+q*4,-42]);ln(g,'#8a6a28',2,[10,-60,14,-78]);ln(g,'#8a6a28',2,[24,-64,22,-78]);ln(g,'#5a3e22',3,[-22,-4,-20,-110]);
  rect(g,tn('#7a5a34'),-44,-34,24,4);rect(g,tn('#5a3e22'),-42,-30,3,30);rect(g,tn('#5a3e22'),-26,-30,3,30);piedi(g,'#4a3a2a')})
];
const scudoN=(g,x,y,r,c)=>{dot(g,'#6a4a28',x,y,r+1.4);dot(g,tn(c),x,y,r);dot(g,'rgba(255,255,255,.12)',x-r*.3,y-r*.3,r*.5);dot(g,tn('#b8903a'),x,y,r*.28)};

/* ---- oggetti lungo il percorso: [nome in elementi.js, posizione nel mondo, parametro] ---- */
const props=[
 /* zona 1 · gli uliveti dell'Attica */
 ['grtarga',120,'ATTICA'],['grulivo',270,1.2],['grulivi',400],['grcipresso',760,110],['grrete',820],['grraccolta',1150],['grulivo',1560,1.1],['grorzo',1850],['grpino',2160,1],['grcasa',2400],
 /* zona 2 · il Pireo */
 ['grtarga',2790,'PIREO'],['grporto',3250],['grtorcia',3640,0],['grtettoie',3900],['grtrireme',4650],['grmura',5150],
 /* zona 3 · l'Acropoli */
 ['grtarga',5490,'ACROPOLI'],['grpropilei',5900],['grpartenone',6650],['gratena',7350],['grulivoatena',7800],
 /* zona 4 · l'Agorà, la Pnice, il teatro */
 ['grtarga',8100,'AGORÀ'],['grermes',8330,0],['gragora',8550],['grermes',8990,0],['grmercato',9250],['grfonte',9640,0],['grpnice',9900],['grteatro',10450],
 /* zona 5 · Delfi */
 ['grtarga',10940,'DELFI'],['grviasacra',11250],['grtempio',11950],['grstatua',12280,1],['grcastalia',12650],['grstadiodelfi',13200],
 /* zona 6 · le Termopili */
 ['grtarga',13640,'TERMOPILI'],['grpasso',14000],['grmuro',14700],['grcampo',15350],['grsentiero',15950],
 /* zona 7 · Olimpia */
 ['grtarga',16290,'OLIMPIA'],['grbosco',16750],['grzeus',17500],['grstatua',17960,1.1],['grstadio',18250],['grpalestra',18900],
 /* zona 8 · Capo Sunio */
 ['grtarga',19330,'SUNIO'],['grsunio',19800],['grtripode',20260,1.2],['grmare',20550],['grvele',21250],['grtorcia',21700,0],['grstelle',22000],['grtorcia',22330,0],['grvarco',W1-130]];

const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'greci',name:'Greci · Dagli uliveti dell’Attica alle stelle di Capo Sunio',width:W1,sky:['#7a80b8','#f2a8b0','#ffd0a4'],gt:372,gr:['#a8683e','#7a4a2c'],chord:[196,261.6,293.7,392],amb:'#ffe8c0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerLife)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da greci.txt) --- */
(function(){
const TOPX_GR={
gr_nicarco:[
["Chi sei e che fai?","Nicarco, quarantatré anni, contadino. Ho un pezzo di terra con gli ulivi di mio nonno, una moglie, Melissa, e tre figli. Faccio olio, orzo, un po’ di vino e di miele: di soldi ne vedo pochi, ma a casa mia da mangiare non manca mai."],
["Perché l’ulivo è così importante?","Perché l’olio per noi è come il pane: si mangia, si brucia nelle lampade, si mette sulla pelle e si usa per i profumi e per curare le ferite. Per questo si dice che l’ulivo è un dono di Atena. Chi ne ha tanti è ricco, a modo suo."],
["Cos’è la storia di Atena e dell’ulivo?","Dicono che Atena e Poseidone litigarono per proteggere la città. Poseidone fece sgorgare una fonte salata dalla roccia dell’Acropoli, Atena fece spuntare un ulivo, e gli dèi preferirono il suo regalo: ecco perché la città si chiama Atene. Chi sale lassù, dicono, può ancora vedere l’albero e la fonte."],
["Come si raccolgono le olive?","In autunno, con lunghe canne: si battono i rami e le olive cadono sulle reti. Poi le mettiamo nelle ceste e le portiamo al frantoio, dove una macina le schiaccia e un torchio a leva ne spreme l’olio. L’olio riposa nelle giare, e la mia schiena si lamenta fino a primavera."],
["Quanto ci mette un ulivo a crescere?","Tanti anni, e poi dura secoli. Per questo si dice che chi pianta un ulivo lavora per i nipoti. Mio padre piangeva per gli alberi quando i Persiani hanno bruciato l’Attica, nel 480 a.C.: ma dicono che quello sacro, sull’Acropoli, abbia rimesso un germoglio già il giorno dopo. Gli ulivi sono testardi come noi."],
["Cosa si coltiva oltre alle olive?","Soprattutto orzo, perché il grano vuole terra migliore della nostra. Poi fichi, vite, lenticchie, fave, cipolle e un po’ di verdura. Il pane di orzo è quello di tutti i giorni; il grano per il pane bianco la città lo compra e lo fa arrivare dal mare."],
["Come si paga qui?","In campagna si baratta ancora molto, ma in città si usano monete d’argento: le dracme e le famose monete con la civetta di Atena. L’argento viene dalle miniere del Laurio, nel sud dell’Attica, dove lavorano tanti schiavi, e non è un lavoro da invidiare. Una dracma è più o meno la paga di un giorno."],
["Cosa mangiate e bevete?","A colazione pane intinto nel vino; a mezzogiorno qualcosa di leggero, come olive, formaggio e fichi; la sera il pasto grande, il deipnon, con zuppa di legumi, pesce e uova. La carne solo alle feste, quando c’è un sacrificio. Il vino si allunga sempre con acqua: berlo puro è da barbari, o da ubriaconi."],
["Com’è la tua casa?","Mattoni di fango su un basamento di pietra, tetto di tegole e un cortile con l’altare e un fico. Il focolare è sacro a Estia: la prima e l’ultima offerta della giornata vanno a lei. Le donne di casa filano e tessono la lana, e quasi tutti i vestiti li facciamo da noi."],
["Come vi vestite?","Con il chitone, una tunica fissata sulle spalle e stretta in vita; se fa freddo ci mettiamo sopra l’himation, un grande mantello. Le donne portano una tunica lunga, il peplo. In campagna molti vanno scalzi, e in testa ci vuole il petaso, il cappello di paglia: il sole dell’Attica non perdona."],
["Dove vado dopo?","Scendi verso il mare, fino al Pireo, il porto di Atene. Cerca Eumene, un rematore di trireme: di mattina parla poco, ma di navi non la smette mai. Digli che ti manda Nicarco, quello degli ulivi."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e che Atena ti protegga i raccolti, anche se non hai un campo. Se ripassi, ti offro pane, olive e un po’ di olio nuovo. Chàire, hygíeia, eudaimonía: gioia, salute e buona sorte!"]
],
gr_eumene:[
["Chi sei e che fai?","Eumene, cinquantaquattro anni, rematore. Appartengo alla classe più umile di Atene, i teti: niente terra, solo braccia. In cambio la città mi paga quando navigo e mi lascia votare in assemblea come tutti i cittadini, e quello vale più dell’oro."],
["Com’è fatta una trireme?","Lunga circa trentasette metri e larga appena sei, bassa sull’acqua e leggerissima. Siamo centosettanta rematori su tre file sfalsate: i più in alto, i traniti, hanno i remi più lunghi; poi gli zigiti; i talamiti stanno in basso, con il naso a un palmo dall’acqua. I remi sono lunghi circa quattro metri."],
["Chi comanda la nave?","Il trierarca, un cittadino ricco che paga la nave e la comanda. Poi c’è il timoniere a poppa, con i due remi-timone, e il celeuste, che batte il ritmo con la voce, aiutato da un flautista. Si rema tutti insieme, a tempo, e chi sbaglia riceve gli sguardi di centosessantanove compagni."],
["Perché le navi hanno gli occhi dipinti?","Perché la nave guardi dove va e porti fortuna: due occhi grandi sulla prua, per vedere gli scogli e tenere lontano il malocchio. La nave è quasi una persona: ha un nome, spesso femminile. La mia si chiama come una dea, ma non te lo dico: porta male."],
["Mangiate e dormite a bordo?","Quasi mai: la trireme è troppo stretta, e la sera si tira a riva e si dorme sulla spiaggia. Si mangia orzo, cipolle, olive, formaggio e pesce, e si beve vino allungato: con la fatica che si fa, si suda parecchio. Prima di salpare si versa del vino in mare e si canta un inno agli dèi."],
["Come si combatte?","Con il rostro: si parte a tutta velocità e si colpisce il nemico di fianco, per sfondargli lo scafo. A bordo ci sono anche dieci soldati e quattro arcieri. Noi rematori restiamo ai remi: se la nave si ferma, siamo spacciati."],
["Cos’è successo a Salamina?","Nel 480 a.C. i Persiani di Serse invadono la Grecia e bruciano Atene, ma noi abbiamo lasciato la città e ci siamo imbarcati. A Salamina, in un braccio di mare stretto, siamo poco meno di quattrocento navi greche contro una flotta persiana molto più grande, che si ostacola da sola. Io a vent’anni remavo e basta: ma quel giorno siamo diventati eroi."],
["Chi ha voluto tutte queste navi?","Temistocle. Qualche anno prima, nel 483, nelle miniere del Laurio hanno trovato un filone d’argento ricchissimo: invece di dividerlo fra i cittadini, lui ha convinto l’assemblea a costruire una flotta di duecento triremi. All’inizio lo hanno preso per matto, poi per un salvatore. È stato lui a fortificare il Pireo."],
["Com’è il Pireo?","Una confusione meravigliosa: grida, pece, pesce, gente che parla lingue diverse. È disegnata a scacchiera da Ippodamo di Mileto, e le Lunghe Mura, circa sei chilometri, la collegano ad Atene. Qui vivono molti stranieri, i meteci: lavorano e pagano le tasse, ma non votano."],
["Come passate il tempo quando non si naviga?","Ci si allena ai remi nel porto, si ripara il fasciame, e la sera si va a teatro o a bere con i compagni. Nei giorni di festa si va ai santuari del porto a ringraziare gli dèi del mare. E c’è sempre qualcuno che gioca ai dadi e perde la paga prima di averla presa."],
["Dove vado dopo?","Risali lungo le Lunghe Mura fino ad Atene e poi sull’Acropoli: lì Fidia sta finendo una dea che vale un tesoro. Chiedigli di Atena, ma non toccare niente: l’oro è pesato, e lo scultore ha l’occhio lungo."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati: chi rema a tempo con gli altri arriva sempre in porto. Se ripassi, ti faccio sedere al mio banco, ma se sbagli il ritmo ti tocca pagare da bere. Chàire, hygíeia, eudaimonía!"]
],
gr_fidia:[
["Chi sei e che fai?","Fidia, figlio di Carmide, scultore e direttore dei lavori artistici dell’Acropoli per conto di Pericle. Non scolpisco da solo: ho una grande bottega, con allievi e collaboratori, fra cui mio nipote Panaino, pittore. Una statua è un lavoro di squadra, anche se poi ci mettono sopra solo il mio nome."],
["Come nasce il Partenone?","Ictino e Callicrate lo progettano, io guido gli scultori. Cominciamo nel 447 a.C., il tempio è finito nel 438 e le decorazioni nel 432. Il marmo viene dal monte Pentelico, a nord della città, e arriva qui su carri trainati da buoi."],
["Chi paga tutto questo?","Si usa l’argento della Lega di Delo, l’alleanza di città greche guidata da Atene. C’è chi dice che Pericle usi i soldi degli alleati per abbellire la sua città, e chi si arrabbia: se ne discute da anni. Io faccio le statue, e lascio la politica a chi ha la voce più forte."],
["Come lo fate così perfetto?","Una colonna perfettamente dritta all’occhio sembra più sottile al centro: allora la facciamo gonfiare un pochino, e curviamo appena il pavimento. Sono piccole correzioni che quasi nessuno nota, ma che fanno sembrare tutto più vivo. Si dice che l’arte sia l’inganno più onesto che c’è."],
["Il tempio è bianco?","Non come lo vedi adesso: rilievi, frontoni e fregio sono dipinti di rosso, di blu e di altri colori, e alcune parti hanno inserti di metallo. Chi verrà dopo di noi vedrà solo il marmo bianco e penserà che sia sempre stato così. Che peccato, e che sorpresa, quando lo capiranno."],
["Cosa sono quei rilievi in alto?","Un fregio lungo circa centosessanta metri che gira intorno alla parte alta del muro interno: cavalieri, carri, giovani con gli animali, fanciulle con le offerte. Per molti studiosi è la processione delle Panatenee; altri non ne sono sicuri. Io dico solo che ogni cavallo ha il suo carattere."],
["Parlami della statua di Atena.","Alta circa dodici metri, d’oro e d’avorio su un’anima di legno, dedicata nel 438 a.C.: la veste è d’oro, in lastre che si possono togliere e pesare. Quando mi hanno accusato di aver rubato dell’oro, Pericle le ha fatte pesare, e non mancava niente. Davanti c’è una vasca d’olio, che tiene l’avorio umido e fa riflettere la dea."],
["È vero che hai avuto dei guai?","Dicono che sullo scudo della dea abbia messo due figure che somigliano a me e a Pericle, e quella è un’accusa di empietà. Secondo Plutarco finirò in prigione; altri dicono che andrò a lavorare a Olimpia. Il tempo qui si piega, ma non so come va a finire: so solo che il marmo resta."],
["Cosa farai a Olimpia?","Dicono che là farò la mia opera più grande: uno Zeus seduto, alto circa dodici metri, d’oro e d’avorio, che i Greci metteranno fra le meraviglie del mondo. Un giorno troveranno la mia bottega, con stampi e una tazza con scritto \"sono di Fidia\", anche se qualcuno dubita che sia vera. Anche i vasi, a volte, ci prendono in giro."],
["Come lavorate il marmo e il bronzo?","Il marmo si sbozza con la punta di ferro, si rifinisce con scalpelli più sottili, poi si leviga con raspe e sabbia. Il bronzo si fa a cera persa: un modello di cera, rivestito di argilla; si scioglie la cera e si cola il metallo al suo posto. Gli operai sono cittadini, stranieri e schiavi, e i più bravi guadagnano circa una dracma al giorno."],
["Dove vado dopo?","Scendi nell’Agorà: c’è un uomo con il naso schiacciato e lo sguardo da sileno che ferma i passanti per fargli domande. Si chiama Socrate, ed era figlio di uno scalpellino, come me, ma ha cambiato mestiere. Fa più domande lui che io colpi di scalpello."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando guardi un tempio ricordati che dietro ogni colonna c’è una squadra di gente col mal di schiena. Se ripassi, ti faccio provare lo scalpello: ma non sul Partenone. Chàire, hygíeia, eudaimonía!"]
],
gr_socrate:[
["Chi sei e che fai?","Socrate, ateniese, figlio di uno scalpellino e di una levatrice, Fenarete. Anch’io da giovane ho lavorato la pietra, poi ho smesso e ho fatto il soldato a Potidea, a Delio e ad Anfipoli. Oggi vivo povero con mia moglie Santippe e i nostri tre figli, e il mio mestiere è parlare."],
["Perché fai tante domande?","Perché quasi nessuno sa davvero cosa sia il coraggio, la giustizia o la virtù, ma tutti credono di saperlo. Io chiedo, loro rispondono, e poi vediamo se la risposta regge. Non faccio pagare lezioni come i sofisti, e per questo sono sempre povero."],
["Cosa c’entra l’oracolo di Delfi?","Un mio amico, Cherefonte, ha chiesto alla Pizia se qualcuno fosse più saggio di me, e lei ha risposto di no. Ci ho pensato a lungo: forse sono il più saggio solo perché so di non sapere. Da allora metto alla prova chi si crede esperto, e non tutti l’hanno presa bene."],
["Come funziona la democrazia ad Atene?","I cittadini maschi adulti si riuniscono sulla Pnice, circa quaranta volte l’anno, e votano per alzata di mano. Per i giudici e per molti incarichi si estrae a sorte, con il kleroterion, e con l’ostracismo si può esiliare per dieci anni qualcuno scrivendo il suo nome su un coccio. Ma le donne, gli stranieri e gli schiavi non votano: è una democrazia, ma di una parte di noi."],
["Com’è il mercato?","Un’esplosione: pesce, fichi, olio, vasi, stoffe, e tutti che gridano. Si racconta che io passi tra i banchi dicendo: quante cose ci sono di cui non ho bisogno. Si paga con le monete d’argento con la civetta; una dracma vale sei oboli."],
["Come funzionano i tribunali?","Si giudica con giurie grandi, spesso di cinquecentouno cittadini estratti a sorte, che ricevono una paga giornaliera, tre oboli. Chi parla ha un tempo misurato con un orologio ad acqua: quando l’acqua finisce, il discorso finisce. Poi si vota subito, con gettoni, e non si può fare appello."],
["È vero che ti hanno preso in giro a teatro?","Sì: nelle Nuvole, la commedia di Aristofane, mi mettono in un cesto appeso, a studiare il cielo e a insegnare a imbrogliare. Si racconta che a teatro mi sia alzato in piedi tra il pubblico, per farmi guardare e ridere con gli altri. Io lo prendo come un complimento: nessuno scrive commedie su chi non conta."],
["Come vi divertite la sera?","Con il simposio: dopo cena si beve vino allungato con acqua, sdraiati sui letti, e si discute di tutto, d’amore, di politica, di cosa sia la bellezza. Partecipano uomini liberi e donne di compagnia, musiciste e danzatrici; le mogli restano a casa. Un mio allievo, Platone, ne farà un libro: io non scrivo niente, e per questo mi ricordano gli altri."],
["Come studiano i ragazzi?","Vanno a scuola dal maestro di lettere e di conti, dal maestro di musica che insegna la lira, e dal maestro di ginnastica in palestra, accompagnati da uno schiavo, il pedagogo. Si imparano a memoria i versi di Omero. Le ragazze imparano a casa dalla madre: filare, tessere, gestire la casa."],
["Cosa ti succederà?","Mi accusano di empietà e di corrompere i giovani, e sarò giudicato da cinquecentouno cittadini. Dicono che finirà male, con una condanna e la cicuta, il veleno con cui Atene fa morire i condannati. Se così sarà, lo accetterò: ho quasi settant’anni e ho sempre detto la verità."],
["Dove vado dopo?","A Delfi, a nord-ovest, dove sta la Pizia: è lì che tutta la mia storia è cominciata. Ricordati la frase incisa sul tempio, \"nulla di troppo\": vale anche per le domande, ma non troppo spesso."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e continua a domandare: una vita senza domande non vale la pena di essere vissuta. Se ripassi, te ne faccio altre cento. Chàire, hygíeia, eudaimonía!"]
],
gr_aristonice:[
["Chi sei e che fai?","Aristonice, la Pizia di questi anni. Sono una donna del posto, scelta fra le donne di Delfi, non più giovane e di vita onesta; la tradizione vuole che mi vesta da fanciulla. Servo il dio per tutta la vita, insieme ad altre sacerdotesse e ai sacerdoti, che trascrivono e interpretano le risposte."],
["Come funziona una consultazione?","Il settimo giorno del mese mi purifico alla fonte Castalia, brucio foglie di alloro e orzo, e mi siedo su un tripode nella stanza più interna del tempio. Chi consulta pone la domanda, i sacerdoti me la riferiscono, io rispondo, e loro la rendono comprensibile, spesso in versi. Il dio parla, io presto la voce."],
["Perché non d’inverno?","Perché si racconta che Apollo vada per tre mesi nel paese degli Iperborei, un popolo felice ai confini del mondo. Al suo posto a Delfi regna Dioniso, il dio del vino, che qui ha la sua tomba. Così le consultazioni sono in nove mesi dell’anno."],
["Chi era Pitone?","Un serpente mostruoso che viveva qui, figlio della Terra. Apollo lo uccise con le sue frecce e si prese il posto: il mio titolo, Pizia, viene da lì, e i Giochi Pitici ricordano la sua vittoria. Un’altra storia dice che Zeus lasciò volare due aquile dai due capi del mondo e che si incontrarono qui: per questo Delfi è il centro."],
["È vero che senti un odore dolce che esce dalla roccia?","Gli antichi lo chiamano pneuma, un’aria che sale da una fessura sotto il tempio. Un giorno, dicono, alcuni studiosi troveranno due faglie e dei gas sotto il tempio e penseranno che mi facessero cadere in trance; altri non sono d’accordo. Io so solo che per me è fatica, e che il dio parla."],
["Cosa vi chiedono i pellegrini?","Se sposarsi, se partire per mare, dove fondare una colonia, quale dio onorare, come purificarsi da una colpa. Molte città greche fondano le loro colonie dopo aver consultato Delfi: per questo il nostro nome è conosciuto in tutto il Mediterraneo. Una risposta di Delfi è un consiglio, non un ordine, ma pochi hanno il coraggio di ignorarlo."],
["Le tue risposte sono sempre chiare?","Quasi mai, e di proposito: il dio dice la verità, ma bisogna saperla leggere. Il re Creso di Lidia, ormai da tempo, chiese se doveva attaccare i Persiani: la risposta dice che, se avesse attraversato il fiume Halys, avrebbe distrutto un grande impero. L’impero distrutto fu il suo."],
["Cosa c’è scritto sul tempio?","\"Conosci te stesso\" e \"Nulla di troppo\", e poi una grande E che nessuno sa spiegare: ognuno ha la sua teoria. A me piace pensare che siano consigli per chi entra con troppe domande e troppo poca pazienza."],
["Cosa portano i pellegrini?","Doni di ogni tipo: tripodi di bronzo, statue, offerte d’oro. Le città costruiscono i \"tesori\", piccoli edifici di marmo per custodirle: quello degli Ateniesi è di marmo di Paro, quello dei Sifni ha un fregio meraviglioso. Chi consulta paga una tassa e offre una focaccia sacra, e alcune città hanno il diritto di passare avanti."],
["Com’è la vita a Delfi?","Si vive di accoglienza: locande, venditori di offerte, guide che raccontano le storie del santuario, cuochi che preparano la carne dei sacrifici, che dopo il rito si mangia. D’inverno qui fa freddo: siamo in montagna, e il Parnaso si copre di neve. Ma l’aria di Delfi, quando c’è il sole, non ha uguali."],
["Dove vado dopo?","Verso nord-est, fino al passo delle Termopili, fra il monte e il mare. Gli Spartani mi hanno chiesto come finirà la guerra contro i Persiani, e la risposta è stata che o cade Sparta o muore un loro re. Il re Leonida ha scelto: vai a salutarlo, e con rispetto."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e conosci te stesso: è la risposta più difficile che io abbia mai dato. Se ripassi, ti offro una foglia d’alloro da portare con te. Chàire, hygíeia, eudaimonía!"]
],
gr_leonida:[
["Chi sei e che fai?","Leonida, figlio di Anassandrida, della famiglia degli Agiadi, re di Sparta da circa dieci anni. A Sparta i re sono due, di due famiglie diverse, e comandano l’esercito in guerra. Ero il fratello minore del re Cleomene, e per questo ho fatto l’agogé come tutti gli altri ragazzi."],
["Cos’è l’agogé?","L’educazione spartana: dai sette anni i ragazzi lasciano casa e vivono in gruppi, con un solo mantello, imparando a sopportare freddo, fame e fatica, a obbedire e a parlare poco. Chi supera tutto, verso i trent’anni, diventa cittadino a pieno diritto. Chi non ce la fa, resta fuori."],
["Perché parlate così poco?","Siamo laconici, dal nome della nostra regione, la Laconia: poche parole, e dritte. Quando Serse ci ha chiesto di consegnare le armi, si racconta che io abbia risposto con due parole: molòn labé, \"vieni a prenderle\". Non è per superbia: è che le parole inutili, a Sparta, non si pagano."],
["Cosa mangiate?","Gli uomini mangiano insieme ogni giorno, nelle sissizie, a gruppi di una quindicina, e ognuno porta la sua parte di farina d’orzo, formaggio, fichi e vino. Il piatto famoso è il brodo nero, fatto con carne di maiale, aceto e sale. I forestieri dicono che, dopo averlo assaggiato, si capisce perché gli spartani non temono la morte."],
["Com’è Sparta?","Non ha mura: le nostre mura sono gli uomini. Non usiamo monete d’argento ma barre di ferro, pesanti e scomode, così nessuno si arricchisce. I campi li lavorano gli iloti, che appartengono alla comunità e non sono liberi; artigiani e mercanti sono i perieci, abitanti liberi ma senza diritti politici. Non è un sistema tenero, e noi non lo raccontiamo come tale."],
["E le donne spartane?","Si allenano, corrono, lanciano il giavellotto, possono possedere terra e gestire i beni di casa: hanno più libertà che altrove in Grecia. Mia moglie Gorgo, figlia di mio fratello Cleomene, ha la risposta pronta: quando una straniera le ha chiesto perché le spartane comandino gli uomini, ha risposto che solo loro mettono al mondo veri uomini. Almeno, così si racconta."],
["Perché siete qui alle Termopili?","Perché questo passo è una porta: \"Termopili\" vuol dire \"porte calde\", per le sorgenti. Ci siamo schierati dietro il muro dei Focesi, circa settemila greci da molte città: trecento spartani, e poi Tespiesi, Corinzi, Tegeati e altri. I trecento li ho scelti fra gli uomini che hanno già un figlio vivo, perché la loro famiglia non si spenga."],
["Perché vi pettinate i capelli?","Un esploratore persiano ci ha visto fare ginnastica e pettinarci, e l’ha riferito a Serse, che si è messo a ridere. Un esule spartano che sta con lui gli ha spiegato che per noi è il segno che stiamo per rischiare la vita. E si racconta che quando ci dissero che le frecce persiane oscurano il sole, un mio uomo, Dienece, rispose che almeno avremmo combattuto all’ombra."],
["Perché non sono venuti tutti gli spartani?","È il tempo delle Carnee, la festa di Apollo, e dei Giochi di Olimpia, e le nostre leggi religiose ci vietano di partire in massa. Sono partito con la mia guardia del corpo e con gli alleati; gli altri verranno, se ci sarà tempo. E Delfi ha già parlato: o cade Sparta, o muore un re."],
["Cosa succederà?","Il tempo qui si piega, e lo so: un uomo del posto, Efialte, mostrerà ai Persiani un sentiero di montagna alle nostre spalle. Congederò gli alleati, e resterò con i miei trecento e con i Tespiesi, che non vogliono andarsene. Un giorno, qui, un epitaffio ricorderà che siamo caduti obbedendo alle leggi di Sparta."],
["Dove vado dopo?","Verso sud-ovest, fino a Olimpia, nel Peloponneso: ogni quattro anni tutta la Grecia sospende le guerre per le gare. Cerca Milone di Crotone, il lottatore: dicono che si carichi un bue sulle spalle. Salutalo da parte di un re che ha poco tempo."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati che la forza di una città sta negli uomini che la amano. Se ripassi di qui saprai già com’è andata: non serve che te lo dica io. Chàire, hygíeia, eudaimonía."]
],
gr_milone:[
["Chi sei e che fai?","Milone, figlio di Diotimo, di Crotone, in Magna Grecia. Sono un lottatore: ho vinto una volta fra i ragazzi, nel 540 a.C., e cinque fra gli uomini, fino al 516, e ho vinto anche ai Giochi Pitici, Istmici e Nemei, per più di trenta vittorie in tutto. Sono anche amico del filosofo Pitagora, che vive a Crotone."],
["È vero che porti sulle spalle un vitello?","La leggenda dice che da ragazzo prendevo in spalla un vitellino ogni giorno, e che, crescendo lui, cresceva la mia forza, fino a portare un toro di quattro anni. Dicono anche che l’ho portato per tutto lo stadio e poi l’ho mangiato. La verità? Non la dirò: un lottatore deve avere un po’ di mistero."],
["Come ci si prepara ai Giochi?","Per mesi a casa, e nell’ultimo mese a Elis, dove i giudici controllano che ci si sia allenati almeno dieci mesi. Si giura davanti alla statua di Zeus di gareggiare lealmente. Poi tutti in processione verso Olimpia, a piedi."],
["Perché gareggiate nudi?","Perché così è sempre stato: la parola \"ginnasio\" viene da gymnós, nudo. Si gareggia unti d’olio e cosparsi di sabbia, divisi per età. Possono partecipare solo uomini liberi che parlano greco; gli schiavi no."],
["Quali gare ci sono?","Lo stadion, la corsa di circa 192 metri, la più antica; poi la corsa doppia, quella lunga e il pentathlon: disco, giavellotto, salto, corsa e lotta. Poi lotta, pugilato con strisce di cuoio, pankration e le corse dei carri. Alla lotta vince chi mette l’avversario a terra tre volte."],
["Cosa si vince?","Una corona di ulivo selvatico, tagliato con un falcetto d’oro da un albero sacro dell’Altis: niente soldi, niente medaglie. Ma a casa ti aspettano onori: a Crotone mi hanno fatto una statua, e ad Atene, dicono, ai vincitori danno premi in denaro e pasti gratis. L’onore è un buon alimento: ma non sazia."],
["Cos’è la tregua sacra?","Qualche mese prima dei Giochi, dei messaggeri vanno nelle città greche a proclamare l’ekecheiria: niente guerre, e nessuno armato nel santuario, perché atleti e pellegrini viaggino sicuri. Non sempre viene rispettata, ma chi la infrange viene multato e disonorato. È l’unico momento in cui le città greche si vogliono bene."],
["Le donne possono partecipare?","Non alle gare: le donne sposate, dice la tradizione, non possono assistere; Pausania scriverà che il divieto non fu mai applicato. Le ragazze hanno i loro Giochi di Era, con una corsa. E una donna di Sparta, Cinisca, avrà tanti cavalli da vincere più volte nelle corse dei carri: in quelle gare vince il proprietario, non chi guida."],
["Perché Olimpia è così speciale?","Qui, dicono, il mito comincia due volte: Pelope vinse una corsa di carri contro il re Enomao per sposare Ippodamia e fondò i Giochi per purificarsi, oppure fu Eracle, dopo le sue fatiche, a onorare suo padre Zeus e a portare l’ulivo selvatico. Il tempio di Zeus che vedi è del futuro: dentro c’è lo Zeus d’oro e d’avorio di Fidia. Io non lo vedrò mai, ma dicono che sia da restare senza parole."],
["Cosa ne è stato di te?","Dicono, e non è una storia allegra, che da vecchio una mano mi rimase incastrata in un tronco d’albero che cercavo di spaccare, e che i lupi... un finale poco da campione. Preferisco ricordare la battaglia contro Sibari, nel 511 a.C.: dicono che guidai l’esercito di Crotone con le corone di ulivo in testa e la pelle di leone, come Eracle."],
["Dove vado dopo?","Verso est, fino al mare, a Capo Sunio: lì un poeta che canta i miti meglio di me ti aspetta, Omero. Vai al tramonto, quando le colonne del tempio diventano rosa."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati che chi vince una volta è fortunato, chi vince sei volte ha solo imparato a perdere prima. Se ripassi, ti racconto come ho mangiato il bue. Chàire, hygíeia, eudaimonía!"]
],
gr_omero:[
["Chi sei e che fai?","Un aedo, un cantore: vado di città in città e canto storie accompagnandomi con la lira, nei banchetti dei re e alle feste. Della mia origine si discute: alcuni dicono Chio, altri Smirne, e un giorno qualche studioso dirà che \"Omero\" siamo stati in tanti. Io so solo le storie."],
["Cosa canti?","Due grandi racconti: l’Iliade, la guerra di Troia e l’ira di Achille, e l’Odissea, il ritorno a casa di Ulisse, re di Itaca, dopo dieci anni di viaggio. L’Iliade è lunga circa quindicimila versi, l’Odissea più di dodicimila. Li canto a pezzi, in più sere: nessuno ha tanto fiato."],
["Come fai a ricordare tutto?","Con le formule: espressioni fisse, come gli epiteti degli eroi o l’aurora dalle dita di rosa, che sono come mattoni. Li metto insieme secondo il ritmo, l’esametro, e così posso cantare senza smarrirmi. Un aedo non legge: compone mentre canta."],
["Cos’è l’ospitalità per voi?","La xenía: lo straniero va accolto, lavato, nutrito, e solo dopo gli si chiede chi sia. Zeus protegge i viaggiatori e gli ospiti, e nell’Odissea chi la rispetta viene premiato e chi la tradisce paga. Anche oggi, se bussi a una casa greca, è questo che ti devi aspettare."],
["Perché Poseidone è così importante per i naviganti?","Perché nell’Odissea Ulisse acceca il ciclope Polifemo, figlio di Poseidone, dicendogli di chiamarsi \"Nessuno\". Il dio, offeso, rende il suo viaggio lungo e pieno di tempeste. Per questo qui, sul promontorio, i marinai lo pregano con più calore."],
["Chi sono gli dèi?","Dodici dèi principali vivono sull’Olimpo, la montagna più alta della Grecia, quasi tremila metri: Zeus, Era, Poseidone, Demetra, Atena, Apollo, Artemide, Ares, Afrodite, Efesto, Ermes e Estia, anche se le liste cambiano. Si comportano come noi, ma con più potere: si innamorano, litigano, si vendicano."],
["Chi racconta come sono nati gli dèi?","Un contadino poeta della Beozia, Esiodo, nella Teogonia, e nel poema Le opere e i giorni, che parla dei lavori dei campi. Da loro vengono le storie di Prometeo che ruba il fuoco, di Pandora, di Persefone, la cui discesa sottoterra spiega l’inverno. E poi ci sono Teseo e il Minotauro, ed Eracle con le sue dodici fatiche."],
["La guerra di Troia c’è stata davvero?","Può darsi che dietro il racconto ci sia il ricordo di fatti veri: nessuno lo sa. Un giorno qualcuno scaverà una collina in Anatolia e troverà una città bruciata più volte: se sia la mia Troia, se ne discuterà ancora. A me basta che la storia sia bella."],
["Perché si guardano tanto le stelle?","Perché il cielo è la mappa dei naviganti e il calendario dei contadini. Nell’Odissea la dea Calipso dice a Ulisse di tenere l’Orsa sulla sinistra per tornare a casa; e le Pleiadi dicono a Nicarco, a fine autunno, quando arare. Il cielo è la mappa più vecchia che ci sia."],
["Come si fanno a ricordare i tuoi versi?","Si imparano a memoria e si recitano alle feste: come alle Panatenee ad Atene, dove i rapsodi li dicono a turno. Si dice che un giorno un tiranno ateniese, Pisistrato, farà raccogliere i miei versi, e che i ragazzi li impareranno a scuola. Se così sarà, dovrò ringraziare una scuola, e non c’è cosa che mi imbarazzi di più."],
["Dove vado dopo?","Verso le stelle, Pierpaolo: la strada continua verso l’Olimpo, e questa notte la luce ti accompagna. Guarda il mare e il cielo insieme, e non avere fretta di arrivare."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando senti una storia che ti fa battere il cuore, ricordati che qualcuno l’ha raccontata prima di te. Se ripassi, ti canto l’inizio che preferisco. Chàire, hygíeia, eudaimonía, e che le Muse ti accompagnino!"]
]
};
Object.assign(TOPX,TOPX_GR);
})();
