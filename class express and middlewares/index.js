let express = require('express');
let app = express();
let authRouter = require('./routes/auth_routes')


//middlewares
app.use(express.json());
app.use(express.urlencoded())
// routes



app.get('/',function(req,res){
    console.log('a frontend user is connected');
    res.send('hello user from the backend');
});



app.use('/auth',authRouter);

app.listen(8080,function(){
    console.log("server is running");
})