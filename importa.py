#!/usr/bin/env python3
"""
Importa i file della lega (rose in CSV e calendario in XLSX)
nei file dati del sito.

Uso:  python3 importa.py rose.csv calendario.xlsx
"""
import csv
import json
import re
import sys
from pathlib import Path

BASE = Path(__file__).parent
DATI = BASE / "assets" / "js" / "data"

CSV = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("/mnt/user-data/uploads/file_per_fantaleghe__1_.csv")
XLSX = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("/mnt/user-data/uploads/Calendario_Farmer-League.xlsx")

# --- Anagrafica squadre: id interno, nome mostrato, sigla, colori, stemma ---
SQUADRE = [
    ("birrareal",  "Birrareal",           "BIR", "#E8A33D", "#3B2410", "scudo",   "banda"),
    ("brigate",    "Brigate Ebosse",      "BRI", "#1A1A1A", "#C8102E", "scudo",   "strisce"),
    ("ponferradina", "Ponferradina FC",   "PON", "#2F6BFF", "#0C1B3F", "cerchio", "strisce"),
    ("thorino",    "Thorino",             "THO", "#8B1A2B", "#2A0A11", "scudo",   "meta"),
    ("isagogici",  "Isagogici Anemoni",   "ISA", "#B14BFF", "#20083A", "rombo",   "banda"),
    ("tettenham",  "Tettenham",           "TET", "#F2F2F7", "#132257", "scudo",   "meta"),
    ("tunesquad",  "Tune Squad",          "TUN", "#F5821F", "#2B3A8C", "cerchio", "banda"),
    ("ziopeiro",   "Atletico Ziopeiro",   "ZIO", "#D51B22", "#F2F2F7", "scudo",   "strisce"),
    ("masterchef", "Masterchef United",   "MAS", "#E23B3B", "#F5E9DC", "rombo",   "banda"),
    ("shole",      "A.S. Shole",          "SHO", "#46E3E8", "#04333A", "cerchio", "meta"),
    ("csm",        "C.S.M. FC",           "CSM", "#17D97F", "#08351F", "scudo",   "banda"),
    ("pdortmund",  "Borussia Pdortmund",  "PDO", "#FFC24B", "#151515", "scudo",   "strisce"),
]

# Come i nomi compaiono nei due file di origine -> id interno
ALIAS = {
    "birrareal": "birrareal",
    "brigateebosse": "brigate", "brigate ebosse": "brigate",
    "ponferradina": "ponferradina", "ponferradina fc": "ponferradina",
    "thorino": "thorino",
    "isagogici anemoni": "isagogici",
    "tettenham": "tettenham",
    "tune squad": "tunesquad", "tunesquad": "tunesquad",
    "atletico ziopeiro": "ziopeiro",
    "masterchef united": "masterchef",
    "a.s.shole": "shole", "as shole": "shole", "a.s. shole": "shole",
    "c.s.m. fc": "csm", "csm fc": "csm",
    "borussia pdortmund": "pdortmund",
}


def team_id(nome):
    chiave = re.sub(r"\s+", " ", nome.strip().lower())
    if chiave not in ALIAS:
        raise SystemExit(f"Squadra non riconosciuta: {nome!r}")
    return ALIAS[chiave]


# ------------------------------------------------------------------ rose
righe = [r for r in csv.reader(CSV.open(encoding="utf-8-sig")) if r and r[0] != "$"]
rose = {}
for nome, pid, costo in righe:
    rose.setdefault(team_id(nome), []).append({"id": int(pid), "costo": int(costo)})
for v in rose.values():
    v.sort(key=lambda g: -g["costo"])

# ------------------------------------------------------------ calendario
from openpyxl import load_workbook

ws = load_workbook(XLSX, read_only=True).active
griglia = [list(r) for r in ws.iter_rows(values_only=True)]

giornate = {}
for y, riga in enumerate(griglia):
    for x, cella in enumerate(riga):
        if not isinstance(cella, str):
            continue
        m = re.match(r"(\d+)ª Giornata lega", cella.strip())
        if not m:
            continue
        numero = int(m.group(1))
        serie_a = None
        for c in riga[x + 1:x + 6]:
            if isinstance(c, str):
                ms = re.match(r"(\d+)ª Giornata serie a", c.strip(), re.I)
                if ms:
                    serie_a = int(ms.group(1))
                    break
        partite = []
        for r2 in griglia[y + 1:y + 7]:
            casa, ospite = r2[x], r2[x + 3]
            if not isinstance(casa, str) or not isinstance(ospite, str):
                break
            partite.append({"casa": team_id(casa), "ospite": team_id(ospite)})
        giornate[numero] = {"numero": numero, "serieA": serie_a, "partite": partite}

calendario = [giornate[n] for n in sorted(giornate)]

# controlli
for g in calendario:
    squadre = [p["casa"] for p in g["partite"]] + [p["ospite"] for p in g["partite"]]
    assert len(g["partite"]) == 6, f"giornata {g['numero']}: {len(g['partite'])} partite"
    assert len(set(squadre)) == 12, f"giornata {g['numero']}: squadra ripetuta"

# ------------------------------------------------------------- scrittura
def js_squadre():
    voci = []
    for tid, nome, sigla, c1, c2, forma, fascia in SQUADRE:
        voci.append(
            f'  {{ id: "{tid}", nome: "{nome}", sigla: "{sigla}", owner: "Da inserire", '
            f'colori: ["{c1}", "{c2}"], forma: "{forma}", fascia: "{fascia}", dal: null, logo: null }}'
        )
    return ",\n".join(voci)


def js_calendario():
    blocchi = []
    for g in calendario:
        partite = ",\n".join(
            f'      {{ casa: "{p["casa"]}", ospite: "{p["ospite"]}", golCasa: null, golOspite: null, '
            f'fantaCasa: null, fantaOspite: null, giocata: false, nota: "" }}'
            for p in g["partite"]
        )
        blocchi.append(
            f'  {{\n    numero: {g["numero"]}, serieA: {g["serieA"]}, data: null,\n'
            f'    partite: [\n{partite}\n    ]\n  }}'
        )
    return ",\n".join(blocchi)


def js_rose():
    blocchi = []
    for tid, nome, *_ in SQUADRE:
        gg = ",\n".join(
            f'    {{ idFanta: {g["id"]}, nome: null, ruolo: null, club: null, costo: {g["costo"]} }}'
            for g in rose[tid]
        )
        blocchi.append(f'  {tid}: [\n{gg}\n  ]')
    return ",\n".join(blocchi)


print(f"Squadre: {len(SQUADRE)} · giornate: {len(calendario)} · "
      f"giocatori: {sum(len(v) for v in rose.values())}")

(BASE / "generato_squadre.js").write_text(js_squadre(), encoding="utf-8")
(BASE / "generato_calendario.js").write_text(js_calendario(), encoding="utf-8")
(BASE / "generato_rose.js").write_text(js_rose(), encoding="utf-8")
print("Frammenti scritti in generato_*.js")
