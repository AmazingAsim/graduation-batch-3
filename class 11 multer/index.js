let express = require("express");
let app = express();
let uploads = require('./middlewares/multer');

app.use(express.static('views'));

app.post('/upload_profile',uploads.single('profile'),function(req,res){
    let file = req.file;
    if(!file){
        res.status(400).send("No file uploaded");
    }else{
        res.send("File uploaded successfully");
    }
});


app.listen(8080,function(){
    console.log("Server is running on port 8080");
});