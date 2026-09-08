/* =========================================================
   PAGINA ROSE
   Percorsi: #/rose  e  #/rose/birrareal
   Due modalità: se i ruoli sono importati mostra i quattro
   reparti, altrimenti la rosa come lista di acquisti.
   ========================================================= */
FL.pages.rose = (function () {

  function squadraAttiva(params) {
    var id = params && params.id;
    if (id && FL.data.teams.some(function (t) { return t.id === id; })) return id;
    return FL.data.teams[0].id;
  }

  function rigaGiocatore(g, indice) {
    var nome = g.nome || "Nome da importare";
    var sotto = g.club || (g.idFanta ? "Fantacalcio ID " + g.idFanta : "—");
    return '<div class="giocatore">' +
      '<span class="giocatore__num num">' + (g.numero || indice) + '</span>' +
      '<span style="min-width:0"><span class="giocatore__nome"' +
        (g.nome ? '' : ' style="color:var(--testo-mute);font-style:italic"') + '>' + FL.ui.esc(nome) + '</span>' +
      '<span class="giocatore__club">' + FL.ui.esc(sotto) + '</span></span>' +
      '</div>';
  }

  function vistaReparti(teamId) {
    return '<div class="reparti">' + FL.data.reparti.map(function (r) {
      var giocatori = FL.data.rosaPerReparto(teamId, r.ruolo);
      return '<section class="reparto" style="--r-col:' + r.colore + '">' +
        '<div class="reparto__testa"><h3>' + r.nome + '</h3><span class="num">' + giocatori.length + '</span></div>' +
        (giocatori.length
          ? giocatori.map(function (g, i) { return rigaGiocatore(g, i + 1); }).join("")
          : '<p style="color:var(--testo-mute);font-size:var(--t-sm)">Nessun giocatore in questo reparto.</p>') +
        '</section>';
    }).join("") + '</div>';
  }

  function vistaAcquisti(teamId) {
    var rosa = FL.data.rosaDi(teamId).slice();
    var meta = Math.ceil(rosa.length / 2);
    function colonna(lista, da) {
      return '<div>' + lista.map(function (g, i) { return rigaGiocatore(g, da + i + 1); }).join("") + '</div>';
    }
    return '<section class="pannello">' +
      '<div class="pannello__testa"><h3>Rosa</h3>' +
      '<span class="meta">' + rosa.length + ' giocatori</span></div>' +
      '<div class="pannello__corpo" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:var(--sp-4)">' +
        colonna(rosa.slice(0, meta), 0) + colonna(rosa.slice(meta), meta) +
      '</div>' +
      '</section>';
  }

  return {
    titolo: function (p) { return "Rose · " + FL.data.team(squadraAttiva(p)).nome; },
    render: function (params) {
      var id = squadraAttiva(params);
      var t = FL.data.team(id);
      var rosa = FL.data.rosaDi(id);
      var conRuoli = FL.data.ruoliDisponibili(id);
      var iniziato = FL.data.campionatoIniziato();
      var riga = FL.data.classifica().find(function (r) { return r.teamId === id; });
      var posizione = FL.data.classifica().findIndex(function (r) { return r.teamId === id; }) + 1;

      return FL.components.testaPagina({
        kicker: "Le squadre",
        kickerMod: "rosso",
        titolo: "Rose",
        testo: "Scegli una squadra per vedere chi ha portato a casa all'asta.",
        fondo: "Rose"
      }) +
      '<section class="sezione--stretta" style="padding-block:var(--sp-6)"><div class="wrap">' +
        '<div class="selettore-squadre">' +
          FL.data.teams.map(function (s) {
            return FL.components.tileSquadra(s, s.id === id, "#/rose/" + s.id);
          }).join("") +
        '</div>' +

        '<div class="testa-squadra" style="--c1:' + t.colori[0] + '">' +
          FL.ui.stemma(t, 84) +
          '<div><h2>' + FL.ui.esc(t.nome) + '</h2>' +
            '<div class="meta">' +
              '<span>Proprietario <b>' + FL.ui.esc(t.owner) + '</b></span>' +
              '<span>Giocatori <b>' + rosa.length + '</b></span>' +
              (iniziato && riga ? '<span>Posizione <b>' + posizione + 'ª</b></span><span>Punti <b>' + riga.punti + '</b></span>' : '') +
            '</div>' +
          '</div>' +
          '<a class="btn btn--fantasma btn--piccolo" style="margin-left:auto" href="#/giovanili/' + t.id + '">Vedi le giovanili</a>' +
        '</div>' +

        (conRuoli ? '' : FL.ui.notaDati(
          "Il file della lega contiene identificativo e prezzo di ogni giocatore, non il nome. " +
          "Con il file Quotazioni di Fantacalcio (colonne Id, Nome, Ruolo, Squadra) compilo nomi e reparti in un colpo solo.")) +

        (conRuoli ? vistaReparti(id) : vistaAcquisti(id)) +
      '</div></section>';
    }
  };
})();
