/* =========================================================
   STEMMI GENERATI E ICONE
   ---------------------------------------------------------
   Ogni squadra ha uno stemma disegnato con i suoi colori e la
   sua sigla. Appena una squadra ha il campo `logo` valorizzato
   con il percorso di un'immagine, viene usata quella.
   ========================================================= */
(function () {
  var contatore = 0;

  var FORME = {
    scudo:   'M50 3 L95 19 V50 C95 78 74 96 50 109 C26 96 5 78 5 50 V19 Z',
    rombo:   'M50 2 L97 56 L50 110 L3 56 Z',
    cerchio: 'M50 4 A52 52 0 1 1 49.9 4 Z'
  };

  function chiaro(hex) {
    var c = hex.replace("#", "");
    if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
    var r = parseInt(c.slice(0, 2), 16), g = parseInt(c.slice(2, 4), 16), b = parseInt(c.slice(4, 6), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) > 165;
  }

  function decoro(tipo, colore) {
    if (tipo === "banda") {
      return '<path d="M-10 78 L120 -10 L120 24 L-10 112 Z" fill="' + colore + '" opacity=".92"/>';
    }
    if (tipo === "meta") {
      return '<rect x="50" y="-5" width="60" height="125" fill="' + colore + '" opacity=".92"/>';
    }
    var s = '';
    for (var x = -10; x < 110; x += 26) {
      s += '<rect x="' + x + '" y="-5" width="13" height="125" fill="' + colore + '" opacity=".85"/>';
    }
    return s;
  }

  /* Stemma della squadra. `size` è la larghezza in pixel. */
  FL.ui.stemma = function (team, size) {
    size = size || 40;
    var h = Math.round(size * 1.12);
    if (team.logo) {
      return '<img class="stemma" src="' + FL.ui.esc(team.logo) + '" alt="Stemma ' +
        FL.ui.esc(team.nome) + '" width="' + size + '" height="' + h + '" style="object-fit:contain">';
    }
    var id = "cl" + (++contatore);
    var p = team.colori[0], s = team.colori[1] || "#111";
    var testo = chiaro(p) ? "#151230" : "#FFFFFF";
    var d = FORME[team.forma] || FORME.scudo;
    return '' +
      '<svg class="stemma" width="' + size + '" height="' + h + '" viewBox="0 0 100 112" role="img" aria-label="Stemma ' + FL.ui.esc(team.nome) + '">' +
      '<defs><clipPath id="' + id + '"><path d="' + d + '"/></clipPath></defs>' +
      '<g clip-path="url(#' + id + ')">' +
        '<rect width="100" height="112" fill="' + p + '"/>' +
        decoro(team.fascia, s) +
        '<rect width="100" height="112" fill="url(#g' + id + ')"/>' +
      '</g>' +
      '<defs><linearGradient id="g' + id + '" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#fff" stop-opacity=".22"/>' +
        '<stop offset="1" stop-color="#000" stop-opacity=".28"/></linearGradient></defs>' +
      '<path d="' + d + '" fill="none" stroke="rgba(255,255,255,.75)" stroke-width="3"/>' +
      '<text x="50" y="' + (team.forma === "cerchio" ? 68 : 70) + '" text-anchor="middle" ' +
        'font-family="Big Shoulders Display, Oswald, sans-serif" font-weight="800" font-size="38" ' +
        'fill="' + testo + '" letter-spacing="1">' + FL.ui.esc(team.sigla) + '</text>' +
      '</svg>';
  };

  /* Marchio della lega: pallone stilizzato + iniziale */
  FL.ui.marchio = function () {
    return '' +
      '<svg viewBox="0 0 100 112" aria-hidden="true">' +
      '<path d="M50 3 L95 19 V50 C95 78 74 96 50 109 C26 96 5 78 5 50 V19 Z" fill="#17D97F"/>' +
      '<path d="M50 3 L95 19 V50 C95 78 74 96 50 109 Z" fill="#0E9E5B"/>' +
      '<circle cx="50" cy="55" r="24" fill="#110E2A"/>' +
      '<path d="M50 37 L64 47 L59 64 H41 L36 47 Z" fill="#17D97F"/>' +
      '<path d="M50 3 L95 19 V50 C95 78 74 96 50 109 C26 96 5 78 5 50 V19 Z" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="4"/>' +
      '</svg>';
  };

  /* Trofeo per l'albo d'oro */
  FL.ui.trofeo = function (size, colore) {
    var c = colore || "url(#oroGrad)";
    return '' +
      '<svg class="trofeo" width="' + (size || 80) + '" viewBox="0 0 80 100" aria-hidden="true">' +
      '<defs><linearGradient id="oroGrad" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="#FFF0C9"/><stop offset=".55" stop-color="#FFC24B"/>' +
      '<stop offset="1" stop-color="#B8792A"/></linearGradient></defs>' +
      '<path d="M18 8h44v26c0 13-9 22-22 22S18 47 18 34Z" fill="' + c + '"/>' +
      '<path d="M18 14H8v8c0 9 5 14 12 15" fill="none" stroke="' + c + '" stroke-width="5"/>' +
      '<path d="M62 14h10v8c0 9-5 14-12 15" fill="none" stroke="' + c + '" stroke-width="5"/>' +
      '<rect x="35" y="56" width="10" height="16" fill="' + c + '"/>' +
      '<path d="M22 72h36l4 12H18Z" fill="' + c + '"/>' +
      '<rect x="14" y="84" width="52" height="9" rx="2" fill="' + c + '"/>' +
      '</svg>';
  };

  /* Icone di supporto (tratto uniforme, 24px) */
  FL.ui.icona = function (nome) {
    var d = {
      calendario: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
      classifica: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
      giornale:   '<path d="M4 5h12v15H4zM16 9h4v9a2 2 0 0 1-4 0zM7 9h6M7 13h6M7 17h4"/>',
      squadra:    '<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0"/>',
      trofeo:     '<path d="M8 4h8v6a4 4 0 0 1-8 0zM8 6H5v2a3 3 0 0 0 3 3M16 6h3v2a3 3 0 0 1-3 3M10 14h4v3h-4zM7 20h10"/>',
      freccia:    '<path d="M5 12h14M13 6l6 6-6 6"/>'
    }[nome] || '';
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
  };
})();
