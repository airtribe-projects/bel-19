const asyncFunction1 = (cb) => {    // AF1: Saving an order to DB
    setTimeout(() => {
        console.log("Async Function 1");            
        cb();
    }, 1000);
};

const asyncFunction2 = (cb) => {    // AF2: Sending an Email
    setTimeout(() => {
        console.log("Async Function 2");
        cb();
    }, 1000);
};

const asyncFunction3 = (cb) => {    // AF3: Sending an SMS
    setTimeout(() => {
        console.log("Async Function 3");
        cb();
    }, 1000);
};

// Task: Complete saving the order, then trigger and email, then trigger a SMS
// Callback Hell, Pyramid of Doom
const main = () => {
    console.log("Step 1");
    asyncFunction1(() => {
        console.log("Saving Order Complted");
        asyncFunction2(() => {
            console.log("Sending Email Completed");
            asyncFunction3(() => {
                console.log("Sending SMS Complete")
                console.log("All Done");
            });
        });
    });
    console.log("Step 2");
};

main();


