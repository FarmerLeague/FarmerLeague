/* =========================================================
   ALBO D'ORO — storia della lega
   ---------------------------------------------------------
   Una voce per stagione, dalla più recente. Per ognuna:
     campione / secondo / terzo   podio del campionato
     coppa      { vincitore, finalista }  o null
     champions  { vincitore, finalista }  o null
     classifica ordine completo con punti e fantapunti
     giornate   giornate giocate quella stagione

   I nomi sono quelli usati in quella stagione (PSG, Sbrighton,
   Struzzi Inverecondi…), mentre `teamId` punta alla squadra di
   oggi: così lo stemma è sempre giusto e il palmarès si somma
   correttamente anche dopo i cambi di nome.

   Per aggiungere la stagione in corso, a fine anno, basta
   copiare un blocco e cambiare i dati.
   ========================================================= */
FL.data.honours = [
  {
    stagione: "2025/26", anno: 2026, giornate: 36,
    campione: { teamId: "shole", nome: "AS Shole", owner: "Del Favero Giu.", punti: 70, fantapunti: 2574 },
    secondo: { teamId: "tettenham", nome: "Tettenham", owner: "Fabbro S.", punti: 62, fantapunti: 2562.5 },
    terzo: { teamId: "tunesquad", nome: "TuneSquad", owner: "Bacchiega G.", punti: 58, fantapunti: 2556.5 },
    coppa: { vincitore: { teamId: "shole", nome: "AS Shole" }, finalista: { teamId: "tunesquad", nome: "TuneSquad" } },
    champions: { vincitore: { teamId: "ziopeiro", nome: "Atletico Ziopeiro" }, finalista: { teamId: "tunesquad", nome: "TuneSquad" } },
    classifica: [
      { pos: 1, teamId: "shole", nome: "AS Shole", owner: "Del Favero Giu.", punti: 70, fantapunti: 2574 },
      { pos: 2, teamId: "tettenham", nome: "Tettenham", owner: "Fabbro S.", punti: 62, fantapunti: 2562.5 },
      { pos: 3, teamId: "tunesquad", nome: "TuneSquad", owner: "Bacchiega G.", punti: 58, fantapunti: 2556.5 },
      { pos: 4, teamId: "foche", nome: "Le foche volanti", owner: "Brusa D.", punti: 57, fantapunti: 2551.5 },
      { pos: 5, teamId: "pdortmund", nome: "Borussia Pdortmund", owner: "Nocera M.", punti: 50, fantapunti: 2504.5 },
      { pos: 6, teamId: "isagogici", nome: "Isagogici Anemoni", owner: "Gianesini G.", punti: 50, fantapunti: 2491.5 },
      { pos: 7, teamId: "ponferradina", nome: "Ponferradina fc", owner: "Del Favero Gio.", punti: 49, fantapunti: 2488.5 },
      { pos: 8, teamId: "ziopeiro", nome: "Atletico Ziopeiro", owner: "Pace E.", punti: 43, fantapunti: 2492 },
      { pos: 9, teamId: "masterchef", nome: "Masterchef united", owner: "Bai A.", punti: 42, fantapunti: 2489.5 },
      { pos: 10, teamId: "thorino", nome: "THORINO", owner: "Piermartini G.", punti: 40, fantapunti: 2499.5 },
      { pos: 11, teamId: "brigate", nome: "Brigate Ebosse", owner: "Lacchin P.", punti: 38, fantapunti: 2483.5 },
      { pos: 12, teamId: "birrareal", nome: "Birrareal", owner: "Roi L.", punti: 37, fantapunti: 2334 }
    ]
  },
  {
    stagione: "2024/25", anno: 2025, giornate: 35,
    campione: { teamId: "pdortmund", nome: "Borussia Pdortmund", owner: "Nocera M.", punti: 61, fantapunti: 2501 },
    secondo: { teamId: "birrareal", nome: "Birrareal", owner: "Roi L.", punti: 58, fantapunti: 2545.5 },
    terzo: { teamId: "tunesquad", nome: "TuneSquad", owner: "Bacchiega G.", punti: 56, fantapunti: 2468 },
    coppa: { vincitore: { teamId: "ponferradina", nome: "Ponferradina fc" }, finalista: { teamId: "foche", nome: "Le foche volanti" } },
    champions: { vincitore: { teamId: "tunesquad", nome: "TuneSquad" }, finalista: { teamId: "pdortmund", nome: "Borussia Pdortmund" } },
    classifica: [
      { pos: 1, teamId: "pdortmund", nome: "Borussia Pdortmund", owner: "Nocera M.", punti: 61, fantapunti: 2501 },
      { pos: 2, teamId: "birrareal", nome: "Birrareal", owner: "Roi L.", punti: 58, fantapunti: 2545.5 },
      { pos: 3, teamId: "tunesquad", nome: "TuneSquad", owner: "Bacchiega G.", punti: 56, fantapunti: 2468 },
      { pos: 4, teamId: "isagogici", nome: "Isagogici Anemoni", owner: "Gianesini G.", punti: 55, fantapunti: 2431 },
      { pos: 5, teamId: "foche", nome: "Le foche volanti", owner: "Brusa D.", punti: 53, fantapunti: 2430 },
      { pos: 6, teamId: "ponferradina", nome: "Ponferradina fc", owner: "Del Favero Gio.", punti: 52, fantapunti: 2519.5 },
      { pos: 7, teamId: "brigate", nome: "Sbrighton", owner: "Lacchin P.", punti: 48, fantapunti: 2454.5 },
      { pos: 8, teamId: "ziopeiro", nome: "Atletico Ziopeiro", owner: "Pace E.", punti: 46, fantapunti: 2441 },
      { pos: 9, teamId: "tettenham", nome: "Tettenham", owner: "Fabbro S.", punti: 40, fantapunti: 2429.5 },
      { pos: 10, teamId: "masterchef", nome: "Masterchef united", owner: "Bai A.", punti: 36, fantapunti: 2359.5 },
      { pos: 11, teamId: "shole", nome: "AS Shole", owner: "Del Favero Giu.", punti: 33, fantapunti: 2328 },
      { pos: 12, teamId: "thorino", nome: "THORINO", owner: "Piermartini G.", punti: 32, fantapunti: 2371 }
    ]
  },
  {
    stagione: "2023/24", anno: 2024, giornate: 35,
    campione: { teamId: "foche", nome: "Le foche volanti", owner: "Brusa D.", punti: 65, fantapunti: 2490 },
    secondo: { teamId: "tunesquad", nome: "TuneSquad", owner: "Bacchiega G.", punti: 62, fantapunti: 2518.5 },
    terzo: { teamId: "brigate", nome: "Sbrighton", owner: "Lacchin P.", punti: 59, fantapunti: 2484.5 },
    coppa: { vincitore: { teamId: "tunesquad", nome: "TuneSquad" }, finalista: { teamId: "foche", nome: "Le foche volanti" } },
    champions: { vincitore: { teamId: "ponferradina", nome: "Ponferradina FC" }, finalista: { teamId: "pdortmund", nome: "Borussia Pdortmund" } },
    classifica: [
      { pos: 1, teamId: "foche", nome: "Le foche volanti", owner: "Brusa D.", punti: 65, fantapunti: 2490 },
      { pos: 2, teamId: "tunesquad", nome: "TuneSquad", owner: "Bacchiega G.", punti: 62, fantapunti: 2518.5 },
      { pos: 3, teamId: "brigate", nome: "Sbrighton", owner: "Lacchin P.", punti: 59, fantapunti: 2484.5 },
      { pos: 4, teamId: "birrareal", nome: "Birrareal", owner: "Roi L.", punti: 59, fantapunti: 2405.5 },
      { pos: 5, teamId: "ponferradina", nome: "Ponferradina fc", owner: "Del Favero G.", punti: 53, fantapunti: 2479.5 },
      { pos: 6, teamId: "ziopeiro", nome: "Atletico Ziopeiro", owner: "Pace E.", punti: 52, fantapunti: 2440.5 },
      { pos: 7, teamId: "isagogici", nome: "Isagogici anemoni", owner: "Gianesini G.", punti: 49, fantapunti: 2319 },
      { pos: 8, teamId: "thorino", nome: "THORINO", owner: "Piermartini G.", punti: 46, fantapunti: 2360.5 },
      { pos: 9, teamId: "masterchef", nome: "Masterchef United", owner: "Bai A.", punti: 44, fantapunti: 2428 },
      { pos: 10, teamId: "pdortmund", nome: "Borussia Pdortmund", owner: "Nocera M.", punti: 43, fantapunti: 2430.5 },
      { pos: 11, teamId: "tettenham", nome: "Tetthenam", owner: "Fabbro S.", punti: 42, fantapunti: 2418 },
      { pos: 12, teamId: "shole", nome: "AS Shole", owner: "Zecchini P.", punti: 14, fantapunti: 2232.5 }
    ]
  },
  {
    stagione: "2022/23", anno: 2023, giornate: null,
    campione: { teamId: "foche", nome: "Le foche volanti", owner: "Brusa D.", punti: 61, fantapunti: 2265.5 },
    secondo: { teamId: "brigate", nome: "Sbrighton", owner: "Lacchin P.", punti: 58, fantapunti: 2263 },
    terzo: { teamId: "ziopeiro", nome: "Atletico Ziopeiro", owner: "Pace E.", punti: 45, fantapunti: 2196.5 },
    coppa: { vincitore: { teamId: "ponferradina", nome: "Ponferradina FC" }, finalista: { teamId: "brigate", nome: "Sbrighton" } },
    champions: null,
    classifica: [
      { pos: 1, teamId: "foche", nome: "Le foche volanti", owner: "Brusa D.", punti: 61, fantapunti: 2265.5 },
      { pos: 2, teamId: "brigate", nome: "Sbrighton", owner: "Lacchin P.", punti: 58, fantapunti: 2263 },
      { pos: 3, teamId: "ziopeiro", nome: "Atletico Ziopeiro", owner: "Pace E.", punti: 45, fantapunti: 2196.5 },
      { pos: 4, teamId: "masterchef", nome: "Masterchef United", owner: "Bai A.", punti: 44, fantapunti: 2271.5 },
      { pos: 5, teamId: "ponferradina", nome: "Ponferradina FC", owner: "Del Favero G.", punti: 43, fantapunti: 2201.5 },
      { pos: 6, teamId: "pdortmund", nome: "Borussia Pdortmund", owner: "Nocera M.", punti: 43, fantapunti: 2194.5 },
      { pos: 7, teamId: "tettenham", nome: "Tettenham", owner: "Fabbro S.", punti: 42, fantapunti: 2239.5 },
      { pos: 8, teamId: "thorino", nome: "THORINO", owner: "Piermartini G.", punti: 42, fantapunti: 2171.5 },
      { pos: 9, teamId: "tunesquad", nome: "TuneSquad", owner: "Bacchiega G.", punti: 41, fantapunti: 2259 },
      { pos: 10, teamId: "shole", nome: "AS Shole", owner: "Zecchini P.", punti: 41, fantapunti: 2241 },
      { pos: 11, teamId: "birrareal", nome: "Birrareal", owner: "Roi L.", punti: 38, fantapunti: 2118 },
      { pos: 12, teamId: "isagogici", nome: "Isagogici anemoni", owner: "Gianesini G.", punti: 28, fantapunti: 2145.5 }
    ]
  },
  {
    stagione: "2021/22", anno: 2022, giornate: null,
    campione: { teamId: "ponferradina", nome: "Ponferradina fc", owner: "Del Favero G", punti: null, fantapunti: null },
    secondo: { teamId: "brigate", nome: "Sbrighton", owner: "Lacchin P.", punti: null, fantapunti: null },
    terzo: { teamId: "tunesquad", nome: "TuneSquad", owner: "Bacchiega G.", punti: null, fantapunti: null },
    coppa: { vincitore: { teamId: "tunesquad", nome: "TuneSquad" }, finalista: { teamId: "brigate", nome: "Sbrighton" } },
    champions: null,
    classifica: [
      { pos: 1, teamId: "ponferradina", nome: "Ponferradina fc", owner: "Del Favero G", punti: null, fantapunti: null },
      { pos: 2, teamId: "brigate", nome: "Sbrighton", owner: "Lacchin P.", punti: null, fantapunti: null },
      { pos: 3, teamId: "tunesquad", nome: "TuneSquad", owner: "Bacchiega G.", punti: null, fantapunti: null },
      { pos: 10, teamId: "birrareal", nome: "Birrareal", owner: "Roi L.", punti: null, fantapunti: null }
    ]
  },
  {
    stagione: "2020/21", anno: 2021, giornate: null,
    campione: { teamId: "birrareal", nome: "Birrareal", owner: "Roi L.", punti: 58, fantapunti: 2527 },
    secondo: { teamId: "ziopeiro", nome: "PSG", owner: "Pace E.", punti: 57, fantapunti: 2575 },
    terzo: { teamId: "tettenham", nome: "Tetthenam", owner: "Fabbro S.", punti: 57, fantapunti: 2555 },
    coppa: { vincitore: { teamId: "tettenham", nome: "Tetthenam" }, finalista: { teamId: "ziopeiro", nome: "PSG" } },
    champions: null,
    classifica: [
      { pos: 1, teamId: "birrareal", nome: "Birrareal", owner: "Roi L.", punti: 58, fantapunti: 2527 },
      { pos: 2, teamId: "ziopeiro", nome: "PSG", owner: "Pace E.", punti: 57, fantapunti: 2575 },
      { pos: 3, teamId: "tettenham", nome: "Tetthenam", owner: "Fabbro S.", punti: 57, fantapunti: 2555 },
      { pos: 4, teamId: "ponferradina", nome: "Ponferradina fc", owner: "Del favero G.", punti: 56, fantapunti: 2581.5 },
      { pos: 5, teamId: "brigate", nome: "Sbrighton", owner: "Lacchin P.", punti: 54, fantapunti: 2484.5 },
      { pos: 6, teamId: "foche", nome: "Foche volanti", owner: "Brusa D.", punti: 52, fantapunti: 2558 },
      { pos: 7, teamId: "isagogici", nome: "Isagogici anemoni", owner: "Gianesini G.", punti: 49, fantapunti: 2410.5 },
      { pos: 8, teamId: "pdortmund", nome: "Aston pirla", owner: "Nocera M.", punti: 36, fantapunti: 2388.5 },
      { pos: 9, teamId: "shole", nome: "A.S. Shole", owner: "Zecchini P.", punti: 33, fantapunti: 2432.5 },
      { pos: 10, teamId: "tunesquad", nome: "TuneSquad", owner: "Bacchiega G.", punti: 32, fantapunti: 2443 }
    ]
  },
  {
    stagione: "2019/20", anno: 2020, giornate: null,
    campione: { teamId: "csp", nome: "CSP", owner: "Munari M.", punti: 66, fantapunti: null },
    secondo: { teamId: "tettenham", nome: "Tetthenam", owner: "Fabbro S.", punti: 56, fantapunti: null },
    terzo: { teamId: "foche", nome: "Foche volanti", owner: "Brusa D.", punti: 56, fantapunti: null },
    coppa: { vincitore: { teamId: "tettenham", nome: "Tetthenam" }, finalista: { teamId: "ziopeiro", nome: "PSG" } },
    champions: null,
    classifica: [
      { pos: 1, teamId: "csp", nome: "CSP", owner: "Munari M.", punti: 66, fantapunti: null },
      { pos: 2, teamId: "tettenham", nome: "Tetthenam", owner: "Fabbro S.", punti: 56, fantapunti: null },
      { pos: 3, teamId: "foche", nome: "Foche volanti", owner: "Brusa D.", punti: 56, fantapunti: null },
      { pos: 4, teamId: "isagogici", nome: "Isagogici anemoni", owner: "Gianesini G.", punti: 54, fantapunti: null },
      { pos: 5, teamId: "pdortmund", nome: "Aston Pirla", owner: "Nocera M.", punti: 53, fantapunti: null },
      { pos: 6, teamId: "ziopeiro", nome: "PSG", owner: "Pace E.", punti: 50, fantapunti: null },
      { pos: 7, teamId: "cikimow", nome: "CIKIMOW", owner: "Colombo M.", punti: 45, fantapunti: null },
      { pos: 8, teamId: "brigate", nome: "Hellas Madonna", owner: "Lacchin P.", punti: 42, fantapunti: null },
      { pos: 9, teamId: "tunesquad", nome: "Struzzi inverecondi", owner: "Bacchiega G.", punti: 39, fantapunti: null },
      { pos: 10, teamId: "shole", nome: "A.S. Shole", owner: "Zecchini P.", punti: 38, fantapunti: null }
    ]
  },
  {
    stagione: "2018/19", anno: 2019, giornate: null,
    campione: { teamId: "ziopeiro", nome: "PSG", owner: "Pace E.", punti: 62, fantapunti: null },
    secondo: { teamId: "isagogici", nome: "Isagogici anemoni", owner: "Gianesini G.", punti: 61, fantapunti: null },
    terzo: { teamId: "foche", nome: "Pescara Manzia", owner: "Brusa D.", punti: 59, fantapunti: null },
    coppa: { vincitore: { teamId: null, nome: "TuneSquad" }, finalista: { teamId: "csp", nome: "CSP" } },
    champions: null,
    classifica: [
      { pos: 1, teamId: "ziopeiro", nome: "PSG", owner: "Pace E.", punti: 62, fantapunti: null },
      { pos: 2, teamId: "isagogici", nome: "Isagogici anemoni", owner: "Gianesini G.", punti: 61, fantapunti: null },
      { pos: 3, teamId: "foche", nome: "Pescara Manzia", owner: "Brusa D.", punti: 59, fantapunti: null },
      { pos: 4, teamId: "csp", nome: "CSP", owner: "Munari M.", punti: 54, fantapunti: null },
      { pos: 5, teamId: "tunesquad", nome: "Struzzi inverecondi", owner: "Bacchiega G.", punti: 50, fantapunti: null },
      { pos: 6, teamId: "valenciaga", nome: "Valenciaga", owner: "La Paglia M.", punti: 50, fantapunti: null },
      { pos: 7, teamId: "tettenham", nome: "Tetthenam", owner: "Fabbro S.", punti: 47, fantapunti: null },
      { pos: 8, teamId: "piskaleti", nome: "I piskaleti", owner: "Zotti G.", punti: 44, fantapunti: null },
      { pos: 9, teamId: "shole", nome: "A.S. Shole", owner: "Zecchini P.", punti: 41, fantapunti: null },
      { pos: 10, teamId: "cikimow", nome: "CIKI MOW", owner: "Colombo M.", punti: 24, fantapunti: null }
    ]
  },
  {
    stagione: "2017/18", anno: 2018, giornate: null,
    campione: { teamId: "ziopeiro", nome: "PSG", owner: "Pace E.", punti: 68, fantapunti: null },
    secondo: { teamId: "tunesquad", nome: "Struzzi inverecondi", owner: "Bacchiega G.", punti: 57, fantapunti: null },
    terzo: { teamId: "tettenham", nome: "Tetthenam", owner: "Fabbro S.", punti: 56, fantapunti: null },
    coppa: null,
    champions: null,
    classifica: [
      { pos: 1, teamId: "ziopeiro", nome: "PSG", owner: "Pace E.", punti: 68, fantapunti: null },
      { pos: 2, teamId: "tunesquad", nome: "Struzzi inverecondi", owner: "Bacchiega G.", punti: 57, fantapunti: null },
      { pos: 3, teamId: "tettenham", nome: "Tetthenam", owner: "Fabbro S.", punti: 56, fantapunti: null },
      { pos: 4, teamId: "shole", nome: "A.S. Shole", owner: "Zecchini P.", punti: 55, fantapunti: null },
      { pos: 5, teamId: "isagogici", nome: "Isagogici anemoni", owner: "Gianesini G.", punti: 48, fantapunti: null },
      { pos: 6, teamId: "cikimow", nome: "CIKI MOW", owner: "Colombo M.", punti: 43, fantapunti: null },
      { pos: 7, teamId: "valenciaga", nome: "Valenciaga", owner: "La Paglia M.", punti: 41, fantapunti: null },
      { pos: 8, teamId: "squadra3", nome: "Squadra 3", owner: "Lopez E.", punti: 32, fantapunti: null }
    ]
  }
];

