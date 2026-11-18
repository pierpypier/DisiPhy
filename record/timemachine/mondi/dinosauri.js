/* ---------- DINOSAURI · Dall'alba del Triassico al tramonto del Cretaceo (valle vulcanica, bosco di conifere, pianura dei giganti, laguna di Solnhofen, foreste del Cretaceo, delta, Gobi, mare interno, Hell Creek) ---------- */
/* Un'intera giornata da sinistra a destra, e un tempo che si piega (circa 160 milioni di anni in una sola giornata): alba nella valle vulcanica dei primi dinosauri,
   mattina nel bosco di conifere, tarda mattina nella pianura dei giganti, mezzogiorno sulla laguna di Solnhofen, primo pomeriggio nelle foreste del Cretaceo inferiore,
   pomeriggio nel delta e in Patagonia, pomeriggio avanzato nelle dune del Gobi, tardo pomeriggio sulla costa del mare interno, tramonto a Hell Creek:
   in fondo un'apertura fra due tronchi altissimi, con un nido a terra e uno stormo di piccoli uccelli che si alza in controluce: lì il motore mette il varco.
   Testi, tappe e dialoghi vengono da dinosauri.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico). Gli oggetti (nomi che iniziano per "dn")
   sono definiti qui, in questo stesso file, e non toccano elementi.js. Nessun essere umano, nessuna scena cruenta: solo animali, piante antiche, rocce, acqua e cielo. */
(function(){
const GT=372,W1=24380,NT=47;
const LKTXT=[
"Circa 230 milioni di anni fa tutte le terre emerse formavano un solo supercontinente, la Pangea. Nella futura Argentina, in una pianura di fiumi e vulcani con stagioni umide e secche, vivevano alcuni dei più antichi dinosauri conosciuti, in mezzo a rettili ben più grandi di loro.",
"Eoraptor, \"ladro dell’alba\", era un dinosauro lungo circa un metro, agile e leggero, trovato nel 1991 e descritto nel 1993. Mangiava forse piccole prede e piante; dove collocarlo nell’albero dei dinosauri è ancora discusso dagli studiosi.",
"Herrerasaurus era il predatore più comune di questa valle: snello, con denti ricurvi, artigli sulle mani e una lunghezza, secondo le stime, fino a circa sei metri. Fu scoperto negli anni Cinquanta e prende il nome da un allevatore argentino, Victorino Herrera.",
"In questa valle i dinosauri erano ancora una minoranza: secondo gli studiosi, per almeno altri dieci milioni di anni sarebbero rimasti una parte secondaria della fauna, dominata da altri rettili. Solo più tardi sarebbero diventati i signori dei continenti.",
"Plateosaurus, circa 214-204 milioni di anni fa, fu uno dei più grandi dinosauri del suo tempo, lungo da quasi cinque a dieci metri. Brucava piante, aveva gli occhi ai lati della testa per sorvegliare i dintorni, e di lui in Germania e in Svizzera sono stati trovati i resti di più di cento individui.",
"Lungo i fiumi di questo mondo vivevano anche animali che non erano dinosauri: fitosauri simili a coccodrilli, grandi anfibi e i primi pterosauri. I dinosauri erano soltanto una parte della vita di allora.",
"Coelophysis, \"forma cava\" per le sue ossa leggere, era un cacciatore snello lungo circa tre metri, veloce e dagli occhi grandi. A Ghost Ranch, in New Mexico, nel 1947 sono stati trovati i resti di centinaia di individui di ogni età; se vivessero in branco, gli studiosi lo discutono.",
"Nei boschi europei di fine Triassico viveva anche Liliensternus, un predatore lungo circa cinque metri, che condivideva gli stessi ambienti dei Plateosaurus. In questo mondo i grandi erbivori avevano già i loro cacciatori.",
"Le piante di questo mondo erano antiche: conifere, felci, equiseti, cicadee e ginkgo. Non c’erano ancora fiori né prati di erba, e le radure erano campi di felci.",
"Circa 150 milioni di anni fa, nell’ovest dell’America di oggi, pianure di fiumi e laghi stagionali ospitavano i più grandi animali che abbiano mai camminato sulla terra: i sauropodi, erbivori dal collo lunghissimo. Le loro ossa si trovano oggi nelle rocce della Formazione Morrison.",
"Diplodocus era lungo circa ventiquattro metri, con un collo lunghissimo, una testa minuscola con denti a matita e una coda a frusta di circa ottanta vertebre. Il primo scheletro quasi completo fu scoperto nel Wyoming fra il 1899 e il 1900.",
"Allosaurus, lungo da otto a dodici metri, era il grande predatore più comune di questo mondo: i suoi denti seghettati si trovano vicino alle ossa dei sauropodi. Se cacciasse in gruppo, gli studiosi lo discutono: in una cava dello Utah sono stati trovati almeno quarantaquattro individui.",
"Stegosaurus, fino a nove metri, portava sul dorso due file di placche e sulla coda quattro punte lunghe da sessanta a novanta centimetri. A cosa servissero le placche (esibirsi, forse regolare il calore) è discusso. Visse circa ottanta milioni di anni prima del T. rex: quest’ultimo è più vicino a noi che a lui.",
"In Tanzania, a Tendaguru, viveva Giraffatitan, il \"titano giraffa\", un sauropode dal collo alto e dalle zampe anteriori lunghe. Lo scheletro montato a Berlino, di un individuo ancora giovane, è alto più di tredici metri ed è il più alto scheletro di dinosauro montato al mondo.",
"Circa 150 milioni di anni fa, dove oggi c’è la Baviera, lagune calde e tranquille erano separate dal mare aperto da scogliere. Il fango finissimo del fondo ha conservato per milioni di anni animali interi e perfino le tracce delle piume.",
"Archaeopteryx era grande circa mezzo metro e pesava circa un chilo: aveva penne sulle ali e sulla coda, ma anche denti, artigli sulle dita e una lunga coda ossuta. La prima penna fu trovata nel 1861, e poco dopo il primo scheletro; quanto bene volasse è ancora discusso.",
"Compsognathus era un piccolo dinosauro predatore lungo poco più di un metro, snello e veloce, che viveva sulle isole della laguna e cacciava piccoli animali come le lucertole. Gli studiosi discutono se avesse piume.",
"Sopra la laguna volavano gli pterosauri, rettili volanti: non erano dinosauri, ma cugini lontani con un antenato in comune. A Solnhofen ne sono stati trovati moltissimi.",
"Circa 125 milioni di anni fa, nelle foreste dell’Europa, viveva Iguanodon, fra i primi dinosauri mai scoperti: nel 1822 Mary Ann Mantell trovò dei suoi denti in Inghilterra. Nel 1878, in una miniera di carbone di Bernissart, in Belgio, a 322 metri di profondità, i minatori trovarono più di trenta suoi scheletri.",
"Sinosauropteryx, trovato da un contadino nel 1996, era un piccolo dinosauro lungo circa un metro, con una coda lunghissima e un pelo di filamenti: è il primo dinosauro di cui si è potuto ricostruire il colore, rossiccio, con la coda a bande chiare e scure. Visse circa 125 milioni di anni fa, nell’attuale Cina.",
"Microraptor, circa 120 milioni di anni fa, era un piccolo dinosauro con lunghe penne sulle braccia e anche sulle zampe posteriori, come se avesse quattro ali. Le sue penne erano nere con riflessi blu; gli studiosi pensano che planasse da un albero all’altro.",
"Yutyrannus, circa 125 milioni di anni fa, era un tirannosauroide piumato lungo circa nove metri, parente lontano del T. rex. Il suo corpo era coperto da lunghi filamenti.",
"Deinonychus, \"terribile artiglio\", viveva circa 110 milioni di anni fa nel Montana e nel Wyoming; era lungo circa tre metri e aveva un artiglio a falce sul secondo dito del piede. La sua scoperta, descritta nel 1969, cambiò il modo di vedere i dinosauri: non più lenti rettili, ma animali agili e attivi, parenti degli uccelli. Se cacciasse in gruppo, gli studiosi lo discutono.",
"Circa 95 milioni di anni fa, nell’attuale Marocco, un grande delta ospitava più grandi predatori che grandi erbivori: gli studiosi notano che nessun ambiente di oggi ha una fauna così sbilanciata verso i carnivori. Fra i predatori c’erano Spinosaurus e Carcharodontosaurus, insieme a grandi coccodrilli e pterosauri.",
"Spinosaurus, lungo più di quattordici metri secondo molte stime, aveva un muso lungo da coccodrillo, una vela sulla schiena e zampe posteriori corte. Nel 2020 la scoperta di una coda a forma di pagaia ha rafforzato l’idea che nuotasse; quanto tempo passasse in acqua è ancora discusso.",
"Carcharodontosaurus, la \"lucertola dai denti di squalo\", era un cacciatore di terra lungo circa dodici metri e vissuto nelle stesse regioni dello Spinosaurus. Aveva denti a lama, taglienti e piatti.",
"Giganotosaurus, \"gigante del sud\", viveva in Patagonia circa 99-97 milioni di anni fa, lungo fra dodici e tredici metri: uno dei più grandi predatori terrestri conosciuti. Fu scoperto nel 1993 da un cercatore di fossili non professionista, Rubén Carolini. Visse circa trenta milioni di anni prima del T. rex.",
"Argentinosaurus, noto da pochi ossi giganti, è fra i più grandi erbivori mai esistiti: le stime della sua lunghezza vanno da circa ventidue a più di trenta metri, e sono molto incerte. Fu descritto nel 1993.",
"Circa 75 milioni di anni fa la Mongolia era un deserto di dune con rare oasi e corsi d’acqua intermittenti. Improvvise frane di sabbia e tempeste hanno sepolto interi animali, conservandoli in modo eccezionale.",
"Velociraptor, lungo circa un metro e ottanta e pesante circa venti chili, era grande come un tacchino, non come un cavallo. Nel 2007 gli studiosi hanno trovato su un suo avambraccio i punti dove si attaccavano le penne: aveva le penne, anche se non volava.",
"Protoceratops era un erbivoro grande come una pecora, circa un metro e ottanta di lunghezza, con un becco e un piccolo collare osseo. È molto comune nelle rocce del Gobi: ne sono stati trovati scheletri di ogni età, dai piccoli appena nati agli adulti.",
"Nel Gobi sono stati trovati nidi di uova e, sopra alcuni di essi, scheletri di dinosauri piumati chiamati oviraptoridi con le braccia aperte sulle uova: gli studiosi pensano che li covassero. Sono tra le prove più belle che i dinosauri si prendevano cura dei nidi.",
"Nel 1971 una spedizione polacco-mongola trovò due scheletri intrecciati nella sabbia rossa: un Velociraptor con l’artiglio sul collo di un Protoceratops, che gli stringeva il braccio. Gli studiosi pensano che una duna crollata o una tempesta li abbia sepolti all’improvviso. È oggi un tesoro nazionale della Mongolia.",
"Therizinosaurus, nelle rive più umide del Gobi circa 72-66 milioni di anni fa, era un erbivoro lungo nove-dieci metri, con tre enormi artigli per mano, lunghi fino a circa un metro. Fu scoperto nel 1948 e all’inizio si credette appartenesse a una gigantesca tartaruga marina; di lui si conoscono quasi solo braccia e artigli.",
"Circa 76 milioni di anni fa il Nord America era diviso da un mare interno poco profondo. Sulla costa occidentale, pianure di fiumi e laghi, spesso coperte di ceneri dei vulcani vicini, ospitavano una grande varietà di dinosauri.",
"A Egg Mountain, in Montana, nel 1978 il paleontologo Jack Horner trovò quattordici nidi di Maiasaura: erano vicini, circa sette metri uno dall’altro, e contenevano da trenta a quaranta uova grandi come quelle di uno struzzo, disposte a cerchio o a spirale. Era la prova che alcuni dinosauri nidificavano in colonie, come certi uccelli marini.",
"Maiasaura, \"buona madre lucertola\", era un dinosauro dal becco d’anatra lungo da sette a nove metri. Ha dato la prima grande prova che i dinosauri accudivano i piccoli; è il fossile ufficiale del Montana, e nel 1985 un suo pezzo d’osso e di guscio d’uovo è stato portato nello spazio.",
"Parasaurolophus, circa 76 milioni di anni fa, portava dietro la testa una lunga cresta cava, con tubi interni che partivano dalle narici. A cosa servisse (richiamo, riconoscimento, esibizione) è discusso. Il primo resto fu trovato in Alberta nel 1920.",
"Nella stessa regione vivevano molti dinosauri cornuti, come Centrosaurus, Styracosaurus e Chasmosaurus: avevano grandi collari ossei e corni diversi da una specie all’altra. A cosa servissero (riconoscersi, esibirsi, difendersi) è discusso.",
"Circa 68-66 milioni di anni fa, nel Montana di oggi, una pianura calda e umida ospitava foreste di conifere, ginkgo, cicadee e alberi con i fiori: era il paesaggio degli ultimi grandi dinosauri. Triceratops era così comune che gli studiosi raccontano di non poter camminare nelle sue rocce senza inciampare nei suoi resti.",
"Triceratops era lungo fino a nove metri e pesava da sei a otto tonnellate, con tre corni, un collare osseo pieno e un becco. A cosa servissero corni e collare è discusso: difesa, esibizione, riconoscimento. Il collare cresceva molto con l’età.",
"Edmontosaurus era un grande dinosauro dal becco d’anatra lungo circa dieci metri, con centinaia di denti. Camminava in mandrie lungo i fiumi, brucando piante.",
"In questa pianura vivevano anche Ankylosaurus, un erbivoro ricoperto di placche ossee, con una mazza d’osso sulla coda, e Pachycephalosaurus, lungo circa cinque metri, con la testa a cupola formata da osso molto spesso. Gli studiosi discutono a cosa servisse la cupola.",
"Tyrannosaurus rex era lungo circa dodici metri e aveva il morso più potente fra tutti gli animali terrestri conosciuti. Lo scheletro chiamato Sue, trovato nel 1990 nel Sud Dakota da Sue Hendrickson, è il più completo; visse fino a ventotto anni. Sul collo, sul bacino e sulla coda sono state trovate impronte di pelle a squame; se avesse piume, resta incerto.",
"Circa 66 milioni di anni fa un asteroide largo circa dieci chilometri colpì la penisola dello Yucatán, nell’attuale Messico, lasciando un cratere di circa centottanta chilometri. Gli studiosi pensano che polvere, incendi e oscurità durati anni abbiano fatto scomparire circa tre quarti delle specie, fra cui tutti i dinosauri che non erano uccelli, gli pterosauri e i grandi rettili marini.",
"Non tutto scomparve: sopravvissero i piccoli uccelli che vivevano a terra, i coccodrilli, le tartarughe e i piccoli mammiferi. Gli uccelli sono i discendenti dei dinosauri piumati: i dinosauri non sono mai davvero scomparsi.",
"Dal nido, il volo continua."
];
const NAME={
"dn_alba": "Alba, la piccola esploratrice",
"dn_lunga": "Lunga, la gigante gentile",
"dn_piuma": "Piuma, la piccola aliante",
"dn_pollice": "Pollice, il pensatore",
"dn_vela": "Vela, la pescatrice",
"dn_falce": "Falce, la piccola cacciatrice",
"dn_corno": "Corno, il Triceratops"
};
const GREET={
"dn_alba":"Ehi, Pierpaolo! Piano, nasconditi dietro il tronco: qui il fango è scivoloso e certi vicini sono più grossi di noi. Io sono Alba, e questa è la mia valle: se sei venuto a vedere l’inizio dei dinosauri, sei nel posto giusto.",
"dn_lunga":"Ehi, Pierpaolo! Tranquillo, i miei passi fanno tremare la terra, ma non pesto chi sta fermo. Io sono Lunga: per vedere tutta la pianura non mi serve salire su un sasso, mi basta alzare il collo.",
"dn_piuma":"Ehi, Pierpaolo! Piano con il vento, sai, le mie ali sono più delicate di quel che sembra. Io sono Piuma e vivo qui, fra le isole e la laguna: guarda come brillano le acque, e guarda come mi preparo a saltare.",
"dn_pollice":"Ehi, Pierpaolo! Siediti qui, fra le felci, ma lascia stare il mio pollice: è una punta vera, e non so mai se sto salutando o difendendomi. Io sono Pollice e passo le giornate a mangiare, camminare e pensare.",
"dn_vela":"Ehi, Pierpaolo! Resta sulla sabbia, l’acqua qui nasconde più di quel che mostra. Io sono Vela, e se vedi quella cresta alta sul dorso, sì, è la mia. Ma stai tranquillo: oggi ho già pescato, e sono di buon umore.",
"dn_falce":"Ehi, Pierpaolo! Non avvicinarti troppo alla duna, sta cedendo. Io sono Falce: sì, quell’artiglio sul piede è mio, e no, non è per te, siamo amici.",
"dn_corno":"Ehi, Pierpaolo! Ecco il tramonto: siediti vicino a me, hai tutto il tempo che vuoi. Io sono Corno e questo è l’ultimo posto della nostra lunga giornata: guarda che colori."
};
const WNAME="Dinosauri · Dal Triassico al Cretaceo";
const INTRO="Dinosauri, dall’alba al tramonto. Parti da una valle vulcanica dove, circa 230 milioni di anni fa, vivono i primi dinosauri, ancora piccoli; poi attraversa il bosco di conifere, dove cammina una mandria di Plateosaurus. Nella tarda mattina la pianura dei giganti dal collo lungo; a mezzogiorno una laguna dove un piccolo animale con le penne e i denti salta fra i rami. Nel primo pomeriggio le foreste del Cretaceo, dove i dinosauri piumati si lanciano da un albero all’altro; poi il delta africano dello Spinosaurus e le pianure della Patagonia, abitate dai più grandi di sempre. Più tardi le dune rosse del Gobi, la costa del mare interno con i nidi e le creste sonore, e infine il tramonto sulla pianura di Hell Creek, con Triceratops e T. rex. Il tempo qui si piega: dinosauri di epoche lontanissime ti vengono incontro.";
/* ===================== geometria del percorso ===================== */
const LX=[];for(let i=0;i<NT;i++)LX.push(330+i*520);            /* LX[46] = W1-130 = posizione del varco */
const ZS=[0,4,9,14,18,23,28,34,39];                            /* prima tappa di ogni zona */
const Z=ZS.map((s,z)=>z?(LX[s-1]+LX[s])/2:0);Z.push(W1);
const ZC=Z.slice(0,9).map((a,z)=>(a+Z[z+1])/2);
const zn=wx=>{let z=0;for(let i=1;i<9;i++)if(wx>=Z[i])z=i;return z};
const cl=(v,a,b)=>Math.max(a,Math.min(b,v));
/* ===================== colori e luce ===================== */
const HC={};const H=c=>HC[c]||(HC[c]=(()=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]})());
const hex=v=>'#'+v.map(q=>('0'+cl(Math.round(q),0,255).toString(16)).slice(-2)).join('');
const SM=new Map();
const shade=(c,k)=>{const key=c+'s'+k;let r=SM.get(key);if(r)return r;const q=H(c);r=hex([q[0]*k,q[1]*k,q[2]*k]);SM.set(key,r);return r};
const lite=(c,k)=>{const key=c+'l'+k;let r=SM.get(key);if(r)return r;const q=H(c);r=hex([q[0]+(255-q[0])*k,q[1]+(255-q[1])*k,q[2]+(255-q[2])*k]);SM.set(key,r);return r};
const mixc=(a,b,k)=>{const p=H(a),q=H(b);return hex([p[0]+(q[0]-p[0])*k,p[1]+(q[1]-p[1])*k,p[2]+(q[2]-p[2])*k])};
const lz=(T,x)=>{if(x<=ZC[0])return T[0];if(x>=ZC[8])return T[8];let z=0;while(z<7&&x>=ZC[z+1])z++;let k=(x-ZC[z])/(ZC[z+1]-ZC[z]);k=k*k*(3-2*k);return T[z].map((v,i)=>v+(T[z+1][i]-v)*k)};
const rgb=v=>'rgb('+Math.round(v[0])+','+Math.round(v[1])+','+Math.round(v[2])+')';
/* cielo: tre colori (alto, medio, orizzonte) per ogni zona */
const SKY=[['#8c97b6','#e3b2b6','#f8d9c2'],['#78aed6','#b4d8e6','#eaf0d6'],['#68aee0','#aad4ee','#f4f0da'],['#2c8ee2','#68beee','#dbf1f4'],
 ['#68a6d6','#d8d8ae','#f8e6a6'],['#5898d0','#e8d096','#fad88e'],['#a58a8c','#e0a678','#f6c88a'],['#868cb2','#f0a46c','#fac878'],['#54468c','#e06c98','#ffb06e']].map(a=>[].concat(...a.map(H)));
