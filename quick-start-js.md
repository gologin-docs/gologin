# Quickstart browser automation

Let's look at the code which scrapes Amazon product data:

```javascript

import { GoLogin } from 'gologin'
import { config } from 'dotenv'
import { connect } as puppeteer from 'puppeteer'

config()
const gologin = GoLogin(process.env.GOLOGIN_API_KEY)

function downloadOrCreateBrowserProfile(profileId) {
  const profile;
  if (!profileId) {
    profile = await gologin.createProfile()
  } else {
	 profile = await gologin.downloadProfile(profileId)
  }
  return profile
}

function scrapeAmazonProductPage(url) {
  const profile_id = process.env.profile_id; 

  // Start anti-detect browser

  profile = await downloadOrCreateBrowserProfile(profile_id)
  const webSocket = await profile.start()
  
  // Automate using any tool, e.g. puppeteer

  const browser = await puppeteer.connect({
    browserWSEndpoint: wsUrl.toString(),
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();
  await page.goto('https://myip.link/mini');
  console.log(await page.content());
  await browser.close();
  await GL.stop();
}

```

Code above is single-file sample code. To kick start your own automation better run

```sh
git clone git@github.com:gologinapp/gologin-template-js.git
```
DOCS: https://github.com/gologinapp/gologin-template-js

# Install anti-detect browser

Web-corporations detect and ban automations.
To avoid getting banned install Orbita browser by GoLogin. 

Install Orbita browser

<details>
  <summary>Other browsers</summary>
 
  # GoLogin cloud Orbita browser

  # GoLogin cloud headless browser

</details>
Other br

## Get GoLogin API key

GoLogin helps your manage multiple browser profiles.



## 
