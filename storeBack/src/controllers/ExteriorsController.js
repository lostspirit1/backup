const Exteriors = require('../models/Exteriors');

module.exports = {
    async createExteriors(req,res){
        try {
            const { name } = req.body
            const verify = await Exteriors.findOne({where:{name: name}});
            if(verify){ return res.status(400).json({result: 'Exterior already exists'})}
            const exterior = await Exteriors.create({name});
            if(exterior){ return res.status(201).json(exterior)}
            else{return res.status(400).json({result: 'Failed to create exterior'})}  
        } catch (error) {
            console.error(error);
        }
    },
    async getExteriors(req,res){
         try {
            const result = await Exteriors.findAll({attributes:['id', 'name']});
            if(result){return res.status(200).json({result})}
            else{return res.status(400).json({error: 'failed to get Categories'})}
         } catch (error) {
             console.error(error);
         }
    }
};