/* luce colorata sugli oggetti: [r,g,b,forza] */
const LIGHT=[[255,190,205,.22],[255,236,200,.10],[255,244,214,.08],[255,255,246,.05],[255,214,130,.16],[255,200,110,.18],[255,140,90,.26],[255,150,80,.24],[255,118,118,.28]];
let LC=[255,255,255,0],LQ='';
const setL=wx=>{const v=lz(LIGHT,wx);LC=v;LQ=(v[0]>>3)+','+(v[1]>>3)+','+(v[2]>>3)+','+Math.round(v[3]*30)};
const TM=new Map();
const tn=c=>{if(c.charCodeAt(0)!==35||LC[3]<.01)return c;const key=c+LQ;let r=TM.get(key);if(r)return r;const q=H(c),k=LC[3];r='rgb('+Math.round(q[0]+(LC[0]-q[0])*k)+','+Math.round(q[1]+(LC[1]-q[1])*k)+','+Math.round(q[2]+(LC[2]-q[2])*k)+')';TM.set(key,r);if(TM.size>6000)TM.clear();return r};
/* ===================== primitive (con luce) ===================== */
const rect=(g,c,x,y,w,h)=>{g.fillStyle=tn(c);g.fillRect(x,y,w,h)};
const dot=(g,c,x,y,r)=>{g.fillStyle=tn(c);g.beginPath();g.arc(x,y,Math.max(0,r),0,7);g.fill()};
const el=(g,c,x,y,rx,ry,r)=>{g.fillStyle=tn(c);g.beginPath();g.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),r||0,0,7);g.fill()};
const poly=(g,c,p)=>{g.fillStyle=tn(c);g.beginPath();g.moveTo(p[0][0],p[0][1]);for(let i=1;i<p.length;i++)g.lineTo(p[i][0],p[i][1]);g.closePath();g.fill()};
const ln=(g,c,w,p)=>{g.strokeStyle=tn(c);g.lineWidth=w;g.lineCap='round';g.lineJoin='round';g.beginPath();g.moveTo(p[0],p[1]);for(let i=2;i<p.length;i+=2)g.lineTo(p[i],p[i+1]);g.stroke();g.lineCap='butt'};
const bz=(a,b,c,n)=>{const r=[];for(let i=0;i<=n;i++){const u=i/n,v=1-u;r.push([v*v*a[0]+2*v*u*b[0]+u*u*c[0],v*v*a[1]+2*v*u*b[1]+u*u*c[1]])}return r};
const taper=(g,c,P,w0,w1)=>{const n=P.length,L=[],R=[];for(let i=0;i<n;i++){const a=P[Math.max(0,i-1)],b=P[Math.min(n-1,i+1)];let dx=b[0]-a[0],dy=b[1]-a[1];const d=Math.hypot(dx,dy)||1;dx/=d;dy/=d;const w=(w0+(w1-w0)*i/(n-1))/2;L.push([P[i][0]-dy*w,P[i][1]+dx*w]);R.push([P[i][0]+dy*w,P[i][1]-dx*w])}poly(g,c,L.concat(R.reverse()))};
const lnp=(g,c,w,P)=>{const a=[];P.forEach(q=>a.push(q[0],q[1]));ln(g,c,w,a)};
const glow=(g,x,y,r,col,a)=>{if(a<.02)return;const gr=g.createRadialGradient(x,y,1,x,y,r);gr.addColorStop(0,'rgba('+col+','+a+')');gr.addColorStop(1,'rgba('+col+',0)');g.fillStyle=gr;g.fillRect(x-r,y-r,2*r,2*r)};
const shd=(g,w)=>el(g,'rgba(40,20,10,.24)',0,1,w,Math.max(2,w*.1));
const mist=(g,x,y,w,t,a,col)=>{for(let i=0;i<4;i++)el(g,'rgba('+(col||'255,245,240')+','+(a*(.5+.5*Math.sin(t*.4+i*1.7)))+')',x+Math.sin(t*.15+i)*14+(i-1.5)*w*.3,y-i*2,w*.35,5+i*1.5)};
const water=(g,x,y,rx,ry,c1,c2,t)=>{const gr=g.createLinearGradient(0,y-ry,0,y+ry);gr.addColorStop(0,c1);gr.addColorStop(1,c2);g.fillStyle=gr;g.beginPath();g.ellipse(x,y,rx,ry,0,0,7);g.fill();
 g.save();g.beginPath();g.ellipse(x,y,rx,ry,0,0,7);g.clip();for(let i=0;i<5;i++){const yy=y-ry*.7+i*ry*.35,sh=Math.sin(t*.9+i*1.3)*rx*.12;ln(g,'rgba(255,255,255,.28)',1.2,[x-rx*.5+sh,yy,x-rx*.1+sh,yy+.4,x+rx*.3+sh,yy])}g.restore()};
const foot3=(g,x,y,s,f,c)=>{g.save();g.translate(x,y);g.scale(f*s,s);for(let k=-1;k<=1;k++)el(g,c,5+Math.abs(k)*-1,k*3.2,5,1.5,k*.4);el(g,c,-3,0,3.5,2);g.restore()};
const egg=(g,x,y,rx,ry,c)=>{el(g,c||'#efe6d2',x,y,rx,ry);el(g,'rgba(255,255,255,.55)',x-rx*.3,y-ry*.35,rx*.35,ry*.25)};
/* ===================== piante ===================== */
function conifer(g,x,y,s,sd,t,col){col=col||'#2f5a3a';const h=(150+hr(sd)*80)*s,w=s*(24+hr(sd+1)*12),tw=Math.sin(t*.8+sd)*1.6,um=hr(sd+5)>.55;
 rect(g,'#4a3a2e',x-3.4*s,y-h*.8,6.8*s,h*.8);
 if(um){for(let i=0;i<3;i++)el(g,i%2?col:shade(col,.82),x+tw,y-h*(.8+i*.09),w*(1.5-i*.28),w*.3);el(g,shade(col,.7),x+tw,y-h*1.08,w*.7,w*.2)}
 else{const n=6;for(let i=0;i<n;i++){const u=i/(n-1),ww=w*(1.15-u*.8);el(g,i%2?col:shade(col,.84),x+tw*u,y-h*(.34+.66*u),ww,ww*.3)}poly(g,shade(col,.8),[[x+tw-4*s,y-h*.95],[x+tw,y-h*1.08],[x+tw+4*s,y-h*.95]])}}
function tfern(g,x,y,s,sd,t,col){col=col||'#4a7e3c';const h=(46+hr(sd)*40)*s;taper(g,'#5a4636',[[x,y],[x+2*s,y-h*.5],[x+Math.sin(t*.5+sd)*1.5,y-h]],9*s,6*s);
 for(let i=0;i<5;i++)ln(g,'#3e3024',1,[x-4*s,y-h*(.15+i*.18),x+4*s,y-h*(.2+i*.18)]);
 for(let i=0;i<9;i++){const a=i/8*Math.PI*1.1+.2,sw=Math.sin(t*.9+i+sd)*3*s,ex=x+Math.cos(a)*-62*s+sw,ey=y-h+Math.sin(a)*-10*s+16*s*(1-Math.sin(a));
  const P=bz([x,y-h],[x+Math.cos(a)*-34*s,y-h-26*s*Math.sin(a)-6*s],[ex,ey+12*s],8);lnp(g,i%2?col:shade(col,.85),3.2*s,P);lnp(g,lite(col,.25),1*s,P.map(q=>[q[0],q[1]-1.4*s]))}}
function cycad(g,x,y,s,sd,t,col){col=col||'#4f7a3a';const h=(24+hr(sd)*16)*s;el(g,'#5a4a38',x,y-h*.5,8*s,h*.55);for(let i=0;i<4;i++)ln(g,'#3e3024',1,[x-7*s,y-h*(.2+i*.2),x+7*s,y-h*(.3+i*.2)]);
 for(let i=0;i<11;i++){const a=-Math.PI*.95+i*Math.PI*.19,sw=Math.sin(t+i+sd)*2*s,ex=x+Math.cos(a)*44*s+sw,ey=y-h+Math.sin(a)*40*s+(i%2)*4;
  const P=bz([x,y-h*.9],[x+Math.cos(a)*22*s,y-h+Math.sin(a)*34*s],[ex,ey+10*s],6);lnp(g,i%2?col:shade(col,.82),4*s,P);lnp(g,lite(col,.2),1.1*s,P)}}
function equis(g,x,y,s,sd,t,col){col=col||'#7e9c52';for(let i=0;i<6;i++){const h=(46+hr(sd+i)*62)*s,bx=x+(i-2.5)*7*s,sw=Math.sin(t*.8+i+sd)*2*s;
  ln(g,col,2.2*s,[bx,y,bx+sw*.4,y-h*.5,bx+sw,y-h]);for(let k=1;k<6;k++){const yy=y-h*k/6,xx=bx+sw*k/6;ln(g,shade(col,.8),1.1,[xx-4*s,yy+2*s,xx,yy,xx+4*s,yy+2*s])}}}
function fern(g,x,y,s,sd,t,col){col=col||'#4f8a3e';for(let i=0;i<7;i++){const a=-Math.PI*.9+i*Math.PI*.15,sw=Math.sin(t+i*1.3+sd)*1.6*s,P=bz([x,y],[x+Math.cos(a)*18*s,y-30*s*(1-Math.abs(Math.cos(a))*.2)],[x+Math.cos(a)*38*s+sw,y-10*s+Math.abs(Math.cos(a))*6*s],6);lnp(g,i%2?col:shade(col,.8),2.4*s,P)}}
function ginkgo(g,x,y,s,sd,t){const h=(80+hr(sd)*30)*s;taper(g,'#7a6a58',[[x,y],[x+1,y-h*.5],[x,y-h]],8*s,4*s);for(let i=0;i<9;i++){const a=i*.9+sd;el(g,i%3?'#8fae3a':'#c6b43a',x+Math.cos(a)*(14+i)*s,y-h-4*s+Math.sin(a)*(10+i*.6)*s,16*s,10*s)}for(let i=0;i<14;i++)dot(g,i%2?'#d8c64a':'#6f9430',x+(hr(sd+i)-.5)*54*s,y-h+(hr(sd+i*3)-.5)*28*s,2.4*s)}
function broad(g,x,y,s,sd,t,fl){const h=(70+hr(sd)*34)*s;taper(g,'#6a5442',[[x,y],[x+1,y-h*.5],[x,y-h]],9*s,5*s);const cs=['#4a7a3a','#5a8c42','#3e6e34'];for(let i=0;i<8;i++){const a=i*.8+sd;dot(g,cs[i%3],x+Math.cos(a)*18*s,y-h-2*s+Math.sin(a)*12*s,17*s)}
 if(fl!==0)for(let i=0;i<9;i++)dot(g,i%3?'#f4efe2':'#f0b8c8',x+(hr(sd+i*2)-.5)*50*s,y-h+(hr(sd+i*5)-.5)*34*s,2.2*s)}
function mangr(g,x,y,s,sd,t){const h=(40+hr(sd)*20)*s;for(let i=0;i<6;i++){const a=(i-2.5)*.28,P=bz([x+a*8*s,y-h*.7],[x+a*30*s,y-h*.5],[x+a*54*s,y+1],6);lnp(g,'#5a4636',2.4*s,P)}taper(g,'#5a4636',[[x,y-h*.7],[x,y-h*.9]],7*s,5*s);for(let i=0;i<6;i++)dot(g,i%2?'#3a6a3a':'#4a7a3e',x+(i-2.5)*9*s,y-h-(i%3)*5*s,13*s)}
function shrub(g,x,y,s,sd,t){for(let i=0;i<7;i++){const a=-Math.PI*.5+(i-3)*.28;ln(g,i%2?'#8a8a50':'#a09a58',1.8*s,[x,y,x+Math.cos(a)*12*s,y+Math.sin(a)*18*s,x+Math.cos(a)*(14+hr(sd+i)*8)*s+Math.sin(t+i)*1.2,y+Math.sin(a)*(30+hr(sd+i)*10)*s])}for(let i=0;i<9;i++)dot(g,'#98a05a',x+(hr(sd+i)-.5)*30*s,y-(10+hr(sd+i*3)*26)*s,2*s)}
function rock(g,x,y,s,sd,c){c=c||'#8a8070';const w=(14+hr(sd)*16)*s,h=(8+hr(sd+1)*10)*s;poly(g,c,[[x-w,y],[x-w*.8,y-h*.7],[x-w*.2,y-h],[x+w*.5,y-h*.85],[x+w,y-h*.2],[x+w*.9,y]]);poly(g,lite(c,.18),[[x-w*.6,y-h*.8],[x-w*.2,y-h],[x+w*.3,y-h*.9],[x-w*.1,y-h*.6]])}
function log(g,x,y,s,sd,c){c=c||'#6a5240';const w=(40+hr(sd)*34)*s,r=7*s;rect(g,c,x-w,y-r*1.6,w*2,r*1.6);el(g,c,x-w,y-r*.8,r*.7,r*.8);el(g,'#b09a78',x+w,y-r*.8,r*.7,r*.8);ln(g,shade(c,.7),1,[x-w*.8,y-r*1.1,x-w*.2,y-r*1.2]);ln(g,shade(c,.7),1,[x+w*.1,y-r*.5,x+w*.7,y-r*.6])}
/* ===================== animali: scheletri ===================== */
const HP={
 n:[[-.3,-.3],[.05,-.42],[.45,-.34],[1,-.2],[1,-.05],[.9,.02],[.5,.1],[.1,.2],[-.25,.12]],
 t:[[-.35,-.32],[0,-.46],[.35,-.46],[.75,-.38],[1,-.2],[1,.0],[.9,.1],[.5,.18],[.05,.3],[-.3,.2]],
 l:[[-.2,-.18],[.1,-.26],[.5,-.18],[1.15,-.12],[1.2,-.02],[1.1,.04],[.5,.1],[.1,.16],[-.2,.1]],
 s:[[-.2,-.28],[.1,-.34],[.5,-.2],[.9,-.1],[.95,.05],[.5,.12],[0,.18],[-.2,.1]],
 h:[[-.3,-.3],[0,-.4],[.5,-.3],[1,-.22],[1.05,-.05],[.9,.05],[.45,.12],[.05,.22],[-.3,.12]],
 d:[[-.3,-.3],[.1,-.38],[.5,-.3],[.85,-.22],[1.05,-.2],[1.1,-.08],[1,.02],[.5,.1],[.05,.2],[-.3,.1]],
 b:[[-.25,-.3],[.1,-.38],[.5,-.25],[.9,-.12],[.95,.0],[.6,.08],[.1,.16],[-.25,.1]]};
function head(g,o,hd,ha,c,t){g.save();g.rotate(ha);const P=HP[o.hs||'n'].map(p=>[p[0]*hd,p[1]*hd]);poly(g,c,P);
 if(o.hn){poly(g,lite(c,.2),[[.0*hd,-.4*hd],[.12*hd,-.64*hd],[.22*hd,-.38*hd]]);poly(g,lite(c,.2),[[.25*hd,-.36*hd],[.34*hd,-.54*hd],[.42*hd,-.32*hd]])}
 if(o.dome){el(g,lite(c,.22),-.02*hd,-.42*hd,.42*hd,.3*hd);for(let i=0;i<3;i++)dot(g,lite(c,.3),.55*hd+i*.12*hd,-.3*hd,.04*hd+.8)}
 if(o.crest){const q=bz([.15*hd,-.4*hd],[-.4*hd,-1.15*hd],[-1.15*hd,-.8*hd],7);taper(g,lite(c,.12),q,.2*hd,.12*hd)}
 if(o.cr2){poly(g,o.cr2,[[-.05*hd,-.42*hd],[.2*hd,-.74*hd],[.5*hd,-.4*hd]])}
 if(o.snob)dot(g,lite(c,.3),(HP[o.hs||'n'][3][0]-.03)*hd,HP[o.hs||'n'][3][1]*hd+.04*hd,.09*hd);
 const ex=.2*hd,ey=-.22*hd;dot(g,'#f2e6b8',ex,ey,Math.max(1.6,hd*.06));dot(g,'#1a1410',ex+.01*hd,ey,Math.max(.9,hd*.035));
 const m=HP[o.hs||'n'];ln(g,shade(c,.5),Math.max(.8,hd*.02),[m[4][0]*hd*.95,m[4][1]*hd+.06*hd,m[6][0]*hd,m[6][1]*hd+.005*hd]);
 if(o.teeth)for(let i=0;i<5;i++){const tx=(.9-i*.13)*hd;poly(g,'#f4efe2',[[tx,.05*hd],[tx-.035*hd,.05*hd],[tx-.018*hd,.11*hd]])}
 g.restore()}
