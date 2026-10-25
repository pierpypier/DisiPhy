/* ---------- 5. LONDRA · una mattina sul Tamigi (pub, Big Ben, ruota panoramica, Tower Bridge, St Paul, museo, Buckingham Palace) ---------- */
(function(){
const GT=372;
const BR=['#a4553a','#b8683f','#8f4a35','#c07a4a','#9a6a50','#7f4a3c'];   /* mattoni londinesi */
const ST=['#e6dac0','#dbcfb2','#ece2cb'];                                  /* stucco crema */
const PORTE=['#1f2f4a','#1f4a3a','#222','#7a1f2a','#2a4a6a'];
const inCity=wx=>wx<1250||(wx>3950&&wx<5080);                              /* case a schiera */
const inPark=wx=>(wx>=1250&&wx<2000)||wx>=5080;                            /* platani di Westminster e di St James's Park */
function casa(g,x,w,top,r,i,t){
 const gt=GT,gesso=hr(i*7+3)>.72,c=gesso?ST[i%3]:BR[(i*5+Math.floor(r*6))%6];
 rect(g,c,x,top,w,gt-top);rect(g,'rgba(0,0,0,.10)',x+w-12,top,12,gt-top);rect(g,'rgba(255,255,255,.10)',x,top,5,gt-top);
 poly(g,'#4a4e5a',[[x-4,top+3],[x+10,top-22],[x+w-10,top-22],[x+w+4,top+3]]);rect(g,'#d8d0bc',x-3,top,w+6,5);
 [0,1].forEach(k=>{const cx=x+22+k*(w-70);rect(g,'#8a4a35',cx,top-48,16,28);rect(g,'#b0a590',cx-2,top-50,20,4);rect(g,'#c8743a',cx+2,top-58,4,8);rect(g,'#c8743a',cx+9,top-58,4,8)});
 const rows=Math.max(1,Math.floor((gt-top-112)/64));
 for(let rw=0;rw<rows;rw++)for(let k=0;k<3;k++){const wx=x+16+k*((w-62)/2),wy=top+24+rw*64,lit=hr(i*9+rw*3+k)>.62;
  rect(g,'#f4f1e8',wx-3,wy-3,30,48);rect(g,lit?'#ffe9a8':'#9fb8cc',wx,wy,24,42);rect(g,'#f4f1e8',wx+11,wy,2,42);rect(g,'#f4f1e8',wx,wy+20,24,2);rect(g,'rgba(255,255,255,.18)',wx,wy,8,42);
  if(rw==rows-1&&hr(i*4+k)>.6){rect(g,'#5a3a22',wx-4,wy+45,32,7);for(let q=0;q<5;q++)dot(g,['#e8505a','#ffd21e','#ff7ab0'][(q+i)%3],wx+1+q*6,wy+43+Math.sin(t*1.5+q+i)*.8,3)}}
 rect(g,'rgba(255,255,255,.28)',x,gt-112,w,4);
 [0,1].forEach(k=>{const wx=x+14+k*(w-52),wy=gt-98;rect(g,'#f4f1e8',wx-3,wy-3,30,42);rect(g,hr(i*2+k)>.5?'#ffe9a8':'#9fb8cc',wx,wy,24,36);rect(g,'#f4f1e8',wx+11,wy,2,36)});
 const dc=PORTE[(i*3)%5],dx=x+w/2-14;rect(g,'#f4f1e8',dx-4,gt-70,36,70);rect(g,dc,dx,gt-66,28,66);g.fillStyle='#ffe9a8';g.beginPath();g.arc(dx+14,gt-66,10,Math.PI,0);g.fill();dot(g,'#d9b24a',dx+22,gt-34,1.8);rect(g,'#d0c9b6',dx-8,gt-6,44,6);
 rect(g,'#222',x+4,gt-26,w-8,2);for(let q=0;q<(w-8)/7;q++)rect(g,'#222',x+4+q*7,gt-26,1.5,24)}
addWorld({id:'londra',name:'Londra · Una mattina sul Tamigi',width:5700,sky:['#8db8e2','#c9dcea','#f4ead6'],gt:372,gr:['#9b9ba2','#7a7a83'],chord:[220,277.2,329.6,440],amb:'#fff1c8',
 intro:'Una mattina di Londra: aria fresca, cielo chiaro, il Tamigi che scorre e i bus rossi che passano. Profuma di tè, di pioggia appena finita e di pane caldo.',
 look:[[1000,'Un pub d’angolo con le travi basse, una cabina rossa, i bus a due piani. A Londra la mattina comincia con una tazza fumante.'],[1950,'Westminster: il Big Ben segna le ore sopra le teste e i turisti alzano gli occhi tutti insieme. Accanto, il Palazzo del Parlamento.'],[2750,'Il Tamigi luccica e la ruota panoramica gira piano, lenta come un pensiero. Sull’altra riva, i gabbiani seguono i battelli.'],[3250,'Un chiosco sul lungofiume, il vento che sa di acqua, il cartello della Tube. Da qui si intravedono le torri del ponte.'],[3950,'Il Tower Bridge, che tutti scambiano per il London Bridge. Quello vero è lì vicino: semplice, grigio, senza torri.'],[4560,'St Paul: la cupola di Wren sembra galleggiare sopra i tetti. Piccioni, ciclisti e studenti sui gradini.'],[5100,'Strade con le case a schiera, colonne di pietra chiara, il portico di un grande museo. Si cammina fra storie di tutto il mondo.'],[9999,'Cancelli dorati, bandiere e berretti di pelo nero: Buckingham Palace, in fondo al viale, nella luce tersa del mattino.']],
 gdraw:(g,cam,t)=>{const gt=GT;rect(g,'rgba(0,0,0,.20)',0,gt,W,5);rect(g,'rgba(255,255,255,.10)',0,gt+5,W,2);
  for(let r=0;r<5;r++){const yy=gt+12+r*17,off=(r%2)*22;each(cam,44+r*6,20+r,(x,i,rr)=>{rect(g,'rgba(0,0,0,.13)',x+off,yy,40+r*6,2);rect(g,'rgba(255,255,255,.06)',x+off+2,yy+3,16,2);if(rr>.88)el(g,'rgba(200,225,240,.45)',x+off+22,yy+8,20+r*3,3.5);else if(rr>.8)dot(g,'rgba(255,255,255,.28)',x+off+14,yy+8,1.6)})}},
 back:[
  {k:.03,fn:(g,o)=>each(o,330,1,(x,i,r)=>cloud(g,x+r*100,50+r*50,.9+r*.5))},
  {k:.15,fn:(g,o,t)=>{const gt=GT;
    each(o,40,7,(x,i,r)=>{const h=70+hr(i*2+1)*90;rect(g,'#c4d0de',x,gt-h,36,h);if(r>.6)rect(g,'#b8c6d6',x+6,gt-h-12,18,12);if(r<.3)rect(g,'rgba(255,255,255,.35)',x+4,gt-h+8,3,h-8)});
    const L=(wx,fn)=>{const x=wx-o;if(x>-80&&x<W+80)fn(x)};
    L(250,x=>{poly(g,'#aebdd0',[[x-17,gt],[x,gt-250],[x+17,gt]]);poly(g,'#c2cedd',[[x,gt-250],[x+17,gt],[x+5,gt]])});
    L(560,x=>{el(g,'#b4c4d2',x,gt-100,21,72);for(let q=0;q<6;q++)rect(g,'rgba(255,255,255,.4)',x-18,gt-150+q*22,36,1.5);dot(g,'#b4c4d2',x,gt-174,6)});
    L(860,x=>{poly(g,'#b0bfd0',[[x-34,gt-148],[x+34,gt-148],[x+24,gt],[x-24,gt]]);rect(g,'rgba(255,255,255,.35)',x-30,gt-140,60,2)});
    L(1100,x=>{poly(g,'#b4c3d4',[[x-16,gt],[x-16,gt-120],[x+16,gt-168],[x+16,gt]])})}},
  {k:1,fn:(g,o,t)=>{const gt=GT;
    /* parco: platani */
    each(o,118,5,(x,i,r)=>{const wx=i*118;if(!inPark(wx))return;const h=96+hr(i*3+1)*56;rect(g,'#7a6c5c',x-4,gt-h,8,h);rect(g,'rgba(255,255,255,.18)',x-4,gt-h,3,h);
     el(g,'#5f8c4b',x,gt-h-6,40+r*14,34+r*8);el(g,'#6f9c58',x-14,gt-h-14,26,22);el(g,'#4d7a3e',x+16,gt-h-2,28,22)});
    /* il Tamigi, con la sponda opposta */
    const a=2000-o,b=3950-o;
    if(b>0&&a<W){const X0=Math.max(0,a),X1=Math.min(W,b),ww=X1-X0;
     each(o,34,9,(x,i,r)=>{const wx=i*34;if(wx<2000||wx>3950)return;const h=16+hr(i+4)*36;rect(g,['#c8bfae','#b9b2a6','#cfc7b6','#a9a398'][i&3],x,gt-70-h,32,h);rect(g,'rgba(60,50,40,.35)',x+8,gt-70-h+6,4,5)});
     rect(g,'#6f9fb8',X0,gt-70,ww,58);
     for(let i=0;i<22;i++)rect(g,'rgba(255,255,255,'+(.25+.25*Math.sin(t*2+i*2))+')',X0+((i*47+t*9)%ww),gt-66+(i%6)*9,14,1.5);
     const bx=2000+((t*14+600)%1950)-o;
     if(bx>-80&&bx<W+80){rect(g,'#f4f4ee',bx-48,gt-60,96,10);rect(g,'#2a62b8',bx-48,gt-52,96,3);rect(g,'#e8eef4',bx-32,gt-72,60,12);for(let q=0;q<7;q++)rect(g,'#6a8aa8',bx-28+q*8,gt-70,5,6);rect(g,'rgba(255,255,255,.55)',bx-74,gt-50,24,1.5)}
     rect(g,'#8c877b',X0,gt-14,ww,14);rect(g,'#a39d8f',X0,gt-16,ww,3)}
    /* case a schiera */
    each(o,200,3,(x,i,r)=>{const wx=i*200;if(wx<-200||!inCity(wx))return;casa(g,x,190,104+hr(i*5)*84,r,i,t)});
    /* luce del mattino sulle facciate */
    const sh=g.createLinearGradient(0,0,0,150);sh.addColorStop(0,'rgba(255,240,200,.10)');sh.addColorStop(1,'rgba(255,240,200,0)');g.fillStyle=sh;g.fillRect(0,0,W,150)}}],
 mid:[{k:1,fn:(g,o,t)=>{each(o,380,8,(x,i,r)=>{const bx=x+Math.sin(t*.4+i)*40,by=60+r*90+Math.sin(t*1.3+i*2)*5,w=Math.sin(t*9+i*3)*4;g.strokeStyle='#4a4a54';g.lineWidth=1.6;g.beginPath();g.moveTo(bx-7,by-w);g.quadraticCurveTo(bx-3,by-4-w,bx,by);g.quadraticCurveTo(bx+3,by-4+w,bx+7,by+w);g.stroke()})}}],
 props:[['telefono',230],['lamp',340],['pub',560],['lamp',745],['fioriera',800,'#e8505a'],['bus',930],['taxi',1100],['buca',1290],['lamp',1345],['bigben',1420],['westm',1700],['lamp',1935],['panchina',2040],['lamp',2125],['eye',2500],['panchina',2710],['lamp',2790],['tubo',2890,'LONDON BRIDGE'],['chiosco',3040],['lamp',3200],['tbridge',3580],['panchina',3905],['lamp',3995],['stpaul',4250],['fioriera',4450,'#ffd21e'],['lamp',4545],['museo',4690],['lamp',4880],['telefono',4960],['lamp',5130],['bpalace',5450]],
 npcs:[
  {id:'lon_oste',name:'Barry, il barista',x:655,draw:(g,x,y,t,f)=>fig(g,x,y,t,{f,skin:'#e2b69a',top:'#3a4a6a',bot:'#2a2a30',hair:'#b8b8b8',acc:(g,b)=>{rect(g,'#f4f4ee',-9,-72+b,18,34);rect(g,'#c8c8c0',-9,-72+b,18,3);rect(g,'#2a6aa8',9,-90+b,6,26);poly(g,'#aaa',[[-7,-99+b],[7,-99+b],[5,-90+b],[-5,-90+b]]);rect(g,'#f4e6b0',20,-74,10,16);rect(g,'#e8a82a',21,-70,8,12);rect(g,'#fff',20,-77,10,4)}}),d:{a:{t:`Morning! Il pub apre alle undici, ma il tè è già pronto e il bancone lo lucido da un'ora. Entra pure: le travi non mordono, basta che abbassi la testa.`}}},
  {id:'lon_tassista',name:'Dave, il tassista',x:1215,draw:(g,x,y,t,f)=>fig(g,x,y,t,{f,skin:'#d6a888',top:'#6a5a4a',bot:'#33384a',hair:'#444',acc:(g,b)=>{poly(g,'#34343c',[[-12,-110+b],[-8,-120+b],[8,-120+b],[13,-110+b]]);rect(g,'#2a2a30',-12,-111+b,26,3);rect(g,'#2a2a30',8,-110+b,10,3);rect(g,'#2a4a9a',20,-72,13,17);rect(g,'#f4f4ee',22,-70,9,2)}}),d:{a:{t:`Ehi, amico! L'insegna TAXI è accesa, ma oggi non lavoro per i soldi: ripasso le strade a memoria, per abitudine. Dove ti porto? O preferisci due passi con me verso il Big Ben?`}}},
  {id:'lon_pendolare',name:'Oliver, il pendolare',x:2330,draw:(g,x,y,t,f)=>fig(g,x,y,t,{f,skin:'#e6bc9c',top:'#262c40',bot:'#262c40',hair:'#6a4a2a',acc:(g,b)=>{rect(g,'#c8202a',-1.5,-84+b,3,14);rect(g,'#111',-21,-62,3,50);rect(g,'#6a4a2a',-26,-58,16,22);rect(g,'#f4f4ee',20,-72,8,12);rect(g,'#6a4a2a',20,-68,8,4);rect(g,'#333',19,-74,10,3);dot(g,'rgba(255,255,255,.5)',24+Math.sin(t*3)*2,-80-(t*14)%10,1.6)}}),d:{a:{t:`Scusa! Sorry! Corro verso la Tube: qui o sei in ritardo o sei in anticipo, una via di mezzo non esiste. Ma il caffè è ancora caldo, quindi due parole le trovo.`}}},
  {id:'lon_ruby',name:'Ruby, il chiosco del pesce',x:3135,draw:(g,x,y,t,f)=>fig(g,x,y,t,{f,skin:'#e4b090',top:'#2e5aa8',bot:'#2a2a34',hair:'#8a4a2a',acc:(g,b)=>{poly(g,'#f4f4ee',[[-11,-108+b],[-7,-118+b],[7,-118+b],[11,-108+b]]);rect(g,'#f4f4ee',-10,-70+b,20,34);for(let q=0;q<4;q++)rect(g,'#c8202a',-10+q*5,-70+b,2.5,34);poly(g,'#f4ecd8',[[18,-76],[34,-76],[28,-56],[24,-56]]);[19,24,29].forEach((a,q)=>rect(g,'#ffd14a',a,-84+q%2*2,3,9));dot(g,'rgba(255,255,255,.45)',27+Math.sin(t*2)*3,-92-(t*12)%12,2.2)}}),d:{a:{t:`Ciao, tesoro! Il pesce è fresco e l'olio è bollente: il mattino a Londra comincia con una cartata di fish and chips, parola mia. Cosa ti servo, merluzzo o eglefino?`}}},
  {id:'lon_guida',name:'Eleanor, la guida',x:4125,draw:(g,x,y,t,f)=>fig(g,x,y,t,{f,skin:'#e8c0a0',top:'#b8323a',bot:'#2a3250',hair:'#c8742a',acc:(g,b)=>{rect(g,'#444',21,-168,2.5,100);el(g,'#ffc21e',22,-170,30,12);rect(g,'#c8202a',-8,-84+b,16,3);poly(g,'#2a3250',[[-8,-86+b],[8,-86+b],[0,-62]]);rect(g,'#f4f4ee',-3,-66,6,8)}}),d:{a:{t:`Salve a tutti… ah, no, sei solo tu. Sono Eleanor e porto in giro la gente con questo ombrello giallo, così nessuno mi perde. Vuoi aggregarti al giro? Con calma, senza fretta.`}}},
  {id:'lon_guardia',name:'La guardia di Buckingham Palace',x:5330,draw:(g,x,y,t,f)=>fig(g,x,y,t,{f,skin:'#dcae8c',top:'#c8202a',bot:'#1a2238',hair:'#222',acc:(g,b)=>{poly(g,'#1b1b1f',[[-14,-112+b],[-16,-128+b],[-8,-144+b],[8,-144+b],[16,-128+b],[14,-112+b]]);rect(g,'#f4f4ee',-13,-138+b,4,12);rect(g,'#c8a83a',-10,-98+b,20,2);rect(g,'#f4f4ee',-12,-58,24,4);[-80,-72,-64].forEach(a=>dot(g,'#d9b24a',0,a,1.6));rect(g,'#222',22,-130,3,56);rect(g,'#3a2a1a',21,-76,5,40)}}),d:{a:{t:`Buongiorno. Sono in servizio, quindi sto fermo e guardo davanti a me. Ma le orecchie funzionano benissimo: fai pure le tue domande, io rispondo senza muovere un muscolo.`}}}
 ]});
})();

