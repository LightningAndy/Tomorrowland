#!/usr/bin/env node
// build.js — runs during Cloudflare Pages deploy
// Reads PORTIA_PASSWORD and ANDY_PASSWORD from environment variables
// and injects them into the built app.js

const fs = require('fs');
const path = require('path');

const portiaPass = process.env.PORTIA_PASSWORD;
const andyPass   = process.env.ANDY_PASSWORD;

if (!portiaPass || !andyPass) {
  console.error('ERROR: PORTIA_PASSWORD and ANDY_PASSWORD environment variables must be set.');
  process.exit(1);
}

// Ensure output dir exists
const outDir = path.join(__dirname, 'dist');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

// Copy static files
['index.html', 'styles.css'].forEach(file => {
  fs.copyFileSync(
    path.join(__dirname, 'src', file),
    path.join(outDir, file)
  );
  console.log(`Copied ${file}`);
});

// Inject credentials into app.js
const usersObject = `{ 'Portia789': '${portiaPass}', 'Andy7812': '${andyPass}' }`;
let appJs = fs.readFileSync(path.join(__dirname, 'src', 'app.js'), 'utf8');
appJs = appJs.replace('__USERS_INJECT__', usersObject);

if (appJs.includes('__USERS_INJECT__')) {
  console.error('ERROR: Placeholder not found in app.js — injection failed.');
  process.exit(1);
}

fs.writeFileSync(path.join(outDir, 'app.js'), appJs);
console.log('Injected credentials into app.js');
console.log('Build complete → dist/');
