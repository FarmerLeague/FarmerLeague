/* =========================================================
   PAGINA ARTICOLO
   Percorso: #/notizie/slug-articolo
   ========================================================= */
FL.pages.articolo = (function () {
  return {
    titolo: function (p) {
      var a = FL.data.articolo(p.slug);
      return a ? a.titolo : "Articolo";
    },
    render: function (params) {
      var a = FL.data.articolo(params.slug);
      if (!a) {
        return '<section class="sezione"><div class="wrap"><div class="vuoto">' +
          '<h3>Articolo non trovato</h3><p>Il pezzo che cerchi non esiste o è stato rimosso.</p>' +
          '<a class="btn btn--verde btn--piccolo" style="margin-top:16px" href="#/notizie">Torna al giornale</a>' +
          '</div></div></section>';
      }

      var squadra = a.squadra ? FL.data.team(a.squadra) : null;
      var correlati = FL.data.newsOrdinate().filter(function (x) {
        return x.slug !== a.slug && x.categoria === a.categoria;
      }).slice(0, 3);
      if (correlati.length < 3) {
        correlati = correlati.concat(
          FL.data.newsOrdinate().filter(function (x) {
            return x.slug !== a.slug && correlati.indexOf(x) === -1;
          }).slice(0, 3 - correlati.length)
        );
      }

      return '<article class="articolo-pagina"><div class="wrap">' +
        '<a class="indietro" href="#/notizie">← Tutte le notizie</a>' +
        '<header class="articolo-testata">' +
          '<span class="cat" style="font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:' +
            FL.ui.coloreCategoria(a.categoria) + '">' +
            FL.ui.esc(FL.data.categoria(a.categoria).nome) + '</span>' +
          '<h1>' + FL.ui.esc(a.titolo) + '</h1>' +
          (a.occhiello ? '<div class="occhiello">' + FL.ui.esc(a.occhiello) + '</div>' : '') +
          '<div class="firma">' +
            (squadra ? FL.ui.stemma(squadra, 26) : '') +
            '<b>' + FL.ui.esc(a.autore) + '</b><i class="punto"></i>' +
            FL.ui.esc(FL.ui.dataEstesa(a.data)) +
            (squadra ? '<i class="punto"></i>' + FL.ui.esc(squadra.nome) : '') +
          '</div>' +
        '</header>' +
        FL.ui.copertina(a) +
        '<div class="articolo-corpo">' +
          a.corpo.map(function (p) { return '<p>' + FL.ui.esc(p) + '</p>'; }).join("") +
        '</div>' +
        (a.tags && a.tags.length
          ? '<div class="articolo-tags">' + a.tags.map(function (t) {
              return '<span class="tag">#' + FL.ui.esc(t) + '</span>';
            }).join("") + '</div>'
          : '') +
        (correlati.length
          ? '<div style="border-top:3px double var(--inchiostro);margin-top:var(--sp-8);padding-top:var(--sp-5)">' +
            '<h3 style="font-family:var(--serif);font-size:1.6rem;margin-bottom:var(--sp-4)">Continua a leggere</h3>' +
            '<div class="griglia-notizie">' + correlati.map(FL.components.cardNotizia).join("") + '</div></div>'
          : '') +
      '</div></article>';
    }
  };
})();
