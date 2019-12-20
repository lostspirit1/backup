const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../database/index');

class Products extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            float: DataTypes.DOUBLE,
            price: DataTypes.DOUBLE,
            img_product: DataTypes.STRING,
            description: DataTypes.STRING
        }, {sequelize, tableName:'products'});
    }
    static associate(models){
        this.belongsTo(models.SubCategory, { foreignKey: 'subcategory_id', as:'subcategory'});
        this.belongsTo(models.Exteriors, { foreignKey: 'exterior_id', as:'exteriors'});
        this.belongsTo(models.Types, { foreignKey: 'type_id', as:'types'})
    }
}

module.exports =  Products;