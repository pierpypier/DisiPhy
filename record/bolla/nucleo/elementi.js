/* ---------- libreria elementi: PR.nome(g,x,y,t,arg) con y = terreno ---------- */
const PR={};
PR.temple=(g,x,y)=>{const c='#f3ecd9',s='#d8cfb4';rect(g,s,x-150,y-10,300,10);rect(g,c,x-140,y-20,280,10);rect(g,'#3a3350',x-132,y-132,264,112);
 for(let i=0;i<8;i++){const cx=x-120+i*34;rect(g,c,cx-7,y-135,14,115);rect(g,s,cx+3,y-135,4,115);rect(g,s,cx-10,y-140,20,6)}
 rect(g,c,x-140,y-152,280,12);poly(g,c,[[x-150,y-152],[x,y-205],[x+150,y-152]]);poly(g,'#e2d6b4',[[x-120,y-158],[x,y-196],[x+120,y-158]]);dot(g,'#d9b24a',x,y-170,7)};
PR.olive=(g,x,y,t,s)=>{s=s||1;g.save();g.translate(x,y);g.scale(s,s);poly(g,'#6a5a48',[[-8,0],[-4,-30],[-12,-52],[-2,-44],[4,-56],[3,-30],[10,0]]);
 [[-24,-62,28,18,'#8fa57a'],[8,-72,30,20,'#a3b88a'],[26,-56,22,15,'#8fa57a'],[-4,-84,24,15,'#b3c79a']].forEach(a=>el(g,a[4],a[0],a[1],a[2],a[3]));g.restore()};
PR.cypress=(g,x,y,t,h)=>{h=h||70;el(g,'#243f2a',x,y-h/2,9,h/2);rect(g,'#4a3a2a',x-1.5,y-4,3,4)};
PR.col=(g,x,y,t,h)=>{h=h||90;rect(g,'#eee6d0',x-8,y-h,16,h);rect(g,'#d2c8aa',x+2,y-h,5,h);rect(g,'#eee6d0',x-11,y-h-5,22,6);rect(g,'#eee6d0',x-11,y-4,22,4)};
PR.amph=(g,x,y)=>{g.fillStyle='#c0603a';g.beginPath();g.moveTo(x-6,y-44);g.quadraticCurveTo(x-22,y-24,x-8,y);g.lineTo(x+8,y);g.quadraticCurveTo(x+22,y-24,x+6,y-44);g.closePath();g.fill();rect(g,'#c0603a',x-6,y-54,12,12);rect(g,'#1a0e08',x-14,y-30,28,3);rect(g,'#1a0e08',x-12,y-22,24,2)};
PR.statue=(g,x,y)=>{const c='#ece6d8';rect(g,'#cfc7b0',x-24,y-28,48,28);rect(g,c,x-20,y-32,40,6);poly(g,c,[[x-12,y-32],[x-10,y-92],[x+10,y-92],[x+12,y-32]]);dot(g,c,x,y-102,10);limb(g,x+10,y-88,34,-2.4,7,c);rect(g,'#d8d0bc',x+10,y-92,2,56)};
PR.tripod=(g,x,y,t)=>{g.strokeStyle='#8a6a2a';g.lineWidth=4;[[-16,0],[16,0],[0,6]].forEach(a=>{g.beginPath();g.moveTo(x+a[0],y+a[1]);g.lineTo(x,y-50);g.stroke()});
 g.fillStyle='#b8902f';g.beginPath();g.ellipse(x,y-52,22,8,0,0,7);g.fill();
 for(let i=0;i<10;i++){const k=(t*.5+i/10)%1;el(g,'rgba(210,190,255,'+(.4*(1-k))+')',x+Math.sin(k*6+i)*14,y-58-k*90,6+k*14,5+k*10)}};
PR.fountain=(g,x,y,t)=>{el(g,'#d8d0b8',x,y-6,60,14);el(g,'#7ac0e0',x,y-9,52,10);rect(g,'#e6dec8',x-6,y-52,12,46);el(g,'#d8d0b8',x,y-52,20,6);
 g.strokeStyle='rgba(180,230,255,.8)';g.lineWidth=2;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(x,y-56);g.quadraticCurveTo(x+i*14,y-84+Math.abs(i)*8,x+i*22,y-14);g.stroke()}};
PR.palm=(g,x,y,t,h)=>{h=h||120;g.strokeStyle='#6a4a2a';g.lineWidth=7;g.lineCap='round';g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+10,y-h/2,x+4,y-h);g.stroke();g.lineWidth=4;g.strokeStyle='#2f8a3e';
 for(let i=0;i<7;i++){const a=-Math.PI/2+(i-3)*.55,sw=Math.sin(t*1.3+i)*3;g.beginPath();g.moveTo(x+4,y-h);g.quadraticCurveTo(x+4+Math.cos(a)*26,y-h+Math.sin(a)*22-8,x+4+Math.cos(a)*50+sw,y-h+Math.sin(a)*34+24);g.stroke()}g.lineCap='butt'};
PR.umbrella=(g,x,y,t,c)=>{c=c||'#ff5a8a';rect(g,'#f4ecd8',x-22,y-3,60,5);rect(g,'#6a5a4a',x-1,y-80,3,80);g.fillStyle=c;g.beginPath();g.ellipse(x,y-80,42,22,0,Math.PI,0);g.fill();
 for(let i=-1;i<=1;i++)poly(g,'rgba(255,255,255,.7)',[[x+i*28-5,y-80],[x+i*28+5,y-80],[x+i*14+2,y-100],[x+i*14-2,y-100]])};
