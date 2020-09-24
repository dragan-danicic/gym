const { Membercard } = require('../models/dbConnections');
const { Op, Sequelize } = require('sequelize');
class MemberCardRepo {

    async getMemberCards(id) {
        return await Membercard.findAll({ where: { UserId: id }, raw: true });
    }

    async charge(duration, start, end, UserId) {
        return await Membercard.create({ duration, start, end, UserId });
    }

    async getActiveMemberCards(UserId) {
        return await Membercard.findAll({
            where: {
                end: {
                    [Op.gte]: new Date()
                },
                UserId
            },
            raw: true
        });
    }

    async evident(id) {
        return await Membercard.update({ number: Sequelize.literal('number + 1') , lastTraining:new Date()}, {
            where: {
              id
            }
        });
    }




}

module.exports = new MemberCardRepo();