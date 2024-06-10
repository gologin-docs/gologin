
# Install NodeJs

Install NodeJs on Windows:
https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows

Install NodeJs on Mac:
https://stackoverflow.com/a/28025834

After installation, type `node --version` in command line to make sure NodeJs 
is successfully installed and configured. You should see something like:
```
> node --version
v18.17.1
```

If you are getting message "command not found: node" then NodeJs is
1) not installed or 
2) you need to restart computer to update your system environment variables.



## Insert Browser Profile Id

- Login to your GoLogin account
- Go to your API account page [Link]
- Copy your API_KEY
  [Screenshot]
- Paste the browser profile id instead of `GOLOGIN_API_KEY` in source code.

Log in to you GoLogin Account, then find and 
and copy your API_KEY.

Replace `GOLOGIN_API_KEY` in the JavaScript file to the your real one.


## Provide Sample Browser Profile for Testing


- Login to your GoLogin account
- Create new browser profile you will use for testing.
- Configure proxy of this profile, optional
- Copy id of this profile
  [Screenshot]
- Paste the browser 