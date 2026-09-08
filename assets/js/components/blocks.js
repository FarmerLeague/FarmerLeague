/* =========================================================
   BLOCCHI RIUTILIZZABILI
   Usati da più pagine: riga partita, tabella classifica,
   riquadro squadra, card articolo.
   ========================================================= */
FL.components = FL.components || {};

/* --- Riga partita (calendario, home, dettagli) --- */
FL.components.rigaPartita = function (m, opzioni) {
  var o = opzioni || {};
  var casa = FL.data.team(m.casa), ospite = FL.data.team(m.ospite);
  var classe = "partita";
  if (m.giocata) {
    if (m.golCasa > m.golOspite) classe += " partita--vincitore-casa";
    else if (m.golCasa < m.golOspite) classe += " partita--vincitore-ospite";
  }
  var centro = m.giocata
    ? '<div class="partita__punteggio num">' + m.golCasa + '<em>–</em>' + m.golOspite + '</div>'
    : '<div class="partita__ora">vs</div>';

  function lato(t, fanta, dx) {
    return '<div class="partita__lato' + (dx ? ' partita__lato--dx' : '') + '">' +
      FL.ui.stemma(t, o.stemma || 32) +
      '<div style="min-width:0"><span class="partita__nome">' + FL.ui.esc(t.nome) + '</span>' +
      (o.fantapunti !== false && fanta !== null && fanta !== undefined
        ? '<span class="partita__fanta num">' + fanta.toFixed(1) + ' fantapunti</span>' : '') +
      '</div></div>';
  }

  return '<article class="' + classe + '">' +
    lato(casa, m.fantaCasa, false) + centro + lato(ospite, m.fantaOspite, true) +
    '</article>';
};

/* --- Tabella classifica ---
   opzioni: { limite: n, compatta: true, evidenzia: "alfa" } */
FL.components.tabellaClassifica = function (opzioni) {
  var o = opzioni || {};
  var righe = FL.data.classifica();
  if (o.limite) righe = righe.slice(0, o.limite);

  var colonneComplete = !o.compatta;

  var thead = '<thead><tr>' +
    '<th style="width:52px">Pos</th>' +
    '<th>Squadra</th>' +
    (colonneComplete ? '<th>G</th><th>V</th><th>N</th><th>P</th><th>GF</th><th>GS</th><th>DR</th>' : '') +
    '<th>Fantapunti</th>' +
    (colonneComplete ? '<th>Ultime 5</th>' : '') +
    '<th>Punti</th>' +
    '</tr></thead>';

  var tbody = '<tbody>' + righe.map(function (r, i) {
    var pos = i + 1;
    var t = FL.data.team(r.teamId);
    var zona = FL.data.zonaDi(pos);
    return '<tr' + (o.evidenzia === r.teamId ? ' style="background:rgba(23,217,127,.08)"' : '') + '>' +
      '<td><span class="pos num" data-zona="' + zona + '">' + pos + '</span></td>' +
      '<td><a class="squadra-riga" href="#/rose/' + t.id + '">' + FL.ui.stemma(t, o.stemma || 26) +
        '<span style="min-width:0"><span class="squadra-riga__nome">' + FL.ui.esc(t.nome) + '</span>' +
        (colonneComplete ? '<span class="squadra-riga__owner">' + FL.ui.esc(t.owner) + '</span>' : '') +
        '</span></a></td>' +
      (colonneComplete
        ? '<td class="num debole">' + r.g + '</td><td class="num">' + r.v + '</td><td class="num">' + r.n +
          '</td><td class="num">' + r.p + '</td><td class="num debole">' + r.gf + '</td><td class="num debole">' + r.gs +
          '</td><td class="num">' + (r.dr > 0 ? "+" : "") + r.dr + '</td>'
        : '') +
      '<td class="num fanta">' + r.fantapunti.toFixed(1) + '</td>' +
      (colonneComplete ? '<td>' + FL.ui.forma(r.forma) + '</td>' : '') +
      '<td class="pt num">' + r.punti + '</td>' +
      '</tr>';
  }).join("") + '</tbody>';

  return '<div class="tabella-wrap"><table class="tabella">' + thead + tbody + '</table></div>';
};

/* --- Legenda delle zone --- */
FL.components.legendaZone = function () {
  return '<div class="legenda">' + FL.config.zone.map(function (z) {
    return '<span><i style="background:' + z.colore + '"></i>' + FL.ui.esc(z.etichetta) + '</span>';
  }).join("") + '</div>';
};

/* --- Riquadro squadra selezionabile --- */
FL.components.tileSquadra = function (t, attiva, href) {
  var tag = href ? "a" : "button";
  var stato = href
    ? (attiva ? ' aria-current="true"' : '')
    : ' aria-pressed="' + (attiva ? "true" : "false") + '"';
  return '<' + tag + ' class="tile-squadra" ' + (href ? 'href="' + href + '"' : 'type="button"') +
    ' data-team="' + t.id + '"' + stato + '>' +
    FL.ui.stemma(t, 44) +
    '<b>' + FL.ui.esc(t.nome) + '</b>' +
    '<small>' + FL.ui.esc(t.owner) + '</small>' +
    '</' + tag + '>';
};

/* --- Card articolo (griglia notizie) --- */
FL.components.cardNotizia = function (a) {
  return '<a class="card-notizia" href="#/notizie/' + a.slug + '">' +
    FL.ui.copertina(a) +
    '<div class="card-notizia__corpo">' +
      '<h3>' + FL.ui.esc(a.titolo) + '</h3>' +
      '<p>' + FL.ui.esc(a.anteprima) + '</p>' +
      FL.ui.firma(a) +
    '</div></a>';
};

/* --- Riga articolo compatta (colonna del giornale) --- */
FL.components.rigaArticolo = function (a) {
  return '<a class="articolo-riga" href="#/notizie/' + a.slug + '">' +
    FL.ui.copertina(a) +
    '<div><span class="cat">' + FL.ui.esc(FL.data.categoria(a.categoria).nome) + '</span>' +
    '<h4>' + FL.ui.esc(a.titolo) + '</h4>' +
    FL.ui.firma(a) + '</div></a>';
};

/* --- Intestazione delle pagine interne --- */
FL.components.testaPagina = function (o) {
  return '<header class="pagina-testa"><div class="wrap">' +
    '<span class="kicker' + (o.kickerMod ? ' kicker--' + o.kickerMod : '') + '">' + FL.ui.esc(o.kicker) + '</span>' +
    '<h1>' + FL.ui.esc(o.titolo) + '</h1>' +
    (o.testo ? '<p>' + FL.ui.esc(o.testo) + '</p>' : '') +
    (o.fondo ? '<span class="pagina-testa__fondo" aria-hidden="true">' + FL.ui.esc(o.fondo) + '</span>' : '') +
    '</div></header>';
};
