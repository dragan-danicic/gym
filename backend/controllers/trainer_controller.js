const BaseController = require("./base_controller");
const trainerRepo = require('../repositories/trainer_repository');
const traineeRepo = require('../repositories/trainee_repository');
const userService = require('../services/user_service')

class TrainerController extends BaseController {


    async addNewTrainee(username, password, firstName, lastName, phone) {
        try {
            const hashedPass =await userService.hashPassword(password);
            const ok =await traineeRepo.addNewTrainee(username, hashedPass, firstName, lastName, phone);
            if (ok) {
                return this.created(ok.id)
            }
            return {
                isSuccess: false,
                data: "Error accured",
                statusCode: 500
            }
        } catch (err) {
            if(err.message === 'Validation error'){
                return this.error(new Error("Please choose another username"));
            }
            return this.error(err);
        }
    }   


    

    async getTrainee(id) {
        try {
            const ret = await traineeRepo.getTrainee(id);
            if (ret) {
                return this.ok(ret)
            }
            return this.notFound("There is no trainee with id " + id);
        } catch (err) {
            return this.error(err);
        }
    }

    async getMyStats(id,training,date1,date2) {
        try {
            const ret = await trainerRepo.getMyStats(id,training,date1,date2);
            console.log(ret);
            if (ret.length) {
                return this.ok(ret)
            }
            return this.notFound("You have no trainings in that period");
        } catch (err) {
            return this.error(err);
        }
    }

    async getTrainersStats(date1,date2){
        try {
            const ret = await trainerRepo.getTrainersStats(date1,date2);
            if (ret) {
                return this.ok(ret)
            }
            return this.notFound("Error accured in repo!!");
        } catch (err) {
            return this.error(err);
        }
    }


}



module.exports = new TrainerController();