/* teropode / dinosauro bipede (o: L tronco, H altezza anca, T coda, hd testa, c colore) */
function ther(g,x,y,s,f,o,t){g.save();g.translate(x,y);g.scale(f*s,s);const L=o.L,H=o.H,T=o.T,hd=o.hd,c=o.c,c2=o.c2||lite(c,.14),dk=shade(c,.78),sw=Math.sin(t*1.3+(o.ph||0)),wk=o.walk?Math.sin(t*1.4+(o.ph||0))*L*.07:0,nl=o.nl||L*.5,nu=o.nu==null?1:o.nu;
 shd(g,L*.8+T*.2);
 const hipY=-H,by=-H-L*.12;
 const leg=(ox,col,ph)=>{const hp=[ox,-H+4],kn=[ox+L*.17+ph,-H*.5],an=[ox-L*.03+ph*.6,-H*.14],tp=[ox+L*.15+ph*.4,-1];
  taper(g,col,bz(hp,kn,an,7),H*.5,H*.2);taper(g,col,[an,[ (an[0]+tp[0])/2,-H*.06],tp],H*.16,H*.1);for(let k=-1;k<=1;k++)ln(g,col,H*.05+.8,[tp[0]-2,-1,tp[0]+H*.12+k*.5,-.5+k*.7]);if(o.sick)poly(g,'#ece2c6',[[tp[0]-H*.02,-H*.1],[tp[0]+H*.16,-H*.36],[tp[0]+H*.08,-H*.06]])};
 leg(-L*.04,dk,wk);
 /* coda */
 const tb=[-L*.22,by+L*.02],te=[-L*.22-T,-H*.95+T*.1+sw*3+(o.tu||0)],tc=[-L*.22-T*.55,by-L*.05+sw*2];const tail=bz(tb,tc,te,12);
 if(o.band){for(let i=0;i<12;i++){const w0=L*.4*(1-i/12)+1.5,w1=L*.4*(1-(i+1)/12)+1.5;taper(g,i%2?'#efe6d2':'#6a4a34',[tail[i],tail[i+1]],w0,w1)}}
 else taper(g,c,tail,L*.42,1.6);
 if(o.pad){const e=tail[tail.length-3];el(g,c,e[0],e[1],T*.05,H*.5,.1);el(g,lite(c,.15),e[0]+1,e[1]-2,T*.03,H*.34,.1)}
 if(o.tailf)for(let i=0;i<8;i++){const q=tail[5+Math.min(i,6)];ln(g,o.tailf,2,[q[0],q[1],q[0]-T*.1,q[1]+(i%2?6:-6)])}
 /* braccio lontano */
 const A=o.arm==null?L*.22:o.arm,sh=[L*.5,by-L*.02];
 if(!o.quad){ln(g,dk,Math.max(2,A*.2),[sh[0],sh[1],sh[0]+A*.5,sh[1]+A*.4,sh[0]+A*.8,sh[1]+A*.55]);}
 /* corpo */
 el(g,c,L*.12,by,L*.5,L*.27,-.1);el(g,c2,L*.2,by+L*.1,L*.4,L*.14,-.1);
 if(o.quad)for(const ox of[L*.46,L*.38]){taper(g,ox>L*.4?c:dk,bz([ox,by+L*.05],[ox+3,-H*.5],[ox+1,-3],6),H*.3,H*.16);el(g,ox>L*.4?c:dk,ox+4,-2,H*.18,3.5)}
 /* vela */
 if(o.sail){const sp=[];for(let i=0;i<=10;i++){const u=i/10,bx=L*.5-u*L*.7,byy=by-L*.27*Math.sqrt(Math.max(0,1-Math.pow((bx-L*.12)/(L*.5),2)));sp.push([bx,byy,byy-o.sail*Math.sin(Math.PI*(.08+u*.84))*(1-u*.2)])}
  poly(g,o.sc,sp.map(q=>[q[0],q[2]]).concat(sp.slice().reverse().map(q=>[q[0],q[1]])));sp.forEach((q,i)=>{if(i%2)ln(g,shade(o.sc,.7),1,[q[0],q[1],q[0],q[2]])});}
 /* collo e testa */
 const nb=[L*.42,by-L*.14],he=[L*.62+nl*.4,hipY-L*.32-nl*nu],nc=[L*.62+nl*.05,hipY-L*.38-nl*.5*nu];const neck=bz(nb,nc,he,9);taper(g,c,neck,L*.34,Math.max(3,hd*.3));
 if(o.fil)for(let i=0;i<22;i++){const u=i/21,q=u<.4?neck[Math.round((1-u/.4)*8)]:u<.7?[L*.5-(u-.4)/.3*L*.7,by-L*.26-hr(i)*3]:tail[Math.round((u-.7)/.3*8)];ln(g,i%2?o.fil:shade(o.fil,.8),1.4,[q[0],q[1]-L*.06*(u>.7?0:1)-2,q[0]-3,q[1]-L*.06*(u>.7?0:1)-6-hr(i*3)*3])}
 g.save();g.translate(he[0],he[1]);head(g,o,hd,o.ha==null?.12:o.ha,c2,t);g.restore();
 /* gamba vicina */
 leg(L*.1,c,-wk);
 /* braccio vicino */
 if(!o.quad){ln(g,c,Math.max(2.2,A*.22),[sh[0],sh[1],sh[0]+A*.4,sh[1]+A*.42,sh[0]+A*.7,sh[1]+A*.6]);
  if(o.clawn){for(let k=0;k<3;k++){const bx=sh[0]+A*.7,by2=sh[1]+A*.6;ln(g,'#e8dcc0',1.8,[bx,by2,bx+o.clawn*.4+k*2,by2+o.clawn*.9-k*3])}}
  else for(let k=0;k<3;k++)ln(g,'#e8dcc0',1.2,[sh[0]+A*.7,sh[1]+A*.6,sh[0]+A*.7+3+k,sh[1]+A*.6+4-k*2]);
  if(o.thumb){poly(g,'#e8dcc0',[[sh[0]+A*.65,sh[1]+A*.5],[sh[0]+A*.65+5,sh[1]+A*.5-12],[sh[0]+A*.65+9,sh[1]+A*.5+1]])}
  if(o.wing){for(let k=0;k<7;k++){const a=.5+k*.16;ln(g,k%2?o.wing:shade(o.wing,.8),2.6,[sh[0]+A*.3,sh[1]+A*.3,sh[0]+A*.3-Math.cos(a)*A*1.1-L*.05,sh[1]+A*.3+Math.sin(a)*A*.8])}}}
 g.restore()}
/* sauropodo (o: L corpo, H altezza gambe, bh altezza corpo, nx/nk = estensione orizzontale/verticale del collo, tl coda) */
function sauro(g,x,y,s,f,o,t){g.save();g.translate(x,y);g.scale(f*s,s);const L=o.L,H=o.H,bh=o.bh,c=o.c,dk=shade(c,.74),fh=o.fh||0,sw=Math.sin(t*.9+(o.ph||0));
 shd(g,L*.75);
 const pil=(px,col,len)=>{taper(g,col,[[px,-H-bh*.3],[px+1,-len*.5],[px,-4]],bh*.5,bh*.36);el(g,col,px+3,-3,bh*.3,5)};
 pil(-L*.3,dk,H);pil(L*.28,dk,H+fh);
 const bt=-H-bh*.5;
 const tail=bz([-L*.42,bt-bh*.05],[-L*.42-o.tl*.5,bt-bh*.1+sw*3],[-L*.42-o.tl,-H*.4+sw*5],14);taper(g,c,tail,bh*.5,1.4);
 el(g,c,0,bt-fh*.3,L*.5,bh*.5,-fh/L);el(g,lite(c,.12),L*.04,bt+bh*.2-fh*.3,L*.4,bh*.22,-fh/L);
 pil(-L*.2,c,H);pil(L*.36,c,H+fh);
 const nb=[L*.36,bt-bh*.2-fh*.5],E=[L*.36+o.nx,bt-bh*.2-fh*.5-o.nk],C=[L*.36+o.nx*(o.nc||.85),bt-bh*.2-fh*.5-o.nk*.2];const neck=bz(nb,C,E,14);taper(g,c,neck,bh*.62,bh*.16);
 g.save();g.translate(E[0],E[1]);g.rotate(o.ha==null?.25:o.ha);el(g,lite(c,.1),0,0,bh*.2,bh*.12);if(o.nasal)el(g,lite(c,.2),-bh*.08,-bh*.1,bh*.1,bh*.09);dot(g,'#1a1410',bh*.06,-bh*.03,1.3);g.restore();
 for(let i=0;i<5;i++){const a=-L*.3+i*L*.15;ln(g,shade(c,.82),1.2,[a,bt-bh*.2,a+8,bt+bh*.3])}
 for(let i=0;i<9;i++)dot(g,lite(c,.16),(hr(i+(o.ph||0))-.5)*L*.8,bt+(hr(i*3)-.5)*bh*.6,1.4);
 g.restore()}
/* corpo a quattro zampe generico per stegosauri, anchilosauri, ceratopsidi, anfibi, rauisuchi */
function stego(g,x,y,s,f,o,t){g.save();g.translate(x,y);g.scale(f*s,s);const L=o.L,H=o.H,bh=o.bh,c=o.c,dk=shade(c,.76),sw=Math.sin(t*1.1+(o.ph||0)),Hf=o.Hf||H*.7;
 shd(g,L*.8);
 const pil=(px,col,len,w)=>{taper(g,col,[[px,-len-bh*.2],[px+1,-len*.5],[px,-3]],w,w*.72);el(g,col,px+3,-2.5,w*.55,4)};
 pil(-L*.3,dk,H,bh*.4);pil(L*.3,dk,Hf,bh*.3);
 const hy=-H-bh*.55,fy=-Hf-bh*.55;
 const tail=bz([-L*.4,hy],[-L*.4-o.tl*.6,hy+bh*.15+sw*2],[-L*.4-o.tl,-H*.3+sw*3],10);taper(g,c,tail,bh*.5,2);
 if(o.spk){const e=tail[tail.length-1],p=tail[tail.length-3];for(let k=0;k<4;k++){const px=tail[7+Math.min(k,3)];poly(g,'#e8dcc0',[[px[0]-1.4,px[1]],[px[0]-o.spk*(.5+k%2*.3),px[1]-o.spk*(k%2?.9:-.1)-(k%2?0:0)+(k%2?0:o.spk*.2)],[px[0]+1.4,px[1]]])}}
 if(o.club){const e=tail[tail.length-1];dot(g,lite(c,.1),e[0],e[1],bh*.32);dot(g,'#e8dcc0',e[0]-3,e[1]-2,3)}
 /* corpo con gobba */
 el(g,c,0,(hy+fy)/2,L*.46,bh*.5,Math.atan2(hy-fy,L)*-1);el(g,lite(c,.12),L*.04,(hy+fy)/2+bh*.25,L*.38,bh*.2,0);
 if(o.hump)el(g,c,-L*.12,hy-bh*.5,L*.3,bh*.45);
 pil(-L*.18,c,H,bh*.4);pil(L*.4,c,Hf,bh*.3);
 /* placche */
 if(o.plates){const n=9;for(const row of[1,0]){for(let i=0;i<n;i++){const u=i/(n-1),px=L*.3-u*L*.62+row*L*.03,py=(hy+fy)/2-bh*.5-Math.sin(u*Math.PI)*bh*.45+(row?-3:-1)+(u>.6?(u-.6)*bh*.5:0),ph=(bh*.7+Math.sin(u*Math.PI)*bh*.55)*o.plates*(row?1:.9),pw=bh*.42;
  const col=row?o.pc:shade(o.pc,.82);poly(g,col,[[px-pw*.5,py+2],[px-pw*.3,py-ph*.7],[px,py-ph],[px+pw*.4,py-ph*.6],[px+pw*.5,py+2]]);ln(g,'#ffe2a0',1.1,[px-pw*.3,py-ph*.7,px,py-ph,px+pw*.4,py-ph*.6])}}}
 /* corazza */
 if(o.armor){for(let i=0;i<22;i++){const u=i/21,px=L*.34-u*L*.7,py=(hy+fy)/2-bh*.46-Math.sin(u*Math.PI)*bh*.06;el(g,i%2?lite(c,.2):lite(c,.1),px,py,bh*.17,bh*.1);if(i%3==0)poly(g,'#e8dcc0',[[px-2,py],[px,py-bh*.3],[px+2,py]])}}
 /* collo e testa */
 const hb=[L*.46,fy-bh*.12],he=[L*.46+(o.hx==null?L*.14:o.hx),(o.hy==null?-Hf*.7:o.hy)];const neck=bz([L*.36,fy-bh*.1],[L*.5,fy],he,6);taper(g,c,neck,bh*.5,bh*.3);
 g.save();g.translate(he[0],he[1]);if(o.cer)cHead(g,o,t);else if(o.flat)fHead(g,o);else head(g,o,o.hd,o.ha==null?.5:o.ha,lite(c,.1),t);g.restore();
 g.restore()}
function fHead(g,o){const c=lite(o.c,.1),r=o.hd;el(g,c,r*.2,0,r*.85,r*.38);el(g,shade(c,.8),r*.5,r*.18,r*.5,r*.14);dot(g,'#f2e6b8',r*.15,-r*.25,r*.1);dot(g,'#1a1410',r*.17,-r*.25,r*.05)}
function cHead(g,o,t){const c=o.c,hs=o.hd,ty=o.cer,fc=o.fc||lite(c,.1);g.save();
 /* collare */
 const fr={tri:[.9,1.0,.5,-.8],pro:[.55,.62,.3,-.7],cen:[.6,.8,.35,-.75],sty:[.55,.8,.5,-.8],cha:[.85,1.2,.4,-.85]}[ty];
 g.save();g.translate(-hs*.15,-hs*.3);g.rotate(fr[3]);
 if(ty=='sty'){for(let i=0;i<7;i++){const a=-1.2+i*.4;poly(g,'#e8dcc0',[[Math.cos(a)*hs*.4,Math.sin(a)*hs*.4],[Math.cos(a)*hs*1.0,Math.sin(a)*hs*1.0],[Math.cos(a+.15)*hs*.4,Math.sin(a+.15)*hs*.4]])}}
 el(g,fc,0,0,hs*fr[0],hs*fr[1]*.7);el(g,shade(c,.8),0,0,hs*fr[0]*.78,hs*fr[1]*.52);
 if(ty=='cha'){el(g,mixc(c,'#d8a080',.5),-hs*.1,-hs*.1,hs*.3,hs*.34)}
 for(let i=0;i<10;i++){const a=-Math.PI*.9+i*.3;dot(g,'#e8dcc0',Math.cos(a)*hs*fr[0],Math.sin(a)*hs*fr[1]*.7,hs*.045)}g.restore();
 /* muso */
 poly(g,lite(c,.08),[[-hs*.3,-hs*.3],[hs*.2,-hs*.42],[hs*.7,-hs*.28],[hs*1.05,-hs*.05],[hs*1.05,hs*.12],[hs*.6,hs*.2],[hs*.05,hs*.3],[-hs*.3,hs*.15]]);
 poly(g,'#d8c8a0',[[hs*.8,-hs*.18],[hs*1.1,-hs*.04],[hs*1.08,hs*.14],[hs*.82,hs*.1]]);
 const hn=(x0,y0,len,w,a)=>poly(g,'#ece2c6',[[x0-w,y0],[x0+Math.cos(a)*len,y0+Math.sin(a)*len],[x0+w,y0+w*.4]]);
 if(ty=='tri'){hn(hs*.1,-hs*.36,hs*.95,hs*.1,-1.0);hn(hs*.25,-hs*.34,hs*.85,hs*.1,-1.12);hn(hs*.85,-hs*.22,hs*.3,hs*.09,-1.3)}
 else if(ty=='cen')hn(hs*.8,-hs*.22,hs*.7,hs*.1,-1.25);
 else if(ty=='sty')hn(hs*.8,-hs*.22,hs*.85,hs*.07,-1.3);
 else if(ty=='cha'){hn(hs*.1,-hs*.36,hs*.45,hs*.07,-1.1);hn(hs*.25,-hs*.34,hs*.4,hs*.07,-1.0)}
 dot(g,'#f2e6b8',hs*.28,-hs*.15,hs*.06);dot(g,'#1a1410',hs*.3,-hs*.15,hs*.03);g.restore()}
/* uccelli, pterosauri, piccoli animali */
function pter(g,x,y,s,f,t,o){o=o||{};g.save();g.translate(x,y);g.scale(f*s,s);const c=o.c||'#8a6a58',sw=Math.sin(t*(o.sp||5)+(o.ph||0));
 if(o.perch){const wc=shade(c,.85);poly(g,wc,[[-8,-26],[-26,-6],[-20,0],[-6,-12]]);poly(g,c,[[-8,-26],[14,-18],[16,-8],[0,0],[-14,0]]);taper(g,c,bz([14,-18],[20,-34],[26,-38],4),5,4);poly(g,c,[[24,-38],[46,-36],[24,-33]]);poly(g,lite(c,.2),[[24,-38],[30,-48],[28,-38]]);dot(g,'#f0e8b8',26,-37,1.4);ln(g,wc,1.6,[-4,0,-4,-8]);ln(g,wc,1.6,[6,0,6,-6]);g.restore();return}
 const wc=mixc(c,'#d8a070',.25),up=sw*16;
 poly(g,wc,[[-2,-2],[-34,-14-up],[-62,-4-up*.4],[-40,2],[-14,4]]);poly(g,wc,[[4,-2],[30,-12-up*.8],[56,-4-up*.3],[34,3],[10,5]]);
 ln(g,shade(c,.7),1.2,[-2,-2,-62,-4-up*.4]);ln(g,shade(c,.7),1.2,[4,-2,56,-4-up*.3]);
 el(g,c,0,0,12,4.2);poly(g,c,[[10,-1],[22,-6],[44,-3],[44,-1],[22,1]]);poly(g,lite(c,.2),[[16,-6],[22,-14],[28,-4]]);dot(g,'#f0e8b8',20,-3,1.2);
 if(o.tail){ln(g,c,1.2,[-10,1,-34,5]);poly(g,'#c04a3a',[[-34,5],[-40,2],[-42,8]])}else ln(g,c,2,[-10,1,-16,4]);g.restore()}
function micro(g,x,y,s,f,t,ang){g.save();g.translate(x,y);g.scale(f*s,s);g.rotate(ang||0);const bl='#14182a',sh='#2a5ab8',w=Math.sin(t*3)*1.2;
 const wing=(dx,dy,len,r)=>{for(let k=0;k<9;k++){const a=r+k*.08;const ex=dx+Math.cos(a)*len,ey=dy+Math.sin(a)*len*.55;ln(g,k%2?bl:sh,2.2,[dx,dy,ex,ey])}ln(g,bl,3.4,[dx,dy,dx+Math.cos(r+.3)*len,dy+Math.sin(r+.3)*len*.55])};
 wing(-6,0,30,2.6);wing(8,0,30,.5);wing(-12,4,24,2.9);wing(14,4,22,.2);
 el(g,bl,0,2,17,5,.1);dot(g,bl,18,0,4.5);poly(g,'#d8d0b0',[[21,-1],[26,0],[21,2]]);dot(g,'#f0e8b8',19,-1,1.1);ln(g,sh,1.4,[-14,3,-30+w,6]);ln(g,bl,1,[-28,5,-52,10+w*2]);poly(g,bl,[[-52,10+w*2],[-58,6+w*2],[-58,14+w*2]]);g.restore()}
