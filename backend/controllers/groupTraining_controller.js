const BaseController = require("./base_controller");
const groupTrainingRepo = require('../repositories/groupTraining_repository');
const compare = require('../services/dateService')
const groupTrainingService = require('../services/groupTraining_service');

class GroupTrainingController extends BaseController {

    async getFuture() {
        try {
            const responseRepo = await groupTrainingRepo.getFuture();
            if (responseRepo.length > 0) {
                return this.ok(responseRepo);
            }
            else return this.notFound("There are no group trainings in the future");
        } catch (err) {
            return this.error(err);
        }
    }

    async getAllMineTrainer(id) {

        try {
            const responseRepo = await groupTrainingRepo.getAllMineTrainer(id);
            if (responseRepo.length>0) {
                return this.ok(responseRepo);
            }
            else return this.notFound("There is no your trainings");
        } catch (err) {
            return this.error(err);
        }
    }


    async getAllMineTrainee(id) {

        try {
            const responseRepo = await groupTrainingRepo.getAllMineTrainee(id);
            if (responseRepo.length > 0) {
                const r = groupTrainingService.structureJSON(responseRepo);
                return this.ok(r);
            }
            else return this.notFound("You are not signed up for group trainings.");
        } catch (err) {
            return this.error(err);
        }
    }


    async make(name, date, time, maker) {
        try {
            const now = new Date();
            const passed = new Date(date);
            const c = compare(now, passed);

            if (c > 0) {
                return this.error(new Error("Error.Date in request is in the past!!"));
            }
            else if (c === 0) {
                return this.error(new Error("Error.Date in request is today.Too late for that!!"));
            } else {
                const responseRepo = await groupTrainingRepo.make(name, date, time, maker);
                if (responseRepo) {
                    return this.ok("Success");
                }
                else return this.error(new Error("Error in repository"));
            }
        } catch (err) {
            return this.error(err);
        }
    }

    async remove(idTrainee, idTraining) {

        const responseRepo = await groupTrainingRepo.getOne(idTraining);
        if (responseRepo) {
            const ok = groupTrainingService.ifTimeWright(responseRepo.date, responseRepo.time);
            if (ok) {
                const r1 = await groupTrainingRepo.remove(idTrainee, idTraining);
                if (r1 === 1) {
                    return this.ok("Its removed!!");
                } else {
                    return this.error(new Error("You weren't even signed for this training"));
                }
            } else {
                return this.error(new Error("Your time for unsigning is passed!!"));
            }
        } else {
            return this.error(new Error("There is no training with that id!!"));
        }
    }


    async signUp(idTrainee, idTraining) {

        const responseRepo = await groupTrainingRepo.getOne(idTraining);
        if (responseRepo) {
            console.log(responseRepo.date);
            console.log(responseRepo.time);
            const ok = groupTrainingService.ifTimeWright(responseRepo.date, responseRepo.time);
            if (ok) {                                                                     //You need to sign up min 1 hour before training
                const r1 = await groupTrainingRepo.signUp(idTrainee, idTraining);
                if (r1) {
                    return this.ok("You are signed up this training");
                } else {
                    return this.error(new Error("You already signed this training"));
                }
            } else {
                return this.error(new Error("Your time for signing up is passed!!"));
            }
        } else {
            return this.error(new Error("There is no training with id " + idTraining));
        }
    }

    async getUnique(id) {
        try {
            const responseRepo = await groupTrainingRepo.getUnique(id);
            if (responseRepo.length > 0) {
                return this.ok(responseRepo);
            }
            else return this.notFound("You have no trainings!!");
        } catch (err) {
            return this.error(err);
        }
    }



}

module.exports = new GroupTrainingController();