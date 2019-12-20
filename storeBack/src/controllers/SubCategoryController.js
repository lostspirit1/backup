const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');

module.exports = {
    async creteSubCategory(req,res){
        try {
            const {category_id} = req.params;
            const { name, description } = req.body
            const category = await Category.findByPk(category_id);
            if(!category){ return res.status(400).json({error: 'Category not found'})}

            const verify = await SubCategory.findOne({where:{name: name}});
            if(verify){ return res.status(400).json({error: 'Sub Category already exists'})}
            const subcategory = await SubCategory.create({category_id,name,description});
            if(subcategory){ return res.status(201).json(subcategory)}
            else{return res.status(400).json({error: 'Failed to create sub category'})}  
        } catch (error) {
            console.error(error);
        }
    },
    async getAllSubCategory(req,res){
         try {
            const result = await SubCategory.findAll({attributes:['id', 'category_id', 'name']});
            if(result){return res.status(200).json({result})}
            else{return res.status(400).json({result: 'failed to get Sub Categories'})}
         } catch (error) {
             console.error(error);
         }
    }
};