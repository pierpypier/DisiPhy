(function(){
const GT=372;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,pa=A.pa,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const R=PR._fr,F=PR._fe,V=PR._iv,O=PR._ot;
const {P,cil,cop,bon,parr,mt,tetto,fin,casaP,colonne,frontone,cupola,torre,cipresso,tiglio,pioppo,covone,grano,capanna,carro,barile,lanterna,fanale,tab,cannone,fumata,palma,canna,albero,acq,ln,md,fumo,lm,mixs,SKN,orol,cavallo,asino,cane,pecora,volo}=R;
const {locoAm}=V,{binari,piroscafo,lampgas,molo,valigia,wq}=O;
const NZ=[5,5,5,5,6,5,6,5,5],ZW=NZ.map(n=>n*480+180);const Z=[0];ZW.forEach(w=>Z.push(Z[Z.length-1]+w));const W1=Z[9];
const LX=[];NZ.forEach((n,z)=>{for(let j=0;j<n;j++)LX.push(Z[z]+380+j*480)});LX[LX.length-1]=W1-130;
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
/* ---- luce: alba nei campi di cotone, giorno pieno, pomeriggio, tramonto e notte stellata a Galveston ---- */
const NF=[[0,.3],[600,.05],[Z[1]+200,0],[Z[7]+1500,0],[Z[8]+250,.12],[Z[8]+1000,.5],[Z[8]+1800,.72],[W1,.8]];
const nf=wx=>{if(wx<=NF[0][0])return NF[0][1];for(let i=1;i<NF.length;i++)if(wx<=NF[i][0]){const a=NF[i-1],b=NF[i];return a[1]+(b[1]-a[1])*(wx-a[0])/(b[0]-a[0])}return NF[NF.length-1][1]};
const SX=f=>(g,x,y,t,a)=>{const k=nf(x+AVCAM);A.setDK(k);f(g,x,y,t,a,k)};
const def=(n,f)=>{PR[n]=SX(f)};
const SKY=[[0,['#6b6a86','#d79a8c','#f6cf9a']],[Z[1]-500,['#7fa6c8','#c4d8e0','#f6ecd2']],[Z[2]+300,['#72b0dc','#bcdcec','#f6f0dc']],[Z[3]+300,['#6aa4d8','#b4d4ea','#f6efd8']],[Z[4]+300,['#5c9ad8','#acd0ec','#f8f0d8']],[Z[5]-700,['#8aa4c0','#c4d0d8','#ece4cc']],[Z[5]+900,['#7ea8d4','#c8dcea','#f8f2dc']],[Z[6]+300,['#86b0d4','#d0dce0','#f8f0d0']],[Z[7]-300,['#8ab2d6','#d4e0e4','#f6ecd4']],[Z[7]+400,['#8a929c','#b4b8bc','#d6d2c6']],[Z[7]+1500,['#d8a460','#f0b878','#ffd8a0']],[Z[8]+300,['#5a4a7a','#d8785a','#ffb070']],[Z[8]+1000,['#241e5a','#4a3a78','#a8607a']],[Z[8]+1800,['#0a0c2a','#14184a','#2a2a66']],[W1,['#080a24','#101444','#22225a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
/* ---- palette ---- */
const BLU='#27407a',CEL='#6f8fc0',GRI='#8e8e88',BUT='#a89462',ROS='#b8302a',BIA='#f4f0e4',MAT='#9a4a34',MAT2='#7a3a2a',LEG='#7a5a38',LEG2='#5a3e26',VER='#4a7a3a',VER2='#2e5a30',FER='#2c2c32',FER2='#4a4a54',ORO='#d4a840',PIE='#cfc6b0',PIE2='#b0a68e',TET='#4e5662',LUC='255,214,140';
const GZ=[['#8a6a46','#6e5234'],['#cdbd92','#a8986e'],['#93825f','#74654a'],['#7e7a72','#5e5a54'],['#7c8a54','#5c6a3c'],['#8e7c58','#6e5c40'],['#a9714a','#86553a'],['#74747a','#56565c'],['#dccb9c','#b8a676']];
/* ---- piccoli disegni riusabili ---- */
const pers=(g,x,y,t,s,f,top,bot,acc,o)=>P(g,x,y,t,Object.assign({s:s,f:f,top:top,bot:bot,acc:acc},o||{}));
const kepi=(g,b,c)=>{rect(g,c||BLU,-10,-120+b,20,9);poly(g,c||BLU,[[-10,-111+b],[10,-111+b],[16,-108+b],[-10,-108+b]]);poly(g,'#14110f',[[8,-110+b],[18,-107+b],[8,-106+b]])};
const slouch=(g,b,c)=>{el(g,c||'#4a4238',1,-111+b,18,4.4);rect(g,c||'#4a4238',-8,-123+b,17,12);rect(g,'#14110f',-8,-114+b,17,2.4)};
const stov=(g,b,c)=>{rect(g,c||'#1c1c24',-9,-143+b,18,32);rect(g,c||'#1c1c24',-14,-112+b,28,3.4);rect(g,'#3a3a42',-9,-118+b,18,3)};
const fazz=(g,b,c)=>{poly(g,c||'#c8402a',[[-12,-103+b],[-8,-116+b],[6,-118+b],[14,-106+b],[10,-97+b],[-12,-95+b]]);dot(g,c||'#c8402a',-12,-98+b,3.4)};
const barba=(g,b,c,l)=>{poly(g,c||'#2a1a10',[[-4,-96+b],[9,-97+b],[8,-88+b-0+(l||4)],[0,-84+b+(l||4)]])};
const bandera=(g,x,y,w,h,t,kind)=>{const N=5,pt=(u,v)=>[x+u*w,y+v*h+Math.sin(t*3-u*4)*1.8*u];
 if(kind==='b'){const p=[];for(let i=0;i<=N;i++)p.push(pt(i/N,0));for(let i=N;i>=0;i--)p.push(pt(i/N,1));poly(g,'#b8302a',p);
  const a=pt(0,0),b=pt(1,1),c=pt(1,0),d=pt(0,1);ln(g,'#27407a',h*.22,[a[0],a[1],b[0],b[1]]);ln(g,'#27407a',h*.22,[c[0],c[1],d[0],d[1]]);for(let q=0;q<5;q++){const m=pt(.5,.5);if(q==0)dot(g,BIA,m[0],m[1],1.3);else{const u=q<3?.2:.8,v=q%2?.2:.8,s=pt(u,v);dot(g,BIA,s[0],s[1],1.1)}}return}
 const nb=kind==='c'?3:13,col=kind==='c'?[ROS,BIA,ROS]:null;
 for(let s=0;s<nb;s++){const v0=s/nb,v1=(s+1)/nb,p=[];for(let i=0;i<=N;i++)p.push(pt(i/N,v0));for(let i=N;i>=0;i--)p.push(pt(i/N,v1));poly(g,col?col[s]:(s%2?BIA:ROS),p)}
 const cw=kind==='c'?.4:.42,ch=kind==='c'?.5:7/13;poly(g,'#27407a',[pt(0,0),pt(cw,0),pt(cw,ch),pt(0,ch)]);
 if(kind==='c'){for(let q=0;q<7;q++){const a=q*Math.PI*2/7,s=pt(.2+Math.cos(a)*.12,.25+Math.sin(a)*.18);dot(g,BIA,s[0],s[1],.9)}}
 else for(let r=0;r<3;r++)for(let q=0;q<4;q++){const s=pt(.05+q*.1,.06+r*.16);dot(g,BIA,s[0],s[1],.9)}};
const asta=(g,x,y,h,t,kind,w)=>{ln(g,LEG2,2.4,[x,y,x,y-h]);dot(g,ORO,x,y-h,2.4);bandera(g,x+1,y-h+2,w||34,(w||34)*.62,t,kind)};
const oak=(g,x,y,s,t)=>{const sw=Math.sin((t||0)*1+x)*1;ln(g,'#4a3a2a',9*s,[x,y,x-4*s,y-30*s,x-14*s,y-52*s]);ln(g,'#4a3a2a',7*s,[x-4*s,y-30*s,x+10*s,y-46*s,x+34*s,y-58*s]);
 el(g,'#3a5a30',x+sw,y-78*s,54*s,30*s);el(g,'#456a38',x-34*s+sw,y-66*s,34*s,20*s);el(g,'#456a38',x+40*s+sw,y-68*s,34*s,20*s);
 for(let q=0;q<9;q++){const mx=x-44*s+q*11*s;ln(g,'rgba(176,184,160,.8)',2*s,[mx,y-62*s,mx+Math.sin(t*1.2+q)*1.4,y-40*s-hr(q)*14*s])}};
const cot=(g,x,y,w,t,k)=>{for(let q=0;q<w/12;q++){const px=x+q*12,h=20+hr(q)*8;ln(g,'#4a6a2a',2,[px,y,px+Math.sin(t+q)*.8,y-h]);el(g,'#4e7a30',px,y-h*.6,6,4);if(hr(q*3)>.2)dot(g,BIA,px+(q%2?3:-3),y-h*.8,2.6);if(hr(q*5)>.5)dot(g,'#ece6d4',px,y-h-1,2.2)}};
const bala=(g,x,y,s,c)=>{s=s||1;rect(g,c||'#d8cfb4',x-14*s,y-22*s,28*s,22*s);rect(g,'rgba(0,0,0,.14)',x+4*s,y-22*s,10*s,22*s);for(const q of[-8,0,8])rect(g,'#6a5a40',x+q*s-.8,y-22*s,1.6,22*s);rect(g,'rgba(255,255,255,.35)',x-14*s,y-22*s,28*s,3*s)};
const pila=(g,x,y,n,s)=>{for(let r=0;r<n;r++)for(let c=0;c<n-r;c++)bala(g,x+(c-(n-r-1)/2)*29*(s||1),y-r*22*(s||1),s||1,r%2?'#cfc6aa':'#d8cfb4')};
const baita=(g,x,y,w,h,t,k,o)=>{o=o||{};rect(g,o.c||'#8a6a44',x,y-h,w,h);for(let r=0;r<h/8;r++){rect(g,'rgba(0,0,0,.18)',x,y-h+r*8+6,w,1.6);rect(g,'rgba(255,230,180,.08)',x,y-h+r*8,w,1.4)}rect(g,'rgba(0,0,0,.14)',x+w*.78,y-h,w*.22,h);poly(g,o.t||'#6a5238',[[x-6,y-h],[x+w/2,y-h-w*.32],[x+w+6,y-h]]);rect(g,'#2a1a10',x+w*.18,y-h*.62,w*.22,h*.62);rect(g,k>.3?'#ffd88a':'#3a2a1c',x+w*.62,y-h*.7,w*.18,h*.22);
 if(o.fum!==0){rect(g,'#6a5a48',x+w*.78,y-h-w*.34,6,w*.2);if(k<.5)fumo(g,x+w*.78+3,y-h-w*.34,t,'#c8c4bc',3,34)}};
const vap=(g,x,y,t,s,f,o)=>{o=o||{};g.save();g.translate(x,y+Math.sin(t*1.2+x*.01)*1);g.scale((f||1)*s,s);
 poly(g,'#2a2a30',[[-86,-18],[-78,0],[80,0],[96,-22]]);rect(g,'#b8302a',-80,-6,158,3);
 rect(g,BIA,-70,-40,128,22);rect(g,'#c8c0a8',-70,-40,128,3);for(let q=0;q<10;q++)rect(g,'#2a3a48',-64+q*12.4,-34,7,9);
 rect(g,BIA,-56,-62,92,22);rect(g,'#c8c0a8',-56,-62,92,3);for(let q=0;q<7;q++)rect(g,'#2a3a48',-50+q*12.6,-56,7,9);
 rect(g,BIA,-30,-80,38,18);rect(g,'#2a3a48',-26,-76,30,8);poly(g,'#c8c0a8',[[-34,-80],[-11,-90],[12,-80]]);
 for(const sx of[-44,26]){rect(g,'#1c1c20',sx-5,-112,10,52);rect(g,'#1c1c20',sx-8,-114,16,5);poly(g,'#1c1c20',[[sx-7,-112],[sx-3,-122],[sx+3,-122],[sx+7,-112]]);rect(g,ORO,sx-5,-100,10,3)}
 if(o.nosmoke!==1)fumo(g,-44,-122,t,'#4a4a52',5,70);fumo(g,26,-122,t,'#4a4a52',5,70);
 const wr=Math.sin(t*3);dot(g,'#8a2a22',-78,-18,16);for(let q=0;q<8;q++){const b=t*3+q*Math.PI/4;ln(g,'#c8402a',2.4,[-78,-18,-78+Math.cos(b)*16,-18+Math.sin(b)*16])}
 g.restore()};
const cannone2=(g,x,y,s,f,t,fire)=>{cannone(g,x,y,s,f,t);if(fire){const u=(t*1.4)%1;if(u<.3){glow(g,x+(f||1)*40*s,y-12*s,60,'255,200,100',.8*(1-u/.3))}}};
const fol=(g,x,y,t,n,sp,o)=>{o=o||{};for(let q=0;q<n;q++){const m=q%4,d=(o.f0||1)*(q%2?1:-1);pers(g,x+q*sp,y-(q%2)*3,t+q,o.s||.54,d,[o.c1||'#3a3a46','#6a5a4a','#8a6a5a','#4a5a6a'][m],['#2a2a30','#3a3228','#4a4036'][q%3],(g2,b)=>{if(m==0||m==3)cil(g2,b,['#1c1c24','#2a2a32'][q%2]);else if(m==1)bon(g2,b,['#d8cfb8','#b8a888'][q%2])},{hair:['#2a1a10','#5a4028','#8a8a8a'][q%3],long:m==1||m==2})}};
const sold=(g,x,y,t,n,sp,o)=>{o=o||{};const gray=o.gray;for(let q=0;q<n;q++){pers(g,x+q*sp,y-(q%2)*2,t+q,o.s||.54,o.f||1,gray?(q%2?GRI:BUT):BLU,gray?(q%2?'#7a7a74':'#8a7a5a'):CEL,(g2,b)=>{if(gray&&q%3==0)slouch(g2,b,'#6a6a64');else kepi(g2,b,gray?'#7a7a70':BLU);if(!o.nofucile){ln(g2,'#3a2a1c',2.4,[12,-70+b,16,-124+b]);ln(g2,'#aeb0b8',1.2,[16,-124+b,16,-134+b])}},{hair:'#3a2a1a'})}};
const targa=(g,x,y,t,a)=>{rect(g,'#8a8478',x-72,y-92,144,70);rect(g,'rgba(255,255,255,.14)',x-72,y-92,144,4);rect(g,'#6a6458',x-80,y-22,160,10);rect(g,'rgba(0,0,0,.2)',x+26,y-92,46,70);
 const s=a.split('|');txt(g,s[0],x,y-56,s[0].length>12?12:16,'#f4ecd4','900');ln(g,ORO,2,[x-60,y-46,x+60,y-46]);if(s[1])txt(g,s[1],x,y-30,10,'#e8dcb8','700')};
/* ===== targa di zona ===== */
def('sxtarga',(g,x,y,t,a)=>targa(g,x,y,t,a));
/* ===== ZONA 1 · Il Sud del cotone ===== */
def('sxcampi',(g,x,y,t,a,k)=>{for(let r=0;r<3;r++)cot(g,x-250+r*5,y+6-r*13,500,t+r,k);
 const sc=['#c8b898','#9a8a6a','#b8a888','#8a7a5a'];
 for(let q=0;q<5;q++){const px=x-190+q*88,py=y+10-(q%3)*10;pers(g,px,py,t+q,.56,q%2?1:-1,sc[q%4],'#5a4a38',(g2,b)=>{poly(g2,'#d8cfb4',[[-12,-70+b],[-44,-26],[-36,-22],[-6,-58+b]]);if(q%2)fazz(g2,b,['#c8402a','#e8c84a','#4a7ab0'][q%3]);else slouch(g2,b,'#b8a070');lm(g2,12,-84+b,22,.9+Math.sin(t*2+q)*.3,3,'#c89870')},{long:q%2==0,hair:'#1a120c',skin:q%3==0?'#8a5a3a':'#7a4a2e'})}
 const g2=g.createLinearGradient(0,y-60,0,y+30);g2.addColorStop(0,'rgba(240,228,222,0)');g2.addColorStop(1,'rgba(240,228,222,'+(.38*(1-k*0)*(1-cl((x+AVCAM-2000)/1500,0,1)))+')');g.fillStyle=g2;g.fillRect(x-260,y-60,520,90)});
def('sxquartiere',(g,x,y,t,a,k)=>{for(let q=0;q<3;q++)baita(g,x-250+q*132,y-12-q%2*6,86+q*6,54+q%2*8,t,k,{c:['#8a6a44','#7a5c3c','#946e48'][q]});
 ln(g,LEG2,2,[x-250,y-80,x-250,y-12]);ln(g,LEG2,2,[x-40,y-80,x-40,y-12]);ln(g,'#6a5a48',1.2,[x-250,y-76,x-40,y-72]);
 for(let q=0;q<7;q++){const lx=x-236+q*28;poly(g,['#efe8d4','#8ab0d0','#c8402a','#e8c860','#efe8d4','#6a9a6a','#d8a0b0'][q],[[lx,y-75+q*.4],[lx+16,y-73+q*.4],[lx+14,y-48+Math.sin(t*2+q)*1.4],[lx+2,y-50]])}
 for(let q=0;q<4;q++)for(let r=0;r<4;r++)rect(g,['#c8402a','#4a7ab0','#e8c84a','#6a9a5a'][(q+r)%4],x+120+q*13,y-62+r*11,12,10);rect(g,'#5a3e22',x+116,y-66,56,4);rect(g,'#5a3e22',x+116,y-18,4,18);rect(g,'#5a3e22',x+168,y-18,4,18);
 for(let q=0;q<4;q++)rect(g,'#5a7a3a',x+190+q*12,y+6,8,8);
 const fx=x+24,fy=y+14;glow(g,fx,fy-6,60,'255,170,80',.4+.2*Math.sin(t*6));for(let q=0;q<3;q++)poly(g,['#ff9a30','#ffd060','#ff6a20'][q],[[fx-6+q*6,fy],[fx-3+q*6,fy-12-q*2-Math.sin(t*9+q)*2],[fx+1+q*6,fy]]);rect(g,'#2a2420',fx-10,fy-18,2,18);rect(g,'#2a2420',fx+12,fy-18,2,18);ln(g,'#2a2420',2,[fx-10,fy-18,fx+14,fy-18]);el(g,'#1c1c20',fx+2,fy-16,8,6);fumo(g,fx+2,fy-22,t,'#9a9a9a',3,40);
 for(let q=0;q<3;q++)pers(g,x-20+q*46,y+20-(q%2)*4,t+q,.36,q%2?1:-1,['#c8b898','#a89878','#d8c8a0'][q],'#6a5a44',(g2,b)=>{if(q==1)fazz(g2,b,'#4a7ab0')},{skin:'#7a4a2e',hair:'#1a120c'});
 for(let q=0;q<3;q++){const cx=x-80+q*34,cy=y+22+(q%2)*4;el(g,['#b8402a','#e8e0cc','#7a4a2a'][q],cx,cy-6,5,4);dot(g,['#b8402a','#e8e0cc','#7a4a2a'][q],cx+4,cy-10+Math.sin(t*5+q)*1,2.4);dot(g,'#e8a020',cx+7,cy-10,1)}});
def('sxcasa',(g,x,y,t,a,k)=>{oak(g,x-230,y-6,1.15,t);oak(g,x+236,y-6,1.15,t);
 rect(g,'#f0ecdc',x-130,y-148,260,138);rect(g,'rgba(0,0,0,.1)',x+90,y-148,40,138);rect(g,'#e4dfcc',x-130,y-148,260,6);
 poly(g,'#4e5662',[[x-142,y-148],[x-100,y-188],[x+100,y-188],[x+142,y-148]]);poly(g,'#f0ecdc',[[x-96,y-150],[x,y-196],[x+96,y-150]]);dot(g,'#c8c0a8',x,y-166,8);dot(g,'#5a7a9a',x,y-166,5);
 for(const q of[-1,1]){rect(g,'#c8b898',x+q*86-5,y-232,10,48);rect(g,'#c8b898',x+q*86-7,y-236,14,5)}
 rect(g,'#e4dfcc',x-136,y-60,272,4);for(let q=0;q<7;q++){const cx=x-110+q*37;rect(g,'#faf6e8',cx,y-148,9,138);rect(g,'rgba(0,0,0,.1)',cx+6,y-148,3,138);rect(g,'#faf6e8',cx-2,y-152,13,5);rect(g,'#e4dfcc',cx-2,y-12,13,5)}
 for(let q=0;q<3;q++){const wx=x-92+q*66;rect(g,'#3a4a3a',wx-2,y-128,22,36);rect(g,k>.3?'#ffd88a':'#8aa4bc',wx,y-126,18,32);rect(g,'#3a4a3a',wx-2,y-128,22,36);rect(g,k>.3?'#ffd88a':'#8aa4bc',wx,y-126,18,32);rect(g,'#3a4a3a',wx+8,y-126,2,32)}
 ar(g,'#4a3828',x-11,y-10,22,48);rect(g,'#14110f',x-11,y-30,22,20);
 for(let q=0;q<2;q++){const gx=x-176+q*52;el(g,BIA,gx,y+10,13,7);rect(g,BIA,gx+8,y-2,2,6);dot(g,BIA,gx+14,y+2,5);poly(g,'#c8c0a8',[[gx+14,y-3],[gx+18,y-10],[gx+16,y-2]]);rect(g,'#8a7a6a',gx-9,y+14,2,5);rect(g,'#8a7a6a',gx+8,y+14,2,5)}
 pers(g,x+170,y+16,t,.3,-1,'#5a4a6a','#3a3a44',(g2,b)=>{},{hair:'#3a2a1a'});
 pers(g,x+120,y+16,t,.56,-1,BLU,CEL,(g2,b)=>{kepi(g2,b);ln(g2,'#3a2a1c',2.4,[12,-70+b,16,-124+b])},{hair:'#3a2a1a'});
 for(let q=0;q<3;q++)pers(g,x-60+q*28,y+22-(q%2)*3,t+q,.5,q%2?-1:1,['#3a3a46','#6a5a6a','#4a4a56'][q],'#2a2a30',(g2,b)=>{if(q==1)bon(g2,b,'#d8cfb8');else cil(g2,b)},{long:q==1});
 asta(g,x+200,y-70,150,t,'u',38)});
def('sxmonumento',(g,x,y,t,a,k)=>{rect(g,'#6a5a3a',x-250,y-2,500,26);for(let q=0;q<12;q++)el(g,'#5a4a30',x-230+q*40,y+6+(q%3)*6,12,3);
 poly(g,'#e8e4d8',[[x-36,y-4],[x-26,y-292],[x+26,y-292],[x+36,y-4]]);poly(g,'rgba(0,0,0,.14)',[[x+6,y-292],[x+26,y-292],[x+36,y-4],[x+8,y-4]]);
 for(let r=1;r<24;r++){const yy=y-4-r*12,w=36-r*.4;rect(g,'rgba(80,70,50,.16)',x-w,yy,w*2,1.2)}
 poly(g,'#d8d4c4',[[x-26,y-292],[x-22,y-299],[x-8,y-294],[x+4,y-300],[x+26,y-292]]);
 ln(g,LEG2,2,[x+10,y-300,x+10,y-322]);ln(g,LEG2,2,[x-8,y-296,x-8,y-318]);
 const cw=(cx,cy,f,c,tt)=>{g.save();g.translate(cx,cy);g.scale(f,1);el(g,c,0,-18,20,10);el(g,'#2a1a10',-6,-20,6,4);el(g,'#2a1a10',8,-16,5,4);ln(g,c,3,[-12,-12,-12,0]);ln(g,c,3,[-4,-12,-4,0]);ln(g,c,3,[8,-12,8,0]);ln(g,c,3,[16,-12,16,0]);el(g,c,24,-20+(tt||0),8,6);dot(g,'#f0d8c8',31,-17+(tt||0),2.6);poly(g,'#e8e0cc',[[22,-26],[26,-32],[27,-25]]);ln(g,c,2,[-20,-20,-26,-8]);g.restore()};
 cw(x-170,y+16,1,'#a8603a',Math.sin(t*1.5)*1.2);cw(x+120,y+22,-1,'#e8e0cc',Math.sin(t*1.2)*1.2);cw(x+190,y+8,1,'#6a4a30',0);
 rect(g,'#7a5a38',x-250,y-30,4,30);rect(g,'#7a5a38',x-140,y-30,4,30);ln(g,'#7a5a38',3,[x-250,y-22,x-140,y-22]);ln(g,'#7a5a38',3,[x-250,y-12,x-140,y-12]);barile(g,x+60,y+8,1.1);barile(g,x+78,y+10,1.1)});
def('sxbattello',(g,x,y,t,a,k)=>{acq(g,x-260,y-16,520,30,t,'#6a7a6a','#9aaa8a');vap(g,x-30,y-8,t,1,1);
 poly(g,'#6a4a2a',[[x+60,y-12],[x+120,y-6],[x+120,y-2],[x+60,y-8]]);rect(g,'#7a5a38',x+100,y-10,150,12);pila(g,x+180,y-10,3,1);bala(g,x+130,y-10,1);
 for(let q=0;q<3;q++)pers(g,x+86+q*14,y+4-(q%2)*2,t+q,.46,-1,['#c8b898','#9a8a6a','#b8a888'][q],'#5a4a38',(g2,b)=>{slouch(g2,b,'#b8a070');if(q==1){rect(g2,'#d8cfb4',-6,-100+b,0,0)}},{skin:'#7a4a2e'})});
def('sxpozzo',(g,x,y,t,a,k)=>{const sk=1-cl(k*0,0,1);
 const st=[[-130,-310],[-90,-300],[-52,-292],[-20,-296],[14,-282],[56,-268],[100,-262]],al=.5;
 g.globalAlpha=.85;for(let i=0;i<st.length;i++){glow(g,x+st[i][0]+110,y+st[i][1]+150,14,'255,252,230',.5);dot(g,'#fffbe8',x+st[i][0]+110,y+st[i][1]+150,2.2)}
 ln(g,'rgba(255,250,220,.25)',1,st.map(s=>[x+s[0]+110,y+s[1]+150]).reduce((a2,p)=>a2.concat(p),[]));
 const pol=[x+230,y-170];glow(g,pol[0],pol[1],26,'255,252,230',.7);dot(g,'#fffbe8',pol[0],pol[1],3.4);ln(g,'rgba(255,250,220,.25)',1,[x+110-130+130,y-160,pol[0],pol[1]]);g.globalAlpha=1;
 rect(g,'#6a5a48',x-40,y-30,80,30);rect(g,'#14110f',x-30,y-30,60,6);for(let r=0;r<4;r++)rect(g,'rgba(0,0,0,.2)',x-40,y-24+r*7,80,1);
 rect(g,LEG2,x-38,y-100,6,70);rect(g,LEG2,x+32,y-100,6,70);rect(g,LEG,x-44,y-106,88,6);poly(g,'#6a5238',[[x-48,y-106],[x,y-134],[x+48,y-106]]);ln(g,'#4a3a2a',1.4,[x,y-104,x,y-80]);rect(g,'#7a5a38',x-6,y-80,12,10);
 ln(g,'#5a4a3a',2,[x+38,y-96,x+58,y-90]);el(g,'#c8a040',x+60,y-80,8,12);el(g,'#a88030',x+58,y-84,3,5);rect(g,'#6a5238',x+57,y-94,3,5);
 for(let q=0;q<3;q++)pers(g,x-150+q*30,y+16,t+q,.4,1,['#c8b898','#a89878','#d8c8a0'][q],'#6a5a44',(g2,b)=>{},{skin:'#7a4a2e',hair:'#1a120c'});
 oak(g,x+190,y-6,.8,t)});
/* ===== ZONA 2 · Charleston e le isole ===== */
def('sxcharleston',(g,x,y,t,a,k)=>{const cs=[['#e8b8b0',64,92],['#ecd9a0',70,108],['#a8c4d8',66,96],['#d8b8c8',60,86]];let cx=x-250;
 cs.forEach((c,i)=>{rect(g,c[0],cx,y-30-c[2],c[1],c[2]);rect(g,'rgba(0,0,0,.12)',cx+c[1]*.75,y-30-c[2],c[1]*.25,c[2]);poly(g,'#5a5058',[[cx-4,y-30-c[2]],[cx+c[1]/2,y-30-c[2]-22],[cx+c[1]+4,y-30-c[2]]]);
  for(let r=0;r<c[2]/34-.5;r++)for(let q=0;q<2;q++){rect(g,'#4a5a4a',cx+8+q*30,y-30-c[2]+10+r*32,11,18);rect(g,k>.3?'#ffd88a':'#7a98b0',cx+10+q*30,y-30-c[2]+12+r*32,7,14)}
  rect(g,'#6a4a30',cx+c[1]/2-7,y-30-26,14,26);cx+=c[1]+4});
 rect(g,'#f4f0e4',x+60,y-190,26,160);poly(g,'#f4f0e4',[[x+60,y-190],[x+73,y-248],[x+86,y-190]]);rect(g,'rgba(0,0,0,.1)',x+78,y-190,8,160);ar(g,'#2a3a4a',x+67,y-120,12,26);ln(g,ORO,2,[x+73,y-248,x+73,y-262]);
 rect(g,'#f4f0e4',x+40,y-100,66,70);poly(g,'#4a5058',[[x+34,y-100],[x+73,y-124],[x+112,y-100]]);
 palma(g,x+140,y-6,1.1,t);palma(g,x+176,y-2,.9,t);
 acq(g,x+120,y-10,150,24,t,'#6a8a9a','#8aa8b4');R.nave(g,x+210,y+4,.4,t,1);
 for(let q=0;q<3;q++)barile(g,x-120+q*18,y+8,1.1);fol(g,x-60,y+20,t,3,46)});
def('sxsumter',(g,x,y,t,a,k)=>{acq(g,x-260,y-60,520,120,t,'#5a7a92','#8ab0c4');
 const fx=x+60;poly(g,'#8a4a3a',[[fx-110,y-54],[fx-96,y-98],[fx+96,y-98],[fx+112,y-54]]);poly(g,'rgba(0,0,0,.14)',[[fx+40,y-98],[fx+96,y-98],[fx+112,y-54],[fx+40,y-54]]);
 for(let r=0;r<3;r++)for(let q=0;q<9;q++)ar(g,'#1c1410',fx-98+q*21.5,y-58-r*14+2,9,11);rect(g,'#6a3a2a',fx-96,y-102,192,5);
 poly(g,'#6a5a4a',[[fx-120,y-50],[fx+120,y-50],[fx+130,y-40],[fx-130,y-40]]);
 asta(g,fx+30,y-102,60,t,'u',34);
 for(let q=0;q<5;q++){const u=((t*.9+q*.21)%1),sx=x-230+u*300,sy=y-150-Math.sin(u*Math.PI)*120+u*80;glow(g,sx,sy,16,'255,190,90',.7);dot(g,'#ffe8a0',sx,sy,2);ln(g,'rgba(255,200,100,.5)',1.2,[sx-8,sy+Math.sin(u*Math.PI)*0+4,sx,sy])}
 const f=(t*1.1)%1;if(f<.25){glow(g,x-230,y-26,70,'255,200,100',.8*(1-f/.25));}
 cannone(g,x-230,y+12,.9,1,t);fumata(g,x-210,y-8,t,3,16,'#a8a8aa');
 for(let q=0;q<3;q++){const bx=fx-60+q*50;fumata(g,bx,y-104,t+q,2,12,'#8a8a8e')}});
def('sxsmalls',(g,x,y,t,a,k)=>{acq(g,x-260,y-40,520,100,t,'#4a6a82','#7a9ab0');const bx=x-30+Math.sin(t*.5)*6;
 poly(g,'#2a2a30',[[bx-60,y-26],[bx-54,y-12],[bx+56,y-12],[bx+66,y-30]]);rect(g,'#7a5a3a',bx-50,y-48,92,22);rect(g,BIA,bx-40,y-70,50,22);rect(g,'#2a3a48',bx-34,y-66,38,8);poly(g,'#c8c0a8',[[bx-44,y-70],[bx-15,y-82],[bx+14,y-70]]);
 rect(g,'#1c1c20',bx+16,y-110,10,50);fumo(g,bx+21,y-112,t,'#4a4a52',5,60);dot(g,'#8a2a22',bx-62,y-26,12);for(let q=0;q<6;q++){const b2=t*3+q*Math.PI/3;ln(g,'#c8402a',2,[bx-62,y-26,bx-62+Math.cos(b2)*12,y-26+Math.sin(b2)*12])}
 pers(g,bx-14,y-48,t,.4,1,'#c8b898','#6a5a44',(g2,b)=>{el(g2,'#d8c070',1,-111+b,18,4.4);rect(g2,'#d8c070',-8,-123+b,17,12)},{skin:'#7a4a2e'});
 ln(g,LEG2,2,[bx+46,y-48,bx+46,y-100]);poly(g,BIA,[[bx+46,y-98],[bx+78,y-92+Math.sin(t*3)*2],[bx+78,y-66],[bx+46,y-70]]);
 R.nave(g,x+190,y-22,.5,t,-1);ln(g,'#5a5a60',2,[x+170,y-70,x+210,y-70])});
def('sxportroyal',(g,x,y,t,a,k)=>{oak(g,x-210,y-4,1.2,t);oak(g,x+230,y-2,1,t);
 rect(g,BIA,x-80,y-90,170,80);rect(g,'rgba(0,0,0,.1)',x+60,y-90,30,80);poly(g,'#6a5238',[[x-90,y-90],[x+5,y-122],[x+100,y-90]]);for(let q=0;q<3;q++){rect(g,'#4a5a4a',x-62+q*52,y-74,22,34);rect(g,k>.3?'#ffd88a':'#8aa4bc',x-60+q*52,y-72,18,30)}ar(g,'#4a3828',x+20,y-10,20,40);
 rect(g,'#2a3a30',x-200,y-70,60,46);rect(g,'#7a5a38',x-204,y-74,68,4);txt(g,'A B C',x-170,y-52,12,'#f4f0e4','700');ln(g,LEG2,3,[x-190,y-24,x-180,y-8]);ln(g,LEG2,3,[x-150,y-24,x-160,y-8]);
 for(let q=0;q<5;q++)pers(g,x-110+q*30,y+22-(q%2)*3,t+q,.36,q%2?-1:1,['#c8b898','#a89878','#d8c8a0','#9a8a6a','#e0d0b0'][q],'#6a5a44',(g2,b)=>{},{skin:'#7a4a2e',hair:'#1a120c',long:q%2==0});
 pers(g,x-150,y+14,t,.58,1,'#6a5a7a','#4a3a5a',(g2,b)=>{lm(g2,12,-84+b,26,-1.1,3,'#e8b890');bon(g2,b,'#d8cfb8')},{long:1,hair:'#6a4a2a',skin:'#e8b890'});
 palma(g,x+150,y-4,1,t)});
def('sxcombahee',(g,x,y,t,a,k)=>{for(let q=0;q<6;q++){rect(g,q%2?'#6a8a4a':'#7a9a52',x-260,y-60+q*5,260,5);rect(g,'rgba(120,170,200,.4)',x-260,y-58+q*5,260,1.4)}
 acq(g,x-20,y-70,280,110,t,'#4a6a7a','#7a9aa8');
 [[x+10,y-30,.5],[x+100,y-48,.45],[x+190,y-34,.5]].forEach((s,i)=>{vap(g,s[0],s[1],t+i,s[2],1,{});});
 for(let q=0;q<7;q++){const u=((t*.15+q*.14)%1),px=x-230+u*220,py=y+6+(q%3)*6;pers(g,px,py,t*2+q,.4,1,['#c8b898','#a89878','#d8c8a0'][q%3],'#6a5a44',(g2,b)=>{el(g2,'#d8cfb4',2,-116+b,9,6);if(q%2)rect(g2,'#9a6a3a',-6,-100+b,0,0)},{skin:'#7a4a2e',hair:'#1a120c',long:q%2})}
 glow(g,x+250,y-70,90,'255,130,60',.35+.1*Math.sin(t*5));fumo(g,x+240,y-60,t,'#3a3a3e',5,90)});
/* ===== ZONA 3 · Washington ===== */
def('sxcampidoglio',(g,x,y,t,a,k)=>{rect(g,'#f0ecdc',x-190,y-100,380,90);rect(g,'rgba(0,0,0,.1)',x+150,y-100,40,90);rect(g,'#e0dac6',x-190,y-104,380,6);
 for(let q=0;q<16;q++)rect(g,'#faf6e8',x-170+q*22,y-96,7,82);
 poly(g,'#f0ecdc',[[x-70,y-104],[x,y-140],[x+70,y-104]]);rect(g,'#faf6e8',x-70,y-104,140,4);
 rect(g,'#e4dfcc',x-52,y-190,104,86);for(let q=0;q<9;q++)rect(g,'#faf6e8',x-48+q*11,y-186,6,80);rect(g,'#e4dfcc',x-56,y-194,112,6);
 const ribs=(q)=>{ln(g,'#8a8e98',2.4,[x-52+q*13,y-194,x-26+q*6.5,y-240,x,y-262+Math.abs(q-4)*0])};for(let q=0;q<9;q++)ln(g,'#9aa0aa',2,[x-52+q*13,y-194,x,y-270]);
 g.globalAlpha=.9;g.strokeStyle=tn('#8a6a3a');g.lineWidth=1.6;for(let q=0;q<7;q++){g.beginPath();g.moveTo(x-58,y-196-q*14);g.lineTo(x+58,y-196-q*14);g.stroke()}for(let q=-3;q<=3;q++)ln(g,'#8a6a3a',1.4,[x+q*18,y-194,x+q*8,y-290]);g.globalAlpha=1;
 ln(g,LEG2,4,[x+80,y-104,x+80,y-290]);const cr=Math.sin(t*.6)*.08;g.save();g.translate(x+80,y-290);g.rotate(cr);ln(g,LEG2,3,[0,0,-90,-24]);ln(g,LEG2,2,[-90,-24,-90,-4]);ln(g,'#3a3a3e',1.2,[-60,-16,-60,8+Math.sin(t*2)*3]);rect(g,'#6a5a48',-64,6+Math.sin(t*2)*3,9,7);g.restore();
 ln(g,LEG2,2,[x+80,y-290,x+80,y-300]);
 rect(g,'#6a6a62',x-230,y-30,50,30);const sx=x-205;poly(g,'#5a7a5a',[[sx-12,y-34],[sx-8,y-84],[sx-2,y-96],[sx+2,y-84],[sx+8,y-84],[sx+12,y-34]]);dot(g,'#6a8a6a',sx,y-100,6);poly(g,'#7a9a7a',[[sx-6,y-104],[sx,y-118],[sx+6,y-104]]);
 for(let q=0;q<3;q++)pers(g,x-150+q*44,y+20-(q%2)*4,t+q,.5,q%2?-1:1,['#8a7a6a','#6a6a7a','#7a6a5a'][q],'#4a4036',(g2,b)=>{slouch(g2,b,'#5a4a3a')});
 asta(g,x-170,y-100,70,t,'u',32)});
def('sxcasabianca',(g,x,y,t,a,k)=>{rect(g,'#6a9a52',x-260,y-14,520,40);
 rect(g,'#f2eee0',x-150,y-130,300,116);rect(g,'rgba(0,0,0,.1)',x+110,y-130,40,116);rect(g,'#e4dfcc',x-150,y-132,300,6);
 for(let q=0;q<4;q++)for(let r=0;r<2;r++){rect(g,'#3a3a40',x-134+q*74,y-110+r*50,20,32);rect(g,k>.3?'#ffd88a':'#8aa4bc',x-132+q*74,y-108+r*50,16,28)}
 for(let q=0;q<3;q++)for(let r=0;r<2;r++){rect(g,'#3a3a40',x+86+q*0,y-110+r*50,0,0)}
 poly(g,'#f8f4e6',[[x-70,y-130],[x,y-166],[x+70,y-130]]);rect(g,'#faf6e8',x-70,y-130,140,5);
 for(let q=0;q<4;q++){const cx=x-62+q*40;rect(g,'#faf6e8',cx,y-125,10,111);rect(g,'rgba(0,0,0,.1)',cx+7,y-125,3,111)}
 for(let q=0;q<26;q++)rect(g,'#e4dfcc',x-148+q*11.4,y-140,6,9);rect(g,'#6a6a66',x-150,y-134,300,3);
 ar(g,'#2a2218',x-12,y-14,24,40);
 for(let q=0;q<2;q++){const gx=x-210+q*40;el(g,BIA,gx,y+12,12,7);rect(g,BIA,gx+7,y,2,6);dot(g,BIA,gx+13,y+3,4.6);poly(g,'#c8c0a8',[[gx+12,y-2],[gx+16,y-9],[gx+15,y-1]]);rect(g,'#8a7a6a',gx-8,y+16,2,4);rect(g,'#8a7a6a',gx+7,y+16,2,4)}
 pers(g,x+176,y+16,t,.34,-1,'#5a6a8a','#3a3a44',(g2,b)=>{},{hair:'#3a2a1a'});
 for(let q=0;q<4;q++)pers(g,x+60+q*30,y+24-(q%2)*3,t+q,.5,-1,['#3a3a46','#6a5a6a','#4a4a56','#3a3a46'][q],'#2a2a30',(g2,b)=>{if(q==1)bon(g2,b,'#d8cfb8');else cil(g2,b)},{long:q==1});
 pers(g,x-170,y+10,t,.56,1,BLU,CEL,(g2,b)=>{kepi(g2,b);ln(g2,'#3a2a1c',2.4,[12,-70+b,16,-124+b])},{hair:'#3a2a1a'});
 asta(g,x+226,y-60,150,t,'u',40)});
def('sxtelegrafo',(g,x,y,t,a,k)=>{rect(g,MAT,x-130,y-130,260,120);rect(g,'rgba(0,0,0,.14)',x+90,y-130,40,120);for(let r=0;r<12;r++)rect(g,'rgba(40,10,0,.18)',x-130,y-130+r*10,260,1);
 poly(g,'#4e5662',[[x-142,y-130],[x,y-172],[x+142,y-130]]);
 rect(g,'#2a2218',x-100,y-108,150,80);rect(g,'#c8a868',x-96,y-104,142,72);glow(g,x-26,y-70,90,LUC,.35+.3*k);
 rect(g,'#6a4a2a',x-90,y-58,128,8);rect(g,'#5a3e22',x-86,y-50,6,22);rect(g,'#5a3e22',x+28,y-50,6,22);
 for(let q=0;q<3;q++){rect(g,'#1c1c20',x-70+q*24,y-66,14,4);ln(g,'#c8a030',1.2,[x-63+q*24,y-66,x-63+q*24,y-72])}
 for(let q=0;q<4;q++)rect(g,BIA,x-30+q*8,y-62,8,5);
 pers(g,x-62,y-28,t,.5,1,'#4a4a5a','#2a2a30',(g2,b)=>{lm(g2,12,-84+b,26,-.9,3,'#e8b890')},{hair:'#3a2a1a'});
 pers(g,x+10,y-28,t,.62,-1,'#1c1c24','#1c1c24',(g2,b)=>{stov(g2,b);barba(g2,b,'#1a1008',6);poly(g2,BIA,[[10,-74+b],[24,-72+b],[22,-60+b],[10,-62+b]])},{skin:'#d8a880',hair:'#1a1008'});
 rect(g,'#6a4a2a',x+94,y-10,6,0);
 for(let q=0;q<3;q++){const px=x-200+q*0;}
 for(const px of[x-230,x+210]){ln(g,LEG2,4,[px,y,px,y-210]);ln(g,LEG2,3,[px-24,y-196,px+24,y-196]);ln(g,LEG2,3,[px-20,y-180,px+20,y-180])}
 for(let q=0;q<3;q++){g.strokeStyle='#2a2a30';g.lineWidth=1.2;g.beginPath();g.moveTo(x-254+q*3,y-196+q*8);g.quadraticCurveTo(x,y-176+q*8,x+234-q*3,y-196+q*8);g.stroke()}
 g.strokeStyle='#2a2a30';g.lineWidth=1.2;g.beginPath();g.moveTo(x-50,y-172);g.quadraticCurveTo(x-120,y-200,x-206,y-196);g.stroke()});
def('sxospedale',(g,x,y,t,a,k)=>{rect(g,'#e8e0cc',x-230,y-70,300,60);rect(g,'rgba(0,0,0,.1)',x+40,y-70,30,60);poly(g,'#5a5058',[[x-240,y-70],[x-80,y-100],[x+80,y-70]]);
 rect(g,'#c8c0a8',x-230,y-56,300,46);for(let q=0;q<7;q++){const bx=x-218+q*40;rect(g,BIA,bx,y-40,32,18);rect(g,'#8a8a94',bx,y-22,32,3);rect(g,'#d8d0b8',bx,y-46,8,24);if(q%2==0)el(g,'#e8b890',bx+16,y-38,5,3)}
 for(let q=0;q<7;q++)rect(g,'#3a4a5a',x-216+q*40,y-66,10,0);
 pers(g,x-150,y-8,t,.52,1,BIA,'#6a5a7a',(g2,b)=>{bon(g2,b,BIA)},{long:1,hair:'#4a2a1a',skin:'#e8b890'});
 pers(g,x-60,y-8,t,.56,1,'#7a6a5a','#4a4036',(g2,b)=>{slouch(g2,b,'#c8c0a8');barba(g2,b,'#d8d4c8',8);rect(g2,'#d8cfb4',12,-66+b,10,8)},{skin:'#e0b090',hair:'#d8d4c8'});
 poly(g,'#e8c840',[[x+100,y-110],[x+120,y-114],[x+120,y-90],[x+100,y-92]]);ln(g,LEG2,2.4,[x+100,y,x+100,y-124]);txt(g,'H',x+110,y-98,10,'#2a6a3a','900');
 const ax=x+190;poly(g,'#d8d0b8',[[ax-50,y-70],[ax-40,y-86],[ax+40,y-86],[ax+50,y-70]]);rect(g,'#5a3e22',ax-50,y-70,100,20);for(const wx of[-30,30]){dot(g,'#3a2a1c',ax+wx,y-44,14);dot(g,'#8a6a3a',ax+wx,y-44,11);dot(g,'#3a2a1c',ax+wx,y-44,3)}cavallo(g,ax-90,y-8,.8,t,1,'#6a4a2a')});
/* ===== ZONA 4 · Il Nord ===== */
def('sxcooper',(g,x,y,t,a,k)=>{rect(g,'#8a5a48',x-110,y-190,220,180);rect(g,'rgba(0,0,0,.16)',x+70,y-190,40,180);rect(g,'#a06a54',x-114,y-194,228,8);
 for(let r=0;r<4;r++)for(let q=0;q<4;q++){ar(g,'#2a2a34',x-92+q*48,y-70-r*40,20,26);rect(g,k>.3?'#ffd88a':'#7a98b0',x-90+q*48,y-66-r*40,16,22)}
 ar(g,'#2a1a10',x-16,y-10,32,44);rect(g,'#f4ecd4',x-80,y-166,160,16);txt(g,'COOPER UNION',x,y-153,11,'#3a2a1c','900');
 for(let q=0;q<3;q++){rect(g,BIA,x-150+q*0,y-90,0,0)}rect(g,BIA,x-170,y-80,36,46);txt(g,'LINCOLN',x-152,y-64,7,'#3a2a1c','900');txt(g,'27 FEB',x-152,y-52,7,'#8a3a2a','900');
 const px=x+150;ln(g,LEG2,3,[px-14,y+8,px,y-40]);ln(g,LEG2,3,[px+14,y+8,px,y-40]);ln(g,LEG2,3,[px,y+8,px,y-40]);rect(g,'#14110f',px-12,y-62,24,22);rect(g,'#8aa4bc',px-12,y-56,10,10);
 poly(g,'#1c1c20',[[px+12,y-66],[px+46,y-30],[px+40,y+8],[px+14,y-20]]);pers(g,px+34,y+14,t,.56,-1,'#2a2a34','#1c1c20',(g2,b)=>{cop(g2,b,'#1c1c20')},{hair:'#2a1a10'});
 lampgas(g,x-200,y+6,t,k);fol(g,x-90,y+26,t,4,40)});
def('sxfabbrica',(g,x,y,t,a,k)=>{rect(g,MAT,x-250,y-100,230,90);rect(g,'rgba(0,0,0,.14)',x-60,y-100,40,90);for(let r=0;r<9;r++)rect(g,'rgba(40,10,0,.18)',x-250,y-100+r*10,230,1);
 for(let q=0;q<4;q++){rect(g,'#2a2a34',x-232+q*54,y-80,24,32);rect(g,k>.3?'#ffd88a':'#6a7a8a',x-230+q*54,y-78,20,28)}
 for(const cx of[-210,-120]){rect(g,'#7a3a2a',x+cx-9,y-230,18,130);rect(g,'#4a2a20',x+cx-11,y-234,22,6);fumo(g,x+cx,y-234,t,'#3a3a3e',6,110)}
 binari(g,x-260,x+260,y+14);for(let q=0;q<2;q++){rect(g,'#7a4a2a',x+10+q*0,y-30,0,0)}
 locoAm(g,x+120,y+12,.9,t,k,1);rect(g,'#6a3a2a',x-12,y-18,70,20);rect(g,'#8a4a32',x-12,y-18,70,5);for(const wx of[0,48]){dot(g,'#2a2a30',x+wx,y+6,6)}
 for(let q=0;q<3;q++)rect(g,'#c8a468',x-250+q*30,y-24-q%2*14+14,26,14);for(let q=0;q<4;q++)pers(g,x-170+q*20,y+22,t+q,.46,q%2?-1:1,['#6a6a7a','#8a7a6a','#5a6a6a','#7a6a5a'][q],'#3a3a3e',(g2,b)=>{cop(g2,b,'#3a3a40')})});
def('sxarruola',(g,x,y,t,a,k)=>{rect(g,'#8a6a44',x-70,y-150,140,110);rect(g,'#f0e8d0',x-62,y-144,124,98);txt(g,'MEN OF COLOR',x,y-124,13,'#2a1a10','900');txt(g,'TO ARMS!',x,y-104,17,'#a02a22','900');txt(g,'54TH MASSACHUSETTS',x,y-80,8,'#2a1a10','700');ln(g,'#2a1a10',1.2,[x-50,y-70,x+50,y-70]);txt(g,'Frederick Douglass',x,y-58,7,'#2a1a10','700');
 rect(g,LEG2,x-60,y-40,4,40);rect(g,LEG2,x+56,y-40,4,40);
 const mv=((t*.35)%1);for(let q=0;q<5;q++)pers(g,x-250+q*44+mv*0,y+22-(q%2)*3,t*1.2+q,.54,1,BLU,CEL,(g2,b)=>{kepi(g2,b);ln(g2,'#3a2a1c',2.4,[12,-70+b,16,-124+b]);ln(g2,'#aeb0b8',1.2,[16,-124+b,16,-134+b])},{skin:'#6a3e26',hair:'#1a120c'});
 pers(g,x+120,y+22,t,.54,1,BLU,CEL,(g2,b)=>{kepi(g2,b);rect(g2,'#8a5a3a',10,-76+b,16,16)},{skin:'#6a3e26'});asta(g,x+170,y+24,130,t,'u',40);
 for(let q=0;q<3;q++)pers(g,x+190+q*30,y+30,t+q,.4,-1,['#3a3a46','#6a5a6a','#4a4a56'][q],'#2a2a30',(g2,b)=>{if(q==1)bon(g2,b,'#d8cfb8');else cil(g2,b)},{long:q==1})});
def('sxshaw',(g,x,y,t,a,k)=>{rect(g,'#8a8478',x-120,y-190,240,12);rect(g,'#a09a8c',x-130,y-14,260,14);rect(g,'#a09a8c',x-124,y-28,248,14);
 rect(g,'#9a9488',x-110,y-178,220,150);rect(g,'#6a4a30',x-96,y-166,192,124);rect(g,'#8a6a40',x-96,y-166,192,5);
 g.save();g.beginPath();g.rect(x-96,y-166,192,124);g.clip();
 cavallo(g,x-30,y-48,1.9,t*0,1,'#9a7a40');pers(g,x-30,y-72,0,1.1,1,'#9a7a40','#9a7a40',(g2,b)=>{kepi(g2,b,'#9a7a40')},{skin:'#b09050',hair:'#6a5a30'});
 for(let q=0;q<9;q++)pers(g,x-90+q*21+(q>3?44:0),y-34+(q%2)*8,q,.9-q*0.0,1,'#9a7a40','#9a7a40',(g2,b)=>{kepi(g2,b,'#9a7a40');ln(g2,'#7a5a28',2.6,[12,-70+b,18,-130+b])},{skin:'#b09050',hair:'#6a5a30',nolegs:0});
 g.restore();
 poly(g,'#7a6a38',[[x-14,y-166],[x+16,y-166],[x+4,y-196],[x-8,y-196]]);ln(g,'#9a8a48',3,[x-40,y-176,x-8,y-198,x+14,y-204,x+44,y-186]);
 oak(g,x-230,y-6,.8,t);oak(g,x+236,y-6,.8,t);for(let q=0;q<3;q++)pers(g,x-170+q*40,y+30,t+q,.5,q%2?1:-1,['#3a3a46','#6a5a6a','#4a4a56'][q],'#2a2a30',(g2,b)=>{if(q==1)bon(g2,b,'#d8cfb8');else cil(g2,b)},{long:q==1})});
def('sxcastle',(g,x,y,t,a,k)=>{acq(g,x-260,y-30,520,70,t,'#4a6a82','#7a9ab0');rect(g,'#8a6a44',x-260,y-6,520,16);for(let q=0;q<22;q++)rect(g,'#5a3e22',x-258+q*24,y+8,5,10);
 g.save();g.beginPath();g.ellipse(x-170,y-46,90,12,0,0,Math.PI*2);g.restore();rect(g,'#9a8a78',x-250,y-86,160,60);rect(g,'rgba(0,0,0,.14)',x-130,y-86,40,60);for(let q=0;q<7;q++)ar(g,'#2a2218',x-240+q*22,y-26,12,28);poly(g,'#5a5058',[[x-258,y-86],[x-170,y-128],[x-82,y-86]]);
 for(let q=0;q<3;q++)rect(g,['#c8a468','#8a5a3a','#6a4a30'][q],x-20+q*30,y-22-q*12+12,26,20);
 for(let q=0;q<7;q++)pers(g,x-60+q*34,y+22-(q%2)*3,t+q,.5,q%2?-1:1,['#6a5a4a','#4a5a6a','#7a5a4a','#5a4a5a'][q%4],'#3a3228',(g2,b)=>{if(q%3==1)bon(g2,b,'#c8b898');else cop(g2,b,'#3a3028')},{long:q%3==1});
 for(let q=0;q<2;q++)pers(g,x+160+q*38,y+22,t+q,.56,-1,'#27407a','#3a5a8a',(g2,b)=>{el(g2,'#2a2a30',0,-116+b,13,5);rect(g2,'#2a2a30',-9,-124+b,18,9);poly(g2,'#1a4a2a',[[-6,-124+b],[-16,-140+b],[-10,-146+b],[-2,-128+b]]);poly(g2,'#1a4a2a',[[2,-124+b],[-4,-142+b],[6,-144+b],[8,-126+b]])},{hair:'#2a1a10'});
 asta(g,x+110,y-10,130,t,'u',36);ln(g,LEG2,2,[x+60,y-10,x+60,y-120]);poly(g,'#2a8a4a',[[x+60,y-118],[x+86,y-112+Math.sin(t*3)*2],[x+86,y-98],[x+60,y-102]]);poly(g,BIA,[[x+60,y-110],[x+86,y-108],[x+86,y-98],[x+60,y-102]]);poly(g,ROS,[[x+73,y-114],[x+86,y-112],[x+86,y-98],[x+73,y-103]])});
/* ===== ZONA 5 · I campi di battaglia ===== */
def('sxcampo',(g,x,y,t,a,k)=>{for(let q=0;q<5;q++){const tx=x-250+q*80,ty=y-10-(q%2)*12,s=1-(q%2)*.18;poly(g,'#ece6d2',[[tx-34*s,ty],[tx,ty-48*s],[tx+34*s,ty]]);poly(g,'rgba(0,0,0,.16)',[[tx,ty-48*s],[tx+34*s,ty],[tx,ty]]);poly(g,'#2a2218',[[tx-6*s,ty],[tx,ty-24*s],[tx+6*s,ty]])}
 const fx=x+30,fy=y+12;glow(g,fx,fy-6,56,'255,170,80',.4+.15*Math.sin(t*6));for(let q=0;q<3;q++)poly(g,['#ff9a30','#ffd060','#ff6a20'][q],[[fx-6+q*6,fy],[fx-3+q*6,fy-12-q*2-Math.sin(t*9+q)*2],[fx+1+q*6,fy]]);ln(g,'#3a2a1c',3,[fx-10,fy+1,fx+16,fy-1]);
 rect(g,'#2a2a30',fx-18,fy-26,2,26);rect(g,'#2a2a30',fx+22,fy-26,2,26);ln(g,'#2a2a30',2,[fx-18,fy-26,fx+24,fy-26]);rect(g,'#2a3a48',fx+2,fy-22,8,9);fumo(g,fx+6,fy-26,t,'#b0b0b0',3,34);
 sold(g,x-110,y+22,t,2,40,{nofucile:1});pers(g,x+110,y+24,t,.54,-1,BLU,CEL,(g2,b)=>{kepi(g2,b);lm(g2,12,-84+b,22,-.3,3,'#e0b090');rect(g2,'#8a5a30',8,-70+b,16,6)},{hair:'#3a2a1a'});
 ln(g,'#7a5a38',3,[x+170,y+4,x+178,y-26]);dot(g,BIA,x+206+Math.sin(t*5)*3,y-50-Math.abs(Math.sin(t*5))*16,3);
 sold(g,x+190,y+16,t,2,34,{f:-1,nofucile:1});asta(g,x-200,y-12,150,t,'u',40)});
def('sxbullrun',(g,x,y,t,a,k)=>{poly(g,'#7a9a52',[[x-260,y-20],[x-120,y-100],[x+40,y-90],[x+260,y-30],[x+260,y],[x-260,y]]);fumata(g,x-80,y-96,t,4,24,'#b8b8b8');fumata(g,x+90,y-84,t,3,20,'#c0c0c0');
 for(let q=0;q<3;q++){const cx=x-200+q*130,cy=y+8-(q%2)*8;poly(g,'#2a2a30',[[cx-34,cy-22],[cx-30,cy-6],[cx+30,cy-6],[cx+38,cy-28]]);rect(g,'#c8402a',cx-34,cy-10,70,3);for(const wx of[-18,22]){dot(g,'#3a2a1c',wx+cx,cy,12);dot(g,'#8a6a3a',wx+cx,cy,9);dot(g,'#3a2a1c',wx+cx,cy,2.6)}pers(g,cx-6,cy-6,t+q,.5,1,['#c86a8a','#6a8ac8','#8ac86a'][q],'#4a4a56',(g2,b)=>{bon(g2,b,'#e8dcc8');ln(g2,'#c8402a',2,[16,-76+b,24,-118+b]);el(g2,'#e8dcc8',24,-122+b,18,5)},{long:1,skin:'#e8b890'});cavallo(g,cx-50,cy-2,.8,t,1,['#6a4a2a','#2a2a2a','#8a5a3a'][q])}
 rect(g,'#c8402a',x-20,y+10,30,18);rect(g,BIA,x-20,y+10,30,4);rect(g,'#8a6a3a',x-22,y+8,34,3);
 sold(g,x+90,y+24,t,2,36,{gray:1,f:-1});sold(g,x+60,y+16,t,1,0,{f:-1});for(let q=0;q<2;q++)pers(g,x+150+q*34,y+24,t+q,.5,-1,['#3a3a46','#4a4a56'][q],'#2a2a30',(g2,b)=>{cil(g2,b);ln(g2,'#3a2a1c',2,[12,-70+b,10,-60+b]);rect(g2,'#1c1c20',10,-100+b,8,6)})});
def('sxantietam',(g,x,y,t,a,k)=>{for(let q=0;q<16;q++){const cx=x-250+q*16;for(let r=0;r<3;r++){ln(g,'#7a9a3a',3,[cx+r*5,y-4,cx+r*5+Math.sin(t+q)*1,y-60-hr(q+r)*10]);ln(g,'#a8a050',1.4,[cx+r*5,y-60-hr(q+r)*10,cx+r*5-3,y-70-hr(q+r)*10])}}
 rect(g,BIA,x-30,y-70,90,60);rect(g,'rgba(0,0,0,.1)',x+40,y-70,20,60);poly(g,'#7a7a82',[[x-36,y-70],[x+15,y-108],[x+66,y-70]]);poly(g,BIA,[[x-28,y-72],[x+15,y-100],[x+58,y-72]]);ar(g,'#2a3a48',x-18,y-14,14,28);ar(g,'#2a3a48',x+36,y-14,14,28);rect(g,'#2a3a48',x+10,y-44,10,20);
 const bx=x+170;rect(g,'#8a8478',bx-70,y-40,140,16);for(let q=0;q<3;q++)ar(g,'#3a4a5a',bx-52+q*40,y-4,24,24);rect(g,'#6a645a',bx-76,y-46,152,8);acq(g,bx-80,y-6,160,16,t,'#5a7a8a','#7a9aaa');
 pers(g,x-110,y+20,t,.56,1,'#2a2a34','#2a2a34',(g2,b)=>{rect(g2,BIA,-9,-70+b,18,34);lm(g2,12,-84+b,20,.6,3,'#e8b890')},{long:1,hair:'#4a2a1a',skin:'#e8b890'});
 carro(g,x-170,y+6,.9,t,1);rect(g,BIA,x-190,y-38,36,16);poly(g,'#c8c0a8',[[x-192,y-38],[x-172,y-52],[x-152,y-38]]);
 sold(g,x+60,y+26,t,2,30,{gray:1})});
def('sxfotografo',(g,x,y,t,a,k)=>{poly(g,'#1c1c20',[[x-130,y-90],[x-120,y-8],[x+40,y-8],[x+50,y-96]]);rect(g,'#8a6a40',x-130,y-96,180,10);rect(g,'#f0e8d0',x-100,y-80,120,26);txt(g,'PHOTOGRAPHIC ART',x-40,y-72,7,'#2a1a10','900');txt(g,'GALLERY · BRADY',x-40,y-60,7,'#2a1a10','700');dot(g,'#3a2a1c',x-100,y,16);dot(g,'#8a6a3a',x-100,y,12);dot(g,'#3a2a1c',x+10,y,16);dot(g,'#8a6a3a',x+10,y,12);
 const cx=x+120;ln(g,LEG2,3,[cx-18,y+10,cx,y-56]);ln(g,LEG2,3,[cx+18,y+10,cx,y-56]);ln(g,LEG2,3,[cx,y+12,cx,y-56]);rect(g,'#6a4a2a',cx-14,y-84,30,28);rect(g,'#14110f',cx-26,y-80,12,20);dot(g,'#aab6c8',cx-26,y-70,4);poly(g,'#1c1c20',[[cx+14,y-84],[cx+50,y-70],[cx+44,y-40],[cx+14,y-56]]);
 pers(g,cx+34,y+16,t,.58,-1,'#3a3a46','#2a2a30',(g2,b)=>{el(g2,'#1c1c24',0,-114+b,15,4);rect(g2,'#1c1c24',-8,-126+b,16,13)},{hair:'#2a1a10'});
 sold(g,x+200,y+24,t,1,0,{f:-1,nofucile:1});for(let q=0;q<3;q++)rect(g,'#6a5a3a',x-190+q*0,y-10,0,0);
 for(let q=0;q<7;q++){ln(g,LEG2,2,[x-250+q*14,y+6,x-250+q*14,y-30]);}ln(g,LEG2,2,[x-250,y-24,x-166,y-24]);ln(g,LEG2,2,[x-250,y-10,x-166,y-10])});
def('sxgettysburg',(g,x,y,t,a,k)=>{grano(g,x-260,y-30,520,t,'#c8b850');
 for(let q=0;q<7;q++){el(g,'#2e5a30',x+30+q*10,y-96-hr(q)*10,12,16);ln(g,'#4a3a2a',2,[x+30+q*10,y-80,x+30+q*10,y-60])}
 for(let q=0;q<40;q++){const sx=x-250+q*12.5,sy=y-34+(q%3)*2,h=8+hr(q)*4;rect(g,['#8a867c','#7a766c','#9a968c'][q%3],sx,sy-h,13,h+4);rect(g,'rgba(0,0,0,.2)',sx,sy+2,13,2)}
 for(let q=0;q<2;q++)cannone2(g,x+90+q*80,y-4,.8,-1,t+q,q==0);fumata(g,x+60,y-30,t,3,22,'#a8a8ac');fumata(g,x-40,y-100,t,3,28,'#9a9aa0');
 for(let q=0;q<10;q++){const px=x-250+q*18,py=y-70-(q%2)*6;rect(g,'#7a7a74',px,py-10,3,10);dot(g,'#8a6a5a',px+1,py-12,2)}
 sold(g,x-120,y+22,t,1,0,{f:1});pers(g,x-60,y+20,t,.56,-1,BLU,CEL,(g2,b)=>{kepi(g2,b);ln(g2,'#3a2a1c',2.4,[12,-70+b,16,-124+b])},{hair:'#3a2a1a'});
 asta(g,x+230,y-30,110,t,'u',34);asta(g,x-230,y-34,100,t,'b',30)});
def('sxcimitero',(g,x,y,t,a,k)=>{for(let q=0;q<30;q++){const ang=Math.PI*(.12+q*.025),gx=x-30+Math.cos(ang)*-1*0+(q-15)*17,gy=y+16+Math.abs(q-15)*1.6;ar(g,'#d8d4c8',gx-3,gy,6,10)}
 rect(g,'#8a6a44',x-80,y-30,160,30);rect(g,'#6a4a2a',x-84,y-34,168,5);for(let q=0;q<9;q++)rect(g,'#6a4a2a',x-76+q*19,y-30,3,30);
 for(let q=0;q<5;q++){poly(g,[ROS,BIA,'#27407a','#ROS'.length?ROS:BIA,BIA][q],[[x-80+q*32,y-34],[x-48+q*32,y-34],[x-64+q*32,y-14]])}
 pers(g,x,y-34,t,.8,-1,'#1c1c24','#1c1c24',(g2,b)=>{stov(g2,b);barba(g2,b,'#1a1008',6)},{skin:'#d8a880',hair:'#1a1008'});
 rect(g,'#6a4a2a',x+10,y-70,24,40);rect(g,'#7a5a38',x+8,y-74,28,4);
 for(let q=0;q<9;q++)pers(g,x-250+q*32+(q>4?200:0),y+30+(q%2)*5,t+q,.5,q%2?1:-1,['#3a3a46','#6a5a6a','#4a4a56','#3a3a3a'][q%4],'#2a2a30',(g2,b)=>{if(q%4==1)bon(g2,b,'#d8cfb8');else if(q%3==2)kepi(g2,b);else cil(g2,b)},{long:q%4==1});
 oak(g,x-240,y-4,.9,t);asta(g,x+120,y-26,150,t,'u',40)});
/* ===== ZONA 6 · Il Mississippi e il mare ===== */
def('sxfiume',(g,x,y,t,a,k)=>{acq(g,x-260,y-20,520,60,t,'#8a7a5a','#a8987a');vap(g,x-20,y-6,t,1.1,1,{});
 pila(g,x+170,y-8,3,1);pers(g,x-150,y-24,t,.5,1,'#6a6a7a','#3a3a3e',(g2,b)=>{cop(g2,b,'#3a3a40');lm(g2,12,-84+b,26,.6,3,'#e0b090');ln(g2,'#c8b890',1.4,[34,-70+b,40,-26+b]);dot(g2,'#5a5a60',40,-24+b,3)},{hair:'#3a2a1a'});
 rect(g,'#7a5a38',x+110,y-6,150,10);for(let q=0;q<5;q++)rect(g,'#5a3e22',x+120+q*30,y+4,5,14);
 for(let q=0;q<3;q++)pers(g,x+210+q*16,y-6+(q%2)*2,t+q,.46,-1,['#c8b898','#9a8a6a','#b8a888'][q],'#5a4a38',(g2,b)=>{slouch(g2,b,'#b8a070')},{skin:'#7a4a2e'});});
def('sxcorazzata',(g,x,y,t,a,k)=>{acq(g,x-260,y-16,520,50,t,'#6a7a6a','#8a9a82');const bx=x-10;
 poly(g,'#2a2a30',[[bx-130,y-18],[bx-110,y+2],[bx+110,y+2],[bx+132,y-18]]);poly(g,'#3a3a44',[[bx-96,y-18],[bx-70,y-70],[bx+70,y-70],[bx+96,y-18]]);poly(g,'rgba(255,255,255,.07)',[[bx-70,y-70],[bx+70,y-70],[bx+60,y-60],[bx-62,y-60]]);
 for(let q=0;q<7;q++){const px=bx-76+q*22;rect(g,'#14141a',px,y-50,14,10);ln(g,'#4a4a54',1,[px-3,y-18,px+3,y-70])}
 rect(g,'#2a2a30',bx-6,y-102,12,34);fumo(g,bx,y-104,t,'#4a4a52',5,70);dot(g,'#5a3a2a',bx+140,y-8,18);for(let q=0;q<8;q++){const b2=t*2+q*Math.PI/4;ln(g,'#7a4a30',2.4,[bx+140,y-8,bx+140+Math.cos(b2)*18,y-8+Math.sin(b2)*18])}
 asta(g,bx-100,y-70,50,t,'u',30);rect(g,'#7a6a5a',x-250,y+12,70,0);cannone(g,bx+170,y+22,.7,-1,t)});
def('sxvicksburg',(g,x,y,t,a,k)=>{poly(g,'#b89a62',[[x-260,y-20],[x-220,y-130],[x-140,y-170],[x,y-176],[x+120,y-150],[x+210,y-120],[x+260,y-30],[x+260,y+6],[x-260,y+6]]);for(let q=0;q<8;q++)ln(g,'rgba(80,50,20,.25)',1.6,[x-240+q*60,y-110+q%3*10,x-228+q*60,y-10]);
 for(let q=0;q<4;q++){const cx=x-170+q*104,cy=y-30-(q%2)*30;ar(g,'#1c140c',cx-22,cy,44,36);rect(g,'rgba(255,200,120,.35)',cx-16,cy-14,32,18);rect(g,'#c8a468',cx-28,cy-4,6,18);rect(g,k>.3?'#ffcf70':'#6a4a2a',cx-6,cy-10,10,10)}
 rect(g,'#f0ecdc',x-30,y-212,60,36);poly(g,'#f0ecdc',[[x-34,y-212],[x,y-232],[x+34,y-212]]);for(let q=0;q<5;q++)rect(g,'#faf6e8',x-26+q*12,y-208,5,30);rect(g,'#e4dfcc',x-8,y-248,16,16);poly(g,'#6a6a66',[[x-10,y-248],[x,y-260],[x+10,y-248]]);
 cannone(g,x+160,y-120,.7,-1,t);fumata(g,x+130,y-136,t,3,16,'#a8a8aa');
 pers(g,x-100,y+22,t,.5,1,'#6a4a5a','#4a3a3a',(g2,b)=>{bon(g2,b,'#d8cfb8')},{long:1,hair:'#4a2a1a'});pers(g,x-70,y+26,t,.36,1,'#c8b898','#6a5a44',(g2,b)=>{},{hair:'#3a2a1a'});
 pers(g,x+70,y+22,t,.54,-1,GRI,'#7a7a74',(g2,b)=>{slouch(g2,b,'#6a6a64')},{hair:'#3a2a1a'})});
def('sxresa',(g,x,y,t,a,k)=>{for(let q=0;q<4;q++){const cx=x-220+q*38,cy=y+4;ln(g,'#3a3a3e',2.4,[cx-14,cy,cx,cy-46]);ln(g,'#3a3a3e',2.4,[cx+14,cy,cx,cy-46]);ln(g,'#3a3a3e',2.4,[cx,cy+2,cx,cy-46]);ln(g,'#9a9aa2',1.4,[cx,cy-46,cx,cy-58])}
 asta(g,x+170,y-6,190,t,'u',44);ln(g,LEG2,2.4,[x-60,y-6,x-60,y-120]);poly(g,'#f4f0e4',[[x-60,y-118],[x-26,y-112+Math.sin(t*3)*2],[x-26,y-90],[x-60,y-96]]);
 pers(g,x-30,y+20,t,.56,1,GRI,'#7a7a74',(g2,b)=>{slouch(g2,b,'#6a6a64');lm(g2,12,-84+b,24,-.3,3,'#e0b090')},{hair:'#3a2a1a'});pers(g,x+34,y+20,t,.56,-1,BLU,CEL,(g2,b)=>{kepi(g2,b);lm(g2,12,-84+b,24,-.3,3,'#e0b090');rect(g2,'#c8a468',16,-76+b,12,8)},{hair:'#3a2a1a'});
 rect(g,'#c8a468',x-2,y-12,0,0);rect(g,'#6a4a2a',x-8,y+8,16,8);
 sold(g,x+80,y+26,t,2,30,{f:-1,nofucile:1});sold(g,x-120,y+26,t,2,30,{gray:1,nofucile:1})});
def('sxmonitor',(g,x,y,t,a,k)=>{acq(g,x-260,y-30,520,80,t,'#4a6a7a','#7a9aa8');
 const mx=x-110+Math.sin(t*.8)*4;rect(g,'#2a2a34',mx-70,y-22,140,12);poly(g,'#1c1c24',[[mx-76,y-10],[mx-68,y+2],[mx+68,y+2],[mx+78,y-10]]);rect(g,'#3a3a46',mx-20,y-52,44,30);rect(g,'rgba(255,255,255,.08)',mx-20,y-52,44,4);rect(g,'#14141a',mx+12,y-40,14,8);rect(g,'#3a3a46',mx-66,y-30,20,8);rect(g,'#2a2a30',mx+40,y-50,8,28);fumo(g,mx+44,y-52,t,'#4a4a52',4,50);
 const vx=x+110;poly(g,'#2a2a30',[[vx-110,y-14],[vx-96,y+4],[vx+96,y+4],[vx+120,y-14]]);poly(g,'#3a3a44',[[vx-92,y-14],[vx-66,y-62],[vx+66,y-62],[vx+92,y-14]]);for(let q=0;q<5;q++)rect(g,'#14141a',vx-52+q*22,y-44,12,9);rect(g,'#2a2a30',vx-4,y-94,12,32);fumo(g,vx+2,y-96,t,'#4a4a52',5,70);poly(g,'#4a4a52',[[vx-124,y-6],[vx-110,y-14],[vx-110,y+1]]);
 asta(g,vx+70,y-62,50,t,'c',28);asta(g,mx-60,y-30,40,t,'u',26);
 const f=(t*1.3)%1;if(f<.3)glow(g,mx+20,y-36,60,'255,200,100',.8*(1-f/.3));if(f>.5&&f<.8)glow(g,vx-50,y-40,60,'255,200,100',.8*(1-(f-.5)/.3));fumata(g,x,y-40,t,5,24,'#a8a8ae');fumata(g,x-40,y-50,t+.4,4,20,'#9a9aa0')});
/* ===== ZONA 7 · Dalla Virginia ad Appomattox ===== */
def('sxrichmond',(g,x,y,t,a,k)=>{poly(g,'#7a8a52',[[x-260,y-10],[x-100,y-70],[x+120,y-70],[x+260,y-10],[x+260,y],[x-260,y]]);
 rect(g,'#f2eee0',x-80,y-136,170,66);rect(g,'rgba(0,0,0,.1)',x+60,y-136,30,66);poly(g,'#f8f4e6',[[x-90,y-136],[x+5,y-176],[x+100,y-136]]);poly(g,'rgba(0,0,0,.08)',[[x+5,y-176],[x+100,y-136],[x+5,y-136]]);
 for(let q=0;q<6;q++){const cx=x-72+q*30;rect(g,'#faf6e8',cx,y-134,9,64);rect(g,'#fffdf4',cx-2,y-138,13,5);rect(g,'rgba(0,0,0,.1)',cx+6,y-134,3,64)}
 for(let q=0;q<9;q++)rect(g,'#e4dfcc',x-90+q*21,y-66+(q%2)*0,18,3);
 rect(g,MAT,x-250,y-80,100,64);for(let q=0;q<3;q++){rect(g,'#2a2a30',x-238+q*30,y-66,16,24)}for(const cx of[-220,-170]){rect(g,'#7a3a2a',x+cx-7,y-170,14,92);rect(g,'#4a2a20',x+cx-9,y-174,18,6);fumo(g,x+cx,y-174,t,'#3a3a3e',5,90)}
 for(let q=0;q<5;q++)pers(g,x-60+q*34,y+22-(q%2)*3,t+q,.5,q%2?1:-1,['#8a6a5a','#6a5a6a','#7a5a4a','#5a5a6a','#8a7a6a'][q],'#4a4036',(g2,b)=>{bon(g2,b,['#c8b898','#a89878'][q%2]);rect(g2,'#8a6a3a',10,-66+b,16,10)},{long:1,hair:'#4a3020',skin:'#e0b090'});
 asta(g,x+230,y-70,130,t,'c',36)});
def('sxarlington',(g,x,y,t,a,k)=>{poly(g,'#7a9a52',[[x-260,y-20],[x-140,y-92],[x+140,y-92],[x+260,y-20],[x+260,y+6],[x-260,y+6]]);
 rect(g,'#e4d8b0',x-130,y-150,260,62);rect(g,'rgba(0,0,0,.1)',x+90,y-150,40,62);rect(g,'#d8ccA0'.toLowerCase(),x-130,y-152,260,5);poly(g,'#7a6a5a',[[x-136,y-150],[x-90,y-170],[x+90,y-170],[x+136,y-150]]);
 poly(g,'#e4d8b0',[[x-76,y-150],[x,y-188],[x+76,y-150]]);rect(g,'#f0e8c8',x-76,y-150,152,6);
 for(let q=0;q<8;q++){const cx=x-70+q*19;rect(g,'#f0e8c8',cx,y-146,11,60);rect(g,'rgba(0,0,0,.12)',cx+7,y-146,4,60)}
 for(let q=0;q<4;q++){rect(g,'#2a2218',x-110+q*0,y-130,0,0)}
 for(let r=0;r<4;r++)for(let q=0;q<22;q++){const gx=x-230+q*21+(r%2)*10,gy=y-40+r*17;ar(g,'#e8e4d8',gx,gy,7,11);rect(g,'rgba(0,0,0,.18)',gx+4,gy+2,3,9)}
 oak(g,x-240,y-30,.9,t);oak(g,x+240,y-30,.9,t);asta(g,x+170,y-84,70,t,'u',26)});
def('sxpetersburg',(g,x,y,t,a,k)=>{for(let r=0;r<2;r++){const yy=y-20+r*24;g.fillStyle=tn(r?'#6a4a2a':'#7a5a38');g.beginPath();g.moveTo(x-260,yy);for(let q=0;q<27;q++)g.lineTo(x-260+q*20,yy+(q%2?-14:0));g.lineTo(x+260,yy+16);g.lineTo(x-260,yy+16);g.fill();for(let q=0;q<26;q++)rect(g,'#c8b078',x-258+q*20,yy-(q%2?14:0)+(q%2?0:0),8,6)}
 el(g,'#3a2a1c',x+30,y+14,110,20);el(g,'#5a4a34',x+30,y+10,96,14);for(let q=0;q<6;q++)dot(g,'rgba(120,90,60,.8)',x-30+q*22,y+8+(q%2)*5,3);fumata(g,x+30,y-6,t,4,22,'#8a7a6a');
 sold(g,x-220,y+4,t,2,60,{nofucile:0,gray:1,f:1});sold(g,x-120,y-10,t,1,0,{f:1});sold(g,x+170,y-16,t,2,50,{f:-1});
 cannone(g,x-70,y-22,.8,1,t);ln(g,'#6a4a2a',3,[x+190,y-20,x+210,y-52]);asta(g,x+226,y-22,60,t,'u',24)});
def('sxappvillage',(g,x,y,t,a,k)=>{rect(g,'#9a4a34',x-150,y-120,150,106);rect(g,'rgba(0,0,0,.14)',x-40,y-120,40,106);for(let r=0;r<10;r++)rect(g,'rgba(40,10,0,.18)',x-150,y-120+r*10,150,1);poly(g,'#4e5662',[[x-156,y-120],[x-75,y-150],[x+6,y-120]]);rect(g,'#f4ecd4',x-96,y-170,42,26);rect(g,'#f4ecd4',x-86,y-190,22,22);poly(g,'#5a5058',[[x-90,y-190],[x-75,y-204],[x-60,y-190]]);
 for(let q=0;q<3;q++)for(let r=0;r<2;r++){ar(g,'#2a2a34',x-132+q*40,y-60-r*40,14,26)}rect(g,'#f4ecd4',x-108,y-14,0,0);ar(g,'#2a1a10',x-86,y-14,22,34);
 rect(g,'#e8e0cc',x+30,y-90,120,76);rect(g,'rgba(0,0,0,.1)',x+120,y-90,30,76);poly(g,'#6a5a48',[[x+24,y-90],[x+90,y-120],[x+156,y-90]]);rect(g,'#c8b898',x+30,y-52,120,5);for(let q=0;q<6;q++)rect(g,LEG2,x+36+q*22,y-52,4,38);for(let q=0;q<2;q++){rect(g,'#2a3a48',x+50+q*50,y-82,14,22)}
 for(let q=0;q<3;q++){const tx=x+200+q*0;}
 for(const tx of[x-210,x+190,x+240]){rect(g,'#5a4430',tx-3,y-50,6,50);for(let q=0;q<14;q++)dot(g,q%3?BIA:'#f0e0e0',tx+Math.cos(q)*(14+hr(q)*10),y-70+Math.sin(q*2)*(14+hr(q+3)*8),4.6)}
 sold(g,x-30,y+24,t,2,36,{gray:1,f:-1,nofucile:1});sold(g,x+170,y+26,t,1,0,{gray:1});g.save();rect(g,'#7a7a74',x+50,y+26,0,0);g.restore()});
def('sxmclean',(g,x,y,t,a,k)=>{rect(g,'#b05a40',x-120,y-146,240,136);rect(g,'rgba(0,0,0,.14)',x+80,y-146,40,136);for(let r=0;r<13;r++)rect(g,'rgba(40,10,0,.18)',x-120,y-146+r*10,240,1);poly(g,'#4e5662',[[x-130,y-146],[x,y-176],[x+130,y-146]]);
 rect(g,'#f4ecd4',x-100,y-136,180,3);for(let q=0;q<5;q++){rect(g,'#faf6e8',x-100+q*44,y-136,8,126)}rect(g,'#f4ecd4',x-102,y-76,184,4);
 rect(g,'#2a2218',x-72,y-122,134,38);rect(g,'#d8c090',x-68,y-118,126,30);glow(g,x-6,y-100,70,LUC,.3+.3*k);
 pers(g,x-34,y-84,t,.34,1,'#8e8e88','#7a7a74',(g2,b)=>{slouch(g2,b,'#6a6a64');el(g2,'#d8d4c8',3,-96+b,8,5)},{hair:'#d8d4c8',skin:'#e0b090'});pers(g,x+20,y-84,t,.34,-1,BLU,BLU,(g2,b)=>{slouch(g2,b,'#4a4238')},{hair:'#5a3a20'});rect(g,'#6a4a2a',x-8,y-96,14,8);
 ar(g,'#2a1a10',x-14,y-10,28,44);for(const wx of[-80,48])rect(g,'#2a2a34',x+wx,y-58,16,36);
 cavallo(g,x-190,y+14,.9,t,1,'#9a9a96');cavallo(g,x+196,y+14,.9,t,-1,'#5a3a22');ln(g,'#3a2a1c',2,[x-170,y-18,x-130,y-30]);ln(g,'#3a2a1c',2,[x+176,y-18,x+130,y-30])});
def('sxarmi',(g,x,y,t,a,k)=>{sold(g,x-250,y+4,t,5,34,{gray:1,f:1,nofucile:0});sold(g,x+20,y+4,t,6,34,{f:-1,nofucile:0});
 for(let q=0;q<3;q++){const cx=x-40+q*0;}
 for(let q=0;q<3;q++){const cx=x-70+q*36,cy=y+30;ln(g,'#3a3a3e',2.4,[cx-14,cy,cx,cy-40]);ln(g,'#3a3a3e',2.4,[cx+14,cy,cx,cy-40]);ln(g,'#3a3a3e',2.4,[cx,cy+2,cx,cy-40])}
 asino(g,x+220,y+22,.9,t,-1,'#7a6a58');cavallo(g,x-180,y-26,.7,t,1,'#8a8a86');asta(g,x-100,y-44,140,t,'c',30);asta(g,x+150,y-44,140,t,'u',34)});

/* ===== ZONA 8 · L'Europa e il mondo ===== */
def('sxmanchester',(g,x,y,t,a,k)=>{rect(g,MAT2,x-250,y-190,200,180);rect(g,'rgba(0,0,0,.18)',x-100,y-190,50,180);for(let r=0;r<5;r++)for(let q=0;q<7;q++){rect(g,'#2a2a30',x-238+q*27,y-176+r*34,16,22);rect(g,'#5a6a7a',x-236+q*27,y-174+r*34,12,18)}
 rect(g,'#6a2a20',x-60,y-300,20,290);rect(g,'#3a1a14',x-64,y-304,28,7);
 for(let q=0;q<2;q++)rect(g,'#c8a468',x-20+q*0,y-24,0,0);
 for(let q=0;q<3;q++){rect(g,'#d8cfb4',x+0+q*0,y-20,0,0)}pila(g,x+170,y-6,2,.9);txt(g,'SURAT',x+170,y-48,8,'#6a4a2a','900');
 rect(g,'#7a7a7e',x-20,y-46,120,34);rect(g,'#6a6a6e',x-20,y-46,120,5);for(let q=0;q<3;q++)rect(g,'#3a3a3e',x-8+q*40,y-60,0,0);txt(g,'SOUP KITCHEN',x+40,y-30,8,'#f4ecd4','900');
 for(let q=0;q<6;q++)pers(g,x-10+q*30,y+24-(q%2)*3,t+q,.5,-1,['#4a4a52','#5a4a4a','#3a3a46','#6a5a5a','#4a4a52','#3a4a4a'][q],'#2a2a30',(g2,b)=>{if(q%3==1)bon(g2,b,'#a8a090');else{poly(g2,'#3a3a40',[[-12,-104+b],[0,-114+b],[12,-104+b],[10,-90+b],[-10,-90+b]])}},{long:1,hair:'#5a4028',skin:'#e0b090'});
 g.strokeStyle='rgba(190,200,215,.5)';g.lineWidth=1;for(let q=0;q<40;q++){const rx=x-250+hr(q)*500,ry=y-300+((t*180+q*37)%300);g.beginPath();g.moveTo(rx,ry);g.lineTo(rx-4,ry+12);g.stroke()}});
def('sxfreetrade',(g,x,y,t,a,k)=>{rect(g,'#bfb6a0',x-250,y-150,230,140);rect(g,'rgba(0,0,0,.12)',x-70,y-150,50,140);rect(g,'#a89e88',x-254,y-154,238,8);
 for(let q=0;q<6;q++){ar(g,'#3a3a44',x-232+q*36,y-120,22,40);ar(g,'#3a3a44',x-232+q*36,y-70,22,40);rect(g,k>.3?'#ffd88a':'#7a8a9a',x-228+q*36,y-114,14,30)}
 poly(g,'#8a8478',[[x-254,y-154],[x-135,y-184],[x-16,y-154]]);rect(g,'#6a645a',x-250,y-10,230,8);
 rect(g,'#f4ecd4',x-200,y-210,0,0);rect(g,'#c8402a',x-180,y-176,100,18);txt(g,'FREE TRADE HALL',x-130,y-163,8,'#f4ecd4','900');
 const lx=x+60;rect(g,'#6a4a2a',lx-4,y-70,8,70);rect(g,'#7a5a38',lx-40,y-76,80,8);poly(g,'#f4ecd4',[[lx-34,y-78],[lx+34,y-78],[lx+28,y-128],[lx-28,y-128]]);for(let q=0;q<6;q++)ln(g,'#6a5a48',1,[lx-22,y-120+q*7,lx+22,y-120+q*7+(q==5?-3:0)]);dot(g,'#a02a22',lx+14,y-86,7);dot(g,'#c8402a',lx+14,y-86,4.4);
 for(let q=0;q<5;q++)bala(g,x+160+(q%3)*30,y-4-Math.floor(q/3)*22,1,'#d8c8a0');txt(g,'FLOUR',x+190,y-60,8,'#6a4a2a','900');
 asta(g,x-20,y-154,70,t,'u',30);fol(g,x-80,y+24,t,5,36,{c1:'#4a4a52'})});
def('sxcherbourg',(g,x,y,t,a,k)=>{acq(g,x-260,y-60,520,110,t,'#4a7a96','#7aa8c0');
 rect(g,'#8a8478',x-260,y-34,170,18);for(let q=0;q<10;q++)rect(g,'#6a645a',x-256+q*17,y-18,12,6);fol(g,x-240,y-34,t,6,26,{s:.42});
 pers(g,x-60,y+22,t,.56,1,'#3a3a46','#2a2a30',(g2,b)=>{el(g2,'#1c1c24',0,-116+b,14,4);rect(g2,'#1c1c24',-8,-126+b,16,13);poly(g2,'#6a4a2a',[[12,-68+b],[30,-74+b],[30,-44+b],[12,-48+b]])},{hair:'#2a1a10'});ln(g,LEG2,2.6,[x-30,y+30,x-20,y-8]);poly(g,'#f0e8d0',[[x-30,y-24],[x-4,y-28],[x-4,y-6],[x-30,y-2]]);
 const ax=x+10+Math.sin(t*.5)*3;poly(g,'#1c1c24',[[ax-70,y-44],[ax-60,y-24],[ax+66,y-24],[ax+80,y-46]]);for(const mx of[-36,0,34]){ln(g,LEG2,3,[ax+mx,y-44,ax+mx,y-130]);poly(g,'#d8d0b8',[[ax+mx+2,y-124],[ax+mx+22,y-118],[ax+mx+22,y-62],[ax+mx+2,y-60]])}rect(g,'#2a2a30',ax+12,y-86,8,40);fumo(g,ax+16,y-88,t,'#4a4a52',5,60);
 const kx=x+170;poly(g,'#2a2a34',[[kx-60,y-30],[kx-50,y-12],[kx+56,y-12],[kx+70,y-32]]);ln(g,LEG2,3,[kx-20,y-30,kx-20,y-110]);ln(g,LEG2,3,[kx+22,y-30,kx+22,y-110]);rect(g,'#2a2a30',kx-4,y-84,8,50);fumo(g,kx,y-86,t,'#4a4a52',5,60);asta(g,kx+40,y-32,60,t,'u',24);
 const f=(t*1.2)%1;if(f<.3)glow(g,ax+60,y-50,60,'255,200,100',.8*(1-f/.3));if(f>.5&&f<.8)glow(g,kx-40,y-44,60,'255,200,100',.8*(1-(f-.5)/.3));fumata(g,x+90,y-44,t,6,24,'#a8a8ae');
 poly(g,'#f4ecd4',[[x+240,y-16],[x+230,y-80],[x+256,y-24]]);rect(g,'#3a3a44',x+226,y-18,34,6)});
def('sxpuebla',(g,x,y,t,a,k)=>{poly(g,'#8a8a56',[[x-260,y-10],[x-170,y-100],[x-60,y-120],[x+40,y-90],[x+150,y-130],[x+260,y-40],[x+260,y],[x-260,y]]);
 for(const fx of[-110,140]){rect(g,'#efe6cc',x+fx-50,y-150-(fx>0?20:0),100,50);rect(g,'rgba(0,0,0,.1)',x+fx+20,y-150-(fx>0?20:0),30,50);for(let q=0;q<7;q++)rect(g,'#efe6cc',x+fx-50+q*15,y-158-(fx>0?20:0),9,8);ar(g,'#2a2218',x+fx-8,y-102-(fx>0?20:0),16,28);ln(g,LEG2,2,[x+fx,y-150-(fx>0?20:0),x+fx,y-188-(fx>0?20:0)]);
  poly(g,'#2a8a4a',[[x+fx+1,y-188-(fx>0?20:0)],[x+fx+13,y-186-(fx>0?20:0)],[x+fx+13,y-172-(fx>0?20:0)],[x+fx+1,y-174-(fx>0?20:0)]]);poly(g,BIA,[[x+fx+5,y-187-(fx>0?20:0)],[x+fx+13,y-186-(fx>0?20:0)],[x+fx+13,y-172-(fx>0?20:0)],[x+fx+5,y-173-(fx>0?20:0)]]);poly(g,ROS,[[x+fx+9,y-187-(fx>0?20:0)],[x+fx+14,y-186-(fx>0?20:0)],[x+fx+14,y-172-(fx>0?20:0)],[x+fx+9,y-173-(fx>0?20:0)]])}
 for(let q=0;q<4;q++)pers(g,x-250+q*30,y+24-(q%2)*3,t+q,.5,1,'#e8e0cc','#e8e0cc',(g2,b)=>{el(g2,'#d8c890',2,-112+b,18,4.4);rect(g2,'#d8c890',-8,-123+b,17,11);ln(g2,'#3a2a1c',2.4,[12,-70+b,16,-124+b])},{skin:'#9a6a46',hair:'#1a120c'});
 for(let q=0;q<4;q++)pers(g,x+90+q*32,y+24-(q%2)*3,t+q,.5,-1,'#27407a','#c8302a',(g2,b)=>{el(g2,'#c8302a',0,-116+b,10,6);rect(g2,'#c8302a',-9,-120+b,18,8);ln(g2,'#d8c890',1.4,[12,-70+b,16,-100+b])},{hair:'#3a2a1a'});
 cannone2(g,x-30,y+8,.8,1,t,1);fumata(g,x-80,y-12,t,4,24,'#a8a8ae');fumata(g,x+60,y-20,t,3,22,'#b0b0b4')});
def('sxitalia',(g,x,y,t,a,k)=>{acq(g,x-260,y-70,520,60,t,'#4a7a96','#7aa8c0');poly(g,'#8a8a6a',[[x-260,y-70],[x-180,y-110],[x-80,y-80],[x-20,y-70]]);poly(g,'#7a7a5a',[[x+100,y-70],[x+180,y-100],[x+260,y-70]]);
 poly(g,'#6a645a',[[x-150,y+10],[x-120,y-30],[x-30,y-40],[x+60,y-24],[x+80,y+10]]);
 ln(g,LEG2,3,[x+30,y-30,x+30,y-170]);const w=Math.sin(t*2.6)*3;poly(g,'#2a8a4a',[[x+31,y-168],[x+58,y-166+w],[x+58,y-126+w],[x+31,y-128]]);poly(g,BIA,[[x+44,y-167],[x+58,y-166+w],[x+58,y-126+w],[x+44,y-127]]);poly(g,ROS,[[x+51,y-167],[x+66,y-166+w],[x+66,y-126+w],[x+51,y-127]]);
 pers(g,x-30,y-36,t,.7,1,'#b8302a','#e8e0cc',(g2,b)=>{poly(g2,'#d8d0b8',[[-14,-76+b],[-26,-30],[26,-30],[14,-76+b]]);el(g2,'#f4f0e4',1,-112+b,12,5);rect(g2,'#f4f0e4',-8,-122+b,16,10);barba(g2,b,'#d8b890',3)},{skin:'#e0b090',hair:'#c8a070'});
 vap(g,x+190,y-60,t,.4,-1,{nosmoke:1});poly(g,'#f4ecd4',[[x-200,y-16],[x-190,y-60],[x-160,y-14]]);poly(g,'#e8e0cc',[[x-196,y-16],[x-190,y-50],[x-174,y-14]]);rect(g,'#6a4a2a',x-210,y-14,60,6)});
/* ===== ZONA 9 · La fine: Washington e Galveston ===== */
def('sxford',(g,x,y,t,a,k)=>{rect(g,'#8a4a38',x-190,y-210,170,200);rect(g,'rgba(0,0,0,.18)',x-60,y-210,40,200);for(let r=0;r<18;r++)rect(g,'rgba(40,10,0,.16)',x-190,y-210+r*11,170,1);
 for(let r=0;r<3;r++)for(let q=0;q<5;q++){ar(g,'#2a2a34',x-178+q*32,y-80-r*60,18,36);rect(g,'#ffd88a',x-176+q*32,y-76-r*60,14,30);glow(g,x-169+q*32,y-60-r*60,26,LUC,.35)}
 rect(g,'#f4ecd4',x-170,y-234,130,22);txt(g,"FORD'S THEATRE",x-105,y-218,10,'#3a2a1c','900');rect(g,'#4e5662',x-194,y-214,178,6);
 for(let q=0;q<4;q++)poly(g,['#27407a',BIA,ROS,'#27407a'][q],[[x-170+q*42,y-150],[x-130+q*42,y-150],[x-150+q*42,y-120]]);
 ar(g,'#2a1a10',x-110,y-10,26,40);
 rect(g,'#b8a88a',x+40,y-120,110,110);rect(g,'rgba(0,0,0,.14)',x+120,y-120,30,110);poly(g,'#4e5662',[[x+34,y-120],[x+95,y-150],[x+156,y-120]]);for(let r=0;r<2;r++)for(let q=0;q<2;q++){rect(g,'#2a2a34',x+58+q*50,y-100+r*46,20,32);rect(g,r==1&&q==0?'#ffd88a':'#5a4a38',x+60+q*50,y-98+r*46,16,28)}glow(g,x+78,y-32,40,LUC,.4);
 lampgas(g,x-10,y+8,t,Math.max(k,.5));lampgas(g,x+200,y+8,t,Math.max(k,.5));
 for(let q=0;q<4;q++)pers(g,x-60+q*34,y+26-(q%2)*3,t+q,.5,q%2?-1:1,['#2a2a34','#3a3a46','#2a2a30','#4a4a56'][q],'#1c1c20',(g2,b)=>{if(q==1)bon(g2,b,'#2a2a30');else cil(g2,b,'#1c1c20')},{long:q==1})});
def('sxtreno',(g,x,y,t,a,k)=>{binari(g,x-260,x+260,y+10);
 locoAm(g,x-130,y+8,1,t,k,1);poly(g,'#14141a',[[x-220,y-100],[x-190,y-96],[x-200,y-44]]);poly(g,'#14141a',[[x-170,y-102],[x-130,y-100],[x-140,y-66]]);
 rect(g,'#1c1c24',x+10,y-60,200,56);rect(g,'#2a2a32',x+10,y-64,200,6);for(let q=0;q<5;q++){rect(g,'#0a0a10',x+22+q*38,y-48,22,26);rect(g,'rgba(255,200,120,.25)',x+24+q*38,y-46,18,22)}poly(g,'#14141a',[[x+10,y-60],[x+40,y-60],[x+16,y-30]]);poly(g,'#14141a',[[x+160,y-60],[x+210,y-60],[x+190,y-34]]);
 for(const bx of[x-200,x+240,x+100]){glow(g,bx,y+4,60,'255,150,60',.4+.15*Math.sin(t*6+bx));for(let q=0;q<3;q++)poly(g,['#ff9a30','#ffd060','#ff6a20'][q],[[bx-8+q*6,y+10],[bx-4+q*6,y-6-q*3-Math.sin(t*9+q)*3],[bx+q*6,y+10]]);fumo(g,bx,y-6,t,'#3a3a3e',3,70)}
 for(let q=0;q<7;q++)pers(g,x-250+q*38,y+32-(q%2)*3,t+q,.5,q%2?1:-1,['#2a2a34','#3a3a46','#1c1c24'][q%3],'#14141a',(g2,b)=>{if(q%4==1)bon(g2,b,'#2a2a30');rect(g2,'#8a5a30',12,-70+b,0,0)},{long:q%4==1,hair:'#2a1a10'})});
def('sxgalveston',(g,x,y,t,a,k)=>{rect(g,'#a8503a',x-130,y-170,200,160);rect(g,'rgba(0,0,0,.16)',x+30,y-170,40,160);for(let r=0;r<15;r++)rect(g,'rgba(40,10,0,.14)',x-130,y-170+r*11,200,1);poly(g,'#5a5058',[[x-138,y-170],[x-30,y-196],[x+78,y-170]]);rect(g,'#e8e0cc',x-130,y-174,200,6);
 for(let r=0;r<2;r++)for(let q=0;q<4;q++){ar(g,'#2a2a34',x-114+q*46,y-130+r*60,20,36);rect(g,'#ffd88a',x-112+q*46,y-126+r*60,16,30);glow(g,x-104+q*46,y-110+r*60,26,LUC,.35)}
 rect(g,'#2a2a30',x-100,y-92,160,5);for(let q=0;q<20;q++)rect(g,'#2a2a30',x-98+q*8,y-88,2,10);
 pers(g,x-30,y-92,t,.6,1,BLU,CEL,(g2,b)=>{kepi(g2,b);rect(g2,BIA,12,-76+b,12,16);lm(g2,12,-84+b,22,-.5,3,'#e0b090')},{hair:'#3a2a1a'});
 for(let q=0;q<8;q++){const px=x-250+q*30+(q>3?110:0);pers(g,px,y+24-(q%2)*3,t*1.4+q,.52,q%2?1:-1,['#c8402a','#e8c84a','#4a7ab0','#8a6a5a','#d8c8a0','#6a9a6a','#c88a5a','#e0d0b0'][q],'#4a4036',(g2,b)=>{if(q%2)fazz(g2,b,['#c8402a','#e8c84a','#4a7ab0'][q%3]);else slouch(g2,b,'#b8a070');lm(g2,12,-84+b,26,-1.2-Math.sin(t*4+q)*.2,3,'#7a4a2e')},{skin:'#7a4a2e',hair:'#1a120c',long:q%2});
  fanale(g,px+14,y+4,t,.6)}
 rect(g,'#7a5a38',x+90,y-26,150,6);for(const lx of[100,236])rect(g,LEG2,x+lx,y-20,4,20);rect(g,BIA,x+94,y-30,142,4);
 el(g,'#a02a22',x+120,y-38,12,6);el(g,'#d8402a',x+160,y-40,11,7);dot(g,'#4a8a3a',x+200,y-40,10);dot(g,'#c8402a',x+200,y-40,6);for(let q=0;q<3;q++)dot(g,'#fff',x+194+q*4,y-42+q%2*3,.9);rect(g,'#c8402a',x+212,y-44,16,10);
 palma(g,x+246,y-4,1.1,t);palma(g,x-258,y-4,1,t)});
def('sx13',(g,x,y,t,a,k)=>{rect(g,'#f0ecdc',x-170,y-120,340,110);rect(g,'rgba(0,0,0,.1)',x+130,y-120,40,110);for(let q=0;q<12;q++)rect(g,'#faf6e8',x-156+q*27,y-116,8,100);poly(g,'#f4f0e0',[[x-180,y-120],[x,y-170],[x+180,y-120]]);for(let q=0;q<8;q++)rect(g,'#e4dfcc',x-172+q*0,y-10-q*0,0,0);
 for(let q=0;q<6;q++)rect(g,'#e4dfcc',x-170,y-10+q*0,0,0);rect(g,'#b0a68e',x-176,y-10,352,12);rect(g,'#c0b69e',x-166,y+2,332,10);
 const dx=x-190;rect(g,'#6a4a2a',dx-4,y-60,8,52);rect(g,'#7a5a38',dx-34,y-64,68,8);poly(g,'#f4ecd4',[[dx-28,y-66],[dx+28,y-66],[dx+22,y-112],[dx-22,y-112]]);txt(g,'XIII',dx,y-96,10,'#3a2a1c','900');for(let q=0;q<3;q++)ln(g,'#6a5a48',1,[dx-16,y-88+q*7,dx+16,y-88+q*7]);ln(g,'#2a2a30',1.6,[dx+20,y-62,dx+30,y-80]);
 cannone2(g,x+220,y+10,.8,-1,t,1);cannone2(g,x-250,y+14,.7,1,t+.5,1);
 for(let q=0;q<6;q++)pers(g,x-110+q*34,y+28-(q%2)*3,t*1.3+q,.5,q%2?1:-1,['#3a3a46','#6a5a6a','#4a4a56','#6a4a3a','#3a3a3a','#5a6a7a'][q],'#2a2a30',(g2,b)=>{if(q%3==1)bon(g2,b,'#d8cfb8');else cil(g2,b);lm(g2,12,-84+b,24,-1.3-Math.sin(t*4+q)*.2,3,q%2?'#e0b090':'#7a4a2e')},{long:q%3==1,skin:q%2?'#e0b090':'#7a4a2e'});
 asta(g,x+160,y-120,60,t,'u',32);asta(g,x-130,y-170,40,t,'u',30)});
def('sxvarco',(g,x,y,t,a,k)=>{acq(g,x-260,y-50,520,70,t,'#1a1e40','#3a4a78');
 for(let q=0;q<10;q++)rect(g,'rgba(255,236,170,.4)',x-250+q*52+Math.sin(t*2+q)*4,y-44+(q%4)*7,18,1.6);
 const st=[[-150,-300],[-110,-290],[-70,-282],[-34,-286],[0,-268],[34,-256],[76,-250]];st.forEach(s=>{glow(g,x+s[0]+60,y+s[1]+110,22,'255,252,230',.7);dot(g,'#fffbe8',x+s[0]+60,y+s[1]+110,3)});
 ln(g,'rgba(255,250,220,.3)',1.2,st.map(s=>[x+s[0]+60,y+s[1]+110]).reduce((c,p)=>c.concat(p),[]));const px=x+210,py=y-232;glow(g,px,py,44,'255,252,230',.9);dot(g,'#fffbe8',px,py,4.4);ln(g,'rgba(255,250,220,.3)',1.2,[x+76+60,y-250+110,px,py]);
 poly(g,'#4a4a52',[[x-260,y+8],[x-200,y-12],[x-120,y-8],[x-60,y+10]]);
 for(let q=0;q<5;q++){const fx=x-140+q*34;pers(g,fx,y+22-(q%2)*3,t+q,q<2?.36:.52,1,['#c8402a','#e8c84a','#4a7ab0','#8a6a5a','#d8c8a0'][q],'#4a4036',(g2,b)=>{if(q%2)fazz(g2,b,'#c8402a');lm(g2,12,-84+b,22,-.9,3,'#7a4a2e')},{skin:'#7a4a2e',hair:'#1a120c',long:q%2==1});fanale(g,fx+10,y+4,t,.7)}});
/* ===================== livelli di sfondo ===================== */
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,6*s);el(g,c,x-18*s,y+2*s,22*s,5*s);el(g,c,x+20*s,y+2*s,24*s,5*s)};
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};
const tri=(g,c,x,y,w,h)=>poly(g,c,[[x-w/2,y],[x,y-h],[x+w/2,y]]);
/* livello 0: cielo, sole, luna, stelle, nuvole, nebbia dell'alba, fumo di battaglia, tramonto */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-(Z[8]+300))/1300,0,1);
 if(nt>0)for(let i=0;i<150;i++){const sx=hr(i*3)*480,sy=hr(i*7+1)*320,tw=.5+.5*Math.sin(t*2+i*1.7);dot(g,'rgba(255,252,235,'+(nt*(.35+.55*tw)*(sy<GT-50?1:.35))+')',sx,sy,.7+hr(i)*1.3)}
 const u=cl(xs/(Z[8]+700),0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*255;
 if(xs<Z[8]+900){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*100)+','+Math.round(190-low*130)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*80)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT+4);dot(g,'rgba(255,250,225,.95)',sx,sy,14)}
 const mu=cl((xs-(Z[8]+500))/1300,0,1);if(mu>0){const mx=360-mu*40,my=100-mu*10;dot(g,'rgba(255,248,215,'+.12*mu+')',mx,my,34);dot(g,'rgba(246,240,214,'+mu+')',mx,my,13);dot(g,'rgba(200,196,170,'+.5*mu+')',mx-4,my-3,3.4)}
 const cc=xs<Z[1]?'rgba(255,200,180,.5)':xs<Z[7]?'rgba(255,255,255,.55)':xs<Z[8]?'rgba(190,190,196,.6)':'rgba(255,170,130,.3)';
 each(o-((t*3)%340)*.02,340,1,(x,i,r)=>{if(r>.5)return;nube(g,x+r*100,40+r*60,.9+r*.7,cc)});
 const fo=cl(1-xs/3000,0,1)*.3;if(fo>.01){g.fillStyle='rgba(236,224,224,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const fs=cl((xs-Z[4]+300)/900,0,1)*cl((Z[5]-xs+200)/900,0,1)*.26;if(fs>.01){g.fillStyle='rgba(150,150,150,'+fs+')';g.fillRect(0,0,480,GT+4)}
 const mm=cl((xs-Z[7])/500,0,1)*cl((Z[7]+ZW[7]*.52-xs)/500,0,1)*.2;if(mm>.01){g.fillStyle='rgba(120,128,138,'+mm+')';g.fillRect(0,0,480,GT+4)}
 const gw=cl((xs-Z[6]-1400)/900,0,1)*cl((Z[8]-xs+200)/600,0,1)*.2;if(gw>.01){g.fillStyle='rgba(255,170,90,'+gw+')';g.fillRect(0,0,480,GT+4)}}
