const { Grouptraining, UserGrouptraining, User } = require('../models/dbConnections');
const { sequelize } = require('../models/dbConnections');
const { Op, Sequelize } = require('sequelize');



class GroupTrainingRepo {

    async getFuture() {

        const today = new Date();

        const hour = today.getHours() + 1;
        const minutes = today.getMinutes();
        const t = hour + ":" + minutes;

        return await Grouptraining.findAll({
            where: {
                [Op.or]: [
                    { date: { [Op.gt]: new Date() } },
                    {
                        [Op.and]:
                            [
                                {
                                    date:
                                    {
                                        [Op.eq]: new Date()
                                    },
                                    time: { [Op.gt]: t }
                                }
                            ]
                    }
                ]
            },
            raw: true
        });
    }

    async make(name, date, time, maker) {
        return await Grouptraining.create({ name, date: new Date(date), time, UserId: maker });
    }

    async getAllMineTrainer(id) {
        const arr = await Grouptraining.findAll({
            include: [{
                model: UserGrouptraining,
                required: false
            }],
            where: {
                'UserId': id
            },
            attributes: ['id', 'name', 'date', 'time', [sequelize.fn('count', sequelize.col('UserGrouptrainings.UserId')), 'numberSignedUp']],
            group: ['id'],
            raw: true
        });
        return arr;
    }


    async getAllMineTrainee(id) {

        const arr = await User.findAll({
            attributes: [],
            where: {
                id
            },
            include: [{
                attributes: [['id', 'id'], ['name', 'name'], ['date', 'date'], ['time', 'time']],
                model: Grouptraining,
                required: true
            }],
            raw: true
        });
        return arr;
    }

    async getOne(id) {

        return await Grouptraining.findOne({ where: { id }, raw: true });
    }

    async remove(UserId, GrouptrainingId) {

        return await UserGrouptraining.destroy({
            where: {
                UserId, GrouptrainingId
            }
        });
    }

    async signUp(UserId, GrouptrainingId) {
        try {
            return await UserGrouptraining.create({ UserId, GrouptrainingId }, { raw: true });
        } catch (error) {
            return null;
        }
    }

    async getUnique(id) {

        return await Grouptraining.findAll({ where: { UserId: id }, attributes: [[Sequelize.literal('DISTINCT name'), 'name'], 'name'], raw: true });
    }


}



module.exports = new GroupTrainingRepo();

