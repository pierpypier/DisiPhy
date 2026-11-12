/* ---------- SEICENTO · Dai campi lombardi alle stelle di Venezia (pianura lombarda, Cremona, Firenze, Roma, Napoli, la strada, Padova, Venezia) ---------- */
/* Un'intera giornata da sinistra a destra, e un tempo che si piega (dal Giubileo del 1600 a quello del 1700: Stradivari, Galileo, Bernini, Monteverdi, le due grandi pesti):
   alba nella nebbia di una cascina lombarda, primo mattino a Cremona, mattina a Firenze, tarda mattina a Roma barocca, mezzogiorno a Napoli, primo pomeriggio sulla strada,
   pomeriggio a Padova, tramonto e notte a Venezia. In fondo, sotto le stelle, c'è il cannocchiale puntato verso Giove: lì il motore mette il varco.
   Testi, tappe e dialoghi vengono da seicento.txt (definitivi, usati senza riscriverli; solo l'apostrofo è reso tipografico). Gli oggetti stanno in elementi.js (nomi che iniziano per "sc").
   Il tono per i temi dolorosi (peste, guerre, rivolta del 1647, processo a Galileo) è sobrio e rispettoso; tradizioni e questioni discusse sono presentate con "si dice" o "secondo la tradizione", come nella scheda. */
