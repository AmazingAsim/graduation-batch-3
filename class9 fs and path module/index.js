let express = require('express');
let app = express();
let fs = require('fs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('./views'))

app.post('/addname',function(req,res){
    let name = req.body.name;
    fs.appendFile('data.txt',`${name} \n`,function(err){
        if(err) throw err;
        res.send('name is uploaded')
    })
})


app.listen(8080,function(err){
    console.log('server is running on port 8080');
})
























// fs module or file system module
// let fs = require('fs');

// writing files
// fs.appendFileSync('data.txt',`hello and welcome \n`)

// fs.appendFile('data.txt',`hakuna matata \n`,function(err){
//     if(err) throw err;
//     console.log('file updated')
// });

// fs.writeFile('data.txt',`this will overwrite everything \n`,function(err){
//     if(err) throw err;
//     console.log('file updated')
// })

// let data = fs.readFileSync('data.txt','utf-8');

// fs.readFile('data.txt','utf-8',function(err,data){
//     if(err) throw err;
//     console.log(data)
// })
// fs.unlink('data.txt',function(err){
//     if(err) throw err;
//     console.log('file deleted')
// })

// fs.rename('data.txt','text.txt',function(err){
//     if(err)throw err;
//     console.log('file renamed');
// })