function archae(g,x,y,s,f,t,o){g.save();g.translate(x,y);g.scale(f*s,s);const c='#23222c',sh='#40485c',br=Math.sin(t*2)*.6;
 ln(g,'#5a4a3e',2,[-4,-12,-4,0]);ln(g,'#5a4a3e',2,[5,-12,6,0]);
 ln(g,c,3,[-8,-18,-48,-10]);for(let k=0;k<7;k++){const q=-14-k*5;ln(g,k%2?c:sh,2,[q,-16+k*.6,q-3,-9+k*1.2])}
 for(let k=0;k<9;k++){const a=-1.9-k*.13+br*.1;ln(g,k%2?c:sh,2.8,[-2,-24,-2+Math.cos(a)*36,-24+Math.sin(a)*36])}
 el(g,c,0,-18,13,9,-.2);ln(g,c,5,[8,-22,13,-33]);el(g,c,15,-35,5,4);poly(g,'#c8c0a0',[[18,-36],[24,-34],[18,-32]]);dot(g,'#f0e8b8',16,-36,1.4);dot(g,'#1a1410',16.5,-36,.7);
 ln(g,c,2,[6,-24,13,-14]);ln(g,'#e8dcc0',1.2,[13,-14,16,-11]);g.restore()}
function bird(g,x,y,s,f,t,o){o=o||{};g.save();g.translate(x,y);g.scale(f*s,s);const c=o.c||'#2c2a36',pk=Math.max(0,Math.sin(t*(o.pk||2.2)+(o.ph||0)))*9;
 ln(g,'#7a6a58',1.5,[-2,-14,-3,0]);ln(g,'#7a6a58',1.5,[4,-14,6,0]);ln(g,'#7a6a58',1.2,[6,0,10,0]);
 poly(g,c,[[-6,-16],[-24,-13],[-30,-6],[-10,-12]]);el(g,c,0,-18,11,7,-.1);ln(g,lite(c,.1),2,[-4,-18,6,-16]);
 ln(g,c,3.6,[8,-21,11,-27+pk*.3,13,-26+pk]);dot(g,c,14,-26+pk,3.4);poly(g,'#c8b878',[[16,-26+pk],[21,-24+pk],[16,-24+pk]]);dot(g,'#f0e8b8',14,-27+pk,.9);g.restore()}
function croc(g,x,y,s,f,t,o){o=o||{};g.save();g.translate(x,y);g.scale(f*s,s);const c=o.c||'#5a6a48',L=o.L||90,sub=o.sub==null?.4:o.sub;
 const tail=bz([-L*.3,-8],[-L*.65,-6],[-L,-2+Math.sin(t)*2],8);taper(g,shade(c,.9),tail,12,2);el(g,c,0,-10,L*.34,10);
 for(let i=0;i<7;i++)poly(g,shade(c,.7),[[-L*.28+i*L*.08,-17],[-L*.25+i*L*.08,-22],[-L*.22+i*L*.08,-17]]);
 g.save();g.translate(L*.34,-12);poly(g,lite(c,.06),[[-6,-6],[L*.1,-6],[L*.42,-3],[L*.46,0],[L*.4,3],[L*.08,5],[-6,6]]);dot(g,'#f0e0a0',L*.03,-7,2);dot(g,'#1a1410',L*.04,-7,1);dot(g,'#1a1410',L*.42,-3,1);g.restore();
 if(sub){g.fillStyle='rgba(150,190,196,.62)';g.beginPath();g.ellipse(L*.05,2,L*.78,6+sub*10,0,0,7);g.fill();for(let i=0;i<3;i++)ln(g,'rgba(255,255,255,.4)',1,[-L*.5+i*L*.3,4+i*2,-L*.3+i*L*.3,4+i*2])}g.restore()}
function turtle(g,x,y,s,f){g.save();g.translate(x,y);g.scale(f*s,s);el(g,'#6a6a46',0,-6,14,8);el(g,'#8a8a5a',0,-8,10,5);ln(g,'#5a5a3a',1,[-8,-8,8,-8]);dot(g,'#8a9a6a',16,-8,3.5);dot(g,'#1a1410',17.5,-9,.8);el(g,'#6a7a4a',-7,-1,4,2.5);el(g,'#6a7a4a',8,-1,4,2.5);g.restore()}
function lizard(g,x,y,s,f,t){g.save();g.translate(x,y);g.scale(f*s,s);const w=Math.sin(t*8)*1.2;ln(g,'#7a8a50',3,[8,-3,0,-4,-8,-3,-18,-2+w]);dot(g,'#8a9a58',9,-4,2.4);ln(g,'#6a7a40',1,[-2,-3,-4,0]);ln(g,'#6a7a40',1,[4,-3,6,0]);g.restore()}
function mammal(g,x,y,s,f,t){g.save();g.translate(x,y);g.scale(f*s,s);el(g,'#6a5444',0,-4,6,4);dot(g,'#7a6454',6,-5,2.6);dot(g,'#8a7464',5,-8,1.3);dot(g,'#1a1410',7.4,-5.4,.6);ln(g,'#7a6454',1,[-6,-4,-12,-1+Math.sin(t*2)]);g.restore()}
function dragon(g,x,y,s,t,ph){const w=Math.sin(t*30+ph)*3;ln(g,'#2a8a9a',1.6,[x,y,x-9*s,y+1]);ln(g,'rgba(210,240,250,.8)',1.4,[x+1,y,x+3,y-5*s+w,x+8,y-3*s+w*.5]);ln(g,'rgba(210,240,250,.8)',1.4,[x-1,y,x-3,y-5*s-w,x-8,y-3*s-w*.5])}
function nest(g,x,y,rx,n,spiral,c){el(g,'#4a3626',x,y,rx*1.2,rx*.28);for(let i=0;i<n;i++){const a=i*2.4,r=spiral?rx*.9*Math.sqrt(i/n):rx*.7;const ex=x+Math.cos(a)*r,ey=y-2+Math.sin(a)*r*.22;egg(g,ex,ey-2,Math.max(3,rx*.14),Math.max(2.5,rx*.11),c)}}
function sailsil(g,x,y,s,f){g.save();g.translate(x,y);g.scale(f*s,s);g.fillStyle='rgba(60,70,90,.55)';g.beginPath();g.ellipse(0,-18,30,12,0,0,7);g.fill();g.beginPath();g.moveTo(22,-24);g.quadraticCurveTo(48,-70,58,-86);g.lineTo(62,-84);g.quadraticCurveTo(52,-60,30,-14);g.fill();g.fillRect(-18,-18,7,18);g.fillRect(14,-18,7,18);g.restore()}
/* ===================== specie ===================== */
const SPT=o=>(g,x,y,s,f,t,ph)=>ther(g,x,y,s,f,Object.assign({ph:ph||0},o),t);
const SP={
 eora:SPT({L:30,H:26,T:52,hd:14,c:'#8c7a68',nl:16,arm:10}),
 herrera:SPT({L:54,H:46,T:92,hd:22,c:'#3e3832',nl:26,arm:22,teeth:1,walk:1}),
 coelo:SPT({L:34,H:38,T:84,hd:17,c:'#a89a7c',nl:36,hs:'l',arm:14,walk:1}),
 lilien:SPT({L:56,H:50,T:96,hd:22,c:'#7a6a58',hn:1,teeth:1,nl:28,arm:16}),
 plateo:SPT({L:72,H:64,T:104,hd:17,c:'#8e8a5e',hs:'s',nl:96,arm:34,thumb:1}),
 allo:SPT({L:92,H:78,T:124,hd:40,c:'#8c6a48',hs:'t',hn:1,teeth:1,nl:40,arm:18,walk:1}),
 compso:SPT({L:22,H:24,T:52,hd:11,c:'#9c8c5c',hs:'l',nl:18,arm:9,walk:1}),
 sino:SPT({L:26,H:22,T:72,hd:11,c:'#b8602e',fil:'#c8723a',band:1,hs:'l',nl:14,arm:8}),
 yutyr:SPT({L:84,H:62,T:100,hd:32,c:'#8a5c3a',fil:'#b8743e',hs:'t',teeth:1,nl:38,arm:16}),
 deino:SPT({L:46,H:44,T:82,hd:20,c:'#7a5a40',arm:28,wing:'#3a2a24',sick:1,teeth:1,fil:'#8e6e52',nl:22}),
 spino:SPT({L:112,H:56,T:150,hd:42,hs:'l',sail:74,sc:'#b04630',pad:1,c:'#8c6446',nl:60,teeth:1,ha:.05,arm:26}),
 carch:SPT({L:104,H:84,T:134,hd:48,hs:'t',c:'#7c5c46',teeth:1,nl:40,arm:16}),
 giga:SPT({L:112,H:92,T:142,hd:52,hs:'t',c:'#6e5c4a',teeth:1,nl:42,arm:16,walk:1}),
 velo:SPT({L:34,H:34,T:64,hd:15,c:'#a67e54',wing:'#4a3a30',tailf:'#4a3a30',sick:1,hs:'l',arm:22,teeth:1,nl:20}),
 trex:SPT({L:124,H:100,T:152,hd:58,hs:'t',c:'#6e6054',arm:12,teeth:1,nl:46,walk:1}),
 theri:SPT({L:84,H:72,T:70,hd:18,hs:'b',nl:84,c:'#8c8062',clawn:34,arm:48,fil:'#9c906c'}),
 pachy:SPT({L:50,H:48,T:72,hd:22,hs:'b',dome:1,c:'#8e7052',nl:24,arm:14,walk:1}),
 iguan:SPT({L:86,H:64,T:98,hd:30,hs:'h',c:'#6e7a58',nl:52,thumb:1,arm:36}),
 maia:SPT({L:84,H:56,T:92,hd:28,hs:'d',c:'#7c8264',quad:1,nl:54,walk:1}),
 parasau:SPT({L:88,H:58,T:96,hd:28,hs:'d',crest:1,c:'#7a7c60',quad:1,nl:56,nu:1.1,walk:1}),
 edmo:SPT({L:96,H:60,T:104,hd:32,hs:'d',c:'#7a7258',quad:1,nl:50,nu:-1.6,ha:.6})};
const STT=o=>(g,x,y,s,f,t,ph)=>stego(g,x,y,s,f,Object.assign({ph:ph||0},o),t);
const ST={
 stego:STT({L:120,H:62,Hf:40,bh:46,c:'#7e7e58',tl:72,spk:26,plates:1,pc:'#c8803a',hump:1,hd:16,hs:'s',hx:14,hy:-32,ha:.6}),
 kentro:STT({L:60,H:30,Hf:20,bh:24,c:'#7a7a54',tl:44,spk:14,plates:.6,pc:'#b8683a',hump:1,hd:9,hs:'s',hx:8,hy:-16,ha:.6}),
 anky:STT({L:112,H:28,Hf:28,bh:42,c:'#6a5a46',tl:72,club:1,armor:1,hd:24,hs:'b',hx:16,hy:-22,ha:.4}),
 sauros:STT({L:104,H:48,Hf:44,bh:42,c:'#5e5648',tl:72,hd:44,hs:'t',teeth:1,hx:30,hy:-72,ha:.15}),
 aeto:STT({L:72,H:18,Hf:18,bh:30,c:'#6a6050',tl:50,armor:1,hd:16,hs:'b',hx:12,hy:-20,ha:.4}),
 amph:STT({L:60,H:10,Hf:10,bh:22,c:'#68684a',tl:28,flat:1,hd:28,hx:18,hy:-14}),
 trice:STT({L:132,H:44,Hf:40,bh:60,c:'#7e6e5c',tl:48,cer:'tri',hd:46,hx:22,hy:-36,fc:'#a07a62'}),
 proto:STT({L:62,H:22,Hf:22,bh:28,c:'#9a8460',tl:26,cer:'pro',hd:22,hx:12,hy:-20}),
 cent:STT({L:100,H:36,Hf:34,bh:44,c:'#8a7860',tl:40,cer:'cen',hd:34,hx:18,hy:-28,fc:'#b07050'}),
 sty:STT({L:100,H:36,Hf:34,bh:44,c:'#7e7058',tl:40,cer:'sty',hd:34,hx:18,hy:-28,fc:'#a86a50'}),
 cha:STT({L:110,H:38,Hf:36,bh:46,c:'#827660',tl:42,cer:'cha',hd:36,hx:18,hy:-30,fc:'#a87858'})};
const SAU={
 dip:{L:140,H:76,bh:56,c:'#8e7e6a',tl:215,nx:130,nk:110,nc:.9},
 gir:{L:130,H:96,bh:50,fh:26,c:'#8a8470',tl:130,nx:24,nk:200,nc:.25,nasal:1},
 arg:{L:250,H:180,bh:110,c:'#8e8272',tl:150,nx:110,nk:230,nc:.6},
 far:{L:110,H:60,bh:44,c:'#8a8a86',tl:140,nx:90,nk:100,nc:.7}};
const fcf=x=>(typeof px==='number'&&px>=x+AVCAM)?1:-1;
const ptr=(name,fn)=>{PR[name]=(g,x,y,t,a)=>{setL(x+AVCAM);fn(g,x,y,t,a)}};
const ptsh=(g,x,y,w,c)=>el(g,c||'rgba(50,30,20,.18)',x,y,w,w*.1);
/* ===================== zona 1 · la valle vulcanica ===================== */
ptr('dnpianura',(g,x,y,t)=>{water(g,x+70,y+34,170,20,'#a9bccb','#86a0b2',t);ST.aeto(g,x+190,y-28,.72,-1,t);equis(g,x-130,y+4,1.1,1,t);tfern(g,x-70,y+2,.9,2,t);equis(g,x+10,y+10,.9,3,t);rock(g,x-190,y+6,1,4);mist(g,x+40,y+16,300,t,.22)});
ptr('dneoraptor',(g,x,y,t)=>{log(g,x-90,y+6,1.5,3);mist(g,x,y+4,260,t,.3);el(g,'#6a5a4c',x+120,y+14,44,8);el(g,'#8a7a6a',x+118,y+12,34,5);foot3(g,x+90,y+20,1.2,1,'rgba(60,44,34,.55)');foot3(g,x+60,y+24,1.2,1,'rgba(60,44,34,.5)');
 equis(g,x+190,y+4,1,5,t);SP.eora(g,x,y,1.75,fcf(x),t,1);mist(g,x,y-1,90,t,.35)});
ptr('dnherrera',(g,x,y,t)=>{el(g,'#d8d0c0',x-30,y+16,160,9);el(g,'#bcb4a6',x-30,y+19,120,5);water(g,x+130,y+22,70,12,'#9ab0bc','#7a94a4',t);rock(g,x-150,y+4,1,7);SP.herrera(g,x,y,1.25,fcf(x),t,0);tfern(g,x+190,y+4,.9,8,t)});
ptr('dnpiccoli',(g,x,y,t)=>{el(g,'#5a4c3e',x,y+22,200,10);foot3(g,x-120,y+22,1.3,1,'rgba(40,30,24,.55)');foot3(g,x-90,y+24,1.3,1,'rgba(40,30,24,.5)');ST.sauros(g,x+30,y,1.15,fcf(x)*-1,t,2);SP.eora(g,x-90,y+4,1.5,fcf(x),t,2);
 g.fillStyle='rgba(30,20,20,.22)';g.beginPath();g.ellipse(x+30,y+8,120,12,0,0,7);g.fill()});
/* ===================== zona 2 · il bosco di conifere ===================== */
ptr('dnplateo',(g,x,y,t)=>{for(let i=-1;i<=1;i+=2)conifer(g,x+i*210,y+6,1.5,i+9,t);SP.plateo(g,x-170,y-44,.62,1,t,1);SP.plateo(g,x+150,y-52,.55,1,t,2);
 SP.plateo(g,x-70,y+2,.95,1,t,3);SP.plateo(g,x+40,y+10,.9,1,t+1,4,{});
 const o={L:72,H:64,T:104,hd:17,c:'#8e8a5e',hs:'s',nl:96,arm:34,quad:1,nu:-.85,ph:5};ther(g,x+160,y+16,.95,1,o,t);fern(g,x+110,y+18,1,3,t);fern(g,x-20,y+16,1.1,6,t)});
ptr('dnfitosauro',(g,x,y,t)=>{water(g,x,y+28,250,34,'#9a7860','#7a5a48',t);croc(g,x-60,y+16,1.1,1,t,{c:'#5a6648',L:120,sub:.62});ST.amph(g,x+130,y+10,1,-1,t);pter(g,x+60,y-190+Math.sin(t)*6,1.1,-1,t,{c:'#8a6a58',tail:1});SP.plateo(g,x+220,y-60,.5,-1,t,1);equis(g,x-210,y+8,1.1,2,t)});
ptr('dncoelo',(g,x,y,t)=>{el(g,'#a89478',x,y+18,200,14);for(let i=0;i<30;i++)dot(g,i%2?'#c8b898':'#8a7860',x-180+hr(i)*360,y+12+hr(i*3)*14,1.4+hr(i*5)*1.6);
 for(let i=-1;i<=1;i+=2)el(g,'rgba(20,40,24,.22)',x+i*120,y+10,40,6);SP.coelo(g,x-10,y,1.3,1,t,0);SP.coelo(g,x+110,y+10,.8,1,t,2);SP.coelo(g,x+160,y+16,.72,1,t,3);conifer(g,x-210,y+6,1.5,3,t)});
ptr('dnlilien',(g,x,y,t)=>{for(let i=0;i<4;i++)conifer(g,x-210+i*130+(i>1?110:0),y-10-i%2*14,1.35,i+20,t,'#2a5236');SP.plateo(g,x+170,y-68,.4,-1,t,1);SP.plateo(g,x+205,y-72,.38,-1,t,2);mist(g,x,y-10,380,t,.3);SP.lilien(g,x,y+4,1.2,fcf(x),t,1);mist(g,x-40,y+14,200,t,.2);fern(g,x-110,y+16,1,4,t)});
ptr('dnfelci',(g,x,y,t)=>{water(g,x+40,y+26,90,12,'#8a9a80','#6a806a',t);tfern(g,x-150,y+4,1.4,1,t);tfern(g,x+180,y+2,1.3,2,t);cycad(g,x-60,y+8,1.3,3,t);cycad(g,x+110,y+8,1.2,4,t);equis(g,x+30,y+6,1.1,5,t);fern(g,x-110,y+14,1.2,6,t);fern(g,x+10,y+18,1.1,7,t);
 g.save();g.globalAlpha=.16;for(let i=0;i<3;i++)poly(g,'#fff4c0',[[x-150+i*110,y-330],[x-120+i*110,y-330],[x-30+i*110,y+10],[x-80+i*110,y+10]]);g.restore();for(let i=0;i<8;i++)dot(g,'rgba(255,250,210,.7)',x-160+hr(i)*320+Math.sin(t+i)*6,y-70-hr(i*3)*120+Math.cos(t*.8+i)*5,1.3)});
/* ===================== zona 3 · la pianura dei giganti ===================== */
const fpr=(g,x,y,s)=>{el(g,'#6a5a48',x,y,34*s,8*s);el(g,'#4a3c30',x+2,y+1,28*s,6*s);el(g,'rgba(150,180,200,.5)',x,y+2,20*s,3*s)};
ptr('dngiganti',(g,x,y,t)=>{const o=Object.assign({},SAU.far);sauro(g,x-170,y-50,.42,1,o,t);sauro(g,x+40,y-60,.34,-1,o,t);sauro(g,x+210,y-46,.4,-1,o,t);fpr(g,x-120,y+22,1.1);fpr(g,x+60,y+34,1.3);fpr(g,x+190,y+16,.9);
 for(let i=0;i<3;i++)fern(g,x-190+i*180,y+6+i%2*8,1.1,i,t);el(g,'#e8dcc4',x-20,y+10,26,5);ln(g,'#e8dcc4',2.4,[x-40,y+10,x-22,y+4,x,y+8])});
