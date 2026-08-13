/* ================================================================
   frafrasi.js — Frasi comuni Francese/Italiano per frafile.html
   ----------------------------------------------------------------
   Stesso schema di citazioni.js e tedfrasi.js: frasi su righe
   separate, formato:
   "Frase in francese (pronuncia approssimativa) - Traduzione italiana"

   Per aggiungere nuove frasi: basta aggiungere una nuova riga dentro
   il template string qui sotto, rispettando questo formato.
   Nessun array da modificare a mano: il parsing avviene
   automaticamente più in basso.

   NOTA: al momento contiene solo 10 frasi di partenza; altre
   verranno aggiunte in seguito, in batch successivi.
   ================================================================ */
const FRASI_FRA_RAW = `
Bonjour (bon-giur) - Buongiorno
Bonsoir (bon-suar) - Buonasera
Comment ça va? (ko-man sa va) - Come va?
Ça va bien, merci (sa va bian, mer-si) - Sto bene, grazie
Comment tu t'appelles? (ko-man tu ta-pel) - Come ti chiami?
Je m'appelle Pierpaolo (gio ma-pel Pierpaolo) - Mi chiamo Pierpaolo
Merci beaucoup (mer-si bo-ku) - Grazie mille
S'il vous plaît (sil vu ple) - Per favore
Excusez-moi (eks-ku-ze mua) - Mi scusi
J'ai laissé la lumière du couloir allumée, tu peux l'éteindre en passant ? (ʒé lesé la lümièr dü koulwar alumé, tü pö léténdr an pasan) - Ho lasciato la luce del corridoio accesa, puoi spegnerla passando?
Les clés sont sur la petite table à côté de l'entrée. (lé clé son sür la pëtit tabl a koté de lantré) - Le chiavi sono sul tavolino accanto all'ingresso.
Le chat s'est encore caché sous le canapé. (le scià sé ankor kascé su le kanapé) - Il gatto si è nascosto di nuovo sotto il divano.
La machine à laver tourne, évite d'ouvrir la porte. (la mascin a lavé turn, evìt duvrir la port) - La lavatrice è in funzione, evita di aprire lo sportello.
J'ai mis les assiettes dans le lave-vaisselle, il manque juste la tablette. (ʒé mi lé zasiet dan le lav-vèsèl, il manch ʒüst la tablet) - Ho messo i piatti nella lavastoviglie, manca solo la pastiglia.
Tu veux du café ou plutôt un thé ce matin ? (tü vö dü kafé u plüto an té se maten) - Vuoi un caffè o piuttosto un tè stamattina?
Attends-moi, je finis mon petit déjeuner et j'arrive. (atand-mwa, ʒö fini mon pəti deʒöné é ʒariv) - Aspettami, finisco la colazione e arrivo.
Il reste du poulet d'hier, on peut le réchauffer pour midi. (il rest dü pulé dijèr, on pö le resciofé pur midi) - È rimasto del pollo di ieri, possiamo riscaldarlo per pranzo.
Mets ton assiette dans l'évier quand t'as fini. (mé ton asiet dan lévié kan ta fini) - Metti il piatto nel lavandino quando hai finito.
Dépêche-toi, sinon tu vas rater le début du cours. (depèsc-twa, sinon tü va raté le debü dü kur) - Sbrigati, altrimenti perderai l'inizio della lezione.
T'as pensé à faire les devoirs de maths ? (ta panse a fer lé devwar de mat) - Hai pensato di fare i compiti di matematica?
La prof a demandé qu'on rende le devoir avant vendredi. (la prof a demande kon rand le devwar avan vandrödi) - La professoressa ha chiesto di consegnare il compito entro venerdì.
Je peux sortir après avoir terminé mes devoirs ? (ʒö pö sortir aprè avwar terminé mé devwar) - Posso uscire dopo aver finito i compiti?
Tu rentres directement après l'entraînement, d'accord ? (tü rantr direktman aprè lantrènman, dakor) - Torni direttamente dopo l'allenamento, d'accordo?
Non, tu ne peux pas rester dehors jusqu'à minuit. (non, tü nö pö pa resté döor ʒüsk a minüi) - No, non puoi restare fuori fino a mezzanotte.
Prends ton sac, on part dans cinq minutes. (pran ton sac, on par dan sank minüt) - Prendi lo zaino, partiamo tra cinque minuti.
J'ai mal à la gorge depuis hier soir, ça ne passe pas. (ʒé mal a la gorg döpüi dijèr swar, sa nö pas pa) - Ho mal di gola da ieri sera e non passa.
Le pharmacien m'a conseillé quelque chose pour la toux. (le farmasièn ma konséyé kelkö scos pur la tu) - Il farmacista mi ha consigliato qualcosa per la tosse.
Tu devrais prendre rendez-vous chez le médecin. (tü dövré prandr randé-vu sce le medsan) - Dovresti prendere un appuntamento dal medico.
Le train pour Lyon part de quel quai ? (le tran pur Lion par de kel ké) - Da quale binario parte il treno per Lione?
On a dix minutes de retard, j'espère qu'on va encore avoir la correspondance. (on a dis minüt de retar, ʒespèr kon va ankor avwar la korespondans) - Abbiamo dieci minuti di ritardo, spero che riusciremo ancora a prendere la coincidenza.
Le métro est bloqué entre deux stations. (le métro é bloké antr dö stasiòn) - La metropolitana è bloccata tra due stazioni.
On descend à la prochaine et on continue à pied. (on desan a la proscièn é on kontinü a pié) - Scendiamo alla prossima e proseguiamo a piedi.
Le bus est passé juste devant nous sans s'arrêter. (le büs é pasé ʒüst dövan nu san sarété) - L'autobus è passato proprio davanti a noi senza fermarsi.
Regarde l'application, elle dit que le prochain arrive dans quatre minutes. (regard laplikasiòn, el di ke le proscièn ariv dan katr minüt) - Guarda l'applicazione, dice che il prossimo arriva tra quattro minuti.
Il faut composter le billet avant de monter dans le train ? (il fo komposté le biyé avan de monté dan le tran) - Bisogna convalidare il biglietto prima di salire sul treno?
Tu as déjà enregistré tes bagages ? (tü a deʒa anreʒistré te bagàʒ) - Hai già registrato i bagagli?
On nous a annoncé un changement de porte, regarde l'écran. (on nu a anonse an sciandʒman de port, regard lékran) - Hanno annunciato un cambio di gate, guarda lo schermo.
Le ferry part à dix-neuf heures, il vaut mieux arriver un peu avant. (le feri par a diz-nöf ör, il vo miö arivé an pö avan) - Il traghetto parte alle diciannove, è meglio arrivare un po' prima.
Tu prends la deuxième rue à droite après le feu. (tü pran la dözièm rü a drwat aprè le fö) - Prendi la seconda strada a destra dopo il semaforo.
Ma voiture fait un bruit bizarre depuis ce matin. (ma vuatür fè an brüi bizar döpüi se maten) - La mia macchina fa uno strano rumore da stamattina.
J'ai crevé un pneu, heureusement que j'ai une roue de secours. (ʒé kreve an pno, örözman ke ʒé ün ru de sürkur) - Ho bucato una gomma, per fortuna ho una ruota di scorta.
Il y a tellement de circulation qu'on n'avance presque plus. (il ia telman de sirkülasiòn kon navans presk plü) - C'è talmente tanto traffico che non andiamo quasi più avanti.
La rue est complètement inondée, on ne peut pas passer par là. (la rü é kompletman inondé, on nö pö pa pasé par la) - La strada è completamente allagata, non si può passare di lì.
Il n'y a plus d'électricité dans tout l'immeuble. (il nia plü deléktrisité dan tu limöbl) - Non c'è più elettricità in tutto il palazzo.
Pourriez-vous nous apporter une couverture supplémentaire ? (purié-vu nu aporté ün kuvertür süplémantèr) - Potreste portarci una coperta aggiuntiva?
La climatisation de la chambre ne fonctionne plus. (la klimatizasiòn de la sciambre nö fonksiòn plü) - L'aria condizionata della camera non funziona più.
On entend beaucoup de bruit dans le couloir pendant la nuit. (on antan bokou de brüi dan le kulwar pandan la nüi) - Durante la notte si sente molto rumore nel corridoio.
L'hôte nous a envoyé le code pour récupérer les clés. (lot nu a anvoyé le kod pur reküperé lé clé) - Il proprietario ci ha mandato il codice per recuperare le chiavi.
La maison est sympa, mais il manque quelques ustensiles dans la cuisine. (la mezon é simpa, mè il mank kelk züstansil dan la küizin) - La casa è carina, ma mancano alcuni utensili in cucina.
Je vais prendre le plat du jour, ça a l'air pas mal. (ʒö vé prandr le pla dü ʒur, sa a ler pa mal) - Prendo il piatto del giorno, sembra niente male.
Vous pouvez nous laisser encore cinq minutes pour choisir ? (vu puvé nu lesé ankor sank minüt pur sciuazir) - Potete lasciarci ancora cinque minuti per scegliere?
On se retrouve au bar vers neuf heures ? (on se rötruv o bar ver nöf ör) - Ci vediamo al bar verso le nove?
J'ai vu une veste qui me plaît, mais je vais d'abord regarder le prix. (ʒé vü ün vest ki me plè, mè ʒö vé dabòr regardé le pri) - Ho visto una giacca che mi piace, ma prima guardo il prezzo.
La réunion a été déplacée à demain matin. (la réüniòn a été deplasé a döman maten) - La riunione è stata spostata a domani mattina.
Je t'envoie le document dès que j'ai terminé les dernières corrections. (ʒö tanvwa le doküman de ke ʒé terminé lé dernìèr koreksiòn) - Ti mando il documento appena ho finito le ultime correzioni.
Ma connexion coupe tout le temps pendant les appels vidéo. (ma koneksiòn kup tu le tan pandan lé zapèl vidéo) - La connessione cade continuamente durante le videochiamate.
L'imprimante n'a plus de papier, je vais en chercher. (limprimant na plü de papié, ʒö vé an scerscé) - La stampante non ha più carta, vado a prenderne.
J'ai adoré l'exposition, surtout la partie consacrée aux découvertes archéologiques. (ʒé adoré lekspozisiòn, sürtu la parti konsakré o dekuvert arkeologi̩k) - Ho adorato la mostra, soprattutto la parte dedicata alle scoperte archeologiche.
Passe-moi les clés, j'les trouve plus (Pass mua lé clé, ji le truv plu) - Passami le chiavi, non le trovo più
T'as éteint la lumière du couloir? (Ta étin la lumièr dü culuar?) - Hai spento la luce del corridoio?
Le chat a encore renversé sa gamelle (Le cha a ancor ranversé sa gamèl) - Il gatto ha di nuovo rovesciato la ciotola
J'ai mis une machine, faut la vider ce soir (Gé mi ün machin, fo la videi se suar) - Ho fatto un bucato, bisogna svuotarlo stasera
On mange quoi ce midi, t'as une idée? (On mange cua se midì, ta ün idé?) - Cosa mangiamo a pranzo, hai un'idea?
Les enfants, à table, ça va refroidir! (Lezanfan, a tabl, sa va refruadir!) - Bambini, a tavola, si raffredda!
T'as fini tes devoirs de maths ou pas encore? (Ta fini té devuar de mat u pa ancor?) - Hai finito i compiti di matematica o non ancora?
La maîtresse a dit qu'y avait un contrôle demain (La mètres a di qu'i avé an contròl demain) - La maestra ha detto che c'è un compito in classe domani
Tu peux sortir après le dîner, pas avant (Tü peu sortir aprè le diné, pa avan) - Puoi uscire dopo cena, non prima
J'ai mal à la gorge, t'aurais pas des pastilles? (Gé mal a la gorge, torè pa dé pastiy?) - Ho mal di gola, non avresti delle pastiglie?
Le train pour Lyon part de quel quai? (Le tren pur Lion par de quel ké?) - Il treno per Lione parte da quale binario?
Excusez-moi, le prochain métro passe dans combien de temps? (Escüzé mua, le proshin metrò pass dan combien de tan?) - Scusi, il prossimo metrò passa tra quanto tempo?
Le bus est en retard, ça m'énerve un peu (Le büs et an retar, sa m'enerv an peu) - L'autobus è in ritardo, mi dà un po' fastidio
On doit être à l'aéroport deux heures avant le vol (On dua etr a laeropor deuzeur avan le vol) - Dobbiamo essere in aeroporto due ore prima del volo
Le ferry pour la Corse part à quelle heure? (Le fèri pur la Cors par a quel eur?) - Il traghetto per la Corsica parte a che ora?
Pardon, c'est par où pour aller à la gare? (Pardon, sè par u pur alé a la gar?) - Scusi, da che parte si va alla stazione?
La voiture a calé au milieu du carrefour (La vuatür a calé o miliö dü carfur) - La macchina si è spenta in mezzo all'incrocio
Y a un embouteillage monstre sur l'autoroute (I a an anbutéiage monstr sür lotorut) - C'è un ingorgo mostruoso in autostrada
Il y a eu une coupure de courant tout le quartier (Ilia ü ün cupür de curan tu le quartié) - C'è stato un blackout in tutto il quartiere
On voudrait une chambre avec vue sur la mer si possible (On vudré ün chambr avec vü sür la mer si possibl) - Vorremmo una camera con vista sul mare se possibile
La douche marche pas et y a pas d'eau chaude (La dush marsh pa e ia pa do shod) - La doccia non funziona e non c'è acqua calda
Nos voisins de chambre font trop de bruit la nuit (No vuazin de chambr fon tro de brui la nüi) - I nostri vicini di camera fanno troppo rumore la notte
L'hôte nous a laissé les clés sous le paillasson (Lot nu a lessé lé clé su le paiason) - L'host ci ha lasciato le chiavi sotto lo zerbino
On voudrait commander, la carte s'il vous plaît (On vudré comandé, la cart sil vu plé) - Vorremmo ordinare, il menù per favore
Hier soir on est sortis prendre un verre entre potes (Ièr suar on è sorti prandr an ver antr pot) - Ieri sera siamo usciti a bere qualcosa tra amici
Faut qu'j'aille faire les courses, y a plus rien dans le frigo (Fo giai fer lé curs, ia plü rien dan le frigo) - Devo andare a fare la spesa, non c'è più niente in frigo
Cette veste te va super bien, tu devrais la prendre (Set vest te va süper bien, tü devré la prandr) - Questa giacca ti sta benissimo, dovresti prenderla
Désolé pour le retard, la réunion a duré plus longtemps (Dezolé pur le retar, la reünion a düré plü longtan) - Scusa per il ritardo, la riunione è durata più a lungo
Tu m'entends bien ou ça coupe un peu? (Tü mantan bien u sa cup an peu?) - Mi senti bene o cade un po' il segnale?
Le wifi marche plus depuis ce matin, c'est chiant (Le uifi marsh plü depüi se matin, sè chian) - Il wifi non funziona da stamattina, è una scocciatura
L'imprimante est encore en panne, j'y crois pas (Lanprimant et ancor an pan, gi cruà pa) - La stampante è di nuovo rotta, non ci posso credere
Ce musée a une collection archéologique magnifique (Se müzé a ün colecsion arkeologik manifik) - Questo museo ha una collezione archeologica magnifica
On va au cinéma ce soir, ça te dit? (On va o sinemà se suar, sa te di?) - Andiamo al cinema stasera, ti va?
Cette vieille ville a vraiment un charme fou (Set vieiy vil a vrémen an sharm fu) - Questa città vecchia ha davvero un fascino incredibile
On a fait une rando super sympa en montagne (On a fé ün randò süper sinpa an montagn) - Abbiamo fatto un'escursione molto bella in montagna
On a loué un parasol et deux transats sur la plage (On a lué an parasol e deu transà sür la plage) - Abbiamo affittato un ombrellone e due sdraio in spiaggia
Mes beaux-parents viennent dîner samedi soir (Mé bo paran vien diné samdi suar) - I miei suoceri vengono a cena sabato sera
Le chauffe-eau fuit encore, faut appeler le plombier (Le shof o füi ancor, fo apelé le plonbié) - Lo scaldabagno perde ancora, bisogna chiamare l'idraulico
Il fait un froid de canard aujourd'hui, non? (Il fè an fruà de canar ojurdüi, non?) - Fa un freddo cane oggi, no?
Comment ça va, ça fait un bail qu'on s'est pas vus (Coman sa va, sa fè an bay con se pa vü) - Come va, è un sacco che non ci vediamo
Le docteur m'a prescrit des antibiotiques pour trois jours (Le doctör ma prescri dezantibiotik pur trua jur) - Il dottore mi ha prescritto degli antibiotici per tre giorni
Y a eu un cambriolage dans l'immeuble d'à côté (Ia ü an canbriolage dan limöbl da coté) - C'è stato un furto nel palazzo accanto
Je vais à la salle deux fois par semaine maintenant (Je vé a la sal deu fua par semèn maintnan) - Vado in palestra due volte a settimana adesso
Il paraît qu'il va pleuvoir tout le week-end (Il paré quil va pleuvuar tu le uikend) - Pare che pioverà tutto il weekend
Je dois faire un virement avant la fin du mois (Je dua fer an virman avan la fin dü mua) - Devo fare un bonifico prima della fine del mese
L'entretien s'est plutôt bien passé je trouve (Lantretien se plüto bien passé je truv) - Il colloquio è andato piuttosto bene secondo me
Le chien du voisin aboie toute la nuit, c'est insupportable (Le chien dü vuazin abua tut la nüi, sè ansüportabl) - Il cane del vicino abbaia tutta la notte, è insopportabile
On prépare une petite fête pour son anniversaire (On prepar ün ptit fet pur son aniverser) - Stiamo preparando una piccola festa per il suo compleanno
J'ai reçu plein de notifications, j'ai même pas regardé (Gé resü plin de notificasion, gé mem pa regardé) - Ho ricevuto un sacco di notifiche, non ho nemmeno guardato
Je suis pas trop d'accord avec toi sur ce coup-là (Je süi pa tro dacor avec tua sür se cu la) - Non sono molto d'accordo con te su questo punto
Je me sens un peu fatigué depuis quelques jours (Je me san an peu fatigué depüi quelque jur) - Mi sento un po' stanco da qualche giorno
On a rendez-vous à quatorze heures pile, sois pas en retard (On a randevu a catorzeur pil, sua pa an retar) - Abbiamo appuntamento alle quattordici in punto, non essere in ritardo
On essaie de trier davantage nos déchets à la maison (On essè de trié davantage no deshè a la mèzon) - Cerchiamo di differenziare di più i nostri rifiuti in casa
Le week-end je lis beaucoup, ça me détend vraiment (Le uikend je li bocu, sa me detan vrémen) - Il weekend leggo molto, mi rilassa davvero
Je fais un cours du soir d'italien deux fois par semaine (Je fè an cur dü suar ditalien deu fua par semèn) - Sto seguendo un corso serale d'italiano due volte a settimana
On s'est rencontrés à une soirée entre amis communs (On se rancontré a ün suaré antr ami comun) - Ci siamo conosciuti a una serata tra amici comuni
T'as lu le dernier livre dont tout le monde parle? (Ta lü le dernié livr don tu le monde parl?) - Hai letto l'ultimo libro di cui tutti parlano?
Où sont les toilettes? (u son le tua-let) - Dove sono i bagni?
`;

/* ================================================================
   PARSING — trasforma il testo grezzo in un array di oggetti
   { fr: "...", it: "..." } pronto all'uso in frafile.html.
   ================================================================ */
const FRASI_FRA = FRASI_FRA_RAW
  .split('\n')
  .map(riga => riga.trim())
  .filter(riga => riga.length > 0)
  .map(riga => {
    const sep = ' - ';
    const idx = riga.indexOf(sep);
    if (idx === -1) return null;
    return {
      fr: riga.slice(0, idx).trim(),
      it: riga.slice(idx + sep.length).trim()
    };
  })
  .filter(coppia => coppia !== null);
