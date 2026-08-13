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
