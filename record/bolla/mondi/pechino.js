/* ---------- PECHINO · Dalla Piazza alla Stazione (Tiananmen, Città Proibita, Jingshan, hutong e Shichahai, Tempio del Cielo, Palazzo d'Estate, Muraglia a Mutianyu, Qianmen e Dashilan, Stazione Sud) ---------- */
/* Un'intera giornata da sinistra a destra: alba in Piazza Tiananmen, mattina nella Città Proibita e sulla collina Jingshan,
   mezzogiorno negli hutong e sul lago Shichahai, primo pomeriggio al Tempio del Cielo, pomeriggio al Palazzo d'Estate,
   tramonto sulla Grande Muraglia a Mutianyu, sera a Qianmen e Dashilan, notte alla Stazione Sud. In fondo al binario c'è il varco.
   Testi, tappe e dialoghi vengono da pechino.txt (definitivi). Gli oggetti stanno in elementi.js (nomi che iniziano per "pe"). */
(function(){
const GT=372,W1=17000;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln}=PR._rm;
const {nf,tetto,cols,balaus,pino,cipr,salice,cachi,lant,lit,PE,leone,gente}=PR._pe;
const md=(i,n)=>((i%n)+n)%n;
const RED='#a8231d',YEL='#e0b02a',YEL2='#b88814',MAR='#ece6d6',MAR2='#cdc5b0',GRY2='#6c6c6c',BLU='#2a5cb0',GRN='#3f8a5a',GOLD='#d9b24a',LIT='rgb(255,226,150)';
let TT=0;
const Z=[0,2400,4600,6600,8800,11000,13100,15500,W1+400];   /* inizio di ognuna delle 8 zone */
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
/* ---- cielo: alba rosata e velata, mattina azzurra, mezzogiorno chiaro, pomeriggio caldo e dorato, tramonto rosso-arancio, crepuscolo viola, notte ---- */
const SKY=[[0,['#9aa6c4','#f6c4b8','#ffe2c0']],[1200,['#8ab0dc','#e8d6d4','#fbe9cc']],[2400,['#7ab4ea','#cfe6f4','#f6f0e0']],[4600,['#74b0ea','#d4e8f4','#f8f4e8']],[6600,['#78aee4','#dce8e8','#fbefd0']],[8800,['#78a4d8','#ecd8b0','#fcd890']],[10200,['#7a9acc','#f0c690','#fcb470']],[11300,['#6a80c0','#f4a478','#ff8c4c']],[12400,['#5a5ab0','#ec7e6c','#ff7a48']],[13200,['#3c3a8c','#c8607a','#f08a58']],[13900,['#24287a','#6a4a94','#d8706e']],[14700,['#141c5a','#3a3a84','#7a5a8e']],[15600,['#0a1038','#1c2862','#4a3a6a']],[99999,['#0a1038','#1c2862','#4a3a6a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
/* ---- facciate di strada, zona per zona ---- */
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),top=gt-h;
 if(st==1){/* Tiananmen: edifici monumentali di pietra chiara con colonne e tetti verdi e gialli */
  const rc=hr(i*3)>.5?'#3f8a5a':'#d8a828';rect(g,'#4a463c',x,top,w,h);const n=Math.max(3,Math.floor(w/24));for(let q=0;q<n;q++){const px=x+4+q*(w-20)/(n-1);rect(g,'#e0d8c0',px,top+12,12,h-24);rect(g,'rgba(0,0,0,.14)',px+7,top+12,5,h-24);rect(g,'rgba(255,255,255,.3)',px,top+12,2,h-24)}
  if(k>.3)rect(g,'rgba(255,200,120,.35)',x+8,top+24,w-16,h-60);rect(g,'#d0c8b0',x-5,top+2,w+10,12);rect(g,'#b8b09c',x-4,gt-12,w+8,12);
  poly(g,rc,[[x-8,top+2],[x+14,top-24],[x+w-14,top-24],[x+w+8,top+2]]);rect(g,'rgba(0,0,0,.14)',x-4,top-4,w+8,5);rect(g,YEL,x+14,top-26,w-28,3);
  if(hr(i*5)>.45)pino(g,x+w+14,gt-2,.9,k);return}
 if(st==2){/* Città Proibita: mura rosse alte con cappello di tegole gialle, padiglioni dietro */
  if(hr(i*3)>.42){rect(g,RED,x+w*.1,top-46,w*.8,48);cols(g,x+w*.12,top+2,w*.76,48,5,'#c8281e');tetto(g,YEL,x+w*.5,top-46,w*1.02,34)}else if(hr(i*7)>.3)cipr(g,x+w*.5,top+4,1.3);
  rect(g,RED,x,top,w,h);rect(g,'rgba(255,255,255,.1)',x,top,5,h);rect(g,'rgba(0,0,0,.14)',x+w-12,top,12,h);rect(g,YEL2,x-4,top-9,w+8,9);for(let q=0;q<w/9;q++)rect(g,'rgba(60,30,0,.28)',x-4+q*9,top-9,1,9);rect(g,YEL,x-4,top-12,w+8,4);rect(g,MAR,x-3,gt-14,w+6,14);
  if(hr(i*5)>.78){ar(g,'#2a1410',x+w/2-18,gt-14,36,70);for(let r=0;r<5;r++)for(let q=0;q<3;q++)dot(g,GOLD,x+w/2-9+q*9,gt-60+r*9,1.6)}else for(let q=0;q<3;q++)rect(g,'rgba(0,0,0,.14)',x+w*(.2+q*.3),top+14,3,h-34);return}
 if(st==3){/* hutong: casette basse di mattoni grigi con tetti grigi e portoni rossi */
  const c=['#7e7c78','#74726e','#868480','#6e6c68'][md(i,4)];rect(g,c,x,top,w,h);for(let q=0;q<h/8;q++)rect(g,'rgba(0,0,0,.09)',x,top+q*8,w,1);rect(g,'rgba(255,255,255,.1)',x,top,5,h);rect(g,'rgba(0,0,0,.14)',x+w-12,top,12,h);
  tetto(g,GRY2,x+w/2,top,w+8,hr(i*3)>.5?20:14);
  for(let q=0;q<2;q++){const wx2=x+14+q*(w-54);rect(g,'#2a2826',x+0+wx2-x-2,top+20,36,26);rect(g,lit(k,i*5+q)?LIT:'#4a5058',wx2,top+22,32,22);for(let r=0;r<4;r++)rect(g,'#2a2826',wx2+r*8,top+22,1.6,22)}
  if(hr(i*7)>.35){const dx=x+w*.5-15;rect(g,'#5a3a22',dx-3,gt-66,36,6);rect(g,RED,dx,gt-60,30,60);rect(g,'rgba(0,0,0,.2)',dx+15,gt-60,1.6,60);for(let r=0;r<4;r++)for(let q=0;q<3;q++)dot(g,GOLD,dx+4+q*8,gt-52+r*11,1.5);lant(g,dx-6,gt-70,k,.5)}
  if(hr(i*9)>.6)cachi(g,x+w*.2,top-6,.9,k);return}
 if(st==4){/* Tempio del Cielo: muro rosso alto con cappello grigio e cipressi vecchi */
  if(hr(i*3)>.4){cipr(g,x+w*.3,top+2,1.4);cipr(g,x+w*.72,top+2,1.1)}else{rect(g,RED,x+w*.2,top-40,w*.6,42);tetto(g,BLU,x+w*.5,top-40,w*.74,28,true);dot(g,GOLD,x+w*.5,top-72,3)}
  rect(g,RED,x,top,w,h);rect(g,'rgba(255,255,255,.1)',x,top,5,h);rect(g,'rgba(0,0,0,.14)',x+w-12,top,12,h);rect(g,GRY2,x-4,top-8,w+8,8);rect(g,'#8a8a88',x-4,top-11,w+8,3);rect(g,MAR2,x-3,gt-10,w+6,10);for(let q=0;q<3;q++)rect(g,'rgba(0,0,0,.14)',x+w*(.2+q*.3),top+12,3,h-26);return}
 if(st==5){/* Palazzo d'Estate: padiglioni dai tetti verdi, rossi e dorati sulla collina, balaustre di marmo */
  const rc=['#3f8a5a','#c8a030','#2a8a6a','#b8402a'][md(i,4)];rect(g,'#6a9a50',x-6,top-10,w+12,h+10);for(let q=0;q<4;q++)dot(g,['#4a7a40','#5a8a46'][q%2],x+10+q*w/4,top-8,16);
  rect(g,RED,x+8,top+12,w-16,h-56);cols(g,x+10,top+12+h-56,w-20,h-56,6,'#c8281e');tetto(g,rc,x+w/2,top+12,w+6,32);rect(g,'#2a8a6a',x+10,top+14,w-20,5);
  rect(g,MAR,x-4,gt-34,w+8,34);balaus(g,x-4,gt-34,w+8,12);rect(g,'rgba(0,0,0,.1)',x-4,gt-6,w+8,6);if(hr(i*5)>.5)salice(g,x+w+6,gt-2,TT,.8);return}
 if(st==6){/* Mutianyu: pendio boscoso e un muretto di mattoni con merli */
  for(let q=0;q<5;q++)dot(g,['#2c4a28','#4a6a34','#6a7a34','#8a6a2a','#3a5a30'][(q+i)%5],x+q*w/4,top+28+hr(q+i)*20,28+hr(q*3+i)*12);
  rect(g,'#85817c',x,gt-44,w,44);for(let r=0;r<5;r++)rect(g,'rgba(0,0,0,.12)',x,gt-44+r*9,w,1);rect(g,'#a29e9a',x-3,gt-50,w+6,6);for(let q=0;q<w/18;q++){rect(g,'#85817c',x+q*18+2,gt-60,10,11);rect(g,'rgba(0,0,0,.22)',x+q*18+5,gt-56,3,6)}return}
 if(st==7){/* Qianmen e Dashilan: botteghe in stile Qing, legno scuro e rosso, insegne dorate, lanterne */
  rect(g,'#4a3022',x,top,w,h);rect(g,'rgba(255,255,255,.07)',x,top,5,h);rect(g,'rgba(0,0,0,.18)',x+w-12,top,12,h);
  rect(g,['#7a2a1c','#2a4a6a','#5a1f2a','#2a4a3a'][md(i,4)],x+6,top+10,w-12,h-100);const n=Math.max(2,Math.floor(w/44));for(let q=0;q<n;q++){const wx2=x+14+q*((w-28-26)/Math.max(1,n-1));rect(g,'#2a1810',wx2-2,top+18,30,46);rect(g,lit(k,i*5+q+40)?LIT:'#3a4650',wx2,top+20,26,42);for(let r=1;r<4;r++)rect(g,'#2a1810',wx2,top+20+r*10.5,26,1.2)}
  rect(g,RED,x+2,gt-92,w-4,9);tetto(g,GRY2,x+w/2,top,w+10,18);rect(g,'#3a2a1c',x+6,gt-80,w-12,68);rect(g,k>.15?'rgb(255,214,140)':'#9aa8a0',x+12,gt-72,w-24,48);for(let q=1;q<Math.floor((w-24)/46);q++)rect(g,'#2a1810',x+12+q*46,gt-72,3,48);
  rect(g,'#14110f',x+w*.5-26,gt-96,52,14);rect(g,GOLD,x+w*.5-26,gt-96,52,1.4);txt(g,['茶庄','丝绸','布鞋','药铺','点心','烤鸭'][md(i,6)],x+w*.5,gt-84,11,'#f6e08a');
  for(let q=0;q<2;q++)lant(g,x+14+q*(w-28),gt-94,k,.7);if(k>.15)glow(g,x+w/2,gt-46,w*.5,'255,200,110',.22);return}
 /* 8: Stazione Sud: torri di uffici illuminate */
 rect(g,['#2c3a4e','#26344a','#34445a'][md(i,3)],x,top,w,h);rect(g,'rgba(255,255,255,.1)',x,top,5,h);rect(g,'rgba(0,0,0,.16)',x+w-12,top,12,h);const nc=Math.max(3,Math.floor(w/16)),nr=Math.floor(h/15);for(let r=0;r<nr;r++)for(let q=0;q<nc;q++){const L=k>.3?hr(i*13+r*7+q)>.3:hr(i*13+r*7+q)>.8;rect(g,L?(hr(r+q)>.5?'rgb(255,236,190)':'rgb(200,226,255)'):'#3c5068',x+5+q*(w-10)/nc,top+6+r*15,(w-10)/nc-3,9)}
 rect(g,'#aab4c0',x-2,top-4,w+4,5);if(hr(i*3)>.5){ln(g,'#aab4c0',2,[x+w/2,top-4,x+w/2,top-26]);if(k>.3&&Math.sin(TT*3+i)>0)dot(g,'#ff4a3a',x+w/2,top-27,2.2)}}
/* ---- livello 0: cielo, sole, luna, nuvole mobili, foschia dell'alba e polvere dorata ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-14000)/1600,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/13000,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*250;
 if(xs<13400){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,15)}
 const mu=cl((xs-13500)/3000,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*210;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<2400?'rgba(252,226,222,.74)':xs<10600?'rgba(255,252,246,.8)':xs<12800?'rgba(255,170,130,.7)':'rgba(140,120,190,.4)';
 each(o-((t*6)%340)*.02,340,1,(x,i,r)=>nube(g,x+r*100,40+r*46,.9+r*.5,cc));
 const fo=cl(1-xs/2200,0,1)*.42;if(fo>.01){g.fillStyle='rgba(252,206,196,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const du=cl(1-xs/9000,0,1)*.1;if(du>.01){g.fillStyle='rgba(240,214,160,'+du+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-8800)/1000,0,1)*cl((11600-xs)/900,0,1)*.14;if(wm>.01){g.fillStyle='rgba(255,208,140,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-10800)/800,0,1)*cl((13800-xs)/900,0,1)*.22;if(wg>.01){g.fillStyle='rgba(255,100,60,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: cresta dei monti con la Muraglia, i tetti gialli della Città Proibita, la collina Jingshan, il tempio blu, la collina del Palazzo d'Estate, i grattacieli e i binari ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 g.fillStyle=dim('#b4bed0');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20,ph=hz-10-8*Math.abs(Math.sin((px+o)*.021))-5*Math.sin((px+o)*.05+1)-4*Math.sin((px+o)*.12);g.lineTo(px,ph)}g.lineTo(480,hz+30);g.closePath();g.fill();
 /* monti a nord con la Muraglia sul crinale */
 const vm=env(12100,3000);if(vm>.02){g.globalAlpha=vm;const base=hz+30;g.fillStyle=dim('#7e8c9c');g.beginPath();g.moveTo(0,base);for(let q=0;q<=24;q++){const px=q*20,h=60+34*Math.sin((px+o)*.012+1)+22*Math.sin((px+o)*.031)+10*Math.sin((px+o)*.09);g.lineTo(px,hz-h+20)}g.lineTo(480,base);g.closePath();g.fill();
  g.strokeStyle=dim('#5a4e4a');g.lineWidth=2.4;g.beginPath();for(let q=0;q<=24;q++){const px=q*20,h=60+34*Math.sin((px+o)*.012+1)+22*Math.sin((px+o)*.031)+10*Math.sin((px+o)*.09);q?g.lineTo(px,hz-h+16):g.moveTo(px,hz-h+16)}g.stroke();
  for(let q=0;q<9;q++){const px=((q*61-o*1)%540+540)%540-30,h=60+34*Math.sin((px+o)*.012+1)+22*Math.sin((px+o)*.031)+10*Math.sin((px+o)*.09);rect(g,dim('#5a4e4a'),px-3,hz-h+6,7,11)}g.globalAlpha=1}
 g.fillStyle=dim('#94a2b6');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20,ph=hz-2-6*Math.sin((px+o)*.03+2)-4*Math.sin((px+o)*.09);g.lineTo(px,ph)}g.lineTo(480,hz+30);g.closePath();g.fill();
 /* piazza: grandi edifici e mura rosse */
 const v1=env(1100,2400);if(v1>.02){g.globalAlpha=.85*v1;const sx=fx(1100);[[-150,70,50],[-90,60,36],[100,64,44],[170,76,56]].forEach(b=>{rect(g,dim('#c4bcae'),sx+b[0]-b[1]/2,hz+12-b[2],b[1],b[2]);rect(g,dim('#4a8a5a'),sx+b[0]-b[1]/2-3,hz+12-b[2]-6,b[1]+6,7)});rect(g,dim('#b8403a'),sx-70,hz-26,150,38);tetto(g,dim('#d8a828'),sx+5,hz-26,150,18);g.globalAlpha=1}
 /* Città Proibita e collina Jingshan */
 const v2=env(3600,2800);if(v2>.02){g.globalAlpha=.9*v2;const sx=fx(3600);rect(g,dim('#b0403a'),sx-150,hz-6,300,20);for(let q=0;q<6;q++)tetto(g,dim('#d8a828'),sx-120+q*48,hz-6,40+(q%3)*8,12+(q%2)*5);
  g.fillStyle=dim('#6a8a5e');g.beginPath();g.moveTo(sx+80,hz+14);g.quadraticCurveTo(sx+120,hz-70,sx+170,hz-72);g.quadraticCurveTo(sx+220,hz-70,sx+250,hz+14);g.closePath();g.fill();rect(g,dim('#b0403a'),sx+160,hz-90,20,16);tetto(g,dim('#d8a828'),sx+170,hz-90,32,12);g.globalAlpha=1}
 /* tempio blu */
 const v3=env(7800,2400);if(v3>.02){g.globalAlpha=.9*v3;const sx=fx(7800);rect(g,dim('#b0403a'),sx-70,hz-4,140,18);rect(g,dim('#a8322a'),sx-24,hz-28,48,26);tetto(g,dim('#3a68b8'),sx,hz-24,84,26,true);tetto(g,dim('#3a68b8'),sx,hz-40,60,20,true);dot(g,dim('#d9b24a'),sx,hz-66,3);g.globalAlpha=1}
 /* collina della Longevità con la Torre dell'Incenso */
 const v4=env(9900,2600);if(v4>.02){g.globalAlpha=.92*v4;const sx=fx(9900);g.fillStyle=dim('#7a9a68');g.beginPath();g.moveTo(sx-160,hz+16);g.quadraticCurveTo(sx-60,hz-90,sx+10,hz-92);g.quadraticCurveTo(sx+90,hz-90,sx+170,hz+16);g.closePath();g.fill();
  rect(g,dim('#a8402a'),sx-6,hz-114,16,26);tetto(g,dim('#3f8a5a'),sx+2,hz-110,30,9);tetto(g,dim('#c8a030'),sx+2,hz-122,22,8);dot(g,dim('#d9b24a'),sx+2,hz-136,2);for(let q=0;q<5;q++){rect(g,dim('#b8402a'),sx-110+q*38,hz-30-(q%2)*16,16,10);tetto(g,dim('#3f8a5a'),sx-102+q*38,hz-30-(q%2)*16,26,8)}g.globalAlpha=1}
 /* grattacieli e luci della stazione */
 const v5=env(16200,3200);if(v5>.02){g.globalAlpha=.92*v5;const sx=fx(16200);[[-180,34,84],[-140,26,110],[-100,40,70],[-30,30,132],[10,44,96],[70,30,150],[120,36,90],[170,28,118],[220,40,76]].forEach((b,i)=>{rect(g,dim('#8a96aa'),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2]);if(night>.3)for(let q=0;q<b[2]/9;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.85)',sx+b[0]-b[1]/2+3+(q%3)*8,hz+20-b[2]+q*9,4,3)});
  ln(g,dim('#6a7488'),2,[sx-250,hz-60,sx-250,hz+14]);ln(g,dim('#6a7488'),2,[sx-250,hz-60,sx-200,hz-60]);g.globalAlpha=1}
 if(night>.35)for(let q=0;q<46;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.3)+')',q*11+hr(q)*8,hz+20+hr(q*3)*8,1.2)}
