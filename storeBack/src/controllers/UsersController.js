const Users = require('../models/User');
const bcrypt = require('bcryptjs');
const auth = require('../auth/index');
const jwt = require('jsonwebtoken');
module.exports = {
    async createUser(req,res){
        const { name,email,login } = req.body
        try {
            const verify = await Users.findOne({where:{login: login}});        
            if(verify){ return res.status(400).json({result: 'User already exists'})}
            const password = await bcrypt.hashSync(req.body.password, 10);
            const user = await Users.create({name,email,login,password}); 
            if(user){
                res.status(201).json({user})
            }
        } catch (error) {
            console.error(error) 
            res.status(500).json({error: error})
        }         
    },
    async login(req,res){
        const  user  = await Users.findOne({where:{login: req.body.login}});
        if (!user) { return res.status(400).json({result: 'Login is wrong '});} 
        const isPassword = await Users.isPassword(user.dataValues.password, req.body.password);
        if (!isPassword) { return res.status(400).json({result: 'Password is wrong '}); } 
        const jwt = auth.signjwt(auth.payload(user));
        const result = [
            jwt,
            user
        ]
        res.status(200);
        res.json(result);
    },
    test(){
        console.log('xd');
    }
}