/* livello 1: orizzonte lontano per zona */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(mixs(c,'#d8e4dc',.2),'#262a5e',night*.72);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp*.62-Math.abs(xs-wc))/(sp*.25),0,1),zc=z=>Z[z]+ZW[z]/2;
 const mont=(sx,w,h,c,seed)=>{g.fillStyle=dim(c);g.beginPath();g.moveTo(sx-w,hz+34);for(let q=0;q<=36;q++){const u=q/36,px=sx-w+u*2*w,hh=h*(Math.sin(u*Math.PI))*(.7+.3*Math.abs(Math.sin(u*7+seed)))+4*Math.sin(u*29+seed);g.lineTo(px,hz+14-hh)}g.lineTo(sx+w,hz+34);g.closePath();g.fill()};
 const chioma=(sx,x0,x1,hh,c1,c2)=>{for(let q=0;q<(x1-x0)/14;q++){const bx=sx+x0+q*14,h2=hh*(.6+.4*hr(q*3));el(g,dim(q%2?c1:c2),bx,hz+8-h2*.3,12,h2*.5)}};
 const blk=(sx,w,h,c)=>{rect(g,dim(c),sx-w/2,hz+14-h,w,h);for(let q=0;q<h/12;q++)if(night>.25&&hr(q+sx)>.5)rect(g,'rgba(255,214,140,.8)',sx-w/2+4+hr(q)*(w-10),hz+14-h+4+q*12,3,4)};
 const spire=(sx,w,h,c)=>{rect(g,dim(c),sx-w/2,hz+14-h*.6,w,h*.6);tri(g,dim(c),sx,hz+14-h*.6,w*.7,h*.5)};
 const lights=(sx,x0,x1,n)=>{if(night>.2)for(let q=0;q<n;q++){const tx=sx+x0+(x1-x0)*q/(n-1);glow(g,tx,hz+8-hr(q)*10,10,'255,190,90',.6*Math.min(1,night+.1));dot(g,'rgba(255,225,150,.95)',tx,hz+8-hr(q)*10,1.2)}};
 const a1=env(zc(0),ZW[0]*1.25);if(a1>.02){g.globalAlpha=a1;const sx=fx(zc(0));rect(g,dim('#7a8a62'),sx-700,hz+14,1400,16);chioma(sx,-690,690,42,'#3a5a3a','#2e4e34');blk(sx-200,80,50,'#e0dccb');blk(sx+110,110,64,'#e0dccb');tri(g,dim('#6a6a6a'),sx+110,hz-50,120,22);for(let q=0;q<6;q++)el(g,'rgba(230,222,224,.5)',sx-540+q*210,hz+16,130,8);g.globalAlpha=1}
 const a2=env(zc(1),ZW[1]*1.25);if(a2>.02){g.globalAlpha=a2;const sx=fx(zc(1));rect(g,dim('#5a7a92'),sx-700,hz+14,1400,18);rect(g,dim('#9ac0d4'),sx-700,hz+14,1400,4);for(let q=0;q<30;q++)el(g,dim('#7aa4bc'),sx-690+q*46,hz+24,18,2.4);mont(sx-330,200,20,'#6a8a62',2.2);mont(sx+380,240,24,'#5a7a52',5.1);blk(sx+10,70,30,'#8a5a48');tri(g,dim('#7a4a3a'),sx+10,hz-16,74,10);spire(sx-420,24,90,'#e8e4d8');spire(sx-360,18,70,'#e8e4d8');spire(sx-200,22,100,'#e8e4d8');blk(sx-120,40,34,'#e8b8b0');blk(sx-80,36,28,'#ecd9a0');for(let q=0;q<3;q++){ln(g,dim('#4a3a2a'),1.6,[sx+200+q*50,hz+12,sx+200+q*50,hz-30]);poly(g,dim('#e8e0cc'),[[sx+202+q*50,hz-28],[sx+222+q*50,hz-22],[sx+202+q*50,hz-6]])}g.globalAlpha=1}
 const a3=env(zc(2),ZW[2]*1.25);if(a3>.02){g.globalAlpha=a3;const sx=fx(zc(2));chioma(sx,-700,700,48,'#3a6a3a','#2e5a30');blk(sx-120,200,34,'#e8e4d8');for(let q=0;q<9;q++)rect(g,dim('#f0ecdc'),sx-208+q*22,hz-20,6,34);rect(g,dim('#e8e4d8'),sx-170,hz-50,100,22);el(g,dim('#a8aab0'),sx-120,hz-60,40,28);rect(g,dim('#e8e4d8'),sx-124,hz-90,8,20);blk(sx+320,34,150,'#e8e4d8');rect(g,dim('#d8d4c4'),sx+310,hz-140,22,10);blk(sx+130,90,40,'#f0ecdc');tri(g,dim('#5a5a62'),sx+130,hz-26,96,16);blk(sx+460,60,30,'#b8946a');blk(sx-420,50,36,'#b8946a');g.globalAlpha=1}
 const a4=env(zc(3),ZW[3]*1.25);if(a4>.02){g.globalAlpha=a4;const sx=fx(zc(3));rect(g,dim('#6a7a8a'),sx-700,hz+16,1400,14);for(let q=0;q<5;q++){const bx=sx-500+q*230;blk(bx,70,40+hr(q)*30,['#8a5a48','#7a4a3a','#9a6a50'][q%3]);spire(bx+90,16,70+hr(q+3)*40,'#e8e4d8')}for(const cx of[-300,40,360]){rect(g,dim('#6a3a2a'),sx+cx,hz-80,12,94);fumo(g,sx+cx+6,hz-80,t,'#9a9aa0',3,60)}for(let q=0;q<6;q++){ln(g,dim('#3a2a1a'),1.4,[sx-600+q*14,hz+16,sx-600+q*14,hz-34])}g.globalAlpha=1}
 const a5=env(zc(4),ZW[4]*1.25);if(a5>.02){g.globalAlpha=a5;const sx=fx(zc(4));mont(sx-340,380,80,'#6a8a5a',4.4);mont(sx+250,420,100,'#7a9a62',7.7);mont(sx,300,50,'#5a7a4a',1.3);for(let q=0;q<12;q++){const bx=sx-520+q*90;rect(g,dim('#9a5a48'),bx,hz+2-hr(q)*8,20,14);tri(g,dim('#6a3a30'),bx+10,hz+2-hr(q)*8,24,10)}for(let q=0;q<4;q++)el(g,'rgba(170,170,170,.35)',sx-300+q*200,hz-20-q%2*20,70,22);g.globalAlpha=1}
 const a6=env(zc(5),ZW[5]*1.25);if(a6>.02){g.globalAlpha=a6;const sx=fx(zc(5));rect(g,dim('#9a8a62'),sx-700,hz+14,1400,16);rect(g,dim('#b8a87a'),sx-700,hz+14,1400,3);for(let q=0;q<30;q++)el(g,dim('#4a6a3a'),sx-690+q*46,hz+10,22,10);for(let q=0;q<6;q++){ln(g,dim('#3a4a2a'),2,[sx-500+q*180,hz+14,sx-500+q*180,hz-6]);el(g,dim('#4a6a3a'),sx-500+q*180,hz-8,16,8)}vap(g,sx+140,hz+16,t,.3,1,{nosmoke:1});mont(sx-260,320,54,'#b09a62',3.1);g.globalAlpha=1}
 const a7=env(zc(6),ZW[6]*1.25);if(a7>.02){g.globalAlpha=a7;const sx=fx(zc(6));mont(sx-330,400,100,'#6a8aa0',2.6);mont(sx+280,420,120,'#5a7a92',6.1);mont(sx,300,60,'#6a8a62',1.7);chioma(sx,-700,700,44,'#4a6a3a','#3a5a30');spire(sx-60,20,76,'#e8e4d8');blk(sx+200,60,26,'#b05a40');for(let q=0;q<8;q++)el(g,'rgba(250,250,245,.7)',sx-420+q*100+hr(q)*30,hz-6-hr(q+2)*14,6,4);g.globalAlpha=1}
 const a8=env(Z[7]+ZW[7]*.26,ZW[7]*.9);if(a8>.02){g.globalAlpha=a8;const sx=fx(Z[7]+ZW[7]*.26);rect(g,dim('#5a5a62'),sx-700,hz+14,1400,16);for(let q=0;q<10;q++){const bx=sx-560+q*120;blk(bx,90,46+hr(q)*40,['#7a4a3a','#6a3a30','#8a5a48'][q%3])}for(let q=0;q<8;q++){const bx=sx-520+q*140;rect(g,dim('#5a2a20'),bx,hz-96+hr(q)*30,10,110);if(q%3==0)fumo(g,bx+5,hz-96+hr(q)*30,t,'#7a7a82',3,50)}g.globalAlpha=1}
 const a9=env(Z[7]+ZW[7]*.76,ZW[7]*.9);if(a9>.02){g.globalAlpha=a9;const sx=fx(Z[7]+ZW[7]*.76);rect(g,dim('#4a7a96'),sx-700,hz+14,1400,18);rect(g,dim('#9ac0d4'),sx-700,hz+14,1400,4);mont(sx-300,280,50,'#6a7a62',3.3);mont(sx+360,300,46,'#5a6a52',1.1);for(let q=0;q<3;q++){const bx=sx-60+q*110;ln(g,dim('#3a2a1a'),1.6,[bx,hz+16,bx,hz-24]);poly(g,dim('#e8e0cc'),[[bx+2,hz-22],[bx+16,hz-16],[bx+2,hz]])}blk(sx-460,40,44,'#d8d0b8');g.globalAlpha=1}
 const aa=env(zc(8),ZW[8]*1.25);if(aa>.02){g.globalAlpha=aa;const sx=fx(zc(8));rect(g,dim('#2a4a6a'),sx-700,hz+14,1400,18);rect(g,dim('#6a8ab0'),sx-700,hz+14,1400,3);for(let q=0;q<30;q++)el(g,dim('#4a6a8a'),sx-690+q*46,hz+22,18,2.4);for(let q=0;q<8;q++){const bx=sx-520+q*120;blk(bx,50,22+hr(q)*16,['#a8503a','#d8cdb4','#c8a468'][q%3]);}for(let q=0;q<10;q++){ln(g,dim('#4a3a2a'),2,[sx-500+q*100,hz+14,sx-500+q*100,hz-30]);for(let r=0;r<5;r++){const b2=-Math.PI*.95+r*Math.PI*.32;ln(g,dim('#2a5a3a'),1.6,[sx-500+q*100,hz-30,sx-500+q*100+Math.cos(b2)*18,hz-30+Math.sin(b2)*10])}}lights(sx,-460,460,26);g.globalAlpha=1}}