/* ---- livello 2: i profili di mura, tetti, chiome e colline, zona per zona ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;
  if(zz==1){rect(g,dim('#b8403a'),x,hz-26-r*10,w,36+r*10);rect(g,dim('#d8a828'),x-3,hz-30-r*10,w+6,5);if(hr(i*3)>.45){rect(g,dim('#d6ceb8'),x+8,hz-86-r*20,w-16,90+r*20);rect(g,dim('#3f8a5a'),x+4,hz-92-r*20,w-8,7)}else{el(g,dim('#3a6a40'),x+30,hz-46,20,14);el(g,dim('#3a6a40'),x+70,hz-40,18,12)}}
  else if(zz==2){rect(g,dim('#b8403a'),x,hz-40-r*10,w,50+r*10);rect(g,dim('#d8a828'),x-3,hz-44-r*10,w+6,6);if(hr(i*3)>.3)tetto(g,dim('#d8a828'),x+w/2,hz-44-r*10,w+20,26+r*10);else el(g,dim('#2c4a30'),x+w/2,hz-70,18,40)}
  else if(zz==3){for(let q=0;q<3;q++){const hx2=x+q*36,hh=20+hr(i*3+q)*18;rect(g,dim('#7e7c78'),hx2,hz-hh,34,hh+8);poly(g,dim('#5e5c5a'),[[hx2-3,hz-hh],[hx2+6,hz-hh-9],[hx2+28,hz-hh-9],[hx2+37,hz-hh]])}el(g,dim('#4a7a40'),x+20+r*50,hz-50,24,22);el(g,dim('#5a8a46'),x+70,hz-44,20,16)}
  else if(zz==4){el(g,dim('#2c4a30'),x+30,hz-46,26,44);el(g,dim('#3a5c3a'),x+70,hz-38,22,34);if(hr(i*3)>.65){rect(g,dim('#a8322a'),x+30,hz-24,48,26);tetto(g,dim('#3a68b8'),x+54,hz-22,72,24,true)}else rect(g,dim('#a8322a'),x,hz-24,w,34)}
  else if(zz==5){g.fillStyle=dim('#6a9a58');g.beginPath();g.ellipse(x+54,hz+10,64,40+r*30,0,Math.PI,0);g.fill();if(hr(i*3)>.4){rect(g,dim('#a8402a'),x+40,hz-52-r*30,24,18);tetto(g,dim('#3f8a5a'),x+52,hz-52-r*30,40,12)}el(g,dim('#5a8a3a'),x+90,hz-24,14,18)}
  else if(zz==6){g.fillStyle=dim(['#5a7a4a','#6a8a4a','#7a8a4a'][md(i,3)]);g.beginPath();g.ellipse(x+54,hz+20,76,60+r*50,0,Math.PI,0);g.fill();for(let q=0;q<5;q++)dot(g,dim(['#8a6a2a','#4a6a34','#a8722a'][q%3]),x+14+q*20,hz-14-hr(q+i)*40,9)}
  else if(zz==7){rect(g,dim('#4a3022'),x,hz-30-r*16,w,40+r*16);tetto(g,dim('#5a5a5a'),x+w/2,hz-30-r*16,w+14,16);if(night>.3){rect(g,'rgba(255,200,120,.8)',x+16,hz-18,w-32,6);for(let q=0;q<3;q++)dot(g,'rgba(255,90,50,.9)',x+20+q*34,hz-34-r*16,3)}if(hr(i*3)>.8){rect(g,dim('#8a96aa'),x+40,hz-110,30,120);if(night>.3)for(let q=0;q<9;q++)rect(g,'rgba(255,226,160,.8)',x+44+(q%3)*8,hz-104+q*9,4,3)}}
  else{rect(g,dim('#8a96aa'),x+10,hz-50-r*90,50+r*20,60+r*90);if(night>.3)for(let q=0;q<14;q++)if(hr(i*9+q)>.4)rect(g,'rgba(255,226,160,.85)',x+14+(q%4)*10,hz-44-r*90+Math.floor(q/4)*12,5,4);rect(g,dim('#aab4c0'),x+70,hz-26,36,36)}});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
/* ---- livello 3: la strada, zona per zona ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,0,2400,1,i=>150+hr(i*5)*70,150);
 each2(170,8,2400,4600,2,i=>104+hr(i*5)*40,150);
 each2(170,9,4600,6600,3,i=>84+hr(i*5)*44,150);
 each2(180,10,6600,8800,4,i=>110+hr(i*5)*40,160);
 each2(180,11,8800,11000,5,i=>92+hr(i*5)*40,150);
 each2(170,12,11000,13100,6,i=>130+hr(i*5)*80,150);
 each2(170,13,13100,15500,7,i=>150+hr(i*5)*50,150);
 each2(170,14,15500,W1+400,8,i=>200+hr(i*5)*130,130);
 /* fili elettrici sospesi sopra gli hutong */
 if(o+480>4600&&o<6600){g.strokeStyle='rgba(30,30,34,.7)';g.lineWidth=1;for(let q=0;q<14;q++){const wx=4700+q*140,x=wx-o;if(x<-150||x>630)continue;const a2=gt-70-hr(q)*30;g.beginPath();g.moveTo(x,a2);g.quadraticCurveTo(x+70,a2+22,x+140,a2+(hr(q+1)-.5)*20);g.stroke()}}}
