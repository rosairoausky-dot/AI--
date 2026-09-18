const fs = require('fs');

const outputPath = 'outputs/world-model-talent-map.html';
const newSourcePath = 'work/world-model-talent-map-expanded.html';

const escapeAttribute = value => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#x27;');

const output = fs.readFileSync(outputPath, 'utf8');
const newSource = escapeAttribute(fs.readFileSync(newSourcePath, 'utf8').trim());
const startMarker = '&lt;div id=&quot;wm-talent-map&quot;&gt;';
const endMarker = '&lt;script src=&quot;https://unpkg.com/@floating-ui/core@';
const start = output.indexOf(startMarker);
const end = output.indexOf(endMarker, start);
if (start < 0 || end < 0) throw new Error('Standalone fragment boundaries were not found');
const next = output.slice(0, start) + newSource + '\r\n\r\n' + output.slice(end);
fs.writeFileSync(outputPath, next, 'utf8');
console.log(`Updated ${outputPath}: ${Buffer.byteLength(next)} bytes`);
