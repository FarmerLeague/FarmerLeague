/* =========================================================
   PAGINA NOTIZIE (il giornale della lega)
   Filtro per categoria lato client, senza ricaricare la pagina.
   ========================================================= */
FL.pages.notizie = (function () {
  var filtro = "tutte";

  function griglia() {
    var lista = FL.data.newsOrdinate().filter(function (a) {
      return filtro === "tutte" || a.categoria === filtro;
    });
    if (!lista.length) {
      return '<div class="vuoto" style="border-color:rgba(42,23,18,.3);color:var(--inchiostro-2)">' +
        '<h3 style="color:var(--inchiostro)">Nessun articolo in questa categoria</h3>' +
        '<p>Scegli un\'altra categoria o pubblica il primo pezzo aggiungendolo in news.js.</p></div>';
    }
    return '<div class="griglia-notizie">' + lista.map(FL.components.cardNotizia).join("") + '</div>';
  }

  function chips() {
    var usate = {};
    FL.data.news.forEach(function (a) { usate[a.categoria] = (usate[a.categoria] || 0) + 1; });
    var voci = [{ id: "tutte", nome: "Tutte", n: FL.data.news.length }].concat(
      FL.config.categorie.filter(function (c) { return usate[c.id]; })
        .map(function (c) { return { id: c.id, nome: c.nome, n: usate[c.id] }; })
    );
    return '<div class="chips" id="filtri-notizie">' + voci.map(function (v) {
      return '<button class="chip" type="button" data-cat="' + v.id + '" ' +
        'aria-pressed="' + (filtro === v.id ? "true" : "false") + '">' +
        FL.ui.esc(v.nome) + ' <span style="opacity:.6">' + v.n + '</span></button>';
    }).join("") + '</div>';
  }

  return {
    titolo: function () { return "Notizie"; },
    render: function () {
      return '<section class="giornale" style="padding-block:var(--sp-7)"><div class="wrap">' +
        '<div class="testata">' +
          '<div><h2>Il Giornale della Lega</h2>' +
          '<div class="testata__sotto">Ogni squadra ha una penna. Qui finisce tutto quello che si dice della lega.</div></div>' +
          '<div class="testata__data">' + FL.ui.esc(FL.ui.oggiEsteso()) + '<br>' +
          FL.data.news.length + ' articoli pubblicati</div>' +
        '</div>' +
        chips() +
        '<div id="contenuto-notizie" style="margin-top:var(--sp-6)">' + griglia() + '</div>' +
        '<p style="margin-top:var(--sp-6);font-size:var(--t-sm);color:var(--inchiostro-2);max-width:70ch">' +
        'Per pubblicare un articolo si aggiunge un blocco in <code>assets/js/data/news.js</code>. ' +
        'La stessa struttura potrà essere riempita da un modulo online quando la redazione diventerà aperta a tutti.</p>' +
      '</div></section>';
    },
    mount: function () {
      var barra = document.getElementById("filtri-notizie");
      if (!barra) return;
      barra.addEventListener("click", function (e) {
        var b = e.target.closest(".chip");
        if (!b) return;
        filtro = b.getAttribute("data-cat");
        barra.querySelectorAll(".chip").forEach(function (c) {
          c.setAttribute("aria-pressed", c === b ? "true" : "false");
        });
        document.getElementById("contenuto-notizie").innerHTML = griglia();
      });
    }
  };
})();
