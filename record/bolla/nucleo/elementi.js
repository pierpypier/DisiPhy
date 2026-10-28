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


/* ---------- elementi per Roma · Dal Colosseo a San Pietro (mondi/roma.js) ---------- */
/* Riusano la luce del giorno/sera di Cagliari (stessa funzione nf e stessa variabile AVCAM): la giornata scorre da sinistra a destra. */
(function(){
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,pa=A.pa,tn=A.tn,txt=A.txt,glow=A.glow,nf=A.nf,cl=A.cl;
const RM=f=>(g,x,y,t,a)=>{A.setDK(nf(x+AVCAM));f(g,x,y,t,a,A.getDK())};
const LIT='rgb(255,226,150)';
const ln=(g,c,w,p)=>{g.strokeStyle=tn(c);g.lineWidth=w;g.beginPath();g.moveTo(p[0],p[1]);for(let i=2;i<p.length;i+=2)g.lineTo(p[i],p[i+1]);g.stroke()};
/* colonna scanalata: base a terra y, altezza h, larghezza w */
function colo(g,x,y,h,w,c,cap){cap=cap||c;const l=x-w/2;
 rect(g,c,l,y-h,w,h);rect(g,'rgba(255,248,225,.26)',l,y-h,w*.28,h);rect(g,'rgba(40,24,6,.18)',l+w*.66,y-h,w*.34,h);
 if(w>6)for(let i=1;i<5;i++)rect(g,'rgba(40,24,6,.10)',l+i*w/5,y-h,.7,h);
 rect(g,cap,l-w*.16,y-h-w*.34,w*1.32,w*.34);rect(g,'rgba(40,24,6,.16)',l-w*.16,y-h-1,w*1.32,1.4);rect(g,cap,l-w*.1,y-w*.3,w*1.2,w*.3)}
/* gatto seduto */
function gatto(g,x,y,t,c){c=c||'#c9873a';el(g,c,x,y-7,9,7);dot(g,c,x+8,y-14,5.4);poly(g,c,[[x+4,y-17],[x+6,y-23],[x+9,y-18]]);poly(g,c,[[x+9,y-18],[x+12,y-23],[x+13,y-16]]);
 g.strokeStyle=tn(c);g.lineWidth=2.4;g.beginPath();g.moveTo(x-8,y-4);g.quadraticCurveTo(x-18,y-6+Math.sin(t*2)*3,x-17,y-16+Math.sin(t*2)*3);g.stroke();dot(g,'#2a2a1a',x+9.5,y-14.5,.9);dot(g,'#2a2a1a',x+11.8,y-14,.9)}
PR._rm={colo,gatto,RM,ln};

/* --- Colosseo: il muro esterno intatto a sinistra, quello crollato a destra con l'anello interno in vista --- */
PR.rmcolosseo=RM((g,x,y,t,a,k)=>{const L=x-350,TR='#dcc79a',TR2='#cbb482',IN='#b39d6c',DA='#46372a',DI='#35291c';
 /* anello interno (più scuro, arretrato) */
 const inn=[[x-20,y],[x-20,y-146],[x+70,y-146],[x+70,y-134],[x+150,y-134],[x+150,y-104],[x+240,y-104],[x+240,y-88],[x+322,y-88],[x+322,y-60],[x+352,y-60],[x+352,y]];
 poly(g,IN,inn);
 for(let r=0;r<3;r++){const yb=y-r*46;for(let bx=x-8;bx<x+346;bx+=21){const top=yb-46;if(top<-9999)continue;
   const hh=r==0?32:30;let ok=true;const ex=bx+8;/* l'arcata esiste solo dove l'anello arriva a quell'altezza */
   const lim=ex<x+70?146:ex<x+150?134:ex<x+240?104:ex<x+322?88:60;if(46*r+hh>lim-4)ok=false;
   if(ok)ar(g,DI,bx,yb-3,13,hh)}}
 for(let q=0;q<9;q++)rect(g,'rgba(255,255,255,.07)',x-20+q*38,y-146+(q%3)*10,16,4);
 /* muro esterno: sagoma a gradini */
 const out=[[L,y],[L,y-182],[x+40,y-182],[x+40,y-170],[x+60,y-170],[x+60,y-146],[x+86,y-146],[x+86,y-124],[x+114,y-124],[x+114,y-100],[x+142,y-100],[x+142,y-52],[x+198,y-52],[x+198,y]];
 poly(g,TR,out);poly(g,'rgba(255,226,160,.13)',out);
 g.save();g.beginPath();out.forEach((q,i)=>i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1]));g.closePath();g.clip();for(let p=0;p<10;p++)rect(g,'rgba(120,96,60,'+(.05+hr(p)*.06)+')',L+hr(p*3)*470,y-170+hr(p*5)*150,18+hr(p)*26,10+hr(p+3)*14);g.restore();
 const tiers=[[0,52,198,'d'],[52,100,142,'i'],[100,148,114,'c'],[148,182,60,'a']];
 tiers.forEach((T,ti)=>{const yb=y-T[0],yt=y-T[1],ex=x+T[2];
  if(ti<3){rect(g,TR2,L,yt,ex-L,4);rect(g,'rgba(0,0,0,.13)',L,yt+4,ex-L,2)}
  for(let bx=L+5;bx+13<=ex;bx+=23){
   if(ti==3){if(((bx-L)/23|0)%2==0)rect(g,DI,bx+3,yt+9,7,13);rect(g,TR2,bx+2,yt+1,9,3);continue}
   const hh=ti==0?36:32;ar(g,DA,bx,yb-3,13,hh);rect(g,'rgba(0,0,0,.2)',bx+9,yb-3-hh+7,4,hh-7);
   rect(g,'rgba(255,248,225,.3)',bx-4,yb-3-hh+4,2.6,hh-4);rect(g,TR2,bx+14,yb-3-hh+2,2.6,hh-2);
   if(ti>0&&hr(bx*.13+ti)>.72){rect(g,'#e8e0cc',bx+4.5,yb-3-hh+14,4,hh-14);dot(g,'#e8e0cc',bx+6.5,yb-3-hh+12,2.2)}}
  if(ti==0)for(let bx=L+5;bx+13<=ex;bx+=23*4){rect(g,'#6a5a40',bx+4,yb-48,6,5);txt(g,['I','V','X','XV','XX','XL'][(bx/92|0)%6],bx+7,yb-44,4.4,'#e8dcc0')}});
 /* vegetazione sui bordi spezzati */
 [[x+40,y-182],[x+60,y-170],[x+86,y-146],[x+114,y-124],[x+142,y-100],[x+198,y-52],[x+150,y-104],[x+240,y-104],[x+322,y-88]].forEach((p,i)=>{for(let q=0;q<4;q++)el(g,q%2?'#5f8a3c':'#4a7a34',p[0]-4+q*5,p[1]-1.5,3.4,2)});
 /* contrafforte di mattoni (Stern) a destra */
 poly(g,'#a8553a',[[x+322,y],[x+322,y-60],[x+352,y-60],[x+380,y-10],[x+386,y]]);for(let q=0;q<9;q++)rect(g,'rgba(0,0,0,.14)',x+324+q*0,y-56+q*6,30-q*2,1)});

/* --- Archi trionfali: a=0 Costantino (colonne gialle, tondi di Adriano), a=1 Settimio Severo (rilievi, quadriga) --- */
PR.rmarco=RM((g,x,y,t,a,k)=>{a=a||0;const c=a?'#cdc2a4':'#ddd2b6',cs=a?'#b6ab90':'#c8bc9e',W=250,H=150,l=x-W/2,col=a?'#d6cbb0':'#d4ac44';
 rect(g,c,l,y-H-42,W,H+42);rect(g,'rgba(255,248,225,.2)',l,y-H-42,W*.4,H+42);rect(g,'rgba(40,24,6,.16)',l+W-36,y-H-42,36,H+42);
 for(let q=0;q<9;q++)rect(g,'rgba(110,90,56,'+(.05+hr(q+a)*.06)+')',l+hr(q*3)*(W-44),y-H-30+hr(q*5)*(H-20),16+hr(q)*24,8+hr(q+2)*12);
 rect(g,cs,l-6,y-6,W+12,6);rect(g,cs,l-5,y-H-46,W+10,6);rect(g,cs,l-3,y-H-4,W+6,5);rect(g,'rgba(0,0,0,.14)',l-3,y-H+1,W+6,3);
 rect(g,a?'#a89a76':'#c4b898',x-50,y-H-37,100,29);for(let q=0;q<4;q++)rect(g,'rgba(50,38,18,.5)',x-44+(q%2)*4,y-H-32+q*6,88-(q%2)*14,1.8);
 const di=a?'#41372a':'#2e2418';ar(g,di,x-31,y-6,62,108);ar(g,a?'#a8b8bc':'#a9c0d0',x-24,y-6,48,98);ar(g,'rgba(40,30,16,.34)',x-24,y-6,48,98);rect(g,'rgba(0,0,0,.18)',x-31,y-H+2,62,4);
 [-98,68].forEach(o=>{ar(g,di,x+o,y-6,30,68);ar(g,a?'#a8b8bc':'#a9c0d0',x+o+4,y-6,22,60);ar(g,'rgba(40,30,16,.34)',x+o+4,y-6,22,60)});
 [-112,-50,50,112].forEach(o=>{rect(g,cs,x+o-12,y-20,24,14);colo(g,x+o,y-20,92,10,col,col);rect(g,cs,x+o-11,y-H-2+8,22,7)});
 if(!a){[-81,81].forEach(o=>{dot(g,'#eee5cc',x+o,y-108,12);dot(g,'#b8ad92',x+o,y-108,12.8);dot(g,'#eee5cc',x+o,y-108,10);rect(g,'rgba(80,60,30,.4)',x+o-4,y-112,8,8)});
  [-112,-50,50,112].forEach(o=>{rect(g,'#b8ad92',x+o-7,y-H-30,14,2);rect(g,'#e4d8bc',x+o-4,y-H-26-14,8,22);dot(g,'#e4d8bc',x+o,y-H-44,3.6)})}
 else{[-81,81].forEach(o=>{rect(g,'#bdb298',x+o-23,y-H+2-32,46,30);rect(g,'rgba(60,44,20,.25)',x+o-20,y-H+2-29,40,24);for(let q=0;q<4;q++)rect(g,'rgba(60,44,20,.4)',x+o-18+q*9,y-H+2-27,6,5)});
  const by=y-H-46;for(let q=0;q<4;q++){const hx=x-36+q*20;poly(g,'#7a6a3a',[[hx,by],[hx+3,by-14],[hx+9,by-16],[hx+14,by-8],[hx+17,by]])}rect(g,'#7a6a3a',x-40,by-4,80,3);poly(g,'#7a6a3a',[[x-12,by-4],[x-10,by-26],[x+8,by-26],[x+10,by-4]]);dot(g,'#7a6a3a',x-1,by-30,4)}});

/* --- Foro Romano: a=0 Tempio di Saturno (otto colonne di granito), a=1 Tempio di Vespasiano (tre colonne corinzie) --- */
PR.rmforo=RM((g,x,y,t,a,k)=>{a=a||0;
 if(!a){const gr='#a99487',tr='#d2c3a0';rect(g,tr,x-142,y-8,284,8);rect(g,'#c4b48f',x-136,y-16,272,8);rect(g,'#b8a77f',x-130,y-24,260,8);
  for(let q=0;q<8;q++){const cx=x-105+q*30;colo(g,cx,y-24,96,13,gr,'#cdbfa3');rect(g,'rgba(255,255,255,.1)',cx-5,y-118,2,94)}
  rect(g,tr,x-124,y-150,248,28);rect(g,'rgba(0,0,0,.16)',x-124,y-125,248,3);rect(g,'rgba(255,248,225,.2)',x-124,y-150,248,3);
  txt(g,'SENATVS POPVLVSQVE ROMANVS INCENDIO CONSVMPTVM RESTITVIT',x,y-133,5.6,'#4a3a28');
  for(let q=0;q<5;q++)rect(g,'rgba(255,255,255,.12)',x-120+q*50,y-146,30,2);
  rect(g,'#c4b48f',x-168,y-14,22,14);rect(g,'#d2c3a0',x+150,y-20,26,20);rect(g,'#b8a77f',x+176,y-10,20,10)}
 else{const mr='#e9e0c8';rect(g,'#d2c3a0',x-92,y-14,184,14);rect(g,'#c4b48f',x-84,y-22,168,8);
  [-62,0,62].forEach(o=>{colo(g,x+o,y-22,128,15,mr,'#efe7d2');[-6,0,6].forEach(q=>dot(g,'#d9d0b8',x+o+q,y-156,3));poly(g,'#cdc3a6',[[x+o-9,y-152],[x+o-12,y-160],[x+o+12,y-160],[x+o+9,y-152]])});
  rect(g,'#e2d8bc',x-86,y-190,172,24);rect(g,'rgba(0,0,0,.14)',x-86,y-170,172,3);rect(g,'#d6ccb0',x-86,y-198,172,8);for(let q=0;q<9;q++)rect(g,'#c4b894',x-80+q*19,y-188,11,14);
  rect(g,'#d2c3a0',x+98,y-12,30,12)}});

/* --- rovine con mattoni, rocchi di colonna e un gatto (a = larghezza) --- */
PR.rmrovine=RM((g,x,y,t,a,k)=>{a=a||220;const x0=x-a/2;
 const muro=(mx,mw,mh)=>{rect(g,'#b0623e',mx,y-mh,mw,mh);for(let r=0;r<mh/6;r++){rect(g,'rgba(60,24,10,.28)',mx,y-mh+r*6,mw,1);if(r%4==3)rect(g,'#d8cdae',mx,y-mh+r*6,mw,2.4)}rect(g,'rgba(255,230,180,.16)',mx,y-mh,mw*.22,mh);rect(g,'rgba(0,0,0,.18)',mx+mw*.78,y-mh,mw*.22,mh);for(let q=0;q<mw/9;q++)el(g,q%2?'#5a8a3a':'#4a7a34',mx+q*9+4,y-mh,5,2.5)};
 muro(x0,a*.34,46);muro(x0+a*.7,a*.2,64);
 [[a*.42,0],[a*.5,0]].forEach((p,i)=>{rect(g,'#d9cdb0',x0+p[0],y-16-(i?0:0),24,16);el(g,'#e8dcc0',x0+p[0]+12,y-16,12,3.4);rect(g,'rgba(0,0,0,.14)',x0+p[0]+16,y-16,8,16)});
 rect(g,'#d9cdb0',x0+a*.46,y-30,24,14);el(g,'#e8dcc0',x0+a*.46+12,y-30,12,3.4);
 poly(g,'#cfc3a4',[[x0+a*.58,y],[x0+a*.58+8,y-12],[x0+a*.58+34,y-14],[x0+a*.58+44,y]]);for(let q=0;q<4;q++)dot(g,'#b9ad8e',x0+a*.58+9+q*8,y-8,3);
 gatto(g,x0+a*.46+12,y-30,t,'#d49a4a');
 for(let q=0;q<10;q++){const gx=x0+hr(q*3)*a;for(let s=0;s<3;s++)ln(g,'#4a7a34',1.4,[gx,y,gx+(s-1)*3,y-7-hr(q+s)*5]);if(q%3==0)dot(g,'#d8402a',gx+2,y-10,1.9)}});

/* --- Colonna Traiana: piedistallo, fusto con il fregio a spirale, statua in cima --- */
PR.rmcolonna=RM((g,x,y,t,a,k)=>{const c='#e6dcc2',cs='#cfc4a6';
 rect(g,cs,x-36,y-8,72,8);rect(g,c,x-30,y-62,60,56);rect(g,'rgba(255,248,225,.2)',x-30,y-62,16,56);rect(g,'rgba(40,24,6,.16)',x+16,y-62,14,56);rect(g,cs,x-33,y-66,66,6);
 rect(g,'rgba(80,64,40,.35)',x-20,y-48,40,18);for(let q=0;q<3;q++)rect(g,'rgba(240,230,205,.7)',x-16+q*11,y-45,8,12);
 poly(g,c,[[x-20,y-66],[x-17,y-250],[x+17,y-250],[x+20,y-66]]);rect(g,'rgba(255,248,225,.24)',x-19,y-250,9,184);rect(g,'rgba(40,24,6,.2)',x+8,y-250,10,184);
 for(let q=0;q<22;q++){const yy=y-70-q*8.2,w=20-q*.16;ln(g,'rgba(90,72,44,.42)',1.6,[x-w,yy,x+w,yy-5]);ln(g,'rgba(255,250,230,.4)',1.2,[x-w,yy-2.6,x+w,yy-7.4])}
 rect(g,cs,x-22,y-254,44,6);rect(g,c,x-24,y-262,48,8);rect(g,'#9a9a98',x-24,y-262,48,2);rect(g,'rgba(0,0,0,.18)',x-24,y-256,48,2);
 for(let q=0;q<7;q++)rect(g,'#6a6a68',x-22+q*7,y-262,1.6,8);
 rect(g,'#6b7f6a',x-4,y-290,8,28);dot(g,'#6b7f6a',x,y-294,4.4);ln(g,'#6b7f6a',2.4,[x+3,y-284,x+13,y-296]);rect(g,'#c9a640',x+12,y-300,2,8)});

