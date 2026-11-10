import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox'])
        pg=await (await b.new_context(viewport={'width':1180,'height':820})).new_page()
        errs=[]; pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('file:///home/claude/build/index.html'); await pg.wait_for_timeout(500)
        await pg.click('[data-act=enter][data-v=teacher]'); await pg.click('[data-act=tab][data-v=roster]'); await pg.wait_for_timeout(400)
        await pg.screenshot(path='/home/claude/build/qr_roster.png', full_page=True)
        await pg.click('[data-act=gfilter][data-v=pro]'); await pg.wait_for_timeout(200)
        await pg.fill('#rq','so'); await pg.wait_for_timeout(300)
        await pg.screenshot(path='/home/claude/build/qr_filter.png')
        await pg.fill('#rq',''); await pg.click('[data-act=gfilter][data-v=""]'); await pg.click('[data-act=sort][data-v=b5]'); await pg.wait_for_timeout(200)
        await pg.click('[data-act=rdetail]'); await pg.wait_for_timeout(300)
        await pg.screenshot(path='/home/claude/build/qr_detail.png')
        await pg.click('tr.click[data-v=lucas]'); await pg.wait_for_timeout(300)
        ok=await pg.evaluate("()=>document.querySelector('h2')?.textContent")
        print('child:',ok,'ERRORS',errs)
        await b.close()
asyncio.run(main())