PR.bastione=(g,x,y)=>{const c='#d9c18c',d='#bfa56e';rect(g,c,x-170,y-120,340,120);rect(g,d,x-170,y-124,340,6);for(let i=0;i<12;i++)rect(g,c,x-170+i*30,y-138,16,14);
 [-110,0,110].forEach(a=>{rect(g,'#4a3a2a',x+a-26,y-96,52,96);g.fillStyle='#4a3a2a';g.beginPath();g.arc(x+a,y-96,26,Math.PI,0);g.fill()});
 [-190,150].forEach(a=>{rect(g,c,x+a,y-180,40,180);for(let i=0;i<4;i++)rect(g,c,x+a+i*11,y-192,7,12);rect(g,'#4a3a2a',x+a+17,y-130,6,24)});rect(g,'rgba(0,0,0,.1)',x+60,y-120,110,120)};
PR.torre=(g,x,y)=>{const c='#cdbb92';rect(g,c,x-34,y-210,68,210);rect(g,'rgba(0,0,0,.13)',x+6,y-210,28,210);for(let i=0;i<5;i++)rect(g,c,x-34+i*15,y-224,10,14);
 [-150,-110,-70].forEach(a=>rect(g,'#3a2e22',x-3,y+a-60,6,22));rect(g,'#3a2e22',x-12,y-44,24,44);dot(g,'#3a2e22',x,y-44,12);rect(g,'#bfa97a',x-34,y-20,68,3)};
PR.barca=(g,x,y,t)=>{g.save();g.translate(x,y-4+Math.sin(t*1.6)*2);g.rotate(Math.sin(t*1.2)*.03);poly(g,'#2a62b8',[[-70,-24],[-56,0],[56,0],[76,-30]]);rect(g,'#f4f4ee',-66,-26,138,6);rect(g,'#6a4a2a',-2,-120,4,96);poly(g,'#f8f4e8',[[4,-116],[4,-34],[48,-34]]);g.restore()};
PR.stagno=(g,x,y,t)=>{el(g,'#86c8d6',x,y+12,170,22);for(let i=0;i<5;i++)el(g,'rgba(255,255,255,.35)',x-90+i*45+Math.sin(t+i)*6,y+12+(i%2)*6,16,2);
 for(let i=0;i<9;i++){g.strokeStyle='#5a7a3a';g.lineWidth=2;g.beginPath();g.moveTo(x-170+i*6,y+14);g.lineTo(x-172+i*6+Math.sin(t+i)*2,y-18-hr(i)*16);g.stroke()}};
PR.cabina=(g,x,y,t,c)=>{c=c||'#e8505a';rect(g,'#f4ecd8',x-24,y-62,48,62);for(let i=0;i<4;i++)rect(g,c,x-24+i*12,y-62,6,62);poly(g,'#c08a50',[[x-28,y-62],[x,y-82],[x+28,y-62]]);rect(g,'#3a2e22',x-7,y-34,14,34)};
PR.door=(g,x,y,t,l)=>{y-=34;rect(g,'#4a2e1a',x-40,y-160,80,160);rect(g,'#6b4528',x-34,y-154,68,150);rect(g,'#5a3820',x-26,y-146,52,56);rect(g,'#5a3820',x-26,y-84,52,70);dot(g,'#d9b24a',x+24,y-70,4);rect(g,'#d9b24a',x-12,y-132,24,14);g.font='bold 11px sans-serif';g.textAlign='center';g.fillStyle='#222';g.fillText(l,x,y-121)};
PR.elev=(g,x,y)=>{y-=34;rect(g,'#6a727c',x-50,y-170,100,170);rect(g,'#8a929c',x-44,y-164,42,158);rect(g,'#8a929c',x+2,y-164,42,158);rect(g,'#222',x-1,y-164,2,158);rect(g,'#f4c42a',x-34,y-120,68,30);g.font='bold 9px sans-serif';g.textAlign='center';g.fillStyle='#222';g.fillText('FUORI',x,y-108);g.fillText('SERVIZIO',x,y-97);dot(g,'#c0392b',x+58,y-90,4)};
PR.stairs=(g,x,y)=>{for(let i=0;i<7;i++){rect(g,i%2?'#8a7a6a':'#9a8a7a',x-70+i*20,y-34+i*0,140-i*20,0)}for(let i=0;i<6;i++){rect(g,'#7a6a5a',x-70+i*22,y-18-i*16,200-i*22,18+i*16);rect(g,'#9a8a7a',x-70+i*22,y-18-i*16,200-i*22,4)}g.strokeStyle='#2a1a10';g.lineWidth=4;g.beginPath();g.moveTo(x-70,y-62);g.lineTo(x+130,y-160);g.stroke()};
PR.sofa=(g,x,y)=>{y-=12;rect(g,'#6a3a2c',x-76,y-78,152,56);rect(g,'#8a4a38',x-80,y-38,160,32);rect(g,'#6a3a2c',x-88,y-52,18,50);rect(g,'#6a3a2c',x+70,y-52,18,50);rect(g,'#9a5a44',x-66,y-46,60,16);rect(g,'#9a5a44',x-2,y-46,60,16);
 el(g,'rgba(255,226,122,.35)',x-36,y-40,34,10);rect(g,'#3a2418',x-80,y-6,10,8);rect(g,'#3a2418',x+70,y-6,10,8);poly(g,'#e8c04a',[[x-58,y-60],[x-44,y-60],[x-48,y-48],[x-62,y-48]])};
PR.board=(g,x,y,t)=>{y-=26;rect(g,'#6a727c',x-84,y-156,168,106);rect(g,'#f4f6f8',x-80,y-152,160,98);rect(g,'#6a727c',x-3,y-50,6,50);rect(g,'#444',x-26,y-4,52,4);
 g.font='italic 16px Georgia,serif';g.textAlign='left';g.fillStyle='#2a5ac8';g.fillText('∫ ψ dx = ?',x-72,y-130);g.fillStyle='#c0392b';g.fillText('Σ n² ≈ ∞',x-72,y-106);g.fillStyle='#2a5ac8';g.fillText('√(x) → ♥',x-12,y-86);
 g.strokeStyle='#2a8a3a';g.lineWidth=2;g.beginPath();g.moveTo(x-70,y-90);g.quadraticCurveTo(x-40,y-70,x-20,y-92);g.stroke();rect(g,'#ffe27a',x+52,y-148,18,18)};
