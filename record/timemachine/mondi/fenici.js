/* ---------- FENICI · Dalle città del cedro alle stelle dell'Atlantico (Biblo, Tiro, Cartagine, i porti, la campagna di Magone, il mercato e il Senato, Annibale, Gadir e l'Atlantico) ---------- */
/* Un'intera giornata da sinistra a destra, e un tempo che si piega (circa novecento anni in una sola giornata): alba a Biblo fra i cantieri e i tronchi di cedro, mattina a Tiro l'isola della porpora,
   mezzogiorno a Cartagine sulla collina di Byrsa, primo pomeriggio nei porti, pomeriggio nelle campagne del Capo Bon, tardo pomeriggio nel mercato e nel Senato,
   tramonto sulle orme di Annibale, notte a Gadir e sull'Atlantico. In fondo c'è la stella del nord sopra il mare nero, con una nave dalla lanterna accesa che salpa: lì il motore mette il varco.
   Testi, tappe e dialoghi vengono da fenici.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico). Gli oggetti stanno in elementi.js (nomi che iniziano per "fe").
   Il tono per i temi dolorosi (guerre, tofet, distruzione di Cartagine) è sobrio e rispettoso; tradizioni e questioni discusse sono presentate con "si dice" o "secondo la tradizione", come nella scheda. */
