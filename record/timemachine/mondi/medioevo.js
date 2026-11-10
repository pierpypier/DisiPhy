/* ---------- MEDIOEVO · Dai campi del feudo alle stelle di Venezia (feudo, Canossa, abbazia, Siena, Assisi, Firenze, Via Francigena, Venezia) ---------- */
/* Un'intera giornata da sinistra a destra, e un tempo che si piega (dal 1077 di Canossa al 1348 della peste, con rimandi a Benedetto e a Carlo Magno): alba nei campi di un villaggio emiliano,
   primo mattino al castello di Canossa, mattina nell'abbazia, tarda mattina a Siena, mezzogiorno ad Assisi, primo pomeriggio a Firenze, pomeriggio sulla Via Francigena,
   tramonto e notte a Venezia. In fondo, sotto le stelle, c'è la rotta di Marco Polo verso l'Oriente: lì il motore mette il varco.
   Testi, tappe e dialoghi vengono da medioevo.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico). Gli oggetti stanno in elementi.js (nomi che iniziano per "mv").
   Il tono per i temi dolorosi (servitù, peste, guerre, scomuniche, Quarta Crociata) è sobrio e rispettoso; tradizioni e questioni discusse sono presentate con "si dice" o "secondo la tradizione", come nella scheda. */
