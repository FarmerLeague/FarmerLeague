/* =========================================================
   MOTORE DELLE COPPE
   ---------------------------------------------------------
   In una giornata di Serie A ogni squadra ha un solo punteggio
   fanta, valido per tutte le competizioni. Da lì si ricavano i
   risultati di Coppa Italia, Champions e Supercoppa senza
   inserire nulla a mano: basta che il campionato sia aggiornato.
   ========================================================= */
FL.coppe = (function () {

  /* Fantapunti di una squadra nella giornata di Serie A indicata
     (null se quella giornata non è ancora stata giocata). */
  function fantapunti(teamId, serieA) {
    var g = FL.data.fixtures.find(function (x) { return x.serieA === serieA; });
    if (!g) return null;
    var trovato = null;
    g.partite.forEach(function (m) {
      if (!m.giocata) return;
      if (m.casa === teamId) trovato = m.fantaCasa;
      if (m.ospite === teamId) trovato = m.fantaOspite;
    });
    return trovato;
  }

  /* Una partita di coppa risolta: punteggi, gol ed esito */
  function risolvi(partita, serieA) {
    var out = {
      casa: partita.casa, ospite: partita.ospite,
      girone: partita.girone, etichetta: partita.etichetta,
      serieA: serieA, giocata: false,
      fantaCasa: null, fantaOspite: null, golCasa: null, golOspite: null
    };
    if (!partita.casa || !partita.ospite) return out;
    var fc = fantapunti(partita.casa, serieA);
    var fo = fantapunti(partita.ospite, serieA);
    if (fc === null || fo === null) return out;
    out.fantaCasa = fc; out.fantaOspite = fo;
    out.golCasa = FL.fantaToGol(fc);
    out.golOspite = FL.fantaToGol(fo);
    out.giocata = true;
    return out;
  }

  /* ---------------- Coppa Italia: classifica alla Formula 1 --------------- */
  function classificaFormula1(comp) {
    var righe = {};
    var squadre = comp.squadre || FL.data.teams.map(function (t) { return t.id; });
    squadre.forEach(function (id) {
      righe[id] = { teamId: id, punti: 0, giornate: 0, fantapunti: 0, vittorie: 0, migliore: null, piazzamenti: [] };
    });

    var turni = [];
    comp.giornateSerieA.forEach(function (sa) {
      var ordine = squadre.map(function (id) {
        return { teamId: id, fanta: fantapunti(id, sa) };
      }).filter(function (r) { return r.fanta !== null; });
      if (!ordine.length) { turni.push({ serieA: sa, giocata: false, ordine: [] }); return; }

      ordine.sort(function (a, b) { return b.fanta - a.fanta; });
      ordine.forEach(function (r, i) {
        r.posizione = i + 1;
        r.punti = comp.punti[i] || 0;
        var riga = righe[r.teamId];
        riga.punti += r.punti;
        riga.giornate++;
        riga.fantapunti += r.fanta;
        riga.piazzamenti.push(i + 1);
        if (i === 0) riga.vittorie++;
        if (riga.migliore === null || r.fanta > riga.migliore) riga.migliore = r.fanta;
      });
      turni.push({ serieA: sa, giocata: true, ordine: ordine });
    });

    var classifica = squadre.map(function (id) {
      var r = righe[id];
      r.fantapunti = Math.round(r.fantapunti * 10) / 10;
      return r;
    }).sort(function (a, b) {
      return b.punti - a.punti || b.vittorie - a.vittorie || b.fantapunti - a.fantapunti;
    });

    return { classifica: classifica, turni: turni,
             giocate: turni.filter(function (t) { return t.giocata; }).length };
  }

  /* ---------------- Champions: gironi ---------------- */
  function classificaGironi(comp) {
    var gironi = {};
    Object.keys(comp.gironi).forEach(function (g) {
      gironi[g] = {};
      comp.gironi[g].forEach(function (id) {
        gironi[g][id] = { teamId: id, g: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, punti: 0, fantapunti: 0 };
      });
    });

    var giornate = comp.giornate.map(function (gg) {
      var partite = gg.partite.map(function (p) {
        var r = risolvi(p, gg.serieA);
        if (r.giocata) {
          var c = gironi[p.girone][p.casa], o = gironi[p.girone][p.ospite];
          c.g++; o.g++;
          c.gf += r.golCasa; c.gs += r.golOspite;
          o.gf += r.golOspite; o.gs += r.golCasa;
          c.fantapunti += r.fantaCasa; o.fantapunti += r.fantaOspite;
          if (r.golCasa > r.golOspite) { c.v++; o.p++; c.punti += 3; }
          else if (r.golCasa < r.golOspite) { o.v++; c.p++; o.punti += 3; }
          else { c.n++; o.n++; c.punti += 1; o.punti += 1; }
        }
        return r;
      });
      return { numero: gg.numero, serieA: gg.serieA, partite: partite,
               giocata: partite.some(function (p) { return p.giocata; }) };
    });

    var ordinati = {};
    Object.keys(gironi).forEach(function (g) {
      ordinati[g] = Object.keys(gironi[g]).map(function (id) {
        var r = gironi[g][id];
        r.dr = r.gf - r.gs;
        r.fantapunti = Math.round(r.fantapunti * 10) / 10;
        return r;
      }).sort(function (a, b) {
        return b.punti - a.punti || b.fantapunti - a.fantapunti ||
               b.gf - a.gf || b.dr - a.dr || a.gs - b.gs;
      });
    });

    return { gironi: ordinati, giornate: giornate,
             completa: giornate.every(function (g) { return g.giocata; }) };
  }

  /* Chi ha vinto: gol, poi fantapunti come primo criterio di parità */
  function vincitore(golA, golB, fantaA, fantaB, a, b) {
    if (golA > golB) return a;
    if (golB > golA) return b;
    if (fantaA > fantaB) return a;
    if (fantaB > fantaA) return b;
    return null;                      // parità piena: supplementari e rigori
  }

  /* ---------------- Turni a eliminazione ----------------
     Gli accoppiamenti lasciati vuoti nei dati vengono riempiti
     da soli: le semifinali con le qualificate dai gironi, la
     finale con le vincenti delle semifinali. */
  function fasiFinali(comp, qualificate) {
    if (!comp.fasiFinali) return [];
    var precedenti = null;

    return comp.fasiFinali.map(function (f, indiceFase) {
      /* riempimento automatico degli accoppiamenti mancanti */
      var accoppiamenti = f.partite.map(function (p) {
        var q = { casa: p.casa, ospite: p.ospite, etichetta: p.etichetta };
        if (!q.casa && !q.ospite) {
          if (indiceFase === 0 && qualificate && qualificate.length) {
            var i = f.partite.indexOf(p);
            if (qualificate[i]) { q.casa = qualificate[i][0]; q.ospite = qualificate[i][1]; }
          } else if (precedenti) {
            var j = f.partite.indexOf(p) * 2;
            q.casa = precedenti[j] || null;
            q.ospite = precedenti[j + 1] || null;
          }
        }
        return q;
      });

      var partite = accoppiamenti.map(function (p) {
        if (f.andataRitorno) {
          var andata = risolvi(p, f.serieA[0]);
          var ritorno = risolvi({ casa: p.ospite, ospite: p.casa }, f.serieA[1]);
          var totCasa = (andata.golCasa || 0) + (ritorno.golOspite || 0);
          var totOspite = (andata.golOspite || 0) + (ritorno.golCasa || 0);
          var complete = andata.giocata && ritorno.giocata;
          return {
            etichetta: p.etichetta, casa: p.casa, ospite: p.ospite,
            gare: [andata, ritorno], andataRitorno: true, giocata: complete,
            totale: complete ? totCasa + "-" + totOspite : null,
            vincente: complete ? vincitore(totCasa, totOspite,
              (andata.fantaCasa || 0) + (ritorno.fantaOspite || 0),
              (andata.fantaOspite || 0) + (ritorno.fantaCasa || 0), p.casa, p.ospite) : null
          };
        }
        var gara = risolvi(p, f.serieA[0]);
        return {
          etichetta: p.etichetta, casa: p.casa, ospite: p.ospite,
          gare: [gara], andataRitorno: false, giocata: gara.giocata,
          totale: gara.giocata ? gara.golCasa + "-" + gara.golOspite : null,
          vincente: gara.giocata
            ? vincitore(gara.golCasa, gara.golOspite, gara.fantaCasa, gara.fantaOspite, p.casa, p.ospite)
            : null
        };
      });

      /* le vincenti alimentano il turno successivo */
      precedenti = partite.every(function (p) { return p.vincente; })
        ? partite.map(function (p) { return p.vincente; })
        : null;

      return { nome: f.nome, serieA: f.serieA, andataRitorno: f.andataRitorno, partite: partite };
    });
  }

  /* ---------------- lettura unica per le pagine ---------------- */
  function stato(comp) {
    if (comp.tipo === "formula1") return classificaFormula1(comp);
    if (comp.tipo === "gironi") {
      var s = classificaGironi(comp);
      var qual = null;
      if (s.completa) {
        var g = Object.keys(s.gironi);          // 1ª di un girone contro 2ª dell'altro
        qual = [
          [s.gironi[g[0]][0].teamId, s.gironi[g[1]][1].teamId],
          [s.gironi[g[1]][0].teamId, s.gironi[g[0]][1].teamId]
        ];
      }
      s.fasi = fasiFinali(comp, qual);
      return s;
    }
    return { fasi: fasiFinali(comp) };
  }

  /* Prossimo impegno di coppa, per la homepage */
  function prossimoTurno() {
    var giocate = FL.data.giornateGiocate();
    var ultimaSerieA = giocate.length ? giocate[giocate.length - 1].serieA : 0;
    var candidati = [];
    FL.data.competizioni.forEach(function (c) {
      if (c.tipo === "formula1") {
        c.giornateSerieA.forEach(function (sa) { candidati.push({ comp: c, serieA: sa, nome: "Giornata di coppa" }); });
      }
      (c.giornate || []).forEach(function (g) {
        candidati.push({ comp: c, serieA: g.serieA, nome: "Fase a gironi · giornata " + g.numero });
      });
      (c.fasiFinali || []).forEach(function (f) {
        f.serieA.forEach(function (sa) { candidati.push({ comp: c, serieA: sa, nome: f.nome }); });
      });
    });
    candidati.sort(function (a, b) { return a.serieA - b.serieA; });
    return candidati.find(function (c) { return c.serieA > ultimaSerieA; }) || null;
  }

  return { stato: stato, fantapunti: fantapunti, risolvi: risolvi, prossimoTurno: prossimoTurno };
})();
