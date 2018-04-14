const fs = require('fs');
const packageJson = require('./package.json');

// austin must go last since the remotes use its favicon
const classics = ['dallas', 'houstontx', 'sanantonio', 'austin'];
const remotes = [
  'boston',
  // 'charlotte',
  // 'chicago',
  // 'cleveland',
  // 'denver',
  // 'detroit',
  // 'kansascity',
  // 'losangeles',
  // 'minneapolis',
  // 'newyork',
  // 'orlando',
  // 'phoenix',
  // 'sandiego',
  // 'sanfrancisco',
  // 'seattle',
  // 'stlouis',
  // 'texas',
  // 'vancouver'
];

classics.forEach(key => {
  packageJson.scripts[`favicon-${key}`] = `real-favicon generate _favicon_${key}.json faviconData.json assets/favicons/ && npm run favicon-inject`;
  packageJson.scripts['deploy-classics'] = `${packageJson.scripts['deploy-classics']} npm run favicon-${key} && npm run build-${key} && npm run sitemap-${key} && npm run deploy-${key}`;
  packageJson.scripts['deploy-classics-preview'] = `${packageJson.scripts['deploy-classics-preview']} npm run favicon-${key} && npm run build-${key} && npm run sitemap-${key} && npm run deploy-${key}-preview`;
});

remotes.forEach(key => {
  packageJson.scripts['deploy-remotes'] = `${packageJson.scripts['deploy-remotes']} npm run build-${key} && npm run sitemap-${key} && npm run deploy-${key}`;
});

classics.concat(remotes).forEach(key => {
  packageJson.scripts[`sass-${key}`] = `node-sass --output-style compressed -o assets/stylesheets/ _sass/${key}.scss`;
  packageJson.scripts[`build-${key}`] = `bundle exec jekyll build --config _configs/_config_${key}.yml,_configs/_config.yml`;
  packageJson.scripts[`sitemap-${key}`] = `npm run sitemap-generator && sed -i 's|http://127.0.0.1:8080|https://${key}codingacademy.com|g' _site/sitemap.xml`;
  packageJson.scripts[`deploy-${key}`] = `echo '${key}codingacademy.com' >> _site/CNAME && gh-pages --repo 'git@github.com:AustinCodingAcademy/${key}codingacademy.com.git' -d ./_site`;
});

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
