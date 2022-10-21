const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const Userr = require('../models/user')
const bcrypt = require('bcrypt');


router.post('/', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            })
        }
        else {
            const user = new Userr({
                _id: new mongoose.Types.ObjectId,
                username: req.body.username,
                password: hash,
                phone: req.body.phone,
                email: req.body.email,
                userType: req.body.userType
            })
            user.save()
                .then(Result => {
                    console.log(Result);
                    res.status(200).json({
                        newUser: Result
                    })
                })
                .catch(error => {
                    console.log(error)
                    res.status(500).json({
                        error: err
                    })
                })
        }
    })
})



module.exports = router