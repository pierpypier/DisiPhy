/* ---------- ALESSANDRO MAGNO · Da Pella a Babilonia (Macedonia, Grecia, Asia Minore, Tiro, Egitto, Gaugamela, Persepoli, India, Susa, Babilonia) ---------- */
/* Un'intera giornata da sinistra a destra, e un tempo che si piega (tredici anni di storia in una sola giornata, dal 356 al 323 a.C.): alba rosata in Macedonia con l'Olimpo innevato,
   primo mattino in Grecia, mattina in Asia Minore, tarda mattina sul mare di Tiro e mezzogiorno in Egitto, primo pomeriggio nella piana di Gaugamela e a Babilonia,
   pomeriggio dorato a Persepoli e sull'Hindu Kush, tardo pomeriggio piovoso in India, sera e notte stellata a Susa e a Babilonia: in fondo il carro funebre d'oro, con il varco al centro.
   Gli oggetti (nomi che iniziano per "alx") sono definiti qui, in questo stesso file, e non toccano elementi.js: del nucleo si usano solo PR._av (primitive) e fig() di disegno.js,
   piu' qualche disegno gia' esistente (PR._gr, PR._ms, PR._fe). Tono sobrio e rispettoso per i temi dolorosi (guerre, assedi, la morte di Clito, l'incendio di Persepoli, la morte di Efestione e di Alessandro);
   tradizioni e questioni discusse restano con "si racconta" / "si dice" / "secondo gli antichi". */
