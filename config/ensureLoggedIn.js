//Check req.body and see if there is a user object
    //if there isn't a user object it will throw an error
    
module.exports = function(req, res, next){
    if(!req.user) return res.status(401).json('Unauthorized')
    next()
}