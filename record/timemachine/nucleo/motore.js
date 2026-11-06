/* ===================== MOTORE ===================== */
const PLAYER={skin:'#e8b890',hair:'#1d120c',top:'#15151b',jeans:'#2c5aa6'};
let wi=1,wd=WORLDS[1],px=110,cam=0,dir=1,walk=false,ph=0,t=0,hold={l:0,r:0},K={};
let dl=null,idleText='',uiKey=null,nameT=0,toastMsg='',toastT=0,rp=null,rpT=40,fade=0,fd=0,pend=0,started=false,rnoteT=3;
let mem=[];try{mem=JSON.parse(localStorage.getItem('bolla_mem')||'[]')}catch(e){mem=[]}
let parts=[];
const who=$('who'),tx=$('tx'),op=$('op'),ac=$('ac');

/* audio */
let AX=null,mg,osc=[],mute=false;
function aud(){try{if(AX){AX.resume();return}AX=new(window.AudioContext||window.webkitAudioContext)();mg=AX.createGain();mg.gain.value=mute?0:.22;mg.connect(AX.destination);}catch(e){AX=null}}
function setChord(){}
function tick(f,v){if(!AX||mute)return;const n=AX.currentTime,o=AX.createOscillator(),gn=AX.createGain();o.type='sine';o.frequency.value=f;gn.gain.setValueAtTime(v||.07,n);gn.gain.exponentialRampToValueAtTime(.001,n+.5);o.connect(gn);gn.connect(mg);o.start(n);o.stop(n+.52)}
$('mu').onclick=()=>{mute=!mute;$('mu').textContent=mute?'🔇':'🔊';if(mg)mg.gain.value=mute?0:.22};

function enter(i){wi=i;wd=WORLDS[i];px=110;cam=0;dir=1;rp=null;rpT=35+Math.random()*30;dl=null;nameT=3.5;idleText=wd.intro;uiKey=null;
 parts=[];for(let k=0;k<34;k++)parts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*10,vy:-6-Math.random()*10,r:1+Math.random()*2,ph:Math.random()*6});setChord()}
function goto(i){if(fd)return;pend=i;fd=1;tick(660,.1);setTimeout(()=>tick(880,.08),120)}
function randomOther(){let n;do n=Math.random()*WORLDS.length|0;while(n==wi&&WORLDS.length>1);return n}
function toast(m){toastMsg=m;toastT=3}

/* interazione */
const NEAR=64;
const nearNpc=()=>{let b=null,bd=NEAR;wd.npcs.forEach(n=>{const d=Math.abs(n.x-px);if(d<bd){bd=d;b=n}});return b};
const portals=()=>{const a=[{x:wd.width-130}];if(rp)a.push({x:rp.x});return a};
const nearPortal=()=>portals().find(p=>Math.abs(p.x-px)<56);
const lookText=()=>(wd.look.find(l=>px<l[0])||wd.look[wd.look.length-1])[1];
function memKey(n,k){return n.id+':'+k}
const HUBS={atena:'Chiedi ancora, viandante: la saggezza non si esaurisce.',ermes:'Altre domande? Ho tempo, finché Zeus non mi chiama.',pizia:'Il fumo ascolta ancora. Chiedi.',omero:'Dimmi, che altro vuoi sentire?',pan:'Shhh… ancora una domanda, sottovoce.',fenicottero:'Psss… altro? Ho ancora una zampa libera.',efisio:'Dimmi, bellu, altro da sapere?',maria:'Dimmi, piccolo: hai ancora fame di storie?',gelataio:'Altro gusto? Il freezer è pieno di ricordi.',giulia:'Ehi, ho un’altra idea per il castello!',launeddas:'Hai ancora orecchie per un’altra storia?',penny:'Dimmi, che altro vuoi sapere?',bernadette:'Ho ancora un minuto: dimmi.',leonard:'Certo, dimmi pure.',howard:'Avanti, altre domande per il maestro!',sheldon:'Domanda successiva, ma in ordine.',amy:'Interessante! Cos’altro vuoi indagare?',raj:'Ehm… sì, dimmi pure.',stuart:'Sì, certo, dimmi tutto.'};
const hubOf=n=>HUBS[n.id]||HUBG[Math.random()*HUBG.length|0];
const HUBG=['Dimmi pure, cosa vuoi sapere ancora?','Ti ascolto.','Prego, chiedi pure.','Altre domande?'];
function startDl(npc,id,re){id=id||'a';const nd=npc.d[id];dl={npc,id,text:(((re&&id=='a')||!nd.t)&&npc.id!='por'&&npc.id!='nar')?hubOf(npc):nd.t,n:0,done:false,o:typeof nd.o=='function'?nd.o():(nd.o||[['Ok',null]]),lf:-1};who.textContent=npc.name;tx.textContent='';op.innerHTML='';
 if(nd.m){const k=memKey(npc,nd.m);if(!mem.includes(k)){mem.push(k);try{localStorage.setItem('bolla_mem',JSON.stringify(mem))}catch(e){}toast('✦ Nuovo ricordo raccolto');tick(784,.09);setTimeout(()=>tick(1046,.08),140)}}}
