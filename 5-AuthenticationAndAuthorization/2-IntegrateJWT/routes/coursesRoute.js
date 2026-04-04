const express = require('express');
const router = express.Router();
const {getAllCourses, createACourse, getCourseById} = require('../controllers/coursesController'); 

// DRY
// OCP
router.get('/', getAllCourses); 
router.get('/:courseId', getCourseById)
router.post('/', createACourse);

module.exports = router;
