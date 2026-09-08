/* =========================================================
   SQUADRE DELLA LEGA
   ---------------------------------------------------------
   `teams`        le 12 squadre iscritte alla stagione in corso
   `teamsStorico` le squadre che hanno fatto la storia della lega
                  ma oggi non partecipano (servono all'albo d'oro)

   Per usare uno stemma vero basta il percorso dell'immagine in
   `logo`, es. logo: "assets/img/stemmi/birrareal.png";
   altrimenti resta lo stemma disegnato con i colori qui sotto.
   ========================================================= */
FL.data.teams = [
  { id: "birrareal", nome: "Birrareal", sigla: "BIR", owner: "Ludovico Roi", colori: ["#E8A33D", "#3B2410"], forma: "scudo", fascia: "banda", dal: 2020, nomiStorici: null, logo: null },
  { id: "brigate", nome: "Brigate Ebosse", sigla: "BRI", owner: "Paolo Lacchin", colori: ["#1A1A1A", "#C8102E"], forma: "scudo", fascia: "strisce", dal: 2019, nomiStorici: "2019-2020 Hellas Madonna · 2020-2025 Sbrighton", logo: null },
  { id: "ponferradina", nome: "Ponferradina FC", sigla: "PON", owner: "Giovanni Del Favero", colori: ["#2F6BFF", "#0C1B3F"], forma: "cerchio", fascia: "strisce", dal: 2020, nomiStorici: null, logo: null },
  { id: "thorino", nome: "Thorino", sigla: "THO", owner: "Giacomo Piermartini", colori: ["#8B1A2B", "#2A0A11"], forma: "scudo", fascia: "meta", dal: 2022, nomiStorici: null, logo: null },
  { id: "isagogici", nome: "Isagogici Anemoni", sigla: "ISA", owner: "Giacomo Gianesini", colori: ["#B14BFF", "#20083A"], forma: "rombo", fascia: "banda", dal: 2017, nomiStorici: null, logo: null },
  { id: "tettenham", nome: "Tettenham", sigla: "TET", owner: "Simone Fabbro", colori: ["#F2F2F7", "#132257"], forma: "scudo", fascia: "meta", dal: 2017, nomiStorici: "Fino al 2022: Tetthenam", logo: null },
  { id: "tunesquad", nome: "Tune Squad", sigla: "TUN", owner: "Giovanni Bacchiega", colori: ["#F5821F", "#2B3A8C"], forma: "cerchio", fascia: "banda", dal: 2017, nomiStorici: "Fino al 2019: Struzzi Inverecondi", logo: null },
  { id: "ziopeiro", nome: "Atletico Ziopeiro", sigla: "ZIO", owner: "Emmanuele Pace", colori: ["#D51B22", "#F2F2F7"], forma: "scudo", fascia: "strisce", dal: 2017, nomiStorici: "2017-2019 A.C. Picchia · 2019-2021 PSG", logo: null },
  { id: "masterchef", nome: "Masterchef United", sigla: "MAS", owner: "Alessandro Bai", colori: ["#E23B3B", "#F5E9DC"], forma: "rombo", fascia: "banda", dal: 2022, nomiStorici: null, logo: null },
  { id: "shole", nome: "A.S. Shole", sigla: "SHO", owner: "Giulio Del Favero", colori: ["#46E3E8", "#04333A"], forma: "cerchio", fascia: "meta", dal: 2017, nomiStorici: "Fino al 2024 allenata da Pietro Zecchini", logo: null },
  { id: "csm", nome: "C.S.M. FC", sigla: "CSM", owner: "Lorenzo Ricciardi", colori: ["#17D97F", "#08351F"], forma: "scudo", fascia: "banda", dal: 2026, nomiStorici: "Subentrata a Le Foche Volanti", logo: null },
  { id: "pdortmund", nome: "Borussia Pdortmund", sigla: "PDO", owner: "Marco Nocera", colori: ["#FFC24B", "#151515"], forma: "scudo", fascia: "strisce", dal: 2019, nomiStorici: "Fino al 2021: Aston Pirla", logo: null }
];

FL.data.teamsStorico = [
  { id: "foche", nome: "Le Foche Volanti", sigla: "FOC", owner: "Davide Brusa", colori: ["#2FA8E0", "#0B2B45"], forma: "cerchio", fascia: "meta", dal: "2018-2026", nomiStorici: "Fino al 2019: Pescaramanzia", logo: null },
  { id: "csp", nome: "CSP", sigla: "CSP", owner: "Marco Munari", colori: ["#7A5CFF", "#1A0F3A"], forma: "rombo", fascia: "banda", dal: "2018-2020", nomiStorici: null, logo: null },
  { id: "cikimow", nome: "Ciki Mow", sigla: "CIK", owner: "Michele Colombo", colori: ["#FF7A2F", "#331200"], forma: "scudo", fascia: "strisce", dal: "2017-2020", nomiStorici: null, logo: null },
  { id: "valenciaga", nome: "Valenciaga", sigla: "VAL", owner: "Matteo La Paglia", colori: ["#FFB800", "#2A1B00"], forma: "scudo", fascia: "banda", dal: "2017-2019", nomiStorici: null, logo: null },
  { id: "squadra3", nome: "Squadra 3", sigla: "SQ3", owner: "Eugenio Lopez", colori: ["#8A94A6", "#22252E"], forma: "rombo", fascia: "meta", dal: "2017-2018", nomiStorici: null, logo: null },
  { id: "piskaleti", nome: "I Piskaleti", sigla: "PIS", owner: "Gabriele Zotti", colori: ["#17B8A0", "#062E29"], forma: "cerchio", fascia: "strisce", dal: "2018-2019", nomiStorici: null, logo: null }
];

/* Cerca prima fra le squadre attive, poi fra quelle storiche. */
FL.data.team = function (id) {
  return FL.data.teams.find(function (t) { return t.id === id; }) ||
    FL.data.teamsStorico.find(function (t) { return t.id === id; }) ||
    { id: id, nome: "Squadra da definire", sigla: "???", owner: "—",
      colori: ["#555", "#222"], forma: "scudo", fascia: "banda", logo: null };
};
FL.data.tutteLeSquadre = function () {
  return FL.data.teams.concat(FL.data.teamsStorico);
};
