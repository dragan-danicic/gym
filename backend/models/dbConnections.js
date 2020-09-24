const {Sequelize,DataTypes} = require('sequelize')
const config_service = require("../services/config_services");

const UserModel = require("./userModel");
const UserGroupraningModel = require("./userGrouptrainingModel");
const TrialTrainingModel = require("./trialTrainingModel");
const MemberCardModel = require("./membercardModel");
const GroupTrainingModel = require("./groupTrainingModel");
 


const sequelize = new Sequelize(config_service.db.database, config_service.db.user, config_service.db.password, {
    dialect: config_service.db.dialect,
    port: config_service.db.port,
    operatorsAliases: config_service.db.operatorsAliases,
    pool: config_service.db.pool,
    logging: false
});


const User = UserModel(sequelize, DataTypes);
const UserGrouptraining = UserGroupraningModel(sequelize, DataTypes);
const TrialTraining = TrialTrainingModel(sequelize, DataTypes);
const Membercard = MemberCardModel(sequelize, DataTypes);
const Grouptraining = GroupTrainingModel(sequelize, DataTypes);

User.hasMany(Membercard);
Membercard.belongsTo(User);

User.hasMany(Grouptraining,{ as: 'maker', foreignKey: 'UserId' });
Grouptraining.belongsTo(User, { as: 'maker', foreignKey: 'UserId' });





User.belongsToMany(Grouptraining, {through :UserGrouptraining});
Grouptraining.belongsToMany(User,{through: UserGrouptraining});

User.hasMany(UserGrouptraining);
UserGrouptraining.belongsTo(User);
Grouptraining.hasMany(UserGrouptraining);
UserGrouptraining.belongsTo(Grouptraining);
 




module.exports = {
    sequelize,User,UserGrouptraining,TrialTraining,Membercard,Grouptraining
} 