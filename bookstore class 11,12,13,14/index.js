require('dotenv').config();
let express = require("express");
let dbConnection = require('./config/data');
let app = express();
let path = require("path");
let port  = process.env.PORT || 8080;
let bookRoute = require('./routes/book_route');
dbConnection();
// middleware section

app.use(express.static('./views'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/book',bookRoute);

app.listen(port,function(){
    console.log("server is running on port "+port);
});

