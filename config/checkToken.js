const jwt = require('jsonwebtoken')

module.exports = function (req, res, next){
    // console.log(req.headers)
    let token = req.get('Authorization') || req.query.token
    if(token){
        //Remove 'Bearer' since it is not part of token but used by node js to recognize token
        token = token.replace('Bearer ', '')
        jwt.verify(token, process.env.SECRET, function(err, decoded){
        //SECRET is used to sign the token
            //If valid token, decoded will be the token's entire payload
            //If invalid token, err will be set
            req.user = err ? null : decoded.user
            req.exp = err ? null : new Date(decoded.exp * 1000)
            return next()   //for middlewares always need to call on next middleware even if there isn't one
        })
    }else{
        //No token was sent
        req.user = null
        return next()
    }
}