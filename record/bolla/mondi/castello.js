/* ---------- 4. CAGLIARI · CASTELLO (vicoli fino al Bastione) ---------- */
(function(){
const WL=2640;                                  /* oltre questa x finiscono i palazzi: si apre il panorama */
const PAL=['#e8c88a','#d9a066','#f0dcae','#c88a6a','#e8b8a0','#d8c08a','#b8a07a','#e0b890'];
function facciata(g,x,w,top,r,i,t,gt){
 const c=PAL[(i*3+Math.floor(r*8))%8];rect(g,c,x,top,w,gt-top);rect(g,'rgba(0,0,0,.10)',x+w-14,top,14,gt-top);rect(g,'rgba(255,255,255,.12)',x,top,6,gt-top);
 rect(g,'#9a6a4a',x-2,top-8,w+4,10);rect(g,'rgba(0,0,0,.18)',x-2,top+2,w+4,5);
 const rows=Math.floor((gt-top-60)/78);
 for(let rw=0;rw<rows;rw++)for(let k=0;k<2;k++){const wx=x+22+k*(w-70)/1.0*0.5+(k?8:0),wy=top+22+rw*78;
  rect(g,'#3a2e22',wx-2,wy-2,34,52);rect(g,hr(i*9+rw*3+k)>.4?'#ffd878':'#6a8aa8',wx,wy,30,48);
  rect(g,'#2a6a5a',wx-12,wy-2,12,52);rect(g,'#2a6a5a',wx+30,wy-2,12,52);rect(g,'#3a2e22',wx+14,wy,2,48);
  if(rw==rows-1&&hr(i+k)>.45){rect(g,'#2a2a2a',wx-8,wy+50,48,4);for(let b=0;b<7;b++)rect(g,'#2a2a2a',wx-6+b*6.5,wy+54,2,12);}
  if(rw==0&&hr(i*2+k)>.5){for(let q=0;q<4;q++)rect(g,['#e8505a','#f4f4ee','#2a7ae0','#ffd21e'][q],wx-6+q*12+Math.sin(t*2+q+i)*1.2,wy+52+Math.abs(Math.sin(q))*3,10,14);rect(g,'#444',wx-10,wy+52,52,1.5)}}
 if(hr(i+5)>.55){rect(g,'#3a2418',x+w/2-16,gt-62,32,62);g.fillStyle='#3a2418';g.beginPath();g.arc(x+w/2,gt-62,16,Math.PI,0);g.fill();rect(g,'rgba(255,230,150,.35)',x+w/2-10,gt-56,20,6)}}
addWorld({id:'castello',name:'Castello · Verso il Bastione',width:3300,sky:['#8fc4f2','#c6e0f2','#fdeccc'],gt:372,gr:['#a89478','#8a7658'],chord:[196,246.9,293.7,370],amb:'#ffe9a0',
 intro:'Selciato, scalini e vicoli stretti: il Castello profuma di pietra al sole e di cucina. In fondo, dall’alto, c’è il mare.',
 look:[[800,'Vicoli stretti, panni stesi tra un balcone e l’altro, portoni scuri. Tutto sembra fatto per rallentare.'],[1500,'Torri pisane, archi, finestre con le persiane. Un gatto sorveglia i muretti.'],[2250,'Davanti alla Cattedrale la piazza si allarga. Il suono delle campane scende dalle pietre.'],[9999,'Il vicolo si apre: il Bastione, il cielo enorme, e giù la città, lo stagno, il mare.']],
 gdraw:(g,cam,t)=>{const gt=372;rect(g,'rgba(0,0,0,.18)',0,gt,W,6);for(let r=0;r<5;r++){const yy=gt+10+r*17,off=(r%2)*18;each(cam,36+r*4,20+r,(x,i,rr)=>{rect(g,'rgba(0,0,0,.14)',x+off,yy,30+r*4,2);rect(g,'rgba(255,255,255,.07)',x+off+2,yy+3,12,2);if(rr>.7)rect(g,'rgba(0,0,0,.08)',x+off+6,yy-8,14,8)})}},
 back:[
  {k:.03,fn:(g,o)=>each(o,330,1,(x,i,r)=>cloud(g,x+r*100,50+r*50,.9+r*.5))},
  {k:1,fn:(g,o,t)=>{const gt=372;
    /* panorama fisso a destra, nel mondo */
    const px=WL-o;if(px<W){const X=Math.max(0,px);const gr=g.createLinearGradient(0,0,0,gt);gr.addColorStop(0,'#7fb8ee');gr.addColorStop(.7,'#c9e4f0');gr.addColorStop(1,'#fdeccc');g.fillStyle=gr;g.fillRect(X,0,W,gt);
     g.fillStyle='#2f8fcf';g.fillRect(X,gt-96,W,60);for(let i=0;i<14;i++)rect(g,'rgba(255,255,255,'+(.3+.3*Math.sin(t*2+i*2))+')',X+((i*57+t*8)%(W)),gt-92+(i%5)*10,12,1.5);
     poly(g,'#7a8a6a',[[X+200,gt-96],[X+300,gt-160],[X+380,gt-186],[X+450,gt-150],[X+480,gt-168],[X+600,gt-96]]);
     g.fillStyle='#c2a070';g.fillRect(X,gt-60,W,24);const pal=['#e8c88a','#d9a066','#f0dcae','#c88a6a','#e8b8a0'];for(let i=0;i<26;i++){const h=18+hr(i+4)*38;rect(g,pal[i%5],X+i*17,gt-36-h,15,h);rect(g,'rgba(60,40,30,.4)',X+i*17+4,gt-36-h+6,3,5)}
     el(g,'rgba(246,160,190,.55)',X+110,gt-52,70,9)}
    /* palazzi su entrambi i lati: la strada stretta */
    each(o,230,3,(x,i,r)=>{const wx=i*230;if(wx>WL-230||wx<-230)return;const top=70+hr(i*5)*60;facciata(g,x,226,top,r,i,t,gt)});
    rect(g,'rgba(0,0,0,.18)',0,gt-14,Math.max(0,px),14);
    /* parte alta del vicolo ombreggiata */
    const sh=g.createLinearGradient(0,0,0,150);sh.addColorStop(0,'rgba(0,0,0,0)');sh.addColorStop(1,'rgba(20,10,0,.12)');g.fillStyle=sh;g.fillRect(0,0,Math.max(0,Math.min(W,px)),150)}}],
 mid:[{k:1,fn:(g,o,t)=>{each(o,300,6,(x,i,r)=>{const wx=i*300+r*40;if(wx>WL-60)return;g.strokeStyle='#3a3a3a';g.lineWidth=1.2;g.beginPath();g.moveTo(x-20,150+r*10);g.quadraticCurveTo(x+50,190+r*10+Math.sin(t+i)*2,x+140,150+r*10);g.stroke();for(let q=0;q<4;q++)rect(g,['#f4f4ee','#e8505a','#2a7ae0','#ffd21e'][(q+i)&3],x+4+q*30+Math.sin(t*1.5+q)*1,166+r*10+Math.sin(q*1.7)*6,18,24)})}}],
 props:[['lamp',150],['fioriera',330,'#e8505a'],['gradini',520],['torre',760],['lamp',980],['fioriera',1120,'#ffd21e'],['fountain',1380],['lamp',1560],['gradini',1700],['cattedrale',2030],['lamp',2230],['fioriera',2380,'#ff7ab0'],['cavalletto',2470],['panchina',2750],['balaustra',3010],['sremy',3170],['palm',2900,110],['palm',3250,100]],
 npcs:[
  {id:'gatto',name:'Il gatto del Castello',x:420,draw:(g,x,y,t,f)=>{g.save();g.translate(x,y);g.scale(f,1);const b=Math.sin(t*2)*1;el(g,'#8a8a96',0,-14+b,24,14);dot(g,'#8a8a96',22,-26+b,11);poly(g,'#8a8a96',[[14,-34+b],[16,-46+b],[22,-36+b]]);poly(g,'#8a8a96',[[22,-36+b],[28,-46+b],[31,-32+b]]);dot(g,'#ffe27a',25,-27+b,2.5);dot(g,'#ffe27a',18,-27+b,2.5);g.strokeStyle='#8a8a96';g.lineWidth=5;g.lineCap='round';g.beginPath();g.moveTo(-22,-14+b);g.quadraticCurveTo(-42,-20+b,-36,-44+Math.sin(t*2.5)*5);g.stroke();g.lineCap='butt';rect(g,'#7a7a86',-12,-4,6,4);rect(g,'#7a7a86',10,-4,6,4);g.restore()},d:{a:{t:`Mrrrau. Sì, parlo io. Questo muretto è mio, il sole delle undici anche, e tu stai camminando sul mio vicolo. Ma sei gentile: ti concedo cinque minuti.`}}},
  {id:'annetta',name:'Zia Annetta',x:900,draw:(g,x,y,t,f)=>fig(g,x,y,t,{f,s:.94,skin:'#dcb894',top:'#222',bot:'#222',long:1,hair:'#222',acc:(g,b)=>{poly(g,'#111',[[-14,-112+b],[0,-124+b],[15,-110+b],[14,-92],[-14,-92]]);rect(g,'#6a4a2a',20,-30,22,30);rect(g,'#6a4a2a',20,-30,4,30);rect(g,'#6a4a2a',38,-30,4,30)}}),d:{a:{t:`Bonasera, bellu! Vieni, vieni, non startene lì sulla strada come uno che ha perso l’autobus. Qui si parla seduti e si mangia in piedi, così dicono.`}}},
  {id:'lorenzo',name:'Lorenzo',x:1260,draw:(g,x,y,t,f)=>fig(g,x,y,t,{f,skin:'#e0b48c',top:'#3a7a5a',bot:'#4a4a5a',hair:'#3a2418',acc:(g,b)=>{rect(g,'#8a5a2a',-18,-86+b,8,38);rect(g,'#f4f4ee',20,-70,18,24);rect(g,'#444',20,-70,18,3)}}),d:{a:{t:`Ciao! Scusa, stavo misurando a occhio la distanza tra due pietre: deformazione professionale. Studio architettura e il Castello è la mia aula preferita. Ti faccio da guida?`}}},
  {id:'salvatore',name:'Don Salvatore',x:2090,draw:(g,x,y,t,f)=>fig(g,x,y,t,{f,skin:'#d8b090',top:'#1a1a22',bot:'#1a1a22',long:1,hair:'#ccc',acc:(g,b)=>{rect(g,'#f4f4ee',-6,-92+b,12,4);rect(g,'#6a4a2a',24,-90,3,90);dot(g,'#d9b24a',25.5,-94,4)}}),d:{a:{t:`Buongiorno, figliolo. Le campane hanno suonato da poco, ma non si arrabbiano se arrivi in ritardo. Io custodisco queste pietre e il loro silenzio: dimmi, che cosa cerchi?`}}},
  {id:'marta',name:'Marta',x:2540,draw:(g,x,y,t,f)=>fig(g,x,y,t,{f,skin:'#e8b890',top:'#c8503a',bot:'#4a4a6a',hair:'#8a4a2a',acc:(g,b)=>{dot(g,'#8a4a2a',-6,-110+b,6);rect(g,'#7a5a32',24,-80,3,40);dot(g,'#e8b868',33,-84,3);dot(g,'#5a8ad8',37,-78,3);g.strokeStyle='#7a5a32';g.lineWidth=2;g.beginPath();g.moveTo(14,-76);g.lineTo(28,-90);g.stroke()}}),d:{a:{t:`Shhh, aspetta, la luce sta per cambiare… ecco, fatto. Ciao! Dipingo scorci: un balcone, un arco, la Sella del Diavolo in fondo. Ogni giorno la stessa vista diventa un quadro diverso.`}}},
  {id:'violinista',name:'Il violinista',x:2900,draw:(g,x,y,t,f)=>fig(g,x,y,t,{f,skin:'#d8a880',top:'#6a2a3a',bot:'#222',hair:'#222',acc:(g,b)=>{el(g,'#a85a2a',-9,-84+b,9,6,-.4);g.strokeStyle='#5a3a1a';g.lineWidth=2;g.beginPath();g.moveTo(-14,-80+b);g.lineTo(-20,-100+b);g.stroke();g.strokeStyle='#ddd';g.lineWidth=1.5;g.beginPath();g.moveTo(8,-92);g.lineTo(-12,-76+b+Math.sin(t*4)*3);g.stroke();for(let i=0;i<3;i++)dot(g,'rgba(255,230,150,'+(.6-i*.15)+')',-30+Math.sin(t+i)*6,-110-i*16-(t*18+i*9)%14,2.5)}}),d:{a:{t:`Aspetta, finisco la frase musicale… ecco. Suono qui da quando le pietre ricordano. Il Bastione amplifica tutto: un sospiro, un violino, un addio. Che cosa vuoi sentire?`}}}
 ]});
})();

