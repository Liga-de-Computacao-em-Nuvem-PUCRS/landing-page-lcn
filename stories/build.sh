#!/usr/bin/env bash
# Exporta as 4 stories de stories.html em PNG 1080×1920 (Instagram Stories).
# Uso: ./build.sh
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || { echo "Chrome não encontrado em $CHROME"; exit 1; }

names=(1-e-hoje 2-programacao 3-daiane 4-murilo)

mkdir -p "$DIR/out"
for i in 1 2 3 4; do
  out="$DIR/out/story-${names[$((i-1))]}.png"
  "$CHROME" \
    --headless=new \
    --disable-gpu \
    --hide-scrollbars \
    --force-device-scale-factor=1 \
    --window-size=1080,1920 \
    --virtual-time-budget=9000 \
    --screenshot="$out" \
    "file://$DIR/stories.html?s=$i" >/dev/null 2>&1
  echo "→ $out  ($(sips -g pixelWidth -g pixelHeight "$out" | tail -2 | tr -s ' \n' ' '))"
done

echo "Pronto: $DIR/out"