(function(){
const GT=372,W1=24000;
const P=PR._mv,A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {fumo,fuoco,nf,MV,pe,monaco,frate,contad,donna,mercante,arm,pell,maiale,corvo,barca,matt,muro,tetto,merl,fin,vite,campanile}=P;
const F=PR._fe,G=PR._gr,{ln,volo,cane,asino,pecora,cavallo,gatto}=F;
const {ulv,cip,pino,capra,gallina,bue}=G;
const md=(i,n)=>((i%n)+n)%n;
const Z=[0,2800,5600,8400,11200,14000,16800,19600,24000];   /* inizio di ognuna delle 8 zone */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
/* ---- cielo: alba rosata nella nebbia, primo mattino limpido, mattina, tarda mattina bianca, mezzogiorno alto, primo pomeriggio dorato, pomeriggio caldo, tramonto rosso e viola, notte stellata ---- */
const SKY=[[0,['#8a90b8','#f0b8c0','#ffd8b8']],[1400,['#7ab0e8','#c8e0f0','#f4f0e0']],[2800,['#6aa8ea','#bcdcf2','#f2f2e6']],[5600,['#4a9ced','#9cd0f6','#f2f0dc']],[8400,['#5aa0e8','#b4d8f2','#f6f6f0']],[11200,['#3a8ee6','#8cc4f0','#eef4f8']],[14000,['#4a8ad8','#a8c8e4','#f8ecc8']],[16800,['#5a86c8','#d8c8b0','#ffdca0']],[19600,['#7a5aa0','#e8785a','#ffbe70']],[20800,['#4a3a80','#c8586a','#f8a060']],[22000,['#0e1240','#1c2260','#3a3470']],[24000,['#080c30','#141a58','#2a2a66']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,6*s);el(g,c,x-18*s,y+2*s,22*s,5*s);el(g,c,x+20*s,y+2*s,24*s,5*s)};
/* ---- livello 0: cielo, sole, luna sottile, stelle che girano attorno alla Polare, nuvole, nebbiolina dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-20000)/1800,0,1);
 if(nt>0){const an=t*.012,ca=Math.cos(an),sa=Math.sin(an);for(let i=0;i<150;i++){const bx=hr(i*3)*620-70,by=hr(i*7+1)*420-60,dx=bx-350,dy=by-70,sx=350+dx*ca-dy*sa,sy=70+dx*sa+dy*ca;if(sx<0||sx>480||sy<0||sy>GT)continue;const tw=.5+.5*Math.sin(t*2+i*1.7);dot(g,'rgba(255,252,235,'+(nt*(.35+.55*tw)*(sy<GT-60?1:.35))+')',sx,sy,.7+hr(i)*1.2)}}
 const u=cl(xs/19800,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*255,sf=cl((20900-xs)/900,0,1);
 if(sf>.01){const low=1-Math.sin(u*Math.PI);g.globalAlpha=sf;const sg=g.createRadialGradient(sx,sy,6,sx,sy,240);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.3,'rgba(255,'+Math.round(210-low*70)+',140,.32)');sg.addColorStop(1,'rgba(255,200,120,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT+4);
  dot(g,'rgb(255,'+Math.round(250-low*70)+','+Math.round(215-low*110)+')',sx,sy,19);g.globalAlpha=1}
 const mu=cl((xs-20800)/1500,0,1);if(mu>0){const mx=380-mu*40,my=120-mu*24;dot(g,'rgba(255,248,215,'+.1*mu+')',mx,my,30);dot(g,'rgba(246,240,214,'+mu+')',mx,my,12);const sp=skyAt(xs);dot(g,sp[0],mx+5,my-2,11*mu+1)}
 const cc=xs<1400?'rgba(252,206,214,.5)':xs<14000?'rgba(255,255,255,.5)':xs<19600?'rgba(255,236,190,.55)':xs<21500?'rgba(255,170,130,.5)':'rgba(120,110,170,.16)';
 each(o-((t*3)%340)*.02,340,1,(x,i,r)=>{if(r>.4)return;nube(g,x+r*100,40+r*60,.9+r*.7,cc)});
 const fo=cl(1-xs/2800,0,1)*.34;if(fo>.01){g.fillStyle='rgba(252,196,206,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-19400)/1400,0,1)*cl((21800-xs)/900,0,1)*.22;if(wg>.01){g.fillStyle='rgba(255,90,70,'+wg+')';g.fillRect(0,0,480,GT+4)}
 const gd=cl((xs-13600)/1200,0,1)*cl((19400-xs)/1200,0,1)*.1;if(gd>.01){g.fillStyle='rgba(255,208,120,'+gd+')';g.fillRect(0,0,480,GT+4)}}

/* ---- livello 1: orizzonte lontano per zona: pianura e Appennino, rupe di Canossa, colline dell'abbazia, Siena, il Subasio con Assisi, la valle dell'Arno con Firenze, la Francigena, la laguna ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(mixs(c,'#c4cce0',.25),'#262a5e',night*.72);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const mont=(sx,w,h,c,seed,snow)=>{const path=()=>{g.beginPath();g.moveTo(sx-w,hz+34);for(let q=0;q<=36;q++){const u=q/36,px=sx-w+u*2*w,hh=h*(Math.sin(u*Math.PI))*(.7+.3*Math.abs(Math.sin(u*7+seed)))+4*Math.sin(u*29+seed);g.lineTo(px,hz+14-hh)}g.lineTo(sx+w,hz+34);g.closePath()};g.fillStyle=dim(c);path();g.fill();if(snow){g.save();path();g.clip();g.fillStyle='rgba(255,255,255,'+(.85-night*.5)+')';g.fillRect(sx-w,hz-h-20,2*w,h+60);g.translate(0,h*snow*.4);g.fillStyle=dim(c);path();g.fill();g.restore()}};
 const lights=(sx,x0,x1,n)=>{if(night>.2)for(let q=0;q<n;q++){const tx=sx+x0+(x1-x0)*q/(n-1);glow(g,tx,hz+8-hr(q)*10,12,'255,180,80',.6*Math.min(1,night+.1));dot(g,'rgba(255,220,140,.95)',tx,hz+8-hr(q)*10,1.3)}};
 const casette=(sx,x0,x1,hh,cols)=>{for(let q=0;q<(x1-x0)/14;q++){const bx=sx+x0+q*14,h2=6+hr(q*3)*hh;rect(g,dim((cols||['#e8dcc0','#d8c8a4','#c8a888','#e4d4b0'])[q%4]),bx,hz+16-h2,11,h2+8);poly(g,dim('#b4583a'),[[bx-1,hz+16-h2],[bx+5.5,hz+11-h2],[bx+12,hz+16-h2]])}};
 const cipF=(sx,x0,n,sp,hh)=>{for(let q=0;q<n;q++)el(g,dim('#3a5a34'),sx+x0+q*sp,hz+12-(hh||18)/2,2.6,(hh||18)/2)};
 const castello=(sx,sc,c)=>{rect(g,dim(c||'#d8cfae'),sx-30*sc,hz-8*sc,60*sc,24*sc);merl(g,sx-30*sc,hz-8*sc,60*sc,dim(c||'#d8cfae'),6);rect(g,dim(c||'#d8cfae'),sx-8*sc,hz-34*sc,18*sc,30*sc);merl(g,sx-9*sc,hz-34*sc,20*sc,dim(c||'#d8cfae'),4);rect(g,dim(c||'#d8cfae'),sx-34*sc,hz-22*sc,12*sc,18*sc);rect(g,dim(c||'#d8cfae'),sx+24*sc,hz-18*sc,12*sc,14*sc)};
 /* zona 1: la pianura nella nebbia, filari e canali, l'Appennino azzurro e la rupe chiara di Canossa */
 const a1=env(1400,4600);if(a1>.02){g.globalAlpha=a1;const sx=fx(1400);mont(sx+270,440,110,'#9aa8d0',1.3);mont(sx+20,380,60,'#b0bcd8',4.1);rect(g,dim('#a8b070'),sx-560,hz+16,1120,16);for(let q=0;q<6;q++)ln(g,dim('#9ab8c8'),1.6,[sx-540+q*180,hz+20+q%3*3,sx-460+q*180,hz+22+q%3*3]);cipF(sx,-520,26,40,16);
  poly(g,dim('#d0c4a0'),[[sx+210,hz+16],[sx+230,hz-22],[sx+270,hz-34],[sx+300,hz-18],[sx+320,hz+16]]);castello(sx+268,.7,'#e0d8b8');for(let q=0;q<3;q++)el(g,'rgba(255,214,222,'+(.3-q*.07)+')',sx-100+q*80,hz+14-q*3,420,10);lights(sx,-300,0,5);g.globalAlpha=1}
 /* zona 2: l'Appennino con una spolverata di neve e la rupe con il castello */
 const a2=env(4200,3600);if(a2>.02){g.globalAlpha=a2;const sx=fx(4200);mont(sx-140,520,150,'#8a98c0',2.2,.36);mont(sx+300,400,120,'#a0acc8',5.1,.3);
  poly(g,dim('#d0c4a0'),[[sx+20,hz+16],[sx+40,hz-26],[sx+80,hz-44],[sx+120,hz-24],[sx+140,hz+16]]);castello(sx+80,1,'#e0d8b8');casette(sx,-160,0,16);lights(sx,-140,100,6);g.globalAlpha=1}
 /* zona 3: colline verdi con l'abbazia e le vigne */
 const a3=env(7000,3600);if(a3>.02){g.globalAlpha=a3;const sx=fx(7000);mont(sx,540,70,'#8aa870',3.1);mont(sx+330,300,90,'#7a9a68',6.2);for(let q=0;q<7;q++)ln(g,dim('#6a8a50'),1.4,[sx-300+q*30,hz+6,sx-260+q*30,hz-12]);
  rect(g,dim('#e0d8bc'),sx-140,hz-6,50,22);poly(g,dim('#a8503a'),[[sx-144,hz-6],[sx-115,hz-22],[sx-86,hz-6]]);rect(g,dim('#e0d8bc'),sx-84,hz-34,12,50);poly(g,dim('#a8503a'),[[sx-86,hz-34],[sx-78,hz-46],[sx-70,hz-34]]);cipF(sx,-40,5,14,22);lights(sx,-140,-60,3);g.globalAlpha=1}
 /* zona 4: colline toscane con i cipressi e Siena (torri, Duomo a strisce) */
 const a4=env(9800,3600);if(a4>.02){g.globalAlpha=a4;const sx=fx(9800);mont(sx-60,560,80,'#b0a468',5.2);mont(sx+330,300,70,'#a8a070',2.3);cipF(sx,-420,14,16,22);cipF(sx,120,5,12,20);
  poly(g,dim('#b86a48'),[[sx+120,hz+16],[sx+150,hz-12],[sx+250,hz-16],[sx+300,hz+16]]);for(let q=0;q<7;q++){const bx=sx+130+q*22,hh=14+hr(q*3)*28;rect(g,dim(q%2?'#b0583c':'#c8704a'),bx,hz+14-hh,9,hh);}
  for(let r=0;r<4;r++)rect(g,dim(r%2?'#e8e4d8':'#3a3a40'),sx+176,hz-16+r*4,34,4);poly(g,dim('#e8e4d8'),[[sx+176,hz-16],[sx+193,hz-34],[sx+210,hz-16]]);rect(g,dim('#b0583c'),sx+226,hz-44,10,58);lights(sx,120,300,7);g.globalAlpha=1}
 /* zona 5: il monte Subasio con Assisi in pietra rosata e la grande valle umbra */
 const a5=env(12600,3600);if(a5>.02){g.globalAlpha=a5;const sx=fx(12600);mont(sx,620,170,'#b0a49a',4.4);mont(sx-300,300,80,'#a89c92',1.2);
  for(let q=0;q<4;q++)ln(g,dim('#98a870'),3,[sx-280+q*70,hz+14,sx-250+q*70,hz-6]);
  for(let r=0;r<3;r++)for(let q=0;q<9-r*2;q++){const bx=sx-60+q*14+r*8,by=hz-20+r*10;rect(g,dim(['#e8c0a8','#dcae98','#e4b8a0'][q%3]),bx,by-8,11,12);poly(g,dim('#a8503a'),[[bx-1,by-8],[bx+5,by-13],[bx+12,by-8]])}
  rect(g,dim('#dcae98'),sx+56,hz-52,26,26);merl(g,sx+54,hz-52,30,dim('#dcae98'),4);rect(g,dim('#dcae98'),sx+64,hz-70,10,20);
  for(let q=0;q<10;q++)rect(g,dim(['#c8c070','#a8b868','#d8c888','#98a860'][q%4]),sx-440+q*70,hz+17,66,15);lights(sx,-60,70,6);g.globalAlpha=1}
 /* zona 6: la valle dell'Arno con Firenze, il Battistero, le torri e i cantieri */
 const a6=env(15400,3600);if(a6>.02){g.globalAlpha=a6;const sx=fx(15400);mont(sx-300,300,80,'#8aa078',6.1);mont(sx+330,280,70,'#9ab088',2.9);rect(g,dim('#d8c8a0'),sx-300,hz+16,600,16);ln(g,dim('#8ab0c0'),3,[sx-300,hz+24,sx-100,hz+20,sx+80,hz+26,sx+300,hz+22]);
  casette(sx,-180,200,16);for(const [tx,th] of [[-120,50],[-70,64],[40,44],[110,56],[150,40]]){rect(g,dim('#c0a888'),sx+tx,hz+14-th,9,th);merl(g,sx+tx-1,hz+14-th,11,dim('#c0a888'),2)}
  g.fillStyle=dim('#ece8d8');g.beginPath();g.moveTo(sx-20,hz+14);g.lineTo(sx-20,hz-2);g.lineTo(sx-8,hz-12);g.lineTo(sx+8,hz-12);g.lineTo(sx+20,hz-2);g.lineTo(sx+20,hz+14);g.closePath();g.fill();poly(g,dim('#b8b4a4'),[[sx-18,hz-2],[sx-6,hz-24],[sx+6,hz-24],[sx+18,hz-2]]);
  rect(g,dim('#b0a488'),sx-52,hz-24,24,38);ln(g,dim('#8a6a40'),1.4,[sx-48,hz+14,sx-48,hz-38]);ln(g,dim('#8a6a40'),1.4,[sx-30,hz+14,sx-30,hz-38]);ln(g,dim('#8a6a40'),1.4,[sx-48,hz-30,sx-30,hz-30]);lights(sx,-180,200,10);g.globalAlpha=1}
 /* zona 7: i colli e le strade della Francigena, un borgo fortificato sul colle */
 const a7=env(18200,3600);if(a7>.02){g.globalAlpha=a7;const sx=fx(18200);mont(sx-80,520,100,'#a8a468',1.7);mont(sx+330,320,86,'#98a070',4.6);cipF(sx,-400,16,24,22);cipF(sx,160,6,12,22);
  ln(g,dim('#d8c8a0'),2.4,[sx-300,hz+26,sx-120,hz+8,sx+40,hz+16,sx+240,hz-6]);
  poly(g,dim('#b8a888'),[[sx+190,hz+14],[sx+200,hz-6],[sx+290,hz-6],[sx+300,hz+14]]);rect(g,dim('#c8b898'),sx+204,hz-16,80,16);merl(g,sx+204,hz-16,80,dim('#c8b898'),8);rect(g,dim('#c8b898'),sx+236,hz-32,16,18);poly(g,dim('#a8503a'),[[sx+232,hz-32],[sx+244,hz-42],[sx+256,hz-32]]);lights(sx,200,290,5);g.globalAlpha=1}
 /* zona 8: la laguna piatta con le isole, i campanili, le cupole di San Marco e il mare aperto */
 const a8=env(21800,3600);if(a8>.02){g.globalAlpha=a8;const sx=fx(21800);const wg=g.createLinearGradient(0,hz+8,0,hz+34);wg.addColorStop(0,dim('#a8789a'));wg.addColorStop(1,dim('#5a6a9a'));g.fillStyle=wg;g.fillRect(0,hz+8,480,26);
  for(let q=0;q<14;q++)el(g,'rgba(255,200,150,'+(.35*(1-night*.7))+')',sx-300+q*60+Math.sin(t+q)*4,hz+14+q%4*5,22,1.3);
  for(const [ix,iw] of [[-500,120],[-300,90],[260,150],[520,100]]){el(g,dim('#7a8a6a'),sx+ix,hz+10,iw,6)}
  for(const [cx,hh] of [[-380,50],[-180,38],[380,56],[600,44]]){rect(g,dim('#b8553a'),sx+cx-4,hz+10-hh,8,hh);poly(g,dim('#6a9a7a'),[[sx+cx-6,hz+10-hh],[sx+cx,hz+2-hh-14],[sx+cx+6,hz+10-hh]])}
  rect(g,dim('#e0d4b4'),sx-60,hz-4,120,16);for(let q=0;q<5;q++){const dx=sx-48+q*24;g.fillStyle=dim('#d0c8a8');g.beginPath();g.arc(dx,hz-4,10,Math.PI,0);g.fill();ln(g,dim('#e0b84a'),1,[dx,hz-14,dx,hz-20])}
  rect(g,dim('#b8553a'),sx-100,hz-30,10,42);poly(g,dim('#6a9a7a'),[[sx-103,hz-30],[sx-95,hz-44],[sx-87,hz-30]]);
  matt(g,sx+110,hz+12,100,18,dim('#a8503a'));merl(g,sx+110,hz-6,100,dim('#a8503a'),8);
  for(let q=0;q<3;q++){ln(g,dim('#8a8a98'),2,[sx-460+q*30,hz+8,sx-460+q*30-4,hz-18-q*6])}
  lights(sx,-100,220,10);g.globalAlpha=1}}

/* ---- livello 2: campi e siepi, rupi e borghi, vigne e cipressi, case di mattoni, case rosate, torri, laguna ---- */
const BRKM='#b8704e';
function layerMid(g,o,t){const cam=o/.2,hz=326,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const wx=cam+x+120,zz=zn(wx);A.setDK(nf(cam+x));
  const band=['#a8b070','#a8a080','#98b070','#b88a6a','#b8a888','#c8b088','#b0a468','#6a7a9a'][zz-1];rect(g,dim(band),x,hz+6,121,GT+4-hz-6);
  if(zz==8){const wg=g.createLinearGradient(0,hz+6,0,GT+4);wg.addColorStop(0,dim('#5a6a9a'));wg.addColorStop(1,dim('#3a5a8a'));g.fillStyle=wg;g.fillRect(x,hz+6,121,GT-hz-2);el(g,'rgba(255,190,140,'+(.35*(1-night*.6))+')',x+60+Math.sin(t+i)*6,hz+24,30,1.4)}
  const tl=(w,hh,c)=>{poly(g,dim(c||'#b4583a'),[[x+6,hz-hh],[x+10+w/2,hz-hh-14],[x+14+w,hz-hh]])};
  const house=(c,hh,ww,roof)=>{rect(g,dim(c),x+10,hz-hh,ww,hh+10);rect(g,'rgba(255,255,255,.14)',x+10,hz-hh,5,hh+10);rect(g,'rgba(0,0,0,.14)',x+10+ww-9,hz-hh,9,hh+10);tl(ww,hh,roof);rect(g,dim('#2a1c10'),x+10+ww*.4,hz-hh*.5,10,hh*.5+10);if(night>.2&&hr(i*7)>.4)rect(g,'rgba(255,214,140,.85)',x+10+ww*.7,hz-hh*.7,5,6)};
  const capanna=()=>{rect(g,dim('#c8a878'),x+10,hz-18,70,28);poly(g,dim('#c8a85a'),[[x+4,hz-18],[x+45,hz-44],[x+86,hz-18]]);rect(g,dim('#2a1c10'),x+36,hz-6,12,16)};
  if(zz==1){if(r>.8)cip(g,x+60,hz+10,60+r*30);else if(r>.55){rect(g,dim('#4a3a28'),x+58,hz-30,4,40);el(g,dim('#4a6a38'),x+60,hz-44,14,30)}else if(r>.3)capanna();else{rect(g,dim('#d8d0b4'),x+10,hz-30,42,40);poly(g,dim('#a8503a'),[[x+6,hz-30],[x+31,hz-44],[x+56,hz-30]]);rect(g,dim('#d8d0b4'),x+54,hz-52,16,62);poly(g,dim('#a8503a'),[[x+52,hz-52],[x+62,hz-64],[x+72,hz-52]])}}
  else if(zz==2){if(r>.7)pino(g,x+60,hz+10,.7+r*.3,t);else if(r>.4){poly(g,dim('#c8bc98'),[[x+0,hz+10],[x+30,hz-40],[x+70,hz-56],[x+110,hz+10]]);rect(g,dim('#d8cfae'),x+36,hz-76,36,22);merl(g,x+36,hz-76,36,dim('#d8cfae'),4)}else capanna()}
  else if(zz==3){if(r>.7)cip(g,x+60,hz+10,70+r*40);else if(r>.4){for(let q=0;q<5;q++){ln(g,dim('#6a8a50'),3,[x+8+q*22,hz+10,x+8+q*22,hz-12]);el(g,dim('#5a8a3a'),x+8+q*22,hz-10,8,9)}}else house(['#e8dfc4','#d8cfae','#e0d8bc'][md(i,3)],36+r*40,62,'#a8503a')}
  else if(zz==4){if(r>.78)cip(g,x+60,hz+10,76+r*30);else{const hh=40+r*70,ww=r>.45?40:96;rect(g,dim(r>.4?BRKM:'#c8704a'),x+6,hz-hh,ww,hh+10);if(ww<60)merl(g,x+2,hz-hh,ww+8,dim(BRKM),4);for(let q=0;q<Math.floor(ww/24)+1;q++)ar(g,dim('#2a1810'),x+14+q*24,hz+10,12,24);rect(g,dim('#c8a888'),x+4,hz-hh-4,ww+4,5)}}
  else if(zz==5){if(r>.78)ulv(g,x+60,hz+10,.7,t);else if(r>.6)cip(g,x+60,hz+10,76);else{rect(g,dim('#dcae98'),x+6,hz-34-r*30,100,44+r*30);for(let q=0;q<4;q++)ar(g,dim('#3a2a22'),x+14+q*24,hz-6,12,20);rect(g,dim('#c08c78'),x+4,hz-36-r*30,104,5)}}
  else if(zz==6){if(r>.8)cip(g,x+60,hz+10,80);else{const hh=34+r*60,ww=r>.55?36:90;rect(g,dim(r>.5?'#b4a888':'#d8c8a0'),x+6,hz-hh,ww,hh+10);if(ww<60)merl(g,x+2,hz-hh,ww+8,dim('#b4a888'),4);for(let q=0;q<Math.floor(ww/26)+1;q++)ar(g,dim('#2a1c10'),x+12+q*26,hz+10,14,26);rect(g,dim('#bfae84'),x+2,hz-hh-4,ww+6,5)}}
  else if(zz==7){if(r>.55)cip(g,x+60,hz+10,80+r*30);else if(r>.3){for(let q=0;q<4;q++){ln(g,dim('#6a8a50'),3,[x+8+q*24,hz+10,x+8+q*24,hz-8]);el(g,dim('#5a8a3a'),x+8+q*24,hz-6,9,8)}}else house(['#d8c8a0','#c8bc98'][md(i,2)],34+r*30,66,'#a8503a')}
  else{if(r>.85)pino(g,x+60,hz+16,.7,t);else{const hh=44+r*60;rect(g,dim(['#a8503a','#c8885a','#b0583c','#d49a6a'][md(i,4)]),x+8,hz+10-hh,92,hh+14);rect(g,dim('#e8d8b0'),x+6,hz+10-hh,96,4);for(let q=0;q<Math.floor(hh/26);q++)for(let s=0;s<3;s++)ar(g,hr(i*9+q*3+s)>.4&&night>.25?'rgba(255,200,110,.85)':dim('#2a1810'),x+16+s*28,hz+4-q*26,10,18);for(let q=0;q<4;q++)rect(g,dim('#3a2a1c'),x+10+q*26,hz+22,4,18)}}})}

