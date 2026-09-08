/* =========================================================
   CALENDARIO — dati reali (Farmer League)
   ---------------------------------------------------------
   35 giornate di lega, agganciate alle giornate di Serie A
   dalla 4ª alla 38ª (campo `serieA`).

   PER INSERIRE UN RISULTATO basta compilare la partita:
       { casa: "tettenham", ospite: "isagogici",
         fantaCasa: 72.5, fantaOspite: 66.0,
         golCasa: 2, golOspite: 1, giocata: true, nota: "" }

   Se metti solo i fantapunti e `giocata: true`, i gol vengono
   calcolati da soli con le regole in config.js.
   Il campo `data` accetta una stringa tipo "20/09/2026".
   ========================================================= */
FL.data.fixtures = [
  {
    numero: 1, serieA: 4, data: null,
    partite: [
      { casa: "tettenham", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ponferradina", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "brigate", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "birrareal", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 2, serieA: 5, data: null,
    partite: [
      { casa: "csm", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "pdortmund", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "isagogici", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 3, serieA: 6, data: null,
    partite: [
      { casa: "ponferradina", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "brigate", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "birrareal", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 4, serieA: 7, data: null,
    partite: [
      { casa: "csm", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tettenham", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "pdortmund", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "isagogici", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 5, serieA: 8, data: null,
    partite: [
      { casa: "pdortmund", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "brigate", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "birrareal", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 6, serieA: 9, data: null,
    partite: [
      { casa: "csm", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tettenham", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ponferradina", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "isagogici", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 7, serieA: 10, data: null,
    partite: [
      { casa: "pdortmund", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "birrareal", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 8, serieA: 11, data: null,
    partite: [
      { casa: "csm", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tettenham", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ponferradina", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "brigate", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "isagogici", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 9, serieA: 12, data: null,
    partite: [
      { casa: "pdortmund", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 10, serieA: 13, data: null,
    partite: [
      { casa: "tettenham", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ponferradina", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "brigate", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "isagogici", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "birrareal", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 11, serieA: 14, data: null,
    partite: [
      { casa: "csm", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "pdortmund", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 12, serieA: 15, data: null,
    partite: [
      { casa: "isagogici", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "csm", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "pdortmund", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 13, serieA: 16, data: null,
    partite: [
      { casa: "tettenham", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "birrareal", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "brigate", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ponferradina", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 14, serieA: 17, data: null,
    partite: [
      { casa: "tettenham", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "pdortmund", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "isagogici", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "csm", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 15, serieA: 18, data: null,
    partite: [
      { casa: "ponferradina", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "brigate", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "birrareal", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 16, serieA: 19, data: null,
    partite: [
      { casa: "csm", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "isagogici", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ponferradina", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tettenham", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 17, serieA: 20, data: null,
    partite: [
      { casa: "brigate", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "birrareal", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "pdortmund", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 18, serieA: 21, data: null,
    partite: [
      { casa: "thorino", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ponferradina", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "csm", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tettenham", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "brigate", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "isagogici", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 19, serieA: 22, data: null,
    partite: [
      { casa: "birrareal", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "pdortmund", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 20, serieA: 23, data: null,
    partite: [
      { casa: "tettenham", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "birrareal", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "isagogici", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "csm", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "brigate", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ponferradina", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 21, serieA: 24, data: null,
    partite: [
      { casa: "shole", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "pdortmund", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "csm", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 22, serieA: 25, data: null,
    partite: [
      { casa: "isagogici", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "brigate", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ponferradina", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tettenham", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "birrareal", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 23, serieA: 26, data: null,
    partite: [
      { casa: "tettenham", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ponferradina", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "brigate", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "birrareal", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 24, serieA: 27, data: null,
    partite: [
      { casa: "csm", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "pdortmund", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "isagogici", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 25, serieA: 28, data: null,
    partite: [
      { casa: "ponferradina", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "brigate", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "birrareal", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 26, serieA: 29, data: null,
    partite: [
      { casa: "csm", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tettenham", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "pdortmund", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "isagogici", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 27, serieA: 30, data: null,
    partite: [
      { casa: "pdortmund", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "brigate", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "birrareal", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 28, serieA: 31, data: null,
    partite: [
      { casa: "csm", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tettenham", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ponferradina", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "isagogici", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 29, serieA: 32, data: null,
    partite: [
      { casa: "pdortmund", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "birrareal", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 30, serieA: 33, data: null,
    partite: [
      { casa: "csm", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tettenham", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ponferradina", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "brigate", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "isagogici", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 31, serieA: 34, data: null,
    partite: [
      { casa: "pdortmund", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 32, serieA: 35, data: null,
    partite: [
      { casa: "tettenham", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ponferradina", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "brigate", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "isagogici", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "birrareal", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 33, serieA: 36, data: null,
    partite: [
      { casa: "csm", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "pdortmund", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 34, serieA: 37, data: null,
    partite: [
      { casa: "isagogici", ospite: "tettenham", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "thorino", ospite: "ponferradina", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "masterchef", ospite: "tunesquad", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "csm", ospite: "ziopeiro", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "shole", ospite: "brigate", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "pdortmund", ospite: "birrareal", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  },
  {
    numero: 35, serieA: 38, data: null,
    partite: [
      { casa: "tettenham", ospite: "csm", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "tunesquad", ospite: "pdortmund", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "birrareal", ospite: "shole", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "brigate", ospite: "thorino", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ponferradina", ospite: "isagogici", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" },
      { casa: "ziopeiro", ospite: "masterchef", golCasa: null, golOspite: null, fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }
    ]
  }];

(function () {
  /* Fantapunti -> gol, secondo le regole di config.js */
  FL.fantaToGol = function (fanta) {
    var s = FL.config.punteggio.sogliaPrimoGol, p = FL.config.punteggio.passoGol;
    if (fanta === null || fanta === undefined || fanta < s) return 0;
    return 1 + Math.floor((fanta - s) / p);
  };

  /* Assegna a ogni giornata la data della corrispondente
     giornata di Serie A, se non è già scritta a mano. */
  FL.data.fixtures.forEach(function (g) {
    if (!g.data && g.serieA) g.data = FL.config.stagione.dateSerieA[g.serieA] || null;
  });

  /* Completa i gol mancanti quando ci sono i fantapunti */
  FL.data.fixtures.forEach(function (g) {
    g.partite.forEach(function (m) {
      if (!m.giocata) return;
      if (m.golCasa === null && m.fantaCasa !== null) m.golCasa = FL.fantaToGol(m.fantaCasa);
      if (m.golOspite === null && m.fantaOspite !== null) m.golOspite = FL.fantaToGol(m.fantaOspite);
    });
  });

  FL.data.giornata = function (n) {
    return FL.data.fixtures.find(function (g) { return g.numero === n; }) || null;
  };
  FL.data.giornateGiocate = function () {
    return FL.data.fixtures.filter(function (g) {
      return g.partite.some(function (p) { return p.giocata; });
    });
  };
  FL.data.ultimaGiornata = function () {
    var g = FL.data.giornateGiocate();
    return g[g.length - 1] || null;
  };
  FL.data.prossimaGiornata = function () {
    return FL.data.fixtures.find(function (g) {
      return g.partite.every(function (p) { return !p.giocata; });
    }) || null;
  };
  FL.data.campionatoIniziato = function () { return FL.data.giornateGiocate().length > 0; };

  /* Giorni che mancano alla prossima giornata (null se non calcolabile) */
  FL.data.giorniAllaGiornata = function (g) {
    if (!g || !g.data) return null;
    var p = g.data.split("/");
    var quando = new Date(+p[2], +p[1] - 1, +p[0]);
    var oggi = new Date();
    oggi.setHours(0, 0, 0, 0);
    return Math.round((quando - oggi) / 86400000);
  };

  /* La sfida della settimana: prima dell'esordio è la partita
     scelta in config.js, poi lo scontro fra le due squadre
     meglio piazzate della prossima giornata. */
  FL.data.sfidaDellaSettimana = function () {
    var g = FL.data.prossimaGiornata();
    if (!g) return null;
    var scelta = FL.config.stagione.sfidaInEvidenza;
    if (!FL.data.campionatoIniziato() && scelta) {
      var fissa = g.partite.find(function (p) {
        return p.casa === scelta[0] && p.ospite === scelta[1];
      });
      if (fissa) return { giornata: g, partita: fissa };
    }
    var ordine = FL.data.classifica().map(function (r) { return r.teamId; });
    var migliore = null, punteggio = 1e9;
    g.partite.forEach(function (p) {
      var v = ordine.indexOf(p.casa) + ordine.indexOf(p.ospite);
      if (v < punteggio) { punteggio = v; migliore = p; }
    });
    return migliore ? { giornata: g, partita: migliore } : null;
  };
})();
