let url = `mongodb://localhost:27017/burgerking`
let mongoose = require("mongoose");
let allooPattyModel = require('./burger');
mongoose.connect(url).then(()=>{console.log('database is connected')});

async function getvegMenu(){
  let result = await allooPattyModel.find();
  console.log(result);
}

async function createNewFood(food) {
    try {
        let newFood = new allooPattyModel(food);
        let result = await newFood.save();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

// createNewFood({
//     price: 800,
//     size: 'family pack',
//     weight: '1kg'
// })

getvegMenu();