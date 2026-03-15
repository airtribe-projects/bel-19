const express = require('express');

const app = express();

app.get('/', (req, res) => {
    
    res.send("Hello World");
})

//  console.log(2+2);655
app.listen(3000, () => {
    console.log("Express server up and running");
})
