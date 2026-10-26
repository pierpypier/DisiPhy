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


/* ---------- elementi per Venezia (mondi/venezia.js) ---------- */
(function(){
const vArc=(g,c,x,y,w,h)=>{g.fillStyle=c;g.beginPath();g.moveTo(x,y);g.lineTo(x,y-h+w*.8);g.quadraticCurveTo(x,y-h+w*.3,x+w/2,y-h);g.quadraticCurveTo(x+w,y-h+w*.3,x+w,y-h+w*.8);g.lineTo(x+w,y);g.closePath();g.fill()};
PR._vArc=vArc;
const vLA=(g,x,y,s,c)=>{g.save();g.translate(x,y);g.scale(s,s);
 el(g,c,-4,-12,18,10);rect(g,c,10,-14,5,14);rect(g,c,-14,-12,5,12);dot(g,c,18,-24,8);dot(g,'rgba(0,0,0,.18)',15,-24,9.5);
 poly(g,c,[[2,-18],[-6,-40],[-16,-46],[-14,-34],[-8,-24]]);poly(g,c,[[6,-18],[2,-44],[-6,-52],[-4,-38],[0,-24]]);
 rect(g,'#f4ecd0',6,-14,9,9);g.strokeStyle=c;g.lineWidth=2.4;g.beginPath();g.moveTo(-20,-12);g.quadraticCurveTo(-30,-22,-24,-34);g.stroke();g.restore()};
const vLs=(g,x,y,s,c,f)=>{g.save();g.translate(x,y);g.scale(s*(f||1),s);
 rect(g,'#c4b99e',-20,-14,40,14);poly(g,c,[[-14,-14],[-12,-40],[0,-52],[10,-50],[14,-14]]);
 dot(g,'rgba(0,0,0,.15)',6,-58,11);dot(g,c,6,-58,9);rect(g,c,6,-40,5,26);rect(g,'rgba(0,0,0,.12)',-12,-40,6,26);g.restore()};
PR._vLA=vLA;

PR.vestazione=(g,x,y,t)=>{const c='#eadfc8',d='#cdbf9d',x0=x-175;
 rect(g,'#bdb094',x0-10,y-8,370,8);
 rect(g,c,x0,y-122,350,114);rect(g,'rgba(0,0,0,.11)',x0+334,y-122,16,114);rect(g,'rgba(255,255,255,.2)',x0,y-122,6,114);
 rect(g,d,x0-6,y-130,362,10);rect(g,'#33404c',x0+14,y-100,322,92);
 for(let i=0;i<8;i++){rect(g,'#f3ecda',x0+14+i*46,y-100,12,92);rect(g,d,x0+22+i*46,y-100,4,92)}
 for(let i=0;i<7;i++){const wx=x0+30+i*46;rect(g,'rgba(255,214,140,'+(.55+.12*Math.sin(t*1.5+i))+')',wx,y-90,30,52);rect(g,'rgba(0,0,0,.25)',wx+14,y-90,2,52)}
 rect(g,'#2a3f6a',x-66,y-126,132,18);
 g.save();g.font='bold 11px Georgia,serif';g.textAlign='center';g.fillStyle='#fff';g.fillText('VENEZIA S. LUCIA',x,y-113);g.restore();
 const fx=x0+330,w=Math.sin(t*3)*3;rect(g,'#555',fx,y-196,2.5,66);
 [['#2a8a4a',0],['#f4f4ee',1],['#c8202a',2]].forEach(a=>rect(g,a[0],fx+3+a[1]*9,y-196+(a[1]?w*.5:0),9,12));
 for(let i=0;i<3;i++)rect(g,'#d6cbb0',x0+80-i*6,y-3-i*0,190+i*12,3)};

PR.vevaporetto=(g,x,y,t)=>{
 rect(g,'#7a8a8a',x-150,y-40,92,10);rect(g,'#5a6a6a',x-150,y-32,92,5);
 rect(g,'#6a6a70',x-146,y-80,3,40);rect(g,'#6a6a70',x-66,y-80,3,40);rect(g,'#c8c8cc',x-152,y-84,100,5);
 rect(g,'#f2c230',x-110,y-74,36,12);g.save();g.font='bold 7px sans-serif';g.textAlign='center';g.fillStyle='#222';g.fillText('FERROVIA',x-92,y-65);g.restore();
 const bx=x+Math.sin(t*.2)*26,by=y-33+Math.sin(t*1.4)*1.2;
 el(g,'rgba(255,255,255,.35)',bx-70,by+3,34,2.5);
 poly(g,'#f4f1ea',[[bx-64,by-12],[bx-58,by],[bx+58,by],[bx+68,by-14]]);poly(g,'#1f3d6e',[[bx-61,by-5],[bx-58,by],[bx+58,by],[bx+62,by-5]]);
 rect(g,'#f8f6f0',bx-52,by-34,104,22);rect(g,'#c8c8cc',bx-56,by-38,112,5);
 for(let i=0;i<8;i++){rect(g,'#3a5a6a',bx-48+i*12.5,by-30,9,10);rect(g,'rgba(255,255,255,.4)',bx-48+i*12.5,by-30,3,10)}
 rect(g,'#f8f6f0',bx+30,by-46,18,10);rect(g,'#3a5a6a',bx+33,by-44,12,5);rect(g,'#1f3d6e',bx-6,by-37,24,6);
 g.save();g.font='bold 5px sans-serif';g.textAlign='center';g.fillStyle='#fff';g.fillText('1',bx+6,by-32);g.restore()};

PR.vegondola=(g,x,y,t,a)=>{a=a||1;const d=a<0?-1:1,s=Math.abs(a),bx=x+Math.sin(t*.2+s*2)*38,by=y-31+Math.sin(t*1.5+s)*1.3;
 g.save();g.translate(bx,by);g.scale(d,1);g.rotate(Math.sin(t*1.1+s)*.012);
 el(g,'rgba(20,50,60,.25)',0,5,92,4);
 g.fillStyle='#15151b';g.beginPath();g.moveTo(-90,-30);g.quadraticCurveTo(-84,-4,-56,-1);g.lineTo(56,-1);g.quadraticCurveTo(84,-2,98,-40);g.lineTo(94,-40);g.quadraticCurveTo(80,-14,52,-12);g.lineTo(-54,-12);g.quadraticCurveTo(-76,-14,-86,-30);g.closePath();g.fill();
 rect(g,'#d9b24a',-54,-13,106,1.6);
 rect(g,'#cfd3d8',95,-62,5,24);for(let i=0;i<5;i++)rect(g,'#cfd3d8',100,-58+i*4,4,2);
 rect(g,'#8f1a2a',-20,-30,32,18);rect(g,'#a8243a',-24,-42,8,30);rect(g,'#d9b24a',-24,-42,8,2);
 rect(g,'#e8a0b8',-14,-42,10,14);dot(g,'#e0b08c',-9,-46,4);dot(g,'#5a3a22',-9,-48,4);
 rect(g,'#3a5a8a',2,-42,10,14);dot(g,'#e0b08c',7,-46,4);dot(g,'#2a2a2a',7,-48,4);
 rect(g,'#f4f4ee',-74,-72,10,32);for(let q=0;q<4;q++)rect(g,'#c8202a',-74,-70+q*7,10,2.4);rect(g,'#1a2438',-74,-40,10,22);dot(g,'#d9a07c',-69,-79,5);
 rect(g,'#e8d49a',-77,-83,16,2.2);rect(g,'#e8d49a',-73,-90,8,7);rect(g,'#c8202a',-73,-85,8,2);rect(g,'#6a4a2a',-62,-22,6,8);
 g.strokeStyle='#7a5a32';g.lineWidth=3;g.beginPath();g.moveTo(-62,-68);g.lineTo(-46,10);g.stroke();
 g.lineWidth=1.4;g.strokeStyle='rgba(255,255,255,.5)';g.beginPath();g.ellipse(92,2,14,2,0,0,7);g.stroke();
 g.restore()};

PR.vepali=(g,x,y,t,n)=>{n=n||3;for(let i=0;i<n;i++){const px=x+i*20-(n-1)*10,h=64+((i*37)%24),s=i%2?'#2a4fa0':'#b8202a',top=y-30-h;
  for(let q=0;q<Math.ceil(h/12);q++)rect(g,q%2?'#e8e0c8':'#6a5a48',px-3.5,y-30-(q+1)*12,7,12);
  for(let q=0;q<Math.ceil(h/12);q++)if(q%2)rect(g,s,px-3.5,y-30-(q+1)*12,7,6);
  el(g,'#5a4a38',px,top,3.5,2);el(g,'rgba(255,255,255,.4)',px,y-29,9,1.6)}
 const gx=x+(n>1?0:0),gy=y-30-(64+((1*37)%24));poly(g,'#f4f4f0',[[gx-6,gy-2],[gx+7,gy-2],[gx+9,gy-8],[gx+2,gy-12],[gx-4,gy-8]]);dot(g,'#f4f4f0',gx+8,gy-12,3);rect(g,'#e8a020',gx+10,gy-12,3,1.4)};

PR.vecadoro=(g,x,y,t)=>{const c='#efe3d3',d='#dccbb4',x0=x-135,k='#33404a';
 rect(g,c,x0,y-210,270,210);rect(g,'rgba(0,0,0,.09)',x0+252,y-210,18,210);rect(g,'rgba(255,255,255,.2)',x0,y-210,5,210);
 for(let i=0;i<17;i++)poly(g,c,[[x0+i*16,y-210],[x0+i*16+8,y-226],[x0+i*16+16,y-210]]);
 rect(g,d,x0-3,y-214,276,6);rect(g,k,x0+12,y-96,150,88);rect(g,k,x0+12,y-196,150,86);
 for(let i=0;i<4;i++){const ax=x0+16+i*36;vArc(g,'#f3e9d6',ax-2,y-8,32,82);vArc(g,'#26323c',ax,y-8,28,78);
  vArc(g,'#f3e9d6',ax-2,y-108,32,82);vArc(g,'#26323c',ax,y-108,28,78);
  dot(g,'#f5ecd9',ax+14,y-100,7);dot(g,'#c9a24a',ax+14,y-100,2.6);dot(g,'#f5ecd9',ax+14,y-200,7);dot(g,'#c9a24a',ax+14,y-200,2.6)}
 rect(g,d,x0+12,y-104,150,6);
 for(let r=0;r<3;r++)for(let k2=0;k2<2;k2++){const wx=x0+188+k2*40,wy=y-170+r*52;vArc(g,'#f3e9d6',wx-3,wy+40,28,46);vArc(g,'#2e4256',wx,wy+38,22,40);rect(g,d,wx-5,wy+39,32,4)}
 vArc(g,'#33404a',x0+196,y-8,34,52);rect(g,'#c9bfa6',x0-4,y-8,278,8)};

})();

