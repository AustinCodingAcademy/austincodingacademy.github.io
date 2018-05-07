const fs = require('fs');
const yaml = require('js-yaml');
const packageJson = require('./package.json');


// austin must go last since the remotes use its favicon
['dallas', 'houstontx', 'sanantonio', 'austin'].forEach(key => {
  // packageJson.scripts['deploy-classics'] = `${packageJson.scripts['deploy-classics']} && KEY=${key} npm run favicon && KEY=${key} npm run sass && npm run sass-include && KEY=${key} npm run build && KEY=${key} npm run sitemap && KEY=${key} npm run cname && KEY=${key} npm run deploy && npm run clear-cache`;
  // packageJson.scripts['deploy-classics-preview'] = `${packageJson.scripts['deploy-classics-preview']} && KEY=${key} npm run favicon && KEY=${key} npm run build && KEY=${key} npm run sitemap && && KEY=${key} npm run cname && PREVIEW='preview.' KEY=${key} npm run deploy && npm run clear-cache`;
});

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
  // packageJson.scripts['deploy-remotes'] = `${packageJson.scripts['deploy-remotes']} && KEY=${key} npm run sass && npm run sass-include && KEY=${key} npm run build && KEY=${key} npm run sitemap && KEY=${key} npm run cname && KEY=${key} npm run deploy && npm run clear-cache`;
  const config = yaml.safeLoad(fs.readFileSync(`./_configs/_config_${key}.yml`, 'utf8'));
  fs.writeFileSync(`./_sass/${key}.scss`, `$brand-success: ${config.color} !default; @import 'app';`)
});

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