(function(){
const GT=372,W1=24000;
const P=PR._mv,S=PR._sc,A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {fumo,fuoco,pe,monaco,contad,donna,mercante,arm,pell,maiale,corvo,barca,matt,muro,tetto,merl,fin,campanile}=P;
const F=PR._fe,G=PR._gr,{ln,volo,cane,asino,pecora,cavallo,gatto}=F;
const {cip,pino,ulv,bue,gallina}=G;
const nf=P.nf,{viol}=S;
const md=(i,n)=>((i%n)+n)%n;
const Z=[0,2800,5600,8400,11200,14000,16800,19600,24000];   /* inizio di ognuna delle 8 zone */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
/* ---- cielo: alba argentea nella nebbia, primo mattino freddo e limpido, mattina chiara, tarda mattina bianca, mezzogiorno abbagliante, primo pomeriggio polveroso, pomeriggio dorato, tramonto rosso e viola, notte stellata ---- */
const SKY=[[0,['#9aa4bc','#d4d8e2','#ece6e0']],[1400,['#7ab0e8','#c8e0f0','#f4f0e6']],[2800,['#6aa8ea','#bcdcf2','#f2f2ea']],[5600,['#5aa4ec','#a4d4f6','#f4f2e0']],[8400,['#6aa8e8','#c4e0f4','#fafaf4']],[11200,['#2a86e0','#6cbcf0','#e8f4fa']],[14000,['#5a8ed0','#b4cce0','#f6e8c4']],[16800,['#5a86c8','#d8c8b0','#ffdca0']],[19600,['#7a5aa0','#e8785a','#ffbe70']],[20800,['#4a3a80','#c8586a','#f8a060']],[22000,['#0e1240','#1c2260','#3a3470']],[24000,['#080c30','#141a58','#2a2a66']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,6*s);el(g,c,x-18*s,y+2*s,22*s,5*s);el(g,c,x+20*s,y+2*s,24*s,5*s)};
/* ---- livello 0: cielo, sole, luna sottile, stelle che girano attorno alla Polare, nuvole, nebbia dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-20000)/1800,0,1);
 if(nt>0){const an=t*.012,ca=Math.cos(an),sa=Math.sin(an);for(let i=0;i<170;i++){const bx=hr(i*3)*620-70,by=hr(i*7+1)*420-60,dx=bx-350,dy=by-70,sx=350+dx*ca-dy*sa,sy=70+dx*sa+dy*ca;if(sx<0||sx>480||sy<0||sy>GT)continue;const tw=.5+.5*Math.sin(t*2+i*1.7);dot(g,'rgba(255,252,235,'+(nt*(.35+.55*tw)*(sy<GT-60?1:.35))+')',sx,sy,.7+hr(i)*1.3)}}
 const u=cl(xs/19800,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*255,sf=cl((20900-xs)/900,0,1);
 if(sf>.01){const low=1-Math.sin(u*Math.PI);g.globalAlpha=sf;const sg=g.createRadialGradient(sx,sy,6,sx,sy,240);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.3,'rgba(255,'+Math.round(210-low*70)+',140,.32)');sg.addColorStop(1,'rgba(255,200,120,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT+4);
  dot(g,'rgb(255,'+Math.round(250-low*70)+','+Math.round(215-low*110)+')',sx,sy,19);g.globalAlpha=1}
 const mu=cl((xs-20800)/1500,0,1);if(mu>0){const mx=380-mu*40,my=120-mu*24;dot(g,'rgba(255,248,215,'+.1*mu+')',mx,my,30);dot(g,'rgba(246,240,214,'+mu+')',mx,my,12);const sp=skyAt(xs);dot(g,sp[0],mx+5,my-2,11*mu+1)}
 const cc=xs<1400?'rgba(232,230,238,.55)':xs<14000?'rgba(255,255,255,.5)':xs<19600?'rgba(255,236,190,.55)':xs<21500?'rgba(255,170,130,.5)':'rgba(120,110,170,.16)';
 each(o-((t*3)%340)*.02,340,1,(x,i,r)=>{if(r>.4)return;nube(g,x+r*100,40+r*60,.9+r*.7,cc)});
 const fo=cl(1-xs/2800,0,1)*.42;if(fo>.01){g.fillStyle='rgba(206,212,224,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-19400)/1400,0,1)*cl((21800-xs)/900,0,1)*.24;if(wg>.01){g.fillStyle='rgba(255,90,90,'+wg+')';g.fillRect(0,0,480,GT+4)}
 const gd=cl((xs-13600)/1200,0,1)*cl((19400-xs)/1200,0,1)*.1;if(gd>.01){g.fillStyle='rgba(255,208,120,'+gd+')';g.fillRect(0,0,480,GT+4)}}

/* ---- livello 1: orizzonte lontano per zona: pianura e Alpi, Cremona e il Torrazzo, colline toscane e Firenze, Roma e San Pietro, golfo di Napoli e Vesuvio, la strada con Bologna, Padova e i Colli Euganei, la laguna ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(mixs(c,'#c4cce0',.25),'#262a5e',night*.72);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const mont=(sx,w,h,c,seed,snow)=>{const path=()=>{g.beginPath();g.moveTo(sx-w,hz+34);for(let q=0;q<=36;q++){const u=q/36,px=sx-w+u*2*w,hh=h*(Math.sin(u*Math.PI))*(.7+.3*Math.abs(Math.sin(u*7+seed)))+4*Math.sin(u*29+seed);g.lineTo(px,hz+14-hh)}g.lineTo(sx+w,hz+34);g.closePath()};g.fillStyle=dim(c);path();g.fill();if(snow){g.save();path();g.clip();g.fillStyle='rgba(255,255,255,'+(.85-night*.5)+')';g.fillRect(sx-w,hz-h-20,2*w,h+60);g.translate(0,h*snow*.4);g.fillStyle=dim(c);path();g.fill();g.restore()}};
 const lights=(sx,x0,x1,n)=>{if(night>.2)for(let q=0;q<n;q++){const tx=sx+x0+(x1-x0)*q/(n-1);glow(g,tx,hz+8-hr(q)*10,12,'255,180,80',.6*Math.min(1,night+.1));dot(g,'rgba(255,220,140,.95)',tx,hz+8-hr(q)*10,1.3)}};
 const casette=(sx,x0,x1,hh,cols)=>{for(let q=0;q<(x1-x0)/14;q++){const bx=sx+x0+q*14,h2=6+hr(q*3)*hh;rect(g,dim((cols||['#e8dcc0','#d8c8a4','#c8a888','#e4d4b0'])[q%(cols||[0,0,0,0]).length]),bx,hz+16-h2,11,h2+8);poly(g,dim('#b4583a'),[[bx-1,hz+16-h2],[bx+5.5,hz+11-h2],[bx+12,hz+16-h2]])}};
 const cipF=(sx,x0,n,sp,hh)=>{for(let q=0;q<n;q++)el(g,dim('#3a5a34'),sx+x0+q*sp,hz+12-(hh||18)/2,2.6,(hh||18)/2)};
 const dome=(cx,r,c,lant)=>{g.fillStyle=dim(c);g.beginPath();g.arc(cx,hz+14,r,Math.PI,0);g.fill();rect(g,dim(c),cx-r,hz+10,2*r,6);if(lant){rect(g,dim(c),cx-2.4,hz+14-r-9,4.8,9);dot(g,dim(c),cx,hz+14-r-10,3.2);ln(g,dim('#e0b84a'),1.2,[cx,hz+14-r-13,cx,hz+14-r-19])}};
 const tower=(cx,w,h,c,roof)=>{rect(g,dim(c),cx-w/2,hz+14-h,w,h);if(roof)poly(g,dim(roof),[[cx-w/2-1,hz+14-h],[cx,hz+14-h-w*1.3],[cx+w/2+1,hz+14-h]]);else merl(g,cx-w/2-1,hz+14-h,w+2,dim(c),3)};
 /* zona 1: la pianura lombarda con i filari di gelsi, i canali nella nebbia e, in fondo, le Alpi bianche */
 const a1=env(1400,4600);if(a1>.02){g.globalAlpha=a1;const sx=fx(1400);mont(sx+40,500,110,'#9aa8d0',1.3,.3);mont(sx+330,300,90,'#a8b4d4',4.1,.4);rect(g,dim('#a8b878'),sx-560,hz+16,1120,16);
  for(let q=0;q<5;q++)ln(g,dim('#a0bccc'),1.6,[sx-540+q*220,hz+20+q%3*3,sx-440+q*220,hz+22+q%3*3]);for(let q=0;q<30;q++)el(g,dim('#6a8a4a'),sx-540+q*36,hz+12,6,8);
  for(const cx of[-120,200])tower(sx+cx,8,40,'#c8bca0','#a8503a');casette(sx,-80,40,10);lights(sx,-100,60,4);for(let q=0;q<4;q++)el(g,'rgba(222,228,238,'+(.4-q*.08)+')',sx-100+q*80,hz+14-q*3,420,10);g.globalAlpha=1}
 /* zona 2: Cremona sul Po, il Torrazzo, il Duomo e le case di mattoni */
 const a2=env(4200,3600);if(a2>.02){g.globalAlpha=a2;const sx=fx(4200);mont(sx-200,420,70,'#9ab0b8',2.2);ln(g,dim('#8ab0c0'),4,[sx-320,hz+22,sx-100,hz+20,sx+80,hz+24,sx+320,hz+21]);
  casette(sx,-180,240,14,['#c8825a','#d8a078','#b8704e','#e0b890']);tower(sx+10,12,92,'#c8825a','#c8c0a8');dot(g,dim('#e8d8a0'),sx+10,hz-30,4);tower(sx-60,10,40,'#d8cfae','#a8503a');tower(sx+70,10,30,'#c8825a','#a8503a');
  rect(g,dim('#e0d4b4'),sx-44,hz-8,46,22);poly(g,dim('#e0d4b4'),[[sx-44,hz-8],[sx-21,hz-22],[sx+2,hz-8]]);lights(sx,-170,230,8);g.globalAlpha=1}
 /* zona 3: le colline toscane con i cipressi, la cupola di Firenze e le colline di Arcetri */
 const a3=env(7000,3600);if(a3>.02){g.globalAlpha=a3;const sx=fx(7000);mont(sx-60,560,76,'#a8a468',3.1);mont(sx+330,300,90,'#98a070',6.2);cipF(sx,-400,16,22,22);cipF(sx,160,6,12,22);
  casette(sx,-150,190,14,['#e4d4b0','#d8c4a0','#e8d0a8','#c8b090']);poly(g,dim('#c8603c'),[[sx-18,hz+10],[sx-14,hz-14],[sx,hz-28],[sx+14,hz-14],[sx+18,hz+10]]);rect(g,dim('#e8e0d0'),sx-2,hz-38,4,10);dot(g,dim('#e0b84a'),sx,hz-40,2);
  rect(g,dim('#e8e0d0'),sx-52,hz-30,10,44);rect(g,dim('#c8a888'),sx+54,hz-22,9,36);merl(g,sx+53,hz-22,11,dim('#c8a888'),2);lights(sx,-150,190,9);g.globalAlpha=1}
 /* zona 4: i tetti di Roma, la cupola di San Pietro, i pini */
 const a4=env(9800,3600);if(a4>.02){g.globalAlpha=a4;const sx=fx(9800);mont(sx-60,520,50,'#b0a478',5.2);mont(sx+350,300,70,'#a8a070',2.3);casette(sx,-250,230,16,['#e8dcc0','#e0c8a4','#d8b898','#ecdcc0']);
  dome(sx+20,38,'#cfc8b4',1);rect(g,dim('#d8d0bc'),sx-70,hz-2,180,16);for(let q=0;q<5;q++)tower(sx-100+q*70,6,22+q%3*10,'#d8cfb4','#a8503a');
  for(let q=0;q<5;q++){rect(g,dim('#5a4a30'),sx+160+q*18,hz-10,2,24);el(g,dim('#3a6a3a'),sx+161+q*18,hz-12,9,5)}lights(sx,-250,230,10);g.globalAlpha=1}
 /* zona 5: la grande curva del golfo di Napoli con Capri, il Vesuvio che fuma e la città sulla collina */
 const a5=env(12600,3600);if(a5>.02){g.globalAlpha=a5;const sx=fx(12600);const wg=g.createLinearGradient(0,hz+8,0,hz+34);wg.addColorStop(0,dim('#4a9ae0'));wg.addColorStop(1,dim('#2a6ab8'));g.fillStyle=wg;g.fillRect(0,hz+8,480,26);
  mont(sx+60,330,60,'#7a6a78',3.3);poly(g,dim('#6a5a68'),[[sx-90,hz+16],[sx-30,hz-60],[sx-18,hz-64],[sx-6,hz-60],[sx+54,hz+16]]);poly(g,dim('#4a3a48'),[[sx-30,hz-60],[sx-18,hz-64],[sx-6,hz-60],[sx-18,hz-52]]);
  for(let q=0;q<6;q++){const u=(t*.12+q/6)%1;el(g,'rgba(90,82,92,'+(.5*(1-u))+')',sx-18+u*40,hz-66-u*50,6+u*13,5+u*7)}
  mont(sx-440,120,40,'#8a9ab0',1.1);mont(sx-340,60,30,'#8a9ab0',2.7);casette(sx,100,360,12,['#f0e8d4','#e8d8bc','#f4ecd8','#e0c8a8']);cipF(sx,-250,5,12,18);
  rect(g,dim('#d8cfae'),sx+130,hz-12,20,24);merl(g,sx+129,hz-12,22,dim('#d8cfae'),3);rect(g,dim('#c8b894'),sx+200,hz-24,34,38);merl(g,sx+199,hz-24,36,dim('#c8b894'),4);
  for(let q=0;q<5;q++)poly(g,dim('#f4f0e4'),[[sx-200+q*70,hz+24],[sx-200+q*70+6,hz+14],[sx-200+q*70+10,hz+24]]);lights(sx,100,360,9);g.globalAlpha=1}
 /* zona 6: l'Appennino azzurro da una parte, la pianura dall'altra e, in lontananza, le torri e i portici di Bologna */
 const a6=env(15400,3600);if(a6>.02){g.globalAlpha=a6;const sx=fx(15400);mont(sx-260,420,110,'#8a9cc4',6.1);mont(sx-80,300,70,'#9aaac8',2.9);rect(g,dim('#b8b878'),sx+100,hz+16,500,16);for(let q=0;q<5;q++)ln(g,dim('#98a868'),1.4,[sx+120+q*90,hz+20,sx+170+q*90,hz+20]);
  casette(sx,180,330,8,['#d8a888','#c89878','#e0b898','#d0a080']);tower(sx+230,9,62,'#c8825a');merl(g,sx+224,hz-48,12,dim('#c8825a'),2);tower(sx+270,8,40,'#b8704e');merl(g,sx+266,hz-26,10,dim('#b8704e'),2);cipF(sx,-20,8,16,18);lights(sx,180,330,5);g.globalAlpha=1}
 /* zona 7: le mura e le cupole di Padova, la basilica del Santo, i Colli Euganei */
 const a7=env(18200,3600);if(a7>.02){g.globalAlpha=a7;const sx=fx(18200);mont(sx-300,200,56,'#8aa8b0',1.7);mont(sx-60,150,50,'#8aa0ac',4.6);mont(sx+420,260,60,'#98a8b8',3.6);
  rect(g,dim('#c8a888'),sx-120,hz+2,320,14);merl(g,sx-120,hz+2,320,dim('#c8a888'),20);casette(sx,-110,-10,16,['#d8b898','#e0c4a0']);casette(sx,170,260,16,['#d8b898','#e0c4a0']);
  for(const [cx,r] of [[0,20],[44,14],[78,14],[110,14],[-44,14]])dome(sx+cx,r,'#d0c8a8',cx==0?1:0);tower(sx+28,5,60,'#d8c8a8');tower(sx-70,5,50,'#c8b898');lights(sx,-110,260,9);g.globalAlpha=1}
 /* zona 8: la laguna piatta con le isole, i campanili, le cupole di San Marco, la cupola bianca della Salute e il mare aperto */
 const a8=env(21800,3600);if(a8>.02){g.globalAlpha=a8;const sx=fx(21800);const wg=g.createLinearGradient(0,hz+8,0,hz+34);wg.addColorStop(0,dim('#a8789a'));wg.addColorStop(1,dim('#5a6a9a'));g.fillStyle=wg;g.fillRect(0,hz+8,480,26);
  for(let q=0;q<14;q++)el(g,'rgba(255,200,150,'+(.35*(1-night*.7))+')',sx-300+q*60+Math.sin(t+q)*4,hz+14+q%4*5,22,1.3);
  for(const [ix,iw] of [[-500,120],[-300,90],[260,150],[520,100]])el(g,dim('#7a8a6a'),sx+ix,hz+10,iw,6);
  for(const [cx,hh] of [[-380,50],[-180,38],[380,56],[600,44]]){rect(g,dim('#b8553a'),sx+cx-4,hz+10-hh,8,hh);poly(g,dim('#6a9a7a'),[[sx+cx-6,hz+10-hh],[sx+cx,hz-4-hh],[sx+cx+6,hz+10-hh]])}
  rect(g,dim('#e0d4b4'),sx-60,hz-4,120,16);for(let q=0;q<5;q++){g.fillStyle=dim('#d0c8a8');g.beginPath();g.arc(sx-48+q*24,hz-4,10,Math.PI,0);g.fill();ln(g,dim('#e0b84a'),1,[sx-48+q*24,hz-14,sx-48+q*24,hz-20])}
  rect(g,dim('#b8553a'),sx-100,hz-30,10,42);poly(g,dim('#6a9a7a'),[[sx-103,hz-30],[sx-95,hz-44],[sx-87,hz-30]]);
  dome(sx+140,20,'#f4f0e6',1);rect(g,dim('#e8e0d0'),sx+112,hz+4,56,10);for(let q=0;q<3;q++)ln(g,'rgba(120,110,100,.22)',1,[sx+140,hz-6,sx+130+q*10,hz+4]);
  for(let q=0;q<3;q++)for(let s=0;s<4;s++)el(g,'rgba(120,120,130,'+(.28-s*.05)+')',sx-460+q*30+s*3,hz-6-s*10,6+s*2,4);
  lights(sx,-100,220,10);g.globalAlpha=1}}

/* ---- livello 2: campi e gelsi, case di mattoni, palazzi di pietra, travertino, case alte e chiare, filari della strada, portici, laguna ---- */
const BRKM='#b8704e';
function layerMid(g,o,t){const cam=o/.2,hz=326,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const wx=cam+x+120,zz=zn(wx);A.setDK(nf(cam+x));
  const band=['#a8b070','#b88a6a','#b8a888','#c8b898','#c0b090','#b0a468','#b8906a','#6a7a9a'][zz-1];rect(g,dim(band),x,hz+6,121,GT+4-hz-6);
  if(zz==8){const wg=g.createLinearGradient(0,hz+6,0,GT+4);wg.addColorStop(0,dim('#5a6a9a'));wg.addColorStop(1,dim('#3a5a8a'));g.fillStyle=wg;g.fillRect(x,hz+6,121,GT-hz-2);el(g,'rgba(255,190,140,'+(.35*(1-night*.6))+')',x+60+Math.sin(t+i)*6,hz+24,30,1.4)}
  const tl=(w,hh,c)=>poly(g,dim(c||'#b4583a'),[[x+6,hz-hh],[x+10+w/2,hz-hh-14],[x+14+w,hz-hh]]);
  const house=(c,hh,ww,roof)=>{rect(g,dim(c),x+10,hz-hh,ww,hh+10);rect(g,'rgba(255,255,255,.14)',x+10,hz-hh,5,hh+10);rect(g,'rgba(0,0,0,.14)',x+10+ww-9,hz-hh,9,hh+10);tl(ww,hh,roof);rect(g,dim('#2a1c10'),x+10+ww*.4,hz-hh*.5,10,hh*.5+10);if(night>.2&&hr(i*7)>.4)rect(g,'rgba(255,214,140,.85)',x+10+ww*.7,hz-hh*.7,5,6)};
  const tall=(c,hh,ww)=>{rect(g,dim(c),x+8,hz+10-hh,ww,hh+14);rect(g,dim('#a89070'),x+6,hz+10-hh-3,ww+4,4);for(let q=0;q<Math.floor(hh/26);q++)for(let s=0;s<Math.floor(ww/28);s++)ar(g,hr(i*9+q*3+s)>.4&&night>.25?'rgba(255,200,110,.85)':dim('#2a1810'),x+14+s*28,hz+4-q*26,10,18)};
  if(zz==1){if(r>.8)cip(g,x+60,hz+10,60+r*30);else if(r>.5){for(let q=0;q<3;q++){rect(g,dim('#4a3a28'),x+20+q*36,hz-6,4,16);el(g,dim('#6a8a40'),x+22+q*36,hz-14,12,10)}}else if(r>.3){rect(g,dim('#d8c8a0'),x+8,hz-30,86,40);poly(g,dim('#a8503a'),[[x+2,hz-30],[x+50,hz-52],[x+98,hz-30]]);for(let q=0;q<4;q++)ar(g,dim('#2a1c10'),x+16+q*20,hz+10,10,24)}else{rect(g,dim('#d8d0b4'),x+10,hz-30,42,40);poly(g,dim('#a8503a'),[[x+6,hz-30],[x+31,hz-44],[x+56,hz-30]]);rect(g,dim('#d8d0b4'),x+54,hz-52,16,62);poly(g,dim('#a8503a'),[[x+52,hz-52],[x+62,hz-64],[x+72,hz-52]])}}
  else if(zz==2){if(r>.82)pino(g,x+60,hz+10,.7+r*.2,t);else{const hh=40+r*60,ww=r>.45?40:92;rect(g,dim(r>.4?'#c8704a':BRKM),x+6,hz-hh,ww,hh+10);rect(g,dim('#c8a888'),x+4,hz-hh-4,ww+4,5);for(let q=0;q<Math.floor(ww/24)+1;q++)ar(g,dim('#2a1810'),x+14+q*24,hz+10,12,24);if(night>.25&&r>.5)rect(g,'rgba(255,214,140,.85)',x+14,hz-hh+8,6,8)}}
  else if(zz==3){if(r>.8)cip(g,x+60,hz+10,76+r*30);else house(['#e8dfc4','#d8cfae','#e0d8bc'][md(i,3)],36+r*44,70,'#a8503a')}
  else if(zz==4){if(r>.82)pino(g,x+60,hz+10,.8,t);else{const hh=50+r*70,ww=r>.45?50:96;rect(g,dim('#e0d4b8'),x+6,hz-hh,ww,hh+10);rect(g,dim('#c8bc9c'),x+4,hz-hh-4,ww+6,5);for(let q=0;q<Math.floor(ww/26)+1;q++)ar(g,hr(i*9+q)>.4&&night>.25?'rgba(255,200,110,.85)':dim('#2a1c10'),x+12+q*26,hz+4,12,22)}}
  else if(zz==5){if(r>.9)ulv(g,x+60,hz+10,.7,t);else tall(['#e8c8a0','#d8a888','#e4d4a8','#c8a890'][md(i,4)],60+r*110,r>.5?84:56)}
  else if(zz==6){if(r>.6){for(let q=0;q<4;q++){rect(g,dim('#4a3a28'),x+10+q*28,hz-14,4,26);el(g,dim('#5a7a3a'),x+12+q*28,hz-24,12,14)}}else if(r>.35)house(['#d8c8a0','#c8bc98'][md(i,2)],30+r*30,66,'#a8503a');else{for(let q=0;q<3;q++){ln(g,dim('#6a8a50'),3,[x+8+q*24,hz+10,x+8+q*24,hz-8]);el(g,dim('#5a8a3a'),x+8+q*24,hz-6,9,8)}}}
  else if(zz==7){if(r>.8)cip(g,x+60,hz+10,80);else{const hh=34+r*46;rect(g,dim(['#d8b898','#e0c4a0','#c8a888'][md(i,3)]),x+6,hz-hh,100,hh+10);for(let q=0;q<5;q++)ar(g,dim('#2a1c10'),x+10+q*20,hz+10,14,22);rect(g,dim('#b89870'),x+4,hz-hh-4,104,5);if(r>.5){tl(98,hh,'#a8503a')}}}
  else{if(r>.85)pino(g,x+60,hz+16,.7,t);else{const hh=44+r*60;rect(g,dim(['#a8503a','#c8885a','#b0583c','#d49a6a'][md(i,4)]),x+8,hz+10-hh,92,hh+14);rect(g,dim('#e8d8b0'),x+6,hz+10-hh,96,4);for(let q=0;q<Math.floor(hh/26);q++)for(let s=0;s<3;s++)ar(g,hr(i*9+q*3+s)>.4&&night>.25?'rgba(255,200,110,.85)':dim('#2a1810'),x+16+s*28,hz+4-q*26,10,18);for(let q=0;q<4;q++)rect(g,dim('#3a2a1c'),x+10+q*26,hz+22,4,18)}}})}

