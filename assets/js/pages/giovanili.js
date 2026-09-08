/* =========================================================
   PAGINA GIOVANILI
   Percorsi: #/giovanili  e  #/giovanili/alfa
   ========================================================= */
FL.pages.giovanili = (function () {

  function squadraAttiva(params) {
    var id = params && params.id;
    if (id && FL.data.teams.some(function (t) { return t.id === id; })) return id;
    return FL.data.teams[0].id;
  }

  var RUOLI = { POR: "Portiere", DIF: "Difensore", CEN: "Centrocampista", ATT: "Attaccante" };

  function cardGiovane(g) {
    return '<article class="card-giovane">' +
      '<span class="card-giovane__eta num">' + FL.ui.val(g.eta) + '</span>' +
      (g.foto
        ? '<img class="card-giovane__foto" src="' + FL.ui.esc(g.foto) + '" alt="" style="object-fit:cover">'
        : '<div class="card-giovane__foto">foto<br>da inserire</div>') +
      '<h4>' + FL.ui.esc(g.nome) + '</h4>' +
      '<div class="card-giovane__meta">' + (RUOLI[g.ruolo] || g.ruolo) + ' · ' + FL.ui.val(g.club) + '</div>' +
      '<div class="card-giovane__stats">' +
        '<div><b class="num">' + FL.ui.val(g.presenze) + '</b><small>Presenze</small></div>' +
        '<div><b class="num">' + FL.ui.val(g.gol) + '</b><small>Gol</small></div>' +
        '<div><b class="num">' + FL.ui.val(g.media) + '</b><small>Media</small></div>' +
      '</div>' +
      (g.descrizione
        ? '<p style="font-size:var(--t-xs);color:var(--testo-mute);margin:12px 0 0">' + FL.ui.esc(g.descrizione) + '</p>'
        : '') +
      '</article>';
  }

  return {
    titolo: function (p) { return "Giovanili · " + FL.data.team(squadraAttiva(p)).nome; },
    render: function (params) {
      var id = squadraAttiva(params);
      var t = FL.data.team(id);
      var vivaio = FL.data.vivaioDi(id);
      var etaMedia = vivaio.filter(function (g) { return g.eta; });
      etaMedia = etaMedia.length
        ? (etaMedia.reduce(function (s, g) { return s + g.eta; }, 0) / etaMedia.length).toFixed(1)
        : "—";

      return FL.components.testaPagina({
        kicker: "Il vivaio",
        kickerMod: "rosa",
        titolo: "Giovanili",
        testo: "Ogni squadra della lega ha la sua rosa di giovani: qui si tiene traccia di chi cresce e di chi è pronto al salto.",
        fondo: "Under"
      }) +
      '<section class="sezione--stretta" style="padding-block:var(--sp-6)"><div class="wrap">' +
        '<div class="selettore-squadre">' +
          FL.data.teams.map(function (s) {
            return FL.components.tileSquadra(s, s.id === id, "#/giovanili/" + s.id);
          }).join("") +
        '</div>' +

        '<div class="testa-squadra" style="--c1:' + t.colori[0] + '">' +
          FL.ui.stemma(t, 74) +
          '<div><h2>Vivaio ' + FL.ui.esc(t.nome) + '</h2>' +
            '<div class="meta">' +
              '<span>Proprietario <b>' + FL.ui.esc(t.owner) + '</b></span>' +
              '<span>Giovani tesserati <b>' + vivaio.length + '</b></span>' +
              (vivaio.length ? '<span>Età media <b>' + etaMedia + '</b></span>' : '') +
            '</div></div>' +
          '<a class="btn btn--fantasma btn--piccolo" style="margin-left:auto" href="#/rose/' + t.id + '">Vedi la prima squadra</a>' +
        '</div>' +

        (vivaio.length ? '' : FL.ui.notaDati("Sezione pronta ma vuota: mandami i giovani di ogni squadra, anche solo nome e ruolo, e le schede si riempiono da sole.")) +

        (vivaio.length
          ? '<div class="griglia-giovani">' + vivaio.map(cardGiovane).join("") + '</div>'
          : '<div class="vuoto"><h3>Vivaio ancora da compilare</h3>' +
            '<p>Per ogni giovane bastano nome e ruolo; età, squadra, valore, statistiche, ' +
            'descrizione e foto si aggiungono quando ci sono.</p>' +
            '<a class="btn btn--verde btn--piccolo" style="margin-top:16px" href="#/rose/' + id + '">Vedi la prima squadra</a></div>') +
      '</div></section>';
    }
  };
})();
