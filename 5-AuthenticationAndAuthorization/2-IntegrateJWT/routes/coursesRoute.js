const express = require('express');
const router = express.Router();
const {getAllCourses, createACourse, getCourseById} = require('../controllers/coursesController'); 
const {validateToken} = require('../middlewares/authMiddleware');
// DRY
// OCP

// router.use(validateToken)
router.get('/', validateToken, getAllCourses); 
router.get('/:courseId', getCourseById)
router.post('/', validateToken, createACourse);

module.exports = router;