(function(){
const GT=372,W1=22600;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const F=PR._fe,{nf,lit,PAL,fp,folla,pila,fumo,nave,galea,fel,rupe,cedro,olivo,palma,casa,mud,merli,asino,pecora,cane,volo,cavallo,man,ln,gatto,soldato}=F;
const md=(i,n)=>((i%n)+n)%n;
const Z=[0,2700,5400,8000,10600,13200,15800,18900,W1+400];   /* inizio di ognuna delle 8 zone */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;const PUR='#7a2a8a';
/* ---- cielo: alba rosata e argentea, mattina brillante, mezzogiorno bianco, primo pomeriggio dorato, pomeriggio ambrato, tardo pomeriggio arancio, tramonto rosso e viola, crepuscolo blu, notte stellata ---- */
const SKY=[[0,['#8a8ec4','#f4b4bc','#ffd8b4']],[1400,['#5aa4ec','#c0dcf2','#f8ecd8']],[2700,['#3a90ec','#80c0f4','#e4f2f8']],[5400,['#4a98ea','#a8d4f4','#f0f6f8']],[6700,['#5aa4ec','#c8e2f6','#fbfaf0']],[8000,['#3a8ae4','#9ccaee','#f6eed0']],[10600,['#4a88d4','#b4c8e4','#f8e0b0']],[13200,['#5a84c8','#e8c898','#ffd48a']],[15800,['#6a78b8','#f4a870','#ffc078']],[17300,['#5a4aa0','#c8506a','#f88a58']],[18600,['#22308a','#5a3a98','#e0705a']],[19800,['#0a1048','#1c2468','#3a2a78']],[20800,['#050a30','#0c1450','#1a1a60']],[W1+400,['#040826','#0a1048','#161858']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,6*s);el(g,c,x-18*s,y+2*s,22*s,5*s);el(g,c,x+20*s,y+2*s,24*s,5*s)};
const INTRO="Fenici, Punici e Cartaginesi, dall’alba alla notte. Parti da Biblo, dove il cedro scende dai monti e nasce un alfabeto di ventidue segni; poi Tiro, l’isola dove si tinge la porpora. A mezzogiorno Cartagine, sulla collina di Byrsa, dove secondo la tradizione una principessa in fuga fonda una città nuova; nel primo pomeriggio i suoi porti, di cui uno rotondo e nascosto, e nel pomeriggio le campagne e il libro del contadino Magone. Nel tardo pomeriggio il mercato e il Senato; al tramonto Annibale con i suoi elefanti, fra le Alpi e Canne; e di notte Gadir, ai confini del mondo, dove una flotta parte verso l’Atlantico guidata da una stella. Il tempo qui si piega: re, scribi, carpentieri e marinai di ogni epoca ti vengono incontro.";
const LKTXT=[
"Biblo, in fenicio Gebal, è una delle città più antiche del Mediterraneo, abitata fin dalla preistoria. Il nome con cui la conosciamo è greco e viene da byblos, \"papiro\": da qui passavano i rotoli egiziani, e da questa parola verrà anche la parola \"Bibbia\", cioè \"i libri\".",
"Sui monti dietro la città crescono i cedri, e il loro legno è dritto, profumato e resistente: si vende in Egitto, in Mesopotamia e in tutto il Mediterraneo, per i tetti dei templi, per le porte, per le bare e per le navi. I tronchi scendono a valle, arrivano alla spiaggia e diventano scafi nei cantieri di Biblo.",
"Qui, intorno al 1000 a.C., si scrive con un alfabeto di ventidue segni, tutti consonanti, da destra verso sinistra: ogni segno rappresenta un suono e non una parola intera, perciò si impara in poco tempo. È l’antenato dell’alfabeto greco e, quindi, del nostro.",
"Nella necropoli reale di Biblo è stato trovato il sarcofago del re Ahiram, di circa il 1000 a.C. (la data si discute). Sui bordi un’iscrizione in alfabeto fenicio minaccia chi oserà aprire la tomba: è tra le più antiche iscrizioni fenicie che si conoscano.",
"Tiro sorge su un’isola a poche centinaia di metri dalla costa, difesa da alte mura e con due porti, uno a nord e uno a sud. Le case hanno più piani, perché lo spazio è poco; molto tempo dopo, nel 332 a.C., Alessandro Magno la conquisterà costruendo un lungo terrapieno dalla terraferma.",
"La porpora è il colore più prezioso del mondo antico e si ricava da una lumaca di mare, il murice. Per ottenere una piccola quantità di colore servono migliaia di animali, e la lavorazione è così maleodorante che i tintori stanno fuori dalla città. Per questo un panno di porpora costa quanto un piccolo tesoro, e il viola diventa il colore dei re.",
"Melqart, il \"re della città\", è il dio protettore di Tiro e dei naviganti. Secondo lo storico greco Erodoto, che lo visitò molti secoli dopo, il suo tempio aveva due colonne, una d’oro e l’altra di una pietra che di notte brillava come uno smeraldo. Le città fondate da Tiro mandano ogni anno doni al suo santuario.",
"Secondo la Bibbia, Hiram mandò al re Salomone, a Gerusalemme, legno di cedro e di cipresso, con operai specializzati, per costruire il tempio, ricevendo in cambio grano e olio. Le navi di Tiro percorrevano anche rotte lontane, verso l’Occidente, a cercare metalli.",
"Cartagine, in fenicio Qart-Hadasht, \"città nuova\", sorge su un promontorio nel golfo di Tunisi. Secondo la tradizione fu fondata nell’814 a.C. dalla principessa di Tiro Elissa, che i Romani chiameranno Didone; gli scavi trovano tracce di abitato dalla fine dell’VIII secolo a.C.",
"Secondo il racconto, Elissa chiese ai capi del luogo tanta terra quanta ne copriva la pelle di un bue, poi fece tagliare la pelle in strisce sottilissime e con quelle circondò un’intera collina, chiamata Byrsa. Gli studiosi pensano che il nome venga in realtà da una parola fenicia per \"fortezza\", che i Greci confusero con byrsa, cioè \"pelle\".",
"Le divinità più importanti di Cartagine sono Baal Hammon, il \"signore\" del cielo e dei raccolti, e Tanit, la dea con il volto di Baal, signora della città. Il suo simbolo è un triangolo sormontato da un disco, con una barra orizzontale in mezzo che ricorda due braccia alzate.",
"Vicino al porto c’è un recinto sacro, che gli studiosi chiamano tofet: centinaia di stele di pietra con simboli e nomi, e sotto urne con ceneri di bambini molto piccoli e di animali. Gli autori greci e romani parlano di sacrifici di bambini; molti archeologi pensano che fosse anche un luogo di sepoltura per piccoli morti precocemente: il dibattito è ancora aperto.",
"Il porto rettangolare è quello dei mercanti: banchine lunghe, magazzini e navi cariche di anfore, grano, lingotti di metallo, stoffe e vino. L’ingresso dal mare è stretto e si può sbarrare con catene di ferro.",
"Dietro quello dei mercanti c’è un secondo porto, circolare, riservato alle navi da guerra: una corona di ricoveri tutt’intorno, con due colonne davanti a ciascuno, e secondo lo storico Appiano posto per duecentoventi navi. Dal mare non si vede, ma da dentro si vede tutto.",
"Al centro del porto circolare c’è un’isola con la residenza dell’ammiraglio e una torre. Secondo Appiano, di lì si dominava l’intero mare e si davano gli ordini al suono delle trombe.",
"Una nave si costruisce nei ricoveri e nelle officine accanto: scafo di pino e di cedro, tavole unite a incastro con cavicchi di legno e coperte di pece. Una nave punica trovata al largo di Marsala, del III secolo a.C., ha lettere incise sui pezzi: segni per montarla più in fretta, come una moderna scatola di montaggio.",
"Intorno a Cartagine ci sono orti e frutteti irrigati con pozzi e canali: melograni, fichi, olive, viti, datteri e mandorle. I Romani chiameranno il melograno \"mela punica\", cioè \"mela cartaginese\".",
"Più in là si stende il grano: si ara con aratri di legno trainati da buoi, si semina in autunno e si miete in primavera. Le terre dell’Africa sono ricche e Cartagine ne vende il grano anche per mare.",
"Il vino si ottiene pigiando l’uva, ma si fa anche un vino dolce con l’uva lasciata appassire al sole; l’olio si ricava con torchi di legno e di pietra. Si conservano e si trasportano in anfore appuntite, che si tappano e si caricano sulle navi.",
"Magone scrisse in lingua punica un trattato di agricoltura in ventotto libri, con consigli su viti, ulivi, api, bestiame e orti. Dopo la caduta di Cartagine il Senato romano lo fece tradurre in latino: fu l’unico libro cartaginese che i Romani vollero conservare.",
"Nel mercato si incontrano merci da tutto il Mediterraneo: argento di Spagna, grano di Sardegna, vasi greci, uova di struzzo, avorio, vetro e stoffe tinte. Si parlano molte lingue, ma i prezzi si capiscono in tutte.",
"Le donne tessono su telai verticali, con i fili tesi da pesi di terracotta; la lana si tinge di molti colori, fra cui il porpora, che si compra a caro prezzo da Tiro e da altre città. Una veste ben tessuta si tramanda in famiglia.",
"Cartagine è governata da due magistrati eletti ogni anno, i sufeti (in punico shofetim, \"giudici\"), da un Senato di anziani e da un’assemblea del popolo. Il filosofo greco Aristotele ammirava la sua costituzione, che a suo parere tratteneva la città dalle tirannidi.",
"Secondo Appiano, Cartagine era difesa da mura triple, con camere e magazzini all’interno: stalle per trecento elefanti, quattromila cavalli e alloggi per migliaia di soldati. Era una delle città meglio difese del mondo antico.",
"Intorno al 228 a.C. il generale Asdrubale fonda in Spagna una nuova Cartagine, oggi Cartagena, su una baia con un ottimo porto e vicino alle miniere d’argento. È la base della famiglia dei Barca, da cui parte Annibale.",
"Nel 218 a.C. Annibale parte dalla Spagna con un grande esercito e circa trentasette elefanti; attraversa il Rodano su zattere e sale sulle Alpi in autunno, fra neve e agguati. Il valico preciso resta ancora discusso.",
"Il 2 agosto del 216 a.C. (data tradizionale), a Canne, in Puglia, Annibale circonda e distrugge un esercito romano molto più numeroso del suo. Le perdite romane si contano in decine di migliaia: è una delle più grandi vittorie tattiche della storia.",
"Nel 202 a.C., presso Zama, in Africa, Annibale è sconfitto dal generale romano Scipione, aiutato dalla cavalleria numida del re Massinissa. Cartagine firma la pace: perde la Spagna, quasi tutta la flotta, e deve pagare un’enorme somma in cinquant’anni.",
"Gadir, oggi Cadice, è la colonia fenicia più lontana, sull’Atlantico: secondo la tradizione fu fondata intorno al 1100 a.C., ma gli scavi trovano tracce dal IX-VIII secolo a.C. Qui si vendono il tonno salato, l’argento e il rame della Spagna, e c’è un famoso tempio di Melqart.",
"Lo Stretto fra l’Europa e l’Africa, che i Greci chiameranno Colonne d’Ercole, è la porta dell’Oceano. Oltre c’è il mare aperto, che per molti è la fine del mondo; per i marinai fenici e cartaginesi è una rotta.",
"Nel V secolo a.C. il cartaginese Annone parte con sessanta navi e molti coloni a esplorare la costa dell’Africa occidentale: fondano città, risalgono un fiume pieno di coccodrilli e di ippopotami, vedono una montagna di fuoco e incontrano creature pelose. Il racconto, in greco, è un testo breve, e fino a dove arrivò si discute ancora.",
"I marinai fenici navigano di notte seguendo la stella del nord: i Greci la chiameranno \"fenicia\" perché dicono che sono i Fenici a servirsene. Nell’Orsa Minore, vicino al polo, c’è una stella che sembra ferma mentre le altre girano.",
"Sotto la stella, la rotta continua."
];
const NAME={
fe_eshmunyaton:"Eshmunyaton, lo scriba di Biblo",
fe_hiram:"Hiram I, re di Tiro",
fe_elissa:"Elissa, la principessa fondatrice",
fe_yatanbaal:"Yatanbaal, il carpentiere navale",
fe_magone:"Magone, l’agronomo di Cartagine",
fe_amatbaal:"Amatbaal, la tessitrice e mercante",
fe_annibale:"Annibale Barca",
fe_annone:"Annone il Navigatore"
};
const GREET={
fe_eshmunyaton:"Shalom, Pierpaolo! Siediti sulla banchina, ma attento ai rotoli: ho appena finito di contare i tronchi di cedro. Sono Eshmunyaton, scriba di Gebal, che i Greci chiameranno Biblo: tengo i conti di tutto quello che arriva e parte da questo porto, e conosco i ventidue segni che cambieranno il mondo.",
fe_hiram:"Benvenuto, Pierpaolo, a Tiro, la regina dei mari. Sono Hiram, re di questa città, e come vedi so ricevere gli ospiti con il mare alle spalle. Non guardare troppo i miei vestiti: il viola che porto vale quanto una nave, ma qui a Tiro ce ne facciamo un vanto.",
fe_elissa:"Benvenuto, Pierpaolo, a Qart-Hadasht, la \"città nuova\". Sono Elissa, e questa collina, Byrsa, è il posto da cui tutto comincia: per ora vedi tende e muri bassi, ma un giorno questa sarà una delle città più grandi del Mediterraneo. Sali piano: la pietra è calda.",
fe_yatanbaal:"Eh, Pierpaolo! Attento alla pece, che attacca più dei debiti. Sono Yatanbaal, carpentiere di navi nel porto di Qart-Hadasht: qui dentro, nel porto rotondo, ogni tavola dev’essere al suo posto, perché una nave che fa acqua affonda tutto, anche la reputazione.",
fe_magone:"Ah, Pierpaolo, ti aspettavo. Vieni all’ombra e togliti i sandali: la terra è calda e fa bene. Sono Magone e coltivo la terra da una vita: so quando piantare la vite e quando non farlo, e ho scritto tutto in un libro, perché ciò che si sa deve restare.",
fe_amatbaal:"Shalom, Pierpaolo! Avvicinati, che qui si vende di tutto, e quello che non si vende lo si racconta. Sono Amatbaal, tessitrice e mercante: la mia lana è la migliore del mercato, e se lo dici in giro non mi arrabbio.",
fe_annibale:"Ah, Pierpaolo. Siediti, il vento porta via la polvere ma non la fatica. Sono Annibale, figlio di Amilcare Barca, e quella che vedi laggiù è la pianura di Canne: il tramonto è rosso, ma i Romani domani ne vedranno uno più rosso ancora.",
fe_annone:"Benvenuto, Pierpaolo, ai confini del mondo. Sono Annone, di Cartagine, e di mestiere faccio il genere di cose che gli altri chiamano follie: navigo dove le mappe finiscono. Guarda la nave: è pronta, e da questo molo si vede il mare che comincia."
};
const LX=[420,1250,2050,2450, 3150,3860,4650,5170, 5800,6450,7380,7840, 8500,9150,9820,10300, 10950,11560,12480,13030, 13700,14380,14980,15500, 16220,16900,17980,18560, 19350,20750,21450,21990,22400];

/* ---- livello 0: cielo, sole, luna sottile, stelle che girano attorno alla stella polare, nuvole alte e sottili ---- */
const POL=[318,92],UMI=[[0,0],[14,12],[28,20],[42,30],[60,24],[78,42],[58,52]];
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-18700)/1800,0,1);
 if(nt>0){const ang=t*.018;g.save();g.translate(POL[0],POL[1]);g.rotate(ang);for(let i=0;i<90;i++){const r=14+hr(i*3)*320,th=hr(i*7+1)*6.283,sx=Math.cos(th)*r,sy=Math.sin(th)*r,wx=POL[0]+sx*Math.cos(ang)-sy*Math.sin(ang),wy=POL[1]+sx*Math.sin(ang)+sy*Math.cos(ang);if(wx<-4||wx>484||wy<-4||wy>GT)continue;g.fillStyle='rgba(255,250,225,'+nt*.85*(.4+.5*Math.sin(t*2+i))+')';const s=1+(i%4==0);g.fillRect(sx,sy,s,s)}
  const pu=cl((xs-19600)/2600,0,1),gl=.5+.5*pu;ln(g,'rgba(210,225,255,'+(.4*nt)+')',1,[0,0,14,12,28,20,42,30,60,24,78,42,58,52,42,30]);UMI.forEach((q,i)=>dot(g,'rgba(255,252,235,'+nt+')',q[0],q[1],i?1.8:2.6));
  glow(g,0,0,(30+60*pu)*gl,'200,215,255',(.4+.4*pu)*nt);dot(g,'rgba(255,255,250,'+nt+')',0,0,3+2*pu);g.restore()}
 const u=cl(xs/17900,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*255;
 if(xs<18300){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*100)+','+Math.round(190-low*130)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*80)+',140,.35)');sg.addColorStop(1,'rgba(255,200,120,0)');g.fillStyle=sg;g.fillRect(sx-250,sy-250,500,500);dot(g,'rgba(255,'+Math.round(250-low*90)+','+Math.round(215-low*120)+',1)',sx,sy,15+low*7)}
 const mu=cl((xs-18800)/2000,0,1);if(mu>0){const mx=150+mu*20,my=120-mu*20;dot(g,'rgba(255,248,215,.12)',mx,my,30);g.fillStyle='#f6f0d6';g.beginPath();g.arc(mx,my,12,-Math.PI/2,Math.PI/2,true);g.bezierCurveTo(mx-5,my+8,mx-5,my-8,mx,my-12);g.fill()}
 const cc=xs<2700?'rgba(252,206,214,.5)':xs<13200?'rgba(255,255,255,.5)':xs<17000?'rgba(255,214,160,.55)':xs<18800?'rgba(255,140,120,.5)':'rgba(140,120,190,.25)';
 each(o-((t*3)%340)*.02,340,1,(x,i,r)=>{if(r>.45)return;nube(g,x+r*100,40+r*60,.9+r*.7,cc)});
 const fo=cl(1-xs/2800,0,1)*.3;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const dust=cl((xs-13200)/1200,0,1)*cl((15800-xs)/1000,0,1)*.14;if(dust>.01){g.fillStyle='rgba(255,208,120,'+dust+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-15900)/900,0,1)*cl((19200-xs)/900,0,1)*.26;if(wg>.01){g.fillStyle='rgba(255,90,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}

/* ---- livello 1: orizzonte lontano: i monti del Libano con la neve, l'isola di Tiro, il golfo di Tunisi con Byrsa, la laguna, il Bou Kornine e il Capo Bon, le Alpi, Canne, lo Stretto e l'Atlantico ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(mixs(c,'#c4cce0',.25),'#262a5e',night*.72);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const mont=(sx,w,h,c,sn,seed)=>{g.fillStyle=dim(c);g.beginPath();g.moveTo(sx-w,hz+34);const pk=[];for(let q=0;q<=40;q++){const u=q/40,px=sx-w+u*2*w,hh=h*(Math.sin(u*Math.PI))*(.62+.38*Math.abs(Math.sin(u*9+seed)))+8*Math.sin(u*31+seed);pk.push([px,hz+14-hh]);g.lineTo(px,hz+14-hh)}g.lineTo(sx+w,hz+34);g.closePath();g.fill();
  if(sn){g.fillStyle=dim('#f4f6fc');pk.forEach((p,i)=>{if(i>0&&i<40&&p[1]<hz+14-h*sn&&pk[i-1][1]>=p[1]&&pk[i+1][1]>=p[1]){g.beginPath();g.moveTo(p[0],p[1]);g.lineTo(p[0]-9,p[1]+11+hr(i)*8);g.lineTo(p[0]-3,p[1]+8);g.lineTo(p[0]+2,p[1]+13);g.lineTo(p[0]+9,p[1]+10);g.closePath();g.fill()}})}};
 const sea=(sx,w,c)=>{rect(g,dim(c),sx-w,hz+12,2*w,24);for(let q=0;q<10;q++)rect(g,'rgba(255,255,255,.3)',sx-w+q*w/5+hr(q)*20,hz+16+(q%3)*5,26,1.4)};
 const torches=(sx,x0,x1,n)=>{if(night>.2)for(let q=0;q<n;q++){const tx=sx+x0+(x1-x0)*q/(n-1);glow(g,tx,hz+6,12,'255,180,80',.7*Math.min(1,night+.1));dot(g,'rgba(255,220,140,.95)',tx,hz+6,1.4)}};
 /* i monti del Libano scuri e innevati, mare piatto davanti (zone 1-2) */
 const li=env(1700,5200);if(li>.02){g.globalAlpha=li;const sx=fx(1700);sea(sx,520,'#7aa4c8');mont(sx-60,520,150,'#5a6488',.6,1.3);mont(sx+160,360,110,'#6a7498',.5,4.1);g.globalAlpha=1}
 /* l'isola di Tiro vista da lontano (zona 2) */
 const ti=env(4000,3600);if(ti>.02){g.globalAlpha=ti;const sx=fx(4000);rect(g,dim('#8aa468'),sx-260,hz+8,520,10);rect(g,dim('#d8ccb0'),sx-70,hz-6,140,22);for(let q=0;q<9;q++)rect(g,dim(q%2?'#f0e8d4':'#e0d4b8'),sx-66+q*15,hz-14-(q%3)*8,12,22+(q%3)*8);rect(g,dim('#bfb08a'),sx-72,hz+14,144,4);[-76,70].forEach(b=>{rect(g,dim('#d8ccaa'),sx+b-5,hz-26,10,40);merli(g,sx+b-5,hz-26,10,dim('#bfb08a'),2)});g.globalAlpha=1}
 /* il golfo di Tunisi: la collina di Byrsa, il Bou Kornine a due punte, la laguna con i fenicotteri, il Capo Bon (zone 3-5) */
 const tu=env(9200,7600);if(tu>.02){g.globalAlpha=tu;const sx=fx(9200);sea(sx,700,'#6aa0c8');
  g.fillStyle=dim('#8a7a62');g.beginPath();g.moveTo(sx+380,hz+34);g.lineTo(sx+360,hz-6);g.lineTo(sx+390,hz-62);g.lineTo(sx+412,hz-20);g.lineTo(sx+430,hz-78);g.lineTo(sx+470,hz+34);g.closePath();g.fill();
  rect(g,dim('#a8a074'),sx+300,hz+12,420,8);poly(g,dim('#a8a074'),[[sx+560,hz+12],[sx+700,hz+10],[sx+740,hz+14],[sx+560,hz+20]]);
  rect(g,dim('#e8b8c8'),sx-420,hz+16,160,5);for(let q=0;q<22;q++)dot(g,dim(hr(q)>.4?'#f08aa8':'#f8d0dc'),sx-410+q*7+hr(q+3)*3,hz+14,1.8);
  g.fillStyle=dim('#b8a078');g.beginPath();g.moveTo(sx-170,hz+34);g.quadraticCurveTo(sx-150,hz-60,sx-40,hz-64);g.quadraticCurveTo(sx+50,hz-60,sx+70,hz+34);g.closePath();g.fill();rect(g,dim('#e8dcc0'),sx-62,hz-78,60,18);rect(g,dim('#d8ccaa'),sx-50,hz-96,36,20);poly(g,dim('#c8b890'),[[sx-54,hz-96],[sx-32,hz-112],[sx-10,hz-96]]);for(let q=0;q<6;q++)rect(g,dim(q%2?'#f4ecd8':'#e0d4b8'),sx-150+q*16,hz-20-(q%3)*10,13,40);
  for(let q=0;q<5;q++)rect(g,dim(q%2?'#f4ecd8':'#e8dcc4'),sx+10+q*14,hz-18-(q%2)*8,12,38);torches(sx,-120,60,7);g.globalAlpha=1}
 /* le Alpi innevate e la pianura di Canne (zona 7) */
 const al=env(16700,3400);if(al>.02){g.globalAlpha=al;const sx=fx(16900);mont(sx-80,520,196,'#6a6c92',.7,2.2);mont(sx+260,360,150,'#7a7ca0',.6,5.5);rect(g,dim('#c89a5a'),sx-500,hz+18,1000,16);rect(g,dim('#7a98a8'),sx-460,hz+22,320,3);for(let q=0;q<9;q++)rect(g,dim(q%2?'#c8402a':'#e8dcc0'),sx+120+q*22,hz+10,10,10);g.globalAlpha=1}
 /* lo Stretto: le due rocce e la linea scura dell'Oceano, le luci di Gadir (zona 8) */
 const st=env(20800,6000);if(st>.02){g.globalAlpha=st;const sx=fx(20800);rect(g,dim('#10285a'),sx-520,hz+10,1040,26);for(let q=0;q<18;q++)rect(g,'rgba(180,200,240,.25)',sx-500+q*56,hz+16+(q%3)*5,30,1.4);
  g.fillStyle=dim('#3a3e56');g.beginPath();g.moveTo(sx-260,hz+14);g.lineTo(sx-232,hz-44);g.lineTo(sx-196,hz-70);g.lineTo(sx-150,hz-30);g.lineTo(sx-110,hz+14);g.closePath();g.fill();g.beginPath();g.moveTo(sx+110,hz+14);g.lineTo(sx+140,hz-30);g.lineTo(sx+190,hz-84);g.lineTo(sx+240,hz-24);g.lineTo(sx+280,hz+14);g.closePath();g.fill();
  rect(g,dim('#e4dcc8'),sx-440,hz+4,150,10);for(let q=0;q<8;q++)rect(g,dim(q%2?'#e8e0cc':'#d8d0b8'),sx-436+q*18,hz-6-(q%3)*6,14,14+(q%3)*6);torches(sx,-440,-300,8);g.globalAlpha=1}}