/* ---- suolo: terra battuta con solchi, mattoni di Cremona, lastricato fiorentino, selci e travertino romani, pietra lavica napoletana, strada di terra e ghiaia, mattoni padovani, fondamenta ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#8a7048','f'],[Z[1],Z[2],'#b8664a','b'],[Z[2],Z[3],'#c8b490','p'],[Z[3],Z[4],'#d4c8a8','r'],[Z[4],Z[5],'#5a5660','l'],[Z[5],Z[6],'#a8885a','t'],[Z[6],Z[7],'#b8704e','b'],[Z[7],Z[8],'#8a7a68','v']];
 rect(g,'#c8b88c',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0),zw=z[1]-z[0];g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const pz=(q,m)=>z[0]+((q*m)%zw)-cam;
  const slabs=(bw0,rows,rh,k1,k2,seed)=>{for(let r=0;r<rows;r++){const yy=gt+7+r*rh,bw=bw0+r*5,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*seed+r*7);rect(g,hh>.65?k1:hh>.3?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,rh-2);rect(g,k2,px+bw-2,yy,2,rh-2)}}};
  if(z[3]=='f'){for(let r=0;r<9;r++)rect(g,r%2?'rgba(60,40,10,.18)':'rgba(255,230,170,.08)',x0,gt+6+r*16,x1-x0,8);for(let q=0;q<16;q++){const yy=gt+16+q*8.4;ln(g,'rgba(50,30,10,.2)',1.4,[x0,yy,x1,yy+(q%3-1)*2])}for(let q=0;q<70;q++)dot(g,hr(q)>.5?'rgba(120,100,60,.4)':'rgba(255,240,200,.3)',pz(q,37),gt+14+hr(q*5)*130,1+hr(q)*1.4);for(let q=0;q<7;q++)el(g,'rgba(120,150,170,.4)',pz(q,331),gt+40+hr(q)*90,26,4);for(let q=0;q<8;q++)el(g,'rgba(80,110,50,.4)',pz(q,223),gt+30+hr(q+2)*100,18,3)}
  if(z[3]=='b'){for(let r=0;r<7;r++){const yy=gt+6+r*21,bw=34+r*5,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*31+r*7);rect(g,hh>.6?'rgba(255,220,180,.14)':hh>.25?'rgba(0,0,0,.08)':'rgba(60,10,0,.14)',px,yy,bw-2,19);rect(g,'rgba(50,20,10,.3)',px+bw-2,yy,2,19);rect(g,'rgba(50,20,10,.22)',px,yy+19,bw,2)}}}
  if(z[3]=='p'){slabs(90,5,28,'rgba(255,255,255,.2)','rgba(70,55,35,.26)',21);for(let q=0;q<40;q++)dot(g,'rgba(255,240,190,.28)',pz(q,23),gt+8+hr(q*5)*140,1+hr(q)*1.2)}
  if(z[3]=='r'){slabs(54,6,24,'rgba(255,255,255,.26)','rgba(80,70,50,.22)',19);for(let q=0;q<50;q++)dot(g,'rgba(255,250,235,.3)',pz(q,23),gt+8+hr(q*5)*140,1+hr(q)*1.2)}
  if(z[3]=='l'){slabs(46,6,24,'rgba(255,255,255,.07)','rgba(0,0,0,.34)',23);for(let q=0;q<60;q++)dot(g,hr(q)>.5?'rgba(210,200,200,.25)':'rgba(0,0,0,.25)',pz(q,29),gt+8+hr(q*5)*140,1+hr(q)*1.6)}
  if(z[3]=='t'){for(let r=0;r<7;r++)rect(g,r%2?'rgba(60,40,10,.16)':'rgba(255,230,170,.07)',x0,gt+8+r*20,x1-x0,10);for(let q=0;q<150;q++)dot(g,hr(q)>.5?'rgba(255,245,215,.4)':'rgba(70,50,20,.45)',pz(q,27),gt+6+hr(q*5)*144,1+hr(q)*1.7);for(let q=0;q<2;q++){ln(g,'rgba(50,30,10,.3)',3,[x0,gt+80+q*26,x1,gt+80+q*26+Math.sin(cam*.002+q)*3])}for(let q=0;q<7;q++)el(g,'rgba(100,110,60,.4)',pz(q,271),gt+26+hr(q)*110,22,3)}
  if(z[3]=='v'){const bw=44,s0=Math.floor((cam+x0)/bw)*bw;for(let r=0;r<6;r++){const yy=gt+6+r*24;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*37+r*5);rect(g,hh>.6?'rgba(255,255,255,.09)':hh>.25?'rgba(0,0,0,.08)':'rgba(30,20,10,.16)',px,yy,bw-2,22);rect(g,'rgba(30,20,10,.3)',px+bw-2,yy,2,22)}}for(let q=0;q<8;q++)el(g,'rgba(100,130,170,.3)',pz(q,311),gt+30+hr(q)*100,28,3)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1800,0,1);if(dw>.02)rect(g,'rgba(210,216,230,'+(.2*dw)+')',0,gt,480,150);
 const sg=cl((cam-19400)/900,0,1)*cl((21800-cam)/900,0,1);if(sg>.02)rect(g,'rgba(255,90,60,'+(.14*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- vita: corvi nei campi, rondini, falchi, gabbiani sul golfo e sulla laguna, bestie e passanti, pipistrelli di notte ---- */
function layerLife(g,o,t){const cam=o,xs=cam+240,hz=GT;
 const bird=(bx,by,s,w,c)=>{g.strokeStyle=c;g.lineWidth=s*1.9;g.beginPath();g.moveTo(bx-9*s,by+w);g.quadraticCurveTo(bx-4*s,by-4*s,bx,by);g.quadraticCurveTo(bx+4*s,by-4*s,bx+9*s,by+w);g.stroke()};
 const cv=cl((3200-xs)/600,0,1)*cl((xs+300)/500,0,1);if(cv>.05)for(let i=0;i<5;i++){const bx=((i*131+t*(26+i*4))%640)-80,by=70+hr(i*3)*120+Math.sin(t*1.6+i*2)*16,w=Math.sin(t*10+i)*3;g.globalAlpha=cv;bird(bx,by,1.1,w,'#1a1a26');g.globalAlpha=1}
 const rv=cl((xs-2800)/500,0,1)*cl((16800-xs)/600,0,1);if(rv>.05)for(let i=0;i<4;i++){const bx=((i*150+t*(40+i*5))%620)-70,by=100+hr(i*7)*120+Math.sin(t*3+i)*24,w=Math.sin(t*14+i)*3;g.globalAlpha=rv;bird(bx,by,.9,w,'#1a1a26');g.globalAlpha=1}
 const kv=cl((xs-8400)/500,0,1)*cl((11200-xs)/500,0,1);if(kv>.05)for(let i=0;i<4;i++){const bx=((i*260+t*(14+i*3))%640)-80,by=50+hr(i*9)*70+Math.sin(t*.8+i*3)*10;g.globalAlpha=kv;bird(bx,by,1.4,2+Math.sin(t*2+i),'#8a8a92');g.globalAlpha=1}
 const gv=(cl((xs-11200)/600,0,1)*cl((14000-xs)/600,0,1)+cl((xs-19400)/600,0,1)*cl((22400-xs)/700,0,1));if(gv>.05)for(let i=0;i<5;i++){const bx=((i*131+t*(24+i*4))%640)-80,by=60+hr(i*3)*110+Math.sin(t*1.6+i*2)*14,w=Math.sin(t*9+i)*3;g.globalAlpha=Math.min(1,gv);bird(bx,by,1.1,w,xs<21200?'#f4f4f4':'#b8b8c8');g.globalAlpha=1}
 const bn=cl((xs-21400)/800,0,1);if(bn>.05)for(let i=0;i<5;i++){const bx=((i*97+t*(34+i*3))%560)-40,by=90+hr(i*5)*120+Math.sin(t*5+i)*18,w=Math.sin(t*14+i)*3.4;g.globalAlpha=bn;g.strokeStyle='rgba(10,8,20,.9)';g.lineWidth=2;g.beginPath();g.moveTo(bx-7,by+w);g.lineTo(bx-2,by-2);g.lineTo(bx,by+1);g.lineTo(bx+2,by-2);g.lineTo(bx+7,by+w);g.stroke();g.globalAlpha=1}
 each(o,520,31,(x,i,r)=>{const wx=cam+x,zz=zn(wx);if(wx>23200)return;A.setDK(nf(wx));
  if(zz==1&&r<.35)bue(g,x+30,hz+48,.9,t,-1);
  if(zz<=7&&r>.3&&r<.42)cane(g,x+60,hz+42,t,['#b8935a','#6a5a48','#d8c8a0'][md(i,3)]);
  if(zz>=2&&r>.46&&r<.58)gatto(g,x+80,hz+46,t);
  if((zz==3||zz==7)&&r<.28)pecora(g,x+20,hz+44,1.1,t,1);
  if(zz==6&&r>.6&&r<.72)cavallo(g,x+60,hz+50,.6,t,md(i,2)?1:-1,'#5a3a24');
  if(zz==1&&r>.7&&r<.82)for(let q=0;q<3;q++)gallina(g,x+30+q*22,hz+44,1.3,t+q);
  if(zz==8&&r>.7&&r<.8)gatto(g,x+80,hz+46,t)});
 each(o,430,57,(x,i,r)=>{const wx=cam+x,zz=zn(wx);if(r<.4||wx>23300)return;A.setDK(nf(wx));const dir=md(i,2)?1:-1,off=Math.sin(t*.18+i)*70,f=Math.cos(t*.18+i)*dir>0?1:-1;
  if(r>.84&&(zz==4||zz==5||zz==6))asino(g,x+off,hz+56,1,t+i,f);
  else if(zz==1)contad(g,x+off,hz+54,t+i,{s:.5,f:f,ph:i,i:md(i,4)});
  else if(zz==2)(md(i,2)?mercante:contad)(g,x+off,hz+54,t+i,{s:.5,f:f,ph:i,i:md(i,4),top:['#4a3a2a','#2a3a5a'][md(i,2)],bot:['#4a3a2a','#2a3a5a'][md(i,2)],cap:'#2a2a2a'});
  else if(zz==4||zz==6)(md(i,2)?pell:contad)(g,x+off,hz+54,t+i,{s:.5,f:f,ph:i,i:md(i,4)});
  else if(zz==5)(md(i,2)?donna:contad)(g,x+off,hz+54,t+i,{s:.5,f:f,ph:i,i:md(i,4),top:['#c8503a','#e0b030','#5a7a4a'][md(i,3)],bot:['#c8503a','#e0b030','#5a7a4a'][md(i,3)]});
  else if(zz==7)pe(g,x+off,hz+54,t+i,{s:.5,f:f,ph:i,long:1,top:'#2a2a3a',bot:'#2a2a3a',cap:'#2a2a2a'});
  else if(zz==8&&xs>20900)pe(g,x+off,hz+54,t+i,{s:.5,f:f,ph:i,long:1,top:'#14141a',bot:'#14141a',hat:'#14141a',acc:(g2,b)=>{el(g2,'#f4f0e8',5,-100+b,7,8)}});
  else mercante(g,x+off,hz+54,t+i,{s:.5,f:f,ph:i,top:['#2a2a50','#6a2a2a','#3a5a4a'][md(i,3)],bot:['#2a2a50','#6a2a2a','#3a5a4a'][md(i,3)],cap:'#2a2a30'})});A.setDK(0);g.globalAlpha=1}
