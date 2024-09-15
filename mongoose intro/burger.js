let mongoose = require("mongoose");

let allooPattySchema = mongoose.Schema({
    price:String,
    size:String,
    weight:String
},
{
    collection:"allooPatty"
});

allooPattyModel = mongoose.model("allooPatty",allooPattySchema);

module.exports = allooPattyModel