/* ---- vita: piccioni sulla piazza, gazze sui tetti, rondini sugli hutong, gatti, tram storico, bici ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 [320,880,1300,1900,2250].forEach((cx,gi)=>{for(let i=0;i<5;i++){const wx=cx+i*38+hr(i+gi)*26,px=wx-cam;if(px<-20||px>500)continue;A.setDK(nf(wx));const fly=(Math.sin(t*.3+i*2.1+gi)>.93);const by=GT+36+hr(i*3+gi)*60-(fly?30+Math.sin(t*9+i)*8:0),bx=px+Math.sin(t*.5+i)*10;
  el(g,'#8a8e9a',bx,by-5,6,3.6);dot(g,'#6a7a8a',bx+5,by-8,2.8);rect(g,'#d8a0a8',bx+7.4,by-8,2,1);if(fly){ln(g,'#9aa0aa',1.6,[bx-2,by-6,bx-8,by-12-Math.sin(t*9+i)*4]);ln(g,'#9aa0aa',1.6,[bx+1,by-6,bx+7,by-12-Math.sin(t*9+i)*4])}else{rect(g,'#6a6e78',bx-2,by-2,1,3);rect(g,'#6a6e78',bx+1,by-2,1,3)}}});
 const ga=cl((xs-2200)/500,0,1)*cl((4800-xs)/600,0,1)+cl((xs-6500)/400,0,1)*cl((8900-xs)/500,0,1);
 if(ga>.05)for(let i=0;i<5;i++){const bx=((i*131+t*(40+i*7))%640)-80,by=60+hr(i)*100+Math.sin(t*1.6+i*2)*20,w=Math.sin(t*8+i)*4;g.strokeStyle='rgba(30,30,36,'+(.9*Math.min(1,ga))+')';g.lineWidth=2.2;g.beginPath();g.moveTo(bx-9,by+w);g.quadraticCurveTo(bx-4,by-4,bx,by);g.quadraticCurveTo(bx+4,by-4,bx+9,by+w);g.stroke();rect(g,'rgba(250,250,250,'+(.9*Math.min(1,ga))+')',bx-2,by,4,3)}
 const sa=cl((xs-4400)/500,0,1)*cl((6900-xs)/700,0,1);
 if(sa>.05)for(let i=0;i<8;i++){const bx=((i*97+t*(64+i*6))%620)-70,by=70+hr(i)*120+Math.sin(t*2.4+i*2)*26,w=Math.sin(t*14+i)*3;g.strokeStyle='rgba(30,26,44,'+(.8*sa)+')';g.lineWidth=2;g.beginPath();g.moveTo(bx-8,by-w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke()}
 [5430,5900,6180].forEach((cx,ci)=>{const px=cx-cam;if(px<-30||px>510)return;A.setDK(nf(cx));const cy=GT+48+ci*10;el(g,'#5a4a3e',px,cy-5,8,4.4);dot(g,'#5a4a3e',px+7,cy-9,3.4);poly(g,'#5a4a3e',[[px+5,cy-11],[px+6,cy-16],[px+9,cy-11]]);poly(g,'#5a4a3e',[[px+8,cy-11],[px+11,cy-15],[px+11,cy-10]]);ln(g,'#5a4a3e',2,[px-8,cy-5,px-14,cy-8+Math.sin(t*2+ci)*3,px-17,cy-3])});
 /* tram storico che passa lungo Qianmen */
 {const a=13800,b=15300,sp=26,wx=a+((t*sp)%(b-a)),px=wx-cam;if(px>-120&&px<600){const sv=AVCAM;AVCAM=wx;g.save();g.translate(px,GT+30);g.scale(.5,.5);PR.petram(g,0,0,t,0);g.restore();AVCAM=sv}}
 /* ciclisti */
 [[4700,6500,34,0],[13200,15300,-30,1]].forEach((rg,ri)=>{for(let i=0;i<3;i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.2),wx=rg[0]+(((t*sp+i*span/3)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));const d=sp>0?1:-1,by=GT+20+i*9;g.save();g.translate(px,by);g.scale(d*.6,.6);[[-13,0],[13,0]].forEach(w=>{g.strokeStyle=tn('#2a2a2e');g.lineWidth=2.4;g.beginPath();g.arc(w[0],-10,10,0,7);g.stroke()});ln(g,['#2a6aaa','#c8302a','#2a8a5a'][(i+ri)%3],2.4,[-13,-10,-2,-24,8,-24,13,-10]);fig(g,-2,-16,t,{f:1,s:.55,skin:'#e0b090',top:['#e8d8c0','#6a8aa8','#c8503a'][i],bot:'#2c3a5a',hair:'#1a1a1a'});g.restore()}})}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[0,2400,'#b4aea0','g'],[2400,4600,'#c6c0b2','m'],[4600,6600,'#8e8a84','h'],[6600,8800,'#cac4b2','m'],[8800,9450,'#a09a8a','r'],[9450,10100,'#8a6a48','w'],[10100,11000,'#a09a8a','r'],[11000,13100,'#8a8478','s'],[13100,15500,'#c0b8a8','m'],[15500,W1+400,'#a6a8ae','p']];
 rect(g,'#d8d0bc',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  if(z[3]=='g'||z[3]=='m'||z[3]=='p'||z[3]=='h'){const big=z[3]=='g'?1.5:z[3]=='m'?1.15:1,y0=z[3]=='h'?36:0;if(z[3]=='h'){rect(g,'#4a4c54',x0,gt+3,x1-x0,y0);rect(g,'rgba(255,255,255,.3)',x0,gt+3+y0-2,x1-x0,2)}
   for(let r=0;r<7;r++){const yy=gt+9+y0+r*19*(z[3]=='h'?.82:1),off=(r%2)*(z[3]=='h'?30:0),bw=((z[3]=='h'?50:70)+r*12)*big,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil((x1-x0)/bw)+2;k++){const px=s0+k*bw-cam+off,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,.12)':hh>.35?'rgba(0,0,0,.05)':'rgba(255,255,255,.04)',px,yy,bw-2,15);rect(g,'rgba(0,0,0,.16)',px,yy,1.3,17)}rect(g,'rgba(0,0,0,.1)',x0,yy+15,x1-x0,1.4)}
   if(z[3]=='p'){rect(g,'#5a5e66',x0,gt+3,x1-x0,22);rect(g,'#e8d84a',x0,gt+25,x1-x0,3)}}
  if(z[3]=='r'||z[3]=='w'){if(z[3]=='w'){for(let r=0;r<7;r++){const yy=gt+3+r*21,bw=90+r*14,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil((x1-x0)/bw)+2;k++){const px=s0+k*bw-cam,h2=hr(k*13+r*5);rect(g,h2>.6?'rgba(255,230,180,.12)':h2>.3?'rgba(60,40,20,.12)':'rgba(0,0,0,.03)',px+1,yy+1,bw-2,19);rect(g,'rgba(40,24,10,.3)',px,yy,1.4,21)}rect(g,'rgba(40,24,10,.3)',x0,yy,x1-x0,1.4)}}
   else{for(let q=0;q<90;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.14)':'rgba(40,30,20,.18)',x0+((q*47)%Math.max(1,x1-x0)),gt+8+hr(q+3)*138,2+hr(q)*4,1.6);rect(g,'rgba(120,150,170,.12)',x0,gt+3,x1-x0,14)}}
  if(z[3]=='s'){for(let r=0;r<8;r++){const yy=gt+3+r*19,hh=hr(r*7);rect(g,hh>.5?'rgba(255,255,255,.08)':'rgba(0,0,0,.08)',x0,yy,x1-x0,19);rect(g,'rgba(0,0,0,.28)',x0,yy+17,x1-x0,2.4);rect(g,'rgba(255,255,255,.16)',x0,yy,x1-x0,1.6);const bw=34+hh*30,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil((x1-x0)/bw)+2;k++)if(hr(k*5+r*11)>.55)rect(g,'rgba(0,0,0,.2)',s0+k*bw-cam+hh*20,yy+2,1.4,15)}}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1400,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const gd=cl((cam-8600)/700,0,1)*cl((11000-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.1*gd)+')',0,gt,480,150);
 const sg=cl((cam-10800)/700,0,1)*cl((13200-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.15*sg)+')',0,gt,480,150);
 const ng=cl((cam-13300)/500,0,1)*cl((15400-cam)/500,0,1);if(ng>.02){const gg=g.createLinearGradient(0,gt+40,0,gt+150);gg.addColorStop(0,'rgba(255,70,50,'+(.2*ng)+')');gg.addColorStop(1,'rgba(255,70,50,0)');g.fillStyle=gg;g.fillRect(0,gt+40,480,110)}}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- testi della scheda (nomi, prime battute, tappe) ---- */
