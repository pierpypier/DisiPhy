/* ---------- 14. PARIGI · Dalla Torre Eiffel a Gare du Nord (Trocadéro, Eiffel, Champs-Élysées, Arco di Trionfo, Tuileries, Louvre, Île de la Cité, Quartiere Latino, Marais, Montmartre, Pigalle, Gare du Nord) ---------- */
/* Un'intera giornata da sinistra a destra: alba al Trocadéro con la Torre nella foschia, mattina sugli Champs-Élysées,
   tarda mattina alle Tuileries e al Louvre, mezzogiorno sull'Île de la Cité, primo pomeriggio nel Quartiere Latino,
   pomeriggio dorato nel Marais, tramonto a Montmartre, sera a Pigalle e al Moulin Rouge, notte alla Gare du Nord.
   In fondo al binario c'è il varco. Testi, tappe e dialoghi vengono da parigi.txt (definitivi). */
(function(){
const GT=372,W1=21900;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,pa=A.pa,txt=A.txt,glow=A.glow,cl=A.cl;
const {ln}=PR._rm;
const {merl,bk}=PR._mi;
const {win}=PR._pl;
const {por,fr,tendina}=PR._bo;
const {nf,mans,cav,GOLD}=PR._pa;                      /* luce di Parigi: la giornata scorre da sinistra (alba) a destra (notte) */
const LIT='rgb(255,226,150)';
const md=(i,n)=>((i%n)+n)%n;
const dl=(k,i)=>k>.3&&hr(i)>.35;
const Z=[0,2350,4650,7550,10650,13350,15150,17650,19800,W1+400];   /* inizio di ognuna delle 9 zone */
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
/* ---- cielo: alba rosata nella foschia, mattina limpida, mezzogiorno pieno, pomeriggio dorato, tramonto rosa-arancio, crepuscolo azzurro, notte ---- */
const SKY=[[0,['#b9a9bc','#f2bfb0','#fbdcc0']],[2200,['#9fc0dc','#d7e3ea','#f2ece0']],[4650,['#86b6de','#c6dcec','#eef0ea']],[7550,['#78b0e0','#c4dcec','#f0f0e8']],[10650,['#6aa8e0','#c8dcea','#f4f2e6']],[13350,['#7aaad8','#e6dcc0','#f8e0b0']],[15150,['#7aa4d4','#f0d4a0','#fcc880']],[16300,['#6a88c8','#f4a878','#ff9850']],[17400,['#5a5aa6','#e8786a','#ff9a58']],[18200,['#2a3a7a','#7a5a92','#e07a70']],[18900,['#141c52','#2c3a78','#6a5a8a']],[19800,['#0a1038','#1c2862','#4a4a7e']],[99999,['#0a1038','#1c2862','#4a4a7e']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
/* ---- palazzo generico di zona ---- */
const PM={1:['#e6dcc2','#ded2b4','#e8dfc8','#d8ccae'],2:['#e4d9bd','#ddd1b2','#e8dec6','#d6cab0'],3:['#e2d7ba','#dacfb0','#e6dcc2','#d4c8a8'],4:['#ddd2b6','#d4c8aa','#e2d8bf','#cfc3a4'],5:['#e0d4b6','#d4c6a6','#cdbf9e','#e4dac0'],6:['#b2553a','#a84a32','#b85e42','#a65038'],7:['#efe8d8','#e8d6a8','#e8b8aa','#e0c8a8'],8:['#d6c8ae','#cbbba0','#d0c0a6','#c4b69c'],9:['#c4bfb2','#bab5a8','#c8c3b6','#b4afa2']};
const SHUT=['#4f7a62','#5a7a8e','#6a4a3a','#4a6a52'];
const AWN={2:['#1f3a2c','#2a2a30','#5a1f2a','#1f2a4a'],5:['#c8402a','#2a7a4a','#e8a020','#2a5ac8'],8:['#a8202a','#a8202a','#2a2a3e','#a8202a'],9:['#a8202a','#1f3a2c','#a8202a','#2a2a3e'],4:['#2a4a3a','#8a3a2a','#2a2a30','#3a4a6a']};
function pal(g,x,w,h,i,st){const gt=GT,k=A.getDK(),c=PM[st][md(i,4)],top=gt-h,n=Math.max(2,Math.floor(w/40));
 if(st==7){/* Montmartre: casette basse, intonaci chiari, persiane colorate, vigna sul muro */
  rect(g,c,x,top,w,h);rect(g,'rgba(255,255,255,.16)',x,top,5,h);rect(g,'rgba(60,40,20,.12)',x+w-12,top,12,h);
  poly(g,hr(i)>.5?'#b0583a':'#7a8a9a',[[x-6,top],[x+w*.18,top-26],[x+w*.82,top-26],[x+w+6,top]]);for(let q=0;q<(w*.64)/8;q++)rect(g,'rgba(40,20,10,.18)',x+w*.18+q*8,top-26,1,26);
  rect(g,'#8a4a30',x+w*.7,top-40,9,20);
  const rows=Math.max(1,Math.floor((h-24)/40));for(let r=0;r<rows;r++)for(let q=0;q<Math.max(2,Math.floor(w/48));q++){const wx=x+14+q*((w-28-20)/Math.max(1,Math.max(2,Math.floor(w/48))-1)),wy=top+10+r*40,L=dl(k,i*9+r*3+q),sc=SHUT[md(i+q+r,4)];
   rect(g,'#f4ecd8',wx-2,wy-2,24,34);rect(g,L?LIT:'#2e3a48',wx+1,wy+1,18,28);rect(g,sc,wx-9,wy-2,8,34);rect(g,sc,wx+21,wy-2,8,34);for(let z=0;z<4;z++){rect(g,'rgba(0,0,0,.18)',wx-9,wy+3+z*8,8,1);rect(g,'rgba(0,0,0,.18)',wx+21,wy+3+z*8,8,1)}
   if(hr(i+r+q*3)>.5){rect(g,'#2a2a2e',wx-2,wy+30,24,2);for(let z=0;z<4;z++)dot(g,['#e8505a','#f2c82a','#ff7ab0','#f4f4ee'][z],wx+2+z*5,wy+27,2.6)}}
  if(hr(i*3)>.4)for(let q=0;q<6;q++)dot(g,['#4a7a40','#3a6a3a','#5a8a46'][q%3],x+4+q*9,top+h*.5+hr(q+i)*14,6+hr(q)*4);
  rect(g,'#8a7c68',x,gt-10,w,10);ar(g,'#5a3a22',x+w*.5-13,gt-10,26,48);return}
 if(st==6){/* Marais: mattoni rossi, angoli di pietra bianca, ardesia ripida con abbaini */
  bk(g,c,x,top,w,h,i+5);rect(g,'rgba(255,255,255,.08)',x,top,5,h);rect(g,'rgba(0,0,0,.14)',x+w-12,top,12,h);rect(g,'#eadfc6',x-2,top,6,h);rect(g,'#eadfc6',x+w-4,top,6,h);for(let q=0;q<h/26;q++){rect(g,'#eadfc6',x-2,top+q*26,9,4);rect(g,'#eadfc6',x+w-7,top+q*26,9,4)}
  poly(g,'#4a5262',[[x-5,top],[x+w*.14,top-52],[x+w*.86,top-52],[x+w+5,top]]);for(let q=1;q<9;q++)rect(g,'rgba(0,0,0,.16)',x-5+q*(w*.14+5)/9,top-q*5.8,w+10-2*q*(w*.14+5)/9,1);
  [.28,.72].forEach((u,j)=>{const dx=x+w*u-9;rect(g,'#eadfc6',dx-2,top-36,22,26);rect(g,dl(k,i*3+j+40)?LIT:'#2e3a48',dx+2,top-32,14,20);poly(g,'#4a5262',[[dx-4,top-36],[dx+9,top-46],[dx+22,top-36]])});
  const rows=Math.max(1,Math.floor((h-80)/48));for(let r=0;r<rows;r++)for(let q=0;q<n;q++){const wx=x+10+q*((w-20-22)/Math.max(1,n-1)),wy=top+14+r*48,L=dl(k,i*9+r*3+q);rect(g,'#eadfc6',wx-3,wy-3,28,46);rect(g,L?LIT:'#2e3a48',wx,wy,22,40);if(!L)rect(g,'rgba(255,255,255,.14)',wx+2,wy+2,6,36);if(hr(i+r+q)>.5){rect(g,'#2a2a2e',wx-4,wy+36,30,2)}}
  rect(g,'#3a2a22',x,gt-70,w,70);ar(g,k>.25?LIT:'#2a2a30',x+w*.5-20,gt-4,40,64);rect(g,'#5a3a22',x+8,gt-60,w*.5-34,56);tendina(g,['#2a4a3a','#8a3a2a','#2a2a30'][md(i,3)],x+4,gt-72,w*.5-26,12);return}
 /* stile Haussmann: pietra chiara, balconi continui di ferro battuto, tetto di zinco a mansarda, piano terra con negozi */
 rect(g,c,x,top,w,h);rect(g,'rgba(255,255,255,.14)',x,top,5,h);rect(g,'rgba(60,50,30,.12)',x+w-12,top,12,h);for(let q=0;q<h/22;q++)rect(g,'rgba(110,90,60,.07)',x,top+q*22,w,1);
 if(st==8){rect(g,'rgba(40,30,50,.18)',x,top,w,h)}
 rect(g,'#b8ac90',x-3,top-5,w+6,6);mans(g,x,top-5,w,st==9?30:40+(hr(i*3)*8|0),k,i);
 const shopH=(st==1||st==4)?0:66,rows=Math.max(1,Math.floor((h-shopH-16)/46));
 for(let r=0;r<rows;r++){const wy=top+14+r*46;for(let q=0;q<n;q++){const wx=x+10+q*((w-20-22)/Math.max(1,n-1)),L=dl(k,i*9+r*3+q)||(st==8&&hr(i*9+r*3+q)<.3+k*.4);
   rect(g,'#eadfc6',wx-3,wy-3,28,44);rect(g,L?LIT:'#2e3a48',wx,wy,22,38);if(!L)rect(g,'rgba(255,255,255,.14)',wx+2,wy+2,6,34);rect(g,'rgba(0,0,0,.2)',wx,wy+18,22,1.2);
   if(st==4||st==5){if(hr(i*5+r+q)>.3){const sc=SHUT[md(i+q,4)];rect(g,sc,wx-9,wy-1,8,40);rect(g,sc,wx+23,wy-1,8,40);for(let z=0;z<5;z++){rect(g,'rgba(0,0,0,.18)',wx-9,wy+3+z*8,8,1);rect(g,'rgba(0,0,0,.18)',wx+23,wy+3+z*8,8,1)}}}
   if(r>0||rows==1)rect(g,'#2a2a2e',wx-4,wy+39,30,2.2)}
  if(r==0){rect(g,'#2a2a2e',x,wy+38,w,2.6);for(let q=0;q<w/6;q++)rect(g,'#2a2a2e',x+q*6,wy+40,1.2,5)}}
 rect(g,'#8a7c68',x,gt-12,w,12);
 if(st==3){por(g,k>.25?1:0,x,gt-12,w,Math.max(2,Math.floor(w/44)),76,'#e8d8b8','#34261e')}
 else if(shopH==0){ar(g,'#4a2e1a',x+w*.5-14,gt-12,28,60);rect(g,'rgba(0,0,0,.2)',x,gt-6,w,6)}
 else{rect(g,'#2e2a2c',x,gt-shopH,w,shopH-10);const L=k>.2;rect(g,L?'rgb(255,214,140)':'#9aa8b0',x+8,gt-shopH+16,w-16,shopH-36);for(let q=1;q<Math.floor((w-16)/46);q++)rect(g,'#2e2a2c',x+8+q*46,gt-shopH+16,3,shopH-36);
  tendina(g,AWN[st][md(i,4)],x+4,gt-shopH+2,w-8,14);if(L)glow(g,x+w/2,gt-34,w*.5,'255,200,110',.22);
  if(st==8&&k>.3){const nm=['BAR','HÔTEL','CAFÉ','MUSIC'][md(i,4)];rect(g,'#1a1220',x+w*.5-26,gt-shopH-30,52,18);g.save();g.font='bold 12px Georgia,serif';g.textAlign='center';g.fillStyle='rgba(255,255,255,'+Math.min(1,.5+k)+')';g.shadowColor=hr(i)>.5?'#ff3a6a':'#ff7a3a';g.shadowBlur=14;g.fillText(nm,x+w*.5,gt-shopH-17);g.restore()}}}
/* ---- livello 0: cielo, sole, luna, nuvole mobili, foschia dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-18600)/1600,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/17800,0,1),sx=40+u*400,sy=312-Math.sin(u*Math.PI)*240;
 if(xs<18200){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*70)+','+Math.round(190-low*100)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*60)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*80)+','+Math.round(215-low*120)+')',sx,sy,15)}
 const mu=cl((xs-17600)/3000,0,1);if(mu>0){const mx=140+mu*240,my=310-mu*220;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<4650?'rgba(246,244,242,.8)':xs<15000?'rgba(250,248,244,.78)':xs<17400?'rgba(255,170,140,.66)':'rgba(130,120,180,.4)';
 each(o-((t*6)%340)*.02,340,1,(x,i,r)=>nube(g,x+r*100,40+r*46,.9+r*.5,cc));
 const fo=cl(1-xs/2300,0,1)*.42;if(fo>.01){g.fillStyle='rgba(246,214,222,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-12800)/1000,0,1)*cl((16400-xs)/900,0,1)*.14;if(wm>.01){g.fillStyle='rgba(255,214,150,'+wm+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: la sagoma della Torre Eiffel nella foschia, i tetti lontani, Montmartre con il Sacré-Cœur bianco, le luci della città ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 g.fillStyle=dim('#a9b8c8');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20,ph=hz-16-12*Math.abs(Math.sin((px+o)*.019))-8*Math.sin((px+o)*.047+1)-5*Math.sin((px+o)*.11);g.lineTo(px,ph)}g.lineTo(480,hz+30);g.closePath();g.fill();
 g.fillStyle=dim('#8ea0b4');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20,ph=hz-4-6*Math.sin((px+o)*.03+2)-4*Math.sin((px+o)*.09);g.lineTo(px,ph)}g.lineTo(480,hz+30);g.closePath();g.fill();
 /* Torre Eiffel lontana, a sinistra e al mattino */
 const ve=cl((3800-xs)/1500,0,1)*cl((xs+400)/300,0,1),ex=380-o;
 if(ve>.02&&ex>-120&&ex<600){g.globalAlpha=.78*ve;const H=190,ey=hz+14,wo=u=>40*Math.pow(1-u,2.1)+1.6*(1-u)+1.2,c=dim('#8a8aa0');
  [-1,1].forEach(s=>{const pts=[];for(let i=0;i<=8;i++){const u=.2*i/8;pts.push([ex+s*wo(u),ey-u*H])}for(let i=8;i>=0;i--){const u=.2*i/8;pts.push([ex+s*(wo(u)-8+4*(u/.2)),ey-u*H])}poly(g,c,pts)});
  const b=[];for(let i=0;i<=10;i++){const u=.2+.7*i/10;b.push([ex-wo(u),ey-u*H])}for(let i=10;i>=0;i--){const u=.2+.7*i/10;b.push([ex+wo(u),ey-u*H])}poly(g,c,b);ln(g,c,1.6,[ex,ey-.9*H,ex,ey-H]);rect(g,c,ex-wo(.2)-3,ey-.2*H-4,wo(.2)*2+6,5);rect(g,c,ex-wo(.38)-2,ey-.38*H-3,wo(.38)*2+4,4);
  g.globalAlpha=1}
 /* Montmartre con il Sacré-Cœur, a destra verso sera */
 const vs=cl((xs-14200)/2400,0,1)*cl((19000-xs)/1200,0,1),sx=420-(o-14200*.05)*1.0;
 if(vs>.02&&sx>-160&&sx<640){g.globalAlpha=.9*vs;poly(g,dim('#8aa07c'),[[sx-150,hz+30],[sx-110,hz-6],[sx-40,hz-24],[sx+40,hz-26],[sx+110,hz-8],[sx+160,hz+30]]);const wc=dim('#ece6da');
  rect(g,wc,sx-16,hz-52,32,28);g.fillStyle=wc;g.beginPath();g.ellipse(sx,hz-52,17,22,0,Math.PI,0);g.fill();[-30,30].forEach(d=>{rect(g,wc,sx+d-7,hz-40,14,16);g.beginPath();g.ellipse(sx+d,hz-40,8,11,0,Math.PI,0);g.fill()});rect(g,wc,sx+44,hz-62,8,38);rect(g,wc,sx-60,hz-24,120,3);g.globalAlpha=1}
 if(night>.35)for(let q=0;q<46;q++)dot(g,'rgba(255,214,130,'+(.4+.4*Math.sin(t*3+q))*(night-.3)+')',q*11+hr(q)*8,hz+20+hr(q*3)*8,1.2)}
/* ---- livello 2: i tetti di zinco con i camini, le guglie e le cupole (Notre-Dame, Sainte-Chapelle, Panthéon, Sacré-Cœur), le luci ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120);if(zz==7&&hr(i*3+1)<.5)return;const f=zz==7?.45:zz==9?.7:1,h=(36+r*40)*f,w=108;const c=dim(zz==6?'#a8553a':zz==7?['#efe8d8','#e8d6a8','#e8b8aa'][md(i,3)]:'#dcd2b8');
  rect(g,c,x,hz-h,w,h+10);poly(g,dim(zz==6?'#4a5262':'#7a8ca0'),[[x-5,hz-h],[x+14,hz-h-20],[x+w-14,hz-h-20],[x+w+5,hz-h]]);for(let k=0;k<3;k++)rect(g,night>.35&&hr(i+k)>.4?LIT:dim('#4a4a5a'),x+12+k*30,hz-h+10,14,18);if(hr(i)>.5)rect(g,dim('#97482f'),x+20,hz-h-34,8,16)});
 /* Notre-Dame, Sainte-Chapelle, Panthéon, Sacré-Cœur: sagome in mezzo ai tetti */
 const sil=(X,fn)=>{const tx=.2*X+192-o;if(tx>-160&&tx<640)fn(tx)};
 sil(10220,tx=>{const c=dim('#b8ae96');rect(g,c,tx-34,hz-100,22,110);rect(g,c,tx+12,hz-100,22,110);rect(g,dim('#9a917c'),tx-36,hz-104,26,6);rect(g,dim('#9a917c'),tx+10,hz-104,26,6);rect(g,c,tx-12,hz-66,24,76);ln(g,dim('#6a7078'),2,[tx,hz-66,tx,hz-130])});
 sil(9660,tx=>{ln(g,dim('#6a7078'),2.4,[tx,hz-20,tx,hz-120]);poly(g,dim('#7a8088'),[[tx-4,hz-90],[tx,hz-122],[tx+4,hz-90]])});
 sil(12250,tx=>{const c=dim('#d6ccb2');rect(g,c,tx-24,hz-70,48,80);g.fillStyle=dim('#8a98a6');g.beginPath();g.ellipse(tx,hz-70,26,32,0,Math.PI,0);g.fill();rect(g,c,tx-4,hz-108,8,12)});
 sil(16720,tx=>{const c=dim('#efe9dc');g.fillStyle=c;g.beginPath();g.ellipse(tx,hz-60,26,38,0,Math.PI,0);g.fill();rect(g,c,tx-26,hz-60,52,40);[-44,44].forEach(d=>{g.beginPath();g.ellipse(tx+d,hz-42,14,20,0,Math.PI,0);g.fill();rect(g,c,tx+d-14,hz-42,28,24)});rect(g,c,tx+60,hz-100,12,80)});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,214,130,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
/* ---- livello 3: la strada, zona per zona ---- */
function layerStreet(g,o,t){const gt=GT;
 const each2=(per,seed,a,b,st,hf,wd,skip)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;if(skip&&skip(wx))return;A.setDK(nf(wx));pal(g,x,wd,hf(i),i,st)})};
 each2(170,7,-50,2350,1,i=>150+hr(i*5)*60,156);
 each2(176,8,2350,4650,2,i=>170+hr(i*5)*60,166);
 each2(176,9,4650,7550,3,i=>170+hr(i*5)*50,164);
 each2(176,10,7550,10650,4,i=>110+hr(i*5)*60,164);
 each2(178,11,10650,13350,5,i=>170+hr(i*5)*50,166);
 each2(176,12,13350,15150,6,i=>130+hr(i*5)*50,164);
 each2(190,13,15150,17650,7,i=>56+hr(i*5)*40,150,wx=>hr(Math.round(wx/190)*7+3)<.45);
 each2(180,14,17650,19800,8,i=>170+hr(i*5)*50,170);
 each2(190,15,19800,W1+300,9,i=>110+hr(i*5)*40,180,wx=>hr(Math.round(wx/190)*7+3)<.45);
 /* Z4: il parapetto di pietra lungo la Senna */
 if(o+480>7550&&o<10650){A.setDK(nf(o+240));rect(g,'#cfc4a6',0,gt-22,480,22);rect(g,'#bfb496',0,gt-26,480,5);for(let q=0;q<30;q++)rect(g,'rgba(0,0,0,.1)',Math.floor(o/32)*32+q*32-o,gt-22,1.4,22)}
 /* Z7: scalinate, ringhiere e vigne lungo la salita */
 if(o+480>15150&&o<17650){each(o,84,31,(x,i,r)=>{const wx=i*84;if(wx<15150||wx>17650)return;A.setDK(nf(wx));
   for(let q=0;q<3;q++)dot(g,['#4a7a40','#3a6a3a','#5a8a46'][q],x+10+q*14,gt-16-hr(i+q)*8,9+hr(q+i)*5);if(hr(i*3)>.4){rect(g,'#2a2a2e',x+6,gt-62,2.2,62);rect(g,'#2a2a2e',x+44,gt-62,2.2,62);ln(g,'#2a2a2e',1.4,[x+6,gt-56,x+46,gt-56]);for(let q=0;q<6;q++)rect(g,'#2a2a2e',x+10+q*6,gt-56,1.2,56)}});
  A.setDK(nf(o+240));for(let q=0;q<10;q++)rect(g,q%2?'#d6ccb4':'#cdc2a8',0,gt-4-q*0,480,4)}
 /* Z9: pali e fili elettrici sopra i binari, tettoie di ferro */
 if(o+480>19800){each(o,380,32,(x,i,r)=>{const wx=i*380;if(wx<19800)return;A.setDK(nf(wx));rect(g,'#3a4650',x,gt-120,300,5);for(let q=0;q<8;q++)rect(g,'#2a2c30',x+q*42,gt-120,3,120);rect(g,'#2a2c30',x,gt-176,300,4);ln(g,'#2a2c30',1,[x,gt-170,x+190,gt-176,x+380,gt-170])})}}
