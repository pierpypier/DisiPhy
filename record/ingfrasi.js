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
Could you recommend a local dish to try? — Potrebbe consigliarmi un piatto locale da provare?
Is there a hairdryer in the bathroom? — C'è un asciugacapelli in bagno?
What is the check-out time in the morning? — A che ora è il check-out la mattina?
Could I have some extra pillows, please? — Potrei avere dei cuscini extra, per favore?
Does the room have air conditioning and heating? — La stanza ha l'aria condizionata e il riscaldamento?
Can I make a reservation for tomorrow evening? — Posso fare una prenotazione per domani sera?
Is tap water okay or should I buy bottled water? — L'acqua del rubinetto va bene o dovrei comprare acqua in bottiglia?
Could you bring us the dessert menu? — Potrebbe portarci il menu dei dolci?
We would like to split the bill, please. — Vorremmo dividere il conto, per favore.
Do you have any sugar-free options available? — Avete opzioni senza zucchero disponibili?
Where are the frozen foods located? — Dove si trovano i cibi surgelati?
Is there a bakery section in this store? — C'è un reparto panetteria in questo negozio?
Can I get a plastic bag for these items? — Posso avere una busta di plastica per questi articoli?
Do you accept mobile payments here? — Accettate pagamenti dallo smartphone qui?
Excuse me, is this trolley free to use? — Scusi, questo carrello è libero da usare?
I am sending you the link for the video call. — Ti sto inviando il link per la videochiamata.
Please let me know your availability for next week. — Per favore fammi sapere la tua disponibilità per la prossima settimana.
I need to reschedule our appointment to Friday. — Devo spostare il nostro appuntamento a venerdì.
Could you mute your microphone when not speaking? — Potresti disattivare il microfono quando non parli?
Let us discuss the details during the meeting. — Discutiamo i dettagli durante la riunione.
What would you like to watch on TV tonight? — Cosa vorresti guardare in TV stasera?
Could you help me unload the groceries from the car? — Puoi aiutarmi a scaricare la spesa dalla macchina?
Don't forget to water the flowers on the balcony. — Non dimenticare di annaffiare i fiori sul balcone.
Who is going to take out the recycling today? — Chi porta fuori la raccolta differenziata oggi?
Is dinner ready or can I help with anything? — La cena è pronta o posso aiutare in qualcosa?
It was great seeing you after all this time. — È stato bello vederti dopo tutto questo tempo.
Give me a call whenever you get home. — Fammi una telefonata ogni volta che arrivi a casa.
I hope you have a safe flight back home. — Spero che tu faccia un buon volo di ritorno a casa.
Would you like to grab a quick coffee with me? — Ti andrebbe di prendere un caffè al volo con me?
Let me know if you need anything else from me. — Fammi sapere se hai bisogno di qualcos'altro da parte mia.
Where is the nearest bus stop to the center? — Dov'è la fermata dell'autobus più vicina per il centro?
Is there a taxi rank outside the station? — C'è una stazione dei taxi fuori dalla stazione?
How far is the hotel from the beach? — Quanto dista l'hotel dalla spiaggia?
Can I buy tickets directly on the bus? — Posso comprare i biglietti direttamente sull'autobus?
Is this seat reserved for elderly passengers? — Questo posto è riservato ai passeggeri anziani?
Where can I find a pharmacy open late tonight? — Dove posso trovare una farmacia aperta fino a tarda notte?
Could you tell me where the nearest bank is? — Potrebbe dirmi dov'è la banca più vicina?
Is there a free Wi-Fi network in this area? — C'è una rete Wi-Fi gratuita in questa zona?
What time does the shopping center close on Saturdays? — A che ora chiude il centro commerciale il sabato?
I need to buy a plug adapter for my electronics. — Devo comprare un adattatore per le mie apparecchiature elettroniche.
Could you lower your voice a bit, please? — Potresti abbassare un po' la voce, per favore?
Please remember to lock the front door when leaving. — Per favore ricordati di chiudere a chiave la porta d'ingresso quando esci.
Can you pass me the salt and pepper, please? — Puoi passarmi il sale e il pepe, per favore?
I am going to take a quick shower before dinner. — Vado a fare una doccia veloce prima di cena.
Make sure to turn off the heating before going out. — Assicurati di spegnere il riscaldamento prima di uscire.
I will send you a text message as soon as I land. — Ti manderò un messaggio di testo non appena atterro.
We are planning a small weekend trip to the mountains. — Stiamo organizzando una breve gita nel fine settimana in montagna.
Thank you for your hospitality during our stay. — Grazie per la vostra ospitalità durante il nostro soggiorno.
Do you have any recommendations for a local guide? — Ha qualche raccomandazione per una guida locale?
Have a great weekend and enjoy your time off! — Buon fine settimana e goditi il tempo libero!
What time does the school assembly start? — A che ora inizia l'assemblea scolastica?
Please open your textbooks to page forty-five. — Per favore aprite i libri di testo a pagina quarantacinque.
Do we have a math test tomorrow morning? — Abbiamo un compito in classe di matematica domani mattina?
My teacher gave us a lot of homework for the weekend. — Il mio insegnante ci ha dato molti compiti per il fine settimana.
Where is the school library located? — Dove si trova la biblioteca della scuola?
I need to buy a new pencil case and a ruler. — Devo comprare un astuccio nuovo e un righello.
Who is responsible for cleaning the blackboard? — Chi è responsabile di pulire la lavagna?
The geography project is due next Monday. — Il progetto di geografia scade lunedì prossimo.
Did you study for the history oral exam? — Hai studiato per l'interrogazione di storia?
Can I borrow a blue pen, please? — Posso prendere in prestito una penna blu, per favore?
Can I try on these trousers in a larger size? — Posso provare questi pantaloni in una taglia più grande?
Are there any discounts on the winter collection? — Ci sono sconti sulla collezione invernale?
Where can I find the cash desk to pay? — Dove posso trovare la cassa per pagare?
I would like to return this shirt because it is damaged. — Vorrei restituire questa camicia perché è danneggiata.
Does this item come with a two-year warranty? — Questo articolo ha una garanzia di due anni?
Can I keep the hanger for the dress? — Posso tenere la gruccia per l'abito?
Is this store open on public holidays? — Questo negozio è aperto nei giorni festivi?
I am just looking around, thank you. — Sto solo dando un'occhiata, grazie.
Do you have a paper bag for my purchases? — Ha una busta di carta per i miei acquisti?
This pair of shoes is very comfortable to wear. — Questo paio di scarpe è molto comodo da indossare.
We rented a small cottage near the lake. — Abbiamo affittato un piccolo cottage vicino al lago.
I love sunbathing on the beach in the afternoon. — Amo prendere il sole in spiaggia nel pomeriggio.
Don't forget to put on sun cream before going out. — Non dimenticare di mettere la crema solare prima di uscire.
We booked a guided tour of the historic city center. — Abbiamo prenotato una visita guidata del centro storico.
The view from our balcony is absolutely breathtaking. — La vista dal nostro balcone è assolutamente mozzafiato.
What souvenir should we buy for our family? — Che souvenir dovremmo comprare per la nostra famiglia?
We are going snorkeling in the crystal clear water. — Faremo snorkeling nell'acqua cristallina.
I bought a postcard to send to my grandparents. — Ho comprato una cartolina da spedire ai miei nonni.
We spent the whole week relaxing by the pool. — Abbiamo passato l'intera settimana a rilassarci in piscina.
The local cuisine in this region is extraordinary. — La cucina locale di questa regione è straordinaria.
Please double check the attachment before sending the email. — Per favore ricontrolla l'allegato prima di inviare l'email.
I am going to grab a sandwich for lunch. — Vado a prendere un sandwich per pranzo.
Can you remind me to buy milk on the way home? — Puoi ricordarmi di comprare il latte strada facendo verso casa?
Let us take a short break to stretch our legs. — Facciamo una breve pausa per sgranchirci le gambe.
The traffic was terrible on the motorway this morning. — Il traffico era terribile in autostrada stamattina.
Could you please turn down the bright screen? — Potresti abbassare la luminosità dello schermo, per favore?
We need to replace the bulb in the hallway lamp. — Dobbiamo sostituire la lampadina della lampada in corridoio.
I left my sunglasses on the kitchen table. — Ho lasciato i miei occhiali da sole sul tavolo della cucina.
Are you coming to the party this Saturday evening? — Vieni alla festa questo sabato sera?
I will send you a text as soon as I arrive at the venue. — Ti manderò un messaggio appena arrivo sul posto.
What time does the flight start boarding? — A che ora inizia l'imbarco del volo?
Remember to bring your swimming suit and a towel. — Ricordati di portare il costume da bagno e un asciugamano.
Can I pay for my coffee with a credit card? — Posso pagare il mio caffè con la carta di credito?
My laptop charger is not working properly today. — Il caricabatterie del mio computer non funziona bene oggi.
Let us meet right in front of the fountain. — Incontriamoci proprio davanti alla fontana.
Do you want me to help you carry the luggage? — Vuoi che ti aiuti a portare i bagagli?
The supermarket down the street is open late tonight. — Il supermercato in fondo alla strada è aperto fino a tardi stasera.
We had such a great time together yesterday. — Siamo stati davvero bene insieme ieri.
Could you please pass me the bread basket? — Potresti passarmi il cestino del pane, per favore?
Have a safe journey and text me when you land. — Buon viaggio e mandami un messaggio quando atterri.
What is the deadline for this science project? — Qual è la scadenza per questo progetto di scienze?
Does this shop offer a discount for cash payments? — Questo negozio offre uno sconto per i pagamenti in contanti?
We rented a bicycle to explore the coastal village. — Abbiamo noleggiato una bicicletta per esplorare il villaggio costiero.
Could you please send me the password for the conference room? — Potresti inviarmi la password per la sala conferenze?
Is there a safe box inside the room? — C'è una cassaforte all'interno della camera?
Excuse me, where can I find the fresh pasta aisle? — Scusi, dove posso trovare la corsia della pasta fresca?
Could you help me wash the dishes after dinner? — Puoi aiutarmi a lavare i piatti dopo cena?
I missed the bus so I had to walk to school. — Ho perso l'autobus quindi ho dovuto camminare fino a scuola.
Can I return this item if I keep the receipt? — Posso restituire questo articolo se conservo lo scontrino?
We decided to extend our vacation by three days. — Abbiamo deciso di prolungare la nostra vacanza di tre giorni.
I have attached the meeting notes to this email. — Ho allegato le note della riunione a questa email.
Can we ask for extra blankets for the bed? — Possiamo chiedere delle coperte extra per il letto?
Is there a special deal on organic vegetables today? — C'è un'offerta speciale sulla verdura biologica oggi?
Don't forget to take out the bins before bedtime. — Non dimenticare di portare fuori i cestini prima di andare a dormire.
Our class is going on a field trip next month. — La nostra classe farà una gita scolastica il mese prossimo.
Where can I try on these shoes? — Dove posso provare queste scarpe?
The beach was quite crowded during the weekend. — La spiaggia era piuttosto affollata durante il fine settimana.
Let us schedule a follow-up meeting next Tuesday. — Fissiamo una riunione di aggiornamento martedì prossimo.
Could you please call us a cab to the train station? — Potrebbe chiamarci un taxi per la stazione ferroviaria?
Where are the canned goods located in this store? — Dove si trovano i prodotti in scatola in questo negozio?
Who left their jacket on the living room sofa? — Chi ha lasciato la giacca sul divano del soggiorno?
The teacher asked us to sit in pairs. — L'insegnante ci ha chiesto di sederci a coppie.
Do you have this dress in a different color? — Avete questo vestito in un altro colore?
We took a boat tour to see the sea caves. — Abbiamo fatto un tour in barca per vedere le grotte marine.
I will share the update with the team tomorrow. — Condividerò l'aggiornamento con il team domani.
What time is the swimming pool open until? — Fino a che ora è aperta la piscina?
Are these eggs free-range or organic? — Queste uova sono da allevamento all'aperto o biologiche?
Can you turn down the television volume, please? — Puoi abbassare il volume della televisione, per favore?
I forgot my gym kit in the school locker. — Ho dimenticato il mio kit da ginnastica nell'armadietto della scuola.
Do I get a gift card with this purchase? — Ricevo una carta regalo con questo acquisto?
We bought souvenirs for all our relatives back home. — Abbiamo comprato souvenir per tutti i nostri parenti a casa.
Please confirm your attendance by the end of the day. — Per favore conferma la tua presenza entro la fine della giornata.
Can I have a room with a double bed, please? — Posso avere una camera con letto matrimoniale, per favore?
Could you tell me if these tomatoes are locally grown? — Potrebbe dirmi se questi pomodori sono a chilometro zero?
We should hang up the laundry before it starts raining. — Dovremmo stendere il bucato prima che inizi a piovere.
Our principal gave an inspiring speech today. — Il nostro preside ha fatto un discorso ispiratore oggi.
Is there a queue for the fitting room? — C'è coda per il camerino?
We went hiking in the national park all morning. — Siamo andati a fare un'escursione nel parco nazionale per tutta la mattina.
I am currently out of office with limited email access. — Al momento sono fuori ufficio con accesso limitato all'email.
Could you recommend a good local pub nearby? — Potrebbe consigliarmi un buon pub locale qui vicino?
Where can I find olive oil and vinegar? — Dove posso trovare l'olio d'oliva e l'aceto?
Please remember to feed the dog before you leave. — Per favore ricordati di dare da mangiare al cane prima di uscire.
We need to buy a notebook for geography class. — Dobbiamo comprare un quaderno per la classe di geografia.
Do you offer gift wrapping for this item? — Offrite una confezione regalo per questo articolo?
The flight attendant asked us to fasten our seatbelts. — L'assistente di volo ci ha chiesto di allacciare le cinture di sicurezza.
Let us review the project deliverables together. — Rivediamo insieme i risultati attesi del progetto.
Could we get two extra keys for our room? — Potremmo avere due chiavi extra per la nostra stanza?
Is there a bakery counter in this supermarket? — C'è un banco panetteria in questo supermercato?
Let us organize a game night with the whole family. — Organizziamo una serata giochi con tutta la famiglia.
Enjoy your summer break and see you in September! — Goditi le vacanze estive e ci vediamo a settembre!
Do we have any homework for English class? — Abbiamo compiti per la classe di inglese?
Where can I exchange currency near the hotel? — Dove posso cambiare la valuta vicino all'hotel?
Could I have the receipt for this purchase? — Potrei avere lo scontrino per questo acquisto?
We are planning a family dinner for Friday. — Stiamo organizzando una cena in famiglia per venerdì.
Is there a swimming pool in this resort? — C'è una piscina in questo villaggio turistico?
I am sending you the revised contract now. — Ti sto inviando il contratto revisionato adesso.
Can you tell me which aisle the coffee is in? — Puoi dirmi in quale corsia si trova il caffè?
Please turn off the computer when you finish. — Per favore spegni il computer quando finisci.
We booked our flights three months ago. — Abbiamo prenotato i nostri voli tre mesi fa.
Do you sell fresh bread here every day? — Vendete pane fresco qui tutti i giorni?
What time does the lesson finish today? — A che ora finisce la lezione oggi?
Can I try these shoes in a size eight? — Posso provare queste scarpe nella taglia trentotto?
I am looking forward to our vacation next month. — Non vedo l'ora di fare le nostre vacanze il mese prossimo.
Could you send me the location on WhatsApp? — Potresti inviarmi la posizione su WhatsApp?
Who is taking care of the plants while we are away? — Chi si prende cura delle piante mentre siamo via?
The teacher asked us to work in small groups. — L'insegnante ci ha chiesto di lavorare in piccoli gruppi.
Is breakfast served in the room or in the dining hall? — La colazione è servita in camera o nella sala da pranzo?
I need to buy a birthday card for my sister. — Devo comprare un biglietto di auguri per mia sorella.
Can we split the bill three ways? — Possiamo dividere il conto in tre?
Where is the nearest bus station located? — Dove si trova la stazione degli autobus più vicina?
I need to print my boarding pass for the flight. — Devo stampare la mia carta d'imbarco per il volo.
Could you pass me the notebook from the shelf? — Potresti passarmi il quaderno dallo scaffale?
Is there a discount for groups at the museum? — C'è uno sconto per i gruppi al museo?
Please remind me to take the laundry out. — Per favore ricordami di togliere il bucato.
We spent the day exploring the old town. — Abbiamo passato la giornata ad esplorare il centro storico.
Does this jacket come with a hood? — Questa giacca ha il cappuccio?
I am writing an essay for my history course. — Sto scrivendo un tema per il mio corso di storia.
Can I leave my key at the reception desk? — Posso lasciare la chiave al banco della reception?
Is this product locally produced? — Questo prodotto è a chilometro zero?
Let us discuss the sales figures in the meeting. — Discutiamo i dati di vendita nella riunione.
Do you need a ride to the airport tomorrow? — Hai bisogno di un passaggio per l'aeroporto domani?
We need to buy more paper for the printer. — Dobbiamo comprare altra carta per la stampante.
Can you help me set up the table in the garden? — Puoi aiutarmi ad apparecchiare il tavolo in giardino?
What is the deadline for submitting the application? — Qual è la scadenza per inviare la candidatura?
The hotel offers a shuttle service to the beach. — L'hotel offre un servizio navetta per la spiaggia.
I would like to pay by debit card. — Vorrei pagare con carta di debito.
Is there a playground for children nearby? — C'è un parco giochi per bambini qui vicino?
Could you give me some advice on what to visit? — Potrebbe darmi qualche consiglio su cosa visitare?
We bought some fresh fruit at the street market. — Abbiamo comprato della frutta fresca al mercato di strada.
Do not forget your coat, it is cold outside. — Non dimenticare il cappotto, fa freddo fuori.
The exam results will be published next week. — I risultati dell'esame saranno pubblicati la prossima settimana.
Is there an extra charge for late check-in? — C'è un costo aggiuntivo per il check-in ritardato?
Could you please turn on the air conditioner? — Potresti accendere l'aria condizionata, per favore?
I am looking for a gift for a colleague. — Sto cercando un regalo per un collega.
We rented a car to drive along the coast. — Abbiamo noleggiato un'auto per guidare lungo la costa.
Can you answer the phone while I cook? — Puoi rispondere al telefono mentre cucino?
Please double check the delivery address. — Per favore ricontrolla l'indirizzo di spedizione.
Where is the nearest subway entrance? — Dov'è l'ingresso della metropolitana più vicino?
I need to return these shoes to the shop. — Devo restituire queste scarpe al negozio.
Enjoy your meal and have a great evening! — Buon appetito e trascorri una bella serata!
Could you check if the wifi connection is working? — Potresti controllare se la connessione wifi funziona?
Where can I rent an electric bicycle? — Dove posso noleggiare una bicicletta elettrica?
I need to make an online payment for this bill. — Devo effettuare un pagamento online per questa bolletta.
Could you please hand me the keys to the garage? — Potresti passarmi le chiavi del garage, per favore?
The lesson has been moved to room four. — La lezione è stata spostata nell'aula quattro.
Is there a microwave available in the kitchen? — C'è un forno a microonde disponibile in cucina?
Can I try on this sweater in medium? — Posso provare questo maglione nella taglia M?
Please save your work before shutting down the computer. — Per favore salva il tuo lavoro prima di spegnere il computer.
Do you know where the nearest charging station is? — Sai dov'è la stazione di ricarica più vicina?
We have a family picnic planned for Sunday afternoon. — Abbiamo in programma un picnic in famiglia per domenica pomeriggio.
Can I get this dress altered at your shop? — Posso far modificare questo vestito nel vostro negozio?
What time does the museum guided tour start? — A che ora inizia la visita guidata del museo?
I am going to buy some fresh bread for dinner. — Vado a comprare del pane fresco per cena.
Could you put these files in the office folder? — Potresti mettere questi file nella cartella dell'ufficio?
My daughter is rehearsing for the school play. — Mia figlia sta provando per lo spettacolo teatrale della scuola.
We had a wonderful lunch overlooking the sea. — Abbiamo fatto un pranzo meraviglioso con vista mare.
Please don't forget to pack your passport. — Per favore non dimenticare di mettere in valigia il passaporto.
Is there a group discount for the theatre tickets? — C'è uno sconto di gruppo per i biglietti del teatro?
Can I change my seat to an aisle seat? — Posso cambiare il mio posto con uno vicino al corridoio?
Who is coming with us to the supermarket today? — Chi viene con noi al supermercato oggi?
I need to print twenty copies of this document. — Devo stampare venti copie di questo documento.
Could you tell me where the shoe department is? — Potrebbe dirmi dov'è il reparto calzature?
We are going camping in the forest this weekend. — Questo fine settimana andremo in campeggio nella foresta.
Please wake me up at six o'clock tomorrow. — Per favore svegliami alle sei domani.
Can I ask for an extra clothes hanger? — Posso chiedere una gruccia per abiti in più?
The students are preparing for their final exams. — Gli studenti si stanno preparando per gli esami finali.
Could you help me clean the windows today? — Potresti aiutarmi a pulire le finestre oggi?
I am looking for a gift for my father's birthday. — Sto cercando un regalo per il compleanno di mio padre.
We enjoyed watching the fireworks by the harbor. — Ci è piaciuto guardare i fuochi d'artificio al porto.
Please send me the meeting agenda by email. — Per favore inviami l'ordine del giorno della riunione via email.
Is this item covered by a money back guarantee? — Questo articolo è coperto da una garanzia di rimborso?
Do you sell gluten-free flour in this shop? — Vendete farina senza glutine in questo negozio?
Can you pick up the dry cleaning after work? — Puoi ritirare i vestiti in lavanderia dopo il lavoro?
The teacher corrected all our essays yesterday. — L'insegnante ha corretto tutti i nostri temi ieri.
We booked a hotel room with a balcony view. — Abbiamo prenotato una camera d'albergo con vista dal balcone.
Could you please pass me the olive oil? — Potresti passarmi l'olio d'oliva, per favore?
I have an appointment with the doctor at three. — Ho un appuntamento con il medico alle tre.
Is there a kids' menu available in this restaurant? — C'è un menu per bambini disponibile in questo ristorante?
We spent the afternoon shopping for summer clothes. — Abbiamo passato il pomeriggio a fare acquisti per vestiti estivi.
Do I need a receipt to exchange this product? — Ho bisogno dello scontrino per cambiare questo prodotto?
The kids are playing hide and seek in the garden. — I bambini stanno giocando a nascondino in giardino.
Could you please close the window in the bedroom? — Potresti chiudere la finestra in camera da letto, per favore?
I will leave the house keys under the mat. — Lascerò le chiavi di casa sotto lo zerbino.
Is the hotel reception desk open all night? — La reception dell'hotel è aperta tutta la notte?
Can you help me find my glasses anywhere? — Puoi aiutarmi a trovare i miei occhiali da qualche parte?
We need to order new stationery for the office. — Dobbiamo ordinare della nuova cancelleria per l'ufficio.
How much is the entrance fee for adults? — Quanto costa il biglietto d'ingresso per gli adulti?
Please clean your shoes before coming inside. — Per favore pulisciti le scarpe prima di entrare.
I would like to try these sunglasses on. — Vorrei provare questi occhiali da sole.
Have a nice trip and write to us when you arrive! — Buon viaggio e scrivici quando arrivi!
Can you show me how to fill out this form? — Puoi mostrarmi come compilare questo modulo?
We need to buy a birthday cake for tomorrow. — Dobbiamo comprare una torta di compleanno per domani.
Is there a charge for using the gym? — C'è un costo per usare la palestra?
Could you please print the boarding passes? — Potresti stampare le carte d'imbarco, per favore?
The teacher praised the class for their good results. — L'insegnante ha lodato la classe per i buoni risultati.
What time does the supermarket close on Sunday? — A che ora chiude il supermercato la domenica?
I would like to try this dress in blue. — Vorrei provare questo vestito in blu.
Could you help me install the new printer software? — Potresti aiutarmi a installare il nuovo software della stampante?
We booked a room with a sea view. — Abbiamo prenotato una camera con vista mare.
Please put the milk back in the fridge. — Per favore rimetti il latte in frigorifero.
Is there a laundry service in the hotel? — C'è un servizio lavanderia nell'hotel?
How long will the flight take? — Quanto durerà il volo?
I am going to buy fresh fruit at the market. — Vado a comprare frutta fresca al mercato.
Can you explain this grammar rule again? — Puoi spiegare di nuovo questa regola grammaticale?
Let us take a short break for coffee. — Facciamo una breve pausa per un caffè.
Do you have these shoes in a smaller size? — Avete queste scarpe in una taglia più piccola?
Who forgot to turn off the computer in the study? — Chi ha dimenticato di spegnere il computer nello studio?
Where is the nearest pharmacy open on weekends? — Dov'è la farmacia più vicina aperta nel fine settimana?
We are planning a trip to Europe next spring. — Stiamo pianificando un viaggio in Europa la prossima primavera.
Could you pass me the pepper, please? — Potresti passarmi il pepe, per favore?
Can I reschedule my appointment with the doctor? — Posso riprogrammare il mio appuntamento con il medico?
The students are preparing for the science fair. — Gli studenti si stanno preparando per la fiera della scienza.
Can I pay for these groceries with cash? — Posso pagare questi generi alimentari in contanti?
What is the wifi network name for guests? — Qual è il nome della rete wifi per gli ospiti?
We had a great time visiting the local museum. — Ci siamo divertiti molto a visitare il museo locale.
Please lock the front door when you leave. — Per favore chiudi a chiave la porta d'ingresso quando esci.
Is there an extra fee for room service? — C'è un costo aggiuntivo per il servizio in camera?
I am writing an email to the HR department. — Sto scrivendo un'email al reparto risorse umane.
Could you help me carry these heavy suitcases to the car? — Potresti aiutarmi a portare queste valigie pesanti in macchina?
What time does the history class start today? — A che ora inizia la lezione di storia oggi?
Do you sell fresh flowers in this shop? — Vendete fiori freschi in questo negozio?
We rented a car to explore the island. — Abbiamo noleggiato un'auto per esplorare l'isola.
Please keep your voice down, the baby is resting. — Per favore tieni la voce bassa, il bambino sta riposando.
Is there a discount if I buy two items? — C'è uno sconto se compro due articoli?
The hotel staff was extremely helpful and polite. — Il personale dell'hotel è stato estremamente disponibile e gentile.
Can you send me the directions to the station? — Puoi inviarmi le indicazioni per la stazione?
Don't forget to take your vitamins this morning. — Non dimenticare di prendere le tue vitamine stamattina.
We are having lunch with our grandparents today. — Oggi pranziamo con i nostri nonni.
I need a pair of comfortable shoes for walking. — Ho bisogno di un paio di scarpe comode per camminare.
Could you please print the itinerary for the trip? — Potresti stampare l'itinerario del viaggio, per favore?
The classroom was renovated during the summer. — L'aula è stata ristrutturata durante l'estate.
Is there a water refill station nearby? — C'è una stazione di ricarica per l'acqua qui vicino?
Does this shop offer tax-free shopping for tourists? — Questo negozio offre lo shopping tax-free per i turisti?
We enjoyed the sunset from the beach cafe. — Ci siamo goduti il tramonto dal caffè sulla spiaggia.
Please submit your project before Friday afternoon. — Per favore invia il tuo progetto entro venerdì pomeriggio.
Could you help me clean the dining room table? — Potresti aiutarmi a pulire il tavolo della sala da pranzo?
Do you have any sugar-free beverages here? — Avete bevande senza zucchero qui?
What is the best way to get to the airport from here? — Qual è il modo migliore per arrivare all'aeroporto da qui?
My phone battery is running low again. — La batteria del mio telefono si sta scaricando di nuovo.
Have a nice flight and let us know when you land! — Buon volo e facci sapere quando atterri!
Can I get a glass of sparkling water with lemon? — Posso avere un bicchiere di acqua frizzante con limone?
Where is the nearest charging spot for electric cars? — Dov'è la colonnina di ricarica più vicina per auto elettriche?
We need to check the flight status on the app. — Dobbiamo controllare lo stato del volo sull'applicazione.
Could you please turn off the air conditioning before leaving? — Potresti spegnere l'aria condizionata prima di uscire, per favore?
Is there a discount if I buy two pairs of shoes? — C'è uno sconto se compro due paia di scarpe?
Our teacher assigned us a research project on renewable energy. — Il nostro insegnante ci ha assegnato un progetto di ricerca sulle energie rinnovabili.
Could you send me the location via text message? — Potresti inviarmi la posizione tramite messaggio di testo?
We are going to order some food from the local pizzeria tonight. — Stasera ordineremo del cibo dalla pizzeria locale.
Please turn off your mobile phone during the exam. — Per favore spegni il cellulare durante l'esame.
Do you know if the museum offers audio guides in Italian? — Sai se il museo offre audioguide in italiano?
I need to buy a new charger for my tablet. — Devo comprare un nuovo caricabatterie per il mio tablet.
We should leave early to avoid getting stuck in traffic. — Dovremmo partire presto per evitare di rimanere bloccati nel traffico.
Could you please bring us another bottle of still water? — Potrebbe portarci un'altra bottiglia di acqua naturale, per favore?
Can you help your mother set the table for dinner? — Puoi aiutare tua madre ad apparecchiare la tavola per cena?
Dad, can I borrow the car this weekend? — Papà, posso prendere in prestito l'auto questo fine settimana?
Have you cleaned your bedroom like your father asked? — Hai pulito la tua camera da letto come ti ha chiesto tuo padre?
Mom, I need some money for the school trip tomorrow. — Mamma, ho bisogno di soldi per la gita scolastica di domani.
Don't forget that your curfew is at ten o'clock tonight. — Non dimenticare che il tuo rientro è alle dieci stasera.
Can you two stop arguing and help me unload the dishwasher? — Potete smetterla di litigare e aiutarmi a svuotare la lavastoviglie?
Who is taking our daughter to her dance practice today? — Chi accompagna nostra figlia a lezione di danza oggi?
Your father and I think you spend too much time on your phone. — Tuo padre ed io pensiamo che tu passi troppo tempo al telefono.
Did you ask your mother before taking her jacket? — Hai chiesto a tua madre prima di prendere la sua giacca?
Can I spend the night at my best friend's house on Saturday? — Posso dormire a casa della mia migliore amica sabato?
Dad is preparing his famous pasta recipe for dinner tonight. — Papà sta preparando la sua famosa ricetta della pasta per cena stasera.
Have you finished studying for your history exam tomorrow? — Hai già finito di studiare per il tuo esame di storia di domani?
Mom, can we go clothes shopping together this afternoon? — Mamma, possiamo andare a comprare dei vestiti insieme questo pomeriggio?
Please lower the music in your room, your father is working. — Per favore abbassa la musica in camera tua, tuo padre sta lavorando.
How long are you going to stay in the bathroom? — Quanto tempo hai intenzione di stare in bagno?
We are having a family movie night in the living room tonight. — Stasera facciamo una serata cinema in famiglia in soggiorno.
Your mother left her car keys on the kitchen counter again. — Tua madre ha lasciato di nuovo le chiavi della macchina sul bancone della cucina.
Dad, can you explain this difficult math problem to me? — Papà, puoi spiegarmi questo problema di matematica difficile?
Don't leave your wet bath towel lying on the floor. — Non lasciare il tuo asciugamano da bagno bagnato sul pavimento.
Who wants to help me prepare the salad for lunch? — Chi vuole aiutarmi a preparare l'insalata per pranzo?
Mom and Dad are going out for dinner, so you are in charge. — Mamma e papà escono a cena, quindi te ne occupi tu.
Can you please put your laundry in the dirty clothes basket? — Puoi mettere il tuo bucato nel cestino dei panni sporchi, per favore?
Our daughter is studying hard for her driving test. — Nostra figlia sta studiando molto per l'esame della patente.
Your father fixed the broken light in your bedroom yesterday. — Tuo padre ha riparato la luce rotta nella tua camera da letto ieri.
Mom, do you know where my favorite pair of jeans is? — Mamma, sai dov'è il mio paio di jeans preferito?
Please turn off the bathroom light when you are finished. — Per favore spegni la luce del bagno quando hai finito.
We are going to visit your grandparents this Sunday afternoon. — Andremo a trovare i tuoi nonni questo domenica pomeriggio.
Dad, can you drive me to my friend's birthday party? — Papà, puoi accompagnarmi in macchina alla festa di compleanno della mia amica?
Your mother is calling you downstairs for breakfast. — Tua madre ti sta chiamando di sotto per la colazione.
Did you remember to feed the cat before going to school? — Ti sei ricordata di dare da mangiare al gatto prima di andare a scuola?
We need to set some clear rules about screen time. — Dobbiamo stabilire alcune regole chiare sul tempo davanti allo schermo.
Can I invite a few classmates over to study this afternoon? — Posso invitare alcuni compagni di classe a studiare questo pomeriggio?
Your father is taking the car to the mechanic this morning. — Tuo padre sta portando l'auto dal meccanico stamattina.
Mom made some fresh pancakes for breakfast today. — Mamma ha fatto dei pancake freschi per colazione oggi.
Please take your shoes off as soon as you enter the house. — Per favore togliti le scarpe non appena entri in casa.
Dad, can we practice driving in the parking lot later? — Papà, possiamo esercitarci a guidare nel parcheggio più tardi?
Our daughter asked if she could go to a concert next month. — Nostra figlia ha chiesto se può andare a un concerto il mese prossimo.
We should clean out the refrigerator together this weekend. — Dovremmo pulire il frigorifero insieme questo fine settimana.
Mom, can you help me dry my hair before we leave? — Mamma, puoi aiutarmi ad asciugarmi i capelli prima di uscire?
Your father and I are very proud of your school results. — Tuo padre ed io siamo molto orgogliosi dei tuoi risultati scolastici.
Who forgot to turn off the air conditioning in the hallway? — Chi ha dimenticato di spegnere l'aria condizionata nel corridoio?
Can you give your father a hand with the garden hose? — Puoi dare una mano a tuo padre con la canna da giardino?
I need to iron my shirt for tomorrow's school presentation. — Devo stirare la mia camicia per la presentazione a scuola di domani.
Mom, what time are we leaving for the supermarket? — Mamma, a che ora partiamo per il supermercato?
Please make your bed before you leave for school in the morning. — Per favore rifai il letto prima di uscire per andare a scuola la mattina.
Your father is grilling some vegetables in the backyard. — Tuo padre sta grigliando delle verdure nel cortile sul retro.
Can I order a pizza with my friends this Friday evening? — Posso ordinare una pizza con le mie amiche questo venerdì sera?
Your mother is currently in an important video call for work. — Tua madre al momento è in un'importante videochiamata di lavoro.
Let's all sit down and talk about our weekend plans. — Sediamoci tutti e parliamo dei nostri programmi per il fine settimana.
Who left the front door unlocked when they came home? — Chi ha lasciato la porta d'ingresso aperta quando è tornato a casa?
Excuse me, where is the check-in desk for flight BA four hundred? — Mi scusi, dov'è il banco del check-in per il volo BA quattrocento?
Could you please place your hand luggage on the scale? — Potrebbe mettere il bagaglio a mano sulla bilancia, per favore?
Is this suitcase within the permitted weight limit for cabin baggage? — Questa valigia rientra nel limite di peso consentito per il bagaglio a mano?
I need to check two bags and carry one backpack on board. — Devo imbarcare due valigie e portare uno zaino a bordo.
Where is the security checkpoint for international departures? — Dov'è il varco di sicurezza per le partenze internazionali?
Please take your laptop and liquids out of your bag for scanning. — Per favore tirate fuori il computer portatile e i liquidi dalla borsa per la scansione.
Do I need to take off my shoes and belt at security? — Devo togliere le scarpe e la cintura ai controlli di sicurezza?
Excuse me, where can I wrap my luggage in protective plastic film? — Mi scusi, dove posso avvolgere il mio bagaglio nella pellicola protettiva di plastica?
My flight has been delayed by two hours due to bad weather. — Il mio volo è stato ritardato di due ore a causa del maltempo.
Where can I find the electronic flight information departure board? — Dove posso trovare il tabellone elettronico delle partenze dei voli?
The gate for our flight to Paris has just been changed. — Il gate per il nostro volo per Parigi è appena stato cambiato.
Final boarding call for passengers traveling on flight LH seven hundred. — Ultimo avviso d'imbarco per i passeggeri in viaggio sul volo LH settecento.
Please present your boarding pass and passport at the gate. — Per favore esibite la carta d'imbarco e il passaporto al gate.
Is there a fast-track lane available for security screening? — È disponibile una corsia preferenziale per i controlli di sicurezza?
Where is the baggage claim area for flight AZ two hundred? — Dov'è l'area ritiro bagagli per il volo AZ duecento?
My suitcase did not arrive on the baggage carousel with the others. — La mia valigia non è arrivata sul nastro bagagli con gli altri.
Where is the lost and found office for mishandled luggage? — Dov'è l'ufficio oggetti smarriti per i bagagli smarriti?
Can I exchange currency or use an ATM in the arrivals hall? — Posso cambiare la valuta o usare un bancomat nella hall degli arrivi?
Where can I catch the express train to the city center? — Dove posso prendere il treno espresso per il centro città?
Are there official taxi ranks right outside the terminal exit? — Ci sono postazioni di taxi ufficiali proprio fuori dall'uscita del terminal?
Could you tell me which terminal handles international arrivals? — Potrebbe dirmi quale terminal gestisce gli arrivi internazionali?
Is free Wi-Fi available throughout the entire airport terminal? — Il Wi-Fi gratuito è disponibile in tutto il terminal dell'aeroporto?
Where is the nearest airport lounge for business class passengers? — Dov'è la sala d'attesa dell'aeroporto più vicina per i passeggeri di classe business?
Can I buy duty-free items after passing through security control? — Posso comprare articoli duty-free dopo aver superato il controllo di sicurezza?
Excuse me, where are the restrooms located near gate twenty-four? — Mi scusi, dove si trovano i bagni vicino al gate ventiquattro?
My connecting flight leaves in less than forty minutes. — Il mio volo in coincidenza parte in meno di quarantacinque minuti.
Where do I go to clear passport control and immigration? — Dove devo andare per superare il controllo passaporti e l'immigrazione?
Please keep your boarding pass handy until you step onto the aircraft. — Per favore tenete a portata di mano la carta d'imbarco fino a quando salite sull'aereo.
Is there a pharmacy inside the departures terminal? — C'è una farmacia all'interno del terminal delle partenze?
Where can I rent a car upon arrival at the airport? — Dove posso noleggiare un'auto all'arrivo in aeroporto?
Could you help me push this heavy luggage trolley? — Potresti aiutarmi a spingere questo carrello portabagagli pesante?
Are liquids over one hundred milliliters allowed in cabin baggage? — I liquidi superiori a cento millilitri sono ammessi nel bagaglio a mano?
Please place all electronic devices in a separate tray. — Per favore mettete tutti i dispositivi elettronici in un vassoio separato.
Excuse me, is this seat next to the emergency exit? — Mi scusi, questo posto è vicino all'uscita di sicurezza?
The flight attendant is demonstrating safety procedures before takeoff. — L'assistente di volo sta mostrando le procedure di sicurezza prima del decollo.
Please fasten your seatbelts and return your seat upright. — Per favore allacciate le cinture di sicurezza e rimettete il sedile in posizione verticale.
Can I use my mobile phone in airplane mode during the flight? — Posso usare il mio cellulare in modalità aereo durante il volo?
Where is the designated smoking area outside the terminal building? — Dov'è l'area fumatori designata fuori dall'edificio del terminal?
We need to go through customs check after collecting our bags. — Dobbiamo passare attraverso il controllo doganale dopo aver ritirato le nostre valigie.
Is there an information desk where I can ask for directions? — C'è un banco informazioni dove posso chiedere indicazioni?
Where can I plug in my phone to charge the battery? — Dove posso attaccare il mio telefono per caricare la batteria?
Are strollers allowed all the way up to the aircraft door? — I passeggini sono ammessi fino alla porta dell'aeromobile?
Excuse me, what time does the airline check-in counter open? — Mi scusi, a che ora apre il banco del check-in della compagnia aerea?
My passport expires in less than six months from today. — Il mio passaporto scade in meno di sei mesi da oggi.
Can I bring my pet on board in a special carrier? — Posso portare il mio animale domestico a bordo in un trasportino speciale?
Where is the VIP lounge for frequent flyer members? — Dov'è la sala VIP per i membri frequent flyer?
The flight is currently boarding passengers by zones. — Il volo sta attualmente imbarcando i passeggeri per zone.
Please make sure you have all your personal belongings before leaving. — Per favore assicuratevi di avere tutti i vostri effetti personali prima di partire.
Where can I buy a bottled water past the security checkpoint? — Dove posso comprare una bottiglietta d'acqua oltre il varco di sicurezza?
Have a pleasant flight and a safe journey to your destination. — Buon volo e buon viaggio verso la vostra destinazione.
What time does the ferry to the island depart? — A che ora parte il traghetto per l'isola?
Where is the ticket office for the hydrofoil? — Dov'è la biglietteria per l'aliscafo?
Do we need to check in our car two hours before boarding? — Dobbiamo fare il check-in dell'auto due ore prima dell'imbarco?
Which pier does the cruise ship dock at? — A quale molo attracca la nave da crociera?
Is vehicle boarding allowed on this ferry? — È consentito l'imbarco dei veicoli su questo traghetto?
Could you tell me where dock number four is? — Potrebbe dirmi dov'è il molo numero quattro?
How long does the crossing take to reach the port? — Quanto dura la traversata per raggiungere il porto?
Please have your boarding passes and passports ready. — Per favore tenete pronti i biglietti d'imbarco e i passaporti.
Is sea sickness medication available at the port pharmacy? — I farmaci per il mal di mare sono disponibili nella farmacia del porto?
Where can I find a porter to help with heavy luggage? — Dove posso trovare un portabagagli per aiutarmi con i bagagli pesanti?
We are going on a day excursion by boat along the coast. — Faremo un'escursione di un giorno in barca lungo la costa.
Is there a waiting room with air conditioning in the terminal? — C'è una sala d'attesa con aria condizionata nel terminal?
Can we park our car in the port long-stay parking lot? — Possiamo parcheggiare l'auto nel parcheggio a lunga sosta del porto?
What is the maximum height allowed for vehicles on board? — Qual è l'altezza massima consentita per i veicoli a bordo?
The sea is quite rough today so the departure might be delayed. — Il mare è piuttosto agitato oggi quindi la partenza potrebbe essere ritardata.
Where is the passenger drop-off area near the pier? — Dov'è l'area di fermata passeggeri vicino al molo?
Do we need to book a cabin for the overnight ferry? — Dobbiamo prenotare una cabina per il traghetto notturno?
Are pets allowed on the upper deck of the ship? — Gli animali domestici sono ammessi sul ponte superiore della nave?
Excuse me, is this the queue for foot passengers? — Mi scusi, è questa la fila per i passeggeri a piedi?
Where can we rent a private boat for the afternoon? — Dove possiamo noleggiare una barca privata per il pomeriggio?
The lighthouse is visible from the end of the harbor wall. — Il faro è visibile dalla fine del molo del porto.
Please wait inside your car until driving instructions are given. — Per favore attendete in auto finché non vengono date le istruzioni di guida.
Is there a shuttle bus connecting the port to the railway station? — C'è un autobus navetta che collega il porto alla stazione ferroviaria?
We booked a reserved seat in the lounge area on the ferry. — Abbiamo prenotato un posto riservato nell'area lounge del traghetto.
Where do I claim my tax refund at the port exit? — Dove posso richiedere il rimborso fiscale all'uscita del porto?
The ferry captain announced a slight delay due to fog. — Il capitano del traghetto ha annunciato un leggero ritardo a causa della nebbia.
Are life jackets available under every seat on the boat? — I giubbotti di salvataggio sono disponibili sotto ogni sedile della barca?
Where can we buy tickets for the island hop tour? — Dove possiamo comprare i biglietti per il tour tra le isole?
You must follow the marshals when driving onto the car deck. — È necessario seguire gli addetti quando si guida sul ponte auto.
Is there a restaurant or cafe open inside the ferry terminal? — C'è un ristorante o un bar aperto all'interno del terminal traghetti?
How much does a round-trip ticket for the ferry cost? — Quanto costa un biglietto di andata e ritorno per il traghetto?
The cruise ship will anchor in the bay until tomorrow morning. — La nave da crociera getterà l'ancora nella baia fino a domani mattina.
Where is the entrance for oversized vehicles and campers? — Dov'è l'ingresso per i veicoli fuori misura e i camper?
Can we leave our bags in the luggage storage at the port? — Possiamo lasciare i nostri bagagli nel deposito bagagli al porto?
The harbor authority has issued a weather warning for tonight. — L'autorità portuale ha emesso un avviso meteo per stasera.
Which gate do we use to exit the port area? — Quale varco usiamo per uscire dall'area portuale?
We enjoyed watching the sailing boats enter the marina. — Ci è piaciuto guardare le barche a vela entrare nel porticciolo.
Is there a charging point for electric vehicles at the terminal? — C'è un punto di ricarica per veicoli elettrici al terminal?
Please turn off your car engine while waiting to board. — Per favore spegnete il motore dell'auto durante l'attesa per l'imbarco.
Where is the customs control point for international arrivals? — Dov'è il punto di controllo doganale per gli arrivi internazionali?
We saw dolphins swimming near the ship during the voyage. — Abbiamo visto dei delfini nuotare vicino alla nave durante il viaggio.
Can I change my ferry ticket to a later departure time? — Posso cambiare il mio biglietto del traghetto per un orario di partenza successivo?
Is the footbridge open for pedestrians walking into the city? — Il ponte pedonale è aperto per i pedoni che vanno in città?
The deck crew helped us secure our motorbike on board. — L'equipaggio di coperta ci ha aiutato a fissare la nostra moto a bordo.
Where can I find a map of the port and its facilities? — Dove posso trovare una mappa del porto e dei suoi servizi?
The catamaran service to the coastal town operates daily. — Il servizio di catamarano per la città costiera opera tutti i giorni.
Please watch your step when crossing the gangway to the ship. — Per favore fate attenzione ai piedi mentre attraversate la passerella per la nave.
Is wifi available on board during the crossing? — Il wifi è disponibile a bordo durante la traversata?
We arrived early at the port to secure a good spot in line. — Siamo arrivati presto al porto per assicurarci un buon posto in fila.
Have a safe voyage and enjoy the scenery along the coast! — Buon viaggio e goditi il panorama lungo la costa!
Is the express train to Milan arriving on platform five? — Il treno espresso per Milano arriva al binario cinque?
Do I need to validate my subway ticket before tapping in? — Devo convalidare il biglietto della metropolitana prima di passare i tornelli?
Is there a high-speed train leaving for Florence this morning? — C'è un treno ad alta velocità in partenza per Firenze stamattina?
Where is the automatic ticket machine for regional trains? — Dov'è la biglietteria automatica per i treni regionali?
How many stops are there until the central railway station? — Quante fermate ci sono fino alla stazione ferroviaria centrale?
Is this metro line running direct or local? — Questa linea della metropolitana è diretta o fa tutte le fermate?
Excuse me, does this subway line go towards the stadium? — Mi scusi, questa linea della metropolitana va verso lo stadio?
You need to change lines at the next interchange station. — Devi cambiare linea alla prossima stazione di scambio.
What is the frequency of the underground trains during peak hours? — Qual è la frequenza dei treni della metropolitana nelle ore di punta?
Is the left-luggage office open twenty-four hours a day? — L'ufficio deposito bagagli è aperto ventiquattr'ore su ventiquattr'ore?
Please mind the gap between the train and the platform edge. — Per favore prestare attenzione allo spazio tra il treno e il binario.
Is my rail pass valid on this regional train line? — Il mio abbonamento ferroviario è valido su questa linea regionale?
Which exit should I take for the main square? — Quale uscita dovrei prendere per la piazza principale?
The commuter train is delayed due to signaling problems. — Il treno pendolari è in ritardo a causa di problemi di segnalamento.
Can I buy a monthly travel card at the ticket window? — Posso comprare un abbonamento mensile allo sportello?
Is there an elevator down to the subway platforms? — C'è un ascensore per scendere ai binari della metropolitana?
Does this train have quiet carriages for passengers resting? — Questo treno ha carrozze del silenzio per i passeggeri che riposano?
Where is the lost property office in the station? — Dov'è l'ufficio oggetti smarriti nella stazione?
The display board shows that the train is on time. — Il tabellone mostra che il treno è in orario.
Do I have to switch from the blue line to the red line? — Devo passare dalla linea blu alla linea rossa?
Is first class seating available on this suburban train? — Sono disponibili posti in prima classe su questo treno suburbano?
Could you tell me where the waiting room is located? — Potrebbe dirmi dove si trova la sala d'attesa?
Are bicycles allowed on the metro during rush hour? — Le biciclette sono ammesse sulla metropolitana durante l'ora di punta?
The train inspector is coming to check our tickets. — Il controllore sta arrivando per verificare i nostri biglietti.
Is there a charge for storing a large suitcase in the locker? — C'è un costo per riporre una valigia grande nell'armadietto?
What time is the last underground train tonight? — A che ora passa l'ultima metropolitana stasera?
We missed our connection because the first train was late. — Abbiamo perso la coincidenza perché il primo treno era in ritardo.
Is tap-and-go payment accepted at the metro turnstiles? — Il pagamento contactless è accettato ai tornelli della metropolitana?
Please step back behind the yellow safety line on the platform. — Per favore allontanarsi dalla linea gialla di sicurezza sul binario.
Does this train carry a dining car with snacks and drinks? — Questo treno ha una carrozza bar con snack e bevande?
Which side of the train do the doors open on? — Da quale lato del treno si aprono le porte?
Is there a discount ticket for senior citizens on the metro? — C'è un biglietto scontato per gli anziani sulla metropolitana?
How long is the stop at this intermediate station? — Quanto dura la sosta in questa stazione intermedia?
The ticket barrier is not accepting my magnetic card. — Il tornello non accetta la mia carta magnetica.
You must tap out when exiting the subway station. — Devi passare il biglietto ai tornelli quando esci dalla stazione metro.
Is there a seat reservation required for this night train? — È necessaria la prenotazione del posto per questo treno notturno?
Where can I find a network map of the underground? — Dove posso trovare una mappa della rete metropolitana?
The train was cancelled due to maintenance work on the tracks. — Il treno è stato cancellato per lavori di manutenzione sui binari.
Does this station have escalator access to the surface? — Questa stazione ha la scala mobile per salire in superficie?
Which carriage number is printed on your paper ticket? — Quale numero di carrozza è stampato sul tuo biglietto cartaceo?
The announcements are broadcast in both English and Italian. — Gli annunci sono trasmessi sia in inglese che in italiano.
Is there a connecting bus service right outside the station exit? — C'è un servizio autobus di coincidenza proprio fuori dall'uscita della stazione?
How many zones does this single ticket cover? — Quante zone copre questo biglietto singolo?
You can top up your transit card at any ticket machine. — Puoi ricaricare la tua carta dei trasporti in qualsiasi emettitrice automatica.
Please do not obstruct the train doors while they are closing. — Per favore non ostruire le porte del treno mentre si chiudono.
Is there a customer service desk near the main concourse? — C'è un banco di assistenza clienti vicino all'atrio principale?
We need to walk along platform three to reach our carriage. — Dobbiamo camminare lungo il binario tre per raggiungere la nostra carrozza.
Are all subway stations equipped with tactile paving for the blind? — Tutte le stazioni della metropolitana sono dotate di percorso tattile per non vedenti?
The next train arriving on platform two does not stop here. — Il prossimo treno in arrivo al binario due non effettua fermata qui.
Have a smooth journey on your rail travel across the country! — Buon viaggio in treno attraverso il paese!
Is the host living on the property or nearby? — L'host abita nella struttura o nelle vicinanze?
What is the entry code for the front door? — Qual è il codice d'accesso per la porta d'ingresso?
Could you show us where the breakfast room is? — Potrebbe mostrarci dov'è la sala colazioni?
Is homemade cake served with breakfast every morning? — Viene servita una torta fatta in casa a colazione ogni mattina?
Do you offer any gluten-free products for breakfast? — Offrite prodotti senza glutine per la colazione?
Could we have breakfast a bit earlier tomorrow morning? — Potremmo fare colazione un po' prima domani mattina?
Where can we leave the house keys when we check out? — Dove possiamo lasciare le chiavi di casa quando facciamo il check-out?
Is there a common lounge area for all guests? — C'è un'area soggiorno comune per tutti gli ospiti?
Can we use the coffee machine in the kitchen freely? — Possiamo usare liberamente la macchina del caffè in cucina?
Are fresh towels provided every two days? — Gli asciugamani puliti vengono forniti ogni due giorni?
What time is the main entrance gate locked at night? — A che ora viene chiuso a chiave il cancello principale di notte?
Could you recommend a family-run restaurant nearby? — Potrebbe consigliarmi un ristorante a gestione familiare qui vicino?
Is parking available directly in the courtyard? — Il parcheggio è disponibile direttamente nel cortile?
Can I borrow an iron from the host? — Posso prendere in prestito un ferro da stiro dall'host?
Is there a small fridge in the room for our drinks? — C'è un piccolo frigorifero in camera per le nostre bevande?
The host gave us a map of the surrounding village. — L'host ci ha dato una mappa del borgo circostante.
Could we get a tea kettle for our room? — Potremmo avere un bollitore per il tè in camera?
Is daily housekeeping included in our B&B reservation? — Le pulizie giornaliere sono incluse nella nostra prenotazione B&B?
Can we leave our bicycles in the garden shed overnight? — Possiamo lasciare le nostre biciclette nel capanno in giardino per la notte?
Where is the main thermostat to adjust the heating? — Dov'è il termostato principale per regolare il riscaldamento?
Are we allowed to use the garden terrace in the evening? — Ci è consentito usare la terrazza in giardino la sera?
The host prepared a delicious basket of fresh local fruit. — L'host ha preparato un delizioso cestino di frutta fresca locale.
Do you have any extra blankets stored in the wardrobe? — Avete delle coperte extra nell'armadio?
Can you order a local taxi for us tomorrow at eight? — Può ordinare un taxi locale per noi domani alle otto?
What options are available for breakfast tomorrow morning? — Quali opzioni sono disponibili per colazione domani mattina?
What are the quiet hours during the night? — Quali sono gli orari del silenzio durante la notte?
Could you give us a spare set of house keys? — Potrebbe darci un set di chiavi di riserva?
Is there a microwave available for heating up baby food? — C'è un microonde disponibile per scaldare le pappe dei bambini?
The host was very welcoming and recommended great hiking trails. — L'host è stato molto accogliente e ha consigliato ottimi sentieri da trekking.
Is there a safe place to leave our bags after checking out? — C'è un posto sicuro dove lasciare le nostre borse dopo il check-out?
Is fresh milk provided in the communal kitchen? — Il latte fresco è fornito nella cucina comune?
Could you tell us how to turn on the bathroom radiator? — Potrebbe dirci come accendere il radiatore del bagno?
Are pets allowed inside the bed and breakfast rooms? — Gli animali domestici sono ammessi nelle camere del bed and breakfast?
The room was decorated in a cozy rustic style. — La camera era arredata in un accogliente stile rustico.
What time should we inform you about our arrival time? — A che ora dovremmo comunicarvi il nostro orario di arrivo?
Is there an outdoor swimming pool in the garden area? — C'è una piscina all'aperto nell'area del giardino?
Could you recommend a scenic spot to watch the sunset? — Potrebbe consigliare un punto panoramico per guardare il tramonto?
Do we need to turn off all lights when leaving the house? — Dobbiamo spegnere tutte le luci quando usciamo di casa?
Can we request savory breakfast options like cheese and ham? — Possiamo richiedere opzioni di colazione salata come formaggio e prosciutto?
The host kindly offered us a welcome drink upon arrival. — L'host ci ha gentilmente offerto un drink di benvenuto all'arrivo.
Is smoking allowed on the private balcony? — È consentito fumare sul balcone privato?
How do we open the automatic gate at night? — Come apriamo il cancello automatico di notte?
Can you recommend a good local bakery nearby? — Può consigliarci una buona panetteria locale qui vicino?
We felt completely at home during our stay at the B&B. — Ci siamo sentiti completamente a casa durante il nostro soggiorno al B&B.
Is there a washing machine we can use for a small fee? — C'è una lavatrice che possiamo usare con un piccolo supplemento?
Could you provide a baby cot for our room? — Potrebbe fornire una culla per neonati per la nostra stanza?
What is the best route to reach the village center on foot? — Qual è il percorso migliore per raggiungere a piedi il centro del paese?
The continental breakfast included freshly squeezed orange juice. — La colazione continentale includeva spremuta d'arancia fresca.
Please let us know if we need to lock the main entrance door. — Per favore ci faccia sapere se dobbiamo chiudere a chiave la porta d'ingresso principale.
Thank you for your warm hospitality and wonderful tips! — Grazie per la calda ospitalità e i meravigliosi consigli!
Let us go window shopping along the main pedestrian street. — Andiamo a guardare le vetrine lungo la via pedonale principale.
Do you want to pop into that clothing boutique for a minute? — Vuoi fare un salto in quella boutique di abbigliamento per un minuto?
Look at that gorgeous coat on the mannequin in the window! — Guarda che splendido cappotto sul manichino in vetrina!
Is this leather handbag made of genuine leather? — Questa borsa di pelle è in vera pelle?
I am looking for a pair of comfortable sneakers for walking. — Sto cercando un paio di scarpe da ginnastica comode per camminare.
Can I try on these sunglasses in a different color frame? — Posso provare questi occhiali da sole con la montatura di un colore diverso?
Is there a shoe shop on this shopping street? — C'è un negozio di scarpe in questa via dello shopping?
The summer sales have just started this week. — I saldi estivi sono appena iniziati questa settimana.
Do you think this color suits me or should I try black? — Pensi che questo colore mi stia bene o dovrei provare il nero?
I need to find a nice scarf to match this dress. — Devo trovare una bella sciarpa da abbinare a questo vestito.
Excuse me, do you have these boots in size thirty-nine? — Scusi, avete questi stivali nel numero trentanove?
Is this shirt made of one hundred percent cotton? — Questa camicia è di cotone al cento per cento?
I am just browsing for now, thank you for asking. — Sto solo dando un'occhiata per ora, grazie per avermelo chiesto.
Where is the nearest department store around here? — Dov'è il grande magazzino più vicino da queste parti?
Could you tell me if this belt comes in a larger size? — Potrebbe dirmi se questa cintura c'è in una taglia più grande?
These trousers are a bit too long, do you offer alterations? — Questi pantaloni sono un po' troppo lunghi, fate riparazioni sartoriali?
Let us take a break from shopping and get a gelato. — Facciamo una pausa dallo shopping e prendiamo un gelato.
I love the vintage clothes in this secondhand shop. — Adoro i vestiti vintage in questo negozio dell'usato.
Are these handmade ceramics produced by local artisans? — Queste ceramiche fatte a mano sono prodotte da artigiani locali?
Can I keep the box for these new shoes? — Posso tenere la scatola per queste scarpe nuove?
I bought this wool sweater on sale at half price. — Ho comprato questo maglione di lana in saldo a metà prezzo.
Is there a mirror nearby so I can see how it looks? — C'è uno specchio qui vicino così posso vedere come sta?
This jewelry shop has some very elegant silver necklaces. — Questa gioielleria ha delle collane d'argento molto eleganti.
Could you wrap this delicate porcelain vase carefully? — Potrebbe incartare questo vaso di porcellana delicato con cura?
We have been walking through the shopping district all morning. — Abbiamo camminato nel quartiere dello shopping per tutta la mattina.
Do you accept credit card payments for small amounts? — Accettate pagamenti con carta di credito per piccoli importi?
I would like to exchange this sweater for a smaller size. — Vorrei cambiare questo maglione con una taglia più piccola.
Are there any luxury brand outlets near the city center? — Ci sono outlet di marchi di lusso vicino al centro città?
Look at these cute handmade souvenirs in the gift shop! — Guarda questi carini souvenir fatti a mano nel negozio di souvenir!
Is this umbrella sturdy enough for strong wind? — Questo ombrello è abbastanza robusto per il vento forte?
I am looking for a light jacket for cool summer evenings. — Sto cercando una giacca leggera per le fresche sere d'estate.
Excuse me, is this hat available in one size only? — Scusi, questo cappello è disponibile solo in taglia unica?
Can you show me the newest arrivals in the window? — Puoi mostrarmi le ultime novità in vetrina?
My shopping bag is getting quite heavy to carry around. — La mia borsa della spesa sta diventando piuttosto pesante da portare in giro.
This perfume shop has a wide selection of fragrances. — Questa profumeria ha un'ampia selezione di fragranze.
Could you give me a receipt so I can claim Tax Free? — Potrebbe darmi uno scontrino così posso richiedere il Tax Free?
I really like the design of this leather wallet. — Mi piace molto il design di questo portafoglio in pelle.
Is this fabric machine washable or dry clean only? — Questo tessuto è lavabile in lavatrice o solo a secco?
Let us walk down this narrow alley to see the artisan shops. — Camminiamo lungo questo vicolo stretto per vedere le botteghe artigiane.
I am carrying too many bags, let us head back to the hotel. — Sto portando troppe borse, torniamo verso l'hotel.
Do you have any discounts if I purchase three items? — Avete degli sconti se acquisto tre articoli?
She bought an elegant silk scarf as a gift for her mother. — Ha comprato un'elegante sciarpa di seta come regalo per sua madre.
Where can I find a good antique market in this area? — Dove posso trovare un buon mercato dell'antiquariato in questa zona?
This pair of sunglasses offers full UV protection. — Questo paio di occhiali da sole offre una protezione UV completa.
Can I leave my heavy bags at the customer service desk? — Posso lasciare le mie borse pesanti al banco di assistenza clienti?
I cannot decide between the navy blue and the dark green one. — Non riesco a decidere tra quello blu notte e quello verde scuro.
Are there any sports equipment stores on this avenue? — Ci sono negozi di articoli sportivi in questo viale?
Look at that long queue outside the new bakery! — Guarda che lunga fila fuori dalla nuova panetteria!
This store specializes in handmade leather shoes. — Questo negozio è specializzato in scarpe in pelle fatte a mano.
What a wonderful afternoon for strolling through the shops! — Che pomeriggio delizioso per passeggiare tra i negozi!
Shall we cross the street at the pedestrian crossing? — Attraversiamo la strada sulle strisce pedonali?
Look at the stunning architecture of this ancient building. — Guarda l'architettura mozzafiato di questo antico edificio.
Is there a nice park nearby where we can sit down? — C'è un bel parco qui vicino dove possiamo sederci?
Let us take a short break on this park bench. — Facciamo una breve pausa su questa panchina.
Could you take a picture of us in front of the fountain? — Potrebbe scattarci una foto davanti alla fontana?
This main square is always full of street performers. — Questa piazza principale è sempre piena di artisti di strada.
Which way leads to the historical town center? — Quale strada porta al centro storico?
The city hall is located at the end of this avenue. — Il municipio si trova alla fine di questo viale.
Let us walk along the river bank at sunset. — Camminiamo lungo la riva del fiume al tramonto.
Is this cobblestone street accessible for strollers? — Questa strada in ciottoli è accessibile ai passeggini?
We can get a wonderful view of the city from this hill. — Possiamo godere di una vista meravigliosa della città da questa collina.
Do you know the history of this marble statue? — Conosci la storia di questa statua di marmo?
Let us stroll through the narrow alleys of the old neighborhood. — Passeggiamo per i vicoli stretti del vecchio quartiere.
There is a beautiful botanical garden near the castle. — C'è un bellissimo giardino botanico vicino al castello.
Watch out for the cyclists coming down the bike lane. — Fai attenzione ai ciclisti che scendono lungo la pista ciclabile.
How old is the cathedral located in the center? — Quanti anni ha la cattedrale situata in centro?
There are many cozy cafes along this tree-lined boulevard. — Ci sono molti caffè accoglienti lungo questo viale alberato.
Let us cross the stone bridge to get to the other side. — Attraversiamo il ponte di pietra per andare dall'altra parte.
Is there a tourist map of the walking routes available? — C'è una mappa turistica dei percorsi a piedi disponibile?
Look at the colourful flowers decorating the balconies. — Guarda i fiori colorati che decorano i balconi.
Where does this pedestrian path lead to? — Dove porta questo percorso pedonale?
We can hear the church bells ringing across the town. — Possiamo sentire le campane della chiesa suonare in tutta la città.
Let us stop at the drinking fountain to fill our bottles. — Fermiamoci alla fontanella per riempire le nostre borracce.
The street lights are turning on as evening falls. — I lampioni si stanno accendendo mentre scende la sera.
Is it safe to walk around this neighborhood at night? — È sicuro camminare in questo quartiere di notte?
There is a lively open-air market happening in the square today. — Oggi c'è un vivace mercato all'aperto nella piazza.
We noticed a plaque commemorating a famous historical event. — Abbiamo notato una targa che commemora un famoso evento storico.
Can you guide us towards the main promenade? — Puoi guidarci verso la passeggiata principale?
I love the vibrant atmosphere of this bustling street. — Adoro l'atmosfera vivace di questa strada animata.
Should we head back towards the hotel before it gets dark? — Dovremmo tornare verso l'hotel prima che faccia buio?
The ancient city walls are remarkably well preserved. — Le antiche mura della città sono straordinariamente ben conservate.
Let us take the stairs leading up to the panoramic viewpoint. — Prendiamo le scale che portano al punto panoramico.
This neighborhood is famous for its colorful street art. — Questo quartiere è famoso per la sua vivace arte urbana.
Are there any shaded benches where we can rest in the shade? — Ci sono panchine all'ombra dove possiamo riposarci?
The traffic noise disappears once you enter the quiet alley. — Il rumore del traffico scompare appena si entra nel vicolo silenzioso.
You can admire the ruins from the observation platform. — Puoi ammirare i resti dalla piattaforma di osservazione.
Let us follow the signposts directing visitors to the monument. — Seguiamo i cartelli che indicano il monumento ai visitatori.
Is there a scenic walking trail along the coastline? — C'è un sentiero panoramico lungo la costa?
I enjoy observing daily life in the neighborhood squares. — Mi piace osservare la vita quotidiana nelle piazze del quartiere.
Do not forget to look up at the decorative details on the facades. — Non dimenticare di alzare lo sguardo sui dettagli decorativi delle facciate.
The bell tower dominates the skyline of the whole city. — Il campanile domina il panorama dell'intera città.
Let us cross the avenue at the traffic lights when it turns green. — Attraversiamo il viale al semaforo quando diventa verde.
There is a bronze monument erected in honor of the founder. — C'è un monumento in bronzo eretto in onore del fondatore.
We walked for hours discovering hidden corners of the town. — Abbiamo camminato per ore scoprendo angoli nascosti della città.
The park is full of locals walking their dogs in the evening. — Il parco è pieno di residenti che portano a spasso i cani la sera.
Is the old fortress open for public visits today? — La vecchia fortezza è aperta per le visite pubbliche oggi?
Let us sit near the pond and watch the ducks. — Sediamoci vicino allo stagno a guardare le anatre.
This historical gate was once the main entrance to the city. — Questa porta storica un tempo era l'ingresso principale della città.
The whole downtown area is restricted to pedestrians only. — L'intera zona del centro storico è riservata esclusivamente ai pedoni.
What a charming place to take an evening stroll! — Che posto incantevole per fare una passeggiata serale!
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
