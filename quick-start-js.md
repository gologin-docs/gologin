# Quickstart browser automation

Let's look at the code which scrapes Amazon product data:

```javascript
// file: scrape-amazon-product-data.js

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

scrapeAmazonProductPage("")

```

Code above is the very mininal code sample. To start real project better use template:

```sh
git clone git@github.com:gologinapp/gologin-template-js.git
```
DOCS: https://github.com/gologinapp/gologin-template-js


# Install anti-detect browser

Web-corporations detect and ban automations.
To avoid getting banned install Orbita browser by GoLogin. https://useorbita.com/. 


<details>
  <summary>Alternatively, you can use cloud or headless browser</summary>
 
  # GoLogin cloud Orbita browser

  # GoLogin cloud headless browser

</details>


# Get GoLogin API key

GoLogin helps your manage multiple browser profiles and enable anti-detect.

<details>
  <summary>How anti-detect technology works</summary>

  ## How  deanonymization works

  ## How anonymization works

</details>


```properties
// .env file
GOLOGIN_API_KEY=
```

<details>
<summary>Or, use OS environment variable instead</summary>
```
GOLOGIN_API_KEY="12312312" node scrape-amazon-product-data.js
```
</details>


# Manipulate browser using puppeteer

<details>
  <summary>Use selenium or other tools istead</summary>

  Orbita is based on stardart web technologies. 
  You can pick any technology to implement automation.  

  # Selenium
  # Cypress
  # BrowserStack
  # Playwright

</details>


# Automation commands

We have implemented automation template which cover most automation need, including:
- scraping page data
- upvoting
- monitoring competitor website

Find more examples: https://github.com/gologin-docs/gologin-template-js/tree/main/examples  

# Glossary