(function(){
const vArc=PR._vArc;

PR.verialto=(g,x,y,t)=>{const c='#ece3cf',e='#b8a984';
 g.fillStyle=c;g.beginPath();g.moveTo(x-190,y-26);g.lineTo(x-190,y-94);g.lineTo(x-170,y-118);g.lineTo(x-110,y-140);g.lineTo(x+110,y-140);g.lineTo(x+170,y-118);g.lineTo(x+190,y-94);g.lineTo(x+190,y-26);g.closePath();
 g.moveTo(x-105,y-26);g.ellipse(x,y-26,105,92,0,Math.PI,2*Math.PI);g.closePath();g.fill('evenodd');
 g.strokeStyle=e;g.lineWidth=6;g.beginPath();g.ellipse(x,y-26,108,95,0,Math.PI,2*Math.PI);g.stroke();
 rect(g,'rgba(0,0,0,.10)',x+150,y-120,40,94);rect(g,'rgba(255,255,255,.2)',x-190,y-94,6,68);
 for(let i=0;i<5;i++)rect(g,'rgba(0,0,0,.07)',x-190,y-40-i*18,380,1.4);
 poly(g,'#d8cdb4',[[x-250,y],[x-190,y-70],[x-190,y]]);poly(g,'#d8cdb4',[[x+250,y],[x+190,y-70],[x+190,y]]);
 for(let i=1;i<6;i++){rect(g,'rgba(0,0,0,.12)',x-250+i*10,y-i*11.6,2,i*11.6);rect(g,'rgba(0,0,0,.12)',x+250-i*10-2,y-i*11.6,2,i*11.6)}
 rect(g,'#e4d9c0',x-150,y-196,300,56);
 for(let i=0;i<9;i++){const big=i==4;fiArco(g,'#463a30',x-142+i*32,y-142,20,big?44:36);rect(g,'rgba(255,214,140,.25)',x-142+i*32+4,y-170,12,24)}
 rect(g,'#cdbf9d',x-154,y-142,308,4);rect(g,'#cdbf9d',x-154,y-198,308,4);
 poly(g,'#7e848d',[[x-160,y-196],[x-120,y-222],[x+120,y-222],[x+160,y-196]]);poly(g,'#9aa0aa',[[x-120,y-222],[x+120,y-222],[x+112,y-216],[x-112,y-216]]);
 for(let k=0;k<7;k++){const px=x-120+hr(k)*240;rect(g,['#c8402a','#2a5aa8','#e8b020','#3a8a5a'][k%4],px,y-153,3.4,8);dot(g,'#e0b08c',px+1.7,y-156,2.2)}};

PR.vepescheria=(g,x,y,t)=>{const c='#e5cbb2',d='#c9a98c',x0=x-160;
 poly(g,'#a9503a',[[x0-10,y-120],[x0+30,y-148],[x0+290,y-148],[x0+330,y-120]]);rect(g,'#7a3a2a',x0-10,y-122,340,5);
 for(let q=0;q<16;q++)rect(g,'rgba(0,0,0,.10)',x0+10+q*19,y-146,1.4,24);
 rect(g,c,x0,y-120,320,120);rect(g,'rgba(0,0,0,.08)',x0+300,y-120,20,120);
 for(let i=0;i<7;i++){const ax=x0+9+i*44;vArc(g,'#3a2b26',ax,y-8,34,104);
  rect(g,'#f2f2ee',ax+2,y-38,30,5);rect(g,'#9a8a7a',ax+4,y-33,3,33);rect(g,'#9a8a7a',ax+27,y-33,3,33);
  for(let f=0;f<3;f++){const fx=ax+8+f*9;el(g,['#c8d4dc','#e8a8a0','#b8c8d4'][(i+f)%3],fx,y-41,5,2);poly(g,'#c8d4dc',[[fx+4,y-41],[fx+8,y-44],[fx+8,y-38]])}
  dot(g,'rgba(170,215,235,.85)',ax+17,y-100+((t*30+i*17)%80),1.6)}
 rect(g,d,x0,y-124,320,5);rect(g,'#6a2a22',x-52,y-140,104,17);
 g.save();g.font='bold 11px Georgia,serif';g.textAlign='center';g.fillStyle='#e8c24a';g.fillText('PESCARIA',x,y-127);g.restore();
 rect(g,'rgba(140,190,210,.28)',x0+8,y-5,304,5)};

PR.vebacaro=(g,x,y,t)=>{const x0=x-115;
 rect(g,'#d79a76',x0,y-170,230,170);rect(g,'rgba(0,0,0,.1)',x0+216,y-170,14,170);rect(g,'#b8664a',x0+170,y-160,28,18);rect(g,'rgba(0,0,0,.1)',x0+170,y-160,28,2);
 rect(g,'#b2543a',x0-6,y-180,242,12);
 for(let i=0;i<3;i++){const wx=x0+26+i*72;rect(g,'#f2ead8',wx-3,y-160,36,50);rect(g,'#2e3a48',wx,y-157,30,44);rect(g,'#4a6a4a',wx-9,y-157,8,44);rect(g,'#4a6a4a',wx+31,y-157,8,44);rect(g,'#a8603a',wx-3,y-108,36,6);for(let q=0;q<5;q++)dot(g,['#e8505a','#ff7ab0','#ffd21e'][q%3],wx+q*7,y-110,2.6)}
 rect(g,'#1e3a2c',x0,y-100,230,100);rect(g,'#d9b24a',x0,y-102,230,3);
 rect(g,'#16281f',x0+26,y-98,178,24);
 g.save();g.font='bold 13px Georgia,serif';g.textAlign='center';g.fillStyle='#e0b84a';g.fillText('BACARO',x,y-84);g.font='8px Georgia,serif';g.fillText('cicchetti · ombre · vino',x,y-77);g.restore();
 rect(g,'rgba(255,214,130,.9)',x0+14,y-68,92,56);rect(g,'#6a4a2a',x0+14,y-34,92,6);
 for(let i=0;i<7;i++)rect(g,['#5a8a4a','#c8c070','#8a2a2a'][i%3],x0+20+i*12,y-54,5,18);
 for(let i=0;i<4;i++){dot(g,'#f4ecd0',x0+24+i*20,y-37,5);dot(g,'#c8a050',x0+24+i*20,y-38,2.4)}
 rect(g,'#14241c',x0+122,y-68,38,68);rect(g,'rgba(255,200,110,'+(.4+.1*Math.sin(t*2))+')',x0+126,y-64,30,60);
 rect(g,'#8a5a32',x0+176,y-34,34,34);rect(g,'#a8723e',x0+174,y-36,38,4);
 for(let i=0;i<3;i++){rect(g,'#f4ecd0',x0+180+i*10,y-46,5,10);rect(g,'#e8d890',x0+180+i*10,y-43,5,7)}
 rect(g,'#2a2a2a',x0+172,y-92,46,36);g.save();g.font='8px Georgia,serif';g.fillStyle='#f4f4ee';g.fillText('OMBRA',x0+177,y-82);g.fillText('CICCHETTI',x0+177,y-72);g.restore();
 rect(g,'#222',x0+112,y-128,2,12);poly(g,'#e8c04a',[[x0+106,y-116],[x0+120,y-116],[x0+117,y-104],[x0+109,y-104]]);el(g,'rgba(255,230,160,.25)',x0+113,y-110,16,16)};

PR.vemilion=(g,x,y,t)=>{const x0=x-120;
 rect(g,'#b86e4e',x0,y-190,240,190);rect(g,'rgba(0,0,0,.12)',x0+224,y-190,16,190);rect(g,'rgba(255,255,255,.1)',x0,y-190,6,190);
 for(let r=0;r<10;r++)rect(g,'rgba(0,0,0,.08)',x0,y-186+r*19,240,1.4);
 rect(g,'#9a4a34',x0-6,y-198,252,10);rect(g,'#c07a58',x0+30,y-222,12,24);rect(g,'#c07a58',x0+26,y-224,20,4);
 for(let f=0;f<2;f++)for(let k=0;k<3;k++){const wx=x0+22+k*80,wy=y-(f?112:12);if(f==0&&k==1)continue;
  fiArco(g,'#e8dcc0',wx-3,wy-(f?0:40),40,f?56:60);fiArco(g,'#2e3a48',wx,wy-(f?0:40),34,f?52:56);rect(g,'#f0e6d0',wx+16,wy-(f?50:92),2.4,f?50:56)}
 fiArco(g,'#d8cdb4',x-38,y,76,112);fiArco(g,'#2a1c14',x-32,y,64,106);rect(g,'rgba(255,200,120,.25)',x-20,y-70,40,70);
 rect(g,'#efe6d2',x-52,y-138,104,17);g.save();g.font='bold 8px Georgia,serif';g.textAlign='center';g.fillStyle='#4a3a2a';g.fillText('CORTE DEL MILION',x,y-126);g.restore();
 rect(g,'#222',x+42,y-96,2,14);poly(g,'#e8c04a',[[x+37,y-84],[x+49,y-84],[x+46,y-74],[x+40,y-74]]);el(g,'rgba(255,230,160,.25)',x+43,y-80,14,14)};

PR.veponticello=(g,x,y,t)=>{const c='#ddd2b8';
 g.fillStyle=c;g.beginPath();g.moveTo(x-150,y-26);g.lineTo(x-150,y-34);
 for(let i=0;i<6;i++){g.lineTo(x-150+i*13,y-34-(i+1)*8);g.lineTo(x-150+(i+1)*13,y-34-(i+1)*8)}
 g.lineTo(x+72,y-82);for(let i=5;i>=0;i--){g.lineTo(x+150-(i+1)*13,y-34-(i+1)*8);g.lineTo(x+150-i*13,y-34-(i+1)*8)}
 g.lineTo(x+150,y-26);g.closePath();
 g.moveTo(x-58,y-26);g.ellipse(x,y-26,58,40,0,Math.PI,2*Math.PI);g.closePath();g.fill('evenodd');
 g.strokeStyle='#bfb394';g.lineWidth=4;g.beginPath();g.ellipse(x,y-26,61,43,0,Math.PI,2*Math.PI);g.stroke();
 rect(g,'rgba(0,0,0,.10)',x+100,y-70,50,44);rect(g,'rgba(90,120,70,.35)',x-150,y-30,300,4);
 g.strokeStyle='#26262c';g.lineWidth=2;g.beginPath();g.moveTo(x-150,y-58);for(let i=0;i<6;i++){g.lineTo(x-150+i*13,y-58-(i+1)*8);g.lineTo(x-150+(i+1)*13,y-58-(i+1)*8)}g.lineTo(x+72,y-106);for(let i=5;i>=0;i--){g.lineTo(x+150-(i+1)*13,y-58-(i+1)*8);g.lineTo(x+150-i*13,y-58-(i+1)*8)}g.stroke();
 for(let i=-5;i<=5;i++){const px=x+i*14,py=Math.abs(i*14)>72?y-34-(6-Math.round((Math.abs(i*14)-72)/13+0.01)*0)-0:y-82;rect(g,'#26262c',px,y-106+(Math.abs(i*14)>72?(Math.abs(i*14)-72)/78*40:0),1.6,22)}
 el(g,'rgba(0,30,40,.25)',x,y-30,70,4)};
})();

