/* ---------- ISTANBUL · Dal Ponte di Galata alla Stazione di Haydarpaşa (Eminönü e Ponte di Galata, Sultanahmet, Topkapı e Gülhane, Gran Bazar, Süleymaniye, Balat e Fener, Galata e İstiklal, Dolmabahçe e Ortaköy, Üsküdar e Haydarpaşa) ---------- */
/* Un'intera giornata da sinistra a destra: alba sul Ponte di Galata e a Eminönü, mattina a Sultanahmet (Santa Sofia, Ippodromo, Moschea Blu, Cisterna),
   tarda mattina a Topkapı e nel parco di Gülhane, mezzogiorno nel Gran Bazar, primo pomeriggio alla Süleymaniye, pomeriggio a Balat e Fener,
   tramonto a Galata e sul viale İstiklal, sera sul Bosforo a Dolmabahçe e Ortaköy, notte a Üsküdar e alla stazione di Haydarpaşa.
   In fondo al molo c'è il varco.
   Gli oggetti nuovi (nomi che iniziano per "ist") sono definiti qui dentro; per il resto si usano quelli di elementi.js (fin, cas, plat, pers, gente, ... di PR._md
   e gli oggetti "md..." come lampioni, panchine, gatti, platani). La luce del giorno e della sera e' la stessa di Madrid (stessa funzione nf).
   Il tono per i temi dolorosi (rivolta Nika, peste, conquista del 1453, Atatürk, incendio di Haydarpaşa) e' sempre sobrio e rispettoso. */
(function(){
const GT=372,W1=23000;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln,gatto}=PR._rm;
const {nf,MD,lit,fin,bal,arco,cupo,cas,col,plat,pino,cedro,cipr,pers,gente}=PR._md;
const md=(i,n)=>((i%n)+n)%n;
const LIT='rgb(255,226,150)';
const Z=[0,2400,4600,7600,9700,12700,15100,17700,20100,W1+400];   /* inizio di ognuna delle 9 zone */
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* colori ricorrenti */
const ST='#e8dcc0',ST2='#d4c4a0',ST3='#b8a888',LD='#8a929c',LD2='#6a727c',TIL='#c0603a',GD='#d8b04a',IRN='#26292e';
/* ---- cielo: alba rosa e dorata sul Corno d'Oro, mattina azzurra e luminosa, pomeriggio dorato, tramonto rosso-arancio, sera cobalto, notte con la falce di luna ---- */
const SKY=[[0,['#7a78b8','#f6a898','#ffd09a']],[1300,['#4a9ef0','#b6d8f2','#f4eedc']],[2400,['#2a86ee','#78baf4','#dcecf8']],[7600,['#1c72dc','#66b0f0','#d8ecf8']],[9700,['#2a80e0','#7ebcf0','#ecf0ec']],[12700,['#3a86d8','#a8c8e8','#f8e4b8']],[14400,['#5a7cc8','#e8b890','#ffc88a']],[15300,['#6a4a98','#e8604a','#ffa050']],[16000,['#4a3a88','#c04a6a','#f88a58']],[16900,['#1a2c78','#3a4a98','#8a5a8a']],[17800,['#0e2260','#1c3a8a','#4a5a9a']],[19000,['#0a1a50','#14296a','#2a3a7a']],[20100,['#080e34','#101c54','#26306a']],[99999,['#080e34','#101c54','#26306a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
/* ---- elementi architettonici ricorrenti ---- */
/* minareto: fusto, balconcini (n), cono di piombo con mezzaluna */
const mn=(g,x,y,h,w,c,nb,cap)=>{rect(g,c,x-w/2,y-h,w,h);rect(g,'rgba(255,255,255,.2)',x-w/2,y-h,w*.3,h);rect(g,'rgba(0,0,0,.13)',x+w*.12,y-h,w*.38,h);
 for(let q=0;q<(nb||1);q++){const by=y-h*(.8-q*.2);rect(g,c,x-w*.95,by,w*1.9,3);rect(g,'rgba(0,0,0,.28)',x-w*.95,by+3,w*1.9,2.4);rect(g,'rgba(0,0,0,.2)',x-w*.95,by-3,w*1.9,1.2)}
 poly(g,cap||LD,[[x-w*.64,y-h],[x,y-h-w*3.6],[x+w*.64,y-h]]);rect(g,'rgba(255,255,255,.18)',x-w*.3,y-h-w*2.6,w*.2,w*2.4);ln(g,GD,1.2,[x,y-h-w*3.6,x,y-h-w*3.6-6]);dot(g,GD,x,y-h-w*3.6-7,1.6)};
/* cupola: mezzo ellisse con nervature e riflesso */
const dm=(g,c,x,y,r,h,fin2)=>{g.fillStyle=tn(c);g.beginPath();g.ellipse(x,y,r,h,0,Math.PI,0);g.closePath();g.fill();g.fillStyle='rgba(255,255,255,.14)';g.beginPath();g.ellipse(x-r*.25,y-h*.1,r*.45,h*.85,0,Math.PI*1.05,Math.PI*1.6);g.lineTo(x-r*.25,y);g.closePath();g.fill();
 for(let q=-2;q<=2;q++)ln(g,'rgba(0,0,0,.16)',1,[x+q*r*.36,y,x+q*r*.3,y-h*.55,x+q*r*.14,y-h*.93]);if(fin2){ln(g,GD,1.6,[x,y-h,x,y-h-8]);dot(g,GD,x,y-h-9,2)}};
/* merli (battlements) */
const merli=(g,c,x,y,w,s)=>{s=s||10;for(let q=0;q<w/(s*1.6);q++)rect(g,c,x+q*s*1.6,y-s,s,s)};
/* persona minuscola per dare scala */
const pp=(g,x,y,t,i,sc)=>pers(g,x,y,t,{f:i%2?1:-1,s:sc||.5,ph:i,skin:['#e8b890','#d8a880','#c88a64'][i%3],top:['#c8503a','#2a6aa8','#e8c04a','#f4f0e6','#4aa86a','#8a4a9a'][i%6],bot:['#2a4a8a','#3a3a46','#c8b890'][i%3],hair:['#1d120c','#4a3020','#2a1a10'][i%3]});
const P=(n,f)=>{PR[n]=MD(f)};
/* ---- livello 0: il cielo con sole, falce di luna e nuvole ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-17000)/2400,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/15600,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*250;
 if(xs<16100){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,15)}
 const mu=cl((xs-16300)/2400,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*210;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,p[0],mx+6,my-3,13)}
 const cc=xs<2400?'rgba(252,206,214,.75)':xs<13000?'rgba(255,255,255,.85)':xs<16200?'rgba(255,176,140,.7)':'rgba(140,120,190,.4)';
 each(o-((t*5)%340)*.02,340,1,(x,i,r)=>{if(r>.5)return;nube(g,x+r*100,40+r*46,.7+r*.5,cc)});
 const fo=cl(1-xs/2400,0,1)*.3;if(fo>.01){g.fillStyle='rgba(252,170,170,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-11800)/1000,0,1)*cl((14800-xs)/900,0,1)*.12;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-14600)/800,0,1)*cl((16800-xs)/900,0,1)*.26;if(wg>.01){g.fillStyle='rgba(255,110,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: lo skyline lontano (Süleymaniye, Sultanahmet, il Marmara, Galata, il ponte sul Bosforo, le luci dell'Asia) ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 const mo=(sx,x,h,w,c)=>mn(g,sx+x,hz+16,h,w,dim(c||'#e0d8c4'),1,dim(LD2));
 const dome=(sx,x,r,h,c)=>{g.fillStyle=dim(c||'#8a929c');g.beginPath();g.ellipse(sx+x,hz+16,r,h,0,Math.PI,0);g.fill()};
 /* il Corno d'Oro e la collina di Eminönü con la Süleymaniye (zone 1-2) */
 let e=env(900,3600);if(e>.02){g.globalAlpha=e;const sx=fx(900);for(let q=-8;q<9;q++)rect(g,dim(['#d8c4a0','#c8a888','#e0d0b0'][md(q,3)]),sx+q*26-12,hz-10-hr(q+4)*26,24,40);dome(sx,-30,46,34);dome(sx,22,28,22);dome(sx,-90,22,16);mo(sx,-90,76,5);mo(sx,-124,70,5);mo(sx,56,82,5);mo(sx,86,74,5);g.globalAlpha=1}
 /* Santa Sofia e la Moschea Blu (zone 2-3) */
 e=env(3300,3400);if(e>.02){g.globalAlpha=e;const sx=fx(3300);rect(g,dim('#d8b894'),sx-120,hz-22,150,40);dome(sx,-45,50,40);dome(sx,-100,24,18);dome(sx,6,24,18);mo(sx,-135,92,6);mo(sx,22,92,6);
  rect(g,dim('#e0d8c4'),sx+50,hz-18,120,36);dome(sx,110,44,36,'#7a8a9e');dome(sx,70,22,16,'#7a8a9e');dome(sx,150,22,16,'#7a8a9e');[48,170].forEach(a=>mo(sx,a,86,5));[64,154].forEach(a=>mo(sx,a,72,4));g.globalAlpha=1}
 /* il Mar di Marmara con le navi in attesa e le Isole dei Principi (zone 3-4) */
 e=env(7000,3400);if(e>.02){g.globalAlpha=e;const sx=fx(7000);g.fillStyle=dim('#4a84b0');g.fillRect(sx-420,hz+4,840,22);rect(g,'rgba(255,255,255,.18)',sx-420,hz+4,840,2);g.fillStyle=dim('#7a96b8');g.beginPath();g.moveTo(sx-240,hz+6);g.quadraticCurveTo(sx-170,hz-34,sx-90,hz+6);g.fill();g.beginPath();g.moveTo(sx+80,hz+6);g.quadraticCurveTo(sx+150,hz-26,sx+230,hz+6);g.fill();
  [[-330,16],[-30,22],[310,14]].forEach((b,i)=>{rect(g,dim('#4a4e5a'),sx+b[0],hz+b[1]-6,46,6);rect(g,dim('#d8d4cc'),sx+b[0]+8,hz+b[1]-14,22,8);rect(g,dim('#c8402a'),sx+b[0]+32,hz+b[1]-12,6,6)});g.globalAlpha=1}
 /* la cupola grande della Süleymaniye, vista da lontano (zona 5) */
 e=env(10600,3200);if(e>.02){g.globalAlpha=e;const sx=fx(10600);rect(g,dim('#d8c8a8'),sx-90,hz-12,180,34);dome(sx,0,56,50);dome(sx,-70,26,22);dome(sx,70,26,22);mo(sx,-98,112,6,'#e4dcc8');mo(sx,98,112,6,'#e4dcc8');mo(sx,-76,92,5,'#e4dcc8');mo(sx,76,92,5,'#e4dcc8');
  for(let q=-6;q<7;q++)if(Math.abs(q)>3)rect(g,dim(['#d8b890','#c8a078','#e0cca8'][md(q,3)]),sx+q*26-12,hz-2-hr(q+9)*22,24,30);g.globalAlpha=1}
 /* le colline di Fener e Balat, con i cipressi (zona 6) */
 e=env(13900,3000);if(e>.02){g.globalAlpha=e;const sx=fx(13900);g.fillStyle=dim('#6a8a5a');g.beginPath();g.moveTo(sx-360,hz+30);for(let q=0;q<=24;q++)g.lineTo(sx-360+q*30,hz-14-16*Math.sin(q*.55)-6*Math.sin(q*1.7));g.lineTo(sx+360,hz+30);g.fill();
  for(let q=-10;q<11;q++)rect(g,dim(['#e89aa0','#f0cf6a','#6ac0c4','#e88a4a','#c8a888'][md(q,5)]),sx+q*30,hz-4-hr(q+2)*18,22,28);for(let q=0;q<8;q++)poly(g,dim('#2a4a34'),[[sx-300+q*80,hz+8],[sx-296+q*80,hz-26],[sx-292+q*80,hz+8]]);g.globalAlpha=1}
 /* Galata, il suo cilindro, e la città vecchia sull'altra sponda del Corno (zona 7) */
 e=env(16400,3200);if(e>.02){g.globalAlpha=e;const sx=fx(16400);for(let q=-9;q<10;q++)rect(g,dim(['#d8c4a0','#c8b898','#e0d0b0','#b89878'][md(q,4)]),sx+q*24-11,hz-6-hr(q+6)*30,22,40);
  rect(g,dim('#c8b898'),sx-12,hz-70,24,86);poly(g,dim(LD2),[[sx-15,hz-70],[sx,hz-96],[sx+15,hz-70]]);rect(g,dim('#b8a888'),sx-16,hz-72,32,4);dome(sx,-150,30,24);mo(sx,-176,84,5);mo(sx,-124,76,5);dome(sx,150,40,32);mo(sx,110,90,5);mo(sx,190,80,5);g.globalAlpha=1}
 /* il ponte sul Bosforo in lontananza, le colline d'Asia e le navi (zona 8) */
 e=env(19000,3400);if(e>.02){g.globalAlpha=e;const sx=fx(19000);g.fillStyle=dim('#5a7a96');g.beginPath();g.moveTo(sx-440,hz+30);for(let q=0;q<=29;q++)g.lineTo(sx-440+q*30,hz-8-14*Math.sin(q*.5+1)-7*Math.sin(q*1.3));g.lineTo(sx+440,hz+30);g.fill();
  const lc=night>.3?'rgb(255,'+(120+Math.round(100*Math.sin(t*.7)))+',140)':null;rect(g,dim('#9a9aa6'),sx-40,hz-86,3,100);rect(g,dim('#9a9aa6'),sx+120,hz-86,3,100);ln(g,dim('#9a9aa6'),1,[sx-200,hz-4,sx-39,hz-86,sx+60,hz-30,sx+121,hz-86,sx+260,hz-4]);rect(g,dim('#8a8a96'),sx-200,hz-4,460,3);
  if(lc){for(let q=0;q<10;q++)dot(g,'hsl('+((t*30+q*36)%360)+',90%,62%)',sx-190+q*46,hz-4,1.6);glow(g,sx+40,hz-30,90,'255,160,160',.18*night)}
  [[-250,18],[150,20]].forEach((b,i)=>{rect(g,dim('#3a3e4a'),sx+b[0],hz+b[1]-5,40,5);rect(g,dim('#e8e4dc'),sx+b[0]+6,hz+b[1]-12,18,7)});g.globalAlpha=1}
 /* le luci dell'Asia e dell'Europa, le navi alla fonda (zona 9) */
 e=env(21800,3400);if(e>.02){g.globalAlpha=e;const sx=fx(21800);g.fillStyle=dim('#2a3a5e');g.beginPath();g.moveTo(sx-440,hz+30);for(let q=0;q<=29;q++)g.lineTo(sx-440+q*30,hz-6-12*Math.sin(q*.45+2)-6*Math.sin(q*1.9));g.lineTo(sx+440,hz+30);g.fill();
  for(let q=0;q<60;q++)if(night>.3)dot(g,'rgba(255,214,130,'+(.4+.4*Math.sin(t*2+q))*night+')',sx-430+hr(q*3)*860,hz-4+hr(q*5)*14,1.2);
  [[-150,10],[200,16]].forEach(b=>{rect(g,dim('#3a3e4a'),sx+b[0],hz+b[1]-5,48,5);rect(g,dim('#d8d4cc'),sx+b[0]+8,hz+b[1]-13,22,8);if(night>.3)dot(g,'rgba(255,230,160,.9)',sx+b[0]+40,hz+b[1]-6,1.8)});g.globalAlpha=1}}
/* ---- livello 2: tetti e cupole della citta' di mezzo, o colline e sponda opposta dove c'e' l'acqua ---- */
const WATER=[[0,1230],[17700,19000],[21000,W1+400]];
const inWater=wx=>WATER.some(w=>wx>=w[0]&&wx<w[1]);
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const wx=cam+x+120,zz=zn(wx),w=108;
  const wins=(n,top)=>{if(night>.2)for(let q=0;q<n;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+14+(q%4)*20,top+Math.floor(q/4)*14,6,5)};
  if(inWater(wx)){/* sponda opposta bassa, con case, un minareto e i cipressi */
   g.fillStyle=dim(zz==1?'#9a8a78':zz==8?'#6a8a74':'#5a6a82');g.beginPath();g.moveTo(x-4,hz+16);g.lineTo(x-4,hz-8-r*14);g.quadraticCurveTo(x+54,hz-26-r*22,x+112,hz-6-r*10);g.lineTo(x+112,hz+16);g.fill();
   for(let q=0;q<4;q++)rect(g,dim(['#d8c4a0','#e8b890','#c8a888','#e0d0b0'][md(i+q,4)]),x+6+q*24,hz-10-hr(i*3+q)*16,18,22);
   if(hr(i*3)>.6){mn(g,x+60,hz+14,70+r*30,5,dim('#e8e0cc'),1,dim(LD2))}else if(hr(i*3)>.35)poly(g,dim('#2a4a34'),[[x+88,hz+16],[x+92,hz-28],[x+96,hz+16]]);wins(8,hz-6);return}
  const pal=zz<=2?['#d8c4a0','#c8a888','#e0d0b0','#e8d8b8']:zz==3?['#d8c4a0','#b89878','#c8b898']:zz==4?['#c8a888','#d8b890','#b89878']:zz==5?['#d8c4a0','#c8a888','#e0cca8']:zz==6?['#e89aa0','#f0cf6a','#6ac0c4','#e88a4a','#a0c880']:zz==7?['#e0d0b8','#d8bca0','#c8b8a8','#e8d4b8']:['#d8b890','#e0c8a0','#c8a888'];
  rect(g,dim(pal[md(i,pal.length)]),x,hz-44-r*34,w-10,54+r*34);poly(g,dim(TIL),[[x-3,hz-44-r*34],[x+16,hz-60-r*34],[x+w-28,hz-60-r*34],[x+w-7,hz-44-r*34]]);
  if(hr(i*3)>.8&&zz!=6){dm(g,dim(LD),x+50,hz-44-r*34,24,18);}else if(hr(i*3)>.62&&zz!=7)mn(g,x+80,hz-30,86+r*20,5,dim('#e8e0cc'),1,dim(LD2));else if(hr(i*3)<.14)poly(g,dim('#2a4a34'),[[x+40,hz+10],[x+45,hz-44],[x+50,hz+10]]);wins(8,hz-36-r*34)})}
/* ---- livello 3: le facciate della strada (o l'acqua del Corno d'Oro e del Bosforo) ---- */
function sea(g,o,t,a,b){const x0=Math.max(0,a-o),x1=Math.min(480,b-o);if(x1<=x0)return;
 const wx=o+240,n=nf(wx),dawn=cl(1-wx/2600,0,1),top=mixs(mixs('#5a98c0','#f0a890',dawn*.7),'#0c1c48',n),bot=mixs(mixs('#2e6a98','#c88878',dawn*.5),'#08143a',n),y0=318;
 const gr=g.createLinearGradient(0,y0,0,GT+2);gr.addColorStop(0,top);gr.addColorStop(1,bot);g.fillStyle=gr;g.fillRect(x0,y0,x1-x0,GT+2-y0);
 const sun=cl((wx-14400)/1400,0,1)*cl((17200-wx)/1400,0,1),sunx=240+(wx>15500?60:-60);
 g.save();g.beginPath();g.rect(x0,y0,x1-x0,GT+2-y0);g.clip();
 for(let q=0;q<22;q++){const px=((q*47+hr(q)*30-o*1)%520+520)%520-20,py=y0+6+hr(q*3)*(GT-y0-10),w=10+hr(q+1)*22;rect(g,'rgba(255,255,255,'+(.1+.1*Math.sin(t*2+q))*(1-n*.6)+')',px,py,w,1.4)}
 if(sun>.05)for(let q=0;q<9;q++)rect(g,'rgba(255,170,90,'+.45*sun+')',sunx-26+Math.sin(t*2+q)*8,y0+4+q*6,52-q*3,2);
 if(dawn>.05)for(let q=0;q<6;q++)rect(g,'rgba(255,200,160,'+.5*dawn+')',150+Math.sin(t*1.6+q)*10,y0+4+q*8,110-q*8,2);
 if(n>.3)for(let q=0;q<26;q++){const px=((q*61+hr(q*5)*40-o)%560+560)%560-30;rect(g,'rgba(255,214,130,'+(.28+.2*Math.sin(t*3+q))*n+')',px,y0+4+hr(q*7)*(GT-y0-8),2,5+hr(q)*8)}
 /* i vapur che attraversano, piccoli e bianchi */
 for(let j=Math.floor(a/1500)-1;j<=Math.floor(b/1500);j++){const r=hr(j*3+1),wxx=j*1500+(t*14)%1500+r*300;if(wxx<a||wxx>b)continue;const px=wxx-o,by=GT-6-r*8;if(px<-80||px>560)continue;g.save();g.translate(px,by);g.scale(.62,.62);poly(g,tn('#f4f0e6'),[[-48,0],[48,0],[40,-12],[-40,-12]]);rect(g,tn('#2a2a34'),-48,-3,96,3);rect(g,tn('#f4f0e6'),-30,-22,60,10);rect(g,tn('#e8e0d0'),-18,-30,32,8);rect(g,tn('#b83a2a'),8,-42,10,12);rect(g,tn('#1a1a1e'),8,-44,10,3);if(n>.3)for(let q=0;q<6;q++)rect(g,LIT,-26+q*9,-20,5,5);for(let q=0;q<3;q++)dot(g,'rgba(240,240,240,'+(.5-q*.14)+')',13+q*7+Math.sin(t+q)*2,-48-q*7,4+q*1.4);g.restore()}
 g.restore();rect(g,'rgba(0,0,0,.22)',x0,GT-2,x1-x0,4)}
