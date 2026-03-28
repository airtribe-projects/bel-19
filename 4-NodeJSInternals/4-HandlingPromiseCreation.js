// Note: 
// New promise are handled in synchronous manner till you call resolve/reject


// Example 1
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


// Example 2:
// function wrappedPromise() {
//   return new Promise((resolve) => {
//     console.log("Inside Promise executor");

//     process.nextTick(() => {
//       console.log("process.nextTick inside Promise");
//     });

//     setTimeout(() => {
//       console.log("setTimeout inside Promise");
//     }, 0);

//     Promise.resolve().then(() => {  //P1
//       console.log("Promise.then inside Promise");
//     });

//     resolve("done");    
//   });
// }

// wrappedPromise().then((val) => console.log("Promise then:", val)); //P2

// console.log("End of script");



// Example 3: 
function wrappedPromise() {
  return new Promise((resolve) => {
    console.log("Inside Promise executor");

    process.nextTick(() => {
      console.log("process.nextTick inside Promise");
    });

    setTimeout(() => {
      console.log("setTimeout inside Promise");
    }, 0);

    Promise.resolve().then(() => {
      console.log("Promise.then inside Promise");
      Promise.resolve().then(() => {
        console.log("Nested Promise.then");
      });  

    });

    resolve("done");
  });
}

wrappedPromise().then((val) => console.log("Promise then:", val));

console.log("End of script");