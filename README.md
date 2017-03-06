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
  * Houston `npm run serve-houston`
1. Navigate to http://127.0.0.1:4000
  * Every change you make will regenerate the site

## Deploying
1. Every change to the _preview_ branch will be deployed to
  * https://preview.austincodingacademy.com
  * https://preview.sanantoniocodingacademy.com
  * https://preview.dallascodingacademy.com
  * https://preview.houstontxcodingacademy.com

1. Every change to the _master_ branch will be deployed to
  * https://austincodingacademy.com
  * https://sanantoniocodingacademy.com
  * https://dallascodingacademy.com
  * https://houstontxcodingacademy.com
