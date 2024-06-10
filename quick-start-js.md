
# Get Started with NodeJs Browser Automation

#  Install Orbita Browser

# <CODE SAMPLE>

To run this code:

Save this file in Downloads https://raw.githubusercontent.com/gologinapp/gologin/master/examples/scrape-amazon-product-data.js

```sh
API_KEY=<GOLOGIN_API_KEY> scriptToRun=scrape-amazon-product-data.js npx gologin-js
``` 

Optionally, you can create browser profile in you GoLogin account and use it to make the request to amazon.

```sh
API_KEY=<GOLOGIN_API_KEY> scriptToRun=scrape-amazon-product-data.js profile_id=<gologin_profile_id> npx gologin-js-examples -c "run_script"
``` 

# How it works

The command above works like this:
- creates or uses existing gologin browser profile
- starts orbita browser with that profile
- connect browser automation tool call puppeteer to that browser
- sends commands to browser using puppeteer: open page, get page data, click ...

For more details please read [LINK] /architecture.md 

# Create your own automatioon

[LINK] gologin/gologin-js-example 
as a great starting point to create your automation.

Just `git clone github:gologin/gologin-js-example`

## Create JavaScript Source File

<INLINE!!!!> fixed https://raw.githubusercontent.com/gologinapp/gologin/master/examples/example-amazon-cloud-browser.js

Copy/paste this code and save the file.

For more examples please see https://github.com/gologinapp/gologin/tree/master/examples.
profile id instead of `EXISTING_PROFILE_ID` in source code.

## Run 

```
node automation.js
```

Hooray! 

git clone githubs gologin examples




