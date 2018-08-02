const pa11y = require('pa11y');
const { URL } = require('url');
const htmlReporter = require('pa11y-reporter-html');
const fs = require('fs');
const open = require('open');

const base = 'http://localhost:4000';
const routes = [
  '/',
  '/why/',
  '/javascript/',
  '/csharp/',
  '/webdesign/',
  '/tuition/',
  '/faq/',
  '/contact/',
  '/instructor-apply/',
  '/apply/'
];

const results = []

async function runPa11y() {
  try {
      await Promise.all(routes.map(async route => {
        results.push(await pa11y(`${base}${route}`, { standard: 'WCAG2AA' }));
        // console.log(JSON.stringify(results, null, 2));
      }));
      const combinedResults = {}
      htmlReporter.results(results).then(html => {
        const path = './tmp/accessibility.html';
        fs.writeFileSync(path, html);
        open(path);
      });
  } catch (error) {
      console.error(error)
  }
}

runPa11y();
