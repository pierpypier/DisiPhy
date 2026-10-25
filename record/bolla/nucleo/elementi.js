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


/* ---------- elementi per Napoli (mondi/napoli.js) ---------- */
PR.bucato=(g,x,y,t,w)=>{w=w||200;const cs=['#f4f4ee','#e8505a','#2a7ae0','#ffd21e','#2a9a4a','#ff7ab0','#e8e0d0','#8a4ad0'],n=Math.round(w/30),yl=u=>y-176+u*14+Math.sin(u*Math.PI)*10;
 g.strokeStyle='#4a4a4a';g.lineWidth=1.2;g.beginPath();for(let k=0;k<=20;k++){const u=k/20,px=x-w/2+u*w,py=yl(u);k?g.lineTo(px,py):g.moveTo(px,py)}g.stroke();
 for(let i=0;i<n;i++){const u=(i+.5)/n,px=x-w/2+u*w,py=yl(u),sw=Math.sin(t*1.6+i*1.7)*2.5,c=cs[(i*3+1)%cs.length],k=i%3;
  if(k==0)poly(g,c,[[px-9,py],[px+9,py],[px+12+sw,py+10],[px+6+sw,py+12],[px+5+sw,py+30],[px-5+sw,py+30],[px-6+sw,py+12],[px-12+sw,py+10]]);
  else if(k==1)poly(g,c,[[px-8,py],[px+8,py],[px+9+sw,py+34],[px-9+sw,py+34]]);
  else{rect(g,c,px-4+sw*.4,py,8,18);rect(g,'#f4f4ee',px-4+sw*.4,py+18,8,5)}
  rect(g,'#8a6a4a',px-1,py-2,2,4)}};
PR.edicola=(g,x,y,t)=>{rect(g,'#c9b890',x-28,y-150,56,100);rect(g,'rgba(0,0,0,.12)',x+14,y-150,14,100);g.fillStyle='#c9b890';g.beginPath();g.arc(x,y-150,28,Math.PI,0);g.fill();
 g.fillStyle='#2a3a6a';g.beginPath();g.rect(x-19,y-144,38,88);g.arc(x,y-144,19,Math.PI,0);g.fill();
 el(g,'rgba(255,210,120,'+(.22+.08*Math.sin(t*7))+')',x,y-100,30,36);
 dot(g,'#f0d8b8',x,y-118,5);poly(g,'#4a7ac8',[[x-4,y-112],[x+4,y-112],[x+12,y-70],[x-12,y-70]]);dot(g,'rgba(255,226,122,.8)',x,y-118,9);
 rect(g,'#8a7a5a',x-24,y-52,48,5);for(let i=0;i<3;i++){const cx=x-14+i*14;rect(g,'#f4ecd8',cx-2,y-62,4,10);dot(g,'rgba(255,200,90,'+(.75+.25*Math.sin(t*9+i*2))+')',cx,y-66,2.6)}
 for(let i=0;i<4;i++)dot(g,['#e8505a','#ffd21e','#f4f4ee','#ff7ab0'][i],x-18+i*12,y-46,3.2);
 rect(g,'#6a1a1a',x-1.5,y-182,3,12);dot(g,'rgba(255,60,40,'+(.7+.3*Math.sin(t*5))+')',x,y-170,3)};
PR.vespa=(g,x,y,t,c)=>{c=c||'#7ac0e0';
 poly(g,c,[[x-46,y-24],[x-52,y-44],[x-34,y-52],[x-10,y-46],[x+4,y-26],[x+8,y-16],[x-40,y-14]]);
 poly(g,c,[[x+4,y-26],[x+12,y-62],[x+22,y-62],[x+26,y-16],[x+8,y-16]]);
 rect(g,'#2a2a2e',x-38,y-56,34,7);rect(g,'#2a2a2e',x+6,y-72,22,4);rect(g,'#aaa',x+8,y-76,3,16);dot(g,'#ffe9a8',x+27,y-66,3.4);
 rect(g,'rgba(0,0,0,.12)',x-40,y-22,46,6);[-34,22].forEach(a=>{dot(g,'#1b1b1f',x+a,y-10,10);dot(g,'#c8c8c8',x+a,y-10,3.6)});rect(g,'#c8c8c8',x-52,y-18,10,3)};
PR.murale=(g,x,y,t)=>{rect(g,'#d8c8a4',x-80,y-200,160,176);const gr=g.createLinearGradient(0,y-190,0,y-30);gr.addColorStop(0,'#2a8ad8');gr.addColorStop(1,'#8ad0f4');g.fillStyle=gr;g.fillRect(x-72,y-192,144,160);
 for(let i=0;i<9;i++)dot(g,'#fff',x-60+hr(i+40)*120,y-182+hr(i+50)*50,1.4+hr(i)*1.2);
 poly(g,'#f4f4ee',[[x-26,y-150],[x-10,y-158],[x+10,y-158],[x+26,y-150],[x+34,y-110],[x+20,y-104],[x+18,y-62],[x-18,y-62],[x-20,y-104],[x-34,y-110]]);
 g.save();g.font='900 40px sans-serif';g.textAlign='center';g.fillStyle='#2a8ad8';g.fillText('10',x,y-96);g.restore();
 g.strokeStyle='#ffd21e';g.lineWidth=3;g.beginPath();g.arc(x,y-172,12,0,7);g.stroke();dot(g,'#e8505a',x+46,y-60,7);dot(g,'#e8505a',x+56,y-60,7);poly(g,'#e8505a',[[x+40,y-56],[x+62,y-56],[x+51,y-42]]);
 rect(g,'rgba(0,0,0,.12)',x+56,y-200,24,176);rect(g,'#7a5a3a',x-80,y-26,160,4)};
PR.bancarella=(g,x,y,t)=>{rect(g,'#7a5a3a',x-62,y-44,124,8);rect(g,'#5a3e24',x-56,y-36,6,36);rect(g,'#5a3e24',x+50,y-36,6,36);rect(g,'#6a4a30',x-60,y-26,120,4);
 dot(g,'#3a2a1a',x-62,y-8,12);dot(g,'#b8a888',x-62,y-8,4);dot(g,'#3a2a1a',x+66,y-8,12);dot(g,'#b8a888',x+66,y-8,4);rect(g,'#6a4a30',x-82,y-44,20,4);
 rect(g,'#9a6a3a',x-52,y-58,48,16);rect(g,'#9a6a3a',x+2,y-58,48,16);for(let i=0;i<8;i++){dot(g,'#ffd21e',x-46+i*5.6,y-60-hr(i)*3,4.2);dot(g,i%2?'#e8505a':'#e8802a',x+8+i*5.4,y-60-hr(i+3)*3,4.2)}
 rect(g,'#444',x-1.5,y-132,3,90);g.fillStyle='#e8505a';g.beginPath();g.ellipse(x,y-132,70,24,0,Math.PI,0);g.fill();for(let i=-2;i<=2;i++)poly(g,'rgba(255,255,255,.75)',[[x+i*26-8,y-132],[x+i*26+8,y-132],[x+i*20+6,y-154],[x+i*20-6,y-154]]);
 rect(g,'#f4ecd8',x-30,y-92,30,16);g.save();g.font='bold 8px sans-serif';g.textAlign='center';g.fillStyle='#222';g.fillText('LIMONI',x-15,y-81);g.restore()};