const INTRO="Seicento, dall’alba alla notte. Parti da una cascina lombarda, dove il contadino semina un cereale arrivato dall’America e le donne allevano i bachi da seta; poi Cremona, dove Antonio Stradivari costruisce violini che suonano ancora oggi; Firenze, dove i granduchi Medici fanno comporre quadri con le pietre; Roma, dove Bernini trasforma il marmo in teatro. A mezzogiorno Napoli, rumorosa e affollata, con il Vesuvio che fuma; nel primo pomeriggio la strada, con i postiglioni, le dogane e i viaggiatori; poi Padova, dove Galileo insegna e costruisce il suo cannocchiale; al tramonto Venezia, con le gondole, il Carnevale e i teatri d’opera, e di notte le stelle, che Galileo ha insegnato a guardare in un altro modo. Il tempo qui si piega: contadini, liutai, artisti, scienziati e musicisti di ogni anno del secolo ti vengono incontro.";
const LKTXT=[
"Siamo nella pianura lombarda, che appartiene al re di Spagna: Milano è la capitale del suo Stato. L’acqua di canali e rogge tiene i prati verdi anche d’inverno e rende queste terre fra le più ricche d’Europa, ma chi le lavora vive di fatica, di tasse e di soldati che passano. La giornata comincia prima del sole.",
"La cascina è un grande cortile chiuso, con le case dei contadini, la stalla, il fienile e l’aia dove si batte il grano. Dall’America è arrivato il mais, che qui chiamano granoturco: ne ha seminato sempre di più, e la polenta gialla riempie la pentola quando il pane di frumento costa troppo. La terra, di solito, appartiene a un padrone che vive in città.",
"In primavera le foglie dei gelsi nutrono i bachi da seta, che le donne allevano in casa su graticci di canne: mangiano tutto il giorno, con un rumore simile a una pioggia leggera, e poi chiudono se stessi nel bozzolo. I bozzoli vanno alla filanda, e la seta lombarda parte per Milano e per i mercati d’Europa.",
"Dopo anni di guerra, di raccolti scarsi e di carestia, nell’autunno del 1629 i lanzichenecchi, soldati tedeschi diretti a Mantova, attraversano la Lombardia e portano con sé anche la peste. Nel 1630 il contagio arriva a Milano: secondo le stime, muoiono circa 60.000 persone su 130.000, e il grande lazzaretto accoglie malati e sospetti. Poi, piano piano, nei campi si ricomincia a lavorare.",
"Cremona sorge sul Po e, come la pianura intorno, appartiene allo Stato di Milano sotto la corona di Spagna. Il Torrazzo domina la città, e qui, nel 1567, è nato anche il musicista Claudio Monteverdi. Da più di un secolo Cremona è famosa in tutta Europa per i suoi liutai, e la musica è dappertutto.",
"La bottega è anche casa, in un palazzo vicino alla chiesa di San Domenico: giù si lavora, su si fanno asciugare gli strumenti e si vive. Antonio Stradivari ci lavora con i figli Francesco e Omobono, e con garzoni e apprendisti. Ogni strumento porta all’interno un’etichetta con il suo nome in latino, Antonius Stradivarius Cremonensis.",
"La tavola superiore di un violino si fa con abete rosso, il fondo e le fasce con acero: il legno va stagionato per anni. Si piegano le fasce con il calore, si intagliano e si rifiniscono tavola e fondo con sgorbie e pialle, si incolla con colla di pelle e si mette all’interno una piccola asta di legno, l’anima, che trasmette il suono. Poi viene la vernice, stesa a strati: su come la facciano i maestri di Cremona si è discusso a lungo.",
"Dai laboratori di Cremona escono violini, viole e violoncelli, ma anche chitarre, mandolini e arpe: strumenti che si suonano nelle chiese, nei teatri, nelle corti e nelle feste. Con il violino nascono le grandi orchestre, e a Roma il violinista e compositore Arcangelo Corelli rende famosi i concerti per archi.",
"Firenze è governata dai Medici, granduchi di Toscana: vivono a Palazzo Pitti e invitano a corte artisti, musicisti e scienziati. La città non è più la grande potenza di un tempo, ma resta ricca di botteghe e di artigiani raffinati, e i granduchi amano le cose belle, rare e curiose.",
"Nel 1588 il granduca Ferdinando I ha fondato un’officina speciale, l’Opificio delle pietre dure, dove si \"commettono\" pietre colorate così strette l’una all’altra da formare quadri, fiori, uccelli e paesaggi. Si disegna il modello, si sceglie ogni pietra per il suo colore, si taglia con una sega ad arco e sabbia, si incolla e si lucida. Un piccolo pezzo richiede mesi, e la grande Cappella dei Principi, in San Lorenzo, è un lavoro che passerà di mano in mano per secoli.",
"Nel 1610 il granduca Cosimo II chiama a Firenze il professore Galileo Galilei, che ha scoperto quattro piccole \"stelle\" in moto attorno a Giove e le ha chiamate \"stelle medicee\" in onore della famiglia. Nelle sale dei Medici si raccolgono cannocchiali, globi celesti, orologi e strumenti scientifici, e più tardi i figli di Ferdinando II fonderanno un’accademia di scienziati, il Cimento, per fare esperimenti e riprovarli.",
"Sulle facciate di molti palazzi ci sono piccole porte ad arco, le \"buchette del vino\": le famiglie nobili, che producono vino nelle loro campagne, lo vendono direttamente dal palazzo a chi bussa. Si dice che durante la peste del 1630 siano servite per vendere il vino con meno contatto possibile fra venditore e compratore.",
"Roma è la capitale della Chiesa: ci vivono papi, cardinali, artisti, pellegrini e stranieri. Ogni papa chiama architetti e scultori per cambiare il volto della città, con piazze, fontane e chiese nuove. Nei Giubilei, che ricorrono a distanza di venticinque anni, le strade si riempiono di pellegrini.",
"Sotto la cupola di San Pietro, fra il 1624 e il 1633, Bernini costruisce un enorme baldacchino di bronzo con quattro colonne a spirale. Dal 1656 disegna anche la piazza: due grandi bracci di colonne, il colonnato, che abbracciano i fedeli. Si dice che parte del bronzo venga dal portico del Pantheon, e che la statua parlante di Pasquino abbia commentato la cosa con una battuta famosa.",
"In Piazza Navona, fra il 1648 e il 1651, Bernini costruisce la Fontana dei Quattro Fiumi: una scogliera di marmo con un obelisco sopra, e quattro giganti che rappresentano il Danubio, il Gange, il Nilo e il Rio della Plata. Di fronte sorge Sant’Agnese, opera di Borromini, un altro grande architetto di Roma, che con Bernini ha idee molto diverse.",
"A Roma, nei primi anni del Seicento, il pittore Caravaggio dipinge scene sacre nella luce e nell’ombra, con volti di gente comune: nel 1606 deve lasciare Roma e morirà nel 1610. Il Barocco continua a giocare con la luce e con il movimento, e vuole stupire: nella chiesa di Santa Maria della Vittoria, Bernini scolpisce l’Estasi di Santa Teresa, con luce che arriva dall’alto come in un palcoscenico.",
"Napoli sta su un golfo bellissimo, con il Vesuvio che fuma sullo sfondo. Appartiene alla corona di Spagna ed è governata da un viceré; con centinaia di migliaia di abitanti è una delle città più popolose d’Europa. Nel dicembre del 1631 il Vesuvio erutta con violenza: la città si copre di cenere, e per molti anni Napoli ricorderà quella paura.",
"Qui si vive molto stretti: i vicoli sono pieni di botteghe, di venditori e di bambini, e le case salgono di cinque o sei piani con balconi e panni stesi. Molte famiglie vivono in una sola stanza a pianterreno, il \"basso\", con la porta aperta sul vicolo. In mezzo a questo formicaio, ogni cantone ha la sua edicola con un’immagine sacra e una lampada.",
"In Piazza Mercato, vicino al porto, si vende pesce fresco, frutta e verdura. Qui, il 7 luglio 1647, esplode una rivolta contro una nuova tassa sulla frutta, la gabella: la guida un giovane pescivendolo, Tommaso Aniello, detto Masaniello. Dieci giorni dopo viene ucciso; la rivolta continua per mesi. Nove anni più tardi, nel 1656, la peste colpisce duramente la città.",
"Napoli è piena di chiese, di confraternite e di opere di carità. Nel 1607 il pittore Caravaggio, fuggito da Roma, dipinge per il Pio Monte della Misericordia le Sette opere di misericordia; più tardi lavorano qui anche Jusepe de Ribera e Artemisia Gentileschi. San Gennaro è il santo protettore, e tre volte l’anno, secondo la tradizione, il suo sangue si scioglie davanti ai fedeli.",
"L’Italia non è un solo Stato: in pochi giorni di viaggio si passa dal territorio del re di Spagna a quello del papa, del duca di Modena o della Repubblica di Venezia. A ogni confine c’è una dogana, e i viaggiatori devono pagare e mostrare i documenti; ogni Stato ha le sue monete, i suoi pesi e le sue misure.",
"Ogni giornata di cammino ci sono stazioni di posta, dove si cambiano i cavalli e si portano le lettere: i postiglioni guidano le carrozze o cavalcano di corsa da una stazione all’altra. È il modo più rapido di viaggiare, ma costa, e ogni viaggio è fra polvere, fango e sobbalzi.",
"A fine giornata ci si ferma in una locanda: si mangia una zuppa calda, si beve vino e si dorme in camere con più letti, a volte dividendo il letto con degli sconosciuti. Nelle sere d’inverno il camino acceso è il posto più ambito, e i viaggiatori si scambiano notizie, storie e consigli.",
"Nell’Anno Santo del 1650, e di nuovo nel 1675 e nel 1700, la strada verso Roma si riempie di pellegrini. Ma arrivano anche giovani stranieri, in particolare inglesi, che viaggiano per istruirsi e vedere arte e antichità: nel 1670 un sacerdote inglese, Richard Lassels, scriverà una guida che darà a questo tipo di viaggio il nome di \"Grand Tour\". Fra i visitatori c’è anche il poeta John Milton, che nel 1638 visita Firenze e, si racconta, incontra Galileo ormai anziano.",
"L’Università, che a Padova chiamano lo Studio, esiste da secoli ed è una delle più famose d’Europa: ci studiano giovani di tutti i Paesi. Padova appartiene alla Repubblica di Venezia, che protegge la libertà di insegnamento. Le lezioni si tengono in latino nel Palazzo del Bo, e gli studenti si riuniscono in \"nazioni\".",
"Nel 1594 il medico Girolamo Fabrici d’Acquapendente fa costruire nel Bo il primo teatro anatomico stabile: i giovani medici osservano dall’alto le dissezioni, per imparare come è fatto il corpo umano. Poco lontano, l’orto botanico, fondato nel 1545, coltiva piante medicinali ed esotiche portate da lontano.",
"Galileo abita in una casa con giardino, dove ospita studenti, tiene lezioni private e ha una piccola bottega di strumenti: costruisce compassi, lenti e cannocchiali con l’aiuto di un artigiano. Vive con Marina Gamba, veneziana, e con i tre figli. A casa suona anche il liuto, come suo padre, musicista.",
"Nel 1608 arriva dall’Olanda la notizia di un tubo con due lenti che fa sembrare vicino ciò che è lontano. Galileo ne costruisce uno e lo migliora, poi lo punta al cielo: nel novembre del 1609 vede sulla Luna monti e valli; il 7 gennaio 1610 nota tre piccole stelle vicino a Giove, che nei giorni seguenti diventano quattro e cambiano posizione.",
"Venezia nasce sulla laguna: le case poggiano su pali di legno conficcati nel fango e al posto delle strade ci sono i canali. Nell’estate del 1630 la peste colpisce la città e, in poco più di un anno, ne uccide quasi un terzo degli abitanti. Il Senato fa voto di costruire una nuova chiesa dedicata alla Madonna della Salute: l’architetto Baldassare Longhena comincia i lavori nel 1631, e saranno finiti nel 1687.",
"La basilica di San Marco, con le cupole e i mosaici d’oro, è la chiesa della Repubblica; accanto sorge il Palazzo Ducale, dove governa il doge, scelto a vita fra i nobili veneziani e affiancato dal Maggior Consiglio e dal Senato. La Serenissima commercia con l’Oriente da secoli e, dal 1645 al 1669, sarà impegnata nella lunga guerra con i Turchi per la difesa di Candia, nell’isola di Creta.",
"Nel 1637 a Venezia apre il Teatro di San Cassiano, il primo teatro d’opera aperto a chiunque paghi il biglietto: musiche, cantanti, scenografie e macchine per stupire. Per il Carnevale, da dicembre fino al martedì grasso, tutta la città si copre di maschere: la bauta, la moretta, il tabarro; nel 1638 apre anche il Ridotto, una sala pubblica per il gioco.",
"L’Arsenale, circondato da alte mura, è il grande cantiere navale della Repubblica, dove si costruiscono e si riparano le galee. A Rialto si trattano spezie, seta, legname e sale; a Murano i vetrai soffiano vetro per bicchieri, specchi e lampadari. Verso la fine del secolo, nelle botteghe di San Marco si comincia a servire anche il caffè.",
"Nell’agosto del 1609 Galileo sale sul campanile di San Marco con il suo cannocchiale e lo mostra al doge e ai senatori: da lassù si vedono barche e navi lontane molto prima che arrivino. Di notte il cielo sopra la laguna è pieno di stelle, e per i naviganti è una mappa: la Stella Polare indica il nord. Ora, con un cannocchiale, si possono guardare anche la Luna e Giove.",
"Sotto le stelle di Venezia, il cannocchiale ti porta ancora più in alto: verso Giove e le sue lune."
];
const NAME={
sc_bortolo:"Bortolo, il contadino",
sc_stradivari:"Antonio Stradivari, il liutaio",
sc_bartolomeo:"Mastro Bartolomeo, il commesso di pietre dure",
sc_bernini:"Gian Lorenzo Bernini",
sc_nunzia:"Nunzia, la pescivendola",
sc_nicolo:"Nicolò, il postiglione",
sc_galileo:"Galileo Galilei",
sc_monteverdi:"Claudio Monteverdi"
};
const GREET={
sc_bortolo:"Buondì, Pierpaolo! Attento alla pozzanghera, che con questa nebbia la vedi solo quando ci sei dentro. Sono Bortolo, e questa è l’aia della cascina: la terra non è mia, ma il lavoro sì. Vieni, che il bue ha già fatto colazione e io no.",
sc_stradivari:"Buongiorno, Pierpaolo, entra piano: qui il legno ascolta anche quando è fermo. Sono Antonio Stradivari, liutaio di Cremona, e questa è la mia bottega. Se vedi trucioli per terra, non spazzarli: tengo il profumo.",
sc_bartolomeo:"Buongiorno, Pierpaolo! Non respirare forte, che mi vola via il diaspro. Sono mastro Bartolomeo, commesso: chi, con le pietre, dipinge. Lavoro per il Granduca, e se sbaglio un taglio, ricomincio da capo, che qui non si perdona.",
sc_bernini:"Pierpaolo! Vieni, ma non toccare quel modello, che ci ho messo una notte! Sono Gian Lorenzo Bernini: scultore, architetto, pittore, e quando serve anche autore di commedie. A Roma, se non fai rumore, nessuno si accorge che esisti.",
sc_nunzia:"Eh, e che guardi, Pierpaolo? Il pesce non si guarda, si compra! Scherzo, scherzo: sono Nunzia, e qui il pesce lo vendo da quando ero piccola così. Avvicinati, che le sarde sono ancora vive, e anche le chiacchiere.",
sc_nicolo:"Ehi, Pierpaolo, fatti da parte, che i cavalli mordono se non ti conoscono! Sono Nicolò, postiglione: guido le carrozze e porto le lettere da una stazione di posta all’altra. Su questa strada, in un’ora cambi padrone, moneta e dogana, e il cavallo è l’unico che non protesta.",
sc_galileo:"Pierpaolo! Vieni, vieni: sali sul terrazzo e non toccare quel tubo, che ci ho messo mesi a lisciare le lenti. Sono Galileo Galilei, professore di matematica allo Studio di Padova. Se stasera il cielo è sereno, ti faccio vedere una cosa che nessun uomo ha mai visto.",
sc_monteverdi:"Buonasera, Pierpaolo! Fermati un momento: senti come suonano le campane, e come risponde l’acqua. Sono Claudio Monteverdi, maestro di cappella di San Marco, e stasera Venezia mi sembra una grande orchestra."
};
/* posizione di ognuna delle 34 tappe: 4 per zona (6 nella zona 8) */
const LX=[];for(let z=0;z<7;z++)for(let k=0;k<4;k++)LX.push(Z[z]+400+700*k);for(let k=0;k<6;k++)LX.push(Z[7]+400+700*k);

