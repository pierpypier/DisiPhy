/* ---------- 12. PALERMO · Da Ballarò a Monte Pellegrino (Ballarò, Carmine, Normanni, Cappella Palatina, Cattedrale, Quattro Canti, Capo, Vucciria, Massimo, Politeama, Kalsa, Foro Italico, Mondello, Pellegrino) ---------- */
/* Un'intera giornata da sinistra a destra: alba a Ballarò, mattina ai Normanni, mezzogiorno ai Quattro Canti,
   pomeriggio ai teatri, tramonto sul mare, sera a Mondello, notte nella grotta di Santa Rosalia. */
(function(){
const GT=372,W1=16600;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,pa=A.pa,txt=A.txt,glow=A.glow,cl=A.cl;
const {ln}=PR._rm;
const {merl}=PR._mi;
const nf=PR._pl.nf;                                   /* luce di Palermo: la giornata scorre da sinistra (alba) a destra (notte) */
const LIT='rgb(255,226,150)';
const md=(i,n)=>((i%n)+n)%n;
const Z=[0,1700,3600,5300,7200,8750,10950,12450,13950,15050,W1+400];   /* inizio di ognuna delle 10 zone */
const zn=xs=>{let z=1;while(z<10&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
/* ---- cielo: alba rosata, mattina limpida, mezzogiorno accecante, foschia di scirocco, tramonto arancio e viola, notte stellata ---- */
const SKY=[[0,['#c4a8cc','#f2c0b4','#fcdcb4']],[1500,['#8ab8e4','#cfe0ee','#f4ecd8']],[2600,['#6fb4e8','#a9d2f0','#e4f0f4']],[4300,['#5eaae8','#9ccbf0','#e0eef4']],[6500,['#58a8ee','#b8dcf6','#f6f6ee']],[8800,['#6ab2e6','#d8e2e2','#f6e8c4']],[10600,['#7aaee0','#e8dcbc','#f8d890']],[11800,['#6a9ad8','#f0c890','#fcb868']],[13000,['#5a5ca8','#f0907a','#ffb060']],[13900,['#3a3a88','#b0608a','#f28a60']],[14700,['#1c2258','#5a4a8a','#c0708a']],[15400,['#0c1240','#222a66','#6a4a82']],[99999,['#0c1240','#222a66','#6a4a82']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
/* ---- palazzo generico di zona: ogni zona ha il suo carattere ---- */
const PM={1:['#e3c78c','#d8a05c','#d8a39a','#dcb88a'],2:['#d8b868','#e0c47a','#cfae5c','#e6d08c'],3:['#e4d0a0','#d9a870','#dcb8a4','#e6dcb8'],4:['#e6d8b0','#dcc080','#e0cca0','#d8b88a'],5:['#d8a868','#d89a8a','#9ac8b0','#dcb88a'],6:['#e8dcc0','#e0b8a8','#d8c8a0','#c8d8c8'],7:['#d8cdb4','#d8a870','#d89a8a','#cfc4a8'],8:['#d8c8a4','#cdb890','#e0d0b0','#c8b898'],9:['#f0e6c8','#e8c8b0','#c8dcd8','#f4e0b8'],10:['#c8bca4','#b8ac94','#c8bca4','#b8ac94']};
const ROOF={1:'#b55e3e',2:'#a9553b',3:'#b0583a',4:'#a8603a',5:'#a8603a',6:'#8a6a58',7:'#9a8a78',8:'#7a6a5a',9:'#b0583a'};
function pal(g,x,w,h,i,st){const gt=GT,top=gt-h,c=PM[st][md(i,4)],night=A.getDK(),n=Math.max(2,Math.floor(w/42)),arch=st==3||st==4||st==6;
 rect(g,c,x,top,w,h);rect(g,'rgba(255,248,230,.13)',x,top,5,h);rect(g,'rgba(40,20,6,.14)',x+w-12,top,12,h);
 for(let q=0;q<4;q++)rect(g,'rgba(120,80,40,'+((st==5||st==1?.07:.04)+hr(i+q)*.06)+')',x+hr(i*3+q)*(w-30),top+hr(i+q*5)*(h-60),12+hr(q)*20,10+hr(q+3)*16);
 if(st==5)for(let q=0;q<3;q++)rect(g,'rgba(90,70,50,.18)',x+hr(i*7+q)*(w-24),top+hr(i*2+q)*(h-70),18+hr(q)*20,12+hr(q+1)*14);
 rect(g,'#a2926c',x-4,top-8,w+8,8);rect(g,'#7a6a48',x-4,top-2,w+8,3);
 if(st==1||st==3||st==5||st==9){poly(g,ROOF[st],[[x-4,top-8],[x+w*.18,top-26],[x+w*.82,top-26],[x+w+4,top-8]]);for(let q=0;q<(w*.64)/7;q++)rect(g,'rgba(60,20,10,.2)',x+w*.18+q*7,top-26,1,18)}
 else if(st==2){for(let q=0;q<Math.floor(w/16);q++)rect(g,c,x+q*16,top-18,9,10)}
 else if(st==4){rect(g,'#ece0c0',x-4,top-18,w+8,4);for(let q=0;q<Math.floor(w/8);q++)rect(g,'#ece0c0',x+q*8,top-14,3,8)}
 else if(st==6){poly(g,'#c8b898',[[x-4,top-8],[x+w*.3,top-20],[x+w*.7,top-20],[x+w+4,top-8]]);if(hr(i*3)>.55){rect(g,c,x+w*.3,top-52,w*.22,44);poly(g,'#6a8a7a',[[x+w*.28,top-52],[x+w*.54,top-52],[x+w*.41,top-80]])}}
 else if(st==7||st==8){rect(g,ROOF[st],x-4,top-14,w+8,6);if(hr(i*3)>.5)rect(g,'#9a8a78',x+w*.3,top-30,9,22)}
 const rows=st==2||st==8?1:Math.max(1,Math.floor((h-80)/54));
 for(let r=0;r<rows;r++){const wy=top+14+r*54;
  for(let k=0;k<n;k++){const wx=x+10+k*((w-20-22)/Math.max(1,n-1)),L=hr(i*9+r*3+k)<.08+night*.7;
   if(arch){ar(g,'#efe6d0',wx-3,wy+44,28,48);ar(g,L?LIT:'#2e3a48',wx,wy+42,22,42)}
   else{rect(g,'#f2ead8',wx-3,wy-3,28,46);rect(g,L?LIT:'#2e3a48',wx,wy,22,40);if(!L)rect(g,'rgba(255,255,255,.14)',wx+2,wy+2,6,36)}
   if(st==1||st==5||st==7||st==9){const sh=hr(i*5+r+k);if(sh>.3){const sc=st==5?'#6aa08a':st==9?'#5a8a9a':'#4f7a52';rect(g,sc,wx-9,wy,8,40);rect(g,sc,wx+23,wy,8,40);for(let q=0;q<5;q++){rect(g,'rgba(0,0,0,.18)',wx-9,wy+4+q*8,8,1);rect(g,'rgba(0,0,0,.18)',wx+23,wy+4+q*8,8,1)}}}
   if(st==1||st==3||st==5||st==6){rect(g,'#2a2a2e',wx-6,wy+30,34,2);for(let q=0;q<8;q++)rect(g,'#2a2a2e',wx-5+q*4.2,wy+30,1.2,10);if((st==5||st==1)&&hr(i+r+k*3)>.45)for(let q=0;q<3;q++)rect(g,['#f4f4ee','#e8505a','#2a7ae0','#ffd21e'][md(q+k+i,4)],wx+q*8,wy+10,6,18)}
   if(st==3&&r==0)rect(g,'#8a7a5a',wx-5,wy+43,32,4);}}
 if(st==1||st==5){const ly=top+34;g.strokeStyle=A.tn('#4a4a4a');g.lineWidth=1;g.beginPath();g.moveTo(x+4,ly);g.quadraticCurveTo(x+w/2,ly+10,x+w-4,ly);g.stroke()}
 if(st==5&&hr(i*11)>.7){rect(g,'#e8505a',x+w*.2,gt-120,w*.55,46);dot(g,'#ffd21e',x+w*.4,gt-98,10);rect(g,'#2a7ae0',x+w*.58,gt-110,14,30)}
 rect(g,'#8a7c68',x,gt-12,w,12);
 if(st==3||st==4){for(let q=0;q<Math.floor(w/44);q++){ar(g,'#a8987a',x+6+q*44,gt-12,34,64);ar(g,night>.3?'rgb(255,214,140)':'#3a342c',x+10+q*44,gt-12,26,58)}}
 else if(st==1||st==5||st==9||st==6){const sc=['#a8302a','#2f6a8a','#3a7a4a','#c88a2a','#2a2a2e'];for(let q=0;q<Math.floor(w/52);q++){const sx=x+8+q*52;rect(g,'#2a2420',sx,gt-52,40,40);rect(g,night>.3?'rgb(255,214,140)':'#4a4238',sx+3,gt-48,34,32);rect(g,sc[md(i+q,5)],sx-3,gt-58,46,9);for(let z=0;z<5;z++)rect(g,'rgba(255,255,255,.3)',sx-3+z*9.4,gt-58,4.6,9)}}
 else if(st==5){ar(g,'#4a2e1a',x+w*.5-14,gt-12,28,60)}
 else{ar(g,'#4a2e1a',x+w*.5-14,gt-12,28,60);rect(g,'rgba(0,0,0,.2)',x,gt-6,w,6)}}
/* ---- livello 0: cielo, sole, luna, nuvole, foschia dell'alba e dello scirocco ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-14200)/1500,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/13800,0,1),sx=40+u*400,sy=312-Math.sin(u*Math.PI)*240;
 if(xs<14000){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*60)+','+Math.round(190-low*90)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(220-low*50)+',150,.35)');sg.addColorStop(1,'rgba(255,220,150,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*70)+','+Math.round(215-low*110)+')',sx,sy,15)}
 const mu=cl((xs-13700)/2400,0,1);if(mu>0){const mx=140+mu*240,my=310-mu*220;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<8000?'rgba(255,255,255,.7)':xs<12000?'rgba(255,230,190,.6)':xs<13800?'rgba(255,170,140,.6)':'rgba(130,120,180,.4)';
 each(o,340,1,(x,i,r)=>nube(g,x+r*100,40+r*46,.9+r*.5,cc));
 const fo=cl(1-xs/1700,0,1)*.4;if(fo>.01){g.fillStyle='rgba(246,214,214,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const sc=cl((xs-7800)/800,0,1)*cl((11600-xs)/900,0,1)*.16;if(sc>.01){g.fillStyle='rgba(255,226,170,'+sc+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: a sinistra la Conca d'Oro, a destra il Monte Pellegrino sul mare; il mare ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const al=cl(1-(xs-6500)/3500,0,1);
 if(al>.02){g.globalAlpha=al;g.fillStyle=dim('#a9b8d2');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20,ph=hz-40-34*Math.abs(Math.sin((px+o)*.011))-22*Math.sin((px+o)*.027+1)-10*Math.sin((px+o)*.06);g.lineTo(px,ph)}g.lineTo(480,hz+30);g.closePath();g.fill();
  g.fillStyle=dim('#8ea2c0');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20,ph=hz-12-10*Math.sin((px+o)*.02+2)-5*Math.sin((px+o)*.05);g.lineTo(px,ph)}g.lineTo(480,hz+30);g.closePath();g.fill();g.globalAlpha=1}
 const se=cl((xs-11300)/1000,0,1);
 if(se>.02){g.globalAlpha=se;const sg=g.createLinearGradient(0,hz+6,0,GT+4);sg.addColorStop(0,mixs(xs>13900?'#9ad0d8':'#9ccce0','#1c2a5a',night));sg.addColorStop(1,mixs(xs>13900?'#3ab0b8':'#3a9ab8','#141c48',night));g.fillStyle=sg;g.fillRect(0,hz+6,480,GT-hz-2);
  const u=cl(xs/13800,0,1),sx=40+u*400,gl=cl((xs-11600)/1200,0,1)*cl((14200-xs)/600,0,1);
  if(gl>.02)for(let q=0;q<12;q++){const ww=34-q*2.2+Math.sin(t*2+q)*4;rect(g,'rgba(255,'+(190-q*4)+',110,'+(.5*gl*(1-q/14))+')',sx-ww/2+Math.sin(t*1.4+q*2)*6,hz+10+q*5,ww,1.8)}
  for(let q=0;q<8;q++){const ly=hz+14+q*7+Math.sin(t+q)*1;rect(g,'rgba(255,255,255,.12)',(q*97+o*.2)%480,ly,30,1.2)}g.globalAlpha=1}
 const pu=cl((xs-11400)/3800,0,1);
 if(pu>.02){const cx=330+(1-pu)*170,ph=70+pu*120,base=hz+30,P=[[-360,base],[-280,hz-14],[-200,hz-ph*.42],[-120,hz-ph*.72],[-50,hz-ph],[20,hz-ph*.94],[80,hz-ph*.72],[140,hz-ph*.5],[200,hz-ph*.16],[270,base]];
  g.globalAlpha=Math.min(1,pu*3);poly(g,dim('#a89c88'),P.map(q=>[cx+q[0],q[1]]));poly(g,'rgba(0,0,0,.18)',[[cx+20,hz-ph*.94],[cx+80,hz-ph*.72],[cx+140,hz-ph*.5],[cx+200,hz-ph*.16],[cx+270,base],[cx+60,base],[cx+50,hz-ph*.5]]);
  const rim=cl((xs-11800)/1500,0,1)*cl((14400-xs)/800,0,1);if(rim>.02)poly(g,'rgba(255,170,100,'+(.32*rim)+')',[[cx-200,hz-ph*.42],[cx-120,hz-ph*.72],[cx-50,hz-ph],[cx-70,hz-ph*.6],[cx-140,hz-ph*.3]]);
  if(night>.4)for(let q=0;q<40;q++)dot(g,'rgba(255,214,130,'+(.4+.4*Math.sin(t*3+q))*(night-.3)+')',cx-330+q*14+hr(q)*8,hz+22+hr(q*3)*6,1.2);g.globalAlpha=1}}
/* ---- livello 2: tetti di terracotta, cupole rosse e maiolicate, campanili, palme ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,128,5,(x,i,r)=>{const zz=zn(cam+x+120);if(zz>=10)return;if(zz>=8&&hr(i*3+1)<.6)return;const f=zz>=8?.38:1,h=(44+r*52)*f,w=104;const c=dim(PM[zz][md(i,4)]);
  rect(g,c,x,hz-h,w,h+10);rect(g,dim('#b55e3e'),x-5,hz-h-8,w+10,9);for(let k=0;k<3;k++)for(let f2=0;f2<(h>70?2:1);f2++)rect(g,night>.35&&hr(i+k+f2)>.4?LIT:dim('#4a4a5a'),x+10+k*30,hz-h+10+f2*30,14,20)});
 each(o,420,21,(x,i,r)=>{const zz=zn(cam+x+120);if(zz>6||zz<1)return;const cx=x+r*60,k=md(i,3),base=hz-56-(i%2)*14;
  if(k==0){rect(g,dim('#d8b88a'),cx-26,base,52,26);g.fillStyle=dim('#c4452f');g.beginPath();g.arc(cx,base,28,Math.PI,0);g.fill();rect(g,dim('#a8382a'),cx-1,base-40,2,12)}
  else if(k==1){rect(g,dim('#d8b88a'),cx-24,base,48,26);g.fillStyle=dim('#2a8a72');g.beginPath();g.arc(cx,base,28,Math.PI,0);g.fill();for(let q=0;q<4;q++)for(let w=-2;w<=2;w++)if((q+w)%2==0)rect(g,dim('#e8c030'),cx+w*8-2,base-6-q*6,4,4);rect(g,dim('#d8b88a'),cx-1,base-42,2,14)}
  else{rect(g,dim('#d6b678'),cx-12,base-60,24,86);for(let q=0;q<3;q++){rect(g,dim('#2a2a30'),cx-5,base-52+q*20,10,12)}rect(g,dim('#c4452f'),cx-14,base-66,28,6)}});
 each(o,300,6,(x,i,r)=>{const zz=zn(cam+x+120);if(zz>=10)return;const hh=130+r*40,px=x+r*30,top=hz-hh+30;ln(g,dim('#5a3a2a'),3.4,[px,hz+6,px+Math.sin(i)*2,top]);for(let q=0;q<8;q++){const an=-Math.PI/2+(q-3.5)*.5;ln(g,dim(q%2?'#4a7a3c':'#5a8a44'),2.6,[px+Math.sin(i)*2,top,px+Math.sin(i)*2+Math.cos(an)*28,top+Math.sin(an)*20+8])}})}
/* ---- livello 3: la strada, zona per zona ---- */
function layerStreet(g,o,t){const gt=GT;
 const each2=(per,seed,a,b,st,hf,wd,skip)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;if(skip&&skip(wx))return;A.setDK(nf(wx));pal(g,x,wd,hf(i),i,st)})};
 each2(176,7,-50,1700,1,i=>150+hr(i*5)*70,164);
 each2(172,8,1700,3600,2,i=>84+hr(i*5)*46,168);
 each2(176,9,3600,5300,3,i=>190+hr(i*5)*50,164);
 each2(176,10,5300,7200,4,i=>170+hr(i*5)*60,164);
 each2(178,11,7200,8750,5,i=>160+hr(i*5)*70,166);
 each2(178,12,8750,10950,6,i=>180+hr(i*5)*60,166);
 each2(178,13,10950,12450,7,i=>150+hr(i*5)*60,166);
 each2(180,14,12450,13950,8,i=>64+hr(i*5)*30,170,wx=>hr(Math.round(wx/180)*7+3)<.55);
 each2(180,15,13950,15050,9,i=>112+hr(i*5)*40,170,wx=>hr(Math.round(wx/180)*7+3)<.4);
 /* Z2: tratti di mura normanne con torri e giardini con palme */
 if(o+480>1700&&o<3600)each(o,520,16,(x,i,r)=>{const wx=i*520;if(wx<1700||wx>3560)return;A.setDK(nf(wx));rect(g,'#c9a850',x,gt-170,56,170);rect(g,'rgba(0,0,0,.14)',x+40,gt-170,16,170);merl(g,'#c9a850',x-1,gt-170,58,3,10);ar(g,'#2a2018',x+20,gt-90,16,40)});
 /* Z8: tratti delle antiche mura sul mare, un faro, cantieri nautici */
 if(o+480>12450&&o<13950){each(o,330,17,(x,i,r)=>{const wx=i*330;if(wx<12450||wx>13900)return;A.setDK(nf(wx));rect(g,'#b8a478',x,gt-96,150,96);merl(g,'#b8a478',x-1,gt-96,152,8,10);rect(g,'rgba(0,0,0,.12)',x+120,gt-96,30,96)});
  each(o,1200,18,(x,i,r)=>{const wx=i*1200;if(wx<12450||wx>13900)return;A.setDK(nf(wx));rect(g,'#f4f4ee',x,gt-170,16,170);for(let q=0;q<4;q++)rect(g,'#d8302a',x,gt-160+q*40,16,20);rect(g,'#3a3a40',x-4,gt-178,24,8);dot(g,k2(wx)>.3?'#fff4c0':'#c8c8c8',x+8,gt-190,7)})}
 /* Z10: pareti di roccia calcarea a picco, macchia mediterranea, muretti di pietra */
 if(o+480>15050){each(o,64,30,(x,i,r)=>{const wx=i*64;if(wx<15000)return;A.setDK(nf(wx));const ht=190+hr(i*3)*110+(i%5==0?50:0);poly(g,'#b8ae98',[[x-4,gt+4],[x-4,gt-ht*.55],[x+18,gt-ht],[x+40,gt-ht*.82],[x+68,gt-ht*.94],[x+68,gt+4]]);poly(g,'rgba(0,0,0,.14)',[[x+40,gt-ht*.82],[x+68,gt-ht*.94],[x+68,gt+4],[x+34,gt+4]]);
   for(let q=0;q<5;q++)rect(g,'rgba(60,50,30,.16)',x+hr(i+q)*20,gt-ht*.8+q*(ht*.17),30+hr(q)*30,1.4);
   for(let q=0;q<3;q++)dot(g,['#2a5a30','#3a6a3a','#4a7a40'][q],x+10+q*18,gt-8-hr(i+q)*8,8+hr(q+i)*5);if(hr(i)>.5)dot(g,'#f2d82a',x+22,gt-12,2.2)});
  A.setDK(nf(o+240));rect(g,'#a89c84',0,gt-18,480,18);for(let q=0;q<30;q++)rect(g,'rgba(0,0,0,.14)',Math.floor(o/32)*32+q*32-o,gt-18,1.4,18);rect(g,'#c4b8a0',0,gt-20,480,3)}}
const k2=wx=>nf(wx);
/* ---- uccelli: piccioni nelle piazze, gabbiani sul mare, rondini al tramonto ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 for(let i=0;i<12;i++){const wx=5780+i*84+hr(i)*30;const px=wx-cam;if(px<-20||px>500)continue;const fly=(Math.sin(t*.3+i*2.1)>.92);const by=GT-5-(fly?30+Math.sin(t*9+i)*8:0),bx=px+Math.sin(t*.5+i)*10;
  el(g,'#8a8e9a',bx,by-5,6,3.6);dot(g,'#6a7a8a',bx+5,by-8,2.8);rect(g,'#d8a0a8',bx+7.4,by-8,2,1);if(fly){ln(g,'#9aa0aa',1.6,[bx-2,by-6,bx-8,by-12-Math.sin(t*9+i)*4]);ln(g,'#9aa0aa',1.6,[bx+1,by-6,bx+7,by-12-Math.sin(t*9+i)*4])}else{rect(g,'#6a6e78',bx-2,by-2,1,3);rect(g,'#6a6e78',bx+1,by-2,1,3)}}
 const ga=cl((xs-11700)/700,0,1)*cl((15000-xs)/900,0,1);
 if(ga>.05)for(let i=0;i<7;i++){const bx=((i*131+t*(26+i*4))%620)-70,by=70+hr(i*3)*80+Math.sin(t*1.4+i*2)*18,w=Math.sin(t*5+i)*4;g.strokeStyle='rgba(250,250,250,'+(.9*ga)+')';g.lineWidth=2;g.beginPath();g.moveTo(bx-12,by-w);g.quadraticCurveTo(bx-5,by-7,bx,by);g.quadraticCurveTo(bx+5,by-7,bx+12,by-w);g.stroke()}
 const sa=cl((xs-10600)/700,0,1)*cl((13900-xs)/900,0,1);
 if(sa>.05)for(let i=0;i<9;i++){const bx=((i*97+t*(60+i*6))%620)-70,by=70+hr(i)*120+Math.sin(t*2.4+i*2)*26,w=Math.sin(t*14+i)*3;g.strokeStyle='rgba(30,26,44,'+(.8*sa)+')';g.lineWidth=2;g.beginPath();g.moveTo(bx-8,by-w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke()}}
/* ---- terreno: ogni zona ha il suo selciato ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[0,1700,'#a39a8c','s'],[1700,3600,'#b9ac90','p'],[3600,5300,'#c4b89c','p'],[5300,7200,'#d0c4a6','q'],[7200,8750,'#9a8f7e','s'],[8750,10950,'#d4cab6','t'],[10950,12450,'#b0a28a','p'],[12450,13950,'#b9ad93','f'],[13950,15050,'#dccfa8','a'],[15050,W1+400,'#8b8478','r']];
 rect(g,'#e6dcc4',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();
  rect(g,z[2],x0,gt+3,x1-x0,150);
  if(z[3]=='t'||z[3]=='q'||z[3]=='f'){for(let r=0;r<7;r++){const yy=gt+9+r*19,off=(r%2)*30,bw=(z[3]=='q'?64:z[3]=='f'?76:70)+r*12,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil((x1-x0)/bw)+2;k++){const px=s0+k*bw-cam+off;rect(g,((k+r)&1)?'rgba(255,255,255,.1)':'rgba(0,0,0,.07)',px,yy,bw-3,15);rect(g,'rgba(0,0,0,.18)',px,yy,1.4,17)}rect(g,'rgba(0,0,0,.1)',x0,yy+15,x1-x0,1.6)}}
  if(z[3]=='f'){rect(g,'#6a9a52',x0,gt+112,x1-x0,40);for(let q=0;q<40;q++){const px=x0+((q*37)%Math.max(1,x1-x0));rect(g,hr(q)>.5?'rgba(255,255,255,.12)':'rgba(30,70,20,.2)',px,gt+116+hr(q+2)*30,3,2)}rect(g,'rgba(60,40,20,.25)',x0,gt+110,x1-x0,3)}
  if(z[3]=='s'||z[3]=='p'){const sz=z[3]=='s'?14:9;for(let r=0;r<7;r++){const yy=gt+7+r*20,off=(r%2)*(sz/2),bw=sz+r*2,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil((x1-x0)/bw)+2;k++){const px=s0+k*bw-cam+off,h2=hr(k*13+r*5);rect(g,h2>.66?'rgba(255,255,255,.1)':h2>.33?'rgba(0,0,0,.14)':'rgba(0,0,0,.04)',px+1,yy+1,bw-2,17);rect(g,'rgba(0,0,0,.2)',px,yy,1.2,19)}}}
  if(z[3]=='a'){for(let q=0;q<130;q++){const px=x0+((q*53)%Math.max(1,x1-x0));rect(g,hr(q)>.5?'rgba(255,255,255,.3)':'rgba(150,120,70,.22)',px,gt+8+hr(q+3)*136,2+hr(q)*3,1.6)}rect(g,'rgba(120,190,200,.35)',x0,gt+3,x1-x0,6)}
  if(z[3]=='r'){for(let q=0;q<110;q++){const px=Math.floor((cam+x0)/7)*7+((q*29)%Math.max(8,x1-x0))-((cam+x0)%7);rect(g,hr(q)>.5?'rgba(255,255,255,.14)':'rgba(40,30,20,.22)',px,gt+8+hr(q+3)*136,3+hr(q)*5,2+hr(q+1)*2)}
   rect(g,'rgba(150,120,80,.3)',x0,gt+60,x1-x0,40);for(let q=0;q<40;q++){const px=x0+((q*47)%Math.max(1,x1-x0));rect(g,'rgba(70,50,30,.3)',px,gt+62+hr(q)*36,3,2)}}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};
/* ---- testi della scheda (nomi, prime battute, tappe) ---- */
const LX=[380, 900, 1360, 2150, 2650, 3050, 3440, 4100, 4580, 5000, 5720, 6170, 6580, 6930, 7560, 8000, 8420, 9250, 10050, 10550, 11300, 11800, 12230, 12800, 13180, 13650, 14300, 14800, 15350, 15850, 16230];
const LKTXT=[
`Ballarò: il mercato più antico e grande di Palermo. Banchi di frutta, pesce e spezie, e i venditori che cantano la merce: si chiama abbanniata.`,
`Il Carmine Maggiore: la sua cupola rivestita di maioliche colorate domina i tetti del mercato.`,
`Panelle, crocchè, sfincione, pani ca meusa e stigghiola: a Ballarò la colazione è un fritto.`,
`Il Palazzo dei Normanni: da fortezza araba a reggia di Ruggero II, dal 1130 cuore del Regno di Sicilia. Oggi ospita l’Assemblea Regionale Siciliana.`,
`La Cappella Palatina: voluta da Ruggero II e consacrata nel 1140. Mosaici dorati bizantini, soffitto di legno a stalattiti di artigiani arabi e pavimento di marmi intarsiati: tre culture in una sola cappella.`,
`San Giovanni degli Eremiti: cinque cupole rosse, un piccolo chiostro con giardino di agrumi e un’aria da Oriente in mezzo a Palermo.`,
`Porta Nuova: la porta monumentale con il tetto a piramide, all’inizio del Cassaro.`,
`La Cattedrale di Palermo: normanna, gotica, catalana e barocca, tutte insieme. Dentro riposano Ruggero II e Federico II, in sarcofagi di porfido rosso.`,
`Le tombe reali: sarcofagi di porfido rosso, la pietra degli imperatori. Quello di Federico II poggia sui leoni e ha un baldacchino con colonne.`,
`Il Cassaro, oggi Corso Vittorio Emanuele: la strada più antica di Palermo, dalla Porta Nuova fino al mare.`,
`I Quattro Canti: quattro facciate barocche curve all’incrocio dei due assi di Palermo. Hanno fontane, stagioni, re di Spagna e sante.`,
`La Fontana Pretoria: nata a Firenze, arrivò a Palermo nel 1574 smontata in centinaia di pezzi. Per le statue nude i palermitani la chiamano "Fontana della Vergogna".`,
`La Martorana: chiesa normanna del 1143 con mosaici d’oro bizantini, voluta dall’ammiraglio Giorgio d’Antiochia. Dal suo convento viene la frutta martorana, dolci di mandorla a forma di frutta.`,
`San Cataldo: tre cupole rosse su un blocco di pietra severo, normanno e arabo insieme.`,
`Il Capo: il mercato dietro la Cattedrale, con la porta antica all’ingresso e i banchi di pesce, frutta e arancine.`,
`La Vucciria: il nome viene forse dal francese boucherie, macelleria. Di giorno vende carne e pesce, di sera diventa un mercato di brace e di bicchieri. Renato Guttuso la dipinse in un quadro famoso.`,
`Arancina (non arancino, a Palermo!) e pani ca meusa. Il pane con la milza si ordina schietto, con il limone, o maritato, con il caciocavallo.`,
`Il Teatro Massimo: il più grande teatro lirico d’Italia, inaugurato nel 1897 con il Falstaff di Verdi. Sulla sua scalinata fu girato il finale de Il Padrino – Parte III.`,
`Il Politeama Garibaldi: un grande arco di trionfo con una quadriga di bronzo, Apollo ed Euterpe, in cima. Lo chiamano "il teatro del popolo".`,
`L’Opera dei Pupi: pupari che muovono paladini in armatura nel racconto di Orlando e Rinaldo. È Patrimonio UNESCO.`,
`Piazza Marina: il Giardino Garibaldi con il suo ficus gigante, uno degli alberi più grandi d’Europa, alto trenta metri, con radici aeree come colonne.`,
`Palazzo Steri: la residenza gotica dei Chiaramonte, poi sede del tribunale dell’Inquisizione. Nelle celle restano i graffiti e i disegni dei prigionieri.`,
`Villa Giulia e l’Orto Botanico: giardini storici con alberi esotici e vialetti ordinati. Goethe, nel 1787, trovò il giardino pubblico il luogo più bello del mondo.`,
`Porta Felice: la porta monumentale sul mare, all’estremità del Cassaro, iniziata nel 1582 e chiamata come la moglie del viceré Colonna. Si dice che non abbia l’arco centrale per far passare i mariti traditi senza sbattere le corna.`,
`Il Foro Italico: la passeggiata sul mare dei palermitani, dal 1582. Prato, palme, aquiloni e vista sul Monte Pellegrino.`,
`La Cala: il porto antico a ferro di cavallo, dove si ormeggiavano pescherecci e barche. Gli antichi greci chiamarono la città Panormos, "tutto porto".`,
`Mondello: la baia a mezzaluna dei palermitani, fra il Monte Pellegrino e Monte Gallo. Un tempo era una palude, poi fu bonificata: oggi è la spiaggia di tutta la città.`,
`Lo Stabilimento di Mondello: un palazzo liberty su palafitte di cemento, inaugurato il 15 luglio 1913. Per i palermitani è semplicemente "il Charleston".`,
`Monte Pellegrino: la grande roccia sul mare che veglia su Palermo. Per Goethe era il promontorio più bello del mondo.`,
`Il Santuario di Santa Rosalia: una grotta fra le rocce, dove secondo la tradizione la Santuzza visse da eremita. Qui, nel 1624, furono ritrovate le sue ossa mentre la peste colpiva Palermo.`,
`In fondo alla grotta, la luce di un altro mondo ti chiama.`
];
const INTRO=`Palermo, dall’alba alla notte: dal canto dei venditori di Ballarò al silenzio della grotta di Santa Rosalia, passando per re normanni, palazzi barocchi, teatri, mercati e il mare. Un po’ araba, un po’ normanna, un po’ spagnola, e tutta sua.`;
const NAME={pl_nino:`Nino, il venditore di Ballarò`,pl_ruggero:`Ruggero II`,pl_federico:`Federico II`,pl_turi:`Turi, il puparo`,pl_franca:`Franca Florio`,pl_goethe:`Goethe`,pl_tano:`Tano, il pescatore`,pl_rosalia:`Santa Rosalia`};
const GREET={
pl_nino:`Amunì, venite! Arance rosse, belle come il sole! Talìa, Pierpaolo: a Ballarò non si compra, si fa festa!`,
pl_ruggero:`Benvenuto nel mio palazzo, Pierpaolo. A corte si parlano greco, arabo, latino e francese normanno, e a me piace ascoltarli tutti.`,
pl_federico:`Eccoti, Pierpaolo. Qui riposo, ma non dormo mai davvero: ho troppe domande da fare al mondo.`,
pl_turi:`Entra, entra! Qui i cavalieri combattono ogni sera. Ti presento Orlando, il più forte dei paladini di Francia.`,
pl_franca:`Benvenuto al Massimo, Pierpaolo. Mio marito e io abbiamo creduto in questo teatro quando Palermo aveva bisogno di sognare.`,
pl_goethe:`Guten Tag, Pierpaolo! Sono sbarcato questa mattina e non ho ancora smesso di guardare il cielo di Palermo.`,
pl_tano:`Talìa che mare, Pierpaolo! Oggi il pesce abbocca solo a chi ha pazienza.`,
pl_rosalia:`Benvenuto, Pierpaolo. Qui la notte è silenziosa e la città brilla laggiù. Siediti: i palermitani vengono sempre a trovarmi.`
};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)})),d:{a:{t:d}}});
const npcs=[
 NP('pl_nino',NAME.pl_nino,560,GREET.pl_nino,{skin:'#d6a07c',top:'#8a6a4a',bot:'#4a4a52',hair:'#6a6a6a',s:1.04},(g,b,t)=>{rect(g,'#3a3a44',-11,-118+b,22,8);dot(g,'#3a3a44',-11,-118+b,3);rect(g,'#2a1a10',1,-95+b,11,2.6);rect(g,'#2a2a30',-12,-84,24,42);rect(g,'#3a3a40',-12,-84,24,3);rect(g,'#c8a060',4,-72,24,15);for(let q=0;q<4;q++)dot(g,'#f08a1a',9+q*5,-75,3.2);rect(g,'rgba(0,0,0,.2)',4,-60,24,2)}),
 NP('pl_ruggero',NAME.pl_ruggero,2660,GREET.pl_ruggero,{skin:'#d8a880',top:'#b8202a',bot:'#a8202a',hair:'#2a1a12',long:true},(g,b,t)=>{poly(g,'#a8202a',[[-15,-90+b],[15,-90+b],[26,-4],[-26,-4]]);poly(g,'rgba(0,0,0,.14)',[[6,-90+b],[15,-90+b],[26,-4],[10,-4]]);rect(g,'#e8b830',-15,-90+b,30,5);rect(g,'#e8b830',-26,-8,52,4);for(let q=0;q<5;q++){dot(g,'#e8b830',-14+q*7,-66+q%2*8,2.6);dot(g,'#e8b830',-8+q*5,-40-q%2*6,2.2)}poly(g,'#e8b830',[[-9,-111+b],[-7,-122+b],[-3,-114+b],[1,-124+b],[5,-114+b],[9,-122+b],[11,-111+b]]);dot(g,'#d8302a',1,-117+b,1.6);poly(g,'#2a1a12',[[-3,-94+b],[10,-94+b],[8,-85+b],[0,-83+b]])}),
 NP('pl_federico',NAME.pl_federico,4100,GREET.pl_federico,{skin:'#e0b090',top:'#4a3a6a',bot:'#4a3a4a',hair:'#8a5a2a'},(g,b,t)=>{poly(g,'#b8202a',[[-13,-92+b],[-30,-26],[-6,-10],[0,-80+b]]);rect(g,'#f0ece4',-13,-92+b,6,4);for(let q=0;q<5;q++)dot(g,'#2a2a2e',-12+q*1.4,-91+b+q*2,1);poly(g,'#e8b830',[[-9,-111+b],[-7,-122+b],[-3,-114+b],[1,-124+b],[5,-114+b],[9,-122+b],[11,-111+b]]);dot(g,'#8a5a2a',9,-50,5.4);rect(g,'#8a5a2a',5,-56,9,6);el(g,'#6a4a30',13,-64+Math.sin(t*3)*.6,6,9);dot(g,'#6a4a30',14,-76,4.6);poly(g,'#d8b030',[[17,-76],[22,-75],[17,-73]]);poly(g,'#4a3a28',[[8,-58],[2,-46],[10,-54]]);dot(g,'#12161a',15.6,-77,1)}),
 NP('pl_turi',NAME.pl_turi,10560,GREET.pl_turi,{skin:'#d6a07c',top:'#e8dfc8',bot:'#5a4a3a',hair:'#3a2a1a',s:1.02},(g,b,t)=>{rect(g,'#6a4a3a',-12,-82,24,40);rect(g,'#6a4a3a',-6,-90,12,10);rect(g,'#2a1a10',1,-95+b,11,2.6);rect(g,'#5a3a2a',-7,-66,5,5);dot(g,'#d8302a',-4,-62,1.6);dot(g,'#2a7ae0',-3,-70,1.4);rect(g,'#c8c8d0',9,-72,5,22);dot(g,'#f0c8a0',11.5,-76,3.4);g.fillStyle='#b8b8c4';g.beginPath();g.arc(11.5,-77,4.2,Math.PI,0);g.fill();poly(g,'#d8302a',[[11,-81],[9,-90],[16,-84]]);dot(g,'#2a7ae0',17,-62,6);dot(g,'#f4ecd8',17,-62,3);ln(g,'#e8e8f0',1.6,[6,-64,-2,-92])}),
 NP('pl_franca',NAME.pl_franca,9250,GREET.pl_franca,{skin:'#ecc4a0',top:'#f4eee0',bot:'#efe6d4',hair:'#6a3a1a',long:true},(g,b,t)=>{poly(g,'rgba(0,0,0,.08)',[[4,-48],[13,-48],[20,0],[8,0]]);for(let q=0;q<6;q++)dot(g,'#fffdf4',-5+q*2.4,-89+b+Math.abs(q-2.5)*.8,1.5);rect(g,'#f8f4ec',-15,-62,5,20);rect(g,'#f8f4ec',10,-62,5,20);rect(g,'#c8a0a8',-13,-58,10,2);el(g,'#f4eadc',1,-113+b,24,4.6);el(g,'#f4eadc',1,-118+b,12,7);rect(g,'#c8a0a8',-10,-117+b,22,2.4);ln(g,'#e8a0b8',2,[-6,-120+b,-14,-134+b,-4,-132+b]);ln(g,'#f4f4ee',2,[4,-121+b,10,-136+b,14,-130+b]);ln(g,'#c8808a',1.6,[9,-50,14,-124+b]);g.fillStyle='#f2d8e0';g.beginPath();g.arc(14,-124+b,24,Math.PI,0);g.closePath();g.fill();for(let q=0;q<6;q++)dot(g,'#e8b8c8',-9+q*9.6,-124+b,3.2);rect(g,'rgba(0,0,0,.08)',22,-146+b,16,22)}),
 NP('pl_goethe',NAME.pl_goethe,11430,GREET.pl_goethe,{skin:'#e0b890',top:'#8a7a6a',bot:'#4a4238',hair:'#6a4a2a'},(g,b,t)=>{poly(g,'#d8d0bc',[[-13,-92+b],[-27,-20],[-6,-18],[0,-84+b]]);rect(g,'#c8c0ac',-13,-92+b,26,5);el(g,'#3a3028',0,-114+b,18,4);rect(g,'#3a3028',-8,-125+b,16,12);rect(g,'#c8a050',-8,-116+b,16,2);rect(g,'#6a3a2a',5,-62,11,14);rect(g,'#f4f0e4',6,-61,9,12);ln(g,'#3a3a40',1.4,[12,-58,16,-66]);for(let q=0;q<3;q++)rect(g,'rgba(0,0,0,.3)',7,-58+q*3,7,.8)}),
 NP('pl_tano',NAME.pl_tano,13650,GREET.pl_tano,{skin:'#c8906a',top:'#2a4a8a',bot:'#4a4a52',hair:'#9a9a9a',s:1.02},(g,b,t)=>{rect(g,'#3a3a44',-11,-118+b,22,8);dot(g,'#3a3a44',0,-119+b,3);rect(g,'#2a3a22',-9,-20,8,20);rect(g,'#2a3a22',3,-20,8,20);rect(g,'#1a2a14',-9,-20,8,3);rect(g,'#1a2a14',3,-20,8,3);poly(g,'rgba(150,120,80,.8)',[[-14,-92+b],[-22,-60],[-8,-42],[2,-80]]);g.strokeStyle='rgba(90,70,40,.8)';g.lineWidth=.8;for(let q=0;q<4;q++){g.beginPath();g.moveTo(-14+q*2,-90+q*8);g.lineTo(-18+q*3,-56+q*4);g.stroke()}for(let q=0;q<3;q++){g.beginPath();g.moveTo(-20+q*2,-76+q*10);g.lineTo(-4+q*2,-80+q*10);g.stroke()}rect(g,'#c8a070',7,-56,24,14);el(g,'#c0ccd4',14,-58,6,2.4);el(g,'#c0ccd4',24,-58,6,2.4);dot(g,'#f2d82a',19,-58,1.4);ln(g,'#9a9a9a',2,[11,-48,10,-30])}),
 NP('pl_rosalia',NAME.pl_rosalia,15850,GREET.pl_rosalia,{skin:'#ecc8a8',top:'#4a3a34',bot:'#3a3030',hair:'#5a3a22',long:true},(g,b,t)=>{poly(g,'#2a2424',[[-13,-92+b],[-30,-12],[-4,-8],[2,-84+b]]);rect(g,'#5a3a22',-12,-108+b,6,42);for(let q=0;q<7;q++)dot(g,['#d8506a','#e87a90','#f4a0b0'][q%3],-9+q*3.1,-112+b-Math.sin(q/6*Math.PI)*3.4,2.4);dot(g,'#3a8a3a',-10,-111+b,1.4);dot(g,'#3a8a3a',11,-111+b,1.4);rect(g,'#6a4a2a',-8,-64,2,12);rect(g,'#6a4a2a',-11,-61,8,2);dot(g,'#f4f0e4',9,-56,4.6);dot(g,'#2a2424',7.6,-57,1.2);dot(g,'#2a2424',10.6,-57,1.2);rect(g,'#f4f0e4',7,-52,5,3)})
];
/* ---- oggetti lungo il percorso ---- */
const props=[['pltarga',130,'PIAZZA BALLARÒ'],['pllamp',70],['plballaro',380],['plgatto',650,'#c8a070'],['pledicola',692],['plcarmine',900],['plbucato',1135,210],['plape',1195,'#e6dcae'],['plfritto',1360],['plgatto',1500,'#3a3a3a'],['plbucato',1600,200],
 ['pltarga',1730,'PIAZZA INDIPENDENZA'],['plpalma',1810,170],['plnormanni',2150],['plpalma',2430,175],['plcappella',2650],['plagave',2860,1.1],['pleremiti',3050],['plpalma',3245,160],['plportanuova',3440],
 ['pltarga',3690,'CORSO VITTORIO EMANUELE'],['plcattedrale',4100],['pltombe',4580],['plcassaro',5000],
 ['pltarga',5330,'QUATTRO CANTI'],['plturista',5600],['plquattrocanti',5720],['plpiccioni',5990],['plpretoria',6170],['plturista',6290],['pltarga',6395,'PIAZZA PRETORIA'],['plmartorana',6580],['plsancataldo',6930],
 ['pltarga',7240,'PORTA CARINI'],['plgatto',7330,'#e8e0d0'],['plportacarini',7560],['plvucciria',8000],['plarancina',8420],['pltarga',8218,'PIAZZA CARACCIOLO'],['plape',8660,'#9ac8d8'],
 ['pltarga',8790,'PIAZZA VERDI'],['plpalma',8900,165],['plmassimo',9250],['plpalma',9575,170],['pltarga',9665,'VIA MAQUEDA'],['plpoliteama',10050],['plpalma',10335,175],['plpupi',10550],['plcarretto',10790],
 ['pltarga',10965,'PIAZZA MARINA'],['plcarretto',11080],['plficus',11300],['plsteri',11800],['plgiulia',12230],
 ['pltarga',12480,'FORO ITALICO UMBERTO I'],['plficodindia',12580,1.1],['plportafelice',12800],['plpalma',13050,170],['plforoitalico',13180],['plpalma',13350,165],['plficodindia',13430,1],['plcala',13650],
 ['pltarga',13990,'MONDELLO'],['plgelato',14040],['plmondello',14300],['plpalma',14520,170],['plcharleston',14800],['plpalma',15035,165],
 ['plpellegrino',15350],['plginestra',15150,1.2],['pllanterna',15110],['plsantuario',15850],['plceri',15660],['plginestra',15710,1],['pllanterna',15600],['plvarco',W1-370]];