PR.bar=(g,x,y,t)=>{const bw=230,x0=x-bw/2;rect(g,'#d9c08a',x0,y-190,bw,190);rect(g,'rgba(0,0,0,.12)',x0+bw-14,y-190,14,190);rect(g,'#efe6d0',x0-4,y-194,bw+8,7);
 for(let k=0;k<3;k++){const wx=x0+20+k*72;rect(g,'#f2ead8',wx-3,y-176,38,52);rect(g,'#2e3a48',wx,y-173,32,46);rect(g,'#4a7a4a',wx-10,y-173,7,46);rect(g,'#4a7a4a',wx+35,y-173,7,46)}
 rect(g,'#5a2a1a',x0,y-112,bw,14);g.save();g.font='bold 13px Georgia,serif';g.textAlign='center';g.fillStyle='#ffe9a8';g.fillText('CAFFÈ · SFOGLIATELLE',x,y-102);g.restore();
 g.fillStyle='#a8302a';g.beginPath();g.moveTo(x0-6,y-98);g.lineTo(x0+bw+6,y-98);g.lineTo(x0+bw-4,y-80);g.lineTo(x0+4,y-80);g.fill();for(let i=0;i<8;i++)poly(g,'rgba(255,255,255,.8)',[[x0-6+i*30.2,y-98],[x0+9+i*30.2,y-98],[x0+11+i*29.8,y-80],[x0+4+i*29.8,y-80]]);
 rect(g,'#2a1a10',x0+8,y-78,bw-16,78);rect(g,'rgba(255,216,120,'+(.85+.08*Math.sin(t*3))+')',x0+14,y-72,bw-28,56);
 rect(g,'#7a4a2a',x0+14,y-36,bw-28,6);for(let i=0;i<9;i++){el(g,'#e8b868',x0+30+i*20,y-42,7,3.6);el(g,'#c88a3a',x0+30+i*20,y-44,5,2)}
 rect(g,'#c0c8d0',x0+bw-70,y-62,40,20);rect(g,'#222',x0+bw-64,y-58,6,10);dot(g,'rgba(255,255,255,.5)',x0+bw-46+Math.sin(t*2)*3,y-70-(t*10)%12,2.2);
 rect(g,'#2a1a10',x0+bw+22,y-30,4,30);el(g,'#d8d0bc',x0+bw+24,y-34,16,4);rect(g,'#f4f4ee',x0+bw+18,y-42,8,8);rect(g,'#6a3a1a',x0+bw+19,y-40,6,3)};
PR.funicolare=(g,x,y,t)=>{const a=Math.atan2(104,250);rect(g,'#c8b896',x-170,y-96,70,96);rect(g,'#a89870',x-176,y-100,82,7);rect(g,'#2a1a10',x-156,y-66,34,66);g.save();g.font='bold 9px sans-serif';g.textAlign='center';g.fillStyle='#2a1a10';g.fillText('FUNICOLARE',x-135,y-76);g.restore();
 g.strokeStyle='#5a5e68';g.lineWidth=3;for(let k=0;k<2;k++){g.beginPath();g.moveTo(x-100,y-4-k*7);g.lineTo(x+150,y-108-k*7);g.stroke()}
 for(let i=0;i<14;i++){const u=i/13;rect(g,'#7a5a3a',x-100+u*250-1.5,y-4-u*104-9,3,10)}
 g.save();g.translate(x+20,y-44);g.rotate(-a);rect(g,'#2a7ab8',-48,-32,96,30);rect(g,'#f4ecd8',-48,-14,96,6);for(let i=0;i<5;i++)rect(g,'#bfe0ea',-42+i*18,-27,13,12);rect(g,'#333',-48,-2,96,4);dot(g,'#ffe27a',50,-10,3);g.restore()};
PR.santelmo=(g,x,y)=>{const c='#b8a47a',d='#9c8a62';poly(g,d,[[x-190,y],[x-150,y-70],[x+150,y-70],[x+190,y]]);poly(g,c,[[x-150,y-70],[x-120,y-96],[x+120,y-96],[x+150,y-70]]);for(let i=0;i<14;i++)rect(g,c,x-118+i*17,y-108,10,12);
 poly(g,d,[[x-60,y-96],[x-48,y-142],[x+48,y-142],[x+60,y-96]]);for(let i=0;i<7;i++)rect(g,c,x-44+i*13,y-152,8,10);rect(g,'#4a3a2a',x-8,y-126,16,24);rect(g,'rgba(0,0,0,.12)',x+60,y-96,90,26)};
PR.gesu=(g,x,y,t)=>{const c='#b9aa8a',d='#a39472',l='#cdbf9e';rect(g,c,x-135,y-210,270,210);
 for(let r=0;r<12;r++)for(let k=0;k<18;k++){const px=x-135+k*15,py=y-208+r*14;poly(g,(r+k)%2?l:d,[[px,py+14],[px+7.5,py],[px+15,py+14]])}
 rect(g,'rgba(0,0,0,.12)',x+90,y-210,45,210);rect(g,'#8a7a5a',x-140,y-216,280,8);poly(g,'#a39472',[[x-70,y-216],[x,y-250],[x+70,y-216]]);
 rect(g,'#4a3a2a',x-30,y-120,60,120);g.fillStyle='#4a3a2a';g.beginPath();g.arc(x,y-120,30,Math.PI,0);g.fill();rect(g,'#8a7a5a',x-36,y-126,72,6);[-100,100].forEach(a=>{rect(g,'#4a3a2a',x+a-14,y-84,28,84);g.fillStyle='#4a3a2a';g.beginPath();g.arc(x+a,y-84,14,Math.PI,0);g.fill()});
 g.fillStyle='#8a7a5a';g.beginPath();g.arc(x,y-170,16,Math.PI,0);g.lineTo(x+16,y-150);g.lineTo(x-16,y-150);g.fill();rect(g,'#3a3a4a',x-8,y-168,16,18);for(let i=0;i<4;i++)rect(g,'#c8bc9c',x-135+i*3,y-4,270-i*6,4)};
PR.guglia=(g,x,y,t)=>{const c='#d4c8a8',d='#b8ac8a';rect(g,d,x-34,y-20,68,20);rect(g,c,x-28,y-44,56,24);
 [[44,30,-44],[40,26,-96],[34,22,-146],[28,18,-194],[22,14,-238]].forEach((a,i)=>{const w=a[0],h=a[1],yy=y+a[2];rect(g,i%2?c:d,x-w/2,yy-h,w,h);rect(g,d,x-w/2-3,yy-h-3,w+6,4);for(let k=0;k<3;k++)rect(g,'rgba(0,0,0,.18)',x-w/2+6+k*(w-14)/2,yy-h+6,3,h-12)});
 poly(g,c,[[x-12,y-252],[x,y-312],[x+12,y-252]]);rect(g,'#d9b24a',x-1,y-326,2,16);rect(g,'#d9b24a',x-6,y-321,12,2);rect(g,'rgba(0,0,0,.1)',x+6,y-300,6,260)};