const LX=[560,1150,1650,2090,2900,3470,3990,4380,5050,5560,6020,6420,7080,7600,8130,8560,9200,9780,10300,10810,11500,12080,12640,13480,14250,14800,15170,15850,16250,16630];
const LKTXT=[
`La Porta della Pace Celeste, Tiananmen: l’ingresso nord della piazza e della Città Imperiale, costruita nel 1417. Dal suo balcone, il 1° ottobre 1949, fu proclamata la Repubblica Popolare Cinese. Da questa porta prende il nome la piazza.`,
`Piazza Tiananmen: circa 765 metri per 282, fra le piazze più grandi del mondo. A nord la porta, a sud Zhengyangmen; al centro il Monumento agli Eroi del Popolo. Un luogo di cerimonie e di storia, da guardare con rispetto.`,
`Ogni giorno, all’alba e al tramonto, la bandiera nazionale viene alzata e ammainata con una cerimonia. Molti pechinesi e visitatori arrivano presto per vederla, in silenzio.`,
`Sui lati della piazza, ad ovest il Grande Palazzo del Popolo, ad est il Museo Nazionale della Cina: grandi edifici pubblici di pietra, costruiti nel Novecento. Il Palazzo del Popolo, si dice, fu costruito in soli dieci mesi, fra il 1958 e il 1959.`,
`La Porta Meridiana, Wumen: l’ingresso sud della Città Proibita, dove oggi entrano i visitatori. La Città Proibita fu costruita fra il 1406 e il 1420; dalle sue mura rosse, alte 10 metri, e dal fossato largo 52 metri è circondata.`,
`La Sala dell’Armonia Suprema, Taihedian: il più grande edificio della Città Proibita. Qui si tenevano le incoronazioni e le grandi cerimonie di Stato; dentro c’è il Trono del Drago.`,
`Ventiquattro imperatori, quattordici Ming e dieci Qing, hanno abitato qui dal 1420 al 1912. Il nome, "Città Proibita", viene da "viola" e da "proibita": il viola è la stella polare, la dimora dell’imperatore celeste. Dal 1925 è il Museo del Palazzo; dal 1987, Patrimonio UNESCO.`,
`La collina Jingshan, subito a nord della Città Proibita: un piccolo parco con una collina artificiale e cinque padiglioni. In cima si vede tutta la Città Proibita, con le sue file di tetti gialli. Qui, nel 1644, morì l’ultimo imperatore Ming.`,
`Il lago Shichahai: tre laghi collegati, nel cuore dei vecchi quartieri. Salici, ponti di pietra e barche, e intorno i vicoli degli hutong. Qui si viene a passeggiare, a pescare e a bere un tè.`,
`Il vicolo Nanluoguxiang: lungo circa 800 metri, costruito in epoca Yuan, con il nome attuale dal Settecento. Oggi è pieno di botteghe, gelaterie e caffè, ma dietro ci sono ancora le vecchie case.`,
`Il siheyuan: la casa a corte tipica dei vecchi hutong. Quattro edifici bassi attorno a un cortile quadrato, con un portone rosso verso il vicolo. Un tempo ce n’erano più di 26.000; oggi ne restano poche centinaia ben conservate.`,
`La casa di Lao She, lo scrittore pechinese nato nel 1899: oggi è un museo, aperto nel 1999, in un piccolo cortile con alberi. Il suo romanzo più famoso, Il ragazzo del risciò, è del 1936.`,
`La Sala della Preghiera per i Buoni Raccolti: un edificio rotondo alto 38 metri, con tre tetti blu. È tutto di legno, senza un chiodo di metallo. L’imperatore vi pregava per un buon raccolto.`,
`L’Altare Circolare: una piattaforma vuota a tre livelli, costruita nel 1530 e rifatta nel 1740. Qui l’imperatore, nel solstizio d’inverno, compiva il rito più importante. Si dice che i gradini e le lastre siano in multipli di nove.`,
`La Volta Imperiale del Cielo e il Muro dell’Eco: un edificio rotondo, circondato da un muro liscio che, si dice, porta la voce da un lato all’altro. I bambini ci provano sempre.`,
`Il parco del Tempio del Cielo: circa 2,7 chilometri quadrati, Patrimonio UNESCO dal 1998. Al mattino e nel pomeriggio è pieno di pechinesi anziani che fanno tai chi, giocano a carte, cantano e fanno volare gli aquiloni.`,
`Il lago Kunming: un lago artificiale di 2,2 chilometri quadrati. La terra scavata servì a costruire la collina della Longevità, alta circa 60 metri. Circa tre quarti del Palazzo d’Estate sono acqua.`,
`Il Lungo Corridoio: 728 metri di galleria coperta lungo il lago, con pareti dipinte con scene di paesaggi e di storie classiche. Ci si ripara dal sole e dalla pioggia.`,
`La Barca di Marmo: lunga 36 metri. L’originale, di legno, fu bruciata nel 1860; la sostituta è di pietra, con due ruote a pale in stile occidentale. Sembra galleggiare sul lago.`,
`Il Ponte dei Diciassette Archi: lungo 150 metri, con diciassette archi diversi, che collega l’isola al lungolago. Fu ricostruito con il resto del palazzo nell’Ottocento.`,
`Mutianyu: un tratto di Muraglia di circa 2.250 metri con 22 torri di guardia, a circa 70 chilometri da Pechino. Il muro attuale è del periodo Ming, costruito sopra uno più antico, e restaurato dal 1983.`,
`Le torri di guardia: da qui si segnalavano i nemici con il fumo e il fuoco. Ogni torre ha feritoie, una stanza con il tetto di mattoni e una scala stretta.`,
`Per salire sul Mutianyu si può usare la funivia, e per scendere una pista di slittino su rotaia metallica. È un modo simpatico di tornare a valle, dopo tanta fatica.`,
`Zhengyangmen, la Porta Qianmen: la grande torre che chiudeva a sud la città interna. Davanti parte la via pedonale Qianmen, con le sue botteghe storiche, la più antica zona commerciale di Pechino.`,
`Dashilan, un vicolo di botteghe vecchio di secoli: tè, seta, scarpe di stoffa e farmacie tradizionali. Si dice che gli abitanti lo pronuncino "Dashlar", alla pechinese.`,
`L’anatra laccata di Pechino: la pelle croccante, la carne tenera, il pancake sottile con salsa e cipollotto. Il ristorante Quanjude, a Qianmen, esiste dal 1864 e arrostisce le anatre in forni aperti, con legno di albero da frutto.`,
`I tanghulu: frutti rossi canditi infilati su un bastoncino, dolci e croccanti. È lo spuntino d’inverno più famoso di Pechino, e si trova ancora per strada.`,
`La Stazione Sud di Pechino: inaugurata il 1° agosto 2008, con 24 binari e una struttura di 320.000 metri quadrati. Qui partono i treni ad alta velocità per Tianjin e per Shanghai.`,
`I treni "gaotie": bianchi, aerodinamici, quasi senza rumore. Il tabellone dice in quanto tempo si arriva: da Pechino a Shanghai in poco più di quattro ore. La stazione può gestire circa 30.000 passeggeri all’ora.`,
`In fondo al binario, la luce di un altro mondo ti chiama.`
];
const INTRO=`Pechino, dall’alba alla notte. Parti all’alba in Piazza Tiananmen, quando si alza la bandiera, e attraversi la Città Proibita fino alla collina Jingshan; a mezzogiorno ti perdi negli hutong, fra cortili e biciclette, e sul lago Shichahai. Nel primo pomeriggio il Tempio del Cielo, dove gli anziani fanno tai chi sotto gli alberi; poi il Palazzo d’Estate, con il suo lago e il Lungo Corridoio. Al tramonto sali sulla Grande Muraglia, sulla cresta dei monti; la sera Qianmen e Dashilan si accendono di lanterne e di profumo d’anatra laccata, e a notte la Stazione Sud ti aspetta con i suoi treni veloci. Il tempo qui si piega: i pechinesi di ogni epoca ti vengono incontro, e la città è quella di oggi.`;
const NAME={
pe_wang:`Lao Wang, il vecchio dell’alzabandiera`,
pe_yongle:`L’imperatore Yongle`,
pe_laoshe:`Lao She`,
pe_li:`Nonna Li`,
pe_cixi:`L’imperatrice vedova Cixi`,
pe_qi:`Qi Jiguang, il generale`,
pe_mei:`Mei, la ragazza del livestream`,
pe_chen:`Chen, il capotreno`
};
const GREET={
pe_wang:`Nǐ hǎo! Sei venuto presto, e fai bene: la piazza all’alba è un’altra cosa. Io sono Lao Wang, Pierpaolo; "lao" vuol dire "vecchio", e a me sta benissimo.`,
pe_yongle:`Avvicinati, forestiero. Questa città l’ho voluta io, e ogni pietra è sotto i miei occhi. Tu sei Pierpaolo? Parla pure: ti concedo di sedere nel mio cortile.`,
pe_laoshe:`Entra, entra! Il tè è appena fatto. Sono Lao She, Pierpaolo, e questo cortile è il posto dove ho scritto molte pagine. Siediti, che le storie sono lunghe.`,
pe_li:`Nǐ hǎo, giovanotto! Vuoi sederti con noi? Io sono Nonna Li, e qui, Pierpaolo, siamo tutti amici: anche i bambini, anche le carte.`,
pe_cixi:`Avvicinati e parla con rispetto. Questo giardino è il mio ritiro, e tu sei Pierpaolo, vero? Mi hanno dipinta in tanti modi: giudica tu, dopo avermi ascoltata.`,
pe_qi:`Alt! Chi va là? Ah, un viandante senza armi. Va bene: puoi salire. Sono Qi Jiguang, e questa Muraglia la conosco pietra per pietra. Tu sei Pierpaolo, giusto?`,
pe_mei:`Heyyy! Ciao a tutti... ah no, solo a te! Sono Mei, Pierpaolo, e questa sera ti porto a mangiare come un vero pechinese: ma prima un selfie, dai!`,
pe_chen:`Buonasera! Il treno parte fra dieci minuti, ma per te ne trovo undici. Sono Chen, il capotreno, Pierpaolo. Non correre: dalle mie parti, chi corre scivola.`
};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Lao Wang: giacchetta grigia, berretto di tela, termos di tè e sacchetto di semi di girasole */
 NP('pe_wang',NAME.pe_wang,1580,GREET.pe_wang,{skin:'#d8a888',top:'#8a8a90',bot:'#3a3a40',hair:'#c8c8c8',s:1.0},(g,b,t)=>{rect(g,'#4a5a6a',-12,-114+b,25,7);poly(g,'#4a5a6a',[[8,-109+b],[20,-107+b],[8,-105+b]]);rect(g,'#4a5a6a',-9,-118+b,18,6);
  rect(g,'#c8c8d0',-32,-72,9,26);rect(g,'#2a6a4a',-32,-74,9,5);rect(g,'rgba(255,255,255,.4)',-30,-70,2,20);rect(g,'#c8a868',20,-64,13,16);for(let q=0;q<5;q++)dot(g,'#3a2a1c',22+hr(q)*9,-61+hr(q*3)*11,1);poly(g,'#c8a868',[[20,-64],[33,-64],[30,-69],[23,-69]])}),
 /* l'imperatore Yongle: veste di seta gialla con i draghi, cappello a tavola con perline, mani nelle maniche */
 NP('pe_yongle',NAME.pe_yongle,3390,GREET.pe_yongle,{skin:'#e0b898',top:'#e0b02a',bot:'#e0b02a',hair:'#14110f',long:true,s:1.0},(g,b,t)=>{poly(g,'#e0b02a',[[-14,-90+b],[14,-90+b],[22,-4],[-22,-4]]);rect(g,'#7a1c14',-14,-62+b,28,4);
  for(let q=0;q<3;q++){ln(g,'#c8281e',1.8,[-9+q*0,-84+b+q*10,-3,-78+b+q*10,4,-84+b+q*10,9,-78+b+q*10]);dot(g,'#f6e08a',0,-80+b+q*10,1.6)}
  rect(g,'#14110f',-9,-114+b,20,7);rect(g,'#14110f',-19,-120+b,40,4);for(let q=0;q<10;q++){ln(g,'rgba(240,200,80,.95)',1,[-18+q*4,-116+b,-18+q*4,-107+b+(q%2)*3]);dot(g,'#f4e8c8',-18+q*4,-106+b+(q%2)*3,1.1)}
  rect(g,'#e0b02a',-17,-60,34,10);rect(g,'#c8281e',-17,-52,34,2)}),
 /* Lao She: tunica lunga grigio-blu, occhiali tondi, tazza di tè e una pagina di appunti */
 NP('pe_laoshe',NAME.pe_laoshe,6490,GREET.pe_laoshe,{skin:'#e0b898',top:'#5a6a84',bot:'#5a6a84',hair:'#14110f',long:true,s:1.0},(g,b,t)=>{poly(g,'#5a6a84',[[-14,-90+b],[14,-90+b],[22,-4],[-22,-4]]);rect(g,'rgba(255,255,255,.12)',-14,-90+b,5,86);
  g.strokeStyle=tn('#2a2a2a');g.lineWidth=1.3;g.beginPath();g.arc(7,-100+b,4.4,0,7);g.stroke();g.beginPath();g.arc(-2,-100+b,4.4,0,7);g.stroke();ln(g,'#2a2a2a',1.2,[2.4,-100+b,3,-100+b]);
  rect(g,'#f4f0e8',-33,-62,9,8);rect(g,'rgba(0,0,0,.14)',-33,-62,9,2);steamP(g,-28.5,-64,t,14);rect(g,'#f4ecd0',22,-72,13,17);for(let q=0;q<4;q++)rect(g,'rgba(40,40,60,.5)',24,-69+q*3.6,9,1)}),
 /* Nonna Li: pantaloni larghi, giacchetta chiara, ventaglio di carta, cappellino di paglia, borsina di stoffa */
 NP('pe_li',NAME.pe_li,8660,GREET.pe_li,{skin:'#e8b890',top:'#dcdfc8',bot:'#4a4a58',hair:'#c0c0c0',s:.96},(g,b,t)=>{el(g,'#d8c070',1,-112+b,19,4);el(g,'#e0cc80',1,-117+b,11,7);rect(g,'#c8503a',-10,-113+b,22,2);
  rect(g,'#c8503a',-34,-66,14,18);ln(g,'#7a2a1c',1.4,[-32,-66,-30,-76]);ln(g,'#7a2a1c',1.4,[-22,-66,-24,-76]);
  const fa=Math.sin(t*3)*.18;g.save();g.translate(24,-68);g.rotate(fa);poly(g,'#e8402a',[[0,0],[12,-12],[16,2]]);ln(g,'rgba(255,255,255,.5)',1,[0,0,10,-10]);ln(g,'rgba(255,255,255,.5)',1,[0,0,14,-4]);g.restore()}),
 /* l'imperatrice vedova Cixi: veste di seta ricamata, copricapo con fiori e perle, unghie protettive dorate, ventaglio */
 NP('pe_cixi',NAME.pe_cixi,9860,GREET.pe_cixi,{skin:'#ecc8a8',top:'#2a5a8a',bot:'#2a5a8a',hair:'#14110f',long:true,s:1.0},(g,b,t)=>{poly(g,'#2a5a8a',[[-14,-90+b],[14,-90+b],[22,-4],[-22,-4]]);rect(g,'#e8d08a',-14,-90+b,28,5);rect(g,'#e8d08a',-22,-8,44,4);
  for(let q=0;q<5;q++){dot(g,'#e8b8d0',-9+q*5,-66+b+(q%2)*10,2);dot(g,'#e8d08a',-6+q*5,-52+b+(q%2)*8,1.6)}
  rect(g,'#14110f',-19,-116+b,40,8);rect(g,'#14110f',-9,-120+b,20,6);for(let q=0;q<6;q++)dot(g,['#e83a5a','#f4a0c0','#f6e08a'][q%3],-16+q*6.4,-119+b,2.6);for(let q=0;q<4;q++){ln(g,'rgba(250,240,220,.9)',1,[-18+q*0,-110+b+q*0,-20,-98+b+q*3]);dot(g,'#f4f0e8',-20,-97+b+q*3,1.4)}
  ln(g,'#e8b030',1.8,[-9,-50,-5,-44]);ln(g,'#e8b030',1.8,[-6,-50,-2,-44]);el(g,'#f4ecd0',29,-70,10,12);ln(g,'#c8a050',1,[29,-58,29,-82])}),
 /* Qi Jiguang: armatura leggera di cuoio con piastre di metallo, elmo con pennacchio rosso, spada alla cintura, mantello grigio */
 NP('pe_qi',NAME.pe_qi,12210,GREET.pe_qi,{skin:'#d8a888',top:'#8a6a3a',bot:'#4a4a52',hair:'#14110f',s:1.02},(g,b,t)=>{poly(g,'#6a6a70',[[-12,-90+b],[-22,-48+b],[-12,-46+b]]);for(let q=0;q<4;q++){rect(g,'#8a8e98',-12,-88+b+q*10,24,6);rect(g,'rgba(255,255,255,.3)',-12,-88+b+q*10,24,1.2)}rect(g,'#c8a868',-12,-52+b,24,4);
  poly(g,'#6a6e78',[[-12,-104+b],[13,-104+b],[10,-118+b],[-10,-118+b]]);rect(g,'#8a8e98',-14,-106+b,28,3);ln(g,'#c8281e',3.4,[0,-118+b,0,-132+b+Math.sin(t*3)*1.4]);dot(g,'#c8281e',0,-134+b,3);
  ln(g,'#c8c8d0',2.2,[14,-58,25,-18]);rect(g,'#6a4a2a',10,-62,10,4)}),
 /* Mei: giacca imbottita rossa, jeans, cappellino, telefono con anello luminoso su un bastone, auricolari */
 NP('pe_mei',NAME.pe_mei,14870,GREET.pe_mei,{skin:'#e8b890',top:'#c8302a',bot:'#2c5aa6',hair:'#14110f',s:.98},(g,b,t)=>{rect(g,'rgba(0,0,0,.14)',-13,-70+b,26,3);rect(g,'rgba(0,0,0,.14)',-13,-58+b,26,3);
  rect(g,'#f4f0e8',-11,-113+b,24,5);poly(g,'#f4f0e8',[[8,-110+b],[20,-108+b],[8,-106+b]]);rect(g,'#14110f',-14,-106+b,5,24);dot(g,'#f4f4f4',-9,-99+b,2);
  ln(g,'#2a2a2e',2.2,[18,-66,30,-126]);rect(g,'#14110f',26,-136,10,16);const ph=.7+.3*Math.sin(t*4);g.strokeStyle='rgba(255,246,220,'+ph+')';g.lineWidth=2.4;g.beginPath();g.arc(31,-128,10,0,7);g.stroke();dot(g,'#6ab8f8',31,-128,3)}),
 /* Chen: uniforme blu scuro con bottoni dorati, cappello, guanti bianchi, fischietto, tablet */
 NP('pe_chen',NAME.pe_chen,16520,GREET.pe_chen,{skin:'#e0b090',top:'#1c2a4a',bot:'#1c2a4a',hair:'#14110f',s:1.02},(g,b,t)=>{rect(g,'#1c2a4a',-12,-114+b,26,7);rect(g,'#c8281e',-12,-109+b,26,2);poly(g,'#14203a',[[8,-108+b],[22,-106+b],[8,-103+b]]);dot(g,GOLD,1,-112+b,1.8);
  for(let q=0;q<4;q++)dot(g,GOLD,0,-84+b+q*10,1.5);rect(g,'rgba(255,255,255,.15)',-13,-90+b,3,46);dot(g,'#f4f4f4',-5,-47,3.6);dot(g,'#f4f4f4',5,-47,3.6);ln(g,'#c8c8c8',1,[4,-88+b,8,-70+b]);dot(g,'#c8c8c8',8,-69+b,2);
  rect(g,'#2a2a30',-35,-72,15,20);rect(g,'#7ab8e8',-33.6,-70.6,12.2,17);for(let q=0;q<3;q++)rect(g,'rgba(255,255,255,.6)',-32,-68+q*5,8,1.6)})
];
function steamP(g,x,y,t,h){for(let q=0;q<4;q++){const u=((t*.4+q/4)%1);dot(g,'rgba(240,240,244,'+(.45*(1-u))+')',x+Math.sin(t*1.2+q*2)*(2+u*3),y-u*h,1.6+u*3.4)}}
/* ---- oggetti lungo il percorso ---- */
const props=[
 ['petarga',250,'TIANANMEN'],['pelamp',380],['peporta',560],['pelamp',800],['pegruppo',930,3],['peaiuola',1020,110],['peobelisco',1150],['pelamp',1340],['peguardia',1420],['pealza',1650],['pecartello',1960],['pepalazzi',2090],['pelamp',2370],
 ['petarga',2480,'FORBIDDEN CITY'],['pecipr',2570],['pewumen',2900],['pevasca',3190],['petaihe',3470],['pegruppo',3700,4],['peombrello',3770,'#e8402a'],['pecorte',3990],['pecipr',4260],['pejing',4380],['pepino',4580,1],
 ['petarga',4690,'SHICHAHAI'],['pelamp',4760],['peshichahai',5050],['pepanca',5330],['petarga',5320,'NANLUOGUXIANG'],['penanluo',5560],['pebici',5860,1],['pesiheyuan',6020],['pelamp',6240],['pelaoshe',6420],['pecachi',6560,1],
 ['petarga',6700,'TEMPLE OF HEAVEN'],['pelamp',6790],['peqinian',7080],['pepanca',7330],['pealtare',7600],['peeco',8130],['pepanca',8360],['peparco',8560],['pecipr',8800,1.2],
 ['petarga',8890,'SUMMER PALACE'],['pelamp',8980],['pekunming',9200],['pelamp',9490],['pecorridoio',9780],['pepanca',10050],['pebarca',10300],['pelamp',10540],['peponte17',10810],
 ['petarga',11080,'MUTIANYU'],['pemutianyu',11500],['petavola',11830],['petorre',12080],['pecestino',12330],['pefunivia',12640],
 ['petarga',13180,'QIANMEN'],['pezheng',13480],['pelanterne',13720,170],['petram',13900],['petarga',14040,'DASHILAN'],['pedashilan',14250],['pelanterne',14480,150],['pequanjude',14800],['petanghulu',15170],['pelamp',15380],
 ['pestazione',15850],['pechiosco',15500],['petarga',15620,'BEIJING SOUTH'],['pegaotie',16250],['pegru',16820],['pevarco',W1-370]];
