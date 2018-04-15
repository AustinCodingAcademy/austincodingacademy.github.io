const fs = require('fs');
const packageJson = require('./package.json');

// austin must go last since the remotes use its favicon
['dallas', 'houstontx', 'sanantonio', 'austin'].forEach(key => {
  packageJson.scripts['deploy-classics'] = `${packageJson.scripts['deploy-classics']} && KEY=${key} npm run favicon && KEY=${key} npm run sass && npm run sass-include && KEY=${key} npm run build && KEY=${key} npm run sitemap && KEY=${key} npm run cname && KEY=${key} npm run deploy && npm run clear-cache`;
  packageJson.scripts['deploy-classics-preview'] = `${packageJson.scripts['deploy-classics-preview']} && KEY=${key} npm run favicon && KEY=${key} npm run build && KEY=${key} npm run sitemap && && KEY=${key} npm run cname && PREVIEW='preview.' KEY=${key} npm run deploy && npm run clear-cache`;
});

[
  'boston',
  'charlotte',
  'chicago',
  'cleveland',
  'denver',
  'detroit',
  'kansascity',
  'losangeles',
  'minneapolis',
  'newyork',
  'orlando',
  'phoenix',
  'sandiego',
  'sanfrancisco',
  'seattle',
  'stlouis',
  'texas',
  'vancouver'
].forEach(key => {
  packageJson.scripts['deploy-remotes'] = `${packageJson.scripts['deploy-remotes']} && KEY=${key} npm run build && KEY=${key} npm run sitemap && KEY=${key} npm run cname && KEY=${key} npm run deploy && npm run clear-cache`;
});

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