/* ---- livello 2: case di pietra di Biblo, Tiro fitta, calce di Cartagine, magazzini dei porti, tenute e palmeti, case con terrazza, accampamenti, case bianche di Gadir ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120);A.setDK(nf(cam+x));
  const wins=(n,top,bx)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,214,140,.85)',bx+(q%4)*18,top+Math.floor(q/4)*14,5,6)};
  const house=(c,hh,ww,roof)=>{rect(g,dim(c),x+10,hz-hh,ww,hh+10);rect(g,'rgba(255,255,255,.14)',x+10,hz-hh,5,hh+10);rect(g,'rgba(0,0,0,.14)',x+10+ww-9,hz-hh,9,hh+10);rect(g,dim(roof||'#9a8458'),x+7,hz-hh-4,ww+6,5);rect(g,dim('#2a1c10'),x+10+ww*.4,hz-hh*.5,10,hh*.5+10);wins(4,hz-hh+8,x+16)};
  const CL=['#e8dfc8','#f0ead8','#e0d4b8','#d8c8a4'];
  if(zz==1){if(r>.74)cedro(g,x+60,hz+10,.7+r*.3,t);else if(r>.3)house(['#c8b890','#d0c098','#bca87c'][md(i,3)],56+r*70,60,'#8a7448');else rect(g,dim('#8a6a4a'),x+20,hz+2,70,8)}
  else if(zz==2){const hh=70+r*80;house(CL[md(i,4)],hh,70,'#9a8458');rect(g,dim(r>.5?'#7a2a8a':'#c8402a'),x+10,hz-hh*.6,70,8);if(r>.8)rect(g,dim('#2f6ab0'),x+14,hz-hh+6,60,6)}
  else if(zz==3){if(r>.86)palma(g,x+60,hz+10,.55,t);else{const hh=60+r*86;house(CL[md(i,4)],hh,66,'#aa9a76');if(r>.5)rect(g,'rgba(80,120,200,.12)',x+10+40,hz-hh,26,hh+10)}}
  else if(zz==4){if(r>.8){rect(g,dim('#5a3e28'),x+54,hz-96,2.6,96);rect(g,dim('#e8e0cc'),x+40,hz-92,30,5)}else{house(['#ece4d0','#e0d6bc'][md(i,2)],34+r*30,100,'#bfb08a');for(let q=0;q<4;q++)rect(g,dim('#4a3a2a'),x+22+q*22,hz-22,12,26)}}
  else if(zz==5){if(r>.84)palma(g,x+60,hz+10,.6,t);else if(r>.6){house('#e8dcb8',50,80,'#9a7444');rect(g,dim('#e0d0a8'),x+72,hz-120,22,130)}else if(r>.3)olivo(g,x+60,hz+10,.8+r*.4);else{for(let q=0;q<6;q++){rect(g,dim('#6a8a3a'),x+8+q*17,hz-4,10,14);rect(g,dim('#4a6a2a'),x+8+q*17,hz-8,10,6)}}}
  else if(zz==6){const hh=70+r*84;house(CL[md(i+1,4)],hh,72,'#9a8458');rect(g,dim('#9a8458'),x+4,hz-hh-12,84,6);for(let q=0;q<4;q++)rect(g,dim(PAL[md(q+i,6)]),x+10+q*20,hz-hh-18,18,6)}
  else if(zz==7){if(r>.7){for(let q=0;q<2;q++)poly(g,dim('#6a4a30'),[[x+10+q*44,hz+10],[x+34+q*44,hz-40-q*8],[x+56+q*44,hz+10]])}else if(r>.3){rect(g,dim('#5a4a38'),x+20,hz-2,60,10);poly(g,dim('#6a5238'),[[x+10,hz-2],[x+50,hz-36],[x+90,hz-2]]);rect(g,dim('#c8402a'),x+49,hz-48,2,12)}else{poly(g,dim('#8a6a4a'),[[x,hz+10],[x+50,hz-30],[x+110,hz+10]])}}
  else{if(r>.86)palma(g,x+60,hz+10,.6,t);else{const hh=44+r*70;house(['#e8e0cc','#dcd2b8','#f0e8d4'][md(i,3)],hh,76,'#8a8068');if(night>.2)glow(g,x+54,hz-hh*.4,30,'255,180,80',.25)}}
 })}

/* ---- livello 3: le facciate lungo la strada, per zona ---- */
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3),gap=[.34,0,.1,.3,.2,0,.2,.12][st-1];if(r<gap)return;const WH=['#f0ead8','#e8dfc8','#e0d4b8','#d8ccaa'];
 if(st==1){/* Biblo: pietra squadrata, cedri, barche in secca */
  if(r>.84){cedro(g,x+w*.5,gt+6,1.1+r*.4,TT);return}if(r>.7){poly(g,'#6a4a30',[[x+20,gt+4],[x+30,gt-16],[x+120,gt-18],[x+140,gt-32],[x+140,gt-4],[x+110,gt+6]]);for(let q=0;q<6;q++)ln(g,'#a8803a',2,[x+34+q*16,gt-4,x+36+q*16,gt-18]);return}
  casa(g,x+6,w-60,h-10,i,k,{wall:['#cdbf98','#d4c6a0','#c4b48a'][md(i,3)],cor:'#8a7448',lad:r>.5,mat:r>.4,trav:0});return}
 if(st==2){/* Tiro: case alte a piani, drappi di porpora */
  if(r>.9){for(let q=0;q<3;q++){ln(g,'#5a3e22',2.6,[x+20+q*50,gt+4,x+20+q*50,gt-70]);}ln(g,'#5a3e22',1.6,[x+20,gt-64,x+120,gt-64]);[PUR,'#c8402a','#a03a6a'].forEach((c,q)=>poly(g,c,[[x+26+q*30,gt-64],[x+46+q*30,gt-64],[x+44+q*30,gt-20],[x+28+q*30,gt-20]]));return}
  casa(g,x+4,w-24,h+40,i,k,{wall:WH[md(i,4)],cor:'#9a8458',lad:r>.6,mat:r>.35,trav:0});if(r>.6)rect(g,PUR,x+4,gt-h-30,w-24,6);return}
 if(st==3){/* Cartagine: calce bianca, scale esterne, cisterne */
  if(r>.84){palma(g,x+w*.5,gt+6,1.1,TT);return}if(r>.74){mud(g,x+10,gt-30,60,30,'#e4dcc4');el(g,'#2a2018',x+40,gt-30,22,5);return}
  casa(g,x+6,w-20,h+30,i,k,{wall:WH[md(i+1,4)],cor:'#aa9a76',lad:r>.45,mat:r>.7,trav:0});return}
 if(st==4){/* porti: magazzini bassi con archi, cataste di travi, anfore */
  if(r>.82){for(let q=0;q<3;q++)rect(g,CED_,x+10,gt-8-q*10,110,9);return}
  mud(g,x+6,gt-80,w-24,86,r>.5?'#e8dfc8':'#dcd0b4');rect(g,'#9a8a68',x+2,gt-86,w-16,8);for(let q=0;q<3;q++)ar(g,'#2a2018',x+20+q*40,gt+4,26,52);if(r>.5)for(let q=0;q<3;q++)anf_(g,x+18+q*40,gt+6,.8);return}
 if(st==5){/* campagna: siepi, ulivi, vigne, palme, fattorie */
  if(r>.8){palma(g,x+w*.5,gt+6,1.1,TT);return}if(r>.55){olivo(g,x+w*.5,gt+8,1.2+r*.3);return}if(r>.34){for(let q=0;q<9;q++){rect(g,'#6a8a3a',x+10+q*16,gt-22,12,26);rect(g,'#4a6a2a',x+10+q*16,gt-26,12,8);ln(g,'#5a3e22',1.4,[x+16+q*16,gt+4,x+16+q*16,gt-14])}return}
  casa(g,x+6,w-40,h-20,i,k,{wall:'#e8dcb8',cor:'#9a7444',trav:0,door:r>.2?1:0});return}
 if(st==6){/* mercato: case alte con terrazze, drappi e portici */
  if(r>.88){palma(g,x+w*.5,gt+6,1.1,TT);return}
  casa(g,x+4,w-14,h+30,i,k,{wall:WH[md(i+2,4)],cor:'#9a8458',lad:r>.55,mat:1,mer:r>.8,trav:0});return}
 if(st==7){/* accampamenti: tende di pelle, lance, carri, fuochi */
  if(r>.8){for(let q=0;q<5;q++){ln(g,'#5a3e22',2.4,[x+20+q*14,gt+4,x+26+q*14,gt-70]);poly(g,'#9a9aa2',[[x+24+q*14,gt-70],[x+28+q*14,gt-70],[x+26+q*14,gt-82]])}return}
  if(r>.55){rect(g,'#6a4a2a',x+10,gt-30,90,10);for(let q=0;q<2;q++){dot(g,'#4a3a2a',x+26+q*60,gt-12,12);dot(g,'#8a6a40',x+26+q*60,gt-12,5)}poly(g,'#c8b888',[[x+14,gt-30],[x+30,gt-60],[x+84,gt-60],[x+98,gt-30]]);return}
  for(let q=0;q<(r>.3?2:1);q++){const bx=x+12+q*66;poly(g,['#7a4a2a','#6a4228','#8a5a38'][md(i+q,3)],[[bx-20,gt+6],[bx+30,gt-(70+r*30)],[bx+80,gt+6]]);poly(g,'rgba(0,0,0,.2)',[[bx+30,gt-(70+r*30)],[bx+80,gt+6],[bx+36,gt+6]]);ar(g,'#2a1810',bx+18,gt+6,24,40);ln(g,'#4a3a28',2,[bx+30,gt-(70+r*30),bx+30,gt-(86+r*30)]);poly(g,q?'#7a2a8a':'#c8402a',[[bx+30,gt-(86+r*30)],[bx+52,gt-(80+r*30)],[bx+30,gt-(74+r*30)]])}return}
 /* Gadir: case bianche con tetto piatto, vasche del pesce salato, anfore, torce */
 if(r>.84){palma(g,x+w*.5,gt+6,1.1,TT);return}
 if(r>.6){mud(g,x+6,gt-34,w-30,40,'#cfc8b4');for(let q=0;q<3;q++){rect(g,'#9a9488',x+16+q*36,gt-40,30,8);rect(g,'#6a7a8a',x+19+q*36,gt-38,24,4)}return}
 casa(g,x+6,w-24,h+10,i,k,{wall:['#ece4d0','#e0d8c0','#f0e8d4'][md(i,3)],cor:'#8a8068',lad:r>.4,mat:0,trav:0})}
