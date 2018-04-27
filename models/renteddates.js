
var Item  = require('./item');
// this tabel is dates rented 
// col 1 - id - auto increment - primary key
// col 2 - itemid = to go to item table  this is many to one
//col 3 - dates .. one date per record.  if rental is 3 days, then 3 records generated


module.exports = function (sequelize, DataTypes) {
    var RentedDates = sequelize.define("RentedDates", {

            // id will be generated

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
