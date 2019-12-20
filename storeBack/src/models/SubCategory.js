const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../database/index');

class SubCategory extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING
        }, {sequelize, tableName:'sub_category'});
    }

    static associate(models){
        this.belongsTo(models.Category, { foreignKey: 'category_id', as:'category'})
    }

}

module.exports =  SubCategory;