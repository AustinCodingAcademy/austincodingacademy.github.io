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
  packageJson.scripts['deploy'] += `KEY=${key} npm run sass && npm run sass-include && KEY=${key} npm run build && KEY=${key} npm run favicon && KEY=${key} npm run sitemap && KEY=${key} npm run cname && npm run clear-cache `;
});

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
