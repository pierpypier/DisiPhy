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

