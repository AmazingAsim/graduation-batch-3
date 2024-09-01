console.log('before set time out');

setTimeout(function(){
    console.log('hello world');
},0);
console.log('after set time out');


// let userData = fetch('https://jsonplaceholder.typicode.com/users');

// userData
// .then(data=>data.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(error))



async function getUserData(){
    let data =await fetch('https://jsonplaceholder.typicode.com/users');
    data = await data.json();
    
    for(let user of data){
        let div = document.createElement('div');
        div.innerHTML = user.name;
        document.body.append(div);
    }
}

getUserData();