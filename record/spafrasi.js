/* ================================================================
   spafrasi.js — Frasi comuni Spagnolo/Italiano per spafile.html
   ----------------------------------------------------------------
   Stesso schema di citazioni.js, tedfrasi.js e frafrasi.js: frasi
   su righe separate, formato:
   "Frase in spagnolo (pronuncia approssimativa) - Traduzione italiana"

   Per aggiungere nuove frasi: basta aggiungere una nuova riga dentro
   il template string qui sotto, rispettando questo formato.
   Nessun array da modificare a mano: il parsing avviene
   automaticamente più in basso.

   NOTA: al momento contiene solo 10 frasi di partenza; altre
   verranno aggiunte in seguito, in batch successivi.
   ================================================================ */
const FRASI_SPA_RAW = `
Buenos días (bue-nos di-as) - Buongiorno
Buenas tardes (bue-nas tar-des) - Buon pomeriggio
¿Cómo estás? (ko-mo es-tas) - Come stai?
Estoy bien, gracias (es-toi bien, gra-thias) - Sto bene, grazie
¿Cómo te llamas? (ko-mo te ya-mas) - Come ti chiami?
Me llamo Pierpaolo (me ya-mo Pierpaolo) - Mi chiamo Pierpaolo
Muchas gracias (mu-cias gra-thias) - Grazie mille
Por favor (por fa-vor) - Per favore
He dejado la lavadora puesta, así que luego habrá que tender la ropa. (e dekhádo la labadóra puésta, así ke luégo abrá ke tendér la rópa) - Ho lasciato la lavatrice in funzione, quindi dopo bisognerà stendere i panni.
¿Has visto dónde están las llaves del coche? (as bísto dónde están las yábes del kóche) - Hai visto dove sono le chiavi della macchina?
Voy a poner el lavavajillas antes de salir. (boi a ponér el lababayíyas ántes de salír) - Metto la lavastoviglie prima di uscire.
Apaga la luz del pasillo cuando subas. (apága la lus del pasíyo kuándo súbas) - Spegni la luce del corridoio quando sali.
El gato se ha escondido debajo de la cama. (el gáto se a eskondído debáko de la káma) - Il gatto si è nascosto sotto il letto.
¿Desayunamos juntos antes de que te vayas al colegio? (desayunámos khúntos ántes de ke te báyas al kolekhio) - Facciamo colazione insieme prima che tu vada a scuola?
Hoy he preparado tortilla para cenar. (oi e preparádo tortíya para senár) - Oggi ho preparato la tortilla per cena.
No te olvides de hacer los deberes antes de jugar. (no te olbídes de asér los deberes ántes de khugár) - Non dimenticarti di fare i compiti prima di giocare.
La profesora ha mandado un trabajo para el viernes. (la profesóra a mandádo un trabákho para el biérnes) - L'insegnante ha assegnato un lavoro per venerdì.
¿Puedo salir un rato con mis amigos después de estudiar? (puédo salír un ráto kon mis amígos despúes de estudiár) - Posso uscire un po' con i miei amici dopo aver studiato?
No llegues tarde, que mañana tienes clase temprano. (no yégues tárde, ke mañana tiénes kláse tempráno) - Non fare tardi, che domani hai lezione presto.
Creo que necesito algo para el dolor de garganta. (kréo ke nesesíto álgo para el dolór de gargánta) - Credo di aver bisogno di qualcosa per il mal di gola.
¿A qué hora sale el próximo tren? (a ke óra sále el próksimo tren) - A che ora parte il prossimo treno?
Nos hemos bajado en la estación equivocada. (nos émos bakhádo en la estasyón ekibokáda) - Siamo scesi alla stazione sbagliata.
El tren viene con diez minutos de retraso. (el tren biéne kon dyes minútos de retraso) - Il treno ha dieci minuti di ritardo.
¿Esta línea de metro pasa por el centro? (ésta línea de métro pássa por el séntrо) - Questa linea della metropolitana passa per il centro?
Tienes que cambiar de línea en la siguiente parada. (tiénes ke kambiar de línea en la siguiénte parąda) - Devi cambiare linea alla prossima fermata.
El autobús estaba tan lleno que ni siquiera he podido sentarme. (el autobús estaba tan yéno ke ni sikyéra e podído sentárme) - L'autobus era così pieno che non sono nemmeno riuscito a sedermi.
Perdone, ¿este autobús va hacia el aeropuerto? (perdóne, éste autobús ba ásia el aeropuérto) - Mi scusi, questo autobus va verso l'aeroporto?
Ya hemos pasado el control de seguridad. (ya émos pasádo el kontról de seguridád) - Abbiamo già superato i controlli di sicurezza.
¿Dónde tengo que dejar la maleta para facturarla? (dónde téngo ke dekhár la maléta para fakturárla) - Dove devo lasciare la valigia per imbarcarla?
El vuelo sale de la puerta veintidós. (el buélo sále de la puérta beintidós) - Il volo parte dal gate ventidue.
Tenemos que estar en el puerto una hora antes. (tenémos ke estár en el puérto una óra ántes) - Dobbiamo essere al porto un'ora prima.
El ferry se ha retrasado por culpa del mal tiempo. (el férri se a retrasádo por kúlpa del mal tiémpo) - Il traghetto è stato ritardato a causa del maltempo.
Sigue todo recto y gira a la derecha después del semáforo. (sígue todo rékto i khíra a la derécha despúes del semáforo) - Vai sempre dritto e gira a destra dopo il semaforo.
Creo que nos hemos pasado la calle que buscábamos. (kréo ke nos émos pasádo la káye ke buskábamos) - Credo che abbiamo superato la strada che cercavamo.
El coche no arranca y hace un ruido bastante raro. (el kóche no arránka i áse un ruído bastante ráro) - La macchina non parte e fa uno strano rumore.
He llamado a la asistencia porque hemos tenido un pinchazo. (e yamádo a la asisténsia porke émos tenído un pintcháso) - Ho chiamato l'assistenza perché abbiamo bucato.
Hay muchísimo tráfico por las obras de la avenida. (ai muchísimо tráfiko por las óbras de la abenída) - C'è tantissimo traffico per i lavori sul viale.
Se ha ido la luz en todo el barrio. (se a ído la lus en todo el bário) - È saltata la corrente in tutto il quartiere.
La calle está completamente inundada y no se puede pasar. (la káye está kompletaménte inundáda i no se puéde pasár) - La strada è completamente allagata e non si può passare.
¿Podrían traerme otra almohada, por favor? (podrían traérme ótra almoáda, por fabór) - Potreste portarmi un altro cuscino, per favore?
En la habitación hace mucho calor y el aire acondicionado no funciona. (en la abitasión áse múcho kalór i el áire akondisionádo no funksióna) - In camera fa molto caldo e l'aria condizionata non funziona.
Perdona, pero esta noche hay bastante ruido en el pasillo. (perdóna, pé рo ésta nóche ai bastante ruído en el pasíyo) - Scusa, ma stasera c'è parecchio rumore nel corridoio.
El dueño del apartamento nos ha dejado las llaves en una caja. (el duéño del apartaménto nos a dekhádo las yábes en una káha) - Il proprietario dell'appartamento ci ha lasciato le chiavi in una cassetta.
¿Podemos dejar las maletas aquí hasta esta tarde? (podémos dekhár las malétas akí ásta ésta tárde) - Possiamo lasciare qui le valigie fino a questo pomeriggio?
Para mí, una ensalada y el pescado del día. (para mí, una ensaláda i el peskádo del día) - Per me, un'insalata e il pesce del giorno.
¿Nos puedes traer la cuenta cuando tengas un momento? (nos puédes traér la kuénta kuándo téngas un moménto) - Puoi portarci il conto quando hai un momento?
Ayer acabamos en un bar y nos dieron las tantas. (ayér akabámos en un bar i nos diéron las tándas) - Ieri siamo finiti in un bar e abbiamo fatto tardissimo.
Me faltan un par de cosas para preparar la cena. (me fálta un par de kósas para preparár la séna) - Mi mancano un paio di cose per preparare la cena.
¿Tienes esta chaqueta en una talla más grande? (tiénes ésta chakéta en una táya más gránde) - Hai questa giacca in una taglia più grande?
Tengo una reunión a las diez y todavía no he terminado el informe. (téngo una reunyón a las dyés i todabía no e terminádo el infórme) - Ho una riunione alle dieci e non ho ancora finito il rapporto.
Se me ha quedado sin batería el móvil. (se me a kedádo sin bateríա el móbil) - Mi si è scaricato il cellulare.
El wifi funciona fatal desde ayer. (el uifi funksióna fatál désde ayér) - Il wifi funziona malissimo da ieri.
La exposición era mucho más interesante de lo que esperaba. (la eksposisyón èra múcho más interesánte de lo ke esperába) - La mostra era molto più interessante di quanto mi aspettassi.
La película me gustó, aunque el final me pareció un poco flojo. (la pelikúla me gustó, áunke el finál me paresyó un póko flokho) - Il film mi è piaciuto, anche se il finale mi è sembrato un po' debole.
Después de comer, nos dimos una vuelta por el casco antiguo. (despúes de komér, nos dímos una buélta por el kásko antíguo) - Dopo pranzo abbiamo fatto un giro nel centro storico.
Si mañana hace buen tiempo, podemos hacer una ruta por la montaña. (si mañana áse buen tiémpo, podémos asér una rúta por la montaña) - Se domani fa bel tempo, possiamo fare un'escursione in montagna.
No me apetece bajar a la playa, prefiero quedarme en casa con un libro. (no me apetése bakhár a la pláya, prefyéro kedárme en káса kon un líbro) - Non mi va di andare in spiaggia, preferisco restare a casa con un libro.
Oye, ¿has apagado la luz de la cocina? (Alta stanza, la luz de la kozina? / Óie as apagádo la lus de la kosína) - Ehi, hai spento la luce della cucina?
Voy a poner la lavadora antes de cenar. (Boi a ponér la labadóra ántes de zenár) - Metto la lavatrice prima di cena
¿Dónde están las llaves del coche, tío? (Dónde estàn las llábes del kóche, tío?) - Dove sono le chiavi della macchina, amico?
El gato se ha vuelto a subir a la mesa. (El gáto se a buélto a subír a la mésa) - Il gatto è risalito di nuovo sul tavolo
Venga, a la mesa que se enfría la cena. (Bénga, a la mésa ke se enfría la zéna) - Dai, a tavola che si fredda la cena
Mamá, ¿me firmas esto para el cole? (Mamà, me firmas ésto pára el kóle?) - Mamma, mi firmi questo per la scuola?
No he entendido nada de matemáticas hoy. (No e entendído náda de matemátikas oi) - Non ho capito niente di matematica oggi
¿Puedo quedarme a dormir en casa de Marta? (Puédo kedárme a dormír en kása de Márta?) - Posso dormire a casa di Marta?
A las diez en casa, ni un minuto más. (A las diéz en kása, ni un minúto mas) - A casa alle dieci, non un minuto di più
Necesito algo para el dolor de cabeza. (Nezesíto álgo pára el dolór de kabéza) - Ho bisogno di qualcosa per il mal di testa
¿A qué hora sale el próximo tren a Sevilla? (A ké óra sále el próksimo trén a Sebílla?) - A che ora parte il prossimo treno per Siviglia?
El metro va fatal a estas horas, tío. (El métro ba fatál a éstas óras, tío) - La metro va malissimo a quest'ora, amico
Este autobús no para donde yo pensaba. (Éste autobús no pára dónde yo pensába) - Questo autobus non ferma dove pensavo
Perdona, ¿de qué puerta sale mi vuelo? (Perdóna, de ké puérta sále mi buélo?) - Scusa, da quale gate parte il mio volo?
El ferry sale con retraso por el viento. (El férri sále kon retráso por el biénto) - Il traghetto parte in ritardo per il vento
Sigue todo recto y luego giras a la izquierda. (Sígue tódo rékto i luégo híras a la iskiérda) - Vai sempre dritto e poi giri a sinistra
Se me ha calado el coche en medio de la rotonda. (Se me a kaládo el kóche en médio de la rotónda) - Mi si è spenta la macchina in mezzo alla rotonda
Hay un atasco horrible en la entrada de la ciudad. (Ai un atásko orríble en la entráda de la ziudád) - C'è un traffico terribile all'entrata della città
Se ha ido la luz en todo el barrio otra vez. (Se a ído la lus en tódo el bárrio ótra bes) - È andata via la luce in tutto il quartiere di nuovo
Buenas, querría una habitación doble para esta noche. (Buénas, kerría una abitazión dóble pára ésta nóche) - Buonasera, vorrei una camera doppia per stasera
El baño de la habitación tiene una gotera. (El báño de la abitazión tiéne una gotéra) - Il bagno della camera ha una perdita d'acqua
La anfitriona nos dejó las llaves debajo del felpudo. (La anfitrióna nos dehó las llábes debáho del felpúdo) - La padrona di casa ci ha lasciato le chiavi sotto lo zerbino
¿Nos puede traer la carta y algo para picar? (Nos puéde traér la kárta i álgo pára pikár?) - Ci può portare il menù e qualcosa da sgranocchiare?
Pon dos cañas y unas bravas para empezar. (Pon dos káñas i únas brábas pára empezár) - Metti due birre piccole e delle patate bravas per iniziare
Anoche salimos hasta las tantas, menudo lío. (Anóche salímos ásta las tántas, menúdo lío) - Ieri sera siamo usciti fino a tardi, che casino
Voy al súper a comprar cuatro cosas nada más. (Boi al súper a komprár kuátro kósas náda mas) - Vado al supermercato a comprare giusto quattro cose
Me quiero probar esta chaqueta en la talla mediana. (Me kiéro probár ésta chakéta en la tálla mediána) - Voglio provarmi questa giacca in taglia media
Tengo una reunión a primera hora, no llego a comer. (Téngo úna reunión a priméra óra, no llégo a komér) - Ho una riunione a prima ora, non arrivo per pranzo
Se me ha cortado la videollamada tres veces seguidas. (Se me a kortádo la bideollamáda tres béces segídas) - Mi si è interrotta la videochiamata tre volte di fila
El wifi de casa va fatal desde ayer. (El uífi de kása ba fatál désde ayér) - Il wifi di casa va malissimo da ieri
Esta impresora se atasca cada dos por tres. (Ésta impresóra se atáska káda dos por tres) - Questa stampante si inceppa in continuazione
El museo cierra a las ocho, tenemos tiempo de sobra. (El muséo ziérra a las ócho, tenémos tiémpo de sóbra) - Il museo chiude alle otto, abbiamo un sacco di tempo
La peli empieza en veinte minutos, corre un poco. (La péli empiéza en béinte minútos, kórre un póko) - Il film inizia tra venti minuti, sbrigati un po'
Nos perdimos paseando por el casco antiguo. (Nos perdímos paseándo por el kásko antíguo) - Ci siamo persi passeggiando per il centro storico
El sendero está embarrado, mejor llevamos botas. (El sendéro está embarrádo, mehór llebámos bótas) - Il sentiero è fangoso, meglio portare gli scarponi
Vamos a la playa en cuanto baje el sol un poco. (Bámos a la pláya en kuánto báhe el sol un póko) - Andiamo in spiaggia appena il sole cala un po'
Han venido mis suegros a pasar el fin de semana. (An benído mis suégros a pasár el fin de semána) - Sono venuti i miei suoceri a passare il weekend
Se nos ha estropeado la caldera otra vez, qué rabia. (Se nos a estropeádo la kaldéra ótra bes, ke rábia) - Ci si è rotta di nuovo la caldaia, che rabbia
¿Qué tal todo? Cuánto tiempo sin verte, tío. (Ké tal tódo? Kuánto tiémpo sin bérte, tío) - Come va? Quanto tempo senza vederci, amico
Llevo dos días con fiebre y no se me pasa. (Llébo dos días kon fiébre i no se me pása) - Sono due giorni che ho la febbre e non mi passa
He llamado a emergencias porque se ha caído mi vecina. (E llamádo a emerhénzias porké se a kaído mi bezína) - Ho chiamato il pronto intervento perché è caduta la mia vicina
Voy al gimnasio tres veces por semana si puedo. (Boi al himnásio tres béces por semána si puédo) - Vado in palestra tre volte a settimana se posso
Dicen que mañana va a llover a cántaros. (Dízen ke mañána ba a llobér a kántaros) - Dicono che domani pioverà a dirotto
Tengo que hacer una transferencia antes de que cierre el banco. (Téngo ke azér una transferénzia ántes de ke ziérre el bánko) - Devo fare un bonifico prima che chiuda la banca
Tengo una entrevista de trabajo el jueves por la tarde. (Téngo úna entrebísta de trabáho el huébes por la tárde) - Ho un colloquio di lavoro giovedì pomeriggio
El perro lleva toda la mañana sin querer comer. (El pérro lléba tóda la mañána sin kerér komér) - Il cane sta tutta la mattina senza voler mangiare
Estamos organizando la fiesta de cumpleaños de mi hija. (Estámos organisándo la fiésta de kumpleáños de mi íha) - Stiamo organizzando la festa di compleanno di mia figlia
Me ha llegado una notificación rarísima al móvil. (Me a llegádo úna notifikazión raríssima al móbil) - Mi è arrivata una notifica stranissima sul cellulare
Yo no estoy nada de acuerdo con lo que dices. (Yo no estói náda de akuérdo kon lo ke díses) - Io non sono per niente d'accordo con quello che dici
Hoy me siento un poco baja de energía, la verdad. (Oi me siénto un póko báha de enerhía, la berdád) - Oggi mi sento un po' scarica di energie, sinceramente
Quedamos a las siete en la puerta del cine, ¿vale? (Kedámos a las siéte en la puérta del zíne, bále?) - Ci vediamo alle sette davanti al cinema, va bene?
He sacado la basura porque el cubo ya estaba lleno. (e sakádo la basura porke el kúbo ya estaba yéno) - Ho portato fuori la spazzatura perché il bidone era già pieno.
¿Puedes cerrar la ventana? Está entrando un montón de frío. (puédes serrár la bentána? está entrándo un montón de frío) - Puoi chiudere la finestra? Sta entrando un sacco di freddo.
Voy a doblar la ropa mientras tú terminas de cocinar. (boi a doblár la rópa miéntras tú termínas de kosinár) - Piegherò i panni mentre tu finisci di cucinare.
El perro lleva toda la mañana esperando junto a la puerta. (el pérrо yéba toda la mañana esperándo khúnto a la puérta) - Il cane passa tutta la mattina ad aspettare vicino alla porta.
¿Queda café o tengo que preparar más? (kéda kafé o téngo ke preparár más) - È rimasto del caffè o devo prepararne altro?
He puesto el pan en la mesa para que cada uno coja un trozo. (e puésto el pan en la mésa para ke káda úno kóha un tróso) - Ho messo il pane sul tavolo così ognuno può prenderne un pezzo.
Hoy comemos pronto porque por la tarde tenemos cosas que hacer. (oi komémos pronto porke por la tárde tenémos kósas ke asér) - Oggi pranziamo presto perché nel pomeriggio abbiamo delle cose da fare.
No dejes el vaso al borde de la mesa, que se va a caer. (no déhes el básо al bórde de la mésa, ke se ba a kaér) - Non lasciare il bicchiere sul bordo del tavolo, che cade.
Mi hijo está estudiando para el examen de matemáticas. (mi ího está estudyándo para el eksámen de matemátikas) - Mio figlio sta studiando per l'esame di matematica.
La tutora quiere hablar con nosotros la semana que viene. (la tutóra kyére ablar kon nosótros la semána ke byéne) - La coordinatrice vuole parlare con noi la settimana prossima.
¿Has terminado ya el proyecto de ciencias? (as terminádo ya el proyékto de syénsias) - Hai già finito il progetto di scienze?
Primero acabas los deberes y luego puedes coger el móvil. (priméro akábas los deberes i luégo puédes kohér el móbil) - Prima finisci i compiti e poi puoi prendere il cellulare.
Hoy tienes que estar en casa antes de las nueve. (oi tiénes ke estár en káса ántes de las nuébe) - Oggi devi essere a casa prima delle nove.
Mañana no hace falta que te levantes tan temprano. (mañána no áse fálta ke te lebántes tan tempráno) - Domani non c'è bisogno che ti alzi così presto.
¿Te han recomendado alguna crema para la irritación? (te an rekomendádo alguna kréma para la irritasyón) - Ti hanno consigliato qualche crema per l'irritazione?
Voy a preguntarle al farmacéutico si esto necesita receta. (boi a preguntárle al farmaséutiko si ésto nesesíta reséta) - Chiederò al farmacista se per questo serve la ricetta.
Me duele un poco la espalda desde ayer. (me duéle un póko la espálda désde ayér) - Mi fa un po' male la schiena da ieri.
Tengo cita con el médico a primera hora. (téngo síta kon el médiko a priméra óra) - Ho una visita dal medico di prima mattina.
El andén está al otro lado de la estación. (el andén está al ótro ládo de la estasyón) - Il binario è dall'altra parte della stazione.
¿Este tren termina aquí o sigue hasta Valencia? (éste tren termína akí o sígue ásta balénsia) - Questo treno termina qui o prosegue fino a Valencia?
Han anunciado un cambio de vía de última hora. (an anunsiádo un kámbio de bía de última óra) - Hanno annunciato un cambio di binario all'ultimo momento.
Mejor salimos ahora, porque a esta hora suele haber mucha gente en el metro. (mehor salímos aóra, porke a ésta óra suéle abér múcha khénte en el métro) - Meglio uscire adesso, perché a quest'ora di solito c'è molta gente in metropolitana.
La tarjeta de transporte no me funciona. (la tarhéta de transporte no me funksióna) - La tessera dei trasporti non mi funziona.
Bájate en la tercera parada y luego cruza la plaza. (báhate en la terséra parąda i luégo krúsa la plása) - Scendi alla terza fermata e poi attraversa la piazza.
El conductor ha dicho que tardaremos unos veinte minutos. (el konduktór a dícho ke tardarémos unos béinte minútos) - L'autista ha detto che ci vorranno circa venti minuti.
¿Sabes si hay un taxi cerca de aquí? (sábes si ai un táksi sérka de akí) - Sai se c'è un taxi qui vicino?
Nos han cambiado la puerta de embarque. (nos an kambyádo la puérta de embarke) - Ci hanno cambiato il gate d'imbarco.
Tengo que quitarme el cinturón antes de pasar por el control. (téngo ke kitárme el sinturón ántes de pasár por el kontról) - Devo togliermi la cintura prima di passare ai controlli.
El vuelo se ha retrasado casi dos horas. (el buélo se a retrasádo káси dos óras) - Il volo ha subito quasi due ore di ritardo.
He dejado el pasaporte dentro de la mochila. (e dekhádo el pasapórte déntro de la mochíla) - Ho lasciato il passaporto dentro lo zaino.
El barco ya está entrando en el puerto. (el bárko ya está entrándo en el puérto) - La nave sta già entrando nel porto.
Nos han dicho que embarquemos por la puerta de la izquierda. (nos an dícho ke embarkémos por la puérta de la iskierda) - Ci hanno detto di imbarcarci dalla porta a sinistra.
Gira después de la gasolinera y encontrarás el hotel enseguida. (khíra despúes de la gasolinéra i enkontrarás el otél enseguída) - Gira dopo il distributore e troverai subito l'hotel.
Estoy buscando una calle que se llama San Martín. (estoi buskándo una káye ke se yáma San Martín) - Sto cercando una strada che si chiama San Martín.
El coche de delante ha frenado de golpe. (el kóche de delánte a frenádo de gólpe) - La macchina davanti ha frenato bruscamente.
Creo que tenemos una rueda pinchada. (kréo ke tenémos una ruéda pintcháda) - Credo che abbiamo una gomma bucata.
Voy a llamar al seguro antes de mover el coche. (boi a yamár al segúro ántes de mobér el kóche) - Chiamo l'assicurazione prima di spostare la macchina.
El ascensor no funciona y estamos en la sexta planta. (el asensór no funksióna i estámos en la sésta plánta) - L'ascensore non funziona e siamo al sesto piano.
Han cortado el agua del edificio por una avería. (an kortádo el água del edifísio por una abería) - Hanno tolto l'acqua nell'edificio per un guasto.
El técnico ha dicho que volverá esta tarde. (el tékniko a dícho ke bolberá ésta tárde) - Il tecnico ha detto che tornerà questo pomeriggio.
La habitación está limpia, pero falta una toalla. (la abitasión está límpia, péгo fálta una toáya) - La camera è pulita, ma manca un asciugamano.
¿Podrían revisar el mando del aire acondicionado? (podrían rebisár el mándo del áire akondisionádo) - Potreste controllare il telecomando dell'aria condizionata?
La ducha pierde agua y el suelo se está mojando. (la dúcha pyérde água i el suélo se está mokándo) - La doccia perde acqua e il pavimento si sta bagnando.
El anfitrión nos ha enviado las instrucciones por WhatsApp. (el anfitriyón nos a embiádo las instruksyónes por uatsáp) - L'host ci ha mandato le istruzioni su WhatsApp.
La casa es pequeña, pero tiene todo lo necesario. (la káса es pekéña, péгo tiéne todo lo nesesário) - La casa è piccola, ma ha tutto il necessario.
¿Podemos reservar una mesa para cuatro esta noche? (podémos reserbár una mésa para kuátro ésta nóche) - Possiamo prenotare un tavolo per quattro stasera?
Yo tomaré agua con gas y luego ya veré qué pido para comer. (yo tomaré água kon gas i luégo ya beré ke pído para komér) - Io prenderò dell'acqua frizzante e poi vedrò cosa ordinare da mangiare.
Voy a recoger la cocina mientras tú terminas de ducharte. (boi a rekohér la kosína miéntras tú termínas de duchárte) - Sistemo la cucina mentre tu finisci di fare la doccia.
He tendido las sábanas en el balcón porque hacía buen día. (e tendído las sábаnas en el balkón porke asía buen día) - Ho steso le lenzuola sul balcone perché c'era una bella giornata.
¿Quién ha dejado abierta la puerta del frigorífico? (kyén a dekhádo abyérta la puérta del frigorífiko) - Chi ha lasciato aperta la porta del frigorifero?
Pon el móvil a cargar antes de irte a dormir. (pon el móbil a kargár ántes de írte a dormír) - Metti il cellulare in carica prima di andare a dormire.
El lavavajillas todavía no ha terminado el programa. (el lababayíyas todabía no a terminádo el prográma) - La lavastoviglie non ha ancora finito il programma.
Voy a abrir un poco la ventana para ventilar la habitación. (boi a abrír un póko la bentána para bentilár la abitasión) - Apro la finestra un po' per arieggiare la stanza.
He comprado yogures para el desayuno de mañana. (e komprádo yogúres para el desayúno de mañana) - Ho comprato degli yogurt per la colazione di domani.
¿A quién le toca poner la mesa hoy? (a kyén le tóka ponér la mésa oi) - A chi tocca apparecchiare oggi?
No tengo mucha hambre, así que comeré algo ligero. (no téngo múcha ámbre, así ke komeré álgo likéro) - Non ho molta fame, quindi mangerò qualcosa di leggero.
Si quieres postre, queda un poco de tarta en la nevera. (si kyéres postre, kéda un póko de tárta en la nebéra) - Se vuoi il dolce, è rimasta un po' di torta in frigorifero.
Mi hija tiene que entregar el trabajo mañana por la mañana. (mi íha tiéne ke entregár el trabákho mañana por la mañana) - Mia figlia deve consegnare il lavoro domani mattina.
El profesor explicó el tema otra vez porque nadie lo había entendido. (el profesór ekspliko el téma ótra bes porke nádie lo abía entendído) - L'insegnante ha spiegato di nuovo l'argomento perché nessuno l'aveva capito.
¿Has preparado ya la mochila para mañana? (as preparádo ya la mochíla para mañana) - Hai già preparato lo zaino per domani?
No puedes quedarte despierto hasta tan tarde entre semana. (no puédes kedárte despiérto ásta tan tárde entre semána) - Non puoi restare sveglio fino a così tardi durante la settimana.
Venga, ponte los zapatos que vamos a salir. (bénga, pónte los sapátos ke bamos a salír) - Dai, mettiti le scarpe che usciamo.
El médico me ha dicho que descanse unos días. (el médiko me a dícho ke deskánse unos días) - Il medico mi ha detto di riposare per qualche giorno.
¿Sabes si esta farmacia está abierta a estas horas? (sábes si ésta farmásia está abyérta a éstas óras) - Sai se questa farmacia è aperta a quest'ora?
Me he tomado un paracetamol y voy a ver si mejora el dolor. (me e tomádo un paracetamól i boi a ber si mekhóra el dolór) - Ho preso del paracetamolo e vedo se il dolore migliora.
Tengo que volver al hospital para los resultados de las pruebas. (téngo ke bolbér al ospitál para los resultádos de las pru ébas) - Devo tornare in ospedale per i risultati degli esami.
¿En qué vagón está nuestro asiento? (en ke bagón está nuéstro asyénto) - In quale carrozza si trova il nostro posto?
Date prisa, que el tren sale dentro de cinco minutos. (date prísa, ke el tren sále déntro de sínko minútos) - Sbrigati, il treno parte tra cinque minuti.
Este tren va con destino a Sevilla. (éste tren ba kon destíno a Sebíya) - Questo treno è diretto a Siviglia.
Hay demasiada gente en el andén esta mañana. (ai demasiáda khénte en el andén ésta mañana) - C'è troppa gente sul binario stamattina.
La estación de metro está justo debajo de la plaza. (la estasyón de métro está khústo debáho de la plása) - La stazione della metropolitana è proprio sotto la piazza.
Creo que hemos cogido el metro en la dirección contraria. (kréo ke émos kohído el métro en la direksyón kontrária) - Credo che abbiamo preso la metropolitana nella direzione opposta.
No te preocupes, todavía tenemos tiempo para hacer el transbordo. (no te preokúpes, todabía tenémos tyémpo para asér el transbórdo) - Non preoccuparti, abbiamo ancora tempo per cambiare linea.
El autobús se ha quedado parado por una avería. (el autobús se a kedádo parádo por una abería) - L'autobus è rimasto fermo per un guasto.
¿Dónde puedo recargar la tarjeta del autobús? (dónde puédo rekargár la tarhéta del autobús) - Dove posso ricaricare la tessera dell'autobus?
Con este tráfico vamos a llegar tarde seguro. (kon éste tráfiko bamos a yegár tárde segúro) - Con questo traffico arriveremo sicuramente tardi.
El GPS me está llevando por una calle que no conozco. (el khepéése me está yebándo por una káye ke no konósko) - Il GPS mi sta portando per una strada che non conosco.
La batería se ha descargado mientras estaba aparcado. (la bateríа se a deskargádo miéntras estaba aparкádo) - La batteria si è scaricata mentre ero parcheggiato.
Por suerte, nadie ha resultado herido en el accidente. (por suérte, nádie a resultádo erído en el aksidénte) - Per fortuna, nessuno è rimasto ferito nell'incidente.
No encuentro el gato, lleva horas escondido. (no enkuéntro el gáto, yéba óras eskondído) - Non trovo il gatto, è nascosto da ore.
Han cerrado la carretera por riesgo de desprendimientos. (an serrádo la karretéra por riesgo de desprendimiéntos) - Hanno chiuso la strada per il rischio di frane.
El agua está entrando por debajo de la puerta. (el água está entrándo por debáho de la puérta) - L'acqua sta entrando da sotto la porta.
El electricista viene mañana a revisar la instalación. (el elektrisísta byéne mañana a rebisár la instalasyón) - L'elettricista viene domani a controllare l'impianto.
La caldera se ha apagado y no consigo volver a encenderla. (la kaldéгa se a apagádo i no konsígo bolbér a ensendérla) - La caldaia si è spenta e non riesco a riaccenderla.
¿Podrían cambiarme de habitación? Hay demasiado ruido. (podrían kambyárme de abitasión? ai demasiádo ruído) - Potreste cambiarmi di camera? C'è troppo rumore.
La caja fuerte no se abre con el código que me dieron. (la káha fuérte no se ábre kon el kódigo ke me diéron) - La cassaforte non si apre con il codice che mi hanno dato.
Necesitamos una habitación tranquila porque viajamos con una niña. (nesesitámos una abitasión trankíla porke byahámos kon una níña) - Abbiamo bisogno di una camera tranquilla perché viaggiamo con una bambina.
El desayuno está incluido en el precio de la habitación. (el desayúno está inkluído en el présio de la abitasión) - La colazione è inclusa nel prezzo della camera.
El apartamento tiene una terraza pequeña que da al patio. (el apartaménto tiéne una terása pekéña ke da al pátio) - L'appartamento ha una piccola terrazza che dà sul cortile.
El anfitrión nos ha dejado una botella de agua de bienvenida. (el anfitriyón nos a dekhádo una botéya de água de benbenída) - L'host ci ha lasciato una bottiglia d'acqua di benvenuto.
Para empezar, me gustaría pedir una sopa de verduras. (para empesár, me gustaríа pedír una sopa de berdúras) - Per cominciare, vorrei ordinare una zuppa di verdure.
¿Me puede recomendar algún plato típico de la zona? (me puéde rekomendár algún plato típiko de la sona) - Mi può consigliare qualche piatto tipico della zona?
El camarero ha sido muy amable y nos ha explicado todo. (el kamaréro a sído mui amáble i nos a ekspl ikádo todo) - Il cameriere è stato molto gentile e ci ha spiegato tutto.
Esta mañana he limpiado el baño antes de ir al trabajo. (ésta mañana e limpiádo el baño ántes de ír al trabákho) - Stamattina ho pulito il bagno prima di andare al lavoro.
Deja las llaves encima de la cómoda para no perderlas. (déha las yábes ensíma de la kómoda para no perdérlas) - Lascia le chiavi sopra il comò per non perderle.
Voy a poner una lavadora de ropa oscura. (boi a ponér una labadóra de rópa oscúra) - Metto una lavatrice di panni scuri.
El perro necesita salir, lleva toda la tarde inquieto. (el pérro nesesíta salír, yéba toda la tárde inkyéto) - Il cane ha bisogno di uscire, è irrequieto da tutto il pomeriggio.
¿Has cerrado bien el grifo de la cocina? (as serrádo byén el grífo de la kosína) - Hai chiuso bene il rubinetto della cucina?
He preparado unos huevos y tostadas para todos. (e preparádo unos uébos i tostádas para todos) - Ho preparato uova e toast per tutti.
Hoy cenamos juntos porque hace mucho que no coincidimos. (oi senámos khúntos porke áse múcho ke no koinsidímos) - Stasera ceniamo insieme perché è da tanto che non riusciamo a stare insieme.
Guarda en la nevera, creo que todavía queda queso. (guárda en la nebéra, kréo ke todabía kéda késo) - Guarda in frigorifero, credo che ci sia ancora del formaggio.
No hace falta que me esperes para comer. (no áse fálta ke me espéres para komér) - Non c'è bisogno che mi aspetti per mangiare.
Mi hijo tiene mañana un examen de historia. (mi ího tiéne mañana un eksámen de istória) - Mio figlio ha domani un esame di storia.
La profesora les ha pedido que lean un capítulo para el lunes. (la profesóra les a pedído ke léan un kapítulo para el lúnes) - L'insegnante ha chiesto loro di leggere un capitolo per lunedì.
¿Te falta mucho para acabar de estudiar? (te fálta múcho para akabár de estudiár) - Ti manca ancora molto per finire di studiare?
Puedes invitar a tu amiga, pero avísame antes. (puédes inbitár a tu amíga, péгo abísame ántes) - Puoi invitare la tua amica, ma avvisami prima.
A partir de mañana quiero que prepares tú el desayuno. (a partír de mañana kyéro ke prepáres tú el desayúno) - Da domani voglio che prepari tu la colazione.
Te he dicho que primero ordenes la habitación. (te e dícho ke priméro órdenes la abitasión) - Ti ho detto che prima devi mettere in ordine la camera.
Me he levantado con un poco de fiebre. (me e lebantádo kon un póko de fiébre) - Mi sono svegliato con un po' di febbre.
¿Tienen algo para la congestión nasal? (tiénen álgo para la kongestión nasál) - Avete qualcosa per la congestione nasale?
El médico quiere hacerme una radiografía. (el médiko kyére asérme una radiografíа) - Il medico vuole farmi una radiografia.
Si empeoras esta noche, iremos a urgencias. (si empeóras ésta nóche, irémos a urkhénsias) - Se stai peggio stasera, andremo al pronto soccorso.
¿Hay algún retraso en los trenes de esta mañana? (ai algún retraso en los trenes de ésta mañana) - Ci sono ritardi sui treni di stamattina?
He comprado el billete en la máquina de la estación. (e komprádo el biyéte en la mákina de la estasyón) - Ho comprato il biglietto alla macchinetta della stazione.
No te subas todavía, ese tren no es el nuestro. (no te súbas todabía, ése tren no es el nuéstro) - Non salire ancora, quello non è il nostro treno.
La salida del metro está al final de la calle. (la salída del métro está al finál de la káye) - L'uscita della metropolitana è in fondo alla strada.
Se ha averiado una escalera mecánica en la estación. (se a aberiádo una eskaléra mekaníka en la estasyón) - Si è guastata una scala mobile in stazione.
El autobús ha pasado de largo y no ha parado. (el autobús a pasádo de lárgo i no a parádo) - L'autobus è passato senza fermarsi.
Creo que este autobús va bastante lleno a estas horas. (kréo ke éste autobús ba bastante yéno a éstas óras) - Credo che a quest'ora questo autobus sia piuttosto pieno.
¿Tengo que sacar el portátil de la mochila en el control? (téngo ke sakár el portátil de la mochíla en el kontról) - Devo tirare fuori il portatile dallo zaino ai controlli?
Mi puerta todavía no aparece en las pantallas. (mi puérta todabía no aparése en las pantáyas) - Il mio gate non compare ancora sugli schermi.
Nos han pedido que acudamos a la puerta de embarque inmediatamente. (nos an pedído ke akudámos a la puérta de embarke imediataménte) - Ci hanno chiesto di recarci immediatamente al gate d'imbarco.
El mar está bastante movido y el barco se nota mucho. (el mar está bastante mobído i el bárko se nóta múcho) - Il mare è piuttosto mosso e sulla nave si sente molto il movimento.
¿Dónde está la oficina de información del puerto? (dónde está la ofisína de informasyón del puérto) - Dov'è l'ufficio informazioni del porto?
Para llegar al museo, cruza el puente y sigue las indicaciones. (para yegár al muséo, krúsa el puénte i sígue las indikasyónes) - Per arrivare al museo, attraversa il ponte e segui le indicazioni.
Me he desorientado un poco con tantas calles. (me e desorientádo un póko kon tántas káyes) - Mi sono un po' disorientato con tutte queste strade.
He aparcado justo detrás de la farmacia. (e aparкádo khústo detràs de la farmásia) - Ho parcheggiato proprio dietro la farmacia.
El motor se ha calentado demasiado durante el viaje. (el motór se a kalentádo demasiádo duránte el byáhe) - Il motore si è surriscaldato troppo durante il viaggio.
Hay que llamar a la grúa para llevar el coche al taller. (ai ke yamár a la grúa para yebár el kóche al tayér) - Bisogna chiamare il carro attrezzi per portare la macchina in officina.
La policía ha cortado el tráfico en esta dirección. (la polisía a kortádo el tráfiko en ésta direksyón) - La polizia ha bloccato il traffico in questa direzione.
No podemos salir porque la puerta automática no responde. (no podémos salír porke la puérta automátika no respónde) - Non possiamo uscire perché la porta automatica non risponde.
El agua caliente tarda mucho en llegar a la ducha. (el água kalyénte tárda múcho en yegár a la dúcha) - L'acqua calda impiega molto ad arrivare alla doccia.
El frigorífico hace un ruido extraño desde anoche. (el frigorífiko áse un ruído ekstráño désde anóche) - Il frigorifero fa uno strano rumore da ieri sera.
¿Podrían despertarnos a las siete y media? (podrían despertárnos a las syéte i média) - Potreste svegliarci alle sette e mezza?
La habitación da a una calle bastante transitada. (la abitasión da a una káye bastante transitáda) - La camera dà su una strada piuttosto trafficata.
Hemos tenido un problema con la reserva y no aparece en el sistema. (émos tenído un probléma kon la resérba i no aparése en el sistéma) - Abbiamo avuto un problema con la prenotazione e non compare nel sistema.
El dueño nos ha recomendado un restaurante que está muy cerca. (el duéño nos a rekomendádo un restoránte ke está mui sérka) - Il proprietario ci ha consigliato un ristorante che è molto vicino.
¿Podría traerme el menú, por favor? (podría traérme el menú, por fabór) - Potrebbe portarmi il menù, per favore?
Para beber, tomaremos dos aguas y una cerveza sin alcohol. (para bebér, tomarémos dos águas i una serbésa sin alkól) - Da bere prenderemo due acque e una birra analcolica.
Disculpe (dis-kul-pe) - Mi scusi
¿Dónde está el baño? (don-de es-ta el ba-nio) - Dov'è il bagno?
`;

/* ================================================================
   PARSING — trasforma il testo grezzo in un array di oggetti
   { es: "...", it: "..." } pronto all'uso in spafile.html.
   ================================================================ */
const FRASI_SPA = FRASI_SPA_RAW
  .split('\n')
  .map(riga => riga.trim())
  .filter(riga => riga.length > 0)
  .map(riga => {
    const sep = ' - ';
    const idx = riga.indexOf(sep);
    if (idx === -1) return null;
    return {
      es: riga.slice(0, idx).trim(),
      it: riga.slice(idx + sep.length).trim()
    };
  })
  .filter(coppia => coppia !== null);
