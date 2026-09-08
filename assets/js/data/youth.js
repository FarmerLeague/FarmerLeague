/* =========================================================
   GIOVANILI
   ---------------------------------------------------------
   Ancora da compilare. Struttura attesa, una chiave per squadra:

   FL.data.youth = {
     birrareal: [
       { nome: "Nome Cognome", ruolo: "ATT", eta: 19, nato: 2007,
         club: "Squadra di appartenenza", valore: 12,
         presenze: 8, gol: 3, media: 6.2,
         descrizione: "Nota dell'osservatore", foto: null }
     ]
   };

   Obbligatori solo nome e ruolo: gli altri campi si aggiungono
   quando ci sono e nel frattempo restano trattini.
   ========================================================= */
FL.data.youth = {};

FL.data.vivaioDi = function (teamId) { return FL.data.youth[teamId] || []; };
FL.data.vivaiCompilati = function () { return Object.keys(FL.data.youth).length > 0; };