function endDl(){dl=null;uiKey=null;idleText=wd.name+' — cammina o parla con chi incontri.'}
function showOpts(){op.innerHTML='';dl.o.forEach((o,i)=>{const b=document.createElement('button');b.className='ch';b.textContent=(i+1)+'  '+o[0];b.onclick=ev=>{ev.stopPropagation();choose(i)};op.appendChild(b)})}
function choose(i){if(!dl||!dl.done)return;const o=dl.o[i];if(!o)return;const npc=dl.npc;tick(520+i*60,.05);if(o[2])o[2]();if(o[1]&&npc.d[o[1]])startDl(npc,o[1],true);else if(dl&&dl.npc===npc&&(!o[1]))endDl()}
function narrate(txt){startDl({id:'nar',name:'✦ Osservi',d:{a:{t:txt,o:[['Continua',null]]}}})}
function portalNpc(){return{id:'por',name:'🌀 Un varco luminoso',d:{a:{t:'L’aria vibra davanti a te: colori che non esistono, un suono di mare lontano. Attraversarlo ti porterà in un altro mondo. Entri?',o:[['Sì, entra',null,()=>{endDl();goto(randomOther())}],['Resto ancora un po’',null]]}}}}
function farewell(){if(!dl)return;const id=dl.npc.id,nm=dl.npc.name.replace(/^Eco di /,'');endDl();tick(440,.06);if(id!='nar'&&id!='por')toast('👋 Saluti a '+nm)}
function primary(){if(fd||!started)return;if(dl){farewell();return}const n=nearNpc(),p=nearPortal();if(n)startDl(n);else if(p)startDl(portalNpc());else narrate(lookText())}

/* UI idle */
function uiIdle(){const n=nearNpc(),p=nearPortal();const key=(n?n.id:'')+'|'+(p?1:0);if(key===uiKey)return;uiKey=key;who.textContent=wd.name;tx.textContent=idleText;op.innerHTML='';
 const add=(l,f)=>{const b=document.createElement('button');b.className='ch';b.textContent=l;b.onclick=ev=>{ev.stopPropagation();f()};op.appendChild(b)};
 add('👁 Osserva',()=>narrate(lookText()));if(n)add('💬 Parla con '+n.name,()=>startDl(n));if(p)add('🌀 Avvicinati al varco',()=>startDl(portalNpc()))}
let acKey='';
function updAc(){const n=dl?'dl':nearNpc()?'n':nearPortal()?'p':'o';if(n==acKey)return;acKey=n;ac.className=n=='n'||n=='p'?'hot':'';ac.innerHTML=n=='dl'?'<span>👋</span>SALUTA':n=='n'?'<span>💬</span>PARLA':n=='p'?'<span>🌀</span>VARCO':'<span>👁</span>OSSERVA'}

/* input */
onkeydown=e=>{const k=e.key.toLowerCase();K[k]=1;if(k=='escape'){farewell()}else if(k=='e'||k==' '||k=='enter'){e.preventDefault();if(dl){if(!dl.done)dl.n=dl.text.length}else primary()}if('1234'.includes(k)&&k.length==1)choose(+k-1)};onkeyup=e=>K[e.key.toLowerCase()]=0;
const bind=(id,k)=>{const e=$(id);e.onpointerdown=ev=>{ev.stopPropagation();hold[k]=1;e.classList.add('on')};['pointerup','pointerleave','pointercancel'].forEach(n=>e.addEventListener(n,()=>{hold[k]=0;e.classList.remove('on')}))};bind('bl','l');bind('br','r');
ac.onclick=primary;tx.onclick=()=>{if(dl&&!dl.done)dl.n=dl.text.length};
function fit(){st.style.transform='scale('+Math.min(innerWidth/W,innerHeight/870)+')'}fit();onresize=fit;

/* menu iniziale */
let startW=-1;
function renderWl(){$('wl').innerHTML=WORLDS.map((w,i)=>`<button class="lb${startW==i?' on':''}" data-i="${i}">${w.name.split(' · ')[0]}</button>`).join('')+`<button class="lb${startW==-1?' on':''}" data-i="-1">🎲 Casuale</button>`}
$('wl').onclick=e=>{const i=e.target.dataset&&e.target.dataset.i;if(i!=null&&i!==''){startW=+i;renderWl()}};renderWl();
$('go').onclick=()=>{aud();started=true;$('ov').classList.add('hide');enter(startW<0?Math.random()*WORLDS.length|0:startW)};

