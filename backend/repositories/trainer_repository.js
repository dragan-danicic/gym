const { Grouptraining, UserGrouptraining, User } = require('../models/dbConnections');
const { sequelize } = require('../models/dbConnections');
const { Op } = require('sequelize');

class TrainerRepo {

    async getMyStats(UserId, training, date1, date2) {

        return await Grouptraining.findAll({
            attributes: ['date'],
            where: { name: training, UserId, date: { [Op.and]: [{ [Op.gte]: new Date(date1) }, { [Op.lte]: new Date(date2) }] } },
            include: [{
                model: UserGrouptraining,
                required: false,
                attributes: [[sequelize.fn('count', sequelize.col('UserGrouptrainings.UserId')), 'cnt']]
            }],
            group: ['Grouptraining.date'],
            raw: true
        });
    }


    async getTrainersStats(date1, date2) {

        return User.findAll({
            where:{role:1},
            attributes: ['firstName', 'lastName'],
            include: {
                model: Grouptraining,
                as: 'maker',
                required: false,
                where: { date: { [Op.and]: [{ [Op.gte]: new Date(date1) }, { [Op.lte]: new Date(date2) }] } },
                attributes: [[sequelize.fn('count', sequelize.col('maker.id')), 'cnt']],
            },
            group: ["username"],
            raw: true
        })
    }

}

module.exports = new TrainerRepo();
