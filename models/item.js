
var Category = require('./category');
var User = require('./user');

//ITEM TABLE - 
// need to import category , and user

module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define("Item", {

        // id: {

        //Categories Id Foreign Key
        itemuserId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //Categories Id Foreign Key
        itemcatId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //item name
        itemname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //item description
        itemdescription: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        itemimage: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        //item rental price
        itemprice: {
            type: DataTypes.DECIMAL,
            defaultValue: 0,
            allowNull: true
        }
    });


    // foreignKey Assoction
    Item.associate = function (models) {
        models.Item.belongsTo(models.Category, {
            onDelete: "CASCADE",
            foreignKey: 'itemcatId'
        }
        );
    };

    Item.associate = function (models) {
        models.Item.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: 'itemuserId'
        }
        );
    };

    Item.associate = function (models) {
        models.Item.hasMany(models.RentedDates, { foreignKey: 'rentitemId' });
    };

    return Item;
};
