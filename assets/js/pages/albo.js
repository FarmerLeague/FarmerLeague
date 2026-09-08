/* =========================================================
   PAGINA ALBO D'ORO
   Palmarès, linea del tempo delle stagioni, storico delle
   squadre che hanno partecipato e organigramma della lega.
   ========================================================= */
FL.pages.albo = (function () {

  function trofeoMini(colore, n, etichetta) {
    if (!n) return "";
    return '<span class="badge" style="background:rgba(255,255,255,.06);color:' + colore + '">' +
      n + ' ' + etichetta + (n > 1 ? 'i' : '') + '</span>';
  }

  /* --- Una stagione della linea del tempo --- */
  function stagione(s, indice) {
    var campione = FL.data.team(s.campione.teamId);
    var altre = [];
    if (s.secondo) altre.push(['Secondo', s.secondo.nome]);
    if (s.terzo) altre.push(['Terzo', s.terzo.nome]);
    if (s.coppa && s.coppa.vincitore) altre.push(['Coppa', s.coppa.vincitore.nome]);
    if (s.champions && s.champions.vincitore) altre.push(['Champions', s.champions.vincitore.nome]);

    return '<article class="stagione" data-rivela style="--ritardo:' + (indice * 55) + 'ms">' +
      '<span class="stagione__punto" aria-hidden="true"></span>' +
      '<div class="stagione__anno num">' + FL.ui.esc(s.stagione) + '</div>' +
      '<div class="stagione__card">' +
        '<div class="stagione__vincitore">' +
          FL.ui.stemma(campione, 54) +
          '<div><h3>' + FL.ui.esc(s.campione.nome) + '</h3>' +
          '<span style="color:var(--oro);font-weight:600">' + FL.ui.esc(s.campione.owner || campione.owner) + '</span>' +
          (s.campione.punti ? '<span style="color:var(--testo-mute)"> · ' + s.campione.punti + ' punti' +
            (s.campione.fantapunti ? ', ' + s.campione.fantapunti + ' fantapunti' : '') + '</span>' : '') +
          '</div>' +
          '<span class="badge badge--oro" style="margin-left:auto">Campione</span>' +
        '</div>' +
        (altre.length ? '<div class="podio">' + altre.map(function (v) {
          return '<div><span>' + v[0] + '</span>' + FL.ui.esc(v[1]) + '</div>';
        }).join("") + '</div>' : '') +
        '<button class="btn btn--fantasma btn--piccolo" type="button" data-apri="' + s.anno + '" ' +
          'style="margin-top:var(--sp-4)" aria-expanded="false">Classifica completa</button>' +
        '<div id="cls-' + s.anno + '" hidden style="margin-top:var(--sp-4)"></div>' +
      '</div>' +
      '</article>';
  }

  function tabellaStagione(s) {
    return '<div class="tabella-wrap"><table class="tabella" style="min-width:420px">' +
      '<thead><tr><th style="width:44px">Pos</th><th>Squadra</th><th>Fantallenatore</th>' +
      '<th>Fantapunti</th><th>Punti</th></tr></thead><tbody>' +
      s.classifica.map(function (r) {
        var t = FL.data.team(r.teamId);
        return '<tr><td><span class="pos num"' + (r.pos === 1 ? ' data-zona="titolo"' : '') + '>' + r.pos + '</span></td>' +
          '<td><span class="squadra-riga">' + FL.ui.stemma(t, 24) +
          '<span class="squadra-riga__nome">' + FL.ui.esc(r.nome) + '</span></span></td>' +
          '<td class="debole">' + FL.ui.val(r.owner) + '</td>' +
          '<td class="num fanta">' + FL.ui.val(r.fantapunti) + '</td>' +
          '<td class="pt num">' + FL.ui.val(r.punti) + '</td></tr>';
      }).join("") +
      '</tbody></table></div>';
  }

  /* --- Bacheca: palmarès di tutte le squadre --- */
  function bacheca() {
    return '<div class="stat-griglia">' + FL.data.palmares().slice(0, 8).map(function (p) {
      var t = FL.data.team(p.teamId);
      var storica = FL.data.teamsStorico.some(function (s) { return s.id === p.teamId; });
      return '<article class="stat-card" style="display:flex;align-items:center;gap:var(--sp-4)">' +
        FL.ui.stemma(t, 42) +
        '<div style="min-width:0"><div class="stat-card__nome" style="font-size:1.2rem">' + FL.ui.esc(t.nome) + '</div>' +
        '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px">' +
          trofeoMini("var(--oro)", p.scudetti, "scudett") +
          trofeoMini("var(--ciano)", p.coppe, "copp") +
          trofeoMini("var(--rosa)", p.champions, "champions") +
        '</div>' +
        (storica ? '<div class="stat-card__dett">non più iscritta</div>' : '') +
        '</div>' +
        '<span class="num" style="margin-left:auto;font-family:var(--display);font-size:2.2rem;color:var(--oro)">' +
        p.scudetti + '</span></article>';
    }).join("") + '</div>';
  }

  /* --- Storico delle squadre partecipanti --- */
  function storico() {
    var righe = FL.data.tutteLeSquadre().map(function (t) {
      var p = FL.data.palmares().find(function (x) { return x.teamId === t.id; }) ||
        { scudetti: 0, coppe: 0, champions: 0 };
      var storica = typeof t.dal === "string";
      return '<tr><td><span class="squadra-riga">' + FL.ui.stemma(t, 26) +
        '<span style="min-width:0"><span class="squadra-riga__nome">' + FL.ui.esc(t.nome) + '</span>' +
        (t.nomiStorici ? '<span class="squadra-riga__owner">' + FL.ui.esc(t.nomiStorici) + '</span>' : '') +
        '</span></span></td>' +
        '<td class="debole" style="text-align:left">' + FL.ui.esc(t.owner) + '</td>' +
        '<td class="debole">' + (storica ? FL.ui.esc(t.dal) : FL.ui.val(t.dal) + "–oggi") + '</td>' +
        '<td class="num">' + p.scudetti + '</td>' +
        '<td class="num">' + p.coppe + '</td>' +
        '<td class="num">' + p.champions + '</td></tr>';
    }).join("");

    return '<section class="pannello"><div class="pannello__testa"><h3>Squadre partecipanti</h3>' +
      '<span class="meta">dalla fondazione a oggi</span></div>' +
      '<div class="tabella-wrap"><table class="tabella" style="min-width:640px">' +
      '<thead><tr><th style="text-align:left">Squadra</th><th style="text-align:left">Fantallenatore</th>' +
      '<th>Anni</th><th>Scudetti</th><th>Coppe</th><th>Champions</th></tr></thead>' +
      '<tbody>' + righe + '</tbody></table></div></section>';
  }

  function organigramma() {
    var o = FL.config.organigramma;
    if (!o) return "";
    function voce(ruolo, nome) {
      return '<div><span style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--testo-mute);display:block">' +
        ruolo + '</span><b>' + FL.ui.esc(nome) + '</b></div>';
    }
    return '<section class="pannello" style="margin-top:var(--sp-5)"><div class="pannello__testa">' +
      '<h3>Organigramma</h3><span class="meta">' + FL.ui.esc(FL.config.lega.sede || "") + '</span></div>' +
      '<div class="pannello__corpo" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:var(--sp-5)">' +
        voce("Presidente", o.presidente) +
        voce("Vicepresidente", o.vicepresidente) +
        voce("Tesoriere", o.tesoriere) +
        voce("Assemblea dei fondatori", o.fondatori.join(", ")) +
      '</div></section>';
  }

  return {
    titolo: function () { return "Albo d'Oro"; },
    render: function () {
      var ultimo = FL.data.campioneInCarica();

      if (!FL.data.honours.length) {
        return '<section class="albo-hero"><div class="wrap">' +
          '<h1>Albo d\'Oro</h1><p>Nessuna stagione registrata.</p></div></section>';
      }

      var campione = FL.data.team(ultimo.campione.teamId);
      var stagioni = FL.data.honours.length;

      return '<section class="albo-hero"><div class="wrap">' +
        '<span class="kicker kicker--oro" style="justify-content:center">Dal ' + FL.config.lega.fondazione + '</span>' +
        '<h1>Albo d\'Oro</h1>' +
        '<p>' + stagioni + ' stagioni di ' + FL.ui.esc(FL.config.lega.nome) +
        ': chi ha alzato la coppa, chi c\'è andato vicino e chi aspetta ancora il suo turno.</p>' +
      '</div></section>' +

      '<section class="sezione--stretta" style="padding-block:var(--sp-7)"><div class="wrap">' +
        '<div class="campione-carica">' +
          FL.ui.trofeo(96) +
          '<div><span class="badge badge--oro">Campione in carica</span>' +
          '<h3 style="margin-top:12px">' + FL.ui.esc(ultimo.campione.nome) + '</h3>' +
          '<div class="owner">' + FL.ui.esc(ultimo.campione.owner) + ' · stagione ' + FL.ui.esc(ultimo.stagione) +
          (ultimo.campione.punti ? ' · ' + ultimo.campione.punti + ' punti' : '') + '</div>' +
          (ultimo.coppa && ultimo.coppa.vincitore && ultimo.coppa.vincitore.teamId === ultimo.campione.teamId
            ? '<div style="color:var(--ciano);font-weight:600;margin-top:6px">Doppietta: campionato e coppa</div>' : '') +
          '</div>' +
          FL.ui.stemma(campione, 96) +
        '</div>' +

        '<div class="sezione-testa" style="margin-top:var(--sp-8)"><div>' +
          '<span class="kicker kicker--oro">Bacheca</span>' +
          '<h2>Palmarès della lega</h2>' +
          '<p>Scudetti, coppe e champions di ogni squadra, comprese quelle che nel frattempo hanno cambiato nome.</p></div></div>' +
        bacheca() +

        '<div class="sezione-testa" style="margin-top:var(--sp-8)"><div>' +
          '<span class="kicker kicker--oro">Stagione per stagione</span>' +
          '<h2>La storia della lega</h2>' +
          '<p>Ogni stagione con podio, coppa e champions. Apri la classifica completa per vedere tutti i verdetti.</p></div></div>' +
        '<div class="linea-tempo">' + FL.data.honours.map(stagione).join("") + '</div>' +

        '<div class="sezione-testa" style="margin-top:var(--sp-8)"><div>' +
          '<span class="kicker kicker--oro">Archivio</span>' +
          '<h2>Chi ha giocato in questa lega</h2></div></div>' +
        storico() +
        organigramma() +
      '</div></section>';
    },

    mount: function () {
      /* Apertura delle classifiche storiche */
      document.querySelectorAll("[data-apri]").forEach(function (b) {
        b.addEventListener("click", function () {
          var anno = b.getAttribute("data-apri");
          var box = document.getElementById("cls-" + anno);
          if (!box.innerHTML) {
            var s = FL.data.honours.find(function (x) { return String(x.anno) === anno; });
            box.innerHTML = tabellaStagione(s);      // costruita solo alla prima apertura
          }
          var aperto = !box.hidden;
          box.hidden = aperto;
          b.setAttribute("aria-expanded", aperto ? "false" : "true");
          b.textContent = aperto ? "Classifica completa" : "Chiudi la classifica";
        });
      });

      /* La linea del tempo si scopre man mano: è un racconto in sequenza */
      var elementi = document.querySelectorAll("[data-rivela]");
      if (!("IntersectionObserver" in window) ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      elementi.forEach(function (el) {
        el.style.opacity = 0;
        el.style.transform = "translateY(14px)";
        el.style.transition = "opacity .5s ease var(--ritardo), transform .5s ease var(--ritardo)";
      });
      var obs = new IntersectionObserver(function (voci) {
        voci.forEach(function (v) {
          if (!v.isIntersecting) return;
          v.target.style.opacity = 1;
          v.target.style.transform = "none";
          obs.unobserve(v.target);
        });
      }, { rootMargin: "0px 0px -10% 0px" });
      elementi.forEach(function (el) { obs.observe(el); });
    }
  };
})();

/* --- Pagina di fallback --- */
FL.pages.nonTrovata = {
  titolo: function () { return "Pagina non trovata"; },
  render: function () {
    return '<section class="sezione"><div class="wrap"><div class="vuoto">' +
      '<h3>Questa pagina non esiste</h3>' +
      '<p>Il collegamento potrebbe essere vecchio o scritto male.</p>' +
      '<a class="btn btn--verde btn--piccolo" style="margin-top:16px" href="#/">Torna alla home</a>' +
      '</div></div></section>';
  }
};
