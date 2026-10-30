/* ---------- 13. BOLOGNA · Dai canali alla Stazione Centrale (Piella, Navile, Quadrilatero, Piazza Maggiore, Due Torri, Archiginnasio, Santo Stefano, San Luca, Piazza Verdi, Stazione) ---------- */
/* Un'intera giornata da sinistra a destra: alba ai canali nascosti, mattina nel Quadrilatero, tarda mattina in Piazza
   Maggiore, mezzogiorno alle Due Torri, primo pomeriggio all'Archiginnasio, pomeriggio a Santo Stefano, tramonto sul
   portico di San Luca, sera in Piazza Verdi, notte alla Stazione Centrale. In fondo al binario c'è il varco. */
(function(){
const GT=372,W1=16300;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,pa=A.pa,txt=A.txt,glow=A.glow,cl=A.cl;
const {ln}=PR._rm;
const {merl}=PR._mi;
const {win}=PR._pl;
const {nf,por}=PR._bo;                               /* luce di Bologna: la giornata scorre da sinistra (alba) a destra (notte) */
const LIT='rgb(255,226,150)';
const md=(i,n)=>((i%n)+n)%n;
const Z=[0,1700,3500,6100,7900,9300,10900,13100,14300,W1+400];   /* inizio di ognuna delle 9 zone */
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
/* ---- cielo: alba con foschia sull'acqua, mattina limpida, mezzogiorno pieno, pomeriggio dorato, tramonto rosso-arancio, crepuscolo, notte ---- */
const SKY=[[0,['#c9aab4','#f0b8a6','#fbd8b0']],[1500,['#8ab8e4','#cfe0ee','#f4ecd8']],[3500,['#6ab4ea','#b0d6f2','#e8f2f4']],[6100,['#58aaee','#b8dcf6','#f6f6ee']],[7900,['#62aeea','#d0e0ea','#f6ecd0']],[9300,['#6ab0e4','#e6dcc0','#f8dca8']],[10900,['#7aa8dc','#f0d098','#fcc070']],[11900,['#6a8cd0','#f4a870','#ff9650']],[13100,['#5a5aa8','#e87a6a','#ff9a58']],[13800,['#3a3a88','#a85c8a','#e87a5e']],[14500,['#1c2258','#4a4486','#b06a86']],[15200,['#0c1240','#222a66','#6a4a82']],[99999,['#0c1240','#222a66','#6a4a82']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
/* ---- palazzo generico di zona: terracotta, ocra e rosa antico; sotto, sempre, i portici ---- */
const PM={1:['#d98a62','#e0b070','#d8a39a','#d9a060'],2:['#d98a62','#cf7a52','#e0b070','#c9604a'],3:['#d98a62','#e6d4b0','#c4724a','#e0b070'],4:['#d98a62','#e0b070','#c4724a','#d8a39a'],5:['#d98a62','#e0b070','#d8a060','#c4724a'],6:['#e0b070','#c98a5a','#d8c4a0','#b8885a'],7:['#d9c8a0','#e0b890','#d8a39a','#c8b890'],8:['#d98a62','#e0b070','#c4724a','#d8a39a'],9:['#d8d0bc','#c8c0aa','#d8d0bc','#c8c0aa']};
const ROOF={1:'#b55e3e',2:'#a9553b',3:'#b0583a',4:'#a8603a',5:'#a8603a',6:'#9a5a3a',7:'#b0583a',8:'#a8603a'};
function pal(g,x,w,h,i,st){const gt=GT,top=gt-h,c=PM[st][md(i,4)],night=A.getDK(),n=Math.max(2,Math.floor(w/42)),porch=st>=2&&st!=7&&st!=9;
 rect(g,c,x,top,w,h);rect(g,'rgba(255,248,230,.13)',x,top,5,h);rect(g,'rgba(40,20,6,.14)',x+w-12,top,12,h);
 for(let q=0;q<4;q++)rect(g,'rgba(120,70,30,'+(.05+hr(i+q)*.06)+')',x+hr(i*3+q)*(w-30),top+hr(i+q*5)*(h-60),12+hr(q)*20,10+hr(q+3)*16);
 if(st==9){rect(g,'#9a948a',x-4,top-8,w+8,8);const rows=Math.max(1,Math.floor((h-40)/46));for(let r=0;r<rows;r++)for(let k=0;k<n;k++){const wx=x+10+k*((w-20-22)/Math.max(1,n-1)),wy=top+14+r*46,L=hr(i*9+r*3+k)<.1+night*.7;ar(g,'#e8e0cc',wx-3,wy+40,28,44);ar(g,L?LIT:'#2e3a48',wx,wy+38,22,38)}
  rect(g,'#6a6e76',x,gt-16,w,16);for(let q=0;q<Math.floor(w/40);q++)rect(g,'#2a2c30',x+10+q*40,gt-90,4,76);rect(g,'#3a4650',x,gt-96,w,6);return}
 rect(g,'#a2865c',x-4,top-8,w+8,8);rect(g,'#7a6040',x-4,top-2,w+8,3);
 if(st==1||st==5||st==6||st==8||st==3){poly(g,ROOF[st]||'#b0583a',[[x-4,top-8],[x+w*.18,top-24],[x+w*.82,top-24],[x+w+4,top-8]]);for(let q=0;q<(w*.64)/7;q++)rect(g,'rgba(60,20,10,.2)',x+w*.18+q*7,top-24,1,16)}
 else if(st==2||st==4){for(let q=0;q<Math.floor(w/16);q++)rect(g,c,x+q*16,top-14,9,8)}
 else if(st==7){poly(g,'#b0583a',[[x-4,top-8],[x+w*.3,top-22],[x+w*.7,top-22],[x+w+4,top-8]])}
 const rows=Math.max(1,Math.floor((h-(porch?90:50))/50));
 for(let r=0;r<rows;r++){const wy=top+16+r*50;
  for(let k=0;k<n;k++){const wx=x+10+k*((w-20-22)/Math.max(1,n-1)),L=hr(i*9+r*3+k)<.08+night*.7;
   rect(g,'#f2ead8',wx-3,wy-3,28,46);rect(g,L?LIT:'#2e3a48',wx,wy,22,40);if(!L)rect(g,'rgba(255,255,255,.14)',wx+2,wy+2,6,36);
   if(st==1||st==2||st==5||st==6){const sh=hr(i*5+r+k);if(sh>.3){const sc=st==1?'#5a8a6a':'#4f7a52';rect(g,sc,wx-9,wy,8,40);rect(g,sc,wx+23,wy,8,40);for(let q=0;q<5;q++){rect(g,'rgba(0,0,0,.18)',wx-9,wy+4+q*8,8,1);rect(g,'rgba(0,0,0,.18)',wx+23,wy+4+q*8,8,1)}}}
   if(st==1&&hr(i+r+k*3)>.35){rect(g,'#2a2a2e',wx-6,wy+30,34,2);for(let q=0;q<4;q++)dot(g,['#e8505a','#ffd21e','#ff7ab0','#f4f4ee'][q],wx+q*8,wy+28,3.4)}}}
 rect(g,'#8a7c68',x,gt-12,w,12);
 if(porch){por(g,night>.25?1:0,x,gt-12,w,Math.max(2,Math.floor(w/44)),76,'#e8d8b8','#34261e')}
 else if(st==1){ar(g,'#4a2e1a',x+w*.5-14,gt-12,28,60);rect(g,'rgba(0,0,0,.2)',x,gt-6,w,6)}
 else{ar(g,'#4a2e1a',x+w*.5-14,gt-12,28,56)}}
/* ---- livello 0: cielo, sole, luna, nuvole, foschia dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-14400)/1500,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/13600,0,1),sx=40+u*400,sy=312-Math.sin(u*Math.PI)*240;
 if(xs<14000){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*70)+','+Math.round(190-low*100)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*60)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*80)+','+Math.round(215-low*120)+')',sx,sy,15)}
 const mu=cl((xs-13800)/2400,0,1);if(mu>0){const mx=140+mu*240,my=310-mu*220;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<7000?'rgba(255,255,255,.7)':xs<10600?'rgba(255,236,196,.6)':xs<13400?'rgba(255,160,130,.62)':'rgba(130,120,180,.4)';
 each(o,340,1,(x,i,r)=>nube(g,x+r*100,40+r*46,.9+r*.5,cc));
 const fo=cl(1-xs/1700,0,1)*.4;if(fo>.01){g.fillStyle='rgba(246,214,214,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-9200)/900,0,1)*cl((11400-xs)/900,0,1)*.14;if(wm>.01){g.fillStyle='rgba(255,214,150,'+wm+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: le colline bolognesi, il Santuario di San Luca sul crinale, a sera le luci della città ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const vis=cl(xs/900,0,1)*(xs<8100?1:cl((9300-xs)/900,0,1))+cl((xs-10300)/900,0,1)*cl((13900-xs)/800,0,1);
 g.fillStyle=dim('#a9bccf');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20,ph=hz-34-30*Math.abs(Math.sin((px+o)*.011))-18*Math.sin((px+o)*.027+1)-8*Math.sin((px+o)*.06);g.lineTo(px,ph)}g.lineTo(480,hz+30);g.closePath();g.fill();
 g.fillStyle=dim('#86a890');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20,ph=hz-10-10*Math.sin((px+o)*.02+2)-5*Math.sin((px+o)*.05);g.lineTo(px,ph)}g.lineTo(480,hz+30);g.closePath();g.fill();
 /* il Santuario con il portico che scende sul colle (visibile al mattino, a mezzogiorno e al tramonto) */
 const sxl=460-(o%560),v=Math.max(0,Math.min(1,vis));
 if(v>.02&&sxl>-90&&sxl<570){g.globalAlpha=.9*v;const bx=sxl,by=hz-60;poly(g,dim('#7ea07c'),[[bx-80,hz+30],[bx-54,by+30],[bx-20,by+6],[bx+16,by],[bx+54,by+14],[bx+90,hz+30]]);
  rect(g,dim('#e0c090'),bx-22,by-18,44,18);g.fillStyle=dim('#c9b4a0');g.beginPath();g.arc(bx,by-18,15,Math.PI,0);g.fill();rect(g,dim('#e0c090'),bx-30,by-10,8,10);rect(g,dim('#e0c090'),bx+22,by-10,8,10);
  ln(g,dim('#d8c8a0'),1.4,[bx-60,by+26,bx-40,by+18,bx-20,by+6]);for(let q=0;q<6;q++)rect(g,dim('#d0a878'),bx-62+q*8,by+24-q*3.4,4,7);g.globalAlpha=1}
 /* a destra, verso sera: le luci della città e dei binari */
 if(night>.35)for(let q=0;q<46;q++)dot(g,'rgba(255,214,130,'+(.4+.4*Math.sin(t*3+q))*(night-.3)+')',q*11+hr(q)*8,hz+20+hr(q*3)*8,1.2)}
/* ---- livello 2: tetti rossi e portici, la sagoma delle Due Torri, il crinale di San Luca, le luci ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,128,5,(x,i,r)=>{const zz=zn(cam+x+120);if(zz==7&&hr(i*3+1)<.55)return;const f=zz==7?.4:zz==9?.7:1,h=(44+r*52)*f,w=104;const c=dim(PM[zz][md(i,4)]);
  rect(g,c,x,hz-h,w,h+10);rect(g,dim('#b55e3e'),x-5,hz-h-8,w+10,9);for(let k=0;k<3;k++)for(let f2=0;f2<(h>70?2:1);f2++)rect(g,night>.35&&hr(i+k+f2)>.4?LIT:dim('#4a4a5a'),x+10+k*30,hz-h+10+f2*30,14,20)});
 /* campanili e cupole di terracotta fra i tetti */
 each(o,420,21,(x,i,r)=>{const zz=zn(cam+x+120);if(zz>6)return;const cx=x+r*60,k=md(i,2),base=hz-50-(i%2)*10;
  if(k==0){rect(g,dim('#b8623e'),cx-12,base-60,24,86);for(let q=0;q<3;q++)rect(g,dim('#2a2a30'),cx-5,base-52+q*20,10,12);rect(g,dim('#d8c4a0'),cx-14,base-66,28,6)}
  else{rect(g,dim('#d9a070'),cx-24,base,48,26);g.fillStyle=dim('#9a8a80');g.beginPath();g.arc(cx,base,24,Math.PI,0);g.fill()}});
 /* la sagoma delle Due Torri (a mezzogiorno e dopo) */
 const tx=1500-o;if(tx>-120&&tx<620){const c=dim('#9a5a3e');rect(g,c,tx-9,hz-210,18,220);rect(g,dim('#b8704a'),tx-12,hz-216,24,8);for(let q=0;q<4;q++)rect(g,c,tx-12+q*7,hz-224,4,8);
  g.save();g.translate(tx+40,hz+10);g.rotate(.07);rect(g,dim('#a8623e'),-12,-130,24,140);for(let q=0;q<3;q++)rect(g,dim('#b8704a'),-14+q*10,-138,6,8);g.restore()}
 /* il crinale di San Luca con il portico, al tramonto */
 const rx=2700-o;if(rx>-380&&rx<860){g.fillStyle=dim('#5a7a4a');g.beginPath();g.moveTo(rx-340,hz+30);g.bezierCurveTo(rx-220,hz-50,rx-100,hz-110,rx+40,hz-120);g.bezierCurveTo(rx+160,hz-122,rx+240,hz-70,rx+340,hz+30);g.closePath();g.fill();
  for(let q=0;q<12;q++)rect(g,dim('#d9a878'),rx-250+q*22,hz-30-q*6+(q>7?(q-7)*5:0),9,10);for(let q=0;q<5;q++)rect(g,dim('#243f2a'),rx-60+q*16,hz-96-(q%2)*6,4,22)}
 /* le luci di Piazza Verdi e della stazione */
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,214,130,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
/* ---- livello 3: la strada, zona per zona ---- */
function layerStreet(g,o,t){const gt=GT;
 const each2=(per,seed,a,b,st,hf,wd,skip)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;if(skip&&skip(wx))return;A.setDK(nf(wx));pal(g,x,wd,hf(i),i,st)})};
 each2(150,7,-50,1700,1,i=>190+hr(i*5)*90,146);
 each2(172,8,1700,3500,2,i=>150+hr(i*5)*70,166);
 each2(176,9,3500,6100,3,i=>170+hr(i*5)*60,164);
 each2(176,10,6100,7900,4,i=>150+hr(i*5)*70,164);
 each2(178,11,7900,9300,5,i=>170+hr(i*5)*60,166);
 each2(178,12,9300,10900,6,i=>100+hr(i*5)*50,166);
 each2(190,13,10900,13100,7,i=>56+hr(i*5)*40,150,wx=>hr(Math.round(wx/190)*7+3)<.5);
 each2(180,14,13100,14300,8,i=>150+hr(i*5)*60,170);
 each2(190,15,14300,W1+300,9,i=>74+hr(i*5)*30,180,wx=>hr(Math.round(wx/190)*7+3)<.5);
 /* Z1: tratti di mura medievali di mattoni lungo il canale */
 if(o+480>0&&o<1700)each(o,360,16,(x,i,r)=>{const wx=i*360;if(wx<0||wx>1640)return;A.setDK(nf(wx));rect(g,'#a8553a',x,gt-88,70,88);rect(g,'rgba(0,0,0,.14)',x+54,gt-88,16,88);merl(g,'#a8553a',x-1,gt-88,72,5,12);for(let q=0;q<9;q++)rect(g,'rgba(50,16,6,.16)',x,gt-84+q*9,70,1)});
 /* Z7: orti e vigne, balaustre di pietra e un muretto lungo la salita */
 if(o+480>10900&&o<13100){each(o,76,31,(x,i,r)=>{const wx=i*76;if(wx<10900||wx>13100)return;A.setDK(nf(wx));
   for(let q=0;q<3;q++)dot(g,['#4a7a40','#3a6a3a','#5a8a46'][q],x+10+q*14,gt-16-hr(i+q)*8,9+hr(q+i)*5);if(hr(i*3)>.6){rect(g,'#6a6258',x+6,gt-70,2,70);rect(g,'#6a6258',x+40,gt-70,2,70);ln(g,'#5a5248',1.2,[x+6,gt-56,x+42,gt-56]);ln(g,'#5a5248',1.2,[x+6,gt-36,x+42,gt-36]);for(let q=0;q<4;q++)el(g,'#5a8a3a',x+14+q*9,gt-52,7,9)}});
  A.setDK(nf(o+240));rect(g,'#c9a888',0,gt-18,480,18);for(let q=0;q<30;q++)rect(g,'rgba(0,0,0,.14)',Math.floor(o/32)*32+q*32-o,gt-18,1.4,18);rect(g,'#e0c0a0',0,gt-20,480,3)}
 /* Z9: il lungo muro della stazione e le tettoie di ferro e vetro */
 if(o+480>14300){each(o,380,32,(x,i,r)=>{const wx=i*380;if(wx<14300)return;A.setDK(nf(wx));rect(g,'#3a4650',x,gt-120,300,5);for(let q=0;q<8;q++)rect(g,'#2a2c30',x+q*42,gt-120,3,120);rect(g,'#2a2c30',x,gt-176,300,4)})}}
