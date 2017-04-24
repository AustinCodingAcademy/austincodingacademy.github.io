# Austin Coding Academy Website Generator

## Environment Setup
* Mac OSX
 1. Install [RVM/Ruby](https://rvm.io/)
   1. `\curl -sSL https://get.rvm.io | bash`
   1. `rvm install 2.2.6`
   1. `rvm use 2.2.6 --default`
   1. `gem install bundler`
 2. Install [Node.js](https://nodejs.org)

## Project Setup
1. Clone repo and navigate into directory
1. Install dependencies
  1. `bundle install`
  1. `npm install`

## Development
1. To build and rebuild assets on any change, keep this running in a terminal
window:
  * `npm run watch`
1. To serve individual sites and update on a change, keep any one of these running
in its own terminal window
  * Austin `npm run serve-austin`
  * San Antonio `npm run serve-sanantonio`
  * Dallas `npm run serve-dallas`
  * Houston `npm run serve-houstontx`
1. Navigate to http://127.0.0.1:4000
  * Every change you make will regenerate the site

## Making a change
1. To make a change
  1. Open terminal
    1. `cd` into project directory `austincodingacademy.com/`
    1. `git checkout preview` to get onto preview branch
    1. `git checkout -b [name-of-fix]` to create the bug-specific branch, which will get deleted after
  1. See : [Development](#Development)
  1. On site
    1. Use DevTool to find the areas to fix
    1. Find the most uniquely named class (or whatever has a unique name)
  1. In Editor
    1. Use Command+Shift+F to search the codebase for the uniquely named class
    1. Double click on the blue word to be taken to the specific file that needs updating
    1. Make fixes
    1. Check in http://127.0.0.1:4000
  1. In terminal
    1. check files `git status`
    1. `git add .`
    1. `git commit -m "some message"`
    1. `git push origin [name-of-fix]`
  1. In github.com
    1. create pull request (`base: preview ... compare: [name-of-fix]`)
    1. review, merge, delete `[name-of-fix]` branch
    1. check [Preview Sites](#Preview)
  1. if nothing breaks
    1. create pull request (`base: master ... compare: preview`)
    1. review, merge
    1. check [Production Sites](#Production)

#After making a change
  1. In Github, at austincodingacademy repo,
    1. Click on green "compare and merge" button
    1. Make sure to enter any relevant notes
    1. Click green "Merge" button
    1. Click green "Confirm" button
    1. Click blue "Delete branch" button
  1. In Terminal,
    1. In bash window,
      1. `git checkout preview` to get off deleted branch and back onto preview branch
      1. `git pull origin preview` to receive most updated code base of preview branch
    1. In node window,
      1. `control + c` to stop
      1. `npm run watch` to restart
    1. In fsevent_watch window,
      1. `control + c` to stop
      1. `npm run serve-austin` to restart


## Deploying
### Preview
Every change to the _preview_ branch will be deployed to
  * https://preview.austincodingacademy.com
  * https://preview.sanantoniocodingacademy.com
  * https://preview.dallascodingacademy.com
  * https://preview.houstontxcodingacademy.com

### Production
Every change to the _master_ branch will be deployed to
  * https://austincodingacademy.com
  * https://sanantoniocodingacademy.com
  * https://dallascodingacademy.com
  * https://houstontxcodingacademy.com
