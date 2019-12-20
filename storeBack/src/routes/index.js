const express = require('express');

const verify = require('../auth/index');
const passport = require('passport');
const config = require('../config/config');

const ProductsConctroller = require('../controllers/ProductsConctroller');
const multer = require('multer');
const uploadConfig = require('../config/upload');

const CategoryController = require('../controllers/CategoryController');
const SubCategoryController = require('../controllers/SubCategoryController');
const ExteriorsController = require('../controllers/ExteriorsController');
const TypesController = require('../controllers/TypesController')

const UsersController = require('../controllers/UsersController.js')

const routes = express.Router();
const upload = multer(uploadConfig);
//types
routes.post('/types', TypesController.createTypes);
routes.get('/types', TypesController.getTypes);
//exteriors
routes.post('/exteriors', ExteriorsController.createExteriors);
routes.get('/exteriors', ExteriorsController.getExteriors);
//category
routes.post('/category', CategoryController.creteCategory);
routes.get('/category', CategoryController.getAllCategory);
//sub category
routes.post('/category/:category_id/subcategory',SubCategoryController.creteSubCategory);
routes.get('/subcategory',SubCategoryController.getAllSubCategory);
//products
routes.post('/products/add', upload.single('img_product'),ProductsConctroller.addProduct);
routes.post('/products/:subcategory_id/:exterior_id/:type_id/create',ProductsConctroller.createProduct);
routes.get('/products',ProductsConctroller.getAllProduct);
//users
routes.post('/createUser', UsersController.createUser)
// routes.post('/login', UsersController)
routes.get('/user/:user_id')
routes.get('/users',)

routes.post('/login', UsersController.login);
routes.get('/test',  passport.authenticate('jwt', { session: false }), (req,res)=> {
    res.json({
        posts:{
            title: 'xd',
            description: 'xd2'
        }
    })
});

module.exports = routes;