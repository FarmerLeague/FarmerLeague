/* =========================================================
   COLLEGAMENTO AL FOGLIO GOOGLE
   ---------------------------------------------------------
   Se in config.js il foglio è attivo, all'apertura del sito
   vengono letti i suoi fogli e i dati sostituiscono quelli
   scritti nei file. Se il foglio non risponde o una scheda
   manca, il sito continua a funzionare con i dati locali:
   non si rompe mai per colpa del foglio.

   Le schede lette sono: squadre, rose, risultati, notizie,
   giovanili. I nomi delle colonne sono tolleranti (maiuscole,
   accenti e spazi non contano) e ogni scheda è facoltativa.
   ========================================================= */
FL.foglio = (function () {

  var stato = [];          // esito di ogni scheda, visibile in #/dati

  function indirizzo(scheda) {
    var c = FL.config.foglio;
    return "https://docs.google.com/spreadsheets/d/" + c.id +
      "/gviz/tq?tqx=out:csv&sheet=" + encodeURIComponent(scheda) +
      "&t=" + Date.now();                       // evita le copie in memoria
  }

  /* ---------- riconoscimento delle squadre dal nome scritto ---------- */
  function indiceSquadre() {
    var idx = {};
    FL.data.tutteLeSquadre().forEach(function (t) {
      [t.id, t.nome, t.sigla].forEach(function (v) {
        if (v) idx[FL.csv.chiave(v)] = t.id;
      });
    });
    return idx;
  }

  function squadraDa(nome, idx) {
    return idx[FL.csv.chiave(nome)] || null;
  }

  /* ---------- conversioni di comodo ---------- */
  function numero(v) {
    if (v === "" || v === undefined || v === null) return null;
    var n = parseFloat(String(v).replace(",", "."));
    return isNaN(n) ? null : n;
  }

  function vero(v) {
    return /^(s|si|sì|x|v|vero|true|1)$/i.test(String(v).trim());
  }

  function dataIso(v) {
    v = String(v).trim();
    if (!v) return new Date().toISOString().slice(0, 10);
    var g = v.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{4})$/);   // 08/09/2026
    if (g) return g[3] + "-" + ("0" + g[2]).slice(-2) + "-" + ("0" + g[1]).slice(-2);
    var i = v.match(/^(\d{4})-(\d{2})-(\d{2})/);                    // 2026-09-08
    if (i) return i[0];
    return v;
  }

  function indirizzoWeb(titolo) {
    return String(titolo).toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
  }

  function ruolo(v) {
    var r = FL.csv.chiave(v);
    if (r.indexOf("por") === 0 || r === "p") return "POR";
    if (r.indexOf("dif") === 0 || r === "d") return "DIF";
    if (r.indexOf("cen") === 0 || r === "c") return "CEN";
    if (r.indexOf("att") === 0 || r === "a" || r.indexOf("pun") === 0) return "ATT";
    return null;
  }

  /* ================= applicazione delle singole schede ================= */

  function applicaSquadre(righe) {
    var idx = indiceSquadre(), n = 0;
    righe.forEach(function (r) {
      var id = squadraDa(FL.csv.campo(r, ["squadra", "nome", "id"]), idx);
      if (!id) return;
      var t = FL.data.team(id);
      var owner = FL.csv.campo(r, ["proprietario", "owner", "fantallenatore", "allenatore"]);
      var nome = FL.csv.campo(r, ["nomecompleto", "nuovonome"]);
      var c1 = FL.csv.campo(r, ["colore1", "coloreprincipale", "colore"]);
      var c2 = FL.csv.campo(r, ["colore2", "coloresecondario"]);
      var logo = FL.csv.campo(r, ["logo", "stemma", "immagine"]);
      if (owner) t.owner = owner;
      if (nome) t.nome = nome;
      if (c1) t.colori[0] = c1;
      if (c2) t.colori[1] = c2;
      if (logo) t.logo = logo;
      n++;
    });
    return n;
  }

  function applicaRose(righe) {
    var idx = indiceSquadre(), nuove = {}, n = 0;
    righe.forEach(function (r) {
      var id = squadraDa(FL.csv.campo(r, ["squadra", "fantasquadra"]), idx);
      var nome = FL.csv.campo(r, ["giocatore", "nome", "calciatore"]);
      if (!id || !nome) return;
      (nuove[id] = nuove[id] || []).push({
        nome: nome,
        ruolo: ruolo(FL.csv.campo(r, ["ruolo", "r"])),
        club: FL.csv.campo(r, ["club", "squadraseriea", "seriea"]) || null,
        costo: numero(FL.csv.campo(r, ["costo", "crediti", "prezzo"]))
      });
      n++;
    });
    /* Sostituisce solo le squadre presenti nel foglio: se una scheda
       è parziale, le altre rose restano quelle dei file. */
    Object.keys(nuove).forEach(function (id) { FL.data.squads[id] = nuove[id]; });
    return n;
  }

  function applicaRisultati(righe) {
    var idx = indiceSquadre(), n = 0;
    righe.forEach(function (r) {
      var g = parseInt(FL.csv.campo(r, ["giornata", "giornatalega", "g"]), 10);
      var casa = squadraDa(FL.csv.campo(r, ["casa", "squadracasa", "squadra1"]), idx);
      var ospite = squadraDa(FL.csv.campo(r, ["ospite", "squadraospite", "trasferta", "squadra2"]), idx);
      var fc = numero(FL.csv.campo(r, ["fantapunticasa", "fantacasa", "punticasa"]));
      var fo = numero(FL.csv.campo(r, ["fantapuntiospite", "fantaospite", "puntiospite"]));
      if (!g || !casa || !ospite || fc === null || fo === null) return;

      var giornata = FL.data.giornata(g);
      if (!giornata) return;
      var partita = giornata.partite.find(function (p) {
        return p.casa === casa && p.ospite === ospite;
      });
      var invertita = false;
      if (!partita) {                       // scritta al contrario: la accetto lo stesso
        partita = giornata.partite.find(function (p) {
          return p.casa === ospite && p.ospite === casa;
        });
        invertita = !!partita;
      }
      if (!partita) return;

      partita.fantaCasa = invertita ? fo : fc;
      partita.fantaOspite = invertita ? fc : fo;
      var golCasa = numero(FL.csv.campo(r, ["golcasa", "reticasa"]));
      var golOspite = numero(FL.csv.campo(r, ["golospite", "retiospite"]));
      partita.golCasa = golCasa !== null ? golCasa : FL.fantaToGol(partita.fantaCasa);
      partita.golOspite = golOspite !== null ? golOspite : FL.fantaToGol(partita.fantaOspite);
      partita.giocata = true;
      var nota = FL.csv.campo(r, ["nota", "note"]);
      if (nota) partita.nota = nota;
      n++;
    });
    return n;
  }

  function applicaNotizie(righe) {
    var idx = indiceSquadre();
    var articoli = righe.map(function (r) {
      var titolo = FL.csv.campo(r, ["titolo"]);
      var testo = FL.csv.campo(r, ["testo", "articolo", "corpo", "contenuto"]);
      if (!titolo || !testo) return null;
      var immagine = FL.csv.campo(r, ["immagine", "copertina", "foto"]);
      var tags = FL.csv.campo(r, ["tag", "tags", "paroleschiave", "parolechiave"]);
      var squadra = squadraDa(FL.csv.campo(r, ["squadra", "squadraautore"]), idx);
      return {
        slug: FL.csv.campo(r, ["slug", "indirizzo"]) || indirizzoWeb(titolo),
        titolo: titolo,
        occhiello: FL.csv.campo(r, ["occhiello", "sottotitolo"]),
        autore: FL.csv.campo(r, ["autore", "firma"]) || "La Redazione",
        squadra: squadra,
        data: dataIso(FL.csv.campo(r, ["data"])),
        categoria: FL.csv.chiave(FL.csv.campo(r, ["categoria"])) || "news",
        tags: tags ? tags.split(/[,;]/).map(function (t) { return t.trim(); }).filter(Boolean) : [],
        anteprima: FL.csv.campo(r, ["anteprima", "sommario"]) ||
          testo.split(/\n+/)[0].slice(0, 180),
        corpo: testo.split(/\n+/).map(function (p) { return p.trim(); }).filter(Boolean),
        copertina: { immagine: immagine || null },
        inEvidenza: vero(FL.csv.campo(r, ["evidenza", "inevidenza", "apertura"])),
        demo: false
      };
    }).filter(Boolean);

    if (!articoli.length) return 0;
    if (!articoli.some(function (a) { return a.inEvidenza; })) articoli[0].inEvidenza = true;
    FL.data.news = articoli;
    return articoli.length;
  }

  function applicaGiovanili(righe) {
    var idx = indiceSquadre(), nuovi = {}, n = 0;
    righe.forEach(function (r) {
      var id = squadraDa(FL.csv.campo(r, ["squadra", "fantasquadra"]), idx);
      var nome = FL.csv.campo(r, ["giocatore", "nome", "calciatore"]);
      if (!id || !nome) return;
      (nuovi[id] = nuovi[id] || []).push({
        nome: nome,
        ruolo: ruolo(FL.csv.campo(r, ["ruolo", "r"])) || "",
        eta: numero(FL.csv.campo(r, ["eta", "anni"])),
        nato: numero(FL.csv.campo(r, ["nato", "annodinascita", "anno"])),
        club: FL.csv.campo(r, ["club", "squadraseriea", "seriea"]) || null,
        valore: numero(FL.csv.campo(r, ["valore", "quotazione", "costo"])),
        presenze: numero(FL.csv.campo(r, ["presenze"])),
        gol: numero(FL.csv.campo(r, ["gol", "reti"])),
        media: numero(FL.csv.campo(r, ["media", "mediavoto"])),
        descrizione: FL.csv.campo(r, ["descrizione", "note", "nota"]),
        foto: FL.csv.campo(r, ["foto", "immagine"]) || null
      });
      n++;
    });
    FL.data.youth = nuovi;
    return n;
  }

  var SCHEDE = [
    { chiave: "squadre",   applica: applicaSquadre },
    { chiave: "rose",      applica: applicaRose },
    { chiave: "risultati", applica: applicaRisultati },
    { chiave: "notizie",   applica: applicaNotizie },
    { chiave: "giovanili", applica: applicaGiovanili }
  ];

  /* ---------- lettura di tutte le schede ---------- */
  function carica() {
    var c = FL.config.foglio;
    stato = [];
    if (!c || !c.attivo || !c.id || c.id.indexOf("INCOLLA") === 0) {
      return Promise.resolve(stato);
    }

    var letture = SCHEDE.map(function (s) {
      var nome = (c.schede && c.schede[s.chiave]) || s.chiave;
      return fetch(indirizzo(nome))
        .then(function (risposta) {
          if (!risposta.ok) throw new Error("risposta " + risposta.status);
          return risposta.text();
        })
        .then(function (testo) {
          if (/^\s*</.test(testo)) throw new Error("scheda non trovata o foglio non condiviso");
          var righe = FL.csv.oggetti(testo);
          var n = s.applica(righe);
          stato.push({ scheda: nome, righe: righe.length, usate: n, errore: null });
        })
        .catch(function (e) {
          stato.push({ scheda: nome, righe: 0, usate: 0, errore: e.message });
        });
    });

    /* Non blocca mai il sito più di qualche secondo */
    var scadenza = new Promise(function (ok) { setTimeout(ok, 8000); });
    return Promise.race([Promise.all(letture), scadenza]).then(function () { return stato; });
  }

  return { carica: carica, stato: function () { return stato; } };
})();