/* un lampione ogni tanto, dove la strada è libera (a lanterna sulla montagna) */
const LM=props.filter(p=>p[0]!='pltarga'&&p[0]!='pllamp'&&p[0]!='pllanterna'&&p[0]!='plgatto'&&p[0]!='plpalma'&&p[0]!='plginestra'&&p[0]!='plceri').map(p=>p[1]);
for(let x=230;x<W1-420;x+=360){if(LM.every(m=>Math.abs(m-x)>300)&&!props.some(p=>(p[0]=='pllamp'||p[0]=='pllanterna')&&Math.abs(p[1]-x)<200))props.push([x>15050?'pllanterna':'pllamp',x])}
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+199,LKTXT[i]]);
addWorld({id:'palermo',name:'Palermo · Da Ballarò a Monte Pellegrino',width:W1,sky:['#c4a8cc','#f2c0b4','#fcdcb4'],gt:372,gr:['#a39a8c','#6b6150'],chord:[164.8,174.6,207.7,246.9],amb:'#ffe0b0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da palermo.txt) --- */
(function(){
const TOPX_PL={
pl_nino:[
[`Come ti chiami e da quanto vendi qui?`,`Nino, e sono nato a due passi da questo banco. Mio padre vendeva frutta qui, io ho cominciato a dodici anni a portare le cassette. Quarantatré anni di banco e non mi sono ancora stancato di gridare.`],
[`Che cos’è Ballarò?`,`È il mercato più antico e più grande di Palermo, nel quartiere dell’Albergheria. Dicono che il nome venga da Balhara, un villaggio arabo vicino a Monreale da cui arrivavano i primi mercanti. Ma c’è anche chi dice altro: a Palermo, ogni nome ha tre storie.`],
[`Che cos’è l’abbanniata?`,`È il canto con cui i venditori chiamano i clienti: si grida la merce quasi cantando, con rime e battute. Dicono che l’abbiamo ereditata dagli arabi, e di sicuro funziona meglio di un cartello. Una cosa tipo: "Amunì, signora, assaggi, assaggi! Rosse, dolci e senza pensieri!"`],
[`Che quartiere è l’Albergheria?`,`Il più antico di Palermo, fondato dai Fenici sei o sette secoli prima di Cristo. Qui sorge anche il Palazzo dei Normanni, e il mercato è sempre stato ai suoi piedi. Se scavi sotto il banco di un venditore, trovi un pezzo di storia.`],
[`Cos’è il pani ca meusa?`,`Un panino con il sesamo, ripieno di milza di vitello, cotta nello strutto. Lo puoi ordinare schietto, con un po’ di limone, oppure maritato, "sposato", con caciocavallo grattugiato e ricotta. Se sei coraggioso lo assaggi; se no, fai finta di non averlo sentito.`],
[`E le panelle e i crocchè?`,`Le panelle sono frittelle di farina di ceci, sottili come una carta; i crocchè, che qualcuno chiama cazzilli, sono crocchette di patate con prezzemolo. Si mangiano dentro un panino morbido, con un po’ di limone e basta. È la colazione di tutto il mercato.`],
[`Che cos’è lo sfincione?`,`Una specie di pizza alta e morbida, condita con cipolla, pomodoro, acciughe e caciocavallo, con la mollica tostata sopra. Non è la pizza, e non dirlo a un palermitano! Si compra dagli ambulanti, ancora caldo, e si mangia camminando.`],
[`Si dice arancina o arancino?`,`Qui a Palermo si dice arancina, al femminile, ed è tonda come un’arancia, da cui il nome. A Catania dicono arancino e la fanno a punta, e ci sono discussioni che durano da generazioni. Il 13 dicembre, a Santa Lucia, a Palermo non si mangiano pane e pasta: solo arancine, panelle e cuccìa.`],
[`E la stigghiola?`,`Budella di agnello arrotolate attorno a un cipollotto e cotte sulla brace. L’odore lo senti da lontano, prima di vederla! Chi non l’ha mai provata di solito fa una faccia strana, ma poi chiede il bis.`],
[`Come sono cambiati il mercato e il quartiere?`,`Oggi senti mille lingue: ci sono tanti africani, indiani, pakistani, arabi, e fanno parte del mercato come tutti. Ballarò è sempre stato un posto dove arrivava gente da lontano. Per questo i palermitani sono abituati a mescolare tutto.`],
[`Come si compra a Ballarò?`,`Con il sorriso e con un po’ di pazienza: il prezzo si discute, ma senza offendere! Chiedi sempre di assaggiare, e se il venditore canta, rispondigli con una battuta. Così ti fa lo sconto e ti regala un limone.`],
[`Arrivederci, Nino!`,`Vossìa è sempre il benvenuto, Pierpaolo! Torna a mangiare qualcosa, e porta la fame. Amunì, vai: la città ti aspetta!`],
],
pl_ruggero:[
[`Chi sei?`,`Ruggero II d’Altavilla, figlio del Gran Conte Ruggero I. Sono nato nel 1095 e fui incoronato re di Sicilia a Palermo, a Natale del 1130. Ho governato fino al 1154.`],
[`Com’era il tuo regno?`,`Comprendeva l’isola e buona parte del Sud Italia, e Palermo era la capitale. Era un regno ricco e ordinato, in cui vivevano insieme cristiani latini e greci, musulmani ed ebrei. Per quei tempi, una cosa rara.`],
[`Perché convivevano tanti popoli?`,`Perché serviva a governare bene: ogni popolo aveva i suoi saperi. I normanni portarono i cavalieri, i greci gli scribi, gli arabi gli ingegneri e gli astronomi. Non cercai di cancellare nessuno: cercai di far lavorare tutti insieme.`],
[`Che cos’è questo palazzo?`,`Era una fortezza di origine araba, e io lo trasformai in reggia, con torri, giardini e la mia cappella. Da qui si governava il regno. Oggi, mi dicono, ci siede un’assemblea di rappresentanti della Sicilia.`],
[`Perché hai fatto costruire la Cappella Palatina?`,`Volevo una cappella reale dentro il palazzo, dedicata a San Pietro. Cominciammo nel 1130, quando divenni re, e fu consacrata il 28 aprile del 1140. Doveva mostrare a tutti che il mio regno era potente e al tempo stesso accogliente.`],
[`Che cosa c’è di speciale nel soffitto?`,`È di legno e fu intagliato e dipinto da artigiani musulmani, con nicchie a stalattite, i muqarnas, e stelle a otto punte. Raffigura scene di vita di corte: musicisti, cacciatori, gente a banchetto. In una chiesa cristiana, è un tesoro unico al mondo.`],
[`Chi era Giorgio d’Antiochia?`,`Il mio ammiraglio, un greco venuto dalla Siria, tra i miei uomini più fidati. Nel 1143 fece costruire la chiesa della Martorana, dove i mosaici lo mostrano in ginocchio ai piedi della Vergine. In un altro mosaico, Cristo in persona mi incorona: così volle rappresentarmi.`],
[`Cosa fece al-Idrisi per te?`,`Al-Idrisi era un geografo arabo, che accolsi a corte. Per me preparò un grande libro di geografia con una carta del mondo, e lo completò poco prima della mia morte. Lo chiamarono "il libro di Ruggero".`],
[`Dove sei sepolto?`,`Nella Cattedrale di Palermo, in un sarcofago di porfido rosso, la pietra riservata agli imperatori. Morii nel 1154. Mio nipote Federico, molti anni dopo, fece spostare due sarcofagi di porfido da Cefalù fino a Palermo.`],
[`Che cos’è San Giovanni degli Eremiti?`,`Una chiesa con cinque cupole rosse, che feci costruire nel 1136. Si dice che sorga sopra una moschea più antica, ma il luogo ha un fascino strano: sembra un pezzo d’Oriente piantato qui. Il chiostro con il giardino è un piccolo paradiso.`],
[`Che consiglio dai a un viaggiatore?`,`Impara qualche parola di ogni lingua che senti. Chi ti parla nella sua lingua ti apre la porta, anche se il tuo vicino pensa diversamente. È il segreto del mio regno, e di Palermo.`],
[`Arrivederci, maestà!`,`Che il viaggio ti sia leggero, Pierpaolo. Torna a vedere la mia cappella quando il sole entra dalle finestre: il mosaico si accende come oro vivo. Vai in pace.`],
],
pl_federico:[
[`Chi sei?`,`Federico II di Svevia, re di Sicilia e imperatore del Sacro Romano Impero. Sono nato a Jesi nel 1194, e sono cresciuto proprio qui, a Palermo, tra greci, arabi e latini. Morii nel 1250.`],
[`Perché ti chiamavano Stupor Mundi?`,`"Stupore del mondo": per la mia curiosità, per la cultura della mia corte e per le cose che mi riuscivano. Qualcuno lo disse con ammirazione, qualcuno con paura. Io preferivo la prima.`],
[`È vero che parlavi molte lingue?`,`Si dice che ne parlassi sei o sette: latino, siciliano, tedesco, francese, greco e arabo. Con i miei uomini di cultura discutevo di tutto. Un sovrano che non capisce i suoi sudditi, governa a occhi chiusi.`],
[`Che cos’è la Scuola siciliana?`,`Un gruppo di poeti e funzionari della mia corte che scrisse versi d’amore in volgare, nella lingua di tutti i giorni. È la prima scuola di poesia in italiano. Si dice che tra loro nascesse perfino il sonetto.`],
[`Perché hai scritto un libro sui falchi?`,`Perché volevo capire come vivono davvero: osservai, provai, corressi gli errori degli antichi. Il libro si chiama "De arte venandi cum avibus", sull’arte di cacciare con gli uccelli. Fidarsi solo dei libri senza guardare è un errore.`],
[`Cos’hai fatto in Terrasanta?`,`Nel 1228 partii per la crociata, e tornai nel 1229 con Gerusalemme, senza una battaglia, grazie a un accordo con il sultano al-Kamil. Fui incoronato re di Gerusalemme proprio lì. Alcuni mi lodarono, altri no: la diplomazia fa sempre arrabbiare qualcuno.`],
[`Che leggi hai dato al tuo regno?`,`Nel 1231 promulgai le Costituzioni di Melfi, il "Liber Augustalis": un insieme di leggi che regolava giustizia, funzionari e tasse. Volevo uno Stato in cui contasse la legge, non il capriccio del più forte. A quei tempi era una novità.`],
[`Dove ti hanno sepolto?`,`Qui in Cattedrale, in un sarcofago di porfido rosso con baldacchino e leoni. Il sarcofago era stato scelto per mio nonno Ruggero, e io lo feci portare a Palermo da Cefalù. Con me riposa anche Pietro II d’Aragona: compagnia inaspettata.`],
[`Hai costruito castelli in tutta Italia?`,`Moltissimi. Il più famoso è Castel del Monte, in Puglia, a pianta ottagonale: nessuno ha capito del tutto a cosa servisse. Ma Palermo è rimasta la mia casa: è qui che ho imparato a guardare il mondo.`],
[`Chi frequentava la tua corte?`,`Poeti, giuristi, traduttori dal greco e dall’arabo, matematici e studiosi di ogni genere, come l’astrologo Michele Scoto. Si discuteva di stelle, di animali e di numeri, a tavola e fuori. Una corte che non si annoiava mai.`],
[`Che consiglio dai a chi viaggia?`,`Dubita, osserva e sperimenta. Non credere a una cosa solo perché lo dicono tutti: guarda, prova, e poi decidi. E parla con chi non la pensa come te.`],
[`Arrivederci, maestà!`,`Va’ in pace, Pierpaolo. E se vedi un falco, salutalo da parte mia. Il mondo è fatto per essere guardato.`],
],
pl_turi:[
[`Che cos’è l’Opera dei Pupi?`,`È un teatro di marionette siciliano nato all’inizio dell’Ottocento, che racconta le imprese dei paladini di Carlo Magno. Le storie vengono dall’Orlando Furioso e dalla Chanson de Roland. Dentro ci trovi battaglie, amori, tradimenti e un sacco di sciabolate.`],
[`Chi sono Orlando e Rinaldo?`,`Due cugini, paladini di Carlo Magno, forti come leoni e testardi come muli. Spesso rivali, soprattutto per amore. Ma quando c’è da combattere i saraceni, sono sempre dalla stessa parte.`],
[`Chi è Angelica?`,`La principessa pagana, bellissima e un po’ spregiudicata, che fa perdere la testa a mezza corte. Orlando e Rinaldo si sfidano per lei. Quando Angelica sposa il soldato Medoro, Orlando impazzisce: è il celebre "Furioso".`],
[`E i cattivi?`,`Il peggiore è Gano di Maganza, il traditore che vende i paladini ai nemici, a Roncisvalle. Quando entra in scena, il pubblico si agita: lo si fischia, gli si grida contro. Un buon traditore fa il successo di una serata.`],
[`Come si costruisce un pupo?`,`Si scolpisce in legno, si dipinge, si veste, e si copre con un’armatura di metallo cesellato. I pupi di Palermo sono più piccoli e più agili di quelli di Catania. Li manovriamo dall’alto con una sbarra di ferro e un paio di fili: ci vuole braccio forte e pazienza.`],
[`Cos’è il cuntu?`,`È il racconto a voce, un modo antichissimo di narrare. Il cuntista dice la storia da solo, con la voce e un bastone, senza pupi. È la parte più difficile del mestiere: devi far vedere con le parole quello che non si vede.`],
[`L’UNESCO ha riconosciuto l’Opera dei Pupi?`,`Sì: nel 2001 la proclamò capolavoro del patrimonio orale e immateriale dell’umanità, e nel 2008 è stata iscritta nella lista ufficiale. Una soddisfazione grande per noi pupari, che per anni ci siamo sentiti dire che era roba da vecchi.`],
[`Quali sono le famiglie dei pupari di Palermo?`,`I nomi più noti sono Cuticchio, Argento, Mancuso e Sanicola. Ognuna ha un teatro e una tradizione, e tutte fanno anche i pupi a mano. Le botteghe passano di padre in figlio, come le ricette.`],
[`Chi andava a vedere i pupi?`,`Il popolo, soprattutto: operai, artigiani, ragazzini. Si veniva la sera, si discuteva con i pupi come fossero persone vere, e c’era chi tifava per Orlando con tutto il cuore. Non era un teatro per signori.`],
[`I carretti siciliani c’entrano qualcosa con i pupi?`,`Altroché! Sulle sponde dei carretti dipinti c’erano spesso le scene di Orlando, Rinaldo, Angelica e Carlo Magno. Erano come fumetti su ruote: la gente imparava le storie guardando passare i carri.`],
[`Dove posso vedere altri pupi?`,`Al Museo Internazionale delle Marionette "Antonio Pasqualino": ci sono pupi di tutto il mondo, oltre a quelli siciliani. Ma i pupi vanno visti vivi, a teatro, con il pubblico che grida.`],
[`Arrivederci, Turi!`,`Ciao, Pierpaolo! Se senti un tintinnio di spade, entra: è Orlando che ti chiama. E ricordati: i buoni vincono, almeno in teatro.`],
],
pl_franca:[
[`Chi sei?`,`Donna Franca Florio, nata Jacona di San Giuliano. Nel 1893 sposai Ignazio Florio, e i palermitani cominciarono a chiamarmi "la regina di Palermo". Un titolo pesante, ma lo portai con grazia.`],
[`Chi erano i Florio?`,`Una famiglia di imprenditori: il vino Marsala, le tonnare, le navi, le fonderie. Con la loro ricchezza fecero costruire o sostennero opere come questo teatro, Villa Igiea, il Villino Florio, la tonnara dell’Arenella. Per anni, Palermo parlò soprattutto di noi.`],
[`Chi ha dipinto il tuo ritratto più famoso?`,`Giovanni Boldini, che mio marito chiamò da Parigi: si trasferì a Palermo per dipingermi. Il quadro ritrae un’espressione che dicono malinconica, quasi un presagio. Dopo tante vicende è tornato a Palermo: per anni è stato esposto a Villa Igiea.`],
[`Perché i Florio sostennero il Teatro Massimo?`,`Perché Palermo voleva un teatro all’altezza delle grandi città europee. I Florio aiutarono a realizzarlo, e mio marito ne fu anche impresario. Il progetto era di Giovan Battista Filippo Basile, poi finito dal figlio Ernesto.`],
[`Quando è stato inaugurato?`,`Il 16 maggio 1897, con il Falstaff di Verdi, un’opera che Palermo non aveva mai sentito. La prima pietra era stata posata il 12 gennaio 1875: ci vollero ventidue anni! Fu una serata che Palermo ricorda ancora.`],
[`Quanto è grande il Teatro Massimo?`,`È il più grande teatro lirico d’Italia e, allora, il terzo d’Europa dopo Vienna e Parigi. La sala ha un’acustica splendida, e la cupola si apre a spicchi per far uscire l’aria calda. Un’idea geniale, dicono.`],
[`Che cosa è successo al teatro dopo di te?`,`Nel 1974 fu chiuso per lavori, e rimase chiuso ventitré anni. Riaprì il 12 maggio 1997, con un concerto diretto da Franco Mannino e da Claudio Abbado, con i Berliner Philharmoniker. I palermitani lo aspettavano da una vita.`],
[`Ho sentito che qui hanno girato un film famoso.`,`Sì: il finale de Il Padrino – Parte III, girato sulla scalinata, nel 1990. Le scene dell’interno, però, furono ricostruite a Roma, a Cinecittà. È il teatro di Palermo che ha fatto il giro del mondo.`],
[`Cos’è Villa Igiea?`,`La villa sul mare dell’Acquasanta, voluta da mio marito, all’inizio come sanatorio. Poi la trasformammo in albergo di lusso, e i lavori furono affidati a Ernesto Basile, il genio del Liberty. Ospitò anche re e regine: nel 1907 vi sbarcò il re d’Inghilterra, Edoardo VII.`],
[`Chi era Ernesto Basile?`,`L’architetto di famiglia, il maestro del Liberty a Palermo. Finì il Teatro Massimo iniziato dal padre, e disegnò il Villino Florio e Villa Igiea. Le sue facciate sono piene di fiori, di curve e di luce.`],
[`È vero che D’Annunzio ti ammirava?`,`Gabriele D’Annunzio fu uno dei tanti poeti che mi scrissero versi e lettere appassionate. Io sorrisi, e lo trattai con garbo. Un’ammirazione, in fondo, non fa mai male, finché non diventa un fastidio.`],
[`Arrivederci, Donna Franca!`,`Arrivederci, Pierpaolo. Se passi dal Massimo la sera, ascolta le prove dalla strada: Palermo ha ancora una voce bellissima. E non dimenticare i guanti, a teatro.`],
],
pl_goethe:[
[`Chi sei?`,`Johann Wolfgang von Goethe, scrittore e studioso di piante, di luce e di molte altre cose. Nel 1787 ero in viaggio in Italia, e il 2 aprile arrivai a Palermo in nave da Napoli. Mi fermai circa due settimane.`],
[`Che cosa pensi di Palermo?`,`All’inizio la città mi sembrò sporca e disordinata, lo ammetto. Ma la luce, il mare e il verde mi conquistarono. Chi ha visto il cielo di Palermo, dicono i miei appunti, non lo dimentica più.`],
[`Che cos’hai detto del Monte Pellegrino?`,`Che è il più bel promontorio del mondo. Lo vidi la prima volta il 3 aprile, e poi salii fino al santuario di Santa Rosalia, il 6 aprile. Rimasi colpito dalla grotta e dalla statua della santa.`],
[`Che cos’è Villa Giulia?`,`Un giardino pubblico fatto costruire da poco, con aiuole ordinate, vialetti e fontane. Nei miei appunti lo definii il luogo più meraviglioso del mondo: c’erano aiuole di ranuncoli e anemoni, e l’aria era mite e profumata. L’Orto Botanico, accanto, nacque due anni dopo, nel 1789.`],
[`Hai avuto un’idea importante qui?`,`Camminando fra le piante mi parve di intuire che tutte potessero derivare da una forma originaria, una Urpflanze, una pianta primordiale. Era più un’intuizione che una prova, ma mi accompagnò per anni. Un giardino può far nascere idee grandi.`],
[`Perché dici che la Sicilia è la chiave di tutto?`,`Perché senza la Sicilia, scrissi, l’Italia non lascia nessuna immagine nell’anima: qui è la chiave di ogni cosa. Vi trovai paesaggi, templi greci, storie di popoli diversi. Un solo viaggio sull’isola vale mille libri.`],
[`Come viaggiavi?`,`Con un amico pittore, Christoph Kniep, che disegnava i luoghi mentre io osservavo e prendevo appunti. Alcuni mesi prima, all’inizio del viaggio, avevo lasciato la Germania quasi in segreto, con un nome falso. A volte per vedere bene serve passare inosservati.`],
[`Ti sono piaciuti i palazzi di Palermo?`,`Non tutti. Il barocco, per esempio, non era il mio gusto, e le statue mostruose di Villa Palagonia, a Bagheria, mi lasciarono sconcertato. Ma ho sempre cercato di capire prima di giudicare.`],
[`Hai scritto un libro su questo viaggio?`,`Sì: "Viaggio in Italia", che raccoglie lettere e diari di quei mesi. Lo pubblicai molti anni dopo, nel 1816. Rileggerlo è come riaprire una finestra sul 1787.`],
[`Cosa hai visto a Palermo il giorno di Pasqua?`,`Il giorno di Pasqua, all’alba, cominciò un gran chiasso per festeggiare la Resurrezione. Campane, spari e gente per strada! Per un tedesco abituato alla quiete, fu una sorpresa deliziosa.`],
[`Che consiglio dai a chi viaggia?`,`Guarda con gli occhi aperti e con la mente curiosa. Non fermarti alle prime impressioni, e annota quello che vedi. Il viaggio è fatto di piccole osservazioni, non di grandi cose.`],
[`Arrivederci, signor Goethe!`,`Auf Wiedersehen, Pierpaolo! Se rivedi il Monte Pellegrino al tramonto, saluta anche da parte mia. Quel cielo non si dimentica.`],
],
pl_tano:[
[`Come ti chiami e da quanto peschi?`,`Tano, come mio nonno, e pesco da quando ero un picciriddu. Sono nato all’Arenella, qui vicino, dove un tempo c’era la tonnara dei Florio. Il mare è l’unico capo che ho mai accettato.`],
[`Cos’è la Cala?`,`Il porto antico di Palermo, a forma di ferro di cavallo: qui ormeggiavano i pescherecci e le barche. Fino al Cinquecento era il porto principale della città, poi l’acqua si è ritirata e si è fatto più piccolo. Ma ha ancora il profumo di sempre.`],
[`Perché Palermo si chiama così?`,`Gli antichi greci la chiamarono Panormos, "tutto porto", perché la baia era un riparo perfetto. Poi arrivarono gli arabi, che la chiamarono Balarm, e da lì il nome che usiamo. Palermo è una città che ha cambiato nome, ma non ha mai perso il mare.`],
[`Che cos’è Porta Felice?`,`La porta monumentale all’estremità del Cassaro, la strada più antica della città. La cominciarono nel 1582, per volere del viceré Colonna, e prese il nome da sua moglie, Felice Orsini. Si dice che non abbia l’arco al centro per far passare i mariti traditi senza sbattere le corna.`],
[`E il Foro Italico?`,`La passeggiata sul mare, nata nel 1582 per volontà del viceré: per secoli fu il passeggio dei nobili. Oggi ci vengono tutti: famiglie, ragazzi con gli aquiloni, anziani sulle panchine. Dicono che le mura vicine si chiamassero "delle Cattive", perché ci passeggiavano le vedove.`],
[`Cosa si pesca nel golfo?`,`Pesce spada, tonno, sarde, acciughe, triglie, polpi. Le sarde sono meravigliose: con le sarde si fa la pasta con le sarde, con finocchietto selvatico, uvetta e pinoli. Se non hai mai provato, hai un buco nella vita.`],
[`Cosa si mangia di strada a Palermo?`,`Di tutto! Il pani ca meusa, schietto o maritato, le panelle e i crocchè, l’arancina, lo sfincione, la stigghiola, i babbaluci, che sono lumachine con aglio e prezzemolo. Ai mercati del Capo, della Vucciria e di Ballarò trovi tutto, e di sera si anima soprattutto la Vucciria.`],
[`Cos’è il Festino?`,`La festa di Santa Rosalia, il 14 luglio sera: un grande carro con la statua della santa scende lungo il Cassaro, per tutto il centro, fino al mare, vicino a Porta Felice. C’è musica, gente, fuochi d’artificio. Chi non è mai stato al Festino non conosce Palermo.`],
[`Com’era la tonnara dell’Arenella?`,`Una tonnara dei Florio: ci lavoravano tanti pescatori, e il tonno era una ricchezza. Oggi non si fa più com’una volta, ma i vecchi la ricordano con nostalgia. Il mare dà e il mare prende: così si dice.`],
[`Che cos’è il Monte Pellegrino per voi pescatori?`,`La nostra montagna: dal mare la vediamo da ovunque, e ci dice se il tempo sta per cambiare. In cima c’è la grotta di Santa Rosalia, e passando davanti la salutiamo sempre. Goethe lo chiamò il più bel promontorio del mondo, e su questo nessuno discute.`],
[`Insegnami qualche parola siciliana.`,`Amunì, "andiamo". Talìa, "guarda". Bedda, "bella". Picciriddu e picciotto, "bambino" e "ragazzo". Mizzica, un’esclamazione di meraviglia, ma educata. E "u mari", il mare: la più importante di tutte.`],
[`Arrivederci, Tano!`,`Ciao, Pierpaolo! Se il vento gira, vai a vedere il tramonto dal Foro Italico: il Pellegrino prende fuoco. Buona strada, e ricordati: chi ha pazienza, il mare lo premia.`],
],
pl_rosalia:[
[`Chi sei?`,`Rosalia Sinibaldi, la Santuzza, patrona di Palermo. Secondo la tradizione nacqui nel XII secolo da una famiglia nobile al tempo dei normanni, e scelsi una vita di preghiera, da eremita. I palermitani mi chiamano ancora con il cuore.`],
[`Perché hai scelto di vivere da eremita?`,`Perché volevo dedicare la mia vita alla preghiera. Prima vissi sul monte della Quisquina, dodici anni, poi in una grotta sul Monte Pellegrino. Si dice che morii il 4 settembre del 1165, in questa grotta.`],
[`Cos’è successo nel 1624?`,`A maggio arrivò a Palermo una grande peste. La città viveva giorni di paura: tanti malati, strade deserte, preghiere continue. Fu un tempo duro, e la gente cercava una speranza.`],
[`Come furono ritrovate le tue ossa?`,`Secondo la tradizione, una donna, Geronima La Gattuta, ebbe una visione: le dissi dove cercare. Il 15 luglio 1624, in questa grotta, furono ritrovati i miei resti. L’arcivescovo fece esaminare tutto, e la città ebbe fiducia.`],
[`Cos’è successo dopo il ritrovamento?`,`Le ossa furono portate in città in processione, e a poco a poco, dicono, la peste finì. Il 9 giugno 1625 si fece la prima grande processione. I palermitani vollero ringraziare, e mi chiamarono protettrice.`],
[`Quando sei diventata patrona di Palermo?`,`Il 27 luglio 1624 il Senato di Palermo mi elesse patrona della città. Prima di me, la proteggevano le sante Cristina, Ninfa, Oliva e Agata: le vedi ancora in alto ai Quattro Canti. Io sono arrivata dopo, ma mi hanno accolta bene.`],
[`Cos’è il Festino?`,`La festa che si fa ogni anno la sera del 14 luglio e nel giorno dopo. Un carro con la mia statua percorre il Cassaro, e la città si riempie di musica, gente e fuochi. È un modo per dire grazie, e per ricordare che si può ricominciare.`],
[`Cos’è l’acchianata?`,`È la salita a piedi verso questo santuario: all’inizio di settembre, intorno al 4, i palermitani salgono il monte camminando, spesso di notte, per ringraziare o chiedere una grazia. "Acchianata" vuol dire proprio "salita". Qualcuno, per voto, sale scalzo.`],
[`Come mai la tua grotta è un santuario?`,`La grotta ha stalattiti e uno spazio raccolto, tra cielo e terra. Qui venne anche Goethe, nel 1787, e rimase incantato dalla statua di marmo che mi raffigura distesa. È un luogo dove ci si sente piccoli, e questo fa bene.`],
[`Dove sono custodite le tue reliquie?`,`Nella Cattedrale di Palermo, in un’urna d’argento fatta nel 1631. I fedeli vanno a salutarmi lì, e poi salgono quassù. Le due strade si incontrano nel cuore dei palermitani.`],
[`Hai un consiglio per chi sta affrontando un momento difficile?`,`Non restare solo. Nei giorni della peste, Palermo ha resistito perché si è affidata alla preghiera, ma anche alla comunità. Una luce piccola, tenuta insieme da tante mani, illumina più di quanto si crede.`],
[`Arrivederci, Santa Rosalia!`,`Va’ in pace, Pierpaolo. In fondo alla grotta c’è una luce: seguila, ti porterà dove il tempo si piega. E quando torni a Palermo, ricordati di salutarmi dal mare.`],
],
};
Object.assign(TOPX,TOPX_PL);
})();