/* livello 2: sfondo intermedio per zona */
const pino=(g,x,y,s)=>{rect(g,'#4a3828',x-2*s,y-10*s,4*s,10*s);for(let q=0;q<3;q++)tri(g,q%2?'#2e5a30':'#3a6a34',x,y-8*s-q*14*s,(30-q*5)*s,28*s)};
const stecc=(g,x,y,n,w)=>{for(let q=0;q<n;q++){rect(g,LEG2,x+q*w,y-20,3,22)}ln(g,LEG,2.4,[x,y-16,x+(n-1)*w,y-16]);ln(g,LEG,2.4,[x,y-8,x+(n-1)*w,y-8])};
const cbl=(g,x,y,w,h,c,tc)=>{rect(g,c,x,y-h,w,h);rect(g,'rgba(0,0,0,.14)',x+w*.75,y-h,w*.25,h);poly(g,tc||'#5a5058',[[x-3,y-h],[x+w/2,y-h-w*.3],[x+w+3,y-h]])};
const BAND=['#8a9a64','#b4c0a0','#8aa05a','#9a9a8e','#86a05a','#b0a064','#86a05a','#9a9a92','#c4b48a'];
function layerMid(g,o,t){const cam=o/.2,hz=326,night=nf(cam+300);
 for(let k=0;k<25;k++){const sx=k*20-10,wx=cam+sx+10,z=zn(wx)-1;A.setDK(nf(wx));el(g,BAND[z],sx+10,hz-2,24,10);rect(g,BAND[z],sx,hz-2,21,GT-hz+8)}
 each(o,120,5,(x,i,r)=>{const wx=cam+x+120,zz=zn(wx);A.setDK(nf(cam+x));
  if(zz==1){if(r>.7)oak(g,x+60,hz+10,.8,t);else if(r>.4){for(let q=0;q<5;q++)cot(g,x+q*0,hz+6-q*3,90,t,0);}else if(r>.2)baita(g,x+20,hz+8,56,34,t,0,{fum:0});else{cot(g,x+10,hz+8,100,t,0)}}
  else if(zz==2){if(r>.72)palma(g,x+50,hz+10,.8,t);else if(r>.45)cbl(g,x+10,hz+8,60,44,r>.6?'#e8b8b0':'#ecd9a0');else if(r>.25)pino(g,x+50,hz+10,.9);else{ln(g,'#7a8a52',2,[x+20,hz+8,x+22,hz-8]);ln(g,'#7a8a52',2,[x+30,hz+8,x+26,hz-10]);ln(g,'#7a8a52',2,[x+40,hz+8,x+44,hz-6])}}
  else if(zz==3){if(r>.7)pino(g,x+60,hz+10,1);else if(r>.4)cbl(g,x+10,hz+8,70,52,r>.55?'#b8946a':'#9a6a50');else if(r>.2){rect(g,'#e8e4d8',x+30,hz-34,24,44);tri(g,'#e8e4d8',x+42,hz-34,24,16)}else albero(g,x+50,hz+10,.9,'#4a7a3a',t)}
  else if(zz==4){if(r>.6)cbl(g,x+10,hz+8,80,60,r>.8?'#8a4a3a':'#9a5a48');else if(r>.35){rect(g,'#6a3a2a',x+30,hz-66,10,76);fumo(g,x+35,hz-66,t,'#9a9aa0',3,40)}else lampgas(g,x+50,hz+10,t,nf(cam+x))}
  else if(zz==5){if(r>.7)albero(g,x+60,hz+10,1.1,'#4a7a3a',t);else if(r>.4)stecc(g,x+10,hz+8,8,12);else if(r>.2){for(let q=0;q<5;q++)cot(g,x+q*0,hz+6,0,t,0);grano(g,x+8,hz+8,90,t,'#b8b050')}else cbl(g,x+10,hz+8,70,44,'#f0ecdc','#7a6a5a')}
  else if(zz==6){if(r>.65)oak(g,x+60,hz+12,.75,t);else if(r>.4){poly(g,'#b8a06a',[[x,hz+10],[x+30,hz-24],[x+80,hz-20],[x+110,hz+10]])}else if(r>.2)canna(g,x+10,hz+8,90,t);else vap(g,x+60,hz+8,t,.35,1,{nosmoke:1})}
  else if(zz==7){if(r>.65)pino(g,x+60,hz+10,1.1);else if(r>.4)stecc(g,x+10,hz+8,9,12);else if(r>.2){cbl(g,x+10,hz+8,70,46,'#b05a40');}else{for(let q=0;q<6;q++)dot(g,BIA,x+40+Math.cos(q*2)*16,hz-30+Math.sin(q*3)*12,4.2);rect(g,'#5a4430',x+38,hz-30,5,38)}}
  else if(zz==8){if(r>.7){rect(g,MAT2,x+10,hz-70,56,80);for(let q=0;q<3;q++)rect(g,'#5a6a7a',x+18+q*16,hz-56,8,10);rect(g,MAT2,x+60,hz-112,12,120);}else if(r>.4)cbl(g,x+10,hz+8,70,50,'#8a5a48','#4a4a52');else if(r>.2){rect(g,'#6a6a72',x+10,hz-4,90,14);el(g,'#8a8a92',x+30,hz-4,12,4)}else albero(g,x+50,hz+10,.9,'#4a6a3a',t)}
  else{if(r>.68)palma(g,x+50,hz+10,1,t);else if(r>.4){cbl(g,x+10,hz+8,66,44,r>.55?'#d8cdb4':'#c8a468');rect(g,nf(cam+x)>.3?'rgb(255,206,120)':'#4a3a2a',x+30,hz-30,10,14)}else palma(g,x+60,hz+10,.8,t)}
 })}
