require('dotenv').config();

const express = require('express');
const {logger} = require('./middlewares/loggerMiddleware');
const coursesRouter = require('./routes/coursesRoute');

const usersRouter = require('./routes/usersRoute');

// Why drivers instead of REST
// Can we use REST API for DBs? => Yes
// MongoDB in the past used to do that
// CouchDB, Pouch DB
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(logger);
app.use("/api/v1/courses", coursesRouter);
app.use("/api/v1/users", usersRouter);


app.get('/', (req, res) => {    
    res.send("Hello World");
})

// Bootstrapping your application
// Ensuring all the dependicies are up and running before you start your application
const PORT = process.env.PORT;

// MongoDB, Redis, Kafka, S3
// Promise.all()
mongoose.connect(uri)
    .then(() => {
        console.log("Connected to MongoDB")
    }).then(() => {
        app.listen(PORT, () => {
            console.log("Express server up and running on port: ", PORT);

            // console.log(process.env);
        })
    }).catch((err) => {
        console.log(err);
        process.exit(1)
    })