PR.shelf=(g,x,y)=>{y-=30;rect(g,'#5a3a22',x-60,y-160,120,160);const cs=['#c0392b','#2a7ae0','#e8c04a','#2a9a4a','#8a4ad0','#e8e0d0'];for(let r=0;r<4;r++){rect(g,'#3a2414',x-56,y-148+r*38+30,112,4);for(let i=0;i<9;i++)rect(g,cs[(i+r*2)%6],x-54+i*12,y-146+r*38+(i%3)*3,9,30-(i%3)*3)}};
PR.table=(g,x,y)=>{y-=10;rect(g,'#7a5a3a',x-70,y-52,140,8);rect(g,'#5a3e24',x-62,y-44,6,44);rect(g,'#5a3e24',x+56,y-44,6,44);
 [[-40,'#f4f4ee'],[-14,'#f4f4ee'],[16,'#e8d8a0']].forEach(([dx,c])=>{rect(g,c,x+dx-10,y-72,22,20);rect(g,'#c0392b',x+dx-10,y-72,22,4)});rect(g,'#6a4a30',x-96,y-34,20,6);rect(g,'#6a4a30',x-92,y-28,4,28);rect(g,'#6a4a30',x+76,y-34,20,6);rect(g,'#6a4a30',x+88,y-28,4,28)};
PR.scope=(g,x,y)=>{y-=20;g.strokeStyle='#8a929c';g.lineWidth=3;[[-18,0],[18,0],[0,4]].forEach(a=>{g.beginPath();g.moveTo(x+a[0],y+a[1]);g.lineTo(x,y-70);g.stroke()});g.save();g.translate(x,y-76);g.rotate(-.6);rect(g,'#e8ecf4',-8,-60,16,64);rect(g,'#444',-10,-66,20,8);g.restore()};
PR.plant=(g,x,y)=>{rect(g,'#a8603a',x-12,y-26,24,26);for(let i=0;i<6;i++){g.strokeStyle='#2a8a3a';g.lineWidth=5;g.beginPath();g.moveTo(x,y-26);g.quadraticCurveTo(x+(i-3)*8,y-50,x+(i-3)*13,y-62+Math.abs(i-3)*6);g.stroke()}};
PR.lamp=(g,x,y,t)=>{rect(g,'#444',x-1.5,y-120,3,120);el(g,'rgba(255,230,160,.18)',x,y-120,34,34);poly(g,'#e8c04a',[[x-12,y-118],[x+12,y-118],[x+7,y-134],[x-7,y-134]])};

PR.tv=(g,x,y,t)=>{y-=10;rect(g,'#3a2a1a',x-62,y-34,124,34);rect(g,'#111',x-50,y-102,100,66);const f=.45+.2*Math.sin(t*3);rect(g,'rgba(90,160,255,'+f+')',x-46,y-98,92,58);el(g,'rgba(120,180,255,.12)',x,y-70,90,60);rect(g,'#222',x-30,y-30,60,8);dot(g,'#2a9a4a',x+40,y-26,2)};
PR.fridge=(g,x,y)=>{y-=30;rect(g,'#d8dde4',x-34,y-152,68,152);rect(g,'#aeb6c0',x-34,y-84,68,3);rect(g,'#8a929c',x+22,y-130,4,28);rect(g,'#8a929c',x+22,y-76,4,24);[['#e8505a',-22,-130],['#2a7ae0',-10,-118],['#e8c04a',-24,-104]].forEach(a=>rect(g,a[0],x+a[1],y+a[2],8,8));rect(g,'#fff6c0',x-18,y-70+-30,22,18)};
PR.desk=(g,x,y,t)=>{y-=24;rect(g,'#6a4a30',x-72,y-48,144,8);rect(g,'#4a3220',x-66,y-40,6,40);rect(g,'#4a3220',x+60,y-40,6,40);[-46,6].forEach((o,i)=>{rect(g,'#111',x+o,y-104,46,36);rect(g,'rgba(60,200,120,'+(.5+.2*Math.sin(t*2+i))+')',x+o+3,y-101,40,30);rect(g,'#222',x+o+20,y-68,6,20)});rect(g,'#3a3a4a',x-14,y-30,30,6);rect(g,'#555',x-6,y-24,3,24)};
PR.games=(g,x,y)=>{y-=6;el(g,'#7a5a3a',x,y-44,64,12);rect(g,'#5a3e24',x-4,y-44,8,44);rect(g,'#5a3e24',x-26,y-4,52,4);for(let i=0;i<4;i++)for(let j=0;j<4;j++)rect(g,(i+j)%2?'#e8d8a0':'#2a7a8a',x-24+i*12,y-54+j*5,12,5);[-50,50].forEach(o=>{rect(g,'#6a4a30',x+o-12,y-26,24,5);rect(g,'#6a4a30',x+o-2,y-21,4,21)});rect(g,'#fff',x+34,y-52,7,7);dot(g,'#222',x+37,y-49,1)};
PR.mail=(g,x,y)=>{y-=34;rect(g,'#8a929c',x-54,y-112,108,74);for(let r=0;r<3;r++)for(let c=0;c<4;c++){rect(g,'#2a2e36',x-48+c*26,y-106+r*22,22,17);rect(g,'#d8dde4',x-44+c*26,y-100+r*22,14,3)}};
PR.rug=(g,x,y)=>{el(g,'#8a3a3a',x,y+20,120,16);el(g,'#d8b070',x,y+20,100,12);el(g,'#8a3a3a',x,y+20,60,7)};