ptr('dndiplo',(g,x,y,t)=>{const f=fcf(x);water(g,x+f*10,y+30,230,24,'#a09a86','#7e7664',t);for(const dx of[-.3,.28])el(g,'#5a4a3c',x+f*dx*140,y+8,34,8);fpr(g,x-f*150,y+24,1);sauro(g,x,y,1,f,SAU.dip,t);
 const ex=x+f*(140*.36+130),ey=y-76-56*.7-110;const fl=(t*.6)%1;if(fl<1){const fx=ex+f*14+Math.sin(fl*6)*6,fy=ey+10+fl*(ey*-1+y)*.8;ln(g,'#5a9a40',2.2,[fx,fy,fx+f*8,fy+8,fx+f*14,fy+4])}fern(g,x+f*170,y+10,1.1,3,t);fern(g,x-f*180,y+14,1,4,t)});
ptr('dnallo',(g,x,y,t)=>{water(g,x+20,y+26,200,18,'#a0a290','#7e8470',t);sauro(g,x+150,y-60,.34,-1,SAU.far,t);sauro(g,x-190,y-70,.32,1,SAU.far,t);SP.allo(g,x,y,1.05,fcf(x),t,2);fern(g,x-120,y+16,1.1,2,t);fern(g,x+120,y+20,1,3,t)});
ptr('dnstego',(g,x,y,t)=>{tfern(g,x-170,y+4,1.2,1,t);cycad(g,x+170,y+6,1.2,2,t);ST.stego(g,x,y,1.15,fcf(x),t,1);fern(g,x-90,y+14,1.3,3,t);fern(g,x+70,y+18,1.2,4,t);fern(g,x+10,y+22,1.1,5,t)});
ptr('dngiraffa',(g,x,y,t)=>{conifer(g,x-200,y+6,1.5,4,t);conifer(g,x+210,y+6,1.4,6,t);sauro(g,x,y,1,fcf(x),SAU.gir,t);ST.kentro(g,x+(fcf(x)>0?1:-1)*-170,y+6,.95,-fcf(x),t,2);fern(g,x+100,y+18,1.1,3,t);fern(g,x-110,y+22,1,5,t)});
/* ===================== zona 4 · la laguna di Solnhofen ===================== */
const wrock=(g,x,y,s,sd)=>rock(g,x,y,s,sd,'#efeadc');
ptr('dnlaguna',(g,x,y,t)=>{water(g,x,y+26,260,36,'#52d4cf','#2fa6b4',t);for(let i=0;i<7;i++){const fx=x-200+i*66+Math.sin(t*.5+i)*8,fy=y+20+(i%3)*10;el(g,'rgba(255,255,255,.6)',fx,fy,3+(i%2)*2,1.4)}
 wrock(g,x+130,y+8,2.2,1);pter(g,x+130,y-18,.9,-1,t,{perch:1,c:'#8a6a58'});wrock(g,x-170,y+12,1.4,2);wrock(g,x-40,y+14,1,3);for(let i=0;i<3;i++){const ax=x-100+i*70;dot(g,'#c8b496',ax,y+34,6);dot(g,'#a89478',ax,y+34,3.4)}
 for(let i=0;i<3;i++)dragon(g,x-100+i*90+Math.sin(t*.7+i)*20,y-60-i*14+Math.cos(t+i)*6,1.2,t,i)});
ptr('dnarcheo',(g,x,y,t)=>{el(g,'#f0ecde',x,y+18,220,12);cycad(g,x-130,y+6,1.2,4,t);conifer(g,x+190,y+6,1.3,5,t,'#3a6a3e');wrock(g,x,y+4,2.6,7);archae(g,x,y-28,1.25,fcf(x),t);ln(g,'#23222c',1.6,[x+90,y+20,x+104,y+16]);ln(g,'#23222c',1.6,[x-100,y+26,x-90,y+22])});
ptr('dncompso',(g,x,y,t)=>{el(g,'#f2eee0',x,y+22,240,14);for(let i=0;i<5;i++)dot(g,'#d8d0bc',x-180+hr(i)*360,y+20+hr(i*3)*10,2);wrock(g,x+140,y+6,1.3,3);wrock(g,x-170,y+10,1.1,4);lizard(g,x-70,y+4,1.4,-1,t);SP.compso(g,x+10,y,1.6,-1,t,0);mist(g,x,y+4,260,t,.1,'255,255,240')});
ptr('dncieli',(g,x,y,t)=>{water(g,x,y+26,260,34,'#52d4cf','#2fa6b4',t);const px2=x-160+((t*28)%380),py=y-70+Math.sin(t*1.2)*14;el(g,'rgba(20,70,90,.35)',px2-10,y+28,34,5);pter(g,px2,py,1.3,1,t,{tail:1,c:'#8a6a58'});pter(g,x-170,y-190,.6,-1,t,{tail:1,c:'#7a5a48',ph:2});wrock(g,x+170,y+12,1.6,5);for(let i=0;i<4;i++)ln(g,'rgba(255,255,255,.5)',1.2,[x-150+i*90,y+30+(i%2)*8,x-120+i*90,y+30+(i%2)*8])});
/* ===================== zona 5 · foreste e laghi del Cretaceo inferiore ===================== */
const flw=(g,x,y,n,sd)=>{for(let i=0;i<n;i++){const fx=x+(hr(sd+i)-.5)*80,fy=y+hr(sd+i*3)*8;ln(g,'#4a7a3a',1,[fx,fy,fx,fy-6]);dot(g,'#f6f2e6',fx,fy-7,2.2)}};
ptr('dniguano',(g,x,y,t)=>{water(g,x+90,y+30,200,20,'#9eb8c0','#7898a4',t);tfern(g,x-170,y+4,1.3,1,t);cycad(g,x+190,y+6,1.2,2,t);flw(g,x+150,y+20,6,3);SP.iguan(g,x,y,1.15,fcf(x),t,1);fern(g,x-90,y+16,1.2,2,t);fern(g,x+80,y+20,1,3,t);mist(g,x+60,y+14,240,t,.14)});
ptr('dnsinosauro',(g,x,y,t)=>{water(g,x+20,y+28,230,24,'#7aa8b4','#5c8a98',t);rock(g,x-150,y+10,1.3,3,'#9a948c');el(g,'rgba(220,214,204,.7)',x-150,y+2,20,4);SP.sino(g,x,y,1.7,fcf(x),t,1);fern(g,x-80,y+16,1.3,2,t);fern(g,x+120,y+18,1.2,3,t);cycad(g,x+190,y+6,1,4,t);for(let i=0;i<3;i++)ln(g,'#c8723a',1,[x-120+i*30,y+22,x-116+i*30,y+16])});
ptr('dnmicroraptor',(g,x,y,t)=>{conifer(g,x-100,y+6,1.5,5,t);ln(g,'#4a3a2e',5,[x-96,y-190,x-40,y-200]);const u=(t*.12)%1,mx=x-40+u*260,my=y-200+Math.sin(u*Math.PI)*-10+u*120;micro(g,mx,my,1.2,1,t,.35);micro(g,x-50,y-206,.5,1,t+1,-.4);for(let i=0;i<3;i++)fern(g,x-30+i*110,y+14+i%2*6,1.2,i,t);flw(g,x+130,y+22,5,4);
 for(let i=0;i<7;i++)dot(g,'rgba(255,240,180,.65)',x-140+hr(i)*320+Math.sin(t+i)*5,y-90-hr(i*3)*100,1.3)});
ptr('dnyutyr',(g,x,y,t)=>{for(let i=0;i<3;i++)conifer(g,x-220+i*100,y-6-i%2*10,1.45,i+30,t,'#2e5636');conifer(g,x+210,y+4,1.5,35,t);mist(g,x,y-4,360,t,.26);SP.yutyr(g,x,y+4,1.1,fcf(x),t,1);mist(g,x+10,y+16,200,t,.2);fern(g,x+110,y+18,1.1,2,t)});
ptr('dndeino',(g,x,y,t)=>{conifer(g,x-190,y+6,1.5,6,t);fern(g,x+110,y+18,1.2,3,t);fern(g,x-100,y+18,1.1,4,t);SP.iguan(g,x+200,y-54,.5,-1,t,2);SP.deino(g,x,y,1.45,fcf(x),t,1);fern(g,x+20,y+22,1.1,5,t)});
/* ===================== zona 6 · il delta e le pianure ===================== */
const fish=(g,x,y,s,t)=>{g.save();g.translate(x,y);g.scale(s,s);g.globalAlpha=.6;el(g,'#6a8a9a',0,0,16,5);poly(g,'#6a8a9a',[[-14,0],[-24,-5],[-24,5]]);el(g,'#9ab8c4',-2,-2,9,2);g.restore()};
ptr('dndelta',(g,x,y,t)=>{water(g,x,y+30,270,32,'#c8a870','#a08658',t);water(g,x-60,y+14,130,12,'#d8b87a','#b09462',t);fish(g,x+90,y+36,1.4,t);fish(g,x-100,y+22,1,t);croc(g,x-30,y+14,1.1,1,t,{c:'#6a6a48',L:150,sub:.55});mangr(g,x-230,y+8,1.3,1,t);mangr(g,x+230,y+8,1.2,2,t);
 pter(g,x+60,y-210,.8,1,t,{c:'#8a6a58',sp:3});pter(g,x-110,y-250,.6,-1,t,{c:'#7a5a48',ph:2,sp:3});foot3(g,x+170,y+36,2,1,'rgba(70,50,30,.5)');foot3(g,x+120,y+40,2,1,'rgba(70,50,30,.45)')});
ptr('dnspino',(g,x,y,t)=>{const f=fcf(x);water(g,x,y+16,230,26,'#b49a68','#8e7a52',t);el(g,'rgba(60,40,20,.28)',x-f*14,y+18,110,10);SP.spino(g,x,y+8,1,f,t,1);for(let i=0;i<4;i++){const a=(t*.8+i*.25)%1;g.strokeStyle='rgba(255,250,230,'+(.5*(1-a))+')';g.lineWidth=1.4;g.beginPath();g.ellipse(x+f*(i%2?30:-40),y+16,20+a*40,3+a*7,0,0,7);g.stroke()}
 mangr(g,x-230,y+8,1.3,3,t);mangr(g,x+240,y+6,1.2,4,t);ln(g,'#7a5a3a',3,[x-200,y+30,x-170,y+22,x-150,y+30])});
ptr('dncarch',(g,x,y,t)=>{el(g,'#c8a878',x,y+20,230,13);for(let i=0;i<14;i++)dot(g,i%2?'#d8bc8c':'#9a8058',x-200+hr(i)*400,y+14+hr(i*3)*14,1.5);rock(g,x-190,y+8,1.3,2,'#9a8a70');SP.carch(g,x,y,1.05,1,t,2);mangr(g,x+230,y+8,1.2,6,t)});
ptr('dngiganoto',(g,x,y,t)=>{conifer(g,x-215,y+6,1.5,8,t);conifer(g,x+225,y+6,1.4,9,t);fern(g,x-110,y+18,1.2,2,t);fern(g,x+110,y+14,1.1,3,t);SP.giga(g,x,y,1.05,fcf(x),t,1);fern(g,x-10,y+24,1.1,4,t)});
ptr('dnargentino',(g,x,y,t)=>{const f=fcf(x);sauro(g,x,y-4,1,f,SAU.arg,t);SP.compso(g,x+f*135,y+10,2,-f,t,1);for(let i=0;i<5;i++)fern(g,x-220+i*110,y+14+i%2*10,1.2,i,t);fpr(g,x-f*180,y+26,1.8)});
/* ===================== zona 7 · le dune del Gobi ===================== */
const dune=(g,x,y,w,h,c1,c2,sd)=>{poly(g,c1,[[x-w,y],[x-w*.5,y-h*.55],[x+w*.1,y-h],[x+w*.35,y-h*.8],[x+w,y]]);poly(g,c2,[[x+w*.1,y-h],[x+w*.35,y-h*.8],[x+w,y],[x+w*.2,y]]);ln(g,'rgba(255,224,170,.55)',1.4,[x-w*.5,y-h*.55,x+w*.1,y-h,x+w*.35,y-h*.8])};
const wall=(g,x,y,w,h,t)=>{const c='#d8683a';poly(g,c,[[x-w,y],[x-w*.96,y-h*.7],[x-w*.7,y-h*.92],[x-w*.3,y-h],[x+w*.1,y-h*.88],[x+w*.5,y-h*.96],[x+w*.9,y-h*.7],[x+w,y]]);for(let i=0;i<16;i++){const wx=x-w*.9+i*w*.12;ln(g,i%2?'#b84a28':'#f08a4a',3,[wx,y,wx+(hr(i)-.5)*8,y-h*(.5+hr(i*3)*.4)])}
 for(let i=0;i<6;i++)ln(g,'rgba(255,200,120,.25)',2,[x-w*.9,y-h*(.1+i*.15),x+w*.9,y-h*(.12+i*.15)]);ln(g,'rgba(255,214,150,.8)',2.2,[x-w*.7,y-h*.92,x-w*.3,y-h,x+w*.1,y-h*.88,x+w*.5,y-h*.96])};
ptr('dnscogliere',(g,x,y,t)=>{wall(g,x+30,y-52,200,200,t);dune(g,x-170,y+10,150,50,'#d49a62','#b87a46');dune(g,x+180,y+14,170,56,'#e0a46a','#be8048');el(g,'rgba(80,60,40,.3)',x,y+24,70,8);water(g,x,y+26,50,7,'#8aa8a8','#6a8888',t);shrub(g,x-70,y+16,1.1,2,t);shrub(g,x+90,y+14,1,3,t);
 g.save();g.globalAlpha=.1+.06*Math.sin(t*.8);rect(g,'#f0c090',x-240,y-250,480,300);g.restore()});
ptr('dnvelocir',(g,x,y,t)=>{dune(g,x+60,y+8,190,92,'#d49a62','#b47440');water(g,x-90,y+28,70,9,'#8aa8a8','#6a8888',t);el(g,'rgba(80,60,40,.3)',x-90,y+30,84,9);foot3(g,x+80,y+26,1.2,1,'rgba(90,50,30,.5)');SP.velo(g,x,y,1.45,fcf(x),t,1);shrub(g,x-170,y+12,1.1,5,t);for(let i=0;i<6;i++)dot(g,'rgba(230,180,130,.5)',x-200+hr(i)*400+Math.sin(t*2+i)*8,y-30-hr(i*3)*90,1.2)});
ptr('dnprotocer',(g,x,y,t)=>{shrub(g,x+10,y+8,1.5,2,t);ST.proto(g,x-90,y+6,1.15,1,t,1);ST.proto(g,x+80,y+10,1,-1,t,2);ST.proto(g,x+160,y+16,.9,-1,t,3);ST.proto(g,x-20,y+22,.5,1,t,4);ST.proto(g,x+30,y+26,.45,-1,t,5);for(let i=0;i<4;i++)foot3(g,x-160+i*26,y+30+(i%2)*4,1.2,1,'rgba(90,50,30,.45)');dune(g,x-200,y+8,120,40,'#d49a62','#b47440')});
function ovi(g,x,y,s,f,t){g.save();g.translate(x,y);g.scale(f*s,s);const c='#6a4a3a',fc='#c8a070',sw=Math.sin(t*1.2);shd(g,50);
 ln(g,'#7a6a58',3,[-6,-4,-6,-18]);ln(g,'#7a6a58',3,[8,-4,8,-18]);
 for(let k=0;k<9;k++){const a=Math.PI*.9+k*.12;ln(g,k%2?'#2a2a32':'#4a3a30',3,[-26,-22,-26+Math.cos(a)*18,-22+Math.sin(a)*9])}
 el(g,c,0,-24,26,15);el(g,fc,0,-26,22,11);for(let k=0;k<8;k++){const a=-.1+k*.18;ln(g,k%2?fc:'#a8804e',3.4,[8,-30,8+Math.cos(a)*30,-30+Math.sin(a)*22+10])}
 for(let k=0;k<8;k++){const a=Math.PI+.5-k*.14;ln(g,k%2?'#2a2a32':'#6a4a3a',3,[-8,-30,-8+Math.cos(a)*32,-30-Math.sin(a)*8+8])}
 taper(g,c,bz([14,-34],[24,-44],[24,-62],6),8,5);el(g,c,27,-64,10,6.5,.2);poly(g,'#d8b878',[[34,-64],[41,-61],[34,-59]]);poly(g,'#c04a3a',[[22,-70],[28,-82],[32,-68]]);dot(g,'#f0e8b8',29,-65,1.4);dot(g,'#1a1410',29.5,-65,.7);
 g.restore()}
ptr('dnuova',(g,x,y,t)=>{dune(g,x-200,y+8,110,34,'#e0b27c','#c08c58');nest(g,x+150,y+14,36,9,0,'#efe6d2');egg(g,x+138,y+10,5,4);nest(g,x,y+14,46,10,0,'#efe6d2');ovi(g,x,y+2,1.3,fcf(x)*-1,t);shrub(g,x-170,y+14,1,3,t)});
const bone=(g,x,y,w,c)=>{ln(g,c,3,[x-w,y,x+w,y]);dot(g,c,x-w,y-2,3);dot(g,c,x-w,y+2,3);dot(g,c,x+w,y-2,3);dot(g,c,x+w,y+2,3)};
ptr('dnfermati',(g,x,y,t)=>{const bc='#ece0c6';poly(g,'#b8502e',[[x-200,y-14],[x-190,y-210],[x-120,y-230],[x,y-216],[x+120,y-232],[x+196,y-204],[x+204,y-14]]);for(let i=0;i<8;i++)ln(g,i%2?'#9a3e22':'#cc6a40',2.4,[x-190,y-30-i*24,x+190,y-34-i*24+(i%2)*3]);
 ln(g,'rgba(255,214,150,.6)',2,[x-190,y-210,x-120,y-230,x,y-216,x+120,y-232,x+196,y-204]);
 /* i due scheletri intrecciati: sobri, solo ossa */
 ln(g,bc,5,[x-120,y-110,x-70,y-122,x-10,y-118,x+50,y-104]);for(let k=0;k<7;k++){const rx=x-90+k*20;ln(g,bc,2.4,[rx,y-120,rx+4,y-100,rx-2,y-84])}el(g,bc,x+74,y-104,22,14,.3);el(g,'#9a3e22',x+78,y-106,5,4);poly(g,bc,[[x+60,y-120],[x+84,y-148],[x+104,y-126],[x+84,y-108]]);
 ln(g,bc,3.4,[x-30,y-112,x-14,y-80,x+10,y-62]);ln(g,bc,3,[x+30,y-100,x+40,y-76,x+62,y-66]);ln(g,bc,5,[x-140,y-110,x-176,y-100,x-196,y-88]);
 ln(g,bc,5,[x-60,y-180,x-10,y-190,x+44,y-176,x+84,y-146]);for(let k=0;k<5;k++){const rx=x-40+k*16;ln(g,bc,2,[rx,y-186,rx-2,y-166,rx+4,y-152])}el(g,bc,x+92,y-146,16,8,.5);ln(g,bc,3,[x+90,y-142,x+102,y-128,x+106,y-122]);ln(g,bc,2.6,[x-20,y-182,x-6,y-150,x+20,y-136]);ln(g,bc,4.4,[x-60,y-180,x-110,y-176,x-170,y-190]);
 for(let i=0;i<5;i++)ln(g,'rgba(236,224,198,.4)',1,[x-160+i*70,y-14+4*(i%2),x-130+i*70,y-10]);dune(g,x-210,y+8,110,28,'#d49a62','#b47440');dune(g,x+215,y+10,100,34,'#e0a46a','#be8048')});