/* ---- suolo: terra battuta con solchi e pozzanghere, sassi e neve, lastricato dell'abbazia, vicoli di mattoni, pietra rosata, lastricato fiorentino, strada di terra e sassi, fondamenta ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#8a7048','f'],[Z[1],Z[2],'#a89a80','s'],[Z[2],Z[3],'#c4b898','m'],[Z[3],Z[4],'#b8664a','b'],[Z[4],Z[5],'#d4a88c','r'],[Z[5],Z[6],'#c8b490','p'],[Z[6],Z[7],'#9a7a52','t'],[Z[7],Z[8],'#8a7a68','v']];
 rect(g,'#c8b88c',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0),zw=z[1]-z[0];g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const pz=(q,m)=>z[0]+((q*m)%zw)-cam;
  const slabs=(bw0,rows,rh,k1,k2,seed)=>{for(let r=0;r<rows;r++){const yy=gt+7+r*rh,bw=bw0+r*5,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*seed+r*7);rect(g,hh>.65?k1:hh>.3?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,rh-2);rect(g,k2,px+bw-2,yy,2,rh-2)}}};
  if(z[3]=='f'){for(let r=0;r<9;r++)rect(g,r%2?'rgba(60,40,10,.18)':'rgba(255,230,170,.08)',x0,gt+6+r*16,x1-x0,8);for(let q=0;q<16;q++){const yy=gt+16+q*8.4;ln(g,'rgba(50,30,10,.2)',1.4,[x0,yy,x1,yy+(q%3-1)*2])}for(let q=0;q<70;q++)dot(g,hr(q)>.5?'rgba(120,100,60,.4)':'rgba(255,240,200,.3)',pz(q,37),gt+14+hr(q*5)*130,1+hr(q)*1.4);for(let q=0;q<7;q++)el(g,'rgba(120,150,170,.4)',pz(q,331),gt+40+hr(q)*90,26,4);for(let q=0;q<8;q++)el(g,'rgba(80,110,50,.4)',pz(q,223),gt+30+hr(q+2)*100,18,3)}
  if(z[3]=='s'){slabs(60,3,22,'rgba(255,255,255,.12)','rgba(40,30,20,.26)',13);for(let q=0;q<60;q++)dot(g,hr(q)>.5?'rgba(110,100,80,.4)':'rgba(255,250,240,.5)',pz(q,29),gt+16+hr(q*5)*130,1+hr(q)*1.7);for(let q=0;q<9;q++)el(g,'rgba(255,255,255,.6)',pz(q,257),gt+30+hr(q)*100,30,4)}
  if(z[3]=='m'){slabs(78,4,26,'rgba(255,255,255,.22)','rgba(70,60,50,.24)',17);for(let r=0;r<3;r++)rect(g,'rgba(110,150,80,.18)',x0,gt+120+r*10,x1-x0,6);for(let q=0;q<40;q++)dot(g,'rgba(255,240,200,.25)',pz(q,23),gt+8+hr(q*5)*140,1+hr(q)*1.2)}
  if(z[3]=='b'){for(let r=0;r<7;r++){const yy=gt+6+r*21,bw=34+r*5,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*31+r*7);rect(g,hh>.6?'rgba(255,220,180,.14)':hh>.25?'rgba(0,0,0,.08)':'rgba(60,10,0,.14)',px,yy,bw-2,19);rect(g,'rgba(50,20,10,.3)',px+bw-2,yy,2,19);rect(g,'rgba(50,20,10,.22)',px,yy+19,bw,2)}}}
  if(z[3]=='r'){slabs(64,4,28,'rgba(255,255,255,.2)','rgba(80,50,40,.26)',19);for(let q=0;q<14;q++){el(g,'rgba(110,140,70,.45)',pz(q,173),gt+14+hr(q)*130,12,3)}}
  if(z[3]=='p'){slabs(90,5,28,'rgba(255,255,255,.2)','rgba(70,55,35,.26)',21);for(let q=0;q<40;q++)dot(g,'rgba(255,240,190,.28)',pz(q,23),gt+8+hr(q*5)*140,1+hr(q)*1.2)}
  if(z[3]=='t'){for(let r=0;r<7;r++)rect(g,r%2?'rgba(60,40,10,.16)':'rgba(255,230,170,.07)',x0,gt+8+r*20,x1-x0,10);for(let q=0;q<150;q++)dot(g,hr(q)>.5?'rgba(255,245,215,.4)':'rgba(70,50,20,.45)',pz(q,27),gt+6+hr(q*5)*144,1+hr(q)*1.7);for(let q=0;q<2;q++){ln(g,'rgba(50,30,10,.3)',3,[x0,gt+80+q*26,x1,gt+80+q*26+Math.sin(cam*.002+q)*3])}for(let q=0;q<7;q++)el(g,'rgba(100,110,60,.4)',pz(q,271),gt+26+hr(q)*110,22,3)}
  if(z[3]=='v'){const bw=44,s0=Math.floor((cam+x0)/bw)*bw;for(let r=0;r<6;r++){const yy=gt+6+r*24;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*37+r*5);rect(g,hh>.6?'rgba(255,255,255,.09)':hh>.25?'rgba(0,0,0,.08)':'rgba(30,20,10,.16)',px,yy,bw-2,22);rect(g,'rgba(30,20,10,.3)',px+bw-2,yy,2,22)}}for(let q=0;q<8;q++)el(g,'rgba(100,130,170,.3)',pz(q,311),gt+30+hr(q)*100,28,3)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1800,0,1);if(dw>.02)rect(g,'rgba(255,190,190,'+(.16*dw)+')',0,gt,480,150);
 const sg=cl((cam-19400)/900,0,1)*cl((21800-cam)/900,0,1);if(sg>.02)rect(g,'rgba(255,90,60,'+(.14*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- vita: corvi nei campi, rondini, piccioni sulle torri, falchi, gabbiani e cormorani, lupo ai margini del bosco, animali, passanti, pipistrelli di notte ---- */
const lupo=(g,x,y,t,f)=>{g.save();g.translate(x,y);g.scale(f||1,1);const c=tn('#2a2a30');[[-16,0],[-8,1],[10,-1],[16,0]].forEach((l,i)=>ln(g,i%2?'#1a1a20':'#2a2a30',3,[l[0],-14,l[0]+l[1]+Math.sin(t*2+i)*1.4,0]));el(g,c,0,-20,24,10);el(g,c,26,-26,9,6);poly(g,c,[[22,-30],[24,-38],[28,-30]]);poly(g,c,[[30,-30],[33,-37],[34,-29]]);poly(g,c,[[32,-24],[44,-22],[32,-20]]);ln(g,'#2a2a30',4,[-24,-22,-38,-12]);dot(g,'rgba(255,210,90,.9)',30,-27,1.1);g.restore()};
function layerLife(g,o,t){const cam=o,xs=cam+240,hz=GT;
 const bird=(bx,by,s,w,c)=>{g.strokeStyle=c;g.lineWidth=s*1.9;g.beginPath();g.moveTo(bx-9*s,by+w);g.quadraticCurveTo(bx-4*s,by-4*s,bx,by);g.quadraticCurveTo(bx+4*s,by-4*s,bx+9*s,by+w);g.stroke()};
 const cv=cl((5800-xs)/600,0,1)*cl((xs+300)/500,0,1);if(cv>.05)for(let i=0;i<5;i++){const bx=((i*131+t*(26+i*4))%640)-80,by=70+hr(i*3)*120+Math.sin(t*1.6+i*2)*16,w=Math.sin(t*10+i)*3;g.globalAlpha=cv;bird(bx,by,1.1,w,'#1a1a26');g.globalAlpha=1}
 const rv=cl((xs-5600)/500,0,1)*cl((19800-xs)/600,0,1);if(rv>.05)for(let i=0;i<4;i++){const bx=((i*150+t*(40+i*5))%620)-70,by=100+hr(i*7)*120+Math.sin(t*3+i)*24,w=Math.sin(t*14+i)*3;g.globalAlpha=rv;bird(bx,by,.9,w,'#1a1a26');g.globalAlpha=1}
 const kv=cl((xs-11200)/500,0,1)*cl((16800-xs)/500,0,1);if(kv>.05)for(let i=0;i<3;i++){const bx=((i*260+t*(14+i*3))%640)-80,by=50+hr(i*9)*70+Math.sin(t*.8+i*3)*10;g.globalAlpha=kv;bird(bx,by,1.6,2+Math.sin(t*2+i),'#6a5a4a');g.globalAlpha=1}
 const gv=cl((xs-19400)/600,0,1)*cl((22400-xs)/700,0,1);if(gv>.05)for(let i=0;i<5;i++){const bx=((i*131+t*(24+i*4))%640)-80,by=60+hr(i*3)*110+Math.sin(t*1.6+i*2)*14,w=Math.sin(t*9+i)*3;g.globalAlpha=gv;bird(bx,by,1.1,w,xs<21200?'#f4f4f4':'#b8b8c8');g.globalAlpha=1}
 const bn=cl((xs-21400)/800,0,1);if(bn>.05)for(let i=0;i<5;i++){const bx=((i*97+t*(34+i*3))%560)-40,by=90+hr(i*5)*120+Math.sin(t*5+i)*18,w=Math.sin(t*14+i)*3.4;g.globalAlpha=bn;g.strokeStyle='rgba(10,8,20,.9)';g.lineWidth=2;g.beginPath();g.moveTo(bx-7,by+w);g.lineTo(bx-2,by-2);g.lineTo(bx,by+1);g.lineTo(bx+2,by-2);g.lineTo(bx+7,by+w);g.stroke();g.globalAlpha=1}
 /* l'ombra di un lupo ai margini del bosco di querce */
 {const lx=2180-cam;if(lx>-80&&lx<560){A.setDK(nf(2180));lupo(g,lx,hz+44,t,-1)}}
 each(o,520,31,(x,i,r)=>{const wx=cam+x,zz=zn(wx);if(wx>23200)return;A.setDK(nf(wx));
  if(zz==1&&r<.35)bue(g,x+30,hz+48,.9,t,-1);
  if(zz<=7&&r>.3&&r<.42)cane(g,x+60,hz+42,t,['#b8935a','#6a5a48','#d8c8a0'][md(i,3)]);
  if(zz>=2&&zz!=7&&r>.46&&r<.58)gatto(g,x+80,hz+46,t);
  if((zz==3||zz==7||zz==5)&&r<.28)pecora(g,x+20,hz+44,1.1,t,1);
  if(zz==2&&r>.6&&r<.72)cavallo(g,x+60,hz+50,.6,t,md(i,2)?1:-1,'#7a5a3a');
  if(zz==6&&r>.6&&r<.7)cavallo(g,x+60,hz+50,.6,t,md(i,2)?1:-1,'#5a3a24');
  if(zz==1&&r>.7&&r<.82)for(let q=0;q<3;q++)gallina(g,x+30+q*22,hz+44,1.3,t+q);
  if(zz==8&&r>.7&&r<.8)gatto(g,x+80,hz+46,t)});
 each(o,430,57,(x,i,r)=>{const wx=cam+x,zz=zn(wx);if(r<.4||wx>23300)return;A.setDK(nf(wx));const dir=md(i,2)?1:-1,off=Math.sin(t*.18+i)*70,f=Math.cos(t*.18+i)*dir>0?1:-1;
  if(r>.84&&(zz==4||zz==7))asino(g,x+off,hz+56,1,t+i,f);
  else if(zz==1||zz==2)contad(g,x+off,hz+54,t+i,{s:.5,f:f,ph:i,i:md(i,4)});
  else if(zz==3)monaco(g,x+off,hz+54,t+i,{s:.5,f:f,ph:i});
  else if(zz==4||zz==6)(md(i,2)?mercante:contad)(g,x+off,hz+54,t+i,{s:.5,f:f,ph:i,i:md(i,4),top:['#8a2a2a','#2a4a8a','#2a6a4a'][md(i,3)],bot:['#8a2a2a','#2a4a8a','#2a6a4a'][md(i,3)]});
  else if(zz==5)(md(i,3)==0?frate:contad)(g,x+off,hz+54,t+i,{s:.5,f:f,ph:i,i:md(i,4)});
  else if(zz==7)pell(g,x+off,hz+54,t+i,{s:.5,f:f,ph:i});
  else mercante(g,x+off,hz+54,t+i,{s:.5,f:f,ph:i,top:['#2a2a50','#6a2a2a','#3a5a4a'][md(i,3)],bot:['#2a2a50','#6a2a2a','#3a5a4a'][md(i,3)],cap:'#2a2a30'})});A.setDK(0);g.globalAlpha=1}
