const { User} = require('../models/dbConnections');


class TraineeRepo {

    async addNewTrainee(username, password, firstName, lastName, phone) {
        return await User.create({ username, password, firstName, lastName, phone });
    }

    async getTrainee(id) {
        return await User.findOne({ where: { id, role: 2 }, attributes: ['id', 'firstName', 'lastName'], raw: true });
    }

 
}

module.exports = new TraineeRepo();
