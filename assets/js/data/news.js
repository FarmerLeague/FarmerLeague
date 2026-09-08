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
    inEvidenza: true,
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
