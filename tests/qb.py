import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox'])
        pg=await (await b.new_context(viewport={'width':1180,'height':820})).new_page()
        errs=[]; pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('file:///home/claude/build/index.html'); await pg.wait_for_timeout(500)
        await pg.click('[data-act=enter][data-v=teacher]'); await pg.click('[data-act=start]'); await pg.wait_for_timeout(1500)
        await pg.screenshot(path='/home/claude/build/qb_board.png')
        fr=pg.frame_locator('#boardfr')
        await fr.locator('#list li[data-step="4"]').click(); await pg.wait_for_timeout(300)
        await fr.locator('#dreamsRec').click(); await pg.wait_for_timeout(900)
        await pg.screenshot(path='/home/claude/build/qb_box4.png')
        await pg.click('[data-act=donebox]'); await pg.wait_for_timeout(1500)
        await pg.screenshot(path='/home/claude/build/qb_board2.png')
        print('ERRORS',errs)
        await b.close()
asyncio.run(main())
