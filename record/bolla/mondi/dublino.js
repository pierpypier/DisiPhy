/* ---------- DUBLINO · Dal Phoenix Park alla Connolly Station (Phoenix Park, Kilmainham Gaol e Guinness, Christ Church e Dublin Castle, Temple Bar e Ha'penny Bridge, Trinity College, Grafton Street e St Stephen's Green, Merrion Square, O'Connell Street, Docklands e pub, Connolly Station) ---------- */
/* Un'intera giornata da sinistra a destra: alba nel Phoenix Park fra i daini, mattina a Kilmainham Gaol e alla Guinness Storehouse,
   tarda mattina alla Christ Church e al Dublin Castle, mezzogiorno a Temple Bar e sull'Ha'penny Bridge, primo pomeriggio al Trinity College,
   pomeriggio (con un po' di pioggia, com'è giusto a Dublino) su Grafton Street e a St Stephen's Green, ora dorata a Merrion Square con l'arcobaleno,
   tramonto in O'Connell Street, sera fra Custom House, Famine Memorial, Samuel Beckett Bridge e un pub con la musica, notte alla Connolly Station.
   In fondo al binario del DART c'è il varco.
   Tutti gli oggetti sono definiti QUI (nessun nuovo blocco in elementi.js): il mondo riusa solo da Madrid fin, bal, arco, mat, cupo, col, pers, gente (PR._md)
   e da Roma ln e gatto (PR._rm); cielo, luce e terreno sono suoi. Gli id degli NPC iniziano per "db_".
   Il tono per i temi dolorosi (Grande Carestia, esecuzioni del 1916, processo a Wilde) è sempre sobrio e rispettoso. */
