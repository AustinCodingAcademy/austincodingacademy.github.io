const fetch = require('node-fetch');
const querystring = require('querystring');
const headers = {
  'X-Auth-Email': process.env.CLOUDFLARE_EMAIL,
  'X-Auth-Key': process.env.CLOUDFLARE_API_KEY,
  'Content-Type': 'application/json'
};

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
  fetch(`https://api.cloudflare.com/client/v4/zones?${
    querystring.stringify({ name: `${key}codingacademy.com` })
  }`, {
    headers
  }).then(res => res.json()).then(json => {
    const id = json.result[0].id;
    fetch(`https://api.cloudflare.com/client/v4/zones/${id}/dns_records`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        type: 'CNAME',
        name: `${key}codingacademy.com`,
        content: 'austincodingacademy.github.io',
      })
    }).then(res => res.json()).then(json => {
      console.log(JSON.stringify(json, null, 2));
    });
    fetch(`https://api.cloudflare.com/client/v4/zones/${id}/dns_records`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        type: 'CNAME',
        name: `www`,
        content: `${key}codingacademy.com`,
      })
    }).then(res => res.json()).then(json => {
      console.log(JSON.stringify(json, null, 2));
    });
    [['', 5], ['alt1.', 10], ['alt2.', 20], ['alt3.', 30], ['alt4.', 40]].forEach(combo => {
      fetch(`https://api.cloudflare.com/client/v4/zones/${id}/dns_records`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          type: 'MX',
          name: `${key}codingacademy.com`,
          content: `${combo[0]}gmr-smtp-in.l.google.com`,
          priority: combo[1]
        })
      }).then(res => res.json()).then(json => {
        console.log(JSON.stringify(json, null, 2));
      });
    });
  }).catch(error => console.error(error));
})
