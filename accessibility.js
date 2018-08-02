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
      results.push(await pa11y(`${base}${route}`, { standard: 'WCAG2AAA' }));
      console.error(JSON.stringify(results, null, 2));
    }));
  } catch (error) {
      console.error(error)
  }
}

runPa11y();