PR.presepi=(g,x,y,t)=>{const bw=250,x0=x-bw/2;rect(g,'#c7a37a',x0,y-200,bw,200);rect(g,'rgba(0,0,0,.12)',x0+bw-14,y-200,14,200);
 for(let k=0;k<3;k++){const wx=x0+18+k*80;rect(g,'#f2ead8',wx-3,y-186,36,50);rect(g,'#2e3a48',wx,y-183,30,44);rect(g,'#6a4a2a',wx-9,y-183,6,44);rect(g,'#6a4a2a',wx+33,y-183,6,44)}
 g.fillStyle='#2a1a10';g.beginPath();g.rect(x0+10,y-100,bw-20,100);g.arc(x0+10+(bw-20)/2,y-100,(bw-20)/2,Math.PI,0);g.fill();
 rect(g,'rgba(255,200,110,'+(.55+.1*Math.sin(t*4))+')',x0+20,y-104,bw-40,84);
 for(let r=0;r<3;r++){rect(g,'#5a3a22',x0+20,y-86+r*28,bw-40,4);for(let i=0;i<11;i++){const px=x0+30+i*19+(r%2)*4,cc=['#c0392b','#2a7ae0','#e8c04a','#2a9a4a','#8a4ad0','#e8e0d0'][(i+r*2)%6];rect(g,cc,px-3,y-100+r*28,6,12);dot(g,'#e8c8a8',px,y-103+r*28,3.2)}}
 [x0+30,x0+bw-30].forEach((px,i)=>{g.strokeStyle='#8a6a3a';g.lineWidth=1;for(let k=0;k<5;k++){const sx=px-20+k*10;g.beginPath();g.moveTo(sx,y-140);g.lineTo(sx+Math.sin(t*1.5+k)*1.5,y-124);g.stroke();dot(g,['#e8505a','#ffd21e','#2a9a4a'][(k+i)%3],sx+Math.sin(t*1.5+k)*1.5,y-121,3.2)}});
 g.save();g.font='bold 12px Georgia,serif';g.textAlign='center';g.fillStyle='#ffe9a8';rect(g,'#3a1e10',x-70,y-150,140,18);g.fillText('BOTTEGA PRESEPI',x,y-137);g.restore();
 for(let i=0;i<14;i++)dot(g,'rgba(255,226,122,'+(.55+.45*Math.sin(t*3+i))+')',x0+8+i*17.5,y-156+Math.sin(i*.9)*3,2)};
PR.pizzeria=(g,x,y,t)=>{const bw=240,x0=x-bw/2;rect(g,'#d8905a',x0,y-190,bw,190);rect(g,'rgba(0,0,0,.12)',x0+bw-14,y-190,14,190);rect(g,'#efe6d0',x0-4,y-194,bw+8,7);
 for(let k=0;k<2;k++){const wx=x0+28+k*150;rect(g,'#f2ead8',wx-3,y-176,38,52);rect(g,'#2e3a48',wx,y-173,32,46);rect(g,'#4a7a4a',wx-10,y-173,7,46);rect(g,'#4a7a4a',wx+35,y-173,7,46)}
 rect(g,'#7a2418',x0,y-112,bw,22);g.save();g.font='bold 15px Georgia,serif';g.textAlign='center';g.fillStyle='#ffe9a8';g.fillText('PIZZERIA · DAL 1889',x,y-96);g.restore();
 rect(g,'#2a1a10',x0+8,y-86,bw-16,86);g.fillStyle='#8a4a2a';g.beginPath();g.arc(x0+60,y-24,52,Math.PI,0);g.lineTo(x0+112,y);g.lineTo(x0+8,y);g.fill();
 for(let r=0;r<4;r++)for(let k=0;k<6;k++)rect(g,(r+k)%2?'#a85a36':'#92482a',x0+14+k*14,y-70+r*12,12,10);
 g.fillStyle='#1a0a04';g.beginPath();g.arc(x0+60,y-14,20,Math.PI,0);g.lineTo(x0+80,y);g.lineTo(x0+40,y);g.fill();
 for(let i=0;i<5;i++){const fl=Math.sin(t*9+i*2);poly(g,i%2?'#ffb02a':'#ff6a1a',[[x0+44+i*8,y-2],[x0+46+i*8+fl,y-14-i%3*3-fl],[x0+50+i*8,y-2]])}
 el(g,'rgba(255,170,60,'+(.28+.1*Math.sin(t*8))+')',x0+60,y-12,36,22);
 rect(g,'#f4ecd8',x0+130,y-60,92,32);for(let i=0;i<4;i++)for(let j=0;j<2;j++)if((i+j)%2)rect(g,'#c8202a',x0+130+i*23,y-60+j*16,23,16);
 el(g,'#e8b868',x0+160,y-66,14,3);el(g,'#e8b868',x0+196,y-66,14,3);rect(g,'#7a5a3a',x0+130,y-28,92,4)};
PR.duomo=(g,x,y,t)=>{const c='#d8c8a2',d='#bfae86',e='#a89870';rect(g,c,x-150,y-200,300,200);rect(g,'rgba(0,0,0,.10)',x+110,y-200,40,200);
 [-150,110].forEach(a=>{rect(g,c,x+a,y-260,40,260);rect(g,d,x+a-3,y-264,46,6);poly(g,e,[[x+a-2,y-264],[x+a+20,y-320],[x+a+42,y-264]]);rect(g,'#d9b24a',x+a+19,y-334,2,16);for(let r=0;r<3;r++)rect(g,'#4a3a2a',x+a+16,y-232+r*50,8,22)});
 poly(g,c,[[x-110,y-200],[x,y-262],[x+110,y-200]]);poly(g,d,[[x-90,y-206],[x,y-250],[x+90,y-206]]);
 g.fillStyle=e;g.beginPath();g.arc(x,y-170,30,0,7);g.fill();g.fillStyle='#4a6a9a';g.beginPath();g.arc(x,y-170,24,0,7);g.fill();for(let i=0;i<10;i++){g.strokeStyle='#d8c8a2';g.lineWidth=2;g.beginPath();g.moveTo(x,y-170);g.lineTo(x+Math.cos(i*.628)*24,y-170+Math.sin(i*.628)*24);g.stroke()}dot(g,'#d8c8a2',x,y-170,5);
 [[-84,22,70],[0,32,96],[84,22,70]].forEach(a=>{const w=a[1],h=a[2],px=x+a[0];rect(g,'#3a2a1a',px-w/2,y-h,w,h);poly(g,'#3a2a1a',[[px-w/2,y-h],[px,y-h-w*.9],[px+w/2,y-h]]);poly(g,d,[[px-w/2-6,y-h],[px,y-h-w*.9-10],[px+w/2+6,y-h],[px+w/2,y-h],[px,y-h-w*.9],[px-w/2,y-h]]);rect(g,'#d9b24a',px-1,y-h+10,2,h-10)});
 for(let i=0;i<7;i++){rect(g,d,x-132+i*44,y-224,4,26);poly(g,d,[[x-134+i*44,y-224],[x-130+i*44,y-236],[x-126+i*44,y-224]])}
 for(let i=0;i<5;i++)rect(g,i%2?'#c8b88e':'#d8c8a2',x-90-i*6,y-5+i*0-(4-i)*0,180+i*12,5);rect(g,d,x-150,y-8,300,8)};
PR.ingresso=(g,x,y,t)=>{const c='#c4a470',d='#a8884e';rect(g,c,x-110,y-180,220,180);rect(g,'rgba(0,0,0,.14)',x+70,y-180,40,180);for(let r=0;r<7;r++)for(let k=0;k<7;k++)rect(g,(r+k)%2?'rgba(0,0,0,.07)':'rgba(255,255,255,.06)',x-110+k*31,y-178+r*26,30,24);
 rect(g,d,x-116,y-186,232,8);g.fillStyle='#1a0e06';g.beginPath();g.rect(x-34,y-88,68,88);g.arc(x,y-88,34,Math.PI,0);g.fill();
 for(let i=0;i<4;i++)rect(g,'#7a5a30',x-30+i*3,y-4*(i+1),60-i*6,4);
 el(g,'rgba(255,170,70,'+(.24+.08*Math.sin(t*8))+')',x,y-40,34,44);rect(g,'#2a1a10',x-84,y-160,168,34);g.save();g.font='bold 12px Georgia,serif';g.textAlign='center';g.fillStyle='#ffe9a8';g.fillText('NAPOLI SOTTERRANEA',x,y-139);g.restore();
 [-60,60].forEach((a,i)=>{rect(g,'#444',x+a-1.5,y-120,3,34);poly(g,'#2a2a2a',[[x+a-6,y-120],[x+a+6,y-120],[x+a+4,y-108],[x+a-4,y-108]]);const fl=Math.sin(t*9+i*3);poly(g,'#ffb02a',[[x+a-4,y-122],[x+a+fl,y-138-fl],[x+a+4,y-122]]);el(g,'rgba(255,170,60,.22)',x+a,y-124,18,18)})};
