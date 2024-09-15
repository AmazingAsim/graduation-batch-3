let express = require('express');
let router = express.Router();
let users = require('../repo/user.json');
let authmiddleware = require('../middlewares/auth.js');

router.get('/user',authmiddleware.checkName,function(req,res){
   res.json(users);
})

router.post('/login',function(req,res){
    res.send('this is the login route')
});

router.post('/signup',function(req,res){
    res.send('this is the signup route')
})


module.exports = router;