/* ---- vita: piccioni sulle piazze, gabbiani sulla Senna, passeri ai tavolini, rondoni al tramonto, auto e taxi ---- */
const car=(g,x,y,s,c,d,k,tx)=>{g.save();g.translate(x,y);g.scale(s*d,s);poly(g,c,[[-34,-6],[34,-6],[32,-17],[18,-28],[-16,-28],[-30,-17]]);rect(g,'rgba(190,215,232,.75)',-14,-26,32,9);dot(g,'#151518',-20,-5,6);dot(g,'#151518',20,-5,6);if(tx){rect(g,k>.2?'rgb(255,250,230)':'#e8e8e0',-6,-34,14,6)}if(k>.3){rect(g,'rgb(255,236,170)',32,-14,4,5);glow(g,40,-12,40,'255,230,150',.5);rect(g,'rgb(255,60,60)',-36,-14,3,5)}g.restore()};
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 [800,1750,4350,5050,6500,10300,12950,14000,18800].forEach((cx,gi)=>{for(let i=0;i<5;i++){const wx=cx+i*38+hr(i+gi)*26,px=wx-cam;if(px<-20||px>500)continue;const fly=(Math.sin(t*.3+i*2.1+gi)>.93);const by=GT+36+hr(i*3+gi)*60-(fly?30+Math.sin(t*9+i)*8:0),bx=px+Math.sin(t*.5+i)*10;
  el(g,'#8a8e9a',bx,by-5,6,3.6);dot(g,'#6a7a8a',bx+5,by-8,2.8);rect(g,'#d8a0a8',bx+7.4,by-8,2,1);if(fly){ln(g,'#9aa0aa',1.6,[bx-2,by-6,bx-8,by-12-Math.sin(t*9+i)*4]);ln(g,'#9aa0aa',1.6,[bx+1,by-6,bx+7,by-12-Math.sin(t*9+i)*4])}else{rect(g,'#6a6e78',bx-2,by-2,1,3);rect(g,'#6a6e78',bx+1,by-2,1,3)}}});
 /* passeri che saltellano ai tavolini dei caffè */
 [3600,3680,10850,10920,16200,16260].forEach((wx,i)=>{const px=wx-cam;if(px<-20||px>500)return;const hop=Math.max(0,Math.sin(t*2.4+i*1.7))*5,bx=px+Math.sin(t*.4+i)*14,by=GT+78+(i%3)*12-hop;el(g,'#8a6a4a',bx,by-4,4.4,3);dot(g,'#6a4a2a',bx+4,by-6,2.2);rect(g,'#e8a020',bx+6,by-6,2,1)});
 /* gabbiani sopra la Senna */
 const ga=cl((xs-7500)/500,0,1)*cl((10800-xs)/600,0,1);
 if(ga>.05)for(let i=0;i<5;i++){const bx=((i*131+t*(36+i*7))%640)-80,by=50+hr(i)*90+Math.sin(t*1.4+i*2)*18,w=Math.sin(t*6+i)*4;g.strokeStyle='rgba(250,250,250,'+(.95*ga)+')';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-11,by+w);g.quadraticCurveTo(bx-5,by-5,bx,by);g.quadraticCurveTo(bx+5,by-5,bx+11,by+w);g.stroke()}
 /* rondoni al tramonto sopra i tetti */
 const sa=cl((xs-15500)/700,0,1)*cl((18400-xs)/900,0,1);
 if(sa>.05)for(let i=0;i<9;i++){const bx=((i*97+t*(60+i*6))%620)-70,by=70+hr(i)*120+Math.sin(t*2.4+i*2)*26,w=Math.sin(t*14+i)*3;g.strokeStyle='rgba(30,26,44,'+(.8*sa)+')';g.lineWidth=2;g.beginPath();g.moveTo(bx-8,by-w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke()}
 /* auto che passano sul viale (Z2) e taxi di sera (Z8, Z9) */
 [[2500,4600,6,7],[17700,21500,5,9]].forEach((rg,ri)=>{const span=rg[1]-rg[0];for(let i=0;i<rg[3];i++){const d=i%2?1:-1,sp=(40+i*8)*d,wx=rg[0]+(((t*sp+i*span/rg[3]*1.37)%span)+span)%span,px=wx-cam;if(px<-60||px>540)continue;A.setDK(nf(wx));car(g,px,GT+24+(i%2)*10,.62,['#2a4a7a','#c8c8d0','#8a2a2a','#2a2a30','#e8e8e0','#3a6a4a','#d8a020'][(i+ri*3)%7],d,A.getDK(),ri==1)}})}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[0,1050,'#cfc6b0','t'],[1050,2350,'#c8bea4','g'],[2350,4650,'#bba8a2','c'],[4650,7550,'#d6ccb2','g'],[7550,10650,'#b6ae9c','p'],[10650,13350,'#a49c88','p'],[13350,15150,'#bdb6a6','t'],[15150,17650,'#b8a894','p'],[17650,19800,'#4a4a56','a'],[19800,W1+400,'#46464e','a']];
 rect(g,'#e6dcc4',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();
  rect(g,z[2],x0,gt+3,x1-x0,150);
  if(z[3]=='t'||z[3]=='c'){const y0=z[3]=='c'?40:0;if(z[3]=='c'){rect(g,'#54565e',x0,gt+3,x1-x0,y0);rect(g,'#e8e8e0',x0,gt+3+y0-3,x1-x0,3);for(let q=0;q<14;q++)rect(g,'rgba(255,255,255,.7)',Math.floor((cam+x0)/70)*70+q*70-cam,gt+3+y0*.5,32,3);[2950,3300,3700,4100].forEach(zx=>{const sx=zx-cam;if(sx>-60&&sx<540)for(let q=0;q<7;q++)rect(g,'rgba(255,255,255,.75)',sx+q*7,gt+3,4,y0-3)})}
   for(let r=0;r<7;r++){const yy=gt+9+y0+r*19*(z[3]=='c'?.82:1),off=(r%2)*30,bw=(z[3]=='c'?56:70)+r*12,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil((x1-x0)/bw)+2;k++){const px=s0+k*bw-cam+off;rect(g,((k+r)&1)?'rgba(255,255,255,.1)':'rgba(0,0,0,.07)',px,yy,bw-3,15);rect(g,'rgba(0,0,0,.18)',px,yy,1.4,17)}rect(g,'rgba(0,0,0,.1)',x0,yy+15,x1-x0,1.6)}}
  if(z[3]=='p'){const sz=9;for(let r=0;r<7;r++){const yy=gt+7+r*20,off=(r%2)*(sz/2),bw=sz+r*2,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil((x1-x0)/bw)+2;k++){const px=s0+k*bw-cam+off,h2=hr(k*13+r*5);rect(g,h2>.66?'rgba(255,255,255,.1)':h2>.33?'rgba(0,0,0,.14)':'rgba(0,0,0,.04)',px+1,yy+1,bw-2,17);rect(g,'rgba(0,0,0,.2)',px,yy,1.2,19)}}}
  if(z[3]=='g'){for(let q=0;q<70;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.28)':'rgba(120,100,70,.2)',x0+((q*47)%Math.max(1,x1-x0)),gt+8+hr(q+3)*136,3+hr(q)*5,2);
   for(let q=0;q<9;q++){const px=Math.floor((cam+x0)/160)*160+q*160-cam;rect(g,'#7aa860',px,gt+4,90,16);rect(g,'rgba(255,255,255,.1)',px+4,gt+6,60,3)}}
  if(z[3]=='a'){rect(g,'#3a3a44',x0,gt+3,x1-x0,44);rect(g,'rgba(255,255,255,.55)',x0,gt+25,x1-x0,2);for(let q=0;q<14;q++)rect(g,'#4a4a54',Math.floor((cam+x0)/60)*60+q*60-cam,gt+27,28,2);
   for(let r=0;r<6;r++){const yy=gt+52+r*17,off=(r%2)*28,bw=64+r*10,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil((x1-x0)/bw)+2;k++){const px=s0+k*bw-cam+off;rect(g,((k+r)&1)?'rgba(255,255,255,.07)':'rgba(0,0,0,.1)',px,yy,bw-3,14);rect(g,'rgba(0,0,0,.25)',px,yy,1.4,16)}}
   rect(g,'#6a6a74',x0,gt+47,x1-x0,4)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 /* luce dorata del pomeriggio sul Marais, rosso e arancio del tramonto a Montmartre, neon rossi sull'asfalto lucido di Pigalle */
 const gd=cl((cam-13000)/700,0,1)*cl((15500-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.1*gd)+')',0,gt,480,150);
 const sg=cl((cam-15200)/700,0,1)*cl((17900-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,120,50,'+(.14*sg)+')',0,gt,480,150);
 const ng=cl((cam-17500)/500,0,1)*cl((19900-cam)/700,0,1);if(ng>.02){const gg=g.createLinearGradient(0,gt+40,0,gt+150);gg.addColorStop(0,'rgba(255,50,90,'+(.2*ng)+')');gg.addColorStop(1,'rgba(255,50,90,0)');g.fillStyle=gg;g.fillRect(0,gt+40,480,110)}}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- testi della scheda (nomi, prime battute, tappe) ---- */