/* ---- personaggi ---- */
const NP=(id,x,o,acc)=>({id,name:NAME[id],x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));const c=q=>tn(o[q]);fig(g,px,y,t,Object.assign({f,s:1},o,{skin:c('skin'),top:c('top'),bot:c('bot'),hair:c('hair'),acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:GREET[id]}}});
const piedi=(g,c)=>{el(g,c,-4,-1,8,4);el(g,c,8,-1,8,4)};
const barbaN=(g,b,col,n,rows)=>{for(let r=0;r<rows;r++)for(let q=r;q<n-r;q++)dot(g,col,-3+q*2.2,-92+b+r*4.6+(q%2)*1.6,3.2)};
const npcs=[
 /* Bortolo: camicia di canapa, calzoni di lana, zoccoli, cappello di feltro a tesa larga, mantello di lana, forca */
 NP('sc_bortolo',1330,{skin:'#c88e64',top:'#c8b88a',bot:'#6a5a44',hair:'#3a2a1a',s:1.02},(g,b,t)=>{poly(g,tn('#6a5a48'),[[-14,-92+b],[-1,-98+b],[5,-70+b],[-8,-50+b],[-15,-52+b]]);rect(g,tn('#8a7a5a'),-12,-55+b,24,4);
  el(g,tn('#5a4a30'),1,-112+b,20,4);el(g,tn('#6a5a3a'),1,-116+b,11,7);
  ln(g,'#6a4a28',2.6,[16,-84+b,30,-150]);for(let q=0;q<3;q++)ln(g,'#8a8a92',1.8,[24+q*5,-150,24+q*5,-166]);ln(g,'#8a8a92',1.8,[24,-150,34,-150]);ln(g,tn('#c88e64'),6,[12,-84+b,18,-76+b]);
  el(g,'#7a5a3a',-4,-2,8,5);el(g,'#7a5a3a',8,-2,8,5)}),
 /* Stradivari: grembiule di cuoio sopra una camicia scura con le maniche arrotolate, berretto di lana chiara, coltellino da lavoro */
 NP('sc_stradivari',3965,{skin:'#d8a47c',top:'#3a3430',bot:'#4a3a2a',hair:'#8a8a8a',s:1.04},(g,b,t)=>{poly(g,tn('#8a5a2a'),[[-11,-86+b],[11,-86+b],[14,-34],[-14,-34]]);rect(g,tn('#5a3a1a'),-11,-60+b,22,3);
  el(g,tn('#e0d4b4'),1,-111+b,12.4,6);poly(g,tn('#e0d4b4'),[[-8,-112+b],[-2,-124+b],[9,-112+b]]);
  ln(g,tn('#d8a47c'),6,[12,-84+b,22,-72+b]);ln(g,'#8a8a92',2,[22,-72+b,32,-80+b]);rect(g,'#5a3a1a',16,-76+b,7,3);viol(g,-22,-62+b,.9,'#d8b878',.3)}),
 /* Bartolomeo: grembiule di tela sporco di polvere colorata, cappello di panno, occhiali con montatura di cuoio, sega ad arco */
 NP('sc_bartolomeo',6725,{skin:'#c8946a',top:'#7a6a54',bot:'#3a3a40',hair:'#5a4a3a',s:1.0},(g,b,t)=>{poly(g,tn('#d8cfb4'),[[-11,-84+b],[11,-84+b],[14,-32],[-14,-32]]);for(const [c,dx] of [['#c8402a',-6],['#2a5ac8',2],['#3a8a4a',8],['#e0c040',-2]])dot(g,c,dx,-60+b+dx%5,2);
  el(g,tn('#5a5448'),1,-112+b,13,5);el(g,tn('#5a5448'),1,-115+b,9,6);dot(g,'#3a2a1a',6,-102+b,3.4);dot(g,'#3a2a1a',-1,-102+b,3.4);ln(g,'#3a2a1a',1.2,[-4,-102+b,2,-102+b]);
  ln(g,tn('#c8946a'),6,[12,-84+b,22,-70+b]);ln(g,'#8a8a92',1.6,[20,-84,34,-84]);g.strokeStyle='#5a3a1a';g.lineWidth=2.4;g.beginPath();g.moveTo(18,-96+b);g.quadraticCurveTo(30,-84,18,-70+b);g.stroke();piedi(g,'#4a3a2a')}),
 /* Bernini: veste scura con colletto di lino, mantello nero, capelli grigi scompigliati, carboncino */
 NP('sc_bernini',9780,{skin:'#d8a47c',top:'#2a2a34',bot:'#2a2a34',hair:'#9a9a9a',long:1,s:1.04},(g,b,t)=>{poly(g,tn('#14141a'),[[-14,-92+b],[0,-96+b],[16,-60+b],[12,-30],[-22,-30]]);poly(g,tn('#f2ecdc'),[[-9,-92+b],[9,-92+b],[3,-82+b],[-3,-82+b]]);
  for(let q=0;q<6;q++)ln(g,tn('#9a9a9a'),2.4,[-8+q*3,-110+b,-12+q*4.4,-124+b-hr(q)*3]);
  ln(g,tn('#d8a47c'),6,[12,-84+b,26,-74+b]);rect(g,'#2a2a2a',26,-78+b,5,2);rect(g,'#f0e8d4',-34,-62+b,14,18);ln(g,'#3a3a3a',1,[-32,-56+b,-24,-52+b]);rect(g,'#e8dcc0',2,-52+b,0,0);piedi(g,'#2a2a2a')}),
 /* Nunzia: veste rossa e gialla, grembiule bagnato, fazzoletto in testa, orecchini di ottone, cesto di vimini */
 NP('sc_nunzia',13010,{skin:'#d0996c',top:'#c8402a',bot:'#c8402a',hair:'#2a1a10',long:1,s:.98},(g,b,t)=>{poly(g,tn('#e8b830'),[[-13,-60+b],[13,-60+b],[18,-26],[-18,-26]]);poly(g,tn('#e8e0d0'),[[-9,-70+b],[9,-70+b],[13,-30],[-13,-30]]);rect(g,'rgba(80,110,140,.3)',-9,-44,18,14);
  poly(g,tn('#e8b830'),[[-13,-108+b],[-3,-116+b],[10,-108+b],[8,-100+b],[-12,-100+b]]);dot(g,'#c8a030',-9,-92+b,1.8);dot(g,'#c8a030',10,-92+b,1.8);
  ln(g,tn('#d0996c'),7,[-12,-84+b,-20,-62+b]);el(g,'#a8803c',-22,-56+b,10,6);for(let q=0;q<3;q++)ln(g,'#b8c8d0',2.4,[-26+q*4,-62+b,-24+q*4,-56+b]);ln(g,tn('#d0996c'),7,[12,-84+b,18,-68+b]);piedi(g,'#3a2a1a')}),
 /* Nicolò: giubba di cuoio con i bottoni, stivali alti, cappello di feltro, corno di ottone a tracolla, frusta */
 NP('sc_nicolo',15190,{skin:'#b8845c',top:'#8a5a2a',bot:'#4a3a2a',hair:'#3a2a1a',s:1.02},(g,b,t)=>{for(let q=0;q<4;q++)dot(g,'#c8a030',0,-84+b+q*10,1.4);
  el(g,tn('#4a3a2a'),1,-112+b,17,4);el(g,tn('#5a4a34'),1,-116+b,10,6);ln(g,'#c8a030',2.4,[-10,-90+b,10,-52+b]);poly(g,'#c8a030',[[-6,-60+b],[2,-52+b],[-2,-46+b]]);dot(g,'#c8a030',-6,-60+b,4);
  ln(g,'#3a2a1a',2,[14,-84+b,34,-60]);ln(g,'#3a2a1a',1.4,[34,-60,40,-40]);ln(g,tn('#b8845c'),6,[12,-84+b,18,-72+b]);el(g,'#2a1c10',-4,-8,6,9);el(g,'#2a1c10',8,-8,6,9)}),
 /* Galileo: veste scura da professore con il mantello, barba corta, fronte alta, mani macchiate d'inchiostro e di polvere di vetro */
 NP('sc_galileo',19230,{skin:'#d8a47c',top:'#2a2a30',bot:'#2a2a30',hair:'#8a5a3a',long:1,s:1.02},(g,b,t)=>{poly(g,tn('#1a1a22'),[[-14,-92+b],[0,-96+b],[16,-60+b],[12,-30],[-22,-30]]);poly(g,tn('#f2ecdc'),[[-8,-90+b],[8,-90+b],[2,-82+b],[-2,-82+b]]);
  barbaN(g,b,'#8a5a3a',6,2);ln(g,tn('#d8a47c'),6,[12,-84+b,26,-92+b]);dot(g,'#2a2a3a',27,-92+b,2.4);rect(g,'#f0e8d0',-30,-66+b,12,16);dot(g,'rgba(190,228,244,.9)',-26,-72+b,3);piedi(g,'#2a2a2a')}),
 /* Monteverdi: veste nera da sacerdote con il colletto bianco, cappello nero, barba bianca appuntita, rotolo di pentagrammi */
 NP('sc_monteverdi',21140,{skin:'#d0a07a',top:'#1a1a22',bot:'#1a1a22',hair:'#dcdcdc',long:1,s:1.0},(g,b,t)=>{rect(g,tn('#f2ecdc'),-6,-92+b,12,5);
  el(g,tn('#14141a'),1,-111+b,14,5);el(g,tn('#14141a'),1,-115+b,9,5);poly(g,tn('#e8e8e8'),[[-4,-96+b],[8,-96+b],[2,-84+b]]);
  rect(g,'#f0e8d4',-30,-74+b,20,5);rect(g,'#f0e8d4',-30,-74+b,20,0);for(let q=0;q<3;q++)ln(g,'#6a5a3a',.8,[-28,-72+b+q*1.4,-12,-72+b+q*1.4]);ln(g,tn('#d0a07a'),6,[-12,-84+b,-20,-72+b]);ln(g,tn('#d0a07a'),6,[12,-84+b,18,-68+b]);piedi(g,'#1a1a22')})
];

