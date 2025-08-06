const fs = require('fs');
const path = require('path');

const fse = require('fs-extra');

const srcDir = path.join(__dirname);
const docsDir = path.join(__dirname, '../docs');

fse.copySync(srcDir, docsDir, { overwrite: true });