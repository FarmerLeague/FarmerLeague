/* =========================================================
   HOMEPAGE
   Si adatta al momento della stagione: prima dell'esordio
   mostra l'esordio e i numeri dell'asta, poi risultati,
   classifica e statistiche di campo.
   ========================================================= */
FL.pages = FL.pages || {};

FL.pages.home = (function () {

  function etichettaGiornata(g) {
    if (!g) return "";
    return "Giornata " + g.numero + (g.serieA ? " · " + g.serieA + "ª di Serie A" : "");
  }

  function hero() {
    var c = FL.config, st = FL.data.statisticheLega();
    var iniziato = FL.data.campionatoIniziato();
    var sfida = FL.data.sfidaDellaSettimana();
    var giorni = iniziato ? null : FL.data.giorniAllaGiornata(FL.data.prossimaGiornata());

    var pannelloSfida = "";
    if (sfida) {
      var casa = FL.data.team(sfida.partita.casa), osp = FL.data.team(sfida.partita.ospite);
      var cls = FL.data.classifica();
      var sotto = function (t) {
        if (iniziato) return (cls.findIndex(function (r) { return r.teamId === t.id; }) + 1) + "ª in classifica";
        var scorsa = FL.data.piazzamentoUltimaStagione(t.id);
        return scorsa ? scorsa.pos + "ª lo scorso anno" : "esordio nella lega";
      };
      pannelloSfida = '' +
        '<aside class="sfida">' +
          '<div class="sfida__testa"><span>' + (iniziato ? "La sfida della settimana" : "Si comincia da qui") + '</span>' +
          '<span>' + etichettaGiornata(sfida.giornata) + '</span></div>' +
          '<div class="sfida__corpo">' +
            '<div class="sfida__squadra">' + FL.ui.stemma(casa, 74) +
              '<b>' + FL.ui.esc(casa.nome) + '</b><small>' + sotto(casa) + '</small></div>' +
            '<div class="sfida__vs">vs</div>' +
            '<div class="sfida__squadra">' + FL.ui.stemma(osp, 74) +
              '<b>' + FL.ui.esc(osp.nome) + '</b><small>' + sotto(osp) + '</small></div>' +
          '</div>' +
          '<div class="sfida__piede"><span>' + FL.ui.esc(sfida.giornata.data || "data da definire") + '</span>' +
          '<a href="#/calendario/' + sfida.giornata.numero + '" style="color:var(--verde);font-weight:700">Tutte le partite</a></div>' +
        '</aside>';
    }

    function stat(valore, etichetta, colore) {
      return '<div class="stat"><div class="stat__valore num ' + (colore || '') + '">' + valore + '</div>' +
        '<div class="stat__etichetta">' + etichetta + '</div></div>';
    }

    var numeri = iniziato
      ? stat(st.squadre, "Squadre") +
        stat(st.giornateGiocate + "/" + c.stagione.giornateTotali, "Giornate", "ciano") +
        stat(st.golTotali, "Gol segnati", "rosa") +
        stat(st.mediaGol.toFixed(1), "Media a partita", "oro")
      : stat(st.squadre, "Squadre") +
        stat(c.stagione.giornateTotali, "Giornate in programma", "ciano") +
        stat(FL.data.giocatoriTesserati(), "Giocatori tesserati", "rosa") +
        (giorni === null
          ? stat(FL.data.honours.length + "ª", "Stagione della lega", "oro")
          : stat(giorni > 0 ? giorni : "0", giorni === 1 ? "Giorno all'esordio" : "Giorni all'esordio", "oro"));

    var apertura = iniziato
      ? "Risultati, classifica, rose e il giornale della lega, tutto in un posto solo."
      : "Si parte dalla " + c.stagione.primaGiornataSerieA + "ª giornata di Serie A: rose chiuse, calendario fatto, manca solo il fischio d'inizio.";

    return '' +
      '<section class="hero"><div class="hero__arco" aria-hidden="true"></div><div class="wrap hero__griglia">' +
        '<div>' +
          '<span class="hero__stagione"><b>Stagione ' + FL.ui.esc(c.stagione.etichetta) + '</b>' +
            FL.ui.esc(c.lega.sottotitolo) + '</span>' +
          '<h1>' + FL.ui.esc(c.lega.nome) + '<span class="linea-2">' + FL.ui.esc(c.stagione.etichetta.replace("/", "·")) + '</span></h1>' +
          '<p class="hero__testo">' + FL.ui.esc(c.lega.motto) + ' ' + FL.ui.esc(apertura) + '</p>' +
          '<div class="hero__azioni">' +
            '<a class="btn btn--verde" href="' + (iniziato ? "#/classifica" : "#/calendario/1") + '">' +
              (iniziato ? "Vedi la classifica" : "Vedi la prima giornata") + '</a>' +
            '<a class="btn btn--fantasma" href="#/rose">Sfoglia le rose</a>' +
          '</div>' +
          '<div class="hero__stats">' + numeri + '</div>' +
        '</div>' +
        pannelloSfida +
      '</div></section>';
  }

  function classificaEPartite() {
    var iniziato = FL.data.campionatoIniziato();
    var ultima = FL.data.ultimaGiornata();
    var prossima = FL.data.prossimaGiornata();

    var colonna = "";
    if (ultima) {
      colonna += '<section class="pannello">' +
        '<div class="pannello__testa"><h3>Ultimi risultati</h3>' +
        '<span class="meta">' + etichettaGiornata(ultima) + '</span></div>' +
        '<div class="pannello__corpo mini-partite">' +
          ultima.partite.slice(0, 3).map(function (m) { return FL.components.rigaPartita(m, { stemma: 28 }); }).join("") +
        '</div>' +
        '<div class="pannello__piede"><span class="meta">altre ' + (ultima.partite.length - 3) + ' partite</span>' +
        '<a class="btn btn--fantasma btn--piccolo" href="#/calendario/' + ultima.numero + '">Vedi la giornata</a></div>' +
      '</section>';
    }
    if (prossima) {
      colonna += '<section class="pannello"' + (ultima ? ' style="margin-top:var(--sp-5)"' : '') + '>' +
        '<div class="pannello__testa"><h3>' + (iniziato ? "Prossima giornata" : "La prima giornata") + '</h3>' +
        '<span class="meta">' + FL.ui.esc(prossima.data || (prossima.serieA + "ª di Serie A")) + '</span></div>' +
        '<div class="pannello__corpo mini-partite">' +
          prossima.partite.slice(0, iniziato ? 3 : 6).map(function (m) {
            return FL.components.rigaPartita(m, { stemma: 28, fantapunti: false });
          }).join("") +
        '</div>' +
        '<div class="pannello__piede"><span class="meta">' + etichettaGiornata(prossima) + '</span>' +
        '<a class="btn btn--verde btn--piccolo" href="#/calendario/' + prossima.numero + '">Calendario completo</a></div>' +
      '</section>';
    }

    var testo = iniziato
      ? "La situazione dopo " + FL.data.giornateGiocate().length + " giornate. Tre punti a vittoria, uno il pareggio; i gol nascono dai fantapunti."
      : "Nessuna partita giocata: si parte tutti da zero, in ordine alfabetico.";

    return '' +
      '<section class="sezione rigato"><div class="wrap">' +
        '<div class="sezione-testa"><div>' +
          '<span class="kicker">Il campo</span>' +
          '<h2>Classifica e partite</h2>' +
          '<p>' + FL.ui.esc(testo) + '</p>' +
        '</div></div>' +
        '<div class="home-duo">' +
          '<section class="pannello">' +
            '<div class="pannello__testa"><h3>Classifica</h3><span class="meta">' +
              (iniziato ? "prime 6 squadre" : "tutte a quota zero") + '</span></div>' +
            FL.components.tabellaClassifica({ limite: 6, compatta: true, stemma: 28 }) +
            '<div class="pannello__piede">' + FL.components.legendaZone() +
            '<a class="btn btn--verde btn--piccolo" href="#/classifica">Vedi classifica</a></div>' +
          '</section>' +
          '<div>' + colonna + '</div>' +
        '</div>' +
      '</div></section>';
  }

  function numeri() {
    var iniziato = FL.data.campionatoIniziato();
    function card(badge, colore, nome, dettaglio) {
      return '<article class="stat-card">' +
        '<span class="badge badge--' + colore + '">' + badge + '</span>' +
        '<div class="stat-card__nome">' + FL.ui.esc(nome) + '</div>' +
        '<div class="stat-card__dett">' + FL.ui.esc(dettaglio) + '</div></article>';
    }

    var occhiello, titolo, link, corpo;
    if (iniziato) {
      var st = FL.data.statisticheLega();
      occhiello = "Numeri della stagione";
      titolo = "Chi sta facendo la differenza";
      link = '<a class="btn btn--fantasma btn--piccolo" href="#/classifica">Tutte le statistiche</a>';
      corpo =
        card("Capolista", "verde", FL.data.team(st.capolista.teamId).nome, st.capolista.punti + " punti in " + st.capolista.g + " giornate") +
        card("Miglior attacco", "rosa", FL.data.team(st.miglioreAttacco.teamId).nome, st.miglioreAttacco.gf + " gol segnati") +
        card("Miglior difesa", "ciano", FL.data.team(st.miglioreDifesa.teamId).nome, st.miglioreDifesa.gs + " gol subiti") +
        card("Più fantapunti", "oro", FL.data.team(st.topFantapunti.teamId).nome, st.topFantapunti.fantapunti.toFixed(1) + " totali");
    } else {
      var ultima = FL.data.campioneInCarica();
      var titolata = FL.data.palmares()[0];
      var esordienti = FL.data.teams.filter(function (t) { return !FL.data.piazzamentoUltimaStagione(t.id); });
      var prima = FL.data.prossimaGiornata();
      occhiello = "Prima del via";
      titolo = "Da dove si riparte";
      link = '<a class="btn btn--fantasma btn--piccolo" href="#/albo-doro">Vai all\'albo d\'oro</a>';
      corpo =
        card("Campione in carica", "oro", ultima.campione.nome, ultima.campione.owner + " · " + ultima.stagione) +
        card("Più titolata", "verde", FL.data.team(titolata.teamId).nome,
             titolata.scudetti + (titolata.scudetti === 1 ? " scudetto" : " scudetti") + " in " + FL.data.honours.length + " stagioni") +
        (esordienti.length
          ? card("Al debutto", "rosa", esordienti[0].nome, "prima stagione nella lega")
          : card("Squadre iscritte", "rosa", FL.data.teams.length + " squadre", "tutte confermate")) +
        card("Si comincia", "ciano", prima && prima.data ? prima.data : "data da definire",
             prima ? "1ª giornata · " + prima.serieA + "ª di Serie A" : "");
    }

    return '<section class="sezione--stretta fascia-stat" style="padding-block:var(--sp-7)"><div class="wrap">' +
      '<div class="sezione-testa"><div><span class="kicker kicker--rosa">' + occhiello + '</span>' +
      '<h2>' + titolo + '</h2></div>' + link + '</div>' +
      '<div class="stat-griglia">' + corpo + '</div></div></section>';
  }

  /* Le tre coppe, con il prossimo impegno in evidenza */
  function coppe() {
    if (!FL.data.competizioni || !FL.data.competizioni.length) return "";
    var prossimo = FL.coppe.prossimoTurno();

    return '<section class="sezione"><div class="wrap">' +
      '<div class="sezione-testa"><div><span class="kicker kicker--rosa">Oltre il campionato</span>' +
      '<h2>Le coppe</h2>' +
      '<p>Coppa Italia, Champions League e Supercoppa. I risultati nascono dagli stessi fantapunti del campionato.</p></div>' +
      '<a class="btn btn--fantasma btn--piccolo" href="#/coppe">Tutte le competizioni</a></div>' +
      (prossimo ? '<div class="nota-dati" style="border-color:rgba(255,111,165,.4);background:rgba(255,111,165,.07);color:#F3C6D8">' +
        '<b style="color:var(--rosa)">Prossimo impegno:</b> ' + FL.ui.esc(prossimo.comp.nome) + ' · ' +
        FL.ui.esc(prossimo.nome) + ', ' + prossimo.serieA + 'ª di Serie A</div>' : '') +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:var(--sp-4)">' +
      FL.data.competizioni.map(function (c) {
        return '<a class="stat-card" href="#/coppe/' + c.id + '" style="display:block">' +
          '<span class="badge badge--neutro">' + FL.ui.esc(c.scheda[0][1]) + '</span>' +
          '<div class="stat-card__nome" style="color:' + c.colore + ';margin-top:10px">' + FL.ui.esc(c.nome) + '</div>' +
          '<div class="stat-card__dett">' + FL.ui.esc(c.sottotitolo) + '</div></a>';
      }).join("") +
      '</div></div></section>';
  }

  function giornale() {
    var articoli = FL.data.newsOrdinate();
    if (!articoli.length) return "";
    var apertura = articoli.find(function (a) { return a.inEvidenza; }) || articoli[0];
    var altri = articoli.filter(function (a) { return a !== apertura; }).slice(0, 4);

    return '<section class="giornale"><div class="wrap">' +
      '<div class="testata">' +
        '<div><h2>Il Giornale della Lega</h2>' +
        '<div class="testata__sotto">Cronaca, pagelle e provocazioni scritte dai partecipanti</div></div>' +
        '<div class="testata__data">' + FL.ui.esc(FL.ui.oggiEsteso()) + '<br>Edizione ' +
        FL.ui.esc(FL.config.stagione.etichetta) + '</div>' +
      '</div>' +
      '<div class="giornale-griglia">' +
        '<a class="articolo-apertura" href="#/notizie/' + apertura.slug + '">' +
          FL.ui.copertina(apertura) +
          '<h3>' + FL.ui.esc(apertura.titolo) + '</h3>' +
          '<p>' + FL.ui.esc(apertura.anteprima) + '</p>' +
          FL.ui.firma(apertura) +
        '</a>' +
        '<div><div class="lista-articoli">' + altri.map(FL.components.rigaArticolo).join("") + '</div>' +
        '<a class="btn btn--carta" style="margin-top:var(--sp-5)" href="#/notizie">Tutte le notizie</a></div>' +
      '</div></div></section>';
  }

  function rose() {
    return '<section class="sezione"><div class="wrap">' +
      '<div class="sezione-testa"><div><span class="kicker kicker--rosso">Le squadre</span>' +
      '<h2>Rose della lega</h2>' +
      '<p>' + FL.data.teams.length + ' squadre, 25 giocatori ciascuna. Scegli una squadra per vedere la rosa completa.</p></div>' +
      '<a class="btn btn--fantasma btn--piccolo" href="#/rose">Apri le rose</a></div>' +
      '<div class="selettore-squadre">' +
        FL.data.teams.map(function (t) { return FL.components.tileSquadra(t, false, "#/rose/" + t.id); }).join("") +
      '</div></div></section>';
  }

  function storia() {
    var ultimo = FL.data.campioneInCarica();
    var testa = '<div class="sezione-testa"><div><span class="kicker kicker--oro">La storia</span>' +
      '<h2>Albo d\'oro</h2></div>' +
      '<a class="btn btn--oro btn--piccolo" href="#/albo-doro">Apri l\'albo d\'oro</a></div>';

    if (!ultimo) {
      return '<section class="sezione" style="background:var(--notte-scuro);border-top:1px solid var(--linea)"><div class="wrap">' +
        testa +
        '<div class="campione-carica">' + FL.ui.trofeo(86) +
        '<div><span class="badge badge--oro">Bacheca da riempire</span>' +
        '<h3 style="margin-top:12px">La storia della lega</h3>' +
        '<div class="owner">Mandami i vincitori delle stagioni passate e questa diventa la sala dei trofei.</div></div>' +
        '</div></div></section>';
    }

    var campione = FL.data.team(ultimo.campione.teamId);
    var titoli = FL.data.titoliPerSquadra().slice(0, 4);
    return '<section class="sezione" style="background:var(--notte-scuro);border-top:1px solid var(--linea)"><div class="wrap">' +
      testa +
      '<div class="campione-carica">' + FL.ui.trofeo(86) +
        '<div><span class="badge badge--oro">Campione in carica</span>' +
        '<h3 style="margin-top:12px">' + FL.ui.esc(campione.nome) + '</h3>' +
        '<div class="owner">' + FL.ui.esc(ultimo.campione.owner) + ' · stagione ' + FL.ui.esc(ultimo.stagione) + '</div></div>' +
        FL.ui.stemma(campione, 90) +
      '</div>' +
      '<div class="stat-griglia" style="margin-top:var(--sp-5)">' +
        titoli.map(function (t) {
          var s = FL.data.team(t.teamId);
          return '<article class="stat-card" style="display:flex;align-items:center;gap:var(--sp-4)">' +
            FL.ui.stemma(s, 40) +
            '<div><div class="stat-card__nome" style="font-size:1.25rem">' + FL.ui.esc(s.nome) + '</div>' +
            '<div class="stat-card__dett">' + t.titoli + (t.titoli === 1 ? ' titolo' : ' titoli') + '</div></div></article>';
        }).join("") +
      '</div></div></section>';
  }

  return {
    titolo: function () { return "Home"; },
    render: function () {
      return hero() + classificaEPartite() + numeri() + giornale() + coppe() + rose() + storia();
    }
  };
})();
