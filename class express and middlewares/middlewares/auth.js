function checkName(req,res,next){
    let name = req.body.username;
    if(name == 'Asim'){
        next();
    }else{
        res.send('you are not authorized');
    }
}

module.exports = {checkName}