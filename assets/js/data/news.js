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
    slug: "si-parte",
    titolo: "Farmer League al via: dodici squadre, trentacinque giornate",
    occhiello: "Rose chiuse, calendario fatto",
    autore: "La Redazione",
    squadra: "birrareal",
    data: "2026-09-07",
    categoria: "news",
    tags: ["esordio", "calendario", "stagione"],
    anteprima: "Il campionato parte dalla quarta di Serie A e finisce alla trentottesima. Ecco cosa c'è da sapere prima del fischio d'inizio.",
    corpo: [
      "Articolo di servizio, da sostituire con il primo pezzo vero della stagione.",
      "La lega mette in campo dodici squadre per trentacinque giornate, agganciate al calendario di Serie A dalla quarta alla trentottesima. Ogni giornata sono sei partite.",
      "In classifica si contano tre punti per la vittoria e uno per il pareggio, con i gol calcolati dai fantapunti: il primo a quota 66, poi uno ogni sei.",
      "Da qui in avanti questa pagina diventa il posto dove finiscono cronache, pagelle e polemiche della lega. Chi vuole scrivere manda il pezzo e finisce in prima pagina."
    ],
    copertina: { immagine: null },
    inEvidenza: true,
    demo: true
  },
  {
    slug: "asta-numeri",
    titolo: "I conti dell'asta: chi ha svuotato il portafoglio e chi no",
    occhiello: "Cinquecento crediti a testa, spesi in modi molto diversi",
    autore: "La Redazione",
    squadra: "csm",
    data: "2026-09-06",
    categoria: "mercato",
    tags: ["asta", "crediti", "rose"],
    anteprima: "Trecento giocatori tesserati e un solo colpo da oltre duecento crediti: il riepilogo di come si sono costruite le dodici rose.",
    corpo: [
      "Articolo di servizio: i numeri sono veri e vengono dal file dell'asta, il commento è tutto da scrivere.",
      "Nella sezione Rose ogni squadra mostra i propri acquisti ordinati per prezzo, così è facile vedere dove sono finiti i crediti.",
      "Manca ancora l'anagrafica dei giocatori: appena arriva, ai prezzi si affiancano nomi, ruoli e squadre di Serie A."
    ],
    copertina: { immagine: null },
    inEvidenza: false,
    demo: true
  },
  {
    slug: "come-scrivere",
    titolo: "Come si pubblica un articolo sul giornale della lega",
    occhiello: "Istruzioni per la redazione",
    autore: "La Redazione",
    squadra: "tettenham",
    data: "2026-09-05",
    categoria: "comunicati",
    tags: ["redazione", "istruzioni"],
    anteprima: "Titolo, autore, categoria e testo: per ora si aggiunge un blocco al file delle notizie, più avanti basterà un modulo online.",
    corpo: [
      "Ogni pezzo ha titolo, autore, squadra, data, categoria e testo diviso in paragrafi. Le categorie disponibili sono News, Mercato, Pagelle, Interviste, Comunicati, Polemiche, Curiosità, Giovani e Varie.",
      "La copertina è facoltativa: senza immagine viene disegnata in automatico con il colore della categoria.",
      "La struttura è già quella che servirà quando la redazione diventerà aperta a tutti: chi scriverà da modulo produrrà esattamente gli stessi campi."
    ],
    copertina: { immagine: null },
    inEvidenza: false,
    demo: true
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
