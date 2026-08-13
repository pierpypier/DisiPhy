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