/* aggiornamento */
function upd(dt){t+=dt;
 if(fd==1){fade+=dt*2;if(fade>=1){fade=1;enter(pend);fd=-1}}else if(fd==-1){fade-=dt*1.5;if(fade<=0){fade=0;fd=0}}
 const mv=((K.arrowleft||K.a||hold.l)?-1:0)+((K.arrowright||K.d||hold.r)?1:0);
 walk=false;if(started&&!dl&&!fd&&mv){px=cl(px+mv*175*dt,40,wd.width-40);dir=mv;walk=true;ph+=dt*11}
 const tc=cl(px-W/2+dir*30,0,wd.width-W);cam+=(tc-cam)*Math.min(1,dt*6);
 if(dl&&!dl.done){const nn=Math.min(dl.text.length,dl.n+dt*58);const f=Math.floor(nn);dl.n=nn;if(f!=dl.lf){dl.lf=f;tx.textContent=dl.text.slice(0,f);if(f%4==0)tick(300+hr(f)*120,.015)}if(nn>=dl.text.length){dl.done=true;tx.textContent=dl.text;showOpts()}}
 else if(!dl&&started)uiIdle();
 if(started){updAc();if(!dl&&!fd){rpT-=dt;if(rpT<=0){rpT=45+Math.random()*40;if(!rp){const side=Math.random()<.5?-1:1;let x=px+side*230;if(x<150||x>wd.width-250)x=px-side*230;rp={x:cl(x,150,wd.width-250),t:26};toast('🌀 Un varco si apre nelle vicinanze…');tick(392,.1);setTimeout(()=>tick(587,.1),180)}}}
  if(rp){rp.t-=dt;if(rp.t<=0)rp=null}
  rnoteT-=dt;if(rnoteT<=0){rnoteT=2.2+Math.random()*3;tick(wd.chord[Math.random()*4|0]*(Math.random()<.5?2:4),.05)}}
 nameT=Math.max(0,nameT-dt);toastT=Math.max(0,toastT-dt);
 parts.forEach(p=>{p.x+=(p.vx+Math.sin(t+p.ph)*8)*dt;p.y+=p.vy*dt;if(p.y<-5){p.y=H+5;p.x=Math.random()*W}if(p.x<-5)p.x=W+5;if(p.x>W+5)p.x=-5})}

/* disegno */
function drawPlayer(g,x,y){g.save();g.translate(x,y);g.scale(dir*1.12,1.12);const w=walk?Math.sin(ph):0,bob=walk?Math.abs(Math.sin(ph))*2.5:Math.sin(t*2)*.8;
 g.globalAlpha=.3;el(g,'#000',0,0,22,5);g.globalAlpha=1;
 limb(g,-1,-48,46,-w*.7,10,'#1f4a8a');el(g,'#e8e8ee',Math.sin(-w*.7)*46+3,-4+Math.cos(-w*.7)*0,9,4);
 limb(g,1,-48,46,w*.7,10,PLAYER.jeans);el(g,'#f4f4f8',Math.sin(w*.7)*46+3,Math.cos(w*.7)*46-48-0+44-44+0,9,4);
 g.translate(0,-bob);
 limb(g,-2,-84,34,w*.6,7,PLAYER.skin);limb(g,-2,-84,12,w*.6,11,PLAYER.top);
 g.fillStyle=PLAYER.top;g.beginPath();g.roundRect(-11,-92,22,48,6);g.fill();
 limb(g,2,-84,34,-w*.6,7,PLAYER.skin);limb(g,2,-84,12,-w*.6,11,PLAYER.top);
 el(g,PLAYER.skin,2,-101,11,12);el(g,PLAYER.skin,-6,-100,3,4);
 g.fillStyle=PLAYER.hair;g.beginPath();g.arc(1,-103,12.5,Math.PI*.95,Math.PI*2.05);g.fill();el(g,PLAYER.hair,-5,-102,8,10);poly(g,PLAYER.hair,[[-6,-114],[6,-116],[13,-108],[8,-107],[2,-109],[-4,-106]]);
 dot(g,'#222',8,-102,1.6);rect(g,'#c89870',11,-100,2,3);
 g.restore()}
