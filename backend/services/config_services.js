class ConfigService {
    constructor() {
        this.initialized = false;

        // Database configuration
        this.db = {
            database: 'gym2',
            user: 'root',
            password: "Dragan92!",
            dialect: 'mysql',
            port: 3306,
            operatorsAliases: 'false',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
        };
 
        this.port = 6000;
        this.tokenSignature = "ArsToMars";
    }

    initialize() {
        console.log("Initializing config service.");
        this.initialized = true;
        return true;
    }
}
 
module.exports = new ConfigService();