const INTRO="Medioevo, dall’alba alla notte. Parti dai campi di un villaggio, dove il contadino ara con i buoi e il pane dipende dal raccolto; poi il castello di Canossa, dove la contessa Matilde ospita un papa e fa aspettare un imperatore; l’abbazia, dove i monaci copiano i libri a mano; Siena, con le sue torri e il cantiere del Duomo. A mezzogiorno Assisi, dove Francesco canta la creazione nella lingua di tutti i giorni; nel primo pomeriggio Firenze, la città di Dante e dei fiorini d’oro; poi la Via Francigena, piena di pellegrini; al tramonto Venezia, con le galee e le spezie, e di notte le stelle e i racconti di Marco Polo. Il tempo qui si piega: contadini, contesse, monaci, muratori, santi, poeti e mercanti di ogni epoca ti vengono incontro.";
const LKTXT=[
"Siamo in una pianura coltivata a strisce, e prima dell’alba il villaggio è già sveglio: la giornata dei contadini comincia con il sole e finisce con il buio. Le terre appartengono a un signore, a un’abbazia o a un vescovo; chi le lavora versa al padrone una parte del raccolto e alcuni giorni di lavoro. Quasi tutti, qui, vivono così.",
"L’aratro pesante, con le ruote e il vomere di ferro, rivolta le zolle dure della pianura: lo tirano i buoi in coppia, e dove si può anche i cavalli, con il collare rigido e i ferri agli zoccoli. I campi si dividono in tre: uno è seminato in autunno a frumento o segale, uno in primavera ad avena e legumi, uno resta a riposo, il maggese. Ogni anno si cambia, così la terra si stanca meno.",
"Il mulino ad acqua macina il grano, e di solito appartiene al signore o all’abbazia: chi lo usa lascia una parte della farina. Lo stesso vale per il forno. Un decimo del raccolto, la decima, va alla Chiesa, che lo usa per mantenere il prete e aiutare i poveri.",
"Le case dei contadini sono di legno e argilla con il tetto di paglia: una stanza con il focolare nel mezzo, e spesso gli animali dormono vicini. La pieve di pietra è il centro del villaggio: la campana avvisa dell’ora di lavoro, delle feste e dei pericoli. Qui si battezza, ci si sposa e si fa l’unica vera festa della settimana: la domenica.",
"Canossa sorge su una rupe di arenaria chiara, fra i primi rilievi dell’Appennino, ed è una fortezza della famiglia di Matilde, una delle più potenti d’Italia. Da lassù si controllano le strade e le valli. In questi secoli i castelli sono il cuore del potere: ci vivono il signore, i soldati e chi chiede protezione.",
"Nella sala grande si mangia, si decide e si ricevono gli ospiti, attorno a lunghe tavole su cavalletti. Matilde governa terre che vanno dal lago di Garda fino alla Toscana e tiene una corte di cavalieri, chierici e consiglieri. Conosce più lingue ed è una delle poche donne dell’epoca a comandare dei soldati.",
"Il cavaliere è un guerriero a cavallo, con la cotta di maglia di ferro, l’elmo con il nasale e lo scudo a mandorla. Si impara da ragazzi, prima come paggio e poi come scudiero, e si giura fedeltà a un signore in cambio di terre o di protezione: è il legame del feudo. Un buon cavallo da guerra costa moltissimo.",
"Nel gennaio del 1077 l’imperatore Enrico IV, scomunicato dal papa Gregorio VII, arriva a Canossa, dove il papa è ospite di Matilde. Secondo le cronache aspetta tre giorni fuori dalle mura, vestito da penitente, finché il papa lo riceve e lo assolve. Da qui viene il modo di dire \"andare a Canossa\".",
"L’abbazia è come una piccola città: ha la chiesa, il chiostro, il refettorio, il dormitorio, l’orto, il mulino e un ospizio per i viandanti. I monaci seguono la Regola scritta nel VI secolo da Benedetto da Norcia, che li invita a pregare e a lavorare: coltivano la terra, bonificano le paludi e accolgono chi arriva.",
"La giornata dei monaci è scandita dalla campana e da otto momenti di preghiera, dalla notte fino a sera: il Mattutino, le Lodi, Prima, Terza, Sesta, Nona, il Vespro e la Compieta. Fra una preghiera e l’altra c’è il lavoro. Si mangia insieme in silenzio, mentre uno legge ad alta voce.",
"Prima della stampa ogni libro è scritto a mano, lettera per lettera. Nello scriptorium i monaci tagliano la pergamena, tracciano le righe, scrivono con penne d’oca e inchiostro di noci di galla, poi decorano le pagine con lettere miniate e colori vivaci. Per copiare una Bibbia servono mesi o anni di lavoro.",
"Fra le aiuole dell’orto crescono salvia, ruta, menta, malva e altre erbe usate come medicina, i \"semplici\". L’infermeria cura i monaci e i malati che bussano alla porta. I monaci accolgono anche pellegrini e poveri: ospitare lo straniero è un dovere previsto dalla Regola.",
"Nel Duecento molte città italiane si governano da sole: sono i Comuni. Siena è guidata da magistrati scelti fra i cittadini e da consigli; la campana chiama il popolo alle assemblee. Le famiglie più potenti costruiscono torri-casa, simbolo di forza, e dentro le mura la vita è fitta di palazzi, botteghe, chiese e mercati.",
"Il Duomo è il simbolo orgoglioso della città e lo si costruisce per decenni. Un ente cittadino, l’Opera del Duomo, paga i lavori e controlla i conti. Il capomastro guida scalpellini, muratori e carpentieri: si taglia il marmo, si montano i ponteggi e si sollevano i blocchi con grandi gru a ruota mosse da uomini che camminano dentro la ruota.",
"Chi fa lo stesso mestiere si riunisce in un’Arte, una specie di associazione: ci sono l’Arte della lana, dei fabbri, dei notai, degli speziali, dei muratori. L’Arte stabilisce le regole del lavoro e protegge i suoi membri. Un ragazzo entra in bottega come garzone, poi diventa lavorante e infine maestro.",
"Il mercato è il cuore della città: si vendono grano, formaggio, stoffe, spezie, vasi, ferro. Per i pagamenti grossi ci sono banchieri e mercanti che usano monete d’argento e d’oro e lettere di cambio, e fanno affari in tutta Europa. Qui la gente parla in volgare, la lingua di tutti i giorni, e non in latino.",
"Assisi è una città di pietra chiara e rosata sul fianco del monte Subasio, con mura, torri, una rocca in alto e un tempio romano sulla piazza. Francesco nasce qui intorno al 1181 o 1182, figlio di un ricco mercante di stoffe. Secondo i biografi, da giovane ama le feste e sogna di diventare cavaliere; combatte nella guerra contro Perugia, viene fatto prigioniero e torna cambiato.",
"Fuori dalle mura c’è la chiesetta di San Damiano, quasi in rovina. Secondo la tradizione qui Francesco, pregando davanti a un crocifisso, sente di dover \"riparare\" la chiesa e comincia a rimettere pietra su pietra. Intorno al 1206, davanti al vescovo, restituisce al padre abiti e beni e sceglie di vivere in povertà.",
"La Porziuncola è una cappella nel bosco, dove Francesco e i primi compagni vivono in povertà: vanno a piedi, lavorano con le mani, chiedono l’elemosina solo quando serve e predicano al popolo nella lingua di tutti i giorni. Così nasce l’Ordine dei frati minori, intorno al 1209; con Chiara d’Assisi nascono anche le Povere Dame, le future clarisse.",
"Nel Natale del 1223, a Greccio, Francesco mette in scena la nascita di Gesù con una mangiatoia, il fieno, un bue e un asino: è l’origine del presepe. Negli ultimi anni, malato e quasi cieco, compone il Cantico di frate Sole, una lode alla creazione in volgare umbro. Muore alla Porziuncola il 3 ottobre 1226.",
"Il Battistero di San Giovanni è un edificio ottagonale rivestito di marmo bianco e verde, dove si battezzano tutti i fiorentini; Dante gli è molto affezionato. Accanto, dal 1296, si lavora alla nuova cattedrale al posto della vecchia Santa Reparata, con il progetto di Arnolfo di Cambio. È una città che costruisce in grande.",
"Il governo di Firenze è nelle mani dei Priori, scelti fra le Arti e in carica solo due mesi, perché nessuno prenda troppo potere. Per ospitarli, dal 1299 si costruisce il Palazzo dei Priori, forte come una fortezza e con una torre. Intanto le famiglie rivali si fronteggiano dalle loro torri: guelfi e ghibellini, bianchi e neri.",
"Dal 1252 Firenze conia il fiorino, una moneta d’oro puro che vale ovunque, dai porti del Mediterraneo alle fiere d’Europa. I mercanti fiorentini aprono \"compagnie\" con filiali in tante città, prestano denaro ai re, tengono registri e usano le lettere di cambio. È una delle città più ricche d’Europa.",
"Lungo l’Arno lavorano lavandai, tintori e cardatori: la lana è la grande industria di Firenze. Si comprano lana grezza e panni importati, si lavano, si tingono e si rivendono in tutta Europa. Il fiume serve a lavare, a muovere i mulini e a trasportare merci, e i ponti sono pieni di botteghe.",
"La Via Francigena è la strada che unisce l’Europa a Roma: il nome vuol dire \"la via che viene dalla Francia\", cioè dalle terre dei Franchi. Nel 990 l’arcivescovo Sigerico di Canterbury, tornando da Roma, annota 79 tappe del cammino. Per secoli la percorrono pellegrini, mercanti, soldati e messaggeri, e sui ponti si paga un piccolo pedaggio.",
"A fine giornata i viaggiatori cercano da dormire: nelle locande si mangia e si paga, negli ospizi, spesso gestiti da monaci o da confraternite, i pellegrini poveri trovano un letto e una minestra. Si dorme su paglia o su panche, spesso tutti nella stessa stanza.",
"Dante spiega che chi va a Roma si chiama romeo, chi va oltremare, in Terrasanta, palmiere, e chi va a Santiago di Compostela pellegrino. Ciascuno ha il suo segno: le chiavi, la palma, la conchiglia. Nel 1300 papa Bonifacio VIII proclama il primo Giubileo e la strada si riempie di gente.",
"Nel 1348 la peste nera arriva in Italia dal mare e in pochi mesi tocca città e campagne. Secondo le stime, in Europa muore da un terzo a metà della popolazione. Lungo la strada restano case chiuse, campi incolti e tante croci; i sopravvissuti riprendono a lavorare, e piano piano la vita ricomincia.",
"Venezia nasce nella laguna: le case poggiano su migliaia di pali di legno conficcati nel fango, e al posto delle strade ci sono i canali. Si va a piedi o in barca. Gli abitanti vivono di mare e di commercio: sale, pesce, navi e merci da ogni parte del Mediterraneo.",
"La basilica di San Marco, con le cupole e i mosaici d’oro, custodisce, secondo la tradizione, le reliquie dell’evangelista portate da Alessandria nell’828. Sulla facciata ci sono quattro cavalli di bronzo arrivati da Costantinopoli dopo la Quarta Crociata, nel 1204. Accanto sorge il palazzo del doge, il capo della Repubblica, scelto fra i nobili veneziani.",
"L’Arsenale, fondato nel 1104, è il grande cantiere navale della Repubblica, circondato da mura: qui si costruiscono e si riparano le galee, le navi lunghe a remi e a vela che portano merci e soldati. È uno dei più grandi luoghi di lavoro d’Europa, con carpentieri, calafati, fabbri e cordai.",
"Dall’Oriente arrivano pepe, zenzero, cannella, seta e stoffe preziose; dall’Europa arrivano legname, lana e argento. A Rialto i mercanti trattano e contrattano. Nel 1284 Venezia conia il ducato d’oro e nel 1291 sposta le fornaci dei vetrai a Murano, per il pericolo di incendi in una città di case di legno.",
"Di notte il cielo sopra la laguna è pieno di stelle, e per i naviganti è una mappa: la Stella Polare indica il nord, e con la bussola e le carte nautiche, i portolani, i piloti trovano la strada fra i porti. Dalle galee si accendono le lanterne, e la città diventa un puntino di luce sull’acqua.",
"Sotto le stelle di Venezia, la rotta continua verso l’Oriente."
];
const NAME={
me_gualtiero:"Gualtiero, il contadino",
me_matilde:"Matilde di Canossa, la contessa",
me_anselmo:"Frate Anselmo, il monaco copista",
me_lapo:"Mastro Lapo, il capomastro del Duomo",
me_francesco:"Francesco d’Assisi",
me_dante:"Dante Alighieri",
me_berta:"Berta, l’ostessa",
me_marco:"Marco Polo, il mercante viaggiatore"
};
const GREET={
me_gualtiero:"Salve, Pierpaolo! Vieni qua, ma resta fuori dal solco, che i buoi non amano le sorprese. Sono Gualtiero e di mattina, nella pianura, la nebbia è la mia compagna: ti accorgi che c’è il sole solo quando ti scalda la schiena. La terra qui è dura, ma se la tratti bene dà pane per tutti.",
me_matilde:"Salve, Pierpaolo, entra pure, che qui fuori fa un freddo da imperatori. Sono Matilde, figlia di Bonifacio di Canossa e contessa di queste terre. Siamo nell’inverno del 1077 e da queste mura passa una storia che gli uomini ricorderanno a lungo: ma tu, intanto, scaldati al fuoco.",
me_anselmo:"Pax vobis, Pierpaolo! Parla piano, che qui le parole si scrivono, non si gridano. Sono frate Anselmo e da trent’anni copio libri: ho le dita nere d’inchiostro, la schiena storta e l’anima in pace. Siediti vicino alla finestra, la luce è un bene prezioso.",
me_lapo:"Occhio alla testa, Pierpaolo, che quassù le pietre non guardano chi passa! Sono Lapo, capomastro, e questo cantiere è la mia vita: marmo bianco e marmo scuro, uno accanto all’altro, a strisce, come i colori della nostra città. Se vuoi guardare, sta’ sotto la tettoia e non toccare niente.",
me_francesco:"Il Signore ti dia pace, Pierpaolo! Siediti qui, che il sasso è comodo, e guarda come brilla il sole sulla pietra rosa. Sono Francesco, figlio di Pietro di Bernardone: un tempo mercante di stoffe, adesso frate, e il mio mestiere è essere felice senza niente.",
me_dante:"Salve, Pierpaolo! Siediti, che a Firenze le panchine non mancano e le chiacchiere neppure. Sono Dante, figlio di Alighiero: quest’anno, il 1300, mi hanno eletto priore, e mi sembra di camminare con il mondo sulle spalle. Se mi senti un po’ più triste del dovuto, è perché so già come andrà a finire: qui il tempo si piega.",
me_berta:"Entra, entra, Pierpaolo, e togliti i sandali che ti preparo un catino d’acqua calda! Sono Berta e questa locanda era di mio padre, poi di mio marito, e adesso è mia: da qui sono passati mercanti, soldati, frati e santi, certi con i piedi più puzzolenti di altri. Siediti, che la minestra è pronta.",
me_marco:"Salve, Pierpaolo! Non avere fretta: il mare non scappa. Sono Marco Polo, di Venezia, e arrivo da lontano: dalla corte del Gran Khan, dove ho passato più anni che a casa mia. Ti racconto quello che ho visto, e poi giudichi tu."
};
/* posizione di ognuna delle 34 tappe: 4 per zona (8 nella zona 8 sono 6) */
const LX=[];for(let z=0;z<7;z++)for(let k=0;k<4;k++)LX.push(Z[z]+400+700*k);for(let k=0;k<6;k++)LX.push(Z[7]+400+700*k);

