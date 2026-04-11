const coursesController = require("../../src/controllers/coursesController");
const coursesModel = require("../../src/models/coursesModel");

jest.mock("../../src/models/coursesModel");

// Create a test suite --> Group of test
describe("Get All courses API Endpoint", () => {
    test("Should return all courses", () => {
        const mockCourses = [{ _id: "1", name: "Course 1" }, { _id: "2", name: "Course 2" }];
        coursesModel.find.mockReturnValue(mockCourses);

        const result = coursesController.getAllCourse();
        
        // Assertion
        expect(result).toBe(mockCourses);
        // Ensure that the function is called N nnumber of times
        expect(coursesModel.find).toHaveBeenCalledTimes(1);

    });
})

describe("Get a courses API Endpoint", () => {

    test("Should successfully return a course if it exists", () => {
        const mockCourse = { _id: "1", name: "Course 1" };       
        coursesModel.findById = jest.fn().mockImplementation((id) => {
            return id === 1 ? mockCourse : null;
        });

        const result = coursesController.getACourse(1);

        expect(result).toBe(mockCourse);
        // Function is called with right set of parameters
        expect(coursesModel.findById).toHaveBeenCalledWith(1);    
    })

    test("Should return null if a course doesn't exist", () => {
        const mockCourse = { _id: "1", name: "Course 1" };       
        coursesModel.findById = jest.fn().mockImplementation((id) => {
            return id === 1 ? mockCourse : null;
        });

        const result = coursesController.getACourse(5);

        expect(result).toBe(null);
        expect(coursesModel.findById).toHaveBeenCalledTimes(1);    
    })
})

describe("Create a courses API Endpoint", () => {
    test("Should create and return a new course", () => {
        const mockCourse = { name: "New Course" };
        const savedCourse = { _id: "3", ...mockCourse };  

        coursesModel.create.mockReturnValue(savedCourse);

        const result = coursesController.createACourse(mockCourse); 

        expect(result).toBe(savedCourse);
        
        expect(coursesModel.create).toHaveBeenCalledWith(mockCourse);
    })
    
})
