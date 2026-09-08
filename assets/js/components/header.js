/* =========================================================
   INTESTAZIONE: barra notizie + navigazione
   ========================================================= */
FL.components = FL.components || {};

FL.components.header = (function () {
  var VOCI = [
    { href: "#/",           testo: "Home",       sezione: "/" },
    { href: "#/classifica", testo: "Classifica", sezione: "/classifica" },
    { href: "#/calendario", testo: "Calendario", sezione: "/calendario" },
    { href: "#/notizie",    testo: "Notizie",    sezione: "/notizie" },
    { href: "#/rose",       testo: "Rose",       sezione: "/rose" },
    { href: "#/giovanili",  testo: "Giovanili",  sezione: "/giovanili" },
    { href: "#/albo-doro",  testo: "Albo d'Oro", sezione: "/albo-doro" }
  ];

  function ticker() {
    var voci = FL.data.newsOrdinate().slice(0, 5).map(function (a) {
      return '<a class="ticker__voce" href="#/notizie/' + a.slug + '">' +
        '<b>' + FL.ui.esc(FL.data.categoria(a.categoria).nome) + '</b>' +
        FL.ui.esc(a.titolo) + '</a>';
    });
    var ultima = FL.data.ultimaGiornata();
    var prossima = FL.data.prossimaGiornata();
    if (ultima) {
      voci.unshift('<a class="ticker__voce" href="#/calendario/' + ultima.numero + '">' +
        '<b>Risultati</b>Giornata ' + ultima.numero + ' completata</a>');
    } else if (prossima) {
      voci.unshift('<a class="ticker__voce" href="#/calendario/' + prossima.numero + '">' +
        '<b>Si parte</b>Prima giornata sulla ' + prossima.serieA + 'ª di Serie A</a>');
    }
    var gruppo = '<div class="ticker__gruppo">' + voci.join("") + '</div>';
    return '<div class="ticker"><div class="ticker__nastro">' + gruppo + gruppo + '</div></div>';
  }

  function navbar() {
    var prossima = FL.data.prossimaGiornata();
    return '' +
      '<div class="wrap navbar">' +
        '<a class="marchio" href="#/">' +
          FL.ui.marchio() +
          '<span><span class="marchio__sigla">Fanta<span>lega</span></span>' +
          '<span class="marchio__sotto">' + FL.ui.esc(FL.config.stagione.etichetta) + '</span></span>' +
        '</a>' +
        '<button class="hamburger" aria-label="Apri il menu" aria-expanded="false">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
        '<nav class="nav-menu" id="nav-menu">' +
          VOCI.map(function (v) {
            return '<a class="nav-link" data-sezione="' + v.sezione + '" href="' + v.href + '">' + v.testo + '</a>';
          }).join("") +
          (prossima ? '<span class="nav-giornata"><i></i>Giornata ' + prossima.numero + ' · ' +
            (prossima.data || prossima.serieA + 'ª Serie A') + '</span>' : '') +
        '</nav>' +
      '</div>';
  }

  return {
    monta: function (el) {
      el.innerHTML = ticker() + '<div class="site-header">' + navbar() + '</div>';

      var burger = el.querySelector(".hamburger");
      burger.addEventListener("click", function () {
        var aperto = document.body.classList.toggle("menu-aperto");
        burger.setAttribute("aria-expanded", aperto ? "true" : "false");
        burger.setAttribute("aria-label", aperto ? "Chiudi il menu" : "Apri il menu");
      });

      el.querySelectorAll(".nav-link").forEach(function (a) {
        a.addEventListener("click", function () {
          document.body.classList.remove("menu-aperto");
          burger.setAttribute("aria-expanded", "false");
        });
      });

      FL.router.onCambio(function (path) {
        el.querySelectorAll(".nav-link").forEach(function (a) {
          var s = a.getAttribute("data-sezione");
          var attivo = s === "/" ? path === "/" : path.indexOf(s) === 0;
          a.classList.toggle("attivo", attivo);
        });
      });
    }
  };
})();