/* ---- personaggi ---- */
const NP=(id,x,o,acc)=>({id,name:NAME[id],x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));const c=q=>tn(o[q]);fig(g,px,y,t,Object.assign({f,s:1},o,{skin:c('skin'),top:c('top'),bot:c('bot'),hair:c('hair'),acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:GREET[id]}}});
const tun=(g,b,c,belt)=>{poly(g,tn(c),[[-12,-52+b],[12,-52+b],[15,-24],[-15,-24]]);rect(g,tn(belt||'#4a3220'),-12,-55+b,24,5)};
const piedi=(g,c)=>{el(g,c,-4,-1,8,4);el(g,c,8,-1,8,4)};
const barbaN=(g,b,col,n,rows)=>{for(let r=0;r<rows;r++)for(let q=r;q<n-r;q++)dot(g,col,-3+q*2.2,-92+b+r*4.6+(q%2)*1.6,3.2)};
const npcs=[
 /* Gualtiero: tunica corta di lana grezza con cinghia, cappuccio di tela, pungolo, gerla con pane e cipolle */
 NP('me_gualtiero',1290,{skin:'#c88e64',top:'#a8905e',bot:'#6a5a44',hair:'#3a2a1a',s:1.02},(g,b,t)=>{tun(g,b,'#a8905e');poly(g,tn('#c8bc9c'),[[-13,-94+b],[-1,-100+b],[4,-84+b],[-10,-80+b]]);el(g,tn('#c8bc9c'),0,-110+b,12.4,6);
  el(g,tn('#a8803c'),-20,-70+b,8,16);rect(g,tn('#8a6a30'),-28,-86+b,16,3);el(g,tn('#e8d8a0'),-22,-90+b,4,3);dot(g,tn('#d8b0a0'),-18,-90+b,2.4);
  ln(g,'#6a4a28',2.6,[14,-84+b,30,-150]);poly(g,'#8a8a92',[[28,-150],[32,-150],[30,-160]]);ln(g,tn('#c88e64'),6,[12,-84+b,16,-76+b]);piedi(g,'#5a3a22')}),
 /* Matilde: veste blu scura con maniche larghe, mantello foderato di pelliccia, velo bianco con cerchietto d'oro, cintura ricamata */
 NP('me_matilde',3980,{skin:'#e0b494',top:'#24365e',bot:'#24365e',hair:'#6a4a2a',long:1,s:.98},(g,b,t)=>{poly(g,tn('#6a2a3a'),[[-14,-92+b],[-2,-94+b],[-6,-30],[-22,-30]]);poly(g,tn('#e8dcc8'),[[-14,-92+b],[-10,-92+b],[-12,-30],[-22,-30]]);
  poly(g,tn('#3a4e7e'),[[-12,-84+b],[-22,-62+b],[-12,-58+b],[-8,-80+b]]);poly(g,tn('#3a4e7e'),[[12,-84+b],[24,-62+b],[14,-58+b],[8,-80+b]]);
  rect(g,tn('#e0b84a'),-12,-56+b,24,4);for(let q=0;q<4;q++)dot(g,tn('#e8d8a0'),-8+q*5,-54+b,1.2);
  el(g,tn('#f2ecdc'),0,-112+b,13,6);poly(g,tn('#f2ecdc'),[[-13,-110+b],[-17,-80+b],[-8,-86+b]]);ln(g,tn('#e0b84a'),2,[-11,-108+b,12,-108+b]);dot(g,tn('#e0b84a'),14,-82+b,1.6);piedi(g,'#4a3a2a')}),
 /* Anselmo: tonaca nera con cappuccio, tonsura, dita d'inchiostro, coltellino, corno d'inchiostro, penna d'oca */
 NP('me_anselmo',7460,{skin:'#d0a07a',top:'#2a2622',bot:'#2a2622',hair:'#4a3a2a',long:1,s:1.0},(g,b,t)=>{poly(g,tn('#1a1612'),[[-14,-94+b],[-1,-100+b],[5,-84+b],[-11,-80+b]]);el(g,tn('#d0a07a'),1,-111+b,6.6,3.2);rect(g,tn('#d8cfae'),-12,-56+b,24,3);
  ln(g,tn('#d0a07a'),6,[12,-84+b,22,-78+b]);dot(g,'#14100c',22,-78+b,3);ln(g,'#f0ece0',1.6,[22,-78+b,34,-100+b]);poly(g,'#e8e4d8',[[34,-100+b],[40,-112+b],[36,-94+b]]);
  poly(g,tn('#14100c'),[[-20,-56+b],[-14,-56+b],[-15,-46+b],[-19,-46+b]]);ln(g,'#c8c8d0',1.6,[-24,-62+b,-30,-54+b]);piedi(g,'#3a2a1a')}),
 /* Lapo: tunica corta di lana, grembiule bianco di calce, squadra e compasso alla cintura, filo a piombo, polvere di marmo nei capelli */
 NP('me_lapo',9690,{skin:'#c8946a',top:'#8a7a5a',bot:'#5a4a3a',hair:'#6a5a4a',s:1.04},(g,b,t)=>{tun(g,b,'#8a7a5a','#4a3220');poly(g,tn('#e8e4d8'),[[-10,-78+b],[10,-78+b],[12,-28],[-12,-28]]);poly(g,tn('#8a7a5a'),[[-13,-94+b],[-1,-100+b],[4,-84+b],[-10,-80+b]]);
  for(let q=0;q<7;q++)dot(g,'rgba(255,255,255,.85)',-8+q*3,-110+b+(q%2)*3,1.2);ln(g,tn('#8a8a92'),2,[-14,-50+b,-20,-40]);ln(g,tn('#8a8a92'),2,[-14,-50+b,-8,-40]);ln(g,tn('#6a4a28'),2.6,[8,-52+b,14,-36]);ln(g,tn('#6a4a28'),2.6,[14,-36,22,-38]);
  ln(g,tn('#c8946a'),6,[12,-84+b,20,-70+b]);ln(g,'#8a8a92',1,[20,-70+b,20,-46]);poly(g,'#6a6a72',[[17,-46],[23,-46],[20,-36]]);piedi(g,'#5a3a22')}),
 /* Francesco: tonaca grigio-marrone rattoppata con cordone, piedi scalzi, barba rada, uccellino sulla spalla */
 NP('me_francesco',12510,{skin:'#d0a07a',top:'#7a6a54',bot:'#7a6a54',hair:'#3a2a1a',long:1,s:.98},(g,b,t)=>{poly(g,tn('#5a4c3a'),[[-13,-94+b],[-1,-100+b],[4,-84+b],[-10,-80+b]]);rect(g,tn('#d8cfae'),-12,-56+b,24,3);ln(g,tn('#d8cfae'),2,[8,-54+b,10,-26]);dot(g,tn('#d8cfae'),10,-24,2);
  rect(g,tn('#8a7a64'),-6,-40,8,8);rect(g,tn('#6a5a44'),4,-72+b,7,7);for(let q=0;q<4;q++)dot(g,'#3a2a1a',-1+q*2.6,-90+b+(q%2)*2,1.5);
  ln(g,tn('#d0a07a'),6,[12,-84+b,20,-70+b]);el(g,'#6a5a4a',10,-110+b+Math.sin(t*3)*.6,5,3.4);dot(g,'#6a5a4a',14,-113+b,2.4);poly(g,'#d8a030',[[16,-113+b],[19,-112+b],[16,-111+b]]);el(g,tn('#d0a07a'),-4,-1,6,3);el(g,tn('#d0a07a'),8,-1,6,3)}),
 /* Dante: lunga veste rossa con cappuccio, naso aquilino, barba nera, quaderno sotto il braccio */
 NP('me_dante',14500,{skin:'#c8a07a',top:'#a8302a',bot:'#a8302a',hair:'#1a120c',long:1,s:1.0},(g,b,t)=>{poly(g,tn('#8a2420'),[[-13,-96+b],[0,-104+b],[8,-92+b],[2,-84+b],[-12,-84+b]]);el(g,tn('#8a2420'),-2,-110+b,13,6);poly(g,tn('#c8a07a'),[[10,-103+b],[17,-98+b],[10,-97+b]]);
  barbaN(g,b,'#1a120c',7,2);rect(g,tn('#6a1a18'),-12,-56+b,24,3);rect(g,tn('#f0e6c8'),-26,-80+b,16,14);rect(g,tn('#6a4a28'),-27,-82+b,18,2);ln(g,tn('#8a7a50'),1,[-24,-66+b,-14,-66+b]);piedi(g,'#3a2a1a')}),
 /* Berta: veste lunga di lana scura, grembiule di lino, cuffia bianca, maniche rimboccate, mazzo di chiavi, scodella */
 NP('me_berta',17900,{skin:'#d8a47c',top:'#5a4a52',bot:'#5a4a52',hair:'#9a8a7a',long:1,s:.98},(g,b,t)=>{poly(g,tn('#f2ecdc'),[[-10,-70+b],[10,-70+b],[16,-26],[-16,-26]]);el(g,tn('#f2ecdc'),0,-111+b,12.6,6);poly(g,tn('#f2ecdc'),[[-12,-108+b],[-15,-92+b],[-6,-96+b]]);
  ln(g,tn('#d8a47c'),7,[-12,-84+b,-18,-66+b]);ln(g,tn('#d8a47c'),7,[12,-84+b,24,-76+b]);el(g,'#8a6a40',26,-76+b,8,3.4);el(g,'#d8c8a0',26,-78+b,6,2);fumo(g,26,-84+b,t,2,'rgba(240,240,240,.4)');
  rect(g,tn('#c8a030'),-12,-56+b,24,3);ln(g,'#c8a030',1.2,[-8,-54+b,-10,-42+b]);dot(g,'#c8a030',-10,-40+b,2);dot(g,'#c8a030',-6,-41+b,2);piedi(g,'#3a2a1a')}),
 /* Marco Polo: veste lunga di seta scura con ricami orientali, cappuccio, stivali, borsa di pelle, anelli */
 NP('me_marco',23290,{skin:'#b8845c',top:'#2a2a50',bot:'#2a2a50',hair:'#3a2a1a',long:1,s:1.02},(g,b,t)=>{poly(g,tn('#1e1e3e'),[[-13,-94+b],[-1,-100+b],[4,-84+b],[-10,-80+b]]);el(g,tn('#1e1e3e'),0,-110+b,12.4,6);
  for(let q=0;q<4;q++){ln(g,'#e0b84a',1.2,[-8+q*5,-84+b,-4+q*5,-64+b]);dot(g,'#e0b84a',-6+q*5,-72+b,1.4)}rect(g,'#e0b84a',-12,-56+b,24,3);rect(g,tn('#7a5a38'),-22,-60+b,12,14);ln(g,'#5a3e22',1.4,[-22,-60+b,-10,-60+b]);
  dot(g,'#e8d8a0',20,-80+b,1.8);dot(g,'#c8402a',21,-76+b,1.6);rect(g,tn('#e8d8a0'),16,-82+b,12,10);el(g,'#3a2a1c',-4,-3,6,6);el(g,'#3a2a1c',8,-3,6,6)})
];

