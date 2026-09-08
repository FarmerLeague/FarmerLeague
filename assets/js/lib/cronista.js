/* =========================================================
   IL CRONISTA — articoli generati dai risultati
   ---------------------------------------------------------
   Dopo ogni giornata giocata scrive da solo il pezzo di
   riepilogo, pescando dai numeri veri: risultati, migliori e
   peggiori punteggi, sorpassi in classifica, strisce aperte,
   record stagionali.

   Non inventa nulla: ogni frase nasce da un dato presente in
   fixtures.js o nella classifica. Gli articoli sono marcati
   `auto: true` e sul sito portano l'etichetta "automatico",
   così si distinguono dai pezzi scritti dai partecipanti.

   Si spegne da config.js con  cronista: { attivo: false }.
   ========================================================= */
FL.cronista = (function () {

  function nome(id) { return FL.data.team(id).nome; }

  /* Scelta stabile fra più varianti: dipende dalla giornata,
     così il testo non cambia a ogni ricaricamento della pagina. */
  function scegli(varianti, seme) {
    return varianti[seme % varianti.length];
  }

  /* ---------- raccolta dei fatti di una giornata ---------- */
  function fatti(g) {
    var partite = g.partite.filter(function (m) { return m.giocata; });
    if (!partite.length) return null;

    var punteggi = [];
    partite.forEach(function (m) {
      punteggi.push({ teamId: m.casa, fanta: m.fantaCasa, gol: m.golCasa, avversario: m.ospite, casa: true, partita: m });
      punteggi.push({ teamId: m.ospite, fanta: m.fantaOspite, gol: m.golOspite, avversario: m.casa, casa: false, partita: m });
    });
    var perFanta = punteggi.slice().sort(function (a, b) { return b.fanta - a.fanta; });

    var conScarto = partite.map(function (m) {
      return { m: m, scarto: Math.abs(m.golCasa - m.golOspite), gol: m.golCasa + m.golOspite };
    }).sort(function (a, b) { return b.scarto - a.scarto || b.gol - a.gol; });

    /* Pareggi in cui uno ha fatto molto meglio dell'altro */
    var beffe = partite.filter(function (m) {
      return m.golCasa === m.golOspite && Math.abs(m.fantaCasa - m.fantaOspite) >= 4;
    });

    var dopo = FL.data.classifica(g.numero);
    var prima = g.numero > 1 ? FL.data.classifica(g.numero - 1) : null;
    function posizione(cls, id) {
      return cls ? cls.findIndex(function (r) { return r.teamId === id; }) + 1 : null;
    }

    var sorpassi = [];
    if (prima) {
      dopo.forEach(function (r) {
        var p = posizione(prima, r.teamId), d = posizione(dopo, r.teamId);
        if (p && d && p - d >= 2) sorpassi.push({ teamId: r.teamId, da: p, a: d });
      });
      sorpassi.sort(function (a, b) { return (b.da - b.a) - (a.da - a.a); });
    }

    var cambioVetta = prima && prima[0].teamId !== dopo[0].teamId ? dopo[0] : null;

    /* Strisce aperte, calcolate sulla forma delle ultime giornate */
    var strisce = { vittorie: null, sconfitte: null };
    dopo.forEach(function (r) {
      var f = r.forma, v = 0, s = 0, i;
      for (i = f.length - 1; i >= 0 && f[i] === "V"; i--) v++;
      for (i = f.length - 1; i >= 0 && f[i] === "P"; i--) s++;
      if (v >= 3 && (!strisce.vittorie || v > strisce.vittorie.n)) strisce.vittorie = { teamId: r.teamId, n: v };
      if (s >= 3 && (!strisce.sconfitte || s > strisce.sconfitte.n)) strisce.sconfitte = { teamId: r.teamId, n: s };
    });

    /* Record stagionale di fantapunti in una singola partita */
    var massimoStagione = 0;
    FL.data.fixtures.forEach(function (gg) {
      if (gg.numero > g.numero) return;
      gg.partite.forEach(function (m) {
        if (!m.giocata) return;
        massimoStagione = Math.max(massimoStagione, m.fantaCasa, m.fantaOspite);
      });
    });

    return {
      giornata: g,
      partite: partite,
      golTotali: partite.reduce(function (n, m) { return n + m.golCasa + m.golOspite; }, 0),
      migliore: perFanta[0],
      peggiore: perFanta[perFanta.length - 1],
      goleada: conScarto[0],
      equilibrio: conScarto[conScarto.length - 1],
      beffe: beffe,
      classifica: dopo,
      capolista: dopo[0],
      cambioVetta: cambioVetta,
      sorpassi: sorpassi,
      strisce: strisce,
      recordStagione: massimoStagione === Math.max(perFanta[0].fanta, 0) ? perFanta[0] : null,
      posizione: posizione
    };
  }

  /* ---------- costruzione del testo ---------- */
  function paragrafi(f) {
    var g = f.giornata, seme = g.numero, p = [];

    /* Apertura: dipende dal fatto più rilevante */
    if (f.cambioVetta) {
      p.push(scegli([
        "Cambio in testa alla classifica: " + nome(f.cambioVetta.teamId) + " si prende il primo posto con " +
          f.cambioVetta.punti + " punti dopo la " + g.numero + "ª giornata.",
        "La vetta cambia padrone. Alla " + g.numero + "ª giornata è " + nome(f.cambioVetta.teamId) +
          " a guidare la classifica, a quota " + f.cambioVetta.punti + "."
      ], seme));
    } else {
      p.push(scegli([
        "La " + g.numero + "ª giornata si chiude con " + f.golTotali + " gol e " +
          nome(f.capolista.teamId) + " sempre in testa a quota " + f.capolista.punti + ".",
        "Niente da fare per gli inseguitori: " + nome(f.capolista.teamId) +
          " resta in vetta anche dopo la " + g.numero + "ª giornata, chiusa con " + f.golTotali + " gol complessivi."
      ], seme));
    }

    /* Il punteggio più alto */
    p.push(nome(f.migliore.teamId) + " ha firmato il punteggio più alto del turno: " +
      f.migliore.fanta.toFixed(1) + " fantapunti" +
      (f.recordStagione ? ", che è anche il record stagionale" : "") +
      ", per un " + f.migliore.gol + "-" + f.migliore.partita[f.migliore.casa ? "golOspite" : "golCasa"] +
      " contro " + nome(f.migliore.avversario) + ".");

    /* Goleada, se non è la stessa partita già raccontata sopra */
    if (f.goleada.scarto >= 2 && f.goleada.m !== f.migliore.partita) {
      p.push("Il divario più netto lo ha scavato " +
        nome(f.goleada.m.golCasa > f.goleada.m.golOspite ? f.goleada.m.casa : f.goleada.m.ospite) +
        ": " + f.goleada.m.golCasa + "-" + f.goleada.m.golOspite + " contro " +
        nome(f.goleada.m.golCasa > f.goleada.m.golOspite ? f.goleada.m.ospite : f.goleada.m.casa) + ".");
    }

    if (f.beffe.length) {
      var b = f.beffe[0];
      var meglio = b.fantaCasa > b.fantaOspite ? b.casa : b.ospite;
      var peggio = b.fantaCasa > b.fantaOspite ? b.ospite : b.casa;
      p.push("Da segnalare il pareggio fra " + nome(b.casa) + " e " + nome(b.ospite) +
        ": " + nome(meglio) + " ha messo insieme " +
        Math.abs(b.fantaCasa - b.fantaOspite).toFixed(1) +
        " fantapunti in più di " + nome(peggio) + " e ha portato a casa lo stesso un punto solo.");
    }

    /* Strisce */
    if (f.strisce.vittorie) {
      p.push(nome(f.strisce.vittorie.teamId) + " viaggia su una striscia di " +
        f.strisce.vittorie.n + " vittorie consecutive.");
    }
    if (f.strisce.sconfitte) {
      p.push("Momento nero invece per " + nome(f.strisce.sconfitte.teamId) + ", alla " +
        f.strisce.sconfitte.n + "ª sconfitta di fila.");
    }

    /* Sorpassi */
    if (f.sorpassi.length) {
      p.push("Il salto più lungo in classifica è di " + nome(f.sorpassi[0].teamId) +
        ", dalla " + f.sorpassi[0].da + "ª alla " + f.sorpassi[0].a + "ª posizione." +
        (f.sorpassi.length > 1 ? " In movimento anche " + nome(f.sorpassi[1].teamId) + "." : ""));
    }

    /* Il punteggio più basso, con garbo */
    p.push("Chiude la classifica di giornata " + nome(f.peggiore.teamId) +
      " con " + f.peggiore.fanta.toFixed(1) + " fantapunti: settimana da dimenticare.");

    /* Tutti i risultati */
    p.push("Tutti i risultati: " + f.partite.map(function (m) {
      return nome(m.casa) + " " + m.golCasa + "-" + m.golOspite + " " + nome(m.ospite);
    }).join(" · ") + ".");

    return p;
  }

  function titolo(f) {
    var g = f.giornata.numero;
    if (f.cambioVetta) return "Giornata " + g + ": " + nome(f.cambioVetta.teamId) + " vola in testa";
    if (f.goleada.scarto >= 3) {
      var vinc = f.goleada.m.golCasa > f.goleada.m.golOspite ? f.goleada.m.casa : f.goleada.m.ospite;
      return "Giornata " + g + ": " + nome(vinc) + " passeggia, la vetta non cambia";
    }
    if (f.strisce.vittorie) return "Giornata " + g + ": " + nome(f.strisce.vittorie.teamId) + " non si ferma più";
    return "Giornata " + g + ": " + nome(f.migliore.teamId) + " firma il punteggio più alto";
  }

  /* ---------- articolo di una giornata ---------- */
  function articolo(g) {
    var f = fatti(g);
    if (!f) return null;
    var corpo = paragrafi(f);
    return {
      slug: "giornata-" + g.numero + "-riepilogo",
      titolo: titolo(f),
      occhiello: "Il racconto della " + g.numero + "ª giornata" +
        (g.serieA ? ", giocata sulla " + g.serieA + "ª di Serie A" : ""),
      autore: (FL.config.cronista && FL.config.cronista.autore) || "Il Cronista",
      squadra: f.capolista.teamId,
      data: dataDi(g),
      categoria: "news",
      tags: ["giornata " + g.numero, "risultati", "classifica"],
      anteprima: corpo[0],
      corpo: corpo,
      copertina: { immagine: null },
      inEvidenza: false,
      demo: false,
      auto: true
    };
  }

  function dataDi(g) {
    if (!g.data) return new Date().toISOString().slice(0, 10);
    var p = g.data.split("/");
    return p.length === 3 ? p[2] + "-" + p[1] + "-" + p[0] : g.data;
  }

  /* ---------- inserimento nel giornale ---------- */
  function integra() {
    var c = FL.config.cronista;
    if (c && c.attivo === false) return 0;

    var esistenti = {};
    FL.data.news.forEach(function (a) { esistenti[a.slug] = true; });

    var nuovi = FL.data.giornateGiocate().map(articolo).filter(function (a) {
      return a && !esistenti[a.slug];      // un pezzo scritto a mano ha la precedenza
    });

    FL.data.news = FL.data.news.concat(nuovi);
    return nuovi.length;
  }

  return { integra: integra, articolo: articolo, fatti: fatti };
})();
