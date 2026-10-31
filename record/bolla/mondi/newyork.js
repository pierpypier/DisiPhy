/* ---------- 15. NEW YORK · Dal porto a Central Park (Battery Park, Wall Street, Brooklyn Bridge, Little Italy, Chinatown, Greenwich Village, Flatiron, Empire State, Grand Central, Chrysler, Rockefeller Center, Times Square, Central Park) ---------- */
/* Un'intera giornata da sinistra a destra: alba a Battery Park sul porto, mattina a Wall Street, tarda mattina sul Brooklyn Bridge,
   mezzogiorno a Little Italy, Chinatown e Lower East Side, primo pomeriggio nel Greenwich Village, pomeriggio al Flatiron e
   all'Empire State, tardo pomeriggio a Grand Central e al Chrysler, tramonto a Rockefeller Center, sera a Times Square,
   notte a Central Park. In fondo al Mall, sotto gli olmi, c'è il varco. Testi, tappe e dialoghi vengono da newyork.txt (definitivi). */
(function(){
const GT=372,W1=21000;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl;
const {ln}=PR._rm;
const {bk,merl}=PR._mi;
const {fr,tendina}=PR._bo;
const {battello}=PR._pa;
const {nf,stepped,grid,wtank,fire,flagUS}=PR._ny;
const LIT='rgb(255,226,150)',GOLDN='#d9b24a',tn=A.tn;
const md=(i,n)=>((i%n)+n)%n;
const dl=(k,i)=>k>.3&&hr(i)>.35;
let TT=0;
const Z=[0,2400,5400,7000,9400,11200,12600,15000,16800,18200,W1+400];   /* inizio di ognuna delle 10 zone */
const zn=xs=>{let z=1;while(z<10&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
/* ---- cielo: alba fredda e dorata, mattina azzurra, mezzogiorno chiaro, pomeriggio caldo, tramonto arancio e rosa, crepuscolo blu, notte ---- */
const SKY=[[0,['#8a9cc0','#f3c3a2','#ffe0ae']],[1700,['#86b2dc','#cde0ee','#f6ecd6']],[2400,['#8fc3ea','#d0e6f4','#f4f0e4']],[5400,['#82bdea','#d2e6f2','#f4f2e8']],[7000,['#74b2ea','#d6e8f2','#f6f4ea']],[9400,['#74b0e4','#e4e4d0','#f8ecc8']],[11200,['#7aaadc','#eedfb4','#fcdc98']],[12600,['#7aa4d4','#f2cc98','#fcb870']],[14400,['#6e92c8','#f4b488','#ff9a5c']],[15400,['#6a7ec0','#f49a80','#ff8a58']],[16200,['#4a52a0','#e8707a','#ff9a64']],[16900,['#1c2a78','#5a4a94','#e87a78']],[17600,['#10206a','#2a3a88','#6a5a96']],[18400,['#0a1038','#1c2862','#6a4a6a']],[99999,['#0a1038','#1c2862','#6a4a6a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
/* ---- palazzi di strada ---- */
const PM={1:['#c8bca4','#bfb298','#d0c4aa','#b8ac92'],2:['#cfc6b0','#c4baa2','#d6cdb8','#bcb29a'],3:['#c8c0ac','#bdb5a0','#d0c8b4','#b8b09c'],6:['#e0d8c2','#d4cab0','#e6dec8','#cbc0a4'],7:['#e2d6bc','#d8c8a8','#e6d8c0','#d0c0a2'],8:['#e2d8c0','#d6c8a8','#e8dcc4','#ccbea0']};
const GL={1:'#46586a',2:'#3a4858',3:'#3c4a5c',6:'#44505e',7:'#4a5260',8:'#b0786a'};
const AWN={6:['#2a4a3a','#8a3a2a','#2a2a30','#3a4a6a'],7:['#2a4a3a','#a8202a','#2a2a3e','#8a3a2a'],8:['#a8202a','#2a2a3e','#1f3a2c','#a8202a'],2:['#1f3a2c','#2a2a30','#5a1f2a','#1f2a4a'],1:['#2a4a3a','#8a3a2a','#2a2a30','#3a4a6a'],3:['#2a4a3a','#8a3a2a','#2a2a30','#3a4a6a']};
function pal(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK(),top=gt-h;
 if(st==4){/* Lower East Side / Chinatown: mattoni con scale antincendio e insegne */
  const c=['#9a4a32','#8e3e2a','#a85a3a','#7a3a2c'][md(i,4)];bk(g,c,x,top,w,h,i+3);rect(g,'rgba(255,255,255,.07)',x,top,5,h);rect(g,'rgba(0,0,0,.16)',x+w-12,top,12,h);rect(g,'#cfc4a8',x-3,top-6,w+6,7);for(let q=0;q<w/9;q++)rect(g,'#b8ac90',x-3+q*9,top-2,5,5);
  if(hr(i*3)>.55)wtank(g,x+w*.7,top-6,1);
  const rows=Math.max(2,Math.floor((h-70)/42)),n=Math.max(2,Math.floor(w/44));
  for(let r=0;r<rows;r++)for(let q=0;q<n;q++){const wx2=x+12+q*((w-24-22)/Math.max(1,n-1)),wy=top+14+r*42;rect(g,'#e8dcc0',wx2-2,wy-2,26,34);const L=dl(k,i*9+r*3+q);rect(g,L?LIT:'#2e3a48',wx2,wy,22,30);if(!L)rect(g,'rgba(255,255,255,.14)',wx2+2,wy+2,6,26)}
  fire(g,x+6,top+16,w-12,h-80);
  const chin=wx>8450;rect(g,'#2e2a2c',x,gt-62,w,62);rect(g,k>.2?'rgb(255,208,130)':'#9aa8b0',x+8,gt-48,w-16,34);for(let q=1;q<Math.floor((w-16)/46);q++)rect(g,'#2e2a2c',x+8+q*46,gt-48,3,34);
  tendina(g,chin?['#c8302a','#e8b830'][md(i,2)]:['#2a7a4a','#c8302a','#f4efe0'][md(i,3)],x+4,gt-62,w-8,13);
  rect(g,chin?'#c8302a':'#f4efe0',x+w*.5-26,gt-80,52,14);txt(g,chin?['茶樓','飯店','魚市','福'][md(i,4)]:['PIZZA','DELI','CAFFÈ','BAR'][md(i,4)],x+w*.5,gt-69,10,chin?'#f6e08a':'#c8302a');
  if(chin)for(let q=0;q<3;q++){const lx=x+20+q*(w-40)/2;ln(g,'#2a2a2e',1,[lx,top+2,lx,top+16]);el(g,'#d8302a',lx,top+26,6,8);if(k>.2)glow(g,lx,top+26,16,'255,70,40',.4*k)}
  if(k>.2)glow(g,x+w/2,gt-34,w*.5,'255,200,110',.2);return}
 if(st==5){/* Greenwich Village: case a schiera di brownstone con scalinata */
  const c=['#7a5440','#8a6048','#6e4a3a','#94704e'][md(i,4)];rect(g,c,x,top,w,h);rect(g,'rgba(255,255,255,.1)',x,top,5,h);rect(g,'rgba(0,0,0,.16)',x+w-12,top,12,h);
  for(let q=0;q<h/10;q++)rect(g,'rgba(30,14,6,.1)',x,top+q*10,w,1);rect(g,'#b8a07c',x-4,top-7,w+8,8);rect(g,'#9a8460',x-4,top-12,w+8,5);for(let q=0;q<w/12;q++)rect(g,'#9a8460',x-2+q*12,top-4,6,5);
  const rows=Math.max(2,Math.floor((h-66)/42)),n=Math.max(2,Math.floor(w/48));
  for(let r=0;r<rows;r++)for(let q=0;q<n;q++){const wx2=x+12+q*((w-24-22)/Math.max(1,n-1)),wy=top+14+r*42,L=dl(k,i*9+r*3+q);rect(g,'#c8b490',wx2-3,wy-5,28,6);rect(g,'#c8b490',wx2-2,wy-2,26,36);rect(g,L?LIT:'#2e3a48',wx2+1,wy+1,20,30);if(!L)rect(g,'rgba(255,255,255,.14)',wx2+3,wy+3,6,26);rect(g,'rgba(0,0,0,.2)',wx2+1,wy+16,20,1.2);if(r==rows-1&&hr(i+q)>.4)rect(g,'#2a2a2e',wx2-3,wy+32,28,2.2)}
  rect(g,'#3a2a22',x,gt-64,w,64);const dx=x+w*.5-17;for(let q=0;q<7;q++)rect(g,q%2?'#b8a88a':'#cfc0a0',dx-14+q*0-(q*2),gt-q*6-6,48+q*4,6);ar(g,'#2a1a14',dx,gt-40,34,58);ar(g,k>.2?LIT:'#5a4030',dx+4,gt-40,26,50);
  rect(g,'#1e1e22',dx-18,gt-46,2,46);ln(g,'#1e1e22',1.4,[dx-18,gt-46,dx-30,gt-8]);for(let q=0;q<4;q++)rect(g,'#1e1e22',dx-18-q*3,gt-44+q*9,1.2,10);return}
 if(st==13){/* magazzini di mattoni di Brooklyn */
  const c=['#8e4a34','#7a3e2c','#9a5238'][md(i,3)];bk(g,c,x,top,w,h,i+8);rect(g,'rgba(0,0,0,.16)',x+w-12,top,12,h);rect(g,'#6a5a4a',x-3,top-5,w+6,6);
  const rows=Math.max(1,Math.floor((h-20)/36)),n=Math.max(2,Math.floor(w/30));for(let r=0;r<rows;r++)for(let q=0;q<n;q++){const wx2=x+8+q*((w-16-16)/Math.max(1,n-1)),wy=top+12+r*36,L=dl(k,i*9+r*3+q);ar(g,L?LIT:'#2e3a48',wx2,wy+26,16,26);rect(g,'#d8cdb4',wx2-1,wy+26,18,2)}
  if(hr(i*3)>.4)wtank(g,x+w*.3,top-5,1.1);rect(g,'#2a2420',x+w*.5-14,gt-40,28,40);return}
 if(st==9){/* Times Square: grattacieli coperti di schermi */
  rect(g,['#4a4452','#3e3a4a','#524a58'][md(i,3)],x,top,w,h);rect(g,'rgba(255,255,255,.08)',x,top,5,h);const nb=Math.min(1,k*1.5+.2);
  const sc=Math.floor(h/58);for(let r=0;r<sc;r++){const sy=top+10+r*58,hu=(TT*28+i*53+r*70)%360,L=Math.max(.3,nb);const gr=g.createLinearGradient(x+6,sy,x+w-6,sy+48);gr.addColorStop(0,'hsl('+hu+',90%,'+(30+28*L)+'%)');gr.addColorStop(1,'hsl('+(hu+80)%360+',90%,'+(30+28*L)+'%)');rect(g,'#14121c',x+4,sy-2,w-8,52);g.fillStyle=gr;g.fillRect(x+6,sy,w-12,48);
   for(let q=0;q<4;q++)rect(g,'rgba(255,255,255,'+(.2+.25*Math.abs(Math.sin(TT*2+q+r+i)))+')',x+6+((TT*40+q*30+r*11)%(w-12)),sy+q*12,12,9);glow(g,x+w/2,sy+24,w*.8,'255,'+(90+r*30)+',200',.14*nb)}
  rect(g,'#1a1620',x,gt-60,w,60);rect(g,k>.2?'rgb(255,214,140)':'#9aa8b0',x+8,gt-46,w-16,30);tendina(g,['#a8202a','#2a2a3e','#a8202a'][md(i,3)],x+4,gt-60,w-8,12);return}
 /* torri di pietra e vetro (Financial District, Midtown): setback, cornicioni, vetrine */
 const c=PM[st][md(i,4)];rect(g,c,x,top,w,h);rect(g,'rgba(255,255,255,.14)',x,top,5,h);rect(g,'rgba(40,40,60,.13)',x+w-12,top,12,h);if(st==2||st==3)rect(g,'rgba(30,30,54,.16)',x,top,w,h);
 const cr=Math.floor(hr(i*3+1)*4);
 if(cr==1&&h>180){rect(g,c,x+w*.14,top-30,w*.72,30);rect(g,'rgba(0,0,0,.12)',x+w*.64,top-30,w*.22,30);rect(g,c,x+w*.3,top-54,w*.4,24);rect(g,'#b8ac90',x+w*.28,top-56,w*.44,4);rect(g,'#b8ac90',x+w*.12,top-32,w*.76,4);grid(g,k,x+w*.18,top-26,w*.64,20,3,1,i+5,GL[st])}
 else if(cr==2){poly(g,'#5a8a78',[[x+3,top],[x+w/2,top-46],[x+w-3,top]]);poly(g,'rgba(0,0,0,.18)',[[x+w/2,top],[x+w/2,top-46],[x+w-3,top]]);ln(g,'#2a2a2e',1.4,[x+w/2,top-46,x+w/2,top-62])}
 else if(cr==3&&h<300)wtank(g,x+w*.3,top-1,1);
 rect(g,'#b8ac90',x-3,top-5,w+6,6);
 const shopH=70,rows=Math.max(1,Math.floor((h-shopH-16)/24)),nc=Math.max(2,Math.floor(w/22));
 grid(g,k,x+8,top+12,w-16,rows*24,nc,rows,i,GL[st]);for(let q=0;q<=nc;q++)rect(g,'rgba(255,255,255,.1)',x+8+q*(w-16)/nc-.8,top+10,1.6,rows*24+2);
 rect(g,'#8a7c68',x,gt-12,w,12);rect(g,'#2e2a2c',x,gt-shopH,w,shopH-12);const L=k>.2||st==8;rect(g,L?'rgb(255,214,140)':'#9aa8b0',x+8,gt-shopH+14,w-16,shopH-32);for(let q=1;q<Math.floor((w-16)/46);q++)rect(g,'#2e2a2c',x+8+q*46,gt-shopH+14,3,shopH-32);
 tendina(g,AWN[st][md(i,4)],x+4,gt-shopH+2,w-8,13);if(L)glow(g,x+w/2,gt-34,w*.5,'255,200,110',.2)}
/* ---- livello 0: cielo, sole, luna, nuvole mobili, foschia dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-17000)/1600,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/16400,0,1),sx=40+u*400,sy=312-Math.sin(u*Math.PI)*240;
 if(xs<16700){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*70)+','+Math.round(190-low*100)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*60)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*80)+','+Math.round(215-low*120)+')',sx,sy,15)}
 const mu=cl((xs-16600)/3400,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*210;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<2400?'rgba(250,236,232,.78)':xs<12000?'rgba(252,252,250,.82)':xs<15000?'rgba(255,230,196,.74)':xs<16900?'rgba(255,150,130,.68)':'rgba(130,120,180,.4)';
 each(o-((t*6)%340)*.02,340,1,(x,i,r)=>nube(g,x+r*100,40+r*46,.9+r*.5,cc));
 const fo=cl(1-xs/2200,0,1)*.4;if(fo>.01){g.fillStyle='rgba(250,214,196,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-11800)/1000,0,1)*cl((15400-xs)/900,0,1)*.14;if(wm>.01){g.fillStyle='rgba(255,208,140,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-15000)/800,0,1)*cl((17000-xs)/800,0,1)*.2;if(wg>.01){g.fillStyle='rgba(255,120,110,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: la Statua della Libertà lontana nel porto, la sagoma di Midtown con l'Empire State e il Chrysler, le luci della città ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 g.fillStyle=dim('#a9b8cc');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20,ph=hz-12-9*Math.abs(Math.sin((px+o)*.021))-6*Math.sin((px+o)*.05+1)-4*Math.sin((px+o)*.12);g.lineTo(px,ph)}g.lineTo(480,hz+30);g.closePath();g.fill();
 g.fillStyle=dim('#8ea0b6');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20,ph=hz-2-6*Math.sin((px+o)*.03+2)-4*Math.sin((px+o)*.09);g.lineTo(px,ph)}g.lineTo(480,hz+30);g.closePath();g.fill();
 /* Statua della Libertà lontana, a sinistra e al mattino */
 const ve=cl((1500-xs)/700,0,1)*cl((xs+400)/300,0,1),ex=380-o;
 if(ve>.02&&ex>-60&&ex<560){g.globalAlpha=.7*ve;const c=dim('#7a9a98'),yb=hz+6;poly(g,'#8a8a98',[[ex-12,yb],[ex+12,yb],[ex+9,yb-22],[ex-9,yb-22]]);poly(g,c,[[ex-6,yb-22],[ex+6,yb-22],[ex+8,yb-42],[ex+4,yb-52],[ex-4,yb-52],[ex-8,yb-40]]);ln(g,c,2.4,[ex-3,yb-50,ex-10,yb-72]);dot(g,'#ffc84a',ex-10.4,yb-75,2);dot(g,c,ex,yb-55,3.6);g.globalAlpha=1}
 /* Midtown con Empire State e Chrysler: a destra, dal pomeriggio alla notte */
 const vs=cl((xs-8800)/2400,0,1)*cl((19500-xs)/1500,0,1),sx=420-(o-9000*.05)*1.0;
 if(vs>.02&&sx>-200&&sx<680){g.globalAlpha=.92*vs;const c=dim('#9aa8bc'),lg=night>.3?LIT:dim('#5a6678');
  [[-110,58,60],[-80,40,92],[-40,46,76],[50,44,88],[90,40,64],[130,50,52]].forEach(b=>rect(g,c,sx+b[0]-b[1]/2,hz+8-b[2],b[1],b[2]+22));
  rect(g,c,sx-70,hz-14,50,36);rect(g,c,sx-60,hz-34,30,22);rect(g,c,sx-52,hz-54,14,22);ln(g,c,1.8,[sx-45,hz-54,sx-45,hz-90]);if(night>.3)rect(g,'rgba(255,170,110,.8)',sx-56,hz-50,22,10);
  rect(g,c,sx+8,hz-8,28,30);rect(g,c,sx+12,hz-56,20,48);g.fillStyle=c;g.beginPath();g.ellipse(sx+22,hz-56,13,22,0,Math.PI,0);g.fill();ln(g,c,1.6,[sx+22,hz-78,sx+22,hz-100]);if(night>.3)for(let q=0;q<3;q++)rect(g,'rgba(230,236,255,.85)',sx+14,hz-52+q*6,16,1.6);
  if(night>.35)for(let q=0;q<26;q++)rect(g,lg,sx-130+hr(q)*270,hz-30+hr(q*3)*50,1.6,2);g.globalAlpha=1}
 if(night>.35)for(let q=0;q<46;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.3)+')',q*11+hr(q)*8,hz+20+hr(q*3)*8,1.2)}
/* ---- livello 2: sagome di grattacieli a gradoni con serbatoi d'acqua, le chiome degli alberi di Central Park, le luci ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120);if(zz==1&&cam+x<1900)return;if(zz==3&&cam+x>5900&&cam+x<6800)return;const park=zz==10;
  const h=park?(26+r*40):(40+r*120)*(zz==4||zz==5?.55:1),w=108;
  if(park){const c=dim('#3a3a30');for(let q=0;q<3;q++)el(g,dim(['#5a4a2a','#4a4430','#6a4a26'][q]),x+14+q*34,hz-h-8+(q%2)*10,34,18+r*10);if(night>.3&&hr(i)>.4)rect(g,LIT,x+30,hz-h-70+hr(i*3)*20,3,4);if(hr(i*3)>.6){rect(g,dim('#4a4a58'),x+36,hz-h-70,34,70);rect(g,dim('#4a4a58'),x+44,hz-h-92,18,24);for(let q=0;q<3;q++)rect(g,night>.35?LIT:dim('#2a2a3a'),x+42+q*10,hz-h-60,4,6)}return}
  const c=dim(['#cfc8b6','#c4bca8','#d6cebc'][md(i,3)]);rect(g,c,x,hz-h,w,h+10);rect(g,'rgba(0,0,0,.1)',x+w-18,hz-h,18,h+10);
  if(hr(i*3)>.4){rect(g,c,x+w*.18,hz-h-26,w*.64,26);rect(g,c,x+w*.34,hz-h-46,w*.32,20)}else if(hr(i*3)>.2)wtank(g,x+w*.3,hz-h,.9);
  for(let k2=0;k2<4;k2++)for(let q=0;q<3;q++)rect(g,night>.35&&hr(i+k2*3+q)>.4?LIT:dim('#4a4a5a'),x+12+q*30,hz-h+10+k2*24,12,12)});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
/* ---- acqua del porto e dell'East River ---- */
function bay(g,o,a,b,y0,t,c1,c2,boats){const x0=Math.max(0,a-o),x1=Math.min(480,b-o);if(x1<=x0)return;const k=nf(o+240);
 g.save();g.beginPath();g.rect(x0,y0,x1-x0,GT-y0);g.clip();const wg=g.createLinearGradient(0,y0,0,GT);wg.addColorStop(0,mixs(c1,'#101a3a',k*.7));wg.addColorStop(1,mixs(c2,'#101a3a',k*.7));g.fillStyle=wg;g.fillRect(x0,y0,x1-x0,GT-y0);
 for(let q=0;q<46;q++){const rx=((q*47+t*8+o*0)%520)-20,ry=y0+4+((q*11)%(GT-y0-8));rect(g,'rgba(255,255,255,'+(.22*(1-k))+')',rx,ry,8+(q%3)*6,1.2)}
 const dw=cl(1-(o+240)/2400,0,1);if(dw>.01)for(let q=0;q<10;q++)rect(g,'rgba(255,214,150,'+(.34*dw)+')',20+q*18+Math.sin(t*2+q)*3,y0+4+(q%5)*10,14-q,1.6);
 if(k>.3)for(let q=0;q<14;q++)rect(g,'rgba(255,200,120,'+(.3*k)+')',((q*53+o*.9)%480),y0+6+(q%4)*12,2,8);
 if(boats)for(let i=0;i<2;i++){const px=((t*(10+i*5)+i*260+o*.02)%640)-80;A.setDK(k);battello(g,px,GT-12-i*4,k,.42-i*.06)}
 g.restore();rect(g,'#7a766a',x0,GT-3,x1-x0,6)}
/* ---- livello 3: la strada, zona per zona ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd,skip)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;if(skip&&skip(wx))return;A.setDK(nf(wx));pal(g,x,wd,hf(i),i,st,wx)})};
 bay(g,o,-100,2400,316,t,'#8fb0c8','#5a8098',0);
 each2(190,7,2060,2400,1,i=>110+hr(i*5)*50,150);
 each2(150,8,2400,5400,2,i=>230+hr(i*5)*110,140);
 each2(180,9,5400,5760,3,i=>200+hr(i*5)*110,150);
 bay(g,o,5750,6650,316,t,'#9cc0d8','#6a94ac',1);
 each2(170,10,6640,7000,13,i=>110+hr(i*5)*50,150);
 each2(176,11,7000,9400,4,i=>200+hr(i*5)*60,166);
 each2(170,12,9400,11200,5,i=>150+hr(i*5)*40,160);
 each2(170,13,11200,12600,6,i=>240+hr(i*5)*100,150);
 each2(170,14,12600,15000,7,i=>220+hr(i*5)*110,150);
 each2(170,15,15000,16800,8,i=>230+hr(i*5)*110,150);
 each2(180,16,16800,18200,9,i=>240+hr(i*5)*90,170);
 /* Z10: olmi e querce ai bordi del parco, con le luci della città tra i rami */
 if(o+480>18200){each(o,120,17,(x,i,r)=>{const wx=i*120;if(wx<18200||wx>W1+300)return;A.setDK(nf(wx));const k=A.getDK();
   ln(g,'#4a3c2c',9+r*4,[x,gt,x,gt-90-r*60]);for(let q=0;q<3;q++)el(g,['#6a4a22','#8a6024','#5a4426'][q],x-24+q*26,gt-120-r*60-(q%2)*14,34,22);
   if(k>.4&&hr(i*3)>.5)rect(g,LIT,x+10,gt-70,3,4)})}}
/* ---- vita: gabbiani sul porto, piccioni sulle piazze, rondoni al tramonto, taxi gialli e auto ---- */
const car=(g,x,y,s,c,d,k,tx)=>{g.save();g.translate(x,y);g.scale(s*d,s);poly(g,c,[[-34,-6],[34,-6],[32,-17],[18,-28],[-16,-28],[-30,-17]]);rect(g,'rgba(190,215,232,.75)',-14,-26,32,9);dot(g,'#151518',-20,-5,6);dot(g,'#151518',20,-5,6);if(tx){rect(g,k>.2?'rgb(255,250,230)':'#e8e8e0',-6,-34,14,6)}if(k>.3){rect(g,'rgb(255,236,170)',32,-14,4,5);glow(g,40,-12,40,'255,230,150',.5);rect(g,'rgb(255,60,60)',-36,-14,3,5)}g.restore()};
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 [4400,5100,10200,10800,11500,13100,14000,15600,16100].forEach((cx,gi)=>{for(let i=0;i<5;i++){const wx=cx+i*38+hr(i+gi)*26,px=wx-cam;if(px<-20||px>500)continue;const fly=(Math.sin(t*.3+i*2.1+gi)>.93);const by=GT+36+hr(i*3+gi)*60-(fly?30+Math.sin(t*9+i)*8:0),bx=px+Math.sin(t*.5+i)*10;
  el(g,'#8a8e9a',bx,by-5,6,3.6);dot(g,'#6a7a8a',bx+5,by-8,2.8);rect(g,'#d8a0a8',bx+7.4,by-8,2,1);if(fly){ln(g,'#9aa0aa',1.6,[bx-2,by-6,bx-8,by-12-Math.sin(t*9+i)*4]);ln(g,'#9aa0aa',1.6,[bx+1,by-6,bx+7,by-12-Math.sin(t*9+i)*4])}else{rect(g,'#6a6e78',bx-2,by-2,1,3);rect(g,'#6a6e78',bx+1,by-2,1,3)}}});
 const ga=cl((xs+200)/500,0,1)*cl((2900-xs)/600,0,1)+cl((xs-5300)/400,0,1)*cl((7200-xs)/500,0,1);
 if(ga>.05)for(let i=0;i<6;i++){const bx=((i*131+t*(36+i*7))%640)-80,by=50+hr(i)*110+Math.sin(t*1.4+i*2)*18,w=Math.sin(t*6+i)*4;g.strokeStyle='rgba(250,250,250,'+(.95*Math.min(1,ga))+')';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-11,by+w);g.quadraticCurveTo(bx-5,by-5,bx,by);g.quadraticCurveTo(bx+5,by-5,bx+11,by+w);g.stroke()}
 const sa=cl((xs-15000)/700,0,1)*cl((17600-xs)/900,0,1);
 if(sa>.05)for(let i=0;i<9;i++){const bx=((i*97+t*(60+i*6))%620)-70,by=70+hr(i)*120+Math.sin(t*2.4+i*2)*26,w=Math.sin(t*14+i)*3;g.strokeStyle='rgba(30,26,44,'+(.8*sa)+')';g.lineWidth=2;g.beginPath();g.moveTo(bx-8,by-w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke()}
 [[2600,5300,6,7],[7100,9300,6,8],[11300,12500,5,9],[12700,14900,6,10],[16900,18150,5,9]].forEach((rg,ri)=>{const span=rg[1]-rg[0];for(let i=0;i<rg[3];i++){const d=i%2?1:-1,sp=(40+i*8)*d,wx=rg[0]+(((t*sp+i*span/rg[3]*1.37)%span)+span)%span,px=wx-cam;if(px<-60||px>540)continue;A.setDK(nf(wx));const tax=(i+ri)%3!=2;car(g,px,GT+24+(i%2)*10,.62,tax?'#f2c82a':['#2a4a7a','#c8c8d0','#2a2a30','#8a2a2a'][(i+ri)%4],d,A.getDK(),tax)}})}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[0,2400,'#aaa595','t'],[2400,5400,'#8f8c86','c'],[5400,7000,'#a59580','w'],[7000,9400,'#9c978d','c'],[9400,11200,'#b5a590','t'],[11200,12600,'#a8a69e','c'],[12600,15000,'#9d9890','c'],[15000,16800,'#c0b9aa','t'],[16800,18200,'#7d7a78','c'],[18200,W1+400,'#6f6a58','d']];
 rect(g,'#d8d0bc',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();
  rect(g,z[2],x0,gt+3,x1-x0,150);
  if(z[3]=='t'||z[3]=='c'){const y0=z[3]=='c'?40:0;if(z[3]=='c'){rect(g,'#4a4c54',x0,gt+3,x1-x0,y0);rect(g,'#e8e8e0',x0,gt+3+y0-3,x1-x0,3);for(let q=0;q<14;q++)rect(g,'rgba(255,214,90,.8)',Math.floor((cam+x0)/70)*70+q*70-cam,gt+3+y0*.5,32,3);[3100,3900,4700,7500,8500,9200,11700,12300,13300,14300,17300,17900].forEach(zx=>{const sx=zx-cam;if(sx>-60&&sx<540)for(let q=0;q<7;q++)rect(g,'rgba(255,255,255,.75)',sx+q*7,gt+3,4,y0-3)})}
   for(let r=0;r<7;r++){const yy=gt+9+y0+r*19*(z[3]=='c'?.82:1),off=(r%2)*30,bw=(z[3]=='c'?56:70)+r*12,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil((x1-x0)/bw)+2;k++){const px=s0+k*bw-cam+off;rect(g,((k+r)&1)?'rgba(255,255,255,.1)':'rgba(0,0,0,.07)',px,yy,bw-3,15);rect(g,'rgba(0,0,0,.18)',px,yy,1.4,17)}rect(g,'rgba(0,0,0,.1)',x0,yy+15,x1-x0,1.6)}}
  if(z[3]=='w'){for(let r=0;r<7;r++){const yy=gt+3+r*21,bw=90+r*14,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil((x1-x0)/bw)+2;k++){const px=s0+k*bw-cam,h2=hr(k*13+r*5);rect(g,h2>.6?'rgba(255,230,180,.12)':h2>.3?'rgba(60,40,20,.12)':'rgba(0,0,0,.03)',px+1,yy+1,bw-2,19);rect(g,'rgba(40,24,10,.3)',px,yy,1.4,21)}rect(g,'rgba(40,24,10,.3)',x0,yy,x1-x0,1.4)}}
  if(z[3]=='d'){rect(g,'#4a5a34',x0,gt+3,x1-x0,16);for(let q=0;q<60;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.1)':'rgba(30,20,10,.2)',x0+((q*47)%Math.max(1,x1-x0)),gt+22+hr(q+3)*120,3+hr(q)*5,2);
   for(let q=0;q<24;q++){const lx=Math.floor((cam+x0)/40)*40+q*40+hr(q)*30-cam,ly=gt+30+hr(q*3)*110;rect(g,['#c8802a','#b8602a','#d8a040'][q%3],lx,ly,4,2.4)}
   const px0=gt+60;g.fillStyle='rgba(150,130,100,.28)';g.fillRect(x0,px0,x1-x0,60)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 /* luce dorata del pomeriggio, rosso e arancio del tramonto, neon sull'asfalto della sera */
 const gd=cl((cam-11200)/700,0,1)*cl((15000-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.1*gd)+')',0,gt,480,150);
 const sg=cl((cam-14800)/700,0,1)*cl((16800-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,120,60,'+(.14*sg)+')',0,gt,480,150);
 const ng=cl((cam-16600)/500,0,1)*cl((18200-cam)/500,0,1);if(ng>.02){const gg=g.createLinearGradient(0,gt+40,0,gt+150);gg.addColorStop(0,'rgba(255,60,140,'+(.22*ng)+')');gg.addColorStop(1,'rgba(255,60,140,0)');g.fillStyle=gg;g.fillRect(0,gt+40,480,110)}}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- testi della scheda (nomi, prime battute, tappe) ---- */
const LX=[520,1120,1700,2150,2900,3500,4050,4450,5120,6000,6600,7500,8100,8700,9250,9800,10350,10900,11650,12250,13050,13700,14200,14720,15350,16000,16550,17250,17900,18600,19100,19650,20150,W1-370];
const LKTXT=[
`Battery Park: la punta sud di Manhattan. Il forte rotondo di Castle Clinton, costruito fra il 1808 e il 1811, fu il primo centro d’arrivo degli immigrati: dal 1855 al 1890 ne vide passare otto milioni.`,
`Il traghetto di Staten Island: gratuito dal 1997, venticinque minuti di viaggio con la skyline di Manhattan alle spalle.`,
`La Statua della Libertà: dono della Francia, inaugurata il 28 ottobre 1886. È alta 46 metri, 93 con il piedistallo, e ha uno scheletro di ferro progettato da Gustave Eiffel.`,
`Ellis Island: dal 1892 al 1954 vi passarono oltre dodici milioni di immigrati. La prima fu Annie Moore, quindici anni, irlandese.`,
`Il Charging Bull: tre tonnellate e mezzo di bronzo, opera dello scultore siciliano Arturo Di Modica. Lo portò di nascosto davanti alla Borsa nel dicembre 1989, dopo il crollo del 1987.`,
`Wall Street prende il nome dal muro che gli olandesi costruirono nel 1653. La Borsa di New York nacque nel 1792, quando ventiquattro mediatori firmarono un accordo.`,
`Federal Hall: qui, il 30 aprile 1789, George Washington giurò come primo presidente degli Stati Uniti.`,
`Trinity Church: guglia gotica del 1846 in fondo a Wall Street. Nel suo cimitero riposa Alexander Hamilton.`,
`Il Memoriale dell’11 settembre: due grandi vasche d’acqua dove sorgevano le Torri Gemelle, con i nomi di tutte le vittime incisi nel bronzo. Accanto, l’One World Trade Center, alto 1776 piedi, 541 metri.`,
`Il Brooklyn Bridge: inaugurato il 24 maggio 1883, con 486 metri di campata era il ponte sospeso più lungo del mondo. Lo progettò John Roebling, lo finirono suo figlio Washington e la moglie di lui, Emily.`,
`La passerella pedonale: pensata dai Roebling solo per camminare. Nelle prime ventiquattro ore la percorsero più di centocinquantamila persone.`,
`Little Italy: oggi ridotta a poche strade attorno a Mulberry Street, ma ogni settembre, dal 1926, si riempie per la Festa di San Gennaro, il patrono di Napoli.`,
`Lombardi’s, in Spring Street: da oltre un secolo la considerano la prima pizzeria d’America, aperta nel 1905. Tra gli storici, però, c’è chi discute su chi l’abbia fondata.`,
`Chinatown: lanterne rosse, mercati di pesce e verdura, dim sum e negozi di erbe. Lungo Canal Street il quartiere si è esteso fino a toccare Little Italy.`,
`Katz’s: la tavola calda del Lower East Side, aperta dal 1888. Il suo panino di pastrami è leggendario, e lo slogan della guerra vive ancora: "Send a salami to your boy in the army".`,
`L’Arco di Washington Square: un arco trionfale di marmo alto 23 metri, costruito nel 1892 per ricordare l’insediamento di George Washington, sul modello dell’Arc de Triomphe di Parigi.`,
`Washington Square Park: la piazza del Village. Fontana, musicisti, scacchisti e scoiattoli ovunque. Per decenni la Fifth Avenue passò sotto l’arco, finché il parco fu chiuso alle auto.`,
`Il Village Vanguard: aperto nel 1935, è il locale jazz più antico di New York. Si scende in una cantina e si ascolta la musica da vicino.`,
`Il Flatiron Building: nel 1902 fu uno dei primi grattacieli d’acciaio di New York. La forma triangolare, da ferro da stiro, lo rese celebre, e molti temevano che il vento lo abbattesse.`,
`L’Empire State Building: 102 piani e 443 metri con l’antenna. Costruito in soli 410 giorni, fu inaugurato il 1° maggio 1931 e per quasi quarant’anni fu il più alto del mondo.`,
`Grand Central Terminal: la stazione aperta nel 1913, con la facciata Beaux-Arts e il grande orologio. Dentro, milioni di persone si danno appuntamento sotto l’orologio a quattro facce.`,
`Il soffitto di Grand Central è un cielo turchese con oltre duemilacinquecento stelle: si dice che le costellazioni siano disegnate al contrario. Sotto l’Oyster Bar c’è la Whispering Gallery: se sussurri in un angolo, ti sente chi sta in quello opposto.`,
`Il Chrysler Building: nel 1930 diventò il grattacielo più alto del mondo, 319 metri. La sua guglia d’acciaio fu montata di nascosto e, dopo circa undici mesi, lo superò l’Empire State.`,
`La Biblioteca Pubblica di New York: all’ingresso su Fifth Avenue la sorvegliano due leoni di marmo, Patience e Fortitude, Pazienza e Fortezza.`,
`La Cattedrale di San Patrizio: guglie neogotiche bianche in mezzo ai grattacieli, inaugurata nel 1879.`,
`Rockefeller Center: una piccola città Art Déco costruita negli anni Trenta. In basso c’è la pista di pattinaggio con la statua dorata di Prometeo; a dicembre arriva l’albero di Natale.`,
`Top of the Rock: la terrazza panoramica al settantesimo piano di 30 Rockefeller Plaza, da cui si vedono l’Empire State, Central Park e tutta la città.`,
`Times Square: si chiamava Longacre Square finché nel 1904 il New York Times vi trasferì la sede. Da allora è l’incrocio più illuminato del mondo, e ogni 31 dicembre, dal 1907, vi scende la palla di Capodanno.`,
`Broadway, la Great White Way: la via dei teatri. Nella stagione 1927-28, attorno a Times Square, debuttarono quasi trecento spettacoli in una sessantina di sale.`,
`Il Mall: la lunga passeggiata di olmi americani che formano una volta, come le navate di una cattedrale. È l’unico viale rettilineo del progetto di Olmsted e Vaux.`,
`Bethesda Terrace: scalinate, archi decorati con piastrelle e, al centro, la fontana con l’Angelo delle Acque. La scolpì Emma Stebbins nel 1873: fu la prima grande commissione pubblica per una scultrice americana.`,
`Bow Bridge: il ponte di ferro ad arco sul lago. Gli architetti lo vollero di ghisa, con decorazioni di fiori.`,
`Strawberry Fields: il giardino della pace dedicato a John Lennon, con il mosaico "Imagine" al centro.`,
`In fondo al Mall, sotto gli olmi, una luce che non è di nessun lampione ti chiama.`
];
const INTRO=`New York, dall’alba alla notte: dal porto dove arrivavano gli immigrati ai neon di Times Square, passando per ponti, grattacieli, mercati, jazz e parchi. Una città fatta da chi arrivava da lontano, e che non smette mai di muoversi.`;
const NAME={
ny_emma:`Emma Lazarus`,
ny_hamilton:`Alexander Hamilton`,
ny_emily:`Emily Roebling`,
ny_sal:`Sal, il pizzaiolo`,
ny_jane:`Jane Jacobs`,
ny_dolores:`Dolores, la tassista`,
ny_gershwin:`George Gershwin`,
ny_olmsted:`Frederick Law Olmsted`
};
const GREET={
ny_emma:`Buongiorno, Pierpaolo. Guarda quanta luce sul porto: da questo punto è cominciata una nuova vita per tantissima gente.`,
ny_hamilton:`Siediti, Pierpaolo: ho sei cose da dire e poco tempo. Qui sotto riposo, ma fuori c’è tutta la mia Wall Street.`,
ny_emily:`Benvenuto sul ponte, Pierpaolo. Cammina piano: ci abbiamo messo quattordici anni, ed è giusto che tu lo goda.`,
ny_sal:`Hey, Pierpaolo! Vieni, siediti: un pezzo di pizza non si nega a nessuno. In America si dice "slice"; da noi si dice amore.`,
ny_jane:`Siediti sulla panchina, Pierpaolo, e guarda: una buona strada è come un balletto, ma nessuno l’ha mai provato prima.`,
ny_dolores:`Hey, buddy! Taxi? No? Allora ascolta: a New York o cammini veloce, o ti fai portare. Io ti porto.`,
ny_gershwin:`Ciao, Pierpaolo! Senti questo ritmo? È la città che suona. Io non faccio altro che scriverlo.`,
ny_olmsted:`Buonasera, Pierpaolo. Questo bosco l’ho disegnato in mezzo alla città: nessuna di queste curve è casuale.`
};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)})),d:{a:{t:d}}});
const npcs=[
 /* Emma Lazarus: abito lungo grigio-blu, scialle, capelli scuri raccolti, taccuino e penna */
 NP('ny_emma',NAME.ny_emma,1400,GREET.ny_emma,{skin:'#ecc8a8',top:'#5a6a88',bot:'#5a6a88',hair:'#2a1a14',long:true,s:1.0},(g,b,t)=>{dot(g,'#2a1a14',-5,-116+b,6.4);poly(g,'#2a1a14',[[-12,-104+b],[12,-104+b],[10,-112+b],[-10,-112+b]]);
  poly(g,'#7a8aa8',[[-14,-90+b],[14,-90+b],[9,-68+b],[-9,-68+b]]);rect(g,'rgba(0,0,0,.12)',2,-90+b,12,22);rect(g,'#3a2a22',-31,-68,12,17);rect(g,'#f4ecd0',-29,-66,8,13);for(let q=0;q<3;q++)rect(g,'rgba(40,40,60,.5)',-28,-63+q*4,6,1);ln(g,'#c8a040',1.4,[17,-72,27,-84])}),
 /* Alexander Hamilton: abito blu del Settecento, panciotto chiaro, capelli raccolti con un nastro, rotolo di carte */
 NP('ny_hamilton',NAME.ny_hamilton,4690,GREET.ny_hamilton,{skin:'#e0b898',top:'#233a8a',bot:'#e8e0cc',hair:'#5a3a22',s:1.0},(g,b,t)=>{poly(g,'#e8dcc0',[[-6,-90+b],[6,-90+b],[5,-52+b],[-5,-52+b]]);for(let q=0;q<4;q++)dot(g,GOLDN,0,-84+b+q*8,1.3);poly(g,'#f4f0e8',[[-4,-92+b],[4,-92+b],[2,-84+b],[-2,-84+b]]);
  rect(g,'#14110f',-13,-104+b,4,10);rect(g,'#14110f',-14,-96+b,5,4);ln(g,'#c8a040',1.2,[-12,-90+b,-12,-52+b]);rect(g,'#eadfc0',-34,-76,11,36);rect(g,'#c8b88a',-34,-76,11,3);rect(g,'#c8b88a',-34,-44,11,3);rect(g,'rgba(60,80,140,.5)',-32,-72,7,2);rect(g,'rgba(60,80,140,.5)',-32,-62,7,2)}),
 /* Emily Roebling: abito blu scuro con colletto di pizzo, cappellino, cartella di disegni e un gallo bianco */
 NP('ny_emily',NAME.ny_emily,6460,GREET.ny_emily,{skin:'#ecc8a8',top:'#232a4a',bot:'#232a4a',hair:'#4a3020',long:true,s:1.0},(g,b,t)=>{poly(g,'#232a4a',[[-14,-90+b],[14,-90+b],[22,-4],[-22,-4]]);rect(g,'#f4f0e8',-8,-90+b,16,5);for(let q=0;q<4;q++)dot(g,'#f4f0e8',-6+q*4,-85+b,1.2);
  poly(g,'#1a1a2a',[[-11,-110+b],[11,-110+b],[9,-120+b],[-9,-120+b]]);rect(g,'#1a1a2a',-13,-110+b,26,2.4);dot(g,'#c8302a',8,-116+b,2);rect(g,'#c8b88a',-33,-72,11,32);rect(g,'#a89868',-33,-72,11,3);
  el(g,'#f4f0e8',26,-60,9,7);dot(g,'#f4f0e8',33,-68,4);poly(g,'#c8302a',[[31,-72],[34,-77],[36,-72]]);poly(g,'#e8a020',[[36,-68],[41,-66],[36,-65]]);poly(g,'#ece8dc',[[18,-62],[14,-76],[22,-66]])}),
 /* Sal: grembiule bianco infarinato, berretto, baffi grigi, pala da pizza */
 NP('ny_sal',NAME.ny_sal,7980,GREET.ny_sal,{skin:'#dca888',top:'#6a2a2a',bot:'#3a3a3e',hair:'#9a9a9a',s:1.0},(g,b,t)=>{rect(g,'#f4f0e8',-10,-82+b,20,38);rect(g,'rgba(0,0,0,.1)',3,-82+b,7,38);for(let q=0;q<7;q++)dot(g,'rgba(255,255,255,.9)',-8+hr(q)*16,-78+b+hr(q*3)*30,1.2);
  rect(g,'#f4f0e8',-12,-114+b,26,10);poly(g,'#f4f0e8',[[-10,-114+b],[10,-114+b],[6,-122+b],[-6,-122+b]]);rect(g,'#b8b8b8',1,-96+b,11,3);
  ln(g,'#8a6a3a',2.6,[30,-4,34,-96]);el(g,'#9a7a4a',36,-102,10,12);el(g,'#d8a050',36,-104,8,9);dot(g,'#c8402a',34,-104,3)}),
 /* Jane Jacobs: occhiali grandi, capelli corti grigio-castani, cappotto semplice, taccuino e borsa di tela */
 NP('ny_jane',NAME.ny_jane,10250,GREET.ny_jane,{skin:'#ecc8a8',top:'#6a6a72',bot:'#3a3a46',hair:'#8a7a68',s:.98},(g,b,t)=>{g.fillStyle=tn('#8a7a68');g.beginPath();g.arc(1,-103+b,13,Math.PI,0);g.fill();rect(g,'#8a7a68',-12,-104+b,5,12);
  g.strokeStyle=tn('#2a2a2a');g.lineWidth=1.4;g.beginPath();g.arc(7,-100+b,4.4,0,7);g.stroke();g.beginPath();g.arc(-2,-100+b,4.4,0,7);g.stroke();ln(g,'#2a2a2a',1.2,[2.4,-100+b,3,-100+b]);
  rect(g,'#7a7a82',-13,-90+b,26,5);rect(g,'#e8dcc0',-33,-66,15,18);rect(g,'rgba(0,0,0,.14)',-33,-66,15,3);ln(g,'#8a7a5a',1.4,[-30,-66,-26,-80]);ln(g,'#8a7a5a',1.4,[-22,-66,-26,-80]);rect(g,'#3a2a22',20,-66,10,13);rect(g,'#f4ecd0',21,-64,7,9)}),
 /* Dolores: giacca di pelle, berretto da baseball, occhiali da sole sulla testa, bicchiere di caffè */
 NP('ny_dolores',NAME.ny_dolores,13300,GREET.ny_dolores,{skin:'#dca888',top:'#1a1a1e',bot:'#2a3a5a',hair:'#8a6a4a',s:1.0},(g,b,t)=>{rect(g,'#1a1a1e',-13,-90+b,26,46);ln(g,'#6a6a72',1,[0,-90+b,0,-44+b]);rect(g,'rgba(255,255,255,.1)',-13,-90+b,4,46);
  g.fillStyle=tn('#c8302a');g.beginPath();g.arc(1,-103+b,12.8,Math.PI,0);g.fill();poly(g,'#a82028',[[8,-104+b],[24,-102+b],[22,-98+b],[8,-100+b]]);rect(g,'#14110f',-4,-106+b,10,3);dot(g,'#14110f',-1,-105+b,2.4);dot(g,'#14110f',4,-105+b,2.4);
  rect(g,'#f4f0e8',22,-72,7,10);rect(g,'#8a5a2a',22,-72,7,3);steam(g,25,-74,t,16)}),
 /* George Gershwin: abito chiaro, farfallino, capelli neri all'indietro, mani sempre in movimento */
 NP('ny_gershwin',NAME.ny_gershwin,17990,GREET.ny_gershwin,{skin:'#e0b898',top:'#e8e0cc',bot:'#d8cfb6',hair:'#14110f',s:1.0},(g,b,t)=>{g.fillStyle=tn('#14110f');g.beginPath();g.arc(1,-103+b,13,Math.PI*.9,Math.PI*2.05);g.fill();rect(g,'#14110f',-12,-104+b,6,8);
  poly(g,'#1a1a1e',[[-5,-90+b],[0,-87+b],[-5,-84+b]]);poly(g,'#1a1a1e',[[5,-90+b],[0,-87+b],[5,-84+b]]);dot(g,'#1a1a1e',0,-87+b,1.4);rect(g,'rgba(0,0,0,.1)',3,-90+b,10,46);
  for(let q=0;q<7;q++)rect(g,'#f4f0e8',20+q*3.4,-68+Math.sin(t*5+q)*2.4,3,6);for(let q=0;q<3;q++)rect(g,'#14110f',23+q*6.8,-68+Math.sin(t*5+q*2)*2.4,2,4)}),
 /* Frederick Law Olmsted: abito scuro da viaggio, baffi e pizzetto, cappello a tesa larga, rotolo di disegni, bastone */
 NP('ny_olmsted',NAME.ny_olmsted,18800,GREET.ny_olmsted,{skin:'#dca888',top:'#2a2a32',bot:'#3a3a42',hair:'#5a4a3a',s:1.0},(g,b,t)=>{el(g,'#2a2018',1,-111+b,19,3.6);poly(g,'#2a2018',[[-9,-110+b],[11,-110+b],[8,-122+b],[-6,-122+b]]);rect(g,'#14110f',-8,-114+b,18,2.4);
  poly(g,'#4a3a2a',[[2,-98+b],[10,-98+b],[8,-90+b],[5,-86+b],[3,-91+b]]);rect(g,'#4a3a2a',3,-97+b,9,2.4);rect(g,'#f4f0e8',-4,-88+b,8,3);
  rect(g,'#eadfc0',-34,-78,11,34);rect(g,'#c8b88a',-34,-78,11,3);rect(g,'#c8b88a',-34,-46,11,3);ln(g,'#6a4a2a',2.4,[30,-4,34,-68]);dot(g,GOLDN,34.4,-70,3)})
];
function steam(g,x,y,t,h){for(let q=0;q<4;q++){const u=((t*.5+q/4)%1);dot(g,'rgba(240,240,244,'+(.5*(1-u))+')',x+Math.sin(t*1.2+q*2)*(2+u*4),y-u*h,2+u*5)}}
/* ---- oggetti lungo il percorso ---- */
const props=[['nytarga',150,'THE BATTERY'],['nylamp',70],['nyplatano',250,1.1],['nybattery',520],['nypanca',830,0],['nyplatano',900,1],['nyferry',1120],['nybitta',1260],['nyliberty',1700],['nyhotdog',1850,1],['nyellis',2150],['nyplatano',2020,.9],['nypanca',1560],['nylamp',2330],
 ['nytarga',2480,'WALL STREET'],['nylamp',2700],['nybull',2900],['nyhotdog',3200,0],['nylamp',3280],['nyborsa',3500],['nytaxi',3820,0],['nyfederal',4050],['nylamp',4250],['nytrinity',4450],['nybandiera',4860],['nymemoriale',5120],['nylamp',5340],
 ['nytarga',5520,'BROOKLYN BRIDGE'],['nylamp',5700],['nybrooklyn',6000],['nypasserella',6600],['nylamp',6900],
 ['nytarga',7100,'MULBERRY STREET'],['nylittleitaly',7500],['nytaxi',7780,1],['nylombardi',8100],['nytarga',8420,'CANAL STREET'],['nychinatown',8700],['nyhotdog',9020,1],['nykatz',9250],
 ['nytarga',9480,'WASHINGTON SQUARE'],['nyplatano',9600,1.1],['nyarco',9800],['nyplatano',10130,1],['nypanca',10250],['nyparco',10350],['nyplatano',10650,1.1],['nybici',10780],['nyvanguard',10900],['nyplatano',11110,1],
 ['nytarga',11320,'FIFTH AVENUE'],['nytarga',11480,'BROADWAY'],['nyflatiron',11650],['nytaxi',11960,0],['nyempire',12250],['nyhotdog',12480,0],
 ['nytarga',12700,'42ND STREET'],['nyvapore',12900],['nygrandcentral',13050],['nytaxi',13400,0],['nysoffitto',13700],['nyhotdog',13930,0],['nychrysler',14200],['nyvapore',14460],['nybiblioteca',14720],
 ['nytarga',15100,'FIFTH AVENUE'],['nylamp',15200],['nysanpatrizio',15350],['nytarga',15720,'ROCKEFELLER PLAZA'],['nyrockefeller',16000],['nytaxi',16330,1],['nytoprock',16550],['nylamp',16730],
 ['nytarga',16880,'TIMES SQUARE'],['nytimes',17250],['nytarga',17640,'BROADWAY'],['nytaxi',17560,1],['nybroadway',17900],['nyvapore',18130],
 ['nytarga',18290,'CENTRAL PARK'],['nyolmo',18420,1],['nymall',18600],['nyolmo',18970,1],['nycarrozza',18990],['nybethesda',19100],['nypanca',19420],['nybow',19650],['nylampp',19900],['nystrawberry',20150],['nyolmo',20330,.9],['nylampp',20400],['nyvarco',W1-370]];
