import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox'])
        pg=await (await b.new_context(viewport={'width':1180,'height':820})).new_page()
        errs=[]; pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('file:///home/claude/build/index.html'); await pg.wait_for_timeout(500)
        await pg.click('[data-act=enter][data-v=teacher]'); await pg.wait_for_timeout(400)
        await pg.click('[data-act=toggle-dd][data-v=tp1]'); await pg.wait_for_timeout(300)
        await pg.screenshot(path='/home/claude/build/qt_today.png', full_page=True)
        await pg.click('.hero2 [data-act=b5open-pick]'); await pg.wait_for_timeout(300)
        await pg.screenshot(path='/home/claude/build/qt_pick.png')
        await pg.click('[data-act=b5go][data-v=sofia]'); await pg.wait_for_timeout(400)
        await pg.screenshot(path='/home/claude/build/qt_form.png')
        print('ERRORS',errs)
        await b.close()
asyncio.run(main())
