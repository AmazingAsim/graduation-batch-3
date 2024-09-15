require('dotenv').config();
let express = require("express");
let app = express();
let path = require("path");
let port  = process.env.PORT || 8080;

// middleware section

app.use(express.static('./views'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.listen(8080,function(){
    console.log("server is running on port "+port);
})