PR.cattedrale=(g,x,y,t)=>{const c='#e6d6b0',d='#cdb98a';rect(g,c,x-150,y-250,300,250);rect(g,d,x-150,y-254,300,6);poly(g,c,[[x-150,y-250],[x,y-300],[x+150,y-250]]);
 for(let i=0;i<7;i++){rect(g,d,x-140+i*40,y-232,6,24);g.fillStyle=d;g.beginPath();g.arc(x-137+i*40+20,y-232,20,Math.PI,0);g.fill();g.fillStyle=c;g.beginPath();g.arc(x-137+i*40+20,y-232,16,Math.PI,0);g.fill()}
 dot(g,d,x,y-176,32);dot(g,'#3a4a6a',x,y-176,24);for(let i=0;i<8;i++){g.strokeStyle=d;g.lineWidth=2;g.beginPath();g.moveTo(x,y-176);g.lineTo(x+Math.cos(i*.785)*24,y-176+Math.sin(i*.785)*24);g.stroke()}dot(g,d,x,y-176,5);
 [-90,0,90].forEach((a,i)=>{const w=i==1?34:24,h=i==1?98:78;rect(g,'#4a3322',x+a-w/2,y-h,w,h);g.fillStyle='#4a3322';g.beginPath();g.arc(x+a,y-h,w/2,Math.PI,0);g.fill();g.fillStyle=d;g.beginPath();g.arc(x+a,y-h-4,w/2+8,Math.PI,0);g.lineWidth=0;g.fill();g.fillStyle='#4a3322';g.beginPath();g.arc(x+a,y-h,w/2,Math.PI,0);g.fill()});
 rect(g,d,x-150,y-14,300,14);rect(g,'#b8a478',x-160,y-6,320,6)};
PR.sremy=(g,x,y,t)=>{const c='#e8dcc0',d='#cfc0a0';rect(g,'#bfb090',x-160,y-120,320,120);for(let i=0;i<9;i++)rect(g,'rgba(0,0,0,.12)',x-160+i*40,y-120,2,120);
 for(let i=0;i<8;i++){rect(g,c,x-150+i*40,y-150,22,30);rect(g,d,x-152+i*40,y-154,26,5)}rect(g,d,x-160,y-156,320,6);
 rect(g,c,x-100,y-250,200,130);rect(g,d,x-106,y-262,212,14);poly(g,c,[[x-110,y-262],[x,y-304],[x+110,y-262]]);
 g.fillStyle='#3a2e22';g.beginPath();g.rect(x-34,y-170,68,170);g.arc(x,y-170,34,Math.PI,0);g.fill();
 [-86,86].forEach(a=>{rect(g,d,x+a-12,y-230,24,110);rect(g,c,x+a-9,y-230,18,110)});
 for(let i=0;i<8;i++)rect(g,i%2?'#d8c9a8':'#e8dcc0',x-70-i*8,y-i*6-6,140+i*16,6)};
PR.balaustra=(g,x,y)=>{rect(g,'#d8c9a8',x-200,y-52,400,8);rect(g,'#c8b998',x-200,y-44,400,44);for(let i=0;i<16;i++){rect(g,'#e8dcc0',x-194+i*25,y-44,10,44);el(g,'#e8dcc0',x-189+i*25,y-34,6,10)}};
PR.fioriera=(g,x,y,t,c)=>{c=c||'#e8505a';rect(g,'#a8603a',x-26,y-24,52,24);rect(g,'#8a4a2a',x-28,y-26,56,5);for(let i=0;i<7;i++){const a=x-22+i*7.5;g.strokeStyle='#2a8a3a';g.lineWidth=2;g.beginPath();g.moveTo(a,y-24);g.lineTo(a+(i-3)*2,y-44-(i%3)*6);g.stroke();dot(g,i%2?c:'#ffd21e',a+(i-3)*2,y-46-(i%3)*6,4)}};
PR.panchina=(g,x,y)=>{rect(g,'#6a4a2a',x-44,y-30,88,7);rect(g,'#6a4a2a',x-44,y-50,88,6);rect(g,'#3a3a3a',x-38,y-24,5,24);rect(g,'#3a3a3a',x+33,y-24,5,24)};
PR.cavalletto=(g,x,y)=>{g.strokeStyle='#7a5a32';g.lineWidth=4;[[-22,0],[22,0],[0,-6]].forEach(a=>{g.beginPath();g.moveTo(x+a[0],y+a[1]);g.lineTo(x,y-96);g.stroke()});rect(g,'#f4ecd8',x-30,y-120,60,46);rect(g,'#8ab0d8',x-26,y-116,52,16);rect(g,'#e8b868',x-26,y-100,52,10);rect(g,'#c86a3a',x-26,y-90,36,12);rect(g,'#7a5a32',x-30,y-74,60,4)};
PR.gradini=(g,x,y)=>{for(let i=0;i<5;i++){rect(g,i%2?'#bfae88':'#cdbd98',x-60+i*8,y-(i+1)*9,120-i*16,9)}};