(function(){
const GT=372;
const A=PR._av,rect=A.rect,poly=A.poly,dot=A.dot,el=A.el,ar=A.ar,txt=A.txt,glow=A.glow,cl=A.cl,tn=A.tn;
const G=PR._gr,MS=PR._ms,FE=PR._fe;
const NZ=[6,6,6,6,6,6,6,6],ZW=NZ.map(n=>n*480+180);const Z=[0];ZW.forEach(w=>Z.push(Z[Z.length-1]+w));const W1=Z[8];
const LX=[];NZ.forEach((n,z)=>{for(let j=0;j<n;j++)LX.push(Z[z]+380+j*480)});LX[LX.length-1]=W1-130;
const zn=xs=>{let z=1;while(z<8&&xs>=Z[z])z++;return z};
const md=(i,n)=>((i%n)+n)%n;
const ln=(g,c,w,p)=>{g.strokeStyle=tn(c);g.lineWidth=w;g.beginPath();g.moveTo(p[0],p[1]);for(let i=2;i<p.length;i+=2)g.lineTo(p[i],p[i+1]);g.stroke()};
const hx=c=>{let h=c.slice(1);if(h.length==3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]};
const mixs=(a,b,u)=>{const f=s=>s.charAt(0)=='#'?hx(s):s.match(/\d+/g).map(Number);const p=f(a),q=f(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*u)+','+Math.round(p[1]+(q[1]-p[1])*u)+','+Math.round(p[2]+(q[2]-p[2])*u)+')'};
/* ---- luce: alba, giorno pieno, polvere dorata, pioggia dell'India, tramonto di Susa, notte di Babilonia ---- */
const NF=[[0,.3],[800,.05],[Z[1]+300,0],[Z[5]+ZW[5]*.6,0],[Z[6]+ZW[6]*.5,.08],[Z[7]-200,.3],[Z[7]+500,.6],[Z[7]+1400,.78],[W1-900,.8],[W1,.74]];
const nf=wx=>{if(wx<=NF[0][0])return NF[0][1];for(let i=1;i<NF.length;i++)if(wx<=NF[i][0]){const a=NF[i-1],b=NF[i];return a[1]+(b[1]-a[1])*(wx-a[0])/(b[0]-a[0])}return NF[NF.length-1][1]};
const AL=f=>(g,x,y,t,a)=>{A.setDK(nf(x+AVCAM));f(g,x,y,t,a)};
const SKY=[[0,['#5a5a88','#e8a4a0','#ffd8a8']],[Z[1]-300,['#6a98d0','#b4d2e8','#f6ecd2']],[Z[1]+600,['#4a8ad2','#98c8ec','#f2f2e6']],[Z[3]-200,['#3a86d8','#8ec8f2','#fff0d4']],[Z[3]+1500,['#3a90e0','#a0d4f4','#ffeccc']],[Z[4]+200,['#7a9cc0','#e4d2a4','#f8dc9c']],[Z[5]+300,['#5a88c8','#e8c8a0','#ffd896']],[Z[6]+200,['#6a7886','#a0aca8','#d8c8a0']],[Z[7]-350,['#9a4a78','#ee8a6a','#ffc080']],[Z[7]+600,['#0a0e2a','#161c4a','#2a2a60']],[W1,['#0a0e2a','#18204e','#3a2a62']]];
function skyAt(xs){let i=0;while(i<SKY.length-2&&xs>SKY[i+1][0])i++;const a=SKY[i],b=SKY[i+1],u=cl((xs-a[0])/(b[0]-a[0]),0,1);return[0,1,2].map(k=>mixs(a[1][k],b[1][k],u))}
/* ---- palette ---- */
const PIE='#d8cfb8',PIE2='#b8ae94',MAR='#efe8d8',MAR2='#cfc6b0',TER='#c8a874',TEG='#b8603a',LEG='#6a4a2a',VER='#4a7a38',VER2='#2e5a30',GLD='#e0b84a',PUR='#7a2a6a',RED='#b8302a',BLU='#2a5aa8',LAP='#2a6ab8',MUD='#c8a070',MUD2='#a88050',ROC='#8a7a68',SKN=['#e0b090','#d8a67e','#c89870','#b88458','#c08a60'];
/* piccoli disegni riusabili */
const nube=(g,x,y,s,c)=>{el(g,c,x,y,34*s,6*s);el(g,c,x-18*s,y+2*s,22*s,5*s);el(g,c,x+20*s,y+2*s,24*s,5*s)};
const fumo=(g,x,y,t,c,n)=>{for(let i=0;i<(n||5);i++){const u=((t*.35+i*.2)%1);g.globalAlpha=.5*(1-u);el(g,c||'#d8d4cc',x+Math.sin(t+i*2)*8*u+u*10,y-u*90,5+u*13,4+u*9)}g.globalAlpha=1};
const fuoco=(g,x,y,t,s)=>{s=s||1;glow(g,x,y-12*s,60*s,'255,170,70',.55+.1*Math.sin(t*9));for(let i=0;i<3;i++){const h=(20+8*Math.sin(t*8+i*2))*s;poly(g,i==1?'#ffd24a':'#e8702a',[[x-9*s+i*8*s,y],[x-4*s+i*8*s,y-h],[x+i*8*s,y-h*.4],[x+5*s+i*8*s,y-h*.8],[x+9*s+i*8*s,y]])}ln(g,'#4a2e1a',4*s,[x-14*s,y+2,x+14*s,y-1])};
const tri=(g,c,x,y,w,h)=>poly(g,c,[[x-w/2,y],[x,y-h],[x+w/2,y]]);
/* persona (usa fig di disegno.js): i colori passano da tn per scurire di sera */
const P=(g,x,y,t,o)=>{o=Object.assign({f:1,s:.7,skin:SKN[1],hair:'#2a1a10',top:'#efe8d4',bot:'#efe8d4'},o);o.skin=tn(o.skin);o.hair=tn(o.hair);o.top=tn(o.top);o.bot=tn(o.bot);fig(g,x,y,t,o)};
/* acqua: banda con onde */
const acqua=(g,x,y,w,h,t,c1,c2)=>{const gr=g.createLinearGradient(0,y-h,0,y);gr.addColorStop(0,tn(c1));gr.addColorStop(1,tn(c2));g.fillStyle=gr;g.fillRect(x-w/2,y-h,w,h);for(let q=0;q<Math.floor(w/34);q++){const wx=x-w/2+q*34+((t*10+q*13)%30),wy=y-h+8+(q*7)%Math.max(8,h-10);el(g,'rgba(255,255,255,.35)',wx,wy,9,1.5)}};
/* ===================== testi: 48 tappe (descrizione breve + "Cerca: …") ===================== */
const LKTXT=[
/* 1 · Macedonia, alba */
"Macedonia, 356 a.C.: pianure verdi, pascoli per i cavalli, boschi di quercia e, all’orizzonte, l’Olimpo innevato, la casa degli dèi. I Macedoni parlano un greco tutto loro, vivono di pastorizia, campi e guerra, e per i Greci del sud sono un po’ cugini di campagna. Cerca: l’Olimpo con la neve, i pastori con le pecore, le querce, i muretti di sassi.",
"Pella è la capitale: una città nuova e ordinata, voluta dal re Archelao intorno al 400 a.C., con strade ad angolo retto e case a cortile decorate con mosaici di ciottoli. Qui, nel luglio del 356, nasce Alessandro, figlio del re Filippo II e della principessa Olimpiade dell’Epiro. Cerca: le case con il cortile, i mosaici di ciottoli bianchi e neri, il palazzo sulla collina.",
"Si racconta che un mercante porti a Filippo un cavallo nero bellissimo e indomabile, Bucefalo, che costa tredici talenti. Nessuno riesce a montarlo, finché Alessandro, ragazzino, nota che ha paura della propria ombra: lo gira verso il sole e lo cavalca. Filippo, commosso, gli dice di cercarsi un regno più grande, perché la Macedonia non gli basta. Cerca: il cavallo nero con la stella bianca in fronte, l’ombra lunga a terra, il ragazzo con la mano sul collo.",
"Nel 343 Filippo chiama alla corte il filosofo Aristotele e gli affida il figlio tredicenne. La scuola è a Mieza, vicino a un santuario delle Ninfe, fra grotte e panche di pietra: con Alessandro studiano altri ragazzi nobili, come Tolomeo, Cassandro e, probabilmente, Efestione. Cerca: le panche di pietra a semicerchio, la grotta delle Ninfe, i rotoli di papiro, i platani.",
"Filippo ha trasformato l’esercito: i fanti, in file fitte, portano la sarissa, una lancia lunga cinque o sei metri tenuta a due mani; le punte delle prime file sporgono davanti a tutti, come un riccio di ferro che avanza. La cavalleria dei Compagni, intanto, dà il colpo finale. Cerca: le lance lunghissime, i piccoli scudi appesi al collo, i cappelli di feltro, i mantelli rossi.",
"Estate del 336, a Egee, l’antica capitale: durante le nozze della figlia, Filippo entra nel teatro e una guardia del corpo, Pausania, lo uccide con un pugnale. Alessandro ha vent’anni e viene acclamato re. Nel 1977 a Vergina, il sito di Egee, gli archeologi hanno trovato tombe reali piene d’oro: una, forse, è quella di Filippo. Cerca: il teatro con le gradinate, le corone d’oro, il tumulo con la tomba, le statue degli dèi in corteo.",
/* 2 · Grecia, primo mattino */
"Nel 338, a Cheronea, in Beozia, Filippo affronta Atene e Tebe. Alessandro, diciottenne, guida la cavalleria e carica sul fianco il Battaglione Sacro di Tebe, trecento uomini scelti che combattono a coppie. Dopo questa vittoria le città greche perdono la loro indipendenza. Cerca: il leone di pietra sulla pianura, il tumulo dei caduti, le lance in fila, la cavalleria che carica.",
"Nel 337 a Corinto i Greci formano una lega con Filippo; dopo di lui, Alessandro ne diventa capo. Si racconta che vada a trovare il filosofo Diogene, che vive in una grande giara e prende il sole. “Chiedimi quel che vuoi”, dice il re. “Scostati: mi fai ombra.” Alessandro, a quanto si dice, ride e commenta che, se non fosse Alessandro, vorrebbe essere Diogene. Cerca: la grande giara di terracotta, il bastone e la lanterna, la rocca di Acrocorinto, i due mari.",
"Prima di partire Alessandro va a Delfi a consultare l’oracolo, ma è un giorno in cui la Pizia non può profetizzare. Lui la trascina per un braccio verso il tempio; lei, esasperata, esclama che è invincibile. Per Alessandro basta: è la risposta che voleva. Cerca: il tempio di Apollo, il tripode, i rami d’alloro, la fonte Castalia, le rocce del Parnaso.",
"Nel 335, mentre Alessandro è lontano, Tebe si ribella. Lui arriva in fretta, la assedia e la prende: la città viene distrutta, migliaia di abitanti vengono uccisi o venduti come schiavi, e solo la casa del poeta Pindaro è risparmiata. È una pagina dura, e le altre città greche si affrettano a mostrarsi leali. Cerca: le mura abbattute, le case in rovina, una sola casa intatta, le colonne spezzate.",
"Primavera del 334: lasciato il governo della Macedonia ad Antipatro, Alessandro parte con più di trentamila uomini fra fanti e cavalieri. Prima di salpare distribuisce terre e rendite agli amici; Perdicca gli chiede che cosa tenga per sé. “La speranza”, risponde. Cerca: i carri dei bagagli, le lance in colonna, le navi sulla spiaggia, i sacrifici sulla riva.",
"Dall’Ellesponto, lo stretto dei Dardanelli, Alessandro passa in Asia. Quando la nave è vicina alla riva, scaglia una lancia sulla spiaggia: è il segno che considera l’Asia una terra “conquistata con la lancia”, un dono degli dèi. Poi salta a terra per primo, in armi. Cerca: la lancia piantata nella sabbia, lo scudo, le navi con i remi, il vento sullo stretto.",
/* 3 · Asia Minore, mattina */
"A Troia, nel 334, Alessandro visita le tombe degli eroi dell’Iliade: corre nudo intorno alla tomba di Achille, come si usa, e la incorona di fiori; Efestione fa lo stesso con quella di Patroclo. Dormiva, si racconta, con l’Iliade e un pugnale sotto il cuscino. Cerca: il tumulo con la corona di fiori, le mura di Ilio, il tempio di Atena, le armi antiche appese.",
"Maggio del 334: sulla riva del fiume Granico i governatori persiani aspettano. Alessandro attraversa la corrente a cavallo, in prima fila, con l’elmo dal pennacchio bianco; nella mischia un nemico sta per colpirlo alle spalle, ma Clito il Nero lo salva. Dopo la vittoria manda trecento armature persiane ad Atene, in dono alla dea Atena. Cerca: il fiume dalle rive scoscese, il pennacchio bianco, i cavalli in acqua, gli scudi lucidi.",
"A Efeso, città greca liberata, Alessandro offre di pagare la ricostruzione del tempio di Artemide, una delle sette meraviglie, ma gli Efesini, con diplomazia, rifiutano: non sta bene che un dio faccia doni ad altri dèi. Il pittore Apelle gli fa un ritratto con il fulmine in mano. Cerca: le grandi colonne del tempio, il pittore con i pennelli, il ritratto con il fulmine, le statue di Artemide.",
"Primavera del 333, a Gordio, in Frigia: nel tempio di Zeus c’è un carro legato con un nodo di corteccia di corniolo così intricato che nessuno riesce a scioglierlo. Un oracolo dice che chi ci riuscirà dominerà l’Asia. Alessandro, secondo la tradizione, lo taglia con un colpo di spada; secondo altri lo scioglie sfilando il cavicchio. Cerca: il carro antico, il nodo di corteccia, la spada, la folla che guarda.",
"Estate del 333, a Tarso: Alessandro si tuffa nelle acque gelide del fiume Cidno, sudato, e si ammala di febbre alta. Il medico Filippo gli prepara una medicina; nello stesso momento arriva una lettera di Parmenione che accusa il medico di volerlo avvelenare. Alessandro porge la lettera a Filippo e beve: si riprende. Cerca: la tenda del malato, la coppa, il foglio con il sigillo, il fiume fra i monti.",
"Novembre del 333, a Isso, fra il mare e le montagne: Dario III arriva con un grande esercito, ma nello spazio stretto la sua superiorità numerica conta poco. Quando la battaglia si mette male, fugge, lasciando la tenda, il carro e la famiglia. Alessandro tratta la madre, la moglie e le figlie del re con rispetto, riconoscendo loro gli onori da regine. Cerca: la tenda regale dorata, il carro dalle ruote ornate, il mare sul fianco, le donne velate.",
/* 4 · Tiro ed Egitto, tarda mattina e mezzogiorno */
"Tiro, 332: una città-isola a circa ottocento metri dalla costa, con mura alte oltre quaranta metri sul lato verso la terraferma e due porti. Alessandro vuole offrire un sacrificio nel tempio di Melqart, che i Greci chiamano Eracle; i Tiri rispondono che può farlo nella città vecchia, sulla terraferma. È una risposta che costa cara. Cerca: l’isola con le mura, le navi nel porto, i templi, i mucchi di conchiglie di porpora.",
"Per raggiungere l’isola Alessandro fa costruire un molo, con i pali e le pietre della vecchia Tiro; poi, con le navi di Cipro e di Sidone, assalta le mura anche dal mare. Dopo sette mesi, nel luglio del 332, la città cade. Con le sabbie accumulate attorno al molo, l’isola è diventata una penisola, e lo è ancora oggi. Cerca: il molo di pietra, le torri d’assedio, le navi con gli arieti, il mare scintillante.",
"Alla fine del 332 Alessandro entra in Egitto senza combattere: i Persiani, poco amati, gli aprono le porte. A Menfi sacrifica agli dèi egizi, compreso il toro Api, e organizza gare sportive e musicali alla maniera greca. Gli Egizi lo accolgono come un liberatore; se sia stato anche incoronato faraone, gli studiosi non sono d’accordo. Cerca: il tempio di Ptah, il toro sacro con il disco sulla fronte, i sacerdoti con il capo rasato, le sfingi.",
"Nell’inverno del 331 Alessandro attraversa il deserto per raggiungere l’oasi di Siwa, dove c’è l’oracolo di Ammone, il dio che i Greci identificano con Zeus. Lungo il cammino, si racconta, una pioggia salva gli assetati e dei corvi (o dei serpenti, secondo altri) indicano la strada. Il sacerdote lo saluta come figlio del dio; che cosa si siano detti in segreto, nessuno lo sa. Cerca: le palme, il tempio sulla roccia, il lago salato, le dune dorate.",
"Alessandro sceglie un luogo tra il mare e il lago Mareotide per fondare una città. Gli operai, non avendo gesso, segnano il perimetro con la farina d’orzo; uno stormo di uccelli arriva a beccarla. Gli indovini lo leggono come un buon segno: la città darà da mangiare a tutto il mondo. Cerca: le linee di farina sul terreno, gli uccelli, i picchetti, l’isola di Faro in lontananza.",
"Il tempo si piega: pochi decenni dopo Alessandria è già la capitale dei Tolomei, con il Faro (finito intorno al 280 a.C.), il Museo e la Grande Biblioteca. In un mausoleo chiamato Soma verrà portato il corpo di Alessandro. Cerca: il Faro a tre piani con il fuoco in cima, la biblioteca con i rotoli, la nave carica di grano, il sepolcro d’oro.",
/* 5 · Gaugamela e Babilonia, primo pomeriggio */
"Il primo ottobre del 331, nella piana di Gaugamela, nell’attuale Iraq, Dario schiera un esercito enorme su un terreno spianato apposta per i carri. Alessandro, con meno uomini, attacca in obliquo, apre un varco nello schieramento e punta dritto sul re. Dario fugge: l’impero persiano è finito, anche se lui è ancora vivo. Cerca: la piana aperta, il polverone, la cavalleria a cuneo, il carro del re.",
"Pochi giorni prima, il 20 settembre, c’era stata un’eclissi di Luna: i Macedoni si agitano, ma l’indovino Aristandro la spiega come un buon presagio per loro. Per i Babilonesi, che la registrano con cura, è un segno da interpretare per il re. Cerca: la Luna rossastra nell’ombra, l’indovino con le braccia alzate, i soldati con gli occhi al cielo, le torce.",
"I carri falcati di Dario hanno lame di ferro sulle ruote e sull’asse, pensate per aprire un varco fra i soldati nemici. A Gaugamela non funzionano: Alessandro fa aprire i ranghi, e i lanciatori di giavellotto colpiscono gli aurighi. Un’arma, senza un piano, non basta. Cerca: le lame sulle ruote, i cavalli bardati, i giavellotti, i ranghi aperti.",
"Ottobre del 331, Babilonia: l’esercito di Alessandro entra in città fra petali di fiori e fumo d’incenso sugli altari d’argento. Alessandro ordina di ricostruire i templi rovinati, fra cui l’Esagila, quello di Marduk, e lascia al governo un satrapo persiano, Mazeo. Cerca: la Porta di Ishtar, i mattoni blu con tori e draghi, i petali, la via delle processioni.",
"Gli scribi babilonesi registrano ogni notte il cielo, il tempo e i prezzi su tavolette d’argilla: sono i Diari Astronomici. In una di queste, per il 331, c’è la battaglia di Gaugamela, con il re di Persia che abbandona il campo e l’esercito in rotta. È una cronaca di due millenni e mezzo fa, scritta con un calamo di canna. Cerca: le tavolette, il calamo, le tabelle di numeri, l’osservatorio sul tetto.",
"Nel dicembre del 331 Alessandro prende Susa e il tesoro dei re persiani: decine di migliaia di talenti d’argento. Si siede sul trono di Dario, troppo alto per i suoi piedi, e un paggio gli porta uno sgabello. Demarato di Corinto, un vecchio amico di famiglia, piange: i Greci morti prima non hanno visto quel giorno. Cerca: il trono dorato, lo sgabello, i forzieri di monete, i leoni di mattoni smaltati.",
/* 6 · Persepoli e Battriana, pomeriggio */
"Gennaio del 330: Persepoli, la capitale delle cerimonie dei re persiani, apre le porte. Sulla grande terrazza ci sono la sala delle cento colonne, la scalinata con i rilievi dei popoli che portano doni, il tesoro. Alessandro ne fa trasportare via un bottino enorme con migliaia di muli e cammelli. Cerca: la grande scalinata, i capitelli a forma di toro, i rilievi dei doni, i muli carichi.",
"In primavera, dopo un banchetto, il palazzo di Serse brucia. Secondo gli storici antichi fu una vendetta per i templi greci incendiati da Serse un secolo e mezzo prima, spinta da Taide, ospite della festa; Parmenione era contrario. Alcuni studiosi pensano a una decisione politica. I resti anneriti sono ancora lì. Cerca: le travi di cedro in fiamme, le colonne annerite, le torce, i soldati che guardano in silenzio.",
"Luglio del 330: Dario, in fuga verso oriente, viene catturato dal satrapo Besso e lasciato ferito su un carro. Alessandro arriva troppo tardi: lo trova morto, lo copre con il proprio mantello e lo manda a Persepoli, a essere sepolto con onori regali accanto ai suoi antenati. Besso verrà punito. Cerca: il carro abbandonato, il mantello purpureo, la corona caduta, il deserto roccioso.",
"Primavera del 329: l’esercito attraversa le montagne dell’Hindu Kush, con la neve ancora alta e la tormenta, con poca legna e poco cibo: i soldati si proteggono gli occhi dal riverbero e, a volte, mangiano la carne dei muli. Lungo la strada Alessandro fonda nuove città chiamate Alessandria; una, forse, è l’antenata di Kandahar, il cui nome ricorda ancora Iskandar. Cerca: i picchi con la neve, i soldati incappucciati, i muli, il fuoco di fortuna.",
"Autunno del 328, a Marakanda, oggi Samarcanda: durante un banchetto, Alessandro, ubriaco e irritato da un discorso offensivo, uccide con una lancia Clito il Nero, l’amico che gli aveva salvato la vita al Granico. Poi, distrutto, resta tre giorni senza mangiare. È uno dei momenti più cupi della sua vita. Cerca: la sala del banchetto, le coppe di vino, la lancia a terra, il tavolo rovesciato.",
"Primavera del 327: sulla Roccia di Sogdiana, una fortezza su una parete a picco, un nobile, Ossiarte, ha messo al sicuro la famiglia. Trecento volontari macedoni la scalano di notte con chiodi di ferro e corde. Fra i prigionieri c’è la figlia di Ossiarte, Rossane, che Alessandro sposa poco dopo; si racconta con il rito del pane tagliato con la spada. Cerca: la parete a picco, le corde con i chiodi, la fanciulla con il velo, il pane diviso.",
/* 7 · India, tardo pomeriggio */
"Primavera del 326: passato l’Indo, Alessandro viene accolto a Taxila dal re Taxile, con elefanti, doni e tori. Qui incontra gli asceti indiani, i gimnosofisti, che vivono quasi senza nulla e gli parlano di libertà; uno di loro, Calano, lo seguirà fino in Persia. Cerca: gli elefanti ornati, i saggi seduti sotto un albero, i tessuti di cotone, i tori bianchi.",
"Primavera inoltrata del 326: sulle rive dell’Idaspe, oggi Jhelum, il re Poro aspetta con gli elefanti dall’altra parte, e il fiume è gonfio per le piogge. Alessandro finge più volte di passare, poi, in una notte di tempesta, attraversa a monte con parte dell’esercito, su zattere e otri gonfiati. Cerca: il fiume in piena, la pioggia, le zattere, i fuochi sull’altra sponda.",
"La battaglia è durissima: gli elefanti spaventano i cavalli, ma i Macedoni li circondano, e gli animali, impauriti, travolgono i propri. Poro, ferito, resta alto e fiero. Alessandro gli chiede come vuole essere trattato: “Da re”, risponde, e Alessandro, colpito, gli lascia il regno. Cerca: gli elefanti con le torri, il re in cima, gli arcieri indiani, la ferita a una spalla.",
"Dopo la battaglia muore Bucefalo, il cavallo di una vita: era ormai anziano, forse stremato dalla fatica e dalle ferite. Alessandro lo seppellisce con onori e fonda vicino alla tomba una città, Bucefala, sulle rive dell’Idaspe. Cerca: il cavallo nero sdraiato, la tomba con la pietra, la corona di fiori, i soldati a capo scoperto.",
"Autunno del 326, sul fiume Ifasi (oggi Beas): i soldati sono stremati da otto anni di marcia, pioggia continua, malattie e ferite. Quando Alessandro vuole proseguire, rifiutano, e il generale Ceno parla a nome di tutti. Per tre giorni il re resta chiuso nella tenda, poi cede: erige dodici altari e ordina il ritorno. Cerca: i dodici grandi altari, la tenda chiusa, la pioggia, i soldati seduti a testa bassa.",
"Il ritorno è lungo: parte dell’esercito scende l’Indo su una flotta guidata da Nearco, fino all’Oceano, e il resto attraversa il deserto della Gedrosia, in un caldo terribile, con molti morti. È una delle prove più dure dell’intera spedizione. Cerca: le navi sul fiume, il delta, le dune, i soldati che camminano di notte.",
/* 8 · Susa e Babilonia, sera e notte */
"Primavera del 324, a Susa: Alessandro sposa Statira, figlia di Dario, e festeggia con lui un matrimonio di massa: ottanta ufficiali sposano donne persiane e circa diecimila soldati, già sposati con donne asiatiche, ricevono doni di nozze. È il suo modo di unire Macedoni e Persiani. Cerca: la grande tenda con cento divani, le torce, i veli colorati, i doni d’oro.",
"Estate del 324, a Opis, sul Tigri: Alessandro vuole congedare i veterani con un grosso premio, ma gli uomini si offendono e gridano di mandar via tutti. Lui li affronta, fa arrestare i capi, si chiude due giorni; poi, alla fine, la riconciliazione: un banchetto con migliaia di ospiti e una preghiera per la concordia. Cerca: le tavole lunghe, le coppe d’oro, i veterani con le cicatrici, le barche sul fiume.",
"Autunno del 324, a Ecbatana: Efestione, l’amico più caro di Alessandro, muore di febbre dopo un banchetto. Il re è distrutto: lo piange per giorni, fa tagliare le criniere ai cavalli e ordina una pira enorme a Babilonia. Per molti Greci, i due erano come Achille e Patroclo. Cerca: la pira decorata, i cavalli con la criniera tagliata, la corona di alloro, i soldati in lutto.",
"Primavera del 323, a Babilonia: Alessandro prepara una spedizione in Arabia. Una sera partecipa a un banchetto, poi a un altro; lo coglie una febbre alta che non scende. Nei giorni seguenti continua a dare ordini dal letto. Muore il 10 o l’11 giugno del 323, a quasi trentatré anni. Cerca: il letto del re, le coppe, la lampada accesa, il medico al capezzale.",
"Quando i soldati sentono che il re sta male, chiedono di vederlo. Passano a uno a uno davanti al letto, in silenzio; Alessandro, senza più voce, li saluta con un cenno degli occhi e della mano. A chi gli chiede a chi lasci il regno, risponde, si racconta, “al migliore”; l’anello con il sigillo lo dà a Perdicca. Cerca: la fila di soldati, la mano alzata, l’anello con il sigillo, i generali attorno al letto.",
"Per portare il corpo in Macedonia, i generali fanno costruire un carro funebre enorme, a forma di tempio d’oro, con colonne e un tetto di squame dorate, trainato da sessantaquattro muli. Tolomeo, però, lo intercetta in Siria e lo porta in Egitto: prima a Menfi, poi ad Alessandria, dove riposerà a lungo. Sotto il carro, l’impero continua. Cerca: le colonne d’oro, i muli con le campanelle, le lanterne, la porta aperta sulla luce."
];
const NAME={
al_aristotele:"Aristotele, il maestro di Mieza",
al_menandro:"Menandro, il falangista macedone",
al_alessandro:"Alessandro Magno, il re",
al_bodmelqart:"Bodmelqart, il tintore di porpora di Tiro",
al_dario:"Dario III, il Gran Re di Persia",
al_nabuzer:"Nabu-zer, lo scriba degli astri di Babilonia",
al_rossane:"Rossane, la figlia di Ossiarte",
al_chandra:"Chandra, il conduttore di elefanti del re Poro",
al_tolomeo:"Tolomeo, il generale"
};
const GREET={
al_aristotele:"Salve, Pierpaolo, e non calpestare le tavolette dei ragazzi: stiamo discutendo del bene supremo e c’è chi, intanto, discute di merenda. Sono Aristotele, di Stagira, e a Mieza ho un allievo che corre più veloce dei miei ragionamenti.",
al_menandro:"Salve, Pierpaolo, e occhio alla lancia: è lunga cinque metri e a girarmi di scatto ho già spettinato mezza compagnia. Sono Menandro, fante della falange, e ne ho viste e marciate abbastanza da raccontarti un bel po’.",
al_alessandro:"Salve, Pierpaolo, e perdona le mani sporche di corteccia: il nodo di Gordio non si scioglie da solo. Sono Alessandro, figlio di Filippo, e in questo posto strano ho la sensazione di sapere cose che non ho ancora fatto.",
al_bodmelqart:"Salve, Pierpaolo, e non farci caso se ti lacrimano gli occhi: è l’odore dei murici, ci si abitua in un paio di decenni. Sono Bodmelqart, tintore di porpora, e quello che ho sulle mani è il colore più caro del mondo.",
al_dario:"Salve, Pierpaolo, e inchinati con calma: nessuno ha mai avuto fretta davanti al Re dei re. Sono Dario, terzo di questo nome, e alla mia destra ho un esercito che riempie la pianura. Sulla sinistra ho un po’ di dubbi.",
al_nabuzer:"Salve, Pierpaolo, e abbassa la voce: sto contando le stelle e non vorrei perdere il conto. Sono Nabu-zer, scriba degli astri, e ogni notte scrivo su argilla tutto ciò che vedo in cielo, e anche il prezzo dell’orzo.",
al_rossane:"Salve, Pierpaolo, e non spaventarti per la neve: qui sulle montagne arriva anche d’estate. Sono Rossane, figlia di Ossiarte, e la mia casa è su una roccia a cui nessuno, dicono, potrebbe arrivare.",
al_chandra:"Salve, Pierpaolo, e non toccare la proboscide senza chiedere: la mia Moti ha il carattere di una regina. Sono Chandra, conduttore di elefanti, e viviamo insieme da quando lei aveva sei anni e io sedici.",
al_tolomeo:"Salve, Pierpaolo, e parla piano: nella stanza accanto c’è un re che sta male, e fuori c’è mezzo esercito che trattiene il fiato. Sono Tolomeo, figlio di Lago, uno dei Compagni del re, e prima o poi farò un po’ di cose per conto mio."
};
const WNAME="Alessandro Magno · Da Pella a Babilonia";
const INTRO="Alessandro Magno, dall’alba alla notte. Parti dalla Macedonia, dove un maestro e un ragazzo parlano di filosofia accanto a un cavallo nero; poi la Grecia, con il tempio di Delfi e la botte di Diogene, e l’Asia Minore, dove un nodo di corteccia aspetta di essere sciolto. A mezzogiorno Tiro, sul mare, e l’Egitto, con la prima Alessandria disegnata a farina d’orzo. Nel primo pomeriggio Gaugamela e Babilonia, poi le terrazze di Persepoli e le montagne dell’Hindu Kush; al tramonto l’India, con gli elefanti del re Poro nella pioggia. Quando scende la sera sei a Susa e a Babilonia: un re malato, un esercito che sfila in silenzio, un carro d’oro che parte nella notte. Il tempo qui si piega: re, generali, soldati, mercanti e scribi di tredici anni diversi ti vengono incontro.";
/* ===================== sezioni del paesaggio (11): zone, con la 4 e la 5 e la 6 divise a meta' ===================== */
const B=[0,Z[1],Z[2],Z[3],Z[3]+ZW[3]/2,Z[4],Z[4]+ZW[4]/2,Z[5],Z[5]+ZW[5]/2,Z[6],Z[7],W1];
const sec=xs=>{let i=0;while(i<10&&xs>=B[i+1])i++;return i};
const rainAt=xs=>cl((xs-Z[6]+200)/500,0,1)*cl((Z[7]-xs+100)/600,0,1)*(.5+.4*Math.sin(xs/380));
/* livello 0: cielo, sole, luna, stelle, nuvole, polvere, pioggia, nebbia dell'alba */
function layerSky(g,o,t){const cam=o/.02;AVCAM=cam;const xs=cam+240,p=skyAt(xs),gr=g.createLinearGradient(0,0,0,GT+4);
 gr.addColorStop(0,p[0]);gr.addColorStop(.62,p[1]);gr.addColorStop(1,p[2]);g.fillStyle=gr;g.fillRect(0,0,480,GT+4);
 const nt=cl((xs-(Z[7]-100))/1300,0,1);
 if(nt>0)for(let i=0;i<150;i++){const sx=hr(i*3)*480,sy=hr(i*7+1)*320,tw=.5+.5*Math.sin(t*2+i*1.7);dot(g,'rgba(255,252,235,'+(nt*(.35+.55*tw)*(sy<GT-50?1:.35))+')',sx,sy,.7+hr(i)*1.3)}
 const u=cl(xs/(Z[7]+300),0,1),sx=40+u*400,sy=330-Math.sin(u*Math.PI)*255;
 if(xs<Z[7]+600){const low=1-Math.sin(u*Math.PI),sg=g.createRadialGradient(sx,sy,6,sx,sy,250);sg.addColorStop(0,'rgba(255,'+Math.round(240-low*100)+','+Math.round(190-low*130)+',.8)');sg.addColorStop(.25,'rgba(255,'+Math.round(210-low*80)+',140,.35)');sg.addColorStop(1,'rgba(255,200,140,0)');g.fillStyle=sg;g.fillRect(0,0,480,GT+4);dot(g,'rgba(255,250,225,.95)',sx,sy,14)}
 const mu=cl((xs-(Z[7]+200))/1300,0,1);if(mu>0){const mx=350-mu*40,my=100-mu*10;dot(g,'rgba(255,248,215,'+.12*mu+')',mx,my,34);dot(g,'rgba(246,240,214,'+mu+')',mx,my,13);dot(g,'rgba(200,196,170,'+.5*mu+')',mx-4,my-3,3.4)}
 const cc=xs<Z[4]?'rgba(255,255,255,.55)':xs<Z[6]?'rgba(255,236,200,.4)':xs<Z[7]?'rgba(90,100,110,.55)':'rgba(255,170,150,.4)';
 each(o-((t*3)%340)*.02,340,1,(x,i,r)=>{if(r>.5)return;nube(g,x+r*100,40+r*60,.9+r*.7,cc)});
 const fo=cl(1-xs/2600,0,1)*.3;if(fo>.01){g.fillStyle='rgba(255,226,214,'+fo+')';g.fillRect(0,0,480,GT+4)}
 const du=cl((xs-Z[4]+200)/500,0,1)*cl((B[6]-xs+200)/600,0,1)*.28;if(du>.01){g.fillStyle='rgba(232,196,130,'+du+')';g.fillRect(0,0,480,GT+4)}
 const ra=rainAt(xs);if(ra>.02){g.fillStyle='rgba(70,82,92,'+(ra*.4)+')';g.fillRect(0,0,480,GT+4)}
 const wg=cl((xs-Z[6]-1200)/900,0,1)*cl((Z[7]+300-xs)/700,0,1)*.22;if(wg>.01){g.fillStyle='rgba(255,110,90,'+wg+')';g.fillRect(0,0,480,GT+4)}}
/* livello 1: orizzonte lontano per sezione */
function layerFar(g,o,t){const cam=o/.05,xs=cam+240,hz=300,night=nf(xs+60),dim=c=>mixs(mixs(c,'#d8e4ec',.2),'#262a5e',night*.72);
 const fx=wc=>240+wc*.05-o,env=(wc,sp)=>cl((sp*.62-Math.abs(xs-wc))/(sp*.25),0,1),sc=i=>(B[i]+B[i+1])/2,sw=i=>B[i+1]-B[i];
 const ridge=(sx,w,h,seed)=>{const pts=[];for(let q=0;q<=40;q++){const u=q/40,k=Math.pow(1-Math.abs(2*u-1),1.15),hh=h*k*(.78+.22*Math.sin(u*9+seed))+3*Math.sin(u*37+seed*2);pts.push([sx-w+u*2*w,hz+14-hh])}return pts};
 const mont=(sx,w,h,c,seed)=>{const pts=ridge(sx,w,h,seed);g.fillStyle=dim(c);g.beginPath();g.moveTo(sx-w,hz+34);pts.forEach(q=>g.lineTo(q[0],q[1]));g.lineTo(sx+w,hz+34);g.closePath();g.fill()};
 const neve=(sx,w,h,seed,c)=>{const pts=ridge(sx,w,h,seed);g.save();g.beginPath();g.moveTo(sx-w,hz+34);pts.forEach(q=>g.lineTo(q[0],q[1]));g.lineTo(sx+w,hz+34);g.closePath();g.clip();g.fillStyle=dim(c||'#f4f6fa');g.beginPath();g.moveTo(sx-w,hz-h-30);for(let q=0;q<=40;q++){const u=q/40;g.lineTo(sx-w+u*2*w,hz+14-h*(.6+.06*Math.sin(u*31+seed)+.05*Math.sin(u*13)))}g.lineTo(sx+w,hz-h-30);g.closePath();g.fill();g.fillStyle=dim('rgba(150,170,210,.35)');g.beginPath();g.moveTo(sx,hz-h-30);g.lineTo(sx+w,hz-h-30);g.lineTo(sx+w,hz+14-h*.5);g.lineTo(sx+w*.05,hz+14-h*.62);g.closePath();g.fill();g.restore()};
 const chioma=(sx,x0,x1,hh,c1,c2)=>{for(let q=0;q<(x1-x0)/14;q++){const bx=sx+x0+q*14,h2=hh*(.6+.4*hr(q*3));el(g,dim(q%2?c1:c2),bx,hz+8-h2*.3,12,h2*.5)}};
 const lights=(sx,x0,x1,n)=>{if(night>.2)for(let q=0;q<n;q++){const tx=sx+x0+(x1-x0)*q/(n-1);glow(g,tx,hz+8-hr(q)*10,10,'255,190,90',.6*Math.min(1,night+.1));dot(g,'rgba(255,225,150,.95)',tx,hz+8-hr(q)*10,1.2)}};
 const palmF=(bx,by,s)=>{rect(g,dim('#4a3a22'),bx-1,by-16*s,2,16*s);for(let k=-1;k<=1;k++)ln(g,dim('#3a6a30'),2,[bx,by-16*s,bx+k*8*s,by-12*s])};
 const zigF=(sx,w,h,c)=>{for(let i=0;i<4;i++){const wi=w*(1-i*.2);rect(g,dim(c),sx-wi/2,hz+14-(i+1)*h/4,wi,h/4)}rect(g,dim('#2a5aa8'),sx-w*.1,hz+14-h-6,w*.2,6)};
 const sea=(sx,w,y0,c1,c2)=>{rect(g,dim(c1),sx-w,hz+y0,2*w,34);rect(g,dim(c2),sx-w,hz+y0,2*w,4);for(let q=0;q<26;q++)el(g,'rgba(255,255,255,.35)',sx-w+q*(2*w/26)+((t*8+q*9)%30),hz+y0+8+(q*5)%22,10,1.4)};
 const LANDC=['#7c8c54','#a09266','#a89a5e','#d4c89c','#dcc78c','#c8b283','#c0a070','#988e82','#9a9890','#5e7236','#6a523a'];const land=(n,sx)=>rect(g,dim(LANDC[n]),sx-800,hz+12,1600,GT-hz-4);
 let a;
 a=env(sc(0),sw(0)*1.25);if(a>.02){g.globalAlpha=a;const sx=fx(sc(0));land(0,sx);mont(sx-380,400,70,'#7a9a6a',2.2);mont(sx+330,420,90,'#6a8a5a',5.1);mont(sx-30,360,170,'#8a8aa0',3.3);neve(sx-30,360,170,3.3);chioma(sx,-700,700,36,'#4a6a3a','#3a5a30');for(let q=0;q<5;q++)el(g,'rgba(255,226,214,.5)',sx-520+q*260,hz+16,150,8);g.globalAlpha=1}
 a=env(sc(1),sw(1)*1.25);if(a>.02){g.globalAlpha=a;const sx=fx(sc(1));land(1,sx);mont(sx-300,320,90,'#a8967a',1.7);mont(sx+240,380,130,'#9a8a72',6.2);mont(sx+20,260,60,'#b8a888',4.1);rect(g,dim('#3a80c0'),sx-700,hz+22,300,14);for(let q=0;q<5;q++){const bx=sx-660+q*52;poly(g,dim('#f4ecd8'),[[bx,hz+22],[bx+8,hz+8],[bx+8,hz+22]])}chioma(sx,-380,700,26,'#6a7a52','#586a44');rect(g,dim('#efe8d8'),sx+120,hz-4,34,14);tri(g,dim('#d8cfb8'),sx+137,hz-4,42,10);g.globalAlpha=1}
 a=env(sc(2),sw(2)*1.25);if(a>.02){g.globalAlpha=a;const sx=fx(sc(2));land(2,sx);mont(sx-320,360,100,'#a8946a',2.9);mont(sx+260,400,140,'#9a8660',7.3);neve(sx+260,400,140,7.3,'#e8e4dc');chioma(sx,-700,700,30,'#7a8a4a','#6a7a40');rect(g,dim('#4a8ab8'),sx-700,hz+20,1400,5);for(let q=0;q<9;q++)tri(g,dim('#efe8d6'),sx-540+q*120,hz+10,22,14);g.globalAlpha=1}
 a=env(sc(3),sw(3)*1.25);if(a>.02){g.globalAlpha=a;const sx=fx(sc(3));land(3,sx);mont(sx-300,360,120,'#7a8aa8',3.8);neve(sx-300,360,120,3.8,'#eef0f6');mont(sx+300,380,100,'#8a96ae',5.9);sea(sx,760,12,'#2a86c4','#7ad0e8');for(let q=0;q<8;q++){const bx=sx-600+q*150,by=hz+26;poly(g,dim('#f4ecd8'),[[bx,by],[bx+10,by-22],[bx+10,by]])}rect(g,dim('#d8cfb8'),sx-120,hz-6,240,22);for(let q=0;q<12;q++)rect(g,dim('#d8cfb8'),sx-120+q*20,hz-12,12,8);for(const tx of[-110,110,0])rect(g,dim('#cfc6b0'),sx+tx-10,hz-30,20,40);g.globalAlpha=1}
 a=env(sc(4),sw(4)*1.25);if(a>.02){g.globalAlpha=a;const sx=fx(sc(4));land(4,sx);rect(g,dim('#e4cc94'),sx-700,hz+10,1400,24);el(g,dim('#d8bc80'),sx-300,hz+10,260,22);el(g,dim('#e8d49c'),sx+250,hz+8,300,26);for(let q=0;q<3;q++)poly(g,dim(['#d8c488','#e0cc94','#d0bc80'][q]),[[sx-80+q*100,hz+14],[sx-30+q*100,hz-40+q*8],[sx+20+q*100,hz+14]]);rect(g,dim('#3a8ac0'),sx-700,hz+22,1400,5);for(let q=0;q<22;q++)palmF(sx-660+q*60,hz+22,.8+hr(q)*.4);g.globalAlpha=1}
 a=env(sc(5),sw(5)*1.25);if(a>.02){g.globalAlpha=a;const sx=fx(sc(5));land(5,sx);rect(g,dim('#cdb78a'),sx-700,hz+14,1400,22);mont(sx-300,360,46,'#a8946a',2.2);mont(sx+290,380,60,'#9a8660',4.7);for(let q=0;q<10;q++)el(g,'rgba(232,196,130,.45)',sx-560+q*130,hz+16-hr(q)*6,100,10);for(let q=0;q<14;q++){const bx=sx-500+q*70;tri(g,dim(['#efe0b8','#c8302a','#e8d8a0'][q%3]),bx,hz+14,16,12)}g.globalAlpha=1}
 a=env(sc(6),sw(6)*1.25);if(a>.02){g.globalAlpha=a;const sx=fx(sc(6));land(6,sx);rect(g,dim('#3a80b8'),sx-760,hz+20,1520,12);for(let q=0;q<26;q++)palmF(sx-700+q*54,hz+20,.9+hr(q)*.5);rect(g,dim('#c8a070'),sx-480,hz-2,200,18);for(let q=0;q<10;q++)rect(g,dim('#c8a070'),sx-480+q*20,hz-8,12,6);zigF(sx+80,150,104,'#b88a58');zigF(sx+380,90,60,'#c8a070');lights(sx,-460,460,22);g.globalAlpha=1}
 a=env(sc(7),sw(7)*1.25);if(a>.02){g.globalAlpha=a;const sx=fx(sc(7));land(7,sx);mont(sx-260,360,130,'#a8806a',1.9);mont(sx+280,420,170,'#9a7860',6.6);mont(sx,300,90,'#8a6a58',3.3);rect(g,dim('#d8cdb8'),sx-120,hz+4,240,12);for(let q=0;q<9;q++)rect(g,dim('#e8dfcc'),sx-100+q*24,hz-20,5,26);for(let q=0;q<8;q++)el(g,dim('#2e5030'),sx-420+q*110,hz+8,6,18);g.globalAlpha=1}
 a=env(sc(8),sw(8)*1.25);if(a>.02){g.globalAlpha=a;const sx=fx(sc(8));land(8,sx);mont(sx-340,380,170,'#8a90a8',4.4);neve(sx-340,380,170,4.4);mont(sx+260,440,220,'#7a82a0',7.7);neve(sx+260,440,220,7.7);mont(sx-30,320,120,'#9aa0b4',1.3);neve(sx-30,320,120,1.3);for(let q=0;q<22;q++)tri(g,dim('#2e4a38'),sx-640+q*58,hz+14,24,26+hr(q)*14);g.globalAlpha=1}
 a=env(sc(9),sw(9)*1.25);if(a>.02){g.globalAlpha=a;const sx=fx(sc(9));land(9,sx);mont(sx-300,360,80,'#5a7a5a',2.5);mont(sx+300,400,100,'#4a6a50',5.5);chioma(sx,-700,700,48,'#3a6a36','#2e5a2e');rect(g,dim('#8a7a4a'),sx-700,hz+22,1400,10);for(let q=0;q<7;q++)palmF(sx-600+q*190,hz+16,1.3);for(let q=0;q<4;q++){const bx=sx-300+q*200;el(g,dim('#6a6a74'),bx,hz+16,12,6);el(g,dim('#6a6a74'),bx+11,hz+13,6,5)}g.globalAlpha=1}
 a=env(sc(10),sw(10)*1.25);if(a>.02){g.globalAlpha=a;const sx=fx(sc(10));land(10,sx);rect(g,dim('#2a4a6a'),sx-760,hz+20,1520,12);rect(g,dim('#b89a6a'),sx-760,hz+4,1520,16);for(let q=0;q<50;q++)rect(g,dim('#b89a6a'),sx-750+q*30,hz-1,16,6);zigF(sx-120,170,120,'#a8805a');zigF(sx+360,100,70,'#b89066');for(let q=0;q<22;q++)palmF(sx-700+q*68,hz+20,.9+hr(q)*.4);for(let q=0;q<14;q++){const bx=sx-420+q*60;rect(g,dim('#c8a878'),bx,hz+6,18,10)}lights(sx,-600,600,34);glow(g,sx-120,hz-70,160,'255,200,140',.4*night);g.globalAlpha=1}}
/* ===================== scenari: oggetti disegnati con base in (0,0), scalati per il livello intermedio e per la strada ===================== */
const palma=(g,s,t)=>{s=s||1;ln(g,'#5a4426',5*s,[0,0,3*s,-34*s,0,-64*s]);for(let k=0;k<7;k++){const a=-1.5+k*.5+Math.sin(t*1.3+k)*.04;ln(g,k%2?'#3a7a30':'#4a8a38',3.4*s,[0,-64*s,Math.sin(a)*34*s,-64*s-Math.cos(a)*14*s+10*s*Math.abs(Math.sin(a))])}dot(g,'#8a5a2a',-3*s,-62*s,3*s);dot(g,'#8a5a2a',3*s,-61*s,3*s)};
const quercia=(g,s)=>{s=s||1;poly(g,'#5a4430',[[-6*s,0],[-4*s,-34*s],[4*s,-34*s],[6*s,0]]);el(g,'#3e6a34',0,-50*s,34*s,24*s);el(g,'#4a7a3a',-10*s,-58*s,20*s,14*s);el(g,'#357030',12*s,-44*s,18*s,12*s)};
const pioppo=(g,s)=>{s=s||1;rect(g,'#6a5a44',-2*s,-14*s,4*s,14*s);el(g,'#5a8a3a',0,-52*s,10*s,40*s);el(g,'#6a9a44',-2*s,-58*s,5*s,28*s)};
const cipresso=(g,s)=>{s=s||1;el(g,'#243f2a',0,-48*s,9*s,48*s);el(g,'#2e5030',-1*s,-54*s,5*s,34*s);rect(g,'#4a3a2a',-1.5,-4,3,4)};
const casaT=(g,w,h,wall,roof)=>{rect(g,wall,-w/2,-h,w,h);rect(g,'rgba(0,0,0,.14)',w*.15,-h,w*.35,h);poly(g,roof,[[-w/2-6,-h],[0,-h-w*.32],[w/2+6,-h]]);rect(g,'#2a1c10',-w*.12,-h*.62,w*.24,h*.62);rect(g,'#6a5a46',-w/2,-4,w,4)};
const casaP=(g,w,h,wall,lit)=>{rect(g,wall,-w/2,-h,w,h);rect(g,'rgba(0,0,0,.13)',w*.2,-h,w*.3,h);rect(g,'rgba(255,255,255,.2)',-w/2,-h,w,3);rect(g,'#2a1c10',-w*.14,-h*.55,w*.28,h*.55);for(let q=0;q<2;q++)rect(g,lit?'rgb(255,206,120)':'#3a2c20',-w*.38+q*w*.52,-h*.8,w*.14,h*.18);rect(g,'#6a4a2a',-w/2-3,-h-3,w+6,3)};
const tenda=(g,w,h,c,c2)=>{poly(g,c,[[-w/2,0],[0,-h],[w/2,0]]);poly(g,'rgba(0,0,0,.18)',[[0,-h],[w/2,0],[w*.08,0]]);poly(g,c2||'#e8d8a0',[[-w*.14,0],[0,-h*.52],[w*.14,0]]);ln(g,'#4a3a28',1.6,[0,-h,0,-h-10]);dot(g,'#e0b84a',0,-h-11,2.6)};
const tumulo=(g,w,h,c)=>{g.fillStyle=tn(c);g.beginPath();g.moveTo(-w/2,0);g.quadraticCurveTo(-w*.3,-h*1.2,0,-h);g.quadraticCurveTo(w*.3,-h*1.2,w/2,0);g.closePath();g.fill();el(g,'rgba(60,90,40,.45)',-w*.1,-h*.6,w*.3,h*.2)};
const pagl=(g,s)=>{poly(g,'#cfae5a',[[-22*s,0],[-14*s,-24*s],[14*s,-24*s],[22*s,0]]);poly(g,'#b8964a',[[-14*s,-24*s],[0,-36*s],[14*s,-24*s]])};
const muro=(g,w,h,c,merli)=>{rect(g,c,-w/2,-h,w,h);rect(g,'rgba(0,0,0,.14)',w*.3,-h,w*.2,h);if(merli)for(let q=0;q<Math.floor(w/16);q++)rect(g,c,-w/2+q*16+2,-h-8,9,8);for(let q=0;q<4;q++)rect(g,'rgba(0,0,0,.08)',-w/2,-h+q*h/4,w,1)};
const torre=(g,w,h,c)=>{rect(g,c,-w/2,-h,w,h);rect(g,'rgba(0,0,0,.14)',w*.2,-h,w*.3,h);rect(g,c,-w/2-4,-h-4,w+8,6);for(let q=0;q<4;q++)rect(g,c,-w/2-4+q*(w+8)/4,-h-12,(w+8)/4-3,8);rect(g,'#1a1410',-w*.12,-h*.7,w*.24,h*.3)};
const zigg=(g,w,h,n,c,top)=>{for(let i=0;i<n;i++){const wi=w*(1-i*(.7/n)),hh=h/n;rect(g,c,-wi/2,-(i+1)*hh,wi,hh);rect(g,'rgba(0,0,0,.14)',wi*.2,-(i+1)*hh,wi*.3,hh);rect(g,'rgba(255,255,255,.14)',-wi/2,-(i+1)*hh,wi,2)}if(top)rect(g,top,-w*.1,-h-10,w*.2,10)};
const colT=(g,h,w,c)=>{rect(g,c,-w/2,-h,w,h);rect(g,'rgba(255,255,255,.3)',-w/2,-h,w*.26,h);rect(g,'rgba(0,0,0,.14)',w*.16,-h,w*.34,h);rect(g,c,-w*.7,-h-w*.4,w*1.4,w*.4);rect(g,c,-w*.7,-w*.3,w*1.4,w*.3)};
const toroC=(g,h,w,c)=>{colT(g,h,w,c);const y=-h-w*.4;el(g,c,-w*.7,y-6,w*.5,6);el(g,c,w*.7,y-6,w*.5,6);rect(g,c,-w*.9,y-10,w*1.8,5);dot(g,'#2a2018',-w*1.1,y-8,1.4);dot(g,'#2a2018',w*1.1,y-8,1.4)};
const obel=(g,h,c)=>{poly(g,c,[[-7,0],[-5,-h],[0,-h-12],[5,-h],[7,0]]);poly(g,'rgba(0,0,0,.16)',[[2,0],[2,-h-6],[5,-h],[7,0]]);rect(g,'rgba(255,255,255,.2)',-5,-h+6,2,h-6)};
const pilone=(g,w,h,c)=>{[-1,1].forEach(q=>{const cx=q*w*.3,bw=w*.2,tw=w*.16;poly(g,c,[[cx-bw,0],[cx-tw,-h],[cx+tw,-h],[cx+bw,0]]);poly(g,'rgba(0,0,0,.14)',[[cx+tw*.2,-h],[cx+tw,-h],[cx+bw,0],[cx+bw*.2,0]]);rect(g,c,cx-tw-4,-h-8,tw*2+8,8);for(let k=0;k<3;k++)rect(g,'rgba(120,80,40,.3)',cx-tw*.5,-h*.8+k*h*.2,tw,6)});rect(g,'#1a1410',-w*.1,-h*.62,w*.2,h*.62);rect(g,c,-w*.14,-h*.72,w*.28,h*.1);rect(g,'#2a5aa8',-w*.12,-h*.68,w*.24,4)};
const papiro=(g,s,t)=>{for(let q=0;q<7;q++){const sw=Math.sin(t*1.2+q)*2;ln(g,'#4a8a3a',1.8*s,[(q-3)*5*s,0,(q-3)*6*s+sw,-40*s-hr(q)*20*s]);for(let k=-2;k<=2;k++)ln(g,'#5a9a44',1.2*s,[(q-3)*6*s+sw,-44*s-hr(q)*20*s,(q-3)*6*s+sw+k*5*s,-38*s-hr(q)*20*s])}};
const pinoN=(g,s)=>{rect(g,'#4a3a2a',-2*s,-10*s,4*s,10*s);for(let q=0;q<4;q++){tri(g,'#2e4a38',0,-8*s-q*14*s,(34-q*7)*s,26*s);poly(g,'#eef2f6',[[-(10-q*2)*s,-18*s-q*14*s],[0,-34*s-q*14*s],[(10-q*2)*s,-18*s-q*14*s],[0,-22*s-q*14*s]])}};
const roccia=(g,w,h,c,neve)=>{poly(g,c,[[-w/2,0],[-w*.4,-h*.6],[-w*.15,-h],[w*.1,-h*.82],[w*.4,-h*.5],[w/2,0]]);poly(g,'rgba(0,0,0,.18)',[[w*.1,-h*.82],[w*.4,-h*.5],[w/2,0],[w*.1,0]]);if(neve)poly(g,'#f4f6fa',[[-w*.15,-h],[w*.1,-h*.82],[w*.02,-h*.7],[-w*.1,-h*.76],[-w*.26,-h*.72]])};
const banyan=(g,s)=>{for(let q=0;q<6;q++)ln(g,'#6a5a44',3*s,[(q-3)*10*s,-42*s,(q-3)*11*s,0]);el(g,'#3a6a30',0,-58*s,48*s,26*s);el(g,'#4a7a3a',-14*s,-66*s,24*s,14*s);el(g,'#2e5a2a',16*s,-50*s,22*s,12*s)};
const mango=(g,s)=>{rect(g,'#5a4430',-4*s,-26*s,8*s,26*s);el(g,'#2e6a2e',0,-48*s,26*s,22*s);el(g,'#3a7a36',8*s,-52*s,14*s,12*s);dot(g,'#e8a02a',-8*s,-40*s,2.4*s);dot(g,'#e8a02a',6*s,-36*s,2.4*s)};
const bambu=(g,s,t)=>{for(let q=0;q<6;q++){const sw=Math.sin(t*1.5+q)*3;ln(g,'#7a9a3a',3*s,[(q-3)*5*s,0,(q-3)*6*s+sw,-70*s-hr(q)*20*s]);for(let k=0;k<3;k++)ln(g,'#5a8a30',1.6*s,[(q-3)*6*s+sw,-60*s-hr(q)*20*s+k*14*s,(q-3)*6*s+sw+9*s,-54*s-hr(q)*20*s+k*14*s])}};
const capanna=(g,s)=>{for(const lx of[-16,16]){rect(g,'#6a4a2a',lx*s-1.5,-22*s,3,22*s)}rect(g,'#c8a868',-18*s,-34*s,36*s,14*s);poly(g,'#b8964a',[[-26*s,-34*s],[0,-62*s],[26*s,-34*s]]);rect(g,'#2a1c10',-5*s,-30*s,10*s,10*s)};
const lamp=(g,x,y,t,k)=>{rect(g,'#4a3a2a',x-3,y-8,6,10);glow(g,x,y-12,50,'255,190,90',.5*k+.1*Math.sin(t*6+x)*k);dot(g,'rgba(255,214,130,.95)',x,y-12,2.6)};
const braciere=(g,x,y,t,s)=>{s=s||1;ln(g,'#3a2a1a',2*s,[x-8*s,y,x,y-18*s,x+8*s,y]);el(g,'#4a3a2a',x,y-18*s,10*s,3*s);fuoco(g,x,y-20*s,t,.8*s)};
const iscrizione=(g,x,y,w,n,c)=>{for(let r=0;r<n;r++)for(let q=0;q<Math.floor(w/9);q++)if(hr(q*3+r*11)>.25)rect(g,c,x+q*9,y+r*7,6,2)};
function scn(g,s,i,r,t,night){
 if(s==0){if(r>.72)quercia(g,1.5);else if(r>.5)casaT(g,84,50,'#d8c8a0',TEG);else if(r>.36)pagl(g,1.3);else if(r>.2){rect(g,'#9a9078',-60,-12,120,12);for(let q=0;q<7;q++)rect(g,'rgba(0,0,0,.14)',-58+q*17,-12,2,12);quercia(g,1.1)}else pinoN(g,0)}
 else if(s==1){if(r>.74)G.ulv(g,0,0,1.6,t);else if(r>.56){G.cip(g,-20,0,110);G.cip(g,20,0,90)}else if(r>.34){G.tmp(g,0,0,4,24,58,{c:MAR,c2:MAR2,tym:'#4a6a98',st:3})}else if(r>.16)casaP(g,80,56,'#efe8d8',night>.3&&hr(i)>.4);else{rect(g,'#9a9078',-60,-12,120,12);G.ulv(g,0,0,1.1,t)}}
 else if(s==2){if(r>.74)pioppo(g,1.6);else if(r>.54)tumulo(g,150,50,'#a8946a');else if(r>.36)tenda(g,90,66,'#efe0b8','#c8302a');else if(r>.18)casaP(g,80,52,'#c8a878',false);else cipresso(g,1.3)}
 else if(s==3){if(r>.74)palma(g,1.4,t);else if(r>.5){casaP(g,70,70,'#f2ece0',night>.3&&hr(i)>.4);rect(g,'#f2ece0',-36,-96,50,26);rect(g,'#6a8ab8',-10,-84,14,14)}else if(r>.34){for(let q=0;q<5;q++){G.anf(g,-34+q*17,0,1,'#c0603a')}}else if(r>.18){ln(g,LEG,3,[0,0,0,-96]);poly(g,'#f4ecd8',[[2,-92],[2,-40],[30,-48],[30,-86]])}else{muro(g,120,60,'#e4dcc8',true)}}
 else if(s==4){if(r>.7)palma(g,1.5,t);else if(r>.5){rect(g,MUD,-44,-50,88,50);rect(g,MUD2,-48,-54,96,6);rect(g,'#2a1c10',-8,-30,16,30);palma(g,.9,t)}else if(r>.34)obel(g,100,'#d8a878');else if(r>.2)papiro(g,1.4,t);else pilone(g,110,90,'#e8d4a0')}
 else if(s==5){if(r>.7)tenda(g,110,76,'#e8dcc0','#c8302a');else if(r>.5){ln(g,LEG,2,[-30,0,-30,-70]);poly(g,'#c8302a',[[-29,-70],[-29,-52],[-8,-60]]);ln(g,LEG,2,[30,0,30,-70]);poly(g,'#2a5aa8',[[31,-70],[31,-52],[52,-60]])}else if(r>.34)tumulo(g,180,40,'#c8ae7a');else if(r>.2){for(let q=0;q<5;q++)ln(g,'#8a7a4a',1.4,[-20+q*9,0,-24+q*9,-18-hr(q)*10])}else tenda(g,70,50,'#c8b890',null)}
 else if(s==6){if(r>.72)palma(g,1.5,t);else if(r>.5){casaP(g,66,96,'#c8a070',night>.3&&hr(i)>.4);rect(g,'#c8a070',-26,-130,52,36);rect(g,night>.3?'rgb(255,206,120)':'#3a2c20',-6,-118,12,14)}else if(r>.34)zigg(g,120,90,4,'#b88a58','#2a5aa8');else if(r>.18){rect(g,'#2a5aa8',-34,-70,68,70);for(let q=0;q<3;q++){rect(g,'#e8d8a0',-26+q*20,-58+q*0,12,10);rect(g,'#e8d8a0',-26+q*20,-36,12,10)}}else muro(g,110,70,'#c8a070',true)}
 else if(s==7){if(r>.7)toroC(g,150,16,'#d8d0bc');else if(r>.46){rect(g,'#cfc6b0',-60,-50,120,50);iscrizione(g,-52,-44,104,4,'rgba(60,50,40,.35)');rect(g,'#e0d8c4',-64,-54,128,5)}else if(r>.28)cipresso(g,1.5);else{for(let q=0;q<6;q++)rect(g,'#c8c0aa',-40+q*10,-q*8-8,80-q*20,8)}}
 else if(s==8){if(r>.7)pinoN(g,1.6);else if(r>.5)roccia(g,120,90,ROC,true);else if(r>.34){el(g,'#e8e0cc',0,-24,34,24);poly(g,'#d8d0b8',[[-34,-24],[0,-62],[34,-24]]);rect(g,'#2a1c10',-5,-14,10,14)}else if(r>.18)torre(g,40,110,'#a8a090');else roccia(g,90,60,'#8a8478',true)}
 else if(s==9){if(r>.74)banyan(g,1.6);else if(r>.56)mango(g,1.5);else if(r>.42)palma(g,1.7,t);else if(r>.28)bambu(g,1.3,t);else if(r>.12)capanna(g,1.4);else{el(g,'rgba(120,150,170,.4)',0,-2,50,5);papiro(g,1.2,t)}}
 else{if(r>.78)palma(g,1.5,t);else if(r>.55){casaP(g,70,100,'#d8c0a0',night>.2);rect(g,'#d8c0a0',-30,-134,56,34);rect(g,night>.2?'rgb(255,206,120)':'#3a2c20',-6,-122,12,14)}else if(r>.4){tenda(g,100,72,'#e8d090','#c8302a');glow(g,0,-30,70,'255,190,90',.6*night)}else if(r>.26)zigg(g,110,86,4,'#a8805a','#2a5aa8');else if(r>.12)braciere(g,0,0,t,1.3);else muro(g,110,60,'#b89a6a',true)}}
const FS=[.18,.18,.16,.2,.18,.2,.2,.18,.2,.16,.14];
function layerMid(g,o,t){const cam=o/.2,hz=326;each(o,120,5,(x,i,r)=>{const wx=cam+x+120,s=sec(wx),k=nf(cam+x);A.setDK(k);g.save();g.translate(x+60,hz+10);g.scale(.55,.55);scn(g,s,i,r,t,k);g.restore()})}
let TT=0;
function layerStreet(g,o,t){TT=t;for(let z=0;z<11;z++){const a=B[z],b=B[z+1];if(o+480<a||o>b)continue;each(o,150+(z%3)*12,7+z,(x,i,r)=>{const wx=o+x+75;if(wx<a-40||wx>b)return;if(r<FS[z])return;const k=nf(wx);A.setDK(k);g.save();g.translate(x+75,GT+8);scn(g,z,i,hr(i*5+z),t,k);g.restore()})}}
/* suolo */
function groundDraw(g,cam,t){const gt=GT;
 const GZ=[['#8a8a52','e'],['#a8996a','e'],['#b0a064','e'],['#d8caa0','l'],['#e0cc94','s'],['#cdb78a','s'],['#c8a878','l'],['#9a948a','l'],['#a8a49a','r'],['#6a7a3a','p'],['#8a6a48','l']],BB=[B[0],B[1],B[2],B[3],B[4],B[5],B[6],B[7],B[8],B[9],B[10],B[11]];
 rect(g,'#6a5a3a',0,gt,480,3);
 GZ.forEach((zc,zi)=>{const a=BB[zi]-cam,b=BB[zi+1]-cam;if(b<0||a>480)return;const x0=Math.max(0,a),x1=Math.min(480,b),ww=Math.max(1,x1-x0),zw=BB[zi+1]-BB[zi];g.save();g.beginPath();g.rect(x0,gt+3,x1-x0,150);g.clip();rect(g,zc[0],x0,gt+3,x1-x0,150);const pz=(q,m)=>BB[zi]+((q*m)%zw)-cam;
  const slabs=(bw,rows,rh,c1,c2,seed)=>{for(let r=0;r<rows;r++){const yy=gt+7+r*rh,s0=Math.floor((cam+x0)/bw)*bw;for(let k=-1;k<Math.ceil(ww/bw)+2;k++){const px=s0+k*bw-cam+(r%2)*bw/2,hh=hr(k*seed+r*7);rect(g,hh>.5?c1:'rgba(0,0,0,0)',px,yy,bw-2,rh-2);rect(g,c2,px,yy+rh-3,bw-2,2)}}};
  if(zc[1]=='e'){for(let r=0;r<6;r++)rect(g,r%2?'rgba(60,40,20,.1)':'rgba(255,240,190,.07)',x0,gt+8+r*22,x1-x0,10);for(let q=0;q<80;q++)dot(g,hr(q)>.5?'rgba(255,240,200,.25)':'rgba(40,30,10,.3)',pz(q,31),gt+6+hr(q*5)*144,1+hr(q)*1.4);if(zi==0)for(let q=0;q<10;q++)el(g,'rgba(90,150,60,.5)',pz(q,331),gt+16+hr(q*3)*110,26+hr(q)*20,5)}
  if(zc[1]=='l'){slabs(76,5,28,'rgba(255,255,255,.28)','rgba(90,80,60,.25)',19);for(let q=0;q<9;q++)el(g,'rgba(110,150,80,.35)',pz(q,211),gt+30+hr(q)*100,22,3)}
  if(zc[1]=='s'){for(let r=0;r<7;r++)rect(g,r%2?'rgba(160,120,60,.1)':'rgba(255,250,230,.14)',x0,gt+8+r*20,x1-x0,10);for(let q=0;q<150;q++)dot(g,hr(q)>.5?'rgba(255,255,240,.45)':'rgba(150,110,60,.35)',pz(q,25),gt+6+hr(q*5)*144,1+hr(q)*1.2);if(zi==4)for(let q=0;q<6;q++)el(g,'rgba(120,190,210,.4)',pz(q,419),gt+138,60,4)}
  if(zc[1]=='r'){slabs(60,5,28,'rgba(255,255,255,.2)','rgba(60,60,70,.25)',13);for(let q=0;q<16;q++)el(g,'rgba(245,248,252,.65)',pz(q,157),gt+10+hr(q*3)*130,18+hr(q)*20,3)}
  if(zc[1]=='p'){for(let q=0;q<14;q++)el(g,'rgba(120,150,170,.5)',pz(q,157),gt+12+hr(q*3)*128,22+hr(q)*24,3.4);for(let q=0;q<60;q++)ln(g,'rgba(40,60,30,.35)',1,[pz(q,53),gt+6+hr(q*5)*140,pz(q,53)-3,gt+13+hr(q*5)*140]);const ra=rainAt(cam+240);for(let q=0;q<14;q++)el(g,'rgba(140,170,190,'+(.2+.3*ra)+')',pz(q,211),gt+10+hr(q)*130,28,4)}
  g.restore()});
 for(let k=0;k<12;k++){const sx=k*40,wx=cam+sx+20,a=.46*nf(wx);if(a>.01)rect(g,'rgba(20,26,70,'+a+')',sx,gt,40,150)}
 const dw=cl(1-cam/1800,0,1);if(dw>.02)rect(g,'rgba(255,214,210,'+(.12*dw)+')',0,gt,480,150)}
/* vita: uccelli, animali, passanti, soldati, pioggia, neve, pipistrelli */
const gregge=(g,x,y,s,f,t,c)=>{g.save();g.translate(x,y);g.scale(f*s,s);const w=Math.sin(t*4+x)*1.5;[[-9,0],[-4,1],[7,-1],[11,0]].forEach((l,i)=>ln(g,'#3a2a1a',2.4,[l[0],-10,l[0]+l[1]+w*(i%2?1:-1),0]));el(g,c||'#f0ece0',0,-16,15,10);el(g,'#e4dfd0',-5,-20,8,5);el(g,'#2a2018',16,-18,5,4.4);dot(g,'#14110f',18,-19,.9);g.restore()};
function layerLife(g,o,t){const cam=o,xs=cam+240,hz=GT,s0=sec(xs);
 const bird=(bx,by,s,w,c)=>{g.strokeStyle=tn(c);g.lineWidth=s*1.9;g.beginPath();g.moveTo(bx-9*s,by+w);g.quadraticCurveTo(bx-4*s,by-4*s,bx,by);g.quadraticCurveTo(bx+4*s,by-4*s,bx+9*s,by+w);g.stroke()};
 const flock=(v,n,sp,yb,ya,s,c)=>{if(v>.05)for(let i=0;i<n;i++){const bx=((i*171+t*(sp+i*4))%640)-80,by=yb+hr(i*3)*ya+Math.sin(t*1.7+i*2)*12,w=Math.sin(t*9+i)*3;g.globalAlpha=v;bird(bx,by,s,w,c);g.globalAlpha=1}};
 const win=(a,b,w)=>cl((xs-a+w)/w,0,1)*cl((b-xs+w)/w,0,1);
 flock(win(0,Z[1],500),5,26,70,110,1.3,'#2a2a3a');
 flock(win(B[3]-300,B[4],500),6,30,70,100,1.6,'#f4f4f4');flock(win(Z[1],Z[2],500),3,20,60,70,1.8,'#5a4a3a');
 flock(win(B[4],Z[4],500),4,18,60,90,1.6,'#e8e8ee');flock(win(Z[2],Z[3],500),3,16,50,70,1.8,'#3a2a1a');
 flock(win(Z[5],Z[6],500),3,14,50,70,1.8,'#3a2a1a');
 const pv=win(Z[6]+300,Z[7]-300,400);if(pv>.05)for(let i=0;i<4;i++){const bx=((i*131+t*(26+i*4))%640)-80,by=90+hr(i*3)*100+Math.sin(t*1.6+i*2)*14,w=Math.sin(t*9+i)*3;g.globalAlpha=pv;ln(g,'#2a9a3a',2.6,[bx-8,by+w,bx,by,bx+8,by+w]);ln(g,'#e82a2a',1.6,[bx-5,by+2,bx,by+3,bx+5,by+2]);g.globalAlpha=1}
 const nv=cl((xs-Z[7]-500)/700,0,1);if(nv>.05)for(let i=0;i<5;i++){const bx=((i*97+t*(34+i*3))%560)-40,by=90+hr(i*5)*120+Math.sin(t*5+i)*18,w=Math.sin(t*14+i)*3.4;g.globalAlpha=nv;bird(bx,by,1.1,w,'rgba(10,8,20,.9)');g.globalAlpha=1}
 const ra=rainAt(xs);if(ra>.04){g.strokeStyle='rgba(190,210,230,'+(.15+.35*ra)+')';g.lineWidth=1;g.beginPath();for(let q=0;q<(ra*170|0);q++){const rx=(q*61.7+t*40)%520-20,ry=(q*97.3+t*520)%520;g.moveTo(rx,ry);g.lineTo(rx-5,ry+16)}g.stroke()}
 const sn=win(B[8],Z[6],200);if(sn>.05){g.fillStyle='rgba(255,255,255,'+(.8*sn)+')';for(let q=0;q<60;q++){const sx=(q*53.1+Math.sin(t+q)*20+t*14)%500-10,sy=(q*79.7+t*50)%520;g.fillRect(sx,sy,2,2)}}
 each(o,520,31,(x,i,r)=>{const wx=cam+x,s=sec(wx);A.setDK(nf(wx));const f=md(i,2)?1:-1;
  if(s==0&&r<.45){gregge(g,x+30,hz+50,1,1,t);gregge(g,x+62,hz+55,1,-1,t,'#e0d8c4');gregge(g,x+90,hz+49,.9,1,t)}
  if((s==0||s==1)&&r>.45&&r<.58)G.cane(g,x+50,hz+52,t,'#b8935a');
  if(s==1&&r<.35){G.capra(g,x+40,hz+50,1.2,t,1);G.capra(g,x+80,hz+54,1,t,-1)}
  if(s==1&&r>.62){G.asino(g,x+60,hz+54,.9,t,f)}
  if(s==2&&r<.4){G.cavallo(g,x+60,hz+54,.8,t,f,['#8a5a3a','#3a2a1a','#c8b890'][md(i,3)])}
  if((s==4||s==6)&&r>.5&&r<.7)MS.cammello(g,x+60,hz+56,.7,t,f);
  if((s==3||s==4)&&r>.7)G.asino(g,x+60,hz+54,.8,t,f);
  if((s==7||s==8)&&r>.55&&r<.75)G.asino(g,x+60,hz+54,.85,t,f);
  if(s==9&&r<.3){FE.fel(g,x+80,hz+58,.5,t,f)}
  if(s==6&&r>.78)G.asino(g,x+60,hz+54,.8,t,f);
  if(s==5&&r>.6&&r<.85)G.cavallo(g,x+60,hz+54,.75,t,f,'#5a3a22')});
 const DR={0:['#efe8d4','#efe8d4'],1:['#efe8d4','#efe8d4'],2:['#c8302a','#efe8d4'],3:['#7a2a6a','#efe8d4'],4:['#f4eedc','#f4eedc'],5:['#c8302a','#8a7a5a'],6:['#d8c8a8','#d8c8a8'],7:['#2a8a7a','#7a2a6a'],8:['#7a6a52','#4a3a2a'],9:['#f4f0e4','#f4f0e4'],10:['#e8d090','#2a4a8a']};
 each(o,430,57,(x,i,r)=>{const wx=cam+x,s=sec(wx);if(r<.4||wx>W1-500)return;A.setDK(nf(wx));const dir=md(i,2)?1:-1,off=Math.sin(t*.18+i)*70,f=Math.cos(t*.18+i)*dir>0?1:-1,d=DR[s];
  const o2={f:f,s:.5,top:d[0],bot:d[1],skin:s==9?'#8a5a3a':s==4?'#b88458':SKN[md(i,4)],long:s==6||s==10?md(i,2)==0:md(i,3)==1,hair:s==9?'#14100c':'#2a1a10'};
  if(s==0||s==1||s==2||s==5){o2.acc=(g2,b)=>{if(s==5||s==2){el(g2,'#8a8a92',1,-112+b,12,7);rect(g2,'#8a8a92',-12,-112+b,24,3);ln(g2,'#5a3e22',2,[10,-84+b,16,-170])}else{el(g2,'#8a6a40',1,-112+b,13,3.4);}}}
  P(g,x+off,hz+54,t+i,o2)});A.setDK(0);g.globalAlpha=1}
/* ===================== oggetti lungo il percorso: le 48 tappe ===================== */
const T=(g,x,y,s,fn)=>{g.save();g.translate(x,y);g.scale(s,s);fn(g);g.restore()};
const pozza=(g,x,y,rx,ry,t,c1,c2)=>{el(g,c2||'#1a5a98',x,y,rx,ry);el(g,c1||'#2a86c4',x,y-ry*.12,rx*.97,ry*.88);for(let q=0;q<Math.floor(rx/22);q++)el(g,'rgba(255,255,255,.4)',x-rx*.8+q*(rx*1.6/Math.floor(rx/22))+((t*9+q*13)%22),y-ry*.5+(q*7)%Math.max(4,ry*1.1),8,1.4)};
/* soldato macedone: kausia, corazza di lino, scudo piccolo, mantello rosso e sarissa */
const sol=(g,x,y,t,i,f,s,sar)=>P(g,x,y,t,{s:s||.62,f:f||1,ph:i,top:'#d8d0b8',bot:'#9a7a58',skin:SKN[md(i,4)],hair:'#3a2a1a',acc:(g2,b)=>{const SR=sar===0?0:(sar||260);poly(g2,'#b8302a',[[-12,-90+b],[-26,-62+b],[-20,-40],[-10,-62+b]]);if(SR){ln(g2,'#6a4a2a',2,[9,-46,9+SR*.28,-46-SR*.96]);poly(g2,'#9a9aa2',[[9+SR*.28-1,-46-SR*.96],[9+SR*.28+2,-46-SR*.96],[9+SR*.28+.5,-46-SR*.96-12]]);}dot(g2,'#c8a040',-12,-66+b,9);dot(g2,'#e8d8a0',-12,-66+b,3);el(g2,'#8a7a5a',1,-112+b,14,3.6);el(g2,'#8a7a5a',1,-116+b,8,5)}});
const cav=(g,x,y,t,s,f,c,top)=>{P(g,x,y-30*s,t,{s:.64*s,f:f,top:top||'#b8302a',bot:'#d8d0b8',skin:SKN[1],hair:'#3a2a1a',acc:(g2,b)=>{el(g2,'#8a8a92',1,-112+b,13,8);rect(g2,'#8a8a92',-13,-112+b,26,3);poly(g2,'#f4f4f8',[[0,-120+b],[-6,-134+b],[8,-128+b]]);ln(g2,'#5a3e22',2,[10,-60,36,-170])}});G.cavallo(g,x,y,s,t,f,c)};
const uomo=(g,x,y,t,o,acc)=>P(g,x,y,t,Object.assign({s:.7},o,{acc:acc}));
const barba=(g,b,c)=>{poly(g,c,[[-4,-96+b],[8,-96+b],[9,-86+b],[2,-80+b],[-3,-88+b]])};
const SC={};
SC.campi=(g,x,y,t)=>{T(g,x-170,y,1,()=>quercia(g,2));T(g,x+190,y,1,()=>quercia(g,1.6));rect(g,'#9a9078',x-130,y-16,150,16);for(let q=0;q<9;q++)rect(g,'rgba(0,0,0,.16)',x-128+q*17,y-16,2,16);rect(g,'#aaa088',x-130,y-18,150,3);
 uomo(g,x+20,y+8,t,{s:.85,top:'#8a6a40',bot:'#efe8d4',hair:'#2a1a10'},(g2,b)=>{ln(g2,'#6a4a2a',2.6,[16,-92,20,-2]);ln(g2,'#6a4a2a',2.6,[16,-92,26,-100]);el(g2,'#8a7a5a',1,-112+b,14,3.4)});
 gregge(g,x+70,y+14,1.2,1,t);gregge(g,x+104,y+20,1.1,-1,t,'#e0d8c4');gregge(g,x+136,y+12,1,1,t);G.cane(g,x+54,y+22,t,'#b8935a');T(g,x-60,y,1,()=>casaT(g,90,56,'#d8c8a0',TEG))};

SC.pella=(g,x,y,t)=>{rect(g,'#9a8a6a',x-250,y-90,500,6);el(g,'#8a9a5a',x,y-82,250,40);G.tmp(g,x,y-96,6,30,60,{c:MAR,c2:MAR2,tym:'#a8503a',st:3});
 rect(g,'#e8dcc0',x-130,y-70,260,70);rect(g,'rgba(0,0,0,.12)',x+60,y-70,70,70);for(let q=0;q<6;q++)G.col(g,x-100+q*40,y,64,13,MAR,MAR2);rect(g,MAR,x-134,y-76,268,8);poly(g,TEG,[[x-140,y-76],[x,y-112],[x+140,y-76]]);
 el(g,'#efe8d8',x,y+22,130,13);for(let q=0;q<44;q++)dot(g,q%3?'#2a2a30':'#c8a860',x-100+hr(q)*200,y+16+hr(q+9)*12,1.8);
 P(g,x-190,y+6,t,{s:.78,top:'#c8a0a0',bot:'#c8a0a0',long:true,hair:'#2a1a10',acc:(g2,b)=>{G.anf(g2,16,-60+b,.6,'#c0603a')}});P(g,x+180,y+6,t,{s:.78,f:-1,top:'#efe8d4',bot:'#8a6a3a',hair:'#2a1a10'})};

SC.bucefalo=(g,x,y,t)=>{el(g,'rgba(0,0,0,.3)',x-20,y+10,170,9);G.cavallo(g,x+50,y,1.7,t,1,'#17171c');dot(g,'#f6f4ee',x+50+36*1.7,y-67*1.7+1,2.2);
 P(g,x-30,y,t,{s:.72,top:'#b8302a',bot:'#efe8d4',hair:'#c89a50',acc:(g2,b)=>{ln(g2,SKN[1],7,[12,-84+b,30,-96+b])}});
 P(g,x-190,y+4,t,{s:.88,top:'#7a2a6a',bot:'#efe8d4',hair:'#3a2a1a',acc:(g2,b)=>{barba(g2,b,'#3a2a1a');ln(g2,'#c8a040',2,[-12,-92+b,12,-92+b])}});
 P(g,x-240,y+10,t,{s:.7,f:-1,top:'#efe8d4',bot:'#8a6a3a',hair:'#2a1a10'});P(g,x+250,y+6,t,{s:.68,f:-1,top:'#a8503a',bot:'#efe8d4',hair:'#2a1a10'})};

SC.mieza=(g,x,y,t)=>{T(g,x+150,y,1,()=>{roccia(g,240,190,'#9a8e78',false);ar(g,'#1a1410',-26,0,52,80);for(let q=0;q<5;q++)ln(g,'#4a7a38',2,[-30+q*15,-84,-34+q*15,-70-hr(q)*10])});G.stat(g,x+190,y-72,1.4,'#f0ece0');
 for(let i=0;i<4;i++)rect(g,i%2?'#b8ae94':'#cfc6b0',x-230+i*14,y-14-i*16,170-i*28,16);rect(g,'#e0d8c4',x-230,y-4,170,4);
 [[-170,'#c8a0a0'],[-130,'#8a9ac8'],[-92,'#efe8d4']].forEach((b,i)=>P(g,x+b[0],y-30-i*0,t,{s:.5,top:b[1],bot:'#efe8d4',hair:['#2a1a10','#6a4a2a','#c89a50'][i],acc:(g2,bb)=>{rect(g2,'#efe4c0',8,-70+bb,14,8)}}));
 T(g,x-250,y,1,()=>quercia(g,2));T(g,x-10,y,1,()=>quercia(g,1.5))};

SC.falange=(g,x,y,t)=>{for(let r=0;r<2;r++)for(let q=0;q<4;q++)sol(g,x-130+q*52+r*24,y+4-r*8,t,q+r*5,1,.74-r*.03,280-r*8);cav(g,x+230,y+10,t,.85,-1,'#3a2a1a');poly(g,'#b8302a',[[x-170,y-210],[x-170,y-180],[x-140,y-195]]);ln(g,'#6a4a2a',2,[x-170,y-216,x-170,y-2])};

SC.aigai=(g,x,y,t)=>{for(let i=0;i<7;i++)rect(g,i%2?'#cfc6b0':'#d8cfb8',x-270+i*20,y-14-i*15,250-i*20,15);for(let i=0;i<7;i++)rect(g,'rgba(0,0,0,.08)',x-270+i*20,y-14-i*15,250-i*20,2);
 T(g,x+140,y,1,()=>{tumulo(g,230,90,'#7a8a4a');rect(g,MAR,-60,-52,120,52);rect(g,'#4a4258',-52,-48,104,48);ar(g,'#1a1420',-18,0,36,40);G.col(g,-50,0,52,12,MAR,MAR2);G.col(g,50,0,52,12,MAR,MAR2);rect(g,MAR,-64,-60,128,8)});
 [-50,-20,10].forEach((d,i)=>{rect(g,'#9a9078',x-20+d*1.2,y-12,16,12);G.stat(g,x-12+d*1.2,y-12,1.1,['#f0ece0','#e8e0cc','#d8e0e8'][i])});dot(g,GLD,x+130,y-4,5);el(g,GLD,x+130,y-4,9,3);el(g,'rgba(0,0,0,.35)',x+130,y-4,5,1.6)};

SC.cheronea=(g,x,y,t)=>{T(g,x,y,1.5,()=>{rect(g,'#a8a090',-36,-44,72,44);rect(g,'#c0b8a8',-40,-50,80,8);poly(g,'#b8b0a0',[[-26,-50],[-28,-88],[-10,-108],[10,-112],[18,-80],[22,-50]]);el(g,'#b8b0a0',-8,-96,26,16);dot(g,'#a8a090',20,-110,13);dot(g,'#b8b0a0',24,-106,10);poly(g,'#a8a090',[[16,-122],[20,-130],[26,-122]]);dot(g,'#4a4238',28,-108,1.6);rect(g,'#a8a090',8,-70,8,22)});
 T(g,x+200,y,1,()=>tumulo(g,170,40,'#7a8a50'));for(let q=0;q<6;q++){ln(g,'#6a4a2a',2,[x-250+q*14,y+4,x-246+q*14,y-70-hr(q)*14]);poly(g,'#9a9aa2',[[x-248+q*14,y-70-hr(q)*14],[x-244+q*14,y-70-hr(q)*14],[x-246+q*14,y-82-hr(q)*14]])}
 cav(g,x-190,y+14,t,.8,1,'#8a5a3a');cav(g,x-110,y+20,t,.8,1,'#3a2a1a')};

SC.corinto=(g,x,y,t)=>{T(g,x-210,y,1,()=>{roccia(g,200,170,'#a89a82',false);muro(g,70,18,'#d8cfb8',true)});
 const jx=x+20;el(g,'#8a4a2a',jx,y-56,58,56);el(g,'#b8683a',jx-4,y-60,52,52);el(g,'rgba(255,255,255,.14)',jx-24,y-70,10,30);ar(g,'#b8683a',jx-22,y-96,44,30);el(g,'#2a1810',jx,y-100,22,6);rect(g,'rgba(60,20,0,.3)',jx-54,y-48,108,3);
 uomo(g,x+110,y+10,t,{s:.8,top:'#d8c8a0',bot:'#d8c8a0',long:true,hair:'#bdb8a8'},(g2,b)=>{barba(g2,b,'#bdb8a8');ln(g2,'#6a4a2a',2.4,[16,-90,20,-2]);rect(g2,'#4a3a2a',-22,-70+b,6,10);dot(g2,'rgba(255,214,120,.9)',-19,-60+b,2.4)});
 P(g,x-120,y+8,t,{s:.84,top:'#b8302a',bot:'#efe8d4',hair:'#c89a50',acc:(g2,b)=>{el(g2,'#8a8a92',1,-112+b,13,8);rect(g2,'#8a8a92',-13,-112+b,26,3);poly(g2,'#f4f4f8',[[0,-120+b],[-6,-134+b],[8,-128+b]])}});
 for(let q=0;q<5;q++)ln(g,'rgba(255,240,170,.35)',2,[x+210,y-200,x+120+q*14,y-60])};

SC.delfi=(g,x,y,t)=>{T(g,x-240,y,1,()=>roccia(g,200,200,'#a89a82',false));T(g,x+250,y,1,()=>roccia(g,180,170,'#9a8e78',false));
 G.tmp(g,x,y,6,28,78,{c:MAR,c2:MAR2,tym:'#4a6a98',st:3});for(let i=0;i<3;i++)rect(g,i%2?'#cfc6b0':'#e0d8c4',x-120-i*8,y-4+i*0,240+i*16,4);
 T(g,x+90,y+16,1,()=>{ln(g,'#8a6a30',2.4,[-10,0,-4,-26,0,-30]);ln(g,'#8a6a30',2.4,[10,0,4,-26,0,-30]);ln(g,'#8a6a30',2.4,[0,0,0,-30]);el(g,'#8a6a30',0,-32,12,4);fumo(g,0,-34,t,'#e8e4dc',4)});
 P(g,x+60,y+22,t,{s:.78,top:'#efe8d4',bot:'#efe8d4',long:true,hair:'#4a3a2a',acc:(g2,b)=>{ln(g2,'#4a7a38',2,[16,-62+b,26,-82+b]);for(let q=0;q<4;q++)dot(g2,'#4a7a38',22+q*2,-70+b-q*4,2.4)}});
 for(let q=0;q<5;q++){ln(g,'#4a7a38',2.6,[x-170+q*8,y+10,x-166+q*8,y-30]);dot(g,'#5a9a44',x-166+q*8,y-30,3)}};

SC.tebe=(g,x,y,t)=>{const jag=(cx,w,h,c)=>poly(g,c,[[cx-w/2,y],[cx-w/2,y-h],[cx-w*.3,y-h*.7],[cx-w*.1,y-h*1.05],[cx+w*.1,y-h*.75],[cx+w*.3,y-h*.95],[cx+w/2,y-h*.6],[cx+w/2,y]]);jag(x-190,110,90,'#c8bea4');jag(x-90,80,60,'#b8ae94');jag(x+20,100,40,'#c8bea4');
 G.col(g,x-30,y,40,12,MAR,MAR2);G.col(g,x+10,y,70,12,MAR,MAR2);for(let q=0;q<14;q++)el(g,'#a89e88',x-230+hr(q)*200,y+4+hr(q+3)*10,6+hr(q+7)*8,4);fumo(g,x-130,y-60,t,'#a8a49c',4);fumo(g,x+10,y-70,t+1,'#a8a49c',3);
 T(g,x+190,y,1,()=>{casaP(g,80,56,'#efe8d8',false)});G.ulv(g,x+250,y,1.2,t)};

SC.partenza=(g,x,y,t)=>{pozza(g,x-70,y-56,200,34,t);G.trir(g,x-130,y-62,.6,t,1,'#e8e0cc');G.trir(g,x-20,y-58,.52,t,1,'#e8e0cc');rect(g,'#d8c898',x-270,y-30,540,30);
 const carro=(cx)=>{rect(g,'#7a5a38',cx-26,y-34,52,18);for(const wx of[-18,18]){dot(g,'#4a3a22',cx+wx,y-12,11);dot(g,'#7a5a38',cx+wx,y-12,8);dot(g,'#4a3a22',cx+wx,y-12,2)}rect(g,'#c8b890',cx-22,y-48,44,14);poly(g,'#d8c8a0',[[cx-24,y-48],[cx,y-62],[cx+24,y-48]])};carro(x+40);carro(x+130);
 for(let q=0;q<4;q++)sol(g,x+160+q*30,y+12,t,q,-1,.7,240)};

SC.ellesponto=(g,x,y,t)=>{rect(g,'#6a9a50',x-260,y-84,200,18);pozza(g,x-70,y-54,210,34,t);G.trir(g,x-110,y-58,.7,t,1,'#e8e0cc');rect(g,'#e0cc94',x-260,y-26,520,30);
 ln(g,'#6a4a2a',3.4,[x+40,y+4,x+58,y-130]);poly(g,'#9a9aa2',[[x+56,y-128],[x+60,y-130],[x+60,y-146]]);dot(g,'#b8302a',x+20,y-4,14);dot(g,'#e8d8a0',x+20,y-4,5);
 P(g,x+110,y+14,t,{s:.84,f:-1,top:'#b8302a',bot:'#efe8d4',hair:'#c89a50',acc:(g2,b)=>{el(g2,'#8a8a92',1,-112+b,13,8);poly(g2,'#f4f4f8',[[0,-120+b],[-6,-134+b],[8,-128+b]])}});for(let q=0;q<3;q++)sol(g,x+180+q*28,y+14,t,q,-1,.66,240)};
const ion=(g,x,y,h,w)=>{G.col(g,x,y,h,w,MAR,MAR2);rect(g,MAR,x-w*.8,y-h-w*.3,w*1.6,w*.3);dot(g,MAR2,x-w*.8,y-h-w*.12,w*.3);dot(g,MAR2,x+w*.8,y-h-w*.12,w*.3);dot(g,'rgba(0,0,0,.25)',x-w*.8,y-h-w*.12,w*.12);dot(g,'rgba(0,0,0,.25)',x+w*.8,y-h-w*.12,w*.12)};
const elmo=(g2,b)=>{el(g2,'#8a8a92',1,-112+b,13,8);rect(g2,'#8a8a92',-13,-112+b,26,3);poly(g2,'#f4f4f8',[[0,-120+b],[-6,-134+b],[8,-128+b]])};
const velata=(c,cc)=>(g2,b)=>{poly(g2,c,[[-13,-112+b],[0,-118+b],[13,-112+b],[16,-70+b],[-16,-70+b]]);rect(g2,cc||'#e0b84a',-14,-92+b,28,3)};

SC.troia=(g,x,y,t)=>{T(g,x-190,y,1,()=>{muro(g,170,110,'#d8cfb8',true);torre(g,50,150,'#cfc6b0');rect(g,'#1a1410',-20,-60,40,60)});G.tmp(g,x-190,y-110,4,22,36,{c:MAR,c2:MAR2,tym:'#a8503a'});
 T(g,x+30,y,1,()=>{tumulo(g,200,80,'#8a8a50');for(let q=0;q<9;q++){const a=-1.4+q*.35;dot(g,['#f0a8c0','#e8d870','#f4f4f4'][q%3],Math.sin(a)*40,-84-Math.cos(a)*10,3.4)}});
 [[x-60,1],[x-30,0]].forEach((p,i)=>P(g,p[0],y+16,t+i,{s:.78,top:'#efe8d4',bot:i?'#d8a078':'#d8a078',skin:'#d8a078',hair:i?'#c89a50':'#3a2a1a'}));P(g,x+190,y+10,t,{s:.8,f:-1,top:'#b8302a',bot:'#efe8d4',hair:'#3a2a1a',acc:(g2,b)=>{rect(g2,'#6a4a2a',14,-60,6,18)}})};

SC.granico=(g,x,y,t)=>{poly(g,'#8a7a4a',[[x-270,y],[x-270,y-50],[x-200,y-60],[x-170,y]]);poly(g,'#8a7a4a',[[x+270,y],[x+270,y-50],[x+200,y-64],[x+160,y]]);
 [[-110,0,'#8a5a3a'],[-30,6,'#17171c'],[50,-2,'#c8b890']].forEach((c,i)=>cav(g,x+c[0],y-4+c[1],t,.9,1,c[2],i==1?'#efe8d4':'#b8302a'));
 g.save();g.globalAlpha=.7;el(g,tn('#3a7ab0'),x,y-2,190,22);g.restore();for(let q=0;q<10;q++)el(g,'rgba(255,255,255,.45)',x-150+q*32+((t*12+q*5)%30),y-8+(q*5)%14,9,1.4)};

SC.efeso=(g,x,y,t)=>{rect(g,MAR2,x-190,y-8,380,8);rect(g,MAR,x-196,y-12,392,5);for(let q=0;q<5;q++)ion(g,x-160+q*80,y-12,150,22);rect(g,MAR,x-190,y-188,380,12);rect(g,MAR2,x-190,y-176,380,5);poly(g,MAR,[[x-194,y-188],[x,y-226],[x+194,y-188]]);
 rect(g,'#2a2230',x-130,y-160,260,148);for(let q=0;q<5;q++)ion(g,x-160+q*80,y-12,150,22);
 T(g,x-70,y-12,1,()=>{poly(g,'#cfc6b0',[[-11,0],[-14,-60],[-10,-92],[10,-92],[14,-60],[11,0]]);dot(g,'#cfc6b0',0,-100,9);for(let q=0;q<6;q++)dot(g,'#b8a060',-9+q*3.6,-70-(q%2)*4,2.2)});
 uomo(g,x+120,y+14,t,{s:.8,top:'#8a9ac8',bot:'#8a9ac8',long:true,hair:'#5a4a3a'},(g2,b)=>{rect(g2,'#e8dcc0',-30,-96+b,30,38);dot(g2,'#d8a078',-15,-82+b,5);ln(g2,'#e0b84a',2,[-22,-72+b,-14,-80+b,-20,-66+b]);ln(g2,'#6a4a2a',2.4,[-30,-58,-34,-4]);ln(g2,'#6a4a2a',2.4,[0,-58,4,-4])})};

SC.gordio=(g,x,y,t)=>{T(g,x+190,y,1,()=>G.tmp(g,0,0,4,24,44,{c:MAR,c2:MAR2,tym:'#4a6a98'}));
 rect(g,'#7a5a38',x-90,y-60,130,22);rect(g,'#5a4026',x-90,y-40,130,4);for(const wx of[-60,10]){dot(g,'#4a3a22',x+wx,y-24,26);dot(g,'#7a5a38',x+wx,y-24,20);dot(g,'#4a3a22',x+wx,y-24,5);for(let q=0;q<6;q++)ln(g,'#4a3a22',2,[x+wx,y-24,x+wx+Math.cos(q*1.05)*20,y-24+Math.sin(q*1.05)*20])}
 ln(g,'#6a4a2a',5,[x+40,y-52,x+110,y-34]);for(let k=0;k<4;k++){g.strokeStyle=tn('#a8844a');g.lineWidth=3;g.beginPath();g.ellipse(x+100+k*2,y-36,11-k*2,8,k*.8,0,7);g.stroke()}ln(g,'#c8a868',2.4,[x+80,y-30,x+120,y-44,x+96,y-40]);
 [[-130,'#efe8d4'],[-160,'#8a6a3a'],[x-x+190,'#a8503a']].forEach((p,i)=>{if(i<2)P(g,x+p[0],y+14,t+i,{s:.7,top:p[1],bot:'#efe8d4',hair:'#3a2a1a'})})};

SC.tarso=(g,x,y,t)=>{T(g,x-210,y,1,()=>roccia(g,200,160,'#8a8478',false));pozza(g,x-180,y-34,100,18,t);
 T(g,x+20,y,1,()=>{tenda(g,230,150,'#e8dcc0','#b8302a');ar(g,'#2a1c10',-34,0,68,80);rect(g,'#b8302a',-26,-26,52,20);rect(g,'#efe8d4',-24,-34,16,8);dot(g,'#d8a078',-6,-30,6);rect(g,'#7a5a38',-30,-6,4,6);rect(g,'#7a5a38',22,-6,4,6)});
 rect(g,'#7a5a38',x+110,y-30,50,5);rect(g,'#7a5a38',x+114,y-26,4,26);rect(g,'#7a5a38',x+152,y-26,4,26);el(g,'#e0b84a',x+130,y-36,6,3);rect(g,'#efe8d8',x+142,y-34,14,4);dot(g,'#b8302a',x+154,y-32,1.6);
 uomo(g,x+196,y+12,t,{s:.82,f:-1,top:'#efe8d4',bot:'#efe8d4',long:true,hair:'#4a3a2a'},(g2,b)=>{barba(g2,b,'#4a3a2a');el(g2,'#efe8d4',1,-112+b,14,3)})};

SC.isso=(g,x,y,t)=>{pozza(g,x-200,y-34,90,16,t);T(g,x+10,y,1,()=>{tenda(g,300,190,'#7a2a6a','#e0b84a');for(let q=0;q<5;q++)poly(g,'rgba(224,184,74,.5)',[[-100+q*50,-2],[-92+q*50,-2],[-8+q*14,-180]]);ar(g,'#2a1020',-30,0,60,100)});
 T(g,x-120,y,1,()=>{rect(g,'#e0b84a',-26,-44,52,22);for(const wx of[-20,20]){dot(g,'#4a3a22',wx,-14,15);dot(g,'#e0b84a',wx,-14,11);dot(g,'#4a3a22',wx,-14,3);for(let q=0;q<8;q++)ln(g,'#4a3a22',1.6,[wx,-14,wx+Math.cos(q*.8)*13,-14+Math.sin(q*.8)*13])}ln(g,'#6a4a2a',3,[26,-36,60,-26])});
 [[x+130,'#2a6a8a'],[x+160,'#a8503a'],[x+190,'#efe8d4']].forEach((p,i)=>P(g,p[0],y+14,t+i,{s:.78,f:-1,top:p[1],bot:p[1],long:true,hair:'#2a1a10',acc:velata(['#2a8a7a','#c8a0c0','#efe8d4'][i])}));
 P(g,x-210,y+12,t,{s:.8,top:'#b8302a',bot:'#efe8d4',hair:'#c89a50',acc:elmo})};

SC.tiro=(g,x,y,t)=>{pozza(g,x,y-52,250,40,t,'#2a86c4','#1a5a98');T(g,x,y-52,1,()=>{muro(g,300,110,'#efe8d8',true);for(const tx of[-150,150,0]){torre(g,44,150,'#e4dcc8')}for(let q=0;q<5;q++){rect(g,'#efe8d8',-120+q*50,-150,34,40);rect(g,'#c8402a',-114+q*50,-100,22,3)}ar(g,'#1a1420',-18,0,36,50)});
 G.trir(g,x-170,y-34,.5,t,1,'#8a2a6a');G.trir(g,x+190,y-38,.46,t,-1,'#e8e0cc');
 for(let q=0;q<16;q++){const hx=x-250+(q%8)*24+(q>7?10:0),hy=y-4+(q>7?-10:6);el(g,q%2?'#7a2a6a':'#b890a0',hx,hy,11,6);el(g,'rgba(255,255,255,.3)',hx-3,hy-2,3,1.6)}};

SC.molo=(g,x,y,t)=>{pozza(g,x+60,y-56,230,34,t);poly(g,'#c8b890',[[x-270,y],[x-270,y-30],[x+120,y-48],[x+160,y-40],[x+130,y-28],[x+10,y-4]]);rect(g,'rgba(0,0,0,.12)',x-270,y-8,200,8);
 [-110,40].forEach((tx,i)=>{T(g,x+tx,y-30-i*6,1,()=>{rect(g,'#7a5a38',-24,-150,48,150);for(let q=0;q<4;q++){rect(g,'#5a4026',-24,-q*38,48,3);ln(g,'#5a4026',2,[-24,-q*38,24,-(q+1)*38])}rect(g,'#6a4a2a',-30,-158,60,10);poly(g,'#b8302a',[[-4,-160],[-4,-180],[18,-172]])})});
 G.trir(g,x+150,y-60,.5,t,-1,'#e8e0cc');for(let q=0;q<3;q++)P(g,x-210+q*40,y+16,t+q,{s:.62,top:'#d8cfb8',bot:'#a88a5a',hair:'#2a1a10',acc:(g2,b)=>{rect(g2,'#a8a090',10,-60,18,14)}})};

SC.menfi=(g,x,y,t)=>{T(g,x-80,y,1,()=>pilone(g,260,150,'#e8d4a0'));T(g,x+190,y,1,()=>obel(g,170,'#d8a878'));
 const sf=(sx)=>{poly(g,'#d8b878',[[sx-40,y],[sx-38,y-20],[sx,y-26],[sx+34,y-22],[sx+36,y]]);poly(g,'#d8b878',[[sx+30,y-22],[sx+32,y-50],[sx+50,y-54],[sx+56,y-26]]);dot(g,'#d8b878',sx+46,y-60,10);poly(g,'#2a5aa8',[[sx+36,y-70],[sx+56,y-66],[sx+58,y-44],[sx+34,y-48]]);rect(g,'#d8b878',sx+34,y-26,10,26)};sf(x-180);
 T(g,x+90,y+12,1,()=>{el(g,'#17171c',0,-36,34,20);poly(g,'#17171c',[[26,-46],[48,-62],[56,-52],[40,-34]]);poly(g,'#f4f4f0',[[46,-58],[51,-52],[46,-50]]);ln(g,'#17171c',2.6,[44,-62,40,-72]);ln(g,'#17171c',2.6,[52,-60,56,-70]);dot(g,GLD,48,-76,5);for(const lx of[-22,-10,16,26])rect(g,'#17171c',lx-2,-22,5,22)});
 P(g,x+150,y+16,t,{s:.8,f:-1,top:'#f4eedc',bot:'#f4eedc',skin:'#b88458',hair:'#b88458',acc:(g2,b)=>{ln(g2,'#e0b84a',2.4,[-12,-92+b,12,-92+b])}})};

SC.siwa=(g,x,y,t)=>{poly(g,'#e8d49c',[[x-270,y],[x-200,y-50],[x-120,y-20],[x-60,y]]);poly(g,'#d8bc80',[[x+270,y],[x+190,y-60],[x+110,y-24],[x+60,y]]);
 el(g,'#f4f2ea',x-20,y-8,150,16);el(g,'#4a9ac8',x-20,y-10,140,13);for(let q=0;q<6;q++)el(g,'rgba(255,255,255,.4)',x-100+q*32+((t*8+q*9)%24),y-10+(q%3)*3,8,1.3);
 T(g,x+120,y,1,()=>{roccia(g,160,110,'#c8a868',false);G.tmp(g,0,-100,4,20,34,{c:'#e0c898',c2:'#c8a868',tym:'#b89858'})});
 [[-130,1.6],[-90,1.2],[-40,1.4],[40,1.3],[80,1.7]].forEach((p,i)=>T(g,x+p[0],y-2,1,()=>palma(g,p[1],t+i)));MS.cammello(g,x-200,y+20,.8,t,1)};

SC.alessandria=(g,x,y,t)=>{pozza(g,x-190,y-52,100,16,t);poly(g,'#e0cc94',[[x-270,y+40],[x-270,y-30],[x+270,y-30],[x+270,y+40]]);
 const L=(p)=>{g.strokeStyle='rgba(255,252,240,.95)';g.lineWidth=3.4;g.beginPath();g.moveTo(p[0][0],p[0][1]);for(let i=1;i<p.length;i++)g.lineTo(p[i][0],p[i][1]);g.stroke()};L([[x-120,y+6],[x+120,y+6],[x+90,y+36],[x-90,y+36],[x-120,y+6]]);L([[x-30,y+6],[x-26,y+36]]);L([[x+30,y+6],[x+26,y+36]]);
 for(const sx of[-120,120,-90,90]){ln(g,'#6a4a2a',2,[x+sx,y+6,x+sx,y-8])}
 for(let q=0;q<8;q++){const bx=x-100+q*28+Math.sin(t*2+q)*3,by=y+22+(q%3)*5;el(g,'#f4f4f0',bx,by,4,2.4);dot(g,'#f4f4f0',bx+3,by-2,1.6)}
 for(let q=0;q<5;q++){const bx=((q*97+t*40)%300)+x-150,by=y-100-q*12+Math.sin(t*3+q)*4;ln(g,'#f4f4f0',2,[bx-8,by+3,bx,by,bx+8,by+3])}
 uomo(g,x+180,y+16,t,{s:.84,f:-1,top:'#8a9ac8',bot:'#8a9ac8',long:true,hair:'#5a4a3a'},(g2,b)=>{rect(g2,'#e8dcc0',-30,-70+b,26,18);ln(g2,'#8a6a40',1.4,[-26,-66+b,-8,-66+b]);ln(g2,'#8a6a40',1.4,[-26,-60+b,-14,-60+b])});
 P(g,x-190,y+18,t,{s:.84,top:'#b8302a',bot:'#efe8d4',hair:'#c89a50',acc:elmo})};

SC.faro=(g,x,y,t)=>{T(g,x,y,1,()=>{rect(g,'#e8e4d8',-38,-120,76,120);rect(g,'rgba(0,0,0,.12)',14,-120,24,120);rect(g,'#d8d4c8',-42,-124,84,6);poly(g,'#e8e4d8',[[-26,-120],[-24,-210],[24,-210],[26,-120]]);rect(g,'rgba(0,0,0,.12)',8,-210,16,90);rect(g,'#d8d4c8',-28,-214,56,6);rect(g,'#e8e4d8',-16,-264,32,52);rect(g,'#2a2030',-9,-250,18,26);for(let q=0;q<3;q++)ar(g,'#2a2030',-6,-130-q*0,12,26);poly(g,'#e8e4d8',[[-22,-264],[0,-282],[22,-264]]);dot(g,GLD,0,-286,4);glow(g,0,-238,90,'255,190,90',.6+.1*Math.sin(t*5));const fl=Math.sin(t*9)*2;poly(g,'#ffa84a',[[-6,-226],[0,-250+fl],[6,-226]]);poly(g,'#ffe27a',[[-3,-226],[0,-242+fl],[3,-226]])});
 G.tmp(g,x-200,y,6,22,46,{c:MAR,c2:MAR2,tym:'#a8503a'});for(let q=0;q<4;q++)rect(g,'#e8dcb0',x-232+q*14,y-30,9,12);
 T(g,x+190,y,1,()=>{rect(g,MAR,-44,-50,88,50);poly(g,MAR,[[-50,-50],[0,-80],[50,-50]]);rect(g,'#e0b84a',-26,-30,52,20);rect(g,'#b88a2a',-26,-30,52,4);G.col(g,-40,0,50,10,MAR,MAR2);G.col(g,40,0,50,10,MAR,MAR2)});
 pozza(g,x+60,y-30,70,10,t)};
/* ---- zone 5-6: Gaugamela, Babilonia, Persepoli, Hindu Kush ---- */
const ruota=(g,x,y,r,c,n)=>{dot(g,'#3a2a16',x,y,r);dot(g,c||'#8a6a3a',x,y,r*.82);dot(g,'#3a2a16',x,y,r*.18);for(let q=0;q<(n||8);q++)ln(g,'#3a2a16',1.6,[x,y,x+Math.cos(q*Math.PI*2/(n||8))*r*.82,y+Math.sin(q*Math.PI*2/(n||8))*r*.82])};

SC.gaugamela=(g,x,y,t)=>{for(let q=0;q<7;q++)el(g,'rgba(220,186,120,.45)',x-210+q*60,y-6+(q%2)*6,50,12);
 [[0,0],[-70,14],[70,14],[-140,28],[140,28],[-28,32],[28,32]].forEach((p,i)=>cav(g,x+p[0]+Math.sin(t*3+i)*2,y+p[1]-6,t,.78,1,['#8a5a3a','#17171c','#c8b890','#5a3a22'][i%4],i==0?'#efe8d4':'#b8302a'));
 T(g,x-210,y+4,1,()=>{rect(g,'#e0b84a',-26,-50,52,24);ruota(g,-14,-14,16,'#c8a040');ruota(g,16,-14,16,'#c8a040');poly(g,'#7a2a6a',[[-30,-50],[0,-76],[30,-50]]);ln(g,'#6a4a2a',3,[26,-40,60,-30])});fumo(g,x-190,y-10,t,'#d8c498',3)};

SC.eclissi=(g,x,y,t)=>{const mx=x,my=y-210;dot(g,'rgba(255,200,150,.18)',mx,my,48);dot(g,'#c86a4a',mx,my,26);dot(g,'#9a3a2a',mx+6,my+2,22);dot(g,'rgba(60,20,20,.35)',mx+12,my+4,16);
 uomo(g,x-40,y+12,t,{s:.88,top:'#efe8d4',bot:'#efe8d4',long:true,hair:'#4a3a2a'},(g2,b)=>{barba(g2,b,'#4a3a2a');ln(g2,SKN[1],7,[-12,-84+b,-24,-120+b]);ln(g2,SKN[1],7,[12,-84+b,24,-120+b])});
 [[-150,1],[-110,-1],[60,-1],[100,1],[150,-1]].forEach((p,i)=>sol(g,x+p[0],y+14+(i%2)*6,t,i,p[1],.66,200));for(const tx of[-80,80])G.torcia(g,x+tx,y+20,t,.6)};

SC.carri=(g,x,y,t)=>{const car=(cx,cy,f)=>{T(g,cx,cy,f,()=>{rect(g,'#a8503a',-26,-44,52,20);rect(g,'#7a5a38',-26,-26,52,5);ruota(g,0,-16,18,'#6a4a2a',10);for(let q=0;q<8;q++){const a=q*Math.PI/4+t*4;ln(g,'#c8c8d0',2,[Math.cos(a)*18,-16+Math.sin(a)*18,Math.cos(a)*30,-16+Math.sin(a)*30])}ln(g,'#9a9aa2',3,[-34,-16,34,-16]);ln(g,'#6a4a2a',4,[26,-36,58,-30])})};car(x-100,y,1);car(x+120,y+10,1);
 G.cavallo(g,x-20,y,.8,t,1,'#4a3a2a');G.cavallo(g,x+210,y+10,.8,t,1,'#8a5a3a');for(let q=0;q<3;q++)P(g,x+10+q*34,y+22,t+q,{s:.66,f:-1,top:'#d8d0b8',bot:'#9a7a58',hair:'#2a1a10',acc:(g2,b)=>{ln(g2,'#6a4a2a',2,[10,-60,-34,-72]);poly(g2,'#9a9aa2',[[-34,-72],[-40,-70],[-34,-68]])}})};

SC.babilonia=(g,x,y,t)=>{rect(g,'#2a5aa8',x-110,y-190,220,190);rect(g,'rgba(0,0,0,.14)',x+70,y-190,40,190);for(const tx of[-110,110]){rect(g,'#2a5aa8',x+tx-30,y-230,60,230);for(let q=0;q<3;q++)rect(g,'#2a5aa8',x+tx-30+q*22,y-244,14,14)}
 ar(g,'#2a1c10',x-48,y,96,126);for(let r=0;r<4;r++)for(let q=0;q<5;q++){const bx=x-96+q*40+(q>1?24:0),by=y-30-r*38;if(Math.abs(bx-x)<50&&by>y-120)continue;el(g,r%2?'#efe0b0':'#e8c860',bx+8,by-8,10,6);rect(g,r%2?'#efe0b0':'#e8c860',bx,by-8,16,8);dot(g,'#2a2018',bx+14,by-12,1)}
 for(let q=0;q<22;q++)dot(g,['#f0a8c0','#f4f4f4','#e8c860'][q%3],x-220+hr(q)*440,y+10+hr(q+5)*30,2);braciere(g,x-190,y+8,t,.9);braciere(g,x+190,y+8,t,.9);fumo(g,x-190,y-24,t,'#e8e4dc',3)};

SC.tavolette=(g,x,y,t)=>{rect(g,'#c8a070',x-240,y-70,100,70);rect(g,'#a88050',x-244,y-74,108,6);for(let r=0;r<3;r++)for(let q=0;q<5;q++)rect(g,'#b88a58',x-232+q*18,y-62+r*20,14,16);
 rect(g,'#7a5a38',x-110,y-40,150,8);rect(g,'#7a5a38',x-100,y-32,6,32);rect(g,'#7a5a38',x+26,y-32,6,32);
 for(let q=0;q<5;q++){const tx=x-100+q*26;rect(g,'#b88a58',tx,y-58,22,18);for(let r=0;r<3;r++)for(let k=0;k<4;k++)if(hr(q*9+r*5+k)>.3)rect(g,'rgba(60,40,20,.6)',tx+3+k*5,y-54+r*5,3,1.5)}
 for(let q=0;q<7;q++){const sx=x+170+q*12,sy=y-200+((q*37)%70),tw=.5+.5*Math.sin(t*2+q);dot(g,'rgba(255,250,220,'+(.4+.5*tw)+')',sx,sy,1.4)}};

SC.susa=(g,x,y,t)=>{rect(g,'#3a6ab0',x-250,y-120,500,120);for(let q=0;q<8;q++){const bx=x-230+q*60;poly(g,'#e8c860',[[bx,y-20],[bx+14,y-50],[bx+44,y-50],[bx+54,y-26],[bx+40,y-26],[bx+20,y-30]]);dot(g,'#e8c860',bx+48,y-58,5)}
 rect(g,'#c8a040',x-70,y-12,140,12);rect(g,'#e0b84a',x-60,y-26,120,16);rect(g,'#7a5a38',x-40,y-130,80,106);rect(g,'#e0b84a',x-44,y-140,88,14);rect(g,'#b8302a',x-30,y-100,60,50);rect(g,'#e0b84a',x-44,y-76,88,5);rect(g,'#c8a040',x-20,y-8,40,8);
 for(let q=0;q<8;q++)dot(g,'#f0d060',x+130+q*12+(q%2)*4,y-4-(q%3)*5,3.6);rect(g,'#7a5a38',x+110,y-40,80,40);rect(g,'#c8a040',x+110,y-44,80,5);
 P(g,x+100,y+16,t,{s:.74,f:-1,top:'#efe8d4',bot:'#efe8d4',hair:'#c89a50'});P(g,x-130,y+14,t,{s:.8,top:'#7a6a4a',bot:'#9a7a58',long:true,hair:'#bdb8a8',acc:(g2,b)=>{barba(g2,b,'#bdb8a8')}})};

SC.persepoli=(g,x,y,t)=>{for(let i=0;i<5;i++)rect(g,i%2?'#cfc6b0':'#d8cfb8',x-250+i*6,y-i*14,500-i*12,14);rect(g,'#b8ae94',x-250,y-70,500,8);
 T(g,x,y-70,1,()=>{for(let q=0;q<5;q++){const cx=-170+q*85;rect(g,'#d8d0bc',cx-9,-120,18,120);rect(g,'rgba(255,255,255,.3)',cx-9,-120,5,120);rect(g,'rgba(0,0,0,.12)',cx+2,-120,7,120);rect(g,'#d8d0bc',cx-14,-132,28,12);el(g,'#d8d0bc',cx-16,-138,12,7);el(g,'#d8d0bc',cx+16,-138,12,7);rect(g,'#d8d0bc',cx-22,-144,44,6);dot(g,'#2a2018',cx-24,-140,1.4);dot(g,'#2a2018',cx+24,-140,1.4)}rect(g,'#c8c0aa',-190,-150,380,8)});
 for(let q=0;q<10;q++){const sx=x-130+q*30;rect(g,'rgba(60,50,40,.35)',sx,y-60+(q%2)*0,4,10);}
 G.asino(g,x-200,y+20,.9,t,1);G.asino(g,x+210,y+24,.9,t,-1);rect(g,'#c8a040',x-216,y-8,24,8)};

SC.incendio=(g,x,y,t)=>{const fl=Math.sin(t*8)*6;glow(g,x,y-120,260,'255,140,50',.55+.1*Math.sin(t*5));
 for(let q=0;q<7;q++){const cx=x-180+q*60,h=[130,150,110,150,150,90,140][q];rect(g,'#3a3430',cx-10,y-h,20,h);rect(g,'rgba(255,150,60,.3)',cx-10,y-h,5,h)}rect(g,'#2a2420',x-200,y-166,400,12);
 for(let q=0;q<9;q++){const fx=x-190+q*48+hr(q)*10,fh=60+hr(q+3)*50+Math.sin(t*7+q)*10;poly(g,'#e8702a',[[fx-14,y-110],[fx-4,y-110-fh],[fx+4,y-110-fh*.45],[fx+14,y-110-fh*.8],[fx+22,y-110]]);poly(g,'#ffd24a',[[fx-6,y-110],[fx,y-110-fh*.6],[fx+8,y-110]])}
 fumo(g,x-60,y-150,t,'#4a4440',5);fumo(g,x+90,y-150,t+1,'#4a4440',5);
 for(let q=0;q<5;q++)sol(g,x-120+q*56,y+16+(q%2)*4,t,q,q%2?-1:1,.62,120);G.torcia(g,x-210,y+20,t,.9);G.torcia(g,x+210,y+20,t,.9)};

SC.dario=(g,x,y,t)=>{poly(g,'#8a6a4a',[[x-270,y],[x-270,y-60],[x-200,y-84],[x-120,y-40],[x-80,y]]);T(g,x-20,y+8,1,()=>{rect(g,'#7a5a38',-44,-52,88,22);ruota(g,-26,-16,18,'#6a4a2a');ruota(g,26,-16,18,'#6a4a2a');rect(g,'#a8503a',-44,-70,88,20);poly(g,'#8a6a4a',[[-48,-70],[0,-96],[48,-70]]);ln(g,'#6a4a2a',4,[44,-40,86,-30])});
 poly(g,'#7a2a6a',[[x+80,y+20],[x+90,y+6],[x+140,y+2],[x+190,y+10],[x+200,y+22],[x+140,y+30]]);poly(g,'rgba(255,255,255,.12)',[[x+90,y+6],[x+140,y+2],[x+130,y+12]]);dot(g,GLD,x+160,y+8,6);el(g,GLD,x+160,y+8,10,3.4);dot(g,'#2a1a10',x+160,y+8,3);
 P(g,x+150,y-6,t,{s:.8,f:-1,top:'#b8302a',bot:'#efe8d4',hair:'#c89a50',acc:(g2,b)=>{elmo(g2,b)}})};

SC.hindukush=(g,x,y,t)=>{T(g,x-190,y,1,()=>roccia(g,260,220,'#8a90a8',true));T(g,x+200,y,1,()=>roccia(g,200,150,'#7a82a0',true));
 for(let q=0;q<4;q++)P(g,x-40+q*44,y+14-q*2,t+q,{s:.7,top:'#7a6a52',bot:'#4a3a2a',hair:'#2a1a10',acc:(g2,b)=>{poly(g2,'#9a8a72',[[-14,-112+b],[0,-120+b],[14,-112+b],[16,-86+b],[-16,-86+b]]);dot(g2,'#f4f4f8',-8,-90+b,2)}});
 G.asino(g,x+150,y+16,.9,t,-1);G.asino(g,x+110,y+22,.85,t,-1);braciere(g,x-90,y+22,t,.9);for(let q=0;q<12;q++)el(g,'rgba(245,248,252,.8)',x-240+hr(q)*480,y+6+hr(q+7)*20,12+hr(q)*10,3)};

SC.marakanda=(g,x,y,t)=>{rect(g,'#6a4a2a',x-220,y-150,440,10);for(const bx of[-210,-70,70,210])rect(g,'#6a4a2a',x+bx-5,y-150,10,150);poly(g,'#b8302a',[[x-220,y-140],[x+220,y-140],[x+220,y-108],[x+180,y-100],[x+140,y-108],[x+90,y-100],[x+40,y-108],[x-10,y-100],[x-60,y-108],[x-110,y-100],[x-160,y-108],[x-220,y-100]]);
 rect(g,'#7a5a38',x-180,y-38,360,8);rect(g,'#5a4026',x-170,y-30,6,30);rect(g,'#5a4026',x+164,y-30,6,30);for(let q=0;q<8;q++){const cx=x-150+q*44;el(g,'#e0b84a',cx,y-42,6,3);rect(g,'#e0b84a',cx-1,y-42,2,4)}
 ln(g,'#6a4a2a',3,[x+40,y+16,x+110,y+10]);poly(g,'#9a9aa2',[[x+108,y+8],[x+114,y+10],[x+108,y+14]]);el(g,'#7a2a6a',x-100,y+16,12,6);el(g,'#e0b84a',x-88,y+20,5,2.4);
 [[-160,1],[-60,-1],[50,1],[150,-1]].forEach((p,i)=>P(g,x+p[0],y+8,t+i,{s:.7,f:p[1],top:['#efe8d4','#a8503a','#d8c8a0','#8a9ac8'][i],bot:'#efe8d4',hair:'#3a2a1a'}));G.torcia(g,x-215,y+22,t,.9);G.torcia(g,x+215,y+22,t,.9)};

SC.roccia=(g,x,y,t)=>{T(g,x,y,1,()=>{poly(g,'#8a7a68',[[-150,0],[-130,-120],[-120,-250],[-70,-300],[60,-310],[110,-260],[120,-130],[160,0]]);poly(g,'rgba(0,0,0,.2)',[[60,-310],[110,-260],[120,-130],[160,0],[40,0]]);for(let q=0;q<8;q++)ln(g,'rgba(0,0,0,.18)',2,[-110+q*28,-20,-100+q*28,-100-hr(q)*160]);muro(g,150,34,'#c8bea4',true);});
 g.save();g.translate(x,y);rect(g,'#c8bea4',-80,-338,150,28);for(let q=0;q<9;q++)rect(g,'#c8bea4',-80+q*17,-346,10,8);g.restore();
 for(let q=0;q<5;q++){const cx=x-80+q*40,cy=y-30-q*50;ln(g,'#c8a868',1.6,[cx,cy,cx+10,cy-60]);dot(g,'#3a2a1a',cx,cy,3);dot(g,'#3a2a1a',cx+10,cy-60,3)}glow(g,x+40,y-332,40,'255,190,90',.5);
 sol(g,x+190,y+14,t,1,-1,.7,200)};
/* ---- zone 7-8: India, Susa e Babilonia ---- */
const zebu=(g,x,y,s,f)=>{g.save();g.translate(x,y);g.scale(f*s,s);el(g,'#f0ece0',0,-34,28,16);dot(g,'#e4dfd0',-10,-50,7);poly(g,'#f0ece0',[[20,-44],[40,-56],[44,-44],[26,-26]]);ln(g,'#c8c0a8',2,[40,-56,46,-68]);for(const lx of[-18,-8,12,22])rect(g,'#e4dfd0',lx-2,-26,5,26);g.restore()};

SC.taxila=(g,x,y,t)=>{T(g,x-120,y,1,()=>banyan(g,2.4));FE.fel(g,x+100,y+14,.9,t,-1);FE.fel(g,x+210,y+22,.74,t,-1);
 [[-130,1],[-100,-1]].forEach((p,i)=>P(g,x+p[0],y+14,t+i,{s:.8,f:p[1],top:'#f4f0e4',bot:'#f4f0e4',skin:'#8a5a3a',hair:'#8a8a8a',long:true,acc:(g2,b)=>{ln(g2,'#8a8a8a',2,[-4,-92+b,-8,-70+b]);rect(g2,'#e8c860',-8,-70+b,16,3)}}));zebu(g,x-230,y+16,.9,1)};

SC.idaspe=(g,x,y,t)=>{pozza(g,x,y-30,250,40,t,'#8a7a5a','#6a5a3a');
 T(g,x,y-80,1,()=>{for(let q=0;q<7;q++){glow(g,-200+q*66,-4,24,'255,160,60',.5);dot(g,'#ffc060',-200+q*66,-4,2)}for(let q=0;q<3;q++)el(g,'rgba(90,90,100,.6)',-150+q*120,-14,12,6)});
 for(let k=0;k<2;k++){T(g,x-100+k*170,y-26+Math.sin(t*2+k)*2,1,()=>{rect(g,'#9a7a4a',-50,-6,100,10);for(let q=0;q<6;q++)rect(g,'#7a5a30',-50+q*17,-6,2,10);for(let q=0;q<3;q++)sol(g,-30+q*30,-4,t,q+k*4,1,.56,180)})}
 for(let q=0;q<3;q++)ln(g,'rgba(40,40,50,.7)',6,[x-220+q*160,y-190,x-250+q*160,y-150])};

SC.poro=(g,x,y,t)=>{FE.fel(g,x-50,y+14,1.1,t,1);T(g,x-60,y-60,1,()=>{rect(g,'#9a7a4a',-30,-40,60,26);rect(g,'#7a5a30',-30,-40,60,4);for(let q=0;q<2;q++)P(g,-14+q*26,-40,t,{s:.38,top:'#efe8d4',bot:'#efe8d4',skin:'#8a5a3a',hair:'#14100c'})});
 P(g,x+90,y+14,t,{s:1.02,f:-1,top:'#d8302a',bot:'#f4f0e4',skin:'#8a5a3a',hair:'#14100c',acc:(g2,b)=>{rect(g2,'#efe8d4',6,-92+b,14,10);rect(g2,'#e0b84a',-14,-94+b,28,3)}});
 P(g,x+170,y+14,t,{s:.8,top:'#b8302a',bot:'#efe8d4',hair:'#c89a50',acc:elmo});for(let q=0;q<2;q++)sol(g,x+230+q*26,y+16,t,q,-1,.64,200)};

SC.bucefala=(g,x,y,t)=>{el(g,'rgba(0,0,0,.25)',x,y+8,86,6);for(const lx of[-36,-22,24,40])ln(g,'#17171c',5,[x+lx,y-10,x+lx+(lx>0?30:-26),y-3]);el(g,'#17171c',x,y-20,56,17);el(g,'#2a2a30',x-6,y-26,30,6);poly(g,'#17171c',[[x+40,y-32],[x+74,y-22],[x+84,y-6],[x+60,y-4],[x+44,y-14]]);poly(g,'#17171c',[[x+78,y-18],[x+104,y-10],[x+106,y-2],[x+82,y-2]]);dot(g,'#f6f4ee',x+96,y-9,2);ln(g,'#17171c',3,[x+76,y-20,x+80,y-30]);ln(g,'#17171c',3,[x-54,y-22,x-82,y-6]);
 for(let q=0;q<10;q++){const a2=q*.63;dot(g,['#f0a8c0','#e8d870','#f4f4f4'][q%3],x+150+Math.cos(a2)*26,y+12+Math.sin(a2)*6,3)}

 T(g,x+190,y,1,()=>{tumulo(g,150,40,'#8a8a50');rect(g,'#c8c0aa',-8,-62,16,40);rect(g,'#d8d0bc',-12,-66,24,6)});
 for(let q=0;q<4;q++){const px=x-150+q*40;ln(g,'#c8a868',2,[px,y+14,px,y+14]);}
 [[-190,1],[-150,1],[-110,-1]].forEach((p,i)=>P(g,x+p[0],y+12+(i%2)*4,t+i,{s:.74,f:p[1],top:'#d8d0b8',bot:'#9a7a58',hair:'#3a2a1a',acc:(g2,b)=>{el(g2,'#8a8a92',-16,-60+b,7,4)}}));
 for(let q=0;q<5;q++)rect(g,'rgba(120,110,90,.5)',x-260+q*30,y+22,24,4)};

SC.ifasi=(g,x,y,t)=>{pozza(g,x-170,y-40,100,16,t,'#7a8a6a','#5a6a4a');for(let q=0;q<12;q++){const ax=x-150+q*24,ah=34+(q%3)*8;rect(g,'#c8c0aa',ax-8,y-ah,16,ah);rect(g,'rgba(0,0,0,.14)',ax+2,y-ah,6,ah);rect(g,'#d8d0bc',ax-10,y-ah-4,20,4);if(q%4==0){fuoco(g,ax,y-ah-4,t,.4)}}
 T(g,x+190,y+4,1,()=>{tenda(g,150,100,'#b8302a','#8a2018');poly(g,'#8a2018',[[-18,0],[0,-52],[18,0]])});
 for(let q=0;q<4;q++)P(g,x-120+q*60,y+22,t+q,{s:.66,top:'#d8d0b8',bot:'#9a7a58',hair:'#3a2a1a',skin:SKN[q%4]});};

SC.oceano=(g,x,y,t)=>{poly(g,'#e0cc94',[[x-270,y],[x-270,y-34],[x-120,y-44],[x-40,y]]);poly(g,'#d8bc80',[[x+270,y],[x+270,y-50],[x+160,y-60],[x+60,y]]);pozza(g,x,y-30,200,30,t,'#6a8a8a','#4a6a6a');
 G.trir(g,x-60,y-38,.6,t,1,'#e8e0cc');G.trir(g,x+80,y-34,.5,t,1,'#e8e0cc');for(let q=0;q<4;q++)P(g,x-230+q*38,y+18+(q%2)*4,t+q,{s:.64,top:'#d8d0b8',bot:'#9a7a58',hair:'#3a2a1a',acc:(g2,b)=>{ln(g2,'#6a4a2a',2,[-10,-70,-14,-20]);el(g2,'#c8b890',-12,-76+b,12,6)}});G.torcia(g,x+200,y+22,t,.9)};

SC.nozze=(g,x,y,t)=>{rect(g,'#6a2a5a',x-250,y-190,500,190);rect(g,'#2a1020',x-230,y-170,460,170);poly(g,'#e0b84a',[[x-250,y-190],[x+250,y-190],[x+250,y-170],[x+220,y-162],[x+160,y-170],[x+100,y-162],[x+40,y-170],[x-20,y-162],[x-80,y-170],[x-140,y-162],[x-200,y-170],[x-250,y-162]]);
 for(const cx of[-230,-120,0,120,230])rect(g,'#e0b84a',x+cx-6,y-170,12,170);
 for(let q=0;q<5;q++){const cx=x-180+q*90,ca=['#2a8a7a','#a8503a','#8a9ac8','#c8a0c0','#e8c860'][q];P(g,cx-12,y+10,t+q,{s:.82,top:'#efe8d4',bot:'#efe8d4',hair:'#3a2a1a'});P(g,cx+14,y+12,t+q,{s:.76,f:-1,top:ca,bot:ca,long:true,hair:'#14100c',acc:velata(ca,'#e0b84a')})}
 braciere(g,x-240,y+10,t,1);braciere(g,x+240,y+10,t,1);glow(g,x,y-90,200,'255,190,90',.3)};

SC.opis=(g,x,y,t)=>{pozza(g,x-200,y-50,90,14,t,'#5a7a9a','#3a5a7a');
 for(let q=0;q<7;q++)P(g,x-90+q*42,y-4,t+q,{s:.66,top:['#efe8d4','#a8503a','#8a9ac8','#d8c8a0'][q%4],bot:'#efe8d4',hair:'#3a2a1a',skin:SKN[q%4]});
 rect(g,'#efe8d8',x-130,y-36,300,8);rect(g,'#7a5a38',x-120,y-28,6,28);rect(g,'#7a5a38',x+156,y-28,6,28);for(let q=0;q<9;q++){const cx=x-110+q*32;el(g,'#e0b84a',cx,y-40,6,2.8);rect(g,'#e0b84a',cx-1,y-40,2,4)}G.anf(g,x+60,y-36,.6,'#c0603a');
 lamp(g,x-150,y+10,t,1);lamp(g,x+190,y+10,t,1);P(g,x+220,y+14,t,{s:.8,f:-1,top:'#b8302a',bot:'#efe8d4',hair:'#c89a50'});G.cavallo(g,x-250,y+30,.5,t,1,'#8a5a3a')};

SC.ecbatana=(g,x,y,t)=>{[[240,40,'#7a2a6a'],[190,40,'#e0b84a'],[140,40,'#7a2a6a'],[90,40,'#e0b84a']].forEach((tr,i)=>{rect(g,tr[2],x-tr[0]/2,y-(i+1)*38,tr[0],38);rect(g,'rgba(255,255,255,.14)',x-tr[0]/2,y-(i+1)*38,tr[0],3);rect(g,'rgba(0,0,0,.14)',x+tr[0]*.2,y-(i+1)*38,tr[0]*.3,38)});
 for(let q=0;q<9;q++)dot(g,['#f0a8c0','#e8d870','#f4f4f4'][q%3],x-110+q*28,y-4,5);poly(g,'#e0b84a',[[x-30,y-152],[x,y-182],[x+30,y-152]]);glow(g,x,y-100,150,'255,170,70',.3+.1*Math.sin(t*6));
 for(const hx of[-250,250])G.torcia(g,x+hx,y+20,t,1);G.cavallo(g,x-190,y+16,.9,t,1,'#3a2a22');G.cavallo(g,x+200,y+16,.9,t,-1,'#2a2a30');
 for(let q=0;q<3;q++)P(g,x-120+q*34,y+22,t+q,{s:.66,top:'#3a3430',bot:'#3a3430',long:true,hair:'#2a1a10'})};

SC.banchetto=(g,x,y,t)=>{rect(g,'#6a4a2a',x-260,y-150,520,8);for(const bx of[-250,250])rect(g,'#6a4a2a',x+bx-6,y-150,12,150);poly(g,'#7a2a6a',[[x-260,y-142],[x+260,y-142],[x+260,y-100],[x+200,y-94],[x+140,y-100],[x+80,y-94],[x+20,y-100],[x-40,y-94],[x-100,y-100],[x-160,y-94],[x-260,y-100]]);
 T(g,x-10,y,1,()=>{rect(g,'#7a5a38',-110,-44,220,10);rect(g,'#b8302a',-108,-54,216,12);for(const lx of[-100,100])rect(g,'#5a4026',lx-4,-34,8,34);rect(g,'#efe8d8',-100,-66,36,14);el(g,SKN[1],-76,-66,10,8);dot(g,'#3a2a1a',-80,-70,8);poly(g,'#efe8d4',[[-60,-60],[100,-54],[100,-44],[-60,-44]]);ln(g,'#e0b84a',2,[-60,-52,100,-48]);rect(g,'#7a5a38',-110,-70,6,26)});
 lamp(g,x+150,y-30,t,1.3);rect(g,'#7a5a38',x+130,y-30,50,5);rect(g,'#7a5a38',x+134,y-26,4,26);rect(g,'#7a5a38',x+172,y-26,4,26);el(g,'#e0b84a',x+150,y-40,6,2.8);
 P(g,x-170,y+16,t,{s:.8,top:'#efe8d4',bot:'#efe8d4',long:true,hair:'#4a3a2a',acc:(g2,b)=>{barba(g2,b,'#4a3a2a')}});P(g,x+210,y+16,t,{s:.8,f:-1,top:'#8a9ac8',bot:'#efe8d4',hair:'#3a2a1a'})};

SC.sfilata=(g,x,y,t)=>{T(g,x+130,y,1,()=>{rect(g,'#7a5a38',-80,-44,150,10);rect(g,'#b8302a',-78,-54,146,12);for(const lx of[-70,60])rect(g,'#5a4026',lx-4,-34,8,34);rect(g,'#efe8d8',-70,-66,30,14);dot(g,SKN[1],-48,-64,8);dot(g,'#3a2a1a',-52,-68,6);poly(g,'#efe8d4',[[-34,-60],[60,-54],[60,-44],[-34,-44]]);ln(g,SKN[1],4,[-30,-60,-12,-82]);dot(g,GLD,-10,-84,3.4);glow(g,-10,-84,34,'255,214,120',.7)});
 for(let q=0;q<6;q++)sol(g,x-230+q*50,y+10+(q%2)*5,t+q,q,1,.7,0);for(let q=1;q<3;q++)P(g,x+90+q*40,y+22,t+q,{s:.76,f:-1,top:['#a8503a','#8a9ac8','#efe8d4'][q],bot:'#efe8d4',hair:'#3a2a1a'});lamp(g,x+230,y+14,t,1.2)};

SC.carro=(g,x,y,t)=>{for(const wx of[-140,-60,60,140]){ruota(g,x+wx,y-4,22,'#c8a040',10)}rect(g,'#b88a2a',x-170,y-34,340,16);rect(g,'#e0b84a',x-176,y-40,352,8);
 rect(g,'#2a1a3a',x-94,y-170,188,130);glow(g,x,y-100,150,'255,200,120',.18);
 for(const cx of[-164,-120,-76,76,120,164]){rect(g,'#e0b84a',x+cx-5,y-176,10,136);rect(g,'rgba(255,255,255,.35)',x+cx-5,y-176,3,136);dot(g,'#e8d078',x+cx,y-178,7)}
 poly(g,'#e0b84a',[[x-190,y-178],[x,y-222],[x+190,y-178]]);for(let q=0;q<13;q++)dot(g,q%2?'#c8a040':'#e8d078',x-180+q*30,y-182+Math.abs(q-6)*-3.4-4,9);poly(g,'#b88a2a',[[x-170,y-182],[x,y-214],[x+170,y-182],[x,y-196]]);dot(g,'#c8a040',x,y-228,6);
 for(let q=0;q<14;q++)dot(g,['#f0a8c0','#4a8a3a','#e8d870'][q%3],x-170+q*26,y-176,3.4);
 for(const lx of[-186,186]){ln(g,'#3a2a1a',2,[x+lx,y-176,x+lx,y-150]);glow(g,x+lx,y-142,50,'255,190,90',.5+.1*Math.sin(t*6+lx));dot(g,'rgba(255,214,130,.95)',x+lx,y-142,4)}
 G.asino(g,x-250,y+22,1.2,t,1);G.asino(g,x-215,y+30,1.1,t,1)};

const PN=['campi','pella','bucefalo','mieza','falange','aigai','cheronea','corinto','delfi','tebe','partenza','ellesponto','troia','granico','efeso','gordio','tarso','isso','tiro','molo','menfi','siwa','alessandria','faro','gaugamela','eclissi','carri','babilonia','tavolette','susa','persepoli','incendio','dario','hindukush','marakanda','roccia','taxila','idaspe','poro','bucefala','ifasi','oceano','nozze','opis','ecbatana','banchetto','sfilata','carro'];
PN.forEach(n=>{PR['alx'+n]=AL(SC[n])});
/* targa di zona: titolo e data */
PR.alxtarga=AL((g,x,y,t,a)=>{rect(g,'#8a8270',x-78,y-92,156,72);rect(g,'rgba(255,255,255,.14)',x-78,y-92,156,4);rect(g,'#6a6252',x-86,y-22,172,10);rect(g,'rgba(0,0,0,.18)',x+30,y-92,48,72);txt(g,a[0],x,y-60,a[0].length>16?11:a[0].length>13?13:16,'#f4ecd4','900');ln(g,'#e0b84a',2,[x-64,y-50,x+64,y-50]);txt(g,a[1],x,y-34,11,'#e8dcc0','700')});
const T0=[['MACEDONIA','356 – 336 a.C.'],['GRECIA','338 – 334 a.C.'],['ASIA MINORE','334 – 333 a.C.'],['TIRO · EGITTO','332 – 331 a.C.'],['GAUGAMELA · BABILONIA','331 a.C.'],['PERSEPOLI · BATTRIANA','330 – 327 a.C.'],['INDIA','326 – 325 a.C.'],['SUSA · BABILONIA','324 – 323 a.C.']];
/* ===================== personaggi ===================== */
const NP=(id,x,o,acc)=>({id,name:NAME[id],x,draw:(g,px,y,t,f)=>{A.setDK(nf(px+AVCAM));P(g,px,y,t,Object.assign({f:f,s:1},o,{acc:(g2,b)=>acc(g2,b,t)}))},d:{a:{t:GREET[id]}}});
const mant=(g,b,c)=>poly(g,c,[[-13,-92+b],[-3,-94+b],[0,-66+b],[-4,-34],[-24,-30],[-22,-64+b]]);
const perle=(g,b,c,n)=>{for(let q=0;q<(n||6);q++)dot(g,c,-9+q*3.6,-90+b+(q%2)*3,1.8)};
const npcs=[
 /* Aristotele: himation azzurro-grigio sulla veste chiara, barba grigia, calvizie incipiente, rotolo di papiro */
 NP('al_aristotele',LX[3]+70,{skin:SKN[1],top:'#efe8d4',bot:'#efe8d4',hair:'#9a9aa0',long:1,s:1.0},(g,b,t)=>{mant(g,b,'#7a8ab0');ln(g,'#efe8d4',2,[-24,-30,-4,-34]);barba(g,b,'#9a9aa0');rect(g,'#efe4c0',12,-70+b,16,6);dot(g,'#c8a878',12,-67+b,3);dot(g,'#c8a878',28,-67+b,3)}),
 /* Menandro: kausia di feltro, corazza di lino, scudo piccolo, mantello rosso, sarissa */
 NP('al_menandro',LX[6]+250,{skin:'#c89870',top:'#d8d0b8',bot:'#9a7a58',hair:'#3a2a1a',s:1.02},(g,b,t)=>{poly(g,'#b8302a',[[-12,-90+b],[-28,-62+b],[-22,-38],[-10,-62+b]]);ln(g,'#6a4a2a',2.4,[10,-46,34,-250]);poly(g,'#9a9aa2',[[33,-250],[36,-250],[34.5,-266]]);dot(g,'#c8a040',-12,-66+b,10);dot(g,'#e8d8a0',-12,-66+b,3.4);el(g,'#8a7a5a',1,-112+b,15,3.6);el(g,'#8a7a5a',1,-116+b,9,5);rect(g,'#6a4a2a',-14,-52+b,28,4)}),
 /* Alessandro: capelli sabbia, corazza di lino con bordo dorato, clamide rossa, spada, nodo di corteccia in mano */
 NP('al_alessandro',LX[15]+40,{skin:SKN[0],top:'#d8d0b8',bot:'#efe8d4',hair:'#c8a060',s:1.06},(g,b,t)=>{poly(g,'#b8302a',[[-13,-92+b],[-3,-94+b],[2,-66+b],[-4,-30],[-26,-26],[-22,-64+b]]);rect(g,GLD,-12,-62+b,24,3);rect(g,GLD,-12,-78+b,24,2);ln(g,'#d8d8e0',2.6,[14,-62+b,40,-118+b]);ln(g,'#6a4a2a',3,[12,-62+b,18,-58+b]);dot(g,'#c8a868',-14,-60+b,3.4);ln(g,'#c8a868',2,[-16,-64+b,-10,-56+b]);ln(g,'#e0b84a',2.4,[-12,-114+b,12,-114+b])}),
 /* Bodmelqart: tunica lunga viola, berretto conico rosso, mani macchiate di porpora, cesto di murici */
 NP('al_bodmelqart',LX[18]+150,{skin:'#c89870',top:'#7a2a6a',bot:'#7a2a6a',hair:'#14100c',long:1,s:1.0},(g,b,t)=>{rect(g,'#e0b84a',-15,-8,30,3);poly(g,'#b8302a',[[-9,-110+b],[0,-130+b],[9,-110+b]]);barba(g,b,'#14100c');dot(g,'#5a1a5a',16,-62+b,4);dot(g,'#5a1a5a',-16,-62+b,4);el(g,'#8a6a40',22,-50+b,10,5);for(let q=0;q<4;q++)dot(g,['#b890a0','#7a2a6a'][q%2],17+q*3,-54+b+(q%2),2.6)}),
 /* Dario: tiara alta con fascia blu e bianca, veste viola con fregi d'oro, barba nera riccia, scettro */
 NP('al_dario',LX[24]-262,{skin:'#c89870',top:'#7a2a6a',bot:'#efe8d4',hair:'#14100c',long:1,s:1.08},(g,b,t)=>{poly(g,'#efe8d4',[[-10,-110+b],[-8,-134+b],[8,-134+b],[10,-110+b]]);rect(g,BLU,-10,-118+b,20,4);rect(g,'#efe8d4',-10,-122+b,20,2);rect(g,GLD,-10,-136+b,20,3);for(let q=0;q<4;q++)dot(g,'#14100c',-4+q*3,-84+b+(q%2)*3,2.6);barba(g,b,'#14100c');rect(g,GLD,-14,-72+b,28,3);for(let q=0;q<5;q++)rect(g,GLD,-14+q*6,-28,3,3);ln(g,GLD,3,[16,-84+b,22,-4]);dot(g,GLD,22,-4,3.4);perle(g,b,GLD,6)}),
 /* Nabu-zer: veste lunga ocra con frange, barba nera ricciuta, tavoletta d'argilla e calamo */
 NP('al_nabuzer',LX[28]+110,{skin:'#c89870',top:'#a8803a',bot:'#a8803a',hair:'#14100c',long:1,s:1.0},(g,b,t)=>{for(let q=0;q<7;q++)rect(g,'#efe8d4',-15+q*4.4,-6,2,6);rect(g,'#efe8d4',-15,-12,30,2.4);rect(g,'#2a5aa8',-12,-109+b,24,4);barba(g,b,'#14100c');rect(g,'#b88a58',12,-72+b,18,14);for(let r=0;r<3;r++)rect(g,'rgba(60,40,20,.6)',14,-68+b+r*4,12,1.4);ln(g,'#6a4a2a',1.6,[10,-62+b,18,-80+b])}),
 /* Rossane: lunga veste turchese ricamata d'argento, velo lilla con fascia d'oro, treccia nera, collana d'argento */
 NP('al_rossane',LX[35]-190,{skin:'#d8a67e',top:'#2a8a8a',bot:'#2a8a8a',hair:'#14100c',long:1,s:.98},(g,b,t)=>{velata('#d8c0e0','#c8a040')(g,b);for(let q=0;q<6;q++){rect(g,'#e8e8f0',-12+q*4,-60+b,2,2);rect(g,'#e8e8f0',-12+q*4,-30,2,2)}perle(g,b,'#e8e8f0',6);ln(g,'#14100c',3,[-16,-100+b,-20,-70+b,-18,-54+b]);rect(g,'#c8a040',-16,-8,32,3);dot(g,'#c8a040',16,-62+b,3)}),
 /* Chandra: dhoti e veste di cotone bianco, turbante bianco, pungolo, orecchino d'oro, collana di semi */
 NP('al_chandra',LX[36]+30,{skin:'#8a5a3a',top:'#f4f0e4',bot:'#f4f0e4',hair:'#14100c',s:1.0},(g,b,t)=>{el(g,'#f4f0e4',0,-113+b,15,9);el(g,'#e4dfd0',3,-116+b,9,5);rect(g,'#e8c860',-14,-108+b,28,2.4);dot(g,GLD,-9,-96+b,2.4);for(let q=0;q<5;q++)dot(g,'#7a4a2a',-9+q*3.6,-90+b+(q%2)*3,1.8);ln(g,'#6a4a2a',2.6,[16,-84+b,26,-30]);poly(g,'#9a9aa2',[[26,-30],[34,-26],[28,-24]]);rect(g,'#c8302a',-12,-58+b,24,3)}),
 /* Tolomeo: clamide rossa scura sulla corazza, barba corta, rotolo di papiro, spada al fianco */
 NP('al_tolomeo',LX[46]+90,{skin:SKN[1],top:'#d8d0b8',bot:'#efe8d4',hair:'#3a2a1a',s:1.04},(g,b,t)=>{poly(g,'#8a2a22',[[-13,-92+b],[-3,-94+b],[2,-66+b],[-4,-30],[-26,-26],[-22,-64+b]]);rect(g,GLD,-12,-62+b,24,2.6);poly(g,'#3a2a1a',[[-4,-96+b],[8,-96+b],[9,-88+b],[2,-84+b],[-3,-90+b]]);rect(g,'#efe4c0',14,-70+b,14,6);dot(g,'#c8a878',14,-67+b,3);dot(g,'#c8a878',28,-67+b,3);ln(g,'#d8d8e0',2,[-16,-50+b,-30,-30])})
];
npcs.sort((a,b)=>a.x-b.x);
const props=[];T0.forEach((n,z)=>props.push(['alxtarga',Z[z]+90,n]));PN.forEach((n,i)=>props.push(['alx'+n,LX[i]]));props.sort((a,b)=>a[1]-b[1]);
const look=LX.map((x,i)=>[i<LX.length-1?(x+LX[i+1])/2:W1+399,LKTXT[i]]);
const LV=fn=>(g,o,t)=>{A.setDK(0);fn(g,o,t)};
addWorld({id:'alessandro',name:WNAME,width:W1,sky:['#5a5a88','#e8a4a0','#ffd8a8'],gt:372,gr:['#8a8a52','#5e5a34'],chord:[220,261.6,329.6,440],amb:'#ffe4b8',
intro:INTRO,look:look,
gdraw:(g,cam,t)=>{A.setDK(0);groundDraw(g,cam,t)},
back:[{k:.02,fn:LV(layerSky)},{k:.05,fn:LV(layerFar)},{k:.2,fn:LV(layerMid)},{k:1,fn:LV(layerStreet)}],
mid:[{k:1,fn:LV(layerLife)}],
props:props,npcs:npcs});
})();

