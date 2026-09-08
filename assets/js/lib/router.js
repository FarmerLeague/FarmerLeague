/* =========================================================
   ROUTER
   ---------------------------------------------------------
   Navigazione a segmenti dopo il cancelletto: #/classifica,
   #/notizie/slug-articolo, #/rose/alfa …
   Funziona anche aprendo il file in locale, senza server.
   ========================================================= */
FL.router = (function () {
  var rotte = [];
  var contenitore = null;
  var alCambio = [];
  /* Percorso tenuto in memoria: serve quando la pagina è dentro un
     riquadro che non lascia cambiare l'indirizzo (anteprime, iframe). */
  var interno = null;

  function pulisci(h) {
    h = String(h || "").replace(/^#/, "");
    if (!h || h === "/") return "/";
    return h.replace(/\/+$/, "") || "/";
  }

  function percorso() {
    return interno || pulisci(location.hash);
  }

  function combacia(schema, path) {
    var a = schema.split("/").filter(Boolean);
    var b = path.split("/").filter(Boolean);
    if (a.length !== b.length) return null;
    var params = {};
    for (var i = 0; i < a.length; i++) {
      if (a[i][0] === ":") params[a[i].slice(1)] = decodeURIComponent(b[i]);
      else if (a[i] !== b[i]) return null;
    }
    return params;
  }

  function disegna() {
    var path = percorso();
    var trovata = null, params = {};
    for (var i = 0; i < rotte.length; i++) {
      var p = combacia(rotte[i].schema, path);
      if (p) { trovata = rotte[i]; params = p; break; }
    }
    var pagina = trovata ? trovata.pagina : FL.pages.nonTrovata;

    contenitore.innerHTML = '<div class="vista">' + pagina.render(params) + '</div>';
    document.title = (pagina.titolo ? pagina.titolo(params) + " · " : "") + FL.config.lega.nome;
    if (pagina.mount) pagina.mount(params);

    try { window.scrollTo(0, 0); } catch (e) { /* riquadro senza scorrimento */ }

    alCambio.forEach(function (fn) { fn(path, trovata ? trovata.sezione : null); });
  }

  return {
    aggiungi: function (schema, pagina, sezione) {
      rotte.push({ schema: schema, pagina: pagina, sezione: sezione || schema });
      return this;
    },
    onCambio: function (fn) { alCambio.push(fn); },
    vai: function (path) {
      path = pulisci(path);
      if (percorso() === path) return;
      interno = null;
      try { location.hash = path; } catch (e) { /* indirizzo bloccato */ }
      if (pulisci(location.hash) !== path) {   // l'indirizzo non è cambiato
        interno = path;                        // si prosegue in memoria
        disegna();
      }
    },
    percorso: percorso,
    avvia: function (el) {
      contenitore = el;
      window.addEventListener("hashchange", function () { interno = null; disegna(); });

      /* Tutti i collegamenti interni passano dal router invece che dal
         browser: dentro un iframe il browser li risolverebbe sull'indirizzo
         della pagina che ospita il sito. */
      document.addEventListener("click", function (e) {
        var a = e.target.closest ? e.target.closest('a[href^="#/"]') : null;
        if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
        e.preventDefault();
        FL.router.vai(a.getAttribute("href"));
      });

      disegna();
    }
  };
})();