/* --- pino marittimo (a = altezza) --- */
PR.rmpino=RM((g,x,y,t,h,k)=>{h=h||160;const sw=Math.sin(t*.7+x*.01)*1.4;
 g.strokeStyle=tn('#6a4630');g.lineWidth=6;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+6,y-h*.5,x+3+sw*.4,y-h);g.stroke();
 g.strokeStyle=tn('#7a5238');g.lineWidth=2.6;g.beginPath();g.moveTo(x+3,y-h*.5);g.quadraticCurveTo(x-18,y-h*.66,x-34,y-h*.84);g.moveTo(x+4,y-h*.6);g.quadraticCurveTo(x+22,y-h*.74,x+38,y-h*.88);g.stroke();
 const tp=y-h;[[-34,.84,30,9,'#2f5a2a'],[36,.88,32,9,'#355f2a'],[3,1.02,44,12,'#2a5226'],[-14,.97,34,9,'#3a6a30'],[20,.99,34,9,'#33602c']].forEach(a=>{el(g,a[4],x+a[0]+sw,y-h*a[1]+ (a[1]>.95?h*.0:0),a[2],a[3]);el(g,'rgba(255,230,150,.1)',x+a[0]+sw-6,y-h*a[1]-3,a[2]*.6,a[3]*.4)})});

/* --- nasone: la fontanella di ghisa che a Roma non smette mai di versare acqua --- */
PR.rmnasone=RM((g,x,y,t,a,k)=>{rect(g,'#3b4a3e',x-9,y-8,18,8);rect(g,'#445547',x-6,y-52,12,44);rect(g,'#3b4a3e',x-8,y-56,16,6);poly(g,'#445547',[[x-8,y-56],[x-5,y-64],[x+5,y-64],[x+8,y-56]]);dot(g,'#3b4a3e',x,y-66,3);
 rect(g,'rgba(255,255,255,.18)',x-5,y-50,2.4,40);g.strokeStyle=tn('#445547');g.lineWidth=4.4;g.beginPath();g.moveTo(x+4,y-44);g.quadraticCurveTo(x+16,y-46,x+17,y-34);g.stroke();
 g.strokeStyle='rgba(190,230,255,.85)';g.lineWidth=1.6;g.beginPath();g.moveTo(x+17,y-32);g.lineTo(x+17+Math.sin(t*9)*.6,y-12);g.stroke();
 el(g,'rgba(190,230,255,.55)',x+17,y-8,9,2.4);for(let q=0;q<3;q++)dot(g,'rgba(255,255,255,.7)',x+17+Math.sin(t*6+q*2)*4,y-9-((t*14+q*4)%7),.9);rect(g,'#a8a49a',x+3,y-4,28,4)});

/* --- taxi bianco romano --- */
PR.rmtaxi=RM((g,x,y,t,c,k)=>{c=c||'#f3f1ea';
 poly(g,c,[[x-66,y-18],[x-68,y-44],[x-60,y-50],[x-42,y-52],[x-30,y-74],[x+24,y-74],[x+42,y-52],[x+60,y-48],[x+68,y-18]]);
 poly(g,'#a8d4e8',[[x-30,y-54],[x-24,y-70],[x-2,y-70],[x-2,y-54]]);poly(g,'#a8d4e8',[[x+4,y-54],[x+4,y-70],[x+22,y-70],[x+34,y-54]]);rect(g,c,x-5,y-70,7,17);
 rect(g,'rgba(0,0,0,.14)',x-66,y-30,134,4);rect(g,'#2a2a2e',x-66,y-20,134,7);rect(g,'rgba(255,255,255,.4)',x-28,y-69,3,12);
 rect(g,'#2a2a2e',x-12,y-82,22,9);rect(g,'#f0c020',x-10,y-81,18,6);txt(g,'TAXI',x-1,y-76.6,5,'#2a2a2e');
 rect(g,'#c8a020',x-8,y-44,18,5);txt(g,'ROMA',x+1,y-40,3.6,'#2a2a2e');dot(g,'#ffe9a8',x+64,y-34,3.4);dot(g,'#d83030',x-65,y-34,3);
 [x-40,x+40].forEach(wx=>{dot(g,'#1b1b1f',wx,y-12,12);dot(g,'#bdbdbd',wx,y-12,6);dot(g,'#8a8a8a',wx,y-12,2)})});
})();

(function(){
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,tn=A.tn,txt=A.txt,glow=A.glow,cl=A.cl;
const {colo,gatto,RM,ln}=PR._rm;
const LIT='rgb(255,226,150)';

/* --- Vittoriano / Altare della Patria: marmo bianco, scalinate, colonnato, due propilei con le quadrighe --- */
PR.rmvittoriano=RM((g,x,y,t,a,k)=>{const m='#f1ebdc',m2='#dcd4be',br='#6d7f5c',au='#d9b24a';
 if(k>.2)glow(g,x,y-160,330,'255,236,190',k*.4);
 /* colonnato superiore */
 rect(g,m2,x-176,y-196,352,70);rect(g,'rgba(0,0,0,.2)',x-170,y-262,340,66);
 for(let q=0;q<16;q++)colo(g,x-157+q*21,y-196,66,10,m,'#f6f1e4');
 rect(g,m,x-182,y-280,364,16);rect(g,m2,x-186,y-284,372,5);rect(g,'rgba(0,0,0,.14)',x-182,y-264,364,2.4);for(let q=0;q<9;q++)rect(g,'rgba(0,0,0,.12)',x-170+q*40,y-278,22,9);
 [[-182],[168]].forEach(o=>{rect(g,m,x+o[0],y-306,14,24);rect(g,'#7a8a66',x+o[0]+4,y-322,6,16)});
 /* ali laterali e propilei */
 [-1,1].forEach(s=>{const px=x+s*243;rect(g,m,px-47,y-134,94,108);rect(g,'rgba(0,0,0,.12)',px-47,y-134,94,4);for(let q=0;q<4;q++)rect(g,'rgba(0,0,0,.06)',px-40+q*24,y-120,16,86);
  rect(g,m2,px-45,y-144,90,10);for(let q=0;q<4;q++)colo(g,px-33+q*22,y-144,66,11,m,'#f6f1e4');rect(g,m,px-46,y-226,92,16);rect(g,m2,px-49,y-229,98,4);rect(g,m,px-40,y-244,80,18);
  /* quadriga */
  const qy=y-244;for(let h=0;h<4;h++){const hx=px-30+h*15;poly(g,br,[[hx,qy],[hx+2,qy-16],[hx+8,qy-24],[hx+13,qy-20],[hx+11,qy-14],[hx+13,qy]]);rect(g,au,hx+6,qy-23,3,2)}
  rect(g,br,px-34,qy-6,74,5);poly(g,br,[[px+20,qy-6],[px+26,qy-28],[px+34,qy-28],[px+34,qy-6]]);dot(g,au,px+30,qy-34,3.4);ln(g,au,2,[px+24,qy-26,px+14,qy-40]);ln(g,au,2,[px+30,qy-28,px+44,qy-42])});
 /* corpo centrale e scalinata */
 rect(g,m,x-196,y-130,392,102);rect(g,'rgba(255,248,225,.2)',x-196,y-130,140,102);rect(g,'rgba(40,24,6,.12)',x+130,y-130,66,102);
 for(let q=0;q<8;q++){rect(g,'rgba(0,0,0,.07)',x-190+q*50,y-124,2,92)}
 rect(g,m2,x-276,y-12,552,12);rect(g,m,x-262,y-26,524,14);
 for(let i=0;i<10;i++){const w=96+i*2;rect(g,i%2?'#e6dfcc':'#f6f1e4',x-w,y-26-i*8,w*2,8);rect(g,'rgba(0,0,0,.1)',x-w,y-26-i*8,w*2,1.2)}
 rect(g,m2,x-70,y-110,140,36);rect(g,'#3b3226',x-26,y-134,52,42);ar(g,'#2a2218',x-20,y-90,40,50);poly(g,au,[[x-8,y-92],[x-6,y-116],[x+6,y-116],[x+8,y-92]]);dot(g,au,x,y-122,5.4);
 [-1,1].forEach(s=>{const fx=x+s*54,fy=y-112;rect(g,'#6a6a64',fx-8,fy-6,16,6);const fl=1+Math.sin(t*9+s)*.18;poly(g,'#ff9a2a',[[fx-5,fy-6],[fx,fy-24*fl],[fx+5,fy-6]]);poly(g,'#ffe27a',[[fx-2.4,fy-6],[fx,fy-15*fl],[fx+2.4,fy-6]]);glow(g,fx,fy-12,34,'255,170,60',.5)});
 /* statua equestre di Vittorio Emanuele II */
 rect(g,m,x-34,y-176,68,8);rect(g,m2,x-28,y-172,56,52);rect(g,'rgba(0,0,0,.1)',x+12,y-172,16,52);rect(g,au,x-18,y-160,36,16);rect(g,'#b8902f',x-14,y-156,28,8);
 const hy=y-184;el(g,br,x,hy-4,26,11);[-18,-8,10,20].forEach((o,i)=>rect(g,br,x+o-2,hy,5,14+(i%2)*-4));poly(g,br,[[x+18,hy-8],[x+30,hy-26],[x+38,hy-24],[x+34,hy-8]]);poly(g,br,[[x-24,hy-8],[x-34,hy-2],[x-30,hy+8]]);
 rect(g,br,x-4,hy-30,9,22);dot(g,br,x,hy-34,5);rect(g,au,x-6,hy-40,12,4);ln(g,br,2,[x+4,hy-24,x+22,hy-30]);rect(g,'rgba(255,230,140,.35)',x-20,hy-12,6,2)});

/* --- Palazzo Senatorio sul Campidoglio: scalone, torre con orologio, bandiere --- */
PR.rmcampidoglio=RM((g,x,y,t,a,k)=>{const R='#d9ab86',T='#ece0c3',LT=k>.3;
 [-1,1].forEach(s=>{const wx=x+s*150;rect(g,'#cf9d7a',wx-48,y-104,96,104);rect(g,'rgba(0,0,0,.1)',wx+(s>0?10:-48),y-104,38,104);for(let q=0;q<3;q++){rect(g,T,wx-40+q*30,y-98,6,94);rect(g,LT?LIT:'#3a4658',wx-31+q*30,y-76,15,26);rect(g,T,wx-33+q*30,y-80,19,4)}rect(g,T,wx-50,y-110,100,8)});
 rect(g,R,x-104,y-152,208,152);rect(g,'rgba(255,240,210,.14)',x-104,y-152,70,152);rect(g,'rgba(40,20,6,.14)',x+70,y-152,34,152);
 for(let q=0;q<5;q++)rect(g,T,x-100+q*50,y-152,9,152);rect(g,T,x-106,y-160,212,10);for(let q=0;q<22;q++)rect(g,T,x-100+q*9.6,y-176,4,16);rect(g,T,x-106,y-178,212,3);
 for(let q=0;q<4;q++){const sx=x-80+q*52;rect(g,'#c8bda0',sx,y-198,4,22);dot(g,'#c8bda0',sx+2,y-201,3)}
 [-1,1].forEach(s=>{for(let q=0;q<2;q++){const wx=x+s*(36+q*40);ar(g,'#2a3448',wx-8,y-84,16,34);rect(g,LT?LIT:'#4a5a72',wx-6,y-110,12,22)}});
 poly(g,T,[[x-98,y],[x-24,y-52],[x-14,y-52],[x-14,y-60],[x-98,y-8]]);poly(g,T,[[x+98,y],[x+24,y-52],[x+14,y-52],[x+14,y-60],[x+98,y-8]]);
 for(let q=0;q<7;q++){ln(g,'rgba(0,0,0,.14)',1,[x-92+q*11,y-q*3.6,x-92+q*11,y-8-q*3.6]);ln(g,'rgba(0,0,0,.14)',1,[x+92-q*11,y-q*3.6,x+92-q*11,y-8-q*3.6])}
 rect(g,'#c9bfa3',x-26,y-62,52,62);ar(g,'#3a4a50',x-12,y-6,24,40);dot(g,'#e8f0f4',x,y-48,7);rect(g,'#7a8a96',x-3,y-40,6,6);for(let q=0;q<3;q++)ln(g,'rgba(190,230,255,.8)',1.4,[x-8+q*8,y-30,x-8+q*8+Math.sin(t*5+q)*.4,y-12]);
 /* torre */
 rect(g,R,x-24,y-258,48,106);rect(g,'rgba(0,0,0,.12)',x+8,y-258,16,106);rect(g,T,x-27,y-262,54,6);rect(g,T,x-24,y-232,48,3);
 ar(g,'#2e2820',x-8,y-196,16,34);dot(g,'#f4efe0',x,y-222,9);dot(g,'#3a3a3a',x,y-222,1.6);ln(g,'#3a3a3a',1.2,[x,y-222,x+4,y-226]);ln(g,'#3a3a3a',1.2,[x,y-222,x-2,y-215]);
 rect(g,T,x-16,y-286,32,26);ar(g,'#2e2820',x-6,y-262,12,18);poly(g,'#7a8a86',[[x-18,y-286],[x,y-304],[x+18,y-286]]);rect(g,'#6a4a2a',x-1,y-318,2,16);
 const w=Math.sin(t*3)*2;poly(g,'#2f9a4a',[[x+1,y-318],[x+11,y-316+w],[x+11,y-310+w],[x+1,y-310]]);poly(g,'#f4f4ee',[[x+11,y-316+w],[x+21,y-315+w*1.4],[x+21,y-309+w*1.4],[x+11,y-310+w]]);poly(g,'#d8302a',[[x+21,y-315+w*1.4],[x+31,y-316+w*1.8],[x+31,y-310+w*1.8],[x+21,y-309+w*1.4]])});

/* --- statua equestre di Marco Aurelio sul piedistallo di Michelangelo --- */
PR.rmmarco=RM((g,x,y,t,a,k)=>{const br='#7a6a34',au='#d9b24a';rect(g,'#cfc4a6',x-30,y-6,60,6);rect(g,'#ddd2b6',x-24,y-44,48,38);rect(g,'rgba(0,0,0,.12)',x+10,y-44,14,38);rect(g,'#cfc4a6',x-27,y-50,54,7);rect(g,'rgba(70,50,20,.4)',x-16,y-36,32,14);
 const hy=y-68;el(g,br,x,hy-4,22,10);[-16,-6,8,18].forEach((o,i)=>rect(g,br,x+o-2,hy,4.4,i==1?10:14));poly(g,br,[[x+14,hy-8],[x+24,hy-24],[x+32,hy-22],[x+28,hy-7]]);poly(g,br,[[x-20,hy-8],[x-28,hy-1],[x-25,hy+6]]);
 rect(g,br,x-4,hy-30,8,22);dot(g,br,x,hy-34,5);rect(g,'#5a4a22',x-5,hy-39,10,3);ln(g,br,2.4,[x+4,hy-26,x+20,hy-34]);rect(g,au,x-20,hy-12,5,2);rect(g,au,x+18,hy-26,6,2)});

/* --- Fontana di Trevi: Palazzo Poli, l'arco trionfale con Oceano, la scogliera, l'acqua --- */
PR.rmtrevi=RM((g,x,y,t,a,k)=>{const O='#e3cf9e',T='#f0e8d2',T2='#d9cfb4',LT=k>.3;
 if(k>.1)glow(g,x,y-110,300,'255,236,190',k*.55);
 [-1,1].forEach(s=>{const wx=x+s*155;rect(g,O,wx-45,y-206,90,206);rect(g,'rgba(0,0,0,.1)',wx+(s>0?15:-45),y-206,30,206);rect(g,T2,wx-48,y-212,96,8);
  for(let r=0;r<3;r++)for(let q=0;q<2;q++){const wy=y-190+r*56,wx2=wx-30+q*40;rect(g,T,wx2-2,wy-2,24,40);rect(g,LT?LIT:'#34445a',wx2,wy,20,36);if(q==r%2){rect(g,'#4a6a4a',wx2-9,wy,8,36)}}});
 rect(g,T,x-110,y-206,220,206);rect(g,'rgba(255,248,225,.2)',x-110,y-206,70,206);rect(g,'rgba(40,24,6,.1)',x+70,y-206,40,206);
 rect(g,T2,x-114,y-214,228,10);rect(g,'rgba(0,0,0,.12)',x-110,y-204,220,3);
 rect(g,'#e6ddc4',x-80,y-240,160,26);rect(g,'rgba(0,0,0,.1)',x-80,y-216,160,2.4);for(let q=0;q<4;q++){const sx=x-62+q*40;rect(g,'#f6f1e4',sx,y-266,10,26);dot(g,'#f6f1e4',sx+5,y-270,4.4)}
 rect(g,'#cfc4a6',x-24,y-258,48,18);dot(g,'#9a8a5a',x,y-248,5);
 /* nicchie e colonne */
 ar(g,'#6a6050',x-28,y-48,56,124);ar(g,'#8f8a7c',x-24,y-48,48,116);ar(g,'rgba(30,24,12,.25)',x-24,y-48,48,116);
 [-1,1].forEach(s=>{ar(g,'#6a6050',x+s*66-11,y-48,22,76);ar(g,'#8f8a7c',x+s*66-9,y-48,18,70);rect(g,'#f6f1e4',x+s*66-4,y-100,8,34);dot(g,'#f6f1e4',x+s*66,y-104,4)});
 [-96,-36,36,96].forEach(o=>{colo(g,x+o,y-36,138,13,T,'#f8f3e6')});
 rect(g,T,x-110,y-186,220,10);rect(g,T2,x-114,y-178,228,6);
 /* Oceano sulla conchiglia */
 poly(g,'#cfc4a6',[[x-22,y-52],[x-20,y-84],[x-10,y-98],[x,y-102],[x+10,y-98],[x+20,y-84],[x+22,y-52]]);for(let q=-2;q<=2;q++)ln(g,'rgba(80,60,30,.35)',1,[x,y-100,x+q*9,y-54]);
 rect(g,'#faf6ea',x-6,y-134,12,40);dot(g,'#faf6ea',x,y-139,5.4);ln(g,'#faf6ea',3.4,[x+4,y-130,x+16,y-142]);ln(g,'#faf6ea',3.4,[x-4,y-128,x-12,y-118]);rect(g,'#f0eadb',x-10,y-100,20,30);
 /* scogliera */
 poly(g,'#cbbf9f',[[x-132,y],[x-120,y-26],[x-96,y-34],[x-74,y-48],[x-44,y-52],[x-22,y-60],[x+22,y-60],[x+44,y-52],[x+74,y-48],[x+96,y-34],[x+120,y-26],[x+132,y]]);
 for(let q=0;q<14;q++){const rx=x-120+q*18;poly(g,q%2?'#b9ad8e':'#d6caa8',[[rx,y],[rx+4,y-20-hr(q)*20],[rx+14,y-14-hr(q+3)*18],[rx+18,y]])}
 [-1,1].forEach(s=>{const hx=x+s*58,hy=y-34;poly(g,'#faf6ea',[[hx-14,hy],[hx-10,hy-18],[hx+4,hy-26],[hx+14,hy-20],[hx+10,hy-8],[hx+14,hy]]);dot(g,'#faf6ea',hx+s*8,hy-26,5);rect(g,'#faf6ea',hx-4,hy-22,6,12)});
 for(let q=0;q<7;q++){const wx=x-96+q*32;ln(g,'rgba(210,245,255,.75)',2,[wx,y-30,wx+Math.sin(t*3+q)*2,y-6])}
 /* vasca */
 rect(g,'#6cc8d8',x-216,y-22,432,16);rect(g,'rgba(255,255,255,.2)',x-216,y-22,432,3);for(let q=0;q<16;q++)rect(g,'rgba(255,255,255,'+(.25+.25*Math.sin(t*3+q*1.7))+')',x-208+q*26+Math.sin(t+q)*5,y-17+(q%3)*4,13,1.6);
 rect(g,'#e6ddc4',x-222,y-26,444,6);rect(g,'#cfc4a6',x-222,y-8,444,8);for(let q=0;q<7;q++)dot(g,'#e8c850',x-120+q*40+(q%2)*9,y-13+(q%3)*2,1.4)});

/* --- Pantheon: portico di otto colonne di granito, frontone, rotonda e cupola a gradini --- */
PR.rmpantheon=RM((g,x,y,t,a,k)=>{const BR='#c0946a',LE='#8f8c88',T='#dccfae';
 if(k>.2)glow(g,x,y-150,280,'255,225,160',k*.35);
 const dm=[[x-141,y-142]];g.fillStyle=tn(LE);g.beginPath();g.ellipse(x,y-142,141,118,0,Math.PI,0);g.fill();
 for(let r=1;r<=5;r++){g.strokeStyle=tn(r%2?'#a09d98':'#7a7874');g.lineWidth=2.4;g.beginPath();g.ellipse(x,y-142,141*(1-r*.15),118*(1-r*.15),0,Math.PI,0);g.stroke()}
 g.fillStyle='rgba(255,240,200,.14)';g.beginPath();g.ellipse(x,y-142,141,118,0,Math.PI,Math.PI*1.45);g.lineTo(x,y-142);g.fill();
 rect(g,BR,x-141,y-142,282,142);rect(g,'rgba(255,230,180,.13)',x-141,y-142,90,142);rect(g,'rgba(40,20,6,.18)',x+80,y-142,61,142);
 for(let q=0;q<5;q++)rect(g,'rgba(60,30,10,.2)',x-141,y-142+q*32,282,2);rect(g,T,x-145,y-148,290,8);rect(g,'rgba(0,0,0,.14)',x-141,y-140,282,3);
 for(let q=0;q<7;q++)ar(g,'rgba(50,30,16,.35)',x-128+q*38,y-96,16,26);
 rect(g,'#cbbd98',x-122,y-170,244,26);
 poly(g,T,[[x-128,y-110],[x-118,y-150],[x+118,y-150],[x+128,y-110]]);
 rect(g,'#c8b88f',x-124,y-106,248,22);
 poly(g,'#d6c8a2',[[x-122,y-112],[x,y-168],[x+122,y-112]]);poly(g,'#c4b68e',[[x-100,y-114],[x,y-158],[x+100,y-114]]);poly(g,'rgba(0,0,0,.08)',[[x-100,y-114],[x,y-158],[x,y-114]]);
 rect(g,T,x-126,y-112,252,22);rect(g,'rgba(0,0,0,.14)',x-126,y-91,252,2.4);txt(g,'M·AGRIPPA·L·F·COS·TERTIVM·FECIT',x,y-96,7.2,'#4a3a28');
 rect(g,'#2e261c',x-112,y-90,224,78);ar(g,'#6a4a22',x-15,y-12,30,62);rect(g,'rgba(255,220,130,.5)',x-9,y-60,3,46);for(let q=0;q<4;q++)dot(g,'#c9a640',x-9+q*6,y-34,1.2);
 if(k>.25){rect(g,'rgba(255,214,130,'+k*.34+')',x-112,y-90,224,78)}
 for(let q=0;q<8;q++)colo(g,x-105+q*30,y-12,78,12.4,'#8d8a90','#e0d4b4');
 rect(g,T,x-128,y-12,256,6);rect(g,'#cfc3a2',x-134,y-6,268,6)});

/* --- obelisco con fontana (a=0 la Rotonda del Pantheon, a=1 piazza San Pietro) --- */
PR.rmobelisco=RM((g,x,y,t,a,k)=>{const H=a?196:122,w=a?13:9,og=a?'#b86a50':'#b9694e',bw=a?64:56;
 rect(g,'#d4c9ac',x-bw,y-10,bw*2,10);rect(g,'#e2d8bc',x-bw+8,y-18,bw*2-16,8);el(g,'#7ac8dc',x,y-18,bw-12,5);
 for(let q=0;q<6;q++){const jx=x-34+q*14;ln(g,'rgba(210,245,255,.8)',1.6,[x,y-36-(q%3)*6,jx,y-18+Math.sin(t*4+q)*.6])}
 rect(g,'#cfc3a2',x-18,y-46,36,30);rect(g,'rgba(0,0,0,.12)',x+4,y-46,14,30);if(a)for(let q=0;q<2;q++){el(g,'#a89a72',x-26+q*52,y-26,12,9);dot(g,'#a89a72',x-26+q*52+(q?5:-5),y-34,5)}
 poly(g,og,[[x-w,y-46],[x-w+2.4,y-46-H],[x+w-2.4,y-46-H],[x+w,y-46]]);rect(g,'rgba(255,230,190,.2)',x-w,y-46-H,w*.6,H);rect(g,'rgba(40,10,6,.25)',x+w*.3,y-46-H,w*.7,H);
 for(let q=0;q<(a?10:6);q++){rect(g,'rgba(60,20,10,.35)',x-w*.4,y-60-q*H/(a?10.5:6.5),w*.8,3);rect(g,'rgba(60,20,10,.28)',x-w*.15,y-52-q*H/(a?10.5:6.5),2,6)}
 poly(g,og,[[x-w+2.4,y-46-H],[x,y-46-H-(a?20:14)],[x+w-2.4,y-46-H]]);
 if(a){rect(g,'#d9b24a',x-1.6,y-46-H-34,3.2,16);rect(g,'#d9b24a',x-6,y-46-H-30,12,2.6);dot(g,'#d9b24a',x,y-46-H-20,2.6)}else{dot(g,'#d9b24a',x,y-46-H-17,2.4)}});
})();

