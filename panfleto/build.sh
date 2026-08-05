#!/usr/bin/env bash
# Gera os PDFs print-ready do panfleto A6 (frente e verso).
#
#   ./build.sh            → tamanho final exato + versão com 3mm de sangria
#
# Pipeline (o mesmo validado no banner 60x90):
#   HTML → Chrome headless --print-to-pdf → Ghostscript (texto em curvas, DeviceRGB, 300dpi)
#
# Requisitos: Google Chrome, ghostscript, poppler (pdfinfo/pdffonts).
set -euo pipefail

cd "$(dirname "$0")"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# 105x148mm e 111x154mm (com 3mm de sangria) em pontos PostScript
A6_W=297.64;  A6_H=419.53
BLD_W=314.65; BLD_H=436.54

# $1=html  $2=saída  $3=largura pt  $4=altura pt
render() {
  local html="$1" out="$2" w="$3" h="$4"
  local raw="$TMP/$(basename "$out" .pdf)-raw.pdf"

  "$CHROME" --headless --disable-gpu --no-pdf-header-footer \
            --virtual-time-budget=12000 \
            --print-to-pdf="$raw" "$html" >/dev/null 2>&1

  # -dNoOutputFonts: texto vira curva (nenhuma fonte para a gráfica instalar)
  # -sColorConversionStrategy=RGB: DeviceRGB sem ICC — evita as manchas do Quartz
  # -dFIXEDMEDIA + DEVICE*POINTS: força o tamanho exato (o Chrome arredonda)
  gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite \
     -dNoOutputFonts \
     -sColorConversionStrategy=RGB -dProcessColorModel=/DeviceRGB \
     -dFIXEDMEDIA -dDEVICEWIDTHPOINTS="$w" -dDEVICEHEIGHTPOINTS="$h" \
     -dPDFSETTINGS=/prepress \
     -dDownsampleColorImages=true -dColorImageResolution=300 -dColorImageDownsampleType=/Bicubic \
     -dDownsampleGrayImages=true  -dGrayImageResolution=300  -dGrayImageDownsampleType=/Bicubic \
     -dDownsampleMonoImages=true  -dMonoImageResolution=1200 \
     -sOutputFile="$out" "$raw"

  echo "  → $out"
  pdfinfo "$out" | grep -E '^(Pages|Page size)'
  local fonts; fonts="$(pdffonts "$out" | tail -n +3)"
  [ -z "$fonts" ] && echo "  fontes embutidas: nenhuma (texto em curvas) ✓" \
                  || { echo "  ATENÇÃO — sobrou fonte embutida:"; echo "$fonts"; }
}

echo "1/2 · tamanho final exato (105×148mm)"
render panfleto.html liga-nuvem-panfleto-a6.pdf "$A6_W" "$A6_H"

echo "2/2 · com 3mm de sangria (111×154mm)"
sed -e 's/size: 105mm 148mm/size: 111mm 154mm/' \
    -e 's/--bleed: 0mm/--bleed: 3mm/' \
    panfleto.html > "$TMP/panfleto-sangria.html"
# o Chrome resolve os assets pelo diretório do HTML
ln -s "$PWD/assets" "$TMP/assets"
render "$TMP/panfleto-sangria.html" liga-nuvem-panfleto-a6-sangria3mm.pdf "$BLD_W" "$BLD_H"

echo
echo "Pronto. Para conferir a renderização no Quartz (Preview/macOS):"
echo "  sips -s format png liga-nuvem-panfleto-a6.pdf --out /tmp/check.png"
