const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { body, validationResult } = require('express-validator');
const Admin = require('../models/Admin')
const jwt = require('jsonwebtoken')
const jwtsecret = "secret"
router.post('/', [
    body('Firstname', 'Please enter your firstname').not().isEmpty(),
    body('Lastname', 'Please enter your lastname').not().isEmpty(),
    body('Email', 'Please enter your email').isEmail(),
    body('Password', 'Password must be 6 or more characters').not().isEmpty().isLength({ min: 6 })

], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { Firstname, Lastname, Email, Password } = req.body
    Admin.findOne({ Email })
        .then(admin => {
            if (admin) {
                res.status(400).json({ msg: 'Admin already exists!!' })
            } else {
                admin = new Admin({
                    Firstname,
                    Lastname,
                    Password,
                    Email
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(admin.Password, salt, (err, hashedpassword) => {
                        admin.Password = hashedpassword
                        admin.save()
                        const payload = {
                            admin: {
                                id: admin.id
                            }
                        }
                        jwt.sign(payload, jwtsecret, { expiresIn: 3600000 }, (err, token) => {
                            if (err) throw err
                            res.send({ token })
                        })
                    })

                })

            }

        })
        .catch(err => res.status(400).json({ msg: 'register failed' }))
})

module.exports = router