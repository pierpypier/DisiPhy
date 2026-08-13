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