ptr('dntherizino',(g,x,y,t)=>{water(g,x+190,y+4,90,10,'#a8784a','#8a5a38',t);conifer(g,x+90,y+6,1.6,40,t,'#3a6040');SP.theri(g,x,y,1.1,1,t,1);const q=Math.sin(t*.8)*4;ln(g,'#3a6040',2.4,[x+120,y-174,x+84+q,y-160,x+62,y-150]);shrub(g,x-170,y+14,1.1,3,t);for(let i=0;i<3;i++)fern(g,x-110+i*40,y+22,.8,i,t)});
/* ===================== zona 8 · la costa del mare interno ===================== */
const wbird=(g,x,y,s,t,c)=>{el(g,c||'#f2eee2',x,y,6*s,3*s);dot(g,c||'#f2eee2',x+5*s,y-3*s,2.4*s);poly(g,'#c89a58',[[x+7*s,y-3*s],[x+11*s,y-2*s],[x+7*s,y-1.6*s]])};
ptr('dnmare',(g,x,y,t)=>{water(g,x+30,y+30,250,28,'#d89a7c','#b87a64',t);for(let i=0;i<6;i++)wbird(g,x-120+i*50+Math.sin(t*.5+i)*5,y+26+(i%3)*6,1.2,t,i%2?'#f2eee2':'#3a3a44');conifer(g,x-215,y+6,1.5,5,t);broad(g,x+230,y+6,1.3,6,t,1);fern(g,x-100,y+20,1.2,7,t);fern(g,x+190,y+16,1,8,t);for(let i=0;i<3;i++)ln(g,'rgba(255,240,210,.5)',1.2,[x-80+i*120,y+34,x-40+i*120,y+34])});
ptr('dnnidi',(g,x,y,t)=>{poly(g,'#5a4636',[[x-260,y+30],[x-180,y-6],[x-60,y-26],[x+60,y-30],[x+190,y-10],[x+270,y+30]]);poly(g,'#6e5846',[[x-180,y-6],[x-60,y-26],[x+60,y-30],[x+190,y-10],[x+60,y-14],[x-60,y-8]]);
 for(let i=0;i<7;i++){const nx=x-190+i*64,ny=y+6+(i%2)*14-Math.sin(i/6*Math.PI)*20;nest(g,nx,ny+14,22,9,1,'#e8dcc4')}SP.maia(g,x-250,y-34,.6,1,t,1);SP.maia(g,x+250,y-32,.55,-1,t,2);for(let i=0;i<6;i++)el(g,'#e8dcc4',x-200+hr(i)*400,y+34+hr(i*3)*8,3,1.6);fern(g,x-80,y+30,1,3,t)});
ptr('dnmaia',(g,x,y,t)=>{const f=fcf(x);el(g,'#5a4636',x+f*140,y+20,70,12);nest(g,x+f*140,y+18,34,12,1,'#e8dcc4');for(let i=0;i<3;i++)SP.maia(g,x+f*(115+i*28),y+16+i%2*4,.28,-f,t,i);SP.maia(g,x,y,1.1,f,t,1);const lx=x+f*(86+(84*.62+54*.4)*.0),ly=y-134;poly(g,'#5aa04a',[[lx,ly],[lx+f*14,ly-6],[lx+f*22,ly+4],[lx+f*8,ly+6]]);ln(g,'#3a7a3a',1,[lx,ly,lx+f*18,ly]);fern(g,x-f*130,y+16,1.2,3,t);broad(g,x-f*220,y+6,1.1,4,t,0)});
ptr('dnparasau',(g,x,y,t)=>{water(g,x,y+34,260,22,'#d89a7c','#b87a64',t);conifer(g,x-215,y+6,1.4,6,t);SP.parasau(g,x,y,1.1,fcf(x),t,1);fern(g,x+150,y+14,1.2,3,t);fern(g,x-110,y+14,1.1,4,t)});
ptr('dncornuti',(g,x,y,t)=>{water(g,x,y+26,280,26,'#cf9a78','#aa7a60',t);ST.cent(g,x-130,y+8,.9,1,t,1);ST.sty(g,x,y+12,.95,1,t,2);ST.cha(g,x+140,y+8,.9,1,t,3);for(let i=0;i<14;i++)dot(g,'rgba(255,214,140,.5)',x-200+hr(i)*400+Math.sin(t+i)*6,y-20-hr(i*3)*60-((t*8+i*7)%20),1.4);for(let i=0;i<3;i++)ln(g,'rgba(255,240,210,.5)',1.4,[x-150+i*130,y+30,x-110+i*130,y+30])});
/* ===================== zona 9 · la pianura di Hell Creek ===================== */
const refl=(g,x,y,rx,ry,t)=>{const gr=g.createLinearGradient(0,y-ry,0,y+ry);gr.addColorStop(0,'#f0a070');gr.addColorStop(1,'#a04a78');g.fillStyle=gr;g.beginPath();g.ellipse(x,y,rx,ry,0,0,7);g.fill();for(let i=0;i<5;i++)ln(g,'rgba(255,230,180,.45)',1.6,[x-rx*.5+Math.sin(t+i)*10,y-ry*.6+i*ry*.3,x+rx*.4+Math.sin(t+i)*10,y-ry*.6+i*ry*.3])};
ptr('dnultima',(g,x,y,t)=>{refl(g,x,y+34,260,22,t);broad(g,x-200,y+6,1.5,3,t,1);broad(g,x+210,y+6,1.4,4,t,1);ginkgo(g,x+20,y+4,1.2,5,t);for(let i=0;i<4;i++)fern(g,x-150+i*100,y+16+i%2*8,1.2,i,t);ST.trice(g,x+140,y-60,.4,-1,t,1);SP.edmo(g,x-130,y-58,.36,1,t,1);flw(g,x-60,y+20,6,3)});
ptr('dntricer',(g,x,y,t)=>{refl(g,x,y+34,270,24,t);ST.trice(g,x,y+2,1.1,fcf(x),t,1);fern(g,x-160,y+14,1.2,3,t);fern(g,x+160,y+16,1.1,4,t);broad(g,x-230,y+6,1.2,6,t,1)});
ptr('dnedmonto',(g,x,y,t)=>{refl(g,x,y+30,270,22,t);SP.edmo(g,x-130,y+4,1,1,t,1);SP.edmo(g,x,y+10,1.05,1,t+1,2);SP.edmo(g,x+140,y+4,.98,1,t+2,3);bird(g,x-110,y-84,.5,1,t,{ph:1});bird(g,x+160,y-84,.5,1,t,{ph:3});fern(g,x-210,y+14,1.1,3,t)});
ptr('dnanchilo',(g,x,y,t)=>{fern(g,x-130,y+16,1.4,3,t);fern(g,x-10,y+18,1.3,4,t);ST.anky(g,x-60,y+6,1.15,1,t,1);SP.pachy(g,x+160,y,1.1,-1,t,2);fern(g,x+60,y+22,1.2,5,t);broad(g,x+230,y+6,1.2,5,t,1)});
ptr('dntrex',(g,x,y,t)=>{fern(g,x-180,y+14,1.4,3,t);broad(g,x-230,y+6,1.3,7,t,1);SP.trex(g,x,y,1.05,fcf(x),t,1);for(let i=0;i<4;i++)fern(g,x-90+i*70,y+20+i%2*8,1.4,i+5,t)});
ptr('dncielo',(g,x,y,t)=>{refl(g,x,y+34,280,24,t);glow(g,x+40,y-250,200,'255,190,120',.4);const u=(t*.07)%1,bx=x-200+u*420,by=y-240-Math.sin(u*Math.PI)*50;g.strokeStyle='rgba(40,20,50,.85)';g.lineWidth=2.4;g.lineCap='round';const w=Math.sin(t*9)*5;g.beginPath();g.moveTo(bx-12,by+w);g.quadraticCurveTo(bx-5,by-5,bx,by);g.quadraticCurveTo(bx+5,by-5,bx+12,by+w);g.stroke();g.lineCap='butt';ginkgo(g,x-200,y+6,1.2,2,t);broad(g,x+220,y+6,1.3,3,t,1);for(let i=0;i<4;i++)fern(g,x-100+i*70,y+18,1,i,t)});
ptr('dnsopravvive',(g,x,y,t)=>{refl(g,x+60,y+34,200,18,t);croc(g,x+170,y+22,.8,-1,t,{c:'#4a5a40',L:110,sub:.3});log(g,x-190,y+8,1.4,4);turtle(g,x-190,y-8,1.4,1);nest(g,x-40,y+14,34,8,0,'#efe6d2');bird(g,x-80,y+2,1.4,1,t,{c:'#2c2a36',ph:1});el(g,'#5a4636',x+60,y+8,26,7);el(g,'#1a1410',x+62,y+6,8,4);mammal(g,x+90,y+6,1.6,-1,t);fern(g,x-120,y+16,1.1,2,t);fern(g,x+10,y+20,1,3,t);for(let i=0;i<5;i++)dot(g,'#c8b070',x-96+i*8+hr(i)*3,y+10+hr(i+3)*3,1.1)});
ptr('dnvarco',(g,x,y,t)=>{const gl=.85+.1*Math.sin(t*1.4);glow(g,x,y-120,380,'255,214,130',gl);glow(g,x,y-110,200,'255,240,200',1);glow(g,x,y-110,90,'255,255,240',1);g.save();g.globalAlpha=.12;for(let i=0;i<7;i++){const a=-1.2+i*.4;poly(g,'#fff6d0',[[x,y-110],[x+Math.cos(a)*400-14,y-110+Math.sin(a)*400],[x+Math.cos(a)*400+14,y-110+Math.sin(a)*400]])}g.restore();
 for(const d of[-1,1]){const tx=x+d*88;taper(g,'#5a3e30',[[tx,y+8],[tx-d*2,y-250],[tx-d*4,y-520]],64,44);for(let i=0;i<9;i++)ln(g,'#3e2a20',2.4,[tx-18+i*5,y+4,tx-16+i*5-d*3,y-60-i*40]);ln(g,'rgba(255,214,150,.5)',3,[tx-d*28,y,tx-d*30,y-480])}
 el(g,'#4a3626',x,y+14,56,9);for(let i=0;i<7;i++){const a=i*2.4;egg(g,x+Math.cos(a)*(i%3*10+4),y+10+Math.sin(a)*3,5,4,'#f4ecd8')}
 for(let i=0;i<14;i++){const u=((t*.18+i*.083)%1),bx=x+Math.sin(i*2.1)*80*(.3+u),by=y-30-u*340,w=Math.sin(t*10+i)*3.5;g.strokeStyle='rgba(40,24,30,'+(.9*(1-u*.6))+')';g.lineWidth=2.2;g.lineCap='round';g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke();g.lineCap='butt'}
 fern(g,x-60,y+18,1.1,3,t);fern(g,x+60,y+20,1.1,4,t)});
/* targa di zona: l'epoca, scolpita su una lastra */
const ERA=[['TRIASSICO SUPERIORE','circa 231-225 milioni di anni fa'],['TRIASSICO SUPERIORE','circa 215-200 milioni di anni fa'],['GIURASSICO SUPERIORE','circa 155-147 milioni di anni fa'],['GIURASSICO SUPERIORE','circa 150 milioni di anni fa'],['CRETACEO INFERIORE','circa 125-110 milioni di anni fa'],['INIZIO DEL CRETACEO SUPERIORE','circa 100-94 milioni di anni fa'],['CRETACEO SUPERIORE','circa 75-70 milioni di anni fa'],['CRETACEO SUPERIORE','circa 77-75 milioni di anni fa'],['ULTIME FASI DEL CRETACEO','circa 68-66 milioni di anni fa']];
ptr('dntarga',(g,x,y,t,z)=>{const w=132,h=60;el(g,'rgba(40,24,16,.25)',x,y+4,w+10,6);poly(g,'#a89478',[[x-w,y],[x-w+8,y-h],[x+w-8,y-h-4],[x+w,y]]);poly(g,'#c0aa8c',[[x-w+8,y-h],[x+w-8,y-h-4],[x+w-14,y-h+6],[x-w+14,y-h+8]]);
 g.save();g.textAlign='center';g.fillStyle='#3e2e22';g.font='bold 11px sans-serif';g.fillText(ERA[z][0],x,y-h*.54);g.font='italic 11px sans-serif';g.fillText(ERA[z][1],x,y-h*.26);g.restore()});
