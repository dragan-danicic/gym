// Service includes
var config_service = require("./services/config_services");
var database_service = require("./services/database_service");
const express = require("express");
const userRouter = require('./routes/user_route');
const trainerRouter = require('./routes/trainer_route');
const traineeRouter = require('./routes/trainee_route');
const memberCardRouter = require('./routes/memberCard_route');
const trialTrainingRouter = require('./routes/trialTraining_route');
const groupTrainingRouter = require('./routes/groupTraining_route');

class Application {
    constructor() {
        this.TRAINER = 1;
        this.TRAINEE = 2;
        this.app = express();

        this.server = require("http").Server(this.app);
        // add router files
        this.app.use(express.json());
        this.app.use(userRouter);
        this.app.use(trainerRouter);
        this.app.use(traineeRouter);
        this.app.use(memberCardRouter);
        this.app.use(trialTrainingRouter);
        this.app.use(groupTrainingRouter);
        this.app.use(function (err, req, res, next) {
            if (!err.statusCode) err.statusCode = 500;
            res.status(err.statusCode).send({sucess:false,data:err.message});
        }); 
    }

    // Main initialization function
    initialize() {
        // Initialize config service
        if (!config_service.initialize()) {
            console.log("Failed to initialize config service.");
            return false;
        }
        // Initialzie database service
        if (!database_service.initialize(this)) {
            console.log("Failed to initialize database service.");
            return false;
        }
        return true;
    }

    // Run server thread and listen for messages
    run() {
        // Start server listening
        this.server.listen(config_service.port);
    }
}

module.exports = new Application();
