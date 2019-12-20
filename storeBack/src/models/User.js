const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../database/index');
const bcrypt = require('bcryptjs');
class Users extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            login: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {sequelize, tableName:'users'},
         {
            hooks: {
              beforeCreate: (user) => {
                console.log('ae');
              },

            },
        }
        )
    }  
}
Users.isPassword =  (encodedPassword, password) => {
    return bcrypt.compareSync(password, encodedPassword);
};

module.exports =  Users;