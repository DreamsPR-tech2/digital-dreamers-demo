"""Assemble site/index.html and site/board.html from src/.

Usage: python3 build.py          # full build (keeps Present mode, for rehearsing)
       python3 build.py --live   # hosted build: Present mode removed
"""
import re, sys, subprocess, pathlib
LIVE = '--live' in sys.argv
R = pathlib.Path(__file__).parent
S = R / 'src'
rd = lambda p: (S / p).read_text(encoding='utf-8')
parts = [rd(f) for f in ['n1_head.html', 'p2_data.js', 'p2b_screen.js', 'n2_strings.js', 'n3_core.js', 'n4_teacher.js']]
student = rd('n5_student.js').replace('__HELPERS__', rd('n5_helpers.js'))
html = ''.join(parts) + student
html = html.replace('__LOGO__', rd('logo_src.txt').strip())
if LIVE:
    # Hosted version: drop the full-screen "Present" button and its click handler.
    # Each snippet must match exactly once, so a source change can't silently leave Present mode in.
    for snip in ["""<button class="btn sm" data-act="present">${ico('board',15,'#fff')} ${es?'Presentar':'Present'}</button>""",
                 "case 'present':enterPresent();break;"]:
        n = html.count(snip)
        if n != 1:
            sys.exit(f'--live: expected 1 match for Present-mode snippet, found {n}: {snip[:60]}')
        html = html.replace(snip, '')
    print('live build: Present mode removed')
(R / 'site' / 'index.html').write_text(html, encoding='utf-8')
# live board = Somos Parte board + bridge script (talks to the app via postMessage)
board = rd('board/board_source.html').replace('<div class="foot">Write <i></i> Dictate <i></i> Build</div>', '')
i = board.rfind('</body>')
(R / 'site' / 'board.html').write_text(board[:i] + rd('board/bridge.html') + '\n' + board[i:], encoding='utf-8')
js = '\n'.join(re.findall(r'<script>(.*?)</script>', html, re.S))
(R / 'all.js').write_text(js, encoding='utf-8')
r = subprocess.run(['node', '--check', str(R / 'all.js')], capture_output=True, text=True)
print('syntax check:', 'OK' if r.returncode == 0 else r.stderr[:400])
(R / 'all.js').unlink()
if r.returncode != 0:
    sys.exit(1)
