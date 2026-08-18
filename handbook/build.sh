#!/usr/bin/env bash
# Gera o PDF do Handbook do Membro (A4, 8 páginas).
#
#   ./build.sh   → liga-nuvem-handbook-2026-2.pdf
#
# Pipeline (o mesmo validado no banner e no panfleto):
#   HTML → Chrome headless --print-to-pdf → Ghostscript (DeviceRGB, 300dpi)
#
# Diferença deliberada em relação ao panfleto: SEM -dNoOutputFonts.
# O handbook é para consumo digital — o texto precisa ficar selecionável,
# pesquisável e com os links clicáveis (as URLs também aparecem literais
# no texto, então nada quebra em viewers que ignoram anotações).
#
# Requisitos: Google Chrome, ghostscript, poppler (pdfinfo).
set -euo pipefail

cd "$(dirname "$0")"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# A4 em pontos PostScript
A4_W=595.28; A4_H=841.89

OUT=liga-nuvem-handbook-2026-2.pdf
RAW="$TMP/handbook-raw.pdf"

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
          --virtual-time-budget=12000 \
          --print-to-pdf="$RAW" handbook.html >/dev/null 2>&1

# -sColorConversionStrategy=RGB: DeviceRGB sem ICC — evita as manchas do Quartz
# -dFIXEDMEDIA + DEVICE*POINTS: força o tamanho exato (o Chrome arredonda)
gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite \
   -sColorConversionStrategy=RGB -dProcessColorModel=/DeviceRGB \
   -dFIXEDMEDIA -dDEVICEWIDTHPOINTS="$A4_W" -dDEVICEHEIGHTPOINTS="$A4_H" \
   -dPDFSETTINGS=/prepress \
   -dDownsampleColorImages=true -dColorImageResolution=300 -dColorImageDownsampleType=/Bicubic \
   -dDownsampleGrayImages=true  -dGrayImageResolution=300  -dGrayImageDownsampleType=/Bicubic \
   -dDownsampleMonoImages=true  -dMonoImageResolution=1200 \
   -sOutputFile="$OUT" "$RAW"

echo "  → $OUT"
pdfinfo "$OUT" | grep -E '^(Pages|Page size)'
# /URI fica dentro de object streams comprimidos — strings não enxerga
links="$(python3 - "$OUT" <<'EOF'
import re, zlib, sys
data = open(sys.argv[1], 'rb').read()
n = data.count(b'/URI')
for m in re.finditer(rb'stream\r?\n', data):
    end = data.find(b'endstream', m.end())
    try: n += zlib.decompress(data[m.end():end]).count(b'/URI')
    except Exception: pass
print(n)
EOF
)"
echo "  anotações de link (/URI): $links"
echo
echo "Para conferir a renderização no Quartz (Preview/macOS):"
echo "  sips -s format png $OUT --out /tmp/check.png"
