const logger = (req, res, next) => {
    console.log("Request received on:" ,req.url);
    next();
}

module.exports ={logger};