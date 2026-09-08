/* =========================================================
   PIÈ DI PAGINA
   ========================================================= */
FL.components.footer = (function () {
  return {
    monta: function (el) {
      var c = FL.config;
      var albo = FL.data.campioneInCarica();
      var campione = albo ? FL.data.team(albo.campione.teamId) : null;
      var link = c.lega.link;

      el.innerHTML = '' +
        '<div class="wrap">' +
          '<div class="footer-griglia">' +
            '<div>' +
              '<a class="marchio" href="#/">' + FL.ui.marchio() +
                '<span><span class="marchio__sigla">Fanta<span>lega</span></span>' +
                '<span class="marchio__sotto">' + (c.lega.fondazione ? 'dal ' + c.lega.fondazione : c.stagione.etichetta) + '</span></span></a>' +
              '<p style="margin-top:16px;max-width:38ch">' + FL.ui.esc(c.lega.motto) + '</p>' +
              (campione ? '<p style="color:var(--oro);font-weight:600">Campione in carica: ' +
                FL.ui.esc(campione.nome) + ' (' + FL.ui.esc(albo.stagione) + ')</p>' : '') +
            '</div>' +
            '<div><h4>Competizione</h4><ul>' +
              '<li><a href="#/classifica">Classifica</a></li>' +
              '<li><a href="#/calendario">Calendario e risultati</a></li>' +
              '<li><a href="#/coppe">Coppe e Champions</a></li>' +
              '<li><a href="#/albo-doro">Albo d\'oro</a></li>' +
            '</ul></div>' +
            '<div><h4>Squadre</h4><ul>' +
              '<li><a href="#/rose">Rose</a></li>' +
              '<li><a href="#/giovanili">Giovanili</a></li>' +
            '</ul></div>' +
            '<div><h4>Redazione</h4><ul>' +
              (link ? '<li><a href="' + FL.ui.esc(link) + '" target="_blank" rel="noopener">Lega su Fantacalcio</a></li>' : '') +
              '<li><a href="#/notizie">Tutte le notizie</a></li>' +
              FL.config.categorie.slice(0, 3).map(function (cat) {
                return '<li><a href="#/notizie">' + FL.ui.esc(cat.nome) + '</a></li>';
              }).join("") +
            '</ul></div>' +
          '</div>' +
          '<div class="footer-basso">' +
            '<span>' + FL.ui.esc(c.lega.nome) + ' · ' + FL.ui.esc(c.lega.sottotitolo) + '</span>' +
            '<span>Stagione ' + FL.ui.esc(c.stagione.etichetta) + ' · ' +
              (FL.data.campionatoIniziato()
                ? 'giornata ' + FL.data.giornateGiocate().length + ' di ' + c.stagione.giornateTotali
                : 'campionato al via') + '</span>' +
          '</div>' +
        '</div>';
    }
  };
})();
