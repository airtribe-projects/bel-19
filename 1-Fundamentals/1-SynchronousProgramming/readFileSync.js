const fs = require('fs');

const filePath = '../lengthyFile.txt';

console.log(`${Date.now()} File Reading Started`);

const data = fs.readFileSync(filePath, 'utf-8');

// console.log('Data:', "File Reading comple");

console.log(`${Date.now()} File Reading Complete`);

