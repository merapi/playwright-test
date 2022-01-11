const playwright = require('playwright');

try {
    (async () => {
        for (const browserType of ['chromium']) { //, 'firefox', 'webkit'
            const browser = await playwright[browserType].launch();
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto('about:gpu');
            await page.screenshot({path: `./artifacts/example-${browserType}.png`});
            await browser.close();
        }
    })();
} catch (err) {
    console.error(err)
    process.exit(1);
}