const k2=wx=>nf(wx);
/* ---- uccelli: piccioni in Piazza Maggiore, rondini al tramonto sopra le torri ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 for(let i=0;i<14;i++){const wx=3720+i*40+hr(i)*30;const px=wx-cam;if(px<-20||px>500)continue;const fly=(Math.sin(t*.3+i*2.1)>.92);const by=GT-5-(fly?30+Math.sin(t*9+i)*8:0),bx=px+Math.sin(t*.5+i)*10;
  el(g,'#8a8e9a',bx,by-5,6,3.6);dot(g,'#6a7a8a',bx+5,by-8,2.8);rect(g,'#d8a0a8',bx+7.4,by-8,2,1);if(fly){ln(g,'#9aa0aa',1.6,[bx-2,by-6,bx-8,by-12-Math.sin(t*9+i)*4]);ln(g,'#9aa0aa',1.6,[bx+1,by-6,bx+7,by-12-Math.sin(t*9+i)*4])}else{rect(g,'#6a6e78',bx-2,by-2,1,3);rect(g,'#6a6e78',bx+1,by-2,1,3)}}
 const sa=cl((xs-10600)/700,0,1)*cl((13600-xs)/900,0,1);
 if(sa>.05)for(let i=0;i<9;i++){const bx=((i*97+t*(60+i*6))%620)-70,by=70+hr(i)*120+Math.sin(t*2.4+i*2)*26,w=Math.sin(t*14+i)*3;g.strokeStyle='rgba(30,26,44,'+(.8*sa)+')';g.lineWidth=2;g.beginPath();g.moveTo(bx-8,by-w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke()}}
/* ---- terreno: ogni zona ha il suo selciato ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[0,1700,'#8e867a','s'],[1700,3500,'#7e7a70','q'],[3500,6100,'#d2c8b2','t'],[6100,7900,'#c6bca6','p'],[7900,9300,'#b8ae94','p'],[9300,10900,'#cdbf9e','p'],[10900,13100,'#d0aa88','t'],[13100,14300,'#a8a49a','p'],[14300,W1+400,'#c8c8c2','b']];
 rect(g,'#e6dcc4',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();
  rect(g,z[2],x0,gt+3,x1-x0,150);
  if(z[3]=='t'||z[3]=='q'){for(let r=0;r<7;r++){const yy=gt+9+r*19,off=(r%2)*30,bw=(z[3]=='q'?44:70)+r*12,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil((x1-x0)/bw)+2;k++){const px=s0+k*bw-cam+off;rect(g,((k+r)&1)?'rgba(255,255,255,.1)':'rgba(0,0,0,.07)',px,yy,bw-3,15);rect(g,'rgba(0,0,0,.18)',px,yy,1.4,17)}rect(g,'rgba(0,0,0,.1)',x0,yy+15,x1-x0,1.6)}}
  if(z[3]=='s'||z[3]=='p'){const sz=z[3]=='s'?14:9;for(let r=0;r<7;r++){const yy=gt+7+r*20,off=(r%2)*(sz/2),bw=sz+r*2,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil((x1-x0)/bw)+2;k++){const px=s0+k*bw-cam+off,h2=hr(k*13+r*5);rect(g,h2>.66?'rgba(255,255,255,.1)':h2>.33?'rgba(0,0,0,.14)':'rgba(0,0,0,.04)',px+1,yy+1,bw-2,17);rect(g,'rgba(0,0,0,.2)',px,yy,1.2,19)}}
   if(z[3]=='s')for(let q=0;q<14;q++)rect(g,'rgba(150,190,210,.22)',x0+((q*61)%Math.max(1,x1-x0)),gt+10+hr(q)*130,18+hr(q+2)*20,3)}
  if(z[3]=='b'){rect(g,'#b8b8b2',x0,gt+3,x1-x0,150);for(let q=0;q<60;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.2)':'rgba(60,60,60,.15)',x0+((q*47)%Math.max(1,x1-x0)),gt+8+hr(q+3)*136,3+hr(q)*5,2);
   rect(g,'#e8c82a',x0,gt+12,x1-x0,5);rect(g,'rgba(0,0,0,.12)',x0,gt+17,x1-x0,2);for(let q=0;q<14;q++)rect(g,'rgba(0,0,0,.14)',Math.floor((cam+x0)/60)*60+q*60-cam,gt+20,1.6,130)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 /* luce rossa e arancio del tramonto sul selciato di San Luca */
 const sg=cl((cam-10600)/700,0,1)*cl((13700-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,120,50,'+(.14*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- testi della scheda (nomi, prime battute, tappe) ---- */
const LX=[560, 1050, 1480, 2200, 2850, 3280, 3950, 4420, 4850, 5330, 5820, 6500, 6660, 7050, 7560, 8350, 8920, 9200, 9800, 10330, 10720, 11250, 11880, 12330, 12980, 13500, 13950, 14700, 15250, 15930];
const LKTXT=[
`La finestrella di via Piella: una piccola apertura in un muro, e dietro il Canale delle Moline fra le case. I bolognesi lo chiamano la "piccola Venezia". Le case che si vedono sono ancora abitate.`,
`Il Torresotto dei Piella, detto anche Porta Govese: un resto delle mura medievali. Passandoci sotto si arriva alla finestrella.`,
`Il Navile: il canale che portava le barche fino al Po. Da qui, dal porto di Bologna, partivano e arrivavano sale, legname e tessuti. Oggi restano qualche chiusa e un giardino sull’acqua.`,
`Il Quadrilatero: via Clavature, via degli Orefici, via Pescherie Vecchie, via Drapperie. È il vecchio mercato medievale: ogni strada ha preso il nome dal suo mestiere. Il Mercato di Mezzo è oggi un grande mercato coperto.`,
`Via Pescherie Vecchie: pescivendoli, fruttivendoli, e a sera l’aperitivo con crescentine e salumi.`,
`L’Osteria del Sole, in vicolo Ranocchi: la più antica osteria di Bologna, documentata dal 1465. Qui si beve soltanto vino, ma il cibo si può portare da fuori.`,
`Piazza Maggiore: il cuore di Bologna, circondata da portici e palazzi medievali. Al centro il Crescentone, la pedana rialzata, dove d’estate si guarda il cinema sotto le stelle. Gli studenti dicono che attraversare la piazza in diagonale porti sfortuna alla laurea.`,
`La Fontana del Nettuno: il "Gigante" dei bolognesi. La fece Giambologna fra il 1563 e il 1566, con un Nettuno di bronzo e il suo tridente. Il tridente ha ispirato il simbolo di una famosa casa automobilistica nata a Bologna.`,
`San Petronio: una basilica enorme e incompiuta. La metà inferiore della facciata è di marmo, la metà superiore di mattoni a vista. Dentro c’è la meridiana di Cassini, lunga circa 67 metri.`,
`Il Palazzo del Podestà e il Palazzo Re Enzo: due palazzi medievali che si danno la mano. Re Enzo, figlio di Federico II, fu prigioniero qui dal 1249 fino alla morte. Sotto il Voltone, dicono, un sussurro si sente da un angolo all’altro.`,
`Il Palazzo d’Accursio, sede del Comune, con la torre dell’orologio. Sopra il portale c’è una statua di bronzo di Gregorio XIII, il papa bolognese del calendario. Accanto, la Sala Borsa: oggi una biblioteca, con un pavimento di vetro che lascia vedere antiche rovine.`,
`La Torre degli Asinelli: costruita fra il 1109 e il 1119, alta più di 97 metri, 498 gradini. Si dice che gli studenti che ci salgono prima della laurea non si laureino mai.`,
`La Garisenda: più bassa e molto più inclinata. Dante la mette nell’Inferno, e una lapide ricorda i suoi versi. Nel Trecento fu accorciata per paura che crollasse.`,
`Il Palazzo della Mercanzia, della fine del Trecento. Qui è conservata una tagliatella d’oro larga 8 millimetri: la misura ufficiale della vera tagliatella bolognese.`,
`La Strada Maggiore: l’antica via Emilia che entra in città. Qui il portico dei Servi è il più ampio di Bologna, e Casa Isolani conserva un portico di legno medievale.`,
`L’Archiginnasio: la prima sede unica dell’Università, costruita nel 1562-63 e usata fino al 1803. Il portico e le pareti del cortile sono coperti da circa seimila stemmi di professori e studenti.`,
`Il Teatro Anatomico: una sala tutta di legno di abete intagliato, costruita fra il 1636 e il 1638. Le lezioni di anatomia si facevano d’inverno, per il freddo. Fu quasi distrutto dai bombardamenti del 1944 e ricostruito con i pezzi originali.`,
`La Sala dello Stabat Mater, un tempo aula dei giuristi. Il nome ricorda la prima esecuzione, il 18 marzo 1842, dello Stabat Mater di Rossini, diretto da Donizetti.`,
`Santo Stefano, detta delle Sette Chiese o "Santa Gerusalemme": un gruppo di chiese e cortili che, si dice, il vescovo Petronio fece costruire per ricordare i luoghi della Passione. Oggi ne restano quattro principali.`,
`Il Cortile di Pilato, detto anche Santo Giardino: un cortile con un grande catino di marmo, regalo dei re longobardi.`,
`Via Fondazza, con i suoi portici bassi: al numero 36 visse il pittore Giorgio Morandi, con le sorelle, dal 1910 al 1964.`,
`Porta Saragozza: da qui parte il portico di San Luca, il portico più lungo del mondo: quasi 3 chilometri e 800 metri e 666 arcate.`,
`L’Arco del Meloncello, un arco barocco che scavalca la strada: da qui il portico comincia a salire sul colle.`,
`Il portico di San Luca, costruito fra il 1674 e il 1739: 666 arcate, 15 cappelle, fino al Santuario. Si dice che le 666 arcate siano il serpente del male, schiacciato dalla Madonna.`,
`Il Santuario della Madonna di San Luca, sul Colle della Guardia, a circa 300 metri di altezza. Ogni anno, a maggio, l’icona della Madonna scende in processione in città.`,
`Il Teatro Comunale, inaugurato il 14 maggio 1763: il primo teatro costruito dalla città stessa. Qui nel 1871 si diede il primo Lohengrin di Wagner in Italia, con Verdi in prima fila.`,
`Piazza Verdi: il cuore del quartiere universitario. Di sera si riempie di studenti, di musica, di chiacchiere e, a volte, di assemblee.`,
`La Stazione Centrale: una delle più grandi d’Italia, un nodo dove i treni da nord e da sud si incontrano. La prima stazione è del 1859; sotto i binari c’è anche la stazione dell’alta velocità, a 23 metri di profondità.`,
`Il 2 agosto 1980, alle 10:25, una bomba esplose nella sala d’attesa: 85 morti, più di 200 feriti. L’orologio sulla facciata è rimasto fermo a quell’ora. Ogni anno, il 2 agosto, la città si ferma per ricordare.`,
`In fondo al binario, la luce di un altro mondo ti chiama.`
];
const INTRO=`Bologna, dall’alba alla notte. Parti la mattina presto dai canali nascosti, dove una finestrella si apre su una piccola Venezia; poi il Quadrilatero, con le sue botteghe di sfoglia e mortadella, e Piazza Maggiore con San Petronio e il Nettuno. A mezzogiorno le Due Torri, nel primo pomeriggio la città dei dottori, l’Archiginnasio e il suo teatro anatomico; poi Santo Stefano e i suoi cortili. Al tramonto sale il lungo portico di San Luca; la sera Piazza Verdi si riempie di studenti, e a notte la Stazione Centrale ti aspetta con i suoi treni. Il tempo qui si piega: i bolognesi di ogni epoca ti vengono incontro, e la città è quella di oggi.`;
const NAME={bo_bruno:`Bruno, il vecchio del Canale`,bo_marisa:`Marisa, la sfoglina`,bo_petronio:`San Petronio`,bo_dalla:`Lucio Dalla`,bo_dante:`Dante Alighieri`,bo_bassi:`Laura Bassi`,bo_morandi:`Giorgio Morandi`,bo_giulia:`Giulia, la studentessa fuorisede`};
const GREET={
bo_bruno:`Buongiorno! L’acqua qui scorre piano, ma ha sempre qualcosa da dire. Fermati, Pierpaolo: io ormai faccio l’umarèl, e di tempo ne ho.`,
bo_marisa:`Vieni, Pierpaolo, non stare sulla porta! Ho la sfoglia tirata da un’ora e le mani ancora piene di farina. Chiedi pure: qui si parla mentre si lavora.`,
bo_petronio:`Pace a te, forestiero. Questa è la mia città da sedici secoli, e io la guardo da qui. Chiedi pure, Pierpaolo: il tempo in piazza è lungo.`,
bo_dalla:`Eilà! Vieni qui, siediti: questa piazza è casa mia. Sei Pierpaolo, vero? Dai, che di storie ne ho tante, e non sono tutte vere.`,
bo_dante:`Ben trovato, viandante. Da questa torre ho tratto un paragone che ancora mi segue. Siediti, Pierpaolo, e parliamo di Bologna.`,
bo_bassi:`Buon pomeriggio. In questo palazzo, per più di due secoli, hanno studiato e insegnato in tanti. Io sono stata una delle poche donne: chiedi pure, Pierpaolo.`,
bo_morandi:`Buon pomeriggio. Non faccio mai discorsi lunghi, Pierpaolo: preferisco guardare. Ma se vuoi, chiedi pure.`,
bo_giulia:`Ciao! Sei nuovo? Si vede, hai lo sguardo di chi cerca la strada sotto i portici. Piazza Verdi è il posto giusto per chiedere, Pierpaolo.`
};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)})),d:{a:{t:d}}});
const npcs=[
 /* Bruno: pensionato basso e robusto, berretto di lana, giacca verde scuro, mani dietro la schiena, sguardo sereno */
 NP('bo_bruno',NAME.bo_bruno,740,GREET.bo_bruno,{skin:'#d8a888',top:'#2f4a38',bot:'#4a4a52',hair:'#c8c8c8',s:.94},(g,b,t)=>{g.fillStyle='#4a4a56';g.beginPath();g.arc(1,-103+b,12.6,Math.PI,0);g.fill();rect(g,'#3a3a46',-11,-106+b,24,5);dot(g,'#8a8a96',1,-116+b,3);rect(g,'#2f4a38',-15,-80,6,32);rect(g,'#d8a888',-14,-50,5,5);rect(g,'rgba(0,0,0,.14)',3,-90+b,10,40);dot(g,'#c88a6a',7,-95+b,1.2);rect(g,'#6a4a2a',9,-96+b,6,1.6)}),
 /* Marisa: grembiule bianco, fazzoletto in testa, mani infarinate, mattarello */
 NP('bo_marisa',NAME.bo_marisa,2130,GREET.bo_marisa,{skin:'#e0a888',top:'#a83a52',bot:'#3a3a48',hair:'#5a4a3a',s:1.0,long:true},(g,b,t)=>{poly(g,'#f4f1ea',[[-12,-86+b],[12,-86+b],[17,-6],[-17,-6]]);rect(g,'#e8e4da',-12,-88+b,24,4);poly(g,'#c8402a',[[-13,-104+b],[13,-104+b],[12,-114+b],[-12,-114+b]]);dot(g,'#c8402a',-12,-108+b,3);for(let q=0;q<4;q++)dot(g,'#f4efe0',-8+q*5,-109+b,1.2);
  for(let q=0;q<5;q++)dot(g,'rgba(255,255,255,.9)',14+q*2,-58+(q%2)*3,1.4);rect(g,'#c8a060',8,-60,34,7);rect(g,'#a8803a',6,-62,4,11);rect(g,'#a8803a',44,-62,4,11);for(let q=0;q<4;q++)dot(g,'rgba(255,255,255,.8)',-4+q*3,-52,1.6)}),
 /* San Petronio: veste bianca, mantello rosso, mitra, pastorale, aureola dorata, modellino della città */
 NP('bo_petronio',NAME.bo_petronio,4760,GREET.bo_petronio,{skin:'#e0b898',top:'#f4f0e6',bot:'#f2efe6',hair:'#cfcfcf',long:true,s:1.05},(g,b,t)=>{poly(g,'#b8202a',[[-14,-90+b],[-28,-6],[-6,-4],[0,-84+b]]);poly(g,'#b8202a',[[14,-90+b],[28,-6],[6,-4],[0,-84+b]]);rect(g,'#e8b830',-12,-90+b,24,4);
  poly(g,'#f4f0e6',[[-9,-110+b],[-8,-132+b],[0,-140+b],[8,-132+b],[9,-110+b]]);rect(g,'#e8b830',-9,-120+b,18,3);rect(g,'#d8302a',-1.5,-136+b,3,14);
  g.strokeStyle='#e8c040';g.lineWidth=2.4;g.beginPath();g.ellipse(1,-120+b,19,5,0,0,7);g.stroke();
  rect(g,'#8a6a2a',20,-124,3,120);g.strokeStyle='#8a6a2a';g.lineWidth=3;g.beginPath();g.arc(26,-124,6,Math.PI*.7,Math.PI*2.3);g.stroke();
  rect(g,'#c8b894',-26,-70,18,13);rect(g,'#b0603e',-24,-80,6,10);rect(g,'#d8a060',-17,-84,6,14);poly(g,'#b0603e',[[-13,-82],[-9,-90],[-5,-82]]);rect(g,'#6a4a2a',-26,-58,18,2)}),
 /* Lucio Dalla: maglione scuro, cappello di lana, occhiali tondi, barba, sorriso furbo */
 NP('bo_dalla',NAME.bo_dalla,4100,GREET.bo_dalla,{skin:'#e0b090',top:'#34343e',bot:'#2a2a34',hair:'#6a4a2a',s:1.0},(g,b,t)=>{g.fillStyle='#5a3a5a';g.beginPath();g.arc(1,-103+b,13.4,Math.PI,0);g.fill();rect(g,'#4a2a4a',-12,-106+b,26,5);dot(g,'#7a5a7a',1,-117+b,3.4);
  poly(g,'#4a3a2a',[[-5,-96+b],[9,-96+b],[8,-86+b],[1,-83+b],[-4,-87+b]]);rect(g,'#f4ecd8',1,-92+b,8,1.4);
  g.strokeStyle='#2a2a2a';g.lineWidth=1.3;g.beginPath();g.arc(7,-102+b,3.8,0,7);g.stroke();g.beginPath();g.arc(-1,-102+b,3.8,0,7);g.stroke();ln(g,'#2a2a2a',1.2,[3,-102+b,4,-102+b]);
  rect(g,'#3a3a46',-13,-70,26,5)}),
 /* Dante: lucco rosso, cappuccio con corona d'alloro, profilo affilato, libro sotto il braccio */
 NP('bo_dante',NAME.bo_dante,6580,GREET.bo_dante,{skin:'#d8a888',top:'#a8202a',bot:'#8a1a22',hair:'#3a2a1a',long:true},(g,b,t)=>{poly(g,'#b8202a',[[-14,-112+b],[14,-112+b],[16,-90+b],[-16,-90+b]]);g.fillStyle='#a8202a';g.beginPath();g.arc(1,-104+b,13.6,Math.PI,0);g.fill();rect(g,'#a8202a',-12,-106+b,8,18);
  for(let q=0;q<9;q++)dot(g,'#3a7a3a',-10+q*2.8,-116+b-Math.sin(q/8*Math.PI)*3,2.2);poly(g,'#d8a888',[[7,-102+b],[14,-98+b],[7,-96+b]]);
  rect(g,'#6a3a1a',-24,-72,13,18);rect(g,'#d9b24a',-24,-72,13,2);rect(g,'#f4ecd0',-22,-69,9,12)}),
 /* Laura Bassi: abito settecentesco azzurro, collo di pizzo, capelli raccolti con un nastro, libro e strumento da laboratorio */
 NP('bo_bassi',NAME.bo_bassi,8470,GREET.bo_bassi,{skin:'#ecc8a8',top:'#6aa0d8',bot:'#5a90c8',hair:'#5a3a22',long:true,s:1.0},(g,b,t)=>{poly(g,'#5a90c8',[[-14,-90+b],[14,-90+b],[28,-4],[-28,-4]]);poly(g,'rgba(255,255,255,.2)',[[-14,-90+b],[-2,-90+b],[-8,-4],[-26,-4]]);
  poly(g,'#f4f0e8',[[-12,-90+b],[12,-90+b],[8,-80+b],[-8,-80+b]]);for(let q=0;q<5;q++)dot(g,'#e4dccb',-8+q*4,-81+b,1.6);
  dot(g,'#5a3a22',-4,-117+b,7);poly(g,'#5a3a22',[[-12,-104+b],[12,-104+b],[10,-112+b],[-10,-112+b]]);rect(g,'#c8402a',-8,-114+b,10,3);dot(g,'#c8402a',-9,-113+b,2.6);
  rect(g,'#6a3a1a',-30,-66,14,18);rect(g,'#f4ecd0',-28,-64,10,13);el(g,'#cfe4ee',18,-52,6,8);rect(g,'#9a9aa2',16,-64,4,8);rect(g,'#6a4a2a',12,-44,14,3)}),
 /* Giorgio Morandi: completo grigio, panciotto, cravatta scura, cappello a falda, mani sottili, una bottiglia in mano */
 NP('bo_morandi',NAME.bo_morandi,10630,GREET.bo_morandi,{skin:'#d8b090',top:'#8a8a90',bot:'#7a7a82',hair:'#8a8a8a',s:1.0},(g,b,t)=>{rect(g,'#b8b4a4',-5,-90+b,10,38);rect(g,'#2a2a30',-1.5,-90+b,3,22);rect(g,'#6a6a72',-13,-90+b,26,4);
  g.fillStyle='#5a5a62';g.beginPath();g.arc(1,-110+b,10,Math.PI,0);g.fill();rect(g,'#4a4a52',-16,-112+b,34,4);rect(g,'#3a3a42',-9,-114+b,20,3);
  rect(g,'#a8a090',-24,-66,8,28);rect(g,'#a8a090',-22,-72,4,8);dot(g,'#d8b090',-20,-54,2.4)}),
 /* Giulia: giubbotto di jeans, zaino, cuffie al collo, bicicletta a mano, bicchiere */
 NP('bo_giulia',NAME.bo_giulia,13900,GREET.bo_giulia,{skin:'#e8b890',top:'#5a7ab0',bot:'#2a2a40',hair:'#5a3a22',s:1.0},(g,b,t)=>{rect(g,'#7a9ac8',-13,-90+b,26,5);rect(g,'rgba(0,0,0,.12)',4,-88+b,10,40);rect(g,'#c8402a',-20,-86+b,10,34);rect(g,'#a8302a',-20,-86+b,10,4);
  g.fillStyle='#5a3a22';g.beginPath();g.arc(1,-103+b,13,Math.PI*.9,Math.PI*2.1);g.fill();rect(g,'#5a3a22',-12,-104+b,6,20);
  g.strokeStyle='#2a2a2e';g.lineWidth=2.4;g.beginPath();g.arc(1,-93+b,10,.2,Math.PI-.2);g.stroke();dot(g,'#2a2a2e',-9,-90+b,3.4);dot(g,'#2a2a2e',11,-90+b,3.4);
  const bx=36,by=-14;[bx-22,bx+22].forEach(wx=>{g.strokeStyle='#1a1a1c';g.lineWidth=2.6;g.beginPath();g.arc(wx,by,14,0,7);g.stroke()});ln(g,'#c8402a',2.6,[bx-22,by,bx-6,by-24,bx+12,by-24,bx+22,by]);ln(g,'#c8402a',2.2,[bx-6,by-24,bx,by]);ln(g,'#26262a',2,[bx+12,by-24,bx+14,by-34]);rect(g,'#26262a',bx-12,by-29,14,4);
  rect(g,'#f4f4ee',10,-62,4,8);rect(g,'rgba(255,200,110,.7)',10,-59,4,4)})
];
/* ---- oggetti lungo il percorso ---- */
const props=[['botarga',150,'VIA PIELLA'],['bolamp',90],['bofinestrella',560],['bobici',690],['botorresotto',1050],['bonavile',1480],['boalbero',1650,1],
 ['botarga',1760,'VIA CLAVATURE'],['boquadrilatero',2200],['bobici',2420],['bopescherie',2850],['botarga',3040,'VIA PESCHERIE VECCHIE'],['boosteria',3280],
 ['botarga',3560,'PIAZZA MAGGIORE'],['bopiazza',3950],['bonettuno',4420],['botarga',4560,'PIAZZA DEL NETTUNO'],['bopetronio',4850],['bopodesta',5330],['boaccursio',5820],
 ['botarga',6160,'PIAZZA DI PORTA RAVEGNANA'],['boasinelli',6500],['bogarisenda',6660],['bobici',6820],['bomercanzia',7050],['botarga',7270,'STRADA MAGGIORE'],['bostradamaggiore',7560],
 ['botarga',7960,'PIAZZA GALVANI'],['bogalvani',8130],['boarchiginnasio',8350],['bostudenti',8700],['boteatroanat',8920],['bobici',9150],
 ['botarga',9360,'PIAZZA SANTO STEFANO'],['bosantostefano',9800],['bopilato',10330],['bofondazza',10720],
 ['botarga',10960,'VIA DI SAN LUCA'],['bosaragozza',11250],['bocipresso',11500,1.1],['bomeloncello',11880],['bocipresso',12090,1],['boportico',12330],['bocipresso',12610,1.2],['bosanluca',12980],['bocipresso',13090,1],
 ['botarga',13160,'PIAZZA VERDI'],['boteatrocomunale',13500],['bopiazzaverdi',13950],['bobici',14180],
 ['bostazione',14700],['boorologio',15250],['bovarco',W1-370]];
