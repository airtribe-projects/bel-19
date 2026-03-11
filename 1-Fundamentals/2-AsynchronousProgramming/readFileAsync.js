const fs = require('fs'); // Internal Libraray ==> With NodeJS

// const filePath = '../lengthyFile.txt';
const filePath = '../simpleFile.txt';


console.log(`${Date.now()} File Reading Started`);

const data = fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.log(err); 
        return;
    }
    console.log(`${Date.now()} Read File Aysnchronously`); 
});

// console.log('Data:', "File Reading comple");

console.log(`${Date.now()} File Reading Complete`);

for (let i=0; i< 1000000; i++) {
    console.log(i);
}
