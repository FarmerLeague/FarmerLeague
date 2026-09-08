# Farmer League — sito della lega

Sito della lega: homepage, classifica, calendario, giornale, rose, giovanili, albo d'oro.
Nessun framework, nessuna compilazione: si apre facendo doppio clic su `index.html`.

## Stato dei dati

| Dato | Stato |
|---|---|
| 12 squadre iscritte | complete: nome, sigla, colori, proprietario, anno di ingresso, nomi storici |
| 6 squadre storiche | inserite per l'albo d'oro (Le Foche Volanti, CSP, Ciki Mow, Valenciaga, Squadra 3, I Piskaleti) |
| Calendario, 35 giornate | importato, agganciato alle giornate di Serie A 4ª–38ª |
| Rose, 300 giocatori | nomi, ruoli e crediti dell'asta |
| Albo d'oro, 9 stagioni | classifiche complete, coppa, champions, palmarès e organigramma |
| Date delle giornate | agganciate alle giornate di Serie A (tabella in `config.js`) |
| Giovanili | **mancanti** — `youth.js` è vuoto |
| Squadra di Serie A dei giocatori | complete per tutti e 300 i giocatori |
| Articoli | tre pezzi di servizio da sostituire |

Quando è tutto reale, in `config.js` metti `mostraBadgeDemo: false`: spariscono bollini e riquadri gialli.

## Come si apre

- **Uso normale:** apri `index.html` (funziona anche senza rete; cambiano solo i caratteri tipografici).
- **File unico:** `python3 build.py` crea `fantalega-standalone.html`, tutto in un file.
- **Pubblicazione:** carica la cartella su GitHub Pages, Netlify o qualsiasi hosting statico.
- **Reimportare i file della lega:** `python3 importa.py rose.csv calendario.xlsx`.

## Struttura

```
index.html                 ordine di caricamento di stili e script
build.py                   versione in un file unico
importa.py                 converte CSV rose + XLSX calendario nei file dati
assets/
  css/  tokens.css         colori, caratteri, spazi
        components.css     navbar, card, tabelle, badge, footer
        pages.css          hero, giornale, rose, albo d'oro, calendario
  js/
    data/                  ← I DATI DELLA LEGA STANNO QUI
      config.js            nome lega, stagione, date di Serie A, regole, zone, categorie
      teams.js             squadre, proprietari, colori, stemmi
      fixtures.js          calendario e risultati
      standings.js         classifica calcolata dai risultati
      news.js              articoli del giornale
      squads.js            rose
      youth.js             giovanili
      honours.js           albo d'oro, stagione per stagione
    lib/                   date e testi, stemmi disegnati, router
    components/            intestazione, footer, blocchi condivisi
    pages/                 una pagina per file
```

## Come si inserisce un risultato

In `fixtures.js`, dentro la giornata giusta:

```js
{ casa: "tettenham", ospite: "isagogici",
  fantaCasa: 72.5, fantaOspite: 66.0,
  golCasa: null, golOspite: null, giocata: true, nota: "" }
```

I gol si calcolano da soli dai fantapunti (66 il primo, poi uno ogni 6) e la classifica si aggiorna da sé.
Appena una giornata ha almeno un risultato, homepage e classifica passano da sole dalla modalità
"pre-campionato" a quella di stagione in corso.

## Già pronto per diventare dinamico

- **Articoli:** `FL.data.news` ha la forma di una risposta JSON; sostituendo l'array con una `fetch` il giornale si alimenta da un database o da un modulo online, senza toccare le pagine.
- **Classifica:** calcolata dai risultati, quindi si aggiorna aggiornando il calendario.
- **Rose:** la pagina ha due modalità e passa da sola alla vista per reparto appena i ruoli sono presenti.
- **Stemmi:** disegnati dai colori finché non arrivano le immagini; poi basta il campo `logo`.
- **Campi nuovi:** tabelle e schede mostrano un trattino su quello che manca, quindi si può riempire poco per volta.

## Note

- **Date:** la giornata di lega N si gioca sulla giornata N+3 di Serie A. Le date stanno nella tabella `dateSerieA` in `config.js`: se la Lega sposta un turno basta correggere lì, oppure scrivere la data direttamente nella giornata dentro `fixtures.js`, che ha la precedenza.
- **Crediti d'asta:** non sono più mostrati da nessuna parte, ma restano salvati nel campo `costo` di `squads.js` (e la funzione `FL.data.creditiSpesi()` continua a esistere) nel caso servissero più avanti.
