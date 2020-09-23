const jwt = require('jsonwebtoken')
const jwtSecret = "secret"

module.exports = function(req, res, next){
    // Get token from the header
    const token = req.header('x-auth-token')

    if(!token){
        return res.json({msg: "No token, access denied"})
    }

    jwt.verify(token, jwtSecret, (err, decoded) =>{
        if (err) {
            res.json({msg: 'Token not valid!'})
        }

        req.admin = decoded.admin
        next()
    })
}