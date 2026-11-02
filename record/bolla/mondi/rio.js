/* ---------- RIO DE JANEIRO · Da Copacabana al Maracanã (Leme e Copacabana, Arpoador e Ipanema, Jardim Botânico e Lagoa, Corcovado e Cristo Redentor, Centro storico, Santa Teresa, Urca e Pão de Açúcar, Lapa e Pedra do Sal, Maracanã) ---------- */
/* Un'intera giornata da sinistra a destra: alba a Leme e a Copacabana, mattina all'Arpoador e a Ipanema, tarda mattina al Jardim Botânico e alla Lagoa,
   mezzogiorno sul Corcovado e al Cristo Redentor, primo pomeriggio nel Centro storico, pomeriggio a Santa Teresa, tramonto a Urca e al Pão de Açúcar,
   sera alla Lapa e alla Pedra do Sal, notte al Maracanã. In fondo al tunnel che porta al campo c'è il varco.
   Testi, tappe e dialoghi vengono da rio.txt (definitivi, usati senza riscriverli). Gli oggetti stanno in elementi.js (nomi che iniziano per "ri").
   Il tono per i temi dolorosi (Cais do Valongo, incidente del tram del 2011, Maracanazo, Machado de Assis) è sempre sobrio e rispettoso. */
(function(){
const GT=372,W1=19800;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const {ln}=PR._rm;
const {nf,lit,palma:palmaR,imp,omb}=PR._ri;
const md=(i,n)=>((i%n)+n)%n;
const LIT='rgb(255,226,150)';
const IR='#2a2e34',AC2='#5a626c';
const Z=[0,2400,4400,6400,8400,11000,13000,15200,17400,W1+400];   /* inizio di ognuna delle 9 zone */
const zn=xs=>{let z=1;while(z<9&&xs>=Z[z])z++;return z};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
let TT=0;
/* ---- cielo: alba rosata, mattina limpida, mezzogiorno pieno, pomeriggio caldo e dorato, tramonto rosso-arancio, crepuscolo viola-azzurro, notte ---- */
const SKY=[[0,['#8a98c8','#f6b4b8','#ffd8b8']],[1300,['#5aa8ee','#bcdcf4','#f0f4f6']],[2400,['#2e94f0','#9cd4f8','#e0f2fa']],[4400,['#2a98f4','#a8dcfa','#e8f6fa']],[6400,['#2a94f2','#b4e0fa','#f0f8fa']],[8400,['#3a9cec','#c4e4f6','#f6f0d6']],[11000,['#4a9ce0','#f0dca8','#fcd080']],[13000,['#5a9ce0','#f4c890','#ffb870']],[14000,['#8a7ccc','#f49a6a','#ff8450']],[14900,['#6a4aa0','#d0507a','#f87a50']],[15400,['#3a3a8a','#8a4a9a','#d8706e']],[16200,['#14184a','#2a3a7a','#5a4a7a']],[17200,['#0a1038','#1c2862','#3a3a6a']],[99999,['#0a1038','#1c2862','#3a3a6a']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,10*s);el(g,c,x-18*s,y+3*s,22*s,8*s);el(g,c,x+20*s,y+3*s,24*s,8*s);el(g,c,x+4*s,y-7*s,20*s,9*s)};
const star=(g,x,y,r,a)=>{g.fillStyle='rgba(255,250,225,'+a+')';g.fillRect(x,y,r,r)};
const INTRO="Rio de Janeiro, dall’alba alla notte. Parti a Copacabana, quando il sole esce dall’oceano e i pescatori tirano in secca le barche, e cammini sul marciapiede a onde fino al Forte; poi l’Arpoador, dove la roccia si tuffa nel mare, e Ipanema con i suoi Dois Irmãos. Nella tarda mattina il giardino botanico e la laguna ti portano ai piedi del Corcovado: a mezzogiorno sali in treno nella foresta fino al Cristo Redentor, con le braccia aperte sulla città. Nel primo pomeriggio scendi nel Centro, fra la Praça XV, la Confeitaria Colombo e il Museu do Amanhã; poi il tram giallo ti porta a Santa Teresa, con la scalinata di Selarón. Al tramonto si va a Urca, a guardare la baia dal muretto o dalla cima del Pão de Açúcar; la sera la Lapa si accende di musica, con gli archi bianchi e il samba della Pedra do Sal; a notte il Maracanã ti aspetta con i suoi riflettori. Il tempo qui si piega: i cariocas di ogni epoca ti vengono incontro, e la città è quella di oggi.";
const LKTXT=[
"Il Leme: il capo nord di Copacabana, ai piedi di una collina verde. Lassù c’è il Forte do Leme, che ufficialmente si chiama Forte Duque de Caxias: sorveglia la spiaggia da nord, come quello di Copacabana la sorveglia da sud.",
"Il Calçadão di Copacabana: circa quattro chilometri di marciapiede a onde bianche e nere, fatto di piccole pietre portoghesi di calcare e di basalto. Il disegno di oggi è del paesaggista Roberto Burle Marx, del 1970; l’idea viene dalla pavimentazione del Rossio, a Lisbona.",
"Il Copacabana Palace: l’albergo bianco, aperto nel 1923, simbolo di eleganza sul lungomare. Si dice che abbia ospitato i Rolling Stones e Marilyn Monroe. Un film con Fred Astaire e Ginger Rogers contribuì a renderlo famoso, anche se fu girato negli Stati Uniti.",
"Il Forte di Copacabana: costruito fra il 1908 e il 1914 sulla punta della spiaggia, dove prima c’era una cappella di Nossa Senhora de Copacabana. Ha muri spessi fino a dodici metri e cannoni Krupp. Oggi dentro ci sono un museo dell’esercito e la Confeitaria Colombo, con una colazione fra le più ambite di Rio.",
"All’estremità della spiaggia c’è la Colônia dos Pescadores: se arrivi presto, vedi i pescatori che riparano le reti e scaricano il pescato.",
"La Pedra do Arpoador: la roccia che chiude Ipanema verso Copacabana. Si dice che il nome venga da quando qui si arpionavano le balene. Di sera la gente la riempie e applaude il tramonto, con il sole che scende dietro i Dois Irmãos e la Pedra da Gávea; al mattino è dei pescatori e dei surfisti.",
"La Praia do Diabo: una spiaggetta nascosta dall’altro lato della roccia. È piccola e molto amata dai residenti, che ci portano i cani; il mare qui è forte, quindi si entra con prudenza.",
"La spiaggia di Ipanema, fra l’Arpoador e il Leblon, con i Dois Irmãos che la sorvegliano. Nel 1962 era un quartiere di appena quarantamila abitanti, dove nessun edificio superava i quattro piani. Oggi è uno dei posti più eleganti e rilassati di Rio.",
"Il Bar Garota de Ipanema, all’angolo fra la Rua Vinicius de Moraes e la Rua Prudente de Morais. Si chiamava Bar Veloso: qui, nell’estate del 1962, Tom Jobim e Vinicius de Moraes guardarono passare ogni giorno una ragazza diretta alla spiaggia, e ne nacque la canzone \"Garota de Ipanema\". Il bar ha preso il nome della canzone.",
"Il Jardim Botânico: fondato il 13 giugno 1808 dal principe reggente Dom João, per acclimatare le spezie dell’Oriente. Il suo viale più famoso è quello delle palme imperiali, alte e dritte come colonne. Si dice che la prima, piantata proprio da Dom João, sia vissuta più di un secolo e mezzo, fino a quando un fulmine la fece cadere nel 1972.",
"Dentro il giardino ci sono circa seimilacinquecento specie di piante su un’area visitabile di una cinquantina di ettari: ci sono piante in via di estinzione come il pau-brasil, il giardino giapponese e il giardino sensoriale. C’è anche una biblioteca di botanica con circa trentaduemila volumi.",
"La Lagoa Rodrigo de Freitas: una laguna in mezzo alla città, con un anello di circa sette chilometri e mezzo per correre e pedalare. Dall’acqua si vedono i Dois Irmãos, la Pedra da Gávea e, sopra tutto, il Cristo.",
"Il Parque Lage, ai piedi del Corcovado: parco e villa dell’industriale Enrique Lage, che negli anni Venti la fece ristrutturare da un architetto italiano; sua moglie era la cantante Gabriella Besanzoni. Oggi il parco è aperto a tutti.",
"Il Trem do Corcovado: inaugurato nel 1884 dall’imperatore Dom Pedro II, è il più antico percorso turistico del Brasile e la prima ferrovia elettrificata del paese. È più vecchio della statua e servì a portare su i pezzi del monumento. Sale per una ventina di minuti attraverso la foresta.",
"La Floresta da Tijuca: il parco nazionale che il treno attraversa, di Mata Atlântica, spesso indicato come la più grande foresta urbana del mondo. In mezzo alla città si possono incontrare saguis e uccelli.",
"Il Cristo Redentor: trenta metri di statua su un piedistallo di otto, per trentotto in tutto, con le braccia aperte per ventotto metri. È in cemento armato rivestito di piccoli triangoli di pietra ollare, in stile art déco, e fu inaugurato il 12 ottobre 1931. Dal 2007 è una delle Nuove Sette Meraviglie del Mondo.",
"Dal Corcovado, a circa settecentodieci metri, Rio si apre tutta: la Lagoa, i Dois Irmãos, Ipanema e Copacabana, la baia di Guanabara e, lontano, il Pão de Açúcar.",
"La Praça XV de Novembro: il cuore antico di Rio. Qui si affaccia il Paço Imperial, finito nel 1745 per i governatori e diventato palazzo reale quando la corte portoghese arrivò nel 1808. Dal suo balcone, nel 1822, Dom Pedro I annunciò che sarebbe rimasto in Brasile: è il \"Dia do Fico\".",
"La Candelária: una delle chiese più grandi di Rio, costruita fra il 1775 e il 1894, con una cupola di calcare portata da Lisbona. Per molti anni fu la costruzione più alta della città.",
"Il Theatro Municipal, inaugurato il 14 luglio 1909: si ispira all’Opéra di Parigi. Si affaccia sulla Cinelândia, la piazza dei cinema, accanto al Museo Nazionale di Belle Arti e alla Biblioteca Nazionale, che custodisce circa nove milioni di volumi, molti arrivati dal Portogallo nel 1808.",
"La Confeitaria Colombo: aperta il 17 settembre 1894 da due portoghesi, Joaquim Borges de Meirelles e Manuel José Lebrão. Dentro è ancora Belle Époque, con specchi belgi, mobili di jacarandá, banconi di marmo italiano e un lucernario di vetro colorato. Una guida l’ha inserita fra i dieci caffè più belli del mondo.",
"Il Museu do Amanhã, sulla Praça Mauá, inaugurato nel dicembre 2015: un museo di scienze che parla di futuro. Lo ha progettato Santiago Calatrava, ispirandosi alle bromelie del giardino botanico; il tetto ha lamelle con pannelli solari mobili.",
"Il bonde di Santa Teresa: il tram giallo che dal 1896 sale dal Centro al quartiere, attraversando gli Arcos da Lapa. Dopo uno stop di quasi quattro anni è tornato in servizio nel 2015 con vetture nuove, copie fedeli di quelle d’epoca.",
"La scalinata Selarón: 215 gradini fra la Lapa e Santa Teresa, coperti di piastrelle venute da una sessantina di paesi. L’artista cileno Jorge Selarón cominciò nel 1990 a sistemare i gradini davanti a casa sua e non smise più: la considerava un omaggio al popolo brasiliano.",
"Il Largo dos Guimarães, il cuore di Santa Teresa: qui il tram si ferma e il quartiere si ritrova, fra bar, gallerie e botteghe d’arte. Lungo la linea, vicino alla fermata del Largo do Curvelo, ci sono anche il Parque das Ruínas e il Museu Chácara do Céu.",
"La Mureta da Urca: un muretto sulla baia di Guanabara, dove i cariocas si siedono con una birra e guardano il tramonto. Qualcuno lo chiama affettuosamente \"pobreta\", un misto di povera e mureta. Il Bar Urca, aperto dal 1939, è patrimonio culturale della città dal 2012. Si ordina al banco e ci si porta da bere sul muretto.",
"La Pista Cláudio Coutinho: un sentiero pedonale di un chilometro e un quarto ai piedi del Morro da Urca, con il mare da una parte e la Mata Atlântica dall’altra. Si incontrano saguis e uccelli, e a metà parte il sentiero per salire a piedi al Morro da Urca.",
"Il bondinho del Pão de Açúcar, inaugurato il 27 ottobre 1912: la prima funivia del Brasile e la terza del mondo. Il primo tratto sale dalla Praia Vermelha al Morro da Urca, a 220 metri; il secondo, aperto nel gennaio 1913, arriva in cima. L’ingegnere Augusto Ramos fu preso per matto dai colleghi.",
"In cima al Pão de Açúcar, a 396 metri. Ai piedi di questa montagna sbarcò, il primo marzo 1565, Estácio de Sá per fondare Rio. Il nome, secondo alcuni, viene dalla forma dei pani di zucchero; secondo altri, da un’espressione tupí che significa \"monte alto, isolato e a punta\".",
"Gli Arcos da Lapa: l’antico Acquedotto da Carioca, inaugurato nel 1750 per portare l’acqua del fiume Carioca fino al centro. Ha 42 archi, è lungo circa duecentosettanta metri e alto diciotto: è la più grande opera di ingegneria del Brasile del Settecento. Dal 1896 ci passa sopra il tram di Santa Teresa.",
"La Lapa, di sera, è la notte carioca: negli ultimi anni la zona è tornata a essere il punto d’incontro di chi vuole ballare, ascoltare musica dal vivo e fare tardi. Si cammina con la musica che esce dalle porte dei locali.",
"La Pedra do Sal, nella zona del porto: la roccia dove gli scaricatori di sale si riunivano a parlare e a suonare, nella zona chiamata Pequena África. È considerata una delle culle del samba urbano di Rio. Ogni lunedì sera, e anche il venerdì, c’è la roda de samba, che nei giorni di festa può riunire migliaia di persone.",
"Il Cais do Valongo: nel Settecento e nell’Ottocento fu il principale porto di sbarco di africani resi schiavi in tutte le Americhe. Fu ritrovato negli scavi del 2011 e dal 2017 è Patrimonio Mondiale dell’UNESCO. Un luogo di memoria, da attraversare in silenzio.",
"Il Maracanã, che ufficialmente si chiama Estádio Jornalista Mário Filho: inaugurato il 16 giugno 1950 per il Mondiale, con posto per circa duecentomila persone; allora il più grande del mondo. Fu intitolato nel 1966 a un giornalista che ne aveva sostenuto la costruzione. Dopo l’ultima ristrutturazione, per il 2013 e il 2014, ha circa settantottomila posti.",
"Davanti all’ingresso, una targa ricorda il millesimo gol di Pelé, segnato qui il 19 novembre 1969, su rigore, in Santos–Vasco. Il pallone di quel gol è custodito nel museo dello stadio.",
"Poco distante dallo stadio c’è il Sambódromo, il tempio del Carnevale: lo ha disegnato Oscar Niemeyer ed è stato completato nel 1984. Per le Olimpiadi del 2016 qui si sono disputati il tiro con l’arco e l’arrivo della maratona.",
"In fondo al tunnel, la luce di un altro mondo ti chiama."
];
const NAME={
rio_nelson:"Seu Nelson, il pescatore",
rio_bia:"Bia, l’istruttrice di surf",
rio_rodrigo:"Rodrigo, la guida del Corcovado",
rio_machado:"Machado de Assis",
rio_zeca:"Zeca, il conducente del bonde",
rio_nilza:"Dona Nilza, la signora di Urca",
rio_chico:"Chico, il sambista",
rio_carol:"Carol, la guida dello stadio"
};
const GREET={
rio_nelson:"Bom dia! Siediti pure, il mare non ha fretta e nemmeno io. Sono Nelson, ma qui sono \"Seu Nelson\". Tu sei Pierpaolo, vero? Beleza, ti racconto Copacabana.",
rio_bia:"E aí, Pierpaolo! Sei arrivato al momento giusto: il mare è perfetto. Sono Bia, e ti faccio da guida prima che arrivi la folla, tá bom?",
rio_rodrigo:"Seja bem-vindo, Pierpaolo! Respira: l’aria quassù è diversa. Io sono Rodrigo e ti faccio da guida, senza fretta e senza spingere, tá bom?",
rio_machado:"Buon pomeriggio... o forse buonasera, a quest’ora i secoli si confondono. Sono Machado, Pierpaolo. Mi hanno detto che a Rio il tempo si piega: ne approfitto per fare due chiacchiere.",
rio_zeca:"Opa! Sali, sali, il bonde parte tra poco. Sono Zeca, conduco questo gioiello da quando è tornato in servizio. E tu devi essere Pierpaolo: fidati, qui la vista vale il biglietto.",
rio_nilza:"Vem cá, meu bem, siediti qui sul muretto. Sono Dona Nilza, abito a Urca da sempre. Tu sei Pierpaolo, vero? Guarda che tramonto: non lo vendo, lo regalo.",
rio_chico:"Fala, Pierpaolo! Vieni, vieni: stasera il samba non aspetta nessuno. Sono Chico, suono il cavaquinho e ho una roda che non finisce mai.",
rio_carol:"Entra, entra, Pierpaolo! Benvenuto al tempio. Sono Carol, guida dello stadio e torcedora dalla culla. Mettiti comodo: la partita comincia adesso."
};
/* ---- edificio generico: finestre su più piani, cornicione, tetto a tegole o piatto, persiane o veranda ---- */
function casa(g,x,w,h,i,k,wall,o){const gt=GT,top=gt-h,fl=Math.max(2,Math.floor((h-34)/34)),n=Math.max(2,Math.floor(w/38));
 rect(g,wall,x,top,w,h);rect(g,'rgba(255,255,255,.14)',x,top,5,h);rect(g,'rgba(0,0,0,.14)',x+w-12,top,12,h);for(let r=0;r<h/16;r++)rect(g,'rgba(0,0,0,.05)',x,top+r*16,w,1);
 for(let r=0;r<fl;r++)for(let q=0;q<n;q++){const wx=x+10+q*(w-34)/(n-1),wy=gt-(r+1)*34-24;rect(g,o.fr||'#3a2e24',wx-2,wy-2,22,30);rect(g,lit(k,i*13+r*7+q)?LIT:'#6a8cac',wx,wy,18,26);rect(g,'rgba(255,255,255,.3)',wx+8.6,wy,1.2,26);
  if(o.sh){rect(g,'#2f7a4a',wx-8,wy-1,7,28);rect(g,'#2f7a4a',wx+19,wy-1,7,28);for(let s=0;s<5;s++){rect(g,'rgba(0,0,0,.2)',wx-8,wy+3+s*5,7,1);rect(g,'rgba(0,0,0,.2)',wx+19,wy+3+s*5,7,1)}}}
 rect(g,o.cor||'rgba(0,0,0,.2)',x-3,top-4,w+6,6);
 if(o.roof=='t'){poly(g,o.rc||'#a8402e',[[x-6,top-4],[x+18,top-26],[x+w-18,top-26],[x+w+6,top-4]]);rect(g,'#6a2a22',x+w*.3,top-40,8,16)}else if(o.roof=='f'){rect(g,'#7a828c',x-3,top-10,w+6,6)}
 if(o.pedi)poly(g,'rgba(255,250,235,.55)',[[x+w*.3,top-4],[x+w*.5,top-24],[x+w*.7,top-4]]);
 if(o.tile)for(let r=0;r<5;r++)for(let q=0;q<Math.floor(w/12);q++)rect(g,['#2a6aa8','#f4f0e6','#e8802a','#4aa84a'][(r+q+i)%4],x+3+q*12,gt-70+r*12,10,10);
 if(o.ver){rect(g,IR,x-2,gt-70,w+4,3);for(let q=0;q<w/8;q++)rect(g,IR,x+q*8,gt-70,1.4,14)}
 rect(g,'rgba(0,0,0,.2)',x,gt-8,w,8)}
/* ---- palazzo residenziale del lungomare: balconi, serbatoio sul tetto, negozio al piano terra ---- */
function pred(g,x,w,h,i,k,wall,o){const gt=GT,top=gt-h,n=Math.max(2,Math.floor(w/26)),fl=Math.max(2,Math.floor((h-24)/28));
 rect(g,wall,x,top,w,h);rect(g,'rgba(255,255,255,.14)',x,top,4,h);rect(g,'rgba(0,0,0,.14)',x+w-10,top,10,h);
 for(let r=0;r<fl;r++){const wy=gt-(r+1)*28-20;rect(g,'rgba(0,0,0,.16)',x,wy+22,w,3);for(let q=0;q<n;q++){const wx=x+8+q*(w-26)/(n-1);rect(g,'#3a3a3e',wx-1.5,wy-1.5,19,24);rect(g,lit(k,i*11+r*5+q)?LIT:'#7aa0bc',wx,wy,16,21);rect(g,'rgba(255,255,255,.28)',wx+7.4,wy,1.2,21);if(o.bal)rect(g,o.bal,wx-3,wy+17,22,2.4)}}
 rect(g,o.cor||'rgba(0,0,0,.2)',x-2,top-4,w+4,5);if(o.tank){rect(g,'#9a9ca2',x+w*.2,top-16,22,12);rect(g,'#7a7c82',x+w*.2-2,top-18,26,3)}
 if(o.shop){rect(g,o.shop,x,gt-32,w,24);rect(g,k>.2?LIT:'#2a2a2e',x+6,gt-26,w-12,18);rect(g,'rgba(255,255,255,.2)',x+6,gt-26,w-12,2)}
 rect(g,'rgba(0,0,0,.2)',x,gt-8,w,8)}
/* ---- grattacielo di vetro ---- */
function torreV(g,x,w,h,i,k,c){const gt=GT,top=gt-h;const gr=g.createLinearGradient(x,0,x+w,0);gr.addColorStop(0,tn(c[0]));gr.addColorStop(1,tn(c[1]));g.fillStyle=gr;g.fillRect(x,top,w,h);
 for(let r=0;r<h/14;r++)rect(g,'rgba(255,255,255,.1)',x,top+r*14,w,1);for(let q=1;q<w/16;q++)rect(g,'rgba(0,0,0,.12)',x+q*16,top,1,h);
 for(let r=0;r<h/14;r++)for(let q=0;q<w/16;q++)if(lit(k,i*17+r*5+q)&&hr(r*3+q+i)>.5)rect(g,'rgba(255,226,150,.75)',x+q*16+2,top+r*14+2,12,10);
 rect(g,'rgba(255,255,255,.3)',x,top,3,h);rect(g,AC2,x+w*.3,top-14,w*.4,14);ln(g,AC2,1.6,[x+w*.5,top-14,x+w*.5,top-34])}
/* ---- facciate di strada, zona per zona ---- */
function fac(g,x,w,h,i,st,wx){const gt=GT,k=A.getDK();
 if(st==1){/* Copacabana: alti palazzi residenziali del lungomare, con balconi; ogni tanto una palma */
  if(hr(i*3)>.74){PR.ripalma(g,x+w*.5,gt,TT,1.2+hr(i)*.3);return}
  pred(g,x+6,w-40,h+30,i,k,['#f0e8d8','#e4d8c0','#d8e0e4','#ece0cc'][md(i,4)],{bal:'#8a8a88',tank:1,shop:hr(i*7)>.5?'#c8a878':0});return}
 if(st==2){/* Ipanema: palazzi residenziali più bassi, bar e negozi d'angolo */
  if(hr(i*3)>.78){PR.ripalma(g,x+w*.5,gt,TT,1.2);return}
  pred(g,x+6,w-30,h-10,i,k,['#f4ecd8','#e8d4b8','#d8e4dc','#f0d8c0'][md(i,4)],{bal:'#9a9a98',tank:md(i,2),shop:['#c8402a','#2a6aa8','#e8a02a'][md(i,3)]});return}
 if(st==3){/* Jardim Botânico: alberi enormi, il muro del giardino, ville d'epoca */
  if(hr(i*3)>.45){PR.riarvore(g,x+w*.5,gt,TT,.95+hr(i)*.35);return}
  if(hr(i*3)>.2){casa(g,x+20,w-70,h-100,i,k,['#f0dcc0','#e8d0b0'][md(i,2)],{roof:'t',rc:'#a8402e',sh:1});return}
  rect(g,'#d8d0b8',x,gt-52,w,52);for(let q=0;q<5;q++){rect(g,'#c8c0a4',x+q*(w/4)-3,gt-60,8,60)}rect(g,'#c8c0a4',x,gt-56,w,5);rect(g,'#3a3a3e',x+w/2-20,gt-48,40,40);for(let q=0;q<7;q++)rect(g,'#2a2a2e',x+w/2-18+q*5.6,gt-46,1.6,38);return}
 if(st==4){/* Corcovado: foresta fitta, tronchi, felci */
  PR.riarvore(g,x+w*.5,gt,TT,1.2+hr(i)*.5);if(hr(i*5)>.4)for(let q=0;q<4;q++)ln(g,'#2f8a3e',2.4,[x+10+q*10,gt,x+10+q*10+(q-1.5)*6,gt-24-q%2*8]);return}
 if(st==5){/* Centro: palazzi ottocenteschi dalle facciate decorate e torri di vetro */
  if(md(i,4)==2){torreV(g,x+10,w-60+hr(i*3)*20,h+60,i,k,[['#5a8aa8','#8ac0d8'],['#6a9ab0','#a8d0dc']][md(i,2)]);return}
  casa(g,x,w,h-50,i,k,['#e8dcc0','#d8c8a8','#cfd8c0','#e0c8b0'][md(i,4)],{roof:'f',cor:'#a89878',ver:1,pedi:1});return}
 if(st==6){/* Santa Teresa: ville vivaci con persiane, case rivestite di piastrelle, alberi tropicali */
  if(hr(i*3)>.64){PR.riarvore(g,x+w*.5,gt,TT,1.3);return}
  casa(g,x+8,w-40,h-60,i,k,['#e8808a','#f0c850','#7ab8c8','#a8c878','#f0a058'][md(i,5)],{roof:'t',rc:'#a8402e',sh:md(i,3)!=0,tile:md(i,3)==0});return}
 if(st==7){/* Urca: casette basse e ville degli anni Trenta, palme */
  if(hr(i*3)>.6){PR.ripalma(g,x+w*.5,gt,TT,1.1+hr(i)*.2);return}
  casa(g,x+10,w-50,h-100,i,k,['#f0e4cc','#e8d0b0','#d8e4dc','#f4e8d0'][md(i,4)],{roof:'f',cor:'#b8a888'});return}
 if(st==8){/* Lapa: case coloniali basse e colorate, porte aperte con la luce e la musica, insegne luminose */
  casa(g,x,w-10,h-100,i,k,['#e8808a','#f0c850','#7ab8c8','#c8a0d8','#f0a058','#a8c878'][md(i,6)],{roof:'f',cor:'#f4f0e6'});
  rect(g,'#2a1810',x+w/2-22,gt-66,32,58);rect(g,k>.1?'rgba(255,200,110,.9)':'#7a5a3a',x+w/2-19,gt-63,26,55);if(k>.1)glow(g,x+w/2-6,gt-36,50,'255,190,100',.3*k);
  const nc=['#ff6aa0','#6af0b0','#ffd84a','#6ac8ff'][md(i,4)];rect(g,'#14110f',x+8,gt-108,46,14);rect(g,k>.1?nc:'#8a8478',x+11,gt-105,40,3);rect(g,k>.1?nc:'#8a8478',x+11,gt-99,28,3);return}
 /* 9: Maracanã: palazzi del quartiere con le finestre illuminate e la stazione della metropolitana */
 if(md(i,4)==1){rect(g,'#4a5a7a',x+10,gt-70,90,70);rect(g,'#1d4e8f',x+10,gt-80,90,12);txt(g,'METRÔ',x+55,gt-70,9,'#f4f0e6');rect(g,'#14110f',x+40,gt-52,30,44);rect(g,k>.1?LIT:'#7aa0bc',x+43,gt-49,24,38);return}
 pred(g,x,w-30,h+30,i,k,['#c8c4b8','#bcb8aa','#d0ccc0'][md(i,3)],{bal:'#7a7a78',tank:1})}
/* ---- livello 0: cielo, sole, luna, nuvole, velo dell'alba ---- */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-15700)/1700,0,1);if(nt>0)for(let i=0;i<50;i++)star(g,hr(i*3)*480,hr(i*7+1)*250,1+(i%4==0),nt*.8*(.4+.5*Math.sin(t*2+i)));
 const u=cl(xs/14900,0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*250;
 if(xs<15300){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*90)+','+Math.round(190-low*120)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*70)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT);dot(g,'rgb(255,'+Math.round(248-low*100)+','+Math.round(215-low*140)+')',sx,sy,15)}
 const mu=cl((xs-15500)/2200,0,1);if(mu>0){const mx=140+mu*240,my=300-mu*210;dot(g,'rgba(255,248,215,.18)',mx,my,34);dot(g,'#f6f0d6',mx,my,15);dot(g,'rgba(180,170,140,.4)',mx-4,my-3,4);dot(g,'rgba(180,170,140,.35)',mx+5,my+4,3)}
 const cc=xs<2400?'rgba(252,206,214,.75)':xs<12800?'rgba(255,255,255,.85)':xs<15000?'rgba(255,176,140,.7)':'rgba(140,120,190,.4)';
 each(o-((t*6)%340)*.02,340,1,(x,i,r)=>{if(xs>2400&&xs<11000&&r>.55)return;nube(g,x+r*100,40+r*46,.8+r*.5,cc)});
 const fo=cl(1-xs/2400,0,1)*.32;if(fo>.01){g.fillStyle='rgba(252,190,200,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const wm=cl((xs-9800)/1000,0,1)*cl((13200-xs)/900,0,1)*.14;if(wm>.01){g.fillStyle='rgba(255,208,120,'+wm+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-13300)/800,0,1)*cl((15400-xs)/900,0,1)*.26;if(wg>.01){g.fillStyle='rgba(255,110,70,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* ---- livello 1: oceano, Dois Irmãos e Pedra da Gávea, Corcovado con il Cristo, torri del Centro, Pão de Açúcar sulla baia, luci della città e dello stadio ---- */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(c,'#262a5e',night*.7);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp-Math.abs(xs-wc))/(sp*.4),0,1);
 /* oceano aperto con l'orizzonte (zone 1-3) e il Leme a sinistra */
 const oc=env(1800,3600);if(oc>.02){g.globalAlpha=oc;g.fillStyle=dim('#4aa0d0');g.fillRect(0,hz-4,480,60);g.fillStyle=dim('#7cc4e0');g.fillRect(0,hz-4,480,6);for(let q=0;q<18;q++)rect(g,'rgba(255,255,255,.4)',((q*61+t*6+o*.4)%520)-20,hz+4+hr(q)*40,14+hr(q+2)*18,1.6);g.globalAlpha=1}
 const lh=env(300,1800);if(lh>.02){g.globalAlpha=lh;const sx=fx(300);g.fillStyle=dim('#3a7a44');g.beginPath();g.moveTo(sx-260,hz+40);g.quadraticCurveTo(sx-150,hz-70,sx-40,hz-34);g.quadraticCurveTo(sx+20,hz-14,sx+100,hz+40);g.closePath();g.fill();rect(g,dim('#cfc7b0'),sx-110,hz-52,30,8);g.globalAlpha=1}
 /* Dois Irmãos e Pedra da Gávea (zone 2-3) */
 const di=env(3900,3400);if(di>.02){g.globalAlpha=di;const sx=fx(3900);poly(g,dim('#6a8a7c'),[[sx-170,hz+24],[sx-130,hz-74],[sx-104,hz-110],[sx-80,hz-70],[sx-70,hz+24]]);poly(g,dim('#7a9a8c'),[[sx-70,hz+24],[sx-52,hz-60],[sx-30,hz-92],[sx-8,hz-56],[sx+10,hz+24]]);
  poly(g,dim('#8a96a0'),[[sx+90,hz+24],[sx+100,hz-56],[sx+130,hz-86],[sx+190,hz-92],[sx+222,hz-60],[sx+236,hz+24]]);poly(g,dim('#7a8690'),[[sx+190,hz-92],[sx+222,hz-60],[sx+236,hz+24],[sx+208,hz+24]]);
  g.fillStyle=dim('#5a8a62');g.beginPath();g.moveTo(sx-260,hz+30);for(let q=0;q<=20;q++){const px=sx-260+q*26;g.lineTo(px,hz+8-14*Math.abs(Math.sin(q*.7)))}g.lineTo(sx+260,hz+30);g.closePath();g.fill();g.globalAlpha=1}
 /* Corcovado con il Cristo a braccia aperte, nuvole attorno alla cima (zone 3-5) */
 const co=env(7400,3800);if(co>.02){g.globalAlpha=co;const sx=fx(7400);g.fillStyle=dim('#4a7a58');g.beginPath();g.moveTo(sx-300,hz+40);g.quadraticCurveTo(sx-170,hz-30,sx-60,hz-140);g.quadraticCurveTo(sx-20,hz-170,sx+10,hz-160);g.quadraticCurveTo(sx+60,hz-130,sx+120,hz-60);g.quadraticCurveTo(sx+220,hz,sx+300,hz+40);g.closePath();g.fill();
  g.fillStyle=dim('#5a8a66');g.beginPath();g.moveTo(sx-200,hz+30);g.quadraticCurveTo(sx-110,hz-50,sx-50,hz-120);g.quadraticCurveTo(sx-60,hz-60,sx-100,hz+30);g.closePath();g.fill();
  const cx=sx-4,cy=hz-166,cc=dim('#e8e8e0');rect(g,cc,cx-1.6,cy-22,3.2,22);rect(g,cc,cx-14,cy-19,28,2.8);dot(g,cc,cx,cy-24,2.4);
  for(let q=0;q<3;q++){const cxx=sx-90+q*50+((t*3+q*40)%60)-20;nube(g,'rgba(255,255,255,.7)'&&cxx,hz-90+q*14,.5+.2*q,'rgba(255,255,255,.55)')}g.globalAlpha=1}
 /* torri e chiese del Centro, a destra del Corcovado (zone 5-6) */
 const ce=env(10000,3200);if(ce>.02){g.globalAlpha=.92*ce;const sx=fx(10000);[[-200,30,60],[-160,24,90],[-120,36,56],[-70,28,110],[-20,40,76],[30,26,124],[80,34,84],[130,30,100],[180,38,66]].forEach((b,i)=>{rect(g,dim(i%2?'#8a9ab0':'#9aa8bc'),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2]);if(night>.3)for(let q=0;q<b[2]/9;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.85)',sx+b[0]-b[1]/2+3+(q%3)*8,hz+20-b[2]+q*9,4,3)});
  g.fillStyle=dim('#c8c0a8');g.beginPath();g.arc(sx-250,hz+16,14,Math.PI,0);g.fill();rect(g,dim('#c8c0a8'),sx-264,hz+16,28,16);rect(g,dim('#c8c0a8'),sx-230,hz-6,8,38);g.globalAlpha=1}
 /* colline di Santa Teresa con le casette (zona 6) */
 const st=env(12000,2800);if(st>.02){g.globalAlpha=st;g.fillStyle=dim('#5a8a5a');g.beginPath();g.moveTo(0,hz+40);for(let q=0;q<=24;q++){const px=q*20;g.lineTo(px,hz-20-20*Math.abs(Math.sin((px+o)*.012))-8*Math.sin((px+o)*.04))}g.lineTo(480,hz+40);g.closePath();g.fill();for(let q=0;q<20;q++)rect(g,dim(['#e8808a','#f0c850','#7ab8c8','#f4f0e6'][q%4]),((q*29+o*.6)%500)-10,hz-6+hr(q)*12,6,5);g.globalAlpha=1}
 /* baia di Guanabara con il Pão de Açúcar e il Morro da Urca, il ponte di Niterói e le luci dell'altra sponda (zone 6-8) */
 const ba=env(14300,3600);if(ba>.02){g.globalAlpha=ba;const sx=fx(14300);const mt=mixs('#7a6a90','#14102a',night);
  g.fillStyle=mixs('#e88a5a','#2a2c60',night);g.fillRect(0,hz+14,480,50);for(let q=0;q<9;q++)rect(g,'rgba(255,230,160,.4)',((q*70+o*.3)%520)-20,hz+22+hr(q)*24,26,1.6);
  g.fillStyle=mt;g.beginPath();g.moveTo(sx-100,hz+16);g.quadraticCurveTo(sx-100,hz-80,sx-30,hz-92);g.quadraticCurveTo(sx+40,hz-96,sx+44,hz-20);g.lineTo(sx+60,hz+16);g.closePath();g.fill();
  g.fillStyle=mixs('#8a7a98','#1a1432',night);g.beginPath();g.moveTo(sx+30,hz+16);g.quadraticCurveTo(sx+30,hz-40,sx+100,hz-46);g.quadraticCurveTo(sx+150,hz-40,sx+150,hz+16);g.closePath();g.fill();
  ln(g,'rgba(40,30,50,.6)',1.2,[sx-30,hz-92,sx+90,hz-46]);const cu=(t*.04)%1;rect(g,'rgba(40,30,50,.7)',sx-30+cu*120-5,hz-92+cu*46,10,6);
  rect(g,mixs('#6a5a80','#14102a',night),sx+220,hz-4,200,14);for(let q=0;q<26;q++)dot(g,'rgba(255,214,140,'+(.4+.4*Math.sin(t*3+q))*(.4+night*.6)+')',sx+230+q*7,hz-6+(q%3),1.3);
  ln(g,mixs('#6a5a80','#14102a',night),2,[sx+190,hz+10,sx+320,hz-24,sx+450,hz+10]);g.globalAlpha=1}
 /* luci della Lapa e il cono della cattedrale in lontananza (zona 8) */
 const la=env(16200,2600);if(la>.02){g.globalAlpha=.92*la;const sx=fx(16200);[[-180,34,60],[-140,26,84],[-100,40,50],[-30,30,96],[10,44,70],[70,30,110],[120,36,64],[170,28,90]].forEach((b,i)=>{rect(g,dim('#8a96aa'),sx+b[0]-b[1]/2,hz+16-b[2],b[1],b[2]);if(night>.3)for(let q=0;q<b[2]/9;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.85)',sx+b[0]-b[1]/2+3+(q%3)*8,hz+20-b[2]+q*9,4,3)});
  poly(g,dim('#7a8296'),[[sx-250,hz+16],[sx-236,hz-70],[sx-206,hz-70],[sx-192,hz+16]]);for(let q=0;q<6;q++)ln(g,'rgba(255,255,255,.14)',1,[sx-246+q*8,hz+14,sx-232+q*5,hz-68]);g.globalAlpha=1}
 /* colline scure, luci della città e riflettori dello stadio (zona 9) */
 const ma=env(18800,3400);if(ma>.02){g.globalAlpha=ma;const sx=fx(18800);g.fillStyle=dim('#2a3a4a');g.beginPath();g.moveTo(0,hz+30);for(let q=0;q<=24;q++){const px=q*20;g.lineTo(px,hz-20-26*Math.abs(Math.sin((px+o)*.01))-10*Math.sin((px+o)*.05))}g.lineTo(480,hz+30);g.closePath();g.fill();
  el(g,dim('#c8ccd0'),sx,hz+4,70,16);rect(g,dim('#c8ccd0'),sx-70,hz+4,140,14);[-90,90].forEach(o2=>{ln(g,'#6a727c',2,[sx+o2,hz+8,sx+o2,hz-60]);rect(g,'#6a727c',sx+o2-8,hz-66,16,7)});glow(g,sx,hz-30,160,'255,252,235',.4*night);g.globalAlpha=1}
 if(night>.35)for(let q=0;q<46;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.3)+')',q*11+hr(q)*8,hz+20+hr(q*3)*8,1.2)}
/* ---- livello 2: profili di palazzi, alberi e tetti, zona per zona ---- */
function layerMid(g,o,t){const cam=o/.2,hz=326,xs=cam+240,night=nf(cam+300),dim=c=>mixs(c,'#2a2c60',night*.6);
 each(o,120,5,(x,i,r)=>{const zz=zn(cam+x+120),w=108;
  if(zz==1){if(hr(i*3)>.7){el(g,dim('#3a7a44'),x+40,hz-30,30,26);rect(g,dim('#7a5a3a'),x+38,hz-8,4,16)}else{rect(g,dim(['#e8e0cc','#d8d4c8','#ece4d0'][md(i,3)]),x+6,hz-70-r*50,64,80+r*50);rect(g,'rgba(255,255,255,.2)',x+6,hz-70-r*50,4,80+r*50);if(night>.2)for(let q=0;q<8;q++)if(hr(i*7+q)>.4)rect(g,'rgba(255,226,160,.8)',x+14+(q%3)*16,hz-62-r*50+Math.floor(q/3)*16,6,5)}}
  else if(zz==2){rect(g,dim(['#f0e8d4','#e4d4b8','#dce4dc'][md(i,3)]),x+4,hz-50-r*36,70,60+r*36);rect(g,'rgba(255,255,255,.2)',x+4,hz-50-r*36,4,60+r*36);if(hr(i*3)>.6){rect(g,dim('#7a5a3a'),x+90,hz-70,4,76);for(let q=0;q<5;q++){ln(g,dim('#3a7a44'),2.4,[x+92,hz-66+q*10,x+74+q*3,hz-58+q*10]);ln(g,dim('#3a7a44'),2.4,[x+92,hz-66+q*10,x+110-q*3,hz-58+q*10])}}}
  else if(zz==3){el(g,dim(['#2a6a34','#33783c','#21592c'][md(i,3)]),x+50,hz-30-r*10,60,40+r*14);el(g,dim('#3a8444'),x+20,hz-14,34,22);if(hr(i*3)>.7){rect(g,dim('#e8d8b8'),x+60,hz-38,36,46);poly(g,dim('#8a3a2a'),[[x+56,hz-38],[x+78,hz-54],[x+100,hz-38]])}}
  else if(zz==4){el(g,dim(['#1e4a2a','#2a6a34','#21592c'][md(i,3)]),x+50,hz-40-r*20,66,54+r*20);el(g,dim('#33783c'),x+10,hz-20,36,30);if(hr(i*3)>.8)poly(g,dim('#7a7e78'),[[x+30,hz+10],[x+54,hz-34],[x+84,hz+10]])}
  else if(zz==5){rect(g,dim(['#e8dcc0','#d8c8a8','#cfd8c0'][md(i,3)]),x,hz-44-r*34,w,54+r*34);rect(g,dim('#a89878'),x-3,hz-48-r*34,w+6,5);if(hr(i*3)>.7){poly(g,dim('#8a928a'),[[x+20,hz-48-r*34],[x+w*.5,hz-76-r*34],[x+w-20,hz-48-r*34]])}if(night>.2||hr(i)>.8)rect(g,'rgba(255,226,160,.6)',x+10,hz-30-r*34,w-20,3)}
  else if(zz==6){if(hr(i*3)>.6){el(g,dim('#2a6a34'),x+54,hz-34,40,34)}else{rect(g,dim(['#e8808a','#f0c850','#7ab8c8','#a8c878'][md(i,4)]),x+4,hz-34-r*18,90,44+r*18);poly(g,dim('#a8402e'),[[x,hz-34-r*18],[x+20,hz-52-r*18],[x+78,hz-52-r*18],[x+98,hz-34-r*18]])}}
  else if(zz==7){rect(g,dim(['#f0e4cc','#e8d0b0','#d8e4dc'][md(i,3)]),x,hz-30-r*12,w-10,40+r*12);rect(g,dim('#b8a888'),x-3,hz-34-r*12,w-4,5);if(hr(i*3)>.6)el(g,dim('#33783c'),x+90,hz-30,24,26);for(let q=0;q<7;q++)dot(g,night>.1||hr(q+i)>.6?'rgba(255,226,140,.85)':'#f4ecc8',x+8+q*14,hz-26-r*12,1.6)}
  else if(zz==8){rect(g,dim(['#e8808a','#f0c850','#7ab8c8','#c8a0d8'][md(i,4)]),x,hz-34-r*14,w-6,44+r*14);rect(g,dim('#f4f0e6'),x-3,hz-38-r*14,w,5);if(night>.1)for(let q=0;q<5;q++)rect(g,'rgba(255,200,110,.85)',x+8+q*18,hz-22-r*14,8,14);if(hr(i*3)>.8){rect(g,dim('#e8dcc0'),x+30,hz-90,26,60);poly(g,dim('#8a928a'),[[x+26,hz-90],[x+43,hz-110],[x+60,hz-90]])}}
  else{rect(g,dim(['#c8c4b8','#bcb8aa'][md(i,2)]),x,hz-50-r*30,w-14,60+r*30);if(night>.2)for(let q=0;q<10;q++)if(hr(i*9+q)>.35)rect(g,'rgba(255,226,160,.85)',x+10+(q%4)*20,hz-42-r*30+Math.floor(q/4)*14,8,6);rect(g,dim('#6a6e78'),x+8,hz-58-r*30,w-30,6)}});
 if(night>.3)for(let q=0;q<60;q++)dot(g,'rgba(255,200,120,'+(.4+.4*Math.sin(t*3+q))*(night-.2)+')',((q*37+o*.9)%520)-20,hz-20+hr(q*3)*40,1.4)}
/* ---- livello 3: la strada, zona per zona ---- */
function layerStreet(g,o,t){const gt=GT;TT=t;
 const each2=(per,seed,a,b,st,hf,wd)=>{if(o+480<a||o>b)return;each(o,per,seed,(x,i,r)=>{const wx=i*per;if(wx<a-per||wx>b)return;A.setDK(nf(wx));fac(g,x,wd,hf(i),i,st,wx)})};
 each2(190,7,Z[0],Z[1],1,i=>150+hr(i*5)*80,170);
 each2(190,8,Z[1],Z[2],2,i=>130+hr(i*5)*50,170);
 each2(210,9,Z[2],Z[3],3,i=>170+hr(i*5)*60,200);
 each2(150,10,Z[3],Z[4],4,i=>120+hr(i*5)*40,150);
 each2(200,11,Z[4],Z[5],5,i=>180+hr(i*5)*50,180);
 each2(180,12,Z[5],Z[6],6,i=>170+hr(i*5)*60,170);
 each2(190,13,Z[6],Z[7],7,i=>150+hr(i*5)*50,170);
 each2(170,14,Z[7],Z[8],8,i=>160+hr(i*5)*40,160);
 each2(190,15,Z[8],Z[9],9,i=>170+hr(i*5)*80,170);
 /* i fili dell'alimentazione dei tram in città (Centro, Santa Teresa, Lapa) */
 if(o+480>8400&&o<13000||o+480>15200&&o<17400){g.strokeStyle='rgba(30,30,34,.4)';g.lineWidth=1;for(let q=0;q<60;q++){const wx=8500+q*300,x=wx-o;if(x<-150||x>630||wx>17300||(wx>12900&&wx<15300))continue;const a2=gt-150-hr(q)*30;g.beginPath();g.moveTo(x,a2);g.quadraticCurveTo(x+150,a2+14,x+300,a2+(hr(q+1)-.5)*8);g.stroke()}}}
/* ---- vita: gabbiani e fregate, urubus, pappagallini, corridori e ciclisti ---- */
function layerBirds(g,o,t){const cam=o,xs=cam+240;
 /* gabbiani sul mare (Copacabana, Ipanema, la baia di Urca, il porto) */
 const gg=cl((xs-200)/400,0,1)*cl((4500-xs)/500,0,1),gh=cl((xs-10200)/500,0,1)*cl((11400-xs)/500,0,1),gm=cl((xs-13000)/500,0,1)*cl((15200-xs)/700,0,1);
 [gg,gh,gm].forEach((ga,zi)=>{if(ga>.05)for(let i=0;i<4;i++){const bx=((i*131+t*(40+i*7)+zi*70)%640)-80,by=60+hr(i+zi)*90+Math.sin(t*1.6+i*2)*20,w=Math.sin(t*8+i)*4;g.strokeStyle='rgba(250,250,250,'+(.95*Math.min(1,ga))+')';g.lineWidth=2.4;g.beginPath();g.moveTo(bx-9,by+w);g.quadraticCurveTo(bx-4,by-4,bx,by);g.quadraticCurveTo(bx+4,by-4,bx+9,by+w);g.stroke();rect(g,'rgba(70,80,100,.8)',bx+8,by+w-1,2,1.6)}});
 /* fregate: scure, ad ali larghe e coda biforcuta, alte sopra il mare */
 const fr=cl((xs-300)/400,0,1)*cl((4200-xs)/500,0,1);if(fr>.05)for(let i=0;i<3;i++){const bx=((i*210+t*(24+i*5))%700)-100,by=36+i*22+Math.sin(t*.9+i)*8;g.strokeStyle='rgba(30,30,40,'+(.85*fr)+')';g.lineWidth=2.2;g.beginPath();g.moveTo(bx-18,by+4);g.quadraticCurveTo(bx-6,by-5,bx,by);g.quadraticCurveTo(bx+6,by-5,bx+18,by+4);g.stroke();ln(g,'rgba(30,30,40,'+(.85*fr)+')',1.6,[bx,by,bx-5,by+9]);ln(g,'rgba(30,30,40,'+(.85*fr)+')',1.6,[bx,by,bx+5,by+9])}
 /* urubus che volteggiano alti sopra i morros (Arpoador, Lagoa, Corcovado, Urca) */
 const ur=Math.max(cl((xs-2600)/500,0,1)*cl((8600-xs)/500,0,1),cl((xs-13200)/500,0,1)*cl((15000-xs)/500,0,1));if(ur>.05)for(let i=0;i<4;i++){const an=t*.35+i*1.6,bx=240+Math.cos(an)*(150+i*20),by=50+i*20+Math.sin(an)*14,w=Math.sin(t*1.2+i)*2;g.strokeStyle='rgba(30,26,30,'+(.8*ur)+')';g.lineWidth=2.6;g.beginPath();g.moveTo(bx-12,by+3+w);g.quadraticCurveTo(bx-5,by-3,bx,by);g.quadraticCurveTo(bx+5,by-3,bx+12,by+3+w);g.stroke()}
 /* pappagallini verdi che passano veloci fra le palme (Jardim Botânico, Corcovado, Centro, Santa Teresa) */
 const pp=Math.max(cl((xs-4600)/400,0,1)*cl((9400-xs)/400,0,1),cl((xs-11000)/400,0,1)*cl((13000-xs)/400,0,1));
 if(pp>.05)for(let i=0;i<5;i++){const bx=((i*107+t*(70+i*6))%600)-60,by=90+hr(i*3)*110+Math.sin(t*2.2+i)*14,w=Math.sin(t*14+i)*3;ln(g,'#3aa83a',2.6,[bx-7,by+w,bx,by,bx+7,by+w]);dot(g,'#5ac85a',bx+5,by-2,2.4);rect(g,'#e8402a',bx+7,by-3,2.4,1.6);ln(g,'#2a8a2a',1.4,[bx-6,by+1,bx-12,by+4])}
 /* corridori e ciclisti sul lungomare, intorno alla laguna e per le strade del Centro */
 [[200,4300,60,0],[5600,6300,34,1],[8500,11000,-34,2]].forEach((rg,ri)=>{for(let i=0;i<(ri==1?2:3);i++){const span=rg[1]-rg[0],sp=rg[2]*(1+i*.2),wx=rg[0]+(((t*sp+i*span/3)%span)+span)%span,px=wx-cam;if(px<-40||px>520)continue;A.setDK(nf(wx));const d=sp>0?1:-1,by=GT+22+i*9;g.save();g.translate(px,by);g.scale(d*.6,.6);
  fig(g,0,0,t*3,{f:1,s:.7,ph:i,skin:'#e0b090',top:['#e8505a','#2a8a9a','#f2c82a'][i],bot:'#2a2a36',hair:'#2a1a10'});g.restore()}})}
/* ---- terreno: ogni zona ha il suo suolo ---- */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[[Z[0],Z[1],'#e8d4a2','w'],[Z[1],Z[2],'#e6cf98','w'],[Z[2],Z[3],'#d6d0b4','g'],[Z[3],Z[4],'#a8a49a','r'],[Z[4],Z[5],'#d6cfc0','m'],[Z[5],Z[6],'#8c8070','c'],[Z[6],Z[7],'#c8bca0','u'],[Z[7],Z[8],'#4a4a54','l'],[Z[8],Z[9],'#a8a8a6','p']];
 rect(g,'#e8dcc0',0,gt,480,3);
 GZ.forEach(z=>{const a=z[0]-cam,b=z[1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0);g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,z[2],x0,gt+3,x1-x0,150);
  if(z[3]=='w'){/* sabbia e Calçadão: il marciapiede a onde bianche e nere */
   for(let q=0;q<130;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.28)':'rgba(120,90,40,.18)',x0+((q*47)%ww),gt+8+hr(q+3)*80,2+hr(q)*3,1.6);rect(g,'rgba(120,90,50,.12)',x0,gt+3,x1-x0,10);
   rect(g,'#cfc8b4',x0,gt+86,x1-x0,34);for(let px=Math.floor(x0/3)*3;px<x1;px+=3){const wv=Math.sin((px+cam)*.05)*5;for(let r=0;r<5;r++)rect(g,r%2?'#f1ede2':'#26262a',px,gt+88+r*6+wv,3.2,6.4)}rect(g,'rgba(0,0,0,.12)',x0,gt+84,x1-x0,2);rect(g,'rgba(0,0,0,.14)',x0,gt+120,x1-x0,3)}
  if(z[3]=='g'){rect(g,'#6aa850',x0,gt+3,x1-x0,22);for(let q=0;q<50;q++)rect(g,'rgba(40,100,40,.3)',x0+((q*29)%ww),gt+5+hr(q)*18,2,4);rect(g,'rgba(255,255,255,.2)',x0,gt+3,x1-x0,8);for(let q=0;q<110;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.3)':'rgba(120,100,60,.22)',x0+((q*47)%ww),gt+30+hr(q+3)*50,2+hr(q)*3,1.6);rect(g,'#9a9ca8',x0,gt+96,x1-x0,26);rect(g,'#e8d84a',x0,gt+122,x1-x0,3)}
  if(z[3]=='r'){for(let q=0;q<90;q++)rect(g,'rgba(0,0,0,.08)',x0+((q*37)%ww),gt+6+hr(q)*60,6,2);rect(g,'#7a766c',x0,gt+84,x1-x0,40);for(let k=-1;k<Math.ceil(ww/14)+2;k++){const px=Math.floor((cam+x0)/14)*14+k*14-cam;rect(g,'#5a4a3a',px,gt+90,5,28)}rect(g,'#3a3a3e',x0,gt+94,x1-x0,3);rect(g,'#3a3a3e',x0,gt+112,x1-x0,3);rect(g,'#c8a838',x0,gt+103,x1-x0,2.4);for(let k=-1;k<Math.ceil(ww/8)+2;k++){const px=Math.floor((cam+x0)/8)*8+k*8-cam;rect(g,'#c8a838',px,gt+101,2,6)}}
  if(z[3]=='m'){for(let r=0;r<7;r++){const yy=gt+9+r*19,bw=70+r*12,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,.2)':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,.05)',px,yy,bw-2,15);rect(g,'rgba(0,0,0,.14)',px,yy,1.3,17)}rect(g,'rgba(0,0,0,.1)',x0,yy+15,x1-x0,1.4)}
   rect(g,'#5a5a62',x0,gt+98,x1-x0,2.4);rect(g,'#5a5a62',x0,gt+112,x1-x0,2.4);for(let q=0;q<30;q++)rect(g,'rgba(60,60,66,.5)',x0+((q*23-cam)%ww+ww)%ww,gt+98,1.6,16)}
  if(z[3]=='c'){for(let r=0;r<7;r++){const yy=gt+9+r*19,off=(r%2)*14,bw=34+r*8,s0=Math.floor((cam+x0)/bw)*bw;if(yy>gt+148)break;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+off,hh=hr(k*13+r*5+z[0]);rect(g,hh>.7?'rgba(255,255,255,.14)':hh>.35?'rgba(0,0,0,.06)':'rgba(255,255,255,.04)',px,yy,bw-2,15);rect(g,'rgba(0,0,0,.16)',px,yy,1.3,17)}rect(g,'rgba(0,0,0,.1)',x0,yy+15,x1-x0,1.4)}
   rect(g,'#3a3a3e',x0,gt+100,x1-x0,2.4);rect(g,'#3a3a3e',x0,gt+114,x1-x0,2.4)}
  if(z[3]=='u'){rect(g,'#7c7c88',x0,gt+84,x1-x0,38);rect(g,'#e8d84a',x0,gt+122,x1-x0,2.4);for(let q=0;q<80;q++)rect(g,'rgba(0,0,0,.08)',x0+((q*41)%ww),gt+6+hr(q)*70,4,1.6);for(let q=0;q<60;q++)rect(g,hr(q)>.5?'rgba(255,255,255,.25)':'rgba(120,100,60,.2)',x0+((q*53)%ww),gt+8+hr(q+5)*72,2+hr(q)*3,1.6);
   const gx=Math.max(x0,Z[7]-700-cam);if(gx<x1){rect(g,'#aa9ea4',gx,gt+3,x1-gx,80);rect(g,'rgba(255,255,255,.12)',gx,gt+3,x1-gx,10)}}
  if(z[3]=='l'){rect(g,'#3a3a44',x0,gt+84,x1-x0,40);for(let q=0;q<28;q++)rect(g,'rgba(255,255,255,.08)',x0+((q*37-cam)%ww+ww)%ww,gt+90+hr(q)*30,10,1.6);for(let r=0;r<5;r++){const yy=gt+9+r*15,bw=26+r*5,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*10,hh=hr(k*13+r*5);rect(g,hh>.6?'rgba(255,255,255,.1)':'rgba(0,0,0,.08)',px,yy,bw-2,12)}}rect(g,'rgba(255,200,100,.1)',x0,gt+84,x1-x0,4);rect(g,'#e8d84a',x0,gt+124,x1-x0,2.4)}
  if(z[3]=='p'){rect(g,'#7a7a7e',x0,gt+84,x1-x0,40);for(let r=0;r<5;r++)rect(g,'rgba(0,0,0,.12)',x0,gt+16+r*17,x1-x0,1.4);for(let q=0;q<40;q++)rect(g,'rgba(255,255,255,.12)',x0+((q*53)%ww),gt+10+hr(q)*72,3,1.6);for(let q=0;q<12;q++){const sx=((q*90-cam)%520+520)%520;rect(g,['#c8281e','#1a9a3a','#14110f','#f4f0e6'][q%4],sx,gt+130+(q%3)*5,40,4)}
   rect(g,'#e8d84a',x0,gt+124,x1-x0,2.4);const gx=Math.max(x0,19250-cam);if(gx<x1){rect(g,'#2f7a3a',gx,gt+3,x1-gx,148);for(let q=0;q<10;q++)rect(g,q%2?'#368a42':'#2a6a34',gx,gt+3+q*15,x1-gx,15)}}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1400,0,1);if(dw>.02)rect(g,'rgba(255,170,160,'+(.12*dw)+')',0,gt,480,150);
 const gd=cl((cam-9800)/700,0,1)*cl((13200-cam)/700,0,1);if(gd>.02)rect(g,'rgba(255,200,100,'+(.12*gd)+')',0,gt,480,150);
 const sg=cl((cam-13200)/700,0,1)*cl((15400-cam)/800,0,1);if(sg>.02)rect(g,'rgba(255,110,50,'+(.16*sg)+')',0,gt,480,150)}
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};