const LX=[620,1200,1340,2000,2830,2960,3560,4250,5000,5750,6350,6740,7150,7900,8480,9020,9660,10220,11050,11650,12250,12900,13800,14140,14650,15450,16050,16720,17300,17950,18750,19400,20250,20440,20950,W1-370];
const LKTXT=[
`L'Esplanade del Trocadéro: la terrazza da cui si vede la Torre nel suo insieme. Il Palazzo di Chaillot dietro di te è del 1937, costruito per l'Esposizione. Qui all'alba i fotografi aspettano la luce giusta.`,
`La Torre Eiffel: 330 metri di ferro, progettata da Gustave Eiffel per l'Esposizione universale del 1889 e inaugurata il 15 marzo di quell'anno. È rimasta la costruzione più alta del mondo fino al Chrysler Building, nel 1930. Ogni sette anni la ridipingono tutta.`,
`Sotto la prima piattaforma, scritti a lettere d'oro, i 72 nomi di scienziati e ingegneri francesi. Eiffel volle onorare così chi aveva fatto progredire la scienza e l'industria del suo tempo.`,
`Il Pont d'Iéna attraversa la Senna fra il Trocadéro e la Torre. Dall'altra parte c'è il Champ-de-Mars, un lungo giardino che un tempo era un campo di manovre militari e poi sede delle esposizioni.`,
`L'Arco di Trionfo: lo volle Napoleone nel 1806, per celebrare le sue vittorie. I lavori durarono trent'anni, e fu inaugurato nel 1836. È alto 49 metri, e sotto la volta c'è la tomba del Milite Ignoto.`,
`Sotto l'Arco c'è la tomba del Milite Ignoto, sepolto qui il 28 gennaio 1921. La fiamma fu accesa l'11 novembre 1923 e viene ravvivata ogni sera alle 18:30.`,
`Gli Champs-Élysées: "la più bella avenue del mondo", dicono i parigini, e qualcuno aggiunge "e la più cara". Qui passa la sfilata del 14 luglio, e qui arriva l'ultima tappa del Tour de France.`,
`La Place de la Concorde: al centro l'obelisco di Luxor, che ha più di tremila anni ed è un dono dell'Egitto. Sotto la Rivoluzione qui c'era la ghigliottina.`,
`Le Tuileries: il giardino all'inglese e alla francese fra la Concorde e il Louvre. Qui c'era un palazzo reale che fu bruciato nel 1871: oggi restano solo gli alberi, le statue e le sedie verdi dove i parigini si siedono a leggere.`,
`L'Arc du Carrousel: un arco più piccolo di quello dell'Étoile, costruito da Napoleone fra il 1806 e il 1808. Segna l'ingresso del vecchio palazzo e guarda dritto verso l'altro Arco in fondo ai Champs-Élysées.`,
`Il Louvre: nato come fortezza alla fine del XII secolo, poi palazzo dei re, museo dal 1793. Oggi è il museo più visitato del mondo, con quasi nove milioni di visitatori l'anno. La piramide di vetro, di I. M. Pei, è del 1989.`,
`Nel Louvre ci sono la Gioconda di Leonardo, rubata nel 1911 e ritrovata due anni dopo, e la Venere di Milo. Per vedere tutto, dicono, non basta una vita; la maggior parte dei visitatori ne vede un decimo.`,
`Il Pont des Arts: un ponte solo per i pedoni, dove una volta si appendevano i lucchetti degli innamorati. Il peso era diventato troppo, e nel 2015 li hanno tolti. Oggi ci si siede sulle assi di legno a guardare il fiume.`,
`Il Pont Neuf, cioè "il ponte nuovo", è il ponte più vecchio di Parigi ancora in piedi. Fu finito nel 1607 e fu il primo di pietra senza case sopra, per non coprire la vista del Louvre. Nel 1985 Christo lo ha impacchettato di stoffa dorata.`,
`Alla punta dell'isola c'è il giardino del Vert-Galant: il soprannome di Enrico IV, il "Galante Verde". Si scende da una scalinata e ci si ritrova a due passi dall'acqua, come su una piccola prua di nave.`,
`I bouquinistes: circa duecentoventi librai che vendono libri usati, stampe e cartoline da quasi novecento cassette verdi lungo tre chilometri di fiume. Ogni cassetta è lunga circa due metri, e le regole sono del 1859. Dal 1991 sono Patrimonio UNESCO insieme alle rive della Senna.`,
`La Sainte-Chapelle: una cappella gotica, nel cortile del Palais de Justice, voluta da Luigi IX per custodire la Corona di Spine. Il piano alto ha pareti quasi tutte di vetrate colorate, con più di mille scene della Bibbia.`,
`Notre-Dame: costruita fra il 1163 e la metà del Trecento. Il 15 aprile 2019 un incendio ne distrusse la guglia e parte del tetto; dopo i lavori di restauro ha riaperto nel dicembre 2024. Sul sagrato, una stella di bronzo segna il "punto zero" da cui si misurano le distanze in Francia.`,
`Shakespeare and Company: la libreria di lingua inglese di fronte a Notre-Dame. La prima fu aperta nel 1919 da Sylvia Beach, che pubblicò l'Ulisse di Joyce; la attuale è del 1951 e ha preso il nome nel 1964. Dentro ci sono letti per scrittori di passaggio.`,
`La Sorbona: l'università più antica di Parigi, nata dal collegio fondato da Robert de Sorbon intorno al 1253. Il Quartiere Latino si chiama così perché gli studenti parlavano latino. Nel maggio del '68 qui scoppiò la rivolta.`,
`Il Panthéon: promesso da Luigi XV e costruito dal 1764 al 1790, sulla collina di Sainte-Geneviève. Dal 1791 è il tempio dei grandi di Francia. Sul frontone si legge: "Aux grands hommes la patrie reconnaissante". Qui sono sepolti Voltaire, Rousseau, Victor Hugo, Marie Curie.`,
`Il Jardin du Luxembourg: parco di una regina, oggi parco di tutti. Si sta seduti sulle sedie verdi attorno al bacino, e i bambini fanno navigare piccole barche di legno.`,
`La Place des Vosges: la più antica piazza pianificata di Parigi, voluta da Enrico IV e inaugurata nel 1612. Ha 36 padiglioni di mattoni rossi e pietra chiara con portici. Al centro un giardino di tigli con la statua di Luigi XIII a cavallo.`,
`La casa di Victor Hugo, al numero 6: ci visse dal 1832 al 1848, quando scrisse molto di quello che ha reso famosa la sua penna. Oggi è un museo, con i suoi mobili e i suoi disegni.`,
`La Rue des Rosiers: il cuore del vecchio quartiere ebraico, una stradina con panetterie, librerie e il famoso falafel. Qui il Marais mostra il suo lato più vivo, tra vecchie insegne in ebraico e vetrine di pasticcerie.`,
`La stazione Abbesses ha ancora l'ingresso liberty di Hector Guimard, di vetro e ferro. Lì vicino, nel Square Jehan-Rictus, il Muro dei "Ti amo": la frase scritta in più di duecento lingue su piastrelle blu.`,
`La Place du Tertre: la piazzetta dei pittori, dove si fa il ritratto in quindici minuti. Qui, fra Ottocento e Novecento, vissero Picasso, Modigliani, Utrillo; l'atmosfera è ancora quella dei vecchi bohémiens.`,
`Il Sacré-Cœur: la basilica bianca sulla cima della collina, il punto più alto di Parigi. La prima pietra è del 1875, l'edificio fu finito nel 1914. Fu costruito come atto di penitenza dopo la guerra del 1870 e la Comune.`,
`Il Lapin Agile: un cabaret rosa e verde in cima a una stradina, dove cantavano e bevevano pittori e poeti. È ancora aperto: si canta le vecchie canzoni francesi in mezzo alle vigne di Montmartre.`,
`Il Moulin Rouge: il mulino rosso che dal 1889 è il cabaret più famoso del mondo. Lo aprirono Joseph Oller e Charles Zidler, e qui è nato il french cancan. Dopo l'incendio del 1915 fu ricostruito.`,
`Place Pigalle: prende il nome dallo scultore Jean-Baptiste Pigalle. Di giorno è una piazza qualunque, di sera si accendono i neon. Nel vecchio Chat Noir, fra Otto e Novecento, si ritrovavano pittori e cantanti.`,
`La Rue des Martyrs: una strada in salita piena di botteghe: panetterie, formaggerie, cioccolaterie, banchi di verdura. Di sera i parigini ci fanno la spesa o l'apéro.`,
`La Gare du Nord: la stazione più trafficata d'Europa, con circa 257 milioni di passeggeri nel 2024. L'edificio attuale è del 1861-65, dell'architetto Jacques Ignace Hittorff. Da qui si parte per Londra, Bruxelles, Amsterdam.`,
`Sulla facciata una statua di Parigi domina otto statue di altre città europee, quelle da cui arrivano i treni: Francoforte, Amsterdam, Varsavia, Bruxelles, Londra, Vienna, Berlino, Colonia.`,
`Sotto la grande tettoia i treni partono per tutta l'Europa. L'Eurostar per Londra parte da qui dal 1994. A quest'ora il tabellone gira e la gente corre con i trolley.`,
`In fondo al binario, la luce di un altro mondo ti chiama.`
];
const INTRO=`Parigi, dall'alba alla notte. Parti al Trocadéro, quando la Torre Eiffel esce dalla foschia, e scendi verso gli Champs-Élysées e l'Arco di Trionfo; poi i giardini delle Tuileries e il Louvre con la sua piramide di vetro. A mezzogiorno attraversi la Senna e l'Île de la Cité, fra il Pont Neuf, la Sainte-Chapelle, Notre-Dame e le cassette verdi dei bouquinistes. Nel primo pomeriggio il Quartiere Latino, con le sue librerie e i suoi studenti; poi il Marais, con la piazza più elegante della città. Al tramonto si sale a Montmartre, fino al Sacré-Cœur; la sera Pigalle si accende di rosso, e a notte la Gare du Nord ti aspetta con i suoi treni. Il tempo qui si piega: i parigini di ogni epoca ti vengono incontro, e la città è quella di oggi.`;
const NAME={pa_eiffel:`Gustave Eiffel`,pa_napoleone:`Napoleone Bonaparte`,pa_marcel:`Marcel, il bouquiniste`,pa_curie:`Marie Curie`,pa_hugo:`Victor Hugo`,pa_theo:`Théo, il pittore di Place du Tertre`,pa_lautrec:`Henri de Toulouse-Lautrec`,pa_ines:`Inès, la responsabile dell'accoglienza`};
const GREET={
pa_eiffel:`Buongiorno! Guardala con calma: la Torre sembra leggera, ma è tutta calcolo. Sono Eiffel, Pierpaolo, e questa mattina ti faccio da guida, dis donc.`,
pa_napoleone:`Eccoti, finalmente! Io sono Napoleone, e questo Arco l'ho voluto io. Tu sei Pierpaolo, vero? Ti concedo cinque minuti, perché oggi sono di buon umore.`,
pa_marcel:`Salut! Entra pure: guarda, tocca, sfoglia: qui i libri non mordono. Io sono Marcel e questa è la mia bancarella, Pierpaolo. Bof, il resto del mondo può aspettare.`,
pa_curie:`Buonasera... o buongiorno, a quest'ora non lo so più. Sono Marie, Pierpaolo. Ho poco tempo, ma per una domanda seria lo trovo sempre.`,
pa_hugo:`Ah, un viandante! Sii il benvenuto nella mia vecchia piazza. Sono Victor Hugo, e tu sei Pierpaolo: lo so, perché a Parigi le notizie corrono più veloci di un titi in fuga.`,
pa_theo:`Eh, benvenuto sulla collina! Siediti, ti faccio il ritratto in quindici minuti: no, scherzo, pago io il caffè. Io sono Théo, Pierpaolo, e questa piazza è il mio ufficio.`,
pa_lautrec:`Eh, un nuovo amico! Chi sei? Pierpaolo? Perfetto: sono Henri, e questa sera ho già disegnato quattro ballerine. Siediti, che ti disegno anche te.`,
pa_ines:`Salut! Perso? Capita a tutti: a Gare du Nord ci si perde anche con le indicazioni. Sono Inès, Pierpaolo, e se sei qui per il treno ti dico io dove andare.`
};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)})),d:{a:{t:d}}});
const npcs=[
 /* Eiffel: giacca grigia, cravatta, baffi grigi, cappello di feltro, rotolo di disegni sotto il braccio */
 NP('pa_eiffel',NAME.pa_eiffel,1400,GREET.pa_eiffel,{skin:'#d8a888',top:'#8a8e96',bot:'#5a5a62',hair:'#bcbcbc',s:1.0},(g,b,t)=>{g.fillStyle='#4a4a52';g.beginPath();g.arc(1,-103+b,12.8,Math.PI,0);g.fill();rect(g,'#3a3a42',-13,-105+b,28,4);rect(g,'#2a2a30',-11,-109+b,24,3);
  poly(g,'#c8c8c8',[[-5,-95+b],[9,-95+b],[10,-90+b],[1,-92+b],[-4,-90+b]]);rect(g,'#7a1a22',-1.5,-88+b,3,18);poly(g,'#6a6e76',[[-12,-90+b],[-3,-90+b],[-6,-70+b]]);poly(g,'#6a6e76',[[12,-90+b],[3,-90+b],[6,-70+b]]);
  rect(g,'#eadfc0',-34,-76,11,36);rect(g,'#c8b88a',-34,-76,11,3);rect(g,'#c8b88a',-34,-44,11,3);rect(g,'rgba(60,80,140,.5)',-32,-72,7,2);rect(g,'rgba(60,80,140,.5)',-32,-62,7,2)}),
 /* Napoleone: uniforme blu con alamari dorati, bicorno nero, mano nel panciotto, stivali lucidi */
 NP('pa_napoleone',NAME.pa_napoleone,3130,GREET.pa_napoleone,{skin:'#e0b898',top:'#233a78',bot:'#ece8dc',hair:'#5a4a3a',s:.92},(g,b,t)=>{rect(g,'#16161a',-9.5,-30,9,30);rect(g,'#16161a',.5,-30,9,30);rect(g,'rgba(255,255,255,.25)',-8,-28,2,22);
  ln(g,'#f4f0e6',3,[-13,-88+b,9,-52]);ln(g,'#f4f0e6',3,[13,-88+b,-9,-52]);dot(g,GOLD,-14,-88+b,4.4);dot(g,GOLD,14,-88+b,4.4);for(let q=0;q<4;q++)dot(g,GOLD,0,-84+b+q*8,1.6);
  poly(g,'#16161a',[[-20,-107+b],[1,-124+b],[22,-107+b],[10,-102+b],[-8,-102+b]]);dot(g,'#d8302a',1,-112+b,2.2);dot(g,'#f4f0e6',1,-112+b,1);rect(g,'#e8d8a8',-3,-104+b,2,2);
  poly(g,'#233a78',[[-6,-76+b],[12,-72+b],[12,-66+b],[-6,-70+b]]);dot(g,'#e0b898',9,-70+b,3.6);rect(g,'#d8302a',-12,-88+b,24,2)}),
 /* Marcel: coppola di tweed, giacca di velluto verde, sciarpa, occhiali tondi, sedia pieghevole accanto */
 NP('pa_marcel',NAME.pa_marcel,9140,GREET.pa_marcel,{skin:'#d8a888',top:'#2f4a38',bot:'#4a4036',hair:'#c8c8c8',s:.98},(g,b,t)=>{g.fillStyle='#7a6a52';g.beginPath();g.arc(1,-103+b,12.8,Math.PI,0);g.fill();poly(g,'#6a5a42',[[-12,-104+b],[18,-104+b],[20,-99+b],[-12,-100+b]]);for(let q=0;q<6;q++)rect(g,'rgba(60,40,20,.25)',-10+q*3.4,-114+b,1,9);
  g.strokeStyle='#2a2a2a';g.lineWidth=1.2;g.beginPath();g.arc(7,-99+b,3.4,0,7);g.stroke();g.beginPath();g.arc(-1,-99+b,3.4,0,7);g.stroke();ln(g,'#2a2a2a',1.1,[3,-99+b,4,-99+b]);
  rect(g,'#c8402a',-12,-90+b,24,6);rect(g,'#c8402a',-11,-86+b,6,22);rect(g,'rgba(0,0,0,.2)',-11,-74+b,6,2);
  rect(g,'#a8402a',-28,-66,13,17);rect(g,'#f4ecd0',-26,-64,9,13);
  ln(g,'#6a4a2a',2.2,[40,-4,52,-44]);ln(g,'#6a4a2a',2.2,[62,-4,50,-44]);rect(g,'#4a6a8a',40,-46,22,5);ln(g,'#6a4a2a',2.2,[42,-46,40,-70])}),
 /* Marie Curie: abito scuro, grembiule bianco, capelli raccolti, quaderno, provetta che brilla appena */
 NP('pa_curie',NAME.pa_curie,11530,GREET.pa_curie,{skin:'#ecc8a8',top:'#2c2a34',bot:'#2c2a34',hair:'#6a4a2a',long:true,s:1.0},(g,b,t)=>{poly(g,'#2c2a34',[[-14,-90+b],[14,-90+b],[24,-4],[-24,-4]]);poly(g,'#ece8de',[[-12,-88+b],[12,-88+b],[17,-8],[-17,-8]]);rect(g,'#d8d4c8',-12,-88+b,24,4);poly(g,'rgba(0,0,0,.08)',[[2,-88+b],[12,-88+b],[17,-8],[2,-8]]);
  dot(g,'#6a4a2a',-5,-116+b,7);poly(g,'#6a4a2a',[[-12,-104+b],[12,-104+b],[10,-112+b],[-10,-112+b]]);
  rect(g,'#3a3a40',-30,-66,14,18);rect(g,'#f4ecd0',-28,-64,10,13);for(let q=0;q<3;q++)rect(g,'rgba(40,40,60,.5)',-27,-61+q*4,8,1);
  rect(g,'#cfe4ee',18,-60,4,14);rect(g,'rgba(150,255,170,'+(.6+.3*Math.sin(t*2))+')',18.6,-56,2.8,9);glow(g,20,-54,26,'150,255,170',.45);dot(g,'#8ae8a0',-2,-62,1.4)}),
 /* Victor Hugo: palandrana nera, barba bianca folta, cilindro, bastone, taccuino */
 NP('pa_hugo',NAME.pa_hugo,13900,GREET.pa_hugo,{skin:'#d8b090',top:'#1c1c22',bot:'#26262c',hair:'#efefef',s:1.0},(g,b,t)=>{poly(g,'#1c1c22',[[-14,-88+b],[14,-88+b],[20,-26],[-20,-26]]);
  poly(g,'#f4f4f0',[[-9,-100+b],[11,-100+b],[10,-84+b],[1,-76+b],[-8,-84+b]]);rect(g,'#f4f4f0',-12,-106+b,5,14);rect(g,'#f4f4f0',9,-106+b,5,12);
  rect(g,'#1a1a1e',-9,-134+b,21,26);rect(g,'#2a2a30',-9,-114+b,21,3);rect(g,'#1a1a1e',-15,-108+b,32,4);rect(g,'rgba(255,255,255,.12)',-7,-132+b,3,20);
  rect(g,'#4a3a2a',24,-76,3.2,76);dot(g,GOLD,25.6,-78,3.4);rect(g,'#5a2a2a',-28,-66,13,17);rect(g,'#f4ecd0',-26,-64,9,13);rect(g,'#f4f4f0',-4,-88+b,8,3)}),
 /* Théo: giacca di jeans macchiata di colore, berretto con visiera, sciarpa rossa, tavolozza e pennello */
 NP('pa_theo',NAME.pa_theo,16110,GREET.pa_theo,{skin:'#e0b090',top:'#4a6a9a',bot:'#3a3a46',hair:'#4a3020',s:1.0},(g,b,t)=>{g.fillStyle='#3a3a40';g.beginPath();g.arc(1,-103+b,12.8,Math.PI,0);g.fill();poly(g,'#2a2a30',[[8,-104+b],[24,-102+b],[22,-98+b],[8,-100+b]]);
  rect(g,'#c8302a',-12,-90+b,24,6);rect(g,'#c8302a',3,-86+b,6,20);for(let q=0;q<5;q++)dot(g,['#e8505a','#f2c82a','#4aa86a','#f4f4ee','#2a7ae0'][q],-8+q*4,-72+b+(q%2)*8,1.8);
  ln(g,'#8a6a3a',1.6,[-8,-108+b,-15,-124+b]);dot(g,'#c8302a',-15.4,-124.6+b,1.6);
  el(g,'#8a6a3a',28,-58,10,7);for(let q=0;q<5;q++)dot(g,['#e8505a','#f2c82a','#4aa86a','#f4f4ee','#2a7ae0'][q],23+q*3.4,-58+(q%2)*2-1,1.5);ln(g,'#6a4a2a',1.6,[34,-52,44,-84]);dot(g,'#2a7ae0',44.4,-85,1.6)}),
 /* Toulouse-Lautrec: bassino con bombetta, pince-nez, barba scura, bastone, album sotto il braccio */
 NP('pa_lautrec',NAME.pa_lautrec,18240,GREET.pa_lautrec,{skin:'#e0b898',top:'#2a2a32',bot:'#3a3a44',hair:'#3a2a1a',s:.8},(g,b,t)=>{g.fillStyle='#1a1a1e';g.beginPath();g.arc(1,-107+b,11,Math.PI,0);g.fill();rect(g,'#1a1a1e',-13,-108+b,28,3.4);rect(g,'rgba(255,255,255,.15)',-6,-116+b,3,6);
  poly(g,'#3a2a1a',[[-6,-96+b],[9,-96+b],[8,-84+b],[1,-80+b],[-5,-85+b]]);g.strokeStyle='#2a2a2a';g.lineWidth=1.2;g.beginPath();g.arc(7,-102+b,3,0,7);g.stroke();g.beginPath();g.arc(0,-102+b,3,0,7);g.stroke();ln(g,'#2a2a2a',1,[3,-102+b,4,-102+b]);ln(g,'#c8a040',.9,[-3,-100+b,-14,-90+b]);
  rect(g,'#f4f4f0',-4,-88+b,8,3);rect(g,'#8a2a2a',-1.4,-86+b,3,12);rect(g,'#6a3a2a',-30,-60,14,16);rect(g,'#c8a040',-30,-60,14,2);ln(g,'#3a2a1a',2.4,[28,-4,32,-60]);dot(g,GOLD,32.4,-61,3)}),
 /* Inès: gilet blu con il logo della stazione, badge al collo, ricetrasmittente, quaderno, sorriso paziente */
 NP('pa_ines',NAME.pa_ines,20295,GREET.pa_ines,{skin:'#e0b090',top:'#2a4a8a',bot:'#2a2a36',hair:'#3a2418',long:true,s:1.0},(g,b,t)=>{rect(g,'#2a4a8a',-13,-90+b,26,5);dot(g,'#f2c82a',6,-80+b,3.4);dot(g,'#2a4a8a',6,-80+b,1.4);
  ln(g,'#e8e8e0',1.2,[-3,-88+b,-1,-72+b]);ln(g,'#e8e8e0',1.2,[5,-88+b,1,-72+b]);rect(g,'#f4f4ee',-5,-72+b,9,11);rect(g,'#2a7ae0',-4,-71+b,7,3);dot(g,'#3a2418',-4,-108+b,8);rect(g,'#3a2418',-14,-108+b,6,18);
  rect(g,'#1a1a1e',16,-72,6,14);ln(g,'#1a1a1e',1.2,[20,-72,22,-86]);dot(g,'#e8505a',19,-69,1.2);rect(g,'#3a3a40',-30,-64,13,17);rect(g,'#f4ecd0',-28,-62,9,13)})
];
/* ---- oggetti lungo il percorso ---- */
const props=[['patarga',200,'PLACE DU TROCADÉRO'],['palamp',70],['patrocadero',620],['pavendeur',1040],['paeiffel',1250],['pacarosello',1560],['patiglio',1700,1],['patarga',1820,'AVENUE DE NEW-YORK'],['papontiena',2000],['palamp',2330],['pabanc',2440,1],['pametro',2540],
 ['paarco',2900],['pabanc',3220],['patarga',3300,'AVENUE DES CHAMPS-ÉLYSÉES'],['paavenue',3560],['pakiosque',3880],['pabici',4000],['paconcorde',4250],['palamp',4560],
 ['patarga',4700,'RUE DE RIVOLI'],['patuileries',5000],['pacarretto',5395],['pacarrousel',5750],['palamp',6080],['palouvre',6450],['pasedie',6900,2],['papontdesarts',7150],['palamp',7480],
 ['patarga',7640,'QUAI DE LA MÉGISSERIE'],['papontneuf',7900],['pavertgalant',8480],['pabouquinistes',9020],['patarga',9330,'QUAI DES GRANDS AUGUSTINS'],['pasainte',9660],['panotredame',10220],['papiccioni',10560],
 ['pabanc',10720,1],['patarga',10780,'RUE DE LA HUCHETTE'],['pashakespeare',11050],['pabici',11330],['patarga',11420,'BOULEVARD SAINT-MICHEL'],['pasorbona',11650],['papantheon',12250],['pasedie',12560,2],['paluxembourg',12900],['pametro',13230],
 ['patarga',13450,'PLACE DES VOSGES'],['pavosges',13800],['pabici',14260],['parosiers',14650],['palamp',15060],
 ['paabbesses',15450],['patarga',15740,'PLACE DU TERTRE'],['patertre',16050],['pasacrecoeur',16720],['palapin',17300],['palamp',17640],
 ['pamoulinrouge',17950],['patarga',18340,'BOULEVARD DE CLICHY'],['papigalle',18750],['pacarretto',19130],['pamartyrs',19400],['pamorris',19760],
 ['patarga',19900,'GARE DU NORD'],['pagare',20250],['pabici',20650],['pabinari',20950],['pavarco',W1-370]];
