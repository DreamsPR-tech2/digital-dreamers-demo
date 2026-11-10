import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox'])
        for vp in [(1180,820),(1366,768)]:
            pg=await (await b.new_context(viewport={'width':vp[0],'height':vp[1]})).new_page()
            errs=[]; pg.on('pageerror', lambda e: errs.append(str(e)))
            await pg.goto('file:///home/claude/build/index.html'); await pg.wait_for_timeout(500)
            await pg.click('[data-act=enter][data-v=teacher]'); await pg.click('[data-act=start]'); await pg.wait_for_timeout(1500)
            await pg.click('[data-act=present]'); await pg.wait_for_timeout(600)
            await pg.screenshot(path=f'/home/claude/build/qpr_{vp[0]}.png')
            fr=pg.frame_locator('#boardfr')
            step=lambda: fr.locator('#ptext').inner_text()
            print(vp,'start',await step())
            await pg.keyboard.press('Space'); await pg.wait_for_timeout(1200); print('after Space',await step())
            await pg.keyboard.press('3'); await pg.wait_for_timeout(1200); print('after 3',await step())
            await pg.keyboard.press("Enter"); await pg.wait_for_timeout(3500)
            await pg.screenshot(path=f'/home/claude/build/qpr_open_{vp[0]}.png')
            await pg.keyboard.press('b'); await pg.wait_for_timeout(1500)
            await pg.keyboard.press('Escape'); await pg.wait_for_timeout(400)
            print('present class after Esc',await pg.evaluate("()=>document.body.classList.contains('present')"),errs)
            await pg.close()
        await b.close()
asyncio.run(main())
