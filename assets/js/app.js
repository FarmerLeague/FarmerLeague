/* =========================================================
   AVVIO DEL SITO
   Registra le rotte e monta intestazione, contenuto e footer.
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
    .aggiungi("/albo-doro",        FL.pages.albo,       "/albo-doro");

  document.addEventListener("DOMContentLoaded", function () {
    FL.components.header.monta(document.getElementById("intestazione"));
    FL.components.footer.monta(document.getElementById("piede"));
    FL.router.avvia(document.getElementById("app"));
  });
})();
