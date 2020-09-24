module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Grouptraining', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        }
    }, {
        tableName: 'grouptraining',
        timestamps: false
    });
};