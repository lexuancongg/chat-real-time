import { StrategyOptions, StrategyOptionsWithoutRequest, VerifiedCallback } from 'passport-jwt';
import { CustomRequest } from '../auth';
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const passport = require('passport');
if (!process.env.SECRET_KEY) {
    throw new Error('Thiếu SECRET_KEY trong file .env');
}

const cookieExtractor = (req: CustomRequest) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies.token;
    }
    return token;
}

const opts: StrategyOptions = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.SECRET_KEY,
    issuer: 'accounts.examplesoft.com',
    audience: 'yoursite.net'
};
passport.use(new JwtStrategy(opts,function(decode_jwt :any , done : VerifiedCallback){
    
}))

