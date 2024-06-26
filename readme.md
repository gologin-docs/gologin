Quickstart browser automation
====

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
DOCS: https://github.com/gologin-docs/gologin-template-js

For python-based automation see https://github.com/gologinapp/pygologin.


Step 1: Install anti-detect browser
====

Web-corporations detect and ban automations.
To avoid getting banned install Orbita browser by GoLogin. https://useorbita.com/. 


<details>
  <summary>Alternatively, you can use cloud or headless browser</summary>
 
  # GoLogin cloud Orbita browser

  # GoLogin cloud headless browser

</details>


Step 2: Get GoLogin API key
====

GoLogin helps your manage multiple browser profiles and enable anti-detect.

Get your API_TOKEN in Settings > [API](https://app.gologin.com/personalArea/TokenApi) > **New Token**. 

![Get API Token](https://user-images.githubusercontent.com/12957968/146891933-c3b60b4d-c850-47a5-8adf-bc8c37372664.gif)


<details>
<summary>How anti-detect technology works</summary>

## Web corporations track users
Web corporations identify and track user path in internet using: 

Browser tracking is a very dynamic area of technology.
- CPU info
- IP-address
- installed fonts
- installed browser extensions
- screen size
- operating system and browser version
- network
- geo location
- any other data available

Tracking is a fast-pace tech domain.

## How anti-detect works

In every profile GoLogin provides a unique combination of parameters corporations use for tracking.

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


Step 3: Connect puppeteer to browser
====

Use puppeteer to automate actions:
- open webpate
- get page data
- fill input
- click button
- any action a user can do on a web page

<details>
  <summary>Alternatively, use Selenium or any other tool</summary>

  Orbita browser by GoLogin is based on modern web technologies. 
  You can pick any technology to implement automation.
  We created templates using puppeteer.
  

  ### Selenium
  Supports python, java, or many other languages.
  https://www.selenium.dev/
  
  
  ### Playwright
  https://playwright.dev/

  ### Cypress
  https://www.cypress.io/
  
  ### BrowserStack
  https://www.browserstack.com/
 
</details>


Step 4: Run automation commands
====

We have implemented automation template which cover most automation need, including:
- scraping page data
- upvoting
- monitoring competitor website


Git clone repository and pick example that works best for you: 
https://github.com/gologin-docs/gologin-template-js/tree/main/examples  

Glossary
====

## Profile

## 