/* ---- oggetti lungo il percorso: [nome in elementi.js, posizione nel mondo, parametro] ---- */
const props=[
 /* zona 1 · i campi e il villaggio del feudo */
 ['mvtarga',90,'CAMPI DEL FEUDO'],['mvsiepe',130,6],['mvpioppo',230,1],['mvcampi',400],['mvquercia',690,1.1],['mvcovoni',790],['mvaratro',1100],['mvpioppo',1400,1],['mvcroce',1500],['mvmulino',1800],['mvforno',2080],['mvpozzo',2210],['mvquercia',2200,1.4],['mvquercia',2260,1.1],['mvcasa',2400],['mvarnie',2560],['mvpieve',2660],['mvsiepe',2780,3],
 /* zona 2 · il castello di Canossa */
 ['mvtarga',2890,'CANOSSA'],['mvpino',3010,1],['mvrupe',3200],['mvtorcia',3470,0],['mvsala',3900],['mvpino',4230,1.1],['mvcortile',4600],['mvtorcia',4880,0],['mvpino',5050,1],['mvporta',5300],['mvpino',5560,1.1],
 /* zona 3 · l'abbazia */
 ['mvtarga',5690,'ABBAZIA'],['mvabbazia',6000],['mvcipresso',6420,120],['mvchiostro',6700],['mvcipresso',6960,110],['mvulivo',7060,1],['mvscriptorium',7400],['mvvigne',7640,5],['mvorto',8100],['mvcipresso',8340,120],
 /* zona 4 · Siena */
 ['mvtarga',8490,'SIENA'],['mvsiena',8800],['mvduomo',9500],['mvbotteghe',10200],['mvcipresso',10450,100],['mvmercato',10900],['mvcipresso',11130,110],
 /* zona 5 · Assisi */
 ['mvtarga',11290,'ASSISI'],['mvulivo',11380,1],['mvassisi',11600],['mvulivo',11860,1.1],['mvdamiano',12300],['mvulivo',12700,1],['mvporziuncola',13000],['mvgreccio',13700],['mvcipresso',13940,110],
 /* zona 6 · Firenze */
 ['mvtarga',14090,'FIRENZE'],['mvbattistero',14400],['mvcipresso',14740,120],['mvpalazzo',15100],['mvbanco',15800],['mvarno',16500],['mvcipresso',16740,110],
 /* zona 7 · la Via Francigena */
 ['mvtarga',16890,'VIA FRANCIGENA'],['mvponte',17200],['mvcroce',17540,1.1],['mvlocanda',17900],['mvcipressi',18340,4],['mvpellegrini',18600],['mvvigne',18920,6],['mvmoria',19300],
 /* zona 8 · Venezia */
 ['mvtarga',19690,'VENEZIA'],['mvlanterna',19790],['mvlaguna',20000],['mvsanmarco',20700],['mvlanterna',21060],['mvarsenale',21400],['mvtorcia',21740,0],['mvrialto',22100],['mvlanterna',22430],['mvstelle',22800],['mvballe',23080],['mvmolo',23200],['mvvarco',23600]];

