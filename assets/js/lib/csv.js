/* =========================================================
   LETTURA CSV
   Serve a interpretare quello che arriva dal foglio Google.
   Gestisce virgolette, virgole dentro il testo e paragrafi
   che vanno a capo dentro una cella.
   ========================================================= */
FL.csv = (function () {

  /* Da testo CSV a elenco di righe (ogni riga è un elenco di celle) */
  function righe(testo) {
    var out = [], riga = [], cella = "", dentro = false;
    testo = String(testo).replace(/\r\n/g, "\n").replace(/\r/g, "\n");

    for (var i = 0; i < testo.length; i++) {
      var c = testo[i];
      if (dentro) {
        if (c === '"') {
          if (testo[i + 1] === '"') { cella += '"'; i++; }   // virgolette doppie
          else dentro = false;
        } else cella += c;
      } else if (c === '"') {
        dentro = true;
      } else if (c === ",") {
        riga.push(cella); cella = "";
      } else if (c === "\n") {
        riga.push(cella); out.push(riga); riga = []; cella = "";
      } else {
        cella += c;
      }
    }
    riga.push(cella);
    if (riga.length > 1 || riga[0] !== "") out.push(riga);
    return out;
  }

  /* Confronto tollerante fra intestazioni: "Fantapunti casa",
     "fantapunti_casa" e "FANTAPUNTICASA" sono la stessa cosa. */
  function chiave(s) {
    return String(s == null ? "" : s)
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")   // via gli accenti
      .replace(/[^a-z0-9]/g, "");
  }

  /* Da testo CSV a elenco di oggetti, usando la prima riga come
     intestazione. Le righe completamente vuote vengono saltate. */
  function oggetti(testo) {
    var r = righe(testo);
    if (!r.length) return [];
    var intestazioni = r[0].map(chiave);
    return r.slice(1).map(function (riga) {
      var o = {};
      intestazioni.forEach(function (h, i) {
        if (h) o[h] = (riga[i] || "").trim();
      });
      return o;
    }).filter(function (o) {
      return Object.keys(o).some(function (k) { return o[k] !== ""; });
    });
  }

  /* Primo valore disponibile fra più nomi di colonna possibili */
  function campo(o, nomi) {
    for (var i = 0; i < nomi.length; i++) {
      var v = o[chiave(nomi[i])];
      if (v !== undefined && v !== "") return v;
    }
    return "";
  }

  return { righe: righe, oggetti: oggetti, campo: campo, chiave: chiave };
})();