/* un lampione ogni tanto, dove la strada è libera */
const LM=props.filter(p=>!['nytarga','nylamp','nylampp','nypanca','nybici','nyplatano','nytaxi','nyolmo','nyvapore','nyhotdog','nybitta','nybandiera'].includes(p[0])).map(p=>p[1]);
for(let x=300;x<W1-420;x+=380){if(LM.every(m=>Math.abs(m-x)>340)&&props.every(p=>p[0]!='nytarga'||Math.abs(p[1]-x)>130)&&!props.some(p=>(p[0]=='nylamp'||p[0]=='nylampp')&&Math.abs(p[1]-x)<200))props.push([x>=18200?'nylampp':'nylamp',x])}
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'newyork',name:'New York · Dal porto a Central Park',width:W1,sky:['#8a9cc0','#f3c3a2','#ffe0ae'],gt:372,gr:['#a8a090','#807a6c'],chord:[196,246.9,293.7,370],amb:'#ffe0c0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da newyork.txt) --- */
(function(){
const TOPX_NY={
ny_emma:[
[`Chi sei?`,`Emma Lazarus, poeta di New York. Sono nata nel 1849 in una famiglia ebrea molto conosciuta in città, e sono morta nel 1887, a trentotto anni. Ho avuto poco tempo, ma ho cercato di usarlo bene.`],
[`Cos’è la Statua della Libertà?`,`Un dono della Francia: la ideò lo scultore Frédéric Bartholdi, con lo scheletro di ferro di Gustave Eiffel. Arrivò a New York nel 1885, divisa in trecentocinquanta pezzi dentro duecentoquattordici casse. Fu inaugurata il 28 ottobre 1886, davanti a più di un milione di persone.`],
[`Perché hai scritto "Il nuovo Colosso"?`,`Nel 1883 mi chiesero una poesia per un’asta d’arte: serviva a raccogliere i soldi per il piedistallo. La Francia aveva pagato la statua, ma l’America doveva pagare la base. Scrissi i versi il 2 novembre di quell’anno.`],
[`Che cosa dicono i tuoi versi?`,`Dicono che questa statua non è un gigante di bronzo che conquista, come il Colosso della Grecia antica, ma una madre degli esuli, con una torcia vicino alla porta d’oro. E che chiede al mondo: "Datemi i vostri stanchi, i vostri poveri, le vostre masse che desiderano respirare libere".`],
[`Quando sono stati scritti sulla targa?`,`Nel 1903, sedici anni dopo la mia morte, grazie alla mia amica Georgina Schuyler. Per un po’ i miei versi erano stati quasi dimenticati. Oggi la targa di bronzo si trova nel museo dentro il piedistallo.`],
[`Cos’è Castle Clinton?`,`Il forte rotondo qui dietro: lo costruirono fra il 1808 e il 1811, ma non servì mai per combattere. Dal 1855 al 1890 fu il primo centro d’arrivo per gli immigrati: otto milioni di persone passarono da qui. Oggi è un monumento nazionale, e da qui partono i battelli per la statua.`],
[`E Ellis Island?`,`Dal 1892 al 1954 vi passarono oltre dodici milioni di persone. Il primo giorno, il 1° gennaio 1892, la prima fu Annie Moore, quindici anni, venuta dall’Irlanda. Le visite e i controlli duravano da due a cinque ore, e non tutti venivano ammessi.`],
[`Ti sei occupata anche di profughi?`,`Sì. Dopo il 1881 arrivarono a New York ebrei in fuga dai massacri in Russia, e io mi occupai di loro, scrivendo per difenderli. La poesia, per me, serviva anche a questo: a dare voce a chi non l’aveva.`],
[`Che cosa significa "porta d’oro"?`,`Il porto: la porta da cui si entra a New York. Per tanti, la torcia della statua, alta sull’acqua, era la prima cosa che vedevano arrivando in nave. Un faro che non guidava solo le barche.`],
[`Cosa c’è nel piedistallo, e perché la statua è verde?`,`Il piedistallo lo disegnò l’architetto Richard Morris Hunt, dentro le mura di un forte a forma di stella. La statua era color rame, come un penny nuovo: il tempo e l’aria l’hanno resa verde. Il verde è una patina che protegge il metallo.`],
[`Che consiglio dai a chi arriva da lontano?`,`Di ricordare che chi arriva porta con sé qualcosa di prezioso: una lingua, un mestiere, una storia. E di accogliere chi arriva dopo, come tu vorresti essere stato accolto. Una città è fatta così.`],
[`Arrivederci, signora Lazarus!`,`Arrivederci, Pierpaolo. Cammina verso nord: Wall Street ti aspetta, e da lì in avanti la città è tutta in movimento. Se ti perdi, cerca la luce del porto.`],
],
ny_hamilton:[
[`Chi sei?`,`Alexander Hamilton. Sono nato nei Caraibi, nell’isola di Nevis, sono rimasto orfano da ragazzo e sono arrivato a New York da adolescente. Sono stato il primo segretario del Tesoro degli Stati Uniti e sono morto nel 1804.`],
[`Che cos’è Federal Hall?`,`L’edificio qui accanto, sul luogo dove un tempo c’era il municipio di New York. Il 30 aprile 1789 George Washington giurò qui come primo presidente, dal balcone. New York era la capitale, e il primo Congresso si riunì proprio in questo posto.`],
[`Perché Wall Street si chiama così?`,`Dal muro che gli olandesi costruirono nel 1653 per difendere Nuova Amsterdam. Il muro non c’è più, ma la strada è rimasta. A volte i nomi sopravvivono ai muri.`],
[`Cos’è il Buttonwood Agreement?`,`Un accordo firmato il 17 maggio 1792 da ventiquattro mediatori, che decisero di commerciare solo fra loro, con commissioni fisse. Si dice che l’abbiano firmato sotto un platano, ma forse fu in un caffè all’angolo. Da lì nacque la Borsa di New York.`],
[`Cos’hai fatto con la banca?`,`Nel 1784 fondai la Bank of New York, la banca più antica del Paese, insieme ad altri. Dopo, quando divenni segretario del Tesoro, mi appoggiai a quella banca per sostenere il governo. Nel 1792 fu la prima azienda ad essere negoziata in Borsa.`],
[`Che cosa facevi come segretario del Tesoro?`,`Dovevo far funzionare un Paese nuovo, pieno di debiti dopo la guerra. Sistemai i conti, organizzai le entrate e cercai di dare fiducia a chi prestava soldi. Un Paese senza credito non può camminare.`],
[`Cosa sono i Federalist Papers?`,`Una serie di articoli sui giornali, scritti nel 1787 e 1788 da me, James Madison e John Jay, per convincere gli abitanti di New York ad approvare la Costituzione. Ne scrissi più della metà. Volevo che la gente capisse perché serviva un governo forte e giusto.`],
[`Che cos’è successo con Aaron Burr?`,`Fu un duello, nel 1804, a Weehawken, nel New Jersey. Fui ferito e morii il giorno dopo. Non ne vado fiero: un errore che spero nessuno ripeta.`],
[`Perché sei sepolto qui?`,`Trinity è la chiesa più antica di Wall Street: la parrocchia nacque nel 1697, mentre l’edificio che vedi è del 1846. Nel suo cimitero ci sono io, con mia moglie Elizabeth. Chi passa lascia qualche moneta sulla tomba, per fortuna.`],
[`È vero che sei su una banconota?`,`Sì, sul biglietto da dieci dollari. Il fatto che io, che amavo i conti, sia finito su una banconota mi sembra un buon segno. Peccato non averlo potuto vedere.`],
[`Ho sentito che a Broadway hanno fatto uno spettacolo su di te.`,`Me l’hanno detto: con le canzoni, a quanto pare. Non mi dispiace: mi piace essere ricordato, e un buon ritmo non fa mai male. Andateci, se potete, e ascoltate bene le parole.`],
[`Arrivederci, signor Hamilton!`,`Arrivederci, Pierpaolo. Studia, scrivi, e tieni onesti i tuoi conti: è un buon consiglio per tutta la vita. E salutami il ponte, quando ci arrivi.`],
],
ny_emily:[
[`Chi sei?`,`Emily Warren Roebling, moglie di Washington Roebling, l’ingegnere capo del ponte. Per anni ho guidato i lavori per lui, perché non poteva più andare sul cantiere. Sono morta nel 1903, e la targa sulla torre di Brooklyn mi ricorda.`],
[`Chi ha progettato il ponte?`,`Mio suocero, John Augustus Roebling. Morì nel 1869, all’inizio dei lavori, per un incidente sul cantiere. Allora toccò a Washington, mio marito, finire l’opera.`],
[`Che cos’è la "malattia dei cassoni"?`,`Per costruire le fondamenta delle torri si scendeva sotto l’acqua dentro grandi casse piene d’aria compressa. Chi risaliva troppo in fretta si ammalava di decompressione: più di cento uomini, e anche Washington, che ne uscì paralizzato in parte. Nel cantiere morirono ventisette persone.`],
[`Come hai guidato i lavori?`,`Washington restava in casa, a Brooklyn Heights, e guardava il cantiere con un cannocchiale. Io andavo sul posto con i suoi appunti e le sue istruzioni, parlavo con gli ingegneri e con i politici, e imparai da sola la matematica e l’ingegneria che servivano. Non fu semplice, ma mi appassionai.`],
[`Cosa rende speciale questo ponte?`,`I cavi: furono i primi fatti con fasci di fili d’acciaio, come ideò mio suocero. Accanto ci sono i cavi diagonali, che lo rendono ancora più forte. E c’è la passerella, pensata solo per chi cammina.`],
[`Quanto è grande il Brooklyn Bridge?`,`La campata centrale è di 1595 piedi, circa 486 metri: quando lo finimmo era il ponte sospeso più lungo del mondo. Le torri sono di granito e calcare, con archi gotici. Tutto è costato circa quindici milioni di dollari, una fortuna.`],
[`Com’è stata l’inaugurazione?`,`Il 24 maggio 1883, con il presidente Chester Arthur e il governatore Grover Cleveland. Fui la prima ad attraversarlo, in carrozza, con un gallo in grembo, simbolo di vittoria. Mi sembrò un buon modo di dire "ce l’abbiamo fatta".`],
[`Quanta gente lo attraversò?`,`Nelle prime ventiquattro ore, più di centocinquantamila persone, a piedi. Volevano toccare quell’opera, camminarci sopra. Ancora oggi ci passano in tanti ogni giorno.`],
[`Si dice che dopo l’inaugurazione sia successo qualcosa di triste.`,`Sì. Il 30 maggio 1883 si sparse una falsa voce di crollo, e la folla andò nel panico: persero la vita almeno dodici persone. Il ponte non si mosse, ma fu un giorno doloroso. Dalle opere grandi si impara anche questo.`],
[`Che cosa dice la targa sulla torre?`,`Che i costruttori mi ricordano: la fede e il coraggio che aiutarono mio marito malato a portare a termine l’opera. Sono parole che mi commuovono. Io, in realtà, ho solo fatto quello che andava fatto.`],
[`Che consiglio dai a chi vuole costruire qualcosa?`,`Impara quello che ti serve, anche se nessuno si aspetta che tu lo faccia. Non aspettare il permesso per essere capace. E non dimenticare di salutare chi lavora con te.`],
[`Arrivederci, signora Roebling!`,`Arrivederci, Pierpaolo. Ricordati di guardare Manhattan dal ponte, al tramonto: è lo spettacolo più bello che conosco. Buon cammino.`],
],
ny_sal:[
[`Come ti chiami e da dove viene la tua famiglia?`,`Sal, Salvatore, come mio nonno, che arrivò dal Sud Italia a inizio Novecento. Io sono nato qui, nel quartiere. Parlo inglese per lavoro e italiano per cuore.`],
[`Come sono arrivati gli italiani a New York?`,`Milioni di italiani, soprattutto del Sud, partirono fra fine Ottocento e primo Novecento. Molti passarono da Ellis Island, e poi trovarono casa a Mulberry Street, dove c’erano negozi, chiese e feste come al paese. Si aiutavano tra di loro: era l’unico modo.`],
[`Che cos’è oggi Little Italy?`,`Poche strade attorno a Mulberry Street: una volta il quartiere si estendeva per una cinquantina di isolati. Chinatown è cresciuta da Canal Street e ne ha preso un pezzo. Ma il cuore di Little Italy è ancora qui.`],
[`Che cos’è la festa di San Gennaro?`,`Nata nel settembre del 1926, quando alcuni immigrati napoletani costruirono una piccola cappella su Mulberry Street per onorare il patrono di Napoli. Oggi dura undici giorni, con musica, bancarelle e una grande processione con la statua del santo. Si mangia fino a non reggersi in piedi.`],
[`Lombardi’s è davvero la prima pizzeria d’America?`,`Dicono che aprì nel 1905, in Spring Street, e per più di un secolo la storia è stata questa. Però alcuni storici pensano che altri siano arrivati prima, e che il vero fondatore fosse Filippo Milone, non Gennaro Lombardi. Resta la pizzeria più famosa, e la discussione è aperta.`],
[`Qual è la differenza fra la pizza di Napoli e quella di New York?`,`A Napoli è soffice, con pomodoro San Marzano, mozzarella e basilico. A New York si è adattata ai gusti americani: più grande, più sottile e più croccante. E la fetta si piega a metà, per mangiarla camminando.`],
[`Che cos’altro si mangia a Little Italy?`,`Cannoli, soprattutto: croccanti fuori e di ricotta dentro. Poi caffè espresso, gelato e pasta come la fa la nonna. Ma non chiedere gli spaghetti con le polpette: quella è una storia americana.`],
[`E Chinatown?`,`Qui accanto: lanterne rosse, mercati di pesce e verdura, dim sum, negozi di erbe. Dalla fine degli anni Sessanta, quando ripresero gli arrivi dalla Cina, Chinatown è cresciuta e ha toccato i confini di Little Italy. Siamo vicini di casa, e ci scambiamo i ristoranti.`],
[`Cos’è Katz’s?`,`Una tavola calda del Lower East Side, aperta nel 1888. Il panino di pastrami è leggendario: carne speziata, affettata a mano, con senape. Durante la guerra i proprietari mandavano cibo ai figli soldati, e nacque lo slogan "Send a salami to your boy in the army".`],
[`Com’era il Lower East Side?`,`Un quartiere pieno di immigrati, soprattutto ebrei, che vivevano in palazzi stretti con le scale antincendio fuori. Il Tenement Museum è in un edificio del 1863 dove vissero quasi settemila persone. Vale la pena vederlo: dà un’idea della vita di allora.`],
[`Che consiglio dai per mangiare a New York?`,`Vai dove c’è la coda di gente del posto, porta un po’ di contanti, e non avere paura di sporcarti le mani. Mangia in piedi, se serve. Il cibo migliore qui non ha quasi mai il tovagliolo.`],
[`Arrivederci, Sal!`,`Ciao, Pierpaolo! Torna quando hai fame, e porta qualcuno. Buon viaggio, e ricordati: la pizza non si mangia mai da soli.`],
],
ny_jane:[
[`Chi sei?`,`Jane Jacobs, scrittrice e abitante del Village: ho vissuto a lungo in Hudson Street, in una casetta del 1842. Nel 1961 ho pubblicato "Vita e morte delle grandi città". È un libro su come vivono davvero le strade.`],
[`Cosa vuol dire "occhi sulla strada"?`,`Che una strada è sicura quando tanta gente la guarda dalle finestre, dai negozi, dalle scale delle case. Non servono telecamere: bastano il fruttivendolo, la signora al balcone, i bambini che giocano. Più la vita di quartiere è varia, più la strada è tranquilla.`],
[`E il "balletto del marciapiede"?`,`È la danza di ogni giorno: il negoziante che apre, la mamma con il passeggino, il postino, i ragazzi che tornano a casa. Nessuno lo coordina, e funziona benissimo. Un po’ come questo parco, ma più lungo.`],
[`Che cosa è successo a Washington Square?`,`Un piano di Robert Moses voleva far passare la Fifth Avenue attraverso il parco, come strada per le automobili. I vicini fondarono un comitato per salvare il parco, con Shirley Hayes in testa, e io mi unii a loro. Alla fine il traffico fu tolto, e oggi il parco è tutto per chi cammina.`],
[`Chi era Robert Moses?`,`Il grande costruttore di New York: strade, ponti, autostrade. Pensava che le città fossero troppo affollate e che andassero riorganizzate per le auto. Aveva ragioni sue, ma per me le città sono fatte soprattutto di persone.`],
[`Cos’era la Lower Manhattan Expressway?`,`Un’autostrada urbana che avrebbe attraversato SoHo e Little Italy, e distrutto molti edifici storici. Con i vicini la combattei per anni: nel 1968 mi arrestarono durante un’udienza pubblica. Alla fine il progetto fu cancellato.`],
[`Come dev’essere un buon quartiere?`,`Con isolati corti, molti usi diversi, case vecchie e nuove mescolate, e tanta gente a ogni ora. Una città che ha negozi, uffici e abitazioni insieme resta viva. Quando ogni cosa è separata, le strade si svuotano.`],
[`Perché ami tanto il Village?`,`Perché è caotico e vero: case, magazzini, bottegucce, gente di ogni tipo. Non segue la griglia delle strade, e ci si perde volentieri. Per me era la lezione quotidiana su come funziona una città.`],
[`Come venne accolto il tuo libro?`,`Non subito bene: gli urbanisti dell’epoca credevano che le città vecchie andassero demolite e ricostruite da zero. Io dicevo il contrario. Col tempo, molti hanno cominciato a ripensare quello che pensavano.`],
[`Che cos’è questo arco?`,`L’arco di Washington Square, di marmo, alto 23 metri, costruito nel 1892 su progetto di Stanford White. Il primo era di legno e gesso, per il centenario dell’insediamento di George Washington, ed ebbe tanto successo che ne vollero uno permanente. Per decenni la Fifth Avenue passò proprio sotto, finché tolsero le auto.`],
[`Che consiglio dai a chi ama la sua città?`,`Guarda la tua strada ogni giorno, e ascolta chi ci abita. Chi la osserva da anni la conosce meglio di molti esperti. E se qualcosa non va, non aspettare che lo faccia qualcun altro.`],
[`Arrivederci, signora Jacobs!`,`Arrivederci, Pierpaolo. Continua verso nord: la città diventa più alta, ma le persone restano le stesse. E guarda sempre in alto e in basso: i dettagli sono ovunque.`],
],
ny_dolores:[
[`Chi sei?`,`Dolores, nata nel Queens, trent’anni al volante di questo taxi giallo. Ne ho visti di tutti i tipi: turisti, banchieri, attori, gente che parla da sola. Una volta mi hanno dato anche una mancia in francobolli.`],
[`Perché New York si chiama "Big Apple"?`,`Si dice che il nome lo abbia reso popolare un giornalista di corse di cavalli, John J. Fitz Gerald, nel New York Morning Telegraph, negli anni Venti. Nelle sue rubriche il "Big Apple" erano le piste di New York. Poi, dagli anni Settanta, lo ha rilanciato una campagna turistica.`],
[`Com’è fatta Manhattan?`,`A griglia: le "streets" vanno da est a ovest, le "avenues" da nord a sud. Il piano è del 1811. Broadway è la grande strada che taglia di traverso, e nel Village la griglia salta del tutto: lì ci si perde davvero.`],
[`Quando è nata la metropolitana?`,`Il 27 ottobre 1904, con la prima linea da City Hall fino a Harlem, 145th Street: nove miglia e ventotto stazioni. Il biglietto costava un nickel, cinque centesimi, e il primo giorno la presero più di centomila persone. "City Hall to Harlem in 15 minutes", dicevano.`],
[`Cos’è Grand Central?`,`La stazione aperta nel 1913, con la facciata Beaux-Arts e un salone enorme. Mezza New York dice "ci vediamo sotto l’orologio", quello a quattro facce di opale sopra il chiosco delle informazioni. Se non lo trovi, chiedi a me.`],
[`Perché il soffitto di Grand Central è pieno di stelle?`,`È un cielo turchese con più di duemilacinquecento stelle dorate e le costellazioni. Si dice che siano dipinte al contrario, come viste da fuori. Qualcuno dice che fu un errore, ma ormai è il suo fascino.`],
[`Cos’è la Whispering Gallery?`,`Un angolo sotto il salone, vicino all’Oyster Bar, dove il soffitto a volta porta il suono lontano. Se ti metti in un angolo e un amico in quello opposto, potete sussurrare e sentirvi benissimo. È tutto vero: provare per credere.`],
[`E il Chrysler Building?`,`Costruito nel 1930 dall’architetto William Van Alen, per un breve periodo, circa undici mesi, fu il più alto del mondo. La guglia d’acciaio la tennero nascosta dentro il palazzo e la montarono all’ultimo, per battere gli altri. Le aquile sugli angoli sembrano gli ornamenti dei cofani delle auto Chrysler.`],
[`Cosa sono quei leoni davanti alla Biblioteca?`,`Patience e Fortitude, Pazienza e Fortezza: due leoni di marmo che sorvegliano l’ingresso della Biblioteca Pubblica, su Fifth Avenue. I newyorkesi li adorano. Con la scalinata dietro, sono il posto perfetto per una foto.`],
[`Cosa si mangia per strada a New York?`,`L’hot dog dal carrettino, il pretzel caldo, la fetta di pizza piegata a metà, il bagel con la crema di formaggio. Costano poco, e li mangi camminando. Non fare il turista: ordina come i newyorkesi, in fretta e senza pensarci troppo.`],
[`Come si fa a sopravvivere a New York?`,`Cammina veloce, non fermarti in mezzo al marciapiede, tieni la destra sulle scale. Lascia una buona mancia, e se ti perdi, chiedi. Quasi tutti rispondono, magari di fretta, ma rispondono.`],
[`Arrivederci, Dolores!`,`Ciao, bello! Se ti serve un passaggio, alza il braccio: il mio taxi è sempre in giro. E ricordati: a New York non è mai tardi, solo più buio.`],
],
ny_gershwin:[
[`Chi sei?`,`George Gershwin, nato Jacob Gershvin a Brooklyn il 26 settembre 1898, da genitori ebrei venuti dalla Russia. Sono compositore e pianista. Sono morto nel 1937, a trentotto anni, ma la mia musica è ancora in giro.`],
[`Come hai cominciato?`,`Da ragazzo lasciai la scuola e andai a lavorare per un editore musicale di Tin Pan Alley, la zona dei musicisti, a New York. Facevo il "song plugger": suonavo le canzoni nuove ai clienti. Guadagnavo quindici dollari a settimana, e imparavo di tutto.`],
[`Perché si chiama Tin Pan Alley?`,`Per il baccano: centinaia di pianoforti scordati che suonavano insieme. Un giornalista la battezzò così, e il nome è rimasto. A me quel rumore sembrava già musica.`],
[`Qual è stata la tua prima canzone di successo?`,`"Swanee", nel 1919, cantata da Al Jolson: fu un successo enorme. A vent’anni ero già conosciuto a Broadway. Una buona canzone, a volte, cambia tutto.`],
[`Con chi lavoravi?`,`Con mio fratello Ira, che scriveva i testi: io le note, lui le parole. Insieme facemmo molti spettacoli a Broadway, come "Strike Up the Band". Un fratello e un piano: non serve altro.`],
[`Com’era Broadway negli anni Venti?`,`Un fiume di luci e di spettacoli. Nella stagione 1927-28 attorno a Times Square debuttarono quasi trecento commedie e musical, in una sessantina di teatri. Era la Great White Way: bianca di lampadine, di giorno e di notte.`],
[`Cos’è "Rhapsody in Blue"?`,`Un pezzo per pianoforte e orchestra che presentai il 12 febbraio 1924, all’Aeolian Hall, in un concerto del direttore Paul Whiteman chiamato "An Experiment in Modern Music". L’orchestrazione la curò Ferde Grofé. L’apertura con il clarinetto che sale con un glissando la riconoscono tutti.`],
[`Come l’hai scritta?`,`In circa tre settimane. Si racconta che mi ero dimenticato della richiesta di Whiteman, e che lo seppi da un articolo di giornale a gennaio. Dicono che tra il pubblico ci fossero perfino Rachmaninov, Heifetz, Kreisler e Stokowski. Non male per un ragazzo di Brooklyn.`],
[`Cos’è Times Square?`,`Si chiamava Longacre Square, finché nel 1904 il New York Times vi trasferì la sede e la piazza prese il suo nome. Nel 1907 comparve la palla di Capodanno. Oggi è piena di schermi, ai miei tempi era piena di insegne al neon.`],
[`Che altre opere hai scritto?`,`"An American in Paris", nel 1928, un pezzo per orchestra con i clacson dei taxi. E "Porgy and Bess", nel 1935, un’opera con un cast tutto nero. Volevo mettere insieme jazz, canzone e musica classica.`],
[`Come vorresti essere ricordato?`,`Come uno che ha ascoltato la sua città e l’ha trasformata in musica. Le canzoni sono fatte di strade, di voci e di treni. Basta ascoltare bene.`],
[`Arrivederci, signor Gershwin!`,`Arrivederci, Pierpaolo. Ora vai verso il parco, e senti come cambia il suono: meno clacson, più foglie. Anche il silenzio, a New York, ha il suo ritmo.`],
],
ny_olmsted:[
[`Chi sei?`,`Frederick Law Olmsted, paesaggista. Ho disegnato Central Park insieme a Calvert Vaux, un architetto inglese. Credo che una grande città abbia bisogno di spazi verdi quanto di strade.`],
[`Come nacque il progetto?`,`Con un concorso, nel 1857-58. Il nostro piano si chiamava "Greensward Plan", "piano del prato", ed era l’ultimo dei trentadue progetti presentati. Vincemmo noi, nel 1858.`],
[`Che cos’era qui prima del parco?`,`Rocce, paludi, qualche fattoria e anche dei villaggi. A Seneca Village vivevano famiglie afroamericane e immigrate: dovettero andare via per fare posto al parco. È una parte della storia che non va dimenticata.`],
[`Quanto è grande Central Park?`,`Circa 843 acri, più di 340 ettari, dalla 59ª alla 110ª strada. Per costruirlo si spostarono milioni di carrettate di terra e rocce. Oggi ospita più di diciottomila alberi.`],
[`Cos’è il Mall?`,`Il viale di olmi americani che hai davanti: l’unica linea retta del nostro progetto, a parte le strade trasversali. Quattro file di alberi, come colonne che reggono una navata. In fondo c’è Bethesda Terrace, come l’abside di una chiesa.`],
[`Come funzionano le strade che attraversano il parco?`,`Sono quattro, incassate e nascoste da ponti e piante. In questo modo le carrozze e i carri passano senza disturbare chi cammina. Un buon parco deve far dimenticare di essere in città.`],
[`Cos’è la fontana di Bethesda?`,`La fontana con l’Angelo delle Acque, scolpito da Emma Stebbins e inaugurato nel 1873. Celebra l’arrivo dell’acqua pulita nella città, dall’acquedotto del Croton. L’angelo tiene un giglio, simbolo di purezza.`],
[`E Bow Bridge?`,`Il ponte sul lago, progettato da Vaux. Il piano prevedeva un semplice ponte di pietra, ma alla fine scegliemmo il ferro di ghisa, con decori di fiori. È lungo quasi ventisette metri, ed è il punto più fotografato di tutto il parco.`],
[`Cos’è Strawberry Fields?`,`Un memoriale dedicato a John Lennon, davanti a un grande palazzo sul lato ovest, con il mosaico "Imagine". È un giardino della pace, con alberi di centosessanta paesi. Un posto in cui si va in silenzio.`],
[`Perché un parco pubblico è così importante?`,`Perché serve a tutti, ricchi e poveri: un posto dove respirare e camminare senza pagare. Per me un parco è una cura per la città. Chi vive in una metropoli ha bisogno di verde quanto di pane.`],
[`Che consiglio dai a chi visita Central Park?`,`Vieni senza fretta, con le scarpe comode, e cammina senza meta. Siediti, guarda gli alberi e ascolta. Non c’è un modo sbagliato di godersi un parco.`],
[`Arrivederci, signor Olmsted!`,`Arrivederci, Pierpaolo. In fondo al Mall c’è una luce strana: seguila, ti porterà dove il tempo si piega. E se ti fermi, salutami gli olmi.`],
]
};
Object.assign(TOPX,TOPX_NY);
})();