(function(){
const GT=372,W1=24400;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln,gatto}=PR._rm;
const {fin,bal,arco,mat,cupo,col,pers,gente}=PR._md;
const md=(i,n)=>((i%n)+n)%n;
const LIT='rgb(255,226,150)';
const IR='#1c1e22';
const Z=[0,2300,4700,7000,9400,11900,14700,17000,19300,21900,W1+400];   /* inizio di ognuna delle 10 zone */
const zn=xs=>{let z=1;while(z<10&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
/* luce di Dublino: [posizione nel mondo, buio da 0 (giorno) a 1 (notte)] */
const NF=[[0,.12],[1300,0],[14500,0],[15600,.06],[16900,.26],[18000,.5],[19000,.64],[20200,.78],[21500,.9],[22600,1]];
const nf=wx=>{if(wx<=NF[0][0])return NF[0][1];for(let i=1;i<NF.length;i++)if(wx<=NF[i][0]){const a=NF[i-1],b=NF[i];return a[1]+(b[1]-a[1])*(wx-a[0])/(b[0]-a[0])}return 1};
const DB=f=>(g,x,y,t,a)=>{A.setDK(nf(x+AVCAM));f(g,x,y,t,a,A.getDK())};
const lit=(k,i)=>k>.3&&hr(i)>.35;
const RAIN=xs=>cl((xs-10900)/500,0,1)*cl((13100-xs)/500,0,1);   /* la pioggerella del pomeriggio */
let TT=0;
/* ---- cielo: alba rosata, mattina chiara con nuvole, pomeriggio dorato, tramonto rosso-arancio, sera cobalto, notte ---- */
const SKY=[[0,['#9aa4c4','#f2b8b0','#ffd9b8']],[1300,['#6aa0d8','#bcd6ea','#f4ecd8']],[2300,['#5a9ae0','#a8cce8','#eaf0f0']],[7000,['#4a90dc','#9cc8ea','#e8f0f2']],[9400,['#5c94d4','#b0cce4','#f2eede']],[11900,['#5088cc','#a8c4e0','#f4e8cc']],[14700,['#5a82c4','#e4c496','#ffd292']],[16300,['#7a6aa8','#f0a070','#ffc080']],[17300,['#6a4a98','#e8604a','#ffa050']],[18300,['#3a3a88','#b0486a','#f08a58']],[19300,['#1a2c78','#3a4a98','#8a5a8a']],[20500,['#0e2260','#1c3a8a','#4a5a9a']],[21900,['#0a1a50','#14296a','#2a3a7a']],[24800,['#080e34','#101c54','#26306a']],[99999,['#080e34','#101c54','#26306a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Dublino, dall’alba alla notte. Parti dal Phoenix Park, dove i daini pascolano a due passi dalla città, e scendi verso la vecchia prigione di Kilmainham e la fabbrica della Guinness. A metà mattina ci sono la cattedrale dei Vichinghi e il Castello; a mezzogiorno Temple Bar, con le sue viuzze acciottolate e il ponte di ferro dell’Ha’penny. Il pomeriggio è tutto per il Trinity College e il suo libro dei Vangeli, per Grafton Street e i suoi musicisti, per le porte colorate di Merrion Square e per Oscar Wilde sdraiato sul suo sasso. Al tramonto la Spire punge il cielo, la sera il fiume si accende e in un pub parte la musica, e a notte la stazione Connolly ti aspetta con i suoi treni. Se piove, tranquillo: a Dublino passa sempre in fretta. E i dublinesi di ogni epoca ti vengono incontro.";
const LKTXT=[
"Il Phoenix Park: 707 ettari di prati, alberi e viali, uno dei più grandi parchi urbani d’Europa. Nasce nel 1662 come riserva di caccia del viceré, il duca di Ormond. All’alba, con la nebbiolina che sale dall’erba, si vedono i daini: discendono da quelli portati qui nel Seicento.",
"Il Wellington Monument: un obelisco di 62 metri, il più alto d’Europa, progettato da Robert Smirke e finito nel 1861 per onorare il duca di Wellington, nato a Dublino. Si dice che i fondi finirono prima di poterlo alzare ancora.",
"La Papal Cross: una grande croce bianca alta circa 35 metri, eretta per la messa di papa Giovanni Paolo II del 29 settembre 1979. Il prato qui intorno si riempì di oltre un milione di persone. Oggi ci passano i ciclisti e i signori con il cane.",
"L’Áras an Uachtaráin: una villa bianca con il portico a colonne, costruita nel 1754. Per due secoli fu la residenza del Lord Luogotenente britannico; oggi vive qui il Presidente d’Irlanda. In irlandese il nome significa “la dimora del Presidente”.",
"Il Kilmainham Gaol: la prigione fu aperta nel 1796 e chiusa nel 1924. Ci furono rinchiusi patrioti di ogni generazione, da Robert Emmet nel 1803 a Charles Stewart Parnell, fino ai capi della rivolta del 1916. Le pareti di granito grigio e le piccole finestre inferriate raccontano da sole la sua storia.",
"Il cortile delle esecuzioni: nello Stonebreakers’ Yard, fra il 3 e il 12 maggio 1916, furono fucilati quattordici capi della rivolta di Pasqua; sette di loro avevano firmato la Proclamazione. La notte prima, nella cappella della prigione, Joseph Plunkett sposò Grace Gifford. Un luogo di silenzio.",
"La Guinness Storehouse: sette piani costruiti attorno a un atrio a forma di pinta gigante, nell’antico impianto di fermentazione della fabbrica. È aperta dal 2000. In cima c’è il Gravity Bar, a circa 46 metri, con una vista a 360 gradi su tutta Dublino.",
"Il cancello di St James’s Gate: qui, il 31 dicembre 1759, Arthur Guinness firmò un affitto di 9.000 anni per 45 sterline l’anno. La birra nera esce da qui da oltre due secoli. Il simbolo del marchio è l’arpa, ispirata all’antica arpa gaelica che si trova al Trinity College.",
"La Christ Church Cathedral: fondata intorno al 1028 dal re vichingo di Dublino, Sitriuc, e dal vescovo Dúnán. Quasi tutto ciò che vedi è dell’Ottocento, restaurato fra il 1871 e il 1878 con i soldi di Henry Roe, un distillatore di whiskey. Nel 1742 il suo coro cantò in anteprima il Messiah di Handel, in Fishamble Street.",
"Nella cripta di Christ Church, dietro un vetro, ci sono un gatto e un topo mummificati: si racconta che il gatto inseguì il topo dentro la canna di un organo e rimasero incastrati. Anche Joyce li cita. In cattedrale c’è pure il monumento di Strongbow, il condottiero normanno che nel 1170 prese Dublino.",
"Il Dublin Castle: iniziato nel 1204 per ordine di re Giovanni, fu per secoli il centro del potere inglese in Irlanda. Della fortezza medievale resta la Record Tower, del 1228-1230 circa. Il 16 gennaio 1922 il castello fu consegnato al governo provvisorio guidato da Michael Collins.",
"Il giardino di Dubh Linn: qui il fiume Poddle formava un “dubh linn”, una pozza nera, accanto alla fortezza, e da quel nome nasce Dublino. Oggi è un prato con un disegno di intrecci celtici, accanto alla Chapel Royal e alla Chester Beatty Library, che custodisce manoscritti e papiri rarissimi.",
"Temple Bar: un reticolo di viuzze acciottolate del Settecento a sud del fiume. Il nome richiama la famiglia Temple, che nel Seicento ebbe qui casa e giardini. Negli anni Ottanta il quartiere era destinato a diventare una stazione di autobus: affittato a prezzi bassissimi ad artisti e botteghe, fu salvato dalle proteste, ed è oggi il quartiere culturale della città.",
"Meeting House Square: la piazzetta dove il sabato c’è il mercato e d’estate si vedono i film all’aperto. Il nome viene dal vicino Meeting House dei Quaccheri. Qui, fra bancarelle e lucine, si respira l’aria del Temple Bar più vero.",
"L’Ha’penny Bridge: il ponte pedonale di ferro bianco, inaugurato nel maggio 1816. Si chiamava Wellington Bridge e per attraversarlo si pagava mezzo penny, un “ha’penny”, fino al 1919. Il ferro fu fuso a Coalbrookdale, nello Shropshire, e montato a Dublino.",
"Il Liffey: il fiume che divide la città in Northside e Southside. In irlandese si chiama Abhainn na Life, e James Joyce ne fece un personaggio, Anna Livia Plurabelle. Sui suoi muraglioni si posano i gabbiani, e nelle giornate limpide passano i cigni.",
"Il Trinity College: fondato nel 1592 da Elisabetta I, è la più antica università d’Irlanda. Si entra dal portone di pietra di College Green: dentro c’è Front Square, con il selciato di granito e gli edifici del Settecento. Qui hanno studiato Jonathan Swift, Oscar Wilde, Bram Stoker e Samuel Beckett.",
"Il Campanile di Trinity, in mezzo a Front Square, fu costruito a metà Ottocento. Fra gli studenti corre una superstizione: chi ci passa sotto mentre suonano le campane non supererà gli esami. Per questo, dicono, qualcuno ci gira intorno.",
"La Old Library: iniziata nel 1712. La Long Room, la lunga sala con il soffitto a botte di legno, contiene circa 200.000 dei libri più antichi. Sotto si espone il Book of Kells, i quattro Vangeli decorati da monaci intorno all’anno 800; in sala c’è l’antica arpa detta “di Brian Boru”, molto più recente di lui.",
"Sfera con sfera: una grande sfera di bronzo dorato, opera dell’italiano Arnaldo Pomodoro, davanti alla Berkeley Library. La superficie lucida è squarciata e lascia vedere un’altra sfera, con gli ingranaggi e le forme dentro: un mondo dentro un altro, come la tua bolla.",
"Grafton Street: la via dello shopping e dei musicisti di strada, intitolata a Charles FitzRoy, secondo duca di Grafton. È pedonale in modo permanente dal 1982. I busker hanno un permesso e possono suonare un’ora per volta; da qui sono passati, da ragazzi, nomi come Glen Hansard e Damien Rice.",
"Molly Malone: la statua in bronzo di una giovane venditrice di cozze e vongole con il suo carretto, inaugurata nel 1988 per il millennio di Dublino e spostata nel 2014 in Suffolk Street per i lavori del tram. I dublinesi la chiamano per scherzo “the Tart with the Cart”. La canzone è l’inno non ufficiale della città, ma non è mai stato provato che Molly sia esistita.",
"Il Bewley’s Oriental Café: aperto nel 1927 su Grafton Street, con le grandi vetrate colorate di Harry Clarke e i salottini in stile orientale. Si beve il tè e si mangiano i famosi bun, i panini dolci con l’uvetta o la glassa.",
"L’Arco dei Fucilieri: l’ingresso di St Stephen’s Green dalla parte di Grafton Street, un arco di granito che ricorda i soldati del Royal Dublin Fusiliers morti nella seconda guerra boera. Il parco fu riaperto al pubblico il 27 luglio 1880 da Lord Ardilaun, un Guinness, che pagò il progetto.",
"St Stephen’s Green: 22 acri, circa 9 ettari, di aiuole, ponticelli, statue e un laghetto con le anatre. Durante l’insurrezione del 1916 vi si trincerarono i volontari dell’Irish Citizen Army guidati da Michael Mallin e Constance Markievicz; si racconta che il fuoco fu sospeso per far nutrire le anatre.",
"Le porte georgiane: Dublino ha moltissime case a schiera del Settecento in mattoni rossi, e ognuna ha la porta di un colore diverso, con la lunetta ad arco sopra e il battente di ottone. Si racconta che i proprietari le dipinsero così per orgoglio, per ribellarsi all’uniformità, o per riconoscere casa dopo qualche pinta: la verità nessuno la sa.",
"Merrion Square: la più elegante delle piazze georgiane, tracciata nel 1762. Al numero 1 abitò da ragazzo Oscar Wilde, e nel parco di fronte c’è la sua statua, in pietre di vari colori: Wilde mezzo sdraiato su un masso di quarzo, con un sorriso malizioso. Al 82 visse il poeta Yeats; al 58, Daniel O’Connell.",
"Leinster House: la costruì il conte di Kildare, poi duca di Leinster; fu la più grande residenza aristocratica di Dublino dopo il Castello. Oggi è la sede del Parlamento irlandese, l’Oireachtas. Nelle vicinanze, la Galleria Nazionale e il Museo Nazionale hanno l’ingresso gratuito.",
"The Spire, “il monumento della luce”: un ago d’acciaio inox alto 120 metri, completato il 21 gennaio 2003 su progetto di Ian Ritchie. Misura 3 metri alla base e 15 centimetri in cima; di notte la punta si illumina. Ha preso il posto della Colonna di Nelson, fatta saltare nel 1966.",
"Il GPO, l’ufficio postale centrale: progettato da Francis Johnston e aperto il 6 gennaio 1818, con il portico di sei colonne ioniche. Nella Pasqua del 1916 fu il quartier generale dei ribelli: il 24 aprile Patrick Pearse lesse la Proclamazione della Repubblica irlandese. Il fuoco lasciò in piedi solo la facciata; fu ricostruito nel 1929 ed è ancora un ufficio postale.",
"Il monumento a Daniel O’Connell, “il Liberatore”, che nel 1829 ottenne l’emancipazione dei cattolici. In fondo alla via, vicino al ponte, la statua sta sopra un basamento con quattro figure alate; si dice che qualcuna porti ancora i segni dei proiettili del 1916.",
"La Custom House: capolavoro neoclassico di James Gandon, costruito fra il 1781 e il 1791 sulla riva nord. Nel 1921 l’IRA le diede fuoco: la cupola crollò. Fu ricostruita, e oggi ospita ministeri. Sulle facciate, le teste scolpite di Edward Smyth rappresentano i fiumi d’Irlanda.",
"Il Famine Memorial: figure di bronzo a grandezza naturale di Rowan Gillespie, del 1997, sul molo da cui partivano le navi degli emigranti. Ricordano la Grande Carestia del 1845-1851: uomini, donne e bambini magrissimi, in cammino verso le navi. Un posto da attraversare in silenzio.",
"Il Samuel Beckett Bridge: un ponte a forma di arpa, disegnato da Santiago Calatrava, lungo circa 120 metri, che può ruotare di 90 gradi per lasciar passare le barche. Le corde bianche richiamano l’arpa, simbolo d’Irlanda. Aperto nel 2009, prende il nome dallo scrittore dublinese.",
"Il pub: il cuore di Dublino. Insegna dorata, vetrate scure, porta di legno; dentro il bancone di mogano, i “snug”, le cabine appartate, e il fuoco. Il Brazen Head, vicino al fiume, sostiene di esistere dal 1198: se è vero, è il più vecchio d’Irlanda. La sera, in molti pub c’è una “session” di musica tradizionale.",
"La Connolly Station: aperta il 29 novembre 1844 come Dublin Station, poi Amiens Street, e dal 1966 intitolata a James Connolly, a cinquant’anni dalla rivolta di Pasqua. L’edificio del 1846, in granito, ha la facciata in stile italiano con una torretta al centro.",
"Il DART: i treni della costa, in servizio dal 1984. Il nome sta per Dublin Area Rapid Transit. Corrono lungo la baia, da Howth a Greystones; nelle giornate limpide il finestrino regala il mare. Di notte le carrozze vuote sembrano lanterne.",
"In fondo al binario, la luce di un altro mondo ti chiama."
];
const NAME={
db_padraig:"Pádraig, il guardiaparco del Phoenix Park",
db_guinness:"Arthur Guinness",
db_mick:"Mick, il tassista",
db_aoife:"Aoife, studentessa di Trinity",
db_cian:"Cian, il musicista di strada",
db_wilde:"Oscar Wilde",
db_declan:"Declan, il barman",
db_orla:"Orla, la capotreno del DART"
};
const GREET={
db_padraig:"Dia dhuit, e buongiorno! Già in piedi con le allodole? Sono Pádraig, guardiaparco: qui l’alba è la parte migliore del lavoro. E tu sei Pierpaolo, vero? Le notizie qui corrono più in fretta di un daino. Vieni, ti faccio vedere il parco prima che si svegli la città.",
db_guinness:"Ah, un visitatore! Buongiorno a voi, signore. Sono Arthur Guinness, birraio: due anni di trattative e un affitto di novemila anni per questo cancello, e non c’è giorno in cui non me ne compiaccia. Voi dovete essere Pierpaolo; Dublino non tiene segreti. Entrate, entrate: il tempo qui è solo un’altra misura del lievito.",
db_mick:"Ehi, giovanotto! Taxi? No? Tranquillo, è già la seconda tazza di tè e non ho fretta. Sono Mick, tassista da trent’anni. Tu sei Pierpaolo, giusto? Ah, qui lo si sa tutto: a Dublino un taxi sa più cose di un giornale. Siediti, sali, chiedi pure.",
db_aoife:"Ciao! Scusa, ti ho quasi investito con lo zaino. Sono Aoife, ultimo anno a Trinity, e tu sei Pierpaolo, no? Ho una lezione tra poco ma, ah, per un viaggiatore c’è sempre tempo: la biblioteca può aspettare dieci minuti, i libri sono lì da secoli.",
db_cian:"Alla grande! Pausa tra un pezzo e l’altro. Sono Cian, suono qui da anni, e il mio permesso dice che ho ancora quaranta minuti. Tu sei Pierpaolo, vero? Fermati: la musica è gratis, ma il tuo orecchio è gradito.",
db_wilde:"Ah, un giovane con il cappotto troppo semplice e lo sguardo troppo curioso: perfetto! Sono Oscar Wilde, e voi dovete essere Pierpaolo. Dicono che quando sono a Dublino mi trovino sdraiato su un sasso: è vero, ma ogni tanto mi alzo per conversare. Siedete, mio caro: la conversazione è la mia unica professione seria.",
db_declan:"Céad míle fáilte, centomila benvenuti! Sono Declan, e questo è il mio pub: qui nessuno entra da straniero ed esce da straniero. Tu sei Pierpaolo, vero? Siediti vicino al fuoco, che fuori tira vento. Una pinta di acqua frizzante o un tè? Per ora, offre la casa.",
db_orla:"Buonasera, e benvenuto alla stazione Connolly. Biglietto? No? Non importa: sei Pierpaolo, vero? Mi hanno avvisato che il treno speciale ti aspetta. Sono Orla, capotreno del DART: qui comando io, ma con il sorriso e con la radio."
};
/* ---- facciate: case a schiera georgiane, pub, negozi, palazzi di pietra, vetro, alberi ---- */
const BR=['#9a4a34','#8a3f2e','#a85a3c','#b0643e','#7e3a2c','#96503a'];
const DOOR=['#c8281e','#2a5aa8','#e8c030','#2a8a4a','#7a3a8a','#e8802a','#14110f','#e86a9a','#1aa5a5','#1f3a7a'];
function win(g,x,y,w,h,k,i){rect(g,'#f2eee4',x-2,y-2,w+4,h+4);rect(g,lit(k,i)?LIT:'#6a8aa6',x,y,w,h);rect(g,'#f2eee4',x+w/2-.7,y,1.4,h);rect(g,'#f2eee4',x,y+h/2-.7,w,1.3);if(h>22)rect(g,'#f2eee4',x,y+h*.78-.6,w,1.2);rect(g,'rgba(255,255,255,.16)',x,y,w*.5,h*.3)}
/* case a schiera: blocco largo w con più portoni colorati e lunette */
function ter(g,x,w,h,i,k,o){o=o||{};const gt=GT,top=gt-h,hw=o.hw||56,n=Math.max(2,Math.round(w/hw)),Wd=w/n,fl=Math.max(2,Math.floor((h-54)/36)+1),walls=o.walls||BR;
 for(let j=0;j<n;j++){const x0=x+j*Wd,wall=walls[md(i*3+j,walls.length)],dc=DOOR[md(i*5+j*3,10)];
  mat(g,wall,x0,top,Wd+.5,h,i*7+j);rect(g,'rgba(255,255,255,.1)',x0,top,3,h);rect(g,'rgba(0,0,0,.18)',x0+Wd-3,top,3,h);
  for(let f=0;f<fl;f++){const wh=f==1?28:f<1?24:f<3?22:16,wy=gt-48-f*36+(24-wh);
   if(f>0||o.shop){win(g,x0+Wd*.14,wy,Wd*.28,wh,k,i*13+j*3+f);win(g,x0+Wd*.58,wy,Wd*.28,wh,k,i*13+j*3+f+50)}
   else win(g,x0+Wd*.58,wy,Wd*.28,wh,k,i*13+j*3+9)}
  if(!o.shop){rect(g,'#f2eee4',x0+Wd*.12-1.5,gt-42,Wd*.3+3,40);rect(g,dc,x0+Wd*.12,gt-38,Wd*.3,36);rect(g,'rgba(0,0,0,.16)',x0+Wd*.12+Wd*.15,gt-38,1,36);
   g.fillStyle=tn('#fff6dc');g.beginPath();g.arc(x0+Wd*.27,gt-38,Wd*.15,Math.PI,0);g.fill();rect(g,'#f2eee4',x0+Wd*.27-.5,gt-38-Wd*.15,1,Wd*.15);rect(g,'#f2eee4',x0+Wd*.12,gt-39.5,Wd*.3,1.2);
   dot(g,'#e0b840',x0+Wd*.27+3,gt-20,1.6);rect(g,'#8c8c88',x0+Wd*.1,gt-3,Wd*.34,3);rect(g,'#7c7c78',x0+Wd*.06,gt-1,Wd*.42,1);
   rect(g,IR,x0+Wd*.5,gt-14,Wd*.46,1.3);for(let q=0;q<Wd*.12;q++)rect(g,IR,x0+Wd*.5+q*4,gt-14,1,10)}
  else{const sc=o.sc?o.sc[md(i+j,o.sc.length)]:'#1f3a2e';rect(g,sc,x0+2,gt-46,Wd-4,44);rect(g,k>.2?LIT:'#2a2e32',x0+7,gt-40,Wd-14,26);rect(g,'rgba(255,255,255,.2)',x0+7,gt-40,Wd-14,2);rect(g,'rgba(255,255,255,.13)',x0+Wd*.5,gt-40,1.2,26);rect(g,'#e0c060',x0+Wd*.25,gt-45,Wd*.5,1.6)}
  rect(g,'#d8d0bc',x0-1,top-4,Wd+2,5);rect(g,'rgba(0,0,0,.16)',x0-1,top+1,Wd+2,2);
  if(j%2==0){rect(g,'#7a3a2c',x0+Wd-6,top-24,12,22);rect(g,'#b05a30',x0+Wd-5,top-28,3,5);rect(g,'#b05a30',x0+Wd+1,top-28,3,5)}}
 rect(g,'rgba(0,0,0,.18)',x,gt-8,w,8)}
/* pub di Temple Bar: facciata dipinta, insegna dorata, vetrata calda, vasi di fiori e luci */
const PUBS=[['#c8281e','TRAD NIGHTLY'],['#1f5a3a','LIVE MUSIC'],['#14110f','OLD TAVERN'],['#2a3a6a','THE SNUG'],['#7a2a3a','SESSION']];
function pub(g,x,w,h,i,k){const gt=GT,top=gt-h,p=PUBS[md(i,5)];
 rect(g,['#e8d8b0','#d8c8a8','#b8503a','#c8b890'][md(i,4)],x,top,w,h-58);rect(g,'rgba(255,255,255,.12)',x,top,4,h-58);rect(g,'rgba(0,0,0,.14)',x+w-8,top,8,h-58);
 const n=Math.max(2,Math.floor(w/42));for(let f=0;f<Math.max(1,Math.floor((h-80)/36));f++)for(let q=0;q<n;q++)win(g,x+8+q*(w-34)/(n-1),top+10+f*36,14,22,k,i*11+f*5+q);
 rect(g,'#d8d0bc',x-2,top-4,w+4,5);
 rect(g,p[0],x,gt-62,w,56);rect(g,'rgba(255,255,255,.12)',x,gt-62,w,3);rect(g,'#e0c060',x+4,gt-60,w-8,1.4);rect(g,'#e0c060',x+4,gt-24,w-8,1.4);txt(g,p[1],x+w/2,gt-46,Math.min(9,w/9),'#e8c060');
 rect(g,k>.1?'rgba(255,196,110,.95)':'#6a5a42',x+6,gt-36,w*.45,26);rect(g,'rgba(0,0,0,.35)',x+6+w*.22,gt-36,1.4,26);rect(g,'#14110f',x+w*.62,gt-40,w*.26,38);rect(g,k>.1?'rgba(255,196,110,.8)':'#6a5a42',x+w*.62+3,gt-37,w*.26-6,18);
 [x+8,x+w-10].forEach((bx,q)=>{ln(g,IR,1.6,[bx,gt-58,bx,gt-50]);dot(g,['#e8408a','#f2c82a','#8a4ad0','#f4f0e6'][md(i+q,4)],bx-2,gt-48,3);dot(g,'#3a8a3a',bx+2,gt-48,3)});
 if(k>.1){glow(g,x+w*.3,gt-24,60,'255,190,100',.35*k);for(let q=0;q<7;q++)dot(g,['#ffd070','#ff9aa0','#a0e0ff'][q%3],x+4+q*(w-8)/6,gt-70+Math.abs(Math.sin(q*1.2+i))*5,1.8)}
 rect(g,'rgba(0,0,0,.2)',x,gt-6,w,6)}
/* palazzi di pietra grandi: Trinity, O'Connell Street */
function pal(g,x,w,h,i,k,wall,fl){const gt=GT,top=gt-h,n=Math.max(2,Math.floor(w/34));
 rect(g,wall,x,top,w,h);rect(g,'rgba(255,255,255,.14)',x,top,5,h);rect(g,'rgba(0,0,0,.14)',x+w-10,top,10,h);
 for(let f=0;f<fl;f++)for(let q=0;q<n;q++){const wx=x+10+q*(w-30)/(n-1),wy=gt-60-f*38,hh=f==0?30:26;rect(g,'#f2eee4',wx-2,wy-2,18,hh+4);rect(g,lit(k,i*9+f*3+q)?LIT:'#6a8aa6',wx,wy,14,hh);rect(g,'#f2eee4',wx+6.4,wy,1.4,hh);if(f==1)poly(g,'#f2eee4',[[wx-3,wy-2],[wx+7,wy-9],[wx+17,wy-2]])}
 rect(g,'#e8e0cc',x-3,top-5,w+6,7);rect(g,'rgba(0,0,0,.16)',x-3,top+1,w+6,2);rect(g,'rgba(0,0,0,.2)',x,gt-8,w,8);rect(g,'#c8c0aa',x,gt-12,w,4);
 const dn=Math.max(1,Math.floor(w/56));for(let q=0;q<dn;q++)arco(g,'#2a2e34',x+10+q*(w-20)/dn,gt-6,24,44)}
/* palazzi moderni di vetro e acciaio (Docklands) */
function glassb(g,x,w,h,i,k){const gt=GT,top=gt-h,c=['#5a7a96','#4a6a8a','#6a8aa6','#3a5a7a'][md(i,4)];
 rect(g,c,x,top,w,h);for(let r=0;r<h/13;r++)rect(g,lit(k,i*7+r)?LIT:'rgba(190,225,245,.5)',x+4,top+4+r*13,w-8,8);for(let q=0;q<=w/26;q++)rect(g,'#2a3a4a',x+4+q*26,top,2,h);
 rect(g,'rgba(255,255,255,.2)',x,top,6,h);rect(g,'#2a3a4a',x,top-4,w,5);rect(g,'rgba(0,0,0,.2)',x,gt-8,w,8);if(k>.2)glow(g,x+w/2,top+h/2,w*.7,'255,226,150',.12*k)}
/* alberi del parco */
function oak(g,x,y,s,t,pal){s=s||1;pal=pal||['#2f6a34','#3f7e3c','#58944a','#274f2c'];ln(g,'#5a4636',9*s,[x,y,x-2*s,y-30*s,x+2*s,y-62*s]);ln(g,'#5a4636',5*s,[x,y-44*s,x-26*s,y-74*s]);ln(g,'#5a4636',5*s,[x,y-48*s,x+28*s,y-80*s]);
 [[0,-112,60,36,pal[0]],[-40,-92,36,26,pal[3]],[42,-96,38,28,pal[1]],[2,-134,42,24,pal[2]],[-20,-118,30,20,pal[1]]].forEach(c=>{el(g,c[4],x+c[0]*s,y+c[1]*s,c[2]*s,c[3]*s);el(g,'rgba(255,255,255,.07)',x+(c[0]-c[2]*.2)*s,y+(c[1]-c[3]*.4)*s,c[2]*.5*s,c[3]*.4*s)})}
const beech=(g,x,y,s,t)=>oak(g,x,y,s,t,['#6a3a30','#7a4636','#8a5240','#582c28']);
const chest=(g,x,y,s,t)=>oak(g,x,y,s,t,['#3a7a38','#4a8e40','#70a84c','#2f6030']);
function pop(g,x,y,h){poly(g,'#2a5a30',[[x-h*.08,y],[x-h*.16,y-h*.5],[x,y-h],[x+h*.16,y-h*.5],[x+h*.08,y]]);rect(g,'rgba(255,255,255,.07)',x-h*.06,y-h*.85,h*.04,h*.7);rect(g,'#4a3a2a',x-1.5,y-4,3,4)}
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),r=hr(i*3);
 if(st==1){/* Phoenix Park: querce, faggi, pioppi; ogni tanto un cottage di mattoni */
  if(r>.12){[oak,beech,chest,oak][md(i,4)](g,x+w*.5,gt,1.05+hr(i)*.35,TT);return}
  ter(g,x+30,w-90,h-30,i,k,{hw:70});return}
 if(st==2){/* Kilmainham e Guinness: mattoni scuri, capannoni, case operaie */
  if(md(i,4)==0){mat(g,'#7a3a2c',x+10,gt-h-40,w-60,h+40,i);for(let q=0;q<5;q++)for(let r2=0;r2<(h+30)/26;r2++)rect(g,lit(k,i+q*3+r2)?LIT:'#4a6a8a',x+22+q*(w-100)/4,gt-h-28+r2*26,14,16);rect(g,'#2a2e34',x+4,gt-h-44,w-48,6);rect(g,'#8a8a8a',x+10,gt-8,w-60,8);return}
  ter(g,x+6,w-24,h,i,k,{walls:['#7a3a2c','#6a3326','#8a4a36','#5e2e24']});return}
 if(st==3){/* Christ Church e Castello: pietra grigia, case georgiane scure, qualche torretta */
  ter(g,x+4,w-20,h+10,i,k,{walls:['#a89f8c','#b4aa94','#968e7c','#bcb29a'],hw:62});if(md(i,3)==1)cupo(g,'#4a5a58',x+w*.5,gt-h-24,30,34);return}
 if(st==4){/* Temple Bar: pub dipinti, case colorate, luci */
  pub(g,x+4,w-24,h+20,i,k);return}
 if(st==5){/* Trinity: edifici di granito chiaro, castagni */
  if(r>.82){chest(g,x+w*.5,gt,1.2,TT);return}
  pal(g,x+6,w-20,h+10,i,k,['#cfc6b0','#c4bba6','#d6cdb8'][md(i,3)],2);return}
 if(st==6){/* Grafton Street: negozi con insegne, mattoni e pietra chiara */
  ter(g,x+4,w-20,h+20,i,k,{shop:1,sc:['#1f3a2e','#2a3a5a','#5a1f2a','#14110f','#3a2a4a'],walls:['#a85a3c','#d8ccb0','#9a4a34','#c8bca0','#b0643e']});return}
 if(st==7){/* Merrion Square: tre-quattro piani di mattoni rossi e porte colorate */
  if(r>.84){oak(g,x+w*.5,gt,1.25,TT);return}
  ter(g,x+2,w-12,h+36,i,k,{walls:['#9a4a34','#8a3f2e','#a85a3c','#96503a']});return}
 if(st==8){/* O'Connell Street: grandi palazzi di pietra */
  pal(g,x+4,w-18,h+34,i,k,['#d4ccb6','#c6bea8','#bcb6a4','#d8d0bc'][md(i,4)],3);return}
 if(st==9){/* Docklands: vetro e acciaio, magazzini di mattoni */
  if(md(i,3)==1){mat(g,'#8a5a3a',x+4,gt-h,w-40,h,i);for(let q=0;q<4;q++)arco(g,lit(k,i+q)?LIT:'#2a2a2e',x+14+q*(w-74)/3,gt-30,16,42);rect(g,'#3a2a22',x,gt-h-5,w-30,6);return}
  glassb(g,x+6,w-34,h+40+hr(i*5)*40,i,k);return}
 /* 10: stazione Connolly: mattoni, granito, pali della linea elettrica */
 if(md(i,4)==1){rect(g,'#3a3e44',x+w*.5,gt-170,3,170);rect(g,'#3a3e44',x+w*.5-26,gt-166,54,3);rect(g,'#3a3e44',x+w*.5-22,gt-154,46,2);return}
 ter(g,x+6,w-30,h,i,k,{walls:['#8a5a3a','#7a4a34','#9a6a46','#6a4430']})}

/* ---- strati di sfondo ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-19200)/2600,0,1);if(nt>0)for(let i=0;i<52;i++){const sx=hr(i*3.1)*480,sy=hr(i*7.7)*250;star(g,sx,sy,i%5?1.2:2,nt*(.5+.5*Math.sin(t*2+i)))}
 const u=cl(xs/17800,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*230;
 if(xs<18500){const wm=xs>14700?1:0;glow(g,sx,sy,110,xs>16000?'255,140,70':xs<1500?'255,190,170':'255,236,180',.5);dot(g,xs>16000?'#ffb060':xs<1500?'#ffd8c0':'#fff2c0',sx,sy,15)}
 const mu=cl((xs-19400)/2800,0,1);if(mu>0){const mx=60+mu*360,my=190-Math.sin(mu*Math.PI)*120;glow(g,mx,my,80,'210,225,255',.35);dot(g,'#eef0f8',mx,my,13);dot(g,'rgba(60,70,120,.25)',mx+4,my-2,11)}
 const cc=xs<1500?'rgba(250,200,204,.85)':xs<14700?'rgba(240,242,246,.9)':xs<18400?'rgba(255,170,140,.78)':'rgba(120,110,170,.45)';
 each(o-((t*5)%340)*.02,340,1,(x,i,r)=>{if(r>.32)return;nube(g,x,70+r*150,.8+r*1.4,cc)});
 if(xs<14000)each(o-((t*3)%420)*.02,420,5,(x,i,r)=>{if(r>.4)return;nube(g,x+30,120+r*100,1+r,'rgba(200,205,214,.55)')});
 const rn=RAIN(xs);if(rn>.01){g.fillStyle='rgba(84,94,112,'+rn*.34+')';g.fillRect(0,0,480,GT+4)}
 const gw=cl((xs-16000)/900,0,1)*cl((18400-xs)/900,0,1)*.24;if(gw>0){g.fillStyle='rgba(255,100,60,'+gw+')';g.fillRect(0,0,480,GT+4)}
 const dw=cl(1-xs/2000,0,1)*.2;if(dw>0){g.fillStyle='rgba(255,160,170,'+dw+')';g.fillRect(0,0,480,GT+4)}}
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const ridge=(wc,sp,c,pts)=>{const e=env(wc,sp);if(e<=0)return;g.globalAlpha=e;const x0=fx(wc);poly(g,dim(c),[[x0-300,hz]].concat(pts.map(q=>[x0+q[0],hz-q[1]]),[[x0+300,hz]]));g.globalAlpha=1};
 /* Dublin Mountains in lontananza */
 ridge(1300,4600,'#8a98bc',[[-300,0],[-220,40],[-130,70],[-40,52],[60,92],[160,64],[240,34],[300,0]]);
 ridge(16000,3600,'#8a98bc',[[-300,0],[-200,34],[-100,62],[0,46],[110,78],[210,40],[300,0]]);
 ridge(1300,4600,'#6a8a68',[[-300,0],[-200,22],[-90,40],[10,30],[120,52],[220,20],[300,0]]);
 /* Phoenix Park: bosco lontano */
 {const e=env(1100,3000);if(e>0){g.globalAlpha=e;for(let i=0;i<14;i++)el(g,dim('#3a6a3a'),fx(1100)-280+i*42,hz-8,28+hr(i)*14,16+hr(i+3)*16);g.globalAlpha=1}}
 /* la ciminiera della Guinness e i capannoni */
 {const e=env(3800,3000);if(e>0){g.globalAlpha=e;const x0=fx(3800);rect(g,dim('#8a4a38'),x0-4,hz-130,12,130);rect(g,dim('#6a3a2e'),x0-6,hz-134,16,6);for(let i=0;i<5;i++)rect(g,dim('#9a6a4a'),x0-200+i*80,hz-34-hr(i)*22,66,60);g.globalAlpha=1}}
 /* guglie e torri: Christ Church, castello, San Patrizio */
 {const e=env(5900,3200);if(e>0){g.globalAlpha=e;const x0=fx(5900);[[-150,28,70],[-40,22,92],[70,26,58],[160,20,80]].forEach((q,i)=>{rect(g,dim('#8a8678'),x0+q[0]-q[1]/2,hz-q[2],q[1],q[2]);poly(g,dim('#5a6a68'),[[x0+q[0]-q[1]/2-2,hz-q[2]],[x0+q[0],hz-q[2]-24],[x0+q[0]+q[1]/2+2,hz-q[2]]])});rect(g,dim('#9a9484'),x0+110,hz-56,50,56);for(let i=0;i<4;i++)rect(g,dim('#9a9484'),x0+110+i*13,hz-62,8,8);g.globalAlpha=1}}
 /* tetti georgiani e camini, ovunque in città */
 each(o,64,11,(x,i,r)=>{const e=Math.max(env(8600,4400),env(13300,5000),env(15800,3600),env(18000,3400));if(e<=0)return;g.globalAlpha=e;rect(g,dim(['#8a5a4a','#9a6a54','#7a4a3e','#a07a64'][md(i,4)]),x,hz-24-r*30,58,24+r*30);rect(g,dim('#6a3a30'),x+10,hz-34-r*30,6,12);rect(g,dim('#6a3a30'),x+36,hz-30-r*30,6,8);g.globalAlpha=1});
 /* la Spire in lontananza (tramonto) */
 {const e=env(18000,3400);if(e>0){g.globalAlpha=e;const x0=fx(18000)+120;poly(g,dim('#c8ccd4'),[[x0-3,hz],[x0,hz-170],[x0+3,hz]]);if(night>.3)glow(g,x0,hz-170,30,'255,240,200',.5*night);g.globalAlpha=1}}
 /* ciminiere di Poolbeg: due torri a strisce rosse e bianche */
 {const e=env(20700,4000);if(e>0){g.globalAlpha=e;const x0=fx(20700);[-60,60].forEach(d=>{for(let s=0;s<8;s++)rect(g,dim(s%2?'#f2eee8':'#c8281e'),x0+d-5+s*.4,hz-s*20-20,10-s*.8,20);if(night>.3)dot(g,'#ff3a3a',x0+d,hz-166,2.4*(1+Math.sin(t*3)*.4))});for(let i=0;i<6;i++)glassb(g,x0-250+i*70,44,50+hr(i)*70,i,night);g.globalAlpha=1}}
 /* gru del porto */
 {const e=env(19900,3000);if(e>0){g.globalAlpha=e;const x0=fx(19900);[-160,80].forEach(d=>{rect(g,dim('#d8a82a'),x0+d,hz-100,5,100);rect(g,dim('#d8a82a'),x0+d-30,hz-100,90,5);ln(g,dim('#9a7a1a'),1.4,[x0+d+2,hz-100,x0+d+50,hz-100,x0+d+50,hz-60])});g.globalAlpha=1}}
 /* Howth e la baia, a notte */
 {const e=env(23500,3200);if(e>0){g.globalAlpha=e;const x0=fx(23500);poly(g,dim('#4a5a7a'),[[x0+20,hz],[x0+90,hz-60],[x0+160,hz-86],[x0+240,hz-40],[x0+300,hz]]);for(let i=0;i<30;i++)dot(g,'rgba(255,220,140,'+(.4+.4*Math.sin(t*2+i))+')',x0-250+hr(i)*460,hz-4-hr(i+4)*16,1.2);g.globalAlpha=1}}
 /* arcobaleno dopo la pioggia */
 {const e=env(14900,2000);if(e>0){const x0=fx(14900),cs=['rgba(240,70,70,.5)','rgba(250,150,50,.5)','rgba(250,230,70,.5)','rgba(90,200,90,.5)','rgba(70,150,230,.5)','rgba(130,90,200,.5)'];g.globalAlpha=e;cs.forEach((c,i)=>{g.strokeStyle=c;g.lineWidth=5;g.beginPath();g.arc(x0,hz+110,200-i*5,Math.PI*1.12,Math.PI*1.88);g.stroke()});g.globalAlpha=1}}
 /* luci della città di notte */
 if(night>.4){g.fillStyle='rgba(255,215,130,'+night*.6+')';for(let i=0;i<46;i++)g.fillRect((i*83+Math.floor(o*3))%480,hz-4-hr(i*2)*38,2,2)}}
function layerRoofs(g,o,t){const cam=o/.2,xs=cam+240;A.setDK(nf(xs));const k=A.getDK();
 each(o,116,3,(x,i,r)=>{const wx=x+o/.2*.2+cam*0;const z=zn(cam+x+(240-x)*0+x*0);const zz=zn(xs+(x-240));
  const cols={1:'#3a6a3a',2:'#6a3a30',3:'#8a8272',4:'#a86a52',5:'#b8ae98',6:'#94503c',7:'#8a4a3a',8:'#b4ac98',9:'#6a8296',10:'#7a4a38'};
  const h=60+r*60,w=100+r*20;if(zz==1){[oak,beech,chest][md(i,3)](g,x+50,GT-30,.8+r*.3,t);return}
  rect(g,cols[zz],x,GT-30-h,w,h);rect(g,'rgba(0,0,0,.2)',x,GT-30-h,w,h);rect(g,'rgba(0,0,0,.25)',x,GT-34,w,4);
  if(zz!=9)for(let q=0;q<3;q++)rect(g,'#5a3a30',x+10+q*34,GT-30-h-12,8,12)});}
function layerBirds(g,o,t){const cam=o,xs=cam+240;A.setDK(nf(xs));const k=A.getDK();
 /* nebbiolina dell'alba */
 const fg=cl(1-xs/2200,0,1);if(fg>0){g.fillStyle='rgba(235,225,230,'+fg*.28+')';g.fillRect(0,GT-60,480,120)}
 /* corvi nel parco, piccioni in città, gabbiani sul fiume e sul porto */
 each(cam,250,9,(x,i,r)=>{const wx=x+cam,z=zn(wx);const bx=x+Math.sin(t*.8+i)*30,by=170+r*90+Math.sin(t*1.6+i)*8;
  if(z<=2||z==3){if(r<.5){g.strokeStyle=tn('#1a1a20');g.lineWidth=1.8;g.beginPath();g.moveTo(bx-6,by);g.quadraticCurveTo(bx-3,by-4-Math.sin(t*9+i)*4,bx,by);g.quadraticCurveTo(bx+3,by-4-Math.sin(t*9+i)*4,bx+6,by);g.stroke()}}
  else if(z==4||z==8||z==9){if(r<.6){g.strokeStyle=tn('#f4f4f6');g.lineWidth=2.2;g.beginPath();g.moveTo(bx-9,by);g.quadraticCurveTo(bx-4,by-6-Math.sin(t*6+i)*5,bx,by);g.quadraticCurveTo(bx+4,by-6-Math.sin(t*6+i)*5,bx+9,by);g.stroke()}}});
 /* passanti: corridori nel parco, studenti, gente di Grafton Street e di O'Connell Street */
 [[200,2200,60,0,'#2a5aa8','#2a2a36','#3a2a1a',1],[2400,4400,34,1,'#c8402a','#3a4a6a','#1a1a1a',1],[5000,6900,30,0,'#4a6a8a','#2a2a36','#8a6a3a',0],[7200,9300,30,1,'#2a8a4a','#2a2a36','#3a2a1a',1],[9500,11700,28,0,'#8a2a3a','#3a3a46','#c88a3a',0],[12000,14500,26,1,'#e8c030','#2a3a6a','#1a1a1a',1],[14800,16900,30,0,'#e86a9a','#2a2a36','#6a4a2a',0],[17100,19200,34,1,'#4a8a6a','#2a2a36','#2a1a10',1],[19400,21800,32,0,'#2a3a7a','#4a4a56','#1a1a1a',1],[22000,24200,30,1,'#e8802a','#2a2a36','#3a2a1a',0]].forEach((w,n)=>{
  const span=w[1]-w[0],tt=(t*w[2]+w[0]*.37+n*137)%(span*2),wx=w[0]+(tt<span?tt:span*2-tt),f=tt<span?1:-1,x=wx-cam;if(x<-50||x>530)return;
  fig(g,x,GY,t*(w[2]/30),{f,s:.95,skin:tn('#e0a880'),top:tn(w[4]),bot:tn(w[5]),hair:tn(w[6]),ph:n,acc:w[3]?null:(g2,b)=>{rect(g2,tn('#2a2a30'),-17,-86+b,7,24)}})});
 /* pioggerella */
 const rn=RAIN(xs);if(rn>.02){g.strokeStyle='rgba(205,220,240,'+rn*.5+')';g.lineWidth=1;g.beginPath();for(let i=0;i<90;i++){const rx=(hr(i*2.3)*520+t*60)%520-20,ry=((hr(i*5.1)*560+t*420+i*9)%560)-20;g.moveTo(rx,ry);g.lineTo(rx-4,ry+12)}g.stroke()}
 /* luci dei lampioni a nebbia leggera di sera */
 if(k>.4){g.fillStyle='rgba(30,30,90,'+(k-.4)*.1+')';g.fillRect(0,GT-60,480,140)}}
function layerStreet(g,o,t){const cam=o;each(cam,190,17,(x,i,r)=>{const wx=x+cam+95;const z=zn(wx);A.setDK(nf(wx));fac(g,x,190,150+r*54,i,z,wx)})}
/* ---- terreno ---- */
const cob=(g,x0,x1,y0,y1,cam,al)=>{g.save();g.beginPath();g.rect(x0,y0,x1-x0,y1-y0);g.clip();for(let r=0;r<Math.ceil((y1-y0)/10)+1;r++){const yy=y0+r*10,bw=11+r*.9,s0=Math.floor((cam+x0)/bw)*bw;for(let q=-1;q<Math.ceil((x1-x0)/bw)+2;q++){const px=s0+q*bw-cam+(r%2)*bw/2,hh=hr(q*13+r*5+(r<<2)+Math.floor(s0));el(g,hh>.66?'rgba(255,255,255,'+al+')':hh>.33?'rgba(0,0,0,.14)':'rgba(120,110,100,.2)',px+bw/2,yy+5,bw/2-1,4.4)}}g.restore()};
const slabs=(g,x0,x1,y0,y1,cam)=>{g.save();g.beginPath();g.rect(x0,y0,x1-x0,y1-y0);g.clip();const s0=Math.floor((cam+x0)/64)*64;for(let q=-1;q<Math.ceil((x1-x0)/64)+2;q++){const px=s0+q*64-cam;rect(g,'rgba(0,0,0,.16)',px,y0,1.4,y1-y0)}for(let yy=y0+26;yy<y1;yy+=34)rect(g,'rgba(0,0,0,.14)',x0,yy,x1-x0,1.4);g.restore()};
const herring=(g,x0,x1,y0,y1,cam)=>{g.save();g.beginPath();g.rect(x0,y0,x1-x0,y1-y0);g.clip();const C=['#a85a44','#9a5040','#8a4838','#b86a50'];for(let r=0;r<Math.ceil((y1-y0)/8)+1;r++){const yy=y0+r*8,s0=Math.floor((cam+x0)/16)*16;for(let q=-1;q<Math.ceil((x1-x0)/16)+2;q++){const px=s0+q*16-cam+(r%2)*8;rect(g,C[md(q*3+r,4)],px,yy,15,7)}}g.restore()};
function gdraw(g,cam,t){for(let z=1;z<=10;z++){const x0=Z[z-1]-cam,x1=Z[z]-cam;if(x1<0||x0>480)continue;const a=Math.max(0,x0),b=Math.min(480,x1);A.setDK(nf((Z[z-1]+Z[z])/2-0));
  if(z==1){g.save();g.beginPath();g.rect(a,GT,b-a,520-GT);g.clip();rect(g,'#5f9a46',a,GT,b-a,34);rect(g,'#c8bc9c',a,GT+34,b-a,520-GT-34);rect(g,'rgba(0,0,0,.1)',a,GT+34,b-a,3);for(let q=0;q<30;q++)rect(g,'rgba(255,255,255,.12)',(Math.floor((cam)/40)*40+q*40-cam+hr(q)*20),GT+50+hr(q+9)*(100),9,1.6);g.restore()}
  else if(z==4||z==5||z==3){rect(g,z==5?'#a89f90':'#8a8478',a,GT,b-a,520-GT);cob(g,a,b,GT,520,cam,z==5?.16:.12);rect(g,'rgba(255,255,255,.06)',a,GT,b-a,3)}
  else if(z==6){rect(g,'#9a5a46',a,GT,b-a,520-GT);herring(g,a,b,GT,520,cam);rect(g,'rgba(255,255,255,.08)',a,GT,b-a,3)}
  else if(z==10){rect(g,'#6a6e76',a,GT,b-a,520-GT);slabs(g,a,b,GT,520,cam);rect(g,'#e8c840',a,GT+82,b-a,5);rect(g,'#3a3e44',a,GT+100,b-a,520-GT-100);for(let q=0;q<20;q++){const px=Math.floor(cam/30)*30+q*30-cam;rect(g,'#2a2420',px,GT+104,18,60)}rect(g,'#9a9ca4',a,GT+112,b-a,3);rect(g,'#9a9ca4',a,GT+140,b-a,3)}
  else{rect(g,z==2?'#8a8c90':z==7?'#9a9488':z==8?'#a09c94':'#8a8e92',a,GT,b-a,520-GT);slabs(g,a,b,GT,520,cam);rect(g,'rgba(255,255,255,.1)',a,GT,b-a,3);rect(g,'rgba(255,255,255,.25)',a,GT+78,b-a,2.4);if(z>=7)rect(g,'rgba(0,0,0,.12)',a,GT+86,b-a,520-GT-86)}}}

/* ================= OGGETTI NUOVI (solo per Dublino) ================= */
const STN='#c8c0aa',STG='#8a8c90';
const harp=(g,x,y,s,c)=>{ln(g,c,2.4*s,[x-8*s,y,x-8*s,y-26*s]);ln(g,c,2*s,[x-8*s,y-26*s,x+8*s,y-20*s,x+8*s,y]);for(let q=0;q<5;q++)ln(g,c,.8*s,[x-6*s+q*3*s,y-24*s+q*s,x-6*s+q*3*s,y-2*s])};
function deer(g,x,y,t,s,f,buck,gr){g.save();g.translate(x,y);g.scale((f||1)*s,s);const c=tn('#b8803a'),b=gr?Math.sin(t*.8+x)*4:0;
 [[-14,0],[-8,1],[10,0],[16,1]].forEach(l=>ln(g,'#7a5028',2.6,[l[0],-30,l[0]+(l[1]?2:-1),0]));
 el(g,c,0,-40,24,11);el(g,'rgba(255,240,220,.55)',0,-33,20,4);for(let q=0;q<7;q++)dot(g,'rgba(255,245,225,.8)',-14+q*5,-44+(q%2)*5,1.3);
 poly(g,c,[[16,-44],[24,-62+b*.6],[30,-60+b],[22,-40]]);el(g,c,29,-60+b*1.4,7,4.2,.5);poly(g,c,[[26,-64+b*1.3],[24,-70+b],[30,-65+b*1.3]]);dot(g,'#1a1210',32,-61+b*1.4,1);
 if(buck){ln(g,'#6a4a2a',1.8,[26,-64+b,26,-80+b,34,-90+b]);ln(g,'#6a4a2a',1.8,[28,-64+b,34,-78+b,42,-84+b]);poly(g,'#6a4a2a',[[26,-80+b],[34,-92+b],[40,-86+b],[34,-80+b]])}
 poly(g,'#f4ecd8',[[-23,-44],[-27,-46],[-23,-38]]);g.restore()}
/* ---- Phoenix Park ---- */
PR.dbcervi=DB((g,x,y,t,a,k)=>{oak(g,x-110,y-4,.8,t);deer(g,x-40,y,t,1.05,1,1,1);deer(g,x+20,y+4,t,.9,-1,0,1);deer(g,x+74,y-2,t,.75,1,0,0);
 for(let q=0;q<6;q++)el(g,'rgba(240,235,235,'+(.12*(1-k))+')',x-100+q*40+Math.sin(t*.4+q)*10,y-8-(q%2)*6,36,7)});
PR.dbwell=DB((g,x,y,t,a,k)=>{rect(g,'#a8a69a',x-50,y-14,100,14);rect(g,'#b8b6a8',x-42,y-28,84,14);rect(g,STN,x-30,y-110,60,82);rect(g,'rgba(255,255,255,.18)',x-30,y-110,14,82);rect(g,'rgba(0,0,0,.14)',x+14,y-110,16,82);[-18,0,18].forEach(d=>rect(g,'rgba(0,0,0,.18)',x+d-6,y-98,12,50));
 poly(g,STN,[[x-17,y-110],[x+17,y-110],[x+5,y-408],[x-5,y-408]]);poly(g,'rgba(0,0,0,.12)',[[x+1,y-110],[x+17,y-110],[x+5,y-408],[x+1,y-408]]);poly(g,'#d8d2bc',[[x-5,y-408],[x,y-424],[x+5,y-408]]);for(let q=0;q<12;q++)rect(g,'rgba(0,0,0,.08)',x-14+q*.5,y-130-q*24,28-q*2,1)});
PR.dbcroce=DB((g,x,y,t,a,k)=>{rect(g,'#b8b6ac',x-40,y-10,80,10);rect(g,'#c8c6bc',x-30,y-22,60,12);rect(g,'#f2f0ea',x-6,y-270,12,248);rect(g,'#f2f0ea',x-46,y-224,92,12);rect(g,'rgba(0,0,0,.14)',x+2,y-270,4,248);rect(g,'rgba(0,0,0,.14)',x-46,y-216,92,4);rect(g,'#2a8a4a',x-26,y-18,52,3);if(k>.3)glow(g,x,y-130,90,'255,230,190',.2*k)});
PR.dbaras=DB((g,x,y,t,a,k)=>{const c='#f0ece0';rect(g,c,x-130,y-92,260,92);rect(g,'rgba(0,0,0,.1)',x-130,y-92,260,6);[-1,1].forEach(s=>{rect(g,c,x+s*96-24,y-126,48,34);poly(g,'#6a6a70',[[x+s*96-28,y-126],[x+s*96,y-142],[x+s*96+28,y-126]])});
 rect(g,'#e4dfd0',x-48,y-92,96,92);for(let q=0;q<6;q++){rect(g,'#fffdf4',x-44+q*17,y-94,8,88);rect(g,'rgba(0,0,0,.12)',x-38+q*17,y-94,2,88)}poly(g,'#f6f2e6',[[x-54,y-94],[x,y-130],[x+54,y-94]]);poly(g,'#d8d2c0',[[x-42,y-96],[x,y-124],[x+42,y-96]]);
 for(let q=0;q<5;q++){[-1,1].forEach(s=>{const wx=x+s*(70+q*14)-5;if(Math.abs(wx-x)>56)rect(g,lit(k,q+s)?LIT:'#6a8aa6',wx,y-72,10,24)})}rect(g,'#14110f',x-6,y-48,12,48);rect(g,'#a8a69a',x-60,y-6,120,6);if(k>.3)glow(g,x,y-50,110,'255,214,130',.18*k);
 [-1,1].forEach(s=>{oak(g,x+s*170,y+2,.7,t)})});
/* ---- Kilmainham e Guinness ---- */
PR.dbkilm=DB((g,x,y,t,a,k)=>{const c='#7c7e82';mat(g,c,x-120,y-150,240,150,5);for(let r=0;r<10;r++)rect(g,'rgba(0,0,0,.12)',x-120,y-150+r*15,240,1);rect(g,'rgba(255,255,255,.1)',x-120,y-150,8,150);
 [[-90,-100],[90,-100],[-90,-60],[90,-60],[-60,-100],[60,-100]].forEach((w,i)=>{rect(g,'#2a2a2e',x+w[0]-6,y+w[1]-12,12,22);for(let q=0;q<4;q++)rect(g,'#6a6a70',x+w[0]-5+q*3,y+w[1]-12,1,22)});
 rect(g,'#9a9a9e',x-40,y-96,80,96);arco(g,'#3a3a3e',x-26,y,52,84);arco(g,'#1c1612',x-20,y,40,76);for(let q=0;q<4;q++)rect(g,'#6a5a4a',x-20+q*10,y-72,2,70);dot(g,'#c8b070',x+10,y-34,2.6);rect(g,'#a8a8ac',x-44,y-102,88,8);txt(g,'KILMAINHAM GAOL',x,y-124,9,'#e8e4d8');rect(g,'#9a9a9e',x-64,y-8,128,8);rect(g,'#7a7a7e',x-52,y-16,104,8)});
PR.dbcortile=DB((g,x,y,t,a,k)=>{mat(g,'#8a8478',x-110,y-140,220,140,9);rect(g,'rgba(255,255,255,.1)',x-110,y-140,10,140);for(let r=0;r<9;r++)rect(g,'rgba(0,0,0,.14)',x-110,y-140+r*16,220,1);rect(g,'#6a6a6e',x-120,y-146,240,8);
 rect(g,'#2a2a2e',x-50,y-110,14,24);rect(g,'#2a2a2e',x+36,y-110,14,24);rect(g,'#4a3a2a',x-3,y-118,6,36);rect(g,'#4a3a2a',x-12,y-108,24,5);for(let q=0;q<7;q++){dot(g,['#2a7a3a','#f4f0e6','#e8c030','#c8281e'][q%4],x-20+q*6.5,y-12-(q%3)*3,3.4)}rect(g,'#8a8c90',x-26,y-8,52,8);if(k>.3)glow(g,x,y-90,70,'255,214,130',.12*k)});
PR.dbstore=DB((g,x,y,t,a,k)=>{mat(g,'#7a4a38',x-130,y-190,260,190,13);rect(g,'rgba(255,255,255,.08)',x-130,y-190,8,190);for(let f=0;f<5;f++)[-1,1].forEach(s=>{for(let q=0;q<2;q++)rect(g,lit(k,f*4+q+s)?LIT:'#7a9ab4',x+s*(70+q*28)-7,y-174+f*32,14,20)});
 poly(g,'rgba(200,225,240,.85)',[[x-44,y-196],[x+44,y-196],[x+34,y-10],[x-34,y-10]]);poly(g,'#241410',[[x-39,y-150],[x+39,y-150],[x+34,y-10],[x-34,y-10]]);poly(g,'#f4ecd8',[[x-42,y-196],[x+42,y-196],[x+40,y-150],[x-40,y-150]]);rect(g,'rgba(255,255,255,.35)',x-30,y-190,5,170);
 rect(g,'#2a3238',x-60,y-214,120,20);rect(g,'rgba(190,225,245,.7)',x-56,y-210,112,12);txt(g,'GRAVITY BAR',x,y-218,7,'#f4f0e6');harp(g,x,y-28,1.1,'#e0b840');rect(g,'#8a8a86',x-60,y-6,120,6);if(k>.3)glow(g,x,y-140,120,'255,190,90',.3*k)});
PR.dbcancello=DB((g,x,y,t,a,k)=>{mat(g,'#8a6a56',x-100,y-130,40,130,3);mat(g,'#8a6a56',x+60,y-130,40,130,4);rect(g,'#a89a84',x-106,y-136,52,8);rect(g,'#a89a84',x+54,y-136,52,8);
 rect(g,'#1c1e22',x-60,y-124,120,8);for(let q=0;q<16;q++)rect(g,'#1c1e22',x-58+q*7.6,y-120,2,112);for(let q=0;q<16;q++)dot(g,'#c8a030',x-57+q*7.6,y-122,2);rect(g,'#1c1e22',x-60,y-18,120,3);
 rect(g,'#14110f',x-48,y-168,96,26);rect(g,'#e0c060',x-48,y-168,96,2);txt(g,'ST JAMES’S GATE',x,y-150,9,'#e8c060');harp(g,x,y-176,1.5,'#e0b840');
 [[-1,0],[-1,1],[1,0]].forEach((b,i)=>{const bx=x+(b[0]<0?-150:140)+i*0,by=y-b[1]*28;});[[150,0],[178,0],[164,-26]].forEach(b=>{el(g,'#7a5030',x+b[0],y+b[1]-14,14,14);rect(g,'#2a2a2e',x+b[0]-14,y+b[1]-20,28,2);rect(g,'#2a2a2e',x+b[0]-14,y+b[1]-8,28,2)});if(k>.3)glow(g,x,y-150,70,'255,214,130',.3*k)});
/* ---- Christ Church e Castello ---- */
PR.dbchrist=DB((g,x,y,t,a,k)=>{const c='#a8a090';rect(g,c,x-60,y-160,190,160);rect(g,'rgba(255,255,255,.1)',x-60,y-160,10,160);poly(g,'#5a6a68',[[x-66,y-160],[x+35,y-196],[x+136,y-160]]);
 rect(g,'#9a9282',x-150,y-270,80,270);rect(g,'rgba(255,255,255,.1)',x-150,y-270,8,270);for(let q=0;q<5;q++)rect(g,c,x-150+q*16,y-282,10,14);rect(g,'#5a6a68',x-152,y-270,84,6);[0,1].forEach(r=>{arco(g,'#2a2e36',x-128,y-120-r*70,18,40);arco(g,k>.2?LIT:'#4a5a76',x-125,y-123-r*70,12,32)});
 [-30,10,50,90].forEach((d,i)=>{arco(g,'#2a2e36',x+d-2,y-60,22,70);arco(g,k>.2?LIT:'#6a8aa6',x+d+1,y-63,16,62);rect(g,'#2a2e36',x+d+8,y-120,1.4,60)});
 [[-62,0],[134,0]].forEach(b=>{ln(g,'#8a8272',7,[x+b[0],y-60,x+b[0]+(b[0]<0?-22:22),y-120,x+b[0],y-150])});arco(g,'#3a2a22',x+40,y,34,70);rect(g,'#8a8272',x-70,y-6,210,6);if(k>.3)glow(g,x+30,y-60,120,'255,214,130',.2*k)});
PR.dbgattotopo=DB((g,x,y,t,a,k)=>{rect(g,'#4a4e54',x-26,y-30,52,30);rect(g,'#6a6e76',x-30,y-34,60,5);rect(g,'rgba(190,225,240,.5)',x-24,y-62,48,30);rect(g,'rgba(255,255,255,.35)',x-24,y-62,6,30);
 el(g,'#a8885a',x-4,y-38,12,5);dot(g,'#a8885a',x+8,y-42,4.2);poly(g,'#a8885a',[[x+5,y-45],[x+6,y-51],[x+9,y-46]]);el(g,'#8a8a8e',x+20,y-37,5,3);ln(g,'#8a8a8e',1,[x+25,y-37,x+30,y-34]);
 rect(g,'#2a2e34',x-2,y-100,4,60);rect(g,'#f4f0e6',x-22,y-120,44,22);txt(g,'GATTO & TOPO',x,y-105,6.4,'#2a2e34');if(k>.3)glow(g,x,y-45,40,'255,230,170',.3*k)});
PR.dbrecord=DB((g,x,y,t,a,k)=>{const c='#9a9484';mat(g,c,x-110,y-100,70,100,2);mat(g,c,x+40,y-100,70,100,3);g.fillStyle=tn(c);g.beginPath();g.moveTo(x-46,y);g.lineTo(x-46,y-220);g.lineTo(x+46,y-220);g.lineTo(x+46,y);g.fill();rect(g,'rgba(255,255,255,.12)',x-46,y-220,14,220);rect(g,'rgba(0,0,0,.18)',x+24,y-220,22,220);
 rect(g,'#7a7466',x-52,y-232,104,14);for(let q=0;q<6;q++)rect(g,c,x-52+q*18,y-244,11,13);for(let q=0;q<4;q++)rect(g,'#2a2a2e',x-3+((q%2)*0),y-196+q*40,5,20);rect(g,'#6a6458',x-52,y-100,104,4);
 arco(g,'#2a2a2e',x-14,y,28,50);ar(g,'#14110f',x-8,y,16,42);if(k>.3)glow(g,x,y-100,90,'255,214,130',.15*k)});
PR.dbdubh=DB((g,x,y,t,a,k)=>{mat(g,'#c8bca0',x-130,y-160,70,160,6);for(let q=0;q<3;q++){arco(g,'#3a4256',x-122+q*22,y-84,14,52);arco(g,k>.2?LIT:'#6a86a6',x-120+q*22,y-86,10,46)}poly(g,'#4a5a58',[[x-136,y-160],[x-95,y-220],[x-54,y-160]]);rect(g,'#b8ae94',x-64,y-120,100,120);rect(g,'#fffaf0',x-30,y-170,40,50);dot(g,'#fffaf0',x-10,y-148,16);dot(g,'#2a2e34',x-10,y-148,12);ln(g,'#c8b050',1.6,[x-10,y-148,x-10,y-158]);ln(g,'#c8b050',1.6,[x-10,y-148,x-4,y-146]);
 [[x-50,y-80],[x-10,y-80]].forEach(w=>{arco(g,'#2a2e36',w[0],w[1]+10,18,48);arco(g,k>.2?LIT:'#6a8aa6',w[0]+2,w[1]+8,14,42)});
 rect(g,'#4a8a3e',x-20,y-16,180,14);el(g,'#4a8a3e',x+70,y-8,100,10);for(let q=0;q<5;q++){g.strokeStyle='#2a6a2a';g.lineWidth=2;g.beginPath();g.ellipse(x+14+q*30,y-9,16,5,q*.4,0,7);g.stroke();g.strokeStyle='#c8b050';g.lineWidth=1;g.beginPath();g.ellipse(x+24+q*30,y-9,14,4,-q*.4,0,7);g.stroke()}});
/* ---- Temple Bar ---- */
PR.dbtemple=DB((g,x,y,t,a,k)=>{mat(g,'#b04a34',x-100,y-210,200,110,11);rect(g,'rgba(255,255,255,.12)',x-100,y-210,6,110);for(let f=0;f<2;f++)for(let q=0;q<3;q++)win(g,x-72+q*52,y-190+f*48,22,32,k,f*5+q+3);rect(g,'#d8d0bc',x-104,y-216,208,7);
 rect(g,'#c8281e',x-104,y-102,208,100);rect(g,'rgba(255,255,255,.14)',x-104,y-102,208,4);rect(g,'#e0c060',x-98,y-98,196,2);rect(g,'#e0c060',x-98,y-6,196,2);txt(g,'THE TEMPLE BAR',x,y-76,17,'#e8c060');
 rect(g,k>.1?'rgba(255,196,110,.95)':'#6a5a42',x-92,y-62,84,50);rect(g,'rgba(0,0,0,.4)',x-50,y-62,2,50);rect(g,'#14110f',x+12,y-70,40,68);rect(g,k>.1?'rgba(255,196,110,.8)':'#6a5a42',x+16,y-66,32,30);rect(g,k>.1?'rgba(255,196,110,.9)':'#6a5a42',x+60,y-62,34,50);
 [[-96,-98],[96,-98],[0,-98]].forEach((b,q)=>{ln(g,IR,1.6,[x+b[0],y-98,x+b[0],y-86]);for(let j=0;j<4;j++)dot(g,['#e8408a','#f2c82a','#8a4ad0','#f4f0e6'][(j+q)%4],x+b[0]-5+j*3.4,y-84+(j%2)*2,3);dot(g,'#3a8a3a',x+b[0],y-82,3.6)});
 if(k>.1){glow(g,x,y-40,130,'255,190,100',.4*k);for(let q=0;q<12;q++)dot(g,['#ffd070','#ff9aa0','#a0e0ff'][q%3],x-100+q*18,y-112+Math.abs(Math.sin(q*1.3))*6,2)}});
PR.dbmeeting=DB((g,x,y,t,a,k)=>{[[-80,'#c8281e'],[0,'#2a6aa8'],[80,'#e8c030']].forEach((s,q)=>{const cx=x+s[0];rect(g,'#6a4a2a',cx-30,y-44,5,44);rect(g,'#6a4a2a',cx+25,y-44,5,44);poly(g,s[1],[[cx-38,y-84],[cx+38,y-84],[cx+30,y-60],[cx-30,y-60]]);for(let j=0;j<4;j++)rect(g,'#f4f0e6',cx-38+j*20+10,y-84,10,24);rect(g,'#7a5a3a',cx-30,y-30,60,6);
  for(let j=0;j<6;j++)dot(g,['#c8281e','#e8802a','#f2c82a','#4aa86a','#8a4a9a','#f4f0e6'][(j+q)%6],cx-22+j*9,y-36,3.8)});
 ln(g,'#2a2a2e',1,[x-130,y-120,x-60,y-108,x,y-122,x+60,y-108,x+130,y-120]);for(let q=0;q<16;q++){const px=x-130+q*17,py=y-120+Math.sin(q*.8)*8+(q%2)*3;dot(g,k>.1?['#ffd070','#ff9aa0','#a0e0ff'][q%3]:'#d8d0c0',px,py+4,2.4);if(k>.1)glow(g,px,py+4,14,'255,214,130',.35*k)}});
PR.dbhapenny=DB((g,x,y,t,a,k)=>{rect(g,'#4a7a9a',x-150,y-46,300,40);for(let q=0;q<9;q++)rect(g,'rgba(255,255,255,.18)',x-140+q*32+Math.sin(t*1.5+q)*4,y-38+(q%3)*10,16,1.6);
 [-1,1].forEach(s=>{mat(g,'#8a8478',x+s*150-(s<0?0:34),y-70,34,70,4);rect(g,'#6a6458',x+s*150-(s<0?0:34)-2,y-74,38,6)});
 g.strokeStyle=tn('#f4f2ea');g.lineWidth=5;g.beginPath();g.moveTo(x-124,y-72);g.quadraticCurveTo(x,y-130,x+124,y-72);g.stroke();g.lineWidth=2;for(let q=-9;q<=9;q++){const u=q/9,ax=x+u*124,ay=y-72-(1-u*u)*29*1.0;ln(g,'#f4f2ea',1.6,[ax,ay,ax,y-72+(1-u*u)*0]);}
 rect(g,'#f4f2ea',x-124,y-76,248,5);rect(g,'rgba(0,0,0,.2)',x-124,y-71,248,2);
 [-124,0,124].forEach(d=>{rect(g,IR,x+d-1.2,y-114+(d==0?-18:0)+(d==0?0:0),2.4,42-(d==0?-18:0)+0);dot(g,k>.15?LIT:'#e8e0c8',x+d,y-118+(d==0?-18:0),4.4);if(k>.15)glow(g,x+d,y-118+(d==0?-18:0),40,'255,214,130',.4*k)});
 [[-40,'#2a5aa8'],[10,'#c8281e'],[50,'#2a2a36']].forEach(p=>{fig(g,x+p[0],y-76-(1-(p[0]/124)**2)*29*0-(1-(p[0]/124)**2)*29,t,{f:p[0]<0?1:-1,s:.28,skin:tn('#e0a880'),top:tn(p[1]),bot:tn('#2a2a36'),hair:tn('#3a2a1a'),ph:p[0]})})});
PR.dbliffey=DB((g,x,y,t,a,k)=>{rect(g,'#4a7a9a',x-140,y-62,280,36);rect(g,'rgba(255,255,255,.2)',x-140,y-62,280,3);for(let q=0;q<8;q++)rect(g,'rgba(255,255,255,.2)',x-130+q*34+Math.sin(t+q)*4,y-52+(q%3)*8,18,1.6);
 [[-60,0],[20,1]].forEach(s=>{const sx=x+s[0]+Math.sin(t*.5+s[1])*8;el(g,'#f4f2ea',sx,y-46,15,6);poly(g,'#f4f2ea',[[sx+8,y-48],[sx+14,y-66],[sx+17,y-65],[sx+13,y-47]]);dot(g,'#f4f2ea',sx+16,y-66,3.2);poly(g,'#e88a2a',[[sx+18,y-66],[sx+24,y-65],[sx+18,y-63]])});
 mat(g,'#8a8478',x-140,y-28,280,28,6);rect(g,'#6a6458',x-142,y-32,284,5);for(let q=0;q<14;q++)rect(g,IR,x-140+q*21,y-52,2,20);rect(g,IR,x-140,y-52,280,2);
 const gx=x+60+Math.sin(t*.6)*8;g.strokeStyle=tn('#f4f4f6');g.lineWidth=2;g.beginPath();g.moveTo(gx-8,y-72);g.quadraticCurveTo(gx-3,y-78+Math.sin(t*4)*3,gx,y-72);g.quadraticCurveTo(gx+3,y-78+Math.sin(t*4)*3,gx+8,y-72);g.stroke()});
/* ---- Trinity College ---- */
PR.dbtrin=DB((g,x,y,t,a,k)=>{const c='#cfc6b0';rect(g,c,x-150,y-110,300,110);rect(g,'rgba(255,255,255,.12)',x-150,y-110,8,110);rect(g,'rgba(0,0,0,.12)',x+140,y-110,10,110);[-1,1].forEach(s=>{rect(g,'#d6cdb8',x+s*106-30,y-140,60,140);poly(g,'#8a8478',[[x+s*106-34,y-140],[x+s*106,y-154],[x+s*106+34,y-140]]);for(let q=0;q<2;q++)arco(g,k>.2?LIT:'#6a86a6',x+s*106-20+q*24,y-66,14,36)});
 rect(g,'#d8d0bc',x-50,y-148,100,148);for(let q=0;q<4;q++){rect(g,'#e8e0cc',x-44+q*28,y-146,10,100);rect(g,'rgba(0,0,0,.14)',x-38+q*28,y-146,2,100)}poly(g,'#e8e0cc',[[x-56,y-148],[x,y-178],[x+56,y-148]]);poly(g,'#cfc6b0',[[x-44,y-150],[x,y-172],[x+44,y-150]]);
 arco(g,'#2a2420',x-18,y,36,74);arco(g,k>.2?'#c89a50':'#4a3a30',x-13,y,26,66);for(let q=0;q<4;q++)rect(g,'rgba(0,0,0,.25)',x-12+q*7,y-62,1,58);rect(g,'#a8a69a',x-60,y-6,120,6);for(let q=0;q<4;q++)rect(g,lit(k,q)?LIT:'#6a8aa6',x-130+q*0,y-90,0,0);if(k>.3)glow(g,x,y-50,120,'255,214,130',.2*k)});
PR.dbcampa=DB((g,x,y,t,a,k)=>{const c='#c4baa4';rect(g,c,x-30,y-250,60,250);rect(g,'rgba(255,255,255,.14)',x-30,y-250,10,250);rect(g,'rgba(0,0,0,.14)',x+16,y-250,14,250);arco(g,'#2a2420',x-16,y,32,70);arco(g,'#4a3a30',x-11,y,22,62);
 rect(g,'#b0a68e',x-34,y-98,68,5);rect(g,'#b0a68e',x-34,y-170,68,5);arco(g,'#2a2e36',x-12,y-134,24,44);arco(g,k>.2?LIT:'#4a5a76',x-8,y-132,16,38);rect(g,c,x-36,y-300,72,56);[-22,0,22].forEach(d=>arco(g,'#2a2e36',x+d-7,y-250,14,38));rect(g,'#b0a68e',x-40,y-304,80,6);
 [-34,34].forEach(d=>{rect(g,c,x+d-4,y-326,8,28);poly(g,c,[[x+d-5,y-326],[x+d,y-338],[x+d+5,y-326]])});poly(g,'#6a7a7a',[[x-24,y-304],[x,y-350],[x+24,y-304]]);rect(g,'#c8b050',x-1,y-362,2,16);if(k>.3)glow(g,x,y-270,60,'255,214,130',.15*k)});
PR.dblib=DB((g,x,y,t,a,k)=>{const c='#d6ccb4';rect(g,c,x-140,y-150,280,150);rect(g,'rgba(255,255,255,.14)',x-140,y-150,8,150);rect(g,'rgba(0,0,0,.12)',x+130,y-150,10,150);for(let q=0;q<7;q++){const wx=x-124+q*38;if(Math.abs(wx+14-x)<30)continue;arco(g,'#4a4438',wx,y-78,28,70);arco(g,k>.2?LIT:'#6a86a6',wx+3,y-80,22,60);rect(g,'#4a4438',wx+13,y-130,2,50);arco(g,'#4a4438',wx+2,y-132,26,34);arco(g,k>.2?LIT:'#6a86a6',wx+6,y-134,18,28)}
 rect(g,'#e8e0cc',x-146,y-158,292,10);poly(g,'#e8e0cc',[[x-44,y-158],[x,y-188],[x+44,y-158]]);for(let q=0;q<4;q++)rect(g,'#f2ecdc',x-34+q*20,y-156,8,70);arco(g,'#3a3028',x-14,y,28,60);rect(g,'#a8a69a',x-150,y-6,300,6);txt(g,'OLD LIBRARY',x,y-172,7,'#6a6458');if(k>.3)glow(g,x,y-70,130,'255,214,130',.18*k)});
PR.dbsfera=DB((g,x,y,t,a,k)=>{rect(g,'#8a8a86',x-44,y-8,88,8);rect(g,'#6a6a68',x-38,y-14,76,6);const cx=x,cy=y-66,r=52,gr=g.createRadialGradient(cx-16,cy-18,6,cx,cy,r);gr.addColorStop(0,'#fff2a8');gr.addColorStop(.5,'#d8a830');gr.addColorStop(1,'#7a5a14');g.fillStyle=gr;g.beginPath();g.arc(cx,cy,r,0,7);g.fill();
 g.save();g.beginPath();g.arc(cx,cy,r,0,7);g.clip();poly(g,'#2a1c08',[[cx-6,cy-r],[cx+34,cy-8],[cx+20,cy+34],[cx-8,cy+8],[cx-26,cy-20]]);dot(g,'#c89a28',cx+10,cy+2,20);dot(g,'#f2d870',cx+4,cy-4,12);for(let q=0;q<8;q++)ln(g,'#7a5a14',1.4,[cx+10,cy+2,cx+10+Math.cos(q)*20,cy+2+Math.sin(q)*20]);g.restore();
 g.strokeStyle='rgba(120,80,10,.5)';g.lineWidth=1.4;g.beginPath();g.arc(cx,cy,r-1,0,7);g.stroke();if(k>.3)glow(g,cx,cy,90,'255,214,130',.25*k)});
/* ---- Grafton, Molly, Bewley's, St Stephen's Green ---- */
const sign=(g,x,y,a,k)=>{a=a||['Sráid','Street'];const w=Math.max(80,a[1].length*6.2+24);rect(g,IR,x-1.6,y-100,3.2,100);rect(g,'#1a1a1e',x-w/2-2,y-134,w+4,36);rect(g,'#f4f2ea',x-w/2,y-132,w,32);txt(g,a[0],x,y-119,8,'#14110f','italic bold');txt(g,a[1].toUpperCase(),x,y-106,9,'#14110f');if(k>.3)glow(g,x,y-116,w*.7,'255,214,130',.2*k)};
PR.dbtarga=DB((g,x,y,t,a,k)=>sign(g,x,y,a,k));
PR.dbgrafton=DB((g,x,y,t,a,k)=>{sign(g,x-90,y,['Sráid Ghrafton','Grafton Street'],k);
 rect(g,'#2a6a3a',x-4,y-60,100,60);poly(g,'#e8402a',[[x-12,y-60],[x+104,y-60],[x+94,y-86],[x-2,y-86]]);for(let q=0;q<4;q++)rect(g,'#f4f0e6',x-6+q*29,y-84,14,24);const cc=['#d8283a','#f2c82a','#f4a0b8','#8a4ad0','#f4f0e6','#e8802a'];for(let q=0;q<10;q++){ln(g,'#2a7a3a',1.6,[x+4+q*9,y-26,x+4+q*9,y-40-(q%3)*5]);dot(g,cc[q%6],x+4+q*9,y-43-(q%3)*5,4)}rect(g,'#8a6a3a',x-4,y-26,100,4);
 g.strokeStyle=tn('#14110f');g.lineWidth=1.4;[[-40,-1],[20,1]].forEach(()=>{});ln(g,'#14110f',2,[x+140,y,x+140,y-150,x+180,y-150]);rect(g,'#14110f',x+170,y-168,30,32);dot(g,'#f4f0e6',x+185,y-152,10);ln(g,'#14110f',1.6,[x+185,y-152,x+185,y-158]);ln(g,'#14110f',1.6,[x+185,y-152,x+190,y-150])});
PR.dbmolly=DB((g,x,y,t,a,k)=>{rect(g,'#8a8a88',x-60,y-10,120,10);rect(g,'#9a9a98',x-52,y-22,104,12);const c='#6a7a56';
 poly(g,c,[[x-12,y-30],[x+12,y-30],[x+20,y-110],[x-20,y-110]]);poly(g,'#7a8a64',[[x-14,y-30],[x-26,y-30],[x-10,y-100],[x-10,y-30]]);rect(g,'#7a8a64',x-10,y-112,20,6);ln(g,c,5,[x-14,y-98,x-34,y-72]);ln(g,c,5,[x+14,y-98,x+34,y-80]);dot(g,'#7a8a64',x,y-124,9);poly(g,'#5a6a46',[[x-9,y-128],[x,y-140],[x+10,y-128]]);rect(g,'#9aaa7a',x-8,y-112,16,5);
 rect(g,'#5a4a30',x+22,y-46,60,5);poly(g,'#6a5a3a',[[x+24,y-46],[x+82,y-46],[x+78,y-26],[x+28,y-26]]);dot(g,'#4a3a22',x+44,y-14,14);dot(g,'#8a7a5a',x+44,y-14,3);ln(g,'#5a4a30',3,[x+30,y-46,x+8,y-76]);el(g,'#6a5a3a',x+68,y-50,10,6);rect(g,'#5a4a30',x+58,y-58,20,8);if(k>.3)glow(g,x,y-70,60,'255,230,170',.1*k)});
PR.dbbewley=DB((g,x,y,t,a,k)=>{rect(g,'#5a1f1a',x-100,y-136,200,136);rect(g,'rgba(255,255,255,.1)',x-100,y-136,6,136);rect(g,'#14110f',x-100,y-136,200,16);rect(g,'#e0c060',x-100,y-122,200,2);txt(g,'ORIENTAL CAFÉ',x,y-124,13,'#e8c060');
 arco(g,'#14110f',x-80,y-62,160,70);const cs=['#2a5aa8','#c8281e','#e8c030','#2a8a4a','#7a3a8a','#e88a30'];for(let q=0;q<8;q++)for(let r=0;r<2;r++)rect(g,k>.1?mixs(cs[(q+r*3)%6],'#ffe9a0',.45):cs[(q+r*3)%6],x-74+q*18.5,y-110+r*20,16,18);ln(g,'#14110f',2,[x,y-120,x,y-70]);
 rect(g,'#2a1c14',x-92,y-52,86,50);rect(g,k>.1?'rgba(255,196,110,.9)':'#6a5a42',x-88,y-48,78,40);rect(g,'#2a1c14',x+14,y-62,40,62);rect(g,k>.1?'rgba(255,196,110,.8)':'#6a5a42',x+18,y-58,32,30);
 [[-40,0],[8,0]].forEach(()=>{});[62,86].forEach(d=>{rect(g,'#14110f',x+d,y-30,16,3);ln(g,'#14110f',2,[x+d+1,y-4,x+d+1,y-30]);ln(g,'#14110f',2,[x+d+15,y-4,x+d+15,y-30])});if(k>.1)glow(g,x,y-60,130,'255,170,90',.3*k)});
PR.dbfus=DB((g,x,y,t,a,k)=>{const c='#bcb6a8';rect(g,c,x-100,y-150,200,150);rect(g,'rgba(255,255,255,.14)',x-100,y-150,8,150);rect(g,'rgba(0,0,0,.14)',x+88,y-150,12,150);
 rect(g,'#9a9488',x-106,y-158,212,10);rect(g,'#c8c2b4',x-100,y-196,200,40);poly(g,'#cfc9ba',[[x-110,y-196],[x,y-226],[x+110,y-196]]);txt(g,'ROYAL DUBLIN FUSILIERS',x,y-176,8,'#4a463c');
 arco(g,'#2a2a2e',x-26,y,52,110);arco(g,k>.1?'#6a5a42':'#4a4a50',x-20,y,40,102);[-1,1].forEach(s=>{arco(g,'#2a2a2e',x+s*70-14,y,28,66);rect(g,'#9a9488',x+s*70-18,y-74,36,5)});for(let q=0;q<4;q++)rect(g,'rgba(0,0,0,.1)',x-96,y-130+q*28,192,1);
 [-1,1].forEach(s=>{col(g,x+s*40,y,114,10,'#d0cabc')});rect(g,'#a8a69a',x-110,y-6,220,6)});
PR.dbstagno=DB((g,x,y,t,a,k)=>{[-120,0,110].forEach((d,i)=>{ln(g,'#4a3a2a',6,[x+d,y,x+d+2,y-60,x+d-2,y-100]);for(let q=0;q<22;q++){const bx=x+d-50+q*4.6;ln(g,'#5a9a4a',1.4,[bx,y-110+Math.sin(q)*4,bx+Math.sin(t+q)*3,y-40+(q%4)*10])}el(g,'#4a8a40',x+d,y-110,56,18)});
 el(g,'#4a7a8a',x,y-8,160,14);el(g,'rgba(255,255,255,.2)',x-30,y-12,50,3);[[-70,1],[-20,1],[40,-1],[86,-1]].forEach((d,i)=>{const dx=x+d[0]+Math.sin(t*.4+i)*10;el(g,i%2?'#8a6a3a':'#f4f2ea',dx,y-10,9,5);dot(g,i%2?'#2a6a3a':'#f4f2ea',dx+d[1]*8,y-16,3.8);poly(g,'#e8a030',[[dx+d[1]*11,y-16],[dx+d[1]*16,y-15],[dx+d[1]*11,y-13]])});
 for(let q=0;q<5;q++)el(g,'#3a6a2a',x-90+q*40,y-6+(q%2)*3,8,2.4);rect(g,'#5a3a22',x+130,y-22,60,4);rect(g,'#5a3a22',x+134,y-18,5,18);rect(g,'#5a3a22',x+182,y-18,5,18);rect(g,'#5a3a22',x+130,y-36,60,4)});
/* ---- Merrion Square ---- */
PR.dbporte=DB((g,x,y,t,a,k)=>{g.save();g.translate(0,y-GT);ter(g,x-100,200,214,91,k,{hw:66});g.restore()});
PR.dbwilde=DB((g,x,y,t,a,k)=>{poly(g,'#e8e6e0',[[x-76,y],[x-70,y-40],[x-40,y-62],[x+10,y-58],[x+60,y-34],[x+70,y]]);poly(g,'#f8f6f2',[[x-60,y-40],[x-30,y-60],[x,y-52],[x-20,y-30]]);poly(g,'rgba(120,120,130,.25)',[[x+10,y-58],[x+60,y-34],[x+70,y],[x+20,y-10]]);for(let q=0;q<5;q++)dot(g,'rgba(255,255,255,.9)',x-50+q*22,y-30-(q%2)*14,1.6);
 poly(g,'#3a8a5a',[[x-30,y-60],[x+16,y-110],[x+34,y-98],[x+10,y-56]]);poly(g,'#2a6a44',[[x+10,y-56],[x+34,y-98],[x+40,y-92],[x+22,y-52]]);poly(g,'#2a2a32',[[x+14,y-60],[x+44,y-60],[x+70,y-34],[x+56,y-28],[x+36,y-44],[x+20,y-46]]);ln(g,'#2a2a32',8,[x+44,y-52,x+66,y-30]);
 ln(g,'#3a8a5a',7,[x+16,y-96,x+40,y-66,x+34,y-52]);dot(g,'#c8c4b8',x+34,y-52,4);ln(g,'#3a8a5a',7,[x+8,y-100,x-14,y-98,x-26,y-86]);dot(g,'#4a4a52',x-26,y-86,5);poly(g,'#e8508a',[[x+18,y-108],[x+28,y-100],[x+22,y-96],[x+14,y-100]]);dot(g,'#3a3a42',x+22,y-122,12);dot(g,'#4a4a52',x+25,y-120,2);dot(g,'#c8c8c4',x+27,y-116,1.6);ln(g,'#2a2a32',2,[x+13,y-120,x+10,y-108]);if(k>.3)glow(g,x,y-70,80,'255,230,190',.15*k)});
PR.dbleinster=DB((g,x,y,t,a,k)=>{const c='#d8d0b8';rect(g,c,x-140,y-104,280,104);rect(g,'rgba(255,255,255,.14)',x-140,y-104,8,104);rect(g,'rgba(0,0,0,.12)',x+130,y-104,10,104);[-1,1].forEach(s=>{rect(g,'#e0d8c0',x+s*100-24,y-128,48,128);poly(g,'#8a8478',[[x+s*100-28,y-128],[x+s*100,y-146],[x+s*100+28,y-128]])});
 rect(g,'#e4dcc4',x-44,y-140,88,140);for(let q=0;q<5;q++){rect(g,'#f4eedc',x-38+q*18,y-136,8,98);rect(g,'rgba(0,0,0,.12)',x-32+q*18,y-136,2,98)}poly(g,'#f0e8d4',[[x-50,y-140],[x,y-170],[x+50,y-140]]);poly(g,'#d8d0b8',[[x-40,y-142],[x,y-164],[x+40,y-142]]);
 for(let f=0;f<2;f++)[-1,1].forEach(s=>{for(let q=0;q<2;q++)win(g,x+s*(62+q*30)-6+(s>0?0:0),y-92+f*36,12,22,k,f*5+q+(s>0?4:0)+20)});rect(g,'#14110f',x-8,y-44,16,44);rect(g,'#a8a69a',x-60,y-6,120,6);rect(g,IR,x-150,y-26,300,1.6);for(let q=0;q<38;q++)rect(g,IR,x-150+q*8,y-26,1.4,26);if(k>.3)glow(g,x,y-60,140,'255,214,130',.2*k)});
/* ---- O'Connell Street ---- */
PR.dbspire=DB((g,x,y,t,a,k)=>{rect(g,'#8a8a8e',x-14,y-6,28,6);poly(g,'#d4d8e0',[[x-6,y-6],[x,y-436],[x+6,y-6]]);poly(g,'rgba(255,255,255,.5)',[[x-6,y-6],[x,y-436],[x-2,y-6]]);poly(g,'rgba(0,0,0,.2)',[[x+2,y-6],[x,y-436],[x+6,y-6]]);for(let q=0;q<16;q++)rect(g,'rgba(0,0,0,.1)',x-5+q*.25,y-30-q*26,10-q*.6,1);if(k>.15){glow(g,x,y-430,40+14*Math.sin(t*3),'255,244,210',.7*k);dot(g,'#fff8e0',x,y-436,2.6)}});
PR.dbgpo=DB((g,x,y,t,a,k)=>{const c='#c8c0aa';rect(g,c,x-150,y-130,300,130);rect(g,'rgba(255,255,255,.14)',x-150,y-130,8,130);rect(g,'rgba(0,0,0,.14)',x+140,y-130,10,130);rect(g,'#b8b09a',x-150,y-138,300,10);
 for(let f=0;f<2;f++)for(let q=0;q<10;q++){const wx=x-136+q*28;if(Math.abs(wx+7-x)<52)continue;win(g,wx,y-112+f*44,12,26,k,f*13+q+30)}
 rect(g,'#d8d2c0',x-56,y-138,112,138);for(let q=0;q<6;q++){rect(g,'#eee8d6',x-52+q*20,y-134,10,110);rect(g,'rgba(0,0,0,.12)',x-45+q*20,y-134,2,110);rect(g,'#eee8d6',x-54+q*20,y-138,14,5)}poly(g,'#e4decc',[[x-62,y-140],[x,y-166],[x+62,y-140]]);poly(g,'#cfc9b6',[[x-50,y-142],[x,y-160],[x+50,y-142]]);
 [[-30,12],[0,16],[30,12]].forEach(s=>{rect(g,'#6a6a66',x+s[0]-3,y-170-s[1]+(s[0]==0?-14:0)+4,6,s[1]);dot(g,'#6a6a66',x+s[0],y-174-s[1]+(s[0]==0?-14:0)+4,3.4)});
 rect(g,'#14110f',x-24,y-66,48,66);rect(g,k>.2?LIT:'#5a6a86',x-20,y-62,18,50);rect(g,k>.2?LIT:'#5a6a86',x+2,y-62,18,50);rect(g,'#a8a69a',x-70,y-6,140,6);txt(g,'GENERAL POST OFFICE',x,y-146,7,'#4a463c');if(k>.3)glow(g,x,y-60,150,'255,214,130',.2*k)});
PR.dboconnell=DB((g,x,y,t,a,k)=>{rect(g,'#6a6a68',x-52,y-12,104,12);rect(g,'#7a7a78',x-44,y-24,88,12);rect(g,'#8a8a88',x-34,y-110,68,86);for(let q=0;q<3;q++)rect(g,'rgba(0,0,0,.12)',x-34,y-100+q*26,68,1);
 [[-46,1],[46,-1]].forEach(s=>{ln(g,'#3a4a3a',5,[x+s[0],y-28,x+s[0],y-66]);dot(g,'#4a5a48',x+s[0],y-72,5);poly(g,'#3a4a3a',[[x+s[0],y-62],[x+s[0]+s[1]*24,y-84],[x+s[0]+s[1]*18,y-52]]);poly(g,'#3a4a3a',[[x+s[0],y-62],[x+s[0]-s[1]*4,y-80],[x+s[0]-s[1]*14,y-54]])});
 rect(g,'#7a7a78',x-26,y-124,52,16);rect(g,'#4a5a48',x-16,y-120,32,6);const bz='#3a4a3a';poly(g,bz,[[x-12,y-124],[x+12,y-124],[x+14,y-180],[x-14,y-180]]);poly(g,'#4a5a48',[[x-14,y-170],[x-36,y-150],[x-14,y-130]]);dot(g,'#4a5a48',x,y-192,10);poly(g,'#3a4a3a',[[x-10,y-196],[x,y-204],[x+10,y-196]]);rect(g,'rgba(120,170,140,.3)',x-12,y-180,4,56);if(k>.3)glow(g,x,y-110,70,'255,214,130',.12*k)});
/* ---- Docklands e pub ---- */
PR.dbcustom=DB((g,x,y,t,a,k)=>{const c='#d8d0b8';rect(g,c,x-160,y-100,320,100);rect(g,'rgba(255,255,255,.14)',x-160,y-100,8,100);rect(g,'rgba(0,0,0,.12)',x+150,y-100,10,100);for(let q=0;q<14;q++){arco(g,'rgba(40,40,44,.9)',x-152+q*22.6,y-4,12,34)}
 for(let f=0;f<2;f++)for(let q=0;q<12;q++){const wx=x-144+q*24;if(Math.abs(wx+6-x)<56)continue;win(g,wx,y-96+f*0-(f?0:0)+f*-0+(f?-46:-8)+8,10,24,k,f*13+q+60)}
 rect(g,'#e4dcc4',x-60,y-136,120,136);for(let q=0;q<4;q++){rect(g,'#f2ecdc',x-52+q*28,y-132,12,96);rect(g,'rgba(0,0,0,.12)',x-44+q*28,y-132,2,96)}poly(g,'#e4dcc4',[[x-66,y-138],[x,y-160],[x+66,y-138]]);rect(g,'#c8c0aa',x-34,y-196,68,60);for(let q=0;q<5;q++)rect(g,'#f2ecdc',x-32+q*14,y-194,6,46);
 cupo(g,'#6a8a7a',x,y-196,70,70);rect(g,'rgba(255,255,255,.2)',x-30,y-250,8,44);rect(g,'#c8c0aa',x-6,y-270,12,22);rect(g,'#d8c050',x-2,y-290,4,20);dot(g,'#d8c050',x,y-292,4);for(let q=0;q<7;q++)ln(g,'rgba(0,0,0,.1)',1,[x,y-196,x-30+q*10,y-262+Math.abs(q-3)*8]);
 for(let q=0;q<5;q++)dot(g,'#a89a80',x-48+q*24,y-98,4);rect(g,'#a8a69a',x-170,y-6,340,6);if(k>.3)glow(g,x,y-120,170,'255,214,130',.2*k)});
PR.dbfame=DB((g,x,y,t,a,k)=>{rect(g,'#6a6a68',x-120,y-5,240,5);const cb='#4a4030',cg='#5a6a50';
 const fg=(fx,s,kind,ph)=>{const w=Math.sin(t*1.2+ph)*.12,h=s*(kind=='c'?.55:1);ln(g,cb,4*s*(kind=='c'?.7:1),[fx,y-h*40,fx+4*s+w*10,y-h*10,fx+6*s,y-5]);ln(g,cb,4*s*(kind=='c'?.7:1),[fx,y-h*40,fx-4*s,y-h*10,fx-6*s,y-5]);ln(g,cb,6*s*(kind=='c'?.6:1),[fx,y-h*86,fx,y-h*40]);dot(g,cb,fx+2,y-h*94,6*s*(kind=='c'?.7:1));ln(g,cb,3*s,[fx,y-h*80,fx+14*s,y-h*52]);ln(g,cb,3*s,[fx,y-h*80,fx-10*s,y-h*52]);if(kind=='b'){el(g,cg,fx-12*s,y-h*50,8*s,6*s)}rect(g,'rgba(160,190,140,.18)',fx-1,y-h*88,1.6,h*48)};
 fg(x-96,1,'b',0);fg(x-60,.95,'n',1);fg(x-26,1,'b',2);fg(x+4,.5,'c',3);fg(x+34,.98,'n',4);fg(x+70,1,'b',5);fg(x+102,.9,'n',6);ln(g,cb,2.6,[x+120,y-18,x+132,y-14,x+134,y-6]);el(g,cb,x+126,y-14,8,3.6);
 mat(g,'#5a5a58',x+150,y-60,40,60,2);ln(g,'#c8b88a',1.2,[x+158,y-40,x+182,y-40]);ln(g,'#c8b88a',1.2,[x+158,y-34,x+176,y-34]);rect(g,'rgba(255,200,120,.5)',x-130,y-4,260,2)});
PR.dbbeckett=DB((g,x,y,t,a,k)=>{rect(g,'#4a6a8a',x-190,y-44,380,38);for(let q=0;q<9;q++)rect(g,'rgba(255,255,255,.18)',x-180+q*40+Math.sin(t+q)*4,y-34+(q%3)*9,20,1.6);
 rect(g,'#5a5e66',x-190,y-60,380,8);rect(g,'rgba(255,255,255,.3)',x-190,y-60,380,2);
 g.strokeStyle=tn('#f2f4f8');g.lineWidth=7;g.beginPath();g.moveTo(x+80,y-58);g.quadraticCurveTo(x+30,y-250,x-20,y-390);g.stroke();g.lineWidth=2;for(let q=0;q<16;q++){const ax=x-20-(q%4)*0,bx=x-160+q*22;g.strokeStyle=tn('rgba(235,240,248,.8)');g.beginPath();g.moveTo(x-18+q*.3,y-380+q*.4);g.lineTo(x-170+q*22+(q>7?0:0),y-60);g.stroke()}
 rect(g,'#2a2e36',x+74,y-62,14,10);if(k>.2){for(let q=0;q<16;q++)dot(g,'rgba(170,215,255,'+(.5+.4*Math.sin(t*2+q))+')',x-170+q*22,y-62,2.2);glow(g,x-20,y-300,90,'170,215,255',.3*k)}});
PR.dbpub=DB((g,x,y,t,a,k)=>{mat(g,'#8a4a38',x-110,y-190,220,100,17);for(let q=0;q<3;q++)win(g,x-80+q*60,y-170,22,34,k,q+90);rect(g,'#d8d0bc',x-114,y-196,228,7);
 rect(g,'#1f4a34',x-114,y-92,228,90);rect(g,'rgba(255,255,255,.1)',x-114,y-92,228,4);rect(g,'#e0c060',x-108,y-88,216,2);rect(g,'#e0c060',x-108,y-8,216,2);rect(g,'#14110f',x-100,y-86,200,22);txt(g,'THE HARP & LANTERN',x,y-70,14,'#e8c060');
 rect(g,k>.05?'rgba(255,184,96,.96)':'#6a5a42',x-100,y-56,92,46);rect(g,'rgba(0,0,0,.4)',x-54,y-56,2,46);rect(g,'#14110f',x+8,y-60,38,58);rect(g,k>.05?'rgba(255,184,96,.9)':'#6a5a42',x+12,y-56,30,26);rect(g,k>.05?'rgba(255,184,96,.9)':'#6a5a42',x+56,y-56,44,46);
 if(k>.05){[[-80,0],[-30,1],[70,2]].forEach(m=>{dot(g,'rgba(30,18,10,.8)',x+m[0],y-36,5);rect(g,'rgba(30,18,10,.8)',x+m[0]-4,y-31,8,20);if(m[1]==1){el(g,'rgba(120,60,20,.9)',x+m[0]+8,y-26,6,4)}});glow(g,x-30,y-30,130,'255,170,80',.5*k)}
 ln(g,IR,2,[x-120,y-80,x-134,y-80]);rect(g,'#2a2a2e',x-146,y-92,24,22);dot(g,k>.05?LIT:'#e8dcc0',x-134,y-82,7);if(k>.05)glow(g,x-134,y-82,40,'255,214,130',.5*k);
 [[-124,0],[124,0]].forEach(b=>{el(g,'#7a5030',x+b[0]-(b[0]<0?24:-26),y-14,13,14);rect(g,'#2a2a2e',x+b[0]-(b[0]<0?37:-13),y-20,26,2);rect(g,'#2a2a2e',x+b[0]-(b[0]<0?37:-13),y-8,26,2)});
 rect(g,'#2a2e2a',x+112,y-56,30,40);rect(g,'#f4f0e6',x+116,y-52,22,4);txt(g,'SESSION',x+127,y-38,5.4,'#f4f0e6');txt(g,'8PM',x+127,y-28,6,'#f4f0e6');rect(g,'#6a4a2a',x+114,y-16,3,16);rect(g,'#6a4a2a',x+136,y-16,3,16)});
/* ---- Connolly Station ---- */
PR.dbconn=DB((g,x,y,t,a,k)=>{const c='#9a968a';mat(g,c,x-150,y-110,300,110,8);rect(g,'rgba(255,255,255,.12)',x-150,y-110,8,110);for(let q=0;q<9;q++){arco(g,'#2a2e34',x-138+q*31,y-4,20,54);arco(g,k>.1?LIT:'#7a8aa0',x-135+q*31,y-6,14,46)}for(let q=0;q<9;q++)win(g,x-136+q*31,y-92,14,20,k,q+40);
 rect(g,'#8a8678',x-154,y-116,308,8);rect(g,'#aaa698',x-34,y-156,68,156);arco(g,'#2a2e34',x-20,y-4,40,70);arco(g,k>.1?LIT:'#6a8aa6',x-16,y-6,32,62);rect(g,'#8a8678',x-38,y-160,76,8);rect(g,'#aaa698',x-26,y-210,52,52);dot(g,'#f4f0e6',x,y-186,12);dot(g,'#2a2e34',x,y-186,9);ln(g,'#e0c060',1.6,[x,y-186,x,y-194]);ln(g,'#e0c060',1.6,[x,y-186,x+5,y-184]);
 rect(g,'#8a8678',x-30,y-214,60,6);cupo(g,'#5a6a68',x,y-214,40,30);rect(g,'#14110f',x-70,y-118,140,0);rect(g,'#1a2a44',x-72,y-138,144,16);txt(g,'CONNOLLY STATION',x,y-126,9,'#f4f0e6');txt(g,'STÁISIÚN UÍ CHONGHAILE',x,y-146,6,'#e8e0cc');if(k>.2)glow(g,x,y-60,150,'255,214,130',.25*k)});
PR.dbdart=DB((g,x,y,t,a,k)=>{rect(g,'#4a4e54',x-190,y-6,380,6);poly(g,'#2a8a4a',[[x-190,y-8],[x-190,y-92],[x-170,y-104],[x+170,y-104],[x+190,y-92],[x+190,y-8]]);rect(g,'#e8ece8',x-190,y-46,380,8);rect(g,'#1c5a32',x-190,y-8,380,8);rect(g,'rgba(255,255,255,.14)',x-190,y-104,380,4);
 for(let q=0;q<11;q++){const wx=x-168+q*32;rect(g,k>.1?LIT:'#a8c8dc',wx,y-92,22,36);rect(g,'rgba(0,0,0,.25)',wx+10,y-92,1.4,36)}[-100,100].forEach(d=>{rect(g,'#1c5a32',x+d-16,y-90,32,80);rect(g,k>.1?'rgba(255,226,150,.9)':'#a8c8dc',x+d-12,y-86,11,60);rect(g,k>.1?'rgba(255,226,150,.9)':'#a8c8dc',x+d+1,y-86,11,60)});
 txt(g,'DART',x,y-18,10,'#f4f0e6');[-150,-70,70,150].forEach(d=>{dot(g,'#1a1a1e',x+d,y-6,7);dot(g,'#8a8a90',x+d,y-6,3)});rect(g,k>.1?'#ffe9a0':'#e8e0c8',x+182,y-34,6,8);rect(g,'#c8281e',x-190,y-30,4,8);
 ln(g,'#3a3e44',2,[x-60,y-104,x-30,y-136,x+30,y-136,x+60,y-104]);if(k>.2){glow(g,x,y-70,200,'255,226,150',.25*k)}});
/* ---- personaggi di sfondo e arredo urbano ---- */
PR.dbtaxi=DB((g,x,y,t,a,k)=>{poly(g,'#1a2a4a',[[x-62,y-8],[x-62,y-30],[x-40,y-34],[x-26,y-54],[x+22,y-54],[x+40,y-34],[x+62,y-30],[x+62,y-8]]);rect(g,'#10182c',x-62,y-14,124,6);poly(g,'#a8c8d8',[[x-34,y-34],[x-22,y-50],[x-2,y-50],[x-2,y-34]]);poly(g,'#a8c8d8',[[x+2,y-34],[x+2,y-50],[x+20,y-50],[x+34,y-34]]);rect(g,'#f4f0e6',x-10,y-60,20,6);txt(g,'TAXI',x,y-55,5.4,'#14110f');rect(g,k>.1?'#80ff90':'#4aa860',x+12,y-59,5,4);[-36,38].forEach(o=>{dot(g,'#1a1a1e',x+o,y-8,9);dot(g,'#8a8a90',x+o,y-8,4)});rect(g,k>.1?'#ffe9a0':'#f4ecc8',x+58,y-26,5,6);rect(g,'#c8281e',x-62,y-24,4,6);if(k>.2)glow(g,x+66,y-24,40,'255,230,160',.35*k)});
PR.dblamp=DB((g,x,y,t,a,k)=>{const c='#1f4a34';rect(g,c,x-5,y-8,10,8);rect(g,c,x-2.4,y-120,4.8,112);rect(g,c,x-5,y-124,10,5);ln(g,c,2,[x,y-112,x-14,y-120,x-14,y-116]);ln(g,c,2,[x,y-112,x+14,y-120,x+14,y-116]);[-14,14].forEach(d=>{dot(g,k>.15?LIT:'#e8dcc0',x+d,y-112,4.4);if(k>.15)glow(g,x+d,y-112,40,'255,214,130',.4*k)});dot(g,c,x,y-128,3)});
PR.dbpanca=DB((g,x,y,t,a,k)=>{rect(g,'#7a5a34',x-44,y-32,88,5);rect(g,'#7a5a34',x-44,y-25,88,5);for(let q=0;q<3;q++)rect(g,'#7a5a34',x-44,y-58+q*7,88,5);rect(g,IR,x-40,y-60,4,60);rect(g,IR,x+36,y-60,4,60)});
PR.dbcestino=DB((g,x,y,t,a,k)=>{rect(g,'#2a2e34',x-9,y-34,18,34);rect(g,'#3a4048',x-10,y-37,20,5);rect(g,'rgba(255,255,255,.14)',x-9,y-34,3,34);for(let q=0;q<3;q++)rect(g,'rgba(0,0,0,.3)',x-6,y-26+q*6,12,2)});
PR.dbletter=DB((g,x,y,t,a,k)=>{rect(g,'#2a6a3a',x-14,y-62,28,62);el(g,'#2a6a3a',x,y-62,14,6);rect(g,'#14110f',x-9,y-44,18,3);rect(g,'rgba(255,255,255,.16)',x-14,y-62,5,62);rect(g,'#1a4a28',x-16,y-6,32,6);harp(g,x,y-24,.5,'#e0c060')});
PR.dbbici=DB((g,x,y,t,a,k)=>{rect(g,'#4a4e54',x-60,y-4,120,4);for(let q=0;q<4;q++){const bx=x-46+q*30;[-9,9].forEach(o=>{g.strokeStyle=tn('#2a2a2e');g.lineWidth=1.8;g.beginPath();g.arc(bx+o,y-12,8,0,7);g.stroke()});ln(g,'#2a9ac8',2.4,[bx-9,y-12,bx-2,y-24,bx+6,y-24,bx+9,y-12]);ln(g,'#2a9ac8',2,[bx-2,y-24,bx,y-12,bx-9,y-12]);ln(g,'#2a2a2e',2,[bx+6,y-24,bx+8,y-30,bx+13,y-30]);rect(g,'#f4f0e6',bx-8,y-28,9,3)}});
PR.dbbus=DB((g,x,y,t,a,k)=>{rect(g,'#2a5aa8',x-2,y-130,4,130);rect(g,'#2a5aa8',x-24,y-140,48,26);txt(g,'BUS STOP',x,y-124,7,'#f4f0e6');rect(g,'#f4f0e6',x-20,y-136,40,3);rect(g,'rgba(180,215,235,.6)',x+20,y-90,52,70);rect(g,'#2a5aa8',x+20,y-92,52,4);rect(g,'#2a5aa8',x+20,y-22,52,3);rect(g,'#2a5aa8',x+68,y-90,4,70)});
PR.dbfiori=DB((g,x,y,t,a,k)=>{rect(g,'#5a3a22',x-26,y-28,52,28);const cc=['#d8283a','#f2c82a','#f4a0b8','#8a4ad0','#f4f0e6','#e8802a'];for(let q=0;q<9;q++){ln(g,'#2a7a3a',1.6,[x-22+q*5.4,y-28,x-22+q*5.4,y-42-(q%3)*6]);dot(g,cc[(q+(a||0))%6],x-22+q*5.4,y-45-(q%3)*6,4)}});
PR.dbgatto=DB((g,x,y,t,a,k)=>gatto(g,x,y,t,a||'#3a3a3e'));
PR.dbpecore=DB((g,x,y,t,a,k)=>{rect(g,'#6a6a68',x-28,y-8,56,8);dot(g,'#3a3a3e',x,y-60,12)});

/* ================= DIALOGHI: 12 battute per personaggio (l'ultima è sempre il saluto) ================= */
const BYE="Ti ringrazio, ora devo proseguire la mia passeggiata. Posso salutarti?";
TOPX.db_padraig=[
["Pádraig, che lavoro fai esattamente qui all’alba?","Faccio il giro dei prati prima che arrivi la gente: controllo i cancelli, i sentieri, e che i daini stiano bene. A volte soccorro un corridore che ha preso male una radice. Mi sveglio alle cinque, il termos di tè è sacro. E ogni mattina, ti giuro, è come vedere il parco per la prima volta."],
["Mi spieghi quanto è grande il Phoenix Park e da dove viene il nome?","Settecentosette ettari, più del doppio di Central Park a New York. Nasce nel 1662 come riserva di caccia del viceré, il duca di Ormond. Sul nome si dice che derivi da “fionn uisce”, acqua chiara, e che gli inglesi lo abbiano storpiato in “Phoenix”. Vero o no, mi piace come storia."],
["Posso avvicinarmi ai daini? Sono selvatici?","Sono liberi, sì, qualche centinaio. Discendono da quelli portati qui nel Seicento dal duca di Ormond. Tienili a distanza e non dar loro da mangiare: il pane gli fa male. Ad ottobre, nella stagione degli amori, i maschi sono nervosi: lì meglio guardarli da lontano e con il telefono in mano, non con le mani."],
["Perché a Dublino hanno costruito un obelisco per il duca di Wellington?","Perché Arthur Wellesley, il vincitore di Waterloo, era nato a Dublino. Lui però, dicono, rispondeva che nascere in una stalla non fa di te un cavallo! L’obelisco è alto 62 metri, il più alto d’Europa, ed è stato finito nel 1861. Ci sono dei pannelli sul basamento, ma lo hanno costruito a rate: i soldi sono finiti prima."],
["Il Papa è venuto davvero fin qui, in mezzo ai prati?","Il 29 settembre 1979, Giovanni Paolo II ha detto messa proprio lì, davanti alla grande croce bianca. Più di un milione di persone, in un paese che ne aveva tre. Mia madre ci è andata: dice che si è alzata alle tre di notte per trovare posto, e che il tè caldo in quel prato valeva più dell’oro."],
["Chi abita nella grande villa bianca che si vede laggiù?","L’Áras an Uachtaráin, la residenza del Presidente d’Irlanda. Il Presidente è eletto dai cittadini ogni sette anni e ha un ruolo soprattutto di rappresentanza. Lo vedi ogni tanto passare con la scorta, ma il parco rimane aperto a tutti: ci passa pure il cane del vicino, e nessuno si offende."],
["Cosa fanno i dublinesi la domenica mattina nel parco?","Corrono, pedalano, fanno partitelle di hurling e di calcio gaelico, passeggiano con il passeggino e il caffè in mano. Il sabato mattina c’è il parkrun, cinque chilometri in compagnia di centinaia di persone: arrivi anche all’ultimo posto e ti applaudono lo stesso. Così funziona qui: l’importante è esserci."],
["Che tempo fa di solito a Dublino? Ho visto molte nuvole.","Si dice “a soft day”, una giornata morbida: pioggerella sottile, poi sole, poi vento, poi di nuovo sole. Quattro stagioni in un’ora. L’ombrello? Si rovescia, meglio un buon impermeabile a strati. In compenso a giugno si fa luce fin verso le dieci di sera, e d’inverno è già buio alle quattro e mezza."],
["Che cosa significa “craic”? Lo sento dire ovunque.","Si pronuncia “crack”: il divertimento, la chiacchiera, l’atmosfera giusta. “What’s the craic?” vuol dire “come va, che si dice?”. “The craic was ninety” significa che la serata è stata magnifica. E se ti rispondono “grand”, vuol dire che va tutto bene: non è nulla di più impegnativo."],
["Cosa si mangia a colazione qui? Sto morendo di fame.","La “full Irish”: uova, bacon, salsicce, black pudding e white pudding, fagioli, pomodoro grigliato e pane scuro di soda, il tutto con un tè forte. Se ti dicono “a cup of tea”, di solito significa “vieni, sediti, raccontami”. Non è mai solo una bevanda."],
["Cosa mi consigli assolutamente di vedere oggi?","Alla Kilmainham Gaol, prenota: si entra solo con la visita guidata e i posti finiscono. Poi la Guinness e il Trinity College. E a St James’s Gate, se vedi un signore con la parrucca e un boccale, salutalo: dicono sia proprio lui, Arthur. Io non ho mai avuto il coraggio di chiedergli che birra preferisce."],
["Ti ringrazio, ora devo proseguire la mia passeggiata. Posso salutarti?","Ma certo! Slán, come si dice qui: vai sano. Ricordati, se il vento ti gira l’ombrello, non prendertela con il cielo: è così che Dublino ti dice che sei arrivato. E salutami la Guinness, da parte mia."]
];
TOPX.db_guinness=[
["Signor Guinness, come ha iniziato con la birra?","Mio padre Richard era il fattore dell’arcivescovo Price a Celbridge. Quando l’arcivescovo morì, lasciò a me e a mio fratello cento sterline a testa. Con quelle, nel 1755, aprii una piccola fabbrica a Leixlip. Era una cosa modesta, ma la birra e io andavamo d’accordo, come voi con il caffè."],
["Mi spiega perché un affitto di novemila anni?","Il 31 dicembre 1759 presi in affitto la vecchia birreria di St James’s Gate: centocinque sterline subito, poi quarantacinque l’anno, per novemila anni. Un affitto fisso, per sempre, o quasi. Gli amici ridevano, ma io ho sempre pensato che l’ottimismo sia un ottimo investimento."],
["Che differenza c’è tra ale e porter?","La porter è più scura e luppolata. Il nome si dice nasca a Londra, perché la bevevano i facchini, i “porters”. Io facevo ale; col tempo ho capito che la porter vendeva meglio e viaggiava bene, e alla fine del Settecento facevo solo quella. La stout, la “forte”, nasce da lì: stout porter."],
["Perché la birra è nera? È bruciata?","Non bruciata, tostata! Oggi si usa l’orzo tostato, che dà colore e quel gusto amaro, di caffè. Ai tempi miei si usavano i malti scuri. Se la guardi controluce, nel bicchiere, vedrai che è rosso rubino, non nero. Nessuno ci crede, finché non prova."],
["Perché dicono che una pinta richiede 119,5 secondi?","Si versa a quarantacinque gradi fino a tre quarti, si lascia riposare, e poi si completa a cupola. In tutto, l’azienda dice 119 secondi e mezzo: il tempo di far depositare la schiuma. Chi ha fretta, ordini un’altra cosa. E nei pub migliori il barman ti disegna perfino un trifoglio sulla schiuma."],
["È vero che la Guinness “fa bene”? L’ho letto su un manifesto.","Ah, la pubblicità! Negli anni Venti i miei eredi la dicevano “good for you”. Era una frase da cartellone: non fidatevi dei manifesti, mio caro, né dei medici dei manifesti. Con la birra vale ciò che vale per tutto: con misura e in buona compagnia."],
["L’arpa nel marchio è proprio quella di Brian Boru?","Ispirata a quella, sì: l’antica arpa gaelica oggi custodita al Trinity College, che si chiama “di Brian Boru” anche se è molto più recente di lui. L’arpa fu registrata come marchio nel 1876; più tardi il governo irlandese ne adottò una simile come simbolo dello Stato. Si guarda le monete, e la riconosci."],
["Cosa pensa della Storehouse? Se l’aspettava così?","Io facevo botti! Ora c’è un museo di sette piani, con l’atrio a forma di pinta gigante e il Gravity Bar in cima. Ed è uscita da una mia birra perfino una cosa chiamata Guinness Book of Records: nel 1951 il direttore litigò in un pub su quale fosse l’uccello da caccia più veloce, e disse: serve un libro. Bella idea, no?"],
["Cosa faceva per i suoi operai e per la città?","Ero un uomo di chiesa, sostenevo le scuole domenicali per i ragazzi poveri. I miei discendenti poi fecero molto per Dublino: alloggi, medici per i dipendenti, il restauro della cattedrale di San Patrizio, e perfino St Stephen’s Green, un parco regalato a tutti i dublinesi. Il guadagno, se non si divide, è solo un numero."],
["Come si brinda in irlandese?","“Sláinte!”, si pronuncia “slàn-cia”: salute. Per ringraziare, “go raibh maith agat”. Per dare il benvenuto, “céad míle fáilte”: centomila benvenuti. E ricorda: chi offre il giro non va via prima che arrivi il suo turno. Questa è la legge, più antica del mio affitto."],
["Quali segreti di birraio mi può dare?","Acqua pulita, pazienza, e rispetto per il lievito. E in un pub, se vuoi fare l’autoctono, ordina “a pint of plain”, una pinta di semplice, come si diceva un tempo per la porter, o “a pint of the black stuff”. Poi sali al Gravity Bar a bere guardando Dublino dall’alto: lì capirai perché non ho mai voluto andarmene."],
["Ti ringrazio, ora devo proseguire la mia passeggiata. Posso salutarti?","Ma certo, mio caro, con piacere. Che il vostro cammino abbia sempre la schiuma giusta e la compagnia migliore. E quando passate dal cancello, battete il piede: sono novemila anni che aspetta qualcuno."]
];
TOPX.db_mick=[
["Mick, perché i tassisti di Dublino hanno fama di chiacchieroni?","Perché se non parla la radio, parlo io! A parte gli scherzi, un tassista qui dà il benvenuto alla città: ascolti storie, dai consigli, fai il giro lungo se serve. Si dice “la prima cosa che impari è il tuo cliente, la seconda è la strada”. Io faccio il contrario, ma pochi se ne accorgono."],
["Qual è la differenza fra Northside e Southside?","Il fiume Liffey divide la città: a nord c’è il Northside, a sud il Southside. Dicono che il sud sia più chic e il nord più vero: a Dublino ci si prende in giro, ma sempre con affetto. Gli accenti sono diversi, le squadre pure, e nessuno cambierebbe mai sponda. Io faccio entrambe: il taxi non ha confini."],
["Perché Dublino si chiama così? Cosa c’è dietro il nome?","Dal gaelico “dubh linn”, la pozza nera: era un laghetto scuro formato dal fiume Poddle, vicino al castello. Poi c’è il nome irlandese vero: Baile Átha Cliath, la città del guado di canne. Due nomi per una sola città, un po’ come mia suocera."],
["Chi erano i Vichinghi qui? Hanno lasciato qualcosa?","Arrivarono verso l’841 e fondarono un insediamento fortificato in riva al fiume: i primi dublinesi, in un certo senso. Poi, nel 1028, il re Sitriuc fondò la cattedrale di Christ Church, che vedi qui dietro. Vicino c’è un museo, Dublinia, dove puoi indossare un elmo vichingo. Funziona poco con la mia testa, ma ci ho provato."],
["Davvero a Dublin Castle hanno rubato i gioielli della Corona?","Nel 1907 i gioielli d’Irlanda, custoditi nel castello, sparirono: furto mai risolto, mai ritrovati. Pare che nessuno sia stato condannato, e sono passati più di cent’anni. A Dublino se vuoi una storia di misteri non devi andare lontano: basta chiedere a un taxi."],
["Perché la statua della Giustizia dà le spalle alla città?","Alla porta di Cork Hill, la Giustizia guarda verso il castello e dà le spalle alla città: dicono che sia così perché la giustizia non guardava Dublino. I dublinesi ci ridono ancora, e aggiungono che le bilance sono state storte dalla pioggia. Non so quanto sia vero, ma me lo hanno raccontato in diciotto taxi."],
["Come ci si muove in città? Tram, bus, DART?","C’è il Luas, il tram, in servizio dal 2004; il DART lungo la costa; i bus gialli e blu. Con la Leap Card, la carta ricaricabile, paghi tutto. Sull’autobus in contanti serve il resto esatto, altrimenti perdi i soldi. E quando scendi dal bus, si dice “thanks, driver”: non è obbligatorio, ma sei guardato male se non lo fai."],
["Qual è lo sport che fa impazzire i dublinesi?","Il GAA: calcio gaelico e hurling. Il Croke Park è uno degli stadi più grandi d’Europa, con circa 82.000 posti. I giocatori sono dilettanti, lavorano di giorno e giocano la domenica. Dublino, “the Dubs”, ha vinto sei All-Ireland di fila dal 2015 al 2020: se ti sbagli e tifi Kerry, sei in guai grossi."],
["Come si parla “alla dublinese”? Mi dai qualche espressione?","“Yer man” è quel tizio. “Gas” significa divertente. “Deadly” è fantastico. “Eejit” è sciocco. “The jacks” è il bagno. E “I will, yeah” detto con tono particolare vuol dire “no, mai”. La “th” sparisce: “tree” è tre, “tirty-tree” è trentatré. Provaci, vedi che ti rispondono con un sorriso."],
["Mi hanno detto che Dublino è molto cara. È così?","Un po’ sì. Gli affitti sono alti, e a Temple Bar una pinta può costare di più. Un consiglio: bevi nei pub fuori dai giri turistici, dove sei trattato come un cliente e non come un turista. Per mangiare, i posti dove vanno i taxisti sono sempre onesti: noi lo sappiamo, e lo diciamo."],
["Cosa mi consigli per la sera? Dove si va?","Per la musica vera cerca i pub fuori da Temple Bar, dove c’è una “session” in un angolo e nessuno ha una chitarra elettrica. Entri, ordini una pinta, ascolti. Se ti vogliono, ti fanno posto. E se ti offrono un tè, dì sempre sì: rifiutare è come rifiutare un abbraccio."],
["Ti ringrazio, ora devo proseguire la mia passeggiata. Posso salutarti?","Certo, ragazzo! Se ti serve un passaggio, sai dove trovarmi: il taxi è sempre qui, il tè anche. Alla prossima, e occhio alle buche, che a Dublino piovono più di noi!"]
];
TOPX.db_aoife=[
["Aoife, com’è studiare a Trinity? È dura?","Dipende dai giorni e dalle ore di sonno! Si studia tanto, ma c’è anche vita: club, società, squadre, e a fine anno il Trinity Ball, una festa leggendaria. Entrare è questione di punti nel Leaving Cert, l’esame di maturità, e nei corridoi si respira un po’ di storia, ma anche di caffè freddo."],
["Come si pronuncia il tuo nome? Aoife, vero?","“Ee-fa”! Il gaelico confonde chiunque. Siobhán si dice “shi-vàn”, Niamh “neev”, Saoirse “sir-sha”, Cian “kìan”, Pádraig “pàw-drig”. Gli stranieri a volte si arrendono, e va bene: nessuno si offende. Se ci provi, ti stimano ancora di più."],
["La lingua irlandese è ancora parlata? Mi sembra di vederla ovunque.","È la prima lingua ufficiale d’Irlanda, e i cartelli sono bilingui: sopra l’irlandese, sotto l’inglese. A scuola la studiamo per anni, e ci sono scuole in cui si fa tutto in irlandese, le gaelscoil. La si parla soprattutto in zone dell’ovest, le Gaeltacht. Si dice “Dia dhuit” per salutare, “go raibh maith agat” per ringraziare."],
["Cos’è il Book of Kells? Perché è così famoso?","È un manoscritto dei quattro Vangeli in latino, decorato da monaci intorno all’anno 800, su pelle di vitello. Ogni pagina è un labirinto di intrecci, animali e colori. Si trova a Trinity dal 1661 e in mostra c’è solo una parte, con le pagine che si cambiano ogni tanto. Dopo un’ora lì davanti, la mia penna sembra uno scarabocchio."],
["E la Long Room? Quanti libri ci sono davvero?","È lunga circa 65 metri e custodisce circa 200.000 dei libri più antichi. Trinity è anche “biblioteca di deposito legale”: può chiedere una copia di ogni libro pubblicato in Irlanda e nel Regno Unito. I fan di Star Wars dicono che abbia ispirato gli Archivi Jedi: non è confermato, ma io credo di sì. In fondo c’è l’arpa del Quattrocento “di Brian Boru”."],
["Cos’è questa storia del Campanile e degli esami?","Una superstizione: chi ci passa sotto mentre suonano le campane non supera gli esami. Quindi, dicono, gli studenti ci girano intorno o evitano la zona. Io ci sono passata un sacco di volte ma suonavano solo quando non c’ero. Per precauzione, comunque, io passo di lato."],
["Come si vive in affitto a Dublino con un budget da studente?","Male! Gli affitti sono altissimi: si divide la stanza, si viaggia da fuori città, si fa un lavoretto in un pub o in un caffè. Molti tornano a casa nel weekend per risparmiare. È la grande discussione nazionale, insieme al tempo e al calcio. Ma la città vale la fatica, e Dublino sa farti sentire a casa."],
["Che espressioni giovanili dovrei sapere?","Quando si va a fare la spesa si dice “going for the messages”. Gli armadietti sono “presses”, le scarpe da ginnastica “runners”, e una “yoke” è una cosa qualunque. “Banjaxed” è rotto, “fierce” vuol dire molto (“fierce cold”), “sound” va bene, e “give out” è lamentarsi. Lamentarsi è uno sport nazionale."],
["Che musica ascoltano i giovani di Dublino? Solo folk?","No, per fortuna! Gli U2 si sono formati qui, in una scuola di Dublino, nel 1976, e Thin Lizzy pure. Oggi vanno forte i Fontaines D.C., di Dublino, e Hozier, Dermot Kennedy, CMAT. E il folk? Si ascolta nei pub: il venerdì sera sentirai tutto, dal trad al punk, nello stesso locale."],
["Che feste dovrei conoscere? Si dice che Halloween sia nato qui.","Sì, viene da Samhain, l’antica festa celtica del 31 ottobre. Gli irlandesi emigrati la portarono in America. A casa si mangia il “barmbrack”, un pane dolce con dentro un anello: chi lo trova si sposa entro l’anno. Il 17 marzo è San Patrizio, e il 16 giugno il Bloomsday. Se sei fortunato, becchi anche un po’ di sole."],
["Che consiglio mi dai per visitare il Trinity senza impazzire?","Controlla gli orari e prenota in anticipo: le code sono lunghe, soprattutto d’estate. Vai la mattina presto o a fine giornata. E poi esci a fare due passi in Front Square e guardati intorno: ogni cortile ha una storia, e ogni studente un esame che incombe. Io ne ho tre."],
["Ti ringrazio, ora devo proseguire la mia passeggiata. Posso salutarti?","Certo! Buon viaggio, e se incontri la Sfera di Pomodoro, fai una foto con noi dentro il riflesso! Ora scappo, ho una lezione, il Campanile mi guarda."]
];
TOPX.db_cian=[
["Cian, da quanto suoni qui e come funziona il permesso?","Da anni, ormai. Per suonare per strada serve un permesso del comune, e di solito si può stare un’ora per volta nello stesso punto, poi tocca a un altro. Chi arriva prima prende il posto buono. Ci si organizza, e quasi sempre senza litigare: tra musicisti ci si aiuta, perché l’alternativa è il silenzio."],
["Cos’è una “session” di musica tradizionale? Posso unirmi?","È un incontro di musicisti nei pub, senza palco: si siedono attorno a un tavolo e suonano un pezzo dopo l’altro, una “set” di jig, reel e hornpipe. Si ascolta prima, si chiede il permesso, e si suona solo se sai farlo bene. Se vuoi cantare, aspetta che qualcuno ti passi la parola."],
["Quali strumenti si usano nella musica irlandese?","Violino, tin whistle, uilleann pipes, cioè le cornamuse a gomito, il bodhrán, un tamburo a cornice, concertina, fisarmonica, banjo, e naturalmente l’arpa, simbolo del paese. Sulle monete irlandesi c’è l’arpa. Il bodhrán lo suonano con una bacchetta doppia: se sbagli, nessuno lo dice, ma tutti lo sentono."],
["Chi era Molly Malone? Davvero cantate tutti la canzone?","La canzone “Cockles and Mussels” è l’inno non ufficiale di Dublino: la sentirai in ogni pub, e alle partite. Molly vendeva cozze e vongole e morì di febbre, dice il testo. Ma non è mai stato provato che sia esistita. Il 13 giugno è il “Molly Malone Day”. E sì, la statua è soprannominata “the Tart with the Cart”."],
["Chi ha cominciato suonando proprio a Grafton Street?","Glen Hansard, ad esempio, che poi con la canzone “Falling Slowly” del film “Once” ha vinto un Oscar nel 2008, e Damien Rice. Ogni anno, la vigilia di Natale, si fa un grande concerto di strada per beneficenza: tutti i musicisti si trovano qui, e la via si riempie di voci. È il mio giorno preferito dell’anno."],
["Cosa si suona e si canta a Natale qui?","La canzone più amata è “Fairytale of New York” dei Pogues, del 1987: se non la senti almeno cento volte, non è Natale. E il 6 gennaio c’è il “Nollaig na mBan”, il Natale delle donne: quel giorno loro riposano e gli uomini fanno le faccende. Se lo dici a mia madre, ti apre la porta."],
["Cosa bevono i musicisti dopo il concerto? Solo Guinness?","Una pinta, certo, ma quando si ha il raffreddore si beve un “hot whiskey”: whiskey caldo con chiodi di garofano, limone e zucchero. Il whiskey irlandese è una religione: Jameson è nato a Dublino, a Bow Street, nel 1780. Il caffè irlandese, per la cronaca, non è nato qui: Foynes, 1943."],
["Come si balla l’irish dance? Perché le braccia sono ferme?","Si balla con le braccia lungo i fianchi e i piedi che volano. Ci sono varie teorie: i preti, le sale piccole, o le regole dei maestri di danza. Riverdance è nato nel 1994 come intervallo dell’Eurovision a Dublino e ha fatto il giro del mondo. A un ceili, la danza di gruppo, ballano tutti: nonni, bambini, turisti."],
["Quali feste non devo perdere a Dublino?","San Patrizio, il 17 marzo, con la grande parata. Il Bloomsday, il 16 giugno: si ricorda il giorno in cui è ambientato l’Ulisse di Joyce, ci si veste con abiti del 1904 e si mangia il panino al gorgonzola con il vino, come Leopold Bloom da Davy Byrne. E la Culture Night, a settembre, con musei e musica aperti fino a tardi."],
["Hai una canzone da consigliarmi per la mia passeggiata?","“Raglan Road”: una poesia di Patrick Kavanagh messa in musica, che parla proprio di Grafton Street in novembre. E guarda, è novembre davvero! E poi “Whiskey in the Jar”, versione dei Thin Lizzy, per quando senti il bisogno di cantare ad alta voce. In Irlanda nessuno ti giudica se stoni."],
["Si guadagna a suonare per strada?","Dipende dal tempo e dall’umore della gente. Una giornata di sole, e le monete tintinnano. Una giornata di pioggia, e suoni per te e per gli uccelli. Oggi molti usano anche il pagamento con il telefono, con un codice QR sulla custodia. Ma, a dire il vero, non lo faccio per i soldi: lo faccio perché mi piace che qualcuno si fermi."],
["Ti ringrazio, ora devo proseguire la mia passeggiata. Posso salutarti?","Certo! Prima di andare, lascia una moneta o un sorriso nella custodia: entrambi bastano. Slán, e fai una cosa per me: ascolta la città, la sera, è la più bella canzone di Dublino."]
];
TOPX.db_wilde=[
["Signor Wilde, perché la sua statua è sdraiata così?","È opera dello scultore Danny Osborne, del 1997: sono mezzo sdraiato su un masso di quarzo, fatto di pietre di vari colori, con il giubbotto verde e il colletto rosa. Guardo la mia casa d’infanzia, qui di fronte. E il sorriso, dicono, è mio: ho sempre pensato che, se devi posare, devi farlo con un po’ di malizia."],
["Dov’è nato e dove ha vissuto da ragazzo a Dublino?","Sono nato il 16 ottobre 1854 al numero 21 di Westland Row. L’anno dopo ci siamo trasferiti al numero 1 di Merrion Square, qui di fronte. Mio padre, William, era un chirurgo di occhi e orecchie, e mia madre Jane, che si firmava “Speranza”, era una poetessa. Il sabato, nel nostro salotto, si radunavano tutti gli intellettuali di Dublino."],
["Com’è stato a Trinity College? Era uno studente brillante?","Studiai lì dal 1871 al 1874, lettere classiche, e vinsi la medaglia d’oro Berkeley per il greco. Poi una borsa di studio mi portò a Oxford, al Magdalen College. Non è stato un caso: mi hanno insegnato a leggere in lingue difficili, ma anche a scherzare in lingue facili."],
["Perché il fiore verde all’occhiello? Cos’è un dandy?","Il garofano verde lo portai alla prima di “Lady Windermere’s Fan”, nel 1892, e chiesi anche agli amici di indossarlo: un segno segreto, un po’ artificiale e un po’ irlandese. Il dandy è un uomo che trasforma la propria vita in opera d’arte. Era l’estetismo: l’arte per l’arte. Oggi la chiamereste attitudine."],
["Quali opere dovrei leggere o vedere di lei?","“Il ritratto di Dorian Gray”, un romanzo con un quadro che invecchia al posto del protagonista. “L’importanza di chiamarsi Ernesto”, del 1895, una commedia che ha fatto ridere Londra. “Il principe felice” e altri racconti per bambini, che di bambini hanno poco. E “De Profundis”, per quando serve un’anima."],
["Mi dica una sua frase da portare con me.","“Siamo tutti nel fango, ma alcuni di noi guardano le stelle”, da “Lady Windermere’s Fan”. E, dalla stessa commedia, per i giorni difficili: “Posso resistere a tutto, tranne che alla tentazione”. Non sono consigli; sono cose che i miei personaggi dicono sempre al momento giusto."],
["Com’è stato il suo viaggio in America? Mi hanno parlato di una dogana.","Nel 1882 feci una lunga tournée di conferenze, quasi un anno. Dicono che in dogana a New York abbia dichiarato: “Non ho nulla da dichiarare, tranne il mio genio”: la frase è troppo bella per sapere se sia vera. A Leadville, in Colorado, parlai ai minatori, e loro mi trattarono con più rispetto dei salotti londinesi."],
["Cosa le è successo a Londra? Come finì la sua storia?","Con rispetto per chi ascolta: nel 1895 fui processato e condannato, per una legge che puniva le relazioni fra uomini, a due anni di lavori forzati. Scontai la pena a Pentonville, Wandsworth e Reading. Uscii spezzato e andai in Francia. Morii a Parigi il 30 novembre 1900 e riposo al Père-Lachaise. Nel 2017 fui graziato: quella legge fu un’ingiustizia."],
["Cosa pensa di Dublino oggi? Si legge ancora?","Dublino è Città della Letteratura dell’UNESCO dal 2010, e l’Irlanda ha quattro premi Nobel per la letteratura: Yeats, Shaw, Beckett e Heaney. Tre di loro legati a questa città. Qui si ama ascoltare e raccontare: i dublinesi sanno che una buona storia è migliore di una buona birra, e che le due cose insieme sono il paradiso."],
["Qual è il segreto di una buona conversazione?","Ascoltare, mio caro, ancora più che parlare, e avere sempre una storia in tasca. In Irlanda si parla di “the gift of the gab”, il dono della parlantina, e dei “seanchaí”, i narratori di un tempo che giravano di casa in casa. La conversazione è l’unica arte che si pratica in compagnia e senza biglietto."],
["Se potesse tornare a Merrion Square, cosa farebbe?","Passeggerei davanti alle case, contando i colori delle porte. Qui abitarono anche il poeta Yeats, al numero 82, e Daniel O’Connell, al 58. E guarderei nel parco i giovani che leggono sull’erba, come io leggevo sotto il tavolo, quando mia madre diceva che era ora di cena. Ogni generazione ha il suo modo di scappare."],
["Ti ringrazio, ora devo proseguire la mia passeggiata. Posso salutarti?","Naturalmente, mio caro. Andate, e ricordate: ogni cosa è consentita, tranne la noia. E se vi capita di passare di nuovo, sapete dove trovarmi: sempre sdraiato, sempre in ascolto."]
];
TOPX.db_declan=[
["Declan, come si tira una pinta perfetta?","Il bicchiere inclinato a quarantacinque gradi, si riempie fino a tre quarti, si lascia riposare, poi si completa con la cupola. Non si ha fretta: la fretta si vede nella schiuma. E se hai fatto bene, sulla superficie ci metto un trifoglio. A volte, per vedere se un cliente è un intenditore, lo faccio pure con un cuore."],
["Perché il pub è così importante per voi?","“Public house”: casa pubblica, il soggiorno di tutti. Qui ci si incontra, si festeggia, si piange, si guarda la partita. Un tempo i pub erano anche negozi di alimentari. Fino al 2018 il Venerdì Santo erano chiusi per legge: ora no, ma qualcuno ancora per rispetto non apre. Il pub non è un posto: è un modo di stare insieme."],
["Cos’è uno “snug”?","Una piccola cabina chiusa, dentro il pub, con la porticina e uno sportello sul bar. Si dice che un tempo servisse alle donne, ai preti e ai poliziotti per bere senza essere visti. Oggi è il posto più ambito: ci si sta in sei, si parla piano e si ordina ciò che si vuole. Se ne trovi uno libero, sei un fortunato."],
["Qual è l’etichetta dei “round”, i giri?","Ognuno paga un giro per tutti, a turno. Se sei in un gruppo e non offri il tuo giro, è una colpa grave. Si beve allo stesso ritmo, si offre quando il bicchiere è quasi vuoto, e non si va via prima del proprio turno. È un sistema di fiducia, di generosità: come un piccolo contratto sociale."],
["C’è qualcosa di vero nella storia del Brazen Head?","Il Brazen Head, in Bridge Street, sostiene di esistere dal 1198: sarebbe il pub più antico d’Irlanda. Ha visto passare personaggi come Robert Emmet, che dicono vi abbia preparato la rivolta del 1803, e nomi come Joyce e Brendan Behan. Vero? Chi lo sa. Ma se non è la verità, è una buona storia, e questa vale di più."],
["Cosa si mangia al pub? Non solo patatine, spero.","Irish stew, spezzatino di montone con patate. Il “coddle”, piatto dublinese di salsicce, pancetta e patate in brodo. Il “boxty”, frittella di patate. Fish and chips, pane scuro di soda con burro. E se sei fortunato, i gamberi della baia di Dublino. Le patatine Tayto, sì, quelle le abbiamo inventate come religione."],
["E la musica? Come funziona la serata?","Verso le nove arrivano i musicisti, si siedono attorno a un tavolo, e cominciano. Nessun palco, nessun microfono. Se qualcuno canta, si fa silenzio: “shh for the singer”, e si ascolta fino all’ultima nota. Poi si applaude, si offre una pinta, e si riparte con una nuova canzone."],
["Cosa significano “lock-in” e “last orders”?","“Last orders” è l’ultima ordinazione, prima della chiusura. E il “lock-in”: dopo l’orario, si chiude la porta e i clienti restano dentro a bere, in teoria illegale, in pratica leggenda. C’è stato anche il “holy hour”: in passato i pub di Dublino chiudevano dalle 14.30 alle 15.30. Fu abolito nel 1988."],
["La Guinness in Italia ha lo stesso sapore? Perché dicono che qui è migliore?","Il sapore può essere identico, ma conta come viene servita: botti fresche, tubi puliti, un ricambio rapido. Qui ne servono tantissime ogni giorno, quindi la birra è sempre fresca. Il resto è atmosfera: la stessa pinta, in un pub che ti conosce, ha un sapore più amico."],
["Quali altri drink irlandesi dovrei provare?","Il whiskey irlandese: Jameson, Powers, Teeling, a Dublino ne ha. Un “hot whiskey” se hai il raffreddore, un caffè irlandese se vuoi essere coccolato. E il Baileys, la crema all’irlandese, che è nato proprio qui nel 1974. Non è un drink da pub, ma sul gelato è un capolavoro."],
["Ci sono storie di fantasmi o superstizioni nei pub?","La banshee, “bean sídhe”: la donna delle fate che con il suo lamento annuncia una morte in famiglia. Gli alberi delle fate, che nessuno taglia: ci sono strade costruite curve per rispettarli. I leprechaun, i folletti con la pentola d’oro. E non portare in casa il biancospino: porta guai. Non ci credo, ma non lo faccio."],
["Ti ringrazio, ora devo proseguire la mia passeggiata. Posso salutarti?","Mi mancherai! Torna quando vuoi, il fuoco è sempre acceso e la porta è aperta. Sláinte, amico, e un giorno ti insegno a tirare una pinta come si deve."]
];
TOPX.db_orla=[
["Orla, come funziona il DART? Dove posso andare stasera?","Il DART è il treno elettrico verde della costa, in servizio dal 1984. A nord arriva fino a Howth e Malahide, a sud fino a Bray e Greystones, con fermate come Sandymount e Dalkey. Si paga con la Leap Card o con il biglietto. Stasera l’ultimo treno parte tardi: basta non addormentarsi."],
["Qual è la tratta più bella? Cosa si vede dal finestrino?","A sud, direi Dalkey e la baia di Killiney, che chiamano “la Baia di Napoli”. A Sandycove c’è la torre Martello, dove comincia l’Ulisse di Joyce, e il Forty Foot, dove nuotano d’inverno anche a Natale: i dublinesi sono matti, ma simpatici. A nord, Howth, con il porto e il fish and chips sul molo."],
["Chi era Connolly? Perché la stazione porta il suo nome?","James Connolly, nato a Edimburgo nel 1868, sindacalista e repubblicano, comandava le forze di Dublino nella rivolta del 1916. Fu ferito e fucilato il 12 maggio 1916. La stazione fu intitolata a lui nel 1966, nel cinquantesimo anniversario, e da allora è la Connolly. Quando la dico alla radio, mi tremano un po’ le gambe."],
["Dove vanno gli altri treni da Connolly? Posso arrivare a Belfast?","Certo: l’Enterprise, il treno per Belfast, ci mette circa due ore. Da qui partono anche i treni per Sligo, per Rosslare e per Drogheda. Tra Repubblica e Irlanda del Nord non c’è controllo di passaporti: è la “Common Travel Area”. Puoi fare colazione a Dublino e pranzare a Belfast, a seconda della fame."],
["Com’è lavorare di notte? Non fa paura?","No, è quasi poesia. La città si calma, e la gente sul treno è gentile: c’è chi canta a mezza voce, chi dorme sulla spalla del vicino, chi mi dice “fair play to you” quando annuncio le fermate. A volte si sentono le gazze, a volte la pioggia sul tetto. E io ho il termos, come tutti qui."],
["Come ci si comporta sul treno in Irlanda? Ci sono usanze?","Si fa la fila con calma, si ringrazia sempre, e si dice “sorry” ogni quattro secondi, anche quando è colpa di qualcun altro. Se un estraneo ti attacca bottone, rispondi: è il modo di dire che sei ben accetto. E “thanks a million”, grazie mille, si dice davvero a chiunque, anche alla capotreno."],
["Cosa mangiate dopo il turno? Qualcosa di tipico?","Un “chipper”, il negozio di fish and chips. Oppure la “spice bag”, un cartoccio di patatine, pollo fritto e spezie, nata a Dublino. E il panino con le patatine dentro, il “Tayto sandwich”: più nostalgia che cucina. Con una tazza di tè forte, naturalmente. A volte mi sembra di vivere di tè e patate."],
["Perché ci sono quelle ciminiere a strisce nella baia?","Sono le ciminiere di Poolbeg, alte circa 207 metri, a strisce rosse e bianche: erano parte di una centrale elettrica. Per i dublinesi sono un faro: se le vedi dal treno, sei quasi a casa. Un tempo c’era la Pigeon House, una stazione e un’area che faceva da porto. Le ami, o le odi, ma non le puoi ignorare."],
["Quando è nata la ferrovia a Dublino?","Nel 1834 aprì la Dublin and Kingstown Railway, la prima ferrovia d’Irlanda, da Dublino a Kingstown, oggi Dún Laoghaire. Il DART segue ancora quella linea lungo la costa. Pensa: oltre cent’anni prima di me, qualcuno aveva già pensato di guardare il mare dal finestrino."],
["Come si dice “buon viaggio” o “a presto” in irlandese?","“Slán abhaile”: torna a casa sano. “Slán go fóill”: arrivederci per ora. “Oíche mhaith”: buonanotte. E la benedizione più bella: “Go n-éirí an bóthar leat”, che la strada si alzi per venirti incontro. Provale: i dublinesi sorridono sempre."],
["Che consiglio mi dai per la mia ultima notte a Dublino?","Passeggia lungo il fiume, guarda il Samuel Beckett Bridge illuminato, poi sali sull’ultimo DART con un fish and chips caldo. Guarda fuori dal finestrino: la baia di notte è una collana di luci. Se piove, tanto meglio: Dublino è bella anche bagnata, soprattutto di notte."],
["Ti ringrazio, ora devo proseguire la mia passeggiata. Posso salutarti?","Certo, e buon viaggio! Il varco ti aspetta in fondo al binario. Slán abhaile, Pierpaolo: torna sano e salvo, e torna a trovarci, quando vuoi."]
];

/* ================= PERSONAGGI ================= */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Pádraig: giacca verde da guardaparco, cappello a tesa, termos di tè, binocolo al collo */
 NP('db_padraig',NAME.db_padraig,800,GREET.db_padraig,{skin:'#e0a888',top:'#3a6a3a',bot:'#4a4a3a',hair:'#8a8a8a',s:1.02},(g,b,t)=>{el(g,'#4a4a32',0,-112+b,17,4.6);poly(g,'#4a4a32',[[-9,-113+b],[9,-113+b],[7,-122+b],[-7,-122+b]]);rect(g,'#2a4a2a',-11,-80+b,22,4);ln(g,'#2a2a2e',1.6,[-7,-92+b,0,-80+b,7,-92+b]);rect(g,'#2a2a2e',-5,-82+b,10,6);rect(g,'#9a9ca2',16,-72,6,14);rect(g,'#2a7a4a',16,-76,6,4)}),
 /* Arthur Guinness: parrucca bianca, marsina scura, panciotto, boccale di birra scura */
 NP('db_guinness',NAME.db_guinness,4100,GREET.db_guinness,{skin:'#e0b896',top:'#3a2a24',bot:'#2a2630',hair:'#f0ece4',long:1,s:1.02},(g,b,t)=>{el(g,'#f0ece4',0,-112+b,13,9);dot(g,'#f0ece4',-11,-104+b,4);dot(g,'#f0ece4',11,-104+b,4);rect(g,'#c8b078',-4,-90+b,8,22);rect(g,'#f4f0e6',-6,-91+b,12,4);rect(g,'#f4f0e6',14,-74,9,12);rect(g,'#14110f',14,-70,9,8);rect(g,'#f4f0e6',14,-74,9,3);rect(g,'#c8a050',22,-72,3,6)}),
 /* Mick: coppola grigia, giacca di pile, termos, cartellino del taxi */
 NP('db_mick',NAME.db_mick,6280,GREET.db_mick,{skin:'#d8a078',top:'#3a4a6a',bot:'#2a2a36',hair:'#9a9a9a',s:1.04},(g,b,t)=>{el(g,'#6a6a72',0,-112+b,17,4.6);poly(g,'#6a6a72',[[-10,-113+b],[10,-113+b],[8,-121+b],[-8,-121+b]]);rect(g,'rgba(255,255,255,.18)',-11,-88+b,22,2);rect(g,'#f2c82a',-4,-76+b,10,6);rect(g,'#14110f',-3,-75+b,8,1.4);rect(g,'#9a9ca2',16,-72,6,14);rect(g,'#c8281e',16,-76,6,4)}),
 /* Aoife: zaino, sciarpa di Trinity, capelli rossi sciolti, libro sotto il braccio */
 NP('db_aoife',NAME.db_aoife,11230,GREET.db_aoife,{skin:'#ecc4a4',top:'#5a2a4a',bot:'#2a3a5a',hair:'#b8481e',long:1,s:.98},(g,b,t)=>{rect(g,'#2a2a2e',-17,-84+b,8,30);rect(g,'#2a3a6a',-8,-92+b,16,5);rect(g,'#c8281e',-8,-90+b,16,2);rect(g,'#8a2a2a',10,-72,12,15);rect(g,'#f4f0e6',11,-71,10,2)}),
 /* Cian: cappello di lana, giacca consumata, custodia aperta con le monete, violino */
 NP('db_cian',NAME.db_cian,13575,GREET.db_cian,{skin:'#d8a078',top:'#6a5a3a',bot:'#3a3a46',hair:'#4a2a1a',s:1.0},(g,b,t)=>{el(g,'#2a3a4a',0,-114+b,13,7);rect(g,'#2a3a4a',-11,-118+b,22,6);rect(g,'#2a2a2e',-22,-12,26,10);rect(g,'#6a2a2a',-20,-11,22,3);dot(g,'#e8c04a',-14,-12,1.6);dot(g,'#e8c04a',-8,-12,1.6);el(g,'#9a5a22',14,-76+b,10,6);rect(g,'#6a3a14',12,-76+b,2,12);ln(g,'#c8a050',1.4,[8,-90+b,20,-70])}),
 /* Wilde: giacca di velluto, garofano verde, papillon, capelli lunghi, guanto e bastone */
 NP('db_wilde',NAME.db_wilde,16080,GREET.db_wilde,{skin:'#ecc8a8',top:'#2a5a3a',bot:'#2a2a36',hair:'#5a4030',long:1,s:1.02},(g,b,t)=>{rect(g,'#f4f0e6',-7,-91+b,14,5);poly(g,'#8a2a3a',[[-5,-88+b],[5,-88+b],[0,-84+b]]);dot(g,'#5ac860',8,-80+b,3);ln(g,'#14110f',2,[16,-62,24,-14]);dot(g,'#e8c04a',16,-64,3)}),
 /* Declan: grembiule nero, camicia bianca arrotolata, strofinaccio, pinta di Guinness */
 NP('db_declan',NAME.db_declan,20750,GREET.db_declan,{skin:'#e0a888',top:'#e8e4d8',bot:'#2a2a36',hair:'#b8481e',s:1.04},(g,b,t)=>{rect(g,'#14110f',-11,-76+b,22,34);rect(g,'#2a2a2e',-11,-76+b,22,3);rect(g,'#f4f0e6',-14,-92+b,10,5);rect(g,'#f4f0e6',16,-74,9,12);rect(g,'#14110f',16,-70,9,8);rect(g,'#f4f0e6',16,-74,9,3)}),
 /* Orla: divisa verde del DART, giubbotto catarifrangente, fischietto, radio */
 NP('db_orla',NAME.db_orla,23700,GREET.db_orla,{skin:'#e0b090',top:'#1f6a3a',bot:'#2a2a36',hair:'#3a2a1a',long:1,s:1.0},(g,b,t)=>{rect(g,'#e8d020',-11,-82+b,22,6);rect(g,'#e8d020',-11,-66+b,22,3);rect(g,'#f4f0e6',-12,-114+b,24,5);rect(g,'#14110f',-12,-114+b,24,2);rect(g,'#2a2a2e',12,-86+b,5,10);ln(g,'#9a9ca2',1,[14,-86+b,14,-92+b])})
];
/* ================= OGGETTI LUNGO IL PERCORSO ================= */
const LX=[400,1000,1550,1950, 2650,3250,3850,4350, 5000,5500,6000,6550, 7350,7900,8450,8950, 9800,10350,10950,11500, 12200,12750,13300,13850,14350, 15050,15800,16500, 17500,18200,18850, 19800,20450,21050,21600, 22400,23200,24200];
const STOPS=['dbcervi','dbwell','dbcroce','dbaras','dbkilm','dbcortile','dbstore','dbcancello','dbchrist','dbgattotopo','dbrecord','dbdubh','dbtemple','dbmeeting','dbhapenny','dbliffey','dbtrin','dbcampa','dblib','dbsfera','dbgrafton','dbmolly','dbbewley','dbfus','dbstagno','dbporte','dbwilde','dbleinster','dbspire','dbgpo','dboconnell','dbcustom','dbfame','dbbeckett','dbpub','dbconn','dbdart','dbvarco'];
PR.dbvarco=DB((g,x,y,t,a,k)=>{const p=.5+.5*Math.sin(t*2);const gr=g.createLinearGradient(x,y-200,x,y);gr.addColorStop(0,'rgba(255,250,220,0)');gr.addColorStop(1,'rgba(255,250,220,'+(.35+.2*p)+')');g.fillStyle=gr;g.fillRect(x-60,y-200,120,200);rect(g,'rgba(255,255,240,.9)',x-3,y-190,6,190);for(let q=0;q<14;q++)dot(g,'rgba(255,250,220,'+(.3+.3*Math.sin(t*3+q))+')',x+Math.sin(q*2.1+t)*40,y-20-q*13,1.6)});
const props=[];
LX.forEach((x,i)=>props.push([STOPS[i],x]));
/* targhe bilingui all'inizio di ogni zona */
const TG=[['Páirc an Fhéinix','Phoenix Park'],['Cill Mhaighneann','Kilmainham'],['Teampall Chríost','Christ Church'],['Barra an Teampall','Temple Bar'],['Coláiste na Tríonóide','Trinity College'],['Sráid Ghrafton','Grafton Street'],['Cearnóg Mheiriún','Merrion Square'],['Sráid Uí Chonaill','O’Connell Street'],['Duganna','Docklands'],['Stáisiún Uí Chonghaile','Connolly Station']];
const near=x=>LX.some(l=>Math.abs(l-x)<150)||npcs.some(n=>Math.abs(n.x-x)<130);
for(let z=0;z<10;z++){const a=Z[z],b=Math.min(Z[z+1],W1);
 if(!near(a+110))props.push(['dbtarga',a+110,TG[z]]);
 for(let x=a+280,q=0;x<b-80;x+=250+(q%3)*40,q++){
  let xx=x;for(let tries=0;tries<4&&near(xx);tries++)xx+=60;
  if(near(xx))continue;
  const kind=z==0?['dblamp','dbpanca','dbcestino','dbgatto']:z==9?['dblamp','dbcestino','dbpanca','dbbici']:['dblamp','dbletter','dbbici','dbcestino','dbpanca','dbtaxi','dbbus','dbfiori','dbgatto'];
  const kd=kind[(q+z*2)%kind.length];
  props.push([kd,xx,kd=='dbgatto'?['#3a3a3e','#c88a3a','#e8e4d8'][q%3]:kd=='dbfiori'?q:undefined]);
 }}
props.sort((p,q)=>p[1]-q[1]);
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
const LV=fn=>(g,o,t)=>{TT=t;fn(g,o,t)};
addWorld({id:'dublino',name:'Dublino · Dall’alba nel Phoenix Park alla notte sul DART',width:W1,sky:['#9aa4c4','#f2b8b0','#ffd9b8'],gt:GT,gr:['#8a8e92','#6a6e72'],chord:[196,246.9,293.7,392],amb:'#ffe2b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{TT=t;gdraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerRoofs)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();
