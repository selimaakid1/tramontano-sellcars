const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { body, validationResult } = require('express-validator');
const Admin = require('../models/Admin')
const auth = require('../middleware/authadmin')
const jwtSecret = 'secret'

// Get the admin logged in
router.get('/', auth,(req,res) => {
    Admin.findById(req.admin.id)
    .then(admin => res.json(admin))
    .catch(err => {
        console.log(err.message)
        res.status(500).json({msg: 'server error'})
    })
})

// Login admin
router.post('/', [
    body('Email', 'Please include a valid email').isEmail(),
    body('Password', 'Please enter your password').not().isEmpty()
],(req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.json({errors: errors.array() })
    }
    const { Email, Password } = req.body

    Admin.findOne({Email})
    .then(admin => {
        if(!admin){
            return res.status(400).json({msg: 'Please register before'})
        }else {
            bcrypt.compare(Password, admin.Password, (err, isMatch) => {
                if (err) {
                    console.log(err.message)
                } else if (isMatch){
                    const payload = {
                        admin: {
                            id: admin.id
                        }
                    }
                    jwt.sign(payload, jwtSecret, {expiresIn: 3600000}, (err, token) =>{
                        if (err) throw err
                        res.json({token})
                    })
                } else {
                    return res.status(400).json({msg: 'Wrong password'})
                }
            })
        }
    })
    .catch(err => {
        console.log(err.message)
        res.status(500).json({msg: 'server error'})
    })
})

module.exports = router