function layerStreet(g,o,t){const gt=GT;TT=t;
 WATER.forEach(w=>sea(g,o,t,w[0],w[1]));
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b||inWater(wx+wd/2))return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,1240,Z[1],1,i=>120+hr(i*5)*60,170);
 each2(200,8,Z[1],Z[2],2,i=>100+hr(i*5)*60,170);
 each2(180,9,Z[2],Z[3],3,i=>70+hr(i*5)*50,170);
 each2(160,10,Z[3],Z[4],4,i=>130+hr(i*5)*40,150);
 each2(180,11,Z[4],Z[5],5,i=>120+hr(i*5)*50,170);
 each2(150,12,Z[5],Z[6],6,i=>110+hr(i*5)*90,130);
 each2(190,13,Z[6],Z[7],7,i=>170+hr(i*5)*60,170);
 each2(180,14,19000,Z[8],8,i=>80+hr(i*5)*40,150);
 each2(190,15,Z[8],21000,9,i=>130+hr(i*5)*50,170)}
/* facciata: stile per zona */
function fac(g,x,w,h,i,st,wx){const k=nf(wx);
 if(st==3){/* le mura merlate e gli alberi di Topkapi */
  rect(g,'#c8b894',x,GT-h*.55,w-20,h*.55);rect(g,'rgba(0,0,0,.12)',x,GT-h*.55,w-20,5);merli(g,'#c8b894',x,GT-h*.55,w-20,9);for(let q=0;q<5;q++)rect(g,'rgba(0,0,0,.1)',x,GT-h*.55+10+q*9,w-20,1);
  if(i%2)el(g,'#2f6a36',x+w/2,GT-h*.55-34,40,36),rect(g,'#4a3a2a',x+w/2-3,GT-h*.55-8,6,10);else poly(g,'#1d3a28',[[x+w/2-12,GT-h*.55],[x+w/2,GT-h*.55-90],[x+w/2+12,GT-h*.55]]);return}
 if(st==6){/* case di legno colorate e a sbalzo di Balat */
  const C=['#e89aa0','#f0cf6a','#6ac0c4','#e88a4a','#9ac87a','#b09ad0','#e8d8b0'],c=C[md(i,7)],top=GT-h;
  rect(g,c,x,top,w-14,h);rect(g,'rgba(255,255,255,.18)',x,top,5,h);rect(g,'rgba(0,0,0,.14)',x+w-26,top,12,h);poly(g,'rgba(0,0,0,.2)',[[x-6,top+h*.42],[x+w-8,top+h*.42],[x+w-14,top+h*.42+8],[x,top+h*.42+8]]);
  poly(g,TIL,[[x-6,top],[x+w*.5-7,top-26],[x+w-8,top]]);rect(g,'rgba(255,255,255,.14)',x+w*.5-7,top-26,2,26);
  for(let r=0;r<Math.floor(h/46);r++)for(let q=0;q<2;q++)fin(g,x+14+q*(w-62),GT-(r+1)*46+4,14,24,k,i*9+r*3+q,'#3a6a8a');
  rect(g,'#3a2a22',x+w/2-16,GT-34,18,28);if(i%3==0){ln(g,'#6a5a4a',1,[x+2,top+h*.42-6,x+w-16,top+h*.42-12]);for(let q=0;q<4;q++)rect(g,['#f4f0e6','#c8402a','#2a6aa8','#e8c04a'][q],x+10+q*18,top+h*.42-10+q%2,9,10)}return}
 const O={1:{wall:'#e8d8b0',sh:'#6a4a3a',gt:'shop',sc:'#7a3a2a',roof:'f',cor:'#b89868'},2:{wall:'#e8dcb8',sh:'#5a4a3a',bal:1,roof:'f',gt:'',cor:'#c8b080'},4:{wall:'#d8c8a8',sh:'#5a4a3a',gt:'arc',roof:'f',cor:'#a89878'},5:{wall:'#e4d0a8',sh:'#5a3a2a',gt:'shop',sc:'#3a5a7a',roof:'f',cor:'#b89868'},7:{wall:['#ecdcc4','#e8c8b8','#d8d4c8','#e8d8a8'][md(i,4)],sh:'#4a5a6a',bal:1,gt:'shop',sc:['#7a2a3a','#2a4a6a','#3a5a3a'][md(i,3)],roof:'s',cor:'#a89878'},8:{wall:'#efe6d4',sh:'#5a6a7a',gt:'shop',sc:'#2a6a8a',roof:'f',cor:'#c8b8a0'},9:{wall:['#e8d0a0','#e0c0a0','#d8d0b8'][md(i,3)],sh:'#4a4a5a',bal:1,gt:'shop',sc:'#6a3a2a',roof:'f',cor:'#b8a078'}}[st];
 cas(g,x,w-10,h,i,k,O);if(st==2&&i%3==0)el(g,'#2f6a36',x+w-30,GT-h-22,34,30);if(st==5&&i%4==1)cipr(g,x+w-22,GT,120)}
