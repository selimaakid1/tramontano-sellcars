const express = require('express')
const RDV = require('../Models/RDV')
const router = express.Router()
const auth = require('../middleware/authadmin')
const { body, validationResult } = require('express-validator');

//Get RDV
router.get('/', auth, (req, res) => {
    RDV.find().then(rdv => res.json(rdv))
    .catch(err => {
        console.log(err.message)
        res.status(500).json({msg: 'server error'})
    })

})

//Post RDV
router.post('/', [
    body('Firstname', 'Firstname is required').notEmpty(),
    body('Lastname', 'Lastname is required').notEmpty(),
    body('Email', 'Enter your email').isEmail(),
    body('Phone', 'Phone is required').notEmpty(),
    body('Hour', 'Time is required').notEmpty(),

], (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() })
    }
    const { Firstname, Lastname, Email, Phone, Hour } = req.body
    const newRdv = new RDV({
        Firstname,
        Lastname,
        Email,
        Phone,
        Hour,

    })
    newRdv.save()
    .then((rdv) => res.json(rdv))
    .catch(err => {
        console.log(err.message)
        res.status(500).json({msg: 'server error'})
    })
})

module.exports = router