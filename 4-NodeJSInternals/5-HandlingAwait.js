// Mental Note: Await breaks the code and anything written below await is treated as a promise

// Example 1:


// const internalCall =  async () => {
//     console.log("Internal log");

//     // await network

//     // setTimeout(() => { // T2
//     //     console.log('Log from inner timer');
//     // }, 0);
    

// }


// const main = async () => {
//     setTimeout(() => { // T1
//         console.log('Log from timer');
//     }, 0);
    
//     Promise.resolve().then(() => { // P1
//         console.log("Hello there");
//     })
    
//     await internalCall();
//     // Anything below await would be treated as promise (P2)
//     console.log("This is the end");
//         setTimeout(() => { // T1
//         console.log('Log from timer');
//     }, 0);

//     process.nextTick(() => {
//         console.log("NT");
//     })
// }

// main();

// Example 2:

// function wrappedPromise() {
//   return new Promise((resolve) => {
//     console.log("Inside Promise executor");
//     resolve("done"); // P1
//   });
// }

// wrappedPromise().then((val) => {
//     console.log("Promise then:", val)
// });
    
// console.log("End of script");

function wrappedPromise() {
    return new Promise((resolve) => {
        console.log("Inside Promise executor");
        resolve("done"); // P1
    });
}

async function main() {
    console.log(await wrappedPromise());
    console.log("End of script");   //P2
}

main();
