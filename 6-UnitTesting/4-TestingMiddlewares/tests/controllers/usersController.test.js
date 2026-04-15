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

beforeEach(async () => {
    await mongoose.connection.dropDatabase();
})



// Environment Teardown
afterAll(async () => {
    // Close the connection to the in-memory database
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
});

describe("User Authentication Tests", () => {
    describe("Testing register user function", () => {
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

         it('should not register a new user if name is missing', async () => {
            const user = {
                email: "test@example.com",
                password: "password123",
                role: "user"
            };
            // const plainTextPassword = user.password;
            // const dbUser = await registerUser(user);
            
            // let errorString;
            
            // try {
            //     await registerUser(user);
            // } catch (err) {
            //     errorString=err.errors.name.properties.message;
            //     console.log(errorString, typeof errorString);
            // }
            
            // expect(errorString).toBe("Path `name` is required.");
            
            await expect(registerUser(user)).rejects.toThrow("User validation failed: name: Path `name` is required.");

            
            // expect(dbUser).toHaveProperty("_id");
            // expect(dbUser.name).toBe(user.name);
            // expect(dbUser.email).toBe(user.email);
            // expect(dbUser.role).toBe(user.role);
            // const isSamePassword = bcrypt.compareSync(user.password, dbUser.password);
            // expect(isSamePassword).toBe(true);
        });

        // it('should throw an error if email is already in use', async () => {
        //     const user1 = {
        //         name: "John Doe",
        //         email: "test@example.com",
        //         password: "password123",
        //         role: "user"
        //     };

        //     const user2 = {
        //         name: "Jane Doe",
        //         email: "test@example.com", // Same email
        //         password: "password456",
        //         role: "admin"
        //     };

        //     // Register first user
        //     await registerUser(user1);

        //     // Try to register second user with the same email
        //     await expect(registerUser(user2)).rejects.toThrow('E11000 duplicate key error collection: test.users index: email_1 dup key: { email: "test@example.com" }');
        // });




    })    
})

