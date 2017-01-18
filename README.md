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

## Developing Website
1. Every time you change anything in:
  * `_javascripts/` you must run `npm run js`
  * `_sass/` you must run `npm run sass`
  * `_images/` you must run `npm run images`
  * All three `npm run postinstall`
1. Serve individual sites
  * Austin `npm run serve-austin`
  * San Antonio `npm run serve-sanantonio`
  * Dallas `npm run serve-dallas`
  * Houston `npm run serve-houston`
1. Navigate to [http://127.0.0.1:4000/](http://127.0.0.1:4000/)
  * Every change you make will regenerate the site