/* ===================== livelli di sfondo ===================== */
const ZW=Z.slice(0,9).map((a,z)=>Z[z+1]-a);
const GCT=[[138,90,68],[138,92,60],[154,132,96],[222,214,190],[90,74,56],[168,118,74],[196,122,74],[94,74,58],[90,70,54]];
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,6*s);el(g,c,x-18*s,y+2*s,22*s,5*s);el(g,c,x+20*s,y+2*s,24*s,5*s)};
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,v=lz(SKY,xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,rgb(v.slice(0,3)));gr.addColorStop(.62,rgb(v.slice(3,6)));gr.addColorStop(1,rgb(v.slice(6,9)));g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const u=cl(xs/(W1-330),0,1),sx=40+u*400,sy=345-Math.sin(u*Math.PI)*275,low=1-Math.sin(u*Math.PI),lw=Math.pow(low,1.6);
 const sg=g.createRadialGradient(sx,sy,6,sx,sy,260);sg.addColorStop(0,'rgba(255,'+Math.round(244-lw*110)+','+Math.round(200-lw*130)+','+(.7+lw*.2)+')');sg.addColorStop(.25,'rgba(255,'+Math.round(214-lw*80)+',150,.32)');sg.addColorStop(1,'rgba(255,200,150,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT+4);
 const sr=13+lw*16;dot(g,rgb([255,250-lw*90,225-lw*150]),sx,sy,sr);dot(g,'rgba(255,255,240,.5)',sx,sy,sr*.7);
 const tc=cl((xs-ZC[0])/600,0,1),cc=xs<Z[1]?'rgba(255,225,230,.5)':xs<Z[6]?'rgba(255,255,255,.5)':xs<Z[8]?'rgba(255,210,170,.55)':'rgba(255,170,190,.55)';
 each(o-t*1.2,380,2,(x,i,r)=>{if(r>.6)return;nube(g,x+r*110,38+r*80,.9+r*.8,cc)});
 const vs=cl((xs-Z[6]+200)/700,0,1)*cl((Z[7]-xs+600)/700,0,1);if(vs>.01){g.fillStyle='rgba(206,124,84,'+(.22*vs)+')';g.fillRect(0,0,480,GT+4)}
 const fo=cl(1-xs/2600,0,1)*.25;if(fo>.01){g.fillStyle='rgba(255,226,230,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const dw=cl((xs-(W1-1500))/1200,0,1);if(dw>.01){const dg=g.createLinearGradient(0,GT-230,0,GT+4);dg.addColorStop(0,'rgba(255,200,120,0)');dg.addColorStop(1,'rgba(255,200,120,'+(.55*dw)+')');g.fillStyle=dg;g.fillRect(0,GT-230,480,234)}}
const FB=345;
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hzc=hex(lz(SKY,xs).slice(6,9)),dim=c=>mixc(c,hzc,.42);setL(xs);
 const fx=wc=>240+wc*.05-o,env=z=>cl((ZW[z]*.62-Math.abs(xs-ZC[z]))/(ZW[z]*.25),0,1);
 const mont=(sx,w,h,c,seed)=>{g.fillStyle=tn(dim(c));g.beginPath();g.moveTo(sx-w,FB);for(let q=0;q<=34;q++){const u=q/34,hh=h*Math.sin(u*Math.PI)*(.7+.3*Math.abs(Math.sin(u*7+seed)))+3*Math.sin(u*29+seed);g.lineTo(sx-w+u*2*w,FB-hh)}g.lineTo(sx+w,FB);g.closePath();g.fill()};
 const chioma=(sx,x0,x1,hh,c1,c2)=>{for(let q=0;q<(x1-x0)/14;q++){const bx=sx+x0+q*14,h2=hh*(.6+.4*hr(q*3));poly(g,dim(q%2?c1:c2),[[bx-8,FB+2],[bx,FB-h2],[bx+8,FB+2]])}};
 const vulcan=(sx,w,h,c,sm)=>{poly(g,dim(c),[[sx-w,FB],[sx-w*.2,FB-h],[sx+w*.2,FB-h],[sx+w,FB]]);poly(g,dim(shade(c,.8)),[[sx+w*.1,FB-h],[sx+w*.2,FB-h],[sx+w,FB],[sx+w*.4,FB]]);
  for(let k=0;k<9;k++){const py=FB-h-k*(h*.12)-((t*8)%(h*.12)),px=sx+Math.sin(k*.9+t*.3)*8+k*4,r=h*.07+k*h*.013;el(g,'rgba('+sm+','+(.5-k*.045)+')',px,py,r,r*.8)}};
 const band=(c,y0)=>{rect(g,dim(c),fx(ZC[0])-900,y0,3000,GT+4-y0)};
 const z0=env(0);if(z0>.02){g.globalAlpha=z0;const sx=fx(ZC[0]);band('#a47868',FB-2);vulcan(sx-300,170,130,'#6a566a','246,226,226');vulcan(sx+240,130,96,'#625064','240,220,224');chioma(sx,-700,700,40,'#2c4630','#243c2a');el(g,'rgba(190,204,220,.55)',sx-100,FB+8,360,7);for(let q=0;q<5;q++)el(g,'rgba(255,236,236,.4)',sx-460+q*220,FB+3,140,6);g.globalAlpha=1}
 const z1=env(1);if(z1>.02){g.globalAlpha=z1;const sx=fx(ZC[1]);band('#7a6a50',FB-2);mont(sx-300,330,80,'#9a5a44',2.2);mont(sx+270,380,100,'#8a5040',5.1);chioma(sx,-760,760,64,'#2a4a30','#223e28');for(let q=0;q<5;q++)el(g,'rgba(240,244,236,.45)',sx-520+q*260,FB-10,160,12);g.globalAlpha=1}
 const z2=env(2);if(z2>.02){g.globalAlpha=z2;const sx=fx(ZC[2]);band('#a8946a',FB-2);mont(sx-200,500,50,'#8a9ab4',3.3);mont(sx+380,300,70,'#7e8eaa',6.2);chioma(sx,-760,760,34,'#4a6a3a','#3e5e34');for(let q=0;q<5;q++){sauro(g,sx-480+q*230,FB+4,.2+(q%2)*.06,q%2?1:-1,{L:110,H:60,bh:44,c:dim('#8a8a86'),tl:140,nx:90,nk:100,nc:.7},t)}g.globalAlpha=1}
 const z3=env(3);if(z3>.02){g.globalAlpha=z3;const sx=fx(ZC[3]);rect(g,'#2a8ad8',sx-800,FB-48,1600,50);rect(g,'#58c4d8',sx-800,FB-6,1600,12);band('#46c4c8',FB+6);for(let q=0;q<4;q++){const ix=sx-420+q*260;el(g,dim('#2e5a38'),ix,FB-4,100,20);chioma(ix,-60,60,24,'#2a5a34','#244e2e')}
  for(let q=0;q<3;q++){const cx=sx-300+q*320;poly(g,dim('#f4f0e0'),[[cx-80,FB+4],[cx-70,FB-34],[cx-20,FB-42],[cx+40,FB-30],[cx+90,FB+4]]);for(let k=0;k<5;k++)ln(g,'rgba(180,170,150,.5)',1.4,[cx-60+k*30,FB-30,cx-60+k*30,FB])}
  for(let q=0;q<40;q++)dot(g,'rgba(255,255,255,.55)',sx-760+hr(q)*1500,FB+hr(q*3)*14,1+hr(q*5)*1.2);g.globalAlpha=1}
 const z4=env(4);if(z4>.02){g.globalAlpha=z4;const sx=fx(ZC[4]);band('#6a7a48',FB-2);chioma(sx,-760,760,58,'#3a6a3a','#2e5a30');rect(g,dim('#8ab8c0'),sx-500,FB-4,420,10);vulcan(sx+300,170,150,'#5a4e5e','210,200,200');mont(sx-120,280,60,'#6a8a5a',1.4);for(let q=0;q<6;q++){const bx=sx-300+q*100+Math.sin(t*.5+q)*14,by=60+hr(q)*80+Math.sin(t+q)*6;ln(g,'rgba(60,50,40,.7)',1.4,[bx-6,by+2,bx,by,bx+6,by+2])}g.globalAlpha=1}
 const z5=env(5);if(z5>.02){g.globalAlpha=z5;const sx=fx(ZC[5]);band('#c8a870',FB-2);for(let q=0;q<5;q++){rect(g,dim(q%2?'#d8b878':'#c8a468'),sx-760,FB-6+q*7,1520,5);for(let k=0;k<16;k++)rect(g,'rgba(255,240,190,.55)',sx-740+k*94+q*20,FB-5+q*7,30,1.4)}chioma(sx,-760,760,34,'#4a6a38','#3e5e30');for(let q=0;q<3;q++){const bx=sx-300+q*260+Math.sin(t*.3+q)*20;pter(g,bx,70+q*30,.5,q%2?1:-1,t,{c:'#4a3a44',sp:2.4,ph:q})}g.globalAlpha=1}
 const z6=env(6);if(z6>.02){g.globalAlpha=z6;const sx=fx(ZC[6]);band('#c47a4a',FB-2);for(let q=0;q<5;q++){const dx=sx-560+q*280,c=q%2?'#c06a3e':'#d68a52';poly(g,dim(c),[[dx-200,FB],[dx-90,FB-42-q%3*10],[dx,FB-26],[dx+110,FB-58],[dx+200,FB]]);ln(g,'rgba(255,214,150,.6)',1.4,[dx-90,FB-42-q%3*10,dx,FB-26,dx+110,FB-58])}
  for(let q=0;q<3;q++){const wx=sx-260+q*300;poly(g,dim('#d8683a'),[[wx-70,FB],[wx-64,FB-96],[wx-20,FB-112],[wx+40,FB-100],[wx+70,FB]]);for(let k=0;k<6;k++)ln(g,k%2?'#b84a28':'#f08a4a',2,[wx-56+k*20,FB,wx-56+k*20,FB-60-hr(k+q)*40])}
  for(let q=0;q<5;q++)el(g,'rgba(190,120,80,'+(.3-q*.04)+')',sx+360+Math.sin(t*.2+q)*14,FB-20-q*14,150-q*14,26);g.globalAlpha=1}
 const z7=env(7);if(z7>.02){g.globalAlpha=z7;const sx=fx(ZC[7]);rect(g,'#6a8ac0',sx-800,FB-30,1600,40);rect(g,'#f4b078',sx-800,FB-4,1600,14);band('#7a6a5a',FB+8);for(let q=0;q<50;q++)rect(g,'rgba(255,230,180,.6)',sx-780+hr(q)*1560,FB-26+hr(q*3)*30,5+hr(q*7)*8,1.2);mont(sx-300,360,70,'#6a7aa8',2.8);mont(sx+320,300,54,'#7a82ac',4.4);chioma(sx,-760,-100,26,'#3a5a34','#2e4c2c');g.globalAlpha=1}
 const z8=env(8);if(z8>.02){g.globalAlpha=z8;const sx=fx(ZC[8]);band('#6a4a58',FB-2);rect(g,'rgba(240,150,120,.6)',sx-800,FB-2,1600,10);chioma(sx,-760,760,40,'#3a3a4a','#2e2e40');for(let q=0;q<9;q++){const hx=sx-420+q*100;g.fillStyle='rgba(50,34,54,.7)';g.beginPath();g.ellipse(hx,FB-5,14,6,0,0,7);g.fill();g.fillRect(hx+8,FB-12,4,10);g.fillRect(hx-8,FB-8,3,10)}
  g.save();g.globalAlpha=.2*z8;glow(g,sx+200,FB-10,320,'255,170,100',.8);g.restore();g.globalAlpha=1}
 const hg=g.createLinearGradient(0,FB-50,0,FB+8);hg.addColorStop(0,'rgba(255,255,255,0)');hg.addColorStop(1,'rgba(255,230,210,.28)');g.fillStyle=hg;g.fillRect(0,FB-50,480,58)}
/* livello 2: lo sfondo intermedio, 5 volte più lento del terreno; la zona dell'oggetto dipende dal punto in cui lo si incontra */
const KM=[[['conifer',.35],['tfern',.6],['equis',.8],['cycad',1]],[['conifer',.55],['tfern',.75],['cycad',.9],['equis',1]],[['conifer',.3],['tfern',.5],['sauro',.7],['cycad',1]],[['isle',.35],['cliff',.6],['cycad',.8],['conifer',1]],
 [['conifer',.3],['tfern',.55],['ginkgo',.7],['cycad',1]],[['mangr',.5],['conifer',.75],['tfern',1]],[['dune',.4],['butte',.7],['shrub',1]],[['conifer',.3],['broad',.6],['tfern',.8],['cycad',1]],[['broad',.35],['conifer',.55],['ginkgo',.7],['tfern',.85],['cycad',1]]];
const KS=[[['equis',.35],['tfern',.55],['cycad',.75],['rock',.85],['conifer',1]],[['conifer',.3],['tfern',.5],['cycad',.7],['equis',.85],['log',1]],[['tfern',.35],['cycad',.6],['conifer',.8],['rock',.9],['fern',1]],[['cycad',.3],['conifer',.5],['wrock',.75],['fern',.9],['equis',1]],
 [['tfern',.35],['fern',.6],['equis',.8],['cycad',1]],[['mangr',.4],['equis',.6],['log',.75],['fern',.9],['rock',1]],[['shrub',.5],['rockred',1]],[['fern',.4],['broad',.6],['conifer',.8],['log',1]],[['fern',.35],['broad',.6],['ginkgo',.75],['log',.9],['rock',1]]];
const pickK=(T,r)=>{for(const k of T)if(r<=k[1])return k[0];return T[T.length-1][0]};
function plant(g,k,x,y,s,sd,t,far,mid){switch(k){case'conifer':conifer(g,x,y,s,sd,t,far?'#3a5e44':null);break;case'tfern':tfern(g,x,y,s,sd,t);break;case'cycad':cycad(g,x,y,s,sd,t);break;case'equis':equis(g,x,y,s,sd,t);break;case'fern':fern(g,x,y,s,sd,t);break;case'ginkgo':ginkgo(g,x,y,s,sd,t);break;case'broad':broad(g,x,y,s,sd,t,1);break;case'mangr':mangr(g,x,y,s,sd,t);break;case'shrub':shrub(g,x,y,s,sd,t);break;case'rock':rock(g,x,y,s,sd);break;case'wrock':rock(g,x,y,s,sd,'#efeadc');break;case'rockred':rock(g,x,y,s,sd,'#a8583a');break;case'log':log(g,x,y,s,sd);break;
 case'sauro':sauro(g,x,y,s*.5,sd%2?1:-1,{L:110,H:60,bh:44,c:mixc('#8a8a86','#d8d0c0',.3),tl:140,nx:90,nk:100,nc:.7},t);break;
 case'isle':el(g,'#f0e8d0',x,y,70*s,8*s);el(g,'#3a6a3a',x,y-12*s,56*s,20*s);conifer(g,x-16*s,y-16*s,.4*s,sd,t);conifer(g,x+14*s,y-14*s,.34*s,sd+2,t);break;
 case'cliff':poly(g,'#f0ecdc',[[x-50*s,y],[x-44*s,y-60*s],[x-10*s,y-70*s],[x+40*s,y-56*s],[x+54*s,y]]);for(let i=0;i<4;i++)ln(g,'rgba(160,150,130,.5)',1.2,[x-34*s+i*22*s,y-50*s,x-34*s+i*22*s,y]);break;
 case'dune':poly(g,'#d49a62',[[x-90*s,y],[x-30*s,y-40*s],[x+20*s,y-54*s],[x+90*s,y]]);poly(g,'#b87a46',[[x+20*s,y-54*s],[x+90*s,y],[x+10*s,y]]);break;
 case'butte':poly(g,'#d8683a',[[x-34*s,y],[x-30*s,y-90*s],[x-8*s,y-100*s],[x+30*s,y-86*s],[x+38*s,y]]);for(let i=0;i<4;i++)ln(g,i%2?'#b84a28':'#f08a4a',2,[x-24*s+i*16*s,y,x-24*s+i*16*s,y-70*s]);break}}
function layerMid(g,o,t){const cam=o/.2,xs=cam+240,hzc=hex(lz(SKY,xs).slice(6,9)),gc=hex(lz(GCT,xs));
 setL(xs);const bg=g.createLinearGradient(0,FB-4,0,GT+4);bg.addColorStop(0,'rgba('+Math.round(lz(GCT,xs)[0])+','+Math.round(lz(GCT,xs)[1])+','+Math.round(lz(GCT,xs)[2])+',0)');bg.addColorStop(.5,mixc(gc,hzc,.3));bg.addColorStop(1,mixc(gc,hzc,.15));g.fillStyle=bg;g.fillRect(0,FB-4,480,GT+8-FB);
 each(o,64,5,(x,i,r)=>{const wz=(i*64-240)/.2+240,zz=zn(wz);setL(wz);const k=pickK(KM[zz],r),s=.5+hr(i*3)*.3;plant(g,k,x+32,364,s,i,t,1,1)});
 const hg=g.createLinearGradient(0,330,0,GT+4);hg.addColorStop(0,'rgba(255,240,226,0)');hg.addColorStop(1,'rgba(255,240,226,.16)');g.fillStyle=hg;g.fillRect(0,330,480,GT-326)}
/* livello 3: piante lungo il percorso */
function layerStreet(g,o,t){each(o,170,7,(x,i,r)=>{const wx=i*170,zz=zn(wx);if(hr(i*5)<.12)return;setL(wx);const k=pickK(KS[zz],r),s=1.05+hr(i*7)*.5;plant(g,k,x+60,GT+8,s,i,t,0,0)})}
/* suolo */
function groundDraw(g,cam,t){const gt=GT;rect(g,'#6a4a3a',0,gt,480,3);
 for(let k=0;k<24;k++){const wx=cam+k*20+10,c=lz(GCT,wx);g.fillStyle=rgb(c);g.fillRect(k*20,gt+3,21,150)}
 const dk=g.createLinearGradient(0,gt,0,gt+150);dk.addColorStop(0,'rgba(255,240,220,.06)');dk.addColorStop(1,'rgba(30,14,10,.2)');g.fillStyle=dk;g.fillRect(0,gt+3,480,150);
 each(cam,22,3,(x,i,r)=>{const wx=i*22,zz=zn(wx),yy=gt+8+hr(i*5)*136,r2=hr(i*9);setL(wx);
  if(zz==0){if(r>.82)el(g,'rgba(236,232,222,.45)',x,yy,22+r2*30,3+r2*3);else if(r<.12)el(g,'rgba(60,40,34,.4)',x,yy,16+r2*20,3+r2*3);else if(r<.5)dot(g,'rgba(40,24,20,.3)',x,yy,1+r2*1.4)}
  else if(zz==1){if(r>.7)ln(g,'rgba(60,34,18,.4)',1,[x,yy,x+6+r2*8,yy+2]);else if(r<.3)dot(g,'rgba(255,220,170,.22)',x,yy,1+r2*1.4)}
  else if(zz==2){if(r>.6)el(g,'rgba(50,40,30,.3)',x,yy,5+r2*8,2+r2*2);else if(r<.2)dot(g,'rgba(220,204,170,.4)',x,yy,1.4+r2*1.4)}
  else if(zz==3){if(r<.2)dot(g,'rgba(180,160,130,.5)',x,yy,1.4+r2*1.6);else if(r>.85)dot(g,'rgba(255,255,255,.7)',x,yy,2+r2*2)}
  else if(zz==4){if(r>.7)el(g,'rgba(70,100,50,.4)',x,yy,10+r2*14,2+r2*2);else if(r<.3)dot(g,'rgba(20,20,14,.3)',x,yy,1+r2*1.4)}
  else if(zz==5){if(r>.7)ln(g,'rgba(80,40,20,.35)',1.2,[x,yy,x+12+r2*14,yy]);else if(r<.3)dot(g,'rgba(255,230,180,.3)',x,yy,1+r2*1.2)}
  else if(zz==6){if(r>.4)ln(g,r>.7?'rgba(255,224,170,.28)':'rgba(120,60,30,.28)',1.4,[x,yy,x+16+r2*18,yy+(r2-.5)*3])}
  else if(zz==7){if(r>.8)el(g,'rgba(60,90,50,.4)',x,yy,8+r2*10,2+r2*2);else if(r<.2)dot(g,'rgba(30,20,16,.3)',x,yy,1+r2*1.4)}
  else{if(r>.75)el(g,'rgba(90,110,50,.4)',x,yy,9+r2*12,2+r2*3);else if(r<.18)dot(g,'rgba(160,140,130,.4)',x,yy,1.4+r2*1.4)}});
 const gt2=cl(cam/1800,0,1);const hz=g.createLinearGradient(0,gt,0,gt+30);hz.addColorStop(0,'rgba(255,230,230,.18)');hz.addColorStop(1,'rgba(255,230,230,0)');g.fillStyle=hz;g.fillRect(0,gt+3,480,30);
 const gd=cl((cam-(W1-1300))/1000,0,1);if(gd>.02)rect(g,'rgba(255,190,110,'+(.18*gd)+')',0,gt,480,150)}
/* vita: pterosauri, uccelli, libellule, piccoli animali, orme e ossa lungo il percorso */
function layerLife(g,o,t){const cam=o,xs=cam+240;
 const V=(a,b,w)=>cl((xs-a+w)/w,0,1)*cl((b-xs+w)/w,0,1);
 const fl=(zv,n,fn)=>{if(zv<.05)return;for(let i=0;i<n;i++){const bx=((i*171+t*(18+i*5))%640)-80,by=50+hr(i*3)*130+Math.sin(t*1.3+i*2)*10;g.globalAlpha=zv;fn(bx,by,i);g.globalAlpha=1}};
 setL(xs);
 fl(V(Z[1],Z[2],300)*.9+V(Z[2],Z[3],300)*.9,3,(bx,by,i)=>pter(g,bx,by,.5+i*.05,1,t,{c:'#6a5448',sp:3.4,ph:i,tail:i%2}));
 fl(V(Z[3],Z[4],300),3,(bx,by,i)=>pter(g,bx,by,.55,i%2?1:-1,t,{c:'#6a5448',sp:3,ph:i,tail:1}));
 fl(V(Z[5],Z[6],300),3,(bx,by,i)=>pter(g,bx,by,.6,1,t,{c:'#5a4638',sp:2.6,ph:i}));
 const bd=(bx,by,i)=>{const w=Math.sin(t*9+i)*3;g.strokeStyle='rgba(50,40,44,.8)';g.lineWidth=1.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke()};
 fl(V(Z[4],Z[5],300)+V(Z[7],Z[8],300)*.9+V(Z[8],W1,300)*.8,6,bd);
 const dv=V(Z[1],Z[4],300);if(dv>.05)for(let i=0;i<5;i++){g.globalAlpha=dv;dragon(g,((i*131+t*(20+i*4))%560)-40,GT+20+hr(i*5)*70+Math.sin(t*1.5+i)*10,1.1,t,i);g.globalAlpha=1}
 each(o,150,11,(x,i,r)=>{const wx=cam+x,zz=zn(wx),y=GT+26+hr(i*13)*108,s=.55+(y-GT)/150*.5;setL(wx);const f=hr(i*3)>.5?1:-1;
  if(r>.62){const k=hr(i*17);
   if(zz==0||zz==1||zz==2)(k<.4?()=>foot3(g,x,y,s*1.6,f,'rgba(40,28,20,.45)'):k<.7?()=>rock(g,x,y,s*.8,i):()=>{ln(g,'#e4dcc6',2,[x-12,y,x-6,y-6,x+4,y-6,x+12,y]);ln(g,'#e4dcc6',2,[x-9,y,x-4,y-4,x+2,y-4,x+8,y])})();
   else if(zz==3||zz==4)(k<.4?()=>foot3(g,x,y,s*2.2,f,'rgba(60,50,40,.4)'):k<.7?()=>{el(g,'#e8dcc8',x,y,8*s,4*s);dot(g,'#c8b496',x,y,3*s)}:()=>{ln(g,'#e8e2d4',1.4,[x,y,x+8,y-8]);ln(g,'#e8e2d4',1.4,[x+2,y,x+12,y-4])})();
   else if(zz==5)(k<.5?()=>foot3(g,x,y,s*2.6,f,'rgba(70,50,30,.45)'):()=>{el(g,'#d8d4c8',x,y,10*s,3*s);ln(g,'#d8d4c8',3,[x-10,y,x-20,y-4])})();
   else if(zz==6)(k<.4?()=>foot3(g,x,y,s*1.4,f,'rgba(100,50,30,.45)'):k<.7?()=>{for(let q=0;q<3;q++)egg(g,x+q*5,y+(q%2)*2,3.4,2.6,'#e8dcc4')}:()=>rock(g,x,y,s*.8,i,'#a8583a'))();
   else (k<.5?()=>foot3(g,x,y,s*2,f,'rgba(40,28,20,.5)'):k<.75?()=>{el(g,'#e8dcc4',x,y,3,1.6);el(g,'#e8dcc4',x+7,y+1,2.4,1.4)}:()=>{poly(g,'#5aa04a',[[x,y],[x+10,y-5],[x+18,y]]);poly(g,'#4a8a3a',[[x+6,y],[x+16,y-3],[x+22,y+3]])})();}
  else if(r<.12){const k=hr(i*19);if(zz==2||zz==3)lizard(g,x,y,s*1.2,f,t);else if(zz==8&&k<.5)mammal(g,x,y,s*1.4,f,t);else if(zz==4||zz==5)turtle(g,x,y,s*1.2,f);else if(zz==1||zz==0)lizard(g,x,y,s*1.2,f,t)}});
 g.globalAlpha=1}
/* ===================== personaggi (disegnati insieme alla scena: i giganti sono troppo larghi per il disco del personaggio) ===================== */
const NP=(id,x)=>({id,name:NAME[id],x,draw:()=>{},d:{a:{t:GREET[id]}}});
const npcs=[NP('dn_alba',LX[1]),NP('dn_lunga',LX[10]),NP('dn_piuma',LX[15]),NP('dn_pollice',LX[18]),NP('dn_vela',LX[24]),NP('dn_falce',LX[29]),NP('dn_corno',LX[40])];
/* ---- oggetti lungo il percorso ---- */
const PN=['dnpianura','dneoraptor','dnherrera','dnpiccoli','dnplateo','dnfitosauro','dncoelo','dnlilien','dnfelci','dngiganti','dndiplo','dnallo','dnstego','dngiraffa','dnlaguna','dnarcheo','dncompso','dncieli','dniguano','dnsinosauro','dnmicroraptor','dnyutyr','dndeino','dndelta','dnspino','dncarch','dngiganoto','dnargentino','dnscogliere','dnvelocir','dnprotocer','dnuova','dnfermati','dntherizino','dnmare','dnnidi','dnmaia','dnparasau','dncornuti','dnultima','dntricer','dnedmonto','dnanchilo','dntrex','dncielo','dnsopravvive','dnvarco'];
const props=[];for(let z=0;z<9;z++)props.push(['dntarga',z?Z[z]:190,z]);PN.forEach((n,i)=>props.push([n,LX[i]]));props.sort((a,b)=>a[1]-b[1]);
const look=LX.map((x,i)=>[i<NT-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
const LV=fn=>(g,o,t)=>fn(g,o,t);
addWorld({id:'dinosauri',name:WNAME,width:W1,sky:['#8c97b6','#e3b2b6','#f8d9c2'],gt:372,gr:['#8a5a44','#5a3a2c'],chord:[130.8,196,261.6,329.6],amb:'#fff0c8',
intro:INTRO,look:look,
gdraw:(g,cam,t)=>groundDraw(g,cam,t),
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerLife)}],
props:props,npcs:npcs});
})();

