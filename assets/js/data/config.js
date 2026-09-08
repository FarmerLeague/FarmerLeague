/* =========================================================
   CONFIGURAZIONE DELLA LEGA
   Primo file da modificare: identità, stagione, regole,
   zone della classifica, categorie del giornale.
   ========================================================= */
window.FL = window.FL || {};
FL.data = FL.data || {};

FL.config = {
  lega: {
    nome: "Farmer League",
    nomeBreve: "FL",
    sottotitolo: "Campionato privato di fantacalcio",
    motto: "Dodici squadre, trentacinque giornate, una coppa sola.",
    fondazione: 2017,
    sede: "Via C. Porta 6, Varese",
    link: "https://leghe.fantacalcio.it/pistolonacci"
  },

  /* Organigramma della lega, mostrato nell'albo d'oro e nel footer */
  organigramma: {
    presidente: "Simone Fabbro",
    vicepresidente: "Giovanni Bacchiega",
    tesoriere: "Simone Fabbro",
    fondatori: ["Simone Fabbro", "Giovanni Bacchiega", "Giacomo Gianesini", "Emmanuele Pace"]
  },

  stagione: {
    etichetta: "2026/27",
    giornateTotali: 35,               // dal calendario ufficiale della lega
    primaGiornataSerieA: 4,           // la lega parte dalla 4ª di Serie A
    /* Date delle giornate di Serie A: la giornata di lega N si
       gioca sulla giornata N+3 di Serie A, quindi le date del
       calendario vengono da qui. Se una giornata viene spostata
       basta cambiare la data corrispondente. */
    dateSerieA: {
      4: "13/09/2026",
      5: "20/09/2026",
      6: "11/10/2026",
      7: "18/10/2026",
      8: "25/10/2026",
      9: "28/10/2026",
      10: "01/11/2026",
      11: "08/11/2026",
      12: "22/11/2026",
      13: "29/11/2026",
      14: "06/12/2026",
      15: "13/12/2026",
      16: "20/12/2026",
      17: "03/01/2027",
      18: "06/01/2027",
      19: "10/01/2027",
      20: "17/01/2027",
      21: "24/01/2027",
      22: "31/01/2027",
      23: "07/02/2027",
      24: "14/02/2027",
      25: "21/02/2027",
      26: "28/02/2027",
      27: "07/03/2027",
      28: "14/03/2027",
      29: "21/03/2027",
      30: "04/04/2027",
      31: "11/04/2027",
      32: "18/04/2027",
      33: "25/04/2027",
      34: "02/05/2027",
      35: "09/05/2027",
      36: "16/05/2027",
      37: "23/05/2027",
      38: "30/05/2027"
    },
    /* Partita messa in vetrina prima dell'esordio [casa, ospite] */
    sfidaInEvidenza: ["tettenham", "isagogici"]
  },

  punteggio: {
    vittoria: 3,
    pareggio: 1,
    sconfitta: 0,
    sogliaPrimoGol: 66,               // fantapunti per il primo gol
    passoGol: 6                       // fantapunti per ogni gol successivo
  },

  /* Zone della classifica: da adattare al regolamento della lega */
  zone: [
    { da: 1, a: 1,   id: "titolo",        etichetta: "Vincitore della lega", colore: "var(--oro)" },
    { da: 2, a: 4,   id: "playoff",       etichetta: "Zona playoff",         colore: "var(--ciano)" },
    { da: 11, a: 12, id: "retrocessione", etichetta: "Zona bassa classifica", colore: "var(--rosso)" }
  ],

  categorie: [
    { id: "news",       nome: "News" },
    { id: "mercato",    nome: "Mercato" },
    { id: "pagelle",    nome: "Pagelle" },
    { id: "interviste", nome: "Interviste" },
    { id: "comunicati", nome: "Comunicati" },
    { id: "polemiche",  nome: "Polemiche" },
    { id: "curiosita",  nome: "Curiosità" },
    { id: "giovani",    nome: "Giovani" },
    { id: "varie",      nome: "Varie" }
  ],

  ui: {
    /* Bollini "demo" e riquadri gialli sui contenuti ancora provvisori.
       Metti false quando i dati saranno tutti reali. */
    mostraBadgeDemo: true,
    notaDati: "Mancano ancora le date delle giornate e le rose delle giovanili."
  }
};
