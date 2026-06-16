// WARNING: see README-DO-NOT-RUN-RENDER.md before running this script
const fs = require('fs');
const path = require('path');

const resume = JSON.parse(fs.readFileSync('resume.json', 'utf8'));
const theme = require('jsonresume-theme-even');

Promise.resolve(theme.render(resume, {})).then(html => {
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('index.html created successfully.');
}).catch(err => {
  // theme.render may be synchronous
  const html = theme.render(resume, {});
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('index.html created successfully.');
});
