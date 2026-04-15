const request = require("supertest");
const express = require('express');
const router = require("../../src/routes/usersRoute"); // Your user routes
const { registerUser, loginUser } = require("../../src/controllers/usersController"); // Your controller functions

jest.mock("../../src/controllers/usersController");


const app = express();
app.use(express.json());
app.use(router);

describe('Testing User Authentication Routes', () => {
    it('should successfully register a user', async () => {
        const user = {
            name: "John Doe",
            email: "john@example.com",
            password: "password123",
            role: "user"
        };

        registerUser.mockResolvedValue(user);

        const response = await request(app)
                        .post('/register')
                        .send(user)
                        .expect(201);
        
        // Used to compare objects                
        expect(response.body).toEqual(user);
        // Used to compare primitives
        // expect(response.body).toBe(user);
    
    })
})
        
        

            