/* --- Battute: 30 per personaggio --- */
(function(){
const TOPX_LN={
lon_oste:[
[`Come ti chiami e da quanto sei qui?`,`Mi chiamano Barry e dietro questo bancone ci sto da vent'anni. Il pub era di mio padre: le travi sono più vecchie di me, e anche più scricchiolanti.`],
[`Che mi dici del nome del tuo pub?`,`The Royal Oak: in Inghilterra ce ne sono centinaia. Ricorda la quercia dove Carlo II si nascose dopo una battaglia. Ogni pub ha la sua storia, la mia è un albero.`],
[`Come si ordina in un pub inglese?`,`Si va al bancone, si ordina e si paga subito. Niente cameriere al tavolo, niente fretta: aspetta il tuo turno e guarda il barista, ti vede lui.`],
[`Che mi dici delle pinte e della birra?`,`Una pinta sono 568 millilitri, mezzo litro e un pizzico. La birra alla spina, la cask ale, si tira con la pompa a mano. Non è calda, è solo non gelata.`],
[`Cosa mi consigli di bere stamattina?`,`Un tè forte con il latte, senza discutere. Per la birra c'è tempo: una pinta a colazione la lasciamo alle leggende e a qualche turista distratto.`],
[`Che mi dici della colazione inglese?`,`Full English: uova, bacon, salsicce, fagioli in salsa, pomodoro grigliato, funghi e toast. Per i più coraggiosi anche il black pudding. Ti tiene in piedi fino alle tre.`],
[`Che mi dici del pranzo della domenica?`,`Il Sunday roast è sacro: arrosto, patate al forno, Yorkshire pudding, verdure e tanto gravy. A mezzogiorno il pub si riempie e nessuno ha più voglia di alzarsi.`],
[`Cos'è un pub quiz?`,`Una sera a settimana i tavoli diventano squadre. Il presentatore legge le domande, tutti scrivono su un foglietto, vince chi ne sa di più. Il premio? Un buono birra e l'orgoglio.`],
[`Che mi dici delle freccette?`,`Il bersaglio è lì in fondo. Si parte da 501 e si scende fino a zero, chiudendo su un doppio. Non è facile come sembra, e i clienti abituali lo sanno bene.`],
[`Mi spieghi i giri di birra?`,`Si paga a turno: io offro il giro a tutti, poi tocca a te. Se salti il tuo turno, ti guardano storto per mesi. È un patto sociale, non un conto.`],
[`Si lascia la mancia nei pub?`,`Non è obbligatoria. Se vuoi, dici 'and one for yourself' mentre ordini e il barista si prende da bere. Ma nessun dramma se non lo fai.`],
[`Che mi dici dell'ultimo giro?`,`Last orders: suona una campana e si ordina per l'ultima volta. Una volta gli orari erano rigidi, adesso cambiano da locale a locale, ma la campana è rimasta.`],
[`Posso portare il cane nel pub?`,`Quasi sempre sì. Molti pub sono dog friendly e ti portano pure la ciotola d'acqua. Il mio cliente più puntuale è un labrador che arriva alle dodici in punto.`],
[`Che mi dici del tempo a Londra?`,`Quattro stagioni in un giorno. Esci col sole, ti prendi la pioggia, poi di nuovo il sole. Per questo un pub ha sempre un angolo asciutto e uno caldo.`],
[`Piove davvero così tanto?`,`Meno di quanto si pensi: a Roma cade più acqua in un anno. Qui piove spesso ma poco, una pioggerella che arriva e se ne va senza fare rumore.`],
[`Che mi dici dei turisti?`,`Arrivano con la mappa aperta e la faccia incantata. Io li servo e li ascolto: chi non ha mai visto il Big Ben chiede sempre dove sia, anche se ce l'ha di fronte.`],
[`Che mi dici delle patatine inglesi?`,`Se dici chips ti arrivano le patate fritte grosse; se dici crisps, ti portano quelle in sacchetto. Ci sono gusti come formaggio e cipolla, sale e aceto, gamberetti.`],
[`Che mi dici dello Scotch egg?`,`Un uovo sodo avvolto in salsiccia e pangrattato, poi fritto. Si mangia freddo con un po' di senape e un sorso di birra. Ogni pub ha la sua versione e la sua fama.`],
[`Che mi dici dei pub storici?`,`Ne trovi di vecchi di secoli: alcuni sono stati ricostruiti dopo il Grande Incendio del 1666. Soffitti bassi, pannelli di legno e un camino che scalda da sempre.`],
[`Che mi dici della birra di Londra?`,`Qui è nata la porter, scura e amara, bevuta dai facchini del porto. Oggi ci sono anche piccoli birrifici in ogni quartiere, con nomi buffi e etichette coloratissime.`],
[`Che accento hai?`,`Vengo dal sud-est di Londra. Le parole si mangiano, le 'th' diventano 'f' e il saluto è 'alright?'. Non è una domanda: vuol dire ciao.`],
[`Mi insegni qualche parola di slang?`,`Mate è amico, cheers è grazie (o salute), quid è una sterlina, brolly è l'ombrello. E se uno ti dice 'lovely', stai tranquillo: è un complimento largo.`],
[`Che mi dici dei giardini dei pub?`,`Appena spunta il sole la gente esce con la pinta e si siede sui tavoli di legno. Anche con quindici gradi: qui il sole è una festa, e va festeggiata subito.`],
[`Come passi la mattina prima di aprire?`,`Lavo le spine, controllo i barili, spazzo il pavimento. Poi il fornitore bussa con il carrello e l'odore del pane fresco arriva dal vicolo.`],
[`Qual è il tuo piatto preferito?`,`Il pie and mash: torta di carne con purè e salsa verde al prezzemolo. È un classico dell'East End, e quando piove sa di casa.`],
[`Che mi dici del calcio al pub?`,`Si guarda con la sciarpa al collo e la birra in mano. Il sabato il locale è pieno, si urla per un gol e si fanno amicizie per tre ore, poi ognuno torna a casa.`],
[`Come arrivo da qui a Westminster?`,`A piedi, una ventina di minuti, passando dai vicoli. Oppure con un bus rosso a due piani, che ferma proprio qui fuori. Meglio il piano di sopra, davanti: vedi tutto.`],
[`Che mi dici del Natale in un pub?`,`Luci, camino acceso e mulled wine, il vino caldo con le spezie. I cracker si aprono a tavola e tutti indossano la coroncina di carta, anche il più serio dei clienti.`],
[`Chi sono i tuoi clienti storici?`,`C'è chi viene da quarant'anni e ha la sua sedia. Se manca un giorno, tutti chiedono dov'è. Un pub è fatto di persone, più che di mattoni.`],
[`Cosa mi consigli di vedere a Londra?`,`Westminster, la ruota panoramica, i ponti sul fiume, la cattedrale di St Paul e almeno un museo gratuito. Poi torna qui, che ti aspetta una pinta.`]
],
lon_tassista:[
[`Come ti chiami e da quanto guidi?`,`Dave. Guido il black cab da ventidue anni: ho visto cambiare mezza città e ho sentito diecimila turisti dire 'al Big Ben, per favore' con la stessa faccia emozionata.`],
[`Che mi dici del Knowledge?`,`Per avere la licenza si studiano a memoria circa venticinquemila strade e migliaia di luoghi nel raggio di sei miglia da Charing Cross. Tre o quattro anni, con la mappa e un motorino.`],
[`Come si prepara l'esame?`,`Si riempie un quaderno con 320 itinerari, il famoso Blue Book, e poi si ripetono a voce: dal punto A al punto B, svolta per svolta. Gli esaminatori ti fanno l'interrogatorio, uno per volta.`],
[`Dicono che il Knowledge cambi il cervello.`,`Ci hanno fatto pure uno studio: la parte che serve a orientarsi cresce. Io so solo che la sera mi addormento sapendo già dov'è la prossima svolta.`],
[`Come riconosco un taxi libero?`,`L'insegna TAXI sopra il parabrezza è accesa. Se è spenta, hai già un cliente. Alza il braccio e lui accosta, anche in mezzo alla strada, se può.`],
[`Che mi dici dell'inversione a U?`,`I black cab hanno un raggio di sterzata strettissimo, poco più di sette metri. Si dice che sia nato per girare davanti a certi alberghi senza fare manovra.`],
[`Quanto costa un giro in taxi?`,`Dipende dal tassametro: parte da una tariffa base e cresce con distanza e tempo. Meglio non darti numeri, cambiano ogni anno. Ma ti porto a destinazione senza giri strani.`],
[`Che mi dici del Big Ben?`,`Big Ben in realtà è la campana, non la torre. La torre si chiama Elizabeth Tower dal 2012. Ma io dico sempre Big Ben, altrimenti il cliente non capisce.`],
[`Quanto pesa la campana?`,`Più di tredici tonnellate. Suona ogni ora, e i quarti sono segnati da campane più piccole: la musichetta si chiama Westminster Quarters.`],
[`E l'orologio come funziona?`,`Il quadrante è enorme: circa sette metri di diametro. Il pendolo regola il tempo, e per correggerlo ci mettono sopra delle monetine: un penny in più o in meno e l'orologio cambia di una frazione di secondo.`],
[`Cosa mi racconti della torre inclinata?`,`È vero, pende un pochino verso nord-ovest, ma pochissimo: la vedi solo con gli strumenti. Per me resta il riferimento migliore per non perdermi.`],
[`Che mi dici del Parlamento?`,`Dopo l'incendio del 1834 il Palazzo fu ricostruito in stile gotico. Dentro ci sono due Camere, con le panche verdi dei Comuni e quelle rosse dei Lord.`],
[`Che mi dici dei ponti verde e rosso?`,`Westminster Bridge è verde come i Comuni, Lambeth Bridge è rosso come i Lord. Due colori che a Londra si riconoscono anche a occhi chiusi, a furia di attraversarli.`],
[`E l'Abbazia di Westminster?`,`Dal 1066 qui si incoronano i sovrani. Ci sono tombe di re, poeti e scienziati: Newton e Darwin dormono sotto lo stesso soffitto. Vale una visita lenta.`],
[`Che mi dici del traffico?`,`Un incubo gentile. Bus rossi, ciclisti, pedoni che attraversano senza guardare. E poi c'è il Congestion Charge: una tassa per entrare nel centro nelle ore di punta.`],
[`Perché si guida a sinistra?`,`Si dice che dipenda dai cavalieri: la spada si teneva a destra e si passava tenendo la sinistra per averla libera. Poi è diventata legge, e Londra non ha più cambiato.`],
[`Come attraverso la strada senza rischi?`,`Guarda la scritta sull'asfalto: LOOK RIGHT o LOOK LEFT, a seconda di dove arriva il traffico. L'hanno messa apposta per i turisti distratti, e funziona.`],
[`Che mi dici dei taxi elettrici?`,`I black cab nuovi sono elettrici, con un piccolo motore di supporto. Silenziosi e con la rampa per le carrozzine. Più comodi, ma il vecchio rumore di motore un po' mi manca.`],
[`Che mi dici delle casette verdi?`,`Sono i Cabmen's Shelters: capanne verdi dove noi tassisti mangiamo e beviamo un tè in pace. Ne restano tredici in tutta Londra, e sì, si mangia benissimo.`],
[`Quali sono i passeggeri più strani?`,`Un signore con un pappagallo che sapeva il mio nome. Una coppia in smoking alle sette del mattino. E un turista che voleva andare a Parigi: ho dovuto spiegargli che c'è un mare in mezzo.`],
[`Che mi dici della metropolitana?`,`È la più vecchia del mondo: aperta nel 1863. La rispetto ma non la uso: sotto terra non vedo i palazzi e non sento la città.`],
[`Come giro a piedi qui intorno?`,`Segui il fiume: dal Parlamento attraversi il ponte, poi cammini sulla South Bank con il Tamigi sempre accanto. È la passeggiata più bella di Londra, e non ti serve nemmeno la mappa.`],
[`Che mi dici del London Eye?`,`Alla ruota ci porto spesso la gente. È alta 135 metri e aprì nel 2000: doveva restare cinque anni, ora è un simbolo. Non si ferma mai, sale piano e senza scosse.`],
[`Dove mi porti per un panorama?`,`A Primrose Hill o a Greenwich: da lì vedi tutta la città, con la City e lo Shard che brillano. Il tramonto è speciale, ma anche la mattina non scherza.`],
[`Che mi dici dell'accento cockney?`,`Viene dai quartieri dell'East End e ha le rime in codice: 'apples and pears' vuol dire scale. Io parlo un inglese di strada, un miscuglio di tutti i quartieri.`],
[`Cosa guardi mentre guidi?`,`Specchietti, semafori, pedoni, ciclisti, motorini. E il Tamigi, ogni volta che lo incrocio: da qualsiasi ponte sembra un posto diverso.`],
[`Che mi dici delle mattine in città?`,`Hanno il profumo di caffè e di asfalto bagnato. I pendolari corrono, i negozi alzano le saracinesche e i piccioni fanno la guardia ai marciapiedi.`],
[`Hai un luogo preferito dove portare gente?`,`Il ponte di Westminster alle otto del mattino, col sole sulla facciata del Parlamento. I clienti restano zitti. Io ci passo e abbasso la radio.`],
[`Cosa mi consigli di non perdere?`,`La Torre di Londra, i musei gratuiti, un pomeriggio a Greenwich, un giro in battello sul fiume. E almeno una volta prova a perderti, con calma: Londra regala sorprese.`],
[`Mi dai un ultimo consiglio da tassista?`,`Guarda sempre in alto: i dettagli più belli di Londra stanno sopra le insegne. E prendi l'ombrello: qui il sole non firma contratti a lungo termine.`]
],
lon_pendolare:[
[`Dove stai correndo così presto?`,`In City, in ufficio. Prendo la Tube alle otto meno dieci e arrivo con due minuti d'anticipo, se il destino è gentile. Tante riunioni, poca luce.`],
[`Che mi dici della metropolitana?`,`La Tube è un mondo a sé: undici linee, quasi trecento stazioni, un odore inconfondibile e un annuncio che conosco a memoria: Mind the gap.`],
[`Che significa 'Mind the gap'?`,`Fai attenzione allo spazio tra treno e banchina. In molte stazioni vecchie le curve lasciano vuoti larghi. Ormai è quasi una frase di benvenuto.`],
[`Come si usa la scala mobile?`,`Si sta fermi a destra e si cammina a sinistra. Chi sbaglia riceve uno sguardo gelido e un 'excuse me' più educato che affettuoso. Il galateo è severo e silenzioso.`],
[`Come pago i mezzi?`,`Con la Oyster card o direttamente con la carta contactless. Appoggi sul lettore al tornello e basta. Il costo dipende dalle zone e dall'orario.`],
[`Cos'è la Elizabeth line?`,`La linea nuova che attraversa Londra da est a ovest: aperta nel 2022, con treni larghi e stazioni nuove di zecca. Quasi non sembra la Tube.`],
[`Chi ha disegnato la mappa della Tube?`,`Harry Beck, nel 1931: ha tolto la geografia e lasciato solo linee e colori. È semplicissima, ma a volte inganna: due stazioni vicinissime sembrano lontane.`],
[`Perché nessuno parla sulla Tube?`,`È una regola non scritta: occhi sul libro o sul telefono, niente chiacchiere. Se qualcuno ti pesta un piede, dice 'sorry' lui. Gli inglesi chiedono scusa anche alle porte.`],
[`Che mi dici del caffè da queste parti?`,`Quello d'ufficio è lungo e leggero, quello delle catene dipende dall'umore. Ma i locali piccoli e indipendenti ormai fanno un espresso che ti salva la mattinata.`],
[`Che mangi a pranzo?`,`Un meal deal: panino, snack e bevanda a prezzo fisso. Poi lo mangio alla scrivania, o in un parco se c'è il sole. A Londra il sole è una notizia.`],
[`Come ti difendi dal tempo?`,`Ho sempre un ombrello in borsa: il brolly è parte del vestito. Ma non pensare a una pioggia battente: spesso è solo una pioggerella, e dopo cinque minuti spunta il sole.`],
[`Che mi dici di Westminster Bridge?`,`Lo attraverso ogni giorno. Dalla riva sembra un set cinematografico: il Big Ben, i bus rossi, i turisti che scattano fermi in mezzo al marciapiede. Io li aggiro in silenzio.`],
[`Mi parli della ruota panoramica?`,`Sta sulla riva sud: ha 32 capsule, una per ogni quartiere di Londra. Il giro dura circa mezz'ora e si sale a passo lento, senza fermate.`],
[`C'è un modo per evitare la coda?`,`Prenota in anticipo online, oppure vai la mattina presto. Da qui sembra una ruota tranquilla, ma d'estate alle due del pomeriggio è un fiume di gente.`],
[`Dove vai a camminare in pausa pranzo?`,`Lungo il Tamigi, sulla South Bank. Ci sono artisti di strada, banchi di libri usati e bancarelle. La riva sembra un grande salotto con il fiume al posto del tappeto.`],
[`Come ti muovi in bici?`,`Con le bici a noleggio, quelle parcheggiate in giro per la città. Per pochi soldi attraversi mezza Londra. Ma solo se non c'è un autobus a due piani nello specchietto.`],
[`Che mi dici del battello?`,`I battelli sul Tamigi sono veri mezzi pubblici, oltre che turistici. Da Westminster arrivi a Greenwich in meno di un'ora, e il capitano commenta i palazzi con un po' di humor.`],
[`Che mi dici del lavoro in City?`,`La City è il quartiere finanziario: grattacieli di vetro, caffè all'angolo e tanti vestiti blu. Ma anche chiese antiche, stradine nascoste e pub del Seicento fra una torre e l'altra.`],
[`Cosa significa 'cuppa'?`,`Una tazza di tè, soprattutto quando la preparano i colleghi. Si chiede sempre 'fancy a cuppa?'. Rifiutare è una piccola offesa, anche se il tè è tiepido.`],
[`Come si fa la coda?`,`La coda è sacra. Se la salti, il rumore silenzioso dei sospiri ti segue fino a casa. Se la rispetti, sei un uomo di mondo.`],
[`Che mi dici della vita notturna?`,`Nel fine settimana c'è la Night Tube: treni anche di notte su alcune linee, e tutto diventa più semplice. I locali chiudono presto, ma i marciapiedi si riempiono lo stesso.`],
[`Quanto costa vivere a Londra?`,`Tanto. L'affitto si mangia metà dello stipendio e un cappuccino costa quanto un pranzo altrove. Ma il quartiere giusto, un mercato e un parco vicino compensano parecchio.`],
[`Che mi dici dei parchi?`,`Londra è piena di parchi: St James's, Hyde Park, Regent's Park. Appena c'è il sole si sdraiano tutti sull'erba. E di mattina i corridori superano anche i piccioni.`],
[`Perché sei sempre così puntuale?`,`Perché il treno non aspetta e il capo nemmeno. In compenso la sera mi prendo un'ora al pub con i colleghi: il lavoro finisce davvero quando suona la campana dell'ultimo giro.`],
[`Che mi dici dei piccioni?`,`Sono i veri padroni della città. A Trafalgar Square erano a migliaia, oggi molti di meno. Ma al mattino, davanti a un croissant, nessuno resiste.`],
[`Come si saluta un collega?`,`Con un 'You alright?' che non aspetta risposta. Rispondi 'yeah, you?' e si prosegue. Se rispondi davvero come stai, diventi sospetto.`],
[`Che mi dici del Natale a Londra?`,`Luci in Oxford Street, mercatini sul fiume, pattinaggio sul ghiaccio e il maglione natalizio più brutto in ufficio. È una gara seria: vince il più orribile.`],
[`Quali sono i quartieri più belli?`,`Notting Hill con le case colorate, Camden con i mercati, Greenwich con il parco. Ognuno ha la sua Londra: la mia sta tra un ufficio e una panchina.`],
[`Che mi dici dei turisti sulla Tube?`,`Si fermano a leggere la mappa nel punto più stretto. Io li guido con un sorriso e due parole: 'excuse me, left side'. E se ne vanno ringraziando.`],
[`Hai un consiglio per una buona giornata?`,`Alzati presto, cammina lungo il fiume e prenditi il tempo per un caffè. Il resto, a Londra, arriva da solo... a volte con la pioggia, ma arriva.`]
],
lon_guida:[
[`Come hai iniziato a fare la guida?`,`Studiavo storia e mi perdevo nelle stradine. Un giorno un turista mi ha chiesto indicazioni e mi sono accorta che raccontavo più del necessario. Così ho preso l'ombrello giallo.`],
[`Perché l'ombrello giallo?`,`Si vede da lontano, anche tra mille cappotti grigi. Basta alzarlo e il gruppo mi ritrova. A Londra un ombrello colorato è più utile di una mappa.`],
[`Io sono stato al British Museum: che mi dici?`,`Un bel posto da cui cominciare! Aprì al pubblico nel 1759 e l'ingresso è gratuito. Circa otto milioni di oggetti, anche se se ne vede solo una piccola parte.`],
[`Mi parli della Stele di Rosetta?`,`È la chiave dei geroglifici: tre scritture, lo stesso testo. Fu trovata nel 1799 e nel 1822 Champollion la usò per decifrarli. Sta lì, dietro un vetro, e la gente fa la fila.`],
[`Che mi dici dei marmi del Partenone?`,`Stanno nelle sale greche: fregi e statue portati a Londra da Lord Elgin a inizio Ottocento. Se ne discute da decenni, perché la Grecia chiede che tornino ad Atene.`],
[`E le mummie?`,`Le sale egizie sono le più affollate: mummie, sarcofagi e persino mummie di gatti. Se hai tempo, fermati davanti ai piccoli oggetti: amuleti, gioielli, giochi da tavolo.`],
[`Che mi dici della Great Court?`,`Il cortile con il tetto di vetro, aperto nel 2000 e disegnato da Norman Foster. Al centro c'è la vecchia Sala di Lettura rotonda, dove studiò anche Karl Marx.`],
[`Mi racconti degli scacchi di Lewis?`,`Pezzi del XII secolo scolpiti in zanna di tricheco, trovati su un'isola scozzese nel 1831. Hanno facce buffe e occhi sgranati. Dicono che abbiano ispirato gli scacchi dei maghi nei film.`],
[`Che mi dici dell'elmo di Sutton Hoo?`,`Un elmo anglosassone del VII secolo, venuto fuori da una nave sepolta nel Suffolk. Sembra la maschera di un guerriero: l'originale era in frantumi, quello esposto è ricostruito.`],
[`Che mi dici del Science Museum?`,`Siamo a South Kensington, e l'ingresso è gratuito. Dentro ci sono le prime locomotive, aerei appesi al soffitto e la capsula dell'Apollo 10. Il futuro lì è già un po' antico.`],
[`Che mi dici della locomotiva Rocket?`,`La Rocket di Stephenson, del 1829, è uno dei treni più celebri. Ti fa capire che la rivoluzione industriale ha cambiato Londra più di qualsiasi sovrano.`],
[`Che mi dici della macchina di Babbage?`,`Charles Babbage progettò macchine per calcolare nell'Ottocento. La Difference Engine No. 2, costruita nel Novecento sui suoi disegni, funziona e fa girare ingranaggi su ingranaggi.`],
[`Che altri musei mi consigli lì vicino?`,`A South Kensington, accanto al Science Museum, ci sono il Natural History Museum con lo scheletro della balena blu e il V&A, pieno di arte e design. Tre musei, un'intera giornata.`],
[`Perché i musei sono gratuiti?`,`Molti musei nazionali sono gratis per le collezioni permanenti, mentre le mostre speciali si pagano. Si entra, si esce, si ritorna: un museo qui è una piazza coperta.`],
[`Mi parli di St Paul?`,`La cattedrale di Christopher Wren: costruita dopo il Grande Incendio del 1666, terminata nel 1710. La cupola è una delle più grandi al mondo e domina l'orizzonte della City.`],
[`Quanti scalini ci sono?`,`Fino alla Whispering Gallery sono 257, fino alla Stone Gallery 376 e fino alla Golden Gallery 528. Con il fiato corto, ma con la vista migliore sulla città.`],
[`Cos'è la Whispering Gallery?`,`Una galleria interna alla cupola, dove un sussurro contro il muro si sente dall'altra parte, a decine di metri. È un gioco di acustica, e fa sempre ridere i bambini.`],
[`Chi è sepolto a St Paul?`,`Nella cripta riposano Wellington, Nelson e lo stesso Wren. Sulla sua tomba una frase in latino dice: se cerchi il suo monumento, guardati intorno. L'edificio è il suo ricordo.`],
[`Che mi dici dei bombardamenti?`,`Nel 1940, durante il Blitz, la cattedrale rimase in piedi tra il fumo e le fiamme. Una fotografia della cupola circondata dal fumo divenne il simbolo della resistenza di Londra.`],
[`Cos'è il Millennium Bridge?`,`Un ponte pedonale in acciaio che unisce St Paul alla Tate Modern. Il giorno dell'inaugurazione, nel 2000, oscillava: lo chiamarono 'wobbly bridge'. Poi l'hanno sistemato.`],
[`Che mi dici di Westminster Abbey?`,`Dal 1066 qui si incoronano i re, e ci si sposa e si dice addio. Dentro ci sono tombe di poeti, scienziati e sovrani. Prenditi tempo, perché ogni pietra ha un nome.`],
[`Dov'è l'Angolo dei Poeti?`,`Nel transetto sud dell'Abbazia. Il primo poeta sepolto fu Chaucer, e da allora ne sono arrivati tanti altri. Camminare lì è come sfogliare la letteratura inglese sotto i piedi.`],
[`Qual è il percorso più bello a piedi?`,`Parti da Westminster, attraversa il ponte, segui il fiume verso la ruota e il Tower Bridge, poi passa sul Millennium Bridge fino a St Paul. Una giornata di camminata, sempre con l'acqua accanto.`],
[`Che mi dici del Big Ben?`,`La torre si chiama Elizabeth Tower e il Big Ben è la campana. Dal 2022 è finalmente di nuovo libera dalle impalcature: ci sono voluti anni di restauro.`],
[`Chi sono le statue davanti al Parlamento?`,`In Parliament Square ci sono Churchill, Mandela e altri. Churchill con il cappotto e la postura da leone. Quando c'è la nebbia sembra che parli alle nuvole.`],
[`Che mi dici di Buckingham Palace?`,`Dal 1837 è la residenza londinese dei sovrani. Ha 775 stanze e il più grande giardino privato di Londra. Nei mesi estivi si visitano le sale di rappresentanza.`],
[`Che mi dici delle guardie reali?`,`Le Foot Guards sono soldati veri, non figuranti. Li riconosci dai bottoni sulla giubba: a coppie, a gruppi di tre... Ogni reggimento ha il suo segno.`],
[`Cosa mi consigli per un pomeriggio libero?`,`Un tè pomeridiano con scones, panna e marmellata, poi una passeggiata sul fiume al tramonto. E se piove, un museo gratuito: a Londra la pioggia è un invito a entrare da qualche parte.`],
[`Come ci si comporta con la gente?`,`Con cortesia, e senza spingere. Si chiede scusa, si ringrazia, si fa la fila. Se sbagli, ti aiutano con un sorriso tipicamente inglese: quello che non dice niente.`],
[`Che ricordo mi porto via di Londra?`,`La sua varietà: una mattina tra pietre antiche, ponti di ferro e pub caldi. Portati via una cartolina, un po' di pioggia e la voglia di tornare.`]
],
lon_ruby:[
[`Come ti chiami e da quanto vendi?`,`Ruby, e il chiosco era di mia nonna. Vendo fish and chips da quando ero alta quanto il bancone, e ancora oggi mi chiamano 'love' anche i clienti più anziani.`],
[`Cos'è il fish and chips?`,`Pesce impanato e fritto, di solito merluzzo o eglefino, con patate grosse fritte. Si mangia con sale, aceto di malto e magari piselli schiacciati. È il piatto di strada più amato.`],
[`Che pesce usi?`,`Cod e haddock: merluzzo ed eglefino. Il merluzzo è più delicato, l'eglefino più saporito. Dipende dall'umore del cliente... e dal prezzo al mercato.`],
[`Che mi dici dell'aceto?`,`Aceto di malto, sul pesce e sulle patate. Se lo provi, senti l'acido che taglia l'olio. E poi un pizzico di sale: non serve altro.`],
[`Cosa sono i mushy peas?`,`Piselli bolliti e schiacciati, di un verde acceso. Chi non li ha mai provati li guarda con sospetto, poi chiede il bis.`],
[`Che mi dici della salsa tartara?`,`Maionese con cetriolini e capperi: accompagna il pesce fritto. Da ragazza ne mettevo troppa e finivo con le dita unte per tutto il giorno.`],
[`Perché mi dai il pesce nella carta?`,`Una volta si usavano i giornali, poi per igiene si è passati a carta pulita. Il pacchetto tiene il calore e, quando lo apri, sale il vapore: è il momento migliore.`],
[`Cos'è un 'chippy'?`,`Il negozio di fish and chips. Ogni quartiere ha il suo e tutti giurano che il proprio sia il migliore. Io non litigo con nessuno: a me bastano i clienti.`],
[`Quando è nato il fish and chips?`,`Nell'Ottocento: i primi negozi a Londra, aperti da immigrati, risalgono agli anni 1860. In breve divenne il pranzo degli operai e il cibo delle grandi occasioni.`],
[`Che mi dici delle anguille in gelatina?`,`Jellied eels: anguille a pezzetti in gelatina. Piatto storico dell'East End, ancora servito vicino al pie and mash. Non è per tutti, ma chi lo ama lo difende a spada tratta.`],
[`Mi insegni lo slang cockney?`,`Apples and pears sono le scale, dog and bone il telefono, porky pies le bugie. Si dice che un vero cockney sia nato dove si sente il suono delle campane di Bow.`],
[`Che mi dici di Borough Market?`,`A due passi dal London Bridge, uno dei mercati più antichi della città: si vende cibo da secoli. Formaggi, pane, spezie, ostriche: se arrivi con fame, esci con le tasche vuote.`],
[`Questo è il London Bridge?`,`Quello grande con le torri è il Tower Bridge, ma tutti lo chiamano London Bridge e io non correggo più nessuno. Il vero London Bridge è lì vicino: un ponte semplice, di cemento.`],
[`Che mi dici del vecchio London Bridge?`,`Il ponte ottocentesco fu venduto a un americano e rimontato in Arizona, a Lake Havasu City, nel 1971. Si dice che pensasse di comprare il Tower Bridge: sarà leggenda, ma fa ridere.`],
[`Come funziona il Tower Bridge?`,`Le due parti centrali, i bascule, si alzano per far passare le navi. Fu costruito tra il 1886 e il 1894 e si apre ancora centinaia di volte l'anno: è uno spettacolo.`],
[`Cosa c'è sopra le torri?`,`Due passerelle in alto, con il pavimento di vetro, a circa quaranta metri dall'acqua. Camminarci sopra fa girare la testa, ma la vista sul Tamigi è la più bella.`],
[`Di che colore è il Tower Bridge?`,`Oggi è azzurro e bianco. Nel tempo è stato marrone, poi rosso, bianco e blu per il Giubileo del 1977. Ogni tanto lo ridipingono e Londra se ne accorge.`],
[`Che mi dici del Tamigi?`,`Il Tamigi sale e scende con la marea fino a Teddington. Quando il livello è basso, ai piedi dei ponti compare la riva fangosa, piena di cocci e monete antiche.`],
[`Cos'è il mudlarking?`,`Cercare tesori sulla riva a bassa marea: pipe di argilla, cocci, monete, qualche chiodo romano. Serve un permesso e la pazienza di un pescatore. La storia sta sotto il fango.`],
[`Cos'è il Monument?`,`Una colonna alta 61 metri che ricorda il Grande Incendio del 1666. L'altezza è uguale alla distanza dal punto dove cominciò il fuoco, in una panetteria di Pudding Lane.`],
[`Che mi dici della Torre di Londra?`,`Un castello di quasi mille anni: ci sono i gioielli della corona, i corvi e i Beefeater con le uniformi rosse e nere. La leggenda dice che se i corvi se ne vanno cade il regno.`],
[`Chi sono i Beefeater?`,`Gli Yeoman Warders, guardie della Torre. Sono ex militari che oggi fanno da guide con storie un po' macabre e un po' comiche. Vivono dentro la Torre con le famiglie.`],
[`Che mi dici dello Shard?`,`Il grattacielo di vetro, 310 metri, inaugurato nel 2012. Quando c'è il sole sembra una scheggia di ghiaccio. Dalla cima la città si vede come un modellino.`],
[`Che mi dici della HMS Belfast?`,`Un incrociatore della Seconda guerra mondiale ormeggiato qui vicino: oggi è un museo galleggiante. Si sale, si scende, si scopre la cucina e la sala macchine.`],
[`Che mi dici del fiume la mattina?`,`Ha una luce argentea e un odore di acqua e di legno. I gabbiani arrivano come clienti fissi. Se vieni presto, hai il ponte quasi tutto per te.`],
[`Qual è il tuo orario di lavoro?`,`Apro alle otto per i pendolari, poi c'è l'ora di punta a pranzo. Il pomeriggio i turisti sbucano dal ponte e comprano una porzione da dividere in due. Chiudo quando la luce cala.`],
[`Cosa si beve con il fish and chips?`,`Tè dolce, una pinta, oppure una limonata fatta in casa. I bambini bevono un succo di frutta e fanno rumore con la cannuccia. Io prendo un tè e guardo il fiume.`],
[`Chi sono i tuoi clienti fissi?`,`Un operaio con l'elmetto giallo, una signora con un cagnolino che vuole solo una patatina, un architetto che sa tutto dei ponti. Mi raccontano la città senza accorgersene.`],
[`C'è una regola per mangiare il pesce?`,`Mangia caldo, con le mani, appoggiato alla ringhiera. Se lo mangi seduto in macchina non è la stessa cosa. E guarda i gabbiani: ti osservano come avvocati.`],
[`Cosa mi consigli di vedere qui intorno?`,`Il Tower Bridge, la Torre di Londra, il Borough Market e una passeggiata lungo la South Bank. Poi vai a St Paul a piedi, attraverso il ponte pedonale: la vista è magnifica.`]
],
lon_guardia:[
[`Chi sei e a quale reggimento appartieni?`,`Sono un soldato dei Foot Guards, in servizio a Buckingham Palace. Il nome lo tengo per il rapporto, ma quando smonto mi chiamo Will.`],
[`Come si distinguono i reggimenti?`,`Dai bottoni sulla giubba: i Grenadier li hanno distanziati, i Coldstream a coppie, gli Scots a gruppi di tre, gli Irish a quattro e i Welsh a cinque. Dettagli che il pubblico non nota, e che noi non dimentichiamo.`],
[`E i pennacchi sul berretto di pelo?`,`Sul bearskin il pennacchio cambia: i Grenadier lo hanno bianco a sinistra, i Coldstream rosso a destra, gli Irish blu a destra, i Welsh bianco e verde a sinistra. Gli Scots non ne portano.`],
[`Com'è fatto il bearskin?`,`È alto e pesante: dopo un'ora di servizio lo senti eccome. Ma tiene il collo dritto, e con il collo dritto si sta in piedi per ore.`],
[`Posso farti ridere?`,`Posso resistere. Mi addestrano a stare fermo, anche quando un bambino mi fa le smorfie. Dentro, magari, sorrido. Fuori: nessuna espressione.`],
[`Che mi dici della cerimonia del cambio?`,`Si chiama Changing the Guard. Una squadra sostituisce l'altra con la banda, i passi cadenzati e gli ordini urlati. Di solito comincia verso le undici, ma non ogni giorno.`],
[`Che musica suona la banda?`,`Marce militari, ma ogni tanto anche canzoni famose: il maestro sceglie un pezzo pop per sorprendere i turisti. Noi marciamo al ritmo, con la faccia seria.`],
[`Perché portate la giubba rossa?`,`È una tradizione militare di secoli. In inverno indossiamo il cappotto grigio. Il rosso è per le giornate di gala, le mattine di sole e i turisti con la macchina fotografica.`],
[`Come fate a non svenire?`,`Con l'addestramento: si muovono le dita dei piedi, si respira piano e si beve molta acqua prima del turno. Ogni tanto qualcuno cede, ma succede più in estate.`],
[`Quanto dura il turno?`,`Sul posto stiamo poco alla volta: due ore di guardia e poi cambio. Dopo, riposo e tè caldo. La giornata comincia presto, con l'uniforme da lucidare e gli stivali da far brillare.`],
[`Siete davvero soldati?`,`Sì. Siamo fanteria vera, con addestramento di combattimento. Il servizio di guardia è un compito di onore, ma quando serve siamo mandati dove serve.`],
[`Che mi dici del Palazzo?`,`Buckingham Palace: dal 1837 residenza dei sovrani. La facciata che vedi è del 1913, in pietra chiara. Dietro ci sono 775 stanze e un giardino con un lago.`],
[`Come capisco se il Re è a palazzo?`,`Guarda la bandiera sul tetto: se c'è lo stendardo reale, il sovrano è dentro. Se vola la Union Jack, è fuori. Oggi vola la Union Jack, ma noi controlliamo sempre, per abitudine.`],
[`Cos'è il balcone famoso?`,`Quello al centro: la famiglia reale si affaccia nelle occasioni speciali, come la parata di giugno per il compleanno ufficiale del sovrano. La piazza si riempie di bandiere.`],
[`Che mi dici del Mall?`,`La strada rossa che porta all'Admiralty Arch. È asfaltata di rosso e nelle cerimonie si riempie di cavalli, carrozze e persone. Camminarla è come entrare in una cartolina.`],
[`E il Victoria Memorial?`,`Il grande monumento bianco con la Vittoria alata dorata, davanti al palazzo: ricorda la regina Vittoria. Di sera sembra una torta di marmo.`],
[`Che mi dici di St James's Park?`,`È il parco accanto: laghetto, ponticelli e pellicani che ci vivono da secoli. Se hai del pane, tienilo per le anatre: i pellicani non accettano offerte.`],
[`Come sono i giardini del palazzo?`,`Circa sedici ettari, con un laghetto e prati per le feste estive. È il giardino privato più grande di Londra, e noi lo guardiamo dal cancello.`],
[`Posso visitare il palazzo?`,`In estate aprono le sale di rappresentanza ai visitatori. Si cammina fra lampadari, tappeti rossi e sale dorate. Poi si esce nel giardino con le scarpe che brillano.`],
[`Che mi dici dei cavalli?`,`Da Horse Guards arrivano i cavalieri della Household Cavalry, con elmo e piume. Il cavallo è più paziente di me: non muove un orecchio finché non glielo ordinano.`],
[`Cosa fai se qualcuno ti provoca?`,`Prima avviso: 'Stand back!'. Poi, se serve, chiamo chi di dovere. Non siamo statue: abbiamo fucili, ordini e un pessimo senso dell'umorismo quando ci toccano.`],
[`Come ci si allena per stare fermi?`,`Ore di addestramento sulla piazza d'armi: mani, piedi, spalle. Se non ti muovi, vedi tutto. Se ti muovi, perdi il punto. E poi c'è il segreto: pensa a una cosa noiosa.`],
[`Che mangi nei turni di guardia?`,`Prima del turno, un'ottima colazione inglese. Dopo, un panino e tanto tè. I pasti caldi arrivano dalla caserma: Wellington Barracks, qui accanto.`],
[`Come ti sei arruolato?`,`A diciotto anni, dopo un lavoro in officina. Mi piacevano la disciplina e la compagnia. Mia madre voleva un impiegato di banca, ma ha pianto d'orgoglio il giorno del mio primo cambio.`],
[`Che mi dici della pioggia?`,`Si resta sotto la pioggia, con il cappotto bagnato e lo sguardo dritto. Se ti scappa uno starnuto, si finge che sia il vento. In cambio, quando spunta il sole, tutto brilla.`],
[`Qual è la parte più difficile?`,`Il prurito sul naso, in un giorno di sole. Poi il pubblico che ti fotografa da mezzo metro. Il resto è routine, e la routine aiuta.`],
[`E la più bella?`,`Quando una bambina mi saluta con la mano e mi dice 'good morning'. In servizio non rispondo, ma dentro sorrido tutto il giorno.`],
[`Cosa pensi dei turisti?`,`Sono parte del paesaggio: rumorosi, curiosi e quasi sempre educati. Se mi chiedono dov'è il bagno più vicino, indico con gli occhi.`],
[`Cosa mi consigli di vedere qui vicino?`,`Il Mall, St James's Park, Horse Guards, Trafalgar Square e Westminster. Dal Palazzo al Big Ben a piedi ci metti una ventina di minuti: una passeggiata completa.`],
[`Posso salutarti prima di andare?`,`Con piacere. Sull'attenti, lo sguardo dritto e un cenno del mento: è il mio saluto. Buona strada, e porta con te la mattina di Londra.`]
]
};
Object.assign(TOPX,TOPX_LN);
})();
