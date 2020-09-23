const express = require('express')
const router = express.Router()
const auth = require('../middleware/authadmin')
const { check, validationResult } = require('express-validator');

const Car = require('../models/Car')
//Get cars
router.get('/', auth, (req, res) => {
    Car.find({ admin: req.admin.id })
        .then(cars => res.json(cars))
        .catch(err => {
            console.log(err.message)
            res.status(500).json({msg: 'server error'})
        })
})
//Add cars
router.post('/', [auth, [
    check('Image', 'Image is required').not().isEmpty(),
    check('Name', 'Name is required').not().isEmpty(),
    check('Brand', 'Brand is required').not().isEmpty(),
    check('Class', 'Class is required').not().isEmpty(),
    check('Description', 'Description is required').not().isEmpty(),
    check('Price', 'Price is required').not().isEmpty(),
    check('Service', 'Service is required').not().isEmpty()
]], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() })
    }
    const { Image, Name, Brand, Class, Description, Price, Service } = req.body
    const newCar = new Car({
        Image,
        Name,
        Brand,
        Class,
        Description,
        Price,
        Service,
        admin: req.admin.id
    })

    newCar.save()
    .then(cars => res.json(cars))
    .catch(err => console.log(err.message))
})
//Delete cars
router.delete('/:id', auth, (req,res) =>{
Car.findById(req.params.id)
.then(cars => {
    if(!cars){
        return res.json ({msg: 'Car not found'})
    }else if(cars.admin.toString() !== req.admin.id){
        res.json({msg: 'Not authorized'})
}else{
    Car.findByIdAndDelete(req.params.id, (err, data) =>{
        res.json({msg: 'Car Deleted'})
    })
}
})
})
//Edit cars
router.put('/:id', auth, (req,res) =>{
    const { Image, Name, Brand, Class, Description, Price, Service } = req.body

    let carFields = {}
    if(Image) carFields.Image = Image
    if(Name) carFields.Name = Name
    if(Brand) carFields.Brand = Brand
    if(Class) carFields.Class = Class
    if(Description) carFields.Description = Description
    if(Price) carFields.Price = Price
    if(Service) carFields.Service = Service

    Car.findById(req.params.id)
    .then(cars => {
        if (!cars){
            return res.json({msg: 'Car not found'})
        }else if(cars.admin.toString() !== req.admin.id){
                res.json({msg: 'Not authorized'})
        }else{
            Car.findByIdAndUpdate(req.params.id, {$set: carFields}, (err, data) =>{
                res.json({msg: 'Car Updated'})
            })
        }
    })

    .catch(err => {
        console.log(err.message)
        res.status(500).json({msg: 'server error'})
    })
})
module.exports = router