(function(){
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,tn=A.tn,txt=A.txt,glow=A.glow,cl=A.cl;
const {colo,gatto,RM,ln}=PR._rm;
const LIT='rgb(255,226,150)';
const dome=(g,c,x,y,rx,ry,rib)=>{g.fillStyle=tn(c);g.beginPath();g.ellipse(x,y,rx,ry,0,Math.PI,0);g.fill();for(let q=-3;q<=3;q++){g.strokeStyle='rgba(255,250,235,.45)';g.lineWidth=1.6;g.beginPath();g.moveTo(x+q*rx/4,y);g.quadraticCurveTo(x+q*rx/4*.9,y-ry*.7,x+q*rx/16,y-ry*.98);g.stroke()}
 g.fillStyle='rgba(255,240,200,.14)';g.beginPath();g.ellipse(x,y,rx,ry,0,Math.PI,Math.PI*1.5);g.lineTo(x,y);g.fill()};

/* --- Sant'Agnese in Agone: facciata concava del Borromini, cupola alta e due campanili --- */
PR.rmnavona=RM((g,x,y,t,a,k)=>{const T='#e6d8ba',T2='#d3c4a2',LT=k>.3;
 if(k>.1)glow(g,x,y-150,260,'255,226,160',k*.4);
 rect(g,T,x-46,y-250,92,110);rect(g,'rgba(0,0,0,.12)',x+22,y-250,24,110);for(let q=0;q<8;q++)ar(g,LT?LIT:'#4a5668',x-36+q*10.4,y-182,6,28);for(let q=0;q<9;q++)rect(g,'#f2e8d0',x-44+q*10.4,y-250,3,72);
 rect(g,T2,x-50,y-254,100,6);dome(g,'#8b9b94',x,y-256,44,64,1);rect(g,T,x-9,y-324,18,26);for(let q=0;q<3;q++)ar(g,'#3a3a40',x-6+q*5,y-300,3.4,14);poly(g,'#8b9b94',[[x-11,y-324],[x,y-340],[x+11,y-324]]);rect(g,'#d9b24a',x-1,y-352,2,14);rect(g,'#d9b24a',x-4,y-348,8,2);
 [-1,1].forEach(s=>{const tx=x+s*102;rect(g,T,tx-30,y-178,60,178);rect(g,'rgba(0,0,0,.1)',tx+(s>0?6:-30),y-178,24,178);rect(g,T2,tx-33,y-184,66,8);
  rect(g,T,tx-22,y-236,44,58);rect(g,T2,tx-25,y-240,50,6);ar(g,'#2e2a26',tx-8,y-186,16,34);dot(g,'#f4efe0',tx,y-208,7);dome(g,'#8b9b94',tx,y-240,22,32,0);rect(g,'#d9b24a',tx-1,y-286,2,12)});
 poly(g,T,[[x-84,y],[x-84,y-130],[x-30,y-146],[x+30,y-146],[x+84,y-130],[x+84,y]]);rect(g,'rgba(255,248,225,.18)',x-84,y-130,50,130);rect(g,'rgba(40,24,6,.1)',x+40,y-146,44,146);
 for(let q=0;q<4;q++)colo(g,x-45+q*30,y-6,102,11,'#f2e8d0','#f8f1e0');rect(g,T2,x-62,y-118,124,6);poly(g,'#efe4c8',[[x-52,y-116],[x,y-146],[x+52,y-116]]);poly(g,T2,[[x-44,y-118],[x,y-140],[x+44,y-118]]);dot(g,'#c9a640',x,y-124,4);
 ar(g,'#3a2e22',x-14,y-6,28,70);rect(g,'rgba(255,220,130,'+k*.4+')',x-14,y-62,28,56);for(let q=0;q<2;q++){ar(g,'#6a604f',x-54+q*98,y-30,16,40);ar(g,'#3a2e22',x-51+q*98,y-33,10,34)}
 rect(g,T2,x-86,y-6,172,6)});

/* --- Fontana dei Quattro Fiumi di Bernini: scoglio, quattro giganti, obelisco con la colomba --- */
PR.rmquattrofiumi=RM((g,x,y,t,a,k)=>{const T='#e6dcc2',MA='#f0eadb';
 el(g,'#d4c9ac',x,y-4,112,12);el(g,'#7ac8dc',x,y-8,100,9);rect(g,'#d4c9ac',x-118,y-8,236,8);
 poly(g,'#cbbf9f',[[x-70,y-8],[x-56,y-46],[x-32,y-66],[x-10,y-76],[x+10,y-76],[x+32,y-66],[x+56,y-46],[x+70,y-8]]);
 ar(g,'#6a604c',x-16,y-8,32,44);for(let q=0;q<6;q++)poly(g,q%2?'#b9ad8e':'#d9cdae',[[x-62+q*22,y-10],[x-58+q*22,y-30-hr(q)*18],[x-48+q*22,y-26-hr(q+3)*16],[x-44+q*22,y-10]]);
 [[-1,-52,'#faf6ea'],[1,48,'#f6f0e0']].forEach(f=>{const fx=x+f[1],fy=y-36;poly(g,f[2],[[fx-14,fy+6],[fx-10,fy-10],[fx+6,fy-14],[fx+16,fy-6],[fx+14,fy+6]]);dot(g,f[2],fx+f[0]*8,fy-18,5.4);ln(g,f[2],4,[fx-f[0]*6,fy-8,fx-f[0]*14,fy-24])});
 [[-1,-30],[1,26]].forEach(f=>{const fx=x+f[1],fy=y-56;poly(g,'#f4eedd',[[fx-12,fy+6],[fx-8,fy-8],[fx+6,fy-10],[fx+14,fy-2],[fx+12,fy+6]]);dot(g,'#f4eedd',fx+f[0]*7,fy-15,5);ln(g,'#f4eedd',3.6,[fx,fy-6,fx+f[0]*10,fy-22])});
 el(g,'#6a8a48',x+62,y-60,12,8);ln(g,'#6a4a2a',2.6,[x+62,y-54,x+60,y-82]);for(let q=0;q<5;q++)ln(g,'#4a7a34',2,[x+60,y-82,x+60+(q-2)*8,y-76+Math.abs(q-2)*3]);
 el(g,'#c9b98e',x-60,y-62,13,8);poly(g,'#c9b98e',[[x-72,y-62],[x-74,y-72],[x-64,y-68]]);
 rect(g,'#cfc3a2',x-12,y-96,24,22);poly(g,'#b9694e',[[x-8,y-96],[x-5.4,y-206],[x+5.4,y-206],[x+8,y-96]]);rect(g,'rgba(255,230,190,.2)',x-8,y-206,5,110);rect(g,'rgba(40,10,6,.26)',x+2,y-206,6,110);
 for(let q=0;q<7;q++)rect(g,'rgba(60,20,10,.34)',x-3,y-108-q*14,6,3);poly(g,'#b9694e',[[x-5.4,y-206],[x,y-220],[x+5.4,y-206]]);
 el(g,'#d9b24a',x,y-226,5,3);poly(g,'#d9b24a',[[x-5,y-226],[x-9,y-232],[x-3,y-229]]);poly(g,'#d9b24a',[[x+5,y-226],[x+9,y-232],[x+3,y-229]]);dot(g,'#d9b24a',x+4,y-229,2);
 for(let q=0;q<9;q++){const jx=x-70+q*17.5;ln(g,'rgba(210,245,255,.8)',1.6,[x-30+q*7.5,y-32-(q%3)*4,jx,y-10+Math.sin(t*4+q)*.5])}});

/* --- angelo del Ponte Sant'Angelo su piedistallo (a = quale simbolo della Passione tiene) --- */
PR.rmangelo=RM((g,x,y,t,a,k)=>{a=a||0;const M='#f1ebdc',sw=Math.sin(t*.8+a)*.8;if(k>.15)glow(g,x,y-90,70,'255,226,160',k*.45);
 rect(g,'#d4c9ac',x-18,y-6,36,6);rect(g,'#e2d8bc',x-14,y-46,28,40);rect(g,'rgba(0,0,0,.12)',x+4,y-46,10,40);rect(g,'#d4c9ac',x-17,y-50,34,5);
 poly(g,M,[[x-9,y-50],[x-12,y-96],[x-4,y-112],[x+4,y-112],[x+11,y-96],[x+9,y-50]]);dot(g,M,x,y-118,5.4);
 poly(g,'#e6dfcc',[[x-4,y-108],[x-34,y-132+sw],[x-30,y-96],[x-8,y-90]]);poly(g,'#e6dfcc',[[x+4,y-108],[x+34,y-134+sw],[x+30,y-96],[x+8,y-90]]);
 for(let q=0;q<4;q++){ln(g,'rgba(120,100,70,.25)',1,[x-8,y-100+q*3,x-30,y-122+q*5+sw]);ln(g,'rgba(120,100,70,.25)',1,[x+8,y-100+q*3,x+30,y-122+q*5+sw])}
 ln(g,M,4,[x+6,y-100,x+18,y-112]);
 if(a%5==0){rect(g,'#c9a56a',x+16,y-150,4,46);rect(g,'#c9a56a',x+9,y-140,18,4)}
 else if(a%5==1){g.strokeStyle=tn('#6a4a2a');g.lineWidth=2.4;g.beginPath();g.arc(x+18,y-118,8,0,7);g.stroke();for(let q=0;q<6;q++)ln(g,'#4a6a3a',1.4,[x+18+Math.cos(q)*8,y-118+Math.sin(q)*8,x+18+Math.cos(q)*13,y-118+Math.sin(q)*13])}
 else if(a%5==2){rect(g,'#d8d0b8',x+13,y-142,10,40);rect(g,'#c9bd9f',x+11,y-144,14,4)}
 else if(a%5==3){ln(g,'#6a4a2a',2.4,[x+14,y-100,x+26,y-146]);for(let q=0;q<3;q++)ln(g,'#7a5a3a',1.4,[x+26,y-146,x+28+q*5,y-130+q*3])}
 else{rect(g,'#f4efe0',x+8,y-134,18,22);rect(g,'rgba(120,70,40,.4)',x+11,y-130,12,12)}});

/* --- Castel Sant'Angelo: bastioni, grande tamburo e angelo di bronzo in cima --- */
PR.rmcastello=RM((g,x,y,t,a,k)=>{const MU='#b9784f',MU2='#a0643f',TV='#c9b48e',LT=k>.25;
 if(k>.1)glow(g,x,y-130,340,'255,200,130',k*.5);
 /* tamburo */
 rect(g,'#bfa57e',x-110,y-190,220,130);rect(g,'rgba(255,240,210,.14)',x-110,y-190,70,130);rect(g,'rgba(30,14,4,.2)',x+50,y-190,60,130);
 for(let q=0;q<4;q++)rect(g,'rgba(60,40,20,.2)',x-110,y-76-q*34,220,2);
 for(let q=0;q<9;q++){rect(g,'#2e2a26',x-98+q*24,y-170,10,22);if(LT)rect(g,LIT,x-97+q*24,y-169,8,20);rect(g,'#3a3430',x-98+q*24,y-124,10,20)}
 rect(g,TV,x-114,y-198,228,10);for(let q=0;q<18;q++)rect(g,TV,x-112+q*13,y-208,8,10);
 /* piano superiore e angelo */
 rect(g,'#c4ab84',x-66,y-242,132,36);rect(g,'rgba(0,0,0,.14)',x+30,y-242,36,36);for(let q=0;q<7;q++){ar(g,LT?LIT:'#3a3430',x-56+q*17,y-210,8,22)}
 rect(g,TV,x-70,y-248,140,8);rect(g,'#b0987a',x-34,y-278,68,30);ar(g,'#3a3430',x-8,y-250,16,28);rect(g,TV,x-38,y-282,76,6);
 const aw=Math.sin(t*1.2)*1.2;rect(g,'#6a5a30',x-4,y-310,8,28);dot(g,'#6a5a30',x,y-314,4.4);poly(g,'#6a5a30',[[x-3,y-306],[x-26,y-324+aw],[x-20,y-298],[x-3,y-294]]);poly(g,'#6a5a30',[[x+3,y-306],[x+26,y-322+aw],[x+20,y-298],[x+3,y-294]]);ln(g,'#c9a640',2,[x+4,y-306,x+14,y-338]);
 /* mura e bastioni */
 rect(g,MU,x-190,y-76,380,76);rect(g,'rgba(255,240,210,.12)',x-190,y-76,110,76);rect(g,'rgba(30,14,4,.2)',x+110,y-76,80,76);
 for(let r=0;r<12;r++)rect(g,'rgba(60,24,10,.18)',x-190,y-70+r*6,380,1);
 for(let q=0;q<32;q++)rect(g,MU2,x-186+q*12,y-88,7,12);rect(g,TV,x-192,y-82,384,7);
 for(let q=0;q<9;q++){ar(g,'#2e2a26',x-170+q*40,y,12,34);}
 [-1,1].forEach(s=>{const bx=x+s*190;rect(g,MU2,bx-24,y-104,48,104);rect(g,'rgba(0,0,0,.14)',bx+(s>0?6:-24),y-104,18,104);rect(g,TV,bx-27,y-110,54,8);for(let q=0;q<5;q++)rect(g,MU2,bx-26+q*11,y-120,7,10);ar(g,LT?LIT:'#2e2a26',bx-5,y-60,10,22)});
 ar(g,'#2e2a26',x-18,y,36,56);rect(g,'#7a7468',x-60,y-6,120,6)});

/* --- Passetto di Borgo: il corridoio merlato su archi che unisce il castello al Vaticano (a = larghezza) --- */
PR.rmpassetto=RM((g,x,y,t,a,k)=>{a=a||460;const x0=x-a/2,LT=k>.3;rect(g,'#b78a62',x0,y-92,a,92);rect(g,'rgba(255,240,210,.1)',x0,y-92,a,18);rect(g,'rgba(0,0,0,.14)',x0,y-26,a,26);
 for(let q=0;q<a/12;q++)rect(g,'#a67a52',x0+q*12+1,y-104,7,12);rect(g,'#c9b48e',x0-2,y-96,a+4,6);
 for(let q=0;q<a/44;q++){ar(g,'#35291c',x0+6+q*44,y,24,48);rect(g,'rgba(255,255,255,.1)',x0+7+q*44,y-44,3,40);if(q%2)rect(g,LT?LIT:'#2e2a26',x0+16+q*44,y-82,7,12)}});

/* --- facciata e cupola di San Pietro (la cupola è molto più alta e arretrata) --- */
PR.rmsanpietro=RM((g,x,y,t,a,k)=>{const T='#e9dcbd',T2='#d4c6a2',LT=k>.3;
 if(k>.1){glow(g,x,y-200,380,'255,214,140',k*.6);glow(g,x,y-70,300,'255,226,170',k*.4)}
 /* cupola */
 rect(g,'#d8caa6',x-82,y-232,164,106);rect(g,'rgba(0,0,0,.1)',x+40,y-232,42,106);for(let q=0;q<8;q++){colo(g,x-70+q*20,y-134,64,7,'#f2e8d0','#f8f1e0');ar(g,LT?LIT:'#3a3a40',x-67+q*20,y-176,6,22)}rect(g,T2,x-86,y-238,172,8);
 dome(g,'#b4ab92',x,y-236,80,92,1);for(let q=0;q<9;q++){g.strokeStyle='rgba(255,252,240,.5)';g.lineWidth=1.8;g.beginPath();g.moveTo(x+(q-4)*18,y-236);g.quadraticCurveTo(x+(q-4)*15,y-290,x+(q-4)*3,y-326);g.stroke()}
 rect(g,T,x-13,y-345,26,22);for(let q=0;q<4;q++)ar(g,'#3a3a40',x-9+q*6,y-326,3.4,14);dome(g,'#b4ab92',x,y-346,15,18,0);rect(g,'#d9b24a',x-1.4,y-380,2.8,22);rect(g,'#d9b24a',x-6,y-374,12,2.6);
 [-1,1].forEach(s=>{const dx=x+s*118;rect(g,T2,dx-18,y-196,36,30);dome(g,'#a49b82',dx,y-196,18,26,0)});
 /* facciata */
 rect(g,T,x-210,y-142,420,142);rect(g,'rgba(255,248,225,.2)',x-210,y-142,130,142);rect(g,'rgba(40,24,6,.12)',x+130,y-142,80,142);
 rect(g,T2,x-214,y-152,428,10);rect(g,'#f2e8d0',x-214,y-168,428,16);rect(g,'rgba(0,0,0,.14)',x-210,y-140,420,3);for(let q=0;q<13;q++){const sx=x-192+q*32;rect(g,'#f8f1e0',sx,y-186,8,18);dot(g,'#f8f1e0',sx+4,y-190,3.6)}
 rect(g,T2,x-214,y-170,428,3);
 for(let q=0;q<9;q++){const cx=x-176+q*44;ar(g,'#3a3226',cx-9,y-16,18,56);if(LT)rect(g,'rgba(255,214,130,'+k*.35+')',cx-9,y-58,18,42);rect(g,T2,cx-12,y-60,24,4)}
 for(let q=0;q<5;q++)ar(g,'#3a3226',x-168+q*84-8+(q>1?0:0),y-92,16,30);
 for(let q=0;q<10;q++)colo(g,x-198+q*44,y-6,128,13,'#f4ecd6','#fbf5e6');
 rect(g,T2,x-216,y-6,432,6);
 poly(g,T,[[x-42,y-168],[x,y-198],[x+42,y-168]]);rect(g,T2,x-42,y-170,84,4);ar(g,'#3a3226',x-12,y-132,24,34);
 for(let q=0;q<3;q++)rect(g,'#cfc3a2',x-220+q*0,y-4,0,0);rect(g,'#cfc3a2',x-230,y-2,460,2)});

/* --- colonnato del Bernini (a = larghezza): due file di colonne, trabeazione e statue di santi --- */
PR.rmcolonnato=RM((g,x,y,t,a,k)=>{a=a||520;const x0=x-a/2,T='#e0d3b2',LT=k>.3;
 if(k>.1)glow(g,x,y-60,a*.5,'255,214,140',k*.35);
 rect(g,'rgba(40,30,16,.5)',x0,y-98,a,92);
 for(let q=0;q<a/30;q++)colo(g,x0+14+q*30,y-4,80,11,'#bfae8a','#d2c4a0');
 for(let q=0;q<a/30;q++)colo(g,x0+22+q*30,y,92,13,T,'#f2e8d0');
 rect(g,'#d2c4a0',x0,y-104,a,16);rect(g,'rgba(0,0,0,.14)',x0,y-90,a,3);rect(g,T,x0-2,y-122,a+4,18);
 for(let q=0;q<a/30;q++){const sx=x0+14+q*30;rect(g,'#f2e8d0',sx,y-124,3.4,0);}
 for(let q=0;q<a/60;q++){const sx=x0+26+q*60;rect(g,'#f6f0e0',sx,y-150,8,28);dot(g,'#f6f0e0',sx+4,y-154,3.6);ln(g,'#f6f0e0',2.2,[sx-3,y-142,sx-8,y-134])}});
})();


