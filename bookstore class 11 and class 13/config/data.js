let mongoose = require('mongoose');


let dbConnection = ()=>{
    mongoose.connect('mongodb://localhost:27017/bookstore').then(()=>{console.log('db is connected')})
};


module.exports = dbConnection