/* --- Battute: 8 per personaggio, la prima è la battuta d'ingresso, l'ultima è il saluto (da dinosauri.txt) --- */
(function(){
const TOPX_DN={
dn_alba:[
["Chi sei e che fai?","Alba, circa un metro di lunghezza e una decina di chili. Corro nella boscaglia e lungo il fiume, cerco insetti, piccole prede e foglie, e mi tengo lontana dai grandi. I tuoi studiosi mi chiameranno Eoraptor, \"ladro dell’alba\"."],
["Dove siamo?","In una pianura di fiumi ai piedi di vulcani che ogni tanto fumano. Ci sono due stagioni, una umida e una secca, e tutte le terre emerse sono unite in un unico grande continente, la Pangea. Qui, circa 230 milioni di anni fa, i tuoi studiosi troveranno alcuni dei più antichi dinosauri conosciuti."],
["Cos’è un dinosauro?","Un rettile con le zampe dritte sotto il corpo, che corre bene e tiene la testa alta. Io corro su due zampe; altri dei miei parenti, col tempo, andranno su quattro e diventeranno enormi. Ma per ora siamo ancora piccoli e pochi."],
["Siete i padroni della valle?","Neanche per sogno. Ci sono rettili molto più grossi di me, come Saurosuchus, un cacciatore a quattro zampe che non è un dinosauro. Gli studiosi dicono che i dinosauri resteranno una parte secondaria della vita per almeno altri dieci milioni di anni. Poi cambierà tutto."],
["Chi è Herrerasaurus?","Il predatore più comune della valle: snello, su due zampe, con denti ricurvi e artigli, e lungo, secondo le stime, fino a sei metri. Lo vedo da lontano e scappo. Dove stia lui nell’albero di famiglia dei dinosauri, e dove stia io, gli studiosi lo discutono ancora."],
["Come fanno a sapere quanti anni ha questa valle?","Grazie ai vulcani. La cenere che ricade sul fiume diventa strati di roccia, e i tuoi studiosi la misurano: dicono circa 228 milioni di anni. Il fuoco che oggi mi spaventa diventerà il loro orologio."],
["Dove vado dopo?","Segui il fiume verso il bosco di conifere, dove cammina una mandria di Plateosaurus dal collo lungo: sono parenti dei giganti che verranno. Poi, dove la pianura diventa enorme, cerca Lunga: è così grande che non si perde nemmeno da lontano."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e che il fiume ti porti lontano. Se senti la terra tremare, di solito è un vulcano o un gigante: nel dubbio, corri. Io resto qui a guardare l’alba. Buona strada!"]
],
dn_lunga:[
["Chi sei e che fai?","Lunga, un Diplodocus, e passo le giornate a brucare e a camminare con il mio gruppo, sempre insieme. Mangiamo molto e ci muoviamo piano, perché il cibo va cercato su grandi distanze. Più che fare, io sono: è già un bel lavoro."],
["Dove siamo?","In una pianura che i tuoi chiameranno Morrison, nell’ovest dell’America, circa 150 milioni di anni fa. Ci sono fiumi, laghi che d’estate si seccano, boschetti di conifere e distese di felci, ma non un filo d’erba da prato. Si segue l’acqua, e le stagioni dicono dove andare."],
["Quanto sei lunga?","Circa ventiquattro metri, e la mia coda è fatta di circa ottanta ossa, lunga e sottile come una frusta. In compenso la testa è minuscola, con denti a matita. Come tenga il collo, orizzontale o alto, i tuoi studiosi ne discutono ancora, ma io non mi lamento."],
["Cosa mangi?","Felci, cicadee, aghi di conifera: tutto quello che arriva a portata di collo, e con questo collo arriva lontano. I denti servono a strappare le foglie, non a masticarle: il resto lo fa la pancia."],
["Chi sono i tuoi vicini?","C’è Allosaurus, un grande predatore di otto-dodici metri, con denti seghettati: ogni tanto ci passa vicino, e noi stiamo in gruppo. Se cacci in compagnia, gli studiosi lo discutono: in una cava dello Utah ne hanno trovati almeno quarantaquattro insieme. Io preferisco non farmi trovare in cave."],
["E Stegosaurus?","Un bonaccione con placche sul dorso e quattro punte sulla coda, lunghe da sessanta a novanta centimetri. A cosa servano le placche, esibirsi o regolare il calore, non lo so nemmeno io. Pensa: il T. rex vivrà più vicino a te che a lui, di circa ottanta milioni di anni."],
["Dove vado dopo?","Verso la laguna, dove il mare è basso e caldo: segui il vento salato. Lì c’è Piuma, piccola, con ali e denti insieme: sembra un uccello ma è un animale tutto suo. Non farti ingannare dalle dimensioni."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e guarda dove metti i piedi: io guardo dall’alto, ma non sempre ti vedo. Se senti la terra tremare, sono io che saluto. Buona strada!"]
],
dn_piuma:[
["Chi sei e che fai?","Piuma: circa mezzo metro e un chilo di peso. Salto fra i rami, corro sulle rocce e cerco insetti e piccole prede. I tuoi studiosi mi chiameranno Archaeopteryx, \"antica ala\"."],
["Dove siamo?","Sulle lagune che un giorno saranno la Baviera, in Germania, circa 150 milioni di anni fa. L’acqua è calda e quasi ferma, e sul fondo il fango è finissimo: quello che vi cade si conserva per sempre, anche una penna."],
["Sei un uccello o un dinosauro?","Un po’ l’uno e un po’ l’altro: ho penne sulle ali e sulla coda, ma anche denti, artigli sulle dita e una lunga coda ossuta. I tuoi studiosi dicono che gli uccelli sono dinosauri, e che io sono molto vicina all’inizio di quella strada. Dove io stia esattamente, ne discutono ancora."],
["Sai volare?","Sbatto le ali, salto fra i rami, plano; quanto bene io voli davvero, gli studiosi lo discutono ancora. Per me basta arrivare dall’altra parte della roccia senza bagnarmi."],
["Di che colore sei?","Scura. Una penna trovata nel fango, la prima di tutte, nel 1861, è stata studiata al microscopio: secondo i tuoi studiosi era nera opaca, senza riflessi. Poco dopo fu trovato anche uno scheletro: fra i primi a notarlo ci fu Darwin, che ne parlò nel suo libro."],
["Chi vive con te?","Compsognathus, un piccolo dinosauro predatore di poco più di un metro che corre sulle isole; e sopra di noi, gli pterosauri, rettili volanti che non sono dinosauri. Io sono più piccola di tutti, ma almeno ho un posto sul ramo."],
["Dove vado dopo?","A est e a sud, dove i laghi si riscaldano e le foreste si riempiono di felci: lì c’è Pollice, grosso e riflessivo, con una punta sul pollice. Dì che ti manda Piuma e non fargli fretta: lui pensa piano."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e che il vento ti sia amico. Se una penna cade sul sentiero, non è un caso: tienila. Buona strada!"]
],
dn_pollice:[
["Chi sei e che fai?","Pollice, un Iguanodon: da sei a undici metri di lunghezza e circa cinque tonnellate, secondo i tuoi studiosi. Sono uno dei primi dinosauri che gli esseri umani scopriranno: nel 1822 una donna, Mary Ann Mantell, troverà dei miei denti per strada. Mi sembra una buona fama."],
["Dove siamo?","In una foresta di felci e conifere di quella che un giorno sarà l’Europa, circa 125 milioni di anni fa. Il clima è caldo, ci sono fiumi e paludi, e fra le felci spuntano piccoli fiori: dicono che siano fra i più antichi del mondo."],
["Perché hai quella punta sul pollice?","A cosa serva, nessuno lo sa: difendermi, forse, o raccogliere cibo. I primi che mi ricostruirono la misero sul naso, come un corno; poi lo scheletro completo mostrò che era un pollice. Meglio così: un corno sul naso mi darebbe fastidio."],
["Come cammini?","Su quattro zampe quando serve, su due quando corro o guardo lontano. Le mie mani hanno tre dita unite come uno zoccolo per camminare, il pollice a punta e un quinto dito che afferra. Praticamente una mano da quattro usi."],
["Che cos’è Bernissart?","Una miniera di carbone in Belgio dove, nel 1878, i minatori trovarono a trecentoventidue metri sotto terra, in una sacca di argilla, più di trenta scheletri di noi Iguanodon. Furono rimessi in piedi a Bruxelles nel 1882: per la prima volta si vedevano scheletri completi. Non so se essere fiero o commosso."],
["Chi vive lontano da qui?","A oriente, in quella che sarà la Cina, i laghi fra i vulcani sono pieni di parenti piumati: piccoli dinosauri con i filamenti e persino con quattro ali. Se ci vai, guarda in alto: si lanciano da un ramo all’altro."],
["Dove vado dopo?","Verso sud, oltre il mare: dove i fiumi diventano delta e l’acqua è calda e piena di pesci. Lì c’è Vela, grande e magra, con una cresta sulla schiena. Chiedile di mostrarti dove nuota."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e pensa a me quando vedi un pollice. Se trovi un’impronta grossa nel fango, non è mia: io cammino leggero. Buona strada!"]
],
dn_vela:[
["Chi sei e che fai?","Vela, uno Spinosaurus: oltre quattordici metri, secondo molte stime. Pesco in acqua e sulla riva, e il mio posto preferito è il bordo dei canali. I miei primi resti, trovati in Egitto, andarono distrutti durante una guerra: per decenni di me restarono solo disegni. Poi dal Marocco sono usciti altri resti, e la mia storia è ricominciata."],
["Dove siamo?","Su un grande delta, circa 95-100 milioni di anni fa, nell’attuale Marocco: canali e lagune, rive coperte di boschi simili a mangrovie e un cielo pieno di pterosauri. Qui i grandi predatori sono più numerosi dei grandi erbivori: i tuoi studiosi dicono che nessun posto di oggi è così."],
["A cosa serve la vela?","Nessuno lo sa: forse a farsi riconoscere, forse a far scena, forse a regolare il calore. È un fascio di lunghe punte ossee, probabilmente coperte di pelle, alto fino a quasi due metri. Io dico che mi dà un’aria elegante."],
["Cosa mangi?","Pesce, soprattutto. Il mio muso è lungo e stretto come quello di un coccodrillo, con denti conici perfetti per afferrare pesci scivolosi: celacanti, pesci polmonati, anche pesci enormi. Con un muso così, non servono posate."],
["Nuoti davvero?","La mia coda è alta e piatta come una pagaia: lo hanno scoperto nel 2020, ed è la prima volta che si trova una coda così in un dinosauro. Molti pensano che nuotassi davvero, altri che stessi soprattutto in acqua bassa. Quanto fossi acquatica, gli studiosi lo discutono ancora."],
["Sei la più grande?","Fra i predatori sono una delle più lunghe, ma il mio vicino Carcharodontosaurus, \"dai denti di squalo\", è un cacciatore di terra di circa dodici metri. Più a sud, in Patagonia, vivono Giganotosaurus e Argentinosaurus: un predatore enorme e uno dei più grandi erbivori mai esistiti. Siamo tutti giganti, qui."],
["Dove vado dopo?","A est e a nord, oltre il mare e i deserti: nelle dune della Mongolia, circa venti milioni di anni più tardi, c’è Falce, piccola e veloce, con un artiglio sul piede. Non farti ingannare: è molto più simpatica di quel che sembra."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e che l’acqua ti sia lieve. Se vedi una vela spuntare dai canali, saluta con la mano: è un modo gentile per dire \"ci sono\". Buona strada!"]
],
dn_falce:[
["Chi sei e che fai?","Falce, un Velociraptor: circa un metro e ottanta e venti chili, la taglia di un tacchino, non di un cavallo. Tanti si aspettano un mostro, ma sono piccola e veloce. Caccio piccoli animali, e quello che mi capita."],
["Dove siamo?","Nel Gobi, in Mongolia, circa 75 milioni di anni fa: un mare di dune rosse con rare oasi e corsi d’acqua che vanno e vengono. Le tempeste di sabbia qui sono violente e a volte seppelliscono tutto in un attimo. È per questo che le nostre ossa si conservano così bene."],
["Hai le piume?","Sì. Su un avambraccio di uno di noi, nel 2007, i tuoi studiosi hanno trovato i punti dove le penne si attaccavano all’osso. Non servono per volare: forse per esibirci, per coprire le uova o per scaldarci. I colori, nessuno li conosce."],
["A cosa serve l’artiglio a falce?","Sta sul secondo dito del piede e lo tengo sollevato per non consumarlo. Come lo usi, gli studiosi lo discutono: in un fossile è conficcato nel collo di una preda, forse per tenerla ferma più che per tagliarla. Io ci cammino sopra con cura."],
["Chi sono i due che furono sepolti insieme?","Nel 1971 una spedizione trovò uno di noi e un Protoceratops intrecciati nella sabbia: l’artiglio di Velociraptor sul collo, e il Protoceratops che stringeva il braccio. Gli studiosi pensano che una duna crollata li abbia coperti all’improvviso. Non è una bella storia, ma è vera."],
["Con chi vivi?","Con Protoceratops, grandi come pecore, con il becco e un piccolo collare osseo; con gli oviraptoridi che covano i nidi, e con piccoli mammiferi. A est, qualche milione di anni dopo di me, ci sono rive con boschi e Therizinosaurus, dalle mani con artigli lunghissimi."],
["Dove vado dopo?","Verso ovest, attraverso il mare, fino a una costa dove i dinosauri fanno i nidi in colonia, e dopo ancora fino a una pianura umida dove il sole tramonta. Lì c’è Corno, con tre corni e un collare: è l’ultima della nostra lunga giornata. Lungo la strada non disturbare i nidi."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e che la sabbia ti sia leggera. Se vedi una duna sollevarsi, non fermarti a guardare: scappa, poi guardi. Buona strada!"]
],
dn_corno:[
["Chi sei e che fai?","Corno, un Triceratops: otto-nove metri di lunghezza, sei-otto tonnellate e una testa che sembra uno scudo. Qui siamo fra i più numerosi: i tuoi studiosi raccontano che è difficile camminare nelle nostre rocce senza imbattersi in un nostro osso. Mi piace saperlo: vuol dire che non siamo passati inosservati."],
["Dove siamo?","In una pianura umida fra fiumi e boschi, vicino a un mare interno, circa 68-66 milioni di anni fa. Crescono conifere, ginkgo, cicadee e alberi con i fiori; il clima è caldo e le sere sono lunghe e rosa. È un buon posto per vivere."],
["A cosa servono corni e collare?","A difendermi, certo, ma gli studiosi pensano anche a esibirsi e a riconoscerci fra noi: il collare cresce molto con l’età, e un adulto fa un’altra figura. Da giovane avevo già i corni, ma più corti. Mi piace pensare che il collare sia un biglietto da visita."],
["Chi è il vicino grande?","Tyrannosaurus rex, il predatore più grande della valle: circa dodici metri e il morso più potente fra gli animali terrestri conosciuti. Sulle nostre ossa i tuoi studiosi hanno trovato i segni dei suoi denti, in qualche caso guariti: segno che qualcuno è sopravvissuto. Io non lo cerco, e lui non sempre cerca me."],
["Come finisce questa giornata?","Circa 66 milioni di anni fa un asteroide largo circa dieci chilometri colpirà la penisola dello Yucatán, nell’attuale Messico. I tuoi studiosi dicono che polvere, incendi e oscurità durarono anni, e che circa tre quarti delle specie scomparvero: i dinosauri che non erano uccelli, gli pterosauri, i grandi rettili marini. Io, oggi, vedo soltanto il cielo di una sera."],
["Chi sopravvive?","Gli uccelli, discendenti dei dinosauri piumati: piccoli, di terra, che mangiavano semi e insetti. E poi i coccodrilli, le tartarughe e i piccoli mammiferi. Quando guardi un uccello, Pierpaolo, guardi un dinosauro."],
["Dove vado dopo?","Dove il sole tocca il bosco: fra due tronchi altissimi c’è una radura con un nido a terra. Attraversala quando la luce è più forte. Oltre c’è un altro mondo e un altro tempo: non avere paura, la luce passa comunque."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se vedi un uccello sul ramo, salutalo da parte mia. Io resto qui a guardare il cielo finire il giorno. Buon viaggio!"]
]
};
Object.assign(TOPX,TOPX_DN);
})();
