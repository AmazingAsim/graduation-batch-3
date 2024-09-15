let multer = require('multer');

let storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
});

const uploads = multer({storage:storage});

module.exports = uploads;