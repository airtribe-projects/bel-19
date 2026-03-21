const asyncFunction1 = () => {    // AF1: Saving an order to DB
    return new Promise((resolve, reject) => {
        setTimeout(() => {    
            console.log("Async Function 1");            
            resolve("res 1");
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


// Promise.all
const main = () => {
    console.log("Step 1");
    // Promise.all
    // const respAll = Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    // // Responses:  (all are wrong)
    // // 1. Array of promises
    // // 2. Sequenece is not guranteed
    // // 3. First one which is settled or rejected
    
    // respAll.then(resolvedResponses => {
    //     console.log(resolvedResponses);
    // }).catch((err) => {
    //     console.log(err);
    // })

    // Promise All Settled
    // const respAllSettled = Promise.allSettled([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    
    // console.log(respAllSettled);
    // respAllSettled
    //     .then(resolvedResponses => {
    //         console.log("Then executed", resolvedResponses);   
    //     }).catch((err) => {
    //         console.log("Catch Executed", err);
    //     })
    // console.log(resp);
    

    // Promise Any: Returns result of first successful promise
    // const respAny = Promise.any([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    
    // console.log(respAny);
    // respAny
    //     .then(resolvedResponses => {
    //         console.log("Then executed", resolvedResponses);   
    //     }).catch((err) => {
    //         console.log("Catch Executed", err);
    //     })

    // Promise.race: Returns result of first settled promise
    const respRace = Promise.race([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    
    console.log(respRace);
    respRace
        .then(resolvedResponses => {
            console.log("Then executed", resolvedResponses);   
        }).catch((err) => {
            console.log("Catch Executed", err);
        })

};

main();