PR.fiaccola=(g,x,y,t)=>{rect(g,'#3a2a1a',x-2,y-96,4,52);rect(g,'#6a6a70',x-6,y-100,12,8);const fl=Math.sin(t*9+x*.1),fl2=Math.sin(t*13+x*.07);
 el(g,'rgba(255,170,60,'+(.26+.08*fl)+')',x,y-112,50,50);poly(g,'#ff8a1a',[[x-6,y-100],[x-5+fl2,y-118-fl],[x+fl,y-130-fl2*2],[x+5+fl2,y-118],[x+6,y-100]]);poly(g,'#ffd45a',[[x-3,y-100],[x+fl2,y-120],[x+3,y-100]])};
PR.cisterna=(g,x,y,t)=>{el(g,'#3a4a58',x,y+10,150,24);el(g,'#4f7a8a',x,y+10,138,18);for(let i=0;i<6;i++)el(g,'rgba(255,220,150,'+(.25+.2*Math.sin(t*2+i))+')',x-90+i*36+Math.sin(t+i)*5,y+8+(i%2)*6,14,2);
 rect(g,'#b49458',x-150,y-4,300,14);rect(g,'rgba(0,0,0,.2)',x-150,y+6,300,4);rect(g,'#8a6a3a',x-150,y-8,300,5);for(let i=0;i<8;i++)rect(g,'#6a4a22',x-142+i*40,y-48,4,44)};
PR.pozzo=(g,x,y,t)=>{rect(g,'#b49458',x-34,y-40,68,40);rect(g,'rgba(0,0,0,.18)',x+14,y-40,20,40);el(g,'#d8b878',x,y-40,34,8);el(g,'#1a0e06',x,y-40,26,5);rect(g,'#3a2a1a',x-38,y-96,5,56);rect(g,'#3a2a1a',x+33,y-96,5,56);rect(g,'#3a2a1a',x-42,y-100,84,6);
 g.strokeStyle='#8a6a3a';g.lineWidth=2;g.beginPath();g.moveTo(x,y-94);g.lineTo(x,y-60+Math.sin(t*1.5)*3);g.stroke();rect(g,'#6a4a28',x-6,y-60+Math.sin(t*1.5)*3,12,12)};
PR.pino=(g,x,y,t,h)=>{h=h||120;g.strokeStyle='#6a4a2a';g.lineWidth=6;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+5,y-h/2,x-2,y-h);g.stroke();
 [[-26,-h-4,34,12],[14,-h-12,34,12],[-4,-h-18,30,10],[28,-h+2,20,8]].forEach(a=>el(g,'#3f7a45',x+a[0],y+a[1],a[2],a[3]))};
PR.balcone=(g,x,y,t)=>{rect(g,'#c9b27a',x-70,y-196,140,196);rect(g,'rgba(0,0,0,.12)',x+44,y-196,26,196);rect(g,'#2a1a10',x-24,y-170,48,84);rect(g,'rgba(255,226,150,.5)',x-20,y-166,40,76);rect(g,'#2a2a2e',x-44,y-84,88,4);for(let i=0;i<12;i++)rect(g,'#2a2a2e',x-42+i*8,y-84,1.6,-20);rect(g,'#2a2a2e',x-44,y-106,88,2);
 for(let i=0;i<4;i++){rect(g,'#a8603a',x-36+i*20,y-96,14,12);dot(g,['#e8505a','#ffd21e','#ff7ab0','#2a9a4a'][i],x-29+i*20,y-100,6)}rect(g,'#8a7a50',x-70,y-200,140,6)};


/* ---------- elementi per Firenze (mondi/firenze.js) ---------- */
const fiArco=(g,c,x,y,w,h)=>{rect(g,c,x,y-h+w/2,w,h-w/2);g.fillStyle=c;g.beginPath();g.arc(x+w/2,y-h+w/2,w/2,Math.PI,0);g.fill()};
PR.stazionefi=(g,x,y,t)=>{const c='#d9d2bd',d='#b9b19b',gl='#8fb0c4';
 rect(g,c,x-215,y-108,430,108);rect(g,d,x-219,y-114,438,8);rect(g,'rgba(0,0,0,.10)',x+150,y-108,65,108);
 rect(g,c,x-118,y-170,236,62);rect(g,d,x-122,y-176,244,8);rect(g,'rgba(0,0,0,.08)',x+60,y-170,58,62);
 rect(g,'#1f3a7a',x-104,y-166,208,22);rect(g,'#f4f4ee',x-104,y-144,208,2);
 g.save();g.font='bold 11px Georgia,serif';g.textAlign='center';g.fillStyle='#f4f4ee';g.fillText('FIRENZE S. M. NOVELLA',x,y-151);g.restore();
 for(let i=0;i<8;i++){rect(g,gl,x-110+i*28,y-134,22,26);rect(g,d,x-110+i*28+10,y-134,2,26)}
 for(let i=0;i<9;i++){rect(g,gl,x-116+i*26,y-96,22,60);rect(g,d,x-116+i*26+10,y-96,2,60)}
 rect(g,'#5d6670',x-126,y-100,252,6);
 for(let i=0;i<3;i++){rect(g,'#2a2e36',x-32+i*22,y-34,18,34);rect(g,'rgba(255,230,160,.5)',x-30+i*22,y-32,14,30)}
 [-1,1].forEach(s=>{for(let k=0;k<3;k++){rect(g,gl,x+s*(150+k*20)-8,y-84,16,44);rect(g,d,x+s*(150+k*20)-1,y-84,2,44)}});
 rect(g,d,x-3,y-184,6,8);dot(g,'#f4f4ee',x,y-192,11);dot(g,'#222',x,y-192,1.6);
 g.strokeStyle='#222';g.lineWidth=1.6;g.beginPath();g.moveTo(x,y-192);g.lineTo(x+8,y-192);g.moveTo(x,y-192);g.lineTo(x-4,y-185);g.stroke()};
PR.treno=(g,x,y,t)=>{rect(g,'#6a6e76',x-210,y-4,420,4);
 rect(g,'#e6e8ee',x-190,y-72,300,58);rect(g,'rgba(0,0,0,.10)',x-190,y-26,300,12);
 poly(g,'#e6e8ee',[[x+110,y-72],[x+150,y-48],[x+178,y-26],[x+178,y-14],[x+110,y-14]]);
 poly(g,'#c8202a',[[x+110,y-44],[x+160,y-36],[x+178,y-26],[x+178,y-14],[x+110,y-14]]);
 rect(g,'#c8202a',x-190,y-40,300,8);
 for(let i=0;i<12;i++)rect(g,'#33414f',x-182+i*24,y-64,18,16);
 poly(g,'#33414f',[[x+118,y-64],[x+146,y-48],[x+118,y-48]]);
 [-150,-40,60,140].forEach(a=>{rect(g,'#2a2a30',x+a-22,y-14,44,8);dot(g,'#1b1b1f',x+a-12,y-8,6);dot(g,'#1b1b1f',x+a+12,y-8,6)});
 dot(g,'#fff6c0',x+172,y-22,3)};