(function(){
const vArc=PR._vArc;
const mask=(g,x,y,k)=>{g.strokeStyle='rgba(0,0,0,.35)';g.lineWidth=1;g.beginPath();g.moveTo(x,y-22);g.lineTo(x,y-12);g.stroke();
 if(k==0){el(g,'#f4f1e8',x,y,11,14);poly(g,'#f4f1e8',[[x-8,y+6],[x+8,y+6],[x+11,y+17],[x-11,y+17]]);rect(g,'#d9b24a',x-11,y-6,22,2);el(g,'#222',x-4,y-3,2.6,1.8);el(g,'#222',x+4,y-3,2.6,1.8)}
 else if(k==1){el(g,'#d9b24a',x,y,12,7);el(g,'#222',x-4,y,2.6,1.8);el(g,'#222',x+4,y,2.6,1.8);for(let q=0;q<3;q++){g.strokeStyle=['#c8202a','#2a5aa8','#2a9a4a'][q];g.lineWidth=2;g.beginPath();g.moveTo(x+8,y-4);g.quadraticCurveTo(x+14+q*3,y-14,x+12+q*5,y-22);g.stroke()}}
 else if(k==2){el(g,'#e8e0d0',x,y,9,11);poly(g,'#2a2a2a',[[x-3,y+2],[x+3,y+2],[x+1,y+18],[x-1,y+18]]);dot(g,'#222',x-4,y-3,2.6);dot(g,'#222',x+4,y-3,2.6)}
 else{el(g,'#f4f1e8',x,y,9,12);rect(g,'#c8202a',x-3,y+5,6,2);el(g,'#222',x-3.5,y-2,1.8,1.2);el(g,'#222',x+3.5,y-2,1.8,1.2);for(let q=0;q<4;q++)dot(g,'#d9b24a',x-8+q*5.4,y-10+Math.abs(q-1.5)*1.4,1.5)}};

PR.vemaschere=(g,x,y,t)=>{const x0=x-115;
 rect(g,'#c8785a',x0,y-185,230,185);rect(g,'rgba(0,0,0,.11)',x0+216,y-185,14,185);rect(g,'#9a4a34',x0-6,y-195,242,11);
 for(let i=0;i<3;i++){const wx=x0+24+i*74;rect(g,'#f2ead8',wx-3,y-170,36,50);rect(g,'#2e3a48',wx,y-167,30,44);rect(g,'#6a4a2a',wx-9,y-167,8,44);rect(g,'#6a4a2a',wx+31,y-167,8,44)}
 rect(g,'#3a241a',x0+8,y-110,214,110);rect(g,'#d9b24a',x0+8,y-112,214,3);
 rect(g,'#6a3a22',x0+60,y-104,110,20);g.save();g.font='bold 12px Georgia,serif';g.textAlign='center';g.fillStyle='#e8d49a';g.fillText('MASCHERE',x,y-90);g.restore();
 rect(g,'rgba(255,214,140,'+(.7+.08*Math.sin(t*2))+')',x0+16,y-76,90,66);rect(g,'#14100c',x0+114,y-76,38,76);rect(g,'rgba(255,200,110,.35)',x0+118,y-72,30,68);
 rect(g,'rgba(255,214,140,.7)',x0+160,y-76,54,66);
 mask(g,x0+34,y-52,0);mask(g,x0+62,y-52,1);mask(g,x0+90,y-50,2);mask(g,x0+174,y-52,3);mask(g,x0+200,y-52,1);
 mask(g,x0+30,y-140+(-0),0);rect(g,'rgba(0,0,0,.0)',0,0,0,0)};

PR.vepennoni=(g,x,y,t)=>{[-60,0,60].forEach((a,i)=>{const px=x+a;
  rect(g,'#5a4a30',px-12,y-26,24,26);rect(g,'#d9b24a',px-12,y-26,24,2);rect(g,'#d9b24a',px-12,y-4,24,2);
  rect(g,'#c8c8d0',px-2,y-252,4,226);rect(g,'rgba(0,0,0,.2)',px,y-252,2,226);dot(g,'#d9b24a',px,y-255,4);
  const col=['#c8202a','#f4f4ee','#2a4a9a'][i],top=y-248,h=32,N=8;
  for(let s=0;s<3;s++){const k0=s*N/3,k1=(s+1)*N/3;let c2=col;if(i==1)c2=['#2a8a4a','#f4f4ee','#c8202a'][s];
   g.fillStyle=c2;g.beginPath();for(let k=k0;k<=k1+.01;k+=.5)g.lineTo(px+2+k*6,top+Math.sin(t*3-k*.6+i)*3*(k/N));
   for(let k=k1;k>=k0-.01;k-=.5)g.lineTo(px+2+k*6,top+h+Math.sin(t*3-k*.6+i)*3*(k/N));g.closePath();g.fill()}
  if(i==0){dot(g,'#d9b24a',px+26,top+16+Math.sin(t*3-2.4)*1.5,6)}
  if(i==2)for(let s=0;s<8;s++)dot(g,'#f4d03a',px+26+Math.cos(s*.785)*9,top+16+Math.sin(s*.785)*9,1.5)})};

PR.veflorian=(g,x,y,t)=>{const c='#ece1c8',d='#d3c6a4',x0=x-165;
 rect(g,c,x0,y-170,330,170);rect(g,'rgba(0,0,0,.10)',x0+316,y-170,14,170);rect(g,d,x0-4,y-174,338,7);
 for(let k=0;k<9;k++){fiArco(g,d,x0+8+k*35,y-86,28,60);fiArco(g,'#33404c',x0+11+k*35,y-86,22,56);rect(g,'rgba(255,214,140,.6)',x0+13+k*35,y-120,2,2)}
 for(let k=0;k<7;k++){fiArco(g,d,x0+8+k*35+ (k%1),y,30,76);fiArco(g,'#3a2e28',x0+11+k*35,y,24,72);rect(g,'rgba(255,200,110,'+(.35+.1*Math.sin(t*2+k))+')',x0+14+k*35,y-62,18,50)}
 rect(g,'#7a1f2a',x-64,y-102,128,20);g.save();g.font='bold 11px Georgia,serif';g.textAlign='center';g.fillStyle='#e8c24a';g.fillText('CAFFÈ FLORIAN',x,y-88);g.restore();
 [x0+280,x0+314].forEach(tx=>{});
 [-80,-30,20].forEach(a=>{const tx=x+a;rect(g,'#f4f1ea',tx-12,y-24,24,3);rect(g,'#444',tx-1,y-21,2,21);rect(g,'#9a1a2a',tx-22,y-14,8,4);rect(g,'#9a1a2a',tx+14,y-14,8,4);rect(g,'#3a3a3a',tx-21,y-10,2,10);rect(g,'#3a3a3a',tx+19,y-10,2,10)});
 rect(g,'#6a4a2a',x+70,y-6,90,6);
 for(let q=0;q<3;q++){const mx=x+86+q*28;rect(g,['#1a1a22','#2a2a3a','#1a1a22'][q],mx-5,y-36,10,30);dot(g,'#e0b08c',mx,y-41,4);
  g.strokeStyle='#d9b24a';g.lineWidth=1.4;g.beginPath();g.moveTo(mx+4,y-30);g.lineTo(mx+20,y-34+Math.sin(t*6+q)*5);g.stroke();el(g,'#8a4a22',mx+8,y-32,5,3.4)}};

PR.vecampanile=(g,x,y,t)=>{
 rect(g,'#e6dcc2',x-44,y-40,88,40);rect(g,'#cdbf9d',x-44,y-42,88,4);for(let i=0;i<4;i++){fiArco(g,'#b8a984',x-38+i*20,y,14,34);}
 rect(g,'#b4523c',x-23,y-246,46,206);rect(g,'rgba(0,0,0,.16)',x+8,y-246,15,206);rect(g,'rgba(255,255,255,.12)',x-23,y-246,5,206);
 for(let r=0;r<20;r++)rect(g,'rgba(0,0,0,.07)',x-23,y-244+r*10,46,1.2);
 for(let i=0;i<4;i++)rect(g,'#7a2a20',x-3,y-210+i*44,6,18);
 rect(g,'#e2d6b8',x-26,y-250,52,5);rect(g,'#ece2c8',x-24,y-286,48,36);rect(g,'#cdbf9d',x-26,y-290,52,5);
 for(let i=0;i<4;i++){fiArco(g,'#3a2e28',x-20+i*10.4,y-250,8,26);}
 rect(g,'#ece2c8',x-20,y-312,40,22);dot(g,'#d9b24a',x,y-301,5);rect(g,'#cdbf9d',x-22,y-314,44,4);
 poly(g,'#78a894',[[x-22,y-314],[x,y-358],[x+22,y-314]]);poly(g,'rgba(0,0,0,.14)',[[x,y-358],[x+22,y-314],[x,y-314]]);
 const wv=Math.abs(Math.cos(t*.5))*9+3;dot(g,'#e8b840',x,y-366,3.4);poly(g,'#e8b840',[[x,y-364],[x-wv,y-374],[x-wv*.5,y-362]]);poly(g,'#e8b840',[[x,y-364],[x+wv,y-374],[x+wv*.5,y-362]]);rect(g,'#e8b840',x-1,y-362,2,8)};
})();

(function(){
const vArc=PR._vArc,vLA=PR._vLA;
const vLs=(g,x,y,s,c,f)=>{g.save();g.translate(x,y);g.scale(s*(f||1),s);rect(g,'#c4b99e',-20,-14,40,14);poly(g,c,[[-14,-14],[-12,-40],[0,-52],[10,-50],[14,-14]]);dot(g,'rgba(0,0,0,.15)',6,-58,11);dot(g,c,6,-58,9);rect(g,c,6,-40,5,26);rect(g,'rgba(0,0,0,.12)',-12,-40,6,26);g.restore()};

PR.vesanmarco=(g,x,y,t)=>{const c='#e9dec2',d='#cdbf9a',au='#d8aa3e';
 [[-120,24],[-60,29],[0,36],[60,29],[120,24]].forEach(a=>{const r=a[1],cx=x+a[0],cy=y-196-r*.2;el(g,'#cdd8d3',cx,cy,r,r*1.2);el(g,'rgba(255,255,255,.35)',cx-r*.3,cy-r*.2,r*.3,r*.7);rect(g,'#e0d4b0',cx-3,cy-r*1.2-8,6,10);dot(g,au,cx,cy-r*1.2-10,2.4)});
 rect(g,c,x-170,y-100,340,100);rect(g,'rgba(0,0,0,.10)',x+150,y-100,20,100);rect(g,d,x-172,y-104,344,8);
 for(let i=0;i<5;i++){const w=i==2?58:42,h=i==2?96:76,cx=x+(i-2)*66;
  fiArco(g,d,cx-w/2-5,y,w+10,h+6);fiArco(g,au,cx-w/2,y,w,h);
  for(let q=0;q<12;q++)rect(g,'rgba(255,240,170,.5)',cx-w/2+4+hr(i*13+q)*(w-8),y-h*.45-hr(i*7+q)*(h*.5),2,2);
  rect(g,'#3a2616',cx-w/2+4,y-h*.45,w-8,h*.45);rect(g,'rgba(0,0,0,.2)',cx-1,y-h*.45,2,h*.45)}
 for(let i=0;i<4;i++){const bx=x+(i-1.5)*66;[-3,3].forEach(o=>rect(g,['#9aa89a','#c4a39a','#8f9fa8','#b5a88a'][(i+o+3)%4],bx+o-1.6,y-70,3.4,70))}
 rect(g,d,x-172,y-110,344,6);for(let i=0;i<34;i++)rect(g,c,x-168+i*10,y-124,4,14);rect(g,d,x-172,y-126,344,4);
 for(let i=0;i<5;i++){const cx=x+(i-2)*66,top=i==2?y-228:y-198;
  fiArco(g,au,cx-26,y-130,52,56);rect(g,'#3a2616',cx-6,y-150,12,20);
  poly(g,d,[[cx-34,y-128],[cx,top],[cx+34,y-128]]);poly(g,c,[[cx-28,y-130],[cx,top+10],[cx+28,y-130]]);fiArco(g,au,cx-20,y-130,40,52);
  dot(g,c,cx,top-2,3);rect(g,c,cx-35,y-136,4,14)}
 for(let k=0;k<4;k++){const hx=x-24+k*16;el(g,'#b88a3a',hx,y-136,6,4);poly(g,'#b88a3a',[[hx+3,y-139],[hx+8,y-148],[hx+10,y-144],[hx+6,y-136]]);rect(g,'#b88a3a',hx-4,y-134,2,6);rect(g,'#b88a3a',hx+2,y-134,2,6)}
 vLA(g,x,y-229,.75,au)};

PR.vepalducale=(g,x,y,t)=>{const x0=x-190,co='#f0e7d3',k='#3a2e28';
 rect(g,k,x0,y-56,380,56);for(let i=0;i<9;i++){vArc(g,co,x0+4+i*41,y,37,56);vArc(g,k,x0+8+i*41,y,29,52);rect(g,'#d8cdb0',x0+3+i*41,y-58,6,6)}
 rect(g,co,x0,y-62,380,8);rect(g,k,x0,y-110,380,48);
 for(let i=0;i<19;i++){rect(g,co,x0+i*20,y-110,6,48);vArc(g,'#d8cdb0',x0+i*20+4,y-62,12,30)}
 for(let i=0;i<19;i++){const cx=x0+i*20+10;dot(g,'#f6efe0',cx,y-122,8);dot(g,k,cx,y-122,4.6)}
 rect(g,co,x0,y-134,380,6);
 rect(g,'#e6b9a4',x0,y-196,380,62);
 for(let r=0;r<4;r++)for(let q=0;q<20;q++){const cx=x0+q*20+(r%2)*10,cy=y-190+r*15;poly(g,'#f4ebdc',[[cx,cy-8],[cx+10,cy],[cx,cy+8],[cx-10,cy]])}
 [-100,40].forEach(a=>{vArc(g,'#f0e7d3',x+a-3,y-136,34,60);vArc(g,'#33404c',x+a,y-138,28,54);rect(g,'#d8cdb0',x+a-6,y-140,40,5);rect(g,'#c8bd9f',x+a-6,y-147,40,3)});
 rect(g,'rgba(0,0,0,.10)',x0+360,y-196,20,196);
 for(let i=0;i<38;i++)poly(g,co,[[x0+i*10,y-196],[x0+i*10+5,y-206],[x0+i*10+10,y-196]]);rect(g,co,x0,y-198,380,3)};

PR.vecolonne=(g,x,y,t)=>{[[x-44,0],[x+44,1]].forEach(a=>{const cx=a[0];
  rect(g,'#bdb09a',cx-18,y-8,36,8);rect(g,'#cdc2ac',cx-14,y-16,28,8);
  rect(g,'#b7a49a',cx-9,y-196,18,180);rect(g,'rgba(255,255,255,.22)',cx-9,y-196,4,180);rect(g,'rgba(0,0,0,.18)',cx+4,y-196,5,180);
  rect(g,'#d6cab0',cx-14,y-204,28,8);rect(g,'#d6cab0',cx-11,y-210,22,6);
  if(a[1]==0)vLA(g,cx-2,y-210,.95,'#5a5a3a');
  else{el(g,'#6a7a5a',cx-10,y-214,16,4);rect(g,'#8a8a82',cx-3,y-250,8,36);dot(g,'#8a8a82',cx+1,y-254,5);rect(g,'#6a6a62',cx+8,y-266,2,50);poly(g,'#6a6a62',[[cx+6,y-266],[cx+10,y-266],[cx+8,y-274]]);el(g,'#7a7a72',cx-8,y-236,7,10)}})};

PR.vesospiri=(g,x,y,t)=>{const c='#efe6d2',d='#cdbf9d';
 rect(g,'#e6b9a4',x-110,y-190,50,190);for(let r=0;r<3;r++)for(let q=0;q<2;q++)poly(g,'#f4ebdc',[[x-100+q*22,y-170+r*14],[x-92+q*22,y-162+r*14],[x-100+q*22,y-154+r*14],[x-108+q*22,y-162+r*14]]);
 rect(g,'#cdc2ac',x+60,y-150,50,150);for(let r=0;r<4;r++)rect(g,'rgba(0,0,0,.09)',x+60,y-140+r*30,50,2);
 for(let q=0;q<3;q++){rect(g,'#2a2a30',x+72+q*12,y-132,5,16)}
 poly(g,c,[[x-62,y-112],[x-62,y-140],[x-40,y-160],[x+40,y-160],[x+62,y-140],[x+62,y-112]]);poly(g,'rgba(0,0,0,.10)',[[x+20,y-160],[x+62,y-140],[x+62,y-112],[x+20,y-112]]);
 rect(g,d,x-66,y-116,132,6);rect(g,d,x-60,y-146,120,3);
 [-30,18].forEach(a=>{rect(g,d,x+a-2,y-142,18,20);rect(g,'#2a2a30',x+a,y-140,14,16);for(let q=0;q<3;q++)rect(g,'#7a7a82',x+a+3+q*4,y-140,1,16)});
 for(let i=0;i<5;i++)rect(g,d,x-56+i*24,y-110,3,6)};

PR.vepieta=(g,x,y,t)=>{const x0=x-115,c='#eee6d2',d='#d3c9ae';
 rect(g,c,x0,y-170,230,170);rect(g,'rgba(0,0,0,.10)',x0+214,y-170,16,170);
 for(let i=0;i<4;i++){rect(g,'#f6f0e0',x0+16+i*62,y-166,14,166);rect(g,d,x0+26+i*62,y-166,4,166)}
 rect(g,d,x0-4,y-174,238,8);poly(g,c,[[x0-6,y-174],[x,y-226],[x0+236,y-174]]);poly(g,d,[[x0+10,y-178],[x,y-216],[x0+220,y-178]]);dot(g,d,x,y-194,12);dot(g,c,x,y-194,8);dot(g,'#8a7a5a',x,y-194,3);
 fiArco(g,d,x-28,y,56,110);fiArco(g,'#33241a',x-24,y,48,104);rect(g,'rgba(255,200,120,.25)',x-18,y-70,36,70);
 rect(g,'#efe6d2',x-34,y-132,68,14);g.save();g.font='bold 9px Georgia,serif';g.textAlign='center';g.fillStyle='#4a3a2a';g.fillText('PIETÀ',x,y-122);g.restore();
 rect(g,'#4a2a6a',x0+20,y-110,32,44);g.save();g.font='bold 7px sans-serif';g.textAlign='center';g.fillStyle='#fff';g.fillText('CONCERTI',x0+36,y-92);g.restore();
 for(let i=0;i<3;i++)rect(g,'#d6cbb0',x-60+i*4,y-4+i*0-2*(i),120-i*8,3)};

PR.vearsenale=(g,x,y,t)=>{
 rect(g,'#a8553a',x-190,y-72,380,72);for(let r=0;r<7;r++)rect(g,'rgba(0,0,0,.10)',x-190,y-68+r*10,380,1.2);
 for(let i=0;i<19;i++)rect(g,'#9a4a34',x-190+i*20,y-84,12,12);rect(g,'rgba(0,0,0,.10)',x+120,y-72,70,72);
 [-150,150].forEach(a=>{const cx=x+a;rect(g,'#b05c40',cx-24,y-172,48,172);rect(g,'rgba(0,0,0,.14)',cx+6,y-172,18,172);rect(g,'#9a4a34',cx-28,y-180,56,10);
  for(let q=0;q<5;q++)rect(g,'#9a4a34',cx-28+q*12,y-192,8,12);rect(g,'#2a1a14',cx-2,y-130,4,22);rect(g,'#2a1a14',cx-2,y-80,4,22);poly(g,'#8a3a28',[[cx-14,y-192],[cx,y-226],[cx+14,y-192]]);rect(g,'#c8202a',cx,y-244,16,10);rect(g,'#555',cx-1,y-246,2,22)});
 rect(g,'#eee8d8',x-62,y-122,124,122);rect(g,'rgba(0,0,0,.08)',x+30,y-122,32,122);
 fiArco(g,'#cdc7b2',x-30,y,60,96);fiArco(g,'#241810',x-26,y,52,92);rect(g,'rgba(90,120,130,.5)',x-22,y-12,44,10);
 for(let i=0;i<4;i++){const cx=x-58+i*38;rect(g,'#f6f0e0',cx,y-112,8,112);rect(g,'rgba(0,0,0,.12)',cx+5,y-112,3,112)}
 rect(g,'#eee8d8',x-68,y-138,136,16);poly(g,'#eee8d8',[[x-70,y-138],[x,y-176],[x+70,y-138]]);poly(g,'#d8d0bc',[[x-54,y-140],[x,y-166],[x+54,y-140]]);vLA(g,x,y-141,.6,'#c4bc9e');
 rect(g,'#d8d0bc',x-2,y-188,4,12);dot(g,'#d8d0bc',x,y-192,4);
 vLs(g,x-100,y,1.2,'#d8d0bc',1);vLs(g,x+100,y,1.2,'#d8d0bc',-1)};

PR.vevetro=(g,x,y,t)=>{const x0=x-110;
 rect(g,'#d99a7a',x0,y-165,220,165);rect(g,'rgba(0,0,0,.1)',x0+206,y-165,14,165);rect(g,'#b2543a',x0-6,y-175,232,12);
 for(let i=0;i<3;i++){const wx=x0+26+i*68;rect(g,'#f2ead8',wx-3,y-156,36,48);rect(g,'#2e3a48',wx,y-153,30,42);rect(g,'#4a6a4a',wx-9,y-153,8,42);rect(g,'#4a6a4a',wx+31,y-153,8,42)}
 rect(g,'#2a2230',x0,y-100,220,100);rect(g,'#d9b24a',x0,y-102,220,3);rect(g,'#16101c',x0+30,y-98,160,18);
 g.save();g.font='bold 10px Georgia,serif';g.textAlign='center';g.fillStyle='#e0b84a';g.fillText('VETRO ARTISTICO · MURANO',x,y-86);g.restore();
 rect(g,'rgba(255,224,160,.9)',x0+12,y-76,144,68);rect(g,'#6a4a2a',x0+12,y-44,144,4);rect(g,'#6a4a2a',x0+12,y-22,144,4);
 const cs=['#2a5ae0','#e8303a','#e8a020','#20a870','#9a3ad0','#e8e0d0'];
 for(let r=0;r<2;r++)for(let i=0;i<7;i++){const vx=x0+22+i*20,vy=y-44+r*22,cc=cs[(i+r*2)%6];el(g,cc,vx,vy-8,6,7);rect(g,cc,vx-2,vy-18,4,7);rect(g,'rgba(255,255,255,.5)',vx-3,vy-12,2,6)}
 const cx=x0+84;g.strokeStyle='#d9b24a';g.lineWidth=1.4;g.beginPath();g.moveTo(cx,y-76);g.lineTo(cx,y-62);for(let a=-2;a<=2;a++){g.moveTo(cx,y-62);g.lineTo(cx+a*14,y-58)}g.stroke();
 for(let a=-2;a<=2;a++){dot(g,cs[(a+2)%6],cx+a*14,y-56,3.4);dot(g,'rgba(255,240,170,.35)',cx+a*14,y-56,7)}
 const sp=Math.floor(t*2)%7;dot(g,'rgba(255,255,255,.9)',x0+22+sp*20,y-52,1.8);
 rect(g,'#14101a',x0+164,y-76,44,76);rect(g,'rgba(255,200,110,.35)',x0+168,y-72,36,68)};
})();


