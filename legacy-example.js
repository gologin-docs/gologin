import puppeteer from 'puppeteer-core';

// FIXME import GoLogin from 'gologin';
import GoLogin from '../src/gologin.js';


const { connect } = puppeteer;

(async () => {

  // FIXME GoLogin is actually just a single browser profile
  // FIXME rename GL => browserProfile
  // FIXME rename GoLogin => downloadBrowserProfile
  const GL = new GoLogin({
    token: 'yU0token',
    profile_id: 'yU0Pr0f1leiD',
  });

  // FIXME rename wsUrl => webSocketUrl
  // FIXME await and .catch at the same time
  const { status, wsUrl } = await GL.start().catch((e) => {
    console.trace(e);

    return { status: 'failure' };
  });

  // FIXME Use try/catch/finally instead
  if (status !== 'success') {
    console.log('Invalid status');

    return;
  }

  const browser = await connect({
    browserWSEndpoint: wsUrl.toString(),
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  // FIXME more realictic example, like amazon.com
  await page.goto('https://myip.link/mini');

  console.log(await page.content());

  // FIXME add click to the example

  // FIXME this should go to finally after try
  await browser.close();
  await GL.stop();
})();