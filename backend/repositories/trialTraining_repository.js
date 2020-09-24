const { TrialTraining} = require('../models/dbConnections');

class TrialTrainingRepo {

    async addNewTrainee(name,phone,message,date) {
        return await TrialTraining.create({ name, phone, message, date });
    }

    async get(){
        return await TrialTraining.findAll({raw:true});
    }

    async delete(id){
        return await TrialTraining.destroy({where:{id}});
    }

}

module.exports = new TrialTrainingRepo();