/* --- Battute: 12 per personaggio (l’ultima è il saluto) --- */
(function(){
const TOPX_AL={
al_aristotele:[
["Chi sei e che fai?","Aristotele, di Stagira, una cittadina della Calcidica che ha visto giorni migliori. Ho studiato vent’anni all’Accademia di Platone, e adesso mi occupo di tutto ciò che si può osservare: piante, animali, stelle, leggi, poesia. In più, da un po’ di tempo, faccio il maestro di un ragazzo molto vivace: il figlio del re."],
["Cosa insegni ad Alessandro?","Un po’ di tutto: politica, retorica, medicina, geografia, etica. E poesia: gli ho preparato una copia dell’Iliade che, dicono, si porterà sempre dietro. Non gli insegno a vincere, quello gli riesce già: provo a insegnargli a capire perché le cose vanno come vanno, e a fermarsi un attimo a pensare, ogni tanto."],
["Che tipo è Alessandro da ragazzo?","Veloce, curioso e impaziente. Impara in un lampo, ma si annoia altrettanto in fretta. Ama Omero, la medicina e le gare di corsa, e detesta perdere. Si racconta che, ogni volta che suo padre vince una battaglia, lui si lamenti che non gli lascerà più niente di grande da conquistare. Scherza, ma non troppo."],
["Come fai lezione?","Camminando: nel portico, nel giardino, sotto i platani, con i ragazzi che mi seguono e discutono. I Greci chiamano la passeggiata “peripatos”, e un giorno la mia scuola ad Atene verrà chiamata così: i peripatetici. Camminare aiuta a pensare, e anche a non addormentarsi sulla tavoletta."],
["Cosa studi oltre alla filosofia?","Gli animali, soprattutto. Ho aperto pesci, uccelli e seppie, e ho osservato un pulcino nell’uovo giorno dopo giorno per vedere come nasce il cuore. Ho notato che i delfini respirano con i polmoni e allattano i piccoli, e quindi non sono pesci. Le mie classificazioni resteranno in uso per secoli."],
["Cos’è un sillogismo?","Un ragionamento in tre passi: tutti gli uomini sono mortali, Socrate è un uomo, dunque Socrate è mortale. Sembra banale, ma è l’inizio della logica: se le premesse sono vere e il ragionamento è corretto, la conclusione non può essere falsa. Prova con: tutti i re sono invincibili… e poi guarda cosa dice l’esperienza."],
["Cosa pensi dei Greci e degli stranieri?","Ho scritto, lo ammetto, che i Greci sono naturalmente portati a comandare e i barbari a obbedire: oggi suona offensivo. Un giorno Alessandro farà il contrario, e Plutarco ricorderà che non seguì il mio consiglio di trattare i Greci da amici e gli altri da sudditi. A volte l’allievo ha ragione, e il maestro in fondo lo spera."],
["Come si vive a Mieza e a corte?","Si mangia pane d’orzo, formaggio, miele e fichi; si beve vino mescolato con acqua, e più è mescolato, più si è educati. I Macedoni amano il simposio, un banchetto con discussioni e canti, e molti, per l’occasione, bevono anche troppo. I giovani nobili sono paggi del re: servono a tavola e imparano a cacciare."],
["Che cos’è per te la felicità?","I Greci la chiamano eudaimonia: vivere bene, secondo la propria virtù, con amici, salute e un po’ di fortuna. Non è un’emozione di un momento, ma il modo in cui si vive una vita intera. Come dico ai ragazzi: una rondine non fa primavera, e un giorno di festa non fa un’esistenza felice."],
["Cosa succederà a te?","Nel 335 tornerò ad Atene e fonderò una scuola, il Liceo, con biblioteca e collezioni. Quando Alessandro morirà, nel 323, in città si scatenerà l’ostilità contro i Macedoni e me ne andrò a Calcide, in Eubea, dove morirò l’anno dopo. Si racconta che dicesse di non voler lasciare che gli Ateniesi peccassero due volte contro la filosofia."],
["Dove vado dopo?","Verso sud, in Grecia: a Cheronea, dove un ragazzo di diciotto anni guiderà la cavalleria, e poi a Corinto, dove un filosofo vive in una giara. Cerca un fante macedone che ti racconti come si cammina con una lancia di cinque metri: è più istruttivo di molti trattati."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e continua a farti domande: è l’inizio di ogni sapere. Se ripassi da Mieza, porta una bella domanda e la discuteremo sotto i platani. Stammi bene, e che la curiosità non ti abbandoni mai!"]
],
al_menandro:[
["Chi sei e che fai?","Menandro, figlio di Pantaleone, di un villaggio dell’Alta Macedonia. Faccio il fante nella falange da quando avevo vent’anni, con Filippo prima e con Alessandro poi. Nel tempo libero lavoro la terra di mio padre… se mai avessi un tempo libero. Ormai non lo vedo più da anni."],
["Com’è fatta la sarissa?","È una lancia di legno di corniolo lunga cinque o sei metri, con una punta di ferro e un puntale in fondo, per bilanciarla e piantarla a terra. Si tiene a due mani. Quando ce l’hai in mano capisci perché in marcia i sergenti ti dicono di non voltarti di scatto: alla prima giravolta hai già spettinato mezza compagnia."],
["Come si combatte in falange?","Fianco a fianco, in file serrate di sedici o più. Le prime cinque file abbassano la sarissa in avanti, e al nemico si presenta un muro di punte. Quelle dietro tengono l’asta alta, per fermare le frecce e dare il passo. Basta un uomo che perda la calma e il muro si sfonda: per questo ci addestriamo fino alla noia."],
["Cosa ti porti addosso?","Cappello di feltro, corazza di lino incollato a più strati, che sotto il sole pesa meno del bronzo, uno scudo piccolo e tondo appeso al collo, l’elmo, una spada corta e gli schinieri. Più qualche giorno di viveri: Filippo ci ha insegnato a portare tutto da soli, con pochi carri e pochi servi. Poco bagaglio, molta fatica."],
["Com’è la vita al campo?","Si dorme per terra, sotto un mantello o in una tenda con alcuni compagni, si mangia pane d’orzo, olive, formaggio di capra, fichi secchi e a volte un po’ di montone sul fuoco. La sera si canta, si gioca a dadi con gli astragali, che sono ossicini di pecora, e si litiga poco, perché domani si cammina di nuovo fianco a fianco."],
["Quanto si cammina?","Tanto: anche trenta chilometri al giorno, quando c’è fretta, con armi e viveri sulle spalle. Dicono che, fra l’andata e il ritorno, la strada di Alessandro sarà lunga circa ventimila chilometri. Io ci ho lasciato tre paia di sandali, la voglia di fare il pastore e un pezzo di schiena, ma ne è valsa la pena."],
["Com’è Alessandro come comandante?","Combatte in prima fila, e si vede: ha più cicatrici che anni. Non ci chiede cosa non fa lui. Nel deserto della Gedrosia, dicono, quando alcuni soldati gli portano un elmo con un po’ d’acqua trovata, lui lo rovescia a terra davanti a tutti: se non può bere l’esercito, non beve neppure il re. Per un soldato vale più di un discorso."],
["Raccontami la tua prima battaglia","Il Granico, nel 334: un fiume dalle rive ripide e, dall’altra parte, i cavalieri persiani. Alessandro attraversa in testa con l’elmo dal pennacchio bianco, ben visibile. A un certo punto lo credemmo perso, ma Clito il Nero parò il colpo destinato a lui. Quel giorno ho capito che i Persiani si battono davvero, e che il nostro re non sta mai dietro."],
["Quando avete detto basta?","Sul fiume Ifasi, in India, nel 326: otto anni di marcia, pioggia da settimane, ferite e malattie. Alessandro voleva andare avanti fino al Gange; noi no. Il generale Ceno parlò a nome di tutti, con rispetto. Il re rimase tre giorni chiuso nella tenda e alla fine cedette: dodici altari e si tornò indietro. Anche gli dèi, a un certo punto, si stancano di camminare."],
["Cosa pensi dei Persiani?","All’inizio, che fossero ricchi e profumati, pieni di tende dorate. Poi ho scoperto che combattono bene e amano i cavalli e le famiglie come noi. Quando Alessandro ci incoraggerà a sposare donne asiatiche, molti dei miei brontoleranno per un po’… e poi si metteranno a cercare un buon suocero. Il tempo, qui, aggiusta tutto."],
["Dove vado dopo?","Verso l’Asia, dove si passa lo stretto e si comincia a fare sul serio: Troia, il fiume Granico, il nodo di Gordio. Se ti capita di vedere il re, non fargli troppe domande sulla paga: ha sempre la testa a qualcosa di più grande. Io lo seguo, e di solito mi porta in posti dove non avrei mai pensato di andare."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e tieni la schiena dritta: la falange sta in piedi perché nessuno cede. Se ripassi, porta del formaggio, che il rancio è sempre quello. Stammi bene, e che gli dèi ti diano buona marcia!"]
],
al_alessandro:[
["Chi sei e che fai?","Alessandro, figlio di Filippo e di Olimpiade, re dei Macedoni. Ho ventidue anni e sto cercando di sciogliere un nodo che nessuno ha mai sciolto. E in questo posto strano, a volte, so cose che non ho ancora fatto: ho il sospetto che sia il tempo, che qui si piega."],
["Chi sono i tuoi modelli?","Achille, prima di tutti: mia madre dice che discendo da lui, e l’Iliade la so quasi a memoria. Poi Eracle, che i Greci dicevano figlio di Zeus e che ha girato il mondo, e Dioniso, che avrebbe portato il vino fino all’India. Modelli un po’ ingombranti, ma almeno non si lamentano."],
["Come hai conosciuto Efestione?","Siamo cresciuti insieme alla corte e a Mieza, e da ragazzi eravamo inseparabili. A Troia ho incoronato la tomba di Achille e lui quella di Patroclo, e nessuno ha avuto bisogno di spiegazioni. A Isso, la madre di Dario si inchinò a lui per sbaglio, credendolo me, e si confuse. Le dissi che non c’era errore: anche lui è Alessandro."],
["Com’è tua madre Olimpiade?","Una donna fuori dal comune: forte, devota ai riti di Dioniso, con una passione per i serpenti e un carattere che fa tremare i generali. Mi scrive spesso, e con Antipatro, che governa la Macedonia al mio posto, litiga di continuo. Lui dice che una lacrima di mia madre cancella diecimila lettere: io faccio l’arbitro da molto lontano."],
["Come hai sciolto il nodo?","Dipende da chi lo racconta. La versione più famosa dice che ho preso la spada e l’ho tagliato: nodo spezzato, oracolo avverato. Un’altra, più discreta, sostiene che ho tolto il cavicchio che lo teneva e l’ho sfilato. Quella notte ci furono tuoni e lampi, e gli indovini dissero che Zeus approvava. A me bastava che l’esercito ci credesse."],
["Come dormi e come vivi?","Poco, e senza lamentarmi. Il sonno e l’amore, dicevo, sono le due cose che mi ricordano che sono mortale. Mangio come i miei soldati, mi alzo prima degli altri, e al mattino faccio volentieri un lungo bagno, come i Persiani. Sotto il cuscino un pugnale e l’Iliade: la compagnia dei classici è una buona difesa."],
["Come comandi l’esercito?","Da davanti. Un re che manda gli altri a morire e resta indietro non ha il diritto di chiedere fedeltà. Ascolto i miei generali, Parmenione, Cratero, Tolomeo; ma i piani li faccio io, e di solito sono audaci. L’imprevisto è la mia arma migliore: sul calendario dei Persiani non c’è mai."],
["Perché vai fino in Oriente?","Per il pothos, il desiderio di andare oltre, più che per un piano. Aristotele mi ha insegnato che la terra abitata finisce in un grande Oceano a oriente, e io voglio vederlo con i miei occhi. Poi scoprirò che l’India è molto più grande di quanto pensasse il mio maestro, e che l’Oceano è molto più lontano."],
["Cosa porti con te oltre all’esercito?","Ingegneri, geografi, medici, botanici, perfino storici: Callistene, nipote di Aristotele, scrive le mie imprese. I bematisti contano i passi per misurare le distanze, gli ingegneri costruiscono ponti e macchine d’assedio, e qualcuno giura che mando campioni di piante e animali al mio maestro. Una spedizione serve anche a imparare."],
["Cosa pensi di Dario?","Che è un re, e va rispettato. Quando a Isso ho preso sua madre, sua moglie e le figlie, le ho trattate da regine, con le loro tende, i loro servi e il lutto che volevano. Quando mi ha offerto metà dell’impero, dicono che io abbia risposto che il cielo non può avere due soli. Non ce n’è per due, ma l’avversario si onora."],
["Dove vado dopo?","Verso sud, lungo la costa: a Tiro, una città su un’isola che si crede imprendibile, e poi in Egitto, dove ho in mente di fondare una città con il mio nome. A dire il vero, di città con il mio nome ne fonderò parecchie: ormai è un’abitudine, come i bagni di mattina."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e se trovi un nodo troppo difficile ricorda che i modi sono sempre due: tagliarlo o capire dove si sfila. Io ho provato tutti e due. Stammi bene, e che gli dèi ti siano propizi!"]
],
al_bodmelqart:[
["Chi sei e che fai?","Bodmelqart, tintore di porpora, di Tiro: il mio nome significa “servo di Melqart”, il dio della città. Lavoro con mio padre e mio fratello in una bottega vicino al porto, un po’ fuori dal centro per via dell’odore. Secondo il mio naso siamo la famiglia più profumata della costa; secondo quello degli altri, no."],
["Come si fa la porpora?","Si raccolgono i murici, molluschi di mare con la conchiglia a spine. Si aprono, si estrae una piccola ghiandola che dà un liquido giallastro; lo si lascia riposare al sole e al sale per giorni, poi vi si immerge la stoffa. All’aria il giallo diventa verde, poi rosso, poi viola. Per un solo grammo di colore servono migliaia di conchiglie."],
["Perché la porpora vale tanto?","Perché è bellissima, non sbiadisce mai, anzi con il tempo migliora, e costa quanto l’oro, a volte di più. Un mantello di porpora lo portano solo re, sacerdoti e persone molto ricche. Forse anche il nome dei Fenici, per i Greci, “phoinikes”, viene dal rosso della porpora: facciamo i rossi da secoli."],
["Com’è fatta Tiro?","Un’isola vicina alla costa, circondata da mura altissime, con due porti: uno a nord, verso Sidone, e uno a sud, verso l’Egitto. Le case sono alte, anche di più piani, perché lo spazio è poco. Si vive di fretta, si commercia in ogni lingua e c’è sempre odore di mare, di cedro e, per colpa mia, di conchiglie."],
["Cosa vendete e come scrivete?","Legno di cedro del Libano, vetro, stoffe tinte, vasi, vino, olio, avori. Compriamo argento in Spagna, stagno e oro lontano, e rivendiamo tutto. Non siamo un popolo di guerrieri, ma di mercanti. E abbiamo un alfabeto di ventidue lettere, facile da imparare: anche i mercanti sanno scrivere. Ai Greci è piaciuto così tanto che lo hanno copiato."],
["Come navigate?","Di giorno lungo le coste, di notte con le stelle: i Greci chiamano l’Orsa Minore “stella fenicia”, perché la usiamo per orientarci. Abbiamo fondato città in tutto il Mediterraneo: Cadice, Utica e, dicono le nostre storie, Cartagine, nata da una principessa di Tiro, Elissa, che i Romani chiameranno Didone."],
["Chi è Melqart?","È il re della città: lo chiamano Baal di Tiro, e i Greci lo identificano con Eracle. Ogni anno facciamo una festa in suo onore, in cui lo si “risveglia” dopo la morte e il sonno invernale. Il suo tempio ha due colonne, una d’oro e una di smeraldo, che di notte brillano. I Greci lo visitano come noi andiamo a Delfi."],
["Cos’è successo con l’assedio?","Alessandro voleva sacrificare nel tempio di Melqart; noi gli abbiamo detto di farlo sulla terraferma. Si è offeso. Ha costruito un molo dalla costa alle nostre mura, con pietre e alberi interi; noi l’abbiamo bersagliato dalle torri, bruciato con una nave piena di fuoco, e gettato sabbia rovente sugli assalitori. È durata sette mesi, da gennaio a luglio del 332."],
["E dopo l’assedio?","La città è caduta. È stato un giorno terribile: tantissime persone sono morte e, dicono, circa trentamila sono state vendute come schiave. Io e mia moglie ci siamo salvati grazie ad amici di Sidone che ci hanno nascosti. Tiro non è sparita: dopo pochi anni commerciavamo di nuovo e la città è stata ricostruita. Siamo mercanti: ci rialziamo sempre."],
["Cosa mangiate e bevete?","Pesce, naturalmente, fresco o salato, olive, fichi, datteri, lenticchie, pane e formaggio di capra. Il vino lo si beve con acqua, e per le feste si preparano dolci al miele e frutta secca. Il pesce lo cuciniamo con erbe e coriandolo: un cuoco di Tiro è una garanzia, e un cuoco di Sidone, naturalmente, lo nega."],
["Dove vado dopo?","A sud, in Egitto: un cammino di sabbia e di palme, e poi il Nilo. Alessandro ci va per liberare il Paese dai Persiani, e per fondare una città. A Menfi cerca un toro nero con un triangolo bianco in fronte: gli Egizi lo chiamano Api, e lo trattano meglio di quanto io tratti i miei dipendenti."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e ricorda che il colore più bello è quello che dura. Se ripassi da Tiro, porta un mantello da tingere: per te, un prezzo d’amico. Stammi bene, e che Melqart ti protegga!"]
],
al_dario:[
["Chi sei e che fai?","Dario, terzo di questo nome, Gran Re, Re dei re, signore di Persia, di Babilonia, d’Egitto e delle terre fino all’Indo. Prima di diventare re ero governatore dell’Armenia. Oggi sono qui, in una piana senza ombra, a fare il conto dei miei nemici."],
["Com’è il tuo impero?","Venti e più province, dall’Egitto all’Indo, con una strada reale di circa duemilasettecento chilometri che unisce Sardi a Susa: un messaggero con staffette la percorre in una settimana. Le tasse si pagano anche in monete d’oro, i darici, e tutte le lingue convivono. È un impero fatto per durare; sta a me dimostrarlo."],
["Come ti vesti?","Porto la tiara alta con la fascia azzurra e bianca, una tunica di porpora a righe bianche e un mantello ricamato d’oro. Davanti a me ci si inchina fino a terra e sotto i miei piedi si stende un tappeto: il Re non dovrebbe toccare il suolo. Quando uno straniero ride, io capisco che non ha capito."],
["Cosa mangiate a corte?","La tavola del Re è famosa: carne, pesce, frutta, vino di Calibone, in Siria, il mio preferito. Gli antichi dicono che a corte mangiassero in migliaia ogni giorno e che gli avanzi andassero ai soldati. Io mangio in una stanza, gli ospiti in un’altra: io li vedo, loro non vedono me. Un’abitudine che risparmia molte chiacchiere."],
["Com’è il tuo esercito?","Cavalieri, fanti, arcieri di tutte le province e Greci mercenari, che combattono bene. Poi i miei Immortali, diecimila guerrieri scelti, il cui numero viene rimpiazzato appena uno cade: per questo sembrano non morire mai. A Gaugamela ho anche carri falcati e qualche elefante. Quanti siamo? Gli antichi scrivono numeri enormi; oggi si pensa a molti meno."],
["Cos’è successo a Isso?","Ho scelto un luogo stretto, fra mare e monti, e mi sono sbagliato: la mia superiorità numerica non serviva a niente. Alessandro ha caricato dritto verso di me e sono fuggito, prima sul carro, poi a cavallo. Ho lasciato la tenda, il tesoro, mia madre, mia moglie e le mie figlie. Lui le ha trattate da regine. Di questo gli sono grato."],
["Cosa gli hai offerto?","Dopo Isso e dopo Tiro: diecimila talenti, una figlia in sposa, tutte le terre a ovest dell’Eufrate. Il suo generale Parmenione disse che avrebbe accettato, se fosse stato Alessandro. E Alessandro, dicono, rispose che l’avrebbe fatto anche lui, se fosse stato Parmenione. Avrei dovuto capire subito che non sarebbe finita bene."],
["Com’è stata la notte prima della battaglia?","Lunga: i miei soldati restarono schierati e in armi fino all’alba per paura di un attacco notturno. Parmenione consigliò ad Alessandro di attaccare al buio; lui rispose che non voleva rubare la vittoria, e dormì così bene che il mattino dopo dovettero svegliarlo. Io ero stanchissimo; lui riposato. A volte le battaglie si vincono dormendo."],
["Che rapporto hai con i Greci?","Ho molti Greci al mio servizio, come mercenari. Il migliore, Memnone di Rodi, consigliava di bruciare i raccolti e di evitare lo scontro in campo aperto; non lo ascoltai. Morì nel 333, e senza di lui ho commesso più errori. Mi sono ricordato tardi che i consigli dei generali vanno seguiti prima di averne bisogno."],
["Cosa succederà a te?","Dopo Gaugamela fuggo verso est. Il satrapo Besso mi cattura e mi fa uccidere, nel 330. Alessandro arriva troppo tardi, mi copre con il suo mantello e ordina di seppellirmi a Persepoli con onori regali. Non è il finale che avrei scelto, ma ho avuto un nemico che mi ha reso omaggio, e di questi tempi è già qualcosa."],
["Dove vado dopo?","A Babilonia: la strada è larga, con petali di fiori e incenso. Guarda la porta blu, con i tori e i draghi: è una delle meraviglie della mia terra. E chiedi a uno scriba delle stelle cosa ha annotato sulla mia sconfitta. Se la tavoletta è onesta, sarà un po’ scortese."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e non fidarti dei numeri: un esercito grande vale meno di un piano chiaro. Se ripassi per Gaugamela, porta un po’ d’ombra. Stammi bene, e che Ahura Mazda ti guidi!"]
],
al_nabuzer:[
["Chi sei e che fai?","Nabu-zer, scriba astronomo del tempio di Marduk, a Babilonia. Guardo il cielo ogni notte e scrivo tutto su tavolette d’argilla: posizione dei pianeti, fasi della Luna, eclissi, meteo, livello dell’Eufrate e prezzi dell’orzo. Non è un lavoro che arricchisce, ma ha una qualità: nessuno ti chiede un risultato per domani."],
["Come si scrive su argilla?","Con una canna tagliata a punta si preme sull’argilla fresca: ogni segno è un piccolo triangolo, un cuneo, ed ecco il cuneiforme. Poi la tavoletta si lascia seccare al sole, oppure si cuoce, se deve durare. Si scrive su argilla perché a Babilonia ce n’è tanta e di buona qualità: il papiro è roba da Egiziani."],
["Cosa osservi nel cielo?","I pianeti, la Luna, le stelle fisse. Segno ogni sera dove sorgono e dove tramontano, e quando c’è un’eclissi. Con tanti anni di osservazioni si riconoscono le regolarità: sappiamo prevedere le eclissi di Luna con un buon margine. Un po’ di astrologia ce la mettiamo anche, perché i re vogliono sapere cosa dicono gli dèi."],
["Cosa scrivono le tavolette di Gaugamela?","Una tavoletta del 331 racconta la battaglia in poche righe: l’esercito del re di Persia che si disperde, il re che abbandona il campo, i morti e i prigionieri. Non scriviamo come poeti, ma come si annota un prezzo. Eppure, per chi la sa leggere, vale un’epopea: è la voce di un testimone di quel tempo."],
["Com’è Babilonia?","La città più grande del mondo, con mura enormi, la Porta di Ishtar blu, la via delle processioni con i leoni, il tempio di Marduk e la sua torre a gradoni, l’Etemenanki. I Greci raccontano dei giardini pensili, ma noi non li troviamo in nessuna tavoletta e sorridiamo: forse c’erano, forse no. L’Eufrate ci passa in mezzo, pieno di barche."],
["Come si vive a Babilonia?","Case di mattoni crudi, tetto piatto, con un cortile al centro e una scala per il tetto, dove d’estate si dorme per la frescura. Si mangiano pane d’orzo, cipolle, datteri e pesce del fiume, e si beve birra, tanta: è la bevanda nazionale. Le donne tessono, gli uomini commerciano e i bambini vanno alla scuola di scrittura, l’edubba, la “casa delle tavolette”."],
["Cos’è l’Akitu?","La festa del nuovo anno, in primavera: undici giorni di preghiere e processioni, in cui il re, nel tempio, viene privato dei segni del potere e poi riconfermato dal dio Marduk. Si legge il poema della creazione, l’Enuma Elish. Per qualche istante il re è un uomo come gli altri: forse la parte migliore della festa."],
["Cosa ha fatto Alessandro per i templi?","Quando è entrato in città, Mazeo, il governatore, gli ha aperto le porte, e i Babilonesi lo hanno accolto con fiori e incenso. Ha ordinato di rimettere in sesto i templi che Serse aveva rovinato e ha mandato diecimila uomini a rimuovere le macerie dal tempio di Marduk. I lavori, però, non furono finiti: il re aveva sempre qualcosa di più grande a cui pensare."],
["Cosa dissero gli astronomi nel 323?","Che il re non dovesse entrare in città dal lato ovest. Lui cercò di aggirare, ma le paludi lo costrinsero a rientrare proprio da lì. Qualcuno dice che era un presagio, qualcun altro che era una scusa per non lavorare. Io dico: guardo il cielo, non il futuro, e agli dèi lascio le conclusioni."],
["Perché contate in base sessanta?","È il nostro sistema: da noi viene la divisione dell’ora in sessanta minuti, del minuto in sessanta secondi, e del cerchio in 360 gradi. Si pensa che nasca contando con il pollice le dodici falangi delle altre dita di una mano, e con l’altra mano le dozzine, fino a sessanta. Comodo, specialmente per le frazioni."],
["Dove vado dopo?","A est, verso Persepoli: la strada del re passa fra le montagne. Troverai terrazze, scale con rilievi di popoli che portano doni e colonne con capitelli a forma di toro. Se ci arrivi in primavera, porta un mantello: il vento, lassù, non ha rispetto per nessuno."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e non perdere il filo del tempo: chi lo tiene, ha la storia in mano. Se ripassi di sera, sali sul tetto: ti insegno a riconoscere Venere. Stammi bene, e che Nabu, signore della scrittura, ti sia propizio!"]
],
al_rossane:[
["Chi sei e che fai?","Rossane, in lingua nostra Roxane, forse “piccola stella”. Sono la figlia di Ossiarte, un nobile della Battriana. Ho circa sedici anni, e fino a poco fa abitavo in una fortezza su una roccia dove, dicevano, nessuno sarebbe mai arrivato. Poi un giorno sono arrivati dei soldati con delle corde."],
["Com’è la Battriana?","Una terra di montagne e di steppe: neve a ovest, deserto a sud, grandi fiumi come l’Oxus. D’inverno il freddo ti spacca le labbra, d’estate il caldo ti secca la gola. Alleviamo cavalli, pecore e capre; coltiviamo grano, uva e meloni, e commerciamo con le carovane che portano lapislazzuli e turchesi."],
["Come ci si veste da voi?","Lunghe tuniche di lana, cappotti pesanti, pantaloni larghi per cavalcare, stivali di cuoio e cappelli di feltro. Le donne portano ornamenti d’argento e perle, un velo e una treccia lunga. Il ricamo racconta da quale famiglia vieni: il mio dice che sono figlia di un nobile e che so cavalcare. Meno male."],
["Cosa mangiate?","Pane piatto cotto sulla pietra, yogurt, formaggio, montone arrosto, uva e meloni, e per le feste il latte di giumenta fermentato, che tiene caldi anche a dicembre. Il vino lo beviamo con parsimonia, mentre i Macedoni, alle loro feste, mi pare ne bevano di più. Ogni popolo ha il suo vizio."],
["Cos’è successo alla Roccia?","Alessandro mandò a dire di arrendersi: noi ridemmo e rispondemmo che cercasse soldati con le ali. Quella notte trecento uomini con corde e chiodi di ferro si arrampicarono sulla parete: ne caddero una trentina. All’alba li vedemmo sopra di noi, e mio padre capì che era finita. Fu quasi una gara di coraggio."],
["Com’è stato il matrimonio?","Alessandro mi vide, dicono, e si innamorò subito. Ci sposammo secondo un rito macedone: un pane tagliato con la spada, che si divide fra gli sposi. Per i Macedoni sposare una straniera era una stranezza; per mio padre fu un’alleanza: infatti Ossiarte rimase fedele e Alessandro gli affidò un governo."],
["Come ti hanno accolta i Macedoni?","Alcuni bene, altri con sospetto: ero straniera, e per di più la prima di una lunga serie. Alla corte si parlano molte lingue, e al campo si mangia a ogni ora. Per un po’ ci fu un grande chiacchiericcio, poi ci abituammo: a una nobile battriana, dopotutto, i problemi di una montagna fanno poca paura."],
["Che lingue parli?","Il battriano, che è una lingua iranica come quella dei Persiani, e un po’ di sogdiano. Del greco ho imparato qualche parola dagli ufficiali e da Alessandro: parole di comando e di cortesia. I traduttori sono sempre in giro: in una carovana ci sono più lingue che cavalli."],
["Cosa succederà dopo?","Seguirò il re, con i bagagli e le dame. A Babilonia, nel 323, aspetterò un bambino. Alessandro morirà prima della nascita: il nostro figlio, Alessandro IV, sarà proclamato re insieme ad Arrideo. Non avrà un destino lungo: verrà ucciso intorno al 310 da Cassandro, durante le guerre dei successori. Non è una storia felice, ma è la mia."],
["Cosa pensi di lui?","Che è un uomo fuori misura: generoso e irruento, curioso e malinconico. Parla di poesia, e il giorno dopo marcia per cento chilometri. È difficile stargli accanto, ma anche dimenticarlo. Ti dico solo che la vita con lui non è mai noiosa, e che dopo la roccia mi sento molto più coraggiosa di prima."],
["Dove vado dopo?","A sud-est, oltre le montagne: l’India. Alessandro vuole arrivare al fiume Indo e oltre. Sono terre di elefanti e di piogge torrenziali. Porta un mantello impermeabile e cerca un conduttore di elefanti: ha storie lunghe come il monsone."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e guarda le stelle: ogni notte mi ricordano chi sono. Se ripassi, portami buone notizie. Stammi bene, e che la montagna ti sia lieve!"]
],
al_chandra:[
["Chi sei e che fai?","Chandra, conduttore di elefanti, o mahout, del re Poro, che regna fra l’Idaspe e l’Acesine, nel Punjab. Ho quarant’anni e sono nato fra le zampe degli elefanti: mio padre faceva lo stesso mestiere. Moti, la mia elefantessa, la guido da quando lei aveva sei anni. Con un elefante non si lavora insieme: si cresce."],
["Come si guida un elefante?","Si siede sul collo, con i piedi dietro alle orecchie, e si porta un pungolo di ferro, l’ankus, per dare i comandi. Ma il pungolo è l’ultima cosa: il resto sono parole, tocchi dei piedi, una voce sempre uguale. Un elefante capisce molte parole, e se ti vuole bene non ti dimentica."],
["Cosa mangia un elefante?","Parecchio: fino a centocinquanta chili di foglie, rami, erba, canna da zucchero e riso al giorno, e beve più di cento litri d’acqua. Ogni mattina la lavo nel fiume e le strofino la pelle con un coccio, poi le dipingo la fronte con colori e disegni: è un’elefantessa, non un mulo!"],
["Com’è un elefante in battaglia?","Una torre mobile: sul dorso porta una torretta con arcieri e lanciatori, e il mio popolo li usa per rompere la cavalleria nemica. I cavalli non sopportano l’odore né il barrito, e fuggono. Ma l’elefante ha un punto debole: se si spaventa, travolge anche i suoi. E i Macedoni, con asce e lance, hanno imparato a colpirlo alla proboscide e agli occhi."],
["Com’è andata all’Idaspe?","Alessandro, sull’altra riva, finse più volte di passare, e i suoi cavalli non volevano avvicinarsi ai nostri elefanti. Ma una notte di tempesta, con pioggia e tuoni, attraversò più a monte con parte dell’esercito, su zattere e otri gonfiati. All’alba ce lo trovammo su un fianco. Il fiume, quel giorno, era in piena."],
["Com’è il re Poro?","Un gigante: più di due metri, dicono, con una voce che sembra un tuono. Combatté a lungo, ferito a una spalla. Quando Alessandro gli chiese come voleva essere trattato, rispose: “Da re”. Alessandro, colpito, gli lasciò il regno e lo ingrandì. Un uomo che sa rispondere così, in quel momento, merita un elefante in più."],
["Come si cura un elefante?","Con pazienza. Bisogna guardare le zampe, perché sono delicate; ungere la pelle con olio, perché non si secchi; dargli bagni nel fango per proteggerlo dal sole e dagli insetti; e lasciarlo dormire, anche se è poco: pochissime ore, in piedi o sdraiato. E parlargli: Moti, se sono triste, mi sfiora con la proboscide. Non ha bisogno di dottori: ha bisogno di compagnia."],
["Com’è la vita in India?","Estate piovosa: il monsone porta nuvole, fiumi in piena, fango e foglie giganti. Mangiamo riso, lenticchie, latte cagliato, frutta, spezie e canna da zucchero: i Greci dicono che ci sono canne che producono miele senza api, e hanno ragione. Ci si veste di cotone bianco, perché fa caldo: il turbante di un conduttore di elefanti è sempre il più bianco."],
["Cosa fate per divertirvi?","Dadi e giochi da tavolo, lotte, musica con tamburi e flauti, e di sera le storie di eroi e di re, che si tramandano a voce e si cantano. Ci sono anche le gare con gli elefanti e con i cavalli, e le feste dopo i raccolti, con danze, fiori e profumi. Chi dice che il lavoro duro tolga la voglia di ridere non ha mai visto una festa nel Punjab."],
["Cosa succederà agli elefanti?","Dopo la morte di Alessandro i suoi generali ne compreranno a più non posso: nel 305 Seleuco, uno di loro, cederà a Candragupta Maurya, un grande re indiano, territori dell’Indo in cambio di cinquecento elefanti. Quegli elefanti, nel 301, lo aiuteranno a vincere a Ipso. Come vedi, gli elefanti ebbero più successo di molti re."],
["Dove vado dopo?","Verso il tramonto, a ovest: giù per l’Indo fino al mare, e poi, per chi ha il coraggio, fino a Susa e a Babilonia. Se segui l’esercito, porta acqua: il deserto della Gedrosia ha mangiato più uomini di una battaglia. Io resto con i miei elefanti: loro, di solito, trovano l’acqua prima di noi."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e cammina piano: la fretta è dei cavalli, la saggezza è degli elefanti. Se ripassi, porta un po’ di miele di canna: Moti lo adora. Stammi bene, e che il fiume ti sia amico!"]
],
al_tolomeo:[
["Chi sei e che fai?","Tolomeo, figlio di Lago, macedone, uno dei Compagni di Alessandro fin da ragazzo: eravamo allievi di Aristotele a Mieza. Ho comandato truppe, fatto da guardia del corpo e, nei momenti liberi, preso appunti. Fuori c’è un esercito che aspetta notizie, e dentro c’è un amico che si spegne."],
["Cosa è successo ad Alessandro?","Si è ammalato dopo un banchetto, a Babilonia, in primavera. La febbre non è scesa, e i medici hanno provato di tutto. Ha dato ordini fino alla fine e ha fatto passare l’esercito davanti al letto. Gli antichi hanno discusso se fosse veleno; oggi molti pensano a una malattia, forse malaria o tifo. Io so solo che ci ha lasciati in pochi giorni."],
["Chi gli succede?","È la domanda che il re non ha risolto. L’anello è a Perdicca, e i generali si accordano così: suo fratellastro Arrideo, che non è in grado di governare, e il figlio che Rossane porta in grembo, se sarà maschio. Troppi comandanti per un impero: per quarant’anni ci faremo la guerra, e la chiameranno la guerra dei Diadochi, i successori."],
["Cosa farete del carro?","Un lavoro da artisti: un padiglione d’oro su un carro a quattro ruote, e sessantaquattro muli per tirarlo, ognuno con una campanella. Il re doveva essere portato in Macedonia. Ma io, con le truppe, l’ho intercettato in Siria e portato in Egitto: pensavo che un uomo come lui dovesse riposare dove aveva trovato un oracolo e una città."],
["Come hai conosciuto Alessandro?","Ero più grande di lui di una decina d’anni, ma a Mieza eravamo compagni di banco, di Aristotele e di marachelle. Quando suo padre ci esiliò per una lite di famiglia, rimasi dalla sua parte; e quando è diventato re mi sono ritrovato generale. Si vede che portavo bene."],
["Cosa hai scritto di lui?","Una storia delle sue campagne, in cui racconto marce, battaglie, il tempo, i nomi. La scrivo da vecchio, e Arriano, un greco che scriverà sotto l’impero romano, dirà che si fida di me più che di altri, perché ero là e perché un re non ha motivo di mentire. Bella fiducia, per un autore."],
["Cosa è successo a Siwa?","Ci perdemmo nel deserto, e io ho scritto che due serpenti, sibilando davanti a noi, ci fecero da guida. Aristobulo, un altro storico, ha scritto due corvi. Come vedi, anche gli storici hanno gusti diversi. La cosa certa è che arrivammo, e che il sacerdote salutò Alessandro come figlio di Ammone."],
["Com’è la vita in Egitto?","Un paese dove tutto dipende dal Nilo: quando il fiume si ingrossa, in estate, i campi si allagano e poi si semina nel limo. Si mangiano pane, birra d’orzo, cipolle, pesce e datteri. Gli Egizi sono pazienti: hanno secoli di storia sulle spalle, e quando arriva un nuovo faraone alzano un sopracciglio e continuano a lavorare."],
["Cosa farai ad Alessandria?","Creerò una corte colta: il Museo, una specie di casa delle Muse per studiosi, e una biblioteca con l’ambizione di raccogliere tutti i libri del mondo. Mio figlio completerà il Faro, il cui fuoco guiderà le navi per secoli. Io, come re, cerco di essere ricordato come un buon amministratore: è un compito più duro di una battaglia."],
["Dov’è la tomba di Alessandro?","Il suo corpo lo metteremo in un sarcofago d’oro, dicono conservato nel miele, e poi in un mausoleo nel centro di Alessandria, il Soma. Tutti i visitatori vorranno vederlo. Secoli dopo, l’imperatore Augusto, a cui chiederanno se volesse vedere anche le tombe dei Tolomei, risponderà che voleva vedere un re, non dei morti. Oggi nessuno sa dove sia: è un mistero ancora aperto."],
["Dove vado dopo?","Guarda il carro, là fuori, con le lanterne accese e la porta aperta sulla luce. Dietro quella porta il tempo si piega ancora una volta, come hai visto durante questa giornata. Vai piano, e porta a casa quello che hai imparato: è l’unica cosa che nessun impero può prendersi."],
["Posso salutarti e proseguire la mia passeggiata?","Vai, Pierpaolo, e raccontalo bene: un re che passa lascia più storie dei suoi eserciti. Se ripassi da Alessandria, vieni a trovarmi: ho un faro, una biblioteca e un cuoco egiziano molto bravo. Stammi bene, e che gli dèi ti guidino!"]
]
};
Object.assign(TOPX,TOPX_AL);
})();
