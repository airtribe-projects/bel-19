const express = require('express');
const {logger} = require('./middlewares/loggerMiddleware');
const coursesRouter = require('./routes/coursesRoute');

const app = express();
app.use(logger);
app.use("/api/v1/courses", coursesRouter);
// app.use("/api/v2/courses", coursesRouterXML);
// app.use("/api/v1/users", usersRoute);


app.get('/', (req, res) => {    
    res.send("Hello World");
})

app.listen(3000, () => {
    console.log("Express server up and running");
})


