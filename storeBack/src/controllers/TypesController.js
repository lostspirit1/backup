const Types = require('../models/Types');

module.exports = {
    async createTypes(req,res){
        try {
            const { name } = req.body
            const verify = await Types.findOne({where:{name: name}});
            if(verify){ return res.status(400).json({result: 'Type already exists'})}
            const exterior = await Types.create({name});
            if(exterior){ return res.status(201).json(exterior)}
            else{return res.status(400).json({result: 'Failed to create Type'})}  
        } catch (error) {
            console.error(error);
        }
    },
    async getTypes(req,res){
         try {
            const result = await Types.findAll({attributes:['id', 'name']});
            if(result){return res.status(200).json({result})}
            else{return res.status(400).json({error: 'failed to get Types'})}
         } catch (error) {
             console.error(error);
         }
    }
};