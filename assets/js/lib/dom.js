/* =========================================================
   Piccoli aiuti condivisi (nessuna libreria esterna)
   ========================================================= */
FL.ui = FL.ui || {};

/* Testo sicuro dentro l'HTML generato */
FL.ui.esc = function (v) {
  return String(v === null || v === undefined ? "" : v)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
};

/* Valore o trattino, per i campi ancora vuoti */
FL.ui.val = function (v, suffisso) {
  if (v === null || v === undefined || v === "") return "—";
  return FL.ui.esc(v) + (suffisso || "");
};

var MESI = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
  "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

/* "2025-11-30" -> "30 novembre 2025" */
FL.ui.dataEstesa = function (iso) {
  var p = String(iso).split("-");
  if (p.length !== 3) return iso;
  return parseInt(p[2], 10) + " " + MESI[parseInt(p[1], 10) - 1] + " " + p[0];
};

/* "2025-11-30" -> "30.11" */
FL.ui.dataBreve = function (iso) {
  var p = String(iso).split("-");
  return p.length === 3 ? p[2] + "." + p[1] : iso;
};

FL.ui.oggiEsteso = function () {
  var d = new Date();
  return d.getDate() + " " + MESI[d.getMonth()] + " " + d.getFullYear();
};

/* Badge "demo", visibile solo se attivato in config.js */
FL.ui.badgeDemo = function (attivo) {
  if (!attivo || !FL.config.ui.mostraBadgeDemo) return "";
  return '<span class="badge badge--demo">demo</span>';
};

/* Riquadro di avviso sui dati segnaposto */
FL.ui.notaDati = function (testo) {
  if (!FL.config.ui.mostraBadgeDemo) return "";
  return '<div class="nota-dati"><b>Dati di esempio.</b> ' +
    FL.ui.esc(testo || FL.config.ui.notaDati) + '</div>';
};

/* Colore associato a una categoria del giornale */
FL.ui.coloreCategoria = function (id) {
  var mappa = {
    news: "#2F6BFF", mercato: "#17D97F", pagelle: "#FFC24B",
    interviste: "#B14BFF", comunicati: "#46E3E8", polemiche: "#FF4B3E",
    curiosita: "#FF6FA5", giovani: "#8FD14F", varie: "#8079AD"
  };
  return mappa[id] || "#8079AD";
};

/* Copertina disegnata quando l'articolo non ha un'immagine:
   campo da gioco stilizzato nei colori della categoria. */
FL.ui.copertina = function (articolo, classe) {
  var c = FL.ui.coloreCategoria(articolo.categoria);
  var cat = FL.data.categoria(articolo.categoria).nome;
  if (articolo.copertina && articolo.copertina.immagine) {
    return '<div class="copertina ' + (classe || '') + '">' +
      '<img src="' + FL.ui.esc(articolo.copertina.immagine) + '" alt="" style="width:100%;height:100%;object-fit:cover">' +
      '<span class="copertina__cat" style="color:' + c + '">' + FL.ui.esc(cat) + '</span></div>';
  }
  var sfondo = 'background:' +
    'radial-gradient(120% 120% at 12% 0%, ' + c + '55, transparent 60%),' +
    'repeating-linear-gradient(115deg, rgba(255,255,255,.05) 0 12px, transparent 12px 26px),' +
    'linear-gradient(160deg,#241C52,#14112E)';
  return '<div class="copertina ' + (classe || '') + '" style="' + sfondo + '">' +
    '<span class="copertina__iniziale" aria-hidden="true">' + FL.ui.esc(cat.slice(0, 3)) + '</span>' +
    '<span class="copertina__cat" style="color:' + c + '">' + FL.ui.esc(cat) + '</span>' +
    '</div>';
};

/* Firma articolo: autore · data · categoria */
FL.ui.firma = function (a) {
  return '<div class="firma"><b>' + FL.ui.esc(a.autore) + '</b>' +
    '<i class="punto"></i>' + FL.ui.esc(FL.ui.dataEstesa(a.data)) +
    (a.demo ? '<i class="punto"></i>esempio' : '') + '</div>';
};

/* Serie di risultati recenti (V N P) */
FL.ui.forma = function (arr) {
  var v = (arr || []).slice(-5);
  while (v.length < 5) v.unshift("-");
  return '<span class="forma">' + v.map(function (r) {
    return '<i data-r="' + r + '">' + r + '</i>';
  }).join("") + '</span>';
};