/* ---------- elementi di sfondo ---------- */
function sky(g,c){const gr=g.createLinearGradient(0,0,0,HZ);gr.addColorStop(0,c[0]);gr.addColorStop(.6,c[1]);gr.addColorStop(1,c[2]);g.fillStyle=gr;g.fillRect(0,0,W,HZ+60)}
function nightWin(g,x,y,w,h,t,moon){const gr=g.createLinearGradient(0,y,0,y+h);gr.addColorStop(0,'#0a0a2e');gr.addColorStop(1,'#3a2a6a');g.fillStyle=gr;g.fillRect(x,y,w,h);
 for(let i=0;i<10;i++)rect(g,'rgba(255,255,255,'+(.4+.4*Math.sin(t*2+i))+')',x+4+hr(i)*(w-8),y+4+hr(i+9)*h*.45,1.6,1.6);if(moon)dot(g,'#f4ecd0',x+w*.75,y+h*.22,10);
 for(let i=0;i<6;i++){const bw=w/6,bh=20+hr(i+3)*40;rect(g,'#14122e',x+i*bw,y+h-bh,bw-2,bh);for(let k=0;k<3;k++)if(hr(i*4+k)>.4)rect(g,'#ffd878',x+i*bw+4+k*7,y+h-bh+6+k*0,3,4)}}


/* ---------- elementi per Londra (mondi/londra.js) ---------- */
PR.telefono=(g,x,y)=>{rect(g,'#8f1520',x-17,y-4,34,4);rect(g,'#b81e28',x-15,y-86,30,82);poly(g,'#b81e28',[[x-15,y-86],[x-11,y-94],[x+11,y-94],[x+15,y-86]]);
 for(let r=0;r<4;r++)for(let c=0;c<3;c++)rect(g,'#bfe0ea',x-11+c*8,y-77+r*14,6,11);dot(g,'#ffd878',x,y-90,2);rect(g,'rgba(0,0,0,.12)',x+6,y-86,9,82)};
PR.buca=(g,x,y)=>{rect(g,'#8f1520',x-13,y-4,26,4);rect(g,'#b81e28',x-11,y-44,22,40);el(g,'#b81e28',x,y-44,11,5);rect(g,'#1a1a1a',x-8,y-32,16,3);rect(g,'rgba(0,0,0,.14)',x+4,y-44,7,40)};
PR.bus=(g,x,y,t)=>{rect(g,'#c81e28',x-100,y-112,200,98);rect(g,'#a01820',x-100,y-26,200,12);rect(g,'#f0e6d0',x-100,y-76,200,5);
 for(let i=0;i<6;i++){rect(g,'#bcd8e4',x-92+i*29,y-102,24,22);rect(g,'#bcd8e4',x-92+i*29,y-66,24,24)}
 rect(g,'#2f6fc8',x-92,y-38,70,10);rect(g,'#f4f4ee',x-88,y-35,26,4);rect(g,'#111',x+66,y-110,30,9);
 g.save();g.font='bold 8px sans-serif';g.textAlign='left';g.fillStyle='#ffd878';g.fillText('11',x+70,y-103);g.restore();
 rect(g,'#1b1b1f',x-96,y-18,192,6);[-62,62].forEach(a=>{dot(g,'#1b1b1f',x+a,y-12,14);dot(g,'#c8c8c8',x+a,y-12,5)});rect(g,'#ffe27a',x+96,y-34,4,6)};
PR.taxi=(g,x,y,t)=>{poly(g,'#17171c',[[x-66,y-14],[x-62,y-34],[x-40,y-38],[x-30,y-58],[x+24,y-58],[x+40,y-38],[x+62,y-34],[x+66,y-14]]);
 poly(g,'#9ab8c8',[[x-27,y-40],[x-22,y-55],[x-2,y-55],[x-2,y-40]]);poly(g,'#9ab8c8',[[x+1,y-40],[x+1,y-55],[x+20,y-55],[x+32,y-40]]);
 rect(g,'#ffd21e',x-12,y-67,24,9);g.save();g.font='bold 6px sans-serif';g.textAlign='center';g.fillStyle='#222';g.fillText('TAXI',x,y-60);g.restore();
 [-38,40].forEach(a=>{dot(g,'#111',x+a,y-12,11);dot(g,'#bbb',x+a,y-12,4)});rect(g,'#ffe27a',x+60,y-28,5,5);rect(g,'#c8202a',x-66,y-26,4,5)};
PR.pub=(g,x,y,t)=>{const bw=280,x0=x-140;
 rect(g,'#a5553b',x0,y-196,bw,196);rect(g,'rgba(0,0,0,.10)',x0+bw-14,y-196,14,196);rect(g,'rgba(255,255,255,.08)',x0,y-196,6,196);
 poly(g,'#4a4e5a',[[x0-8,y-196],[x0+14,y-224],[x0+bw-14,y-224],[x0+bw+8,y-196]]);rect(g,'#d8d0bc',x0-6,y-200,bw+12,6);
 [x0+36,x0+bw-58].forEach(cx=>{rect(g,'#8a4a35',cx,y-256,18,36);rect(g,'#b0a590',cx-2,y-258,22,4);rect(g,'#c8743a',cx+3,y-266,4,9);rect(g,'#c8743a',cx+10,y-266,4,9)});
 for(let k=0;k<3;k++){const wx=x0+30+k*84;rect(g,'#f4f1e8',wx-3,y-182,36,52);rect(g,k==1?'#ffe9a8':'#9fb8cc',wx,y-179,30,46);rect(g,'#f4f1e8',wx+14,y-179,2,46);rect(g,'#f4f1e8',wx,y-158,30,2);
  rect(g,'#5a3a22',wx-4,y-131,38,7);for(let q=0;q<6;q++)dot(g,['#e8505a','#ffd21e','#ff7ab0'][q%3],wx+1+q*6,y-134+Math.sin(t*1.5+q+k)*.8,3)}
 rect(g,'#1f4a3a',x0,y-96,bw,96);rect(g,'#173a2d',x0,y-124,bw,28);rect(g,'#d9b24a',x0,y-124,bw,2);rect(g,'#d9b24a',x0,y-98,bw,2);
 g.save();g.font='bold 15px Georgia,serif';g.textAlign='center';g.fillStyle='#e0b84a';g.fillText('THE ROYAL OAK',x,y-105);g.restore();
 [x0+12,x0+bw-92].forEach(wx=>{rect(g,'#2a1a10',wx,y-90,80,70);rect(g,'rgba(255,216,120,'+(.85+.08*Math.sin(t*3))+')',wx+4,y-86,72,62);rect(g,'#2a1a10',wx+39,y-86,2,62);
  dot(g,'rgba(60,30,10,.55)',wx+20,y-52,7);rect(g,'rgba(60,30,10,.55)',wx+14,y-46,12,26)});
 rect(g,'#2a1a10',x-24,y-90,48,90);rect(g,'#4a2a18',x-20,y-86,40,86);rect(g,'rgba(255,216,120,.8)',x-14,y-80,28,32);rect(g,'#2a1a10',x-1,y-80,2,32);dot(g,'#d9b24a',x+13,y-36,2.5);
 g.save();g.translate(x0+bw+2,y-170);g.rotate(Math.sin(t*1.2)*.05);rect(g,'#222',0,-3,32,3);rect(g,'#2a5a3a',14,0,36,34);rect(g,'#d9b24a',14,0,36,2);dot(g,'#2f8a3e',32,13,9);rect(g,'#6a4a2a',30,18,4,12);g.restore();
 poly(g,'#2a2a2a',[[x+40,y],[x+46,y-44],[x+70,y-44],[x+76,y]]);rect(g,'rgba(255,255,255,.75)',x+49,y-38,18,1.6);rect(g,'rgba(255,255,255,.55)',x+49,y-31,14,1.6);rect(g,'rgba(255,255,255,.55)',x+49,y-24,16,1.6)};
