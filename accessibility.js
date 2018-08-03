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
  pa11y(`${base}${route}`, {
    ignore: [
      'WCAG2AA.Principle2.Guideline2_4.2_4_1.H64.1',
      'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Fieldset.Name'
    ]
  })
  .then(results => htmlReporter.results(results))
  .then(html => {
    appendFileSync(path, html);
    runPa11y(++idx)
  })
  .catch(error => console.error(error));
}

runPa11y(0);