function drawPortal(g,x,y,tt,a){g.save();g.translate(x,y-62);g.globalAlpha=a;const gr=g.createRadialGradient(0,0,4,0,0,90);gr.addColorStop(0,'rgba(255,255,255,.85)');gr.addColorStop(.35,'rgba(160,110,255,.5)');gr.addColorStop(1,'rgba(110,231,255,0)');g.fillStyle=gr;g.beginPath();g.ellipse(0,0,80,100,0,0,7);g.fill();
 for(let i=0;i<5;i++){g.save();g.rotate(tt*(1+i*.35)*(i%2?-1:1));g.strokeStyle='hsl('+(200+i*30+tt*30)%360+',90%,70%)';g.lineWidth=3;g.beginPath();g.ellipse(0,0,30-i*5,56-i*9,0,0,Math.PI*1.35);g.stroke();g.restore()}g.restore()}
function frame(){
 sky(g,wd.sky);
 wd.back.forEach(L=>L.fn(g,cam*L.k,t));
 const gt=wd.gt||HZ;const gr=g.createLinearGradient(0,gt,0,H);gr.addColorStop(0,wd.gr[0]);gr.addColorStop(1,wd.gr[1]);g.fillStyle=gr;g.fillRect(0,gt,W,H-gt);
 if(wd.gdraw)wd.gdraw(g,cam,t);else each(cam,70,9,(x,i,r)=>el(g,'rgba(0,0,0,.08)',x+r*40,GY+14+r*30,8+r*10,2+r*2));
 (wd.mid||[]).forEach(L=>L.fn(g,cam*L.k,t));
 wd.props.forEach(p=>{const x=p[1]-cam;if(x>-260&&x<W+260)PR[p[0]](g,x,GY,t,p[2])});
 portals().forEach(p=>{const x=p.x-cam;if(x>-100&&x<W+100)drawPortal(g,x,GY,t,p===portals()[1]&&rp?Math.min(1,rp.t/2):1)});
 wd.npcs.forEach(n=>{const x=n.x-cam;if(x>-120&&x<W+120){const f=px>=n.x?1:-1;n.draw(g,x,GY,t,f);if(nearNpc()===n&&!dl){g.font='bold 22px sans-serif';g.textAlign='center';g.fillStyle='rgba(255,255,255,'+(.7+.3*Math.sin(t*6))+')';g.fillText('💬',x,GY-150)}}});
 drawPlayer(g,px-cam,GY);
 parts.forEach(p=>{g.globalAlpha=.35+.35*Math.sin(t*2+p.ph);dot(g,wd.amb,p.x,p.y,p.r)});g.globalAlpha=1;
 const v=g.createRadialGradient(W/2,H/2,H*.35,W/2,H/2,H*.85);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(10,0,30,.45)');g.fillStyle=v;g.fillRect(0,0,W,H);
 // HUD
 g.fillStyle='rgba(10,0,30,.6)';g.beginPath();g.roundRect(8,8,Math.min(300,wd.name.length*8.6+22),26,13);g.fill();g.font='italic 800 13px "Trebuchet MS",sans-serif';g.textAlign='left';g.fillStyle='#fff';g.fillText(wd.name,18,26);
 g.fillStyle='rgba(10,0,30,.6)';g.beginPath();g.roundRect(W-124,8,78,26,13);g.fill();g.fillStyle='#ffe27a';g.fillText('✦ '+mem.length,W-112,26);
 if(nameT>0){g.globalAlpha=Math.min(1,nameT);g.textAlign='center';g.font='italic 900 30px "Trebuchet MS",sans-serif';g.shadowColor='#000';g.shadowBlur=12;g.fillStyle='#fff';g.fillText(wd.name.split(' · ')[0],W/2,150);g.font='italic 700 15px "Trebuchet MS",sans-serif';g.fillStyle='#ffe27a';g.fillText(wd.name.split(' · ')[1]||'',W/2,176);g.shadowBlur=0;g.globalAlpha=1}
 if(toastT>0){g.globalAlpha=Math.min(1,toastT);g.textAlign='center';g.font='italic 800 16px "Trebuchet MS",sans-serif';g.shadowColor='#000';g.shadowBlur=8;g.fillStyle='#ffe27a';g.fillText(toastMsg,W/2,226);g.shadowBlur=0;g.globalAlpha=1}
 if(fade>0){const f=g.createRadialGradient(W/2,H/2,0,W/2,H/2,H);f.addColorStop(0,'rgba(255,255,255,'+fade+')');f.addColorStop(.5,'rgba(170,120,255,'+fade+')');f.addColorStop(1,'rgba(20,0,60,'+fade+')');g.fillStyle=f;g.fillRect(0,0,W,H)}}
let last=0;function loop(n){const dt=Math.min(.05,(n-last)/1000||0);last=n;upd(dt);frame();requestAnimationFrame(loop)}
WORLDS.forEach(w=>w.npcs.forEach(n=>{if(TOPX[n.id])n.d=topicsD(n.d.a.t,TOPX[n.id])}));
enter(Math.max(0,WORLDS.findIndex(w=>w.id=='cagliari')));idleText='';requestAnimationFrame(loop);