PR.smn=(g,x,y,t)=>{const w='#f2efe4',gr='#4f7d5d',d='#d8d3c2';
 rect(g,d,x-152,y-132,304,132);rect(g,w,x-148,y-128,296,128);
 for(let i=0;i<7;i++){const ax=x-140+i*40;
  if(i==3){fiArco(g,gr,ax-1,y,42,106);fiArco(g,'#2a1e14',ax+3,y,34,98)}
  else{fiArco(g,gr,ax+2,y-12,36,76);fiArco(g,w,ax+5,y-12,30,72);rect(g,gr,ax+17,y-52,2,40)}}
 rect(g,d,x-152,y-140,304,8);for(let i=0;i<30;i++)rect(g,gr,x-150+i*10,y-139,5,5);
 rect(g,d,x-104,y-262,208,124);rect(g,w,x-100,y-258,200,118);
 rect(g,gr,x-100,y-178,200,6);for(let i=0;i<20;i++)rect(g,w,x-98+i*10,y-177,4,4);
 dot(g,gr,x,y-214,26);dot(g,w,x,y-214,21);dot(g,gr,x,y-214,15);dot(g,w,x,y-214,11);
 g.strokeStyle=gr;g.lineWidth=1.6;for(let i=0;i<8;i++){const a=i*Math.PI/4;g.beginPath();g.moveTo(x,y-214);g.lineTo(x+Math.cos(a)*21,y-214+Math.sin(a)*21);g.stroke()}
 [[-86,-238],[62,-238],[-86,-206],[62,-206]].forEach(a=>{rect(g,gr,x+a[0],y+a[1],24,24);rect(g,w,x+a[0]+3,y+a[1]+3,18,18);dot(g,gr,x+a[0]+12,y+a[1]+12,5)});
 rect(g,d,x-108,y-266,216,8);poly(g,d,[[x-110,y-266],[x,y-312],[x+110,y-266]]);poly(g,w,[[x-96,y-268],[x,y-304],[x+96,y-268]]);poly(g,gr,[[x-56,y-272],[x,y-294],[x+56,y-272]]);dot(g,'#d9b24a',x,y-282,9);
 g.fillStyle=w;g.beginPath();g.moveTo(x-148,y-132);g.quadraticCurveTo(x-122,y-140,x-100,y-212);g.lineTo(x-100,y-132);g.closePath();g.fill();
 g.beginPath();g.moveTo(x+148,y-132);g.quadraticCurveTo(x+122,y-140,x+100,y-212);g.lineTo(x+100,y-132);g.closePath();g.fill();
 [-122,122].forEach(a=>{dot(g,gr,x+a,y-168,8);dot(g,w,x+a,y-168,5);dot(g,gr,x+a,y-168,2)});
 rect(g,'rgba(0,0,0,.10)',x+100,y-132,48,132)};
PR.fiduomo=(g,x,y,t)=>{const w='#f3efe3',pk='#e0a4af',gr='#5d8a68',d='#cfc8b4',rd='#c4552f',dx=x+38;
 rect(g,'#b9b3a2',x-120,y-214,270,16);
 rect(g,d,dx-72,y-252,144,42);rect(g,w,dx-68,y-248,136,34);for(let i=0;i<4;i++){dot(g,gr,dx-48+i*32,y-231,7);dot(g,w,dx-48+i*32,y-231,4)}
 rect(g,pk,dx-72,y-254,144,4);rect(g,gr,dx-72,y-212,144,3);
 g.fillStyle=rd;g.beginPath();g.moveTo(dx-68,y-252);g.bezierCurveTo(dx-68,y-296,dx-26,y-312,dx,y-316);g.bezierCurveTo(dx+26,y-312,dx+68,y-296,dx+68,y-252);g.closePath();g.fill();
 g.fillStyle='rgba(0,0,0,.15)';g.beginPath();g.moveTo(dx+20,y-252);g.bezierCurveTo(dx+30,y-288,dx+20,y-308,dx,y-316);g.bezierCurveTo(dx+26,y-312,dx+68,y-296,dx+68,y-252);g.closePath();g.fill();
 g.strokeStyle=w;g.lineWidth=3;[-68,-26,26,68].forEach(o=>{g.beginPath();g.moveTo(dx+o,y-252);g.quadraticCurveTo(dx+o*.9,y-306,dx+o*.06,y-316);g.stroke()});
 rect(g,w,dx-13,y-340,26,24);rect(g,d,dx-16,y-344,32,5);for(let i=0;i<2;i++)rect(g,'#6a5a4a',dx-8+i*10,y-336,6,16);
 poly(g,d,[[dx-12,y-344],[dx,y-358],[dx+12,y-344]]);dot(g,'#d9b24a',dx,y-361,3);rect(g,'#d9b24a',dx-.8,y-370,1.6,10);
 rect(g,d,x-136,y-200,272,200);rect(g,w,x-132,y-196,264,196);
 for(let r=0;r<6;r++)rect(g,r%2?pk:gr,x-132,y-24-r*28,264,5);
 [-132,-44,44,118].forEach((a,i)=>{rect(g,pk,x+a,y-196,14,196);for(let r=0;r<9;r++)rect(g,w,x+a+3,y-190+r*22,8,10)});
 fiArco(g,pk,x-36,y,72,122);fiArco(g,'#2a1e14',x-28,y,56,112);g.fillStyle='#2f4f8f';g.beginPath();g.arc(x,y-86,25,Math.PI,0);g.fill();for(let i=0;i<5;i++)dot(g,'#d9b24a',x-18+i*9,y-92-(i%2)*6,2.4);
 [-90,90].forEach(a=>{fiArco(g,pk,x+a-24,y,48,86);fiArco(g,'#2a1e14',x+a-18,y,36,78);g.fillStyle='#2f4f8f';g.beginPath();g.arc(x+a,y-58,18,Math.PI,0);g.fill();dot(g,'#d9b24a',x+a,y-66,2.4)});
 dot(g,pk,x,y-160,24);dot(g,w,x,y-160,20);dot(g,'#3f5a8a',x,y-160,14);g.strokeStyle=w;g.lineWidth=1.4;for(let i=0;i<8;i++){const a=i*Math.PI/4;g.beginPath();g.moveTo(x,y-160);g.lineTo(x+Math.cos(a)*14,y-160+Math.sin(a)*14);g.stroke()}
 rect(g,d,x-136,y-206,272,8);for(let i=0;i<14;i++)fiArco(g,'#8a8270',x-128+i*19,y-174,10,16);
 poly(g,d,[[x-76,y-206],[x,y-256],[x+76,y-206]]);poly(g,w,[[x-66,y-208],[x,y-248],[x+66,y-208]]);poly(g,'#2f4f8f',[[x-36,y-212],[x,y-238],[x+36,y-212]]);dot(g,'#d9b24a',x,y-222,6);
 [-1,1].forEach(s=>{poly(g,d,[[x+s*136,y-206],[x+s*98,y-230],[x+s*60,y-206]]);poly(g,w,[[x+s*128,y-208],[x+s*98,y-226],[x+s*68,y-208]])});
 rect(g,'#d9b24a',x-1,y-266,2,12);rect(g,'rgba(0,0,0,.10)',x+104,y-196,32,196)};
