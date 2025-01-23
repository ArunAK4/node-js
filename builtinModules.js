// Imp Builtin Modules
// path
// events
// fs
// stream
// http

// Path Module
const path = require('path'); // require('node:path');

console.log(path);
console.log(__dirname);
console.log(__filename.split('/').pop());

console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log(path.join('folder_name', 'index.html'));

console.log(path.join(__dirname, 'data.json'));