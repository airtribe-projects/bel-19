const asyncFunction1 = () => {    // AF1: Saving an order to DB
    return new Promise((resolve, reject) => {
        setTimeout(() => {    
            console.log("Async Function 1");            
            reject("err 1");
        }, 1000);
    })
};

const asyncFunction2 = () => {    // AF2: Sending an Email
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 2");
            resolve("AF2 ");
        }, 100);
    })
};

const asyncFunction3 = () => {    // AF3: Sending an SMS
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 3");
            resolve("resp 3");
        }, 50);
    })
};

// You can use await before any function (async/sync);
function sum(a, b) {
    return a + b;
}

// Returns Promise with Fulfilled value
const difference = async (a, b) => {
    return a - b;
}



const main =  async () => {
    console.log("Step 1");
    // --
    const diff = await difference(9,7);
    console.log(diff);

    const sumOf2numbers = await sum(5,9);
    console.log(sumOf2numbers);

    try {
        const resp1 =  await asyncFunction1();
        console.log(resp1);
    } catch (e) {
        console.log("Error", e);
    }
    
    
    

    const resp2 = await asyncFunction2();
    console.log(resp2);
    
    const resp3 = await asyncFunction3();
    console.log(resp3);



    // asyncFunction1()
    //     .then(asyncFunction2)
    //     .then(asyncFunction3)
    //     .catch((err) => {
    //         console.log("Some Error Occurred [Catch 1]", err);
    //     });
};

main();
