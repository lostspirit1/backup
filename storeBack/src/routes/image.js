const express = require('express');
const Product = require('../models/Products');
const imageRouter = express.Router();
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, path.resolve(__dirname, '..', 'uploads'))
    },
    filename: function (req,file,cb){
        cb(null, Date.now()+file.originalname);
    }
});

const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
    }else{
        cb(null,false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})

