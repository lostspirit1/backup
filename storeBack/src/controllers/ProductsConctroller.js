const Products = require('../models/Products');
const SubCategory = require('../models/SubCategory');
const Exteriors = require('../models/Exteriors');
const Types = require('../models/Types');
module.exports = {
    async createProduct(req, res) {
        const {subcategory_id,exterior_id,type_id} = req.params;
        const subcategory = await SubCategory.findByPk(subcategory_id);
        if(!subcategory){ return res.status(400).json({error: 'SubCategory not found'})}
        const exterior = await Exteriors.findByPk(exterior_id);
        if(!exterior){ return res.status(400).json({error: 'Exterior not found'})}
        const types = await Types.findByPk(type_id);
        if(!types){ return res.status(400).json({error: 'Type not found'})}
        
        const {name,float,price} = req.body
        const product = await Products.create({subcategory_id,exterior_id,type_id,name,float,price});
        if(product){ return res.status(201).json(product)}
        else{return res.status(400).json({result: 'Failed to create Product'})}  
    },
    async getAllProduct(req,res){
        try {
            const results = await Products.findAll({
                // raw: true, <= remove
                attributes:['id','name', 'float', 'price','img_product', 'description'],
                include: [{
                    model: SubCategory,
                    as: 'subcategory',
                    attributes: ['id','name'],
                },
                {
                    model:Exteriors,
                    as: 'exteriors',
                    attributes: ['id','name']
                },
                {
                    model:Types,
                    as: 'types',
                    attributes: ['id','name']
                },
            ],
            })

            let listProducts= results.map( (products) => {
                return {
                    id: products.id,
                    name: products.name,
                    float: products.float,
                    price: products.price,
                    id_sub: products.subcategory.id,
                    subcategory: products.subcategory.name,
                    id_types: products.types.id,
                    type: products.types.name,
                    id_ext: products.exteriors.id,
                    exterior: products.exteriors.name,
                    img: products.img_product,
                    description: products.description
                }
            })

            const fn = listProducts.filter(v => v.id_ext == 2)
            const mw = listProducts.filter(v => v.id_ext == 3)
            const ft = listProducts.filter(v => v.id_ext == 1)
            const ww = listProducts.filter(v => v.id_ext == 4)
            const bs = listProducts.filter(v => v.id_ext == 5)

            if(listProducts){return res.status(200).json({listProducts,fn,mw,ft,ww,bs})}
            else{return res.status(400).json({result: 'failed to get Products'})}
         } catch (error) {
             console.error(error);
         }
    },
    async addProduct(req, res) {
        console.log(req.body);
        const { filename } = req.file;
        console.log(filename);
        const {name,float,price,description,subcategory_id,exterior_id,type_id} = req.body
        console.log(name,float,price,description,subcategory_id,exterior_id,type_id);
        const subcategory = await SubCategory.findByPk(subcategory_id);
        if(!subcategory){ return res.status(400).json({error: 'SubCategory not found'})}
        const exterior = await Exteriors.findByPk(exterior_id);
        if(!exterior){ return res.status(400).json({error: 'Exterior not found'})}
        const types = await Types.findByPk(type_id);
        if(!types){ return res.status(400).json({error: 'Type not found'})}
        
        const product = await Products.create({subcategory_id,exterior_id,type_id,name,float,price, img_product: filename, description});
        if(product){ return res.status(201).json(product)}
        else{return res.status(400).json({result: 'Failed to create Product'})}  
    }
    

}