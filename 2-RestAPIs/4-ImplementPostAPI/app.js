const express = require('express');

const app = express();

app.use(express.json());

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
}

app.use(logger);

const getAllCoursesHandler = (req, res) => {
    
    console.log(req.query);
    res.send(courses);
}


app.get('/api/v1/courses', [logger, getAllCoursesHandler] );
 
app.get('/api/v1/courses/:courseId', (req, res) => {
    
    console.log(req.params);
    const course = courses.find(c => c.id === parseInt(req.params.courseId));

    if (!course) {
        return res.status(404).send("The course you are looking for is not avaialble");
    }
    
     res.send(course);

})

app.post('/api/v1/courses', (req, res) => {
    console.log(req);
    console.log(req.body);
    res.send("Course Created");
});


app.get('/', (req, res) => {    
    res.send("Hello World");
})

//  console.log(2+2);655
app.listen(3000, () => {
    console.log("Express server up and running");
})
