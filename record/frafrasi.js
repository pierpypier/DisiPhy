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
Tu peux fermer la fenêtre de la cuisine avant de partir ? (tü pö fermer la fenetr de la küizin avan de partir) - Puoi chiudere la finestra della cucina prima di andare via?
J'ai oublié de sortir les poubelles hier soir. (ʒé oublié de sortir le pubel ier swar) - Ieri sera ho dimenticato di portare fuori la spazzatura.
Le chien attend devant la porte depuis dix minutes. (le scièn atand dövan la port döpüi dis minüt) - Il cane aspetta davanti alla porta da dieci minuti.
Il faut étendre le linge dès que la machine a fini. (il fo etandr le liènʒ de ke la mascin a fini) - Bisogna stendere il bucato appena la lavatrice ha finito.
J'ai rangé les courses dans le frigo, mais il reste les légumes. (ʒé ranʒé le kurs dan le frigo, mè il rest le legüm) - Ho sistemato la spesa in frigorifero, ma restano le verdure.
Tu veux des tartines avec ta confiture ? (tü vö de tartin avek ta konfityür) - Vuoi delle fette di pane tostato con la marmellata?
Je n'ai pas très faim, je vais juste manger un yaourt. (ʒö né pa trè fen, ʒö vé ʒüst manʒé an iaur) - Non ho molta fame, mangerò solo uno yogurt.
Qui a préparé le déjeuner aujourd'hui ? (ki a preparé le deʒöné oʒurdüi) - Chi ha preparato il pranzo oggi?
Mets un peu plus de salade, il en reste encore. (mé an pö plü de salad, il an rest ankor) - Mettine ancora un po' di insalata, ce n'è ancora.
On mange ensemble ce soir ou chacun de son côté ? (on manʒ ansambl se swar u scakan de son koté) - Stasera mangiamo insieme o ognuno per conto suo?
J'ai eu une bonne note en histoire cette fois. (ʒé ü ün bon not an istwar set fwa) - Questa volta ho preso un bel voto in storia.
Le professeur de français nous a donné beaucoup de travail pour lundi. (le profesör de fransè nu a doné bokou de travay pur landi) - L'insegnante di francese ci ha dato molto lavoro per lunedì.
Je comprends mieux les maths quand quelqu'un m'explique calmement. (ʒö kompran miö le mat kan kelkan meksplik kalmman) - Capisco meglio la matematica quando qualcuno me la spiega con calma.
N'oublie pas de préparer ton sac ce soir. (nübli pa de preparé ton sak se swar) - Non dimenticare di preparare lo zaino stasera.
Tu peux inviter ton ami, mais préviens-nous à l'avance. (tü pö anvité ton ami, mè previan nu a lavans) - Puoi invitare il tuo amico, ma avvisaci prima.
Éteins ton téléphone pendant le dîner, s'il te plaît. (etèn ton telefon pandan le diné, sil te plè) - Spegni il telefono durante la cena, per favore.
Je vais à la pharmacie parce que j'ai besoin de pansements. (ʒö vé a la farmasi parskö ʒé bezwan de pansman) - Vado in farmacia perché ho bisogno di cerotti.
Vous avez quelque chose contre le mal de tête ? (vu zavé kelkö scos kontr le mal de tet) - Avete qualcosa contro il mal di testa?
Depuis ce matin, j'ai le nez bouché et je tousse un peu. (döpüi se maten, ʒé le né buscé é ʒö tus an pö) - Da stamattina ho il naso chiuso e tossisco un po'.
Le médecin m'a dit de me reposer pendant quelques jours. (le medsan ma di de me repoze pandan kelk ʒur) - Il medico mi ha detto di riposarmi per qualche giorno.
Tu sais si le train de dix heures est à l'heure ? (tü sè si le tran de dis ör é a lör) - Sai se il treno delle dieci è in orario?
Il y a un retard annoncé sur la ligne. (il ia an retar anonse sür la liñ) - È stato annunciato un ritardo sulla linea.
J'ai laissé mon sac dans le compartiment, je reviens tout de suite. (ʒé lesé mon sak dan le kompartiman, ʒö revian tu de süit) - Ho lasciato la borsa nello scompartimento, torno subito.
Cette station est fermée jusqu'à nouvel ordre. (set stasiòn é fermé ʒüsk a nuvel ordr) - Questa stazione è chiusa fino a nuovo avviso.
On doit changer de ligne à la prochaine station. (on dwa sciandʒé de liñ a la proscièn stasiòn) - Dobbiamo cambiare linea alla prossima stazione.
Le bus est tellement plein qu'on ne pourra jamais monter. (le büs é telman plen kon nö pura ʒamè monté) - L'autobus è così pieno che non riusciremo mai a salire.
Tu as ta carte de transport sur toi ? (tü a ta kart de transport sür twa) - Hai con te la tessera dei trasporti?
Le chauffeur vient de dire qu'il y aura un détour. (le scöför vien de dir kil i ora an detur) - L'autista ha appena detto che ci sarà una deviazione.
On doit passer le contrôle de sécurité avant d'aller à la porte. (on dwa pasé le kontrol de sekürité avan dalé a la port) - Dobbiamo passare i controlli di sicurezza prima di andare al gate.
Mon vol a été retardé d'une heure. (mon vol a été retarde dün ör) - Il mio volo è stato ritardato di un'ora.
Tu peux garder un œil sur ma valise pendant que je vais aux toilettes ? (tü pö gardé an öi sür ma valiz pandan ke ʒö vé o twalet) - Puoi tenere d'occhio la mia valigia mentre vado in bagno?
Le bateau est déjà arrivé au port, on peut embarquer. (le bato é deʒa arivé o por, on pö anbarqué) - Il traghetto è già arrivato al porto, possiamo imbarcarci.
J'ai regardé le plan, le centre-ville n'est plus très loin. (ʒé regardé le plan, le santr vil né plü trè lwan) - Ho guardato la mappa, il centro città non è più molto lontano.
Tu t'es trompé de rue, il fallait tourner juste avant. (tü té trompé de rü, il falé turné ʒüst avan) - Hai sbagliato strada, dovevi girare proprio prima.
Ma voiture ne démarre plus, même avec les câbles. (ma vuatür ne demar plü, mem avek le kâbl) - La mia macchina non parte più, nemmeno con i cavi.
J'ai appelé l'assistance, ils devraient arriver rapidement. (ʒé apel lasistans, il dövré arivé rapidman) - Ho chiamato il soccorso stradale, dovrebbero arrivare rapidamente.
Un camion bloque complètement la circulation. (an kamiòn blok kompletman la sirkülasiòn) - Un camion blocca completamente il traffico.
L'ascenseur est en panne depuis ce matin. (lasansör é an pan döpüi se maten) - L'ascensore è guasto da stamattina.
Pourriez-vous vérifier pourquoi l'eau chaude ne fonctionne pas ? (purié vu verifié purkwa lo sod ne fonksiòn pa) - Potreste controllare perché l'acqua calda non funziona?
La chambre voisine fait beaucoup trop de bruit. (la sciambre vuazin fè bokou tro de brüi) - La camera accanto fa troppo rumore.
Nous avons réservé une chambre avec deux lits séparés. (nu zavon rezervé ün sciambre avek dö li séparé) - Abbiamo prenotato una camera con due letti separati.
L'hôte nous a expliqué comment utiliser la serrure électronique. (lot nu a ekspliké koman tülizé la serür elektronik) - Il proprietario ci ha spiegato come usare la serratura elettronica.
Je prendrai le poisson avec des légumes grillés. (ʒö prendré le pwason avek de legüm griyé) - Prenderò il pesce con verdure grigliate.
Vous avez une table près de la fenêtre ? (vu zavé ün tabl prè de la fenetr) - Avete un tavolo vicino alla finestra?
Je prendrai juste un verre d'eau pour commencer. (ʒö prendré ʒüst an ver do pur komansé) - Per cominciare prenderò solo un bicchiere d'acqua.
On a bien rigolé hier, il faut remettre ça bientôt. (on a bièn rigolé ier, il fo römetr sa byanto) - Ieri ci siamo divertiti molto, dobbiamo rifarlo presto.
Tu peux me prêter ton chargeur jusqu'à demain ? (tü pö me prete ton sciarʒör ʒüsk a döman) - Puoi prestarmi il tuo caricabatterie fino a domani?
Le wifi marche bien dans le salon, mais pas dans la chambre. (le wifi marsc bièn dan le salon, mè pa dan la sciambre) - Il wifi funziona bene in soggiorno, ma non in camera.
J'ai trouvé un vieux livre dans une boîte au grenier. (ʒé truvé an vjö livr dan ün buat o grenié) - Ho trovato un vecchio libro in una scatola in soffitta.
On devrait partir tôt demain pour éviter la chaleur. (on dövré partir to döman pur evité la scialör) - Dovremmo partire presto domani per evitare il caldo.
Je préfère marcher plutôt que prendre la voiture pour si peu de distance. (ʒö prefer marscé plüto ke prandr la vuatür pur si pö de distans) - Preferisco andare a piedi piuttosto che prendere la macchina per una distanza così breve.
J'ai mis le linge à sécher sur le balcon. (ʒé mi le liènʒ a seʃé sür le balkon) - Ho messo il bucato ad asciugare sul balcone.
Tu peux arroser les plantes avant de sortir ? (tü pö aroze le plant avan de sortir) - Puoi annaffiare le piante prima di uscire?
J'ai retrouvé les clés au fond de mon sac. (ʒé retruvé le clé o fon de mon sak) - Ho ritrovato le chiavi in fondo alla mia borsa.
Le frigo fait un drôle de bruit depuis quelques jours. (le frigo fè an drol de brüi döpüi kelk ʒur) - Il frigorifero fa uno strano rumore da qualche giorno.
N'allume pas le four, le gâteau est déjà prêt. (nalüm pa le fur, le gato é deʒa pre) - Non accendere il forno, la torta è già pronta.
J'ai préparé des œufs pour tout le monde. (ʒé prepare de zö pur tu le mond) - Ho preparato delle uova per tutti.
Tu peux passer le pain, s'il te plaît ? (tü pö pase le pan, sil te plè) - Puoi passarmi il pane, per favore?
On mangera les restes demain midi. (on manʒra le rest döman midi) - Domani a pranzo mangeremo gli avanzi.
Qui veut encore un peu de fromage ? (ki vö ankor an pö de fromaʒ) - Chi ne vuole ancora un po' di formaggio?
Il faut débarrasser la table avant de partir. (il fo debarese la tabl avan de partir) - Bisogna sparecchiare prima di andare via.
J'ai complètement oublié le contrôle de sciences. (ʒé kompletman oublié le kontrol de sians) - Ho completamente dimenticato la verifica di scienze.
La classe commence à huit heures et demie. (la klas komans a üit ör e demi) - La lezione inizia alle otto e mezza.
Mon fils trouve les devoirs de français assez faciles. (mon fis truv le devwar de fransè ase fasil) - Mio figlio trova abbastanza facili i compiti di francese.
Ma fille doit préparer un exposé pour la semaine prochaine. (ma fiʎ dwa preparé an ekspoze pur la semèn proscièn) - Mia figlia deve preparare una presentazione per la prossima settimana.
Tu as bien écouté ce que je viens de te dire ? (tü a bièn ekuté se ke ʒö vien de te dir) - Hai ascoltato bene quello che ti ho appena detto?
Après le dîner, tu ranges ta chambre. (aprè le diné, tü ranʒ ta sciambre) - Dopo cena sistemi la tua camera.
Je ne veux pas que tu rentres trop tard ce soir. (ʒö nö vö pa ke tü rantr tro tar se swar) - Non voglio che tu torni troppo tardi stasera.
Si tu finis tout avant six heures, tu peux sortir. (si tü fini tu avan sis ör, tü pö sortir) - Se finisci tutto prima delle sei, puoi uscire.
J'ai pris rendez-vous pour mardi matin. (ʒé pri randé-vu pur mardi maten) - Ho preso appuntamento per martedì mattina.
Le médecin m'a demandé si j'avais de la fièvre. (le medsan ma demandé si ʒavé de la fièvr) - Il medico mi ha chiesto se avevo la febbre.
Je me sens beaucoup mieux depuis hier. (ʒö me san bokou miö döpüi ier) - Mi sento molto meglio da ieri.
Cette crème est à appliquer deux fois par jour. (set krem é a apliké dö fwa par ʒur) - Questa crema va applicata due volte al giorno.
Le quai a changé, il faut regarder les écrans. (le ké a sciandʒé, il fo regardé lékran) - Il binario è cambiato, bisogna guardare gli schermi.
J'ai acheté le billet directement à la gare. (ʒé asciété le biyè direktman a la gar) - Ho comprato il biglietto direttamente in stazione.
Le train est arrivé avec quelques minutes d'avance. (le tran é arivé avek kelk minüt davans) - Il treno è arrivato con qualche minuto di anticipo.
On peut prendre la ligne quatre jusqu'au centre. (on pö prandr la liñ katr ʒüsk o santr) - Possiamo prendere la linea quattro fino al centro.
J'ai validé ma carte, mais le portique ne s'est pas ouvert. (ʒé valide ma kart, mè le portik nö sé pa uver) - Ho convalidato la tessera, ma il tornello non si è aperto.
Le prochain tram passe dans moins de cinq minutes. (le proscièn tram pas dan mwan de sank minüt) - Il prossimo tram passa tra meno di cinque minuti.
Le chauffeur a annoncé un arrêt supplémentaire. (le scöför a anonse an are süplémantèr) - L'autista ha annunciato una fermata aggiuntiva.
Il faut descendre par la porte arrière. (il fo desandr par la port arrièr) - Bisogna scendere dalla porta posteriore.
J'ai déjà fait l'enregistrement en ligne. (ʒé deʒa fè lanreʒistrman an liñ) - Ho già fatto il check-in online.
Où est-ce qu'on doit déposer les bagages ? (u es kon dwa depoze le bagàʒ) - Dove dobbiamo consegnare i bagagli?
Mon vol décolle dans deux heures, on a encore le temps. (mon vol dekòl dan dö ör, on a ankor le tan) - Il mio volo decolla tra due ore, abbiamo ancora tempo.
Le bateau est complet, il n'y a plus de places disponibles. (le bato é komplet, il nia plü de plas disponibl) - Il traghetto è pieno, non ci sono più posti disponibili.
Le parking du port est presque plein. (le parking dü por é presk plen) - Il parcheggio del porto è quasi pieno.
Tourne après l'église, puis continue tout droit. (turn aprè legliz, pui kontinü tu drwa) - Gira dopo la chiesa, poi continua sempre dritto.
On est un peu perdus, vous pouvez nous indiquer le chemin ? (on é an pö perdü, vu puvé nu indiké le sceman) - Ci siamo un po' persi, potete indicarci la strada?
Le voyant rouge s'est allumé sur le tableau de bord. (le vwayan ruʒ sé alumé sür le tablo de bor) - Si è accesa la spia rossa sul cruscotto.
Je vais appeler un garage, je ne préfère pas continuer comme ça. (ʒö vé apel an garaʒ, ʒö ne prefer pa kontinüé kom sa) - Chiamo un'officina, preferisco non continuare così.
Il y a eu un petit accident au carrefour. (il ia ü an pəti aksidan o karfur) - C'è stato un piccolo incidente all'incrocio.
La rue est fermée à cause des travaux. (la rü é fermé a koz de travay) - La strada è chiusa a causa dei lavori.
On a perdu internet pendant toute la matinée. (on a perdü internet pandan tut la matiné) - Siamo rimasti senza internet per tutta la mattina.
La pression de l'eau est vraiment faible. (la presion de lo é vreman febl) - La pressione dell'acqua è davvero bassa.
Le chauffage s'est arrêté en pleine nuit. (le scofaj sé arete an plen nüi) - Il riscaldamento si è fermato nel cuore della notte.
Vous pourriez envoyer quelqu'un pour vérifier la fuite ? (vu purié anvoyé kelkan pur verifié la füit) - Potreste mandare qualcuno a controllare la perdita?
La chambre est propre, mais la douche ne chauffe pas. (la sciambre é propr, mè la dusc ne scof pa) - La camera è pulita, ma la doccia non si scalda.
On a demandé une chambre calme, loin de l'ascenseur. (on a demandé ün sciambre kalm, lwan de lasansör) - Avevamo chiesto una camera tranquilla, lontana dall'ascensore.
Je vais envoyer un message à l'hôte pour lui demander où jeter les déchets. (ʒö vé anvoyé an mesaj a lot pur lüi demandé u ʒeté le desce) - Manderò un messaggio al proprietario per chiedergli dove buttare i rifiuti.
Tu veux réserver la table pour samedi soir ? (tü vö rezerve la tabl pur samdi swar) - Vuoi prenotare il tavolo per sabato sera?
J'ai nettoyé la salle de bains, mais il reste le miroir. (ʒé netwaye la sal de ban, mè il rest le mirwar) - Ho pulito il bagno, ma resta lo specchio.
Tu as vu où j'ai posé les lunettes ? (tü a vü u ʒé poze le lünèt) - Hai visto dove ho appoggiato gli occhiali?
Le lave-vaisselle est plein, il faut le faire tourner. (le lav-vèsèl é plen, il fo le fer turné) - La lavastoviglie è piena, bisogna farla partire.
J'ai changé les draps ce matin. (ʒé sciandʒé le dra se maten) - Ho cambiato le lenzuola stamattina.
Le chat miaule devant la fenêtre depuis un moment. (le scia m iol dövan la fenetr döpüi an moman) - Il gatto miagola davanti alla finestra da un po'.
Tu peux vérifier si la porte est bien verrouillée ? (tü pö verifié si la port é bièn verrouyé) - Puoi controllare se la porta è ben chiusa a chiave?
Il reste du lait, mais il faudra acheter du beurre. (il rest dü lè, mè il fodra asciété dü ber) - È rimasto del latte, ma bisognerà comprare il burro.
J'ai préparé le café pendant que tu prenais ta douche. (ʒé preparé le kafé pandan ke tü prené ta dusc) - Ho preparato il caffè mentre facevi la doccia.
On n'a plus de céréales, je les mets sur la liste. (on na plü de sereal, ʒö le mè sür la list) - Non abbiamo più cereali, li metto nella lista.
Tu veux manger quelque chose avant de partir ? (tü vö manʒé kelkö scos avan de partir) - Vuoi mangiare qualcosa prima di andare via?
J'ai laissé mon cahier à l'école, je dois retourner le chercher. (ʒé lesé mon kayé a lekol, ʒö dwa retourné le scerscé) - Ho lasciato il quaderno a scuola, devo tornare a prenderlo.
Le prof nous a expliqué la règle avec un exemple. (le prof nu a ekspliké la regl avek an egzempl) - L'insegnante ci ha spiegato la regola con un esempio.
J'ai encore deux exercices à terminer pour demain. (ʒé ankor dö egzersis a terminé pur döman) - Ho ancora due esercizi da finire per domani.
Tu devrais relire ton texte avant de le rendre. (tü dövré relir ton tekst avan de le randr) - Dovresti rileggere il tuo testo prima di consegnarlo.
On avait dit pas d'écran après dix heures. (on avè di pa dekran aprè dis ör) - Avevamo detto niente schermi dopo le dieci.
Tu peux aller chez ton copain, mais sois rentré avant onze heures. (tü pö alé sce ton kopan, mè swa rantré avan onz ör) - Puoi andare dal tuo amico, ma devi essere rientrato prima delle undici.
Je te laisse tranquille pendant une heure, après tu viens m'aider. (ʒö te les trankil pandan ün ör, aprè tü vien medé) - Ti lascio tranquillo per un'ora, poi vieni ad aiutarmi.
Je dois annuler mon rendez-vous, j'ai un imprévu. (ʒö dwa anulé mon randé-vu, ʒé an anprevü) - Devo annullare il mio appuntamento, ho un imprevisto.
Vous avez quelque chose pour soulager les douleurs musculaires ? (vu zavé kelkö scos pur sulajé le dulör müskülèr) - Avete qualcosa per alleviare i dolori muscolari?
Je vais attendre encore un peu avant de prendre le médicament. (ʒö vé atandr ankor an pö avan de prandr le medikaman) - Aspetterò ancora un po' prima di prendere il farmaco.
Le cabinet du médecin est juste au coin de la rue. (le kabiné dü medsan é ʒüst o kwan de la rü) - Lo studio del medico è proprio all'angolo della strada.
Tu sais sur quel quai arrive le train de Marseille ? (tü sè sür kel ké ariv le tran de Marsèy) - Sai su quale binario arriva il treno da Marsiglia?
J'ai acheté un billet aller-retour pour le week-end. (ʒé asciété an biyè alé-retur pur le wik-end) - Ho comprato un biglietto andata e ritorno per il fine settimana.
Le contrôleur passe dans quelques minutes, prépare ton billet. (le kontrolör pas dan kelk minüt, prepar ton biyè) - Il controllore passa tra qualche minuto, prepara il biglietto.
On est montés dans la mauvaise rame. (on é monté dan la movèz ram) - Siamo saliti sulla carrozza sbagliata.
La ligne est perturbée à cause d'un problème technique. (la liñ é pertürbé a koz dan problem teknik) - La linea è rallentata a causa di un problema tecnico.
Le tram est arrivé mais il était déjà bondé. (le tram é arivé mè il etè deʒa bonde) - È arrivato il tram, ma era già pienissimo.
Je vais descendre au prochain arrêt pour éviter les embouteillages. (ʒö vé desandr o proscièn are pur evité lezambuteyaj) - Scenderò alla prossima fermata per evitare il traffico.
Le bus n'est pas passé depuis une demi-heure. (le büs né pa pasé döpüi ün dömi ör) - L'autobus non passa da mezz'ora.
Tu peux me dire où se trouve l'arrêt le plus proche ? (tü pö me dir u se truv larè le plü prosci) - Puoi dirmi dove si trova la fermata più vicina?
J'ai téléchargé ma carte d'embarquement sur mon téléphone. (ʒé tele-sciarʒé ma kart danbarkman sür mon telefon) - Ho scaricato la carta d'imbarco sul telefono.
On doit enlever les liquides du sac au contrôle. (on dwa anlevé le likid dü sak o kontrol) - Al controllo dobbiamo togliere i liquidi dalla borsa.
J'espère que ma valise ne dépassera pas le poids autorisé. (ʒespèr ke ma valiz ne depasra pa le pwa otorizé) - Spero che la mia valigia non superi il peso consentito.
Il y a beaucoup de vent, la traversée risque d'être agitée. (il ia bokou de van, la traversé risk detr aʒité) - C'è molto vento, la traversata rischia di essere movimentata.
On doit être au port une heure avant le départ. (on dwa etr o por ün ör avan le depart) - Dobbiamo essere al porto un'ora prima della partenza.
Après le rond-point, tu prends la première sortie. (aprè le ron-pwan, tü pran la premìèr sorti) - Dopo la rotonda prendi la prima uscita.
J'ai regardé sur le GPS, on devrait arriver vers midi. (ʒé regardé sür le ʒe-pé-es, on dövré arivé ver midi) - Ho guardato il GPS, dovremmo arrivare verso mezzogiorno.
Le moteur chauffe beaucoup quand je roule en ville. (le motor scof bokou kan ʒö rul an vil) - Il motore si surriscalda molto quando guido in città.
Je me suis garé un peu plus loin parce qu'il n'y avait plus de place. (ʒö me süi garé an pö plü lwan parskil nia-vè plü de plas) - Ho parcheggiato un po' più lontano perché non c'era più posto.
L'eau commence à monter dans la rue. (lo komans a monté dan la rü) - L'acqua sta iniziando a salire nella strada.
Le quartier a été privé d'électricité pendant deux heures. (le kartié a été privé deléktrisité pandan dö ör) - Il quartiere è rimasto senza elettricità per due ore.
La réception de l'hôtel ferme à quelle heure ? (la resepsiòn de lotèl ferm a kel ör) - A che ora chiude la reception dell'hotel?
Pourriez-vous nous apporter deux serviettes propres ? (purié-vu nu aporté dö servièt propr) - Potreste portarci due asciugamani puliti?
Il y a une odeur bizarre dans la salle de bains. (il ia ün odör bizar dan la sal de ban) - C'è uno strano odore nel bagno.
La serrure de la porte d'entrée ne fonctionne plus. (la serür de la port dantré ne fonksiòn plü) - La serratura della porta d'ingresso non funziona più.
L'appartement est agréable, mais la rue est assez bruyante le soir. (lapartman é agreabl, mè la rü é ase brüiant le swar) - L'appartamento è piacevole, ma la strada è abbastanza rumorosa la sera.
On a reçu les instructions pour le départ par message. (on a resü lez anstrüksion pur le depart par mesaj) - Abbiamo ricevuto le istruzioni per la partenza tramite messaggio.
Je voudrais une carafe d'eau et du pain, s'il vous plaît. (ʒö vudré ün karaf do é dü pan, sil vu plè) - Vorrei una caraffa d'acqua e del pane, per favore.
Vous pouvez nous conseiller un plat typique de la région ? (vu puvé nu konsèyé an pla tipik de la reʒion) - Potete consigliarci un piatto tipico della regione?
On s'est retrouvés par hasard dans le même café. (on sé retruvé par azar dan le mem kafé) - Ci siamo ritrovati per caso nello stesso bar.
J'ai complètement perdu la notion du temps en lisant ce livre. (ʒé kompletman perdü la nosiòn dü tan an lizan se livr) - Ho perso completamente la cognizione del tempo leggendo questo libro.
Je n'ai pas envie de sortir ce soir, je suis épuisé. (ʒö né pa anvi de sortir se swar, ʒö süi epüizé) - Non ho voglia di uscire stasera, sono esausto.
J'ai passé l'aspirateur dans toute la maison avant midi. (ʒé pase laspiratör dan tut la mezon avan midi) - Ho passato l'aspirapolvere in tutta casa prima di mezzogiorno.
La fenêtre de la chambre est restée ouverte toute la nuit. (la fenetr de la sciambre é reste uvert tut la nüi) - La finestra della camera è rimasta aperta tutta la notte.
Tu peux remettre les coussins sur le canapé ? (tü pö remetr le kusan sür le kanapé) - Puoi rimettere i cuscini sul divano?
J'ai sorti le linge de la machine, mais il est encore humide. (ʒé sorti le liènʒ de la mascin, mè il é ankor üm id) - Ho tolto il bucato dalla lavatrice, ma è ancora umido.
Le chien a renversé sa gamelle dans la cuisine. (le scièn a ranversé sa gamèl dan la küizin) - Il cane ha rovesciato la sua ciotola in cucina.
Ferme bien le robinet, il goutte encore. (ferm bièn le robinè, il gut ankor) - Chiudi bene il rubinetto, perde ancora qualche goccia.
J'ai acheté des fruits pour le petit déjeuner de demain. (ʒé asciété de früi pur le pəti deʒöné de döman) - Ho comprato della frutta per la colazione di domani.
Tu peux mettre la table pendant que je termine de cuisiner ? (tü pö metr la tabl pandan ke ʒö termin de küiziné) - Puoi apparecchiare mentre finisco di cucinare?
Il reste assez de riz pour préparer un dîner rapide. (il rest ase de ri pur preparé an diné rapid) - È rimasto abbastanza riso per preparare una cena veloce.
J'ai oublié de décongeler la viande, on fera autre chose. (ʒé oublié de dekongelé la viand, on fera otr scos) - Ho dimenticato di scongelare la carne, faremo qualcos'altro.
La réunion de parents est prévue jeudi soir. (la réüniòn de paran é prevü ʒödi swar) - La riunione dei genitori è prevista per giovedì sera.
Mon professeur a conseillé de lire ce roman pendant les vacances. (mon profesör a konsèyé de lir se roman pandan le vakans) - Il mio insegnante ha consigliato di leggere questo romanzo durante le vacanze.
J'ai besoin d'un peu de calme pour me concentrer. (ʒé bezwan dan pö de kalm pur me konsantré) - Ho bisogno di un po' di tranquillità per concentrarmi.
Elle a révisé toute la soirée pour son examen. (el a revizé tut la swaré pur son egzamen) - Ha ripassato tutta la sera per il suo esame.
Tu peux éteindre la télé quand tu vas te coucher ? (tü pö etandr la telé kan tü va te kucé) - Puoi spegnere la televisione quando vai a dormire?
Je t'ai déjà dit que les devoirs passent avant les jeux vidéo. (ʒö té deʒa di ke le devwar pas avan le ʒö vidéo) - Ti ho già detto che i compiti vengono prima dei videogiochi.
Si tu veux utiliser la voiture, demande-moi d'abord. (si tü vö tülizé la vuatür, demand-mwa dabòr) - Se vuoi usare la macchina, chiedimelo prima.
J'ai une douleur au dos qui revient de temps en temps. (ʒé ün dulör o do ki revian de tan an tan) - Ho un dolore alla schiena che torna ogni tanto.
Le pharmacien m'a dit de boire beaucoup d'eau. (le farmasièn ma di de bwar bokou do) - Il farmacista mi ha detto di bere molta acqua.
Je vais prendre ma température pour être sûr. (ʒö vé prandr ma tanperatür pur etr sür) - Mi misurerò la temperatura per essere sicuro.
J'ai raté mon train, le prochain est dans vingt minutes. (ʒé raté mon tran, le proscièn é dan van minüt) - Ho perso il treno, il prossimo è tra venti minuti.
Cette gare est beaucoup plus grande que je ne pensais. (set gar é bokou plü grand ke ʒö ne panse) - Questa stazione è molto più grande di quanto pensassi.
Tu peux regarder si le train s'arrête à Dijon ? (tü pö regardé si le tran sarèt a Diʒon) - Puoi controllare se il treno ferma a Digione?
On a changé de wagon à la dernière minute. (on a sciandʒé de vagon a la dernìèr minüt) - Abbiamo cambiato carrozza all'ultimo momento.
Le métro est presque vide à cette heure-ci. (le métro é presk vid a set ör si) - La metropolitana è quasi vuota a quest'ora.
J'ai pris la mauvaise direction sur la ligne. (ʒé pri la movèz direksiòn sür la liñ) - Ho preso la direzione sbagliata sulla linea.
Le tram s'est arrêté juste avant notre station. (le tram sé arete ʒüst avan notr stasiòn) - Il tram si è fermato proprio prima della nostra stazione.
On peut prendre le bus suivant, celui-ci est vraiment trop chargé. (on pö prandr le büs süivan, sö-lüi é vreman tro sciargé) - Possiamo prendere l'autobus successivo, questo è davvero troppo pieno.
J'ai oublié de recharger ma carte de transport. (ʒé oublié de resciarʒé ma kart de transport) - Ho dimenticato di ricaricare la mia tessera dei trasporti.
Il reste une place libre au fond du bus. (il rest ün plas libr o fon dü büs) - È rimasto un posto libero in fondo all'autobus.
Nous avons atterri avec presque une demi-heure de retard. (nu zavon aterì avek presk ün dömi ör de retar) - Siamo atterrati con quasi mezz'ora di ritardo.
Les portes d'embarquement viennent d'ouvrir. (le port danbarkman vièn duvrir) - I gate d'imbarco hanno appena aperto.
J'ai dû mettre mon ordinateur dans un bac séparé. (ʒé dü metr mon ordinatör dan an bak séparé) - Ho dovuto mettere il computer in una vaschetta separata.
Le vol est complet, mais on peut encore demander une place côté fenêtre. (le vol é komplet, mè on pö ankor demandé ün plas koté fenetr) - Il volo è pieno, ma possiamo ancora chiedere un posto vicino al finestrino.
La mer est calme aujourd'hui, la traversée devrait être agréable. (la mer é kalm oʒurdüi, la traversé dövrè etr agreabl) - Il mare è calmo oggi, la traversata dovrebbe essere piacevole.
On a oublié de réserver une place pour la voiture sur le ferry. (on a oublié de rezerve ün plas pur la vuatür sür le feri) - Abbiamo dimenticato di prenotare un posto per l'auto sul traghetto.
Tu vois la pharmacie juste en face de la banque ? (tü vwa la farmasi ʒüst an fas de la bank) - Vedi la farmacia proprio di fronte alla banca?
Pour aller au musée, continuez tout droit pendant cinq cents mètres. (pur alé o müzé, kontinüé tu drwa pandan sank san metr) - Per andare al museo, continuate dritto per cinquecento metri.
Ma voiture tire légèrement vers la droite quand je freine. (ma vuatür tir leʒèrman ver la drwat kan ʒö fren) - La mia macchina tende leggermente verso destra quando freno.
Je préfère appeler le dépanneur plutôt que prendre un risque. (ʒö prefer apel le depanör plüto ke prandr an risk) - Preferisco chiamare il soccorso stradale piuttosto che correre un rischio.
La police a bloqué la rue après l'accident. (la polis a bloke la rü aprè laksidan) - La polizia ha bloccato la strada dopo l'incidente.
Il faut éviter ce quartier, il y a trop d'embouteillages. (il fo evité se kartié, il ia tro danbuteyaj) - Bisogna evitare questo quartiere, ci sono troppi ingorghi.
On nous a prévenus qu'il pourrait y avoir une coupure de courant. (on nu a prevünü kil purè ia-vwar ün kupür de kuran) - Ci hanno avvertito che potrebbe esserci un'interruzione di corrente.
La chaudière fait un bruit inquiétant depuis ce matin. (la sodier fè an brüi ankiétan döpüi se maten) - La caldaia fa uno strano rumore preoccupante da stamattina.
Le technicien passera demain entre neuf heures et midi. (le teknisièn pasar döman antr nöf ör é midi) - Il tecnico passerà domani tra le nove e mezzogiorno.
Notre chambre donne sur une rue assez animée. (notr sciambre don sür ün rü ase anime) - La nostra camera dà su una strada piuttosto animata.
Est-ce qu'il serait possible d'avoir un oreiller supplémentaire ? (es kil serè posibil davwar an oreyè süplémantèr) - Sarebbe possibile avere un cuscino aggiuntivo?
L'ascenseur fait un bruit étrange à chaque étage. (lasansör fè an brüi etranʒ a scak etaʒ) - L'ascensore fa uno strano rumore a ogni piano.
La salle de bains était encore humide quand nous sommes arrivés. (la sal de ban etè ankor üm id kan nu som arivé) - Il bagno era ancora umido quando siamo arrivati.
On a trouvé l'appartement facilement grâce aux indications de l'hôte. (on a truvé lapartman fasilman gras o zandikasiòn de lot) - Abbiamo trovato facilmente l'appartamento grazie alle indicazioni del proprietario.
Je prendrai la soupe du jour et une salade. (ʒö prendré la sup dü ʒur é ün salad) - Prenderò la zuppa del giorno e un'insalata.
On peut commander un dessert à partager ? (on pö komandé an desèr a partaʒé) - Possiamo ordinare un dolce da condividere?
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
