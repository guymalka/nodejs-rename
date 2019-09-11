const { join } = require('path');
const { readdirSync, renameSync, lstatSync } = require('fs');
//const [dir, search, replace] = process.argv.slice(2);

const path = '<path-to-replace>'
//server folder
const dir = ['<path 1>','<path 2>'];
const search = '<end of file name for example js, exe >';
const replace = '<wanted end of file , for example txt>';
const match = RegExp(search, 'g');

dir.forEach(filepath => {
  let files = readdirSync(filepath);  
  let resultsFiles = files
  .filter(file => file.match(match));
  resultsFiles.forEach(file => {
    let filePathforChange = join(filepath, file);
    let newFilePath = join(filepath, file.replace(match, replace));

    renameSync(filePathforChange, newFilePath);
  });
})
