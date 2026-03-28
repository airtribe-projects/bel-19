
function main() {
    
    // Example 1:
    // setTimeout(() => { //T1
    //     console.log("Main Timer")
    // }, 500)

    // console.log("Main script");
    // for(let i=0; i< 1000000; i++){
    //     // Image processing --> each image takes 2 secs
    // }

    // Example 2
    // Promise.resolve().then(() => { // P1
    //     console.log("Promise Callback");   
    // })

    // console.log("Main script");

    // Example 3:
    // setTimeout(() => { //T1
    //     console.log("Main Timer")
    // }, 1000)


    // setTimeout(() => { //T2
    //     console.log("Main Timer 2")
    // }, 0)


    // setTimeout(() => { //T3
    //     console.log("Main Timer 3")
    // }, 0)

    // // Promise.resolve().then(() => { // P1
    // //     console.log("Promise Callback");   
    // // })


    // console.log("Main script");


    // Example 4:

    // Timers are handled via mAcroQueue
    // setTimeout(() => { // T1
    //     console.log("Main Timer")
    // }, 0)
    // // Promises are handled via mIcroQueue
    // // mIcroQueue has a precedence over mAcroQueue
    // Promise.resolve().then(() => { // P1
    //     console.log("Promise Callback");   
    // })


    // console.log("Main script");

    // Example 5: 
    // for (let i=0; i< 10; i++) {
    //     setTimeout(() => {
    //         console.log(`Main Timer ${i}`)
    //     }, 0)


    //     Promise.resolve().then(() => {
    //         console.log(`Promise Callback ${i}`);   
    //     });
    // }

    // Example 6:
    // setTimeout(() => {
    //     console.log("Main Timer")
    // }, 0)


    // Promise.resolve().then(() => { //PC
    //     console.log("Promise Callback");   
    //     Promise.resolve().then(() => { //IP
    //         console.log("Resolved inner promise");   
    //     })
    // })

    // console.log("Main script");



    // Example 7
    setTimeout(() => { // T1
        console.log("Main Timer");
        Promise.resolve().then(() => { // IP
            console.log("Resolved inner promise");   
        })
    }, 0)


    Promise.resolve().then(() => { // PC
        console.log("Promise Callback");   
        setTimeout(() => { // T2
            console.log("Inner Timer");
        }, 0)
        
    })

    console.log("Main script");


}

main()

/*
EventLoop: 
while(true)

1. See if there are some functions which are ready to execute
2. If the callstack is empty

// if 1 and 2 are satisfied then
3. Places the function in the callstack


*/