/* ---- oggetti lungo il percorso: [nome in elementi.js, posizione nel mondo, parametro] ---- */
const props=[
 /* zona 1 · la pianura lombarda e la cascina */
 ['sctarga',90,'PIANURA LOMBARDA'],['scgelsi',140,4],['scpianura',480],['scgelsi',790,3],['sccascina',1050],['sccarro',1480],['scbachi',1950],['scgelsi',2250,2],['sccordone',2380],['scgelsi',2740,2],
 /* zona 2 · Cremona */
 ['sctarga',2890,'CREMONA'],['sctorrazzo',3250],['scbottega',3950],['sclegno',4650],['scconcerto',5350],['sccipresso',5560,100],
 /* zona 3 · Firenze */
 ['sctarga',5690,'FIRENZE'],['scpitti',6050],['sccipresso',6380,110],['scpietre',6750],['sccipresso',7080,100],['scmedicea',7450],['scbuchetta',8100],['sccipresso',8340,110],
 /* zona 4 · Roma */
 ['sctarga',8490,'ROMA'],['scroma',8800],['scsanpietro',9500],['scbaldacchino',10050],['scnavona',10530],['sccaravaggio',11030],
 /* zona 5 · Napoli */
 ['sctarga',11290,'NAPOLI'],['scgolfo',11700],['scvicolo',12380],['scmercato',13050],['scchiesa',13750],
 /* zona 6 · la strada */
 ['sctarga',14090,'LA STRADA'],['scconfine',14500],['scposta',15150],['sclocanda',15750],['scpellegrini',16400],
 /* zona 7 · Padova */
 ['sctarga',16890,'PADOVA'],['scbo',17250],['scteatro',17950],['sccasagal',18700],['scterrazzo',19300],
 /* zona 8 · Venezia */
 ['sctarga',19690,'VENEZIA'],['sclanterna',19800],['scsalute',20000],['scsanmarco',20700],['scmolo',21280],['scopera',21800],['sctorcia',22100,0],['sccampanile',23000],['scarsenale',22450],['sclanterna',23260],['scvarco',23600]];

