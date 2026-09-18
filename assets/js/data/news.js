/* =========================================================
   GIORNALE DELLA LEGA
   ---------------------------------------------------------
   Ogni articolo è un blocco di questo array: per pubblicarne
   uno nuovo se ne aggiunge uno in cima.

   Campi:
     slug        indirizzo dell'articolo (#/notizie/slug), unico
     titolo      titolo
     occhiello   frase breve sotto il titolo (facoltativa)
     autore      chi scrive
     squadra     id della squadra dell'autore (per lo stemma)
     data        "AAAA-MM-GG"
     categoria   uno degli id in config.js
     tags        parole chiave
     anteprima   1–2 frasi mostrate nelle card
     corpo       array di paragrafi
     copertina   { immagine: "assets/img/news/x.jpg" } o { immagine: null }
     inEvidenza  true = apertura del giornale in homepage
     demo        true = mostra il bollino "esempio"

   I tre pezzi qui sotto sono di servizio: servono a far vedere
   com'è fatta la sezione e vanno sostituiti dai primi articoli veri.
   ========================================================= */
FL.data.news = [
  {
    slug: "finale-supercoppa-fabbro-bacchiega",
    titolo: "Presidente contro vicepresidente: la prima Supercoppa è la finale dei fondatori",
    occhiello: "Domenica, sulla quinta di Serie A, Tune Squad e Tettenham si giocano il primo trofeo della nuova competizione",
    autore: "La Redazione",
    squadra: null,
    data: "2026-09-18",
    categoria: "news",
    tags: ["Supercoppa", "finale", "Tune Squad", "Tettenham", "Fabbro", "Bacchiega"],
    anteprima: "Nove anni di lega, nove stagioni fianco a fianco ai vertici, e mai una finale in comune. Domenica Simone Fabbro e Giovanni Bacchiega si giocano il primo trofeo di una competizione che nell'albo d'oro non esiste ancora.",
    corpo: [
      "Ci sono partite che valgono un trofeo e partite che valgono qualcosa in più. Domenica, sulla quinta giornata di Serie A, la Farmer League assegna per la prima volta nella sua storia la Supercoppa Farmeriana. E il sorteggio, il campo, o forse qualcosa che assomiglia al destino, hanno deciso che a giocarsela siano i due uomini che questa lega l'hanno fondata e la governano da dieci anni: Simone Fabbro, presidente, con il suo Tettenham; Giovanni Bacchiega, vicepresidente, con il suo Tune Squad.",
      "Non è una finale come le altre. È la prima di una competizione nuova, e questo significa una cosa sola: la bacheca è vuota. Nessuno l'ha mai alzata, nessuno può dire di difenderla. Chi vince domenica non aggiunge un titolo al proprio palmarès, ci scrive sopra la prima riga.",
      "DUE UOMINI, DIECI ANNI, ZERO SCUDETTI",
      "C'è un dato che rende questa sfida molto più di una partita fra dirigenti, ed è il più crudele di tutti. In nove stagioni di Farmer League, né Fabbro né Bacchiega hanno mai vinto il campionato. Mai. Il Tune Squad ha collezionato cinque podi, il numero più alto di tutta la lega, e non è mai arrivato primo. Il Tettenham ne ha quattro, e nemmeno lui ha mai chiuso in vetta. Nove piazzamenti d'onore in due, e nessuno scudetto da nessuna delle due parti.",
      "Hanno vinto altro, e parecchio: due Coppe Italia a testa, una Champions League per Bacchiega. Ma il trofeo che conta davvero, quello che ogni anno dà il nome alla stagione, è sempre finito nelle mani di qualcun altro. Sono i due eterni secondi della Farmer League, ed è forse per questo che questa finale brucia più di quanto la parola «Supercoppa» lasci immaginare.",
      "NON SI ERANO MAI INCONTRATI",
      "Il dato che chiude il cerchio: in nove anni di competizioni, fra Coppa Italia e Champions League, Tettenham e Tune Squad non si sono mai trovati di fronte in una finale. Si sono alternati, sfiorati, superati a vicenda in classifica, ma mai incrociati quando il trofeo era lì sul tavolo. La prima volta è adesso, nella prima edizione del torneo più giovane della lega, con in palio un titolo che nessuno ha mai tenuto in mano.",
      "COME CI SONO ARRIVATI",
      "Nessuna delle due strade è stata comoda. In semifinale il Tune Squad ha eliminato l'A.S. Shole, cioè la squadra campione in carica, e lo ha fatto con il margine più sottile possibile: 70.5 fantapunti contro 64.5, un gol di scarto, uno di quei risultati che si decidono su un voto e mezzo in una domenica qualunque. Il Tettenham ha superato l'Atletico Ziopeiro, detentore della Champions League, per 3-2: 78 a 74.5, con i 17.5 fantapunti di Mastantuono a fare da spartiacque.",
      "In altre parole, per arrivare a questa finale hanno dovuto eliminare la squadra che ha vinto tutto l'anno scorso e quella che ha vinto la coppa più prestigiosa. Chi arriva a domenica non ci arriva per caso.",
      "LE SCELTE",
      "Bacchiega si affida al 4-4-2: Corvi fra i pali, una linea difensiva con Joao Mario, Dimarco, Bisseck e Celik, un centrocampo che mette insieme Diouf, Alajbegovic, Barella e Pulisic, e la coppia Ghedjemis-Douvikas davanti. È una squadra costruita per non concedere niente, con la qualità concentrata nella zona centrale del campo e due punte che si dividono il lavoro.",
      "Fabbro risponde con il 3-4-3: Butez in porta, difesa a tre con Ostigard, Scalvini e Obert, in mezzo Mastantuono, Gudmundsson, Taylor e Zaniolo, e un tridente pesante formato da Varela, Kean e De Ketelaere. Una scelta di coraggio che punta tutto sul reparto offensivo, con Kean al centro dell'attacco e Mastantuono libero di inventare alle sue spalle.",
      "Il confronto è dichiarato: quattro contro quattro in mezzo al campo per Bacchiega, tre uomini davanti per Fabbro. Chi difende con più ordine contro chi accetta di scoprirsi per fare un gol in più.",
      "Una nota che dice molto: Esposito, il ragazzo promosso dal vivaio che alla prima giornata è andato in gol, parte dalla panchina. In una finale si va con le certezze, e a certe mosse si pensa dopo, quando il risultato lo chiede.",
      "IL RISPETTO",
      "Sarebbe facile raccontare questa partita come il seguito dell'estate che ha attraversato la lega, con le accuse incrociate dell'asta, il caso Zapata-Elphege e la nota della vicepresidenza che richiamava tutti all'ordine, presidente compreso. Sarebbe facile, e sarebbe sbagliato.",
      "Perché chi conosce i due sa che il rapporto è un'altra cosa. Sono seduti allo stesso tavolo da dieci anni, hanno scritto insieme il regolamento che ora li giudica, hanno tenuto in piedi la competizione quando qualcuno se ne andava e qualcun altro arrivava. Domenica vorranno vincere entrambi, e lo vorranno con una ferocia che chi ha alle spalle nove stagioni senza scudetto può capire fino in fondo. Ma si stringeranno la mano prima e dopo, e nessuno dei due avrà bisogno di spiegarlo.",
      "NOVANTA MINUTI E UNA RIGA BIANCA",
      "Alla fine è tutto qui: due formazioni, undici giocatori ciascuna, una domenica di settembre e una pagina di albo d'oro ancora bianca. Chi vince ci mette il proprio nome per primo, e ce lo lascia per sempre.",
      "Si gioca domenica. Poi, come sempre, parlerà il campo."
    ],
    copertina: { immagine: "assets/img/news/finale-supercoppa.jpg" },
    inEvidenza: true,
    demo: false
  },
  {
    slug: "pagelle-giornata-1",
    titolo: "Mastantuono da 17.5, e il ragazzo del vivaio segna subito",
    occhiello: "I migliori e i peggiori della prima giornata",
    autore: "La Redazione",
    squadra: null,
    data: "2026-09-17",
    categoria: "pagelle",
    tags: ["giornata 1", "pagelle", "giovani"],
    anteprima: "Diciassette gol, tre squadre a punteggio pieno e un solo punteggio sopra quota 80. Chi ha spostato gli equilibri e chi ha affondato la propria squadra.",
    corpo: [
      "La prima giornata ha detto una cosa su tutte: chi aveva costruito bene il centrocampo si è portato a casa il turno. Diciassette gol complessivi, tre squadre a punteggio pieno e distanze minime quasi ovunque, con l\'unico scarto vero nello 0-1 fra Ponferradina e Thorino.",
      "IL MIGLIORE",
      "Mastantuono, 8.5 di voto e 17.5 di fantavoto, è stato il giocatore più decisivo della giornata con un margine enorme su tutti gli altri. Un punteggio così vale da solo mezzo risultato, e infatti il Tettenham ha strappato un 3-3 contro gli 81.5 fantapunti dell\'Isagogici Anemoni, il punteggio di squadra più alto del turno.",
      "IL RAGAZZO",
      "Il dato che fa più rumore, però, è un altro: Esposito F.P. ha chiuso con 7 di voto e 10 di fantavoto, andando in gol. È il giocatore promosso dal vivaio del Tettenham quest\'estate, quello di cui si era parlato come dell\'acquisto a costo zero dell\'asta. Prima giornata, primo timbro. Chi aveva investito sulle giovanili ha avuto la risposta immediata.",
      "GLI ALTRI DA TENERE D\'OCCHIO",
      "Dietro Mastantuono si è messo Coulibaly L. dell\'Isagogici con 13.5, poi Thuram del Thorino a 11, decisivo nell\'unica vittoria di misura del turno. A quota 10.5 Carlos Augusto del Birrareal e Barella del Tune Squad; a 10 Kaiki e Kvernadze della CSM, Pellegrino M. e Malen dell\'Atletico Ziopeiro, Mendy P. del Masterchef United e Ramon del Borussia Pdortmund.",
      "Da segnalare la prova della CSM, che alla prima assoluta in Farmer League ha vinto 3-2 in trasferta con tre giocatori sopra i 9.5: oltre a Kaiki e Kvernadze, anche Ekkelenkamp e Adams A. hanno spinto i 79 fantapunti che sono valsi la testa della classifica.",
      "I PEGGIORI",
      "Serata complicata per i portieri. Martinez Jo. dell\'A.S. Shole ha chiuso a 2, Stankovic F. del Thorino pure a 2 pur vincendo la partita, Maignan dell\'Atletico Ziopeiro a 4.5, Carnesecchi del Birrareal e De Gea della Ponferradina a 4. Ma il conto più salato lo ha pagato Colombo delle Brigate Ebosse: espulso, 2 di fantavoto, e uno 0-0 che pesa.",
      "UNO SGUARDO AVANTI",
      "Il prossimo turno vale doppio: oltre alla seconda giornata di campionato si gioca la finale di Supercoppa Farmeriana, che le semifinali hanno assegnato a Tune Squad e Tettenham."
    ],
    copertina: { immagine: null },
    inEvidenza: false,
    demo: false
  },
  {
    slug: "csm-comunicato-ingresso",
    titolo: "«Non siamo qui per partecipare»: la CSM FC si presenta alla lega",
    occhiello: "Il comunicato d'ingresso della neopromossa, alla decima edizione della Farmer League",
    autore: "Il Presidente, CSM FC",
    squadra: "csm",
    data: "2026-09-08",
    categoria: "comunicati",
    tags: ["CSM FC", "neopromossa", "asta", "Ponferradina"],
    anteprima: "La dodicesima squadra della lega si presenta senza giri di parole: obiettivo titolo al primo anno, e una strategia d'asta costruita apposta per far male alla Ponferradina.",
    corpo: [
      "Il Presidente di CSM FC comunica ufficialmente l'ingresso della società nella Farmer League, in occasione della sua decima edizione.",
      "Essere neopromossi non significa essere inferiori. Significa semplicemente che gli altri hanno avuto il privilegio di giocare prima di noi.",
      "Entriamo in questa competizione con un unico obiettivo: vincere. Non ci interessano piazzamenti dignitosi, salvezze tranquille o partecipazioni di contorno. La CSM FC è stata costruita per competere immediatamente ai massimi livelli e puntiamo al titolo già alla nostra prima esperienza in Farmer League.",
      "Essere presenti alla decima edizione della lega è per me motivo di grande orgoglio. Ma, allo stesso tempo, credo sia arrivato il momento che qualcuno provi a rovinare un po\' la festa a chi è abituato a considerarsi grande.",
      "IL PROGETTO",
      "La nostra rosa nasce da una filosofia estremamente chiara: solidità, qualità e fame. Abbiamo puntato su giocatori ormai consolidati in Serie A, abituati ai grandi palcoscenici e capaci di garantire rendimento e continuità.",
      "A loro abbiamo affiancato giovani promettenti, affamati e ambiziosi, desiderosi di lasciare il proprio segno nella massima competizione italiana. Esperienza e talento, certezze e scommesse: un mix che, secondo noi, può fare molto male. E soprattutto, a differenza di qualcuno, non abbiamo costruito una rosa per arrivare secondi.",
      "LA STRATEGIA D\'ASTA",
      "Durante l\'asta abbiamo adottato una strategia precisa e scientificamente studiata: rialzare i giocatori chiamati dal Presidente della Ponferradina FC. Non è stato un caso, non è stato un incidente, e non era nemmeno una questione di giocatori che ci interessavano particolarmente.",
      "Era semplicemente un messaggio. Volevamo rendere ogni chiamata della Ponferradina più costosa, più complicata e possibilmente più dolorosa. Se poi qualche giocatore è stato pagato più del suo reale valore, pazienza: il nostro budget è un problema nostro, il vostro sarà cercare di batterci.",
      "IL NOME",
      "Qualcuno potrebbe chiedersi da dove derivi il nome della società. CSM nasce dal barrio più pericoloso di Santiago del Cile ed è l\'acronimo di «Concha su Madre». Un nome elegante, raffinato e soprattutto perfettamente rappresentativo dello spirito con cui intendiamo affrontare questa competizione.",
      "Porta con sé la fame di riscatto dei giovani cileni che provano a cambiare la propria vita con il sudore e la forza messi in campo a ogni partita. Non c\'era modo migliore per esprimere la nostra filosofia. E chi non ha capito, probabilmente lo capirà dopo averci incontrato in campo.",
      "UN AVVERTIMENTO, NON UN AUGURIO",
      "Sappiamo che molti ci vedranno come la neopromossa da battere, la nuova arrivata che dovrebbe prima ambientarsi e poi, magari, provare a competere. Noi invece pensiamo che debbano essere gli altri ad ambientarsi alla nostra presenza.",
      "Non siamo venuti in Farmer League per fare numero. Non siamo venuti per imparare. Non siamo venuti per fare esperienza. Siamo venuti per prenderci il titolo.",
      "Agli avversari va comunque il nostro saluto e il nostro più sincero augurio di buona fortuna. Ne avranno bisogno. Ci vediamo in campo e soprattutto ci vediamo in classifica.",
      "Con rispetto per tutti. Paura di nessuno.",
      "Il Presidente, CSM FC"
    ],
    copertina: { immagine: "assets/img/news/csm-comunicato.jpg" },
    inEvidenza: false,
    demo: false
  },
  {
    slug: "giovani-in-prima-squadra",
    titolo: "L'asta dei ragazzi: il vivaio entra in prima squadra",
    occhiello: "Quattro promozioni dalle giovanili: è il segnale che il settore giovanile ha cambiato la lega",
    autore: "La Redazione",
    squadra: null,
    data: "2026-09-08",
    categoria: "giovani",
    tags: ["giovanili", "asta", "vivaio", "mercato"],
    anteprima: "Per la prima volta da quando esistono le giovanili, un'asta si è chiusa con quattro ragazzi promossi in prima squadra. Esposito al Tettenham, Adzic al Borussia Pdortmund, Cissè al Birrareal, Jimenez all'A.S. Shole.",
    corpo: [
      "C'è un dato che, più di ogni colpo da cento crediti, racconta cosa è successo in questa asta: quattro giocatori sono entrati in prima squadra passando dal vivaio. Non era mai accaduto da quando la lega ha introdotto le giovanili, e non è un dettaglio contabile: è un cambio di mentalità.",
      "Il Tettenham ha promosso Francesco Pio Esposito, l'attaccante dell'Inter tenuto in caldo per una stagione intera. Il Borussia Pdortmund ha portato su Adzic, il centrocampista che il Sassuolo ha lanciato tra i grandi. Il Birrareal ha fatto lo stesso con Alphadjo Cissè, arrivato al Milan e ora in rosa a un credito. L'A.S. Shole ha completato il quadro con Alex Jimenez, terzino della Fiorentina, anche lui pagato una miseria.",
      "Il denominatore comune è evidente: tutti e quattro sono entrati in rosa a cifre che all'asta non avrebbero mai potuto spuntare. Chi aveva messo gli occhi su questi profili dodici mesi fa oggi si ritrova un titolare potenziale al prezzo di una riserva, e cento crediti in più da spendere altrove.",
      "È la lezione della sessione appena conclusa. Il vivaio non è più il parcheggio dove si mettono i nomi che non si sanno dove piazzare: è diventato uno strumento di mercato vero e proprio, forse il più efficiente a disposizione dei dodici presidenti. Chi ha saputo guardare avanti di una stagione si presenta al via del campionato con un vantaggio strutturale, non con un colpo di fortuna.",
      "Chi invece è arrivato all'asta senza nulla in cantina ha dovuto comprare tutto al prezzo di mercato. La differenza, in una lega dove il budget è identico per tutti, la si vede eccome. E vale la pena tenerlo a mente da qui alla prossima finestra: i ragazzi che oggi nessuno guarda sono le occasioni dell'asta che verrà."
    ],
    copertina: { immagine: "assets/img/news/giovani-promossi.jpg" },
    inEvidenza: false,
    demo: false
  },
  {
    slug: "caso-elphege-zapata",
    titolo: "Il caso Zapata-Elphege scuote la lega: Fabbro assolto, Del Favero ammonito",
    occhiello: "Cinque giorni di comunicati, accuse e contro-accuse per due rilanci all'asta",
    autore: "La Redazione",
    squadra: null,
    data: "2026-09-08",
    categoria: "polemiche",
    tags: ["asta", "presidenza", "giustizia sportiva", "Tettenham", "Ponferradina"],
    anteprima: "Due rilanci del Tettenham hanno acceso lo scontro più duro degli ultimi anni, arrivando fino alla poltrona del presidente. Il verdetto: nessuna irregolarità, ma un'ammonizione per accuse senza prove.",
    corpo: [
      "Tutto nasce da due rilanci. Nel finale d'asta il Tettenham insiste su Elphege e su Zapata, i due profili con cui la Ponferradina contava di chiudere l'attacco. Il Tettenham porta a casa Zapata per quattro crediti; la Ponferradina resta senza entrambi.",
      "L'accusa di Giovanni Del Favero è netta: una manovra fatta per dispetto, visto che il Tettenham aveva già Pio Esposito nel vivaio e avrebbe potuto promuoverlo a costo zero riempiendo la casella con un giocatore qualunque a un credito. Parole pesanti, fino a definire l'operazione un suicidio economico travestito da prova di forza.",
      "La replica di Simone Fabbro arriva sullo stesso tono: nessun complotto, solo una valutazione tecnica fra due attaccanti, e quattro crediti sono un prezzo accettabile per potersi permettere una scelta. Sui conti del club, disponibilità a mettere in tavola dieci anni di bilanci.",
      "Lo scontro esce però in fretta dal perimetro dell'asta. Del Favero tira in ballo la doppia veste di Fabbro, presidente di lega e di club, riesumando il Coppa Italia Gate e parlando di regolamenti a geometria variabile; il Tettenham risponde ironizzando sui comunicati fiume e sull'alias Mac il Grande. Nel mezzo la nota della vicepresidenza: Bacchiega richiama entrambi, difende la regolarità del voto in assemblea e rispedisce al mittente le accuse di gestione opaca.",
      "Fabbro mette la carica a disposizione con un comunicato in cui rivendica dieci anni di lavoro gratuito e chiude con una frase destinata a restare: la poltrona può essere lasciata, la dignità no.",
      "Il verdetto chiude la vicenda. Nessuna irregolarità nella condotta d'asta del Tettenham: rilanciare su un giocatore che serve a un avversario è mercato, non illecito. Fabbro resta al suo posto. A Giovanni Del Favero va invece un'ammonizione per diffamazione senza prove: le accuse sulla gestione della lega sono state portate senza uno straccio di riscontro.",
      "Resta una lega più nervosa del solito alla vigilia della prima giornata, e la sensazione che si sia consumato in agosto il capitale di veleni di un'intera stagione. Il campionato comincia domenica: da lì in avanti, per fortuna, parla il campo."
    ],
    copertina: { immagine: "assets/img/news/caso-asta.jpg" },
    inEvidenza: false,
    demo: false
  },
  {
    slug: "scambio-sarr-rodriguez",
    titolo: "Sarr alle Brigate, Jesús Rodríguez allo Shole: il primo scambio è servito",
    occhiello: "Operazione lampo a mercato appena chiuso fra A.S. Shole e Brigate Ebosse",
    autore: "La Redazione",
    squadra: null,
    data: "2026-09-08",
    categoria: "mercato",
    tags: ["scambio", "A.S. Shole", "Brigate Ebosse", "centrocampo"],
    anteprima: "Scambio secco e nessun conguaglio: Pepe Matar Sarr passa alle Brigate Ebosse, Jesús Rodríguez fa il percorso inverso e va all'A.S. Shole.",
    corpo: [
      "Il mercato era appena finito e già si riapriva. A.S. Shole e Brigate Ebosse hanno chiuso in poche ore la prima operazione della stagione: Pepe Matar Sarr, centrocampista della Juventus, lascia lo Shole e passa alle Brigate; in direzione opposta si muove Jesús Rodríguez, esterno del Como.",
      "Scambio secco, nessun conguaglio. Entrambe le società sistemano il centrocampo assecondando due idee di gioco diverse, e nessuna delle due ha dovuto toccare il budget.",
      "Le rose sul sito sono già aggiornate. Ora tocca al campo dire chi ha fatto l'affare."
    ],
    copertina: { immagine: "assets/img/news/scambio-sarr-rodriguez.jpg" },
    inEvidenza: false,
    demo: false
  }
];

FL.data.newsOrdinate = function () {
  return FL.data.news.slice().sort(function (a, b) { return b.data.localeCompare(a.data); });
};
FL.data.articolo = function (slug) {
  return FL.data.news.find(function (a) { return a.slug === slug; }) || null;
};
FL.data.categoria = function (id) {
  return FL.config.categorie.find(function (c) { return c.id === id; }) || { id: id, nome: id };
};
