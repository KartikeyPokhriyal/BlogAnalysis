const {constants} = require("../constants")

const errorHandler = (err, req, res, next) => {
const statusCode = res.statusCode ? res.statusCode : 500;

  switch(statusCode) {

    case constants.VALIDATION_ERROR:
        res.json({
            title :  "Validation failed",
            message : err.message,
            stackTrace: err.stack
        })
     
     case constants.NOT_FOUND:
        res.json({
            title: "Not found",
            message : err.message,
            stackTrace: err.stack
        })   
     case constants.FORBIDDEN:
          res.json({
              title: "Forbidden request",
              message : err.message,
              stackTrace: err.stack
          })      
     case constants.UNAUTHORISED:
            res.json({
                title: "Unauthorised request",
                message : err.message,
                stackTrace: err.stack
            })        
  }

  res.json({message: err.message, stackTrace: err.stack});
}

module.exports = errorHandler;