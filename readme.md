
This document provides documentation on how to 
automate browser using **JavaScript**

If you prefer **Python** then check **Python browser automation**[Link] instead.

For **HTTP-based* API version check this document instead [Link]

# What is GoLogin automation

Everything you do in the browser can be automated using GoLogin Automation Tools. 

This includes:
- Setting custom proxy configuration
- Visiting a number of web pages
- Getting information on these web pages
- Performing actions on these web pages

Here is a list of popular GoLogin automations:
- how to create multiple linkedin accounts
- how to create multiple facebook accounts
- how to create multiple amazon accounts
- how to scrape website

# How GoLogin automation works

[picture, Your automation code => Browser automation tooling => ]

To automate anything on Internet you need:
- browser
- browser automation tools
- your code which run specific automation. For examlple, creates accounts.

## Browser

GoLogin gives you two browser options:

1) GoLogin Orbita browser which runs on your local machine. [Download]
2) GoLogin Cloud Orbita Browser. [Link]
3) GoLogin Cloud Lightweight Browser.

GoLogin Orbita browser runs on your local machine. 
Supported Operating Systems: Windows, Mac, Linux.

GoLogin Cloud Browsers work on machines provided by GoLogin 
and gives your access to via web interface and automation API.

GoLogin Cloud Lightweight Browser is a headless browser. 
Which means it does not have the visual interface 
and still able to run the functional logic of a website.
It starts and works faster than the full-fledged browser 
and allows you to run *MOST* automations without any problems.


## GoLogin API

You have to use two different APIs to implement browser automation:
- GoLogin Automation API to anonymize your browser and requests;
- Browser Automation API to perform action in the browser.

Using GoLogin Automation API you can 
- start browser with specific browser profile
- create and manage browser profiles
- create and configure proxies
- connect profiles and proxies
- manage workspace users and permissions
- ... anything you can do in GoLogin user interface

If you not familiar with this terms, please see [LINK](Basic GoLogin Terms)

Find API_KEY in GoLogin account settings: [Link]


## Browser automation API
In addition to GoLogin API you will have to use browser automation API.
Browser automation API allows developers to easyly perform any action
a user would normally do on a website: 
- open website
- click a button
- enter some text to a input box
- ... anything else

Popular libraries for browser automation are:
- Puppeteer, a nodejs library
- Selenium, support java, python and many other languages
- Playwright, a nodejs library

### Browser Automation npm library [Link]

[https://github.com/gologinapp/gologin](https://github.com/gologinapp/gologin) is a NodeJs GoLogin Automation API.

Write JavaScript code to create, configure and run profiles.

Code example:
```

```


### Automate using Python

Please, see **Python browser automation library**[Link] instead.

### Automate via HTTP API

Please, see **GoLogin HTTP browser automation API**[Link] instead.

### More options

Please, contact support if you option you require is not listed. [Link] 

# Basic GoLogin Terms

## Browser tracking technologies
Browser tracking allows to establish identify of an internet user and 
track their path on the Internet.
Companies and indiduals use tracking technologies for commercial, legal and illegal purposes.
Browser tracking is a very dynamic area of technology.

## Browser anti-detect technologies
If you want to stay anonymous in Internet and perform action 
which are legal but tracking prevents you to perform
Browser anti-detect is very dynamic area of technology.
GoLogin engineering team have successfully created and proactively enhances
 best in the class browser anti-detect engine.

## Browser profile
GoLogin Browser Profiles are independant Orbita Browser configuration profiles.

GoLogin browser profile contains and gives websites dummy and unique information websites use for tracking
This info includes:
- CPU
- proxy and IP-address
- installed font faces
- installed pluging
- screen size
- operating system
- browser
- software versions
- ... much more tracking data

This way, website are not able to understand:
1) it is the same person using different GoLogin browser profiles
2) the user browser is using anti-detect technology

Using GoLogin you can have thousands of browser profiles in a workspace and easily manage them. 

## Run Profile
*Run Profile* is short for "Start Orbita web browser with specific pre-configured browser profile".
It's probaly, the most common action of GoLogin user interface.

## Workspace
Workspace contains all the information about 
- browser profiles, 
- proxies,
- user
- permissions
- connections between whose entities. 

Using GoLogin you can have thousands of browser profiles in a workspace and easily manage them. 
Every profiles has it's name, tags, directory, proxy link, user permission settigns.

For a complete GoLogin Glossary please see [Link].
