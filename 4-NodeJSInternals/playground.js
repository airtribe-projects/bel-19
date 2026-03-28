// Stack Overflow
// function recursiveNextTick() {
//     recursiveNextTick();  
// }

// recursiveNextTick();




setTimeout(() => {  //T1
    console.log("setTimeout inside I/O");
})

function recursiveNextTick() {
    process.nextTick(recursiveNextTick);  
}

recursiveNextTick();

Promise.resolve().then(() => {
    console.log("Promise then");
})


console.log("Main Script");