/* livello 3: facciate lungo la strada */
let TT=0;
function fac(g,x,w,h,i,st,wx){const gt=GT,r=hr(i*3),k=nf(wx);if(r<.16)return;
 if(st==1){if(r>.7){oak(g,x+w*.5,gt+8,1.3,TT);return}if(r>.5){baita(g,x+w*.3,gt+8,80,52,TT,k,{c:'#8a6a44'});return}if(r>.3){cot(g,x+10,gt+8,w-20,TT,k);cot(g,x+10,gt-4,w-20,TT,k);return}oak(g,x+w*.4,gt+8,1.1,TT)}
 else if(st==2){if(r>.78){palma(g,x+w*.5,gt+8,1.3,TT);return}if(r>.45){const c=['#e8b8b0','#ecd9a0','#a8c4d8','#d8b8c8'][md(i,4)];rect(g,c,x+10,gt-h*.8,w-70,h*.8+8);poly(g,'#5a5058',[[x+4,gt-h*.8],[x+10+(w-70)/2,gt-h*.8-22],[x+16+w-70,gt-h*.8]]);for(let q=0;q<2;q++)for(let r2=0;r2<Math.floor(h/45);r2++){rect(g,'#4a5a4a',x+22+q*36,gt-h*.8+14+r2*40,12,20);rect(g,k>.3?'#ffd88a':'#7a98b0',x+24+q*36,gt-h*.8+16+r2*40,8,16)}return}palma(g,x+w*.5,gt+8,1.1,TT)}
 else if(st==3){if(r>.75){albero(g,x+w*.5,gt+8,1.5,'#4a7a3a',TT);return}if(r>.45){const c=['#c8b898','#b8946a','#e0d8c0'][md(i,3)];rect(g,c,x+10,gt-h*.7,w-60,h*.7+8);poly(g,'#4a4a52',[[x+4,gt-h*.7],[x+10+(w-60)/2,gt-h*.7-22],[x+16+w-60,gt-h*.7]]);for(let q=0;q<3;q++)rect(g,k>.3?'#ffd88a':'#3a3a44',x+22+q*30,gt-h*.5,12,18);rect(g,'#2a1a10',x+(w-60)/2,gt-26,16,32);return}rect(g,'#7a5a38',x+10,gt-30,w-60,34);for(let q=0;q<5;q++)rect(g,'#c8b898',x+14+q*26,gt-34,18,4)}
 else if(st==4){if(r>.7){rect(g,MAT,x+10,gt-h-20,w-40,h+26);for(let q=0;q<4;q++)for(let r2=0;r2<4;r2++)rect(g,k>.3&&hr(q+r2*5+i)>.4?'#ffd88a':'#3a3a44',x+22+q*30,gt-h-8+r2*30,14,20);return}if(r>.45){rect(g,'#9a6a50',x+10,gt-h*.8,w-60,h*.8+8);rect(g,'#2a1a10',x+30,gt-30,16,36);for(let q=0;q<3;q++)rect(g,k>.3?'#ffd88a':'#3a3a44',x+26+q*34,gt-h*.6,14,22);return}lampgas(g,x+w*.5,gt+6,TT,k)}
 else if(st==5){if(r>.7){albero(g,x+w*.5,gt+8,1.5,'#4a7a3a',TT);return}if(r>.5){stecc(g,x+6,gt+8,Math.floor(w/12),12);return}if(r>.35){grano(g,x+10,gt+6,w-20,TT,'#c8b850');return}cbl(g,x+10,gt+6,90,60,'#9a5a48')}
 else if(st==6){if(r>.7){oak(g,x+w*.5,gt+8,1.2,TT);return}if(r>.5){for(let q=0;q<6;q++)el(g,'#7a9a4a',x+20+q*24,gt+4,13,8);return}if(r>.35){canna(g,x+8,gt+8,w-30,TT);return}rect(g,'#7a5a38',x+10,gt-8,w-40,14);for(let q=0;q<6;q++)rect(g,'#5a3e22',x+16+q*24,gt+4,4,12);if(r>.3){for(let q=0;q<3;q++)bala(g,x+40+q*30,gt-8,.9)}}
 else if(st==7){if(r>.7){pino(g,x+w*.5,gt+8,1.4);return}if(r>.5){stecc(g,x+6,gt+8,Math.floor(w/12),12);return}if(r>.3){cbl(g,x+10,gt+6,90,56,'#b05a40');rect(g,'#f4ecd4',x+26,gt-24,66,4);return}for(let q=0;q<7;q++)dot(g,BIA,x+w*.5+Math.cos(q*2)*18,gt-50+Math.sin(q*3)*14,4.6);rect(g,'#5a4430',x+w*.5-2,gt-50,5,58)}
 else if(st==8){if(r>.7){rect(g,MAT2,x+10,gt-h-30,w-50,h+36);for(let q=0;q<4;q++)for(let r2=0;r2<4;r2++)rect(g,'#2a2a30',x+22+q*28,gt-h-18+r2*30,12,18);return}if(r>.45){cbl(g,x+8,gt+6,100,60,'#8a5a48','#4a4a52');rect(g,'#2a1a10',x+40,gt-30,16,36);return}lampgas(g,x+w*.5,gt+6,TT,k)}
 else{if(r>.7){palma(g,x+w*.5,gt+8,1.5,TT);return}if(r>.45){cbl(g,x+10,gt+6,100,66,r>.6?'#d8cdb4':'#c8a468');for(let q=0;q<2;q++)rect(g,k>.3?'rgb(255,206,120)':'#4a3a2a',x+30+q*40,gt-46,14,20);return}fanale(g,x+w*.5,gt+6,TT,k)}}
