const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const cfg = require('../config/config');
const User = require('../models/User');
module.exports = (passport) => {
    const opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = cfg.jwt.secret;

    passport.use(new JwtStrategy(opts, (payload, done) => {
        
        User
        .findOne({where: payload.sub})
        .then(user => {

            if(user){
                return done(null,user);
            }
            return done(null,false);
        }).catch(error => console.error(error));

    }));
}