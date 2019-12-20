const Category = require('../models/Category');

module.exports = {
    async creteCategory(req,res){
        try {
            const { name, description } = req.body
            console.log(name,description)
            const verify = await Category.existCategory(name);
            if(verify){ return res.status(400).json({result: 'Category already exists'})}
            const category = await Category.create({name,description});
            if(category){ return res.status(201).json(category)}
            else{return res.status(400).json({result: 'Failed to create category'})}  
        } catch (error) {
            console.error(error);
        }
    },
    async getAllCategory(req,res){
         try {
            const result = await Category.findAll({attributes:['id', 'name']});
            if(result){return res.status(200).json({result})}
            else{return res.status(400).json({result: 'failed to get Categories'})}
         } catch (error) {
             console.error(error);
         }
    }
};