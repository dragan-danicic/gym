const { sequelize} = require('../models/dbConnections');
class DatabaseService {
    constructor() {
        this.connect();
    }

    connect() {
        sequelize.sync()
            .then(() => {
                console.log(`Database connected`);
            }).catch((err) => {
                console.log('Database connection refused');
                console.log(err);
            })
    }

    initialize(application) {
        console.log("Initializing database service.")
        this.initialized = true;
        this.application = application;
        this.application.database_service = this;
        return true;
    }

}

module.exports = new DatabaseService();