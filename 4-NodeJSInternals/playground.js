// Macro Task Queue (6 Queues/Phases)
/*
1. Timer Phase: setTimeout and setInterval is handled (Devs have control)
2. Pending Callback Phase: TCP Errors, DNS Errors, Low level System errors (Internal)
3. Idle Phase: For housekeeping, maintainig the event loop phases (Internal to NodeJs)
4. Poll Phase: Handles I/O callbacks, callbacks like FS call, DB call, Socket Call (Devs use it)
5. Check Phase: setImmediate calls (devs use it)
6. Close Phase: Cleanup phase, close DB connection, unlinking a file, closing socket connection (Devs use it)
*/
// Example 1:
// const fs = require('fs');
// const stream = fs.createReadStream('temp.txt');

// stream.on('close', () => {     // Phase 6              
//     console.log('Log from close callback (Phase 6)');
// });

// setTimeout(() => {            // Phase 1               
//     console.log('Log from timer (Phase 1)');
// }, 0);

// stream.destroy(); // Triggers the close


// Example 2:
// const fs = require('fs');

// fs.writeFile('temp.txt', 'Hello', (err) => {   // Phase 4 (RF)
//   if (err) throw err;
//   console.log("Read the file");


//   setImmediate(() => {              // Phase 5 (SI)
//     console.log("Log from setImmediate");
//   })  

//   setTimeout(() => {               // Phase 1     (T1)            
//     console.log('Log from timer');
//   }, 0);

// });

// console.log("Main Script");

// Example 3: 

// function testFunction() {
//     setImmediate(() => {              // Phase 5 (SI)
//        console.log("Log from setImmediate");
//     })  

//     setTimeout(() => {               // Phase 1     (T1)            
//         console.log('Log from timer');
//     }, 0);
// }

// testFunction();


// Example 4:

setTimeout(() => { // T1
    console.log("T1")
    Promise.resolve().then(() => {  // P1
        console.log("P1");   
        process.nextTick(() => console.log('NT 1'));
        setImmediate(() => {              // Phase 5 (SI)
            console.log("Log from setImmediate");
        })  
    })
    process.nextTick(() => console.log('NT 2'));
}, 0)

setTimeout(() => { // T2
    console.log("T2")
    process.nextTick(() => console.log('NT 3'));
}, 0)

Promise.resolve().then(() => {  // P2
        console.log("P2");   
        process.nextTick(() => console.log('NT 4'));
    })


console.log("Main script");