/* ---------- elementi per Cagliari · Da Sant'Avendrace a via Roma (mondi/avendrace.js) ---------- */
var AVCAM=0;   /* posizione della camera: la imposta lo sfondo del mondo, serve a far "scurire" gli oggetti verso sera */
(function(){
let DK=0;
const cl=(v,a,b)=>Math.max(a,Math.min(b,v));
const memo={};
const tn=c=>{if(DK<.02||c.charCodeAt(0)!==35)return c;const key=c+Math.round(DK*20);if(memo[key])return memo[key];
 let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
 const r=parseInt(h.slice(0,2),16),gg=parseInt(h.slice(2,4),16),b=parseInt(h.slice(4,6),16),k=DK*.6;
 return memo[key]='rgb('+Math.round(r+(26-r)*k)+','+Math.round(gg+(34-gg)*k)+','+Math.round(b+(86-b)*k)+')'};
const rect=(g,c,x,y,w,h)=>{g.fillStyle=tn(c);g.fillRect(x,y,w,h)};
const poly=(g,c,p)=>{g.fillStyle=tn(c);g.beginPath();g.moveTo(p[0][0],p[0][1]);for(let i=1;i<p.length;i++)g.lineTo(p[i][0],p[i][1]);g.closePath();g.fill()};
const dot=(g,c,x,y,r)=>{g.fillStyle=tn(c);g.beginPath();g.arc(x,y,Math.max(0,r),0,7);g.fill()};
const el=(g,c,x,y,rx,ry)=>{g.fillStyle=tn(c);g.beginPath();g.ellipse(x,y,Math.max(0,rx),Math.max(0,ry),0,0,7);g.fill()};
const ar=(g,c,x,y,w,h)=>{rect(g,c,x,y-h+w/2,w,h-w/2);g.fillStyle=tn(c);g.beginPath();g.arc(x+w/2,y-h+w/2,w/2,Math.PI,0);g.fill()};
const pa=(g,c,x,y,w,h)=>{g.fillStyle=tn(c);g.beginPath();g.moveTo(x,y);g.lineTo(x,y-h+w*.8);g.quadraticCurveTo(x,y-h+w*.3,x+w/2,y-h);g.quadraticCurveTo(x+w,y-h+w*.3,x+w,y-h+w*.8);g.lineTo(x+w,y);g.closePath();g.fill()};
const nf=wx=>cl((wx-6700)/2400,0,1);
const glow=(g,x,y,r,col,a)=>{if(a<.02)return;const gr=g.createRadialGradient(x,y,1,x,y,r);gr.addColorStop(0,'rgba('+col+','+a+')');gr.addColorStop(1,'rgba('+col+',0)');g.fillStyle=gr;g.fillRect(x-r,y-r,2*r,2*r)};
const AV=f=>(g,x,y,t,a)=>{DK=nf(x+AVCAM);f(g,x,y,t,a)};
const txt=(g,s,x,y,sz,c,w)=>{g.save();g.font=(w||'bold')+' '+sz+'px sans-serif';g.textAlign='center';g.fillStyle=tn(c);g.fillText(s,x,y);g.restore()};
PR._av={rect,poly,dot,el,ar,pa,tn,nf,cl,glow,txt,setDK:v=>{DK=v},getDK:()=>DK};

/* --- strada e dintorni --- */
PR.avlamp=AV((g,x,y,t)=>{const k=DK;
 rect(g,'#2a2e34',x-7,y-10,14,10);rect(g,'#2a2e34',x-4.5,y-17,9,7);rect(g,'#2a2e34',x-2.5,y-122,5,106);rect(g,'#2a2e34',x-5.5,y-127,11,5);
 g.strokeStyle=tn('#2a2e34');g.lineWidth=2;g.beginPath();g.arc(x-9,y-98,9,-1.4,1.7);g.stroke();g.beginPath();g.arc(x+9,y-98,9,Math.PI-1.7,Math.PI+1.4);g.stroke();
 poly(g,'#2a2e34',[[x-10,y-138],[x+10,y-138],[x+5,y-147],[x-5,y-147]]);dot(g,'#2a2e34',x,y-150,2.6);
 rect(g,k>.1?'rgb(255,228,150)':'rgba(236,244,236,.6)',x-7,y-137,14,12);rect(g,'#2a2e34',x-8,y-126,16,2.4);
 glow(g,x,y-130,72,'255,226,150',k*.62)});
PR.avtarga=AV((g,x,y,t,s)=>{s=s||'VIA ROMA';const hw=Math.max(46,s.length*3.4+8);rect(g,'#6a6e76',x-1.5,y-112,3,112);rect(g,'#1d4e8f',x-hw,y-130,hw*2,22);rect(g,'#f4f4ee',x-hw+2,y-128,hw*2-4,1.4);rect(g,'#f4f4ee',x-hw+2,y-111,hw*2-4,1.4);txt(g,s,x,y-114,9,'#ffffff')});
PR.avbici=AV((g,x,y,t,c)=>{c=c||'#2f6fb0';const wy=y-17;
 [x-27,x+27].forEach(wx=>{g.strokeStyle=tn('#1a1a1c');g.lineWidth=3;g.beginPath();g.arc(wx,wy,17,0,7);g.stroke();g.strokeStyle=tn('#b8bcc4');g.lineWidth=.8;for(let i=0;i<8;i++){const a=i*.785;g.beginPath();g.moveTo(wx,wy);g.lineTo(wx+Math.cos(a)*16,wy+Math.sin(a)*16);g.stroke()}dot(g,'#9aa0aa',wx,wy,2.4)});
 g.strokeStyle=tn(c);g.lineWidth=3;g.beginPath();g.moveTo(x-27,wy);g.lineTo(x-8,y-46);g.lineTo(x+14,y-46);g.lineTo(x+27,wy);g.moveTo(x-27,wy);g.lineTo(x+2,wy);g.lineTo(x-8,y-46);g.moveTo(x+2,wy);g.lineTo(x+14,y-46);g.stroke();
 rect(g,'#26262a',x-17,y-52,17,4);g.strokeStyle=tn('#26262a');g.lineWidth=2.4;g.beginPath();g.moveTo(x+14,y-46);g.lineTo(x+19,y-62);g.lineTo(x+30,y-64);g.stroke();
 rect(g,'#9a7a4a',x+22,y-60,15,11);rect(g,'rgba(0,0,0,.2)',x+22,y-52,15,2);dot(g,'#8a8f98',x+2,wy,3);rect(g,'#2a2a2e',x-2,wy+1,8,2.4)});
PR.avape=AV((g,x,y,t,c)=>{c=c||'#e6dcae';
 poly(g,c,[[x-60,y-20],[x-60,y-66],[x-30,y-70],[x-10,y-72],[x-4,y-20]]);rect(g,'#5a4a30',x-96,y-28,38,6);rect(g,'#8a6a3a',x-96,y-50,38,24);rect(g,'rgba(0,0,0,.25)',x-96,y-50,38,3);
 for(let i=0;i<4;i++){rect(g,['#e8802a','#c8402a','#4a8a3a','#e8b830'][i],x-92+i*9,y-60,8,10)}
 poly(g,'#9ad0e8',[[x-52,y-66],[x-38,y-68],[x-36,y-50],[x-52,y-48]]);rect(g,'rgba(255,255,255,.4)',x-50,y-65,5,14);
 poly(g,c,[[x-8,y-22],[x-8,y-46],[x+10,y-48],[x+26,y-30],[x+26,y-22]]);poly(g,c,[[x+4,y-48],[x+10,y-70],[x+16,y-70],[x+14,y-48]]);
 rect(g,'#2a2a2e',x+4,y-78,24,4);dot(g,'#ffe9a8',x+22,y-40,3.6);rect(g,'rgba(0,0,0,.16)',x-60,y-26,52,5);
 [x-70,x+14].forEach(wx=>{dot(g,'#1b1b1f',wx,y-10,10);dot(g,'#c8c8c8',wx,y-10,4)});rect(g,'#a8202a',x-98,y-18,5,6)});
PR.avpanda=AV((g,x,y,t,c)=>{c=c||'#c8402a';
 poly(g,c,[[x-62,y-18],[x-64,y-52],[x-58,y-58],[x-42,y-60],[x-30,y-82],[x+30,y-82],[x+44,y-60],[x+60,y-56],[x+64,y-18]]);
 poly(g,'#a8d4e8',[[x-30,y-62],[x-24,y-78],[x-4,y-78],[x-4,y-62]]);poly(g,'#a8d4e8',[[x+2,y-62],[x+2,y-78],[x+26,y-78],[x+38,y-62]]);rect(g,c,x-6,y-78,6,18);
 rect(g,'rgba(255,255,255,.3)',x-28,y-76,3,12);rect(g,'rgba(0,0,0,.2)',x-62,y-34,126,4);rect(g,'#2a2a2e',x-62,y-22,126,6);
 dot(g,'#ffe9a8',x+58,y-42,3.4);dot(g,'#d83030',x-60,y-42,3);rect(g,'#d8d8d8',x+8,y-52,8,2.4);
 [x-38,x+38].forEach(wx=>{dot(g,'#1b1b1f',wx,y-14,12);dot(g,'#bdbdbd',wx,y-14,6);dot(g,'#8a8a8a',wx,y-14,2)})});
PR.avgratta=AV((g,x,y,t)=>{rect(g,'#2e2c2a',x-34,y+2,68,11);rect(g,'#58544c',x-34,y+2,68,2);
 for(let i=0;i<9;i++)rect(g,'#6a665c',x-30+i*7.4,y+5,3,6);
 const s=.5+.5*Math.sin(t*3);dot(g,'rgb(220,220,225)',x+14,y+9,2.2);rect(g,'rgba(255,255,255,'+(.4+.5*s)+')',x+13.2,y+4,1.6,10);rect(g,'rgba(255,255,255,'+(.4+.5*s)+')',x+9,y+8.2,10,1.6)});
PR.avsedia=AV((g,x,y,t)=>{
 rect(g,'#5a3e24',x-18,y-30,3,30);rect(g,'#5a3e24',x+15,y-30,3,30);rect(g,'#5a3e24',x-18,y-70,3,42);rect(g,'#5a3e24',x+15,y-70,3,42);
 rect(g,'#d8b868',x-18,y-32,36,6);rect(g,'#b89848',x-18,y-27,36,2);rect(g,'#5a3e24',x-18,y-52,36,3);rect(g,'#5a3e24',x-18,y-70,36,3);
 for(let i=0;i<5;i++)rect(g,'#5a3e24',x-13+i*7,y-66,2,12);
 [[-58,'#c0452a','#e8505a'],[-82,'#a8602a','#4a8a3a'],[44,'#b0502a','#ff7ab0'],[66,'#c0452a','#e8c030']].forEach((a,i)=>{const px=x+a[0];rect(g,a[1],px-8,y-22,16,22);rect(g,'rgba(255,255,255,.35)',px-6,y-18,3,14);
  for(let q=0;q<5;q++){g.strokeStyle=tn('#3a7a30');g.lineWidth=2;g.beginPath();g.moveTo(px,y-22);g.lineTo(px+(q-2)*6,y-40-(q%2)*6);g.stroke();dot(g,a[2],px+(q-2)*6,y-42-(q%2)*6,3.6)}});
 el(g,'#d98a3a',x+104,y-6,13,6);dot(g,'#d98a3a',x+114,y-12,5);poly(g,'#d98a3a',[[x+111,y-16],[x+112,y-22],[x+116,y-17]]);rect(g,'#f4ecd8',x+96,y-10,10,4)});
PR.avalbero=AV((g,x,y,t,s)=>{s=s||1;g.save();g.translate(x,y);g.scale(s,s);const sw=Math.sin(t*.8)*1.6;
 rect(g,'#5a4430',-5,-70,10,70);poly(g,'#5a4430',[[-5,-50],[-26,-86],[-22,-88],[-2,-62]]);poly(g,'#5a4430',[[5,-50],[28,-84],[24,-88],[2,-60]]);
 el(g,'#2f5a34',sw,-112,56,38);el(g,'#3c6b3c',-26+sw,-96,34,26);el(g,'#3c6b3c',30+sw,-98,34,26);el(g,'#4a7c46',-8+sw,-124,36,24);el(g,'#5e9154',14+sw,-132,24,14);el(g,'#5e9154',-30+sw,-112,16,10);
 for(let i=0;i<12;i++)dot(g,'rgba(255,240,170,.35)',-40+hr(i)*80+sw,-130+hr(i+9)*50,1.6);g.restore()});
PR.avpalma=AV((g,x,y,t,h)=>{h=h||150;g.lineCap='round';
 for(let i=0;i<h;i+=8){rect(g,i%16?'#8a6a4a':'#7a5a3a',x-7+Math.sin(i*.04)*2,y-i-8,14,8)}
 rect(g,'#a08060',x-9,y-h-4,18,8);
 for(let i=0;i<9;i++){const a=-Math.PI/2+(i-4)*.52,sw=Math.sin(t*1.2+i)*3,L=58+(i%2)*10;g.strokeStyle=tn(i%2?'#3a8a3e':'#2f7a36');g.lineWidth=4;g.beginPath();g.moveTo(x,y-h);g.quadraticCurveTo(x+Math.cos(a)*L*.6,y-h+Math.sin(a)*L*.6-10,x+Math.cos(a)*L+sw,y-h+Math.sin(a)*L*.5+L*.42);g.stroke();
  g.strokeStyle=tn('#58a850');g.lineWidth=1;g.beginPath();g.moveTo(x,y-h);g.quadraticCurveTo(x+Math.cos(a)*L*.6,y-h+Math.sin(a)*L*.6-12,x+Math.cos(a)*L+sw,y-h+Math.sin(a)*L*.5+L*.4);g.stroke()}
 dot(g,'#d9a23a',x-4,y-h+3,3);dot(g,'#d9a23a',x+4,y-h+5,3);g.lineCap='butt'});

/* --- edicola di giornali --- */
PR.avedicola=AV((g,x,y,t)=>{const k=DK;
 rect(g,'#2f5a44',x-62,y-124,124,124);rect(g,'rgba(0,0,0,.14)',x+44,y-124,18,124);rect(g,'#254a38',x-66,y-130,132,8);rect(g,'#f0e8d4',x-66,y-134,132,4);
 poly(g,'#254a38',[[x-70,y-130],[x-62,y-148],[x+62,y-148],[x+70,y-130]]);rect(g,'#f0e8d4',x-52,y-146,104,12);txt(g,'GIORNALI · RIVISTE',x,y-137,8,'#254a38');
 rect(g,'#1a2a22',x-52,y-116,86,62);rect(g,'rgb(255,226,160)',x-49,y-113,80,56);
 for(let r=0;r<3;r++)for(let c=0;c<8;c++)rect(g,['#e8505a','#f4f4ee','#3a7ac8','#ffd21e','#4a9a4a','#ff7ab0','#e8802a','#8a4ad0'][(r*3+c)%8],x-47+c*10,y-110+r*17,8,14);
 rect(g,'#6a4a2a',x-52,y-54,86,6);for(let i=0;i<4;i++){rect(g,'#f4f1e8',x-46+i*20,y-70+(i%2)*2,14,18);rect(g,'#c8202a',x-46+i*20,y-70+(i%2)*2,14,4)}
 rect(g,'#f4f1e8',x+38,y-112,20,28);rect(g,'#c8202a',x+38,y-112,20,6);for(let i=0;i<4;i++)rect(g,'#777',x+41,y-102+i*5,14,1.6);
 rect(g,'#f4f1e8',x+38,y-78,20,22);rect(g,'#2a6ab0',x+38,y-78,20,5);
 rect(g,'#bfa070',x-84,y-18,22,18);rect(g,'#d8c090',x-84,y-18,22,3);rect(g,'#bfa070',x-82,y-34,18,16);rect(g,'#d8c090',x-82,y-34,18,3);
 rect(g,'#555',x+72,y-84,2.4,84);rect(g,'#e8c070',x+62,y-100,22,26);for(let i=0;i<3;i++)for(let j=0;j<3;j++)rect(g,['#3a8ac8','#e8505a','#f4f4ee'][(i+j)%3],x+64+j*6.4,y-98+i*8,5,6.6);
 glow(g,x-9,y-84,60,'255,226,150',.12+k*.3)});

/* --- Grotta della Vipera --- */
PR.avvipera=AV((g,x,y,t)=>{const k=DK;
 poly(g,'#cdbf9c',[[x-210,y],[x-206,y-140],[x-170,y-190],[x-110,y-214],[x-40,y-232],[x+40,y-228],[x+120,y-214],[x+190,y-170],[x+214,y-110],[x+216,y]]);
 poly(g,'#bfae88',[[x+90,y],[x+96,y-130],[x+130,y-200],[x+190,y-170],[x+214,y-110],[x+216,y]]);
 for(let i=0;i<7;i++){rect(g,'rgba(70,56,36,.16)',x-208+((i*37)%30),y-24-i*29,420,2.2)}
 for(let i=0;i<14;i++){const px=x-196+hr(i+3)*390,py=y-30-hr(i+7)*170;rect(g,'rgba(60,46,30,.28)',px,py,6+hr(i)*8,3)}
 rect(g,'#e4d8b8',x-78,y-150,156,150);rect(g,'rgba(0,0,0,.12)',x+52,y-150,26,150);
 poly(g,'#ded1ae',[[x-92,y-150],[x,y-196],[x+92,y-150]]);poly(g,'#cfc19c',[[x-76,y-154],[x,y-188],[x+76,y-154]]);
 rect(g,'#c9bb94',x-92,y-154,184,6);
 g.strokeStyle=tn('#2a2418');g.lineWidth=2.6;g.lineCap='round';
 [-1,1].forEach(d=>{g.beginPath();g.moveTo(x+d*8,y-158);g.bezierCurveTo(x+d*24,y-170,x+d*34,y-160,x+d*46,y-165);g.bezierCurveTo(x+d*56,y-168,x+d*62,y-160,x+d*66,y-156);g.stroke();dot(g,'#2a2418',x+d*8,y-158,2.6)});g.lineCap='butt';
 rect(g,'#d9ccaa',x-70,y-144,16,144);rect(g,'#c4b690',x-62,y-144,6,144);rect(g,'#d9ccaa',x-74,y-150,24,8);rect(g,'#d9ccaa',x-74,y-8,24,8);
 rect(g,'#d9ccaa',x+54,y-124,16,124);rect(g,'#c4b690',x+62,y-124,6,124);rect(g,'#d9ccaa',x+50,y-130,24,8);rect(g,'#d9ccaa',x+50,y-8,24,8);
 rect(g,'#1c1812',x-40,y-96,80,96);rect(g,'rgba(255,214,140,'+(.14+k*.22)+')',x-34,y-90,68,84);rect(g,'#2a241a',x-40,y-100,80,6);
 for(let i=0;i<9;i++){rect(g,'rgba(60,50,34,.55)',x-36,y-86+i*6,26+(i%3)*8,1.2);rect(g,'rgba(60,50,34,.55)',x+4,y-84+i*6,28-(i%2)*8,1.2)}
 g.strokeStyle=tn('#26262a');g.lineWidth=2;for(let i=0;i<14;i++){g.beginPath();g.moveTo(x-96+i*14,y);g.lineTo(x-96+i*14,y-34);g.stroke()}
 rect(g,'#26262a',x-98,y-36,184,2.6);rect(g,'#26262a',x-98,y-10,184,2.2);
 [[-190,-60],[-150,-100],[130,-120],[170,-80],[190,-110]].forEach((a,i)=>{const px=x+a[0],py=y+a[1];for(let q=0;q<7;q++){g.strokeStyle=tn('#5a8a44');g.lineWidth=2;g.beginPath();g.moveTo(px,py);g.quadraticCurveTo(px+(q-3)*6,py-10,px+(q-3)*10,py+8+(q%2)*5);g.stroke()}dot(g,'#f4ecd8',px+4,py-2,2.2);dot(g,'#d8708a',px-6,py+2,1.8)});
 rect(g,'#6a6e76',x+108,y-98,3,98);rect(g,'#7a4a22',x+90,y-120,40,24);rect(g,'#f4ecd8',x+92,y-118,36,1.4);txt(g,'GROTTA',x+110,y-109,7,'#f4ecd8');txt(g,'DELLA VIPERA',x+110,y-100,6,'#f4ecd8')});

/* --- chiesa di Sant'Avendrace --- */
PR.avchiesa=AV((g,x,y,t)=>{const c='#eadfc2',d='#cdbf9c';
 rect(g,'#b8aa88',x-108,y-12,216,12);rect(g,'#c8ba98',x-100,y-6,200,6);
 rect(g,c,x-92,y-168,150,156);rect(g,'rgba(0,0,0,.1)',x+36,y-168,22,156);rect(g,'rgba(255,255,255,.18)',x-92,y-168,5,156);
 poly(g,d,[[x-102,y-168],[x-17,y-214],[x+68,y-168]]);poly(g,'#b0543a',[[x-98,y-170],[x-17,y-212],[x+64,y-170]]);poly(g,'#cc6a48',[[x-84,y-172],[x-17,y-204],[x+50,y-172]]);
 rect(g,'#8a3a28',x-102,y-172,170,5);rect(g,'#6a4a2a',x-19,y-232,4,22);rect(g,'#6a4a2a',x-25,y-226,16,4);
 ar(g,d,x-40,y-12,46,96);ar(g,'#3a2616',x-35,y-12,36,90);rect(g,'#2a1a0e',x-18,y-100,2,88);
 rect(g,'#bfae88',x-45,y-16,56,4);rect(g,'#cdbf9c',x-50,y-12,66,4);
 rect(g,d,x-31,y-152,28,36);rect(g,'#9ab8c8',x-28,y-149,22,30);rect(g,d,x-18,y-149,2,30);rect(g,d,x-28,y-134,22,2);
 rect(g,'#dccfae',x+58,y-250,56,238);rect(g,'rgba(0,0,0,.11)',x+96,y-250,18,238);rect(g,d,x+54,y-254,64,8);
 ar(g,'#3a2e24',x+72,y-212,22,42);rect(g,'#c8a040',x+80,y-198,6,8);
 rect(g,d,x+58,y-170,56,4);ar(g,d,x+76,y-100,18,30);ar(g,'#33281e',x+79,y-100,12,26);
 poly(g,'#7a8a6a',[[x+54,y-254],[x+86,y-286],[x+118,y-254]]);dot(g,'#d9b24a',x+86,y-290,3);
 rect(g,'#6a6e76',x-136,y-96,3,96);rect(g,'#7a4a22',x-170,y-118,70,22);rect(g,'#f4ecd8',x-168,y-116,66,1.2);txt(g,'CHIESA DI',x-134,y-108,6,'#f4ecd8');txt(g,'SANT’AVENDRACE',x-134,y-100,7,'#f4ecd8');});


/* --- Tuvixeddu --- */
PR.avcancello=AV((g,x,y,t)=>{const k=DK;
 [-84,60].forEach(a=>{rect(g,'#cbbd98',x+a,y-118,24,118);rect(g,'rgba(0,0,0,.12)',x+a+16,y-118,8,118);rect(g,'#b8aa84',x+a-3,y-124,30,7);poly(g,'#cbbd98',[[x+a+1,y-124],[x+a+12,y-136],[x+a+23,y-124]])});
 g.strokeStyle=tn('#26282c');g.lineWidth=2;for(let i=0;i<11;i++){g.beginPath();g.moveTo(x-58+i*10.5,y);g.lineTo(x-58+i*10.5,y-98);g.stroke();poly(g,'#26282c',[[x-61+i*10.5,y-98],[x-55+i*10.5,y-98],[x-58+i*10.5,y-106]])}
 rect(g,'#26282c',x-60,y-92,114,2.6);rect(g,'#26282c',x-60,y-14,114,2.6);
 rect(g,'#6a6e76',x-130,y-100,3,100);rect(g,'#7a4a22',x-170,y-124,82,30);rect(g,'#f4ecd8',x-167,y-121,76,1.4);txt(g,'NECROPOLI DI',x-129,y-110,7,'#f4ecd8');txt(g,'TUVIXEDDU',x-129,y-99,9,'#f4ecd8');
 rect(g,'#e8e4dc',x+96,y-86,90,86);rect(g,'rgba(0,0,0,.12)',x+168,y-86,18,86);poly(g,'#8a8f98',[[x+90,y-86],[x+100,y-102],[x+182,y-102],[x+192,y-86]]);
 rect(g,'#2a3038',x+106,y-70,38,32);rect(g,'rgb(255,226,160)',x+109,y-67,32,26);rect(g,'#5a4a3a',x+104,y-38,42,4);dot(g,'#6a5a48',x+124,y-52,6);rect(g,'#3a4a6a',x+118,y-46,12,8);
 rect(g,'#5a3e24',x+152,y-62,22,62);rect(g,'#f4f1e8',x+156,y-84,14,14);rect(g,'#c8202a',x+156,y-84,14,3);
 glow(g,x+125,y-54,50,'255,226,150',.1+k*.3)});
PR.avtomba=AV((g,x,y,t,kk)=>{kk=kk||0;const c='#d8cba8',d='#c4b590';
 if(kk==0){rect(g,c,x-80,y-150,160,150);rect(g,'rgba(0,0,0,.1)',x+50,y-150,30,150);
  for(let i=0;i<22;i++)rect(g,'rgba(70,56,36,.2)',x-78+hr(i)*150,y-146+hr(i+5)*140,5+hr(i+2)*6,2.4);
  rect(g,'#2a2418',x-50,y-150,22,124);rect(g,'#2a2418',x-50,y-62,112,38);rect(g,d,x-28,y-60,8,34);
  rect(g,'#26262a',x-54,y-154,30,3);for(let i=0;i<4;i++)rect(g,'#26262a',x-50+i*8,y-160,2,8);
  el(g,'#a8602a',x+24,y-40,9,12);rect(g,'#a8602a',x+20,y-58,8,8);el(g,'#d8a850',x+46,y-30,7,3);rect(g,'#9a8a6a',x-4,y-30,28,3);
  txt(g,'TOMBA A POZZO',x,y-8,6,'#6a5a3a');
 }else{rect(g,c,x-92,y-168,184,168);rect(g,'rgba(0,0,0,.1)',x+60,y-168,32,168);
  for(let i=0;i<5;i++)rect(g,'rgba(70,56,36,.16)',x-90,y-30-i*32,180,2);
  rect(g,'#1c1812',x-30,y-100,60,100);rect(g,d,x-36,y-106,72,8);
  if(kk==1){rect(g,'#b0402a',x-36,y-134,72,16);rect(g,'#e8d8b0',x-36,y-135,72,1.6);rect(g,'#e8d8b0',x-36,y-118,72,1.6);
   dot(g,'#e8c040',x,y-148,6);dot(g,'#b0402a',x,y-148,3.4);poly(g,'#e8d8b0',[[x-4,y-134],[x+4,y-134],[x+6,y-122],[x-6,y-122]]);poly(g,'#b0402a',[[x-3,y-132],[x+3,y-132],[x+4,y-124],[x-4,y-124]]);
   [-1,1].forEach(d2=>{poly(g,'#b0402a',[[x+d2*6,y-130],[x+d2*30,y-142],[x+d2*34,y-128],[x+d2*8,y-124]]);rect(g,'#e8d8b0',x+d2*12-(d2<0?10:0),y-134,10,1.2)});
   txt(g,'TOMBA DELL’UREO',x,y-8,6,'#6a5a3a')}
  else{rect(g,'#2a2418',x-4,y-90,8,36);rect(g,'#b0402a',x-3,y-146,6,50);dot(g,'#b0402a',x,y-152,6);limb(g,x,y-136,26,-0.7,3,'#b0402a');limb(g,x,y-136,26,-2.44,3,'#b0402a');limb(g,x,y-100,20,1.9,3,'#b0402a');limb(g,x,y-100,20,1.24,3,'#b0402a');
   txt(g,'TOMBA DEL SID',x,y-8,6,'#6a5a3a')}
  rect(g,'rgba(255,214,140,'+(.08+k0()*.2)+')',x-26,y-96,52,96);function k0(){return DK}}});
PR.avpannello=AV((g,x,y,t)=>{rect(g,'#5a3e24',x-48,y-100,5,100);rect(g,'#5a3e24',x+43,y-100,5,100);rect(g,'#7a5a3a',x-54,y-118,108,66);rect(g,'#f4f1e8',x-50,y-114,100,58);rect(g,'#7a4a22',x-50,y-114,100,12);txt(g,'TOMBE A POZZO',x,y-104,7,'#f4ecd8');
 rect(g,'#d8cba8',x-44,y-98,34,38);rect(g,'#2a2418',x-38,y-98,6,26);rect(g,'#2a2418',x-38,y-76,28,10);for(let i=0;i<5;i++)rect(g,'#9a9a9a',x-4+(i%2)*2,y-96+i*7,44-(i%3)*6,1.6)});
PR.avagave=AV((g,x,y,t,s)=>{s=s||1;g.save();g.translate(x,y);g.scale(s,s);
 for(let i=0;i<13;i++){const a=-Math.PI/2+(i-6)*.24,L=54+(i%3)*8;g.fillStyle=tn(i%2?'#6a9a82':'#5a8a72');g.beginPath();g.moveTo(-5,-6);g.quadraticCurveTo(Math.cos(a)*L*.5-8,-8+Math.sin(a)*L*.5,Math.cos(a)*L,-8+Math.sin(a)*L);g.quadraticCurveTo(Math.cos(a)*L*.5+8,-6+Math.sin(a)*L*.5,5,-6);g.fill()}
 rect(g,'#6a5a3a',-2,-130,4,100);for(let i=0;i<6;i++){dot(g,'#c8b040',-8+(i%2)*14,-128+i*7,3)}g.restore()});
PR.avfico=AV((g,x,y,t,s)=>{s=s||1;g.save();g.translate(x,y);g.scale(s,s);
 [[0,-18,24,18],[-22,-44,20,16],[22,-48,20,16],[2,-58,22,16],[-6,-84,18,14],[26,-78,16,12]].forEach((a,i)=>{el(g,i%2?'#5a8a4a':'#6a9a52',a[0],a[1],a[2],a[3]);el(g,'rgba(255,255,255,.14)',a[0]-4,a[1]-4,a[2]*.5,a[3]*.4);for(let q=0;q<5;q++)dot(g,'#e8e0b0',a[0]-a[2]*.6+q*a[2]*.3,a[1]+((q*7)%5)-2,.9)});
 [[-26,-58],[28,-64],[8,-72],[-10,-96],[30,-90]].forEach(a=>{el(g,'#d8502a',a[0],a[1],4,6);dot(g,'#e8a030',a[0],a[1]-6,2)});g.restore()});
PR.avmelograno=AV((g,x,y,t,s)=>{s=s||1;g.save();g.translate(x,y);g.scale(s,s);const sw=Math.sin(t*.9)*1.4;
 g.strokeStyle=tn('#6a5a48');g.lineWidth=5;g.lineCap='round';g.beginPath();g.moveTo(-4,0);g.quadraticCurveTo(-12,-30,-8,-56);g.stroke();g.beginPath();g.moveTo(4,0);g.quadraticCurveTo(14,-34,6,-62);g.stroke();g.lineWidth=3;g.beginPath();g.moveTo(-8,-40);g.quadraticCurveTo(-24,-56,-32,-76);g.stroke();g.beginPath();g.moveTo(8,-44);g.quadraticCurveTo(26,-60,34,-86);g.stroke();g.lineCap='butt';
 [[-34,-86,22],[-14,-100,26],[10,-110,28],[34,-98,22],[-2,-78,24],[26,-72,18],[-26,-62,16]].forEach((a,i)=>{el(g,i%2?'#5a8f3c':'#6ca046',a[0]+sw,a[1],a[2],a[2]*.7);el(g,'#7ab04c',a[0]+sw-4,a[1]-5,a[2]*.5,a[2]*.3)});
 [[-30,-92],[-8,-104],[20,-112],[36,-92],[2,-80],[-20,-70],[22,-70]].forEach((a,i)=>{dot(g,i%3?'#c0302a':'#e04a30',a[0]+sw,a[1],5.4);dot(g,'#8a2a1a',a[0]+sw+1,a[1]-5,1.6);dot(g,'rgba(255,255,255,.35)',a[0]+sw-1.6,a[1]-1.6,1.4)});
 [[-18,-112],[28,-118],[-4,-90]].forEach(a=>dot(g,'#f06a30',a[0]+sw,a[1],2.6));g.restore()});
PR.avmuretto=AV((g,x,y,t,w)=>{w=w||220;const x0=x-w/2;const cs=['#b8ab94','#a89c86','#c4b8a0','#9a8e7a','#b0a48c'];
 for(let r=0;r<4;r++){let px=x0+(r%2)*9;let i=r*13;while(px<x0+w-4){const sw=22+hr(i)*22,sh=12+hr(i+3)*3;rect(g,cs[(i+r)%5],px,y-(r+1)*14,Math.min(sw,x0+w-px),sh);rect(g,'rgba(0,0,0,.2)',px,y-(r+1)*14+sh-2,Math.min(sw,x0+w-px),2);rect(g,'rgba(255,255,255,.16)',px+1,y-(r+1)*14,Math.min(sw,x0+w-px)-2,2);px+=sw+1.5;i++}}
 rect(g,'#4a3e30',x0,y-60,w,4);for(let i=0;i<w/14;i++){const px=x0+i*14+hr(i+9)*6,hh=6+hr(i)*10;g.strokeStyle=tn(i%3?'#6a9a44':'#8aa858');g.lineWidth=1.6;g.beginPath();g.moveTo(px,y-58);g.lineTo(px+(hr(i+2)-.5)*8,y-58-hh);g.stroke()}
 for(let i=0;i<w/70;i++){el(g,'#5a8a58',x0+30+i*70,y-66,16,9);dot(g,'#9a8ad0',x0+26+i*70,y-70,1.6)}});

/* --- Corso Vittorio Emanuele --- */
PR.avtavolo=AV((g,x,y,t,c)=>{c=c||'#c8402a';const k=DK;
 [-1,1].forEach(d=>{const cx=x+d*50;rect(g,'#6a4a2a',cx-11,y-28,22,4);rect(g,'#6a4a2a',cx-10,y-26,2,26);rect(g,'#6a4a2a',cx+8,y-26,2,26);rect(g,'#6a4a2a',cx+(d<0?-12:8),y-58,3,30);rect(g,'#6a4a2a',cx+(d<0?-12:8),y-58,4,3);rect(g,'#6a4a2a',cx+(d<0?-12:8),y-48,4,3)});
 rect(g,'#4a3a2a',x-3,y-38,6,38);rect(g,'#4a3a2a',x-18,y-3,36,3);
 for(let i=0;i<9;i++)rect(g,i%2?c:'#f4f1e8',x-34+i*7.6,y-44,7.6,5);for(let i=0;i<9;i++)rect(g,i%2?'#f4f1e8':c,x-34+i*7.6,y-39,7.6,5);for(let i=0;i<9;i++)rect(g,i%2?c:'#f4f1e8',x-34+i*7.6,y-34,7.6,5);
 poly(g,c,[[x-34,y-29],[x+34,y-29],[x+30,y-22],[x-30,y-22]]);
 rect(g,'#2f7a4a',x-24,y-62,6,18);rect(g,'#2f7a4a',x-23,y-67,4,5);rect(g,'rgba(255,255,255,.5)',x-14,y-56,5,12);rect(g,'rgba(255,255,255,.5)',x-6,y-56,5,12);el(g,'#f4f1e8',x+18,y-45,9,2.4);
 rect(g,'#f4ecd0',x+3,y-56,6,12);dot(g,'rgba(255,200,90,'+(.8+.2*Math.sin(t*9))+')',x+6,y-59,2.4);glow(g,x+6,y-58,40,'255,200,100',.08+k*.4)});
PR.avtenda=AV((g,x,y,t,n)=>{n=n||0;const k=DK,nm=['TRATTORIA','PIZZERIA','OSTERIA'][n%3],pc=['#e8c9a0','#dba08a','#d4dcb8'][n%3],ac=['#a8302a','#2f7a4a','#2a5aa0'][n%3];
 rect(g,pc,x-124,y-196,248,196);rect(g,'rgba(0,0,0,.12)',x+104,y-196,20,196);rect(g,'#8a6a4a',x-128,y-202,256,7);rect(g,'#d8c8a0',x-128,y-196,256,3);
 for(let i=0;i<3;i++){const wx=x-100+i*76;rect(g,'#f2ead8',wx-3,y-186,38,56);rect(g,'#2e3a48',wx,y-183,32,50);rect(g,'#4a6a4a',wx-11,y-183,9,50);rect(g,'#4a6a4a',wx+34,y-183,9,50);rect(g,'#d8d0bc',wx-5,y-131,42,4);for(let q=0;q<4;q++)dot(g,['#e8505a','#ff7ab0','#ffd21e','#e8505a'][q],wx+4+q*8,y-134,2.6)}
 rect(g,'#3a2a1a',x-124,y-122,248,18);rect(g,'#f4ecd0',x-50,y-120,100,14);txt(g,nm,x,y-109,11,'#3a2a1a','bold');
 g.fillStyle=tn(ac);g.beginPath();g.moveTo(x-130,y-102);g.lineTo(x+130,y-102);g.lineTo(x+122,y-78);g.lineTo(x-122,y-78);g.fill();for(let i=0;i<11;i++)poly(g,'rgba(255,255,255,.85)',[[x-130+i*23.6,y-102],[x-118+i*23.6,y-102],[x-116+i*23.2,y-78],[x-124+i*23.2,y-78]]);
 for(let i=0;i<12;i++)el(g,i%2?ac:'#f4f1e8',x-120+i*21.8,y-77,10.9,4);
 ar(g,'#6a4a2a',x-110,y,50,92);ar(g,'rgba(255,214,130,'+(.8+.1*Math.sin(t*3))+')',x-105,y,40,86);ar(g,'#6a4a2a',x+60,y,50,92);ar(g,'rgba(255,214,130,'+(.8+.1*Math.sin(t*3+1))+')',x+65,y,40,86);
 ar(g,'#3a2616',x-24,y,48,100);ar(g,'rgba(255,200,120,.6)',x-19,y,38,94);rect(g,'#6a4a2a',x-1,y-94,2,94);
 for(let i=0;i<5;i++){rect(g,'rgba(255,220,150,.35)',x-100+i*6,y-60,3,30);rect(g,'rgba(255,220,150,.35)',x+70+i*6,y-60,3,30)}
 [-134,134].forEach(a=>{rect(g,'#a8603a',x+a-10,y-22,20,22);for(let q=0;q<5;q++){g.strokeStyle=tn('#2a8a3a');g.lineWidth=2.4;g.beginPath();g.moveTo(x+a,y-22);g.lineTo(x+a+(q-2)*6,y-44-(q%2)*5);g.stroke()}dot(g,'#2f7a3a',x+a,y-48,12)});
 rect(g,'#f4ecd0',x+36,y-62,34,50);rect(g,'#3a2a1a',x+36,y-62,34,3);rect(g,'#3a2a1a',x+36,y-14,34,3);for(let i=0;i<5;i++)rect(g,'#6a5a48',x+40,y-52+i*8,26-(i%2)*8,1.4);
 glow(g,x,y-90,120,'255,200,110',k*.28)});
PR.avfestoni=AV((g,x,y,t,w)=>{w=w||320;const k=DK,x0=x-w/2;rect(g,'#3a3a40',x0-3,y-190,6,46);rect(g,'#3a3a40',x0+w-3,y-190,6,46);
 for(let r=0;r<2;r++){g.strokeStyle=tn('#2a2a2e');g.lineWidth=1;g.beginPath();for(let i=0;i<=24;i++){const u=i/24,px=x0+u*w,py=y-186+r*10+Math.sin(u*Math.PI)*(16+r*4);i?g.lineTo(px,py):g.moveTo(px,py)}g.stroke();
  for(let i=1;i<24;i++){const u=i/24,px=x0+u*w,py=y-186+r*10+Math.sin(u*Math.PI)*(16+r*4)+3;dot(g,'rgb(255,228,150)',px,py,2.2);if(k>.05)glow(g,px,py,14,'255,214,120',.22+.2*k)}}});
PR.avbar=AV((g,x,y,t)=>{const k=DK,x0=x-130;
 rect(g,'#e6dcc2',x0,y-196,260,196);rect(g,'rgba(0,0,0,.12)',x0+240,y-196,20,196);rect(g,'#2f5a44',x0-4,y-200,268,8);rect(g,'#2f5a44',x0,y-110,260,6);
 for(let i=0;i<3;i++){const wx=x0+16+i*84;rect(g,'#f2ead8',wx-3,y-184,48,56);rect(g,'#2e3a48',wx,y-181,42,50);rect(g,'#2f5a44',wx-10,y-181,8,50);rect(g,'#2f5a44',wx+44,y-181,8,50)}
 rect(g,'#2a1c14',x0+10,y-106,190,106);rect(g,'rgb(255,226,160)',x0+16,y-100,178,70);
 for(let r=0;r<2;r++)for(let c=0;c<14;c++)rect(g,['#8a5a2a','#2a6a3a','#c8a050','#7a2a2a'][(r+c)%4],x0+22+c*12.4,y-96+r*18,8,13);
 rect(g,'#7a4a2a',x0+16,y-60,178,8);rect(g,'#c0c8d0',x0+26,y-82,44,22);rect(g,'#8a929c',x0+26,y-82,44,5);dot(g,'#222',x0+36,y-70,4);dot(g,'#222',x0+54,y-70,4);dot(g,'rgba(255,255,255,.5)',x0+46+Math.sin(t*2)*3,y-90-(t*9)%12,2);
 for(let i=0;i<7;i++){el(g,'#e8b868',x0+96+i*14,y-64,6,3);el(g,'#c88a3a',x0+96+i*14,y-66,4,1.6)}
 rect(g,'#2f5a44',x0+60,y-142,140,24);rect(g,k>.3?'rgb(255,120,150)':'#f4ecd0',x0+64,y-139,132,18);txt(g,'CAFFÈ · GELATI',x0+130,y-125,11,'#2f5a44','bold');
 rect(g,'#f4ecd0',x0+208,y-92,40,60);rect(g,'#c8202a',x0+208,y-92,40,8);txt(g,'Ichnusa',x0+228,y-82,7,'#f4ecd0','bold');rect(g,'#e8b830',x0+212,y-72,32,10);rect(g,'#2a6a3a',x0+212,y-58,32,10);
 [-1,1].forEach(d=>{const ux=x0+250+d*0;});
 rect(g,'#6a4a2a',x0+268,y-90,3,90);g.fillStyle=tn('#e8505a');g.beginPath();g.ellipse(x0+269,y-92,40,15,0,Math.PI,0);g.fill();for(let i=-1;i<=1;i++)poly(g,'rgba(255,255,255,.7)',[[x0+269+i*20-6,y-92],[x0+269+i*20+6,y-92],[x0+269+i*14+4,y-106],[x0+269+i*14-4,y-106]]);
 rect(g,'#f4f1e8',x0+250,y-34,40,3);rect(g,'#6a4a2a',x0+268,y-34,3,34);
 glow(g,x0+110,y-70,100,'255,214,130',k*.3)});
PR.avgelato=AV((g,x,y,t)=>{const k=DK;
 rect(g,'#cfe4ee',x-58,y-104,116,104);rect(g,'rgba(0,0,0,.12)',x+40,y-104,18,104);rect(g,'#f4f1e8',x-62,y-108,124,6);
 g.fillStyle=tn('#e8607a');g.beginPath();g.moveTo(x-66,y-100);g.lineTo(x+66,y-100);g.lineTo(x+58,y-80);g.lineTo(x-58,y-80);g.fill();for(let i=0;i<6;i++)poly(g,'rgba(255,255,255,.85)',[[x-66+i*22,y-100],[x-55+i*22,y-100],[x-53+i*21.6,y-80],[x-60+i*21.6,y-80]]);
 rect(g,'#2a1c14',x-48,y-76,64,48);rect(g,'rgb(255,226,170)',x-45,y-73,58,42);rect(g,'#c8ccd2',x-38,y-68,22,32);rect(g,'#8a8f98',x-38,y-68,22,5);txt(g,'Carpigiani',x-27,y-56,5,'#c8202a');
 poly(g,'#f4ecd8',[[x-30,y-36],[x-22,y-36],[x-26,y-26]]);rect(g,'#7a4a2a',x-48,y-30,64,5);
 poly(g,'#f4ecd8',[[x-30,y-38],[x-22,y-38],[x-26,y-48]]);el(g,'#fbf0f0',x-26,y-44,5,3);el(g,'#ffc8d8',x-26,y-48,4,2.4);
 for(let i=0;i<3;i++){poly(g,'#d8a050',[[x+22+i*10,y-40],[x+30+i*10,y-40],[x+26+i*10,y-24]]);dot(g,['#ffc8d8','#f4e8b0','#a8603a'][i],x+26+i*10,y-43,5)}
 rect(g,'#f4ecd0',x+20,y-70,34,22);txt(g,'GELATO',x+37,y-60,8,'#c8202a','bold');txt(g,'cono, coppetta',x+37,y-52,5,'#6a4a2a','normal');
 glow(g,x-16,y-52,60,'255,224,160',.1+k*.3)});
PR.avcarte=AV((g,x,y,t)=>{const k=DK;
 [-1,1].forEach(d=>{const cx=x+d*54;rect(g,'#6a4a2a',cx-11,y-28,22,4);rect(g,'#6a4a2a',cx-10,y-26,2,26);rect(g,'#6a4a2a',cx+8,y-26,2,26);rect(g,'#6a4a2a',cx+(d<0?-12:8),y-58,3,30);rect(g,'#6a4a2a',cx+(d<0?-12:8),y-58,4,3)});
 rect(g,'#7a5a3a',x-44,y-42,88,5);rect(g,'#5a3e24',x-40,y-37,5,37);rect(g,'#5a3e24',x+35,y-37,5,37);rect(g,'#2f6a3a',x-40,y-44,80,3);
 [['#f4ecd0','#c8202a'],['#f4ecd0','#2a6ab0'],['#f4ecd0','#2f7a3a'],['#f4ecd0','#d8a020'],['#f4ecd0','#c8202a']].forEach((a,i)=>{const px=x-30+i*11,py=y-60-Math.abs(i-2)*1.4;g.save();g.translate(px,py+14);g.rotate((i-2)*.14);rect(g,a[0],-5,-14,10,16);rect(g,a[1],-3,-11,6,5);dot(g,a[1],0,-3,1.6);g.restore()});
 rect(g,'#2a6a3a',x+22,y-62,6,20);rect(g,'#2a6a3a',x+23,y-67,4,5);rect(g,'#c8402a',x+23,y-58,4,8);rect(g,'#2a6a3a',x+32,y-58,6,16);rect(g,'rgba(255,230,160,.5)',x+33,y-54,2,8);
 rect(g,'#f4f1e8',x-40,y-50,10,8);rect(g,'#3a2a1a',x-1,y-150,2,86);poly(g,'#2a3a2a',[[x-18,y-120],[x+18,y-120],[x+10,y-132],[x-10,y-132]]);rect(g,'rgb(255,226,150)',x-9,y-121,18,3);glow(g,x,y-100,90,'255,226,150',.14+k*.4)});

/* --- Via Roma, porto, stazione --- */
PR.avmunicipio=AV((g,x,y,t)=>{const c='#dcc9a2',d='#c8b088',e='#a8895c',k=DK;
 rect(g,c,x-170,y-196,340,196);rect(g,'rgba(0,0,0,.1)',x+140,y-196,30,196);rect(g,e,x-176,y-204,352,10);
 for(let i=0;i<7;i++){const ax=x-166+i*48,big=i==3,hh=big?112:86;pa(g,d,ax-2,y,48,hh+6);pa(g,'#2a2018',ax+2,y,40,hh);rect(g,'rgba(255,200,120,'+(.2+k*.4)+')',ax+6,y-hh+30,28,hh-30)}
 rect(g,e,x-170,y-122,340,6);
 for(let i=0;i<7;i++){const ax=x-162+i*48;pa(g,e,ax,y-124,16,44);pa(g,e,ax+18,y-124,16,44);pa(g,k>.2?'rgb(255,222,150)':'#3a4a5a',ax+3,y-126,10,38);pa(g,k>.2?'rgb(255,222,150)':'#3a4a5a',ax+21,y-126,10,38);rect(g,d,ax+14,y-124,6,6)}
 rect(g,e,x-170,y-134,340,5);for(let i=0;i<7;i++)rect(g,'#8a6a40',x-166+i*48,y-140,44,2.4);
 for(let i=0;i<14;i++){rect(g,k>.3?'rgb(255,222,150)':'#4a5a6a',x-160+i*24,y-182,10,24);rect(g,d,x-162+i*24,y-185,14,4)}
 for(let i=0;i<22;i++)rect(g,c,x-172+i*16,y-218,10,14);
 poly(g,d,[[x-34,y-204],[x,y-250],[x+34,y-204]]);dot(g,'#f4f1e8',x,y-226,14);dot(g,'#3a3a3a',x,y-226,14);dot(g,'#f4f1e8',x,y-226,12);limb(g,x,y-226,8,-1.2+t*.0,1.6,'#222');limb(g,x,y-226,10,.3,1.6,'#222');
 [-1,1].forEach(s=>{const tx=x+s*196;rect(g,'#dcb89a',tx-30,y-300,60,300);rect(g,'rgba(0,0,0,.12)',tx+(s<0?4:8),y-300,24,300);rect(g,e,tx-33,y-304,66,8);for(let q=0;q<6;q++)rect(g,'#dcb89a',tx-30+q*11,y-316,7,12);
  for(let r=0;r<4;r++)pa(g,k>.3?'rgb(255,222,150)':'#3a4a5a',tx-9,y-100-r*50,18,34);rect(g,e,tx-30,y-146,60,3);rect(g,e,tx-30,y-196,60,3);rect(g,e,tx-30,y-246,60,3);
  poly(g,'#6f8f84',[[tx-30,y-316],[tx,y-370],[tx+30,y-316]]);dot(g,'#d9b24a',tx,y-374,3)});
 rect(g,'#555',x-196,y-420,2,50);const sw=Math.sin(t*2)*2;poly(g,'#f4f4ee',[[x-194,y-420],[x-160+sw,y-416],[x-194,y-404]]);poly(g,'#2f7a3a',[[x-194,y-420],[x-178,y-418+sw*.3],[x-194,y-404]]);poly(g,'#c8202a',[[x-160+sw,y-416],[x-168,y-412],[x-160+sw,y-406]]);
 glow(g,x,y-80,200,'255,210,130',k*.2)});
PR.avtraghetto=AV((g,x,y,t,c)=>{c=c||'#c8202a';const k=DK,by=y-36,lit='rgb(255,226,150)';
 poly(g,'#1f3d6e',[[x-190,by-44],[x-176,by-4],[x-120,by+2],[x+176,by+2],[x+196,by-20],[x+196,by-44]]);rect(g,'#f4f4ee',x-186,by-44,382,4);rect(g,c,x-170,by-12,350,3);
 for(let i=0;i<26;i++)dot(g,k>.2?lit:'#2a3a4a',x-150+i*13,by-26,2.6);
 rect(g,'#f4f4ee',x-176,by-86,360,42);rect(g,'rgba(0,0,0,.1)',x-176,by-48,360,4);for(let i=0;i<32;i++)rect(g,k>.2?lit:'#33485a',x-166+i*11,by-76,7,8);for(let i=0;i<28;i++)rect(g,k>.2?lit:'#33485a',x-160+i*11.4,by-60,7,8);
 rect(g,'#f8f6f0',x-150,by-118,290,32);for(let i=0;i<24;i++)rect(g,k>.2?lit:'#33485a',x-142+i*11.8,by-110,8,9);
 rect(g,'#f8f6f0',x-60,by-148,150,30);rect(g,'#2a3a4a',x-54,by-142,138,10);for(let i=0;i<12;i++)rect(g,k>.2?lit:'#4a6a7a',x-52+i*11.6,by-141,9,8);
 rect(g,c,x+20,by-176,34,30);rect(g,'#f4f4ee',x+20,by-164,34,6);rect(g,'#1a1a1c',x+20,by-178,34,4);
 rect(g,'#aaa',x-110,by-176,2.4,30);for(let i=0;i<8;i++)dot(g,'#e86a20',x-130+i*22,by-48,4);
 rect(g,'#6a6a70',x-176,by-4,2,16);g.strokeStyle=tn('#3a3a3a');g.lineWidth=1.4;[x-150,x+150].forEach(a=>{g.beginPath();g.moveTo(a,by-30);g.lineTo(a+(a<x?-30:30),by+22);g.stroke()});
 dot(g,'rgb(255,60,50)',x-109,by-178,2.4);if(k>.1)glow(g,x,by-60,220,'255,214,130',k*.18)});
PR.avgru=AV((g,x,y,t)=>{const k=DK,c='#2f6fb0';
 [-26,26].forEach(a=>{rect(g,'#e8e8e8',x+a-3,y-90,6,90);rect(g,'#e8e8e8',x+a-5,y-6,10,6)});rect(g,c,x-34,y-98,68,10);rect(g,'#e8e8e8',x-30,y-60,60,4);
 g.strokeStyle=tn('#e8e8e8');g.lineWidth=2;g.beginPath();for(let i=0;i<6;i++){g.moveTo(x-20,y-90+i*-16);g.lineTo(x+20,y-106-i*16+16)}g.stroke();
 rect(g,c,x-14,y-250,28,152);for(let i=0;i<9;i++)rect(g,'#e8e8e8',x-14,y-246+i*16,28,2);
 rect(g,c,x-140,y-262,230,12);rect(g,'#e8e8e8',x-140,y-250,230,3);poly(g,'#e8e8e8',[[x-14,y-250],[x+40,y-300],[x+44,y-296],[x-6,y-250]]);rect(g,'#2a3a4a',x+4,y-290,22,14);rect(g,'#6a6a70',x-130,y-248,1.6,56);rect(g,'#3a3a3a',x-134,y-192,8,8);
 dot(g,k>.1?'rgb(255,60,50)':'#a03030',x-139,y-266,2.6);dot(g,k>.1?'rgb(255,60,50)':'#a03030',x+14,y-304,2.6)});
PR.avstazione=AV((g,x,y,t)=>{const c='#e4cfa4',d='#cdb88c',e='#a8895c',k=DK;
 rect(g,c,x-190,y-110,380,110);rect(g,'rgba(0,0,0,.1)',x+160,y-110,30,110);rect(g,e,x-194,y-116,388,8);
 for(let i=0;i<5;i++){[-1,1].forEach(s=>{const ax=x+s*(78+i*22)-9;if(i<4){ar(g,d,ax-2,y-8,22,62);ar(g,k>.2?'rgb(255,222,150)':'#33404c',ax+1,y-8,16,56)}})}
 rect(g,c,x-76,y-170,152,170);rect(g,'rgba(0,0,0,.08)',x+52,y-170,24,170);rect(g,e,x-82,y-178,164,10);poly(g,d,[[x-84,y-178],[x,y-216],[x+84,y-178]]);poly(g,c,[[x-72,y-180],[x,y-210],[x+72,y-180]]);
 dot(g,'#f4f1e8',x,y-194,12);dot(g,'#3a3a3a',x,y-194,12);dot(g,k>.2?'rgb(255,240,190)':'#f4f1e8',x,y-194,10.4);limb(g,x,y-194,7,-1.57,1.6,'#222');limb(g,x,y-194,9,0.5,1.6,'#222');
 for(let i=0;i<3;i++){ar(g,d,x-62+i*44,y-100,28,52);ar(g,k>.2?'rgb(255,222,150)':'#33404c',x-59+i*44,y-100,22,48)}
 for(let i=0;i<3;i++){ar(g,d,x-56+i*38,y-8,26,86);ar(g,'#2a2018',x-53+i*38,y-8,20,82);rect(g,'rgba(255,200,120,'+(.25+k*.5)+')',x-50+i*38,y-70,14,60)}
 rect(g,'#2a3a6a',x-62,y-146,124,16);txt(g,'CAGLIARI',x,y-134,11,'#f4f1e8','bold');
 rect(g,'#7a8088',x-200,y-70,40,6);rect(g,'#7a8088',x+160,y-70,40,6);rect(g,'#5a6068',x-196,y-64,3,64);rect(g,'#5a6068',x+194,y-64,3,64);
 glow(g,x,y-70,170,'255,214,130',k*.22)});

})();
