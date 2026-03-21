// Code that you don't own
const asyncFunction =  (cb) => {
    setTimeout(() => {
        console.log('In Between');
        cb();
        cb();
        cb();
    }, 1000);
    cb();
}

// Code which you own
const postProcessing = () => {
    // Deducting some amount from CC
    console.log('End');
}



const main = () => {
    console.log('Start the process');
    // DB call to get a list of 5 students
    asyncFunction(postProcessing);   
    // Calculates the average marks of this 5 students
    // postProcessing();
}

main();

// Callback
// Problems? 
// Callback Hell / Pyramid of Doom
// Control and Security
