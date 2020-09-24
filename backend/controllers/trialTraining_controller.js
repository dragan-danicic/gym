const BaseController = require("./base_controller");
const trialTrainingRepo = require('../repositories/trialTraining_repository');

class TrialTrainingController extends BaseController {

    async add(name,phone,message) {
        try {
            const responseRepo = await trialTrainingRepo.addNewTrainee(name,phone,message,new Date());
            if (responseRepo) {                
                return this.ok("Data is stored!!");
            }
            else return this.error(new Error("Error in repository"));
        } catch (err) {
            return this.error(err);
        }
    }

    async get() {
        try {
            const responseRepo = await trialTrainingRepo.get();
            if (responseRepo.length > 0) {                
                return this.ok(responseRepo);
            }
            else return this.notFound("There is no trial trainings have left!");
        } catch (err) {
            return this.error(err);
        }
    }

    async delete(id) {
        try {
            const responseRepo = await trialTrainingRepo.delete(id);   
            if (responseRepo === 1) {                
                return this.ok("Done trial training with id " + id);
            }
            else return this.notFound("There is no trial trainings with id " + id);
        } catch (err) {
            return this.error(err);
        }
    }





}

module.exports = new TrialTrainingController();