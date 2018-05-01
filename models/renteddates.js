var Item  = require('./item');

module.exports = function (sequelize, DataTypes) {
    var RentedDates = sequelize.define("RentedDates", {
        //rented date Id Foreign Key
        rentItemId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        rentedDate: {
            type: DataTypes.DATEONLY,
            allowNull: true
        }
    });

    // foreignKey Assoction
    RentedDates.associate = function (models) {
        models.RentedDates.belongsTo(models.Item, {
            onDelete: "CASCADE",
            foreignKey: 'rentItemId'
        }
        );
    };

    return RentedDates;
};
