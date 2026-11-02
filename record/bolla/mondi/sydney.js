/* ---------- SYDNEY · Da Bondi Beach alla Central Station (Bondi Beach, The Rocks e Harbour Bridge, Circular Quay e Opera House, Royal Botanic Garden e Mrs Macquarie's Chair, Chinatown e Darling Harbour, Manly e Freshwater, Luna Park, Central Station) ---------- */
/* Un'intera giornata da sinistra a destra: alba a Bondi Beach, mattina a The Rocks sotto l'Harbour Bridge, tarda mattina a Circular Quay
   e all'Opera House, mezzogiorno al Royal Botanic Garden e a Mrs Macquarie's Chair, primo pomeriggio a Chinatown e Darling Harbour,
   pomeriggio a Manly e Freshwater (in traghetto), tramonto a Luna Park e Milsons Point, sera e notte alla Central Station.
   In fondo al binario c'è il varco. Testi, tappe e dialoghi vengono da sydney.txt (definitivi). Gli oggetti stanno in elementi.js (nomi che iniziano per "sy").
   La città sorge sulla terra del popolo Gadigal della nazione Eora: il tono verso questa storia è sempre rispettoso. */
(function(){
const GT=372,W1=17400;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln}=PR._rm;
const {nf,lit,guscio,lampN}=PR._sy;
const md=(i,n)=>((i%n)+n)%n;
const LIT='rgb(255,226,150)';
const SA='#d9a24a',SA2='#b9803a',SA3='#ecc682',IR='#2a2e34',AC='#7a828c',AC2='#5a626c';
const Z=[0,2400,4600,6800,8800,11000,13400,15400,W1+400];   /* inizio di ognuna delle 8 zone */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* ---- cielo: alba con velo rosa sull'oceano, mattina azzurra e limpida, mezzogiorno pieno, pomeriggio caldo e dorato, tramonto rosa-arancio, crepuscolo viola, notte ---- */
const SKY=[[0,['#8a98c8','#f6b4b8','#ffd8b8']],[1200,['#5aa0e4','#e4d4de','#fbe6cc']],[2400,['#2e94f0','#9cd4f8','#e0f2fa']],[4600,['#2a98f4','#a8dcfa','#e8f6fa']],[6800,['#2a94f2','#b4e0fa','#f0f8fa']],[8800,['#3a9cec','#c4e4f6','#f6f0d6']],[11000,['#5a9ce0','#f0dca8','#fcd080']],[12800,['#7a8ccc','#f4b88a','#ff9c5c']],[14000,['#8a6cc0','#f49a7a','#ff8458']],[15000,['#5a4aa0','#d0607e','#f88a5a']],[15500,['#2c2c78','#7a4a90','#d8706e']],[16100,['#0a1038','#1c2862','#4a3a6a']],[99999,['#0a1038','#1c2862','#4a3a6a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO=`Sydney, dall’alba alla notte. Parti all’alba a Bondi Beach, quando i surfisti sono già in acqua e la piscina sull’oceano riflette la prima luce; poi The Rocks, il quartiere più antico, e l’Harbour Bridge sopra la tua testa. A metà mattina Circular Quay e l’Opera House, a mezzogiorno il Royal Botanic Garden fino alla panchina di pietra di Mrs Macquarie. Nel primo pomeriggio Chinatown e Darling Harbour; poi il traghetto per Manly, dove il surf arrivò da lontano. Al tramonto Luna Park, con il suo faccione sorridente e il ponte in controluce; a notte la Central Station ti aspetta con i suoi treni. Il tempo qui si piega: i sydneysiders di ogni epoca ti vengono incontro, e la città è quella di oggi.`;
const LKTXT=[
`Bondi Beach: la spiaggia più famosa d’Australia, una grande mezzaluna di sabbia dorata. Il nome viene da una parola aborigena; si dice che voglia dire "onde che si frangono sulle rocce". All’alba è piena di surfisti, e di giorno i bagnini controllano il mare tutto l’anno.`,
`Il Bondi Surf Bathers’ Life Saving Club è nato nel 1907, ed è il più antico club di salvataggio in mare d’Australia (per molti, del mondo). Il "reel", la cintura con la corda per recuperare i nuotatori, fu usato la prima volta proprio su questa spiaggia, il 23 dicembre 1906.`,
`Il Bondi Icebergs: un club di nuotatori d’inverno nato nel 1929, con una piscina sull’oceano scavata nella roccia. Le onde ci si infrangono dentro, e si nuota anche con il freddo. Nome azzeccato: sembra di nuotare fra gli iceberg.`,
`La Bondi to Coogee Coastal Walk: un sentiero di 6 chilometri scavato nelle scogliere di arenaria, con Tamarama, Bronte, Clovelly e Gordons Bay lungo la strada. Da maggio a novembre si vedono passare le balene. A ottobre e novembre ci sono le sculture all’aperto di Sculptures by the Sea.`,
`The Rocks: il quartiere più vecchio di Sydney, con i primi insediamenti europei del 1788. Vicoli di pietra, pub antichi, vecchie case di arenaria. Il suo nome viene dalle rocce su cui sorgevano le prime capanne. Nel weekend c’è il mercato.`,
`Il ponte è stato aperto il 19 marzo 1932, dopo circa otto anni di lavori. Alto 134 metri, largo 49, fatto con più di 52.000 tonnellate di acciaio e circa sei milioni di rivetti. Per la sua forma i sydneysiders lo chiamano "the Coathanger", l’attaccapanni.`,
`Il giorno dell’inaugurazione, un cavaliere di nome Francis de Groot spuntò a cavallo e tagliò il nastro con la sua sciabola, prima del premier Jack Lang: fu arrestato e multato di cinque sterline. Il nastro fu poi tagliato di nuovo, in forma ufficiale.`,
`Sydney Cove: la baia dove il 26 gennaio 1788 sbarcò la Prima Flotta, con il governatore Arthur Phillip. Qui da sempre vivevano i Gadigal. Per molti aborigeni quel giorno è un lutto e una resistenza, non una festa.`,
`Circular Quay: il porto dei traghetti di Sydney, sulla baia dove sbarcò la Prima Flotta. In origine si chiamava "Semi-Circular Quay", per la forma. Qui ci sono cinque pontili per i traghetti e il terminal di tutte le linee del porto.`,
`L’Opera House: aperta il 20 ottobre 1973 dalla regina Elisabetta II. Il concorso del 1955 ebbe 233 progetti da 32 paesi, e vinse il danese Jørn Utzon. Inizialmente si pensava di spendere 7 milioni di dollari; alla fine ne costò 102. Dal 2007 è Patrimonio UNESCO.`,
`Il rivestimento delle vele è fatto di 1.056.000 piastrelle svedesi, lucide e opache, bianche e color crema, che al sole brillano. Dietro ci sono circa 2.400 costole di cemento e 4.000 pannelli prefabbricati.`,
`Dentro l’Opera House c’è la Utzon Room, inaugurata nell’ottobre 2004: una sala con un grande arazzo, dedicata all’architetto, con vista sul porto. È stato l’ultimo lavoro di Utzon per l’edificio.`,
`Il Royal Botanic Garden: fondato nel 1816 dal governatore Macquarie, sul luogo della prima fattoria della colonia, del 1788. Circa 30 ettari fra il mare e la città, ed è la più antica istituzione scientifica d’Australia. È un posto dove i sydneysiders fanno la pausa pranzo.`,
`Mrs Macquarie’s Chair: una panchina scavata nella roccia dai detenuti nel 1810 per Elizabeth, moglie del governatore. Da qui si vedono insieme l’Opera House e il ponte. La zona, per i Gadigal, si chiama Yurong Point.`,
`Il Calyx: un grande centro di piante tropicali, aperto nel 2016 dove una volta c’era la serra a piramide. In giardino cresce anche un esemplare del pino di Wollemi, un albero "fossile" scoperto nel 1998 in una gola remota.`,
`Il Macquarie Wall: un muro con un cancello, finito nel 1816 per separare il giardino dal porto. Oggi divide il giardino basso da quello di mezzo, ed è uno dei punti più vecchi del parco.`,
`Chinatown: negli anni Venti era vicino al Capitol Theatre, poi si è spostata a Haymarket. Dixon Street, pedonale, ha un paifang a ciascuna estremità, cioè un arco tradizionale. Il venerdì sera si riempie di bancarelle di cibo asiatico.`,
`Paddy’s Markets: il mercato di frutta, verdura e cianfrusaglie, dal mercoledì alla domenica. Sopra c’è Market City, con un ristorante di dim sum con più di 800 posti.`,
`Il Chinese Garden of Friendship: un giardino cinese tradizionale regalato a Sydney per il Bicentenario del 1988. Padiglioni, laghetto, ponticelli e salici, a due passi dal porto.`,
`Darling Harbour: l’ex porto commerciale, oggi un lungomare con ristoranti, musei e passeggiate. Di giorno ci vanno le famiglie, di sera si accendono le luci sull’acqua.`,
`Il traghetto per Manly: circa 20 minuti da Circular Quay, con vista sull’Opera House, sul ponte e sul porto. È uno dei più bei viaggi in nave a basso costo. Lo slogan di un tempo diceva: "Sette miglia da Sydney e mille miglia dalle preoccupazioni".`,
`Il Corso: una passeggiata pedonale di negozi e caffè che collega il porto alla spiaggia dell’oceano, a circa 300 metri di distanza. Il nome Manly viene da Arthur Phillip, che nel 1788 rimase colpito dal coraggio e dalla fiducia degli uomini aborigeni di questa baia.`,
`Freshwater Beach: qui, la vigilia di Natale del 1914, Duke Kahanamoku fece la prima dimostrazione pubblica di surf in Australia. Una targa blu, sul club dei bagnini, lo ricorda dal 2022.`,
`Fra Freshwater e Shelly Beach, per circa 4 chilometri, c’è una riserva mondiale del surf, dal 2012. È un modo di dire che le onde, qui, vanno protette.`,
`Il Faccione di Luna Park: una faccia sorridente alta 9 metri, con una bocca spalancata che è l’ingresso, fra due torri di 26 metri. Fu disegnata da Rupert Browne nel 1935, quando il parco aprì, il 4 ottobre.`,
`Coney Island: una "casa del divertimento" del 1935, l’unica degli anni Trenta ancora funzionante al mondo. Ha scivoli, specchi deformanti, scale mobili e una grande bocca che ride.`,
`Il Big Dipper, la montagna russa di legno, nuova versione dal dicembre 2021. La ruota panoramica, alta 35 metri con 24 gondole, c’è dal 1982: da lassù, al tramonto, si vede tutto il porto.`,
`Sotto il ponte, sul lato nord, a 600 metri dagli imbocchi del ponte, Luna Park sorge dove prima c’era il cantiere che fabbricava le travi dell’arco. Dal parco, al tramonto, il ponte è una silhouette scura sul cielo arancione.`,
`La Central Station: aperta il 4 agosto 1906, progettata dall’architetto di governo W. L. Vernon, con la pietra di arenaria della cava di Pyrmont. Qui, dove c’era un cimitero, le tombe furono spostate a Botany e altrove per far posto alla stazione.`,
`La torre dell’orologio: entrata in funzione il 3 marzo 1921, alta circa 75 metri. Segna l’ora del grande nodo ferroviario della città.`,
`I binari di Central: all’inizio erano 15, poi se ne aggiunsero altri nel 1914. Oggi è il cuore della rete: i treni a due piani partono per i sobborghi, le Blue Mountains e il sud.`,
`In fondo al binario, la luce di un altro mondo ti chiama.`
];
const NAME={
sy_gaz:`Gaz, il bagnino`,
sy_bennelong:`Bennelong`,
sy_utzon:`Jørn Utzon`,
sy_macquarie:`Il governatore Lachlan Macquarie`,
sy_linh:`Linh, la cuoca di Haymarket`,
sy_duke:`Duke Kahanamoku`,
sy_ruby:`Ruby, la gestrice delle giostre`,
sy_dave:`Dave, il capostazione`
};
const GREET={
sy_gaz:`G’day, mate! Bel posto per cominciare la giornata, eh? Sono Gaz, Pierpaolo, e a quest’ora l’oceano è tutto per noi. Niente panico, she’ll be right.`,
sy_bennelong:`Salute a te, straniero. Questa baia era la nostra molto prima delle vostre navi. Sono Bennelong, del popolo Wangal. Tu sei Pierpaolo: dimmi cosa sei venuto a cercare.`,
sy_utzon:`Buongiorno. Sì, la guardi: una barca, una conchiglia, una nuvola... ciascuno ci vede qualcosa. Sono Utzon, Pierpaolo, e l’ho disegnata da lontano.`,
sy_macquarie:`Buongiorno! Sì, sono io: Lachlan Macquarie, governatore. Tu sei Pierpaolo? Ottimo. Siediti con me: questo posto lo scelse mia moglie, e fu una buona scelta.`,
sy_linh:`Hey, hello! Hai fame? Dai, vieni, siediti: qui nessuno esce a stomaco vuoto. Sono Linh, Pierpaolo, e il mio brodo ha cento anni di storia, anche se ne ho quarantuno.`,
sy_duke:`Aloha! Benvenuto in acqua, amico. Sono Duke, e questa spiaggia mi ha voluto bene. Tu sei Pierpaolo, vero? Vieni, ti racconto come arrivò il surf.`,
sy_ruby:`Ciao, ciao! Fatti sotto: l’avventura comincia qui. Sono Ruby, Pierpaolo, e quella faccia sorridente è la mia capa. Se hai paura, non te lo dico a nessuno.`,
sy_dave:`Buonasera, mate! Hai perso il treno? Non preoccuparti: ce n’è sempre un altro, anche se a volte è in ritardo. Sono Dave, Pierpaolo, e questa stazione è casa mia.`
};
/* ---- edificio generico: finestre su più piani, cornicione, tetto a tegole o piatto, veranda di ferro ---- */
function casa(g,x,w,h,i,k,wall,o){const gt=GT,top=gt-h,fl=Math.max(2,Math.floor((h-34)/34)),n=Math.max(2,Math.floor(w/38));
 rect(g,wall,x,top,w,h);rect(g,'rgba(255,255,255,.14)',x,top,5,h);rect(g,'rgba(0,0,0,.14)',x+w-12,top,12,h);for(let r=0;r<h/16;r++)rect(g,'rgba(0,0,0,.05)',x,top+r*16,w,1);
 for(let r=0;r<fl;r++)for(let q=0;q<n;q++){const wx=x+10+q*(w-34)/(n-1),wy=gt-(r+1)*34-24;rect(g,o.fr||'#3a2e24',wx-2,wy-2,22,30);rect(g,lit(k,i*13+r*7+q)?LIT:'#6a8cac',wx,wy,18,26);rect(g,'rgba(255,255,255,.3)',wx+8.6,wy,1.2,26)}
 rect(g,o.cor||'rgba(0,0,0,.2)',x-3,top-4,w+6,6);
 if(o.roof=='t'){poly(g,o.rc||'#a8402e',[[x-6,top-4],[x+18,top-26],[x+w-18,top-26],[x+w+6,top-4]]);rect(g,'#6a2a22',x+w*.3,top-40,8,16)}else if(o.roof=='f'){rect(g,'#7a828c',x-3,top-10,w+6,6)}
 if(o.ver){rect(g,IR,x-2,gt-70,w+4,3);for(let q=0;q<w/8;q++)rect(g,IR,x+q*8,gt-70,1.4,14);rect(g,IR,x-2,gt-30,w+4,3);for(let q=0;q<w/8;q++)rect(g,IR,x+q*8,gt-30,1.4,12)}
 rect(g,'rgba(0,0,0,.2)',x,gt-8,w,8)}
/* ---- grattacielo di vetro ---- */
function torreV(g,x,w,h,i,k,c){const gt=GT,top=gt-h;const gr=g.createLinearGradient(x,0,x+w,0);gr.addColorStop(0,tn(c[0]));gr.addColorStop(1,tn(c[1]));g.fillStyle=gr;g.fillRect(x,top,w,h);
 for(let r=0;r<h/14;r++)rect(g,'rgba(255,255,255,.1)',x,top+r*14,w,1);for(let q=1;q<w/16;q++)rect(g,'rgba(0,0,0,.12)',x+q*16,top,1,h);
 for(let r=0;r<h/14;r++)for(let q=0;q<w/16;q++)if(lit(k,i*17+r*5+q)&&hr(r*3+q+i)>.5)rect(g,'rgba(255,226,150,.75)',x+q*16+2,top+r*14+2,12,10);
 rect(g,'rgba(255,255,255,.3)',x,top,3,h);rect(g,AC2,x+w*.3,top-14,w*.4,14);ln(g,AC2,1.6,[x+w*.5,top-14,x+w*.5,top-34])}
/* ---- facciate di strada, zona per zona ---- */
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK();
 if(st==1){/* Bondi: case sul pendio con tetti rossi e verande; fra l'una e l'altra si vede l'oceano */
  if(hr(i*3)>.5){PR.sypalma(g,x+w*.5,gt,0,1.1+hr(i)*.3);return}
  casa(g,x+10,w-60,h-30,i,k,['#f0e4cc','#e4c8a0','#d8a888','#f4ecd8'][md(i,4)],{roof:'t',rc:'#b8402e',ver:1});
  if(hr(i*5)>.5){rect(g,'#f4ecd8',x+w-52,gt-60,44,60);for(let q=0;q<3;q++)ar(g,'#8a7a64',x+w-48+q*13,gt,10,34)}return}
 if(st==2){/* The Rocks: arenaria dorata, tetti di tegole, verande di ferro, vecchi pub */
  casa(g,x,w,h-60,i,k,[SA,SA3,'#cf9a46','#e0b468'][md(i,4)],{roof:'t',rc:'#8a3a2a',ver:1,cor:'#a8742e'});
  if(hr(i*7)>.6){rect(g,'#3a2a20',x+w/2-20,gt-92,40,10);txt(g,'PUB',x+w/2,gt-84,8,'#e8c880')}return}
 if(st==3){/* Circular Quay: grattacieli di vetro e il lungo terminal */
  if(md(i,4)==2){rect(g,'#cfd6dc',x-30,gt-70,w+60,70);rect(g,'rgba(120,200,230,.5)',x-30,gt-70,w+60,34);for(let q=0;q<10;q++)rect(g,'rgba(0,0,0,.14)',x-30+q*(w+60)/10,gt-70,1.4,70);return}
  torreV(g,x+10,w-50+hr(i*3)*20,h+40,i,k,[['#5a8aa8','#8ac0d8'],['#6a9ab0','#a8d0dc'],['#4a7a98','#7ab0c8']][md(i,3)]);return}
 if(st==4){/* Giardino botanico: fichi giganti, case vittoriane e una serra */
  if(hr(i*3)>.62){casa(g,x+20,w-60,h-70,i,k,['#d8b890','#e0c8a0'][md(i,2)],{roof:'t',rc:'#7a3a2a',ver:1});}
  else if(hr(i*3)>.4){rect(g,'rgba(190,230,240,.5)',x+20,gt-90,w-50,90);for(let q=0;q<8;q++)rect(g,'rgba(60,90,70,.5)',x+20+q*(w-50)/8,gt-90,1.6,90);poly(g,'rgba(190,230,240,.6)',[[x+20,gt-90],[x+w*.5,gt-130],[x+w-30,gt-90]])}
  PR.syfico(g,x+w*.5,gt,1.4+hr(i)*.6,0);return}
 if(st==5){/* Chinatown: palazzi bassi con insegne luminose e lanterne */
  casa(g,x,w,h-80,i,k,['#b8504a','#d8c080','#5a8a7a','#c8805a'][md(i,4)],{roof:'f'});
  const sw=Math.min(w-30,92);rect(g,'#14110f',x+(w-sw)/2,gt-106,sw,22);const nc=['#ff6aa0','#6af0b0','#ffd84a','#6ac8ff'][md(i,4)];rect(g,k>.1?nc:'#8a8478',x+(w-sw)/2+4,gt-100,sw-8,3);rect(g,k>.1?nc:'#8a8478',x+(w-sw)/2+10,gt-94,sw-30,3);
  for(let q=0;q<3;q++){el(g,'#d8282a',x+20+q*(w-40)/2,gt-62,6,8);if(k>.15)glow(g,x+20+q*(w-40)/2,gt-62,22,'255,120,70',.4*k)}return}
 if(st==6){/* Manly: edifici bassi anni Trenta, insegne luminose, pini di Norfolk */
  if(hr(i*3)>.5){PR.sypino(g,x+w*.5,gt,1.5+hr(i)*.4,0);return}
  casa(g,x+5,w-30,h-70,i,k,['#f0e4cc','#e8d0b0','#d8e4dc','#f4e8d0'][md(i,4)],{roof:'f',cor:'#b8a888'});rect(g,'#14110f',x+30,gt-112,60,16);txt(g,['SURF','CAFÉ','GELATI','SHOP'][md(i,4)],x+60,gt-100,10,k>.1?'#ffe27a':'#e8c040');return}
 if(st==7){/* Luna Park: padiglioni con torri a strisce, giostre illuminate, colonne del ponte in controluce */
  if(md(i,3)==0){for(let q=0;q<8;q++)rect(g,q%2?'#f4f2ea':['#c8281e','#2a6aa8'][md(i,2)],x+w/2-22,gt-190+q*23,44,23);poly(g,'#e8c040',[[x+w/2-26,gt-190],[x+w/2+26,gt-190],[x+w/2,gt-222]]);return}
  rect(g,'#4a2a5a',x,gt-110,w-40,110);for(let q=0;q<7;q++){ar(g,'#1a0a22',x+8+q*20,gt,14,70)}rect(g,'#e8c040',x-3,gt-116,w-34,7);
  for(let q=0;q<10;q++)dot(g,k>.1?'rgba(255,230,140,'+(.6+.4*Math.sin(TT*4+q+i))+')':'#f4ecc8',x+4+q*(w-48)/9,gt-112,2.2);return}
 /* 8: palazzi vittoriani di arenaria e grattacieli illuminati attorno alla stazione */
 if(md(i,3)==1){torreV(g,x+20,80+hr(i)*30,h+80,i,k,['#4a5a7a','#7a8ab0']);return}
 casa(g,x,w,h,i,k,['#c8a870','#bfa064','#d0b078'][md(i,3)],{roof:'f',cor:'#9a7a44'})}
/* ---- livello 0: cielo, sole, luna, nuvole, velo dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-15500)/1500,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/14900,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*250;
 if(xs<15200){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,15)}
 const mu=cl((xs-15400)/2200,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*210;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<2400?'rgba(252,206,214,.75)':xs<11000?'rgba(255,255,255,.85)':xs<15000?'rgba(255,176,140,.7)':'rgba(140,120,190,.4)';
 each(o-((t*6)%340)*.02,340,1,(x,i,r)=>{if(xs>2400&&xs<11000&&r>.5)return;nube(g,x+r*100,40+r*46,.8+r*.5,cc)});
 const fo=cl(1-xs/2400,0,1)*.32;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-9800)/1000,0,1)*cl((12400-xs)/900,0,1)*.14;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-12800)/800,0,1)*cl((15200-xs)/900,0,1)*.24;if(wg>.01){g.fillStyle='rgba(255,110,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: l'oceano e le scogliere, il ponte, le vele dell'Opera House, i grattacieli del centro, il ponte in controluce, le luci dei binari ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const sunset=cl((xs-12800)/1200,0,1)*cl((15600-xs)/1000,0,1);
 /* oceano aperto con l'orizzonte */
 const oc=env(900,2800);if(oc>.02){g.globalAlpha=oc;g.fillStyle=dim('#4aa0d0');g.fillRect(0,hz-4,480,60);g.fillStyle=dim('#7cc4e0');g.fillRect(0,hz-4,480,6);for(let q=0;q<18;q++)rect(g,'rgba(255,255,255,.4)',((q*61+t*6+o*.4)%520)-20,hz+4+hr(q)*40,14+hr(q+2)*18,1.6);g.globalAlpha=1}
 /* scogliera di arenaria a sinistra */
 const sc=env(500,1800);if(sc>.02){g.globalAlpha=sc;const sx=fx(500);poly(g,dim('#c8944a'),[[sx-260,hz+40],[sx-250,hz-26],[sx-200,hz-34],[sx-150,hz-10],[sx-120,hz+40]]);poly(g,dim('#b07a38'),[[sx+120,hz+40],[sx+150,hz-14],[sx+210,hz-22],[sx+280,hz+40]]);g.globalAlpha=1}
 /* porto con il ponte e le vele (zone 2-4) */
 const pr=env(5000,4200);if(pr>.02){g.globalAlpha=pr;g.fillStyle=dim('#3a8ec0');g.fillRect(0,hz+8,480,50);g.fillStyle=dim('#6cb8d8');g.fillRect(0,hz+8,480,5);
  const bx=fx(3800);g.strokeStyle=dim('#6a727c');g.lineWidth=6;g.beginPath();g.moveTo(bx-170,hz+14);g.quadraticCurveTo(bx,hz-100,bx+170,hz+14);g.stroke();rect(g,dim('#6a727c'),bx-190,hz+12,380,5);for(let q=0;q<13;q++){const u=q/12,ax=bx-170+u*340,ay=(1-u)*(1-u)*(hz+14)+2*u*(1-u)*(hz-100)+u*u*(hz+14);ln(g,dim('#6a727c'),1,[ax,ay,ax,hz+12])}rect(g,dim('#a09478'),bx-196,hz-30,14,44);rect(g,dim('#a09478'),bx+182,hz-30,14,44);
  const ox=fx(5900);guscio(g,ox-24,hz+16,20,34,2,dim('#f4f0e4'),dim('#d8ceb4'),t,0);guscio(g,ox,hz+16,26,50,6,dim('#f4f0e4'),dim('#d8ceb4'),t,0);guscio(g,ox+30,hz+16,22,36,-2,dim('#f4f0e4'),dim('#d8ceb4'),t,0);
  for(let q=0;q<4;q++){const bxx=((q*160+t*(5+q*2)+o*.5)%640)-80;poly(g,dim('#f8f4e8'),[[bxx,hz+30],[bxx,hz+12],[bxx+12,hz+30]]);rect(g,dim('#5a4a3a'),bxx-4,hz+30,22,3)}g.globalAlpha=1}
 /* grattacieli del centro (zone 3-5 e 8) */
 const cb=env(8000,5200);if(cb>.02){g.globalAlpha=.92*cb;const sx=fx(8000);[[-260,30,70],[-220,24,96],[-180,36,60],[-120,28,110],[-70,40,84],[-10,26,140],[40,34,92],[100,30,118],[150,38,74],[210,26,100],[260,34,66]].forEach((b,i)=>{rect(g,dim(i%2?'#8a9ab0':'#9aa8bc'),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2]);if(night>.3)for(let q=0;q<b[2]/9;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.85)',sx+b[0]-b[1]/2+3+(q%3)*8,hz+20-b[2]+q*9,4,3)});
  const tx=sx-10;ln(g,dim('#7a8aa0'),3,[tx,hz+16,tx,hz-150]);rect(g,dim('#8a9ab0'),tx-9,hz-120,18,16);ln(g,dim('#7a8aa0'),1.4,[tx,hz-150,tx,hz-170]);g.globalAlpha=1}
 /* colline boscose di Manly */
 const mh=env(12200,2800);if(mh>.02){g.globalAlpha=mh;g.fillStyle=dim('#5a8a5a');g.beginPath();g.moveTo(0,hz+40);for(let q=0;q<=24;q++){const px=q*20;g.lineTo(px,hz-14-18*Math.abs(Math.sin((px+o)*.012))-8*Math.sin((px+o)*.04))}g.lineTo(480,hz+40);g.closePath();g.fill();g.globalAlpha=1}
 /* Harbour Bridge in controluce al tramonto, con la silhouette del centro e l'Opera in fondo */
 const hb=env(14400,3000);if(hb>.02){g.globalAlpha=hb;const sx=fx(14400);const dk=mixs('#5a4a6a','#14102a',night);g.strokeStyle=dk;g.lineWidth=9;g.beginPath();g.moveTo(sx-250,hz+22);g.quadraticCurveTo(sx-20,hz-150,sx+220,hz+22);g.stroke();rect(g,dk,sx-262,hz+18,490,7);for(let q=0;q<26;q++){const u=q/25,ax=sx-250+u*470,ay=(1-u)*(1-u)*(hz+22)+2*u*(1-u)*(hz-150)+u*u*(hz+22);ln(g,dk,1.6,[ax,ay,ax,hz+18])}rect(g,dk,sx-270,hz-40,20,64);rect(g,dk,sx+210,hz-40,20,64);
  g.fillStyle=mixs('#e88a5a','#2a2c60',night);g.fillRect(0,hz+24,480,40);for(let q=0;q<9;q++)rect(g,'rgba(255,230,160,.4)',((q*70+o*.3)%520)-20,hz+30+hr(q)*24,26,1.6);const ox=sx+330;guscio(g,ox,hz+26,24,40,4,dk,dk,t,0);guscio(g,ox+22,hz+26,24,30,-2,dk,dk,t,0);g.globalAlpha=1}
 /* le luci e i binari verso la Central Station */
 const v5=env(16500,3200);if(v5>.02){g.globalAlpha=.92*v5;const sx=fx(16500);[[-180,34,60],[-140,26,84],[-100,40,50],[-30,30,96],[10,44,70],[70,30,110],[120,36,64],[170,28,90],[220,40,54]].forEach((b,i)=>{rect(g,dim('#8a96aa'),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2]);if(night>.3)for(let q=0;q<b[2]/9;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.85)',sx+b[0]-b[1]/2+3+(q%3)*8,hz+20-b[2]+q*9,4,3)});
  ln(g,dim('#6a7488'),2,[sx-250,hz-50,sx-250,hz+14]);ln(g,dim('#6a7488'),2,[sx-250,hz-50,sx-200,hz-50]);g.globalAlpha=1}
 if(night>.35)for(let q=0;q<46;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.3)+')',q*11+hr(q)*8,hz+20+hr(q*3)*8,1.2)}
/* ---- livello 2: profili di alberi, tetti e cupole, zona per zona ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;
  if(zz==1){if(hr(i*3)>.4){el(g,dim('#4a7a40'),x+40,hz-34,34,30+r*10);rect(g,dim('#7a5a3a'),x+38,hz-10,4,16)}else{rect(g,dim(['#f0e4cc','#e4c8a0'][md(i,2)]),x+10,hz-30-r*10,70,40+r*10);poly(g,dim('#a8402e'),[[x+6,hz-30-r*10],[x+20,hz-44-r*10],[x+70,hz-44-r*10],[x+84,hz-30-r*10]])}}
  else if(zz==2){rect(g,dim([SA,SA3,'#cf9a46'][md(i,3)]),x,hz-34-r*20,w,44+r*20);poly(g,dim('#8a3a2a'),[[x-4,hz-34-r*20],[x+12,hz-48-r*20],[x+w-12,hz-48-r*20],[x+w+4,hz-34-r*20]])}
  else if(zz==3){rect(g,dim(['#7aa0b8','#8ab0c4','#6a90a8'][md(i,3)]),x+10,hz-50-r*60,60+r*20,60+r*60);rect(g,'rgba(255,255,255,.2)',x+10,hz-50-r*60,4,60+r*60)}
  else if(zz==4){el(g,dim('#3a6a3a'),x+54,hz-20,64,34+r*26);el(g,dim('#4a7a44'),x+20,hz-10,34,24);if(hr(i*3)>.7){rect(g,dim('#d8c8a0'),x+60,hz-40,36,48);poly(g,dim('#7a3a2a'),[[x+56,hz-40],[x+78,hz-56],[x+100,hz-40]])}}
  else if(zz==5){rect(g,dim(['#b8504a','#d8c080','#5a8a7a'][md(i,3)]),x,hz-40-r*30,w,50+r*30);rect(g,dim('#6a727c'),x-3,hz-44-r*30,w+6,5);if(night>.2||hr(i)>.7)rect(g,'rgba(255,110,150,.6)',x+10,hz-30-r*30,w-20,3)}
  else if(zz==6){if(hr(i*3)>.5){const px2=x+54;rect(g,dim('#6a5a44'),px2-2,hz-84,4,90);for(let q=0;q<5;q++){ln(g,dim('#3a7a44'),2.4,[px2,hz-80+q*10,px2-18+q*3,hz-72+q*10]);ln(g,dim('#3a7a44'),2.4,[px2,hz-80+q*10,px2+18-q*3,hz-72+q*10])}}else{rect(g,dim(['#f0e4cc','#e8d0b0'][md(i,2)]),x,hz-34-r*14,w,44+r*14);rect(g,dim('#b8a888'),x-3,hz-38-r*14,w+6,5)}}
  else if(zz==7){rect(g,dim('#5a3a6a'),x,hz-44-r*16,w,54+r*16);for(let q=0;q<7;q++)dot(g,night>.1||hr(q+i)>.6?'rgba(255,226,140,.85)':'#f4ecc8',x+8+q*14,hz-42-r*16,2)}
  else{rect(g,dim('#c8a870'),x,hz-44-r*20,w,54+r*20);if(night>.3)for(let q=0;q<10;q++)if(hr(i*9+q)>.4)rect(g,'rgba(255,226,160,.85)',x+10+(q%4)*22,hz-36-r*20+Math.floor(q/4)*14,8,6);rect(g,dim('#6a6e78'),x+8,hz-52-r*20,w-16,6)}});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
/* ---- livello 3: la strada, zona per zona ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,0,2400,1,i=>130+hr(i*5)*40,150);
 each2(190,8,2400,4600,2,i=>190+hr(i*5)*70,170);
 each2(200,9,4600,6800,3,i=>180+hr(i*5)*60,160);
 each2(210,10,6800,8800,4,i=>170+hr(i*5)*60,200);
 each2(180,11,8800,11000,5,i=>180+hr(i*5)*50,160);
 each2(190,12,11000,13400,6,i=>170+hr(i*5)*50,170);
 each2(170,13,13400,15400,7,i=>110+hr(i*5)*40,160);
 each2(190,14,15400,W1+400,8,i=>180+hr(i*5)*70,170);
 /* i fili dell'alimentazione dei tram e dei lampioni in città */
 if(o+480>2400&&o<15400){g.strokeStyle='rgba(30,30,34,.4)';g.lineWidth=1;for(let q=0;q<40;q++){const wx=2500+q*300,x=wx-o;if(x<-150||x>630||wx>15300)continue;const a2=gt-150-hr(q)*30;g.beginPath();g.moveTo(x,a2);g.quadraticCurveTo(x+150,a2+14,x+300,a2+(hr(q+1)-.5)*8);g.stroke()}}}
/* ---- vita: gabbiani, cacatua e lorichetti, ibis, kookaburra, pipistrelli della frutta, corridori ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 /* gabbiani argentati (spiaggia, porto, Manly) */
 const gg=cl((xs-200)/400,0,1)*cl((2600-xs)/500,0,1),gh=cl((xs-4400)/500,0,1)*cl((6800-xs)/500,0,1),gm=cl((xs-10800)/500,0,1)*cl((13000-xs)/500,0,1);
 [gg,gh,gm].forEach((ga,zi)=>{if(ga>.05)for(let i=0;i<4;i++){const bx=((i*131+t*(40+i*7)+zi*70)%640)-80,by=60+hr(i+zi)*90+Math.sin(t*1.6+i*2)*20,w=Math.sin(t*8+i)*4;g.strokeStyle='rgba(250,250,250,'+(.95*Math.min(1,ga))+')';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-9,by+w);g.quadraticCurveTo(bx-4,by-4,bx,by);g.quadraticCurveTo(bx+4,by-4,bx+9,by+w);g.stroke();rect(g,'rgba(70,80,100,.8)',bx+8,by+w-1,2,1.6)}});
 /* cacatua dal ciuffo giallo e lorichetti: in volo e fra le chiome dei fichi */
 const ca=cl((xs-6500)/400,0,1)*cl((11200-xs)/400,0,1);
 if(ca>.05)for(let i=0;i<6;i++){const bx=((i*107+t*(54+i*5))%600)-60,by=90+hr(i*3)*110+Math.sin(t*2.2+i)*14,w=Math.sin(t*12+i)*4,lor=i%2;
  if(lor){ln(g,'#e8402a',2.6,[bx-8,by+w,bx,by,bx+8,by+w]);dot(g,'#2a8ac8',bx+6,by-2,2.6);dot(g,'#4aa84a',bx-2,by,2.4)}
  else{ln(g,'#fbfbf4',3.2,[bx-9,by+w,bx,by,bx+9,by+w]);dot(g,'#fbfbf4',bx+6,by-3,3);ln(g,'#f2d020',2,[bx+5,by-5,bx+2,by-11])}}
 /* kookaburra sui rami: Giardino botanico e Manly */
 [7360,8460,12320].forEach((kx,ki)=>{const px=kx-cam;if(px<-30||px>510)return;A.setDK(nf(kx));const by=GT+8;ln(g,'#6a5a44',3,[px-30,by+2,px+30,by-2]);el(g,'#8a6a4a',px,by-9,7,9);dot(g,'#e8dcc4',px+4,by-20,6);rect(g,'#4a3a2a',px-2,by-22,10,3);poly(g,'#4a3a2a',[[px+8,by-18],[px+20,by-16-Math.sin(t*5+ki)*2],[px+8,by-13]]);ln(g,'#6a4a2a',3,[px-6,by-3,px-14,by+10])});
 /* ibis bianchi dal collo scuro (i "bin chickens") che camminano per le zone 3-6 */
 [[4900,0],[5320,1],[6120,0],[7100,1],[7700,0],[9100,1],[9700,0],[10900,1],[11800,0]].forEach((d,i)=>{const wx=d[0]+((t*(4+i%3))%90)*(d[1]?-1:1),px=wx-cam;if(px<-30||px>510)return;A.setDK(nf(wx));const by=GT+34+(i%3)*14,dr=d[1]?-1:1;
  el(g,'#f4f4f0',px,by-14,9,6);ln(g,'#2a2a2e',2,[px+dr*7,by-16,px+dr*9,by-26]);dot(g,'#2a2a2e',px+dr*10,by-28,2.8);poly(g,'#2a2a2e',[[px+dr*11,by-29],[px+dr*20,by-24],[px+dr*11,by-26]]);ln(g,'#2a2a2e',1.4,[px-2,by-9,px-2,by]);ln(g,'#2a2a2e',1.4,[px+3,by-9,px+4+Math.sin(t*4+i)*2,by])});
 /* pipistrelli della frutta all'imbrunire */
 const sa=cl((xs-13300)/500,0,1)*cl((16200-xs)/700,0,1);
 if(sa>.05)for(let i=0;i<9;i++){const bx=((i*97+t*(50+i*6))%620)-70,by=60+hr(i)*110+Math.sin(t*2.4+i*2)*20,w=Math.sin(t*6+i)*7;g.strokeStyle='rgba(30,16,40,'+(.85*sa)+')';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-14,by+w*.4);g.quadraticCurveTo(bx-6,by-8-w,bx,by);g.quadraticCurveTo(bx+6,by-8-w,bx+14,by+w*.4);g.stroke();el(g,'rgba(30,16,40,'+(.85*sa)+')',bx,by+2,3,3.6)}
 /* corridori sulla passeggiata di Bondi e nei giardini; ciclisti in città */
 [[200,2300,60,0],[6900,8700,-34,1],[11100,13300,34,2]].forEach((rg,ri)=>{for(let i=0;i<(ri?2:3);i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.2),wx=rg[0]+(((t*sp+i*span/3)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));const d=sp>0?1:-1,by=GT+22+i*9;g.save();g.translate(px,by);g.scale(d*.6,.6);
  fig(g,0,0,t*3,{f:1,s:.7,ph:i,skin:'#e0b090',top:['#e8505a','#2a8a9a','#f2c82a'][i],bot:'#2a2a36',hair:'#2a1a10'});g.restore()}})}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[0,2400,'#e8d4a2','s'],[2400,4600,'#c2a878','c'],[4600,6800,'#d8d4cc','m'],[6800,8800,'#d6cfb4','g'],[8800,11000,'#a8584a','c'],[11000,13400,'#e2d0a6','s'],[13400,15400,'#7c7c88','p'],[15400,W1+400,'#bcb6a8','m']];
 rect(g,'#e8dcc0',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  if(z[3]=='s'){for(let q=0;q<130;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.28)':'rgba(120,90,40,.18)',x0+((q*47)%Math.max(1,x1-x0)),gt+8+hr(q+3)*138,2+hr(q)*3,1.6);rect(g,'rgba(120,90,50,.12)',x0,gt+3,x1-x0,10);if(z[0]>0){rect(g,'#b88a52',x0,gt+90,x1-x0,26);for(let q=0;q<30;q++)rect(g,'rgba(0,0,0,.14)',x0+((q*37-cam)%Math.max(1,x1-x0)+x1-x0)%Math.max(1,x1-x0),gt+90,1.4,26)}}
  if(z[3]=='g'){rect(g,'#6aa850',x0,gt+3,x1-x0,22);for(let q=0;q<50;q++)rect(g,'rgba(40,100,40,.3)',x0+((q*29)%Math.max(1,x1-x0)),gt+5+hr(q)*18,2,4);rect(g,'rgba(255,255,255,.2)',x0,gt+3,x1-x0,8);for(let q=0;q<110;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.3)':'rgba(120,100,60,.22)',x0+((q*47)%Math.max(1,x1-x0)),gt+30+hr(q+3)*118,2+hr(q)*3,1.6)}
  if(z[3]=='m'||z[3]=='c'){const cob=z[3]=='c';for(let r=0;r<7;r++){const yy=gt+9+r*19,off=(r%2)*(cob?14:0),bw=cob?(34+r*8):(70+r*12),s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil((x1-x0)/bw)+2;k++){const px=s0+k*bw-cam+off,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,.14)':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,.04)',px,yy,bw-2,15);rect(g,'rgba(0,0,0,.16)',px,yy,1.3,17)}rect(g,'rgba(0,0,0,.1)',x0,yy+15,x1-x0,1.4)}}
  if(z[3]=='p'){rect(g,'#9a9ca8',x0,gt+3,x1-x0,24);rect(g,'#e8d84a',x0,gt+27,x1-x0,3);for(let q=0;q<40;q++)rect(g,'rgba(255,255,255,.1)',x0+((q*53)%Math.max(1,x1-x0)),gt+34+hr(q)*110,3,1.6);for(let r=0;r<6;r++)rect(g,'rgba(0,0,0,.14)',x0,gt+40+r*22,x1-x0,1.4);for(let q=0;q<12;q++){const sx=((q*90-cam)%520+520)%520;rect(g,['#e8505a','#2a8ac8','#f2c82a','#2aa88a'][q%4],sx,gt+80+(q%3)*14,40,5)}}
  if(z[0]==15400){rect(g,'#e8d84a',x0,gt+120,x1-x0,3)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1400,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const gd=cl((cam-9800)/700,0,1)*cl((13400-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
 const sg=cl((cam-13000)/700,0,1)*cl((15400-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Gaz: costume rosso e giallo, cappello a tesa larga, zinco bianco sul naso, fischietto, tavola da salvataggio sotto il braccio */
 NP('sy_gaz',NAME.sy_gaz,760,GREET.sy_gaz,{skin:'#e0b090',top:'#c8281e',bot:'#e0b090',hair:'#a8803a',s:1.02},(g,b,t)=>{rect(g,'#f2c82a',-12,-52,24,18);rect(g,'#f2c82a',-13,-90+b,26,8);rect(g,'#f4e6b8',-20,-110+b,40,4);el(g,'#f4e6b8',0,-112+b,13,6);rect(g,'#f4f4f4',6,-99+b,6,3);ln(g,'#f4f4f4',1,[-2,-90+b,-1,-80+b]);dot(g,'#f2c82a',-1,-79+b,2);
  g.save();g.translate(24,-48);g.rotate(-.1);el(g,'#c8281e',0,0,6,38);rect(g,'#f2c82a',-1.6,-30,3.2,60);g.restore()}),
 /* Bennelong: giacca di stoffa europea sopra una cintura di fibra, sguardo attento, mani aperte */
 NP('sy_bennelong',NAME.sy_bennelong,4390,GREET.sy_bennelong,{skin:'#8a5a3a',top:'#3a4a6a',bot:'#7a4e30',hair:'#14110f',s:1.02},(g,b,t)=>{rect(g,'#d8c8a0',-13,-60+b,26,5);for(let q=0;q<6;q++)rect(g,'#a8946a',-12+q*4.4,-60+b,2,12);rect(g,'#f4f0e8',-3,-90+b,6,14);ln(g,'#e8d0a0',1,[-3,-90+b,0,-76+b,3,-90+b]);
  limb(g,-12,-84+b,36,-.35,7,'#8a5a3a');limb(g,12,-84+b,36,.35,7,'#8a5a3a')}),
 /* Utzon: giacca grigia, camicia bianca, capelli bianchi, occhiali, rotolo di disegni, un'arancia nella tasca */
 NP('sy_utzon',NAME.sy_utzon,5660,GREET.sy_utzon,{skin:'#e8c0a0',top:'#7a7e88',bot:'#4a4e58',hair:'#f0f0f0',s:1.02},(g,b,t)=>{poly(g,'#f4f0e8',[[-4,-90+b],[4,-90+b],[0,-80+b]]);dot(g,'#f08a2a',-7,-62,3.4);
  g.strokeStyle=tn('#2a2a2a');g.lineWidth=1.2;g.beginPath();g.arc(7,-100+b,3.8,0,7);g.stroke();g.beginPath();g.arc(-1,-100+b,3.8,0,7);g.stroke();ln(g,'#2a2a2a',1,[2.8,-100+b,3.2,-100+b]);
  rect(g,'#e8dcb8',20,-84,7,40);rect(g,'rgba(0,0,0,.2)',20,-84,2,40);ln(g,'#8a6a2a',1,[21,-84,26,-78])}),
 /* Macquarie: uniforme rossa con spalline dorate, cappello a due punte, spada, stivali lucidi, un rotolo di mappe */
 NP('sy_macquarie',NAME.sy_macquarie,7960,GREET.sy_macquarie,{skin:'#e8b890',top:'#b8281e',bot:'#f0ece0',hair:'#8a7a6a',s:1.02},(g,b,t)=>{rect(g,'#2a2018',-12,-24,10,24);rect(g,'#2a2018',2,-24,12,24);
  poly(g,'#14110f',[[-16,-110+b],[16,-110+b],[4,-124+b],[-4,-124+b]]);rect(g,'#d9b24a',-16,-110+b,32,2.4);rect(g,'#d9b24a',-15,-92+b,8,4);rect(g,'#d9b24a',7,-92+b,8,4);for(let q=0;q<4;q++)dot(g,'#d9b24a',0,-86+b+q*10,1.5);
  ln(g,'#c8c8d0',2,[-14,-60,-24,-14]);rect(g,'#d9b24a',-18,-62,8,3);rect(g,'#e8dcb8',22,-80,7,32);rect(g,'rgba(0,0,0,.2)',22,-80,2,32)}),
 /* Linh: grembiule rosso, cappellino con visiera, bandana, mestolo in mano, una cassetta di verdure */
 NP('sy_linh',NAME.sy_linh,9470,GREET.sy_linh,{skin:'#e8b890',top:'#f4f0e8',bot:'#2a2a36',hair:'#14110f',s:.98},(g,b,t)=>{rect(g,'#c8282a',-12,-90+b,24,46);rect(g,'#c8282a',-9,-92+b,18,6);rect(g,'#2a8a9a',-12,-108+b,24,4);rect(g,'#f4f0e8',-2,-116+b,18,5);rect(g,'#f4f0e8',8,-112+b,12,3);
  ln(g,'#8a6a3a',2,[14,-60,32,-76]);dot(g,'#8a6a3a',33,-77,4);rect(g,'#c8a868',-36,-24,24,24);for(let q=0;q<3;q++)dot(g,['#4aa84a','#e8402a','#f08a2a'][q],-30+q*8,-30,4.2)}),
 /* Duke: costume di lana scuro, capelli neri pettinati, collana di fiori, grande tavola di legno */
 NP('sy_duke',NAME.sy_duke,12560,GREET.sy_duke,{skin:'#b88860',top:'#2a2a30',bot:'#b88860',hair:'#14110f',s:1.04},(g,b,t)=>{rect(g,'#2a2a30',-12,-54,24,12);for(let q=0;q<6;q++)dot(g,['#e8505a','#f4f0e4','#f2c82a'][q%3],-8+q*3.4,-88+b+Math.sin(q*.9)*3,2.4);
  g.save();g.translate(-30,-4);el(g,'#b88a52',0,-62,10,66);rect(g,'#8a5a2a',-1.2,-124,2.4,124);rect(g,'rgba(255,255,255,.2)',-4,-120,2,110);g.restore()}),
 /* Ruby: giacca rossa con logo, capelli raccolti con un fiocco, scarpe da ginnastica, ricetrasmittente, cartellino al collo */
 NP('sy_ruby',NAME.sy_ruby,13850,GREET.sy_ruby,{skin:'#e8b890',top:'#c8281e',bot:'#3a3a52',hair:'#5a3a22',s:.98},(g,b,t)=>{dot(g,'#5a3a22',-5,-116+b,6);poly(g,'#f2c82a',[[-9,-120+b],[-1,-118+b],[-9,-114+b]]);poly(g,'#f2c82a',[[-1,-118+b],[7,-120+b],[7,-114+b]]);
  rect(g,'#f4f0e8',-6,-86+b,12,8);dot(g,'#2a8ac8',0,-82+b,2.4);rect(g,'#2a2a30',8,-70,6,12);ln(g,'#2a2a30',1,[11,-70,11,-76]);rect(g,'#f4f4f4',-12,-4,9,4);rect(g,'#f4f4f4',2,-4,9,4)}),
 /* Dave: giacca arancione con strisce riflettenti, cappello con visiera, radio alla cintura, una tazza di tè, baffi grigi */
 NP('sy_dave',NAME.sy_dave,16760,GREET.sy_dave,{skin:'#e0b090',top:'#f08a2a',bot:'#2a2e3a',hair:'#8a8a8e',s:1.04},(g,b,t)=>{rect(g,'#e8f0f4',-13,-76+b,26,4);rect(g,'#e8f0f4',-13,-62+b,26,4);rect(g,'#2a3a50',-12,-114+b,26,7);poly(g,'#1a2a40',[[8,-108+b],[22,-106+b],[8,-103+b]]);rect(g,'#6a6a70',-3,-98+b,12,2.4);rect(g,'#2a2a30',-10,-56,7,12);
  rect(g,'#f4f0e8',22,-62,9,10);rect(g,'rgba(120,60,20,.7)',22,-62,9,3);for(let q=0;q<3;q++){const u=(t*.5+q/3)%1;dot(g,'rgba(255,255,255,'+(.4*(1-u))+')',26+Math.sin(u*5+q)*2,-66-u*14,2)}})
];
/* ---- testi della scheda: le tappe, nell'ordine in cui si incontrano ---- */
const LX=[450,1000,1560,2050, 2900,3400,3900,4300, 4980,5500,5960,6400, 7500,7880,8200,8520, 9250,9850,10300,10750, 11450,12000,12500,13050, 13750,14150,14560,15020, 15900,16330,16700,17080];
/* ---- oggetti lungo il percorso ---- */
const props=[
 ['sytarga',250,'BONDI BEACH'],['sypalma',120,1.2],['sybondi',450],['sypanca',230,0],['sylamp',320],['sybandiere',520],['sytorre',700],['sytavole',860],['sydoccia',930],['sybagnini',1050],['sypalma',1250,1],['sychiosco',1400,'SURF CAFÉ'],['sycestino',1470],['syicebergs',1620],['sypanca',1860,0],['sypasseggiata',2090],['sypalma',2330,1.1],
 ['sytarga',2480,'THE ROCKS'],['sylamp',2600],['sybacheca',2700],['syrocks',2900],['sylamp',3100],['sybridge',3400],['sylamp',3640],['sypanca',3720,0],['sycavaliere',3900],['sylamp',4120],['sycove',4300],['sycestino',4480],
 ['sytarga',4640,'CIRCULAR QUAY'],['sypontile',4760,2],['syquay',4980],['sybusker',5200],['sypontile',5330,4],['syopera',5500],['sypanca',5800,0],['sylamp',5880],['sybacheca',6000],['sylamp',6200],['sycestino',6320],['sypanca',6500,0],
 ['sytarga',6900,'ROYAL BOTANIC GARDEN'],['syfico',7040,1.2],['syeuca',7220,1.1],['sybotanic',7420],['sylamp',7650],['sychair',7880],['syfico',8060,1.1],['sypanca',8120,0],['sycalyx',8290],['sylamp',8460],['sywall',8580],['syeuca',8760,1]
,
 ['sytarga',8900,'CHINATOWN · HAYMARKET'],['sylamp',9000],['sydixon',9250],['sylanterne',9560],['sylinh',9400],['sypaddy',9850],['sylamp',10080],['sygiardino',10300],['sypanca',10540,0],['sylamp',10620],['sydarling',10760],['sycestino',10950],
 ['sytarga',11100,'MANLY WHARF'],['sylamp',11200,],['syferry',11450],['sypanca',11700,0],['sycorso',12000],['sypino',12240,1.3],['sypino',12320,1],['sytavole',12400],['syfresh',12540],['sypino',12800,1.2],['sypanca',12900,0],['sypino',13060,1.4],['sycestino',13200],
 ['sytarga',13500,'LUNA PARK · MILSONS POINT'],['syfaccione',13750],['sybiglietti',13960],['sylampadine',14040],['syconey',14150],['syzucchero',14420],['sybigdipper',14560],['sylampadine',14860],['symolo',15020],
 ['sytarga',15500,'CENTRAL STATION'],['sycentral',15900],['sylamp',16140,],['sytorreor',16330],['sytabellone',16560],['sycarrello',16620],['sydistr',16440],['sybinari',16760],['syorologio',16690],['sypanmet',16930],['syvarco',17030]
];
/* un lampione ogni tanto, dove la strada è libera */
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'sydney',name:'Sydney · Da Bondi Beach alla Central Station',width:W1,sky:['#8a98c8','#f6b4b8','#ffd8b8'],gt:372,gr:['#e8d4a2','#a89868'],chord:[196,246.9,293.7,370],amb:'#ffe6c0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da sydney.txt) --- */
(function(){
const TOPX_SY={
sy_gaz:[
[`Come ti chiami e che lavoro fai?`,`Gaz, trentaquattro anni, bagnino di Bondi. Sorveglio il mare tutto l’anno, tiro fuori dai guai chi nuota dove non dovrebbe e rimetto a posto le bandiere. È un lavoro all’aperto, e non lo cambierei per niente.`],
[`Che cos’è Bondi?`,`La spiaggia più famosa d’Australia: una mezzaluna di sabbia dorata con onde lunghe. Il nome viene da una parola aborigena; si dice che significhi "onde che si frangono sulle rocce". Ai tempi dei primi coloni era solo bush e dune.`],
[`Come funzionano le bandiere?`,`Rosse e gialle: fra le due bandiere si può nuotare, perché lì i bagnini controllano. Fuori è a proprio rischio e pericolo. Io lo dico sempre: nuota tra le bandiere, e vivrai felice.`],
[`Quando è nato il vostro club?`,`Nel 1907, il Bondi Surf Bathers’ Life Saving Club: il più antico d’Australia, e in molti dicono del mondo. Il "reel", cioè la cintura con la corda per recuperare i nuotatori, fu usato per la prima volta qui il 23 dicembre 1906. Un’invenzione che ha salvato un sacco di gente.`],
[`Cos’è la rip current, la corrente di risacca?`,`Una "strip" di acqua che corre verso il largo e può trascinarti via. Il trucco è non nuotare contro, ma di lato, finché ne esci. Ne salviamo tanti ogni estate, mate, anche turisti italiani.`],
[`Che cos’è Bondi Icebergs?`,`Un club di nuotatori d’inverno, nato nel 1929, con una piscina sull’oceano scavata nella roccia. Le onde ci entrano dentro, e si nuota comunque. Si dice che il nome venga dal gelo dell’acqua: io ci credo.`],
[`Cosa si fa lungo la passeggiata Bondi-Coogee?`,`Sei chilometri su scogliere di arenaria: si passa per Tamarama, Bronte, Clovelly e Gordons Bay, fino a Coogee. Da maggio a novembre si vedono le balene che migrano. In ottobre e novembre ci sono le sculture di Sculptures by the Sea: heaps di gente, ma bellissimo.`],
[`Com’è una giornata tipo qui?`,`Alba: surfisti e corridori; mattina: caffè e brekkie; mezzogiorno: sole e creme solari; pomeriggio: onde, gelati e famiglie. Il sabato mattina, mercati e un po’ di casino. Il weekend, qui, è sacro.`],
[`Che cos’è "Bondi Rescue"?`,`Un programma TV che racconta il lavoro dei bagnini di Bondi, con soccorsi veri. Siamo diventati un po’ famosi, anche se per me è solo lavoro. A volte mi riconoscono pure all’estero: sono imbarazzato e un po’ fiero.`],
[`Che si mangia per colazione a Sydney?`,`Avocado su pane tostato, uova, flat white (un caffè con latte vellutato) e, se ti senti australiano, un po’ di Vegemite sul toast. È una crema salata che si ama o si odia. Prova, ma piano.`],
[`Cos’è lo slang australiano?`,`"Arvo" è il pomeriggio, "brekkie" la colazione, "heaps" vuol dire un sacco, "no worries" è "figurati", e "fair dinkum" vuol dire "davvero". Gli italiani ci capiscono al volo: parliamo veloci, ma con il cuore in mano.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, mate! Va’ a The Rocks e guarda su: il ponte ti aspetta. Stai al sole con la crema, e se ti viene voglia di tornare, la tavola te la presto io. See ya, Pierpaolo!`]
],
sy_bennelong:[
[`Chi sei e a quale popolo appartieni?`,`Sono Bennelong, dei Wangal, un clan sulla riva sud del fiume Parramatta. Sono nato intorno al 1764. Il popolo vicino, i Gadigal, vive qui, alla baia che voi chiamate Sydney Cove.`],
[`Che cos’è successo il 26 gennaio 1788?`,`Arrivarono le undici navi della Prima Flotta, con il governatore Arthur Phillip. Per voi fu la fondazione di una colonia; per noi fu l’inizio di una perdita enorme. Per questo molti dei nostri ricordano quel giorno con dolore e con orgoglio di resistenza.`],
[`Com’è che ti conobbe Phillip?`,`Nel novembre del 1789, il 25, fui catturato con un altro uomo a Manly, per ordine di Phillip, che voleva imparare la nostra lingua e le nostre usanze. Fui trattenuto con la forza. Non è una cosa che dimentico.`],
[`Sei fuggito?`,`Sì, il 3 maggio 1790, dopo che mi fu tolto il ceppo alla gamba, saltai una staccionata e tornai ai miei. Non ero un prigioniero qualunque: volevo anche capire chi erano questi stranieri. Poi tornai, di mia volontà.`],
[`Che rapporto avevi con Phillip?`,`Complicato. Ci scambiammo i nomi, come usa fra amici: io lo chiamavo "Been-èn-a", padre, e lui mi chiamava "Doorow", figlio. Nel settembre del 1790, a Manly, Phillip fu ferito da una lancia, e io ero presente. Non so dire tutto: certe storie hanno più di una verità.`],
[`Che cosa c’è sul promontorio dove ora sorge l’Opera House?`,`Si chiama Tubowgulle, e Phillip mi fece costruire una piccola casa di mattoni, di circa tre metri e mezzo per lato, con il tetto di tegole. Oggi lo chiamate Bennelong Point, con il mio nome. Un onore strano, a metà tra memoria e ironia.`],
[`Com’è stato il viaggio in Inghilterra?`,`Partii con Phillip nel dicembre del 1792 e arrivai a Londra nel maggio del 1793, con un giovane del mio popolo, Yemmerrawanne. Vidi teatri, palazzi e il Parlamento. Era un mondo senza fine, e mi sentii un ospite curioso, non uno di voi.`],
[`Che cos’è successo a Yemmerrawanne?`,`Morì in Inghilterra, nel maggio del 1794, e io ne ebbi un dolore grande. Era giovane, e il freddo e le malattie degli stranieri non perdonano. Tornai a casa senza di lui.`],
[`Come fu il ritorno?`,`Rientrai a Sydney Cove il 7 settembre 1795, su una nave chiamata Reliance. Trovai la baia cambiata e il mio popolo ridotto: le malattie, le terre tolte. Mi sentivo straniero in casa mia.`],
[`Chi era Barangaroo?`,`La mia seconda moglie, una donna forte, di carattere deciso, che non si lasciò addomesticare dagli inglesi. Morì alla fine del 1791. Oggi il suo nome è dato a un quartiere sul porto, e a me piace.`],
[`Come finì la tua vita?`,`Morii il 3 gennaio 1813, a Kissing Point, oggi Putney, nel territorio del popolo Wangal. Non lascio un libro o un monumento di pietra; lascio una storia, e il nome sul promontorio. Il resto è nelle mani di chi ricorda.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Va’, Pierpaolo, e cammina piano sulla terra: ha una memoria lunga. Se passi all’Opera House, saluta il mio promontorio. Che il tuo cammino sia buono.`]
],
sy_utzon:[
[`Chi sei e da dove vieni?`,`Jørn Utzon, nato a Copenaghen il 9 aprile 1918. Sono architetto, figlio di un ingegnere navale: da piccolo amavo le barche, e forse è per questo che l’Opera House sembra una nave. Ho girato il mondo guardando come vivono le persone.`],
[`Come è nata l’Opera House?`,`Con un concorso internazionale, lanciato nel 1955: 233 progetti da 32 paesi. Nel 1957 il mio fu scelto. Per me fu una gioia enorme, e una prova molto dura.`],
[`Da dove ti è venuta l’idea dei "gusci"?`,`Dopo anni di studi, nel 1961 trovai la soluzione sbucciando un’arancia: se riunisci i gusci, formano una sfera. I quattordici gusci dell’edificio sono pezzi di una stessa sfera. È un’idea semplice, e ci è voluto un decennio per costruirla.`],
[`Com’è fatta?`,`Un grande basamento di granito rosa, con sopra le "vele" di cemento coperte da 1.056.000 piastrelle svedesi, bianche e color crema. Dietro ci sono circa 2.400 costole di cemento e 4.000 pannelli prefabbricati. Il sole, sulle piastrelle, fa cose che non si possono disegnare.`],
[`Quanto è costata?`,`Nel 1957 si parlava di 7 milioni di dollari; alla fine ne costò 102. Il progetto era troppo nuovo per essere previsto bene, e i tempi si allungarono. Non fu solo colpa mia, ma in tanti volevano un colpevole.`],
[`Perché hai lasciato il cantiere?`,`Il 28 febbraio 1966 diedi le dimissioni, dopo contrasti con il governo del nuovo Stato e con il ministro. Lasciai Sydney, chiusi il mio studio e dissi che non sarei più tornato. Fu una ferita, ma non ne parlo con amarezza.`],
[`Hai mai visto l’Opera House finita?`,`No: fu aperta il 20 ottobre 1973 dalla regina Elisabetta II, e io non c’ero. Non tornai mai in Australia. La vidi solo in fotografia, e nella memoria.`],
[`Che hai fatto dopo?`,`Ho continuato a progettare: la casa Can Lis a Maiorca, che porta il nome di mia moglie Lis, la chiesa di Bagsværd vicino a Copenaghen e l’Assemblea Nazionale del Kuwait, finita nel 1982. Per la chiesa mi sono ispirato alle nuvole. Sempre la natura, sempre.`],
[`Che cos’è la Utzon Room?`,`Una sala dentro l’Opera House, aperta nell’ottobre del 2004, con una grande vetrata sul porto. Fu l’ultimo grande lavoro che feci per l’edificio, e fu un modo di riconciliarci. Mi dissero che c’era un posto per me; io lo disegnai da lontano.`],
[`Che premio hai vinto?`,`Il Premio Pritzker nel 2003, il massimo riconoscimento per un architetto, anche per l’Opera House. Fui commosso. Ma il premio più bello è vedere la gente seduta sui gradini a mangiare un gelato.`],
[`Cos’è per te il Patrimonio UNESCO?`,`Il 27 giugno 2007 l’edificio è entrato nella lista del Patrimonio dell’umanità, quando ero ancora vivo: fu un onore. Per me è una prova che l’architettura può essere poesia. Ho sorriso, in silenzio.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo. Cammina nel giardino, guarda l’edificio da ogni lato, ora dal mare, ora dall’alto. E ricorda: la luce è il materiale più bello di un architetto.`]
],
sy_macquarie:[
[`Chi sei e da dove vieni?`,`Sono un soldato scozzese, nato nel 1762 nelle isole Ebridi. Ho servito il re in India e altrove. Poi mi mandarono qui, come governatore.`],
[`Quando hai governato Sydney?`,`Dal 1810 al 1821, undici anni. Trovai una colonia sporca e disordinata, con baracche e strade di fango. La lasciai con edifici, strade e un piano, e per questo mi chiamano ancora "il padre dell’Australia".`],
[`Chi è la signora Macquarie?`,`Elizabeth, mia moglie: una donna di gusto, coraggiosa, con una grande passione per il paesaggio. Faceva lunghe passeggiate in questa penisola, e io le feci scavare una panchina di pietra, nel 1810. I detenuti la scolpirono in blocco.`],
[`Com’è la vista dalla panchina?`,`Quella che vedi: il porto, l’Opera House da una parte e il ponte dall’altra. Ai miei tempi non c’erano né l’una né l’altro, solo il mare e il bosco. La penisola, per i Gadigal, si chiama Yurong Point.`],
[`Cos’è la strada di Mrs Macquarie?`,`Una strada che feci costruire fra il 1813 e il 1818, dal Government House fino alla penisola. È ancora lì: la fine dei lavori è segnata in una pietra, il 13 giugno 1816. Una strada panoramica pensata per le carrozze.`],
[`Perché hai fondato il Royal Botanic Garden?`,`Nel 1816, nel luogo della prima fattoria della colonia, del 1788. Volevo piante, studio e un parco per tutti. Oggi è la più antica istituzione scientifica d’Australia, e mi fa piacere.`],
[`Chi fu il primo botanico?`,`Charles Fraser, nominato nel 1817, il primo "Colonial Botanist". Raccoglieva piante in tutto il paese e le catalogava. Un lavoro paziente, che dà frutti ancora oggi.`],
[`Che cos’è il Macquarie Wall?`,`Un muro con un cancello, finito nel 1816, per proteggere il giardino dal porto. Oggi divide il giardino basso da quello di mezzo. È uno dei punti più vecchi del parco.`],
[`Che cosa pensi dei detenuti?`,`Credevo che un uomo condannato potesse rifarsi una vita. Molti ex detenuti, con me, ebbero incarichi e terreni, e per questo alcuni mi odiarono. Dicevano che mi occupavo troppo di quelli "di bassa estrazione".`],
[`E degli aborigeni?`,`Provai a istruire e ad assistere alcuni bambini, ma non capii i loro diritti alla terra, e la mia politica non li protesse. Oggi lo riconosco con rammarico: furono tempi di molte ingiustizie. La storia coloniale ha ombre, e io non le nascondo.`],
[`Come finì la tua carriera?`,`Lasciai l’incarico nel 1821, dopo critiche da Londra e un’inchiesta. Tornai in Scozia, dove morii nel 1824. Sono sepolto sull’isola di Mull, ma la mia memoria è anche qui.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Va’ pure, Pierpaolo. Passeggia nel giardino e se ti stanchi, siediti sulla panchina di Elizabeth. Il tempo, qui, è un buon compagno.`]
],
sy_linh:[
[`Come ti chiami e che fai?`,`Linh, quarantun anni, cuoca. Ho un chiosco di zuppa di noodle a Haymarket, con la ricetta di mia madre. Sono nata qui, ma i miei genitori vengono dal Vietnam. Parlo tre lingue, e mi confondo in tutte e tre.`],
[`Che cos’è Chinatown?`,`Un quartiere di Sydney con ristoranti cinesi, coreani, vietnamiti, tailandesi. Negli anni Venti era vicino al Capitol Theatre, poi si è spostato a Haymarket. È una piccola Asia in mezzo alla città.`],
[`Cos’è Dixon Street?`,`Una via pedonale lunga e allegra, con un arco rosso e dorato a ciascuna estremità, i paifang. Di sera si accendono le lanterne e profuma di fritto e di spezie. Il venerdì sera c’è il mercato delle bancarelle di cibo asiatico.`],
[`Che cosa sono i Paddy’s Markets?`,`Il mercato grande, aperto dal mercoledì alla domenica: frutta, verdura, magliette, souvenir. Sopra c’è Market City, con un ristorante di dim sum con più di 800 posti. Ci vado a fare la spesa all’alba, e mi bastano due borse.`],
[`Cos’è il dim sum?`,`Una colazione cantonese in piccoli cestini di bambù: ravioli al vapore, panini ripieni, involtini. Ci si siede a tavola in tanti, il tè è sempre caldo e i carrelli passano senza sosta. Se mangi tre cestini, sei dentro.`],
[`E il pho?`,`Una zuppa vietnamita con noodle di riso, brodo di manzo, erbe fresche e lime. La mia preferita, e la specialità di mia madre. Per fare un buon brodo ci vogliono ore, e pazienza.`],
[`Cos’è il Chinese Garden of Friendship?`,`Un giardino cinese tradizionale, regalato a Sydney per il Bicentenario del 1988, vicino a Darling Harbour. Ci sono padiglioni, un laghetto con le carpe, ponticelli e bambù. Quando sono stressata, ci faccio una passeggiata di cinque minuti.`],
[`Cos’è Darling Harbour?`,`L’ex porto commerciale, oggi un lungomare con ristoranti, musei e passeggiate. Il pomeriggio ci vanno le famiglie; di sera si accendono le luci sull’acqua. Un posto dove si va a piedi e senza fretta.`],
[`Che feste si celebrano qui?`,`Il Capodanno lunare, a gennaio o febbraio: lanterne, danze del leone, bancarelle. Tutta la città si veste di rosso e di oro. Lo adoro: sembra un grande pranzo di famiglia con mezza città invitata.`],
[`Che cos’è l’Australia, per te?`,`Un posto fatto di arrivi: gli aborigeni da sempre, poi gli inglesi, poi gli italiani, i greci, i cinesi, i vietnamiti. Siamo tutti un po’ venuti da altrove, e ci prendiamo in giro. Gli australiani dicono: "multicultural", ma io dico "mescolata".`],
[`Come si saluta in vietnamita e in cinese?`,`In vietnamita "xin chào" è ciao, "cảm ơn" è grazie. In cantonese "néih hóu" è ciao, "m̀h’gōi" è grazie. In inglese, "no worries" va bene dappertutto, mate.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo! Prendi un panino bánh mì per strada, che si mangia camminando. Se torni, ti preparo la zuppa. Cảm ơn, e see ya!`]
],
sy_duke:[
[`Chi sei e da dove vieni?`,`Duke Kahanamoku, nato a Honolulu nel 1890, alle Hawaii. Cresciuto sulla spiaggia di Waikiki, tra onde e canoe. Mi dissero che ero nato per l’acqua, e io ci credetti.`],
[`Che cos’è il tuo sport?`,`Il nuoto, prima di tutto: ho vinto l’oro nei cento metri stile libero alle Olimpiadi di Stoccolma del 1912, e altre medaglie dopo. E poi il surf, che per noi hawaiani è un’arte antica.`],
[`Perché sei venuto in Australia?`,`Nel 1914 arrivai per gare di nuoto. Dopo, mi chiesero di fare una dimostrazione di surf. Nessuno, qui, conosceva davvero la tavola.`],
[`Che cosa è successo a Freshwater?`,`Il 24 dicembre 1914 feci la prima dimostrazione pubblica di surf, e il 10 gennaio 1915 tornai e i giornali mi fotografarono. Sulla spiaggia c’era molta gente, e quasi nessuno credeva ai propri occhi. Per me era solo un modo di giocare con il mare.`],
[`Che tavola usavi?`,`Una tavola lunga circa 262 centimetri e pesante circa 40 chili, fatta da falegnami di Sydney con legno di pino, perché la sequoia che volevo non c’era. Non era facile governarla, ma la imparai. Una tavola non è un attrezzo: è un’amica.`],
[`Chi fu Isabel Letham?`,`Una giovane del posto, che scelsi tra la folla a Dee Why Beach il 6 febbraio 1915, per surfare insieme. La portai sulle spalle, e lei fu la prima donna a surfare in Australia, si dice. Una cosa straordinaria, con un sorriso enorme.`],
[`Che cos’è Manly?`,`Un sobborgo sul mare: da una parte il porto, dall’altra l’oceano, e in mezzo il Corso, una via pedonale con negozi e caffè. Il nome lo diede il governatore Phillip nel 1788, colpito dal coraggio degli uomini aborigeni di quella baia.`],
[`Cos’è la riserva mondiale del surf?`,`Dal 2012 i quattro chilometri di costa tra Freshwater e Shelly Beach sono una "World Surfing Reserve": un posto da proteggere, per le onde e per chi le surfa. Mi onora che qui si ricordi la storia.`],
[`Cos’è lo spirito aloha?`,`Un modo di vivere: gentilezza, rispetto, generosità. Significa ciao, amore e arrivederci, tutto insieme. Mi chiamavano "ambasciatore dell’aloha", e io ne ero felice.`],
[`Come si rispetta il mare?`,`Con umiltà: non si domina un’onda, la si ascolta. Si parte con acqua bassa, si impara dagli anziani, e si esce quando il mare lo dice. Lo vale anche per le persone.`],
[`Che cosa hai lasciato in Australia?`,`Una scintilla: dopo quel 1914, molti ragazzi cominciarono a costruirsi le tavole, e il surf è diventato una passione nazionale. Una targa blu ricorda quel giorno sul club dei bagnini di Freshwater, dal 2022. Mi fa sorridere il solo pensarlo.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo. Va’ a vedere il tramonto dal ponte: è una promessa. Aloha, e che il mare ti sia amico.`]
],
sy_ruby:[
[`Come ti chiami e che lavoro fai?`,`Ruby, ventinove anni, gestrice delle giostre a Luna Park. Controllo la sicurezza, aiuto i bambini a salire e faccio finta di non avere paura delle montagne russe. Un lavoro divertente, anche se la sera ho i piedi in fiamme.`],
[`Da quando esiste Luna Park?`,`Dal 4 ottobre 1935, a Milsons Point, sulla riva nord del porto. Sorge dove prima c’era il cantiere in cui Dorman Long costruiva l’acciaio per il ponte, dal 1924. Quei binari sono stati, per un secolo, giostre e storia.`],
[`Perché c’è un faccione sorridente?`,`È il simbolo del parco: una faccia di 9 metri con la bocca spalancata, che è l’ingresso, fra due torri di 26 metri. La disegnò Rupert Browne nel 1935. Il sorriso, dopo tanti anni, è sempre lo stesso.`],
[`Cos’è Coney Island?`,`Una casa del divertimento nata nel 1935, l’unica degli anni Trenta ancora funzionante al mondo. Dentro ci sono scivoli, specchi deformanti e cose che girano. È un posto dove i grandi tornano bambini.`],
[`Cos’è il Big Dipper?`,`Una montagna russa in legno: la prima, quella degli anni Trenta, chiuse nel 1979. La nuova versione è stata aperta nel dicembre del 2021. Le salite sono lente, e le discese molto veloci: la mia parte preferita.`],
[`E la ruota panoramica?`,`Alta 35 metri, con 24 gondole, c’è dal 1982. Da lassù, al tramonto, si vede il porto, l’Opera House e il ponte in controluce. È la vista più bella di Sydney, e lo dico senza paura di sbagliare.`],
[`Cos’è successo nel 1979?`,`Il 9 giugno 1979 un incendio distrusse il Ghost Train, e il parco fu chiuso subito. Sette persone persero la vita. Non è una storia per scherzare: il parco ha ricordato e ha ricominciato con più attenzione.`],
[`Com’è il ponte da qui?`,`Una grande ombra di ferro sul cielo arancione, con le luci delle auto che passano. Dal 1932 è il simbolo della città, e a Capodanno diventa il palco dei fuochi. È la cartolina, ma dal vivo è meglio.`],
[`Cos’è il Capodanno a Sydney?`,`I fuochi d’artificio sul ponte e sull’Opera House, con migliaia di persone sulle rive e sulle barche. Si comincia con la festa dei bambini, e alla mezzanotte tutto si illumina. Qui è già il futuro, perché da noi si festeggia prima che altrove.`],
[`Cosa si mangia al parco?`,`Zucchero filato, mele caramellate, patatine fritte, e un "meat pie", la torta di carne tipica, con salsa di pomodoro. Per dolce un "lamington", un quadratino di pan di Spagna con cioccolato e cocco. Se li provi, sei un australiano.`],
[`Come ci si veste per un giorno a Luna Park?`,`Comodo: scarpe da ginnastica, cappellino e una giacca leggera per la sera, che sul porto tira vento. E tanta crema solare, anche col tramonto vicino. Niente infradito sulle giostre, che volano via, mate.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo! Sali sulla ruota prima che faccia buio, che vale la pena. Se hai ancora fiato, ci vediamo domani sul Big Dipper. Cheers, e tieniti forte!`]
],
sy_dave:[
[`Come ti chiami e che lavoro fai?`,`Dave, cinquantadue anni, capostazione. Controllo gli orari, i binari e la sicurezza, e rispondo alle domande di tutti, anche alle più strane. Lavoro qui da trent’anni, e mi sembra ieri.`],
[`Quando è stata aperta la Central Station?`,`Il 4 agosto 1906, progettata dall’architetto di governo W. L. Vernon. La pietra arenaria viene dalla cava di Pyrmont, e il primo treno regolare partì il giorno dopo. Prima, il terminale era a Redfern, e non bastava più.`],
[`Cosa c’era prima?`,`Un vecchio cimitero, il Devonshire Street Cemetery: le tombe e le lapidi furono trasferite a Botany e in altri posti, con una spesa di quasi ventottomila sterline. Ci si pensa sempre un po’: sotto i binari ci sono storie.`],
[`Quanti binari ci sono?`,`All’inizio erano quindici, e nel 1914 se ne aggiunsero altri, dal 16 al 19. Oggi la stazione ha molti più binari, per i treni cittadini e a lunga percorrenza. Una selva di ferro, con orari e annunci.`],
[`Com’è la torre dell’orologio?`,`Costruita a partire dal 1915 ed entrata in funzione il 3 marzo 1921, alta circa 75 metri. L’orologio è un riferimento per tutti: "ci vediamo sotto l’orologio" si dice dalle mie parti da cent’anni. Se sbagli ora, non è colpa sua.`],
[`Come sono i treni?`,`Molti sono a due piani, argento e arancione, con sedili che si girano. Collegano il centro con i sobborghi, le Blue Mountains e il sud della costa. Ho visto passare tanta gente con una valigia e un sogno.`],
[`Che cos’è un "sandstone" e perché è importante?`,`L’arenaria: una pietra dorata, tenera da lavorare e calda alla vista. Con questa pietra Sydney ha costruito molte sue case e chiese, e ogni vecchio edificio ha un colore tutto suo. Ne è la firma.`],
[`Com’è lavorare in stazione di notte?`,`Silenzioso: pochi treni, molti lavoratori del turno di notte, qualche turista perso. Vedi cose strane: valigie dimenticate, innamorati che si salutano, gente che dorme in piedi. Una stazione di notte è un piccolo teatro.`],
[`Cosa si può fare nei dintorni?`,`A due passi c’è Chinatown, con la cucina a tutte le ore, e Surry Hills con i suoi caffè. Poi Circular Quay in pochi minuti di treno. Sydney è comoda, mate, se sai scegliere il binario giusto.`],
[`Cosa consigli a un viaggiatore italiano?`,`Prenota in anticipo, bevi molta acqua e metti la crema solare anche con le nuvole. Un detto vale più di mille consigli: "no worries". E se perdi un treno, prendi un caffè.`],
[`C’è qualche regola da sapere sui treni?`,`Passa la carta sul lettore all’entrata e all’uscita, e lascia scendere prima chi è a bordo. Non mettere i piedi sui sedili, che qui ci tengono. Per il resto, no worries: basta un po’ di buon senso.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo, sali! In fondo al binario c’è una luce: seguila, e non voltarti. Ti auguro buon viaggio: cheers, mate, e see ya!`]
]
};
Object.assign(TOPX,TOPX_SY);
})();
