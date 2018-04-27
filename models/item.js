
var Category = require('./category');
var User = require('./user');



//ITEM TABLE - 
// need to import category , and user

module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define("Item", {

        // id: {

        //Categories Id Foreign Key
        itemUserId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //Categories Id Foreign Key
        itemCatId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //item name
        itemName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //item description
        itemDescription: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        itemImage: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        //item rental price
        itemPrice: {
            type: DataTypes.DECIMAL(10,2),
            defaultValue: 0.00,
            allowNull: true
        },
        inUse: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });


    // foreignKey Assoction
    Item.associate = function (models) {
        models.Item.belongsTo(models.Category, {
            onDelete: "CASCADE",
            foreignKey: 'itemCatId'
        }
        );
    };

    Item.associate = function (models) {
        models.Item.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: 'itemUserId'
        }
        );
    };

    Item.associate = function (models) {
        models.Item.hasMany(models.RentedDates, { foreignKey: 'rentItemId' });
    };

    return Item;
};
