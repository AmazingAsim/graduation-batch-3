// const sum = require('./Opeartions.js');
// console.log(sum(1,3,4,6,8))

let http = require('http');

let server  = http.createServer(function(req,res){
  let url = req.url;
  if(url=='/'){
    res.end('welcome to my first server.');
  }
  else if(url == '/about'){
     res.end(`<h1>About us</h1>`)
  }
  else if(url=='/contact'){
    res.end(`<h1>contact us</h1>`)
  }
  else{
    res.end(`<h1>404 not found</h1>`)
  }
});

server.listen(8080);