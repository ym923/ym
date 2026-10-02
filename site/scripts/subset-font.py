"""Generate the site's Noto Serif SC WOFF2 subset.

Usage: python site/scripts/subset-font.py path/to/NotoSerifSC.ttf
Requires fonttools[woff]; regenerate after adding Chinese text.
"""
from pathlib import Path
import sys
from fontTools import subset

root = Path(__file__).resolve().parents[1] / 'dist'
text = ''.join(p.read_text(encoding='utf8') for p in root.rglob('*.html'))
text += ''.join(chr(i) for i in range(32, 127))
options = subset.Options()
options.flavor = 'woff2'
font = subset.load_font(sys.argv[1], options)
subsetter = subset.Subsetter(options=options)
subsetter.populate(text=text)
subsetter.subset(font)
output = root / 'fonts/noto-serif-sc.woff2'
output.parent.mkdir(parents=True, exist_ok=True)
subset.save_font(font, str(output), options)
print(f'{output.name}: {output.stat().st_size:,} bytes / {len(set(text))} characters')
