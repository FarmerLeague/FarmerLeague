/* =========================================================
   PAGINA CALENDARIO
   Percorsi: #/calendario  e  #/calendario/7
   ========================================================= */
FL.pages.calendario = (function () {

  function giornataAttiva(params) {
    var n = parseInt(params && params.n, 10);
    if (n && FL.data.giornata(n)) return n;
    var prossima = FL.data.prossimaGiornata();
    var ultima = FL.data.ultimaGiornata();
    return (prossima || ultima || FL.data.fixtures[0]).numero;
  }

  function navigatore(attiva) {
    return '<div class="navigatore-giornate"><div class="giornate-scroll">' +
      FL.data.fixtures.map(function (g) {
        var giocata = g.partite.some(function (p) { return p.giocata; });
        return '<a class="giornata-btn num" href="#/calendario/' + g.numero + '" ' +
          'title="Giornata ' + g.numero + (g.serieA ? ' · ' + g.serieA + 'ª di Serie A' : '') + '" ' +
          'data-stato="' + (giocata ? "giocata" : "futura") + '" ' +
          (g.numero === attiva ? 'aria-current="true"' : '') + '>' + g.numero + '</a>';
      }).join("") +
      '</div></div>';
  }

  return {
    titolo: function (p) { return "Calendario · giornata " + giornataAttiva(p); },
    render: function (params) {
      var n = giornataAttiva(params);
      var g = FL.data.giornata(n);
      var giocata = g.partite.some(function (m) { return m.giocata; });
      var precedente = FL.data.giornata(n - 1), successiva = FL.data.giornata(n + 1);

      var piede = "";
      if (giocata) {
        var golTot = g.partite.reduce(function (s, m) { return s + m.golCasa + m.golOspite; }, 0);
        var migliore = g.partite.slice().sort(function (a, b) {
          return Math.max(b.fantaCasa, b.fantaOspite) - Math.max(a.fantaCasa, a.fantaOspite);
        })[0];
        var topId = migliore.fantaCasa >= migliore.fantaOspite ? migliore.casa : migliore.ospite;
        piede = '<div class="pannello__piede">' +
          '<span class="meta">' + golTot + ' gol in ' + g.partite.length + ' partite</span>' +
          '<span class="badge badge--oro">Miglior punteggio: ' + FL.ui.esc(FL.data.team(topId).nome) +
          ' · ' + Math.max(migliore.fantaCasa, migliore.fantaOspite).toFixed(1) + '</span></div>';
      } else {
        piede = '<div class="pannello__piede"><span class="meta">' + g.partite.length +
          ' partite ancora da giocare</span>' +
          (g.serieA ? '<span class="badge badge--ciano">' + g.serieA + 'ª giornata di Serie A</span>' : '') +
          '</div>';
      }

      return FL.components.testaPagina({
        kicker: "Calendario e risultati",
        titolo: "Giornata " + n,
        testo: FL.config.stagione.giornateTotali + " giornate di lega, dalla " +
          FL.config.stagione.primaGiornataSerieA + "ª alla 38ª di Serie A." +
          (g.serieA ? " Questa si gioca sulla " + g.serieA + "ª di Serie A." : ""),
        fondo: "G" + n
      }) +
      '<section class="sezione--stretta" style="padding-block:var(--sp-6)"><div class="wrap">' +
        navigatore(n) +
        '<section class="pannello">' +
          '<div class="pannello__testa">' +
            '<h3>Giornata ' + n + '</h3>' +
            '<span class="meta">' + FL.ui.esc(g.data || "data da definire") + ' · ' +
            (giocata ? 'risultati definitivi' : 'da giocare') + '</span>' +
          '</div>' +
          '<div class="pannello__corpo tabellone">' +
            g.partite.map(function (m) { return FL.components.rigaPartita(m, { stemma: 34 }); }).join("") +
          '</div>' + piede +
        '</section>' +

        '<div style="display:flex;justify-content:space-between;gap:12px;margin-top:var(--sp-5);flex-wrap:wrap">' +
          (precedente ? '<a class="btn btn--fantasma btn--piccolo" href="#/calendario/' + (n - 1) + '">Giornata ' + (n - 1) + '</a>' : '<span></span>') +
          (successiva ? '<a class="btn btn--fantasma btn--piccolo" href="#/calendario/' + (n + 1) + '">Giornata ' + (n + 1) + '</a>' : '<span></span>') +
        '</div>' +

        '<p style="margin-top:var(--sp-7);color:var(--testo-mute);font-size:var(--t-sm)">' +
          'Accoppiamenti dal calendario ufficiale della lega. Le date seguono quelle di Serie A: ' +
          'la giornata di lega si gioca sulla giornata di Serie A indicata qui sopra.</p>' +
      '</div></section>';
    }
  };
})();
