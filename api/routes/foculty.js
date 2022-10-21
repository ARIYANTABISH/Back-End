const express = require('express')
const router = express.Router()



router.get('/',(req, res, next)=>{
    res.status(200).json({
        message:'this is foculty get request'
    })
})
router.post('/',(req, res, next)=>{
    res.status(200).json({
        message:'this is foculty post request'
    })
})

module.exports = router
