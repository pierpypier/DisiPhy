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

/* ---------- elementi per Palermo · Da Ballarò a Monte Pellegrino (mondi/palermo.js) ---------- */
/* Nomi che iniziano per "pl". Hanno la loro luce (nf di Palermo): la giornata scorre da sinistra a destra,
   dalla mattina presto di Ballarò alla notte della grotta di Santa Rosalia, e usano la variabile globale AVCAM
   come gli altri mondi "lunghi". Non toccano nulla di quanto esiste prima di questo blocco. */
(function(){
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,pa=A.pa,tn=A.tn,txt=A.txt,glow=A.glow,cl=A.cl;
const {ln}=PR._rm;
const {bk,merl}=PR._mi;
const LIT='rgb(255,226,150)';
/* luce di Palermo: [posizione nel mondo, buio da 0 (giorno) a 1 (notte)] */
const NF=[[0,.14],[1700,0],[10200,0],[10950,.06],[11900,.2],[12450,.4],[13300,.6],[13950,.78],[14900,.93],[15600,1]];
const nf=wx=>{if(wx<=NF[0][0])return NF[0][1];for(let i=1;i<NF.length;i++)if(wx<=NF[i][0]){const a=NF[i-1],b=NF[i];return a[1]+(b[1]-a[1])*(wx-a[0])/(b[0]-a[0])}return 1};
const PL=f=>(g,x,y,t,a)=>{A.setDK(nf(x+AVCAM));f(g,x,y,t,a,A.getDK())};
/* riusa oggetti già esistenti (lampioni, targhe, palme...) con la luce di Palermo */
const PW=n=>(g,x,y,t,a)=>{const d=nf(x+AVCAM),sv=AVCAM;AVCAM=6700+2400*d-x;try{PR[n](g,x,y,t,a)}finally{AVCAM=sv}};
[['pllamp','avlamp'],['pltarga','avtarga'],['plalbero','avalbero'],['plpalma','avpalma'],['pltavolo','avtavolo'],['plape','avape'],['plagave','avagave'],['plficodindia','avfico'],['plgelato','avgelato'],['plfestoni','avfestoni'],['plmuretto','avmuretto'],['plbici','avbici']].forEach(p=>PR[p[0]]=PW(p[1]));

/* ---- piccoli attrezzi comuni ---- */
const lit=(k,i)=>k>.3&&hr(i)>.35;
const win=(g,k,x,y,w,h,i)=>{ar(g,'#2a2e3a',x,y,w,h);rect(g,'rgba(160,200,230,.22)',x+2,y-h+w/2,w/3,h-w/2-2);if(lit(k,i)){ar(g,LIT,x+1.5,y-1.5,w-3,h-3);glow(g,x+w/2,y-h/2,22,'255,214,120',.3*k)}};
const shade=(g,x,y,r)=>{g.fillStyle='rgba(20,0,0,.17)';g.beginPath();g.arc(x,y,r,-1.3,0);g.quadraticCurveTo(x+r*.62,y-r*.55,x+r*.27,y-r*.96);g.fill();g.fillStyle='rgba(255,255,255,.2)';g.beginPath();g.ellipse(x-r*.4,y-r*.5,r*.14,r*.34,.55,0,7);g.fill()};
const dome=(g,x,y,r,c)=>{g.fillStyle=tn(c);g.beginPath();g.arc(x,y,r,Math.PI,0);g.closePath();g.fill();shade(g,x,y,r)};
const mdome=(g,x,y,r,pal)=>{pal=pal||['#e8c030','#2f8a5a','#f4f0e0','#2a6aa8'];dome(g,x,y,r,'#2a7a6a');const n=6;
 for(let j=0;j<n;j++){const yy=y-4-j*(r/n)*.95,hw=Math.sqrt(Math.max(0,r*r-(yy-y)*(yy-y)))-5;for(let q=-hw;q<hw;q+=7){const px=x+q+(j%2)*3.5;if(Math.abs(px-x)>hw+1)continue;poly(g,pal[((j+Math.round(q/7))%4+4)%4],[[px,yy-3.4],[px+3.4,yy],[px,yy+3.4],[px-3.4,yy]])}}
 shade(g,x,y,r)};
const lant=(g,x,y,h,c)=>{rect(g,c||'#d6c096',x-5,y-h,10,h);dome(g,x,y-h,5,'#b8a07a');rect(g,'#6a5a3a',x-.8,y-h-14,1.6,10);rect(g,'#6a5a3a',x-4,y-h-10,8,1.6)};
const flag=(g,x,y,t)=>{rect(g,'#5a4a3a',x,y-48,1.6,48);const w=Math.sin(t*3)*2;poly(g,'#d8302a',[[x+1.6,y-48],[x+34,y-48+w],[x+1.6,y-26]]);poly(g,'#f2c82a',[[x+34,y-48+w],[x+34,y-26+w],[x+1.6,y-26]])};
const stat=(g,x,y,s,c)=>{s=s||1;c=c||'#f0ece0';rect(g,c,x-3*s,y-12*s,6*s,12*s);dot(g,c,x,y-15*s,3*s);rect(g,c,x-5*s,y-12*s,10*s,2*s)};
const fruit=(g,x,y,c,n,r)=>{for(let i=0;i<n;i++){const row=Math.floor((Math.sqrt(8*i+1)-1)/2),pos=i-row*(row+1)/2;dot(g,c,x+(pos-row/2)*r*2,y-(row)*r*1.7,r)}};
PR._pl={nf,PL,PW,LIT,win,dome,mdome,shade,lant,flag,stat,fruit};

/* =========================== ZONA 1 · Ballarò =========================== */
PR.plballaro=PL((g,x,y,t,a,k)=>{
 const cols=['#e8505a','#2f8fc8','#f2a62a'];
 [[-175,'#8a4a2a','#d8b090',1],[0,'#e8e0d0','#c8906a',-1]].forEach((v,i)=>fig(g,x+v[0]+8,y-6,t+i,{f:v[3],skin:v[2],top:v[1],bot:'#3a3a40',hair:i?'#e8e0d8':'#2a1a10',acc:(g2,b)=>{el(g2,'#5a1a1a',7,-96+b,2.6,3.4);if(i==0)rect(g2,'#e8e0d0',-12,-58+b,24,14)}}));
 [-175,0,175].forEach((o,i)=>{const sx=x+o,col=cols[i];
  rect(g,'#5a4430',sx-62,y-152,4,152);rect(g,'#5a4430',sx+58,y-136,4,136);
  for(let q=0;q<8;q++)poly(g,q%2?'#f4efe0':col,[[sx-66+q*16.5,y-152+q*2.2],[sx-49.5+q*16.5,y-152+(q+1)*2.2],[sx-49.5+q*16.5,y-130+(q+1)*2.2],[sx-66+q*16.5,y-130+q*2.2]]);
  for(let q=0;q<8;q++)dot(g,q%2?'#f4efe0':col,sx-58+q*16.5,y-129+q*2.2,4);
  rect(g,'#7a5a3a',sx-64,y-48,128,7);rect(g,'#6a4a30',sx-62,y-41,124,41);for(let q=1;q<5;q++)rect(g,'rgba(0,0,0,.2)',sx-62+q*25,y-41,1.4,41);
  if(i==0){[['#d8402a',-44],['#e8a82a',-18],['#8a5a2a',8],['#3a8a3a',34]].forEach(s=>{poly(g,s[0],[[sx+s[1]-14,y-48],[sx+s[1]+14,y-48],[sx+s[1]+8,y-68],[sx+s[1]-8,y-68]]);el(g,'rgba(255,255,255,.25)',sx+s[1],y-68,8,2.6)});
   for(let q=0;q<4;q++){ln(g,'#8a2a1a',1.4,[sx+46,y-126,sx+46,y-104+q*2]);for(let r=0;r<5;r++)el(g,'#d8301e',sx+46+(r%2?2.4:-2.4),y-122+r*4,2,3.2)}}
  if(i==1){rect(g,'#dfeaf0',sx-58,y-54,116,7);el(g,'#7a8a98',sx-6,y-62,42,9);poly(g,'#8a9aa8',[[sx+34,y-62],[sx+54,y-72],[sx+54,y-52]]);poly(g,'#6a7a88',[[sx-48,y-62],[sx-92,y-66],[sx-92,y-64]]);el(g,'#b8c4cc',sx-6,y-58,36,3);dot(g,'#a82a2a',sx-44,y-62,4);dot(g,'#12161a',sx-40,y-65,1.6);
   for(let q=0;q<3;q++){el(g,'#c8d0d8',sx+30+q*8,y-56,5,2.4)}dot(g,'#f2d82a',sx-30,y-56,3.4);dot(g,'#f2d82a',sx+4,y-55,3.4)}
  if(i==2){fruit(g,sx-30,y-50,'#f08a1a',10,4.6);fruit(g,sx+26,y-50,'#f2d82a',6,4.6);for(let q=0;q<4;q++)dot(g,['#d8302a','#f08a1a'][q%2],sx-46+q*30,y-52,4.4);rect(g,'#8a5a30',sx-58,y-30,116,18);for(let q=0;q<9;q++)dot(g,'#f08a1a',sx-52+q*13,y-24+(q%2)*3,4.4)}
  rect(g,'#2a2e2a',sx-14,y-32+(i%2)*2,28,16);txt(g,['€ 2','€ 18','€ 1,5'][i],sx,y-20+(i%2)*2,9,'#f4f4ee');
  if(k>.05)glow(g,sx,y-120,60,'255,210,120',.3*k)});
 for(let i=0;i<3;i++)dot(g,'rgba(255,255,255,'+(.1+.1*Math.sin(t+i))+')',x-190+i*130+Math.sin(t*.8+i)*6,y-176-((t*8+i*20)%40),5+i)});

PR.plcarmine=PL((g,x,y,t,a,k)=>{
 rect(g,'#d2b98a',x-173,y-230,46,230);rect(g,'rgba(0,0,0,.12)',x-139,y-230,12,230);
 [[-170,150],[-170,90]].forEach((s,i)=>{rect(g,'#c8ae7e',x+s[0]-2,y-s[1]-30,40,4);ar(g,'#2a2a30',x+s[0]+8,y-s[1],20,36)});
 ar(g,'#2a2a30',x-162,y-196,20,34);rect(g,'#c8ae7e',x-176,y-232,52,5);mdome(g,x-150,y-232,24);lant(g,x-150,y-256,14);
 rect(g,'#d9c39a',x-60,y-236,120,66);for(let i=0;i<5;i++)win(g,k,x-50+i*22,y-176,10,34,i+3);rect(g,'#c8ae7e',x-64,y-240,128,6);
 mdome(g,x,y-240,66);lant(g,x,y-306,26);
 rect(g,'#d9c39a',x-100,y-170,200,170);rect(g,'rgba(0,0,0,.1)',x+68,y-170,32,170);rect(g,'#e8d8b4',x-100,y-170,14,170);rect(g,'#e8d8b4',x+86,y-170,14,170);
 rect(g,'#c4ab7e',x-108,y-178,216,9);for(let i=0;i<9;i++)rect(g,'#e0cc9e',x-98+i*24,y-188,6,10);
 ar(g,'#3a2a1a',x-22,y,44,86);ar(g,'rgba(255,210,120,.45)',x-18,y-3,36,78);g.strokeStyle=tn('#e8d8b4');g.lineWidth=3;g.beginPath();g.arc(x,y-100,34,Math.PI,0);g.stroke();rect(g,'#e8d8b4',x-34,y-102,68,3);
 [-62,62].forEach(o=>{ar(g,'#6a5a46',x+o-12,y-80,24,46);stat(g,x+o,y-40,1.5);ar(g,'#6a5a46',x+o-12,y-150,24,46);stat(g,x+o,y-110,1.5)});
 el(g,'#2a2a30',x,y-140,18,12);dot(g,'#b8402a',x,y-140,8);rect(g,'#e8d8b4',x-1,y-148,2,16);rect(g,'#e8d8b4',x-8,y-141,16,2);
 for(let q=0;q<5;q++){const c=['#e8b02a','#d8402a','#f4f0e0'][q%3];dot(g,c,x-40+q*20,y+6,2)}});

PR.plfritto=PL((g,x,y,t,a,k)=>{
 rect(g,'#4aa0a8',x-86,y-152,172,104);rect(g,'rgba(0,0,0,.14)',x+60,y-152,26,104);rect(g,'#2a2e2a',x-72,y-142,66,52);rect(g,'#5a4a3a',x-74,y-144,70,3);
 txt(g,'PANELLE',x-39,y-124,11,'#f4f4ee');txt(g,'CROCCHÈ 1€',x-39,y-110,9,'#ffe27a');txt(g,'SFINCIONE',x-39,y-97,9,'#f4f4ee');
 fig(g,x+36,y-8,t,{f:-1,skin:'#d8a078',top:'#f4f0e8',bot:'#3a3a40',hair:'#2a1a10',acc:(g2,b)=>{rect(g2,'#f4f4ee',-9,-118+b,18,7);rect(g2,'#f4f4ee',-13,-70+b,26,30)}});
 for(let q=0;q<8;q++)poly(g,q%2?'#f4efe0':'#c8302a',[[x-98+q*26,y-176+q*1.5],[x-72+q*26,y-176+(q+1)*1.5],[x-72+q*26,y-152+(q+1)*1.5],[x-98+q*26,y-152+q*1.5]]);
 for(let q=0;q<8;q++)dot(g,q%2?'#f4efe0':'#c8302a',x-85+q*26,y-151+q*1.5,6);
 rect(g,'#8a4a2a',x-92,y-50,184,50);for(let q=0;q<10;q++)rect(g,q%2?'#a05a34':'#7a3e22',x-90+q*18,y-46,16,42);rect(g,'#d8d0c0',x-96,y-54,192,6);
 el(g,'#2a2a2e',x-44,y-58,34,7);el(g,'#e8a82a',x-44,y-60,28,4);for(let q=0;q<4;q++)dot(g,'#f2c04a',x-56+q*8,y-61,3);
 for(let i=0;i<6;i++){const u=((t*.5+i*.17)%1);dot(g,'rgba(255,255,255,'+(.35*(1-u))+')',x-44+Math.sin(t*2+i)*8,y-70-u*70,4+u*6)}
 for(let q=0;q<5;q++)rect(g,'#e8b02a',x+8+q*9,y-60,8,4);poly(g,'#f4ecd8',[[x+20,y-62],[x+34,y-62],[x+32,y-84],[x+22,y-84]]);dot(g,'#d8a040',x+27,y-66,3);
 poly(g,'#f4ecd8',[[x+50,y-62],[x+66,y-62],[x+62,y-82],[x+54,y-82]]);for(let q=0;q<3;q++)dot(g,'#c8902a',x+54+q*4,y-66,3);
 if(k>.05){glow(g,x-40,y-130,70,'255,210,120',.35*k);glow(g,x+40,y-140,50,'255,210,120',.25*k)}});

/* =========================== ZONA 2 · Normanni =========================== */
PR.plnormanni=PL((g,x,y,t,a,k)=>{
 rect(g,'#d2ae5c',x-250,y-150,500,150);rect(g,'rgba(0,0,0,.1)',x+210,y-150,40,150);
 rect(g,'#c9a850',x-250,y-300,80,300);rect(g,'rgba(0,0,0,.14)',x-190,y-300,20,300);merl(g,'#c9a850',x-252,y-300,84,6,12);
 [0,1].forEach(i=>win(g,k,x-232+i*34,y-250,20,60,i+1));win(g,k,x-224,y-170,22,46,5);flag(g,x-212,y-312,t);
 rect(g,'#c9a850',x+190,y-212,60,212);merl(g,'#c9a850',x+189,y-212,62,5,10);win(g,k,x+205,y-170,16,40,7);win(g,k,x+205,y-110,16,40,8);
 rect(g,'#dcba68',x-130,y-232,280,232);rect(g,'#c8a458',x-130,y-232,280,6);
 for(let lv=0;lv<3;lv++){const yy=y-62-lv*56;rect(g,'#c8a458',x-130,yy+4,280,5);for(let i=0;i<7;i++){const ax=x-124+i*39.4;ar(g,'#2e2418',ax,yy,26,46);if(lit(k,lv*7+i))ar(g,LIT,ax+2,yy-2,22,42);else rect(g,'rgba(120,150,170,.16)',ax+3,yy-30,6,26);rect(g,'#ecd69a',ax+28,yy-44,4,44)}}
 for(let i=0;i<7;i++){const ax=x-124+i*39.4;ar(g,'#2a2018',ax,y,26,58)}
 rect(g,'#c9a850',x-170,y-176,40,176);rect(g,'#c9a850',x+150,y-176,40,176);win(g,k,x-160,y-108,14,40,11);win(g,k,x-160,y-40,14,40,12);win(g,k,x+160,y-108,14,40,13);win(g,k,x+160,y-40,14,40,14);merl(g,'#c9a850',x-171,y-176,42,3,10);merl(g,'#c9a850',x+149,y-176,42,3,10)});

PR.plcappella=PL((g,x,y,t,a,k)=>{
 rect(g,'#d6b768',x-170,y-250,340,250);rect(g,'rgba(0,0,0,.1)',x+140,y-250,30,250);rect(g,'#c4a45a',x-170,y-254,340,8);
 for(let i=0;i<2;i++)[-130,100].forEach(o=>{ar(g,'#c4a45a',x+o,y-90,30,96);ar(g,'#b49448',x+o+4,y-92,22,80)});
 [-130,100].forEach(o=>ar(g,'#c4a45a',x+o,y-190,30,70));
 ar(g,'#8a6a2a',x-76,y,152,214);ar(g,'#e8b84a',x-70,y,140,208);
 for(let q=0;q<150;q++){const px=x-68+hr(q*3+1)*136,py=y-8-hr(q*5+2)*190;dot(g,['#f2cc6a','#d89a30','#fadc8a','#b87a28'][q%4],px,py,2+hr(q)*2)}
 g.fillStyle='rgba(120,70,10,.3)';g.beginPath();g.ellipse(x,y-140,26,34,0,0,7);g.fill();
 dot(g,'#fff0a0',x,y-156,17);dot(g,'#f0c8a0',x,y-156,10);dot(g,'#4a2a1a',x-3,y-158,1.2);dot(g,'#4a2a1a',x+3,y-158,1.2);
 poly(g,'#2a4a9a',[[x-12,y-142],[x+12,y-142],[x+44,y-120],[x+44,y-112],[x+14,y-122],[x+16,y-70],[x-16,y-70],[x-14,y-122],[x-44,y-112],[x-44,y-120]]);
 rect(g,'#6a3a1a',x-70,y-196,140,10);for(let i=0;i<13;i++){poly(g,i%2?'#a8642a':'#6a3a1a',[[x-68+i*10.5,y-186],[x-58+i*10.5,y-186],[x-63+i*10.5,y-174]]);dot(g,'#f2cc6a',x-63+i*10.5,y-190,1.6)}
 [-62,56].forEach(o=>{rect(g,'#7a7a82',x+o,y-170,7,170);rect(g,'#c8b078',x+o-2,y-172,11,6)});
 rect(g,'#b8402a',x-76,y-14,152,14);for(let i=0;i<10;i++){rect(g,i%2?'#3a8a5a':'#f4f0e0',x-72+i*15,y-12,10,10)}
 glow(g,x,y-110,110,'255,200,90',.3+.2*k);
 [-36,36].forEach((o,i)=>{ln(g,'#6a5a3a',1,[x+o,y-196,x+o,y-176]);el(g,'#d8d8dc',x+o,y-170,5,8);if(k>.2)glow(g,x+o,y-170,22,'255,230,160',.4*k)})});

PR.pleremiti=PL((g,x,y,t,a,k)=>{
 rect(g,'#d6b26a',x-132,y-92,264,92);rect(g,'rgba(0,0,0,.12)',x+104,y-92,28,92);rect(g,'#c4a05a',x-134,y-94,268,6);
 for(let i=0;i<6;i++)win(g,k,x-114+i*40,y-26,9,44,i+20);
 [[-96,26],[-48,34],[4,30],[52,24],[92,22]].forEach(s=>{const r=s[1];rect(g,'#d0ac62',x+s[0]-r*.85,y-92-14,r*1.7,15);dome(g,x+s[0],y-106,r,'#c4452f');rect(g,'#a8382a',x+s[0]-r*.2,y-106-r-6,r*.4,6)});
 rect(g,'#d0ac62',x+112,y-176,36,110);rect(g,'rgba(0,0,0,.12)',x+138,y-176,10,110);ar(g,'#2a2018',x+120,y-132,8,28);ar(g,'#2a2018',x+132,y-132,8,28);dome(g,x+130,y-176,15,'#c4452f');
 g.fillStyle=tn('#3a5a2a');for(let q=0;q<3;q++){g.beginPath();g.ellipse(x-168+q*10,y-90-q*8,34,26,0,0,7);g.fill()}rect(g,'#5a3e24',x-162,y-60,6,60);dot(g,'#4a7a32',x-160,y-96,36);dot(g,'#5a8a3a',x-176,y-84,24);dot(g,'#5a8a3a',x-144,y-82,26);
 for(let q=0;q<9;q++)dot(g,'#f08a1a',x-190+((q*17)%64),y-110+((q*11)%46),3.4);
 for(let q=0;q<46;q++){const px=x+34+hr(q*3)*80,py=y-12-hr(q*7)*70;dot(g,hr(q)>.5?'#c8307a':'#e0509a',px,py,3+hr(q+4)*3)}
 rect(g,'#c8b080',x-100,y-14,200,14);for(let i=0;i<14;i++)rect(g,'#e4d4aa',x-96+i*14.4,y-26,5,12)});

PR.plportanuova=PL((g,x,y,t,a,k)=>{
 rect(g,'#c8aa70',x-250,y-120,140,120);rect(g,'#c8aa70',x+110,y-120,140,120);merl(g,'#c8aa70',x-251,y-120,142,8,12);merl(g,'#c8aa70',x+109,y-120,142,8,12);
 win(g,k,x-200,y-70,14,34,31);win(g,k,x+186,y-70,14,34,32);
 rect(g,'#cdb078',x-110,y-232,220,232);rect(g,'rgba(0,0,0,.12)',x+78,y-232,32,232);rect(g,'#b8985a',x-114,y-236,228,8);
 g.save();g.beginPath();g.moveTo(x-124,y-236);g.lineTo(x+124,y-236);g.lineTo(x+62,y-300);g.lineTo(x-62,y-300);g.closePath();g.clip();rect(g,'#2f7a5a',x-124,y-300,248,64);
 for(let r=0;r<6;r++)for(let q=-1;q<16;q++){const px=x-130+q*17+(r%2)*8.5,py=y-240-r*11;poly(g,(q+r)%2?'#e8c030':'#3a9a74',[[px,py+4],[px+8.5,py-4],[px+17,py+4],[px+8.5,py+12]])}
 g.restore();
 shade(g,x+62,y-300,2);rect(g,'#b8985a',x-3,y-312,6,14);dot(g,'#f2c82a',x,y-316,5);
 ar(g,'#1e160e',x-46,y,92,160);ar(g,'#d8d0b8',x-40,y,80,154);g.fillStyle=tn('#bcb49a');g.beginPath();g.moveTo(x-40,y);g.lineTo(x-14,y-110);g.lineTo(x+14,y-110);g.lineTo(x+40,y);g.fill();
 rect(g,'#a89a7a',x-46,y-166,92,6);
 [-70,70].forEach((o,i)=>{rect(g,'#8a7a5a',x+o-14,y-70,28,70);poly(g,'#4a3a2a',[[x+o-9,y-70],[x+o+9,y-70],[x+o+7,y-122],[x+o-7,y-122]]);dot(g,'#4a3a2a',x+o,y-130,8);poly(g,'#c8402a',[[x+o-9,y-134],[x+o+9,y-134],[x+o+6,y-142],[x+o-6,y-142]])});
 for(let i=0;i<2;i++)for(let j=0;j<4;j++)win(g,k,x-88+j*50,y-168-i*36,14,26,40+i*4+j)});

/* =========================== ZONA 3 · Cattedrale e Cassaro =========================== */
PR.plcattedrale=PL((g,x,y,t,a,k)=>{
 rect(g,'#cfae6a',x-70,y-306,140,66);for(let i=0;i<5;i++)win(g,k,x-54+i*22,y-250,10,34,i+50);rect(g,'#b8964a',x-76,y-310,152,8);
 dome(g,x,y-310,78,'#c8a050');for(let i=-3;i<=3;i++)ln(g,'rgba(90,60,10,.35)',1.4,[x+i*10,y-312-Math.sqrt(Math.max(0,78*78-i*i*100))*.98,x+i*18,y-312]);
 rect(g,'#b8964a',x-4,y-402,8,16);dot(g,'#f2c82a',x,y-406,5);
 rect(g,'#d9b672',x-190,y-190,380,190);rect(g,'rgba(0,0,0,.1)',x+160,y-190,30,190);rect(g,'#b8964a',x-190,y-196,380,8);
 for(let i=0;i<14;i++)poly(g,'#e4c88a',[[x-180+i*27,y-196],[x-172+i*27,y-196],[x-176+i*27,y-224]]);
 [-1,1].forEach(s=>{const tx=s<0?x-270:x+190;rect(g,'#cfa860',tx,y-274,80,274);rect(g,'rgba(0,0,0,.14)',tx+(s<0?60:0),y-274,20,274);merl(g,'#cfa860',tx-1,y-274,82,6,12);
  [0,1].forEach(i=>pa(g,'#2a2018',tx+14+i*28,y-206,16,48));pa(g,'#2a2018',tx+31,y-110,18,44);rect(g,'#b8964a',tx,y-150,80,5);
  [0,80].forEach(o=>{rect(g,'#c49c52',tx+o-3,y-292,6,22);poly(g,'#b8964a',[[tx+o-5,y-292],[tx+o+5,y-292],[tx+o,y-314]])})});
 [-150,150].forEach((o,i)=>{pa(g,'#2a2018',x+o-11,y-80,22,70);if(lit(k,i+60))pa(g,LIT,x+o-8,y-84,16,62)});
 rect(g,'#e8d4a0',x-114,y-150,228,16);for(let i=0;i<14;i++)poly(g,'#c49c52',[[x-110+i*16,y-142],[x-102+i*16,y-150],[x-94+i*16,y-142],[x-102+i*16,y-134]]);
 poly(g,'#d9b672',[[x-118,y-150],[x+118,y-150],[x,y-250]]);pa(g,'#2a2018',x-12,y-160,24,56);if(k>.3)pa(g,LIT,x-9,y-163,18,50);
 [-118,118].forEach(o=>{rect(g,'#e8d4a0',x+o-6,y-206,12,60);poly(g,'#e8d4a0',[[x+o-8,y-206],[x+o+8,y-206],[x+o,y-246]])});rect(g,'#e8d4a0',x-2,y-262,4,14);
 for(let i=0;i<3;i++){const ax=x-96+i*66;pa(g,'#1e160e',ax,y,60,128);pa(g,'rgba(255,214,130,'+(.22+.4*k)+')',ax+7,y-4,46,112)}
 [-100,-34,32,98].forEach(o=>{rect(g,'#f0e2b8',x+o-5,y-130,10,130)})});

PR.pltombe=PL((g,x,y,t,a,k)=>{
 rect(g,'#cdb078',x-140,y-250,280,250);rect(g,'rgba(0,0,0,.1)',x+110,y-250,30,250);rect(g,'#b8985a',x-140,y-254,280,8);
 ar(g,'#8a7048',x-98,y,196,212);ar(g,'#241c18',x-90,y,180,204);rect(g,'#3a2e28',x-90,y-16,180,16);
 g.fillStyle='rgba(255,230,160,.1)';g.beginPath();g.moveTo(x-90,y-190);g.lineTo(x-30,y-190);g.lineTo(x+60,y-16);g.lineTo(x-10,y-16);g.fill();
 [[-50,0,'#7a2a3a'],[44,0,'#cdc8c0']].forEach((s,i)=>{const w=i?44:84,cx=x+s[0];
  poly(g,s[2],[[cx-w/2,y-34],[cx+w/2,y-34],[cx+w/2-4,y-54],[cx-w/2+4,y-54]]);poly(g,'rgba(255,255,255,.2)',[[cx-w/2+4,y-54],[cx+w/2-4,y-54],[cx+w/2-10,y-60],[cx-w/2+10,y-60]]);rect(g,'#f2c82a',cx-w/2,y-44,w,2);
  [-1,1].forEach(q=>{el(g,s[2],cx+q*(w/2-6),y-24,8,8);rect(g,s[2],cx+q*(w/2-6)-5,y-24,10,16);dot(g,s[2],cx+q*(w/2-6)+(q<0?-4:4),y-30,4)})});
 [-86,-14].forEach(o=>rect(g,'#cfc0a0',x+o-2,y-150,4,116));poly(g,'#b8a078',[[x-92,y-150],[x-8,y-150],[x-50,y-186]]);rect(g,'#cfc0a0',x-51,y-198,2,14);
 [-30,30].forEach((o,i)=>{const cx=x+o+ (i?40:-52);rect(g,'#c8b078',cx-1.5,y-70,3,70);rect(g,'#c8b078',cx-6,y-72,12,3);rect(g,'#f4ecd8',cx-2,y-86,4,14);dot(g,'rgba(255,200,90,'+(.8+.2*Math.sin(t*9+i))+')',cx,y-90,3);glow(g,cx,y-90,34,'255,190,80',.35+.25*k)});
 for(let q=0;q<4;q++)dot(g,['#e8505a','#f4f0e0','#e8b02a','#d8402a'][q],x-70+q*8,y-20+(q%2)*2,3)});

const carretto=(g,x,y,t,k)=>{
 ln(g,'#c8302a',4,[x-46,y-74,x-132,y-26]);ln(g,'#c8302a',4,[x-46,y-62,x-132,y-20]);
 rect(g,'#f2c82a',x-52,y-110,106,60);rect(g,'#c8302a',x-52,y-110,106,6);rect(g,'#c8302a',x-52,y-56,106,6);
 for(let i=0;i<13;i++)poly(g,'#2a7ae0',[[x-52+i*8.2,y-110],[x-48+i*8.2,y-118],[x-44+i*8.2,y-110]]);
 for(let i=0;i<3;i++){const px=x-46+i*34;rect(g,'#2f8a4a',px,y-100,28,38);rect(g,i%2?'#e8e0c8':'#8ac0e8',px+3,y-97,22,32);
  poly(g,'#c8302a',[[px+9,y-72],[px+19,y-72],[px+17,y-86],[px+11,y-86]]);dot(g,'#f0c8a0',px+14,y-89,3.4);poly(g,'#e8e0f0',[[px+8,y-92],[px+20,y-92],[px+14,y-102]]);rect(g,'#555',px+20,y-86,2,16)}
 [20,-12].forEach((o,q)=>{const wx=x+o,wy=y-30;dot(g,'#c8302a',wx,wy,34);dot(g,'#f2c82a',wx,wy,29);dot(g,'#c8302a',wx,wy,24);
  for(let i=0;i<8;i++){const an=i*Math.PI/4+t*0;ln(g,i%2?'#2a7ae0':'#2f8a4a',3,[wx,wy,wx+Math.cos(an)*29,wy+Math.sin(an)*29])}dot(g,'#f2c82a',wx,wy,6);dot(g,'#c8302a',wx,wy,2.4)});
 rect(g,'rgba(0,0,0,.2)',x-60,y-2,120,3)};
PR.plcarretto=PL((g,x,y,t,a,k)=>carretto(g,x,y,t,k));

PR.plcassaro=PL((g,x,y,t,a,k)=>{
 carretto(g,x-80,y,t,k);
 const sx=x+130;rect(g,'#5a4430',sx-62,y-160,4,160);rect(g,'#5a4430',sx+58,y-146,4,146);
 for(let q=0;q<8;q++)poly(g,q%2?'#f4efe0':'#2a5aa0',[[sx-66+q*16.5,y-160+q*2],[sx-49.5+q*16.5,y-160+(q+1)*2],[sx-49.5+q*16.5,y-138+(q+1)*2],[sx-66+q*16.5,y-138+q*2]]);
 txt(g,'SOUVENIR',sx,y-146,9,'#f2c82a');
 for(let i=0;i<4;i++){el(g,['#2a3a5a','#8a2a2a','#2a5a3a','#6a4a2a'][i],sx-44+i*26,y-124,12,4);dot(g,['#2a3a5a','#8a2a2a','#2a5a3a','#6a4a2a'][i],sx-44+i*26,y-126,2)}
 rect(g,'#7a5a3a',sx-60,y-96,120,5);rect(g,'#7a5a3a',sx-60,y-64,120,5);rect(g,'#6a4a30',sx-58,y-91,3,91);rect(g,'#6a4a30',sx+55,y-91,3,91);
 for(let i=0;i<4;i++){const hx=sx-40+i*28;rect(g,'#c8a060',hx-9,y-70,18,10);rect(g,'#c8a060',hx-12,y-76,24,6);dot(g,'#c8905a',hx,y-86,9);rect(g,'#d8402a',hx-9,y-98,18,6);dot(g,'#2a7a3a',hx+8,y-100,3.4);dot(g,'#f2c82a',hx-8,y-100,3.4)}
 for(let i=0;i<10;i++)rect(g,['#e8505a','#2a7ae0','#f2c82a','#2f8a4a','#f4f4ee'][i%5],sx-52+i*11,y-52,9,14);rect(g,'#7a5a3a',sx-60,y-34,120,34);for(let i=0;i<5;i++)rect(g,['#c8402a','#2a5aa0'][i%2],sx-54+i*22,y-28,16,22);
 if(k>.05)glow(g,sx,y-110,70,'255,214,130',.3*k)});

/* =========================== ZONA 4 · Quattro Canti e Pretoria =========================== */
PR.plquattrocanti=PL((g,x,y,t,a,k)=>{
 poly(g,'#b8a47c',[[x-232,y-22],[x-112,y],[x-112,y-272],[x-232,y-254]]);poly(g,'#a6926c',[[x+232,y-22],[x+112,y],[x+112,y-272],[x+232,y-254]]);
 [[-196,-152],[-170,-148]].forEach((s,i)=>{});
 [-1,1].forEach(sd=>{for(let i=0;i<3;i++){const px=x+sd*(140+i*0)-0,yy=y-30-i*86,w=44-0,h=64;const bx=x+sd*(172-i*0)-22;poly(g,'#4a3a28',[[x+sd*150-18,yy],[x+sd*150+18,yy],[x+sd*150+18,yy-h],[x+sd*150-18,yy-h]]);stat(g,x+sd*150,yy-2,1.4,'#e8e4dc')}});
 rect(g,'#c9b58f',x-112,y-272,224,272);rect(g,'rgba(0,0,0,.1)',x+86,y-272,26,272);
 [0,1,2].forEach(i=>{const yy=y-i*88;rect(g,'#e0cfa8',x-116,yy-92,232,7);for(let q=0;q<2;q++)[-1,1].forEach(sd=>{rect(g,'#e8d8b4',x+sd*90-5,yy-86,10,80)})});
 [0,1,2].forEach(i=>{const yy=y-8-i*88;ar(g,'#4a3a28',x-34,yy,68,72);stat(g,x,yy-2,i==0?1.9:2,'#f2eee6');if(i==1){rect(g,'#f2c82a',x-6,yy-50,12,4)}})
 rect(g,'#7a8a92',x-80,y-14,160,14);rect(g,'rgba(180,220,240,.7)',x-76,y-12,152,6);for(let i=0;i<10;i++)ln(g,'rgba(255,255,255,.5)',1,[x-70+i*15,y-8,x-62+i*15+Math.sin(t*3+i)*2,y-5]);
 rect(g,'#e0cfa8',x-112,y-278,224,8);for(let i=0;i<16;i++){rect(g,'#e8d8b4',x-108+i*14,y-292,5,14)}rect(g,'#e0cfa8',x-112,y-294,224,3);
 poly(g,'#d8302a',[[x-9,y-318],[x+9,y-318],[x+7,y-296],[x-7,y-296]]);dot(g,'#f2c82a',x,y-322,4);
 [-80,0,80].forEach((o,i)=>{if(k>.3)glow(g,x+o,y-60-i*0,50,'255,214,130',.22*k)})});

PR.plpretoria=PL((g,x,y,t,a,k)=>{
 rect(g,'#d8c4a0',x-210,y-200,420,200);rect(g,'rgba(0,0,0,.1)',x+170,y-200,40,200);rect(g,'#c0aa80',x-214,y-206,428,8);
 for(let i=0;i<22;i++){rect(g,'#ecdcb8',x-206+i*19,y-224,5,18)}rect(g,'#ecdcb8',x-210,y-226,420,3);
 for(let r=0;r<2;r++)for(let i=0;i<8;i++)win(g,k,x-190+i*50,y-52-r*70+0,14,44,70+r*10+i);
 for(let i=0;i<5;i++){stat(g,x-160+i*80,y-226,1.5,'#f0ece4')}
 rect(g,'#e8e4dc',x-176,y-30,352,30);rect(g,'rgba(0,0,0,.1)',x-176,y-6,352,6);el(g,'#9cc4d8',x,y-34,170,7);
 rect(g,'#e8e4dc',x-120,y-72,240,38);el(g,'#9cc4d8',x,y-74,116,6);rect(g,'#e8e4dc',x-70,y-110,140,38);el(g,'#9cc4d8',x,y-112,66,5);rect(g,'#e8e4dc',x-30,y-160,60,50);el(g,'#9cc4d8',x,y-162,28,4);rect(g,'#e8e4dc',x-8,y-196,16,36);dot(g,'#e8e4dc',x,y-202,8);
 for(let i=0;i<16;i++){const bx=x-172+i*23;rect(g,'#f2eee6',bx-1.5,y-60,3,26);dot(g,'#f2eee6',bx,y-62,2.6)}rect(g,'#f2eee6',x-176,y-64,352,3);
 [[-100,-76],[-60,-78],[60,-78],[100,-76],[-80,-114],[0,-116],[80,-114],[-16,-164],[16,-164],[-130,-34],[130,-34]].forEach((s,i)=>{const sx=x+s[0],sy=y+s[1];rect(g,'#f4f0e8',sx-3,sy-22,6,20);dot(g,'#f4f0e8',sx,sy-27,3.6);ln(g,'#f4f0e8',3,[sx-3,sy-20,sx-9,sy-10+(i%2)*4]);ln(g,'#f4f0e8',3,[sx+3,sy-20,sx+9,sy-14])});
 for(let i=0;i<14;i++){const px=x-100+i*15,u=((t*.9+i*.31)%1);ln(g,'rgba(210,235,250,'+(.7*(1-u))+')',1.4,[px,y-76+u*40,px+(i%2?1:-1)*3,y-70+u*46])}
 for(let i=0;i<8;i++){const u=((t*1.2+i*.2)%1);ln(g,'rgba(220,240,255,'+(.8*(1-u))+')',1.6,[x-8+i*2.2,y-170+u*44,x-8+i*2.2+(i-3.5)*u*5,y-164+u*52])}});

PR.plmartorana=PL((g,x,y,t,a,k)=>{
 const cx=x-110;rect(g,'#d6b678',cx-33,y-232,66,232);rect(g,'rgba(0,0,0,.13)',cx+16,y-232,17,232);
 for(let i=0;i<4;i++){const yy=y-i*58;rect(g,'#bd9a5c',cx-34,yy-60,68,4);if(i==0){win(g,k,cx-10,y-26,18,40,81)}else if(i==1){[-18,0,18].forEach(o=>ar(g,'#2a2018',cx+o-5,y-62,10,34))}else if(i==2){[-14,6].forEach(o=>ar(g,'#2a2018',cx+o-5,y-120,10,34));rect(g,'#ecd9a8',cx-31,y-176,3,58);rect(g,'#ecd9a8',cx+28,y-176,3,58)}else{[-14,8].forEach(o=>ar(g,'#2a2018',cx+o-5,y-178,10,34));rect(g,'#ecd9a8',cx-31,y-232,3,58);rect(g,'#ecd9a8',cx+28,y-232,3,58)}}
 rect(g,'#bd9a5c',cx-36,y-236,72,6);dome(g,cx,y-236,18,'#c4452f');rect(g,'#6a5a3a',cx-1,y-262,2,10);
 rect(g,'#d9c9a4',x-60,y-132,134,132);rect(g,'rgba(0,0,0,.1)',x+52,y-132,22,132);rect(g,'#c0aa80',x-62,y-136,138,6);
 ar(g,'#3a2a1a',x-14,y,28,70);ar(g,'rgba(255,210,120,.4)',x-11,y-3,22,64);win(g,k,x-48,y-70,16,42,85);win(g,k,x+32,y-70,16,42,86);
 dome(g,x+10,y-136,30,'#c4452f');rect(g,'#a8382a',x-24,y-146,68,10);lant(g,x+10,y-166,12);
 const sx=x+150;rect(g,'#e8d4b0',sx-40,y-124,150,124);rect(g,'rgba(0,0,0,.1)',sx+86,y-124,24,124);
 for(let q=0;q<7;q++)poly(g,q%2?'#f4efe0':'#2f8a4a',[[sx-48+q*22,y-132],[sx-26+q*22,y-132],[sx-22+q*22,y-110],[sx-44+q*22,y-110]]);for(let q=0;q<7;q++)dot(g,q%2?'#f4efe0':'#2f8a4a',sx-37+q*22,y-109,5.5);
 txt(g,'PASTICCERIA',sx+36,y-100,9,'#7a3a1a');
 rect(g,'#3a2a1a',sx-32,y-92,134,58);rect(g,'#f4ead4',sx-29,y-89,128,52);for(let r=0;r<3;r++){rect(g,'#b89a6a',sx-29,y-72+r*17,128,2);for(let i=0;i<10;i++){const fx=sx-22+i*12.4,fy=y-76+r*17,c=['#f08a1a','#f2d82a','#d8302a','#6ab04a','#e870a0','#9a50c0','#e8602a'][(i*3+r*2)%7];dot(g,c,fx,fy,4.4);dot(g,'#3a8a3a',fx+2,fy-4,1.6)}}
 ar(g,'#6a4a2a',sx+86,y,18,74);if(k>.05)glow(g,sx+34,y-60,60,'255,214,130',.3*k)});

PR.plsancataldo=PL((g,x,y,t,a,k)=>{
 rect(g,'#d2a860',x-122,y-142,244,142);rect(g,'rgba(0,0,0,.12)',x+92,y-142,30,142);rect(g,'#c09848',x-124,y-146,248,6);
 for(let i=0;i<5;i++){const ax=x-112+i*46;ar(g,'#bc9040',ax,y,36,100);ar(g,'#d8b46c',ax+4,y,28,96)}
 for(let i=0;i<5;i++){win(g,k,x-106+i*46,y-70,8,26,90+i);if(i%2==0)win(g,k,x-106+i*46,y-6,8,26,95+i)}
 for(let i=0;i<9;i++)rect(g,'#c09848',x-122+i*28,y-156,16,10);
 [-70,0,70].forEach(o=>{rect(g,'#c8a458',x+o-24,y-166,48,12);dome(g,x+o,y-166,24,'#c4452f');rect(g,'#a8382a',x+o-2,y-196,4,8)});
 for(let q=0;q<22;q++)dot(g,hr(q)>.5?'#c8307a':'#e0509a',x-150+hr(q*3)*40,y-10-hr(q*7)*60,3+hr(q+1)*3)});

/* =========================== ZONA 5 · Capo e Vucciria =========================== */
PR.plportacarini=PL((g,x,y,t,a,k)=>{
 const gx=x-130;
 [['#e8802a',-60,150,90],['#2f8fc8',20,160,80],['#3aa05a',90,150,90],['#d8302a',165,160,80]].forEach((s,i)=>{const x0=x+s[1]-30;poly(g,s[0],[[x0,y-s[2]-30],[x0+s[3]+30,y-s[2]-26],[x0+s[3]+34,y-s[2]+4+Math.sin(t*1.6+i)*3],[x0+s[3]/2,y-s[2]+14],[x0+6,y-s[2]+2]]);if(k>.05)rect(g,'rgba(10,0,30,'+.3*k+')',x0,y-s[2]-30,s[3]+30,34)});
 rect(g,'#c8b080',gx-64,y-214,128,214);rect(g,'rgba(0,0,0,.13)',gx+36,y-214,28,214);rect(g,'#b49a68',gx-68,y-218,136,8);merl(g,'#c8b080',gx-66,y-218,132,6,14);
 ar(g,'#1e160e',gx-40,y,80,150);ar(g,'#d4c8a8',gx-34,y,68,144);
 for(let i=0;i<5;i++){const c=['#e8802a','#2f8fc8','#3aa05a','#d8302a','#f2c82a'][i];rect(g,c,gx-30+i*13,y-110,10,24);rect(g,'rgba(0,0,0,.25)',gx-30+i*13,y-96,10,4)}
 rect(g,'#7a5a3a',gx-34,y-40,68,6);rect(g,'#e8e0c8',gx-24,y-190,48,24);txt(g,'PORTA',gx,y-178,8,'#5a4a3a');txt(g,'CARINI',gx,y-169,8,'#5a4a3a');
 const stall=(sx,col,kind)=>{rect(g,'#5a4430',sx-56,y-136,4,136);rect(g,'#5a4430',sx+52,y-120,4,120);
  for(let q=0;q<7;q++)poly(g,q%2?'#f4efe0':col,[[sx-60+q*17.5,y-136+q*2.2],[sx-42.5+q*17.5,y-136+(q+1)*2.2],[sx-42.5+q*17.5,y-114+(q+1)*2.2],[sx-60+q*17.5,y-114+q*2.2]]);
  rect(g,'#7a5a3a',sx-58,y-46,116,7);rect(g,'#6a4a30',sx-56,y-39,112,39);
  if(kind){rect(g,'#dfeaf0',sx-54,y-52,108,7);el(g,'#2a3a5a',sx-14,y-66,40,13);poly(g,'#2a3a5a',[[sx+24,y-66],[sx+44,y-76],[sx+44,y-56]]);el(g,'#c8d0d8',sx-14,y-60,34,4);dot(g,'#12161a',sx-44,y-70,1.8);dot(g,'#a82a2a',sx-40,y-62,4);
   el(g,'#8a9aa8',sx+30,y-58,12,4);dot(g,'#f2d82a',sx+14,y-56,3.4);rect(g,'#2a2e2a',sx-14,y-32,28,15);txt(g,'€ 22',sx,y-21,9,'#f4f4ee')}
  else{[['#d8302a',-40],['#3aa05a',-14],['#6a2a7a',12],['#f08a1a',38]].forEach((c,i)=>{rect(g,'#8a5a30',sx+c[1]-12,y-56,24,12);for(let r=0;r<5;r++)dot(g,c[0],sx+c[1]-8+r*4,y-60-(r%2)*2,4.2)});rect(g,'#2a2e2a',sx-14,y-32,28,15);txt(g,'€ 2',sx,y-21,9,'#f4f4ee')}};
 stall(x+20,'#e8802a',1);stall(x+160,'#3aa05a',0);if(k>.05)glow(g,x+90,y-100,110,'255,200,110',.22*k)});

PR.plvucciria=PL((g,x,y,t,a,k)=>{
 [-1,1].forEach(s=>{const bx=s<0?x-200:x+110;rect(g,s<0?'#c8924e':'#d0a064',bx,y-250,90,250);rect(g,'rgba(0,0,0,.12)',bx+(s<0?66:0),y-250,24,250);rect(g,'#a87a3e',bx,y-254,90,8);
  for(let r=0;r<3;r++)for(let c=0;c<2;c++)win(g,k,bx+12+c*38,y-50-r*70,16,44,100+r*2+c+(s>0?10:0))});
 rect(g,'#3a3a40',x-120,y-152,240,4);
 for(let i=0;i<10;i++){const hx=x-112+i*25;ln(g,'#3a3a40',1.4,[hx,y-150,hx,y-134]);
  if(i%3==0){poly(g,'#c8404a',[[hx-8,y-134],[hx+8,y-134],[hx+10,y-96],[hx-10,y-96]]);rect(g,'#f4ecd8',hx-7,y-120,5,16)}
  else if(i%3==1){el(g,'#b8c4cc',hx,y-114,6,20);dot(g,'#a82a2a',hx,y-132,3)}
  else{for(let q=0;q<5;q++)dot(g,'#8a4a3a',hx+Math.sin(q*1.2)*4,y-134+q*6,4)}}
 rect(g,'#7a5a3a',x-130,y-48,92,6);rect(g,'#6a4a30',x-128,y-42,88,42);rect(g,'#dfeaf0',x-124,y-54,84,6);for(let i=0;i<6;i++){el(g,'#c0ccd4',x-112+i*14,y-58,6,2.6)}el(g,'#2a3a5a',x-84,y-64,26,6);
 rect(g,'#2a2a2e',x-34,y-44,60,44);rect(g,'#3a3a40',x-38,y-48,68,6);for(let i=0;i<9;i++){dot(g,'rgba(255,'+(70+hr(i+Math.floor(t*4))*80|0)+',30,.95)',x-28+i*6,y-50,2.6)}
 glow(g,x-4,y-54,34,'255,100,30',.45);for(let i=0;i<5;i++){ln(g,'#c0c0c8',1.4,[x-26+i*12,y-70,x-16+i*12,y-54]);for(let q=0;q<3;q++)dot(g,'#8a4a2a',x-24+i*12+q*3,y-66+q*4,2.4)}
 for(let i=0;i<5;i++){const u=((t*.4+i*.21)%1);dot(g,'rgba(255,255,255,'+(.3*(1-u))+')',x-6+Math.sin(t+i)*6,y-76-u*60,4+u*8)}
 rect(g,'#7a5a3a',x+50,y-48,92,6);rect(g,'#6a4a30',x+52,y-42,88,42);[['#d8302a',0],['#3aa05a',1],['#6a2a7a',2],['#f08a1a',3]].forEach((c,i)=>{rect(g,'#8a5a30',x+56+i*21,y-62,18,14);for(let r=0;r<4;r++)dot(g,c[0],x+60+i*21+r*4,y-65-(r%2)*2,3.6)});
 for(let r=0;r<2;r++){g.strokeStyle=tn('#2a2a2e');g.lineWidth=1;g.beginPath();for(let i=0;i<=26;i++){const u=i/26,px=x-130+u*260,py=y-196+r*14+Math.sin(u*Math.PI)*(18)+(r?4:0);i?g.lineTo(px,py):g.moveTo(px,py)}g.stroke();
  for(let i=1;i<26;i++){const u=i/26,px=x-130+u*260,py=y-196+r*14+Math.sin(u*Math.PI)*18+(r?4:0)+3;dot(g,'rgb(255,228,150)',px,py,2.2);glow(g,px,py,15,'255,214,120',.2+.25*k)}}});

PR.plarancina=PL((g,x,y,t,a,k)=>{
 rect(g,'#e4d8bc',x-130,y-160,260,160);rect(g,'rgba(0,0,0,.1)',x+100,y-160,30,160);
 for(let q=0;q<10;q++)poly(g,q%2?'#f4efe0':'#f2b82a',[[x-136+q*27.6,y-184+q*0],[x-108+q*27.6,y-184],[x-108+q*27.6,y-158],[x-136+q*27.6,y-158]]);for(let q=0;q<10;q++)dot(g,q%2?'#f4efe0':'#f2b82a',x-122+q*27.6,y-157,7);
 rect(g,'#2a2e2a',x-110,y-156,92,30);txt(g,'ARANCINA',x-64,y-141,13,'#ffe27a');txt(g,'burro · ragù · spinaci',x-64,y-131,7,'#f4f4ee');
 rect(g,'#f4f4ee',x-110,y-60,222,60);for(let r=0;r<3;r++)for(let q=0;q<18;q++)rect(g,(q+r)%2?'#2a7ae0':'#f4f4ee',x-110+q*12.3,y-60+r*20,12.3,20);rect(g,'rgba(0,0,0,.12)',x-110,y-60,222,4);
 rect(g,'#6a5a46',x-114,y-64,230,6);
 rect(g,'#3a3a40',x-104,y-122,100,54);rect(g,'rgba(190,225,245,.35)',x-100,y-118,92,46);rect(g,'#9a9aa2',x-100,y-80,92,3);
 for(let r=0;r<4;r++)for(let q=0;q<=r;q++){const ax=x-54+(q-r/2)*15,ay=y-80-r*12;dot(g,'#e8a82a',ax,ay,7.6);dot(g,'#f2c04a',ax-2,ay-2,4);dot(g,'#d89020',ax+3,ay+3,2.4)}
 el(g,'#8a8a92',x+26,y-86,22,5);rect(g,'#8a8a92',x+4,y-120,44,36);rect(g,'#6a6a72',x+2,y-122,48,5);for(let i=0;i<5;i++){const u=((t*.45+i*.2)%1);dot(g,'rgba(255,255,255,'+(.4*(1-u))+')',x+26+Math.sin(t*1.5+i)*8,y-128-u*60,4+u*9)}
 [[x+66,'#d8a050'],[x+96,'#d8a050']].forEach((s,i)=>{el(g,s[1],s[0],y-68,13,6);el(g,'#6a2a3a',s[0],y-71,11,3.4);el(g,s[1],s[0],y-76,13,6);for(let q=0;q<6;q++)dot(g,'#f4ecd8',s[0]-8+q*3.2,y-79+(q%2),.9)});
 poly(g,'#f2e040',[[x+78,y-68],[x+92,y-68],[x+85,y-60]]);
 fig(g,x+70,y-8,t,{f:-1,skin:'#d8a078',top:'#f4f4ee',bot:'#3a3a40',hair:'#2a1a10',acc:(g2,b)=>{rect(g2,'#f4f4ee',-9,-118+b,18,7);rect(g2,'#f4f4ee',-13,-70+b,26,30)}});
 rect(g,'#6a5a46',x+62,y-96,0,0);if(k>.05)glow(g,x-50,y-100,90,'255,214,130',.3*k)});

/* =========================== ZONA 6 · Teatro Massimo e Politeama =========================== */
PR.plmassimo=PL((g,x,y,t,a,k)=>{
 dome(g,x,y-258,84,'#587a6c');for(let i=-4;i<=4;i++)ln(g,'rgba(20,50,40,.4)',1.4,[x+i*9,y-260-Math.sqrt(Math.max(0,84*84-i*i*81*1.2))*.97,x+i*21,y-262]);
 rect(g,'#d8cdb0',x-70,y-266,140,40);rect(g,'#c0b490',x-74,y-270,148,6);dome(g,x,y-266,30,'#6a8a7a');rect(g,'#c0b490',x-1,y-318,2,22);
 [-1,1].forEach(s=>{const wx=s<0?x-250:x+130;rect(g,'#d8cdb0',wx,y-150,120,150);rect(g,'rgba(0,0,0,.1)',wx+(s<0?100:0),y-150,20,150);rect(g,'#c0b490',wx-2,y-154,124,6);for(let i=0;i<3;i++){win(g,k,wx+12+i*36,y-40,18,56,110+i+(s>0?5:0));win(g,k,wx+12+i*36,y-100+0,18,40,115+i+(s>0?5:0))}});
 rect(g,'#d8cdb0',x-140,y-190,280,190);rect(g,'#c8bc9c',x-140,y-190,280,6);
 poly(g,'#ece4cc',[[x-146,y-194],[x+146,y-194],[x,y-256]]);poly(g,'#c8bc9c',[[x-120,y-198],[x+120,y-198],[x,y-246]]);for(let i=0;i<7;i++){rect(g,'#e0d4b4',x-70+i*20,y-212-(i%2?0:0),8,12);dot(g,'#e0d4b4',x-66+i*20,y-216,4)}
 rect(g,'#ece4cc',x-140,y-192,280,24);txt(g,'ALL’ARTE ITALIANA',x,y-176,9,'#8a7a5a');
 rect(g,'#4a3a2e',x-128,y-168,256,124);for(let i=0;i<5;i++)ar(g,'#2a2018',x-100+i*50,y-48,30,76);
 for(let i=0;i<6;i++){const cx=x-110+i*44;rect(g,'#f0e8d0',cx-8,y-170,16,126);rect(g,'rgba(0,0,0,.14)',cx+2,y-170,6,126);for(let q=0;q<4;q++)rect(g,'rgba(0,0,0,.08)',cx-5+q*3,y-170,1,126);rect(g,'#e8dcc0',cx-12,y-176,24,8);rect(g,'#e8dcc0',cx-11,y-48,22,5)}
 for(let i=0;i<6;i++){rect(g,'#e4dcc4',x-170+i*2,y-i*8-8,340-i*4,8);rect(g,'rgba(0,0,0,.08)',x-170+i*2,y-i*8-2,340-i*4,2)}
 [-1,1].forEach(s=>{const lx=x+s*186;rect(g,'#c8bc9c',lx-22,y-38,44,38);el(g,'#4a3a22',lx,y-48,22,12);dot(g,'#4a3a22',lx+s*14,y-64,9);el(g,'#2e2412',lx+s*12,y-66,8,10);rect(g,'#4a3a22',lx-14,y-48,5,10);rect(g,'#4a3a22',lx+9,y-48,5,10);poly(g,'#4a3a22',[[lx-s*18,y-52],[lx-s*34,y-44],[lx-s*18,y-44]])});
 if(k>.05){for(let i=0;i<5;i++)glow(g,x-100+i*50,y-90,40,'255,214,130',.25*k)}});

PR.plpoliteama=PL((g,x,y,t,a,k)=>{
 [-1,1].forEach(s=>{const wx=s<0?x-250:x+150;rect(g,'#e4dcc4',wx,y-112,100,112);rect(g,'rgba(0,0,0,.09)',wx+(s<0?80:0),y-112,20,112);rect(g,'#c8b894',wx-2,y-116,104,6);
  for(let i=0;i<4;i++){ar(g,'#7a6a54',wx+8+i*22,y,16,72);rect(g,'#f0e8d0',wx+25+i*22-1,y-72,3,72)}});
 rect(g,'#e4dcc4',x-150,y-160,300,160);rect(g,'rgba(0,0,0,.09)',x+120,y-160,30,160);rect(g,'#c8b894',x-152,y-166,304,7);
 rect(g,'#b8402a',x-150,y-160,300,10);for(let i=0;i<30;i++)rect(g,i%2?'#f0e8d0':'#2a6a8a',x-148+i*10,y-158,5,6);rect(g,'#c8a050',x-150,y-146,300,3);
 ar(g,'#5a4a38',x-66,y,132,142);ar(g,'#3a2e24',x-56,y,112,132);ar(g,'rgba(255,214,130,'+(.2+.5*k)+')',x-50,y-4,100,118);
 for(let i=0;i<3;i++)ar(g,'#2a2018',x-42+i*30,y,24,70);
 g.strokeStyle=tn('#f0e8d0');g.lineWidth=8;g.beginPath();g.arc(x,y-142,62,Math.PI,0);g.stroke();g.strokeStyle=tn('#b8402a');g.lineWidth=2.4;g.beginPath();g.arc(x,y-142,66,Math.PI,0);g.stroke();
 [-1,1].forEach(s=>{rect(g,'#f0e8d0',x+s*84-6,y-170,12,108);rect(g,'#c8b894',x+s*84-12,y-174,24,8);rect(g,'#c8b894',x+s*84-10,y-62,20,5);el(g,'#4a8a74',x+s*84,y-190,12,7);dot(g,'#4a8a74',x+s*84+s*8,y-198,4.4);ln(g,'#4a8a74',2.4,[x+s*84-4,y-184,x+s*84-4,y-174]);ln(g,'#4a8a74',2.4,[x+s*84+4,y-184,x+s*84+6,y-174]);ln(g,'#4a8a74',2,[x+s*84,y-196,x+s*84,y-208]);dot(g,'#4a8a74',x+s*84,y-211,3.4)});
 rect(g,'#e4dcc4',x-74,y-184,148,22);rect(g,'#c8b894',x-78,y-188,156,6);
 for(let h=0;h<4;h++){const hx=x-48+h*32,hy=y-208+(h%2)*0;el(g,'#4a8a74',hx,hy,14,8);poly(g,'#4a8a74',[[hx+8,hy-4],[hx+17,hy-22],[hx+22,hy-20],[hx+14,hy-2]]);dot(g,'#4a8a74',hx+21,hy-22,4.4);poly(g,'#4a8a74',[[hx+22,hy-24],[hx+24,hy-30],[hx+20,hy-26]]);ln(g,'#4a8a74',2.4,[hx-8,hy+4,hx-12,hy+14]);ln(g,'#4a8a74',2.4,[hx-2,hy+5,hx-4,hy+14]);ln(g,'#4a8a74',2.4,[hx+6,hy+5,hx+10,hy+12]);ln(g,'#4a8a74',2.4,[hx+12,hy+4,hx+18,hy+10])}
 ln(g,'#3a6a56',3,[x-70,y-198,x-48,y-208]);el(g,'#3a6a56',x-62,y-216,24,10);rect(g,'#4a8a74',x-52,y-246,6,16);dot(g,'#4a8a74',x-49,y-250,4);ln(g,'#4a8a74',2.4,[x-49,y-244,x-30,y-262]);rect(g,'#c8a050',x-30,y-264,2,6);
 if(k>.05)glow(g,x,y-70,110,'255,214,130',.25*k)});

const pupo=(g,x,y,t,c,ph)=>{const sw=Math.sin(t*1.8+ph)*2;g.save();g.translate(x+sw,y);ln(g,'rgba(60,40,20,.7)',.8,[0,-70,0,-20]);rect(g,'#c8c8d0',-7,-20,14,26);rect(g,'rgba(0,0,0,.18)',2,-20,5,26);dot(g,'#f0c8a0',0,-26,5);g.fillStyle=tn('#b8b8c4');g.beginPath();g.arc(0,-28,6.2,Math.PI,0);g.fill();poly(g,c,[[0,-34],[-4,-48],[5,-40]]);
 dot(g,c,10,-4,8);dot(g,'#f4ecd8',10,-4,4);ln(g,'#c8c8d0',2,[-9,-12,-22,-28]);ln(g,'#e8e8f0',1.6,[-22,-28,-26,-52]);ln(g,'#c8c8d0',2.4,[-6,6,-6,22]);ln(g,'#c8c8d0',2.4,[5,6,6,22]);g.restore()};
PR.plpupi=PL((g,x,y,t,a,k)=>{
 rect(g,'#c4684a',x-100,y-196,200,196);rect(g,'rgba(0,0,0,.14)',x+72,y-196,28,196);rect(g,'#a8503a',x-104,y-200,208,8);
 rect(g,'#3a1a1a',x-86,y-190,172,26);rect(g,'#c8a050',x-86,y-190,172,2);rect(g,'#c8a050',x-86,y-166,172,2);txt(g,'OPERA DEI PUPI',x,y-170,15,'#f2c82a');
 ar(g,'#2a1a14',x-60,y-14,120,138);ar(g,'#e8d4a0',x-54,y-14,108,130);poly(g,'#7ab0d8',[[x-54,y-100],[x+54,y-100],[x+54,y-60],[x-54,y-60]]);poly(g,'#8a8a96',[[x-30,y-60],[x-30,y-96],[x-20,y-96],[x-20,y-104],[x-10,y-104],[x-10,y-96],[x+10,y-96],[x+10,y-104],[x+20,y-104],[x+20,y-96],[x+30,y-96],[x+30,y-60]]);rect(g,'#4a6a3a',x-54,y-60,108,36);
 [[-34,'#d8302a',0],[2,'#2a7ae0',2],[38,'#f2c82a',4]].forEach(p=>pupo(g,x+p[0]-8,y-44,t,p[1],p[2]));
 poly(g,'#a8202a',[[x-54,y-120],[x-54,y-14],[x-28,y-14],[x-40,y-60],[x-30,y-100],[x-14,y-118]]);poly(g,'#a8202a',[[x+54,y-120],[x+54,y-14],[x+28,y-14],[x+40,y-60],[x+30,y-100],[x+14,y-118]]);rect(g,'#c8a050',x-54,y-124,108,5);for(let i=0;i<9;i++)dot(g,'#f2c82a',x-50+i*12.5,y-118,2.4);
 rect(g,'#6a3a2a',x-54,y-14,108,14);rect(g,'#e8d4a0',x-120,y-120,30,40);poly(g,'#c8302a',[[x-110,y-96],[x-100,y-96],[x-102,y-110],[x-108,y-110]]);dot(g,'#f0c8a0',x-105,y-113,3.4);rect(g,'#c8a050',x-108,y-76,0,0);
 carretto(g,x+240,y,t,k);if(k>.05)glow(g,x,y-70,90,'255,200,110',.3*k)});

/* =========================== ZONA 7 · Kalsa =========================== */
PR.plficus=PL((g,x,y,t,a,k)=>{
 const roots=[[-150,14],[-104,9],[-62,16],[-20,10],[26,18],[70,10],[112,15],[154,9],[-128,8],[92,7]];
 roots.forEach((r,i)=>{const rx=x+r[0],w=r[1],top=-130-hr(i)*40;g.fillStyle=tn(i%2?'#6a5a4a':'#7a6a58');g.beginPath();g.moveTo(rx-w*.45,y+top);g.bezierCurveTo(rx-w*.6,y+top*.5,rx-w,y-24,rx-w*1.1,y);g.lineTo(rx+w*1.1,y);g.bezierCurveTo(rx+w,y-24,rx+w*.6,y+top*.5,rx+w*.45,y+top);g.closePath();g.fill();
  rect(g,'rgba(255,255,255,.1)',rx-w*.3,y+top,w*.25,-top-10);rect(g,'rgba(0,0,0,.14)',rx+w*.2,y+top,w*.3,-top-6)});
 g.fillStyle=tn('#5e4e3e');g.beginPath();g.moveTo(x-64,y);g.bezierCurveTo(x-72,y-70,x-56,y-130,x-40,y-176);g.lineTo(x+44,y-176);g.bezierCurveTo(x+64,y-130,x+78,y-70,x+70,y);g.fill();
 for(let q=0;q<9;q++)ln(g,'rgba(0,0,0,.18)',2.4,[x-50+q*12,y-10,x-44+q*12+(q%2?3:-3),y-160]);
 for(let i=0;i<46;i++){const cx=x-230+hr(i*3)*460,cy=y-262+hr(i*5)*110,r=34+hr(i)*30;dot(g,['#1e4a2a','#2a5e34','#346a3c','#245230'][i%4],cx*.0+cx*1,cy,r)}
 for(let i=0;i<30;i++){const cx=x-200+hr(i*7)*400,cy=y-290+hr(i*2)*90;dot(g,'rgba(120,180,90,.16)',cx-6,cy-8,12+hr(i)*14)}
 rect(g,'#3a3a40',x-230,y-36,460,3);rect(g,'#3a3a40',x-230,y-10,460,3);for(let i=0;i<39;i++){rect(g,'#3a3a40',x-228+i*11.8,y-44,2.2,44);poly(g,'#3a3a40',[[x-229+i*11.8,y-44],[x-224.6+i*11.8,y-44],[x-226.8+i*11.8,y-52]])}
 for(let i=0;i<6;i++)dot(g,'rgba(255,255,255,.07)',x-120+i*50,y-180,30)});

PR.plsteri=PL((g,x,y,t,a,k)=>{
 rect(g,'#d9c9a0',x-235,y-222,470,222);rect(g,'rgba(0,0,0,.1)',x+195,y-222,40,222);
 for(let r=0;r<16;r++)rect(g,'rgba(80,60,20,.1)',x-235,y-222+r*14,470,1.2);for(let q=0;q<70;q++)rect(g,'rgba(80,60,20,.06)',x-235+hr(q)*460,y-222+hr(q*3)*210,10+hr(q+2)*14,10);
 rect(g,'#c4b080',x-238,y-228,476,8);for(let i=0;i<16;i++)poly(g,'#d9c9a0',[[x-236+i*30,y-228],[x-236+i*30,y-248],[x-220+i*30,y-240],[x-208+i*30,y-248],[x-208+i*30,y-228]]);
 for(let r=0;r<2;r++)for(let i=0;i<6;i++){if(r==1&&(i==2||i==3))continue;const wx=x-210+i*74,wy=y-120-r*84;pa(g,'#d9c9a0',wx-3,wy,52,60);pa(g,'#2a2e3a',wx,wy,19,54);pa(g,'#2a2e3a',wx+22,wy,19,54);rect(g,'#b8a478',wx+19,wy-54,3,54);if(lit(k,120+r*6+i)){pa(g,LIT,wx+1.5,wy-1.5,16,50);pa(g,LIT,wx+23.5,wy-1.5,16,50);glow(g,wx+20,wy-30,34,'255,214,120',.3*k)}}
 rect(g,'#b8a478',x-235,y-134,470,5);rect(g,'#b8a478',x-235,y-50,470,4);
 pa(g,'#b8a478',x-62,y,124,170);pa(g,'#1e160e',x-50,y,100,158);pa(g,'#5a4a34',x-44,y,88,150);ln(g,'#2a2018',2.4,[x,y,x,y-120]);for(let q=0;q<5;q++)rect(g,'#2a2018',x-40+q*0,y-20-q*24,80,2);
 [-150,150].forEach((o,i)=>{rect(g,'#2a2018',x+o-14,y-50,28,36);for(let q=0;q<4;q++)rect(g,'#6a6a72',x+o-12+q*7,y-50,1.6,36);rect(g,'#b8a478',x+o-17,y-54,34,4)});
 for(let i=0;i<4;i++)rect(g,'#c4b080',x-235+i*155,y-4,40,4)});

PR.plgiulia=PL((g,x,y,t,a,k)=>{
 [[-190,.0],[170,1]].forEach(s=>{const tx=x+s[0];rect(g,'#6a5a46',tx-7,y-110,14,110);for(let i=0;i<7;i++)dot(g,['#2a5e34','#346a3c','#3a7a42'][i%3],tx-36+hr(i+s[1]*7)*72,y-130-hr(i*3)*40,26+hr(i)*14)});
 rect(g,'#6a5a3a',x-100-4,y-98,8,98);for(let i=0;i<7;i++){const an=-Math.PI/2+(i-3)*.42;ln(g,'#4a7a3a',3.4,[x-100,y-98,x-100+Math.cos(an)*50,y-98+Math.sin(an)*44])}
 [-200,-150,-60,40,90,150,200].forEach((o,i)=>{});
 for(let b=0;b<3;b++){const bx=x-140+b*108;rect(g,'#2f5e34',bx-44,y-30,88,30);rect(g,'rgba(0,0,0,.14)',bx+20,y-30,24,30);for(let q=0;q<14;q++)dot(g,['#e8505a','#f2c82a','#f4f4ee','#c8507a','#9a50c0'][(q+b)%5],bx-40+q*6.2,y-20+((q*7)%9),2.6)}
 rect(g,'#c8b898',x-30,y-44,60,44);el(g,'#9cc4d8',x,y-46,28,5);rect(g,'#d8ccb4',x-8,y-86,16,44);el(g,'#c8b898',x,y-86,22,6);el(g,'#9cc4d8',x,y-88,16,3);rect(g,'#d8ccb4',x-3,y-108,6,24);
 for(let i=0;i<9;i++){const u=((t*1.1+i*.13)%1),dx=(i-4)*6*u;ln(g,'rgba(220,240,255,'+(.75*(1-u))+')',1.6,[x+dx*.3,y-108+u*34,x+dx,y-100+u*50])}
 const tx=x+110;rect(g,'#ece4cc',tx-34,y-12,68,12);for(let i=0;i<5;i++)rect(g,'#f4eedc',tx-30+i*14,y-76,6,64);rect(g,'#ece4cc',tx-36,y-82,72,8);dome(g,tx,y-82,30,'#8ab0a0');rect(g,'#6a5a3a',tx-1,y-124,2,10)});

/* =========================== ZONA 8 · Foro Italico e Cala =========================== */
PR.plportafelice=PL((g,x,y,t,a,k)=>{
 [-1,1].forEach(s=>{const px=x+s*125;
  rect(g,'#d8b86c',px-55,y-270,110,270);rect(g,'rgba(0,0,0,.14)',px+(s<0?30:-55),y-270,25,270);
  for(let r=0;r<8;r++)rect(g,'rgba(80,50,10,.18)',px-55,y-8-r*14,110,1.4);rect(g,'#c4a458',px-60,y-114,120,7);
  ar(g,'#7a5a28',px-26,y-130,52,70);stat(g,px,y-132,1.9,'#f0ece4');rect(g,'#ece0b8',px-34,y-196,8,66);rect(g,'#ece0b8',px+26,y-196,8,66);rect(g,'#c4a458',px-40,y-200,80,6);
  win(g,k,px-12,y-212,24,50,130+(s>0?4:0));rect(g,'#3a3a40',px-26,y-214,52,3);for(let i=0;i<8;i++)rect(g,'#3a3a40',px-24+i*7,y-224,1.6,10);
  rect(g,'#c4a458',px-62,y-252,124,8);for(let i=0;i<9;i++)rect(g,'#ece0b8',px-56+i*13,y-264,5,12);rect(g,'#ece0b8',px-4,y-292,8,26);poly(g,'#ece0b8',[[px-6,y-292],[px+6,y-292],[px,y-310]]);
  el(g,'#8a9aa2',px+(s<0?-4:4),y-6,36,6);el(g,'#9cc4d8',px+(s<0?-4:4),y-8,32,3.6);for(let i=0;i<3;i++){const u=((t*1.2+i*.3)%1);ln(g,'rgba(220,240,255,'+(.8*(1-u))+')',1.6,[px+(s<0?10:-10),y-48,px+(s<0?10:-10)+(s<0?-1:1)*u*8,y-22+u*16])}})});

PR.plforoitalico=PL((g,x,y,t,a,k)=>{
 rect(g,'#c8b898',x-250,y-40,500,26);rect(g,'rgba(0,0,0,.1)',x-250,y-18,500,4);for(let i=0;i<50;i++)rect(g,'rgba(0,0,0,.08)',x-250+i*10,y-40,1,26);
 rect(g,'#5a9a4a',x-250,y-16,500,16);for(let i=0;i<25;i++)rect(g,'rgba(255,255,255,.06)',x-250+i*20,y-16,10,16);for(let i=0;i<20;i++)dot(g,'#f4f0a0',x-240+hr(i)*480,y-10+hr(i*3)*7,1.4);
 [[-170,'#e8505a'],[-20,'#2f8fc8'],[130,'#f2c82a']].forEach((b,i)=>{const bx=x+b[0];rect(g,'#e8402a',bx-30,y-12,60,12);for(let q=0;q<4;q++)rect(g,'#f4f4ee',bx-30+q*15,y-12,7,12);
  fig(g,bx-12,y-2,t,{f:1,s:.58,skin:'#d8a078',top:b[1],bot:'#2a4a8a',hair:'#2a1a10'});fig(g,bx+16,y-2,t+1,{f:-1,s:.46,skin:'#e0b090',top:['#f2c82a','#e8505a','#2f8a4a'][i],bot:'#3a3a40',hair:'#6a3a1a'});dot(g,'#f4f4ee',bx+4,y-4,3.6);rect(g,'#d8302a',bx-4,y-4,3,3)});
 [[-90,70,'#e8505a'],[30,110,'#2f8fc8'],[140,90,'#f2c82a'],[-210,95,'#9a50c0']].forEach((q,i)=>{const kx=x+q[0]+Math.sin(t*.9+i*2)*12,ky=y-q[1]-130+Math.sin(t*1.3+i)*8;
  ln(g,'rgba(240,240,240,.55)',.8,[x+q[0]+(i%2?18:-12),y-14,kx,ky+16]);poly(g,q[2],[[kx,ky-16],[kx+11,ky],[kx,ky+16],[kx-11,ky]]);ln(g,'rgba(0,0,0,.2)',1,[kx,ky-16,kx,ky+16]);ln(g,'rgba(0,0,0,.2)',1,[kx-11,ky,kx+11,ky]);
  g.strokeStyle='rgba(255,255,255,.8)';g.lineWidth=1.4;g.beginPath();g.moveTo(kx,ky+16);for(let z=1;z<7;z++)g.lineTo(kx+(z%2?5:-5)+Math.sin(t*3+z)*2,ky+16+z*6);g.stroke();for(let z=1;z<7;z+=2)dot(g,q[2],kx+(z%2?5:-5),ky+16+z*6,2)});
 [[-250,0],[250,0]].forEach(()=>{});
 rect(g,'#7a5a3a',x-60,y-26,50,4);rect(g,'#5a4430',x-56,y-24,3,12);rect(g,'#5a4430',x-18,y-24,3,12)});

PR.plcala=PL((g,x,y,t,a,k)=>{
 rect(g,'#3a7a9a',x-250,y-58,500,50);rect(g,'rgba(255,255,255,.12)',x-250,y-58,500,8);for(let i=0;i<24;i++){const wx=x-246+i*21,wy=y-50+(i*13)%38;ln(g,'rgba(255,255,255,.22)',1.2,[wx,wy+Math.sin(t*1.5+i)*1,wx+12,wy+Math.sin(t*1.5+i)*1])}
 rect(g,'#8a7a66',x-250,y-12,500,12);rect(g,'#6a5a48',x-250,y-12,500,3);for(let i=0;i<25;i++)rect(g,'rgba(0,0,0,.12)',x-250+i*20,y-12,1,12);
 const barca=(bx,c1,c2,s,i)=>{const bob=Math.sin(t*1.6+i)*1.6;g.save();g.translate(bx,y-34+bob);g.scale(s,s);poly(g,'rgba(0,0,0,.18)',[[-52,10],[56,10],[48,24],[-40,24]]);poly(g,c1,[[-56,-6],[60,-6],[46,16],[-42,16]]);rect(g,c2,-56,-9,116,4);rect(g,'#f4f0e4',-20,-30,36,22);rect(g,'#2a3a4a',-16,-26,12,10);rect(g,'#2a3a4a',2,-26,10,10);rect(g,'#7a5a3a',-8,-60,3,30);ln(g,'#7a5a3a',1.6,[-6,-58,26,-14]);dot(g,'#f2c82a',-6,-62,3);g.restore()};
 barca(x-150,'#2a6ab0','#f4f4ee',1,0);barca(x-10,'#e8e0d0','#d8302a',.92,2);barca(x+120,'#e8a82a','#2a5aa0',.85,4);
 const nx=x-232;rect(g,'#5a4430',nx,y-130,4,118);rect(g,'#5a4430',nx+60,y-130,4,118);ln(g,'#5a4430',1.4,[nx+2,y-128,nx+62,y-128]);g.strokeStyle='rgba(120,100,70,.7)';g.lineWidth=.8;for(let i=0;i<=12;i++){g.beginPath();g.moveTo(nx+2+i*5,y-128);g.lineTo(nx+2+i*5+(Math.sin(i)*2),y-60+(i%3)*4);g.stroke()}for(let i=0;i<8;i++){g.beginPath();g.moveTo(nx+2,y-120+i*7);g.lineTo(nx+62,y-118+i*7+(i%2)*2);g.stroke()}
 for(let i=0;i<4;i++)dot(g,'#e8802a',nx+6+i*16,y-126+(i%2)*2,3.2);
 rect(g,'#c8a060',x+160,y-24,28,12);rect(g,'#c8a060',x+190,y-34,28,22);for(let i=0;i<3;i++)rect(g,'rgba(0,0,0,.18)',x+163+i*9,y-24,1.4,12);
 const cx=x+210;rect(g,'#d9c9a0',cx,y-80,40,30);rect(g,'#c4b080',cx-3,y-84,46,5);poly(g,'#c4b080',[[cx-2,y-84],[cx+42,y-84],[cx+20,y-104]]);ar(g,'#2a2018',cx+12,y-50,16,24)});

/* =========================== ZONA 9 · Mondello =========================== */
PR.plmondello=PL((g,x,y,t,a,k)=>{
 rect(g,'#3fb4bc',x-250,y-60,500,46);rect(g,'rgba(255,255,255,.2)',x-250,y-60,500,6);for(let i=0;i<30;i++){const wx=x-248+i*17,wy=y-54+(i*11)%40;ln(g,'rgba(255,255,255,.28)',1.2,[wx,wy,wx+9,wy])}
 rect(g,'#e4d4a8',x-250,y-16,500,16);
 [[-190,'#e8505a'],[-110,'#2f8fc8'],[-20,'#f2c82a'],[80,'#e8505a'],[170,'#3aa05a']].forEach((u,i)=>{const ux=x+u[0],uy=y-8-(i%2)*6;rect(g,'#6a4a30',ux-1.5,uy-80,3,80);
  g.fillStyle=tn(u[1]);g.beginPath();g.moveTo(ux-36,uy-64);g.quadraticCurveTo(ux,uy-106,ux+36,uy-64);g.closePath();g.fill();
  poly(g,'#f4f4ee',[[ux-12,uy-70],[ux,uy-92],[ux+12,uy-70]]);for(let q=0;q<4;q++)dot(g,q%2?'#f4f4ee':u[1],ux-27+q*18,uy-64,4.5);
  rect(g,'#f4f4ee',ux-28,uy-8,56,5);rect(g,u[1],ux-28,uy-8,10,5);rect(g,u[1],ux+8,uy-8,10,5)});
 const bt=(bx,c,i)=>{g.save();g.translate(bx,y-6);poly(g,c,[[-30,-4],[30,-4],[22,8],[-22,8]]);rect(g,'#f4f4ee',-30,-6,60,3);ln(g,'#7a5a3a',2,[-14,-8,-34,6]);ln(g,'#7a5a3a',2,[14,-8,34,6]);g.restore()};bt(x-60,'#2a6ab0');bt(x+130,'#d8402a');
 rect(g,'#7a5a3a',x+210,y-34,60,5);for(let i=0;i<6;i++)rect(g,'#5a4430',x+212+i*10,y-34,2,30);for(let i=0;i<8;i++)rect(g,'rgba(0,0,0,.2)',x+210+i*8,y-34,1,5);
 if(k>.4)for(let i=0;i<12;i++)glow(g,x-240+i*44,y-100+Math.sin(i)*8,16,'255,214,120',.3*k)});

PR.plcharleston=PL((g,x,y,t,a,k)=>{
 rect(g,'#2f8aa0',x-260,y-70,520,60);rect(g,'rgba(255,255,255,.12)',x-260,y-70,520,6);for(let i=0;i<28;i++){const wx=x-256+i*19,wy=y-62+(i*9)%48;ln(g,'rgba(255,255,255,.22)',1.2,[wx,wy+Math.sin(t*1.5+i),wx+10,wy+Math.sin(t*1.5+i)])}
 for(let i=0;i<14;i++){rect(g,'#4a3a2a',x-150+i*30,y-92,6,90);rect(g,'rgba(255,255,255,.2)',x-150+i*30,y-72,6,2)}
 rect(g,'#7a5a3a',x-260,y-96,120,6);for(let i=0;i<30;i++)rect(g,'rgba(0,0,0,.22)',x-258+i*4,y-96,1,6);for(let i=0;i<10;i++)rect(g,'#5a4430',x-254+i*12,y-122,2,28);rect(g,'#5a4430',x-260,y-124,120,2.4);
 rect(g,'#ece4cc',x-160,y-176,320,86);rect(g,'rgba(0,0,0,.08)',x+120,y-176,40,86);rect(g,'#c8a050',x-164,y-180,328,6);
 for(let i=0;i<10;i++){ar(g,'#2a6a8a',x-148+i*30,y-96,18,40);rect(g,'#f2c82a',x-139+i*30,y-136,1.6,40);if(lit(k,140+i))ar(g,LIT,x-146+i*30,y-98,14,34)}
 for(let i=0;i<40;i++)rect(g,'#c8a050',x-160+i*8,y-188,1.6,10);rect(g,'#c8a050',x-162,y-190,324,2);
 rect(g,'#ece4cc',x-60,y-240,120,66);rect(g,'rgba(0,0,0,.08)',x+34,y-240,26,66);for(let i=0;i<3;i++){ar(g,'#2a6a8a',x-44+i*32,y-188,20,46);if(lit(k,150+i))ar(g,LIT,x-42+i*32,y-190,16,40)}rect(g,'#c8a050',x-64,y-244,128,6);
 dome(g,x,y-244,44,'#d8b45a');for(let i=-2;i<=2;i++)ln(g,'rgba(120,80,10,.35)',1.2,[x+i*10,y-246-Math.sqrt(Math.max(0,44*44-i*i*100))*.96,x+i*18,y-246]);rect(g,'#c8a050',x-1.5,y-296,3,16);dot(g,'#f2c82a',x,y-300,4);
 [[-140,34],[140,34],[-100,20],[100,20]].forEach(s=>{rect(g,'#ece4cc',x+s[0]-9,y-176-s[1]-14,18,s[1]+14);dome(g,x+s[0],y-176-s[1]-14,9,'#d8b45a')});
 g.strokeStyle='rgba(60,40,20,.7)';g.lineWidth=1;g.beginPath();for(let i=0;i<=24;i++){const u=i/24,px=x-170+u*340,py=y-174+Math.sin(u*Math.PI)*10;i?g.lineTo(px,py):g.moveTo(px,py)}g.stroke();
 for(let i=1;i<24;i++){const u=i/24,px=x-170+u*340,py=y-171+Math.sin(u*Math.PI)*10;dot(g,'rgb(255,228,150)',px,py,2.2);if(k>.05)glow(g,px,py,14,'255,214,120',.15+.3*k)}
 if(k>.3)for(let i=0;i<8;i++)glow(g,x-120+i*34,y-70+Math.sin(t+i)*0,22,'255,200,110',.2*k)});

/* =========================== ZONA 10 · Monte Pellegrino =========================== */
PR.plpellegrino=PL((g,x,y,t,a,k)=>{
 const P=[[-280,0],[-280,-110],[-246,-160],[-212,-186],[-180,-248],[-132,-262],[-96,-308],[-40,-328],[8,-312],[52,-336],[104,-318],[140,-270],[188,-258],[214,-196],[252,-168],[280,-120],[280,0]];
 poly(g,'#b8ae98',P.map(p=>[x+p[0],y+p[1]]));
 poly(g,'rgba(0,0,0,.16)',[[x+8,y-312],[x+52,y-336],[x+104,y-318],[x+140,y-270],[x+188,-258+y],[x+214,y-196],[x+252,y-168],[x+280,y-120],[x+280,y],[x+60,y],[x+90,y-120],[x+40,y-210]]);
 poly(g,'rgba(255,255,255,.12)',[[x-280,y-110],[x-246,y-160],[x-212,y-186],[x-180,y-248],[x-132,y-262],[x-150,y-190],[x-190,y-120],[x-230,y-40],[x-280,y]]);
 for(let i=0;i<22;i++){const ly=y-30-i*13,lw=60+hr(i)*120,lx=x-270+hr(i*3)*420;ln(g,'rgba(60,50,30,.16)',1.4,[lx,ly,lx+lw,ly-3-hr(i+2)*5])}
 for(let i=0;i<16;i++){const cx=x-250+hr(i*5)*480,cy=y-60-hr(i*3)*200;ln(g,'rgba(40,30,20,.2)',2,[cx,cy,cx+(hr(i)-.5)*14,cy+20+hr(i+3)*26])}
 const R=[[-210,-8],[160,-52],[-160,-104],[120,-156],[-90,-206],[60,-258]];ln(g,'#7a6e60',7,[R[0][0]+x,y+R[0][1],R[1][0]+x,y+R[1][1],R[2][0]+x,y+R[2][1],R[3][0]+x,y+R[3][1],R[4][0]+x,y+R[4][1],R[5][0]+x,y+R[5][1]]);
 g.setLineDash([8,8]);ln(g,'rgba(240,230,200,.5)',1.2,[R[0][0]+x,y+R[0][1],R[1][0]+x,y+R[1][1],R[2][0]+x,y+R[2][1],R[3][0]+x,y+R[3][1],R[4][0]+x,y+R[4][1],R[5][0]+x,y+R[5][1]]);g.setLineDash([]);
 R.forEach((r,i)=>{rect(g,'#3a3a40',x+r[0]-1,y+r[1]-26,2,26);dot(g,k>.2?LIT:'#d8d0b8',x+r[0],y+r[1]-28,3.4);if(k>.1)glow(g,x+r[0],y+r[1]-28,26,'255,214,120',.5*k)});
 for(let i=0;i<30;i++){const bx=x-270+hr(i*7)*540,by=y-2-hr(i*3)*26;dot(g,['#2a5a30','#3a6a3a','#4a7a40'][i%3],bx,by,7+hr(i)*8)}
 for(let i=0;i<26;i++)dot(g,'#f2d82a',x-270+hr(i*5)*540,y-8-hr(i*9)*30,1.8)});

PR.plsantuario=PL((g,x,y,t,a,k)=>{
 const P=[[-130,0],[-130,-150],[-90,-210],[-30,-250],[40,-290],[110,-270],[170,-220],[240,-190],[270,-120],[270,0]];
 poly(g,'#9a9078',P.map(p=>[x+p[0],y+p[1]]));poly(g,'rgba(0,0,0,.16)',[[x+110,y-270],[x+170,y-220],[x+240,y-190],[x+270,y-120],[x+270,y],[x+150,y],[x+140,y-150]]);
 for(let i=0;i<14;i++){const ly=y-30-i*16,lx=x-120+hr(i*3)*160;ln(g,'rgba(50,40,24,.18)',1.4,[lx,ly,lx+60+hr(i)*100,ly-4])}
 rect(g,'#e8dfc8',x-250,y-150,130,150);rect(g,'rgba(0,0,0,.1)',x-150,y-150,30,150);rect(g,'#c8bc9c',x-254,y-154,138,6);
 for(let i=0;i<3;i++){ar(g,'#3a2e24',x-238+i*38,y-6,28,70);ar(g,'rgba(255,200,110,'+(.25+.4*k)+')',x-235+i*38,y-8,22,62)}
 for(let i=0;i<4;i++)rect(g,'#f4eedc',x-240+i*38-2,y-76,5,70);rect(g,'#c8bc9c',x-248,y-82,118,6);
 poly(g,'#e8dfc8',[[x-232,y-154],[x-138,y-154],[x-185,y-196]]);ar(g,'#2a2018',x-198,y-160,26,40);rect(g,'#c8a040',x-188,y-150,6,10);rect(g,'#6a5a3a',x-186,y-216,2,22);rect(g,'#6a5a3a',x-192,y-210,14,2);
 for(let i=0;i<5;i++)rect(g,'#d8d0b8',x-258+i*5,y-i*5-5,140+i*0,5);
 g.fillStyle='#14100c';g.beginPath();g.moveTo(x-96,y);g.lineTo(x-96,y-110);g.quadraticCurveTo(x-96,y-190,x-20,y-196);g.quadraticCurveTo(x+60,y-196,x+90,y-120);g.lineTo(x+100,y);g.closePath();g.fill();
 const cg=g.createRadialGradient(x,y-40,4,x,y-40,150);cg.addColorStop(0,'rgba(255,190,90,'+(.55+.2*k)+')');cg.addColorStop(1,'rgba(255,150,60,0)');g.fillStyle=cg;g.beginPath();g.moveTo(x-96,y);g.lineTo(x-96,y-110);g.quadraticCurveTo(x-96,y-190,x-20,y-196);g.quadraticCurveTo(x+60,y-196,x+90,y-120);g.lineTo(x+100,y);g.closePath();g.fill();
 for(let i=0;i<10;i++){const sx=x-80+i*17+(i%2)*4,sh=16+hr(i)*30;poly(g,'#6a5e48',[[sx-5,y-190+Math.abs(i-5)*-0-(i<2||i>8?-26:0)],[sx+5,y-190-(i<2||i>8?-26:0)],[sx,y-190+sh-(i<2||i>8?-26:0)]])}
 rect(g,'#d8d0b8',x-70,y-26,150,26);rect(g,'rgba(0,0,0,.1)',x-70,y-6,150,6);rect(g,'#c8a040',x-70,y-26,150,3);
 el(g,'#f4f0e8',x,y-42,54,11);rect(g,'#e8c060',x-40,y-44,80,5);dot(g,'#f4f0e8',x-58,y-48,9);dot(g,'#d86a8a',x-62,y-56,2.4);dot(g,'#d86a8a',x-56,y-58,2.4);dot(g,'#d86a8a',x-52,y-55,2.4);
 poly(g,'#f4f0e8',[[x-54,y-44],[x-64,y-36],[x-44,y-34]]);
 for(let i=0;i<14;i++){const cx=x-80+i*12.5+hr(i)*4,cy=y-16-(i%3)*3;rect(g,'#f4ecd8',cx-1.6,cy-9,3.2,9);const fl=.8+.2*Math.sin(t*9+i*1.7);dot(g,'rgba(255,200,90,'+fl+')',cx,cy-11,2.2);glow(g,cx,cy-11,20,'255,190,80',.28+.2*k)}
 for(let i=0;i<5;i++)dot(g,['#e8505a','#f4f4ee','#d86a8a'][i%3],x+46+i*7,y-8+(i%2)*2,2.8)});

PR.plvarco=PL((g,x,y,t,a,k)=>{
 const lx=x+240,pu=.8+.2*Math.sin(t*2);
 poly(g,'#2a221a',[[x-250,y],[x-250,y-240],[x-170,y-292],[x+20,y-308],[x+170,y-290],[x+250,y-240],[x+250,y]]);
 poly(g,'#4a4034',[[x-250,y],[x-250,y-300],[x-170,y-300],[x-110,y-250],[x-30,y-210],[x+110,y-190],[x+170,y-170],[x+170,y-140],[x+110,y-110],[x+50,y-60],[x-40,y-20],[x-120,y]]);
 poly(g,'#3a3026',[[x-250,y],[x-250,y-300],[x-170,y-300],[x-190,y-220],[x-230,y-120],[x-210,y-30]]);
 poly(g,'#4a4034',[[x+250,y-300],[x+250,y],[x+200,y],[x+170,y-60],[x+200,y-160],[x+190,y-230],[x+210,y-300]]);
 rect(g,'#6a5c4a',x-250,y-6,500,6);rect(g,'rgba(255,230,160,.25)',x-120,y-6,500,2);
 for(let i=0;i<24;i++){const sx=x-250+i*22+hr(i)*8,sh=14+hr(i*3)*40;poly(g,'#5a4e3e',[[sx-6,y-300],[sx+6,y-300],[sx,y-300+sh]])}
 for(let i=0;i<30;i++){const sx=x-100+i*14,sh=10+hr(i*5)*30;poly(g,'#6a5c4a',[[sx-5,y-210+((sx-x)*.05)],[sx+5,y-210+((sx-x)*.05)],[sx,y-210+sh+((sx-x)*.05)]])}
 g.fillStyle='rgba(9,12,40,.9)';g.beginPath();g.ellipse(x-190,y-250,36,26,0,0,7);g.fill();for(let i=0;i<12;i++)dot(g,'rgba(255,255,255,'+(.5+.4*Math.sin(t*2+i))+')',x-216+hr(i)*52,y-268+hr(i*3)*34,.9+hr(i+1));
 for(let i=0;i<9;i++){const cx=x-130+i*38,cy=y-6-(i%2)*4,lean=Math.min(1,(cx-x+130)/300);rect(g,'#f4ecd8',cx-2,cy-18,4,18);const fl=.8+.2*Math.sin(t*8+i*1.9);g.fillStyle='rgba(255,200,90,'+fl+')';g.beginPath();g.ellipse(cx+lean*3,cy-23,2.4,5,-lean*.6,0,7);g.fill();glow(g,cx,cy-23,34,'255,190,80',.28)}
 const rg=g.createRadialGradient(lx,y-90,4,lx,y-90,160);rg.addColorStop(0,'rgba(255,255,255,'+pu+')');rg.addColorStop(.3,'rgba(255,230,160,'+(.6*pu)+')');rg.addColorStop(.7,'rgba(180,120,255,'+(.25*pu)+')');rg.addColorStop(1,'rgba(120,60,255,0)');g.fillStyle=rg;g.fillRect(lx-160,y-250,320,320);
 el(g,'rgba(255,255,255,.9)',lx,y-90,16,56)});

/* =========================== oggetti minori =========================== */
PR.plginestra=PL((g,x,y,t,a,k)=>{a=a||1;g.save();g.translate(x,y);g.scale(a,a);for(let i=0;i<9;i++)dot(g,['#2a5a30','#3a6a3a','#4a7a40'][i%3],-30+i*7.5+((i*5)%5),-12-((i*7)%16),9+hr(i)*4);for(let i=0;i<16;i++)dot(g,'#f2d82a',-34+hr(i*3)*68,-8-hr(i*7)*28,2);g.restore()});
PR.pllanterna=PL((g,x,y,t,a,k)=>{rect(g,'#2a2a2e',x-2,y-120,4,120);rect(g,'#2a2a2e',x-9,y-6,18,6);ln(g,'#2a2a2e',2,[x,y-110,x+14,y-120]);rect(g,'#2a2a2e',x+8,y-132,14,3);rect(g,'#2a2a2e',x+10,y-128,10,18);rect(g,k>.2?LIT:'#d8d0b8',x+12,y-126,6,14);poly(g,'#2a2a2e',[[x+7,y-132],[x+23,y-132],[x+15,y-142]]);if(k>.05)glow(g,x+15,y-118,44,'255,214,120',.55*k)});
PR.plceri=PL((g,x,y,t,a,k)=>{rect(g,'#3a3a40',x-26,y-60,52,4);rect(g,'#3a3a40',x-24,y-60,3,60);rect(g,'#3a3a40',x+21,y-60,3,60);rect(g,'#3a3a40',x-26,y-30,52,3);for(let r=0;r<2;r++)for(let i=0;i<7;i++){const cx=x-20+i*6.6,cy=y-60+r*30;rect(g,'#f4ecd8',cx-1.4,cy-10,2.8,10);dot(g,'rgba(255,200,90,'+(.8+.2*Math.sin(t*9+i*1.3+r))+')',cx,cy-12,1.9)}glow(g,x,y-70,40,'255,190,80',.3+.2*k)});
PR.plgatto=PL((g,x,y,t,a,k)=>{const c=a||'#c8a070',sw=Math.sin(t*2)*5;el(g,'rgba(0,0,0,.18)',x,y,18,3);el(g,c,x,y-9,12,9);dot(g,c,x+9,y-17,6);poly(g,c,[[x+5,y-21],[x+7,y-28],[x+10,y-22]]);poly(g,c,[[x+10,y-22],[x+13,y-28],[x+14,y-20]]);ln(g,c,3.2,[x-10,y-6,x-20,y-4+sw*.3,x-24,y-12+sw]);rect(g,'rgba(0,0,0,.16)',x-6,y-14,3,8);dot(g,'#2a2a2a',x+11,y-18,1)});
PR.plpiccioni=PL((g,x,y,t,a,k)=>{for(let i=0;i<6;i++){const px=x-70+i*28+Math.sin(t*.6+i)*5,pk=Math.max(0,Math.sin(t*3+i*2))*3;el(g,'#8a8a96',px,y-8,8,5.6);dot(g,'#6a6a7a',px+6,y-13+pk,3.4);poly(g,'#d8a050',[[px+9,y-13+pk],[px+12,y-12+pk],[px+9,y-11+pk]]);dot(g,'#4a8a7a',px+3,y-11,2);ln(g,'#d89090',1,[px-1,y-3,px-1,y]);ln(g,'#d89090',1,[px+2,y-3,px+2,y])}});
PR.plbucato=(g,x,y,t,w)=>PR.bucato(g,x,y,t,w);
PR.pledicola=(g,x,y,t)=>PR.edicola(g,x,y,t);
PR.plturista=PL((g,x,y,t,a,k)=>{[[-18,'#e8505a','#f2d890',1],[20,'#2a7ae0','#f4f0e4',-1]].forEach((p,i)=>fig(g,x+p[0],y,t+i*1.7,{f:p[3],skin:i?'#e8c8a8':'#d8a078',top:p[1],bot:i?'#c8b890':'#4a5a7a',hair:'#5a3a22',ph:i,acc:(g2,b)=>{el(g2,p[2],1,-111+b,19,4.4);el(g2,p[2],1,-116+b,10,6);rect(g2,'#c8402a',-9,-114+b,18,2);rect(g2,'#2a2a2e',7,-66,10,7);dot(g2,'#8a8a92',12,-62.5,2)}}))});

})();

/* ---------- elementi per Bologna · Dai canali alla Stazione Centrale (mondi/bologna.js) ---------- */
/* Nomi che iniziano per "bo". Hanno la loro luce (nf di Bologna): la giornata scorre da sinistra a destra, dall'alba
   dei canali nascosti alla notte della Stazione Centrale, e usano la variabile globale AVCAM come gli altri mondi
   "lunghi". Non toccano nulla di quanto esiste prima di questo blocco. */
(function(){
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,pa=A.pa,tn=A.tn,txt=A.txt,glow=A.glow,cl=A.cl;
const {ln}=PR._rm;
const {bk,merl}=PR._mi;
const {win,dome,shade,stat}=PR._pl;
const LIT='rgb(255,226,150)';
/* luce di Bologna: [posizione nel mondo, buio da 0 (giorno) a 1 (notte)] */
const NF=[[0,.14],[1700,0],[10500,0],[11200,.06],[12100,.2],[13100,.45],[13700,.7],[14300,.85],[15000,.95],[15900,1]];
const nf=wx=>{if(wx<=NF[0][0])return NF[0][1];for(let i=1;i<NF.length;i++)if(wx<=NF[i][0]){const a=NF[i-1],b=NF[i];return a[1]+(b[1]-a[1])*(wx-a[0])/(b[0]-a[0])}return 1};
const BO=f=>(g,x,y,t,a)=>{A.setDK(nf(x+AVCAM));f(g,x,y,t,a,A.getDK())};
/* riusa oggetti già esistenti (lampioni, targhe, bici...) con la luce di Bologna */
const BW=n=>(g,x,y,t,a)=>{const d=nf(x+AVCAM),sv=AVCAM;AVCAM=6700+2400*d-x;try{PR[n](g,x,y,t,a)}finally{AVCAM=sv}};
[['bolamp','avlamp'],['botarga','avtarga'],['bobici','avbici'],['bopalma','avpalma'],['botavolo','avtavolo'],['boalbero','avalbero'],['bofestoni','avfestoni']].forEach(p=>PR[p[0]]=BW(p[1]));

/* ---- piccoli attrezzi comuni ---- */
const TER='#c4724a',OCR='#d9a860',ROS='#d8a39a',CRE='#e6d4b0',MAT='#b0603e',PIE='#d8cdb4';
const lit=(k,i)=>k>.3&&hr(i)>.35;
const fin=(g,k,x,y,w,h,i)=>win(g,k,x,y,w,h,i);
/* finestra rettangolare con cornice chiara e persiane */
const fr=(g,k,x,y,w,h,i,sh)=>{rect(g,'#f0e6cc',x-3,y-h-3,w+6,h+6);const L=lit(k,i);rect(g,L?LIT:'#2e3a48',x,y-h,w,h);if(!L)rect(g,'rgba(255,255,255,.14)',x+2,y-h+2,w/3,h-4);else glow(g,x+w/2,y-h/2,24,'255,214,120',.3*k);
 if(sh){rect(g,sh,x-9,y-h,8,h);rect(g,sh,x+w+1,y-h,8,h);for(let q=0;q<h/6;q++){rect(g,'rgba(0,0,0,.18)',x-9,y-h+3+q*6,8,1);rect(g,'rgba(0,0,0,.18)',x+w+1,y-h+3+q*6,8,1)}}};
/* portico ad archi: dal suolo y, larghezza w, n arcate, altezza h */
const por=(g,k,x0,y,w,n,h,c,dk)=>{const aw=w/n;rect(g,dk||'#3a2a22',x0,y-h,w,h);
 for(let q=0;q<n;q++){const ax=x0+q*aw;ar(g,k>.25?'rgb(255,208,140)':(dk||'#3a2a22'),ax+aw*.12,y-2,aw*.76,h-8);rect(g,'rgba(0,0,0,.28)',ax+aw*.12,y-h*.5,aw*.76,h*.5);
  rect(g,c,ax-3,y-h,7,h);rect(g,'rgba(255,255,255,.16)',ax-3,y-h,2,h)}
 rect(g,c,x0+w-4,y-h,7,h);for(let q=0;q<n;q++)ar(g,c,x0+q*aw-aw*.0,y-h+aw*.5+2,aw+1,aw*.5+4)};
/* campo di stemmi / piccole etichette colorate */
const stemma=(g,x,y,c1,c2)=>{poly(g,c1,[[x-4,y-5],[x+4,y-5],[x+4,y+1],[x,y+6],[x-4,y+1]]);rect(g,c2,x-4,y-5,8,3)};
const merloni=(g,c,x,y,w,n,mh)=>merl(g,c,x,y,w,n,mh);
const tendina=(g,c,x,y,w,h)=>{for(let q=0;q<Math.floor(w/10);q++)poly(g,q%2?'#f4efe0':c,[[x+q*10,y],[x+q*10+10,y],[x+q*10+10-1,y+h],[x+q*10+1,y+h]]);};

PR._bo={nf,BO,LIT,fr,por,stemma,tendina};

/* =========================== ZONA 1 · Canali nascosti =========================== */
/* --- finestrella di via Piella: una piccola apertura nel muro, e dietro il Canale delle Moline --- */
PR.bofinestrella=BO((g,x,y,t,a,k)=>{
 bk(g,'#b4673f',x-120,y-200,240,200,1);rect(g,'rgba(255,255,255,.1)',x-120,y-200,8,200);rect(g,'rgba(0,0,0,.12)',x+100,y-200,20,200);
 for(let q=0;q<5;q++)rect(g,'rgba(210,190,150,.35)',x-120+hr(q*3)*200,y-190+hr(q*5)*180,14,5);
 rect(g,'#c8b896',x-124,y-206,248,8);rect(g,'#9a8a6a',x-124,y-199,248,2);
 /* la finestrella con la cornice di pietra */
 rect(g,'#d8cbb0',x-40,y-142,80,84);rect(g,'#bdb094',x-40,y-60,80,4);
 const wx=x-32,wy=y-134,ww=64,wh=70;
 const sk=g.createLinearGradient(0,wy,0,wy+wh);sk.addColorStop(0,tn('#bcd2e0'));sk.addColorStop(.45,tn('#e8dcc8'));sk.addColorStop(1,tn('#5e8a8c'));g.fillStyle=sk;g.fillRect(wx,wy,ww,wh);
 /* case alte sul canale che si specchiano */
 [[wx+2,'#e0a868',26,34],[wx+28,'#d79c92',18,42],[wx+46,'#e3cd9c',18,30]].forEach((h,i)=>{rect(g,h[1],h[0],wy+14-h[3]+20,h[2],h[3]+16);for(let q=0;q<2;q++)rect(g,k>.3?LIT:'#3a4650',h[0]+4+q*(h[2]/2-2),wy+22,4,7)});
 rect(g,'#4f7a52',wx+12,wy+40,3,5);dot(g,'#d8303a',wx+13.5,wy+40,2);dot(g,'#e8c030',wx+54,wy+37,1.8);
 rect(g,'#6a7a6a',wx+4,wy+45,56,2);
 const wg=g.createLinearGradient(0,wy+46,0,wy+wh);wg.addColorStop(0,tn('#6a9a9a'));wg.addColorStop(1,tn('#34606a'));g.fillStyle=wg;g.fillRect(wx,wy+46,ww,wh-46);
 for(let q=0;q<6;q++)rect(g,'rgba(255,255,255,.28)',wx+4+((q*17+t*7)%52),wy+49+q*3.4,10,1.2);
 rect(g,'rgba(224,168,104,.4)',wx+2,wy+48,26,10);rect(g,'rgba(215,156,146,.35)',wx+28,wy+48,18,12);
 /* ante di legno aperte */
 [[-1,wx-22],[1,wx+ww+2]].forEach(s=>{poly(g,'#6a4a2a',[[s[1],wy-4],[s[1]+20,wy+(s[0]<0?4:0)],[s[1]+20,wy+wh-(s[0]<0?0:4)],[s[1],wy+wh+4]]);rect(g,'rgba(0,0,0,.2)',s[1]+(s[0]<0?0:14),wy,6,wh)});
 rect(g,'#8a8a8e',x-40,y-52,80,3);
 /* un vaso di fiori sul davanzale e un lucchetto sulla cancellata */
 rect(g,'#a8603a',x+20,y-70,16,10);for(let q=0;q<4;q++)dot(g,['#e8505a','#ffd21e','#ff7ab0','#f4f4ee'][q],x+22+q*4,y-74-(q%2)*2,3);
 rect(g,'#2a2e30',x-100,y-30,60,2.6);for(let q=0;q<7;q++)rect(g,'#2a2e30',x-98+q*9,y-30,2,30);dot(g,'#d9b24a',x-72,y-24,3);dot(g,'#c8402a',x-56,y-22,2.6);
 if(k>.05)glow(g,x,y-100,70,'255,214,130',.25*k)});

/* --- Torresotto dei Piella (Porta Govese): torre-porta di mattoni con arco e merli --- */
PR.botorresotto=BO((g,x,y,t,a,k)=>{const B='#b0603e';
 [[-190,70,'#e0b27c'],[120,76,'#d79c92']].forEach((h,i)=>{const hx=x+h[0];rect(g,h[2],hx,y-168,h[1],168);rect(g,'rgba(255,255,255,.14)',hx,y-168,5,168);rect(g,'rgba(0,0,0,.1)',hx+h[1]-12,y-168,12,168);
  poly(g,'#b55e3e',[[hx-4,y-168],[hx+h[1]*.2,y-186],[hx+h[1]*.8,y-186],[hx+h[1]+4,y-168]]);
  for(let r=0;r<3;r++)fr(g,k,hx+12,y-22-r*50,16,34,i*9+r,i?'#5a8a6a':'#8a5a3a'),fr(g,k,hx+h[1]-30,y-22-r*50,16,34,i*9+r+4,i?'#5a8a6a':'#8a5a3a')});
 bk(g,B,x-62,y-190,124,190,2);rect(g,'rgba(255,230,190,.12)',x-62,y-190,8,190);rect(g,'rgba(0,0,0,.14)',x+40,y-190,22,190);
 rect(g,'#cdbb98',x-68,y-122,136,5);bk(g,B,x-70,y-226,140,36,3);merloni(g,B,x-70,y-226,140,8,16);rect(g,'#cdbb98',x-72,y-192,144,6);
 rect(g,'#2a1a12',x-6,y-214,12,22);rect(g,k>.3?LIT:'#2a1a12',x-4,y-212,8,18);
 for(let q=0;q<2;q++){rect(g,'#2a1a12',x-34+q*60,y-170,8,26);rect(g,k>.3?LIT:'#2a1a12',x-33+q*60,y-169,6,24)}
 /* arco a tutto sesto e il vicolo che passa sotto */
 ar(g,'#cdbb98',x-40,y,80,116);ar(g,'#2a2018',x-33,y,66,110);rect(g,'rgba(255,214,140,'+(.12+k*.4)+')',x-26,y-70,52,70);
 for(let q=0;q<9;q++){const an=Math.PI+q*Math.PI/8;rect(g,'#8a5a3a',x+Math.cos(an)*38-2.5,y-83+Math.sin(an)*38-2.5,5,6)}
 rect(g,'#4a4a4e',x-26,y-4,52,4);rect(g,'rgba(0,0,0,.2)',x-62,y-4,124,4);
 txt(g,'VIA PIELLA',x-110,y-150,7,'#e8d8b0')});

/* --- Navile e Porto: il canale con la chiusa a gradini, banchina di mattoni, la Salara --- */
PR.bonavile=BO((g,x,y,t,a,k)=>{
 /* Salara: edificio basso e lungo sul fondo */
 rect(g,'#d9b890',x+30,y-116,240,64);rect(g,'rgba(0,0,0,.1)',x+250,y-116,20,64);poly(g,'#b0583a',[[x+24,y-116],[x+60,y-138],[x+240,y-138],[x+276,y-116]]);
 for(let q=0;q<7;q++)ar(g,'#6a4a30',x+42+q*32,y-52,18,40);for(let q=0;q<7;q++)ar(g,k>.3?LIT:'#2a2a30',x+45+q*32,y-52,12,34);
 rect(g,'#6a4a2a',x+30,y-54,240,3);
 /* alberi e argini erbosi */
 [[-250,1.1],[-186,.9],[-20,1],[300,1.15]].forEach((T,i)=>{const tx=x+T[0],s=T[1];rect(g,'#5a4430',tx-3*s,y-70*s-30,6*s,70*s);for(let q=0;q<5;q++)dot(g,['#3f7a3a','#4a8a3e','#376a34','#5a9a4a','#3f7a3a'][q],tx+(q-2)*17*s+Math.sin(t*.8+q+i)*1.2,y-116*s-20-(q%2)*14*s,24*s)});
 poly(g,'#5f8f4a',[[x-290,y-44],[x-290,y-30],[x-60,y-26],[x-60,y-40],[x-140,y-52],[x-230,y-52]]);
 for(let q=0;q<30;q++)rect(g,'rgba(255,255,255,.12)',x-280+hr(q)*210,y-46+hr(q+3)*14,3,2);
 /* canale */
 const wg=g.createLinearGradient(0,y-50,0,y-8);wg.addColorStop(0,tn('#5f8f8c'));wg.addColorStop(1,tn('#2f5f68'));g.fillStyle=wg;g.fillRect(x-290,y-36,580,28);
 for(let q=0;q<16;q++)rect(g,'rgba(255,255,255,.28)',x-290+((q*47+t*8)%580),y-34+(q*5%24),10+(q%3)*7,1.2);
 /* chiusa (sostegno): gradini di muratura e porte di legno */
 rect(g,'#b8a07a',x-60,y-64,40,56);rect(g,'rgba(0,0,0,.14)',x-30,y-64,10,56);rect(g,'#a89068',x+20,y-52,40,44);
 for(let q=0;q<4;q++)rect(g,'rgba(0,0,0,.14)',x-60,y-60+q*13,40,1.4);
 rect(g,'#6a4a2a',x-18,y-70,38,5);rect(g,'#6a4a2a',x-18,y-70,4,40);rect(g,'#6a4a2a',x+16,y-70,4,40);
 for(let q=0;q<5;q++){const u=(t*.8+q*.2)%1;ln(g,'rgba(235,250,255,'+(.7*(1-u*.4))+')',1.6,[x-16+q*7,y-60+u*10,x-16+q*7,y-30])}
 for(let q=0;q<4;q++)dot(g,'rgba(255,255,255,'+(.5-q*.1)+')',x-10+q*8,y-30+Math.sin(t*3+q)*1.5,2.6);
 /* banchina di mattoni */
 bk(g,'#a8553a',x-290,y-12,580,12,5);rect(g,'#cdbb98',x-290,y-13,580,3);rect(g,'rgba(0,0,0,.2)',x-290,y-3,580,3);
 [-210,70,200].forEach(bx=>{rect(g,'#2a2c30',x+bx-3,y-22,6,10);el(g,'#2a2c30',x+bx,y-22,5,2.4)});
 /* barchette ferme */
 [[-170,'#2f4f6a','#e8d8a8'],[150,'#7a2e2a','#f2ecdc']].forEach((b,i)=>{const bx=x+b[0],by=y-25+Math.sin(t*1.2+i*2)*1.2;poly(g,b[1],[[bx-32,by-6],[bx+32,by-6],[bx+24,by+6],[bx-24,by+6]]);rect(g,b[2],bx-31,by-7,62,3);rect(g,'#6a4a2a',bx-2,by-26,3,20);poly(g,'#f4efe0',[[bx+1,by-26],[bx+16,by-10],[bx+1,by-10]])});
 if(k>.05)glow(g,x+150,y-90,110,'255,210,130',.2*k)});

/* =========================== ZONA 2 · Quadrilatero e Mercato di Mezzo =========================== */
/* --- Quadrilatero: la stradina delle botteghe, salumerie con mortadelle e prosciutti appesi, pasta fresca --- */
PR.boquadrilatero=BO((g,x,y,t,a,k)=>{
 [[-250,'#d9a060',260],[20,'#c9604a',240]].forEach((b,j)=>{const bx=x+b[0],bw=b[2];rect(g,b[1],bx,y-206,bw,206);rect(g,'rgba(255,255,255,.12)',bx,y-206,7,206);rect(g,'rgba(0,0,0,.1)',bx+bw-14,y-206,14,206);
  for(let q=0;q<5;q++)rect(g,'rgba(120,60,30,.12)',bx+hr(q*3+j)*(bw-40),y-196+hr(q*5+j)*100,22,12);
  rect(g,'#8a6a48',bx-3,y-212,bw+6,7);poly(g,'#b55e3e',[[bx-3,y-212],[bx+22,y-228],[bx+bw-22,y-228],[bx+bw+3,y-212]]);
  for(let q=0;q<4;q++)fr(g,k,bx+16+q*(bw-48)/3,y-142,20,40,j*7+q,j?'#4f7a52':'#8a3a2a');
  for(let q=0;q<4;q++)fr(g,k,bx+16+q*(bw-48)/3,y-196+0,20,40,j*7+q+20,null);
  rect(g,'#6a5a46',bx,y-122,bw,6)});
 /* salumeria con le insegne */
 rect(g,'#2a1a14',x-246,y-112,252,112);rect(g,'#6a1f2a',x-246,y-116,252,18);rect(g,'#d9b24a',x-246,y-98,252,2);txt(g,'SALUMERIA · MORTADELLA',x-120,y-102,10,'#f2dc9a');
 const vt=g.createLinearGradient(0,y-94,0,y);vt.addColorStop(0,'rgb(255,226,170)');vt.addColorStop(1,'rgb(236,196,134)');
 rect(g,k>.2?'rgb(255,214,140)':'#e8d8b8',x-238,y-90,100,90);rect(g,'#5a3a22',x-238,y-90,100,3);
 for(let q=0;q<5;q++){const mx=x-226+q*20,ml=26+(q%3)*6;ln(g,'#6a5a3a',1,[mx,y-87,mx,y-82]);el(g,'#e8a0a0',mx,y-82+ml/2,7,ml/2);el(g,'#f4c8c4',mx-2,y-84+ml/2,2.4,ml/2-3);ln(g,'#c8a050',1.2,[mx-6,y-78,mx+6,y-76]);rect(g,'#f4ecd0',mx-3,y-60-(q%2)*6,6,4)}
 for(let q=0;q<3;q++){const px=x-222+q*34;el(g,'#8a3a2a',px,y-38,11,16);el(g,'#a8503a',px-2,y-42,5,9);rect(g,'#e8d8b0',px+8,y-30,6,5)}
 rect(g,'#6a4a2a',x-238,y-24,100,3);for(let q=0;q<4;q++){dot(g,'#f2d878',x-228+q*24,y-14,10);dot(g,'#fbe9a0',x-231+q*24,y-17,4)}
 /* pasta fresca */
 rect(g,k>.2?'rgb(255,214,140)':'#e8e0cc',x-124,y-90,106,90);rect(g,'#5a3a22',x-124,y-90,106,3);
 for(let r=0;r<2;r++)for(let q=0;q<5;q++){const cx=x-110+q*19,cy=y-64+r*24;dot(g,'#f0dca0',cx,cy,8);dot(g,'#e0c078',cx,cy,4.4)}
 rect(g,'#4a3a2a',x-124,y-41,106,2);for(let q=0;q<9;q++)el(g,'#f2e2b0',x-114+q*11,y-16,5,2.6);rect(g,'#6a4a2a',x-124,y-12,106,3);
 ar(g,'#5a3a22',x-12,y,34,84);ar(g,'rgba(255,200,120,.55)',x-8,y,26,78);
 /* tende e insegne a bandiera */
 tendina(g,'#c8302a',x+24,y-110,92,18);tendina(g,'#2f6a4a',x+130,y-110,100,18);
 rect(g,k>.2?'rgb(255,214,140)':'#e0d4b6',x+28,y-92,84,92);rect(g,'#3a2a1a',x+28,y-92,84,3);
 for(let q=0;q<4;q++)rect(g,['#e8b02a','#c8402a','#6a8a3a','#e8e0c8'][q],x+36+q*18,y-72,14,10+q*2);
 rect(g,'#7a5a3a',x+28,y-60,84,5);for(let q=0;q<5;q++){dot(g,'#c8402a',x+38+q*14,y-67,4.4);dot(g,'#6a9a3a',x+38+q*14,y-47,4.4)}
 rect(g,'#dfdbd0',x+130,y-92,100,92);rect(g,'#7a5a3a',x+130,y-60,100,5);for(let q=0;q<6;q++)rect(g,['#e0a030','#d8402a','#8aa040','#f0e8c0'][q%4],x+138+q*15,y-76,12,16);rect(g,'#bfa070',x+130,y-34,100,34);
 [[-112,-70],[56,-60]].forEach(()=>{});
 txt(g,'VIA CLAVATURE',x-20,y-134,7,'#f4ecd8');
 if(k>.05){glow(g,x-180,y-60,100,'255,210,130',.35*k);glow(g,x+80,y-60,90,'255,210,130',.3*k)}});

/* --- Via Pescherie Vecchie: banchi di pesce sul ghiaccio, frutta, tavolini per l'aperitivo --- */
PR.bopescherie=BO((g,x,y,t,a,k)=>{
 [[-190,'#d8a868',120],[100,'#d79c92',130]].forEach((b,j)=>{rect(g,b[1],x+b[0],y-230,b[2],230);rect(g,'rgba(0,0,0,.1)',x+b[0]+b[2]-12,y-230,12,230);rect(g,'#a55a3a',x+b[0]-3,y-236,b[2]+6,7);
  for(let r=0;r<3;r++)fr(g,k,x+b[0]+22,y-130-r*0-r*0+(-r*58)+58,18,36,j*5+r,j?'#4f7a52':'#8a3a2a'),fr(g,k,x+b[0]+b[2]-44,y-72-r*58+58,18,36,j*5+r+9,j?'#4f7a52':'#8a3a2a')});
 const stand=(sx,col,kind)=>{rect(g,'#5a4430',sx-56,y-132,4,132);rect(g,'#5a4430',sx+52,y-116,4,116);
  tendina(g,col,sx-60,y-132,116,14);
  rect(g,'#7a5a3a',sx-58,y-46,116,7);rect(g,'#6a4a30',sx-56,y-39,112,39);
  if(kind==0){rect(g,'#dfeaf0',sx-54,y-52,108,7);for(let q=0;q<7;q++){const fx=sx-44+q*14,fy=y-58-(q%2)*1.4;el(g,['#c8d4dc','#e8a8a0','#b8c8d4'][q%3],fx,fy,8,3.2);poly(g,'#aab8c4',[[fx+7,fy],[fx+12,fy-3],[fx+12,fy+3]]);dot(g,'#222',fx-4,fy-.6,.9)}
   for(let q=0;q<3;q++){el(g,'#8a8f98',sx-30+q*26,y-62,5,2);}rect(g,'#2a2e2a',sx-14,y-34,28,15);txt(g,'€ 14',sx,y-23,9,'#f4f4ee')}
  else{[['#d8302a',-40],['#3aa05a',-14],['#f08a1a',12],['#f2d82a',38]].forEach(c=>{rect(g,'#8a5a30',sx+c[1]-11,y-56,22,14);for(let q=0;q<6;q++)dot(g,c[0],sx+c[1]-8+(q%3)*8,y-58-Math.floor(q/3)*6,4.2)})}
  if(k>.05)glow(g,sx,y-100,60,'255,214,130',.28*k)};
 stand(x-60,'#2a7ae0',0);stand(x+30,'#e8802a',1);
 /* tavolini all'aperto con spritz */
 [[-170],[190]].forEach((tb,i)=>{const tx=x+tb[0];rect(g,'#6a4a2a',tx-22,y-30,44,4);rect(g,'#4a3a2a',tx-1.5,y-26,3,26);rect(g,'#4a3a2a',tx-10,y-3,20,3);dot(g,'#f08a1a',tx-8,y-36,4);rect(g,'#f4f4ee',tx-8.8,y-34,1.6,5);dot(g,'#e8a030',tx+8,y-36,4);rect(g,'#f4f4ee',tx+7.2,y-34,1.6,5)});
 txt(g,'VIA PESCHERIE VECCHIE',x+2,y-176,7,'#f4ecd8');
 fig(g,x+110,y-4,t,{f:-1,skin:'#d8a078',top:'#4a6a9a',bot:'#3a3a40',hair:'#6a5a4a',acc:(g2,b)=>{rect(g2,'#d9b24a',-16,-66+b,8,18);rect(g2,'#6a4a2a',-17,-67+b,10,3)}})});

/* --- Osteria del Sole: la piccola porta con l'insegna "vino", i tavoli lunghi e il pacchetto di salumi --- */
PR.boosteria=BO((g,x,y,t,a,k)=>{
 rect(g,'#d6a070',x-120,y-210,240,210);rect(g,'rgba(255,255,255,.1)',x-120,y-210,7,210);rect(g,'rgba(0,0,0,.12)',x+102,y-210,18,210);
 for(let q=0;q<6;q++)rect(g,'rgba(120,60,30,.12)',x-110+hr(q*3)*190,y-200+hr(q*5)*160,22,12);
 rect(g,'#8a6a48',x-124,y-216,248,7);poly(g,'#b55e3e',[[x-124,y-216],[x-96,y-234],[x+96,y-234],[x+124,y-216]]);
 for(let q=0;q<2;q++)[-86,50].forEach((o,i)=>fr(g,k,x+o,y-130-q*0+(q?-62:0)+0,20,38,i+q*3+40,'#4f7a52'));
 /* porta con insegna */
 ar(g,'#6a4a2a',x-32,y,64,106);ar(g,k>.2?'rgb(255,208,130)':'#2a1c14',x-26,y,52,100);
 rect(g,'rgba(0,0,0,.3)',x-26,y-48,52,48);rect(g,'#7a5a3a',x-24,y-30,48,5);rect(g,'#5a3e24',x-22,y-25,4,25);rect(g,'#5a3e24',x+18,y-25,4,25);
 for(let q=0;q<3;q++){dot(g,'#c8402a',x-14+q*14,y-36,3.6);rect(g,'#f4ecd0',x-15+q*14,y-34,2,4)}
 rect(g,'#f0e0c0',x-12,y-40,24,8);rect(g,'#b0402a',x-9,y-40,18,3);
 rect(g,'#6a4a2a',x+44,y-142,3,22);rect(g,'#3a2a1a',x+20,y-152,50,22);rect(g,'#e8d8b0',x+22,y-150,46,18);txt(g,'vino',x+45,y-136,13,'#7a1f2a','bold italic');
 /* lanterna */
 rect(g,'#2a2a2e',x-76,y-126,2,16);rect(g,'#2a2a2e',x-82,y-130,14,12);rect(g,k>.1?LIT:'#e8d8a0',x-80,y-128,10,9);glow(g,x-75,y-122,50,'255,214,130',.25+k*.4);
 txt(g,'VICOLO RANOCCHI',x-70,y-176,6.5,'#f4ecd8');txt(g,'1465',x+45,y-170,8,'#6a3a1a');
 poly(g,'#f0e8d0',[[x+54,y-40],[x+74,y-40],[x+70,y-28],[x+58,y-28]]);rect(g,'#c85a4a',x+57,y-36,14,3)});

/* =========================== ZONA 3 · Piazza Maggiore e Piazza del Nettuno =========================== */
/* --- Piazza Maggiore: il Crescentone di pietra chiara, i portici con i tavolini, la gente seduta a terra --- */
PR.bopiazza=BO((g,x,y,t,a,k)=>{
 /* portico di fondo con tavolini di caffè */
 por(g,k,x-260,y-26,520,10,86,'#d8a070','#4a3428');rect(g,'#e0b080',x-262,y-118,524,10);merloni(g,'#d8a070',x-262,y-118,524,26,10);
 for(let q=0;q<5;q++)rect(g,'rgba(120,60,30,.14)',x-250+hr(q*3)*480,y-210+hr(q*5)*60,30,12);
 /* il Crescentone: pedana rialzata */
 rect(g,'#e8dfc8',x-250,y-26,500,12);rect(g,'#d4c9ac',x-250,y-14,500,6);rect(g,'rgba(0,0,0,.1)',x-250,y-8,500,8);
 for(let q=0;q<10;q++)rect(g,'rgba(0,0,0,.12)',x-250+q*50,y-26,1.4,12);
 rect(g,'#f0e8d4',x-232,y-30,464,5);
 /* gente seduta a terra e sui bordi */
 [[-170,'#e8505a'],[-120,'#2a7ae0'],[40,'#f2c82a'],[170,'#3aa05a'],[210,'#9a50c0']].forEach((p,i)=>{const px=x+p[0],by=y-30;rect(g,'#3a3a40',px-9,by-8,18,8);rect(g,p[1],px-6,by-26,12,20);dot(g,['#d8a078','#e8b890','#c88a64'][i%3],px,by-31,5);dot(g,['#2a1a10','#6a4a2a','#1a1a1a'][i%3],px,by-33,5);
  if(i==1)rect(g,'#2a2a30',px+7,by-16,9,5)});
 /* tavolini sotto il portico */
 [[-230],[100],[230]].forEach(o=>{const tx=x+o[0];rect(g,'#6a4a2a',tx-14,y-48,28,3);rect(g,'#4a3a2a',tx-1,y-45,2,19);dot(g,'#f4ecd8',tx-6,y-52,3);dot(g,'#f4ecd8',tx+7,y-52,3)});
 if(k>.05)glow(g,x,y-60,150,'255,200,110',.2*k)});

/* --- Fontana del Nettuno: il Gigante di bronzo con il tridente, putti con delfini, sirene che spruzzano --- */
PR.bonettuno=BO((g,x,y,t,a,k)=>{const BR='#5f5a36',BR2='#7a7448';
 el(g,'#d9d2bc',x,y-6,104,16);el(g,'#7ab6cf',x,y-9,94,11);rect(g,'#e0d8c0',x-96,y-14,192,8);
 rect(g,'rgba(255,255,255,.2)',x-96,y-14,192,2);
 /* vasca e basamento di marmo */
 rect(g,'#ece4cc',x-34,y-62,68,50);rect(g,'rgba(0,0,0,.1)',x+10,y-62,24,50);rect(g,'#d8d0b8',x-40,y-66,80,8);rect(g,'#d8d0b8',x-28,y-92,56,26);rect(g,'rgba(0,0,0,.1)',x+6,y-92,22,26);rect(g,'#c8c0a8',x-32,y-96,64,6);
 /* nicchie di marmo scolpite */
 for(let q=0;q<3;q++)rect(g,'rgba(120,100,70,.25)',x-26+q*18,y-58,10,26);
 /* Nettuno */
 poly(g,BR,[[x-9,y-96],[x-12,y-150],[x-6,y-196],[x+6,y-196],[x+12,y-150],[x+9,y-96]]);poly(g,BR2,[[x+2,y-96],[x+9,y-96],[x+12,y-150],[x+6,y-196],[x+3,y-190]]);
 dot(g,BR,x,y-205,9);rect(g,BR,x-5,y-198,10,6);poly(g,'#4a4628',[[x-9,y-209],[x,y-216],[x+9,y-209],[x+5,y-200],[x-5,y-200]]);
 ln(g,BR,6,[x+9,y-186,x+26,y-170]);ln(g,BR,6,[x-9,y-186,x-24,y-170]);
 /* tridente */
 ln(g,'#6a6238',3,[x+30,y-96,x+30,y-236]);ln(g,'#6a6238',2.4,[x+22,y-230,x+22,y-240]);ln(g,'#6a6238',2.4,[x+38,y-230,x+38,y-240]);ln(g,'#6a6238',2.4,[x+22,y-232,x+38,y-232]);ln(g,'#6a6238',2.8,[x+30,y-232,x+30,y-246]);
 ln(g,BR,5,[x+24,y-178,x+30,y-168]);
 /* putti con delfini e sirene */
 [-1,1].forEach(s=>{const px=x+s*52;dot(g,BR,px,y-62,6);rect(g,BR,px-3,y-56,6,12);ln(g,BR,3,[px+s*4,y-58,px+s*12,y-50]);el(g,BR2,px+s*16,y-46,9,4);
  dot(g,BR,x+s*70,y-38,5);poly(g,BR,[[x+s*66,y-34],[x+s*74,y-34],[x+s*72,y-22],[x+s*68,y-22]]);ln(g,BR,2.4,[x+s*74,y-36,x+s*80,y-44]);
  for(let q=0;q<3;q++){const u=(t*1.2+q*.33+s*.1)%1;ln(g,'rgba(210,240,255,'+(.8*(1-u))+')',1.6,[x+s*74,y-44,x+s*(80+u*22),y-56+u*34])}});
 [-1,1].forEach(s=>{const sx=x+s*76;poly(g,BR,[[sx-6,y-14],[sx+6,y-14],[sx+4,y-34],[sx-4,y-34]]);dot(g,BR,sx,y-38,5);for(let q=0;q<4;q++){const u=(t*1.4+q*.25)%1;ln(g,'rgba(210,240,255,'+(.8*(1-u))+')',1.4,[sx,y-34,sx+s*u*26,y-30+u*18])}});
 for(let q=0;q<9;q++){const jx=x-90+q*22.5,u=(t*.9+q*.13)%1;ln(g,'rgba(220,245,255,'+(.55*(1-u))+')',1.3,[x-40+q*10,y-40-(q%3)*5,jx,y-9+Math.sin(t*3+q)*1.2])}
 for(let q=0;q<7;q++)dot(g,'#e8c850',x-80+q*26,y-5,1.6);
 if(k>.1)glow(g,x,y-100,110,'255,226,170',.3*k)});

/* --- Basilica di San Petronio: la facciata a metà di marmo e a metà di mattoni, la scalinata, la meridiana --- */
PR.bopetronio=BO((g,x,y,t,a,k)=>{const W='#efe6d8',P='#e0b4aa',B='#b0603e',W2='#d8cdb8';
 /* parte alta incompiuta: mattoni a vista e sagoma a gradoni */
 poly(g,B,[[x-190,y-132],[x-190,y-228],[x-130,y-228],[x-130,y-266],[x-60,y-266],[x-60,y-292],[x+60,y-292],[x+60,y-266],[x+130,y-266],[x+130,y-228],[x+190,y-228],[x+190,y-132]]);
 for(let r=0;r<22;r++)rect(g,'rgba(50,16,6,.15)',x-190,y-134-r*7.6,380,1);for(let q=0;q<30;q++)rect(g,'rgba(40,12,4,'+(.05+hr(q)*.07)+')',x-186+hr(q*3)*370,y-136-hr(q*5)*150,10,4);
 rect(g,'rgba(0,0,0,.1)',x+110,y-132,80,100);
 [-130,-60,0,60,130].forEach((o,i)=>{const w=i==2?26:20,top=i==2?y-226:y-208;ar(g,'#d8c8a8',x+o-w/2-3,top+40,w+6,70);ar(g,k>.3?LIT:'#2a1c18',x+o-w/2,top+38,w,64)});
 for(let q=0;q<4;q++){rect(g,'#6a4a2a',x-170+q*110,y-250,3,18);rect(g,'#6a4a2a',x-174+q*110,y-250,10,2)}
 rect(g,W2,x-192,y-134,384,6);for(let q=0;q<26;q++)rect(g,W2,x-190+q*15,y-142,7,8);
 /* parte bassa rivestita di marmo bianco e rosa a scacchi */
 rect(g,W,x-190,y-132,380,132);for(let r=0;r<6;r++)for(let q=0;q<19;q++)if((q+r)%2==0)rect(g,P,x-190+q*20,y-132+r*22,20,22);
 rect(g,'rgba(255,255,255,.18)',x-190,y-132,60,132);rect(g,'rgba(0,0,0,.1)',x+140,y-132,50,132);
 /* contrafforti */
 [-188,-66,66,172].forEach(o=>{rect(g,'#f6efe0',x+o,y-136,16,136);rect(g,'rgba(0,0,0,.12)',x+o+10,y-136,6,136);rect(g,'#d8cdb8',x+o-2,y-142,20,6)});
 /* tre portali scolpiti */
 [-124,0,124].forEach((o,i)=>{const w=i==1?66:46,h=i==1?112:84,px=x+o;ar(g,'#d8cdb8',px-w/2-6,y-6,w+12,h+10);ar(g,'#c8bca4',px-w/2-3,y-6,w+6,h+5);
  ar(g,k>.2?'rgb(255,214,140)':'#241a14',px-w/2,y-6,w,h);for(let q=0;q<4;q++)rect(g,'#ece4cc',px-w/2-8+(q%2)*(w+10),y-30-q*18,8,10);
  if(i==1){rect(g,'rgba(255,230,160,'+(.35+k*.2)+')',x-3,y-6-0,6,60);rect(g,'rgba(255,244,200,.9)',x-1,y-6,2,40)}
  rect(g,'#e8e0c8',px-w/2-2,y-h-14,w+4,6)});
 /* scalinata */
 for(let q=0;q<4;q++)rect(g,q%2?'#d8cdb8':'#e4dac4',x-150+q*10,y-q*5-5,300-q*20,5);
 /* statua di San Petronio sopra il portale centrale */
 rect(g,'#d8cdb8',x-12,y-148,24,6);poly(g,'#cfc6b0',[[x-8,y-148],[x-9,y-176],[x+9,y-176],[x+8,y-148]]);dot(g,'#cfc6b0',x,y-181,5)});

/* --- Palazzo del Podestà e Palazzo Re Enzo: i due palazzi che si danno la mano, il Voltone sotto la torre --- */
PR.bopodesta=BO((g,x,y,t,a,k)=>{const C='#d9a070',D='#c4885a',T='#b0603e';
 /* Palazzo Re Enzo: merli, mattoni, scala esterna */
 bk(g,'#b4673f',x+60,y-170,180,170,1);merloni(g,'#b4673f',x+58,y-170,184,10,16);rect(g,'#d8c4a0',x+56,y-174,188,6);
 for(let q=0;q<4;q++)fr(g,k,x+80+q*40,y-110,14,34,q+60,null);
 poly(g,'#c8b894',[[x+60,y],[x+60,y-76],[x+100,y-76],[x+140,y-76],[x+140,y]]);for(let q=0;q<6;q++)ln(g,'rgba(0,0,0,.18)',1,[x+62+q*13,y,x+62+q*13,y-76]);
 poly(g,'#c8b894',[[x+60,y],[x+140,y-70],[x+146,y-70],[x+146,y-78],[x+60,y-6]]);
 ar(g,'#2a1c18',x+168,y,34,84);ar(g,k>.2?'rgb(255,214,140)':'#3a2a22',x+171,y,28,78);
 /* Palazzo del Podestà: il portico di grandi archi e il piano nobile con i balconi */
 rect(g,C,x-250,y-190,310,190);rect(g,'rgba(255,255,255,.12)',x-250,y-190,8,190);rect(g,'rgba(0,0,0,.1)',x+40,y-190,20,190);
 for(let q=0;q<6;q++)rect(g,'rgba(120,60,30,.12)',x-240+hr(q*3)*250,y-180+hr(q*5)*90,22,12);
 rect(g,D,x-252,y-196,314,8);for(let q=0;q<38;q++)rect(g,'#e8d4a8',x-250+q*8.2,y-200,4,5);
 for(let q=0;q<5;q++){const fx=x-232+q*58;ar(g,'#e8d8b8',fx-4,y-110,34,58);ar(g,k>.3?LIT:'#2e3a48',fx,y-112,26,52);rect(g,'#6a4a2a',fx-6,y-114,38,3);for(let r=0;r<5;r++)rect(g,'#2a2a2e',fx-4+r*8,y-114,1.4,8)}
 rect(g,'#e0d4b0',x-252,y-98,314,7);
 for(let q=0;q<4;q++){const ax=x-246+q*72;ar(g,'#e8d8b8',ax,y,68,100);ar(g,'#2a1c18',ax+6,y,56,94);rect(g,'rgba(255,214,140,'+(.15+k*.4)+')',ax+10,y-54,48,54);rect(g,'#e8d8b8',ax+66,y-100,8,100)}
 rect(g,'#e8d8b8',x-250,y-100,8,100);
 /* il Voltone: due strade che si incrociano sotto la volta */
 ar(g,'#e8d8b8',x-6,y,84,104);ar(g,'#1e140f',x+2,y,68,96);rect(g,'rgba(255,214,140,'+(.2+k*.4)+')',x+12,y-70,48,70);
 ln(g,'#7a6a52',1.6,[x-4,y-100,x+70,y-6]);ln(g,'#7a6a52',1.6,[x+70,y-100,x-4,y-6]);
 /* Torre dell'Arengo con la campana */
 rect(g,T,x-60,y-330,52,140);rect(g,'rgba(255,230,190,.12)',x-60,y-330,5,140);rect(g,'rgba(0,0,0,.14)',x-20,y-330,12,140);
 for(let q=0;q<14;q++)rect(g,'rgba(50,16,6,.15)',x-60,y-326+q*10,52,1);
 rect(g,'#e8d4a8',x-64,y-334,60,6);merloni(g,T,x-64,y-334,60,5,14);ar(g,'#e8d4a8',x-48,y-244,22,44);ar(g,'#2a1812',x-45,y-244,16,40);rect(g,'#d9b24a',x-40,y-262,6,10);
 rect(g,'#6a4a2a',x-36,y-366,4,32);poly(g,'#6a4a2a',[[x-42,y-352],[x-30,y-352],[x-32,y-340],[x-40,y-340]]);rect(g,'#7a8a6a',x-60,y-368,2,2);
 txt(g,'VOLTONE DEL PODESTÀ',x+36,y-122,6,'#5a3a22')});

/* --- Palazzo d'Accursio e Sala Borsa: la torre dell'orologio, il portale con il papa di bronzo, la vetrata --- */
PR.boaccursio=BO((g,x,y,t,a,k)=>{const C='#d98a62',D='#c0704c',E='#e8d4a8';
 /* Sala Borsa: grande vetrata sulla sinistra */
 rect(g,'#d8b890',x-250,y-186,130,186);rect(g,'rgba(0,0,0,.1)',x-136,y-186,16,186);rect(g,E,x-252,y-192,134,8);
 rect(g,'#9ab8c4',x-236,y-170,102,126);for(let q=0;q<6;q++)rect(g,'rgba(255,255,255,.28)',x-236+q*17,y-170,1.6,126);for(let q=0;q<5;q++)rect(g,'rgba(255,255,255,.25)',x-236,y-170+q*25,102,1.6);
 rect(g,k>.3?'rgba(255,224,160,.5)':'rgba(255,255,255,.18)',x-236,y-170,102,126);txt(g,'BIBLIOTECA SALA BORSA',x-185,y-184,6.5,'#6a3a1a');
 ar(g,'#6a4a32',x-206,y,40,38);ar(g,'#2a1c18',x-202,y,32,34);
 /* il palazzo */
 rect(g,C,x-120,y-214,330,214);rect(g,'rgba(255,240,210,.14)',x-120,y-214,10,214);rect(g,'rgba(0,0,0,.12)',x+192,y-214,18,214);
 for(let q=0;q<6;q++)rect(g,'rgba(120,50,20,.15)',x-110+hr(q*3)*300,y-200+hr(q*5)*160,24,12);
 rect(g,E,x-124,y-220,338,8);merloni(g,C,x-120,y-232,330,22,12);
 for(let r=0;r<2;r++)for(let q=0;q<6;q++){if(q==3&&r==0)continue;fr(g,k,x-96+q*46,y-96-r*0-(r?0:0)+(r?-0:0)+(r?-64:0)+0,18,40,q+r*7+70,null)}
 rect(g,E,x-120,y-114,330,5);
 for(let q=0;q<6;q++)if(q!=3)fr(g,k,x-96+q*46,y-30,18,38,q+90,'#4f7a52');
 /* portale monumentale con la statua di bronzo di Gregorio XIII */
 rect(g,E,x+14,y-130,76,130);ar(g,'#c8b48c',x+22,y,60,100);ar(g,'#2a1812',x+28,y,48,94);rect(g,'rgba(255,214,140,'+(.15+k*.35)+')',x+32,y-60,40,60);
 rect(g,E,x+10,y-136,84,8);rect(g,'#c8b48c',x+34,y-186,36,52);ar(g,'#6a5a3a',x+40,y-132,24,46);
 poly(g,'#6f6a3a',[[x+46,y-132],[x+44,y-160],[x+48,y-170],[x+56,y-170],[x+60,y-160],[x+58,y-132]]);dot(g,'#6f6a3a',x+52,y-174,5);poly(g,'#6f6a3a',[[x+48,y-178],[x+52,y-186],[x+56,y-178]]);ln(g,'#6f6a3a',2.4,[x+58,y-150,x+66,y-166]);
 /* torre dell'orologio */
 rect(g,D,x+130,y-318,52,110);rect(g,'rgba(0,0,0,.14)',x+168,y-318,14,110);rect(g,E,x+126,y-322,60,6);merloni(g,D,x+126,y-322,60,5,14);
 dot(g,'#f4efe0',x+156,y-268,16);dot(g,'#2a2a2e',x+156,y-268,1.8);ln(g,'#2a2a2e',2,[x+156,y-268,x+156,y-280]);ln(g,'#2a2a2e',1.6,[x+156,y-268,x+166,y-264]);g.strokeStyle=tn('#6a5a3a');g.lineWidth=2;g.beginPath();g.arc(x+156,y-268,16,0,7);g.stroke();
 ar(g,'#2a1812',x+148,y-224,16,28);poly(g,'#7a8a76',[[x+124,y-336],[x+156,y-376],[x+188,y-336]]);ln(g,'#d9b24a',1.6,[x+156,y-376,x+156,y-392]);
 /* un lembo di pavimento di vetro con le rovine romane */
 el(g,'#8aaab8',x-60,y+14,64,6);el(g,'#4a4a4e',x-60,y+14,56,4);for(let q=0;q<6;q++)rect(g,'#9a7a5a',x-100+q*14,y+11,8,5);
 if(k>.05)glow(g,x+50,y-60,120,'255,210,130',.22*k)});

/* =========================== ZONA 4 · Due Torri e Strada Maggiore =========================== */
/* --- Torre degli Asinelli: altissima, sottile, di mattoni, appena inclinata; base di blocchi chiari --- */
PR.boasinelli=BO((g,x,y,t,a,k)=>{g.save();g.translate(x,y);g.rotate(.012);g.translate(-x,-y);
 const h=400,w=19;
 rect(g,'#c8bca0',x-w-18,y-52,2*(w+18),52);for(let q=0;q<3;q++)rect(g,'rgba(0,0,0,.14)',x-w-18,y-16-q*16,2*(w+18),1.4);for(let q=0;q<4;q++)rect(g,'rgba(0,0,0,.12)',x-w-14+q*18,y-52,1.4,52);
 rect(g,'#b0a488',x-w-20,y-56,2*(w+20),6);
 /* fusto */
 rect(g,'#b0603e',x-w,y-h,2*w,h-52);for(let r=0;r<(h-52)/8;r++)rect(g,'rgba(50,16,6,.15)',x-w,y-h+r*8+7,2*w,1);
 for(let q=0;q<36;q++)rect(g,'rgba(40,12,4,'+(.05+hr(q)*.07)+')',x-w+hr(q*3)*(2*w-10),y-h+hr(q*5)*(h-60),8,4);
 rect(g,'rgba(255,230,190,.14)',x-w,y-h,6,h-52);rect(g,'rgba(0,0,0,.18)',x+w-10,y-h,10,h-52);
 [[190],[240],[300],[340]].forEach((p,i)=>{rect(g,'#2a1812',x-3+(i%2?5:-5),y-p[0]-12,6,14)});
 for(let q=0;q<7;q++)rect(g,'#2a1812',x-3+(q%2?6:-6),y-84-q*38,6,12);
 /* coronamento sporgente con merli */
 rect(g,'#c8bca0',x-w-8,y-h-4,2*(w+8),8);for(let q=0;q<8;q++)rect(g,'#a8553a',x-w-8+q*(2*(w+8)/8)+1,y-h-14,2*(w+8)/8-2,10);
 for(let q=0;q<5;q++)rect(g,'#6a4a2a',x-w-4+q*10,y-h-2,4,6);
 rect(g,'#b0603e',x-w+4,y-h-30,2*w-8,16);for(let q=0;q<4;q++)rect(g,'#8a3a22',x-w+6+q*8,y-h-34,5,6);
 g.restore()});

/* --- Garisenda: più bassa e molto più inclinata, cima mozza e merlata, lapide con i versi di Dante --- */
PR.bogarisenda=BO((g,x,y,t,a,k)=>{g.save();g.translate(x,y);g.rotate(.075);g.translate(-x,-y);
 const h=236,w=26;
 rect(g,'#c8bca0',x-w-16,y-44,2*(w+16),44);for(let q=0;q<3;q++)rect(g,'rgba(0,0,0,.14)',x-w-16,y-14-q*14,2*(w+16),1.4);
 rect(g,'#b0a488',x-w-18,y-48,2*(w+18),6);
 rect(g,'#b86840',x-w,y-h,2*w,h-44);for(let r=0;r<(h-44)/8;r++)rect(g,'rgba(50,16,6,.15)',x-w,y-h+r*8+7,2*w,1);
 for(let q=0;q<26;q++)rect(g,'rgba(40,12,4,'+(.05+hr(q+4)*.07)+')',x-w+hr(q*3)*(2*w-10),y-h+hr(q*5)*(h-50),8,4);
 rect(g,'rgba(255,230,190,.14)',x-w,y-h,6,h-44);rect(g,'rgba(0,0,0,.18)',x+w-12,y-h,12,h-44);
 for(let q=0;q<5;q++)rect(g,'#2a1812',x-3+(q%2?7:-7),y-80-q*30,6,12);
 /* lapide con i versi */
 rect(g,'#e8e0cc',x-22,y-92,44,28);rect(g,'#cdbfa0',x-22,y-92,44,2);for(let q=0;q<5;q++)rect(g,'rgba(60,40,20,.5)',x-18,y-86+q*5,36-(q%2)*8,1.2);
 /* cima mozza */
 rect(g,'#c8bca0',x-w-6,y-h-4,2*(w+6),8);for(let q=0;q<7;q++)rect(g,'#a8553a',x-w-6+q*(2*(w+6)/7)+1,y-h-14,2*(w+6)/7-2,10);
 g.restore()});

/* --- Palazzo della Mercanzia: loggiato gotico a pian terreno, archi acuti, stemmi e bifore --- */
PR.bomercanzia=BO((g,x,y,t,a,k)=>{const S='#d9cdb2',B='#c4885a';
 rect(g,S,x-130,y-210,260,210);rect(g,'rgba(255,255,255,.14)',x-130,y-210,8,210);rect(g,'rgba(0,0,0,.1)',x+112,y-210,18,210);
 for(let r=0;r<14;r++)rect(g,'rgba(80,60,30,.08)',x-130,y-208+r*15,260,1.2);
 /* fascia di mattoni in alto, merlatura */
 bk(g,B,x-130,y-246,260,40,6);rect(g,'#e8dcc0',x-134,y-250,268,6);merloni(g,B,x-132,y-250,264,12,14);
 for(let q=0;q<4;q++){const fx=x-100+q*58;pa(g,'#e8dcc0',fx-4,y-130,34,66);pa(g,k>.3?LIT:'#2e3a48',fx,y-132,26,56);rect(g,'#e8dcc0',fx+12,y-132,2,52);dot(g,'#e8dcc0',fx+13,y-146,5);dot(g,k>.3?LIT:'#2e3a48',fx+13,y-146,3)}
 rect(g,'#e8dcc0',x-130,y-134,260,5);
 /* stemmi */
 [-76,-18,40,98].forEach((o,i)=>stemma(g,x+o+11,y-176,['#c8302a','#2a5aa8','#e8c030','#3a8a4a'][i],'#f4efe0'));
 /* loggiato a pian terreno con archi acuti */
 rect(g,'#2a1c18',x-130,y-96,260,96);
 for(let q=0;q<4;q++){const ax=x-124+q*64;pa(g,S,ax-3,y,70,104);pa(g,k>.2?'rgb(255,208,140)':'#3a2a22',ax+3,y,58,96);rect(g,'rgba(0,0,0,.3)',ax+3,y-44,58,44)}
 for(let q=0;q<5;q++){rect(g,'#eee4cc',x-130+q*64-4,y-100,8,100);rect(g,'rgba(0,0,0,.14)',x-130+q*64+2,y-100,2,100)}
 rect(g,'#bdb094',x-134,y-6,268,6);
 /* la tagliatella d'oro in una piccola teca */
 rect(g,'#2a1c18',x+150,y-86,60,58);rect(g,'#6a4a2a',x+150,y-86,60,3);rect(g,k>.2?'rgb(255,226,170)':'#e8e0cc',x+154,y-82,52,46);
 for(let q=0;q<3;q++){rect(g,'#e8c030',x+160,y-72+q*10,40,3.4);rect(g,'#fff0a0',x+160,y-72+q*10,40,1)}rect(g,'#c8402a',x+170,y-40,20,6);txt(g,'8 mm',x+180,y-35,5,'#f4efe0');
 if(k>.05)glow(g,x,y-60,120,'255,208,130',.2*k)});

/* --- Strada Maggiore: portici di larghezze diverse, il portico ampio a volta e quello di legno di Casa Isolani --- */
PR.bostradamaggiore=BO((g,x,y,t,a,k)=>{const C='#d9a070',D='#c4885a';
 /* sinistra: il portico dei Servi, il più ampio, con volte */
 rect(g,C,x-270,y-196,270,196);rect(g,'rgba(255,255,255,.12)',x-270,y-196,8,196);rect(g,'rgba(0,0,0,.1)',x-14,y-196,14,196);
 rect(g,D,x-272,y-202,276,8);poly(g,'#b55e3e',[[x-274,y-202],[x-250,y-220],[x-20,y-220],[x+6,y-202]]);
 for(let q=0;q<3;q++)fr(g,k,x-240+q*80,y-136,20,40,q+110,'#4f7a52'),fr(g,k,x-240+q*80,y-196+0,20,0.1,q,null);
 for(let q=0;q<3;q++)fr(g,k,x-240+q*80,y-136+0,20,40,q+114,null);
 rect(g,'#e8d8b8',x-270,y-92,270,7);
 por(g,k,x-270,y,270,3,92,'#e8d8b8','#2a1c18');
 for(let q=0;q<3;q++){const ax=x-270+q*90;ln(g,'rgba(255,230,190,.35)',1.4,[ax+4,y-84,ax+45,y-60,ax+86,y-84]);ln(g,'rgba(0,0,0,.35)',1.4,[ax+4,y-60,ax+45,y-84,ax+86,y-60])}
 /* destra: Casa Isolani, portico di legno medievale, piano alto sporgente su mensole */
 rect(g,'#b8885a',x+4,y-188,200,102);rect(g,'rgba(0,0,0,.1)',x+186,y-188,18,102);poly(g,'#8a4a2a',[[x,y-188],[x+20,y-208],[x+190,y-208],[x+210,y-188]]);
 for(let q=0;q<3;q++)fr(g,k,x+24+q*58,y-120,18,36,q+120,'#6a4a2a');
 rect(g,'#5a3a22',x-2,y-90,216,8);for(let q=0;q<9;q++)poly(g,'#5a3a22',[[x+8+q*24,y-86],[x+18+q*24,y-86],[x+14+q*24,y-72]]);
 rect(g,'#2a1c18',x+4,y-82,200,82);rect(g,'rgba(255,214,140,'+(.12+k*.35)+')',x+10,y-76,190,70);
 for(let q=0;q<9;q++){rect(g,'#6a4428',x+6+q*24-3,y-82,7,82);rect(g,'rgba(255,255,255,.15)',x+6+q*24-3,y-82,2,82)}
 rect(g,'#5a3a22',x+4,y-92,200,4);
 txt(g,'STRADA MAGGIORE',x-130,y-206,7,'#f4ecd8');
 if(k>.05)glow(g,x,y-50,150,'255,208,130',.2*k)});

/* =========================== ZONA 5 · Archiginnasio e quartiere universitario =========================== */
/* --- Archiginnasio: il portico basso, il cortile con la loggia a due ordini e le migliaia di stemmi --- */
PR.boarchiginnasio=BO((g,x,y,t,a,k)=>{const C='#d8a070',S='#e8d8b8';
 /* facciata lunga e bassa col portico ad archi */
 rect(g,C,x-250,y-140,250,140);rect(g,'rgba(255,255,255,.12)',x-250,y-140,8,140);rect(g,'rgba(0,0,0,.1)',x-14,y-140,14,140);
 rect(g,'#b4673f',x-254,y-148,258,10);for(let q=0;q<31;q++)rect(g,'#e0b080',x-252+q*8.3,y-152,4,5);
 for(let q=0;q<5;q++)fr(g,k,x-228+q*48,y-90,16,34,q+130,'#4f7a52');
 por(g,k,x-250,y,250,5,64,S,'#2a1c18');
 /* ingresso e cortile con la loggia a due ordini */
 rect(g,'#e0c898',x+2,y-196,250,196);rect(g,'rgba(0,0,0,.1)',x+232,y-196,20,196);
 /* stemmi colorati su pareti e volte */
 const sc=[['#c8302a','#f4efe0'],['#2a5aa8','#e8c030'],['#3a8a4a','#f4efe0'],['#e8c030','#7a2a3a'],['#7a2a3a','#e8c030'],['#2a8aa8','#f4efe0']];
 for(let r=0;r<9;r++)for(let q=0;q<22;q++){const i=r*22+q;if(hr(i*3+1)<.25)continue;const c=sc[Math.floor(hr(i)*6)];stemma(g,x+10+q*11+(r%2)*3,y-182+r*13,c[0],c[1])}
 /* loggia: due ordini di archi */
 rect(g,'#3a2a22',x+2,y-196,250,2);
 for(let o=0;o<2;o++){const by=y-o*96;rect(g,S,x-2,by-98,258,5);for(let q=0;q<5;q++){const ax=x+8+q*48;ar(g,S,ax-4,by-6,44,86);ar(g,'#3a2a22',ax,by-6,36,80);rect(g,'rgba(255,214,140,'+(.12+k*.3)+')',ax+4,by-40,28,34);rect(g,S,ax+38,by-92,6,86)}}
 rect(g,S,x-2,y-2,258,3);
 /* scala */
 poly(g,'#cdbfa0',[[x+206,y],[x+246,y-96],[x+252,y-96],[x+252,y]]);for(let q=0;q<7;q++)ln(g,'rgba(0,0,0,.2)',1,[x+208+q*6,y,x+212+q*6,y-92+q*0]);
 /* studenti seduti */
 [[40,'#e8505a'],[104,'#2a7ae0'],[170,'#3aa05a']].forEach((p,i)=>{const px=x+p[0],by=y-3;rect(g,'#3a3a40',px-8,by-8,16,8);rect(g,p[1],px-5,by-24,10,18);dot(g,['#d8a078','#e8b890','#c88a64'][i],px,by-29,4.6);dot(g,['#2a1a10','#6a4a2a','#1a1a1a'][i],px,by-31,4.6);rect(g,'#f4ecd8',px+6,by-14,8,6)});
 txt(g,'ARCHIGINNASIO',x-126,y-160,8,'#f4ecd8');
 if(k>.05)glow(g,x+120,y-100,140,'255,208,130',.2*k)});

/* --- Teatro Anatomico: sala di legno di abete intagliato, gradinate, tavolo di marmo, Apollo e gli "spellati" --- */
PR.boteatroanat=BO((g,x,y,t,a,k)=>{const W1='#7a5230',W2='#5a3a22',W3='#9a6a3c';
 rect(g,'#3a2616',x-190,y-250,380,250);rect(g,'rgba(255,255,255,.05)',x-190,y-250,380,6);
 /* pareti con nicchie e statue di medici */
 for(let q=0;q<8;q++){const nx=x-176+q*46;ar(g,W2,nx,y-120,34,86);ar(g,'#2a1a10',nx+4,y-124,26,76);poly(g,'#cfc6b0',[[nx+13,y-126],[nx+12,y-158],[nx+21,y-158],[nx+20,y-126]]);dot(g,'#cfc6b0',nx+16.5,y-163,4.4)}
 for(let q=0;q<9;q++)rect(g,'rgba(0,0,0,.18)',x-190+q*42,y-250,2,250);
 rect(g,W3,x-190,y-250,380,10);rect(g,W3,x-190,y-132,380,6);
 for(let q=0;q<18;q++)rect(g,'rgba(255,220,160,.15)',x-186+q*21,y-246,8,2);
 /* gradinate ad anfiteatro: file di legno scuro intagliato */
 for(let r=0;r<5;r++){const yy=y-98+r*0-r*0+(4-r)*0,w=360-r*20;rect(g,r%2?W1:W3,x-w/2,y-18-(4-r)*0-r*18,w,18);rect(g,'rgba(0,0,0,.25)',x-w/2,y-4-r*18,w,3);for(let q=0;q<w/14;q++)rect(g,'rgba(0,0,0,.16)',x-w/2+q*14,y-18-r*18,1.4,18)}
 /* cattedra con baldacchino e Apollo */
 rect(g,W2,x-34,y-210,68,6);poly(g,W1,[[x-40,y-210],[x-30,y-226],[x+30,y-226],[x+40,y-210]]);rect(g,W3,x-36,y-176,72,6);
 rect(g,W2,x-30,y-170,6,54);rect(g,W2,x+24,y-170,6,54);rect(g,W3,x-26,y-120,52,30);rect(g,'rgba(0,0,0,.2)',x-26,y-96,52,6);
 poly(g,'#e6dfc8',[[x-6,y-226],[x-7,y-250],[x+7,y-250],[x+6,y-226]]);dot(g,'#e6dfc8',x,y-255,5);ln(g,'#e6dfc8',2,[x+6,y-246,x+16,y-258]);
 /* i due "spellati" ai lati */
 [-1,1].forEach(s=>{const sx=x+s*116;rect(g,W2,sx-14,y-176,28,6);rect(g,'#6a4a2a',sx-12,y-170,24,52);poly(g,'#b8624a',[[sx-7,y-168],[sx-9,y-208],[sx-4,y-214],[sx+4,y-214],[sx+9,y-208],[sx+7,y-168]]);dot(g,'#b8624a',sx,y-220,6);ln(g,'#a8523a',3,[sx+s*7,y-204,sx+s*16,y-186]);rect(g,'rgba(255,230,200,.2)',sx-6,y-206,3,30)});
 /* tavolo di marmo bianco al centro */
 rect(g,'#c8c0aa',x-6,y-52,12,36);rect(g,'#f0ebde',x-52,y-60,104,10);rect(g,'rgba(0,0,0,.14)',x-52,y-52,104,2);rect(g,'#d8d0bc',x-58,y-62,116,4);
 if(k>.05)glow(g,x,y-120,150,'255,200,110',.25*k);
 /* lampadario */
 ln(g,'#2a2a2e',1.4,[x,y-250,x,y-232]);rect(g,'#d9b24a',x-10,y-232,20,3);for(let q=0;q<3;q++)dot(g,LIT,x-8+q*8,y-236,2.2)});

/* =========================== ZONA 6 · Santo Stefano e via Fondazza =========================== */
/* --- Basilica di Santo Stefano (le Sette Chiese): facciate di mattoni e pietra chiara, portico, campanile, rotonda --- */
PR.bosantostefano=BO((g,x,y,t,a,k)=>{const B='#c4885a',S='#d8c8a2',D='#b8a880';
 /* campanile */
 rect(g,B,x+150,y-250,48,250);rect(g,'rgba(255,230,190,.12)',x+150,y-250,5,250);rect(g,'rgba(0,0,0,.14)',x+186,y-250,12,250);
 for(let r=0;r<30;r++)rect(g,'rgba(50,16,6,.15)',x+150,y-246+r*8,48,1);
 rect(g,S,x+146,y-254,56,6);for(let q=0;q<2;q++){ar(g,S,x+160+q*18,y-216,14,38);ar(g,'#2a1812',x+162+q*18,y-216,10,34)}rect(g,S,x+146,y-150,56,4);
 poly(g,'#b0583a',[[x+144,y-254],[x+174,y-290],[x+204,y-254]]);ln(g,'#d9b24a',1.6,[x+174,y-290,x+174,y-304]);
 /* facciata maggiore: chiesa del Crocifisso e Sepolcro */
 bk(g,B,x-60,y-176,220,176,9);rect(g,S,x-64,y-180,228,6);poly(g,S,[[x-64,y-180],[x+50,y-214],[x+164,y-180]]);poly(g,'#c0a478',[[x-40,y-184],[x+50,y-208],[x+140,y-184]]);
 for(let q=0;q<4;q++)ar(g,k>.3?LIT:'#2a1812',x-30+q*46,y-130,16,44);
 for(let q=0;q<6;q++)for(let r=0;r<3;r++)if((q+r)%2==0)rect(g,S,x-50+q*34,y-100-r*0+r*0,0,0);
 /* portico a tre archi, davanti */
 rect(g,S,x-14,y-98,128,8);for(let q=0;q<3;q++){const ax=x-10+q*40;ar(g,S,ax-2,y,38,86);ar(g,'#2a1c18',ax+3,y,28,80);rect(g,'rgba(255,214,140,'+(.12+k*.3)+')',ax+5,y-40,24,40)}
 for(let q=0;q<4;q++)rect(g,S,x-12+q*40,y-98,5,98);
 /* facciate più piccole e irregolari, a sinistra, e la rotonda poligonale */
 bk(g,'#b87a50',x-190,y-120,120,120,10);poly(g,S,[[x-194,y-120],[x-130,y-148],[x-66,y-120]]);ar(g,'#2a1812',x-150,y-0,40,74);ar(g,'#d8c8a2',x-154,y,48,80);ar(g,'#2a1812',x-148,y,36,74);
 ar(g,k>.3?LIT:'#2a1812',x-176,y-80,12,28);ar(g,k>.3?LIT:'#2a1812',x-96,y-80,12,28);
 rect(g,D,x-250,y-100,64,100);for(let q=0;q<5;q++)rect(g,'rgba(0,0,0,.14)',x-250+q*12,y-100,1.4,100);poly(g,'#a8553a',[[x-256,y-100],[x-218,y-150],[x-180,y-100]]);ar(g,'#2a1812',x-232,y,28,52);
 /* cordolo di una piazza lunga: fila di panchine e tavolini */
 [[-230,0],[200,1]].forEach(p=>{const px=x+p[0];rect(g,'#6a4a2a',px-14,y-24,28,3);rect(g,'#4a3a2a',px-1,y-21,2,21);dot(g,'#f4ecd8',px-6,y-28,3);dot(g,'#f4ecd8',px+6,y-28,3)});
 if(k>.05)glow(g,x+40,y-60,130,'255,208,130',.2*k)});

/* --- Cortile di Pilato (Santo Giardino): loggiato di mattoni, il grande catino di marmo al centro, un albero --- */
PR.bopilato=BO((g,x,y,t,a,k)=>{const B='#b4673f',S='#d8c8a2';
 rect(g,'#3a2c22',x-200,y-150,400,150);rect(g,'#2a1c18',x-200,y-150,400,10);
 /* sfondo: loggia con colonnine */
 bk(g,'#a8603e',x-200,y-168,400,40,12);rect(g,S,x-204,y-130,408,6);
 for(let q=0;q<14;q++){ar(g,'#2a1c18',x-192+q*28,y-8,20,100);rect(g,S,x-196+q*28,y-110,4,102);rect(g,'rgba(255,255,255,.2)',x-196+q*28,y-110,1.6,102)}
 for(let q=0;q<14;q++)ar(g,S,x-196+q*28,y-100,28,20);
 rect(g,S,x-204,y-6,408,6);
 /* l'albero */
 rect(g,'#4a3a2a',x-168,y-132,10,132);for(let q=0;q<5;q++)dot(g,['#3a6a3a','#4a7a42','#34603a','#4a8a46','#3a6a3a'][q],x-166+(q-2)*22,y-152-(q%2)*14,26);
 /* il grande catino di marmo */
 rect(g,'#c8c0a8',x-36,y-14,72,14);el(g,'#d8d0bc',x,y-50,64,24);el(g,'#b8b09a',x,y-54,56,14);rect(g,'#cfc7b0',x-52,y-50,104,6);el(g,'#5a7a82',x,y-56,50,9);
 for(let q=0;q<3;q++)rect(g,'rgba(255,255,255,.22)',x-28+q*18+Math.sin(t+q)*3,y-58+q,14,1.2);
 rect(g,'#e0d8c0',x-22,y-30,44,16);
 /* ombra e panca */
 rect(g,'rgba(0,0,0,.12)',x-200,y-150,60,150);rect(g,'#6a4a2a',x+90,y-26,70,5);rect(g,'#4a3a2a',x+94,y-21,4,21);rect(g,'#4a3a2a',x+152,y-21,4,21);
 txt(g,'SANTO GIARDINO',x+130,y-142,6.5,'#e8dcc0');
 if(k>.05)glow(g,x,y-70,130,'255,208,130',.2*k)});

/* --- Via Fondazza e Casa Morandi (n. 36): portici bassi, finestre piccole, dietro il vetro bottiglie e vasi --- */
PR.bofondazza=BO((g,x,y,t,a,k)=>{const C='#d8b890',S='#e0d0b0';
 rect(g,C,x-170,y-176,340,176);rect(g,'rgba(255,255,255,.12)',x-170,y-176,8,176);rect(g,'rgba(0,0,0,.1)',x+150,y-176,20,176);
 for(let q=0;q<5;q++)rect(g,'rgba(120,80,40,.13)',x-160+hr(q*3)*290,y-166+hr(q*5)*90,24,12);
 rect(g,'#a8856a',x-174,y-182,348,8);poly(g,'#a8603a',[[x-176,y-182],[x-150,y-198],[x+150,y-198],[x+176,y-182]]);
 /* portici bassi */
 por(g,k,x-170,y,340,6,66,S,'#2a1c18');
 /* portone n. 36 e targa */
 ar(g,'#5a4a3a',x-26,y,52,84);ar(g,'#3a2e24',x-20,y,40,78);rect(g,'#d9b24a',x+8,y-42,4,4);rect(g,'#f4f4ee',x+30,y-78,26,16);txt(g,'36',x+43,y-66,11,'#2a2a2e');
 rect(g,'#d8d0bc',x+28,y-100,30,10);rect(g,'#6a5a46',x+31,y-98,24,1.4);rect(g,'#6a5a46',x+31,y-95,18,1.4);
 /* finestre con persiane, e la finestra di Morandi con le bottiglie in tono polveroso */
 [-130,-86,0,86,130].forEach((o,i)=>{if(i==2)return;fr(g,k,x+o-9,y-128,18,34,i+140,'#7a8a6a')});
 const mx=x-16;rect(g,'#f0e6cc',mx-4,y-168,50,56);rect(g,k>.3?'rgb(255,226,170)':'#cdbf9c',mx,y-164,42,48);
 rect(g,'#8a7a62',mx,y-130,42,3);[[5,'#a8a090',26],[13,'#b8b4a4',22],[20,'#8a9088',30],[28,'#c8bca0',18]].forEach(b=>{rect(g,b[1],mx+b[0],y-130-b[2],6,b[2]);rect(g,b[1],mx+b[0]+2,y-130-b[2]-5,2,6)});
 el(g,'#a89c84',mx+36,y-138,6,8);rect(g,'#a89c84',mx+31,y-148,10,4);
 rect(g,'#6a4a2a',mx-6,y-166,6,52);rect(g,'#6a4a2a',mx+44,y-166,6,52);
 txt(g,'VIA FONDAZZA',x-120,y-80,7,'#6a4a2a');
 /* bicicletta appoggiata */
 const bx=x+112,by=y-17;[bx-22,bx+22].forEach(wx=>{g.strokeStyle=tn('#1a1a1c');g.lineWidth=2.6;g.beginPath();g.arc(wx,by,15,0,7);g.stroke()});ln(g,'#7a8a6a',2.8,[bx-22,by,bx-6,by-26,bx+14,by-26,bx+22,by]);ln(g,'#7a8a6a',2.4,[bx-6,by-26,bx,by]);ln(g,'#7a8a6a',2.4,[bx,by,bx-22,by]);rect(g,'#26262a',bx-14,by-31,16,4);ln(g,'#26262a',2,[bx+14,by-26,bx+16,by-36]);
 if(k>.05)glow(g,x,y-70,130,'255,208,130',.2*k)});

/* =========================== ZONA 7 · Portico di San Luca =========================== */
/* --- Porta Saragozza: la grande porta medievale di mattoni, con torri ai lati, e l'arco d'ingresso del portico --- */
PR.bosaragozza=BO((g,x,y,t,a,k)=>{const B='#b0603e';
 /* le due torri */
 [[-130,76],[54,76]].forEach((T,i)=>{const tx=x+T[0];bk(g,B,tx,y-232,T[1],232,20+i);rect(g,'rgba(255,230,190,.16)',tx,y-232,6,232);rect(g,'rgba(0,0,0,.16)',tx+T[1]-14,y-232,14,232);
  rect(g,'#cdb08a',tx-4,y-238,T[1]+8,8);merloni(g,B,tx-4,y-238,T[1]+8,6,16);rect(g,'#cdb08a',tx-2,y-150,T[1]+4,4);
  for(let q=0;q<3;q++){rect(g,'#2a1812',tx+T[1]/2-3,y-200+q*0-q*0+(q*0),6,0)};
  rect(g,'#2a1812',tx+T[1]/2-3,y-208,6,22);rect(g,'#2a1812',tx+T[1]/2-3,y-168,6,22);rect(g,'#2a1812',tx+T[1]/2-3,y-120,6,22);if(k>.3)rect(g,LIT,tx+T[1]/2-2,y-207,4,20)});
 /* corpo centrale con grande arco */
 bk(g,B,x-54,y-190,108,190,22);rect(g,'#cdb08a',x-58,y-196,116,8);merloni(g,B,x-58,y-196,116,7,14);
 ar(g,'#cdb08a',x-42,y,84,122);ar(g,k>.2?'rgb(255,190,110)':'#2a1c18',x-34,y,68,114);rect(g,'rgba(255,170,90,'+(.2+k*.3)+')',x-30,y-60,60,60);
 for(let q=0;q<9;q++){const an=Math.PI+q*Math.PI/8;rect(g,'#8a5a3a',x+Math.cos(an)*38-2.5,y-83+Math.sin(an)*38-2.5,5,6)}
 /* in fondo, l'arco d'ingresso del portico (arco Bonaccorsi) */
 rect(g,'#d9a070',x+160,y-130,110,130);rect(g,'rgba(0,0,0,.1)',x+250,y-130,20,130);rect(g,'#e8d8b8',x+156,y-136,118,8);poly(g,'#b55e3e',[[x+154,y-136],[x+176,y-152],[x+254,y-152],[x+276,y-136]]);
 ar(g,'#e8d8b8',x+180,y,60,100);ar(g,'#2a1c18',x+186,y,48,94);rect(g,'rgba(255,170,90,'+(.2+k*.3)+')',x+190,y-60,40,60);txt(g,'VIA DI SAN LUCA',x+216,y-140,6,'#5a3a22');
 txt(g,'PORTA SARAGOZZA',x,y-212,7,'#e8d8b0');
 glow(g,x,y-100,160,'255,170,90',.12+k*.25)});

/* --- Arco del Meloncello: arco barocco che scavalca la strada, balaustre, scalinata curva, il portico che sale --- */
PR.bomeloncello=BO((g,x,y,t,a,k)=>{const O='#e0b070',R='#d8a39a',S='#ecd8b4';
 /* il portico che prosegue in salita, a sinistra */
 for(let q=0;q<5;q++){const ax=x-290+q*34,ay=y-q*8;rect(g,O,ax,ay-96,34,96);ar(g,S,ax+2,ay,30,76);ar(g,'#2a1c18',ax+6,ay,22,70);rect(g,'rgba(255,170,90,'+(.15+k*.3)+')',ax+8,ay-30,18,30)}
 rect(g,R,x-292,y-104,172,8);
 /* arco centrale scavalcante */
 rect(g,O,x-100,y-128,40,128);rect(g,O,x+60,y-128,40,128);rect(g,'rgba(0,0,0,.12)',x-72,y-128,12,128);rect(g,'rgba(0,0,0,.12)',x+88,y-128,12,128);
 rect(g,S,x-104,y-132,208,10);ar(g,'#2a1c18',x-60,y,120,110);rect(g,'rgba(255,170,90,'+(.25+k*.3)+')',x-50,y-70,100,70);
 g.fillStyle=tn(S);g.beginPath();g.moveTo(x-110,y-132);g.quadraticCurveTo(x,y-182,x+110,y-132);g.lineTo(x+110,y-124);g.lineTo(x-110,y-124);g.fill();
 /* balaustra sopra l'arco */
 rect(g,S,x-110,y-176,220,6);for(let q=0;q<18;q++){rect(g,S,x-104+q*12,y-170,5,36);dot(g,S,x-101.5+q*12,y-152,4)}rect(g,S,x-110,y-138,220,6);
 [[-110],[104]].forEach(o=>{rect(g,S,x+o[0]-4,y-190,12,56);dot(g,S,x+o[0]+2,y-194,6)});
 /* scalinata curva a destra */
 poly(g,'#d8c4a0',[[x+100,y],[x+100,y-52],[x+170,y-84],[x+230,y-130],[x+230,y-110],[x+190,y-74],[x+120,y-20],[x+120,y]]);
 for(let q=0;q<9;q++)ln(g,'rgba(0,0,0,.2)',1,[x+104+q*14,y-4-q*8,x+104+q*14+4,y-50-q*8]);
 rect(g,S,x+98,y-56,4,56);for(let q=0;q<6;q++)dot(g,S,x+106+q*20,y-60-q*13,4.4);
 /* il portico continua sul colle */
 for(let q=0;q<3;q++){const ax=x+160+q*34,ay=y-100-q*10;rect(g,O,ax,ay-80,34,80);ar(g,S,ax+2,ay,30,66);ar(g,'#2a1c18',ax+6,ay,22,60)}
 txt(g,'VIA SARAGOZZA',x-200,y-112,6,'#5a3a22');
 glow(g,x,y-100,170,'255,170,90',.12+k*.25)});

/* --- Portico di San Luca: arcate regolari che salgono in curva sul colle, il sole del tramonto tra gli archi --- */
PR.boportico=BO((g,x,y,t,a,k)=>{const O='#e0b070',S='#ecd8b4';
 /* colle verde con ville e cipressi dietro */
 poly(g,'#5f8f4a',[[x-300,y],[x-300,y-100],[x-200,y-150],[x-80,y-190],[x+60,y-210],[x+200,y-200],[x+300,y-230],[x+300,y]]);
 poly(g,'rgba(0,0,0,.14)',[[x+60,y-210],[x+200,y-200],[x+300,y-230],[x+300,y],[x+120,y]]);
 for(let q=0;q<26;q++)rect(g,'rgba(255,255,255,.1)',x-290+hr(q)*580,y-60-hr(q+3)*150,12,2);
 [[-250,-120],[-130,-170],[40,-198]].forEach(p=>{rect(g,'#d9c8a0',x+p[0],y+p[1]-26,34,26);poly(g,'#b0583a',[[x+p[0]-3,y+p[1]-26],[x+p[0]+17,y+p[1]-40],[x+p[0]+37,y+p[1]-26]]);rect(g,k>.3?LIT:'#3a4650',x+p[0]+13,y+p[1]-20,7,10)});
 /* le arcate in salita: ogni arcata sale di qualche pixel, il percorso curva */
 const N=13;for(let q=0;q<N;q++){const ax=x-300+q*46,ay=y-Math.pow(q/N,1.5)*72;
  rect(g,O,ax,ay-110,46,110);rect(g,'rgba(255,255,255,.12)',ax,ay-110,3,110);rect(g,'rgba(0,0,0,.12)',ax+40,ay-110,6,110);
  ar(g,S,ax+3,ay,40,92);ar(g,'#2a1c18',ax+8,ay,30,84);
  g.fillStyle=tn('rgba(255,150,70,.45)');rect(g,'rgba(255,160,80,'+(.3+k*.3)+')',ax+10,ay-40,26,40);
  rect(g,'#e8d4a8',ax-2,ay-114,50,6);
  if(q%3==1){rect(g,'#f4efe0',ax+14,ay-80,18,14);rect(g,'#7a1f2a',ax+14,ay-80,18,3)}}
 /* fascio di luce del tramonto fra gli archi */
 for(let q=0;q<5;q++)poly(g,'rgba(255,190,100,'+(.1+k*.1)+')',[[x-280+q*100,y-6],[x-250+q*100,y-6],[x-140+q*100,y-100],[x-170+q*100,y-100]]);
 /* lastricato in salita */
 poly(g,'#caa88a',[[x-300,y],[x+300,y],[x+300,y-4],[x-300,y-4]]);
 txt(g,'666 ARCATE · 15 CAPPELLE',x,y-124,7,'#6a3a22');
 /* panchine e balaustra di pietra davanti */
 rect(g,'#6a4a2a',x-120,y-26,60,4);rect(g,'#4a3a2a',x-114,y-22,3,22);rect(g,'#4a3a2a',x-68,y-22,3,22);
 glow(g,x,y-90,200,'255,170,90',.1+k*.25)});

/* --- Santuario della Madonna di San Luca: chiesa barocca ocra e rosa con grande cupola, in cima al colle --- */
PR.bosanluca=BO((g,x,y,t,a,k)=>{const O='#e0b070',R='#d8a39a',S='#f0dcb8';
 /* il Colle della Guardia */
 poly(g,'#5f8f4a',[[x-330,y],[x-330,y-60],[x-270,y-95],[x-190,y-124],[x-80,y-146],[x+60,y-153],[x+170,y-143],[x+270,y-105],[x+330,y-56],[x+330,y]]);
 poly(g,'rgba(0,0,0,.16)',[[x+60,y-153],[x+170,y-143],[x+270,y-105],[x+330,y-56],[x+330,y],[x+140,y],[x+90,y-70]]);
 for(let q=0;q<30;q++)rect(g,'rgba(255,255,255,.1)',x-320+hr(q)*640,y-30-hr(q+3)*110,12,2);
 /* scalinata e portico in salita */
 poly(g,'#d8c4a0',[[x-60,y],[x-18,y-152],[x+18,y-152],[x+60,y]]);for(let q=0;q<12;q++)ln(g,'rgba(0,0,0,.18)',1,[x-58+q*1.2,y-q*12.5,x+58-q*1.2,y-q*12.5]);
 /* la chiesa */
 const cy=y-153;g.save();g.translate(x,cy);g.scale(.64,.64);g.translate(-x,-cy);rect(g,O,x-110,cy-98,220,98);rect(g,'rgba(255,255,255,.14)',x-110,cy-98,10,98);rect(g,'rgba(0,0,0,.1)',x+86,cy-98,24,98);
 rect(g,S,x-114,cy-104,228,8);poly(g,R,[[x-110,cy-104],[x-70,cy-132],[x+70,cy-132],[x+110,cy-104]]);
 for(let q=0;q<4;q++){rect(g,S,x-92+q*52,cy-96,10,94);rect(g,'rgba(0,0,0,.12)',x-85+q*52,cy-96,3,94)}
 for(let q=0;q<3;q++){ar(g,'#3a2616',x-76+q*52,cy-2,30,66);ar(g,k>.3?'rgb(255,200,120)':'#4a3626',x-72+q*52,cy-2,22,60)}
 /* cupola grande */
 rect(g,O,x-48,cy-170,96,66);for(let q=0;q<4;q++)ar(g,S,x-40+q*22,cy-110,12,40);
 g.fillStyle=tn('#8f9a94');g.beginPath();g.ellipse(x,cy-170,48,56,0,Math.PI,0);g.fill();
 for(let q=-2;q<=2;q++){g.strokeStyle=tn('rgba(250,244,230,.5)');g.lineWidth=1.6;g.beginPath();g.moveTo(x+q*10,cy-170);g.quadraticCurveTo(x+q*8,cy-210,x,cy-226);g.stroke()}
 shade(g,x,cy-170,48);rect(g,S,x-6,cy-236,12,12);poly(g,'#8f9a94',[[x-6,cy-236],[x,cy-250],[x+6,cy-236]]);ln(g,'#d9b24a',2,[x,cy-250,x,cy-268]);ln(g,'#d9b24a',2,[x-5,cy-262,x+5,cy-262]);
 /* campanili */
 [-1,1].forEach(s=>{const tx=x+s*124;rect(g,O,tx-14,cy-150,28,150);rect(g,'rgba(0,0,0,.1)',tx+(s>0?4:-14),cy-150,10,150);rect(g,S,tx-17,cy-154,34,6);ar(g,'#2a1812',tx-6,cy-110,12,28);poly(g,'#8f9a94',[[tx-17,cy-154],[tx,cy-184],[tx+17,cy-154]]);ln(g,'#d9b24a',1.4,[tx,cy-184,tx,cy-196])});g.restore();
 /* cipressi lungo la salita */
 [[-80,-20],[-70,-64],[78,-34],[92,-86],[-120,-92]].forEach(c=>{el(g,'#243f2a',x+c[0],y+c[1]-24,6,26);rect(g,'#4a3a2a',x+c[0]-1,y+c[1]-2,2,4)});
 /* la città in basso nella luce rossa: tetti */
 for(let q=0;q<24;q++){const hx=x-320+q*27;rect(g,hr(q)>.5?'#c0704c':'#d98a62',hx,y-22-hr(q+4)*14,22,24);rect(g,'rgba(255,170,90,.3)',hx,y-22-hr(q+4)*14,22,3)}
 glow(g,x,cy-80,240,'255,170,90',.12+k*.3)});

/* =========================== ZONA 8 · Piazza Verdi e Teatro Comunale =========================== */
/* --- Teatro Comunale: facciata chiara e semplice, ingresso a portico, timpano, lampioni, manifesti --- */
PR.boteatrocomunale=BO((g,x,y,t,a,k)=>{const C='#e4d4b0',D='#cdbd98';
 rect(g,C,x-190,y-170,380,170);rect(g,'rgba(255,255,255,.12)',x-190,y-170,10,170);rect(g,'rgba(0,0,0,.1)',x+168,y-170,22,170);
 rect(g,D,x-194,y-176,388,8);
 /* portico d'ingresso e timpano */
 rect(g,'#eee2c4',x-96,y-190,192,190);rect(g,'rgba(0,0,0,.08)',x+76,y-190,20,190);
 poly(g,'#efe4c8',[[x-104,y-190],[x,y-240],[x+104,y-190]]);poly(g,D,[[x-84,y-194],[x,y-230],[x+84,y-194]]);dot(g,'#f4efe0',x,y-214,8);rect(g,D,x-104,y-194,208,6);
 for(let q=0;q<5;q++)rect(g,'#f6eedd',x-84+q*38,y-186,10,184),rect(g,'rgba(0,0,0,.14)',x-77+q*38,y-186,3,184);
 for(let q=0;q<4;q++){const px=x-70+q*38;ar(g,'#3a2a22',px+2,y,26,88);ar(g,k>.2?'rgb(255,208,140)':'#2a1c18',px+5,y,20,82);rect(g,'rgba(255,214,140,'+(.12+k*.3)+')',px+6,y-34,18,34)}
 txt(g,'TEATRO COMUNALE',x,y-96,8,'#6a4a2a');rect(g,D,x-96,y-104,192,3);
 /* finestre del fianco e manifesti */
 for(let q=0;q<3;q++){fr(g,k,x-170+q*28,y-110,14,40,q+150,'#7a8a6a');fr(g,k,x+130+q*18,y-110,12,40,q+160,'#7a8a6a')}
 [[-150,'#c8302a'],[-124,'#2a5aa8'],[146,'#e8c030'],[168,'#3a8a4a']].forEach(m=>{rect(g,'#f4ecd8',x+m[0],y-66,16,24);rect(g,m[1],x+m[0]+1,y-64,14,10);rect(g,'rgba(0,0,0,.4)',x+m[0]+3,y-50,10,1.4);rect(g,'rgba(0,0,0,.3)',x+m[0]+3,y-47,8,1.4)});
 /* lampioni */
 [-114,114].forEach(o=>{rect(g,'#2a2e34',x+o-2,y-100,4,100);rect(g,'#2a2e34',x+o-6,y-4,12,4);rect(g,k>.1?LIT:'#e8dca8',x+o-6,y-112,12,12);glow(g,x+o,y-106,50,'255,226,150',.15+k*.5)});
 if(k>.05)glow(g,x,y-90,170,'255,208,130',.2*k)});

/* --- Piazza Verdi: ampia piazza con gradini, studenti seduti con chitarre e bicchieri, locali, luci --- */
PR.bopiazzaverdi=BO((g,x,y,t,a,k)=>{const D=Math.max(k,.2);
 /* gradini larghi */
 for(let q=0;q<4;q++)rect(g,q%2?'#bdb4a2':'#cdc4b0',x-260+q*8,y-q*7-7,520-q*16,7);
 rect(g,'rgba(0,0,0,.15)',x-260,y-3,520,3);
 /* gruppi di studenti seduti sui gradini e per terra */
 const gr=[[-210,'#e8505a',1],[-176,'#2a7ae0',0],[-130,'#f2c82a',0],[-60,'#3aa05a',1],[-14,'#9a50c0',0],[40,'#e8802a',0],[96,'#2a8aa8',1],[150,'#c8302a',0],[200,'#4a6a9a',0],[236,'#e8a0b0',0]];
 gr.forEach((p,i)=>{const px=x+p[0],by=y-(i%3)*7-7;rect(g,'#2f3a52',px-8,by-8,16,8);rect(g,p[1],px-5,by-26,10,19);dot(g,['#d8a078','#e8b890','#c88a64'][i%3],px,by-31,4.6);dot(g,['#2a1a10','#6a4a2a','#1a1a1a','#8a5a2a'][i%4],px,by-33,4.6);
  if(p[2]){rect(g,'#a8602a',px+6,by-22,12,8);el(g,'#a8602a',px+8,by-18,5,4);ln(g,'#3a2a1a',1,[px+12,by-24,px+22,by-30])}
  else{rect(g,'#f4f4ee',px+7,by-14,3,6);rect(g,'rgba(255,200,110,.7)',px+7,by-12,3,3)}});
 /* tavolini all'aperto dei locali */
 [[-250],[250]].forEach(o=>{const tx=x+o[0];rect(g,'#6a4a2a',tx-16,y-36,32,3);rect(g,'#4a3a2a',tx-1,y-33,2,33);dot(g,'#f4ecd8',tx-7,y-40,3);dot(g,'#f08a1a',tx+7,y-40,3)});
 /* biciclette appoggiate */
 [[-110],[130]].forEach(o=>{const bx=x+o[0],by=y-12;[bx-14,bx+14].forEach(wx=>{g.strokeStyle=tn('#1a1a1c');g.lineWidth=2;g.beginPath();g.arc(wx,by,10,0,7);g.stroke()});ln(g,'#2f6fb0',2.2,[bx-14,by,bx-4,by-17,bx+8,by-17,bx+14,by]);rect(g,'#26262a',bx-8,by-20,10,3)});
 /* festoni di luci tra gli alberelli */
 [[-130],[110]].forEach(o=>{const tx=x+o[0];rect(g,'#5a4430',tx-3,y-120,6,86);for(let q=0;q<4;q++)dot(g,['#3f7a3a','#4a8a3e','#376a34','#5a9a4a'][q],tx+(q-1.5)*14,y-130-(q%2)*10,15)});
 g.strokeStyle=tn('#2a2a2e');g.lineWidth=1;g.beginPath();for(let i=0;i<=24;i++){const u=i/24,px=x-130+u*240,py=y-118+Math.sin(u*Math.PI)*18;i?g.lineTo(px,py):g.moveTo(px,py)}g.stroke();
 for(let i=1;i<24;i++){const u=i/24,px=x-130+u*240,py=y-118+Math.sin(u*Math.PI)*18+3;dot(g,'rgb(255,228,150)',px,py,1.8+D*.8);if(k>.2)glow(g,px,py,9,'255,226,150',.4*k)}
 /* manifesti e volantini su una bacheca */
 rect(g,'#6a4a2a',x+190,y-114,66,84);rect(g,'#d8cdb4',x+194,y-110,58,76);for(let q=0;q<6;q++)rect(g,['#e8505a','#2a7ae0','#f2c82a','#3aa05a','#f4f4ee','#e8a0b0'][q],x+198+(q%3)*18,y-106+Math.floor(q/3)*36,14,30);
 txt(g,'ASSEMBLEA · CONCERTO',x+222,y-120,5.5,'#e8d8b0');
 if(k>.05)glow(g,x,y-50,200,'255,200,110',.2*k)});

/* =========================== ZONA 9 · Stazione Centrale =========================== */
/* --- Stazione Centrale: facciata lunga e chiara con tante arcate, tettoia di ferro e vetro, binari, pensiline --- */
PR.bostazione=BO((g,x,y,t,a,k)=>{const C='#e0d4bc',D='#c8b898';
 /* tettoia di ferro e vetro dietro */
 g.fillStyle=tn('#8aa0b0');g.beginPath();g.ellipse(x+40,y-170,200,90,0,Math.PI,0);g.fill();g.fillStyle=tn('#6e8a9c');g.beginPath();g.ellipse(x+40,y-170,200,90,0,Math.PI*1.1,Math.PI*1.5);g.lineTo(x+40,y-170);g.fill();
 for(let q=0;q<9;q++){const an=Math.PI+q*Math.PI/8;ln(g,'#2e3c48',1.6,[x+40,y-170,x+40+Math.cos(an)*200,y-170+Math.sin(an)*90])}
 if(k>.3)glow(g,x+40,y-200,150,'255,226,160',k*.4);
 /* binari e pensiline sul fondo */
 rect(g,'#5a5a5a',x-290,y+2,580,3);rect(g,'#5a5a5a',x-290,y+16,580,3);for(let q=0;q<38;q++)rect(g,'rgba(50,40,30,.6)',x-286+q*15.4,y+1,3.6,19);
 [[-250],[-130],[0],[130],[260]].forEach(o=>{rect(g,'#2a2c30',x+o[0]-1.5,y-110,3,110);rect(g,'#3a4650',x+o[0]-40,y-116,80,6);rect(g,'rgba(255,255,255,.2)',x+o[0]-40,y-116,80,1.6)});
 /* la facciata lunga con tante arcate e finestre */
 rect(g,C,x-290,y-126,580,126);rect(g,'rgba(255,248,230,.16)',x-290,y-126,14,126);rect(g,'rgba(0,0,0,.1)',x+266,y-126,24,126);
 rect(g,D,x-294,y-132,588,8);for(let q=0;q<73;q++)rect(g,'#e8dcc0',x-292+q*8,y-136,4,5);
 for(let q=0;q<15;q++){if(q>=6&&q<=8)continue;const ax=x-282+q*38;ar(g,D,ax-2,y,32,100);ar(g,k>.2?'rgb(255,222,160)':'#2e3a48',ax+2,y,24,94);ar(g,'rgba(255,255,255,.14)',ax+4,y-4,8,80);rect(g,'#2a2a2e',ax+13,y-94,1.4,92)}
 for(let q=0;q<15;q++){if(q>=6&&q<=8)continue;const ax=x-282+q*38;rect(g,k>.2&&hr(q+8)>.3?LIT:'#33404c',ax+4,y-120,20,14)}
 /* corpo centrale più alto con orologio */
 rect(g,C,x-70,y-176,140,176);rect(g,'rgba(255,248,230,.18)',x-70,y-176,10,176);rect(g,'rgba(0,0,0,.1)',x+52,y-176,18,176);
 rect(g,D,x-76,y-182,152,8);poly(g,'#cdbfa0',[[x-76,y-182],[x,y-214],[x+76,y-182]]);poly(g,'#e8dcc0',[[x-58,y-186],[x,y-208],[x+58,y-186]]);
 dot(g,'#f4efe0',x,y-156,16);dot(g,'#2a2a2e',x,y-156,2);ln(g,'#2a2a2e',2,[x,y-156,x-1,y-168]);ln(g,'#2a2a2e',1.6,[x,y-156,x+9,y-150]);g.strokeStyle=tn('#6a5a3a');g.lineWidth=2;g.beginPath();g.arc(x,y-156,16,0,7);g.stroke();
 for(let q=0;q<3;q++){ar(g,D,x-56+q*40,y,34,96);ar(g,'#2a2018',x-52+q*40,y,26,90);rect(g,'rgba(255,200,120,'+(.2+k*.3)+')',x-50+q*40,y-40,22,40)}
 for(let q=0;q<4;q++)rect(g,k>.2&&hr(q+3)>.3?LIT:'#33404c',x-52+q*28,y-124,20,16);
 rect(g,'#2a3a6a',x-44,y-100,88,14);txt(g,'BOLOGNA CENTRALE',x,y-89,8,'#f4f1e8');
 /* panchine di metallo davanti */
 [[-210],[-60],[170]].forEach(o=>{rect(g,'#6a7078',x+o[0]-22,y-18,44,3);rect(g,'#6a7078',x+o[0]-22,y-30,44,3);rect(g,'#4a5058',x+o[0]-20,y-15,3,15);rect(g,'#4a5058',x+o[0]+17,y-15,3,15)});
 /* cartello dei binari */
 rect(g,'#2a2c30',x+212,y-124,2.6,124);rect(g,'#2a3a6a',x+182,y-148,64,28);txt(g,'BINARI 1 · 6',x+214,y-130,7,'#f4f1e8');
 if(k>.05)glow(g,x,y-70,260,'255,224,170',.26*k)});

/* --- Orologio fermo sulle 10:25 e Memoriale del 2 agosto: tono sobrio, luce bianca e fredda, nessuna immagine cruenta --- */
PR.boorologio=BO((g,x,y,t,a,k)=>{const C='#cfc6b4';
 rect(g,C,x-190,y-216,380,216);rect(g,'rgba(255,255,255,.1)',x-190,y-216,10,216);rect(g,'rgba(0,0,0,.12)',x+170,y-216,20,216);
 for(let r=0;r<12;r++)rect(g,'rgba(0,0,0,.05)',x-190,y-210+r*18,380,1.2);
 rect(g,'#b8ae98',x-194,y-222,388,8);
 for(let q=0;q<5;q++){ar(g,'#a89c84',x-168+q*66-2,y-20,32,84);ar(g,k>.2?'rgb(220,230,240)':'#33404c',x-164+q*66,y-20,24,78)}
 /* il grande orologio fermo */
 dot(g,'#6a6a70',x+104,y-166,38);dot(g,'#f4f4ee',x+104,y-166,34);g.strokeStyle=tn('#2a2a2e');g.lineWidth=2.4;g.beginPath();g.arc(x+104,y-166,34,0,7);g.stroke();
 for(let i=0;i<12;i++){const an=i*Math.PI/6;ln(g,'#2a2a2e',i%3?1.4:2.6,[x+104+Math.cos(an)*29,y-166+Math.sin(an)*29,x+104+Math.cos(an)*33,y-166+Math.sin(an)*33])}
 ln(g,'#2a2a2e',3,[x+104,y-166,x+104+Math.cos(-Math.PI/2+10.42/12*Math.PI*2)*18,y-166+Math.sin(-Math.PI/2+10.42/12*Math.PI*2)*18]);
 ln(g,'#2a2a2e',2,[x+104,y-166,x+104+Math.cos(-Math.PI/2+25/60*Math.PI*2)*28,y-166+Math.sin(-Math.PI/2+25/60*Math.PI*2)*28]);dot(g,'#2a2a2e',x+104,y-166,3);
 txt(g,'10:25',x+104,y-118,9,'#4a4a50');
 /* il memoriale: la parete con lo squarcio lasciato visibile e la lapide con i nomi */
 rect(g,'#8a8a8e',x-190,y-92,180,92);rect(g,'rgba(255,255,255,.08)',x-190,y-92,180,6);
 poly(g,'#1e1e22',[[x-98,y-92],[x-92,y-70],[x-104,y-48],[x-96,y-26],[x-90,y],[x-68,y],[x-76,y-26],[x-84,y-50],[x-74,y-70],[x-76,y-92]]);
 poly(g,'rgba(0,0,0,.35)',[[x-90,y-92],[x-84,y-70],[x-94,y-48],[x-88,y-26],[x-84,y],[x-72,y],[x-82,y-26],[x-76,y-50],[x-82,y-70],[x-80,y-92]]);
 rect(g,'#2e2e32',x-170,y-76,64,58);rect(g,'#d8d8dc',x-166,y-72,56,50);for(let q=0;q<9;q++)rect(g,'rgba(60,60,70,.5)',x-162+(q%3)*18,y-66+Math.floor(q/3)*14,14-(q%2)*3,2);
 rect(g,'#3a3a3e',x-166,y-18,56,4);
 /* fiori deposti: sobrio */
 rect(g,'#6a6a70',x-150,y-14,26,14);for(let q=0;q<4;q++)dot(g,['#f4f4ee','#e8505a','#f4f4ee','#e8d8a0'][q],x-146+q*6,y-18-(q%2)*2,3);
 if(k>.05)glow(g,x,y-100,200,'210,226,255',.18*k)});

/* --- Varco finale: un treno in sosta e, in fondo al binario, la luce di un altro mondo --- */
PR.bovarco=BO((g,x,y,t,a,k)=>{
 rect(g,'#5a5a5a',x-260,y+2,520,3);rect(g,'#5a5a5a',x-260,y+16,520,3);for(let q=0;q<33;q++)rect(g,'rgba(50,40,30,.6)',x-256+q*15.8,y+1,3.6,19);
 for(let i=0;i<3;i++){const cx=x-250+i*130;rect(g,'#c8ccd4',cx,y-90,126,76);rect(g,'rgba(255,255,255,.2)',cx,y-90,126,6);rect(g,'#1f3a7a',cx,y-44,126,8);rect(g,'#c8202a',cx,y-36,126,5);rect(g,'rgba(0,0,0,.12)',cx+110,y-90,16,76);
  for(let q=0;q<5;q++)rect(g,k>.3?'rgb(255,236,190)':'#9ab0c0',cx+8+q*23,y-78,16,26);[18,100].forEach(w=>{dot(g,'#1c1c20',cx+w,y-10,10);dot(g,'#9a9ea6',cx+w,y-10,4)});rect(g,'#2a2c30',cx-4,y-18,4,8)}
 poly(g,'#c8ccd4',[[x+140,y-90],[x+190,y-90],[x+214,y-52],[x+214,y-14],[x+140,y-14]]);poly(g,'#1f3a7a',[[x+140,y-44],[x+214,y-44],[x+214,y-36],[x+140,y-36]]);poly(g,'#aac0d4',[[x+150,y-82],[x+186,y-82],[x+204,y-54],[x+150,y-54]]);
 dot(g,'#fff4c0',x+212,y-30,4.4);glow(g,x+214,y-30,70,'255,240,190',.4+k*.4);
 /* la luce del varco, in fondo alla banchina */
 const lx=x+300,pu=.8+.2*Math.sin(t*2);
 const rg=g.createRadialGradient(lx,y-90,4,lx,y-90,150);rg.addColorStop(0,'rgba(255,255,255,'+pu+')');rg.addColorStop(.3,'rgba(190,170,255,'+(.55*pu)+')');rg.addColorStop(1,'rgba(110,231,255,0)');g.fillStyle=rg;g.fillRect(lx-150,y-240,300,300);
 el(g,'rgba(255,255,255,.9)',lx,y-90,16,56)});

/* =========================== oggetti minori =========================== */
PR.bocipresso=BO((g,x,y,t,a,k)=>{a=a||1;const h=118*a,sw=Math.sin(t*.7+x*.01)*1.2;el(g,'#243f2a',x+sw,y-h/2,9*a,h/2);el(g,'#2f5a34',x-2+sw,y-h/2-4,4*a,h/2-6);rect(g,'#4a3a2a',x-1.4,y-5,3,5)});
PR.bostudenti=BO((g,x,y,t,a,k)=>{[[-20,'#e8505a',1],[8,'#2a7ae0',-1],[34,'#f2c82a',1]].forEach((p,i)=>fig(g,x+p[0],y-4,t+i,{f:p[2],s:.62,skin:['#d8a078','#e8b890','#c88a64'][i],top:p[1],bot:'#2a4a8a',hair:['#2a1a10','#6a4a2a','#1a1a1a'][i]}))});
PR.bopiccioni=BO((g,x,y,t,a,k)=>{for(let i=0;i<6;i++){const px=x-70+i*28+Math.sin(t*.6+i)*5,pk=Math.max(0,Math.sin(t*1.5+i*2))*2;el(g,'#8a8e9a',px,y-6-pk,7,4);dot(g,'#6a7a8a',px+6,y-10-pk,3);rect(g,'#d8a0a8',px+8.4,y-10-pk,2,1);rect(g,'#6a6e78',px-2,y-3,1,3);rect(g,'#6a6e78',px+1,y-3,1,3)}});
PR.bogalvani=BO((g,x,y,t,a,k)=>{rect(g,'#bdb4a2',x-30,y-10,60,10);rect(g,'#cdc4b0',x-24,y-18,48,8);rect(g,'#d8d0bc',x-18,y-72,36,56);rect(g,'rgba(0,0,0,.1)',x+4,y-72,14,56);rect(g,'#c8c0aa',x-22,y-78,44,8);
 const br='#5a5e4a';poly(g,br,[[x-8,y-78],[x-10,y-126],[x+10,y-126],[x+8,y-78]]);dot(g,br,x,y-134,6.4);ln(g,br,4,[x-9,y-120,x-18,y-100]);ln(g,br,4,[x+9,y-120,x+14,y-104]);rect(g,'#7a7e66',x+10,y-106,10,8);
 rect(g,'#f4f4ee',x-12,y-60,24,16);for(let q=0;q<3;q++)rect(g,'rgba(60,40,20,.5)',x-9,y-57+q*4,18-(q%2)*5,1.2);txt(g,'GALVANI',x,y-33,5.5,'#5a4a3a')});
})();


/* ---------- elementi per Parigi · Dalla Torre Eiffel a Gare du Nord (mondi/parigi.js) ---------- */
/* Nomi che iniziano per "pa". Hanno la loro luce (nf di Parigi): la giornata scorre da sinistra (alba al Trocadéro)
   a destra (notte alla Gare du Nord) e usano la variabile globale AVCAM come gli altri mondi "lunghi".
   Non toccano nulla di quanto esiste prima di questo blocco. */
(function(){
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,pa=A.pa,tn=A.tn,txt=A.txt,glow=A.glow,cl=A.cl;
const {ln}=PR._rm;
const {bk,merl}=PR._mi;
const {win,shade,stat}=PR._pl;
const {fr,por,tendina}=PR._bo;
const LIT='rgb(255,226,150)';
/* luce di Parigi: [posizione nel mondo, buio da 0 (giorno) a 1 (notte)] */
const NF=[[0,.14],[2200,0],[14000,0],[15000,.05],[15900,.14],[16800,.32],[17650,.5],[18400,.68],[19300,.85],[20200,.95],[21000,1]];
const nf=wx=>{if(wx<=NF[0][0])return NF[0][1];for(let i=1;i<NF.length;i++)if(wx<=NF[i][0]){const a=NF[i-1],b=NF[i];return a[1]+(b[1]-a[1])*(wx-a[0])/(b[0]-a[0])}return 1};
const PA=f=>(g,x,y,t,a)=>{A.setDK(nf(x+AVCAM));f(g,x,y,t,a,A.getDK())};
/* riusa oggetti già esistenti (targhe, bici, alberi, tavolini) con la luce di Parigi */
const PW=n=>(g,x,y,t,a)=>{const d=nf(x+AVCAM),sv=AVCAM;AVCAM=6700+2400*d-x;try{PR[n](g,x,y,t,a)}finally{AVCAM=sv}};
[['patarga','avtarga'],['pabici','avbici'],['paalbero','avalbero'],['patavolo','avtavolo']].forEach(p=>PR[p[0]]=PW(p[1]));

/* ---- piccoli attrezzi comuni ---- */
const GOLD='#d9b24a',VERDE='#2f4a3c',ZN='#6f8092',ZN2='#5a6a7c',CRE='#e4d9bd',CRE2='#cfc3a4',MAT='#b2553a';
const dl=(k,i)=>k>.3&&hr(i)>.35;
/* tetto di zinco alla Mansard: base y, larghezza w, altezza h, con abbaini e camini */
const mans=(g,x,y,w,h,k,i,nodorm)=>{const s=(h*.55+5)/h;poly(g,ZN,[[x-5,y],[x+w+5,y],[x+w-h*.55,y-h],[x+h*.55,y-h]]);rect(g,ZN2,x+h*.55,y-h-3,w-h*1.1,4);
 for(let q=1;q<h/6;q++){const d=q*6;rect(g,'rgba(20,30,50,.15)',x-5+s*d,y-d,w+10-2*s*d,1)}
 rect(g,'rgba(255,255,255,.1)',x-5,y-2,w+10,2);
 if(!nodorm){const n=Math.max(1,Math.floor(w/52));for(let j=0;j<n;j++){const dx=x+(w/n)*(j+.5)-9,dy=y-h*.18,L=dl(k,i*7+j);rect(g,CRE,dx-2,dy-24,22,24);rect(g,L?LIT:'#2e3a48',dx+1,dy-21,16,19);rect(g,'rgba(255,255,255,.12)',dx+3,dy-19,5,15);poly(g,ZN2,[[dx-5,dy-24],[dx+9,dy-35],[dx+23,dy-24]])}}
 [[.18,'#a8553a'],[.74,'#97482f']].forEach(c=>{const cx=x+w*c[0];rect(g,c[1],cx,y-h-20,10,22);rect(g,'#7a3a28',cx-2,y-h-22,14,3);rect(g,'#2a2a2e',cx+1,y-h-27,3,5);rect(g,'#2a2a2e',cx+6,y-h-26,3,4)})};
/* cavallo e cavaliere di bronzo (sale su un piedistallo) */
const cav=(g,x,y,s,c,rear)=>{g.save();g.translate(x,y);g.scale(s,s);const r=rear?-.28:0;g.rotate(r);
 el(g,c,0,-20,24,11);poly(g,c,[[14,-24],[22,-46],[34,-52],[36,-44],[26,-36],[22,-18]]);dot(g,c,35,-49,5.5);poly(g,c,[[33,-54],[35,-60],[37,-54]]);
 [[-17,0],[-10,0],[12,0],[19,0]].forEach((l,i)=>ln(g,c,5,[l[0],-14,l[0]+(i%2?5:-4),-2+(rear&&i>1?-10:0)]));ln(g,c,3.5,[-23,-24,-32,-12]);
 rect(g,c,-5,-52,10,28);dot(g,c,0,-58,5.6);rect(g,c,-5,-66,10,5);ln(g,c,2,[6,-48,12,-84]);g.restore()};
/* statuina generica su piedistallo (dorata o di marmo) */
const sta=(g,x,y,h,c,ped)=>{rect(g,ped||'#cfc6ae',x-9,y-h*.3,18,h*.3);rect(g,ped||'#cfc6ae',x-11,y-h*.3-3,22,4);poly(g,c,[[x-6,y-h*.3-3],[x-4,y-h*.78],[x+4,y-h*.78],[x+6,y-h*.3-3]]);dot(g,c,x,y-h*.88,4.6);ln(g,c,3,[x+4,y-h*.74,x+12,y-h*.98]);ln(g,c,3,[x-4,y-h*.74,x-10,y-h*.6])};
/* getto d'acqua animato */
const jet=(g,x,y,hh,ww,t,ph)=>{g.save();g.strokeStyle='rgba(235,248,255,.85)';g.lineWidth=1.6;g.setLineDash([5,4]);g.lineDashOffset=-t*26-ph*3;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+ww*.5,y-hh*1.6,x+ww,y);g.stroke();g.restore();for(let q=0;q<3;q++)dot(g,'rgba(240,250,255,.6)',x+ww+(q-1)*4+Math.sin(t*5+q+ph)*2,y-1-q,1.6)};
/* acqua di fiume: fascia con sfumatura e riflessi */
const acqua=(g,x0,y0,w,h,t,k)=>{const wg=g.createLinearGradient(0,y0,0,y0+h);wg.addColorStop(0,tn('#7aa6a8'));wg.addColorStop(1,tn('#3e6a72'));g.fillStyle=wg;g.fillRect(x0,y0,w,h);
 for(let q=0;q<Math.floor(w/22);q++)rect(g,'rgba(255,255,255,.26)',x0+((q*47+t*9)%w),y0+3+(q*7)%(Math.max(4,h-4)),9+(q%3)*6,1.2);
 if(h>26&&w>400)for(let d=0;d<2;d++){const dx=x0+((t*4+d*230)%w),dy=y0+h-9;el(g,'#7a6a4a',dx,dy,5.5,3);dot(g,'#2a6a4a',dx+5,dy-3,2.4);rect(g,'#e8a020',dx+7,dy-3,2.4,1.2)}};
/* battello turistico (bateau-mouche) */
const battello=(g,x,y,k,s)=>{s=s||1;g.save();g.translate(x,y);g.scale(s,s);poly(g,'#e8e6e0',[[-62,-10],[62,-10],[54,2],[-54,2]]);rect(g,'#2a4a7a',-60,-6,120,3);rect(g,'#cfe0ec',-50,-24,96,14);rect(g,'rgba(255,255,255,.35)',-50,-24,96,3);
 for(let q=0;q<9;q++)rect(g,k>.3?LIT:'#7a9ab0',-46+q*10.4,-21,7,8);rect(g,'#e8e6e0',-38,-30,70,6);rect(g,'#c8402a',20,-40,6,10);g.restore()};
/* due passanti piccoli (per dare vita) */
const gente=(g,x,y,t,n,sc)=>{const cc=['#e8505a','#2a7ae0','#f2c82a','#4aa86a','#9a5ad0','#f4f0e6'];for(let i=0;i<n;i++)fig(g,x+i*(22*sc/.62),y,t+i*1.3,{f:i%2?1:-1,s:sc,skin:['#d8a078','#e8b890','#c88a64'][i%3],top:cc[(i*2)%6],bot:['#2a4a8a','#3a3a46','#c8b890'][i%3],hair:['#2a1a10','#6a4a2a','#1a1a1a','#a8803a'][i%4],ph:i})};

PR._pa={nf,PA,LIT,mans,cav,sta,jet,acqua,battello,gente,GOLD,VERDE,ZN,ZN2,CRE,CRE2,MAT};

/* =========================== ZONA 1 · Trocadéro e Torre Eiffel =========================== */
/* --- Esplanade del Trocadéro: la terrazza, le due ali curve del Palazzo di Chaillot, fontane e statue dorate --- */
PR.patrocadero=PA((g,x,y,t,a,k)=>{const C='#e8dcc2',C2='#d2c5a6';
 [[-1,x-306],[1,x+66]].forEach((w,j)=>{const x0=w[1];rect(g,C,x0,y-170,240,170);rect(g,'rgba(255,255,255,.12)',x0,y-170,8,170);rect(g,'rgba(0,0,0,.1)',x0+226,y-170,14,170);
  rect(g,C2,x0-3,y-176,246,8);rect(g,C2,x0,y-100,240,5);rect(g,'#4a4a56',x0+6,y-96,228,96);
  for(let q=0;q<15;q++){rect(g,'#efe6cf',x0+10+q*15,y-96,6,96);rect(g,'rgba(0,0,0,.14)',x0+14+q*15,y-96,2,96)}
  for(let q=0;q<7;q++)rect(g,k>.3&&hr(q+j*9)>.4?LIT:'#3a4252',x0+14+q*33,y-150,14,34);
  const px0=w[0]<0?x0:x0+184;rect(g,C,px0,y-214,56,214);rect(g,C2,px0-4,y-220,64,8);rect(g,'rgba(0,0,0,.1)',px0+44,y-214,12,214);
  ar(g,k>.3?LIT:'#2a2e38',px0+14,y-96,28,80);for(let q=0;q<3;q++)rect(g,'#c4b794',px0+8+q*14,y-206,6,26)});
 /* terrazza con balaustra, statue dorate e fontane */
 rect(g,'#d9ceb0',x-310,y-42,620,42);rect(g,'rgba(0,0,0,.1)',x-310,y-8,620,8);rect(g,C2,x-314,y-48,628,7);
 for(let q=0;q<54;q++){rect(g,'#efe6cf',x-304+q*11.4,y-40,4,30);dot(g,'#efe6cf',x-302+q*11.4,y-42,2.4)}
 rect(g,C2,x-314,y-12,628,4);
 [-262,-126,126,262].forEach(sx=>sta(g,sx+x,y-48,70,GOLD));
 [-70,70].forEach((sx,i)=>{el(g,'#7aa6b0',x+sx,y-20,52,6);rect(g,'#cfc4a6',x+sx-54,y-26,108,8);for(let q=-2;q<=2;q++)jet(g,x+sx+q*14,y-30,34-Math.abs(q)*6,8,t,q+i*3)});
 if(k>.05)glow(g,x,y-120,260,'255,206,140',.2*k);
 const al=cl(1-(x+AVCAM)/1200,0,1);if(al>.01)glow(g,x+60,y-150,230,'255,196,170',.34*al)});

/* --- Torre Eiffel: ferro traforato bronzo-grigio, quattro piedi, tre piattaforme, i 72 nomi, scintillii di sera --- */
PR.paeiffel=PA((g,x,y,t,a,k)=>{const H=420,B=88,u1=.17,u2=.36,u3=.83;
 const wo=u=>B*Math.pow(1-u,2.1)+3*(1-u)+2,Y=u=>y-u*H,BR='#8c6c4e',BD='#573f2e',BL='#b08c68';
 const lat=(Lf,Rf,ua,ub,n,w)=>{for(let i=0;i<n;i++){const a0=ua+(ub-ua)*i/n,a1=ua+(ub-ua)*(i+1)/n;ln(g,BD,w||1.2,[Lf(a0),Y(a0),Rf(a1),Y(a1)]);ln(g,BD,w||1.2,[Rf(a0),Y(a0),Lf(a1),Y(a1)]);ln(g,BD,w||1.2,[Lf(a0),Y(a0),Rf(a0),Y(a0)])}};
 /* i quattro piedi (due in vista) */
 [-1,1].forEach(s=>{const o=[],n=[];for(let i=0;i<=10;i++){const u=u1*i/10;o.push([x+s*wo(u),Y(u)])}for(let i=10;i>=0;i--){const u=u1*i/10;n.push([x+s*(wo(u)-17+9*(u/u1)),Y(u)])}
  poly(g,BR,o.concat(n));rect(g,'#6a4e36',x+s*(wo(0)-13)-(s<0?0:2),y-14,15,14);
  lat(u=>x+s*wo(u),u=>x+s*(wo(u)-17+9*(u/u1)),0,u1,8,1.1);ln(g,BL,1.4,o.slice(0,11).flatMap(p=>p))});
 /* arco fra i piedi e fascia dei 72 nomi */
 g.strokeStyle=tn(BR);g.lineWidth=8;g.beginPath();g.ellipse(x,Y(u1)+36,wo(u1)-9,34,0,Math.PI,0);g.stroke();g.strokeStyle=tn(BD);g.lineWidth=1.4;g.beginPath();g.ellipse(x,Y(u1)+36,wo(u1)-9,29,0,Math.PI,0);g.stroke();
 /* fusto: da prima a seconda piattaforma, poi fino alla terza, poi la guglia */
 const body=(ua,ub,n)=>{const p=[];for(let i=0;i<=8;i++){const u=ua+(ub-ua)*i/8;p.push([x-wo(u),Y(u)])}for(let i=8;i>=0;i--){const u=ua+(ub-ua)*i/8;p.push([x+wo(u),Y(u)])}poly(g,BR,p);poly(g,'rgba(0,0,0,.17)',[[x,Y(ua)]].concat(p.slice(9).reverse(),[[x,Y(ub)]]));lat(u=>x-wo(u),u=>x+wo(u),ua,ub,n,1.2)};
 body(u1,u2,7);body(u2,u3,9);
 ln(g,BD,2.6,[x,Y(u3),x,Y(1)]);ln(g,BR,1.6,[x-2,Y(u3),x-1,Y(1)]);
 /* piattaforme e ristoranti */
 [[u1,14,13],[u2,10,10],[u3,6,7]].forEach((p,i)=>{const w=wo(p[0])+p[1];rect(g,'#7a5a3e',x-w,Y(p[0])-p[2],w*2,p[2]);rect(g,BL,x-w-2,Y(p[0])-p[2]-3,w*2+4,4);rect(g,BD,x-w,Y(p[0])-2,w*2,2);
  for(let q=0;q<Math.floor(w/5);q++)rect(g,'#6a4e36',x-w+2+q*10,Y(p[0])-p[2]-8,2,6);
  if(i<2)for(let q=0;q<Math.floor(w/7);q++)rect(g,k>.3?LIT:'rgba(190,210,220,.6)',x-w+4+q*14,Y(p[0])-p[2]+3,8,5)});
 const nw=wo(u1)+10;rect(g,'#3a2a24',x-nw,Y(u1),nw*2,12);for(let q=0;q<Math.floor(nw*2/6);q++)rect(g,GOLD,x-nw+3+q*6,Y(u1)+3,hr(q)>.5?4:2,5);
 /* faro in cima e scintillii della sera */
 const bl=.5+.5*Math.sin(t*3);dot(g,k>.3?'rgb(255,250,210)':'#e8e0c8',x,Y(1)-3,2.6);if(k>.2)glow(g,x,Y(1)-3,50*(.7+.3*bl),'255,240,190',.6*k);
 if(k>.15){glow(g,x,Y(.3),190,'255,190,90',.3*k);for(let i=0;i<70;i++){const u=.04+hr(i)*.9,xx=x+(hr(i*3)*2-1)*wo(u)*.92,fl=Math.pow(Math.max(0,Math.sin(t*9+i*2.3)),10);if(fl>.05)dot(g,'rgba(255,250,225,'+(fl*Math.min(1,k*1.6))+')',xx,Y(u),1.7+fl)}}});

/* --- Pont d'Iéna e Champ-de-Mars: ponte di pietra con le statue equestri, la Senna col battello, il prato con alberi a cubo --- */
PR.papontiena=PA((g,x,y,t,a,k)=>{const S='#d4cbb4',S2='#b8ad92',w0=x-250;
 /* il Champ-de-Mars: lungo prato, alberi potati a cubo */
 rect(g,'#7aa860',w0-40,y-118,580,30);for(let q=0;q<5;q++)rect(g,'rgba(255,255,255,.1)',w0-30+q*110,y-116,60,4);
 for(let q=0;q<13;q++){const tx=w0-26+q*45;rect(g,'#5a4430',tx-2,y-116,4,20);rect(g,'#4f8a46',tx-14,y-146,28,30);rect(g,'#63a057',tx-14,y-146,28,6);rect(g,'rgba(0,0,0,.16)',tx+6,y-146,8,30)}
 /* il ponte: corpo di pietra con quattro arcate e acqua visibile sotto */
 rect(g,S,w0,y-70,500,66);rect(g,S2,w0-4,y-76,508,8);rect(g,'rgba(0,0,0,.1)',w0,y-8,500,4);
 for(let q=0;q<48;q++)rect(g,'#c3b99f',w0+4+q*10.3,y-96,5,20);rect(g,S2,w0-4,y-100,508,6);
 g.save();g.beginPath();[0,1,2,3].forEach(i=>{const ax=w0+14+i*122;g.moveTo(ax,y-4);g.lineTo(ax,y-34);g.arc(ax+46,y-34,46,Math.PI,0);g.lineTo(ax+92,y-4);g.closePath()});g.clip();
 acqua(g,w0,y-80,500,80,t,k);[0,1,2,3].forEach(i=>{const bx=w0+14+((t*14+i*125)%520)-40;if(i==1)battello(g,w0+60+((t*16)%520),y-22,k,.8)});g.restore();
 [0,1,2,3].forEach(i=>{const ax=w0+14+i*122;g.strokeStyle=tn(S2);g.lineWidth=5;g.beginPath();g.arc(ax+46,y-34,46,Math.PI,0);g.stroke()});
 /* piedistalli e statue equestri alle quattro estremità */
 [w0+2,w0+40,w0+458,w0+496].forEach((px,i)=>{rect(g,'#c6bca2',px-10,y-132,20,36);rect(g,S2,px-12,y-136,24,6);cav(g,px+(i<2?-4:4),y-136,.42,'#4c4a34',i%2==0);dot(g,'rgba(217,178,74,.5)',px+(i<2?4:-4),y-176,2)});
 if(k>.05)glow(g,x,y-100,260,'255,214,140',.15*k)});

/* --- carosello d'epoca: tetto a strisce, cavalli che girano, lucine --- */
PR.pacarosello=PA((g,x,y,t,a,k)=>{const R='#c8402a',W='#f4efe0';rect(g,'#6a4a2a',x-72,y-14,144,14);rect(g,GOLD,x-72,y-16,144,3);
 for(let q=0;q<6;q++){const cx=x-60+q*24,ph=t*1.6+q*1.05,yy=Math.sin(ph)*5;rect(g,GOLD,cx-1,y-84,2,70);const c=['#f4f0e6','#8a5a32','#2a2a2e','#d8a050','#e8c8c0','#6a4a2a'][q];el(g,c,cx,y-40+yy,11,6);poly(g,c,[[cx+6,y-44+yy],[cx+11,y-54+yy],[cx+15,y-50+yy],[cx+10,y-40+yy]]);dot(g,c,cx+14,y-53+yy,3);rect(g,c,cx-8,y-36+yy,2,10);rect(g,c,cx+4,y-36+yy,2,10)}
 poly(g,R,[[x-82,y-84],[x+82,y-84],[x+36,y-122],[x-36,y-122]]);for(let q=0;q<7;q++)poly(g,q%2?W:R,[[x-82+q*23.4,y-84],[x-82+(q+1)*23.4,y-84],[x-36+(q+1)*10.3,y-122],[x-36+q*10.3,y-122]]);
 rect(g,GOLD,x-84,y-88,168,5);poly(g,GOLD,[[x-4,y-122],[x,y-136],[x+4,y-122]]);dot(g,'#e8505a',x,y-137,3);
 for(let q=0;q<14;q++)dot(g,'rgba(255,240,170,'+(.55+.4*Math.sin(t*6+q))+')',x-80+q*12.3,y-82,2);
 if(k>.1)glow(g,x,y-70,110,'255,214,130',.35*k)});

/* --- ambulante con l'anello di piccole torri souvenir --- */
PR.pavendeur=PA((g,x,y,t,a,k)=>{fig(g,x,y,t,{f:-1,s:1,skin:'#a87858',top:'#3a3a46',bot:'#26262e',hair:'#1a1210',acc:(g2,b)=>{rect(g2,'#e8505a',-9,-98+b,18,3);const sw=Math.sin(t*1.3)*1.2;g2.strokeStyle=tn('#9a9aa2');g2.lineWidth=1.6;g2.beginPath();g2.arc(26,-70+b,17,0,7);g2.stroke();
  for(let q=0;q<12;q++){const an=q*.5236,tx=26+Math.cos(an)*17,ty=-70+b+Math.sin(an)*17;poly(g2,q%3?'#9a7a58':'#c8c8d0',[[tx-2,ty+3],[tx+2,ty+3],[tx,ty-7]]);rect(g2,'#9a7a58',tx-.5,ty-7,1,3)}}})});

/* =========================== ZONA 2 · Champs-Élysées e Arco di Trionfo =========================== */
/* --- Arco di Trionfo: enorme arco di pietra chiara, gruppi scolpiti, attico con scudi, Milite Ignoto e fiamma sotto la volta --- */
PR.paarco=PA((g,x,y,t,a,k)=>{const S='#e0d4b6',S2='#cfc2a2';
 rect(g,S,x-134,y-262,268,262);rect(g,'rgba(255,255,255,.14)',x-134,y-262,9,262);rect(g,'rgba(0,0,0,.12)',x+112,y-262,22,262);
 for(let q=0;q<9;q++)rect(g,'rgba(120,100,70,.08)',x-134,y-250+q*28,268,1.4);
 /* attico con gli scudi, cornice, fregio */
 rect(g,S2,x-140,y-270,280,10);rect(g,'#bfb292',x-140,y-262,280,3);for(let q=0;q<14;q++){dot(g,'#c9bc9a',x-122+q*18.8,y-244,6.4);dot(g,'#e8dcc0',x-122+q*18.8,y-244,4)}
 rect(g,S2,x-138,y-224,276,7);rect(g,'rgba(0,0,0,.08)',x-134,y-217,268,4);for(let q=0;q<46;q++)rect(g,'rgba(110,92,64,.32)',x-128+q*5.6,y-212,2.2,12+hr(q)*4);rect(g,S2,x-138,y-196,276,6);
 /* gruppi scolpiti sui pilastri */
 [[-128,-54],[54,128]].forEach((p,j)=>{rect(g,'#d6c9a8',p[0]+4,y-186,p[1]-p[0]-8,152);rect(g,'rgba(0,0,0,.09)',p[0]+4,y-186,p[1]-p[0]-8,4);
  for(let q=0;q<26;q++){const gx=p[0]+10+hr(q*3+j)*(p[1]-p[0]-26),gy=y-176+hr(q*5+j)*130;el(g,hr(q)>.5?'#cdbf9c':'#e6dbc2',gx,gy,5+hr(q+2)*7,6+hr(q+4)*9)}
  if(j){poly(g,'#c9bc98',[[x+78,y-150],[x+66,y-176],[x+80,y-168],[x+92,y-184],[x+96,y-166],[x+112,y-176],[x+104,y-146]]);dot(g,'#dccfae',x+88,y-142,7);ln(g,'#c4b692',3,[x+88,y-136,x+104,y-124])}
  else{el(g,'#cdbf9c',x-92,y-100,18,36);dot(g,'#dccfae',x-92,y-146,8);ln(g,'#c4b692',3.4,[x-80,y-122,x-60,y-150])}});
 /* la grande apertura e il Milite Ignoto */
 ar(g,'#cbbf9f',x-48,y,96,176);ar(g,'#2e2a2c',x-42,y,84,168);ar(g,'#443c3a',x-36,y,72,160);
 const fl=.85+.15*Math.sin(t*9);rect(g,'#2a2a2e',x-30,y-6,60,6);rect(g,'#3a3a40',x-27,y-12,54,8);rect(g,'rgba(255,255,255,.2)',x-27,y-12,54,2);ln(g,'#8a8a92',1.4,[x-8,y-9,x+8,y-9]);ln(g,'#8a8a92',1.4,[x,y-12,x,y-6]);
 rect(g,'#6a5a3a',x-5,y-24,10,12);poly(g,'#c8a050',[[x-9,y-24],[x+9,y-24],[x+6,y-30],[x-6,y-30]]);
 poly(g,'rgba(255,140,40,'+fl+')',[[x-5,y-30],[x+5,y-30],[x+2,y-46*fl],[x,y-52*fl],[x-3,y-42*fl]]);poly(g,'rgba(255,230,120,'+fl+')',[[x-2.4,y-30],[x+2.4,y-30],[x,y-42*fl]]);glow(g,x,y-34,56,'255,170,70',.5+.2*k);
 [[-22,'#e8505a'],[-12,'#f4f4ee'],[-2,'#e8505a'],[8,'#2a7ae0'],[16,'#f4f4ee']].forEach((f,i)=>dot(g,f[1],x+f[0]+(i%2)*2,y-14,2.2));
 rect(g,'#3a3a44',x-32,y-18,2,18);rect(g,'#3a3a44',x+30,y-18,2,18);ln(g,'#8a2a2a',1.6,[x-32,y-16,x-12,y-12,x+12,y-12,x+32,y-16]);
 /* bandiera tricolore sotto l'arco */
 rect(g,'#2a4aa8',x-9,y-156,6,52);rect(g,'#f4f4ee',x-3,y-156,6,52);rect(g,'#d8302a',x+3,y-156,6,52);
 if(k>.05)glow(g,x,y-130,230,'255,226,170',.14*k)});

/* --- platano dei viali: tronco a chiazze, chioma ampia e luminosa --- */
PR.paplatano=PA((g,x,y,t,a,k)=>{const s=a||1,sw=Math.sin(t*.8+x*.01)*1.4;g.save();g.translate(x,y);g.scale(s,s);
 rect(g,'#a89a84',-7,-150,14,150);for(let q=0;q<14;q++)rect(g,hr(q)>.5?'#8a8e72':'#c8bba0',-7+hr(q*3)*10,-146+q*10,5+hr(q)*5,6);rect(g,'rgba(0,0,0,.12)',2,-150,5,150);rect(g,'#6a6a6e',-14,-4,28,4);poly(g,'#a89a84',[[-3,-100],[-26,-148],[-20,-150],[0,-110]]);poly(g,'#a89a84',[[3,-110],[28,-152],[22,-154],[0,-120]]);
 [[0,-190,64,40,'#3f7a3a'],[-42,-172,44,30,'#4a8a3e'],[44,-176,46,30,'#4a8a3e'],[-14,-216,42,28,'#5a9a4a'],[24,-208,40,26,'#5a9a4a'],[-58,-150,26,18,'#376a34'],[60,-152,28,18,'#376a34']].forEach(c=>el(g,c[4],c[0]+sw,c[1],c[2],c[3]));
 for(let q=0;q<18;q++)dot(g,'rgba(255,240,170,.3)',-56+hr(q)*112+sw,-230+hr(q+7)*70,2);g.restore()});

/* --- Avenue des Champs-Élysées: viale largo, platani, bandiere tricolori, un festone di bandierine --- */
PR.paavenue=PA((g,x,y,t,a,k)=>{
 [-250,-110,60,210].forEach((tx,i)=>{PR.paplatano(g,x+tx,y,t,1.05-i%2*.1);rect(g,'#3a3a40',x+tx-18,y-2,36,3);for(let q=0;q<6;q++)rect(g,'#2a2a2e',x+tx-16+q*6,y-2,2,3)});
 [-180,150].forEach((fx,i)=>{rect(g,'#3a3a40',x+fx-1.6,y-200,3.2,200);dot(g,GOLD,x+fx,y-203,3.4);const w=Math.sin(t*3+i)*2;poly(g,'#2a4aa8',[[x+fx+1.6,y-198],[x+fx+14,y-198+w],[x+fx+14,y-178+w],[x+fx+1.6,y-178]]);poly(g,'#f4f4ee',[[x+fx+14,y-198+w],[x+fx+26,y-198+w*1.6],[x+fx+26,y-178+w*1.6],[x+fx+14,y-178+w]]);poly(g,'#d8302a',[[x+fx+26,y-198+w*1.6],[x+fx+38,y-198+w*2],[x+fx+38,y-178+w*2],[x+fx+26,y-178+w*1.6]])});
 ln(g,'#3a3a40',1.2,[x-180,y-196,x-100,y-176,x-20,y-170,x+60,y-176,x+150,y-196]);for(let q=0;q<13;q++){const u=q/12,px=x-180+u*330,py=y-196+Math.sin(u*Math.PI)*22;poly(g,['#2a4aa8','#f4f4ee','#d8302a'][q%3],[[px-4,py],[px+4,py],[px,py+9]])}
 PR.patavolo(g,x-30,y,t,'#2a4a3a');PR.patavolo(g,x+110,y,t,'#c8402a')});

/* --- Place de la Concorde: obelisco di Luxor, due fontane con statue dorate, lampioni dorati, la ruota panoramica --- */
PR.paconcorde=PA((g,x,y,t,a,k)=>{
 /* la ruota panoramica dietro */
 const wx=x+150,wy=y-190,R=118,rot=t*.07;g.strokeStyle=tn('#f2eee4');g.lineWidth=3;g.beginPath();g.arc(wx,wy,R,0,7);g.stroke();g.lineWidth=1.2;g.beginPath();g.arc(wx,wy,R-12,0,7);g.stroke();
 for(let q=0;q<20;q++){const an=rot+q*.314;ln(g,'#e6e2d8',1,[wx,wy,wx+Math.cos(an)*R,wy+Math.sin(an)*R]);const gx=wx+Math.cos(an)*R,gy=wy+Math.sin(an)*R;rect(g,['#e8505a','#2a7ae0','#f2c82a','#4aa86a'][q%4],gx-5,gy,10,9);ln(g,'#e6e2d8',1,[gx,gy-2,gx,gy])}
 dot(g,'#d0ccc0',wx,wy,5);ln(g,'#e6e2d8',3,[wx,wy,wx-40,y]);ln(g,'#e6e2d8',3,[wx,wy,wx+40,y]);if(k>.15)glow(g,wx,wy,130,'255,230,160',.28*k);
 /* obelisco: granito rosa con geroglifici, punta dorata */
 const H=280,bw=17,tw=10;poly(g,'#c68a76',[[x-bw,y-40],[x+bw,y-40],[x+tw,y-40-H],[x-tw,y-40-H]]);poly(g,'rgba(0,0,0,.14)',[[x+2,y-40],[x+bw,y-40],[x+tw,y-40-H],[x+2,y-40-H]]);poly(g,GOLD,[[x-tw,y-40-H],[x+tw,y-40-H],[x,y-40-H-24]]);
 for(let c=0;c<3;c++)for(let q=0;q<22;q++)rect(g,'rgba(110,60,50,.5)',x-bw*.7+c*bw*.62+(q%2),y-52-q*11.4,3,5);
 rect(g,'#d6cdb4',x-34,y-40,68,40);rect(g,'#bfb496',x-38,y-44,76,7);rect(g,'#bfb496',x-38,y-6,76,6);for(let q=0;q<5;q++)rect(g,'rgba(100,80,40,.45)',x-24+q*12,y-34,7,3);
 /* fontane monumentali */
 [-225,-110].forEach((fx,i)=>{const c=x+fx+(i?0:-10);el(g,'#7aa6b0',c,y-14,56,8);rect(g,'#cfc4a6',c-58,y-24,116,12);rect(g,'#b8ad92',c-60,y-26,120,4);rect(g,'#cfc4a6',c-5,y-80,10,56);el(g,'#cfc4a6',c,y-80,26,6);rect(g,'#cfc4a6',c-3,y-128,6,48);el(g,'#cfc4a6',c,y-128,15,4);
  [-40,40].forEach(o=>sta(g,c+o,y-26,52,GOLD));sta(g,c,y-132,40,GOLD);for(let q=-2;q<=2;q++)jet(g,c+q*8-4,y-130,24,8,t,q+i*4)});
 /* lampioni dorati con rostri */
 [-300,20,260].forEach(lx=>{rect(g,'#c8a040',x+lx-3,y-130,6,130);rect(g,GOLD,x+lx-8,y-8,16,8);for(let q=0;q<3;q++){rect(g,GOLD,x+lx-10+q*0,y-70-q*18,20-q*4,4)}dot(g,k>.2?LIT:'#efe6d0',x+lx,y-140,7);rect(g,GOLD,x+lx-8,y-134,16,3);if(k>.05)glow(g,x+lx,y-140,56,'255,214,120',.55*k)})});

/* =========================== ZONA 3 · Tuileries e Louvre =========================== */
/* --- sedie di metallo verde (e un tavolino rotondo) --- */
PR.pasedie=PA((g,x,y,t,a,k)=>{const n=a||3;for(let i=0;i<n;i++){const cx=x+(i-(n-1)/2)*34,f=i%2?-1:1;g.save();g.translate(cx,y);g.scale(f,1);
 ln(g,'#2f5a3c',2.2,[-9,-17,-11,0]);ln(g,'#2f5a3c',2.2,[9,-17,10,0]);rect(g,'#3f7a4a',-11,-19,22,3);ln(g,'#2f5a3c',2.4,[-10,-18,-15,-44]);for(let q=0;q<4;q++)ln(g,'#3f7a4a',2,[-11-q*1.3,-21-q*6,-15-q*1.3+2,-20-q*6]);g.restore()}
 if(n>2){rect(g,'#3a3a40',x-1,y-30,2,30);el(g,'#4a4a50',x,y-31,13,3.4)}});
/* --- Giardino delle Tuileries: viali di ghiaia, vasca con zampilli e barchette, alberi tagliati, statue di marmo, padiglione a vetrate --- */
PR.patuileries=PA((g,x,y,t,a,k)=>{
 /* siepi e alberi tagliati a lastra */
 for(let q=0;q<9;q++){const tx=x-320+q*72;rect(g,'#5a4430',tx-2,y-112,4,40);rect(g,'#3f7a3a',tx-24,y-148,48,40);rect(g,'#58934a',tx-24,y-148,48,8);rect(g,'rgba(0,0,0,.14)',tx+12,y-148,12,40)}
 rect(g,'#4f8a46',x-340,y-72,680,24);for(let q=0;q<9;q++)rect(g,'rgba(255,255,255,.1)',x-330+q*76,y-70,40,3);
 /* il padiglione basso con le grandi vetrate */
 rect(g,'#e4d9bd',x+212,y-92,118,50);rect(g,'#bfb496',x+208,y-96,126,6);for(let q=0;q<5;q++)rect(g,k>.3?LIT:'#9ec4dc',x+220+q*21,y-86,16,34);rect(g,'rgba(255,255,255,.3)',x+220,y-86,100,5);
 /* statue di marmo fra le siepi */
 [-250,-60,70].forEach((sx,i)=>{rect(g,'#d6cdb4',x+sx-14,y-72,28,24);sta(g,x+sx,y-48,78,'#f0ece0','#d6cdb4')});
 /* la vasca rotonda con lo zampillo e le barchette di legno */
 el(g,'#b8ad92',x-130,y-14,106,16);el(g,'#7aa6b0',x-130,y-15,98,12);for(let q=0;q<6;q++)rect(g,'rgba(255,255,255,.3)',x-210+((q*37+t*8)%150),y-18+(q%3)*3,10,1.2);
 for(let q=-2;q<=2;q++)jet(g,x-130+q*7-3,y-18,32-Math.abs(q)*8,6,t,q);
 [[-170,'#c8402a'],[-96,'#2a7ae0'],[-132,'#f2c82a']].forEach((b,i)=>{const bx=x+b[0]+Math.sin(t*.7+i*2)*8;poly(g,'#6a4a2a',[[bx-8,y-14],[bx+8,y-14],[bx+5,y-10],[bx-5,y-10]]);rect(g,'#6a4a2a',bx,y-30,1.4,16);poly(g,b[1],[[bx+1.4,y-30],[bx+9,y-16],[bx+1.4,y-16]])});
 PR.pasedie(g,x-46,y-2,t,3);PR.pasedie(g,x+120,y,t,2);PR.pasedie(g,x-250,y,t,2)});

/* --- Arc du Carrousel: marmo rosa e crema, tre aperture, otto colonne, il cocchio di bronzo con i quattro cavalli --- */
PR.pacarrousel=PA((g,x,y,t,a,k)=>{
 /* ali del Louvre dietro, con tetti di ardesia */
 [[-330,-134],[134,330]].forEach(w=>{rect(g,'#dccfae',x+w[0],y-150,w[1]-w[0],150);rect(g,'rgba(0,0,0,.08)',x+w[1]-16,y-150,16,150);poly(g,'#4f5766',[[x+w[0]-4,y-150],[x+w[0]+36,y-190],[x+w[1]-36,y-190],[x+w[1]+4,y-150]]);for(let q=0;q<Math.floor((w[1]-w[0])/30);q++){ar(g,k>.3?LIT:'#3e4654',x+w[0]+10+q*30,y-60,16,50);ar(g,k>.3?LIT:'#3e4654',x+w[0]+10+q*30,y-124,14,36)}});
 const R='#e6cfc0',R2='#d3b6a6',PK='#c98a7e';
 rect(g,R,x-130,y-170,260,170);rect(g,'rgba(0,0,0,.1)',x+110,y-170,20,170);rect(g,R2,x-136,y-176,272,10);rect(g,R2,x-136,y-14,272,14);
 [[-96,36,78],[-30,60,108],[60,36,78]].forEach(v=>{ar(g,'#6a4a4a',x+v[0],y-14,v[1],v[2]);ar(g,'#2e2a30',x+v[0]+4,y-14,v[1]-8,v[2]-4);rect(g,'rgba(255,214,150,'+(.1+k*.4)+')',x+v[0]+8,y-60,v[1]-16,46)});
 [-118,-103,-55,-40,40,55,103,118].forEach(cx=>{rect(g,PK,x+cx-5,y-132,10,118);rect(g,'rgba(255,255,255,.22)',x+cx-4,y-132,3,118);rect(g,'rgba(0,0,0,.14)',x+cx+2,y-132,3,118);rect(g,GOLD,x+cx-7,y-136,14,5);rect(g,GOLD,x+cx-7,y-18,14,4);sta(g,x+cx,y-166,26,'#a8a8a0','#d6c4b4')});
 rect(g,R2,x-132,y-160,264,8);for(let q=0;q<18;q++)rect(g,'rgba(120,70,60,.26)',x-120+q*14,y-148,6,12);
 /* il cocchio sulla sommità */
 rect(g,R2,x-52,y-188,104,12);rect(g,'#c8a040',x-36,y-206,72,20);[-30,-10,10,30].forEach((hx,i)=>{el(g,'#566a46',x+hx,y-212,8,11);poly(g,'#566a46',[[x+hx-4,y-218],[x+hx+4,y-218],[x+hx+(i%2?7:1),y-248],[x+hx+(i%2?2:-5),y-246]]);dot(g,'#566a46',x+hx+(i%2?5:-2),y-250,4.6)});
 poly(g,'#7a8a52',[[x-8,y-206],[x+8,y-206],[x+5,y-236],[x-5,y-236]]);dot(g,'#c8a040',x,y-240,5);poly(g,'#c8a040',[[x-5,y-232],[x-22,y-248],[x-8,y-226]]);poly(g,'#c8a040',[[x+5,y-232],[x+22,y-248],[x+8,y-226]]);
 if(k>.05)glow(g,x,y-120,220,'255,214,150',.16*k)});

/* --- Louvre e Piramide: palazzo a ferro di cavallo con tetti di ardesia, la piramide di vetro, le piramidi piccole, la fila di visitatori --- */
PR.palouvre=PA((g,x,y,t,a,k)=>{const S='#dccfae',S2='#c6b996',SL='#4a5262';
 rect(g,S,x-370,y-196,740,196);rect(g,'rgba(255,255,255,.1)',x-370,y-196,10,196);rect(g,'rgba(0,0,0,.08)',x+354,y-196,16,196);rect(g,S2,x-374,y-202,748,8);rect(g,S2,x-370,y-110,740,5);
 poly(g,SL,[[x-374,y-202],[x-340,y-246],[x+340,y-246],[x+374,y-202]]);for(let q=1;q<9;q++)rect(g,'rgba(0,0,0,.15)',x-374+q*5,y-202-q*5,748-q*10,1);
 /* portico a pilastri e finestre alte, pavilloni con frontone */
 for(let q=0;q<24;q++){const wx=x-362+q*31;ar(g,'#4a4650',wx+2,y-8,22,92);rect(g,S2,wx-3,y-110,6,110);if(q%2==0)ar(g,k>.3?LIT:'#34384a',wx+34,y-120,18,58);else ar(g,k>.3&&hr(q)>.4?LIT:'#34384a',wx+34,y-120,18,58)}
 [-220,0,220].forEach((px,i)=>{const w=i==1?132:96;rect(g,S,x+px-w/2,y-226,w,226);rect(g,S2,x+px-w/2-4,y-232,w+8,8);poly(g,SL,[[x+px-w/2-6,y-232],[x+px,y-290-(i==1?20:0)],[x+px+w/2+6,y-232]]);rect(g,'rgba(0,0,0,.1)',x+px+w/2-12,y-226,12,226);
  poly(g,S2,[[x+px-w/2+10,y-190],[x+px,y-212],[x+px+w/2-10,y-190]]);for(let q=0;q<3;q++)ar(g,k>.3?LIT:'#34384a',x+px-w/2+14+q*((w-40)/2.4),y-150,18,64);dot(g,GOLD,x+px,y-262,5)});
 /* manifesto della Gioconda e la Venere in una nicchia */
 rect(g,'#6a4a2a',x+256,y-198,34,46);rect(g,'#2a2218',x+260,y-194,26,38);dot(g,'#c8a070',x+273,y-176,5.6);poly(g,'#4a3a22',[[x+266,y-170],[x+280,y-170],[x+284,y-156],[x+262,y-156]]);rect(g,'#f4ecd0',x+261,y-152,24,3);
 ar(g,'#2a2830',x+310,y-122,34,66);poly(g,'#f4f0e6',[[x+323,y-168],[x+327,y-168],[x+330,y-146],[x+338,y-124],[x+312,y-124],[x+318,y-146]]);dot(g,'#f4f0e6',x+325,y-172,4);
 /* la piramide di vetro, le tre piccole, la vasca */
 el(g,'#7aa6b0',x,y-8,150,8);for(let q=0;q<8;q++)rect(g,'rgba(255,255,255,.3)',x-130+((q*37+t*7)%260),y-10+(q%3)*3,12,1.2);
 const gl=k>.3?'rgba(255,230,160,.85)':'rgba(176,214,238,.78)';poly(g,'rgba(120,150,176,.5)',[[x+2,y-16],[x+96,y-16],[x+2,y-140]]);poly(g,gl,[[x-96,y-16],[x+2,y-16],[x+2,y-140]]);
 g.save();g.beginPath();g.moveTo(x-96,y-16);g.lineTo(x+96,y-16);g.lineTo(x,y-140);g.closePath();g.clip();for(let q=1;q<9;q++){ln(g,'rgba(240,248,255,.8)',1,[x-96+q*21.4,y-16,x,y-140]);ln(g,'rgba(240,248,255,.8)',1,[x+96-q*21.4,y-16,x,y-140]);ln(g,'rgba(240,248,255,.6)',1,[x-96,y-16-q*14,x+96,y-16-q*14])}g.restore();ln(g,'#e8f0f6',2.4,[x-96,y-16,x,y-140,x+96,y-16,x-96,y-16]);ln(g,'#e8f0f6',2.4,[x,y-16,x,y-140]);
 [-148,148].forEach(px=>{poly(g,gl,[[x+px-30,y-12],[x+px+30,y-12],[x+px,y-48]]);ln(g,'#e8f0f6',1.6,[x+px-30,y-12,x+px,y-48,x+px+30,y-12,x+px-30,y-12])});
 gente(g,x-300,y-4,t,6,.58);if(k>.1)glow(g,x,y-70,120,'255,226,150',.4*k)});

/* --- Pont des Arts: ponte pedonale con assi di legno, parapetto trasparente, panchine; di fronte la cupola dell'Institut --- */
PR.papontdesarts=PA((g,x,y,t,a,k)=>{const w0=x-250;
 /* Institut de France: cupola grigio-verde con lanterna */
 rect(g,'#d9ceb2',x+30,y-150,200,60);rect(g,'rgba(0,0,0,.08)',x+214,y-150,16,60);for(let q=0;q<12;q++)rect(g,'#c6b996',x+38+q*16,y-146,6,52);rect(g,'#c6b996',x+26,y-154,208,6);
 rect(g,'#d9ceb2',x+92,y-176,76,28);g.fillStyle=tn('#7a8a82');g.beginPath();g.ellipse(x+130,y-176,38,46,0,Math.PI,0);g.fill();poly(g,'rgba(0,0,0,.14)',[[x+130,y-222],[x+168,y-176],[x+130,y-176]]);rect(g,'#d9ceb2',x+124,y-236,12,16);poly(g,'#7a8a82',[[x+122,y-236],[x+130,y-248],[x+138,y-236]]);dot(g,GOLD,x+130,y-250,2.2);
 /* il ponte: archi bassi di ferro e il piano di legno */
 acqua(g,w0,y-38,500,38,t,k);if(true)battello(g,w0+420-((t*15)%560),y-10,k,.74);
 for(let q=0;q<5;q++){const bx=w0+20+q*104;g.strokeStyle=tn('#3f4a46');g.lineWidth=6;g.beginPath();g.ellipse(bx+52,y-48,52,24,0,Math.PI,0);g.stroke();g.lineWidth=1.4;for(let r=1;r<8;r++){const an=Math.PI+r*Math.PI/8;ln(g,'#3f4a46',1.4,[bx+52+Math.cos(an)*52,y-48+Math.sin(an)*24,bx+52+Math.cos(an)*52,y-70])}rect(g,'#4a544e',bx-4,y-52,8,50)}
 rect(g,'#4a544e',w0+516-18,y-52,8,50);rect(g,'#9a7a52',w0-4,y-74,512,10);for(let q=0;q<64;q++)rect(g,'rgba(60,40,20,.3)',w0+q*8,y-74,1,10);rect(g,'#3f4a46',w0-4,y-64,512,4);
 /* parapetto con pannelli trasparenti, panchine, lampioni, gente seduta */
 for(let q=0;q<22;q++){rect(g,'#3f4a46',w0+q*23,y-120,3,46);rect(g,'rgba(190,220,236,.3)',w0+q*23+3,y-118,20,40)}rect(g,'#3f4a46',w0,y-122,500,3.4);
 [60,230,390].forEach(bx=>{rect(g,'#7a5a38',w0+bx,y-96,48,4);rect(g,'#7a5a38',w0+bx,y-112,48,3);rect(g,'#3a2a1a',w0+bx+4,y-92,3,18);rect(g,'#3a2a1a',w0+bx+40,y-92,3,18)});
 gente(g,w0+66,y-76,t,2,.5);gente(g,w0+398,y-76,t,2,.5);
 [20,480].forEach(lx=>{rect(g,'#2f3a34',w0+lx-1.6,y-196,3.2,122);dot(g,k>.2?LIT:'#efe6d0',w0+lx,y-200,6);if(k>.05)glow(g,w0+lx,y-200,50,'255,214,120',.55*k)})});

/* =========================== ZONA 4 · Île de la Cité e lungo la Senna =========================== */
/* --- Pont Neuf: arcate semicircolari, parapetto con nicchie, mascheroni sotto il cornicione, Enrico IV a cavallo --- */
PR.papontneuf=PA((g,x,y,t,a,k)=>{const S='#d8cdb2',S2='#b9ad90',w0=x-270;
 rect(g,S,w0,y-82,540,78);rect(g,S2,w0-4,y-90,548,9);rect(g,S2,w0-4,y-62,548,5);
 for(let q=0;q<7;q++){const nx=w0+14+q*76;rect(g,S2,nx,y-114,30,24);ar(g,'#bfb398',nx+4,y-90,22,22)}rect(g,S2,w0-4,y-118,548,5);
 g.save();g.beginPath();for(let i=0;i<5;i++){const ax=w0+16+i*104;g.moveTo(ax,y-4);g.lineTo(ax,y-36);g.arc(ax+42,y-36,42,Math.PI,0);g.lineTo(ax+84,y-4);g.closePath()}g.clip();acqua(g,w0,y-80,540,80,t,k);battello(g,w0+80+((t*13)%520),y-20,k,.7);g.restore();
 for(let i=0;i<5;i++){const ax=w0+16+i*104;g.strokeStyle=tn(S2);g.lineWidth=5;g.beginPath();g.arc(ax+42,y-36,42,Math.PI,0);g.stroke();el(g,'#b4a688',ax+42,y-80,5,5);dot(g,'#8a7c62',ax+41,y-80,1.2);dot(g,'#8a7c62',ax+44,y-80,1.2)}
 /* Enrico IV a cavallo sul piedistallo, al centro */
 rect(g,'#c9bea2',x-30,y-160,60,42);rect(g,S2,x-34,y-164,68,7);rect(g,S2,x-34,y-122,68,5);cav(g,x-4,y-164,.62,'#4c4a34',false);
 if(k>.05)glow(g,x,y-120,260,'255,214,140',.15*k)});

/* --- Square du Vert-Galant: la punta dell'isola, il salice, la scalinata, coppie sull'erba, acqua ai lati --- */
PR.pavertgalant=PA((g,x,y,t,a,k)=>{
 acqua(g,x-280,y-30,560,30,t,k);battello(g,x-260+((t*15)%560),y-6,k,.7);
 poly(g,'#6a9a52',[[x-170,y-30],[x-110,y-52],[x+60,y-62],[x+160,y-44],[x+210,y-30]]);poly(g,'#cdbf9c',[[x-196,y-30],[x-170,y-30],[x-110,y-52],[x-116,y-34]]);poly(g,'#cdbf9c',[[x+160,y-44],[x+210,y-30],[x+230,y-30],[x+180,y-48]]);
 rect(g,'#b9ad90',x-250,y-56,66,26);for(let q=0;q<5;q++)rect(g,'rgba(0,0,0,.14)',x-250,y-56+q*5,66,1.4);
 /* il salice piangente */
 rect(g,'#5a4a36',x-20,y-136,9,84);poly(g,'#5a4a36',[[x-16,y-110],[x-44,y-146],[x-38,y-148],[x-12,y-118]]);el(g,'#5a8a3e',x-16,y-140,70,30);
 for(let q=0;q<26;q++){const sx=x-80+q*6.6,sw=Math.sin(t*.9+q*.7)*2.4;ln(g,q%3?'#6aa04a':'#7ab05a',1.6,[sx,y-138+Math.abs(q-13)*.4,sx+sw,y-96+hr(q)*22+Math.abs(q-13)*-1.2,sx+sw*1.3,y-62+hr(q+2)*10])}
 /* coppie sull'erba, panchine */
 [[70,'#c8402a'],[120,'#2a7ae0']].forEach((c,i)=>{rect(g,c[1],x+c[0],y-56,38,3);el(g,'#e8b890',x+c[0]+8,y-60,5,3.4);el(g,'#d8a078',x+c[0]+22,y-60,5,3.4);el(g,'#3a3a46',x+c[0]+14,y-60,12,3.2)});
 rect(g,'#6a4a2a',x+150,y-70,34,3);rect(g,'#6a4a2a',x+152,y-67,2,10);rect(g,'#6a4a2a',x+180,y-67,2,10)});

/* --- bouquinistes: cassette verdi sul parapetto, libri e stampe, la sedia pieghevole --- */
PR.pabouquinistes=PA((g,x,y,t,a,k)=>{const PV='#b9ad90';
 acqua(g,x-290,y-34,580,34,t,k);battello(g,x+200-((t*14)%620),y-8,k,.64);
 rect(g,'#d6cbb0',x-296,y-70,592,38);rect(g,PV,x-300,y-76,600,7);for(let q=0;q<30;q++)rect(g,'rgba(0,0,0,.1)',x-296+q*20,y-70,1,38);
 for(let b=0;b<5;b++){const bx=x-282+b*116,open=b%2==0;rect(g,'#24402f',bx,y-106,100,30);rect(g,'#335a40',bx,y-106,100,4);rect(g,'rgba(0,0,0,.2)',bx+86,y-106,14,30);
  poly(g,'#1e3828',[[bx-4,y-106],[bx+104,y-106],[bx+98,y-132],[bx+2,y-132]]);rect(g,'#335a40',bx-4,y-108,108,3);
  for(let q=0;q<13;q++){const c=['#a8402a','#e8d8a8','#3a5a8a','#c8a040','#6a3a5a','#f4f0e6','#4a7a5a'][(q+b*3)%7];rect(g,c,bx+5+q*7,y-125+hr(q+b)*3,5,16)}
  if(open){rect(g,'#f0e4c8',bx+8,y-146,36,24);rect(g,'#6a8aa8',bx+12,y-142,28,12);rect(g,'#c8a050',bx+12,y-128,28,3);rect(g,'#f0e4c8',bx+54,y-142,32,22);dot(g,'#c88a6a',bx+70,y-134,5)}else{for(let q=0;q<6;q++)rect(g,['#f0e4c8','#e8c8a8','#a8c4d8'][q%3],bx+10+q*14,y-139,10,13)}}
 /* sedia pieghevole e un cavalletto di cartoline */
 ln(g,'#6a4a2a',2,[x+270,y-30,x+280,y-10]);ln(g,'#6a4a2a',2,[x+292,y-30,x+282,y-10]);rect(g,'#c8402a',x+268,y-34,28,4);
 rect(g,'#6a4a2a',x-300,y-30,3,30);rect(g,'#6a4a2a',x-314,y-34,30,3)});

/* --- Sainte-Chapelle: cappella gotica alta e sottile, vetrate blu rosse e oro, la guglia di legno, la grata dorata --- */
PR.pasainte=PA((g,x,y,t,a,k)=>{const S='#cdc5b2',S2='#b3ab98';
 rect(g,'#bdb5a2',x-150,y-176,300,176);rect(g,'rgba(0,0,0,.08)',x+130,y-176,20,176);rect(g,S2,x-154,y-182,308,8);
 for(let q=0;q<9;q++)ar(g,'#2e2c34',x-126+q*30,y-4,16,40);rect(g,S2,x-150,y-60,300,5);
 /* il piano alto: pilastri, vetrate, contrafforti, timpano e flèche */
 rect(g,S,x-120,y-340,240,160);rect(g,'rgba(255,255,255,.1)',x-120,y-340,8,160);rect(g,'rgba(0,0,0,.1)',x+104,y-340,16,160);
 for(let q=0;q<4;q++){const wx=x-100+q*54,cc=['#2a4aa8','#c8302a','#e8b830','#2a4aa8'];const gg=g.createLinearGradient(wx,0,wx+34,0);
  ar(g,'#a89f8c',wx-3,y-186,40,150);ar(g,k>.25?'#ffd890':'#2a4aa8',wx,y-190,34,142);
  for(let r=0;r<14;r++)for(let c=0;c<3;c++){const v=hr(q*40+r*3+c);rect(g,v>.66?'#c8302a':v>.33?'#e8b830':'#2a5ac8',wx+2+c*10.4,y-186-r*10,9,8.6)}
  for(let r=0;r<15;r++)rect(g,'rgba(20,10,10,.55)',wx,y-188-r*10,34,1);for(let c=1;c<3;c++)rect(g,'rgba(20,10,10,.55)',wx+c*10.8,y-190,1,140);
  rect(g,'rgba(255,255,255,.14)',wx+2,y-186,6,138);if(k>.1)glow(g,wx+17,y-120,60,'255,200,110',.4*k)}
 [x-126,x-72,x-18,x+36,x+90].forEach(px=>{rect(g,S2,px,y-342,8,162);poly(g,S2,[[px-2,y-342],[px+4,y-362],[px+10,y-342]]);dot(g,'#9a927e',px+4,y-364,2)});
 rect(g,S2,x-124,y-346,248,8);poly(g,S,[[x-120,y-346],[x,y-420],[x+120,y-346]]);dot(g,'#b3ab98',x,y-380,15);dot(g,'#2a4aa8',x,y-380,11);for(let q=0;q<6;q++)ln(g,'#e8b830',1.4,[x,y-380,x+Math.cos(q*1.047)*10,y-380+Math.sin(q*1.047)*10]);
 for(let q=0;q<9;q++)dot(g,S2,x-100+q*25,y-352-Math.abs(q-4)*-7,2.4);
 /* guglia di legno e piombo */
 poly(g,'#7a8088',[[x-9,y-400],[x+9,y-400],[x+4,y-470],[x,y-500],[x-4,y-470]]);ln(g,'#5a6068',1.6,[x,y-400,x,y-500]);for(let q=0;q<6;q++)poly(g,'#7a8088',[[x-5-q*.3,y-410-q*14],[x-10,y-408-q*14],[x-4,y-416-q*14]]);
 /* grata dorata e fila di visitatori */
 for(let q=0;q<36;q++){rect(g,GOLD,x-142+q*8,y-52,2,52);poly(g,GOLD,[[x-143+q*8,y-52],[x-141+q*8,y-52],[x-142+q*8,y-58]])}rect(g,GOLD,x-146,y-34,292,2.4);rect(g,'#2a2a2e',x-146,y-52,292,2.4);
 gente(g,x-110,y-4,t,5,.58);if(k>.05)glow(g,x,y-200,260,'255,214,150',.14*k)});

/* --- Notre-Dame: due torri quadrate, tre portali, rosone, galleria dei re, chimere, guglia sottile, il punto zero sul sagrato --- */
PR.panotredame=PA((g,x,y,t,a,k)=>{const S='#d2c8b0',S2='#bcb298',D='rgba(0,0,0,.12)';
 /* contrafforti e guglia dietro */
 rect(g,S2,x-170,y-190,340,100);for(let q=0;q<5;q++){ln(g,S2,5,[x-230+q*14,y-70,x-200+q*14,y-150]);ln(g,S2,5,[x+230-q*14,y-70,x+200-q*14,y-150])}
 poly(g,'#6a7078',[[x-8,y-300],[x+8,y-300],[x+3,y-390],[x,y-420],[x-3,y-390]]);ln(g,'#50565e',1.4,[x,y-300,x,y-420]);for(let q=0;q<5;q++)ln(g,'#50565e',1.2,[x-7,y-308-q*18,x+7,y-308-q*18]);
 /* facciata */
 rect(g,S,x-122,y-310,244,310);rect(g,'rgba(255,255,255,.1)',x-122,y-310,9,310);rect(g,D,x+100,y-310,22,310);
 [-1,1].forEach(s=>{const tx=s<0?x-122:x+60;rect(g,S,tx,y-382,62,100);rect(g,S2,tx-3,y-386,68,8);for(let q=0;q<3;q++){ar(g,'#38343c',tx+8+q*17,y-296,10,60);rect(g,S2,tx+6+q*17,y-296,2,60)}merl(g,S2,tx-3,y-386,68,6,10)});
 rect(g,S2,x-124,y-286,248,7);rect(g,S2,x-124,y-216,248,6);for(let q=0;q<28;q++){ar(g,'#6e6656',x-112+q*8.2,y-222,5,16)}for(let q=0;q<28;q++)rect(g,S2,x-114+q*8.2,y-220,1.4,10);
 /* rosone */
 dot(g,S2,x,y-248,36);dot(g,'#26304a',x,y-248,31);for(let q=0;q<16;q++){const an=q*Math.PI/8;ln(g,['#c8302a','#2a5ac8','#e8b830'][q%3],4,[x+Math.cos(an)*8,y-248+Math.sin(an)*8,x+Math.cos(an)*26,y-248+Math.sin(an)*26]);dot(g,['#2a5ac8','#c8302a','#e8b830'][q%3],x+Math.cos(an+.2)*27,y-248+Math.sin(an+.2)*27,3.4)}dot(g,'#e8b830',x,y-248,7);g.strokeStyle=tn(S2);g.lineWidth=2;g.beginPath();g.arc(x,y-248,19,0,7);g.stroke();if(k>.15)glow(g,x,y-248,60,'255,200,110',.4*k);
 [-86,86].forEach(s=>{ar(g,S2,x+s-9,y-232,26,64);ar(g,k>.25?'#ffd890':'#4a62a0',x+s-6,y-234,20,58)});
 /* i tre portali scolpiti */
 [[-84,46,150],[0,58,172],[84,46,150]].forEach(p=>{const px=x+p[0];poly(g,S2,[[px-p[1]/2-8,y],[px-p[1]/2-8,y-p[2]+34],[px,y-p[2]-16],[px+p[1]/2+8,y-p[2]+34],[px+p[1]/2+8,y]]);poly(g,'#3a3640',[[px-p[1]/2,y],[px-p[1]/2,y-p[2]+34],[px,y-p[2]-4],[px+p[1]/2,y-p[2]+34],[px+p[1]/2,y]]);rect(g,'rgba(255,214,150,'+(.08+.3*k)+')',px-p[1]/2+4,y-60,p[1]-8,60);
  for(let q=0;q<6;q++)dot(g,'#e2d8c0',px+Math.cos(Math.PI+q*Math.PI/5)*(p[1]/2+3),y-p[2]+34+Math.sin(Math.PI+q*Math.PI/5)*(p[1]/2+6),2.6);for(let q=0;q<4;q++)rect(g,'#e2d8c0',px-p[1]/2-6,y-30-q*20,4,10);for(let q=0;q<4;q++)rect(g,'#e2d8c0',px+p[1]/2+2,y-30-q*20,4,10)});
 /* chimere sulla balaustra */
 [-104,-42,40,100].forEach(cx=>{poly(g,'#9a927e',[[x+cx-4,y-284],[x+cx+2,y-298],[x+cx+8,y-290],[x+cx+4,y-284]])});
 /* sagrato: stella di bronzo del punto zero, folla */
 poly(g,GOLD,[[x+34,y+8],[x+39,y+14],[x+47,y+14],[x+41,y+19],[x+43,y+26],[x+34,y+22],[x+25,y+26],[x+27,y+19],[x+21,y+14],[x+29,y+14]]);el(g,'rgba(217,178,74,.4)',x+34,y+18,16,6);
 gente(g,x-110,y-2,t,4,.58);gente(g,x+70,y-2,t,3,.58);if(k>.05)glow(g,x,y-200,280,'255,214,150',.14*k)});

/* =========================== ZONA 5 · Quartiere Latino =========================== */
/* --- Shakespeare and Company: facciata verde scuro con insegna gialla, scaffali sulla strada, panchina --- */
PR.pashakespeare=PA((g,x,y,t,a,k)=>{
 rect(g,'#d9ceb0',x-150,y-250,300,100);rect(g,'rgba(0,0,0,.08)',x+130,y-250,20,100);poly(g,ZN,[[x-156,y-250],[x-120,y-282],[x+120,y-282],[x+156,y-250]]);
 for(let q=0;q<4;q++){fr(g,k,x-120+q*64,y-168,26,56,q+31,'#5a7a62')}
 rect(g,'#2a4a3a',x-150,y-150,300,150);rect(g,'rgba(255,255,255,.07)',x-150,y-150,8,150);rect(g,'#e8c030',x-146,y-148,292,18);txt(g,'SHAKESPEARE AND COMPANY',x,y-135,11,'#2a2a22');
 rect(g,'#1f3a2c',x-150,y-130,300,4);
 [[-132,70],[-4,64],[78,60]].forEach((p,i)=>{rect(g,'#1a1a1c',x+p[0],y-118,p[1],112);rect(g,k>.2?'rgb(255,214,140)':'#3a3026',x+p[0]+3,y-114,p[1]-6,104);rect(g,'#6a4a2a',x+p[0]+3,y-114,p[1]-6,3);for(let r=0;r<4;r++){rect(g,'#6a4a2a',x+p[0]+3,y-90+r*24-24,p[1]-6,2);for(let q=0;q<Math.floor((p[1]-8)/5);q++)rect(g,['#a8402a','#e8d8a8','#3a5a8a','#c8a040','#4a7a5a','#6a3a5a'][(q+r*2+i)%6],x+p[0]+5+q*5,y-110+r*24-(hr(q+r)>.6?2:0)+ (r? 0:0),4,18-(r==0?0:0))}});
 /* banco con libri e panchina */
 rect(g,'#6a4a2a',x-206,y-52,50,4);rect(g,'#6a4a2a',x-202,y-48,3,48);rect(g,'#6a4a2a',x-164,y-48,3,48);for(let q=0;q<7;q++)rect(g,['#a8402a','#e8d8a8','#3a5a8a','#c8a040'][q%4],x-202+q*6,y-70+(q%2)*2,5,18);
 rect(g,'#2f4a3c',x+170,y-34,70,4);rect(g,'#2f4a3c',x+170,y-52,70,3);rect(g,'#2f4a3c',x+176,y-30,3,30);rect(g,'#2f4a3c',x+232,y-30,3,30)});

/* --- La Sorbona: facciata monumentale, cappella con cupola e portico a colonne, studenti sui gradini --- */
PR.pasorbona=PA((g,x,y,t,a,k)=>{const S='#ddd2b6',S2='#c4b898';
 [[-1,x-300],[1,x+110]].forEach((w,j)=>{const x0=w[1];rect(g,S,x0,y-200,190,200);rect(g,'rgba(0,0,0,.08)',x0+174,y-200,16,200);rect(g,S2,x0-4,y-206,198,8);poly(g,ZN,[[x0-4,y-206],[x0+20,y-236],[x0+170,y-236],[x0+194,y-206]]);
  for(let r=0;r<3;r++)for(let q=0;q<5;q++){const L=dl(k,j*30+r*5+q);rect(g,S2,x0+10+q*36-3,y-60-r*58-4,24,50);rect(g,L?LIT:'#2e3a48',x0+10+q*36,y-60-r*58-1,18,44)}rect(g,S2,x0,y-14,190,14)});
 /* cappella: cupola, tamburo, portico di colonne corinzie, frontone */
 rect(g,S,x-110,y-214,220,214);rect(g,S2,x-114,y-220,228,8);for(let q=0;q<6;q++){rect(g,'#eee5cc',x-92+q*36,y-196,16,184);rect(g,'rgba(0,0,0,.12)',x-82+q*36,y-196,6,184);rect(g,S2,x-96+q*36,y-200,24,8);rect(g,S2,x-96+q*36,y-16,24,6)}
 poly(g,S2,[[x-114,y-216],[x,y-262],[x+114,y-216]]);poly(g,S,[[x-98,y-220],[x,y-254],[x+98,y-220]]);dot(g,GOLD,x,y-232,6);
 ar(g,'#3a3640',x-24,y-14,48,120);rect(g,'rgba(255,214,150,'+(.1+.3*k)+')',x-20,y-80,40,66);
 rect(g,S,x-46,y-306,92,56);rect(g,S2,x-50,y-312,100,8);for(let q=0;q<6;q++)rect(g,S2,x-40+q*15,y-300,6,40);
 g.fillStyle=tn('#6a7a88');g.beginPath();g.ellipse(x,y-312,48,52,0,Math.PI,0);g.fill();poly(g,'rgba(0,0,0,.14)',[[x,y-364],[x+48,y-312],[x,y-312]]);for(let q=-3;q<=3;q++)ln(g,'rgba(255,255,255,.28)',1.4,[x+q*7,y-312,x+q*3,y-362]);rect(g,S,x-6,y-380,12,20);poly(g,'#6a7a88',[[x-7,y-380],[x,y-394],[x+7,y-380]]);
 /* gradini e studenti */
 for(let q=0;q<5;q++)rect(g,'#cfc5a8',x-130+q*0,y-q*3,260,3);gente(g,x-100,y-18,t,4,.56);gente(g,x+40,y-18,t,3,.56);if(k>.05)glow(g,x,y-200,260,'255,214,150',.12*k)});

/* --- Panthéon: portico corinzio, frontone, alta cupola con tamburo e lanterna, scalinata --- */
PR.papantheon=PA((g,x,y,t,a,k)=>{const S='#d9cfb4',S2='#c2b796';
 rect(g,S,x-170,y-150,340,150);rect(g,'rgba(0,0,0,.08)',x+150,y-150,20,150);rect(g,S2,x-174,y-156,348,8);for(let q=0;q<7;q++)ar(g,k>.3?LIT:'#2e3440',x-150+q*45,y-34,18,62);
 /* tamburo e cupola */
 rect(g,S,x-60,y-320,120,170);for(let q=0;q<9;q++){rect(g,'#eee5cc',x-54+q*13,y-304,6,50);rect(g,S2,x-56+q*13,y-310,10,6)}rect(g,S2,x-64,y-326,128,8);
 g.fillStyle=tn('#7e8b96');g.beginPath();g.ellipse(x,y-326,54,66,0,Math.PI,0);g.fill();poly(g,'rgba(0,0,0,.14)',[[x,y-392],[x+54,y-326],[x,y-326]]);for(let q=-3;q<=3;q++)ln(g,'rgba(255,255,255,.26)',1.4,[x+q*8,y-326,x+q*3,y-390]);rect(g,S,x-10,y-418,20,26);rect(g,S2,x-13,y-421,26,5);poly(g,'#7e8b96',[[x-9,y-421],[x,y-436],[x+9,y-421]]);ln(g,'#7e8b96',1.6,[x,y-436,x,y-448]);
 /* portico con frontone */
 rect(g,S,x-104,y-190,208,40);rect(g,S2,x-108,y-196,216,8);poly(g,S,[[x-108,y-196],[x,y-248],[x+108,y-196]]);poly(g,'#cbc0a2',[[x-90,y-202],[x,y-240],[x+90,y-202]]);
 for(let q=0;q<7;q++){const fx=x-70+q*8*(q<3?1:1);}
 for(let q=0;q<11;q++){const fx=x-78+q*15.6;el(g,hr(q)>.5?'#e6dcc2':'#c6bb9c',fx,y-214+Math.abs(q-5)*-0-5,5,7)}
 rect(g,'#bfb494',x-92,y-168,184,12);txt(g,'AUX GRANDS HOMMES LA PATRIE RECONNAISSANTE',x,y-159,5.4,'#4a4030');
 for(let q=0;q<6;q++){rect(g,'#eee5cc',x-92+q*35,y-160,15,160);rect(g,'rgba(0,0,0,.13)',x-82+q*35,y-160,6,160);rect(g,S2,x-96+q*35,y-164,23,8);rect(g,S2,x-96+q*35,y-6,23,6)}
 rect(g,'rgba(40,30,30,.5)',x-76,y-150,150,150);for(let q=0;q<5;q++)rect(g,'#cfc5a8',x-114,y-q*4,228,4);
 if(k>.05)glow(g,x,y-220,270,'255,214,150',.14*k)});

/* --- Jardin du Luxembourg: bacino ottagonale con barchette, sedie verdi, statue, scacchisti, il palazzo sullo sfondo --- */
PR.paluxembourg=PA((g,x,y,t,a,k)=>{const S='#ddd2b6';
 rect(g,S,x-250,y-170,500,110);rect(g,'rgba(0,0,0,.08)',x+234,y-170,16,110);rect(g,'#c4b898',x-254,y-176,508,8);poly(g,ZN,[[x-254,y-176],[x-220,y-204],[x+220,y-204],[x+254,y-176]]);
 rect(g,S,x-52,y-216,104,56);poly(g,ZN,[[x-60,y-216],[x-30,y-246],[x+30,y-246],[x+60,y-216]]);g.fillStyle=tn('#8a98a4');g.beginPath();g.ellipse(x,y-246,26,32,0,Math.PI,0);g.fill();dot(g,GOLD,x,y-280,2.6);
 for(let q=0;q<14;q++)ar(g,dl(k,q+60)?LIT:'#2e3a48',x-236+q*34,y-72,14,44);rect(g,'#9aa890',x-260,y-70,520,14);for(let q=0;q<48;q++)rect(g,'#ddd2b6',x-256+q*10.8,y-68,3,10);
 /* alberi e aiuole */
 [-290,-190,200,300].forEach(tx=>{rect(g,'#5a4430',tx+x-3,y-110,6,50);el(g,'#4a8a3e',tx+x,y-136,28,26);el(g,'#5a9a4a',tx+x-8,y-146,18,14)});
 for(let q=0;q<16;q++)dot(g,['#e8505a','#f2c82a','#ff7ab0','#f4f0e6'][q%4],x-140+q*18,y-58+(q%3),3.2);
 /* bacino ottagonale con le barchette */
 poly(g,'#b9ad90',[[x-150,y-14],[x-110,y-36],[x+110,y-36],[x+150,y-14],[x+110,y+6],[x-110,y+6]]);poly(g,'#7aa6b0',[[x-142,y-14],[x-104,y-32],[x+104,y-32],[x+142,y-14],[x+104,y+2],[x-104,y+2]]);
 for(let q=0;q<7;q++)rect(g,'rgba(255,255,255,.3)',x-120+((q*41+t*8)%240),y-20+(q%3)*5,10,1.2);
 [[-70,'#c8402a'],[10,'#2a7ae0'],[80,'#f2c82a']].forEach((b,i)=>{const bx=x+b[0]+Math.sin(t*.6+i*2)*10,by=y-14+(i%2)*3;poly(g,'#6a4a2a',[[bx-8,by],[bx+8,by],[bx+5,by+4],[bx-5,by+4]]);rect(g,'#6a4a2a',bx,by-20,1.4,20);poly(g,b[1],[[bx+1.4,by-20],[bx+9,by-3],[bx+1.4,by-3]])});
 PR.pasedie(g,x-220,y,t,3);PR.pasedie(g,x+190,y,t,3);
 /* statua e tavolo da scacchi */
 sta(g,x+250,y-8,86,'#f0ece0','#d6cdb4');rect(g,'#6a4a2a',x-300,y-34,28,4);rect(g,'#6a4a2a',x-296,y-30,3,30);rect(g,'#6a4a2a',x-278,y-30,3,30);for(let q=0;q<4;q++)rect(g,q%2?'#f4f0e6':'#2a2a2e',x-298+q*6,y-38,6,4)});

/* =========================== ZONA 6 · Il Marais =========================== */
/* --- Place des Vosges: padiglioni di mattoni rossi e pietra bianca, portici, tetti d'ardesia con abbaini, tigli e Luigi XIII a cavallo --- */
PR.pavosges=PA((g,x,y,t,a,k)=>{const B='#b2553a',ST='#eadfc6',SL='#4a5262';
 [[-300,120],[-176,120],[-52,128],[80,120],[204,120]].forEach((p,i)=>{const px=x+p[0],pw=p[1],hh=i==2?236:206;
  bk(g,B,px,y-hh,pw,hh-70,i+5);rect(g,'rgba(255,255,255,.08)',px,y-hh,6,hh-70);rect(g,'rgba(0,0,0,.14)',px+pw-12,y-hh,12,hh-70);
  rect(g,ST,px-2,y-hh,6,hh-70);rect(g,ST,px+pw-4,y-hh,6,hh-70);for(let q=0;q<5;q++){rect(g,ST,px-2,y-hh+10+q*30,8,4)}
  poly(g,SL,[[px-4,y-hh],[px+pw*.16,y-hh-52],[px+pw*.84,y-hh-52],[px+pw+4,y-hh]]);for(let q=1;q<9;q++)rect(g,'rgba(0,0,0,.16)',px+pw*.16*(q/9)-4*(1-q/9),y-hh-q*5.8,pw-pw*.32*(q/9)+8*(1-q/9),1);
  [.28,.72].forEach((u,j)=>{const dx=px+pw*u-9;rect(g,ST,dx-2,y-hh-36,22,26);rect(g,dl(k,i*3+j+70)?LIT:'#2e3a48',dx+2,y-hh-32,14,20);poly(g,SL,[[dx-4,y-hh-36],[dx+9,y-hh-46],[dx+22,y-hh-36]])});
  rect(g,'#8a4a30',px+pw*.5-4,y-hh-70,9,22);
  for(let r=0;r<2;r++)for(let q=0;q<3;q++)fr(g,k,px+14+q*34,y-hh+70+r*58-(r?-0:0)+ (hh-206)*0 ,18,40,i*11+r*4+q,'#5a7a62');
  /* il portico al piano terra */
  por(g,k>.25?1:0,px,y,pw,3,70,ST,'#3a2a22')});
 /* giardino centrale: tigli, aiuole, fontana, Luigi XIII a cavallo */
 for(let q=0;q<6;q++){const tx=x-250+q*100;rect(g,'#5a4430',tx-3,y-80,6,70);el(g,'#4f8a46',tx,y-96,34,26);el(g,'#63a057',tx-8,y-106,22,14)}
 rect(g,'#cdbf9c',x-30,y-34,60,34);rect(g,'#b9ad90',x-34,y-38,68,6);cav(g,x-4,y-38,.5,'#4c4a34',false);
 for(let q=0;q<14;q++)dot(g,['#e8505a','#f2c82a','#ff7ab0','#f4f0e6'][q%4],x-210+q*30,y-4,3);
 /* targa della Maison de Victor Hugo, al secondo angolo */
 rect(g,'#3a3a40',x+300,y-78,70,22);rect(g,'#e8d8a8',x+303,y-75,64,16);txt(g,'MAISON DE VICTOR HUGO',x+335,y-64,5,'#3a2a1a');
 if(k>.05)glow(g,x,y-150,280,'255,200,120',.2*k)});

/* --- Rue des Rosiers: stradina del vecchio quartiere ebraico, panetterie, il chiosco del falafel con la fila --- */
PR.parosiers=PA((g,x,y,t,a,k)=>{
 [[-230,'#5a5046',200],[0,'#6a5e50',210],[210,'#54483e',200]].forEach((b,i)=>{const bx=x+b[0]-b[2]/2;rect(g,b[1],bx,y-250+i*12,b[2],250-i*12);rect(g,'rgba(255,255,255,.06)',bx,y-250+i*12,6,250);for(let q=0;q<10;q++)rect(g,'rgba(0,0,0,.2)',bx+hr(q*3+i)*(b[2]-30),y-240+hr(q*5+i)*160+i*12,20+hr(q)*20,8);
  for(let q=0;q<3;q++)fr(g,k,bx+22+q*60,y-130-q%2*0,24,44,i*7+q+20,'#6a8a72');for(let q=0;q<3;q++)fr(g,k,bx+22+q*60,y-196,24,44,i*7+q+50,'#6a8a72')});
 /* panetteria: vetrina con pani e dolci, tenda a righe */
 rect(g,'#2a2a2e',x-310,y-110,160,110);rect(g,k>.2?'rgb(255,214,140)':'#d8c8a8',x-304,y-104,148,80);for(let q=0;q<9;q++){el(g,['#c8903a','#b8782a','#d8a850'][q%3],x-296+q*16,y-60-(q%2)*18,7,4)}rect(g,'#7a5a38',x-304,y-44,148,4);rect(g,'#7a5a38',x-304,y-66,148,3);
 for(let q=0;q<8;q++)poly(g,q%2?'#f4efe0':'#2a4aa8',[[x-312+q*20,y-114],[x-292+q*20,y-114],[x-294+q*20,y-96],[x-310+q*20,y-96]]);
 txt(g,'BOULANGERIE',x-230,y-120,9,'#f0e4c0');
 /* chiosco del falafel con la fila e insegne in altri alfabeti (segni stilizzati) */
 rect(g,'#c8402a',x-100,y-120,110,120);rect(g,'rgba(255,255,255,.08)',x-100,y-120,6,120);rect(g,'#2a2a2e',x-90,y-84,90,50);rect(g,k>.2?'rgb(255,214,140)':'#e8dcc0',x-86,y-80,82,42);rect(g,'#8a8a92',x-86,y-38,82,4);
 for(let q=0;q<6;q++)dot(g,['#4aa86a','#e8c030','#e8505a','#f4f0e6'][q%4],x-78+q*13,y-46,3.4);txt(g,'FALAFEL',x-45,y-100,13,'#f4f0e0');
 for(let q=0;q<7;q++){const gx=x-90+q*12;ln(g,'#f4f0e0',2,[gx,y-112,gx+5,y-112,gx+5,y-106,gx+9,y-106])}
 gente(g,x+20,y-2,t,5,.62);
 [[100,0],[150,1]].forEach((s,i)=>{rect(g,'#2a2a2e',x+s[0]+30,y-130,50,32);rect(g,['#e8c030','#4aa86a'][i],x+s[0]+33,y-127,44,26);for(let q=0;q<5;q++){ln(g,'#2a2a2e',1.6,[x+s[0]+38+q*8,y-120,x+s[0]+42+q*8,y-120,x+s[0]+42+q*8,y-112])}})});

/* =========================== ZONA 7 · Montmartre e Sacré-Cœur =========================== */
/* --- Abbesses e Muro dei "Ti amo": ingresso liberty di Guimard in vetro e ferro, il muro di piastrelle blu con scritte --- */
PR.paabbesses=PA((g,x,y,t,a,k)=>{
 /* il muro dei Ti amo */
 rect(g,'#1a2a5a',x-260,y-150,230,130);rect(g,'#2a3c7a',x-260,y-150,230,6);rect(g,'#3a3a40',x-264,y-156,238,7);for(let q=0;q<10;q++)rect(g,'rgba(255,255,255,.05)',x-260+q*23,y-150,1,130);for(let q=0;q<8;q++)rect(g,'rgba(255,255,255,.05)',x-260,y-140+q*16,230,1);
 for(let r=0;r<10;r++)for(let q=0;q<22;q++){const v=hr(r*31+q);if(v>.22){const gx=x-254+q*10.3,gy=y-142+r*12.4;ln(g,'rgba(244,244,238,.85)',1.1,[gx,gy,gx+3+v*3,gy-(v>.6?3:0),gx+7,gy+(v>.5?2:0)])}if(v>.9)dot(g,'#d8302a',x-254+q*10.3+3,y-142+r*12.4,2)}
 rect(g,'#6a6e76',x-270,y-20,250,5);gente(g,x-220,y-4,t,3,.58);
 /* ingresso Art Nouveau di Guimard: tettoia di vetro a ala di libellula, sostegni di ferro verde, lampioni arancio */
 const G='#2f6a4a';[x+60,x+170].forEach(px=>{ln(g,G,5,[px,y,px+2,y-60,px-4,y-100,px-2,y-130]);ln(g,'#3f8a62',1.4,[px-1,y,px+1,y-60,px-5,y-100])});
 poly(g,'rgba(150,200,170,.5)',[[x+30,y-140],[x+60,y-168],[x+170,y-168],[x+210,y-140],[x+170,y-124],[x+60,y-124]]);ln(g,G,3,[x+30,y-140,x+60,y-168,x+170,y-168,x+210,y-140]);for(let q=0;q<6;q++)ln(g,G,1.4,[x+60+q*22,y-168,x+44+q*28,y-136]);
 rect(g,G,x+56,y-128,120,5);rect(g,'#e8d8a8',x+72,y-120,88,16);txt(g,'MÉTROPOLITAIN',x+116,y-108,8,'#2f6a4a');
 [x+36,x+200].forEach(lx=>{ln(g,G,3,[lx,y,lx,y-110]);dot(g,k>.15?'rgb(255,170,70)':'#e0a050',lx,y-118,8);if(k>.05)glow(g,lx,y-118,60,'255,160,60',.6*k)});
 ln(g,G,3,[x+60,y,x+40,y-36,x+60,y-60]);ln(g,G,3,[x+170,y,x+190,y-36,x+170,y-60])});

/* --- Place du Tertre: cavalletti con quadri, pittori, tavolini con ombrelloni rossi, l'insegna "La Mère Catherine" --- */
PR.patertre=PA((g,x,y,t,a,k)=>{
 PR.paplatano(g,x-250,y,t,.92);PR.paplatano(g,x+250,y,t,1);
 /* cavalletti con tele */
 [[-180,'#6a8aa8','#e8b890'],[-110,'#d8a050','#6a4a3a'],[-40,'#4a7a5a','#e8d8a8'],[50,'#a8402a','#6a8aa8']].forEach((e,i)=>{const ex=x+e[0];ln(g,'#6a4a2a',2.4,[ex-16,y,ex-4,y-86]);ln(g,'#6a4a2a',2.4,[ex+16,y,ex+4,y-86]);ln(g,'#6a4a2a',2.4,[ex,y,ex,y-60]);rect(g,'#f0e8d4',ex-20,y-110,40,48);rect(g,e[1],ex-17,y-107,34,28);rect(g,e[2],ex-17,y-80,34,15);dot(g,'#e8d088',ex+8,y-96,4)});
 /* pittore al lavoro con la tavolozza (due figure) */
 gente(g,x-150,y-4,t,2,.9);
 /* tavolini con ombrelloni rossi */
 [120,200].forEach((tx,i)=>{rect(g,'#4a3a2a',x+tx-1.5,y-70,3,70);poly(g,'#c8302a',[[x+tx-44,y-70],[x+tx,y-98],[x+tx+44,y-70]]);for(let q=0;q<4;q++)poly(g,'#f4efe0',[[x+tx-44+q*22,y-70],[x+tx-33+q*22,y-70],[x+tx,y-98]]);el(g,'#4a4a50',x+tx,y-32,16,3);rect(g,'#2a2a2e',x+tx-1,y-32,2,32);rect(g,'#2a2a2e',x+tx-24,y-18,3,18);rect(g,'#2a2a2e',x+tx+22,y-18,3,18)});
 /* insegna in ferro battuto "La Mère Catherine" */
 ln(g,'#2a2a2e',2.6,[x+290,y,x+290,y-170,x+250,y-170]);rect(g,'#2a2a2e',x+206,y-182,76,24);rect(g,'#e8d8a8',x+209,y-179,70,18);txt(g,'LA MÈRE CATHERINE',x+244,y-167,6.6,'#7a2a1a');
 [x-300,x+10].forEach(lx=>{ln(g,'#2a2a2e',3,[lx,y,lx,y-130]);poly(g,'#2a2a2e',[[lx-8,y-136],[lx+8,y-136],[lx+5,y-150],[lx-5,y-150]]);rect(g,k>.15?LIT:'#efe6d0',lx-6,y-134,12,12);if(k>.05)glow(g,lx,y-130,56,'255,200,110',.6*k)});
 if(true)glow(g,x,y-100,260,'255,150,70',.14)});

/* --- Sacré-Cœur: basilica bianca, grande cupola e cupole a bulbo, campanile, portico a tre arcate, scalinate e giardino --- */
PR.pasacrecoeur=PA((g,x,y,t,a,k)=>{const S='#efe9dc',S2='#d6cfbd',D='rgba(70,60,70,.16)';
 /* il campanile dietro a destra */
 rect(g,S,x+150,y-290,44,200);rect(g,D,x+180,y-290,14,200);for(let q=0;q<3;q++)ar(g,'#8a8498',x+160+q*10,y-190-q*0,7,34);rect(g,S2,x+146,y-296,52,8);poly(g,S,[[x+150,y-296],[x+172,y-340],[x+194,y-296]]);
 /* le tre cupole e il tamburo */
 rect(g,S,x-62,y-330,124,130);for(let q=0;q<8;q++)ar(g,'#8a8498',x-52+q*13.4,y-244,7,32);rect(g,S2,x-66,y-336,132,8);
 const cup=(cx,cy,rx,ry)=>{g.fillStyle=tn(S);g.beginPath();g.moveTo(cx-rx,cy);g.quadraticCurveTo(cx-rx*1.05,cy-ry*.7,cx,cy-ry);g.quadraticCurveTo(cx+rx*1.05,cy-ry*.7,cx+rx,cy);g.closePath();g.fill();g.fillStyle=D;g.beginPath();g.moveTo(cx,cy-ry);g.quadraticCurveTo(cx+rx*1.05,cy-ry*.7,cx+rx,cy);g.lineTo(cx,cy);g.closePath();g.fill();for(let q=-2;q<=2;q++)ln(g,'rgba(120,110,130,.35)',1.2,[cx+q*rx/3,cy,cx+q*rx/9,cy-ry*.92]);rect(g,S2,cx-4,cy-ry-12,8,14);dot(g,S,cx,cy-ry-14,3.6)};
 cup(x,y-336,60,96);cup(x-100,y-212,36,58);cup(x+100,y-212,36,58);
 /* il corpo della facciata con il portico a tre arcate */
 rect(g,S,x-150,y-200,300,200);rect(g,'rgba(255,255,255,.2)',x-150,y-200,8,200);rect(g,D,x+128,y-200,22,200);rect(g,S2,x-154,y-206,308,8);rect(g,S2,x-154,y-100,308,6);
 [-70,0,70].forEach((ax,i)=>{const w=i==1?64:54;ar(g,S2,x+ax-w/2-5,y,w+10,i==1?122:108);ar(g,'#4a4658',x+ax-w/2,y,w,i==1?116:102);rect(g,'rgba(255,214,150,'+(.08+.3*k)+')',x+ax-w/2+4,y-60,w-8,60)});
 for(let q=0;q<9;q++)ar(g,'#8a8498',x-134+q*31,y-150,12,40);
 /* statue equestri nelle nicchie, mosaico dorato */
 [-98,98].forEach(sx=>{ar(g,'#a8a2b2',x+sx-12,y-100,24,50);cav(g,x+sx,y-104,.3,'#c8c0a8',false)});
 ar(g,GOLD,x-22,y-110,44,50);poly(g,'#c8402a',[[x-8,y-80],[x+8,y-80],[x+10,y-60],[x-10,y-60]]);dot(g,'#f0d8b0',x,y-92,5);
 /* scalinate larghe e ringhiere */
 for(let q=0;q<7;q++)rect(g,q%2?'#cfc7b4':'#e0d8c6',x-190+q*0,y-q*0+q*2,380,2);for(let q=0;q<5;q++)rect(g,'#2a2a2e',x-186+q*92,y-30,3,30);rect(g,'#2a2a2e',x-186,y-30,372,2.4);
 /* l'ultimo sole arancio sulla pietra */
 glow(g,x,y-250,300,'255,150,70',.2+.12*k)});

/* --- Lapin Agile: casetta rosa con persiane verdi, insegna del coniglio nella pentola, muro e vigna --- */
PR.palapin=PA((g,x,y,t,a,k)=>{
 rect(g,'#8a8478',x-290,y-52,150,52);for(let q=0;q<8;q++)rect(g,'rgba(0,0,0,.16)',x-290+q*19,y-52,1.4,52);rect(g,'#9a9488',x-294,y-58,158,7);
 for(let q=0;q<30;q++){dot(g,['#4a7a40','#3a6a3a','#5a8a46'][q%3],x-286+hr(q)*140,y-62-hr(q+3)*32,7+hr(q)*4)}for(let q=0;q<8;q++)dot(g,'#5a2a6a',x-270+q*18,y-70-(q%3)*8,2.6);
 /* la casetta */
 rect(g,'#e0a8a0',x-120,y-130,230,130);rect(g,'rgba(255,255,255,.12)',x-120,y-130,8,130);rect(g,'rgba(0,0,0,.1)',x+90,y-130,20,130);poly(g,'#a8553a',[[x-130,y-130],[x-80,y-172],[x+70,y-172],[x+120,y-130]]);for(let q=0;q<12;q++)rect(g,'rgba(60,20,10,.2)',x-80+q*12,y-172,1,42);
 rect(g,'#8a4a30',x+40,y-190,12,24);rect(g,'#6a3a28',x+38,y-192,16,4);
 [[-96,48],[-22,48],[56,40]].forEach((w,i)=>{rect(g,'#f4ecd8',x+w[0]-3,y-96,w[1]+6,52);rect(g,dl(k,i+80)||k>.4?LIT:'#2e3a48',x+w[0],y-93,w[1],46);rect(g,'#3f7a4a',x+w[0]-14,y-96,12,52);rect(g,'#3f7a4a',x+w[0]+w[1]+2,y-96,12,52);for(let q=0;q<6;q++){rect(g,'rgba(0,0,0,.18)',x+w[0]-14,y-92+q*8,12,1);rect(g,'rgba(0,0,0,.18)',x+w[0]+w[1]+2,y-92+q*8,12,1)}if(dl(k,i+80)||k>.4)glow(g,x+w[0]+w[1]/2,y-70,40,'255,214,120',.3)});
 rect(g,'#6a3a28',x-30,y-46,34,46);rect(g,'#3f7a4a',x-30,y-46,34,4);dot(g,GOLD,x-6,y-22,2);rect(g,'#7a7a82',x-136,y-4,246,4);
 /* insegna: un coniglio che salta fuori da una pentola */
 ln(g,'#2a2a2e',2.4,[x+150,y,x+150,y-150,x+112,y-150]);rect(g,'#f0e6c8',x+110,y-174,52,40);rect(g,'#3a3a40',x+108,y-176,56,3);const hp=Math.sin(t*3)*2;
 poly(g,'#3a3a40',[[x+120,y-148],[x+154,y-148],[x+150,y-136],[x+124,y-136]]);el(g,'#f4f0e8',x+137,y-156+hp,9,8);poly(g,'#f4f0e8',[[x+131,y-162+hp],[x+129,y-176+hp],[x+135,y-163+hp]]);poly(g,'#f4f0e8',[[x+138,y-163+hp],[x+142,y-177+hp],[x+144,y-162+hp]]);dot(g,'#c8402a',x+139,y-157+hp,1.2);
 ln(g,'#2a2a2e',3,[x-160,y,x-160,y-128]);poly(g,'#2a2a2e',[[x-168,y-134],[x-152,y-134],[x-155,y-148],[x-165,y-148]]);rect(g,k>.15?LIT:'#efe6d0',x-166,y-132,12,12);if(k>.05)glow(g,x-160,y-128,56,'255,200,110',.6*k)});

/* =========================== ZONA 8 · Pigalle e Moulin Rouge =========================== */
/* --- Moulin Rouge: edificio basso con il grande mulino rosso, pale di luci, scritta gialla, folla davanti --- */
PR.pamoulinrouge=PA((g,x,y,t,a,k)=>{const R='#b8202a',bl=.7+.3*Math.sin(t*5);
 rect(g,'#3a2a30',x-190,y-110,380,110);rect(g,R,x-180,y-124,360,24);rect(g,'rgba(255,255,255,.1)',x-190,y-110,8,110);
 for(let q=0;q<26;q++)dot(g,'rgba(255,230,140,'+(.5+.5*Math.sin(t*7+q*1.3))+')',x-176+q*14,y-112,2.6);
 for(let q=0;q<9;q++){ar(g,dl(1,q)?LIT:'#2a1a22',x-168+q*38,y-6,22,66);rect(g,'rgba(255,60,80,'+(.1+.3*k)+')',x-168+q*38,y-66,22,60)}
 /* il mulino rosso con le pale che girano */
 rect(g,R,x-52,y-290,104,170);poly(g,R,[[x-62,y-290],[x,y-326],[x+62,y-290]]);rect(g,'rgba(0,0,0,.18)',x+26,y-290,26,170);for(let q=0;q<8;q++)rect(g,'rgba(60,0,10,.3)',x-52,y-280+q*20,104,1.4);
 rect(g,'#2a1a22',x-14,y-250,28,40);rect(g,k>.2?LIT:'#3a2a30',x-11,y-247,22,34);
 const cx=x,cy=y-262,rot=t*.9;[0,1,2,3].forEach(q=>{const an=rot+q*Math.PI/2,ex=cx+Math.cos(an)*92,ey=cy+Math.sin(an)*92;ln(g,'#e8d8c0',5,[cx,cy,ex,ey]);ln(g,'#a8202a',2,[cx,cy,ex,ey]);for(let r=1;r<=6;r++){const u=r/6,px=cx+Math.cos(an)*92*u,py=cy+Math.sin(an)*92*u;dot(g,'rgba(255,230,140,'+(.5+.5*Math.sin(t*8+r+q))*Math.min(1,.4+k)+')',px,py,2.2)}});dot(g,'#f4e8d0',cx,cy,7);
 /* scritta al neon */
 g.save();g.font='italic bold 34px Georgia,serif';g.textAlign='center';g.fillStyle=tn('#ffd21e');g.shadowColor='rgba(255,200,40,.9)';g.shadowBlur=14*Math.min(1,k*1.5+.2);g.fillText('Moulin Rouge',x,y-134);g.shadowBlur=0;g.restore();
 glow(g,x,y-200,260,'255,40,60',.18+.35*k*bl);gente(g,x-170,y-2,t,5,.62);gente(g,x+60,y-2,t,5,.62)});

/* --- Place Pigalle: fontana circolare, neon rossi e rosa, insegne di cabaret, il metrò, la colonna dei manifesti --- */
PR.papigalle=PA((g,x,y,t,a,k)=>{const nb=Math.min(1,k*1.4+.15);
 [[-250,'CABARET','#ff3a6a'],[-60,'BAR','#ff7a3a'],[150,'CHAT NOIR','#ff3a6a']].forEach((s,i)=>{rect(g,'#2a2230',x+s[0]-70,y-190+i*8,140,190-i*8);rect(g,'rgba(255,255,255,.05)',x+s[0]-70,y-190+i*8,6,190-i*8);rect(g,'#3a2a38',x+s[0]-64,y-176+i*8,128,40);
  g.save();g.font='bold 20px Georgia,serif';g.textAlign='center';g.fillStyle='rgba(255,255,255,'+(.6+.4*nb)+')';g.shadowColor=s[2];g.shadowBlur=16*nb;g.fillText(s[1],x+s[0],y-149+i*8);g.shadowBlur=0;g.restore();
  for(let q=0;q<3;q++)fr(g,k,x+s[0]-44+q*34,y-86,20,36,i*5+q+90,'#6a2a3a');tendina(g,['#a8202a','#2a2a3e','#a8202a'][i],x+s[0]-64,y-124+i*8,128,14);glow(g,x+s[0],y-150+i*8,90,s[2].slice(1).match(/../g).map(h=>parseInt(h,16)).join(','),.35*nb)});
 /* fontana circolare */
 el(g,'#8a8a92',x,y-8,74,10);el(g,'#4a6a80',x,y-9,66,7);rect(g,'#9a9aa2',x-5,y-52,10,44);el(g,'#9a9aa2',x,y-52,20,4);for(let q=-2;q<=2;q++)jet(g,x+q*6-3,y-54,26-Math.abs(q)*5,6,t,q);if(k>.1)glow(g,x,y-30,90,'255,90,120',.3*nb);
 /* colonna Morris dei manifesti */
 PR.pamorris(g,x+250,y,t);gente(g,x-110,y-2,t,3,.64);gente(g,x+80,y-2,t,3,.64)});
PR.pamorris=PA((g,x,y,t,a,k)=>{rect(g,'#2f4a3c',x-22,y-6,44,6);rect(g,'#e8d8b8',x-19,y-120,38,114);const cc=['#c8302a','#2a5ac8','#e8b830','#f4f0e6','#4aa86a'];for(let q=0;q<9;q++)rect(g,cc[q%5],x-19+(q%3)*12,y-116+Math.floor(q/3)*36,12+(q%2)*2,34);rect(g,'rgba(0,0,0,.2)',x+8,y-120,11,114);rect(g,'#2f4a3c',x-22,y-126,44,8);poly(g,'#2f4a3c',[[x-20,y-126],[x,y-142],[x+20,y-126]]);dot(g,'#2f4a3c',x,y-144,3)});

/* --- Rue des Martyrs: strada in salita con botteghe, banchi di frutta e verdura, pasticcerie, tavolini --- */
PR.pamartyrs=PA((g,x,y,t,a,k)=>{
 [[-230,'#c8402a','#e8d8c0',160],[-60,'#2a7a4a','#d8c8a0',170],[120,'#e8a020','#d0c0a8',170]].forEach((s,i)=>{const bx=x+s[0]-s[3]/2;rect(g,s[2],bx,y-220,s[3],220);rect(g,'rgba(0,0,0,.08)',bx+s[3]-14,y-220,14,220);poly(g,ZN,[[bx-4,y-220],[bx+16,y-250],[bx+s[3]-16,y-250],[bx+s[3]+4,y-220]]);
  for(let q=0;q<3;q++)fr(g,k,bx+18+q*48,y-150,22,40,i*9+q+110,'#5a7a62');
  rect(g,'#2a2a2e',bx+6,y-104,s[3]-12,100);rect(g,k>.2?'rgb(255,214,140)':'#e8dcc0',bx+10,y-98,s[3]-20,64);
  for(let q=0;q<Math.floor(s[3]/10);q++)poly(g,q%2?'#f4efe0':s[1],[[bx+q*10,y-112],[bx+q*10+10,y-112],[bx+q*10+11,y-98],[bx+q*10+1,y-98]]);
  /* banco di frutta e verdura fuori dalla porta */
  rect(g,'#7a5a38',bx+10,y-26,s[3]-20,24);for(let q=0;q<Math.floor((s[3]-20)/12);q++){const c=['#e8802a','#d8302a','#4aa86a','#e8c030','#7a3a6a'][(q+i)%5];dot(g,c,bx+16+q*12,y-30-(q%2)*2,5.4);dot(g,c,bx+16+q*12,y-24,5)}
  for(let q=0;q<5;q++)el(g,['#d8a050','#c8903a','#e8c070'][q%3],bx+22+q*22,y-62,8,4)});
 gente(g,x-150,y-2,t,3,.6);gente(g,x+40,y-2,t,2,.6)});

/* =========================== ZONA 9 · Gare du Nord =========================== */
/* --- Gare du Nord: lunga facciata di pietra grigia con grandi arcate, statue delle città sul cornicione, taxi in fila --- */
PR.pagare=PA((g,x,y,t,a,k)=>{const S='#c4bfb2',S2='#a8a396';
 rect(g,S,x-330,y-190,660,190);rect(g,'rgba(255,255,255,.1)',x-330,y-190,10,190);rect(g,'rgba(0,0,0,.1)',x+310,y-190,20,190);rect(g,S2,x-336,y-198,672,10);rect(g,S2,x-330,y-92,660,6);
 for(let q=0;q<7;q++)rect(g,'rgba(0,0,0,.1)',x-330,y-14-q*26,660,1.4);
 /* grande arcata centrale a vetri di ferro e due ali con arcate */
 rect(g,S,x-98,y-286,196,100);rect(g,S2,x-102,y-292,204,8);poly(g,S,[[x-102,y-292],[x,y-326],[x+102,y-292]]);dot(g,S2,x,y-306,10);
 ar(g,S2,x-82,y-8,164,200);ar(g,k>.25?'#ffe2a0':'#9ab4c4',x-76,y-8,152,192);for(let q=1;q<6;q++)ln(g,'#3a4048',1.6,[x-76+q*25.3,y-8,x-76+q*25.3,y-190]);for(let q=0;q<9;q++)ln(g,'#3a4048',1.4,[x-76,y-24-q*20,x+76,y-24-q*20]);ln(g,'#3a4048',2,[x-76,y-8,x-76,y-100]);ln(g,'#3a4048',2,[x+76,y-8,x+76,y-100]);
 [-1,1].forEach(s=>{for(let q=0;q<3;q++){const ax=x+s*(130+q*68)-(s<0?30:0)+(s<0?0:0)-16;ar(g,S2,ax-4,y-8,40,130);ar(g,k>.25?'#ffe2a0':'#8aa4b4',ax,y-8,32,122);ln(g,'#3a4048',1.4,[ax+16,y-8,ax+16,y-126]);for(let r=0;r<5;r++)ln(g,'#3a4048',1.2,[ax,y-24-r*20,ax+32,y-24-r*20])}});
 /* scritta sul fregio e statue delle città */
 rect(g,'#2a2e36',x-124,y-186,248,18);txt(g,'GARE DU NORD',x,y-173,13,'#e8d8a8');
 for(let q=0;q<9;q++){const sx=x-300+q*75;if(Math.abs(sx-x)<110)continue;sta(g,sx,y-198,52,'#8a8678',S2)}sta(g,x,y-326,64,'#7a766a',S2);
 /* taxi in fila con il lampeggiante e valigie */
 [-250,-60,150].forEach((tx,i)=>{const cx=x+tx;poly(g,'#1c1c22',[[cx-34,y-14],[cx+34,y-14],[cx+32,y-26],[cx+18,y-38],[cx-14,y-38],[cx-30,y-26]]);rect(g,'rgba(180,210,230,.7)',cx-12,y-35,28,9);dot(g,'#111',cx-20,y-13,6);dot(g,'#111',cx+20,y-13,6);rect(g,k>.2?'rgb(255,250,230)':'#e8e8e0',cx-6,y-43,14,5);rect(g,'#2a8a4a',cx-4,y-42,10,3)});
 PR.pavalige(g,x+240,y,t);gente(g,x-170,y-2,t,3,.62);if(k>.05)glow(g,x,y-150,260,'255,226,170',.1*k)});
PR.pavalige=PA((g,x,y,t,a,k)=>{rect(g,'#2a4a8a',x-12,y-34,24,30);rect(g,'#1a2a5a',x-12,y-20,24,3);ln(g,'#3a3a40',2.2,[x-6,y-34,x-6,y-52]);ln(g,'#3a3a40',2.2,[x+6,y-34,x+6,y-52]);ln(g,'#3a3a40',2.2,[x-6,y-52,x+6,y-52]);dot(g,'#111',x-8,y-3,2.6);dot(g,'#111',x+8,y-3,2.6);rect(g,'#c8402a',x+16,y-24,16,20);rect(g,'#8a2a1a',x+16,y-14,16,2)});

/* --- binari ed Eurostar: grande tettoia di ferro e vetro, tabellone a lettere luminose, convogli gialli e blu, viaggiatori con i trolley --- */
PR.pabinari=PA((g,x,y,t,a,k)=>{
 /* tettoia ad archi di ferro con vetri */
 for(let q=0;q<7;q++){const ax=x-300+q*100;g.strokeStyle=tn('#34383e');g.lineWidth=5;g.beginPath();g.moveTo(ax,y-10);g.quadraticCurveTo(ax+50,y-380,ax+100,y-10);g.stroke();ln(g,'#34383e',1.4,[ax+50,y-190,ax+50,y-10])}
 g.save();g.beginPath();for(let q=0;q<6;q++){const ax=x-300+q*100;g.moveTo(ax+4,y-12);g.quadraticCurveTo(ax+50,y-370,ax+96,y-12);g.closePath()}g.clip();const sg=g.createLinearGradient(0,y-300,0,y);sg.addColorStop(0,k>.4?'rgba(60,70,110,.8)':'rgba(180,210,236,.75)');sg.addColorStop(1,k>.4?'rgba(120,120,150,.5)':'rgba(236,240,246,.6)');g.fillStyle=sg;g.fillRect(x-300,y-380,600,380);for(let q=0;q<14;q++)rect(g,'rgba(40,44,50,.45)',x-300,y-30-q*24,600,1.2);g.restore();
 /* tabellone dei treni a lettere luminose */
 rect(g,'#14161c',x-120,y-228,240,70);rect(g,'#2a2e36',x-124,y-232,248,5);rect(g,'#2a2e36',x-124,y-162,248,5);const tr=[['LONDRES ST PANCRAS','13:13','A'],['BRUXELLES MIDI','13:31','B'],['AMSTERDAM CS','14:25','C']];
 const flip=Math.floor(t/4)%3;tr.forEach((r,i)=>{const ln0=tr[(i+flip)%3];g.save();g.font='bold 10px monospace';g.textAlign='left';g.fillStyle='#ffc830';g.fillText(ln0[1],x-114,y-208+i*20);g.fillText(ln0[0],x-72,y-208+i*20);g.fillStyle=(Math.sin(t*3+i)>0)?'#ffc830':'#5a4810';g.fillText('VOIE '+(8+(i+flip)%3),x+72,y-208+i*20);g.restore()});glow(g,x,y-196,110,'255,200,50',.22);
 /* banchina e treni gialli e blu */
 rect(g,'#6a6e76',x-330,y-8,660,8);rect(g,'#8a8e96',x-330,y-8,660,2);
 [-250,10].forEach((px,i)=>{const cx=x+px;rect(g,'#f2c82a',cx,y-92,238,74);rect(g,'#1f3a7a',cx,y-56,238,16);rect(g,'rgba(0,0,0,.14)',cx+210,y-92,28,74);rect(g,'rgba(255,255,255,.2)',cx,y-92,238,5);for(let q=0;q<9;q++)rect(g,k>.3?'rgb(255,238,190)':'#8fb0c4',cx+10+q*24,y-84,17,24);[[24],[110],[196]].forEach(w=>{dot(g,'#1c1c20',cx+w[0],y-14,10);dot(g,'#9a9ea6',cx+w[0],y-14,4)})});
 poly(g,'#f2c82a',[[x+250,y-92],[x+292,y-92],[x+330,y-52],[x+330,y-18],[x+250,y-18]]);poly(g,'#1f3a7a',[[x+250,y-56],[x+330,y-56],[x+330,y-40],[x+250,y-40]]);poly(g,'#aac0d4',[[x+260,y-84],[x+290,y-84],[x+316,y-56],[x+260,y-56]]);dot(g,'#fff4c0',x+326,y-32,4);glow(g,x+330,y-32,60,'255,240,190',.35+k*.4);
 /* viaggiatori con i trolley */
 for(let i=0;i<4;i++){const px=x-300+i*34+Math.sin(t*.5+i)*3;fig(g,px,y+6,t+i,{f:1,s:.62,skin:['#d8a078','#e8b890'][i%2],top:['#e8505a','#2a7ae0','#4aa86a','#f2c82a'][i],bot:'#2a2a3a',hair:'#2a1a10',ph:i});rect(g,'#2a2a30',px+12,y-12,8,12);ln(g,'#3a3a40',1.4,[px+16,y-12,px+16,y-26])}});

/* --- il varco: in fondo al binario, un Eurostar fermo e la luce di un altro mondo --- */
PR.pavarco=PA((g,x,y,t,a,k)=>{
 rect(g,'#5a5a5a',x-260,y+2,520,3);rect(g,'#5a5a5a',x-260,y+16,520,3);for(let q=0;q<33;q++)rect(g,'rgba(50,40,30,.6)',x-256+q*15.8,y+1,3.6,19);
 for(let i=0;i<3;i++){const cx=x-250+i*130;rect(g,'#f2c82a',cx,y-90,126,76);rect(g,'rgba(255,255,255,.2)',cx,y-90,126,6);rect(g,'#1f3a7a',cx,y-50,126,12);rect(g,'rgba(0,0,0,.12)',cx+110,y-90,16,76);
  for(let q=0;q<5;q++)rect(g,k>.3?'rgb(255,236,190)':'#9ab0c0',cx+8+q*23,y-80,16,26);[18,100].forEach(w=>{dot(g,'#1c1c20',cx+w,y-10,10);dot(g,'#9a9ea6',cx+w,y-10,4)});rect(g,'#2a2c30',cx-4,y-18,4,8)}
 poly(g,'#f2c82a',[[x+140,y-90],[x+190,y-90],[x+214,y-52],[x+214,y-14],[x+140,y-14]]);poly(g,'#1f3a7a',[[x+140,y-50],[x+214,y-50],[x+214,y-38],[x+140,y-38]]);poly(g,'#aac0d4',[[x+150,y-82],[x+186,y-82],[x+204,y-54],[x+150,y-54]]);
 dot(g,'#fff4c0',x+212,y-30,4.4);glow(g,x+214,y-30,70,'255,240,190',.4+k*.4);
 /* la luce del varco, in fondo alla banchina */
 const lx=x+300,pu=.8+.2*Math.sin(t*2);const rg=g.createRadialGradient(lx,y-90,4,lx,y-90,150);rg.addColorStop(0,'rgba(255,255,255,'+pu+')');rg.addColorStop(.3,'rgba(190,170,255,'+(.55*pu)+')');rg.addColorStop(1,'rgba(110,231,255,0)');g.fillStyle=rg;g.fillRect(lx-150,y-240,300,300);el(g,'rgba(255,255,255,.9)',lx,y-90,16,56)});

/* =========================== oggetti minori =========================== */
/* lampione di ghisa verde con globo e braccio */
PR.palamp=PA((g,x,y,t,a,k)=>{const G='#2f4a3c';rect(g,G,x-7,y-10,14,10);rect(g,G,x-4,y-30,8,22);rect(g,G,x-2.2,y-126,4.4,98);rect(g,'#3f6a52',x-2.2,y-126,1.4,98);ln(g,G,2.6,[x,y-120,x+14,y-130,x+14,y-136]);rect(g,G,x-6,y-134,24,3);dot(g,k>.15?LIT:'#efe6d0',x+14,y-146,8);rect(g,G,x+8,y-156,12,3);poly(g,G,[[x+10,y-156],[x+14,y-164],[x+18,y-156]]);if(k>.05)glow(g,x+14,y-146,60,'255,214,120',.6*k)});
/* panchina di legno e ghisa */
PR.pabanc=PA((g,x,y,t,a,k)=>{const G='#2f4a3c';for(let q=0;q<3;q++)rect(g,'#6a4a2a',x-32,y-42+q*6,64,4.4);for(let q=0;q<3;q++)rect(g,'#7a5a38',x-32,y-24+q*0,64,0);rect(g,'#6a4a2a',x-32,y-22,64,4);rect(g,G,x-30,y-42,3,42);rect(g,G,x+27,y-42,3,42);rect(g,G,x-30,y-20,3,20)});
/* chiosco dei giornali verde */
PR.pakiosque=PA((g,x,y,t,a,k)=>{const G='#2f5a42';rect(g,G,x-52,y-112,104,112);rect(g,'rgba(255,255,255,.08)',x-52,y-112,6,112);rect(g,'rgba(0,0,0,.14)',x+38,y-112,14,112);poly(g,'#244a34',[[x-60,y-112],[x-44,y-134],[x+44,y-134],[x+60,y-112]]);dot(g,GOLD,x,y-140,3.4);rect(g,'#e8d8a8',x-40,y-104,80,14);txt(g,'JOURNAUX',x,y-93,8,'#2f5a42');rect(g,k>.2?'rgb(255,214,140)':'#e0d4b8',x-42,y-84,84,52);for(let q=0;q<8;q++)rect(g,['#c8302a','#2a5ac8','#e8b830','#f4f0e6','#4aa86a'][q%5],x-38+q*10,y-80+(q%2)*2,8,24);for(let q=0;q<8;q++)rect(g,['#e8b830','#c8302a','#f4f0e6','#2a5ac8'][q%4],x-38+q*10,y-52,8,16);rect(g,'#244a34',x-44,y-32,88,4)});
/* ingresso del metrò: palo con M cerchiata */
PR.pametro=PA((g,x,y,t,a,k)=>{const G='#2f6a4a';rect(g,G,x-1.8,y-110,3.6,110);rect(g,G,x-10,y-6,20,6);dot(g,'#f4f0e0',x,y-122,16);g.strokeStyle=tn('#1f4aa0');g.lineWidth=3.4;g.beginPath();g.arc(x,y-122,14,0,7);g.stroke();g.strokeStyle=tn('#1f4aa0');g.lineWidth=3.2;g.beginPath();g.moveTo(x-8,y-115);g.lineTo(x-8,y-130);g.lineTo(x,y-118);g.lineTo(x+8,y-130);g.lineTo(x+8,y-115);g.stroke();if(k>.15)glow(g,x,y-122,50,'255,240,190',.4*k)});
/* carretto di crêpes e gaufres con tenda a righe */
PR.pacarretto=PA((g,x,y,t,a,k)=>{rect(g,'#f4efe0',x-38,y-62,76,40);rect(g,'#c8402a',x-38,y-44,76,6);rect(g,'#8a8e96',x-38,y-24,76,4);dot(g,'#2a2a30',x-24,y-8,9);dot(g,'#9a9ea6',x-24,y-8,3.6);dot(g,'#2a2a30',x+24,y-8,9);dot(g,'#9a9ea6',x+24,y-8,3.6);rect(g,'#6a4a2a',x-38,y-26,2,12);
 for(let q=0;q<6;q++)poly(g,q%2?'#f4efe0':'#c8402a',[[x-46+q*15.3,y-100],[x-30.7+q*15.3,y-100],[x-34+q*14,y-80],[x-48+q*14,y-80]]);rect(g,'#c8402a',x-48,y-100,2,40);rect(g,'#c8402a',x+44,y-100,2,40);
 for(let q=0;q<4;q++)el(g,['#e8c070','#c8803a'][q%2],x-24+q*16,y-66,7,3);rect(g,'rgba(255,255,255,.7)',x+2+Math.sin(t*2)*0,y-76-Math.sin(t*3)*2,2,6);if(k>.2)glow(g,x,y-70,50,'255,200,110',.4*k)});
/* piccioni sulla pavimentazione */
PR.papiccioni=PA((g,x,y,t,a,k)=>{for(let i=0;i<6;i++){const px=x-70+i*28+Math.sin(t*.6+i)*5,pk=Math.max(0,Math.sin(t*1.5+i*2))*2;el(g,'#8a8e9a',px,y-6-pk,7,4);dot(g,'#6a7a8a',px+6,y-10-pk,3);rect(g,'#d8a0a8',px+8.4,y-10-pk,2,1);rect(g,'#6a6e78',px-2,y-3,1,3);rect(g,'#6a6e78',px+1,y-3,1,3)}});
/* un tiglio potato a cubo (Champ-de-Mars, Tuileries) */
PR.patiglio=PA((g,x,y,t,a,k)=>{const s=a||1;rect(g,'#5a4430',x-3,y-60*s,6,60*s);rect(g,'#4f8a46',x-20*s,y-110*s,40*s,52*s);rect(g,'#63a057',x-20*s,y-110*s,40*s,7);rect(g,'rgba(0,0,0,.15)',x+7*s,y-110*s,13*s,52*s)});
/* un taxi parcheggiato */
PR.pataxi=PA((g,x,y,t,a,k)=>{poly(g,'#1c1c22',[[x-44,y-14],[x+44,y-14],[x+42,y-30],[x+24,y-48],[x-18,y-48],[x-40,y-30]]);rect(g,'rgba(180,210,230,.7)',x-16,y-45,36,13);ln(g,'#1c1c22',2,[x+4,y-46,x+4,y-32]);dot(g,'#111',x-26,y-12,8);dot(g,'#9a9ea6',x-26,y-12,3);dot(g,'#111',x+26,y-12,8);dot(g,'#9a9ea6',x+26,y-12,3);rect(g,k>.2?'rgb(255,250,230)':'#e8e8e0',x-8,y-56,18,8);rect(g,'#2a8a4a',x-5,y-55,12,4);rect(g,k>.3?'rgb(255,226,150)':'#d8d4c0',x+40,y-26,4,6)});
})();
