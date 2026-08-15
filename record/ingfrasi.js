/* ================================================================
   ingfrasi.js — Frasi bilingue Inglese/Italiano per ingfile.html
   ----------------------------------------------------------------
   Estratte e ripulite dalle coppie bilingui presenti in citazioni.js.
   Formato di ogni riga: "Frase inglese — Frase italiana"
   (stesso schema a "riga singola + separatore ' — '" già usato in
   citazioni.js, per restare coerenti con le convenzioni della suite).

   Per aggiungere nuove frasi: basta aggiungere una nuova riga dentro
   il template string qui sotto, rispettando il formato
   "Inglese — Italiano". Nessuna virgola, nessun array da modificare
   a mano: il parsing avviene automaticamente più in basso.
   ================================================================ */
const FRASI_ING_RAW = `
What would you like for breakfast? (uot wud iu laik for brekfast) — Cosa vuoi per colazione?
What time does the train leave? (uot taim daz de trein liiv) — A che ora parte il treno?
Can you pass me the salt, please? (ken iu pas mi de solt, pliiz) — Puoi passarmi il sale, per favore?
Do you have any plans for the weekend? (du iu hev eni plenz for de uiikend) — Hai programmi per il weekend?
How much is this, please? (hau macc iz dis, pliiz) — Quanto costa questo, per favore?
Can I have the bill, please? (ken ai hev de bil, pliiz) — Posso avere il conto, per favore?
Where did you park the car? (uer did iu park de kar) — Dove hai parcheggiato la macchina?
Do you know where the nearest pharmacy is? (du iu nou uer de nirest farmesi iz) — Sai dov'è la farmacia più vicina?
What's the weather like today? (uots de ueder laik tudei) — Che tempo fa oggi?
Can you turn down the music, please? (ken iu tern daun de miuzik, pliiz) — Puoi abbassare la musica, per favore?
Shall we go for a walk after dinner? (scial ui gou for e uok after diner) — Andiamo a fare due passi dopo cena?
Can you help me carry these bags? (ken iu help mi keri diiz begz) — Puoi aiutarmi a portare queste borse?
What time do you usually wake up? (uot taim du iu iujueli ueik ap) — A che ora ti svegli di solito?
Do you want tea or coffee? (du iu uont tii or kofi) — Vuoi tè o caffè?
Can you pick up some milk on your way home? (ken iu pik ap sam milk on ior uei houm) — Puoi prendere del latte tornando a casa?
Would you like a hand with dinner? (wud iu laik e hend uidh diner) — Vuoi una mano con la cena?
Excuse me, is this seat taken? (ekskiuz mi, iz dis siit teikën) — Scusi, questo posto è occupato?
Have you finished your homework? (hev iu finiscd ior houmuork) — Hai finito i compiti?
What time does the pharmacy close? (uot taim daz de farmesi klouz) — A che ora chiude la farmacia?
We'll talk about it later, okay? (uil tok ebaut it leiter, okei) — Ne parliamo più tardi, va bene?
Wake up, it's time to go to school! (ueik ap, its taim tu gou tu skuul) — Sveglia, è ora di andare a scuola!
Did you brush your teeth? (did iu brasc ior tiith) — Ti sei lavato i denti?
Who's taking the dog out tonight? (huuz teiking de dog aut tunait) — Chi porta fuori il cane stasera?
Have you done your homework yet? (hev iu dan ior houmuork yet) — Hai già fatto i compiti?
Can you help me fold the laundry? (ken iu help mi fould de londri) — Puoi aiutarmi a piegare il bucato?
Who left the lights on? (huu left de laits on) — Chi ha lasciato le luci accese?
Shall we order pizza tonight? (scial ui order pitza tunait) — Stasera ordiniamo la pizza?
Can you check if the door is locked? (ken iu cek if de dor iz lokt) — Puoi controllare se la porta è chiusa a chiave?
Who used my charger? (huu iuzd mai ciarger) — Chi ha usato il mio caricabatterie?
Can you turn down the volume, please? (ken iu tern daun de voliuum, pliiz) — Puoi abbassare il volume, per favore?
Could you please turn off the lights before leaving? (kud iu pliiz tern of de laits bifor liiving) — Potresti spegnere le luci prima di uscire, per favore?
Could you repeat that more slowly, please? (kud iu ripiit det mor slouli, pliiz) — Potrebbe ripeterlo più lentamente, per favore?
We missed the train, so we took the next one. (ui mist de trein, sou ui tuk de nekst uan) — Abbiamo perso il treno, quindi abbiamo preso il successivo.
There is a pharmacy near the hotel. (der iz e farmesi nir de houtel) — C'è una farmacia vicino all'hotel.
I left my passport in the room. (ai left mai pasport in de ruum) — Ho lasciato il passaporto in camera.
What time does the shop open tomorrow? (uot taim daz de sciop oupën tumorou) — A che ora apre il negozio domani?
We were having dinner when you called. (ui uer heving diner uen iu kold) — Stavamo cenando quando hai chiamato.
I will send the documents this afternoon. (ai uil send de dokiuments dis afternuun) — Manderò i documenti questo pomeriggio.
The ticket machine is not working. (de tiket mesciin iz not uorking) — La macchinetta dei biglietti non funziona.
She has lived here since 2020. (scii hez livd hir sins tuenti tuenti) — Vive qui dal 2020.
Did you see my glasses on the desk? (did iu sii mai glasiz on de desk) — Hai visto i miei occhiali sulla scrivania?
We are going to visit the archaeological site tomorrow. (ui ar gouing tu vizit de arkiolojikel sait tumorou) — Domani visiteremo il sito archeologico.
I have never travelled by night train. (ai hev never treveld bai nait trein) — Non ho mai viaggiato su un treno notturno.
I forgot my umbrella at the office. (ai forgot mai ambrela et di ofis) — Ho dimenticato il mio ombrello in ufficio.
We have been waiting for the doctor for twenty minutes. (ui hev bin ueiting for de dokter for tuenti minits) — Stiamo aspettando il medico da venti minuti.
Could I have a window seat, please? (kud ai hev e uindou siit, pliiz) — Potrei avere un posto vicino al finestrino, per favore?
The museum was closed when we arrived. (de miuziëm uoz klouzd uen ui araivd) — Il museo era chiuso quando siamo arrivati.
I need to buy a charger for my phone. (ai niid tu bai e ciarger for mai foun) — Devo comprare un caricabatterie per il mio telefono.
My daughter will be home after school. (mai doter uil bi houm after skuul) — Mia figlia sarà a casa dopo la scuola.
We usually have breakfast before leaving home. (ui iujueli hev brekfast bifor liiving houm) — Di solito facciamo colazione prima di uscire di casa.
The train has already left the platform. (de trein hez olredi left de pletform) — Il treno è già partito dal binario.
I was reading when the lights went out. (ai uoz riiding uen de laits uent aut) — Stavo leggendo quando è andata via la luce.
Please keep this receipt in case you need to return the item. (pliiz kiip dis risiit in keis iu niid tu riturn di aitëm) — Conservi questo scontrino nel caso debba restituire l'articolo.
Tomorrow we are meeting our friends at the station. (tumorou ui ar miiting auer frendz et de steiscën) — Domani incontreremo i nostri amici alla stazione.
She has just finished her homework. (scii hez giast finiscd her houmuork) — Ha appena finito i compiti.
How long does the journey take by bus? (hau long daz de gerni teik bai bas) — Quanto dura il viaggio in autobus?
I will be back before dinner. (ai uil bi bek bifor diner) — Tornerò prima di cena.
Could you show me where the entrance is? (kud iu scio mi uer di entrens iz) — Potrebbe mostrarmi dov'è l'ingresso?
I left my bag on the train, but I remember the carriage number. (ai left mai beg on de trein, bat ai rimember de keridj namber) — Ho lasciato la borsa sul treno, ma ricordo il numero della carrozza.
We need to change trains at the next station. (ui niid tu ceinj treinz et de nekst steiscën) — Dobbiamo cambiare treno alla prossima stazione.
I ordered this yesterday, but it has not arrived yet. (ai orderd dis iesterdei, bat it hez not araivd yet) — Ho ordinato questo ieri, ma non è ancora arrivato.
She was waiting outside when the shop opened. (scii uoz ueiting autsaid uen de sciop oupend) — Stava aspettando fuori quando il negozio ha aperto.
I have never seen such a beautiful building. (ai hev never siin sacc e biutiful bilding) — Non ho mai visto un edificio così bello.
If the weather is good tomorrow, we will go for a walk. (if de ueder iz gud tumorou, ui uil gou for e uok) — Se domani il tempo sarà bello, andremo a fare una passeggiata.
Do you know whether this bus stops near the museum? (du iu nou ueder dis bas stops nir de miuziëm) — Sai se questo autobus si ferma vicino al museo?
I forgot to charge my phone before leaving home. (ai forgot tu ciarj mai foun bifor liiving houm) — Ho dimenticato di caricare il telefono prima di uscire di casa.
We were looking for a quiet restaurant near the station. (ui uer luking for e kuaiet restorant nir de steiscën) — Cercavamo un ristorante tranquillo vicino alla stazione.
Please tell me if the meeting starts at nine. (pliiz tel mi if de miiting starts et nain) — Per favore, dimmi se la riunione inizia alle nove.
He has already sent the email to the office. (hii hez olredi sent di iimeil tu di ofis) — Ha già mandato l'email all'ufficio.
I will take the underground because the roads are busy. (ai uil teik di anderraund bikoz de roudz ar bizi) — Prenderò la metropolitana perché le strade sono trafficate.
We arrived early, so we had coffee before the lesson. (ui araivd erli, sou ui hed kofi bifor de lesën) — Siamo arrivati presto, quindi abbiamo preso un caffè prima della lezione.
Can I pay by card, or do you need cash? (ken ai pei bai kard, or du iu niid kesc) — Posso pagare con la carta o serve contante?
Can you recommend a good restaurant nearby? (ken iu rekomend e gud restorant nirbai) — Puoi consigliarmi un buon ristorante qui vicino?
Did you remember to lock the front door? (did iu rimember tu lok de front dor) — Ti sei ricordato di chiudere a chiave la porta d'ingresso?
Could you tell me which platform the train leaves from? (kud iu tel mi uicc pletform de trein liivz from) — Potrebbe dirmi da quale binario parte il treno?
Have you packed your suitcase yet? (hev iu pekt ior siutkeis yet) — Hai già fatto la valigia?
Can you switch off the oven, please? (ken iu suicc of di aven, pliiz) — Puoi spegnere il forno, per favore?
Could you water the garden tonight? (kud iu uoter de gardën tunait) — Potresti innaffiare il giardino stasera?
Where can I find a supermarket around here? (uer ken ai faind e supermarket eraund hir) — Dove posso trovare un supermercato da queste parti?
Do you need a hand with the suitcases? (du iu niid e hend uidh de siutkeisiz) — Hai bisogno di una mano con le valigie?
Can you check if we still have any sugar? (ken iu cek if ui stil hev eni sciugar) — Puoi controllare se abbiamo ancora zucchero?
Is there a discount for students? (iz der e diskaunt for stiudents) — C'è uno sconto per studenti?
Could you validate my ticket, please? (kud iu velideit mai tiket, pliiz) — Potrebbe convalidare il mio biglietto, per favore?
I need to return this item, do you have the receipt? (ai niid tu riturn dis aitëm, du iu hev de risiit) — Devo restituire questo articolo, ha lo scontrino?
Can we reschedule the meeting to Thursday? (ken ui riskediul de miiting tu terzdei) — Possiamo spostare la riunione a giovedì?
Did the teacher give you any homework today? (did de tiicer giv iu eni houmuork tudei) — La maestra ti ha dato compiti oggi?
Have you seen the house keys anywhere? (hev iu siin de haus kiiz eniuer) — Hai visto le chiavi di casa da qualche parte?
Can you keep an eye on the kids for a minute? (ken iu kiip en ai on de kidz for e minit) — Puoi tenere d'occhio i bambini per un minuto?
Is breakfast included in the price of the room? (iz brekfast inkluudid in de prais ov de ruum) — La colazione è inclusa nel prezzo della camera?
Could you tell me the wifi password? (kud iu tel mi de uaifai pasuord) — Potrebbe dirmi la password del wifi?
Can you tell me how to get to the city center? (ken iu tel mi hau tu ghet tu de siti senter) — Puoi dirmi come arrivare al centro città?
Have you already handed in your homework? (hev iu olredi hended in ior houmuork) — Hai già consegnato i compiti?
Do you have anything in a smaller size? (du iu hev enithing in e smoler saiz) — Avete qualcosa in una taglia più piccola?
Did you turn off the lights before leaving? (did iu tern of de laits bifor liiving) — Hai spento le luci prima di uscire?
Can you check the departure time again? (ken iu cek de departciur taim egen) — Puoi controllare di nuovo l'orario di partenza?
Is there a charge for extra luggage? (iz der e ciarj for ekstra lagëj) — C'è un costo per il bagaglio in eccesso?
Could you save me a seat, please? (kud iu seiv mi e siit, pliiz) — Potresti tenermi un posto, per favore?
Can you tell me where the fitting room is? (ken iu tel mi uer de fiting ruum iz) — Puoi dirmi dov'è il camerino?
Have you fed the fish this morning? (hev iu fed de fisc dis morning) — Hai dato da mangiare ai pesci stamattina?
Have you checked your email today? (hev iu cekt ior iimeil tudei) — Hai controllato la posta elettronica oggi?
Can you help me set up the new printer? (ken iu help mi set ap de niu printer) — Puoi aiutarmi a configurare la nuova stampante?
Is there a lift in this building? (iz der e lift in dis bilding) — C'è un ascensore in questo palazzo?
Could you turn up the heating a bit? (kud iu tern ap de hiiting e bit) — Potresti alzare un po' il riscaldamento?
Can you show me the way to the station? (ken iu scio mi de uei tu de steiscën) — Puoi indicarmi la strada per la stazione?
Have you watered the plants today? (hev iu uoterd de plants tudei) — Hai innaffiato le piante oggi?
Do you have this jacket in another colour? (du iu hev dis giaket in enader kaler) — Avete questa giacca in un altro colore?
Did you turn off the gas tap? (did iu tern of de ghes tep) — Hai chiuso il rubinetto del gas?
Can you check if there's still milk in the fridge? (ken iu cek if ders stil milk in de fridj) — Puoi controllare se c'è ancora latte in frigo?
Is there parking nearby? (iz der parking nirbai) — C'è un parcheggio nelle vicinanze?
Could you switch the channel, please? (kud iu suicc de cianël, pliiz) — Potresti cambiare canale, per favore?
Can you help me carry the boxes upstairs? (ken iu help mi keri de boksiz apsteirz) — Puoi aiutarmi a portare le scatole di sopra?
Did you turn off your alarm before the holidays? (did iu tern of ior elarm bifor de holidiz) — Hai disattivato la sveglia prima delle vacanze?
Do you close for lunch? (du iu klouz for lancc) — Chiudete per la pausa pranzo?
Have you printed the concert tickets? (hev iu printid de konsert tikets) — Hai stampato i biglietti per il concerto?
Can you turn the volume down, the baby is sleeping? (ken iu tern de voliuum daun, de beibi iz sliiping) — Puoi abbassare il volume, il bambino dorme?
Is there a pharmacy open on Sundays? (iz der e farmesi oupën on sandeiz) — C'è una farmacia aperta la domenica?
She will travel to Rome next summer. (scii uil trevël tu roum nekst samer) — Lei viaggerà a Roma la prossima estate.
We visited the museum yesterday. (ui vizitid de miuziëm iesterdei) — Abbiamo visitato il museo ieri.
He is doing his homework. (hii iz duing hiz houmuork) — Lui sta facendo i compiti.
They will move to a new house next month. (dei uil muuv tu e niu haus nekst manth) — Si trasferiranno in una nuova casa il mese prossimo.
I usually take the train to work. (ai iujueli teik de trein tu uork) — Di solito prendo il treno per andare al lavoro.
Where is the nearest pharmacy? (uer iz de nirest farmesi) — Dov'è la farmacia più vicina?
My sister works in an office downtown. (mai sister uorks in en ofis dauntaun) — Mia sorella lavora in un ufficio in centro.
We were watching a movie when the phone rang. (ui uer uociing e muuvi uen de foun reng) — Stavamo guardando un film quando ha squillato il telefono.
Could you help me find this address? (kud iu help mi faind dis edres) — Potrebbe aiutarmi a trovare questo indirizzo?
The children are playing in the garden. (de cildren ar pleiing in de gardën) — I bambini stanno giocando in giardino.
I have already booked the hotel room. (ai hev olredi bukt de houtel ruum) — Ho già prenotato la camera d'albergo.
She works as a teacher at the local school. (scii uorks ez e tiicer et de loukel skuul) — Lei lavora come insegnante nella scuola del quartiere.
We will meet at the station at six. (ui uil miit et de steiscën et siks) — Ci incontreremo alla stazione alle sei.
He forgot his umbrella at home. (hii forgot hiz ambrela et houm) — Ha dimenticato l'ombrello a casa.
I would like to try on this jacket. (ai wud laik tu trai on dis giaket) — Vorrei provare questa giacca.
The plane departs from gate twelve. (de plein diparts from gheit tuelv) — L'aereo parte dal gate dodici.
My parents are cooking dinner together. (mai perents ar kuking diner tugheder) — I miei genitori stanno cucinando la cena insieme.
I need to renew my passport soon. (ai niid tu riniu mai pasport suun) — Devo rinnovare il passaporto presto.
The shop closes at eight in the evening. (de sciop klouziz et eit in di iivning) — Il negozio chiude alle otto di sera.
We are learning English at school this year. (ui ar lerning inglisc et skuul dis yir) — Quest'anno stiamo imparando l'inglese a scuola.
He missed the last train home. (hii mist de last trein houm) — Ha perso l'ultimo treno per tornare a casa.
I will call you as soon as I arrive. (ai uil kol iu ez suun ez ai araiv) — Ti chiamerò appena arrivo.
The family gathered for a birthday dinner. (de femili ghederd for e berthdei diner) — La famiglia si è riunita per una cena di compleanno.
I have never been to London. (ai hev never bin tu landën) — Non sono mai stato a Londra.
We are going shopping this afternoon. (ui ar gouing sciopping dis afternuun) — Questo pomeriggio andiamo a fare shopping.
She had already left when I arrived. (scii hed olredi left uen ai araivd) — Lei era già partita quando sono arrivato.
Can you close the door, it's cold in here. (ken iu klouz de dor, its kould in hir) — Puoi chiudere la porta, fa freddo qui.
They are renovating their kitchen. (dei ar renoveiting deir kicën) — Stanno ristrutturando la cucina.
I will finish this report by Friday. (ai uil finisc dis riport bai fraidei) — Finirò questo rapporto entro venerdì.
We took the wrong bus this morning. (ui tuk de rong bas dis morning) — Stamattina abbiamo preso l'autobus sbagliato.
My brother is studying for his exams. (mai brader iz stadiing for hiz igzemz) — Mio fratello sta studiando per gli esami.
Excuse me, does this train stop at the airport? (ekskiuz mi, daz dis trein stop et di eirport) — Mi scusi, questo treno ferma all'aeroporto?
The waiter recommended the fish of the day. (de ueiter rekomendid de fisc ov de dei) — Il cameriere ha consigliato il pesce del giorno.
We will visit our grandparents this weekend. (ui uil vizit auer grendperents dis uiikend) — Questo fine settimana andremo dai nonni.
He always arrives late to meetings. (hii olueiz araivz leit tu miitingz) — Arriva sempre tardi alle riunioni.
Could you lower the price a little? (kud iu louer de prais e litël) — Potrebbe abbassare un po' il prezzo?
I have lost my keys again. (ai hev lost mai kiiz egen) — Ho perso di nuovo le chiavi.
The plane was delayed because of the storm. (de plein uoz dileid bikoz ov de storm) — L'aereo ha subito un ritardo a causa del temporale.
We are packing our suitcases for the trip. (ui ar peking auer siutkeisiz for de trip) — Stiamo facendo le valigie per il viaggio.
She will start a new job next Monday. (scii uil start e niu giob nekst mandei) — Lei inizierà un nuovo lavoro lunedì prossimo.
I need directions to the town hall. (ai niid direksciënz tu de taun hol) — Ho bisogno di indicazioni per il municipio.
My colleagues are preparing the presentation. (mai koliighz ar priperring de prezenteiscën) — I miei colleghi stanno preparando la presentazione.
We used to walk to school every day. (ui iuzd tu uok tu skuul evri dei) — Andavamo a scuola a piedi ogni giorno.
Is there a fitting room nearby? (iz der e fiting ruum nirbai) — C'è un camerino qui vicino?
He fixed the car by himself. (hii fikst de kar bai himself) — Ha riparato l'auto da solo.
The kids will play football in the park. (de kidz uil plei futbol in de park) — I bambini giocheranno a calcio nel parco.
I forgot to lock the front door. (ai forgot tu lok de front dor) — Ho dimenticato di chiudere a chiave la porta d'ingresso.
I need to make a doctor's appointment. (ai niid tu meik e dokterz epointment) — Devo prendere un appuntamento dal medico.
We will celebrate her birthday at a restaurant. (ui uil selebreit her berthdei et e restorant) — Festeggeremo il suo compleanno al ristorante.
He has been working here for ten years. (hii hez bin uorking hir for ten yirz) — Lavora qui da dieci anni.
Could you send me the invoice by email? (kud iu send mi di invois bai iimeil) — Potrebbe inviarmi la fattura via email?
I am looking for a book about ancient history. (ai em luking for e buk ebaut einscënt histëri) — Sto cercando un libro sulla storia antica.
They will get married next spring. (dei uil ghet merid nekst spring) — Si sposeranno la prossima primavera.
We had dinner with our neighbors last night. (ui hed diner uidh auer neiborz last nait) — Ieri sera abbiamo cenato con i vicini di casa.
I usually go to the gym after work. (ai iujueli gou tu de giim after uork) — Di solito vado in palestra dopo il lavoro.
Is this seat taken? (iz dis siit teikën) — Questo posto è occupato?
She is learning to play the piano. (scii iz lerning tu plei de pianou) — Sta imparando a suonare il piano.
We will call a taxi to the airport. (ui uil kol e teksi tu di eirport) — Chiameremo un taxi per l'aeroporto.
I dropped my phone and broke the screen. (ai dropt mai foun end brouk de skriin) — Mi è caduto il telefono e si è rotto lo schermo.
He is fixing the wifi connection. (hii iz fiksing de uaifai konekscën) — Sta sistemando la connessione wifi.
We were stuck in traffic for an hour. (ui uer stak in trafik for en auer) — Siamo rimasti bloccati nel traffico per un'ora.
Could you water the plants while I'm away? (kud iu uoter de plants uail aim euei) — Potresti annaffiare le piante mentre sono via?
I will pick up the kids from school. (ai uil pik ap de kidz from skuul) — Andrò a prendere i bambini a scuola.
The bank is closed on Sundays. (de benk iz klouzd on sandeiz) — La banca è chiusa la domenica.
We are planning a trip to the mountains. (ui ar pleninng e trip tu de mauntinz) — Stiamo pianificando un viaggio in montagna.
He lost his job last month. (hii lost hiz giob last manth) — Ha perso il lavoro il mese scorso.
I need a haircut before the wedding. (ai niid e herkat bifor de uedding) — Ho bisogno di un taglio di capelli prima del matrimonio.
She will send the package tomorrow morning. (scii uil send de pekëj tumorou morning) — Spedirà il pacco domani mattina.
We are cleaning the house before the guests arrive. (ui ar kliining de haus bifor de ghests araiv) — Stiamo pulendo la casa prima che arrivino gli ospiti.
I forgot my wallet at the restaurant. (ai forgot mai uolët et de restorant) — Ho dimenticato il portafoglio al ristorante.
The weather will improve by the weekend. (de ueder uil impruuv bai de uiikend) — Il tempo migliorerà entro il fine settimana.
He walks the dog every morning. (hii uoks de dog evri morning) — Porta a spasso il cane ogni mattina.
I have to return this book to the library. (ai hev tu riturn dis buk tu de laibreri) — Devo restituire questo libro in biblioteca.
We will paint the fence this weekend. (ui uil peint de fens dis uiikend) — Questo fine settimana tingeremo la staccionata.
She was cooking when the phone rang. (scii uoz kuking uen de foun reng) — Stava cucinando quando ha squillato il telefono.
Can you show me the way to the nearest station? (ken iu scio mi de uei tu de nirest steiscën) — Puoi indicarmi la strada per la stazione più vicina?
They are building a new bridge downtown. (dei ar bilding e niu brigj dauntaun) — Stanno costruendo un nuovo ponte in centro.
I will submit the application tomorrow. (ai uil sabmit di eplikeiscën tumorou) — Invierò la domanda domani.
We missed the connecting flight. (ui mist de konekting flait) — Abbiamo perso il volo di coincidenza.
My cousin is visiting us next week. (mai kazën iz viziting as nekst uiik) — Mio cugino ci verrà a trovare la prossima settimana.
Excuse me, where can I buy a bus ticket? (ekskiuz mi, uer ken ai bai e bas tiket) — Mi scusi, dove posso comprare un biglietto dell'autobus?
The teacher explained the lesson again. (de tiicer iksplend de lesën egen) — L'insegnante ha spiegato di nuovo la lezione.
I was sleeping when the alarm went off. (ai uoz sliiping uen di elarm uent of) — Stavo dormendo quando è suonata la sveglia.
We will repaint the living room next month. (ui uil ripeint de living ruum nekst manth) — Ridipingeremo il soggiorno il mese prossimo.
He always checks his email before breakfast. (hii olueiz ceks hiz iimeil bifor brekfast) — Controlla sempre le email prima di colazione.
Could you repeat that, please? (kud iu ripiit det, pliiz) — Potresti ripetere, per favore?
I have broken my glasses again. (ai hev broukën mai glasiz egen) — Ho rotto di nuovo gli occhiali.
The concert was cancelled due to rain. (de konsert uoz kenseld diu tu rein) — Il concerto è stato annullato a causa della pioggia.
We are organizing a surprise party for him. (ui ar orgenaiziing e serpraiz parti for him) — Stiamo organizzando una festa a sorpresa per lui.
She will graduate next June. (scii uil gredgiueit nekst giun) — Lei si laureerà a giugno prossimo.
I need to charge my phone before we leave. (ai niid tu ciarj mai foun bifor ui liiv) — Devo caricare il telefono prima di uscire.
My colleagues are working on a new project. (mai koliighz ar uorking on e niu prodjekt) — I miei colleghi stanno lavorando a un nuovo progetto.
We used to spend summers at the seaside. (ui iuzd tu spend samerz et de siisaid) — Passavamo le estati al mare.
Is there a supermarket around the corner? (iz der e supermarket eraund de korner) — C'è un supermercato dietro l'angolo?
He repaired the roof after the storm. (hii ripeird de ruuf after de storm) — Ha riparato il tetto dopo la tempesta.
The students will present their projects on Friday. (de stiudents uil prizent deir prodjekts on fraidei) — Gli studenti presenteranno i loro progetti venerdì.
I forgot to turn off the oven. (ai forgot tu tern of di aven) — Ho dimenticato di spegnere il forno.
I need to withdraw some cash from the ATM. (ai niid tu uidhdro sam kesc from di eitiem) — Devo prelevare dei contanti al bancomat.
We will watch the sunset from the terrace. (ui uil uocc de sanset from de teres) — Guarderemo il tramonto dalla terrazza.
She has just finished her shift at the hospital. (scii hez giast finiscd her scift et de hospitël) — Ha appena finito il turno in ospedale.
Could you turn on the heating, please? (kud iu tern on de hiiting, pliiz) — Potresti accendere il riscaldamento, per favore?
They are painting the fence in the garden. (dei ar peinting de fens in de gardën) — Stanno tinteggiando la staccionata in giardino.
I will train for the marathon this year. (ai uil trein for de meraton dis yir) — Mi allenerò per la maratona quest'anno.
We rented a car for the weekend. (ui rentid e kar for de uiikend) — Abbiamo noleggiato un'auto per il fine settimana.
My grandmother is knitting a scarf. (mai grendmader iz nitting e skarf) — Mia nonna sta lavorando a maglia una sciarpa.
Excuse me, is this seat free? (ekskiuz mi, iz dis siit frii) — Mi scusi, questo posto è libero?
He was jogging in the park this morning. (hii uoz giogging in de park dis morning) — Stamattina stava facendo jogging nel parco.
We will attend the concert next Friday. (ui uil etend de konsert nekst fraidei) — Andremo al concerto venerdì prossimo.
I dropped my keys down the drain. (ai dropt mai kiiz daun de drein) — Mi sono caduto le chiavi nel tombino.
She is preparing for a job interview. (scii iz priperring for e giob interviu) — Si sta preparando per un colloquio di lavoro.
We were camping when the storm started. (ui uer kemping uen de storm startid) — Eravamo in campeggio quando è iniziato il temporale.
Could you feed the cat this evening? (kud iu fiid de ket dis iivning) — Potresti dar da mangiare al gatto stasera?
I will return the rented equipment tomorrow. (ai uil riturn de rentid ikuipment tumorou) — Restituirò l'attrezzatura noleggiata domani.
The library closes early on Saturdays. (de laibreri klouziz erli on saterdeiz) — La biblioteca chiude presto il sabato.
We are planting tomatoes in the garden. (ui ar plenting tomeitouz in de gardën) — Stiamo piantando pomodori in giardino.
He broke his arm while skiing. (hii brouk hiz arm uail skiiing) — Si è rotto un braccio sciando.
I need new batteries for the remote. (ai niid niu beteriz for de rimout) — Ho bisogno di pile nuove per il telecomando.
She will publish her first novel next year. (scii uil pablisc her ferst novël nekst yir) — Pubblicherà il suo primo romanzo l'anno prossimo.
We are decorating the house for Christmas. (ui ar dekoreiting de haus for krismas) — Stiamo addobbando la casa per Natale.
The train was ten minutes late this morning. (de trein uoz ten minits leit dis morning) — Il treno stamattina è arrivato con dieci minuti di ritardo.
He volunteers at the shelter on weekends. (hii volentirz et de shelter on uiikendz) — Fa volontariato al rifugio nei weekend.
I have to renew my gym membership. (ai hev tu riniu mai giim membershipp) — Devo rinnovare l'abbonamento in palestra.
We will host my in-laws for dinner tonight. (ui uil houst mai inlouz for diner tunait) — Stasera ospiteremo i miei suoceri per cena.
She had finished the exam before the bell rang. (scii hed finiscd di igzem bifor de bel reng) — Aveva finito l'esame prima che suonasse la campanella.
Could you switch off the printer, please? (kud iu suicc of de printer, pliiz) — Potresti spegnere la stampante, per favore?
They are installing new windows in the house. (dei ar instoling niu uindouz in de haus) — Stanno installando nuove finestre in casa.
I will apply for a promotion next month. (ai uil eplai for e promouscën nekst manth) — Farò domanda per una promozione il mese prossimo.
We booked a table for our anniversary. (ui bukt e teibël for auer eniverseri) — Abbiamo prenotato un tavolo per il nostro anniversario.
My uncle is teaching me how to fish. (mai ankël iz tiiciing mi hau tu fisc) — Mio zio mi sta insegnando a pescare.
Excuse me, is this the queue for the ticket office? (ekskiuz mi, iz dis de kiu for de tiket ofis) — Mi scusi, è questa la fila per la biglietteria?
He was working from home when the internet went down. (hii uoz uorking from houm uen di internet uent daun) — Stava lavorando da casa quando è saltata la connessione internet.
We will join a language course in September. (ui uil giòin e lenguidj kors in september) — A settembre inizieremo un corso di lingua.
I spilled coffee on my laptop this morning. (ai spild kofi on mai laptop dis morning) — Stamattina ho versato il caffè sul portatile.
She is negotiating a new contract with her employer. (scii iz negosciieiting e niu kontrekt uidh her emploier) — Sta negoziando un nuovo contratto con il datore di lavoro.
We were hiking when it started to rain heavily. (ui uer haiking uen it startid tu rein hevili) — Stavamo facendo trekking quando ha iniziato a piovere forte.
Could you separate the recycling before Friday? (kud iu separeit de risaikling bifor fraidei) — Potresti fare la raccolta differenziata prima di venerdì?
I will return your umbrella tomorrow. (ai uil riturn ior ambrela tumorou) — Ti restituirò l'ombrello domani.
The plumber is fixing the leak in the bathroom. (de plamer iz fiksing de liik in de bathruum) — L'idraulico sta riparando la perdita in bagno.
We are considering moving abroad next year. (ui ar konsidering muuving ebrod nekst yir) — Stiamo pensando di trasferirci all'estero l'anno prossimo.
He sprained his ankle during the match. (hii spreind hiz enkël diuring de mecc) — Si è slogato la caviglia durante la partita.
I need to update my insurance policy. (ai niid tu apdeit mai inscurens polisi) — Devo aggiornare la mia polizza assicurativa.
She will host a video call with the whole team. (scii uil houst e vidiou kol uidh de houl tiim) — Organizzerà una videochiamata con tutto il team.
We are borrowing our neighbor's ladder. (ui ar borouing auer neiborz leder) — Stiamo prendendo in prestito la scala del vicino.
Is there a discount for students at the museum? (iz der e diskaunt for stiudents et de miuziëm) — C'è uno sconto per studenti al museo?
He commutes to work by bicycle every day. (hii komiuts tu uork bai baisikël evri dei) — Va al lavoro in bicicletta ogni giorno.
The electrician will come to check the fuse box. (di ilektriscën uil kam tu cek de fiuz boks) — L'elettricista verrà a controllare il quadro elettrico.
I need to see a dentist about this toothache. (ai niid tu sii e dentist ebaut dis tuutheik) — Devo andare dal dentista per questo mal di denti.
We will celebrate their retirement next Friday. (ui uil selebreit deir ritairment nekst fraidei) — Festeggeremo il loro pensionamento venerdì prossimo.
She had already paid the bill before I offered. (scii hed olredi peid de bil bifor ai oferd) — Aveva già pagato il conto prima che mi offrissi io.
Could you check the oil level in the car? (kud iu cek di oil levël in de kar) — Potresti controllare il livello dell'olio in macchina?
They are learning to drive this summer. (dei ar lerning tu draiv dis samer) — Questa estate stanno imparando a guidare.
I will resign from my job next month. (ai uil rizain from mai giob nekst manth) — Mi dimetterò dal lavoro il mese prossimo.
We are waiting for a package to arrive. (ui ar ueiting for e pekëj tu araiv) — Stiamo aspettando l'arrivo di un pacco.
My sister is learning photography as a hobby. (mai sister iz lerning fotografi ez e hobi) — Mia sorella sta imparando la fotografia come hobby.
Excuse me, has the mail arrived yet? (ekskiuz mi, hez de meil araivd yet) — Mi scusi, è già arrivata la posta?
He was baking a cake when the oven stopped working. (hii uoz beiking e keik uen di aven stopt uorking) — Stava preparando una torta quando il forno ha smesso di funzionare.
We will move to a new city next year. (ui uil muuv tu e niu siti nekst yir) — Ci trasferiremo in una nuova città l'anno prossimo.
I broke down on the highway this morning. (ai brouk daun on de haiuei dis morning) — Stamattina mi si è rotta l'auto in autostrada.
She is coaching the youth football team. (scii iz kouciing de iuth futbol tiim) — Allena la squadra giovanile di calcio.
We were camping when the tent collapsed. (ui uer kemping uen de tent kolepst) — Eravamo in campeggio quando la tenda è crollata.
Could you cancel my streaming subscription? (kud iu kensël mai striiming sabskripscën) — Potresti annullare il mio abbonamento allo streaming?
I will pay the electricity bill tomorrow. (ai uil pei di ilektrisiti bil tumorou) — Pagherò la bolletta della luce domani.
The doctor prescribed some new medication. (de dokter priskraibd sam niu medikeiscën) — Il medico ha prescritto un nuovo farmaco.
We are practicing for the school concert. (ui ar prektising for de skuul konsert) — Ci stiamo esercitando per il concerto scolastico.
He forgot his phone charger at the hotel. (hii forgot hiz foun ciarger et de houtel) — Ha dimenticato il caricabatterie del telefono in hotel.
I need to change my phone plan. (ai niid tu ceinj mai foun plen) — Devo cambiare il mio piano telefonico.
She will start painting the fence tomorrow. (scii uil start peinting de fens tumorou) — Domani inizierà a dipingere la staccionata.
We are cleaning out the garage this weekend. (ui ar kliining aut de garagj dis uiikend) — Questo fine settimana stiamo svuotando il garage.
My laptop crashed while I was saving the file. (mai laptop krescd uail ai uoz seiving de fail) — Il portatile si è bloccato mentre salvavo il file.
The library book is already overdue. (de laibreri buk iz olredi ouverdiu) — Il libro della biblioteca è già in ritardo.
He is preparing the garden for winter. (hii iz priperring de gardën for uinter) — Sta preparando il giardino per l'inverno.
I have to pick up a prescription at the pharmacy. (ai hev tu pik ap e priskripscën et de farmesi) — Devo ritirare una ricetta in farmacia.
We will attend a parent-teacher meeting tomorrow. (ui uil etend e perent-tiicer miiting tumorou) — Domani parteciperemo a un colloquio con gli insegnanti.
She had cleaned the whole house before the guests arrived. (scii hed kliind de houl haus bifor de ghests araivd) — Aveva pulito tutta la casa prima che arrivassero gli ospiti.
Could you check in for us at the hotel? (kud iu cek in for as et de houtel) — Potresti fare il check-in per noi in hotel?
They are organizing a charity event next month. (dei ar orgenaiziing e cheriti ivent nekst manth) — Stanno organizzando un evento di beneficenza il mese prossimo.
I will take the car to the mechanic this week. (ai uil teik de kar tu de mekenik dis uiik) — Porterò la macchina dal meccanico questa settimana.
We are planning a road trip along the coast. (ui ar pleninng e roud trip elong de koust) — Stiamo pianificando un viaggio in auto lungo la costa.
My nephew is working on a school project about volcanoes. (mai nefiu iz uorking on e skuul prodjekt ebaut volkeinouz) — Mio nipote sta lavorando a un progetto scolastico sui vulcani.
Excuse me, could I see the menu, please? (ekskiuz mi, kud ai sii de meniu, pliiz) — Mi scusi, potrei vedere il menu, per favore?
He was walking the dog when it started to rain. (hii uoz uoking de dog uen it startid tu rein) — Stava portando a spasso il cane quando ha iniziato a piovere.
We will take the cat to the vet on Monday. (ui uil teik de ket tu de vet on mandei) — Porteremo il gatto dal veterinario lunedì.
I returned the shoes because they were too small. (ai riturnd de sciuz bikoz dei uer tuu smol) — Ho restituito le scarpe perché erano troppo piccole.
She is preparing lunch for the whole family. (scii iz priperring lancc for de houl femili) — Sta preparando il pranzo per tutta la famiglia.
We were shopping online when the website crashed. (ui uer sciopping onlain uen de uebsait krescd) — Stavamo facendo acquisti online quando il sito si è bloccato.
Could you help me move this sofa? (kud iu help mi muuv dis soufa) — Potresti aiutarmi a spostare questo divano?
I will join the book club next week. (ai uil giòin de buk klab nekst uiik) — La prossima settimana entrerò nel club del libro.
The flight was delayed because of bad weather. (de flait uoz dileid bikoz ov bed ueder) — Il volo ha subito un ritardo a causa del maltempo.
We are hosting a family reunion this summer. (ui ar housting e femili riuniën dis samer) — Questa estate ospiteremo una riunione di famiglia.
He complained to the waiter about the cold soup. (hii kompleind tu de ueiter ebaut de kould suup) — Si è lamentato con il cameriere per la zuppa fredda.
I need to buy tickets for the festival. (ai niid tu bai tikets for de festivël) — Devo comprare i biglietti per il festival.
She will renovate the bathroom next spring. (scii uil renoveit de bathruum nekst spring) — Rinnoverà il bagno la prossima primavera.
We are viewing an apartment this afternoon. (ui ar viuing en apartment dis afternuun) — Questo pomeriggio andiamo a vedere un appartamento.
My colleague followed up on the job interview. (mai koliig foloud ap on de giob interviu) — Il mio collega ha fatto un follow-up sul colloquio di lavoro.
I packed a lunch for the hike. (ai pekt e lancc for de haik) — Ho preparato un pranzo al sacco per l'escursione.
The waiting room was full when we arrived. (de ueiting ruum uoz ful uen ui araivd) — La sala d'attesa era piena quando siamo arrivati.
I need to renew my driver's license this year. (ai niid tu riniu mai draiverz laisëns dis yir) — Devo rinnovare la patente quest'anno.
We will attend an art exhibition on Saturday. (ui uil etend en art eksibiscën on saterdei) — Sabato andremo a una mostra d'arte.
She had already installed the new software before the meeting. (scii hed olredi instold de niu softuer bifor de miiting) — Aveva già installato il nuovo software prima della riunione.
Could you set up the router for me? (kud iu set ap de rauter for mi) — Potresti configurarmi il router?
They are hiring new staff for the summer season. (dei ar hairing niu staf for de samer siizën) — Stanno assumendo nuovo personale per la stagione estiva.
I will transfer some money to my savings account. (ai uil transfer sam mani tu mai seivingz ekaunt) — Trasferirò del denaro sul mio conto di risparmio.
We are exchanging currency before the trip. (ui ar ikscenging kerensi bifor de trip) — Stiamo cambiando valuta prima del viaggio.
My colleague is attending a training course this week. (mai koliig iz etending e treining kors dis uiik) — Il mio collega sta seguendo un corso di formazione questa settimana.
Excuse me, where is the checkout desk? (ekskiuz mi, uer iz de cekaut desk) — Mi scusi, dov'è il banco per il check-out?
He was assembling the furniture when the screws ran out. (hii uoz esembling de fernicër uen de skruuz ren aut) — Stava montando il mobile quando sono finite le viti.
We will donate old clothes to charity. (ui uil douneit ould klouthz tu cheriti) — Doneremo vestiti vecchi in beneficenza.
I filed an insurance claim after the accident. (ai faild en inscurens kleim after di eksident) — Ho presentato una richiesta di risarcimento dopo l'incidente.
She is volunteering at the animal shelter this weekend. (scii iz volentiring et di enimël shelter dis uiikend) — Questo fine settimana fa volontariato al canile.
We were rehearsing when the fire alarm went off. (ui uer rihersing uen de faier elarm uent of) — Stavamo provando quando è scattato l'allarme antincendio.
Could you order a birthday cake for tomorrow? (kud iu order e berthdei keik for tumorou) — Potresti ordinare una torta di compleanno per domani?
I will rent a car for the business trip. (ai uil rent e kar for de biznes trip) — Noleggerò un'auto per il viaggio di lavoro.
The technician repaired my phone screen. (de tekniscën ripeird mai foun skriin) — Il tecnico ha riparato lo schermo del mio telefono.
We are taking a cooking class next month. (ui ar teiking e kuking klas nekst manth) — Il mese prossimo faremo un corso di cucina.
He installed a new security camera at the entrance. (hii instold e niu sekiuriti kamera et di entrens) — Ha installato una nuova telecamera di sicurezza all'ingresso.
I need to buy travel insurance before we leave. (ai niid tu bai trevël inscurens bifor ui liiv) — Devo comprare un'assicurazione di viaggio prima di partire.
She will join a language exchange group. (scii uil giòin e lenguidj ikscenj gruup) — Entrerà in un gruppo di scambio linguistico.
We are moving boxes into the new apartment. (ui ar muuving boksiz intu de niu apartment) — Stiamo portando gli scatoloni nel nuovo appartamento.
My brother subscribed to a monthly book box. (mai brader sabskraibd tu e manthli buk boks) — Mio fratello si è abbonato a una scatola mensile di libri.
The doctor scheduled a check-up for next week. (de dokter skediuld e cekap for nekst uiik) — Il medico ha fissato una visita di controllo per la prossima settimana.
Could I check in earlier than three o'clock? (kud ai cek in erlier den thrii oklok) — Potrei fare il check-in prima delle tre?
Where is the nearest ATM to withdraw cash? (uer iz de nirest eitiiem tu uidhdro kesc) — Dov'è il bancomat più vicino per prelevare contanti?
Could I have extra towels for the bathroom? (kud ai hev ekstra tauelz for de bathruum) — Potrei avere altri asciugamani per il bagno?
Is room service available twenty-four hours a day? (iz ruum servis eveilebël tuenti for auerz e dei) — Il servizio in camera è disponibile ventiquattr'ore su ventiquattr'ore?
I would like to book a table for two at eight o'clock. (ai wud laik tu buk e teibël for tuu et eit oklok) — Vorrei prenotare un tavolo per due alle otto.
Could you put the sauce on the side, please? (kud iu put de sos on de said, pliiz) — Potrebbe mettere la salsa a parte, per favore?
Do you have any vegetarian options on the menu? (du iu hev eni vegeteriën opscënz on de meniu) — Avete opzioni vegetariane nel menu?
I am allergic to nuts, does this dish contain any? (ai em elergik tu nats, daz dis disc kontein eni) — Sono allergico alla frutta a guscio, questo piatto ne contiene?
Can I pay the bill separately, please? (ken ai pei de bil sepretli, pliiz) — Posso pagare il conto separatamente, per favore?
Where can I find fresh fruits and vegetables? (uer ken ai faind fresc fruuts end vegetebëlz) — Dove posso trovare frutta e verdura fresca?
Excuse me, where are the dairy products located? (ekskiuz mi, uer ar de deri prodakts loukeitid) — Scusi, dove si trovano i prodotti lattiero-caseari?
Do I need to weigh the fruit before going to the checkout? (du ai niid tu uei de fruut bifor gouing tu de cekaut) — Devo pesare la frutta prima di andare alla cassa?
Is this item on sale this week? (iz dis aitëm on seil dis uiik) — Questo articolo è in offerta questa settimana?
I forgot my shopping bag in the car. (ai forgot mai sciopping bag in de kar) — Ho dimenticato la borsa della spesa in macchina.
Could you send me the calendar invite for the meeting? (kud iu send mi de kelender invait for de miiting) — Potresti inviarmi l'invito al calendario per la riunione?
I am currently working on the quarterly sales report. (ai em karrëntli uorking on de kuorterli seilz riport) — Al momento sto lavorando al rapporto vendite trimestrale.
Let us take a five-minute break before continuing. (let as teik e faiv minit breik bifor kontiniuing) — Facciamo una pausa di cinque minuti prima di continuare.
Please review the attached document before tomorrow morning. (pliiz riviu di etecd dokiument bifor tumorou morning) — Per favore, rivedi il documento allegato entro domani mattina.
I will be out of the office until next Monday. (ai uil bi aut ov di ofis antil nekst mandei) — Sarò fuori ufficio fino a lunedì prossimo.
Can we talk about this over coffee later? (ken ui tok ebaut dis ouver kofi leiter) — Posiamo parlarne davanti a un caffè più tardi?
I really appreciate your help with this project. (ai riili epriscieit ior help uidh dis prodjekt) — Apprezzo davvero il tuo aiuto con questo progetto.
I am running a bit late, see you in ten minutes. (ai em ranning e bit leit, sii iu in ten minits) — Sono un po' in ritardo, ci vediamo tra dieci minuti.
Let me know when you arrive safely. (let mi nou uen iu araiv seifli) — Fammi sapere quando arrivi a destinazione sano e salvo.
It was really nice catching up with you today. (it uoz riili nais keciing ap uidh iu tudei) — È stato davvero bello fare due chiacchiere con te oggi.
What time is dinner going to be ready? (uot taim iz diner gouing tu bi redi) — A che ora sarà pronta la cena?
Please remember to take out the rubbish tonight. (pliiz rimember tu teik aut de rabisc tunait) — Per favore ricordati di portare fuori la spazzatura stasera.
Could someone answer the doorbell, please? (kud samuan anser de dorbel, pliiz) — Qualcuno può andare ad aprire al campanello, per favore?
Do not forget to empty the dishwasher after lunch. (du not forget tu empti de disciuoscer after lancc) — Non dimenticare di svuotare la lavastoviglie dopo pranzo.
Who left the tap running in the bathroom? (huu left de tep ranning in de bathruum) — Chi ha lasciato il rubinetto aperto in bagno?
Is there a direct train to the city center from here? (iz der e direkt trein tu de siti senter from hir) — C'è un treno diretto per il centro città da qui?
How much does a day pass for public transport cost? (hau macc daz e dei pas for pablik trensport kost) — Quanto costa un biglietto giornaliero per i trasporti pubblici?
I would like to request a late check-out tomorrow. (ai wud laik tu rikuest e leit cekaut tumorou) — Vorrei richiedere un check-out ritardato per domani.
Can you store our luggage until our flight leaves? (ken iu stor auer lagëj antil auer flait liivz) — Puoi tenere i nostri bagagli fino alla partenza del nostro volo?
Could you call a taxi for us tomorrow at seven? (kud iu kol e teksi for as tumorou et sevën) — Potrebbe chiamarci un taxi domani alle sette?
Excuse me, is this the end of the line for this bus? (ekskiuz mi, iz dis di end ov de lain for dis bas) — Scusi, è capolinea per questo autobus?
I need to buy a SIM card for my mobile phone. (ai niid tu bai e sim kard for mai moubail foun) — Devo comprare una scheda SIM per il mio cellulare.
Is the tap water safe to drink here? (iz de tep uoter seif tu drink hir) — L'acqua del rubinetto è potabile qui?
Could you show me how this coffee machine works? (kud iu scio mi hau dis kofi mesciin uorks) — Potresti mostrarmi come funziona questa macchina del caffè?
I am looking for the nearest bakery in this neighborhood. (ai em luking for de nirest beikëri in dis neiborhud) — Sto cercando la panetteria più vicina in questo quartiere.
Can I get a receipt for this transaction, please? (ken ai ghet e risiit for dis trenzekscën, pliiz) — Posso avere una ricevuta per questa transazione, per favore?
We need to buy some paper towels and laundry detergent. (ui niid tu bai sam peiper tauelz end londri diterjent) — Dobbiamo comprare dei tovaglioli di carta e del detersivo per il bucato.
Could you mute your microphone during the presentation? (kud iu miut ior maikrofoun diuring de prezenteiscën) — Potresti disattivare il microfono durante la presentazione?
I will share my screen so everyone can see the slides. (ai uil scer mai skriin sou evriuan ken sii de slaidz) — Condividerò il mio schermo così tutti potranno vedere le diapositive.
Do you have time for a quick phone call this afternoon? (du iu hev taim for e kuik foun kol dis afternuun) — Hai tempo per una breve telefonata questo pomeriggio?
I am sorry, I did not catch your name earlier. (ai em sori, ai did not kecc ior neim erlier) — Scusa, non ho capito il tuo nome prima.
Let us order dessert after we finish our main course. (let as order dizert after ui finisc auer mein kors) — Ordiniamo il dolce dopo aver finito il piatto principale.
Please put your shoes near the front door. (pliiz put ior sciuz nir de front dor) — Per favore metti le scarpe vicino alla porta d'ingresso.
Could you set the table for four people, please? (kud iu set de teibël for for piipël, pliiz) — Potresti apparecchiare la tavola per quattro persone, per favore?
Don't forget to charge your laptop for school tomorrow. (dount forget tu ciarj ior laptop for skuul tumorou) — Non dimenticare di caricare il portatile per la scuola domani.
Have a wonderful trip and take plenty of photos! (hev e uanderful trip end teik plenti ov foutouz) — Fai un buon viaggio e scatta tante foto!
Is there an iron and an ironing board in the room? (iz der en airën end en airëning bord in de ruum) — C'è un ferro e un'asse da stiro in camera?
Could we get a table by the window? (kud ui ghet e teibël bai de uindou) — Potremmo avere un tavolo vicino alla finestra?
Is this product suitable for sensitive skin? (iz dis prodakt siutebël for sensitiv skin) — Questo prodotto è adatto alle pelli sensibili?
I am looking for the bakery department. (ai em luking for de beikëri dipartment) — Sto cercando il reparto panetteria.
Do you have this shirt in a medium size? (du iu hev dis shert in e miidiëm saiz) — Avete questa camicia in una taglia M?
Could you send me the feedback by the end of the day? (kud iu send mi de fiidbek bai di end ov de dei) — Potresti inviarmi il feedback entro la fine della giornata?
Let us set up a quick call to discuss the project. (let as set ap e kuik kol tu diskas de prodjekt) — Fissiamo una breve chiamata per discutere del progetto.
I will be working remotely tomorrow morning. (ai uil bi uorking rimoutli tumorou morning) — Domani mattina lavorerò da remoto.
Thank you for inviting us to dinner tonight. (thenk iu for invaiting as tu diner tunait) — Grazie per averci invitato a cena stasera.
Can you send me your location on the map? (ken iu send mi ior loukeiscën on de mep) — Puoi inviarmi la tua posizione sulla mappa?
Please put your dishes in the dishwasher. (pliiz put ior discëz in de disciuoscer) — Per favore metti i tuoi piatti nella lavastoviglie.
Who is going to clean the kitchen tonight? (huu iz gouing tu kliin de kicën tunait) — Chi pulirà la cucina stasera?
Do not forget to take your umbrella with you. (du not forget tu teik ior ambrela uidh iu) — Non dimenticare di portare l'ombrello con te.
Can you turn down the air conditioning a little? (ken iu tern daun di er kondiscëning e litël) — Puoi abbassare un po' l'aria condizionata?
Is there a gas station near the entrance? (iz der e ghes steiscën nir di entrens) — C'è una stazione di servizio vicino all'ingresso?
Where can I buy a ticket for the museum? (uer ken ai bai e tiket for de miuziëm) — Dove posso comprare un biglietto per il museo?
Does this hotel have a swimming pool on the roof? (daz dis houtel hev e suiming puul on de ruuf) — Questo hotel ha una piscina sul tetto?
What time does the breakfast buffet start? (uot taim daz de brekfast bufei start) — A che ora inizia il buffet della colazione?
I would like to pay with contactless payment. (ai wud laik tu pei uidh kontaktles peiment) — Vorrei pagare con il pagamento contactless.
Is this milk fresh or long-life? (iz dis milk fresc or long laif) — Questo latte è fresco o a lunga conservazione?
Can you help me find the olive oil aisle? (ken iu help mi faind di oliv oil ail) — Puoi aiutarmi a trovare la corsia dell'olio d'oliva?
I need to print this document before the meeting. (ai niid tu print dis dokiument bifor de miiting) — Devo stampare questo documento prima della riunione.
Could you clarify what you mean by that? (kud iu klerifai uot iu miin bai det) — Potresti chiarire cosa intendi con questo?
I will send you the updated invoice shortly. (ai uil send iu di apdeitid invois scortli) — Ti invierò la fattura aggiornata a breve.
We need to order more office supplies. (ui niid tu order mor ofis seplaiz) — Dobbiamo ordinare altre forniture per l'ufficio.
Are you free to hang out this afternoon? (ar iu frii tu heng aut dis afternuun) — Sei libero di uscire questo pomeriggio?
Take your time, there is no hurry. (teik ior taim, ders nou hari) — Fai con calma, non c'è fretta.
I am so glad we finally managed to meet. (ai em sou gled ui fainëli menegjd tu miit) — Sono così contento che siamo finalmente riusciti a incontrarci.
Could you help me lay the carpet in the hallway? (kud iu help mi lei de karpit in de holuei) — Potresti aiutarmi a stendere il tappeto nel corridoio?
Make sure to feed the cat before leaving. (meik sciur tu fiid de ket bifor liiving) — Assicurati di dare da mangiare al gatto prima di uscire.
Can you grab a loaf of bread from the bakery? (ken iu greb e louf ov bred from de beikëri) — Puoi prendere una pagnotta di pane in panetteria?
Is there a designated smoking area outside? (iz der e dezignetid smouking eria autsaid) — C'è un'area fumatori riservata all'esterno?
Could I get a glass of tap water, please? (kud ai ghet e glas ov tep uoter, pliiz) — Potrei avere un bicchiere d'acqua del rubinetto, per favore?
We would like to order two coffees to go. (ui wud laik tu order tuu kofiz tu gou) — Vorremmo ordinare due caffè da portare via.
Is this seafood fresh or frozen? (iz dis siifuud fresc or frouzën) — Questo pesce è fresco o surgelato?
Do you have a loyalty card for this shop? (du iu hev e loielti kard for dis sciop) — Ha una carta fedeltà per questo negozio?
The projector in the meeting room is not working. (de prodjektor in de miiting ruum iz not uorking) — Il proiettore nella sala riunioni non funziona.
Please reply to all participants in the email chain. (pliiz riplai tu ol partisipents in di iimeil cein) — Per favore rispondi a tutti i partecipanti nella catena di email.
I am taking a short lunch break now. (ai em teiking e short lancc breik nau) — Adesso faccio una breve pausa pranzo.
Give me a call as soon as you are free. (giv mi e kol ez suun ez iu ar frii) — Fammi una telefonata non appena sei libero.
I will text you the address right away. (ai uil tekst iu di edres rait euei) — Ti manderò subito l'indirizzo via messaggio.
Could you pass me the remote control, please? (kud iu pas mi de rimout kontroul, pliiz) — Potresti passarmi il telecomando, per favore?
Let us turn off the TV and go to sleep. (let as tern of de tii vii end gou tu sliip) — Spegniamo la TV e andiamo a dormire.
Do we have enough garbage bags in the house? (du ui hev inaf garbëj begz in de haus) — Abbiamo abbastanza sacchetti della spazzatura in casa?
Where is the nearest tourist information office? (uer iz de nirest turist informeiscën ofis) — Dov'è l'ufficio di informazioni turistiche più vicino?
Is the swimming pool heated in the winter? (iz de suiming puul hiitid in de uinter) — La piscina è riscaldata in inverno?
Can I get a tax-free refund form? (ken ai ghet e teksfrii rifand form) — Posso avere un modulo per il rimborso tax-free?
Where can I find gluten-free products here? (uer ken ai faind gliutën frii prodakts hir) — Dove posso trovare prodotti senza glutine qui?
Please sign the attendance sheet before leaving. (pliiz sain di etendens sciit bifor liiving) — Per favore firma il foglio presenze prima di uscire.
I hope you have a great rest of the day! (ai houp iu hev e greit rest ov de dei) — Spero che tu abbia un buon proseguimento di giornata!
Is there a luggage storage area after check-out? (iz der e lagëj storëj eria after cekaut) — C'è un deposito bagagli dopo il check-out?
Does the room have a safe for valuables? (daz de ruum hev e seif for veliuebëlz) — La camera ha una cassaforte per gli oggetti di valore?
Could you give us two key cards for the room? (kud iu giv as tuu kii kardz for de ruum) — Potrebbe darci due chiavi elettroniche per la camera?
What time does the airport shuttle leave? (uot taim daz di eirport shatël liiv) — A che ora parte la navetta per l'aeroporto?
Is parking included in the reservation? (iz parking inkluudid in de rezerveiscën) — Il parcheggio è incluso nella prenotazione?
Could we have a quiet table in the corner? (kud ui hev e kuaiet teibël in de korner) — Potremmo avere un tavolo tranquillo nell'angolo?
Is service included in the final bill? (iz servis inkluudid in de fainël bil) — Il servizio è incluso nel conto finale?
Do you have sparkling or still water? (du iu hev sparkling or stil uoter) — Avete acqua frizzante o naturale?
Could you bring us some extra napkins, please? (kud iu bring as sam ekstra nepkinz, pliiz) — Potrebbe portarci altri tovaglioli, per favore?
Is this table reserved for someone else? (iz dis teibël rizervd for samuan els) — Questo tavolo è riservato per qualcun altro?
Where can I find paper towels and tissues? (uer ken ai faind peiper tauelz end tiscuz) — Dove posso trovare i tovaglioli di carta e i fazzoletti?
Do you have fresh seafood today? (du iu hev fresc siifuud tudei) — Avete pesce fresco oggi?
Can I pay with contactless on my phone? (ken ai pei uidh kontaktles on mai foun) — Posso pagare con il contactless dal telefono?
Is there an offer on these products today? (iz der en ofer on diiz prodakts tudei) — C'è un'offerta su questi prodotti oggi?
Could you give me a paper bag, please? (kud iu giv mi e peiper beg, pliiz) — Potrebbe darmi un sacchetto di carta, per favore?
Please send me the meeting minutes when possible. (pliiz send mi de miiting minits uen posibël) — Per favore inviami il verbale della riunione appena possibile.
I will be away from my desk for twenty minutes. (ai uil bi euei from mai desk for tuenti minits) — Sarò lontano dalla mia scrivania per venti minuti.
Let us discuss this during our weekly sync. (let as diskas dis diuring auer uiikli sink) — Discutiamone durante il nostro allineamento settimanale.
Can you forward that email to the team? (ken iu foruord det iimeil tu de tiim) — Puoi inoltrare quell'email al team?
I need to update the project timeline today. (ai niid tu apdeit de prodjekt taimlain tudei) — Devo aggiornare la tempistica del progetto oggi.
Who is going to walk the dog this afternoon? (huu iz gouing tu uok de dog dis afternuun) — Chi porterà a spasso il cane questo pomeriggio?
Please take off your shoes at the entrance. (pliiz teik of ior sciuz et di entrens) — Per favore togliti le scarpe all'ingresso.
Can you set the alarm for seven o'clock? (ken iu set di elarm for sevën oklok) — Puoi impostare la sveglia per le sette?
Do not leave your wet towel on the bed. (du not liiv ior uet tauël on de bed) — Non lasciare il tuo asciugamano bagnato sul letto.
We need to buy more toilet paper and soap. (ui niid tu bai mor toilet peiper end soup) — Dobbiamo comprare altra carta igienica e sapone.
Are you feeling any better today? (ar iu fiiling eni beter tudei) — Ti senti un po' meglio oggi?
Thank you so much for the wonderful evening. (thenk iu sou macc for de uanderful iivning) — Grazie mille per la splendida serata.
Let me know if you need any help moving. (let mi nou if iu niid eni help muuving) — Fammi sapere se hai bisogno di aiuto con il trasloco.
Give me a shout when you arrive at the station. (giv mi e shaut uen iu araiv et de steiscën) — Fammi un fischio quando arrivi in stazione.
I am really looking forward to seeing you again. (ai em riili luking foruord tu siiing iu egen) — Non vedo l'ora di rivederti.
My phone battery is almost completely dead. (mai foun beteri iz olmoust kompliitli ded) — La batteria del mio telefono è quasi del tutto scarica.
Is there a post office near this street? (iz der e poust ofis nir dis striit) — C'è un ufficio postale vicino a questa strada?
The lift is temporarily out of service. (de lift iz temporerili aut ov servis) — L'ascensore è temporaneamente fuori servizio.
Could you tell me where the restrooms are? (kud iu tel mi uer de restruumz ar) — Potrebbe dirmi dove sono i bagni?
I think I left my jacket in the car. (ai think ai left mai giaket in de kar) — Penso di aver lasciato la giacca in macchina.
Which line should I take to get to the museum? (uicc lain sciud ai teik tu ghet tu de miuziëm) — Quale linea dovrei prendere per andare al museo?
Is there a connection to the city center? (iz der e konekscën tu de siti senter) — C'è una coincidenza per il centro città?
Do I need to validate this ticket before boarding? (du ai niid tu velideit dis tiket bifor bording) — Devo convalidare questo biglietto prima di salire?
How long is the delay for the train? (hau long iz de dilei for de trein) — Quanto dura il ritardo del treno?
Could you open the window a little bit? (kud iu oupën de uindou e litël bit) — Potresti aprire un po' la finestra?
I will double check the numbers and let you know. (ai uil dabël cek de namberz end let iu nou) — Ricontrollerò i numeri e ti farò sapere.
Could you share the link to the shared folder? (kud iu scer de link tu de scerd foulder) — Potresti condividere il link alla cartella condivisa?
We need to finalize the budget by tomorrow. (ui niid tu fainelaiz de bagjit bai tumorou) — Dobbiamo finalizzare il budget entro domani.
I am currently in a meeting, I will call you back. (ai em karrëntli in e miiting, ai uil kol iu bek) — Al momento sono in riunione, ti richiamo dopo.
Thank you for your prompt response to my request. (thenk iu for ior prompt rispons tu mai rikuest) — Grazie per la sollecita risposta alla mia richiesta.
Do you have an extension cord I can borrow? (du iu hev en ikstenscën kord ai ken borou) — Hai una prolunga che posso prendere in prestito?
Please lock the balcony door before going to bed. (pliiz lok de belkoni dor bifor gouing tu bed) — Per favore chiudi la porta del balcone prima di andare a dormire.
Can you help me move this heavy box? (ken iu help mi muuv dis hevi boks) — Puoi aiutarmi a spostare questa scatola pesante?
I need to make a copy of my identity card. (ai niid tu meik e kopi ov mai aidentiti kard) — Devo fare una copia della mia carta d'identità.
Have a safe journey home and see you soon! (hev e seif giurni houm end sii iu suun) — Buon viaggio di ritorno e a presto!
Could you recommend a local dish to try? (kud iu rekomend e loukël disc tu trai) — Potrebbe consigliarmi un piatto locale da provare?
Is there a hairdryer in the bathroom? (iz der e herdraier in de bathruum) — C'è un asciugacapelli in bagno?
What is the check-out time in the morning? (uot iz de cekaut taim in de morning) — A che ora è il check-out la mattina?
Could I have some extra pillows, please? (kud ai hev sam ekstra pilouz, pliiz) — Potrei avere dei cuscini extra, per favore?
Does the room have air conditioning and heating? (daz de ruum hev er kondiscëning end hiiting) — La stanza ha l'aria condizionata e il riscaldamento?
Can I make a reservation for tomorrow evening? (ken ai meik e rezerveiscën for tumorou iivning) — Posso fare una prenotazione per domani sera?
Is tap water okay or should I buy bottled water? (iz tep uoter okei or sciud ai bai botëld uoter) — L'acqua del rubinetto va bene o dovrei comprare acqua in bottiglia?
Could you bring us the dessert menu? (kud iu bring as de dizert meniu) — Potrebbe portarci il menu dei dolci?
We would like to split the bill, please. (ui wud laik tu split de bil, pliiz) — Vorremmo dividere il conto, per favore.
Do you have any sugar-free options available? (du iu hev eni sciugarfrii opscënz eveilebël) — Avete opzioni senza zucchero disponibili?
Where are the frozen foods located? (uer ar de frouzën fuudz loukeitid) — Dove si trovano i cibi surgelati?
Is there a bakery section in this store? (iz der e beikëri sekscën in dis stor) — C'è un reparto panetteria in questo negozio?
Can I get a plastic bag for these items? (ken ai ghet e plastik beg for diiz aitëmz) — Posso avere una busta di plastica per questi articoli?
Do you accept mobile payments here? (du iu eksept moubail peiments hir) — Accettate pagamenti dallo smartphone qui?
Excuse me, is this trolley free to use? (ekskiuz mi, iz dis trouli frii tu iuz) — Scusi, questo carrello è libero da usare?
I am sending you the link for the video call. (ai em sending iu de link for de vidiou kol) — Ti sto inviando il link per la videochiamata.
Please let me know your availability for next week. (pliiz let mi nou ior eveilebiliti for nekst uiik) — Per favore fammi sapere la tua disponibilità per la prossima settimana.
I need to reschedule our appointment to Friday. (ai niid tu riskediul auer epointment tu fraidei) — Devo spostare il nostro appuntamento a venerdì.
Could you mute your microphone when not speaking? (kud iu miut ior maikrofoun uen not spiiking) — Potresti disattivare il microfono quando non parli?
Let us discuss the details during the meeting. (let as diskas de diteilz diuring de miiting) — Discutiamo i dettagli durante la riunione.
What would you like to watch on TV tonight? (uot wud iu laik tu uocc on tii vii tunait) — Cosa vorresti guardare in TV stasera?
Could you help me unload the groceries from the car? (kud iu help mi anloud de grouseriz from de kar) — Puoi aiutarmi a scaricare la spesa dalla macchina?
Don't forget to water the flowers on the balcony. (dount forget tu uoter de flauerz on de belkoni) — Non dimenticare di annaffiare i fiori sul balcone.
Who is going to take out the recycling today? (huu iz gouing tu teik aut de risaikling tudei) — Chi porta fuori la raccolta differenziata oggi?
Is dinner ready or can I help with anything? (iz diner redi or ken ai help uidh enithing) — La cena è pronta o posso aiutare in qualcosa?
It was great seeing you after all this time. (it uoz greit siiing iu after ol dis taim) — È stato bello vederti dopo tutto questo tempo.
Give me a call whenever you get home. (giv mi e kol uenever iu ghet houm) — Fammi una telefonata ogni volta che arrivi a casa.
I hope you have a safe flight back home. (ai houp iu hev e seif flait bek houm) — Spero che tu faccia un buon volo di ritorno a casa.
Would you like to grab a quick coffee with me? (wud iu laik tu greb e kuik kofi uidh mi) — Ti andrebbe di prendere un caffè al volo con me?
Let me know if you need anything else from me. (let mi nou if iu niid enithing els from mi) — Fammi sapere se hai bisogno di qualcos'altro da parte mia.
Where is the nearest bus stop to the center? (uer iz de nirest bas stop tu de senter) — Dov'è la fermata dell'autobus più vicina per il centro?
Is there a taxi rank outside the station? (iz der e teksi renk autsaid de steiscën) — C'è una stazione dei taxi fuori dalla stazione?
How far is the hotel from the beach? (hau far iz de houtel from de biicc) — Quanto dista l'hotel dalla spiaggia?
Can I buy tickets directly on the bus? (ken ai bai tikets direktli on de bas) — Posso comprare i biglietti direttamente sull'autobus?
Is this seat reserved for elderly passengers? (iz dis siit rizervd for elderli pasengerz) — Questo posto è riservato ai passeggeri anziani?
Where can I find a pharmacy open late tonight? (uer ken ai faind e farmesi oupën leit tunait) — Dove posso trovare una farmacia aperta fino a tarda notte?
Could you tell me where the nearest bank is? (kud iu tel mi uer de nirest benk iz) — Potrebbe dirmi dov'è la banca più vicina?
Is there a free Wi-Fi network in this area? (iz der e frii uaifai netuork in dis eria) — C'è una rete Wi-Fi gratuita in questa zona?
What time does the shopping center close on Saturdays? (uot taim daz de sciopping senter klouz on saterdeiz) — A che ora chiude il centro commerciale il sabato?
I need to buy a plug adapter for my electronics. (ai niid tu bai e plag edapter for mai ilektroniks) — Devo comprare un adattatore per le mie apparecchiature elettroniche.
Could you lower your voice a bit, please? (kud iu louer ior vois e bit, pliiz) — Potresti abbassare un po' la voce, per favore?
Please remember to lock the front door when leaving. (pliiz rimember tu lok de front dor uen liiving) — Per favore ricordati di chiudere a chiave la porta d'ingresso quando esci.
Can you pass me the salt and pepper, please? (ken iu pas mi de solt end peper, pliiz) — Puoi passarmi il sale e il pepe, per favore?
I am going to take a quick shower before dinner. (ai em gouing tu teik e kuik sciauer bifor diner) — Vado a fare una doccia veloce prima di cena.
Make sure to turn off the heating before going out. (meik sciur tu tern of de hiiting bifor gouing aut) — Assicurati di spegnere il riscaldamento prima di uscire.
I will send you a text message as soon as I land. (ai uil send iu e tekst mesëj ez suun ez ai lend) — Ti manderò un messaggio di testo non appena atterro.
We are planning a small weekend trip to the mountains. (ui ar pleninng e smol uiikend trip tu de mauntinz) — Stiamo organizzando una breve gita nel fine settimana in montagna.
Thank you for your hospitality during our stay. (thenk iu for ior hospitaliti diuring auer stei) — Grazie per la vostra ospitalità durante il nostro soggiorno.
Do you have any recommendations for a local guide? (du iu hev eni rekomendeiscënz for e loukël gaid) — Ha qualche raccomandazione per una guida locale?
Have a great weekend and enjoy your time off! (hev e greit uiikend end engioi ior taim of) — Buon fine settimana e goditi il tempo libero!
What time does the school assembly start? (uot taim daz de skuul esembli start) — A che ora inizia l'assemblea scolastica?
Please open your textbooks to page forty-five. (pliiz oupën ior tekstbuks tu peidj forti faiv) — Per favore aprite i libri di testo a pagina quarantacinque.
Do we have a math test tomorrow morning? (du ui hev e math test tumorou morning) — Abbiamo un compito in classe di matematica domani mattina?
My teacher gave us a lot of homework for the weekend. (mai tiicer gheiv as e lot ov houmuork for de uiikend) — Il mio insegnante ci ha dato molti compiti per il fine settimana.
Where is the school library located? (uer iz de skuul laibreri loukeitid) — Dove si trova la biblioteca della scuola?
I need to buy a new pencil case and a ruler. (ai niid tu bai e niu pensil keis end e ruler) — Devo comprare un astuccio nuovo e un righello.
Who is responsible for cleaning the blackboard? (huu iz risponsibël for kliining de blekbord) — Chi è responsabile di pulire la lavagna?
The geography project is due next Monday. (de gioghrafi prodjekt iz diu nekst mandei) — Il progetto di geografia scade lunedì prossimo.
Did you study for the history oral exam? (did iu stadi for de histëri orël igzem) — Hai studiato per l'interrogazione di storia?
Can I borrow a blue pen, please? (ken ai borou e bluu pen, pliiz) — Posso prendere in prestito una penna blu, per favore?
Can I try on these trousers in a larger size? (ken ai trai on diiz trauzerz in e larger saiz) — Posso provare questi pantaloni in una taglia più grande?
Are there any discounts on the winter collection? (ar der eni diskaunts on de uinter kolekscën) — Ci sono sconti sulla collezione invernale?
Where can I find the cash desk to pay? (uer ken ai faind de kesc desk tu pei) — Dove posso trovare la cassa per pagare?
I would like to return this shirt because it is damaged. (ai wud laik tu riturn dis shert bikoz it iz demëjd) — Vorrei restituire questa camicia perché è danneggiata.
Does this item come with a two-year warranty? (daz dis aitëm kam uidh e tuu yir uoranti) — Questo articolo ha una garanzia di due anni?
Can I keep the hanger for the dress? (ken ai kiip de henger for de dres) — Posso tenere la gruccia per l'abito?
Is this store open on public holidays? (iz dis stor oupën on pablik holidiz) — Questo negozio è aperto nei giorni festivi?
I am just looking around, thank you. (ai em giast luking eraund, thenk iu) — Sto solo dando un'occhiata, grazie.
Do you have a paper bag for my purchases? (du iu hev e peiper beg for mai percësiz) — Ha una busta di carta per i miei acquisti?
This pair of shoes is very comfortable to wear. (dis per ov sciuz iz veri kamfortebël tu uer) — Questo paio di scarpe è molto comodo da indossare.
We rented a small cottage near the lake. (ui rentid e smol kotëj nir de leik) — Abbiamo affittato un piccolo cottage vicino al lago.
I love sunbathing on the beach in the afternoon. (ai lav sanbeithing on de biicc in di afternuun) — Amo prendere il sole in spiaggia nel pomeriggio.
Don't forget to put on sun cream before going out. (dount forget tu put on san kriim bifor gouing aut) — Non dimenticare di mettere la crema solare prima di uscire.
We booked a guided tour of the historic city center. (ui bukt e gaidid tur ov de histerik siti senter) — Abbiamo prenotato una visita guidata del centro storico.
The view from our balcony is absolutely breathtaking. (de viu from auer belkoni iz absoluutli brethteiking) — La vista dal nostro balcone è assolutamente mozzafiato.
What souvenir should we buy for our family? (uot suuvenir sciud ui bai for auer femili) — Che souvenir dovremmo comprare per la nostra famiglia?
We are going snorkeling in the crystal clear water. (ui ar gouing snorkëling in de kristël klir uoter) — Faremo snorkeling nell'acqua cristallina.
I bought a postcard to send to my grandparents. (ai bot e poustkard tu send tu mai grendperents) — Ho comprato una cartolina da spedire ai miei nonni.
We spent the whole week relaxing by the pool. (ui spent de houl uiik rilexing bai de puul) — Abbiamo passato l'intera settimana a rilassarci in piscina.
The local cuisine in this region is extraordinary. (de loukël kuiziin in dis rijën iz ikstrordineri) — La cucina locale di questa regione è straordinaria.
Please double check the attachment before sending the email. (pliiz dabël cek di etecment bifor sending di iimeil) — Per favore ricontrolla l'allegato prima di inviare l'email.
I am going to grab a sandwich for lunch. (ai em gouing tu greb e sendwicc for lancc) — Vado a prendere un sandwich per pranzo.
Can you remind me to buy milk on the way home? (ken iu rimaind mi tu bai milk on de uei houm) — Puoi ricordarmi di comprare il latte strada facendo verso casa?
Let us take a short break to stretch our legs. (let as teik e short breik tu strecc auer legz) — Facciamo una breve pausa per sgranchirci le gambe.
The traffic was terrible on the motorway this morning. (de trafik uoz teribël on de moutoruei dis morning) — Il traffico era terribile in autostrada stamattina.
Could you please turn down the bright screen? (kud iu pliiz tern daun de brait skriin) — Potresti abbassare la luminosità dello schermo, per favore?
We need to replace the bulb in the hallway lamp. (ui niid tu ripleis de balb in de holuei lemp) — Dobbiamo sostituire la lampadina della lampada in corridoio.
I left my sunglasses on the kitchen table. (ai left mai sanglasiz on de kicën teibël) — Ho lasciato i miei occhiali da sole sul tavolo della cucina.
Are you coming to the party this Saturday evening? (ar iu kaming tu de parti dis saterdei iivning) — Vieni alla festa questo sabato sera?
I will send you a text as soon as I arrive at the venue. (ai uil send iu e tekst ez suun ez ai araiv et de veniu) — Ti manderò un messaggio appena arrivo sul posto.
What time does the flight start boarding? (uot taim daz de flait start bording) — A che ora inizia l'imbarco del volo?
Remember to bring your swimming suit and a towel. (rimember tu bring ior suiming suut end e tauël) — Ricordati di portare il costume da bagno e un asciugamano.
Can I pay for my coffee with a credit card? (ken ai pei for mai kofi uidh e kredit kard) — Posso pagare il mio caffè con la carta di credito?
My laptop charger is not working properly today. (mai laptop ciarger iz not uorking properli tudei) — Il caricabatterie del mio computer non funziona bene oggi.
Let us meet right in front of the fountain. (let as miit rait in front ov de fauntën) — Incontriamoci proprio davanti alla fontana.
Do you want me to help you carry the luggage? (du iu uont mi tu help iu keri de lagëj) — Vuoi che ti aiuti a portare i bagagli?
The supermarket down the street is open late tonight. (de supermarket daun de striit iz oupën leit tunait) — Il supermercato in fondo alla strada è aperto fino a tardi stasera.
We had such a great time together yesterday. (ui hed sacc e greit taim tugheder iesterdei) — Siamo stati davvero bene insieme ieri.
Could you please pass me the bread basket? (kud iu pliiz pas mi de bred basket) — Potresti passarmi il cestino del pane, per favore?
Have a safe journey and text me when you land. (hev e seif giurni end tekst mi uen iu lend) — Buon viaggio e mandami un messaggio quando atterri.
What is the deadline for this science project? (uot iz de dedlain for dis saiëns prodjekt) — Qual è la scadenza per questo progetto di scienze?
Does this shop offer a discount for cash payments? (daz dis sciop ofer e diskaunt for kesc peiments) — Questo negozio offre uno sconto per i pagamenti in contanti?
We rented a bicycle to explore the coastal village. (ui rentid e baisikël tu iksplor de koustël vilëj) — Abbiamo noleggiato una bicicletta per esplorare il villaggio costiero.
Could you please send me the password for the conference room? (kud iu pliiz send mi de pasuord for de konferens ruum) — Potresti inviarmi la password per la sala conferenze?
Is there a safe box inside the room? (iz der e seif boks insaid de ruum) — C'è una cassaforte all'interno della camera?
Excuse me, where can I find the fresh pasta aisle? (ekskiuz mi, uer ken ai faind de fresc pasta ail) — Scusi, dove posso trovare la corsia della pasta fresca?
Could you help me wash the dishes after dinner? (kud iu help mi uosc de discëz after diner) — Puoi aiutarmi a lavare i piatti dopo cena?
I missed the bus so I had to walk to school. (ai mist de bas sou ai hed tu uok tu skuul) — Ho perso l'autobus quindi ho dovuto camminare fino a scuola.
Can I return this item if I keep the receipt? (ken ai riturn dis aitëm if ai kiip de risiit) — Posso restituire questo articolo se conservo lo scontrino?
We decided to extend our vacation by three days. (ui disaidid tu ikstend auer veikeiscën bai thrii deiz) — Abbiamo deciso di prolungare la nostra vacanza di tre giorni.
I have attached the meeting notes to this email. (ai hev etecd de miiting noutz tu dis iimeil) — Ho allegato le note della riunione a questa email.
Can we ask for extra blankets for the bed? (ken ui ask for ekstra blenkits for de bed) — Possiamo chiedere delle coperte extra per il letto?
Is there a special deal on organic vegetables today? (iz der e speciël diil on organik vegetebëlz tudei) — C'è un'offerta speciale sulla verdura biologica oggi?
Don't forget to take out the bins before bedtime. (dount forget tu teik aut de binz bifor bedtaim) — Non dimenticare di portare fuori i cestini prima di andare a dormire.
Our class is going on a field trip next month. (auer klas iz gouing on e fiild trip nekst manth) — La nostra classe farà una gita scolastica il mese prossimo.
Where can I try on these shoes? (uer ken ai trai on diiz sciuz) — Dove posso provare queste scarpe?
The beach was quite crowded during the weekend. (de biicc uoz kuait kraudid diuring de uiikend) — La spiaggia era piuttosto affollata durante il fine settimana.
Let us schedule a follow-up meeting next Tuesday. (let as skediul e foloap miiting nekst tiuzdei) — Fissiamo una riunione di aggiornamento martedì prossimo.
Could you please call us a cab to the train station? (kud iu pliiz kol as e keb tu de trein steiscën) — Potrebbe chiamarci un taxi per la stazione ferroviaria?
Where are the canned goods located in this store? (uer ar de kend gudz loukeitid in dis stor) — Dove si trovano i prodotti in scatola in questo negozio?
Who left their jacket on the living room sofa? (huu left deir giaket on de living ruum soufa) — Chi ha lasciato la giacca sul divano del soggiorno?
The teacher asked us to sit in pairs. (de tiicer askt as tu sit in perz) — L'insegnante ci ha chiesto di sederci a coppie.
Do you have this dress in a different color? (du iu hev dis dres in e diferent kaler) — Avete questo vestito in un altro colore?
We took a boat tour to see the sea caves. (ui tuk e bout tur tu sii de sii keivz) — Abbiamo fatto un tour in barca per vedere le grotte marine.
I will share the update with the team tomorrow. (ai uil scer di apdeit uidh de tiim tumorou) — Condividerò l'aggiornamento con il team domani.
What time is the swimming pool open until? (uot taim iz de suiming puul oupën antil) — Fino a che ora è aperta la piscina?
Are these eggs free-range or organic? (ar diiz eghz frii reinj or organik) — Queste uova sono da allevamento all'aperto o biologiche?
Can you turn down the television volume, please? (ken iu tern daun de televiscën voliuum, pliiz) — Puoi abbassare il volume della televisione, per favore?
I forgot my gym kit in the school locker. (ai forgot mai giim kit in de skuul loker) — Ho dimenticato il mio kit da ginnastica nell'armadietto della scuola.
Do I get a gift card with this purchase? (du ai ghet e ghift kard uidh dis percës) — Ricevo una carta regalo con questo acquisto?
We bought souvenirs for all our relatives back home. (ui bot suuvenirz for ol auer reletivz bek houm) — Abbiamo comprato souvenir per tutti i nostri parenti a casa.
Please confirm your attendance by the end of the day. (pliiz konfirm ior etendens bai di end ov de dei) — Per favore conferma la tua presenza entro la fine della giornata.
Can I have a room with a double bed, please? (ken ai hev e ruum uidh e dabël bed, pliiz) — Posso avere una camera con letto matrimoniale, per favore?
Could you tell me if these tomatoes are locally grown? (kud iu tel mi if diiz tomeitouz ar loukëli grouwn) — Potrebbe dirmi se questi pomodori sono a chilometro zero?
We should hang up the laundry before it starts raining. (ui sciud heng ap de londri bifor it starts reining) — Dovremmo stendere il bucato prima che inizi a piovere.
Our principal gave an inspiring speech today. (auer prinsipël gheiv en inspaiëring spiicc tudei) — Il nostro preside ha fatto un discorso ispiratore oggi.
Is there a queue for the fitting room? (iz der e kiu for de fiting ruum) — C'è coda per il camerino?
We went hiking in the national park all morning. (ui uent haiking in de nescënël park ol morning) — Siamo andati a fare un'escursione nel parco nazionale per tutta la mattina.
I am currently out of office with limited email access. (ai em karrëntli aut ov ofis uidh limitid iimeil ekses) — Al momento sono fuori ufficio con accesso limitato all'email.
Could you recommend a good local pub nearby? (kud iu rekomend e gud loukël pab nirbai) — Potrebbe consigliarmi un buon pub locale qui vicino?
Where can I find olive oil and vinegar? (uer ken ai faind oliv oil end vineger) — Dove posso trovare l'olio d'oliva e l'aceto?
Please remember to feed the dog before you leave. (pliiz rimember tu fiid de dog bifor iu liiv) — Per favore ricordati di dare da mangiare al cane prima di uscire.
We need to buy a notebook for geography class. (ui niid tu bai e noutbuk for gioghrafi klas) — Dobbiamo comprare un quaderno per la classe di geografia.
Do you offer gift wrapping for this item? (du iu ofer ghift reping for dis aitëm) — Offrite una confezione regalo per questo articolo?
The flight attendant asked us to fasten our seatbelts. (de flait etendent askt as tu fasën auer siitbelts) — L'assistente di volo ci ha chiesto di allacciare le cinture di sicurezza.
Let us review the project deliverables together. (let as riviu de prodjekt diliverebëlz tugheder) — Rivediamo insieme i risultati attesi del progetto.
Could we get two extra keys for our room? (kud ui ghet tuu ekstra kiiz for auer ruum) — Potremmo avere due chiavi extra per la nostra stanza?
Is there a bakery counter in this supermarket? (iz der e beikëri kaunter in dis supermarket) — C'è un banco panetteria in questo supermercato?
Let us organize a game night with the whole family. (let as organaiz e gheim nait uidh de houl femili) — Organizziamo una serata giochi con tutta la famiglia.
Enjoy your summer break and see you in September! (engioi ior samer breik end sii iu in september) — Goditi le vacanze estive e ci vediamo a settembre!
Do we have any homework for English class? (du ui hev eni houmuork for inglisc klas) — Abbiamo compiti per la classe di inglese?
Where can I exchange currency near the hotel? (uer ken ai ikscenj kerensi nir de houtel) — Dove posso cambiare la valuta vicino all'hotel?
Could I have the receipt for this purchase? (kud ai hev de risiit for dis percës) — Potrei avere lo scontrino per questo acquisto?
We are planning a family dinner for Friday. (ui ar pleninng e femili diner for fraidei) — Stiamo organizzando una cena in famiglia per venerdì.
Is there a swimming pool in this resort? (iz der e suiming puul in dis rizort) — C'è una piscina in questo villaggio turistico?
I am sending you the revised contract now. (ai em sending iu de rivaizd kontrekt nau) — Ti sto inviando il contratto revisionato adesso.
Can you tell me which aisle the coffee is in? (ken iu tel mi uicc ail de kofi iz in) — Puoi dirmi in quale corsia si trova il caffè?
Please turn off the computer when you finish. (pliiz tern of de kompiuter uen iu finisc) — Per favore spegni il computer quando finisci.
We booked our flights three months ago. (ui bukt auer flaits thrii manths egou) — Abbiamo prenotato i nostri voli tre mesi fa.
Do you sell fresh bread here every day? (du iu sel fresc bred hir evri dei) — Vendete pane fresco qui tutti i giorni?
What time does the lesson finish today? (uot taim daz de lesën finisc tudei) — A che ora finisce la lezione oggi?
Can I try these shoes in a size eight? (ken ai trai diiz sciuz in e saiz eit) — Posso provare queste scarpe nella taglia trentotto?
I am looking forward to our vacation next month. (ai em luking foruord tu auer veikeiscën nekst manth) — Non vedo l'ora di fare le nostre vacanze il mese prossimo.
Could you send me the location on WhatsApp? (kud iu send mi de loukeiscën on uotsap) — Potresti inviarmi la posizione su WhatsApp?
Who is taking care of the plants while we are away? (huu iz teiking ker ov de plants uail ui ar euei) — Chi si prende cura delle piante mentre siamo via?
The teacher asked us to work in small groups. (de tiicer askt as tu uork in smol gruups) — L'insegnante ci ha chiesto di lavorare in piccoli gruppi.
Is breakfast served in the room or in the dining hall? (iz brekfast servd in de ruum or in de daining hol) — La colazione è servita in camera o nella sala da pranzo?
I need to buy a birthday card for my sister. (ai niid tu bai e berthdei kard for mai sister) — Devo comprare un biglietto di auguri per mia sorella.
Can we split the bill three ways? (ken ui split de bil thrii ueiz) — Possiamo dividere il conto in tre?
Where is the nearest bus station located? (uer iz de nirest bas steiscën loukeitid) — Dove si trova la stazione degli autobus più vicina?
I need to print my boarding pass for the flight. (ai niid tu print mai bording pas for de flait) — Devo stampare la mia carta d'imbarco per il volo.
Could you pass me the notebook from the shelf? (kud iu pas mi de noutbuk from de shelf) — Potresti passarmi il quaderno dallo scaffale?
Is there a discount for groups at the museum? (iz der e diskaunt for gruups et de miuziëm) — C'è uno sconto per i gruppi al museo?
Please remind me to take the laundry out. (pliiz rimaind mi tu teik de londri aut) — Per favore ricordami di togliere il bucato.
We spent the day exploring the old town. (ui spent de dei iksploring di ould taun) — Abbiamo passato la giornata ad esplorare il centro storico.
Does this jacket come with a hood? (daz dis giaket kam uidh e hud) — Questa giacca ha il cappuccio?
I am writing an essay for my history course. (ai em raiting en essei for mai histëri kors) — Sto scrivendo un tema per il mio corso di storia.
Can I leave my key at the reception desk? (ken ai liiv mai kii et de risepscën desk) — Posso lasciare la chiave al banco della reception?
Is this product locally produced? (iz dis prodakt loukëli prodiust) — Questo prodotto è a chilometro zero?
Let us discuss the sales figures in the meeting. (let as diskas de seilz figherz in de miiting) — Discutiamo i dati di vendita nella riunione.
Do you need a ride to the airport tomorrow? (du iu niid e raid tu di eirport tumorou) — Hai bisogno di un passaggio per l'aeroporto domani?
We need to buy more paper for the printer. (ui niid tu bai mor peiper for de printer) — Dobbiamo comprare altra carta per la stampante.
Can you help me set up the table in the garden? (ken iu help mi set ap de teibël in de gardën) — Puoi aiutarmi ad apparecchiare il tavolo in giardino?
What is the deadline for submitting the application? (uot iz de dedlain for sabmiting di eplikeiscën) — Qual è la scadenza per inviare la candidatura?
The hotel offers a shuttle service to the beach. (de houtel oferz e shatël servis tu de biicc) — L'hotel offre un servizio navetta per la spiaggia.
I would like to pay by debit card. (ai wud laik tu pei bai debit kard) — Vorrei pagare con carta di debito.
Is there a playground for children nearby? (iz der e pleigraund for cildren nirbai) — C'è un parco giochi per bambini qui vicino?
Could you give me some advice on what to visit? (kud iu giv mi sam edvais on uot tu vizit) — Potrebbe darmi qualche consiglio su cosa visitare?
We bought some fresh fruit at the street market. (ui bot sam fresc fruut et de striit market) — Abbiamo comprato della frutta fresca al mercato di strada.
Do not forget your coat, it is cold outside. (du not forget ior kout, it iz kould autsaid) — Non dimenticare il cappotto, fa freddo fuori.
The exam results will be published next week. (di igzem risalts uil bi pablisct nekst uiik) — I risultati dell'esame saranno pubblicati la prossima settimana.
Is there an extra charge for late check-in? (iz der en ekstra ciarj for leit cekin) — C'è un costo aggiuntivo per il check-in ritardato?
Could you please turn on the air conditioner? (kud iu pliiz tern on di er kondiscëner) — Potresti accendere l'aria condizionata, per favore?
I am looking for a gift for a colleague. (ai em luking for e ghift for e koliig) — Sto cercando un regalo per un collega.
We rented a car to drive along the coast. (ui rentid e kar tu draiv elong de koust) — Abbiamo noleggiato un'auto per guidare lungo la costa.
Can you answer the phone while I cook? (ken iu anser de foun uail ai kuk) — Puoi rispondere al telefono mentre cucino?
Please double check the delivery address. (pliiz dabël cek de diliveri edres) — Per favore ricontrolla l'indirizzo di spedizione.
Where is the nearest subway entrance? (uer iz de nirest sabuei entrens) — Dov'è l'ingresso della metropolitana più vicino?
I need to return these shoes to the shop. (ai niid tu riturn diiz sciuz tu de sciop) — Devo restituire queste scarpe al negozio.
Enjoy your meal and have a great evening! (engioi ior miil end hev e greit iivning) — Buon appetito e trascorri una bella serata!
Could you check if the wifi connection is working? (kud iu cek if de uaifai konekscën iz uorking) — Potresti controllare se la connessione wifi funziona?
Where can I rent an electric bicycle? (uer ken ai rent en ilektrik baisikël) — Dove posso noleggiare una bicicletta elettrica?
I need to make an online payment for this bill. (ai niid tu meik en onlain peiment for dis bil) — Devo effettuare un pagamento online per questa bolletta.
Could you please hand me the keys to the garage? (kud iu pliiz hend mi de kiiz tu de garagj) — Potresti passarmi le chiavi del garage, per favore?
The lesson has been moved to room four. (de lesën hez bin muuvd tu ruum for) — La lezione è stata spostata nell'aula quattro.
Is there a microwave available in the kitchen? (iz der e maikroueiv eveilebël in de kicën) — C'è un forno a microonde disponibile in cucina?
Can I try on this sweater in medium? (ken ai trai on dis suetter in miidiëm) — Posso provare questo maglione nella taglia M?
Please save your work before shutting down the computer. (pliiz seiv ior uork bifor sciating daun de kompiuter) — Per favore salva il tuo lavoro prima di spegnere il computer.
Do you know where the nearest charging station is? (du iu nou uer de nirest ciarging steiscën iz) — Sai dov'è la stazione di ricarica più vicina?
We have a family picnic planned for Sunday afternoon. (ui hev e femili piknik plend for sandei afternuun) — Abbiamo in programma un picnic in famiglia per domenica pomeriggio.
Can I get this dress altered at your shop? (ken ai ghet dis dres olterd et ior sciop) — Posso far modificare questo vestito nel vostro negozio?
What time does the museum guided tour start? (uot taim daz de miuziëm gaidid tur start) — A che ora inizia la visita guidata del museo?
I am going to buy some fresh bread for dinner. (ai em gouing tu bai sam fresc bred for diner) — Vado a comprare del pane fresco per cena.
Could you put these files in the office folder? (kud iu put diiz failz in di ofis foulder) — Potresti mettere questi file nella cartella dell'ufficio?
My daughter is rehearsing for the school play. (mai doter iz rihersing for de skuul plei) — Mia figlia sta provando per lo spettacolo teatrale della scuola.
We had a wonderful lunch overlooking the sea. (ui hed e uanderful lancc ouverluking de sii) — Abbiamo fatto un pranzo meraviglioso con vista mare.
Please don't forget to pack your passport. (pliiz dount forget tu pek ior pasport) — Per favore non dimenticare di mettere in valigia il passaporto.
Is there a group discount for the theatre tickets? (iz der e gruup diskaunt for de thieter tikets) — C'è uno sconto di gruppo per i biglietti del teatro?
Can I change my seat to an aisle seat? (ken ai ceinj mai siit tu en ail siit) — Posso cambiare il mio posto con uno vicino al corridoio?
Who is coming with us to the supermarket today? (huu iz kaming uidh as tu de supermarket tudei) — Chi viene con noi al supermercato oggi?
I need to print twenty copies of this document. (ai niid tu print tuenti kopiz ov dis dokiument) — Devo stampare venti copie di questo documento.
Could you tell me where the shoe department is? (kud iu tel mi uer de sciu dipartment iz) — Potrebbe dirmi dov'è il reparto calzature?
We are going camping in the forest this weekend. (ui ar gouing kemping in de forest dis uiikend) — Questo fine settimana andremo in campeggio nella foresta.
Please wake me up at six o'clock tomorrow. (pliiz ueik mi ap et siks oklok tumorou) — Per favore svegliami alle sei domani.
Can I ask for an extra clothes hanger? (ken ai ask for en ekstra klouthz henger) — Posso chiedere una gruccia per abiti in più?
The students are preparing for their final exams. (de stiudents ar priperring for deir fainël igzemz) — Gli studenti si stanno preparando per gli esami finali.
Could you help me clean the windows today? (kud iu help mi kliin de uindouz tudei) — Potresti aiutarmi a pulire le finestre oggi?
I am looking for a gift for my father's birthday. (ai em luking for e ghift for mai faderz berthdei) — Sto cercando un regalo per il compleanno di mio padre.
We enjoyed watching the fireworks by the harbor. (ui engioid uociing de faieruorks bai de harbor) — Ci è piaciuto guardare i fuochi d'artificio al porto.
Please send me the meeting agenda by email. (pliiz send mi de miiting ejenda bai iimeil) — Per favore inviami l'ordine del giorno della riunione via email.
Is this item covered by a money back guarantee? (iz dis aitëm kaverd bai e mani bek ghereantii) — Questo articolo è coperto da una garanzia di rimborso?
Do you sell gluten-free flour in this shop? (du iu sel gliutën frii flauer in dis sciop) — Vendete farina senza glutine in questo negozio?
Can you pick up the dry cleaning after work? (ken iu pik ap de drai kliining after uork) — Puoi ritirare i vestiti in lavanderia dopo il lavoro?
The teacher corrected all our essays yesterday. (de tiicer korektid ol auer essëiz iesterdei) — L'insegnante ha corretto tutti i nostri temi ieri.
We booked a hotel room with a balcony view. (ui bukt e houtel ruum uidh e belkoni viu) — Abbiamo prenotato una camera d'albergo con vista dal balcone.
Could you please pass me the olive oil? (kud iu pliiz pas mi di oliv oil) — Potresti passarmi l'olio d'oliva, per favore?
I have an appointment with the doctor at three. (ai hev en epointment uidh de dokter et thrii) — Ho un appuntamento con il medico alle tre.
Is there a kids' menu available in this restaurant? (iz der e kidz meniu eveilebël in dis restorant) — C'è un menu per bambini disponibile in questo ristorante?
We spent the afternoon shopping for summer clothes. (ui spent di afternuun sciopping for samer klouthz) — Abbiamo passato il pomeriggio a fare acquisti per vestiti estivi.
Do I need a receipt to exchange this product? (du ai niid e risiit tu ikscenj dis prodakt) — Ho bisogno dello scontrino per cambiare questo prodotto?
The kids are playing hide and seek in the garden. (de kidz ar pleiing haid end siik in de gardën) — I bambini stanno giocando a nascondino in giardino.
Could you please close the window in the bedroom? (kud iu pliiz klouz de uindou in de bedruum) — Potresti chiudere la finestra in camera da letto, per favore?
I will leave the house keys under the mat. (ai uil liiv de haus kiiz ander de met) — Lascerò le chiavi di casa sotto lo zerbino.
Is the hotel reception desk open all night? (iz de houtel risepscën desk oupën ol nait) — La reception dell'hotel è aperta tutta la notte?
Can you help me find my glasses anywhere? (ken iu help mi faind mai glasiz eniuer) — Puoi aiutarmi a trovare i miei occhiali da qualche parte?
We need to order new stationery for the office. (ui niid tu order niu steiscëneri for di ofis) — Dobbiamo ordinare della nuova cancelleria per l'ufficio.
How much is the entrance fee for adults? (hau macc iz di entrens fii for edalts) — Quanto costa il biglietto d'ingresso per gli adulti?
Please clean your shoes before coming inside. (pliiz kliin ior sciuz bifor kaming insaid) — Per favore pulisciti le scarpe prima di entrare.
I would like to try these sunglasses on. (ai wud laik tu trai diiz sanglasiz on) — Vorrei provare questi occhiali da sole.
Have a nice trip and write to us when you arrive! (hev e nais trip end rait tu as uen iu araiv) — Buon viaggio e scrivici quando arrivi!
Can you show me how to fill out this form? (ken iu scio mi hau tu fil aut dis form) — Puoi mostrarmi come compilare questo modulo?
We need to buy a birthday cake for tomorrow. (ui niid tu bai e berthdei keik for tumorou) — Dobbiamo comprare una torta di compleanno per domani.
Is there a charge for using the gym? (iz der e ciarj for iuzing de giim) — C'è un costo per usare la palestra?
Could you please print the boarding passes? (kud iu pliiz print de bording pasiz) — Potresti stampare le carte d'imbarco, per favore?
The teacher praised the class for their good results. (de tiicer preizd de klas for deir gud risalts) — L'insegnante ha lodato la classe per i buoni risultati.
What time does the supermarket close on Sunday? (uot taim daz de supermarket klouz on sandei) — A che ora chiude il supermercato la domenica?
I would like to try this dress in blue. (ai wud laik tu trai dis dres in bluu) — Vorrei provare questo vestito in blu.
Could you help me install the new printer software? (kud iu help mi instol de niu printer softuer) — Potresti aiutarmi a installare il nuovo software della stampante?
We booked a room with a sea view. (ui bukt e ruum uidh e sii viu) — Abbiamo prenotato una camera con vista mare.
Please put the milk back in the fridge. (pliiz put de milk bek in de fridj) — Per favore rimetti il latte in frigorifero.
Is there a laundry service in the hotel? (iz der e londri servis in de houtel) — C'è un servizio lavanderia nell'hotel?
How long will the flight take? (hau long uil de flait teik) — Quanto durerà il volo?
I am going to buy fresh fruit at the market. (ai em gouing tu bai fresc fruut et de market) — Vado a comprare frutta fresca al mercato.
Can you explain this grammar rule again? (ken iu iksplein dis gramar ruul egen) — Puoi spiegare di nuovo questa regola grammaticale?
Let us take a short break for coffee. (let as teik e short breik for kofi) — Facciamo una breve pausa per un caffè.
Do you have these shoes in a smaller size? (du iu hev diiz sciuz in e smoler saiz) — Avete queste scarpe in una taglia più piccola?
Who forgot to turn off the computer in the study? (huu forgot tu tern of de kompiuter in de stadi) — Chi ha dimenticato di spegnere il computer nello studio?
Where is the nearest pharmacy open on weekends? (uer iz de nirest farmesi oupën on uiikendz) — Dov'è la farmacia più vicina aperta nel fine settimana?
We are planning a trip to Europe next spring. (ui ar pleninng e trip tu iurop nekst spring) — Stiamo pianificando un viaggio in Europa la prossima primavera.
Could you pass me the pepper, please? (kud iu pas mi de peper, pliiz) — Potresti passarmi il pepe, per favore?
Can I reschedule my appointment with the doctor? (ken ai riskediul mai epointment uidh de dokter) — Posso riprogrammare il mio appuntamento con il medico?
The students are preparing for the science fair. (de stiudents ar priperring for de saiëns fer) — Gli studenti si stanno preparando per la fiera della scienza.
Can I pay for these groceries with cash? (ken ai pei for diiz grouseriz uidh kesc) — Posso pagare questi generi alimentari in contanti?
What is the wifi network name for guests? (uot iz de uaifai netuork neim for ghests) — Qual è il nome della rete wifi per gli ospiti?
We had a great time visiting the local museum. (ui hed e greit taim viziting de loukël miuziëm) — Ci siamo divertiti molto a visitare il museo locale.
Please lock the front door when you leave. (pliiz lok de front dor uen iu liiv) — Per favore chiudi a chiave la porta d'ingresso quando esci.
Is there an extra fee for room service? (iz der en ekstra fii for ruum servis) — C'è un costo aggiuntivo per il servizio in camera?
I am writing an email to the HR department. (ai em raiting en iimeil tu di eic ar dipartment) — Sto scrivendo un'email al reparto risorse umane.
Could you help me carry these heavy suitcases to the car? (kud iu help mi keri diiz hevi siutkeisiz tu de kar) — Potresti aiutarmi a portare queste valigie pesanti in macchina?
What time does the history class start today? (uot taim daz de histëri klas start tudei) — A che ora inizia la lezione di storia oggi?
Do you sell fresh flowers in this shop? (du iu sel fresc flauerz in dis sciop) — Vendete fiori freschi in questo negozio?
We rented a car to explore the island. (ui rentid e kar tu iksplor di ailend) — Abbiamo noleggiato un'auto per esplorare l'isola.
Please keep your voice down, the baby is resting. (pliiz kiip ior vois daun, de beibi iz resting) — Per favore tieni la voce bassa, il bambino sta riposando.
Is there a discount if I buy two items? (iz der e diskaunt if ai bai tuu aitëmz) — C'è uno sconto se compro due articoli?
The hotel staff was extremely helpful and polite. (de houtel staf uoz ikstriimli helpful end polait) — Il personale dell'hotel è stato estremamente disponibile e gentile.
Can you send me the directions to the station? (ken iu send mi de direksciënz tu de steiscën) — Puoi inviarmi le indicazioni per la stazione?
Don't forget to take your vitamins this morning. (dount forget tu teik ior vitaminz dis morning) — Non dimenticare di prendere le tue vitamine stamattina.
We are having lunch with our grandparents today. (ui ar heving lancc uidh auer grendperents tudei) — Oggi pranziamo con i nostri nonni.
I need a pair of comfortable shoes for walking. (ai niid e per ov kamfortebël sciuz for uoking) — Ho bisogno di un paio di scarpe comode per camminare.
Could you please print the itinerary for the trip? (kud iu pliiz print di aitinereri for de trip) — Potresti stampare l'itinerario del viaggio, per favore?
The classroom was renovated during the summer. (de klasruum uoz renoveitid diuring de samer) — L'aula è stata ristrutturata durante l'estate.
Is there a water refill station nearby? (iz der e uoter rifil steiscën nirbai) — C'è una stazione di ricarica per l'acqua qui vicino?
Does this shop offer tax-free shopping for tourists? (daz dis sciop ofer teksfrii sciopping for turists) — Questo negozio offre lo shopping tax-free per i turisti?
We enjoyed the sunset from the beach cafe. (ui engioid de sanset from de biicc kafei) — Ci siamo goduti il tramonto dal caffè sulla spiaggia.
Please submit your project before Friday afternoon. (pliiz sabmit ior prodjekt bifor fraidei afternuun) — Per favore invia il tuo progetto entro venerdì pomeriggio.
Could you help me clean the dining room table? (kud iu help mi kliin de daining ruum teibël) — Potresti aiutarmi a pulire il tavolo della sala da pranzo?
Do you have any sugar-free beverages here? (du iu hev eni sciugarfrii beverejiz hir) — Avete bevande senza zucchero qui?
What is the best way to get to the airport from here? (uot iz de best uei tu ghet tu di eirport from hir) — Qual è il modo migliore per arrivare all'aeroporto da qui?
My phone battery is running low again. (mai foun beteri iz ranning lou egen) — La batteria del mio telefono si sta scaricando di nuovo.
Have a nice flight and let us know when you land! (hev e nais flait end let as nou uen iu lend) — Buon volo e facci sapere quando atterri!
Can I get a glass of sparkling water with lemon? (ken ai ghet e glas ov sparkling uoter uidh lemën) — Posso avere un bicchiere di acqua frizzante con limone?
Where is the nearest charging spot for electric cars? (uer iz de nirest ciarging spot for ilektrik karz) — Dov'è la colonnina di ricarica più vicina per auto elettriche?
We need to check the flight status on the app. (ui niid tu cek de flait steitas on di ep) — Dobbiamo controllare lo stato del volo sull'applicazione.
Could you please turn off the air conditioning before leaving? (kud iu pliiz tern of di er kondiscëning bifor liiving) — Potresti spegnere l'aria condizionata prima di uscire, per favore?
Is there a discount if I buy two pairs of shoes? (iz der e diskaunt if ai bai tuu perz ov sciuz) — C'è uno sconto se compro due paia di scarpe?
Our teacher assigned us a research project on renewable energy. (auer tiicer esaind as e riserc prodjekt on riniuebël enerji) — Il nostro insegnante ci ha assegnato un progetto di ricerca sulle energie rinnovabili.
Could you send me the location via text message? (kud iu send mi de loukeiscën via tekst mesëj) — Potresti inviarmi la posizione tramite messaggio di testo?
We are going to order some food from the local pizzeria tonight. (ui ar gouing tu order sam fuud from de loukël pitzeria tunait) — Stasera ordineremo del cibo dalla pizzeria locale.
Please turn off your mobile phone during the exam. (pliiz tern of ior moubail foun diuring di igzem) — Per favore spegni il cellulare durante l'esame.
Do you know if the museum offers audio guides in Italian? (du iu nou if de miuziëm oferz odiou gaidz in italiën) — Sai se il museo offre audioguide in italiano?
I need to buy a new charger for my tablet. (ai niid tu bai e niu ciarger for mai teblet) — Devo comprare un nuovo caricabatterie per il mio tablet.
We should leave early to avoid getting stuck in traffic. (ui sciud liiv erli tu evoid ghetting stak in trafik) — Dovremmo partire presto per evitare di rimanere bloccati nel traffico.
Could you please bring us another bottle of still water? (kud iu pliiz bring as enader botël ov stil uoter) — Potrebbe portarci un'altra bottiglia di acqua naturale, per favore?
Can you help your mother set the table for dinner? (ken iu help ior mader set de teibël for diner) — Puoi aiutare tua madre ad apparecchiare la tavola per cena?
Look at the snow-covered mountain peak! (Luk et dhe sno-kaverd mowntin peek) — Guarda la cima della montagna coperta di neve!
We are going for a hike along the trail. (Wee ar go-ing for e hayk elong dhe treyl) — Andiamo a fare un'escursione lungo il sentiero.
Do you have a pair of sturdy hiking boots? (Doo yoo hev e per ov ster-dee hay-king boots) — Hai un paio di scarponi da trekking robusti?
Make sure to pack a raincoat in your backpack. (Meyk shoor too pek e reyn-kot in yor pek-pek) — Assicurati di mettere un impermeabile nello zaino.
The view from the summit is absolutely breathtaking. (Dhe vyoo from dhe sa-mit iz eb-so-loot-lee breth-tey-king) — La vista dalla vetta è assolutamente mozzafiato.
Is there a mountain refuge where we can eat lunch? (Iz dher e mowntin re-fyooj wer wee ken eet lanch) — C'è un rifugio di montagna dove possiamo pranzare?
Watch out for loose stones on the path. (Woch owt for loos stonz on dhe path) — Fai attenzione ai sassi mossi sul sentiero.
What is the elevation of this mountain pass? (Wot iz dhe el-e-vey-shen ov dhis mowntin pas) — Qual è l'altitudine di questo passo di montagna?
We should start descending before it gets dark. (Wee shood start di-sen-ding bee-for it gets dark) — Dovremmo iniziare a scendere prima che faccia buio.
Do we need trekking poles for this steep climb? (Doo wee need trek-king polz for dhis steep klaym) — Abbiamo bisogno dei bastoncini da trekking per questa salita ripida?
The weather in the mountains can change very quickly. (Dhe we-dher in dhe mowntinz ken cheynj ve-ree kwik-lee) — Il tempo in montagna può cambiare molto rapidamente.
Can you show me the route on the topographic map? (Ken yoo sho mee dhe root on dhe to-po-gre-fik mep) — Puoi mostrarmi il percorso sulla mappa topografica?
Look at that wild eagle flying high in the sky! (Luk et dhet wayld ee-gel flay-ing hay in dhe skay) — Guarda quell'aquila selvatica che vola alta nel cielo!
Remember to stay on the marked trail at all times. (Re-mem-ber too stey on dhe markt treyl et ol taymz) — Ricordati di rimanere sempre sul sentiero segnato.
The fresh mountain air smells like pine trees. (Dhe fresh mowntin er smelz layk payn treez) — L'aria fresca di montagna profuma di pini.
We set up our camp near a clear mountain stream. (Wee set ap awer kemp neer e kleer mowntin streem) — Abbiamo accampato vicino a un ruscello di montagna limpido.
Are there any avalanche warnings for this region? (Ar dher e-nee ev-e-lanch wor-ningz for dhis ree-jen) — Ci sono avvisi di valanghe per questa regione?
Let us drink some hot tea from the thermos. (Let as drink sam hot tee from dhe ther-mos) — Beviamo del tè caldo dal thermos.
The slope is getting steeper and more slippery. (Dhe slop iz get-ting stee-per end mor slip-pe-ree) — Il pendio sta diventando più ripido e scivoloso.
We reached the cable car station just in time. (Wee reecht dhe key-bel kar stey-shen jast in taym) — Abbiamo raggiunto la stazione della funivia giusto in tempo.
I heard a marmot whistling near the rocks. (Ay herd e mar-mot wis-ling neer dhe roks) — Ho sentito una marmotta fischiare vicino alle rocce.
Put on your wool hat and thermal gloves. (Poot on yor wool het end ther-mel glavz) — Mettiti il cappello di lana e i guanti termici.
Is this trail suitable for beginner hikers? (Iz dhis treyl soo-te-bel for bee-gin-ner hay-kerz) — Questo sentiero è adatto ad escursionisti principianti?
The wooden bridge crosses a rushing river. (Dhe woo-den brij kros-iz e rash-ing ri-ver) — Il ponte di legno attraversa un fiume impetuoso.
We stopped at a cozy hut to warm up by the fire. (Wee stopt et e ko-zee hat too worm ap bay dhe fayr) — Ci siamo fermati in un rifugio accogliente per scaldarci al fuoco.
Always check the weather forecast before heading out. (Ol-weyz chek dhe we-dher for-kast bee-for he-ding owt) — Controlla sempre le previsioni meteo prima di partire.
We saw a herd of chamois grazing on the rocks. (Wee so e herd ov she-mwa grey-zing on dhe roks) — Abbiamo visto un branco di camosci pascolare sulle rocce.
The sun is shining brightly on the glacier. (Dhe san iz shay-ning brayt-lee on dhe gley-sher) — Il sole splende luminoso sul ghiacciaio.
Do not leave any trash along the mountain trail. (Doo not leev e-nee tresh e-long dhe mowntin treyl) — Non lasciare alcun rifiuto lungo il sentiero di montagna.
My legs are feeling tired after five hours of walking. (May legz ar feel-ing tay-erd ef-ter fayv awerz ov wok-ing) — Le mie gambe sono stanche dopo cinque ore di camminata.
Is there a water fountain with drinkable spring water? (Iz dher e wo-ter fown-ten wid drink-e-bel spring wo-ter) — C'è una fontana con acqua potabile di sorgente?
The chairlift takes ski resort visitors to the top. (Dhe cher-lift teyks skee re-zort vi-zi-terz too dhe top) — La seggiovia porta i visitatori della stazione sciistica in cima.
Put on some sunscreen to protect your skin at high altitude. (Poot on sam san-skreen too pro-tekt yor skin et hay al-ti-tyood) — Metti della crema solare per proteggere la pelle ad alta quota.
The valley below is completely covered in fog. (Dhe ve-lee bee-lo iz kom-pleet-lee ka-verd in fog) — La valle sottostante è completamente coperta di nebbia.
How long will it take to reach the mountain shelter? (How long wil it teyk too reech dhe mowntin shel-ter) — Quanto tempo ci vorrà per raggiungere il bivacco?
Wear polarized sunglasses to avoid glare from the snow. (Wer po-le-rayzd san-gla-siz too e-voyd gler from dhe sno) — Indossa occhiali da sole polarizzati per evitare il riflesso della neve.
We rented snowshoes for a walk in the forest. (Wee ren-ted sno-shooz for e wok in dhe fo-rest) — Abbiamo noleggiato le ciaspole per una camminata nel bosco.
The sunset made the mountain peaks turn pink. (Dhe san-set meyd dhe mowntin peeks tern pink) — Il tramonto ha tinto di rosa le cime delle montagne.
Carry enough water to stay hydrated during the hike. (Ke-ree i-naf wo-ter too stey hay-drey-ted dyoor-ing dhe hayk) — Porta abbastanza acqua per rimanere idratato durante l'escursione.
Do you know how to use a compass in emergency situations? (Doo yoo no how too yooz e kom-pas in i-mer-jen-see si-choo-ey-shenz) — Sai come usare una bussola in situazioni di emergenza?
The trail follows the ridge line all the way to the summit. (Dhe treyl fol-loz dhe rij layn ol dhe wey too dhe sa-mit) — Il sentiero segue la cresta fino alla cima.
We slept in a wooden cabin surrounded by nature. (Wee slept in e woo-den ke-bin se-rown-ded bay ney-cher) — Abbiamo dormito in una baita di legno circondati dalla natura.
Beware of falling rocks along the cliff side. (Bee-wer ov fol-ing roks e-long dhe klif sayd) — Attenzione alla caduta massi lungo il costone della roccia.
You can hear the cowbells ringing across the alpine meadow. (Yoo ken heer dhe kow-belz ring-ing e-kros dhe el-payn me-do) — Si possono sentire i campanacci delle mucche risuonare nel pascolo alpino.
Is this mountain road open during the winter months? (Iz dhis mowntin rod o-pen dyoor-ing dhe win-ter manths) — Questa strada di montagna è aperta durante i mesi invernali?
We spotted a rare alpine flower blooming among the rocks. (Wee spot-ted e rer el-payn flaw-er bloom-ing e-mang dhe roks) — Abbiamo avvistato un raro fiore alpino fiorito tra le rocce.
The mountain guide showed us the safest path across the snowfield. (Dhe mowntin gayd shod as dhe sey-fist path e-kros dhe sno-feeld) — La guida alpina ci ha mostrato il percorso più sicuro attraverso il nevaio.
Take a moment to rest and enjoy the silence of the forest. (Teyk e mo-ment too rest end in-joy dhe say-lens ov dhe fo-rest) — Prendi un momento per riposare e goderti il silenzio del bosco.
Heavy fog made it difficult to see the trail markers. (He-vee fog meyd it di-fi-kalt too see dhe treyl mar-kerz) — La fitta nebbia ha reso difficile vedere i segnavia.
Hiking in the mountains gives a wonderful sense of freedom! (Hay-king in dhe mowntinz givz e wan-der-ful sens ov free-dem) — Fare escursioni in montagna dona una meravigliosa sensazione di libertà!
Excuse me, how do I get to the city center? (Eks-kiuz mii, hau duu ai ghet tuu de si-tii sen-ter) — Scusi, come arrivo in centro città?
Turn left at the next traffic light. (Tern left et de nekst tre-fik lait) — Gira a sinistra al prossimo semaforo.
Turn right after the gas station. (Tern rait af-ter de ghes stei-scion) — Gira a destra dopo il distributore di benzina.
Go straight ahead for two hundred meters. (Gou streit e-hed for tuu han-dred mii-terz) — Vai dritto per duecento metri.
Take the second exit at the roundabout. (Teik de se-kond ek-sit et de raund-e-baut) — Prendi la seconda uscita alla rotonda.
Is it within walking distance from here? (Iz it uid-in uok-ing dis-tens from hiir) — È raggiungibile a piedi da qui?
It is on the left side of the street. (It iz on de left said ov de striit) — Si trova sul lato sinistro della strada.
Cross the street at the pedestrian crossing. (Kros de striit et de pe-des-tri-en kros-sing) — Attraversa la strada sulle strisce pedonali.
Drive past the supermarket and turn left. (Draiv past de suu-per-mar-ket end tern left) — Oltrepassa il supermercato e gira a sinistra.
Keep going straight until you see the church. (Kiip gou-ing streit an-til yuu sii de ciurc) — Prosegui dritto finché non vedi la chiesa.
Which way should I go to find the highway entrance? (Uic uei sciud ai gou tuu faind de hai-uei en-trens) — Da che parte devo andare per trovare l'ingresso dell'autostrada?
It is right around the corner. (It iz rait e-raund de kor-ner) — È proprio dietro l'angolo.
Follow the signs for the airport. (Fol-lou de sainz for de er-port) — Segui le indicazioni per l'aeroporto.
You are going in the wrong direction. (Yuu ar gou-ing in de rong di-rek-scion) — Stai andando nella direzione sbagliata.
Is this the right road for Florence? (Iz dis de rait roud for Flo-rens) — È questa la strada giusta per Firenze?
Make a U-turn at the next junction. (Meik e yuu-tern et de nekst giang-scion) — Fai un'inversione a U al prossimo incrocio.
The pharmacy is opposite the bank. (De far-ma-sii iz o-po-zit de benk) — La farmacia è di fronte alla banca.
It is next to the post office. (It iz nekst tuu de poust o-fis) — È accanto all'ufficio postale.
Take the first street on your right. (Teik de ferst striit on yor rait) — Prendi la prima strada a destra.
How far is the nearest train station? (Hau far iz de niir-ist trein stei-scion) — Quanto dista la stazione ferroviaria più vicina?
The museum is located between the park and the library. (De miu-sii-em iz lou-kei-ted bi-tuiin de park end de lai-bre-rii) — Il museo si trova tra il parco e la biblioteca.
Go down the hill and cross the bridge. (Gou daun de hil end kros de brig) — Scendi dalla collina e attraversa il ponte.
Continue past the intersection for one block. (Kon-ti-niu past de in-ter-sek-scion for uan blok) — Prosegui oltre l'incrocio per un isolato.
Am I heading towards the town hall? (Em ai he-ding to-uordz de taun hol) — Sto andando verso il municipio?
Is there a shortcut to get there faster? (Iz der e sciot-kat tuu ghet der fas-ter) — C'è una scorciatoia per arrivarci più velocemente?
The hotel is at the end of this road. (De hou-tel iz et de end ov dis roud) — L'hotel si trova alla fine di questa strada.
Bear left when the road splits in two. (Ber left uen de roud splits in tuu) — Tieniti a sinistra quando la strada si divide in due.
Stay in the right lane to exit the freeway. (Stei in de rait lein tuu ek-sit de frii-uei) — Rimani nella corsia di destra per uscire dall'autostrada.
Is it far from here or can I walk? (Iz it far from hiir or ken ai uok) — È lontano da qui o posso andarci a piedi?
You will see a large fountain on your left. (Yuu uil sii e largi faun-ten on yor left) — Vedrai una grande fontana sulla tua sinistra.
Turn back, you just missed the turnoff. (Tern bek, yuu giast mist de tern-of) — Torna indietro, hai appena mancato la svolta.
The bus stop is across from the main entrance. (De bas stop iz e-kros from de mein en-trens) — La fermata dell'autobus è di fronte all'ingresso principale.
Go through the tunnel and keep driving straight. (Gou tru de tan-nel end kiip drai-ving streit) — Attraversa il tunnel e continua a guidare dritto.
Take the side street on the left. (Teik de said striit on de left) — Prendi la strada laterale a sinistra.
Is this a one-way street? (Iz dis e uan-uei striit) — È una strada a senso unico questa?
The castle is at the top of the hill. (De kas-sel iz et de top ov de hil) — Il castello si trova in cima alla collina.
Drive along the river until the third traffic light. (Drai-v e-long de ri-ver an-til de terd tre-fik lait) — Guida lungo il fiume fino al terzo semaforo.
Look for the sign indicating the city center. (Luk for de sain in-di-kei-ting de si-tii sen-ter) — Cerca il cartello che indica il centro città.
It is about a ten-minute walk from here. (It iz e-baut e ten-mi-nit uok from hiir) — Dista circa dieci minuti a piedi da qui.
Merge onto the highway heading north. (Merg on-tuu de hai-uei he-ding nort) — Immettiti sull'autostrada in direzione nord.
The parking lot is located behind the building. (De par-king lot iz lou-kei-ted bi-haind de bil-ding) — Il parcheggio si trova dietro l'edificio.
Head south along the main avenue. (Hed saut e-long de mein ev-e-niu) — Dirigiti a sud lungo il viale principale.
Follow the coastline until you reach the harbor. (Fol-lou de koust-lain an-til yuu riic de har-bor) — Segui la linea costiera fino a raggiungere il porto.
Do I need to turn left at the stop sign? (Duu ai niid tuu tern left et de stop sain) — Devo girare a sinistra al segnale di stop?
The hospital is on the upper side of the square. (De hos-pi-tal iz on de ap-per said ov de skuer) — L'ospedale si trova sul lato superiore della piazza.
You have to walk up the stairs to reach the view. (Yuu hev tuu uok ap de sterz tuu riic de viu) — Devi salire le scale per raggiungere il panorama.
Go past the gas station and take the second left. (Gou past de ghes stei-scion end teik de se-kond left) — Supera il distributore e prendi la seconda a sinistra.
Is the subway entrance nearby? (Iz de sab-uei en-trens niir-bai) — L'ingresso della metropolitana è qui vicino?
Keep to the right side of the road. (Kiip tuu de rait said ov de roud) — Tieniti sul lato destro della strada.
You will arrive at your destination on your right. (Yuu uil e-raiv et yor des-ti-nei-scion on yor rait) — Arriverai a destinazione sulla tua destra.
What would you like for breakfast this morning? (Uot uud yuu laik for brek-fast dis mor-ning) — Cosa vorresti per colazione stamattina?
Could you pass me the butter and jam, please? (Kud yuu pas mii de bat-ter end giam, pliiz) — Potresti passarmi il burro e la marmellata, per favore?
Would anyone like another cup of coffee? (Uud en-i-uan laik e-na-der kap ov kof-fii) — Qualcuno vuole un'altra tazza di caffè?
Is lunch ready or do you need help in the kitchen? (Iz lanc red-ii or duu yuu niid help in de ki-cen) — Il pranzo è pronto o hai bisogno di aiuto in cucina?
Dinner is served, everyone come to the table! (Din-ner iz servd, ev-ri-uan kam tuu de tei-bel) — La cena è servita, tutti a tavola!
This pasta dish tastes absolutely delicious. (Dis pas-ta disc teists eb-so-liut-lii di-li-scias) — Questo piatto di pasta è assolutamente delizioso.
Who wants some more roast chicken? (Huu uonts sam mor roust ci-ken) — Chi vuole dell'altro pollo arrosto?
Can you pour me a glass of sparkling water? (Ken yuu por mii e glas ov spar-kling uo-ter) — Puoi versarmi un bicchiere di acqua frizzante?
We are having a Sunday lunch with the whole family. (Uii ar hev-ing e San-dei lanc uid de houl fa-mi-lii) — Facciamo un pranzo della domenica con tutta la famiglia.
What time are our friends arriving for dinner? (Uot taim ar au-er frends e-raiv-ing for din-ner) — A che ora arrivano i nostri amici per cena?
Let us make a toast to our friendship! (Let as meik e toust tuu au-er frend-scip) — Facciamo un brindisi alla nostra amicizia!
Do you prefer white wine or red wine with dinner? (Duu yuu pri-fer uait uain or red uain uid din-ner) — Preferisci il vino bianco o il vino rosso per cena?
I am full, thank you, I cannot eat another bite. (Ai em ful, tenk yuu, Ai ke-not iit e-na-der bait) — Sono sazio, grazie, non posso mangiare un altro boccone.
Who saved room for homemade dessert? (Huu seivd ruum for houm-meid di-zert) — Chi ha tenuto un posto per il dolce fatto in casa?
The cereal box is in the pantry cupboard. (De si-ri-al boks iz in de pen-tri ka-bord) — La scatola dei cereali è nell'armadio della dispensa.
Can I have some warm milk with honey? (Ken Ai hev sam uorm milk uid ha-nii) — Posso avere del latte caldo con il miele?
Please clear your plate after finishing your meal. (Pliiz kliir yor pleit af-ter fi-ni-scing yor miil) — Per favore sparecchia il tuo piatto dopo aver finito il pasto.
Shall we invite our neighbors for a backyard barbecue? (Sciel uii in-vait au-er nei-borz for e bek-yard bar-bi-kiu) — Invitiamo i nostri vicini per una grigliata in giardino?
Does anyone want a slice of toasted bread? (Daz en-i-uan uont e slais ov tou-sted bred) — Qualcuno vuole una fetta di pane tostato?
My daughter helped me bake this strawberry pie. (Mai do-ter helpt mii beik dis stro-ber-rii pai) — Mia figlia mi ha aiutato a preparare questa crostata di fragole.
Pass the salt and black pepper down the table, please. (Pas de solt end blek pep-per daun de tei-bel, pliiz) — Passa il sale e il pepe nero lungo il tavolo, per favore.
Is this olive oil freshly pressed? (Iz dis o-liv oil fre-sci-lii prest) — Questo olio d'oliva è spremuto di fresco?
We should order pizza for dinner tonight. (Uii sciud or-der pi-tsa for din-ner tu-nait) — Dovremmo ordinare la pizza per cena stasera.
Who wants chocolate syrup on their ice cream? (Huu uonts cio-ko-let si-rap on der ais kriim) — Chi vuole lo sciroppo di cioccolato sul gelato?
We always have breakfast together at eight in the morning. (Uii ol-ueiz hev brek-fast tu-ghed-er et eit in de mor-ning) — Facciamo sempre colazione insieme alle otto del mattino.
Can you slice the fresh bread for lunch? (Ken yuu slais de fresc bred for lanc) — Puoi affettare il pane fresco per pranzo?
The soup is very hot, be careful not to burn yourself. (De suup iz ve-rii hot, bii ker-ful not tuu bern yor-self) — La zuppa è molto calda, fai attenzione a non bruciarti.
Would you like some parmesan cheese on your pasta? (Uud yuu laik sam par-me-zan ciiz on yor pas-ta) — Vorresti del formaggio parmigiano sulla tua pasta?
Let us clear the table and bring out the coffee. (Let as kliir de tei-bel end bring aut de kof-fii) — Sparechiamo la tavola e portiamo fuori il caffè.
Are you vegetarian or do you eat meat and fish? (Ar yuu ve-gi-ter-i-an or duu yuu iit miit end fisc) — Sei vegetariano o mangi carne e pesce?
We made fresh orange juice for breakfast. (Uii meid fresc o-ringi gius for brek-fast) — Abbiamo fatto la spremuta d'arancia fresca per colazione.
Can I get you a napkin for your hands? (Ken Ai ghet yuu e nep-kin for yor hendz) — Posso prenderti un tovagliolo per le mani?
Let us sit outside on the porch for lunch. (Let as sit aut-said on de porc for lanc) — Sediamoci fuori sotto il portico per pranzo.
Is anyone allergic to nuts or dairy products? (Iz en-i-uan e-ler-gic tuu nats or der-ii pro-dakts) — Qualcuno è allergico alla frutta a guscio o ai latticini?
Help yourself to more salad from the bowl. (Help yor-self tuu mor se-lad from de boul) — Serviti pure dell'altra insalata dalla ciotola.
The coffee pot is already brewing on the stove. (De kof-fii pot iz ol-red-ii bruu-ing on de stouv) — La caffettiera sta già cuocendo sul fornello.
We love having long dinners with good conversation. (Uii lav hev-ing long din-nerz uid gud kon-ver-sei-scion) — Adoriamo fare lunghe cene con buone conversazioni.
Can I have another cup of herbal tea before bed? (Ken Ai hev e-na-der kap ov her-bal tii bi-for bed) — Posso avere un'altra tazza di tisana prima di andare a letto?
Who forgot to put the leftover food in the fridge? (Huu for-got tuu put de left-o-ver fuud in de frig) — Chi ha dimenticato di mettere il cibo avanzato in frigorifero?
What a fantastic meal, compliments to the chef! (Uot e fen-tas-tik miil, kom-pli-ments tuu de scef) — Che pasto fantastico, complimenti allo chef!
Do you take sugar or sweetener in your espresso? (Duu yuu teik sciu-gar or suiit-ner in yor es-pres-sou) — Prendi lo zucchero o il dolcificante nel tuo espresso?
We are preparing a surprise birthday cake for dinner. (Uii ar pri-per-ing e ser-prais berd-dei keik for din-ner) — Stiamo preparando una torta di compleanno a sorpresa per cena.
Could you pass the salad dressing, please? (Kud yuu pas de se-lad dres-sing, pliiz) — Potresti passare il condimento per l'insalata, per favore?
I love eating warm croissants on Sunday morning. (Ai lav iit-ing uorm krua-san on San-dei mor-ning) — Adoro mangiare cornetti caldi la domenica mattina.
Let us split the cooking and washing duties today. (Let as split de kuk-ing end uo-scing diu-tiiz tu-dei) — Dividiamoci i compiti di cucina e lavaggio oggi.
Is there any sparkling lemonade left in the pitcher? (Iz der en-ii spar-kling le-mo-neid left in de pi-cer) — È rimasta della limonata frizzante nella caraffa?
We enjoy eating outdoor meals during summer. (Uii in-gioi iit-ing aut-dor miilz dyoor-ing sam-mer) — Ci piace mangiare all'aperto durante l'estate.
Who wants to help me chop vegetables for the soup? (Huu uonts tuu help mii ciop veg-te-belz for de suup) — Chi vuole aiutarmi a tagliare le verdure per la zuppa?
Save room for some fresh fruit after lunch. (Seiv ruum for sam fresc fruut af-ter lanc) — Tieni un posto per della frutta fresca dopo pranzo.
Thank you all for joining us for dinner tonight! (Tenk yuu ol for gioi-ning as for din-ner tu-nait) — Grazie a tutti per esservi uniti a noi per cena stasera!
It is so wonderful to see you after all this time! (It iz sou uan-der-ful tuu sii yuu af-ter ol dis taim) — È così bello vederti dopo tutto questo tempo!
Welcome to our home, please come inside! (Uel-kam tuu au-er houm, pliiz kam in-said) — Benvenuto a casa nostra, prego entra!
Make yourself at home and take off your coat. (Meik yor-self et houm end teik of yor kout) — Fai come se fossi a casa tua e togliti il cappotto.
I brought a small gift for the whole family. (Ai brot e smol ghift for de houl fa-mi-lii) — Ho portato un piccolo regalo per tutta la famiglia.
How have you been keeping lately? (Hau hev yuu biin kiip-ing lei-tlii) — Come stai ultimamente?
Would you like a hot cup of tea or coffee? (Uud yuu laik e hot kap ov tii or kof-fii) — Vorresti una tazza di tè caldo o un caffè?
Sit down on the sofa and relax for a moment. (Sit daun on de sou-fa end ri-leks for e mou-ment) — Siediti sul divano e rilassati un momento.
Your new apartment looks absolutely fantastic! (Yor niu e-part-ment luks eb-so-liut-lii fen-tas-tik) — Il tuo nuovo appartamento è assolutamente fantastico!
How are your parents doing these days? (Hau ar yor per-ents duu-ing diiz deiz) — Come stanno i tuoi genitori in questo periodo?
It has been way too long since our last meeting. (It hez biin uei tuu long sins au-er last miit-ing) — È passato decisamente troppo tempo dall'ultimo nostro incontro.
Can I show you around the house and the garden? (Ken Ai sciou yuu e-raund de haus end de gar-den) — Posso mostrarti la casa e il giardino?
Our daughter is growing up so fast! (Au-er do-ter iz grou-ing ap sou fast) — Nostra figlia sta crescendo così in fretta!
Thank you so much for inviting us over today. (Tenk yuu sou mac for in-vait-ing as ou-ver tu-dei) — Grazie mille per averci invitato oggi.
Did you have any trouble finding our place? (Did yuu hev en-ii tra-bel faind-ing au-er pleis) — Hai avuto difficoltà a trovare casa nostra?
Let me take your jacket and put it in the closet. (Let mii teik yor ge-ket end put it in de klo-zet) — Lascia che prenda la tua giacca e la metta nell'armadio.
We brought some homemade cookies for the children. (Uii brot sam houm-meid kuk-iiz for de ciul-dren) — Abbiamo portato dei biscotti fatti in casa per i bambini.
Tell me everything about your recent trip to London. (Tel mii ev-ri-ting e-baut yor rii-sent trip tuu Lan-don) — Raccontami tutto del tuo recente viaggio a Londra.
You look great, what is your secret? (Yuu luk greit, uot iz yor sii-kret) — Hai un fantastico aspetto, qual è il tuo segreto?
Let us look at some old family photo albums together. (Let as luk et sam ould fa-mi-lii fou-tou al-bamz tu-ghed-er) — Guardiamo insieme qualche vecchio album di foto di famiglia.
My aunt sends her warmest regards to everyone. (Mai ant sendz her uor-mist ri-gardz tuu ev-ri-uan) — Mia zia manda i suoi più calorosi saluti a tutti.
How is your new job working out for you? (Hau iz yor niu giob uork-ing aut for yuu) — Come va il tuo nuovo lavoro?
Please stay for dinner, we have plenty of food! (Pliiz stei for din-ner, uii hev plen-tii ov fuud) — Per favore rimani a cena, abbiamo cibo in abbondanza!
We were just talking about you the other day. (Uii uer giast tok-ing e-baut yuu de a-der dei) — Stavamo proprio parlando di te l'altro giorno.
Your grandmother will be so happy to see you! (Yor gren-ma-der uil bii sou hep-pii tuu sii yuu) — Tua nonna sarà così felice di vederti!
Can I get you a glass of wine or fruit juice? (Ken Ai ghet yuu e glas ov uain or fruut gius) — Posso prenderti un bicchiere di vino o un succo di frutta?
The kids are playing video games upstairs in the room. (De kidz ar plei-ing vi-de-ou gheimz ap-sterz in de ruum) — I bambini stanno giocando ai videogiochi di sopra in camera.
Thank you for hosting such a wonderful gathering. (Tenk yuu for houst-ing sac e uan-der-ful ghe-der-ing) — Grazie per aver ospitato un incontro così fantastico.
We should organize a reunion with all our cousins. (Uii sciud or-ga-naiz e rii-yu-ni-on uid ol au-er ka-zinz) — Dovremmo organizzare una riunione con tutti i nostri cugini.
How time flies when you are having fun with friends! (Hau taim flais uen yuu ar hev-ing fan uid frendz) — Come vola il tempo quando ti diverti con gli amici!
Let me help you wash the dishes before we leave. (Let mii help yuu uosc de di-sciz bi-for uii liiv) — Lascia che ti aiuti a lavare i piatti prima che ce ne andiamo.
Is your brother still living in Spain? (Iz yor bra-der stil liv-ing in Spein) — Tuo fratello vive ancora in Spagna?
Your home is so warm and welcoming. (Yor houm iz sou uorm end uel-kam-ing) — La tua casa è così calda e accogliente.
I brought a bottle of wine from our local vineyard. (Ai brot e bot-tel ov uain from au-er lou-kal vin-yard) — Ho portato una bottiglia di vino dal nostro vigneto locale.
Give a big hug to your mother for me. (Ghiv e big hag tuu yor ma-der for mii) — Dai un grande abbraccio a tua madre da parte mia.
We must do this more often in the future. (Uii mast duu dis mor of-fen in de fiu-ciur) — Dobbiamo farlo più spesso in futuro.
Do you want to take a walk around the neighborhood? (Duu yuu uont tuu teik e uok e-raund de nei-bor-hud) — Vuoi fare una passeggiata per il quartiere?
It was such a pleasant surprise to find you here. (It uoz sac e ple-zent ser-prais tuu faind yuu hiir) — È stata una così bella sorpresa trovarti qui.
Call us as soon as you arrive home safely. (Kol as ez suun ez yuu e-raiv houm seif-lii) — Chiamaci non appena arrivi a casa sano e salvo.
My uncle always tells the best jokes during dinners. (Mai ang-kel ol-ueiz telz de best giouks dyoor-ing din-nerz) — Mio zio racconta sempre le battute migliori durante le cene.
We are so glad you could make it today. (Uii ar sou gled yuu kud meik it tu-dei) — Siamo così contenti che tu sia riuscito a venire oggi.
Please give our best wishes to the whole family. (Pliiz ghiv au-er best ui-sciz tuu de houl fa-mi-lii) — Per favore porta i nostri migliori auguri a tutta la famiglia.
Would you like to stay overnight in our guest room? (Uud yuu laik tuu stei ou-ver-nait in au-er ghest ruum) — Ti andrebbe di rimanere a dormire nella nostra camera degli ospiti?
My friend brought her new dog with her today. (Mai frend brot her niu dog uid her tu-dei) — La mia amica ha portato il suo nuovo cane con sé oggi.
We had such a laugh remembering our school days. (Uii hed sac e laf ri-mem-ber-ing au-er skuul deiz) — Ci siamo fatti così tante risate ricordando i nostri giorni di scuola.
Thank you for the warm hospitality as always! (Tenk yuu for de uorm hos-pi-ta-li-tii ez ol-ueiz) — Grazie per la calda ospitalità come sempre!
I will send you the photos from today on WhatsApp. (Ai uil send yuu de fou-touz from tu-dei on Uot-sAp) — Ti manderò le foto di oggi su WhatsApp.
Take care of yourself and see you very soon! (Teik ker ov yor-self end sii yuu ve-rii suun) — Prenditi cura di te e a prestissimo!
We hope you enjoyed your time with us. (Uii houp yuu in-gioid yor taim uid as) — Speriamo che ti sia piaciuto il tempo passato con noi.
Next time you must visit us at our house! (Nekst taim yuu mast vi-sit as et au-er haus) — La prossima volta dovete venire a trovarci a casa nostra!
Safe journey back home and keep in touch! (Seif giur-nii bek houm end kiip in tac) — Buon viaggio di ritorno a casa e teniamoci in contatto!
What time does the museum open this morning? (Uot taim daz de miu-sii-em ou-pen dis mor-ning) — A che ora apre il museo stamattina?
Two adult tickets for the afternoon show, please. (Tuu e-dalt tik-ets for de af-ter-nuun sciou, pliiz) — Due biglietti per adulti per lo spettacolo del pomeriggio, per favore.
Is flash photography allowed inside the art gallery? (Iz flesc fo-to-gra-fii e-laud in-said de art ghe-ler-ii) — È consentito fotografare con il flash all'interno della galleria d'arte?
Where can we pick up the audio guide for the tour? (Uer ken uii pik ap de au-di-ou gaid for de tuur) — Dove possiamo ritirare l'audioguida per la visita?
I would like to reserve two seats in the front row. (Ai uud laik tuu ri-serv tuu siits in de front rou) — Vorrei prenotare due posti in prima fila.
What genre of movie are we going to watch tonight? (Uot gian-ra ov mu-vii ar uii gou-ing tuu uosc tu-nait) — Che genere di film andiamo a guardare stasera?
Is there a discount for students and senior citizens? (Iz der e dis-kaunt for stiu-dents end sii-ni-or si-ti-zens) — C'è uno sconto per studenti e anziani?
The play will start promptly at eight o'clock. (De plei uil start prompt-lii et eit o-klok) — Lo spettacolo teatrale inizierà puntualmente alle otto.
Let us buy some popcorn and drinks before entering the screen. (Let as bai sam pop-korn end drinks bi-for en-ter-ing de skriin) — Compriamo dei popcorn e delle bevande prima di entrare in sala.
Which screen is showing the new action movie? (Uic skriin iz sciou-ing de niu ek-scion mu-vii) — In quale sala proiettano il nuovo film d'azione?
The exhibition features famous paintings by local artists. (De ek-si-bi-scion fii-ciurz fei-mas peint-ingz bai lou-kal ar-tists) — La mostra presenta famosi dipinti di artisti locali.
Are there any seats left in the central balcony? (Ar der en-ii siits left in de sen-tral bel-ko-nii) — Ci sono ancora posti liberi nella balconata centrale?
We should leave our heavy coats in the cloakroom. (Uii sciud liiv au-er he-vii kouts in de klouk-ruum) — Dovremmo lasciare i nostri cappotti pesanti al guardaroba.
The actor gave an outstanding performance on stage. (De ek-tor gheiv en aut-stend-ing per-for-mens on steig) — L'attore ha fatto un'interpretazione eccezionale sul palco.
How long is the intermission between the two acts? (Hau long iz de in-ter-mi-scion bi-tuiin de tuu ekts) — Quanto dura l'intervallo tra i due atti?
Can we buy tickets online to avoid the queue? (Ken uii bai tik-ets on-lain tuu e-void de kiu) — Possiamo comprare i biglietti online per evitare la fila?
The sculpture in the main hall is made of white marble. (De skalp-ciur in de mein hol iz meid ov uait mar-bel) — La scultura nella sala principale è fatta di marmo bianco.
Please switch off your mobile phones during the performance. (Pliiz suic of yor mou-bail founz dyoor-ing de per-for-mens) — Per favore spegnete i cellulari durante lo spettacolo.
Is this movie subtitled or dubbed in Italian? (Iz dis mu-vii sab-tai-teld or dabd in I-te-li-an) — Questo film è sottotitolato o doppiato in italiano?
The temporary exhibition is located on the second floor. (De tem-po-rer-ii ek-si-bi-scion iz lou-kei-ted on de se-kond flor) — La mostra temporanea si trova al secondo piano.
I bought a program to read about the cast and crew. (Ai bot e prou-grem tuu riid e-baut de kast end kruu) — Ho comprato un programma per leggere informazioni sul cast e sulla troupe.
Where are the restrooms in the theatre lobby? (Uer ar de rest-ruumz in de ti-a-ter lob-bii) — Dove sono i bagni nell'atrio del teatro?
This museum houses ancient artifacts from Mesopotamia. (Dis miu-sii-em hau-siz ein-scent ar-ti-fakts from Me-so-po-tei-mi-a) — Questo museo ospita antichi reperti della Mesopotamia.
Did you enjoy the plot twist at the end of the film? (Did yuu in-gioi de plot tuist et de end ov de film) — Ti è piaciuto il colpo di scena alla fine del film?
We have reserved seats in row ten, numbers five and six. (Uii hev ri-servd siits in rou ten, nam-berz faiv end siks) — Abbiamo posti prenotati in fila dieci, numeri cinque e sei.
The director was present at the premiere for a Q&A session. (De di-rek-tor uoz pre-sent et de pre-mi-er for e kiu end ei se-scion) — Il regista era presente alla prima per una sessione di domande e risposte.
Is there a guided tour available in English at two o'clock? (Iz der e gai-ded tuur e-vei-le-bel in Ing-glisc et tuu o-klok) — C'è una visita guidata disponibile in inglese alle due?
The audience applauded loudly at the end of the show. (De au-di-ens e-plod-ed laud-lii et de end ov de sciou) — Il pubblico ha applaudito calorosamente alla fine dello spettacolo.
I prefer sitting in the middle of the cinema hall. (Ai pri-fer sit-ting in de mi-del ov de si-ne-ma hol) — Preferisco sedermi al centro della sala cinematografica.
Look at this ancient mosaic discovered during excavations. (Luk et dis ein-scent mou-zei-ik dis-ka-verd dyoor-ing eks-ka-vei-scionz) — Guarda questo antico mosaico scoperto durante gli scavi.
Are drinks and snacks allowed inside the auditorium? (Ar drinks end sneks e-laud in-said de au-di-tor-i-um) — Cibi e bevande sono ammessi all'interno dell'auditorium?
The musical was full of energetic songs and dances. (De miu-zi-kal uoz ful ov e-ner-ghe-tik songz end den-siz) — Il musical era pieno di canzoni e danze energiche.
You can buy souvenirs at the gift shop near the exit. (Yuu ken bai suu-ve-niirz et de ghift sciop niir de ek-sit) — Puoi comprare souvenir nel negozio di articoli da regalo vicino all'uscita.
What time do the trailers start before the main movie? (Uot taim duu de trei-lerz start bi-for de mein mu-vii) — A che ora iniziano i trailer prima del film principale?
The opera house has amazing acoustics for live music. (De o-pe-ra haus hez e-mei-zing e-kuos-tiks for laiv miu-zik) — Il teatro dell'opera ha un'acustica fantastica per la musica dal vivo.
Do we need to wear 3D glasses for this screening? (Duu uii niid tuu uer trii-dii gla-siz for dis skriin-ing) — Dobbiamo indossare gli occhiali 3D per questa proiezione?
The museum offers free admission on the first Sunday of the month. (De miu-sii-em of-ferz frii ed-mi-scion on de ferst San-dei ov de man-t) — Il museo offre l'ingresso gratuito la prima domenica del mese.
Who is your favorite contemporary painter in this gallery? (Huu iz yor fei-vo-rit kon-tem-po-rer-ii peint-er in dis ghe-ler-ii) — Chi è il tuo pittore contemporaneo preferito in questa galleria?
The curtain goes up in less than five minutes. (De ker-ten gouz ap in les den faiv mi-nits) — Il sipario si alza tra meno di cinque minuti.
I found the documentary about nature very educational. (Ai faund de do-kiu-men-ta-rii e-baut nei-ciur ve-rii e-diu-kei-scio-nal) — Ho trovato il documentario sulla natura molto educativo.
Where is the box office to collect our pre-booked tickets? (Uer iz de boks o-fis tuu kol-lekt au-er prii-bukt tik-ets) — Dov'è la biglietteria per ritirare i nostri biglietti prenotati?
The costume design in this period drama was breathtaking. (De kos-tium di-zain in dis pi-ri-od dra-ma uoz bret-tei-king) — I costumi di questo dramma in costume erano mozzafiato.
Is there an interactive section for children in the museum? (Iz der en in-ter-ek-tiv sek-scion for ciul-dren in de miu-sii-em) — C'è una sezione interattiva per bambini nel museo?
We got great seats in the stalls near the stage. (Uii got greit siits in de stolz niir de steig) — Abbiamo preso ottimi posti in platea vicino al palco.
The movie was so touching that many people cried. (De mu-vii uoz sou ta-cing det me-nii pii-pel kraid) — Il film era così commovente che molte persone hanno pianto.
Please do not touch the exhibits on display. (Pliiz duu not tac de ek-si-bits on dis-plei) — Per favore non toccare i reperti in mostra.
The cinema has comfortable reclining leather seats. (De si-ne-ma hez kam-for-te-bel ri-klain-ing le-der siits) — Il cinema ha comode poltrone reclinabili in pelle.
We arrived early to explore the museum garden. (Uii e-raivd er-lii tuu eks-plor de miu-sii-em gar-den) — Siamo arrivati presto per esplorare il giardino del museo.
The lead actress received a standing ovation at the end. (De liid ek-tres ri-siivd e sten-ding ou-vei-scion et de end) — L'attrice protagonista ha ricevuto una standing ovation alla fine.
What a memorable evening of art, culture, and entertainment! (Uot e me-mo-ra-bel iiv-ning ov art, kal-ciur, end en-ter-tein-ment) — Che serata memorabile all'insegna di arte, cultura e intrattenimento!
Good morning everyone, let us start today's lesson. (Gud mor-ning ev-ri-uan, let as start tu-deiz les-sen) — Buongiorno a tutti, iniziamo la lezione di oggi.
Could you please open your textbooks to page forty? (Kud yuu pliiz ou-pen yor tekst-buks tuu peig for-tii) — Potreste aprire i libri di testo a pagina quaranta, per favore?
I have a question about yesterday's homework. (Ai hev e kues-cion e-baut yes-ter-deiz houm-uork) — Ho una domanda sui compiti di ieri.
The teacher is explaining a complex mathematical equation. (De tii-cer iz eks-plein-ing e kom-pleks me-te-me-ti-kal i-kuei-scion) — L'insegnante sta spiegando un'equazione matematica complessa.
When is the deadline for submitting our group project? (Uen iz de ded-lain for sab-mit-ting au-er gruup pro-gjekt) — Quand'è la scadenza per consegnare il nostro progetto di gruppo?
We need to schedule a team meeting for tomorrow morning. (Uii niid tuu ske-diul e tiim miit-ing for tu-mo-rou mor-ning) — Dobbiamo programmare una riunione di lavoro per domani mattina.
Please send me the updated report by email as soon as possible. (Pliiz send mii de ap-dei-ted ri-port bai i-meil ez suun ez po-si-bel) — Per favore inviami il report aggiornato via email prima possibile.
I have an online presentation with our client at two o'clock. (Ai hev en on-lain pre-zen-tei-scion uid au-er klai-ent et tuu o-klok) — Ho una presentazione online con il nostro cliente alle due.
The final exam will cover all the topics from this semester. (De fai-nal ek-sam uil ka-ver ol de to-piks from dis se-mes-ter) — L'esame finale coprirà tutti gli argomenti di questo semestre.
Can you print a hard copy of this document for me? (Ken yuu print e hard ko-pii ov dis do-kiu-ment for mii) — Puoi stamparmi una copia cartacea di questo documento?
Let us take a short coffee break before continuing. (Let as teik e sciort kof-fii breik bi-for kon-ti-niu-ing) — Facciamo una breve pausa caffè prima di continuare.
She works as a project manager in a technology company. (Sciii uorks ez e pro-gjekt me-ne-ger in e tek-no-lo-gii kam-pe-nii) — Lavora come project manager in un'azienda tecnologica.
Did everyone raise their hand to ask a question? (Did ev-ri-uan reiz der hend tuu ask e kues-cion) — Tutti hanno alzato la mano per fare una domanda?
I am currently working on a tight schedule this week. (Ai em kar-rent-lii uork-ing on e tait ske-diul dis uiik) — Al momento sto lavorando con ritmi molto serrati questa settimana.
Where is the conference room for the afternoon workshop? (Uer iz de kon-fe-rens ruum for de af-ter-nuun uork-sciop) — Dov'è la sala conferenze per il laboratorio del pomeriggio?
Please make sure to sign the attendance sheet. (Pliiz meik sciur tuu sain de e-ten-dens sciit) — Assicurati di firmare il foglio di presenza, per favore.
We need to review the quarterly budget during the meeting. (Uii niid tuu ri-viu de kuor-ter-lii ba-gjet dyoor-ing de miit-ing) — Dobbiamo revisionare il budget trimestrale durante la riunione.
He failed his physics test and needs to retake it. (Hii feild hiz fi-ziks test end niidz tuu rii-teik it) — Ha fallito il test di fisica e deve rifarlo.
Could you explain this concept to me again, please? (Kud yuu eks-plein dis kon-sept tuu mii e-ghen, pliiz) — Potresti spiegarmi di nuovo questo concetto, per favore?
I need to set up a password for my school account. (Ai niid tuu set ap e pas-uord for mai skuul e-kaunt) — Devo impostare una password per il mio account scolastico.
The company is hiring new software engineers this month. (De kam-pe-nii iz hai-ring niu soft-uer en-gi-niirz dis mant) — L'azienda sta assumendo nuovi ingegneri del software questo mese.
Do you want to study together in the library this afternoon? (Duu yuu uont tuu sta-dii tu-ghed-er in de lai-bre-rii dis af-ter-nuun) — Vuoi studiare insieme in biblioteca questo pomeriggio?
My boss approved my vacation request for next month. (Mai bos e-pruuvd mai ve-kei-scion ri-kuest for nekst mant) — Il mio capo ha approvato la mia richiesta di ferie per il mese prossimo.
Please submit your assignments before midnight on Friday. (Pliiz sab-mit yor e-sain-ments bi-for mid-nait on Frai-dei) — Per favore consegnate i vostri compiti prima di mezzanotte di venerdì.
We are going to brainstorm new marketing strategies today. (Uii ar gou-ing tuu brein-storm niu mar-ke-ting stra-te-giiz tu-dei) — Oggi faremo un brainstorming su nuove strategie di marketing.
The school bell rings at one o'clock for lunch break. (De skuul bel ringz et uan o-klok for lanc breik) — La campanella della scuola suona ad un'ora per la pausa pranzo.
Can you share your screen during the video call? (Ken yuu scer yor skriin dyoor-ing de vi-de-ou kol) — Puoi condividere lo schermo durante la videoschiamata?
She graduated with honors in computer science last year. (Sciii gre-diu-ei-ted uid o-norz in kom-piu-ter sai-ens last yiir) — Si è laureata con lode in informatica l'anno scorso.
I have to prepare a slide presentation for the board. (Ai hev tuu pri-per e slaid pre-zen-tei-scion for de bord) — Devo preparare una presentazione di diapositive per il consiglio d'amministrazione.
Our team won the regional science competition. (Au-er tiim uon de rii-gio-nal sai-ens kom-pe-ti-scion) — La nostra squadra ha vinto la competizione scientifica regionale.
Please log in to your employee portal to view your payslip. (Pliiz log in tuu yor em-ploi-ii por-tal tuu viu yor pei-slip) — Per favore accedi al portale dipendenti per vedere la tua busta paga.
The professor gave us a long reading list for the semester. (De pro-fes-sor gheiv as e long riid-ing list for de se-mes-ter) — Il professore ci ha dato una lunga lista di letture per il semestre.
I need to fix a bug in the code before the release. (Ai niid tuu fiks e bag in de koud bi-for de ri-liis) — Devo correggere un errore nel codice prima del rilascio.
Is attendance mandatory for all lectures? (Iz e-ten-dens men-de-tor-ii for ol lek-ciurz) — La frequenza è obbligatoria per tutte le lezioni?
We have to work overtime to finish this project on time. (Uii hev tuu uork ou-ver-taim tuu fi-nisc dis pro-gjekt on taim) — Dobbiamo fare gli straordinari per finire questo progetto in tempo.
The new intern is very motivated and eager to learn. (De niu in-tern iz ve-rii mou-ti-vei-ted end ii-gher tuu lern) — Il nuovo tirocinante è molto motivato e desideroso di imparare.
Where can I find the syllabus for this course? (Uer ken Ai faind de si-la-bas for dis kors) — Dove posso trovare il programma per questo corso?
I received an email notification about the schedule change. (Ai ri-siivd en i-meil nou-ti-fi-kei-scion e-baut de ske-diul ceing) — Ho ricevuto una notifica via email sul cambio di orario.
Our company offers training courses for professional development. (Au-er kam-pe-nii of-ferz trei-ning kor-siz for pro-fe-scio-nal di-ve-lop-ment) — La nostra azienda offre corsi di formazione per lo sviluppo professionale.
Please write your name at the top of the exam paper. (Pliiz rait yor neim et de top ov de ek-sam pei-per) — Per favore scrivi il tuo nome in cima al foglio d'esame.
I am currently updating my resume for new job applications. (Ai em kar-rent-lii ap-dei-ting mai re-ziu-mei for niu giob e-pli-kei-scionz) — Al momento sto aggiornando il mio CV per nuove candidature di lavoro.
We need to collaborate closely on this new assignment. (Uii niid tuu ko-la-bo-reit klous-lii on dis niu e-sain-ment) — Dobbiamo collaborare a stretto contatto su questo nuovo compito.
The laboratory experiment requires strict safety protocols. (De le-bo-ra-tor-ii eks-pe-ri-ment ri-kuairz strikt seif-tii prou-to-kolz) — L'esperimento di laboratorio richiede rigidi protocolli di sicurezza.
Could you please sign and return the contract by tomorrow? (Kud yuu pliiz sain end ri-tern de kon-trekt bai tu-mo-rou) — Potresti per favore firmare e restituire il contratto entro domani?
What is your main topic for the diploma thesis? (Uot iz yor mein to-pik for de di-plou-ma tii-sis) — Qual è il tuo argomento principale per la tesi di laurea o diploma?
We are having a performance review with human resources. (Uii ar hev-ing e per-for-mens ri-viu uid hiu-man ri-sor-siz) — Abbiamo una valutazione delle prestazioni con le risorse umane.
Don't forget to pack your notebook and pencils for school. (Dount for-ghet tuu pek yor nout-buk end pen-sils for skuul) — Non dimenticare di preparare il quaderno e le matite per la scuola.
The CEO announced a new expansion plan for the company. (De sii-ii-ou e-naunst e niu eks-pen-scion plen for de kam-pe-nii) — L'amministratore delegato ha annunciato un nuovo piano di espansione per l'azienda.
He got a promotion to senior manager after two years. (Hii got e pro-mou-scion tuu sii-ni-or me-ne-ger af-ter tuu yiirz) — Ha ottenuto una promozione a senior manager dopo due anni.
Good luck with your exam, I know you will do great! (Gud lak uid yor ek-sam, Ai nou yuu uil duu greit) — Buona fortuna per il tuo esame, so che andrai alla grande!
May I try on these leather shoes in size forty-two? (Mei Ai trai on diiz le-der scuuz in sais for-tii-tuu) — Posso provare queste scarpe in pelle nel numero quarantadue?
Where are the fitting rooms located? (Uer ar de fit-ting ruumz lou-kei-ted) — Dove si trovano i camerini?
Do you have these sneakers in black or dark blue? (Duu yuu hev diiz snii-kerz in blek or dark bluu) — Avete queste scarpe da ginnastica in nero o blu scuro?
This jacket is a bit too tight around the shoulders. (Dis ge-ket iz e bit tuu tait e-raund de scioul-derz) — Questa giacca è un po' troppo stretta sulle spalle.
Does this dress come in a smaller size? (Daz dis dres kam in e smol-ler sais) — Questo vestito c'è in una taglia più piccola?
I would like to buy a matching belt for these trousers. (Ai uud laik tuu bai e me-cing belt for diiz trau-zerz) — Vorrei comprare una cintura da abbinare a questi pantaloni.
Are these high heels comfortable for walking? (Ar diiz hai hiilz kam-for-te-bel for uok-ing) — Questi tacchi alti sono comodi per camminare?
Excuse me, how much is this silk tie? (Eks-kiuz mii, hau mac iz dis silk tai) — Scusi, quanto costa questa cravatta di seta?
Can I try this woolen sweater in medium size? (Ken Ai trai dis uul-len sue-ter in mii-di-um sais) — Posso provare questo maglione di lana nella taglia M?
These boots are too loose around my ankles. (Diiz buuts ar tuu luus e-raund mai eng-kelz) — Questi stivali sono troppo larghi intorno alle caviglie.
Do you have sunglasses with polarized lenses? (Duu yuu hev san-gla-siz uid pou-le-raizd len-siz) — Avete occhiali da sole con lenti polarizzate?
Is this handbag made of real leather or synthetic material? (Iz dis hend-beg meid ov riil le-der or sin-te-tik me-ti-ri-al) — Questa borsa è fatta di vera pelle o materiale sintetico?
I am looking for a light cotton shirt for summer. (Ai em luk-ing for e lait kot-ton sciert for sam-mer) — Sto cercando una camicia di cotone leggera per l'estate.
Could you bring me these sandals in size thirty-eight? (Kud yuu bring mii diiz sen-dalz in sais ter-tii-eit) — Potrebbe portarmi questi sandali nel numero trentotto?
This hat fits me perfectly, I will take it. (Dis het fits mii per-fekt-lii, Ai uil teik it) — Questo cappello mi sta alla perfezione, lo prendo.
Is there a discount on this winter coat? (Iz der e dis-kaunt on dis uin-ter kout) — C'è uno sconto su questo cappotto invernale?
Can I exchange these gloves if they don't fit? (Ken Ai eks-ceing-gi diiz glavz if dei dount fit) — Posso cambiare questi guanti se non vanno bene?
Where can I find elegant suits for a wedding? (Uer ken Ai faind e-le-gant suuts for e ued-ding) — Dove posso trovare abiti eleganti per un matrimonio?
Do you carry any waterproof hiking shoes? (Duu yuu ke-rii en-ii uo-ter-pruuf hai-king scuuz) — Tenete scarpe da trekking impermeabili?
This silver bracelet matches my necklace very well. (Dis sil-ver breis-let me-ciz mai nek-leis ve-rii uel) — Questo bracciale d'argento si abbina molto bene alla mia collana.
I need a pair of running shoes with good cushioning. (Ai niid e per ov ran-ning scuuz uid gud ku-scio-ning) — Ho bisogno di un paio di scarpe da corsa con una buona ammortizzazione.
Could you measure my wrist for this wristwatch? (Kud yuu me-siur mai rist for dis rist-uoc) — Potrebbe misurarmi il polso per questo orologio da polso?
Are these jeans machine washable? (Ar diiz giinz me-sciin uo-sca-bel) — Questi jeans sono lavabili in lavatrice?
I am looking for an elegant evening clutch bag. (Ai em luk-ing for en e-le-gant iiv-ning klac beg) — Sto cercando una pochette elegante da sera.
Do you have these slippers in a larger size? (Duu yuu hev diiz slip-perz in e lar-gher sais) — Avete queste pantofole in una taglia più grande?
This blouse is available in red, green, and navy blue. (Dis blaus iz e-vei-le-bel in red, griin, end nei-vii bluu) — Questa camicetta è disponibile in rosso, verde e blu notte.
Can I get a tax-free receipt for international shopping? (Ken Ai ghet e teks-frii ri-siit for in-ter-ne-scio-nal sciop-ping) — Posso avere uno scontrino tax-free per acquisti internazionali?
These socks are made of high-quality merino wool. (Diiz soks ar meid ov hai-kuo-li-tii me-rii-nou uul) — Questi calzini sono fatti di lana merino di alta qualità.
Is this scarf warm enough for freezing weather? (Iz dis skarf uorm i-naf for friiz-ing ue-der) — Questa sciarpa è abbastanza calda per il clima rigido?
The sole of these shoes provides excellent grip. (De soul ov diiz scuuz pro-vaidz ek-se-lent grip) — La suola di queste scarpe offre una presa eccellente.
Can you show me your collection of leather wallets? (Ken yuu sciou mii yor ko-lek-scion ov le-der uol-lets) — Puoi mostrarmi la vostra collezione di portafogli in pelle?
This umbrella is compact enough to fit in my bag. (Dis am-bre-la iz kom-pekt i-naf tuu fit in mai beg) — Questo ombrello è abbastanza compatto da entrare nella mia borsa.
Do you have a shoehorn I can use, please? (Duu yuu hev e scuu-horn Ai ken yuuz, pliiz) — Avete un calzante che posso usare, per favore?
Are these gold earrings made of real eighteen-karat gold? (Ar diiz gould iir-ringz meid ov riil ei-tiin-ke-ret gould) — Questi orecchini d'oro sono fatti di vero oro diciotto carati?
This skirt has convenient side pockets. (Dis skert hez kon-vii-ni-ent said po-kets) — Questa gonna ha comode tasche laterali.
I would like to return this shirt and get a refund. (Ai uud laik tuu ri-tern dis sciert end ghet e rii-fand) — Vorrei restituire questa camicia ed ottenere un rimborso.
These flip-flops are perfect for the beach. (Diiz flip-flops ar per-fekt for de biic) — Queste infradito sono perfette per la spiaggia.
Do you have a matching tie and pocket square set? (Duu yuu hev e me-cing tai end po-ket skuer set) — Avete un set abbinato di cravatta e pochette da taschino?
I am looking for a warm down jacket for winter sports. (Ai em luk-ing for e uorm daun ge-ket for uin-ter sprotz) — Sto cercando un piumino caldo per gli sport invernali.
Could you stretch these leather shoes slightly? (Kud yuu strec diiz le-der scuuz slait-lii) — Potrebbe allargare leggermente queste scarpe in pelle?
This denim jacket never goes out of fashion. (Dis de-nim ge-ket ne-ver gouz aut ov fe-scion) — Questa giacca di jeans non passa mai di moda.
Do you sell leather care spray or shoe polish here? (Duu yuu sel le-der ker sprei or scuu po-lisc hiir) — Vendete spray per la cura della pelle o lucido per scarpe qui?
Can I pay using Apple Pay or contactless card? (Ken Ai pei yuu-sing E-pel Pei or kon-tekt-les kard) — Posso pagare con Apple Pay o carta contactless?
This pair of sunglasses comes with a protective hard case. (Dis per ov san-gla-siz kamz uid e pro-tek-tiv hard keis) — Questo paio di occhiali da sole è dotato di una custodia rigida protettiva.
I need a formal white shirt with French cuffs. (Ai niid e for-mal uait sciert uid frenc kafs) — Ho bisogno di una camicia bianca formale con polsini doppi.
These loafers are very stylish and comfortable to wear. (Diiz lou-ferz ar ve-rii stai-lisc end kam-for-te-bel tuu uer) — Questi mocassini sono molto eleganti e comodi da indossare.
Could you gift-wrap this silk scarf for me? (Kud yuu ghift-rep dis silk skarf for mii) — Potrebbe fare una confezione regalo per questa sciarpa di seta?
Is this trench coat waterproof or water-resistant? (Iz dis trenc kout uo-ter-pruuf or uo-ter-ri-zis-tent) — Questo trench è impermeabile o idrorepellente?
The fitting room mirror has great lighting. (De fit-ting ruum mi-ror hez greit lait-ing) — Lo specchio del camerino ha un'ottima illuminazione.
Thank you for your help, I will take these two items! (Tenk yuu for yor help, Ai uil teik diiz tuu ai-temz) — Grazie per l'aiuto, prendo questi due articoli!
Where is the main entrance to the shopping mall? (Uer iz de mein en-trens tuu de sciop-ping mol) — Dov'è l'ingresso principale del centro commerciale?
Which floor is the food court on? (Uic flor iz de fuud kort on) — A quale piano si trova l'area ristorazione?
Is there an underground parking garage here? (Iz der en an-der-graund par-king ghe-ragi hiir) — C'è un parcheggio sotterraneo qui?
Let us take the escalator up to the first floor. (Let as teik de es-ke-lei-tor ap tuu de ferst flor) — Prendiamo la scala mobile per salire al primo piano.
Are there any department stores inside this mall? (Ar der en-ii di-part-ment storz in-said dis mol) — Ci sono grandi magazzini all'interno di questo centro commerciale?
I need to find an ATM machine to withdraw cash. (Ai niid tuu faind en ei-tii-em me-sciin tuu uit-dro kesc) — Devo trovare uno sportello bancomat per prelevare contanti.
Where is the customer service information desk? (Uer iz de kas-to-mer ser-vis in-for-mei-scion desk) — Dov'è il banco informazioni del servizio clienti?
Look at the mall map to see where we are. (Luk et de mol mep tuu sii uer uii ar) — Guarda la mappa del centro commerciale per vedere dove siamo.
Is there a supermarket on the basement level? (Iz der e suu-per-mar-ket on de beis-ment le-vel) — C'è un supermercato al piano interrato?
We can leave our stroller near the entrance. (Uii ken liiv au-er strou-ler niir de en-trens) — Possiamo lasciare il passeggino vicino all'ingresso.
What time does the shopping center close on Sundays? (Uot taim daz de sciop-ping sen-ter klous on San-deiz) — A che ora chiude il centro commerciale la domenica?
There is a huge play area for children on the top floor. (Der iz e hiugj plei e-ri-a for ciul-dren on de top flor) — C'è un'enorme area giochi per bambini all'ultimo piano.
Do you want to check out the electronics store? (Duu yuu uont tuu cek aut de i-lek-tro-niks stor) — Vuoi dare un'occhiata al negozio di elettronica?
Let us meet near the central fountain in twenty minutes. (Let as miit niir de sen-tral faun-ten in tuen-tii mi-nits) — Incontriamoci vicino alla fontana centrale tra venti minuti.
The mall is very crowded during the weekend. (De mol iz ve-rii krau-ded dyoor-ing de uiik-end) — Il centro commerciale è molto affollato durante il fine settimana.
Is there a bookstore near the electronics shop? (Iz der e buk-stor niir de i-lek-tro-niks sciop) — C'è una libreria vicino al negozio di elettronica?
Can we get a coffee at the espresso bar upstairs? (Ken uii ghet e kof-fii et de es-pres-sou bar ap-sterz) — Possiamo prendere un caffè al bar espresso di sopra?
Where are the public restrooms located? (Uer ar de pab-lik rest-ruumz lou-kei-ted) — Dove si trovano i bagni pubblici?
They are offering free samples of juice in the corridor. (Dei ar of-fer-ing frii sam-pelz ov gius in de ko-ri-dor) — Stanno offrendo campioni gratuiti di succo nel corridoio.
I lost my shopping bag near the main plaza. (Ai lost mai sciop-ping beg niir de mein pla-za) — Ho perso la mia borsa della spesa vicino alla piazza principale.
Is there an elevator for people with strollers? (Iz der en e-le-vei-tor for pii-pel uid strou-lerz) — C'è un ascensore per le persone con i passeggini?
Let us grab a quick lunch at the fast food counter. (Let as greb e kuik lanc et de fast fuud kaun-ter) — Prendiamo un pranzo veloce al banco del fast food.
Are the shops open during public holidays? (Ar de sciops ou-pen dyoor-ing pab-lik ho-li-deiz) — I negozi sono aperti durante le festività pubbliche?
You can validate your parking ticket at the machine. (Yuu ken va-li-deit yor par-king tik-et et de me-sciin) — Puoi convalidare il tuo biglietto del parcheggio alla macchinetta.
Is there a mobile phone repair shop in the mall? (Iz der e mou-bail foun ri-per sciop in de mol) — C'è un negozio di riparazione telefoni nel centro commerciale?
Look at the large promotional banner over there! (Luk et de largi pro-mou-scio-nal ben-ner ou-ver der) — Guarda il grande striscione promozionale laggiù!
We can rent a small shopping cart for the kids. (Uii ken rent e smol sciop-ping kart for de kidz) — Possiamo noleggiare un piccolo carrello della spesa per i bambini.
Where is the nearest exit to the parking lot? (Uer iz de niir-ist ek-sit tuu de par-king lot) — Dov'è l'uscita più vicina per il parcheggio?
They are celebrating the anniversary of the mall today. (Dei ar se-le-brei-ting de e-ni-ver-se-rii ov de mol tu-dei) — Oggi stanno festeggiando l'anniversario del centro commerciale.
Is there a pharmacy inside the shopping gallery? (Iz der e far-ma-sii in-said de sciop-ping ghe-ler-ii) — C'è una farmacia all'interno della galleria commerciale?
Let us try the new ice cream parlor on the ground floor. (Let as trai de niu ais kriim par-lor on de graund flor) — Proviamo la nuova gelateria al piano terra.
The security guard is standing near the entrance. (De si-kiu-ri-tii gard iz sten-ding niir de en-trens) — La guardia di sicurezza è in piedi vicino all'ingresso.
Can I pay for my parking with a credit card? (Ken Ai pei for mai par-king uid e kre-dit kard) — Posso pagare il parcheggio con la carta di credito?
Where can I find a directory map of all stores? (Uer ken Ai faind e di-rek-to-rii mep ov ol storz) — Dove posso trovare una mappa con l'elenco di tutti i negozi?
The mall has over one hundred different stores. (De mol hez ou-ver uan han-dred di-fe-rent storz) — Il centro commerciale ha oltre cento negozi diversi.
Let us sit down on the bench for a few minutes. (Let as sit daun on de benc for e fiu mi-nits) — Sediamoci sulla panchina per qualche minuto.
Is there a pet shop on the lower level? (Iz der e pet sciop on de lou-er le-vel) — C'è un negozio per animali al piano inferiore?
We got free vouchers for the cinema inside the mall. (Uii got frii vau-cerz for de si-ne-ma in-said de mol) — Abbiamo ottenuto buoni gratuiti per il cinema all'interno del centro commerciale.
The air conditioning inside the mall is very strong. (De er kon-di-scio-ning in-said de mol iz ve-rii strong) — L'aria condizionata all'interno del centro commerciale è molto forte.
Do they have a lost and found office here? (Duu dei hev e lost end faund o-fis hiir) — Hanno un ufficio oggetti smarriti qui?
I need to buy a gift card at the main desk. (Ai niid tuu bai e ghift kard et de mein desk) — Devo comprare una carta regalo al banco principale.
Is there a hair salon inside this building? (Iz der e her sa-lon in-said dis bil-ding) — C'è un salone di parrucchiere all'interno di questo edificio?
Follow the green arrows to reach the exit stairs. (Fol-lou de griin e-rouz tuu riic de ek-sit sterz) — Segui le frecce verdi per raggiungere le scale di emergenza.
We can charge our electric car in the parking garage. (Uii ken ciargi au-er i-lek-trik kar in de par-king ghe-ragi) — Possiamo ricaricare la nostra auto elettrica nel garage.
Look at the interactive display with store discounts! (Luk et de in-ter-ek-tiv dis-plei uid stor dis-kaunts) — Guarda lo schermo interattivo con gli sconti dei negozi!
Is there a bakery selling fresh pastries nearby? (Iz der e bei-ke-rii sel-ling fresc pei-striiz niir-bai) — C'è una panetteria che vende pasticcini freschi qui vicino?
The parking lot is completely full on Saturday afternoon. (De par-king lot iz kom-pliit-lii ful on Se-ter-dei af-ter-nuun) — Il parcheggio è completamente pieno il sabato pomeriggio.
You can leave your coat in a locker near the entrance. (Yuu ken liiv yor kout in e lo-ker niir de en-trens) — Puoi lasciare il tuo cappotto in un armadietto vicino all'ingresso.
Let us walk around the upper gallery before leaving. (Let as uok e-raund de ap-per ghe-ler-ii bi-for liiv-ing) — Facciamo un giro nella galleria superiore prima di andare via.
What a great day spent shopping at the mall! (Uot e greit dei spent sciop-ping et de mol) — Che bella giornata trascorsa a fare shopping al centro commerciale!
You will not believe what happened to me yesterday evening! (Yuu uil not bi-liiv uot he-pend tuu mii yes-ter-dei iiv-ning) — Non crederai mai a cosa mi è successo ieri sera!
Let me order another round of beers for everyone. (Let mii or-der e-na-der raund ov biirz for ev-ri-uan) — Lascia che ordini un altro giro di birre per tutti.
So there we were, standing in the middle of the rain... (Sou der uii uer, sten-ding in de mi-del ov de rein) — Allora eravamo lì, in piedi in mezzo alla pioggia...
Bartender, can we get two more IPAs on tap? (Bar-ten-der, ken uii ghet tuu mor ai-pii-eiz on tep) — Barista, possiamo avere altre due IPA alla spina?
Do you remember that hilarious summer trip to Greece? (Duu yuu ri-mem-ber det hi-ler-i-as sam-mer trip tuu Griis) — Ti ricordi quel fantastico viaggio estivo in Grecia?
He started telling this crazy story about his neighbor. (Hii star-ted tel-ling dis krei-zii stor-ii e-baut hiz nei-bor) — Ha iniziato a raccontare questa storia pazza sul suo vicino.
We ended up staying at the pub until closing time. (Uii en-ded ap stei-ing et de pab un-til klous-ing taim) — Siamo finiti per rimanere al pub fino all'ora di chiusura.
To make a long story short, everything went completely wrong! (Tuu meik e long stor-ii sciort, ev-ri-ting uent kom-pliit-lii rong) — Per farla breve, è andato tutto completamente storto!
Are we getting some snacks or a bowl of peanuts with this drink? (Ar uii ghet-ting sam sneks or e boul ov pii-nats uid dis drink) — Prendiamo qualcosa da sgranocchiare o una ciotola di arachidi con questo drink?
Suddenly, out of nowhere, my ex-girlfriend walked into the bar. (Sa-den-lii, aut ov nou-uer, mai eks-gherl-frend uokt in-tuu de bar) — All'improvviso, dal nulla, la mia ex è entrata nel bar.
I could not stop laughing when he told us that joke. (Ai kud not stop laf-ing uen hii tould as det giouk) — Non riuscivo a smettere di ridere quando ci ha raccontato quella battuta.
Cheers to good friends and great weekends ahead! (Ciirz tuu gud frendz end greit uiik-endz e-hed) — Alla salute dei buoni amici e dei grandi fine settimana in arrivo!
Who is going to pay the bill this time? (Huu iz gou-ing tuu pei de bil dis taim) — Chi paga il conto questa volta?
He swore it was true, but nobody believed a single word. (Hii suor it uoz truuu, bat nou-bo-dii bi-liivd e sing-gel uord) — Ha giurato che fosse vero, ma nessuno ha creduto a una singola parola.
Let us move to that table near the big screen. (Let as muuv tuu det tei-bel niir de big skriin) — Spostiamoci in quel tavolo vicino al grande schermo.
I haven't heard from him since that night at the party. (Ai he-vent herd from him sins det nait et de par-tii) — Non ho più sue notizie da quella notte alla festa.
Can I get a cold gin and tonic with a slice of lime? (Ken Ai ghet e kould gin end to-nik uid e slais ov laim) — Posso avere un gin tonic freddo con una fetta di lime?
That was honestly the most embarrassing moment of my life. (Det uoz o-nest-lii de moust em-be-ra-sing mou-ment ov mai laif) — Quello è stato sinceramente il momento più imbarazzante della mia vita.
You should have seen the look on his face! (Yuu sciud hev siin de luk on hiz feis) — Avresti dovuto vedere l'espressione sulla sua faccia!
We used to hang out at this pub every Friday night. (Uii yuuzd tuu heng aut et dis pab ev-ri Frai-dei nait) — Eravamo soliti uscire in questo pub ogni venerdì sera.
I missed my last train because we kept talking! (Ai mist mai last trein bi-kos uii kept tok-ing) — Ho perso il mio ultimo treno perché abbiamo continuato a parlare!
Put it on my tab, I will clear it before leaving. (Put it on mai teb, Ai uil kliir it bi-for liiv-ing) — Mettilo sul mio conto, lo saldo prima di andare via.
He always exaggerates whenever he recounts his adventures. (Hii ol-ueiz eg-se-ge-reits uen-e-ver hii ri-kaunts hiz ed-ven-ciurz) — Esagera sempre ogni volta che racconta le sue avventure.
Shall we split a plate of nachos with cheese? (Scel uii split e pleit ov na-cios uid ciiz) — Dividiamo un piatto di nachos con formaggio?
That concert was completely wild, I will never forget it! (Det kon-sert uoz kom-pliit-lii uaild, Ai uil ne-ver for-ghet it) — Quel concerto è stato completamente folle, non lo dimenticherò mai!
What are you guys talking about so intensely? (Uot ar yuu gaiz tok-ing e-baut sou in-tens-lii) — Di cosa state parlando così intensamente ragazzi?
I ran into our old high school teacher last week. (Ai ren in-tuu au-er ould hai skuul tii-cer last uiik) — Ho incontrato per caso il nostro vecchio professore delle superiori la settimana scorsa.
Wait, you never told me the full version of that story! (Ueit, yuu ne-ver tould mii de ful ver-scion ov det stor-ii) — Aspetta, non mi hai mai raccontato la versione completa di quella storia!
Is this seat taken or can I sit here? (Iz dis siit tei-ken or ken Ai sit hiir) — Questo posto è occupato o posso sedermi qui?
We lost the game in the very last minute of extra time. (Uii lost de gheim in de ve-rii last mi-nit ov eks-tra taim) — Abbiamo perso la partita proprio all'ultimo minuto dei tempi supplementari.
Let us order a shot of espresso before heading home. (Let as or-der e sciot ov es-pres-sou bi-for hed-ing houm) — Ordiniamo un espresso prima di avviarci a casa.
She decided to quit her corporate job and move to Bali. (Sciii di-sai-ded tuu kuit her kor-po-ret giob end muuv tuu Ba-li) — Ha deciso di licenziarsi dal suo lavoro in azienda e trasferirsi a Bali.
It all started when my car broke down in the middle of nowhere. (It ol star-ted uen mai kar brouk daun in de mi-del ov nou-uer) — È iniziato tutto quando la mia macchina si è rotta in mezzo al nulla.
Give me a moment to catch my breath, I ran all the way here! (Ghiv mii e mou-ment tuu kec mai bret, Ai ren ol de uei hiir) — Dammi un attimo per riprendere fiato, sono corso fino a qui!
They have a great selection of craft beers on tap tonight. (Dei hev e greit si-lek-scion ov kreft biirz on tep tu-nait) — Hanno una grande selezione di birre artigianali alla spina stasera.
Believe it or not, we bumped into a Hollywood star at the café. (Bi-liiv it or not, uii bamp-ted in-tuu e Ho-lii-uud star et de ka-fei) — Che ci crediate o no, abbiamo incontrato una stella di Hollywood al bar.
I accidentally spilled my glass of red wine on his white shirt. (Ai ek-si-den-tal-lii spild mai glas ov red uain on hiz uait sciert) — Ho rovesciato per sbaglio il mio bicchiere di vino rosso sulla sua camicia bianca.
We stayed up chatting until four o'clock in the morning. (Uii steid ap ce-ting un-til for o-klok in de mor-ning) — Siamo rimasti alzati a chiacchierare fino alle quattro del mattino.
That joke was so funny that I almost choked on my drink! (Det giouk uoz sou fan-nii det Ai ol-moust cioukt on mai drink) — Quella battuta era così divertente che quasi mi strozzavo con il drink!
Who wants another round before the kitchen closes? (Huu uonts e-na-der raund bi-for de ki-cen klou-siz) — Chi vuole un altro giro prima che chiuda la cucina?
I can't believe how much things have changed over the years. (Ai kent bi-liiv hau mac tings hev ceingjd ou-ver de yiirz) — Non posso credere a quanto siano cambiate le cose nel corso degli anni.
He spent the entire night trying to impress the bartender. (Hii spent de en-tai-er nait trai-ing tuu im-pres de bar-ten-der) — Ha passato l'intera serata cercando di impressionare la barista.
Let us take a selfie to document this amazing night out! (Let as teik e sel-fii tuu do-kiu-ment dis e-mei-zing nait aut) — Facciamoci un selfie per documentare questa fantastica serata fuori!
I left my keys on the counter, did anyone see them? (Ai left mai kiiz on de kaun-ter, did en-ii-uan sii dem) — Ho lasciato le mie chiavi sul bancone, qualcuno le ha viste?
Every time we meet up, we always end up telling the same old stories. (Ev-ri taim uii miit ap, uii ol-ueiz end ap tel-ling de seim ould stor-iiz) — Ogni volta che ci incontriamo, finiamo sempre per raccontare le stesse vecchie storie.
The background music is a bit too loud for having a conversation. (De bek-graund miu-zik iz e bit tuu laud for hev-ing e kon-ver-sei-scion) — La musica di sottofondo è un po' troppo alta per fare una conversazione.
We used to play darts here every Thursday after work. (Uii yuuzd tuu plei darts hiir ev-ri Ters-dei af-ter uork) — Eravamo soliti giocare a freccette qui ogni giovedì dopo il lavoro.
What a night! I really needed a laugh after this stressful week. (Uot e nait! Ai rii-a-lii nii-ded e laf af-ter dis stres-ful uiik) — Che serata! Avevo proprio bisogno di una risata dopo questa settimana stressante.
Next time, the first round is on me, I promise! (Nekst taim, de ferst raund iz on mii, Ai pro-mis) — La prossima volta il primo giro lo offro io, lo prometto!
Same place, same time next week? (Seim pleis, seim taim nekst uiik) — Stesso posto, stessa ora la settimana prossima?
The key card is not working and I cannot open my door. (De kii kard iz not uork-ing end Ai ken-not ou-pen mai dor) — La scheda non funziona e non riesco ad aprire la mia porta.
There is no hot water in the shower this morning. (Der iz nou hot uo-ter in de sciau-er dis mor-ning) — Non c'è acqua calda nella doccia stamattina.
The air conditioning in our room is making a loud noise. (De er kon-di-scio-ning in au-er ruum iz meik-ing e laud nois) — L'aria condizionata nella nostra camera fa un forte rumore.
The room has not been cleaned yet and the bed is unmade. (De ruum hez not biin kliind yet end de bed iz an-meid) — La camera non è ancora stata pulita e il letto non è rifatto.
Excuse me, but there are missing towels in the bathroom. (Eks-kiuz mii, bat der ar mis-sing tau-elz in de bat-ruum) — Scusi, ma mancano gli asciugamani in bagno.
The Wi-Fi signal in room three hundred is extremely weak. (De Uai-Fai sig-nal in ruum trii han-dred iz eks-triim-lii uiik) — Il segnale Wi-Fi nella camera trecento è estremamente debole.
My neighbors are partying and playing loud music at night. (Mai nei-borz ar par-ti-ing end plei-ing laud miu-zik et nait) — I miei vicini stanno facendo festa e suonano musica ad alto volume di notte.
The mini-bar in our room is completely empty. (De mi-ni-bar in au-er ruum iz kom-pliit-lii emp-tii) — Il minibar nella nostra camera è completamente vuoto.
The toilet is clogged and will not flush properly. (De toi-let iz klogd end uil not flasc pro-per-lii) — Il WC è intasato e non scarica bene.
I booked a double bed, but I received two single beds. (Ai bukt e da-bel bed, bat Ai ri-siivd tuu sing-gel bedz) — Ho prenotato un letto matrimoniale, ma ho ricevuto due letti singoli.
There is a terrible smell of smoke in this non-smoking room. (Der iz e te-ri-bel smel ov smouk in dis non-smouk-ing ruum) — C'è un terribile odore di fumo in questa camera per non fumatori.
The elevator is out of order and we are on the fifth floor. (De e-le-vei-tor iz aut ov or-der end uii ar on de fift flor) — L'ascensore è fuori servizio e siamo al quinto piano.
I found a stain on the bed sheets. (Ai faund e stein on de bed sciits) — Ho trovato una macchia sulle lenzuola del letto.
There are no extra pillows in the wardrobe. (Der ar nou eks-tra pil-louz in de uor-droub) — Non ci sono cuscini extra nell'armadio.
The safe box in our wardrobe is locked and won't open. (De seif boks in au-er uor-droub iz lokt end uont ou-pen) — La cassaforte nel nostro armadio è bloccata e non si apre.
We ordered room service an hour ago and it hasn't arrived. (Uii or-derd ruum ser-vis en au-er e-gou end it he-zent e-raivd) — Abbiamo ordinato il servizio in camera un'ora fa e non è ancora arrivato.
There is water leaking from the ceiling in the bathroom. (Der iz uo-ter liik-ing from de sii-ling in de bat-ruum) — C'è un'infiltrazione d'acqua dal soffitto del bagno.
The window in my room does not close properly. (De uin-dou in mai ruum daz not klous pro-per-lii) — La finestra della mia camera non si chiude bene.
I was charged twice for the same reservation on my credit card. (Ai uoz ciargjd tuais for de seim re-zer-vei-scion on mai kre-dit kard) — Mi è stata addebitata due volte la stessa prenotazione sulla carta di credito.
The television remote control is missing its batteries. (De te-le-vi-scion ri-mout kon-troul iz mis-sing its be-te-riiz) — Al telecomando della televisione mancano le batterie.
There is a lot of traffic noise coming from the street. (Der iz e lot ov tre-fik nois kam-ing from de striit) — C'è molto rumore di traffico proveniente dalla strada.
The heating system is not working and the room is freezing. (De hii-ting sis-tem iz not uork-ing end de ruum iz friiz-ing) — Il sistema di riscaldamento non funziona e la camera è gelida.
I requested a sea view room, but I can only see the parking lot. (Ai ri-kues-ted e sii viu ruum, bat Ai ken on-lii sii de par-king lot) — Ho richiesto una camera vista mare, ma vedo solo il parcheggio.
There are insects near the window frame. (Der ar in-sekts niir de uin-dou freim) — Ci sono insetti vicino al telaio della finestra.
The shower drain is completely blocked with hair. (De sciau-er drein iz kom-pliit-lii blokt uid her) — Lo scarico della doccia è completamente ostruito da capelli.
The key card scanner at the main gate is not responding. (De kii kard ske-ner et de mein gheit iz not ri-spond-ing) — Il lettore di schede al cancello principale non risponde.
There is no toilet paper left in our bathroom. (Der iz nou toi-let pei-per left in au-er bat-ruum) — Non c'è più carta igienica nel nostro bagno.
I would like to complain about the noise from the construction site next door. (Ai uud laik tuu kom-plein e-baut de nois from de kon-strak-scion sait nekst dor) — Vorrei lamentarmi del rumore del cantiere accanto.
The desk lamp in our room is flickering continuously. (De desk lemp in au-er ruum iz fli-ke-ring kon-ti-nu-as-lii) — La lampada da scrivania nella nostra camera sfarfalla continuamente.
The hairdryer in the bathroom is not blowing warm air. (De her-drai-er in de bat-ruum iz not blou-ing uorm er) — L'asciugacapelli in bagno non emette aria calda.
I lost my room key card, can I get a replacement? (Ai lost mai ruum kii kard, ken Ai ghet e ri-pleis-ment) — Ho perso la scheda della camera, posso averne una di ricambio?
There are incorrect extra charges on our final hotel bill. (Der ar in-ko-rekt eks-tra ciar-giz on au-er fai-nal hou-tel bil) — Ci sono addebiti extra errati sul nostro conto finale dell'hotel.
The breakfast buffet was already completely empty at nine o'clock. (De brek-fast buf-fei uoz ol-re-dii kom-pliit-lii emp-tii et nain o-klok) — Il buffet della colazione era già completamente vuoto alle nove.
The mattress on my bed is very uncomfortable and lumpy. (De me-tres on mai bed iz ve-rii an-kam-for-te-bel end lam-pii) — Il materasso sul mio letto è molto scomodo e pieno di nodi.
The refrigerator in the minibar is not cooling at all. (De ri-fri-ge-rei-tor in de mi-ni-bar iz not kuul-ing et ol) — Il frigorifero del minibar non raffredda per niente.
There is dirty water coming out of the bathroom tap. (Der iz der-tii uo-ter kam-ing aut ov de bat-ruum tep) — Esce acqua sporca dal rubinetto del bagno.
The room smells damp and needs proper ventilation. (De ruum smelz demp end niidz pro-per ven-ti-lei-scion) — La camera puzza di umido e ha bisogno di un'adeguata ventilazione.
Could you please change our bed sheets immediately? (Kud yuu pliiz ceingj au-er bed sciits i-mii-di-et-lii) — Potreste per favore cambiare le nostre lenzuola immediatamente?
The smoke alarm in the hallway keeps beeping incessantly. (De smouk e-larm in de hol-uei kiips biip-ing in-se-sant-lii) — L'allarme antincendio nel corridoio continua a suonare incessantemente.
We specifically asked for a baby cot, but it is not in the room. (Uii spe-si-fi-ka-lii askt for e bei-bii kot, bat it iz not in de ruum) — Abbiamo chiesto specificamente un lettino per bambini, ma non è in camera.
The room door lock seems broken and does not latch. (De ruum dor lok siimz brou-ken end daz not lec) — La serratura della porta della camera sembra rotta e non si chiude.
Is there anyone available to help us carry our heavy bags upstairs? (Iz der en-ii-uan e-vei-le-bel tuu help as ke-rii au-er he-vii begz ap-sterz) — C'è qualcuno disponibile ad aiutarci a portare le valigie pesanti di sopra?
The water pressure in the shower is far too low. (De uo-ter pre-sciur in de sciau-er iz far tuu lou) — La pressione dell'acqua nella doccia è decisamente troppo bassa.
I found a broken glass on the floor when we walked in. (Ai faund e brou-ken glas on de flor uen uii uokt in) — Ho trovato un bicchiere rotto sul pavimento quando siamo entrati.
Can we please change rooms due to this terrible noise? (Ken uii pliiz ceingj ruumz diu tuu dis te-ri-bel nois) — Possiamo per favore cambiare camera a causa di questo terribile rumore?
The hotel staff did not wake me up at seven as requested. (De hou-tel staf did not ueik mii ap et se-ven ez ri-kues-ted) — Lo staff dell'hotel non mi ha svegliato alle sette come richiesto.
There are no soap or shampoo bottles in the shower. (Der ar nou soup or sciam-puu bot-telz in de sciau-er) — Non ci sono flaconi di sapone o shampoo nella doccia.
The curtains in our bedroom are torn and let light in. (De ker-tenz in au-er bed-ruum ar torn end let lait in) — Le tende nella nostra camera da letto sono strappate e lasciano passare la luce.
The swimming pool is closed for maintenance without prior notice. (De sui-ming puul iz klousd for mein-te-nens uid-aut prai-or nou-tis) — La piscina è chiusa per manutenzione senza preavviso.
I want to speak with the hotel manager right away. (Ai uont tuu spiik uid de hou-tel me-ne-ger rait e-uei) — Voglio parlare immediatamente con il direttore dell'hotel.
The kitchen sink is completely clogged again. (De ki-cen sink iz kom-pliit-lii klogd e-ghen) — Il lavello della cucina è di nuovo completamente intasato.
There is a power outage in our whole neighborhood. (Der iz e pau-er au-tigj in au-er houl nei-bor-hud) — C'è un blackout in tutto il nostro quartiere.
The washing machine is leaking water on the floor. (De uo-scing me-sciin iz liik-ing uo-ter on de flor) — La lavatrice sta perdendo acqua sul pavimento.
A pipe burst in the bathroom wall last night. (E paip berst in de bat-ruum uol last nait) — Un tubo si è rotto nel muro del bagno ieri sera.
The air conditioner is blowing warm air instead of cold. (De er kon-di-scio-ner iz blou-ing uorm er in-sted ov kould) — L'aria condizionata soffia aria calda invece che fredda.
The roof is leaking right above my bedroom bed. (De ruuf iz liik-ing rait e-bav mai bed-ruum bed) — Il tetto perde acqua proprio sopra il mio letto.
The lock on the main front door is stuck. (De lok on de mein front dor iz stak) — La serratura della porta d'ingresso principale è bloccata.
The oven will not heat up at all. (De a-ven uil not hiit ap et ol) — Il forno non si scalda per niente.
The refrigerator is making a strange humming sound. (De ri-fri-ge-rei-tor iz meik-ing e streingj ham-ming saund) — Il frigorifero sta facendo uno strano ronzio.
A fuse blew when I turned on the hairdryer. (E fiuz bluu uen Ai ternd on de her-drai-er) — È saltato un fusibile quando ho acceso l'asciugacapelli.
The boiler is showing an error code on the screen. (De boi-ler iz sciou-ing en er-ror koud on de skriin) — La caldaia mostra un codice di errore sullo schermo.
We have a rodent problem in the basement. (Uii hev e rou-dent pro-blem in de beis-ment) — Abbiamo un problema di roditori in cantina.
The window shutter is jammed and won't go down. (De uin-dou sciut-ter iz gjemd end uont gou daun) — La tapperella della finestra è incastrata e non si abbassa.
The radiator is cold even though the heating is on. (De rei-di-ei-tor iz kould ii-ven dou de hii-ting iz on) — Il termosifone è freddo anche se il riscaldamento è acceso.
There is black mold growing on the bathroom ceiling. (Der iz blek mould grou-ing on de bat-ruum sii-ling) — C'è della muffa nera che cresce sul soffitto del bagno.
My car battery is completely dead this morning. (Mai kar be-te-rii iz kom-pliit-lii ded dis mor-ning) — La batteria della mia auto è completamente scarica stamattina.
I got a flat tire on my way to work. (Ai got e flet tai-er on mai uei tuu uork) — Ho bucato una gomma mentre andavo al lavoro.
The engine is making a strange knocking noise. (De en-gin iz meik-ing e streingj nok-ing nois) — Il motore sta facendo uno strano rumore di battito.
The check engine light just came on the dashboard. (De cek en-gin lait giast keim on de desci-bord) — La spia di avaria motore si è appena accesa sul cruscotto.
I ran out of petrol in the middle of the highway. (Ai ren aut ov pe-trol in de mi-del ov de hai-uei) — Ho finito la benzina in mezzo all'autostrada.
My brakes are making a loud squeaking sound. (Mai breiks ar meik-ing e laud skuik-ing saund) — I miei freni stanno facendo un forte fischio.
The starter motor won't turn over at all. (De star-ter mou-tor uont tern ou-ver et ol) — Il motorino di avviamento non gira per niente.
Someone scratched my car door while it was parked. (Sam-uan skrec-t mai kar dor uail it uoz parkt) — Qualcuno ha rigato la portiera della mia auto mentre era parcheggiata.
My windscreen wiper blade is broken. (Mai uind-skriin uai-per bleid iz brou-ken) — La spazzola del tergicristallo è rotta.
The car key fob battery needs to be replaced. (De kar kii fob be-te-rii niidz tuu bii ri-pleisd) — La batteria del telecomando dell'auto deve essere sostituita.
The radiator is overheating and steam is coming out. (De rei-di-ei-tor iz ou-ver-hii-ting end stiim iz kam-ing aut) — Il radiatore si sta surriscaldando ed esce del vapore.
I locked my keys inside the car by mistake. (Ai lokt mai kiiz in-said de kar bai mis-teik) — Ho chiuso le chiavi dentro l'auto per errore.
The clutch pedal feels very loose and soft. (De klac pe-dal fiilz ve-rii luus end soft) — Il pedale della frizione sembra molto allentato e morbido.
My car was towed because I parked illegally. (Mai kar uoz toud bi-kos Ai parkt i-lii-gal-lii) — La mia auto è stata rimossa perché avevo parcheggiato in divieto di sosta.
I need to call a roadside assistance tow truck. (Ai niid tuu kol e roud-said e-sis-tens tou trak) — Devo chiamare un carro attrezzi del soccorso stradale.
The subway line is delayed due to technical issues. (De sab-uei lain iz di-leid diu tuu tek-ni-kal i-sciuz) — La linea della metropolitana è in ritardo per problemi tecnici.
Traffic is completely jammed near the city center. (Tre-fik iz kom-pliit-lii gjemd niir de si-tii sen-ter) — Il traffico è completamente bloccato vicino al centro città.
The streetlights on our block are not working tonight. (De striit-laits on au-er blok ar not uork-ing tu-nait) — I lampioni nel nostro isolato non funzionano stasera.
Construction work is causing heavy traffic delays. (Kon-strak-scion uork iz koz-ing he-vii tre-fik di-leiz) — I lavori in corso stanno causando gravi ritardi al traffico.
The bus skipped our stop because it was completely packed. (De bas skipt au-er stop bi-kos it uoz kom-pliit-lii pekt) — L'autobus ha saltato la nostra fermata perché era completamente pieno.
Someone stole my bicycle from the station rack. (Sam-uan stoul mai bai-si-kel from de stei-scion rek) — Qualcuno ha rubato la mia bicicletta dalla rastrelliera della stazione.
I dropped my wallet down the storm drain by accident. (Ai dropt mai uol-let daun de storm drein bai ek-si-dent) — Mi è caduto il portafoglio nel tombino per sbaglio.
The ticket machine at the train station is out of order. (De tik-et me-sciin et de trein stei-scion iz aut ov or-der) — La biglietteria automatica alla stazione ferroviaria è fuori servizio.
Heavy rain has caused flooding on the main avenue. (He-vii rein hez kozd fla-ding on de mein e-ve-niu) — La forte pioggia ha causato allagamenti sul viale principale.
Garbage collectors haven't picked up the trash for days. (Gar-bigj kol-lek-torz he-vent pikt ap de tresc for deiz) — I netturbini non raccolgono la spazzatura da giorni.
There is too much noise pollution from the nearby highway. (Der iz tuu mac nois po-liu-scion from de niir-bai hai-uei) — C'è troppo inquinamento acustico dalla vicina autostrada.
I got a parking ticket for exceeding the time limit. (Ai got e par-king tik-et for ek-siid-ing de taim li-mit) — Ho preso una multa per aver superato il limite di tempo del parcheggio.
The pavement is slippery and full of icy patches. (De peiv-ment iz slip-pe-rii end ful ov ai-sii pe-ciz) — Il marciapiede è scivoloso e pieno di chiazze di ghiaccio.
The public park is closed for emergency maintenance. (De pab-lik park iz klousd for i-mer-gien-sii mein-te-nens) — Il parco pubblico è chiuso per manutenzione straordinaria.
Deep potholes on this street are damaging car wheels. (Diip pot-houlz on dis striit ar de-me-ging kar uiilz) — Le buche profonde su questa strada stanno danneggiando le ruote delle auto.
The pedestrian crossing light is broken and stuck on red. (De pe-des-tri-an kros-sing lait iz brou-ken end stak on red) — Il semaforo pedonale è rotto e bloccato sul rosso.
I lost my bus pass and need to buy a replacement. (Ai lost mai bas pas end niid tuu bai e ri-pleis-ment) — Ho perso l'abbonamento dell'autobus e devo comprarne uno nuovo.
The air quality in the city center is very poor today. (De er kuo-li-tii in de si-tii sen-ter iz ve-rii puor tu-dei) — La qualità dell'aria nel centro città è pessima oggi.
Road detours are making it hard to navigate around town. (Roud di-tuurz ar meik-ing it hard tuu na-vi-gheit e-raund taun) — Le deviazioni stradali rendono difficile orientarsi in città.
The tram service is suspended due to a power failure. (De trem ser-vis iz sas-pen-ded diu tuu e pau-er fei-liur) — Il servizio tram è sospeso a causa di un guasto elettrico.
Could you put the clean towels in the bathroom cupboard? (Kud iu put de kliin tauelz in de bat-ruum kaberd?) - Puoi mettere gli asciugamani puliti nell'armadietto del bagno?
Did you leave the spare keys by the front door? (Did iu liiv de sper kiiz bai de front dor?) - Hai lasciato le chiavi di riserva vicino alla porta d'ingresso?
The dishwasher is still running, so don't open it yet. (De disciuoscer iz stil ran-ning, sou dount oupen it iet) - La lavastoviglie è ancora in funzione, quindi non aprirla ancora.
I've put a load of dark clothes in the washing machine. (Aiv put e loud ov dark kloudz in de uoscing me-sciin) - Ho messo un carico di vestiti scuri in lavatrice.
Can you give the cat some fresh water before you go? (Ken iu giv de ket sam fresh uoter bifor iu gou?) - Puoi dare dell'acqua fresca al gatto prima di andare?
There's no bread left, so I'll make toast instead. (Derz nou bred left, sou ail meik toust insted) - Non è rimasto pane, quindi mi farò dei toast.
Are we all eating together tonight, or should I wait? (Ar ui ol iiting tugheder tenait, or sciud ai ueit?) - Mangiamo tutti insieme stasera o devo aspettare?
Could you save me some pasta for when I get home? (Kud iu seiv mi sam pasta for uen ai get houm?) - Potresti lasciarmi un po' di pasta per quando torno a casa?
Have you checked what time your first lesson starts tomorrow? (Hev iu cekt uot taim ior ferst leson starts tumorou?) - Hai controllato a che ora inizia la tua prima lezione domani?
Your science teacher left a message about the project. (Ior saiens tiicer left e mesij ebaut de project) - Il tuo insegnante di scienze ha lasciato un messaggio sul progetto.
You can go out after you've finished your homework. (Iu ken gou aut after iuv finisct ior houm-uork) - Puoi uscire dopo aver finito i compiti.
Why don't you get your schoolbag ready before you go to bed? (Uai dount iu get ior sculbeg redi bifor iu gou tu bed?) - Perché non prepari lo zaino prima di andare a letto?
The pharmacist said to take these tablets after meals. (De farmacist sed tu teik dhiiz teblets after miilz) - Il farmacista ha detto di prendere queste compresse dopo i pasti.
I've got a bit of a headache, but I'll be fine. (Aiv got e bit ov e hedeik, bat ail bi fain) - Ho un po' di mal di testa, ma starò bene.
Do you know which platform the regional train leaves from? (Du iu nou uic platform de ri-gionel trein liivz from?) - Sai da quale binario parte il treno regionale?
Let's get on the train before it gets too crowded. (Lets get on de trein bifor it gets tu craudid) - Saliamo sul treno prima che si riempia troppo.
The next metro should be here in about three minutes. (De nekst metro sciud bi hier in ebaut thrii minits) - La prossima metropolitana dovrebbe arrivare tra circa tre minuti.
We need to get off at the third stop and change lines. (Ui niid tu get of et de therd stop end ceingj lains) - Dobbiamo scendere alla terza fermata e cambiare linea.
There's a bus coming, but I don't think it's our one. (Derz e bas caming, bat ai dount think its auer uan) - Sta arrivando un autobus, ma non credo sia il nostro.
The bus driver told us to get off at the next stop. (De bas draiver tould as tu get of et de nekst stop) - L'autista dell'autobus ci ha detto di scendere alla prossima fermata.
Have you checked in online, or do you still need to do it at the airport? (Hev iu cekt in onlain, or du iu stil niid tu du it et di erport?) - Hai già fatto il check-in online o devi ancora farlo in aeroporto?
We've got plenty of time, so there's no need to rush to the gate. (Uiv got plenti ov taim, sou derz nou niid tu ras tu de geit) - Abbiamo tutto il tempo che ci serve, quindi non c'è bisogno di correre al gate.
Where do we drop our bags for the flight? (Uer du ui drop auer begs for de flait?) - Dove lasciamo i bagagli per il volo?
Let's wait by the arrivals board until they announce the ferry. (Lets ueit bai di arraivals bord until dei enauns de ferry) - Aspettiamo vicino al tabellone degli arrivi finché non annunciano il traghetto.
Keep your ticket handy because they may check it on board. (Kiip ior tiket hendi bikoz dei mei cek it on bord) - Tieni il biglietto a portata di mano perché potrebbero controllarlo a bordo.
Take the second street on the left, then keep going straight. (Teik de second striit on de left, den kiip gouing streit) - Prendi la seconda strada a sinistra, poi continua sempre dritto.
I think we've gone past the turning we needed. (Ai think uiv gon past de terning ui niidid) - Credo che abbiamo superato la svolta che dovevamo prendere.
The car won't start, so I'll call roadside assistance. (De kar uount start, sou ail kol roudsaid e-sistens) - La macchina non parte, quindi chiamerò il soccorso stradale.
Someone has just backed into my car in the car park. (Samuan hez giast bekt intu mai kar in de kar park) - Qualcuno ha appena urtato la mia macchina facendo retromarcia nel parcheggio.
The road under the bridge is flooded after the heavy rain. (De roud ander de brij iz fladid after de hevi rein) - La strada sotto il ponte è allagata dopo la forte pioggia.
The whole block lost power for about half an hour. (De houl blok lost pauer for ebaut haf en auer) - In tutto l'isolato è mancata la corrente per circa mezz'ora.
Could you send someone up to fix the shower in our room? (Kud iu send samuan ap tu fiks de sciauer in auer ruum?) - Potreste mandare qualcuno a sistemare la doccia della nostra camera?
Our room is facing the street, and the traffic is really loud. (Auer ruum iz feising de striit, end de traffic iz rili laud) - La nostra camera dà sulla strada e il traffico è davvero rumoroso.
The host left the keys in a lockbox by the front door. (De houst left de kiiz in e lok-boks bai de front dor) - L'host ha lasciato le chiavi in una cassetta con serratura vicino alla porta d'ingresso.
There's a small extra charge that wasn't mentioned in the listing. (Derz e smol ekstra ciarg det uozent mensciend in de listing) - C'è un piccolo costo aggiuntivo che non era indicato nell'annuncio.
Could we have a few more minutes to decide what to order? (Kud ui hev e fiu mor minits tu disa id uot tu order?) - Potremmo avere qualche minuto in più per decidere cosa ordinare?
I'll have the same as you, unless you want to try something different. (Ail hev de seim ez iu, anles iu uont tu trai samthing difrent) - Prendo la stessa cosa che prendi tu, a meno che tu non voglia provare qualcosa di diverso.
That bar was packed, so we ended up finding another place nearby. (Det bar uoz pekt, sou ui endid ap fainding enader pleis niarbai) - Quel bar era pienissimo, quindi alla fine abbiamo trovato un altro posto qui vicino.
I'm just going to grab a few things from the supermarket. (Aim giast gouing tu greb e fiu things from de supermarket) - Vado solo a prendere alcune cose al supermercato.
These trousers fit well, but I don't like the material. (Dhiiz trauzers fit uel, bat ai dount laik de material) - Questi pantaloni vestono bene, ma non mi piace il materiale.
Can we move the meeting back by half an hour? (Ken ui muuv de miiting bek bai haf en auer?) - Possiamo spostare la riunione di mezz'ora?
I'll reply to the email once I've checked the figures. (Ail riplai tu di i-meil uans aiv cekt de figuers) - Risponderò all'email una volta controllati i dati.
Your microphone keeps cutting out during the video call. (Ior maicrofoun kiips cating aut diuring de video kol) - Il tuo microfono continua a interrompersi durante la videochiamata.
The printer says it's out of paper again. (De printer sez its aut ov peiper eghen) - La stampante dice che è di nuovo senza carta.
The museum has a temporary exhibition on ancient coins. (De miuziem hez e temporeri eksibiscion on einsicent coins) - Il museo ha una mostra temporanea sulle monete antiche.
We walked around the old town until it started getting dark. (Ui uokt eraund di ould taun until it started geting dark) - Abbiamo passeggiato per il centro storico finché non ha iniziato a fare buio.
The trail gets steeper after the first kilometre. (De treil gets stiiper after de ferst kilometre) - Il sentiero diventa più ripido dopo il primo chilometro.
I'd rather stay in the shade than spend all afternoon in the sun. (Aid rather stei in de sceid den spend ol after-nuun in de san) - Preferirei stare all'ombra piuttosto che passare tutto il pomeriggio al sole.
I was relieved when the doctor said there was nothing serious. (Ai uoz riliivd uen de doctor sed der uoz nathing si-ri-es) - Mi sono sentito sollevato quando il medico ha detto che non c'era nulla di grave.
I usually stretch for a few minutes before I start lifting weights. (Ai iusciueli stretc for e fiu minits bifor ai start lifting ueits) - Di solito faccio stretching per qualche minuto prima di iniziare a sollevare pesi.
I turn off the lights before I go to bed (ai tërn off dhë laits bifor ai gou tu bed) - Spengo le luci prima di andare a letto
Have you seen my keys anywhere (hav yu sin mai chiis ènibuer) - Hai visto le mie chiavi da qualche parte
The dishwasher is making a weird noise again (dhë dishuosciër is meikin a uird nois eghèn) - La lavastoviglie fa di nuovo uno strano rumore
Can you feed the cat before school (kèn yu fiid dhë chèt bifor skuul) - Puoi dare da mangiare al gatto prima della scuola
We're out of milk, can you grab some (uir aut ov milk, kèn yu grèb sam) - Abbiamo finito il latte, puoi prenderne un po'
Did you finish your homework yet (did yu finish yor houmuork yet) - Hai già finito i compiti
My daughter has a math test tomorrow (mai dotër hez a mèth test tumorou) - Mia figlia ha un compito di matematica domani
Ask your teacher if you can hand it in late (esk yor tiicër if yu kèn hènd it in leit) - Chiedi alla tua insegnante se puoi consegnarlo in ritardo
You can go out, but be back by ten (yu kèn gou aut, bat bi bek bai ten) - Puoi uscire, ma torna entro le dieci
Do I need a prescription for this (du ai niid a priskripscion for dhis) - Mi serve la ricetta per questo
The pharmacy closes at eight tonight (dhë farmasi klousiz et eit tunait) - La farmacia chiude alle otto stasera
Excuse me, does this train stop at the next station (ekskiuz mi, das dhis trein stap et dhë nekst steiscion) - Scusi, questo treno si ferma alla prossima stazione
We just missed the last train home (uì giast mist dhë lest trein houm) - Abbiamo appena perso l'ultimo treno per tornare a casa
Which line do I take to get to the center (uic lain du ai teik tu ghet tu dhë sentër) - Quale linea devo prendere per arrivare in centro
The bus is running about ten minutes late (dhë bas is ranin abaut ten minits leit) - L'autobus è in ritardo di circa dieci minuti
Is this seat taken (is dhis siit teikën) - È libero questo posto
Our flight got delayed because of the weather (auer flait gat dileid bikoz ov dhë uedhër) - Il nostro volo è stato ritardato a causa del maltempo
Where is the gate for the flight to Rome (uer is dhë gheit for dhë flait tu roum) - Dov'è il gate per il volo per Roma
The ferry leaves from the other side of the port (dhë fèri liivz from dhë adhër said ov dhë port) - Il traghetto parte dall'altro lato del porto
Excuse me, how do I get to the old town (ekskiuz mi, hau du ai ghet tu dhë ould taun) - Scusi, come si arriva al centro storico
Turn left at the next traffic light (tërn left et dhë nekst trèfik lait) - Gira a sinistra al prossimo semaforo
The car won't start again this morning (dhë kar uont start eghèn dhis mornin) - La macchina di nuovo non parte stamattina
We need to call roadside assistance (uì niid tu kol roudsaid asistëns) - Dobbiamo chiamare il soccorso stradale
There's a huge traffic jam on the ring road (dhers a hiuug trèfik giem on dhë ring roud) - C'è un ingorgo enorme sulla tangenziale
The whole street flooded after the storm (dhë houl striit fladid aftër dhë storm) - Tutta la strada si è allagata dopo il temporale
We had a blackout for a couple of hours last night (uì hed a blèkaut for a kapël ov auerz lest nait) - Ieri sera abbiamo avuto un blackout per un paio d'ore
Could we get some extra towels for the room (kud uì ghet sam ekstra tauëlz for dhë ruum) - Potremmo avere degli asciugamani in più per la camera
The air conditioning isn't working in our room (dhë er kondiscionin isënt uorkin in auer ruum) - L'aria condizionata non funziona nella nostra camera
There's a leak in the bathroom ceiling (dhers a liik in dhë bethruum siilin) - C'è una perdita nel soffitto del bagno
It's way too noisy to sleep, could we change rooms (its uei tuu noizi tu sliip, kud uì cheingi ruumz) - C'è troppo rumore per dormire, potremmo cambiare camera
The host left the keys under the mat like she said (dhë houst left dhë chiis andër dhë mèt laik scì sed) - L'host ha lasciato le chiavi sotto lo zerbino come aveva detto
Could we see the menu, please (kud uì sii dhë meniu, pliiz) - Possiamo vedere il menù, per favore
I'll have the same as him (ail hev dhë seim ez him) - Prendo lo stesso che ha preso lui
Can we get the bill whenever you're ready (kèn uì ghet dhë bil uenevër yor redi) - Possiamo avere il conto quando volete
We should grab a drink after work sometime (uì sciud grèb a drink aftër uork samtaim) - Dovremmo bere qualcosa insieme dopo il lavoro qualche volta
You won't believe what happened last night (yu uont bilìv uat hèpënd lest nait) - Non crederai a cosa è successo ieri sera
I forgot my reusable bags again (ai forgat mai riiuusëbël bègz eghèn) - Ho dimenticato di nuovo i sacchetti riutilizzabili
Is this on sale or is that the regular price (is dhis on seil or is dhèt dhë reghiulër prais) - Questo è in saldo o è il prezzo normale
Can I try this on in a bigger size (kèn ai trai dhis on in a bighër saiz) - Posso provarlo in una taglia più grande
Sorry I'm late, the meeting ran over (sori aim leit, dhë miitin ren ouvër) - Scusa il ritardo, la riunione è andata per le lunghe
Can you send me that email again, I think I deleted it (kèn yu send mi dhèt iimeil eghèn, ai think ai dilitid it) - Puoi rimandarmi quella email, credo di averla cancellata
You're on mute, we can't hear you (yor on miuut, uì kènt hir yu) - Sei mutato, non ti sentiamo
The wifi keeps cutting out during calls (dhë uaifai kiips katin aut diurin kolz) - Il wifi continua a cadere durante le chiamate
Does anyone know where the phone charger went (das enìuan nou uer dhë foun chargër uent) - Qualcuno sa dov'è finito il caricabatterie
The exhibit closes earlier on Sundays (dhë eksibit klousiz erlìer on sandeiz) - La mostra chiude prima la domenica
We got lost wandering around the old streets (uì gat lost uonderin araund dhë ould striits) - Ci siamo persi girovagando per le vecchie strade
The trail gets pretty steep after this point (dhë treil ghets priti stiip aftër dhis point) - Il sentiero diventa piuttosto ripido dopo questo punto
The boiler's making a strange noise, can you take a look (dhë boilërz meikin a streingi nois, kèn yu teik a luuk) - La caldaia fa uno strano rumore, puoi dare un'occhiata
It's freezing out there today (its friizin aut dher tudei) - Fa un freddo pungente fuori oggi
I need to transfer some money to my savings account (ai niid tu trènsfër sam mani tu mai seivinz akaunt) - Devo trasferire dei soldi sul mio conto di risparmio
I can't find my other shoe anywhere (ai kènt faind mai adhër scìu ènìuer) - Non trovo da nessuna parte l'altra scarpa
Don't slam the door, the baby's asleep (dount slèm dhë dor, dhë beibiz aslìip) - Non sbattere la porta, il bambino sta dormendo
Whose turn is it to walk the dog tonight (huuz tërn is it tu uok dhë dog tunait) - Di chi è il turno di portare fuori il cane stasera
I'll set the table if you start cooking (ail set dhë teibël if yu start kukin) - Apparecchio io se tu inizi a cucinare
We're having pasta again, is that okay (uir hèvin pasta eghèn, is dhèt okei) - Mangiamo di nuovo la pasta, va bene
Can you pass the salt, please (kèn yu pès dhë solt, pliiz) - Puoi passarmi il sale, per favore
Hurry up or we'll be late for school (hari ap or uìl bi leit for skuul) - Sbrigati o faremo tardi per la scuola
I left my textbook at school by mistake (ai left mai tekstbuk et skuul bai misteik) - Ho lasciato per sbaglio il libro a scuola
The teacher gave us way too much homework (dhë tiicër gheiv as uei tuu mach houmuork) - L'insegnante ci ha dato troppi compiti
Can I stay up a little later tonight (kèn ai stei ap a litël leitër tunait) - Posso stare sveglio un po' più tardi stasera
You need to tidy your room before dinner (yu niid tu taidi yor ruum bifor dinër) - Devi riordinare la stanza prima di cena
I've got a bit of a headache today (aiv gat a bit ov a hedeik tudei) - Ho un po' di mal di testa oggi
Do you have anything for a sore throat (du yu hev enìthin for a sor throut) - Avete qualcosa per il mal di gola
The train's delayed by twenty minutes (dhë treinz dileid bai tuenti minits) - Il treno è in ritardo di venti minuti
Which platform does it leave from (uic plètform daz it liiv from) - Da quale binario parte
Mind the gap between the train and the platform (maind dhë ghèp bituìn dhë trein end dhë plètform) - Attenzione allo spazio tra il treno e la banchina
Does this bus go anywhere near the station (daz dhis bas gou enìuer nir dhë steiscion) - Questo autobus passa vicino alla stazione
I think we got on the wrong bus (ai think uì gat on dhë rong bas) - Credo che siamo saliti sull'autobus sbagliato
We need to check in two hours before the flight (uì niid tu chek in tuu auerz bifor dhë flait) - Dobbiamo fare il check-in due ore prima del volo
My suitcase didn't come out on the belt (mai suutkeis didënt kam aut on dhë belt) - La mia valigia non è uscita sul nastro
The ferry's a bit late leaving today (dhë fèriz a bit leit liivin tudei) - Il traghetto parte un po' in ritardo oggi
Sorry, I think I'm a little lost (sori, ai think aim a litël lost) - Scusa, credo di essermi un po' perso
Just go straight and it's on your right (giast gou streit end its on yor rait) - Vai dritto ed è sulla tua destra
The car's making a funny noise when I brake (dhë karz meikin a fani nois uen ai breik) - La macchina fa uno strano rumore quando freno
We got a flat tyre halfway there (uì gat a flèt tair hafuei dher) - Abbiamo forato una gomma a metà strada
There's roadworks on the way into town (dhers roudworks on dhë uei intu taun) - Ci sono lavori in corso sulla strada verso il centro
The power's been out since this morning (dhë pauerz bin aut sins dhis mornin) - La corrente è saltata da stamattina
Could we get a room with a better view (kud uì ghet a ruum uidh a betër viu) - Potremmo avere una camera con una vista migliore
The shower's not draining properly (dhë sciauerz not dreinin properli) - La doccia non scarica bene
Is breakfast included in the price (is brekfëst inkluudid in dhë prais) - La colazione è inclusa nel prezzo
The neighbours upstairs are so loud (dhë neibërz apsteirz ar sou laud) - I vicini di sopra sono così rumorosi
Our host said check-out is at eleven (auer houst sed chekaut is et ilevën) - L'host ha detto che il check-out è alle undici
Could we get a table for four, please (kud uì ghet a teibël for for, pliiz) - Possiamo avere un tavolo per quattro, per favore
What do you recommend from the menu (uat du yu rekomend from dhë meniu) - Cosa consigli dal menù
Could I get this without cheese (kud ai ghet dhis uidhaut chiiz) - Potrei averlo senza formaggio
Let's grab a coffee before we head out (lets grèb a kofi bifor uì hed aut) - Prendiamo un caffè prima di uscire
He told the funniest story last night (hi tould dhë faniëst stori lest nait) - Ha raccontato la storia più divertente ieri sera
I'm not really in the mood to go out tonight (aim not rìeli in dhë muud tu gou aut tunait) - Non ho proprio voglia di uscire stasera
Do you have this in a smaller size (du yu hev dhis in a smolër saiz) - Ce l'avete in una taglia più piccola
I'm just browsing, thanks (aim giast brauzin, thènks) - Sto solo guardando, grazie
Can I get a refund if it doesn't fit (kèn ai ghet a rifand if it dazënt fit) - Posso avere un rimborso se non va bene
The meeting's been pushed back to three (dhë miitinz bin puscht bèk tu thrii) - La riunione è stata spostata alle tre
I still haven't heard back from them (ai stil hèvënt hërd bèk from dhem) - Non ho ancora ricevuto risposta da loro
Can everyone see my screen okay (kèn evriuan sii mai skriin okei) - Riuscite tutti a vedere bene lo schermo
The printer's out of ink again (dhë printërz aut ov ink eghèn) - La stampante è di nuovo senza inchiostro
This museum's bigger than I expected (dhis miuuziëm iz bighër dhèn ai ekspektid) - Questo museo è più grande di quanto mi aspettassi
We should get tickets online in advance (uì sciud ghet tikëts onlain in edvèns) - Dovremmo prendere i biglietti online in anticipo
The view from up here is incredible (dhë viu from ap hir is inkredibël) - La vista da quassù è incredibile
It looks like rain later this afternoon (it luks laik rein leitër dhis afternuun) - Sembra che pioverà nel pomeriggio
I need to renew my card, it's about to expire (ai niid tu rinìuu mai kard, its abaut tu ekspaiër) - Devo rinnovare la carta, sta per scadere
How did the job interview go (hau did dhë giob intërviu gou) - Com'è andato il colloquio di lavoro
The dog's been scratching at the door all morning (dhë dog beein skrèchin et dhë dor ol mornin) - Il cane sta grattando alla porta da tutta la mattina
I hung the washing out before it started raining (ai hang dhë uoscin aut bifor it startid reinin) - Ho steso il bucato prima che iniziasse a piovere
Could you switch the lights off when you leave (kud yu suich dhë laits of uen yu liiv) - Puoi spegnere le luci quando esci
We ran out of coffee this morning (uì rèn aut ov kofi dhis mornin) - Stamattina abbiamo finito il caffè
Who left the fridge door open (huu left dhë frigi dor oupën) - Chi ha lasciato aperta la porta del frigo
Can you set the alarm for six tomorrow (kèn yu set dhë alarm for siks tumorou) - Puoi mettere la sveglia alle sei domani
I've got a parents' evening at school next week (aiv gat a perënts iivnin et skuul nekst uiik) - Ho un colloquio con gli insegnanti la prossima settimana
She's really struggling with her science homework (scìiz rìeli straglin uidh hër saiëns houmuork) - Sta facendo fatica con i compiti di scienze
Can I borrow your calculator for a sec (kèn ai borou yor kèlkiuleitër for a sek) - Posso prendere in prestito la tua calcolatrice un attimo
Who's picking the kids up from school today (huuz pikin dhë kids ap from skuul tudei) - Chi va a prendere i bambini a scuola oggi
You can't go out until you've finished your homework (yu kènt gou aut antil yuv finiscid yor houmuork) - Non puoi uscire finché non hai finito i compiti
I need to pick up a prescription later (ai niid tu pik ap a priskripscion leitër) - Devo ritirare una ricetta più tardi
Does this medicine make you drowsy (daz dhis medisin meik yu drauzi) - Questa medicina fa venire sonnolenza
Take two tablets after meals (teik tuu tèblëts aftër miilz) - Prendi due compresse dopo i pasti
The next train to the city center leaves in five minutes (dhë nekst trein tu dhë siti sentër liivz in faiv minits) - Il prossimo treno per il centro parte tra cinque minuti
I think we need to change trains at the next stop (ai think uì niid tu cheingi treinz et dhë nekst stop) - Credo che dobbiamo cambiare treno alla prossima fermata
The underground was packed this morning (dhë andërgraund uoz pèkt dhis mornin) - La metropolitana era stipata stamattina
Which exit do I need for the museum (uic eksit du ai niid for dhë miuuziëm) - Quale uscita devo prendere per il museo
Does this bus pass by the hospital (daz dhis bas pès bai dhë hospitël) - Questo autobus passa vicino all'ospedale
I need a ticket that covers the whole day (ai niid a tikët dhèt kavërz dhë houl dei) - Mi serve un biglietto valido per tutta la giornata
Our flight's been moved to a different gate (auer flaits bin muuvd tu a difërënt gheit) - Il nostro volo è stato spostato a un altro gate
Is there a lounge near this terminal (is dher a laungi nir dhis tërminël) - C'è una lounge vicino a questo terminal
How long is the layover in Paris (hau long is dhë leiouvër in Pèris) - Quanto dura lo scalo a Parigi
The ferry crossing takes about an hour (dhë fèri krosin teiks abaut en auer) - La traversata in traghetto dura circa un'ora
We need to be at the port by seven (uì niid tu bi et dhë port bai sevën) - Dobbiamo essere al porto entro le sette
Excuse me, is this the right way to the station (ekskiuz mi, is dhis dhë rait uei tu dhë steiscion) - Scusi, è questa la strada giusta per la stazione
You've missed the turning, go back a bit (yuuv mist dhë tërnin, gou bèk a bit) - Hai perso la svolta, torna un po' indietro
The satnav's taking us the long way round (dhë sètnèv is teikin as dhë long uei raund) - Il navigatore ci sta facendo fare il giro lungo
The engine's making a weird rattling noise (dhë engin iz meikin a uird rètlin nois) - Il motore fa uno strano rumore metallico
We've broken down on the motorway (uìv broukën daun on dhë moutëruei) - Siamo rimasti in panne in autostrada
There's been an accident up ahead (dhers bin en èksidënt ap ëhed) - C'è stato un incidente più avanti
Traffic's backed up for miles (trèfik iz bèkt ap for mailz) - Il traffico è bloccato per chilometri
The road's closed because of the flooding (dhë roud iz klouzd bikoz ov dhë fladin) - La strada è chiusa a causa dell'allagamento
The whole neighbourhood lost power last night (dhë houl neibërhud lost pauer lest nait) - Tutto il quartiere è rimasto senza corrente ieri sera
Could we get a late check-out tomorrow (kud uì ghet a leit chekaut tumorou) - Potremmo avere un check-out posticipato domani
Is there a minibar in the room (is dher a minibaar in dhë ruum) - C'è un minibar in camera
Could you send someone to fix the TV (kud yu send samuan tu fiks dhë tii vii) - Potrebbe mandare qualcuno a riparare la TV
The room hasn't been cleaned today (dhë ruum hèzënt bin kliind tudei) - La stanza non è stata pulita oggi
There's no hot water in the bathroom (dhers nou hot uotër in dhë bethruum) - Non c'è acqua calda in bagno
The lock on the door seems broken (dhë lok on dhë dor siimz broukën) - La serratura della porta sembra rotta
The host answered all our questions really quickly (dhë houst ènsërd ol auer kuescionz rìeli kuikli) - L'host ha risposto a tutte le nostre domande molto velocemente
Is parking included with the apartment (is parkin inkluudid uidh dhë apartmënt) - Il parcheggio è incluso con l'appartamento
Could we get some more bread, please (kud uì ghet sam mor bred, pliiz) - Potremmo avere ancora del pane, per favore
Is the fish fresh today (is dhë fisc fresc tudei) - Il pesce è fresco oggi
Can we split the bill between us (kèn uì split dhë bil bituìn as) - Possiamo dividere il conto tra di noi
Let's meet up for a drink after work (lets miit ap for a drink aftër uork) - Vediamoci per bere qualcosa dopo il lavoro
That place gets really busy on weekends (dhèt pleis ghets rìeli bizi on uiikendz) - Quel posto diventa molto affollato nei weekend
I forgot my wallet, can you cover me (ai forgat mai uolët, kèn yu kavër mi) - Ho dimenticato il portafoglio, puoi anticiparmi tu
Do you take cards or just cash (du yu teik kardz or giast kèsc) - Accettate carte o solo contanti
Is there a discount if I buy two (is dher a diskaunt if ai bai tuu) - C'è uno sconto se ne compro due
Let's take a walk around the old town this morning (lets teik a uok araund dhë ould taun dhis mornin) - Facciamo una passeggiata per il centro storico stamattina
Shall we go up to the castle first or later (scèl uì gou ap tu dhë kèsël fërst or leitër) - Saliamo prima al castello o più tardi
The view from up there is supposed to be amazing (dhë viu from ap dher iz supouzd tu bi ëmeizin) - Dicono che la vista da lassù sia fantastica
Can we stop for an ice cream on the way (kèn uì stop for en ais kriim on dhë uei) - Possiamo fermarci per un gelato lungo la strada
I want to look around some shops first (ai uont tu luk araund sam scops fërst) - Prima voglio dare un'occhiata a qualche negozio
You two go shopping, we'll head to the park (yu tuu gou scopin, uìl hed tu dhë park) - Voi due andate a fare shopping, noi andiamo al parco
Let's split up and meet back here in an hour (lets split ap end miit bèk hir in en auer) - Dividiamoci e rincontriamoci qui tra un'ora
Does anyone actually want to see the cathedral (daz enìuan èkchueli uont tu sii dhë këthiidrël) - Qualcuno ha davvero voglia di vedere la cattedrale
I'd rather just wander around without a plan (aid rèdhër giast uondër araund uidhaut a plèn) - Preferisco semplicemente girare senza un piano
There's a market on this street on weekends (dhers a markët on dhis striit on uiikendz) - C'è un mercatino in questa via nei weekend
Let's check out that little bookshop over there (lets chek aut dhèt litël bukscop ouvër dher) - Diamo un'occhiata a quella piccola libreria laggiù
This street's all uphill, my legs are killing me (dhis striits ol aphil, mai legz ar kilin mi) - Questa strada è tutta in salita, mi fanno male le gambe
Can we take the lift instead of the stairs (kèn uì teik dhë lift instèd ov dhë sters) - Possiamo prendere l'ascensore invece delle scale
Let's find somewhere shady to sit for a bit (lets faind samuer sceidi tu sit for a bit) - Cerchiamo un posto all'ombra dove sederci un attimo
The kids want to run around in the park for a while (dhë kidz uont tu ran araund in dhë park for a uail) - I bambini vogliono correre un po' nel parco
There's a playground just past those trees (dhers a pleighraund giast pest dhouz triiz) - C'è un parco giochi appena dopo quegli alberi
Watch her, she's heading straight for the fountain (uoch hër, scìiz hedin streit for dhë fauntën) - Tienila d'occhio, sta andando dritta verso la fontana
Let's sit on that bench and watch them play (lets sit on dhèt bench end uoch dhem plei) - Sediamoci su quella panchina a guardarli giocare
Does anyone know what that monument is (daz enìuan nou uat dhèt moniumënt iz) - Qualcuno sa cos'è quel monumento
There's a plaque here explaining the history (dhers a plèk hir eksplèinin dhë histëri) - C'è una targa qui che spiega la storia
This square looks completely different at night (dhis skuer luks kompliitli difërënt et nait) - Questa piazza sembra completamente diversa di notte
Let's come back later when it's cooler (lets kam bèk leitër uen its kuulër) - Torniamo più tardi quando fa più fresco
I need a hat, the sun's really strong today (ai niid a hèt, dhë sanz rìeli strong tudei) - Mi serve un cappello, oggi il sole è molto forte
Can we find some shade before we keep walking (kèn uì faind sam sceid bifor uì kiip uokin) - Possiamo trovare un po' d'ombra prima di continuare a camminare
Let's grab a bottle of water from that kiosk (lets grèb a botël ov uotër from dhèt kiosk) - Prendiamo una bottiglia d'acqua da quel chiosco
Is it worth going inside or just seeing it from outside (iz it uorth gouin insaid or giast siiin it from autsaid) - Vale la pena entrare o basta vederlo da fuori
The queue for tickets looks pretty long (dhë kiuu for tikëts luks priti long) - La fila per i biglietti sembra piuttosto lunga
Let's just take some photos from out here instead (lets giast teik sam foutouz from aut hir instèd) - Facciamo delle foto da qui fuori invece
Can you take a picture of all of us together (kèn yu teik a pikchër ov ol ov as tugedhër) - Puoi fare una foto a tutti noi insieme
Stand a bit closer so I can get you both in (stènd a bit klousër sou ai kèn ghet yu bouth in) - Avvicinatevi un po' così vi inquadro entrambi
This shop has some really nice local stuff (dhis scop hèz sam rìeli nais loukël staf) - Questo negozio ha delle belle cose locali
Should we get something for grandma while we're here (sciud uì ghet samthin for grènma uail uir hir) - Prendiamo qualcosa per la nonna già che siamo qui
That's a bit pricey for what it is (dhèts a bit praisi for uat it iz) - È un po' caro per quello che è
Let's see if there's a cheaper one somewhere else (lets sii if dhers a chiipër uan samuer els) - Vediamo se ce n'è uno più economico da qualche altra parte
Can you keep an eye on the bags for a second (kèn yu kiip en ai on dhë bègz for a sekënd) - Puoi tenere d'occhio le borse un secondo
I left my sunglasses back at that last shop (ai left mai sanglèsiz bèk et dhèt lest scop) - Ho dimenticato gli occhiali da sole in quell'ultimo negozio
Let's head down towards the seafront for a bit (lets hed daun tuordz dhë siifrant for a bit) - Andiamo verso il lungomare per un po'
The breeze from the sea feels really nice (dhë briiz from dhë sii fiilz rìeli nais) - La brezza dal mare si sente proprio piacevole
Can we stop somewhere for a proper sit-down lunch (kèn uì stop samuer for a propër sitdaun lanch) - Possiamo fermarci da qualche parte per pranzare seduti
I'm starving, let's find somewhere to eat soon (aim starvin, lets faind samuer tu iit suun) - Sto morendo di fame, troviamo presto un posto dove mangiare
That little square has some nice restaurants around it (dhèt litël skuer hèz sam nais restrants araund it) - Quella piccola piazza ha dei bei ristoranti intorno
Let's ask a local for a good place to eat (lets èsk a loukël for a gud pleis tu iit) - Chiediamo a un locale un buon posto dove mangiare
The kids are getting tired, maybe we should head back soon (dhë kidz ar ghetin taierd, meibi uì sciud hed bèk suun) - I bambini si stanno stancando, forse dovremmo tornare presto
Let's do the shopping tomorrow instead, we're all worn out (lets du dhë scopin tumorou instèd, uir ol uorn aut) - Facciamo lo shopping domani invece, siamo tutti stanchi
This has been such a nice day out together (dhis hèz bin sach a nais dei aut tugedhër) - È stata proprio una bella giornata fuori insieme
We should come back here again before we leave (uì sciud kam bèk hir eghèn bifor uì liiv) - Dovremmo tornare di nuovo qui prima di partire
Can we walk back a different way this time (kèn uì uok bèk a difërënt uei dhis taim) - Possiamo tornare per una strada diversa questa volta
I think we've seen most of the main sights now (ai think uìv siin moust ov dhë mein saits nau) - Credo che abbiamo visto la maggior parte dei luoghi principali ormai
Let's grab dinner somewhere near the hotel tonight (lets grèb dinër samuer nir dhë houtel tunait) - Prendiamo la cena da qualche parte vicino all'hotel stasera
That was a really lovely walk, wasn't it (dhèt uoz a rìeli lavli uok, uozënt it) - È stata una passeggiata proprio piacevole, vero
Dad, can I borrow the car this weekend? (ded, ken ai borou de kar dis uiikend) — Papà, posso prendere in prestito l'auto questo fine settimana?
Have you cleaned your bedroom like your father asked? (hev iu kliind ior bedruum laik ior fader askt) — Hai pulito la tua camera da letto come ti ha chiesto tuo padre?
Mom, I need some money for the school trip tomorrow. (mom, ai niid sam mani for de skuul trip tumorou) — Mamma, ho bisogno di soldi per la gita scolastica di domani.
Don't forget that your curfew is at ten o'clock tonight. (dount forget det ior kerfiu iz et ten oklok tunait) — Non dimenticare che il tuo rientro è alle dieci stasera.
Can you two stop arguing and help me unload the dishwasher? (ken iu tuu stop arghiuing end help mi anloud de disciuoscer) — Potete smetterla di litigare e aiutarmi a svuotare la lavastoviglie?
Who is taking our daughter to her dance practice today? (huu iz teiking auer doter tu her dans prektis tudei) — Chi accompagna nostra figlia a lezione di danza oggi?
Your father and I think you spend too much time on your phone. (ior fader end ai think iu spend tuu macc taim on ior foun) — Tuo padre ed io pensiamo che tu passi troppo tempo al telefono.
Did you ask your mother before taking her jacket? (did iu ask ior mader bifor teiking her giaket) — Hai chiesto a tua madre prima di prendere la sua giacca?
Can I spend the night at my best friend's house on Saturday? (ken ai spend de nait et mai best frendz haus on saterdei) — Posso dormire a casa della mia migliore amica sabato?
Dad is preparing his famous pasta recipe for dinner tonight. (ded iz priperring hiz feimës pasta resipi for diner tunait) — Papà sta preparando la sua famosa ricetta della pasta per cena stasera.
Have you finished studying for your history exam tomorrow? (hev iu finiscd stadiing for ior histëri igzem tumorou) — Hai già finito di studiare per il tuo esame di storia di domani?
Mom, can we go clothes shopping together this afternoon? (mom, ken ui gou klouthz sciopping tugheder dis afternuun) — Mamma, possiamo andare a comprare dei vestiti insieme questo pomeriggio?
Please lower the music in your room, your father is working. (pliiz louer de miuzik in ior ruum, ior fader iz uorking) — Per favore abbassa la musica in camera tua, tuo padre sta lavorando.
How long are you going to stay in the bathroom? (hau long ar iu gouing tu stei in de bathruum) — Quanto tempo hai intenzione di stare in bagno?
We are having a family movie night in the living room tonight. (ui ar heving e femili muuvi nait in de living ruum tunait) — Stasera facciamo una serata cinema in famiglia in soggiorno.
Your mother left her car keys on the kitchen counter again. (ior mader left her kar kiiz on de kicën kaunter egen) — Tua madre ha lasciato di nuovo le chiavi della macchina sul bancone della cucina.
Dad, can you explain this difficult math problem to me? (ded, ken iu iksplein dis difikëlt math problëm tu mi) — Papà, puoi spiegarmi questo problema di matematica difficile?
Don't leave your wet bath towel lying on the floor. (dount liiv ior uet bath tauël laiing on de flor) — Non lasciare il tuo asciugamano da bagno bagnato sul pavimento.
Who wants to help me prepare the salad for lunch? (huu uonts tu help mi priper de saled for lancc) — Chi vuole aiutarmi a preparare l'insalata per pranzo?
Mom and Dad are going out for dinner, so you are in charge. (mom end ded ar gouing aut for diner, sou iu ar in ciarj) — Mamma e papà escono a cena, quindi te ne occupi tu.
Can you please put your laundry in the dirty clothes basket? (ken iu pliiz put ior londri in de derti klouthz basket) — Puoi mettere il tuo bucato nel cestino dei panni sporchi, per favore?
Our daughter is studying hard for her driving test. (auer doter iz stadiing hard for her draiving test) — Nostra figlia sta studiando molto per l'esame della patente.
Your father fixed the broken light in your bedroom yesterday. (ior fader fikst de broukën lait in ior bedruum iesterdei) — Tuo padre ha riparato la luce rotta nella tua camera da letto ieri.
Mom, do you know where my favorite pair of jeans is? (mom, du iu nou uer mai feivorit per ov giinz iz) — Mamma, sai dov'è il mio paio di jeans preferito?
Please turn off the bathroom light when you are finished. (pliiz tern of de bathruum lait uen iu ar finiscd) — Per favore spegni la luce del bagno quando hai finito.
We are going to visit your grandparents this Sunday afternoon. (ui ar gouing tu vizit ior grendperents dis sandei afternuun) — Andremo a trovare i tuoi nonni questo domenica pomeriggio.
Dad, can you drive me to my friend's birthday party? (ded, ken iu draiv mi tu mai frendz berthdei parti) — Papà, puoi accompagnarmi in macchina alla festa di compleanno della mia amica?
Your mother is calling you downstairs for breakfast. (ior mader iz koling iu daunsteirz for brekfast) — Tua madre ti sta chiamando di sotto per la colazione.
Did you remember to feed the cat before going to school? (did iu rimember tu fiid de ket bifor gouing tu skuul) — Ti sei ricordata di dare da mangiare al gatto prima di andare a scuola?
We need to set some clear rules about screen time. (ui niid tu set sam klir ruulz ebaut skriin taim) — Dobbiamo stabilire alcune regole chiare sul tempo davanti allo schermo.
Can I invite a few classmates over to study this afternoon? (ken ai invait e fiu klasmeits ouver tu stadi dis afternuun) — Posso invitare alcuni compagni di classe a studiare questo pomeriggio?
Your father is taking the car to the mechanic this morning. (ior fader iz teiking de kar tu de mekenik dis morning) — Tuo padre sta portando l'auto dal meccanico stamattina.
Mom made some fresh pancakes for breakfast today. (mom meid sam fresc penkeiks for brekfast tudei) — Mamma ha fatto dei pancake freschi per colazione oggi.
Please take your shoes off as soon as you enter the house. (pliiz teik ior sciuz of ez suun ez iu enter de haus) — Per favore togliti le scarpe non appena entri in casa.
Dad, can we practice driving in the parking lot later? (ded, ken ui praktis draiving in de parking lot leiter) — Papà, possiamo esercitarci a guidare nel parcheggio più tardi?
Our daughter asked if she could go to a concert next month. (auer doter askt if scii kud gou tu e konsert nekst manth) — Nostra figlia ha chiesto se può andare a un concerto il mese prossimo.
We should clean out the refrigerator together this weekend. (ui sciud kliin aut de rifrijereitor tugheder dis uiikend) — Dovremmo pulire il frigorifero insieme questo fine settimana.
Mom, can you help me dry my hair before we leave? (mom, ken iu help mi drai mai her bifor ui liiv) — Mamma, puoi aiutarmi ad asciugarmi i capelli prima di uscire?
Your father and I are very proud of your school results. (ior fader end ai ar veri praud ov ior skuul risalts) — Tuo padre ed io siamo molto orgogliosi dei tuoi risultati scolastici.
Who forgot to turn off the air conditioning in the hallway? (huu forgot tu tern of di er kondiscëning in de holuei) — Chi ha dimenticato di spegnere l'aria condizionata nel corridoio?
Can you give your father a hand with the garden hose? (ken iu giv ior fader e hend uidh de gardën houz) — Puoi dare una mano a tuo padre con la canna da giardino?
I need to iron my shirt for tomorrow's school presentation. (ai niid tu airën mai shert for tumorouz skuul prezenteiscën) — Devo stirare la mia camicia per la presentazione a scuola di domani.
Mom, what time are we leaving for the supermarket? (mom, uot taim ar ui liiving for de supermarket) — Mamma, a che ora partiamo per il supermercato?
Please make your bed before you leave for school in the morning. (pliiz meik ior bed bifor iu liiv for skuul in de morning) — Per favore rifai il letto prima di uscire per andare a scuola la mattina.
Your father is grilling some vegetables in the backyard. (ior fader iz griling sam vegetebëlz in de bekiard) — Tuo padre sta grigliando delle verdure nel cortile sul retro.
Can I order a pizza with my friends this Friday evening? (ken ai order e pitza uidh mai frendz dis fraidei iivning) — Posso ordinare una pizza con le mie amiche questo venerdì sera?
Your mother is currently in an important video call for work. (ior mader iz karrëntli in en important vidiou kol for uork) — Tua madre al momento è in un'importante videochiamata di lavoro.
Let's all sit down and talk about our weekend plans. (lets ol sit daun end tok ebaut auer uiikend plenz) — Sediamoci tutti e parliamo dei nostri programmi per il fine settimana.
Who left the front door unlocked when they came home? (huu left de front dor anlokt uen dei keim houm) — Chi ha lasciato la porta d'ingresso aperta quando è tornato a casa?
Excuse me, where is the check-in desk for flight BA four hundred? (ekskiuz mi, uer iz de cekin desk for flait bii ei for handred) — Mi scusi, dov'è il banco del check-in per il volo BA quattrocento?
Could you please place your hand luggage on the scale? (kud iu pliiz pleis ior hend lagëj on de skeil) — Potrebbe mettere il bagaglio a mano sulla bilancia, per favore?
Is this suitcase within the permitted weight limit for cabin baggage? (iz dis siutkeis uidhin de permitid ueit limit for kebin begëj) — Questa valigia rientra nel limite di peso consentito per il bagaglio a mano?
I need to check two bags and carry one backpack on board. (ai niid tu cek tuu begz end keri uan bekpek on bord) — Devo imbarcare due valigie e portare uno zaino a bordo.
Where is the security checkpoint for international departures? (uer iz de sekiuriti cekpoint for internescënël dipartciurz) — Dov'è il varco di sicurezza per le partenze internazionali?
Please take your laptop and liquids out of your bag for scanning. (pliiz teik ior laptop end likuidz aut ov ior beg for skening) — Per favore tirate fuori il computer portatile e i liquidi dalla borsa per la scansione.
Do I need to take off my shoes and belt at security? (du ai niid tu teik of mai sciuz end belt et sekiuriti) — Devo togliere le scarpe e la cintura ai controlli di sicurezza?
Excuse me, where can I wrap my luggage in protective plastic film? (ekskiuz mi, uer ken ai rep mai lagëj in protektiv plestik film) — Mi scusi, dove posso avvolgere il mio bagaglio nella pellicola protettiva di plastica?
My flight has been delayed by two hours due to bad weather. (mai flait hez bin dileid bai tuu auerz diu tu bed ueder) — Il mio volo è stato ritardato di due ore a causa del maltempo.
Where can I find the electronic flight information departure board? (uer ken ai faind di ilektronik flait informeiscën dipartciur bord) — Dove posso trovare il tabellone elettronico delle partenze dei voli?
The gate for our flight to Paris has just been changed. (de gheit for auer flait tu peris hez giast bin ceinjd) — Il gate per il nostro volo per Parigi è appena stato cambiato.
Final boarding call for passengers traveling on flight LH seven hundred. (fainël bording kol for pasengerz treveling on flait el eic sevën handred) — Ultimo avviso d'imbarco per i passeggeri in viaggio sul volo LH settecento.
Please present your boarding pass and passport at the gate. (pliiz prizent ior bording pas end pasport et de gheit) — Per favore esibite la carta d'imbarco e il passaporto al gate.
Is there a fast-track lane available for security screening? (iz der e fasttrek lein eveilebël for sekiuriti skriining) — È disponibile una corsia preferenziale per i controlli di sicurezza?
Where is the baggage claim area for flight AZ two hundred? (uer iz de begëj kleim eria for flait ei zed tuu handred) — Dov'è l'area ritiro bagagli per il volo AZ duecento?
My suitcase did not arrive on the baggage carousel with the others. (mai siutkeis did not araiv on de begëj karusël uidh di aderz) — La mia valigia non è arrivata sul nastro bagagli con gli altri.
Where is the lost and found office for mishandled luggage? (uer iz de lost end faund ofis for mishendëld lagëj) — Dov'è l'ufficio oggetti smarriti per i bagagli smarriti?
Can I exchange currency or use an ATM in the arrivals hall? (ken ai ikscenj kerensi or iuz en eitiiem in di eraivëlz hol) — Posso cambiare la valuta o usare un bancomat nella hall degli arrivi?
Where can I catch the express train to the city center? (uer ken ai kecc di ikspres trein tu de siti senter) — Dove posso prendere il treno espresso per il centro città?
Are there official taxi ranks right outside the terminal exit? (ar der ofiscël teksi renks rait autsaid de terminël eksit) — Ci sono postazioni di taxi ufficiali proprio fuori dall'uscita del terminal?
Could you tell me which terminal handles international arrivals? (kud iu tel mi uicc terminël hendëlz internescënël eraivëlz) — Potrebbe dirmi quale terminal gestisce gli arrivi internazionali?
Is free Wi-Fi available throughout the entire airport terminal? (iz frii uaifai eveilebël thruaut di entaier eirport terminël) — Il Wi-Fi gratuito è disponibile in tutto il terminal dell'aeroporto?
Where is the nearest airport lounge for business class passengers? (uer iz de nirest eirport launj for biznes klas pasengerz) — Dov'è la sala d'attesa dell'aeroporto più vicina per i passeggeri di classe business?
Can I buy duty-free items after passing through security control? (ken ai bai diutifrii aitëmz after pasing thru sekiuriti kontroul) — Posso comprare articoli duty-free dopo aver superato il controllo di sicurezza?
Excuse me, where are the restrooms located near gate twenty-four? (ekskiuz mi, uer ar de restruumz loukeitid nir gheit tuenti for) — Mi scusi, dove si trovano i bagni vicino al gate ventiquattro?
My connecting flight leaves in less than forty minutes. (mai konekting flait liivz in les den forti minits) — Il mio volo in coincidenza parte in meno di quarantacinque minuti.
Where do I go to clear passport control and immigration? (uer du ai gou tu klir pasport kontroul end imigreiscën) — Dove devo andare per superare il controllo passaporti e l'immigrazione?
Please keep your boarding pass handy until you step onto the aircraft. (pliiz kiip ior bording pas hendi antil iu step ontu di erkraft) — Per favore tenete a portata di mano la carta d'imbarco fino a quando salite sull'aereo.
Is there a pharmacy inside the departures terminal? (iz der e farmesi insaid de dipartciurz terminël) — C'è una farmacia all'interno del terminal delle partenze?
Where can I rent a car upon arrival at the airport? (uer ken ai rent e kar apon eraivël et di eirport) — Dove posso noleggiare un'auto all'arrivo in aeroporto?
Could you help me push this heavy luggage trolley? (kud iu help mi push dis hevi lagëj trouli) — Potresti aiutarmi a spingere questo carrello portabagagli pesante?
Are liquids over one hundred milliliters allowed in cabin baggage? (ar likuidz ouver uan handred mililiterz eloud in kebin begëj) — I liquidi superiori a cento millilitri sono ammessi nel bagaglio a mano?
Please place all electronic devices in a separate tray. (pliiz pleis ol ilektronik divaisiz in e sepret trei) — Per favore mettete tutti i dispositivi elettronici in un vassoio separato.
Excuse me, is this seat next to the emergency exit? (ekskiuz mi, iz dis siit nekst tu di imerjensi eksit) — Mi scusi, questo posto è vicino all'uscita di sicurezza?
The flight attendant is demonstrating safety procedures before takeoff. (de flait etendent iz demonstreiting seifti prosidiurz bifor teikof) — L'assistente di volo sta mostrando le procedure di sicurezza prima del decollo.
Please fasten your seatbelts and return your seat upright. (pliiz fasën ior siitbelts end riturn ior siit apreit) — Per favore allacciate le cinture di sicurezza e rimettete il sedile in posizione verticale.
Can I use my mobile phone in airplane mode during the flight? (ken ai iuz mai moubail foun in erplein moud diuring de flait) — Posso usare il mio cellulare in modalità aereo durante il volo?
Where is the designated smoking area outside the terminal building? (uer iz de dezignetid smouking eria autsaid de terminël bilding) — Dov'è l'area fumatori designata fuori dall'edificio del terminal?
We need to go through customs check after collecting our bags. (ui niid tu gou thru kastëmz cek after kolekting auer begz) — Dobbiamo passare attraverso il controllo doganale dopo aver ritirato le nostre valigie.
Is there an information desk where I can ask for directions? (iz der en informeiscën desk uer ai ken ask for direksciënz) — C'è un banco informazioni dove posso chiedere indicazioni?
Where can I plug in my phone to charge the battery? (uer ken ai plag in mai foun tu ciarj de beteri) — Dove posso attaccare il mio telefono per caricare la batteria?
Are strollers allowed all the way up to the aircraft door? (ar strolerz eloud ol de uei ap tu di erkraft dor) — I passeggini sono ammessi fino alla porta dell'aeromobile?
Excuse me, what time does the airline check-in counter open? (ekskiuz mi, uot taim daz di erlain cekin kaunter oupën) — Mi scusi, a che ora apre il banco del check-in della compagnia aerea?
My passport expires in less than six months from today. (mai pasport ikspairz in les den siks manths from tudei) — Il mio passaporto scade in meno di sei mesi da oggi.
Can I bring my pet on board in a special carrier? (ken ai bring mai pet on bord in e speciël kerier) — Posso portare il mio animale domestico a bordo in un trasportino speciale?
Where is the VIP lounge for frequent flyer members? (uer iz de vii ai pii launj for frikuent flaier memberz) — Dov'è la sala VIP per i membri frequent flyer?
The flight is currently boarding passengers by zones. (de flait iz karrëntli bording pasengerz bai zounz) — Il volo sta attualmente imbarcando i passeggeri per zone.
Please make sure you have all your personal belongings before leaving. (pliiz meik sciur iu hev ol ior personël biloningz bifor liiving) — Per favore assicuratevi di avere tutti i vostri effetti personali prima di partire.
Where can I buy a bottled water past the security checkpoint? (uer ken ai bai e botëld uoter past de sekiuriti cekpoint) — Dove posso comprare una bottiglietta d'acqua oltre il varco di sicurezza?
Have a pleasant flight and a safe journey to your destination. (hev e plezent flait end e seif giurni tu ior destineiscën) — Buon volo e buon viaggio verso la vostra destinazione.
What time does the ferry to the island depart? (uot taim daz de feri tu di ailend dipart) — A che ora parte il traghetto per l'isola?
Where is the ticket office for the hydrofoil? (uer iz de tiket ofis for de haidrofoil) — Dov'è la biglietteria per l'aliscafo?
Do we need to check in our car two hours before boarding? (du ui niid tu cekin auer kar tuu auerz bifor bording) — Dobbiamo fare il check-in dell'auto due ore prima dell'imbarco?
Which pier does the cruise ship dock at? (uicc pir daz de kruuz scip dok et) — A quale molo attracca la nave da crociera?
Is vehicle boarding allowed on this ferry? (iz viikël bording eloud on dis feri) — È consentito l'imbarco dei veicoli su questo traghetto?
Could you tell me where dock number four is? (kud iu tel mi uer dok namber for iz) — Potrebbe dirmi dov'è il molo numero quattro?
How long does the crossing take to reach the port? (hau long daz de krosing teik tu riicc de port) — Quanto dura la traversata per raggiungere il porto?
Please have your boarding passes and passports ready. (pliiz hev ior bording pasiz end pasports redi) — Per favore tenete pronti i biglietti d'imbarco e i passaporti.
Is sea sickness medication available at the port pharmacy? (iz sii sikness medikeiscën eveilebël et de port farmesi) — I farmaci per il mal di mare sono disponibili nella farmacia del porto?
Where can I find a porter to help with heavy luggage? (uer ken ai faind e porter tu help uidh hevi lagëj) — Dove posso trovare un portabagagli per aiutarmi con i bagagli pesanti?
We are going on a day excursion by boat along the coast. (ui ar gouing on e dei ekskerscën bai bout elong de koust) — Faremo un'escursione di un giorno in barca lungo la costa.
Is there a waiting room with air conditioning in the terminal? (iz der e ueiting ruum uidh er kondiscëning in de terminël) — C'è una sala d'attesa con aria condizionata nel terminal?
Can we park our car in the port long-stay parking lot? (ken ui park auer kar in de port longstei parking lot) — Possiamo parcheggiare l'auto nel parcheggio a lunga sosta del porto?
What is the maximum height allowed for vehicles on board? (uot iz de maksimëm hait eloud for viikëlz on bord) — Qual è l'altezza massima consentita per i veicoli a bordo?
The sea is quite rough today so the departure might be delayed. (de sii iz kuait raf tudei sou de dipartciur mait bi dileid) — Il mare è piuttosto agitato oggi quindi la partenza potrebbe essere ritardata.
Where is the passenger drop-off area near the pier? (uer iz de pasenger dropof eria nir de pir) — Dov'è l'area di fermata passeggeri vicino al molo?
Do we need to book a cabin for the overnight ferry? (du ui niid tu buk e kebin for di ouvernait feri) — Dobbiamo prenotare una cabina per il traghetto notturno?
Are pets allowed on the upper deck of the ship? (ar pets eloud on di aper dek ov de scip) — Gli animali domestici sono ammessi sul ponte superiore della nave?
Excuse me, is this the queue for foot passengers? (ekskiuz mi, iz dis de kiu for fuut pasengerz) — Mi scusi, è questa la fila per i passeggeri a piedi?
Where can we rent a private boat for the afternoon? (uer ken ui rent e praivet bout for di afternuun) — Dove possiamo noleggiare una barca privata per il pomeriggio?
The lighthouse is visible from the end of the harbor wall. (de laithaus iz vizibël from di end ov de harbor uol) — Il faro è visibile dalla fine del molo del porto.
Please wait inside your car until driving instructions are given. (pliiz ueit insaid ior kar antil draiving instrakscënz ar givën) — Per favore attendete in auto finché non vengono date le istruzioni di guida.
Is there a shuttle bus connecting the port to the railway station? (iz der e shatël bas konekting de port tu de reilwei steiscën) — C'è un autobus navetta che collega il porto alla stazione ferroviaria?
We booked a reserved seat in the lounge area on the ferry. (ui bukt e rizervd siit in de launj eria on de feri) — Abbiamo prenotato un posto riservato nell'area lounge del traghetto.
Where do I claim my tax refund at the port exit? (uer du ai kleim mai teks rifand et de port eksit) — Dove posso richiedere il rimborso fiscale all'uscita del porto?
The ferry captain announced a slight delay due to fog. (de feri kaptin enaunst e slait dilei diu tu fog) — Il capitano del traghetto ha annunciato un leggero ritardo a causa della nebbia.
Are life jackets available under every seat on the boat? (ar laif giekets eveilebël ander evri siit on de bout) — I giubbotti di salvataggio sono disponibili sotto ogni sedile della barca?
Where can we buy tickets for the island hop tour? (uer ken ui bai tikets for di ailend hop tur) — Dove possiamo comprare i biglietti per il tour tra le isole?
You must follow the marshals when driving onto the car deck. (iu mast folou de marscëlz uen draiving ontu de kar dek) — È necessario seguire gli addetti quando si guida sul ponte auto.
Is there a restaurant or cafe open inside the ferry terminal? (iz der e restorant or kafei oupën insaid de feri terminël) — C'è un ristorante o un bar aperto all'interno del terminal traghetti?
How much does a round-trip ticket for the ferry cost? (hau macc daz e raundtrip tiket for de feri kost) — Quanto costa un biglietto di andata e ritorno per il traghetto?
The cruise ship will anchor in the bay until tomorrow morning. (de kruuz scip uil enker in de bei antil tumorou morning) — La nave da crociera getterà l'ancora nella baia fino a domani mattina.
Where is the entrance for oversized vehicles and campers? (uer iz di entrens for ouversaizd viikëlz end kemperz) — Dov'è l'ingresso per i veicoli fuori misura e i camper?
Can we leave our bags in the luggage storage at the port? (ken ui liiv auer begz in de lagëj storëj et de port) — Possiamo lasciare i nostri bagagli nel deposito bagagli al porto?
The harbor authority has issued a weather warning for tonight. (de harbor othoriti hez isciud e ueder uorning for tunait) — L'autorità portuale ha emesso un avviso meteo per stasera.
Which gate do we use to exit the port area? (uicc gheit du ui iuz tu eksit de port eria) — Quale varco usiamo per uscire dall'area portuale?
We enjoyed watching the sailing boats enter the marina. (ui engioid uociing de seiling bouts enter de marina) — Ci è piaciuto guardare le barche a vela entrare nel porticciolo.
Is there a charging point for electric vehicles at the terminal? (iz der e ciarging point for ilektrik viikëlz et de terminël) — C'è un punto di ricarica per veicoli elettrici al terminal?
Please turn off your car engine while waiting to board. (pliiz tern of ior kar enjin uail ueiting tu bord) — Per favore spegnete il motore dell'auto durante l'attesa per l'imbarco.
Where is the customs control point for international arrivals? (uer iz de kastëmz kontroul point for internescënël eraivëlz) — Dov'è il punto di controllo doganale per gli arrivi internazionali?
We saw dolphins swimming near the ship during the voyage. (ui so dolfinz suiming nir de scip diuring de voiëj) — Abbiamo visto dei delfini nuotare vicino alla nave durante il viaggio.
Can I change my ferry ticket to a later departure time? (ken ai ceinj mai feri tiket tu e leiter dipartciur taim) — Posso cambiare il mio biglietto del traghetto per un orario di partenza successivo?
Is the footbridge open for pedestrians walking into the city? (iz de futbrigj oupën for pedestriëns uoking intu de siti) — Il ponte pedonale è aperto per i pedoni che vanno in città?
The deck crew helped us secure our motorbike on board. (de dek kruu helpt as sekiur auer moutorbaik on bord) — L'equipaggio di coperta ci ha aiutato a fissare la nostra moto a bordo.
Where can I find a map of the port and its facilities? (uer ken ai faind e mep ov de port end its fasilitiz) — Dove posso trovare una mappa del porto e dei suoi servizi?
The catamaran service to the coastal town operates daily. (de katameran servis tu de koustël taun opereits deili) — Il servizio di catamarano per la città costiera opera tutti i giorni.
Please watch your step when crossing the gangway to the ship. (pliiz uocc ior step uen krosing de genguei tu de scip) — Per favore fate attenzione ai piedi mentre attraversate la passerella per la nave.
Is wifi available on board during the crossing? (iz uaifai eveilebël on bord diuring de krosing) — Il wifi è disponibile a bordo durante la traversata?
We arrived early at the port to secure a good spot in line. (ui araivd erli et de port tu sekiur e gud spot in lain) — Siamo arrivati presto al porto per assicurarci un buon posto in fila.
Have a safe voyage and enjoy the scenery along the coast! (hev e seif voiëj end engioi de siineri elong de koust) — Buon viaggio e goditi il panorama lungo la costa!
Is the express train to Milan arriving on platform five? (iz di ikspres trein tu milan araiving on pletform faiv) — Il treno espresso per Milano arriva al binario cinque?
Do I need to validate my subway ticket before tapping in? (du ai niid tu velideit mai sabuei tiket bifor teping in) — Devo convalidare il biglietto della metropolitana prima di passare i tornelli?
Is there a high-speed train leaving for Florence this morning? (iz der e haispiid trein liiving for florens dis morning) — C'è un treno ad alta velocità in partenza per Firenze stamattina?
Where is the automatic ticket machine for regional trains? (uer iz di otomatik tiket mesciin for rijënël treinz) — Dov'è la biglietteria automatica per i treni regionali?
How many stops are there until the central railway station? (hau meni stops ar der antil de sentrël reilwei steiscën) — Quante fermate ci sono fino alla stazione ferroviaria centrale?
Is this metro line running direct or local? (iz dis metrou lain ranning direkt or loukël) — Questa linea della metropolitana è diretta o fa tutte le fermate?
Excuse me, does this subway line go towards the stadium? (ekskiuz mi, daz dis sabuei lain gou tuords de steidiëm) — Mi scusi, questa linea della metropolitana va verso lo stadio?
You need to change lines at the next interchange station. (iu niid tu ceinj lainz et de nekst intercienj steiscën) — Devi cambiare linea alla prossima stazione di scambio.
What is the frequency of the underground trains during peak hours? (uot iz de frikuensi ov di anderghraund treinz diuring piik auerz) — Qual è la frequenza dei treni della metropolitana nelle ore di punta?
Is the left-luggage office open twenty-four hours a day? (iz de leftlagëj ofis oupën tuenti for auerz e dei) — L'ufficio deposito bagagli è aperto ventiquattr'ore su ventiquattr'ore?
Please mind the gap between the train and the platform edge. (pliiz maind de gep bituiin de trein end de pletform edj) — Per favore prestare attenzione allo spazio tra il treno e il binario.
Is my rail pass valid on this regional train line? (iz mai reil pas velid on dis rijënël trein lain) — Il mio abbonamento ferroviario è valido su questa linea regionale?
Which exit should I take for the main square? (uicc eksit sciud ai teik for de mein skuer) — Quale uscita dovrei prendere per la piazza principale?
The commuter train is delayed due to signaling problems. (de komiuter trein iz dileid diu tu signëling problëmz) — Il treno pendolari è in ritardo a causa di problemi di segnalamento.
Can I buy a monthly travel card at the ticket window? (ken ai bai e manthli trevël kard et de tiket uindou) — Posso comprare un abbonamento mensile allo sportello?
Is there an elevator down to the subway platforms? (iz der en eleveitor daun tu de sabuei pletformz) — C'è un ascensore per scendere ai binari della metropolitana?
Does this train have quiet carriages for passengers resting? (daz dis trein hev kuaiet keridjiz for pasengerz resting) — Questo treno ha carrozze del silenzio per i passeggeri che riposano?
Where is the lost property office in the station? (uer iz de lost properti ofis in de steiscën) — Dov'è l'ufficio oggetti smarriti nella stazione?
The display board shows that the train is on time. (de displei bord scious det de trein iz on taim) — Il tabellone mostra che il treno è in orario.
Do I have to switch from the blue line to the red line? (du ai hev tu suicc from de bluu lain tu de red lain) — Devo passare dalla linea blu alla linea rossa?
Is first class seating available on this suburban train? (iz ferst klas siiting eveilebël on dis saberbën trein) — Sono disponibili posti in prima classe su questo treno suburbano?
Could you tell me where the waiting room is located? (kud iu tel mi uer de ueiting ruum iz loukeitid) — Potrebbe dirmi dove si trova la sala d'attesa?
Are bicycles allowed on the metro during rush hour? (ar baisikëlz eloud on de metrou diuring rash auer) — Le biciclette sono ammesse sulla metropolitana durante l'ora di punta?
The train inspector is coming to check our tickets. (de trein inspektor iz kaming tu cek auer tikets) — Il controllore sta arrivando per verificare i nostri biglietti.
Is there a charge for storing a large suitcase in the locker? (iz der e ciarj for storing e larj siutkeis in de loker) — C'è un costo per riporre una valigia grande nell'armadietto?
What time is the last underground train tonight? (uot taim iz de last anderghraund trein tunait) — A che ora passa l'ultima metropolitana stasera?
We missed our connection because the first train was late. (ui mist auer konekscën bikoz de ferst trein uoz leit) — Abbiamo perso la coincidenza perché il primo treno era in ritardo.
Is tap-and-go payment accepted at the metro turnstiles? (iz tependgou peiment eksepted et de metrou ternstailz) — Il pagamento contactless è accettato ai tornelli della metropolitana?
Please step back behind the yellow safety line on the platform. (pliiz step bek bihaind de ielou seifti lain on de pletform) — Per favore allontanarsi dalla linea gialla di sicurezza sul binario.
Does this train carry a dining car with snacks and drinks? (daz dis trein keri e daining kar uidh sneks end drinks) — Questo treno ha una carrozza bar con snack e bevande?
Which side of the train do the doors open on? (uicc said ov de trein du de dorz oupën on) — Da quale lato del treno si aprono le porte?
Is there a discount ticket for senior citizens on the metro? (iz der e diskaunt tiket for sinior sitizenz on de metrou) — C'è un biglietto scontato per gli anziani sulla metropolitana?
How long is the stop at this intermediate station? (hau long iz de stop et dis intermidiet steiscën) — Quanto dura la sosta in questa stazione intermedia?
The ticket barrier is not accepting my magnetic card. (de tiket berrier iz not eksepting mai megnetik kard) — Il tornello non accetta la mia carta magnetica.
You must tap out when exiting the subway station. (iu mast tep aut uen eksiting de sabuei steiscën) — Devi passare il biglietto ai tornelli quando esci dalla stazione metro.
Is there a seat reservation required for this night train? (iz der e siit rezerveiscën rikuaird for dis nait trein) — È necessaria la prenotazione del posto per questo treno notturno?
Where can I find a network map of the underground? (uer ken ai faind e netuork mep ov di anderghraund) — Dove posso trovare una mappa della rete metropolitana?
The train was cancelled due to maintenance work on the tracks. (de trein uoz kenseld diu tu meintenens uork on de treks) — Il treno è stato cancellato per lavori di manutenzione sui binari.
Does this station have escalator access to the surface? (daz dis steiscën hev eskeleitor ekses tu de serfis) — Questa stazione ha la scala mobile per salire in superficie?
Which carriage number is printed on your paper ticket? (uicc keridj namber iz printid on ior peiper tiket) — Quale numero di carrozza è stampato sul tuo biglietto cartaceo?
The announcements are broadcast in both English and Italian. (di enaunsments ar brodkast in bouth inglisc end italiën) — Gli annunci sono trasmessi sia in inglese che in italiano.
Is there a connecting bus service right outside the station exit? (iz der e konekting bas servis rait autsaid de steiscën eksit) — C'è un servizio autobus di coincidenza proprio fuori dall'uscita della stazione?
How many zones does this single ticket cover? (hau meni zounz daz dis singël tiket kaver) — Quante zone copre questo biglietto singolo?
You can top up your transit card at any ticket machine. (iu ken top ap ior trenzit kard et eni tiket mesciin) — Puoi ricaricare la tua carta dei trasporti in qualsiasi emettitrice automatica.
Please do not obstruct the train doors while they are closing. (pliiz du not obstrakt de trein dorz uail dei ar klouzing) — Per favore non ostruire le porte del treno mentre si chiudono.
Is there a customer service desk near the main concourse? (iz der e kastomer servis desk nir de mein konkors) — C'è un banco di assistenza clienti vicino all'atrio principale?
We need to walk along platform three to reach our carriage. (ui niid tu uok elong pletform thrii tu riicc auer keridj) — Dobbiamo camminare lungo il binario tre per raggiungere la nostra carrozza.
Are all subway stations equipped with tactile paving for the blind? (ar ol sabuei steiscënz ikuipt uidh taktail peiving for de blaind) — Tutte le stazioni della metropolitana sono dotate di percorso tattile per non vedenti?
The next train arriving on platform two does not stop here. (de nekst trein araiving on pletform tuu daz not stop hir) — Il prossimo treno in arrivo al binario due non effettua fermata qui.
Have a smooth journey on your rail travel across the country! (hev e smuudh giurni on ior reil trevël ekros de kantri) — Buon viaggio in treno attraverso il paese!
Is the host living on the property or nearby? (iz de houst living on de properti or nirbai) — L'host abita nella struttura o nelle vicinanze?
What is the entry code for the front door? (uot iz di entri koud for de front dor) — Qual è il codice d'accesso per la porta d'ingresso?
Could you show us where the breakfast room is? (kud iu scio as uer de brekfast ruum iz) — Potrebbe mostrarci dov'è la sala colazioni?
Is homemade cake served with breakfast every morning? (iz hoummeid keik servd uidh brekfast evri morning) — Viene servita una torta fatta in casa a colazione ogni mattina?
Do you offer any gluten-free products for breakfast? (du iu ofer eni gliutën frii prodakts for brekfast) — Offrite prodotti senza glutine per la colazione?
Could we have breakfast a bit earlier tomorrow morning? (kud ui hev brekfast e bit erlier tumorou morning) — Potremmo fare colazione un po' prima domani mattina?
Where can we leave the house keys when we check out? (uer ken ui liiv de haus kiiz uen ui cek aut) — Dove possiamo lasciare le chiavi di casa quando facciamo il check-out?
Is there a common lounge area for all guests? (iz der e komën launj eria for ol ghests) — C'è un'area soggiorno comune per tutti gli ospiti?
Can we use the coffee machine in the kitchen freely? (ken ui iuz de kofi mesciin in de kicën friili) — Possiamo usare liberamente la macchina del caffè in cucina?
Are fresh towels provided every two days? (ar fresc tauelz providid evri tuu deiz) — Gli asciugamani puliti vengono forniti ogni due giorni?
What time is the main entrance gate locked at night? (uot taim iz de mein entrens gheit lokt et nait) — A che ora viene chiuso a chiave il cancello principale di notte?
Could you recommend a family-run restaurant nearby? (kud iu rekomend e femili ran restorant nirbai) — Potrebbe consigliarmi un ristorante a gestione familiare qui vicino?
Is parking available directly in the courtyard? (iz parking eveilebël direktli in de kortiard) — Il parcheggio è disponibile direttamente nel cortile?
Can I borrow an iron from the host? (ken ai borou en airën from de houst) — Posso prendere in prestito un ferro da stiro dall'host?
Is there a small fridge in the room for our drinks? (iz der e smol fridj in de ruum for auer drinks) — C'è un piccolo frigorifero in camera per le nostre bevande?
The host gave us a map of the surrounding village. (de houst gheiv as e mep ov de sarraunding vilëj) — L'host ci ha dato una mappa del borgo circostante.
Could we get a tea kettle for our room? (kud ui ghet e tii ketël for auer ruum) — Potremmo avere un bollitore per il tè in camera?
Is daily housekeeping included in our B&B reservation? (iz deili hauskiiping inkluudid in auer bii end bii rezerveiscën) — Le pulizie giornaliere sono incluse nella nostra prenotazione B&B?
Can we leave our bicycles in the garden shed overnight? (ken ui liiv auer baisikëlz in de gardën scied ouvernait) — Possiamo lasciare le nostre biciclette nel capanno in giardino per la notte?
Where is the main thermostat to adjust the heating? (uer iz de mein thermostat tu edjast de hiiting) — Dov'è il termostato principale per regolare il riscaldamento?
Are we allowed to use the garden terrace in the evening? (ar ui eloud tu iuz de gardën teres in di iivning) — Ci è consentito usare la terrazza in giardino la sera?
The host prepared a delicious basket of fresh local fruit. (de houst priperd e dilishës basket ov fresc loukël fruut) — L'host ha preparato un delizioso cestino di frutta fresca locale.
Do you have any extra blankets stored in the wardrobe? (du iu hev eni ekstra blenkits stord in de uordroub) — Avete delle coperte extra nell'armadio?
Can you order a local taxi for us tomorrow at eight? (ken iu order e loukël teksi for as tumorou et eit) — Può ordinare un taxi locale per noi domani alle otto?
What options are available for breakfast tomorrow morning? (uot opscënz ar eveilebël for brekfast tumorou morning) — Quali opzioni sono disponibili per colazione domani mattina?
What are the quiet hours during the night? (uot ar de kuaiet auerz diuring de nait) — Quali sono gli orari del silenzio durante la notte?
Could you give us a spare set of house keys? (kud iu giv as e sper set ov haus kiiz) — Potrebbe darci un set di chiavi di riserva?
Is there a microwave available for heating up baby food? (iz der e maikroueiv eveilebël for hiiting ap beibi fuud) — C'è un microonde disponibile per scaldare le pappe dei bambini?
The host was very welcoming and recommended great hiking trails. (de houst uoz veri uelkaming end rekomendid greit haiking treilz) — L'host è stato molto accogliente e ha consigliato ottimi sentieri da trekking.
Is there a safe place to leave our bags after checking out? (iz der e seif pleis tu liiv auer begz after ceking aut) — C'è un posto sicuro dove lasciare le nostre borse dopo il check-out?
Is fresh milk provided in the communal kitchen? (iz fresc milk providid in de komiunël kicën) — Il latte fresco è fornito nella cucina comune?
Could you tell us how to turn on the bathroom radiator? (kud iu tel as hau tu tern on de bathruum reidieitor) — Potrebbe dirci come accendere il radiatore del bagno?
Are pets allowed inside the bed and breakfast rooms? (ar pets eloud insaid de bed end brekfast ruumz) — Gli animali domestici sono ammessi nelle camere del bed and breakfast?
The room was decorated in a cozy rustic style. (de ruum uoz dekoreitid in e kouzi rastik stail) — La camera era arredata in un accogliente stile rustico.
What time should we inform you about our arrival time? (uot taim sciud ui inform iu ebaut auer eraivël taim) — A che ora dovremmo comunicarvi il nostro orario di arrivo?
Is there an outdoor swimming pool in the garden area? (iz der en autdor suiming puul in de gardën eria) — C'è una piscina all'aperto nell'area del giardino?
Could you recommend a scenic spot to watch the sunset? (kud iu rekomend e siinik spot tu uocc de sanset) — Potrebbe consigliare un punto panoramico per guardare il tramonto?
Do we need to turn off all lights when leaving the house? (du ui niid tu tern of ol laits uen liiving de haus) — Dobbiamo spegnere tutte le luci quando usciamo di casa?
Can we request savory breakfast options like cheese and ham? (ken ui rikuest seivori brekfast opscënz laik ciiz end hem) — Possiamo richiedere opzioni di colazione salata come formaggio e prosciutto?
The host kindly offered us a welcome drink upon arrival. (de houst kaindli oferd as e uelkam drink apon eraivël) — L'host ci ha gentilmente offerto un drink di benvenuto all'arrivo.
Is smoking allowed on the private balcony? (iz smouking eloud on de praivet belkoni) — È consentito fumare sul balcone privato?
How do we open the automatic gate at night? (hau du ui oupën di otomatik gheit et nait) — Come apriamo il cancello automatico di notte?
Can you recommend a good local bakery nearby? (ken iu rekomend e gud loukël beikëri nirbai) — Può consigliarci una buona panetteria locale qui vicino?
We felt completely at home during our stay at the B&B. (ui felt kompliitli et houm diuring auer stei et de bii end bii) — Ci siamo sentiti completamente a casa durante il nostro soggiorno al B&B.
Is there a washing machine we can use for a small fee? (iz der e uosciing mesciin ui ken iuz for e smol fii) — C'è una lavatrice che possiamo usare con un piccolo supplemento?
Could you provide a baby cot for our room? (kud iu provaid e beibi kot for auer ruum) — Potrebbe fornire una culla per neonati per la nostra stanza?
What is the best route to reach the village center on foot? (uot iz de best ruut tu riicc de vilëj senter on fuut) — Qual è il percorso migliore per raggiungere a piedi il centro del paese?
The continental breakfast included freshly squeezed orange juice. (de kontinentël brekfast inkluudid freshli skuiizd orenj giuus) — La colazione continentale includeva spremuta d'arancia fresca.
Please let us know if we need to lock the main entrance door. (pliiz let as nou if ui niid tu lok de mein entrens dor) — Per favore ci faccia sapere se dobbiamo chiudere a chiave la porta d'ingresso principale.
Thank you for your warm hospitality and wonderful tips! (thenk iu for ior uorm hospitaliti end uanderful tips) — Grazie per la calda ospitalità e i meravigliosi consigli!
Let us go window shopping along the main pedestrian street. (let as gou uindou sciopping elong de mein pedestriën striit) — Andiamo a guardare le vetrine lungo la via pedonale principale.
Do you want to pop into that clothing boutique for a minute? (du iu uont tu pop intu det klouthing butiik for e minit) — Vuoi fare un salto in quella boutique di abbigliamento per un minuto?
Look at that gorgeous coat on the mannequin in the window! (luk et det gorjës kout on de menikin in de uindou) — Guarda che splendido cappotto sul manichino in vetrina!
Is this leather handbag made of genuine leather? (iz dis leder hendbeg meid ov jeniuin leder) — Questa borsa di pelle è in vera pelle?
I am looking for a pair of comfortable sneakers for walking. (ai em luking for e per ov kamfortebël sniikerz for uoking) — Sto cercando un paio di scarpe da ginnastica comode per camminare.
Can I try on these sunglasses in a different color frame? (ken ai trai on diiz sanglasiz in e diferent kaler freim) — Posso provare questi occhiali da sole con la montatura di un colore diverso?
Is there a shoe shop on this shopping street? (iz der e sciu sciop on dis sciopping striit) — C'è un negozio di scarpe in questa via dello shopping?
The summer sales have just started this week. (de samer seilz hev giast startid dis uiik) — I saldi estivi sono appena iniziati questa settimana.
Do you think this color suits me or should I try black? (du iu think dis kaler suuts mi or sciud ai trai blek) — Pensi che questo colore mi stia bene o dovrei provare il nero?
I need to find a nice scarf to match this dress. (ai niid tu faind e nais skarf tu mecc dis dres) — Devo trovare una bella sciarpa da abbinare a questo vestito.
Excuse me, do you have these boots in size thirty-nine? (ekskiuz mi, du iu hev diiz buuts in saiz therti nain) — Scusi, avete questi stivali nel numero trentanove?
Is this shirt made of one hundred percent cotton? (iz dis shert meid ov uan handred persent kotën) — Questa camicia è di cotone al cento per cento?
I am just browsing for now, thank you for asking. (ai em giast brauzing for nau, thenk iu for asking) — Sto solo dando un'occhiata per ora, grazie per avermelo chiesto.
Where is the nearest department store around here? (uer iz de nirest dipartment stor eraund hir) — Dov'è il grande magazzino più vicino da queste parti?
Could you tell me if this belt comes in a larger size? (kud iu tel mi if dis belt kams in e larger saiz) — Potrebbe dirmi se questa cintura c'è in una taglia più grande?
These trousers are a bit too long, do you offer alterations? (diiz trauzerz ar e bit tuu long, du iu ofer oltereiscënz) — Questi pantaloni sono un po' troppo lunghi, fate riparazioni sartoriali?
Let us take a break from shopping and get a gelato. (let as teik e breik from sciopping end ghet e jelato) — Facciamo una pausa dallo shopping e prendiamo un gelato.
I love the vintage clothes in this secondhand shop. (ai lav de vintëj klouthz in dis sekëndhend sciop) — Adoro i vestiti vintage in questo negozio dell'usato.
Are these handmade ceramics produced by local artisans? (ar diiz hendmeid seramiks prodiust bai loukël artizens) — Queste ceramiche fatte a mano sono prodotte da artigiani locali?
Can I keep the box for these new shoes? (ken ai kiip de boks for diiz niu sciuz) — Posso tenere la scatola per queste scarpe nuove?
I bought this wool sweater on sale at half price. (ai bot dis wuul suetter on seil et haf prais) — Ho comprato questo maglione di lana in saldo a metà prezzo.
Is there a mirror nearby so I can see how it looks? (iz der e mirror nirbai sou ai ken sii hau it luks) — C'è uno specchio qui vicino così posso vedere come sta?
This jewelry shop has some very elegant silver necklaces. (dis giuelri sciop hez sam veri elegant silver neklesiz) — Questa gioielleria ha delle collane d'argento molto eleganti.
Could you wrap this delicate porcelain vase carefully? (kud iu rep dis deliket porcelein veis kerfuli) — Potrebbe incartare questo vaso di porcellana delicato con cura?
We have been walking through the shopping district all morning. (ui hev bin uoking thru de sciopping distrikt ol morning) — Abbiamo camminato nel quartiere dello shopping per tutta la mattina.
Do you accept credit card payments for small amounts? (du iu eksept kredit kard peiments for smol emaunts) — Accettate pagamenti con carta di credito per piccoli importi?
I would like to exchange this sweater for a smaller size. (ai wud laik tu ikscenj dis suetter for e smoler saiz) — Vorrei cambiare questo maglione con una taglia più piccola.
Are there any luxury brand outlets near the city center? (ar der eni lakshëri brend autlets nir de siti senter) — Ci sono outlet di marchi di lusso vicino al centro città?
Look at these cute handmade souvenirs in the gift shop! (luk et diiz kiut hendmeid suuvenirz in de ghift sciop) — Guarda questi carini souvenir fatti a mano nel negozio di souvenir!
Is this umbrella sturdy enough for strong wind? (iz dis ambrela sterdi inaf for strong uind) — Questo ombrello è abbastanza robusto per il vento forte?
I am looking for a light jacket for cool summer evenings. (ai em luking for e lait giaket for kuul samer iivningz) — Sto cercando una giacca leggera per le fresche sere d'estate.
Excuse me, is this hat available in one size only? (ekskiuz mi, iz dis het eveilebël in uan saiz ounli) — Scusi, questo cappello è disponibile solo in taglia unica?
Can you show me the newest arrivals in the window? (ken iu scio mi de niuest eraivëlz in de uindou) — Puoi mostrarmi le ultime novità in vetrina?
My shopping bag is getting quite heavy to carry around. (mai sciopping beg iz ghetting kuait hevi tu keri eraund) — La mia borsa della spesa sta diventando piuttosto pesante da portare in giro.
This perfume shop has a wide selection of fragrances. (dis perfiuum sciop hez e uaid selekscën ov freigrensiz) — Questa profumeria ha un'ampia selezione di fragranze.
Could you give me a receipt so I can claim Tax Free? (kud iu giv mi e risiit sou ai ken kleim teks frii) — Potrebbe darmi uno scontrino così posso richiedere il Tax Free?
I really like the design of this leather wallet. (ai riili laik de dizain ov dis leder uolët) — Mi piace molto il design di questo portafoglio in pelle.
Is this fabric machine washable or dry clean only? (iz dis fabrik mesciin uosciebël or drai kliin ounli) — Questo tessuto è lavabile in lavatrice o solo a secco?
Let us walk down this narrow alley to see the artisan shops. (let as uok daun dis narou eli tu sii di artizen sciops) — Camminiamo lungo questo vicolo stretto per vedere le botteghe artigiane.
I am carrying too many bags, let us head back to the hotel. (ai em kerriing tuu meni begz, let as hed bek tu de houtel) — Sto portando troppe borse, torniamo verso l'hotel.
Do you have any discounts if I purchase three items? (du iu hev eni diskaunts if ai percës thrii aitëmz) — Avete degli sconti se acquisto tre articoli?
She bought an elegant silk scarf as a gift for her mother. (scii bot en elegant silk skarf ez e ghift for her mader) — Ha comprato un'elegante sciarpa di seta come regalo per sua madre.
Where can I find a good antique market in this area? (uer ken ai faind e gud entiik market in dis eria) — Dove posso trovare un buon mercato dell'antiquariato in questa zona?
This pair of sunglasses offers full UV protection. (dis per ov sanglasiz oferz ful iu vii protekscën) — Questo paio di occhiali da sole offre una protezione UV completa.
Can I leave my heavy bags at the customer service desk? (ken ai liiv mai hevi begz et de kastomer servis desk) — Posso lasciare le mie borse pesanti al banco di assistenza clienti?
I cannot decide between the navy blue and the dark green one. (ai kenot disaid bituiin de neivi bluu end de dark griin uan) — Non riesco a decidere tra quello blu notte e quello verde scuro.
Are there any sports equipment stores on this avenue? (ar der eni sports ikuipment storz on dis eveniu) — Ci sono negozi di articoli sportivi in questo viale?
Look at that long queue outside the new bakery! (luk et det long kiu autsaid de niu beikëri) — Guarda che lunga fila fuori dalla nuova panetteria!
This store specializes in handmade leather shoes. (dis stor speshelaiziz in hendmeid leder sciuz) — Questo negozio è specializzato in scarpe in pelle fatte a mano.
What a wonderful afternoon for strolling through the shops! (uot e uanderful afternuun for strouling thru de sciops) — Che pomeriggio delizioso per passeggiare tra i negozi!
Shall we cross the street at the pedestrian crossing? (scial ui kros de striit et de pedestriën krosing) — Attraversiamo la strada sulle strisce pedonali?
Look at the stunning architecture of this ancient building. (luk et de staning arkitektiur ov dis einscënt bilding) — Guarda l'architettura mozzafiato di questo antico edificio.
Is there a nice park nearby where we can sit down? (iz der e nais park nirbai uer ui ken sit daun) — C'è un bel parco qui vicino dove possiamo sederci?
Let us take a short break on this park bench. (let as teik e short breik on dis park bencc) — Facciamo una breve pausa su questa panchina.
Could you take a picture of us in front of the fountain? (kud iu teik e pikciur ov as in front ov de fauntën) — Potrebbe scattarci una foto davanti alla fontana?
This main square is always full of street performers. (dis mein skuer iz olueiz ful ov striit performerz) — Questa piazza principale è sempre piena di artisti di strada.
Which way leads to the historical town center? (uicc uei liidz tu de histerikël taun senter) — Quale strada porta al centro storico?
The city hall is located at the end of this avenue. (de siti hol iz loukeitid et di end ov dis eveniu) — Il municipio si trova alla fine di questo viale.
Let us walk along the river bank at sunset. (let as uok elong de river benk et sanset) — Camminiamo lungo la riva del fiume al tramonto.
Is this cobblestone street accessible for strollers? (iz dis kobëlstoun striit eksesibël for strolerz) — Questa strada in ciottoli è accessibile ai passeggini?
We can get a wonderful view of the city from this hill. (ui ken ghet e uanderful viu ov de siti from dis hil) — Possiamo godere di una vista meravigliosa della città da questa collina.
Do you know the history of this marble statue? (du iu nou de histëri ov dis marbël stachiu) — Conosci la storia di questa statua di marmo?
Let us stroll through the narrow alleys of the old neighborhood. (let as stroul thru de narou eliz ov di ould neiborhud) — Passeggiamo per i vicoli stretti del vecchio quartiere.
There is a beautiful botanical garden near the castle. (der iz e biutiful boutenikël gardën nir de kasël) — C'è un bellissimo giardino botanico vicino al castello.
Watch out for the cyclists coming down the bike lane. (uocc aut for de saiklists kaming daun de baik lein) — Fai attenzione ai ciclisti che scendono lungo la pista ciclabile.
How old is the cathedral located in the center? (hau ould iz de kethidrël loukeitid in de senter) — Quanti anni ha la cattedrale situata in centro?
There are many cozy cafes along this tree-lined boulevard. (der ar meni kouzi kafeiz elong dis trii laind buulevard) — Ci sono molti caffè accoglienti lungo questo viale alberato.
Let us cross the stone bridge to get to the other side. (let as kros de stoun brigj tu ghet tu di ader said) — Attraversiamo il ponte di pietra per andare dall'altra parte.
Is there a tourist map of the walking routes available? (iz der e turist mep ov de uoking ruuts eveilebël) — C'è una mappa turistica dei percorsi a piedi disponibile?
Look at the colourful flowers decorating the balconies. (luk et de kalorful flauerz dekoreiting de belkoniz) — Guarda i fiori colorati che decorano i balconi.
Where does this pedestrian path lead to? (uer daz dis pedestriën path liid tu) — Dove porta questo percorso pedonale?
We can hear the church bells ringing across the town. (ui ken hir de cerc belz ringing ekros de taun) — Possiamo sentire le campane della chiesa suonare in tutta la città.
Let us stop at the drinking fountain to fill our bottles. (let as stop et de drinking fauntën tu fil auer botëlz) — Fermiamoci alla fontanella per riempire le nostre borracce.
The street lights are turning on as evening falls. (de striit laits ar terning on ez iivning folz) — I lampioni si stanno accendendo mentre scende la sera.
Is it safe to walk around this neighborhood at night? (iz it seif tu uok eraund dis neiborhud et nait) — È sicuro camminare in questo quartiere di notte?
There is a lively open-air market happening in the square today. (der iz e laivli oupën er market hepëning in de skuer tudei) — Oggi c'è un vivace mercato all'aperto nella piazza.
We noticed a plaque commemorating a famous historical event. (ui noutist e plek komemoreiting e feimës histerikël ivent) — Abbiamo notato una targa che commemora un famoso evento storico.
Can you guide us towards the main promenade? (ken iu gaid as tuords de mein promeneid) — Puoi guidarci verso la passeggiata principale?
I love the vibrant atmosphere of this bustling street. (ai lav de vaibrent atmosfir ov dis basling striit) — Adoro l'atmosfera vivace di questa strada animata.
Should we head back towards the hotel before it gets dark? (sciud ui hed bek tuords de houtel bifor it ghets dark) — Dovremmo tornare verso l'hotel prima che faccia buio?
The ancient city walls are remarkably well preserved. (di einscënt siti uolz ar rimarkëbli uel prizervd) — Le antiche mura della città sono straordinariamente ben conservate.
Let us take the stairs leading up to the panoramic viewpoint. (let as teik de sterz liiding ap tu de panoramik viupoint) — Prendiamo le scale che portano al punto panoramico.
This neighborhood is famous for its colorful street art. (dis neiborhud iz feimës for its kalorful striit art) — Questo quartiere è famoso per la sua vivace arte urbana.
Are there any shaded benches where we can rest in the shade? (ar der eni sceidid benciz uer ui ken rest in de sceid) — Ci sono panchine all'ombra dove possiamo riposarci?
The traffic noise disappears once you enter the quiet alley. (de trafik noiz disepiirz uans iu enter de kuaiet eli) — Il rumore del traffico scompare appena si entra nel vicolo silenzioso.
You can admire the ruins from the observation platform. (iu ken edmaier de ruinz from di observeiscën pletform) — Puoi ammirare i resti dalla piattaforma di osservazione.
Let us follow the signposts directing visitors to the monument. (let as folou de sainpousts direkting vizitorz tu de moniument) — Seguiamo i cartelli che indicano il monumento ai visitatori.
Is there a scenic walking trail along the coastline? (iz der e siinik uoking treil elong de koustlain) — C'è un sentiero panoramico lungo la costa?
I enjoy observing daily life in the neighborhood squares. (ai engioi obzerving deili laif in de neiborhud skuerz) — Mi piace osservare la vita quotidiana nelle piazze del quartiere.
Do not forget to look up at the decorative details on the facades. (du not forget tu luk ap et de dekorativ diteilz on de fasadz) — Non dimenticare di alzare lo sguardo sui dettagli decorativi delle facciate.
The bell tower dominates the skyline of the whole city. (de bel tauer domineits de skailain ov de houl siti) — Il campanile domina il panorama dell'intera città.
Let us cross the avenue at the traffic lights when it turns green. (let as kros di eveniu et de trafik laits uen it ternz griin) — Attraversiamo il viale al semaforo quando diventa verde.
There is a bronze monument erected in honor of the founder. (der iz e bronz moniument irektid in oner ov de faunder) — C'è un monumento in bronzo eretto in onore del fondatore.
We walked for hours discovering hidden corners of the town. (ui uokt for auerz diskavering hidën kornerz ov de taun) — Abbiamo camminato per ore scoprendo angoli nascosti della città.
The park is full of locals walking their dogs in the evening. (de park iz ful ov loukëlz uoking deir dogz in di iivning) — Il parco è pieno di residenti che portano a spasso i cani la sera.
Is the old fortress open for public visits today? (iz di ould fortres oupën for pablik vizits tudei) — La vecchia fortezza è aperta per le visite pubbliche oggi?
Let us sit near the pond and watch the ducks. (let as sit nir de pond end uocc de daks) — Sediamoci vicino allo stagno a guardare le anatre.
This historical gate was once the main entrance to the city. (dis histerikël gheit uoz uans de mein entrens tu de siti) — Questa porta storica un tempo era l'ingresso principale della città.
The whole downtown area is restricted to pedestrians only. (de houl dauntaun eria iz ristriktid tu pedestriëns ounli) — L'intera zona del centro storico è riservata esclusivamente ai pedoni.
What a charming place to take an evening stroll! (uot e ciarming pleis tu teik en iivning stroul) — Che posto incantevole per fare una passeggiata serale!
Did you bring enough water for everyone? (Did iu bring i-naf uoter for ev-ri-uan?) - Hai portato abbastanza acqua per tutti?
I think I'll sit here for a bit and watch the waves. (Ai think ail sit hier for e bit end uotc de ueivz) - Credo che starò qui un po' a guardare le onde.
Are you actually going in, or are you just dipping your feet? (Ar iu ektciueli gouing in, or ar iu giast diping ior fiit?) - Entri davvero in acqua o immergi solo i piedi?
It's much warmer than I expected today. (Its mac uormer den ai ekspektid tudei) - Oggi è molto più caldo di quanto mi aspettassi.
Don't wander too far out, especially with these waves. (Dount uonder tuu far aut, espe-scieli uid dhiiz ueivz) - Non andare troppo al largo, soprattutto con queste onde.
I could stay here all afternoon if nobody's in a hurry. (Ai kud stei hier ol after-nuun if noubodiz in e hari) - Potrei restare qui tutto il pomeriggio se nessuno ha fretta.
Have you put enough sunscreen on your shoulders? (Hev iu put i-naf sanskriin on ior sciolders?) - Hai messo abbastanza crema solare sulle spalle?
Dad, can we get something cold to drink later? (Ded, ken ui get samthing kould tu drink leiter?) - Papà, possiamo prendere qualcosa di fresco da bere più tardi?
Let's wait until the sun goes down a little before we head back. (Lets ueit until de san gouz daun e litel bifor ui hed bek) - Aspettiamo che il sole scenda un po' prima di tornare indietro.
I haven't been to this beach since I was a kid. (Ai hev-nt biin tu dis biic sins ai uoz e kid) - Non venivo in questa spiaggia da quando ero bambino.
Look at those boats out there; I wonder where they're going. (Luk et dhouz bouts aut der; ai uonder uer deir gouing) - Guarda quelle barche laggiù; chissà dove stanno andando.
The water looks calm, but it's surprisingly deep over there. (De uoter luks kam, bat its ser-praizing-lii diip ouver der) - L'acqua sembra calma, ma lì è sorprendentemente profonda.
Did you see that family trying to keep their umbrella from blowing away? (Did iu sii det femili traiing tu kiip deir ambrela from blouing euei?) - Hai visto quella famiglia che cercava di non far volare via l'ombrellone?
We should grab our stuff before the tide comes in. (Ui sciud greb auer staf bifor de taid kamz in) - Dovremmo prendere le nostre cose prima che salga la marea.
I think the little one is getting tired of being in the sun. (Ai think de litel uan iz geting taiard ov biing in de san) - Credo che il piccolo si stia stancando di stare al sole.
Why don't we have lunch somewhere along the waterfront? (Uai dount ui hev lanc samuer elong de uoterfront?) - Perché non pranziamo da qualche parte sul lungomare?
That breeze feels really nice after being out in the heat. (Det briiz fiilz rili nais after biing aut in de hiit) - Questa brezza è davvero piacevole dopo essere stati al caldo.
Mum, I'm starving. Can we get an ice cream? (Mam, aim starving. Ken ui get en ais kriim?) - Mamma, sto morendo di fame. Possiamo prendere un gelato?
I don't remember the sea being this clear when we came here last summer. (Ai dount rimember de sii biing dis kliir uen ui keim hier last samer) - Non ricordo che il mare fosse così limpido quando siamo venuti qui l'estate scorsa.
You've got sand all over your face. (Iuv got send ol ouver ior feis) - Hai sabbia dappertutto sulla faccia.
Hold on, I've got something in my eye. (Hould on, aiv got samthing in mai ai) - Aspetta, ho qualcosa nell'occhio.
Let's rinse our feet before getting back in the car. (Lets rins auer fiit bifor geting bek in de kar) - Sciacquiamoci i piedi prima di risalire in macchina.
Do you fancy going for a walk along the beach later? (Du iu fensi gouing for e uok elong de biic leiter?) - Ti va di fare una passeggiata sulla spiaggia più tardi?
I remember Dad bringing us here when we were little. (Ai rimember Ded briging as hier uen ui uer litel) - Ricordo che papà ci portava qui quando eravamo piccoli.
The kids have been playing in the sand for nearly an hour. (De kids hev biin pleiing in de send for nirli en auer) - I bambini giocano nella sabbia da quasi un'ora.
We'd better move the chairs into the shade. (Uid beter muuv de cers intu de sceid) - Faremmo meglio a spostare le sedie all'ombra.
Can you keep an eye on my bag while I go for a swim? (Ken iu kiip en ai on mai beg uail ai gou for e suim?) - Puoi tenere d'occhio la mia borsa mentre faccio una nuotata?
I thought the beach would be packed, but it's actually pretty quiet. (Ai thot de biic ud bi pekt, bat its ektciueli priti kuaiet) - Pensavo che la spiaggia sarebbe stata affollatissima, invece è abbastanza tranquilla.
We could come back here tomorrow if the weather stays like this. (Ui kud kam bek hier tumorou if de ueder steiz laik dis) - Potremmo tornare qui domani se il tempo resta così.
Did anyone bring a book, or are we all just going to sit around? (Did eniuan bring e buk, or ar ui ol giast gouing tu sit eraund?) - Qualcuno ha portato un libro o staremo tutti semplicemente qui a non fare niente?
I love sitting by the sea and listening to everyone talk. (Ai lav siting bai de sii end lisening tu evriuan tok) - Mi piace stare vicino al mare e ascoltare tutti parlare.
It's funny how we always end up talking about the same things on holiday. (Its fani hau ui olueiz end ap talking ebaut de seim things on holidei) - È divertente come in vacanza finiamo sempre per parlare delle stesse cose.
You two were arguing about the smallest thing five minutes ago. (Iu tu uer arguing ebaut de smolest thing faiv minits ego) - Voi due stavate discutendo per una sciocchezza cinque minuti fa.
Come on, forget about it and enjoy the day. (Kam on, forget ebaut it end enjoy de dei) - Dai, lasciate perdere e godetevi la giornata.
I was just thinking how lucky we are to have days like this together. (Ai uoz giast thinking hau laki ui ar tu hev deiz laik dis tugheder) - Stavo pensando a quanto siamo fortunati ad avere giornate così insieme.
Do you remember that time we got caught in a storm at the beach? (Du iu rimember det taim ui got kot in e storm et de biic?) - Ti ricordi quella volta che ci sorprese un temporale in spiaggia?
We had to run back to the car with all our stuff. (Ui hed tu ran bek tu de kar uid ol auer staf) - Abbiamo dovuto correre alla macchina con tutta la nostra roba.
I can still hear you laughing about it. (Ai ken stil hiir iu laffing ebaut it) - Ti sento ancora ridere quando ne parli.
Maybe we should head home before everyone gets hungry again. (Meibi ui sciud hed houm bifor evriuan gets hangri eghen) - Forse dovremmo tornare a casa prima che venga di nuovo fame a tutti.
Give me a minute, I want to take one last look at the sea. (Giv mi e minit, ai uont tu teik uan last luk et de sii) - Dammi un minuto, voglio dare un'ultima occhiata al mare.
The sunset is starting to look amazing. (De sanset iz starting tu luk emeizing) - Il tramonto sta iniziando a essere spettacolare.
Let's sit here for a while and watch the sky change colour. (Lets sit hier for e uail end uotc de skai ceingj kaler) - Sediamoci qui per un po' e guardiamo il cielo cambiare colore.
I don't think anyone's ready to leave just yet. (Ai dount think eniuanz redi tu liiv giast iet) - Non credo che nessuno sia ancora pronto ad andare via.
You can tell everyone had a good day just by looking at their faces. (Iu ken tel evriuan hed e gud dei giast bai luking et deir feisis) - Si capisce che tutti hanno passato una bella giornata solo guardandoli in faccia.
Let's get the towels and shake the sand off before we pack everything up. (Lets get de tauelz end sceik de send of bifor ui pek evriting ap) - Prendiamo gli asciugamani e togliamo la sabbia prima di mettere via tutto.
I'm glad we came here instead of staying indoors all day. (Aim gled ui keim hier insted ov steiing indorz ol dei) - Sono contento che siamo venuti qui invece di restare in casa tutto il giorno.
Next time, let's bring a bigger umbrella and a cooler bag. (Nekst taim, lets bring e biger ambrela end e cooler beg) - La prossima volta portiamo un ombrellone più grande e una borsa frigo.
I reckon this is exactly the kind of family day we'll talk about for years. (Ai reken dis iz egzaktli de kaind ov femili dei uil tok ebaut for yiirz) - Secondo me è proprio il tipo di giornata in famiglia di cui parleremo per anni.
What do you think we should do with this empty wall? (Uot du iu think ui sciud du uid dis empti uol?) - Cosa pensi che dovremmo fare con questa parete vuota?
I reckon the sofa would look better against the other wall. (Ai reken de soufa ud luk beter eghenst di ader uol) - Secondo me il divano starebbe meglio sull'altra parete.
Should we go for a bigger dining table, or would that make the room feel cramped? (Sciud ui gou for e biger daining teibel, or ud det meik de ruum fiil krempt?) - Prendiamo un tavolo da pranzo più grande o renderebbe la stanza troppo stretta?
I don't want the room to feel too cluttered. (Ai dount uont de ruum tu fiil tu klaterd) - Non voglio che la stanza sembri troppo piena di cose.
Maybe we could put the bookcase next to the window. (Meibi ui kud put de bukkeis nekst tu de uindou) - Potremmo mettere la libreria accanto alla finestra.
I'd rather have something simple and easy to keep tidy. (Aid rather hev samthing simpel end iizi tu kiip taidi) - Preferirei qualcosa di semplice e facile da tenere in ordine.
Do you think this colour would work in the living room? (Du iu think dis kaler ud uork in de living ruum?) - Pensi che questo colore starebbe bene in soggiorno?
I really like the idea of having wooden shelves here. (Ai rili laik di aidea ov heving uden scelvz hier) - Mi piace molto l'idea di mettere qui delle mensole di legno.
We need to make sure there's enough space to walk around the table. (Ui niid tu meik sciur derz i-naf speis tu uok eraund de teibel) - Dobbiamo assicurarci che ci sia abbastanza spazio per girare intorno al tavolo.
What if we move the TV over there and put the cabinet underneath it? (Uot if ui muuv de tii-vi ouver der end put de kebinet ander it?) - E se spostassimo la TV lì e mettessimo il mobile sotto?
I don't think that armchair fits with the rest of the furniture. (Ai dount think det armcer fits uid de rest ov de fernicier) - Non credo che quella poltrona stia bene con il resto dei mobili.
Let's measure the wall before we order anything. (Lets meger de uol bifor ui order enithing) - Misuriamo la parete prima di ordinare qualcosa.
We could get a smaller coffee table and leave more room around the sofa. (Ui kud get e smoler kofi teibel end liiv mor ruum eraund de soufa) - Potremmo prendere un tavolino più piccolo e lasciare più spazio intorno al divano.
I'd love to have some plants in this corner. (Aid lav tu hev sam plants in dis korner) - Mi piacerebbe avere delle piante in questo angolo.
Do we really need another cabinet in here? (Du ui rili niid enader kebinet in hier?) - Abbiamo davvero bisogno di un altro mobile qui?
I think the room needs a bit more light. (Ai think de ruum niidz e bit mor lait) - Secondo me la stanza ha bisogno di un po' più di luce.
What about putting a floor lamp beside the sofa? (Uot ebaut puting e flor lemp bisaid de soufa?) - Che ne dite di mettere una lampada da terra accanto al divano?
We should pick furniture that won't go out of style too quickly. (Ui sciud pik fernicier det uount gou aut ov stail tu kuikli) - Dovremmo scegliere mobili che non passino di moda troppo presto.
I'm not sure that sofa is big enough for all of us. (Aim not sciur det soufa iz big i-naf for ol ov as) - Non sono sicuro che quel divano sia abbastanza grande per tutti noi.
Can we find something nicer without spending a fortune? (Ken ui faind samthing naiser uidaut spending e fortiun?) - Possiamo trovare qualcosa di più bello senza spendere una fortuna?
I'd put the dining table closer to the kitchen. (Aid put de daining teibel klouser tu de kicen) - Io metterei il tavolo da pranzo più vicino alla cucina.
The curtains should match the colour of the walls. (De kerten sciod metc de kaler ov de uolz) - Le tende dovrebbero essere abbinate al colore delle pareti.
I don't want anything too modern; I'd rather keep it cosy. (Ai dount uont enithing tu modern; aid rather kiip it kouzi) - Non voglio niente di troppo moderno; preferisco mantenere un'atmosfera accogliente.
What kind of chairs would look good with this table? (Uot kaind ov cers ud luk gud uid dis teibel?) - Che tipo di sedie starebbero bene con questo tavolo?
We could put a mirror here to make the room look bigger. (Ui kud put e mirer hier tu meik de ruum luk biger) - Potremmo mettere uno specchio qui per far sembrare la stanza più grande.
I think we'd be better off with drawers instead of cupboards. (Ai think uid bi beter of uid drorz insted ov kaberdz) - Secondo me sarebbe meglio scegliere dei cassetti invece degli armadietti.
Let's not buy everything at once. (Lets not bai evriting et uans) - Non compriamo tutto in una volta.
Maybe we should start with the essentials and decide the rest later. (Meibi ui sciud start uid di esencielz end disaid de rest leiter) - Forse dovremmo cominciare dalle cose essenziali e decidere il resto più avanti.
I'd like the bedroom to feel calm and relaxing. (Aid laik de bedruum tu fiil kam end rileksing) - Vorrei che la camera da letto fosse tranquilla e rilassante.
Where are we going to put all these books? (Uer ar ui gouing tu put ol dhiiz buks?) - Dove metteremo tutti questi libri?
I think a low TV unit would look better here. (Ai think e lou tii-vi iunit ud luk beter hier) - Secondo me qui starebbe meglio un mobile TV basso.
Do you want the shelves open or with doors? (Du iu uont de scelvz oupen or uid dorz?) - Vuoi le mensole aperte o con le ante?
We should leave some empty space so the room can breathe. (Ui sciud liiv sam empti speis sou de ruum ken briidh) - Dovremmo lasciare un po' di spazio vuoto, così la stanza non risulta soffocata.
That rug might be too small for the living room. (Det rag mait bi tu smol for de living ruum) - Quel tappeto potrebbe essere troppo piccolo per il soggiorno.
How about a round table instead of a rectangular one? (Hau ebaut e raund teibel insted ov e rektenghiuler uan?) - Che ne dici di un tavolo rotondo invece di uno rettangolare?
I don't want the furniture blocking the natural light. (Ai dount uont de fernicier bloking de necierel lait) - Non voglio che i mobili blocchino la luce naturale.
Let's check a few different layouts before we decide. (Lets cek e fiu difrent lei-auts bifor ui disaid) - Guardiamo alcune disposizioni diverse prima di decidere.
That colour looks nice, but I'm worried it'll make the room darker. (Det kaler luks nais, bat aim uorid itl meik de ruum darker) - Quel colore è bello, ma temo che renderà la stanza più buia.
We could add some storage under the stairs. (Ui kud ed sam storij ander de sterz) - Potremmo aggiungere dello spazio contenitore sotto le scale.
I think this cabinet is too bulky for such a small room. (Ai think dis kebinet iz tu balki for sac e smol ruum) - Secondo me questo mobile è troppo ingombrante per una stanza così piccola.
Would you rather have a big sofa or more space to move around? (Uud iu rather hev e big soufa or mor speis tu muuv eraund?) - Preferiresti avere un divano grande o più spazio per muoverti?
We don't have to agree on everything, but we should find a compromise. (Ui dount hev tu egrii on evriting, bat ui sciud faind e kompromais) - Non dobbiamo essere d'accordo su tutto, ma dovremmo trovare un compromesso.
I think we should keep the old table; it's still in really good condition. (Ai think ui sciud kiip di ould teibel; its stil in rili gud kondiscion) - Secondo me dovremmo tenere il vecchio tavolo; è ancora in ottime condizioni.
Let's take some photos of the room and think about it tonight. (Lets teik sam foutous ov de ruum end think ebaut it tenait) - Facciamo qualche foto della stanza e riflettiamoci stasera.
If we're spending that much, I want something that'll last. (If uir spending det mac, ai uont samthing detl last) - Se spendiamo così tanto, voglio qualcosa che duri.
I'm happy with whatever we choose as long as the house feels comfortable. (Aim hepi uid uotever ui ciuuz ez long ez de haus fiilz kamfterbel) - Per me va bene qualsiasi cosa scegliamo, purché la casa sia confortevole.
Once we agree on the layout, we can start looking for the furniture. (Uans ui egrii on de lei-aut, ui ken start luking for de fernicier) - Una volta deciso come disporre gli ambienti, possiamo iniziare a cercare i mobili.
Right, let's grab a trolley and get started (rait, lets grèb a troli end ghet startid) - Bene, prendiamo un carrello e iniziamo
Do we need a big one or will a basket do (du uì niid a big uan or uil a bèskët du) - Ci serve uno grande o basta un cestino
Can you check the list and see what we're missing (kèn yu chek dhë list end sii uat uir misin) - Puoi controllare la lista e vedere cosa ci manca
We're almost out of pasta and rice (uir olmoust aut ov pasta end rais) - Stiamo finendo la pasta e il riso
Grab a couple of loaves of bread while you're there (grèb a kapël ov louvz ov bred uail yor dher) - Prendi un paio di pagnotte di pane già che sei lì
Can you get some eggs, we're down to two (kèn yu ghet sam eggz, uir daun tu tuu) - Puoi prendere delle uova, ce ne sono rimaste solo due
Which milk do you want, whole or semi-skimmed (uic milk du yu uont, houl or semiskimd) - Che latte vuoi, intero o parzialmente scremato
Let's get the bigger pack, it's better value (lets ghet dhë bighër pèk, its betër vèliuu) - Prendiamo la confezione più grande, conviene di più
Is this cheese on offer this week (iz dhis chiiz on ofër dhis uiik) - Questo formaggio è in offerta questa settimana
Grab some yoghurts for the kids' lunchboxes (grèb sam yogërts for dhë kidz lanchboksiz) - Prendi degli yogurt per i pranzi al sacco dei bambini
Can you check the expiry date on that (kèn yu chek dhë ekspairi deit on dhèt) - Puoi controllare la data di scadenza su quello
This one's about to go off, grab one from the back (dhis uanz abaut tu gou of, grèb uan from dhë bèk) - Questo sta per scadere, prendine uno da dietro
Do we actually need more snacks (du uì èkchueli niid mor snèks) - Ci servono davvero altri snack
Put that back, we've already got some at home (put dhèt bèk, uìv olredi gat sam et houm) - Rimettilo a posto, ne abbiamo già a casa
Can you weigh these tomatoes for me (kèn yu uei dhiiz tomeitouz for mi) - Puoi pesarmi questi pomodori
Which apples are on special this week (uic apëlz ar on spescël dhis uiik) - Quali mele sono in offerta questa settimana
Grab a bag of onions and some garlic (grèb a bèg ov aniënz end sam garlik) - Prendi un sacchetto di cipolle e un po' d'aglio
Do we need more potatoes or have we got enough (du uì niid mor poteitouz or hèv uì gat inaf) - Ci servono altre patate o ne abbiamo abbastanza
Let's get some fresh basil for the sauce (lets ghet sam fresc bèzil for dhë sos) - Prendiamo del basilico fresco per il sugo
Can you pick a ripe avocado, not a hard one (kèn yu pik a raip avokadou, not a hard uan) - Puoi scegliere un avocado maturo, non uno duro
We're out of chicken, grab a couple of breasts (uir aut ov chikën, grèb a kapël ov brests) - Non abbiamo più pollo, prendi un paio di petti
Is the fish counter open today (iz dhë fisc kauntër oupën tudei) - Il banco del pesce è aperto oggi
Can you ask if they've got any fresh prawns (kèn yu esk if dheiv gat eni fresc pronz) - Puoi chiedere se hanno dei gamberi freschi
Let's get something quick for dinner tonight (lets ghet samthin kuik for dinër tunait) - Prendiamo qualcosa di veloce per cena stasera
Check if this one's got less sugar in it (chek if dhis uanz gat les sciugër in it) - Controlla se questo ha meno zucchero
Read the label, does it have nuts in it (riid dhë leibël, daz it hev nats in it) - Leggi l'etichetta, contiene frutta secca
Can we get the cereal that's not full of sugar (kèn uì ghet dhë sirìel dhèts not ful ov sciugër) - Possiamo prendere i cereali che non sono pieni di zucchero
Grab some more washing up liquid, we're nearly out (grèb sam mor uoscin ap likuid, uir nirli aut) - Prendi altro detersivo per i piatti, ne stiamo rimanendo senza
We need toilet paper, we're down to the last roll (uì niid toilet peipër, uir daun tu dhë lest roul) - Ci serve carta igienica, siamo rimasti all'ultimo rotolo
Can you grab some bin bags on the way to the till (kèn yu grèb sam bin bègz on dhë uei tu dhë til) - Puoi prendere dei sacchetti della spazzatura mentre andiamo alla cassa
Let's check if there's a shorter queue at another till (lets chek if dhers a scortër kiuu et anadhër til) - Vediamo se c'è una fila più corta a un'altra cassa
Can you go grab a basket, this trolley's too much (kèn yu gou grèb a bèskët, dhis troli iz tuu mach) - Puoi andare a prendere un cestino, questo carrello è troppo
Do you have a loyalty card with you (du yu hev a loialti kard uidh yu) - Hai con te la carta fedeltà
I think we've got a coupon for this somewhere (ai think uìv gat a kupon for dhis samuer) - Credo che abbiamo un buono per questo da qualche parte
Can you put the frozen stuff in this bag separately (kèn yu put dhë frouzën staf in dhis bèg sepërëtli) - Puoi mettere i surgelati in questo sacchetto separatamente
Careful, that jar's heavy, don't drop it (kerful, dhèt giarz hevi, dount drop it) - Attento, quel barattolo è pesante, non farlo cadere
Stop putting sweets in the trolley when I'm not looking (stop putin suiits in dhë troli uen aim not lukin) - Smettila di mettere dolciumi nel carrello quando non guardo
Can I get some chocolate, please, just one bar (kèn ai ghet sam choklët, pliiz, giast uan bar) - Posso prendere del cioccolato, per favore, solo una tavoletta
You can have one thing, not the whole shelf (yu kèn hev uan thin, not dhë houl scelf) - Puoi prendere una cosa, non tutto lo scaffale
Let's check the total before we get to the till (lets chek dhë toutël bifor uì ghet tu dhë til) - Controlliamo il totale prima di arrivare alla cassa
I think we've gone a bit over budget again (ai think uìv gon a bit ouvër bagit eghèn) - Credo che abbiamo di nuovo sforato il budget
Do you want to pack the bags or shall I (du yu uont tu pèk dhë bègz or scèl ai) - Vuoi impacchettare tu le buste o lo faccio io
Can you help me load the bags into the boot (kèn yu help mi loud dhë bègz intu dhë buut) - Puoi aiutarmi a caricare le buste nel bagagliaio
Did we forget anything, let me check the list again (did uì forghet enìthin, let mi chek dhë list eghèn) - Abbiamo dimenticato qualcosa, fammi ricontrollare la lista
We still need to stop by the pharmacy after this (uì stil niid tu stop bai dhë farmasi aftër dhis) - Dobbiamo ancora passare in farmacia dopo questo
Can you put the eggs on top so they don't get crushed (kèn yu put dhë eggz on top sou dhei dount ghet krascit) - Puoi mettere le uova sopra così non si rompono
Let's put the cold stuff in the fridge as soon as we're home (lets put dhë kould staf in dhë frigi az suun az uir houm) - Mettiamo subito le cose fredde in frigo appena arriviamo a casa
Did you remember to bring the reusable bags this time (did yu rimembër tu bring dhë riuusëbël bègz dhis taim) - Ti sei ricordato di portare i sacchetti riutilizzabili questa volta
That was way more expensive than I thought it'd be (dhèt uoz uei mor ekspensiv dhèn ai thot itd bi) - È costato molto più di quanto pensassi
Right, that's the shopping done for the week (rait, dhèts dhë scopin dan for dhë uiik) - Bene, la spesa per la settimana è fatta
How much are these peaches per kilo? (Hau mac ar dhiiz piiciz per kiilou?) - Quanto costano queste pesche al chilo?
Could I have about half a kilo of these apples, please? (Kud ai hev ebaut haf e kiilou ov dhiiz epelz, pliiz?) - Potrei avere circa mezzo chilo di queste mele, per favore?
I'll take six oranges, but make sure they're nice and ripe. (Ail teik siks oren-jiz, bat meik sciur deir nais end raip) - Prendo sei arance, ma assicurati che siano belle mature.
Can you give me a kilo of tomatoes, please? (Ken iu giv mi e kiilou ov tomeitouz, pliiz?) - Puoi darmi un chilo di pomodori, per favore?
How many bananas do you think I'll need for a cake? (Hau meni benenaz du iu think ail niid for e keik?) - Quante banane pensi che mi serviranno per una torta?
I'd like three of the larger ones and four of the smaller ones. (Aid laik thrii ov de larjer uanz end for ov de smoler uanz) - Vorrei tre di quelle più grandi e quattro di quelle più piccole.
Are these grapes seedless? (Ar dhiiz greips siidles?) - Questi acini d'uva sono senza semi?
I'll have two bunches of grapes, please. (Ail hev tu banciz ov greips, pliiz) - Prendo due grappoli d'uva, per favore.
Could you weigh these for me? (Kud iu uei dhiiz for mi?) - Potresti pesarmeli?
That's a bit too much; can you take a couple out? (Dets e bit tu mac; ken iu teik e kapel aut?) - È un po' troppo; puoi toglierne un paio?
I'll take a dozen eggs while I'm here. (Ail teik e dazen egz uail aim hier) - Prendo anche una dozzina di uova, visto che sono qui.
Have you got any strawberries left? (Hev iu got eni stroberiz left?) - Avete ancora delle fragole?
I'll take two punnets if they're fresh. (Ail teik tu panits if deir fresh) - Ne prendo due vaschette se sono fresche.
How much would three kilos of potatoes be? (Hau mac ud thrii kiilouz ov poteitouz bi?) - Quanto costerebbero tre chili di patate?
I only need about 700 grams, not a full kilo. (Ai ounli niid ebaut seven handred gremz, not e ful kiilou) - Mi servono solo circa 700 grammi, non un chilo intero.
Can I get five lemons and two limes? (Ken ai get faiv lemonz end tu laimz?) - Posso avere cinque limoni e due lime?
These pears look great, but are they ready to eat? (Dhiiz perz luk greit, bat ar dei redi tu iit?) - Queste pere sembrano ottime, ma sono pronte da mangiare?
I'll take four, but I'd like them a little less ripe. (Ail teik for, bat aid laik dem e litel les raip) - Ne prendo quattro, ma le vorrei un po' meno mature.
Do you sell avocados by the piece or by weight? (Du iu sel evokadou z bai de piis or bai ueit?) - Vendete gli avocado a pezzo o a peso?
I'll have three avocados, please, and not too soft. (Ail hev thrii evokadou z, pliiz, end not tu soft) - Prendo tre avocado, per favore, e non troppo morbidi.
How many kilos of onions do we have at home? (Hau meni kiilouz ov anienz du ui hev et houm?) - Quanti chili di cipolle abbiamo a casa?
Let's get two kilos; we'll probably use them this week. (Lets get tu kiilouz; uil probabli iuz dem dis uiik) - Prendiamone due chili; probabilmente li useremo questa settimana.
Do you have any smaller courgettes? (Du iu hev eni smoler kuor-jets?) - Avete delle zucchine più piccole?
I'll take six of those and four peppers. (Ail teik siks ov dhouz end for pepers) - Prendo sei di quelle e quattro peperoni.
Could you put the fruit in separate bags, please? (Kud iu put de fruut in sepret begs, pliiz?) - Potresti mettere la frutta in sacchetti separati, per favore?
I need about one and a half kilos of oranges. (Ai niid ebaut uan end e haf kiilouz ov oren-jiz) - Mi serve circa un chilo e mezzo di arance.
Are these local, or have they come from somewhere else? (Ar dhiiz loukel, or hev dei kam from samuer els?) - Questi sono prodotti locali o vengono da un'altra zona?
I'd like 300 grams of sliced beef, please. (Aid laik thrii handred gremz ov slaist biif, pliiz) - Vorrei 300 grammi di manzo affettato, per favore.
Can I get half a kilo of chicken breast? (Ken ai get haf e kiilou ov ciken brest?) - Posso avere mezzo chilo di petto di pollo?
I need about eight chicken thighs for dinner. (Ai niid ebaut eit ciken thaiz for diner) - Mi servono circa otto cosce di pollo per cena.
Could you cut the steaks a little thinner? (Kud iu kat de steiks e litel thiner?) - Potresti tagliare le bistecche un po' più sottili?
I'll take four steaks, around 200 grams each. (Ail teik for steiks, eraund tu handred gremz iic) - Prendo quattro bistecche, da circa 200 grammi l'una.
How much does a kilo of minced beef cost? (Hau mac daz e kiilou ov minst biif kost?) - Quanto costa un chilo di carne macinata di manzo?
Could I have 500 grams of minced beef and 300 grams of pork? (Kud ai hev faiv handred gremz ov minst biif end thrii handred gremz ov pork?) - Potrei avere 500 grammi di carne macinata di manzo e 300 grammi di maiale?
Do you have enough sausages for six people? (Du iu hev i-naf sosijiz for siks piipel?) - Avete abbastanza salsicce per sei persone?
We'll need about twelve sausages for everyone. (Uil niid ebaut tuelv sosijiz for evriuan) - Ce ne serviranno circa dodici per tutti.
Can you give me two lamb chops and three pork chops? (Ken iu giv mi tu lem cops end thrii pork cops?) - Puoi darmi due costolette d'agnello e tre di maiale?
I'd like a small piece of beef, around 400 grams. (Aid laik e smol piis ov biif, eraund for handred gremz) - Vorrei un piccolo pezzo di manzo, circa 400 grammi.
Is this enough meat for four adults? (Iz dis i-naf miit for for edalts?) - Questa quantità di carne basta per quattro adulti?
Maybe we'd better get another 500 grams, just in case. (Meibi uid beter get enader faiv handred gremz, giast in keis) - Forse è meglio prendere altri 500 grammi, per sicurezza.
Can you remove the skin and bones from this chicken? (Ken iu rimuuv de skin end bounz from dis ciken?) - Puoi togliere la pelle e le ossa da questo pollo?
I'd like six slices of ham, not too thick. (Aid laik siks slaisis ov hem, not tu thik) - Vorrei sei fette di prosciutto, non troppo spesse.
How many burgers can we make from one kilo of mince? (Hau meni berghez ken ui meik from uan kiilou ov mins?) - Quanti hamburger possiamo fare con un chilo di carne macinata?
We need enough meat for eight burgers. (Ui niid i-naf miit for eit berghez) - Ci serve abbastanza carne per otto hamburger.
Could you pack the chicken separately from the beef? (Kud iu pek de ciken sepretli from de biif?) - Potresti confezionare il pollo separatamente dal manzo?
That's nearly a kilo; I only asked for 600 grams. (Dets nirli e kiilou; ai ounli askt for siks handred gremz) - È quasi un chilo; avevo chiesto solo 600 grammi.
I'll take the extra two hundred grams if that's easier. (Ail teik di ekstra tu handred gremz if dets iizier) - Prendo i 200 grammi in più, se è più semplice.
We should buy enough fruit and meat for the whole weekend. (Ui sciud bai i-naf fruut end miit for de houl uiikend) - Dovremmo comprare abbastanza frutta e carne per tutto il fine settimana.
Could I have two sea bass, please, about 400 grams each? (Kud ai hev tu sii bas, pliiz, ebaut for handred gremz iic?) - Potrei avere due spigole, per favore, di circa 400 grammi ciascuna?
Are these sardines fresh today? (Ar dhiiz sardinz fresh tudei?) - Queste sardine sono fresche oggi?
I'll take a kilo of these prawns, but the medium-sized ones. (Ail teik e kiilou ov dhiiz proonz, bat de miidium-saizd uanz) - Prendo un chilo di questi gamberi, ma quelli di media grandezza.
Can you clean four of the fish for me? (Ken iu kliin for ov de fisc for mi?) - Puoi pulirmi quattro di questi pesci?
I'd like about 600 grams of salmon, cut into four pieces. (Aid laik ebaut siks handred gremz ov samen, kat intu for piisis) - Vorrei circa 600 grammi di salmone, tagliato in quattro pezzi.
How much are these red mullet per kilo? (Hau mac ar dhiiz red malet per kiilou?) - Quanto costano queste triglie al chilo?
I'll have six small anchovies and eight of the larger ones. (Ail hev siks smol enciviz end eit ov de larjer uanz) - Prendo sei acciughe piccole e otto di quelle più grandi.
Could you put the fish in two separate bags? (Kud iu put de fisc in tu sepret begs?) - Potresti mettere il pesce in due sacchetti separati?
Are those blue ones mackerel? (Ar dhouz blu uanz mekerel?) - Quelli blu sono sgombri?
I'll take three, as long as they're not too big. (Ail teik thrii, ez long ez deir not tu big) - Ne prendo tre, purché non siano troppo grandi.
Do you have any squid left? (Du iu hev eni skuid left?) - Avete ancora dei calamari?
I need about a kilo and a half of squid for dinner. (Ai niid ebaut e kiilou end e haf ov skuid for diner) - Mi serve circa un chilo e mezzo di calamari per cena.
Could you give me 500 grams of mussels and 500 grams of clams? (Kud iu giv mi faiv handred gremz ov maselz end faiv handred gremz ov klemz?) - Potresti darmi 500 grammi di cozze e 500 grammi di vongole?
These prawns are much bigger than the ones we bought last time. (Dhiiz proonz ar mac biger den de uanz ui bot last taim) - Questi gamberi sono molto più grandi di quelli che abbiamo comprato l'altra volta.
I'd rather have eight small fish than four really large ones. (Aid rather hev eit smol fisc den for rili larj uanz) - Preferirei otto pesci piccoli piuttosto che quattro molto grandi.
Can you weigh this one on its own? (Ken iu uei dis uan on its oun?) - Puoi pesare questo da solo?
That one looks fresh, but I'd prefer the darker red one. (Det uan luks fresh, bat aid prefer de darker red uan) - Quello sembra fresco, ma preferirei quello rosso più scuro.
Do you have any fish with a lighter colour? (Du iu hev eni fisc uid e laiter kaler?) - Avete del pesce di colore più chiaro?
I'll take two kilos of ice as well, please. (Ail teik tu kiilouz ov ais ez uel, pliiz) - Prendo anche due chili di ghiaccio, per favore.
Are these fillets about 200 grams each? (Ar dhiiz filets ebaut tu handred gremz iic?) - Questi filetti sono di circa 200 grammi ciascuno?
I need enough fish for five people, including two children. (Ai niid i-naf fisc for faiv piipel, incliuding tu ciul-dren) - Mi serve abbastanza pesce per cinque persone, compresi due bambini.
Let's get three different kinds so everyone has a choice. (Lets get thrii difrent kaindz sou evriuan hez e chois) - Prendiamo tre tipi diversi così tutti possono scegliere.
Could you remove the heads from these six prawns? (Kud iu rimuuv de hedz from dhiiz siks proonz?) - Potresti togliere la testa a questi sei gamberi?
I'll take four blue screws and four silver ones. (Ail teik for blu scruuz end for silver uanz) - Prendo quattro viti blu e quattro argentate.
Do you have these screws in a smaller size? (Du iu hev dhiiz scruuz in e smoler saiz?) - Avete queste viti in una misura più piccola?
I need twenty-five of these, not fifty. (Ai niid tuenti faiv ov dhiiz, not fifti) - Me ne servono venticinque, non cinquanta.
Could I get two metres of the black cable? (Kud ai get tu miiters ov de blek keibel?) - Potrei avere due metri del cavo nero?
I'd like three metres of the red wire and one metre of the blue. (Aid laik thrii miiters ov de red uai-er end uan miiter ov de blu) - Vorrei tre metri del filo rosso e un metro di quello blu.
Have you got a five-millimetre drill bit? (Hev iu got e faiv-milimiter dril bit?) - Avete una punta da trapano da cinque millimetri?
I need six wall plugs for these screws. (Ai niid siks uol plags for dhiiz scruuz) - Mi servono sei tasselli per queste viti.
Do you have a pack of ten in black? (Du iu hev e pek ov ten in blek?) - Avete una confezione da dieci neri?
I'll take two packs, one white and one grey. (Ail teik tu peks, uan uait end uan grei) - Prendo due confezioni, una bianca e una grigia.
Which size would you recommend for a ten-millimetre hole? (Uic saiz ud iu rekomend for e ten-milimiter houl?) - Quale misura mi consiglieresti per un foro da dieci millimetri?
I need a roll of strong black tape, about ten metres long. (Ai niid e roul ov strong blek teip, ebaut ten miiters long) - Mi serve un rotolo di nastro nero resistente, lungo circa dieci metri.
Can I get four metres of this grey plastic tubing? (Ken ai get for miiters ov dis grei plestik tiubing?) - Posso avere quattro metri di questo tubo di plastica grigio?
Do you have this paint in a darker blue? (Du iu hev dis peint in e darker blu?) - Avete questa vernice in un blu più scuro?
I only need half a litre, not the whole tin. (Ai ounli niid haf e liiter, not de houl tin) - Mi serve solo mezzo litro, non tutta la latta.
Could you give me two brushes, one small and one medium? (Kud iu giv mi tu brashez, uan smol end uan miidium?) - Potresti darmi due pennelli, uno piccolo e uno medio?
I'm looking for three white handles to match the doors. (Aim luking for thrii uait hendelz tu metc de dorz) - Cerco tre maniglie bianche abbinate alle porte.
Do you have a longer version of this, maybe around 30 centimetres? (Du iu hev e longer verjen ov dis, meibi eraund therti sentimiiters?) - Avete una versione più lunga, magari di circa 30 centimetri?
I need four metres of this yellow rope. (Ai niid for miiters ov dis ielou roup) - Mi servono quattro metri di questa corda gialla.
Are these metal brackets available in silver or black? (Ar dhiiz metal brekets eveilebel in silver or blek?) - Queste staffe metalliche sono disponibili in argento o nero?
I'll take eight of the small washers and four of the larger ones. (Ail teik eit ov de smol uoscers end for ov de larjer uanz) - Prendo otto delle rondelle piccole e quattro di quelle più grandi.
How many pieces are in this box? (Hau meni piisis ar in dis boks?) - Quanti pezzi ci sono in questa scatola?
There are only six left, so I'd better take all of them. (Der ar ounli siks left, sou aid beter teik ol ov dem) - Ne sono rimasti solo sei, quindi è meglio che li prenda tutti.
I need a two-metre extension lead with a white plug. (Ai niid e tu-miiter ekstension liid uid e uait plag) - Mi serve una prolunga di due metri con una spina bianca.
Do you have a smaller red paint roller, around ten centimetres wide? (Du iu hev e smoler red peint rouler, eraund ten sentimiiters uaid?) - Avete un rullo per vernice rosso più piccolo, largo circa dieci centimetri?
I'll take five of these hooks and two packs of nails. (Ail teik faiv ov dhiiz huks end tu peks ov neilz) - Prendo cinque di questi ganci e due confezioni di chiodi.
What are we supposed to observe in this experiment? (Uot ar ui sapouzd tu obzerv in dis eksperiment?) - Cosa dobbiamo osservare in questo esperimento?
I think the temperature is going up because the reaction is giving off heat. (Ai think de tempricer iz gouing ap bikoz de riakscion iz giving of hiit) - Penso che la temperatura stia aumentando perché la reazione sta liberando calore.
Can someone explain why the water changes colour? (Ken samuan eksplein uai de uoter ceingjiz kaler?) - Qualcuno può spiegare perché l'acqua cambia colore?
Don't touch the equipment until the teacher tells you to. (Dount tac di ekuipment until de tiicer telz iu tu) - Non toccare l'attrezzatura finché l'insegnante non te lo dice.
Write down the result before you move on to the next step. (Rait daun de rizalt bifor iu muuv on tu de nekst step) - Scrivi il risultato prima di passare alla fase successiva.
We need to measure the liquid very carefully. (Ui niid tu meger de likuid veri kerfuli) - Dobbiamo misurare il liquido con molta attenzione.
What would happen if we doubled the amount of salt? (Uot ud hepen if ui dabold di emaunt ov solt?) - Cosa succederebbe se raddoppiassimo la quantità di sale?
The teacher said we should work in pairs today. (De tiicer sed ui sciud uork in perz tudei) - L'insegnante ha detto che oggi dobbiamo lavorare a coppie.
I can't see anything through this microscope. (Ai kent sii enithing thru dis maicroscoup) - Non riesco a vedere niente attraverso questo microscopio.
Try adjusting the focus a little. (Trai egia sting de foukes e litel) - Prova a regolare un po' la messa a fuoco.
We learned about cells in biology last week. (Ui lernd ebaut selz in baiologi last uiik) - La settimana scorsa abbiamo studiato le cellule in biologia.
Is this part of the nucleus or the cell membrane? (Iz dis part ov de niukli-es or de sel membrein?) - Questa è una parte del nucleo o della membrana cellulare?
The diagram on the board makes it much easier to understand. (De daiagram on de bord meiks it mac iizier tu anderstend) - Il diagramma alla lavagna rende molto più facile capire.
I forgot to bring my lab notebook today. (Ai forgot tu bring mai leb noutbuk tudei) - Oggi ho dimenticato di portare il mio quaderno di laboratorio.
How do we know which variable we're supposed to change? (Hau du ui nou uic veriabel uir sapouzd tu ceingj?) - Come facciamo a sapere quale variabile dobbiamo modificare?
The results don't match what we predicted. (De rizalts dount metc uot ui pridiktid) - I risultati non corrispondono a ciò che avevamo previsto.
Maybe we made a mistake when we measured the volume. (Meibi ui meid e misteik uen ui megd de volium) - Forse abbiamo fatto un errore quando abbiamo misurato il volume.
What's the difference between mass and weight? (Uots de difrens bituin mes end ueit?) - Qual è la differenza tra massa e peso?
Does gravity have the same effect everywhere? (Daz greviti hev de seim efekt evriuer?) - La gravità ha lo stesso effetto ovunque?
Why does the Moon appear to change shape? (Uai daz de muun epir tu ceingj sceip?) - Perché la Luna sembra cambiare forma?
The Earth takes about a year to go around the Sun. (Di Erth teiks ebaut e yiir tu gou eraund de San) - La Terra impiega circa un anno a orbitare intorno al Sole.
So the seasons aren't caused by how close we are to the Sun? (Sou de siizenz arnt kozd bai hau klous ui ar tu de San?) - Quindi le stagioni non sono causate da quanto siamo vicini al Sole?
I didn't quite understand the last part. (Ai didnt kuait anderstend de last part) - Non ho capito bene l'ultima parte.
Could you go over that again? (Kud iu gou ouver det eghen?) - Potresti ripetere quella parte?
What happens to the energy when the object stops moving? (Uot hepens tu di energi uen di objekt stops muving?) - Cosa succede all'energia quando l'oggetto smette di muoversi?
We can use this formula to calculate the speed. (Ui ken iuz dis formula tu kelkiuleit de spiid) - Possiamo usare questa formula per calcolare la velocità.
I got a different answer from everyone else. (Ai got e difrent anser from evriuan els) - Ho ottenuto una risposta diversa da tutti gli altri.
Let's check the calculation one more time. (Lets cek de kelkiuleiscion uan mor taim) - Controlliamo il calcolo un'altra volta.
The graph shows how the temperature changes over time. (De graf sciouz hau de tempricer ceingjiz ouver taim) - Il grafico mostra come cambia la temperatura nel tempo.
Why is there a line going up so quickly? (Uai iz der e lain gouing ap sou kuikli?) - Perché c'è una linea che sale così rapidamente?
We need more data before we can draw a conclusion. (Ui niid mor deita bifor ui ken dro e konklusion) - Ci servono più dati prima di poter trarre una conclusione.
Our first test didn't work, so we're going to repeat it. (Auer ferst test didnt uork, sou uir gouing tu ripiit it) - Il nostro primo test non ha funzionato, quindi lo ripeteremo.
Be careful with that glass tube, it's really fragile. (Bi kerful uid det glas tiub, its rili frajail) - Fai attenzione con quel tubo di vetro, è davvero fragile.
Do we have to wear safety goggles for this experiment? (Du ui hev tu uer seifti gogolz for dis eksperiment?) - Dobbiamo indossare gli occhiali protettivi per questo esperimento?
The teacher wants us to record everything we observe. (De tiicer uonts as tu rikord evriting ui obzerv) - L'insegnante vuole che annotiamo tutto ciò che osserviamo.
I think this substance is reacting with the acid. (Ai think dis sabstens iz riakting uid di esid) - Penso che questa sostanza stia reagendo con l'acido.
What happens when you heat the mixture? (Uot hepens uen iu hiit de mikscer?) - Cosa succede quando riscaldi la miscela?
It starts bubbling almost immediately. (It starts babling olmost imiidietli) - Inizia a fare le bolle quasi immediatamente.
The teacher said not to pour too much into the test tube. (De tiicer sed not tu por tu mac intu de test tiub) - L'insegnante ha detto di non versarne troppo nella provetta.
Can you pass me the thermometer? (Ken iu pas mi de termometer?) - Mi passi il termometro?
The reading is slightly higher than the one we got before. (De riiding iz slaitli haier den de uan ui got bifor) - Il valore misurato è leggermente più alto di quello che avevamo ottenuto prima.
We should keep the conditions exactly the same for the second test. (Ui sciud kiip de kondiscionz egzaktli de seim for de second test) - Dovremmo mantenere esattamente le stesse condizioni per il secondo test.
Could this be evidence that our hypothesis was wrong? (Kud dis bi evidens det auer haipothesis uoz rong?) - Potrebbe essere una prova che la nostra ipotesi era sbagliata?
I like science because you can test an idea instead of just guessing. (Ai laik saiens bikoz iu ken test en aidea insted ov giast gesing) - Mi piace la scienza perché puoi verificare un'idea invece di limitarti a indovinare.
Are we going to study the human body next? (Ar ui gouing tu stadi de iuman bodi nekst?) - Studieremo il corpo umano la prossima volta?
I never realised how much chemistry is involved in everyday life. (Ai never ri elaizd hau mac kemistri iz involvd in evridei laif) - Non mi ero mai reso conto di quanta chimica ci sia nella vita quotidiana.
Can we see the experiment from over here? (Ken ui sii di eksperiment from ouver hier?) - Possiamo vedere l'esperimento da qui?
The teacher gave us ten minutes to finish the worksheet. (De tiicer geiv as ten minits tu finis de uork-sciit) - L'insegnante ci ha dato dieci minuti per finire la scheda.
I think I finally understand how this works. (Ai think ai faineli anderstend hau dis uorks) - Penso di aver finalmente capito come funziona
Where exactly is this country on the map? (Uer egzaktli iz dis kantri on de map?) - Dov'è esattamente questo paese sulla carta geografica?
How far is the capital from the coast? (Hau far iz de kepitel from de koust?) - Quanto dista la capitale dalla costa?
The capital is about 300 kilometres from the sea. (De kepitel iz ebaut thrii handred kilomiters from de sii) - La capitale dista circa 300 chilometri dal mare.
How long would it take to drive from north to south? (Hau long ud it teik tu draiv from north tu sauth?) - Quanto ci vorrebbe per andare in auto da nord a sud?
This river runs for more than 800 kilometres. (Dis river ranz for mor den eit handred kilomiters) - Questo fiume si estende per più di 800 chilometri.
Which countries share a border with Germany? (Uic kantriz scer e border uid Germani?) - Quali paesi confinano con la Germania?
It's only about 70 kilometres from here to the border. (Its ounli ebaut sevnti kilomiters from hier tu de border) - Da qui al confine ci sono solo circa 70 chilometri.
Can you show me where the equator is? (Ken iu sciou mi uer di ekueiter iz?) - Puoi mostrarmi dov'è l'equatore?
Most of the country lies south of the equator. (Moust ov de kantri laiz sauth ov di ekueiter) - La maggior parte del paese si trova a sud dell'equatore.
What's the distance between these two cities? (Uots de distens bituin dhiiz tu sitiz?) - Qual è la distanza tra queste due città?
They're roughly 150 kilometres apart. (Deir rafli uan handred end fifti kilomiters epart) - Dista circa 150 chilometri.
This mountain range stretches across several countries. (Dis maunten reinj strecciz ecros severel kantriz) - Questa catena montuosa attraversa diversi paesi.
The village is nearly 2,000 metres above sea level. (De vilij iz nirli tu thauzend miiters ebav sii level) - Il villaggio si trova a quasi 2.000 metri sul livello del mare.
Why are there so many mountains in this part of the country? (Uai ar der sou meni mauntens in dis part ov de kantri?) - Perché ci sono così tante montagne in questa parte del paese?
The eastern coast gets much more rain than the west. (Di ister n koust gets mac mor rein den de uest) - La costa orientale riceve molta più pioggia rispetto a quella occidentale.
How far is the nearest major city? (Hau far iz de nierest meijor siti?) - Quanto dista la città principale più vicina?
It's about a two-hour drive from here. (Its ebaut e tu-auer draiv from hier) - È a circa due ore di macchina da qui.
The island is only 25 kilometres long. (Di ailand iz ounli tuenti faiv kilomiters long) - L'isola è lunga solo 25 chilometri.
And how wide is it at its widest point? (End hau uaid iz it et its uaidest point?) - E quanto è larga nel suo punto più ampio?
The lake covers an area of nearly 600 square kilometres. (De leik kavers en eria ov nirli siks handred skuer kilomiters) - Il lago copre una superficie di quasi 600 chilometri quadrati.
Is this the longest river in the region? (Iz dis de longest river in de riijion?) - È questo il fiume più lungo della regione?
The two cities are connected by a railway line that's over 200 kilometres long. (De tu sitiz ar konektid bai e reiluei lain dets ouver tu handred kilomiters long) - Le due città sono collegate da una linea ferroviaria lunga più di 200 chilometri.
Which direction are we heading in? (Uic direkscion ar ui heding in?) - In che direzione stiamo andando?
We're travelling west, towards the coast. (Uir treveling uest, teuordz de koust) - Stiamo viaggiando verso ovest, in direzione della costa.
The border runs along the middle of the mountain range. (De border ranz elong de midel ov de maunten reinj) - Il confine corre lungo la parte centrale della catena montuosa.
This region is much flatter than the area around it. (Dis riijion iz mac fleter den di eria eraund it) - Questa regione è molto più pianeggiante rispetto alla zona circostante.
How far can you see from the top of the hill? (Hau far ken iu sii from de top ov de hil?) - Quanto lontano si può vedere dalla cima della collina?
On a clear day, you can see mountains more than 100 kilometres away. (On e kliir dei, iu ken sii mauntens mor den uan handred kilomiters euei) - In una giornata limpida si possono vedere montagne a più di 100 chilometri di distanza.
Why does this area have such a dry climate? (Uai daz dis eria hev sac e drai klaimet?) - Perché questa zona ha un clima così secco?
It's much colder here because we're at a higher altitude. (Its mac koulder hier bikoz uir et e haier eltitiud) - Qui fa molto più freddo perché siamo a un'altitudine maggiore.
How far is the nearest airport from the city centre? (Hau far iz de nierest erport from de siti senter?) - Quanto dista l'aeroporto più vicino dal centro città?
The airport is roughly 18 kilometres outside the city. (Di erport iz rafli eitin kilomiters autsaid de siti) - L'aeroporto si trova a circa 18 chilometri fuori dalla città.
Look at how the coastline curves around the bay. (Luk et hau de koustlain kervz eraund de bei) - Guarda come la costa curva intorno alla baia.
This desert stretches for thousands of kilometres. (Dis dezert strecciz for thauzends ov kilomiters) - Questo deserto si estende per migliaia di chilometri.
Which ocean is on the other side of the continent? (Uic oucen iz on di ader said ov de kontinent?) - Quale oceano si trova dall'altra parte del continente?
The Pacific Ocean is much larger than the Atlantic. (De Pesifik Ouschen iz mac larjer den di Etlentik) - L'Oceano Pacifico è molto più grande dell'Atlantico.
How many kilometres does the river flow through this country? (Hau meni kilomiters daz de river flou thru dis kantri?) - Per quanti chilometri scorre il fiume attraverso questo paese?
It forms part of the border for almost 400 kilometres. (It forms part ov de border for olmost for handred kilomiters) - Forma parte del confine per quasi 400 chilometri.
This map shows the population density in different areas. (Dis map sciouz de popiuleiscion densiti in difrent eriaz) - Questa carta mostra la densità della popolazione nelle diverse zone.
Why are most of the big cities near the coast? (Uai ar moust ov de big sitiz niir de koust?) - Perché la maggior parte delle grandi città si trova vicino alla costa?
The road climbs more than 1,000 metres over a distance of 15 kilometres. (De roud klaimz mor den uan thauzend miiters ouver e distens ov fiftiin kilomiters) - La strada sale di oltre 1.000 metri su una distanza di 15 chilometri.
This part of the country is almost completely covered by forest. (Dis part ov de kantri iz olmost kompliitli kaverd bai forest) - Questa parte del paese è quasi completamente ricoperta da foreste.
What's the shortest route between the two towns? (Uots de sciortest ruut bituin de tu taunz?) - Qual è il percorso più breve tra le due città?
According to the map, it's just over 40 kilometres. (Ecording tu de map, its giast ouver forti kilomiters) - Secondo la carta, sono poco più di 40 chilometri.
The population is concentrated around the major urban areas. (De popiuleiscion iz konsentreitid eraund de meijor erben eriaz) - La popolazione è concentrata intorno alle principali aree urbane.
If you look closely, you can see a small island about ten kilometres offshore. (If iu luk klousli, iu ken sii e smol ailand ebaut ten kilomiters ofscior) - Se guardi attentamente, puoi vedere una piccola isola a circa dieci chilometri dalla costa.
The climate changes quite a lot as you travel inland. (De klaimet ceingjiz kuait e lot ez iu trevel inland) - Il clima cambia parecchio man mano che ci si sposta verso l'interno.
We'd have to travel nearly 500 kilometres to reach the other side. (Uid hev tu trevel nirli faiv handred kilomiters tu riic di ader said) - Dovremmo percorrere quasi 500 chilometri per raggiungere l'altra parte.
This map makes it much easier to understand the geography of the region. (Dis map meiks it mac iizier tu anderstend de giografi ov de riijion) - Questa carta rende molto più facile capire la geografia della regione.
Do you think wars are ever really unavoidable? (Du iu think uorz ar ever rili anevóidebel?) - Pensi che le guerre siano mai davvero inevitabili?
I find it hard to understand how people can still choose war after seeing its consequences. (Ai faind it hard tu anderstend hau piipel ken stil ciuuz uor after siing its konsekuenses) - Faccio fatica a capire come si possa ancora scegliere la guerra dopo averne visto le conseguenze.
Maybe there are times when both sides genuinely believe they're defending themselves. (Meibi der ar taimz uen bouth saidz gieniuinli biliiv deir difending demselvz) - Forse ci sono situazioni in cui entrambe le parti credono sinceramente di difendersi.
But that doesn't mean ordinary people want to fight. (Bat det dazent miin ordineri piipel uont tu fait) - Ma questo non significa che la gente comune voglia combattere.
It's usually civilians who end up paying the highest price. (Its iugiueli sivilienz hu end ap peiing de haigest prais) - Di solito sono i civili a pagare il prezzo più alto.
Do you think religion has caused more wars than it's prevented? (Du iu think rilijion hez kozd mor uorz den its priventid?) - Pensi che la religione abbia causato più guerre di quante ne abbia impedite?
I'm not sure you can blame an entire religion for what some people do in its name. (Aim not sciur iu ken bleim en entaiar rilijion for uot sam piipel du in its neim) - Non credo si possa dare la colpa a un'intera religione per ciò che alcune persone fanno in suo nome.
People often mix political power with religious beliefs. (Piipel ofen miks political pauer uid rilijes biliifs) - Spesso le persone mescolano il potere politico con le convinzioni religiose.
A religion can be peaceful even if someone uses it to justify violence. (E rilijion ken bi piisful iiven if samuan iuziz it tu giastifai vaiolens) - Una religione può essere pacifica anche se qualcuno la usa per giustificare la violenza.
I think it's important to separate faith from the actions of governments. (Ai think its importent tu separeit feith from di ekscions ov gaverments) - Penso sia importante distinguere la fede dalle azioni dei governi.
Why do you think people become so convinced that their side is right? (Uai du iu think piipel bikam sou konvinst det deir said iz rait?) - Perché secondo te le persone si convincono così tanto di avere ragione?
Fear probably has a lot to do with it. (Fiir probabli hez e lot tu du uid it) - Probabilmente la paura ha molto a che fare con questo.
Once people are afraid, it's much easier to make them see others as enemies. (Uans piipel ar efreid, its mac iizier tu meik dem sii aders ez enimiz) - Quando le persone hanno paura, è molto più facile far vedere loro gli altri come nemici.
I don't think most people wake up wanting to hate someone they've never met. (Ai dount think moust piipel ueik ap uonting tu heit samuan deiv never met) - Non credo che la maggior parte delle persone si svegli volendo odiare qualcuno che non ha mai incontrato.
Propaganda can completely change the way people see a conflict. (Propaganda ken kompliitli ceingj de uei piipel sii e konflikt) - La propaganda può cambiare completamente il modo in cui le persone vedono un conflitto.
You can believe in your own religion without thinking everyone else is wrong. (Iu ken biliiv in ior oun rilijion uidaut thinking evriuan els iz rong) - Puoi credere nella tua religione senza pensare che tutti gli altri abbiano torto.
That's probably one of the hardest things for people to accept. (Dets probabli uan ov de hardest things for piipel tu eksept) - Probabilmente è una delle cose più difficili da accettare per le persone.
Different religions have more in common than people sometimes realise. (Difrent rilijions hev mor in komon den piipel samtaimz ri elaiz) - Religioni diverse hanno più cose in comune di quanto a volte si pensi.
Most of them have some idea of compassion and helping others. (Moust ov dem hev sam aidea ov kompescion end helping aders) - La maggior parte di esse contiene qualche idea di compassione e di aiuto verso gli altri.
But religious beliefs can also be very personal. (Bat rilijes biliifs ken olsou bi veri personal) - Ma le convinzioni religiose possono anche essere molto personali.
I don't think anyone should be forced to believe something. (Ai dount think eniuan sciud bi forst tu biliiv samthing) - Non credo che qualcuno debba essere costretto a credere in qualcosa.
At the same time, people should be free to practise their faith. (Et de seim taim, piipel sciud bi frii tu prektis deir feith) - Allo stesso tempo, le persone dovrebbero essere libere di praticare la propria fede.
As long as they're not harming anyone, I don't see the problem. (Ez long ez deir not harming eniuan, ai dount sii de problem) - Finché non fanno del male a nessuno, non vedo quale sia il problema.
Do you think peace is possible without some kind of compromise? (Du iu think piis iz posibel uidaut sam kaind ov kompromais?) - Pensi che la pace sia possibile senza una qualche forma di compromesso?
Probably not, because neither side can get everything it wants. (Probabli not, bikoz naider said ken get evriting it uonts) - Probabilmente no, perché nessuna delle due parti può ottenere tutto ciò che vuole.
The difficult part is convincing people that compromise isn't the same as surrender. (De difikelt part iz konvinsing piipel det kompromais iznt de seim ez serender) - La parte difficile è convincere le persone che il compromesso non equivale alla resa.
History shows how quickly a local dispute can become a much bigger conflict. (Histori sciouz hau kuikli e loukel disp(i)ut ken bikam e mac biger konflikt) - La storia mostra quanto rapidamente una disputa locale possa trasformarsi in un conflitto molto più grande.
And once other countries get involved, things can become incredibly complicated. (End uans ader kantriz get involvd, things ken bikam inkredibli komplikeitid) - E una volta che vengono coinvolti altri paesi, le cose possono diventare incredibilmente complicate.
I wonder how much ordinary people actually know about the causes of a war. (Ai uonder hau mac ordineri piipel ektciueli nou ebaut de koziz ov e uor) - Mi chiedo quanto la gente comune sappia davvero delle cause di una guerra.
Sometimes the same event is described completely differently depending on who's telling the story. (Samtaimz de seim event iz discribd kompliitli difrentli dipending on huuz teling de stori) - A volte lo stesso evento viene raccontato in modo completamente diverso a seconda di chi lo racconta.
That's why learning history from different sources matters. (Dets uai lerning histori from difrent sorsiz materz) - Ecco perché è importante studiare la storia da fonti diverse.
You need to question what you're being told, especially during a conflict. (Iu niid tu kuescion uot ior biing tould, espe-scieli diuring e konflikt) - Bisogna mettere in discussione ciò che ci viene raccontato, soprattutto durante un conflitto.
I don't think religion alone explains why wars happen. (Ai dount think rilijion eloun ekspleinz uai uorz hepen) - Non credo che la religione da sola spieghi perché scoppiano le guerre.
Money, territory and political power can be just as important. (Mani, teritori end political pauer ken bi giast ez importent) - Il denaro, il territorio e il potere politico possono essere altrettanto importanti.
Sometimes religion is just the excuse rather than the real reason. (Samtaimz rilijion iz giast di ekskius rader den de riil riizen) - A volte la religione è solo un pretesto e non la vera ragione.
Do you think people would behave differently if they met those on the other side? (Du iu think piipel ud biheiv difrentli if de met dhouz on di ader said?) - Pensi che le persone si comporterebbero diversamente se incontrassero quelle dall'altra parte?
It's harder to hate someone once you've actually talked to them. (Its harder tu heit samuan uans iuv ektciueli tokt tu dem) - È più difficile odiare qualcuno dopo averci realmente parlato.
Imagine having a neighbour with completely different beliefs and getting along perfectly well. (Imagin heving e neiber uid kompliitli difrent biliifs end geting elong perfektli uel) - Immagina di avere un vicino con convinzioni completamente diverse e andare perfettamente d'accordo.
That happens every day without anyone thinking it's unusual. (Det hepens evri dei uidaut eniuan thinking its aniujiuel) - Succede ogni giorno senza che nessuno lo consideri strano.
Maybe that's what we should focus on more. (Meibi dets uot ui sciud foukes on mor) - Forse è proprio questo su cui dovremmo concentrarci di più.
People don't have to agree on everything to live together peacefully. (Piipel dount hev tu egrii on evriting tu liv tugheder piisfuli) - Le persone non devono essere d'accordo su tutto per vivere insieme pacificamente.
I think curiosity is a lot more useful than fear. (Ai think kiuriositi iz e lot mor iusful den fiir) - Penso che la curiosità sia molto più utile della paura.
If you don't understand another person's beliefs, ask them instead of assuming. (If iu dount anderstend enader persons biliifs, ask dem insted ov esuming) - Se non capisci le convinzioni di un'altra persona, chiediglielo invece di dare per scontato.
You might be surprised by how much you actually have in common. (Iu mait bi serpraizd bai hau mac iu ektciueli hev in komon) - Potresti sorprenderti di quanto avete realmente in comune.
In the end, nobody benefits from an endless cycle of violence. (In di end, noubodi benefits from en endless saikel ov vaiolens) - Alla fine, nessuno trae beneficio da un ciclo infinito di violenza.
I'd rather see people arguing over ideas than fighting over them. (Aid rader sii piipel arguing ouver aideaz den faiting ouver dem) - Preferirei vedere le persone discutere sulle idee piuttosto che combattere per esse.
Even when we strongly disagree, we can still talk to each other. (Iiven uen ui strongli disagrii, ui ken stil tok tu iic ader) - Anche quando siamo fortemente in disaccordo, possiamo comunque parlare gli uni con gli altri.
That's probably a good rule for any family discussion. (Dets probabli e gud ruul for eni femili discascion) - Probabilmente è una buona regola per qualsiasi discussione in famiglia.
Do you think we'd be better off with a dog or a cat? (Du iu think uid bi beter of uid e dog or e ket?) - Secondo te sarebbe meglio prendere un cane o un gatto?
I've always thought cats were easier to look after. (Aiv olueiz thot kets uer iizier tu luk after) - Ho sempre pensato che i gatti fossero più facili da accudire.
A dog needs much more attention during the day. (E dog niidz mac mor etencen diuring de dei) - Un cane ha bisogno di molta più attenzione durante il giorno.
Would you really have enough time to take a dog for two long walks every day? (Uud iu rili hev i-naf taim tu teik e dog for tu long uoks evri dei?) - Avresti davvero abbastanza tempo per portare un cane a fare due lunghe passeggiate ogni giorno?
I wouldn't want to keep an exotic animal just because it looks unusual. (Ai udent uont tu kiip en egzotik enimal giast bikoz it luks aniujiuel) - Non vorrei tenere un animale esotico solo perché ha un aspetto insolito.
Some exotic animals have very specific needs that are hard to meet at home. (Sam egzotik enimelz hev veri spesifik niidz det ar hard tu miit et houm) - Alcuni animali esotici hanno esigenze molto specifiche che sono difficili da soddisfare in casa.
What about keeping a rabbit as a pet? (Uot ebaut kiiping e rebit ez e pet?) - Che ne dici di tenere un coniglio come animale domestico?
Rabbits need more space than people sometimes realise. (Rebits niid mor speis den piipel samtaimz ri elaiz) - I conigli hanno bisogno di più spazio di quanto a volte si pensi.
I think a parrot would be fascinating, but they can live for decades. (Ai think e peret ud bi fesineiting, bat dei ken liv for dekeidz) - Penso che un pappagallo sarebbe affascinante, ma può vivere per decenni.
That's a huge commitment for the whole family. (Dets e hiug komitment for de houl femili) - È un impegno enorme per tutta la famiglia.
Would you be comfortable having a snake in the house? (Uud iu bi kamfterbel heving e sneik in de haus?) - Ti sentiresti a tuo agio ad avere un serpente in casa?
I'd probably spend the first few weeks checking where it was. (Aid probabli spend de ferst fiu uiiks ceking uer it uoz) - Probabilmente passerei le prime settimane a controllare dove si trova.
Not all snakes are dangerous, though. (Not ol sneiks ar deinjeres, dou) - Però non tutti i serpenti sono pericolosi.
True, but I'd still want to know exactly what species it is. (Tru, bat aid stil uont tu nou egzaktli uot spiisciz it iz) - Vero, ma vorrei comunque sapere esattamente di quale specie si tratta.
I've seen people keeping reptiles in specially designed enclosures. (Aiv siin piipel kiiping reptailz in spescielli dizaind inkloujers) - Ho visto persone che tengono rettili in appositi terrari.
You can't just put an exotic animal in a normal cage and expect it to be fine. (Iu kent giast put en egzotik enimal in e normal keij end ekspekt it tu bi fain) - Non puoi semplicemente mettere un animale esotico in una gabbia normale e aspettarti che stia bene.
What would happen if the temperature in the enclosure dropped too low? (Uot ud hepen if de tempricer in di inkloujer dropt tu lou?) - Cosa succederebbe se la temperatura nel terrario scendesse troppo?
Some reptiles need heat lamps running for several hours a day. (Sam reptailz niid hiit lamps raning for several auerz e dei) - Alcuni rettili hanno bisogno di lampade riscaldanti accese per diverse ore al giorno.
I'd rather have an animal that can comfortably live in our climate. (Aid rader hev en enimal det ken kamfterbli liv in auer klaimet) - Preferirei un animale che possa vivere tranquillamente nel nostro clima.
Do you think fish count as easy pets? (Du iu think fisc kaunt ez iizi pets?) - Pensi che i pesci siano animali domestici facili da gestire?
They're quiet, but the tank still needs regular cleaning. (Deir kuaiet, bat de tenk stil niidz regiuler kliining) - Sono silenziosi, ma l'acquario ha comunque bisogno di essere pulito regolarmente.
And you have to be careful not to overfeed them. (End iu hev tu bi kerful not tu ouverfiid dem) - E bisogna stare attenti a non dar loro troppo cibo.
Imagine having a small aquarium with twenty colourful fish. (Imagin heving e smol ekuieriem uid tuenti kalerful fisc) - Immagina di avere un piccolo acquario con venti pesci colorati.
That would actually look pretty nice in the living room. (Det ud ektciueli luk priti nais in de living ruum) - In realtà starebbe piuttosto bene in soggiorno.
I'd love to have a tortoise, but they can live for a very long time. (Aid lav tu hev e tortes, bat dei ken liv for e veri long taim) - Mi piacerebbe avere una tartaruga, ma può vivere davvero molto a lungo.
We'd have to think about who would look after it if we went away for two weeks. (Uid hev tu think ebaut hu ud luk after it if ui went euei for tu uiiks) - Dovremmo pensare a chi se ne occuperebbe se partissimo per due settimane.
That's one reason I'd choose a cat. (Dets uan riizen aid ciuuz e ket) - È uno dei motivi per cui sceglierei un gatto.
Cats can usually be more independent when you're out during the day. (Kets ken iugiueli bi mor indipendent uen ior aut diuring de dei) - I gatti di solito possono essere più indipendenti quando sei fuori durante il giorno.
But dogs are much more social and active. (Bat dogz ar mac mor souscial end ektiv) - Ma i cani sono molto più socievoli e attivi.
Maybe we should choose the pet based on our routine rather than what looks cutest. (Meibi ui sciud ciuuz de pet beist on auer rutin rader den uot luks kiutest) - Forse dovremmo scegliere l'animale in base alla nostra routine, invece di scegliere quello più carino.
That's probably the most sensible way to look at it. (Dets probabli de moust sensibel uei tu luk et it) - Probabilmente è il modo più sensato di considerare la questione.
Would you ever consider adopting an older animal? (Uud iu ever konsider edopting en oulder enimal?) - Prenderesti mai in considerazione l'adozione di un animale anziano?
Sure, older pets need homes too. (Sciur, oulder pets niid houmz tu) - Certo, anche gli animali anziani hanno bisogno di una casa.
I think adopting is better than buying when possible. (Ai think edopting iz beter den baiing uen posibel) - Penso che, quando possibile, sia meglio adottare che comprare.
What about animals that have been rescued from the wild? (Uot ebaut enimelz det hev bin reskiud from de uaild?) - E gli animali che sono stati salvati dalla natura?
They may need specialist care for the rest of their lives. (Dei mei niid spescielist ker for de rest ov deir laivz) - Potrebbero aver bisogno di cure specialistiche per il resto della loro vita.
I wouldn't keep a wild animal as a pet unless it was genuinely necessary. (Ai udent kiip e uaild enimal ez e pet anles it uoz gieniuinli neseseri) - Non terrei un animale selvatico come animale domestico, a meno che non fosse davvero necessario.
Wild animals belong in their natural environment whenever possible. (Uaild enimelz bilong in deir neciurel envaiorment uenever posibel) - Gli animali selvatici dovrebbero vivere nel loro ambiente naturale quando possibile.
Have you ever seen a fox up close? (Hev iu ever siin e foks ap klous?) - Hai mai visto una volpe da vicino?
They're beautiful, but that doesn't mean they'd make good pets. (Deir biutiful, bat det dazent miin deid meik gud pets) - Sono bellissime, ma questo non significa che sarebbero buoni animali domestici.
What would you do if a wild animal came into the garden? (Uot ud iu du if e uaild enimal keim intu de garden?) - Cosa faresti se un animale selvatico entrasse in giardino?
I'd keep my distance and let it leave on its own. (Aid kiip mai distens end let it liiv on its oun) - Terrei le distanze e gli lascerei andare via da solo.
I don't think we should feed wild animals just because they're cute. (Ai dount think ui sciud fiid uaild enimelz giast bikoz deir kiut) - Non credo dovremmo dare da mangiare agli animali selvatici solo perché sono carini.
It can make them dependent on humans and cause problems later. (It ken meik dem dipendent on iumenz end koz problemz leiter) - Può renderli dipendenti dagli esseri umani e creare problemi in seguito.
In the end, having a pet is a responsibility, not just something fun to do. (In di end, heving e pet iz e risponsibiliti, not giast samthing fan tu du) - Alla fine, avere un animale domestico è una responsabilità, non solo qualcosa di divertente da fare.
Right, today we're looking at maps of Europe (rait, tudei uir lukin et mèps ov Iuroup) - Bene, oggi guardiamo le mappe dell'Europa
Can anyone point out Italy on the map (kèn enìuan point aut Itali on dhë mèp) - Qualcuno sa indicare l'Italia sulla mappa
Does anyone know the capital of France (daz enìuan nou dhë kèpitël ov Frèns) - Qualcuno sa qual è la capitale della Francia
How far is it from here to London (hau far iz it from hir tu Landën) - Quanto dista da qui a Londra
It's about two thousand kilometres away (its abaut tuu thauzënd kilomiitërz ëuei) - Sono circa duemila chilometri di distanza
That's roughly a two hour flight (dhèts rafli a tuu auer flait) - Sono all'incirca due ore di volo
Can you find the equator on this globe (kèn yu faind dhë ikueitër on dhis gloub) - Riesci a trovare l'equatore su questo mappamondo
What's the difference between longitude and latitude (uats dhë difërëns bituìn longitiuud end lètitiuud) - Qual è la differenza tra longitudine e latitudine
This mountain range stretches for hundreds of miles (dhis mauntën reingi strechiz for handrëds ov mailz) - Questa catena montuosa si estende per centinaia di miglia
Which is the longest river in the world (uic iz dhë longëst rivër in dhë uorld) - Qual è il fiume più lungo del mondo
It's roughly six and a half thousand kilometres long (its rafli siks end a haf thauzënd kilomiitërz long) - È lungo circa seimilacinquecento chilometri
Can someone measure the distance using the scale (kèn samuan meziur dhë distëns iuzin dhë skeil) - Qualcuno può misurare la distanza usando la scala
Every centimetre on this map equals fifty kilometres (evri sentimiitër on dhis mèp iikuëlz fifti kilomiitërz) - Ogni centimetro su questa mappa equivale a cinquanta chilometri
That desert covers a massive area (dhèt dezërt kavërz a mèsiv eëria) - Quel deserto copre un'area enorme
How many countries border Germany (hau meni kantriz bordër Giërmani) - Quanti paesi confinano con la Germania
Can you name the seas surrounding Italy (kèn yu neim dhë siiz saraundin Itali) - Sapete nominare i mari che circondano l'Italia
This island's actually further than it looks (dhis ailënd iz èkchueli fërdhër dhèn it luks) - Quest'isola in realtà è più lontana di quanto sembri
It only looks close because of the map projection (it ounli luks klous bikoz ov dhë mèp projekscion) - Sembra vicina solo per via della proiezione della mappa
What's the population of that country roughly (uats dhë popiuleiscion ov dhèt kantri rafli) - Qual è più o meno la popolazione di quel paese
It's home to about eighty million people (its houm tu abaut eiti miliën piipël) - Ospita circa ottanta milioni di persone
Can anyone tell me what a peninsula is (kèn enìuan tel mi uat a peninsiula iz) - Qualcuno sa dirmi cos'è una penisola
Italy's actually shaped a bit like a boot (Italiz èkchueli sceipt a bit laik a buut) - L'Italia in realtà è a forma di stivale
How high is the tallest mountain in Europe (hau hai iz dhë tolëst mauntën in Iuroup) - Quant'è alta la montagna più alta d'Europa
It's just over four thousand metres tall (its giast ouvër for thauzënd miitërz tol) - È alta poco più di quattromila metri
That volcano's still active, believe it or not (dhèt volkeinouz stil èktiv, biliiv it or not) - Quel vulcano è ancora attivo, che ci crediate o no
Which ocean is the biggest one (uic ouscën iz dhë bighëst uan) - Qual è l'oceano più grande
The Pacific's bigger than all the continents combined (dhë Pesifiks bighër dhèn ol dhë kontinënts kombaind) - Il Pacifico è più grande di tutti i continenti messi insieme
Can you work out the distance between these two cities (kèn yu uork aut dhë distëns bituìn dhiiz tuu sitiz) - Riesci a calcolare la distanza tra queste due città
They're only about three hundred kilometres apart (dheir ounli abaut thrii handrëd kilomiitërz apart) - Sono distanti solo circa trecento chilometri
That's roughly a three hour drive (dhèts rafli a thrii auer draiv) - Sono circa tre ore di macchina
Which countries actually don't have a coastline (uic kantriz èkchueli dount hev a koustlain) - Quali paesi non hanno effettivamente una costa
Switzerland's completely landlocked, for example (Suitsërlëndz kompliitli lèndlokt, for ekzèmpël) - La Svizzera, per esempio, è completamente senza sbocco sul mare
Can anyone guess how deep that trench is (kèn enìuan ghes hau diip dhèt trench iz) - Qualcuno sa indovinare quanto è profonda quella fossa
It's nearly eleven kilometres at its deepest point (its nirli ilevën kilomiitërz et its diipëst point) - È profonda quasi undici chilometri nel suo punto più profondo
What's the time difference between here and Japan (uats dhë taim difërëns bituìn hir end Giapèn) - Qual è la differenza di fuso orario tra qui e il Giappone
It's about eight hours ahead of us (its abaut eit auerz ëhed ov as) - È circa otto ore avanti rispetto a noi
Look at how close Spain and Morocco actually are (luk et hau klous Spein end Moroukou èkchueli ar) - Guardate quanto sono in realtà vicini la Spagna e il Marocco
There's only about fourteen kilometres between them (dhers ounli abaut fortiin kilomiitërz bituìn dhem) - Ci sono solo circa quattordici chilometri tra di loro
Which continent has the most countries (uic kontinënt hez dhë moust kantriz) - Quale continente ha più paesi
Can you list the countries that make up Scandinavia (kèn yu list dhë kantriz dhèt meik ap Skandineivia) - Riuscite a elencare i paesi che formano la Scandinavia
That lake's much bigger than it looks on the map (dhèt leik iz mach bighër dhèn it luks on dhë mèp) - Quel lago è molto più grande di quanto sembri sulla mappa
How far is it from the coast to the capital (hau far iz it from dhë koust tu dhë kèpitël) - Quanto dista la costa dalla capitale
It's a fair distance, about four hundred kilometres (its a fer distëns, abaut for handrëd kilomiitërz) - È una bella distanza, circa quattrocento chilometri
Can someone explain why some countries are landlocked (kèn samuan eksplèin uai sam kantriz ar lèndlokt) - Qualcuno può spiegare perché alcuni paesi sono senza sbocco sul mare
What's the shortest route between these two points (uats dhë scortëst ruut bituìn dhiiz tuu points) - Qual è il percorso più breve tra questi due punti
Flying's obviously faster, but the train's more scenic (flaiin iz obviësli fèstër, bat dhë treinz mor siinik) - Volare è ovviamente più veloce, ma il treno è più panoramico
Can anyone tell me the difference between a strait and a channel (kèn enìuan tel mi dhë difërëns bituìn a streit end a chènël) - Qualcuno sa dirmi la differenza tra uno stretto e un canale
That mountain pass is closed for most of the winter (dhèt mauntën pès iz klouzd for moust ov dhë uintër) - Quel passo di montagna è chiuso per gran parte dell'inverno
How many kilometres of coastline does Italy have (hau meni kilomiitërz ov koustlain daz Itali hev) - Quanti chilometri di costa ha l'Italia
It's got over seven thousand kilometres of coastline (its gat ouvër sevën thauzënd kilomiitërz ov koustlain) - Ha oltre settemila chilometri di costa
Right, that's enough for today, we'll continue next lesson (rait, dhèts inaf for tudei, uìl kontiniuu nekst lesën) - Bene, basta così per oggi, continueremo alla prossima lezione
We will watch the match at a friend's house. (ui uil uocc de mecc et e frendz haus) — Guarderemo la partita a casa di un amico.
`;

/* ================================================================
   PARSING — trasforma il testo grezzo in un array di oggetti
   { en: "...", it: "..." } pronto all'uso in ingfile.html.
   ================================================================ */
const FRASI_ING = FRASI_ING_RAW
  .split('\n')
  .map(riga => riga.trim())
  .filter(riga => riga.length > 0)
  .map(riga => {
    // Accetta sia l'em-dash " — " sia il trattino normale " - " come separatore
    let sep = ' — ';
    let idx = riga.indexOf(sep);
    if (idx === -1) {
      sep = ' - ';
      idx = riga.indexOf(sep);
    }
    if (idx === -1) return null;
    return {
      en: riga.slice(0, idx).trim(),
      it: riga.slice(idx + sep.length).trim()
    };
  })
  .filter(coppia => coppia !== null);
