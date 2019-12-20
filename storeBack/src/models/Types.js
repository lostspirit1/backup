const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../database/index');

class Types extends Model {

    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
        }, {sequelize, tableName:'type'});
    }
}
module.exports = Types;