/* ---- vita: gabbiani sull'acqua, piccioni sulle piazze, passanti ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 const gu=(bx,by,w,sc,c)=>{g.strokeStyle=c;g.lineWidth=2.2*sc;g.beginPath();g.moveTo(bx-9*sc,by+w);g.quadraticCurveTo(bx-4*sc,by-5*sc,bx,by);g.quadraticCurveTo(bx+4*sc,by-5*sc,bx+9*sc,by+w);g.stroke()};
 const wz=Math.max(cl((1800-xs)/400,0,1),cl((xs-17400)/400,0,1)*cl((23400-xs)/300,0,1));
 const night=nf(xs);const gc=night>.5?'rgba(210,214,230,.6)':'rgba(250,250,250,.95)';
 for(let i=0;i<9;i++){const dd=i<5||wz>.05;if(!dd)continue;const bx=((i*131+t*(40+i*5))%640)-80,by=60+hr(i*3)*130+Math.sin(t*1.6+i*2)*16,w=Math.sin(t*(7+i%3)+i)*4;gu(bx,by,w,1,gc)}
 /* piccioni nelle piazze (Sultanahmet, Eminönü, Üsküdar) */
 const pg=Math.max(cl((xs-2400)/400,0,1)*cl((4800-xs)/400,0,1),cl((xs-1300)/300,0,1)*cl((2500-xs)/300,0,1),cl((xs-20100)/300,0,1)*cl((21200-xs)/300,0,1));
 if(pg>.05)for(let i=0;i<5;i++){const bx=((i*117+t*(46+i*6))%600)-60,by=90+hr(i*5)*100+Math.sin(t*2+i*2)*14,w=Math.sin(t*10+i)*3.4;g.strokeStyle='rgba(120,126,140,'+(.9*Math.min(1,pg))+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-8,by+w);g.quadraticCurveTo(bx-3,by-4,bx,by);g.quadraticCurveTo(bx+3,by-4,bx+8,by+w);g.stroke();rect(g,'rgba(90,96,110,.9)',bx-2,by,5,3)}
 /* passanti fra le zone pedonali (Sultanahmet, İstiklal, il lungomare) */
 [[2500,4500,40,0],[15300,17600,-34,1],[17800,20000,30,2]].forEach((rg,ri)=>{for(let i=0;i<2;i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.25),wx=rg[0]+(((t*sp+i*span/2)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));const d=sp>0?1:-1,by=GT+24+i*10;pers(g,px,by,t*3,{f:d,s:.62,ph:i,skin:'#e0b090',top:['#e8505a','#2a8a9a','#f2c82a'][(i+ri)%3],bot:'#2a2a36',hair:'#2a1a10'})}})}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#b4aca0','p'],[Z[1],Z[2],'#d8d0bc','l'],[Z[2],Z[3],'#c8bc9c','g'],[Z[3],Z[4],'#a09480','c'],[Z[4],Z[5],'#d0c6ac','b'],[Z[5],Z[6],'#a89c8a','r'],[Z[6],Z[7],'#c4bcae','a'],[Z[7],Z[8],'#bcb4a4','m'],[Z[8],Z[9],'#8e8e92','v']];
 rect(g,'#d8d0b8',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  const slabs=(bw0,add,al)=>{for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=bw0+r*add,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,'+al+')':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,15);rect(g,'rgba(0,0,0,.12)',px,yy,1.3,17)}rect(g,'rgba(0,0,0,.09)',x0,yy+15,x1-x0,1.4)}};
  if(z[3]=='p'){/* ponte: assi di legno scuro, binari del tram, corsia pedonale */
   rect(g,'#6a5a4c',x0,gt+3,x1-x0,86);for(let k=-1;k<Math.ceil(ww/22)+2;k++){const px=Math.floor((cam+x0)/22)*22+k*22-cam;rect(g,'rgba(0,0,0,.2)',px,gt+3,1.4,86)}for(let r=0;r<5;r++)rect(g,'rgba(255,255,255,.05)',x0,gt+12+r*17,x1-x0,1.4);
   rect(g,'#2a2a2e',x0,gt+90,x1-x0,2.4);rect(g,'#2a2a2e',x0,gt+102,x1-x0,2.4);rect(g,'rgba(255,255,255,.2)',x0,gt+90,x1-x0,.8);rect(g,'#7a7a82',x0,gt+88,x1-x0,38);rect(g,'rgba(0,0,0,.2)',x0,gt+88,x1-x0,3);
   if(1){rect(g,'#2a2a2e',x0,gt+98,x1-x0,2.4);rect(g,'#2a2a2e',x0,gt+110,x1-x0,2.4)}
   for(let q=0;q<16;q++)rect(g,'#c8402a',x0+((q*57-cam)%ww+ww)%ww,gt+16+hr(q)*60,3,1.8)}
  if(z[3]=='l'){slabs(70,12,.22);rect(g,'#a89c84',x0,gt+120,x1-x0,3);for(let q=0;q<5;q++){const px=((q*410+90-cam)%1900+1900)%1900-100;rect(g,'#7aa844',px,gt+124,120,22);for(let w=0;w<10;w++)rect(g,'#c8402a',px+6+w*11,gt+127+(w%2)*5,3,3)}}
  if(z[3]=='g'){slabs(34,6,.2);for(let q=0;q<90;q++)rect(g,'rgba(0,0,0,.09)',x0+((q*41-cam)%ww+ww)%ww,gt+8+hr(q)*130,5,3);rect(g,'#9a8e74',x0,gt+120,x1-x0,3);rect(g,'rgba(255,255,255,.08)',x0,gt+3,x1-x0,16)}
  if(z[3]=='c'){slabs(30,7,.14);rect(g,'#6a6054',x0,gt+98,x1-x0,2.4);rect(g,'#6a6054',x0,gt+114,x1-x0,2.4);rect(g,'rgba(255,255,255,.06)',x0,gt+3,x1-x0,16);for(let q=0;q<10;q++){const px=((q*210+30-cam)%2100+2100)%2100-60;rect(g,['#c8402a','#2a6aa8','#e8a82a','#3a8a5a'][q%4],px,gt+30+hr(q)*50,60,5)}}
  if(z[3]=='b'){slabs(60,10,.22);for(let q=0;q<30;q++)rect(g,'#b8923a',x0+((q*57-cam)%ww+ww)%ww,gt+14+hr(q*3)*110,7,2.2);rect(g,'#a89c84',x0,gt+120,x1-x0,3)}
  if(z[3]=='r'){/* acciottolato in salita, a pietre irregolari */
   for(let r=0;r<8;r++){const yy=gt+6+r*18,bw=22+r*3,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*7+r*11);el(g,hh>.6?'rgba(255,255,255,.12)':'rgba(0,0,0,.1)',px+bw/2,yy+8,bw/2-1.5,7)}}
   rect(g,'#6a5e4e',x0,gt+120,x1-x0,3);rect(g,'rgba(255,200,120,.08)',x0,gt+3,x1-x0,30)}
  if(z[3]=='a'){/* marmo chiaro del viale pedonale con i binari del tram */
   slabs(50,8,.28);rect(g,'#8a8a90',x0,gt+84,x1-x0,40);rect(g,'rgba(0,0,0,.14)',x0,gt+84,x1-x0,2);for(let k=-1;k<Math.ceil(ww/16)+2;k++){const px=Math.floor((cam+x0)/16)*16+k*16-cam;rect(g,'#5a4a3a',px,gt+86,5,36)}
   rect(g,'#2a2a2e',x0,gt+96,x1-x0,2.4);rect(g,'#2a2a2e',x0,gt+110,x1-x0,2.4);rect(g,'rgba(255,255,255,.3)',x0,gt+96,x1-x0,.8);rect(g,'rgba(255,255,255,.3)',x0,gt+110,x1-x0,.8)}
  if(z[3]=='m'){/* il lungomare: granito, bordo sull'acqua, spazio per i tavolini */
   slabs(54,8,.2);rect(g,'rgba(40,50,70,.14)',x0,gt+3,x1-x0,6);rect(g,'#8a8478',x0,gt+120,x1-x0,3);for(let q=0;q<4;q++){const px=((q*520+60-cam)%2000+2000)%2000-60;rect(g,'#9a9488',px,gt+124,80,6)}}
  if(z[3]=='v'){/* banchina di Üsküdar e molo di legno di Haydarpasa */
   rect(g,'#9a9a98',x0,gt+3,x1-x0,86);for(let r=0;r<5;r++)rect(g,'rgba(0,0,0,.1)',x0,gt+16+r*17,x1-x0,1.4);
   const px0=Math.max(x0,21000-cam);if(px0<x1){rect(g,'#6a4e36',px0,gt+3,x1-px0,150);for(let r=0;r<9;r++)rect(g,'rgba(0,0,0,.2)',px0,gt+12+r*16,x1-px0,1.6);for(let k=-1;k<Math.ceil((x1-px0)/50)+2;k++){const px=Math.floor((cam+px0)/50)*50+k*50-cam;rect(g,'rgba(0,0,0,.14)',px,gt+3,2,150)}rect(g,'#3a2a1c',px0,gt+3,x1-px0,4)}}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1400,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const sg=cl((cam-14600)/700,0,1)*cl((16800-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};
const GREET_A={
ist_huseyin:"Günaydın, Pierpaolo! Sei in piedi presto: il ponte all’alba è dei pescatori e dei gabbiani. Io sono Hüseyin. Siediti sul secchio, il çay nel thermos è ancora caldo. Chiedimi quello che vuoi.",
ist_giustiniano:"Ave, Pierpaolo! Per tutti i santi, un viandante a quest’ora! Io sono Giustiniano, imperatore dei Romani. Questa cupola alle mie spalle è opera mia: guardala bene, poi chiedimi pure ciò che desideri.",
ist_kemal:"Buyur, Pierpaolo, buyur! Prego, accomodati. Sono Kemal, il çaycı: porto il tè a tutti i negozi del Bazar. Un bicchiere caldo è già pronto per te. Allora, che cosa vuoi sapere?",
ist_sinan:"Selam, evlat. Tu sei Pierpaolo, vero? Sono Sinan, l’architetto. Questa grande moschea è stata la mia fatica più lunga. Siediti all’ombra e chiedi: un vecchio muratore parla volentieri."
};
const GREET_B={
ist_nazli:"Hoş geldin, canım, benvenuto! Sono Nazlı e questa è la mia strada. Tu sei Pierpaolo, vero? Le voci corrono più veloci dei gatti, qui a Balat. Siediti sul gradino, la ciotola è piena: chiedi pure.",
ist_baris:"Ding-ding! Spostati, abi, che passa il tram! Scherzo, scherzo. Sono Barış e tu sei Pierpaolo, giusto? Sali sul predellino un momento: il mio tram è il più bello di İstiklal, e te lo racconto volentieri.",
ist_ahmet:"Buyur, buyur, vieni avanti! Sono Ahmet e questa è la miglior patata del Bosforo. Tu sei Pierpaolo, no? Ti vedo in faccia che hai fame, abi. Chiedi pure quello che vuoi, intanto la patata cuoce.",
ist_ece:"Hey, attento alla cima! Sono Ece, lavoro sul vapur. Tu sei Pierpaolo, vero? Qui a Haydarpaşa di notte c’è una pace che non trovi altrove: siediti sulla bitta e chiedimi quello che vuoi."
};
const INTRO="Istanbul, dall’alba alla notte. Cominci sul Ponte di Galata, tra i pescatori e i gabbiani, con il Corno d’Oro che si accende di rosa a Eminönü. Poi Sultanahmet con Santa Sofia e la Moschea Blu, il palazzo di Topkapı, il Gran Bazar con il suo tè e le lanterne, e la grande Süleymaniye di Sinan. Nel pomeriggio le case colorate di Balat e Fener; al tramonto la Torre di Galata e il tram rosso di İstiklal; la sera le luci di Ortaköy e Dolmabahçe sotto il ponte del Bosforo. A notte il traghetto ti porta in Asia, a Üsküdar e alla stazione di Haydarpaşa, e in fondo al molo ti aspetta un varco. Qui il tempo si piega: gli istanbulioti di ogni epoca ti vengono incontro, e la città è quella di oggi.";
const LKTXT=[
"Il Ponte di Galata: un ponte a due livelli lungo 490 metri e largo 42, costruito fra il 1992 e il 1994, con una parte che si alza per far passare le navi. Sul piano superiore decine di pescatori appoggiano le canne al parapetto, con secchi e gabbiani intorno; passa anche il tram. Sotto ci sono i ristoranti. I ponti precedenti risalgono al 1845: l’ultimo, galleggiante, bruciò nel 1992.",
"Eminönü e le barche del balık ekmek: lungo la banchina sono ormeggiate barche dipinte con la griglia accesa, che dondolano sull’acqua. Il balık ekmek è il panino con lo sgombro alla griglia, cipolla e insalata. Il fumo sale nell’aria fresca del mattino, mentre i traghetti, i vapur, attraccano ai pontili.",
"Yeni Cami, la Moschea Nuova: una cascata di cupole e due minareti sopra una scalinata piena di piccioni. I lavori iniziarono nel 1597, per volere di Safiye Sultan, e furono finiti nel 1665 da Turhan Hatice Sultan, madre di Mehmed IV. “Nuova” lo è solo di nome: ha più di tre secoli e mezzo.",
"Il Bazar delle Spezie: un lungo edificio a volta con cupole di piombo e ingressi ad arco. Dentro, sacchi di spezie, lokum, frutta secca e tè. Fu costruito nel 1664, insieme alla Yeni Cami. Si chiama anche Bazar Egiziano, Mısır Çarşısı, perché in origine vi arrivavano le merci d’Egitto.",
"Santa Sofia: una cupola enorme e bassa, sostenuta da semicupole e da massicci contrafforti color ocra e rosa, con quattro minareti ottomani. Fu costruita fra il 532 e il 537 sotto Giustiniano dagli architetti Antemio di Tralle e Isidoro di Mileto. La cupola è alta circa 55 metri dal pavimento. Fu chiesa, poi moschea dopo il 1453, museo nel 1935 e di nuovo moschea dal 2020.",
"L’Ippodromo: una lunga piazza dove un tempo si svolgevano le corse dei carri. Resta l’Obelisco di Teodosio, in granito rosa d’Egitto, di Tutmosi III, eretto qui nel 390; poi la Colonna Serpentina, che viene da Delfi, e la fontana tedesca, dono del Kaiser Guglielmo II di inizio Novecento. Nel 532, qui vicino, la rivolta di Nika costò la vita a molte persone.",
"La Moschea Blu: sei minareti e una cupola che scende a cascata di semicupole. Dentro, 21.043 piastrelle di İznik con più di cinquanta disegni. Fu costruita dal 1609 al 1617 da Sedefkar Mehmed Ağa, allievo di Sinan. Si racconta che il sultano avesse chiesto minareti “d’oro”, altın, e l’architetto avesse capito “sei”, altı.",
"La Cisterna Basilica: un piccolo ingresso con scale che porta sotto terra, in un grande salone d’acqua ferma con 336 colonne e due teste di Medusa alla base di due colonne. Fu costruita nel 532 sotto Giustiniano. In turco si chiama Yerebatan, il palazzo sommerso.",
"La Porta Imperiale e la Fontana di Ahmed III: Bâb-ı Hümâyûn, un alto portale di pietra fra due torri, è l’ingresso del palazzo di Topkapı. Davanti, la fontana rococò con il tetto a cinque cupolette, del 1728. Il palazzo fu iniziato nel 1459 da Mehmed II; Topkapı vuol dire “Porta del Cannone”, e all’inizio si chiamava Yeni Saray, il Palazzo Nuovo.",
"La Porta della Salutazione: due torri coniche fra mura di mattoni e pietra, con un giardino di platani e qualche gatto che dorme al sole. Apre sulla seconda corte del palazzo: oltre questa porta solo il sultano poteva entrare a cavallo.",
"La Torre della Giustizia e l’Harem: una torre alta con il tetto a cono domina i camini delle cucine e i tetti a cupola. Da una finestra con la grata dorata il sultano poteva ascoltare le sedute del Divano, il consiglio imperiale. Qui accanto sta l’Harem: centinaia di stanze, di cui solo poche visitabili.",
"Il Padiglione di Baghdad e la terrazza: un piccolo padiglione con la cupola e le piastrelle azzurre, costruito intorno al 1639 per il sultano Murad IV dopo la conquista di Baghdad. La terrazza davanti guarda il Bosforo e il Corno d’Oro: il punto migliore per vedere le navi passare.",
"Il Parco di Gülhane: platani, prati e aiuole di rose, l’antico giardino esterno del palazzo. Qui, nel 1839, fu letto l’editto di Gülhane, che avviò le riforme del Tanzimat. Oggi è un posto tranquillo dove i istanbulioti vengono a passeggiare e a fare picnic.",
"L’ingresso del Gran Bazar: un grande portale ad arco con decorazioni dipinte, insegne e lanterne. Il mercato fu fondato nel 1461 da Mehmed II, dopo la conquista. Ha più di sessanta vie coperte e una ventina di porte; la domenica è chiuso.",
"Il corridoio delle lanterne: volte dipinte, lampade di vetro a mosaico accese di mille colori, ceramiche e il nazar boncuğu, l’occhio blu contro il malocchio. I bottegai ti salutano dalla soglia e i ragazzi dei bar passano con i vassoi del çay, il tè nei bicchierini a tulipano.",
"Tappeti, oro e ceramica: tappeti e kilim appesi ai muri, vetrine di gioielli che scintillano, piatti dipinti di İznik e Kütahya. Il Bazar ha anche decine di han, i vecchi cortili dei mercanti. Qui si fa il pazarlık, la contrattazione: si discute, si ride e si beve un tè.",
"La Colonna di Costantino, Çemberlitaş: una colonna di porfido su un alto basamento, tenuta insieme da anelli di metallo. Fu eretta nel 330 per l’inaugurazione di Costantinopoli. Per gli incendi che l’hanno annerita si chiama anche “colonna bruciata”. Accanto passa il tram.",
"La Moschea Süleymaniye: una cupola alta 53 metri e larga circa 27, quattro minareti con dieci balconi (si dice perché Solimano era il decimo sultano) e un grande cortile. L’architetto Sinan la costruì fra il 1550 e il 1557 per Solimano il Magnifico, con ospedale, mensa, bagni e scuole. Dalla collina si vede il Corno d’Oro.",
"La Tomba di Sinan: una piccola tomba all’angolo del giardino, con finestre a grata e un albero accanto. Sinan la progettò da solo. Morì il 17 luglio 1588 e riposa a pochi passi dalle tombe di Solimano e di Hürrem. Un luogo di silenzio.",
"Una bozacı e il caffè turco: una vecchia bottega con le insegne, tavolini bassi e studenti. La boza è una bevanda fermentata di miglio, servita con ceci tostati e cannella; a pochi passi c’è una storica bottega dell’Ottocento. Il caffè turco, cotto nel cezve, è patrimonio UNESCO dal 2013.",
"L’Acquedotto di Valente: grandi arcate di pietra che scavalcano la strada, con il traffico che passa sotto. Risale al IV secolo, sotto l’imperatore Valente, e portava l’acqua alle cisterne della città. Dopo sedici secoli è ancora in piedi.",
"Le case colorate di Balat: facciate rosa, gialle e azzurre, balconi di legno con il bucato steso, scale ripide e gatti sulle soglie. Dalle finestre scendono i cestini con la corda per fare la spesa senza scendere. Qui hanno vissuto greci, ebrei e armeni.",
"La Chiesa di Ferro, San Stefano dei Bulgari: una chiesa tutta di ferro, grigio e verde, con cupolette e campanile, sulla riva del Corno d’Oro. Le parti furono prefabbricate a Vienna fra il 1893 e il 1896, circa 500 tonnellate, e arrivarono lungo il Danubio e il Mar Nero. Fu inaugurata l’8 settembre 1898; l’architetto fu Hovsep Aznavur.",
"Il “Castello rosso” di Fener: un grande edificio di mattoni rossi con torrette e merli sulla collina, la scuola greco-ortodossa, costruita alla fine dell’Ottocento. Si chiama Megali tou Genous Scholi, la “Grande Scuola della Nazione”. I istanbulioti lo chiamano il Castello Rosso.",
"Il Patriarcato ecumenico: una piccola chiesa di San Giorgio dietro un cortile, con la porta chiusa e la croce sul tetto. Da oltre quattro secoli è la sede del Patriarcato ortodosso, nel quartiere di Fener, il “faro” dei greci di Istanbul.",
"La Torre di Galata: una torre cilindrica di pietra con il tetto conico e il balconcino in cima. Fu costruita nel 1348 dai genovesi, la Christea Turris, ed è alta circa 67 metri. Dal 1717 servì ad avvistare gli incendi. Al tramonto si vedono il Corno d’Oro e la penisola storica color rame.",
"Il Tünel: un ingresso di pietra ad arco con le scritte e i binari che scendono. Fu inaugurato il 17 gennaio 1875 ed è la seconda metropolitana sotterranea più antica del mondo, dopo quella di Londra del 1863. È una sola corsa brevissima, fra Karaköy e İstiklal.",
"Il tram rosso di İstiklal: un tram nostalgico rosso, con asta e fili, che sfila fra la folla. Il viale, lungo 1,4 chilometri e pedonale, si chiamava Grande Rue de Péra. Qui i tram a cavalli girarono dal 1871; quello di oggi è stato rimesso in servizio nel 1990, fra il Tünel e Taksim.",
"Çiçek Pasajı e Balık Pazarı: una galleria ad arco con tavoli, lampadine e fiori, costruita a fine Ottocento dove prima sorgeva il teatro Naum, fino al 1870. Vicino c’è il Balık Pazarı, il mercato del pesce, con la chiesa armena di Üç Horan.",
"Taksim e il Monumento della Repubblica: la grande piazza di Istanbul, con il monumento di pietra e le sue figure, inaugurato nel 1928, opera dello scultore italiano Pietro Canonica. La sera ci sono luci, folla e il rumore della città.",
"La Torre dell’Orologio e la porta del Sultano di Dolmabahçe: un cancello con colonne e fregi, una fontana, il lungomare e, a fianco, la torre dell’orologio, costruita fra il 1890 e il 1895 da Sarkis Balyan per il sultano Abdülhamid II.",
"Il Palazzo di Dolmabahçe: una lunga facciata bianca sul Bosforo, con avancorpi e una scalinata d’acqua. Lo fece costruire Abdülmecid I, con gli architetti Garabet e Nigoğayos Balyan, dal 1843; il sultano vi si trasferì nel 1856. Ha 285 stanze, 46 sale, 6 hammam e un lampadario da 4,5 tonnellate. Qui Atatürk morì il 10 novembre 1938: l’orologio della sua stanza segna ancora le 9:05.",
"La Moschea di Ortaköy e il Ponte del Bosforo: una piccola moschea neobarocca sul mare, con due minareti sottili, e dietro il grande ponte sospeso illuminato. La Büyük Mecidiye Camii fu costruita dai Balyan intorno al 1854–56. Il ponte, aperto nel 1973 e lungo più di un chilometro e mezzo, oggi è il Ponte dei Martiri del 15 Luglio.",
"Le bancarelle di kumpir e il lungomare: grandi patate sul fuoco, vaschette colorate di condimenti, lampadine, tavolini e tè nei bicchierini a tulipano. Al tramonto la gente passeggia lungo il Bosforo.",
"La piazza di Üsküdar e la Moschea di Mihrimah: sul lato asiatico, un molo e una piazza con piccioni e venditori di simit. La moschea di Mihrimah, con la cupola e due minareti, fu costruita da Sinan a metà Cinquecento per la figlia di Solimano, Mihrimah.",
"La Torre della Fanciulla, Kız Kulesi: una piccola torre su uno scoglio a circa 200 metri dalla riva, illuminata sul Bosforo scuro. Le origini sono bizantine, intorno al 1110; fu ricostruita più volte, nel 1832 sotto Mahmud II. Si dice che una principessa vi fosse nascosta per sfuggire a un serpente; si dice anche la storia di Ero e Leandro.",
"Il vapur e il molo: un traghetto bianco e rosso con la ciminiera e le luci accese, passeggeri, gabbiani, bitte e cime sul pontile. I traghetti uniscono l’Europa e l’Asia dal 1851, e a bordo si beve il tè.",
"La Stazione di Haydarpaşa: un grande edificio neoclassico tedesco con due torri, tetti a mansarda e uno scalone sull’acqua, poggiato su 1.100 pali di legno lunghi 21 metri. Gli architetti furono Otto Ritter e Helmuth Conu; fu inaugurata il 4 novembre 1909 come capolinea della ferrovia di Baghdad. Nel 2010 un incendio distrusse il tetto; oggi non partono più treni ed è in restauro.",
"Il molo e il varco: in fondo al molo, la luce di un altro mondo ti chiama."
];

/* =====================================================================
   OGGETTI NUOVI DI ISTANBUL (nomi "ist...") — definiti qui, non in elementi.js
   ===================================================================== */
/* moschea imperiale: cascata di cupole, minareti, finestre; o = {w,bh,r,h,mins,dc,wc,sd,arc,lt} */
const mosq=(g,x,y,k,o,seed)=>{const {w,bh,r,h,mins,dc,wc}=o;
 mins.forEach(m=>mn(g,x+m[0],y,m[1],m[2],o.mc||wc,m[3],dc));
 rect(g,wc,x-w,y-bh,2*w,bh);rect(g,'rgba(255,255,255,.14)',x-w,y-bh,6,bh);rect(g,'rgba(0,0,0,.14)',x+w-14,y-bh,14,bh);
 for(let q=0;q<Math.floor(w/20);q++){const wx=x-w+14+q*(2*w-28)/(Math.floor(w/20)-1);for(let rr=0;rr<2;rr++){ar(g,'#3a2e24',wx-5,y-bh+26+rr*34+22,10,22);rect(g,lit(k,seed+q*3+rr)?LIT:'#7a9ab4',wx-3.5,y-bh+26+rr*34+2,7,16)}}
 rect(g,'rgba(0,0,0,.2)',x-w-3,y-bh-4,2*w+6,6);
 if(o.sd){dm(g,dc,x-w*.62,y-bh-4,r*.72,h*.7);dm(g,dc,x+w*.62,y-bh-4,r*.72,h*.7);dm(g,dc,x-w*.92,y-bh-4,r*.4,h*.4);dm(g,dc,x+w*.92,y-bh-4,r*.4,h*.4)}
 rect(g,wc,x-r*1.06,y-bh-30,r*2.12,30);rect(g,'rgba(0,0,0,.16)',x-r*1.06,y-bh-6,r*2.12,6);
 for(let q=0;q<8;q++)rect(g,lit(k,seed+q)?LIT:'#6a86a4',x-r*.95+q*(r*1.9-6)/7,y-bh-24,6,14);
 dm(g,dc,x,y-bh-30,r,h,1);
 if(o.arc){const n=Math.floor(w*2/38);for(let q=0;q<n;q++)arco(g,'#2a1e14',x-w+8+q*(2*w-16)/n,y,(2*w-16)/n-8,50);rect(g,wc,x-w,y-56,2*w,5);for(let q=0;q<n;q++)dm(g,dc,x-w+8+(q+.5)*(2*w-16)/n,y-56,((2*w-16)/n-6)/2,10)}
 if(k>.2)glow(g,x,y-bh,w*1.4,'255,210,130',.2*k)};
/* ---------- Zona 1 · alba: Ponte di Galata, barche del balık ekmek, Yeni Cami, Bazar delle Spezie ---------- */
const pesc=(g,x,t,i)=>{const d=i%2?1:-1;pers(g,x,GT+36,t,{f:d,s:.64,ph:i,skin:'#d8a078',top:['#6a7a8a','#8a5a3a','#3a5a7a','#a89878','#5a6a4a'][i%5],bot:'#3a3a46',hair:['#b8b8b8','#2a1a10','#4a3a2a'][i%3]});
 const tx=x+d*58,ty=GT-58;ln(g,'#4a3a22',1.6,[x+d*8,GT-12,tx,ty]);ln(g,'rgba(255,255,255,.65)',.8,[tx,ty,tx,GT-18+Math.sin(t*2+i)*1.5]);dot(g,'#e8402a',tx,GT-18+Math.sin(t*2+i)*1.5,1.8);
 rect(g,'#3a6a9a',x-d*20-4,GT+28,9,10);rect(g,'#8aa8c8',x-d*20-4,GT+28,9,2);if(i%3==0)for(let q=0;q<2;q++)rect(g,'#a8b4bc',x-d*20-6+q*5,GT+24,4,2)};
P('istponte',(g,x,y,t,a,k)=>{const by=GT+4,s=a||1;
 for(let q=-9;q<=9;q++)rect(g,IRN,x+q*26-1,by-40,2.4,40);rect(g,IRN,x-236,by-42,472,3);rect(g,IRN,x-236,by-22,472,2);rect(g,'rgba(255,255,255,.14)',x-236,by-42,472,1);
 [-200,200].forEach(lx=>{rect(g,IRN,x+lx-2,by-120,4,120);ln(g,IRN,2,[x+lx,by-116,x+lx+8,by-128,x+lx+16,by-124]);dot(g,k>.15?LIT:'#e8dcc0',x+lx+16,by-120,5);if(k>.15)glow(g,x+lx+16,by-120,44,'255,214,130',.4*k)});
 for(let q=0;q<5;q++)pesc(g,x-190+q*95+hr(q+s*7)*18,t,q+s*5);
 for(let q=0;q<3;q++){const gx=x-150+q*130+hr(q+s)*30,gy=by-44;g.fillStyle=tn('#f4f4f6');g.beginPath();g.ellipse(gx,gy,6,3,0,0,7);g.fill();dot(g,'#f4f4f6',gx+5,gy-2,2);rect(g,'#e8a82a',gx+7,gy-2,2,1)}});
const gabbiano=(g,x,y)=>{el(g,'#f4f4f6',x,y,6,3.4);dot(g,'#f4f4f6',x+5,y-2.5,2.4);rect(g,'#e8a82a',x+7,y-3,3,1.2);rect(g,'#9aa0aa',x-5,y-3,8,2)};
P('istbarca',(g,x,y,t,a,k)=>{const by=GT-2,bob=Math.sin(t*1.8)*2;g.save();g.translate(x,by+bob);g.rotate(Math.sin(t*1.5)*.018);
 poly(g,'#b8402a',[[-100,-28],[100,-28],[82,0],[-82,0]]);rect(g,'#f4f0e6',-96,-24,192,5);rect(g,'#7a2a1a',-82,-6,164,6);rect(g,'rgba(255,255,255,.18)',-98,-28,192,3);
 for(let q=0;q<7;q++)rect(g,['#e8c82a','#2a6aa8','#c8402a'][q%3],-90+q*28,-70,10,6),ln(g,'rgba(60,40,20,.6)',.8,[-85+q*28,-64,-85+q*28,-40]);
 rect(g,'#8a5a32',-72,-52,112,24);rect(g,'#6a4222',-72,-52,112,4);rect(g,'#2a2a2e',-58,-62,54,10);
 for(let q=0;q<6;q++){const fl=Math.sin(t*9+q*2);poly(g,q%2?'#ff8a1a':'#ffc02a',[[-56+q*9,-62],[-52+q*9,-72-fl*3],[-48+q*9,-62]])}
 for(let q=0;q<4;q++)el(g,'#a8b0b8',-50+q*13,-64,7,2.6);for(let q=0;q<5;q++)dot(g,'rgba(214,214,220,'+(.42-q*.07)+')',-28+Math.sin(t*2+q)*6+q*3,-76-q*14-(t*18+q*8)%10,5+q*2);
 rect(g,'#f4e8c8',50,-46,26,18);rect(g,'#e8c870',50,-50,26,5);rect(g,'#7aa844',54,-44,5,4);rect(g,'#c8402a',62,-44,5,4);
 pers(g,0,-26,t,{f:1,s:.5,ph:2,skin:'#d8a078',top:'#f4f0e6',bot:'#2a2a36',hair:'#2a1a10'});pers(g,86,-28,t,{f:-1,s:.5,ph:4,skin:'#c8946a',top:'#3a6a8a',bot:'#2a2a36',hair:'#2a1a10'});
 txt(g,'BALIK EKMEK',-14,-92,9,'#c8402a','bold');g.restore();
 for(let q=0;q<3;q++){const bx=x+120+q*30;rect(g,'#6a4a2a',bx,GT+14,3,8);rect(g,'#8a5a32',bx-8,GT+11,19,3)}
 if(k>.15)glow(g,x,by-60,70,'255,160,60',.3*k)});
P('istyeni',(g,x,y,t,a,k)=>{mosq(g,x,y,k,{w:190,bh:100,r:78,h:62,sd:1,arc:1,dc:LD,wc:'#d8cdb0',mins:[[-215,250,9,2],[215,250,9,2]]},3);
 for(let q=0;q<5;q++)rect(g,'rgba(0,0,0,.08)',x-190,y-4+q*0,380,1);
 for(let q=0;q<7;q++){const px=x-120+q*40+Math.sin(t*.4+q)*0;gabbiano(g,px,y-1);}
 for(let q=0;q<6;q++)pp(g,x-150+q*50,y+20,t,q,.56)});
P('istspezie',(g,x,y,t,a,k)=>{const w=215;rect(g,'#d8c8a0',x-w,y-124,2*w,124);rect(g,'rgba(255,255,255,.14)',x-w,y-124,6,124);rect(g,'rgba(0,0,0,.14)',x+w-12,y-124,12,124);
 for(let q=0;q<14;q++)rect(g,'rgba(120,80,40,.1)',x-w,y-120+q*9,2*w,1.4);poly(g,LD,[[x-w-4,y-124],[x-w+16,y-138],[x+w-16,y-138],[x+w+4,y-124]]);rect(g,'rgba(255,255,255,.14)',x-w+16,y-138,2*w-32,3);
 for(let q=0;q<5;q++)dm(g,LD2,x-170+q*85,y-138,28,22,1);
 ar(g,'#2a1e14',x-34,y,68,96);ar(g,k>.1?'#f6d890':'#5a4a38',x-28,y-4,56,86);for(let q=0;q<3;q++)rect(g,'rgba(0,0,0,.3)',x-28+q*18,y-80,2,76);
 rect(g,'#1c3a5a',x-60,y-114,120,16);txt(g,'MISIR ÇARŞISI',x,y-102,9,'#f2d26a');
 [-150,-100,100,150].forEach((ox,i)=>{ar(g,'#2a1e14',x+ox-16,y,32,68);rect(g,k>.1?'#f6d890':'#6a5a48',x+ox-12,y-60,24,56)});
 const SP=['#c8402a','#e8a82a','#8a5a22','#d86a1a','#5a8a3a','#a82a3a','#e8d8a0'];for(let q=0;q<14;q++){const sx=x-200+q*30;poly(g,SP[q%7],[[sx-12,y+6],[sx,y-12-hr(q)*8],[sx+12,y+6]]);rect(g,'#b8a078',sx-14,y+4,28,7)}
 for(let q=0;q<9;q++)ln(g,'#c8402a',2.4,[x-190+q*44,y-92,x-190+q*44+2,y-70]);
 for(let q=0;q<7;q++)rect(g,['#c8402a','#2a8a5a','#e8a82a'][q%3],x-206+q*70,y-94,36,7);
 pp(g,x-60,y+30,t,1,.56);pp(g,x+80,y+32,t,4,.56);pp(g,x+110,y+30,t,2,.56)});
/* ---------- Zona 2 · mattina: Santa Sofia, Ippodromo, Moschea Blu, Cisterna ---------- */
P('istsofia',(g,x,y,t,a,k)=>{mn(g,x-150,y,250,9,'#e4d4b8',2,LD2);mn(g,x+150,y,250,9,'#e4d4b8',2,LD2);
 poly(g,'#c4826c',[[x-118,y],[x-118,y-140],[x-160,y-108],[x-186,y]]);poly(g,'#c4826c',[[x+118,y],[x+118,y-140],[x+160,y-108],[x+186,y]]);
 poly(g,'#b87460',[[x-186,y],[x-160,y-108],[x-150,y-100],[x-176,y]]);poly(g,'#b87460',[[x+186,y],[x+160,y-108],[x+150,y-100],[x+176,y]]);
 rect(g,'#d9a690',x-124,y-150,248,150);for(let q=0;q<8;q++)rect(g,'#ecd6bc',x-124,y-146+q*18,248,4);rect(g,'rgba(255,255,255,.12)',x-124,y-150,6,150);rect(g,'rgba(0,0,0,.14)',x+110,y-150,14,150);
 for(let q=0;q<7;q++){const wx=x-100+q*33;ar(g,'#3a2e24',wx-6,y-60,12,28);rect(g,lit(k,q+9)?LIT:'#7a9ab4',wx-4,y-84,8,20);ar(g,'#3a2e24',wx-6,y-110,12,28);rect(g,lit(k,q+19)?LIT:'#7a9ab4',wx-4,y-134,8,20)}
 ar(g,'#2a1e14',x-22,y,44,62);ar(g,k>.1?'#f6d890':'#6a5a48',x-17,y-4,34,52);
 dm(g,LD,x-112,y-150,56,52);dm(g,LD,x+112,y-150,56,52);dm(g,LD,x-170,y-100,30,26);dm(g,LD,x+170,y-100,30,26);
 rect(g,'#d9a690',x-72,y-188,144,40);for(let q=0;q<10;q++)rect(g,lit(k,q+33)?LIT:'#6a86a4',x-66+q*14.4,y-182,6,16);
 dm(g,'#8a929c',x,y-188,76,56,1);poly(g,'rgba(255,255,255,.08)',[[x-60,y-196],[x-20,y-240],[x-30,y-196]]);
 if(k>.2)glow(g,x,y-120,190,'255,210,130',.22*k);for(let q=0;q<4;q++)pp(g,x-90+q*55,y+24,t,q+2,.56)});
P('istippo',(g,x,y,t,a,k)=>{
 /* obelisco di Teodosio */
 rect(g,ST3,x-146,y-8,52,8);rect(g,ST2,x-140,y-34,40,28);rect(g,'rgba(0,0,0,.14)',x-118,y-34,18,28);for(let q=0;q<4;q++)rect(g,'rgba(60,40,20,.5)',x-132+q*8,y-26,4,12);
 poly(g,'#c8856a',[[x-132,y-34],[x-108,y-34],[x-114,y-212],[x-126,y-212]]);rect(g,'rgba(255,255,255,.16)',x-130,y-212,4,178);poly(g,'#c8a048',[[x-126,y-212],[x-120,y-228],[x-114,y-212]]);
 for(let q=0;q<12;q++){rect(g,'rgba(80,40,20,.42)',x-123+(q%2)*3,y-52-q*14,3,6);rect(g,'rgba(80,40,20,.3)',x-119+(q%2)*3,y-56-q*14,3,3)}
 /* colonna serpentina */
 el(g,ST3,x,y-3,24,6);el(g,'#2a2a2a',x,y-5,15,3);for(let q=0;q<12;q++){const yy=y-6-q*6;rect(g,q%2?'#6a5a2a':'#7e6c34',x-7+Math.sin(q*.9)*1,yy-6,14,6);ln(g,'rgba(20,14,4,.5)',1,[x-7,yy,x+7,yy-5])}
 poly(g,'#6a5a2a',[[x-7,y-78],[x-9,y-88],[x-3,y-84],[x,y-92],[x+3,y-84],[x+9,y-88],[x+7,y-78]]);
 /* fontana tedesca */
 rect(g,ST3,x+80,y-10,110,10);rect(g,ST2,x+90,y-20,90,12);for(let q=0;q<5;q++)rect(g,'#c8c0a8',x+94+q*19,y-92,6,72),rect(g,'rgba(255,255,255,.3)',x+94+q*19,y-92,2,72);
 rect(g,'#b8a888',x+88,y-96,94,6);dm(g,'#c8a048',x+135,y-96,50,44,1);for(let q=-2;q<=2;q++)ln(g,'rgba(120,70,10,.5)',1,[x+135+q*10,y-96,x+135+q*8,y-120,x+135+q*3,y-138]);
 rect(g,'#2a6a5a',x+88,y-102,94,6);rect(g,'rgba(120,200,255,.5)',x+96,y-14,80,4);
 for(let q=0;q<3;q++)pp(g,x+30+q*30,y+26,t,q+1,.56)});
P('istblu',(g,x,y,t,a,k)=>{mosq(g,x,y,k,{w:175,bh:96,r:72,h:62,sd:1,arc:1,dc:'#7a8aa8',wc:'#e4dcc8',mins:[[-208,270,10,3],[208,270,10,3],[-148,250,9,2],[148,250,9,2],[-104,225,8,2],[104,225,8,2]]},5);
 rect(g,'#2a5a9a',x-70,y-82,140,6);for(let q=0;q<12;q++)rect(g,'#f4f0e6',x-66+q*11,y-80,4,2);for(let q=0;q<5;q++)pp(g,x-100+q*50,y+24,t,q+3,.56)});
P('istcisterna',(g,x,y,t,a,k)=>{const w=96;rect(g,'#d0c4a4',x-w,y-70,2*w,70);rect(g,'rgba(255,255,255,.14)',x-w,y-70,6,70);poly(g,TIL,[[x-w-6,y-70],[x-w+14,y-90],[x+w-14,y-90],[x+w+6,y-70]]);
 for(let q=0;q<5;q++)rect(g,'rgba(0,0,0,.1)',x-w,y-66+q*10,2*w,1.2);arco(g,'#14110f',x-30,y,60,56);for(let q=0;q<6;q++)rect(g,'rgba(110,200,170,'+(.5-q*.07)+')',x-24+q*7,y-50+q*9,50-q*8,6);
 for(let q=0;q<2;q++)col(g,x-24+q*48,y-6,30,5,'#d8d0b8');rect(g,'#1c3a5a',x-50,y-78,100,14);txt(g,'YEREBATAN SARNICI',x,y-68,7,'#f2d26a');
 dot(g,'#4a8a6a',x+64,y-34,12);dot(g,'#6aaa8a',x+64,y-34,8);for(let q=0;q<5;q++)dot(g,'#3a6a52',x+58+Math.cos(q*1.3)*8,y-34+Math.sin(q*1.3)*8,2);
 if(k>.1)glow(g,x,y-30,70,'110,230,190',.3*k);gente(g,x-70,y+20,t,3,41);gente(g,x+80,y+22,t,2,43)});
/* ---------- Zona 3 · tarda mattina: Topkapı e Gülhane ---------- */
const torre=(g,x,y,h,w,c,cap)=>{rect(g,c,x-w/2,y-h,w,h);rect(g,'rgba(255,255,255,.16)',x-w/2,y-h,w*.25,h);rect(g,'rgba(0,0,0,.14)',x+w*.12,y-h,w*.38,h);for(let q=0;q<h/12;q++)rect(g,'rgba(0,0,0,.07)',x-w/2,y-h+q*12,w,1);merli(g,c,x-w/2-3,y-h,w+6,6);poly(g,cap||LD,[[x-w/2-5,y-h-6],[x,y-h-w*1.5],[x+w/2+5,y-h-6]]);rect(g,'rgba(255,255,255,.14)',x-w*.18,y-h-w*1.1,w*.14,w*.9);ln(g,GD,1.2,[x,y-h-w*1.5,x,y-h-w*1.5-7]);dot(g,GD,x,y-h-w*1.5-8,2)};
P('istporta',(g,x,y,t,a,k)=>{
 torre(g,x-96,y,210,48,'#d8cdb0');torre(g,x+96,y,210,48,'#d8cdb0');rect(g,'#d8cdb0',x-72,y-190,144,190);rect(g,'rgba(0,0,0,.1)',x-72,y-190,144,6);merli(g,'#d8cdb0',x-72,y-190,144,9);
 for(let q=0;q<16;q++)rect(g,'rgba(0,0,0,.07)',x-72,y-186+q*11,144,1);ar(g,'#2a1e14',x-30,y,60,118);ar(g,k>.1?'#f6d890':'#4a3a2e',x-24,y-4,48,106);for(let q=0;q<6;q++)rect(g,'#2a2a2e',x-24+q*8,y-110,2,106);
 rect(g,'#2a5a8a',x-42,y-168,84,30);rect(g,GD,x-42,y-168,84,2);rect(g,GD,x-42,y-140,84,2);for(let q=0;q<7;q++)ln(g,GD,1.4,[x-36+q*12,y-142,x-32+q*12,y-160,x-28+q*12,y-142]);
 for(let q=0;q<2;q++)ar(g,'#3a2e24',x-76+q*134,y-130,10,26);
 /* fontana di Ahmed III */
 const fx=x+200;rect(g,ST3,fx-56,y-8,112,8);rect(g,'#e8dcc0',fx-46,y-78,92,70);rect(g,'rgba(0,0,0,.12)',fx+30,y-78,16,70);for(let q=0;q<3;q++){ar(g,'#2a6a8a',fx-36+q*26,y-16,20,46);rect(g,GD,fx-36+q*26,y-52,20,2)}
 poly(g,'#6a8a7a',[[fx-64,y-78],[fx-48,y-96],[fx+48,y-96],[fx+64,y-78]]);rect(g,'#3a5a4a',fx-64,y-80,128,3);for(let q=-2;q<=2;q++)dm(g,'#6a8a7a',fx+q*28,y-96,q==0?20:13,q==0?18:11,1);
 for(let q=0;q<4;q++)pp(g,x-40+q*34,y+24,t,q,.56)});
P('istsalut',(g,x,y,t,a,k)=>{
 const C=['#e8dcc0','#c8a888'];for(let s=-1;s<=1;s+=2){const tx=x+s*84;rect(g,'#d8c4a0',tx-24,y-170,48,170);for(let q=0;q<14;q++)rect(g,C[q%2],tx-24,y-170+q*12,48,6);rect(g,'rgba(255,255,255,.15)',tx-24,y-170,8,170);rect(g,'rgba(0,0,0,.15)',tx+10,y-170,14,170);poly(g,LD,[[tx-30,y-170],[tx,y-250],[tx+30,y-170]]);rect(g,'rgba(255,255,255,.14)',tx-8,y-232,6,56);dot(g,GD,tx,y-252,3);ar(g,'#3a2e24',tx-5,y-120,10,24)}
 rect(g,'#d8c4a0',x-60,y-130,120,130);for(let q=0;q<11;q++)rect(g,C[q%2],x-60,y-130+q*12,120,6);merli(g,'#d8c4a0',x-60,y-130,120,8);
 ar(g,'#2a1e14',x-26,y,52,96);ar(g,k>.1?'#f6d890':'#4a3a2e',x-21,y-4,42,86);plat(g,x-190,y,1.1,t);plat(g,x+200,y,1.2,t);
 for(let q=0;q<4;q++)pp(g,x-30+q*22,y+26,t,q+1,.56)});
P('istgiust',(g,x,y,t,a,k)=>{
 rect(g,'#c8b894',x-250,y-52,500,52);merli(g,'#c8b894',x-250,y-52,500,9);for(let q=0;q<14;q++)ar(g,'#3a2e24',x-236+q*34,y-14,14,26);for(let q=0;q<14;q++)rect(g,lit(k,q+5)?LIT:'#6a86a4',x-234+q*34,y-40,10,12);
 for(let q=0;q<6;q++){const cx=x-220+q*38;rect(g,'#f0e8d8',cx-9,y-130,18,80);rect(g,'rgba(0,0,0,.12)',cx+2,y-130,7,80);poly(g,'#8a929c',[[cx-12,y-130],[cx,y-160],[cx+12,y-130]])}
 dm(g,LD,x-4,y-52,36,24,1);dm(g,LD,x+60,y-52,30,20);dm(g,LD,x+120,y-52,26,18);
 const tx=x+190;rect(g,'#d8cdb0',tx-34,y-250,68,250);for(let q=0;q<20;q++)rect(g,'rgba(0,0,0,.07)',tx-34,y-248+q*12,68,1);rect(g,'rgba(255,255,255,.15)',tx-34,y-250,10,250);rect(g,'rgba(0,0,0,.14)',tx+16,y-250,18,250);
 for(let q=0;q<4;q++){ar(g,'#3a2e24',tx-8,y-210+q*0,16,34);rect(g,lit(k,q+11)?LIT:'#6a86a4',tx-5,y-206,10,22);break}
 ar(g,'#3a2e24',tx-8,y-160,16,34);ar(g,'#3a2e24',tx-8,y-110,16,34);rect(g,'#c8a888',tx-40,y-254,80,8);poly(g,LD,[[tx-40,y-254],[tx,y-330],[tx+40,y-254]]);rect(g,'rgba(255,255,255,.14)',tx-12,y-316,8,56);dot(g,GD,tx,y-334,3);
 for(let q=0;q<3;q++)pp(g,x-110+q*40,y+24,t,q+4,.56)});
P('istbagdad',(g,x,y,t,a,k)=>{
 rect(g,'#e0d8c8',x-150,y-26,300,26);rect(g,'rgba(0,0,0,.1)',x-150,y-26,300,3);for(let q=0;q<22;q++){rect(g,'#c8c0ac',x-146+q*14,y-46,3,20)}rect(g,'#c8c0ac',x-150,y-48,300,3);
 poly(g,'#8a929c',[[x-96,y-100],[x-80,y-114],[x+80,y-114],[x+96,y-100]]);rect(g,'#6a727c',x-96,y-102,192,4);
 rect(g,'#e8e0cc',x-80,y-102,160,76);rect(g,'rgba(0,0,0,.1)',x+60,y-102,20,76);for(let q=0;q<3;q++){ar(g,'#1c3a6a',x-62+q*50,y-28,34,60);ar(g,'#2a6aa8',x-58+q*50,y-32,26,50);for(let w=0;w<3;w++)rect(g,'#f4f0e6',x-56+q*50+w*8,y-72,4,4);rect(g,GD,x-62+q*50,y-90,34,2)}
 rect(g,'#2a6aa8',x-80,y-110,160,8);for(let q=0;q<16;q++)rect(g,GD,x-78+q*10,y-108,5,3);
 dm(g,'#c8a048',x,y-114,40,40,1);poly(g,'rgba(255,255,255,.12)',[[x-30,y-120],[x-14,y-150],[x-22,y-120]]);
 if(k>.2)glow(g,x,y-70,120,'255,210,130',.16*k);for(let q=0;q<3;q++){rect(g,'#6a4a2a',x-130+q*0,y-26,0,0)}
 for(let q=0;q<2;q++){rect(g,'#7a5a3a',x+110+q*18,y-38,10,12);poly(g,'#4a8a3a',[[x+108+q*18,y-38],[x+115+q*18,y-58],[x+122+q*18,y-38]])}
 pp(g,x-120,y+22,t,3,.56);pp(g,x+130,y+24,t,5,.56)});
P('istgulhane',(g,x,y,t,a,k)=>{
 plat(g,x-150,y,1.2,t);plat(g,x+150,y,1.3,t);plat(g,x-30,y,.9,t);
 for(let b=0;b<3;b++){const bx=x-120+b*110;rect(g,'#4a8a3a',bx,y+6,80,18);for(let q=0;q<16;q++)dot(g,['#e8405a','#f08aa0','#f2c82a','#f4f0e6','#c82a4a'][q%5],bx+4+q*5,y+8+(q%3)*5,2.4);rect(g,'rgba(0,0,0,.15)',bx,y+22,80,3)}
 rect(g,IRN,x+70,y-10,4,10);for(let q=0;q<3;q++)pp(g,x-40+q*28,y+34,t,q,.56)});
/* ---------- Zona 4 · mezzogiorno: Gran Bazar ---------- */
P('istbazar',(g,x,y,t,a,k)=>{
 rect(g,'#d8c8a8',x-170,y-200,340,200);rect(g,'rgba(255,255,255,.14)',x-170,y-200,8,200);rect(g,'rgba(0,0,0,.14)',x+152,y-200,18,200);for(let q=0;q<16;q++)rect(g,'rgba(0,0,0,.06)',x-170,y-196+q*12,340,1);
 merli(g,'#e8a82a',x-170,y-200,340,12);for(let q=0;q<9;q++)rect(g,q%2?'#2a5aa8':'#c8402a',x-166+q*38,y-196,34,5);
 ar(g,'#2a1e14',x-62,y,124,170);ar(g,k>.1?'#f6c870':'#4a3a2e',x-54,y-4,108,156);
 g.save();g.lineWidth=12;g.setLineDash([12,12]);g.strokeStyle='#c8402a';g.beginPath();g.arc(x,y-108,64,Math.PI,2*Math.PI);g.stroke();g.lineDashOffset=12;g.strokeStyle='#f4f0e6';g.beginPath();g.arc(x,y-108,64,Math.PI,2*Math.PI);g.stroke();g.restore();
 rect(g,'#1c3a5a',x-70,y-186,140,20);rect(g,GD,x-70,y-186,140,2);txt(g,'KAPALIÇARŞI',x,y-171,11,'#f2d26a');
 const G=['#c8402a','#2a6aa8','#e8a82a','#3a8a5a','#8a3a9a'];for(let q=0;q<6;q++){rect(g,G[q%5],x-52+q*18,y-130+(q%2)*8,12,24);ln(g,'#5a4a3a',1,[x-46+q*18,y-130+(q%2)*8,x-46+q*18,y-146])}
 for(let q=0;q<2;q++){const sx=q?x+112:x-148;rect(g,'#7a5a3a',sx,y-110,38,110);for(let r=0;r<4;r++)rect(g,G[(r+q)%5],sx+4,y-104+r*24,30,20)}
 for(let q=0;q<6;q++){const lx=x-130+q*52;ln(g,'#3a2a1a',1,[lx,y-60,lx,y-86]);dot(g,['#d8402a','#2a8a5a','#2a5aa8','#e8a82a'][q%4],lx,y-84,6);if(k>.1)glow(g,lx,y-84,26,'255,200,120',.4*k)}
 for(let q=0;q<6;q++)pp(g,x-90+q*36,y+28,t,q,.58)});
const lamp=(g,x,y,c,k)=>{ln(g,'#3a2a1a',1,[x,y-26,x,y]);poly(g,c,[[x-8,y+2],[x+8,y+2],[x+4,y+14],[x-4,y+14]]);el(g,c,x,y,8,6);dot(g,'rgba(255,255,255,.4)',x-3,y-2,1.6);glow(g,x,y+4,34,'255,190,100',.4+.15*k)};
P('istlanterne',(g,x,y,t,a,k)=>{
 rect(g,'#c8b898',x-170,y-200,340,200);for(let q=0;q<9;q++)rect(g,q%2?'#e8dcc0':'#b8553a',x-170+q*38,y-200,38,24);poly(g,'#a89878',[[x-170,y-176],[x-130,y-196],[x+130,y-196],[x+170,y-176]]);
 for(let q=0;q<3;q++){rect(g,'#6a4a2a',x-160+q*110,y-90,100,12);rect(g,'#8a6a3a',x-160+q*110,y-78,100,78)}
 const C=['#d8402a','#2a8a5a','#2a5aa8','#e8a82a','#8a2a8a','#e86a1a'];for(let r=0;r<3;r++)for(let q=0;q<7;q++){const lx=x-150+q*50+(r%2)*22,ly=y-170+r*28+Math.sin(t*1.2+q+r)*1.4;lamp(g,lx,ly,C[(q+r*2)%6],k)}
 for(let q=0;q<5;q++){const cx=x-130+q*60;g.fillStyle='#f4f0e6';g.beginPath();g.arc(cx,y-106,13,0,7);g.fill();dot(g,'#2a5aa8',cx,y-106,10);dot(g,'#f4f0e6',cx,y-106,6);dot(g,'#14110f',cx,y-106,3)}
 for(let q=0;q<4;q++){const cx=x-120+q*80,cy=y-44;dot(g,'#f4f0e6',cx,cy,14);for(let w=0;w<8;w++)dot(g,w%2?'#2a5aa8':'#c8402a',cx+Math.cos(w*.8)*9,cy+Math.sin(w*.8)*9,2.4);dot(g,'#e8a82a',cx,cy,4)}
 for(let q=0;q<4;q++)pp(g,x-90+q*60,y+28,t,q+1,.58)});
const tappeto=(g,x,y,w,h,c1,c2)=>{rect(g,c1,x,y,w,h);rect(g,c2,x+3,y+3,w-6,h-6);rect(g,c1,x+7,y+7,w-14,h-14);poly(g,c2,[[x+w/2,y+11],[x+w-12,y+h/2],[x+w/2,y+h-11],[x+12,y+h/2]]);dot(g,c1,x+w/2,y+h/2,w*.12);for(let q=0;q<h/6;q++)rect(g,'rgba(255,255,255,.08)',x,y+q*6,w,1)};
P('isttappeti',(g,x,y,t,a,k)=>{
 rect(g,'#c8b898',x-170,y-196,340,196);rect(g,'#6a4a2a',x-170,y-170,340,5);
 const R=[['#8a1a2a','#d8a24a'],['#1a3a6a','#e8d8b0'],['#a8402a','#2a5a4a'],['#2a4a3a','#e8a82a'],['#6a2a4a','#e8d8b0']];
 for(let q=0;q<5;q++){const rx=x-160+q*62;ln(g,'#3a2a1a',1.2,[rx,y-168,rx+54,y-168]);tappeto(g,rx,y-166,54,70+(q%2)*16,R[q][0],R[q][1])}
 rect(g,'#3a2a1a',x-160,y-86,320,5);for(let q=0;q<4;q++)tappeto(g,x-150+q*80,y-82,66,50,R[(q+2)%5][0],R[(q+2)%5][1]);
 rect(g,'#2a2a2e',x+40,y-60,110,60);rect(g,k>.1?'#fff2c8':'#c8d4dc',x+44,y-56,102,52);for(let q=0;q<9;q++){dot(g,'#f2c82a',x+54+q*10,y-30+(q%2)*8,3.4);dot(g,'#fff6c0',x+53+q*10,y-31+(q%2)*8,1.2)}ln(g,'#f2c82a',1.6,[x+50,y-46,x+80,y-40,x+110,y-46,x+140,y-40]);
 for(let q=0;q<3;q++){el(g,['#2a5aa8','#f4f0e6','#c8402a'][q],x-140+q*34,y-14,11,14);rect(g,'#f4f0e6',x-143+q*34,y-30,6,9)}
 pp(g,x-60,y+30,t,1,.58);pp(g,x+30,y+32,t,3,.58)});
P('istcolonna',(g,x,y,t,a,k)=>{
 rect(g,ST3,x-34,y-8,68,8);rect(g,ST2,x-28,y-18,56,10);rect(g,ST3,x-22,y-52,44,34);rect(g,'rgba(0,0,0,.12)',x+8,y-52,14,34);rect(g,ST2,x-26,y-56,52,5);
 for(let q=0;q<7;q++){rect(g,'#8a5a5e',x-14,y-60-q*22,28,22);rect(g,'rgba(255,255,255,.14)',x-14,y-60-q*22,7,22);rect(g,'rgba(0,0,0,.14)',x+4,y-60-q*22,10,22);rect(g,'#3a3a3e',x-16,y-62-q*22,32,3)}
 rect(g,'#c8a048',x-22,y-222,44,7);rect(g,ST2,x-26,y-232,52,10);rect(g,'#c8a048',x-14,y-236,28,5);
 for(let q=0;q<4;q++)pp(g,x-50+q*30,y+26,t,q+2,.56)});

/* ---------- Zona 5 · primo pomeriggio: Süleymaniye ---------- */
P('istsuley',(g,x,y,t,a,k)=>{
 mosq(g,x,y,k,{w:200,bh:92,r:84,h:70,sd:1,arc:1,dc:'#8a929c',wc:'#e0d4b8',mins:[[-250,265,10,3],[250,265,10,3],[-196,215,9,2],[196,215,9,2]]},7);
 rect(g,ST3,x-280,y-6,560,6);for(let q=0;q<5;q++)pp(g,x-80+q*40,y+26,t,q,.56)});
P('isttomba',(g,x,y,t,a,k)=>{
 rect(g,'#c8c0a8',x-130,y-10,260,10);for(let q=0;q<16;q++)rect(g,IRN,x-126+q*16,y-60,2.4,50);rect(g,IRN,x-130,y-62,260,3);rect(g,IRN,x-130,y-22,260,2);
 const ox=x-20;rect(g,'#e4d8bc',ox-52,y-100,104,90);rect(g,'rgba(0,0,0,.12)',ox+36,y-100,16,90);rect(g,'#2a6aa8',ox-52,y-104,104,6);for(let q=0;q<4;q++)ar(g,'#3a2e24',ox-38+q*24,y-16,14,26),rect(g,GD,ox-38+q*24,y-60,14,2);
 poly(g,'#c8c0a8',[[ox-56,y-104],[ox-46,y-116],[ox+46,y-116],[ox+56,y-104]]);dm(g,LD,ox,y-116,32,32,1);
 for(let q=0;q<4;q++)dot(g,'#4a7a3a',x+100+q*10,y-6+(q%2)*3,9);plat(g,x+120,y,.8,t);
 ln(g,'#5a4a3a',1.6,[ox-52,y-100,ox-58,y-120]);pp(g,x-90,y+26,t,2,.56);pp(g,x+60,y+28,t,5,.56)});
P('istboza',(g,x,y,t,a,k)=>{
 rect(g,'#d8c8a0',x-130,y-96,260,96);rect(g,'rgba(0,0,0,.12)',x+110,y-96,20,96);for(let q=0;q<7;q++)rect(g,'rgba(120,80,40,.1)',x-130,y-92+q*13,260,1.4);
 poly(g,TIL,[[x-140,y-96],[x-120,y-116],[x+120,y-116],[x+140,y-96]]);rect(g,'rgba(255,255,255,.12)',x-120,y-116,240,3);
 rect(g,'#6a2a1a',x-124,y-90,150,38);rect(g,'#f4e8c8',x-116,y-84,134,26);txt(g,'VEFA BOZACISI',x-49,y-66,10,'#8a2a1a','bold');txt(g,'1876',x-49,y-54,8,'#8a5a3a');
 ar(g,'#2a1e14',x+40,y,58,70);ar(g,k>.1?'#f6d890':'#5a4a38',x+46,y-4,46,60);
 for(let q=0;q<4;q++){const bx=x-110+q*30;rect(g,'#f2e8c0',bx,y-44,16,28);rect(g,'#e8c870',bx+1,y-44,14,8);rect(g,'rgba(120,70,20,.4)',bx+1,y-36,14,2)}
 rect(g,'#8a5a32',x-114,y-18,120,18);for(let q=0;q<4;q++){rect(g,'#c8402a',x-100+q*28,y-34,2,16);ln(g,'#9a8a6a',1,[x-100+q*28,y-34,x-95+q*28,y-34])}
 pp(g,x-140,y+28,t,1,.58);pp(g,x+130,y+28,t,4,.58)});
P('istvalente',(g,x,y,t,a,k)=>{
 const ar2=(ax,sc)=>{for(let q=0;q<4;q++)arco(g,'#9a7a56',ax+q*60*sc,y,50*sc,0)};
 const bw=(bx,by,n,w)=>{for(let q=0;q<n;q++){rect(g,'#b88a5e',bx+q*w,by-190,w-3,190);rect(g,'#9a7048',bx+q*w,by-196,w-3,6);ar(g,'#2a1e14',bx+q*w+6,y-0,w-15,80)}};
 for(let q=0;q<6;q++){const px=x-180+q*68;rect(g,'#b08a60',px,y-130,50,130);rect(g,'rgba(255,255,255,.1)',px,y-130,6,130);rect(g,'rgba(0,0,0,.14)',px+34,y-130,16,130)}
 for(let q=0;q<6;q++)rect(g,'#9a7a56',x-186+q*68,y-140,62,10);
 rect(g,'#b08a60',x-190,y-190,380,50);for(let q=0;q<19;q++)rect(g,'rgba(0,0,0,.14)',x-190+q*20,y-186,2,44);
 for(let q=0;q<18;q++)rect(g,'#9a7a56',x-186+q*21,y-208+((q%2)*0),12,18);
 rect(g,'#8a6a46',x-190,y-194,380,6);
 for(let q=0;q<6;q++)ar(g,'#2a1e14',x-174+q*68,y,30,0);
 for(let q=0;q<5;q++){const ax=x-158+q*68;poly(g,'rgba(0,0,0,.28)',[[ax,y],[ax,y-60],[ax+18,y-80],[ax+36,y-60],[ax+36,y]])}
 rect(g,'rgba(80,110,130,.45)',x-190,y-60,380,5);for(let q=0;q<4;q++)pp(g,x-90+q*44,y+26,t,q+2,.56)});
/* ---------- Zona 6 · pomeriggio: Balat e Fener ---------- */
const casaB=(g,x,y,w,h,c,k,seed,t)=>{rect(g,c,x,y-h,w,h);rect(g,'rgba(255,255,255,.14)',x,y-h,4,h);rect(g,'rgba(0,0,0,.14)',x+w-8,y-h,8,h);poly(g,'#a8503a',[[x-5,y-h],[x+w/2,y-h-18],[x+w+5,y-h]]);
 for(let r=0;r<Math.floor(h/42);r++)for(let q=0;q<2;q++){const wx=x+8+q*(w-30),wy=y-h+12+r*42;rect(g,'#f4f0e6',wx-2,wy-2,18,28);rect(g,lit(k,seed+q+r*3)?LIT:'#6a86a4',wx,wy,14,24);rect(g,'#f4f0e6',wx,wy+11,14,1.6)}
 rect(g,'#6a4a2a',x+w/2-8,y-30,16,30)};
P('istbalat',(g,x,y,t,a,k)=>{
 const C=['#e0884a','#4a8ac8','#e8c040','#d86a7a','#6aa86a','#a86ac0','#d8d0b0'];
 for(let q=0;q<6;q++){const h=130+((q*37)%60),bx=x-190+q*66;casaB(g,bx,y-q*0+0,60,h,C[q],k,q+11,t)}
 for(let q=0;q<4;q++){const lx=x-160+q*100;ln(g,'#3a2a1a',.9,[lx,y-120,lx+40,y-110]);rect(g,['#c8402a','#f4f0e6','#2a6aa8'][q%3],lx+6,y-114+((q*5)%10),9,13)}
 for(let q=0;q<2;q++){const gx=x-60+q*130;rect(g,'#6a4a2a',gx,y-14,16,3);gatto(g,gx+8,y-14,['#c8803a','#3a3a3e'][q],t)}
 for(let q=0;q<3;q++)pp(g,x-110+q*70,y+26,t,q+1,.56)});
P('istferro',(g,x,y,t,a,k)=>{
 const w=70;rect(g,'#9a3a3a',x-w,y-250,2*w,250);rect(g,'rgba(255,255,255,.1)',x-w,y-250,6,250);rect(g,'rgba(0,0,0,.18)',x+w-16,y-250,16,250);
 for(let r=0;r<5;r++)for(let q=0;q<3;q++){const wx=x-w+14+q*40,wy=y-232+r*42;ar(g,'#2a1e14',wx-2,wy+30,18,32);rect(g,lit(k,q+r*3+2)?LIT:'#6a86a4',wx,wy+10,14,22);rect(g,'#d8d0b0',wx-3,wy+2,20,3)}
 for(let q=0;q<10;q++)rect(g,'rgba(255,255,255,.1)',x-w,y-240+q*24,2*w,1.2);
 poly(g,'#7a8a96',[[x-w-4,y-250],[x-w+10,y-262],[x+w-10,y-262],[x+w+4,y-250]]);dm(g,'#6a7a86',x,y-262,28,28,1);poly(g,'#7a8a96',[[x-34,y-268],[x,y-312],[x+34,y-268]]);
 ln(g,GD,1.6,[x,y-312,x,y-330]);ln(g,GD,1.6,[x-4,y-324,x+4,y-324]);
 ar(g,'#2a1e14',x-22,y,44,86);ar(g,k>.1?'#f6d890':'#4a3a2e',x-17,y-4,34,76);
 rect(g,'#2a2a2e',x-190,y-6,50,6);pp(g,x-160,y+26,t,2,.56);pp(g,x+110,y+26,t,5,.56)});
P('istscuola',(g,x,y,t,a,k)=>{
 const w=165;rect(g,'#b84a3a',x-w,y-190,2*w,190);rect(g,'rgba(255,255,255,.1)',x-w,y-190,8,190);rect(g,'rgba(0,0,0,.16)',x+w-18,y-190,18,190);
 for(let q=0;q<10;q++)rect(g,'rgba(255,255,255,.08)',x-w,y-186+q*19,2*w,1.4);
 for(let r=0;r<4;r++)for(let q=0;q<9;q++){const wx=x-w+14+q*34,wy=y-174+r*44;ar(g,'#3a2e24',wx-2,wy+28,16,28);rect(g,lit(k,q+r*9)?LIT:'#6a86a4',wx,wy+8,12,20)}
 poly(g,'#8a3a2a',[[x-w-6,y-190],[x,y-224],[x+w+6,y-190]]);rect(g,'#d8c8a0',x-30,y-196,60,30);ar(g,'#8a3a2a',x-22,y-170,44,0);
 for(let q=0;q<4;q++)rect(g,'#d8c8a0',x-56+q*24,y-60,12,60);poly(g,'#d8c8a0',[[x-64,y-60],[x,y-80],[x+64,y-60]]);ar(g,'#2a1e14',x-18,y,36,56);
 rect(g,'#f4f0e6',x-w+8,y-20,2*w-16,2);for(let q=0;q<4;q++)pp(g,x-100+q*60,y+26,t,q+3,.56)});
P('istpatr',(g,x,y,t,a,k)=>{
 rect(g,'#c8a888',x-100,y-40,200,40);for(let q=0;q<9;q++)rect(g,'rgba(0,0,0,.1)',x-100+q*22,y-40,2,40);
 rect(g,'#d8c4a0',x-84,y-110,168,70);rect(g,'rgba(0,0,0,.1)',x+66,y-110,18,70);for(let q=0;q<5;q++){ar(g,'#3a2e24',x-70+q*30,y-60,12,26);rect(g,lit(k,q+7)?LIT:'#7a9ab4',x-68+q*30,y-90,8,18)}
 poly(g,'#6a727c',[[x-90,y-110],[x,y-146],[x+90,y-110]]);rect(g,'rgba(255,255,255,.12)',x-40,y-130,12,20);
 rect(g,'#f4f0e6',x-24,y-156,48,26);dm(g,'#6a727c',x,y-130,22,26,1);ln(g,GD,1.6,[x,y-160,x,y-176]);ln(g,GD,1.6,[x-6,y-168,x+6,y-168]);
 ar(g,'#2a1e14',x-30,y,60,34);ar(g,k>.1?'#f6d890':'#4a3a2e',x-24,y-2,48,28);
 plat(g,x-160,y,1,t);plat(g,x+160,y,1.1,t);for(let q=0;q<2;q++)pp(g,x-30+q*40,y+24,t,q,.56)});
/* ---------- Zona 7 · tramonto: Galata e İstiklal ---------- */
P('istgalata',(g,x,y,t,a,k)=>{
 const w=64;rect(g,'#c8b894',x-w,y-170,2*w,170);rect(g,'rgba(255,255,255,.12)',x-w,y-170,8,170);rect(g,'rgba(0,0,0,.18)',x+w-18,y-170,18,170);
 for(let q=0;q<14;q++)rect(g,'rgba(0,0,0,.08)',x-w,y-166+q*12,2*w,1);
 for(let q=0;q<4;q++){ar(g,'#2a1e14',x-8,y-140+q*36,16,24);rect(g,lit(k,q+15)?LIT:'#3a2e24',x-5,y-134+q*36,10,16)}
 rect(g,'#b8a478',x-w-10,y-176,2*w+20,10);for(let q=0;q<8;q++)rect(g,'#b8a478',x-w-10+q*19,y-188,11,12);
 rect(g,'#c8b894',x-w+6,y-232,2*w-12,56);for(let q=0;q<6;q++)ar(g,'#2a1e14',x-w+14+q*18,y-190,10,22);for(let q=0;q<6;q++)rect(g,lit(k,q+23)?LIT:'#2a2a2e',x-w+14+q*18,y-216,8,18);
 poly(g,LD,[[x-w-4,y-232],[x,y-310],[x+w+4,y-232]]);rect(g,'rgba(255,255,255,.14)',x-20,y-290,10,56);
 for(let q=0;q<3;q++)rect(g,'rgba(0,0,0,.2)',x-w+8+q*40,y-60,0,0);
 ar(g,'#2a1e14',x-18,y,36,58);ar(g,k>.1?'#f6d890':'#4a3a2e',x-13,y-4,26,48);
 if(k>.2)glow(g,x,y-220,100,'255,200,120',.2*k);
 for(let q=0;q<4;q++)pp(g,x-70+q*40,y+26,t,q+2,.56)});
P('isttunel',(g,x,y,t,a,k)=>{
 const w=90;rect(g,'#c8bca0',x-w,y-96,2*w,96);rect(g,'rgba(255,255,255,.12)',x-w,y-96,6,96);rect(g,'rgba(0,0,0,.16)',x+w-14,y-96,14,96);
 for(let q=0;q<8;q++)rect(g,'rgba(0,0,0,.07)',x-w,y-92+q*12,2*w,1);poly(g,'#8a727a',[[x-w-6,y-96],[x-w+10,y-112],[x+w-10,y-112],[x+w+6,y-96]]);
 arco(g,'#14110f',x-34,y,68,70);rect(g,'rgba(0,0,0,.4)',x-30,y-60,60,60);rect(g,IRN,x-32,y-2,64,2);for(let q=0;q<5;q++)rect(g,'#8a8a8e',x-30+q*14,y-6,4,6);
 rect(g,'#1c3a5a',x-52,y-92,104,16);txt(g,'TÜNEL 1875',x,y-80,10,'#f2d26a');
 if(k>.1)glow(g,x,y-30,80,'255,200,120',.25*k);for(let q=0;q<4;q++)pp(g,x-70+q*46,y+26,t,q+4,.56)});
const tramcar=(g,x,y,t,k,d)=>{g.save();g.translate(x,y);g.scale(d,1);rect(g,'#b83a2a',-90,-96,180,78);rect(g,'rgba(255,255,255,.14)',-90,-96,180,5);rect(g,'#f4e8d0',-90,-60,180,4);rect(g,'#8a2a1a',-90,-24,180,6);
 for(let q=0;q<5;q++){rect(g,'#2a2e3a',-82+q*34,-86,26,30);rect(g,lit(k,q+31)?LIT:'#8aa8c0',-80+q*34,-84,22,26)}
 rect(g,'#2a2e3a',-90,-100,180,5);rect(g,'#3a2a1a',-4,-108,8,10);ln(g,'#3a3a3e',1.4,[0,-108,18,-150]);ln(g,'rgba(40,40,44,.7)',1,[-200,-150,200,-150]);
 dot(g,'#2a2e3a',-60,-14,9);dot(g,'#2a2e3a',60,-14,9);rect(g,'#f4f0e6',-88,-110,30,10);txt(g,'T2',-73,-102,8,'#8a2a1a','bold');
 if(k>.15){glow(g,-84,-40,40,'255,220,140',.5*k)}g.restore()};
P('isttram',(g,x,y,t,a,k)=>{
 rect(g,'#2a2a2e',x-300,y-3,600,3);rect(g,'#5a5a60',x-300,y-1,600,1);for(let q=0;q<22;q++)rect(g,'#4a4038',x-296+q*28,y-1,10,3);
 const tx=x+Math.sin(t*.14)*0+0;tramcar(g,tx-74,y,t,k,1);tramcar(g,tx+112,y,t,k,-1);for(let q=0;q<4;q++)pp(g,x-240+q*22,y+24,t,q,.56)});
P('istpasaj',(g,x,y,t,a,k)=>{
 const w=150;rect(g,'#d8c4a0',x-w,y-190,2*w,190);rect(g,'rgba(255,255,255,.14)',x-w,y-190,8,190);rect(g,'rgba(0,0,0,.16)',x+w-16,y-190,16,190);
 for(let r=0;r<4;r++)for(let q=0;q<7;q++){const wx=x-w+16+q*40,wy=y-176+r*40;rect(g,'#f4e8d0',wx-3,wy-3,22,28);rect(g,lit(k,q+r*7+3)?LIT:'#6a86a4',wx,wy,16,22)}
 rect(g,'#c8a888',x-w-6,y-196,2*w+12,10);for(let q=0;q<8;q++)rect(g,'#f4e8d0',x-w+q*37,y-208,16,12);
 arco(g,'#2a1e14',x-40,y,80,98);arco(g,k>.1?'#f6d890':'#5a4a38',x-33,y-4,66,86);for(let q=0;q<5;q++){ln(g,'#3a2a1a',.9,[x-30+q*15,y-86,x-30+q*15,y-70]);dot(g,['#d8402a','#e8a82a','#2a5aa8'][q%3],x-30+q*15,y-68,3)}
 rect(g,'#1c3a5a',x-60,y-120,120,16);txt(g,'ÇİÇEK PASAJI',x,y-108,9,'#f2d26a');
 for(let q=0;q<5;q++)rect(g,['#e8405a','#f2c82a','#f4f0e6','#8a3a9a','#e86a1a'][q],x-w+10+q*20,y-12,14,12);
 for(let q=0;q<5;q++)pp(g,x-90+q*40,y+28,t,q+1,.58)});
P('isttaksim',(g,x,y,t,a,k)=>{
 rect(g,ST3,x-100,y-8,200,8);rect(g,'#d8d0c0',x-80,y-110,160,102);rect(g,'rgba(0,0,0,.12)',x+66,y-110,14,102);
 for(let q=0;q<4;q++){rect(g,'#c8c0b0',x-62+q*40,y-98,22,90);rect(g,'rgba(255,255,255,.2)',x-62+q*40,y-98,5,90)}
 rect(g,'#b8b0a0',x-86,y-118,172,10);poly(g,'#a8a090',[[x-60,y-118],[x,y-144],[x+60,y-118]]);
 const sx=x;poly(g,'#8a6a42',[[sx-20,y-110],[sx-16,y-150],[sx+16,y-150],[sx+20,y-110]]);
 rect(g,'#c8c0b0',sx-14,y-142,28,10);
 /* statua della Repubblica */
 rect(g,'#b8b0a0',x-190,y-6,60,6);rect(g,'#c8c0b0',x-178,y-72,36,66);rect(g,'rgba(0,0,0,.12)',x-154,y-72,12,66);
 for(let q=0;q<4;q++){const px=x-172+q*8;rect(g,'#4a3a2a',px,y-96-(q%2)*6,7,24);dot(g,'#6a5a46',px+3,y-100-(q%2)*6,4)}
 poly(g,'#6a5a46',[[x-170,y-72],[x-166,y-110],[x-150,y-110],[x-146,y-72]]);dot(g,'#6a5a46',x-158,y-114,6);
 rect(g,'#f4f0e6',x-150,y-120,0,0);ln(g,'#c8402a',1.4,[x-130,y-110,x-110,y-120]);
 for(let q=0;q<6;q++){const bx=x+100+q*16;dot(g,'#f4f0e6',bx,y-12+Math.sin(t*3+q)*2,3)}
 for(let q=0;q<6;q++)pp(g,x-80+q*30,y+30,t,q,.56)});

/* ---------- Zona 8 · sera: Dolmabahçe e Ortaköy ---------- */
P('istdolma',(g,x,y,t,a,k)=>{
 const w=250;rect(g,'#f0e8dc',x-w,y-96,2*w,96);rect(g,'rgba(0,0,0,.1)',x-w,y-96,2*w,5);rect(g,'rgba(0,0,0,.14)',x+w-16,y-96,16,96);rect(g,'#e4dccc',x-w,y-102,2*w,8);
 for(let q=0;q<22;q++){ar(g,'#6a727c',x-w+10+q*22,y-6,12,50);rect(g,lit(k,q+3)?LIT:'#7a9ab4',x-w+12+q*22,y-46,8,28)}
 for(let q=0;q<22;q++){rect(g,'#f4f0e8',x-w+10+q*22,y-96,3,6);rect(g,lit(k,q+43)?LIT:'#7a9ab4',x-w+12+q*22,y-84,8,16)}
 rect(g,'#f0e8dc',x-70,y-150,140,54);for(let q=0;q<6;q++){rect(g,'#e4dccc',x-62+q*22,y-146,6,50)}rect(g,'#e4dccc',x-76,y-154,152,6);
 poly(g,'#f4ecdc',[[x-70,y-150],[x,y-182],[x+70,y-150]]);dm(g,'#9aa4b0',x,y-150,30,30,1);
 rect(g,'#f0e8dc',x-w-6,y-132,60,132);rect(g,'#f0e8dc',x+w-54,y-132,60,132);rect(g,'rgba(0,0,0,.1)',x+w-12,y-132,12,132);
 for(let q=0;q<2;q++){const px=q?x+w-24:x-w+24;poly(g,'#8a929c',[[px-34,y-132],[px,y-156],[px+34,y-132]]);for(let r=0;r<3;r++){rect(g,lit(k,r+q*5+50)?LIT:'#6a86a4',px-8,y-120+r*34,16,22)}}
 /* cancello monumentale */
 rect(g,'#f4ecdc',x-52,y-96,104,0);poly(g,'#2a2e3a',[[x-36,y],[x-36,y-62],[x,y-82],[x+36,y-62],[x+36,y]]);for(let q=0;q<9;q++)rect(g,GD,x-34+q*8.5,y-60+Math.abs(q-4)*2,1.6,60);
 if(k>.2)glow(g,x,y-80,260,'255,214,140',.22*k);
 /* lampadario nelle finestre */
 for(let q=0;q<5;q++)pp(g,x-120+q*50,y+28,t,q+2,.58)});
P('istpalazzo',(g,x,y,t,a,k)=>{
 /* orologio di Dolmabahçe + giardino sul mare */
 const tx=x-130;rect(g,'#f0e8dc',tx-24,y-190,48,190);rect(g,'rgba(0,0,0,.12)',tx+8,y-190,16,190);for(let q=0;q<4;q++)rect(g,'rgba(0,0,0,.08)',tx-24,y-180+q*30,48,1.4);
 rect(g,'#d8d0c0',tx-30,y-196,60,8);poly(g,LD,[[tx-26,y-196],[tx,y-250],[tx+26,y-196]]);dot(g,'#f4f0e6',tx,y-150,16);dot(g,'#2a2a30',tx,y-150,14);dot(g,'#f4f0e6',tx,y-150,12);
 const ang=(t*.2)%6.28;ln(g,'#2a2a30',1.6,[tx,y-150,tx+Math.cos(ang)*9,y-150+Math.sin(ang)*9]);ln(g,'#2a2a30',2,[tx,y-150,tx+Math.sin(ang*.1)*6,y-150-6]);
 ar(g,'#3a2e24',tx-8,y-96,16,32);ar(g,'#3a2e24',tx-8,y-48,16,32);
 /* aiuola e cipressi */
 for(let q=0;q<5;q++)cipr(g,x+10+q*38,y,1.1+(q%2)*.2);
 rect(g,'#4a7a3a',x-80,y-6,70,12);for(let q=0;q<12;q++)dot(g,['#e84a5a','#f4f0e6','#f2c82a','#c82a4a'][q%4],x-76+q*6,y-2+(q%2)*4,2.2);
 for(let q=0;q<6;q++)rect(g,'#3a3a40',x+150+q*10,y-50+(q%2)*0,3,50);rect(g,'#3a3a40',x+150,y-52,52,3);
 if(k>.2)for(let q=0;q<4;q++)glow(g,x-70+q*50,y-4,28,'255,210,130',.4*k);
 for(let q=0;q<3;q++)pp(g,x-40+q*40,y+30,t,q,.56)});
P('istortak',(g,x,y,t,a,k)=>{
 const w=120;rect(g,'#e8dcc4',x-w,y-96,2*w,96);rect(g,'rgba(0,0,0,.12)',x+w-14,y-96,14,96);rect(g,'rgba(255,255,255,.16)',x-w,y-96,6,96);
 for(let q=0;q<5;q++){ar(g,'#3a2e24',x-w+14+q*44,y-12,24,40);rect(g,lit(k,q+2)?LIT:'#7a9ab4',x-w+18+q*44,y-72,16,34);rect(g,'#d8c8a0',x-w+14+q*44,y-82,24,4)}
 rect(g,'#c8b894',x-w-6,y-102,2*w+12,8);dm(g,'#9aa4b0',x,y-102,52,34,1);dm(g,'#9aa4b0',x-w+12,y-102,24,18);dm(g,'#9aa4b0',x+w-12,y-102,24,18);
 mn(g,x-w+22,y-100,0,0,'#e8dcc4',0);mn(g,x-w-4,y-4,190,9,'#e8dcc4',2,LD2);mn(g,x+w+4,y-4,190,9,'#e8dcc4',2,LD2);
 /* ponte illuminato sul Bosforo, sullo sfondo a destra */
 const bx=x+220;rect(g,'#3a3e4a',bx,y-60,200,5);for(let q=0;q<12;q++){const bxx=bx+q*18;ln(g,'rgba(180,180,200,.5)',1,[bxx,y-60,bxx+9,y-90,bxx+18,y-60])}
 for(let q=0;q<2;q++)rect(g,'#3a3e4a',bx+30+q*140,y-130,6,130);for(let q=0;q<14;q++)dot(g,k>.2?'rgb(255,226,150)':'#cdd',bx+14+q*14,y-60,1.8);
 if(k>.2)glow(g,x,y-60,140,'255,200,120',.24*k);
 for(let q=0;q<5;q++){const sx=x-200+q*40;rect(g,'#d8402a',sx,y+18,10,6);rect(g,'#e8d4a0',sx-1,y+10,12,8);rect(g,'#6a4a2a',sx,y+24,10,2)}
 for(let q=0;q<4;q++)pp(g,x-80+q*50,y+34,t,q+3,.58)});
P('istkumpir',(g,x,y,t,a,k)=>{
 rect(g,'#3a2a1a',x-92,y-20,4,20);rect(g,'#3a2a1a',x+88,y-20,4,20);rect(g,'#c8cdd2',x-96,y-70,192,50);rect(g,'rgba(255,255,255,.4)',x-96,y-70,192,5);rect(g,'rgba(0,0,0,.14)',x-96,y-26,192,6);
 rect(g,'#2a6aa8',x-110,y-120,220,14);for(let q=0;q<11;q++)rect(g,q%2?'#f4f0e6':'#c8402a',x-110+q*20,y-120,20,14);poly(g,'#c8402a',[[x-114,y-106],[x-110,y-96],[x+110,y-96],[x+114,y-106]]);
 rect(g,'#2a1e14',x-90,y-96,5,76);rect(g,'#2a1e14',x+85,y-96,5,76);
 for(let q=0;q<6;q++){const px=x-76+q*24;el(g,'#b8803a',px,y-52,10,7);rect(g,'#f4e0a0',px-8,y-58,16,4);dot(g,'#c8402a',px-3,y-60,2);dot(g,'#4a8a3a',px+2,y-60,2);dot(g,'#e8d870',px+5,y-61,2)}
 rect(g,'#6a5a46',x-96,y-26,192,6);for(let q=0;q<5;q++){rect(g,['#c8402a','#e8a82a','#2a5aa8','#4a8a3a','#f4f0e6'][q],x-84+q*34,y-18,22,14)}
 txt(g,'KUMPİR',x,y-108,10,'#f4f0e6','bold');
 if(k>.15)glow(g,x,y-54,100,'255,190,100',.35*k);
 for(let q=0;q<4;q++)pp(g,x-80+q*54,y+30,t,q+4,.58)});
/* ---------- Zona 9 · notte: Üsküdar, Torre della Fanciulla, Haydarpaşa, il varco ---------- */
P('istmihr',(g,x,y,t,a,k)=>{
 mosq(g,x,y,k,{w:130,bh:80,r:58,h:48,sd:1,arc:1,dc:LD,wc:'#d8cdb0',mins:[[-158,232,9,2],[158,232,9,2]]},9);
 rect(g,'#b8a888',x-200,y-6,400,6);for(let q=0;q<5;q++)pp(g,x-70+q*36,y+26,t,q+2,.56)});
P('istkiz',(g,x,y,t,a,k)=>{
 /* Torre della Fanciulla: isolotto sull'acqua */
 const by=GT-4,bob=Math.sin(t*.8)*.8;
 el(g,'#6a7280',x,by+4,60,9);poly(g,'#7a8290',[[x-48,by+4],[x-34,by-14],[x+34,by-14],[x+48,by+4]]);
 rect(g,'#e4dcc4',x-20,by-92,40,78);rect(g,'rgba(0,0,0,.14)',x+8,by-92,12,78);rect(g,'rgba(255,255,255,.14)',x-20,by-92,5,78);
 for(let q=0;q<3;q++){rect(g,lit(k,q+12)?LIT:'#4a5a6a',x-4,by-82+q*22,8,12)}
 rect(g,'#d8cdb0',x-26,by-100,52,10);rect(g,'#e4dcc4',x-24,by-122,48,24);for(let q=0;q<4;q++)rect(g,lit(k,q+30)?LIT:'#4a5a6a',x-20+q*11,by-114,6,10);
 poly(g,'#6a727c',[[x-28,by-122],[x,by-132],[x+28,by-122]]);dm(g,'#6a727c',x,by-132,18,20,0);
 /* torretta del faro */
 rect(g,'#e4dcc4',x+26,by-62,10,48);rect(g,'rgba(0,0,0,.14)',x+32,by-62,4,48);poly(g,'#c8402a',[[x+24,by-62],[x+31,by-74],[x+38,by-62]]);
 if(k>.15){glow(g,x+31,by-68,60,'255,230,160',.5*k);glow(g,x,by-60,90,'255,214,140',.2*k)}
 for(let q=0;q<5;q++)rect(g,'rgba(255,255,255,'+(.18-q*.03)+')',x-40+q*8,by+8+q*3+bob,80-q*14,1.6);
 if(k>.15)for(let q=0;q<6;q++)rect(g,'rgba(255,220,140,'+(.3-q*.04)+')',x-12+Math.sin(t+q)*5,by+10+q*6,24-q*3,1.8)});
P('istvapur',(g,x,y,t,a,k)=>{
 const by=GT+22,bob=Math.sin(t*1.3)*1.4;g.save();g.translate(x,by+bob);
 poly(g,'#1c1c22',[[-170,-34],[170,-34],[148,0],[-148,0]]);rect(g,'#f4f0e6',-166,-40,332,7);rect(g,'#c8402a',-150,-26,300,3);
 rect(g,'#f4f0e6',-120,-80,240,40);rect(g,'rgba(0,0,0,.14)',90,-80,30,40);for(let q=0;q<10;q++){rect(g,'#2a2e3a',-108+q*22,-72,14,16);rect(g,lit(k,q+17)?LIT:'#7a9ab4',-107+q*22,-71,12,14)}
 rect(g,'#e8dcc4',-90,-106,180,26);for(let q=0;q<7;q++){rect(g,'#2a2e3a',-80+q*25,-100,14,12);rect(g,lit(k,q+21)?LIT:'#7a9ab4',-79+q*25,-99,12,10)}
 rect(g,'#c8402a',-30,-130,26,24);rect(g,'#14110f',-30,-130,26,5);rect(g,'#c8402a',24,-124,22,18);rect(g,'#14110f',24,-124,22,4);
 rect(g,'#e8dcc4',-8,-134,2,0);for(let q=0;q<4;q++)dot(g,'rgba(220,220,230,'+(.4-q*.08)+')',-17+q*8+Math.sin(t*1.2+q)*3,-140-q*14,6+q*2);
 poly(g,'#f4f0e6',[[-140,-80],[-130,-98],[-120,-80]]);ln(g,'#3a3a3e',1.4,[-130,-98,-130,-114]);
 for(let q=0;q<9;q++)rect(g,'rgba(255,255,255,.16)',-160+q*38,-30,24,2);
 for(let q=0;q<3;q++)pp(g,-70+q*60,-40,t,q+2,.5);g.restore();
 if(k>.15){glow(g,x,GT-34,200,'255,220,150',.2*k);for(let q=0;q<9;q++)rect(g,'rgba(255,220,150,'+(.22-q*.02)+')',x-100+q*20,GT+26+q*3,60-q*3,1.6)}});
P('isthaydar',(g,x,y,t,a,k)=>{
 const w=180;rect(g,'#c8c0aa',x-w,y-96,2*w,96);rect(g,'rgba(0,0,0,.14)',x+w-16,y-96,16,96);for(let q=0;q<8;q++)rect(g,'rgba(0,0,0,.06)',x-w,y-92+q*11,2*w,1);
 for(let q=0;q<16;q++){ar(g,'#3a2e24',x-w+10+q*22,y-6,12,42);rect(g,lit(k,q+4)?LIT:'#6a86a4',x-w+12+q*22,y-40,8,26)}
 for(let q=0;q<2;q++){const tx=q?x+w-10:x-w+10;rect(g,'#b8aa90',tx-36,y-170,72,170);rect(g,'rgba(0,0,0,.14)',tx+16,y-170,20,170);for(let r=0;r<3;r++){ar(g,'#3a2e24',tx-8,y-130+r*38,16,28);rect(g,lit(k,r+q*4+9)?LIT:'#6a86a4',tx-5,y-124+r*38,10,16)}
  poly(g,'#6a727c',[[tx-40,y-170],[tx,y-230],[tx+40,y-170]]);merli(g,'#b8aa90',tx-36,y-170,72,7)}
 rect(g,'#c8c0aa',x-w+60,y-130,2*w-120,34);poly(g,'#6a727c',[[x-w+54,y-130],[x,y-164],[x+w-54,y-130]]);
 dot(g,'#f4f0e6',x,y-110,12);dot(g,'#2a2a30',x,y-110,10);dot(g,'#f4f0e6',x,y-110,8);ln(g,'#2a2a30',1.2,[x,y-110,x+4,y-114]);ln(g,'#2a2a30',1.2,[x,y-110,x-3,y-106]);
 rect(g,'#2a2a2e',x-w,y-4,2*w,4);for(let q=0;q<9;q++)rect(g,'#3a3430',x-w+q*42,y-6,10,6);
 if(k>.2)glow(g,x,y-60,220,'255,214,140',.22*k);for(let q=0;q<4;q++)pp(g,x-60+q*40,y+28,t,q+1,.56)});
P('istvarco',(g,x,y,t,a,k)=>{
 rect(g,'#6a5a46',x-240,y-6,300,6);for(let q=0;q<10;q++){rect(g,'#4a3a2a',x-236+q*30,y-6,4,16)}
 const pu=.7+.3*Math.sin(t*3);const gr=g.createRadialGradient(x+130,y-70,2,x+130,y-70,170);gr.addColorStop(0,'rgba(255,255,255,'+pu+')');gr.addColorStop(.3,'rgba(190,150,255,'+(.5*pu)+')');gr.addColorStop(1,'rgba(110,231,255,0)');g.fillStyle=gr;g.fillRect(x-60,y-250,380,340);
 /* il vapur con le luci accese, ormeggiato */
 poly(g,'#1c1c22',[[x-230,y-30],[x+40,y-30],[x+30,y-6],[x-216,y-6]]);rect(g,'#f4f0e6',x-226,y-36,260,7);rect(g,'#f4f0e6',x-190,y-70,170,34);
 for(let q=0;q<7;q++){rect(g,'#2a2e3a',x-182+q*24,y-64,14,16);rect(g,LIT,x-181+q*24,y-63,12,14);glow(g,x-175+q*24,y-56,22,'255,226,150',.25)}
 rect(g,'#c8402a',x-120,y-96,24,26);rect(g,'#14110f',x-120,y-96,24,4);
 for(let q=0;q<6;q++)dot(g,'rgba(255,255,255,'+(.5*pu)+')',x+140+Math.sin(t+q*2)*34,y-70+Math.cos(t*1.3+q)*50,2.4);
 poly(g,'rgba(246,250,255,'+(.6*pu)+')',[[x+124,y-120],[x+150,y-120],[x+150,y-6],[x+124,y-6]])});
/* ---------- decorazioni ---------- */
P('isttea',(g,x,y,t,a,k)=>{rect(g,'#6a4a2a',x-24,y-30,48,3);rect(g,'#6a4a2a',x-22,y-27,3,27);rect(g,'#6a4a2a',x+19,y-27,3,27);
 for(let q=0;q<3;q++){const bx=x-16+q*13;poly(g,'rgba(255,255,255,.55)',[[bx,y-34],[bx+9,y-34],[bx+7,y-44],[bx+2,y-44]]);rect(g,'#a82a1a',bx+1,y-40,7,6);rect(g,'#f4f0e6',bx-3,y-31,15,1.4);if(q==1)for(let w=0;w<2;w++)dot(g,'rgba(240,240,244,'+(.3-w*.1)+')',bx+4+Math.sin(t*2+w)*2,y-48-w*8,3)}
 rect(g,'#c8cdd2',x+10,y-48,10,14);rect(g,'#8a8f96',x+10,y-48,10,3)});
P('istsimit',(g,x,y,t,a,k)=>{rect(g,'#a82a1a',x-30,y-82,60,6);rect(g,'#6a4a2a',x-4,y-76,8,76);rect(g,'#c8402a',x-34,y-84,68,3);
 rect(g,'#8a5a32',x-34,y-72,68,36);rect(g,'#6a4222',x-34,y-72,68,4);rect(g,'#e8d8a8',x-30,y-66,60,26);for(let q=0;q<4;q++){el(g,'#c88a3a',x-20+q*14,y-54,6,6);dot(g,'#4a2a12',x-20+q*14,y-54,2)}
 rect(g,'#6a4222',x-34,y-36,68,3);dot(g,'#2a2a2e',x-22,y-12,9);dot(g,'#2a2a2e',x+22,y-12,9);rect(g,'#6a4a2a',x-30,y-36,2,24);rect(g,'#6a4a2a',x+28,y-36,2,24);txt(g,'SİMİT',x,y-90,9,'#a82a1a','bold')});
P('isttaxi',(g,x,y,t,a,k)=>{rect(g,'#f2c82a',x-60,y-34,120,24);poly(g,'#f2c82a',[[x-34,y-34],[x-20,y-54],[x+28,y-54],[x+42,y-34]]);rect(g,'#2a2e3a',x-18,y-52,18,16);rect(g,'#2a2e3a',x+4,y-52,22,16);rect(g,'rgba(120,160,190,.5)',x-16,y-50,14,12);rect(g,'rgba(120,160,190,.5)',x+6,y-50,18,12);
 rect(g,'#14110f',x-60,y-14,120,4);rect(g,'#14110f',x-14,y-60,28,7);txt(g,'TAKSİ',x,y-54,6,'#f2c82a','bold');dot(g,'#14110f',x-36,y-10,9);dot(g,'#14110f',x+36,y-10,9);dot(g,'#8a8f96',x-36,y-10,4);dot(g,'#8a8f96',x+36,y-10,4);
 rect(g,'rgba(255,255,255,.3)',x-58,y-32,116,2);if(k>.1)glow(g,x-58,y-22,28,'255,240,170',.5*k)});

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const NAME={
ist_huseyin:"Hüseyin, il pescatore del Ponte di Galata",
ist_giustiniano:"Giustiniano I, l’imperatore",
ist_kemal:"Kemal, il çaycı del Gran Bazar",
ist_sinan:"Mimar Sinan, l’architetto",
ist_nazli:"Nazlı, la signora dei gatti di Balat",
ist_baris:"Barış, il manovratore del tram rosso",
ist_ahmet:"Ahmet, il venditore di kumpir di Ortaköy",
ist_ece:"Ece, la marinaia del vapur"
};
const GREET=Object.assign({},GREET_A,GREET_B);
const npcs=[
 /* Hüseyin: coppola, giubbotto, canna da pesca, secchio con i pesci, thermos */
 NP('ist_huseyin',NAME.ist_huseyin,730,GREET.ist_huseyin,{skin:'#d8a078',top:'#5a6a4a',bot:'#3a3a46',hair:'#b8b8b8',s:1.0},(g,b,t)=>{el(g,'#4a4a52',0,-112+b,17,4.6);poly(g,'#4a4a52',[[-10,-113+b],[10,-113+b],[8,-122+b],[-8,-122+b]]);rect(g,'rgba(255,255,255,.25)',-6,-90+b,12,2);
  ln(g,'#4a3a22',1.8,[12,-64,40,-150,64,-176]);ln(g,'rgba(255,255,255,.6)',.8,[64,-176,64,-120+Math.sin(t*2)*3]);dot(g,'#e8402a',64,-120+Math.sin(t*2)*3,1.8);
  rect(g,'#3a6a9a',-34,-14,16,14);rect(g,'#8aa8c8',-34,-14,16,3);for(let q=0;q<2;q++)rect(g,'#a8b4bc',-32+q*6,-18,5,3);rect(g,'#c8402a',22,-12,9,12);rect(g,'#f4f0e6',22,-12,9,3)}),
 /* Giustiniano: corona e diadema di perle, manto di porpora, mosaico dorato */
 NP('ist_giustiniano',NAME.ist_giustiniano,3400,GREET.ist_giustiniano,{skin:'#d8a880',top:'#7a2a6a',bot:'#7a2a6a',hair:'#4a3020',s:1.04},(g,b,t)=>{rect(g,GD,-12,-124+b,24,8);for(let q=0;q<5;q++)dot(g,'#f4f0e6',-10+q*5,-126+b,2);dot(g,'#c8402a',0,-128+b,2.4);
  rect(g,'#d8b04a',-10,-100+b,20,4);poly(g,'#8a3a7a',[[-18,-96+b],[18,-96+b],[24,-30],[-24,-30]]);rect(g,GD,-3,-96+b,6,66);rect(g,GD,-24,-34,48,3);dot(g,'#f4f0e6',0,-84+b,3);
  ln(g,'#6a4a2a',1.8,[16,-60,30,-120]);dot(g,GD,30,-124,5);dot(g,'#c8402a',30,-124,2)}),
 /* Kemal: grembiule, vassoio di rame con bicchierini a tulipano, fez? no: baffi e gilet */
 NP('ist_kemal',NAME.ist_kemal,8700,GREET.ist_kemal,{skin:'#d8a078',top:'#f4f0e6',bot:'#2a2a36',hair:'#2a1a10',s:1.0},(g,b,t)=>{rect(g,'#3a3430',-6,-98+b,12,2.4);rect(g,'#4a4a52',-12,-90+b,24,34);rect(g,'rgba(255,255,255,.2)',-12,-90+b,6,34);
  ln(g,'#c8a048',1.4,[-14,-62,-26,-66]);ln(g,'#c8a048',1.4,[12,-62,34,-70]);el(g,'#c88a3a',34,-72,22,3);ln(g,'#c88a3a',1,[34,-72,34,-58]);
  for(let q=0;q<4;q++){const bx=26+q*6;poly(g,'rgba(240,240,244,.6)',[[bx,-76],[bx+5,-76],[bx+4,-86],[bx+1,-86]]);rect(g,'#a82a1a',bx+.5,-82,4,5);rect(g,'#c8cdd2',bx-1,-77,7,1.2)}
  dot(g,'rgba(240,240,244,.3)',38+Math.sin(t*2)*2,-94,3)}),
 /* Sinan: turbante bianco, barba grigia, caffettano, compasso e rotolo di progetti */
 NP('ist_sinan',NAME.ist_sinan,10850,GREET.ist_sinan,{skin:'#d0a080',top:'#2a5a8a',bot:'#2a3a5a',hair:'#b8b8b8',s:1.02},(g,b,t)=>{el(g,'#f4f0e6',0,-116+b,17,9);dot(g,'#f4f0e6',0,-122+b,10);rect(g,'#e0d8c4',-14,-114+b,28,2);
  poly(g,'#b8b8b8',[[-8,-100+b],[8,-100+b],[6,-82+b],[0,-76+b],[-6,-82+b]]);rect(g,GD,-14,-60,28,3);
  rect(g,'#e8dcc0',-30,-72,26,5);rect(g,'rgba(80,60,40,.5)',-28,-71,20,1);ln(g,'#5a4a3a',1.6,[14,-66,32,-92]);ln(g,'#5a4a3a',1.6,[14,-66,40,-84]);dot(g,GD,26,-76,2)}),
 /* Nazlı: foulard fiorito, cardigan, sacchetto di crocchette, gatti ai piedi */
 NP('ist_nazli',NAME.ist_nazli,13300,GREET.ist_nazli,{skin:'#e0b090',top:'#8a4a6a',bot:'#4a3a4a',hair:'#d8d0c8',s:.98},(g,b,t)=>{poly(g,'#4a8a9a',[[-14,-110+b],[14,-110+b],[16,-90+b],[-16,-90+b]]);for(let q=0;q<5;q++)dot(g,'#f4f0e6',-9+q*4.5,-102+b+(q%2)*5,1.6);
  rect(g,'#c8a878',14,-62,16,22);rect(g,'#8a6a3a',14,-62,16,4);dot(g,'#c8402a',22,-52,3);
  gatto(g,-36,0,'#c8803a',t);gatto(g,-60,0,'#3a3a3e',t);gatto(g,40,0,'#d8d0c0',t);for(let q=0;q<4;q++)dot(g,'#8a6a3a',-10+q*12,-2,1.6)}),
 /* Barış: berretto da manovratore, giubba blu con bottoni, campanello, manovella */
 NP('ist_baris',NAME.ist_baris,16300,GREET.ist_baris,{skin:'#d8a078',top:'#2a3a6a',bot:'#2a2a36',hair:'#2a1a10',s:1.0},(g,b,t)=>{rect(g,'#1c2a4a',-12,-122+b,24,8);rect(g,'#14110f',-14,-114+b,28,3);dot(g,GD,0,-118+b,2);
  for(let q=0;q<4;q++)dot(g,GD,0,-88+q*8+b,1.4);rect(g,'#3a3430',-6,-97+b,12,2);
  rect(g,'#3a3a3e',24,-62,5,56);ln(g,'#8a8f96',3,[26,-62,26,-80]);dot(g,'#c8402a',26,-82,4);ln(g,'#8a8f96',1.6,[14,-64,26,-70]);
  dot(g,GD,40,-40,6);dot(g,'#2a2a30',40,-40,4);ln(g,GD,1.2,[40,-34,40,-26]);rect(g,'#c8402a',32,-8,16,8)}),
 /* Ahmet: grembiule, cappellino, patata fumante tagliata con ripieno colorato */
 NP('ist_ahmet',NAME.ist_ahmet,19680,GREET.ist_ahmet,{skin:'#d0987a',top:'#d8402a',bot:'#2a2a36',hair:'#2a1a10',s:1.02},(g,b,t)=>{rect(g,'#f4f0e6',-12,-118+b,24,6);rect(g,'#f4f0e6',2,-114+b,16,2.4);rect(g,'#f4f0e6',-14,-88+b,28,40);rect(g,'rgba(0,0,0,.1)',-14,-88+b,4,40);
  el(g,'#b8803a',32,-60,16,9);rect(g,'#f4e0a0',20,-66,26,4);for(let q=0;q<5;q++)dot(g,['#c8402a','#4a8a3a','#e8d870','#f4f0e6','#2a5aa8'][q],24+q*4,-70+(q%2)*-1,2.2);
  ln(g,'#c8a048',1.4,[12,-64,24,-62]);for(let q=0;q<3;q++)dot(g,'rgba(240,240,244,'+(.34-q*.1)+')',32+Math.sin(t*2+q)*3,-80-q*9,3+q)}),
 /* Ece: berretto da marinaio, giubbotto catarifrangente, cima arrotolata */
 NP('ist_ece',NAME.ist_ece,22520,GREET.ist_ece,{skin:'#e0b090',top:'#e8802a',bot:'#2a3a5a',hair:'#3a2a20',s:1.0},(g,b,t)=>{rect(g,'#f4f0e6',-12,-122+b,24,7);rect(g,'#1c2a4a',-13,-116+b,26,3);dot(g,GD,0,-120+b,2);
  rect(g,'#f2e82a',-14,-82+b,28,5);rect(g,'#f2e82a',-14,-70+b,28,5);ln(g,'#6a4a2a',2,[-6,-98+b,-6,-110+b]);
  el(g,'#c8a878',34,-8,16,8);el(g,'#b89868',34,-12,14,6);el(g,'#c8a878',34,-16,12,5);ln(g,'#c8a878',2,[26,-14,12,-52])})
];
const LX=[350,1000,1650,2150,3000,3700,4150,4500,5000,5550,6100,6650,7200,7950,8450,8950,9450,10350,11100,11700,12250,13000,13550,14100,14650,15500,16000,16550,16950,17400,18050,18550,19200,19750,20450,21050,21650,22250,22870];
const props=[
 /* zona 1 · Ponte di Galata ed Eminönü */
 ['mdtarga',120,'GALATA KÖPRÜSÜ'],['istponte',150,1],['istponte',350,2],['mdfarola',560,0],['istponte',560,3],['istponte',780,4],['istbarca',1000],['mdtarga',1430,'EMİNÖNÜ'],['istyeni',1650],['mdgatto',1870,'#c8803a'],['istsimit',1950],['istspezie',2150],['mdfarola',2290,1],['isttaxi',2330],
 /* zona 2 · Sultanahmet */
 ['mdtarga',2480,'SULTANAHMET MEYDANI'],['istsofia',3000],['mdfarola',3250,0],['mdpanca',3280,1],['istippo',3700],['mdplatano',3960,1.2],['istblu',4150],['mdfarola',4350,1],['istcisterna',4500],
 /* zona 3 · Topkapı e Gülhane */
 ['mdtarga',4690,'TOPKAPI SARAYI'],['istporta',5000],['mdcestino',5290],['istsalut',5550],['mdfarola',5800,0],['istgiust',6100],['isttea',6360],['istbagdad',6650],['mdpanca',6890,1],['istgulhane',7200],['mdfarola',7480,1],
 /* zona 4 · Gran Bazar */
 ['mdtarga',7700,'KAPALIÇARŞI'],['istbazar',7950],['isttea',8200],['istlanterne',8450],['mdgatto',8800,'#3a3a3e'],['isttappeti',8950],['mdfarola',9200,0],['istcolonna',9450],['mdcestino',9600],
 /* zona 5 · Süleymaniye */
 ['mdtarga',9800,'SÜLEYMANİYE'],['istsuley',10350],['mdfarola',10650,0],['mdcipresso',10790,110],['isttomba',11100],['istboza',11700],['mdpanca',11900,1],['istvalente',12250],['mdfarola',12560,1],
 /* zona 6 · Balat e Fener */
 ['mdtarga',12800,'BALAT'],['istbalat',13000],['mdgatto',13400,'#c8803a'],['istferro',13550],['mdfarola',13830,0],['istscuola',14100],['mdgatto',14340,'#d8d0c0'],['istpatr',14650],['mdplatano',14900,1.2],
 /* zona 7 · Galata e İstiklal */
 ['mdtarga',15200,'GALATA'],['istgalata',15500],['mdfarola',15760,0],['isttunel',16000],['mdfarola',16250,1],['isttram',16550],['istpasaj',16950],['mdcestino',17180],['isttaksim',17400],['mdfarola',17620,0],
 /* zona 8 · Dolmabahçe e Ortaköy */
 ['mdtarga',17800,'DOLMABAHÇE'],['istdolma',18050],['mdfarola',18340,1],['istpalazzo',18550],['mdpanca',18820,1],['istortak',19200],['mdfarola',19530,0],['istkumpir',19750],['mdplatano',20000,1.1],
 /* zona 9 · Üsküdar e Haydarpaşa */
 ['mdtarga',20150,'ÜSKÜDAR'],['istmihr',20450],['mdfarola',20730,1],['istkiz',21050],['istvapur',21650],['mdfarola',21900,0],['isthaydar',22250],['mdfarola',22480,1],['istvarco',22870]
];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'istanbul',name:'Istanbul · Dal Ponte di Galata alla Stazione di Haydarpaşa',width:W1,sky:['#7a78b8','#f6a898','#ffd09a'],gt:372,gr:['#d2c6aa','#a29678'],chord:[146.8,174.6,220,293.7],amb:'#ffdcae',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio --- */
(function(){
const TOPX_A={
ist_huseyin:[
["Chi sei e che fai?","Hüseyin, sessantacinque anni. Per trent’anni ho lavorato sui vapur, i traghetti, a tirare cime e a bere çay. Ora sono in pensione e vengo qui ogni alba con la canna. Non lo faccio per vivere, lo faccio per stare in compagnia: valla, qui sul ponte si parla più che si pesca."],
["Come si pesca da un ponte così alto?","Con la olta, la lenza lunga, con tanti piccoli ami sullo stesso filo. Lasci cadere tutto giù, aspetti, senti il filo che trema e tiri su. Il secchio resta in alto con me. Se un pesce abbocca, abi, cioè “fratello”, tutti i vicini guardano e fanno il tifo."],
["Quali pesci prendi?","Lüfer, il pesce azzurro, e çinekop, il suo piccolo, d’autunno. Poi istavrit, il sugarello, e hamsi, le acciughe. Ogni stagione ha il suo pesce e noi lo sappiamo a memoria. Il più bello è il lüfer: quando arriva, il ponte si riempie di canne come una foresta."],
["Il ponte è sempre stato così?","No, canım, cioè “caro mio”. Il primo ponte di legno è del 1845, poi ne sono venuti altri. L’ultimo, galleggiante, bruciò nel 1992. Quello di oggi è del 1994: lungo 490 metri, a due piani, e si può alzare nel mezzo per far passare le navi. Io pesco sul piano di sopra, sotto ci sono i ristoranti."],
["Posso assaggiare un balık ekmek?","Certo! Vai alle barche laggiù, a Eminönü. Il balık ekmek è un panino col pesce: sgombro grigliato, cipolla, un po’ di insalata e limone. Si mangia in piedi con le barche che dondolano. Se ti piace, bevici dietro un succo di rapa. Afiyet olsun, buon appetito!"],
["Perché i gabbiani ti stanno vicino?","Perché sanno chi porta il pane! Il simit, la ciambella di sesamo, si spezza e se ne dà un pezzo. I gabbiani di qui sono di casa e non hanno paura di nessuno. Un po’ rubano anche dal tuo panino. Io dico loro “yav, basta!” e loro fanno finta di niente."],
["Com’è il çay del thermos?","Forte e scuro, come piace a me. Si serve in un bicchierino a forma di tulipano, con due zollette. Tè e pesca vanno insieme: qui bevo almeno cinque bicchieri prima di mezzogiorno. Se qualcuno ti offre un çay, accettalo sempre: in Turchia è un modo di dire “sei il benvenuto”."],
["Mi spieghi le due correnti del Bosforo?","Sotto la superficie l’acqua va al contrario di quella sopra. In alto scorre quella meno salata, dal Mar Nero verso il Marmara. In basso, più salata, va in senso opposto. Noi marinai lo sapevamo senza libri. I pesci seguono le correnti, e noi seguiamo i pesci."],
["Che cos’è la grande moschea qui dietro?","Yeni Cami, la “Moschea Nuova”: nuova per modo di dire! Cominciarono i lavori nel 1597 e finirono nel 1665. Accanto c’è il Bazar delle Spezie, del 1664, dove si vendono spezie, lokum, cioè i dolcetti di zucchero, e frutta secca. All’alba è ancora chiuso, ma l’aria sa già di cannella."],
["Perché i vecchi parlano delle navi nel Corno d’Oro?","Perché questa acqua è il Corno d’Oro. Si racconta che nell’aprile del 1453, prima della conquista, delle navi siano state trascinate via terra sulle colline, fino a questo porto interno. Un’impresa pazzesca. Io mi lamento per una canna pesante, figurati loro. Ma restiamo sulle cose allegre."],
["Perché mi chiami “abi”?","Abi, o abla per le donne, vuol dire fratello maggiore o sorella maggiore. In Turchia si usa con chiunque, anche con un fruttivendolo o con un tassista che non hai mai visto. È un modo di dire “siamo di famiglia”. A Istanbul siamo più di quindici milioni: o ci si vuole bene, o non si respira."],
["Posso salutarti e proseguire la mia passeggiata?","Güle güle, Pierpaolo, vai pure! E mangiati un balık ekmek prima di partire. Cammina fino a Santa Sofia e al quartiere di Sultanahmet: la cupola si vede già da lontano. Se vedi un vecchio con la canna, salutalo: sono io. Hoşça kal, torna quando vuoi!"]
],
ist_giustiniano:[
["Chi sei e che fai?","Sono Giustiniano, imperatore dei Romani, e regno da questa città, Costantinopoli, dal 527. Il mio compito è tenere insieme un impero immenso: leggi, eserciti, chiese. Ma devo confessarti una cosa: la mia gioia è costruire. Guarda dietro di me. Non è bella?"],
["Dove sei nato e come sei diventato imperatore?","Sono nato in Illiria, a Tauresium, intorno al 482, in una famiglia di contadini. Mio zio Giustino fece carriera nell’esercito e divenne imperatore. Mi chiamò a Costantinopoli, mi fece studiare e, quando morì, nel 527, toccò a me. Per tutti i santi, che salto!"],
["Chi era Teodora?","Mia moglie, e la mia consigliera più saggia. Si dice che fosse figlia del guardiano degli orsi dell’Ippodromo e che avesse lavorato come attrice. Io non guardai mai al passato: guardai a lei. Era coraggiosa, e ancora oggi molti la ricordano. Senza di lei non avrei tenuto il trono."],
["Cos’è successo con la rivolta Nika?","Una pagina dolorosa. Nel gennaio del 532 i tifosi dei Blu e dei Verdi, uniti, si ribellarono gridando “Nika!”, cioè “vinci!”. La città bruciò e, alla fine, morirono decine di migliaia di persone. Fu una prova terribile. Dalle ceneri nacque la possibilità di costruire qualcosa di nuovo."],
["Come hai costruito Santa Sofia così in fretta?","Cominciammo subito dopo la rivolta, nel 532, e nel 537 era pronta: poco meno di sei anni. Migliaia di operai, marmi da tutto l’impero, e due menti geniali. La cupola si alza a circa cinquantacinque metri dal pavimento. Ricordo il giorno dell’inaugurazione: la luce scendeva dall’alto come dal cielo."],
["Chi erano Antemio e Isidoro?","Antemio di Tralle, matematico, e Isidoro di Mileto, studioso di meccanica: i miei architetti. Non erano muratori ma scienziati! Studiavano le forze e le curve. Nel 557, dopo un terremoto, una parte della cupola crollò. Fu ricostruita dal giovane Isidoro, nipote del primo. Un po’ più alta e più sicura."],
["È vera la storia di “Salomone, ti ho superato”?","Si dice che, entrando nella chiesa finita, io abbia esclamato: “Salomone, ti ho superato!”, pensando al Tempio di Gerusalemme. Forse la leggenda è nata dopo di me. Io, bonario come sono, non smentisco. Ma, amico, un po’ d’orgoglio è concesso a chi ha fatto una cosa così."],
["Che cos’è la Cisterna Basilica?","Un’altra mia opera, del 532: un grande serbatoio d’acqua sotto la città, con più di trecento colonne in file ordinate. Serviva per i palazzi e le piazze. Dentro, tra le colonne, ci sono due teste di Medusa usate come basi. Oggi ci camminano i visitatori su passerelle. Scendici, è un luogo di silenzio."],
["Cosa hai fatto oltre alle chiese?","Ho fatto raccogliere e ordinare le leggi di Roma in un grande Codice, ancora studiato oggi nelle università. Con il generale Belisario ho riconquistato terre dell’impero in Africa e in Italia. E, si dice, nel 552 dei monaci portarono a Costantinopoli le uova del baco da seta nascoste in un bastone."],
["Come hai vissuto la peste del 541?","Con grande dolore. La peste colpì la città con una forza terribile, e molti morirono. La contrassi anch’io e, per grazia di Dio, guarii. Quando ripenso a quei giorni, mi stupisce solo la pazienza della gente. Non fui un uomo senza paura: anch’io tremai, e pregai molto."],
["Cosa pensi di Santa Sofia e della città di oggi?","Mi commuove. L’edificio è ancora in piedi, dopo più di quindici secoli. Nel 1453 Mehmed II la trasformò in moschea e furono aggiunti i minareti. Poi fu museo dal 1935, e dal 2020 è di nuovo moschea. Il tram che passa laggiù mi fa ridere: ai miei tempi c’erano solo carri e cavalli!"],
["Posso salutarti e proseguire la mia passeggiata?","Va’ pure, Pierpaolo, e che la Sapienza di Dio ti accompagni! Prima, però, guarda ancora la cupola: lo merita. Poi prosegui verso il palazzo di Topkapı, dove vissero i sultani, e verso il Gran Bazar, dove il mondo viene a fare affari. Hoşça kal, amico mio, e buon cammino!"]
],
ist_kemal:[
["Chi sei e che fai?","Kemal, quarantacinque anni, çaycı. Cioè quello che porta il tè a tutte le botteghe. Giro per il Bazar dalle nove di mattina, con questo vassoio in mano: a occhi chiusi so dove va ognuno. Conosco i tappetai, gli orafi e le loro mogli. Valla, so più cose io dei giornali!"],
["Perché il tè si beve in quel bicchiere a tulipano?","Si chiama ince belli, “vita sottile”. Si tiene dal bordo, con due dita, così non ti scotti. La forma tiene il calore e fa vedere il colore: deve essere rosso scuro, come il rubino. Se è marrone fangoso, il bravo çaycı ha sbagliato! Per questo, qui, controllo sempre."],
["Come si prepara il çay giusto?","Con la çaydanlık, la doppia teiera: sotto l’acqua bolle, sopra c’è il tè concentrato. Poi si versa un po’ di tè e si allunga con l’acqua calda, secondo i gusti: “açık” leggero, “koyu” forte. Il tè viene dal Mar Nero, da Rize. Zollette di zucchero, mai il latte. Non ti ci provare, abi!"],
["Se accetto un tè, devo comprare qualcosa?","No, assolutamente! Il tè offerto è ospitalità: il bottegaio ti dice “hoş geldin”, cioè “benvenuto”. Se ti piace il negozio, ne parliamo; se no, ringrazi e vai via sorridendo. Il bello del Bazar è proprio questo: nessuno ti obbliga. Ma una ceramica la compri lo stesso, vero? Scherzo, canım."],
["Come funziona la contrattazione?","Si chiama pazarlık ed è un gioco. Il venditore dice un prezzo alto, tu ne dici uno basso, e si va avanti con sorrisi e tè. Regola numero uno: non offrire se non vuoi comprare. Regola due: non insultare mai la merce. Alla fine ci si stringe la mano e tutti sono felici. Più o meno."],
["Da quanto tempo esiste il Gran Bazar?","Dal 1461: lo fece costruire Mehmed II, subito dopo la conquista, e le rendite servivano per Santa Sofia. Ci sono circa sessanta vie coperte, ognuna con il suo mestiere. Il terremoto del 1894 e tanti incendi hanno rovinato molte parti, ma ogni volta è stato ricostruito. Noi del Bazar siamo testardi."],
["Posso provare il caffè turco?","Certo! Si fa nella cezve, un piccolo pentolino, con la polvere finissima e lo zucchero secondo i gusti: “sade”, senza; “orta”, medio; “şekerli”, dolce. Non si beve fino in fondo: sul fondo resta il fondo. È patrimonio UNESCO dal 2013. Dopo si capovolge la tazzina e si legge il futuro nei fondi: si chiama fal."],
["Cos’è quell’occhio blu appeso a ogni bottega?","Il nazar boncuğu, l’occhio contro il malocchio. Si crede che gli sguardi invidiosi portino sfortuna e l’occhio blu li “guarda” per te. Lo vedi sulle porte, sulle culle, sui taxi. Non so se funzioni, ma io ne tengo uno sul vassoio. Meglio non rischiare, dice mia madre."],
["Perché le lampade a mosaico sono così colorate?","Sono fatte con pezzettini di vetro colorato, incollati uno a uno, e di sera, con la luce dentro, sembrano una tavolozza. Qui accanto vendono anche tappeti e kilim, che sono le stuoie tessute senza pelo. Gli orafi, invece, lavorano l’oro e l’argento sul retro. Ogni via ha il suo mestiere."],
["Che cosa sono gli han?","Sono le antiche locande-magazzino con un cortile interno: i mercanti arrivavano con le carovane, scaricavano la merce, dormivano e trattavano. Nel Bazar ce ne sono più di venti, alcune ancora piene di laboratori. Entra in un cortile e senti un altro silenzio, quasi dimenticato. Poi esci e ti ritrovi nel caos."],
["Cosa fate la domenica?","Il Bazar è chiuso, e anche io riposo! Si va a trovare i parenti, si mangia a pranzo tutti insieme e si fa la passeggiata sul Bosforo con un simit in mano. A Istanbul la famiglia è importante. Il lunedì si riparte presto, con il solito saluto: “kolay gelsin”, cioè “che il lavoro ti sia lieve”."],
["Posso salutarti e proseguire la mia passeggiata?","Hadi, Pierpaolo, vai! Ma se hai sete, ripassa: il tè per te è sempre pronto. Esci dal Bazar e sali verso la grande moschea di Solimano, la Süleymaniye, sulla collina: da lassù si vede tutta Istanbul. Kolay gelsin e Allaha ısmarladık, cioè “a Dio ti affido”. Mutlu yollar, buon viaggio!"]
],
ist_sinan:[
["Chi sei e che fai?","Sono Sinan, detto Koca Sinan, il “grande Sinan”. Il mio mestiere era costruire: moschee, ponti, scuole, bagni, acquedotti. Per quasi cinquant’anni sono stato architetto capo dei sultani. Oggi mi limito a guardare, evlat, cioè “figliolo”: la gente fa foto alle mie pietre, e fa bene."],
["Dove sei nato e come sei arrivato a Istanbul?","Sono nato intorno al 1489 ad Ağırnas, un villaggio vicino a Kayseri, in Anatolia. Nel 1512 fui arruolato con il devşirme, il sistema con cui i giovani cristiani venivano portati a servire lo Stato. Arrivai a Istanbul ragazzo, imparai la lingua e il mestiere. Non fu facile, ma la vita mi ha dato di più."],
["Com’è stato fare il soldato?","Ero giannizzero e poi ingegnere militare. Ho costruito ponti sui fiumi, navi per attraversare un lago, fortezze e torri. In guerra non si ha tempo di sbagliare: se il ponte crolla, crolla l’esercito. Fu la mia scuola migliore. Imparai a fare tanto con poco e a fidarmi dei calcoli."],
["Quante opere hai costruito?","Le liste parlano di circa quattrocento, da 374 a 476 a seconda dei conteggi. Moschee, scuole, ospedali, bagni, acquedotti, ponti. A Istanbul ci sono la Şehzade, la Süleymaniye, le moschee di Mihrimah a Üsküdar e a Edirnekapı. Molte sono ancora in piedi: segno che le fondamenta le ho fatte bene."],
["Cosa significa apprendista, compagno e maestro?","Le chiamavo così le mie tre opere. La Şehzade fu l’apprendistato. La Süleymaniye, qui, fu l’opera del compagno: la sua costruzione fu ordinata intorno al 1550 e durò circa sette anni. E la Selimiye di Edirne, fatta da vecchio, fu quella da maestro. Non ho mai creduto di aver smesso di imparare."],
["Come hai progettato la Süleymaniye?","La cupola è alta circa cinquantatré metri, e larga più di ventisette. Poi quattro minareti. Si dice che i dieci balconi ricordino che Solimano era il decimo sultano. Io ho cercato la luce: finestre ovunque, un’aria ampia. Guardando Santa Sofia, che mi stava vicina, volevo una cupola che non fosse da meno."],
["È vero il trucco del nerofumo e delle uova?","Si dice che nella moschea esista un locale dove si raccoglieva il nerofumo delle lampade a olio, per farne inchiostro. E si dice che nella malta ci fossero uova. Sono leggende che i muratori amano raccontare. Quel che è certo è che la pietra è ben tagliata e la cupola ha resistito a terremoti e incendi."],
["Cosa c’era nel complesso della moschea?","Una vera piccola città: madrase, cioè le scuole, un ospedale, una mensa per i poveri, i bagni e una biblioteca. Una moschea, per me, non era solo preghiera: era aiuto, studio, cura. I lavori impegnarono più di tremila persone. Il sultano pagava, io disegnavo e i muratori sudavano."],
["Dov’è la tua tomba?","Là, nell’angolo nord della moschea, accanto alla tomba di Solimano e a quella di Hürrem. Me la sono disegnata da solo, piccola e ben fatta. Morii il 17 luglio 1588, vecchio di quasi cento anni. Non ho mai pensato di fare una cosa grande: ho cercato di farla bene, e basta."],
["Chi sono stati i tuoi allievi?","Molti. Sedefkar Mehmed Ağa costruì la Moschea Blu, che trovi poco lontano. Hayrettin fece il Ponte di Mostar. Mi riempie il cuore pensare che i miei apprendisti abbiano fatto cose grandi. Un maestro non vale per quello che costruisce, ma per quello che lascia imparare."],
["Cosa pensi dell’Istanbul di oggi?","Mi diverte e mi spaventa! Il traffico, le gru, i grattacieli. Ma anche le colline piene di minareti e la gente che si ferma a bere il tè. Qui le cupole continuano a stare sopra le teste, e questo mi basta. Io ho dato pietre alla città; la città mi ha dato pazienza, evlat."],
["Posso salutarti e proseguire la mia passeggiata?","Va’ pure, Pierpaolo, e che Dio ti sia lieve il cammino. Scendi dalla collina fino al Corno d’Oro: troverai Balat e Fener, con le case colorate e le chiese. Güle güle, evlat, e ricorda: ogni edificio racconta chi l’ha fatto. Guarda sempre in alto, ma ogni tanto anche sotto i piedi. Allaha ısmarladık!"]
]
};
const TOPX_B={
ist_nazli:[
["Chi sei e che fai?","Nazlı, cinquantotto anni, nata e cresciuta a Balat. Faccio la nonna di tutto il quartiere e la mamma di una trentina di gatti, che non sono miei ma è come se lo fossero. Ogni giorno giro con crocchette e acqua. Mi chiamano “la signora dei gatti”, e io rispondo con piacere."],
["Mi racconti perché i gatti qui sono dappertutto?","Perché a Istanbul i gatti si amano da secoli, canım, “tesoro”. Nessuno li caccia: davanti alle porte trovi ciotole e casette di cartone o di legno, e il vicino che passa lascia sempre qualcosa. Un gatto che dorme sul davanzale è un ospite, non un intruso. E lo sanno bene, guarda come ti guardano!"],
["Com’è la vita di quartiere a Balat?","Qui la mahalle, il rione, è come un paese. Tutti sanno tutto di tutti, e ci si vuole bene lo stesso. Il tè si beve sul gradino, il bucato si stende da una finestra all’altra, e se ti manca il sale lo chiedi alla vicina. Se hai un problema, in dieci vengono a bussare. Solo un po’ di pettegolezzo, senza cattiveria."],
["Perché vedo cestini appesi a una corda dai balconi?","Perché le scale sono tante e le ginocchia poche! Dal balcone caliamo un cestino con la corda: dentro i soldi e un bigliettino. Il panettiere o il fruttivendolo ci mette il pane o le arance, e noi tiriamo su. Un saluto dall’alto, “merhaba”, e la spesa è fatta. Funziona da sempre, ed è anche comodo per le chiacchiere."],
["Perché le case di Balat sono così colorate?","Eh, abla, a ognuno il suo colore! Rosso, azzurro, giallo, verde menta: le facciate le dipingiamo come ci piace e poi i turisti fanno le foto. Alcune case sono vecchie, di legno, e vanno restaurate con pazienza. Le scale ripide poi sono un allenamento gratis: io non ho mai avuto bisogno della palestra."],
["Cosa cucini quando arriva qualcuno a casa?","Il tè prima di tutto, nei bicchierini a tulipano. Poi il börek, la sfoglia fine con formaggio e prezzemolo, e i dolma, le verdure ripiene di riso. Se è festa, anche i lokma, palline di pasta fritte nello sciroppo. “Afiyet olsun” è l’augurio di buon appetito: lo dico anche ai gatti, per educazione."],
["Qui a Balat vivevano comunità diverse, vero?","Sì, da sempre: greci, armeni, ebrei, turchi, un mosaico. Si racconta che dopo il 1492, quando gli ebrei furono cacciati dalla Spagna, il sultano Bayezid II li accolse a Istanbul. Molti si stabilirono qui, e la sinagoga Ahrida è ancora in piedi. È una storia di convivenza: la ricordo sempre con rispetto."],
["Cos’è questa chiesa tutta di ferro?","È la Chiesa di Ferro dei bulgari! Fu fatta a pezzi a Vienna fra il 1893 e il 1896, circa cinquecento tonnellate di ferro. I pezzi arrivarono qui lungo il Danubio e il Mar Nero e furono montati sul posto. La inaugurarono l’8 settembre 1898. L’architetto era Hovsep Aznavur. Si scelse il ferro perché il terreno vicino al mare cedeva."],
["Come si vive durante il Ramadan e il bayram?","Con rispetto e gioia. Durante il Ramadan un tamburino passa di notte, il davulcu, per svegliare chi vuole mangiare prima dell’alba: lo conosciamo tutti per nome. Al bayram, la festa, i bambini baciano la mano agli anziani e ricevono dolcetti e caramelle. Io ne tengo sempre una scatola piena: i miei nipoti lo sanno."],
["Vedo una scuola di mattoni rossi: cos’è?","Quella a Fener, poco più in là, con i mattoni rossi: sembra un castello! È la scuola greca, e vicino c’è il Patriarcato ecumenico, la sede della Chiesa greco-ortodossa. Fener e Balat si abbracciano. I ragazzi la mattina vanno a scuola chiacchierando in tre lingue, e io faccio finta di non capire quando dicono qualche parolaccia."],
["Hai un gatto famoso da presentarmi?","Il più famoso è quello di Santa Sofia, che si piazzava dentro con aria da padrone. A Kadıköy c’è la statua di Tombili, un gatto che si sdraiava sul marciapiede come un signore. E nel 2016 un documentario, “Kedi”, ha raccontato i gatti di Istanbul in tutto il mondo. Qui i miei sono meno celebri, ma più affettuosi."],
["Posso salutarti e proseguire la mia passeggiata?","Güle güle, Pierpaolo, vai con calma! Sali verso la Torre di Galata e poi scendi a İstiklal: il tramonto lassù è una meraviglia. Se vedi un gatto con una macchia bianca sul naso, è un mio parente: salutalo. E ricorda, ciotola sempre piena. Hoşça kal, canım!"]
],
ist_baris:[
["Chi sei e che fai?","Barış, trentaquattro anni, manovratore del tram nostalgico. Percorro İstiklal avanti e indietro fra Tünel e Taksim, con il mio campanello: ding-ding! Barış vuol dire “pace”, ma con la gente che non si sposta dai binari ne ho poca. Il lavoro più bello del mondo, abi, “fratello”, però con i nervi saldi."],
["Mi spieghi la storia di questo tram?","I primi tram erano a cavalli, dal 1871. Poi arrivarono quelli elettrici, nel 1914. Nel 1966 furono tolti, e per qualche anno l’avenue è stata silenziosa. Nel 1990 il tram rosso è tornato, ed è diventato il simbolo di İstiklal. Io lo lucido ogni mattina: ci tengo, è come la mia fidanzata, ma più puntuale."],
["Cosa succede quando qualcuno non si sposta?","Suono il campanello, ding-ding, ma qui i passanti camminano con il telefono in mano e gli occhi al cielo. Allora faccio il gesto con la mano: “yav, scansati!”. Quasi sempre sorridono e si spostano all’ultimo. Siamo un po’ come un cane che abbaia ma non morde: lenti ma con amore."],
["Cosa mi consigli di mangiare a İstiklal?","Il simit, un anello di pane al sesamo che si mangia anche a colazione, e le castagne arrosto, d’inverno. Poi il dondurma, il gelato turco, che si allunga e si attacca al cono: il gelataio fa mille trucchi prima di dartelo. Se non lo prendi, ti guarda con aria offesa. E se sei in vena, passa a Balık Pazarı."],
["Come si va in giro per Istanbul?","Con la Istanbulkart, una tesserina che vale per tram, metrò, autobus e traghetti: la ricarichi e vai dove vuoi. Poi ci sono i dolmuş, minibus che partono quando sono pieni, e il Marmaray, il treno sotto il Bosforo. Il traffico è un incubo: a piedi spesso arrivi prima. Ma qui si cammina sempre in salita o in discesa."],
["Cos’è questo tunnel con il trenino qui vicino?","Il Tünel: un piccolo metrò sotterraneo che sale dal quartiere di Karaköy a Galata. Lo inaugurarono il 17 gennaio 1875 ed è il secondo metrò sotterraneo più antico del mondo, dopo quello di Londra, del 1863. Lo uso anch’io per andare al lavoro: due minuti e sei in cima alla collina. Altro che fatica!"],
["Cosa c’è nel Çiçek Pasajı?","Il Passaggio dei Fiori: un vicolo coperto con tavoli, lampadine, musicisti e camerieri che ti chiamano da lontano. Ci si siede per mezze, piccoli piatti da dividere, e un bicchiere di rakı, l’anice locale, o di birra. Non si ha fretta: si chiacchiera fino a tardi. Meglio prenotare il sabato sera, se no resti in piedi."],
["Chi tifi tu, e come funziona il calcio qui?","Qui il calcio è una religione! A Istanbul ci sono tre squadre grandi: Galatasaray, Fenerbahçe e Beşiktaş. Io tifo la mia, ma non ti dico quale, perché si scherza ma si rispetta. Nei giorni di derby İstiklal si riempie di sciarpe gialle e rosse, blu e gialle, bianche e nere. Il tram, anche lui, canta."],
["C’è una storia legata alla Torre di Galata?","La Torre fu costruita dai genovesi nel 1348, si chiamava Christea Turris, la Torre del Cristo. Poi si racconta del volo di Hezarfen Ahmed Çelebi: nel 1638, con ali fatte da lui, sarebbe volato fino a Üsküdar, dall’altra parte del Bosforo. Si dice, si dice: la fonte è Evliya Çelebi, e nessuno può garantirlo."],
["Come si fa la fila a Istanbul?","In teoria in fila indiana, in pratica a ventaglio! Ma con un sorriso arrivi sempre. Per il tram si aspetta in piedi, per il tè si tende il braccio, per il pane si urla il nome. Se vedi un vecchietto, gli cedi il posto sempre: è una regola non scritta. E se qualcuno ti offre un çay, accetta: è un benvenuto."],
["Com’è passare il giorno su un tram che va avanti e indietro?","Bello, e un po’ da matti: faccio venti, trenta volte lo stesso tratto, ma non è mai uguale. Ci sono i bambini che salutano, le coppie che si baciano, gli artisti che suonano. Alla fine del turno bevo un çay, il tè nel bicchiere a tulipano, e guardo il sole calare. Poi riparto: dingdong, come un orologio."],
["Posso salutarti e proseguire la mia passeggiata?","Hadi, Pierpaolo, “forza”, vai! Prosegui verso Ortaköy e il Bosforo: il tramonto sull’acqua dà il meglio. E se senti un ding-ding in lontananza, sono io che ti saluto. Mutlu yollar, buon cammino, e occhio ai binari, eh!"]
],
ist_ahmet:[
["Chi sei e che fai?","Ahmet, quarantadue anni, venditore di kumpir. Faccio patate al forno giganti qui a Ortaköy da quindici anni, davanti alla moschea. Mia moglie dice che ho le mani più bruciate di quelle di un fabbro. Ma la gente torna, e questo conta più di tutto. Valla, “giuro”, è il miglior lavoro del mondo!"],
["Che cos’è il kumpir? Posso assaggiarlo?","Certo, buyur, “prego”! È una patata grossa cotta intera sul fuoco, aperta e schiacciata con burro e formaggio kaşar. Poi scegli i condimenti: insalata russa, olive, mais, cetriolini, salsiccia, funghi... Io dico sempre: più è colorata, più è buona. Una patata e sei a posto per tutta la sera."],
["Perché la gente fotografa sempre quella moschea?","Perché è bellissima! È la Büyük Mecidiye Camii, la moschea di Ortaköy, costruita attorno al 1854–56 dai Balyan, una famiglia di architetti armeni. Ha due minareti sottili e finestre grandi sull’acqua. Fu restaurata fra il 2011 e il 2014. E sopra c’è il ponte: una foto sola e hai due simboli."],
["Cosa mi dici del ponte sul Bosforo?","È aperto dal 1973, e oggi si chiama Ponte dei Martiri del 15 Luglio. Collega l’Europa all’Asia, due continenti in pochi minuti! La sera si illumina con colori che cambiano: rosso, viola, blu. Io lo guardo mentre servo le patate. Quando c’è traffico, e c’è sempre, i clacson arrivano fino alla bancarella."],
["Come funziona il Bosforo? Come passano tutte quelle navi?","Il Bosforo collega il Mar Nero al Mar di Marmara: una striscia d’acqua che divide Europa e Asia. Le navi passano in fila, da una parte all’altra, guidate da piloti che conoscono ogni curva. Sotto c’è una doppia corrente: in superficie scende dal Mar Nero, sotto risale dal Marmara. Dicono i pescatori che i pesci lo sanno."],
["Cosa si fa a Ortaköy la domenica?","Il mercatino! Bancarelle di gioielli, oggetti artigianali, dipinti, sciarpe, e tanta gente che passeggia. Si mangia la patata, il waffle con la cioccolata, e si beve tè e simit sul molo. I gabbiani sono furbissimi: se tieni il simit alto, te lo rubano dal naso. Io sorrido e gliene lascio un pezzetto."],
["Come si vive fra due continenti?","Benissimo, abi! Io abito in Asia, a Üsküdar, e lavoro in Europa. Ogni mattina attraverso il Bosforo come se andassi dal fornaio. A pranzo si mangia di qua, a cena di là. C’è chi dorme in un continente e lavora nell’altro. Il vapur, il traghetto, è il mio autobus, ed è anche più bello."],
["Cosa sono quelle case di legno sull’acqua?","I yalı, le ville di legno sul mare, costruite per le famiglie dei pascià e dei ricchi che volevano l’acqua sotto la finestra. Qui lungo il Bosforo ce ne sono ancora tante, alcune restaurate, altre un po’ malandate. Quando le guardo penso: che fortuna, svegliarsi con il mare in camera! Costano quanto un palazzo."],
["Cosa c’è là in fondo, quel palazzo bianco sul mare?","Dolmabahçe, il palazzo costruito per Abdülmecid I dagli architetti Garabet e Nigoğayos Balyan, a partire dal 1843. Ha 285 stanze, 46 sale e sei hammam, bagni turchi. C’è un lampadario da 4,5 tonnellate con 750 luci: si disse un regalo della regina Vittoria, ma una ricevuta del 2006 mostra che lo pagò il sultano."],
["È vero che lì dentro gli orologi si sono fermati?","In parte. Il 10 novembre 1938 Atatürk, il fondatore della Repubblica, morì a Dolmabahçe alle 9:05. L’orologio nella sua stanza segna ancora quell’ora. Tutti i turchi lo ricordano, e ogni anno il 10 novembre, alle 9:05, la città si ferma in silenzio. È un momento di rispetto che non si dimentica."],
["Come si cena a Istanbul?","Tardi e a lungo! Si comincia con le mezze, antipasti da condividere, poi pesce o carne alla griglia, e si finisce con frutta, dolci e tè. Nessuno ti porta il conto subito: lo devi chiedere, “hesap, lütfen”. E se c’è un anziano a tavola, paga lui, non si discute. Siamo ospitali fino all’esagerazione."],
["Posso salutarti e proseguire la mia passeggiata?","Güle güle, Pierpaolo! Prendi il traghetto e vai a Üsküdar, sull’altra sponda: c’è la Torre della Fanciulla, in mezzo all’acqua, che di notte è un sogno. Salutami il Bosforo. E se ripassi, la patata è sempre pronta. Allaha ısmarladık, a presto!"]
],
ist_ece:[
["Chi sei e che fai?","Ece, ventinove anni, marinaia sul vapur: il traghetto di Istanbul. Lancio e recupero le cime, aiuto i passeggeri, controllo le passerelle. Vivo in Asia e lavoro in Europa, quindi il Bosforo lo passo due volte al giorno. Mi hanno detto che rido troppo forte: ma sul mare serve, così il capitano mi sente!"],
["Come funziona il vapur? Dove va?","Va da una sponda all’altra: Kadıköy, Karaköy, Üsküdar, Eminönü, e molte altre fermate. Un giro dura venti, trenta minuti e costa poco: basta la Istanbulkart. A bordo c’è chi legge, chi dorme, chi prende il tè. Per noi è come l’autobus, ma con un panorama da cartolina. Non c’è fretta: il mare non si può correre."],
["Perché tutti danno il simit ai gabbiani?","Perché ormai i martì, i gabbiani, lo sanno e ti seguono! Il simit è un anello di pane al sesamo che si compra al molo: metà per te e metà per loro. Lo lanci in aria e lo prendono al volo. Se tieni la mano alta, ti rubano anche il tuo. Una volta uno mi ha preso il panino dalle mani: valla, che furbi!"],
["E il tè a bordo?","Immancabile! Il ragazzo con il vassoio gira fra i sedili con i bicchierini a tulipano, e tu lo prendi al volo. Si beve sul ponte, anche col vento, anche d’inverno. Per noi il çay è come l’aria: se manca, ci sentiamo persi. Basta uno sguardo e te lo portano, “afiyet olsun”, buon appetito, anche se è solo tè."],
["Capita di vedere i delfini?","A volte sì! Qualche volta seguono il traghetto e saltano accanto alla prua. Quando arrivano tutti corrono sul ponte con i telefoni, anche io, anche se ho visto mille volte. Nelle giornate di nebbia è un altro mondo: non si vede la riva e la sirena suona piano. Siamo piccoli piccoli, in mezzo a una grande città."],
["Cosa fai quando attracchi con il vento forte?","Mi concentro! Si lancia la cima, la si avvolge sulla bitta e si tira piano: se sbagli un secondo, la barca balla. Ci vuole mano ferma e il capitano che ti guarda negli occhi. Con le raffiche di poyraz, il vento del nord, il molo è un’avventura. Il bello è che alla fine tutti applaudono, anche solo con lo sguardo."],
["Con il Marmaray, ha ancora senso il vapur?","Certo! Il Marmaray, il treno sotto il Bosforo, è aperto dal 2013 e va veloce, ma sotto terra non vedi niente. Il vapur invece è luce, vento, gabbiani, tramonto. Chi può, lo preferisce per piacere. Il treno è per la fretta, il traghetto per il cuore: io dico che si completano, come il pane e il formaggio."],
["Com’è Kadıköy, dove vivi?","Vivace! Ha il mercato del pesce, le verdure, il caffè, le librerie e i locali con la musica. A Moda, nel quartiere vicino, la sera ci si siede sul prato davanti al mare. È la sponda asiatica, ma sembra un altro paese: più tranquilla, più giovane. Quando finisco il turno, un tè e una tavola di formaggi e olive, e il giorno è finito."],
["Che cos’è questa grande stazione illuminata?","Haydarpaşa, la stazione ferroviaria: stile neoclassico tedesco, costruita su 1.100 pali di legno lunghi 21 metri conficcati nel mare. Fu scelta nel 1904 come capolinea della ferrovia di Baghdad e inaugurata il 4 novembre 1909. Dal 2012–2013 non partono più treni di lunga percorrenza, e il palazzo è in restauro. Resta uno dei volti più belli della città."],
["Mi spieghi la storia della Torre della Fanciulla?","È la Kız Kulesi, su uno scoglio a circa duecento metri da Üsküdar. Nel 1110 era una torre di legno con una catena. Fu faro nel 1725, stazione di quarantena nel 1829, restaurata nel 1832 da Mahmud II, e riaperta nel 2023. Si racconta della principessa e del serpente: il padre la chiuse nella torre, ma il serpente nascosto in un cesto di frutta la trovò."],
["Com’è lavorare di notte sul porto?","Calmo e magico. Il turno serale ha poche persone, le luci sull’acqua e l’aria che sa di sale e di nafta. Si parla a bassa voce, si beve un tè caldo, si guardano le luci della città, i traghetti che scivolano. Ogni tanto mi fermo a guardare l’altra sponda e penso: sono un puntino qui, e sono felice."],
["Posso salutarti e proseguire la mia passeggiata?","Hoşça kal, Pierpaolo! In fondo al molo c’è una luce strana, calda, che non è di nessuna lampada: se la vedi, seguila senza paura. È la strada per un altro mondo. Il mare ti saluta, e anche io. Mutlu yollar, buon viaggio!"]
]
};
Object.assign(TOPX,TOPX_A,TOPX_B);
})();
