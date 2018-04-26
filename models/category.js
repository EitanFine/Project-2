

module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        // categoryId: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     allowNull: false,
        //     autoIncrement: true,
        //     unique: true
        // },
        //Categories
        categoryname: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });


    Category.associate = function (models) {
        models.Category.hasMany(models.Item, {foreignKey: 'itemcatId'});
    };

    return Category;
};