/* --- Battute: 30 per personaggio --- */
const TOPX_CS={
gatto:[
[`Come ti chiamano da queste parti?`,`Dipende dalla porta: Micio, Pippo, Signor Gatto. Io rispondo solo a chi mi porta qualcosa. Il nome vero è un profumo di pesce.`],
[`Che mi dici dei tuoi muretti?`,`Sono miei per diritto di sole: li scaldo io, li difendo io. Dall'alto si vede tutto e nessuno ti disturba.`],
[`Qual è il posto più bello del Castello?`,`Il muretto che prende il sole alle quattro. Poi dipende dall'umore: a volte vince l'ombra di un portone.`],
[`Come sono i vicoli di notte?`,`Silenziosi e pieni di ombre gentili. Si sente un piatto lontano, una finestra, un passo. Camminare piano è un'arte.`],
[`Hai paura del maestrale?`,`Paura no, rispetto sì. Arriva e rizza il pelo, poi pulisce il cielo. Dopo, le stelle sembrano appena lavate.`],
[`Chi ti dà da mangiare?`,`Zia Annetta, quando non guarda nessuno. Il resto lo procuro con una faccia innocente, che mi riesce benissimo.`],
[`Mi spieghi come si sta fermi?`,`Chiudi gli occhi, ascolta il tuo respiro, lascia che il tempo ti passi sopra come un fiume. Io ci lavoro da anni.`],
[`Che cosa guardi dal Bastione?`,`Il mare che cambia colore e le barche che sembrano giocattoli. Mi piace sapere che il mondo è grande e io sono comodo.`],
[`Hai amici nel quartiere?`,`Qualche gatto rivale, un violinista che mi suona la ninna nanna e una pittrice che mi mette nei quadri senza chiedere.`],
[`Perché i gatti sono così indipendenti?`,`Perché l'affetto, per essere vero, deve essere scelto. Io torno da chi mi vuole bene senza che nessuno mi chiami.`],
[`Mi dai un consiglio sulla fretta?`,`Non ne vale mai la pena. Chi corre perde la luce sulle pietre e il profumo del pane dal forno vicino.`],
[`Che sogni fai quando dormi?`,`Sogno un vicolo senza scalini dove il sole non finisce mai e ogni finestra ha un piatto di sardine.`],
[`Come riconosci chi è buono?`,`Dal modo in cui cammina: chi è buono non calpesta le ombre e si ferma ad ascoltare.`],
[`Cosa pensi della Cattedrale?`,`Fresca, silenziosa e con un pavimento perfetto per i pisolini. Don Salvatore finge di non vedermi, ed è un gentiluomo.`],
[`Mi racconti di una tua avventura?`,`Una volta sono finito su un balcone che non era mio: tre ore di panni stesi e una signora che parlava con le pentole.`],
[`Cosa ti fa arrabbiare?`,`Le porte chiuse all'ora del pranzo e i turisti con l'ombrello sbagliato. Il resto lo perdono con una stiracchiata.`],
[`Dimmi qualcosa di saggio.`,`La giornata perfetta è fatta di tre cose: sole, un muretto e qualcuno che sa quando non parlare.`],
[`Cosa ti piace del tramonto?`,`Il momento in cui le pietre diventano di miele. Anche io divento dorato, e tutti mi trovano più bello.`],
[`Le scalinate ti stancano?`,`Le scendo come un'onda e le salgo come un pensiero. È il corpo che ricorda, non la fatica.`],
[`Hai un luogo segreto?`,`Una nicchia dietro un vecchio portone: quando piove ci sto asciutto e ascolto l'acqua scivolare sulle pietre.`],
[`Come si fa a sentirsi a casa?`,`Trova un angolo che ti accolga e tornaci ogni giorno alla stessa ora. Presto sarà lui a cercarti.`],
[`Che rumore preferisci?`,`Le campane di mezzogiorno che si rincorrono. Fanno vibrare le pietre e anche i baffi.`],
[`Cosa pensi dei pittori?`,`Stanno fermi quasi quanto me. Per questo mi piacciono: rispettano il silenzio e il mio profilo migliore.`],
[`Mi parli del Poetto da qui?`,`Lo vedo come una linea chiara in fondo al mare. Un giorno ci vado, ma con calma: il Castello mi trattiene.`],
[`Come si ama un posto?`,`Ripetendolo. Stessi vicoli, stessi muretti, stessa luce. A un certo punto non sai più dov'è il confine tra te e lui.`],
[`Hai nostalgia di qualcosa?`,`Di una cucina con il camino e una mano che mi grattava dietro le orecchie. Non c'è più, ma il caldo resta.`],
[`Mi dai un rimedio contro l'ansia?`,`Siediti, allunga le zampe, guarda un punto lontano. Dopo un po' il punto lontano ti guarda e si calma.`],
[`Cosa insegni ai gattini?`,`Che si cade sempre in piedi se si ha il coraggio di saltare e l'umiltà di leccarsi le ferite.`],
[`Mi sai dire cos'è la felicità?`,`Un raggio di sole su un muretto, una ciotola piena, qualcuno che ti saluta per nome. Poi, il resto.`],
[`Ci vediamo ancora?`,`Certo. Io sono sempre qui: passa quando vuoi, ma porta qualcosa di buono. E non farmi fretta.`]
],
annetta:[
[`Come sta, Zia Annetta?`,`Gràtzias, bellu, bene! Un po' di schiena, ma i panni non si stendono da soli. E tu, hai mangiato?`],
[`Mi racconta dei panni stesi?`,`Ogni filo ha le sue storie: lenzuola bianche come la domenica, camicie che ballano al vento. È la bandiera del quartiere.`],
[`Che cosa sta cucinando?`,`Malloreddus con salsiccia e pomodoro, un piatto da famiglia. Ci vogliono mani calde e un po' di pazienza.`],
[`Mi dà una ricetta di casa?`,`Prendi del buon pane, pomodori maturi, olio, aglio e basilico. Niente di più: il resto lo fa la mano di chi ama.`],
[`Come si faceva da piccola?`,`Si giocava in strada fino al tramonto, poi una voce dalla finestra ti chiamava per nome e tutti correvano a casa.`],
[`Che cosa pensa del Castello?`,`È il cuore vecchio di Cagliari: stretto, ripido, ma pieno di storie. Chi ci è nato non lo lascia mai davvero.`],
[`Che mi dice del maestrale?`,`Ci porta via la polvere e le brutte idee. Si prende i panni a volte, ma ce li restituisce sempre.`],
[`Mi insegna una parola in sardo?`,`Ajò! Vuol dire andiamo, forza, dai: serve per tutto. Anche per dire a un nipote di sedersi a tavola.`],
[`Come si fa il pane in casa?`,`Farina, acqua, lievito e braccia. Si impasta la sera e si cuoce all'alba. Il profumo sveglia anche i santi.`],
[`Che cosa le manca di più?`,`Le voci di una volta: i vicini che si chiamavano dai balconi, i bambini nelle scale. Ora le ricordo a occhi chiusi.`],
[`Mi parla della festa di Sant'Efisio?`,`Il primo maggio la città si veste a festa. Costumi, fiori, canti: si piange e si ride insieme, come in famiglia.`],
[`Come si sente la domenica?`,`Si sente dalla messa e dal sugo che borbotta. È il giorno in cui anche i gatti rallentano il passo.`],
[`Mi dà un consiglio per la vita?`,`Mangia caldo, saluta chi incontri e non portare rancore la sera. Il cuore dorme meglio così.`],
[`Mi racconta di suo marito?`,`Bonu e testardo come una pietra. Mi portava il caffè la mattina e mi diceva che ero la sua stella. Lo ricordo ogni giorno.`],
[`E dei suoi figli?`,`Sparsi per il mondo, ma mi telefonano sempre. Io rispondo con una voce allegra e le lacrime per dopo.`],
[`Che cosa le piace sentire?`,`Il rumore di una pentola sul fuoco e di bambini che ridono nei vicoli. Sono musiche che non passano mai.`],
[`Come si preparano i dolci?`,`Mandorle, miele, scorza di limone: ci vuole il tempo di una chiacchierata. Le papassinas sono per i giorni di festa.`],
[`Perché ama i vicoli?`,`Perché ti costringono a guardarti negli occhi. In una via stretta non si può fingere di non vedere nessuno.`],
[`Mi dà un consiglio sulla solitudine?`,`Apri la finestra e saluta. Una parola ben messa vale più di una casa vuota.`],
[`Cosa pensa dei turisti?`,`Alcuni camminano veloci, altri si fermano e ascoltano. A quelli che ascoltano offro sempre un caffè.`],
[`Come sono le sere d'estate?`,`Sedie fuori dai portoni, ventagli, chiacchiere fino a tardi. Il quartiere diventa una grande sala da pranzo.`],
[`Che cosa le dà forza?`,`La fede e un buon piatto di minestra. E il pensiero che qualcuno, da qualche parte, pensa a me.`],
[`Mi racconta una storia del Castello?`,`Si dice che le mura abbiano orecchie e il cuore: ricordano ogni passo e ogni sospiro. Per questo parlo sempre bene di tutti.`],
[`Come si fa a perdonare?`,`Si guarda l'altro come lo guardava sua madre. Poi si offre un caffè. Il resto arriva da solo.`],
[`Cosa mi consiglia di mangiare?`,`Fregola con le arselle, se c'è. Altrimenti pane carasau con un filo d'olio: povero ma onesto.`],
[`Ha un sogno ancora?`,`Rivedere tutta la famiglia attorno alla stessa tavola. Basta un pranzo di domenica e il mondo è a posto.`],
[`Come si ricorda una persona cara?`,`Con un gesto suo: il caffè, la preghiera, il modo di dire buongiorno. Così continua a camminare con noi.`],
[`Cosa ne pensa dei giovani?`,`Hanno fretta e occhi lucidi. Basta mettere loro un piatto davanti e si ricordano di essere figli.`],
[`Mi dà la sua benedizione?`,`Che il cammino ti sia leggero, la tavola piena e il cuore sempre aperto. Gràtzias, bellu, torna a trovarmi.`],
[`Cosa le piace del Bastione?`,`La scalinata larga dove i ragazzi si siedono a chiacchierare. Da lì il mondo sembra un grande tavolo apparecchiato.`]
],
lorenzo:[
[`Chi sei e che fai qui?`,`Lorenzo, studente di architettura. Faccio il giro del Castello con il quaderno: ogni pietra è una lezione gratuita.`],
[`Che mi dici delle mura pisane?`,`Sono le difese che hanno protetto la città alta per secoli. Guardale da vicino: ogni blocco racconta il lavoro di mani anonime.`],
[`E la Torre di San Pancrazio?`,`È una delle due grandi torri medievali di Cagliari: sobria, alta, con una vista che ti fa respirare. Una sentinella di pietra.`],
[`Parlami della Torre dell'Elefante.`,`Prende il nome dall'elefantino scolpito in una nicchia. Una torre robusta, che ricorda quanto la città sia sempre stata di confine e di porto.`],
[`Cosa ti piace dei vicoli?`,`Sono stretti per difendersi dal sole e dal vento. Gli architetti d'oggi li chiamano soluzioni climatiche, i cagliaritani li chiamano casa.`],
[`Che cos'è il Bastione di Saint Remy?`,`Una grande terrazza con scalinata monumentale, costruita dopo il tempo delle mura. Dalla cima la città si apre come un teatro.`],
[`Da dove si vede meglio il panorama?`,`Dal Bastione al tramonto: la Marina sotto, Sant'Elia a destra, lo stagno in fondo. Una mappa viva con tutti i colori.`],
[`Come si legge una città?`,`Camminando piano e alzando gli occhi: i portali, le grondaie, i balconi. Una facciata è una pagina scritta da generazioni.`],
[`Che differenza c'è tra Castello e Marina?`,`Il Castello è alto e antico, un quartiere di pietra e silenzi. La Marina è bassa, di porto, di commerci e voci. Due modi di vivere la stessa città.`],
[`Perché le pietre sono color miele?`,`Il calcare locale cattura la luce e la restituisce calda. Al tramonto il Castello sembra acceso da dentro.`],
[`Cosa studi di preciso?`,`Come i luoghi accolgono le persone: una scala che invita a sedersi, una piazza che fa parlare. L'architettura è gentilezza costruita.`],
[`Hai un sogno da architetto?`,`Restaurare una casa del Castello e farci vivere una famiglia vera, con panni stesi e voci alle finestre.`],
[`Come proteggere un quartiere antico?`,`Abitandolo. Una casa abitata resiste meglio di un monumento chiuso, e le pietre amano sentire passi.`],
[`Mi racconti una curiosità?`,`Molti vicoli finiscono su una piazzetta inaspettata o su una terrazza sul mare. Il Castello ama le sorprese.`],
[`Come si disegna un vicolo?`,`Con linee semplici e ombre decise. Il bello è l'imperfezione: nessun muro qui è davvero dritto.`],
[`Che cosa pensi della Cattedrale?`,`Un edificio che ha cambiato volto più volte: dentro e fuori raccontano epoche diverse. È come una persona con molti ricordi.`],
[`Come gestisci la fatica delle scale?`,`Le conto, poi smetto di contarle. A metà salita ti accorgi che sei già in alto.`],
[`Cosa ti ha insegnato questa città?`,`Che il tempo non cancella: si deposita. Ogni epoca lascia uno strato, e noi camminiamo sopra tutti.`],
[`Come immagini il Castello tra cent'anni?`,`Uguale ma più curato, con meno auto e più voci. Spero che qualche gatto resti sempre sui muretti.`],
[`Cosa ti piace del maestrale?`,`Lo spazza-cielo: dopo il suo passaggio la visibilità è perfetta e ogni profilo sembra disegnato con la matita fine.`],
[`Mi dai una dritta per camminare qui?`,`Parti presto, scarpe comode, niente mappa all'inizio: perditi un po'. I vicoli ti riportano sempre in qualche punto bello.`],
[`Cosa pensi dei balconi?`,`Sono piccoli palchi: piante, panni, voci. Chi li ignora perde il vero spettacolo del quartiere.`],
[`Mi spieghi i portali antichi?`,`Spesso sono la parte più curata di una casa: una soglia importante. Ti dicono chi eri disposto a far entrare.`],
[`Cosa vedi dalla terrazza della Torre?`,`Il mare che si stende, i tetti rossi, le gru del porto. Una città che lavora e sogna nello stesso respiro.`],
[`Come si fa a restare curiosi?`,`Chiedendosi ogni giorno cosa non hai ancora notato. Anche nel posto che conosci meglio c'è un dettaglio nuovo.`],
[`Hai una zona preferita del Castello?`,`Un angolo con una scala stretta che sbuca sul mare: ci vado quando devo prendere una decisione.`],
[`E i colori delle case?`,`Ocra, rosa, terra bruciata: nati dai materiali e addolciti dal sole. Una tavolozza che nessun designer saprebbe inventare.`],
[`Cosa serve per amare una città?`,`Passeggiarla in ore diverse e farsi sorprendere. All'alba, a mezzogiorno e a sera sono tre città diverse.`],
[`Mi lasci un pensiero da portare con me?`,`Guarda in alto, cammina piano e fermati quando una pietra ti sembra viva. Probabilmente lo è.`],
[`Ci vediamo al Bastione?`,`Volentieri: porto il quaderno, tu porta gli occhi. Il tramonto ci guarda già.`]
],
salvatore:[
[`Chi è lei, Don Salvatore?`,`Il custode di questa casa di pietra e silenzio. Apro le porte, accendo le candele e ascolto chi entra.`],
[`Cos'è la Cattedrale per Cagliari?`,`Un cuore antico che ha visto battesimi, matrimoni e lutti. Le pietre sono state testimoni di molte preghiere.`],
[`Mi parla del silenzio?`,`Qui non è assenza ma presenza. Si sente il respiro delle volte e a volte anche qualche pensiero che ti parla.`],
[`Come suonano le campane?`,`Come una voce amica da lontano: ti richiamano all'ora, alla festa, al ricordo. Ogni rintocco mette ordine nel cuore.`],
[`Cosa insegna la fede?`,`A fidarsi anche quando non si vede. A camminare con una piccola luce, che basta per il passo successivo.`],
[`Mi racconta di un giorno speciale?`,`La festa del primo maggio: la gente prega, canta, porta fiori. Si sente la città intera che si prende per mano.`],
[`Come si prega?`,`Anche solo con il respiro. Un grazie sussurrato in un vicolo vale quanto mille parole in una navata.`],
[`Cosa pensa dei dubbi?`,`Sono finestre aperte. Chi non dubita non cerca. Il Signore non si offende se gli fai domande oneste.`],
[`Che ricordi ha di questo posto?`,`Un bambino che accendeva una candela con le mani tremanti. Era piccolo, ma la fiamma era enorme. Quel bambino sono io.`],
[`Come si fa pace con il passato?`,`Si accende una luce per ciò che è stato e si ringrazia. Poi si lascia andare, come si lascia andare un uccello.`],
[`Ha un'ironia segreta?`,`Dico che il mio lavoro è tenere le chiavi, ma le uniche porte che apro davvero sono quelle dei cuori. Poche, ma belle.`],
[`Che cosa le dà pace?`,`Un banco vuoto alle sei del mattino e la luce che entra obliqua. Sembra che il tempo si tolga il cappello.`],
[`Perché le persone entrano qui?`,`Chi per curiosità, chi per dolore, chi per nostalgia. Tutti escono con qualcosa in più, anche solo un respiro.`],
[`Cosa vede dal sagrato?`,`Il quartiere che si sveglia, i panni che sventolano, un gatto che attraversa. La vita ordinaria, che è sacra.`],
[`Mi dà un consiglio per la sera?`,`Prima di dormire ringrazia per tre cose piccole. La notte sarà più morbida e il mattino più gentile.`],
[`Mi parla della memoria?`,`È un modo di essere fedeli. Ricordare significa tenere vivo chi non c'è più e dare un senso a ciò che resta.`],
[`Cosa pensa del maestrale?`,`Entra dal portone e fa ballare le fiammelle. Sembra che gli angeli passino a salutare.`],
[`Come si sopporta il dolore?`,`Non da soli. Un abbraccio, una candela, una presenza: il dolore diviso diventa un peso che si può portare.`],
[`Cosa insegna ai ragazzi?`,`Che il silenzio non è noioso. Se impari ad ascoltarlo, scopri che dentro hai una voce che sa dirti cose vere.`],
[`Ha paura del tempo che passa?`,`A volte sì, poi ricordo che il tempo è un dono prima di essere un conto. Un giorno ben vissuto basta per tutti.`],
[`Mi racconta della musica sacra?`,`Un coro che sale fino alla volta e torna giù come pioggia buona. Lì la bellezza e la preghiera sono la stessa cosa.`],
[`Come si fa ad avere speranza?`,`Guardando le candele che si accendono una dopo l'altra. Una sola luce è piccola, tante fanno una notte diversa.`],
[`Che cosa pensa dei turisti?`,`Entrano con la macchina fotografica e a volte escono con il cuore in mano. Dio fa i suoi miracoli anche così.`],
[`Mi dà un consiglio sull'umiltà?`,`Impara a dire grazie e scusa nella stessa giornata. Sono le due parole che tengono in piedi le case.`],
[`C'è un angolo preferito?`,`Una cappella laterale dove la luce cade su una statua come una carezza. Ci vado quando ho bisogno di silenzio vero.`],
[`Cosa fa nei giorni di pioggia?`,`Ascolto l'acqua sul tetto e lascio che il tempo scivoli. È il mio concerto preferito, senza spartito.`],
[`Come consola chi piange?`,`Non con parole belle ma con una sedia vicina. Spesso basta esserci, in silenzio, finché passa la tempesta.`],
[`Mi parla della gratitudine?`,`È il modo più semplice di pregare. Dire grazie per un pane, un amico, una giornata di sole: ecco, ho già pregato.`],
[`Come si ritrova la pace?`,`Camminando piano, respirando e accendendo una piccola luce dentro. Il resto arriva da solo, a suo tempo.`],
[`Mi lascia una benedizione?`,`Vai in pace, figlio mio. Che le strade ti siano amiche e che la sera ti trovi con il cuore sereno.`]
],
marta:[
[`Chi sei e cosa dipingi?`,`Marta, pittrice di scorci. Dipingo i vicoli del Castello con il cavalletto in spalla: la luce qui è la mia maestra.`],
[`Che colori usi di più?`,`Ocra, terra di Siena, un azzurro mare e un pizzico di rosa. La tavolozza di Cagliari la fa il sole, io la ricopio.`],
[`Come scegli il soggetto?`,`Aspetto che un angolo mi chiami. Una scala, un portone, un panno al vento: quando mi si stringe il petto, so che è quello.`],
[`Come cambia la luce durante il giorno?`,`Al mattino è fredda e chiara, a mezzogiorno bianca, al tramonto d'oro. Dipingere significa inseguirla con pazienza.`],
[`Mi mostri il tuo quadro?`,`È un vicolo con una porta aperta e una striscia di cielo. Non c'è nessuno, ma si sente che qualcuno sta per uscire.`],
[`Ti ispira più il mare o i vicoli?`,`I vicoli sono un abbraccio, il mare un respiro. Dipingo l'uno per capire l'altro.`],
[`Come si impara a vedere?`,`Guardando lento: un'ora su un muro, un giorno su una porta. Poi i colori cominciano a parlare.`],
[`Perché dipingi invece di fotografare?`,`La fotografia ferma il tempo, il pennello lo attraversa. Nel quadro resta anche il tuo stato d'animo di quel pomeriggio.`],
[`Hai un ricordo legato a un quadro?`,`Un tramonto sul Bastione con mio padre. Non l'ho mai finito: ogni volta ci aggiungo una sfumatura e lo sento più vicino.`],
[`Cosa pensi del maestrale?`,`Fa volare i fogli e mi sporca le mani, ma pulisce il cielo. Il blu dopo il vento vale la pena di ogni scarabocchio.`],
[`Come sono le ombre del Castello?`,`Lunghe e viola. Non sono mai nere: se le guardi bene, c'è dentro un po' di mare e un po' di notte.`],
[`Che consiglio daresti a chi vuole dipingere?`,`Comincia con una macchia, non con una linea. Poi lascia che l'occhio ti dica dove andare.`],
[`Come affronti il giorno senza ispirazione?`,`Pulisco i pennelli, bevo un caffè, guardo gli altri camminare. L'ispirazione di solito è lì, nascosta nei dettagli.`],
[`Cosa dipingeresti di me?`,`Un passante con la luce dietro le spalle: poche pennellate di blu, una macchia chiara e un sorriso che si indovina.`],
[`Parlami dei gatti del quartiere.`,`Modelli perfetti: non si muovono mai, tranne quando decidono di non farlo più. Il gatto del Castello ha la posa migliore.`],
[`Qual è il colore dei ricordi?`,`Sono dorati e un po' sfocati ai bordi. Come una vecchia stampa lasciata al sole.`],
[`Mi parli dell'arte e del tempo?`,`Un quadro è un modo di dire: io sono stata qui. Quando passano gli anni, il suo valore è proprio quello.`],
[`Qual è il tuo posto del cuore?`,`Il Bastione quando il cielo diventa rosa. Metto il cavalletto lì e spero che la serata non finisca.`],
[`Come si dipinge il mare?`,`Non con l'azzurro ma con tutti i colori che gli stanno accanto: verde, grigio, argento. L'acqua non ha un colore suo.`],
[`Cosa fai quando sbagli?`,`Aspetto che asciughi e ci dipingo sopra. Gli errori, se ben coperti, diventano il fondo di un'idea migliore.`],
[`Hai mai venduto un quadro?`,`Sì, a una signora che l'ha appeso in cucina. Mi ha detto che le ricorda la sua infanzia: è il compenso più bello.`],
[`Mi dai un esercizio per guardare meglio?`,`Scegli un oggetto e cerca in esso tre colori che non avresti immaginato. Dopo un po' li vedrai ovunque.`],
[`Cosa ami dell'ora blu?`,`Quando il cielo si spegne e i lampioni si accendono. Il mondo diventa un acquerello che non vuoi toccare.`],
[`E la solitudine del pittore?`,`È una compagna gentile: ti lascia il tempo di sentire. Poi arrivano i passanti a farmi domande e sono contenta.`],
[`Come racconti le persone con i colori?`,`Un amico è un giallo caldo, una madre un rosso tenero, un nemico un verde spento. Ognuno lascia il suo pigmento.`],
[`Perché dipingi i panni stesi?`,`Sono bandiere di vita quotidiana. Il bianco, l'azzurro, il rosso a macchie: una poesia che si rinnova ogni mattina.`],
[`Dammi un consiglio sulla pazienza.`,`Prova a dipingere una nuvola: cambia mentre la guardi. La pazienza è seguire senza afferrare.`],
[`Hai un sogno artistico?`,`Una mostra tra i vicoli: quadri appesi ai portoni e la gente che cammina da un tramonto all'altro.`],
[`Come finisce un quadro?`,`Quando smetti di avere voglia di aggiungere e cominci ad avere voglia di guardare. È un momento sottile.`],
[`Mi lasci un colore da portare con me?`,`Un giallo miele, quello del Castello alle sei di sera. Lo trovi dentro quando serve un po' di casa.`]
],
violinista:[
[`Chi sei e cosa suoni?`,`Un violinista di strada. Suono le melodie che mi vengono mentre cammino: pezzi antichi, canzoni di casa, qualcosa che non ha ancora nome.`],
[`Perché suoni nei vicoli?`,`Perché la pietra amplifica le note. Tra i muri stretti il suono si fa caldo, come un abbraccio che non vuole finire.`],
[`Mi suoni qualcosa di dolce?`,`Una ninna nanna che mia nonna mi cantava in sardo. Non ha parole precise: ha il respiro di chi ti vuole bene.`],
[`Che cosa senti quando suoni?`,`Come se qualcuno mi tenesse la mano da dentro. Le dita corrono, ma è il cuore che decide la direzione.`],
[`Hai una canzone legata a un ricordo?`,`Una sera d'estate sul Bastione, un tramonto e una voce che cantava piano accanto a me. Ogni volta che suono, quella voce torna.`],
[`Come si impara il violino?`,`Con anni di note storte e un orecchio paziente. Il suono bello nasce quando smetti di volerlo perfetto.`],
[`Cosa ti emoziona di più?`,`Quando qualcuno si ferma in silenzio e chiude gli occhi. Allora so che la musica ha trovato casa.`],
[`Come suona il maestrale?`,`Come un archetto gigante sul filo dei tetti. A volte lo accompagno, altre volte lo lascio solo.`],
[`Ti manca qualcosa?`,`La mia vecchia orchestra e le prove del giovedì. Poi penso che qui ho un teatro senza biglietto.`],
[`Cosa suoni al tramonto?`,`Qualcosa di lento, con note lunghe come ombre. Il Castello diventa oro e il violino si accorda con la luce.`],
[`Che cosa insegna la musica?`,`Ad ascoltare prima di parlare e a pazientare tra una nota e l'altra. Il silenzio fa parte della melodia.`],
[`Mi parli della nostalgia?`,`È una nota bassa che resta sotto tutte le altre. Non fa male, dà profondità, come la corda più grave del violino.`],
[`Cosa pensi del gatto del Castello?`,`È il mio pubblico più fedele: si siede e socchiude gli occhi. Gli suono sempre il pezzo preferito, anche se non lo ammette.`],
[`E Zia Annetta?`,`Mi lascia un caffè sul davanzale e dice che la musica fa lievitare il pane. Non so se sia vero, ma il pane è ottimo.`],
[`Qual è la tua nota preferita?`,`Un la che trema un po' alla fine. Sembra una domanda a cui non c'è risposta, e per questo è bellissima.`],
[`Come sono le sere in strada?`,`Le finestre si accendono, qualcuno applaude dal balcone, un bambino chiede il bis. Sono le sere che custodisco.`],
[`Hai un sogno musicale?`,`Suonare un concerto sulla terrazza del Bastione con tutti i balconi del quartiere come platea.`],
[`Come si suona con il cuore pesante?`,`Lasciando che la musica lo sollevi piano. Una nota alla volta, il peso diventa canto.`],
[`Che differenza c'è tra suonare e ascoltare?`,`Suonare è parlare, ascoltare è abitare il suono. Entrambi sono gesti d'amore.`],
[`Mi dai un consiglio per sentirmi meglio?`,`Metti una canzone che ami e cammina lentamente. Dopo qualche passo, anche i pensieri cominciano a tenere il tempo.`],
[`Mi racconti di una serata indimenticabile?`,`Una notte di festa, piazza piena, e a un tratto un silenzio improvviso mentre suonavo. Quel silenzio è stato l'applauso più grande.`],
[`Cosa pensi dei vicoli di notte?`,`Respirano. Si sente un rubinetto, un passo, una risata soffocata. Sono la mia orchestra segreta.`],
[`Come conservi i ricordi?`,`In forma di melodie. Ogni persona che ho amato ha un piccolo motivo che mi torna in mente quando cammino.`],
[`Che cosa ti dà coraggio?`,`Il primo accordo: quando suona, tutto il resto si zittisce. È come un ponte tra la paura e la voce.`],
[`Come descrivi Cagliari con un suono?`,`Un mi lungo con il vento che lo piega e il mare che lo allarga. Una città che canta anche quando tace.`],
[`Mi parli dei tuoi maestri?`,`Un vecchio signore che diceva: non suonare per piacere, suona per chiamare. Ho capito solo dopo cosa intendesse.`],
[`Cosa vorresti dire alla gente che passa?`,`Che non c'è nulla di sbagliato nel rallentare. Il tempo dedicato a una melodia non è mai perso.`],
[`Come si ritrova l'allegria?`,`Con un ritmo semplice e qualcuno che batte le mani. Anche il cuore più stanco capisce una danza.`],
[`Mi lasci un ricordo da portare?`,`Prendi questa melodia: tre note che salgono e una che torna a casa. Fischiala quando sei lontano.`],
[`Ci rivediamo al Bastione?`,`Certo. Quando il sole cala, porterò l'archetto. Tu porta le orecchie e un po' di silenzio.`]
]
};
Object.assign(TOPX,TOPX_CS);
