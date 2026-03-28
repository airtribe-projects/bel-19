// Data layer code, store the information in DB
const asyncFunction1 = () => {    // AF1: Saving an order to DB
    return new Promise((resolve, reject) => {
        // Make a DB call to the database server
        // if(All the validation checks of order passes)

            // If (the order is created on DB) resolve(order)
            // else (db gave me error) reject(error)
        // else 
            // reject(ValidationError)
        
        
        setTimeout(() => {    
            console.log("Async Function 1");            
            reject("Async Function 1 Rejected");
            reject("Async Function 1 Rejected");
            reject("Async Function 1 Rejected");
            resolve("Async Function 1 Rejected");
        }, 1000);
    })
};

const asyncFunction2 = () => {    // AF2: Sending an Email
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 2");
            reject("AF2 Rejected");
        }, 1000);
    })
};

const asyncFunction3 = () => {    // AF3: Sending an SMS
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 3");
            resolve();
        }, 1000);
    })
};



// Application Code
const main = () => {
    console.log("Step 1");
    // const asyncResponse = asyncFunction1();
    // asyncResponse
    //     .then(() => console.log("I got response from promise"))
    //     .catch(() => console.log("I got some error"));
    // console.log(asyncResponse);
    // console.log("Step 2");

    // asyncFunction1().then(() => {
    //     asyncFunction2().then(() => {
    //         asyncFunction3().then(() => {
    //             console.log("All Done");
    //         })
    //     });
    // })

    // Promise Chaining
    asyncFunction1()
        .catch((err) => {
            console.log("Some Error Occurred [Catch 1]", err);
        })
        .then(asyncFunction2)
        .catch((err) => {
            console.log("Some Error Occurred [Catch 1]", err);
        })
        .then(asyncFunction3)
        .catch((err) => {
            console.log("Some Error Occurred [Catch 1]", err);
        })
        .then(() => {
            console.log("All Done")
        })
        .catch((err) => {
            console.log("Some Error Occurred [Catch 2]", err);
        })


         asyncFunction1()
            .then(asyncFunction2)
            .then(asyncFunction3)
            .then(() => {
                console.log("All Done")
            })
            .catch((err) => {
                console.log("Some Error Occurred [Catch 2]", err);
            }).finally(() => {
                
            })

};

main();

