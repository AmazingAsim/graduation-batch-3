let mongoose = require('mongoose');

let bookSchema = mongoose.Schema({
    name:{type:String,required:true},
    author:{type:String,required:true},
    edition:{type:Number,required:false},
    price:{type:String,required:true},
    imageurl:{type:String,required:false}
},{
    collection:"books"
});

let bookModel = mongoose.model('bookModel',bookSchema);

module.exports = bookModel;