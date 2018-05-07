const fs = require('fs');
const yaml = require('js-yaml');
const packageJson = require('./package.json');

[
  'austin',
  'boston',
  'charlotte',
  'chicago',
  'cleveland',
  'dallas',
  'denver',
  'detroit',
  'houstontx',
  'kansascity',
  'losangeles',
  'minneapolis',
  'newyork',
  'orlando',
  'phoenix',
  'sanantonio',
  'sandiego',
  'sanfrancisco',
  'seattle',
  'stlouis',
  'texas',
  'vancouver'
].forEach(key => {
  const config = yaml.safeLoad(fs.readFileSync(`./_configs/_config_${key}.yml`, 'utf8'));
  fs.writeFileSync(`./_sass/${key}.scss`, `$brand-success: ${config.color} !default; @import 'app';`)
  packageJson.scripts['deploy'] += ` KEY=${key} yarn sass && yarn sass-include && KEY=${key} yarn build && rsvg-convert -h 100 _site/logo-white.svg > _site/logo-white.png && KEY=${key} yarn favicon && KEY=${key} yarn sitemap && KEY=${key} yarn cname && yarn clear-cache `;
});

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
