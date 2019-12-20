const Sequelize = require('sequelize');
const config = require('../config/config');
const Products = require('../models/Products');
const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');
const Types = require('../models/Types');
const Exteriors = require('../models/Exteriors');
const Users = require('../models/User');

const connect = new Sequelize(config);

Products.init(connect);
Category.init(connect);
SubCategory.init(connect);
Exteriors.init(connect);
Types.init(connect);
Users.init(connect);

SubCategory.associate(connect.models);
Products.associate(connect.models)
module.exports = connect;