const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'medioevo',name:'Medioevo · Dai campi del feudo alle stelle di Venezia',width:W1,sky:['#8a90b8','#f0b8c0','#ffd8b8'],gt:372,gr:['#8a7048','#5a4430'],chord:[220,261.6,329.6,392],amb:'#ffe8c0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)}],
mid:[{k:1,fn:LV(layerLife)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da medioevo.txt) --- */
(function(){
const TOPX_ME={
me_gualtiero:[
["Chi sei e che fai?","Gualtiero, trentotto anni, contadino. Lavoro un pezzo di terra del signore con mia moglie Ermelinda e quattro figli, di cui due già bravi a spaventare i corvi. Quello che coltivo non è tutto mio: una parte del raccolto va al padrone, e in cambio ho il diritto di vivere e lavorare qui."],
["Com’è la giornata di un contadino?","Si parte all’alba e si smette al buio. In inverno si riparano gli attrezzi e si accudiscono le bestie, in primavera si semina, d’estate si miete, in autunno si batte il grano e si vendemmia. La campana della pieve mi dice l’ora: altri orologi non ne ho, a parte il sole e la pancia."],
["Come funziona l’aratro pesante?","È un aratro di legno con le ruote e un vomere di ferro che taglia e rivolta la zolla. Lo tirano due buoi, o un cavallo con il collare rigido, e io cammino accanto a guidarlo. Fa un solco profondo, adatto alla nostra terra pesante: i miei nonni, con l’aratro leggero, grattavano appena la superficie."],
["Cosa sono i tre campi?","Un campo lo semino in autunno con frumento o segale, uno in primavera con avena, fave e piselli, e uno lo lascio a riposo, il maggese. L’anno dopo si cambia. I legumi nutrono la terra e anche noi: sembra una magia, ma è solo pazienza."],
["Cosa mangiate?","Pane scuro, zuppe di legumi e di verdura, formaggio, cipolle, uova. La carne è rara: magari un maiale ammazzato per San Martino, l’11 novembre. Il vino è per le feste e per chi ha una vigna. Se il raccolto va male, a primavera ci si stringe la cinghia."],
["Che doveri avete verso il signore?","Lui ci protegge e in cambio noi lavoriamo la terra, gli diamo una parte del raccolto e alcuni giorni di lavoro sui suoi campi. Per macinare e per cuocere si usano il suo mulino e il suo forno, e si lascia una quota. Alla Chiesa va la decima, un decimo del raccolto. È pesante, ma è l’ordine delle cose, dicono."],
["Esistono contadini liberi?","Qualcuno sì, ma tanti sono legati alla terra e non possono lasciarla. Però qualcosa si muove: a Bologna, nel 1257, il Comune ha liberato più di cinquemila servi, pagando i padroni. Non è solo bontà: un uomo libero paga le tasse. Ma sapere che si può fare dà speranza."],
["Com’è la tua casa?","Una stanza di legno e argilla con il tetto di paglia, il focolare nel mezzo e il fumo che cerca l’uscita. Si dorme su sacconi di paglia, spesso con una gallina o due per compagnia, e d’inverno il calore delle bestie nella stalla vicina è benvenuto. Non è bella, ma è casa."],
["Come vi vestite e come vi curate?","Tunica di lana o di canapa, calzari di cuoio e un cappuccio; le donne una veste lunga con un velo. Ci si lava al fiume e, per le feste, anche con acqua calda nella tinozza. Per i mali ci sono le erbe, le preghiere e qualche santo protettore; se ti ammali sul serio, speri nell’infermeria dei monaci."],
["Come vi divertite?","La domenica c’è la messa e poi la festa: balli, giochi con la palla, lotta, e un cantastorie se passa. A giugno, per San Giovanni, si accendono i fuochi. E a Carnevale ci si fa due risate prima della Quaresima, che è lunga e povera."],
["Dove vado dopo?","Sali verso le colline, fino al castello di Canossa: la contessa Matilde ti riceverà con il piglio di chi comanda un esercito. Salutala da parte di Gualtiero, quello dei buoi: non mi conosce, ma di sicuro le piacciono i buoi."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e che il Signore ti dia un buon raccolto, anche se non hai un campo. Se ripassi, ti offro pane scuro e un goccio di vino. Pax, salus, fortuna: pace, salute e buona sorte!"]
],
me_matilde:[
["Chi sei e che fai?","Matilde, figlia di Bonifacio di Canossa e di Beatrice di Lorena, nata nel 1046. Governo terre che vanno dal lago di Garda fino alla Toscana, amministro la giustizia, tengo la corte e, dicono, vado anch’io alla testa dei miei soldati. Non è una cosa comune per una donna, lo so."],
["Perché il castello è su una rupe?","Perché da quassù si vedono le strade, le valli e chi le percorre, e un nemico deve arrivare in salita. Il mastio è la torre più forte, le mura stanno su più livelli e il borgo si stringe ai piedi. Qui il castello non è solo una casa: è una fortezza, un tribunale e un rifugio."],
["Cos’è il feudo?","È un patto: il signore concede terre o cariche a un vassallo, e il vassallo giura fedeltà e promette aiuto in guerra. A loro volta i vassalli hanno i loro uomini. È una catena di promesse che regge i regni, finché qualcuno non la spezza. Io ho vassalli, ma per certe terre rispondo anch’io all’imperatore."],
["Cosa fa un cavaliere?","Combatte a cavallo, ed è costosissimo: cavallo, cotta di maglia, elmo, scudo e lancia. Da ragazzo impara come paggio, poi come scudiero, e infine giura fedeltà. Si dice che debba difendere i deboli e la fede: non sempre lo fa, ma almeno si insegna."],
["Cosa succede a Canossa nel 1077?","L’imperatore Enrico IV, scomunicato da papa Gregorio VII, attraversa le Alpi d’inverno e viene qui, dove il papa è mio ospite. Secondo le cronache aspetta tre giorni fuori dalle mura, in veste di penitente; io e l’abate Ugo di Cluny convinciamo il papa a riceverlo, e il 28 gennaio lo assolve. Alcuni dicono che sia stata una vittoria del papa, altri una mossa abile dell’imperatore: forse entrambe."],
["Perché hai donato le tue terre alla Chiesa?","Poco dopo Canossa, intorno al 1080, dono i miei beni alla Chiesa: è un modo per restare accanto al papa e per proteggere le mie terre dopo di me. In vita, però, ne conservo l’uso: non sono ancora pronta a fare la monaca."],
["Come si vive in castello?","Si mangia nella sala grande, su lunghe tavole su cavalletti, con fette di pane per piatto e coltelli personali. Il fuoco è sempre acceso, perché le pareti sono di pietra e fa freddo, e il fumo ti entra nei vestiti. Il vero lusso, qui, è una pelliccia e una candela di cera."],
["Cosa si mangia a corte?","Pane, carne di maiale e di pecora, selvaggina come cervo e cinghiale, pesce nei giorni di magro, minestre di legumi, e nei banchetti spezie come pepe e zenzero, che arrivano da lontano e costano tanto. Si beve vino, e nelle terre del nord anche birra. I giorni di digiuno sono tanti, e si mangia di magro."],
["Come vi vestite e vi lavate?","Tuniche e mantelli di lana, lino per la biancheria, pellicce per l’inverno; le dame portano vesti lunghe con le maniche ampie e veli. Ci si lava più di quel che si crede: ci sono tinozze e acqua calda per le occasioni. Chi dice che nel Medioevo nessuno si lavava non ha mai visto una tinozza fumare in una cucina di castello."],
["Cosa leggi e che lingue parli?","Parlo il latino, il francese e il tedesco, e il volgare delle mie terre: serve, quando in un giorno devi parlare con un papa, con un imperatore e con un contadino. Mi piace avere libri intorno. Un monaco di qui, Donizone, scriverà la mia vita in versi latini."],
["Dove vado dopo?","Scendi nella valle, dai monaci: c’è un’abbazia dove frate Anselmo copia libri a mano da più di trent’anni. Quando entri, non parlare ad alta voce: i monaci e i libri amano il silenzio."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati che governare è fare cento cose che nessuno vede. Dicono che, dopo secoli, mi seppelliranno nella grande basilica di San Pietro, a Roma: non so se crederci, ma non mi dispiace. Pax, salus, fortuna: pace, salute e buona sorte!"]
],
me_anselmo:[
["Chi sei e che fai?","Anselmo, monaco benedettino, copista. Sono entrato in abbazia che avevo dodici anni, e da allora la mia vita sono la preghiera, il lavoro e lo studio. Copio libri a mano: salmi e vangeli, ma anche autori antichi che altrimenti andrebbero perduti."],
["Chi ha fondato i monaci come voi?","Benedetto da Norcia: intorno al 529 fonda l’abbazia di Montecassino e scrive la Regola, una guida di 73 capitoli che organizza la vita in comune fra preghiera, lavoro, lettura e ospitalità. Il motto \"ora et labora\", \"prega e lavora\", viene dopo, a riassumere quello spirito."],
["Com’è la tua giornata?","Si comincia di notte con il Mattutino, poi Lodi, Prima, Terza, Sesta, Nona, Vespro e Compieta: otto momenti di preghiera, scanditi dalla campana. In mezzo si lavora: io nello scriptorium, altri nell’orto, in cucina o nei campi. Si dorme nel dormitorio comune e si mangia in silenzio, mentre uno legge."],
["Come si fa un libro?","Si prepara la pergamena con la pelle di pecora o di vitello, raschiata e tesa; si tracciano le righe; si scrive con una penna d’oca e inchiostro di noci di galla; poi un altro monaco corregge e i miniatori aggiungono colori e oro. I fogli si cuciono e si rilegano con assi di legno e cuoio. Una Bibbia intera richiede mesi o anni."],
["Perché scrivete a mano e in latino?","Perché la stampa non esiste: ogni libro è un tesoro raro e costoso. Il latino è la lingua della Chiesa e dei dotti in tutta Europa, così un libro scritto qui lo capisce anche un monaco in Francia o in Inghilterra. Per la gente di tutti i giorni c’è il volgare, ma per ora quasi nessuno lo scrive."],
["Che c’entra Carlo Magno?","Intorno all’anno 800 Carlo Magno, re dei Franchi e poi imperatore, vuole scuole e libri in tutto il regno. I dotti della sua corte, fra cui Alcuino di York, diffondono una scrittura chiara e regolare, la minuscola carolina: da lì discendono, dicono, le lettere minuscole che userete anche voi. Non male per un gruppo di monaci."],
["Cosa c’è nell’orto e nell’infermeria?","Salvia, menta, ruta, malva, finocchio e altre erbe che curiamo con attenzione: le chiamiamo \"semplici\". Nell’infermeria si curano i fratelli ammalati e chi bussa alla porta. Conosciamo i salassi e le tisane; non tutto funziona, ma l’attenzione per il malato conta moltissimo."],
["Accogliete i pellegrini?","Sempre: la Regola dice che gli ospiti vanno accolti come Cristo stesso. Diamo loro un letto, una minestra e acqua per lavarsi i piedi, e senza troppe domande. Molti viaggiatori portano notizie, e io le raccolgo con più curiosità di quanta un monaco dovrebbe avere."],
["Copiate anche i libri degli antichi?","Sì: copiamo anche autori pagani come Virgilio e Cicerone, perché c’è tanta sapienza anche lì. Senza i monaci copisti molti testi antichi non sarebbero arrivati fino a voi. Mi dispiace solo che qualcuno, per risparmiare, raschi via una pergamena antica per riscriverci dei salmi: la pergamena costa tanto."],
["Cosa c’è di nuovo nel mondo dei libri?","Gli occhi si stancano con l’età. Dicono che alla fine del Duecento, in Toscana, qualcuno inventerà due lenti di vetro da tenere davanti agli occhi, gli occhiali: se è vero, noi vecchi copisti ringrazieremo. Chi l’abbia inventato davvero, però, non lo sa nessuno."],
["Dove vado dopo?","Verso la città: a Siena, al cantiere del Duomo, cerca mastro Lapo, il capomastro. Ha le mani piene di calce e la testa piena di numeri. Digli che ti manda frate Anselmo, e se sorride, è un buon segno."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati che ogni libro è un ponte: lo scrive uno, lo legge un altro, e in mezzo ci sono secoli. Se ripassi, ti faccio vedere una lettera iniziale che ho colorato di blu: ci ho messo una settimana. Pax, salus, fortuna!"]
],
me_lapo:[
["Chi sei e che fai?","Lapo, quarantasette anni, capomastro. Dirigo scalpellini, muratori, carpentieri e fabbri: devo far stare in piedi una chiesa e far quadrare i conti dell’Opera del Duomo, che sono più difficili delle volte. Sono figlio di un muratore, e prima di comandare ho trasportato parecchie secchiate di calce."],
["Com’è fatto un cantiere?","Un formicaio con un piano: i tagliapietre squadrano i blocchi, gli scultori scolpiscono, i muratori impastano la calce, i carpentieri montano i ponteggi e le centine di legno per gli archi, i fabbri affilano gli attrezzi e i carrettieri portano i blocchi con i buoi. Si lavora dall’alba al tramonto, e la domenica si riposa. Gli attrezzi sono semplici: squadra, compasso, filo a piombo, mazzuolo e scalpello."],
["Come si sollevano i blocchi?","Con le gru di legno a ruota: dentro una grande ruota camminano degli uomini, come bestie in un mulino, e la fune si avvolge sull’argano e solleva il blocco. Con le carrucole si moltiplica la forza. Bisogna stare attenti: un blocco che cade non perdona."],
["Cos’è lo stile gotico?","Archi a punta, volte a crociera con i costoloni, archi rampanti e contrafforti all’esterno: un modo di far salire i muri più in alto e di aprire finestre più grandi, per far entrare la luce. È nato in Francia circa un secolo e mezzo fa, e noi italiani lo abbiamo adattato alla nostra maniera, con i marmi colorati."],
["Perché il Duomo è a strisce?","Per bellezza e per orgoglio: il bianco e il nero sono i colori della nostra città. Il marmo arriva dalle cave della Toscana, con carri e buoi. Siena vuole una chiesa bella almeno quanto quelle di Pisa e di Firenze: fra città vicine si fa a gara anche con la pietra."],
["Quanto ci vuole a costruire un Duomo?","Decenni, a volte secoli: i maestri cominciano un’opera e non la vedranno finita. La torre di Pisa, per esempio, comincia nel 1173, si ferma presto perché il terreno cede, riprende nel 1272 e riceve la cella delle campane solo nel 1372. Chi costruisce, costruisce per i nipoti."],
["E qui a Siena?","Dicono che nel 1339 il Consiglio vorrà un Duomo ancora più grande, con quello di oggi ridotto a semplice transetto. Poi, nel 1348, arriverà la peste, il lavoro si fermerà, e resterà un grande muro incompiuto, che chiameranno \"facciatone\". I sogni di pietra costano più dei sogni di carta."],
["Cos’è l’Opera del Duomo?","L’ente della città che paga e dirige il cantiere: amministra le offerte, compra marmo e legname, assume i maestri, paga i salari e controlla anche me. Siena dà tanto per il Duomo, fra tasse, donazioni e lasciti nei testamenti. A fine giornata i miei operai ricevono la paga in denari."],
["Cos’è un’Arte?","Una corporazione di chi fa lo stesso mestiere: ci sono le Arti dei muratori, dei fabbri, dei lanaioli, dei notai. Garantiscono la qualità, stabiliscono regole e prezzi e proteggono i membri. Un ragazzo comincia come garzone, poi diventa lavorante e infine maestro, se supera la prova e ha l’appoggio dell’Arte."],
["Come si vive in città?","Case di mattoni e pietra, strette e alte, con la bottega al pianterreno e la famiglia sopra. Le vie sono strette e un po’ sporche, ma ci sono fontane e il Comune fa leggi su rifiuti e acque. Le campane suonano per tutto: le ore, le assemblee, il coprifuoco. Quando c’è una festa, la città intera si riversa in piazza."],
["Dove vado dopo?","Verso est, in Umbria: ad Assisi ti aspetta Francesco, quello che chiamano il Poverello. Da giovane ha rimesso pietra su pietra a una chiesetta in rovina, un po’ come un mio collega. Cerca la chiesa di San Damiano, fuori dalle mura."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati: una chiesa non si regge su una pietra sola, ma su mille che si sorreggono a vicenda. Se ripassi, ti faccio salire sul ponteggio più alto: la vista è quella dei piccioni. Pax, salus, fortuna: pace, salute e buona sorte!"]
],
me_francesco:[
["Chi sei e che fai?","Francesco d’Assisi, nato qui intorno al 1181 o 1182 in una famiglia di mercanti ricchi. Da giovane volevo diventare cavaliere e fare festa tutta la notte; poi la guerra contro Perugia, la prigionia e una malattia mi hanno cambiato i pensieri. Adesso vado per le strade a predicare e a servire, senza niente in tasca."],
["Cos’è successo a San Damiano?","Pregando qui davanti al crocifisso mi è parso di sentire che dovevo \"riparare la mia casa\". All’inizio l’ho preso alla lettera: ho rimesso pietra su pietra a questa chiesetta. Poi ho capito che si parlava di qualcosa di più grande. Intorno al 1206 ho restituito a mio padre i miei vestiti e i miei beni davanti al vescovo: da allora la mia ricchezza è la povertà."],
["Cosa fate voi frati?","Viviamo in povertà, lavoriamo con le mani quando possiamo e chiediamo l’elemosina solo quando serve; predichiamo nella lingua di tutti i giorni, perché la gente ci capisca. Ci chiamiamo frati minori, cioè i più piccoli. Intorno al 1209 il papa Innocenzo III ha approvato a voce la nostra regola, e nel 1223 Onorio III l’ha confermata con un documento."],
["Chi è Chiara?","Chiara d’Assisi è una giovane nobile che mi ha ascoltato predicare e ha scelto la stessa strada: intorno al 1211 lascia la casa e a San Damiano fonda con altre donne le Povere Dame, che un giorno chiameranno clarisse. Vivono in preghiera e in povertà, con più coraggio di molti uomini che conosco."],
["Come vi vestite e cosa mangiate?","Tonaca grezza, cordone, sandali o niente. Mangiamo quello che ci danno: pane, minestra, frutta, qualche pesce; l’elemosina arriva in natura più che in denaro. Quando c’è da mangiare si ringrazia, e quando non c’è si ringrazia lo stesso: è un esercizio."],
["Come ti vedono le persone?","Qualcuno mi chiama pazzo, qualcuno santo, qualcuno tutti e due. Mio padre mi ha preso per matto, i ricchi mi guardano storto, i poveri mi seguono. A volte, ammetto, gli uccelli mi ascoltano più dei vescovi: si dice che una volta ho predicato anche a loro."],
["Cos’è il Natale di Greccio?","Nel Natale del 1223, a Greccio, ho voluto far vedere la nascita di Gesù: una mangiatoia con il fieno, un bue e un asino, e la gente che arriva con le torce. Da allora, dicono, in tante case si fa il presepe. Non pensavo che da un po’ di fieno nascesse una tradizione."],
["Cos’è il Cantico di frate Sole?","Una lode in volgare umbro, la lingua nostra di tutti i giorni, con cui ringrazio il Signore per le sue creature: il sole, la luna, le stelle, il vento, l’acqua, il fuoco, la terra, e perfino la morte, che chiamo sorella. Lo compongo negli ultimi anni, malato e quasi cieco: è la poesia più lieta che potessi fare."],
["Cosa pensi degli animali e della natura?","Che sono fratelli e sorelle: il sole, il lupo, gli uccelli, l’acqua, tutto ci ricorda chi ci ha fatti. Si racconta che a Gubbio ho parlato a un lupo che spaventava la città e che da allora il lupo ha smesso di far danni; ma è una storia che ho sentito raccontare meglio di come la ricordo io."],
["Sei stato lontano da Assisi?","Sì: nel 1219, durante la Quinta Crociata, sono andato in Egitto e ho incontrato il sultano al-Kamil, sperando di parlare di pace invece che di spade. Mi ha accolto con rispetto e sono tornato senza che cambiasse molto, ma l’incontro non è stato inutile. Il mondo è fatto di persone, più che di bandiere."],
["Dove vado dopo?","Scendi nella valle e prendi la strada del nord-ovest: a Firenze c’è un poeta, Dante, che sta mettendo in versi tutto il mondo. Io non lo incontrerò mai, perché non sarà ancora nato quando morirò, ma il tempo, qui, fa strani scherzi."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati: quando non sai cosa fare, comincia dalle cose piccole, e le grandi arriveranno da sole. Dicono che morirò alla Porziuncola il 3 ottobre 1226, sulla nuda terra, e che fra due anni mi faranno santo: io so solo che oggi il sole è bello. Il Signore ti dia pace: pax, salus, fortuna!"]
],
me_dante:[
["Chi sei e che fai?","Dante Alighieri, fiorentino, nato nella primavera del 1265. Scrivo versi, studio filosofia e teologia, ho combattuto a cavallo a Campaldino nel 1289 e faccio politica: a Firenze, per farla, bisogna essere iscritti a un’Arte, e io sono fra i medici e gli speziali. Per ora mi chiamano soprattutto poeta."],
["Chi è Beatrice?","Una fiorentina che io chiamo Beatrice e che, secondo la tradizione, era Bice Portinari: l’ho vista da ragazzo e il suo saluto mi ha cambiato la vita. È morta nel 1290; il dolore mi ha spinto a scrivere la Vita nuova, un libro in cui racconto il mio amore in versi e in prosa."],
["Cos’è il volgare?","La lingua di tutti i giorni, quella che si parla in casa e in piazza, diversa dal latino. Molti dotti dicono che serve solo per le cose basse; io penso che possa dire cose altissime. Anche Francesco l’ha usato per il suo Cantico, e io ci scriverò sopra un trattato, il De vulgari eloquentia, in latino: ironia della sorte."],
["Com’è governata Firenze?","È un Comune: il potere è nelle mani dei cittadini iscritti alle Arti, e il governo, i Priori, resta in carica solo due mesi, perché nessuno si affezioni troppo al comando. Il Palazzo dei Priori, che cominciano a costruire nel 1299, sarà una fortezza con una torre: i fiorentini non si fidano di nessuno, nemmeno di sé stessi."],
["Cosa sono guelfi e ghibellini?","Due partiti: i guelfi sostengono il papa e l’autonomia dei Comuni, i ghibellini l’imperatore. A Firenze vincono i guelfi, ma poi si dividono in Bianchi e Neri, e le torri diventano fortezze di fazione. Io sto con i Bianchi. Le liti fra famiglie sono tante, e una cena può finire con la spada."],
["Come finisce?","Nel 1301 vado a Roma come ambasciatore dal papa Bonifacio VIII; mentre sono via, i Neri prendono il potere. Nel 1302 mi condannano all’esilio e, se tornassi, a morte: la mia casa viene confiscata. Da allora vagherò di corte in corte per l’Italia, e non rivedrò più Firenze. Morirò a Ravenna, nel settembre del 1321."],
["Cos’è la Commedia?","Un lungo poema in volgare, in terzine, in cui un uomo, che sono io, attraversa Inferno, Purgatorio e Paradiso. Il viaggio è ambientato nella Pasqua di quest’anno, il 1300; io lo scriverò più tardi, a partire dal 1308 circa, nell’esilio. Io la chiamo Commedia: l’aggettivo \"divina\" lo aggiungeranno altri, dopo di me."],
["Com’è Firenze?","Una città piena di vita e di rumore: botteghe, banchi, torri, cantieri. Il Battistero di San Giovanni, dove sono stato battezzato, è l’edificio che amo di più; la nuova cattedrale al posto di Santa Reparata, cominciata nel 1296, è ancora un bosco di ponteggi. Chi la vedrà finita? Non certo io."],
["Cos’è il fiorino?","Una moneta d’oro puro che Firenze conia dal 1252, con un giglio da una parte e San Giovanni Battista dall’altra. Vale in tutta Europa e fa di noi mercanti e banchieri i più ricchi d’Italia. Pagare in fiorini significa avere fiducia. Io, che di avidità ho molto da dire, non sono mai stato ricco."],
["Cosa si mangia a Firenze?","Una sera in famiglia: zuppa di legumi e verdure, pane, un po’ di formaggio, olive; la domenica magari un pollo; nei giorni di magro il pesce d’Arno o quello salato. Il vino non manca mai. I ricchi mangiano carne arrosto e spezie, e a volte li si sente da lontano."],
["Dove vado dopo?","Prendi la strada verso sud, la Via Francigena, e cerca Berta, che tiene una locanda vicino a un ponte: ha ascoltato le storie di ogni viaggiatore d’Europa e le ricorda tutte, comprese quelle che non dovrebbe."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati che le parole ben scelte sono come ponti: reggono per secoli. Se ripassi, ti racconto un viaggio che comincia in un bosco da cui non si vede l’uscita, ma per quello dovrai aspettare il poema. Pax, salus, fortuna: pace, salute e buona sorte!"]
],
me_berta:[
["Chi sei e che fai?","Berta, sessantadue anni, ostessa. Cucino, pulisco, faccio i letti e parlo: la mia locanda ha dodici letti, una stalla e tante storie. Non so leggere, ma so ascoltare, e ho imparato più dai viandanti che da qualsiasi libro."],
["Cos’è la Via Francigena?","La strada che dalla Francia e dall’Inghilterra porta a Roma, passando di qui. Nel 990 l’arcivescovo Sigerico di Canterbury, tornando da Roma, annotò le sue 79 tappe, una al giorno, e da allora quel cammino è il più usato dai pellegrini. Io, poveretta, ho annotato solo i conti, ma anche quelli, a modo loro, sono un diario."],
["Chi sono i pellegrini?","Persone che camminano per devozione: per ottenere un perdono, sciogliere un voto, fare penitenza. Chi va a Roma si chiama romeo, chi va in Terrasanta palmiere, chi va a Santiago di Compostela, in Spagna, pellegrino. Lo spiega meglio di me quel poeta fiorentino, Dante: l’ha scritto lui, e queste cose le sa."],
["Come si riconosce un pellegrino?","Dal bordone, il lungo bastone, dalla bisaccia e dalla borraccia, e da un segno: la conchiglia per Santiago, la palma per la Terrasanta, le chiavi di San Pietro per Roma. Prima di partire riceve una benedizione, e a volte una lettera di raccomandazione. Chi cammina così ha diritto a un po’ d’aiuto."],
["E il Giubileo del 1300?","Quando ero bambina il papa Bonifacio VIII proclamò il primo Giubileo: chi visitava le basiliche di Roma otteneva il perdono dei peccati. La strada si riempì di gente per mesi, e mio padre dovette comprare tre botti in più. Ricordo ancora il rumore di mille passi: sembrava un fiume."],
["Come si viaggia?","A piedi, per lo più: venti chilometri al giorno sono una buona tappa; i ricchi vanno a cavallo, i mercanti con muli e carri. Si parte all’alba, ci si ferma a mezzogiorno per mangiare e si arriva prima del buio: di notte la strada è pericolosa, per i lupi e per i briganti. Ci si mette in gruppo, per sicurezza e per compagnia."],
["Cosa si mangia e si beve in locanda?","Minestra di legumi con il pane, formaggio, uova, carne salata, pesce secco, frutta; vino a bicchieri, e acqua di pozzo per chi non ha soldi. Il pane è scuro e duro, e si inzuppa nella minestra. Chi paga bene riceve un pezzo di maiale, chi paga male la zuppa."],
["Come funzionano monete e pedaggi?","Ci sono monete di ogni città: fiorini d’oro, ducati di Venezia, denari d’argento, e il cambiavalute ti aiuta a convertirle. Sul ponte si paga un piccolo pedaggio, ma chi è povero passa per amor di Dio. I ponti sono preziosi, e costruirli o ripararli è considerata un’opera buona."],
["Cosa è successo nel 1348?","Quell’anno arriva la peste nera, dal mare, con le navi genovesi: comincia in Sicilia e sale lungo tutta l’Italia. Ho perso mio marito e due figli in pochi mesi. Dicono che in Europa sia morto da un terzo a metà della gente: io so solo che, dopo, la strada rimase vuota per molto tempo e la locanda silenziosa. Poi, piano piano, i viaggiatori sono tornati."],
["Com’è cambiato il mondo dopo?","C’era meno gente a lavorare: chi era rimasto chiedeva paghe più alte, molte terre sono rimaste incolte e tanti contadini hanno lasciato i campi per le città. È stata una tragedia, ma ha cambiato il modo di vivere e di lavorare. E dopo la peste, dicono, si pregava con più fervore."],
["Dove vado dopo?","Scendi fino al mare, a est: Venezia ti aspetta, con le sue galee e le sue stelle. Là c’è Marco Polo, uno che ha viaggiato più di tutti i miei clienti messi insieme. Digli che Berta, quella del ponte, gli manda un saluto e una minestra."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e che la strada ti sia leggera e il letto tenero. Se ripassi, una scodella ti spetta sempre, anche se sei senza un soldo. Pax, salus, fortuna: pace, salute e buona sorte!"]
],
me_marco:[
["Chi sei e che fai?","Marco, figlio di Niccolò Polo, mercante veneziano, nato nel 1254. La mia famiglia fa commercio con l’Oriente, e io ho avuto la fortuna di vedere posti che non stanno nemmeno sulle mappe. Ora vivo a Venezia e mi chiamano \"Milione\": c’è chi dice da Emilione, un soprannome di famiglia, e chi dice perché racconto un milione di storie."],
["Perché sei partito?","Nel 1271, a diciassette anni, sono partito da Venezia con mio padre Niccolò e mio zio Matteo, che erano già stati alla corte del Gran Khan e avevano portato una sua richiesta al papa. Abbiamo attraversato il Medio Oriente, la Persia, le montagne dell’Asia centrale e il deserto, fino alla Cina: circa tre anni e mezzo di viaggio."],
["Chi è il Gran Khan?","Kublai, nipote di Gengis Khan e imperatore dei Mongoli, che regna anche sulla Cina. Mi ha preso a servizio e mi ha mandato in varie province a riferire su città, usi e tasse. Sono rimasto circa diciassette anni: era un uomo curioso e mi ascoltava volentieri, perché del mondo oltre le sue terre sapeva poco."],
["Cosa hai visto di più strano?","La moneta di carta, per esempio: in Cina il Khan fa stampare banconote e tutti le accettano. Poi le \"pietre nere\" che bruciano, cioè il carbone; i servizi di posta con stazioni e cavalli ogni pochi chilometri; città enormi con canali, più grandi di Venezia. Quando l’ho raccontato, molti mi hanno dato del bugiardo."],
["Come sei tornato?","Dopo molti anni il Khan mi lascia partire, a una condizione: accompagnare una giovane principessa mongola che deve sposare il sovrano di Persia. Il viaggio è per mare, dal sud della Cina attraverso l’Oceano Indiano fino al golfo Persico. Nel 1295 sono a Venezia, dopo ventiquattro anni."],
["Come nasce il Milione?","Nel 1298 combatto contro Genova, e a Curzola i veneziani perdono: mi fanno prigioniero. In carcere conosco Rustichello da Pisa, scrittore di romanzi cavallereschi, e gli detto i miei ricordi. Lui li scrive in francese, la lingua di moda per i racconti: il libro si chiama \"La descrizione del mondo\", ma tutti lo chiamano \"Il Milione\". Mi liberano nel 1299."],
["Com’è fatta Venezia?","Una città costruita sul fango: pali di legno piantati nel fondale, e sopra mattoni e pietra. Niente strade ma canali, e barche per ogni cosa. La governano un doge e un grande consiglio di famiglie nobili, e vive di commercio, di sale e di navi."],
["Cosa vendono i veneziani?","Il mondo: spezie come pepe e cannella, seta, cotone, legname, ferro, sale, vetro. Gli affari si fanno a Rialto, con monete e contratti scritti: dal 1284 Venezia conia il ducato d’oro, accettato in tutto il Mediterraneo. Il vetro si soffia a Murano dal 1291, perché le fornaci in città mettevano a rischio le case di legno."],
["Cos’è l’Arsenale?","Il grande cantiere di Stato, fondato nel 1104: circondato da mura, con carpentieri, calafati, fabbri e cordai che costruiscono e riparano le galee. È uno dei luoghi più organizzati d’Europa: ogni uomo ha il suo lavoro. Quando parte una flotta, l’odore di pece si sente in tutta la città."],
["Come si naviga?","Con vele latine e con i remi, di solito senza allontanarsi troppo dalla costa. Si usa la bussola, che in Europa si conosce da circa un secolo, e da qualche anno si disegnano carte nautiche dei porti e delle coste, i portolani. Di notte si guarda la Stella Polare. Un buon pilota conta le ore, i venti e i giorni, e prega un po’."],
["Dove vado dopo?","Verso le stelle, Pierpaolo: la strada continua da qui verso est, a Costantinopoli, in Persia, in Asia e oltre. Guarda il mare e il cielo insieme: la rotta comincia dove finisce la terra."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati che il mondo è più grande di come sembra e più vicino di come si teme. Quando senti una storia che pare impossibile, chiediti se non sia solo una storia che nessuno ha ancora verificato. Se ripassi, ti racconto di un’altra città. Pax, salus, fortuna, e che il vento ti sia favorevole!"]
]
};
Object.assign(TOPX,TOPX_ME);
})();
