const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Membercard', {
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        start: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        end: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        lastTraining: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        tableName: 'membercard',
        timestamps: false
    });
};