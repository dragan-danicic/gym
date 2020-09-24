const { User} = require('../models/dbConnections');

class UserRepo {

    async getUser(username) {
        return User.findOne({where:{username},raw:true});
    }

    async change(id,p1) {
        return User.update({password:p1},{where:{id}})
    }

}

module.exports = new UserRepo();

