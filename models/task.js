
module.exports = (sequelize, Datatype) => {
    return sequelize.define('task', {
        id: {
            type: Datatype.INTEGER.UNSIGNED,
            unique: true,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        state: {
            type: Datatype.STRING(10),
            defaultValue: "active",
            allowNull: true
        },
        content: {
            type: Datatype.STRING(30),
            allowNull: false
        },
    }, {
        sequelize,
        timestamps: false,
        paranoid: false,
    })
};