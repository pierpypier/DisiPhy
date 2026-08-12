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
What would you like for breakfast? — Cosa vuoi per colazione?
What time does the train leave? — A che ora parte il treno?
Can you pass me the salt, please? — Puoi passarmi il sale, per favore?
Do you have any plans for the weekend? — Hai programmi per il weekend?
How much is this, please? — Quanto costa questo, per favore?
Can I have the bill, please? — Posso avere il conto, per favore?
Where did you park the car? — Dove hai parcheggiato la macchina?
Do you know where the nearest pharmacy is? — Sai dov'è la farmacia più vicina?
What's the weather like today? — Che tempo fa oggi?
Can you turn down the music, please? — Puoi abbassare la musica, per favore?
Shall we go for a walk after dinner? — Andiamo a fare due passi dopo cena?
Can you help me carry these bags? — Puoi aiutarmi a portare queste borse?
What time do you usually wake up? — A che ora ti svegli di solito?
Do you want tea or coffee? — Vuoi tè o caffè?
Can you pick up some milk on your way home? — Puoi prendere del latte tornando a casa?
Would you like a hand with dinner? — Vuoi una mano con la cena?
Excuse me, is this seat taken? — Scusi, questo posto è occupato?
Have you finished your homework? — Hai finito i compiti?
What time does the pharmacy close? — A che ora chiude la farmacia?
We'll talk about it later, okay? — Ne parliamo più tardi, va bene?
Wake up, it's time to go to school! — Sveglia, è ora di andare a scuola!
Did you brush your teeth? — Ti sei lavato i denti?
Who's taking the dog out tonight? — Chi porta fuori il cane stasera?
Have you done your homework yet? — Hai già fatto i compiti?
Can you help me fold the laundry? — Puoi aiutarmi a piegare il bucato?
Who left the lights on? — Chi ha lasciato le luci accese?
Shall we order pizza tonight? — Stasera ordiniamo la pizza?
Can you check if the door is locked? — Puoi controllare se la porta è chiusa a chiave?
Who used my charger? — Chi ha usato il mio caricabatterie?
Can you turn down the volume, please? — Puoi abbassare il volume, per favore?
Could you please turn off the lights before leaving? — Potresti spegnere le luci prima di uscire, per favore?
Could you repeat that more slowly, please? — Potrebbe ripeterlo più lentamente, per favore?
We missed the train, so we took the next one. — Abbiamo perso il treno, quindi abbiamo preso il successivo.
There is a pharmacy near the hotel. — C'è una farmacia vicino all'hotel.
I left my passport in the room. — Ho lasciato il passaporto in camera.
What time does the shop open tomorrow? — A che ora apre il negozio domani?
We were having dinner when you called. — Stavamo cenando quando hai chiamato.
I will send the documents this afternoon. — Manderò i documenti questo pomeriggio.
The ticket machine is not working. — La macchinetta dei biglietti non funziona.
She has lived here since 2020. — Vive qui dal 2020.
Did you see my glasses on the desk? — Hai visto i miei occhiali sulla scrivania?
We are going to visit the archaeological site tomorrow. — Domani visiteremo il sito archeologico.
I have never travelled by night train. — Non ho mai viaggiato su un treno notturno.
I forgot my umbrella at the office. — Ho dimenticato il mio ombrello in ufficio.
We have been waiting for the doctor for twenty minutes. — Stiamo aspettando il medico da venti minuti.
Could I have a window seat, please? — Potrei avere un posto vicino al finestrino, per favore?
The museum was closed when we arrived. — Il museo era chiuso quando siamo arrivati.
I need to buy a charger for my phone. — Devo comprare un caricabatterie per il mio telefono.
My daughter will be home after school. — Mia figlia sarà a casa dopo la scuola.
We usually have breakfast before leaving home. — Di solito facciamo colazione prima di uscire di casa.
The train has already left the platform. — Il treno è già partito dal binario.
I was reading when the lights went out. — Stavo leggendo quando è andata via la luce.
Please keep this receipt in case you need to return the item. — Conservi questo scontrino nel caso debba restituire l'articolo.
Tomorrow we are meeting our friends at the station. — Domani incontreremo i nostri amici alla stazione.
She has just finished her homework. — Ha appena finito i compiti.
How long does the journey take by bus? — Quanto dura il viaggio in autobus?
I will be back before dinner. — Tornerò prima di cena.
Could you show me where the entrance is? — Potrebbe mostrarmi dov'è l'ingresso?
I left my bag on the train, but I remember the carriage number. — Ho lasciato la borsa sul treno, ma ricordo il numero della carrozza.
We need to change trains at the next station. — Dobbiamo cambiare treno alla prossima stazione.
I ordered this yesterday, but it has not arrived yet. — Ho ordinato questo ieri, ma non è ancora arrivato.
She was waiting outside when the shop opened. — Stava aspettando fuori quando il negozio ha aperto.
I have never seen such a beautiful building. — Non ho mai visto un edificio così bello.
If the weather is good tomorrow, we will go for a walk. — Se domani il tempo sarà bello, andremo a fare una passeggiata.
Do you know whether this bus stops near the museum? — Sai se questo autobus si ferma vicino al museo?
I forgot to charge my phone before leaving home. — Ho dimenticato di caricare il telefono prima di uscire di casa.
We were looking for a quiet restaurant near the station. — Cercavamo un ristorante tranquillo vicino alla stazione.
Please tell me if the meeting starts at nine. — Per favore, dimmi se la riunione inizia alle nove.
He has already sent the email to the office. — Ha già mandato l'email all'ufficio.
I will take the underground because the roads are busy. — Prenderò la metropolitana perché le strade sono trafficate.
We arrived early, so we had coffee before the lesson. — Siamo arrivati presto, quindi abbiamo preso un caffè prima della lezione.
Can I pay by card, or do you need cash? — Posso pagare con la carta o serve contante?
Can you recommend a good restaurant nearby? — Puoi consigliarmi un buon ristorante qui vicino?
Did you remember to lock the front door? — Ti sei ricordato di chiudere a chiave la porta d'ingresso?
Could you tell me which platform the train leaves from? — Potrebbe dirmi da quale binario parte il treno?
Have you packed your suitcase yet? — Hai già fatto la valigia?
Can you switch off the oven, please? — Puoi spegnere il forno, per favore?
Could you water the garden tonight? — Potresti innaffiare il giardino stasera?
Where can I find a supermarket around here? — Dove posso trovare un supermercato da queste parti?
Do you need a hand with the suitcases? — Hai bisogno di una mano con le valigie?
Can you check if we still have any sugar? — Puoi controllare se abbiamo ancora zucchero?
Is there a discount for students? — C'è uno sconto per studenti?
Could you validate my ticket, please? — Potrebbe convalidare il mio biglietto, per favore?
I need to return this item, do you have the receipt? — Devo restituire questo articolo, ha lo scontrino?
Can we reschedule the meeting to Thursday? — Possiamo spostare la riunione a giovedì?
Did the teacher give you any homework today? — La maestra ti ha dato compiti oggi?
Have you seen the house keys anywhere? — Hai visto le chiavi di casa da qualche parte?
Can you keep an eye on the kids for a minute? — Puoi tenere d'occhio i bambini per un minuto?
Is breakfast included in the price of the room? — La colazione è inclusa nel prezzo della camera?
Could you tell me the wifi password? — Potrebbe dirmi la password del wifi?
Can you tell me how to get to the city center? — Puoi dirmi come arrivare al centro città?
Have you already handed in your homework? — Hai già consegnato i compiti?
Do you have anything in a smaller size? — Avete qualcosa in una taglia più piccola?
Did you turn off the lights before leaving? — Hai spento le luci prima di uscire?
Can you check the departure time again? — Puoi controllare di nuovo l'orario di partenza?
Is there a charge for extra luggage? — C'è un costo per il bagaglio in eccesso?
Could you save me a seat, please? — Potresti tenermi un posto, per favore?
Can you tell me where the fitting room is? — Puoi dirmi dov'è il camerino?
Have you fed the fish this morning? — Hai dato da mangiare ai pesci stamattina?
Have you checked your email today? — Hai controllato la posta elettronica oggi?
Can you help me set up the new printer? — Puoi aiutarmi a configurare la nuova stampante?
Is there a lift in this building? — C'è un ascensore in questo palazzo?
Could you turn up the heating a bit? — Potresti alzare un po' il riscaldamento?
Can you show me the way to the station? — Puoi indicarmi la strada per la stazione?
Have you watered the plants today? — Hai innaffiato le piante oggi?
Do you have this jacket in another colour? — Avete questa giacca in un altro colore?
Did you turn off the gas tap? — Hai chiuso il rubinetto del gas?
Can you check if there's still milk in the fridge? — Puoi controllare se c'è ancora latte in frigo?
Is there parking nearby? — C'è un parcheggio nelle vicinanze?
Could you switch the channel, please? — Potresti cambiare canale, per favore?
Can you help me carry the boxes upstairs? — Puoi aiutarmi a portare le scatole di sopra?
Did you turn off your alarm before the holidays? — Hai disattivato la sveglia prima delle vacanze?
Do you close for lunch? — Chiudete per la pausa pranzo?
Have you printed the concert tickets? — Hai stampato i biglietti per il concerto?
Can you turn the volume down, the baby is sleeping? — Puoi abbassare il volume, il bambino dorme?
Is there a pharmacy open on Sundays? — C'è una farmacia aperta la domenica?
She will travel to Rome next summer. — Lei viaggerà a Roma la prossima estate.
We visited the museum yesterday. — Abbiamo visitato il museo ieri.
He is doing his homework. — Lui sta facendo i compiti.
They will move to a new house next month. — Si trasferiranno in una nuova casa il mese prossimo.
I usually take the train to work. — Di solito prendo il treno per andare al lavoro.
Where is the nearest pharmacy? — Dov'è la farmacia più vicina?
My sister works in an office downtown. — Mia sorella lavora in un ufficio in centro.
We were watching a movie when the phone rang. — Stavamo guardando un film quando ha squillato il telefono.
Could you help me find this address? — Potrebbe aiutarmi a trovare questo indirizzo?
The children are playing in the garden. — I bambini stanno giocando in giardino.
I have already booked the hotel room. — Ho già prenotato la camera d'albergo.
She works as a teacher at the local school. — Lei lavora come insegnante nella scuola del quartiere.
We will meet at the station at six. — Ci incontreremo alla stazione alle sei.
He forgot his umbrella at home. — Ha dimenticato l'ombrello a casa.
I would like to try on this jacket. — Vorrei provare questa giacca.
The plane departs from gate twelve. — L'aereo parte dal gate dodici.
My parents are cooking dinner together. — I miei genitori stanno cucinando la cena insieme.
I need to renew my passport soon. — Devo rinnovare il passaporto presto.
The shop closes at eight in the evening. — Il negozio chiude alle otto di sera.
We are learning English at school this year. — Quest'anno stiamo imparando l'inglese a scuola.
He missed the last train home. — Ha perso l'ultimo treno per tornare a casa.
I will call you as soon as I arrive. — Ti chiamerò appena arrivo.
The family gathered for a birthday dinner. — La famiglia si è riunita per una cena di compleanno.
I have never been to London. — Non sono mai stato a Londra.
We are going shopping this afternoon. — Questo pomeriggio andiamo a fare shopping.
She had already left when I arrived. — Lei era già partita quando sono arrivato.
Can you close the door, it's cold in here. — Puoi chiudere la porta, fa freddo qui.
They are renovating their kitchen. — Stanno ristrutturando la cucina.
I will finish this report by Friday. — Finirò questo rapporto entro venerdì.
We took the wrong bus this morning. — Stamattina abbiamo preso l'autobus sbagliato.
My brother is studying for his exams. — Mio fratello sta studiando per gli esami.
Excuse me, does this train stop at the airport? — Mi scusi, questo treno ferma all'aeroporto?
The waiter recommended the fish of the day. — Il cameriere ha consigliato il pesce del giorno.
We will visit our grandparents this weekend. — Questo fine settimana andremo dai nonni.
He always arrives late to meetings. — Arriva sempre tardi alle riunioni.
Could you lower the price a little? — Potrebbe abbassare un po' il prezzo?
I have lost my keys again. — Ho perso di nuovo le chiavi.
The plane was delayed because of the storm. — L'aereo ha subito un ritardo a causa del temporale.
We are packing our suitcases for the trip. — Stiamo facendo le valigie per il viaggio.
She will start a new job next Monday. — Lei inizierà un nuovo lavoro lunedì prossimo.
I need directions to the town hall. — Ho bisogno di indicazioni per il municipio.
My colleagues are preparing the presentation. — I miei colleghi stanno preparando la presentazione.
We used to walk to school every day. — Andavamo a scuola a piedi ogni giorno.
Is there a fitting room nearby? — C'è un camerino qui vicino?
He fixed the car by himself. — Ha riparato l'auto da solo.
The kids will play football in the park. — I bambini giocheranno a calcio nel parco.
I forgot to lock the front door. — Ho dimenticato di chiudere a chiave la porta d'ingresso.
I need to make a doctor's appointment. — Devo prendere un appuntamento dal medico.
We will celebrate her birthday at a restaurant. — Festeggeremo il suo compleanno al ristorante.
He has been working here for ten years. — Lavora qui da dieci anni.
Could you send me the invoice by email? — Potrebbe inviarmi la fattura via email?
I am looking for a book about ancient history. — Sto cercando un libro sulla storia antica.
They will get married next spring. — Si sposeranno la prossima primavera.
We had dinner with our neighbors last night. — Ieri sera abbiamo cenato con i vicini di casa.
I usually go to the gym after work. — Di solito vado in palestra dopo il lavoro.
Is this seat taken? — Questo posto è occupato?
She is learning to play the piano. — Sta imparando a suonare il piano.
We will call a taxi to the airport. — Chiameremo un taxi per l'aeroporto.
I dropped my phone and broke the screen. — Mi è caduto il telefono e si è rotto lo schermo.
He is fixing the wifi connection. — Sta sistemando la connessione wifi.
We were stuck in traffic for an hour. — Siamo rimasti bloccati nel traffico per un'ora.
Could you water the plants while I'm away? — Potresti annaffiare le piante mentre sono via?
I will pick up the kids from school. — Andrò a prendere i bambini a scuola.
The bank is closed on Sundays. — La banca è chiusa la domenica.
We are planning a trip to the mountains. — Stiamo pianificando un viaggio in montagna.
He lost his job last month. — Ha perso il lavoro il mese scorso.
I need a haircut before the wedding. — Ho bisogno di un taglio di capelli prima del matrimonio.
She will send the package tomorrow morning. — Spedirà il pacco domani mattina.
We are cleaning the house before the guests arrive. — Stiamo pulendo la casa prima che arrivino gli ospiti.
I forgot my wallet at the restaurant. — Ho dimenticato il portafoglio al ristorante.
The weather will improve by the weekend. — Il tempo migliorerà entro il fine settimana.
He walks the dog every morning. — Porta a spasso il cane ogni mattina.
I have to return this book to the library. — Devo restituire questo libro in biblioteca.
We will paint the fence this weekend. — Questo fine settimana tingeremo la staccionata.
She was cooking when the phone rang. — Stava cucinando quando ha squillato il telefono.
Can you show me the way to the nearest station? — Puoi indicarmi la strada per la stazione più vicina?
They are building a new bridge downtown. — Stanno costruendo un nuovo ponte in centro.
I will submit the application tomorrow. — Invierò la domanda domani.
We missed the connecting flight. — Abbiamo perso il volo di coincidenza.
My cousin is visiting us next week. — Mio cugino ci verrà a trovare la prossima settimana.
Excuse me, where can I buy a bus ticket? — Mi scusi, dove posso comprare un biglietto dell'autobus?
The teacher explained the lesson again. — L'insegnante ha spiegato di nuovo la lezione.
I was sleeping when the alarm went off. — Stavo dormendo quando è suonata la sveglia.
We will repaint the living room next month. — Ridipingeremo il soggiorno il mese prossimo.
He always checks his email before breakfast. — Controlla sempre le email prima di colazione.
Could you repeat that, please? — Potresti ripetere, per favore?
I have broken my glasses again. — Ho rotto di nuovo gli occhiali.
The concert was cancelled due to rain. — Il concerto è stato annullato a causa della pioggia.
We are organizing a surprise party for him. — Stiamo organizzando una festa a sorpresa per lui.
She will graduate next June. — Lei si laureerà a giugno prossimo.
I need to charge my phone before we leave. — Devo caricare il telefono prima di uscire.
My colleagues are working on a new project. — I miei colleghi stanno lavorando a un nuovo progetto.
We used to spend summers at the seaside. — Passavamo le estati al mare.
Is there a supermarket around the corner? — C'è un supermercato dietro l'angolo?
He repaired the roof after the storm. — Ha riparato il tetto dopo la tempesta.
The students will present their projects on Friday. — Gli studenti presenteranno i loro progetti venerdì.
I forgot to turn off the oven. — Ho dimenticato di spegnere il forno.
I need to withdraw some cash from the ATM. — Devo prelevare dei contanti al bancomat.
We will watch the sunset from the terrace. — Guarderemo il tramonto dalla terrazza.
She has just finished her shift at the hospital. — Ha appena finito il turno in ospedale.
Could you turn on the heating, please? — Potresti accendere il riscaldamento, per favore?
They are painting the fence in the garden. — Stanno tinteggiando la staccionata in giardino.
I will train for the marathon this year. — Mi allenerò per la maratona quest'anno.
We rented a car for the weekend. — Abbiamo noleggiato un'auto per il fine settimana.
My grandmother is knitting a scarf. — Mia nonna sta lavorando a maglia una sciarpa.
Excuse me, is this seat free? — Mi scusi, questo posto è libero?
He was jogging in the park this morning. — Stamattina stava facendo jogging nel parco.
We will attend the concert next Friday. — Andremo al concerto venerdì prossimo.
I dropped my keys down the drain. — Mi sono caduto le chiavi nel tombino.
She is preparing for a job interview. — Si sta preparando per un colloquio di lavoro.
We were camping when the storm started. — Eravamo in campeggio quando è iniziato il temporale.
Could you feed the cat this evening? — Potresti dar da mangiare al gatto stasera?
I will return the rented equipment tomorrow. — Restituirò l'attrezzatura noleggiata domani.
The library closes early on Saturdays. — La biblioteca chiude presto il sabato.
We are planting tomatoes in the garden. — Stiamo piantando pomodori in giardino.
He broke his arm while skiing. — Si è rotto un braccio sciando.
I need new batteries for the remote. — Ho bisogno di pile nuove per il telecomando.
She will publish her first novel next year. — Pubblicherà il suo primo romanzo l'anno prossimo.
We are decorating the house for Christmas. — Stiamo addobbando la casa per Natale.
The train was ten minutes late this morning. — Il treno stamattina è arrivato con dieci minuti di ritardo.
He volunteers at the shelter on weekends. — Fa volontariato al rifugio nei weekend.
I have to renew my gym membership. — Devo rinnovare l'abbonamento in palestra.
We will host my in-laws for dinner tonight. — Stasera ospiteremo i miei suoceri per cena.
She had finished the exam before the bell rang. — Aveva finito l'esame prima che suonasse la campanella.
Could you switch off the printer, please? — Potresti spegnere la stampante, per favore?
They are installing new windows in the house. — Stanno installando nuove finestre in casa.
I will apply for a promotion next month. — Farò domanda per una promozione il mese prossimo.
We booked a table for our anniversary. — Abbiamo prenotato un tavolo per il nostro anniversario.
My uncle is teaching me how to fish. — Mio zio mi sta insegnando a pescare.
Excuse me, is this the queue for the ticket office? — Mi scusi, è questa la fila per la biglietteria?
He was working from home when the internet went down. — Stava lavorando da casa quando è saltata la connessione internet.
We will join a language course in September. — A settembre inizieremo un corso di lingua.
I spilled coffee on my laptop this morning. — Stamattina ho versato il caffè sul portatile.
She is negotiating a new contract with her employer. — Sta negoziando un nuovo contratto con il datore di lavoro.
We were hiking when it started to rain heavily. — Stavamo facendo trekking quando ha iniziato a piovere forte.
Could you separate the recycling before Friday? — Potresti fare la raccolta differenziata prima di venerdì?
I will return your umbrella tomorrow. — Ti restituirò l'ombrello domani.
The plumber is fixing the leak in the bathroom. — L'idraulico sta riparando la perdita in bagno.
We are considering moving abroad next year. — Stiamo pensando di trasferirci all'estero l'anno prossimo.
He sprained his ankle during the match. — Si è slogato la caviglia durante la partita.
I need to update my insurance policy. — Devo aggiornare la mia polizza assicurativa.
She will host a video call with the whole team. — Organizzerà una videochiamata con tutto il team.
We are borrowing our neighbor's ladder. — Stiamo prendendo in prestito la scala del vicino.
Is there a discount for students at the museum? — C'è uno sconto per studenti al museo?
He commutes to work by bicycle every day. — Va al lavoro in bicicletta ogni giorno.
The electrician will come to check the fuse box. — L'elettricista verrà a controllare il quadro elettrico.
I need to see a dentist about this toothache. — Devo andare dal dentista per questo mal di denti.
We will celebrate their retirement next Friday. — Festeggeremo il loro pensionamento venerdì prossimo.
She had already paid the bill before I offered. — Aveva già pagato il conto prima che mi offrissi io.
Could you check the oil level in the car? — Potresti controllare il livello dell'olio in macchina?
They are learning to drive this summer. — Questa estate stanno imparando a guidare.
I will resign from my job next month. — Mi dimetterò dal lavoro il mese prossimo.
We are waiting for a package to arrive. — Stiamo aspettando l'arrivo di un pacco.
My sister is learning photography as a hobby. — Mia sorella sta imparando la fotografia come hobby.
Excuse me, has the mail arrived yet? — Mi scusi, è già arrivata la posta?
He was baking a cake when the oven stopped working. — Stava preparando una torta quando il forno ha smesso di funzionare.
We will move to a new city next year. — Ci trasferiremo in una nuova città l'anno prossimo.
I broke down on the highway this morning. — Stamattina mi si è rotta l'auto in autostrada.
She is coaching the youth football team. — Allena la squadra giovanile di calcio.
We were camping when the tent collapsed. — Eravamo in campeggio quando la tenda è crollata.
Could you cancel my streaming subscription? — Potresti annullare il mio abbonamento allo streaming?
I will pay the electricity bill tomorrow. — Pagherò la bolletta della luce domani.
The doctor prescribed some new medication. — Il medico ha prescritto un nuovo farmaco.
We are practicing for the school concert. — Ci stiamo esercitando per il concerto scolastico.
He forgot his phone charger at the hotel. — Ha dimenticato il caricabatterie del telefono in hotel.
I need to change my phone plan. — Devo cambiare il mio piano telefonico.
She will start painting the fence tomorrow. — Domani inizierà a dipingere la staccionata.
We are cleaning out the garage this weekend. — Questo fine settimana stiamo svuotando il garage.
My laptop crashed while I was saving the file. — Il portatile si è bloccato mentre salvavo il file.
The library book is already overdue. — Il libro della biblioteca è già in ritardo.
He is preparing the garden for winter. — Sta preparando il giardino per l'inverno.
I have to pick up a prescription at the pharmacy. — Devo ritirare una ricetta in farmacia.
We will attend a parent-teacher meeting tomorrow. — Domani parteciperemo a un colloquio con gli insegnanti.
She had cleaned the whole house before the guests arrived. — Aveva pulito tutta la casa prima che arrivassero gli ospiti.
Could you check in for us at the hotel? — Potresti fare il check-in per noi in hotel?
They are organizing a charity event next month. — Stanno organizzando un evento di beneficenza il mese prossimo.
I will take the car to the mechanic this week. — Porterò la macchina dal meccanico questa settimana.
We are planning a road trip along the coast. — Stiamo pianificando un viaggio in auto lungo la costa.
My nephew is working on a school project about volcanoes. — Mio nipote sta lavorando a un progetto scolastico sui vulcani.
Excuse me, could I see the menu, please? — Mi scusi, potrei vedere il menu, per favore?
He was walking the dog when it started to rain. — Stava portando a spasso il cane quando ha iniziato a piovere.
We will take the cat to the vet on Monday. — Porteremo il gatto dal veterinario lunedì.
I returned the shoes because they were too small. — Ho restituito le scarpe perché erano troppo piccole.
She is preparing lunch for the whole family. — Sta preparando il pranzo per tutta la famiglia.
We were shopping online when the website crashed. — Stavamo facendo acquisti online quando il sito si è bloccato.
Could you help me move this sofa? — Potresti aiutarmi a spostare questo divano?
I will join the book club next week. — La prossima settimana entrerò nel club del libro.
The flight was delayed because of bad weather. — Il volo ha subito un ritardo a causa del maltempo.
We are hosting a family reunion this summer. — Questa estate ospiteremo una riunione di famiglia.
He complained to the waiter about the cold soup. — Si è lamentato con il cameriere per la zuppa fredda.
I need to buy tickets for the festival. — Devo comprare i biglietti per il festival.
She will renovate the bathroom next spring. — Rinnoverà il bagno la prossima primavera.
We are viewing an apartment this afternoon. — Questo pomeriggio andiamo a vedere un appartamento.
My colleague followed up on the job interview. — Il mio collega ha fatto un follow-up sul colloquio di lavoro.
I packed a lunch for the hike. — Ho preparato un pranzo al sacco per l'escursione.
The waiting room was full when we arrived. — La sala d'attesa era piena quando siamo arrivati.
I need to renew my driver's license this year. — Devo rinnovare la patente quest'anno.
We will attend an art exhibition on Saturday. — Sabato andremo a una mostra d'arte.
She had already installed the new software before the meeting. — Aveva già installato il nuovo software prima della riunione.
Could you set up the router for me? — Potresti configurarmi il router?
They are hiring new staff for the summer season. — Stanno assumendo nuovo personale per la stagione estiva.
I will transfer some money to my savings account. — Trasferirò del denaro sul mio conto di risparmio.
We are exchanging currency before the trip. — Stiamo cambiando valuta prima del viaggio.
My colleague is attending a training course this week. — Il mio collega sta seguendo un corso di formazione questa settimana.
Excuse me, where is the checkout desk? — Mi scusi, dov'è il banco per il check-out?
He was assembling the furniture when the screws ran out. — Stava montando il mobile quando sono finite le viti.
We will donate old clothes to charity. — Doneremo vestiti vecchi in beneficenza.
I filed an insurance claim after the accident. — Ho presentato una richiesta di risarcimento dopo l'incidente.
She is volunteering at the animal shelter this weekend. — Questo fine settimana fa volontariato al canile.
We were rehearsing when the fire alarm went off. — Stavamo provando quando è scattato l'allarme antincendio.
Could you order a birthday cake for tomorrow? — Potresti ordinare una torta di compleanno per domani?
I will rent a car for the business trip. — Noleggerò un'auto per il viaggio di lavoro.
The technician repaired my phone screen. — Il tecnico ha riparato lo schermo del mio telefono.
We are taking a cooking class next month. — Il mese prossimo faremo un corso di cucina.
He installed a new security camera at the entrance. — Ha installato una nuova telecamera di sicurezza all'ingresso.
I need to buy travel insurance before we leave. — Devo comprare un'assicurazione di viaggio prima di partire.
She will join a language exchange group. — Entrerà in un gruppo di scambio linguistico.
We are moving boxes into the new apartment. — Stiamo portando gli scatoloni nel nuovo appartamento.
My brother subscribed to a monthly book box. — Mio fratello si è abbonato a una scatola mensile di libri.
The doctor scheduled a check-up for next week. — Il medico ha fissato una visita di controllo per la prossima settimana.
Could I check in earlier than three o'clock? — Potrei fare il check-in prima delle tre?
Where is the nearest ATM to withdraw cash? — Dov'è il bancomat più vicino per prelevare contanti?
Could I have extra towels for the bathroom? — Potrei avere altri asciugamani per il bagno?
Is room service available twenty-four hours a day? — Il servizio in camera è disponibile ventiquattr'ore su ventiquattr'ore?
I would like to book a table for two at eight o'clock. — Vorrei prenotare un tavolo per due alle otto.
Could you put the sauce on the side, please? — Potrebbe mettere la salsa a parte, per favore?
Do you have any vegetarian options on the menu? — Avete opzioni vegetariane nel menu?
I am allergic to nuts, does this dish contain any? — Sono allergico alla frutta a guscio, questo piatto ne contiene?
Can I pay the bill separately, please? — Posso pagare il conto separatamente, per favore?
Where can I find fresh fruits and vegetables? — Dove posso trovare frutta e verdura fresca?
Excuse me, where are the dairy products located? — Scusi, dove si trovano i prodotti lattiero-caseari?
Do I need to weigh the fruit before going to the checkout? — Devo pesare la frutta prima di andare alla cassa?
Is this item on sale this week? — Questo articolo è in offerta questa settimana?
I forgot my shopping bag in the car. — Ho dimenticato la borsa della spesa in macchina.
Could you send me the calendar invite for the meeting? — Potresti inviarmi l'invito al calendario per la riunione?
I am currently working on the quarterly sales report. — Al momento sto lavorando al rapporto vendite trimestrale.
Let us take a five-minute break before continuing. — Facciamo una pausa di cinque minuti prima di continuare.
Please review the attached document before tomorrow morning. — Per favore, rivedi il documento allegato entro domani mattina.
I will be out of the office until next Monday. — Sarò fuori ufficio fino a lunedì prossimo.
Can we talk about this over coffee later? — Posiamo parlarne davanti a un caffè più tardi?
I really appreciate your help with this project. — Apprezzo davvero il tuo aiuto con questo progetto.
I am running a bit late, see you in ten minutes. — Sono un po' in ritardo, ci vediamo tra dieci minuti.
Let me know when you arrive safely. — Fammi sapere quando arrivi a destinazione sano e salvo.
It was really nice catching up with you today. — È stato davvero bello fare due chiacchiere con te oggi.
What time is dinner going to be ready? — A che ora sarà pronta la cena?
Please remember to take out the rubbish tonight. — Per favore ricordati di portare fuori la spazzatura stasera.
Could someone answer the doorbell, please? — Qualcuno può andare ad aprire al campanello, per favore?
Do not forget to empty the dishwasher after lunch. — Non dimenticare di svuotare la lavastoviglie dopo pranzo.
Who left the tap running in the bathroom? — Chi ha lasciato il rubinetto aperto in bagno?
Is there a direct train to the city center from here? — C'è un treno diretto per il centro città da qui?
How much does a day pass for public transport cost? — Quanto costa un biglietto giornaliero per i trasporti pubblici?
I would like to request a late check-out tomorrow. — Vorrei richiedere un check-out ritardato per domani.
Can you store our luggage until our flight leaves? — Puoi tenere i nostri bagagli fino alla partenza del nostro volo?
Could you call a taxi for us tomorrow at seven? — Potrebbe chiamarci un taxi domani alle sette?
Excuse me, is this the end of the line for this bus? — Scusi, è capolinea per questo autobus?
I need to buy a SIM card for my mobile phone. — Devo comprare una scheda SIM per il mio cellulare.
Is the tap water safe to drink here? — L'acqua del rubinetto è potabile qui?
Could you show me how this coffee machine works? — Potresti mostrarmi come funziona questa macchina del caffè?
I am looking for the nearest bakery in this neighborhood. — Sto cercando la panetteria più vicina in questo quartiere.
Can I get a receipt for this transaction, please? — Posso avere una ricevuta per questa transazione, per favore?
We need to buy some paper towels and laundry detergent. — Dobbiamo comprare dei tovaglioli di carta e del detersivo per il bucato.
Could you mute your microphone during the presentation? — Potresti disattivare il microfono durante la presentazione?
I will share my screen so everyone can see the slides. — Condividerò il mio schermo così tutti potranno vedere le diapositive.
Do you have time for a quick phone call this afternoon? — Hai tempo per una breve telefonata questo pomeriggio?
I am sorry, I did not catch your name earlier. — Scusa, non ho capito il tuo nome prima.
Let us order dessert after we finish our main course. — Ordiniamo il dolce dopo aver finito il piatto principale.
Please put your shoes near the front door. — Per favore metti le scarpe vicino alla porta d'ingresso.
Could you set the table for four people, please? — Potresti apparecchiare la tavola per quattro persone, per favore?
Don't forget to charge your laptop for school tomorrow. — Non dimenticare di caricare il portatile per la scuola domani.
Have a wonderful trip and take plenty of photos! — Fai un buon viaggio e scatta tante foto!
Is there an iron and an ironing board in the room? — C'è un ferro e un'asse da stiro in camera?
Could we get a table by the window? — Potremmo avere un tavolo vicino alla finestra?
Is this product suitable for sensitive skin? — Questo prodotto è adatto alle pelli sensibili?
I am looking for the bakery department. — Sto cercando il reparto panetteria.
Do you have this shirt in a medium size? — Avete questa camicia in una taglia M?
Could you send me the feedback by the end of the day? — Potresti inviarmi il feedback entro la fine della giornata?
Let us set up a quick call to discuss the project. — Fissiamo una breve chiamata per discutere del progetto.
I will be working remotely tomorrow morning. — Domani mattina lavorerò da remoto.
Thank you for inviting us to dinner tonight. — Grazie per averci invitato a cena stasera.
Can you send me your location on the map? — Puoi inviarmi la tua posizione sulla mappa?
Please put your dishes in the dishwasher. — Per favore metti i tuoi piatti nella lavastoviglie.
Who is going to clean the kitchen tonight? — Chi pulirà la cucina stasera?
Do not forget to take your umbrella with you. — Non dimenticare di portare l'ombrello con te.
Can you turn down the air conditioning a little? — Puoi abbassare un po' l'aria condizionata?
Is there a gas station near the entrance? — C'è una stazione di servizio vicino all'ingresso?
Where can I buy a ticket for the museum? — Dove posso comprare un biglietto per il museo?
Does this hotel have a swimming pool on the roof? — Questo hotel ha una piscina sul tetto?
What time does the breakfast buffet start? — A che ora inizia il buffet della colazione?
I would like to pay with contactless payment. — Vorrei pagare con il pagamento contactless.
Is this milk fresh or long-life? — Questo latte è fresco o a lunga conservazione?
Can you help me find the olive oil aisle? — Puoi aiutarmi a trovare la corsia dell'olio d'oliva?
I need to print this document before the meeting. — Devo stampare questo documento prima della riunione.
Could you clarify what you mean by that? — Potresti chiarire cosa intendi con questo?
I will send you the updated invoice shortly. — Ti invierò la fattura aggiornata a breve.
We need to order more office supplies. — Dobbiamo ordinare altre forniture per l'ufficio.
Are you free to hang out this afternoon? — Sei libero di uscire questo pomeriggio?
Take your time, there is no hurry. — Fai con calma, non c'è fretta.
I am so glad we finally managed to meet. — Sono così contento che siamo finalmente riusciti a incontrarci.
Could you help me lay the carpet in the hallway? — Potresti aiutarmi a stendere il tappeto nel corridoio?
Make sure to feed the cat before leaving. — Assicurati di dare da mangiare al gatto prima di uscire.
Can you grab a loaf of bread from the bakery? — Puoi prendere una pagnotta di pane in panetteria?
Is there a designated smoking area outside? — C'è un'area fumatori riservata all'esterno?
Could I get a glass of tap water, please? — Potrei avere un bicchiere d'acqua del rubinetto, per favore?
We would like to order two coffees to go. — Vorremmo ordinare due caffè da portare via.
Is this seafood fresh or frozen? — Questo pesce è fresco o surgelato?
Do you have a loyalty card for this shop? — Ha una carta fedeltà per questo negozio?
The projector in the meeting room is not working. — Il proiettore nella sala riunioni non funziona.
Please reply to all participants in the email chain. — Per favore rispondi a tutti i partecipanti nella catena di email.
I am taking a short lunch break now. — Adesso faccio una breve pausa pranzo.
Give me a call as soon as you are free. — Fammi una telefonata non appena sei libero.
I will text you the address right away. — Ti manderò subito l'indirizzo via messaggio.
Could you pass me the remote control, please? — Potresti passarmi il telecomando, per favore?
Let us turn off the TV and go to sleep. — Spegniamo la TV e andiamo a dormire.
Do we have enough garbage bags in the house? — Abbiamo abbastanza sacchetti della spazzatura in casa?
Where is the nearest tourist information office? — Dov'è l'ufficio di informazioni turistiche più vicino?
Is the swimming pool heated in the winter? — La piscina è riscaldata in inverno?
Can I get a tax-free refund form? — Posso avere un modulo per il rimborso tax-free?
Where can I find gluten-free products here? — Dove posso trovare prodotti senza glutine qui?
Please sign the attendance sheet before leaving. — Per favore firma il foglio presenze prima di uscire.
I hope you have a great rest of the day! — Spero che tu abbia un buon proseguimento di giornata!
Is there a luggage storage area after check-out? — C'è un deposito bagagli dopo il check-out?
Does the room have a safe for valuables? — La camera ha una cassaforte per gli oggetti di valore?
Could you give us two key cards for the room? — Potrebbe darci due chiavi elettroniche per la camera?
What time does the airport shuttle leave? — A che ora parte la navetta per l'aeroporto?
Is parking included in the reservation? — Il parcheggio è incluso nella prenotazione?
Could we have a quiet table in the corner? — Potremmo avere un tavolo tranquillo nell'angolo?
Is service included in the final bill? — Il servizio è incluso nel conto finale?
Do you have sparkling or still water? — Avete acqua frizzante o naturale?
Could you bring us some extra napkins, please? — Potrebbe portarci altri tovaglioli, per favore?
Is this table reserved for someone else? — Questo tavolo è riservato per qualcun altro?
Where can I find paper towels and tissues? — Dove posso trovare i tovaglioli di carta e i fazzoletti?
Do you have fresh seafood today? — Avete pesce fresco oggi?
Can I pay with contactless on my phone? — Posso pagare con il contactless dal telefono?
Is there an offer on these products today? — C'è un'offerta su questi prodotti oggi?
Could you give me a paper bag, please? — Potrebbe darmi un sacchetto di carta, per favore?
Please send me the meeting minutes when possible. — Per favore inviami il verbale della riunione appena possibile.
I will be away from my desk for twenty minutes. — Sarò lontano dalla mia scrivania per venti minuti.
Let us discuss this during our weekly sync. — Discutiamone durante il nostro allineamento settimanale.
Can you forward that email to the team? — Puoi inoltrare quell'email al team?
I need to update the project timeline today. — Devo aggiornare la tempistica del progetto oggi.
Who is going to walk the dog this afternoon? — Chi porterà a spasso il cane questo pomeriggio?
Please take off your shoes at the entrance. — Per favore togliti le scarpe all'ingresso.
Can you set the alarm for seven o'clock? — Puoi impostare la sveglia per le sette?
Do not leave your wet towel on the bed. — Non lasciare il tuo asciugamano bagnato sul letto.
We need to buy more toilet paper and soap. — Dobbiamo comprare altra carta igienica e sapone.
Are you feeling any better today? — Ti senti un po' meglio oggi?
Thank you so much for the wonderful evening. — Grazie mille per la splendida serata.
Let me know if you need any help moving. — Fammi sapere se hai bisogno di aiuto con il trasloco.
Give me a shout when you arrive at the station. — Fammi un fischio quando arrivi in stazione.
I am really looking forward to seeing you again. — Non vedo l'ora di rivederti.
My phone battery is almost completely dead. — La batteria del mio telefono è quasi del tutto scarica.
Is there a post office near this street? — C'è un ufficio postale vicino a questa strada?
The lift is temporarily out of service. — L'ascensore è temporaneamente fuori servizio.
Could you tell me where the restrooms are? — Potrebbe dirmi dove sono i bagni?
I think I left my jacket in the car. — Penso di aver lasciato la giacca in macchina.
Which line should I take to get to the museum? — Quale linea dovrei prendere per andare al museo?
Is there a connection to the city center? — C'è una coincidenza per il centro città?
Do I need to validate this ticket before boarding? — Devo convalidare questo biglietto prima di salire?
How long is the delay for the train? — Quanto dura il ritardo del treno?
Could you open the window a little bit? — Potresti aprire un po' la finestra?
I will double check the numbers and let you know. — Ricontrollerò i numeri e ti farò sapere.
Could you share the link to the shared folder? — Potresti condividere il link alla cartella condivisa?
We need to finalize the budget by tomorrow. — Dobbiamo finalizzare il budget entro domani.
I am currently in a meeting, I will call you back. — Al momento sono in riunione, ti richiamo dopo.
Thank you for your prompt response to my request. — Grazie per la sollecita risposta alla mia richiesta.
Do you have an extension cord I can borrow? — Hai una prolunga che posso prendere in prestito?
Please lock the balcony door before going to bed. — Per favore chiudi la porta del balcone prima di andare a dormire.
Can you help me move this heavy box? — Puoi aiutarmi a spostare questa scatola pesante?
I need to make a copy of my identity card. — Devo fare una copia della mia carta d'identità.
Have a safe journey home and see you soon! — Buon viaggio di ritorno e a presto!
We will watch the match at a friend's house. — Guarderemo la partita a casa di un amico.
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
    const sep = ' — ';
    const idx = riga.indexOf(sep);
    if (idx === -1) return null;
    return {
      en: riga.slice(0, idx).trim(),
      it: riga.slice(idx + sep.length).trim()
    };
  })
  .filter(coppia => coppia !== null);
