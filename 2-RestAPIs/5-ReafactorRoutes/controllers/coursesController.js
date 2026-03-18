const {courses} = require('../models/coursesModel');

const getAllCourses = (req, res) => {
    console.log(req.query);
    res.send(courses);
}

const getCourseById = (req, res) => {
    console.log(req.params);
    const course = courses.find(c => c.id === parseInt(req.params.courseId));

    if (!course) {
        return res.status(404).send("The course you are looking for is not avaialble");
    }
    
     res.send(course);
}

const createACourse = (req, res) => {
    console.log(req);
    console.log(req.body);
    res.send("Course Created");
}


module.exports = {
    getAllCourses,
    getCourseById,
    createACourse
}