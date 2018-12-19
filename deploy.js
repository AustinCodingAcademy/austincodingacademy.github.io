const fs = require('fs');
const yaml = require('js-yaml');
const packageJson = require('./package.json');

[
  'austin',
  'lubbock'
].forEach(key => buildScript(key, 'deploy'));

['austin'].forEach(key => buildScript(key, 'deploy-preview'));

function buildScript(key, deployScript) {
  const preview = deployScript.includes('preview') ? 'preview.' : '';
  const seo = preview ? 'yarn no-robots' : `KEY=${key} yarn sitemap`;
  const config = yaml.safeLoad(fs.readFileSync(`./_configs/_config_${key}.yml`, 'utf8'));
  fs.writeFileSync(`./_sass/${key}.scss`, `$brand-success: ${config.color} !default; $brand-success-light: ${config.lighter_color} !default; @import 'app';`);
  packageJson.scripts[deployScript] += ` && KEY=${key} yarn sass && yarn sass-include && KEY=${key} yarn build && KEY=${key} yarn favicon && KEY=${key} yarn build && ${seo} && PREVIEW=${preview} KEY=${key} yarn cname && PREVIEW=${preview} KEY=${key} yarn repo && yarn clear-cache`;
}

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
