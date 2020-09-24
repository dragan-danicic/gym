
const groupTrainingRepo = require('../repositories/groupTraining_repository');

class TraineeService {


    async checkRequest(idTraininer,passedTraining){
        const retRepo = await groupTrainingRepo.getUnique(idTraininer);
        const arr = [];
        retRepo.forEach(el => {
            arr.push(el.name);
        });
        if(arr.includes(passedTraining)){
            return true;
        }
        return false;
    }
   


}


module.exports = new TraineeService();
