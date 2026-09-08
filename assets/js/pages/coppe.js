/* =========================================================
   PAGINE DELLE COPPE
   #/coppe            elenco delle competizioni
   #/coppe/champions  dettaglio di una competizione
   ========================================================= */
FL.pages.coppe = (function () {

  function nome(id) { return FL.data.team(id).nome; }

  /* --- scheda regolamento, come nel pannello della lega --- */
  function scheda(c) {
    return '<div class="pannello"><div class="pannello__testa"><h3>Come funziona</h3>' +
      '<span class="badge badge--neutro">' + FL.ui.esc(c.sottotitolo) + '</span></div>' +
      '<div class="pannello__corpo">' +
      '<p style="color:var(--testo-soft);max-width:70ch">' + FL.ui.esc(c.descrizione) + '</p>' +
      '<div style="display:grid;gap:0;margin-top:var(--sp-4)">' +
      c.scheda.map(function (r, i) {
        return '<div style="display:flex;justify-content:space-between;gap:var(--sp-4);padding:10px 0;' +
          (i ? 'border-top:1px solid var(--linea);' : '') + '">' +
          '<span style="font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--testo-mute)">' +
          FL.ui.esc(r[0]) + '</span><b style="text-align:right">' + FL.ui.esc(r[1]) + '</b></div>';
      }).join("") + '</div>' +
      (c.nota ? '<p style="margin:var(--sp-4) 0 0;font-size:var(--t-sm);color:var(--oro)">' +
        FL.ui.esc(c.nota) + '</p>' : '') +
      '</div></div>';
  }

  /* --- partita di coppa --- */
  function partita(p) {
    if (!p.casa || !p.ospite) {
      return '<div class="partita" style="justify-items:center">' +
        '<span style="grid-column:1/-1;text-align:center;color:var(--testo-mute)">' +
        FL.ui.esc(p.etichetta || "Accoppiamento da definire") + '</span></div>';
    }
    return FL.components.rigaPartita({
      casa: p.casa, ospite: p.ospite,
      golCasa: p.golCasa, golOspite: p.golOspite,
      fantaCasa: p.fantaCasa, fantaOspite: p.fantaOspite,
      giocata: p.giocata
    }, { stemma: 30 });
  }

  /* ================= Coppa Italia ================= */
  function formula1(c, s) {
    var righe = s.classifica.map(function (r, i) {
      var t = FL.data.team(r.teamId);
      return '<tr><td><span class="pos num"' + (i === 0 ? ' data-zona="titolo"' : '') + '>' + (i + 1) + '</span></td>' +
        '<td><a class="squadra-riga" href="#/rose/' + t.id + '">' + FL.ui.stemma(t, 26) +
        '<span class="squadra-riga__nome">' + FL.ui.esc(t.nome) + '</span></a></td>' +
        '<td class="num debole">' + r.giornate + '</td>' +
        '<td class="num">' + r.vittorie + '</td>' +
        '<td class="num fanta">' + (r.fantapunti || "—") + '</td>' +
        '<td class="pt num">' + r.punti + '</td></tr>';
    }).join("");

    var turni = s.turni.map(function (t) {
      if (!t.giocata) {
        return '<div class="giornata-btn num" style="width:auto;padding:0 12px" title="da giocare">' +
          t.serieA + 'ª</div>';
      }
      var podio = t.ordine.slice(0, 3).map(function (r, i) {
        return (i + 1) + "° " + nome(r.teamId);
      }).join(" · ");
      return '<div class="partita" style="display:block">' +
        '<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">' +
        '<b>' + t.serieA + 'ª di Serie A</b>' +
        '<span style="color:var(--testo-soft);font-size:var(--t-sm)">' + FL.ui.esc(podio) + '</span></div></div>';
    }).join("");

    return '<div class="pannello" style="margin-top:var(--sp-5)">' +
      '<div class="pannello__testa"><h3>Classifica</h3>' +
      '<span class="meta">' + s.giocate + ' giornate su ' + c.giornateSerieA.length + '</span></div>' +
      '<div class="tabella-wrap"><table class="tabella" style="min-width:520px">' +
      '<thead><tr><th style="width:46px">Pos</th><th>Squadra</th><th>Giornate</th>' +
      '<th>Primi posti</th><th>Fantapunti</th><th>Punti</th></tr></thead>' +
      '<tbody>' + righe + '</tbody></table></div></div>' +
      (s.giocate
        ? '<div class="pannello" style="margin-top:var(--sp-5)"><div class="pannello__testa">' +
          '<h3>Giornata per giornata</h3></div><div class="pannello__corpo tabellone">' + turni + '</div></div>'
        : '');
  }

  /* ================= Champions ================= */
  function gironi(c, s) {
    var tabelle = Object.keys(s.gironi).map(function (g) {
      var righe = s.gironi[g].map(function (r, i) {
        var t = FL.data.team(r.teamId);
        return '<tr><td><span class="pos num"' + (i < 2 ? ' data-zona="playoff"' : '') + '>' + (i + 1) + '</span></td>' +
          '<td><a class="squadra-riga" href="#/rose/' + t.id + '">' + FL.ui.stemma(t, 26) +
          '<span class="squadra-riga__nome">' + FL.ui.esc(t.nome) + '</span></a></td>' +
          '<td class="num debole">' + r.g + '</td><td class="num">' + r.v + '</td>' +
          '<td class="num">' + r.n + '</td><td class="num">' + r.p + '</td>' +
          '<td class="num debole">' + r.gf + ':' + r.gs + '</td>' +
          '<td class="num fanta">' + (r.fantapunti || "—") + '</td>' +
          '<td class="pt num">' + r.punti + '</td></tr>';
      }).join("");
      return '<div class="pannello"><div class="pannello__testa"><h3>Girone ' + g + '</h3>' +
        '<span class="meta">passano le prime due</span></div>' +
        '<div class="tabella-wrap"><table class="tabella" style="min-width:480px">' +
        '<thead><tr><th style="width:46px">Pos</th><th>Squadra</th><th>G</th><th>V</th><th>N</th><th>P</th>' +
        '<th>Gol</th><th>Fantapunti</th><th>Punti</th></tr></thead><tbody>' + righe + '</tbody></table></div></div>';
    }).join("");

    var calendario = s.giornate.map(function (g) {
      return '<div style="margin-bottom:var(--sp-5)">' +
        '<div class="kicker kicker--rosa" style="margin-bottom:var(--sp-3)">Giornata ' + g.numero +
        ' · ' + g.serieA + 'ª di Serie A</div>' +
        '<div class="tabellone">' + g.partite.map(partita).join("") + '</div></div>';
    }).join("");

    return '<div style="display:grid;gap:var(--sp-5);margin-top:var(--sp-5)">' + tabelle + '</div>' +
      '<div class="sezione-testa" style="margin-top:var(--sp-7)"><div>' +
      '<span class="kicker kicker--rosa">Fase a gironi</span><h2>Il calendario</h2></div></div>' +
      calendario +
      fasi(s.fasi);
  }

  /* ================= Turni finali ================= */
  function fasi(elenco) {
    if (!elenco || !elenco.length) return "";
    return elenco.map(function (f) {
      return '<div class="pannello" style="margin-top:var(--sp-5)">' +
        '<div class="pannello__testa"><h3>' + FL.ui.esc(f.nome) + '</h3>' +
        '<span class="meta">' + (f.andataRitorno ? "andata e ritorno · " : "gara secca · ") +
        f.serieA.map(function (s) { return s + "ª"; }).join(" e ") + ' di Serie A</span></div>' +
        '<div class="pannello__corpo tabellone">' +
        f.partite.map(function (p) {
          var righe = p.gare.map(partita).join("");
          var esito = p.giocata
            ? '<div style="text-align:center;padding-top:8px;color:var(--testo-soft);font-size:var(--t-sm)">' +
              (p.andataRitorno ? 'Totale ' + p.totale + ' · ' : '') +
              (p.vincente ? 'passa <b style="color:var(--verde)">' + FL.ui.esc(nome(p.vincente)) + '</b>'
                          : 'parità: si decide ai supplementari') + '</div>'
            : '';
          return '<div style="margin-bottom:var(--sp-4)">' + righe + esito + '</div>';
        }).join("") +
        '</div></div>';
    }).join("");
  }

  /* ================= Supercoppa ================= */
  function eliminazione(c, s) {
    var qual = c.qualificate ? '<div class="pannello" style="margin-top:var(--sp-5)">' +
      '<div class="pannello__testa"><h3>Le qualificate</h3></div>' +
      '<div class="pannello__corpo" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:var(--sp-4)">' +
      c.qualificate.map(function (q) {
        var t = FL.data.team(q.teamId);
        return '<div style="display:flex;align-items:center;gap:12px">' + FL.ui.stemma(t, 38) +
          '<div><b>' + FL.ui.esc(t.nome) + '</b>' +
          '<span style="display:block;font-size:var(--t-xs);color:var(--testo-mute)">' +
          FL.ui.esc(q.titolo) + '</span></div></div>';
      }).join("") + '</div></div>' : "";
    return qual + fasi(s.fasi);
  }

  /* ================= elenco competizioni ================= */
  return {
    titolo: function (p) {
      var c = p && p.id ? FL.data.competizione(p.id) : null;
      return c ? c.nome : "Competizioni";
    },
    render: function (params) {
      var c = params && params.id ? FL.data.competizione(params.id) : null;

      /* --- elenco --- */
      if (!c) {
        return FL.components.testaPagina({
          kicker: "Oltre il campionato",
          kickerMod: "rosa",
          titolo: "Le coppe",
          testo: "Tre competizioni oltre al campionato: la Coppa Italia a punti, la Champions League delle migliori otto e la Supercoppa Farmeriana.",
          fondo: "Coppe"
        }) +
        '<section class="sezione--stretta" style="padding-block:var(--sp-6)"><div class="wrap">' +
          '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:var(--sp-5)">' +
          FL.data.competizioni.map(function (comp) {
            return '<a class="pannello" href="#/coppe/' + comp.id + '" style="display:block">' +
              '<div class="pannello__testa"><h3 style="color:' + comp.colore + '">' + FL.ui.esc(comp.nome) + '</h3></div>' +
              '<div class="pannello__corpo">' +
              '<span class="badge badge--neutro">' + FL.ui.esc(comp.sottotitolo) + '</span>' +
              '<p style="margin:var(--sp-4) 0 0;color:var(--testo-soft);font-size:var(--t-sm)">' +
              FL.ui.esc(comp.descrizione) + '</p></div>' +
              '<div class="pannello__piede"><span class="meta">' + FL.ui.esc(comp.scheda[0][1]) + '</span>' +
              '<span style="color:' + comp.colore + ';font-weight:700">Apri →</span></div></a>';
          }).join("") +
          '</div>' +
        '</div></section>';
      }

      /* --- dettaglio --- */
      var s = FL.coppe.stato(c);
      var corpo = c.tipo === "formula1" ? formula1(c, s)
                : c.tipo === "gironi" ? gironi(c, s)
                : eliminazione(c, s);

      return FL.components.testaPagina({
        kicker: "Competizione",
        kickerMod: "rosa",
        titolo: c.nome,
        testo: c.sottotitolo,
        fondo: "Coppe"
      }) +
      '<section class="sezione--stretta" style="padding-block:var(--sp-6)"><div class="wrap">' +
        '<a class="btn btn--fantasma btn--piccolo" style="margin-bottom:var(--sp-5)" href="#/coppe">← Tutte le competizioni</a>' +
        scheda(c) +
        corpo +
        '<p style="margin-top:var(--sp-6);color:var(--testo-mute);font-size:var(--t-sm);max-width:72ch">' +
        'I risultati di questa competizione si calcolano dai fantapunti del campionato: in una giornata ' +
        'di Serie A ogni squadra ha un solo punteggio, valido per tutte le competizioni. Aggiornando i ' +
        'risultati di campionato si aggiorna anche questa pagina.</p>' +
      '</div></section>';
    }
  };
})();
