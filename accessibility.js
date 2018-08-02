const pa11y = require('pa11y');
const { URL } = require('url');
const htmlReporter = require('pa11y-reporter-html');
const { appendFileSync, writeFileSync } = require('fs');
const open = require('open');
const path = './tmp/accessibility.html';
writeFileSync(path, '');

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

function runPa11y(idx) {
  if (idx === routes.length) return open(path);
  const route = routes[idx];
  pa11y(`${base}${route}`, { standard: 'WCAG2AAA' })
  .then(results => htmlReporter.results(results))
  .then(html => {
    appendFileSync(path, html);
    runPa11y(++idx)
  })
  .catch(error => console.error(error));
}

runPa11y(0);
