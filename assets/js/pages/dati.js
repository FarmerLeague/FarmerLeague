/* =========================================================
   PAGINA DIAGNOSTICA (#/dati)
   Mostra da dove arrivano i dati e, se il foglio Google è
   attivo, l'esito della lettura di ogni scheda. Non è nel
   menu: serve solo per controllare che tutto funzioni.
   ========================================================= */
FL.pages.dati = {
  titolo: function () { return "Stato dei dati"; },
  render: function () {
    var c = FL.config.foglio || {};
    var stato = FL.foglio ? FL.foglio.stato() : [];
    var attivo = c.attivo && c.id && c.id.indexOf("INCOLLA") !== 0;

    var righe = stato.length
      ? stato.map(function (s) {
          return '<tr><td style="text-align:left">' + FL.ui.esc(s.scheda) + '</td>' +
            '<td class="num">' + s.righe + '</td>' +
            '<td class="num">' + s.usate + '</td>' +
            '<td style="text-align:left">' + (s.errore
              ? '<span class="badge badge--rosso">' + FL.ui.esc(s.errore) + '</span>'
              : '<span class="badge badge--verde">letta</span>') + '</td></tr>';
        }).join("")
      : '<tr><td colspan="4" style="text-align:left;color:var(--testo-mute)">Nessuna lettura: il sito sta usando i dati scritti nei file.</td></tr>';

    function voce(etichetta, valore) {
      return '<div><span style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;' +
        'color:var(--testo-mute);display:block">' + etichetta + '</span><b>' + valore + '</b></div>';
    }

    return FL.components.testaPagina({
      kicker: "Controllo",
      titolo: "Stato dei dati",
      testo: "Pagina di servizio: dice se il foglio Google è collegato e cosa è stato letto.",
      fondo: "Dati"
    }) +
    '<section class="sezione--stretta" style="padding-block:var(--sp-6)"><div class="wrap">' +
      '<div class="pannello"><div class="pannello__testa"><h3>Collegamento</h3>' +
      '<span class="badge badge--' + (attivo ? "verde" : "neutro") + '">' +
      (attivo ? "foglio attivo" : "foglio spento") + '</span></div>' +
      '<div class="pannello__corpo" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:var(--sp-5)">' +
        voce("Squadre", FL.data.teams.length) +
        voce("Giocatori", FL.data.giocatoriTesserati()) +
        voce("Giornate", FL.data.fixtures.length) +
        voce("Giornate giocate", FL.data.giornateGiocate().length) +
        voce("Articoli", FL.data.news.length) +
        voce("Giovani", FL.data.teams.reduce(function (n, t) { return n + FL.data.vivaioDi(t.id).length; }, 0)) +
      '</div></div>' +

      '<div class="pannello" style="margin-top:var(--sp-5)">' +
      '<div class="pannello__testa"><h3>Schede del foglio</h3></div>' +
      '<div class="tabella-wrap"><table class="tabella" style="min-width:520px">' +
      '<thead><tr><th style="text-align:left">Scheda</th><th>Righe lette</th>' +
      '<th>Righe usate</th><th style="text-align:left">Esito</th></tr></thead>' +
      '<tbody>' + righe + '</tbody></table></div></div>' +

      '<p style="margin-top:var(--sp-5);color:var(--testo-mute);font-size:var(--t-sm);max-width:70ch">' +
      'Se una scheda risulta in errore, il sito usa per quella parte i dati dei file e continua a ' +
      'funzionare. Le cause più comuni sono il foglio non condiviso in lettura, il nome della scheda ' +
      'diverso da quello indicato in config.js, oppure l\'identificativo del foglio sbagliato.</p>' +
    '</div></section>';
  }
};
