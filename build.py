#!/usr/bin/env python3
"""
Crea una versione del sito in un unico file HTML.

Il progetto vero resta quello diviso in cartelle: questo script serve
solo a produrre un file singolo comodo da aprire con un doppio clic,
da mandare in chat o da caricare su qualsiasi hosting.

Uso:
    python3 build.py            -> genera fantalega-standalone.html
    python3 build.py sito.html  -> nome file a scelta
"""
import re
import sys
from pathlib import Path

BASE = Path(__file__).parent
sorgente = (BASE / "index.html").read_text(encoding="utf-8")


def inline_css(m):
    percorso = BASE / m.group(1)
    return "<style>\n" + percorso.read_text(encoding="utf-8") + "\n</style>"


def inline_js(m):
    percorso = BASE / m.group(1)
    return "<script>\n" + percorso.read_text(encoding="utf-8") + "\n</script>"


out = re.sub(r'<link rel="stylesheet" href="([^"]+)">', inline_css, sorgente)
out = re.sub(r'<script src="([^"]+)"></script>', inline_js, out)

destinazione = BASE / (sys.argv[1] if len(sys.argv) > 1 else "fantalega-standalone.html")
destinazione.write_text(out, encoding="utf-8")
print(f"Creato: {destinazione}  ({destinazione.stat().st_size / 1024:.0f} KB)")