PR.bigben=(g,x,y,t)=>{const c='#cdb784',d='#b09c6a';
 rect(g,d,x-28,y-10,56,10);rect(g,c,x-24,y-152,48,142);rect(g,'rgba(0,0,0,.13)',x+8,y-152,16,142);rect(g,d,x-27,y-152,5,142);rect(g,d,x+22,y-152,5,142);
 for(let r=0;r<5;r++){rect(g,'#6a5a3a',x-4,y-34-r*22,8,14);rect(g,'rgba(0,0,0,.08)',x-14,y-36-r*22,28,2)}
 rect(g,c,x-31,y-214,62,64);rect(g,d,x-34,y-218,68,7);rect(g,d,x-34,y-152,68,6);
 g.fillStyle='#d9b24a';g.beginPath();g.arc(x,y-184,25,0,7);g.fill();g.fillStyle='#f6f2e2';g.beginPath();g.arc(x,y-184,22,0,7);g.fill();
 g.strokeStyle='#2a2a2e';g.lineWidth=1.6;for(let i=0;i<12;i++){const a=i*Math.PI/6;g.beginPath();g.moveTo(x+Math.cos(a)*17,y-184+Math.sin(a)*17);g.lineTo(x+Math.cos(a)*21,y-184+Math.sin(a)*21);g.stroke()}
 g.lineWidth=2.4;g.beginPath();g.moveTo(x,y-184);g.lineTo(x-10,y-184);g.stroke();g.lineWidth=1.8;g.beginPath();g.moveTo(x,y-184);g.lineTo(x,y-201);g.stroke();dot(g,'#2a2a2e',x,y-184,2);
 rect(g,c,x-27,y-252,54,34);rect(g,d,x-30,y-256,60,6);for(let i=0;i<3;i++){rect(g,'#3a3226',x-19+i*14,y-244,8,24);g.fillStyle='#3a3226';g.beginPath();g.arc(x-15+i*14,y-244,4,Math.PI,0);g.fill()}
 [-30,24].forEach(o=>{rect(g,d,x+o,y-270,6,16);poly(g,'#4a5560',[[x+o-1,y-270],[x+o+3,y-282],[x+o+7,y-270]])});
 poly(g,'#4a5560',[[x-27,y-256],[x-3,y-326],[x+3,y-326],[x+27,y-256]]);poly(g,'rgba(255,255,255,.1)',[[x,y-326],[x+3,y-326],[x+27,y-256],[x+5,y-256]]);
 rect(g,'#d9b24a',x-1.2,y-346,2.4,22);dot(g,'#d9b24a',x,y-348,3)};
PR.westm=(g,x,y,t)=>{const c='#cdb784',d='#b8a272';
 rect(g,'#5a6470',x-190,y-126,300,10);rect(g,c,x-190,y-118,300,118);rect(g,d,x-190,y-120,300,6);rect(g,'rgba(0,0,0,.10)',x+60,y-118,50,118);
 for(let i=0;i<10;i++){const bx=x-182+i*29;poly(g,d,[[bx+3,y-126],[bx+9,y-146],[bx+15,y-126]]);rect(g,'#6a5a3a',bx+2,y-98,14,40);g.fillStyle='#6a5a3a';g.beginPath();g.moveTo(bx+2,y-98);g.lineTo(bx+9,y-112);g.lineTo(bx+16,y-98);g.fill();rect(g,'#6a5a3a',bx+4,y-44,10,24);rect(g,d,bx-1,y-62,20,3)}
 rect(g,c,x+116,y-232,66,232);rect(g,d,x+112,y-236,74,7);rect(g,'rgba(0,0,0,.10)',x+160,y-232,22,232);
 for(let r=0;r<5;r++)rect(g,'#6a5a3a',x+144,y-40-r*34,10,22);
 [112,178].forEach(o=>{rect(g,d,x+o,y-262,8,30);poly(g,'#4a5560',[[x+o-1,y-262],[x+o+4,y-276],[x+o+9,y-262]])});
 rect(g,d,x+114,y-248,70,14);poly(g,'#4a5560',[[x+118,y-248],[x+149,y-270],[x+180,y-248]]);
 rect(g,'#444',x+148.5,y-318,2,48);rect(g,'#1f3a8a',x+151,y-318,22,13);rect(g,'#f4f4f4',x+151,y-313,22,3);rect(g,'#f4f4f4',x+160,y-318,3,13);rect(g,'#c8202a',x+151,y-312.2,22,1.6);rect(g,'#c8202a',x+160.7,y-318,1.6,13)};
