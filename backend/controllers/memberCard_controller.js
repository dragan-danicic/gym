const BaseController = require("./base_controller");
const memberCardRepo = require('../repositories/memberCards_repository');
const memberCardService = require('../services/memberCard_service');
const compare = require('../services/dateService');
const traineeRepo = require('../repositories/trainee_repository');

class MemberCardController extends BaseController {


    async getMemberCards(id) {
        try {
            const ret = await memberCardRepo.getMemberCards(id);
            if (ret.length > 0) {
                return this.ok(ret)
            }
            return this.notFound("There is no cards!!")
        } catch (err) {
            return this.error(err);
        }
    }



    async charge(idTrainee, duration) {
        try {
            const ret = await memberCardRepo.getActiveMemberCards(idTrainee);
            if (ret.length === 0) {
                const ret = await memberCardService.chargeService(idTrainee, duration);
                if (ret) {
                    return this.ok("Succ added")
                } else {
                    return this.error("Unsuccessfully added!!");
                }
            }
            return {
                isSuccess: false,
                data: "There is an active card for this trainee ",
                statusCode: 500
            }
        } catch (err) {
            return this.error(err);
        }
    }

    async evident(idTrainee) {
        try {
            
            const ret = await memberCardRepo.getActiveMemberCards(idTrainee);
            
            if (ret.length === 0) {
                return this.error(new Error("There is no active cards for this trainee"));
            } else {
                const lastTraining = ret[0].lastTraining;
                const idCard = ret[0].id;
                const c = compare(new Date(lastTraining), new Date());
                if (lastTraining === null || c < 0) {
                    await memberCardRepo.evident(idCard);
                    return this.ok("Succ evidente arriving!!");
                } else if (c === 0) {
                    return this.error(new Error("You have already evident training for today!!"));
                } else {
                    return this.error(new Error("Error accured!!"));
                }
            }
        } catch (err) {
                return this.error(err);
        }
    }


}

module.exports = new MemberCardController();