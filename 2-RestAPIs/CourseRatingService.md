- Gets the list of the courses and their details
- Gets the details of the course named 1234
- Creates the course with the provided details
- Modifies the information of the course with the provided details
- Gets the average ratings of all the students for the course 1234

/* http://localhost:8080/api/

### Gets the list of the courses and their details
(Best practice: Use plural nouns for resources)
1. GET /ap1/v1/course/list (Don't need list)
2. GET /v1/courses (This should be the REST API Endpoint)
4. GET /api/courses (missing v1)
5. GET /api/v1/course/getAll (No need for getAll)

5. GET /api/v1/getAllcourse (No need for getAll)

### Gets the details of the course id 1234
1. GET /v1/courses/{id} :id


### Creates the course with the provided details
1. POST /v1/courses
    {body}


### Modifies the information of the course with the provided details
1. PUT v1/courses/{id}
    {body}
2. PUT /v1/courses (Missing Id)
        {id: 123,
        name: "ChangedName"
        }
3. PATCH /api/v1/courses/:courseId 
    <BODY>

PUT --> Replace the resource
PATCH --> Update part of an the resource    

4. - Gets the average ratings for the course {id}
- GET /v1/courses/{id}/enrolledStudents/{enrolledStudentId}/avgRating 
- GET /v1/courses/{id}/students/ratings
- GET /v1/courses/{course_id}/ratings/average

- GET /v1/courses/1234/average_rating --> Acceptable
- GET /v1/courses/:id/rating

- GET /v1/course/student/rating/{course_id} --> 
- GET /v1/courses/1234/ratings?stat=average --> Acceptable
- GET /v1/courses/:courseId/ratings?aggregate=avg

- GET /v1/courses/ratings/average?ids=1,2,3,4

- GET /api/v1/ratings?courseId=:courseId&aggregate=avg  --> Acceptable

- GET /v1/courses/{id}?field=average
