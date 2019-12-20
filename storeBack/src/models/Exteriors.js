const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../database/index');

class Exteriors extends Model {

    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
        }, {sequelize, tableName:'exteriors'});
    }
}
module.exports = Exteriors;