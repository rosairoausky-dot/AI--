const fs = require('fs');

const path = process.argv[2];
const html = fs.readFileSync(path, 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];

if (!scripts.length) throw new Error('No inline script found');
new Function(scripts.at(-1)[1]);

console.log(JSON.stringify({
  bytes: Buffer.byteLength(html),
  scripts: scripts.length,
  hasRoot: html.includes('id="wm-talent-map"'),
  hasSearch: html.includes('id="wm-search"'),
  hasMatrix: html.includes('id="wm-matrix-body"'),
  escapedQuotes: (html.match(/\\"/g) || []).length,
  literalNewlines: (html.match(/\\n/g) || []).length
}, null, 2));
