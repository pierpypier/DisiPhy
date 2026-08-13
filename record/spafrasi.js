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
Anoche dejé secando los platos y esta mañana ya estaban todos guardados. (anóche dekhé sekándo los plátos i ésta mañana ya estaban todos guardádos) - Ieri sera ho lasciato asciugare i piatti e stamattina erano già tutti riposti.
¿Puedes pasar la aspiradora antes de que lleguen los invitados? (puédes pasár la aspiradóra ántes de ke yéguen los imbita dos) - Puoi passare l'aspirapolvere prima che arrivino gli ospiti?
He encontrado las llaves debajo del sofá. (e enkontrádo las yábes debáho del sofà) - Ho trovato le chiavi sotto il divano.
Voy a sacar la ropa de la secadora en cuanto termine. (boi a sakár la rópa de la sekadóra en kuánto termíne) - Tiro fuori i panni dall'asciugatrice appena finisce.
El gato lleva un rato maullando delante de la puerta. (el gáto yéba un ráto maullándo delánte de la puérta) - Il gatto miagola da un po' davanti alla porta.
Hoy toca limpiar los cristales de las ventanas. (oi tóka limpiár los kristáles de las bentánas) - Oggi tocca pulire i vetri delle finestre.
¿Quién quiere huevos para desayunar? (kyén kyére uébos para desayunár) - Chi vuole le uova per colazione?
He dejado la fruta cortada en la nevera. (e dekhádo la fruta kortáda en la nebéra) - Ho lasciato la frutta tagliata in frigorifero.
Si no tienes hambre ahora, puedes comer más tarde. (si no tiénes ámbre aóra, puédes komér más tárde) - Se non hai fame adesso, puoi mangiare più tardi.
Esta noche hacemos algo sencillo para cenar. (ésta nóche asémos álgo sensíyo para senár) - Stasera prepariamo qualcosa di semplice per cena.
Mi hija está repasando para el examen de mañana. (mi íha está repasándo para el eksámen de mañana) - Mia figlia sta ripassando per l'esame di domani.
En clase han empezado un tema nuevo de literatura. (en kláse an empesádo un téma nuébo de literatúra) - In classe hanno iniziato un nuovo argomento di letteratura.
¿Te has acordado de llevar el libro que necesitas? (te as akordádo de yebár el líbro ke nesesítas) - Ti sei ricordato di portare il libro che ti serve?
Puedes usar el ordenador después de terminar los deberes. (puédes usár el ordenadór despúes de terminár los deberes) - Puoi usare il computer dopo aver finito i compiti.
Mañana tienes que levantarte a tiempo para coger el autobús. (mañána tiénes ke lebantárte a tyémpo para kohér el autobús) - Domani devi alzarti in tempo per prendere l'autobus.
No te quedes con el móvil hasta la madrugada. (no te kédes kon el móbil ásta la madrugáda) - Non stare al cellulare fino a notte fonda.
Llevo dos días con dolor de cabeza y no se me pasa. (yébo dos días kon dolór de kabésa i no se me pássa) - Ho mal di testa da due giorni e non mi passa.
¿Necesita algo más para la tos? (nesesíta álgo más para la tos) - Ha bisogno di qualcos'altro per la tosse?
Me han dado hora para el jueves por la tarde. (me an dádo óra para el khu ébes por la tárde) - Mi hanno dato un appuntamento per giovedì pomeriggio.
Si te mareas, avisa a una enfermera. (si te maréas, abísa a una enferméra) - Se ti senti svenire, avvisa un'infermiera.
El tren regional tarda un poco más, pero cuesta menos. (el tren rekhionál tárda un póko más, péгo kuésta ménos) - Il treno regionale ci mette un po' di più, ma costa meno.
¿En qué dirección está la salida de la estación? (en ke direksyón está la salída de la estasyón) - In che direzione si trova l'uscita della stazione?
Han puesto más máquinas para comprar billetes. (an puésto más mákinas para komprár biyétes) - Hanno installato più macchinette per comprare i biglietti.
No subas al tren hasta que se abran las puertas. (no súbas al tren ásta ke se ábran las puértas) - Non salire sul treno finché non si aprono le porte.
La línea azul está cerrada por obras. (la línea asúl está serráda por óbras) - La linea blu è chiusa per lavori.
Tenemos que salir en la próxima estación y volver atrás. (tenémos ke salír en la próksima estasyón i bolbér atrás) - Dobbiamo scendere alla prossima stazione e tornare indietro.
El autobús ha llegado antes de lo previsto. (el autobús a yegádo ántes de lo prebísto) - L'autobus è arrivato prima del previsto.
Si pierdes este autobús, el siguiente pasa en diez minutos. (si pyérdes éste autobús, el siguiénte pássa en dyes minútos) - Se perdi questo autobus, il prossimo passa tra dieci minuti.
El tráfico está parado desde la rotonda. (el tráfiko está parádo désde la rotónda) - Il traffico è fermo dalla rotonda.
Nos queda poco combustible, tenemos que parar en la próxima gasolinera. (nos kéda póko kombustíble, tenémos ke parár en la próksima gasolinéra) - Abbiamo poco carburante, dobbiamo fermarci al prossimo distributore.
El coche hace un ruido metálico cuando acelero. (el kóche áse un ruído metáliko kuándo aseléro) - La macchina fa un rumore metallico quando accelero.
Por suerte, conseguimos salir del coche sin ayuda. (por suérte, konsigímos salír del kóche sin ayúda) - Per fortuna siamo riusciti a uscire dalla macchina senza aiuto.
Han cerrado varios accesos por las inundaciones. (an serrádo bários aksésos por las inundasyónes) - Hanno chiuso diversi accessi a causa degli allagamenti.
El ascensor se ha quedado bloqueado entre dos plantas. (el asensór se a kedádo blokéado éntre dos plántas) - L'ascensore è rimasto bloccato tra due piani.
El técnico ha encontrado la fuga debajo del fregadero. (el tékniko a enkontrádo la fúga debáho del fregadéro) - Il tecnico ha trovato la perdita sotto il lavello.
No hay calefacción porque la caldera está averiada. (no ai kalefaksión porke la kaldéra está aberiáda) - Non c'è riscaldamento perché la caldaia è guasta.
La habitación huele a tabaco y habíamos pedido una para no fumadores. (la abitasión uéle a tabáko i abíamos pedído una para no fumadóres) - La camera puzza di fumo e ne avevamo chiesta una per non fumatori.
El agua de la ducha sale fría de repente. (el água de la dúcha sále fría de repénte) - L'acqua della doccia diventa improvvisamente fredda.
¿Sería posible hacer el check-out un poco más tarde? (sería posíble asér el chekaut un póko más tárde) - Sarebbe possibile fare il check-out un po' più tardi?
Hemos dejado el apartamento tal y como lo encontramos. (émos dekhádo el apartaménto tal i komo lo enkontrámos) - Abbiamo lasciato l'appartamento esattamente come l'abbiamo trovato.
El anfitrión responde muy rápido cuando le escribimos. (el anfitriyón respónde mui rápido kuándo le eskribímos) - L'host risponde molto rapidamente quando gli scriviamo.
¿Nos puede poner una mesa cerca de la ventana? (nos puéde ponér una mésa sérka de la bentána) - Può metterci un tavolo vicino alla finestra?
Para mí, el plato del día, pero sin cebolla. (para mí, el plato del día, péгo sin seboya) - Per me il piatto del giorno, ma senza cipolla.
La comida estaba buenísima, pero tardaron bastante en servirla. (la komída estaba buenísima, péгo tardáron bastante en serbíгla) - Il cibo era buonissimo, ma ci hanno messo parecchio a servirlo.
Antes de acostarme voy a dejar preparada la ropa de mañana. (ántes de akostárme boi a dekhár preparáda la rópa de mañana) - Prima di andare a letto preparo i vestiti per domani.
He limpiado la mesa y ahora voy a barrer el suelo. (e limpiádo la mésa i aóra boi a barrér el suélo) - Ho pulito il tavolo e ora spazzo il pavimento.
No encuentro el cargador que dejé junto al sofá. (no enkuéntro el kargadór ke dekhé khúnto al sofà) - Non trovo il caricabatterie che avevo lasciato vicino al divano.
El perro se ha puesto a ladrar porque ha oído algo fuera. (el pérro se a puésto a ladrár porke a oído álgo fuéra) - Il cane ha iniziato ad abbaiare perché ha sentito qualcosa fuori.
Voy a echar un vistazo a la lavadora, que está haciendo un ruido raro. (boi a echár un bistáso a la labadóra, ke está asyéndo un ruído ráro) - Do un'occhiata alla lavatrice, che sta facendo uno strano rumore.
¿Has dejado encendida la luz del dormitorio otra vez? (as dekhádo ensendída la lus del dormitório ótra bes) - Hai lasciato di nuovo accesa la luce della camera?
Esta mañana solo me ha dado tiempo a tomar un café. (ésta mañana sólo me a dádo tyémpo a tomár un kafé) - Stamattina ho avuto tempo solo per prendere un caffè.
He preparado demasiado arroz y ha sobrado bastante. (e preparádo demasiádo arros i a sobrádo bastante) - Ho preparato troppo riso e ne è rimasto parecchio.
Si quieres, caliento lo que quedó de ayer. (si kyéres, kalyénto lo ke kedó de ayér) - Se vuoi, riscaldo quello che è rimasto ieri.
No pongas tanta sal, que luego no se puede comer. (no póngas tánta sal, ke luégo no se puéde komér) - Non mettere troppo sale, altrimenti poi non si riesce a mangiare.
El niño está haciendo un dibujo para el colegio. (el níño está asyéndo un dibúho para el kolekhio) - Il bambino sta facendo un disegno per la scuola.
Hoy tienen una excursión y tienen que llevar comida de casa. (oi tiénen una ekskursyón i tiénen ke yebár komída de káса) - Oggi hanno una gita e devono portarsi il pranzo da casa.
La profesora me ha enviado un mensaje sobre la reunión de padres. (la profesóra me a embiádo un mensáhe sóbre la reunyón de pá­dres) - L'insegnante mi ha mandato un messaggio sulla riunione dei genitori.
¿A qué hora sales del instituto? (a ke óra sáles del institutо) - A che ora esci da scuola?
Cuando vuelvas, acuérdate de avisarme. (kuándo buélbas, akuérdate de abisárme) - Quando torni, ricordati di avvisarmi.
Hoy no puedes salir porque tienes que estudiar. (oi no puédes salír porke tiénes ke estudiár) - Oggi non puoi uscire perché devi studiare.
Me encuentro bastante mejor después de haber dormido bien. (me enkuéntro bastante mekhór despúes de abér dormído byén) - Mi sento molto meglio dopo aver dormito bene.
La enfermera me ha pedido que espere en la sala. (la enferméra me a pedído ke espére en la sála) - L'infermiera mi ha chiesto di aspettare in sala.
El resultado de la prueba estará listo dentro de unos días. (el resultádo de la pru éba estará lísto déntro de unos días) - Il risultato dell'esame sarà pronto tra qualche giorno.
El tren está a punto de llegar al andén. (el tren está a púnto de yegár al andén) - Il treno sta per arrivare al binario.
¿Tenemos que validar el billete antes de subir? (tenémos ke balidár el biyéte ántes de subír) - Dobbiamo convalidare il biglietto prima di salire?
Me he quedado sin efectivo y necesito comprar un billete. (me e kedádo sin efektíbo i nesesíto komprár un biyéte) - Sono rimasto senza contanti e devo comprare un biglietto.
La estación está más lejos de lo que pensaba. (la estasyón está más léhos de lo ke pensába) - La stazione è più lontana di quanto pensassi.
Para llegar al centro hay que hacer dos transbordos. (para yegár al séntrо ai ke asér dos transbórdos) - Per arrivare in centro bisogna fare due cambi.
El metro se ha detenido entre dos estaciones. (el métro se a detenído éntre dos estasyónes) - La metropolitana si è fermata tra due stazioni.
Creo que he perdido la tarjeta de transporte. (kréo ke e pérdido la tarhéta de transporte) - Credo di aver perso la tessera dei trasporti.
El autobús viene lleno, esperemos al siguiente. (el autobús byéne yéno, esperémos al siguiénte) - L'autobus arriva pieno, aspettiamo il prossimo.
¿Me avisas cuando lleguemos a mi parada? (me abísas kuándo yeguémos a mi parąda) - Mi avvisi quando arriviamo alla mia fermata?
Hay un accidente más adelante y por eso vamos tan despacio. (ai un aksidénte más adelantе i por éso bamos tan despásio) - C'è un incidente più avanti, per questo andiamo così piano.
He tenido que parar porque se ha encendido una luz roja en el salpicadero. (e tenído ke parár porke se a ensendído una lus róha en el salpikadéro) - Ho dovuto fermarmi perché si è accesa una spia rossa sul cruscotto.
La grúa llegará en unos treinta minutos. (la grúa yegará en unos tréinta minútos) - Il carro attrezzi arriverà tra circa trenta minuti.
El vuelo está previsto para las seis y cuarto. (el buélo está prebísto para las séis i kuárto) - Il volo è previsto per le sei e un quarto.
¿Dónde puedo facturar esta maleta? (dónde puédo fakturár ésta maléta) - Dove posso imbarcare questa valigia?
Han cerrado una parte del aeropuerto por obras. (an serrádo una párte del aeropuérto por óbras) - Hanno chiuso una parte dell'aeroporto per lavori.
El barco sale dentro de media hora, así que tenemos que darnos prisa. (el bárko sále déntro de média óra, así ke tenémos ke dárnos prísa) - Il traghetto parte tra mezz'ora, quindi dobbiamo sbrigarci.
El mar está tranquilo y hace un tiempo estupendo para navegar. (el mar está trankílo i áse un tyémpo estupéndo para nabegár) - Il mare è calmo e c'è un tempo stupendo per navigare.
Perdona, ¿me puedes decir cómo se llega a la catedral? (perdóna, me puédes desir kómo se yéga a la katedrál) - Scusa, mi puoi dire come si arriva alla cattedrale?
Estamos a diez minutos andando desde aquí. (estámos a dyes minútos andándo désde akí) - Siamo a dieci minuti a piedi da qui.
He tenido que cambiar de ruta porque había una calle cortada. (e tenído ke kambyár de rúta porke abía una káye kortáda) - Ho dovuto cambiare percorso perché c'era una strada chiusa.
No puedo abrir el coche, creo que la llave no funciona. (no puédo abrír el kóche, kréo ke la yábe no funksióna) - Non riesco ad aprire la macchina, credo che la chiave non funzioni.
El coche se ha quedado sin batería en mitad del aparcamiento. (el kóche se a kedádo sin bateríа en mitád del aparcamiénto) - La macchina è rimasta senza batteria in mezzo al parcheggio.
Ha empezado a llover justo cuando salíamos de casa. (a empesádo a yobér khústo kuándo salíamos de káса) - Ha iniziato a piovere proprio quando stavamo uscendo di casa.
Según la previsión, mañana hará bastante frío. (según la prebisión, mañana ará bastante frío) - Secondo le previsioni, domani farà piuttosto freddo.
Hace tanto viento que mejor dejamos la excursión para otro día. (áse tánto byénto ke mekhór dekhámos la ekskursyón para ótro día) - C'è così tanto vento che è meglio rimandare l'escursione a un altro giorno.
Voy a poner a cargar el móvil mientras preparo la cena. (boi a ponér a kargár el móbil miéntras prepáro la séna) - Metto il cellulare in carica mentre preparo la cena.
He dejado las ventanas abiertas para que entre un poco de aire. (e dekhádo las bentánas abyértas para ke én tre un póko de áire) - Ho lasciato le finestre aperte per far entrare un po' d'aria.
¿Dónde has guardado las pilas del mando? (dónde as guardádo las pìlas del mándo) - Dove hai messo le pile del telecomando?
El perro ha volcado el cuenco del agua otra vez. (el pérro a bolkádo el kuénko del água ótra bes) - Il cane ha rovesciato di nuovo la ciotola dell'acqua.
Voy a limpiar el horno porque está bastante sucio. (boi a limpiár el órno porke está bastante súsio) - Pulisco il forno perché è piuttosto sporco.
No pongas la ropa mojada encima de la cama. (no póngas la rópa mokháda ensíma de la káma) - Non mettere i vestiti bagnati sul letto.
He comprado leche porque se había acabado. (e komprádo léche porke se abía akabádo) - Ho comprato il latte perché era finito.
¿Quieres que te prepare un bocadillo? (kyéres ke te prepáre un bokadíyo) - Vuoi che ti prepari un panino?
Hoy prefiero cenar algo que no sea pesado. (oi prefyéro senár álgo ke no séa pesádo) - Stasera preferisco mangiare qualcosa di leggero.
Guarda qué bien ha quedado la comida. (guárda ke byén a kedádo la komída) - Guarda com'è venuto bene il cibo.
El examen de inglés les ha resultado bastante fácil. (el eksámen de inglés les a resultádo bastante fásil) - L'esame di inglese è risultato piuttosto facile per loro.
Mi hijo está preparando una presentación para clase. (mi ího está preparándo una presentasyón para kláse) - Mio figlio sta preparando una presentazione per la scuola.
La profesora ha cambiado la fecha del examen. (la profesóra a kambyádo la fécha del eksámen) - L'insegnante ha cambiato la data dell'esame.
No salgas todavía, quiero hablar contigo un momento. (no sálgas todabía, kyéro ablar kontígo un moménto) - Non uscire ancora, voglio parlarti un momento.
Si vas a llegar tarde, mándame un mensaje. (si bas a yegár tárde, mándame un mensáhe) - Se fai tardi, mandami un messaggio.
Me he levantado varias veces esta noche. (me e lebantádo bárias béses ésta nóche) - Mi sono alzato diverse volte stanotte.
Tengo la nariz tapada y me cuesta respirar. (téngo la narís tapáda i me kuésta respirár) - Ho il naso chiuso e faccio fatica a respirare.
El médico me ha recomendado beber más agua. (el médiko me a rekomendádo bebér más água) - Il medico mi ha consigliato di bere più acqua.
Si te encuentras peor, no esperes y ve a urgencias. (si te enkuéntras peór, no espéres i be a urkhénsias) - Se ti senti peggio, non aspettare e vai al pronto soccorso.
El tren de las ocho acaba de salir. (el tren de las ócho akaba de salír) - Il treno delle otto è appena partito.
¿Dónde puedo consultar los horarios de los trenes? (dónde puédo konsultár los orários de los trenes) - Dove posso consultare gli orari dei treni?
El revisor nos ha pedido los billetes. (el rebisór nos a pedído los biyétes) - Il controllore ci ha chiesto i biglietti.
Nos quedan tres estaciones para llegar. (nos ké dan trés estasyónes para yegár) - Ci mancano tre fermate per arrivare.
La salida correcta está al otro extremo del andén. (la salída korrékta está al ótro ekstrémo del andén) - L'uscita corretta è all'altra estremità del binario.
He perdido la conexión y ahora tengo que esperar media hora. (e pérdido la koneksyón i aóra téngo ke esperár média óra) - Ho perso la coincidenza e ora devo aspettare mezz'ora.
El metro va más rápido que el autobús a esta hora. (el métro ba más rápido ke el autobús a ésta óra) - A quest'ora la metropolitana è più veloce dell'autobus.
Hay una huelga y algunos trenes no circulan. (ai una uélga i algú nos trenes no sirkúlan) - C'è uno sciopero e alcuni treni non circolano.
El conductor ha tenido que desviarse por una calle cortada. (el konduktór a tenído ke desbiyárse por una káye kortáda) - L'autista ha dovuto fare una deviazione a causa di una strada chiusa.
¿Podemos bajar aquí o hay que esperar a la siguiente parada? (podémos bakhár akí o ai ke esperár a la siguiénte parąda) - Possiamo scendere qui o dobbiamo aspettare la fermata successiva?
He llegado al aeropuerto con bastante antelación. (e yegádo al aeropuérto kon bastante antelasión) - Sono arrivato in aeroporto con largo anticipo.
La pantalla indica que el vuelo está embarcando. (la pantáya indíka ke el buélo está embarkándo) - Lo schermo indica che stanno imbarcando sul volo.
¿Dónde está el control de pasaportes? (dónde está el kontról de pasapórtes) - Dov'è il controllo passaporti?
La maleta no ha llegado a la cinta de equipajes. (la maléta no a yegádo a la sínta de ekipáhes) - La valigia non è arrivata al nastro bagagli.
El barco se ha retrasado porque había niebla en el puerto. (el bárko se a retrasádo porke abía niébla en el puérto) - Il traghetto è in ritardo perché c'era nebbia nel porto.
Tenemos que recoger las tarjetas de embarque antes de subir. (tenémos ke rekohér las tarhétas de embarke ántes de subír) - Dobbiamo ritirare le carte d'imbarco prima di salire.
Sigue las señales hasta llegar a la salida principal. (sígue las señáles ásta yegár a la salída prinsipál) - Segui i cartelli fino all'uscita principale.
La plaza está justo detrás de esa iglesia. (la plása está khústo detrás de ésa iglesya) - La piazza è proprio dietro quella chiesa.
Me he equivocado de camino, tenemos que volver. (me e ekibokádo de kamíno, tenémos ke bolbér) - Ho sbagliato strada, dobbiamo tornare indietro.
El coche no frena bien y prefiero no seguir conduciendo. (el kóche no fréna byén i prefyéro no seguír kondusyéndo) - La macchina non frena bene e preferisco non continuare a guidare.
He llamado a la policía porque alguien ha golpeado mi coche. (e yamádo a la polisía porke algyén a golpiádo mi kóche) - Ho chiamato la polizia perché qualcuno ha urtato la mia macchina.
El tráfico está peor de lo habitual esta mañana. (el tráfiko está peór de lo abitual ésta mañana) - Stamattina il traffico è peggiore del solito.
No hay electricidad en casa desde hace una hora. (no ai elektrisidád en káса désde áse una óra) - Non c'è elettricità in casa da un'ora.
El fontanero vendrá a primera hora de la mañana. (el fontanéro bendrá a priméra óra de la mañana) - L'idraulico verrà di prima mattina.
El aire acondicionado de la habitación gotea continuamente. (el áire akondisionádo de la abitasión gotéa kontinuaménte) - L'aria condizionata della camera perde acqua continuamente.
¿Podrían dejarme una manta extra? Tengo un poco de frío. (podrían dekhárme una mánta ekstra? téngo un póko de frío) - Potreste lasciarmi una coperta in più? Ho un po' freddo.
Voy a recoger la ropa del tendedero antes de que empiece a llover. (boi a rekohér la rópa del tendédo antes de ke empyése a yobér) - Ritiro i panni dallo stendino prima che inizi a piovere.
He fregado el suelo de la cocina y todavía está mojado. (e fregádo el suélo de la kosína i todabía está mokhádo) - Ho lavato il pavimento della cucina ed è ancora bagnato.
¿Puedes dejarme un juego de llaves por si llego antes que tú? (puédes dekhárme un khuégo de yábes por si yégo antes ke tú) - Puoi lasciarmi un mazzo di chiavi nel caso arrivi prima di te?
El gato se ha metido en el armario y no quiere salir. (el gáto se a metído en el armário i no kyére salír) - Il gatto si è infilato nell'armadio e non vuole uscire.
Voy a descongelar el pollo para la comida de mañana. (boi a deskonselár el póyo para la komída de mañana) - Scongelo il pollo per il pranzo di domani.
¿Has puesto la mesa o lo hago yo? (as puésto la mésa o lo ágo yo) - Hai apparecchiato o lo faccio io?
Hoy tenemos que comer rápido porque salimos enseguida. (oi tenémos ke komér rápido porke salímos enseguída) - Oggi dobbiamo mangiare in fretta perché usciamo subito dopo.
No abras el horno todavía, que el pastel no está hecho. (no ábras el órno todabía, ke el pastél no está écho) - Non aprire ancora il forno, la torta non è pronta.
La niña ha dejado los lápices por toda la habitación. (la níña a dekhádo los lápises por toda la abitasión) - La bambina ha lasciato le matite per tutta la stanza.
Mañana no hay clase, así que podemos dormir un poco más. (mañána no ai kláse, así ke podémos dormír un póko más) - Domani non c'è scuola, quindi possiamo dormire un po' di più.
El examen era más difícil de lo que esperaba. (el eksámen èra más difísil de lo ke esperába) - L'esame era più difficile di quanto mi aspettassi.
Tengo que entregar este ejercicio antes del viernes. (téngo ke entregár éste ersisísio antes del byérnes) - Devo consegnare questo esercizio entro venerdì.
¿Has hablado con tu profesor sobre las notas? (as abládo kon tu profesór sóbre las nótas) - Hai parlato con il tuo insegnante dei voti?
Puedes ir a casa de tu amigo después de comer. (puédes ír a káса de tu amígo despúes de komér) - Puoi andare a casa del tuo amico dopo pranzo.
Esta noche quiero que estés en casa a las diez. (ésta nóche kyéro ke estés en káса a las dyés) - Stasera voglio che tu sia a casa alle dieci.
Me he hecho daño en la muñeca haciendo deporte. (me e écho daño en la muñéka asyéndo depórte) - Mi sono fatto male al polso facendo sport.
¿Tiene algo para aliviar el dolor muscular? (tiéne álgo para alibiár el dolór muskular) - Ha qualcosa per alleviare il dolore muscolare?
La doctora me ha pedido que vuelva la semana que viene. (la doktóra me a pedído ke buélba la semána ke byéne) - La dottoressa mi ha chiesto di tornare la settimana prossima.
Han llevado a mi padre a hacerle unas pruebas. (an yebádo a mi pá dre a asérle unas pru ébas) - Hanno portato mio padre a fare degli esami.
El tren de alta velocidad sale del primer andén. (el tren de álta belosidád sále del primér andén) - Il treno ad alta velocità parte dal primo binario.
¿Este billete sirve también para el tren de vuelta? (éste biyéte sírbe tambyén para el tren de buélta) - Questo biglietto vale anche per il viaggio di ritorno?
El tren se ha quedado parado por un problema técnico. (el tren se a kedádo parádo por un probléma tékniko) - Il treno è rimasto fermo per un problema tecnico.
Hay una cafetería justo al lado de la estación. (ai una kafetería khústo al ládo de la estasyón) - C'è un bar proprio accanto alla stazione.
La entrada del metro está enfrente del supermercado. (la entráda del métro está enfrénte del supermerkádo) - L'ingresso della metropolitana è di fronte al supermercato.
Para ir al centro, tienes que coger la línea roja. (para ír al séntrо, tiénes ke kohér la línea róha) - Per andare in centro devi prendere la linea rossa.
La estación está llena porque acaba de llegar otro tren. (la estasyón está yéna porke akaba de yegár ótro tren) - La stazione è piena perché è appena arrivato un altro treno.
El autobús pasa cada quince minutos durante el día. (el autobús pássa káda kínsе minútos duránte el día) - L'autobus passa ogni quindici minuti durante il giorno.
¿Me puede avisar cuando lleguemos a la terminal? (me puéde abisár kuándo yeguémos a la terminál) - Mi può avvisare quando arriviamo al terminal?
He dejado el coche en el aparcamiento de la estación. (e dekhádo el kóche en el aparcamiénto de la estasyón) - Ho lasciato la macchina nel parcheggio della stazione.
El indicador de combustible está casi en reserva. (el indikadór de kombustíble está káси en resérba) - L'indicatore del carburante è quasi in riserva.
El volante vibra cuando voy a más de cien. (el bolánte bíbra kuándo boi a más de syén) - Il volante vibra quando supero i cento all'ora.
He llamado al servicio de asistencia y ya vienen a ayudarnos. (e yamádo al serbísio de asisténsia i ya byénen a ayudárnos) - Ho chiamato il servizio di assistenza e stanno già venendo ad aiutarci.
La calle está cortada porque se ha caído un árbol. (la káye está kortáda porke se a kaído un árbol) - La strada è chiusa perché è caduto un albero.
El agua ha entrado en el garaje después de la tormenta. (el água a entrádo en el garáhe despúes de la tormenta) - L'acqua è entrata nel garage dopo il temporale.
El técnico ha cambiado una pieza y ahora funciona perfectamente. (el tékniko a kambyádo una pyésa i aóra funksióna perfek tamente) - Il tecnico ha cambiato un pezzo e ora funziona perfettamente.
La calefacción hace un ruido cada vez que se enciende. (la kalefaksión áse un ruído káda bes ke se ensyénde) - Il riscaldamento fa un rumore ogni volta che si accende.
La habitación tiene vistas al jardín y es muy luminosa. (la abitasión tiéne bístas al hardín i es mui luminósa) - La camera dà sul giardino ed è molto luminosa.
Nos han dejado las toallas limpias encima de la cama. (nos an dekhádo las toáyas límpias ensíma de la káma) - Ci hanno lasciato gli asciugamani puliti sul letto.
El desayuno empieza a las siete y termina a las diez. (el desayúno empyésa a las syéte i termína a las dyés) - La colazione inizia alle sette e termina alle dieci.
Querríamos pedir algo para compartir entre los tres. (kerríamos pedír álgo para kompartír éntre los tres) - Vorremmo ordinare qualcosa da condividere tra noi tre.
¿Nos puede traer otra botella de agua? (nos puéde traér ótra botéya de água) - Può portarci un'altra bottiglia d'acqua?
Este plato lleva frutos secos, ¿verdad? (éste plato yéba frútos sékos, berdád) - Questo piatto contiene frutta secca, vero?
Ayer salimos con unos amigos y nos reímos muchísimo. (ayér salímos kon unos amígos i nos reímos muchísimо) - Ieri siamo usciti con degli amici e abbiamo riso tantissimo.
Hacía años que no veía a ese chico. (asía años ke no beía a ése chíko) - Erano anni che non vedevo quel ragazzo.
Qué bien sienta salir un rato después de una semana de trabajo. (ke byén syénta salír un ráto despúes de una semána de trabákho) - Fa proprio bene uscire un po' dopo una settimana di lavoro.
He separado el papel y el plástico para tirarlos en sus contenedores. (e separádo el papél i el plástiko para tirárlos en sus kontenedóres) - Ho separato la carta e la plastica per buttarle nei rispettivi contenitori.
¿Puedes apagar el aire cuando salgas de la habitación? (puédes apagár el áire kuándo salgas de la abitasión) - Puoi spegnere l'aria condizionata quando esci dalla stanza?
La bombilla del baño se ha fundido otra vez. (la bombíya del baño se a fundído ótra bes) - La lampadina del bagno si è bruciata di nuovo.
He puesto las sobras en un recipiente para mañana. (e puésto las sóbras en un resipyénte para mañana) - Ho messo gli avanzi in un contenitore per domani.
¿Te importa bajar un poco la música? (te impórta bakhár un póko la músika) - Ti dispiace abbassare un po' la musica?
Hoy hace demasiado calor para hacer deporte fuera. (oi áse demasiádo kalór para asér depórte fuéra) - Oggi fa troppo caldo per fare sport all'aperto.
Llevo toda la mañana intentando ordenar los papeles. (yébo toda la mañana intentándo ordenár los papéles) - Sto cercando di mettere in ordine i documenti da tutta la mattina.
El banco me ha cobrado una comisión que no esperaba. (el bánko me a kobrádo una komisión ke no esperába) - La banca mi ha addebitato una commissione che non mi aspettavo.
Quiero hacer una transferencia a otra cuenta. (kyéro asér una transferénsia a ótra kuénta) - Voglio fare un bonifico su un altro conto.
¿Puedo sacar dinero con esta tarjeta? (puédo sakár dinéro kon ésta tarhéta) - Posso prelevare denaro con questa carta?
La aplicación del banco me pide una contraseña nueva. (la aplikasyón del bánko me píde una kontraseña nuéba) - L'app della banca mi chiede una nuova password.
Tengo que revisar unos documentos antes de la reunión. (téngo ke rebisár unos dokumentos ántes de la reunyón) - Devo controllare alcuni documenti prima della riunione.
Te he enviado el informe por correo electrónico. (te e embiádo el infórme por koréo elektróniko) - Ti ho mandato il rapporto per email.
Tenemos que entregar el proyecto antes de que termine el mes. (tenémos ke entregár el proyékto ántes de ke termíne el mes) - Dobbiamo consegnare il progetto prima della fine del mese.
La reunión se ha alargado más de lo previsto. (la reunyón se a alargádo más de lo prebísto) - La riunione è durata più del previsto.
Ahora mismo estoy hablando con un cliente. (aóra mismo estoi ablándo kon un kliyénte) - In questo momento sto parlando con un cliente.
Se me ha olvidado adjuntar el archivo al correo. (se me a olbidádo adkhuntár el archíbo al koréo) - Mi sono dimenticato di allegare il file all'email.
Mañana tengo una entrevista para un puesto nuevo. (mañána téngo una entrevista para un puésto nuébo) - Domani ho un colloquio per un nuovo posto di lavoro.
En mi opinión, esta oferta merece la pena. (en mi opinyón, ésta oférta merése la péna) - Secondo me, questa offerta vale la pena.
Durante la entrevista me preguntaron por mi experiencia. (duránte la entrevista me preguntáron por mi eksperyénsia) - Durante il colloquio mi hanno chiesto della mia esperienza.
La videollamada se ha cortado justo cuando empezábamos. (la bidеoyamáda se a kortádo khústo kuándo empesábamos) - La videochiamata è caduta proprio quando stavamo iniziando.
¿Me oyes bien o se corta el sonido? (me óyes byén o se kórta el sonído) - Mi senti bene o l'audio si interrompe?
Espera un segundo, voy a conectar los auriculares. (espéra un segúndo, boi a konektár los aurikuláres) - Aspetta un secondo, collego le cuffie.
La impresora no reconoce el ordenador. (la impresóra no rekonóse el ordenadór) - La stampante non riconosce il computer.
He reiniciado el router y parece que funciona mejor. (e reini syádo el ráuter i parése ke funksióna mekhór) - Ho riavviato il router e sembra che funzioni meglio.
El cargador se ha calentado demasiado. (el kargadór se a kalentádo demasiádo) - Il caricabatterie si è surriscaldato troppo.
La entrada al museo incluye la exposición temporal. (la entráda al muséo inklúye la eksposisyón temporál) - Il biglietto del museo comprende la mostra temporanea.
Esta pieza arqueológica tiene más de dos mil años. (ésta pyésa arkeolókhika tiéne más de dos mil años) - Questo reperto archeologico ha più di duemila anni.
¿Podemos hacer fotos dentro de la exposición? (podémos asér fotos déntro de la eksposisyón) - Possiamo fare foto all'interno della mostra?
La obra empieza a las ocho y tenemos los asientos en la segunda fila. (la óbra empyésa a las ócho i tenémos los asyéntos en la segúnda ríla) - Lo spettacolo inizia alle otto e abbiamo i posti in seconda fila.
Prefiero sentarme cerca de la salida por si tenemos que irnos antes. (prefyéro sentárme sérka de la salída por si tenémos ke írnos ántes) - Preferisco sedermi vicino all'uscita nel caso dovessimo andare via prima.
El libro que me recomendaste me está gustando mucho. (el líbro ke me rekomendáste me está gustándo múcho) - Il libro che mi hai consigliato mi sta piacendo molto.
No he visto todavía la serie de la que todo el mundo habla. (no e bísto todabía la série de la ke todo el mundo ábla) - Non ho ancora visto la serie di cui parlano tutti.
La película está basada en hechos reales. (la pelikúla está basáda en échos reáles) - Il film è basato su fatti realmente accaduti.
He empezado a entrenar otra vez después de varios meses. (e empesádo a entrenár ótra bes despúes de bários meses) - Ho ricominciato ad allenarmi dopo diversi mesi.
Hoy me toca trabajar las piernas en el gimnasio. (oi me tóka trabahár las pyérnas en el khimnásio) - Oggi devo allenare le gambe in palestra.
Después del entrenamiento necesito descansar un rato. (despúes del entrenamiénto nesesíto deskansár un ráto) - Dopo l'allenamento ho bisogno di riposarmi un po'.
La previsión dice que por la noche habrá tormenta. (la prebisyón dise ke por la nóche abrá tormenta) - Le previsioni dicono che stanotte ci sarà un temporale.
Parece que las temperaturas van a bajar durante el fin de semana. (parése ke las temperaturás ban a bakhár duránte el fin de semána) - Sembra che le temperature scenderanno durante il fine settimana.
Este invierno ha sido bastante más suave de lo normal. (éste inbyérno a sído bastante más suábe de lo normál) - Quest'inverno è stato decisamente più mite del normale.
Hace un frío tremendo fuera, ponte algo de abrigo. (áse un frío treméndo fuéra, pónte álgo de abrígo) - Fuori fa un freddo tremendo, mettiti qualcosa di pesante.
No me ha llegado todavía la notificación de la aplicación. (no me a yegádo todabía la notifikasyón de la aplikasyón) - Non mi è ancora arrivata la notifica dell'app.
Te he escrito por mensaje porque no sabía si estabas ocupado. (te e eskrito por mensáhe porke no sabía si estabas okupádo) - Ti ho scritto perché non sapevo se fossi occupato.
He visto tu comentario y no estoy del todo de acuerdo. (e bísto tu komentário i no estoi del todo de akuerdo) - Ho visto il tuo commento e non sono del tutto d'accordo.
Entiendo lo que dices, pero creo que hay otro punto de vista. (entyéndo lo ke dises, péгo kréo ke ai ótro púnto de bista) - Capisco quello che dici, ma credo che ci sia un altro punto di vista.
Hoy me siento con mucha energía y tengo ganas de hacer cosas. (oi me syénto kon múcha enerkhía i téngo gánas de asér kósas) - Oggi mi sento pieno di energia e ho voglia di fare cose.
Últimamente estoy un poco cansado, pero se me pasará. (últimaménte estoi un póko kansádo, péгo se me pasará) - Ultimamente sono un po' stanco, ma mi passerà.
No te preocupes por mí, estoy bien. (no te preokúpes por mí, estoi byén) - Non preoccuparti per me, sto bene.
Me ha hecho ilusión recibir tu mensaje. (me a écho ilusyón resibír tu mensáhe) - Mi ha fatto piacere ricevere il tuo messaggio.
Estoy bastante nervioso por lo que pueda pasar. (estoi bastante nerbyóso por lo ke puéda pasár) - Sono piuttosto nervoso per quello che potrebbe succedere.
Necesito desconectar un poco después de este día. (nesesíto deskonektár un póko despúes de éste día) - Ho bisogno di staccare un po' dopo questa giornata.
La verdad es que me preocupa bastante este asunto. (la berdád es ke me preokúpa bastante éste asúnto) - A dire il vero questa faccenda mi preoccupa parecchio.
Me alegro de que todo haya salido bien. (me alégro de ke todo áya salído byén) - Sono contento che sia andato tutto bene.
No estoy enfadado, simplemente estoy decepcionado. (no estoi enfadádo, simplemente estoi desepsionádo) - Non sono arrabbiato, sono semplicemente deluso.
A mí también me parece una buena idea. (a mí tambyén me parése una buéna idéa) - Anche a me sembra una buona idea.
Yo lo veo de otra manera, pero respeto tu opinión. (yo lo béo de ótra manéra, péгo respéto tu opinyón) - Io la vedo in un altro modo, ma rispetto la tua opinione.
En eso tienes toda la razón. (en éso tiénes toda la rasón) - Su questo hai perfettamente ragione.
No creo que sea tan sencillo como parece. (no kréo ke séa tan sensíyo komo parése) - Non credo che sia così semplice come sembra.
Estoy de acuerdo contigo hasta cierto punto. (estoi de akuerdo kontígo ásta syérto púnto) - Sono d'accordo con te fino a un certo punto.
No estoy convencido de que esa sea la mejor solución. (no estoi kombensído de ke ésa séa la mekhór solusyón) - Non sono convinto che quella sia la soluzione migliore.
¿Cuándo quedamos para tomar un café? (kuándo kedámos para tomár un kafé) - Quando ci vediamo per prendere un caffè?
Apunta la cita en el calendario para que no se nos olvide. (apúnta la síta en el kalendário para ke no se nos olbide) - Segna l'appuntamento sul calendario così non ce ne dimentichiamo.
Tengo libre el martes por la tarde. (téngo líbre el mártes por la tárde) - Sono libero martedì pomeriggio.
Nos vemos a las ocho en la entrada principal. (nos bé mos a las ócho en la entráda prinsipál) - Ci vediamo alle otto all'ingresso principale.
Llámame cuando tengas un momento libre. (yámame kuándo téngas un moménto líbre) - Chiamami quando hai un momento libero.
El próximo mes tengo que renovar el documento. (el próksimo mes téngo ke renobár el dokumento) - Il mese prossimo devo rinnovare il documento.
La reunión está prevista para el día quince. (la reunyón está prebísta para el día kínsе) - La riunione è prevista per il giorno quindici.
Son las nueve menos cuarto, todavía llegamos a tiempo. (son las nuébe ménos kuárto, todabía yegámos a tyémpo) - Sono le nove meno un quarto, siamo ancora in tempo.
Tengo una cita a las cuatro y media. (téngo una síta a las kuátro i média) - Ho un appuntamento alle quattro e mezza.
¿Te viene bien quedar el sábado por la mañana? (te byéne byén kedár el sábаdo por la mañana) - Ti va bene vederci sabato mattina?
No llegues tarde, que la reserva es a las ocho. (no yégues tárde, ke la resérba es a las ócho) - Non fare tardi, la prenotazione è alle otto.
Estoy aprendiendo español por mi cuenta. (estoi aprendyéndo espanyol por mi kuénta) - Sto imparando lo spagnolo da solo.
Tengo una clase de conversación esta tarde. (téngo una kláse de konbersasyón ésta tárde) - Ho una lezione di conversazione questo pomeriggio.
El profesor nos ha puesto un ejercicio para practicar en casa. (el profesór nos a puésto un ersisísio para praktikár en káса) - L'insegnante ci ha dato un esercizio da fare a casa.
Me cuesta pronunciar algunas palabras correctamente. (me kuésta pronunsyár algú nas palábras korréktamente) - Faccio fatica a pronunciare correttamente alcune parole.
Quiero apuntarme a un curso de fotografía. (kyéro apuntárme a un kúrsо de fotografíа) - Voglio iscrivermi a un corso di fotografia.
Ayer conocí a una pareja muy simpática durante la excursión. (ayér konosí a una paréha mui simpátika duránte la ekskursyón) - Ieri ho conosciuto una coppia molto simpatica durante l'escursione.
Nos presentaron a sus amigos y estuvimos hablando toda la tarde. (nos presentáron a sus amígos i estubímos ablándo toda la tárde) - Ci hanno presentato ai loro amici e abbiamo parlato tutto il pomeriggio.
Hace tiempo que no conozco gente nueva. (áse tyémpo ke no konósko khénte nuéba) - È da tempo che non conosco persone nuove.
¿Te apetece venir con nosotros esta noche? (te apetése benír kon nosótros ésta nóche) - Ti va di venire con noi stasera?
Mi amigo me ha recomendado un documental sobre historia. (mi amígo me a rekomendádo un dokumentál sóbre istória) - Un mio amico mi ha consigliato un documentario sulla storia.
Estoy leyendo una novela que me está enganchando muchísimo. (estoi leyéndo una nobéla ke me está enganchándo muchísimо) - Sto leggendo un romanzo che mi sta prendendo tantissimo.
El final del libro me dejó pensando durante varios días. (el finál del líbro me dekhó pensándo duránte bários días) - Il finale del libro mi ha fatto riflettere per diversi giorni.
No sabía que esa película estaba basada en una novela. (no sabía ke ésa pelikúla estaba basáda en una nobéla) - Non sapevo che quel film fosse basato su un romanzo.
El documental explica el tema de una forma muy clara. (el dokumentál eksplíka el téma de una fórma mui klára) - Il documentario spiega l'argomento in modo molto chiaro.
Me gusta escuchar música mientras hago las tareas de casa. (me gústa eskuchár músika miéntras ágo las taréas de káса) - Mi piace ascoltare musica mentre faccio i lavori di casa.
Los fines de semana suelo salir en bicicleta por las afueras. (los fínes de semána suélo salír en bisikléta por las afuéras) - Nei fine settimana di solito esco in bicicletta in periferia.
He empezado a coleccionar monedas antiguas. (e empesádo a koleksionár mónedas antíguas) - Ho iniziato a collezionare monete antiche.
Anoche jugamos a cartas y acabamos riéndonos todos. (anóche khugámos a kártas i akabámos riéndonos todos) - Ieri sera abbiamo giocato a carte e abbiamo finito tutti per ridere.
Tengo que cambiar las sábanas porque ya llevan varios días puestas. (téngo ke kambyár las sábаnas porke ya yéban bários días puéstas) - Devo cambiare le lenzuola perché sono già lì da diversi giorni.
Voy a ordenar el cajón de los cubiertos. (boi a ordenár el kakhón de los kubyértos) - Metto in ordine il cassetto delle posate.
Se ha quedado una prenda atrapada en la puerta de la lavadora. (se a kedádo una prénda atrapáda en la puérta de la labadóra) - Un indumento è rimasto incastrato nella porta della lavatrice.
¿Has visto el mando de la televisión? (as bísto el mándo de la telebisión) - Hai visto il telecomando della televisione?
El perro está dormido debajo de la mesa. (el pérro está dormído debáho de la mésa) - Il cane dorme sotto il tavolo.
Voy a llenar el lavavajillas y lo pongo en marcha. (boi a yenár el lababayíyas i lo póngo en márcha) - Riempio la lavastoviglie e la metto in funzione.
Queda muy poca comida, mañana tendremos que hacer la compra. (kéda mui póka komída, mañana tendrémos ke asér la kómprа) - È rimasto pochissimo cibo, domani dovremo fare la spesa.
¿Me ayudas a llevar estas cajas al trastero? (me ayúdas a yebár éstas káhas al trastéro) - Mi aiuti a portare queste scatole in ripostiglio?
He dejado las persianas medio bajadas para que no entre tanto sol. (e dekhádo las persiánas médio bakhá das para ke no én tre tánto sol) - Ho lasciato le persiane mezze abbassate per far entrare meno sole.
Esta noche podemos aprovechar lo que tenemos en la despensa. (ésta nóche podémos aprobechár lo ke tenémos en la despénsa) - Stasera possiamo usare quello che abbiamo in dispensa.
¿Quieres un poco más de café o ya has terminado? (kyéres un póko más de kafé o ya as terminádo) - Vuoi ancora un po' di caffè o hai già finito?
He puesto la carne en el frigorífico para que se descongele despacio. (e puésto la kárne en el frigorífiko para ke se deskonséle despásio) - Ho messo la carne in frigorifero perché si scongeli lentamente.
No comas tan deprisa, que todavía tenemos tiempo. (no kómas tan deprísa, ke todabía tenémos tyémpo) - Non mangiare così in fretta, abbiamo ancora tempo.
¿Quién quiere ayudarme a preparar la ensalada? (kyén kyére ayudárme a preparár la ensaláda) - Chi vuole aiutarmi a preparare l'insalata?
El profesor ha explicado que el examen será la próxima semana. (el profesór a ekspl ikádo ke el eksámen será la próksima semána) - L'insegnante ha spiegato che l'esame sarà la prossima settimana.
Mi hijo se ha olvidado otra vez de llevar el material a clase. (mi ího se a olbidádo ótra bes de yebár el materiál a kláse) - Mio figlio si è dimenticato di nuovo di portare il materiale a scuola.
¿Puedes ayudarme con este ejercicio de matemáticas? (puédes ayudárme kon éste ersisísio de matemátikas) - Puoi aiutarmi con questo esercizio di matematica?
Hoy tengo que recoger a los niños a la salida del colegio. (oi téngo ke rekohér a los niños a la salída del kolekhio) - Oggi devo andare a prendere i bambini all'uscita da scuola.
Si acabas pronto, puedes ver un capítulo antes de dormir. (si akábas pronto, puédes ber un kapítulo ántes de dormír) - Se finisci presto, puoi vedere un episodio prima di dormire.
No quiero que te acostumbres a acostarte tan tarde. (no kyéro ke te akostúmbres a akostárte tan tárde) - Non voglio che ti abitui ad andare a letto così tardi.
La farmacéutica me ha explicado cómo tengo que tomar este medicamento. (la farmaséutika me a ekspl ikádo kómo téngo ke tomár éste medikaménto) - La farmacista mi ha spiegato come devo prendere questo farmaco.
¿Hace falta pedir cita para esta prueba? (áse fálta pedír síta para ésta pru éba) - Bisogna prendere appuntamento per questo esame?
Me han dicho que beba mucha agua durante el día. (me an dícho ke béba múcha água duránte el día) - Mi hanno detto di bere molta acqua durante il giorno.
Todavía estoy esperando que me llamen para entrar en consulta. (todabía estoi esperándo ke me yámen para entrár en konsúlta) - Sto ancora aspettando che mi chiamino per entrare in visita.
El tren nocturno llega a primera hora de la mañana. (el tren noktúrno yéga a priméra óra de la mañana) - Il treno notturno arriva di prima mattina.
¿Dónde están las taquillas para comprar los billetes? (dónde están las takíyas para komprár los biyétes) - Dove sono le biglietterie per comprare i biglietti?
El tren que necesitamos sale dentro de veinte minutos. (el tren ke nesesitámos sále déntro de béinte minútos) - Il treno che ci serve parte tra venti minuti.
Nos hemos confundido de dirección al salir de la estación. (nos émos konfundído de direksyón al salír de la estasyón) - Abbiamo sbagliato direzione uscendo dalla stazione.
La estación de metro tiene cuatro salidas diferentes. (la estasyón de métro tiéne kuátro salídas diferéntes) - La stazione della metropolitana ha quattro uscite diverse.
El tren del metro acaba de pasar y el siguiente tardará cinco minutos. (el tren del métro akaba de pasár i el siguiénte tardará sínko minútos) - È appena passata la metropolitana e la prossima arriverà tra cinque minuti.
Hay que dejar salir a la gente antes de entrar en el vagón. (ai ke dekhár salír a la khénte ántes de entrár en el bagón) - Bisogna lasciare uscire le persone prima di entrare nella carrozza.
El autobús ha cambiado de recorrido por las obras. (el autobús a kambyádo de rekordído por las óbras) - L'autobus ha cambiato percorso a causa dei lavori.
¿Esta parada tiene servicio durante toda la noche? (ésta parąda tiéne serbísio duránte toda la nóche) - Questa fermata è servita per tutta la notte?
El conductor nos ha indicado dónde tenemos que bajarnos. (el konduktór nos a indikádo dónde tenémos ke bakhárnos) - L'autista ci ha indicato dove dobbiamo scendere.
El vuelo ya aparece en la pantalla de salidas. (el buélo ya aparése en la pantáya de salídas) - Il volo compare già sullo schermo delle partenze.
Me han pedido que pese la maleta en el mostrador. (me an pedído ke pése la maléta en el mostrador) - Mi hanno chiesto di pesare la valigia al banco.
Tenemos que pasar primero por el control de seguridad. (tenémos ke pasár priméro por el kontról de seguridád) - Dobbiamo passare prima dai controlli di sicurezza.
El puerto queda bastante lejos del centro de la ciudad. (el puérto kéda bastante léhos del séntrо de la syudád) - Il porto è piuttosto lontano dal centro della città.
El barco tiene una zona cubierta para los pasajeros. (el bárko tiéne una sona kubyérta para los pasahéros) - Il traghetto ha una zona coperta per i passeggeri.
Estamos buscando un sitio donde dejar el coche unas horas. (estámos buskándo un sítio dónde dekhár el kóche unas óras) - Stiamo cercando un posto dove lasciare la macchina per qualche ora.
Si sigues esta avenida llegarás directamente a la plaza mayor. (si sígues ésta abenída yegarás direktaménte a la plása mayor) - Se segui questo viale arriverai direttamente nella piazza principale.
He tenido que reducir la velocidad porque la carretera estaba mojada. (e tenído ke redusír la belosidád porke la karretéra estaba mokháda) - Ho dovuto ridurre la velocità perché la strada era bagnata.
El coche pierde aceite y tengo que llevarlo al taller. (el kóche pyérde aséite i téngo ke yebárlo al tayér) - La macchina perde olio e devo portarla in officina.
Se ha pinchado una rueda justo delante de nuestra casa. (se a pintchádo una ruéda khústo delánte de nuéstra káса) - Una gomma si è bucata proprio davanti a casa nostra.
El agua de la calle ha empezado a bajar por fin. (el água de la káye a empesádo a bakhár por fin) - Finalmente l'acqua dalla strada ha iniziato a defluire.
Han reparado el semáforo que llevaba varios días estropeado. (an reparádo el semáforo ke yebába bários días estropeádo) - Hanno riparato il semaforo che era guasto da diversi giorni.
He tendido la ropa dentro de casa porque fuera está lloviendo. (e tendído la rópa déntro de káса porke fuéra está yobyéndo) - Ho steso i panni in casa perché fuori sta piovendo.
Voy a limpiar el filtro de la secadora, que está lleno de pelusas. (boi a limpiár el fíl tro de la sekadóra, ke está yéno de pelúsas) - Pulisco il filtro dell'asciugatrice, che è pieno di lanugine.
Cierra bien la puerta, que se ha quedado abierta. (syérra byén la puérta, ke se a kedádo abyérta) - Chiudi bene la porta, che è rimasta aperta.
He dejado las llaves en la entrada, encima de la cómoda. (e dekhádo las yábes en la entráda, ensíma de la kómoda) - Ho lasciato le chiavi all'ingresso, sopra il mobile.
El lavavajillas está limpio, pero todavía no lo he vaciado. (el lababayíyas está límpio, péгo todabía no lo e basyádo) - La lavastoviglie è pulita, ma non l'ho ancora svuotata.
El gato se ha escapado al rellano y no quiere volver. (el gáto se a eskapádo al reyáno i no kyére bolbér) - Il gatto è scappato sul pianerottolo e non vuole rientrare.
He preparado unas tostadas por si alguien tiene hambre. (e preparádo unas tostádas por si algyén tiéne ámbre) - Ho preparato dei toast nel caso qualcuno abbia fame.
No queda yogur, así que mañana compraré más. (no kéda yogúr, así ke mañana kompraré más) - Non è rimasto yogurt, quindi domani ne comprerò altro.
¿A qué hora comemos hoy? (a ke óra komémos oi) - A che ora pranziamo oggi?
Deja un poco de sitio, que todavía falta el postre. (déha un póko de sítio, ke todabía fálta el postre) - Lascia un po' di spazio, che manca ancora il dolce.
Mi hijo necesita tranquilidad para concentrarse con los deberes. (mi ího nesesíta trankilidád para konsentrárse kon los deberes) - Mio figlio ha bisogno di tranquillità per concentrarsi sui compiti.
La profesora ha mandado bastante tarea para el fin de semana. (la profesóra a mandádo bastante taréa para el fin de semána) - L'insegnante ha dato parecchi compiti per il fine settimana.
¿Has estudiado ya para el control de mañana? (as estudiádo ya para el kontról de mañana) - Hai già studiato per la verifica di domani?
Si necesitas ayuda, dímelo y lo vemos juntos. (si nesesítas ayúda, dímelo i lo bémos khúntos) - Se hai bisogno di aiuto, dimmelo e lo vediamo insieme.
Primero terminas los deberes y después puedes salir. (priméro termínas los deberes i despúes puédes salír) - Prima finisci i compiti e poi puoi uscire.
Hoy puedes quedarte un poco más con tus amigos. (oi puédes kedárte un póko más kon tus amígos) - Oggi puoi restare un po' di più con i tuoi amici.
Me han recomendado estas pastillas para el dolor de garganta. (me an rekomendádo éstas pastíyas para el dolór de gargánta) - Mi hanno consigliato queste pastiglie per il mal di gola.
¿Tiene alguna crema para las picaduras de insectos? (tiéne algúna kréma para las pikadúras de insektos) - Ha una crema per le punture di insetti?
Prefiero consultar al médico antes de tomar nada. (prefyéro konsultár al médiko ántes de tomár náda) - Preferisco consultare il medico prima di prendere qualsiasi cosa.
La sala de espera está casi llena. (la sála de espéra está káси yéna) - La sala d'attesa è quasi piena.
El tren va con diez minutos de retraso. (el tren ba kon dyes minútos de retraso) - Il treno ha dieci minuti di ritardo.
Creo que nos hemos subido al tren equivocado. (kréo ke nos émos subído al tren ekibokádo) - Credo che siamo saliti sul treno sbagliato.
¿Este tren pasa por la estación central? (éste tren pássa por la estasyón sentrál) - Questo treno passa dalla stazione centrale?
El andén ha cambiado y lo acaban de anunciar. (el andén a kambyádo i lo akában de anunsiár) - Il binario è cambiato e lo hanno appena annunciato.
La entrada del metro está en la otra esquina. (la entráda del métro está en la ótra eskína) - L'ingresso della metropolitana è sull'altro angolo.
Hay demasiada gente en este vagón. (ai demasiáda khénte en éste bagón) - C'è troppa gente in questa carrozza.
Bajamos en la siguiente y cambiamos de línea. (bakhámos en la siguiénte i kambyámos de línea) - Scendiamo alla prossima e cambiamo linea.
El autobús está llegando, prepara el billete. (el autobús está yegándo, prepára el biyéte) - Sta arrivando l'autobus, prepara il biglietto.
Esta línea no funciona los domingos. (ésta línea no funksióna los domíngos) - Questa linea non funziona la domenica.
El avión ha aterrizado con un poco de retraso. (el abión a aterrisádo kon un póko de retraso) - L'aereo è atterrato con un po' di ritardo.
Tenemos que recoger el equipaje antes de salir. (tenémos ke rekohér el ekipáhe ántes de salír) - Dobbiamo ritirare i bagagli prima di uscire.
Me han cambiado el asiento y ahora estoy junto a la ventana. (me an kambyádo el asyénto i aóra estoi khúnto a la bentána) - Mi hanno cambiato il posto e ora sono vicino al finestrino.
El barco ya está preparado para salir del puerto. (el bárko ya está preparádo para salír del puérto) - Il traghetto è già pronto per lasciare il porto.
¿Dónde tenemos que embarcar con el coche? (dónde tenémos ke embarkár kon el kóche) - Dove dobbiamo imbarcare con la macchina?
Gira a la izquierda después del puente y sigue recto. (khíra a la iskýérda despúes del puénte i sígue rékto) - Gira a sinistra dopo il ponte e vai dritto.
Estamos dando vueltas y no encontramos la calle. (estámos dando buéltas i no enkontrámos la káye) - Stiamo girando a vuoto e non troviamo la strada.
Hay una gasolinera justo al final de esta carretera. (ai una gasolinéra khústo al finál de ésta karretéra) - C'è un distributore proprio alla fine di questa strada.
El motor se ha parado en mitad del camino. (el motór se a parádo en mitád del kamíno) - Il motore si è spento a metà strada.
Menos mal que llevaba el teléfono cargado. (ménos mal ke yebába el telé fono kargádo) - Meno male che avevo il telefono carico.
El agua se ha filtrado por el techo durante la tormenta. (el água se a filtrádo por el técho duránte la tormenta) - L'acqua è filtrata dal tetto durante il temporale.
El electricista viene esta tarde a revisar la instalación. (el elektrisísta byéne ésta tárde a rebisár la instalasyón) - L'elettricista viene questo pomeriggio a controllare l'impianto.
El hotel nos ha ofrecido otra habitación por las molestias. (el otél nos a ofresído ótra abitasión por las moléstias) - L'hotel ci ha offerto un'altra camera per il disagio.
La ducha pierde agua y el suelo se está mojando. (la dúcha pyérde água i el suélo se está mokhándo) - La doccia perde acqua e il pavimento si sta bagnando.
¿Podrían guardarnos las maletas hasta esta tarde? (podrían guardárnos las malétas ásta ésta tárde) - Potreste custodirci le valigie fino a questo pomeriggio?
La casa tiene todo lo necesario para pasar unos días. (la káса tiéne todo lo nesesário para pasár unos días) - La casa ha tutto il necessario per trascorrere qualche giorno.
Nos han dejado un mapa de la zona sobre la mesa. (nos an dekhádo un mapa de la sona sóbre la mésa) - Ci hanno lasciato una mappa della zona sul tavolo.
He puesto el despertador un poco antes porque mañana tengo que salir temprano. (e puésto el despertadór un póko ántes porke mañana téngo ke salír temprano) - Ho messo la sveglia un po' prima perché domani devo uscire presto.
Deja las zapatillas en la entrada para no ensuciar el suelo. (déha las sapatíyas en la entráda para no ensusiár el suélo) - Lascia le scarpe all'ingresso per non sporcare il pavimento.
Tengo que tender la ropa antes de irme a trabajar. (téngo ke tendér la rópa ántes de írme a trabahár) - Devo stendere i panni prima di andare al lavoro.
He abierto la ventana porque olía un poco a humedad. (e abyérto la bentána porke olía un póko a umedád) - Ho aperto la finestra perché c'era un po' di odore di umidità.
¿Puedes comprobar si has cerrado el grifo? (puédes komprobár si as serrádo el grífo) - Puoi controllare se hai chiuso il rubinetto?
La nevera está haciendo un ruido extraño desde ayer. (la nebéra está asyéndo un ruído ekstráño désde ayér) - Il frigorifero fa uno strano rumore da ieri.
Voy a guardar los alimentos que acabamos de comprar. (boi a guardár los aliméntos ke akabámos de komprár) - Metto via gli alimenti che abbiamo appena comprato.
Hoy no hace falta cocinar, podemos pedir algo. (oi no áse fálta kosinár, podémos pedír álgo) - Oggi non serve cucinare, possiamo ordinare qualcosa.
¿Me pasas el pan, por favor? (me pásas el pan, por fabór) - Mi passi il pane, per favore?
He preparado café para todos. (e preparádo kafé para todos) - Ho preparato il caffè per tutti.
Mi hija tiene que estudiar historia esta tarde. (mi íha tiéne ke estudiár istória ésta tárde) - Mia figlia deve studiare storia questo pomeriggio.
El profesor les ha pedido que lean un capítulo para mañana. (el profesór les a pedído ke léan un kapítulo para mañana) - L'insegnante ha chiesto loro di leggere un capitolo per domani.
¿Has terminado ya el trabajo de ciencias? (as terminádo ya el trabáho de syénsias) - Hai già finito il lavoro di scienze?
Mañana puedes dormir hasta un poco más tarde. (mañána puédes dormír ásta un póko más tárde) - Domani puoi dormire un po' più a lungo.
Quiero que me avises cuando hayas llegado al colegio. (kyéro ke me abíses kuándo áyas yegádo al kolekhio) - Voglio che mi avvisi quando sei arrivato a scuola.
Esta vez no te voy a dejar usar el móvil durante la cena. (ésta bes no te boi a dekhár usár el móbil duránte la séna) - Questa volta non ti lascerò usare il cellulare durante la cena.
Creo que necesito dormir más estos días. (kréo ke nesesíto dormír más éstos días) - Credo di aver bisogno di dormire di più in questi giorni.
Me duele la espalda desde que me levanté esta mañana. (me duéle la espálda désde ke me lebanté ésta mañana) - Mi fa male la schiena da quando mi sono alzato stamattina.
El médico me ha dicho que descanse unos días. (el médiko me a dícho ke deskánse unos días) - Il medico mi ha detto di riposare per qualche giorno.
Voy a pedir cita con el especialista. (boi a pedír síta kon el espesyalísta) - Prendo un appuntamento con lo specialista.
El tren llegará con unos minutos de retraso por una avería. (el tren yegará kon unos minútos de retraso por una abería) - Il treno arriverà con qualche minuto di ritardo per un guasto.
¿Hay algún sitio libre para sentarse? (ai algún sítio líbre para sentárse) - C'è qualche posto libero dove sedersi?
El billete más barato no permite cambios. (el biyéte más baráto no permíte kâmbios) - Il biglietto più economico non permette cambi.
Nos hemos bajado una estación demasiado pronto. (nos émos bakhádo una estasyón demasiádo pronto) - Siamo scesi una fermata troppo presto.
La salida que buscamos está al final del pasillo. (la salída ke buskámos está al finál del pasíyo) - L'uscita che cerchiamo è in fondo al corridoio.
La máquina no acepta mi tarjeta de transporte. (la mákina no aseptá mi tarhéta de transporte) - La macchinetta non accetta la mia tessera dei trasporti.
El metro está funcionando con normalidad otra vez. (el métro está funksionándo kon normalidád ótra bes) - La metropolitana funziona di nuovo normalmente.
El autobús se ha quedado atrapado en el tráfico. (el autobús se a kedádo atrapádo en el tráfiko) - L'autobus è rimasto bloccato nel traffico.
Creo que este autobús nos deja cerca del hotel. (kréo ke éste autobús nos déha sérka del otél) - Credo che questo autobus ci lasci vicino all'hotel.
El vuelo sale de la puerta número doce. (el buélo sále de la puérta número dose) - Il volo parte dal gate numero dodici.
Tenemos que estar en la puerta de embarque media hora antes. (tenémos ke estár en la puérta de embarke média óra ántes) - Dobbiamo essere al gate mezz'ora prima.
Han anunciado un cambio de puerta para nuestro vuelo. (an anunsiádo un kâmbio de puérta para nuéstro buélo) - Hanno annunciato un cambio di gate per il nostro volo.
Mi equipaje de mano pesa más de lo permitido. (mi ekipáhe de máno péssa más de lo permitído) - Il mio bagaglio a mano pesa più del consentito.
El ferry está esperando a los últimos pasajeros. (el férri está esperándo a los últimos pasahéros) - Il traghetto sta aspettando gli ultimi passeggeri.
Hay bastante oleaje y el barco se mueve mucho. (ai bastante oleáhe i el bárko se muébe múcho) - C'è parecchio moto ondoso e il traghetto si muove molto.
Cruza la calle y encontrarás la farmacia a mano derecha. (krúsa la káye i enkontrarás la farmásia a máno derécha) - Attraversa la strada e troverai la farmacia sulla destra.
El museo está a dos calles de aquí. (el muséo está a dos káyes de akí) - Il museo è a due strade da qui.
Nos hemos perdido, pero creo que ya estamos cerca. (nos émos perdído, péгo kréo ke ya estámos sérka) - Ci siamo persi, ma credo che ormai siamo vicini.
Hay aparcamiento gratuito detrás del edificio. (ai apar kamiénto gratuíto detrás del edifísio) - C'è un parcheggio gratuito dietro l'edificio.
La carretera está llena de baches. (la karretéra está yéna de báches) - La strada è piena di buche.
El coche no arranca aunque la batería parece estar bien. (el kóche no arránka áunke la bateríа parése estár byén) - La macchina non parte anche se la batteria sembra funzionare.
He puesto las luces de emergencia y estoy esperando ayuda. (e puésto las lú ses de emer khénsia i estoi esperándo ayúda) - Ho acceso le luci d'emergenza e sto aspettando aiuto.
Se ha ido la luz en todo el barrio. (se a ído la lus en todo el bário) - È saltata la corrente in tutto il quartiere.
El ascensor no funciona y tendremos que subir por las escaleras. (el asensór no funksióna i tendrémos ke subír por las eskaléras) - L'ascensore non funziona e dovremo salire per le scale.
La habitación es cómoda, pero da a una calle muy ruidosa. (la abitasión es kómoda, péгo da a una káye mui ruídosа) - La camera è confortevole, ma dà su una strada molto rumorosa.
El aire acondicionado no responde al mando. (el áire akondisionádo no respónde al mándo) - L'aria condizionata non risponde al telecomando.
¿Podrían traerme otra almohada, por favor? (podrían traérme ótra almoháda, por fabór) - Potreste portarmi un altro cuscino, per favore?
Nos han recomendado este restaurante y tiene muy buena pinta. (nos an rekomendádo éste restauránte i tiéne mui buéna pínta) - Ci hanno consigliato questo ristorante e sembra davvero ottimo.
He limpiado el balcón y ahora voy a sacar la basura. (e limpiádo el balkón i aóra boi a sakár la basúra) - Ho pulito il balcone e ora porto fuori la spazzatura.
No dejes la puerta del frigorífico abierta tanto tiempo. (no déhes la puérta del frigorífiko abyérta tánto tyémpo) - Non lasciare la porta del frigorifero aperta così a lungo.
Voy a poner una lavadora antes de salir. (boi a ponér una labadóra ántes de salír) - Metto una lavatrice prima di uscire.
¿Has visto dónde he puesto las tijeras? (as bísto dónde e puésto las tihéras) - Hai visto dove ho messo le forbici?
El agua de la cafetera está a punto de acabarse. (el água de la kafetéra está a púnto de akabárse) - L'acqua della macchina del caffè sta per finire.
El perro necesita salir un momento. (el pérro nesesíta salír un moménto) - Il cane deve uscire un attimo.
Esta tarde voy a limpiar el polvo de los muebles. (ésta tárde boi a limpiár el polvo de los muébles) - Questo pomeriggio spolvero i mobili.
He puesto una alarma para acordarme de apagar el horno. (e puésto una alárma para akordárme de apagár el órno) - Ho messo una sveglia per ricordarmi di spegnere il forno.
Para desayunar me apetece algo dulce. (para desayunár me apetése álgo dulse) - A colazione mi va qualcosa di dolce.
¿Queda suficiente leche para hacer café? (kéda sufisyénte léche para asér kafé) - È rimasto abbastanza latte per fare il caffè?
Hoy voy a preparar pasta con verduras. (oi boi a preparár pásta kon berdúras) - Oggi preparo la pasta con le verdure.
No empieces a comer, que todavía falta tu hermana. (no empyéses a komér, ke todabía fálta tu ermána) - Non iniziare a mangiare, manca ancora tua sorella.
He guardado el postre para después de cenar. (e guardádo el postre para despúes de senár) - Ho conservato il dolce per dopo cena.
Mañana tienen que llevar una autorización firmada al colegio. (mañána tiénen ke yebár una autóriasasyón firmáda al kolekhio) - Domani devono portare a scuola un'autorizzazione firmata.
La clase de matemáticas empieza a primera hora. (la kláse de matemátikas empyésa a priméra óra) - La lezione di matematica è la prima ora.
Mi hija está bastante contenta con sus notas este trimestre. (mi íha está bastante konténta kon sus nótas éste triméstre) - Mia figlia è piuttosto contenta dei suoi voti questo trimestre.
¿Tienes todo preparado para el examen? (tiénes todo preparádo para el eksámen) - Hai tutto pronto per l'esame?
Cuando termines, deja los libros en la mochila. (kuándo termínes, déha los líbros en la mokíla) - Quando hai finito, metti i libri nello zaino.
Esta noche no hace falta que estudies más. (ésta nóche no áse fálta ke estudies más) - Stasera non c'è bisogno che studi ancora.
Te dejo salir, pero quiero que vuelvas antes de medianoche. (te dého salír, péгo kyéro ke buélbas ántes de medianóche) - Ti lascio uscire, ma voglio che torni prima di mezzanotte.
Tengo el cuello un poco cargado desde ayer. (téngo el kuéyo un póko kargádo désde ayér) - Ho il collo un po' contratto da ieri.
¿Este jarabe sirve también para la tos seca? (éste harábe sírbe tambyén para la tos séka) - Questo sciroppo va bene anche per la tosse secca?
Me han dicho que tome el medicamento después de comer. (me an dícho ke tóme el medikaménto despúes de komér) - Mi hanno detto di prendere il farmaco dopo aver mangiato.
La consulta está en la segunda planta. (la konsúlta está en la segúnda plánta) - L'ambulatorio è al secondo piano.
El tren acaba de entrar en la estación. (el tren akaba de entrár en la estasyón) - Il treno è appena entrato in stazione.
¿Este asiento está libre? (éste asyénto está líbre) - Questo posto è libero?
Nos han avisado de que el tren saldrá por otra vía. (nos an abisádo de ke el tren saldrá por ótra bía) - Ci hanno avvisato che il treno partirà da un altro binario.
Tengo que comprar el billete de ida y vuelta. (téngo ke komprár el biyéte de ída i buélta) - Devo comprare il biglietto di andata e ritorno.
La estación central está a cinco minutos andando. (la estasyón sentrál está a sínko minútos andándo) - La stazione centrale è a cinque minuti a piedi.
He dejado pasar dos metros porque iban demasiado llenos. (e dekhádo pasár dos métros porke íban demasiádo yénos) - Ho lasciato passare due metropolitane perché erano troppo affollate.
La tarjeta no me funciona en los tornos. (la tarhéta no me funksióna en los tórnos) - La tessera non mi funziona ai tornelli.
Hay que cambiar de andén para coger la otra línea. (ai ke kambyár de andén para kohér la ótra línea) - Bisogna cambiare binario per prendere l'altra linea.
El autobús se ha saltado nuestra parada. (el autobús se a saltádo nuéstra parąda) - L'autobus ha saltato la nostra fermata.
¿Sabe si este autobús llega hasta el hospital? (sábe si éste autobús yéga ásta el ospitál) - Sa se questo autobus arriva fino all'ospedale?
El conductor nos ha pedido que esperemos detrás de la línea. (el konduktór nos a pedído ke esperémos detrás de la línea) - L'autista ci ha chiesto di aspettare dietro la linea.
El vuelo se ha retrasado por las malas condiciones meteorológicas. (el buélo se a retrasádo por las malas kondisyónes meteorolókhikas) - Il volo è stato ritardato a causa delle cattive condizioni meteorologiche.
Tengo que sacar la tarjeta de embarque en la máquina. (téngo ke sakár la tarhéta de embarke en la mákina) - Devo stampare la carta d'imbarco alla macchinetta.
¿Hay que quitarse los zapatos para pasar el control? (ai ke kitárse los sapátos para pasár el kontról) - Bisogna togliersi le scarpe per passare i controlli?
Mi maleta ha aparecido en la cinta equivocada. (mi maléta a apareсído en la sínta ekibokáda) - La mia valigia è comparsa sul nastro sbagliato.
El ferry está completo para esta salida. (el férri está kompléto para ésta salída) - Il traghetto è al completo per questa partenza.
Hemos llegado al puerto con bastante tiempo de sobra. (émos yegádo al puérto kon bastante tyémpo de sóbra) - Siamo arrivati al porto con largo anticipo.
Sigue todo recto hasta el segundo semáforo. (sígue todo rékto ásta el segúndo semáforo) - Vai sempre dritto fino al secondo semaforo.
Perdona, creo que estamos buscando la calle equivocada. (perdóna, kréo ke estámos buskándo la káye ekibokáda) - Scusa, credo che stiamo cercando la strada sbagliata.
El GPS me está llevando por un camino bastante raro. (el khepeése me está yebándo por un kamíno bastante ráro) - Il GPS mi sta portando per una strada piuttosto strana.
El coche se ha quedado sin gasolina a pocos kilómetros de aquí. (el kóche se a kedádo sin gasolína a pókos kiló metros de akí) - La macchina è rimasta senza benzina a pochi chilometri da qui.
He llamado a asistencia porque no puedo cambiar la rueda. (e yamádo a asisténsia porke no puédo kambyár la ruéda) - Ho chiamato l'assistenza perché non riesco a cambiare la ruota.
Hay una cola enorme delante del túnel. (ai una kóla enorme delánte del túnel) - C'è una coda enorme davanti al tunnel.
El agua ha inundado varias calles del centro. (el água a inundádo bárias káyes del séntrо) - L'acqua ha allagato diverse strade del centro.
El hotel nos ha dejado hacer el registro un poco antes. (el otél nos a dekhádo asér el rekhístro un póko ántes) - L'hotel ci ha permesso di fare il check-in un po' prima.
La habitación no está lista todavía, tendremos que esperar. (la abitasión no está lísta todabía, tendrémos ke esperár) - La camera non è ancora pronta, dovremo aspettare.
He cambiado la funda de la almohada porque estaba manchada. (e kambyádo la fún da de la almoháda porke estaba mancháda) - Ho cambiato la federa del cuscino perché era macchiata.
Voy a doblar las toallas y guardarlas en el armario. (boi a doblár las toáyas i guardárlas en el armário) - Piego gli asciugamani e li metto nell'armadio.
No sé quién ha dejado estas cosas encima de la mesa. (no sé kyén a dekhádo éstas kósas ensíma de la mésa) - Non so chi ha lasciato queste cose sul tavolo.
He encontrado una moneda detrás del mueble. (e enkontrádo una monéda detrás del muéble) - Ho trovato una moneta dietro il mobile.
El agua caliente tarda unos minutos en llegar. (el água kalyénte tárda unos minútos en yegár) - L'acqua calda impiega qualche minuto ad arrivare.
Hoy voy a limpiar también debajo de los muebles. (oi boi a limpiár tambyén debáho de los muébles) - Oggi pulisco anche sotto i mobili.
¿Puedes cerrar las cortinas cuando empiece a oscurecer? (puédes serrár las kortínas kuándo empyése a oskuresér) - Puoi chiudere le tende quando comincia a fare buio?
La lavadora ha terminado y está pitando. (la labadóra a terminádo i está pitándo) - La lavatrice ha finito e sta suonando.
He puesto el lavavajillas con los platos de la cena. (e puésto el lababayíyas kon los plátos de la séna) - Ho messo nella lavastoviglie i piatti della cena.
El perro ha escondido su juguete debajo del sofá. (el pérro a eskondído su khuguéte debáho del sofà) - Il cane ha nascosto il suo giocattolo sotto il divano.
Esta mañana no tenía nada de hambre. (ésta mañana no teníа náda de ámbre) - Stamattina non avevo per niente fame.
He preparado fruta para llevar al trabajo. (e preparádo fruta para yebár al trabáho) - Ho preparato della frutta da portare al lavoro.
¿Te apetece tomar algo después de comer? (te apetése tomár álgo despúes de komér) - Ti va di bere qualcosa dopo pranzo?
La sopa está demasiado caliente, espera un poco. (la sópa está demasiádo kalyénte, espéra un póko) - La zuppa è troppo calda, aspetta un po'.
Si quieres repetir, todavía queda bastante. (si kyéres repetír, todabía kéda bastante) - Se vuoi fare il bis, ce n'è ancora parecchio.
Mañana tienen una prueba de historia. (mañána tiénen una pru éba de istória) - Domani hanno una verifica di storia.
La profesora ha dicho que pueden usar el diccionario. (la profesóra a dícho ke puéden usár el diksyonário) - L'insegnante ha detto che possono usare il dizionario.
Mi hijo está preocupado porque no entiende este tema. (mi ího está preokupádo porke no entyénde éste téma) - Mio figlio è preoccupato perché non capisce questo argomento.
Antes de salir, revisa que lleves todo lo necesario. (ántes de salír, rebísa ke yébes todo lo nesesário) - Prima di uscire, controlla di avere tutto il necessario.
Los padres tenemos que estar pendientes de estas cosas. (los pá­dres tenémos ke estár pendyéntes de éstas kósas) - Noi genitori dobbiamo stare attenti a queste cose.
No quiero que llegues a casa demasiado tarde. (no kyéro ke yégues a káса demasiádo tárde) - Non voglio che tu torni a casa troppo tardi.
Hoy te toca poner la mesa. (oi te tóka ponér la mésa) - Oggi tocca a te apparecchiare.
Me he levantado con la garganta bastante irritada. (me e lebantádo kon la gargánta bastante irritáda) - Mi sono alzato con la gola piuttosto irritata.
¿Tiene algún producto para aliviar la congestión nasal? (tiéne algún prodúkto para alibiár la kongestión nasál) - Ha qualche prodotto per alleviare la congestione nasale?
Voy a medir la temperatura porque me encuentro raro. (boi a medir la temperaturа porke me enkuéntro ráro) - Mi misuro la temperatura perché non mi sento bene.
El médico quiere volver a verme dentro de una semana. (el médiko kyére bolbér a bérme déntro de una semána) - Il medico vuole rivedermi tra una settimana.
El tren está entrando ahora mismo en la estación. (el tren está entrándo aóra mismo en la estasyón) - Il treno sta entrando proprio ora in stazione.
Nos han asignado los asientos del vagón cinco. (nos an asignádo los asyéntos del bagón sínko) - Ci hanno assegnato i posti della carrozza cinque.
El billete digital aparece en la aplicación del móvil. (el biyéte dikhitál aparése en la aplikasyón del móbil) - Il biglietto digitale appare nell'app del cellulare.
El próximo tren tarda casi una hora. (el próksimo tren tárda káси una óra) - Il prossimo treno impiega quasi un'ora.
Hay mucha gente esperando en las escaleras mecánicas. (ai múcha khénte esperándo en las eskaléras mekánikas) - C'è molta gente che aspetta sulle scale mobili.
La estación de metro está cerrada por mantenimiento. (la estasyón de métro está serráda por mantenimiénto) - La stazione della metropolitana è chiusa per manutenzione.
He mirado el mapa para saber dónde tenemos que cambiar. (e mirádo el mapa para sabér dónde tenémos ke kambyár) - Ho guardato la mappa per sapere dove dobbiamo cambiare.
El autobús llega cada media hora por la noche. (el autobús yéga káda média óra por la nóche) - L'autobus arriva ogni mezz'ora di notte.
Nos hemos quedado esperando en la parada equivocada. (nos émos kedádo esperándo en la parąda ekibokáda) - Siamo rimasti ad aspettare alla fermata sbagliata.
El avión ha despegado con bastante turbulencia. (el abión a despegádo kon bastante turbulénsia) - L'aereo è decollato con parecchia turbolenza.
Por favor, mantengan los cinturones abrochados durante el despegue. (por fabór, manténgan los sinturónes abrochádos duránte el despegue) - Per favore, tenete le cinture allacciate durante il decollo.
¿Dónde está la zona de recogida de equipajes? (dónde está la sona de rekohída de ekipáhes) - Dov'è la zona ritiro bagagli?
El barco llegará al puerto a última hora de la tarde. (el bárko yegará al puérto a última óra de la tárde) - Il traghetto arriverà in porto nel tardo pomeriggio.
Hemos comprado los billetes del ferry por internet. (émos komprádo los biyétes del férri por internét) - Abbiamo comprato online i biglietti del traghetto.
La calle que buscas está detrás del ayuntamiento. (la káye ke búskas está detrás del ayuntamiénto) - La strada che cerchi è dietro il municipio.
Pregúntale a ese señor, parece que conoce bien la zona. (pregúntale a ése señór, parése ke konóse byén la sona) - Chiedi a quel signore, sembra che conosca bene la zona.
Hay un desvío obligatorio por las obras de la carretera. (ai un desbío obligatório por las óbras de la karretéra) - C'è una deviazione obbligatoria a causa dei lavori stradali.
El coche hace un ruido raro al girar a la derecha. (el kóche áse un ruído ráro al khirár a la derécha) - La macchina fa uno strano rumore quando giro a destra.
Creo que el problema está en los frenos. (kréo ke el probléma está en los frénos) - Credo che il problema sia nei freni.
Han cortado el agua del edificio por una avería. (an kortádo el água del edifísio por una abería) - Hanno tolto l'acqua al palazzo per un guasto.
El técnico ha venido a revisar la caldera esta mañana. (el tékniko a benído a rebisár la kaldéra ésta mañana) - Il tecnico è venuto a controllare la caldaia stamattina.
El ruido de la habitación de al lado no me deja dormir. (el ruído de la abitasión de al ládo no me déha dormír) - Il rumore della camera accanto non mi lascia dormire.
¿Podrían cambiarme de habitación, por favor? (podrían kambyárme de abitasión, por fabór) - Potreste cambiarmi la camera, per favore?
El aire de la habitación está demasiado cargado. (el áire de la abitasión está demasiádo kargádo) - L'aria della camera è troppo viziata.
He fregado la cocina y todavía está un poco húmeda. (e fregádo la kosína i todabía está un póko úmeda) - Ho lavato il pavimento della cucina e non è ancora del tutto asciutto.
Voy a cambiar la bombilla del pasillo porque se ha fundido. (boi a kambyár la bombíya del pasíyo porke se a fundído) - Cambio la lampadina del corridoio perché si è fulminata.
Acuérdate de sacar la ropa de la lavadora cuando termine. (akuérdate de sakár la rópa de la labadóra kuándo termíne) - Ricordati di togliere i panni dalla lavatrice quando finisce.
El gato está esperando delante de su cuenco. (el gáto está esperándo delánte de su kuénko) - Il gatto sta aspettando davanti alla sua ciotola.
He dejado las llaves de repuesto en un sitio seguro. (e dekhádo las yábes de repuésto en un sítio seguro) - Ho lasciato le chiavi di riserva in un posto sicuro.
Para desayunar voy a hacerme una tortilla francesa. (para desayunár boi a asérme una tortíya fransésa) - A colazione mi preparo una frittata francese.
¿Quién ha terminado el último trozo de queso? (kyén a terminádo el último tróso de késo) - Chi ha mangiato l'ultimo pezzo di formaggio?
Si quieres, calentamos las sobras de ayer. (si kyéres, kalentámos las sóbras de ayér) - Se vuoi, scaldiamo gli avanzi di ieri.
Hoy cenamos todos juntos, aunque sea un poco tarde. (oi senámos todos khúntos, áunke séa un póko tárde) - Stasera ceniamo tutti insieme, anche se è un po' tardi.
Pon los vasos en la mesa y yo traigo los platos. (pon los básos en la mésa i yo tráigo los plátos) - Metti i bicchieri sul tavolo e io porto i piatti.
Mañana la niña tiene que entregar un trabajo de lengua. (mañána la níña tiéne ke entregár un trabáho de léngua) - Domani la bambina deve consegnare un lavoro di italiano.
El tutor quiere hablar con nosotros sobre su rendimiento. (el tutór kyére ablar kon nosótros sóbre su rendimiénto) - Il tutor vuole parlare con noi del suo rendimento.
Esta asignatura le gusta mucho más que las demás. (ésta asignatúra le gústa múcho más ke las demás) - Questa materia gli piace molto più delle altre.
No le pongas la respuesta, deja que lo intente solo. (no le póngas la respuésta, déha ke lo inténte sólo) - Non dargli la risposta, lascia che ci provi da solo.
Puedes invitar a tus amigos, pero avísame antes. (puédes inbitár a tus amígos, péгo abísame ántes) - Puoi invitare i tuoi amici, ma avvisami prima.
Hoy tienes que estar en casa antes de las diez. (oi tiénes ke estár en káса ántes de las dyés) - Oggi devi essere a casa prima delle dieci.
Me he torcido un poco el tobillo bajando las escaleras. (me e torsído un póko el tobíyo bakhándo las eskaléras) - Mi sono leggermente slogato la caviglia scendendo le scale.
¿Puedo tomar este medicamento si estoy en ayunas? (puédo tomár éste medikaménto si estoi en ayúnas) - Posso prendere questo farmaco se sono a digiuno?
El médico me ha pedido que vuelva si empeoran los síntomas. (el médiko me a pedído ke buélba si empeóran los síntomas) - Il medico mi ha chiesto di tornare se i sintomi peggiorano.
Me mareo un poco cuando me levanto demasiado rápido. (me maréo un póko kuándo me lebánto demasiádo rápido) - Mi gira un po' la testa quando mi alzo troppo velocemente.
El tren está parado porque están revisando las vías. (el tren está parádo porke están rebisándo las bías) - Il treno è fermo perché stanno controllando i binari.
¿En qué coche está nuestro asiento? (en ke kóche está nuéstro asyénto) - In quale carrozza si trova il nostro posto?
La pantalla indica que el tren llegará a las seis y diez. (la pantáya indíka ke el tren yegará a las séis i dyes) - Lo schermo indica che il treno arriverà alle sei e dieci.
Hay un ascensor al fondo de la estación para las personas con equipaje. (ai un asensór al fóndo de la estasyón para las persónas kon ekipáhe) - In fondo alla stazione c'è un ascensore per chi ha bagagli.
El acceso a esa línea está cerrado temporalmente. (el akséso a ésa línea está serrádo temporalménte) - L'accesso a quella linea è temporaneamente chiuso.
Vamos a esperar al siguiente metro, este está demasiado lleno. (bámos a esperár al siguiénte métro, éste está demasiádo yéno) - Aspettiamo la prossima metropolitana, questa è troppo piena.
El conductor ha anunciado que habrá una parada adicional. (el konduktór a anunsiádo ke abrá una parąda adisionál) - L'autista ha annunciato che ci sarà una fermata aggiuntiva.
He perdido el abono y necesito sacar otro. (e perdído el abóno i nesesíto sakár ótro) - Ho perso l'abbonamento e devo farne un altro.
El mostrador de facturación cierra cuarenta minutos antes del vuelo. (el mostrador de fakturasión syérra kuarénta minútos ántes del buélo) - Il banco del check-in chiude quaranta minuti prima del volo.
Nos han pedido que dejemos los líquidos fuera del equipaje. (nos an pedído ke dekhémos los líkidos fuéra del ekipáhe) - Ci hanno chiesto di tirare fuori i liquidi dal bagaglio.
El control de pasaportes está bastante despejado ahora. (el kontról de pasapórtes está bastante despekhádo aóra) - Il controllo passaporti è abbastanza libero adesso.
Mi vuelo tiene asignada una puerta diferente a la de ayer. (mi buélo tiéne asignáda una puérta diferénte a la de ayér) - Il mio volo ha un gate diverso da quello di ieri.
El mar está tranquilo y parece que tendremos una travesía agradable. (el mar está trankílo i parése ke tendrémos una trabesía agradáble) - Il mare è calmo e sembra che faremo una traversata piacevole.
El ferry tarda aproximadamente una hora y cuarto. (el férri tárda aproximadaménte una óra i kuárto) - Il traghetto impiega circa un'ora e un quarto.
Si vas por aquí, llegarás antes al centro histórico. (si bas por akí, yegarás ántes al séntrо istóriko) - Se vai da questa parte, arriverai prima al centro storico.
La plaza está justo detrás de aquella iglesia. (la plása está khústo detrás de akéya iglesya) - La piazza è proprio dietro quella chiesa.
No cojas esa calle, que es de sentido único. (no kóhas ésa káye, ke es de sentído úniko) - Non prendere quella strada, perché è a senso unico.
El coche vibra mucho cuando supero cierta velocidad. (el kóche bíbra múcho kuándo supéro syérta belosidád) - La macchina vibra molto quando supero una certa velocità.
El mecánico cree que habrá que cambiar el alternador. (el mekániko krée ke abrá ke kambyár el alternadór) - Il meccanico pensa che sarà necessario cambiare l'alternatore.
Hemos llamado a la policía porque hemos visto un accidente. (émos yamádo a la polisía porke émos bísto un aksidénte) - Abbiamo chiamato la polizia perché abbiamo visto un incidente.
No toques nada hasta que llegue el técnico. (no tókes náda ásta ke yé gue el tékniko) - Non toccare nulla finché non arriva il tecnico.
El agua está entrando por debajo de la puerta del garaje. (el água está entrándo por debáho de la puérta del garáhe) - L'acqua sta entrando da sotto la porta del garage.
El hotel nos ha prestado un adaptador para cargar el móvil. (el otél nos a prestádo un adaptadór para kargár el móbil) - L'hotel ci ha prestato un adattatore per caricare il cellulare.
El desayuno está incluido en el precio de la habitación. (el desayúno está inkluído en el présio de la abitasión) - La colazione è inclusa nel prezzo della camera.
El anfitrión nos ha enviado las instrucciones para entrar en el apartamento. (el anfitryón nos a embiádo las instruksiónes para entrár en el apartaménto) - L'host ci ha inviato le istruzioni per entrare nell'appartamento.
La habitación huele a tabaco y habíamos pedido una para no fumadores. (la abitasión uéle a tabáko i abíamos pedído una para no fumadóres) - La camera puzza di fumo e ne avevamo chiesta una per non fumatori.
He reservado una mesa para tres a nombre de Pierpy. (e reservádo una mésa para tres a nómbre de Pierpy) - Ho prenotato un tavolo per tre a nome di Pierpy.
Para mí, el plato del día y una botella de agua. (para mí, el pláto del día i una botéya de água) - Per me, il piatto del giorno e una bottiglia d'acqua.
¿Nos puedes traer la cuenta cuando tengas un momento? (nos puédes traér la kuénta kuándo téngas un moménto) - Puoi portarci il conto quando hai un momento?
La salsa está muy rica, pero pica bastante. (la sálsa está mui ríkа, péгo píka bastante) - La salsa è molto buona, ma è piuttosto piccante.
Ayer salimos después de cenar y volvimos tardísimo. (ayér salímos despúes de senár i bolbímos tardísimo) - Ieri siamo usciti dopo cena e siamo tornati tardissimo.
Nos tomamos algo en una terraza y estuvimos charlando un buen rato. (nos tomámos álgo en una terrása i estubímos charlándo un buén ráto) - Abbiamo bevuto qualcosa in un dehors e siamo rimasti a chiacchierare per un bel po'.
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