PR.campanile=(g,x,y,t)=>{const w='#f2eee2',pk='#e0a4af',gr='#5f8f6c',d='#cdc6b2',h=27;
 rect(g,d,x-h-2,y-334,2*h+4,334);rect(g,w,x-h,y-330,2*h,330);rect(g,pk,x-h,y-330,5,330);rect(g,pk,x+h-5,y-330,5,330);rect(g,'rgba(0,0,0,.12)',x+10,y-330,17,330);
 [62,112,192,272].forEach(a=>rect(g,d,x-h-3,y-a-2,2*h+6,5));
 for(let r=0;r<2;r++)for(let k=0;k<2;k++){rect(g,gr,x-18+k*20,y-56+r*26,16,22);rect(g,w,x-15+k*20,y-53+r*26,10,16);dot(g,pk,x-10+k*20,y-45+r*26,3.4)}
 for(let k=0;k<2;k++){fiArco(g,'#6a6252',x-17+k*20,y-68,14,40);rect(g,w,x-13+k*20,y-92,6,18)}
 [[116,188],[196,268]].forEach(a=>{const wb=y-a[0],wh=a[1]-a[0]-14;fiArco(g,pk,x-18,wb,36,wh+6);fiArco(g,'#33291f',x-15,wb-2,30,wh);rect(g,w,x-1.5,wb-wh,3,wh)});
 fiArco(g,'#33291f',x-18,y-276,36,48);rect(g,w,x-7,y-322,3,46);rect(g,w,x+4,y-322,3,46);
 rect(g,d,x-h-6,y-338,2*h+12,8);for(let i=0;i<7;i++)rect(g,d,x-h-4+i*9,y-330,5,8);for(let i=0;i<8;i++)rect(g,pk,x-h-4+i*8,y-346,4,8);rect(g,d,x-h-6,y-348,2*h+12,3)};
PR.battistero=(g,x,y,t)=>{const w='#f1eee2',gr='#4f7d5d',d='#cfc8b4',rf='#9d9a90';
 rect(g,d,x-110,y-134,62,134);rect(g,'#e3dfd1',x-106,y-130,54,130);rect(g,d,x+48,y-134,62,134);rect(g,'#d6d1c1',x+52,y-130,54,130);
 rect(g,d,x-54,y-138,108,138);rect(g,w,x-50,y-134,100,134);
 for(let s=-1;s<=1;s+=2)for(let k=0;k<2;k++){fiArco(g,gr,x+s*(80+k*0)-14,y-18,28,70);fiArco(g,w,x+s*80-11,y-18,22,66)}
 rect(g,gr,x-50,y-134,5,134);rect(g,gr,x+45,y-134,5,134);rect(g,gr,x-110,y-134,5,134);rect(g,gr,x+105,y-134,5,134);
 fiArco(g,gr,x-26,y,52,96);fiArco(g,'#7a5a22',x-22,y,44,90);for(let r=0;r<5;r++)for(let k=0;k<2;k++)rect(g,'#d9b24a',x-18+k*19,y-80+r*15,15,11);
 rect(g,d,x-112,y-140,224,7);for(let i=0;i<16;i++)rect(g,gr,x-110+i*14,y-139,6,5);
 [-84,0,84].forEach(a=>{fiArco(g,'#6a6252',x+a-8,y-96,16,26);poly(g,gr,[[x+a-12,y-100],[x+a,y-112],[x+a+12,y-100]])});
 poly(g,rf,[[x-116,y-140],[x-36,y-198],[x+36,y-198],[x+116,y-140]]);poly(g,'rgba(0,0,0,.14)',[[x+10,y-140],[x+36,y-198],[x+116,y-140]]);
 g.strokeStyle='rgba(0,0,0,.2)';g.lineWidth=1.2;for(let i=1;i<6;i++){g.beginPath();g.moveTo(x-116+i*8,y-140-i*0);g.lineTo(x-36+i*12-6,y-198);g.stroke()}
 rect(g,w,x-14,y-226,28,30);rect(g,d,x-17,y-229,34,5);poly(g,rf,[[x-14,y-229],[x,y-244],[x+14,y-229]]);dot(g,'#d9b24a',x,y-247,3);rect(g,'#d9b24a',x-.8,y-258,1.6,10)};
PR.palvecchio=(g,x,y,t)=>{const c='#b8976a',d='#9c7b50',l='#cbab7c';
 rect(g,c,x-150,y-130,300,130);rect(g,'rgba(0,0,0,.12)',x+110,y-130,40,130);
 for(let r=0;r<10;r++)rect(g,'rgba(0,0,0,.10)',x-150,y-14-r*13,300,1.5);
 for(let r=0;r<2;r++)for(let k=0;k<5;k++){const wx=x-126+k*54,wy=y-48-r*50;fiArco(g,l,wx-3,wy,24,40);fiArco(g,'#33291f',wx,wy,18,34);rect(g,l,wx+8,wy-24,2,24)}
 fiArco(g,'#d8cbb0',x-66,y,40,70);fiArco(g,'#2a1e14',x-62,y,32,64);dot(g,'#c8202a',x-36,y-84,5);dot(g,'#f4f4ee',x-24,y-84,5);dot(g,'#c8202a',x-12,y-84,5);
 rect(g,d,x-156,y-142,312,10);for(let i=0;i<15;i++)rect(g,d,x-152+i*21,y-132,10,10);
 rect(g,c,x-156,y-176,312,34);rect(g,'rgba(0,0,0,.10)',x+110,y-176,46,34);for(let i=0;i<16;i++)rect(g,'#33291f',x-146+i*19.5,y-168,6,12);
 for(let i=0;i<16;i++)rect(g,c,x-152+i*19.5,y-188,12,12);
 const tx=x-30;rect(g,c,tx-24,y-268,48,92);rect(g,'rgba(0,0,0,.14)',tx+8,y-268,16,92);for(let r=0;r<6;r++)rect(g,'rgba(0,0,0,.10)',tx-24,y-190-r*13,48,1.5);
 dot(g,'#f4f1e6',tx,y-226,10);dot(g,'#222',tx,y-226,1.4);g.strokeStyle='#222';g.lineWidth=1.4;g.beginPath();g.moveTo(tx,y-226);g.lineTo(tx+6,y-226);g.moveTo(tx,y-226);g.lineTo(tx,y-232);g.stroke();
 rect(g,d,tx-34,y-282,68,16);for(let i=0;i<6;i++)rect(g,d,tx-32+i*11,y-268,6,10);
 rect(g,c,tx-34,y-308,68,26);for(let i=0;i<6;i++){rect(g,'#33291f',tx-28+i*11,y-302,6,12)}for(let i=0;i<7;i++)rect(g,c,tx-34+i*10.2,y-318,7,10);
 rect(g,c,tx-20,y-348,40,40);fiArco(g,'#33291f',tx-14,y-318,12,24);fiArco(g,'#33291f',tx+3,y-318,12,24);
 poly(g,'#b2543a',[[tx-24,y-348],[tx,y-368],[tx+24,y-348]]);rect(g,'#d9b24a',tx-.8,y-376,1.6,10);poly(g,'#d9b24a',[[tx+1,y-376],[tx+10,y-373],[tx+1,y-370]])};
