#!/usr/bin/env python3
"""
Crea una versione del sito in un unico file HTML.

Il progetto vero resta quello diviso in cartelle: questo script serve
solo a produrre un file singolo comodo da aprire con un doppio clic,
da mandare in chat o da caricare su qualsiasi hosting.

Legge l'elenco dei file dai due caricatori dentro index.html, quindi
non va aggiornato quando si aggiunge una pagina nuova.

Uso:
    python3 build.py            -> genera fantalega-standalone.html
    python3 build.py sito.html  -> nome file a scelta
"""
import base64
import re
import sys
from pathlib import Path

BASE = Path(__file__).parent
sorgente = (BASE / "index.html").read_text(encoding="utf-8")


def elenco(blocco_id):
    """Percorsi elencati dentro un caricatore, nell'ordine di esecuzione."""
    blocco = re.search(
        r'<script id="%s">(.*?)</script>' % blocco_id, sorgente, re.S
    )
    if not blocco:
        raise SystemExit("caricatore %s non trovato in index.html" % blocco_id)
    return re.findall(r'"((?:css|js)/[^"]+)"', blocco.group(1))


def inline(percorsi, apre, chiude):
    pezzi = []
    for p in percorsi:
        testo = (BASE / "assets" / p).read_text(encoding="utf-8")
        pezzi.append(apre + "\n" + testo + "\n" + chiude)
    return "\n".join(pezzi)


def inline_img(m):
    """Incorpora le immagini nel file, così funziona anche da solo."""
    percorso = BASE / m.group(1)
    if not percorso.exists():
        return m.group(0)
    dati = base64.b64encode(percorso.read_bytes()).decode()
    tipo = "image/png" if percorso.suffix.lower() == ".png" else "image/jpeg"
    return '"data:%s;base64,%s"' % (tipo, dati)


out = sorgente
out = re.sub(
    r'<script id="caricatore-css">.*?</script>',
    lambda _: inline(elenco("caricatore-css"), "<style>", "</style>"),
    out, flags=re.S,
)
out = re.sub(
    r'<script id="caricatore-js">.*?</script>',
    lambda _: inline(elenco("caricatore-js"), "<script>", "</script>"),
    out, flags=re.S,
)
out = re.sub(r'"(assets/img/[^"]+)"', inline_img, out)

destinazione = BASE / (sys.argv[1] if len(sys.argv) > 1 else "fantalega-standalone.html")
destinazione.write_text(out, encoding="utf-8")
print(f"Creato: {destinazione}  ({destinazione.stat().st_size / 1024:.0f} KB)")
