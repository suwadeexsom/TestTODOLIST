var express = require('express')
var router = express.Router()
var todolists = require('../dist/TodolistsController')
var multer = require('multer')


var multerConf = {
    Storage:multer.diskStorage({
        destination:function(req,file,next){

            next(null,"./uploads")

        },
        filename:function(req,file,next){
            file.mimetype.split("/")[1]
            var filename =  file.fieldname
            next(null,filename)
        }
    })
}

var upload = multer(multerConf)

router.post("/todolists",upload.none(),create)

module.exports = router

