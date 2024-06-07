
- rewrite js examples

- create project template github repo

- test documenation when it's done

- link to API Reference from the code examples
E.g.
  const { status, wsUrl } = await GL.startRemote();

- ? create profile, instead of using existing for demo 

- ? [] rewrite GoLogin() => downloadBrowserProfile(), PROBLEM: not compatible with existing libs

- ? remake example to make amazon upvote

- ? create new nodejs lib: gologin-js

- ? add link next to profile: download single js automation file

- ? create-gologin-app

- fine js api:
 const GL = new GoLogin({
    token: GOLOGIN_API_TOKEN,
    profile_id: GOLOGIN_PROFILE_ID,
    extra_params: ['--headless', '--no-sandbox'],
  });
=> 
 const GL = new GoLogin({
    token: GOLOGIN_API_TOKEN,
    profile_id: GOLOGIN_PROFILE_ID,
    extra_params: ['--headless', '--no-sandbox'],
  });

EXAMPLE 2:
  const profile_id = await GL.create({
=>
  const profile_id = await goLogin.createBrowserProfile({

//wtf disable-background-timer-throttling

- startRemote


==========

Feedback
- start with quick sample
 - ideally, single script file
 - we can make profile optional
 - no provided profile id
 - api token from environment
 - ??? idea: page on gologin.com with API_KEY CLI and sample script
- basic
- without token
- npx -p gologin node script.js
- https://github.com/gologinapp/ScrapingBrowser
- Docker (add link)