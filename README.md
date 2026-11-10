# DREAMS Inclusive Early Learning Framework™ · Teacher experience demo

iPad demo of the teacher experience (Today · Plan · Progress · Big 5) with the live Somos Parte lesson board.
**All children, classes and numbers are fictional demo data.** No real child, family, teacher or agency information belongs in this repo.

## Run it
- **Locally:** `python3 -m http.server -d site 8000` then open http://localhost:8000
- **Live (GitHub Pages):** Settings → Pages → Source: *GitHub Actions*. Every push to `main` runs `build.py` and deploys `site/`.
- Needs a first online load for the Poppins font (Google Fonts); after that it runs from cache.

## Layout
- `site/` – the deployable static app (`index.html`, `board.html`, `img/`, `js/`, `cover.jpg`)
- `src/` – readable source parts; `python3 build.py` concatenates them into `site/index.html` and `site/board.html`
- `tests/` – Playwright walkthroughs (`pip install playwright && playwright install chromium`; point the URL at your local server)

## Notes
- State is saved in the browser (`localStorage`, key `dreams-te-v1`); "Restart demo" on the sign-in screen clears it.
- Hidden "Demo extras" switch (accessibility panel, or add `#extras` to the URL) re-enables the Spanish toggle and the Student/Family views.
- Group standard: readiness score = 70% Big 5 composite + 30% last-4-lesson independence; Advanced ≥ 68, Progressing 45–67, Beginning < 45.
