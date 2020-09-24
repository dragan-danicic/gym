module.exports = (sequelize, DataTypes) => {
    return sequelize.define('TrialTraining', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        }
    }, {
        tableName: 'trialtraining',
        timestamps: false 
    });
};