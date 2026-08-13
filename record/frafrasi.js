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
J'ai passé un coup de chiffon sur les meubles avant l'arrivée des invités. (ʒé pase an ku de scifon sür le möbl avan larivé dez anvitè) - Ho dato una spolverata ai mobili prima dell'arrivo degli ospiti.
Tu peux laisser tes chaussures à l'entrée, s'il te plaît ? (tü pö lesé te scosür a lantré, sil te plè) - Puoi lasciare le scarpe all'ingresso, per favore?
La lampe du salon vient de griller. (la lamp dü salon vien de griyé) - La lampada del soggiorno si è appena fulminata.
J'ai lancé une lessive avant de partir travailler. (ʒé lansé ün lesiv avan de partir travayé) - Ho avviato una lavatrice prima di andare al lavoro.
Le chien dort tranquillement dans son panier. (le scièn dor trankilman dan son panïé) - Il cane dorme tranquillamente nella sua cuccia.
Il faudrait penser à remplir la gamelle du chat. (il fodrè pansé a ranplir la gamèl dü scia) - Bisognerebbe ricordarsi di riempire la ciotola del gatto.
J'ai préparé des tartines et des fruits pour tout le monde. (ʒé preparé de tartin é de früi pur tu le mond) - Ho preparato pane tostato e frutta per tutti.
Tu prends ton petit déjeuner maintenant ou plus tard ? (tü pran ton pəti deʒöné mantenan u plü tar) - Fai colazione adesso o più tardi?
Il n'y a plus de jus d'orange dans le frigo. (il nia plü de ʒü doranʒ dan le frigo) - Non c'è più succo d'arancia in frigorifero.
On fera des pâtes ce soir, ça ira plus vite. (on fera de pat se swar, sa ira plü vit) - Stasera faremo la pasta, sarà più veloce.
J'ai oublié mon manuel de géographie à la maison. (ʒé oublié mon manyel de ʒeografi a la mezon) - Ho dimenticato a casa il mio libro di geografia.
La professeure a déplacé l'interrogation à vendredi. (la profesör a deplasé lanterogasiòn a vandrödi) - L'insegnante ha spostato l'interrogazione a venerdì.
Je n'arrive pas à comprendre cet exercice de physique. (ʒö nariv pa a komprandr set egzersis de fizik) - Non riesco a capire questo esercizio di fisica.
Tu as besoin d'aide pour préparer ton exposé ? (tü a bezwan ded pur preparé ton ekspoze) - Hai bisogno di aiuto per preparare la tua presentazione?
Après les cours, rentre directement à la maison. (aprè le kur, rantr direktman a la mezon) - Dopo le lezioni torna direttamente a casa.
Tu peux rester un peu plus longtemps si tu me préviens. (tü pö resté an pö plü lontan si tü me previan) - Puoi restare un po' più a lungo se mi avvisi.
Je veux savoir avec qui tu vas sortir ce soir. (ʒö vö savwar avek ki tü va sortir se swar) - Voglio sapere con chi esci stasera.
Il est déjà tard, il serait temps d'aller dormir. (il é deʒa tar, il serè tan dalé dormir) - È già tardi, sarebbe ora di andare a dormire.
J'ai oublié de prendre mon traitement ce matin. (ʒé oublié de prandr mon tretman se maten) - Stamattina ho dimenticato di prendere la mia terapia.
Est-ce que je peux acheter ce médicament sans ordonnance ? (es ke ʒö pö asciété se medikaman san zordonans) - Posso comprare questo farmaco senza ricetta?
J'ai rendez-vous chez le dentiste à quinze heures. (ʒé randé-vu sce le dentist a kanz ör) - Ho appuntamento dal dentista alle quindici.
Je descends à la prochaine gare, tu peux garder ma place ? (ʒö desan a la proscièn gar, tü pö gardé ma plas) - Scendo alla prossima stazione, puoi tenermi il posto?
Le train est parti juste au moment où nous sommes arrivés. (le tran é parti ʒüst o moman u nu som arivé) - Il treno è partito proprio nel momento in cui siamo arrivati.
Il faut consulter les horaires avant de prendre le billet. (il fo konsülte le zorèr avan de prandr le biyè) - Bisogna controllare gli orari prima di comprare il biglietto.
La sortie du métro est de l'autre côté de la place. (la sorti dü métro é de lotr koté de la plas) - L'uscita della metropolitana è dall'altra parte della piazza.
J'ai oublié mon abonnement dans mon autre portefeuille. (ʒé oublié mon aboman dan mon otr portföy) - Ho dimenticato il mio abbonamento nell'altro portafoglio.
Le tram est supprimé ce matin à cause des travaux. (le tram é sürprimé se maten a koz de travay) - Il tram è soppresso stamattina a causa dei lavori.
On ferait mieux de prendre un taxi, le bus est trop lent. (on ferè miö de prandr an taksi, le büs é tro lan) - Faremmo meglio a prendere un taxi, l'autobus è troppo lento.
Le bus arrive toujours en retard à cette heure-là. (le büs ariv tuʒur an retar a set ör la) - A quest'ora l'autobus arriva sempre in ritardo.
J'ai vérifié l'heure de départ sur l'application de l'aéroport. (ʒé verifié lör de depart sür laplikasiòn de laeropor) - Ho controllato l'orario di partenza sull'app dell'aeroporto.
On a dû refaire passer nos bagages au contrôle. (on a dü refer pasé no bagàʒ o kontrol) - Abbiamo dovuto far ripassare i nostri bagagli ai controlli.
Le personnel nous a indiqué où attendre l'embarquement. (le personel nu a andiké u atandr lanbarkman) - Il personale ci ha indicato dove aspettare l'imbarco.
Le bateau a quitté le quai à l'heure prévue. (le bato a kite le ké a lör prevü) - Il traghetto ha lasciato il molo all'ora prevista.
On doit récupérer la voiture avant de monter sur le ferry. (on dwa reküperé la vuatür avan de monté sür le feri) - Dobbiamo recuperare l'auto prima di salire sul traghetto.
Si tu continues dans cette direction, tu arriveras à la place principale. (si tü kontinü dan set direksiòn, tü arivra a la plas prinsipal) - Se continui in questa direzione, arriverai alla piazza principale.
Le GPS me fait passer par des petites rues. (le ʒe-pe-es me fè pasé par de pətit rü) - Il GPS mi fa passare per delle stradine.
J'ai entendu un claquement quand j'ai démarré la voiture. (ʒé antandü an klakman kan ʒé demaré la vuatür) - Ho sentito uno scatto quando ho avviato la macchina.
La batterie est complètement à plat. (la bateri é kompletman a pla) - La batteria è completamente scarica.
Heureusement, personne n'a été blessé dans l'accident. (örözman, person na été blesé dan laksidan) - Per fortuna nessuno è rimasto ferito nell'incidente.
Il y a un arbre tombé au milieu de la chaussée. (il ia an narbr tombe o miliö de la sosé) - C'è un albero caduto in mezzo alla carreggiata.
L'eau s'est infiltrée par le plafond pendant l'orage. (lo sé anfilté par le plafon pandan loraʒ) - Durante il temporale l'acqua è filtrata dal soffitto.
La connexion revient, mais elle est encore très instable. (la koneksiòn revian, mè el é ankor trè anstabl) - La connessione è tornata, ma è ancora molto instabile.
La réception m'a donné une autre chambre pour la nuit. (la resepsiòn ma doné ün otr sciambre pur la nüi) - La reception mi ha dato un'altra camera per la notte.
Le minibar n'a pas été rempli depuis notre arrivée. (le minibar na pa été ranpli döpüi notr arivé) - Il minibar non è stato rifornito dal nostro arrivo.
La clé de la chambre ne fonctionne plus, vous pouvez nous aider ? (la clé de la sciambre ne fonksiòn plü, vu puvé nu zedé) - La chiave della camera non funziona più, potete aiutarci?
L'appartement était beaucoup plus petit que sur les photos. (lapartman etè bokou plü pəti ke sür le foto) - L'appartamento era molto più piccolo che nelle foto.
L'hôte nous a laissé quelques recommandations pour le quartier. (lot nu a lesé kelk rekomandasiòn pur le kartié) - Il proprietario ci ha lasciato alcuni consigli per il quartiere.
Je prendrai le menu végétarien, s'il vous plaît. (ʒö prendré le menü veʒetarien, sil vu plè) - Prenderò il menù vegetariano, per favore.
Excusez-moi, nous n'avons pas commandé cette bouteille. (eksküze mwa, nu navon pa komande set buy) - Mi scusi, non abbiamo ordinato questa bottiglia.
Le dessert était tellement bon qu'on en a repris un deuxième. (le desèr etè telman bon kon an a repri an dözièm) - Il dolce era così buono che ne abbiamo preso un secondo.
On devrait arriver avant la fermeture du musée. (on dövrè arivé avan la fermetür dü müzé) - Dovremmo arrivare prima della chiusura del museo.
J'ai réservé deux places pour la séance de huit heures. (ʒé rezerve dö plas pur la seans de üit ör) - Ho prenotato due posti per lo spettacolo delle otto.
J'ai rangé les produits ménagers sous l'évier. (ʒé ranʒé le prodüi menaʒè su lévié) - Ho sistemato i prodotti per la pulizia sotto il lavandino.
Tu peux secouer le tapis dehors avant de le remettre ? (tü pö seküé le tapi döor avan de le remetr) - Puoi scuotere il tappeto fuori prima di rimetterlo?
La porte du garage est restée entrouverte. (la port dü garaʒ é resté antruvèr) - La porta del garage è rimasta socchiusa.
J'ai fait tourner la machine avec les serviettes. (ʒé fè turné la mascin avek le servièt) - Ho fatto andare la lavatrice con gli asciugamani.
Le chat a renversé son bol d'eau pendant la nuit. (le scia a ranversé son bol do pandan la nüi) - Il gatto ha rovesciato la sua ciotola dell'acqua durante la notte.
Il faut acheter des sacs-poubelle avant ce soir. (il fo asciété de sak-pubèl avan se swar) - Bisogna comprare i sacchi della spazzatura prima di stasera.
J'ai pris une banane parce que je n'avais pas le temps de cuisiner. (ʒé pri ün banan parskö ʒö navè pa le tan de küiziné) - Ho preso una banana perché non avevo tempo di cucinare.
Tu peux mettre les bols sur la table ? (tü pö metr le bol sür la tabl) - Puoi mettere le ciotole sul tavolo?
On a encore des œufs, mais il faut acheter du pain. (on a ankor de zö, mè il fo asciété dü pan) - Abbiamo ancora delle uova, ma bisogna comprare il pane.
J'ai préparé une soupe pour ce soir, elle est encore chaude. (ʒé preparé ün sup pur se swar, el é ankor scod) - Ho preparato una zuppa per stasera, è ancora calda.
Le devoir de littérature m'a pris toute l'après-midi. (le devwar de literatür ma pri tut laprè-midi) - Il compito di letteratura mi ha portato via tutto il pomeriggio.
Le professeur a annoncé les résultats ce matin. (le profesör a anonse le rezülta se maten) - L'insegnante ha annunciato i risultati stamattina.
J'ai besoin de relire le chapitre avant le contrôle. (ʒé bezwan de relir le sciapitr avan le kontrol) - Ho bisogno di rileggere il capitolo prima della verifica.
Elle travaille mieux quand elle étudie dans le silence. (el travay miö kan el etüdi dan le silans) - Studia meglio quando studia in silenzio.
Range ton bureau avant d'aller jouer. (ranʒ ton büro avan dalé ʒué) - Metti in ordine la tua scrivania prima di andare a giocare.
Je t'ai demandé de ne pas laisser tes affaires partout. (ʒö té demandé de ne pa lesé te zafer partu) - Ti ho chiesto di non lasciare le tue cose dappertutto.
On partira dès que tu auras fini de te préparer. (on partira de ke tü ora fini de te preparé) - Partiremo appena avrai finito di prepararti.
Tu peux dormir un peu plus demain, c'est dimanche. (tü pö dormir an pö plü döman, sè dimansc) - Domani puoi dormire un po' di più, è domenica.
J'ai une petite irritation à l'œil depuis ce matin. (ʒé ün pətit iritasiòn a löy döpüi se maten) - Ho una piccola irritazione all'occhio da stamattina.
Le médecin m'a conseillé de boire chaud et de me reposer. (le medsan ma konsèyé de bwar scod é de me repoze) - Il medico mi ha consigliato di bere qualcosa di caldo e riposarmi.
Je dois passer à la pharmacie avant de rentrer. (ʒö dwa pase a la farmasi avan de rantré) - Devo passare in farmacia prima di tornare a casa.
La salle d'attente est presque pleine. (la sal datant é presk plen) - La sala d'attesa è quasi piena.
Le train de dix-huit heures est affiché sur quel écran ? (le tran de diz-üit ör é afisce sür kel ekran) - Su quale schermo è indicato il treno delle diciotto?
J'ai pris une place côté couloir cette fois. (ʒé pri ün plas koté kulwar set fwa) - Questa volta ho preso un posto vicino al corridoio.
Le train ralentit, je pense qu'on approche de la gare. (le tran ralanti, ʒö pans kon aprosc de la gar) - Il treno rallenta, penso che ci stiamo avvicinando alla stazione.
Il y a un ascenseur au bout du quai. (il ia an nasansör o bu dü ké) - C'è un ascensore in fondo al binario.
La rame est arrivée vide, on a trouvé des places facilement. (la ram é arivé vid, on a truvé de plas fasilman) - La carrozza è arrivata vuota, abbiamo trovato facilmente posto.
J'ai oublié de vérifier les perturbations avant de partir. (ʒé oublié de verifié le pertürbasiòn avan de partir) - Ho dimenticato di controllare le disagi prima di partire.
Le tram passe devant la gare toutes les dix minutes. (le tram pas dövan la gar tut le dis minüt) - Il tram passa davanti alla stazione ogni dieci minuti.
On peut acheter le ticket directement dans le bus. (on pö asciété le tikè direktman dan le büs) - Possiamo comprare il biglietto direttamente sull'autobus.
La circulation est fluide aujourd'hui, ça change. (la sirkülasiòn é flüid oʒurdüi, sa sciandʒ) - Oggi il traffico scorre bene, è una novità.
Le bus scolaire vient de partir. (le büs skoler vien de partir) - L'autobus scolastico è appena partito.
Notre porte d'embarquement est à l'autre bout du terminal. (notr port danbarkman é a lotr bu dü terminal) - Il nostro gate d'imbarco è dall'altra parte del terminal.
J'ai reçu une notification disant que le vol était avancé. (ʒé resü ün notifikasiòn dizan ke le vol etè avanse) - Ho ricevuto una notifica che diceva che il volo era stato anticipato.
Il faut présenter le passeport au comptoir. (il fo prezanté le paspor o kontwar) - Bisogna presentare il passaporto al banco.
On a une heure avant l'embarquement, allons prendre un café. (on a ün ör avan lanbarkman, alon prandr an kafé) - Abbiamo un'ora prima dell'imbarco, andiamo a prendere un caffè.
La traversée a été plus longue que prévu à cause du vent. (la traversé a été plü long ke prevü a koz dü van) - La traversata è durata più del previsto a causa del vento.
Tu sais où se trouve la billetterie du port ? (tü sè u se truv la biyetrì dü por) - Sai dove si trova la biglietteria del porto?
Après le feu, prends la rue qui monte vers la colline. (aprè le fö, pran la rü ki mont ver la kolin) - Dopo il semaforo, prendi la strada che sale verso la collina.
Je crois qu'on a dépassé l'entrée du parking. (ʒö krwa kon a depase lantré dü parking) - Credo che abbiamo superato l'ingresso del parcheggio.
La voiture fait des vibrations quand je dépasse les quatre-vingts. (la vuatür fè de vibrasiòn kan ʒö depas le katr-van) - La macchina vibra quando supero gli ottanta.
J'ai appelé mon assurance pour déclarer l'accident. (ʒé apel mon asürans pur deklare laksidan) - Ho chiamato la mia assicurazione per denunciare l'incidente.
Le feu tricolore ne fonctionne plus depuis hier. (le fö trikolor ne fonksiòn plü döpüi ier) - Il semaforo non funziona più da ieri.
La route est impraticable après les fortes pluies. (la rut é anpratikabl aprè le fort plüi) - La strada è impraticabile dopo le forti piogge.
Tout l'immeuble a été évacué à cause de la fumée. (tu limöbl a été evaküé a koz de la fümé) - Tutto il palazzo è stato evacuato a causa del fumo.
La climatisation fait un bruit étrange quand on l'allume. (la klimatizasiòn fè an brüi etranʒ kan on lalüm) - L'aria condizionata fa uno strano rumore quando la accendiamo.
Le plombier doit venir dans l'après-midi. (le plombié dwa venir dan laprè-midi) - L'idraulico dovrebbe venire nel pomeriggio.
Le petit déjeuner de l'hôtel commence à sept heures. (le pəti deʒöné de lotèl komans a set ör) - La colazione dell'hotel inizia alle sette.
La chambre donne directement sur la cour intérieure. (la sciambre don direktman sür la kur antériör) - La camera dà direttamente sul cortile interno.
Nous avons demandé un départ tardif pour dimanche. (nu zavon demandé an depart tardif pur dimansc) - Abbiamo chiesto un check-out posticipato per domenica.
Je vais vérifier si la piscine est ouverte aujourd'hui. (ʒö vé verifié si la pisin é uvert oʒurdüi) - Controllo se la piscina è aperta oggi.
J'ai nettoyé les vitres du salon ce matin. (ʒé netwaye le vitr dü salon se maten) - Ho pulito i vetri del soggiorno stamattina.
Tu peux plier les vêtements qui sont sur le canapé ? (tü pö plié le vetman ki son sür le kanapé) - Puoi piegare i vestiti che sono sul divano?
J'ai laissé les clés de secours dans le tiroir. (ʒé lesé le clé de sekur dan le tirwar) - Ho lasciato le chiavi di riserva nel cassetto.
Le sèche-linge est presque terminé. (le sèsc-liènʒ é presk terminé) - L'asciugatrice ha quasi finito.
Le chat s'est installé sur mon fauteuil préféré. (le scia sé anstalé sür mon fotöy preferé) - Il gatto si è sistemato sulla mia poltrona preferita.
N'oublie pas de remplir la bouteille d'eau avant de sortir. (nübli pa de ranplir la butèy do avan de sortir) - Non dimenticare di riempire la bottiglia d'acqua prima di uscire.
J'ai préparé du café frais pour tout le monde. (ʒé preparé dü kafé frè pur tu le mond) - Ho preparato caffè fresco per tutti.
Tu veux une omelette ou des œufs au plat ? (tü vö ün omlet u de zö o pla) - Vuoi una frittata o delle uova al tegamino?
Il reste du pain d'hier, mais il est encore très bon. (il rest dü pan dijèr, mè il é ankor trè bon) - È rimasto del pane di ieri, ma è ancora molto buono.
On peut manger dehors s'il fait assez chaud. (on pö manʒé döor sil fè ase scod) - Possiamo mangiare fuori se fa abbastanza caldo.
J'ai une rédaction à finir pour demain matin. (ʒé ün redaksiòn a finir pur döman maten) - Ho un tema da finire per domani mattina.
Le professeur nous a demandé de travailler en groupes. (le profesör nu a demandé de travayé an grup) - L'insegnante ci ha chiesto di lavorare in gruppo.
Je dois apprendre cette leçon avant le prochain cours. (ʒö dwa aprandr set leson avan le proscièn kur) - Devo imparare questa lezione prima della prossima lezione.
Elle a passé une heure à chercher des informations pour son projet. (el a pase ün ör a scerscé de zanformasiòn pur son proʒè) - Ha passato un'ora a cercare informazioni per il suo progetto.
Tu peux poser ton téléphone pendant que tu fais tes devoirs ? (tü pö poze ton telefon pandan ke tü fè te devwar) - Puoi mettere via il telefono mentre fai i compiti?
Je veux que tu sois prêt à l'heure demain matin. (ʒö vö ke tü swa pre a lör döman maten) - Voglio che tu sia pronto in orario domani mattina.
Tu n'as pas besoin de rentrer tout de suite après l'école. (tü na pa bezwan de rantré tu de süit aprè lekol) - Non devi tornare subito a casa dopo la scuola.
On en reparle quand tu seras plus calme. (on an reparl kan tü sera plü kalm) - Ne riparliamo quando sarai più calmo.
J'ai la tête qui tourne depuis que je me suis levé. (ʒé la tet ki turn döpüi ke ʒö me süi levé) - Ho le vertigini da quando mi sono alzato.
La pharmacienne m'a conseillé un sirop pour la gorge. (la farmasièn ma konsèyé an siro pur la gorg) - La farmacista mi ha consigliato uno sciroppo per la gola.
Je dois éviter le soleil pendant quelques jours. (ʒö dwa evité le solèy pandan kelk ʒur) - Devo evitare il sole per qualche giorno.
Le médecin m'a prescrit une analyse de sang. (le medsan ma preskri ün analiz de san) - Il medico mi ha prescritto un esame del sangue.
À quelle heure arrive le prochain train pour Bordeaux ? (a kel ör ariv le proscièn tran pur Bordo) - A che ora arriva il prossimo treno per Bordeaux?
J'ai trouvé une place près de la sortie. (ʒé truvé ün plas prè de la sorti) - Ho trovato un posto vicino all'uscita.
Le train est tellement long qu'on ne voit même pas le bout. (le tran é telman lon kon nö vwa mem pa le bu) - Il treno è così lungo che non se ne vede nemmeno la fine.
Tu peux me prévenir quand on approche de notre arrêt ? (tü pö me prevnir kan on aprosc de notr are) - Puoi avvisarmi quando ci avviciniamo alla nostra fermata?
La station suivante est fermée pour travaux. (la stasiòn süivant é fermé pur travay) - La stazione successiva è chiusa per lavori.
Je descends à la prochaine, j'ai changé de plan. (ʒö desan a la proscièn, ʒé sciandʒé de plan) - Scendo alla prossima, ho cambiato programma.
Le tram est arrivé tellement vite que je n'ai pas eu le temps de monter. (le tram é arivé telman vit ke ʒö né pa ü le tan de monté) - Il tram è arrivato così velocemente che non ho fatto in tempo a salire.
Il faut faire attention en traversant les rails. (il fo fer atansiòn an traversan le rèl) - Bisogna fare attenzione quando si attraversano i binari.
Le bus est coincé dans les embouteillages. (le büs é koinsé dan lezambuteyaj) - L'autobus è bloccato nel traffico.
J'ai laissé mon sac dans le bus, je dois retourner à l'arrêt. (ʒé lesé mon sak dan le büs, ʒö dwa retourné a larè) - Ho lasciato la borsa sull'autobus, devo tornare alla fermata.
On a reçu un message pour nous dire que le vol est retardé. (on a resü an mesaj pur nu dir ke le vol é retarde) - Abbiamo ricevuto un messaggio che ci informa che il volo è in ritardo.
Il faut peser la valise avant d'aller au comptoir. (il fo peze la valiz avan dalé o kontwar) - Bisogna pesare la valigia prima di andare al banco.
J'ai presque oublié mon passeport dans le coffre-fort de l'hôtel. (ʒé presk oublié mon paspor dan le kofr-for de lotèl) - Ho quasi dimenticato il passaporto nella cassaforte dell'hotel.
Le bateau est parti avec vingt minutes de retard. (le bato é parti avek van minüt de retar) - Il traghetto è partito con venti minuti di ritardo.
On peut laisser la voiture sur le parking du port ? (on pö lesé la vuatür sür le parking dü por) - Possiamo lasciare la macchina nel parcheggio del porto?
La rue que tu cherches est juste derrière la mairie. (la rü ke tü scersc é ʒüst derrièr la meri) - La strada che cerchi è proprio dietro il municipio.
Je pense qu'on devrait prendre un raccourci. (ʒö pans kon dövrè prandr an rakursi) - Penso che dovremmo prendere una scorciatoia.
Un voyant jaune s'est allumé après quelques kilomètres. (an vwayan ʒon sé alumé aprè kelk kilomètr) - Si è accesa una spia gialla dopo qualche chilometro.
Je vais m'arrêter à la prochaine station-service. (ʒö vé marete a la proscièn stasiòn servis) - Mi fermerò al prossimo distributore.
Le pare-brise s'est fissuré après un petit impact. (le parbriz sé fisüré aprè an pəti anpak) - Il parabrezza si è crepato dopo un piccolo impatto.
La circulation est complètement bloquée dans cette direction. (la sirkülasiòn é kompletman bloké dan set direksiòn) - Il traffico è completamente bloccato in questa direzione.
La rue a été fermée après les inondations. (la rü a été fermé aprè lez inondasiòn) - La strada è stata chiusa dopo l'alluvione.
Le quartier est encore sans électricité. (le kartié é ankor sanzelektrisité) - Il quartiere è ancora senza elettricità.
La porte de la chambre claque à chaque fois qu'il y a du vent. (la port de la sciambre klak a scak fwa kil ia dü van) - La porta della camera sbatte ogni volta che c'è vento.
Le personnel de l'hôtel a été très serviable. (le personel de lotèl a été trè serviabl) - Il personale dell'hotel è stato molto disponibile.
La douche fuit depuis notre arrivée. (la dusc füi döpüi notr arivé) - La doccia perde da quando siamo arrivati.
L'hôte nous a envoyé une vidéo pour expliquer le fonctionnement du chauffage. (lot nu a anvoyé ün video pur ekspliké le fonksiònman dü scofaj) - Il proprietario ci ha mandato un video per spiegare come funziona il riscaldamento.
Vous avez une table disponible pour trois personnes ? (vu zavé ün tabl disponibl pur trwa person) - Avete un tavolo disponibile per tre persone?
Je vais prendre le plat que vous avez recommandé. (ʒö vé prandr le pla ke vu zavé rekomandé) - Prendo il piatto che ci avete consigliato.
On s'est assis dehors parce qu'il faisait trop chaud à l'intérieur. (on sé asi döor parskil fezè tro scod a lantériör) - Ci siamo seduti fuori perché dentro faceva troppo caldo.
Je crois que ce film mérite vraiment d'être vu au cinéma. (ʒö krwa ke se film merit vreman detr vü o sinema) - Credo che questo film meriti davvero di essere visto al cinema.
J'ai nettoyé la table de la cuisine après le dîner. (ʒé netwayé la tabl de la küizin aprè le diné) - Ho pulito il tavolo della cucina dopo cena.
Tu peux ouvrir les volets, il fait déjà jour. (tü pö uvrir le volè, il fè deʒa ʒur) - Puoi aprire le persiane, è già giorno.
J'ai retrouvé une chaussette derrière le lit. (ʒé retruvé ün scosèt derrièr le li) - Ho ritrovato un calzino dietro il letto.
La machine s'est arrêtée avant la fin du programme. (la mascin sé areté avan la fin dü program) - La lavatrice si è fermata prima della fine del programma.
Le chien attend que quelqu'un lui ouvre la porte. (le scièn atand ke kelkan lüi uvr la port) - Il cane aspetta che qualcuno gli apra la porta.
J'ai rempli le lave-vaisselle après le repas. (ʒé ranpli le lav-vèsèl aprè le röpa) - Ho riempito la lavastoviglie dopo il pasto.
Je prends juste un café avant de commencer ma journée. (ʒö pran ʒüst an kafé avan de komansé ma ʒurné) - Prendo solo un caffè prima di iniziare la giornata.
Tu peux couper le pain pendant que je fais les œufs ? (tü pö kupe le pan pandan ke ʒö fè le zö) - Puoi tagliare il pane mentre preparo le uova?
Il reste du fromage dans le frigo si tu as encore faim. (il rest dü fromaʒ dan le frigo si tü a ankor fen) - C'è ancora del formaggio in frigorifero se hai ancora fame.
On a prévu de manger tous ensemble dimanche midi. (on a prevü de manʒé tu ansambl dimansc midi) - Abbiamo previsto di pranzare tutti insieme domenica.
J'ai oublié mon livre de maths dans la salle de classe. (ʒé oublié mon livr de mat dan la sal de klas) - Ho dimenticato il mio libro di matematica in classe.
La prof nous a rendu les contrôles aujourd'hui. (la prof nu a randü le kontrol oʒurdüi) - Oggi la professoressa ci ha restituito le verifiche.
Je dois encore apprendre une dizaine de mots pour demain. (ʒö dwa ankor aprandr ün dizèn de mo pur döman) - Devo ancora imparare una decina di parole per domani.
Il a eu du mal à se concentrer pendant le cours. (il a ü dü mal a se konsantré pandan le kur) - Ha avuto difficoltà a concentrarsi durante la lezione.
Tu ferais mieux de commencer tes devoirs maintenant. (tü ferè miö de komansé te devwar mantenan) - Faresti meglio a iniziare i compiti adesso.
Je veux que tu me préviennes quand tu rentres. (ʒö vö ke tü me previen kan tü rantr) - Voglio che mi avvisi quando rientri.
Ce soir, pas de téléphone à table. (se swar, pa de telefon a tabl) - Stasera niente telefono a tavola.
Tu peux inviter tes amis, mais pas trop tard. (tü pö anvité te zami, mè pa tro tar) - Puoi invitare i tuoi amici, ma non troppo tardi.
Demain, tu te lèves tôt parce que tu as cours. (döman, tü te lev to parskö tü a kur) - Domani ti alzi presto perché hai lezione.
Je me suis réveillé avec un peu de fièvre. (ʒö me süi reveyè avek an pö de fièvr) - Mi sono svegliato con un po' di febbre.
Le médecin veut me revoir la semaine prochaine. (le medsan vö me revwar la semèn proscièn) - Il medico vuole rivedermi la prossima settimana.
J'ai demandé au pharmacien s'il y avait une version moins chère. (ʒé demandé o farmasièn sil ia-vè ün versiòn mwan scèr) - Ho chiesto al farmacista se c'era una versione meno costosa.
Ça fait deux jours que j'ai mal au ventre. (sa fè dö ʒur ke ʒé mal o vantr) - Ho mal di pancia da due giorni.
Le train entre en gare dans quelques secondes. (le tran antr an gar dan kelk sekond) - Il treno entra in stazione tra pochi secondi.
J'ai vérifié mon billet, mais je ne trouve pas le numéro de voiture. (ʒé verifié mon biyè, mè ʒö nö truv pa le nümero de vuatür) - Ho controllato il biglietto, ma non trovo il numero della carrozza.
On descend à la prochaine gare et on prend un autre train. (on desan a la proscièn gar é on pran an otr tran) - Scendiamo alla prossima stazione e prendiamo un altro treno.
Le métro s'arrête dans toutes les stations aujourd'hui. (le métro sarèt dan tut le stasiòn oʒurdüi) - Oggi la metropolitana si ferma in tutte le stazioni.
Il y a trop de monde sur le quai, attendons le suivant. (il ia tro de mond sür le ké, atandon le süivan) - C'è troppa gente sul binario, aspettiamo il prossimo.
Le tram est plus rapide que la voiture aux heures de pointe. (le tram é plü rapid ke la vuatür o zör de pwant) - Il tram è più veloce dell'auto nelle ore di punta.
J'ai laissé passer deux bus parce qu'ils étaient bondés. (ʒé lesé pasé dö büs parskil zetè bonde) - Ho lasciato passare due autobus perché erano pieni.
Tu peux me dire si ce bus va jusqu'à la gare centrale ? (tü pö me dir si se büs va ʒüsk a la gar santral) - Puoi dirmi se questo autobus arriva fino alla stazione centrale?
Le chauffeur a changé d'itinéraire à cause d'une rue fermée. (le scöför a sciandʒé ditinerèr a koz dün rü fermé) - L'autista ha cambiato percorso a causa di una strada chiusa.
Les écrans indiquent que l'embarquement commence bientôt. (lekran zandik ke lanbarkman komans byanto) - Gli schermi indicano che l'imbarco inizierà presto.
J'ai choisi un siège près de l'allée. (ʒé scwazi an sièʒ prè de lalé) - Ho scelto un posto vicino al corridoio.
On doit passer par le contrôle des passeports avant la sortie. (on dwa pasé par le kontrol de paspor avan la sorti) - Dobbiamo passare dal controllo passaporti prima dell'uscita.
Le ferry a été annulé à cause de la mauvaise météo. (le feri a été anulé a koz de la movè meteo) - Il traghetto è stato cancellato a causa del maltempo.
Il faut garder le billet jusqu'à l'arrivée au port. (il fo gardé le biyè ʒüsk a larivé o por) - Bisogna conservare il biglietto fino all'arrivo al porto.
Tu prends cette avenue et tu tournes à gauche au prochain feu. (tü pran set avenü é tü turn a gos o proscièn fö) - Prendi questo viale e gira a sinistra al prossimo semaforo.
Je ne reconnais pas du tout ce quartier. (ʒö nö rekonè pa dü tu se kartié) - Non riconosco affatto questo quartiere.
Ma voiture a commencé à perdre de la puissance sur l'autoroute. (ma vuatür a komansé a perdr de la püsans sür lotorut) - La mia macchina ha iniziato a perdere potenza in autostrada.
Le garagiste pense que le problème vient de l'alternateur. (le garajist pans ke le problem vien de lalternatör) - Il meccanico pensa che il problema venga dall'alternatore.
J'ai vu de la fumée sortir du capot. (ʒé vü de la fümé sortir dü kapo) - Ho visto uscire del fumo dal cofano.
Les pompiers sont arrivés très rapidement. (le pompier son arivé trè rapidman) - I vigili del fuoco sono arrivati molto rapidamente.
Il pleut tellement que les caniveaux débordent. (il plö telman ke le kanivo debord) - Piove così tanto che i tombini straripano.
On a eu une coupure de courant pendant le dîner. (on a ü ün kupür de kuran pandan le diné) - Abbiamo avuto un'interruzione di corrente durante la cena.
La réception peut appeler un taxi pour nous ? (la resepsiòn pö apel an taksi pur nu) - La reception può chiamarci un taxi?
La chambre était correcte, mais le lit était très inconfortable. (la sciambre etè korekt, mè le li etè trè ankonfortabl) - La camera era discreta, ma il letto era molto scomodo.
Le voisin de l'étage supérieur faisait du bruit toute la nuit. (le vwasan de letaʒ süperiör fezè dü brüi tut la nüi) - Il vicino del piano superiore faceva rumore tutta la notte.
J'ai signalé le problème à l'accueil dès ce matin. (ʒé signalé le problem a laköy de se maten) - Ho segnalato il problema alla reception già stamattina.
On peut laisser nos valises ici jusqu'à ce soir ? (on pö lesé no valiz isi ʒüsk a se swar) - Possiamo lasciare qui le nostre valigie fino a stasera?
L'appartement est bien situé, tout est accessible à pied. (lapartman é bièn situé, tu é aksesibl a pié) - L'appartamento è ben situato, tutto è raggiungibile a piedi.
J'ai balayé le sol de la cuisine avant de préparer le dîner. (ʒé baleyé le sol de la küizin avan de preparé le diné) - Ho spazzato il pavimento della cucina prima di preparare la cena.
Tu peux remettre les livres à leur place quand tu as fini ? (tü pö remetr le livr a lör plas kan tü a fini) - Puoi rimettere i libri al loro posto quando hai finito?
J'ai laissé les volets fermés pour garder la fraîcheur. (ʒé lesé le volè fermé pur gardé la frescör) - Ho lasciato le persiane chiuse per mantenere il fresco.
La lessive est prête, il ne reste plus qu'à l'étendre. (la lesiv é pret, il ne rest plü ka letandr) - Il bucato è pronto, bisogna solo stenderlo.
Le chien veut sortir, il gratte la porte depuis cinq minutes. (le scièn vö sortir, il grat la port döpüi sank minüt) - Il cane vuole uscire, gratta la porta da cinque minuti.
J'ai nettoyé la litière du chat ce matin. (ʒé netwaye la litier dü scia se maten) - Ho pulito la lettiera del gatto stamattina.
Tu veux des céréales ou des biscuits au petit déjeuner ? (tü vö de sereal u de bisküi o pəti deʒöné) - Vuoi cereali o biscotti a colazione?
Je n'ai pas eu le temps de boire mon café. (ʒö né pa ü le tan de bwar mon kafé) - Non ho avuto il tempo di bere il mio caffè.
On a encore du jambon si quelqu'un en veut. (on a ankor dü ʒambon si kelkan an vö) - Abbiamo ancora del prosciutto se qualcuno ne vuole.
Mets les couverts sur la table, s'il te plaît. (mé le kuvèr sür la tabl, sil te plè) - Metti le posate sul tavolo, per favore.
J'ai une présentation orale à préparer pour la semaine prochaine. (ʒé ün prezantasiòn oral a preparé pur la semèn proscièn) - Devo preparare una presentazione orale per la prossima settimana.
Le professeur a donné les consignes avant de commencer l'exercice. (le profesör a doné le konsiñ avan de komansé legzersis) - L'insegnante ha dato le istruzioni prima di iniziare l'esercizio.
Elle a passé la soirée à réviser pour son examen. (el a pase la swaré a revizé pur son egzamen) - Ha passato la serata a ripassare per il suo esame.
J'ai compris l'idée, mais je ne sais pas comment la démontrer. (ʒé kompri lide, mè ʒö nö sè pa koman la demontré) - Ho capito l'idea, ma non so come dimostrarla.
Tu as fini tes devoirs ou tu as encore quelque chose à faire ? (tü a fini te devwar u tü a ankor kelkö scos a fer) - Hai finito i compiti o hai ancora qualcosa da fare?
Ce week-end, tu peux dormir chez ton cousin. (se wik-end, tü pö dormir sce ton kuzan) - Questo fine settimana puoi dormire da tuo cugino.
Je préfère que tu me dises la vérité tout de suite. (ʒö prefer ke tü me diz la verité tu de süit) - Preferisco che tu mi dica subito la verità.
Tu peux sortir après le dîner, mais sois prudent. (tü pö sortir aprè le diné, mè swa prüd an) - Puoi uscire dopo cena, ma stai attento.
Il faut prévenir si tu changes tes plans. (il fo prevnir si tü sciandʒ te plan) - Devi avvisare se cambi programma.
Je suis encore un peu fatigué, mais ça va mieux. (ʒö süi ankor an pö fatigué, mè sa va miö) - Sono ancora un po' stanco, ma sto meglio.
J'ai une légère douleur quand je bouge le bras. (ʒé ün leʒèr dulör kan ʒö buʒ le bra) - Ho un leggero dolore quando muovo il braccio.
Le médecin m'a demandé depuis combien de temps j'avais ces symptômes. (le medsan ma demandé döpüi kombièn de tan ʒavé se simptom) - Il medico mi ha chiesto da quanto tempo avevo questi sintomi.
La pharmacie ferme dans vingt minutes. (la farmasi ferm dan van minüt) - La farmacia chiude tra venti minuti.
Je dois faire une prise de sang demain matin. (ʒö dwa fer ün priz de san döman maten) - Devo fare un prelievo del sangue domani mattina.
Le train est annoncé voie sept, mais vérifie quand même l'écran. (le tran é anonse vwa set, mè verifi kan mem lékran) - Il treno è annunciato al binario sette, ma controlla comunque lo schermo.
J'ai pris une réservation pour le train de samedi matin. (ʒé pri ün rezervasiòn pur le tran de samdi maten) - Ho prenotato il treno di sabato mattina.
Le contrôleur m'a demandé de présenter une pièce d'identité. (le kontrolör ma demandé de prezanté ün piès didantité) - Il controllore mi ha chiesto di mostrare un documento d'identità.
On a dû attendre vingt minutes avant que le métro reparte. (on a dü atandr van minüt avan ke le métro repar) - Abbiamo dovuto aspettare venti minuti prima che la metropolitana ripartisse.
La sortie numéro trois donne directement sur la rue principale. (la sorti nümero trwa don direktman sür la rü prinsipal) - L'uscita numero tre dà direttamente sulla strada principale.
Je préfère prendre le tram, il y a moins de monde. (ʒö prefer prandr le tram, il ia mwan de mond) - Preferisco prendere il tram, c'è meno gente.
Le bus s'est arrêté pour laisser passer une ambulance. (le büs sé arete pur lesé pasé ün anbilans) - L'autobus si è fermato per far passare un'ambulanza.
J'ai consulté les horaires, le prochain bus arrive dans huit minutes. (ʒé konsülte le zorèr, le proscièn büs ariv dan üit minüt) - Ho controllato gli orari, il prossimo autobus arriva tra otto minuti.
Il faut arriver à l'aéroport au moins deux heures avant le départ. (il fo arivé a laeropor o mwan dö ör avan le depart) - Bisogna arrivare in aeroporto almeno due ore prima della partenza.
Mon passeport expire dans quelques mois, je dois le renouveler. (mon paspor ekspir dan kelk mwa, ʒö dwa le renüvelé) - Il mio passaporto scade tra qualche mese, devo rinnovarlo.
On attend encore la livraison des bagages. (on atand ankor la livrezon de bagàʒ) - Stiamo ancora aspettando la consegna dei bagagli.
La mer est trop agitée pour sortir en bateau aujourd'hui. (la mer é tro aʒité pur sortir an bato oʒurdüi) - Il mare è troppo mosso per uscire in barca oggi.
Tu sais si le dernier ferry est déjà parti ? (tü sè si le dernie feri é deʒa parti) - Sai se l'ultimo traghetto è già partito?
Après le pont, tu verras un grand bâtiment blanc. (aprè le pon, tü verra an gran batiman blan) - Dopo il ponte vedrai un grande edificio bianco.
Je crois qu'on s'est trompés de direction. (ʒö krwa kon sé trompé de direksiòn) - Credo che abbiamo preso la direzione sbagliata.
Le voyant du moteur s'est allumé pendant que je conduisais. (le vwayan dü motor sé alumé pandan ke ʒö kondüizè) - La spia del motore si è accesa mentre guidavo.
Le dépanneur m'a dit qu'il arriverait dans une demi-heure. (le depanör ma di kil arivré dan ün dömi ör) - Il soccorso stradale mi ha detto che arriverà tra mezz'ora.
J'ai dû m'arrêter parce que les freins faisaient un bruit étrange. (ʒé dü marete parskö le fran fezè an brüi etranʒ) - Ho dovuto fermarmi perché i freni facevano uno strano rumore.
Le feu est resté rouge pendant presque cinq minutes. (le fö é resté ruʒ pandan presk sank minüt) - Il semaforo è rimasto rosso per quasi cinque minuti.
La rue est encore boueuse après les fortes pluies d'hier. (la rü é ankor buöz aprè le fort plüi dijèr) - La strada è ancora fangosa dopo le forti piogge di ieri.
On a perdu le courant juste avant de nous coucher. (on a perdü le kuran ʒüst avan de nu kucé) - È andata via la corrente proprio prima di andare a dormire.
La réception nous a proposé de changer de chambre. (la resepsiòn nu a propozé de sciandʒé de sciambre) - La reception ci ha proposto di cambiare camera.
Le chauffage de la chambre fait beaucoup de bruit. (le scofaj de la sciambre fè bokou de brüi) - Il riscaldamento della camera fa molto rumore.
J'ai demandé si quelqu'un pouvait venir réparer la serrure. (ʒé demandé si kelkan puvè venir reparé la serür) - Ho chiesto se qualcuno poteva venire a riparare la serratura.
Notre hôte a laissé les clés dans une boîte sécurisée. (notr ot a lesé le clé dan ün buat sekürizé) - Il nostro host ha lasciato le chiavi in una cassetta di sicurezza.
La cuisine est bien équipée, il y a même une machine à café. (la küizin é bièn ekipé, il ia mem ün mascin a kafé) - La cucina è ben attrezzata, c'è persino una macchina da caffè.
Je prendrai les légumes grillés avec le poulet. (ʒö prendré le legüm griyé avek le pulé) - Prenderò le verdure grigliate con il pollo.
J'ai vidé le lave-vaisselle avant que tout le monde se réveille. (ʒé vidé le lav-vèsèl avan ke tu le mond se revey) - Ho svuotato la lavastoviglie prima che si svegliassero tutti.
Tu peux éteindre la lumière du couloir en passant ? (tü pö etandr la lümièr dü kuloir an pasan) - Puoi spegnere la luce del corridoio passando?
J'ai mis les clés de la voiture dans mon sac. (ʒé mi le clé de la vuatür dan mon sak) - Ho messo le chiavi della macchina nella mia borsa.
Le lave-linge fait un drôle de bruit depuis quelques jours. (le lav-liènʒ fè an drol de brüi döpüi kelk ʒur) - La lavatrice fa uno strano rumore da qualche giorno.
Le chat s'est caché sous le lit dès qu'il a entendu du bruit. (le scia sé kascé su le li dè kil a antandü dü brüi) - Il gatto si è nascosto sotto il letto appena ha sentito un rumore.
Pense à fermer la porte derrière toi. (pans a fermé la port derrièr twa) - Ricordati di chiudere la porta dietro di te.
J'ai pris un yaourt et une pomme avant de partir. (ʒé pri an iaur é ün pom avan de partir) - Ho preso uno yogurt e una mela prima di uscire.
Tu veux du lait dans ton café ? (tü vö dü lè dan ton kafé) - Vuoi del latte nel caffè?
On mangera les restes d'hier pour le déjeuner. (on manʒra le rest dijèr pur le deʒöné) - A pranzo mangeremo gli avanzi di ieri.
J'ai mis la viande au réfrigérateur pour ce soir. (ʒé mi la viand o refrigératör pur se swar) - Ho messo la carne in frigorifero per stasera.
La classe a un contrôle de maths vendredi prochain. (la klas a an kontrol de mat vandrödi proscièn) - La classe ha una verifica di matematica venerdì prossimo.
Le prof de sciences nous a donné beaucoup de travail. (le prof de sians nu a doné bokou de travay) - L'insegnante di scienze ci ha dato molto lavoro.
J'ai enfin compris comment résoudre ce problème. (ʒé anfèn kompri koman rezudr se problem) - Finalmente ho capito come risolvere questo problema.
Elle doit présenter son projet devant toute la classe. (el dwa prezanté son proʒè devan tut la klas) - Deve presentare il suo progetto davanti a tutta la classe.
N'oublie pas ton sac de sport en partant. (nübli pa ton sak de spor an partan) - Non dimenticare la borsa da palestra quando esci.
Tu dois me prévenir si tu rentres après dix heures. (tü dwa me prevnir si tü rantr aprè diz ör) - Devi avvisarmi se rientri dopo le dieci.
Je ne veux pas que tu regardes des écrans jusqu'à minuit. (ʒö nö vö pa ke tü regard de zekran ʒüsk a minüi) - Non voglio che tu guardi gli schermi fino a mezzanotte.
On se retrouve tous à la maison vers huit heures. (on se retruv tu a la mezon ver üit ör) - Ci ritroviamo tutti a casa verso le otto.
Tu peux choisir le film ce soir, mais pas trop long. (tü pö scwazi le film se swar, mè pa tro lon) - Puoi scegliere tu il film stasera, ma non troppo lungo.
J'ai mal à la gorge depuis hier soir. (ʒé mal a la gorg döpüi dijèr swar) - Ho mal di gola da ieri sera.
Est-ce que cette pommade convient aux enfants ? (es ke set pomad konvien o zanfan) - Questa pomata va bene per i bambini?
Je vais rester à la maison tant que je ne me sentirai pas mieux. (ʒö vé resté a la mezon tan ke ʒö nö me santirè pa miö) - Rimarrò a casa finché non mi sentirò meglio.
L'infirmière m'a demandé si j'étais allergique à certains médicaments. (lanfirmièr ma demandé si ʒetè alergik a serten medikaman) - L'infermiera mi ha chiesto se ero allergico ad alcuni farmaci.
Il vaut mieux prendre rendez-vous avant de venir. (il vo miö prandr randé-vu avan de venir) - È meglio prendere appuntamento prima di venire.
Le quai est indiqué sur le panneau au-dessus de l'escalier. (le ké é andiké sür le pano odesü de leskalyé) - Il binario è indicato sul cartello sopra le scale.
J'ai changé de place parce que j'étais assis du mauvais côté. (ʒé sciandʒé de plas parskö ʒetè asi dü movè koté) - Ho cambiato posto perché ero seduto dal lato sbagliato.
Le train a été retardé à cause d'un problème technique. (le tran a été retarde a koz dan problem teknìk) - Il treno è stato ritardato a causa di un problema tecnico.
On arrive dans dix minutes, prépare-toi à descendre. (on ariv dan dis minüt, prepar-twa a desandr) - Arriviamo tra dieci minuti, preparati a scendere.
La station est directement reliée à la gare routière. (la stasiòn é direktman relié a la gar rutier) - La stazione è collegata direttamente alla stazione degli autobus.
J'ai dû sortir du métro pour vérifier mon itinéraire. (ʒé dü sortir dü métro pur verifié mon itinérer) - Ho dovuto uscire dalla metropolitana per controllare il percorso.
Le tram est bondé à cette heure, on ferait mieux d'attendre. (le tram é bonde a set ör, on ferè miö datandr) - Il tram è pieno a quest'ora, faremmo meglio ad aspettare.
Tu sais si le dernier bus passe encore par ici ? (tü sè si le dernie büs pas ankor par isi) - Sai se l'ultimo autobus passa ancora da qui?
J'ai demandé au chauffeur de me prévenir à l'arrêt suivant. (ʒé demandé o scöför de me prevnir a larè süivan) - Ho chiesto all'autista di avvisarmi alla fermata successiva.
Le vol a été retardé de plus d'une heure. (le vol a été retarde de plü dün ör) - Il volo è stato ritardato di più di un'ora.
J'ai enregistré mon bagage directement à la borne automatique. (ʒé anreʒistré mon bagàʒ direktman a la born otomatik) - Ho registrato il bagaglio direttamente al chiosco automatico.
On nous a demandé d'éteindre tous les appareils électroniques. (on nu a demandé detandr tu le zaparèy elektronik) - Ci hanno chiesto di spegnere tutti i dispositivi elettronici.
Le ferry est déjà à quai, on peut embarquer. (le feri é deʒa a ké, on pö anbarké) - Il traghetto è già attraccato, possiamo imbarcarci.
La voiture doit rester dans le garage pendant la traversée. (la vuatür dwa resté dan le garaʒ pandan la traversé) - L'auto deve rimanere nel garage durante la traversata.
Pour trouver la vieille ville, suivez les panneaux marron. (pur truvé la vièy vil, süivé le pano maron) - Per trovare il centro storico, seguite i cartelli marroni.
Je me suis arrêté pour demander mon chemin à un passant. (ʒö me süi areté pur demandé mon sciamin a an pasan) - Mi sono fermato per chiedere indicazioni a un passante.
La voiture ne démarre plus, même avec les câbles. (la vuatür ne demar plü, mem avek le kabl) - La macchina non parte più, nemmeno con i cavi.
J'ai appelé l'assistance parce que j'avais crevé un pneu. (ʒé apel lasistans parskö ʒavè krevé an pnö) - Ho chiamato il soccorso stradale perché avevo forato una gomma.
Un motard est tombé juste devant nous au carrefour. (an motar é tombé ʒüst devan nu o karkur) - Un motociclista è caduto proprio davanti a noi all'incrocio.
La circulation est paralysée depuis plus d'une heure. (la sirkülasiòn é paralizé döpüi plü dün ör) - Il traffico è paralizzato da più di un'ora.
L'eau est montée rapidement après le gros orage. (lo é monté rapidman aprè le groz oraʒ) - L'acqua è salita rapidamente dopo il forte temporale.
L'hôtel nous a prêté un chargeur parce que nous avions oublié le nôtre. (lotèl nu a preté an sciargör parskö nu zavion oublié le notr) - L'hotel ci ha prestato un caricabatterie perché avevamo dimenticato il nostro.
La climatisation de la chambre ne refroidit presque plus. (la klimatizasiòn de la sciambre ne refrawdi presk plü) - L'aria condizionata della camera non raffredda quasi più.
La douche est bouchée et l'eau ne s'écoule pas. (la dusc é buscé é lo ne sekul pa) - La doccia è intasata e l'acqua non defluisce.
On a laissé nos valises à la consigne de l'hôtel. (on a lesé no valiz a la konsiñ de lotèl) - Abbiamo lasciato le nostre valigie al deposito bagagli dell'hotel.
Notre hôte répond très vite quand on lui écrit. (notr ot repon trè vit kan on lüi ekri) - Il nostro host risponde molto velocemente quando gli scriviamo.
Le restaurant était complet, heureusement qu'on avait réservé. (le restoran etè komplet, örözman kon avè rezerve) - Il ristorante era pieno, per fortuna avevamo prenotato.
J'ai ouvert les fenêtres pour faire entrer un peu d'air frais. (ʒé uver le fenetr pur fer an pö dèr frè) - Ho aperto le finestre per far entrare un po' d'aria fresca.
Tu as vu où j'ai posé les clés de la maison ? (tü a vü u ʒé pozé le clé de la mezon) - Hai visto dove ho messo le chiavi di casa?
Il faut sortir les poubelles avant que le camion passe. (il fo sortir le pubèl avan ke le kamion pas) - Bisogna portare fuori la spazzatura prima che passi il camion.
J'ai mis le linge à sécher sur le balcon. (ʒé mi le liènʒ a seʃé sür le balkon) - Ho messo il bucato ad asciugare sul balcone.
Le chat réclame à manger depuis une heure. (le scia reklàm a manʒé döpüi ün ör) - Il gatto chiede da mangiare da un'ora.
N'oublie pas de fermer les fenêtres avant de partir. (nübli pa de fermé le fenetr avan de partir) - Non dimenticare di chiudere le finestre prima di uscire.
J'ai préparé des crêpes pour le petit déjeuner. (ʒé preparé de krep pur le pəti deʒöné) - Ho preparato delle crêpes per colazione.
Tu veux encore un peu de confiture ? (tü vö ankor an pö de konfitür) - Vuoi ancora un po' di marmellata?
On mangera le poulet avec des légumes ce midi. (on manʒra le pulé avek de legüm se midi) - A pranzo mangeremo il pollo con le verdure.
J'ai mis une bouteille d'eau sur la table pour toi. (ʒé mi ün butèy do sür la tabl pur twa) - Ho messo una bottiglia d'acqua sul tavolo per te.
La classe commence à huit heures et demie demain. (la klas komans a üit ör é dömi döman) - Domani la lezione inizia alle otto e mezza.
Le professeur a changé la date du prochain examen. (le profesör a sciandʒé la dat dü proscièn egzamen) - L'insegnante ha cambiato la data del prossimo esame.
J'ai encore trois exercices de grammaire à faire. (ʒé ankor trwa egzersis de gramer a fer) - Ho ancora tre esercizi di grammatica da fare.
Elle préfère les sciences parce qu'elle trouve ça passionnant. (el prefer le sians parskel truv sa pasionan) - Preferisce le scienze perché le trova appassionanti.
Tu peux relire ton texte avant de le rendre ? (tü pö relir ton tekst avan de le randr) - Puoi rileggere il tuo testo prima di consegnarlo?
Je t'avais demandé de prévenir avant d'inviter quelqu'un. (ʒö tavè demandé de prevnir avan danvité kelkan) - Ti avevo chiesto di avvisare prima di invitare qualcuno.
Ce soir, tu ranges ta chambre avant de sortir. (se swar, tü ranʒ ta sciambre avan de sortir) - Stasera metti in ordine la tua camera prima di uscire.
Si tu as fini, tu peux aller rejoindre tes amis. (si tü a fini, tü pö alé reʒwèndr te zami) - Se hai finito, puoi andare a raggiungere i tuoi amici.
Je préfère que tu sois rentré avant minuit. (ʒö prefer ke tü swa rantré avan minüi) - Preferisco che tu sia rientrato prima di mezzanotte.
On peut en parler tranquillement demain matin. (on pö an parlé trankilman döman maten) - Possiamo parlarne tranquillamente domani mattina.
J'ai pris rendez-vous parce que ma toux ne passe pas. (ʒé pri randé-vu parskö ma tu ne pas pa) - Ho preso appuntamento perché la tosse non passa.
Je cherche quelque chose contre le mal de tête. (ʒö scersc kelkö scos kontr le mal de tet) - Cerco qualcosa contro il mal di testa.
Est-ce que je dois prendre ce médicament avant ou après le repas ? (es ke ʒö dwa prandr se medikaman avan u aprè le röpa) - Devo prendere questo farmaco prima o dopo i pasti?
J'ai oublié de demander combien de temps dure le traitement. (ʒé oublié de demandé kombièn de tan dür le tretman) - Ho dimenticato di chiedere quanto dura la terapia.
Je vais attendre ici jusqu'à ce que mon numéro soit appelé. (ʒö vé atandr isi ʒüsk a ke mon nümero swa apelé) - Aspetterò qui finché non verrà chiamato il mio numero.
Tu sais à quelle heure le train repart ? (tü sè a kel ör le tran repar) - Sai a che ora riparte il treno?
Mon billet indique une correspondance à Lyon. (mon biyè andik ün korespondans a Lion) - Il mio biglietto indica un cambio a Lione.
Il n'y a plus de sièges disponibles dans cette voiture. (il nia plü de sièʒ disponibl dan set vuatür) - Non ci sono più posti disponibili in questa carrozza.
On a dix minutes pour changer de quai. (on a dis minüt pur sciandʒé de ké) - Abbiamo dieci minuti per cambiare binario.
La ligne est interrompue entre ces deux stations. (la liñ é anterompü antr se dö stasiòn) - La linea è interrotta tra queste due stazioni.
J'ai pris le métro parce qu'il y avait trop de circulation. (ʒé pri le métro parskil iavè tro de sirkülasiòn) - Ho preso la metropolitana perché c'era troppo traffico.
La prochaine rame arrive dans moins de cinq minutes. (la proscièn ram ariv dan mwan de sank minüt) - Il prossimo convoglio arriva tra meno di cinque minuti.
Le bus s'est trompé de rue et le chauffeur fait demi-tour. (le büs sé trompé de rü é le scöför fè dömi-tur) - L'autobus ha sbagliato strada e l'autista sta facendo inversione.
Je vais descendre au prochain arrêt, c'est plus pratique. (ʒö vé desandr o proscièn are, sè plü pratik) - Scenderò alla prossima fermata, è più comodo.
L'enregistrement en ligne ferme trois heures avant le vol. (lanreʒistrman an liñ ferm trwa ör avan le vol) - Il check-in online chiude tre ore prima del volo.
J'ai gardé mon billet sur mon téléphone pour éviter de l'imprimer. (ʒé gardé mon biyè sür mon telefon pur evité de lanprimé) - Ho tenuto il biglietto sul telefono per evitare di stamparlo.
Notre vol part du terminal deux, pas du terminal un. (notr vol par dü terminal dö, pa dü terminal an) - Il nostro volo parte dal terminal due, non dal terminal uno.
Il y avait beaucoup de vent quand le ferry est arrivé. (il iavè bokou de van kan le feri é arivé) - C'era molto vento quando è arrivato il traghetto.
On doit être au port une heure avant le départ. (on dwa etr o por ün ör avan le depart) - Dobbiamo essere al porto un'ora prima della partenza.
Tourne après la boulangerie, puis prends la deuxième rue à droite. (turn aprè la bulanʒri, pɥi pran la dözièm rü a drwat) - Gira dopo il panificio, poi prendi la seconda strada a destra.
Je ne sais plus où j'ai garé la voiture. (ʒö ne sè plü u ʒé garé la vuatür) - Non ricordo più dove ho parcheggiato la macchina.
Le moteur chauffe beaucoup quand je reste dans les embouteillages. (le motor scof bokou kan ʒö rest dan lezambuteyaj) - Il motore si surriscalda molto quando rimango nel traffico.
J'ai pris une photo du numéro de la dépanneuse. (ʒé pri ün foto dü nümero de la depanöz) - Ho fotografato il numero del carro attrezzi.
Un scooter a heurté ma voiture en sortant du parking. (an skuter a örté ma vuatür an sortan dü parking) - Uno scooter ha urtato la mia macchina uscendo dal parcheggio.
La police nous a demandé de déplacer la voiture. (la polis nu a demandé de deplasé la vuatür) - La polizia ci ha chiesto di spostare la macchina.
Il y a des travaux sur toute l'avenue depuis lundi. (il ia de travay sür tut lavenü döpüi landi) - Ci sono lavori su tutto il viale da lunedì.
Le quartier a retrouvé l'électricité vers minuit. (le kartié a retruvé lelektrisité ver minüi) - Il quartiere ha riavuto la corrente verso mezzanotte.
La chambre est prête, mais votre salle de bains est encore en nettoyage. (la sciambre é pret, mè votr sal de ban é ankor an netwayaj) - La camera è pronta, ma il vostro bagno è ancora in fase di pulizia.
Est-ce qu'on peut avoir deux serviettes de plus ? (es kon pö avwar dö servièt de plü) - Possiamo avere altri due asciugamani?
La clé magnétique ne déverrouille pas la porte. (la clé manyetik ne devrüi pa la port) - La chiave magnetica non apre la porta.
On entend clairement les conversations du couloir. (on antan klèrman le konversasiòn dü kuloir) - Si sentono chiaramente le conversazioni del corridoio.
L'hôte nous a expliqué où jeter les déchets recyclables. (lot nu a eksplike u ʒeté le desce re siklabl) - L'host ci ha spiegato dove buttare i rifiuti riciclabili.
La réservation comprend le petit déjeuner, mais pas le dîner. (la rezervasiòn kompran le pəti deʒöné, mè pa le diné) - La prenotazione comprende la colazione, ma non la cena.
Je voudrais une table un peu plus loin de la musique. (ʒö vudrè ün tabl an pö plü lwan de la müzik) - Vorrei un tavolo un po' più lontano dalla musica.
J'ai dépoussiéré les étagères avant de remettre les livres. (ʒé depusiéré le zetajèr avan de remetr le livr) - Ho spolverato gli scaffali prima di rimettere i libri.
Tu peux vérifier si j'ai bien fermé la porte d'entrée ? (tü pö verifié si ʒé bièn fermé la port dantré) - Puoi controllare se ho chiuso bene la porta d'ingresso?
La lumière de la salle de bains est restée allumée. (la lümièr de la sal de ban é resté alumé) - La luce del bagno è rimasta accesa.
J'ai suspendu les chemises qui sortaient de la machine. (ʒé süspandü le scömiz ki sortè de la mascin) - Ho appeso le camicie che uscivano dalla lavatrice.
Le chien s'est mis à aboyer dès qu'il a entendu la sonnette. (le scièn sé mi a abwayé dè kil a antandü la sonèt) - Il cane ha iniziato ad abbaiare appena ha sentito il campanello.
Il faut acheter de la nourriture pour le chat. (il fo asciété de la nurritür pur le scia) - Bisogna comprare del cibo per il gatto.
J'ai fait griller deux tranches de pain pour le petit déjeuner. (ʒé fè griyé dö transc de pan pur le pəti deʒöné) - Ho tostato due fette di pane per colazione.
Tu veux que je te prépare quelque chose à manger ? (tü vö ke ʒö te prepar kelkö scos a manʒé) - Vuoi che ti prepari qualcosa da mangiare?
On a gardé un peu de salade pour ce soir. (on a gardé an pö de salad pur se swar) - Abbiamo tenuto un po' di insalata per stasera.
J'ai coupé les légumes pendant que l'eau chauffait. (ʒé kupe le legüm pandan ke lo scofè) - Ho tagliato le verdure mentre l'acqua si scaldava.
Il a oublié de rendre son devoir de français. (il a oublié de randr son devwar de fransè) - Ha dimenticato di consegnare il compito di francese.
La professeure a demandé à chacun de lire un passage à voix haute. (la profesör a demandé a scakan de lir an pasaʒ a vwa ot) - L'insegnante ha chiesto a ciascuno di leggere un brano ad alta voce.
J'ai du mal avec les fractions, je dois encore m'entraîner. (ʒé dü mal avek le fraksiòn, ʒö dwa ankor mantrené) - Ho difficoltà con le frazioni, devo ancora esercitarmi.
Elle a reçu une bonne note pour son devoir d'histoire. (el a resü ün bon not pur son devwar distwar) - Ha preso un buon voto per il compito di storia.
Tu as préparé ton sac pour demain ? (tü a preparé ton sak pur döman) - Hai preparato lo zaino per domani?
Je te laisse une heure pour terminer tes devoirs. (ʒö te les ün ör pur terminé te devwar) - Ti lascio un'ora per finire i compiti.
Après ça, tu peux jouer un peu sur la console. (aprè sa, tü pö ʒué an pö sür la konsol) - Dopo puoi giocare un po' alla console.
On avait dit pas de sorties en semaine. (on avè di pa de sorti an semèn) - Avevamo detto niente uscite durante la settimana.
Je sais que tu es fatigué, mais il faut quand même ranger. (ʒö sè ke tü é fatigué, mè il fo kan mem ranʒé) - So che sei stanco, ma bisogna comunque mettere in ordine.
J'ai pris un comprimé après avoir mangé. (ʒé pri an komprimé aprè avwar manʒé) - Ho preso una compressa dopo aver mangiato.
Le pharmacien m'a demandé si je prenais déjà d'autres médicaments. (le farmasièn ma demandé si ʒö prenè deʒa dotr medikaman) - Il farmacista mi ha chiesto se prendevo già altri farmaci.
Ma température est normale maintenant. (ma tanperatür é normal mantenan) - Adesso la mia temperatura è normale.
J'ai encore un peu de nausée, mais ça passe. (ʒé ankor an pö de noze, mè sa pas) - Ho ancora un po' di nausea, ma sta passando.
L'infirmière va venir prendre ma tension. (lanfirmièr va venir prandr ma tansiòn) - L'infermiera verrà a misurarmi la pressione.
Le train pour Marseille part dans un quart d'heure. (le tran pur Marsèy par dan zan kar dör) - Il treno per Marsiglia parte tra un quarto d'ora.
J'ai pris mon billet au distributeur de la gare. (ʒé pri mon biyè o distribütör de la gar) - Ho preso il biglietto alla macchinetta della stazione.
On devrait monter dans la première voiture pour être près de la sortie. (on dövrè monte dan la premìèr vuatür pur etr prè de la sorti) - Dovremmo salire sulla prima carrozza per essere vicini all'uscita.
Le contrôleur passe dans notre voiture. (le kontrolör pas dan notr vuatür) - Il controllore sta passando nella nostra carrozza.
La ligne de métro est très pratique pour aller au centre. (la liñ de métro é trè pratik pur alé o santr) - La linea della metropolitana è molto comoda per andare in centro.
Il y a une rame à quai, dépêchons-nous. (il ia ün ram a ké, depecion nu) - C'è un convoglio al binario, sbrighiamoci.
J'ai dû valider mon ticket avant de descendre sur le quai. (ʒé dü valide mon tikè avan de desandr sür le ké) - Ho dovuto convalidare il biglietto prima di scendere sul binario.
Le tram passe toutes les cinq minutes aux heures de pointe. (le tram pas tut le sank minüt o zör de pwant) - Il tram passa ogni cinque minuti nelle ore di punta.
Le chauffeur a attendu quelques secondes avant de fermer les portes. (le scöför a atandü kelk sekond avan de fermé le port) - L'autista ha aspettato qualche secondo prima di chiudere le porte.
J'ai raté le bus parce que le feu est passé au rouge. (ʒé raté le büs parskö le fö é pase o ruʒ) - Ho perso l'autobus perché il semaforo è diventato rosso.
Le vol décolle à six heures quarante-cinq demain matin. (le vol dekol a sis ör karant-sank döman maten) - Il volo decolla alle sei e quarantacinque domani mattina.
Je dois encore enregistrer mon bagage en soute. (ʒö dwa ankor anreʒistré mon bagàʒ an sut) - Devo ancora imbarcare il mio bagaglio.
On nous a changé de porte juste avant l'embarquement. (on nu a sciandʒé de port ʒüst avan lanbarkman) - Ci hanno cambiato il gate proprio prima dell'imbarco.
Le contrôle de sécurité a été assez rapide. (le kontrol de sekürité a été ase rapid) - Il controllo di sicurezza è stato abbastanza rapido.
Le bateau est presque plein, il reste seulement quelques places. (le bato é presk plen, il rest selman kelk plas) - Il traghetto è quasi pieno, sono rimasti solo pochi posti.
La mer est beaucoup plus calme près du port. (la mer é bokou plü kalm prè dü por) - Il mare è molto più calmo vicino al porto.
Après le rond-point, prends la deuxième sortie. (aprè le ron-pwan, pran la dözièm sorti) - Dopo la rotonda, prendi la seconda uscita.
J'ai suivi les panneaux, mais je suis quand même arrivé au mauvais endroit. (ʒé süivi le pano, mè ʒö süi kan mem arivé o movè zandrwa) - Ho seguito i cartelli, ma sono comunque arrivato nel posto sbagliato.
Ma voiture fait un bruit métallique quand j'accélère. (ma vuatür fè an brüi metalik kan ʒakseler) - La mia macchina fa un rumore metallico quando accelero.
J'ai appelé le garage pour savoir s'ils pouvaient la regarder aujourd'hui. (ʒé apel le garaʒ pur savwar sil puvè la regardé oʒurdüi) - Ho chiamato l'officina per sapere se potevano controllarla oggi.
Un camion a bloqué une voie juste après l'accident. (an kamion a bloke ün vwa ʒüst aprè laksidan) - Un camion ha bloccato una corsia subito dopo l'incidente.
La mairie a installé des barrières autour de la zone inondée. (la meri a anstalé de barièr otur de la zon inonde) - Il comune ha installato delle transenne intorno alla zona allagata.
On ne peut plus utiliser l'ascenseur depuis ce matin. (on ne pö plü tülizé lasansör döpüi se maten) - Non si può più usare l'ascensore da stamattina.
Le technicien de l'hôtel est venu réparer la télévision. (le teknisièn de lotèl é venü reparé la televizion) - Il tecnico dell'hotel è venuto a riparare la televisione.
La chambre était propre, mais il manquait du savon dans la salle de bains. (la sciambre etè propr, mè il mankè dü savon dan la sal de ban) - La camera era pulita, ma mancava il sapone in bagno.
J'ai demandé à l'accueil si on pouvait changer les draps. (ʒé demandé a laköy si on puvè sciandʒé le dra) - Ho chiesto alla reception se si potevano cambiare le lenzuola.
Notre appartement de vacances est à cinq minutes à pied de la plage. (notr apartman de vakans é a sank minüt a pié de la plaʒ) - Il nostro appartamento per le vacanze è a cinque minuti a piedi dalla spiaggia.
On a reçu le code d'entrée par message hier soir. (on a resü le kod dantré par mesaj ier swar) - Abbiamo ricevuto il codice d'ingresso via messaggio ieri sera.
J'ai lavé le sol de l'entrée parce qu'il était plein de traces. (ʒé lavé le sol de lantré parskil etè plen de tras) - Ho lavato il pavimento dell'ingresso perché era pieno di impronte.
Tu peux arroser les plantes pendant mon absence ? (tü pö aroze le plant pandan mon nabsan s) - Puoi annaffiare le piante mentre sono via?
J'ai retrouvé les clés dans la poche de ma veste. (ʒé retruvé le clé dan la posc de ma vest) - Ho ritrovato le chiavi nella tasca della mia giacca.
La porte du frigo ne ferme plus correctement. (la port dü frigo ne ferm plü korektman) - La porta del frigorifero non si chiude più bene.
Le chien s'est couché près de mes pieds. (le scièn sé kucé prè de me pié) - Il cane si è sdraiato vicino ai miei piedi.
Il faut emmener le chat chez le vétérinaire demain. (il fo anmené le scia sce le veteriner döman) - Bisogna portare il gatto dal veterinario domani.
J'ai bu un verre de jus avant de sortir. (ʒé bü an ver de ʒü avan de sortir) - Ho bevuto un bicchiere di succo prima di uscire.
Tu veux du beurre sur ta tartine ? (tü vö dü bör sür ta tartin) - Vuoi del burro sulla tua fetta di pane?
On a préparé le déjeuner tous les deux. (on a preparé le deʒöné tu le dö) - Abbiamo preparato il pranzo insieme.
J'ai laissé refroidir le plat avant de le mettre au frigo. (ʒé lesé refrawdir le pla avan de le metr o frigo) - Ho lasciato raffreddare il piatto prima di metterlo in frigorifero.
La prof de français a corrigé nos rédactions. (la prof de fransè a koreʒé no redaksiòn) - L'insegnante di francese ha corretto i nostri temi.
Il a oublié son cahier dans la salle de cours. (il a oublié son kayé dan la sal de kur) - Ha dimenticato il suo quaderno in aula.
Je dois revoir les verbes irréguliers avant le test. (ʒö dwa revwar le verb irégülié avan le test) - Devo ripassare i verbi irregolari prima del test.
Elle s'est inscrite à un cours de dessin après l'école. (el sé anskrit a an kur de desan aprè lekol) - Si è iscritta a un corso di disegno dopo la scuola.
J'ai besoin d'une explication supplémentaire pour cet exercice. (ʒé bezwan dün eksplikasiòn süplemantèr pur set egzersis) - Ho bisogno di una spiegazione in più per questo esercizio.
Tu peux ranger tes chaussures dans l'entrée ? (tü pö ranʒé te scosür dan lantré) - Puoi mettere le tue scarpe all'ingresso?
Je t'autorise à sortir, mais tu rentres avant onze heures. (ʒö totoriz a sortir, mè tü rantr avan onz ör) - Ti autorizzo a uscire, ma devi rientrare prima delle undici.
Ce n'est pas grave si tu fais une erreur, recommence simplement. (se né pa grav si tü fè ün erör, rekomans simplöman) - Non è grave se fai un errore, ricomincia semplicemente.
On mangera ensemble quand tu seras rentré. (on manʒra ansambl kan tü sera rantré) - Mangeremo insieme quando sarai tornato.
J'ai pris un rendez-vous en ligne avec le médecin. (ʒé pri an randé-vu an liñ avek le medsan) - Ho preso un appuntamento online con il medico.
Le pharmacien m'a donné des conseils pour soulager la douleur. (le farmasièn ma doné de konsèy pur sulajé la dulör) - Il farmacista mi ha dato dei consigli per alleviare il dolore.
Je n'ai presque plus de symptômes aujourd'hui. (ʒö né presk plü de simptom oʒurdüi) - Oggi non ho quasi più sintomi.
Le médecin veut vérifier mes résultats avant de changer le traitement. (le medsan vö verifié me rezülta avan de sciandʒé le tretman) - Il medico vuole controllare i miei risultati prima di cambiare la terapia.
Je me sens faible depuis ce matin. (ʒö me san febl döpüi se maten) - Mi sento debole da stamattina.
Le train est arrivé sur un autre quai que prévu. (le tran é arivé sür an otr ké ke prevü) - Il treno è arrivato su un binario diverso dal previsto.
J'ai demandé au guichet quel train je devais prendre. (ʒé demandé o giscè kel tran ʒö devè prandr) - Ho chiesto allo sportello quale treno dovevo prendere.
On a trouvé une place assise juste avant le départ. (on a truvé ün plas asi ʒüst avan le depart) - Abbiamo trovato un posto a sedere proprio prima della partenza.
Le train de nuit est beaucoup plus confortable. (le tran de nüi é bokou plü konfortabl) - Il treno notturno è molto più comodo.
La station suivante est à seulement deux arrêts d'ici. (la stasiòn süivant é a selman dö zarè disi) - La stazione successiva è a sole due fermate da qui.
J'ai dû changer de ligne pour rejoindre le centre-ville. (ʒé dü sciandʒé de liñ pur reʒwèndr le santr-vil) - Ho dovuto cambiare linea per raggiungere il centro.
Le métro est arrivé au moment où les portes se fermaient. (le métro é arivé o moman u le port se fermè) - La metropolitana è arrivata proprio mentre si chiudevano le porte.
On peut prendre le tram jusqu'au quartier historique. (on pö prandr le tram ʒüsk o kartié istorik) - Possiamo prendere il tram fino al quartiere storico.
Le bus est passé sans s'arrêter parce qu'il était complet. (le büs é pase san sarete parskil etè komplet) - L'autobus è passato senza fermarsi perché era pieno.
J'ai vérifié l'arrêt sur l'application avant de monter. (ʒé verifié larè sür laplikasiòn avan de monte) - Ho controllato la fermata sull'app prima di salire.
Notre porte d'embarquement vient encore de changer. (notr port danbarkman vien ankor de sciandʒé) - Il nostro gate d'imbarco è cambiato di nuovo.
J'ai mis mon téléphone en mode avion. (ʒé mi mon telefon an mod aviòn) - Ho messo il telefono in modalità aereo.
Il faut récupérer les bagages avant de passer la douane. (il fo reküperé le bagàʒ avan de pasé la duwan) - Bisogna recuperare i bagagli prima di passare la dogana.
On a atterri sans problème malgré le mauvais temps. (on a aterì san problem malgre le movè tan) - Siamo atterrati senza problemi nonostante il maltempo.
Le bateau part du quai numéro quatre. (le bato par dü ké nümero katr) - Il traghetto parte dal molo numero quattro.
On a réservé une cabine pour la traversée de nuit. (on a rezerve ün kabin pur la traversé de nüi) - Abbiamo prenotato una cabina per la traversata notturna.
Continue tout droit jusqu'au grand rond-point. (kontinü tu drwa ʒüsk o gran ron-pwan) - Continua dritto fino alla grande rotonda.
La banque est juste après le pont, sur ta gauche. (la bank é ʒüst aprè le pon, sür ta gos) - La banca è subito dopo il ponte, sulla tua sinistra.
Je me suis garé un peu plus loin parce que cette rue était pleine. (ʒö me süi garé an pö plü lwan parskö set rü etè plen) - Ho parcheggiato un po' più lontano perché questa strada era piena.
Le pneu arrière perd de l'air depuis hier. (le pnö arier per de lèr döpüi ier) - La gomma posteriore perde aria da ieri.
J'ai appelé le garage pour commander la pièce. (ʒé apel le garaʒ pur komandé la piès) - Ho chiamato l'officina per ordinare il pezzo.
La voiture devant nous a freiné brusquement. (la vuatür devan nu a frené brüskman) - La macchina davanti a noi ha frenato bruscamente.
Le feu est en panne depuis ce matin. (le fö é an pan döpüi se maten) - Il semaforo è guasto da stamattina.
Après l'orage, plusieurs rues étaient complètement inondées. (aprè loraʒ, plüzior rü zetè kompletman inonde) - Dopo il temporale, diverse strade erano completamente allagate.
L'hôtel nous a proposé de garder nos bagages après le départ. (lotèl nu a propozé de gardé no bagàʒ aprè le depart) - L'hotel ci ha proposto di tenere i nostri bagagli dopo il check-out.
La serrure de la chambre est vraiment difficile à ouvrir. (la serür de la sciambre é vreman difisil a uvrir) - La serratura della camera è davvero difficile da aprire.
On entend la télévision de la chambre voisine. (on antan la televizion de la sciambre vwasin) - Si sente la televisione della camera accanto.
Notre hôte nous a recommandé un petit restaurant du quartier. (notr ot nu a rekomandé an pəti restoran dü kartié) - Il nostro host ci ha consigliato un piccolo ristorante del quartiere.
J'aimerais réserver une table près de la fenêtre. (ʒemré rezerve ün tabl prè de la fenetr) - Vorrei prenotare un tavolo vicino alla finestra.
J'ai passé l'aspirateur dans le salon avant l'arrivée des invités. (ʒé pase laspiratör dan le salon avan larivé dezanvité) - Ho passato l'aspirapolvere in salotto prima dell'arrivo degli ospiti.
Laisse les clés sur la petite table en rentrant. (lès le clé sür la pətit tabl an rantran) - Lascia le chiavi sul tavolino quando rientri.
La lumière de la cuisine clignote depuis hier soir. (la lümièr de la küizin kliñot döpüi dijèr swar) - La luce della cucina lampeggia da ieri sera.
J'ai lancé une machine avant de partir au travail. (ʒé lansé ün mascin avan de partir o travay) - Ho avviato una lavatrice prima di andare al lavoro.
Le chat dort tranquillement sur le canapé. (le scia dor trankilman sür le kanapé) - Il gatto dorme tranquillamente sul divano.
Le chien a renversé sa gamelle dans la cuisine. (le scièn a ranversé sa gamèl dan la küizin) - Il cane ha rovesciato la sua ciotola in cucina.
Je me suis fait des tartines avec du miel ce matin. (ʒö me süi fè de tartin avek dü mièl se maten) - Stamattina mi sono preparato delle fette di pane con il miele.
Tu peux mettre le café sur la table ? (tü pö metr le kafé sür la tabl) - Puoi mettere il caffè sul tavolo?
On n'a pas besoin de cuisiner, il reste assez de nourriture. (on na pa bezwan de küizine, il rest ase de nurritür) - Non abbiamo bisogno di cucinare, è rimasto abbastanza cibo.
J'ai réservé une pizza pour toute la famille. (ʒé rezervé ün pitsa pur tut la famiy) - Ho ordinato una pizza per tutta la famiglia.
Le professeur a expliqué la règle une deuxième fois. (le profesör a eksplike la regl ün dözièm fwa) - L'insegnante ha spiegato la regola una seconda volta.
J'ai oublié de faire l'exercice de géographie. (ʒé oublié de fer legzersis de ʒeografi) - Ho dimenticato di fare l'esercizio di geografia.
Elle doit rendre son dossier avant vendredi. (el dwa randr son dosié avan vandrödi) - Deve consegnare il suo dossier entro venerdì.
On a une interrogation de physique demain matin. (on a ün antrogasiòn de fizik döman maten) - Domani mattina abbiamo una verifica di fisica.
Il a demandé de l'aide à son professeur après le cours. (il a demandé de led a son profesör aprè le kur) - Ha chiesto aiuto al suo insegnante dopo la lezione.
Je veux savoir avec qui tu vas sortir ce soir. (ʒö vö savwar avek ki tü va sortir se swar) - Voglio sapere con chi uscirai stasera.
Tu peux rester encore un peu, mais envoie-moi un message. (tü pö reste ankor an pö, mè anvwa-mwa an mesaj) - Puoi restare ancora un po', ma mandami un messaggio.
Ce soir, on éteint les écrans à dix heures. (se swar, on etan le zekran a diz ör) - Stasera spegniamo gli schermi alle dieci.
Je ne veux pas discuter de ça maintenant. (ʒö ne vö pa disküte de sa mantenan) - Non voglio discutere di questo adesso.
Demain, on fera les courses ensemble. (döman, on fera le kurs ansambl) - Domani faremo la spesa insieme.
J'ai pris ma température parce que je ne me sentais pas bien. (ʒé pri ma tanperatür parskö ʒö ne me santè pa bièn) - Mi sono misurato la temperatura perché non mi sentivo bene.
Cette crème est à appliquer deux fois par jour. (set krem é a apliké dö fwa par ʒur) - Questa crema va applicata due volte al giorno.
J'ai oublié mon ordonnance à la maison. (ʒé oublié mon ordonans a la mezon) - Ho dimenticato la mia ricetta a casa.
La douleur revient surtout le soir. (la dulör revien sürtu le swar) - Il dolore ritorna soprattutto la sera.
Je dois passer un examen médical la semaine prochaine. (ʒö dwa pasé an egzamen medikal la semèn proscièn) - Devo fare una visita medica la prossima settimana.
Le train est parti avec cinq minutes de retard. (le tran é parti avek sank minüt de retar) - Il treno è partito con cinque minuti di ritardo.
J'ai trouvé une place près de la fenêtre. (ʒé truvé ün plas prè de la fenetr) - Ho trovato un posto vicino al finestrino.
Tu peux regarder si ma valise est bien fermée ? (tü pö regardé si ma valiz é bièn fermé) - Puoi controllare se la mia valigia è ben chiusa?
On change de train à la prochaine correspondance. (on sciandʒ de tran a la proscièn korespondans) - Cambiamo treno al prossimo cambio.
La station est fermée à cause de travaux. (la stasiòn é fermé a koz de travay) - La stazione è chiusa a causa di lavori.
J'ai oublié de recharger ma carte de transport. (ʒé oublié de resciarʒé ma kart de transport) - Ho dimenticato di ricaricare la mia tessera dei trasporti.
Le métro était tellement rempli qu'on est restés sur le quai. (le métro etè telman ranpli kon é resté sür le ké) - La metropolitana era così piena che siamo rimasti sul binario.
Le tram s'est arrêté entre deux stations. (le tram sé areté antr dö stasiòn) - Il tram si è fermato tra due stazioni.
J'ai laissé passer le bus parce que je n'étais pas sûr du trajet. (ʒé lesé pasé le büs parskö ʒö netè pa sür dü traʒè) - Ho lasciato passare l'autobus perché non ero sicuro del percorso.
Le chauffeur nous a indiqué où descendre. (le scöför nu a andiké u desandr) - L'autista ci ha indicato dove scendere.
J'ai téléchargé ma carte d'embarquement sur mon téléphone. (ʒé teleciarʒé ma kart danbarkman sür mon telefon) - Ho scaricato la carta d'imbarco sul telefono.
On doit encore passer le contrôle de sécurité. (on dwa ankor pasé le kontrol de sekürité) - Dobbiamo ancora passare i controlli di sicurezza.
Mon vol est affiché sur l'écran numéro six. (mon vol é afiscé sür lékran nümero sis) - Il mio volo è indicato sullo schermo numero sei.
Le bateau a quitté le port à l'heure prévue. (le bato a kite le por a lör prevü) - Il traghetto ha lasciato il porto all'ora prevista.
J'ai réservé une place sur le pont extérieur. (ʒé rezervé ün plas sür le pon ekstériör) - Ho prenotato un posto sul ponte esterno.
Tu dois prendre la rue qui longe le parc. (tü dwa prandr la rü ki lonʒ le park) - Devi prendere la strada che costeggia il parco.
Je pense qu'on est à deux rues d'ici. (ʒö pans kon é a dö rü disi) - Penso che siamo a due strade da qui.
Ma voiture ne démarre pas quand le moteur est froid. (ma vuatür ne demar pa kan le motor é frwa) - La mia macchina non parte quando il motore è freddo.
J'ai entendu un claquement sous la voiture. (ʒé antandü an klakman su la vuatür) - Ho sentito uno schiocco sotto la macchina.
Le garagiste va faire un diagnostic avant de me donner un prix. (le garajist va fer an diagnostik avan de me doné an pri) - Il meccanico farà una diagnosi prima di darmi un prezzo.
Un accident bloque complètement la sortie de l'autoroute. (an aksidan blok kompletman la sorti de lotorut) - Un incidente blocca completamente l'uscita dell'autostrada.
La circulation est revenue à la normale après l'intervention. (la sirkülasiòn é revnü a la normal aprè lantervansiòn) - Il traffico è tornato alla normalità dopo l'intervento.
Le quartier est resté sans eau pendant plusieurs heures. (le kartié é resté san o pandan plüzior ör) - Il quartiere è rimasto senz'acqua per diverse ore.
L'hôtel a accepté de nous changer de chambre sans problème. (lotèl a aksepté de nu sciandʒé de sciambre san problem) - L'hotel ha accettato di cambiarci camera senza problemi.
La climatisation ne fonctionne plus depuis notre arrivée. (la klimatizasiòn ne fonksiòn plü döpüi notr arivé) - L'aria condizionata non funziona più da quando siamo arrivati.
La salle de bains était inondée après la douche. (la sal de ban zetè inonde aprè la dusc) - Il bagno era allagato dopo la doccia.
J'ai demandé à l'hôte s'il y avait un supermarché à proximité. (ʒé demandé a lot sil iavè an süpermarsce a proximite) - Ho chiesto all'host se c'era un supermercato nelle vicinanze.
Le propriétaire nous a envoyé les instructions par e-mail. (le proprietèr nu a anvwaye le zanstrüksiòn par i-mèl) - Il proprietario ci ha mandato le istruzioni via e-mail.
J'ai nettoyé les vitres parce qu'elles étaient pleines de traces. (ʒé netwaye le vitr parskel zetè plen de tras) - Ho pulito i vetri perché erano pieni di impronte.
Tu peux plier les serviettes et les mettre dans l'armoire ? (tü pö pliyé le servièt é le metr dan larmwar) - Puoi piegare gli asciugamani e metterli nell'armadio?
J'ai éteint le chauffage avant d'ouvrir les fenêtres. (ʒé etan le scofaʒ avan duvrir le fenetr) - Ho spento il riscaldamento prima di aprire le finestre.
Il y a une fuite sous l'évier de la cuisine. (il ia ün füit su levié de la küizin) - C'è una perdita sotto il lavello della cucina.
Le chien a encore caché son jouet sous le canapé. (le scièn a ankor kascé son ʒuè su le kanapé) - Il cane ha nascosto di nuovo il suo giocattolo sotto il divano.
Notre chat n'aime pas quand on lui coupe les griffes. (notr scia nèm pa kan on lüi kup le grif) - Al nostro gatto non piace quando gli tagliamo le unghie.
J'ai préparé des œufs brouillés avec du pain grillé. (ʒé preparé de zö brüiyé avek dü pan griyé) - Ho preparato delle uova strapazzate con pane tostato.
Tu as déjà déjeuné ou tu attends les autres ? (tü a deʒa deʒöne u tü atand le zotr) - Hai già pranzato o aspetti gli altri?
Ce soir, je vais faire une soupe avec les légumes qui restent. (se swar, ʒö vé fer ün sup avek le legüm ki rest) - Stasera preparo una zuppa con le verdure rimaste.
Mets un peu moins de sel, c'est déjà assez salé. (mé an pö mwan de sel, sè deʒa ase sale) - Metti un po' meno sale, è già abbastanza salato.
J'ai oublié mon agenda dans mon casier. (ʒé oublié mon aʒanda dan mon kazié) - Ho dimenticato la mia agenda nell'armadietto.
Le professeur sera absent demain, le cours est donc annulé. (le profesör sera apsan döman, le kur é donk anüle) - Domani l'insegnante sarà assente, quindi la lezione è annullata.
J'ai besoin d'un peu de temps pour finir ce devoir. (ʒé bezwan dan pö de tan pur finir se devwar) - Ho bisogno di un po' di tempo per finire questo compito.
On a étudié la Révolution française en histoire cette année. (on a etüdié la revolüsiòn fransèz an istor set ané) - Quest'anno abbiamo studiato la Rivoluzione francese a storia.
Elle a demandé au professeur si elle pouvait refaire l'exercice. (el a demandé o profesör si el puvè refèr legzersis) - Ha chiesto all'insegnante se poteva rifare l'esercizio.
Tu peux me dire à quelle heure tu seras de retour ? (tü pö me dir a kel ör tü sera de retur) - Puoi dirmi a che ora tornerai?
Je veux juste savoir où tu vas, c'est tout. (ʒö vö ʒüst savwar u tü va, sè tu) - Voglio solo sapere dove vai, tutto qui.
Après les devoirs, tu peux regarder un épisode. (aprè le devwar, tü pö regardé an episode) - Dopo i compiti puoi guardare un episodio.
On se lève tôt demain, alors essaie de ne pas te coucher trop tard. (on se lèv to döman, alor esè de ne pa te kucé tro tar) - Domani ci alziamo presto, quindi cerca di non andare a letto troppo tardi.
J'ai les yeux qui piquent depuis ce matin. (ʒé le zö ki pik döpüi se maten) - Mi bruciano gli occhi da stamattina.
Le médecin m'a conseillé de boire davantage. (le medsan ma konsèyé de bwar davantaʒ) - Il medico mi ha consigliato di bere di più.
Je vais à la pharmacie chercher quelque chose pour la toux. (ʒö vé a la farmasi sercè kelkö scos pur la tu) - Vado in farmacia a cercare qualcosa per la tosse.
Cette douleur n'est pas forte, mais elle revient régulièrement. (set dulör né pa fort, mè el revien regülyèrman) - Questo dolore non è forte, ma ritorna regolarmente.
On m'a demandé d'attendre dans la salle d'attente. (on ma demandé datandr dan la sal datandr) - Mi hanno chiesto di aspettare in sala d'attesa.
Le train régional met environ quarante minutes. (le tran reʒional mè anviron karant minüt) - Il treno regionale impiega circa quaranta minuti.
J'ai regardé le tableau pour vérifier le numéro du train. (ʒé regardé le tablo pur verifié le nümero dü tran) - Ho guardato il tabellone per controllare il numero del treno.
On a failli rater notre correspondance. (on a fayi raté notr korespondans) - Stavamo quasi per perdere la coincidenza.
Le wagon est presque vide, on peut s'asseoir ici. (le vagon é presk vid, on pö sasewar isi) - La carrozza è quasi vuota, possiamo sederci qui.
La sortie de la station se trouve de l'autre côté de la rue. (la sorti de la stasiòn se truv de lotr kote de la rü) - L'uscita della stazione si trova dall'altra parte della strada.
J'ai utilisé ma carte bancaire pour acheter le ticket de métro. (ʒé ütilize ma kart bankèr pur asciété le tikè de métro) - Ho usato la carta di credito per comprare il biglietto della metropolitana.
Il faut laisser descendre les gens avant de monter. (il fo lesé desandr le ʒan avan de monte) - Bisogna lasciare scendere le persone prima di salire.
Le tram a été dévié à cause des travaux. (le tram a été devié a koz de travay) - Il tram è stato deviato a causa dei lavori.
J'ai raté mon arrêt parce que je regardais mon téléphone. (ʒé raté mon are parskö ʒö regardè mon telefon) - Ho perso la mia fermata perché guardavo il telefono.
On a enregistré les bagages directement au comptoir. (on a anreʒistré le bagàʒ direktman o komptwar) - Abbiamo registrato i bagagli direttamente al banco.
Il faut enlever la ceinture pour passer le contrôle de sécurité. (il fo anlevé la santür pur pasé le kontrol de sekürité) - Bisogna togliere la cintura per passare i controlli di sicurezza.
Notre avion est déjà affiché, mais la porte n'est pas encore ouverte. (notr aviyon é deʒa afisce, mè la port né pa ankor uvert) - Il nostro aereo è già indicato, ma il gate non è ancora aperto.
J'ai pris un siège côté fenêtre pour profiter de la vue. (ʒé pri an sièʒ kote fenetr pur profite de la vü) - Ho preso un posto vicino al finestrino per godermi il panorama.
Le bateau a été retardé à cause du vent. (le bato a été retarde a koz dü van) - Il traghetto è stato ritardato a causa del vento.
On peut laisser la voiture sur le parking du port. (on pö lesé la vuatür sür le parking dü por) - Possiamo lasciare la macchina nel parcheggio del porto.
Au bout de la rue, tu verras une grande fontaine. (o bu de la rü, tü verra ün gran fontèn) - In fondo alla strada vedrai una grande fontana.
Je crois qu'il faut faire demi-tour ici. (ʒö krwa kil fo fer dömi-tur isi) - Credo che qui dobbiamo fare inversione.
Le voyant de la batterie s'est allumé en pleine route. (le vwayan de la batri sé alumé an plen rut) - La spia della batteria si è accesa durante il viaggio.
J'ai appelé la dépanneuse dès que la voiture s'est arrêtée. (ʒé apel la depanöz dè ke la vuatür sé areté) - Ho chiamato il carro attrezzi appena la macchina si è fermata.
Heureusement, personne n'a été blessé dans l'accident. (örözman, person na été blesé dan laksidan) - Per fortuna, nessuno è rimasto ferito nell'incidente.
Les feux de circulation ne fonctionnent plus à ce carrefour. (le fö de sirkülasiòn ne fonksiòn plü a se karkur) - I semafori non funzionano più a questo incrocio.
Une canalisation a éclaté et toute la rue est sous l'eau. (ün kanalizasiòn a eklaté é tut la rü é su lo) - È esplosa una tubatura e tutta la strada è sott'acqua.
La réception m'a donné une autre clé pour la chambre. (la resepsiòn ma doné ün otr clé pur la sciambre) - La reception mi ha dato un'altra chiave per la camera.
La douche n'a presque pas d'eau chaude ce matin. (la dusc na presk pa do scod se maten) - Stamattina la doccia ha quasi finito l'acqua calda.
On nous a proposé de nous offrir le petit déjeuner à cause du problème. (on nu a propozé de nu zofrir le pəti deʒöné a koz dü problem) - Ci hanno proposto di offrirci la colazione a causa del problema.
J'ai demandé un oreiller supplémentaire pour le lit. (ʒé demandé an oreiyé süplemantèr pur le li) - Ho chiesto un cuscino in più per il letto.
Notre hôte nous a envoyé une vidéo pour expliquer comment entrer dans l'immeuble. (notr ot nu a anvwaye ün video pur eksplike koman antré dan limöbl) - Il nostro host ci ha mandato un video per spiegare come entrare nell'edificio.
J'ai rangé les courses dans les placards dès mon retour. (ʒé ranʒé le kurs dan le plakar dè mon retür) - Ho sistemato la spesa negli armadietti appena sono tornato.
Tu peux passer un coup de balai dans le couloir ? (tü pö pasé an ku de balè dan le kuloir) - Puoi dare una spazzata al corridoio?
J'ai oublié de remettre les piles dans la télécommande. (ʒé oublié de remetr le pil dan la telekomand) - Ho dimenticato di rimettere le pile nel telecomando.
Le lave-vaisselle est encore en marche, attends un peu. (le lav-vèsèl é ankor an marsc, atand an pö) - La lavastoviglie è ancora in funzione, aspetta un po'.
Le chat miaule devant sa gamelle vide. (le scia miol devan sa gamèl vid) - Il gatto miagola davanti alla sua ciotola vuota.
Le chien s'est endormi sous la table après sa promenade. (le scièn sé andormi su la tabl aprè sa promenad) - Il cane si è addormentato sotto il tavolo dopo la passeggiata.
J'ai pris une douche rapide avant le petit déjeuner. (ʒé pri ün dusc rapid avan le pəti deʒöné) - Ho fatto una doccia veloce prima di colazione.
Tu veux des fruits avec ton yaourt ? (tü vö de früi avek ton iaur) - Vuoi della frutta con lo yogurt?
On fera des pâtes ce soir, ça ira plus vite. (on fera de pat se swar, sa ira plü vit) - Stasera faremo la pasta, sarà più veloce.
J'ai mis la table pendant que tu finissais de cuisiner. (ʒé mi la tabl pandan ke tü finisè de küiziné) - Ho apparecchiato mentre finivi di cucinare.
Le professeur a déplacé le contrôle à lundi. (le profesör a deplasé le kontrol a landi) - L'insegnante ha spostato la verifica a lunedì.
J'ai relu mes notes avant de commencer les exercices. (ʒé relü me not avan de komansé lezegzersis) - Ho riletto i miei appunti prima di iniziare gli esercizi.
Elle a beaucoup progressé en anglais cette année. (el a bokou progresé an anglé set ané) - Quest'anno è migliorata molto in inglese.
Le cours de musique finit à dix-sept heures. (le kur de müzik fini a dis-set ör) - La lezione di musica finisce alle diciassette.
J'ai demandé au professeur si le travail était obligatoire. (ʒé demandé o profesör si le travay etè obligatwar) - Ho chiesto all'insegnante se il lavoro era obbligatorio.
Tu n'as pas besoin de rentrer tout de suite après l'école. (tü na pa bezwan de rantré tu de süit aprè lekol) - Non hai bisogno di tornare subito dopo la scuola.
Je t'appelle quand je quitte le travail. (ʒö tapèl kan ʒö kit le travay) - Ti chiamo quando esco dal lavoro.
Pas question de sortir sans me dire où tu vas. (pa kestiòn de sortir san me dir u tü va) - Non se ne parla di uscire senza dirmi dove vai.
Si tu veux inviter quelqu'un, préviens-nous à l'avance. (si tü vö anvité kelkan, previen-nu a lavans) - Se vuoi invitare qualcuno, avvisaci in anticipo.
On garde cette règle, même pendant les vacances. (on gard set regl, mem pandan le vakans) - Questa regola vale anche durante le vacanze.
J'ai pris un rendez-vous pour faire contrôler ma vue. (ʒé pri an randé-vu pur fer kontrolé ma vü) - Ho preso un appuntamento per farmi controllare la vista.
Le pharmacien m'a conseillé de bien lire la notice. (le farmasièn ma konsèyé de bièn lir la notis) - Il farmacista mi ha consigliato di leggere bene il foglietto illustrativo.
J'ai encore mal quand je monte les escaliers. (ʒé ankor mal kan ʒö mont le zekalye) - Ho ancora dolore quando salgo le scale.
Le médecin pense que ce n'est rien de sérieux. (le medsan pans ke se né rièn de seriö) - Il medico pensa che non sia nulla di serio.
Je dois rester à jeun avant l'examen. (ʒö dwa resté a ʒön avan legzamèn) - Devo rimanere a digiuno prima dell'esame.
Le train suivant est supprimé, il faut attendre le prochain. (le tran süivan é süprimé, il fo atandr le proscièn) - Il prossimo treno è stato soppresso, bisogna aspettare quello dopo.
J'ai demandé si ce billet était valable pour toute la journée. (ʒé demandé si se biyè etè valabl pur tut la ʒurné) - Ho chiesto se questo biglietto era valido per tutta la giornata.
On descend à la prochaine station, c'est plus simple. (on desan a la proscièn stasiòn, sè plü sampl) - Scendiamo alla prossima stazione, è più semplice.
Le train est tellement plein qu'on doit rester debout. (le tran é telman plen kon dwa resté debu) - Il treno è così pieno che dobbiamo restare in piedi.
La sortie du métro donne sur une place très animée. (la sorti dü métro don sür ün plas trè anime) - L'uscita della metropolitana dà su una piazza molto animata.
J'ai perdu ma carte de transport quelque part dans la station. (ʒé perdü ma kart de transport kelk par dan la stasiòn) - Ho perso la mia tessera dei trasporti da qualche parte nella stazione.
Le tram est passé juste devant nous sans s'arrêter. (le tram é pase ʒüst devan nu san sarete) - Il tram è passato proprio davanti a noi senza fermarsi.
Tu ferais mieux de prendre le bus, le métro est bloqué. (tü ferè miö de prandr le büs, le métro é bloke) - Faresti meglio a prendere l'autobus, la metropolitana è bloccata.
Le bus est arrivé avec près d'une demi-heure de retard. (le büs é arivé avek prè dün dömi ör de retar) - L'autobus è arrivato con quasi mezz'ora di ritardo.
J'ai fait l'enregistrement sur l'application de la compagnie aérienne. (ʒé fè lanreʒistrman sür laplikasiòn de la kompanyi erien) - Ho fatto il check-in sull'app della compagnia aerea.
On doit peser la valise avant de la déposer. (on dwa peze la valiz avan de la depoze) - Dobbiamo pesare la valigia prima di consegnarla.
J'ai gardé les documents de voyage dans une pochette séparée. (ʒé gardé le doküman de vwayaj dan ün posc separé) - Ho tenuto i documenti di viaggio in una custodia separata.
Le vol est complet, mais ils cherchent encore une solution pour certains passagers. (le vol é komplet, mè il serc ankor ün solüsiòn pur serten pasajé) - Il volo è pieno, ma stanno ancora cercando una soluzione per alcuni passeggeri.
Le ferry est parti avec quelques minutes d'avance. (le feri é parti avek kelk minüt davans) - Il traghetto è partito con qualche minuto di anticipo.
J'ai laissé mon sac dans la voiture avant de monter à bord. (ʒé lesé mon sak dan la vuatür avan de monte a bor) - Ho lasciato la borsa in macchina prima di salire a bordo.
Pour aller au musée, prends cette rue jusqu'au bout. (pur alé o müze, pran set rü ʒüsk o bu) - Per andare al museo, prendi questa strada fino in fondo.
Le centre historique commence juste derrière cette église. (le santr istorik komans ʒüst derrièr set egliz) - Il centro storico inizia proprio dietro questa chiesa.
Je cherche une place où garer la voiture près d'ici. (ʒö scersc ün plas u garé la vuatür prè disi) - Cerco un posto dove parcheggiare la macchina qui vicino.
Le voyant d'huile s'est allumé, je préfère m'arrêter. (le vwayan düil sé alumé, ʒö prefer marete) - Si è accesa la spia dell'olio, preferisco fermarmi.
La batterie est complètement à plat. (la batri é kompletman a pla) - La batteria è completamente scarica.
Le dépanneur a réussi à redémarrer la voiture. (le depanör a reüsi a redemaré la vuatür) - Il soccorso stradale è riuscito a far ripartire la macchina.
Une ambulance essaie de se frayer un passage dans les embouteillages. (ün anbilans esè de se frayé an pasaʒ dan le zanbuteyaj) - Un'ambulanza cerca di farsi strada nel traffico.
Les égouts débordent à cause des pluies torrentielles. (lezego debord a koz de plüi toransiel) - Le sistema fognario straripa a causa delle piogge torrenziali.
La connexion internet de l'hôtel coupe sans arrêt. (la koneksiòn internet de lotèl kup san zarè) - La connessione internet dell'hotel continua a interrompersi.
La serrure de la porte semble complètement bloquée. (la serür de la port sambl kompletman bloke) - La serratura della porta sembra completamente bloccata.
J'ai demandé une chambre plus calme, loin de l'ascenseur. (ʒé demandé ün sciambre plü kalm, lwan de lasansör) - Ho chiesto una camera più tranquilla, lontano dall'ascensore.
L'appartement est agréable, mais la chaudière fait un bruit bizarre. (lapartman é agreabl, mè la scodier fè an brüi bizar) - L'appartamento è piacevole, ma la caldaia fa uno strano rumore.
J'ai nettoyé la table basse pendant que le café coulait. (ʒé netwaye la tabl bos pandan ke le kafé kulè) - Ho pulito il tavolino mentre usciva il caffè.
Tu peux laisser tes chaussures à l'entrée pour ne pas salir le sol. (tü pö lesé te scosür a lantré pur ne pa salìr le sol) - Puoi lasciare le scarpe all'ingresso per non sporcare il pavimento.
J'ai remplacé l'ampoule qui ne fonctionnait plus. (ʒé ranplase lampul ki ne fonksiònè plü) - Ho sostituito la lampadina che non funzionava più.
La machine à laver est pleine, je la lancerai ce soir. (la mascin a lavé é plen, ʒö la lansré se swar) - La lavatrice è piena, la avvierò stasera.
Le chat est sorti par la fenêtre et s'est caché dans le jardin. (le scia é sorti par la fenetr é sé kascé dan le ʒardan) - Il gatto è uscito dalla finestra e si è nascosto in giardino.
Le chien attend devant la porte avec sa laisse. (le scièn atand devan la port avek sa les) - Il cane aspetta davanti alla porta con il guinzaglio.
J'ai mangé une banane parce que je n'avais pas très faim. (ʒé manʒé ün banan parskö ʒö navè pa trè fen) - Ho mangiato una banana perché non avevo molta fame.
Tu peux couper le fromage en petits morceaux ? (tü pö kupe le fromaʒ an pəti morso) - Puoi tagliare il formaggio a pezzetti?
On a décidé de faire du poisson pour le dîner. (on a deside de fer dü pwason pur le diné) - Abbiamo deciso di preparare il pesce per cena.
J'ai laissé les assiettes sur le plan de travail. (ʒé lesé le zasiet sür le plan de travay) - Ho lasciato i piatti sul piano di lavoro.
J'ai oublié mon manuel de sciences à l'école. (ʒé oublié mon manyel de sians a lekol) - Ho dimenticato il mio libro di scienze a scuola.
Le professeur a remarqué que je n'avais pas fait l'exercice. (le profesör a remar ke ʒö navè pa fè legzersis) - L'insegnante si è accorto che non avevo fatto l'esercizio.
J'ai passé une heure à chercher la réponse. (ʒé pase ün ör a serse la repons) - Ho passato un'ora a cercare la risposta.
Elle doit préparer un exposé pour son cours de littérature. (el dwa preparé an ekspoze pur son kur de literatür) - Deve preparare una presentazione per il corso di letteratura.
On a travaillé en groupe pendant toute la matinée. (on a travayé an grup pandan tut la matiné) - Abbiamo lavorato in gruppo per tutta la mattina.
Tu peux me laisser ton téléphone pendant que je prends une photo ? (tü pö me lesé ton telefon pandan ke ʒö pran ün foto) - Puoi lasciarmi il telefono mentre faccio una foto?
Je t'ai déjà expliqué pourquoi ce n'était pas possible. (ʒö té deʒa eksplike purkwa se netè pa posibil) - Ti ho già spiegato perché non era possibile.
Tu rentres directement après l'entraînement, d'accord ? (tü rantr direktman aprè lantrenman, dakor) - Torni direttamente dopo l'allenamento, d'accordo?
J'aimerais que tu préviennes ta mère si tu changes d'avis. (ʒemré ke tü previen ta mer si tü sciandʒ davì) - Vorrei che avvisassi tua madre se cambi idea.
On en reparlera quand tout le monde sera plus calme. (on an reparlera kan tu le mond sera plü kalm) - Ne riparleremo quando saremo tutti più tranquilli.
J'ai pris ma tension parce que je me sentais étourdi. (ʒé pri ma tansiòn parskö ʒö me santè eturdi) - Mi sono misurato la pressione perché mi sentivo stordito.
Le pharmacien m'a proposé un sirop sans sucre. (le farmasièn ma propozé an siro san sükr) - Il farmacista mi ha proposto uno sciroppo senza zucchero.
Je n'ai pas dormi correctement à cause de la douleur. (ʒö né pa dormi korektman a koz de la dulör) - Non ho dormito bene a causa del dolore.
L'infirmier va revenir pour vérifier le pansement. (lanfirmié va revnir pur verifié le pansman) - L'infermiere tornerà per controllare la medicazione.
J'ai apporté tous les documents demandés par l'hôpital. (ʒé aporte tu le doküman demandé par lopital) - Ho portato tutti i documenti richiesti dall'ospedale.
Le train est resté immobilisé pendant quelques minutes. (le tran é resté imobilize pandan kelk minüt) - Il treno è rimasto fermo per alcuni minuti.
J'ai demandé si je pouvais monter avec ce billet. (ʒé demandé si ʒö puvè monte avek se biyè) - Ho chiesto se potevo salire con questo biglietto.
On a changé de quai au dernier moment. (on a sciandʒé de ké o dernie moman) - Abbiamo cambiato binario all'ultimo momento.
Le train est presque arrivé, prépare tes affaires. (le tran é presk arivé, prepar te zafèr) - Il treno è quasi arrivato, prepara le tue cose.
La sortie est au bout du couloir, juste après les escaliers. (la sorti é o bu dü kuloir, ʒüst aprè le zekalye) - L'uscita è in fondo al corridoio, subito dopo le scale.
J'ai utilisé l'escalator parce que l'ascenseur était occupé. (ʒé ütilize leskalator parskö lasansör etè oküpe) - Ho usato la scala mobile perché l'ascensore era occupato.
Le métro est plus rapide ce matin malgré la foule. (le métro é plü rapid se maten malgre la ful) - Stamattina la metropolitana è più veloce nonostante la folla.
Il faut composter le billet avant de monter dans le train. (il fo komposté le biyè avan de monte dan le tran) - Bisogna convalidare il biglietto prima di salire sul treno.
Le bus a changé de terminus à cause des travaux. (le büs a sciandʒé de terminüs a koz de travay) - L'autobus ha cambiato capolinea a causa dei lavori.
J'ai attendu presque vingt minutes sous la pluie. (ʒé atandü presk van minüt su la plüi) - Ho aspettato quasi venti minuti sotto la pioggia.
Le vol est retardé, mais on ne sait pas encore pourquoi. (le vol é retarde, mè on ne sè pa ankor purkwa) - Il volo è in ritardo, ma non sappiamo ancora perché.
J'ai retiré ma veste avant de passer le contrôle. (ʒé retiré ma vest avan de pasé le kontrol) - Mi sono tolto la giacca prima di passare il controllo.
On doit rejoindre la porte d'embarquement avant l'heure indiquée. (on dwa reʒwèndr la port danbarkman avan lör andike) - Dobbiamo raggiungere il gate d'imbarco prima dell'ora indicata.
Notre bagage a été envoyé sur un autre vol. (notr bagàʒ a été anvwaye sür an otr vol) - Il nostro bagaglio è stato inviato su un altro volo.
Le ferry est parti malgré la pluie. (le feri é parti malgre la plüi) - Il traghetto è partito nonostante la pioggia.
J'ai acheté un billet aller-retour au guichet du port. (ʒé asciété an biyè alé-retur o giscè dü por) - Ho comprato un biglietto andata e ritorno alla biglietteria del porto.
Pour rejoindre la place centrale, il faut traverser le pont. (pur reʒwèndr la plas santral, il fo traversé le pon) - Per raggiungere la piazza centrale bisogna attraversare il ponte.
Je crois que la rue est interdite aux voitures. (ʒö krwa ke la rü é interdit o vuatür) - Credo che la strada sia vietata alle auto.
Ma voiture tire légèrement vers la droite quand je freine. (ma vuatür tir leʒèrman ver la drwat kan ʒö fren) - La macchina tira leggermente verso destra quando freno.
J'ai trouvé une fuite de liquide sous le capot. (ʒé truvé ün füit de likid su le kapo) - Ho trovato una perdita di liquido sotto il cofano.
Le dépanneur a changé la roue sur place. (le depanör a sciandʒé la ru sür plas) - Il soccorso stradale ha cambiato la ruota sul posto.
La rue est fermée, il faut passer par l'autre côté. (la rü é fermé, il fo pasé par lotr kote) - La strada è chiusa, bisogna passare dall'altra parte.
Une panne générale a privé plusieurs immeubles d'électricité. (ün pan ʒeneral a privé plüzior zimöbl de lelektrisité) - Un guasto generale ha lasciato diversi edifici senza corrente.
La pression de l'eau est très faible depuis ce matin. (la presiòn de lo é trè febl döpüi se maten) - La pressione dell'acqua è molto bassa da stamattina.
La réception m'a indiqué où trouver une laverie automatique. (la resepsiòn ma andike u truvé ün laveri otomatik) - La reception mi ha indicato dove trovare una lavanderia automatica.
Le petit déjeuner est servi jusqu'à dix heures et demie. (le pəti deʒöné é servi ʒüsk a dis ör é dömi) - La colazione viene servita fino alle dieci e mezza.
J'ai demandé une facture détaillée au moment du départ. (ʒé demandé ün faktür detayé o moman dü depart) - Ho chiesto una fattura dettagliata al momento della partenza.
Notre hôte a accepté qu'on laisse les valises dans l'appartement quelques heures. (notr ot a aksepté kon les le valiz dan lapartman kelk ör) - Il nostro host ha accettato che lasciassimo le valigie nell'appartamento per qualche ora.
J'ai changé les draps avant de refaire le lit. (ʒé sciandʒé le dra avan de refèr le li) - Ho cambiato le lenzuola prima di rifare il letto.
Tu peux fermer les volets avant de partir ? (tü pö fermé le volet avan de partir) - Puoi chiudere le persiane prima di uscire?
J'ai mis les serviettes propres dans la salle de bains. (ʒé mi le servièt propr dan la sal de ban) - Ho messo gli asciugamani puliti in bagno.
Le sèche-linge fait un bruit étrange depuis quelques jours. (le sèsc-lièn fè an brüi etranʒ döpüi kelk ʒur) - L'asciugatrice fa uno strano rumore da qualche giorno.
Le chat s'est installé sur mon fauteuil préféré. (le scia sé anstale sür mon fotöy prefere) - Il gatto si è sistemato sulla mia poltrona preferita.
J'ai rempli la gamelle du chien avant de partir. (ʒé ranpli la gamèl dü scièn avan de partir) - Ho riempito la ciotola del cane prima di uscire.
Je prends juste un café et une tranche de pain. (ʒö pran ʒüst an kafé é ün transc de pan) - Prendo solo un caffè e una fetta di pane.
Les enfants sont déjà à table, tu peux servir. (lezanfan son deʒa a tabl, tü pö servir) - I ragazzi sono già a tavola, puoi servire.
J'ai préparé une salade pour accompagner le poulet. (ʒé preparé ün salad pur akompañé le pulè) - Ho preparato un'insalata per accompagnare il pollo.
On garde le dessert pour après le repas. (on gard le deser pur aprè le repa) - Teniamo il dolce per dopo il pasto.
J'ai reçu les résultats de l'examen par e-mail. (ʒé resü le rezülta de legzamen par i-mèl) - Ho ricevuto i risultati dell'esame via e-mail.
Le professeur nous a donné beaucoup de travail pour demain. (le profesör nu a doné bokou de travay pur döman) - L'insegnante ci ha dato molto lavoro per domani.
Elle préfère travailler seule quand elle doit se concentrer. (el prefer travayé söl kan el dwa se konsantre) - Preferisce lavorare da sola quando deve concentrarsi.
J'ai enfin compris comment résoudre ce problème. (ʒé anfen kompri koman rezudr se problem) - Finalmente ho capito come risolvere questo problema.
On a une heure libre entre les deux cours. (on a ün ör libr antr le dö kur) - Abbiamo un'ora libera tra le due lezioni.
Je ne veux pas que tu rentres seul si tu finis tard. (ʒö ne vö pa ke tü rantr söl si tü fini tar) - Non voglio che tu torni da solo se finisci tardi.
Tu peux inviter tes amis samedi, mais pas trop tard. (tü pö anvité te zami samdi, mè pa tro tar) - Puoi invitare i tuoi amici sabato, ma non troppo tardi.
J'ai besoin que tu me préviennes quand tu arrives. (ʒé bezwan ke tü me previen kan tü ariv) - Ho bisogno che mi avvisi quando arrivi.
On se met d'accord et on n'en parle plus. (on se mè dakor é on nan parl plü) - Ci mettiamo d'accordo e non ne parliamo più.
Je vais prendre quelque chose pour mon mal de gorge. (ʒö vé prandr kelkö scos pur mon mal de gorʒ) - Prendo qualcosa per il mal di gola.
Le médecin m'a demandé depuis combien de temps j'avais ces symptômes. (le medsan ma demandé döpüi kombièn de tan ʒavè se simptom) - Il medico mi ha chiesto da quanto tempo avessi questi sintomi.
J'ai eu des vertiges en me levant trop vite. (ʒé ü de vertiʒ an me levan tro vit) - Ho avuto dei giramenti di testa alzandomi troppo velocemente.
La salle d'attente est juste au bout du couloir. (la sal datandr é ʒüst o bu dü kuloir) - La sala d'attesa è proprio in fondo al corridoio.
L'infirmière m'a demandé si j'étais allergique à quelque chose. (lanfirmièr ma demandé si ʒetè alergik a kelkö scos) - L'infermiera mi ha chiesto se ero allergico a qualcosa.
Le train direct est plus cher, mais il évite une correspondance. (le tran direkt é plü scèr, mè il evit ün korespondans) - Il treno diretto è più caro, ma evita un cambio.
J'ai acheté mon billet sur le site de la compagnie ferroviaire. (ʒé asciété mon biyè sür le sit de la kompanyi ferovièr) - Ho comprato il biglietto sul sito della compagnia ferroviaria.
Le train régional s'arrête dans presque toutes les petites gares. (le tran reʒional saret dan presk tut le pətit gar) - Il treno regionale si ferma in quasi tutte le piccole stazioni.
On a encore dix minutes avant l'arrivée du train. (on a ankor dis minüt avan larivé dü tran) - Abbiamo ancora dieci minuti prima dell'arrivo del treno.
La station de métro est juste derrière le bâtiment. (la stasiòn de métro é ʒüst derrièr le batiman) - La stazione della metropolitana è proprio dietro l'edificio.
J'ai pris la ligne opposée par erreur. (ʒé pri la liñ opozé par erör) - Ho preso la linea nella direzione opposta per errore.
Le métro s'est arrêté quelques instants entre les stations. (le métro sé areté kelk anstan antr le stasiòn) - La metropolitana si è fermata per qualche istante tra le stazioni.
Le bus passe devant l'hôtel toutes les vingt minutes. (le büs pas devan lotèl tut le van minüt) - L'autobus passa davanti all'hotel ogni venti minuti.
J'ai demandé au conducteur de me prévenir à mon arrêt. (ʒé demandé o kondüktör de me prevnir a mon are) - Ho chiesto all'autista di avvisarmi alla mia fermata.
Il n'y avait plus de place assise dans le tram. (il niavè plü de plas asi dan le tram) - Non c'erano più posti a sedere sul tram.
On va descendre deux arrêts plus loin. (on va desandr dö zarè plü lwan) - Scendiamo due fermate più avanti.
J'ai imprimé mes cartes d'embarquement par précaution. (ʒé anprimé me kart danbarkman par presokasiòn) - Ho stampato le carte d'imbarco per precauzione.
La file pour le contrôle des passeports avance assez vite. (la fil pur le kontrol de paspor avan ase vit) - La fila per il controllo dei passaporti scorre abbastanza velocemente.
On a enregistré notre bagage juste après l'ouverture du comptoir. (on a anreʒistré notr bagàʒ ʒüst aprè luvertür dü komptwar) - Abbiamo consegnato il nostro bagaglio subito dopo l'apertura del banco.
Le personnel de bord nous a distribué de l'eau. (le personel de bor nu a distribüé de lo) - Il personale di bordo ci ha distribuito dell'acqua.
La traversée devrait durer environ deux heures. (la traversé dövrè düré anviron dö ör) - La traversata dovrebbe durare circa due ore.
J'ai pris une photo du port avant de monter sur le bateau. (ʒé pri ün foto dü por avan de monte sür le bato) - Ho fatto una foto del porto prima di salire sul traghetto.
Pour rejoindre la gare, traverse le parc et tourne à gauche. (pur reʒwèndr la gar, travers le park é turn a gos) - Per raggiungere la stazione, attraversa il parco e gira a sinistra.
Je me suis trompé de rue, je dois faire demi-tour. (ʒö me trompé de rü, ʒö dwa fer dömi-tur) - Ho sbagliato strada, devo fare inversione.
La voiture fait des vibrations quand je dépasse les quatre-vingts. (la vuatür fè de vibrasiòn kan ʒö depas le katr-van) - La macchina vibra quando supero gli ottanta.
J'ai vérifié la pression des pneus avant le long trajet. (ʒé verifié la presiòn de pnö avan le lon traʒè) - Ho controllato la pressione degli pneumatici prima del lungo viaggio.
Le moteur chauffe beaucoup dans les embouteillages. (le motor scof bokou dan le zanbuteyaj) - Il motore si scalda molto negli ingorghi.
Une voiture a grillé le feu rouge devant nous. (ün vuatür a griyé le fö ruʒ devan nu) - Un'auto è passata con il rosso davanti a noi.
La rue est pleine d'eau après l'orage. (la rü é plen do aprè loraʒ) - La strada è piena d'acqua dopo il temporale.
Il y a eu une coupure de courant pendant presque une heure. (il ia ü ün kupür de kuran pandan presk ün ör) - C'è stato un blackout durato quasi un'ora.
Le personnel de l'hôtel a envoyé quelqu'un vérifier le chauffage. (le personel de lotèl a anvwaye kelkan verifié le scofaʒ) - Il personale dell'hotel ha mandato qualcuno a controllare il riscaldamento.
J'ai demandé si je pouvais avoir une couverture supplémentaire. (ʒé demandé si ʒö puvè avwar ün kuvertür süplemantèr) - Ho chiesto se potevo avere una coperta in più.
Le bruit dans le couloir nous a réveillés plusieurs fois. (le brüi dan le kuloir nu a revèyé plüzior fwa) - Il rumore nel corridoio ci ha svegliati diverse volte.
La propriétaire m'a expliqué comment utiliser le four. (la proprietèr ma eksplike koman ütilizé le fur) - La proprietaria mi ha spiegato come usare il forno.
J'ai nettoyé le miroir de la salle de bains avant de sortir. (ʒé netwaye le mirwar de la sal de ban avan de sortir) - Ho pulito lo specchio del bagno prima di uscire.
Tu peux vérifier si le robinet est bien fermé ? (tü pö verifié si le robinè é bièn fermé) - Puoi controllare se il rubinetto è ben chiuso?
J'ai laissé la fenêtre ouverte pour aérer la chambre. (ʒé lesé la fenetr uvert pur aeré la sciambre) - Ho lasciato la finestra aperta per arieggiare la camera.
La chaudière s'est arrêtée pendant la nuit. (la scodier sé areté pandan la nüi) - La caldaia si è fermata durante la notte.
Le chat a renversé le pot de fleurs sur le balcon. (le scia a ranversé le po de flör sür le balkon) - Il gatto ha rovesciato il vaso di fiori sul balcone.
J'ai acheté une nouvelle laisse pour le chien. (ʒé asciété ün nuvel les pur le scièn) - Ho comprato un nuovo guinzaglio per il cane.
Ce matin, j'ai seulement eu le temps de boire un café. (se maten, ʒé selman ü le tan de bwar an kafé) - Stamattina ho avuto solo il tempo di bere un caffè.
Tu veux des céréales ou des tartines ? (tü vö de seréal u de tartin) - Vuoi dei cereali o delle fette di pane?
J'ai préparé le déjeuner hier soir pour gagner du temps. (ʒé preparé le deʒöné ier swar pur gagné dü tan) - Ho preparato il pranzo ieri sera per guadagnare tempo.
On mangera dehors s'il fait assez chaud. (on manʒra deor sil fè ase sco) - Mangeremo fuori se farà abbastanza caldo.
J'ai oublié de noter la date du prochain contrôle. (ʒé oublié de noté la dat dü proscièn kontrol) - Ho dimenticato di segnare la data della prossima verifica.
Elle révise ses maths avec une amie après les cours. (el reviz se mat avek ün ami aprè le kur) - Ripassa matematica con un'amica dopo le lezioni.
Le professeur nous a demandé de travailler en binômes. (le profesör nu a demandé de travayé an binom) - L'insegnante ci ha chiesto di lavorare a coppie.
Je n'arrive pas à mémoriser toutes ces dates. (ʒö nariv pa a memorize tut se dat) - Non riesco a memorizzare tutte queste date.
Il a obtenu une excellente note en histoire. (il a obtön ün ekselant not an istor) - Ha preso un ottimo voto in storia.
Tu as rangé ta chambre ou tu attends encore ? (tü a ranʒé ta sciambre u tü atand ankor) - Hai riordinato la tua camera o aspetti ancora?
Je préfère que tu me demandes avant de prendre la voiture. (ʒö prefer ke tü me demand avan de prandr la vuatür) - Preferisco che tu me chieda prima di prendere la macchina.
Tu peux rentrer un peu plus tard exceptionnellement. (tü pö rantré an pö plü tar eksepsiònèlman) - Eccezionalmente puoi tornare un po' più tardi.
Je veux que tu me dises la vérité, même si elle ne me plaît pas. (ʒö vö ke tü me diz la verité, mem si el ne me plè pa) - Voglio che tu mi dica la verità, anche se non mi piace.
Après le dîner, on débarrasse tous ensemble. (aprè le diné, on debare tu ansambl) - Dopo cena sparecchiamo tutti insieme.
Le médecin m'a demandé si j'avais pris le médicament. (le medsan ma demandé si ʒavè pri le medikaman) - Il medico mi ha chiesto se avevo preso il farmaco.
J'ai acheté un thermomètre parce que l'ancien ne marchait plus. (ʒé asciété an termometr parskö lansien ne marscè plü) - Ho comprato un termometro perché quello vecchio non funzionava più.
La pharmacienne m'a conseillé de boire beaucoup d'eau. (la farmasièn ma konsèyé de bwar bokou do) - La farmacista mi ha consigliato di bere molta acqua.
Je vais mieux qu'hier, mais je suis encore fatigué. (ʒö vé miö kier, mè ʒö süi ankor fatigué) - Sto meglio di ieri, ma sono ancora stanco.
Il faut attendre les résultats avant de décider quoi faire. (il fo atandr le rezülta avan de deside kwa fer) - Bisogna aspettare i risultati prima di decidere cosa fare.
Le train pour Lyon part dans vingt minutes. (le tran pur Liyon par dan van minüt) - Il treno per Lione parte tra venti minuti.
J'ai demandé une place côté couloir cette fois. (ʒé demandé ün plas kote kuloir set fwa) - Questa volta ho chiesto un posto lato corridoio.
On doit descendre à la gare suivante pour changer de train. (on dwa desandr a la gar süivant pur sciandʒé de tran) - Dobbiamo scendere alla stazione successiva per cambiare treno.
Le quai est bondé, reste près de moi. (le ké é bonde, rest prè de mwa) - Il binario è affollato, resta vicino a me.
La prochaine rame arrive dans moins de trois minutes. (la proscièn ram ariv dan mwan de trwa minüt) - Il prossimo convoglio arriva tra meno di tre minuti.
J'ai rechargé mon abonnement de métro ce matin. (ʒé resciarʒé mon abonman de métro se maten) - Stamattina ho ricaricato il mio abbonamento della metropolitana.
Cette ligne est souvent perturbée aux heures de pointe. (set liñ é suvã pertürbe o zör de pwant) - Questa linea subisce spesso disagi nelle ore di punta.
Le tram est tellement silencieux qu'on l'entend à peine. (le tram é telman silansiö kon lantã a pen) - Il tram è così silenzioso che quasi non lo si sente.
J'ai oublié mon parapluie dans le bus. (ʒé oublié mon paraplüi dan le büs) - Ho dimenticato l'ombrello sull'autobus.
Le chauffeur nous a conseillé de prendre une autre ligne. (le scöför nu a konsèyé de prandr ün otr liñ) - L'autista ci ha consigliato di prendere un'altra linea.
Je préfère arriver tôt à l'aéroport pour éviter le stress. (ʒö prefer arivé to a laeroport pur evité le stres) - Preferisco arrivare presto in aeroporto per evitare lo stress.
J'ai dû sortir mon ordinateur de mon sac au contrôle. (ʒé dü sortir mon ordinatör de mon sak o kontrol) - Ho dovuto tirare fuori il computer dalla borsa ai controlli.
Le vol est annoncé avec trente minutes de retard. (le vol é anonse avek trant minüt de retar) - Il volo è annunciato con trenta minuti di ritardo.
On nous a demandé de rester assis pendant l'atterrissage. (on nu a demandé de resté asi pandan laterisaʒ) - Ci hanno chiesto di rimanere seduti durante l'atterraggio.
La mer est agitée, le bateau risque de bouger beaucoup. (la mer é aʒité, le bato risk de buʒé bokou) - Il mare è agitato, il traghetto rischia di muoversi molto.
J'ai laissé les billets dans la poche extérieure de mon sac. (ʒé lesé le biyè dan la posc ekstériör de mon sak) - Ho lasciato i biglietti nella tasca esterna della mia borsa.
Le port est à environ quinze minutes en voiture. (le por é a anviron kanz minüt an vuatür) - Il porto è a circa quindici minuti in macchina.
Tourne à droite juste après le feu, puis continue tout droit. (turn a drwat ʒüst aprè le fö, pɥi kontinü tu drwa) - Gira a destra subito dopo il semaforo, poi continua dritto.
La rue devient très étroite après le vieux pont. (la rü devien trè etrwat aprè le vö pon) - La strada diventa molto stretta dopo il vecchio ponte.
J'ai garé la voiture dans une rue parallèle. (ʒé garé la vuatür dan ün rü paralèl) - Ho parcheggiato la macchina in una strada parallela.
Le frein fait un bruit quand j'appuie dessus. (le fren fè an brüi kan ʒapüi desü) - Il freno fa un rumore quando lo premo.
J'ai appelé l'assistance parce que le moteur s'est arrêté. (ʒé apel lasistans parskö le motor sé areté) - Ho chiamato il soccorso stradale perché il motore si è fermato.
Un scooter est tombé juste devant ma voiture. (an skuter é tombé ʒüst devan ma vuatür) - Uno scooter è caduto proprio davanti alla mia macchina.
Les travaux ont créé un énorme bouchon dans le quartier. (le travay on kreé an enorm buscon dan le kartié) - I lavori hanno creato un enorme ingorgo nel quartiere.
L'électricité est revenue après quelques minutes. (lelektrisité é revnü aprè kelk minüt) - La corrente è tornata dopo alcuni minuti.
Le plombier passera demain matin pour réparer la fuite. (le plombié pasar döman maten pur reparé la füit) - L'idraulico passerà domani mattina per riparare la perdita.
La chambre donne sur une rue assez calme. (la sciambre don sür ün rü ase kalm) - La camera dà su una strada abbastanza tranquilla.
J'ai signalé le problème à la réception dès mon arrivée. (ʒé siñale le problem a la resepsiòn dè mon arivé) - Ho segnalato il problema alla reception appena sono arrivato.
Notre hôte a laissé quelques produits de base dans la cuisine. (notr ot a lesé kelk prodüi de baz dan la küizin) - Il nostro host ha lasciato alcuni prodotti di base in cucina.
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