/* un lampione ogni tanto, dove la strada è libera */
const LM=props.filter(p=>p[0]!='botarga'&&p[0]!='bolamp'&&p[0]!='bocipresso'&&p[0]!='bobici'&&p[0]!='boalbero').map(p=>p[1]);
for(let x=230;x<W1-420;x+=360){if(LM.every(m=>Math.abs(m-x)>300)&&!props.some(p=>(p[0]=='bolamp')&&Math.abs(p[1]-x)<200))props.push(['bolamp',x])}
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'bologna',name:'Bologna · Dai canali alla Stazione Centrale',width:W1,sky:['#c9aab4','#f0b8a6','#fbd8b0'],gt:372,gr:['#8e867a','#5a5348'],chord:[164.8,196,220,261.6],amb:'#ffd8b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();


/* --- Battute: 12 per personaggio (da bologna.txt) --- */
(function(){
const TOPX_BO={
bo_bruno:[
[`Come ti chiami e da quanto vivi vicino al canale?`,`Bruno, settantasei anni, e abito in una casa che si affaccia sull’acqua da quando ero ragazzo. Ho lavorato una vita per chi cura i canali: chiuse, paratoie, fango da togliere. Oggi guardo e basta, come ogni bravo umarèl.`],
[`Che cos’è la finestrella di via Piella?`,`Una piccola apertura in un muro, da cui si vede il Canale delle Moline fra le case: i bolognesi lo chiamano la "piccola Venezia". Ci si arriva passando sotto il Torresotto dei Piella, che è anche Porta Govese. È uno dei pochi tratti d’acqua rimasti scoperti, e le case che si vedono sono ancora abitate.`],
[`Perché una città senza fiume ha tanti canali?`,`Perché Bologna non ha un fiume che la attraversi: il Reno e il Savena scorrono fuori dalle mura. Dal XII secolo i bolognesi li hanno deviati con le chiuse, una a Casalecchio e una a San Ruffillo, per portare l’acqua in città. Servivano ai mulini, alla seta e ai trasporti verso il Po.`],
[`Che cos’era il Navile?`,`Il canale navigabile: partiva dal porto, qui vicino, e portava le barche fino a Ferrara e al Po. Per superare i dislivelli c’erano i sostegni, cioè le chiuse a gradini, e le chiatte erano tirate da buoi. La navigazione è finita nel 1948.`],
[`Com’era il porto di Bologna?`,`Il Porto Navile, disegnato dal Vignola nel 1548, dentro le mura. Lì vicino c’è la Salara, il vecchio magazzino del sale che arrivava da Cervia. Oggi resta un tratto di porto e un giardino sull’acqua.`],
[`Che c’entrano la seta e i mulini?`,`Moltissimo. L’acqua dei canali faceva girare le ruote dei mulini da grano e dei filatoi per la seta: fra il Quattrocento e il Settecento Bologna si fece un nome proprio con la seta. E le Moline si chiamano così per le ruote dei mulini, una quindicina, dicono.`],
[`Che fine hanno fatto i canali?`,`Quasi tutti sono stati coperti nel Novecento, per far posto a strade e parcheggi. Il porto fu interrato dopo il piano regolatore del 1889. Adesso qualche tratto è tornato a vedersi, come al Cavaticcio, e ogni tanto qualcuno parla di riaprirne altri: sono discorsi da bar, ma belli.`],
[`Ci sono altre acque nascoste in città?`,`Una cosa che pochi sanno: sotto i nostri piedi scorre ancora l’Aposa, un torrente naturale che passa sottoterra. Nessuno lo vede, ma c’è. È il fantasma d’acqua di Bologna.`],
[`Che cos’è un umarèl?`,`Un pensionato che si ferma a guardare i cantieri, con le mani dietro la schiena, e dà consigli che nessuno ha chiesto. La parola è bolognese e vuol dire "ometto". Oggi la usano anche fuori da Bologna, e io ne vado fiero.`],
[`Perché Bologna ha tanti soprannomi?`,`Ne ha quattro: la Dotta, per l’università più antica del mondo occidentale; la Grassa, per la cucina; la Rossa, per mattoni e tetti, e per la sua storia politica; la Turrita, per le torri. Una città così non poteva accontentarsi di un nome solo.`],
[`Come parlano i bolognesi?`,`"Mo" per dire "ma dai", "brisa" per dire "mica", e "soccia" o "sorbole" per stupirsi. Si dice che "sbolognare" venga dal bolognino, una moneta antica che continuava a girare anche quando non valeva più niente. E c’è un proverbio: "oro di Bologna, rosso dalla vergogna".`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Va’ pure, Pierpaolo, e portati dietro un po’ d’acqua nel cuore. Se ripassi, mi trovi qui, a guardare il canale con le mani dietro la schiena. Saluta le Due Torri da parte mia.`],
],
bo_marisa:[
[`Come ti chiami e che lavoro fai?`,`Marisa, sfoglina da più di quarant’anni. Una volta si diceva azdôra: la donna che comandava in casa e in cucina. Oggi "sfoglina" è un mestiere vero, in bottega, e io la pasta la tiro a mano, col mattarello, senza macchinette.`],
[`Che cos’è il Quadrilatero?`,`Il vecchio mercato medievale: via Clavature, via degli Orefici, via Pescherie Vecchie, via Drapperie. Ogni nome racconta un mestiere: gli orafi, i tessitori, i pescivendoli. Il Mercato di Mezzo era l’antico nome di una strada, che dopo la ricostruzione è diventata via Rizzoli; oggi è anche un mercato coperto.`],
[`Come si tira la sfoglia?`,`Farina e uova, e poi braccia: si tira col mattarello fino a farla sottile, poco meno di un millimetro. Poi la si arrotola e si taglia a strisce con il coltello. Non si misura a occhio, si misura con le mani.`],
[`Che cos’è la tagliatella "depositata"?`,`Il 16 aprile 1972 l’Accademia Italiana della Cucina e la Confraternita del Tortellino hanno depositato alla Camera di Commercio la misura della tagliatella: 8 millimetri da cotta, 6,5-7 da cruda. Una tagliatella d’oro, larga proprio così, è conservata al Palazzo della Mercanzia. Dicono che sia circa la dodicimiladuecentosettantesima parte della Torre degli Asinelli: roba da bolognesi.`],
[`Com’è il vero ragù?`,`Carne di manzo e pancetta, soffritto di cipolla, sedano e carota, un po’ di pomodoro, vino e latte, a fuoco bassissimo per ore. La ricetta del 1982 non ha né aglio né origano. Va sulle tagliatelle e nelle lasagne; gli spaghetti alla bolognese, qui, non li conosce nessuno.`],
[`Che cosa sono i tortellini e come si mangiano?`,`Piccoli, di sfoglia sottile, ripieni di lombo di maiale, prosciutto crudo, mortadella, Parmigiano e noce moscata, e si mangiano in brodo di cappone e manzo. La ricetta la depositò la Dotta Confraternita il 7 dicembre 1974. Si dice che li inventò un oste che spiò l’ombelico di Venere: a Castelfranco Emilia, fra Bologna e Modena, ci litigano da secoli.`],
[`Perché la mortadella è così famosa?`,`La vera Mortadella Bologna è IGP: carne di maiale, cubetti di lardo, spezie, cotta in forno. Dicono che sia nata con le corporazioni dei salumieri del Duecento. E si dice che va affettata così sottile da vederci in trasparenza San Luca.`],
[`Che cos’è l’Osteria del Sole?`,`La più antica osteria di Bologna, in vicolo Ranocchi, documentata dal 1465. Servono solo vino: il cibo lo porti tu, magari un po’ di salumi comprati qui vicino. È una regola che i bolognesi difendono con orgoglio.`],
[`Che cosa si mangia per merenda e per dolce?`,`Il panino con la mortadella, che è la merenda più bolognese che ci sia, e le crescentine con i salumi. Per dolce la pinza bolognese, un rotolo di pasta frolla con la mostarda di pere e mele cotogne. Chi non l’ha provata non ha mai vissuto davvero a Bologna.`],
[`Ci sono botteghe storiche da non perdere?`,`Una per una: la Tamburini in via Caprarie, la Atti con più di centocinquant’anni, la Simoni in via Drapperie che dal 1960 fa la mortadella artigianale, la Brunelli dove si frigge il pesce dal 1924. Fai due passi nel Quadrilatero e senti l’odore: le trovi da solo.`],
[`Come parlate in dialetto, qui?`,`"Mo dai!" per dire "ma dai", "brisa male" per dire "mica male", e "soccia" quando restiamo di stucco. Alla tagliatella si dice "tajadèl". A Bologna si parla in fretta, ma si ascolta, e se ti dico "mo vieni qua" è perché ti voglio bene.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Vai, Pierpaolo, e non uscire dal Quadrilatero senza aver mangiato qualcosa! Se ripassi, ti faccio provare la sfoglia ancora calda. E ricordati: a Bologna si ride mangiando.`],
],
bo_petronio:[
[`Chi sei e da dove vieni?`,`Petronio, ottavo vescovo di Bologna, dal 431 al 450. La tradizione mi vuole venuto da Roma, e per secoli la mia storia è stata più leggenda che cronaca. La mia festa è il 4 ottobre.`],
[`Come sei diventato patrono di Bologna?`,`Il 4 ottobre 1141 il vescovo Enrico e i monaci di Santo Stefano ritrovarono la mia tomba. Nel 1253 il libero Comune mi scelse come patrono, al posto di San Pietro. Da allora il 4 ottobre è la festa della città.`],
[`Che cos’è Santo Stefano?`,`Le Sette Chiese, la "Santa Gerusalemme" di Bologna. Si dice che dopo un viaggio in Terra Santa io abbia voluto ricostruirne i luoghi sacri qui; la tradizione parla anche di un antico tempio di Iside su cui sorse. Oggi le chiese principali sono quattro.`],
[`Com’era Bologna ai tuoi tempi?`,`Bononia, una città romana lungo la via Emilia, nata da una colonia; prima di allora c’erano stati gli etruschi e i celti. Quando arrivai, si dice, era ferita dalle invasioni, e io mi misi a ricostruire edifici e chiese.`],
[`Come nasce la basilica di San Petronio?`,`Il 7 giugno 1390 si posò la prima pietra: la volle il Comune, non il clero, per mostrare la libertà dei bolognesi. Il progetto era dell’architetto Antonio di Vincenzo, e voleva essere una chiesa grandissima. Il mio nome sulla facciata è un onore e un peso.`],
[`Perché la facciata è incompiuta?`,`Per mancanza di soldi, e perché i progetti cambiarono più volte. Il marmo arriva solo a metà, il resto sono mattoni a vista. Si dice che il Papa non volesse una chiesa più grande di San Pietro, ma la verità è più semplice: i fondi finirono.`],
[`Che cos’è la meridiana di San Petronio?`,`Una linea sul pavimento della chiesa, lunga circa 67 metri, la più lunga al mondo in un luogo chiuso. Nel 1576 la fece Egnazio Danti, nel 1655 la rifece Giandomenico Cassini. Un raggio di sole passa da un foro nella volta e cade sulla linea: così si misura il tempo.`],
[`Che cosa è successo di importante in questa basilica?`,`Nel 1530 Carlo V fu incoronato imperatore qui, dal papa Clemente VII. Diciassette anni dopo la basilica ospitò anche due sessioni del Concilio di Trento. E nel 2012 fu teatro dell’addio a Lucio Dalla: una piazza intera in silenzio.`],
[`Che cos’è la Fontana del Nettuno?`,`Il "Gigante": un Nettuno di bronzo con il tridente, fatto da Giambologna fra il 1563 e il 1566. Le sirene che spruzzano acqua furono criticate dai bolognesi dell’epoca. E si dice che il tridente abbia dato il simbolo a una casa automobilistica nata qui.`],
[`Che cosa c’è sotto il Voltone del Podestà?`,`Un voltone dove si incrociano due strade e dove, si dice, un sussurro si sente da un angolo all’altro. Accanto sta il Palazzo Re Enzo: il figlio di Federico II fu prigioniero qui dal 1249 al 1272. Si racconta che di notte lo tenessero in una gabbia appesa, ma non so se è vero.`],
[`Chi è il papa di bronzo sul Palazzo d’Accursio?`,`Gregorio XIII, bolognese: Ugo Boncompagni, nato nel 1502, professore di diritto all’università. Il 24 febbraio 1582 firmò la bolla che riformò il calendario: dopo il 4 ottobre venne subito il 15. Si dice che col tempo la statua sia stata ritoccata nei tratti perché somigliasse alla mia.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Va’ in pace, e porta con te la città. Nel 2000 le mie spoglie sono tornate unite: il corpo da Santo Stefano, la testa che già stava qui. Quando passi, saluta la mia basilica.`],
],
bo_dalla:[
[`Chi sei e dove sei nato?`,`Lucio Dalla, nato a Bologna il 4 marzo 1943: "4/3/1943", come la mia canzone. Sono nato in piazza Cavour, poi ho abitato in via delle Fragole, in vicolo Mariscotti e in via D’Azeglio. Non ho mai lasciato Bologna davvero.`],
[`Come hai cominciato a fare musica?`,`Col clarinetto, in una banda dixieland di Bologna: la Rheno Dixieland Band. Il jazz mi ha insegnato a stare sul palco e a ridere di me stesso. Poi sono venute la voce e le canzoni.`],
[`Qual è la vera "Piazza Grande"?`,`Per me è sempre stata Piazza Maggiore. Il testo lo scrisse Gianfranco Baldazzi, che pensava a piazza Cavour, e la musica è di Ron: c’è chi la cerca persino a Pavia. Ognuno ha la sua piazza grande, e io non sono geloso.`],
[`Che cos’è "4/3/1943"?`,`La canzone con cui nel 1971 arrivai terzo a Sanremo. Il titolo è la mia data di nascita: l’ho messa lì come un secchio d’acqua. Da quel momento la gente cominciò a cantarla per strada.`],
[`Che cos’è "Caruso"?`,`Una canzone che scrissi nel 1986 sugli ultimi giorni del tenore Enrico Caruso. Piacque a tutti, anche a Luciano Pavarotti, che la cantò e la fece vendere in milioni di copie. Una cosa nata a Bologna e arrivata dappertutto.`],
[`Com’è la tua casa in via D’Azeglio?`,`Al numero 15, una casa piena di opere d’arte e di ricordi che oggi è un museo, curato dalla Fondazione. Sul campanello ci sono due nomi inventati: l’avvocato Alvaro Tritone e il commendator Domenico Sputo. Servivano a farmi scherzare con gli amici.`],
[`Eri anche un tifoso?`,`Eccome: del Bologna calcio e della Virtus basket. La domenica soffrivo e mi mangiavo le unghie. Bologna senza tifo non esiste.`],
[`Che rapporto ha Bologna con la musica?`,`Qui visse Rossini, qui nel 1763 aprì il Teatro Comunale e nel 1871 si diede il primo Wagner in Italia. Oggi Bologna è anche Città creativa UNESCO della musica. È una città che ascolta, e che non perdona le stonature.`],
[`Che cos’è il Dams?`,`Il corso di arti, musica e spettacolo dell’università. Dicevo che dovrebbe tornare a essere quello che fu: una fucina di idee, di cinema e di teatro. Bologna fa la Dotta, ma è anche un po’ una scuola di vita.`],
[`Com’è stato il tuo funerale?`,`Sono morto il 1° marzo 2012 a Montreux, dopo un concerto. Il funerale fu il 4 marzo, il giorno in cui avrei compiuto sessantanove anni, a San Petronio: dalla piazza fino in via D’Azeglio c’erano dai cinquanta ai settantamila bolognesi. A Bologna, quando c’è da salutare un amico, ci si trova in piazza.`],
[`Che cosa c’entra la Madonna di San Luca con la tua strada?`,`Ogni maggio la Madonna scende dal colle e passa proprio da via D’Azeglio, poi da piazza Maggiore, fino alla Cattedrale. È un rito che i bolognesi sentono tantissimo, anche i non credenti. E io, quando passava, la guardavo dalla finestra.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Vai, Pierpaolo, e canta qualcosa per strada: fa bene a tutti. Se ripassi, io sono qui, a farmi fare compagnia dalla piazza. Un abbraccio alle Due Torri!`],
],
bo_dante:[
[`Chi sei e perché sei a Bologna?`,`Dante Alighieri, fiorentino. A Bologna, dicono, venni da giovane, nel 1287; e dopo l’esilio ci ripensai spesso. Dopo Firenze, è la città che cito di più nelle mie opere.`],
[`Che cosa c’entra la Garisenda con l’Inferno?`,`Nel canto XXXI vedo il gigante Anteo chinarsi, e lo paragono alla Garisenda: guardata dal lato inclinato, quando passa una nuvola, sembra pendere ancora di più. Una lapide su un lato della torre lo ricorda. In un sonetto scherzai anche con i miei occhi, distratti dalla Garisenda.`],
[`Parlami delle due torri.`,`La Torre degli Asinelli fu costruita fra il 1109 e il 1119, alta più di 97 metri, con 498 gradini. La Garisenda, più bassa e più inclinata, fu abbassata nel Trecento perché si temeva il crollo: era alta circa 60 metri. Se sei studente, non salire sugli Asinelli prima di laurearti: si dice che non ti laurei più.`],
[`Perché Bologna è piena di torri?`,`Nel Medioevo erano più di cento, qualcuno dice fino a centoottanta, e servivano da rifugio e da difesa e per mostrare la ricchezza delle famiglie. Ne restano una ventina. Per questo Bologna si chiama anche la Turrita.`],
[`Che cos’è "sipa"?`,`Il modo in cui i bolognesi dicevano "sì". Nel canto XVIII dell’Inferno un bolognese, Venedico Caccianemico, dice che fra il Reno e il Savena quelli che dicono "sipa" sono meno dei dannati che ci sono lì. Non fu un complimento, lo so.`],
[`Che cosa hai scritto sul dialetto bolognese?`,`Nel "De vulgari eloquentia" notai che anche in una stessa città si parla in modo diverso: gli abitanti di Strada Maggiore parlano diversamente da quelli di Borgo San Felice. Una lapide a Porta Maggiore lo ricorda. Mi piaceva ascoltare come parla la gente.`],
[`Che cos’è la Strada Maggiore?`,`L’antica via Emilia romana che entra in città. Lungo il suo percorso vedi Casa Isolani, con un portico di legno medievale, e il portico dei Servi, il più ampio di Bologna. Oggi per te è una passeggiata; per me era una strada di mercanti e di pellegrini.`],
[`C’erano poeti bolognesi?`,`Guido Guinizzelli, che considero un maestro del "dolce stil novo". A Bologna i poeti avevano un posto importante, non solo lui: ne ho parlato anche nel "De vulgari eloquentia". Una città dotta fa poeti come il pane.`],
[`Che cosa sono i portici di Bologna?`,`Più di sessanta chilometri, una quarantina nel centro: un modo per camminare all’asciutto d’inverno e all’ombra d’estate. Nel 2021 l’UNESCO ha riconosciuto dodici tratti come Patrimonio dell’Umanità. Da questi portici passano studenti, mercanti, e ora anche tu.`],
[`Che cos’è successo alla Commedia a Bologna?`,`Dopo la mia morte i primi lettori e i primi commenti nascono proprio qui. L’Università ha poi costruito una grande tradizione di studi su di me. Una città che legge, e che discute, è una città viva.`],
[`Che cos’è il Palazzo della Mercanzia?`,`Un palazzo gotico della fine del Trecento, sede della Camera di Commercio. Qui è conservata la tagliatella d’oro, larga 8 millimetri, la misura ufficiale della vera tagliatella. Ai miei tempi la pasta era un’altra cosa, ma mi piace l’idea.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Va’, e guarda le torri da sotto, come si deve: così si capisce la pendenza. Io torno ai miei versi. Arrivederci, viandante, e leggi qualcosa ogni giorno.`],
],
bo_bassi:[
[`Chi sei e da dove vieni?`,`Laura Bassi, bolognese, nata nel 1711 in una famiglia benestante e istruita. I miei genitori mi trovarono un maestro privato, Gaetano Tacconi, medico e professore, che mi insegnò ciò che a una donna era vietato studiare all’università. A vent’anni ero già nota in tutta la città.`],
[`Com’è stata la tua laurea?`,`Il 17 aprile 1732 difesi in pubblico quarantanove tesi di filosofia davanti a dotti e autorità. Il 12 maggio ricevetti la laurea, con una corona d’argento sul capo. Fu festeggiata per giorni: ero una delle prime donne laureate d’Europa.`],
[`Com’è stata la tua cattedra?`,`Il 29 ottobre 1732 il Senato di Bologna mi assegnò una cattedra di filosofia e tenni la prolusione. Nello stesso anno entrai nell’Accademia delle Scienze, fino ad allora solo maschile. Si dice che fui la prima donna al mondo a insegnare all’università.`],
[`Come hai conciliato lo studio con la famiglia?`,`Nel 1738 sposai Giuseppe Veratti, medico e professore, nella basilica di San Petronio. Ebbi otto figli e non smisi mai di studiare. All’inizio potevo insegnare in pubblico solo in occasioni speciali: fu dura, ma non mollai.`],
[`Che cos’è il laboratorio di casa?`,`Nel 1749 aprimmo in casa nostra, mio marito e io, una scuola privata di fisica sperimentale: elettricità, idraulica, la fisica di Newton, strumenti ed esperimenti. Fra chi imparò da noi ci fu Luigi Galvani. Fu il posto in cui mi sentii davvero libera.`],
[`Che cos’è l’Archiginnasio?`,`Il palazzo costruito nel 1562-63 su disegno di Antonio Morandi detto il Terribilia, voluto dal legato pontificio per riunire in un solo luogo le scuole sparse per la città. Fu sede dell’Università fino al 1803. Sulle pareti ci sono circa seimila stemmi di professori e studenti.`],
[`Com’è fatto il Teatro Anatomico?`,`È tutto di legno di abete intagliato, costruito fra il 1636 e il 1638 e rifinito nel Settecento. Sopra la cattedra c’è Apollo, e ai lati due "spellati" di Ercole Lelli. Le dissezioni si facevano d’inverno per il freddo; nel 1944 le bombe lo distrussero quasi del tutto, ma i bolognesi lo rimisero insieme con i pezzi originali.`],
[`Che cos’è la Sala dello Stabat Mater?`,`L’aula dei giuristi, che oggi ha il nome di un’opera. Il 18 marzo 1842 vi si eseguì per la prima volta lo Stabat Mater di Rossini, sotto la direzione di Donizetti. A Bologna la musica entra dappertutto, anche nelle aule.`],
[`Com’è nata l’Università di Bologna?`,`Si usa il 1088 come data convenzionale della nascita, anche se non è precisa. Cominciò come scuola di diritto, con maestri come Irnerio e i glossatori, che studiavano il diritto romano. Gli studenti si organizzarono in "universitates" e in nazioni, e da lì viene la parola università.`],
[`Che cos’è la Magna Charta Universitatum?`,`Un documento firmato a Bologna il 18 settembre 1988, per i novecento anni dell’Università, da centinaia di rettori di tutta Europa. Afferma i valori della libertà accademica. Nel 1999 a Bologna fu firmata anche la dichiarazione del Processo di Bologna, che ha creato lo spazio europeo dell’istruzione superiore.`],
[`Che cos’è l’Istituto delle Scienze?`,`Fondato dal generale Marsili, era il luogo dove le scienze nuove trovavano casa. Nel 1776 mi fu assegnata la cattedra di fisica sperimentale, con mio marito come assistente. Il cardinale Lambertini, poi papa Benedetto XIV, fu un protettore dei nostri studi.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Va’, e studia sempre qualcosa di nuovo. Io morii il 20 febbraio 1778, ma le mie lezioni continuano. Quando passi per l’Archiginnasio, ricordati che qui anche una donna salì in cattedra.`],
],
bo_morandi:[
[`Chi sei e da dove vieni?`,`Giorgio Morandi, nato a Bologna il 20 luglio 1890, il maggiore di otto fratelli. Dopo la morte di mio padre, nel 1909, sono diventato il capofamiglia, con mia madre e le mie tre sorelle: Anna, Dina e Maria Teresa.`],
[`Com’è la tua casa di via Fondazza?`,`Ci siamo trasferiti nel 1910: prima il numero 38, poi il 36. Avevo una stanza tranquilla con la finestra sul cortile, che era studio e camera. Ci sono vissuto fino al 1964, e oggi la casa è del Comune e si può visitare.`],
[`Perché dipingi sempre gli stessi oggetti?`,`Bottiglie, vasi, scatole: li tengo sugli scaffali, vicino al cavalletto. Li dipingo dagli anni Venti all’ultimo anno, non per ripetermi ma per guardarli meglio. Ogni volta la luce li cambia.`],
[`Dipingevi anche paesaggi?`,`Sì, quelli dell’Appennino bolognese, a Grizzana. Fra il 1934 e il 1938 vi passai cinque estati a dipingere. Alla fine degli anni Cinquanta la famiglia vi costruì una casa d’estate, che oggi è la Casa Museo Morandi.`],
[`Che lavoro facevi oltre a dipingere?`,`Insegnavo incisione all’Accademia di Belle Arti, dal 1930 al 1956. Il mio torchio, dicono, è ancora usato dagli studenti. Mi piaceva insegnare il silenzio e la pazienza.`],
[`Che cos’è il Museo Morandi?`,`Nato il 4 ottobre 1993 dopo una donazione di mia sorella Maria Teresa, è oggi al MAMbo, nell’ex Forno del Pane in via Don Minzoni. Raccoglie una delle più grandi collezioni pubbliche delle mie opere. Hanno ricostruito anche il mio studio.`],
[`Com’eri come persona?`,`Schivo: non mi curavo molto delle mostre. Eppure a trovarmi in via Fondazza vennero poeti e scrittori come Pasolini, Bassani e Luzi, e fotografi che poi sono diventati famosi. Il silenzio, a volte, attira più dei discorsi.`],
[`Com’è la Strada Maggiore?`,`Dalla mia casa ci si arriva in pochi passi. Via Fondazza ha portici bassi e finestre piccole; la Strada Maggiore ha portici più ampi, come quello dei Servi, il più largo di Bologna, e Casa Isolani, con un portico di legno medievale. Bologna è una città che si guarda camminando.`],
[`Che cos’è Santo Stefano?`,`Le Sette Chiese: Crocifisso, Sepolcro, Santi Vitale e Agricola, Trinità, più due cortili e un museo. La piazza è lunga come un triangolo, e la sera si riempie di tavolini. È uno dei posti dove mi fermavo a guardare i muri.`],
[`Che cos’è il Cortile di Pilato?`,`Il "Santo Giardino", con un grande catino di marmo che fu dono dei re longobardi Liutprando e Ilprando. Nella chiesa del Sepolcro si trovava la tomba di San Petronio, ritrovata nel 1141. Ai miei occhi è un posto perfetto per chi ama il silenzio.`],
[`Perché Bologna si chiama la Rossa?`,`Per il colore dei mattoni e dei tetti, e anche per la sua storia politica. Io ho dipinto toni spenti: grigi, creme, verdi polverosi: forse perché guardo i muri e le ombre. A Bologna il rosso sta nelle pareti, non nei miei quadri.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Va’ pure, e guarda le cose due volte: la seconda è quella che conta. Il mio monumento, alla Certosa, lo vollero le mie sorelle. Se passi da via Fondazza, rallenta.`],
],
bo_giulia:[
[`Come ti chiami e da dove vieni?`,`Giulia, ventidue anni, vengo dalla Puglia. Sono "fuorisede": studio qui ma abito in una stanza in affitto. Bologna all’inizio mi sembrava fredda, adesso non me ne vado più.`],
[`Che cosa sono i portici?`,`Più di sessanta chilometri, e nel 2021 l’UNESCO ha riconosciuto dodici tratti come Patrimonio dell’Umanità. Camminare sotto i portici vuol dire non bagnarsi mai: noi studenti ci contiamo. È la città che ti abbraccia.`],
[`Quali sono le superstizioni degli studenti?`,`Si dice che chi sale sulla Torre degli Asinelli prima della laurea non si laurei, e che chi attraversa Piazza Maggiore in diagonale rischi lo stesso. Io non ci credo, ma non salgo e non attraverso in diagonale: non si sa mai.`],
[`Com’è una laurea?`,`Una festa un po’ folle: la corona d’alloro, gli amici che ti prendono in giro con affetto, i brindisi col prosecco. Prima però c’è la discussione della tesi davanti a una commissione. È un rito che a Bologna si vive in piazza.`],
[`Che cos’è Piazza Verdi?`,`Il cuore del quartiere universitario. Di sera si riempie di studenti, di musica, di chiacchiere e, a volte, di assemblee e proteste. È un posto dove ognuno può dire la sua, e qualcuno ti ascolta.`],
[`E il Teatro Comunale?`,`Qui davanti: inaugurato il 14 maggio 1763, fu il primo teatro costruito dalla città stessa. Nel 1871 si diede il primo Lohengrin di Wagner in Italia, con Verdi in prima fila. Nel 1872 Wagner ebbe anche la cittadinanza onoraria di Bologna.`],
[`Com’è la vita da fuorisede?`,`Bella e faticosa. Gli affitti sono il tormento di ogni studente, e ci sono state anche manifestazioni. Ma poi c’è la città: biciclette, osterie, amici trovati al primo giorno di lezione.`],
[`Chi era Marconi?`,`Guglielmo Marconi, nato a Bologna nel 1874. A ventun anni, nel parco della villa di famiglia, riuscì a inviare un segnale senza fili a due chilometri di distanza, e nel 1909 vinse il Nobel per la fisica. L’aeroporto porta il suo nome, e dalla stazione ci si arriva con il Marconi Express.`],
[`Che cos’è il cinema in Piazza Maggiore?`,`"Sotto le stelle del Cinema", organizzato dalla Cineteca: d’estate si mettono più di tremila sedie sul Crescentone e si guardano film all’aperto. Ogni anno ci vengono oltre duecentomila persone. A fine giugno c’è anche il festival Il Cinema Ritrovato.`],
[`Com’è la salita a San Luca?`,`Parte da Porta Saragozza e sale per 3.796 metri e 666 arcate, con quindici cappelle. È il portico più lungo del mondo, e noi studenti ci andiamo a correre. A maggio la Madonna scende in città in processione, e si dice che le arcate siano il serpente schiacciato da lei.`],
[`Che cos’è successo il 2 agosto 1980?`,`Alle 10:25 una bomba esplose nella sala d’attesa della stazione: 85 morti e più di 200 feriti. Ogni anno il 2 agosto la città si ferma a ricordare, e l’orologio sulla facciata è rimasto fermo a quell’ora. Quando passo in stazione rallento e lo guardo.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Vai pure! Se prendi un treno, dalla stazione c’è sempre un altro mondo che ti aspetta. Ricordati di guardare in su, sotto i portici: le cose belle stanno spesso nei soffitti.`],
]
};
Object.assign(TOPX,TOPX_BO);
})();
