/* =========================================================
   PAGINA CLASSIFICA
   ========================================================= */
FL.pages.classifica = (function () {

  function schedaSquadra(etichetta, teamId, valore, colore) {
    var t = FL.data.team(teamId);
    return '<article class="stat-card">' +
      '<span class="badge badge--' + colore + '">' + etichetta + '</span>' +
      '<div style="display:flex;align-items:center;gap:12px;margin-top:4px">' + FL.ui.stemma(t, 34) +
      '<div><div class="stat-card__nome" style="font-size:1.3rem">' + FL.ui.esc(t.nome) + '</div>' +
      '<div class="stat-card__dett">' + FL.ui.esc(valore) + '</div></div></div></article>';
  }

  return {
    titolo: function () { return "Classifica"; },
    render: function () {
      var iniziato = FL.data.campionatoIniziato();
      var giocate = FL.data.giornateGiocate().length;
      var cls = FL.data.classifica();

      var schede;
      if (iniziato) {
        var st = FL.data.statisticheLega();
        schede =
          schedaSquadra("Capolista", st.capolista.teamId, st.capolista.punti + " punti", "verde") +
          schedaSquadra("Miglior attacco", st.miglioreAttacco.teamId, st.miglioreAttacco.gf + " gol fatti", "rosa") +
          schedaSquadra("Miglior difesa", st.miglioreDifesa.teamId, st.miglioreDifesa.gs + " gol subiti", "ciano") +
          schedaSquadra("Ultima", cls[cls.length - 1].teamId, cls[cls.length - 1].punti + " punti", "rosso");
      } else {
        var scorsa = FL.data.honours[0];
        schede =
          schedaSquadra("Campione uscente", scorsa.campione.teamId,
            scorsa.campione.punti + " punti nel " + scorsa.stagione, "oro") +
          (scorsa.secondo ? schedaSquadra("Secondo lo scorso anno", scorsa.secondo.teamId,
            scorsa.secondo.punti + " punti", "verde") : "") +
          (scorsa.terzo ? schedaSquadra("Terzo lo scorso anno", scorsa.terzo.teamId,
            scorsa.terzo.punti + " punti", "ciano") : "") +
          schedaSquadra("Ultimo lo scorso anno",
            scorsa.classifica[scorsa.classifica.length - 1].teamId,
            scorsa.classifica[scorsa.classifica.length - 1].punti + " punti", "rosso");
      }

      var sottotitolo = iniziato
        ? "Aggiornata alla giornata " + giocate + " di " + FL.config.stagione.giornateTotali + "."
        : "Il campionato non è ancora iniziato: tutte le squadre sono a zero punti, in ordine alfabetico.";

      return FL.components.testaPagina({
        kicker: "Stagione " + FL.config.stagione.etichetta,
        titolo: "Classifica",
        testo: sottotitolo + " I punti arrivano dai risultati, i fantapunti dalla somma dei punteggi di giornata.",
        fondo: "Punti"
      }) +
      '<section class="sezione--stretta" style="padding-block:var(--sp-6)"><div class="wrap">' +
        (iniziato ? '' : FL.ui.notaDati("Si parte alla 1ª giornata di lega, che coincide con la " +
          FL.config.stagione.primaGiornataSerieA + "ª di Serie A. Inserendo i risultati in fixtures.js questa tabella si aggiorna da sola.")) +
        '<section class="pannello">' +
          '<div class="pannello__testa"><h3>Classifica generale</h3>' +
          '<span class="meta">' + FL.data.teams.length + ' squadre · ' +
          (iniziato ? 'giornata ' + giocate : 'nessuna giornata giocata') + '</span></div>' +
          FL.components.tabellaClassifica({ stemma: 30 }) +
          '<div class="pannello__piede">' + FL.components.legendaZone() + '</div>' +
        '</section>' +

        '<div class="sezione-testa" style="margin-top:var(--sp-7)"><div>' +
          '<span class="kicker kicker--rosa">' + (iniziato ? "Estremi della stagione" : "L'anno scorso") + '</span>' +
          '<h2>' + (iniziato ? "Le squadre da tenere d'occhio" : "Come era finita lo scorso anno") + '</h2></div></div>' +
        '<div class="stat-griglia">' + schede + '</div>' +

        '<div class="pannello" style="margin-top:var(--sp-7)"><div class="pannello__corpo">' +
          '<h3 style="font-family:var(--display);font-size:1.4rem;text-transform:uppercase;margin-bottom:12px">Come si legge</h3>' +
          '<p style="color:var(--testo-soft);max-width:70ch">G partite giocate, V vittorie, N pareggi, P sconfitte, ' +
          'GF gol fatti, GS gol subiti, DR differenza reti. La colonna fantapunti somma tutti i punteggi della stagione.</p>' +
          '<p style="color:var(--testo-mute);margin:0">Soglia gol: ' + FL.config.punteggio.sogliaPrimoGol +
          ' fantapunti per la prima rete, poi una ogni ' + FL.config.punteggio.passoGol +
          '. Vittoria ' + FL.config.punteggio.vittoria + ' punti, pareggio ' + FL.config.punteggio.pareggio + '.</p>' +
        '</div></div>' +
      '</div></section>';
    }
  };
})();