PR.loggia=(g,x,y,t)=>{const c='#cbbc98',d='#a99a74';
 rect(g,c,x-170,y-150,340,150);rect(g,'rgba(0,0,0,.10)',x+120,y-150,50,150);
 [-110,0,110].forEach((a,i)=>{const ax=x+a-50;fiArco(g,d,ax-3,y,106,128);fiArco(g,'#241d15',ax,y,100,122);
  const cx=x+a;rect(g,'#bdb095',cx-20,y-34,40,34);
  if(i==1){poly(g,'#6a7a58',[[cx-8,y-34],[cx-6,y-80],[cx+8,y-80],[cx+8,y-34]]);dot(g,'#6a7a58',cx,y-90,7);g.strokeStyle='#6a7a58';g.lineWidth=5;g.beginPath();g.moveTo(cx+6,y-76);g.lineTo(cx+20,y-98);g.stroke();dot(g,'#4a5a40',cx+22,y-100,4)}
  else{poly(g,'#e8e2d2',[[cx-14,y-34],[cx-10,y-84],[cx+4,y-84],[cx+2,y-34]]);poly(g,'#d9d3c1',[[cx+2,y-34],[cx+4,y-70],[cx+16,y-70],[cx+14,y-34]]);dot(g,'#e8e2d2',cx-4,y-92,7);dot(g,'#d9d3c1',cx+10,y-78,6)}});
 rect(g,d,x-170,y-150,340,18);for(let i=0;i<14;i++)dot(g,'#b8a984',x-156+i*24,y-141,5);
 rect(g,d,x-176,y-162,352,8);for(let i=0;i<30;i++)rect(g,c,x-172+i*11.8,y-178,5,16);rect(g,d,x-176,y-182,352,5)};
PR.david=(g,x,y,t,c)=>{c=c||'#efe9da';const s='#cfc7b2';
 rect(g,'#cfc7b0',x-28,y-50,56,50);rect(g,'#e0d9c4',x-24,y-54,48,6);
 poly(g,c,[[x-13,y-54],[x-15,y-96],[x+3,y-96],[x+3,y-54]]);poly(g,s,[[x+3,y-54],[x+3,y-96],[x+17,y-96],[x+14,y-54]]);
 poly(g,c,[[x-17,y-96],[x-14,y-146],[x+14,y-146],[x+17,y-96]]);
 g.strokeStyle=c;g.lineWidth=8;g.lineCap='round';g.beginPath();g.moveTo(x+14,y-142);g.lineTo(x+22,y-112);g.lineTo(x+18,y-92);g.stroke();
 g.beginPath();g.moveTo(x-14,y-142);g.lineTo(x-26,y-158);g.lineTo(x-10,y-160);g.stroke();g.lineCap='butt';
 dot(g,c,x-1,y-156,10);for(let i=0;i<5;i++)dot(g,s,x-9+i*4.5,y-164+(i%2)*2,3);
 rect(g,'rgba(0,0,0,.08)',x+4,y-146,10,92)};
PR.nettuno=(g,x,y,t)=>{el(g,'#d9d2bc',x,y-8,84,16);el(g,'#7ab6cf',x,y-10,76,11);rect(g,'#e8e1cd',x-24,y-62,48,52);rect(g,'#d9d2bc',x-28,y-66,56,8);
 poly(g,'#f0ebde',[[x-12,y-66],[x-14,y-128],[x+12,y-128],[x+14,y-66]]);dot(g,'#f0ebde',x,y-138,10);
 g.strokeStyle='#8a7a56';g.lineWidth=3;g.beginPath();g.moveTo(x+24,y-60);g.lineTo(x+24,y-170);g.stroke();for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(x+24+i*6,y-170);g.lineTo(x+24+i*6,y-180);g.stroke()}
 g.strokeStyle='#f0ebde';g.lineWidth=7;g.lineCap='round';g.beginPath();g.moveTo(x+12,y-120);g.lineTo(x+24,y-132);g.stroke();g.lineCap='butt';
 [-60,60].forEach(a=>{dot(g,'#7a6a3e',x+a,y-22,7);rect(g,'#7a6a3e',x+a-3,y-22,6,14)});
 g.strokeStyle='rgba(180,230,255,.8)';g.lineWidth=2;for(let i=-1;i<=1;i+=2){g.beginPath();g.moveTo(x+i*60,y-28);g.quadraticCurveTo(x+i*40,y-56+Math.sin(t*3)*3,x+i*20,y-20);g.stroke()}};
PR.pontevecchio=(g,x,y,t)=>{const wl=y-72,dk=wl-46;
 rect(g,'#a89466',x-290,dk,580,wl+8-dk);rect(g,'rgba(0,0,0,.12)',x-290,wl-8,580,16);
 for(let r=0;r<4;r++)rect(g,'rgba(0,0,0,.10)',x-290,dk+8+r*12,580,1.4);
 [[-202,66,32],[0,110,40],[202,66,32]].forEach(a=>{g.save();g.beginPath();g.ellipse(x+a[0],wl,a[1],a[2],0,Math.PI,0);g.lineTo(x+a[0]+a[1],wl+10);g.lineTo(x+a[0]-a[1],wl+10);g.closePath();g.clip();
  const gr=g.createLinearGradient(0,wl-a[2],0,wl+10);gr.addColorStop(0,'#cfe0e4');gr.addColorStop(1,'#7fb0c2');g.fillStyle=gr;g.fillRect(x+a[0]-a[1],wl-a[2],a[1]*2,a[2]+10);
  for(let i=0;i<5;i++)rect(g,'rgba(255,255,255,'+(.3+.2*Math.sin(t*2+i+a[0]))+')',x+a[0]-a[1]*.7+i*a[1]*.3,wl-4-i%3*7,12,1.6);g.restore();
  g.strokeStyle='#8a7752';g.lineWidth=3;g.beginPath();g.ellipse(x+a[0],wl,a[1],a[2],0,Math.PI,0);g.stroke()});
 rect(g,'#8f7c56',x-292,dk-4,584,6);
 const cs=['#d9a45e','#c98a54','#e0b878','#b87a4a','#d8b080'];
 [-1,1].forEach(s=>{for(let k=0;k<5;k++){const sx=s<0?x-290+k*39:x+96+k*39,hh=54+(k%3)*6;rect(g,cs[(k+(s>0?2:0))%5],sx,dk-hh,38,hh);rect(g,'rgba(0,0,0,.12)',sx+30,dk-hh,8,hh);
  rect(g,'#5a7a4a',sx+4,dk-hh+8,10,22);rect(g,'#5a7a4a',sx+22,dk-hh+8,10,22);rect(g,'#33291f',sx+14,dk-hh+8,8,22);
  rect(g,'#6a4a2a',sx+2,dk-18,34,6);rect(g,'#ffe27a',sx+6,dk-14,26,3)}});
 [-60,0,60].forEach(a=>{fiArco(g,'#aac8d8',x+a-22,dk-4,44,44);rect(g,'#a89466',x+a+22,dk-48,6,44)});rect(g,'#a89466',x-86,dk-48,4,44);
 rect(g,'#c5a074',x-290,dk-102,580,34);for(let i=0;i<26;i++)rect(g,'#33291f',x-282+i*22,dk-92,8,11);
 rect(g,'#b2543a',x-294,dk-108,588,8);rect(g,'rgba(0,0,0,.14)',x-294,dk-100,588,3)};