function layerStreet(g,o,t){TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 for(let z=0;z<9;z++)each2(180+(z%2)*10,7+z,Z[z],Z[z+1],z+1,i=>90+hr(i*5)*60,170)}
/* suolo */
function groundDraw(g,cam,t){const gt=GT;rect(g,'#6a5a3a',0,gt,480,3);
 GZ.forEach((zc,zi)=>{const a=Z[zi]-cam,b=Z[zi+1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0),zw=Z[zi+1]-Z[zi];g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();
  const gg=g.createLinearGradient(0,gt,0,gt+150);gg.addColorStop(0,zc[0]);gg.addColorStop(1,zc[1]);g.fillStyle=gg;g.fillRect(x0,gt+3,x1-x0,150);const pz=(q,m)=>Z[zi]+((q*m)%zw)-cam;
  const slabs=(bw,rows,rh,c1,c2,seed)=>{for(let r=0;r<rows;r++){const yy=gt+7+r*rh,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*seed+r*7);rect(g,hh>.5?c1:'rgba(0,0,0,0)',px,yy,bw-2,rh-2);rect(g,c2,px,yy+rh-3,bw-2,2)}}};
  const pts=(n,c1,c2,m)=>{for(let q=0;q<n;q++)dot(g,hr(q)>.5?c1:c2,pz(q,m),gt+6+hr(q*5)*144,1+hr(q)*1.3)};
  if(zi==0){for(let r=0;r<6;r++)rect(g,r%2?'rgba(60,30,10,.14)':'rgba(255,220,160,.06)',x0,gt+8+r*22,x1-x0,10);pts(80,'rgba(255,230,190,.2)','rgba(40,20,8,.3)',31);for(let q=0;q<7;q++)el(g,'rgba(90,140,60,.5)',pz(q,331),gt+16+hr(q*3)*110,26+hr(q)*20,5)}
  else if(zi==1){for(let r=0;r<6;r++)rect(g,r%2?'rgba(120,90,50,.1)':'rgba(255,250,230,.14)',x0,gt+8+r*22,x1-x0,10);pts(120,'rgba(255,255,245,.5)','rgba(140,110,60,.3)',25);for(let q=0;q<8;q++)el(g,'rgba(120,150,90,.5)',pz(q,257),gt+30+hr(q)*100,30,4)}
  else if(zi==2||zi==5){for(let r=0;r<6;r++)rect(g,r%2?'rgba(60,40,20,.14)':'rgba(255,230,190,.08)',x0,gt+8+r*22,x1-x0,10);pts(90,'rgba(255,240,210,.25)','rgba(70,40,20,.35)',29);for(let q=0;q<8;q++)el(g,'rgba(70,90,110,.5)',pz(q,277),gt+30+hr(q*3)*100,36,5)}
  else if(zi==3||zi==7){const bw=44;for(let r=0;r<6;r++)for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const s0=Math.floor((cam+x0)/bw)*bw,px=s0+k*bw-cam+(r%2)*bw/2,yy=gt+7+r*24,hh=hr(k*13+r*5);rect(g,hh>.5?'rgba(255,255,255,.1)':hh>.2?'rgba(0,0,0,.14)':'rgba(0,0,0,.04)',px,yy,bw-3,21);rect(g,'rgba(255,255,255,.08)',px,yy,bw-3,3)}if(zi==7)for(let q=0;q<7;q++)el(g,'rgba(150,180,210,.3)',pz(q,331),gt+50+hr(q)*80,60,8)}
  else if(zi==4){for(let r=0;r<6;r++)rect(g,r%2?'rgba(40,60,20,.14)':'rgba(255,255,200,.06)',x0,gt+8+r*22,x1-x0,10);pts(100,'rgba(220,230,160,.25)','rgba(40,50,20,.3)',23);for(let q=0;q<4;q++)rect(g,'rgba(80,60,30,.35)',x0,gt+50+q*26,x1-x0,5)}
  else if(zi==6){for(let r=0;r<6;r++)rect(g,r%2?'rgba(60,40,20,.14)':'rgba(255,230,190,.08)',x0,gt+8+r*22,x1-x0,10);for(let q=0;q<10;q++)rect(g,'rgba(120,80,40,.4)',pz(q,157),gt+10+hr(q*3)*120,34+hr(q)*30,2);for(let q=0;q<6;q++)el(g,'rgba(70,110,60,.45)',pz(q,419),gt+20+hr(q)*110,26,4);pts(60,'rgba(255,200,150,.2)','rgba(70,30,10,.3)',27)}
  else{for(let r=0;r<7;r++)rect(g,r%2?'rgba(160,120,60,.1)':'rgba(255,250,230,.14)',x0,gt+8+r*20,x1-x0,10);pts(160,'rgba(255,255,240,.5)','rgba(150,110,60,.35)',25);for(let q=0;q<7;q++)el(g,'rgba(120,160,200,.35)',pz(q,419),gt+138,60,4)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1800,0,1);if(dw>.02)rect(g,'rgba(236,224,224,'+(.14*dw)+')',0,gt,480,150)}