const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'seicento',name:'Seicento · Dai campi lombardi alle stelle di Venezia',width:W1,sky:['#9aa4bc','#d4d8e2','#ece6e0'],gt:372,gr:['#8a7048','#5a4430'],chord:[220,261.6,329.6,392],amb:'#ffe8c0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)}],
mid:[{k:1,fn:LV(layerLife)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da seicento.txt) --- */
(function(){
const TOPX_SC={
sc_bortolo:[
["Chi sei e che fai?","Bortolo, quarantun anni, contadino. Lavoro un pezzo di terra di un nobile che sta a Milano, con mia moglie Margherita e tre figli, e gli pago l’affitto in grano e in denaro. Sopra di noi c’è il re di Spagna, che comanda da lontano: a noi arrivano soprattutto le tasse."],
["Com’è la giornata di un contadino?","Si parte prima del sole, con la stalla: mungere, dar da mangiare alle bestie, portare il letame. Poi i campi: a marzo si semina, a giugno si taglia il fieno, a luglio si miete, a settembre si raccoglie il granoturco. La campana della chiesetta mi dice l’ora; per il resto, c’è il sole e la pancia."],
["Cos’è il granoturco?","Il mais: è arrivato dall’America da qualche decennio, e da noi ha preso piede alla svelta. Si semina in primavera e a settembre si colgono le pannocchie; poi si sgranano, si macina e si fa la polenta. Rende molto più del frumento, e a noi serve proprio quello."],
["Cosa mangiate?","Polenta, tanta: con il latte, con un po’ di formaggio, o insieme a una minestra di verze e fagioli. Pane di segale o di miglio, riso nelle zone dove ci sono le risaie, uova, formaggio e un po’ di lardo. La carne è per le feste, e il vino per chi ha una vigna. Quando il raccolto va male, a primavera si stringe la cinghia."],
["Com’è la tua casa e come vi vestite?","Una cucina con il focolare, una stanza sopra con i sacconi di paglia e la stalla attaccata, che d’inverno scalda un po’ anche noi. Si veste di lana e di canapa, con zoccoli di legno e un mantello per la pioggia; le donne filano e tessono la tela di casa. Non è bella, ma è casa."],
["Come si allevano i bachi da seta?","Li allevano soprattutto le donne, in primavera, in una stanza calda: si mettono le uova, e quando nascono i bachi li si nutre con le foglie di gelso, tante, anche di notte. Si sente un rumore come di pioggia leggera, quando mangiano. Dopo un mese fanno il bozzolo, e il mercante di seta viene a comprarlo: è un guadagno, ma anche una fatica."],
["Come funziona l’acqua nei campi?","È più preziosa del vino. Canali e rogge portano l’acqua dai fiumi, e ogni cascina ha il suo turno per aprire le paratoie e irrigare. D’inverno la facciamo scorrere sui prati, le marcite, così l’erba cresce anche col gelo e si può tagliare più volte. Chi ruba l’acqua del vicino si prende una bella lite."],
["Che si fa la sera?","Quando fa freddo si sta nella stalla, al caldo delle bestie: è la veglia. Le donne filano, gli uomini sgranano il granoturco o riparano un attrezzo, qualcuno racconta una storia, di lupi, di santi o di tesori, e si dice il rosario. Quando il lume si spegne, tutti a letto: l’olio costa."],
["Che feste avete?","Sant’Antonio abate, il 17 gennaio, con la benedizione delle bestie e i falò; il Carnevale prima della Quaresima; la sagra del santo patrono, con balli e mercato. Poi c’è San Martino, l’11 novembre: scadono i contratti e chi deve cambiare cascina fa i suoi fagotti, per questo si dice \"fare San Martino\"."],
["Cosa è successo con la peste del 1630?","Prima la guerra per Mantova, poi i lanzichenecchi, soldati tedeschi che passavano di qui nell’autunno del 1629; con loro, dicono, è arrivato il contagio. A Milano, in quella peste, è morta circa la metà della gente: sessantamila su centotrentamila, secondo le stime. Dicono che due secoli dopo uno scrittore, Manzoni, racconterà in un romanzo, I promessi sposi, un povero filatore di seta proprio in questi anni."],
["Dove vado dopo?","Scendi lungo il Po fino a Cremona: lì c’è un maestro di violini, Antonio Stradivari, che con un pezzo di legno fa cantare l’aria. Digli che Bortolo, quello dei bachi, manda un saluto, anche se non mi conosce: i violini piacciono a tutti, anche a chi suona solo il cucchiaio."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e che la nebbia ti sia leggera e il raccolto buono, anche se non hai un campo. Se ripassi, ti offro una scodella di polenta calda. Servo vostro: salute e buona ventura!"]
],
sc_stradivari:[
["Chi sei e che fai?","Antonio Stradivari, di Cremona: secondo le mie carte sono nato intorno al 1644, anche se la data esatta si è persa. Costruisco violini, viole e violoncelli, e anche chitarre, mandolini e arpe. Sul biglietto dentro ogni strumento scrivo il mio nome in latino: Antonius Stradivarius Cremonensis."],
["Dove hai imparato il mestiere?","Secondo la tradizione, da Nicolò Amati, un grande maestro di Cremona, la cui famiglia fa strumenti da più di un secolo: su alcune etichette dei primi tempi mi sono dichiarato suo allievo. Gli studiosi, però, non sono sicuri che sia andata proprio così. Nel 1667 mi sono sposato con Francesca, e da allora la bottega è anche casa."],
["Com’è organizzata la bottega?","Come una famiglia: io, i miei figli Francesco e Omobono, qualche garzone. Giù si lavora il legno, su si fanno asciugare gli strumenti verniciati e si vive. Chi comincia come garzone pulisce, porta il legno e guarda: i primi anni si imparano con gli occhi."],
["Che legni usate?","Per la tavola superiore, l’abete rosso, leggero e con le venature fitte; dicono che i migliori vengano dalle foreste delle Alpi, in Trentino. Per il fondo, le fasce e il manico, l’acero. La tastiera è di ebano. Il legno va stagionato per anni: chi ha fretta fa strumenti che non cantano."],
["Come si costruisce un violino?","Si prepara una forma interna di legno, si piegano le fasce con il calore, si intagliano la tavola e il fondo con sgorbie e pialle, controllando ogni spessore con il tatto e con l’orecchio. Si incolla con colla di pelle, e dentro si mette una piccola asta, l’anima: i musicisti dicono che è davvero l’anima dello strumento."],
["Qual è il segreto della vernice?","Dicono che ne abbia uno solo; io ne conosco tanti, e nessuno è magia. La vernice si stende a strati sottili, con resine, oli e colori dal giallo al rosso scuro, e poi si lascia asciugare lo strumento alla luce, in alto sulla loggia. Dicono che dopo di me qualcuno cercherà per secoli la mia ricetta: se la trovate, ditemelo."],
["Per chi lavori?","Per musicisti, chiese, nobili e corti. Intorno al 1690 ho fatto un gruppo di strumenti per i Medici di Firenze. Un violino, per un cortigiano, è anche un gioiello da mostrare; per un buon violinista, invece, è una voce. Io cerco di fare voci."],
["Quanti strumenti farai?","Dicono più di mille, in settant’anni di lavoro, con l’aiuto dei miei figli: se mi chiedi un numero, io non lo so, io lavoro e basta. Dicono anche che morirò nel 1737, a novantatré anni, e che di quegli strumenti ne resteranno circa seicentocinquanta, ancora suonati dopo secoli. Mi fa piacere, ma ora devo finire questa tavola."],
["Cosa si mangia a Cremona?","Minestre di verdure e di legumi, polenta, pesce di fiume, salumi, formaggi della pianura. Per le feste, la mostarda, frutta cotta con una salsa di senape, e il torrone, che secondo la tradizione è nato per un matrimonio di corte nel Quattrocento. A mezzogiorno si mangia in famiglia, tutti attorno al tavolo."],
["Cremona è una città di musica?","Più di ogni altra, direi: ci sono musicisti in Duomo, nelle chiese e nelle case, e qui, nel 1567, è nato anche Claudio Monteverdi. Ora lavora a Venezia, a San Marco: ha fatto cantare gli strumenti in un modo che nessuno aveva mai sentito. Cercalo, se passi da lì."],
["Dove vado dopo?","Verso sud, a Firenze: c’è un’officina del Granduca dove si fanno quadri con le pietre, e un mastro, Bartolomeo, che ne sa più di chiunque. Digli che Stradivari manda a chiedere se le sue pietre hanno un suono."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati che le cose fatte bene si sentono, anche quando nessuno le guarda. Se ripassi, ti faccio ascoltare un violino che non ha ancora il nome. Servo vostro: salute e buona ventura!"]
],
sc_bartolomeo:[
["Chi sei e che fai?","Bartolomeo, quarantott’anni, commesso di pietre dure all’Opificio del Granduca: \"commettere\" vuol dire unire, e io unisco pietre così bene che non si vede la giuntura. L’officina l’ha fondata nel 1588 il granduca Ferdinando I, per far lavori che nessun altro in Europa sapeva fare."],
["Come si fa un quadro di pietre?","Prima il disegno, a colori. Poi si sceglie ogni pietra per il suo colore: una rossa per un petalo, una verde per una foglia. Si taglia con la sega ad arco, con acqua e sabbia, si rifinisce, si incolla con un mastice e si lucida. Per un piccolo pezzo ci vogliono mesi."],
["Dove prendete le pietre?","Dalle cave toscane, per i marmi, e da lontano per le più rare: l’agata, il calcedonio, il diaspro, il lapislazzuli, quello blu intenso, che arriva da molto lontano con i mercanti e costa quanto l’oro, dicono. Il Granduca ama le pietre come alcuni amano i cavalli."],
["Cos’è la Cappella dei Principi?","Una cappella in San Lorenzo, per le tombe dei Medici, e ci lavoriamo dal 1604. Sarà tutta rivestita di pietre dure, dal pavimento alle pareti. Siamo in tanti, e a ogni generazione il lavoro passa di mano: dicono che ci vorranno secoli per vederla finita. Io ne faccio solo un pezzettino, ma è un pezzettino perfetto."],
["Come vivono i Medici?","A Palazzo Pitti, con il Granduca, Cosimo o Ferdinando, secondo l’anno: ricevono artisti, musicisti e scienziati, e organizzano feste con fuochi e carri. Hanno un giardino, Boboli, con fontane e grotte, e molta curiosità: una corte che ama le cose belle, rare e strane."],
["Che c’entra Galileo?","Nel 1610 il Granduca lo ha chiamato a Firenze, perché ha scoperto quattro \"stelle\" attorno a Giove e le ha chiamate stelle medicee, in onore della famiglia. Dicono che nel 1633 avrà dei guai a Roma per le sue idee, ma in questa corte è un ospite d’onore. E dai suoi allievi nascerà, nel 1657, un’accademia per fare esperimenti: il Cimento."],
["Com’è la città?","Una città di botteghe: orafi, tessitori, falegnami, speziali. Sul Ponte Vecchio, per esempio, vendono oggetti d’oro e d’argento: prima c’erano i macellai, e dicono che il Granduca, che passava sopra con la sua carrozza, non ne potesse più dell’odore. Le Arti, qui, contano sempre molto."],
["Cosa sono le buchette del vino?","Piccole porte ad arco nei palazzi dei nobili, che producono vino nelle loro campagne e lo vendono direttamente a chi bussa, senza osteria. Dicono che durante la peste del 1630 siano state utili, perché si poteva comprare il vino senza avvicinarsi troppo. Io, per sicurezza, bevo con moderazione."],
["Cosa si mangia a Firenze?","Pane sciocco, senza sale, con ogni cosa: zuppe di fagioli, legumi all’olio, trippa, salumi e formaggio, un buon vino rosso. Per le feste, carne arrosto, e i Medici, dicono, si fanno preparare anche sorbetti e ghiacci. A me basta una fetta di pane con l’olio nuovo."],
["Che feste avete?","San Giovanni, il 24 giugno, patrono della città, con fuochi sull’Arno e processioni; il Carnevale con le mascherate; e il calcio fiorentino, un gioco con la palla, in cui giovani nobili si affrontano in piazza in squadre, senza troppa gentilezza."],
["Dove vado dopo?","Verso sud, a Roma: lì lavora un grande scultore, Bernini, che trasforma il marmo in teatro. Chiedi del Cavaliere: lo trovi in cantiere, con la polvere addosso e un disegno in mano. Se non ti vede, fatti notare."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricorda: ogni pezzo di pietra ha il suo posto, basta trovarlo. Se ripassi, ti faccio vedere un fiore che non appassirà mai. Servo vostro: salute e buona ventura!"]
],
sc_bernini:[
["Chi sei e che fai?","Gian Lorenzo Bernini, nato a Napoli nel 1598 e cresciuto a Roma, figlio di uno scultore. Da giovanissimo scolpivo marmi che sembrano carne viva: l’Apollo e Dafne lo scolpisco per un cardinale, Scipione Borghese. Oggi mi chiamano il Cavaliere, e lavoro per i papi."],
["Com’è lavorare per i papi?","Una faticaccia e un onore. Il papa Urbano VIII, della famiglia Barberini, mi voleva sempre vicino. Dicono che mi abbia detto che per me era una fortuna vederlo papa, ma che per lui era una fortuna maggiore che io vivessi sotto il suo pontificato. Un po’ esagerato, ma mi piacque."],
["Cos’è il baldacchino di San Pietro?","Un enorme baldacchino di bronzo sopra la tomba dell’apostolo, con quattro colonne a spirale: ci ho lavorato dal 1624 al 1633. Dicono che parte del bronzo sia stato preso dal portico del Pantheon e che Pasquino, la statua parlante, abbia commentato con una battuta feroce, che i barbari non avevano fatto ciò che hanno fatto i Barberini. Io mi limito a dire che il bronzo è bronzo."],
["Com’è il tuo lavoro in bottega?","Faccio bozzetti di creta, prove veloci in cui catturo il gesto; poi, con aiuti e garzoni, passo al marmo, con scalpelli e mazzuoli, e alla fine rifinisco io, per far sembrare la pietra morbida come stoffa o pelle. Lavoro dall’alba al buio, e quando non scolpisco disegno."],
["È vero che scrivi anche commedie?","Verissimo. Mi diverto a scrivere commedie e a costruire scene con macchine e luci, per stupire il pubblico durante il Carnevale: dicono che una volta feci credere agli spettatori che il Tevere stesse allagando la sala. Il Barocco è questo: voler meravigliare, far vedere l’impossibile."],
["Cos’è la Fontana dei Quattro Fiumi?","Una fontana in Piazza Navona, che ho costruito dal 1648 al 1651 per il papa Innocenzo X: quattro giganti, il Danubio, il Gange, il Nilo e il Rio della Plata, sotto un obelisco. Di fronte c’è Sant’Agnese, di Borromini, un grande architetto con idee molto diverse dalle mie. Si racconta che la mano alzata del Rio della Plata voglia proteggersi dalla chiesa: è solo una leggenda."],
["E Caravaggio?","Quando ero ragazzo, a Roma il suo nome era sulla bocca di tutti: dipingeva figure comuni con una luce che arriva come una spada, e per questo lo adoravano e lo criticavano. Nel 1606 lasciò Roma e morì nel 1610, ancora giovane. Io ho imparato da lui che la luce è metà dell’opera."],
["Come si vive a Roma?","Fra pellegrini, cardinali e botteghe. Per il Carnevale si corre sul Corso con i cavalli senza fantino, e il popolo si ammassa ai lati; d’estate i ragazzi si tuffano nelle fontane; la sera nelle osterie si beve il vino dei Castelli e si mangia abbacchio, carciofi e pecorino. E Pasquino non smette mai di parlare."],
["Chi è Borromini?","Francesco Borromini, nato nel 1599 in Ticino: un tempo lavoravamo insieme al baldacchino e a Palazzo Barberini, poi ognuno ha preso la sua strada. Lui ama le curve, le geometrie complicate e le sorprese: la sua chiesetta di San Carlino alle Quattro Fontane ha la cupola a forma di ovale. Io amo la scena e il movimento. A Roma c’è posto per tutti e due, anche se non sempre lo diciamo."],
["Hai una famiglia?","Nel 1639 ho sposato Caterina, e abbiamo avuto undici figli. Lavoro per loro, ma anche, se sono sincero, per l’immortalità. Dicono che l’Estasi di Santa Teresa, scolpita fra il 1647 e il 1652 per una cappella di Santa Maria della Vittoria, sia la mia opera preferita: e gli credo."],
["Dove vado dopo?","Verso sud, a Napoli: sono nato lì, a due passi dal mare e dal Vesuvio. Vai al mercato del pesce e chiedi di Nunzia: ti insegnerà più sulla città di mille libri, e di sicuro a gridare più forte di me."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati: lo stupore è la prima porta dell’arte. Dicono che nel 1665 andrò a Parigi, chiamato dal Re Sole, e che morirò a Roma a ottantun anni, nel 1680, lavorando fino all’ultimo. Servo vostro: salute e buona ventura!"]
],
sc_nunzia:[
["Chi sei e che fai?","Nunzia, trentasei anni, pescivendola. Mio marito Gennaro va in mare con la barca, io vendo il pescato qui al mercato, e abbiamo due figli, che già lavorano con le reti. Non siamo ricchi, ma finché il mare dà pesce, mangiamo."],
["Com’è la tua giornata?","La notte, quando le barche tornano con il pesce: bisogna essere sul molo per scegliere il meglio. Poi, all’alba, si porta tutto al mercato e si grida. Alici, polpi, sarde, triglie, cozze e ricci di mare: la sera, quello che resta, si frigge. Il pesce, qui, si vende fresco o non si vende."],
["Com’è Napoli?","Rumorosa, sporca e bellissima. Dicono che sia una delle città più grandi d’Europa, e quando cammini fra i vicoli lo senti: ognuno grida, vende, canta. Il viceré sta al Palazzo Reale, e a noi arrivano soprattutto le sue tasse. Ma vuoi mettere il mare, il sole e il Vesuvio?"],
["Cos’è successo con il Vesuvio?","Nel dicembre del 1631 la montagna si è svegliata di colpo, con un fumo nero e cenere che copriva il cielo: molti sono scappati, molti sono morti, ma San Gennaro ci ha protetti, dicono. Ancora oggi, quando vedo il pennacchio di fumo, un po’ mi vengono i brividi."],
["Cosa mangiate?","Pane, verdure, legumi, tanto pesce fritto e frutti di mare. I maccheroni li mangiamo a pranzo nei giorni buoni, con il formaggio grattugiato. Dicono che nel 1692 un cuoco del viceré, Antonio Latini, scriverà la prima ricetta di salsa di pomodoro: ma non per i maccheroni, per i bolliti. Per quelli, a noi poveri, tocca aspettare."],
["Cos’è successo a Masaniello?","Era uno dei nostri: Tommaso Aniello, pescivendolo, poco più che ragazzo. Nel luglio 1647 arriva una nuova tassa sulla frutta e Piazza Mercato si ribella; lui diventa il capo del popolo, per dieci giorni, poi lo uccidono. Dicono che nel 1656 sia venuta anche la peste, e che quella sia stata anche peggio. Preferisco non pensarci."],
["Come vivete nelle case?","Nei bassi: una stanza a pianterreno con la porta sul vicolo, dove ci si sta tutti, dalla nonna ai bambini. Si cucina fuori, si lava fuori, si parla fuori. D’estate gli uomini vanno in giro in camicia e calzoni corti, e i bambini scalzi: noi ci stiamo bene, perché c’è sempre gente."],
["Che feste avete?","San Gennaro, tre volte l’anno, quando si aspetta che il sangue si sciolga: se succede, dicono, la città sta bene. E poi le grandi feste del viceré, con la cuccagna: dicono che si costruisca una montagna di cibo e la folla ci si getti sopra a prendere pane e salumi. Una festa dove tutti mangiano a sazietà, almeno una volta."],
["C’è musica a Napoli?","Dappertutto: cantastorie con la chitarra, venditori che cantano il prezzo, feste con tamburelli. E a teatro la maschera di Pulcinella, che secondo gli studiosi nasce proprio in questi decenni: furbo, affamato e sempre in guai. Un po’ come noi."],
["E i pittori?","Il pittore Caravaggio, venuto da Roma in fuga, nel 1607 ha dipinto per il Pio Monte della Misericordia un quadro enorme con sette opere di carità, e la gente c’è andata in fila. Dicono che dopo di lui siano arrivati altri pittori, come Ribera e una donna, Artemisia Gentileschi. Io non capisco di pittura, ma capisco quando una cosa è vera."],
["Dove vado dopo?","Prendi la strada per Roma e poi sempre verso nord, fino alla pianura: troverai Nicolò, un postiglione, che conosce tutte le strade d’Italia e tutte le locande. Digli che gli mando i saluti di Napoli e una sarda fritta."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e statte buono! Se ripassi di qui, ti riservo il pesce più fresco, quello che non vendo agli altri. Servo vostro: salute e buona ventura!"]
],
sc_nicolo:[
["Chi sei e che fai?","Nicolò, quarantaquattro anni, postiglione. Ogni giornata di cammino c’è una stazione di posta: io porto la carrozza o le lettere fino alla prossima, poi cambio i cavalli e riparto. La polvere, il fango e la pioggia sono i miei compagni di viaggio."],
["Come funziona la posta?","Si paga per i cavalli e per il postiglione, e a ogni stazione ne trovi di freschi. È il modo più veloce di viaggiare, ma costa molto: i ricchi vanno in posta, i poveri a piedi. Le lettere partono da una città e passano da una stazione all’altra: da Roma a Venezia, con il bel tempo, ci vuole più o meno una settimana."],
["Cosa sono i confini?","L’Italia è un mosaico: oggi sei nel territorio del re di Spagna, domani in quello del papa, poi del duca di Modena, poi della Serenissima. A ogni confine c’è una dogana: documenti, tasse, monete diverse e pesi diversi. Chi non ha pazienza non viaggia."],
["Com’è la strada?","Una trincea di polvere d’estate e di fango d’inverno, con ponti di legno e di pietra, e traghetti sui fiumi grandi. Ci sono pietre miliari, croci e edicole, e nei punti peggiori qualche brigante: per questo si viaggia in gruppo, a volte con una scorta. E per i cavalli si fa un voto ogni giorno."],
["Com’è una carrozza?","Una cassa di legno con le tende di cuoio, i sedili imbottiti e le cinghie al posto delle molle: sobbalza come una barca nella tempesta. Chi può, la paga a caro prezzo, chi non può va a piedi o in groppa a un mulo. Le signore, in città, usano la portantina, trasportata da due uomini."],
["Cosa si trova nelle locande?","Una minestra calda, un fiasco di vino, un letto, spesso diviso con degli sconosciuti. D’inverno il posto migliore è vicino al camino. Gli osti sanno tutto di tutti: nelle locande passano notizie più veloci delle lettere, e anche le pulci."],
["Com’è l’Anno Santo?","Fatica doppia! Nel 1650 la strada era piena di pellegrini diretti a Roma, a piedi, con il bastone e il mantello, e le locande scoppiavano. Dicono che anche nel 1675 e nel 1700 sarà lo stesso: l’Anno Santo viene ogni venticinque anni, e chi fa il mio mestiere lo ricorda."],
["Chi sono i viaggiatori stranieri?","Giovani signori, soprattutto inglesi, con un precettore, che girano l’Italia per vedere antichità e opere d’arte. Dicono che nel 1670 un prete inglese, Lassels, scriverà una guida chiamando questo viaggio \"Grand Tour\". E anche un poeta, John Milton, nel 1638 ha visitato l’Italia e, si racconta, ha incontrato il vecchio Galileo a Firenze."],
["Come ci si protegge dalle malattie?","Con la \"fede di sanità\": un documento che dice che vieni da un luogo senza peste. Se non ce l’hai, ti fermano alla dogana o ti mandano in quarantena. In tempi di epidemia si chiudono strade e porti, e il mio mestiere si ferma: la peste del 1630 ci ha insegnato la prudenza."],
["Come contate le ore?","All’italiana: il giorno comincia al tramonto, con l’Ave Maria, e le ore si contano da lì, fino a ventiquattro. Se mi dici \"le diciotto\", io capisco che mancano sei ore al prossimo tramonto, cioè che è quasi mezzogiorno. Per i viaggiatori stranieri è un rompicapo, e io mi diverto a confonderli."],
["Dove vado dopo?","A Padova, verso nord-est, a due passi da Venezia: lì c’è lo Studio, l’università, e un professore famoso, Galileo, che costruisce cannocchiali. Digli che Nicolò, il postiglione, gli augura buon vento e un cielo senza nuvole."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e che la strada ti sia leggera e i cavalli docili. Se ripassi, ti do un passaggio fino alla prossima stazione, a metà prezzo. Servo vostro: salute e buona ventura!"]
],
sc_galileo:[
["Chi sei e che fai?","Galileo Galilei, nato a Pisa nel 1564, figlio di un musicista, Vincenzo. Da ragazzo dovevo fare il medico, ma mi sono innamorato della matematica. Dal 1592 insegno qui a Padova, e dirò che questi diciotto anni sono stati i migliori della mia vita."],
["Cosa insegni?","Geometria, meccanica e astronomia. Tengo lezioni allo Studio e lezioni private a casa, per studenti che vengono da tutta Europa. Ho anche inventato un compasso di ottone, il compasso geometrico e militare, e ne faccio fare a un artigiano qui in casa: serve per misurare, calcolare e anche per cannoneggiare."],
["Com’è lo Studio di Padova?","Una delle università più antiche e libere: ci vengono giovani da ogni Paese, organizzati in \"nazioni\", e la Repubblica di Venezia lascia insegnare con una libertà che altrove sarebbe pericolosa. Le lezioni si tengono in latino, nel Palazzo del Bo, e nel teatro anatomico, dove i medici dissezionano, c’è sempre la fila."],
["Dove vivi, e con chi?","In una casa con giardino, piena di studenti ospiti e di strumenti. Vivo con Marina Gamba, veneziana, e abbiamo tre figli: Virginia, Livia e Vincenzo. Con i miei studenti sembro più un capofamiglia che un professore. La sera si suona: io mi diletto con il liuto, come mio padre."],
["Com’è nato il cannocchiale?","Nel 1608 si dice, dall’Olanda, che sia stato costruito un tubo con due lenti che fa vedere vicino ciò che è lontano. Non l’ho inventato io: l’ho costruito dopo aver sentito la voce, ho fatto lenti migliori e l’ho perfezionato, da tre a otto, poi venti, poi trenta ingrandimenti. Il merito, se c’è, è di averlo puntato al cielo."],
["Cos’è successo a Venezia?","Nell’agosto del 1609 sono salito sul campanile di San Marco con il doge Leonardo Donà e i senatori: da lassù si vedevano le navi molto prima che arrivassero in porto. Erano stupiti. Il governo mi ha confermato la cattedra e mi ha aumentato lo stipendio: una bella ricompensa, per un tubo."],
["Cosa hai visto sulla Luna?","Nel novembre del 1609 l’ho guardata con il cannocchiale: non è liscia e perfetta come si diceva, ma piena di monti e di valli, come la Terra. Ho disegnato tutto, a acquerello, notte dopo notte. Chi non ci vuole credere, venga a guardare."],
["E Giove?","Il 7 gennaio 1610 ho visto tre puntini luminosi vicino a Giove, in fila; la sera dopo avevano cambiato posto, e poco dopo erano quattro. Ho capito che sono lune che girano attorno a Giove: quindi non tutto gira attorno alla Terra. Le ho chiamate \"stelle medicee\", in onore dei Medici, e nel marzo del 1610 ho pubblicato a Venezia un libretto, il Sidereus Nuncius, il \"Messaggero delle stelle\", scritto in latino perché lo leggano i dotti di tutta Europa."],
["Cosa si mangia e si beve a Padova?","Zuppe di legumi, polenta, riso con i piselli, pesce di canale, formaggi e un buon vino dei Colli Euganei. L’orto botanico dello Studio coltiva piante portate da lontano: dicono che un botanico di qui, Prospero Alpini, abbia descritto il caffè già nel 1591. Io preferisco il vino, ma ogni tanto lo assaggio."],
["Cosa farai dopo Padova?","Nel 1610 il Granduca mi chiama a Firenze, e accetto. Dicono che nel 1633 sarò processato a Roma per le mie idee, costretto a ritrattare, e che morirò nel 1642 ad Arcetri, vicino a Firenze. La frase \"eppur si muove\" è una leggenda: ma i fatti, come le stelle, restano."],
["Dove vado dopo?","A Venezia: in barca lungo il Brenta, verso la laguna. Chiedi del maestro Monteverdi, a San Marco: ha fatto cantare l’aria come io ho fatto parlare il cielo. Stasera, dalla laguna, il cielo è per lui e per i naviganti: guarda in alto."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati: guarda, misura e dubita. Se ripassi, ti faccio guardare Giove dal terrazzo. Servo vostro: salute e buona ventura!"]
],
sc_monteverdi:[
["Chi sei e che fai?","Claudio Monteverdi, nato a Cremona, battezzato nel maggio del 1567. Da ragazzo ho studiato musica in Duomo con il maestro Ingegneri e a quindici anni stampavo già le mie prime composizioni. Poi sono andato a Mantova, alla corte dei Gonzaga, a suonare e comporre; dal 1613 sono qui, maestro di cappella di San Marco."],
["Cos’è l’Orfeo?","Una \"favola in musica\" sul mito di Orfeo, che ho fatto rappresentare a Mantova nel 1607: i personaggi non recitano soltanto, ma cantano, accompagnati da tanti strumenti. Dicono che sia uno dei primi grandi capolavori del genere che poi si chiamerà opera. A me bastava che la musica muovesse gli affetti."],
["Com’è la musica di San Marco?","Meravigliosa e un po’ faticosa: cantori, organi e strumenti come cornetti, tromboni e violini, che a volte si rispondono da punti diversi della basilica. Dirigo i cantori, scelgo le musiche per le feste e ne scrivo di nuove. Dopo la morte della moglie, intorno al 1632 mi sono fatto prete: una vita piena, direi."],
["Cos’è il teatro d’opera?","Un teatro dove chiunque paghi il biglietto può ascoltare cantanti, musicisti e vedere scene dipinte e macchine. Il primo aperto a tutti, quello di San Cassiano, ha aperto nel 1637. A più di settant’anni ho scritto per questi teatri opere come Il ritorno di Ulisse in patria e, dicono, La incoronazione di Poppea, nel 1643."],
["Com’è il Carnevale di Venezia?","Dura da dicembre fino al martedì grasso, e per tutto questo tempo tutti portano la maschera: la bauta, bianca, con il tricorno e il mantello nero, il tabarro, e per le donne la moretta, una maschera tonda di velluto. Sotto la maschera nobili e gente comune si mescolano; dal 1638 c’è anche il Ridotto, una sala per il gioco. E le frittelle, dolci, non mancano."],
["Cos’è successo con la peste del 1630?","Un anno terribile: tra il 1630 e il 1631 è morto quasi un terzo dei veneziani. Il Senato ha promesso di costruire una chiesa alla Madonna della Salute: la sta costruendo Longhena, e ogni 21 novembre, ricordando la fine della peste, la città attraversa il Canal Grande su un ponte di barche per andarci in processione."],
["Com’è governata Venezia?","Dalla Serenissima: il doge, scelto a vita fra i nobili, il Maggior Consiglio e il Senato, con regole complicatissime perché nessuno prenda troppo potere. Dicono che a partire dal 1645 e per ventiquattro anni, fino al 1669, Venezia sarà impegnata in una lunga guerra con i Turchi per difendere Candia, a Creta. Non è un racconto allegro."],
["Come si vive sull’acqua?","In barca, naturalmente. Le gondole sono nere, dicono per una legge contro il lusso, e il gondoliere rema in piedi, di poppa. Ci sono i traghetti per attraversare il Canal Grande, i canali da non confondere, e ogni tanto l’acqua alta, che invade le calli. Qui il rumore più bello è quello del remo."],
["Cosa si mangia a Venezia?","Pesce della laguna, sarde in saor, baccalà, polenta e risi e bisi, un piatto di riso con piselli che, si dice, si serviva al doge nella festa di San Marco. Si beve vino e acqua, e verso la fine del secolo, dicono, nelle botteghe di San Marco comincia a circolare anche il caffè, che arriva con le navi dall’Oriente."],
["Cos’è l’Arsenale?","Il grande cantiere della Repubblica, circondato da mura, dove carpentieri, calafati e cordai costruiscono e riparano le galee. A Rialto i mercanti vendono spezie, seta, legname e sale; a Murano i vetrai soffiano vetro per bicchieri, specchi e lampadari. Una città di mestieri, dove ognuno sa cosa fare."],
["Dove vado dopo?","In alto, Pierpaolo: sali sul campanile di San Marco. Lì, nel 1609, Galileo ha mostrato al doge il suo cannocchiale; stasera il cielo è sereno e, da lassù, puoi guardare le stelle come le guardano i naviganti. E poi, se vuoi, più in là, fino a Giove."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricordati che il mondo è fatto di armonia e di contrasti: una nota sola non fa musica. Dicono che morirò nel novembre del 1643 e sarò sepolto ai Frari, ma la musica, quella, resta. Servo vostro: salute e buona ventura!"]
]
};
Object.assign(TOPX,TOPX_SC);
})();
