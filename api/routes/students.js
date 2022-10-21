const express = require('express')
const student = require('../models/student')
const router = express.Router()
const Student = require('../models/student')
const mongoose = require("mongoose");
const { request } = require('../../app');




// Post request
// storing data into mongoDB/ Database
router.post('/', (req, res, next) => {
    const student = new Student({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
    })
    student.save()
        .then(Result => {
            console.log(Result);
            res.status(200).json({
                newStudent: Result
            })
        })
        // if data is not send then calling error 
        .catch(error => {
            console.log(error)
            res.status(500).json({
                error: err
            })
        })
})





// get request 
// finding data from mondoDB/ database
router.get('/', (req, res, next) => {
    Student.find()
        .then(result => {
            res.status(200).json({
                studentData: result
            })
        })
        // if data can not found then calling error 
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
});


// get request 
// Geting data by using id from databse
router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    Student.findById(req.params.id)
        .then(result => {
            res.status(200).json({
                studentData: result
            })
        })
        // if data can not get then calling error 
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})






// delete request
// Delete data from database 

router.delete('/:id', (req, res, next) => {
    Student.remove({ _id: req.params.id })
        .then(result => {
            res.status(200).json({
                message: "data is deleted",
                result: result
            })
        })
        // if data can not delete then calling error 
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})



// UPDATE request 
// updating data from database
router.put('/:id', (req, res, next) => {
    Student.findOneAndUpdate({ _id: req.params.id }), {
        $set: {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            gender: req.body.gender,

        }
    }

        .then(result => {
            res.status(200).json({
                updated_Student: result

            })
        })
        // if data can not update then calling error 
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })

})



module.exports = router