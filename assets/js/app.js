/* =========================================================
   AVVIO DEL SITO
   Registra le rotte, legge il foglio Google se è attivo,
   poi monta intestazione, contenuto e footer.
   ========================================================= */
(function () {
  FL.router
    .aggiungi("/",                 FL.pages.home,       "/")
    .aggiungi("/classifica",       FL.pages.classifica, "/classifica")
    .aggiungi("/calendario",       FL.pages.calendario, "/calendario")
    .aggiungi("/calendario/:n",    FL.pages.calendario, "/calendario")
    .aggiungi("/notizie",          FL.pages.notizie,    "/notizie")
    .aggiungi("/notizie/:slug",    FL.pages.articolo,   "/notizie")
    .aggiungi("/rose",             FL.pages.rose,       "/rose")
    .aggiungi("/rose/:id",         FL.pages.rose,       "/rose")
    .aggiungi("/giovanili",        FL.pages.giovanili,  "/giovanili")
    .aggiungi("/giovanili/:id",    FL.pages.giovanili,  "/giovanili")
    .aggiungi("/coppe",            FL.pages.coppe,      "/coppe")
    .aggiungi("/coppe/:id",        FL.pages.coppe,      "/coppe")
    .aggiungi("/albo-doro",        FL.pages.albo,       "/albo-doro")
    .aggiungi("/dati",             FL.pages.dati,       "/dati");

  function avvia() {
    if (FL.cronista) FL.cronista.integra();      // pezzi di giornata automatici
    FL.components.header.monta(document.getElementById("intestazione"));
    FL.components.footer.monta(document.getElementById("piede"));
    FL.router.avvia(document.getElementById("app"));
  }

  document.addEventListener("DOMContentLoaded", function () {
    var app = document.getElementById("app");
    var conFoglio = FL.config.foglio && FL.config.foglio.attivo;

    if (!conFoglio) { avvia(); return; }

    /* Attesa breve e discreta mentre arrivano i dati dal foglio */
    app.innerHTML = '<div class="vuoto" style="margin:15vh auto;max-width:420px;border:0">' +
      '<h3>Caricamento dati</h3><p>Lettura del foglio della lega…</p></div>';

    FL.foglio.carica().then(avvia).catch(avvia);
  });
})();