const CED_='#8a3a22';
function anf_(g,x,y,s){const c='#c0603a';g.fillStyle=tn(c);g.beginPath();g.moveTo(x-5*s,y-36*s);g.quadraticCurveTo(x-18*s,y-20*s,x-5*s,y);g.lineTo(x+5*s,y);g.quadraticCurveTo(x+18*s,y-20*s,x+5*s,y-36*s);g.closePath();g.fill();rect(g,c,x-5*s,y-44*s,10*s,10*s)}
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>100+hr(i*5)*60,170);
 each2(180,8,Z[1],Z[2],2,i=>110+hr(i*5)*50,170);
 each2(180,9,Z[2],Z[3],3,i=>110+hr(i*5)*50,170);
 each2(180,10,Z[3],Z[4],4,i=>90+hr(i*5)*40,170);
 each2(180,11,Z[4],Z[5],5,i=>100+hr(i*5)*40,170);
 each2(190,12,Z[5],Z[6],6,i=>110+hr(i*5)*50,180);
 each2(190,13,Z[6],Z[7],7,i=>90+hr(i*5)*40,170);
 each2(170,14,Z[7],Z[8],8,i=>90+hr(i*5)*50,160)}

/* ---- suolo: ciottoli e terra rossa di Biblo, pietra squadrata di Tiro, terra rossa e cocciopesto di Cartagine, banchine dei porti, solchi della campagna, lastricato del mercato, sabbia dei campi di battaglia, pietra scura e moli di Gadir ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#b49068','b'],[Z[1],Z[2],'#c8bca0','s'],[Z[2],Z[3],'#c07e58','r'],[Z[3],Z[4],'#bcae8c','q'],[Z[4],Z[5],'#a8603e','f'],[Z[5],Z[6],'#cdb890','l'],[Z[6],Z[7],'#c0a070','d'],[Z[7],Z[8],'#5e5e6a','n']];
 rect(g,'#e0d4b0',0,gt,480,3);
 const slabs=(x0,x1,ww,cw,rows,rh,k1,k2,seed)=>{for(let r=0;r<rows;r++){const yy=gt+7+r*rh,bw=cw+r*5,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*seed+r*7);rect(g,hh>.65?k1:hh>.3?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,rh-2);rect(g,k2,px+bw-2,yy,2,rh-2)}}};
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0),zw=z[1]-z[0];g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const pz=(q,m)=>z[0]+((q*m)%zw)-cam;
  if(z[3]=='b'){/* terra rossa battuta, blocchi di calcare, ciottoli, assi di molo */
   rect(g,'#9a8a74',x0,gt+3,x1-x0,26);for(let q=0;q<60;q++)rect(g,'rgba(0,0,0,.1)',pz(q,53),gt+3,1.4,26);slabs(x0,x1,ww,52,5,22,'rgba(255,240,210,.14)','rgba(40,30,20,.2)',11);
   for(let q=0;q<120;q++)dot(g,hr(q)>.5?'rgba(245,235,215,.55)':'rgba(90,60,40,.45)',pz(q,29),gt+34+hr(q*5)*108,1+hr(q)*1.8);for(let q=0;q<6;q++){const px=pz(q,433);for(let s=0;s<5;s++)rect(g,'#7a5a38',px+s*0,gt+120+s*5,46,3)}}
  if(z[3]=='s'){/* pietra squadrata chiara, scalini, gusci di murice */
   slabs(x0,x1,ww,60,6,24,'rgba(255,255,255,.16)','rgba(40,30,30,.3)',17);for(let q=0;q<26;q++)el(g,'rgba(160,120,170,.5)',pz(q,71),gt+10+hr(q*3)*130,5+hr(q)*5,2+hr(q)*2);for(let q=0;q<40;q++)dot(g,'rgba(225,210,185,.8)',pz(q,37),gt+20+hr(q*7)*120,1.6)}
  if(z[3]=='r'){/* terra rossa, cocciopesto rosa con tesserine bianche */
   for(let q=0;q<9;q++){const px=pz(q,263),py=gt+30+hr(q)*90;rect(g,'#d8a090',px,py,90+hr(q)*40,24);for(let s=0;s<14;s++)dot(g,'rgba(255,250,240,.8)',px+4+hr(q*9+s)*110,py+3+hr(q*5+s)*18,1.1)}
   for(let q=0;q<120;q++)dot(g,hr(q)>.5?'rgba(255,215,180,.35)':'rgba(90,40,20,.35)',pz(q,31),gt+8+hr(q*5)*140,1+hr(q)*1.4)}
  if(z[3]=='q'){/* banchine di pietra, assi di legno, trucioli */
   rect(g,'#a89878',x0,gt+3,x1-x0,34);for(let q=0;q<40;q++)rect(g,'rgba(0,0,0,.12)',pz(q,58),gt+3,1.4,34);for(let r=0;r<5;r++){const yy=gt+44+r*20;rect(g,r%2?'#9a7a52':'#8a6a46',x0,yy,x1-x0,18);const bw=70,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++)rect(g,'rgba(30,18,8,.4)',s0+k*bw+(r*23%bw)-cam,yy,2,18)}
   for(let q=0;q<60;q++)el(g,'rgba(230,200,150,.55)',pz(q,41),gt+44+hr(q*3)*96,3+hr(q)*3,1)}
  if(z[3]=='f'){/* terra lavorata a solchi, sentieri, aie battute */
   for(let r=0;r<10;r++){rect(g,r%2?'rgba(60,20,8,.2)':'rgba(255,200,160,.1)',x0,gt+8+r*14,x1-x0,6)}for(let q=0;q<80;q++)dot(g,hr(q)>.5?'rgba(255,220,180,.3)':'rgba(70,30,15,.4)',pz(q,27),gt+8+hr(q*5)*140,1+hr(q)*1.4);rect(g,'rgba(210,170,120,.35)',x0,gt+60,x1-x0,34)}
  if(z[3]=='l'){/* lastricato di pietra e calce, polvere dorata */
   slabs(x0,x1,ww,64,6,24,'rgba(255,245,220,.2)','rgba(60,40,30,.28)',19);for(let q=0;q<90;q++)dot(g,'rgba(255,200,110,.25)',pz(q,23),gt+8+hr(q*5)*140,1+hr(q)*1.4);const gd=cl((cam-13200)/700,0,1)*cl((15800-cam)/700,0,1);if(gd>0)rect(g,'rgba(255,170,60,'+(.12*gd)+')',x0,gt+3,x1-x0,150)}
  if(z[3]=='d'){/* sabbia e ghiaia calpestate, fango, orme */
   for(let r=0;r<7;r++)rect(g,r%2?'rgba(120,80,40,.1)':'rgba(255,230,170,.08)',x0,gt+8+r*20,x1-x0,10);for(let q=0;q<160;q++)dot(g,hr(q)>.5?'rgba(255,230,180,.45)':'rgba(90,60,30,.5)',pz(q,25),gt+6+hr(q*5)*144,1+hr(q)*1.6);for(let q=0;q<10;q++){const px=pz(q,229);rect(g,'rgba(70,40,20,.25)',px,gt+30+hr(q)*100,40+hr(q)*40,5)}}
  if(z[3]=='n'){/* pietra scura del molo, scalini al mare, assi di legno */
   slabs(x0,x1,ww,60,6,24,'rgba(200,210,230,.1)','rgba(10,10,20,.4)',23);for(let q=0;q<5;q++){const px=pz(q,613);rect(g,'#4a3a2a',px,gt+110,70,16);for(let s=0;s<7;s++)rect(g,'rgba(0,0,0,.3)',px+s*10,gt+110,1.4,16)}for(let q=0;q<40;q++)dot(g,'rgba(160,170,200,.3)',pz(q,35),gt+10+hr(q*5)*140,1.1)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1800,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const sg=cl((cam-15900)/900,0,1)*cl((19200-cam)/900,0,1);if(sg>.02)rect(g,'rgba(255,90,60,'+(.15*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- vita: gabbiani e cormorani, delfini lontani, falchi e nibbi, fenicotteri, cicogne sui tetti, asini con le ceste, cani, gatti, passanti, cavalieri numidi, pipistrelli di notte ---- */
function layerLife(g,o,t){const cam=o,xs=cam+240,hz=GT;
 const bird=(bx,by,s,w,c)=>{g.strokeStyle=c;g.lineWidth=s*1.9;g.beginPath();g.moveTo(bx-9*s,by+w);g.quadraticCurveTo(bx-4*s,by-4*s,bx,by);g.quadraticCurveTo(bx+4*s,by-4*s,bx+9*s,by+w);g.stroke()};
 /* gabbiani sul mare (zone 1-4 e 8) */
 const gv=Math.max(cl((9000-xs)/500,0,1)*cl((xs+200)/400,0,1),cl((xs-19000)/800,0,1)*.45);if(gv>.05)for(let i=0;i<5;i++){const bx=((i*131+t*(24+i*4))%640)-80,by=60+hr(i*3)*110+Math.sin(t*1.6+i*2)*14,w=Math.sin(t*9+i)*3;g.globalAlpha=gv;bird(bx,by,1.1,w,xs>19000?'rgba(220,225,240,.8)':'#f4f4f4');g.globalAlpha=1}
 /* cormorani bassi sul pelo dell'acqua (zone 1-2) */
 const cv=cl((5000-xs)/400,0,1)*cl((xs+200)/400,0,1);if(cv>.05)for(let i=0;i<3;i++){const bx=((i*210+t*(34+i*3))%600)-60,by=170+hr(i*5)*40+Math.sin(t*5+i)*3;g.globalAlpha=cv;bird(bx,by,.9,Math.sin(t*12+i)*2,'#1a1a22');g.globalAlpha=1}
 /* fenicotteri rosa in volo sopra la laguna (zone 3-4) */
 const fv=cl((xs-5600)/400,0,1)*cl((10200-xs)/400,0,1);if(fv>.05)for(let i=0;i<4;i++){const bx=((i*77+t*(18+i*2))%560)-50,by=90+i*14+Math.sin(t*1.2+i)*8,w=Math.sin(t*5+i)*4;g.globalAlpha=fv;ln(g,'#e87a9a',2,[bx-12,by+w,bx,by,bx+12,by+w]);ln(g,'#e87a9a',1.6,[bx+12,by,bx+22,by-2]);ln(g,'#e87a9a',1.2,[bx-12,by+2,bx-24,by+6]);g.globalAlpha=1}
 /* falchi e nibbi in alto (zone 5-7) */
 const kv=Math.min(cl((xs-10600)/500,0,1),cl((18200-xs)/500,0,1));if(kv>.05)for(let i=0;i<2;i++){const bx=((i*260+t*(14+i*3))%640)-80,by=50+hr(i*9)*50+Math.sin(t*.8+i*3)*10;g.globalAlpha=kv;bird(bx,by,1.5,2+Math.sin(t*2+i),'#3a2a1a');g.globalAlpha=1}
 /* pipistrelli attorno alle torce, di notte (zona 8) */
 const bn=cl((xs-19400)/800,0,1);if(bn>.05)for(let i=0;i<5;i++){const bx=((i*97+t*(34+i*3))%560)-40,by=90+hr(i*5)*120+Math.sin(t*5+i)*18,w=Math.sin(t*14+i)*3.4;g.globalAlpha=bn;g.strokeStyle='rgba(10,8,20,.9)';g.lineWidth=2;g.beginPath();g.moveTo(bx-7,by+w);g.lineTo(bx-2,by-2);g.lineTo(bx,by+1);g.lineTo(bx+2,by-2);g.lineTo(bx+7,by+w);g.stroke();g.globalAlpha=1}
 /* cicogne sui tetti, cani, gatti, asini, passanti, cavalieri numidi */
 each(o,520,31,(x,i,r)=>{const wx=cam+x,zz=zn(wx);A.setDK(nf(wx));
  if((zz==3||zz==6)&&r>.7){ln(g,'#2a1e14',2,[x+40,hz-128,x+40,hz-112]);el(g,'#f4f0e8',x+40,hz-138,8,5);ln(g,'#2a1e14',2.4,[x+34,hz-140,x+46,hz-140]);ln(g,'#d8402a',1.6,[x+48,hz-142,x+58,hz-142]);ln(g,'#2a1e14',1,[x+36,hz-134,x+36,hz-126])}
  if(zz>=2&&zz<=8&&r<.18)cane(g,x+60,hz+42,t,['#b8935a','#6a5a48','#d8c8a0'][md(i,3)]);
  if(zz>=2&&zz!=7&&r>.46&&r<.58)gatto(g,x+80,hz+46,t);
  if(zz==5&&r>.3&&r<.5){pecora(g,x+20,hz+44,1.2,t,1);pecora(g,x+54,hz+50,1.1,t+1,1)}
  if(zz==7&&r>.5&&r<.7)cavallo(g,x+60,hz+50,.6,t,md(i,2)?1:-1,'#7a5a3a')});
 each(o,430,57,(x,i,r)=>{const wx=cam+x,zz=zn(wx);if(r<.4||zz==7)return;A.setDK(nf(wx));const dir=md(i,2)?1:-1,off=Math.sin(t*.18+i)*70,f=Math.cos(t*.18+i)*dir>0?1:-1;
  if(r>.82&&zz!=8)asino(g,x+off,hz+56,1,t+i,f);else fp(g,x+off,hz+54,t+i,{f:f,s:.5,kilt:PAL[md(i,6)],long:md(i,3)==0,robe:PAL[md(i+2,6)],skin:['#d0996c','#c88e64','#b87c54'][md(i,3)]})});A.setDK(0);g.globalAlpha=1}

/* ---- personaggi ---- */
const NP=(id,x,o,acc)=>({id,name:NAME[id],x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));const c=q=>tn(o[q]);fig(g,px,y,t,Object.assign({f,s:1},o,{skin:c('skin'),top:c('top'),bot:c('bot'),hair:c('hair'),acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:GREET[id]}}});
const barba=(g,b,col,n,rows)=>{for(let r=0;r<rows;r++)for(let q=r;q<n-r;q++)dot(g,tn(col),-3+q*2.2,-92+b+r*4.6+(q%2)*1.6,3.2)};
const tunica=(g,b,c)=>{poly(g,tn(c),[[-12,-52+b],[12,-52+b],[15,-24],[-15,-24]]);rect(g,tn('#5a3a22'),-12,-54+b,24,5)};
const piedi=(g,c)=>{el(g,tn(c),-4,-1,8,4);el(g,tn(c),8,-1,8,4)};
const fascia=(g,b,c)=>rect(g,tn(c),-11,-111+b,23,3.4);
const npcs=[
 /* Eshmunyaton: tunica corta di lino, mantello sulle spalle, striscia di stoffa sulla fronte, pennello di giunco dietro l'orecchio, tavoletta e rotolo sotto il braccio, mani macchiate d'inchiostro */
 NP('fe_eshmunyaton',1700,{skin:'#c8906a',top:'#e8dcc0',bot:'#c8906a',hair:'#1a120c',s:1.0},(g,b,t)=>{tunica(g,b,'#e8dcc0');poly(g,tn('#a8503a'),[[-13,-90+b],[-4,-90+b],[-2,-60+b],[-14,-56+b]]);fascia(g,b,'#7a2a8a');ln(g,'#c8b070',1.8,[-6,-108+b,-4,-120+b]);
  rect(g,tn('#e8dcb8'),12,-76,13,17);rect(g,'rgba(60,30,10,.5)',14,-72,9,1.2);rect(g,'rgba(60,30,10,.5)',14,-68,7,1.2);ln(g,'#f0e8d0',4,[8,-70,14,-60]);dot(g,'#1a1a22',16,-78+b,1.8);dot(g,'#1a1a22',-14,-72+b*0,0);piedi(g,'#6a4a2a')}),
 /* Hiram I: veste lunga di lino con bordo di porpora, mantello, diadema d'oro, collare largo, bastone dorato, barba corta curata */
 NP('fe_hiram',4310,{skin:'#c8906a',top:'#f0e6cc',bot:'#f0e6cc',hair:'#2a1a10',long:1,s:1.06},(g,b,t)=>{rect(g,tn('#7a2a8a'),-14,-4,28,4);rect(g,tn('#7a2a8a'),-13,-91+b,26,3);poly(g,tn('#7a2a8a'),[[-13,-90+b],[-8,-90+b],[6,-44+b],[0,-44+b]]);
  barba(g,b,'#2a1a10',7,2);rect(g,tn(GLD_),-12,-113+b,24,3);for(let q=0;q<5;q++)dot(g,tn(GLD_),-9+q*4.6,-112+b,1.4);
  for(let q=0;q<7;q++)dot(g,tn(GLD_),-9+q*3,-86+b+Math.abs(q-3)*1.4,2);ln(g,'#e0b84a',3,[16,-6,16,-126]);dot(g,tn(GLD_),16,-130,4);ln(g,tn(SKN_),4,[12,-72,16,-70]);for(let q=0;q<5;q++)rect(g,tn('#c8a050'),-17+q*7,-3,4,3)}),
 /* Elissa: veste lunga di lino bianco con bordo viola, velo leggero sul capo, collana d'oro con amuleto, bracciali, occhi bordati di nero */
 NP('fe_elissa',6900,{skin:'#d0996c',top:'#f4eee0',bot:'#f4eee0',hair:'#1a120c',long:1,s:1.0},(g,b,t)=>{rect(g,tn('#7a2a8a'),-15,-5,30,4);rect(g,tn('#7a2a8a'),-13,-62+b,26,3);poly(g,'rgba(250,246,240,.7)',[[-13,-116+b],[10,-116+b],[16,-70+b],[-18,-62+b]]);rect(g,'rgba(122,42,138,.9)',-13,-112+b,24,2);
  for(let q=0;q<7;q++)dot(g,tn(GLD_),-8+q*2.8,-87+b+Math.abs(q-3)*1.2,1.8);dot(g,tn('#3a6ab0'),0,-81+b,2.6);ln(g,'#e0b84a',2.4,[11,-72,17,-70]);ln(g,'#e0b84a',2.4,[-17,-70,-11,-72]);ln(g,'#14110f',1,[5,-103+b,10,-103+b])}),
 /* Yatanbaal: tunica corta, grembiule di cuoio, fascia sulla fronte, mani nere di pece, ascia sulla spalla, compasso di legno e filo a piombo alla cintura */
 NP('fe_yatanbaal',10080,{skin:'#b87c54',top:'#c8a888',bot:'#b87c54',hair:'#1a120c',s:1.04},(g,b,t)=>{tunica(g,b,'#c8a888');poly(g,tn('#6a4228'),[[-10,-80+b],[10,-80+b],[12,-30],[-12,-30]]);fascia(g,b,'#a8503a');
  ln(g,'#5a3e22',3,[-8,-84+b,-18,-130]);poly(g,tn('#8a8a92'),[[-24,-130],[-12,-136],[-8,-120],[-20,-118]]);ln(g,'#7a5a3a',2,[10,-54,18,-30]);ln(g,'#4a3a2a',1.4,[-10,-52,-12,-34]);dot(g,'#4a4a52',-12,-32,2.4);dot(g,'#1a1612',9,-70,3);dot(g,'#1a1612',-8,-72,0);piedi(g,'#4a3a2a')}),
 /* Magone: tunica lunga color sabbia, mantello leggero, cappello di paglia a falda larga, rotolo di papiro e roncola alla cintura */
 NP('fe_magone',12100,{skin:'#c8906a',top:'#d8c8a0',bot:'#d8c8a0',hair:'#8a8a8a',long:1,s:1.0},(g,b,t)=>{poly(g,tn('#c8b890'),[[-13,-90+b],[10,-90+b],[12,-66+b],[-12,-58+b]]);
  el(g,tn('#d8c070'),0,-112+b,22,4.6);dot(g,tn('#d8c070'),0,-113+b,9.4);rect(g,tn('#a88a38'),-9.4,-114+b,18.8,2.4);ln(g,'#7a5a30',2,[-10,-58+b,-14,-50]);poly(g,tn('#8a8a92'),[[-15,-52],[-9,-54],[-8,-44],[-16,-46]]);rect(g,tn('#e8dcb8'),12,-76,16,10);ln(g,'#5a3e22',1.6,[12,-72,28,-72]);for(let q=0;q<5;q++)rect(g,tn('#9a8a6a'),-17+q*7,-3,4,3)}),
 /* Amatbaal: tunica lunga di lana ocra, mantello viola chiaro, orecchini a cerchio e a mezzaluna, collana di perline di vetro, capelli sotto un velo, fuso in mano */
 NP('fe_amatbaal',14040,{skin:'#d0996c',top:'#d8aa5a',bot:'#d8aa5a',hair:'#1a120c',long:1,s:.98},(g,b,t)=>{poly(g,tn('#b890d0'),[[-13,-90+b],[13,-90+b],[14,-72+b],[-14,-72+b]]);rect(g,tn('#e0b84a'),-13,-60+b,26,3);
  poly(g,'rgba(246,240,250,.75)',[[-12,-116+b],[10,-116+b],[14,-96+b],[-14,-92+b]]);for(let q=0;q<6;q++)dot(g,tn(q%2?'#3a6ab0':'#e8dcc0'),-8+q*3.2,-86+b+Math.abs(q-3)*1.2,1.7);dot(g,tn(GLD_),-9,-97+b,2.2);ln(g,'#e0b84a',1.4,[8,-99+b,8,-93+b]);
  ln(g,'#6a4a2a',1.8,[12,-70,22,-96]);el(g,tn('#c8a050'),22,-82,3,6);ln(g,'#e8e0c8',1,[22,-88,30,-60]);for(let q=0;q<5;q++)rect(g,tn('#b08a3a'),-17+q*7,-3,4,3)}),
 /* Annibale: corazza di lino e bronzo, elmo, mantello scuro, un occhio chiuso, anello d'oro, spada corta ricurva */
 NP('fe_annibale',17330,{skin:'#c08660',top:'#d8cdb0',bot:'#d8cdb0',hair:'#1a120c',long:0,s:1.08},(g,b,t)=>{tunica(g,b,'#cfc4a4');poly(g,tn('#8a8e96'),[[-12,-90+b],[12,-90+b],[11,-56+b],[-11,-56+b]]);for(let q=0;q<3;q++)rect(g,'rgba(0,0,0,.18)',-11,-82+b+q*10,22,1.6);poly(g,tn('#2a2430'),[[-13,-92+b],[-26,-50],[-12,-46],[-8,-86+b]]);
  el(g,tn('#8a8e96'),1,-110+b,13,8);rect(g,tn('#8a8e96'),-12,-110+b,26,4);poly(g,tn('#8a2a2a'),[[0,-118+b],[4,-132+b],[8,-118+b]]);ln(g,'#14110f',1.4,[5,-102+b,9,-103+b]);
  dot(g,tn(GLD_),14,-70,2);ln(g,'#7a5a3a',3,[10,-52,18,-44]);g.strokeStyle='#cfd2d8';g.lineWidth=2.4;g.beginPath();g.moveTo(18,-44);g.quadraticCurveTo(34,-48,36,-30);g.stroke();piedi(g,'#4a3a2a')}),
 /* Annone: mantello scuro con cappuccio, tunica corta, cintura con pugnale, elmo sotto il braccio, tavoletta con lettere puniche, barba corta e grigia */
 NP('fe_annone',19930,{skin:'#b8845c',top:'#2e2c3a',bot:'#b8845c',hair:'#6a6a70',s:1.04},(g,b,t)=>{tunica(g,b,'#3a3846');poly(g,tn('#2a283a'),[[-14,-94+b],[8,-94+b],[12,-36],[-16,-36]]);poly(g,tn('#2a283a'),[[-13,-96+b],[-6,-116+b],[8,-108+b],[10,-92+b]]);
  barba(g,b,'#8a8a90',6,2);rect(g,tn('#8a6a3a'),-12,-56+b,24,3);ln(g,'#8a8a92',2.4,[8,-54,12,-42]);el(g,tn('#8a8e96'),14,-78,9,6);rect(g,tn('#c8a468'),-22,-78,12,14);rect(g,'rgba(60,30,10,.5)',-20,-74,8,1.2);rect(g,'rgba(60,30,10,.5)',-20,-70,6,1.2);piedi(g,'#3a2a1a')})
];
const GLD_='#e0b84a',SKN_='#c8906a';

/* ---- oggetti lungo il percorso: [nome in elementi.js, posizione nel mondo, parametro] ---- */
const props=[
 /* zona 1 · Biblo e la costa del cedro */
 ['fetarga',120,'BIBLO'],['fepino',300,1.1],['febiblo',420],['fecesta',790],['fecantiere',1250],['fetettoia',1700],['fepino',1880,1],['fealfabeto',2050],['feancora',2260],['fesarcofago',2450],
 /* zona 2 · Tiro */
 ['fetarga',2790,'TIRO'],['feisola',3150],['femurici',3700],['fetini',4020],['femelqart',4650],['fezattera',5170],
 /* zona 3 · Cartagine */
 ['fetarga',5490,'CARTAGINE'],['fecartagine',5800],['fepino',6140,1],['fepelle',6450],['femura',6900],['fetanit',7380],['fetofet',7840],
 /* zona 4 · I porti */
 ['fetarga',8140,'I PORTI'],['feportomerc',8500],['feportocirc',9150],['feammiraglio',9820],['fecantierep',10300],
 /* zona 5 · La campagna */
 ['fetarga',10690,'CAMPAGNA'],['fegiardino',10950],['fearatro',11560],['fefico',12100],['fevasca',12480],['fealveari',13030],
 /* zona 6 · Il mercato e il Senato */
 ['fetarga',13290,'MERCATO'],['femercato',13700],['febanco',14040],['fetelaio',14380],['fesenato',14980],['femuraelef',15500],
 /* zona 7 · Annibale */
 ['fetarga',15890,'ANNIBALE'],['fecartagena',16220],['ferodano',16900],['fetendacom',17400],['fecanne',17980],['fezama',18560],
 /* zona 8 · Gadir e l'Atlantico */
 ['fetarga',19010,'GADIR'],['fegadir',19350],['fetorcia',19790],['fenaveann',20150],['fetorcia',20330],['fecolonne',20750],['fetorcia',21120],['feperiplo',21450],['festella',21990],['fetorcia',22250],['fevarco',W1-130]];

const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'fenici',name:'Fenici · Dalle città del cedro alle stelle dell’Atlantico',width:W1,sky:['#8a8ec4','#f4b4bc','#ffd8b4'],gt:372,gr:['#b49068','#8a6a48'],chord:[196,261.6,293.7,392],amb:'#ffe8c0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerLife)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da fenici.txt) --- */
(function(){
const TOPX_FE={
fe_eshmunyaton:[
["Chi sei e che fai?","Eshmunyaton, quarantaquattro anni, scriba del porto di Biblo. Il mio nome vuol dire \"Eshmun ha dato\", e Eshmun è un dio che guarisce. Registro i carichi che entrano ed escono e scrivo le lettere dei mercanti: un lavoro che serve a tutti, perché qui tutto si vende e tutto si conta."],
["Com’è Biblo?","Una piccola città di pietra, stretta fra il mare e la montagna, con case alte e vicoli ripidi. In fenicio la chiamiamo Gebal; i Greci, che da qui prendono il papiro, la chiameranno Biblo, e dalla loro parola per \"libro\" verrà anche la vostra \"Bibbia\". Qui vivono pescatori, carpentieri e mercanti, e la Signora di Biblo, la dea della città, protegge tutti."],
["Come funziona la vostra scrittura?","Con ventidue segni, uno per ogni suono di consonante, e si scrive da destra a sinistra. Le vocali non si scrivono: il lettore le aggiunge da solo, come quando capisci una parola anche se mancano delle lettere. Si impara in pochi mesi, mentre i segni degli egizi richiedono anni: per questo l’alfabeto piace ai mercanti."],
["Da dove vengono i segni?","Dai disegni: il primo segno, l’aleph, è una testa di bue, il secondo, il bet, è una casa, il mem è l’acqua, l’ayin un occhio, il resh una testa. Poi i disegni si semplificano fino a diventare quasi linee. I Greci un giorno li prenderanno e ne faranno l’alfa e la beta: la vostra \"A\" è ancora un bue capovolto. Si scrive con un pennello di giunco su papiro, che arriva dall’Egitto, o su cocci di terracotta: il papiro si conserva male, ecco perché dei nostri libri resterà quasi niente."],
["Cos’è quel sarcofago nella tomba reale?","È del re Ahiram, di circa il 1000 a.C., e l’ha fatto fare suo figlio Ittobaal. Sul bordo c’è una scritta che minaccia chi aprirà la tomba: gli spezzeranno lo scettro e gli faranno cadere il trono. I vostri studiosi lo scopriranno nel 1923 e diranno che è fra le più antiche iscrizioni fenicie."],
["Perché il cedro è così importante?","Sono alberi altissimi, dal legno rosso e profumato, che crescono sui monti dietro la città. Gli egizi ce lo comprano da secoli per i templi e le barche sacre, i re vicini per i palazzi. Si abbatte d’inverno e si fa scendere a valle sulle slitte: qui da noi diventa scafo, trave, porta o bara."],
["Un egizio è mai venuto qui?","Ne arrivano di continuo! Un funzionario di nome Wenamon, verso il 1075 a.C., venne a comprare cedro per la barca del dio Amon: il nostro principe lo fece aspettare per settimane e volle essere pagato in anticipo. Una volta Biblo dipendeva dall’Egitto; ormai tratta alla pari. Lo racconterà un testo che i vostri studiosi ricorderanno."],
["Come si vive a Biblo?","In case di pietra a più piani, con il tetto piatto dove si asciuga il pesce. Si mangia pane d’orzo e di grano, olive, olio, formaggio, fichi, pesce arrostito e un po’ di vino, diluito con acqua. D’inverno piove e le montagne si coprono di neve: quando scende il vento dalle cime, i bambini corrono a vederla."],
["Chi sono i vostri dèi?","Ogni città ha i suoi: a Biblo la Signora di Biblo, la padrona della città; a Tiro Melqart; a Sidone Eshmun e Astarte. Sopra tutti c’è El, il dio padre, e poi Baal, il \"signore\", che porta la pioggia e i temporali. Per i sacrifici ci sono sacerdoti e sacerdotesse, e i riti si fanno anche sulle navi."],
["Chi comanda e come vi chiamate?","Ogni città ha il suo re, con un consiglio di anziani e i mercanti, ed è libera in casa propria: Biblo, Tiro e Sidone non sono sottomesse l’una all’altra. Noi ci chiamiamo con il nome della nostra città, o cananei; i Greci ci chiameranno \"Phoinikes\", forse per la porpora, forse per il colore della pelle: è una parola loro."],
["Dove vado dopo?","Lungo la costa verso sud, a Tiro: un’isola con due porti, dove si tingono di porpora le stoffe dei re. La governa Hiram, un re che sa trattare con tutti ed è amico di sovrani lontani. Se arrivi presto, sentirai l’odore prima di vedere la città."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se trovi una scritta che va da destra a sinistra, non pensare che sia sbagliata: è giusta, e sono gli altri a scrivere al contrario! Se ripassi, ti insegno a scrivere il tuo nome in ventidue segni. Shalom, pace a te e buon viaggio!"]
],
fe_hiram:[
["Chi sei e che fai?","Hiram, figlio di Abibaal, re di Tiro: regno da circa trentaquattro anni, a quel che racconta chi conta gli anni dei re, intorno al 970 a.C. Il mio compito è tenere in pace la città, i porti, i mercanti e gli dèi, nell’ordine che preferiscono."],
["Com’è fatta Tiro?","Un’isola a poche centinaia di metri dalla riva, con mura alte e due porti, uno a nord e uno a sud, così da avere sempre un lato al riparo dal vento. Le case sono alte, a più piani, perché lo spazio è poco. Si racconta che io abbia unito alcuni isolotti con un terrapieno per ingrandire la città. Sulla terraferma stanno gli orti e l’acqua dolce."],
["Chi governa la città?","Io, ma non da solo: c’è un consiglio degli anziani, i mercanti più ricchi e i sacerdoti di Melqart. Il re è anche il garante dei patti: i trattati con gli altri re si giurano davanti agli dèi, e un giuramento tradito porta male. Un re sciocco si ritrova con le navi ferme e il porto vuoto."],
["Come si fa la porpora?","Si raccolgono i murici con nasse di vimini, si rompono le conchiglie, si lascia macerare e bollire la polpa per giorni in vasche, poi vi si immerge la lana: viene gialla, poi al sole diventa verde, rossa e infine viola. Servono migliaia di lumache per un solo panno: perciò vale quanto l’oro, e i re la portano. Il puzzo però è terribile: i tintori lavorano fuori dalle mura!"],
["Chi è Melqart?","Il \"re della città\": protegge Tiro, le navi e le colonie. Il suo tempio ha due colonne, una d’oro e l’altra di una pietra verde che di notte brilla: molti viaggiatori verranno a vederle. Le città che fondiamo lontano mandano ogni anno doni a Melqart, come un figlio manda un regalo al padre."],
["È vero che sei amico di re Salomone?","La Bibbia, che i vostri sapienti scriveranno, racconta che gli ho mandato legno di cedro e di cipresso, e operai esperti, per il suo tempio a Gerusalemme, in cambio di grano e olio. Dicono che poi lui mi abbia regalato venti città in Galilea e che a me non siano piaciute. Io, in ogni caso, preferisco i patti che si chiudono con un sorriso."],
["Cosa vendete e dove?","Cedro, porpora, stoffe, vetro colorato, avorio intagliato, metalli lavorati, vino e olio; e compriamo grano, lana, rame, argento, stagno. Le nostre navi sono panciute, con la vela quadrata e la prua a testa di cavallo: portano carichi enormi. Alcune partono per terre così lontane che, dicono, ci vogliono tre anni per tornare."],
["Dove sono le vostre colonie?","Dappertutto: a Cipro, a Malta, in Sicilia, in Sardegna, sulle coste dell’Africa e della Spagna. Secondo la tradizione, Utica, in Africa, nacque intorno al 1100 a.C. e Gadir, oltre lo Stretto, subito dopo; gli studiosi, con le pale in mano, ne troveranno tracce un po’ più recenti. Più tardi una principessa di casa nostra, Elissa, fonderà una città chiamata Cartagine."],
["Come vi chiamate e che lingua parlate?","Ci chiamiamo con il nome della nostra città: tirii, sidonii, bibliti; il nostro paese è Kenaan. Parliamo una lingua molto vicina a quella degli ebrei e degli altri cananei, e scriviamo con l’alfabeto di Biblo. È un’idea semplice: lo imparano tutti i mercanti, e lo prenderanno anche i Greci."],
["Come si naviga di notte?","Con le stelle: seguiamo quella del nord, che sta ferma mentre le altre girano. Di giorno si costeggia, di notte si dorme spesso a terra, ma per le rotte lunghe si naviga anche al buio. I Greci, dicono, la chiameranno \"stella fenicia\" proprio perché ce ne serviamo noi. Quando una nave ritorna, si fa festa al porto con musica e canti."],
["Dove vado dopo?","A ovest, per mare, fino alle coste dell’Africa, dove la tradizione colloca la città nuova di Elissa, una principessa della mia casa. È il futuro, ma i marinai lo trovano spesso prima degli storici. Porta un mantello: il mare è fresco la sera."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e che Melqart ti dia vento in poppa. Se ripassi di qui, ti faccio vedere un panno di porpora appena uscito dalla vasca: il viola è un colore che non si dimentica. Shalom, pace a te!"]
],
fe_elissa:[
["Chi sei e che fai?","Elissa, figlia di un re di Tiro e sorella del re Pigmalione. Il racconto, che molti secoli dopo scriverà un greco, Timeo, dice che ho fondato questa città nell’814 a.C. Sono qui con i miei compagni e le nostre navi, e cerco di far diventare un rifugio una casa."],
["Perché sei partita da Tiro?","Mio fratello Pigmalione, diventato re ancora ragazzo, fece uccidere il mio sposo, il sacerdote di Melqart, per prenderne le ricchezze. Io feci caricare le navi di nascosto e partii con i nobili e i sacerdoti che non volevano più vivere sotto di lui. Così racconta la tradizione: io ho solo viaggiato."],
["Com’è stato il viaggio?","Lungo, e con soste: a Cipro prendemmo a bordo un sacerdote di Astarte e un gruppo di giovani donne, perché i miei compagni potessero mettere su famiglia. Poi seguimmo la costa africana, che i marinai di Tiro conoscono bene, fino a questo golfo. Una città nasce così: con qualche nave, un po’ di coraggio e molta organizzazione."],
["Come hai avuto la terra?","Chiesi ai capi del luogo, i Libi, tanta terra quanta ne poteva coprire la pelle di un bue. Risero; io feci tagliare la pelle in striscioline sottilissime e con quelle circondai tutta la collina. Gli studiosi diranno che il nome Byrsa è una parola fenicia per \"fortezza\" confusa dai Greci con la loro parola per \"pelle\": forse hanno ragione, ma la storia è più bella."],
["Cosa c’è in una città nuova?","Case di mattoni e di pietra, imbiancate di calce, con una cisterna per l’acqua piovana e un cortile; un tempio, un porto, una piazza, una muraglia. Qui si usa la calce per tutto: la pietra calcarea si cuoce, si spegne con l’acqua e diventa malta e intonaco. Le strade scendono verso il mare, dove ci sono i moli."],
["Quali dèi onorate?","Quelli che abbiamo portato da Tiro: Melqart, Astarte, Eshmun che guarisce. Qui, con il tempo, prenderanno il primo posto Baal Hammon e la dea Tanit, che sarà la signora della città. Prima di ogni impresa si fa un’offerta di incenso, pane o animali; i patti si giurano nel nome degli dèi, davanti ai testimoni."],
["Come si vive in una città nuova?","Si lavora dall’alba al tramonto: chi costruisce, chi pesca, chi semina, chi fa i vasi. Si mangia pane, olive, pesce, datteri e fichi. Di sera ci si ritrova in piazza a parlare del giorno e del domani, e si ride, perché chi ha lasciato casa ha bisogno di ridere più degli altri."],
["Come vanno i rapporti con Tiro e con i Libi?","Con Tiro restiamo legati: mandiamo ogni anno doni a Melqart, perché una città figlia non dimentica la madre. Con i Libi si commercia e ci si sposa, anche se al principio pagavamo un tributo per l’uso della terra, come racconterà un autore latino. Ci hanno accolti meglio di quanto temevo, a parte uno dei loro re."],
["Come finisce la tua storia?","Un re libico, che il racconto chiama Iarba, mi chiese in sposa e minacciò la città di guerra se avessi rifiutato. Secondo la tradizione preferii non cedere e la mia vita finì lì; i cartaginesi mi onorarono come una dea finché la città rimase in piedi. È una storia triste: ricordala con rispetto."],
["E Enea?","Un poeta romano, Virgilio, racconterà molto tempo dopo che mi sono innamorata di un eroe troiano, Enea, in fuga dalla sua città. Ma la guerra di Troia sarebbe più antica della mia fuga di oltre tre secoli: le date non tornano, e i miei cartaginesi non lo raccontavano così. Resta una bella poesia, e i Romani amavano dare storie ai loro nemici."],
["Dove vado dopo?","Scendi al porto, in basso: c’è un cantiere dove un carpentiere, Yatanbaal, ti mostra come nasce una nave. Fa’ attenzione agli scalini: sono ripidi come la nostra storia. Il porto e il mare sono ciò per cui questa città vivrà."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando vedi una città nuova, ricordati che prima c’era solo una collina. Se ripassi, ti faccio vedere come si taglia una pelle di bue. Shalom, e che Astarte ti protegga!"]
],
fe_yatanbaal:[
["Chi sei e che fai?","Yatanbaal, cinquantun anni, carpentiere e capo di una squadra di venti uomini. Costruisco e riparo le navi di Cartagine, quelle da guerra e quelle da carico. Mio padre faceva questo mestiere e mio figlio comincia già a tenere l’ascia: tre generazioni di pece e di trucioli."],
["Com’è fatto il porto?","Due porti: quello rettangolare, per i mercanti, con i magazzini e le banchine; e questo circolare, per le navi da guerra, nascosto dietro. Un canale stretto li collega, e l’ingresso dal mare si può sbarrare con catene di ferro. Chi arriva dal mare non vede niente: vede solo mura."],
["Perché un porto rotondo?","Per far stare molte navi in poco spazio e farle uscire in fretta: tutt’intorno ci sono i ricoveri, con due colonne davanti a ciascuno, e secondo lo storico Appiano ne entrano duecentoventi. Al centro, sull’isola, abita l’ammiraglio, che da lì vede il porto e anche il mare, e dà gli ordini con le trombe. Un bello spettacolo, quando la flotta esce."],
["Come si costruisce una nave?","Si parte dalla chiglia, poi si montano le tavole dello scafo, unite a incastro con cavicchi di legno, e solo dopo le costole. Il legno è pino e cedro, che arrivano da lontano. Poi si spalma di pece, si rinforza e si dipinge la prua: a volte con degli occhi, per vedere la strada. Una nave ben fatta dura vent’anni e più."],
["Cosa sono quelle lettere sulle tavole?","Segni per sapere dove va ogni pezzo: una lettera, e il pezzo trova il suo posto senza discutere. Così si monta in fretta, anche in tempo di guerra. Una nave trovata al largo di Marsala, dopo più di duemila anni, avrà ancora queste lettere: segno che qui siamo gente ordinata."],
["Come sono le navi da guerra?","Lunghe e strette, con un rostro di bronzo a prua per sfondare gli scafi nemici e centinaia di rematori seduti su più file. La quinquereme è la più grande che usiamo. Un colpo di rostro e il mare fa il resto. Sono veloci, ma richiedono equipaggi allenati: un rematore stonato rovina tutta la nave."],
["E le navi da carico?","Panciute, con un grande scafo rotondo, una vela quadrata e due remi timone ai lati. Portano anfore di vino, olio, grano, lingotti di metallo. Dalla Sicilia alla Spagna si va a vela, ma prima di partire si sacrifica agli dèi e si guarda la stella: è la regola."],
["È vero che i Romani copiano le vostre navi?","Dicono di sì: la prima guerra con Roma comincia nel 264 a.C., e i Romani non avevano una flotta. Si racconta che prendessero una nostra nave arenata e la copiassero, costruendo in poco tempo molti scafi uguali e allenando i rematori a terra, sulla sabbia. Poi inventarono un ponte con un uncino per abbordare. Furbi, bisogna ammetterlo."],
["E come è finita quella guerra?","Male. Nel 241 a.C., presso le isole Egadi, la flotta romana colpì la nostra, carica di rifornimenti per la Sicilia, e vinse. Così perdemmo l’isola e dovemmo pagare un’indennità. Al mio mestiere non resta che ricostruire: il mare è un campo che si semina di legno."],
["Come vive un carpentiere?","Si lavora dall’alba al tramonto, con una pausa a mezzogiorno per il pane, le olive e il formaggio. Gli operai sono liberi e pagati, ci sono gli apprendisti e ognuno ha il suo mestiere: chi taglia, chi pialla, chi calafata. La sera ci si ritrova alla taverna del porto, con vino diluito, pesce arrostito e racconti di mare: se ascolti bene, si dice di tutto."],
["Dove vado dopo?","Fuori città, verso la campagna, nella tenuta di Magone, un agronomo che ha scritto un libro. Porta un cappello: il sole del Capo Bon non perdona, né i carpentieri né i filosofi."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se sali su una nave, tocca il legno: porta fortuna. Se ripassi, ti faccio provare l’ascia. Shalom, e mare calmo!"]
],
fe_magone:[
["Chi sei e che fai?","Magone, proprietario di terre e scrittore, cartaginese. Gestisco una tenuta di grano, ulivi e vigne e ho messo per iscritto quello che ho imparato in una vita, e quello che hanno imparato prima di me i nostri contadini e i Libi: l’esperienza è un seme, e va seminata."],
["Che cosa c’è nel tuo libro?","Ventotto libri, in lingua punica: come si scelgono la terra, la vite, l’ulivo; come si potano gli alberi; come si fanno il vino e l’olio; come si tengono i buoi, i cavalli, le api e il pollame. È l’opera di un uomo che ha sporcato le mani e di una città che ha capito che la terra è ricchezza. I Romani, un giorno, mi chiameranno \"padre degli agricoltori\"."],
["Come si lavora la terra e si porta l’acqua?","Si ara con aratri di legno e vomere di ferro, trainati da buoi; si semina in autunno; si irriga con pozzi, secchi a catena e canali. Le terre vicino a Cartagine sono tra le più curate del mondo: file di alberi, siepi, aiuole, cisterne. Il segreto è non avere fretta e non lasciare mai il campo dopo la pioggia."],
["Cosa si coltiva?","Grano e orzo per il pane; legumi, cipolle e aglio per la zuppa; ulivi, viti, fichi, melograni, datteri e mandorle per il resto. Il melograno è la mia gioia: i Romani lo chiameranno \"mela punica\", e ci metteranno il nostro nome. Una frutta rossa, piena di semi, che porta fortuna."],
["Come si fa il vino?","L’uva si coglie matura, si lascia ancora un giorno al sole, si pesta in una vasca e il mosto fermenta in grandi giare. C’è anche un vino dolce, fatto con uva lasciata appassire al sole fino a diventare quasi uva passa: lo chiamano \"passum\". Lo descrivo nel libro con tutti i passaggi: un vino buono vale più di una battaglia."],
["E l’olio?","Le olive si raccolgono a mano e si pestano sotto una macina, poi si spremono in un torchio di legno e di pietra: ne esce una pasta e poi l’olio. Serve per mangiare, per le lampade e per ungersi la pelle. Si conserva in anfore appuntite, tappate con calce e terracotta, e viaggia sulle navi per mezzo Mediterraneo."],
["E le api e il bestiame?","Le api si tengono in alveari cilindrici di terracotta, e il miele serve a dolcificare tutto. Nel libro dico di non uccidere i fuchi e di affumicare con delicatezza. Per gli animali: buoi robusti, buone pecore, capre da latte, asini e muli per i carichi, e cavalli per le corse e per la guerra. Un fattore che non conosce il suo bestiame ha dei guai."],
["Chi lavora nei campi?","Famiglie di contadini, in gran parte libici, che lavorano le terre dei signori o le proprie, e operai assunti per la raccolta; nelle grandi tenute ci sono anche schiavi, e la sorveglianza è stretta. A mezzogiorno si mangia insieme all’ombra, con pane, olive e formaggio. Io dico sempre di trattar bene chi lavora: un campo curato rende il doppio."],
["È meglio vivere in città o in campagna?","Nel libro consiglio di comprare una tenuta e di vendere la casa in città: chi ama troppo la città non si cura abbastanza della terra. Eppure le nostre campagne fanno impressione: quando il siracusano Agatocle sbarcò in Africa, nel 310 a.C., i suoi soldati restarono stupiti da fattorie, giardini, ulivi e vigne. Gli storici lo racconteranno con meraviglia."],
["Cosa succederà al tuo libro?","Dopo la fine di Cartagine, nel 146 a.C., la nostra biblioteca verrà regalata ai re numidi, ma il Senato di Roma farà tradurre in latino il mio libro, a spese dello Stato, a un uomo di nome Silano. Così, curiosamente, i miei consigli passeranno ai Romani. È tutto ciò che resterà di me: ma una pagina di agricoltura fa meno rumore e dura di più."],
["Dove vado dopo?","Torna verso la città, e lascia la strada polverosa per quella lastricata: al mercato troverai Amatbaal, che tesse e vende. Porta un cestino e riempilo di fichi e melograni: sono il mio regalo. Il resto si compra con un buon prezzo."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati che chi pianta un ulivo lo fa per i nipoti. Se ripassi, ti mostro come si innesta un fico. Shalom, e che il raccolto sia buono!"]
],
fe_amatbaal:[
["Chi sei e che fai?","Amatbaal, trentotto anni, tessitrice. Tengo il banco con mia sorella, e a casa ho un telaio e due figlie che già filano. Il mio nome vuol dire \"serva di Baal\", ma al mercato, ti assicuro, comando io!"],
["Cosa si vende qui?","Di tutto: argento e rame di Spagna, grano di Sardegna, vasi greci, olio, vino, uova di struzzo incise, avorio, vetro, profumi, pesce salato di Gadir. Al mercato si parlano mille lingue, ma il prezzo lo capiscono tutti. Se lo sai ascoltare, il mercato è la voce del mondo."],
["Come si tesse e come si tinge?","Si fila la lana con il fuso, si tende l’ordito sul telaio verticale con i pesi di terracotta, poi si passa la trama; una veste richiede settimane. La porpora costa moltissimo, perché si ricava da migliaia di murici: io la compro a poco per volta da Tiro e ne faccio bordi per le vesti dei ricchi. Per tutti i giorni usiamo tinture più modeste: robbia, zafferano, guado."],
["Come si paga?","Si pesa l’argento sulla bilancia, oppure si baratta; da qualche tempo a Cartagine si coniano anche monete, con una testa di cavallo e una palma. Per le merci più lontane c’è un metodo curioso: raccontano che sulle coste dell’Africa oltre le Colonne si lasci la merce sulla spiaggia e ci si ritiri; gli abitanti lasciano dell’oro in cambio e si tratta finché ognuno è contento. Lo scriverà un greco, Erodoto."],
["Com’è la tua casa?","Alta e stretta, a più piani, con un cortile al centro e una cisterna per la pioggia. Il pavimento è di cocciopesto rosa con tesserine bianche, e c’è perfino un bagno con una vasca di terracotta. Sul tetto piatto si stende il bucato e d’estate si dorme al fresco. Le scale sono ripide, come i prezzi!"],
["Cosa si mangia?","Pane, olive, olio, formaggio, fichi, datteri, melograni, pesce arrostito o salato e tanta frutta secca. Poi c’è una pappa di farina con formaggio fresco, miele e un uovo, che i Romani copieranno e chiameranno \"pappa punica\". Il vino si beve diluito, e a tavola si mangia seduti. Per le feste si cuoce l’agnello: un profumo che arriva fino al porto."],
["Come vi vestite e vi adornate?","Gli uomini portano una tunica lunga e un mantello, e molti anelli e orecchini, a cerchio o a mezzaluna. Le donne vesti lunghe, veli, gioielli e amuleti: un occhio, uno scarabeo, una mano; tutto ciò che protegge è ben accetto. Si usano unguenti profumati e ombretti scuri. Sulle tombe, a volte, si lasciano maschere di terracotta con una smorfia: servono a spaventare gli spiriti."],
["Cos’è quel recinto sacro vicino al porto?","Un luogo di preghiera, con stele di pietra e urne: si lasciano offerte a Baal Hammon e alla dea Tanit. Dentro ci sono ceneri di bambini molto piccoli e di animali. I Greci e i Romani diranno che erano sacrifici; i vostri studiosi, molti secoli dopo, lo chiameranno \"tofet\" e non sono d’accordo fra loro, e se ne discute ancora. Per me è un luogo di dolore e di silenzio."],
["Chi governa la città?","Due sufeti, eletti ogni anno, un Senato di anziani e un’assemblea del popolo. Il generale comanda l’esercito, ma deve rendere conto. Il filosofo greco Aristotele ne parlerà bene. Io non vado in Senato, ma al mercato si ascolta tutto: si sa prima dei discorsi che cosa deciderà la città."],
["Come vanno le cose con Roma?","Dopo la sconfitta di Zama, nel 202 a.C., abbiamo perso la Spagna e la flotta e abbiamo pagato una somma enorme a Roma, a rate, e puntualmente. Ma a Roma c’è un vecchio senatore, Catone, che si dice finisca ogni discorso dicendo che Cartagine dev’essere distrutta. Nel 146 a.C., dopo una guerra di tre anni, la città verrà conquistata e distrutta. È un pensiero doloroso: non parliamone più."],
["Dove vado dopo?","Segui il suono delle trombe, oltre le mura: il nostro generale Annibale ha attraversato le Alpi con gli elefanti, e mio padre è stato con lui. Va’ a vederlo, ma da lontano, che è pieno di soldati. E non toccare gli elefanti: hanno più memoria di me."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se trovi una stoffa viola per terra, non calpestarla: vale più di te! Se ripassi, ti faccio provare il telaio. Shalom, e buon vento!"]
],
fe_annibale:[
["Chi sei e che fai?","Annibale Barca, nato nel 247 a.C., figlio di Amilcare, generale cartaginese. Il mio nome significa \"grazia di Baal\". Comando un esercito di molti popoli e il mio mestiere è sorprendere i Romani prima che sorprendano me."],
["Perché combatti contro Roma?","Mio padre Amilcare, quando avevo nove anni, mi fece giurare davanti all’altare di non essere mai amico di Roma: così raccontano. Prima ancora Cartagine aveva perso la Sicilia, e poi Roma si prese anche la Sardegna, in un momento in cui eravamo deboli. Non è odio: è memoria."],
["Come hai preparato la guerra?","In Spagna, dove con mio padre, mio cognato Asdrubale e i miei fratelli abbiamo creato un dominio ricco di argento, con Qart-Hadasht di Spagna come capitale. Ho preso il comando a ventisei anni. Prima di partire sono andato a Gadir, al tempio di Melqart, a sciogliere i miei voti, e poi ho marciato verso nord."],
["Chi c’è nel tuo esercito?","Libi e Numidi, con la cavalleria più veloce del mondo, Iberi, Galli, frombolieri delle Baleari e un nucleo di cartaginesi: parliamo molte lingue, ma obbediamo a un solo ordine. Un esercito misto è come un mosaico: pezzi diversi, ma un solo disegno."],
["Com’è stato passare le Alpi?","Duro. Nell’autunno del 218 a.C., fra freddo, frane e attacchi dei montanari, perdemmo molti uomini e molti animali. Gli storici romani racconteranno che per aprire la strada si scaldassero le rocce con il fuoco e poi ci si versasse aceto: si discute se sia vero. Dove sia passato, esattamente, la gente ancora lo discute; io lo so, ma non lo dico!"],
["E gli elefanti?","Ne avevo trentasette, secondo lo storico Polibio: elefanti africani, che i Romani non avevano mai visto in battaglia. Per passare il Rodano si fecero zattere ricoperte di terra, così gli elefanti credevano di camminare sul suolo. Quasi tutti morirono di freddo nel primo inverno in Italia. Servivano più a spaventare che a combattere."],
["Cosa è successo a Canne?","Il 2 agosto del 216 a.C., secondo la data tradizionale, i Romani erano molto più numerosi di noi. Misi il centro, a forma di mezzaluna, a ritirarsi lentamente, mentre le ali e la cavalleria li chiudevano alle spalle. In poche ore l’esercito romano fu circondato: le fonti parlano di decine di migliaia di morti. Mio fratello Magone portò a Cartagine gli anelli d’oro dei caduti e li versò davanti al Senato."],
["Perché non hai marciato su Roma?","Un mio ufficiale, Maarbale, mi disse, si racconta, che sapevo vincere ma non usare la vittoria. Ma Roma era circondata da mura e da alleati fedeli, e io non avevo né macchine d’assedio né rinforzi. Rimasi quindici anni in Italia, a logorare Roma e a cercare alleati: la nostra guerra fu una lunga pazienza."],
["Come è finita a Zama?","Scipione, un generale romano giovane e audace, portò la guerra in Africa nel 204 a.C. Nel 202 a.C., presso Zama, la sua cavalleria numida, guidata da Massinissa, ruppe la mia, e i fanti romani chiusero il cerchio. Fu un mio errore? Forse, forse no: nessuna battaglia si ripete uguale. La pace costò a Cartagine la Spagna e quasi tutte le navi, più una forte somma."],
["E dopo Zama?","Fui eletto sufeta a Cartagine e feci riforme per sistemare finanze e tribunali; ma i miei nemici mi denunciarono ai Romani e dovetti partire. Servii re in Oriente, Antioco III e poi Prusia di Bitinia. Alla fine, secondo la tradizione, preferii morire libero piuttosto che essere consegnato ai Romani, intorno al 183 a.C., a circa sessantaquattro anni."],
["Dove vado dopo?","A ovest, a Gadir, alla porta dell’Oceano. Lì puoi trovare un ammiraglio che ha esplorato l’Atlantico quando ancora nessuno osava: Annone, un cartaginese del tempo dei nostri padri. Va’ di notte, quando le navi salpano: il mare è più grande al buio."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se un giorno dovrai vincere con meno uomini del nemico, ricordati che il terreno e la pazienza contano più dei numeri. Se ripassi, ti racconto di quando ho scritto un’iscrizione in punico e in greco. Shalom, e che Baal ti guardi le spalle!"]
],
fe_annone:[
["Chi sei e che fai?","Annone, cartaginese di una famiglia importante, i Magonidi. Il mio Senato mi manda a guidare una grande flotta oltre lo Stretto, a fondare città e ad aprire le rotte dell’Atlantico. Il mio incarico: scoprire, e tornare."],
["Com’è Gadir?","Una città bianca su una penisola, vicino a un isolotto con il tempio di Melqart; secondo la tradizione fu fondata intorno al 1100 a.C. dai Tirii. Si vendono tonno salato, argento, rame e pesce in vasche di sale. Qui finisce il Mediterraneo e comincia qualcosa che non ha ancora un nome."],
["Cosa sono le Colonne d’Ercole?","Le due rocce ai lati dello Stretto: una in Europa, una in Africa. I Greci le chiamano così, e dicono che il loro eroe sia passato di qui. Per noi è il punto dove il mare cambia colore e le onde diventano lunghe. Per molti, il confine del mondo; per i miei marinai, l’inizio."],
["Perché hai fatto questo viaggio?","Per fondare colonie e per aprire la strada all’oro e alle altre ricchezze dell’Africa occidentale: Cartagine vuole rotte nuove e porti sicuri. Il racconto, in greco, dice che partimmo con sessanta navi e con trentamila persone, una cifra che i vostri studiosi trovano esagerata. Io so soltanto che le navi non bastavano mai."],
["Cosa avete fondato?","Lungo la costa atlantica dell’Africa, secondo il racconto, sei città, a poca distanza l’una dall’altra, lasciando in ciascuna i coloni. Una, Arambys, sarebbe vicina a un’isola che alcuni studiosi identificano con Mogador: lì si trovano le conchiglie per la porpora. Ogni città aveva un porto, un tempio e un pozzo."],
["Chi avete incontrato?","Dei nomadi, i Lixiti, che vivevano lungo un grande fiume: alcuni avevano imparato qualche parola di fenicio dai mercanti. Due di loro vennero con noi a farci da interpreti. Più a sud incontrammo altri popoli che non capivano nessuna lingua, e diffidenti: in quei casi si lascia la merce sulla riva e si aspetta."],
["Cosa avete visto?","Un fiume pieno di coccodrilli e di ippopotami; una montagna con un fuoco che bruciava di notte e che chiamammo \"Carro degli dèi\"; un’isola con un lago, e grandi esseri pelosi che i nostri interpreti chiamavano \"gorillai\". Ne portammo le pelli a Cartagine, come prova. I vostri studiosi diranno che erano scimmie, forse gorilla."],
["Come racconti il viaggio?","Con un testo scritto, il \"Periplo\", che ho deposto nel tempio di Baal Hammon a Cartagine, che i Greci chiamano il tempio di Crono. L’originale in punico non si è conservato; ne resta una traduzione in greco, breve e asciutta. Fino a dove io sia arrivato, davvero, gli studiosi ancora discutono: io posso dire solo che quella montagna di fuoco c’era."],
["Si può girare intorno all’Africa?","Qualcuno ci è riuscito, dicono: Erodoto racconta che il faraone Necao II, intorno al 600 a.C., mandò marinai fenici a partire dal Mar Rosso e a tornare dalle Colonne d’Ercole in tre anni, raccontando che il sole stava alla loro destra. Erodoto non ci credeva: ma è proprio così che sarebbe, navigando verso ovest sotto la punta dell’Africa."],
["Come si naviga di notte?","Con la stella del nord, la più ferma del cielo, vicino al polo: i Greci la chiamano la \"stella fenicia\", o quasi. Poi si guardano le onde, il vento, il colore dell’acqua e gli uccelli che tornano a terra. Si tiene la costa in vista quanto si può, e in mezzo al mare si prega."],
["Dove vado dopo?","Nel varco: guarda quella nave con la lanterna, è l’ultima ancora in porto. Segui la stella del nord: ti indicherà la rotta, e ogni rotta porta a un nuovo porto. Non avere paura: il mare è fatto per essere attraversato."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando vedi una stella ferma in mezzo a tante che girano, ricordati dei Fenici. Se ripassi, ti porto in barca fino alle Colonne. Shalom, e che Melqart ti dia vento!"]
]
};
Object.assign(TOPX,TOPX_FE);
})();
