const path = require('path');

const filePath = '/users/admin/docs/file.txt';

console.log("Base:", path.basename(filePath));
console.log("Dir:", path.dirname(filePath));
console.log("Ext:", path.extname(filePath));