/* vita: corvi, gabbiani, piccioni, lucciole, animali, passanti */
function layerLife(g,o,t){const cam=o,xs=cam+240,hz=GT;
 const bird=(bx,by,s,w,c)=>{g.strokeStyle=c;g.lineWidth=s*1.9;g.beginPath();g.moveTo(bx-9*s,by+w);g.quadraticCurveTo(bx-4*s,by-4*s,bx,by);g.quadraticCurveTo(bx+4*s,by-4*s,bx+9*s,by+w);g.stroke()};
 const bv=(a,b,n,c,s,sp)=>{const v=cl((xs-a)/500,0,1)*cl((b-xs)/500,0,1);if(v>.05)for(let i=0;i<n;i++){const bx=((i*171+t*(sp+i*4))%640)-80,by=60+hr(i*3+a)*110+Math.sin(t*1.7+i*2)*14,w=Math.sin(t*9+i)*3;g.globalAlpha=v;bird(bx,by,s,w,c);g.globalAlpha=1}};
 bv(0,Z[1]+400,4,'#2a2a30',1.5,26);bv(Z[1]-200,Z[2]+200,6,'#f4f4f4',1.6,26);bv(Z[3],Z[4],4,'#8a8a92',1.4,22);bv(Z[7]+ZW[7]*.5,Z[8]+700,6,'#f4f4f4',1.6,24);
 const nv=cl((xs-Z[8]-500)/700,0,1);if(nv>.05){for(let i=0;i<22;i++){const fx=(i*61+Math.sin(t*.7+i)*30)%480,fy=GT-30+hr(i*3)*160,al=.5+.5*Math.sin(t*3+i*2);glow(g,fx,fy,8,'220,255,140',nv*al*.7);dot(g,'rgba(240,255,170,'+nv*al+')',fx,fy,1.1)}}
 each(o,520,31,(x,i,r)=>{const wx=cam+x,zz=zn(wx);A.setDK(nf(wx));
  if(zz==1&&r<.5){for(let q=0;q<2;q++){const cx=x+30+q*34,cy=hz+50+q*4;el(g,tn(['#b8402a','#e8e0cc'][q]),cx,cy-6,5,4);dot(g,tn(['#b8402a','#e8e0cc'][q]),cx+4,cy-10+Math.sin(t*5+q)*1,2.4)}}
  if((zz==3||zz==4)&&r>.5){const dc=tn('#c8a878');el(g,dc,x+60,hz+46,12,6);rect(g,dc,x+66,hz+36,4,8);dot(g,dc,x+72,hz+36,4);rect(g,dc,x+50,hz+50,2,6);rect(g,dc,x+66,hz+50,2,6)}
  if(zz==3&&r<.3)cagn(g,x+80,hz+54,t);if(zz==5&&r>.55)cavallo(g,x+60,hz+58,.5,t,1,'#7a5a3a');if(zz==6&&r>.6)cavallo(g,x+60,hz+58,.5,t,-1,'#6a4a2a');if(zz==7&&r<.4)cagn(g,x+60,hz+56,t);if(zz==9&&r>.6)cagn(g,x+60,hz+56,t)});
 each(o,430,57,(x,i,r)=>{const wx=cam+x,zz=zn(wx);if(r<.4||wx>W1-500)return;A.setDK(nf(wx));const dir=md(i,2)?1:-1,off=Math.sin(t*.18+i)*70,f=Math.cos(t*.18+i)*dir>0?1:-1;
  const pal=[['#c8b898','#9a8a6a','#b8a888'],['#8a7a6a','#6a6a7a','#7a6a5a'],['#4a4a5a','#3a3a46','#6a5a6a'],['#6a6a7a','#8a7a6a','#5a6a6a'],['#27407a','#6a6a64','#27407a'],['#6a6a7a','#9a8a6a','#7a6a4a'],['#27407a','#8e8e88','#6a5a4a'],['#4a4a52','#5a4a4a','#3a3a46'],['#c8402a','#4a7ab0','#e8c84a']][zz-1];
  const o2={f:f,s:.5,top:pal[md(i,3)],bot:zz==5||zz==7?CEL:'#4a4036',skin:zz==1||zz==9?'#7a4a2e':'#d0996c',long:md(i,3)==1,hair:'#2a1a10'};
  const acc=(g2,b)=>{if(zz==1||zz==9){if(o2.long)fazz(g2,b,['#c8402a','#e8c84a','#4a7ab0'][md(i,3)]);else slouch(g2,b,'#b8a070')}else if(zz==5||zz==7){if(md(i,3)==1)slouch(g2,b,'#6a6a64');else kepi(g2,b)}else if(o2.long)bon(g2,b,'#d8cfb8');else cil(g2,b,'#1c1c24')};
  P(g,x+off,hz+54,t+i,Object.assign(o2,{acc:acc}))});A.setDK(0);g.globalAlpha=1}
