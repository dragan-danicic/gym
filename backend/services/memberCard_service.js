
const memberCardRepo = require('../repositories/memberCards_repository');

class MemberCardService {


    chargeService(idTrainee,duration) {
        const start = new Date();
        const end = new Date();
        end.setDate(end.getDate() + duration * 30);
        return memberCardRepo.charge(duration,start,end,idTrainee);
    }

}

module.exports = new MemberCardService();

