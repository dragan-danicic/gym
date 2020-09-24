module.exports = (sequelize, DataTypes) => {
    return sequelize.define('UserGrouptraining', {}, {
        tableName: 'usergrouptraining',
        timestamps: false
    });
};