const cagn=(g,x,y,t)=>{const c=tn('#8a6a4a');el(g,c,x,y-10,12,6);rect(g,c,x+8,y-20,5,10);dot(g,c,x+14,y-20,4);rect(g,c,x-8,y-6,2,6);rect(g,c,x+6,y-6,2,6);ln(g,c,2,[x-12,y-12,x-18,y-18+Math.sin(t*8)*2])};
/* ===================== testi ===================== */
const NAME={
sx_hetty:"Hetty, la cuoca della piantagione",
sx_tubman:"Harriet Tubman, la guida alla libertà",
sx_lincoln:"Abraham Lincoln, il presidente",
sx_douglass:"Frederick Douglass, l’oratore",
sx_sam:"Sam, il soldato semplice dell’Unione",
sx_zeb:"Zeb, il pilota del Mississippi",
sx_lee:"Robert E. Lee, il generale sudista",
sx_grant:"Ulysses S. Grant, il generale dell’Unione",
sx_ann:"Ann, l’operaia di Manchester"};
const GREET={
sx_hetty:"Salve, Pierpaolo, e non fare rumore: il padrone dorme ancora e io ho il pane da sfornare. Sono Hetty, cucino nella casa grande da quando avevo quattordici anni. Ho un marito, tre figli e un sacco di storie: se hai pazienza, qualcuna te la racconto.",
sx_tubman:"Salve, Pierpaolo, e abbassa la voce: sul fiume i rumori viaggiano. Sono Harriet Tubman, ma da queste parti mi chiamano Mosè. Ho portato in salvo decine di persone verso il Nord e ora aiuto l’esercito dell’Unione: di cose da raccontarti ne ho parecchie.",
sx_lincoln:"Salve, Pierpaolo, e scusa se sono un po’ distratto: sto aspettando un dispaccio dal fronte. Sono Abraham Lincoln, e a quanto pare faccio il presidente di un Paese che ha deciso di spezzarsi in due. Siediti dove trovi posto: ti racconto cose che sui giornali non ci sono.",
sx_douglass:"Salve, Pierpaolo. Sono Frederick Douglass: sono nato schiavo e oggi parlo e scrivo perché nessuno debba più esserlo. Passo di qui a far arruolare i miei fratelli di colore: se mi ascolti, ti racconto da dove sono partito e dove sono arrivato.",
sx_sam:"Salve, Pierpaolo, e se hai del caffè non dirlo a nessuno: finisce subito. Sono Sam, fante della Pennsylvania. Ho vent’anni, un fucile e una lettera a casa da finire: siediti pure, io scrivo e intanto chiacchieriamo.",
sx_zeb:"Salve, Pierpaolo, e attento alla passerella: il fiume non perdona. Sono Zeb, pilota: conosco ogni curva, ogni secca e ogni tronco nascosto del Mississippi. Per ogni miglio ho una storia da raccontarti.",
sx_lee:"Salve, Pierpaolo. Sono Robert Lee. Oggi è il 9 aprile 1865 e ho appena firmato la resa del mio esercito: non sono una gran compagnia, in questo momento, ma ti rispondo con sincerità su tutto quello che vuoi.",
sx_grant:"Salve, Pierpaolo, e scusa la divisa: ho cavalcato tutta la mattina con un mal di testa tremendo e non ho avuto il tempo di cambiarmi. Sono Ulysses Grant. Ho appena ricevuto la resa di Lee e ancora non mi sembra vero.",
sx_ann:"Salve, Pierpaolo, e non passare davanti: stiamo aspettando la zuppa. Sono Ann, filatrice di cotone; o meglio, lo ero, finché le macchine non si sono fermate. Ti racconto come un pezzo d’America ci ha lasciati senza lavoro."};
const WNAME="Guerra di secessione · Dal cotone alla libertà";
const INTRO="Guerra di secessione, dall’alba alla notte. Parti dai campi di cotone del Sud, poi vedi esplodere il primo colpo di cannone su Charleston, cammini per Washington, per il Nord e per i campi di Gettysburg, scendi lungo il Mississippi e arrivi ad Appomattox. Poi l’Europa guarda, e una sera a Galveston la libertà arriva con una lettura. Cammina e osserva.";
const LKTXT=[
"È l’alba in una piantagione del Sud, nel 1860. Il cotone è il re dell’economia: da qui parte circa i tre quarti di quello che arriva alle filande inglesi, e a raccoglierlo a mano sono soprattutto persone ridotte in schiavitù: nel Sud sono quasi quattro milioni. Cerca: le capsule bianche aperte, il lungo sacco da trascinare, la nebbia bassa sui filari.",
"Ai margini della piantagione, file di casette di tronchi, una stanza per famiglia, con il camino di argilla, l’orto e qualche gallina. Qui si cucina, si cuciono coperte a toppe, si raccontano storie e, la sera, si canta a bassa voce. Cerca: i comignoli fumanti, le coperte stese, il fuoco con la pentola, i bambini che giocano.",
"La casa padronale ha le colonne bianche e la veranda, all’ombra delle querce coperte di muschio. Solo circa una famiglia bianca su quattro, nel Sud, possiede persone: ma sono loro a comandare la politica e l’economia di questi stati. Cerca: le colonne, il viale di querce con il muschio, la campana per chiamare al lavoro.",
"Sull’argine il battello a vapore carica le balle di cotone: ognuna pesa più di duecento chili. Il cotone scende il Mississippi fino a New Orleans e da lì parte per Liverpool e Le Havre. Cerca: le due alte ciminiere, la ruota a pale, le balle impilate, la passerella con gli scaricatori.",
"Sopra il pozzo è appesa una zucca per bere. Una canzone parla della “zucca per bere”, cioè del Grande Carro, che indica la stella polare e il Nord: si racconta che nascondesse una via di fuga, ma gli studiosi discutono su quanto fosse usata. Cerca: la zucca appesa, le sette stelle del Carro, la stella che brilla di più.",
"Charleston è la città più elegante del Sud: campanili bianchi, case dai colori pastello, il porto con le navi del cotone e del riso. Il 20 dicembre 1860 la Carolina del Sud è il primo Stato a lasciare l’Unione; entro febbraio altri sei la seguono e nascono gli Stati Confederati. Cerca: i campanili, le case a pastello, le navi alla fonda.",
"Alle 4 e 30 del 12 aprile 1861 un colpo di mortaio illumina il porto: comincia la guerra. Il forte pentagonale di Fort Sumter, tenuto da una piccola guarnigione dell’Unione, si arrende dopo trentaquattro ore di bombardamento, e nessuno muore sotto i colpi. Cerca: il forte sull’acqua, le scie dei proiettili, la bandiera a stelle e strisce.",
"Nel buio del 13 maggio 1862 Robert Smalls, uno schiavo che fa il timoniere, indossa il cappello di paglia del capitano e porta il piroscafo Planter fuori dal porto con la sua famiglia, passando davanti a cinque postazioni sudiste. Poi consegna la nave alla flotta dell’Unione. Cerca: il piccolo piroscafo, il cappello di paglia, la bandiera bianca.",
"Nel novembre 1861 la flotta dell’Unione conquista le isole di Port Royal: i proprietari fuggono e restano circa diecimila persone, di fatto libere. Arrivano maestri dal Nord e nasce una scuola dove imparano a leggere i bambini, e anche gli adulti. Cerca: le querce con il muschio, la lavagna, i bambini con i libri.",
"Nella notte fra l’1 e il 2 giugno 1863 tre battelli a vapore risalgono il fiume Combahee, in Carolina del Sud, guidati dai soldati neri e da Harriet Tubman, che conosce la zona: quando suona il fischio, più di settecento persone corrono verso le barche. Cerca: i tre battelli sul fiume, i campi di riso, la gente con i fagotti.",
"A Washington, in piena guerra, si costruisce ancora. Sul Campidoglio sale la nuova cupola di ghisa: Lincoln vuole che i lavori non si fermino, perché sia chiaro che l’Unione continua. Il 2 dicembre 1863 viene posata la statua della Libertà. Cerca: le gru e le impalcature, la cupola a metà, la statua in bronzo in attesa a terra.",
"La Casa Bianca è anche la casa di una famiglia: Lincoln, la moglie Mary e i figli piccoli, con capre e cavalli. Il presidente riceve chiunque, al mattino, in coda sullo scalone; fuori ci sono soldati di guardia. Cerca: il portico a colonne, le capre sul prato, la fila di visitatori.",
"Il Monumento a Washington è un moncone di marmo alto circa quarantacinque metri: i lavori sono fermi dal 1854 e finiranno solo nel 1884, a quasi centosettanta metri. Intorno pascolano le mucche dell’esercito. Cerca: il tronco di obelisco, le mucche, il fango intorno e un recinto con barili.",
"Nell’ufficio del telegrafo del Dipartimento della Guerra, Lincoln passa ore a leggere i dispacci dal fronte e, nell’estate 1862, scrive qui la prima bozza dell’Emancipazione. È la prima guerra in cui il telegrafo conta davvero. Cerca: i tasti e i fili, il tavolo, un uomo molto alto con il cappello a cilindro.",
"A Washington ci sono decine di ospedali, in chiese, scuole e baracche. Ci lavorano infermiere e volontari: la scrittrice Louisa May Alcott, che ne farà un libro, e il poeta Walt Whitman, che passa i pomeriggi accanto ai letti con tabacco, caramelle e carta per scrivere a casa. Cerca: la corsia di letti, l’ambulanza a quattro ruote, un uomo barbuto con il cappello a falde larghe.",
"Il 27 febbraio 1860, a New York, un avvocato dell’Illinois poco conosciuto tiene un discorso alla Cooper Union: parla di schiavitù e dei Padri fondatori, e la sala lo applaude a lungo. Lo stesso giorno si fa fotografare da Mathew Brady: la foto lo aiuterà a farsi conoscere. Cerca: la facciata di pietra rossastra, il manifesto, il fotografo con la tenda scura.",
"Il Nord ha più del doppio degli abitanti del Sud, quasi tutta l’industria e la maggior parte delle ferrovie: fonderie, armerie e fabbriche di divise lavorano giorno e notte per l’esercito. Per la prima volta i treni portano soldati e cannoni al fronte. Cerca: la locomotiva con il fumaiolo a imbuto, le ciminiere, le casse di fucili.",
"Nel marzo 1863 compare in città un manifesto: “Men of Color, to Arms!”, uomini di colore, alle armi! Lo scrive Frederick Douglass. Il 28 maggio il 54° Massachusetts, primo reggimento nero del Nord, sfila per Boston prima di partire per il Sud. Cerca: il manifesto a grandi lettere, le giubbe blu, la bandiera.",
"Alla fine dell’Ottocento (il tempo si piega) a Boston si inaugura un monumento di bronzo al colonnello Robert Gould Shaw e ai soldati del 54°. Il 18 luglio 1863 il reggimento attacca Fort Wagner, vicino a Charleston, e il sergente William Carney salva la bandiera. Cerca: i soldati in rilievo, il cavallo, l’angelo.",
"A Castle Garden, alla punta di Manhattan, sbarcano ogni giorno migliaia di emigranti: irlandesi, tedeschi, italiani, ungheresi. Circa un soldato su quattro dell’Unione è nato fuori dall’America. A New York nasce anche la “Garibaldi Guard”, un reggimento con cappelli piumati alla bersagliera. Cerca: il molo con i bauli, le bandiere, i cappelli piumati.",
"Nell’accampamento le tende bianche sono in fila ordinata. La giornata comincia con il tamburo alle cinque e mezza: appello, esercitazioni, caffè e lunghe ore di noia. Per ingannare l’attesa si gioca a carte e a baseball, si canta e si scrivono lettere a casa. Cerca: le tende a punta, il fuoco con la caffettiera, la partita di baseball.",
"Il 21 luglio 1861 a Bull Run, poco lontano da Washington, si combatte la prima grande battaglia. Molti cittadini arrivano in carrozza con i cestini del pranzo per guardare, convinti di fare una gita: finisce con una ritirata disordinata dell’Unione. Cerca: le carrozze con signore e ombrellini, il fumo sulla collina, le divise blu e grigie.",
"Il 17 settembre 1862, a Sharpsburg, nel Maryland, si combatte il giorno più sanguinoso della storia americana: più di ventiduemila tra morti, feriti e dispersi in poche ore. Fra i campi di mais c’è una chiesetta bianca e un ponte di pietra. Cerca: la chiesetta bianca, il campo di mais, il ponte a tre archi, Clara Barton con il suo carro.",
"Due giorni dopo Antietam, il fotografo Alexander Gardner, della bottega di Mathew Brady, arriva sul campo con il furgone laboratorio, che i soldati chiamano “What-is-it wagon”. Le immagini, esposte a New York in ottobre, mostrano per la prima volta alla gente la realtà della guerra. Cerca: il furgone nero, la macchina su cavalletto, la tenda scura.",
"Dall’1 al 3 luglio 1863, a Gettysburg, in Pennsylvania, si combatte la battaglia più grande della guerra. Il 3 luglio, in un pomeriggio caldo, circa dodicimila confederati attraversano un lungo campo contro la linea dell’Unione: è la carica di Pickett. Le perdite sono circa cinquantamila. Cerca: il muro di pietra, il boschetto al centro, i cannoni.",
"Il 19 novembre 1863, a Gettysburg, si inaugura il cimitero dei soldati. Il primo oratore parla due ore; poi Lincoln, con il cappello a cilindro, pronuncia 272 parole in circa due minuti e parla di “una nuova nascita di libertà”. Cerca: la tribuna di legno, il cappello a cilindro, la folla, le tombe a semicerchio.",
"Il Mississippi è la grande strada del Paese: battelli a ruota, bianchi come torte nuziali, portano cotone, passeggeri e giocatori d’azzardo. Il pilota guida dalla cabina di vetro, mentre un marinaio misura la profondità con una corda. Cerca: le due ciminiere, la ruota a pale, il marinaio con la sonda, le balle di cotone.",
"A St. Louis James Eads costruisce in cento giorni le prime corazzate fluviali dell’Unione: scafi bassi, fianchi di ferro inclinati, cannoni all’interno. Una di esse, la Cairo, affonda su una mina il 12 dicembre 1862: nessuno muore, e la nave sarà recuperata nel 1964. Cerca: la casamatta inclinata di ferro, la ciminiera, i cannoni.",
"Vicksburg sorge su alte colline sopra il fiume e per i sudisti è una fortezza naturale. Durante l’assedio del 1863 gli abitanti scavano grotte nel terreno friabile per ripararsi dalle cannonate; qualcuno le arreda con tappeti e letti. Cerca: le colline scavate con le aperture, le tende, i cannoni sulle terrazze, il palazzo del tribunale con la cupola.",
"Dopo quarantasette giorni di assedio, il 4 luglio 1863 il generale Pemberton si arrende a Grant con circa ventinovemila uomini: il Mississippi è in mano all’Unione e la Confederazione è tagliata in due. I soldati dell’Unione dividono il pane con i vinti. Cerca: la bandiera bianca, i fucili in pila, i soldati che offrono galletta e caffè.",
"L’8 e il 9 marzo 1862, a Hampton Roads, in Virginia, si combatte il primo scontro fra navi corazzate: la sudista Virginia e l’unionista Monitor, con la torretta girevole, che sembra una scatola da formaggio su una zattera. Finisce in parità, ma le marine di tutto il mondo cambiano. Cerca: la torretta rotonda, la nave dal tetto inclinato, il fumo.",
"Richmond è la capitale della Confederazione. Sulla collina c’è il Campidoglio della Virginia, un tempio bianco disegnato da Thomas Jefferson sul modello di un tempio romano di Nîmes, in Francia. Le fonderie Tredegar fanno cannoni, ma il pane scarseggia e il 2 aprile 1863 centinaia di donne protestano per strada. Cerca: il tempio con le colonne, le ciminiere, i cesti vuoti.",
"Sopra il Potomac, di fronte a Washington, sorge Arlington House, la casa di Robert E. Lee: nel 1864 il terreno viene usato per seppellire i soldati dell’Unione e diventerà il Cimitero Nazionale di Arlington. Cerca: la casa con le grandi colonne doriche, il prato in discesa, le prime file di lapidi bianche.",
"Da giugno 1864 ad aprile 1865, per quasi dieci mesi, Petersburg è assediata: le due armate scavano chilometri di trincee. Il 30 luglio 1864 minatori della Pennsylvania fanno esplodere una galleria sotto le linee nemiche e aprono un enorme cratere. Cerca: le trincee a zig zag, i sacchi di sabbia, il cratere con la terra smossa.",
"Il 9 aprile 1865, domenica delle Palme, l’esercito di Lee è circondato attorno al villaggio di Appomattox Court House: una locanda, il palazzo del tribunale e poche case. Fuori, gli alberi sono in fiore e la primavera sembra ignorare la guerra. Cerca: il tribunale di mattoni, la locanda con la veranda, i soldati stanchi lungo la strada.",
"La casa di Wilmer McLean è in mattoni, con la veranda: nel salotto, il 9 aprile, Lee e Grant firmano la resa. Si racconta che McLean si fosse trasferito qui per fuggire dalla guerra, dopo che Bull Run si era combattuta nel suo podere: la guerra era cominciata nel suo giardino e finiva nel suo salotto. Cerca: due uomini al tavolo, una divisa grigia e una giubba blu infangata.",
"Il 12 aprile i soldati confederati sfilano per consegnare fucili e bandiere. Il generale dell’Unione Joshua Chamberlain ordina ai suoi uomini di presentare le armi in segno di rispetto e i vinti rispondono con lo stesso saluto. Grant lascia a chi possiede un cavallo o un mulo di tornare a casa con lui, per arare i campi. Cerca: le due file di soldati, i fucili in pila, i cavalli e i muli.",
"A Manchester, la “Cottonopolis”, nel 1862 molte filande sono ferme: con il blocco dei porti del Sud arriva poco cotone americano. Centinaia di migliaia di operai restano senza lavoro e vivono di aiuti: è la “fame del cotone”. Cerca: la ciminiera senza fumo, la fila davanti alla cucina dei poveri, le balle di cotone indiano.",
"Il 31 dicembre 1862, nella Free Trade Hall di Manchester, operai affamati approvano un messaggio a Lincoln: sosterranno l’Unione, perché la guerra serve a liberare gli schiavi. Lincoln risponde con una lettera pubblica; a febbraio una nave carica di viveri donati dagli americani arriva da New York. Cerca: la sala a colonne, la lettera con il sigillo, i sacchi di farina.",
"Il 19 giugno 1864, davanti a Cherbourg, in Francia, la nave sudista Alabama, costruita a Birkenhead, in Inghilterra, combatte con la nordista Kearsarge: la folla guarda dalla costa e Édouard Manet dipingerà la scena. L’Alabama affonda dopo circa un’ora. Cerca: le due navi nel fumo, la folla sulla scogliera, il panfilo inglese che salva i naufraghi.",
"Il 5 maggio 1862, a Puebla, in Messico, l’esercito messicano sconfigge i francesi di Napoleone III, che vogliono mettere sul trono un imperatore europeo, Massimiliano d’Asburgo. È l’origine del “Cinco de Mayo”. Gli Stati Uniti, in guerra, non possono intervenire: lo faranno dopo il 1865. Cerca: i forti sulla collina, le bandiere tricolori, gli zuavi dai pantaloni rossi.",
"Nel 1861, mentre l’America si spezza, l’Italia si unisce: il 17 marzo nasce il Regno d’Italia. Il governo di Lincoln offre a Garibaldi un comando nell’esercito dell’Unione; lui chiede il comando supremo e l’abolizione della schiavitù, e non se ne fa nulla. Cerca: la camicia rossa e il poncho, il tricolore, il mare di Caprera.",
"Il Venerdì Santo, 14 aprile 1865, a Washington, Lincoln va a teatro, al Ford’s Theatre. Un attore, John Wilkes Booth, gli spara nel palco: il presidente muore la mattina dopo, in una casa di fronte. La città si copre di nero. Cerca: la facciata di mattoni con le finestre illuminate, i drappi, la casa di fronte con un lume.",
"Il 21 aprile 1865 un treno nero lascia Washington con il feretro di Lincoln e viaggia per oltre duemilaseicento chilometri fino a Springfield, nell’Illinois: nelle notti la gente aspetta sui binari con torce e falò, a capo scoperto. Arriva il 3 maggio. Cerca: la locomotiva con i drappi neri, il vagone, i falò lungo i binari.",
"Il 19 giugno 1865, a Galveston, in Texas, il generale dell’Unione Gordon Granger annuncia che tutte le persone ridotte in schiavitù sono libere: in Texas il Proclama non era mai stato fatto rispettare. Quel giorno, “Juneteenth”, è ancora oggi una festa con musica e cibi rossi. Cerca: il balcone con il generale, la folla con le lanterne, la tavola con la cena.",
"Il 6 dicembre 1865 la Georgia ratifica il Tredicesimo emendamento e si raggiunge il numero di Stati necessario: la schiavitù è abolita in tutto il Paese. Il testo è breve, poche righe. Era iniziata più di due secoli prima. Cerca: il documento scritto a mano, la folla davanti al Campidoglio, le bandiere, i cannoni a salve.",
"Sul golfo del Messico scende la notte e compare il Gran Carro con la stella polare: la stessa che guidava chi scappava, in quella lontana alba. Sotto, una famiglia con le lanterne guarda il mare e il varco si apre fra le stelle. Cerca: l’Orsa Maggiore, la stella polare, le lanterne, la luce del varco."];
/* ===================== personaggi ===================== */
const NP=(id,x,o,acc)=>({id,name:NAME[id],x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));P(g,px,y,t,Object.assign({f:f,s:1},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:GREET[id]}}});
const gonna=(g,c,h)=>poly(g,c,[[-13,-66],[13,-66],[h||19,-6],[-(h||19),-6]]);
const npcs=[
 /* Hetty: abito di cotone stampato, grembiule bianco, fazzoletto in testa, cesto di pane */
 NP('sx_hetty',LX[1]+250,{skin:'#7a4a2e',top:'#b8603a',bot:'#b8603a',hair:'#1a120c',long:1,s:.98},(g,b,t)=>{gonna(g,'#b8603a',20);poly(g,BIA,[[-11,-64],[11,-64],[14,-10],[-14,-10]]);for(let q=0;q<5;q++)dot(g,'rgba(120,50,30,.5)',-12+q*6,-30-q%2*14,1.4);fazz(g,b,'#e8c84a');el(g,'#8a5a30',17,-58+b,11,6);rect(g,'#8a5a30',7,-64+b,20,3);for(let q=0;q<3;q++)el(g,'#d8b070',12+q*4,-64+b,4,3)}),
 /* Tubman: scialle, fazzoletto rosso, gonna lunga, bastone e fagotto */
 NP('sx_tubman',LX[9]-220,{skin:'#6a3e26',top:'#4a3a5a',bot:'#5a4a4a',hair:'#1a120c',long:1,s:.98},(g,b,t)=>{gonna(g,'#5a4a4a',20);poly(g,'#7a5a3a',[[-14,-92+b],[0,-96+b],[14,-92+b],[18,-60+b],[-18,-60+b]]);fazz(g,b,'#c8402a');ln(g,'#6a4a28',3,[18,-84+b,26,-4]);rect(g,'#c8a468',-24,-50+b,14,16);ln(g,'#6a4a28',1.4,[-24,-42+b,-10,-42+b])}),
 /* Lincoln: cilindro, barba, tight frac nero, cravatta */
 NP('sx_lincoln',LX[11]+245,{skin:'#d8a880',top:'#1c1c24',bot:'#1c1c24',hair:'#1a1008',s:1.16},(g,b,t)=>{stov(g,b);barba(g,b,'#1a1008',7);rect(g,BIA,-4,-90+b,8,22);poly(g,'#1c1c24',[[-3,-90+b],[0,-84+b],[3,-90+b]]);ln(g,'#2a2a32',2,[-13,-66+b,-18,-30]);ln(g,'#2a2a32',2,[13,-66+b,18,-30])}),
 /* Douglass: chioma folta, frac scuro, camicia bianca, giornale */
 NP('sx_douglass',LX[17]+240,{skin:'#6a3e26',top:'#2a2a34',bot:'#2a2a34',hair:'#4a4a4a',s:1.04},(g,b,t)=>{el(g,'#5a5a5a',0,-114+b,15,8);el(g,'#5a5a5a',-8,-104+b,8,8);rect(g,BIA,-4,-90+b,8,20);poly(g,'#8a1a1a',[[-3,-88+b],[0,-82+b],[3,-88+b]]);rect(g,'#e8e0cc',12,-70+b,14,18);ln(g,'#6a5a48',1,[14,-66+b,24,-66+b])}),
 /* Sam: kepi, giubba blu, pantaloni azzurri, fucile, borraccia e zaino */
 NP('sx_sam',LX[20]+250,{skin:'#d0996c',top:BLU,bot:CEL,hair:'#5a3a20',s:.98},(g,b,t)=>{kepi(g,b);rect(g,'#6a5a3a',-18,-84+b,8,24);dot(g,'#8a9aa0',-14,-52+b,5);rect(g,'#d8d0b8',-20,-70+b,6,14);ln(g,'#c8a030',1.4,[-6,-90+b,10,-60+b]);ln(g,'#3a2a1c',2.6,[16,-26,20,-130]);ln(g,'#aeb0b8',1.2,[20,-130,20,-142]);rect(g,'#e8e0cc',-8,-60+b,12,3)}),
 /* Zeb: berretto, camicia a righe, gilet, sagola dello scandaglio, pipa */
 NP('sx_zeb',LX[26]+240,{skin:'#c8906a',top:'#9a9aa8',bot:'#4a4036',hair:'#5a4028',s:1.0},(g,b,t)=>{cop(g,b,'#2a3a50');rect(g,'#3a3a44',-12,-90+b,24,20);for(let q=0;q<5;q++)rect(g,'#e8e0cc',-12,-86+b+q*5,24,1.2);poly(g,'#7a5a38',[[-6,-96+b],[9,-97+b],[8,-90+b],[0,-87+b]]);ln(g,'#6a5a3a',1.4,[12,-92+b,20,-88+b]);dot(g,'#4a3a2a',22,-88+b,2.6);el(g,'#c8b890',-14,-56+b,6,4);ln(g,'#c8b890',1.6,[-14,-56+b,-20,-36])}),
 /* Lee: giacca grigia doppiopetto, cappello grigio, barba bianca, sciabola */
 NP('sx_lee',LX[34]+235,{skin:'#e0b090',top:GRI,bot:'#7a7a74',hair:'#d8d4c8',s:1.04},(g,b,t)=>{slouch(g,b,'#6a6a64');poly(g,'#e8e4d8',[[-4,-96+b],[9,-97+b],[9,-86+b],[0,-80+b]]);for(let q=0;q<4;q++)dot(g,ORO,-6+(q%2)*10,-84+b+q*6,1.5);rect(g,'#c8a030',-12,-62+b,24,3);ln(g,'#aeb0b8',2,[-14,-60+b,-30,-26]);rect(g,'#c8a030',-16,-62+b,5,3)}),
 /* Grant: cappello nero a tesa, cappotto blu infangato, spalline, sigaro */
 NP('sx_grant',LX[35]+235,{skin:'#d8a47c',top:'#2a3a68',bot:'#3a4a6a',hair:'#5a3a20',s:.98},(g,b,t)=>{slouch(g,b,'#2a2a2e');poly(g,'#5a3a20',[[-4,-96+b],[9,-97+b],[8,-88+b],[0,-84+b]]);rect(g,ORO,-14,-90+b,8,3);rect(g,ORO,6,-90+b,8,3);for(let q=0;q<6;q++)dot(g,'rgba(90,60,30,.55)',-10+q*4,-40-(q%3)*8,2.6);ln(g,'#e8e0cc',2,[8,-94+b,16,-92+b]);dot(g,'#ff8a30',17,-92+b,1.3)}),
 /* Ann: scialle scuro, cuffia, gonna lunga, zoccoli di legno */
 NP('sx_ann',LX[37]+245,{skin:'#e0b090',top:'#4a4a58',bot:'#5a4a4a',hair:'#6a4a2a',long:1,s:.98},(g,b,t)=>{gonna(g,'#5a4a4a',20);poly(g,'#2a2a34',[[-15,-92+b],[0,-96+b],[15,-92+b],[19,-56+b],[-19,-56+b]]);bon(g,b,'#c8c0aa');rect(g,'#5a3e22',-11,-8,10,8);rect(g,'#5a3e22',2,-8,10,8);el(g,'#d8d0b8',14,-52+b,8,5);rect(g,'#9a8a6a',8,-56+b,14,3)})
];
/* ---- oggetti lungo il percorso ---- */
const T0=['SUD DEL COTONE|Alba','CHARLESTON|Primo mattino','WASHINGTON|Mattina','IL NORD|Tarda mattina','BATTAGLIE|Mezzogiorno','IL MISSISSIPPI|Primo pomeriggio','LA VIRGINIA|Pomeriggio','EUROPA E MONDO|Tardo pomeriggio','LA FINE|Sera e notte'];
const PN=['sxcampi','sxquartiere','sxcasa','sxbattello','sxpozzo','sxcharleston','sxsumter','sxsmalls','sxportroyal','sxcombahee','sxcampidoglio','sxcasabianca','sxmonumento','sxtelegrafo','sxospedale','sxcooper','sxfabbrica','sxarruola','sxshaw','sxcastle','sxcampo','sxbullrun','sxantietam','sxfotografo','sxgettysburg','sxcimitero','sxfiume','sxcorazzata','sxvicksburg','sxresa','sxmonitor','sxrichmond','sxarlington','sxpetersburg','sxappvillage','sxmclean','sxarmi','sxmanchester','sxfreetrade','sxcherbourg','sxpuebla','sxitalia','sxford','sxtreno','sxgalveston','sx13','sxvarco'];
const props=[];T0.forEach((n,z)=>props.push(['sxtarga',Z[z]+90,n]));PN.forEach((n,i)=>props.push([n,LX[i]]));props.sort((a,b)=>a[1]-b[1]);
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'secessione',name:WNAME,width:W1,sky:['#6b6a86','#d79a8c','#f6cf9a'],gt:372,gr:['#8a6a46','#6e5234'],chord:[174.6,220,261.6,329.6],amb:'#ffe8c0',
intro:INTRO,look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerLife)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (la dodicesima è il saluto) --- */
(function(){
const TOPX_SX={
sx_hetty:[
["Chi sei e che lavoro fai in questa piantagione?","Sono Hetty, ho trentaquattro anni e comando la cucina della casa grande: pane, minestre, polli, conserve. Il padrone mi chiama ‘la cuoca’, ma io ho anche un marito, Isaac, che lavora nei campi, e tre figli. Mi alzo prima del sole, perché il fuoco non si accende da solo."],
["Com’è fatta una tua giornata, dall’alba al tramonto?","Quando suona il corno è ancora buio. Accendo il forno, impasto, servo la colazione ai padroni e poi cucino per la casa fino a sera. Chi lavora nei campi esce con il sole e rientra con il buio. Si riposa solo la domenica, e anche allora c’è sempre qualcosa da fare."],
["Mi spieghi come si raccoglie il cotone? Mi sembra durissimo.","Lo è. Le capsule si aprono e dentro c’è il cotone, ma i bordi sono appuntiti come spine e le dita sanguinano. Si cammina curvi lungo il filare con un lungo sacco a tracolla; la sera lo si pesa, e chi non porta la quota rischia le frustate. Non c’è giorno di raccolto che non faccia male."],
["Cosa mangiate durante la settimana?","La razione è quasi sempre la stessa: farina di mais, un po’ di lardo salato e melassa. Ma ognuno ha il suo orto accanto alla capanna, con cavoli, patate dolci e fagioli, e c’è chi tiene galline o pesca nel fiume. Con un po’ di fortuna si porta a casa un opossum: cotto con le patate dolci è una festa."],
["Com’è fatta la vostra casa? Dove dormite?","In una capanna di tronchi, una stanza per famiglia, con il camino di argilla e le fessure tappate col fango. Dentro, un letto di paglia, una panca, qualche pentola. D’inverno ci si stringe, d’estate si dorme con la porta aperta. Le coperte le cuciamo noi, con i pezzi di stoffa avanzati: ognuna racconta qualcosa."],
["Cosa fate la domenica o nelle sere libere?","La domenica si va in chiesa, o nel bosco quando vogliono tenerci lontani dagli occhi dei bianchi: si canta, si prega, si gira in cerchio nel ‘ring shout’. La sera si raccontano le storie di Fratel Coniglio, che con la furbizia batte i più forti. E quando due giovani si sposano, saltano la scopa: quello è il nostro matrimonio."],
["Posso chiederti se sai leggere?","No, e non perché non voglia. In quasi tutti gli Stati del Sud è vietato per legge insegnare a leggere a chi è in schiavitù. Qualcuno impara le lettere di nascosto dalla Bibbia e le insegna agli altri sottovoce. Un foglio scritto, qui, è un oggetto pericoloso: vale più di una moneta."],
["Come fate a sapere le notizie? Il padrone parla davanti a voi?","Parla, parla, e non si accorge che io servo la zuppa e ascolto. Così ho saputo che a novembre hanno eletto Lincoln, un uomo del Nord, e che la Carolina del Sud ha lasciato l’Unione. Ad aprile ho sentito parlare di cannoni su un forte, a Charleston. Le notizie viaggiano più in fretta di quanto lui creda."],
["Se qualcuno volesse scappare, come potrebbe fare?","Di notte, a piedi, seguendo il Gran Carro che indica la stella polare, verso il Nord. Si racconta che la canzone della ‘zucca per bere’ ricordi la strada. Ma ci sono i cani, le pattuglie e i manifesti con la taglia. Chi ce la fa trova persone che aiutano di nascosto: la chiamano la ferrovia sotterranea."],
["Cosa speri per i tuoi figli?","Che restino con me. Ho visto vendere al mercato famiglie intere e non rivederle mai più, un bambino alla volta, una madre alla volta. Spero che imparino un mestiere e un giorno, magari, a leggere. E che nessuno dei tre debba mai dirmi addio: è una cosa che non si impara."],
["Qual è il piatto di cui vai più orgogliosa? Mi dai la ricetta?","Il pane di mais con le verdure e il loro brodo, e per le feste il pollo fritto. Molto di quello che cucino viene dall’Africa: il gombo, i fagioli dall’occhio, il sesamo, il modo di cuocere il riso. Per il pane: farina di mais, latte, un uovo se c’è, sale e strutto, e la padella ben calda."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se per strada incontri qualcuno che ha fame, dagli qualcosa: costa poco e vale molto. Io torno al forno prima che il pane bruci e il padrone si arrabbi. Se passi di qui al tramonto sentirai cantare dai campi: e allora saprai che nessuno si è arreso."]
],
sx_tubman:[
["Chi sei, e come mai ti trovo qui, nelle isole della Carolina?","Mi chiamo Harriet Tubman, ho circa quarant’anni e sono nata schiava nel Maryland. Qui lavoro per l’esercito dell’Unione: curo i malati, cucino e faccio da esploratrice, perché conosco gente e strade nascoste. Mi ha mandata il governatore del Massachusetts: la guerra ha bisogno di chi sa muoversi di notte."],
["Mi racconti com’è stata la tua fuga, nel 1849?","Avevo paura di essere venduta lontano dalla mia famiglia, così una notte me ne sono andata da sola, a piedi, verso la Pennsylvania. Mi guidavano la stella polare e qualche amico quacchero che mi ha dato un nome e un tetto. Quando ho passato il confine mi sono guardata le mani: ero la stessa persona, ma ero libera."],
["Come facevi a guidare gli altri verso il Nord senza farti prendere?","Partivamo il sabato sera, perché i giornali non stampano gli annunci dei fuggitivi prima del lunedì. Si cammina di notte, si dorme di giorno nascosti, si cambia strada ogni volta, si bussa alle case amiche con un segnale convenuto. Dicono che a chi voleva tornare indietro mostrassi la pistola: chi torna parla, e mette tutti in pericolo."],
["È vero che ti addormentavi all’improvviso, anche camminando?","Sì: da ragazza un sorvegliante mi colpì alla testa con un peso di ferro mentre cercavo di proteggere un altro schiavo, e da allora mi capita di cadere addormentata, anche nel mezzo di un discorso. Ho avuto strane visioni e le ho sempre prese come segni di Dio. Mi ha salvata e rallentata, dipende dai giorni."],
["Quante persone hai portato in salvo?","Tredici viaggi, circa settanta persone, tra parenti, amici e sconosciuti. Ad altri ho indicato la strada. E non ho mai perso un passeggero, né il mio treno è mai uscito dai binari: lo dico con un po’ d’orgoglio. Mi chiamano Mosè, ma Mosè non sono io: è la strada che porta fuori."],
["Perché hai deciso di aiutare l’esercito dell’Unione?","Perché questa guerra, che dicono sia per l’Unione, per me è per la libertà. Nel ’62 sono venuta a Port Royal, dove i soldati dell’Unione sono sbarcati e migliaia di ex schiavi hanno bisogno di tutto. Se posso essere utile con quello che so, io ci sono."],
["Come curi i soldati malati?","Con le erbe che conosco: radici e piante di palude, camomilla, bacche. Per la dissenteria, il flagello di ogni accampamento, faccio un decotto di radici di ninfea e di geranio selvatico: più di una volta ha rimesso in piedi un uomo che i medici davano per perso. Ma servono soprattutto acqua pulita e pazienza."],
["Raccontami la spedizione sul fiume Combahee.","Nella notte del 1° giugno tre battelli a vapore sono risaliti il fiume con circa centocinquanta soldati neri. Conoscevo i campi e le mine nascoste, perché i miei esploratori me le avevano indicate. Al fischio, centinaia di persone sono corse verso le barche con i bambini, i maiali legati e le pentole: più di settecento, in poche ore."],
["Cosa cantavate per darvi coraggio e per farvi capire a distanza?","I canti spirituali. Quando cantavo ‘Va’, Mosè’ nel bosco, chi doveva sentire sapeva che l’ora era vicina; se cambiavo le parole, voleva dire di nascondersi. Per i padroni era preghiera, per noi un messaggio. Era la cosa più preziosa che avessimo, e non costava niente."],
["L’esercito ti paga? Hai uno stipendio?","Quasi niente. Per vivere vendo torte e birra di radici ai soldati, che le mangiano come se piovesse. Dicono che solo nel 1899 il Congresso mi riconoscerà una pensione di venti dollari al mese: ci vorranno più di trent’anni. Ma non faccio queste cose per i soldi."],
["E dopo la guerra? Cosa farai?","Ho già una casa ad Auburn, nello Stato di New York, che ho comprato da William Seward. Un giorno ci accoglierò i vecchi e i poveri, e lotterò per il voto alle donne insieme a Susan Anthony. Morirò nel 1913, a quasi novant’anni, circondata dagli amici."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e quando vedi una stella chiara ricordati che non tutte le strade hanno le insegne. Io torno al fiume: stanotte c’è luna e dobbiamo muoverci. La libertà è una cosa che si prende, ma anche una che si regala agli altri."]
],
sx_lincoln:[
["Chi sei, e cosa fai in questa casa così grande?","Mi chiamo Abraham Lincoln, sono il sedicesimo presidente degli Stati Uniti e abito qui con la famiglia. La Casa Bianca è più un ufficio che una casa: la mattina ricevo la gente in coda sullo scalone, il pomeriggio leggo i dispacci e la sera cerco di dormire."],
["Com’è stata la tua infanzia? Hai davvero vissuto in una capanna di tronchi?","Sì, nel Kentucky e poi nell’Indiana. A scuola sono andato meno di un anno in tutto: il resto l’ho imparato da solo, con libri prestati letti al lume del fuoco. Ho spaccato ceppi per fare steccati, fatto il battelliere, il negoziante, l’avvocato. E sono alto un metro e novantatré: da ragazzo ero un palo magro."],
["Come ti sei fatto crescere la barba? Mi hanno detto che c’entra una bambina.","È vero! Nel 1860, durante la campagna elettorale, mi scrisse Grace Bedell, undici anni, da Westfield, a New York: con le basette starei meglio e le signore voterebbero per me. Ho risposto e ho lasciato crescere la barba. Andando a Washington in treno mi sono fermato a Westfield e l’ho cercata per ringraziarla di persona."],
["Perché hai voluto continuare a costruire la cupola del Campidoglio durante la guerra?","Perché finire quella cupola era un modo di dire che l’Unione non si sarebbe fermata: se la gente vede il lavoro andare avanti, capisce che abbiamo intenzione di restare. Quando hanno posato la statua della Libertà, a dicembre del ’63, hanno sparato trentacinque colpi di cannone, uno per Stato: anche per quelli che dicevano di non farne più parte."],
["Mi spieghi cos’è il Proclama di emancipazione e cosa cambia davvero?","Il 1° gennaio 1863 ho dichiarato liberi gli schiavi degli Stati in ribellione. Non vale per gli Stati di confine rimasti con noi, e da solo non basta: ma permette ai neri di arruolarsi, e ogni volta che i nostri soldati avanzano, la libertà avanza con loro. Per finire il lavoro serve un emendamento alla Costituzione, e a gennaio lo ha approvato anche la Camera."],
["Come si fa a reggere una guerra così lunga, giorno dopo giorno?","Con un po’ di umorismo, che è la mia medicina, e con lunghe camminate. Passo ore nell’ufficio del telegrafo, di notte rileggo Shakespeare, soprattutto Macbeth, e racconto storielle perfino ai generali, che non sempre ridono. Se non ridessi, dovrei piangere: e questo Paese ha già pianto abbastanza."],
["È vero che il tuo cappello serve anche da ufficio postale?","Un po’ sì! Ci infilo lettere, appunti e fogli importanti: quando giravo da avvocato non avevo un ufficio e il cappello era l’unico posto che non perdevo. È alto, nero e mi fa sembrare ancora più lungo del mio metro e novantatré. A volte i soldati mi vedono da lontano e dicono: ‘Ecco il Vecchio Abe’."],
["Com’è la vita della tua famiglia alla Casa Bianca?","Mary organizza i ricevimenti e si occupa dei ragazzi; Robert ha finito Harvard ed è entrato nello staff di Grant; il piccolo Tad è un uragano e ha due capre, Nanny e Nanko, che sono di casa. Abbiamo perso il mio Willie, a undici anni, nel ’62, e non ne parlo volentieri. Nel ’63 ho proclamato festa nazionale il Giorno del Ringraziamento, l’ultimo giovedì di novembre."],
["Cosa pensavi mentre scrivevi il discorso di Gettysburg?","Che dovessi dire poco, e bene: 272 parole, in circa due minuti, dopo che Edward Everett aveva parlato per due ore. Dissi che il mondo avrebbe notato poco e ricordato meno quel che avevamo detto lì: mi sbagliavo. E no, non l’ho scritto sul retro di una busta, come si racconta: ho fatto più bozze. Sulla via del ritorno mi venne il vaiolo, in forma leggera."],
["Cosa pensi di Frederick Douglass? Vi siete incontrati?","Tre volte. La prima nell’agosto del ’63, in questo studio: mi disse con franchezza che i soldati neri andavano pagati come gli altri, e aveva ragione. Il 4 marzo, dopo il mio secondo giuramento, i custodi non volevano farlo entrare al ricevimento: l’ho salutato davanti a tutti come ‘il mio amico Douglass’ e gli ho chiesto cosa pensasse del mio discorso."],
["Come immagini il dopoguerra? Cosa farai quando tutto sarà finito?","Nel discorso di oggi ho detto che dobbiamo agire senza rancore verso nessuno e con carità verso tutti: ricostruire, non vendicarsi. Quando tutto sarà finito, Mary e io vorremmo vedere l’Europa, la Terra Santa e la California. Poi tornare a Springfield a fare l’avvocato, se me lo lasceranno fare."],
["Posso salutarti e proseguire la mia passeggiata?","Vai pure, Pierpaolo, e se per strada senti una storia buffa tienila da parte per me: ne ho sempre bisogno. Si può restare fermi sulle cose giuste ed essere gentili con chi la pensa diversamente. Io torno ai miei dispacci, che non aspettano."]
],
sx_douglass:[
["Chi sei e come sei arrivato fin qui, da Rochester?","Sono Frederick Douglass, direttore di un giornale a Rochester, nello Stato di New York, e oratore per l’abolizione. Giro per il Nord da vent’anni a parlare di libertà. Sono nato nel Maryland, in schiavitù: non so con certezza la mia data di nascita, perché a noi non la dicevano. Ho scelto io, più o meno, il 1818."],
["Com’era la tua vita da ragazzo schiavo? Come hai imparato a leggere?","A Baltimora la moglie del mio padrone, Sophia, mi insegnò l’alfabeto; quando il marito lo scoprì le proibì di continuare, dicendo che uno schiavo che sa leggere non serve più a niente come schiavo. Aveva ragione. Io barattavo il pane con i ragazzi bianchi in cambio di lezioni e imparai da solo. Leggere è stata la mia prima strada verso la libertà."],
["Raccontami della tua fuga, nel 1838.","Mi sono travestito da marinaio e con i documenti prestati da un amico, un marinaio nero libero, ho preso un treno da Baltimora a Filadelfia, poi un battello fino a New York. Avevo vent’anni. Mi ha aiutato Anna, la donna che sarebbe diventata mia moglie. A New Bedford ho cambiato cognome in Douglass, preso da un poema di Walter Scott."],
["Perché sei andato in Irlanda e in Inghilterra?","Nel 1845, dopo aver pubblicato la mia autobiografia, rischiavo di essere ripreso dal mio vecchio padrone, così sono andato in Europa per due anni. Ho parlato in Irlanda, in Scozia, in Inghilterra. Per la prima volta mi hanno trattato semplicemente da uomo. Alla fine alcuni amici inglesi hanno raccolto il denaro per comprare la mia libertà legale, e sono tornato a casa."],
["Come fai a spiegare la tua causa solo con le parole? Cos’è il tuo giornale?","Le parole sono un’arma: le pronuncio in cento sale e le stampo sul mio giornale, il North Star, la stella polare, fondato nel 1847. Sul titolo ho fatto scrivere che il diritto non ha sesso e la verità non ha colore. Ho imparato a parlare dai predicatori e dai libri: sulla piazza ti ascoltano solo se dici cose vere in modo chiaro."],
["Perché hai insistito perché i neri potessero arruolarsi?","Perché se vuoi essere considerato un cittadino devi poter difendere il tuo Paese, e perché ogni soldato nero con la divisa blu è una prova vivente. Ho scritto: ‘Uomini di colore, alle armi!’ e ho girato il Nord a fare reclutamento. Due dei miei figli, Lewis e Charles, si sono arruolati nel 54° Massachusetts."],
["Com’è essere un soldato nero? Vi pagano come gli altri?","No: dieci dollari al mese, meno tre per la divisa, mentre i bianchi ne prendono tredici. Per protesta il 54° ha rifiutato lo stipendio per quasi un anno e mezzo, finché nel giugno del ’64 il Congresso ha riconosciuto la parità. E se un soldato nero viene catturato, rischia di essere venduto come schiavo: per questo Lincoln ha minacciato rappresaglie."],
["Come sono andati i tuoi incontri con Lincoln?","La prima volta, nell’agosto del ’63, mi ha ricevuto come un gentiluomo riceve un altro, senza ombra di imbarazzo: nessun bianco, prima di lui, mi aveva trattato così. A volte non siamo stati d’accordo, ma ha sempre ascoltato. E il 4 marzo scorso, dopo il suo secondo discorso, mi ha chiesto cosa ne pensassi: gli ho risposto che era un sacro impegno."],
["Ti hanno fatto molte fotografie? Mi dicono che sei il più ritratto d’America.","Credo di sì: ne avrò centosessanta o più, e sarò l’americano più fotografato dell’Ottocento. Ho parlato spesso delle immagini: le caricature mostravano i neri come bestie, una fotografia mostra un uomo com’è. Per questo non sorrido quasi mai: voglio che chi mi guarda capisca che sono una persona seria."],
["Raccontami di John Brown. L’hai conosciuto davvero?","L’ho conosciuto bene: un uomo di fede e di fuoco. Nel 1859, in una cava abbandonata presso Chambersburg, mi chiese di unirmi all’assalto di Harpers Ferry: gli dissi che era una trappola e rifiutai. Dopo l’attacco temetti di essere arrestato e scappai in Canada e poi in Inghilterra, mentre lui moriva sul patibolo, come un martire."],
["Cosa ti aspetti dopo la fine della guerra?","L’abolizione per legge, con il Tredicesimo emendamento. Ma libertà senza voto è mezza libertà: serviranno altri emendamenti per cittadinanza e diritto di voto, e li chiederò finché avrò voce. Un giorno mi nomineranno ambasciatore ad Haiti: una cosa che da ragazzo non avrei neppure sognato."],
["Posso salutarti e proseguire la mia passeggiata?","Vai pure, Pierpaolo, e ricordati: senza lotta non c’è progresso. Chi vuole il raccolto senza arare è come chi vuole il mare senza il fragore delle onde. E se un giorno ti dicono che una cosa è impossibile, chiedi a chi l’ha già fatta. Buon cammino."]
],
sx_sam:[
["Chi sei e come mai ti ritrovi in divisa?","Sono Sam, vent’anni, di una fattoria vicino a Harrisburg, in Pennsylvania. Mi sono arruolato nell’agosto del ’62 con tre amici del paese, convinti di tornare per il raccolto. Il premio di ingaggio mi pareva una fortuna. Adesso prendo tredici dollari al mese e di quegli amici due sono ancora con me."],
["Com’è la tua giornata in accampamento?","Alle cinque e mezza il tamburo, poi l’appello, la colazione, le esercitazioni, il turno di guardia, la cena, un altro appello e il silenzio alle nove. In mezzo, caffè e noia. Tra noi si dice che la guerra è fatta di mesi di noia e di qualche ora di terrore."],
["Cosa mangiate? Mi hanno parlato di biscotti durissimi.","La galletta! È un quadrato di farina e acqua duro come un mattone: si intinge nel caffè o si pesta, e se è vecchia ci trovi anche i vermi. La chiamiamo ‘rompidenti’. Poi manzo salato, lardo, fagioli e caffè, tanto caffè: ne beviamo dieci volte al giorno. Senza caffè, l’esercito dell’Unione si ferma."],
["Come fate a passare il tempo quando non si combatte?","Carte, dama, lettere, canzoni: ‘John Brown’s Body’ e ‘Battle Cry of Freedom’. E poi il baseball! Lo giochiamo con una palla di stracci e un bastone, e piace così tanto che a fine guerra lo porteremo in tutto il Paese. Ogni tanto i nostri e quelli del Sud si scambiano giornali e tabacco, da una sponda all’altra del fiume."],
["Com’è fatta la tua divisa e cosa porti addosso?","Giubba blu di lana, pantaloni azzurri, kepi e scarponi, tutto pesante e pizzicante. Sulle spalle zaino e coperta, alla cintura borraccia, cartucciera con quaranta colpi e baionetta. In mano il mio Springfield: una palla di piombo calibro 58 che a duecento metri colpisce un uomo. In tutto una quindicina di chili: d’estate è un forno."],
["Come funziona una battaglia vista da chi c’è dentro?","Una linea di uomini spalla a spalla che avanza al passo, con il tamburo e il fumo che ti brucia la gola. Si carica in nove movimenti e un buon soldato spara due o tre colpi al minuto. Non sai cosa succede più in là di venti metri: senti il frastuono, segui la bandiera e il sergente che grida. Alla fine ti tremano le mani."],
["Com’è stato il giorno di Gettysburg, nel tuo stesso Stato?","Era luglio, un caldo che non ti dico. Il primo giorno li abbiamo fermati sulle colline, il secondo ancora; il terzo siamo rimasti dietro un muro di pietra ad aspettare che i sudisti attraversassero il campo. Sono venuti, in file ordinate: dopo, per terra, non c’era quasi più nessuno in piedi. Le perdite sono state circa cinquantamila, fra i due eserciti."],
["Qual è la cosa più pericolosa per un soldato? Le pallottole?","No, le malattie: dissenteria, tifo, morbillo, polmonite. Più di due soldati su tre che muoiono, muoiono per quelle. Si beve acqua sporca, si dorme per terra, le latrine sono troppo vicine. I medici hanno pochi mezzi e molto da fare: un buon infermiere vale più di un cannone."],
["Nel tuo esercito ci sono soldati stranieri o neri? Come vi trovate?","Molti: nel mio reggimento ci sono tedeschi e irlandesi, e sai che circa un soldato su quattro dell’Unione è nato all’estero. Da quest’anno ci sono anche i reggimenti di colore: li ho visti marciare e combattono come leoni. Per loro la posta è doppia: combattono per l’Unione e per la propria libertà."],
["Non hai paura di non tornare a casa?","Certo che sì, a tutti. Qualcuno si cuce il nome nella giubba o compra da un venditore ambulante una medaglietta con nome e reggimento, perché se muori senza nome nessuno lo dice alla tua famiglia. Io tengo una lettera di mia madre nella giubba e una Bibbia piccola, che pesa poco e fa compagnia."],
["Cosa farai dopo la guerra?","Tornerò alla fattoria e, se ho abbastanza soldi, mi cercherò un pezzo di terra mio: dal ’62 c’è una legge, l’Homestead Act, che per quasi niente ti dà centosessanta acri nell’Ovest, se li coltivi per cinque anni. Mi piacerebbe: un posto mio, una moglie, un cavallo. E magari un campo da baseball."],
["Posso salutarti e proseguire la mia passeggiata?","Vai pure, Pierpaolo, e se passi per la Pennsylvania saluta la mia famiglia: di’ a mia madre che sto bene e che porto sempre la giubba abbottonata. Io finisco la lettera prima del tamburo. Buona strada!"]
],
sx_zeb:[
["Chi sei e che lavoro fai sul fiume?","Zebulon, ma per tutti Zeb. Sono pilota di battelli a vapore da vent’anni: porto barche piene di cotone, passeggeri e di tutto il resto su e giù per il Mississippi. Ora lavoro anche per l’esercito, perché a conoscere il fiume come me non sono rimasti in tanti."],
["Come fa un pilota a conoscere un fiume che cambia sempre?","Lo impari a memoria, curva per curva: più di mille chilometri, di giorno e di notte. Ogni banco di sabbia, ogni tronco nascosto. L’acqua parla: un’increspatura così significa una secca, un riflesso liscio una buca. Ci vogliono due anni di apprendistato e l’apprendista paga il maestro: cinquecento dollari, una fortuna."],
["Cosa vuol dire ‘mark twain’ che gridano i marinai?","Il marinaio a prua misura la profondità con una sagola con dei segni. ‘Mark twain!’ vuol dire due braccia, circa tre metri e mezzo: acqua sicura per il nostro battello. Un ragazzo che faceva il mio mestiere, Sam Clemens, da qualche mese ha preso quel nome per firmare i suoi articoli."],
["Com’è fatto un battello a ruota? Come funziona?","Una caldaia a vapore ad alta pressione, due alte ciminiere per il fumo e una grande ruota a pale, a poppa o ai lati, che spinge nell’acqua. Si brucia legna o carbone, e ci si ferma a ogni porto per caricare. Dentro: saloni, cabine, un bar, perfino un pianoforte. Ma una caldaia sbagliata scoppia, e allora non c’è più battello."],
["Cosa si vede da una cabina di pilotaggio? Il fiume è bello?","È la cosa più bella che ci sia. All’alba una nebbia bianca sull’acqua, a mezzogiorno il sole che brilla, la sera tramonti rossi. Le sponde passano con boschi, piantagioni e paesi di legno. E ogni tanto un altro battello ti sorpassa: i piloti fanno spesso a gara, e chi vince ha diritto a mille storie al bar."],
["Perché il fiume è così importante in questa guerra?","Perché è la strada del Paese: chi lo controlla, controlla il commercio, il cotone, i rifornimenti. Il generale Scott ha pensato di stringere il Sud come un serpente, bloccando i porti e prendendo il Mississippi. La chiave è Vicksburg, la fortezza sulle colline sopra il fiume: Lincoln diceva che senza di essa la guerra non si vince."],
["Raccontami dell’assedio di Vicksburg e delle grotte.","Grant l’ha stretta per quarantasette giorni, con i cannoni a terra e le cannoniere sul fiume. Gli abitanti si sono rifugiati in grotte scavate nelle colline: c’erano tappeti, letti, bambini che nascevano al buio. I viveri sono finiti: hanno mangiato muli e perfino topi. Il 4 luglio si sono arresi in ventinovemila."],
["Cosa si mangia a bordo e come ci si diverte?","Pesce gatto fritto, pane di mais, fagioli, caffè forte. Sulle barche di lusso ci sono anche carne alla griglia e dolci. Di sera si suona, si balla, si gioca a carte: i giocatori d’azzardo salgono apposta e molti passeggeri scendono più poveri. Io preferisco una pipa a poppa e il fiume davanti."],
["Cos’è quella nave coperta di ferro? Ha qualcosa di speciale?","È una corazzata fluviale, costruita a St. Louis da James Eads in cento giorni. Una di queste, la Cairo, il 12 dicembre 1862 è finita su una mina nel fiume Yazoo ed è affondata in dodici minuti: nessuno è morto. Più di cent’anni dopo, nel 1964, l’hanno tirata su dal fango, e ora è in un museo."],
["Quali sono i pericoli del fiume? Mi hanno detto che può spostarsi.","Tronchi sommersi che bucano lo scafo, banchi di sabbia, piene improvvise, incendi a bordo. E sì: il fiume cambia strada quando vuole. Nel 1876 taglierà un’ansa e lascerà Vicksburg in un lago morto: ci vorranno anni di scavi per riportarlo vicino alla città. Un pilota ha rispetto, non fiducia."],
["Hai conosciuto qualche scrittore o personaggio famoso?","Quel Sam Clemens, appunto: apprendista giovane e chiacchierone, prendeva sempre appunti. Ha lasciato il fiume nel ’61, quando la guerra ha bloccato i traffici, ma scrive come se non l’avesse mai lasciato. Dicono che un giorno racconterà la vita sul Mississippi e di un ragazzo, Huck, su una zattera: e che pubblicherà anche le memorie di Grant."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se passi sul fiume salutami il vecchio Padre delle Acque: sembra calmo, ma non dorme mai. Io torno alla mia ruota prima che la corrente porti via il battello e la mia paga. Che ci sia sempre acqua sotto la chiglia, e due braccia di fondo!"]
],
sx_lee:[
["Chi sei, e cosa ci fai qui, ad Appomattox?","Sono Robert Edward Lee, generale in capo degli eserciti confederati e comandante dell’Esercito della Virginia del Nord. Sono qui perché oggi, nel primo pomeriggio, ho incontrato il generale Grant e ho accettato la resa dei miei uomini, ormai senza viveri e circondati. Non è un giorno che avrei scelto."],
["Com’è stata la tua giovinezza e come sei diventato soldato?","Sono nato nel 1807 in Virginia, figlio di ‘Light-Horse Harry’, un eroe della guerra d’indipendenza poi caduto in disgrazia per i debiti. A West Point sono uscito secondo del corso e senza una sola nota di demerito. Ho fatto l’ingegnere, ho combattuto in Messico, ho diretto l’Accademia. Mia moglie Mary discende dalla famiglia di Martha Washington."],
["Perché non hai accettato di comandare l’esercito dell’Unione, nel 1861?","Me lo offrì Francis Blair a nome di Lincoln, il 18 aprile: un onore enorme. Ma non ho potuto. Non credevo nella secessione, eppure non me la sentivo di alzare la mano contro la mia terra, la mia casa e i miei figli. Due giorni dopo mi sono dimesso dall’esercito degli Stati Uniti. Molti mi hanno giudicato per questo, e continueranno a farlo."],
["Che cosa pensavi della schiavitù, e perché hai combattuto per il Sud?","Nel 1856 scrissi che era un male morale e politico, ma aggiunsi che ai neri conveniva stare qui piuttosto che in Africa e che il tempo l’avrebbe risolta: parole con cui molti si consolavano, e oggi vedo che erano un alibi. Nel ’62, per il testamento di mio suocero, ho liberato le persone della sua tenuta. Ma ho combattuto per uno Stato fondato su di essa: non lo nascondo."],
["Quali battaglie ricordi di più, in questi quattro anni?","I Sette Giorni, attorno a Richmond, nel ’62; la seconda Manassas; Fredericksburg; Chancellorsville, dove ho perso Jackson, il mio braccio destro, ferito per errore dai nostri. E Gettysburg, nel luglio del ’63, la mia sconfitta più grande. Dopo la carica dissi ai miei uomini che la colpa era mia, e lo penso ancora."],
["Raccontami di Traveller, quel cavallo grigio. Lo conosci da molto?","Traveller l’ho preso nel ’62: grigio, forte, tranquillo anche in mezzo al fuoco. Lo monto da allora, e anche oggi mi ha portato qui. Ha una pazienza che a molti uomini manca. Dicono che dopo la guerra mi seguirà a Lexington, in un college: lo spero, perché un cavallo così non si abbandona."],
["Come vive un esercito affamato, durante la ritirata?","Male. Abbiamo lasciato Richmond e Petersburg il 2 e 3 aprile e i treni con i viveri non sono arrivati. Si mangia mais abbrustolito, quello dei cavalli; i miei uomini dormono per terra e camminano da giorni. Ne sono rimasti circa ventottomila: non potevo chiedere loro di morire per niente."],
["Com’è stato l’incontro con Grant in quel salotto?","Io in divisa nuova, con la sciabola; lui con un cappotto da soldato semplice, infangato, senza spada: si scusò per l’aspetto. Parlammo prima dei vecchi tempi in Messico; poi gli ricordai perché eravamo lì. Le condizioni sono state generose: gli ufficiali tengono le armi, gli uomini cavalli e muli per i raccolti, e razioni per venticinquemila."],
["Cosa dirai ai tuoi soldati?","Domani scriverò un ordine di congedo: ringrazierò chi è rimasto fedele fino alla fine, in quattro anni di fatica, e li inviterò a tornare a casa e a essere buoni cittadini. Non c’è altro da dire. Hanno dato più di quanto un comandante abbia diritto di chiedere."],
["Cosa farai dopo la guerra?","Accetterò di dirigere un piccolo college di Lexington, in Virginia: nel ’65 il Washington College mi cercherà. Spingerò i giovani del Sud a ricostruire invece di vendicarsi. Morirò nel 1870. E la cittadinanza, che ho perso con la guerra, mi sarà restituita dal Congresso solo nel 1975, più di un secolo dopo."],
["Com’è la tua vita fuori dal fronte? Famiglia, animali, passatempi?","Mia moglie Mary ha l’artrite e ci vediamo poco; ho sette figli e scrivo loro lunghe lettere. Ho avuto una gallina, Nellie, che mi faceva un uovo ogni mattina sotto la branda: si racconta che sia sparita durante una ritirata. Amo i bambini, i gatti, le conversazioni tranquille. E un buon cavallo."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e grazie per avermi ascoltato: oggi pochi hanno voglia di farlo. Ricorda che la parte più difficile, dopo una sconfitta, è ricominciare senza rancore. Io torno da Traveller: ha ancora bisogno di me."]
],
sx_grant:[
["Chi sei, e cosa fai con quel cappotto sporco?","Sono Ulysses Grant, tenente generale e comandante di tutti gli eserciti dell’Unione. Il cappotto è sporco perché ho cavalcato tutta la mattina con un mal di testa tremendo, che mi è passato di colpo quando è arrivata la lettera di Lee. Non avevo tempo di cambiarmi: sono arrivato in giubba da soldato semplice, con solo le spalline da generale."],
["Com’era la tua vita prima della guerra? Dicono che non avevi successo.","Un disastro, lo ammetto. Lasciato l’esercito nel ’54, ho fatto il contadino in una casa di tronchi che ho battezzato ‘Hardscrabble’, terra dura; poi ho venduto legna per strada a St. Louis. Nel 1860 lavoravo come commesso in un negozio di cuoio a Galena, in Illinois, con i miei fratelli. Avevo trentotto anni e nessuno mi conosceva."],
["Come sei diventato ‘Unconditional Surrender’ Grant?","A Fort Donelson, nel febbraio del ’62, al comandante nemico che chiedeva le condizioni risposi che accettavo solo una resa immediata e senza condizioni. Le mie iniziali sono U.S., come United States: i giornali ci scherzarono su. Fu la prima grande vittoria dell’Unione e da allora il mio nome lo sanno scrivere tutti."],
["Cos’è successo a Shiloh? Dicono che ti ha cambiato.","Il 6 aprile ’62, un attacco di sorpresa: due giorni di battaglia, circa ventitremila tra morti, feriti e dispersi. Dopo capii che non avremmo vinto con un colpo solo: bisognava togliere al nemico la capacità di combattere, passo dopo passo. Fu una lezione dura, e la guerra mi sembrò molto più lunga."],
["Come hai preso Vicksburg, che sembrava imprendibile?","Facendo quello che nessuno si aspettava: ho fatto passare di notte i battelli davanti ai cannoni della città, ho portato l’esercito sulla sponda opposta e ho attaccato da est. In diciassette giorni, cinque battaglie, poi l’assedio. Il 4 luglio 1863 si è arreso Pemberton, il giorno dopo Gettysburg. Il Mississippi era nostro."],
["Com’è il tuo carattere? Parli poco?","Non amo i discorsi: ordino e scrivo. Non sopporto la vista del sangue, e la carne la voglio ben cotta, quasi bruciata. E fumo sigari: dopo Fort Donelson un giornale scrisse che ne avevo uno in bocca e la gente me ne spedì a migliaia. Ora ne fumo una ventina al giorno, e temo che non mi faranno bene."],
["Sei un bravo cavaliere? Ti hanno visto spesso in sella.","Ho sempre amato i cavalli: a West Point ero tra i migliori cavalieri del corso, e con York ho saltato una sbarra a un’altezza che per molti anni nessuno ha superato. In guerra ne ho montati parecchi: Cincinnati, un baio enorme, è il mio preferito. Un buon cavallo vale più di un consigliere, e mi fa meno domande."],
["Cosa ti ha detto Lincoln, quando ti ha nominato comandante generale?","Nel marzo del ’64 mi ricevette alla Casa Bianca: era la prima volta che ci vedevamo. Mi nominò tenente generale, un grado che prima di me aveva avuto in pratica solo Washington. Non mi chiese i miei piani. Si racconta che a chi lo criticava per i miei difetti rispondesse: non posso fare a meno di quest’uomo, combatte."],
["Perché hai offerto condizioni così generose a Lee?","Perché avevo davanti un uomo sconfitto che aveva combattuto con valore, e non provai alcuna gioia. Quando i nostri artiglieri cominciarono a sparare a salve per festeggiare, li fermai: dissi che la guerra era finita e che i ribelli erano di nuovo nostri compatrioti. Per avere la pace non si può umiliare chi si arrende."],
["Di cosa avete parlato in quel salotto, prima di firmare?","Di vecchi tempi! Io e Lee ci eravamo conosciuti in Messico e ci mettemmo a ricordare: parlai così a lungo che dovette riportarmi lui al motivo dell’incontro. Poi scrissi le condizioni su un blocchetto, a matita, e Lee le lesse con calma. Mi chiese di lasciare ai suoi uomini i cavalli e io accettai: servivano per il raccolto."],
["E dopo la guerra? Ti aspetti di fare politica?","Non lo cerco, ma sì: sarò presidente dal 1869 al 1877. Il mio motto sarà ‘Facciamo la pace’; firmerò gli emendamenti sui diritti dei neri, le leggi contro il Ku Klux Klan e, nel 1872, il primo parco nazionale del mondo, Yellowstone. Alla fine, malato di cancro alla gola, scriverò le memorie: le pubblicherà Mark Twain e manterranno la mia famiglia."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se hai fame i miei uomini stanno distribuendo razioni anche ai vinti: da oggi nessuno deve più avere fame. Dicono che parlo poco: stasera, con questa pace, mi pare di aver parlato fin troppo. Buon cammino, e che non ti manchi mai un buon cavallo."]
],
sx_ann:[
["Chi sei e dove lavori?","Sono Ann, ventotto anni, filatrice alla filanda di Ancoats, a Manchester. Ho cominciato a nove anni, mezza giornata di lavoro e mezza di scuola, come si usava. Ho un marito tessitore, due bambini e un sacco di pensieri: da mesi le macchine sono ferme e non entra più un soldo."],
["Com’è la giornata in filanda, quando tutto funziona?","Il ‘knocker-up’ passa prima dell’alba e bussa ai vetri con una lunga canna: è la nostra sveglia. Si comincia alle sei, con gli zoccoli sui ciottoli bagnati. Le macchine fanno un fracasso tale che parliamo muovendo le labbra in modo esagerato, quasi senza voce: lo chiamiamo ‘mee-maw’. E l’aria è piena di polvere di cotone."],
["Cosa fai ora che le macchine sono ferme?","Ci arrangiamo: molte filande sono chiuse o lavorano due giorni a settimana. Perché? Perché la guerra in America e il blocco dei porti del Sud hanno fatto sparire il cotone che usavamo. Il comitato di soccorso ci dà un po’ di pane e qualche scellino, e hanno aperto scuole di cucito: almeno imparo a leggere meglio e a cucire un cappotto."],
["Perché voi operai inglesi state con l’Unione, se questa guerra vi toglie il lavoro?","Perché non si può costruire la propria ricchezza sul lavoro di persone in catene. Il 31 dicembre, nella Free Trade Hall, in migliaia abbiamo votato un messaggio a Lincoln: siamo con te, anche se soffriamo. Lui ci ha risposto con una lettera in cui parla del nostro coraggio, e ci ha mandato perfino una nave di viveri: la George Griswold."],
["Cosa ne pensano il governo inglese e i ricchi del Sud americano?","I ricchi sono divisi: molti simpatizzano con il Sud, perché vende cotone e compra i nostri prodotti. Nei cantieri di Birkenhead, accanto a Liverpool, hanno costruito per i sudisti una nave da guerra, l’Alabama, che già ha affondato decine di mercantili dell’Unione. Per noi operai invece non ci sono dubbi: la nostra causa è quella del Nord."],
["Cosa mangiate in questi tempi di fame?","Farina d’avena, patate, tè lungo e, la domenica, un po’ di lardo. Il piatto di casa è lo ‘hotpot’ del Lancashire: agnello, cipolle e patate in una pentola che si lascia nel forno tutto il giorno, mentre siamo in filanda. Con le cucine dei poveri ci si arrangia: una minestra calda e un pezzo di pane."],
["Come vi vestite? Cosa sono quegli zoccoli?","Gli zoccoli sono il nostro orgoglio: suola di legno con un bordo di ferro, tomaia di cuoio, resistono al pavimento bagnato della filanda. Si sentono da lontano: migliaia di operai che escono insieme fanno un rumore che nessun altro ha. Per il resto scialle scuro, cuffia, gonna lunga; la domenica, il vestito buono."],
["Com’è Manchester? Piove sempre e c’è tanto fumo?","Piove spesso e di fumo ce n’è anche troppo: dalle ciminiere, dai camini, dai treni. La chiamano ‘Cottonopolis’, la città del cotone: filande, canali, magazzini. L’aria è grigia, ma c’è molta vita: osterie, mercati, bande musicali. Chi viene da fuori dice che il rumore si sente prima di vedere la città."],
["Cosa si fa per divertirsi? Qualche festa tipica?","Le ‘Wakes Weeks’, le settimane di vacanza: le filande chiudono tutte insieme e le famiglie prendono il treno fino al mare, a Blackpool. Poi le bande di ottoni, che da noi sono quasi una religione, e il ballo con gli zoccoli. Nei locali si canta e si beve birra. Una passeggiata in campagna, la domenica, è già un lusso."],
["Hai mai visto qualcosa dell’America? Qualcuno che conosci è emigrato?","Mia cugina Betty è emigrata a Fall River, in Massachusetts, dove ci sono filande uguali alle nostre. Mi scrive che anche là, adesso che il cotone costa tanto, gli operai se la passano male. La traversata dura due o tre settimane su un piroscafo, un mese o più su un veliero. Ci penso, ma ho dei figli, e il mare mi fa paura."],
["Cosa succederà quando la guerra finirà? Tornerà il cotone?","Dicono di sì, ma non subito: già adesso si cerca cotone in India e in Egitto, ma è di qualità diversa e costa di più. Quando la guerra finirà il cotone americano tornerà, ma coltivato da lavoratori liberi. E noi, spero, torneremo alle nostre macchine. Intanto si tiene duro, e pesa meno quando sai per cosa."],
["Posso salutarti e proseguire la mia passeggiata?","Vai pure, Pierpaolo, e grazie per aver ascoltato una che ha le mani ferme e la testa piena. Io resto in coda, la zuppa non aspetta. Se per caso incontri Lincoln, digli che da Manchester gli mandiamo un grazie, e che i nostri zoccoli sono con lui."]
]
};
Object.assign(TOPX,TOPX_SX);
})();
