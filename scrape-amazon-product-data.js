
/**
 * 
 */

const { createBrowserProfile, defaultBrowserBinaryPath, defaultOsTmpDir } = require('gologin');
const { connect } = require('puppeteer-core');

const makeSingleUpvote = async () => {
  const browserProfile = createBrowserProfile({
    apiKey: 'GOLOGIN_API_KEY',
    profile_id: 'EXISTING_PROFILE_ID',
    executablePath: defaultBrowserBinaryPath(),
    tmpdir: defaultOsTmpDir(),
  });

  // It would take several seconds to start the browser
  const websocketUrl = await browserProfile.startL±ocal();

  // browser is the Puppeteer Browser instance
  // puppeteer docs: https://pptr.dev/api/puppeteer.browser
  const browser = await connect({
    browserWSEndpoint:    .toString(),
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  await page.goto('https://myip.link');
  
  console.log(await page.content());

  // GoLogin allows you to prevent being block by website.
  // Puppeteer allows you to simulate user actions on web page.
  // For more advanced browser automation check the docs:
  // https://pptr.dev/api/puppeteer.browsercontext/

  await browser.close();
  await GL.stopLocal({ posting: false });

};
makeSingleUpvote();