/* ---------- elementi per Milano · Dalla Darsena a Porta Nuova (mondi/milano.js) ---------- */
/* Nomi che iniziano per "mi". Hanno la loro luce (nf di Milano): la giornata scorre da sinistra a destra, dall'alba alla notte,
   e usano la variabile globale AVCAM come gli altri mondi "lunghi". Non toccano nulla di quanto esiste prima di questo blocco. */
(function(){
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,pa=A.pa,tn=A.tn,txt=A.txt,glow=A.glow,cl=A.cl;
const {colo,ln}=PR._rm;
const LIT='rgb(255,226,150)';
/* luce di Milano: [posizione nel mondo, buio da 0 (giorno) a 1 (notte)] */
const NF=[[0,0],[5900,0],[6600,.1],[7550,.3],[8450,.55],[9250,.68],[9900,.8],[11000,.94],[11600,1]];
const nf=wx=>{if(wx<=NF[0][0])return NF[0][1];for(let i=1;i<NF.length;i++)if(wx<=NF[i][0]){const a=NF[i-1],b=NF[i];return a[1]+(b[1]-a[1])*(wx-a[0])/(b[0]-a[0])}return 1};
const MI=f=>(g,x,y,t,a)=>{A.setDK(nf(x+AVCAM));f(g,x,y,t,a,A.getDK())};
/* riusa oggetti già esistenti (lampioni, targhe, alberi...) con la luce di Milano */
const MW=n=>(g,x,y,t,a)=>{const d=nf(x+AVCAM),sv=AVCAM;AVCAM=6700+2400*d-x;try{PR[n](g,x,y,t,a)}finally{AVCAM=sv}};
[['milamp','avlamp'],['mitarga','avtarga'],['mibici','avbici'],['mialbero','avalbero'],['mipalma','avpalma'],['mitavolo','avtavolo'],['miedicola','avedicola'],['migru','avgru'],['mipino','rmpino']].forEach(p=>PR[p[0]]=MW(p[1]));
const bk=(g,c,x,y,w,h,s)=>{rect(g,c,x,y,w,h);for(let r=0;r<h/7;r++)rect(g,'rgba(50,16,6,.15)',x,y+r*7+6,w,1);for(let q=0;q<w*h/900;q++)rect(g,'rgba(40,12,4,'+(.04+hr(q+s)*.07)+')',x+hr(q*3+s)*(w-10),y+hr(q*5+s)*(h-6),6+hr(q+1)*12,4)};
const merl=(g,c,x,y,w,n,mh)=>{const s=w/(n*2-1);for(let i=0;i<n;i++)rect(g,c,x+i*2*s,y-mh,s,mh)};
const lit=(k,i)=>k>.3&&hr(i)>.35;
PR._mi={nf,MI,LIT,bk,merl};

/* --- Darsena: acqua ferma, barche ormeggiate, bar che alzano le serrande, foschia del mattino --- */
PR.midarsena=MI((g,x,y,t,a,k)=>{
 const cols=['#e6d2a8','#d9a898','#d8b878','#c9c4a8','#e0c8a0'];
 for(let i=0;i<5;i++){const bx=x-240+i*96,bh=70+(i*37%3)*22,c=cols[i];
  rect(g,c,bx,y-62-bh,92,bh);rect(g,'rgba(255,255,255,.16)',bx,y-62-bh,6,bh);rect(g,'rgba(0,0,0,.1)',bx+80,y-62-bh,12,bh);
  rect(g,'#a9553b',bx-3,y-62-bh-7,98,8);for(let q=0;q<14;q++)rect(g,'rgba(0,0,0,.14)',bx-3+q*7,y-62-bh-7,1.2,8);
  for(let q=0;q<2;q++)for(let f=0;f<(bh>85?2:1);f++){const L=k>.3&&hr(i*4+q+f)>.3;rect(g,'#f0e8d4',bx+11+q*38,y-62-bh+10+f*26-2,22,24);rect(g,L?LIT:'#5a7888',bx+13+q*38,y-62-bh+10+f*26,18,20)}
  /* locale al piano terra con serranda a metà */
  rect(g,k>.2?'#6a4a2a':'#3a3a3e',bx+8,y-92,76,30);rect(g,k>.2?'rgb(255,214,140)':'rgba(255,236,190,.35)',bx+10,y-80,72,16);
  rect(g,'#8c9096',bx+8,y-92,76,i%2?10:20);for(let q=0;q<3;q++)rect(g,'rgba(0,0,0,.2)',bx+8,y-90+q*6,76,1);
  rect(g,['#a8302a','#2f6a8a','#3a7a4a','#a8302a','#c88a2a'][i],bx+4,y-97,84,5);for(let q=0;q<12;q++)rect(g,'rgba(255,255,255,.35)',bx+4+q*7,y-97,3.4,5)}
 const gr=g.createLinearGradient(0,y-62,0,y-8);gr.addColorStop(0,tn('#9ab0ac'));gr.addColorStop(1,tn('#5c7c84'));g.fillStyle=gr;g.fillRect(x-250,y-62,500,54);
 for(let i=0;i<5;i++)for(let q=0;q<5;q++)rect(g,'rgba(236,214,170,.2)',x-232+i*96+Math.sin(t*1.3+q+i)*3,y-58+q*8,60-q*5,3);
 for(let i=0;i<14;i++)rect(g,'rgba(255,255,255,.4)',x-240+((i*61+t*7)%480),y-56+(i*5%44),12+(i%3)*8,1.4);
 /* tre barche ormeggiate */
 [[-160,'#6a3e2a','#f2ecdc'],[10,'#2f4f6a','#e8d8a8'],[160,'#7a2e2a','#f2ecdc']].forEach((b,i)=>{const bx=x+b[0],by=y-32+Math.sin(t*1.2+i*2)*1.3;
  poly(g,b[1],[[bx-34,by-8],[bx+34,by-8],[bx+26,by+6],[bx-26,by+6]]);rect(g,b[2],bx-33,by-9,66,3);rect(g,'#e6e0d0',bx-12,by-22,22,14);rect(g,'#6a8aa0',bx-9,by-19,6,6);rect(g,'#6a8aa0',bx,by-19,6,6);rect(g,'rgba(0,0,0,.2)',bx-26,by+6,52,3)});
 /* banchina e bitte */
 rect(g,'#b8ac94',x-250,y-12,500,12);rect(g,'rgba(0,0,0,.18)',x-250,y-4,500,4);rect(g,'#cfc4aa',x-250,y-13,500,2.4);
 [-200,-60,90,210].forEach(bx=>{rect(g,'#2a2c30',x+bx-3,y-22,6,10);el(g,'#2a2c30',x+bx,y-22,5,2.4)});
 /* foschia sull'acqua */
 const fg=g.createLinearGradient(0,y-120,0,y-6);fg.addColorStop(0,'rgba(236,234,224,0)');fg.addColorStop(.55,'rgba(236,234,224,'+(.5*(1-k))+')');fg.addColorStop(1,'rgba(236,234,224,'+(.12*(1-k))+')');g.fillStyle=fg;g.fillRect(x-255,y-120,510,114)});

/* --- Naviglio Grande: case di ringhiera, balconi di ferro con i gerani, panni stesi, canale con barche --- */
PR.minaviglio=MI((g,x,y,t,a,k)=>{
 const H=[[ '#e3cd9c',4],['#d6a35c',3],['#d79c92',4]];
 H.forEach((hh,i)=>{const fx=x-300+i*200,fl=hh[1],top=y-46-fl*46-14;
  rect(g,hh[0],fx,top,196,fl*46+14);rect(g,'rgba(255,255,255,.14)',fx,top,6,fl*46+14);rect(g,'rgba(60,30,10,.12)',fx+182,top,14,fl*46+14);
  for(let q=0;q<6;q++)rect(g,'rgba(120,80,40,'+(.05+hr(q+i)*.06)+')',fx+hr(q*3+i)*150,top+10+hr(q*5)*(fl*46-20),14+hr(q)*20,10+hr(q+2)*14);
  rect(g,'#8a6a48',fx-3,top-6,202,7);poly(g,'#b55e3e',[[fx-3,top-6],[fx+20,top-20],[fx+176,top-20],[fx+199,top-6]]);for(let q=0;q<20;q++)rect(g,'rgba(0,0,0,.14)',fx+20+q*8,top-20,1.2,14);
  for(let f=0;f<fl;f++){const wy=top+14+f*46;
   for(let q=0;q<4;q++){const wx=fx+14+q*46,L=k>.3&&hr(i*7+f*3+q)>.35;rect(g,'#f2ead8',wx-2,wy-2,24,34);rect(g,L?LIT:'#34464e',wx,wy,20,30);if(!L)rect(g,'rgba(255,255,255,.14)',wx+2,wy+2,5,26);
    rect(g,'#4f7a52',wx-8,wy,7,30);rect(g,'#4f7a52',wx+21,wy,7,30);for(let s=0;s<4;s++){rect(g,'rgba(0,0,0,.2)',wx-8,wy+4+s*7,7,1);rect(g,'rgba(0,0,0,.2)',wx+21,wy+4+s*7,7,1)}}
   /* ballatoio di ferro battuto con gerani */
   rect(g,'#2a2e30',fx,wy+32,196,3);rect(g,'#2a2e30',fx,wy+18+14,196,1.6);for(let q=0;q<40;q++)rect(g,'#2a2e30',fx+2+q*4.9,wy+22,1.2,10);rect(g,'#2a2e30',fx,wy+21,196,1.6);
   for(let q=0;q<9;q++){const px=fx+8+q*21;if(hr(i*5+f+q)>.3){el(g,'#4a7a34',px,wy+19,5,3);dot(g,['#d8303a','#ff7ab0','#e84a4a'][q%3],px-2,wy+16,2.4);dot(g,['#d8303a','#ff7ab0','#e84a4a'][q%3],px+2,wy+17,2.2)}}
   if(hr(i*9+f)>.45){const ly=wy+6;g.strokeStyle=tn('#4a4a4a');g.lineWidth=1;g.beginPath();g.moveTo(fx+30,ly);g.quadraticCurveTo(fx+70,ly+9,fx+110,ly);g.stroke();for(let q=0;q<4;q++)rect(g,['#f4f4ee','#e8505a','#3a6ac8','#ffd21e'][q],fx+38+q*18,ly+3+Math.sin(q)*2,8,13)}}
  /* piano terra: locali con tavolini */
  for(let q=0;q<3;q++){const ax=fx+10+q*62;ar(g,k>.25?'rgb(255,214,140)':'#4a4238',ax,y-46,44,38);rect(g,'#2a2e30',ax-2,y-48,48,2)}
  for(let q=0;q<2;q++){const tx=fx+34+q*84;rect(g,'#6a4a2a',tx,y-56,18,2);rect(g,'#6a4a2a',tx+8,y-54,2,8);rect(g,'#8a3a2a',tx-6,y-56,4,10);rect(g,'#8a3a2a',tx+20,y-56,4,10)}});
 /* il canale, sotto il livello del suolo */
 const gr=g.createLinearGradient(0,y-46,0,y-12);gr.addColorStop(0,tn('#4d7b7c'));gr.addColorStop(1,tn('#27505a'));g.fillStyle=gr;g.fillRect(x-304,y-46,608,34);
 for(let i=0;i<3;i++)for(let q=0;q<4;q++)rect(g,['rgba(230,200,150,.22)','rgba(210,150,110,.2)','rgba(230,190,170,.2)'][i],x-290+i*200+Math.sin(t*1.5+q*1.3+i)*4,y-44+q*7,150-q*18,3);
 for(let i=0;i<16;i++)rect(g,'rgba(255,255,255,.3)',x-300+((i*47+t*8)%600),y-44+(i*7%30),10+(i%3)*8,1.2);
 [[-120,'#8a5a3a'],[110,'#3a5a7a']].forEach((b,i)=>{const bx=x+b[0],by=y-26+Math.sin(t*1.1+i*3)*1.2;poly(g,b[1],[[bx-30,by-7],[bx+30,by-7],[bx+22,by+5],[bx-22,by+5]]);rect(g,'#f2ecdc',bx-29,by-8,58,3);rect(g,'#e6e0d0',bx-8,by-19,18,12);rect(g,'#6a8aa0',bx-5,by-17,5,5)});
 /* muretto con ringhiera */
 rect(g,'#9c9486',x-304,y-22,608,22);rect(g,'#b2aa9a',x-304,y-25,608,4);rect(g,'rgba(0,0,0,.15)',x-304,y-8,608,8);
 for(let q=0;q<34;q++){rect(g,'#26282a',x-300+q*18,y-46,2.4,22)}rect(g,'#26282a',x-304,y-47,608,2.6);
 const fg=g.createLinearGradient(0,y-230,0,y);fg.addColorStop(0,'rgba(236,234,224,0)');fg.addColorStop(1,'rgba(236,234,224,'+(.34*(1-k))+')');g.fillStyle=fg;g.fillRect(x-310,y-230,620,230)});

/* --- Vicolo dei Lavandai: la vasca sotto la piccola tettoia --- */
PR.milavandai=MI((g,x,y,t,a,k)=>{
 rect(g,'#c9b690',x-92,y-132,184,132);rect(g,'rgba(0,0,0,.12)',x+68,y-132,24,132);rect(g,'rgba(255,255,255,.14)',x-92,y-132,8,132);
 for(let q=0;q<9;q++)rect(g,'rgba(110,70,40,'+(.06+hr(q)*.06)+')',x-84+hr(q*3)*140,y-124+hr(q*5)*100,16+hr(q)*22,12+hr(q+2)*14);
 ar(g,'#6a5a48',x-78,y-26,34,92);ar(g,'#2a2420',x-73,y-26,24,84);
 /* tettoia di legno e tegole */
 rect(g,'#6a4a2a',x-70,y-100,6,92);rect(g,'#6a4a2a',x+64,y-100,6,92);rect(g,'#5a3e22',x-76,y-104,152,5);
 poly(g,'#b0583a',[[x-84,y-102],[x-52,y-134],[x+52,y-134],[x+84,y-102]]);for(let q=0;q<16;q++)rect(g,'rgba(0,0,0,.16)',x-76+q*10,y-132+Math.abs(q-8)*.5,1.4,28);rect(g,'#7a3a26',x-84,y-104,168,4);
 /* vasca di pietra scura con acqua e piano inclinato */
 rect(g,'#5a5856',x-60,y-44,120,44);rect(g,'rgba(255,255,255,.1)',x-60,y-44,120,4);rect(g,'#3c3a3a',x-52,y-40,104,10);
 const wg=g.createLinearGradient(0,y-38,0,y-14);wg.addColorStop(0,tn('#5e8a8a'));wg.addColorStop(1,tn('#34606a'));g.fillStyle=wg;g.fillRect(x-52,y-36,104,22);
 for(let q=0;q<5;q++)rect(g,'rgba(255,255,255,.3)',x-46+((q*29+t*9)%90),y-34+q*4,14,1.2);
 poly(g,'#7a7672',[[x-60,y-44],[x-40,y-60],[x+40,y-60],[x+60,y-44]]);for(let q=0;q<9;q++)rect(g,'rgba(0,0,0,.2)',x-36+q*9,y-58,1.2,12);
 for(let q=0;q<7;q++)dot(g,'#5a7a3a',x-56+q*17,y-3,2.6+(q%2));
 rect(g,'#8a5a3a',x+76,y-22,14,16);rect(g,'#6a4228',x+76,y-22,14,3);rect(g,'#c8b896',x-84,y-12,10,12)});

/* --- Porta Ticinese: due torri medievali con merli e arco centrale, tratti di bastione --- */
PR.miporta=MI((g,x,y,t,a,k)=>{const B='#b0603e';
 bk(g,B,x-170,y-66,50,66,1);bk(g,B,x+120,y-66,50,66,2);merl(g,B,x-170,y-66,50,4,12);merl(g,B,x+120,y-66,50,4,12);
 bk(g,B,x-50,y-130,100,130,3);rect(g,'#cdbb98',x-54,y-134,108,6);merl(g,B,x-52,y-134,104,7,14);
 [[x-122,5],[x+52,6]].forEach(T=>{const tx=T[0];bk(g,B,tx,y-216,70,216,T[1]);rect(g,'rgba(255,230,190,.14)',tx,y-216,8,216);rect(g,'rgba(0,0,0,.14)',tx+56,y-216,14,216);
  rect(g,'#cdbb98',tx-4,y-222,78,7);merl(g,B,tx-4,y-222,78,6,16);rect(g,'#cdbb98',tx-2,y-130,74,4);
  for(let q=0;q<3;q++){rect(g,'#2a1a12',tx+30,y-190+q*34,6,16);rect(g,'rgba(255,200,120,'+(k*.7)+')',tx+30,y-190+q*34,6,16)}
  ar(g,'#2a1a12',tx+22,y-6,26,36)});
 ar(g,'#cdbb98',x-40,y,80,104);ar(g,k>.3?'rgb(255,214,140)':'#3a2a20',x-32,y,64,96);rect(g,'#2a1a12',x-32,y-6,64,6);
 for(let q=0;q<7;q++){const an=Math.PI+q*Math.PI/6;rect(g,'#8a5a3a',x+Math.cos(an)*44-3,y-96+Math.sin(an)*44-3,6,6)}
 rect(g,'#3a2a22',x-24,y-124,48,16)});

/* --- Colonne di San Lorenzo: sedici colonne romane in fila, la statua di Costantino, qualche giovane seduto --- */
PR.micolonne=MI((g,x,y,t,a,k)=>{
 rect(g,'#8e867a',x-206,y-7,420,7);rect(g,'rgba(255,255,255,.14)',x-206,y-7,420,1.6);
 for(let q=0;q<13;q++)rect(g,'rgba(0,0,0,.18)',x-200+q*33,y-6,1.4,6);
 for(let i=0;i<16;i++){const cx=x-190+i*22,h=146-(i%5==2?10:0);
  colo(g,cx,y-7,h,15,'#d8ccb0','#cfc2a4');
  for(let q=0;q<3;q++)el(g,'#b9ab8a',cx-4+q*4,y-7-h-6,3,4);
  if(hr(i*7)>.55)rect(g,'rgba(110,90,56,.2)',cx-6,y-7-h*(.3+hr(i)*.5),12,10)}
 [[-134,'#3a4f7a','#c8402a'],[-6,'#2a2a34','#e8c030'],[100,'#3a4f7a','#4a8a6a']].forEach((p,i)=>{const px=x+p[0];
  rect(g,p[1],px-2,y-28,26,9);rect(g,p[1],px+20,y-28,8,26);rect(g,p[2],px-8,y-62,16,36);dot(g,['#d8a880','#c88a62','#e6b894'][i],px,y-70,8);dot(g,['#2a1a10','#6a4a2a','#3a2a1a'][i],px,y-74,7.4);
  if(i==1){rect(g,'#f2e2c0',px+14,y-50,5,10);dot(g,'#ff9ab0',px+16.5,y-53,3.6)}});
 rect(g,'#cbbfa4',x+198,y-62,42,62);rect(g,'rgba(0,0,0,.16)',x+228,y-62,12,62);rect(g,'#d8ccb0',x+194,y-68,50,7);rect(g,'#d8ccb0',x+194,y-6,50,6);
 const gc='#5f7a62';poly(g,gc,[[x+211,y-70],[x+209,y-126],[x+231,y-126],[x+229,y-70]]);dot(g,gc,x+220,y-134,8);poly(g,'#4a6450',[[x+209,y-122],[x+196,y-80],[x+212,y-80]]);rect(g,gc,x+233,y-126,3,34);rect(g,gc,x+228,y-118,13,3)});

/* --- Basilica di San Lorenzo: facciata massiccia di mattoni, dietro la cupola ottagonale di Sant'Aquilino --- */
PR.mibasilicalor=MI((g,x,y,t,a,k)=>{const B='#b66a44';
 bk(g,'#a45e3c',x-76,y-250,152,90,4);for(let q=0;q<4;q++)ar(g,'#2a1a12',x-62+q*34,y-168,18,40);rect(g,'#cdb58e',x-80,y-252,160,6);
 g.fillStyle=tn('#9a5638');g.beginPath();g.ellipse(x,y-250,60,48,0,Math.PI,0);g.fill();for(let q=0;q<7;q++)rect(g,'rgba(0,0,0,.18)',x-54+q*18,y-290,1.4,40);
 rect(g,'#cdb58e',x-5,y-306,10,10);dot(g,'#d9b24a',x,y-312,4);
 bk(g,B,x-200,y-170,400,170,7);rect(g,'rgba(255,230,190,.12)',x-200,y-170,10,170);rect(g,'rgba(0,0,0,.12)',x+182,y-170,18,170);
 rect(g,'#cdb58e',x-204,y-176,408,8);rect(g,'#cdb58e',x-200,y-100,400,4);
 [[-170],[130]].forEach(p=>{ar(g,'#2a1a12',x+p[0],y-110,36,64);rect(g,'rgba(255,200,120,'+(k*.6)+')',x+p[0]+6,y-140,24,10)});
 ar(g,'#cdb58e',x-48,y,96,128);ar(g,'#5a3a22',x-40,y,80,118);rect(g,'#3a2414',x-1,y-118,2,118);for(let q=0;q<5;q++)dot(g,'#d9b24a',x-34+q*7,y-100,1.6);
 dot(g,'#cdb58e',x,y-150,16);dot(g,k>.3?LIT:'#3a2a22',x,y-150,11);for(let q=0;q<8;q++)ln(g,'#cdb58e',1.2,[x,y-150,x+Math.cos(q*.785)*11,y-150+Math.sin(q*.785)*11]);
 [[-110],[84]].forEach(p=>ar(g,k>.3?LIT:'#33405a',x+p[0],y-120,26,52));
 rect(g,'#cdb58e',x-204,y-6,408,6)});

/* --- Tram "Ventotto": cassa arancione, panche di legno e maniglie di ottone, pantografo, fari --- */
PR.mitram=MI((g,x,y,t,a,k)=>{
 rect(g,'#6a6e74',x-340,y+2,680,3);rect(g,'#6a6e74',x-340,y+17,680,3);for(let q=0;q<42;q++)rect(g,'rgba(60,40,24,.5)',x-338+q*16,y+5,5,12);
 g.strokeStyle=tn('#2a2e32');g.lineWidth=1.2;g.beginPath();g.moveTo(x-340,y-190);g.lineTo(x+340,y-190);g.stroke();
 ln(g,'#2a2e32',2,[x-6,y-190,x-24,y-150,x+6,y-142]);ln(g,'#2a2e32',2,[x+6,y-142,x+22,y-148]);rect(g,'#2a2e32',x-30,y-146,40,3);
 el(g,'#f0e4c4',x,y-134,152,10);rect(g,'#f0e4c4',x-152,y-134,304,12);
 const OR='#e0711a';rect(g,OR,x-154,y-124,308,92);poly(g,OR,[[x+154,y-124],[x+166,y-112],[x+166,y-34],[x+154,y-32]]);poly(g,OR,[[x-154,y-124],[x-166,y-112],[x-166,y-34],[x-154,y-32]]);
 rect(g,'#f0e4c4',x-154,y-92,308,3);rect(g,'rgba(60,20,0,.22)',x-154,y-44,308,12);rect(g,'#d0620f',x-166,y-34,332,6);
 for(let i=0;i<8;i++){const wx=x-144+i*37.5;rect(g,'#4a3a2a',wx-1,y-122,34,32);rect(g,k>.3?'rgb(255,226,170)':'#f3e8c8',wx,y-120,32,28);
  rect(g,'#8a5a30',wx+2,y-100,28,4);rect(g,'#8a5a30',wx+2,y-106,3,8);rect(g,'#d9b24a',wx+10,y-120,1.6,14);rect(g,'#d9b24a',wx+22,y-120,1.6,14);
  if(i%3==1){dot(g,'#d8a880',wx+16,y-107,4);rect(g,'#4a6a8a',wx+11,y-103,10,6)}}
 rect(g,'#2a2420',x-120,y-86,24,38);rect(g,'rgba(255,255,255,.08)',x-120,y-86,24,38);
 [-120,-70,70,120].forEach(w=>{dot(g,'#1c1c20',x+w,y-8,12);dot(g,'#9a9ea6',x+w,y-8,5)});
 rect(g,'#f2ecdc',x+120,y-88,28,12);txt(g,'1928',x+134,y-79,8,'#2a2e32');
 dot(g,'#fff4c0',x+163,y-66,5);glow(g,x+166,y-66,60,'255,236,170',.35+k*.5);dot(g,'#c8202a',x-163,y-66,3.4)});

/* --- Basilica di Sant'Ambrogio: atrio a portici, due campanili diversi --- */
PR.miambrogio=MI((g,x,y,t,a,k)=>{const C='#dac8a0',R='#b87a56';
 /* campanile dei Monaci (basso, a sinistra) e dei Canonici (alto, a destra) */
 bk(g,C,x-170,y-250,44,250,8);rect(g,R,x-174,y-256,52,8);for(let q=0;q<3;q++){ar(g,'#2a2420',x-158,y-150+q*-34,16,26)}poly(g,'#8a5a3a',[[x-174,y-256],[x-148,y-292],[x-122,y-256]]);
 bk(g,C,x+120,y-340,48,340,9);for(let q=0;q<4;q++){rect(g,R,x+116,y-330+q*70,56,5);ar(g,'#2a2420',x+134,y-270+q*-1+q*70-60+60,16,30)}poly(g,'#8a5a3a',[[x+116,y-340],[x+144,y-388],[x+172,y-340]]);rect(g,'#d9b24a',x+143,y-398,2,12);
 /* facciata */
 bk(g,C,x-120,y-200,240,200,10);poly(g,C,[[x-120,y-200],[x,y-246],[x+120,y-200]]);rect(g,'rgba(0,0,0,.1)',x+100,y-200,20,200);
 for(let q=0;q<5;q++)ar(g,'#6a5a48',x-100+q*40,y-168,24,36);for(let q=0;q<5;q++)ar(g,k>.3?LIT:'#2a2420',x-96+q*40,y-168,16,30);
 rect(g,R,x-122,y-204,244,5);for(let q=0;q<14;q++)ar(g,R,x-110+q*17,y-200,9,10);
 /* atrio con arconi */
 rect(g,'#cdbb98',x-140,y-108,280,108);rect(g,'rgba(0,0,0,.1)',x+120,y-108,20,108);rect(g,R,x-142,y-112,284,6);
 for(let q=0;q<3;q++){const ax=x-116+q*82;ar(g,'#a89874',ax,y,72,92);ar(g,'#3a2e24',ax+7,y,58,84);rect(g,'#a89874',ax-6,y-90,6,90)}rect(g,'#a89874',x+126,y-90,6,90);
 ar(g,'#5a3a22',x-20,y,40,66);rect(g,'#d9b24a',x-3,y-60,6,10)});

/* --- Santa Maria delle Grazie: mattoni rossi, tribuna di Bramante, fianco con archetti --- */
PR.migrazie=MI((g,x,y,t,a,k)=>{const B='#b5573a',W='#ead9b8';
 bk(g,B,x-190,y-120,230,120,11);rect(g,W,x-194,y-126,238,7);for(let q=0;q<26;q++){ar(g,W,x-186+q*9,y-120,5,8)}
 for(let q=0;q<4;q++)ar(g,k>.3?LIT:'#33405a',x-170+q*50,y-60,18,46);
 bk(g,B,x-30,y-170,150,170,12);rect(g,W,x-30,y-172,150,5);rect(g,W,x-30,y-110,150,4);
 for(let q=0;q<4;q++){dot(g,W,x+2+q*38,y-140,12);dot(g,k>.3?LIT:'#4a5a6a',x+2+q*38,y-140,8)}
 /* tribuna di Bramante: tamburo con archetti e cupola */
 bk(g,'#c26a48',x+16,y-250,90,80,13);rect(g,W,x+12,y-254,98,6);for(let q=0;q<7;q++){ar(g,W,x+22+q*12,y-176,7,26);ar(g,'#3a2a22',x+23.6+q*12,y-176,4,22)}
 g.fillStyle=tn('#8f9a94');g.beginPath();g.ellipse(x+61,y-254,50,44,0,Math.PI,0);g.fill();for(let q=0;q<8;q++)rect(g,'rgba(255,255,255,.15)',x+22+q*10,y-296,2,42);
 rect(g,W,x+54,y-306,14,16);poly(g,'#8f9a94',[[x+54,y-306],[x+61,y-322],[x+68,y-306]]);
 /* portone e targa CENACOLO */
 ar(g,W,x-8,y,36,70);ar(g,'#4a2a1a',x-3,y,26,64);rect(g,'#f4f4ee',x+34,y-90,44,15);rect(g,'#6a5a48',x+34,y-90,44,2);txt(g,'CENACOLO',x+56,y-79,7,'#2a2a2e');
 rect(g,W,x-194,y-6,238,6)});

/* --- Vigna di Leonardo: pochi filari dietro la casa degli Atellani --- */
PR.mivigna=MI((g,x,y,t,a,k)=>{
 bk(g,'#e0cfa8',x+20,y-110,120,110,14);poly(g,'#b0583a',[[x+12,y-110],[x+44,y-140],[x+116,y-140],[x+148,y-110]]);for(let q=0;q<12;q++)rect(g,'rgba(0,0,0,.16)',x+44+q*6,y-140,1.2,30);
 ar(g,'#5a3e28',x+36,y,26,62);rect(g,'#f2ead8',x+84,y-84,28,36);rect(g,k>.3?LIT:'#33405a',x+86,y-82,24,32);rect(g,'#4f7a52',x+76,y-84,8,36);rect(g,'#4f7a52',x+112,y-84,8,36);
 rect(g,'#f4f4ee',x+30,y-124,102,12);rect(g,'#6a5a48',x+30,y-124,102,2);txt(g,'VIGNA DI LEONARDO',x+81,y-114,7,'#2a2a2e');
 for(let r=0;r<3;r++){const ry=y-8-r*3,sx=x-150+r*4;
  for(let q=0;q<10;q++){const px=sx+q*17;rect(g,'#6a6258',px,ry-62,2.4,62);}
  ln(g,'#5a5248',1.2,[sx,ry-48,sx+160,ry-48]);ln(g,'#5a5248',1.2,[sx,ry-30,sx+160,ry-30]);
  for(let q=0;q<10;q++){const px=sx+q*17;el(g,'#5a8a3a',px+1,ry-44+Math.sin(t+q)*.6,10,10);el(g,'#4a7a2e',px+5,ry-30,8,7);if((q+r)%3==0)dot(g,'#6a3a7a',px+3,ry-26,2.4)}}
 rect(g,'#a8a090',x-160,y-4,170,4)});

/* --- Castello Sforzesco: mura rosse merlate, Torre del Filarete, due torri tonde, fossato --- */
PR.micastello=MI((g,x,y,t,a,k)=>{const B='#b0472f';g.save();g.translate(0,y);g.scale(1,.8);g.translate(0,-y);
 bk(g,B,x-340,y-130,680,130,15);rect(g,'rgba(255,230,190,.1)',x-340,y-130,680,6);rect(g,'#d8c4a0',x-342,y-136,684,6);
 for(let q=0;q<45;q++){const mx=x-340+q*15.2;rect(g,B,mx,y-152,9,16);poly(g,'#8a3422',[[mx,y-152],[mx+4.5,y-158],[mx+9,y-152]])}
 for(let q=0;q<14;q++)ar(g,'#2a1612',x-322+q*46,y-60,9,22);
 /* torri tonde */
 [-290,290].forEach(o=>{const cx=x+o;rect(g,B,cx-44,y-210,88,210);rect(g,'rgba(255,230,190,.16)',cx-44,y-210,16,210);rect(g,'rgba(0,0,0,.2)',cx+22,y-210,22,210);for(let r=0;r<28;r++)rect(g,'rgba(50,16,6,.14)',cx-44,y-206+r*7,88,1);
  rect(g,'#d8c4a0',cx-48,y-216,96,8);for(let q=0;q<6;q++){rect(g,B,cx-48+q*17,y-234,10,18);poly(g,'#8a3422',[[cx-48+q*17,y-234],[cx-43+q*17,y-240],[cx-38+q*17,y-234]])}
  for(let q=0;q<3;q++)rect(g,k>.3?LIT:'#2a1612',cx-4,y-186+q*50,8,18)});
 /* Torre del Filarete */
 bk(g,B,x-64,y-250,128,250,16);rect(g,'#d8c4a0',x-68,y-254,136,8);
 ar(g,'#d8c4a0',x-36,y,72,120);ar(g,'#2a1612',x-28,y,56,112);for(let q=0;q<9;q++)rect(g,'#6a5a48',x-26+q*6.4,y-106,1.4,106);
 rect(g,'#f2ead8',x-18,y-190,36,32);rect(g,'#c8402a',x-12,y-184,24,20);rect(g,'#d9b24a',x-4,y-184,8,20);
 bk(g,B,x-34,y-330,68,80,17);rect(g,'#d8c4a0',x-38,y-334,76,6);dot(g,'#f4efe0',x,y-306,15);dot(g,'#2a2a2e',x,y-306,12.6);dot(g,'#f4efe0',x,y-306,11.4);ln(g,'#2a2a2e',1.6,[x,y-306,x,y-314]);ln(g,'#2a2a2e',1.6,[x,y-306,x+7,y-303]);
 for(let q=0;q<3;q++)ar(g,'#2a1612',x-24+q*17,y-262,10,24);
 bk(g,B,x-26,y-372,52,40,18);rect(g,'#d8c4a0',x-30,y-376,60,6);for(let q=0;q<3;q++)ar(g,'#2a1612',x-20+q*14,y-340,8,18);
 poly(g,'#7f9a8e',[[x-30,y-376],[x,y-430],[x+30,y-376]]);rect(g,'#d9b24a',x-1,y-444,2,16);
 /* fossato */
 rect(g,'#6a6258',x-345,y-4,690,4);const gr=g.createLinearGradient(0,y-4,0,y+2);gr.addColorStop(0,tn('#4a6a6a'));gr.addColorStop(1,tn('#2e4a54'));g.fillStyle=gr;g.fillRect(x-345,y-3,690,5);g.restore()});

/* --- Arco della Pace: arco bianco a tre fornici con quadriga di bronzo --- */
PR.miarcopace=MI((g,x,y,t,a,k)=>{const M='#eee6d4',S='#d4cab4';
 rect(g,M,x-170,y-172,340,172);rect(g,'rgba(255,248,230,.3)',x-170,y-172,60,172);rect(g,'rgba(40,24,6,.14)',x+130,y-172,40,172);
 ar(g,'#6a6458',x-46,y,92,128);ar(g,'#3a342c',x-40,y,80,122);ar(g,'#6a6458',x-122,y,50,88);ar(g,'#3a342c',x-118,y,42,82);ar(g,'#6a6458',x+72,y,50,88);ar(g,'#3a342c',x+76,y,42,82);
 [-148,-62,62,148].forEach(cx=>{rect(g,M,cx-9,y-168,18,168);rect(g,S,cx+3,y-168,6,168);rect(g,'#ddd3bc',cx-13,y-174,26,8);rect(g,'#ddd3bc',cx-13,y-6,26,6)});
 rect(g,S,x-176,y-182,352,12);rect(g,'rgba(0,0,0,.12)',x-176,y-171,352,3);
 rect(g,M,x-160,y-232,320,50);rect(g,S,x-166,y-238,332,8);
 for(let q=0;q<4;q++){rect(g,'#c9bea6',x-148+q*74,y-224,56,34);rect(g,'rgba(0,0,0,.1)',x-148+q*74,y-224,56,2);for(let r=0;r<3;r++)rect(g,'rgba(110,90,56,.35)',x-142+q*74,y-216+r*9,44,4)}
 /* quadriga */
 const br='#6b5a3a';rect(g,'#c9bea6',x-80,y-250,160,12);
 for(let i=0;i<4;i++){const hx=x-62+i*34;poly(g,br,[[hx-18,y-250],[hx-14,y-272],[hx+2,y-282],[hx+12,y-296],[hx+20,y-290],[hx+10,y-274],[hx+16,y-250]]);rect(g,'#8a7448',hx+14,y-296,4,3)}
 rect(g,br,x+50,y-290,30,40);poly(g,br,[[x+56,y-290],[x+64,y-326],[x+72,y-290]]);dot(g,br,x+64,y-332,5);ln(g,'#8a7448',2,[x+64,y-322,x+82,y-338]);poly(g,'#8a7448',[[x+56,y-310],[x+36,y-322],[x+52,y-300]]);
 rect(g,'#4a4438',x-170,y-4,340,4)});

/* --- Torre Branca: torre d'acciaio a traliccio con piattaforma panoramica --- */
PR.mitorrebranca=MI((g,x,y,t,a,k)=>{const S='#6d7882',h=310;g.save();g.translate(0,y);g.scale(1,.9);g.translate(0,-y);
 const w=(yy)=>{const u=yy/h;return 74-u*u*60};
 for(let i=0;i<=24;i++){const y0=y-i*h/24,y1=y-(i+1)*h/24;if(i==24)break;const w0=w(i*h/24),w1=w((i+1)*h/24);
  ln(g,S,3.6,[x-w0,y0,x-w1,y1]);ln(g,S,3.6,[x+w0,y0,x+w1,y1]);ln(g,S,2,[x-w0,y0,x+w1,y1]);ln(g,S,1.3,[x+w0,y0,x-w1,y1]);ln(g,S,1.6,[x-w1,y1,x+w1,y1])}
 rect(g,'rgba(255,255,255,.18)',x-3,y-h,2,h);
 el(g,'#5a646e',x,y-h,44,6);rect(g,S,x-44,y-h-26,88,22);for(let q=0;q<8;q++)rect(g,'rgba(255,255,255,.35)',x-40+q*11,y-h-23,8,12);rect(g,'#5a646e',x-48,y-h-30,96,5);
 rect(g,'#4a545e',x-30,y-h-44,60,14);for(let q=0;q<5;q++)rect(g,k>.3?LIT:'#9ab0c0',x-26+q*12,y-h-41,8,8);
 ln(g,'#4a545e',2,[x,y-h-44,x,y-h-72]);dot(g,'#d8303a',x,y-h-74,2.4);
 for(let q=0;q<4;q++)rect(g,'#5a646e',x-w(0)+q*4-8,y-6,10,6);g.restore()});

/* --- Cortile di Brera: loggia a due ordini, Napoleone di bronzo, torretta dell'Osservatorio --- */
PR.mibrera=MI((g,x,y,t,a,k)=>{const C='#e4d4b0',O='#d6bd8a';
 rect(g,C,x-210,y-196,420,196);rect(g,'rgba(255,255,255,.14)',x-210,y-196,14,196);rect(g,'rgba(60,30,10,.1)',x+186,y-196,24,196);
 rect(g,'#a8603a',x-214,y-204,428,9);rect(g,'#8a4a2a',x-214,y-197,428,3);
 /* osservatorio */
 rect(g,O,x+110,y-262,60,60);rect(g,'rgba(0,0,0,.1)',x+156,y-262,14,60);ar(g,k>.3?LIT:'#33405a',x+130,y-218,20,30);g.fillStyle=tn('#9aa6a6');g.beginPath();g.ellipse(x+140,y-262,26,22,0,Math.PI,0);g.fill();rect(g,'#6a7676',x+136,y-282,8,20);ln(g,'#4a5656',2,[x+140,y-270,x+160,y-292]);
 /* loggia a due ordini */
 for(let q=0;q<8;q++){const ax=x-196+q*49;ar(g,O,ax,y,44,92);ar(g,'#6a5a46',ax+5,y,34,84);rect(g,O,ax-4,y-92,6,92)}rect(g,O,x+192,y-92,6,92);
 rect(g,'#c9b27c',x-204,y-98,408,8);
 for(let q=0;q<17;q++){rect(g,O,x-200+q*24,y-186,7,86);rect(g,'rgba(0,0,0,.12)',x-195+q*24,y-186,2,86)}rect(g,'#c9b27c',x-204,y-190,408,6);rect(g,'rgba(70,50,40,.3)',x-200,y-182,400,80);
 for(let q=0;q<8;q++){const L=k>.3&&hr(q+3)>.4;rect(g,L?LIT:'#3a4650',x-176+q*49,y-168,18,40)}
 /* statua di bronzo al centro */
 rect(g,'#b8ac94',x-30,y-60,60,60);rect(g,'#d0c6ae',x-34,y-66,68,8);rect(g,'#b8ac94',x-22,y-120,44,56);rect(g,'#d0c6ae',x-26,y-126,52,8);
 const br='#5f7058';poly(g,br,[[x-8,y-128],[x-9,y-190],[x+9,y-190],[x+8,y-128]]);dot(g,br,x,y-198,7);rect(g,br,x-16,y-186,8,26);rect(g,br,x+8,y-186,3,64);dot(g,'#8a9a80',x+1,y-170,2);
 for(let q=0;q<3;q++)rect(g,'rgba(255,255,255,.18)',x-6+q*0,y-186+q*14,2,10)});

/* --- Orto Botanico: piccolo giardino nascosto dietro un muretto --- */
PR.miorto=MI((g,x,y,t,a,k)=>{
 [[-70,110,'#3f7a3a'],[-10,140,'#4a8a3e'],[56,120,'#376a34'],[100,92,'#4f8e46']].forEach((T,i)=>{const tx=x+T[0],sw=Math.sin(t*.8+i)*1.4;rect(g,'#5a4028',tx-3,y-T[1],6,T[1]-40);el(g,T[2],tx+sw,y-T[1]-10,30,26);el(g,'#5a9a4a',tx-12+sw,y-T[1]-16,16,12);el(g,T[2],tx+20+sw,y-T[1]+6,20,16)});
 for(let q=0;q<9;q++){const bx=x-110+q*26;el(g,['#4a8a3e','#3a7034','#5a9a4a'][q%3],bx,y-52,15,15);if(q%3==1){dot(g,'#e8505a',bx-4,y-56,2.2);dot(g,'#ffd21e',bx+5,y-50,2)}}
 rect(g,'#d8cdb0',x-130,y-44,260,44);rect(g,'rgba(255,255,255,.14)',x-130,y-44,260,3);rect(g,'rgba(0,0,0,.12)',x-130,y-10,260,10);rect(g,'#b8ab8c',x-134,y-48,268,6);
 ar(g,'#b8ab8c',x-18,y,36,56);ar(g,'#2e4a34',x-13,y,26,50);for(let q=0;q<6;q++)rect(g,'#2a2a2e',x-12+q*4.4,y-50,1.4,50);
 rect(g,'#f4f4ee',x+60,y-34,36,14);txt(g,'ORTO',x+78,y-24,7,'#2a2a2e')});

/* --- Teatro alla Scala: facciata neoclassica a timpano, loggiato basso, torre scenica e monumento a Leonardo --- */
PR.miscala=MI((g,x,y,t,a,k)=>{const C='#e0d2b4',D='#d2c8b0';
 bk(g,'#a06a4a',x-40,y-290,110,150,19);rect(g,'rgba(0,0,0,.12)',x+50,y-290,20,150);rect(g,'#c9b898',x-44,y-294,118,6);
 rect(g,C,x-230,y-150,380,150);rect(g,'rgba(255,255,255,.14)',x-230,y-150,10,150);rect(g,'rgba(0,0,0,.1)',x+130,y-150,20,150);
 rect(g,'#b8a888',x-234,y-156,388,7);rect(g,D,x-230,y-102,380,4);
 for(let q=0;q<2;q++)for(let i=0;i<3;i++){const wx=i==0?x-214:x+104;const px=wx+(q?0:0);}
 [-214,-172,98,126].forEach(wx=>{for(let f=0;f<2;f++){const L=k>.3&&hr(wx+f)>.4;rect(g,'#efe6d0',wx-2,y-138+f*54,24,40);rect(g,L?LIT:'#3a4650',wx,y-136+f*54,20,36)}});
 /* avancorpo con loggiato e timpano */
 rect(g,'#e8dcc0',x-110,y-190,200,190);rect(g,'rgba(0,0,0,.08)',x+70,y-190,20,190);
 for(let q=0;q<4;q++){ar(g,'#5a4e3e',x-96+q*44,y,34,86);ar(g,'#2e2822',x-92+q*44,y,26,80);rect(g,'#c9bba0',x-104+q*44,y-86,8,86)}rect(g,'#c9bba0',x+72,y-86,8,86);
 rect(g,'#c9bba0',x-110,y-96,200,8);
 for(let q=0;q<5;q++){rect(g,'#efe6d0',x-96+q*40,y-186,10,84)}for(let q=0;q<4;q++){const L=k>.3;ar(g,L?LIT:'#3a4650',x-72+q*40,y-110,16,56)}
 rect(g,'#c9bba0',x-114,y-192,208,8);poly(g,'#e8dcc0',[[x-114,y-192],[x-10,y-238],[x+94,y-192]]);poly(g,'#d8cbb0',[[x-96,y-198],[x-10,y-232],[x+76,y-198]]);dot(g,'#c9bba0',x-10,y-208,9);
 /* monumento a Leonardo con quattro allievi */
 const mx=x+200;rect(g,'#9a9488',mx-34,y-16,68,16);rect(g,'#aaa498',mx-28,y-34,56,18);rect(g,'#bab4a6',mx-14,y-96,28,64);rect(g,'#9a9488',mx-18,y-100,36,6);
 poly(g,'#5f6a5a',[[mx-6,y-100],[mx-7,y-136],[mx+7,y-136],[mx+6,y-100]]);dot(g,'#5f6a5a',mx,y-142,5.6);
 [-26,-9,9,26].forEach((o,i)=>{poly(g,'#5f6a5a',[[mx+o-3,y-34],[mx+o-3,y-56],[mx+o+3,y-56],[mx+o+3,y-34]]);dot(g,'#5f6a5a',mx+o,y-60,3.4)})});

/* --- Piazza San Fedele: la statua di Manzoni davanti alla chiesa --- */
PR.misanfedele=MI((g,x,y,t,a,k)=>{const G='#c9c0ac';
 rect(g,G,x-160,y-130,200,130);rect(g,'rgba(255,255,255,.12)',x-160,y-130,10,130);rect(g,'rgba(0,0,0,.12)',x+22,y-130,18,130);rect(g,'#aaa18c',x-164,y-136,208,7);
 for(let q=0;q<4;q++){rect(g,'#d8d0bc',x-146+q*40,y-124,12,118);rect(g,'rgba(0,0,0,.12)',x-137+q*40,y-124,3,118)}
 [-120,-80,-40,0].forEach((o,i)=>{if(i==3)return});
 ar(g,'#4a4034',x-114,y,28,70);ar(g,'#4a4034',x-74,y,28,70);ar(g,'#4a4034',x-34,y,28,70);
 rect(g,G,x-100,y-210,130,74);rect(g,'#d8d0bc',x-86,y-204,10,64);rect(g,'#d8d0bc',x-10,y-204,10,64);ar(g,k>.3?LIT:'#33405a',x-60,y-142,32,56);poly(g,G,[[x-104,y-212],[x-35,y-246],[x+34,y-212]]);
 /* basamento e statua di Manzoni */
 const mx=x+120;for(let q=0;q<3;q++)rect(g,'#bab2a0',mx-48+q*6,y-8*q-8,96-q*12,8);
 rect(g,'#a8a090',mx-24,y-110,48,86);rect(g,'rgba(255,255,255,.14)',mx-24,y-110,8,86);rect(g,'rgba(0,0,0,.14)',mx+14,y-110,10,86);rect(g,'#bab2a0',mx-30,y-116,60,8);rect(g,'#bab2a0',mx-28,y-34,56,8);
 const br='#4f5a4c';poly(g,br,[[mx-11,y-116],[mx-12,y-172],[mx+12,y-172],[mx+11,y-116]]);dot(g,br,mx,y-181,8);rect(g,br,mx-14,y-170,7,32);rect(g,'#3a4438',mx+10,y-166,12,16)});

/* --- Galleria Vittorio Emanuele II: arco di pietra, volta di ferro e vetro, caffè storici, mosaico del toro nel pavimento --- */
PR.migalleria=MI((g,x,y,t,a,k)=>{const P='#d9ceb4',P2='#c9bda0';
 /* palazzi laterali con portici */
 [[-280,110],[170,110]].forEach((s,j)=>{const px=x+s[0];rect(g,P,px,y-190,s[1],190);rect(g,'rgba(0,0,0,.1)',px+s[1]-14,y-190,14,190);rect(g,P2,px-3,y-196,s[1]+6,7);
  for(let q=0;q<2;q++)for(let f=0;f<3;f++){const L=k>.3&&hr(j*7+q+f*3)>.3;rect(g,'#efe6d0',px+10+q*50-2,y-176+f*40,24,30);rect(g,L?LIT:'#3a4650',px+10+q*50,y-174+f*40,20,26)}
  for(let q=0;q<2;q++){ar(g,'#4a3e30',px+8+q*50,y,30,70);ar(g,k>.2?'rgb(255,214,140)':'#2a2420',px+12+q*50,y,22,64)}
  rect(g,'#2a1a14',px+4,y-92,s[1]-8,16);txt(g,j?'SAVINI':'BIFFI',px+s[1]/2,y-80,10,'#d9b24a')});
 /* volta di ferro e vetro dietro l'arco */
 g.fillStyle=tn('#8aa6b8');g.beginPath();g.ellipse(x,y-190,100,110,0,Math.PI,0);g.fill();g.fillStyle=tn('#6e8aa0');g.beginPath();g.ellipse(x,y-190,82,92,0,Math.PI,0);g.fill();
 for(let q=0;q<9;q++){const an=Math.PI+q*Math.PI/8;ln(g,'#2e3c48',1.6,[x,y-190,x+Math.cos(an)*100,y-190+Math.sin(an)*110])}
 if(k>.3){glow(g,x,y-200,110,'255,226,160',k*.5)}
 /* arco trionfale */
 rect(g,P,x-120,y-250,240,250);rect(g,'rgba(255,248,230,.25)',x-120,y-250,24,250);rect(g,'rgba(40,24,6,.14)',x+96,y-250,24,250);
 ar(g,P2,x-62,y,124,190);ar(g,k>.2?'rgb(255,222,160)':'#4a4234',x-52,y,104,180);
 const gg=g.createLinearGradient(x,y-180,x,y);gg.addColorStop(0,'rgba(255,230,170,.0)');gg.addColorStop(1,'rgba(255,200,120,.4)');g.fillStyle=gg;g.fillRect(x-52,y-180,104,180);
 for(let q=0;q<6;q++)rect(g,'rgba(0,0,0,.2)',x-52+q*20.8,y-120,1.4,120);
 [-106,106].forEach(cx=>{rect(g,'#e8dfc6',cx+x-8,y-190,16,190);rect(g,'#ddd3b8',cx+x-11,y-196,22,8)});
 rect(g,P2,x-126,y-262,252,14);rect(g,'#2a2a2e',x-96,y-244,192,26);txt(g,'GALLERIA',x,y-225,17,'#d9b24a');
 for(let q=0;q<6;q++){const sx=x-100+q*40;rect(g,'#c9bda0',sx,y-282,12,22);dot(g,'#c9bda0',sx+6,y-288,5)}rect(g,P2,x-126,y-268,252,6);
 txt(g,'CAMPARINO',x-218,y-60,9,'#d9b24a');
 /* mosaico del toro sul pavimento */
 const mx=x+20,my=y+62;el(g,'#e8dcc0',mx,my,150,28);el(g,'#b8483a',mx,my,128,23);el(g,'#2a4a7a',mx,my,104,18);el(g,'#e8dcc0',mx,my,84,14);
 for(let q=0;q<8;q++){const an=q*.785;ln(g,'#d9b24a',1.6,[mx+Math.cos(an)*48,my+Math.sin(an)*9,mx+Math.cos(an)*100,my+Math.sin(an)*18])}
 el(g,'#c8402a',mx,my,22,8);dot(g,'#c8402a',mx+22,my-3,5);poly(g,'#f4ecd0',[[mx+24,my-7],[mx+26,my-14],[mx+28,my-7]]);rect(g,'#c8402a',mx-20,my+2,4,7);rect(g,'#c8402a',mx+8,my+2,4,7)});

/* --- Duomo: marmo bianco-rosato, guglie ovunque, rosone, la Madonnina dorata --- */
PR.miduomo=MI((g,x,y,t,a,k)=>{const M='#ecd8ce',M2='#dcc2b8',M3='#c9aaa0';g.save();g.translate(0,y);g.scale(1,.78);g.translate(0,-y);
 /* tiburio e guglia maggiore dietro */
 rect(g,M2,x-34,y-330,68,200);rect(g,'rgba(0,0,0,.1)',x+16,y-330,18,200);for(let q=0;q<5;q++)ar(g,M3,x-26+q*13,y-250,9,40);
 poly(g,M,[[x-34,y-330],[x,y-410],[x+34,y-330]]);poly(g,M2,[[x,y-410],[x+34,y-330],[x+10,y-330]]);rect(g,M,x-3,y-428,6,20);
 /* facciata a cuspide */
 poly(g,M,[[x-230,y],[x-230,y-190],[x-150,y-290],[x,y-350],[x+150,y-290],[x+230,y-190],[x+230,y]]);
 poly(g,'rgba(255,248,240,.2)',[[x-230,y],[x-230,y-190],[x-150,y-290],[x-120,y-300],[x-120,y]]);poly(g,'rgba(120,70,60,.12)',[[x+120,y],[x+120,y-300],[x+150,y-290],[x+230,y-190],[x+230,y]]);
 for(let q=0;q<5;q++){const bx=x-230+q*92;rect(g,'rgba(120,70,60,.2)',bx-2,y-340+Math.abs(q-2)*45,4,340-Math.abs(q-2)*45)}
 /* portali, finestre e rosone */
 [-192,-100,0,100,192].forEach((o,i)=>{const w=i==2?64:46,h=i==2?132:100;ar(g,M3,x+o-w/2-4,y,w+8,h+6);ar(g,k>.3?'rgb(255,214,150)':'#3a2a2a',x+o-w/2,y,w,h);if(i==2)for(let q=0;q<6;q++)rect(g,'rgba(0,0,0,.25)',x+o-w/2+q*w/6,y-h,1.2,h)});
 [-150,-56,56,150].forEach((o,i)=>{const h=i==1||i==2?96:70;ar(g,M3,x+o-12,y-120,24,h);ar(g,k>.3?LIT:'#3a4a60',x+o-9,y-122,18,h-4)});
 dot(g,M3,x,y-250,26);dot(g,k>.3?LIT:'#4a5a78',x,y-250,20);for(let q=0;q<12;q++)ln(g,M3,1.2,[x,y-250,x+Math.cos(q*.5236)*20,y-250+Math.sin(q*.5236)*20]);dot(g,M3,x,y-250,5);
 /* guglie con statuine */
 [-232,-186,-140,140,186,232].forEach((o,i)=>{const sh=60+hr(i*3)*40,by=o<-150||o>150?y-190-(Math.abs(o)>200?0:30):y-250;rect(g,M2,x+o-4,by-sh,8,sh);poly(g,M,[[x+o-5,by-sh],[x+o,by-sh-28],[x+o+5,by-sh]]);dot(g,M3,x+o,by-sh-2,2.4)});
 for(let q=0;q<9;q++){const gx=x-90+q*22.5,gy=y-312+Math.abs(q-4)*14;rect(g,M2,gx-3,gy-30,6,30);poly(g,M,[[gx-4,gy-30],[gx,gy-52],[gx+4,gy-30]])}
 /* Madonnina */
 const my=y-444;glow(g,x,my,70,'255,214,120',.5+.3*Math.sin(t*2)+k*.2);dot(g,'#f4c84a',x,my,5);rect(g,'#f4c84a',x-1.4,my,2.8,8);
 rect(g,M3,x-240,y-4,480,4);g.restore()});

/* --- Piazza Affari: il palazzo della Borsa e la grande mano di marmo (L.O.V.E.) --- */
PR.mipiazzaaffari=MI((g,x,y,t,a,k)=>{const S='#d7d0c0';
 rect(g,S,x-210,y-150,300,150);rect(g,'rgba(255,255,255,.2)',x-210,y-150,10,150);rect(g,'rgba(0,0,0,.12)',x+70,y-150,20,150);rect(g,'#bdb6a4',x-214,y-158,308,9);
 for(let q=0;q<9;q++){rect(g,'#e6dfce',x-196+q*32,y-140,14,130);rect(g,'rgba(0,0,0,.12)',x-186+q*32,y-140,4,130)}
 rect(g,'#bdb6a4',x-206,y-10,292,10);ar(g,k>.3?'rgb(255,214,150)':'#3a342c',x-72,y-10,54,90);
 for(let q=0;q<3;q++)rect(g,k>.3?LIT:'#3a4650',x-178+q*0,y-130,0,0);
 rect(g,'#4a4438',x-60,y-188,120,20);txt(g,'BORSA',x,y-173,12,'#d9b24a');rect(g,'#bdb6a4',x-214,y-166,308,8);
 /* la mano: pugno chiuso con il dito alzato, su un alto basamento */
 const mx=x+160,H='#f1ece0',Hs='#cfc8b8';rect(g,'#b8b0a0',mx-48,y-60,96,60);rect(g,'rgba(255,255,255,.18)',mx-48,y-60,12,60);rect(g,'#c8c0b0',mx-54,y-66,108,8);rect(g,'#a8a090',mx-54,y-6,108,6);
 rect(g,H,mx-24,y-100,48,38);poly(g,H,[[mx-24,y-100],[mx-34,y-132],[mx-30,y-150],[mx-12,y-150],[mx-8,y-100]]);
 for(let q=0;q<3;q++)el(g,H,mx-22+q*0+(q==0?-6:q==1?2:10)+0,y-108-q*0,0,0);
 rect(g,H,mx-6,y-176,13,76);dot(g,H,mx+.5,y-177,6.5);el(g,H,mx+16,y-122,11,16);el(g,H,mx+24,y-112,8,13);rect(g,Hs,mx-24,y-100,6,38);rect(g,Hs,mx+4,y-176,3,76)});

/* --- Quadrilatero della moda: vetrine illuminate, tende scure, balconi di ferro, manichini --- */
PR.miquadrilatero=MI((g,x,y,t,a,k)=>{const P='#d8cfba',D=Math.max(k,.35);
 [[-290,'#d8cfba'],[-10,'#d2c8b0']].forEach((b,j)=>{const bx=x+b[0];rect(g,b[1],bx,y-210,300,210);rect(g,'rgba(255,255,255,.12)',bx,y-210,8,210);rect(g,'rgba(0,0,0,.12)',bx+280,y-210,20,210);rect(g,'#a89c84',bx-4,y-218,308,9);
  for(let f=0;f<2;f++)for(let q=0;q<4;q++){const wx=bx+16+q*70,wy=y-196+f*66,L=hr(j*9+f*4+q)>.35;rect(g,'#efe6d0',wx-3,wy-3,30,50);rect(g,L?LIT:'#3a4650',wx,wy,24,44);rect(g,'#26282a',wx-6,wy+34,36,2.4);for(let z=0;z<7;z++)rect(g,'#26282a',wx-5+z*5,wy+34,1.2,10)}});
 /* vetrine al piano terra */
 [[-278,'#2a1a2a'],[-188,'#1a2a3a'],[-98,'#2a2a1a'],[2,'#3a1a1a'],[92,'#1a2a2a'],[182,'#2a1a2a']].forEach((v,i)=>{const vx=x+v[0];
  rect(g,'#14141a',vx-4,y-128,88,128);const wg=g.createLinearGradient(0,y-120,0,y-4);wg.addColorStop(0,'rgb(255,236,190)');wg.addColorStop(1,'rgb(255,200,130)');g.fillStyle=wg;g.fillRect(vx,y-118,80,114);
  const dc=['#c8402a','#2a4a8a','#e8c8d0','#1a1a1e','#7a2a5a','#e8e0d0'][i];
  [18,52].forEach((mx,qq)=>{rect(g,dc,vx+mx-7,y-92,14,48);dot(g,'#e8dcc8',vx+mx,y-98,5);rect(g,'#6a6a6e',vx+mx-1,y-44,2,38);rect(g,'#6a6a6e',vx+mx-8,y-8,16,3)});
  rect(g,'#16161c',vx-6,y-134,92,14);rect(g,'rgba(255,255,255,.1)',vx-6,y-134,92,2);txt(g,['ATELIER','MODA','GIOIELLI','ATELIER','MODA','CUOIO'][i],vx+40,y-123,8,'#d9b24a');
  glow(g,vx+40,y-4,70,'255,214,140',.3)});
 for(let q=0;q<6;q++)rect(g,'#d8cfba',x-290+q*90-1,y-134,2,134)});

/* --- Piazza Gae Aulenti: piazza rotonda con fontana a getti, panchine e torri di vetro --- */
PR.migae=MI((g,x,y,t,a,k)=>{
 const tw=(tx,w,h,c,sp)=>{const gr=g.createLinearGradient(tx,0,tx+w,0);gr.addColorStop(0,tn(c[0]));gr.addColorStop(1,tn(c[1]));g.fillStyle=gr;g.fillRect(tx,y-h,w,h);
  for(let r=0;r<h/14;r++)rect(g,'rgba(255,255,255,.07)',tx,y-h+r*14,w,1);for(let r=0;r<h/14;r++)for(let q=0;q<w/12;q++)if(k>.3&&hr(tx+r*7+q)>.55)rect(g,'rgba(255,226,150,'+(.5+.3*hr(q+r))+')',tx+q*12+2,y-h+r*14+3,8,8);
  if(sp){rect(g,'#9aa6b0',tx+w/2-1.6,y-h-sp,3.2,sp);dot(g,'#d8303a',tx+w/2,y-h-sp,2)}};
 tw(x-250,60,230,['#8aa4b8','#6a869a']);tw(x-170,52,290,['#9ab4c6','#7894a8']);tw(x+90,70,260,['#8aa4b8','#5e7a90']);tw(x+176,60,200,['#9ab0c0','#6a869a']);
 tw(x-96,92,340,['#a8c2d4','#7a98ae'],26);
 /* piazza circolare rialzata */
 el(g,'#b8b4aa',x,y-8,230,22);el(g,'#cfcbc0',x,y-12,222,18);el(g,'#a8a49a',x,y-12,170,13);
 for(let q=0;q<14;q++){const an=q*.449;ln(g,'rgba(0,0,0,.14)',1,[x+Math.cos(an)*60,y-12+Math.sin(an)*5,x+Math.cos(an)*214,y-12+Math.sin(an)*17])}
 el(g,'#6a8a9a',x,y-14,60,9);el(g,'#8fb2c2',x,y-15,52,7);
 for(let q=0;q<9;q++){const u=(q-4)/4,hh=34-Math.abs(u)*14+Math.sin(t*3+q)*3;ln(g,'rgba(220,240,255,.8)',2,[x+u*40,y-15,x+u*46,y-15-hh]);dot(g,'rgba(230,245,255,.8)',x+u*46,y-15-hh,2)}
 [-190,-130,130,190].forEach(bx=>{rect(g,'#6a4a2a',x+bx-12,y-26,24,3);rect(g,'#2a2a2e',x+bx-10,y-23,2,8);rect(g,'#2a2a2e',x+bx+8,y-23,2,8)});
 glow(g,x,y-14,110,'150,210,255',k*.4)});

/* --- Bosco Verticale: due torri con alberi sui balconi --- */
PR.mibosco=MI((g,x,y,t,a,k)=>{
 [[-110,66,330],[24,56,236]].forEach((T,j)=>{const tx=x+T[0],w=T[1],h=T[2];rect(g,'#aab2ba',tx,y-h,w,h);rect(g,'rgba(255,255,255,.18)',tx,y-h,6,h);rect(g,'rgba(0,0,0,.12)',tx+w-10,y-h,10,h);
  for(let f=0;f<h/22;f++){const by=y-h+f*22+14,off=(f%2?-3:3);
   rect(g,'#d8dce0',tx-6,by,w+12,3);for(let q=0;q<w/12;q++)if(k>.3&&hr(f*5+q+j*11)>.45)rect(g,'rgba(255,226,150,.85)',tx+q*12+3,by-12,7,9);else rect(g,'rgba(60,80,100,.5)',tx+q*12+3,by-12,7,9);
   for(let q=0;q<3;q++){const px=tx-6+((f*3+q*2)%3)*(w+12)/3+off,sw=Math.sin(t*.9+f+q)*1;el(g,['#3f7a3a','#4a8a3e','#2f6a34'][(f+q)%3],px+8+sw,by-9,9+hr(f+q)*5,7+hr(q+f*2)*5);if(hr(f*9+q)>.8)dot(g,'#e8707a',px+8,by-12,2)}}
  rect(g,'#7a8a96',tx+w/2-1,y-h-22,2,22)});
 rect(g,'#6a6e74',x-116,y-6,200,6)});

/* --- Pirellone: grattacielo di Gio Ponti, facciata di vetro a linee orizzontali, angoli affusolati --- */
PR.mipirellone=MI((g,x,y,t,a,k)=>{const h=320;
 poly(g,'#8d9eae',[[x-38,y],[x-38,y-h+30],[x-20,y-h],[x+20,y-h],[x+38,y-h+30],[x+38,y]]);
 poly(g,'#6a7c8c',[[x+20,y-h],[x+38,y-h+30],[x+38,y],[x+26,y],[x+26,y-h+24]]);poly(g,'#aebccb',[[x-38,y-h+30],[x-20,y-h],[x-26,y-h+24],[x-26,y]]);
 for(let r=0;r<h/12;r++){rect(g,'rgba(40,56,70,.45)',x-26,y-h+30+r*9.2,52,1.4);for(let q=0;q<8;q++)if(k>.3&&hr(r*5+q)>.5)rect(g,'rgba(255,226,150,.9)',x-24+q*6.4,y-h+32+r*9.2,5,6)}
 rect(g,'#6a7c8c',x-30,y-h-8,60,8);rect(g,'#4a5a68',x-2,y-h-26,4,18);dot(g,'#d8303a',x,y-h-27,2);rect(g,'#4a5a68',x-44,y-6,88,6)});

/* --- Stazione Centrale: facciata monumentale, cavalli alati, grande orologio e tettoia di ferro e vetro --- */
PR.mistazione=MI((g,x,y,t,a,k)=>{const P='#cfc4ae';
 for(let q=0;q<4;q++){const ax=x-150+q*100;g.strokeStyle=tn('#3a4650');g.lineWidth=3;g.beginPath();g.ellipse(ax,y-60,52,170,0,Math.PI,0);g.stroke();g.fillStyle=k>.3?'rgba(170,200,230,.5)':'rgba(120,150,180,.5)';g.beginPath();g.ellipse(ax,y-60,48,166,0,Math.PI,0);g.fill()}
 rect(g,'#3a4650',x-210,y-70,420,4);
 rect(g,P,x-300,y-180,600,180);rect(g,'rgba(255,248,230,.16)',x-300,y-180,16,180);rect(g,'rgba(0,0,0,.12)',x+270,y-180,30,180);rect(g,'#b2a68e',x-306,y-190,612,12);rect(g,'#b2a68e',x-306,y-96,612,6);
 for(let q=0;q<11;q++){if(q==5)continue;const px=x-286+q*52;rect(g,'#ddd2ba',px,y-176,18,170);rect(g,'rgba(0,0,0,.12)',px+12,y-176,5,170);ar(g,k>.3?LIT:'#3a4650',px+22,y-110,16,56)}
 ar(g,'#a89c84',x-92,y,184,150);ar(g,k>.2?'rgb(255,216,150)':'#2e2a28',x-82,y,164,142);for(let q=0;q<9;q++)rect(g,'rgba(60,40,20,.5)',x-82+q*18,y-130,2,130);
 dot(g,'#f4efe0',x,y-176,22);dot(g,'#2a2a2e',x,y-176,19);dot(g,'#f4efe0',x,y-176,17.4);for(let q=0;q<12;q++)ln(g,'#2a2a2e',1,[x+Math.cos(q*.5236)*14,y-176+Math.sin(q*.5236)*14,x+Math.cos(q*.5236)*16.6,y-176+Math.sin(q*.5236)*16.6]);ln(g,'#2a2a2e',2,[x,y-176,x,y-190]);ln(g,'#2a2a2e',2,[x,y-176,x+9,y-172]);
 /* cavalli alati */
 [-250,250].forEach((o,i)=>{const hx=x+o,br='#6b6a52';rect(g,'#b2a68e',hx-30,y-228,60,38);rect(g,'#c4b89e',hx-34,y-232,68,6);
  el(g,br,hx,y-248,24,12);poly(g,br,[[hx+12,y-250],[hx+20,y-280],[hx+34,y-286],[hx+30,y-272],[hx+24,y-250]]);rect(g,br,hx-20,y-244,5,16);rect(g,br,hx+10,y-244,5,16);
  poly(g,br,[[hx-10,y-252],[hx-34,y-290],[hx-18,y-298],[hx-2,y-258]]);poly(g,'#8a8970',[[hx-12,y-256],[hx-30,y-286],[hx-20,y-290],[hx-6,y-258]])});
 rect(g,'#8a8270',x-306,y-6,612,6)});

/* --- Binario 21: il vagone chiuso, il lungo muro, la scritta INDIFFERENZA --- */
PR.mibinario21=MI((g,x,y,t,a,k)=>{
 rect(g,'#7a7a78',x-190,y-120,380,120);rect(g,'rgba(255,255,255,.07)',x-190,y-120,380,6);rect(g,'rgba(0,0,0,.14)',x-190,y-20,380,20);for(let q=0;q<14;q++)rect(g,'rgba(0,0,0,.1)',x-190+q*27,y-120,1.4,120);
 rect(g,'#222428',x-96,y-116,192,28);txt(g,'INDIFFERENZA',x,y-95,17,'#e8e8e4','bold');
 rect(g,'#5a5a5a',x-190,y+2,380,3);rect(g,'#5a5a5a',x-190,y+16,380,3);for(let q=0;q<24;q++)rect(g,'rgba(50,40,30,.5)',x-186+q*16,y+5,5,11);
 rect(g,'#4a4540',x-90,y-76,170,66);rect(g,'rgba(255,255,255,.07)',x-90,y-76,170,4);for(let q=0;q<10;q++)rect(g,'rgba(0,0,0,.2)',x-84+q*17,y-76,1.4,66);
 rect(g,'#3a3632',x-26,y-70,52,58);rect(g,'rgba(0,0,0,.4)',x-1,y-70,2,58);rect(g,'#2a2622',x-90,y-14,170,4);[-72,-52,52,72].forEach(w=>{dot(g,'#1c1c20',x+w,y-6,8);dot(g,'#8a8a8e',x+w,y-6,3)});
 [-160,160].forEach(o=>{rect(g,'#2a2c30',x+o-1.5,y-150,3,150);rect(g,'#2a2c30',x+o-6,y-154,12,5);rect(g,'rgb(236,244,255)',x+o-5,y-148,10,6);glow(g,x+o,y-142,90,'230,240,255',.45)})});

/* --- Il varco finale: un treno in sosta e, in fondo al binario, la luce di un altro mondo --- */
PR.mivarco=MI((g,x,y,t,a,k)=>{
 rect(g,'#5a5a5a',x-260,y+2,520,3);rect(g,'#5a5a5a',x-260,y+16,520,3);for(let q=0;q<33;q++)rect(g,'rgba(50,40,30,.5)',x-256+q*16,y+5,5,11);
 for(let i=0;i<3;i++){const cx=x-250+i*130;rect(g,'#3a4a5e',cx,y-90,126,76);rect(g,'rgba(255,255,255,.14)',cx,y-90,126,4);rect(g,'#c8402a',cx,y-34,126,6);
  for(let q=0;q<5;q++)rect(g,k>.3?'rgb(255,236,190)':'#9ab0c0',cx+8+q*23,y-76,16,26);[18,100].forEach(w=>{dot(g,'#1c1c20',cx+w,y-8,8);dot(g,'#8a8a8e',cx+w,y-8,3)})}
 poly(g,'#3a4a5e',[[x+140,y-90],[x+190,y-90],[x+214,y-52],[x+214,y-14],[x+140,y-14]]);poly(g,'#aac0d4',[[x+150,y-80],[x+184,y-80],[x+200,y-56],[x+150,y-56]]);dot(g,'#fff4c0',x+210,y-30,4);glow(g,x+214,y-30,70,'255,244,200',.5);
 /* la luce del varco, in fondo alla banchina */
 const lx=x+300,pu=.8+.2*Math.sin(t*2);const rg=g.createRadialGradient(lx,y-90,4,lx,y-90,150);rg.addColorStop(0,'rgba(255,255,255,'+pu+')');rg.addColorStop(.3,'rgba(150,220,255,'+(.6*pu)+')');rg.addColorStop(.7,'rgba(140,100,255,'+(.25*pu)+')');rg.addColorStop(1,'rgba(120,60,255,0)');g.fillStyle=rg;g.fillRect(lx-150,y-240,300,300);
 el(g,'rgba(255,255,255,.9)',lx,y-90,16,56)});

})();
