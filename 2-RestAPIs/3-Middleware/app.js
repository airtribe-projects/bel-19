const express = require('express');

const app = express();


const courses = [
    {
        id: 1,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 2,
        name: 'React.js',
        rating: 4.5,
        description: "Learn React js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 3,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    }
]

const logger = (req, res, next) => {
    console.log("Request received on:" ,req.url);
    next();
    // res.send("Everything is Okay");
}

const logger2 = (req, res, next) => {
    console.log("Request received on logger 2:" ,req.url);
    next();
}

const logger3 = (req, res, next) => {
    console.log("Request received on logger 3:" ,req.url);
    next();
}

const getAllCoursesHandler = (req, res) => {
    // console.log(app);
    console.log(req.query);
    res.send(courses);
}


app.get('/api/v1/courses', [logger, getAllCoursesHandler] );

app.use(logger3);
 
app.get('/api/v1/courses/:courseId', [logger, logger2], (req, res) => {
    
    console.log(req.params);
    const course = courses.find(c => c.id === parseInt(req.params.courseId));

    if (!course) {
        return res.status(404).send("The course you are looking for is not avaialble");
    }
    
     res.send(course);

})



app.get('/', (req, res) => {    
    res.send("Hello World");
})

//  console.log(2+2);655
app.listen(3000, () => {
    console.log("Express server up and running");
})
