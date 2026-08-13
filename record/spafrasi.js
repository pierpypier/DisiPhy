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
