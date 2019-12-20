const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../database/index');

class Category extends Model {

    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING
        }, {sequelize, tableName:'category'});
    }
}
Category.existCategory = (name) => {
    return Category.findOne({where:{name: name}});
};
module.exports = Category;