/* ---- personaggi ---- */
const NP=(id,name,x,d,o,acc)=>({id,name,x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));fig(g,px,y,t,Object.assign({f},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:d}}});
const npcs=[
 /* Seu Nelson: cappello di paglia, maglietta bianca consumata, calzoncini, mani forti, una rete sulla spalla */
 NP('rio_nelson',NAME.rio_nelson,2290,GREET.rio_nelson,{skin:'#b8805a',top:'#ece8dc',bot:'#b8805a',hair:'#8a8a8e',s:1.02},(g,b,t)=>{rect(g,'#4a6a8a',-12,-52,24,16);rect(g,'#3a5a7a',-12,-52,24,3);el(g,'#e0c878',0,-112+b,19,4.4);rect(g,'#e0c878',-9,-121+b,18,9);rect(g,'#a8803a',-9,-114+b,18,2.4);
  ln(g,'#7a6a4a',2.4,[-12,-86+b,-4,-66,10,-56]);for(let q=0;q<5;q++)ln(g,'rgba(120,110,80,.7)',.9,[-10+q*4,-80+b,-12+q*4,-52]);rect(g,'#e8e8e0',-12,-62,3,4)}),
 /* Bia: costume nero con maglia da surf, capelli bagnati raccolti, zinco bianco sul naso, braccialetti, tavola sotto il braccio */
 NP('rio_bia',NAME.rio_bia,2790,GREET.rio_bia,{skin:'#c8946a',top:'#14181c',bot:'#c8946a',hair:'#3a2a1a',s:1.0},(g,b,t)=>{rect(g,'#14181c',-12,-52,24,10);dot(g,'#3a2a1a',-8,-114+b,6);rect(g,'#f4f4f4',6,-99+b,6,3);for(let q=0;q<3;q++)rect(g,['#e8505a','#f2c82a','#2a8ac8'][q],-16,-72+q*3,3,2);
  g.save();g.translate(26,-52);g.rotate(-.06);el(g,'#2a8ac8',0,-2,6,44);rect(g,'#f4f0e0',-1.6,-36,3.2,70);rect(g,'rgba(255,255,255,.25)',-4,-34,2,60);g.restore()}),
 /* Rodrigo: camicia chiara con il badge del santuario, zaino, cappellino blu, occhiali da sole, una cartina in mano */
 NP('rio_rodrigo',NAME.rio_rodrigo,8010,GREET.rio_rodrigo,{skin:'#d8a078',top:'#e8e4d4',bot:'#4a5a6a',hair:'#2a1a10',s:1.04},(g,b,t)=>{rect(g,'#2a6aa8',-13,-114+b,26,7);poly(g,'#1a4a88',[[8,-110+b],[22,-108+b],[8,-105+b]]);rect(g,'#14110f',-2,-103+b,14,3.4);rect(g,'#f4f0e6',-9,-80+b,8,6);dot(g,'#c8281e',-5,-77+b,1.6);
  rect(g,'#6a4a2a',-22,-86+b,10,38);rect(g,'rgba(0,0,0,.2)',-22,-86+b,2,38);rect(g,'#e8dcb8',20,-70,12,16);ln(g,'#8a6a2a',.8,[22,-66,30,-58]);ln(g,'#c8281e',.8,[22,-60,28,-68])}),
 /* Machado de Assis: redingote nera, cravatta scura, barba e baffi curati, occhiali tondi, cappello rigido, un libro sotto il braccio */
 NP('rio_machado',NAME.rio_machado,10200,GREET.rio_machado,{skin:'#e8c0a0',top:'#14110f',bot:'#1a1816',hair:'#8a8a8e',long:1,s:1.02},(g,b,t)=>{rect(g,'#14110f',-11,-128+b,22,20);rect(g,'#14110f',-17,-110+b,34,4);rect(g,'#f4f0e8',-3,-90+b,6,10);poly(g,'#2a2630',[[-2,-88+b],[2,-88+b],[0,-72+b]]);
  poly(g,'#8a8a8e',[[-2,-96+b],[10,-96+b],[9,-86+b],[2,-84+b]]);rect(g,'#8a8a8e',3,-98+b,8,2.4);g.strokeStyle=tn('#2a2a2a');g.lineWidth=1;g.beginPath();g.arc(6,-102+b,3.6,0,7);g.stroke();g.beginPath();g.arc(-2,-102+b,3.6,0,7);g.stroke();ln(g,'#2a2a2a',1,[2.4,-102+b,2.6,-102+b]);
  rect(g,'#7a2a1a',18,-74,8,32);rect(g,'rgba(0,0,0,.3)',18,-74,2,32);rect(g,'#e8dcb8',19,-72,6,28)}),
 /* Zeca: camicia a quadretti con il badge, cappellino con visiera, pantaloni scuri, fazzoletto al collo, piccola campanella */
 NP('rio_zeca',NAME.rio_zeca,12690,GREET.rio_zeca,{skin:'#c8946a',top:'#c85a4a',bot:'#2a2e3a',hair:'#3a2a1a',s:1.04},(g,b,t)=>{for(let q=0;q<4;q++)rect(g,'rgba(255,255,255,.4)',-12,-88+q*10+b,24,2);for(let q=0;q<3;q++)rect(g,'rgba(255,255,255,.4)',-8+q*8,-90+b,2,44);
  rect(g,'#2a3a50',-12,-114+b,26,7);poly(g,'#1a2a40',[[8,-108+b],[22,-106+b],[8,-103+b]]);rect(g,'#f2c82a',-11,-90+b,22,4);rect(g,'#f4f0e6',-8,-76+b,8,6);dot(g,'#2a8ac8',-4,-73+b,1.6);
  dot(g,'#d8b830',22,-62,3.4);ln(g,'#6a4a2a',1.4,[22,-70,22,-65])}),
 /* Dona Nilza: vestito a fiori, cardigan leggero, occhiali, capelli grigi raccolti, un ventaglio, borsa di tela, un guaraná */
 NP('rio_nilza',NAME.rio_nilza,13560,GREET.rio_nilza,{skin:'#e0b090',top:'#e8a8b8',bot:'#e8a8b8',hair:'#c8c8cc',long:1,s:.98},(g,b,t)=>{for(let q=0;q<7;q++)dot(g,['#c8402a','#f2c82a','#f4f0e6','#8a4ad0'][q%4],-9+q*3,-70+(q%3)*8,1.8);rect(g,'#8a9ab0',-13,-90+b,26,6);rect(g,'#8a9ab0',-13,-90+b,4,40);rect(g,'#8a9ab0',9,-90+b,4,40);dot(g,'#c8c8cc',-5,-116+b,6);
  g.strokeStyle=tn('#2a2a2a');g.lineWidth=1;g.beginPath();g.arc(6,-102+b,3.6,0,7);g.stroke();g.beginPath();g.arc(-2,-102+b,3.6,0,7);g.stroke();ln(g,'#2a2a2a',1,[2.4,-102+b,2.6,-102+b]);
  g.save();g.translate(22,-66);g.rotate(Math.sin(t*2)*.2);poly(g,'#e8805a',[[0,0],[-9,-16],[9,-16]]);ln(g,'#6a3a22',1,[0,0,-5,-16]);ln(g,'#6a3a22',1,[0,0,5,-16]);g.restore();
  rect(g,'#d8c8a0',-30,-52,16,18);rect(g,'#6a4a2a',-28,-60,2,8);rect(g,'#2a8a3a',-4,-18,6,16)}),
 /* Chico: camicia di lino chiara, cappello di paglia, cavaquinho a tracolla, sorriso largo, scarpe bianche e nere */
 NP('rio_chico',NAME.rio_chico,15810,GREET.rio_chico,{skin:'#9a6a46',top:'#f0ead8',bot:'#2a2a36',hair:'#14110f',s:1.04},(g,b,t)=>{el(g,'#e0c878',0,-112+b,18,4.4);rect(g,'#e0c878',-9,-121+b,18,9);rect(g,'#2a2a2e',-9,-114+b,18,2.4);rect(g,'#f4f4f4',6,-99+b,7,3);rect(g,'#f4f4f4',-12,-4,9,4);rect(g,'#14110f',-3,-4,5,4);rect(g,'#14110f',2,-4,10,4);
  ln(g,'#6a4a2a',1.6,[-10,-88+b,8,-58]);g.save();g.translate(10,-68);g.rotate(-.3);el(g,'#a8602a',0,0,8,9);dot(g,'#14110f',0,0,3);rect(g,'#6a3a1a',-1.4,-30,2.8,24);rect(g,'#14110f',-3,-34,6,6);g.restore()}),
 /* Carol: maglia verde, bianca e granata sotto una giacca del tour, badge, cappellino, zaino, una sciarpa al collo */
 NP('rio_carol',NAME.rio_carol,19200,GREET.rio_carol,{skin:'#d8a078',top:'#2a5a4a',bot:'#2a3a5a',hair:'#3a2a1a',s:1.0},(g,b,t)=>{rect(g,'#f4f0e6',-8,-88+b,16,40);rect(g,'#7a1a3a',-8,-88+b,5,40);rect(g,'#1a9a3a',3,-88+b,5,40);rect(g,'#2a3a50',-13,-90+b,6,40);rect(g,'#2a3a50',7,-90+b,6,40);
  rect(g,'#2a3a50',-12,-114+b,26,7);poly(g,'#1a2a40',[[8,-108+b],[22,-106+b],[8,-103+b]]);rect(g,'#7a1a3a',-9,-92+b,18,4);rect(g,'#1a9a3a',-9,-88+b,18,4);rect(g,'#f4f0e6',-9,-84+b,18,2.4);rect(g,'#f4f0e6',9,-74,6,8);dot(g,'#c8281e',12,-71,1.6);rect(g,'#6a4a2a',-24,-86+b,10,36)})
];
/* ---- testi della scheda: le tappe, nell'ordine in cui si incontrano ---- */
const LX=[380,830,1280,1740,2150, 3000,3480,3900,4290, 4850,5380,5880,6270, 6900,7350,7800,8190, 8900,9440,9930,10340,10830, 11500,12020,12560, 13470,14000,14420,14960, 15700,16210,16740,17180, 17880,18560,19000,19450];
/* ---- oggetti lungo il percorso ---- */
const props=[
 ['ritarga',200,'AVENIDA ATLÂNTICA'],['ripalma',110,1.2],['rileme',380],['rilamp',590],['ritorre',700,1],['riombrelloni',760],['ricalcadao',830],['ripanca',990,0],['richiosco',1060,'QUIOSQUE'],['rilamp',1160],['ripalace',1280],['rilamp',1470],['ritorre',1530,2],['riforte',1740],['ripalma',1930,1],['ripanca',1990,0],['ripesca',2150],['rilamp',2340],
 ['ritarga',2490,'AVENIDA VIEIRA SOUTO'],['rilamp',2580],['ritavole',2650],['ripalma',2880,1.1],['riarpoador',3000],['rilamp',3260],['ridiabo',3480],['ricestino',3730],['riipanema',3900],['ripalma',4130,1],['rigarota',4290],
 ['ritarga',4500,'RUA JARDIM BOTÂNICO'],['rilamp',4640],['rialameda',4850],['richeda',5140],['rijardim',5380],['riarvore',5640,1],['rilagoa',5880],['ripanca',6080,0],['riparquelage',6270],['rilamp',6400],
 ['ritarga',6490,'RUA COSME VELHO'],['ritrem',6900],['riarvore',7110,1.3],['rifloresta',7350],['riarvore',7580,1.2],['ricristo',7800],['rivista',8190],
 ['ritarga',8490,'RUA GONÇALVES DIAS'],['ritramvlt',9650],['ripaco',8900],['ritarga',9150,'PRAÇA XV DE NOVEMBRO'],['ricandelaria',9440],['ritheatro',9930],['ricolombo',10340],['riedicola',10570],['rilamp',10650],['rimuseu',10830],['rilamp',10990],
 ['ribonde',11500],['rilamp',11200],['riarvore',11770,1.2],['riselaron',12020],['rilamp',12240],['rilargo',12560],['ripanca',12880,0],
 ['ritarga',13070,'AVENIDA PASTEUR'],['rimureta',13470],['rilamp',13760],['ripista',14000],['ribondinho',14420],['ripalma',14690,1],['ricima',14960],
 ['ritarga',15290,'RUA JOAQUIM SILVA'],['riarcos',15700],['rilapa',16210],['ritarga',16470,'RUA FRANCISCO MURATORI'],['ripedra',16740],['rilamp',16950],['rivalongo',17180],
 ['rilamp',17400],['riflag',17540],['rimaraca',17880],['rigrelha',18140],['ritornelli',18260],['ritarga2',18560],['ritarga',18700,'ESTÁDIO JORNALISTA MÁRIO FILHO'],['rilamp',18780],['risambo',19000],['rivarco',19450]
];
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
addWorld({id:'rio',name:'Rio de Janeiro · Da Copacabana al Maracanã',width:W1,sky:['#8a98c8','#f6b4b8','#ffd8b8'],gt:372,gr:['#e8d4a2','#a89868'],chord:[174.6,220,261.6,329.6],amb:'#ffe6c0',
intro:INTRO,
look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerBirds)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (da rio.txt) --- */
(function(){
const TOPX_RIO={
rio_nelson:[
["Chi sei e da quanto fai questo mestiere?","Nelson, sessantatré anni, pescatore da quando ero un ragazzino. Esco all’alba, quando il mare è ancora tranquillo, e torno con quello che ha voluto darmi. Un mestiere che non ti fa ricco, ma ti fa libero."],
["Perché si chiama Copacabana?","C’era una chiesetta con l’immagine di Nossa Senhora de Copacabana, protettrice dei naviganti, e il paese prese il nome da lei. Poi il nome è passato alla spiaggia e al quartiere. Quando hanno costruito il Forte, la cappella è stata tolta."],
["Quanto è lunga la spiaggia?","Circa quattro chilometri, dal Leme fino al Forte. Fino agli anni Settanta era molto più stretta: il mare arrivava quasi alla strada. Poi hanno fatto un grande riporto di sabbia, e adesso ci stanno anche le partite di pallone."],
["E il marciapiede a onde?","Il Calçadão: pietrine portoghesi bianche e nere, disegnate da Burle Marx nel 1970. L’idea viene da Lisbona, ma qui le onde seguono quelle vere. Cammina piano, Pierpaolo: è una strada, ma sembra un quadro."],
["Che cos’è il Forte?","Costruito fra il 1908 e il 1914 per difendere la baia, con muri spessi fino a dodici metri e cannoni Krupp. Oggi dentro c’è un museo e il caffè della Confeitaria Colombo, con una vista da cartolina. Si dice che da lì, a volte, si vedano le tartarughe marine nuotare sotto."],
["Che cosa pescate qui?","Quello che manda il mare, e cambia con la stagione. Chi arriva presto vede le barche tornare e le reti stese ad asciugare. Il lavoro è duro, ma l’alba compensa tutto."],
["Cos’è il Copacabana Palace?","L’albergo bianco di fronte, aperto nel 1923: marmo di Carrara, saloni da film. Si dice che abbia ospitato i Rolling Stones e Marilyn Monroe. Un film con Fred Astaire e Ginger Rogers lo rese famoso, anche se lo girarono in America: figurati!"],
["E il Capodanno a Copacabana?","È una delle feste più grandi del mondo: milioni di persone sulla spiaggia, fuochi d’artificio, musica. Io preferisco il giorno dopo, quando torna il silenzio e il mare si riprende tutto. Valeu per chi ci viene, ma io resto con le mie reti."],
["Che cos’è il Leme?","La parte nord della spiaggia, sotto la collina verde. In cima c’è il Forte do Leme, che ufficialmente si chiama Forte Duque de Caxias: uno a ogni estremità, come due guardie. Camminare dall’uno all’altro è una bella passeggiata."],
["Perché la città si chiama Rio de Janeiro, se non c’è un fiume?","Il primo gennaio del 1502 i navigatori portoghesi entrarono nella baia di Guanabara e la scambiarono per la foce di un fiume. Era gennaio, e così fu \"fiume di gennaio\". Un errore di calcolo, ma bellissimo, Pierpaolo."],
["Quando è nata la città?","Il primo marzo del 1565, quando Estácio de Sá, un militare portoghese, sbarcò ai piedi del Pão de Açúcar per cacciare i francesi. Fu chiamata São Sebastião do Rio de Janeiro, in onore del santo. Il compleanno si festeggia ogni anno il primo marzo."],
["Posso salutarti e proseguire la mia passeggiata?","Va’ tranquilo, Pierpaolo. Se passi di qui al tramonto, fatti un giro all’Arpoador: là il sole lo applaudono. Boa sorte, e che il mare ti sia leggero!"]
],
rio_bia:[
["Chi sei e che fai?","Bia, ventisette anni, istruttrice di surf qui all’Arpoador. Insegno a turisti e a cariocas che non hanno mai preso un’onda. L’ufficio migliore del mondo, sinceramente."],
["Perché si chiama Arpoador?","Si dice che il nome venga da quando qui si arpionavano le balene, e che i pescatori salissero sulla roccia con gli arpioni. Oggi si arpiona solo qualche selfie. È la roccia che separa Copacabana da Ipanema."],
["Perché tutti applaudono il tramonto?","Perché il sole scende dietro i Dois Irmãos e la Pedra da Gávea, e il cielo prende fuoco. Si sale sulla roccia prima del tramonto, si aspetta, e quando il sole sparisce parte l’applauso. Nossa, ti viene la pelle d’oca."],
["Com’è il surf qui?","L’Arpoador è la spiaggia dei surfisti: ce ne sono sempre tanti in mare, in attesa dell’onda giusta. Qui si aspetta il proprio turno. È una piccola spiaggia con un carattere grandissimo."],
["Cos’è la Praia do Diabo?","La spiaggetta nascosta dall’altro lato della roccia. È piccola e piace ai residenti che portano i cani, ma il mare è forte: si entra con prudenza. Fra le rocce c’è anche una palestra all’aperto con pesi di cemento, molto rustica."],
["Com’era Ipanema negli anni Sessanta?","Nel 1962 era un quartiere di appena quarantamila abitanti, e nessun edificio superava i quattro piani. Elegante ma tranquillo, pieno di musicisti e artisti. Oggi è più affollato, ma l’anima è rimasta: bacana e rilassata."],
["Che cos’è \"Garota de Ipanema\"?","La canzone di Tom Jobim e Vinicius de Moraes, del 1962: una delle più registrate di sempre, si dice la seconda. La prima esecuzione fu nell’agosto del 1962, al locale Au Bon Gourmet, a Copacabana. Si dice che sia nata guardando passare una ragazza che andava in spiaggia."],
["Chi era la ragazza?","Si chiama Helô Pinheiro, aveva circa diciassette anni e passava davanti al Bar Veloso per comprare le sigarette alla mamma. Per anni nessuno sapeva chi fosse; poi è diventata la \"garota\" per sempre. Il bar ha preso il nome della canzone, e la strada si chiama Rua Vinicius de Moraes."],
["E la bossa nova?","È un modo nuovo di fare samba, con la chitarra dolce e la voce sussurrata: João Gilberto, Tom Jobim, Vinicius de Moraes. Nel 1963, a New York, la versione con João e Astrud Gilberto e il sassofonista Stan Getz la fece conoscere in tutto il mondo. Ancora oggi, Pierpaolo, nessuno riesce a non sorridere."],
["Cosa sono i Dois Irmãos?","Due cime di roccia verdi che sembrano gemelle, alla fine della spiaggia di Ipanema e del Leblon. Dietro si intravede anche la Pedra da Gávea, un grande blocco di pietra. Salire fino in cima è una bella scarpinata con una vista pazzesca."],
["Come ci si muove a Rio?","A piedi, in bicicletta, con la bici a noleggio: Rio ha circa trecentoventi chilometri di piste ciclabili, di cui centocinquanta lungo il mare. Io faccio tutto sul lungomare, con la tavola sotto il braccio. Sembra impossibile, ma funziona: ci si abitua."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e non perderti il tramonto: arrivi presto, trovi un posto sulla roccia e applaudi come tutti. Valeu, e fai attenzione alle onde!"]
],
rio_rodrigo:[
["Chi sei e che lavoro fai?","Rodrigo, trentotto anni, guida del Corcovado. Ogni giorno accompagno persone da tutto il mondo ai piedi del Cristo. Il bello è che la vista cambia ogni volta, con le nuvole."],
["Cos’è il Corcovado?","La montagna di granito alta circa settecentodieci metri, in mezzo alla città. Il nome significa \"gobbo\", per la forma della cima. Da quassù si vede tutta Rio, dalle spiagge alla baia."],
["Come si arriva fin qui?","Con il Trem do Corcovado, che sale dalla stazione di Cosme Velho in una ventina di minuti, oppure con i minibus. Il treno è del 1884: lo inaugurò l’imperatore Dom Pedro II. È la prima ferrovia elettrificata del Brasile e il percorso turistico più antico del paese."],
["Cos’è la foresta che attraversiamo?","La Floresta da Tijuca, parte della Mata Atlântica, spesso indicata come la più grande foresta urbana del mondo. Dentro ci vivono saguis e molti uccelli. Il treno è elettrico e una parte dei biglietti va alla protezione della foresta."],
["Quanto è grande il Cristo?","Trenta metri la statua, più otto di piedistallo: trentotto in tutto. Le braccia aperte misurano ventotto metri e il peso è di circa 1.145 tonnellate. È in cemento armato, ricoperto da piccoli triangoli di pietra ollare, incollati a mano."],
["Chi lo ha progettato?","L’ingegnere carioca Heitor da Silva Costa, con l’artista Carlos Oswald che lo disegnò e lo scultore franco-polacco Paul Landowski, che fece testa e mani a Parigi. Il volto è opera del romeno Gheorghe Leonida. Si dice che Landowski non sia mai venuto in Brasile a vederlo."],
["Quando è stato costruito?","I lavori andarono avanti per anni, fra il 1922 e il 1931, secondo le fonti, e il treno portò su i pezzi: in cima c’è pochissimo spazio. Fu inaugurato il 12 ottobre 1931, giorno di Nossa Senhora Aparecida, la patrona del Brasile."],
["Il Cristo è una delle meraviglie del mondo?","Sì, dal 2007 è fra le Nuove Sette Meraviglie, scelte con un voto mondiale. È la seconda statua di Cristo più grande del mondo, dopo quella di Cristo Re in Polonia. E nel 2012 l’UNESCO ha riconosciuto Rio come paesaggio culturale fra la montagna e il mare: è stata la prima città al mondo a ricevere questo titolo."],
["Chi è salito fin qui?","Papi come Pio XII e Giovanni Paolo II, che nel 1980 benedisse la città da quassù. Sul treno sono saliti anche Albert Einstein, la principessa Diana e l’aviatore Santos-Dumont. Un posto frequentato, Pierpaolo, ma anche molto democratico."],
["Che cosa si vede da qui?","Sotto di noi la Lagoa e il Jardim Botânico, poi Ipanema e Copacabana, la baia di Guanabara con il ponte per Niterói e, in fondo, il Pão de Açúcar. Nei giorni limpidi si capisce davvero perché la chiamano Cidade Maravilhosa. Quando arriva una nuvola, invece, sparisce tutto: aspetta cinque minuti, tá?"],
["Com’è stata l’inaugurazione?","Si racconta che le luci del monumento siano state accese con un segnale partito da Roma, mandato da Guglielmo Marconi. Era il 1931 e il Brasile viveva anni difficili dopo la crisi del 1929. Eppure Rio scelse questa statua come simbolo di fede e di speranza."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e scendi con calma: lungo la strada ci sono altre meraviglie. Se hai fortuna, trovi il cielo sereno e la città tutta ai tuoi piedi. Tchau, e fica bem!"]
],
rio_machado:[
["Chi sei e dove sei nato?","Joaquim Maria Machado de Assis, nato qui a Rio il 21 giugno 1839, sul Morro do Livramento. Famiglia povera, e nipote di schiavi liberati: l’Impero era un altro mondo. Da quel colle sono arrivato a sedermi nei caffè del centro."],
["Come hai fatto a studiare?","Ho frequentato una scuola pubblica, senza molto entusiasmo, finché un sacerdote, padre Silveira Sarmento, non mi aprì la porta della letteratura. Poi ho imparato quasi tutto da solo: sono stato apprendista tipografo, giornalista e funzionario. Da autodidatta ho imparato anche francese, inglese, tedesco e greco."],
["Cosa hai scritto?","Racconti, poesie, teatro, cronache e romanzi. I titoli più noti sono \"Memórias Póstumas de Brás Cubas\", del 1881, \"Quincas Borba\", del 1891, e \"Dom Casmurro\", del 1899. Con il primo, dicono i critici, è cominciato il realismo in Brasile."],
["Cosa pensi della Rio di oggi?","Mi hanno portato a vedere il Museu do Amanhã, alla Praça Mauá: un edificio bianco di Calatrava, del 2015, ispirato alle bromelie del giardino botanico. Un museo sul futuro, per un uomo dell’Ottocento! Lo guardo con ironia e con rispetto: il futuro, in fondo, è il mestiere di tutti i curiosi."],
["Che cos’è l’Academia Brasileira de Letras?","Un’istituzione che fondammo con altri scrittori: l’idea nacque nel dicembre 1896 e la seduta solenne di inaugurazione fu il 20 luglio 1897. Io ne fui il primo presidente e lo rimasi fino alla morte. Oggi mi hanno dedicato anche un premio letterario, il più prestigioso del paese."],
["Perché ti chiamano il \"Bruxo do Cosme Velho\"?","Perché abitavo a Cosme Velho, ai piedi del Corcovado, e si dice che nei miei libri ci fosse qualcosa di stregonesco, un’ironia che punge e ammalia. È un soprannome affettuoso, lo sopporto volentieri. A volte, di sera, passeggio ancora per quella strada."],
["Che cos’è la Confeitaria Colombo?","Un caffè Belle Époque aperto il 17 settembre 1894 da due portoghesi, Joaquim Borges de Meirelles e Manuel José Lebrão. Dentro ci sono specchi belgi, mobili di jacarandá e banconi di marmo italiano. Si dice che qui si siano ritrovati scrittori e artisti: io, Pierpaolo, ci sto bene con una tazza di caffè e un dolcetto."],
["Che cos’è il Theatro Municipal?","Un teatro inaugurato il 14 luglio 1909, ispirato all’Opéra di Parigi. Io non l’ho mai visto, perché sono morto nel 1908: questo incontro, in effetti, è un privilegio! Si affaccia sulla Cinelândia, accanto al Museo di Belle Arti e alla Biblioteca Nazionale."],
["Vuoi parlarci di tua moglie?","Carolina Augusta Xavier de Novais, portoghese, la compagna della mia vita. Morì il 20 ottobre 1904. Dopo, la casa è diventata silenziosa: non è un argomento di cui parlo volentieri, ma ti ringrazio per averlo chiesto con garbo."],
["Com’era Rio ai tuoi tempi?","Una capitale imperiale, con la corte e il porto, e con la schiavitù ancora viva. La schiavitù fu abolita nel 1888 e la Repubblica fu proclamata nel 1889: ho visto tutto, dalla finestra di un ufficio e dalle pagine dei giornali. Era una città di contrasti, e ho cercato di raccontarli con ironia."],
["Come sei morto?","Il 29 settembre 1908, a Rio, a sessantanove anni, nella mia casa di Cosme Velho. La salute era fragile e la solitudine pesava dopo la morte di Carolina. Il giorno dopo i giornali scrissero parole generose: per un autore, leggere il proprio necrologio non è poca cosa."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e leggi: anche una pagina, anche a caso. Un libro ben fatto è l’unica macchina del tempo che funzioni davvero. Boa viagem, e se ripassi di qui, il caffè lo offre la storia."]
],
rio_zeca:[
["Chi sei e che fai?","Zeca, cinquantadue anni, motorneiro del bonde di Santa Teresa. Faccio la stessa corsa tutti i giorni, ma non è mai uguale: cambia la luce, cambiano i passeggeri. È un mestiere che ti insegna la pazienza, mermão."],
["Da quando esiste il bonde?","Circola dal 1896: sale dalla stazione Carioca, nel Centro, e passa sugli Arcos da Lapa fino a Santa Teresa. È l’ultimo tram storico rimasto a Rio, e per questo siamo orgogliosi. Gli altri sono finiti nei libri."],
["Cosa sono gli Arcos da Lapa?","L’antico acquedotto da Carioca, costruito fra il 1744 e il 1750 per portare l’acqua del fiume Carioca al Largo da Carioca. Ha quarantadue archi, circa duecentosettanta metri di lunghezza e diciotto di altezza: la più grande opera di ingegneria del Brasile del Settecento. Dal 1896, sopra, ci passano le rotaie."],
["Com’è il percorso?","Dalla stazione Carioca si sale sugli archi, si arriva al Largo do Curvelo e poi al Largo dos Guimarães. La parte in servizio è lunga circa due chilometri. Le curve sono strette e le salite ripide: bisogna andare piano e guardare."],
["Cosa successe nel 2011?","Ad agosto del 2011 un tram uscì dai binari: morirono sei persone e più di cinquanta rimasero ferite. Il servizio restò fermo per quasi quattro anni. Parlarne mi costa ancora: ogni volta che parto penso a loro, e lavoro con più attenzione."],
["Come è tornato il bonde?","Piano piano: a luglio del 2015 il tratto fino al Largo do Curvelo, e a dicembre fino al Largo dos Guimarães. Le vetture sono nuove, ma copiate da quelle d’epoca, e oggi nessuno sta più in piedi sul predellino. È più sicuro, e il vento si sente lo stesso."],
["Che cos’è la scalinata Selarón?","Duecentoquindici gradini coperti di piastrelle, fra la Lapa e Santa Teresa. Jorge Selarón, un artista cileno, cominciò a rifarli nel 1990 davanti a casa sua e li chiamava un omaggio al popolo brasiliano. Ci ha lavorato fino al 2013: oggi le piastrelle vengono da una sessantina di paesi."],
["Com’è Santa Teresa?","Un quartiere sulla collina, con vecchie ville, vicoli ripidi e molti artisti. Il centro è il Largo dos Guimarães, dove ci fermiamo: qui si incontrano tutti. In alto c’è anche un convento carmelitano del Settecento."],
["Cosa c’è vicino alla fermata di Curvelo?","Il Parque das Ruínas e il Museu Chácara do Céu: due luoghi da vedere con calma, scendendo a piedi. Camminare a Santa Teresa vuol dire salire e scendere, quindi scarpe comode, tá? E ogni curva ti mostra una nuova vista sulla città."],
["Come si vede Rio dal tram?","Dall’alto: la Lapa, il Centro, la baia in fondo. Una passeggera una volta mi disse che dal bonde si gode meglio la vista di Santa Teresa e della Lapa. Aveva ragione: è come un balcone che si muove."],
["Rio è stata capitale?","Sì, del Brasile dal 1763 fino al 1960, quando la capitale passò a Brasília. Nel 1808, quando Napoleone invase il Portogallo, la corte portoghese si trasferì qui. Per questo il Centro ha tanti palazzi reali, e noi cariocas ci sentiamo un po’ principi."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e scendi dalla scalinata guardando le piastrelle una a una. Se ti manca il tram, ricorda: un \"dlin dlin\" e si riparte. Tchau, e valeu per il passaggio!"]
],
rio_nilza:[
["Chi sei e da quanto abiti qui?","Nilza, settantun anni, nata a Urca e mai andata via. Mi chiamano tutti Dona Nilza, perfino i gatti. Urca è un quartiere piccolo, quasi un paese dentro la città."],
["Cos’è Urca?","Il quartiere sotto il Pão de Açúcar, con case basse, il mare da un lato e la montagna dall’altro. Ai piedi di questa montagna, il primo marzo 1565, sbarcarono i soldati di Estácio de Sá e fondarono Rio. Il resto della città è arrivato dopo."],
["Cos’è la Mureta?","Il muretto sulla baia: ci si siede con una birra e si guarda il tramonto. Qualcuno lo chiama \"pobreta\", un misto di povera e mureta, perché si fa un aperitivo da signori senza spendere troppo. Un consiglio: ordina e paga al Bar Urca, tieni lo scontrino e poi vieni qui, così non fai la fila due volte."],
["Cos’è il Bar Urca?","Il bar che esiste dal 1939 ed è patrimonio culturale della città dal 2012. Servono piatti semplici e birra ghiacciata. Dicono che sia il bar con la vista più bella di Rio, ma io dico che ce l’ha il muretto."],
["Perché si chiama Pão de Açúcar?","Si dice che sia per i pani di zucchero a forma di cono, con cui lo zucchero partiva per l’Europa. Altri dicono che venga da un’espressione tupí che significa \"monte alto, isolato e a punta\". Io dico: il nome è bello, ma il monte è ancora più bello."],
["Quando è nato il bondinho?","Il 27 ottobre 1912: la prima funivia del Brasile e la terza del mondo. L’ingegnere Augusto Ramos fu chiamato \"pazzo\" dai colleghi: invece aveva ragione. Il primo tratto parte dalla Praia Vermelha e arriva al Morro da Urca; il secondo, aperto nel gennaio del 1913, arriva in cima."],
["Quanto è alto?","Il Morro da Urca è a circa duecentoventi metri; il Pão de Açúcar a trecentonovantasei. Ogni tratto dura circa tre minuti, e da lassù vedi Copacabana, il Corcovado, il ponte per Niterói e l’aeroporto. Sembra di avere Rio in tasca."],
["Cos’è la Pista Cláudio Coutinho?","Un sentiero pedonale di un chilometro e un quarto, con il mare da una parte e la foresta dall’altra. Ci vivono i saguis, piccole scimmiette dalla coda a strisce, che a volte si avvicinano alla gente. A metà c’è il sentiero per salire a piedi al Morro da Urca, in circa quaranta minuti."],
["Cosa c’era nel Cassino da Urca?","Una casa da gioco, che chiuse nel 1946. Oggi dell’epoca restano il ricordo e qualche foto. Alcune delle storie più belle del quartiere vengono da lì, ma sono storie da raccontare con una tazza di caffè."],
["Chi è salito sul bondinho?","Albert Einstein, la giovane Malala, il principe Harry e tanti altri. Ci hanno girato anche un film di James Bond, \"Moonraker\", nel 1979. La funivia vola sopra il mare, e il cinema l’adora."],
["Perché Rio è la \"Cidade Maravilhosa\"?","Si dice che lo scrittore Coelho Netto abbia coniato il nome guardando il bondinho appena inaugurato; altri lo attribuiscono a una scrittrice francese, Jane Catulle Mendès, di circa un secolo fa. Comunque sia, Pierpaolo, il soprannome ci è rimasto addosso. Basta guardare questo tramonto per capire perché."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, meu bem, e sali sul bondinho prima che faccia buio: dalla cima la baia s’infiamma. Se ripassi, ti offro un guaraná. Beijo, Pierpaolo, e vai con calma!"]
],
rio_chico:[
["Chi sei e che fai?","Chico, quarantacinque anni, musicista. Suono il cavaquinho nelle rodas de samba, e quando non suono ascolto. Non è un lavoro, è una famiglia: con le persone giuste si canta anche sotto la pioggia."],
["Cos’è la Lapa?","Il quartiere della notte carioca, sotto gli Arcos. Negli ultimi anni è tornato a essere il punto d’incontro di chi vuole ballare, ascoltare musica dal vivo e fare tardi. Qui si cammina con la musica che esce dalle porte, Pierpaolo."],
["Cosa sono gli Arcos da Lapa?","L’acquedotto del Settecento, inaugurato nel 1750, con quarantadue archi bianchi. Di sera li illuminano e sembrano un teatro. Sopra ci passa il tram giallo di Santa Teresa: pare un giocattolo."],
["Dove è nato il samba?","Nei quartieri dove vivevano i discendenti degli africani, intorno al porto, in una zona che chiamano Pequena África: Saúde, Gamboa e Santo Cristo. Fu l’artista Heitor dos Prazeres a darle quel nome. La Pedra do Sal è considerata una delle culle del samba urbano di Rio."],
["Cos’è la Pedra do Sal?","Una roccia dove gli scaricatori mettevano il sale e dove si riunivano a parlare e a suonare. Ogni lunedì sera, e anche il venerdì, c’è una roda de samba che nei giorni di festa riunisce migliaia di persone. Lì vicino sono nati anche i primi terreiros di candomblé della città: rispetto, sempre."],
["Chi era Tia Ciata?","Una mãe de santo e quituteira, cioè una donna di fede e di cucina, la cui casa fu fondamentale per il samba carioca. Alle sue feste andavano musicisti come Pixinguinha, Donga e João da Baiana. Il samba è passato anche dalla sua cucina, mermão."],
["Cos’è il Cais do Valongo?","Il luogo dove, nel Settecento e nell’Ottocento, sbarcarono moltissime persone africane rese schiave: fu il porto principale delle Americhe. È stato ritrovato negli scavi del 2011, e dal 2017 è Patrimonio Mondiale dell’UNESCO. Si visita in silenzio: da lì viene tanta della nostra storia e della nostra musica."],
["Che strumenti si suonano?","Cavaquinho, pandeiro, tamborim, violão e surdo: una roda ha bisogno di tutti. Si siedono in cerchio, intorno a un tavolo, e il pubblico canta insieme. Il primo che arriva propone il brano, ma poi lo decidono tutti."],
["Che differenza c’è fra samba e bossa nova?","Il samba è più antico e nasce nei quartieri popolari; la bossa nova nasce negli anni Cinquanta e Sessanta, con Tom Jobim, Vinicius de Moraes e João Gilberto. La bossa nova è più sussurrata. Le amo tutte e due: la seconda mi culla, la prima mi fa alzare."],
["Cos’è il Sambódromo?","Il tempio del Carnevale: un’avenida con gradinate ai lati, disegnata da Oscar Niemeyer e finita nel 1984. Le scuole di samba sfilano qui con carri e ballerini. Nel 2016, per le Olimpiadi, ci hanno fatto anche il tiro con l’arco."],
["Com’è il Carnevale?","Un’esplosione: musica, costumi e mesi di preparazione. Le scuole di samba lavorano tutto l’anno per quella sfilata. Io lo vivo dalla parte dei musicisti: una sfilata vale mesi di prove."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e non uscire dalla Lapa senza aver cantato qualcosa: anche stonato, va bene. Il samba non chiede il biglietto, chiede solo di esserci. Una saideira, l’ultimo bicchiere, la facciamo la prossima volta: valeu e boa noite!"]
],
rio_carol:[
["Chi sei e che fai?","Carol, ventinove anni, guida del Maracanã. Racconto lo stadio ai visitatori e, nel tempo libero, lo vivo da tifosa del Fluminense. Come dice mia nonna, \"torcedora\" si nasce, non si diventa."],
["Che significa \"torcedora\"?","Tifosa, ma in versione brasiliana: la \"torcida\" è tutta la tifoseria insieme, con bandiere, tamburi e canti. Si vive la partita con tutto il corpo, non da seduti. Qui non si guarda e basta: si canta, si soffre e si abbraccia lo sconosciuto accanto."],
["Come si chiama davvero lo stadio?","Estádio Jornalista Mário Filho, dal 1966, in onore del giornalista che sostenne la costruzione. Maracanã è il nome del quartiere, e per tutti è il nostro Maraca. Mário Filho era il fratello dello scrittore Nelson Rodrigues, se ti interessa."],
["Quando è stato costruito?","Per il Mondiale del 1950, e fu inaugurato il 16 giugno di quell’anno. Aveva posto per circa duecentomila persone: il più grande stadio del mondo. La prima partita fu fra le selezioni di Rio e di San Paolo, con il primo gol di Didi."],
["Cos’è il Maracanazo?","La finale del Mondiale del 16 luglio 1950: l’Uruguay batté il Brasile 2-1 davanti a quasi duecentomila persone. Fu un dolore nazionale: lo stadio rimase in silenzio. Ne parliamo con rispetto, Pierpaolo: una ferita che il tempo ha curato, ma non cancellato."],
["Chi è Pelé al Maracanã?","Qui debuttò con la Seleção nel 1957, a sedici anni. Il 19 novembre 1969 segnò su rigore il suo millesimo gol, in Santos–Vasco. All’ingresso c’è una targa che lo ricorda e, si dice, nel museo è custodito proprio il pallone di quel gol."],
["Com’è stato rinnovato?","Fra il 2010 e il 2013, per la Confederations Cup e il Mondiale del 2014. Per sicurezza e comfort la capienza è scesa a circa settantottomila posti. La finale della Confederations Cup 2013 fu Brasile–Spagna, e vinse il Brasile: una serata da brividi."],
["Quali eventi ha ospitato?","Due finali mondiali, quella del 1950 e quella del 2014, Germania–Argentina, e le cerimonie di apertura e di chiusura delle Olimpiadi del 2016, oltre alla finale olimpica di calcio. Si prepara anche a ospitare la finale del Mondiale femminile del 2027. Il Maraca non va mai in pensione."],
["Qual è la notte che ricordi di più?","Il 4 novembre 2023: il Fluminense, la mia squadra, batté il Boca Juniors 2-1 ai supplementari nella finale della Libertadores. Gol di Cano e di John Kennedy: il primo titolo continentale del club. Ho pianto, riso e cantato insieme, fra quasi settantamila persone."],
["Chi gioca qui?","Flamengo, Fluminense e Vasco, oltre alla nazionale. Il derby Fla-Flu è un’istituzione: la città si divide in due, ma poi tutti tornano amici. Io, ovviamente, tifo verde, bianco e granata, ma rispetto tutti... quasi."],
["Cosa mangiano i tifosi?","Birra gelata e spiedini alla griglia, venduti dagli ambulanti fuori dallo stadio. Prima della partita si mangia in piedi, fra bandiere e tamburi. Non cercare l’eleganza, Pierpaolo: cerca il sapore e il rumore."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, che il tuo tempo è questo: in fondo al tunnel c’è una luce, e non è il fischio finale. Segui il rumore della folla e non avere paura: il Maraca ti porta dove deve. Boa sorte, e grida forte!"]
]
};
Object.assign(TOPX,TOPX_RIO);
})();
