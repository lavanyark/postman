'use strict';
module.exports = (sequelize, DataTypes) => {
    var user = sequelize.define('user', {
        email: {
            type:DataTypes.STRING,
            allowNull: false
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return user;
};