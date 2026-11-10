import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox'])
        pg=await (await b.new_context(viewport={'width':1180,'height':820})).new_page()
        errs=[]; pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('file:///home/claude/build/index.html'); await pg.wait_for_timeout(500)
        await pg.click('[data-act=enter][data-v=teacher]'); await pg.click('[data-act=start]'); await pg.wait_for_timeout(300)
        await pg.click('[data-act=tab][data-v=roster]'); await pg.wait_for_timeout(300)
        await pg.screenshot(path='/home/claude/build/qc_roster.png')
        await pg.click('[data-act=class-report]'); await pg.wait_for_timeout(500)
        await pg.screenshot(path='/home/claude/build/qc_class.png', full_page=True)
        await pg.click('[data-act=tab][data-v=roster]'); await pg.click('[data-act=all-reports]'); await pg.wait_for_timeout(500)
        n=await pg.evaluate("()=>document.querySelectorAll('.report').length")
        await pg.click('[data-act=tab][data-v=screen]'); await pg.wait_for_timeout(300)
        await pg.screenshot(path='/home/claude/build/qc_big5.png')
        print('reports',n,'ERRORS',errs)
        await b.close()
asyncio.run(main())
