/* =========================================================
   LE ALTRE COMPETIZIONI
   ---------------------------------------------------------
   Coppa Italia, Champions League e Supercoppa Farmeriana.

   IMPORTANTE: non serve inserire risultati qui dentro. In ogni
   giornata di Serie A una squadra fa un solo punteggio fanta,
   che vale per tutte le competizioni: i risultati delle coppe
   vengono calcolati dai fantapunti del campionato (fixtures.js)
   usando il campo `serieA` di ogni turno.

   Qui si descrivono solo formula, partecipanti e accoppiamenti.
   ========================================================= */
FL.data.competizioni = [

  /* ---------------------------------------------------------
     COPPA ITALIA — formato Formula 1
     Ogni giornata le squadre vengono ordinate per fantapunti e
     ricevono i punti previsti per la posizione.
     --------------------------------------------------------- */
  {
    id: "coppa-italia",
    nome: "Coppa Italia",
    tipo: "formula1",
    colore: "var(--ciano)",
    sottotitolo: "Una classifica a punti, come in Formula 1",
    descrizione: "Ogni giornata le dodici squadre vengono ordinate per punteggio fanta e ricevono i punti previsti per la posizione. Non ci sono incontri diretti e quindi non ci sono gol: vince chi accumula più punti.",
    scheda: [
      ["Partecipanti", "12 squadre"],
      ["Durata", "17 giornate · dalla 5ª alla 37ª di Serie A"],
      ["Punteggi", "25 · 18 · 12 · 10 · 8 · 6 · 4 · 3 · 2 · 1"]
    ],
    punti: [25, 18, 12, 10, 8, 6, 4, 3, 2, 1],
    /* Giornate di Serie A valide per la coppa, dal calendario
       ufficiale della lega: la 1ª di coppa è la 5ª di Serie A,
       poi una ogni due fino alla 37ª. */
    giornateSerieA: [5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
    squadre: null            // null = tutte le squadre iscritte
  },

  /* ---------------------------------------------------------
     CHAMPIONS LEAGUE — due gironi da quattro, poi fase finale
     --------------------------------------------------------- */
  {
    id: "champions",
    nome: "Champions League",
    tipo: "gironi",
    colore: "var(--rosa)",
    sottotitolo: "Le migliori della scorsa stagione",
    descrizione: "Si qualificano le prime otto della stagione precedente. Due gironi da quattro con andata e ritorno, poi le prime due di ogni girone vanno in semifinale (andata e ritorno) e la finale è in gara secca.",
    scheda: [
      ["Partecipanti", "8 squadre"],
      ["Fase a gironi", "6 giornate · dalla 10ª alla 24ª di Serie A"],
      ["Punti", "Vittoria 3 · Pareggio 1 · Sconfitta 0"],
      ["Criteri", "punti · fantapunti totali · gol fatti · differenza reti"],
      ["Fase finale", "Semifinali 28ª e 30ª · finale 32ª di Serie A"],
      ["Fattore campo", "Nessuno"]
    ],
    nota: "Quest'anno si è qualificata anche la nona classificata, per la rinuncia di una squadra.",
    gironi: {
      A: ["pdortmund", "shole", "masterchef", "isagogici"],
      B: ["ponferradina", "tunesquad", "ziopeiro", "tettenham"]
    },
    giornate: [
      { numero: 1, serieA: 10, partite: [
        { girone: "A", casa: "pdortmund", ospite: "shole" },
        { girone: "A", casa: "masterchef", ospite: "isagogici" },
        { girone: "B", casa: "ponferradina", ospite: "tunesquad" },
        { girone: "B", casa: "tettenham", ospite: "ziopeiro" }
      ]},
      { numero: 2, serieA: 13, partite: [
        { girone: "A", casa: "isagogici", ospite: "pdortmund" },
        { girone: "A", casa: "shole", ospite: "masterchef" },
        { girone: "B", casa: "ziopeiro", ospite: "ponferradina" },
        { girone: "B", casa: "tunesquad", ospite: "tettenham" }
      ]},
      { numero: 3, serieA: 16, partite: [
        { girone: "A", casa: "isagogici", ospite: "shole" },
        { girone: "A", casa: "masterchef", ospite: "pdortmund" },
        { girone: "B", casa: "ziopeiro", ospite: "tunesquad" },
        { girone: "B", casa: "tettenham", ospite: "ponferradina" }
      ]},
      { numero: 4, serieA: 19, partite: [
        { girone: "A", casa: "shole", ospite: "pdortmund" },
        { girone: "A", casa: "isagogici", ospite: "masterchef" },
        { girone: "B", casa: "tunesquad", ospite: "ponferradina" },
        { girone: "B", casa: "ziopeiro", ospite: "tettenham" }
      ]},
      { numero: 5, serieA: 21, partite: [
        { girone: "A", casa: "pdortmund", ospite: "isagogici" },
        { girone: "A", casa: "masterchef", ospite: "shole" },
        { girone: "B", casa: "ponferradina", ospite: "ziopeiro" },
        { girone: "B", casa: "tettenham", ospite: "tunesquad" }
      ]},
      { numero: 6, serieA: 24, partite: [
        { girone: "A", casa: "shole", ospite: "isagogici" },
        { girone: "A", casa: "pdortmund", ospite: "masterchef" },
        { girone: "B", casa: "tunesquad", ospite: "ziopeiro" },
        { girone: "B", casa: "ponferradina", ospite: "tettenham" }
      ]}
    ],
    /* Fase finale: gli accoppiamenti si compilano quando i gironi
       sono chiusi. Lasciando le squadre a null, il sito mostra
       "da definire" e spiega chi si qualifica. */
    fasiFinali: [
      { nome: "Semifinali", andataRitorno: true, serieA: [28, 30], partite: [
        { casa: null, ospite: null, etichetta: "1ª girone A · 2ª girone B" },
        { casa: null, ospite: null, etichetta: "1ª girone B · 2ª girone A" }
      ]},
      { nome: "Finale", andataRitorno: false, serieA: [32], partite: [
        { casa: null, ospite: null, etichetta: "Vincente semifinale 1 · Vincente semifinale 2" }
      ]}
    ]
  },

  /* ---------------------------------------------------------
     SUPERCOPPA FARMERIANA — prima edizione
     --------------------------------------------------------- */
  {
    id: "supercoppa",
    nome: "Supercoppa Farmeriana",
    tipo: "eliminazione",
    colore: "var(--oro)",
    sottotitolo: "Prima edizione",
    descrizione: "Si qualificano prima e seconda del campionato, la vincitrice della Champions League e quella della Coppa Italia. Se una squadra si qualifica per più titoli, subentra la terza classificata del campionato e poi la quarta. Semifinali e finale in gara secca.",
    scheda: [
      ["Partecipanti", "4 squadre"],
      ["Turni", "Semifinali · Finale"],
      ["Durata", "2 giornate · dalla 4ª alla 5ª di Serie A"],
      ["Struttura", "Gara secca"],
      ["Fattore campo", "Nessuno"]
    ],
    nota: "Nella stagione 2025/26 l'A.S. Shole ha vinto campionato e Coppa Italia: al suo posto si è qualificata anche la terza classificata.",
    qualificate: [
      { teamId: "shole", titolo: "Campione 2025/26 e vincitrice della Coppa Italia" },
      { teamId: "tettenham", titolo: "Seconda in campionato" },
      { teamId: "ziopeiro", titolo: "Vincitrice della Champions League" },
      { teamId: "tunesquad", titolo: "Terza in campionato" }
    ],
    fasiFinali: [
      { nome: "Semifinali", andataRitorno: false, serieA: [4], partite: [
        { casa: "tunesquad", ospite: "shole" },
        { casa: "tettenham", ospite: "ziopeiro" }
      ]},
      { nome: "Finale", andataRitorno: false, serieA: [5], partite: [
        { casa: null, ospite: null, etichetta: "Vincente semifinale 1 · Vincente semifinale 2" }
      ]}
    ]
  }
];

FL.data.competizione = function (id) {
  return FL.data.competizioni.find(function (c) { return c.id === id; }) || null;
};