/* un lampione ogni tanto, dove la strada è libera (non sulla Muraglia né in stazione) */
const LM=props.filter(p=>!['petarga','pelamp','pebici','pepanca','pecipr','pepino','pecachi','pecestino','pegruppo','peaiuola','pevasca','peombrello','peguardia','petavola','pecartello','pelanterne','pegru','pechiosco'].includes(p[0])).map(p=>p[1]);
for(let x=300;x<W1-420;x+=380){if(x>11000&&x<13100)continue;if(x>15400)continue;if(LM.every(m=>Math.abs(m-x)>340)&&props.every(p=>p[0]!='petarga'||Math.abs(p[1]-x)>130)&&!props.some(p=>p[0]=='pelamp'&&Math.abs(p[1]-x)<200))props.push(['pelamp',x])}
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'pechino',name:'Pechino · Dalla Piazza alla Stazione',width:W1,sky:['#9aa6c4','#f6c4b8','#ffe2c0'],gt:372,gr:['#b4aea0','#8a8478'],chord:[196,246.9,293.7,370],amb:'#ffe6c0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da pechino.txt) --- */
(function(){
const TOPX_PE={
pe_wang:[
[`Come ti chiami e che fai di bello?`,`Lao Wang, settantatré anni, ex autista di autobus in pensione. Adesso vengo qui quasi ogni mattina, con il mio tè e con gli amici. Non devo più guidare nessuno, e mi sento leggero.`],
[`Che cos’è questa piazza?`,`Piazza Tiananmen, circa 765 metri per 282, una delle più grandi del mondo. A nord c’è la Porta della Pace Celeste, a sud Zhengyangmen, ai lati il Palazzo del Popolo e il Museo Nazionale. Per noi è un luogo di cerimonie e di ricordi.`],
[`Come nasce il nome?`,`Dalla porta a nord, Tiananmen, che si traduce "Porta della Pace Celeste". Fu costruita nel 1417, in epoca Ming, e poi ricostruita più volte. Il nome è rimasto, anche se la città è cambiata tantissimo.`],
[`Che cosa è successo il 1° ottobre 1949?`,`Dal balcone della porta fu proclamata la Repubblica Popolare Cinese. Ogni anno, il 1° ottobre, la piazza è piena di bandiere e di fiori. Per molti anziani, come me, è un giorno che conta.`],
[`Com’è la cerimonia dell’alzabandiera?`,`Ogni giorno, all’alba, la bandiera sale sul pennone: una piccola guardia d’onore marcia, e tutti restano in silenzio. Alla sera si fa al tramonto, con la discesa. Sembra poco, ma quando c’è la luce giusta, ti ferma il cuore.`],
[`Perché la gente si alza così presto?`,`Per vedere la bandiera salire con il sole e per avere un buon posto. Anch’io, quando lavoravo, partivo prima dell’alba, e ora mi sveglio da solo. Le abitudini, a una certa età, sono dure da cambiare.`],
[`Cos’è il Monumento agli Eroi del Popolo?`,`Un obelisco di pietra chiara, al centro della piazza, alto quasi quaranta metri. Ricorda i caduti per la storia del Paese. Ci si ferma, si guarda, e si passa in silenzio.`],
[`Che cosa c’è dentro il Palazzo del Popolo e il Museo Nazionale?`,`Il Palazzo del Popolo è la sala delle grandi riunioni, costruita in meno di un anno, si dice, tra il 1958 e il 1959. Il Museo Nazionale, dall’altra parte, racconta la storia della Cina in migliaia di oggetti: bronzi, giade, porcellane. Una giornata non basta.`],
[`Cos’è Zhengyangmen?`,`La Porta Qianmen, a sud della piazza: la vecchia porta della città interna. Oltre c’è la via pedonale con le botteghe storiche. Se hai fame, passa di lì a sera: l’anatra laccata è garantita.`],
[`Cosa ti piace mangiare per colazione?`,`Il jianbing: una sottile crêpe di farina con uovo, salsa e una cialda croccante dentro. Poi un tè caldo e un bicchiere di latte di soia. Ma la mia vera passione sono i semi di girasole, che mi rilassano.`],
[`Come ci si comporta in piazza?`,`Con calma e con rispetto: si cammina piano, si parla a bassa voce e si fanno le foto senza intralciare. Ci sono controlli all’ingresso, quindi porta con te un documento. Nessun problema se sei gentile, méi wèntí.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Xièxie, Pierpaolo, e buon cammino! La Città Proibita è dietro la porta: entra con calma e guarda in alto. Jiāyóu, e se ripassi, il tè lo offro io.`],
],
pe_yongle:[
[`Chi sei e quando hai regnato?`,`Sono Yongle, il terzo imperatore della dinastia Ming. Salii al trono nel 1402 e regnai fino al 1424. Per vent’anni ho cambiato l’impero.`],
[`Perché hai fatto costruire la Città Proibita?`,`Per spostare la capitale da Nanchino a Pechino e per avere un palazzo degno del Figlio del Cielo. I lavori durarono dal 1406 al 1420: quattordici anni, con migliaia di artigiani. La capitale fu poi ufficialmente trasferita nel 1421.`],
[`Quanto è grande?`,`Circa 72 ettari, con mura rosse alte 10 metri e un fossato largo 52. Dentro ci sono più di 980 edifici. Si diceva che avesse novemilanovecentonovantanove stanze e mezza, ma è un numero simbolico, non un conteggio.`],
[`Perché si chiama "Città Proibita"?`,`Perché la gente comune non poteva entrare senza permesso. Il nome cinese comincia con la parola "viola", che indica la Stella Polare, la dimora dell’imperatore celeste. Il palazzo doveva essere il centro del mondo.`],
[`Perché le mura sono rosse e i tetti gialli?`,`Il rosso porta felicità e fortuna; il giallo è il colore dell’imperatore e quasi nessun altro poteva usarlo. Le tegole gialle brillano sotto il sole. Un palazzo deve parlare anche con i colori.`],
[`Che cos’è la Sala dell’Armonia Suprema?`,`Il più grande edificio del complesso, sulla terrazza di marmo. Qui si celebravano le incoronazioni e le grandi cerimonie. Dentro c’è il Trono del Drago, e davanti c’è una piazza dove entravano migliaia di persone.`],
[`Chi ha vissuto qui dopo di te?`,`Ventiquattro imperatori in tutto, dal 1420 al 1912: quattordici Ming e dieci Qing. Dopo i Ming vennero i Qing, dalla Manciuria, che si installarono qui e conservarono il palazzo. L’ultimo fu Puyi, che lasciò definitivamente la reggia nel 1924.`],
[`Che altro hai fatto durante il tuo regno?`,`Ho mandato Zheng He con le sue grandi flotte nei mari del sud e dell’ovest, e ho fatto compilare una gigantesca enciclopedia, l’Enciclopedia Yongle. Voglio che l’impero conosca tutto. Un imperatore non deve mai smettere di imparare.`],
[`Cos’è oggi la Città Proibita?`,`Dal 1925 è il Museo del Palazzo, uno dei più visitati del mondo. Dal 1987 è Patrimonio UNESCO. Chi entra dalla Porta Meridiana si ritrova nella storia: tetti, cortili, lanterne.`],
[`Che cos’è la collina Jingshan?`,`Una collina artificiale a nord del palazzo, con un parco e cinque padiglioni. Si dice che sia stata costruita con la terra scavata per il fossato. Dalla cima si vede tutto, e c’è un grande silenzio.`],
[`Che cosa è successo sulla collina nel 1644?`,`Quell’anno cadde la dinastia Ming: l’ultimo imperatore, Chongzhen, si tolse la vita proprio a Jingshan, quando la città fu presa dai ribelli. È una storia triste: parlarne richiede rispetto. Poi arrivarono i Qing.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Va’ pure, Pierpaolo. Esci dal portone nord e sali la collina: da lassù vedrai il mio palazzo per intero. Che il cielo ti sia favorevole, e ricorda: ogni costruzione nasce da molte mani.`],
],
pe_laoshe:[
[`Chi sei e dove sei nato?`,`Lao She, nato a Pechino il 3 febbraio 1899, in una famiglia manciù. Il mio vero nome era Shu Qingchun, ma il nome d’arte l’ha fatto conoscere a tutti. Sono pechinese fino al midollo, e quando parlo si sente.`],
[`Cos’è un hutong?`,`Un vicolo stretto fra le case, tipico di Pechino. Le prime case a corte nacquero nel Duecento, in epoca Yuan, quando Kublai Khan fece di Pechino la sua capitale. Per me gli hutong sono la città vera: lì si vive.`],
[`Come sono fatte le case?`,`Il siheyuan: quattro edifici bassi attorno a un cortile quadrato, con un portone sul vicolo e un muro-schermo all’ingresso. D’estate si sta in cortile, con le piante. Si dice che nel mio ci fossero due alberi di cachi.`],
[`Qual è il tuo libro più famoso?`,`"Il ragazzo del risciò" (Camel Xiangzi), pubblicato nel 1936: la storia di un tirarisciò di Pechino che sogna di avere un risciò suo. È un romanzo duro, ma pieno di affetto per la gente. Si legge ancora oggi.`],
[`Hai scritto anche per il teatro?`,`Sì, "La casa da tè", pubblicata nel 1957: dentro una casa da tè si vedono passare cinquant’anni di storia di Pechino. Il pubblico la ama ancora. Il teatro è come un hutong: tante porte e tanti cortili.`],
[`Hai vissuto all’estero?`,`A Londra, dal 1924 al 1929, ho insegnato cinese alla Scuola di Studi Orientali. Là ho cominciato a scrivere romanzi, e ho sentito la nostalgia di Pechino. Ho imparato che la patria si ama di più da lontano.`],
[`Che cos’è la tua casa-museo?`,`La casa dove vissi a lungo: oggi è il Museo Lao She, aperto nel 1999. C’è un cortile con alberi e una scrivania con libri e teiera. Lì si respira la vita di un pechinese di una volta.`],
[`Come si parla a Pechino?`,`Con la "erhua", cioè si aggiunge una "r" in fondo a tante parole, e il suono si arrotonda. È il carattere del pechinese: veloce, ironico, un po’ pigro. Per dire "nessun problema" si dice "méi wèntí", e lo si sente ovunque.`],
[`Cosa si vede oggi a Nanluoguxiang?`,`Un vicolo lungo circa 800 metri, nato in epoca Yuan: oggi è pieno di caffè, gelaterie e negozi. Il nome attuale è del Settecento. È cambiato molto, ma dietro le insegne ci sono ancora i vecchi cortili.`],
[`Che fine hanno fatto gli hutong?`,`Negli ultimi decenni molti sono stati demoliti per costruire strade e palazzi. I siheyuan dell’epoca Qianlong erano più di 26.000; oggi ne restano poche centinaia ben conservate. Molti pechinesi se ne dispiacciono, e si discute su come proteggerli.`],
[`Com’è finita la tua storia?`,`Sono morto il 24 agosto 1966, in un periodo difficile per molti scrittori. Preferisco non dire altro: il mio nome è tornato, i miei libri anche. È la cosa che conta.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo. Finisci il tè e vai: il Tempio del Cielo ti aspetta. Cammina piano, guarda le facce e ascolta le voci: la città è la sua gente, non i suoi tetti.`],
],
pe_li:[
[`Come ti chiami e che fai qui?`,`Li, sessantotto anni, ex maestra elementare. Vengo al parco ogni giorno: faccio tai chi, canto con il coro, gioco a carte. A casa il tempo non passa mai, qui sì.`],
[`Che cos’è il Tempio del Cielo?`,`Un complesso costruito fra il 1406 e il 1420, sotto l’imperatore Yongle. Qui gli imperatori Ming e Qing pregavano il Cielo per un buon raccolto. Il nome "Tempio del Cielo" gli fu dato nel Cinquecento da Jiajing.`],
[`Quanto è grande il parco?`,`Circa 2,7 chilometri quadrati, quasi tre. Dentro ci sono cipressi vecchi, viali lunghissimi e spazi per giocare. Dal 1998 è Patrimonio UNESCO.`],
[`Com’è la Sala della Preghiera?`,`Un edificio rotondo, alto 38 metri, con tre tetti blu e una sfera dorata in cima. Si dice che sia fatto interamente di legno, senza un chiodo di metallo. È la cosa più bella che ho visto in vita mia.`],
[`Che cos’è l’Altare Circolare?`,`Una piattaforma vuota a tre livelli, di marmo bianco. Qui l’imperatore, nel solstizio d’inverno, offriva sacrifici al Cielo. È stata costruita nel 1530 e rifatta nel 1740, e si dice che tutto sia in multipli di nove.`],
[`Perché il nove è importante?`,`Per i cinesi il nove è il numero più grande di una cifra, e dunque il numero dell’imperatore. Si dice che le lastre dell’altare si contino a multipli di nove. Per noi i numeri parlano.`],
[`Funziona davvero il Muro dell’Eco?`,`Si dice che se parli a un lato del muro circolare, qualcuno sente dall’altro. Qualche volta funziona, e i bambini vanno matti per questo. Provaci: se non senti niente, ridi lo stesso.`],
[`Che giochi si fanno qui?`,`Carte, scacchi cinesi, majong, volano aquiloni e si gioca con il diabolo e con il volano di piume. Gli anziani cantano e ballano. In un posto così non si invecchia, si cambia mestiere.`],
[`Cos’è il tai chi?`,`Una ginnastica lenta, con movimenti morbidi e respiro profondo. Aiuta le articolazioni e la mente. Al mattino vengono a farlo in centinaia: io mi metto sempre in prima fila.`],
[`Cosa consigli di mangiare al parco?`,`Una pannocchia cotta, qualche frutto, un tè freddo, e per dolce i tanghulu, i frutti canditi sul bastoncino. Se vieni d’estate, il gelato alla frutta. Mi raccomando: non mangiare troppo, che ti vengono i crampi.`],
[`Come si dice "grazie" e "ciao" in cinese?`,`"Xièxie" è grazie, "nǐ hǎo" è ciao, "zàijiàn" è arrivederci. E "jiāyóu" significa "forza!", "dai!". Provaci: i pechinesi apprezzano chi ci prova.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Vai, Pierpaolo, e non dimenticare di respirare! Il Palazzo d’Estate ti aspetta, con il suo lago. Zàijiàn, e se hai fame, torna: la nonna ha sempre qualcosa nella borsa.`],
],
pe_cixi:[
[`Chi sei e dove sei nata?`,`Cixi, nata a Pechino il 29 novembre 1835, di famiglia manciù. Entrai a palazzo come concubina dell’imperatore Xianfeng, e il mio nome è legato a due imperatori: mio figlio Tongzhi e mio nipote Guangxu. Ho avuto molto potere, e questo non si perdona.`],
[`Come hai conquistato il potere?`,`Nel 1861, alla morte di Xianfeng, ho collaborato a rimuovere un gruppo di reggenti che governava per mio figlio. Da allora, a periodi, ho governato come reggente fino al 1908. Un’epoca complicata, e le donne non avevano ruoli ufficiali.`],
[`Che cos’è il Palazzo d’Estate?`,`Un grande giardino imperiale con un lago artificiale di 2,2 chilometri quadrati e una collina di circa 60 metri. La terra scavata per il lago serve a formare la collina. Fra il 1884 e il 1895 l’ho fatto ricostruire e ampliare.`],
[`Perché l’hai ricostruito?`,`Perché i palazzi più antichi erano stati devastati nel dicembre 1860 dalle truppe inglesi e francesi, durante la Seconda guerra dell’oppio. Il Vecchio Palazzo d’Estate fu saccheggiato e bruciato. Il nuovo giardino doveva essere un luogo di pace e di riposo.`],
[`È vero che hai speso i soldi della marina?`,`Si dice che parte dei fondi destinati alla flotta sia andata ai lavori. Gli storici non sono d’accordo su quanto: alcuni parlano di sei milioni di tael, altri di molti di più. Io dico che la guerra con il Giappone si perse per tante ragioni.`],
[`Cos’è il Lungo Corridoio?`,`Una galleria coperta lunga 728 metri, lungo la riva del lago, con migliaia di dipinti di paesaggi e di storie. D’estate ci si ripara dal sole, e quando piove si cammina all’asciutto. È uno dei miei luoghi preferiti.`],
[`E la Barca di Marmo?`,`Una barca di pietra lunga 36 metri, ferma sulla riva. L’originale, di legno, bruciò nel 1860; la nuova ha due ruote a pale in stile occidentale. È una barca che non va da nessuna parte, e forse è per questo che piace.`],
[`Che cos’è il Ponte dei Diciassette Archi?`,`Un ponte di pietra lungo 150 metri e largo 8, con diciassette archi di forme diverse, che collega la riva a un’isola. Sul parapetto ci sono tanti leoni scolpiti. Si attraversa con calma, guardando il lago.`],
[`Che cosa ti rimproverano gli storici?`,`Nel 1898 ho fermato le riforme dei Cento Giorni e tenuto Guangxu agli arresti nel palazzo; nel 1900 ho appoggiato i Boxer, e quella stagione portò l’occupazione straniera di Pechino. Altri studiosi dicono che fui pragmatica e mantenni l’ordine in tempi difficili. Su di me i giudizi sono divisi.`],
[`Hai fatto anche cose buone?`,`Ho sostenuto la modernizzazione tecnica e militare: ferrovie, telegrafo, arsenali. Verso la fine della vita ho avviato anche riforme verso una monarchia costituzionale. Non basta, forse, ma conta.`],
[`Come finì la tua vita?`,`Morii il 15 novembre 1908, un giorno dopo l’imperatore Guangxu. Si sospetta un avvelenamento, ma nessuno lo ha mai provato. Preferisco lasciare il mistero ai libri.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Vai, Pierpaolo. Sali la collina, guarda il lago dall’alto e sii indulgente con chi ha governato in tempi duri. Che il tuo viaggio sia sereno, e che il tramonto ti sia propizio.`],
],
pe_qi:[
[`Chi sei e quando hai vissuto?`,`Qi Jiguang, generale della dinastia Ming, vissuto dal 1528 al 1588. Ho combattuto i pirati sulle coste e poi ho difeso la frontiera nord. Un soldato non sceglie dove servire.`],
[`Che cos’è la Grande Muraglia?`,`Un sistema di mura, torri e fortezze costruito in più secoli, da molte dinastie. Un rilievo del 2012 parlava di più di ventimila chilometri in totale. È Patrimonio UNESCO dal 1987.`],
[`Cos’è Mutianyu?`,`Un tratto di circa 2.250 metri, con 22 torri di guardia, a una settantina di chilometri da Pechino. Il muro che vedi è dell’epoca Ming, costruito sopra uno più antico, e fu restaurato dal 1983.`],
[`Che cosa hai fatto qui?`,`Nel 1568 fui nominato comandante di questa zona di frontiera. Ho controllato il tratto fino al 1572 e ho proposto di aggiungere contrafforti e torri per rinforzare il muro. Voglio che le torri siano il cuore della difesa.`],
[`Chi ha costruito il muro prima di te?`,`Il generale Xu Da, all’inizio dei Ming, e prima ancora altri sovrani. Il tratto di Mutianyu risale perfino al VI secolo, sotto i Qi settentrionali. Le mura crescono sulle mura, come le generazioni.`],
[`A cosa servivano le torri?`,`A guardare lontano, a segnalare con fumo e fuoco e a far dormire i soldati. Ogni torre ha feritoie e una stanza con la volta di mattoni. Si dice che con il fumo si potesse avvertire la capitale in poche ore.`],
[`Com’era la vita dei soldati?`,`Dura: freddo d’inverno, caldo d’estate, lunghi turni di guardia. Ho insistito sulla disciplina, sull’addestramento e sul cibo regolare. Un esercito affamato non difende niente.`],
[`È vero che la Muraglia si vede dallo spazio?`,`Non è vero: è una leggenda moderna. È lunga, ma stretta, e dalla Luna non si vede. Ma dalla cresta dei monti si vede benissimo, e basta.`],
[`Come si scende dalla Muraglia?`,`Con una funivia o con la pista di slittino su rotaia metallica, che è una trovata moderna. A me sembra buffa, ma i bambini vanno matti. Una volta si scendeva a piedi, e con le armi in spalla.`],
[`Come si vive adesso, sulla Muraglia?`,`Con tanti turisti e poche guardie. Si cammina, si fanno fotografie, si beve un tè. Ma la sera, quando il sole tramonta e restano pochi, sembra tornata la mia epoca.`],
[`Cosa significa per voi la Muraglia?`,`Un simbolo di fatica e di costanza: pietra su pietra, anno su anno. Non ha mai fermato tutto, ma ha dato tempo e sicurezza. E poi, oggi, è un invito a camminare.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Va’ pure, Pierpaolo, e non cadere sulle scale: sono ripide. Quando scendi in città, ricordati di mangiare bene: un viaggiatore affamato non arriva lontano. Jiāyóu!`],
],
pe_mei:[
[`Come ti chiami e che fai?`,`Mei, ventisei anni, guida turistica e creatrice di contenuti. Racconto Pechino in diretta, con la telecamera sul bastone. A volte ho mille spettatori, a volte uno solo: mia mamma.`],
[`Che cos’è Qianmen?`,`La via pedonale a sud di Piazza Tiananmen, dove partono le botteghe storiche di Pechino. C’è un vecchio tram elettrico e tantissime lanterne rosse. Di sera sembra un set di un film storico.`],
[`Che cos’è Dashilan?`,`Un vicolo pieno di botteghe antiche, a pochi passi da Qianmen: tè, seta, scarpe ricamate, farmacie tradizionali. Si dice che i pechinesi lo pronuncino "Dashlar", con una "r" in fondo. Se lo dici così, sei dentro!`],
[`Qual è il piatto più famoso di Pechino?`,`L’anatra laccata, naturalmente: pelle croccante, carne tenera, il tutto in un pancake sottile con salsa e cipollotto. È un piatto che i pechinesi mangiano da secoli, e che prima era riservato alle corti.`],
[`Che cos’è il Quanjude?`,`Un ristorante storico, aperto nel 1864 proprio a Qianmen. Arrostiscono le anatre in forni aperti, con legna di alberi da frutto, che non fa fumo. In una sola sede possono servire fino a cinquemila pasti al giorno.`],
[`Come si mangia l’anatra?`,`Il cuoco la taglia davanti a te in fettine con la pelle. Si mette un po’ di salsa e di cipollotto su un pancake sottile, si arrotola e si mangia con le mani. Il segreto è non esagerare con la salsa.`],
[`E gli altri spuntini di strada?`,`Il jianbing, una crêpe salata a colazione; i baozi, panini al vapore; i tanghulu, frutti canditi sul bastoncino; gli spiedini di agnello. Un’abbuffata a 360 gradi. Io li assaggio tutti, ma di corsa.`],
[`Come si paga qui?`,`Quasi sempre con il telefono: si scansiona un codice QR e si paga in un secondo. Il contante esiste, ma molti negozianti lo guardano con sospetto. Se sei straniero, controlla prima di arrivare.`],
[`Come ci si muove in città?`,`Metro, autobus, biciclette in condivisione e taxi. La metro è pulita, comoda e puntuale. Per le grandi distanze ci sono i treni veloci, e il più bello parte dalla Stazione Sud.`],
[`Cosa significa "livestream"?`,`Una diretta video: si parla con gli spettatori, si fanno vedere i luoghi, e loro commentano e fanno domande. Non è un lavoro facile: bisogna essere simpatici anche quando hai fame. Ma mi piace.`],
[`Che parole giovani devo sapere?`,`"Hǎo" vuol dire "bene", "bù kèqi" è "prego", "tài hǎo le" è "benissimo". Se vuoi dire "forza", dì "jiāyóu". E se qualcuno ti saluta con "chī le ma?", cioè "hai già mangiato?", rispondi di sì.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo! Mi raccomando: lasciami un "mi piace" nel cuore. Zàijiàn, e buon viaggio: la stazione è a due passi in metro.`],
],
pe_chen:[
[`Come ti chiami e che lavoro fai?`,`Chen, quarantacinque anni, capotreno sulle linee ad alta velocità. Controllo i biglietti, aiuto i passeggeri e sono responsabile della sicurezza a bordo. Faccio questo lavoro da vent’anni e lo rifarei.`],
[`Che stazione è questa?`,`La Stazione Sud di Pechino, aperta il 1° agosto 2008. Occupa circa 32 ettari, con 24 binari e una struttura di 320.000 metri quadrati. Un gigante di vetro e di metallo.`],
[`Chi l’ha progettata?`,`Lo studio britannico TFP Farrells insieme all’Istituto di progettazione di Tianjin. La forma è ovale, con un tetto ondulato, e dentro è luminosa come un aeroporto. Dicono che sembri una grande razza che spiega le ali.`],
[`Quante persone ci passano?`,`Può gestire circa 30.000 passeggeri all’ora, quasi 241 milioni l’anno. In certi giorni, durante il Capodanno cinese, è un mare di gente. Bisogna avere pazienza, e un buon paio di scarpe.`],
[`Dove vanno i treni?`,`Soprattutto a Tianjin, con la linea veloce intercity, e a Shanghai, con la linea Pechino-Shanghai. A Shanghai si arriva in poco più di quattro ore. Mi piace pensare che i passeggeri dormano e si sveglino altrove.`],
[`Come sono i treni "gaotie"?`,`Bianchi, aerodinamici, con il muso a becco. Sono silenziosi, puntuali, e dentro c’è posto per tutti, con prese per il telefono. Per chi viene dall’Europa, sono una piccola rivoluzione.`],
[`Cosa si mangia in treno?`,`Si porta da casa: noodle istantanei, frutta, semi, un termos di tè. Nei corridoi c’è l’acqua calda per le tazze. L’odore dei noodle è la vera musica dei treni cinesi.`],
[`Come si orienta uno straniero?`,`Con i tabelloni bilingue, il numero della carrozza e il codice sul biglietto. In stazione bisogna presentare il passaporto o il documento: è una regola. Se hai dubbi, chiedi: qualcuno parla inglese.`],
[`Cosa si prova a fare lo stesso viaggio ogni giorno?`,`Che si vede il Paese cambiare dal finestrino: campi, città, fiumi, e di notte le luci. Mi sento un po’ come un guardiano. E ogni volta, all’arrivo, c’è qualcuno che mi ringrazia.`],
[`Com’è stata la tua giornata?`,`Lunga, come sempre. Ho visto una nonna che portava un gallo in una gabbia e un bambino che per la prima volta guardava un treno. Sono cose che alla fine contano più dei numeri.`],
[`Cosa consigli di fare prima di partire?`,`Di respirare, di sorridere e di salutare. A Pechino si fa così: si dice "zàijiàn", e si torna. Di una città si sente sempre un po’ la mancanza.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo, sali pure. In fondo al binario c’è una luce: seguila, e non voltarti. Zàijiàn e buon viaggio!`],
]
};
Object.assign(TOPX,TOPX_PE);
})();