/* un lampione ogni tanto, dove la strada è libera */
const LM=props.filter(p=>!['patarga','palamp','pabanc','pabici','patiglio','pametro','pasedie','papiccioni','pamorris','pacarretto'].includes(p[0])).map(p=>p[1]);
for(let x=300;x<W1-420;x+=380){if(LM.every(m=>Math.abs(m-x)>340)&&props.every(p=>p[0]!='patarga'||Math.abs(p[1]-x)>130)&&!props.some(p=>(p[0]=='palamp')&&Math.abs(p[1]-x)<200))props.push(['palamp',x])}
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'parigi',name:'Parigi · Dalla Torre Eiffel a Gare du Nord',width:W1,sky:['#b9a9bc','#f2bfb0','#fbdcc0'],gt:372,gr:['#b8b0a0','#8a8478'],chord:[174.6,220,261.6,329.6],amb:'#ffe0c0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();


/* --- Battute: 12 per personaggio (da parigi.txt) --- */
(function(){
const TOPX_PA={
pa_eiffel:[
[`Chi sei e da dove vieni?`,`Gustave Eiffel, nato a Dijon nel 1832, ingegnere. Ho costruito ponti e strutture in ferro in mezzo mondo, e qualcuno mi ricorda soltanto per la Torre. Ne sono fiero lo stesso.`],
[`Perché è stata costruita la Torre?`,`Per l'Esposizione universale del 1889, che celebrava i cento anni della Rivoluzione. Doveva essere la porta d'ingresso della fiera. È stata inaugurata il 15 marzo 1889.`],
[`Quanto è alta e quanto pesa?`,`Trecentotrenta metri, con l'antenna. È stata l'edificio più alto del mondo fino al 1930, quando a New York è arrivato il Chrysler Building. Il peso lo lascio dire ai tecnici: certo, per essere di ferro, è leggera.`],
[`Quanti pezzi e quanti rivetti?`,`Più di diciottomila pezzi di ferro e circa due milioni e mezzo di rivetti. Ogni pezzo era disegnato nei minimi dettagli e preparato in officina, poi montato in cantiere. Una specie di grande puzzle, ben fatto.`],
[`Di chi era l'idea?`,`I primi schizzi li fecero due miei ingegneri, Maurice Koechlin ed Émile Nouguier, nel 1884. Io credetti nel progetto e lo portai avanti con l'architetto Stephen Sauvestre. Una torre di cui, bisogna dirlo, in tanti hanno il merito.`],
[`Quanto ci è voluto a costruirla?`,`I lavori cominciarono verso la fine di gennaio del 1887 e finirono nel marzo del 1889: poco più di due anni. Per un'opera così, un tempo record, e senza ritardi.`],
[`È vero che gli artisti protestarono?`,`Verissimo: un gruppo di artisti e scrittori scrisse una lettera di protesta, dicendo che avrebbe sfigurato Parigi. Si dice che Maupassant pranzasse proprio ai suoi piedi perché era l'unico posto da cui non la vedeva. Oggi non c'è cartolina senza Torre, mec.`],
[`Di che colore è e chi la ridipinge?`,`Un bronzo-grigio caldo, con tonalità più chiare in alto. Ogni sette anni la ridipingono tutta, a mano: circa sessanta tonnellate di vernice. Un lavoro che comincia e non finisce mai.`],
[`Chi sono i 72 nomi scritti sotto la prima piattaforma?`,`Scienziati, ingegneri e matematici francesi dell'Ottocento, scritti a lettere d'oro, sui quattro lati. Volli ricordare chi aveva reso possibile il progresso: senza di loro non si costruisce niente. Mi pareva giusto.`],
[`È vero che avevi un appartamento in cima?`,`Sì, vicino alla cima, un piccolo alloggio che usavo per ricevere gli ospiti. Si dice che anche Edison sia salito a trovarmi, nel 1889. Io preferivo la scienza dall'alto, con una bella vista.`],
[`Hai costruito altro oltre alla Torre?`,`Parecchio: ponti e viadotti, come il Garabit, e la struttura interna della Statua della Libertà di New York. Poi mi sono dedicato alla meteorologia e alle prove di aerodinamica, e la Torre mi è servita anche per quello. Anche quella era scienza.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo! Se hai tempo, a sera ripassa: ogni ora, dopo il tramonto, la Torre si illumina di scintillii e vale il viaggio. Buona strada, e guarda sempre in alto.`],
],
pa_napoleone:[
[`Chi sei e dove sei nato?`,`Napoleone Bonaparte, nato ad Ajaccio, in Corsica, il 15 agosto 1769. Mi sono fatto strada nell'esercito, sono arrivato al potere e nel 1804 mi sono fatto incoronare imperatore. Una carriera, direi, ben riuscita.`],
[`Perché hai voluto l'Arco di Trionfo?`,`Per celebrare le vittorie dei miei soldati. Lo ordinai nel febbraio 1806 e la prima pietra fu posata il 15 agosto di quell'anno, il giorno del mio compleanno. Un caso? Non credo.`],
[`Chi lo ha costruito?`,`L'architetto Jean Chalgrin, che morì nel 1810; poi altri continuarono. Io, intanto, ho perso l'impero e l'Arco è rimasto là. Fu inaugurato solo nel 1836, sotto il re Luigi Filippo: ci hanno messo trent'anni.`],
[`Quanto è alto?`,`Quarantanove metri. In cima c'è un panorama notevole sui dodici viali che partono dalla piazza. Se hai le gambe, sali: la vista vale la fatica.`],
[`Che cos'è la tomba del Milite Ignoto?`,`Sotto la volta sono sepolti i resti di un soldato francese rimasto senza nome, della Grande Guerra, il 28 gennaio 1921. La fiamma fu accesa l'11 novembre 1923 e ogni sera alle 18:30 si ravviva. Qui bisogna parlare piano.`],
[`Che c'è di scritto sull'Arco?`,`I nomi di battaglie e di generali, incisi sulla pietra, e le sculture raccontano le campagne militari. Quello più famoso è un gruppo che si chiama "La Marseillaise", con un guerriero che grida. Io vi riconosco la mia epoca.`],
[`Che cos'è la Concorde?`,`La piazza dove stava la ghigliottina durante la Rivoluzione. Oggi c'è l'obelisco di Luxor, regalo egiziano di più di tremila anni, installato nel 1836. Strana città, che nello stesso posto ha tanta storia.`],
[`Che cosa hai fatto per il Louvre?`,`Il Louvre, sotto di me, si chiamò Musée Napoléon, e lo riempii con i capolavori delle mie campagne. Dopo la mia caduta molti furono restituiti. A me piaceva l'idea di una Parigi capitale d'arte.`],
[`Che cosa hai lasciato alla Francia?`,`Il Codice civile del 1804, la Legion d'onore del 1802 e un sistema di scuole e amministrazione che dura ancora. Per i francesi sono insieme un eroe e un problema, e io lascio che discutano.`],
[`È vero che eri basso?`,`Si dice che fossi alto un metro e sessantotto: per l'epoca, altezza normale. Il mito del "piccolo caporale" nacque anche per i soprannomi e per le caricature inglesi. Ci ho riso su, perché il rispetto si prende, non si misura.`],
[`Come è andata a finire?`,`Dopo Waterloo, nel 1815, gli inglesi mi mandarono a Sant'Elena, e vi sono morto nel 1821. Nel 1840 le mie ceneri sono tornate a Parigi, il 15 dicembre, accolte da una folla immensa. Oggi riposano agli Invalides.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Vai, Pierpaolo, e guarda Parigi con rispetto: l'ho voluta bella. Se vuoi un consiglio, saluta l'Arco dal viale, e non girare le spalle alla storia.`],
],
pa_marcel:[
[`Come ti chiami e da quanto fai questo mestiere?`,`Marcel, sessantotto anni, e faccio il bouquiniste da più di quarant'anni. Ho preso la mia cassetta da un vecchio libraio che andava in pensione. Un boulot che non è mai stato un lavoro, ma una scusa per stare al sole.`],
[`Che cosa sono i bouquinistes?`,`Siamo i librai dei lungofiumi della Senna: circa duecentoventi in tutto, con quasi novecento cassette. Vendiamo libri usati, vecchie stampe, riviste e cartoline. Si dice che il mestiere nasca nel Cinquecento, con i venditori ambulanti sui ponti.`],
[`Perché le cassette sono verdi?`,`Un verde scuro, deciso, scelto per non rovinare il paesaggio: è un colore stabilito e non si cambia. Le cassette sono lunghe circa due metri e i regolamenti sono vecchi, del 1859. Ogni libraio ne può avere quattro.`],
[`Come funziona il lavoro?`,`Apriamo almeno quattro giorni a settimana, col bel tempo, e con la pioggia si chiude. Non paghiamo l'affitto della cassetta, ma dobbiamo rispettare le regole. Il resto è pazienza: aspettare il cliente giusto, che arriva sempre.`],
[`Che cosa vendi tu?`,`Libri vecchi, soprattutto francesi: romanzi, poesia, storia di Parigi, qualche fumetto. In qualche cassetta ci sono anche cartoline e stampe. Una regola dice che solo una cassetta su quattro può vendere souvenir: il resto deve essere carta.`],
[`Chi compra?`,`Un po' di tutto: studenti che cercano un testo a poco, collezionisti, turisti che vogliono un ricordo e vecchi clienti che tornano ogni anno. Il mio vero cliente è chi si ferma un momento. Chi si ferma, trova.`],
[`È vero che il fiume è Patrimonio UNESCO?`,`Sì, dal 1991 le rive della Senna sono nella lista, e noi con loro. Mi piace pensare di essere parte del panorama. Un museo all'aperto in cui, ogni tanto, si compra un libro.`],
[`Qual è il tuo ponte preferito?`,`Il Pont Neuf, che poi è il più vecchio, e fu finito nel 1607. Lo chiamano "nuovo" perché ai suoi tempi lo era, ed è senza case sopra. Mi piace sedermi sulle nicchie e guardare i battelli passare.`],
[`Che cos'era la storia dei lucchetti?`,`Al Pont des Arts gli innamorati appendevano lucchetti con i nomi e buttavano la chiave nel fiume. Erano così tanti che il ponte soffriva, e nel 2015 li hanno tolti. Adesso è un ponte tornato ponte, ouf.`],
[`Che cos'è la Sainte-Chapelle?`,`Una cappella gotica voluta da Luigi IX per custodire la Corona di Spine. Il piano alto è fatto quasi solo di vetrate, con più di mille scene. Vai, soprattutto con il sole: sembra di entrare in un gioiello.`],
[`Cosa ti piace di più di Parigi?`,`Che bisogna camminare. Parigi non si guarda dal finestrino: si fa da flâneur, cioè da gente che passeggia senza fretta. Se vai di corsa, non la vedi.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Va' pure, Pierpaolo, e prenditi un libro: anche uno solo, anche a caso. Se ripassi, bevo un caffè e ti racconto il resto. A bientôt, mec!`],
],
pa_curie:[
[`Chi sei e da dove vieni?`,`Marie Curie, nata Maria Skłodowska a Varsavia il 7 novembre 1867. Sono venuta a Parigi nel 1891 per studiare, perché in Polonia le donne non potevano frequentare l'università. Qui ho trovato una vita.`],
[`Cosa hai studiato alla Sorbona?`,`Fisica e matematica: mi sono laureata in fisica nel 1893 e in matematica nel 1894. All'inizio vivevo in una soffitta e mangiavo poco, ma studiavo da mattina a sera. Era la vita che avevo scelto.`],
[`Che cosa hai scoperto?`,`Insieme a mio marito Pierre abbiamo scoperto due elementi: il polonio, a cui ho dato il nome della mia patria, e il radio, nel 1898. Ho anche coniato la parola "radioattività". Si lavorava con attrezzi poveri, in una vecchia baracca.`],
[`Quanti premi Nobel hai vinto?`,`Due. Nel 1903 il Nobel per la fisica, insieme a Pierre e a Henri Becquerel; nel 1911 quello per la chimica, da sola. Sono la prima donna ad averlo vinto e l'unica persona premiata in due scienze diverse.`],
[`Come fu la vita dopo la morte di Pierre?`,`Dura. Pierre morì in un incidente stradale nel 1906. Dopo, ho preso la sua cattedra alla Sorbona: fui la prima donna a insegnare lì. Non ho mai smesso, anche se per un po' ho avuto paura di non farcela.`],
[`Cosa hai fatto durante la Prima guerra mondiale?`,`Ho organizzato i primi servizi radiologici mobili: furgoni con i raggi X che raggiungevano i feriti sul fronte. Li chiamavano "le piccole Curie". Ho imparato a guidare, e a riparare i motori.`],
[`Che cos'è l'Istituto del Radio?`,`Il laboratorio che ho fondato a Parigi, dove si studiava la radioattività e si cercavano cure contro il cancro. Ci ha lavorato anche mia figlia Irène, che nel 1935 ha vinto il Nobel per la chimica. Una famiglia di scienziati, quasi per caso.`],
[`È vero che i tuoi quaderni sono ancora radioattivi?`,`Purtroppo sì: sono conservati in scatole schermate e si consultano con precauzioni. Allora non si conoscevano bene i pericoli del radio: lo si teneva in tasca senza timore. È una lezione sul prezzo della scoperta.`],
[`Com'è finita?`,`Sono morta il 4 luglio 1934, per una malattia del sangue legata, si pensa, alle lunghe esposizioni. Non voglio fare la vittima: ho fatto un lavoro che amavo. Altri sono venuti dopo e hanno scoperto di più.`],
[`Cos'è il Panthéon?`,`Un tempio dedicato ai grandi di Francia, qui vicino, sulla collina di Sainte-Geneviève. Nel 1995 vi hanno portato i miei resti, insieme a quelli di Pierre: sono stata la prima donna accolta per meriti propri. Un onore che mi fa un po' sorridere.`],
[`Come si vive il Quartiere Latino?`,`Si studia, si legge e si discute: caffè, librerie, vecchi palazzi. Il nome viene dal latino che i primi studenti parlavano. Io ci tornerei volentieri a quindici anni, con in mano un buon libro.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo. Studia, sii curioso e non temere le cose difficili: la scienza è una lunga pazienza. Se ti manca il coraggio, ricordati che qui ne ho avuto poco anch'io, e l'ho trovato strada facendo.`],
],
pa_hugo:[
[`Chi sei e dove sei nato?`,`Victor Hugo, nato a Besançon il 26 febbraio 1802. Sono diventato parigino con l'infanzia e ho amato questa città per tutta la vita. Scrittore, poeta, uomo di teatro, e anche un po' politico.`],
[`Hai abitato qui?`,`Sì, al numero 6 di Place des Vosges, dal 1832 al 1848. Ho scritto qui molte pagine, in piedi, davanti a un leggio. Oggi la casa è un museo, e ci tengono anche i miei disegni.`],
[`Che cos'è "Notre-Dame de Paris"?`,`Il mio romanzo, pubblicato nel 1831: la storia di Quasimodo, di Esmeralda e della cattedrale. Volevo che i parigini imparassero ad amare il loro Medioevo e a non demolirlo. Si dice che il libro abbia contribuito a salvare Notre-Dame, e ne sono fiero.`],
[`E "I miserabili"?`,`Il romanzo che pubblicai nel 1862: la storia di Jean Valjean, di Cosette e di un'epoca di ingiustizie. Un personaggio che adoro è Gavroche, il ragazzino di strada che ha il cuore più grande della città. Da lui nasce il modo di dire "gavroche" per un monello parigino.`],
[`Perché sei andato in esilio?`,`Dopo il colpo di Stato di Napoleone III, nel 1851, mi opposi apertamente e dovetti partire. Vissi a Bruxelles, a Jersey e poi a Guernsey, dal 1855 al 1870. Furono anni di dolore e di scrittura.`],
[`Come sei tornato a Parigi?`,`Nel 1870, dopo la caduta dell'Impero. Si racconta che alla Gare du Nord mi attendesse una folla enorme, e fu una delle emozioni più grandi della mia vita. Dopo diciannove anni, Parigi mi aveva ritrovato.`],
[`Cosa pensavi della Comune?`,`Ero a Bruxelles e criticai le violenze da entrambe le parti: scrissi nel mio diario che c'era follia da tutti e due i lati. Difesi i comunardi quando il governo rifiutò loro asilo. Una posizione scomoda, ma la mia.`],
[`Come sei morto?`,`Il 22 maggio 1885, a Parigi, a ottantatré anni, per una polmonite. Avevo chiesto un funerale dei poveri, ma il governo mi concesse un funerale di Stato. Un corteo di più di due milioni di persone andò dall'Arco di Trionfo al Panthéon.`],
[`Dove sei sepolto?`,`Al Panthéon, qui vicino, accanto a Voltaire e Rousseau. Ci sono anche Zola, Dumas e Marie Curie. È un onore che non meritavo, ma che accetto: mi tengono compagnia.`],
[`Come scrivevi?`,`Spesso in piedi, davanti a un leggio, come si dice che facessi nell'esilio. Ho sempre pensato meglio camminando che seduto. A Parigi, del resto, basta camminare per trovare un'idea.`],
[`Come vedi la Place des Vosges?`,`Una piazza perfetta: mattoni rossi, pietra bianca, tigli, silenzio. L'ha voluta Enrico IV, e fu inaugurata nel 1612. Qui hanno vissuto anche Richelieu e Madame de Sévigné: un secolo di storia di Francia in mezzo ai tigli.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Va', Pierpaolo, e non dimenticare i poveri di questa città: sono loro che la tengono in piedi. Che il tuo cammino sia lungo e che tu ritorni, magari con un libro sotto il braccio.`],
],
pa_theo:[
[`Come ti chiami e che fai?`,`Théo, trentun anni, pittore. Faccio ritratti ai turisti qui in piazza, e di notte dipingo quello che mi pare. Non è un boulot facile, ma è il più bello che conosco.`],
[`Cos'è Montmartre?`,`Una collina a nord di Parigi, il punto più alto della città. Era un villaggio fuori Parigi, con i mulini e le vigne, e poi diventò il quartiere degli artisti. Ancora oggi sembra un paese dentro la città.`],
[`Chi ha vissuto qui?`,`Pittori famosi: Picasso, Modigliani, Utrillo, Renoir e tanti altri. Venivano perché l'affitto costava poco e c'era un'aria di libertà. Oggi, ouf, l'affitto non costa più poco.`],
[`Cos'è Place du Tertre?`,`La piazzetta dei pittori, a due passi dalla basilica. Fa un po' paura ai turisti, ma è più autentica di quanto pensi. Ci sono i cavalletti, i caffè, e la voce dei venditori. Qui si ritrae e si chiacchiera.`],
[`Perché c'è il Sacré-Cœur?`,`Costruito dopo la guerra del 1870 e la Comune di Parigi, come atto di penitenza: la prima pietra è del 1875, fu finito nel 1914. La pietra bianca è una pietra che resta chiara, si dice, anche con la pioggia. C'è chi lo ama e chi lo detesta: i parigini non sono mai d'accordo.`],
[`Come si sale?`,`A piedi, per le scale: sono molte, e ti consiglio di fermarti ogni tanto. Oppure con la funicolare, che per un biglietto del metrò ti porta in cima. A me le scale piacciono: ti fanno guadagnare la vista.`],
[`Che cos'è il Muro dei "Ti amo"?`,`Un muro nel parco vicino alla stazione Abbesses, dove è scritta la frase "ti amo" in più di duecento lingue, su piastrelle blu. Gli innamorati cercano la loro lingua, e sono felici. È l'angolo più dolce di Montmartre.`],
[`Cos'è il Lapin Agile?`,`Un cabaret storico, una piccola casa rosa con le persiane verdi. Ci si ritrovavano poeti e pittori; ancora oggi ci si canta come un tempo. La sera ci vado a bere un bicchiere, e a farmi quattro risate, mec.`],
[`Che cos'è il Moulin de la Galette?`,`Un vecchio mulino, ancora in piedi, che era una sala da ballo all'aperto. Renoir ne fece un celebre dipinto, nel 1876. Oggi è un ristorante: un museo mangereccio, direi.`],
[`Che rapporto hai con Parigi?`,`Una storia d'amore con molte litigate. È cara, rumorosa, piena di gente che va di fretta. Ma bastano un tramonto sui tetti e un croissant caldo per farmi dimenticare tutto, e passa la rabbia.`],
[`Cosa consigli a un amico italiano?`,`Di perdersi: una volta sceso dalla collina, sali una scala a caso, apri una porta, entra in un cortile. A Parigi le cose belle sono nascoste. E il caffè, qui, non è come il vostro: ma ci si abitua.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Certo, Pierpaolo, vai pure: la sera chiama. Se ripassi, ti faccio un ritratto sul serio. Salut, e non perdere la luce!`],
],
pa_lautrec:[
[`Chi sei e dove sei nato?`,`Henri de Toulouse-Lautrec, nato ad Albi il 24 novembre 1864, in una famiglia di conti. Mi aspettava una vita di caccia e di cavalli, ma le cose sono andate diversamente. A diciassette anni ho scelto la pittura.`],
[`È vero che sei basso?`,`Sì, sono alto poco più di un metro e cinquanta. A tredici e quattordici anni mi sono rotto le due gambe e non sono più cresciute come le altre. Ci ho riso su: è più facile prendersi in giro che farsi compatire.`],
[`Perché sei venuto a Montmartre?`,`Perché qui c'era la vita: cabaret, teatri, ballerine, pittori, canzonettisti. Ho preso uno studio vicino, e di sera giravo i locali con il mio album. Ho dipinto la gente com'era, senza abbellirla.`],
[`Cos'è il Moulin Rouge?`,`Il cabaret rosso che aprì nel 1889: lo fondarono Joseph Oller e Charles Zidler. Aveva il mulino sul tetto, una sala grande e il french cancan. Ci andavo quasi ogni sera, e ci avevo il mio tavolo.`],
[`Chi è La Goulue?`,`Louise Weber, ballerina di cancan e regina del locale: la chiamavano "la Golosa". La ritrassi più di una volta, anche nel manifesto che nel 1891 mi rese famoso. Con un gesto, sollevava la gamba e il pubblico impazziva.`],
[`Chi sono Jane Avril e Yvette Guilbert?`,`Jane Avril era una ballerina magra e malinconica, che chiamavano "la Mélinite" per la sua energia; Yvette Guilbert una cantante dai lunghi guanti neri. Le ritrassi più volte nei miei manifesti. Erano amiche e modelle.`],
[`Che cosa disegni?`,`Manifesti, litografie, quadri a olio, cartoline. Mi interessava l'attimo: lo sguardo, il gesto, il volto in una luce di teatro. Non volevo la bellezza: volevo la verità.`],
[`Hai avuto altre passioni?`,`La compagnia degli amici, i cocktail e la tavola. Si dice che il mio bastone avesse un incavo per nascondere un liquore: una bella leggenda, ma io mi limito a dire che amavo il buon bere. Il resto lo lascio alla leggenda.`],
[`Come hai vissuto gli ultimi anni?`,`Con meno salute e più lavoro. La mia salute peggiorò e morii a trentasei anni, il 9 settembre 1901, nella casa di famiglia. Fu una fine precoce, ma la mia opera è rimasta.`],
[`Dove si vedono le tue opere?`,`Ad Albi, nella mia città, c'è un museo con la più grande raccolta dei miei lavori, e molte opere sono nei grandi musei di Parigi. Ma i miei manifesti sono ancora nelle strade e nei bar. Mi fa piacere pensare a loro come a vecchi amici.`],
[`Cos'è Pigalle di sera?`,`Un teatro. Neon rossi, ballerine, locali, gente di tutti i generi. Una volta era più sfrontato, oggi è più pulito; ma resta il quartiere dove Parigi si diverte. Ogni sera è una nuova pagina da disegnare.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Vai, Pierpaolo, e guarda la gente con gli occhi buoni: ognuno ha una storia. Passa a trovarmi quando vuoi, ti disegno un ricordo. À la prochaine, mon ami!`],
],
pa_ines:[
[`Come ti chiami e che fai?`,`Inès, quarantadue anni, lavoro qui da quindici. Accolgo i viaggiatori, spiego i binari, ritrovo le valigie smarrite. Ci vuole pazienza: a volte è un boulot, a volte è teatro.`],
[`Che stazione è questa?`,`La Gare du Nord, la più trafficata d'Europa: circa 257 milioni di passeggeri nel 2024. Da qui si parte per Londra, Bruxelles, Amsterdam e per il nord della Francia, e arrivano anche i treni dell'aeroporto. È un formicaio.`],
[`Come è nata?`,`La prima stazione è del 1846. L'edificio attuale lo ha progettato Jacques Ignace Hittorff, fra il 1861 e il 1865, per un presidente della compagnia che si chiamava James de Rothschild. Fu un edificio nuovo per una Parigi in crescita.`],
[`Cosa sono le statue sulla facciata?`,`In alto una grande statua che rappresenta Parigi; sotto, otto statue che rappresentano le città raggiunte dai treni: Francoforte, Amsterdam, Varsavia, Bruxelles, Londra, Vienna, Berlino e Colonia. Una carta geografica scolpita sul tetto.`],
[`Cos'è l'Eurostar?`,`Il treno per Londra, che passa sotto la Manica: parte da qui dal 1994. Da Parigi a Londra si va in poche ore, e c'è sempre la fila per i controlli. Per me, ogni volta, è una piccola partenza.`],
[`Chi arrivò qui, nel 1870?`,`Victor Hugo: tornò dall'esilio e, si racconta, trovò una folla ad aspettarlo. Mi piace pensare che quella folla sia ancora qui, con i trolley e con i telefoni. A me i grandi sono sempre sembrati viaggiatori.`],
[`Cosa si vede intorno alla stazione?`,`Brasserie, hotel, negozietti, e accanto c'è la Gare de l'Est, stazione sorella. Dietro la stazione ci sono quartieri vivaci, con ristoranti indiani, tamil e africani. Qui Parigi non è turistica: è vera.`],
[`Cosa consigli di mangiare prima di partire?`,`Un panino al prosciutto e burro, il famoso jambon-beurre, o un croissant e un caffè al banco. Se hai tempo, una crêpe da qualche bancarella. Meno di quello che ti sembra, e più del tuo treno.`],
[`Come ci si orienta?`,`Con il tabellone: il numero del binario compare pochi minuti prima della partenza, e la folla corre tutta insieme. Il consiglio è di restare calmi e di guardare le frecce. E, se ti perdi, ci sono io.`],
[`Come parlate qui?`,`Un misto di tutto: francese, arabo, inglese, italiano. Per dire "ma dai" si dice "dis donc", e per dire "pazzesco" si dice "ouf". I giovani scambiano le sillabe delle parole, il verlan: "meuf" è "femme" al contrario.`],
[`Che cos'è per te Parigi?`,`Una città enorme, in movimento, in cui tutti passano e qualcuno resta. Io ho scelto di restare. Alla stazione, ogni giorno, vedo partire un pezzo di storia.`],
[`Posso salutarti e proseguire la mia passeggiata?`,`Va', Pierpaolo, che il tuo treno ti aspetta! In fondo al binario c'è una luce: seguila. Bon voyage, e bonne chance!`],
],
};
Object.assign(TOPX,TOPX_PA);
})();