/* Palmarès calcolato dalle stagioni: scudetti, coppe, champions. */
FL.data.palmares = function () {
  var conta = {};
  function agg(id, campo) {
    if (!id) return;
    conta[id] = conta[id] || { teamId: id, scudetti: 0, coppe: 0, champions: 0, podi: 0 };
    conta[id][campo]++;
  }
  FL.data.honours.forEach(function (s) {
    if (s.campione) { agg(s.campione.teamId, "scudetti"); agg(s.campione.teamId, "podi"); }
    if (s.secondo) agg(s.secondo.teamId, "podi");
    if (s.terzo) agg(s.terzo.teamId, "podi");
    if (s.coppa && s.coppa.vincitore) agg(s.coppa.vincitore.teamId, "coppe");
    if (s.champions && s.champions.vincitore) agg(s.champions.vincitore.teamId, "champions");
  });
  return Object.keys(conta).map(function (k) {
    var r = conta[k];
    r.trofei = r.scudetti + r.coppe + r.champions;
    return r;
  }).sort(function (a, b) {
    return b.scudetti - a.scudetti || b.trofei - a.trofei || b.podi - a.podi;
  });
};

FL.data.titoliPerSquadra = function () {
  return FL.data.palmares().filter(function (r) { return r.scudetti > 0; })
    .map(function (r) { return { teamId: r.teamId, titoli: r.scudetti }; });
};

FL.data.campioneInCarica = function () { return FL.data.honours[0] || null; };

/* Come ha chiuso una squadra l'ultima stagione conclusa
   (null se quell'anno non era iscritta). */
FL.data.piazzamentoUltimaStagione = function (teamId) {
  var s = FL.data.honours[0];
  if (!s) return null;
  return s.classifica.find(function (r) { return r.teamId === teamId; }) || null;
};
