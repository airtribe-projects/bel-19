const bcrypt = require('bcrypt');
const usersModel = require("../../src/models/usersModel");
const { registerUser, loginUser } = require("../../src/controllers/usersController");

const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');


let mongoServer;

// Hooks / Lifecycle methods: beforeAll, afterAll, beforeEach, afterEach 

// Environment Setup
beforeAll(async ()=> {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    mongoose.connect(uri);
});

// Environment Teardown
afterAll(async () => {
    // Close the connection to the in-memory database
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
});

describe("User Authentication Tests", () => {
    describe("Testing register user fucntion", () => {
        // To write a test you can either use it or test
        it('should register a new user successfully with all fields', async () => {
            const user = {
                name: "John Doe",
                email: "test@example.com",
                password: "password123",
                role: "user"
            };
            // const plainTextPassword = user.password;
            const dbUser = await registerUser(user);
            expect(dbUser).toHaveProperty("_id");
            expect(dbUser.name).toBe(user.name);
            expect(dbUser.email).toBe(user.email);
            expect(dbUser.role).toBe(user.role);
            const isSamePassword = bcrypt.compareSync(user.password, dbUser.password);
            expect(isSamePassword).toBe(true);
        });
    })    
})

