/* Funzioni di disegno e personaggi generici (fig, echo). Raramente da modificare. */
/* =====================================================================
   LA MIA BOLLA — struttura
   1) helper di disegno   2) libreria di elementi (PR) e personaggi
   3) MONDI: ogni mondo e' un blocco addWorld({...}) — per aggiungerne uno
      basta copiare un blocco, cambiare colori, elementi, personaggi, dialoghi.
   4) motore (camminata, dialoghi, portali)
   ===================================================================== */
const W=480,H=520,GY=452,HZ=340;
const $=id=>document.getElementById(id),cv=$('c'),g=cv.getContext('2d'),st=$('stage');
const hr=i=>{const s=Math.sin(i*127.1+311.7)*43758.5453;return s-Math.floor(s)};
const cl=(v,a,b)=>Math.max(a,Math.min(b,v));
const rect=(g,c,x,y,w,h)=>{g.fillStyle=c;g.fillRect(x,y,w,h)};
const dot=(g,c,x,y,r)=>{g.fillStyle=c;g.beginPath();g.arc(x,y,r,0,7);g.fill()};
const el=(g,c,x,y,rx,ry,r)=>{g.fillStyle=c;g.beginPath();g.ellipse(x,y,rx,ry,r||0,0,7);g.fill()};
const poly=(g,c,p)=>{g.fillStyle=c;g.beginPath();p.forEach((q,i)=>i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1]));g.closePath();g.fill()};
const each=(o,step,seed,cb)=>{const a=Math.floor(o/step)-1,b=Math.floor((o+W)/step)+1;for(let i=a;i<=b;i++)cb(i*step-o,i,hr(i*7+seed))};
const at=(o,x0,cb)=>cb(x0-o);
const limb=(g,x,y,len,a,w,c)=>{g.strokeStyle=c;g.lineWidth=w;g.lineCap='round';g.beginPath();g.moveTo(x,y);g.lineTo(x+Math.sin(a)*len,y+Math.cos(a)*len);g.stroke();g.lineCap='butt'};
const cloud=(g,x,y,s)=>{g.fillStyle='rgba(255,255,255,.8)';[[0,0,40,16],[28,-8,34,18],[-28,4,30,12],[54,4,26,10]].forEach(([dx,dy,rx,ry])=>{g.beginPath();g.ellipse(x+dx*s,y+dy*s,rx*s,ry*s,0,0,7);g.fill()})};

/* ---------- personaggi generici ---------- */
function fig(g,x,y,t,o){g.save();g.translate(x,y);g.scale((o.f||1)*(o.s||1),o.s||1);const b=Math.sin(t*2+(o.ph||0))*1.3;
 if(o.long)poly(g,o.bot,[[-13,-48+b],[13,-48+b],[20,0],[-20,0]]);
 else{limb(g,-5,-48+b,46,0,9,o.bot);limb(g,5,-48+b,46,0,9,o.bot);el(g,'#222',-4,-1,8,4);el(g,'#222',8,-1,8,4)}
 poly(g,o.top,[[-13,-90+b],[13,-90+b],[12,-44+b],[-12,-44+b]]);
 limb(g,-12,-84+b,36,.15,7,o.skin);limb(g,12,-84+b,36,-.15,7,o.skin);
 el(g,o.skin,1,-100+b,11,12);
 if(o.hair){g.fillStyle=o.hair;g.beginPath();g.arc(1,-102+b,12.5,Math.PI,0);g.fill()}
 dot(g,'#222',6,-101+b,1.6);
 if(o.acc)o.acc(g,b,t);g.restore()}
function echo(g,x,y,t,c){g.save();g.translate(x,y+Math.sin(t*1.5)*3);g.globalAlpha=.55+.15*Math.sin(t*2);g.shadowColor=c;g.shadowBlur=24;g.fillStyle=c;
 g.beginPath();g.arc(0,-100,12,0,7);g.fill();poly(g,c,[[-15,-86],[15,-86],[14,-44],[-14,-44]]);rect(g,c,-12,-44,10,40);rect(g,c,2,-44,10,40);
 g.shadowBlur=0;g.globalAlpha=.25;for(let i=0;i<4;i++)dot(g,c,Math.sin(t+i*2)*18,-30-i*28-(t*20+i*15)%20,2);g.restore()}

