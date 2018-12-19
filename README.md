[![CircleCI](https://circleci.com/gh/AustinCodingAcademy/austincodingacademy.com.svg?style=svg&circle-token=4617c94c1eb85c5fee334ba791bbe83b2251e106)](https://circleci.com/gh/AustinCodingAcademy/austincodingacademy.com)
# Austin Coding Academy Website Generator

## Environment Setup
* Mac OSX
 1. Install [RVM/Ruby](https://rvm.io/)
   1. `\curl -sSL https://get.rvm.io | bash`
   1. `rvm install 2.5.1`
   1. `rvm use 2.5.1 --default`
   1. `gem install bundler`
 2. Install [Node.js](https://nodejs.org)
 3. `npm install -g yarn` or `sudo npm install -g yarn`

## Project Setup
1. Clone repo and navigate into directory
1. Install dependencies
  1. `bundle`
  1. `yarn`

## Development
1. To build and rebuild assets on any change, keep this running in a terminal
window:
  * `yarn watch`
1. To serve individual sites and update on a change, keep any one of these running
in its own terminal window
  * `KEY=austin yarn serve`
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

## Accessibility
1. make sure to have local site running at `http://localhost:4000`
2. run `yarn test`

## Deploying
### Preview
Every change to the _preview_ branch will be deployed to
  * https://preview.austincodingacademy.com

### Production
Every change to the _master_ branch will be deployed to
  * https://austincodingacademy.com
  * https://lubbockcodingacademy.com


#Making a Blog Post
  1. In Atom > [underscore]posts
    1. Create a new file using the format of the previous posts
    2. Make sure to include and update the front-matter
    3. Blog posts are done in markdown, so those rules apple, as well as Bootstrap columns for images
    4. Regular text should be done with H4's - 4 hashmarks - for legibility. H4's also have line-height assigned to them.
    5. Break up the text with H2's - 2 hashmarks
    6. [Here is an ACA post as an example](https://austincodingacademy.com/blog/austin_coding_academy_opening_north_campus)
    7. [Here is an Iron Yard example](http://blog.theironyard.com/2015/07/02/the-iron-yard-strategic-investment-from-apollo-education-group/)
