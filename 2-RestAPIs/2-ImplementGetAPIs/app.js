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
app.get('/api/v1/courses', (req, res) => {
    console.log(req.query);
    res.send(courses);
})

//DRY --> Don't repeat yourself
// app.get('/api/v1/courses/0', (req, res) => {
//     console.log(req.query);
//     res.send(courses[0]);
// })


// app.get('/api/v1/courses/1', (req, res) => {
//     console.log(req.query);
//     res.send(courses[1]);
// })

// app.get('/api/v1/courses/2', (req, res) => {
//     console.log(req.query);
//     res.send(courses[2]);
// })


app.get('/api/v1/courses/:courseId', (req, res) => {
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
