// // Ex: 1
// console.log('Start');
// console.log('In between');
// console.log('End');

/* Output
Start
In between
End
*/


// Ex: 2
// console.log('Start');

// setTimeout(() => {  // Blackbox
//     console.log('In Between');
// }, 0);

// console.log('End');

// /* Output
// Start
// End
// In Between
// */

// // Example 3:

function main() {
    console.log('Start');
    const start = Date.now();
    setTimeout(() => {  // Blackbox
        console.log('In Between');
        console.log("Completed In: ", Date.now() - start);
        
    }, 1000);

    console.log('End');
    let lastSqrt;
    for (let i=0; i < 100000000; i++) {
        lastSqrt = Math.sqrt(i);

    }

    console.log(lastSqrt);
}

main()

/* Output
Start
End
In Between (after 1 sec)
*/

// Callstack Explnation
// f3() {
//     log('f3 called')
// }


// f2() {
//     log('f2 called')
//     f3()
// }



// f1() {
//     log('f1 called')
//     f2()
// }

// f1()

// function f(p) {
//     console.log(p);
// }

// f("hi");

// for (let i=0; i < 1000000000; i++) {

// }

// f("hello");

// for (let i=0; i< 1000000000; i++) {

// }

// f("end");