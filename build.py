"""Assemble site/index.html and site/board.html from src/.

Usage: python3 build.py          # presentation build: Present mode + "Check it Out Yourself" QR card
       python3 build.py --live   # hosted build: no Present mode, no QR card
Both builds: tapping the NOW box opens it on the board; "Record this box" opens the record screen.
"""
import re, sys, subprocess, pathlib
LIVE = '--live' in sys.argv
R = pathlib.Path(__file__).parent
S = R / 'src'
rd = lambda p: (S / p).read_text(encoding='utf-8')

# Changes applied only to the hosted (--live) build: (description, file, find, replace).
# Each "find" must match exactly once, so a source update can't silently skip one.
LIVE_EDITS = [
    ('remove Present button', 'index',
     """<button class="btn sm" data-act="present">${ico('board',15,'#fff')} ${es?'Presentar':'Present'}</button>""", ''),
    ('remove Present click handler', 'index',
     "case 'present':enterPresent();break;", ''),
]

def apply_live(text, which):
    for desc, f, find, repl in LIVE_EDITS:
        if f != which:
            continue
        n = text.count(find)
        if n != 1:
            sys.exit(f'--live: "{desc}" expected 1 match in {which}, found {n}. Source changed? Update LIVE_EDITS in build.py.')
        text = text.replace(find, repl)
    return text

parts = [rd(f) for f in ['n1_head.html', 'p2_data.js', 'p2b_screen.js', 'n2_strings.js', 'n3_core.js', 'n4_teacher.js']]
student = rd('n5_student.js').replace('__HELPERS__', rd('n5_helpers.js'))
html = ''.join(parts) + student
html = html.replace('__LOGO__', rd('logo_src.txt').strip())
# live board = Somos Parte board + bridge script (talks to the app via postMessage)
board = rd('board/board_source.html').replace('<div class="foot">Write <i></i> Dictate <i></i> Build</div>', '')
i = board.rfind('</body>')
board_extra = rd('board/bridge.html')
if not LIVE:
    # presentation build only: "Check it Out Yourself" QR card pointing at the hosted demo
    board_extra += '\n' + rd('board/qr_card.html').replace('__QR_SVG__', rd('board/qr_live.svg').strip())
board = board[:i] + board_extra + '\n' + board[i:]
if LIVE:
    html, board = apply_live(html, 'index'), apply_live(board, 'board')
    print('live build: Present mode removed, no QR card')
(R / 'site' / 'index.html').write_text(html, encoding='utf-8')
(R / 'site' / 'board.html').write_text(board, encoding='utf-8')

ok = True
for name, src in [('index', html), ('board', board)]:
    js = '\n'.join(re.findall(r'<script>(.*?)</script>', src, re.S))
    (R / 'all.js').write_text(js, encoding='utf-8')
    r = subprocess.run(['node', '--check', str(R / 'all.js')], capture_output=True, text=True)
    (R / 'all.js').unlink()
    print(f'syntax check ({name}):', 'OK' if r.returncode == 0 else r.stderr[:400])
    ok = ok and r.returncode == 0
if not ok:
    sys.exit(1)