PR.eye=(g,x,y,t)=>{const cy=y-182,R=138;
 g.lineCap='round';g.strokeStyle='#dfe4ea';g.lineWidth=7;[-70,-24].forEach(a=>{g.beginPath();g.moveTo(x+a,y);g.lineTo(x+6,cy);g.stroke()});
 g.lineWidth=4;g.strokeStyle='#eef2f6';g.beginPath();g.arc(x,cy,R,0,7);g.stroke();g.lineWidth=2;g.strokeStyle='rgba(235,240,246,.85)';g.beginPath();g.arc(x,cy,R-9,0,7);g.stroke();
 g.lineWidth=1;g.strokeStyle='rgba(255,255,255,.65)';for(let i=0;i<24;i++){const a=i*Math.PI/12;g.beginPath();g.moveTo(x,cy);g.lineTo(x+Math.cos(a)*R,cy+Math.sin(a)*R);g.stroke()}
 const rot=t*.05;for(let i=0;i<32;i++){const a=rot+i*Math.PI/16;el(g,'#cfe4f2',x+Math.cos(a)*(R+3),cy+Math.sin(a)*(R+3),5.5,4);el(g,'rgba(255,255,255,.8)',x+Math.cos(a)*(R+3)-1,cy+Math.sin(a)*(R+3)-1.5,2,1)}
 dot(g,'#dfe4ea',x,cy,7);g.lineCap='butt'};
PR.tbridge=(g,x,y,t)=>{const s='#aaa193',d='#8f8678',b='#2f6fb0';
 g.strokeStyle=b;[-1,1].forEach(k=>{g.lineWidth=4;g.beginPath();g.moveTo(x+k*130,y-170);g.quadraticCurveTo(x+k*214,y-118,x+k*262,y-54);g.stroke();
  g.lineWidth=1.2;for(let i=1;i<8;i++){const u=i/8,px=(1-u)*(1-u)*(x+k*130)+2*u*(1-u)*(x+k*214)+u*u*(x+k*262),py=(1-u)*(1-u)*(y-170)+2*u*(1-u)*(y-118)+u*u*(y-54);g.beginPath();g.moveTo(px,py);g.lineTo(px,y-52);g.stroke()}});
 rect(g,'#5a5e68',x-264,y-52,528,8);rect(g,'#9a9ea8',x-264,y-46,528,2);rect(g,b,x-130,y-174,260,8);
 g.strokeStyle='rgba(255,255,255,.75)';g.lineWidth=1.2;g.beginPath();for(let i=0;i<26;i++){g.moveTo(x-128+i*10,y-174);g.lineTo(x-123+i*10,y-166);g.lineTo(x-118+i*10,y-174)}g.stroke();
 rect(g,'#5a5e68',x-130,y-100,260,6);for(let i=0;i<14;i++)rect(g,'#7a8090',x-124+i*19,y-100,2,48);
 [-130,130].forEach(a=>{const tx=x+a;rect(g,s,tx-28,y-186,56,186);rect(g,'rgba(0,0,0,.14)',tx+8,y-186,20,186);rect(g,d,tx-32,y-190,64,7);
  for(let r=0;r<5;r++){rect(g,'#4a4438',tx-6,y-34-r*30,12,18);g.fillStyle='#4a4438';g.beginPath();g.arc(tx,y-34-r*30,6,Math.PI,0);g.fill()}
  [-30,22].forEach(o=>{rect(g,s,tx+o,y-214,8,26);poly(g,'#4a5560',[[tx+o-1,y-214],[tx+o+4,y-228],[tx+o+9,y-214]])});
  poly(g,'#4a5560',[[tx-24,y-190],[tx,y-236],[tx+24,y-190]])})};
PR.tubo=(g,x,y,t,l)=>{rect(g,'#444',x-1.5,y-84,3,84);g.strokeStyle='#d62027';g.lineWidth=5;g.beginPath();g.arc(x,y-98,14,0,7);g.stroke();rect(g,'#1f3f9a',x-21,y-103,42,11);
 g.save();g.font='bold 5.5px sans-serif';g.textAlign='center';g.fillStyle='#fff';g.fillText(l||'UNDERGROUND',x,y-95);g.restore()};
PR.chiosco=(g,x,y,t)=>{rect(g,'#f4ecd8',x-58,y-72,116,72);rect(g,'#3a6ab0',x-58,y-72,116,8);rect(g,'#1a3a6a',x-46,y-114,92,20);
 g.save();g.font='bold 11px sans-serif';g.textAlign='center';g.fillStyle='#fff';g.fillText('FISH & CHIPS',x,y-100);g.restore();
 for(let i=0;i<8;i++){const cc=i%2?'#f4f4ee':'#c8202a';rect(g,cc,x-64+i*16,y-92,16,16);dot(g,cc,x-56+i*16,y-76,8)}
 rect(g,'#7a5a3a',x-58,y-36,116,6);rect(g,'#222',x-34,y-28,68,24);rect(g,'rgba(255,255,255,.7)',x-28,y-23,34,1.6);rect(g,'rgba(255,255,255,.5)',x-28,y-17,26,1.6);
 poly(g,'#f4ecd8',[[x+34,y-48],[x+46,y-48],[x+42,y-36],[x+38,y-36]]);for(let i=0;i<4;i++)dot(g,'rgba(255,255,255,'+(.5-((t*.6+i*.25)%1)*.4)+')',x+30+Math.sin(t*2+i)*5,y-54-((t*14+i*9)%34),3)};
