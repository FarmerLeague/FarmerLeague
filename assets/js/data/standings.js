/* =========================================================
   CLASSIFICA
   Calcolata dai risultati inseriti in fixtures.js secondo le
   regole di config.js. Prima dell'esordio tutte le squadre
   sono a zero e si ordinano alfabeticamente.

   Per incollare la classifica ufficiale invece di calcolarla:
   FL.data.classificaManuale = [
     { teamId: "birrareal", g: 1, v: 1, n: 0, p: 0, gf: 2, gs: 1,
       punti: 3, fantapunti: 72.5, forma: ["V"] }, ...
   ];
   ========================================================= */
FL.data.classificaManuale = null;

FL.data.classifica = function (finoA) {
  if (FL.data.classificaManuale && finoA === undefined) return FL.data.classificaManuale.slice();

  var cfg = FL.config.punteggio;
  var righe = {};
  FL.data.teams.forEach(function (t) {
    righe[t.id] = { teamId: t.id, g: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, punti: 0, fantapunti: 0, forma: [] };
  });

  FL.data.fixtures.forEach(function (giornata) {
    if (finoA !== undefined && giornata.numero > finoA) return;   // classifica com'era
    giornata.partite.forEach(function (m) {
      if (!m.giocata) return;
      var c = righe[m.casa], o = righe[m.ospite];
      if (!c || !o) return;
      c.g++; o.g++;
      c.gf += m.golCasa; c.gs += m.golOspite;
      o.gf += m.golOspite; o.gs += m.golCasa;
      c.fantapunti += m.fantaCasa || 0;
      o.fantapunti += m.fantaOspite || 0;
      if (m.golCasa > m.golOspite) {
        c.v++; o.p++; c.punti += cfg.vittoria; o.punti += cfg.sconfitta;
        c.forma.push("V"); o.forma.push("P");
      } else if (m.golCasa < m.golOspite) {
        o.v++; c.p++; o.punti += cfg.vittoria; c.punti += cfg.sconfitta;
        o.forma.push("V"); c.forma.push("P");
      } else {
        c.n++; o.n++; c.punti += cfg.pareggio; o.punti += cfg.pareggio;
        c.forma.push("N"); o.forma.push("N");
      }
    });
  });

  var nome = {};
  FL.data.teams.forEach(function (t) { nome[t.id] = t.nome; });

  return Object.keys(righe).map(function (k) {
    var r = righe[k];
    r.dr = r.gf - r.gs;
    r.fantapunti = Math.round(r.fantapunti * 10) / 10;
    r.forma = r.forma.slice(-5);
    return r;
  }).sort(function (a, b) {
    return b.punti - a.punti || b.dr - a.dr || b.gf - a.gf ||
      b.fantapunti - a.fantapunti || nome[a.teamId].localeCompare(nome[b.teamId]);
  });
};

FL.data.zonaDi = function (posizione) {
  if (!FL.data.campionatoIniziato()) return "";
  var z = FL.config.zone.find(function (z) { return posizione >= z.da && posizione <= z.a; });
  return z ? z.id : "";
};

/* Numeri di squadra: sul campo quando si gioca, altrimenti sull'asta. */
FL.data.statisticheLega = function () {
  var cls = FL.data.classifica();
  var golTot = cls.reduce(function (s, r) { return s + r.gf; }, 0);
  var partite = cls.reduce(function (s, r) { return s + r.g; }, 0) / 2;
  var ord = function (f) { return cls.slice().sort(f)[0]; };
  return {
    squadre: FL.data.teams.length,
    giornateGiocate: FL.data.giornateGiocate().length,
    golTotali: golTot,
    mediaGol: partite ? Math.round((golTot / partite) * 10) / 10 : 0,
    miglioreAttacco: ord(function (a, b) { return b.gf - a.gf; }),
    miglioreDifesa: ord(function (a, b) { return a.gs - b.gs; }),
    topFantapunti: ord(function (a, b) { return b.fantapunti - a.fantapunti; }),
    capolista: cls[0]
  };
};