PR.bottegaorafo=(g,x,y,t)=>{rect(g,'#c9a46a',x-72,y-156,144,156);rect(g,'rgba(0,0,0,.12)',x+50,y-156,22,156);rect(g,'#8a6a3a',x-76,y-162,152,8);
 [-1,1].forEach(s=>{rect(g,'#4a7a4a',x+s*54-9,y-142,18,48)});rect(g,'#33291f',x-34,y-142,68,48);for(let i=0;i<6;i++){const sp=.5+.5*Math.sin(t*3+i*1.7);dot(g,'rgba(255,226,122,'+(.6+.4*sp)+')',x-26+i*10.4,y-122+(i%2)*10,2.6)}
 rect(g,'#2a1a10',x-72,y-88,144,24);g.save();g.font='bold 12px Georgia,serif';g.textAlign='center';g.fillStyle='#e0b84a';g.fillText('ORAFO · GIOIELLI',x,y-71);g.restore();
 rect(g,'#2a1a10',x-62,y-60,124,60);rect(g,'rgba(255,216,120,.85)',x-56,y-54,112,48);rect(g,'#7a5a30',x-56,y-30,112,4);
 for(let i=0;i<7;i++){dot(g,'#ffd878',x-44+i*14,y-34,4);dot(g,'#fff1c0',x-44+i*14-1,y-35,1.4)}
 for(let i=0;i<4;i++){g.strokeStyle='#ffd878';g.lineWidth=1.4;g.beginPath();g.arc(x-36+i*24,y-46,6,0,7);g.stroke()}};
PR.osteria=(g,x,y,t)=>{const bw=230,x0=x-bw/2;
 rect(g,'#d6b074',x0,y-196,bw,196);rect(g,'rgba(0,0,0,.12)',x0+bw-14,y-196,14,196);rect(g,'#b98f5a',x0,y-30,bw,30);
 rect(g,'#efe6d0',x0-4,y-200,bw+8,7);poly(g,'#b2543a',[[x0-8,y-200],[x0+16,y-222],[x0+bw-16,y-222],[x0+bw+8,y-200]]);
 for(let k=0;k<3;k++){const wx=x0+22+k*72;rect(g,'#f2ead8',wx-3,y-180,36,56);rect(g,'#2e3a48',wx,y-177,30,50);rect(g,'#4a7a4a',wx-10,y-177,8,50);rect(g,'#4a7a4a',wx+32,y-177,8,50)}
 rect(g,'#3a2414',x0+10,y-116,bw-20,22);g.save();g.font='bold 15px Georgia,serif';g.textAlign='center';g.fillStyle='#ffe9a8';g.fillText('OSTERIA · TRATTORIA',x,y-100);g.restore();
 fiArco(g,'#6a4a2a',x-28,y,56,88);fiArco(g,'rgba(255,214,130,'+(.85+.08*Math.sin(t*3))+')',x-22,y,44,80);rect(g,'#6a4a2a',x-1,y-80,2,80);
 rect(g,'#5a3a22',x0+14,y-90,40,60);fiArco(g,'#33291f',x0+20,y-30,28,44);
 rect(g,'#444',x+40,y-130,2,22);rect(g,'#2a2a2e',x+34,y-138,14,12);el(g,'rgba(255,220,130,'+(.25+.08*Math.sin(t*4))+')',x+41,y-132,16,16);
 for(let i=0;i<3;i++){dot(g,'#c8a050',x0+bw-60+i*14,y-96-(i%2)*4,6);rect(g,'#8a6a3a',x0+bw-62+i*14,y-92-(i%2)*4,4,3)}
 rect(g,'#7a5a3a',x0+bw-84,y-36,70,4);rect(g,'#5a3e24',x0+bw-80,y-32,4,32);rect(g,'#5a3e24',x0+bw-24,y-32,4,32);for(let i=0;i<5;i++)for(let j=0;j<2;j++)if((i+j)%2)rect(g,'#c8202a',x0+bw-84+i*14,y-40+j*0,14,4);rect(g,'#f4f4ee',x0+bw-66,y-52,6,12);dot(g,'#8a1a2a',x0+bw-63,y-53,3)};
PR.trippaio=(g,x,y,t)=>{rect(g,'#f0ebde',x-62,y-80,124,76);rect(g,'#2f6a4a',x-62,y-80,124,10);rect(g,'rgba(0,0,0,.10)',x+30,y-80,32,76);
 g.fillStyle='#c8202a';g.beginPath();g.moveTo(x-70,y-98);g.lineTo(x+70,y-98);g.lineTo(x+62,y-80);g.lineTo(x-62,y-80);g.fill();for(let i=0;i<7;i++)poly(g,'rgba(255,255,255,.85)',[[x-70+i*20,y-98],[x-60+i*20,y-98],[x-56+i*20,y-80],[x-62+i*20,y-80]]);
 rect(g,'#1a3a6a',x-52,y-70,76,16);g.save();g.font='bold 9px Georgia,serif';g.textAlign='center';g.fillStyle='#fff';g.fillText('LAMPREDOTTO',x-14,y-58);g.restore();
 rect(g,'#9aa2ac',x-58,y-44,116,6);rect(g,'#7a828c',x-52,y-38,104,34);rect(g,'#222',x-30,y-34,40,4);
 rect(g,'#b8c0c8',x+30,y-62,24,18);rect(g,'#7a828c',x+30,y-64,24,3);for(let i=0;i<4;i++)dot(g,'rgba(255,255,255,'+(.5-((t*.6+i*.25)%1)*.4)+')',x+42+Math.sin(t*2+i)*5,y-74-((t*14+i*9)%26),3);
 dot(g,'#1b1b1f',x-40,y-4,10);dot(g,'#c8c8c8',x-40,y-4,3.6);dot(g,'#1b1b1f',x+40,y-4,10);dot(g,'#c8c8c8',x+40,y-4,3.6);
 for(let i=0;i<3;i++){rect(g,'#e8c890',x-44+i*14,y-48,12,5);el(g,'#d8a860',x-38+i*14,y-49,6,3)}};
PR.sanminiato=(g,x,y,t)=>{const w='#f1eee2',gr='#4f7d5d',d='#cfc8b4';
 rect(g,d,x-150,y-124,300,124);rect(g,w,x-146,y-120,292,120);
 for(let i=0;i<5;i++){const ax=x-132+i*55;fiArco(g,gr,ax-2,y,50,100);fiArco(g,w,ax+2,y,42,96);if(i==2)fiArco(g,'#33291f',ax+6,y,34,86);else{rect(g,gr,ax+22,y-60,2,60);fiArco(g,'#5a7a64',ax+8,y-6,30,50)}}
 rect(g,d,x-146,y-130,292,8);for(let i=0;i<28;i++)rect(g,gr,x-144+i*10.4,y-129,5,5);
 rect(g,d,x-84,y-210,168,84);rect(g,w,x-80,y-206,160,80);for(let i=0;i<4;i++){rect(g,gr,x-72+i*40,y-198,24,24);rect(g,w,x-69+i*40,y-195,18,18);dot(g,gr,x-60+i*40,y-186,4)}
 for(let i=0;i<4;i++){fiArco(g,'#33291f',x-70+i*40,y-132,20,40)}
 poly(g,d,[[x-88,y-210],[x,y-262],[x+88,y-210]]);poly(g,w,[[x-76,y-212],[x,y-254],[x+76,y-212]]);
 poly(g,'#d9b24a',[[x-44,y-216],[x,y-242],[x+44,y-216]]);poly(g,'#2f4f8f',[[x-30,y-218],[x,y-236],[x+30,y-218]]);dot(g,'#f4ecd0',x,y-224,5);
 el(g,'#5a5a4a',x,y-270,10,7);rect(g,'#5a5a4a',x-2,y-270,4,8);rect(g,'rgba(0,0,0,.10)',x+100,y-124,46,124)};