PR.stpaul=(g,x,y,t)=>{const c='#d8d2c0',d='#bdb6a2',e='#8f9aa6';
 rect(g,c,x-160,y-110,320,110);rect(g,d,x-160,y-114,320,6);
 for(let i=0;i<8;i++){rect(g,'#ece6d6',x-70+i*20,y-100,10,100);rect(g,d,x-62+i*20,y-100,2,100);rect(g,d,x-72+i*20,y-106,14,6)}
 poly(g,'#e6dfcc',[[x-80,y-112],[x,y-148],[x+80,y-112]]);poly(g,'#cfc8b2',[[x-60,y-117],[x,y-141],[x+60,y-117]]);
 [-112,112].forEach(a=>{rect(g,c,x+a-26,y-188,52,188);rect(g,'rgba(0,0,0,.10)',x+a+8,y-188,18,188);rect(g,d,x+a-29,y-192,58,6);rect(g,'#6a6454',x+a-7,y-84,14,34);
  for(let r=0;r<2;r++)rect(g,'#6a6454',x+a-6,y-140+r*0-r*0,12,26);rect(g,c,x+a-18,y-228,36,36);rect(g,d,x+a-21,y-232,42,6);poly(g,e,[[x+a-18,y-232],[x+a,y-262],[x+a+18,y-232]]);rect(g,'#d9b24a',x+a-1,y-276,2,16)});
 rect(g,c,x-50,y-196,100,86);rect(g,d,x-54,y-200,108,6);for(let i=0;i<12;i++){rect(g,'#ece6d6',x-46+i*8,y-192,4,76)}
 g.fillStyle=e;g.beginPath();g.ellipse(x,y-196,46,66,0,Math.PI,0);g.fill();g.strokeStyle='rgba(255,255,255,.22)';g.lineWidth=1.4;for(let i=-3;i<=3;i++){g.beginPath();g.moveTo(x+i*13,y-196);g.quadraticCurveTo(x+i*9,y-240,x+i*2,y-262);g.stroke()}
 rect(g,c,x-8,y-276,16,16);rect(g,d,x-10,y-278,20,3);dot(g,'#d9b24a',x,y-284,4);rect(g,'#d9b24a',x-1,y-306,2,22);rect(g,'#d9b24a',x-6,y-300,12,2)};
PR.museo=(g,x,y,t)=>{const c='#e3dac2',d='#cfc4a4';
 rect(g,c,x-170,y-120,340,120);rect(g,d,x-170,y-124,340,6);
 for(let i=0;i<10;i++){rect(g,'#f0e9d4',x-135+i*30,y-112,14,106);rect(g,d,x-124+i*30,y-112,3,106);rect(g,d,x-138+i*30,y-118,20,6)}
 rect(g,c,x-152,y-132,304,14);poly(g,'#ebe3cc',[[x-158,y-132],[x,y-184],[x+158,y-132]]);poly(g,'#d6cca9',[[x-132,y-138],[x,y-176],[x+132,y-138]]);
 for(let i=0;i<9;i++){const fx=x-96+i*24,h=Math.min(28,(176-Math.abs(fx-x)*.36)-138-8);rect(g,'#bfb392',fx-4,y-138-h,8,h)}
 rect(g,'#d9cfb2',x-152,y-6,304,6);rect(g,'#cfc4a4',x-140,y-12,280,6);rect(g,'#4a4438',x-20,y-52,40,40);dot(g,'#4a4438',x,y-52,20)};
PR.bpalace=(g,x,y,t)=>{const c='#e8e0c8',d='#cfc6a8',e='#b8ae90';
 rect(g,c,x-200,y-130,400,130);rect(g,d,x-200,y-134,400,6);for(let i=0;i<20;i++)rect(g,e,x-198+i*20,y-148,8,14);rect(g,d,x-200,y-150,400,3);
 for(let r=0;r<2;r++)for(let i=0;i<16;i++){if(i>=6&&i<10)continue;rect(g,'#f4f1e8',x-190+i*24,y-112+r*42,16,28);rect(g,'#6a7a8a',x-188+i*24,y-110+r*42,12,24)}
 rect(g,'rgba(0,0,0,.08)',x+80,y-130,120,130);
 rect(g,c,x-62,y-172,124,172);rect(g,d,x-68,y-176,136,6);poly(g,'#e0d8be',[[x-64,y-176],[x,y-202],[x+64,y-176]]);
 for(let i=0;i<4;i++)rect(g,'#f0e9d4',x-52+i*30,y-120,12,76);rect(g,e,x-36,y-96,72,5);for(let i=0;i<11;i++)rect(g,e,x-34+i*7,y-91,3,12);
 rect(g,'#4a4438',x-14,y-146,28,50);dot(g,'#4a4438',x,y-146,14);rect(g,'#c8202a',x-14,y-150,28,5);
 rect(g,'#444',x-1,y-260,2,58);const w=Math.sin(t*3)*2;rect(g,'#1f3a8a',x+1,y-260,26,15);rect(g,'#f4f4f4',x+1,y-254,26,3.4);rect(g,'#f4f4f4',x+11,y-260,3.4,15);rect(g,'#c8202a',x+1,y-253.2,26,1.8);rect(g,'#c8202a',x+11.8,y-260,1.8,15);
 rect(g,'#1a1a1e',x-200,y-36,400,3);for(let i=0;i<40;i++){rect(g,'#1a1a1e',x-198+i*10,y-34,2,34);dot(g,'#d9b24a',x-197+i*10,y-37,1.7)}
 [-54,54].forEach(a=>{rect(g,'#e0d8be',x+a-7,y-66,14,66);rect(g,d,x+a-9,y-70,18,5);dot(g,'#ffe9a8',x+a,y-76,5)})};
