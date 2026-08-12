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
