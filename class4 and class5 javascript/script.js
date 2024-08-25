let image = document.getElementById('image');

let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');

let images = [
    'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg',
    'https://imgv3.fotor.com/images/side/ai-generate-watercolor-fairy-from-text-with-Fotor-ai-image-generator.jpg',
    'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg'
];

let images2 = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1-JxundonqHJJT1n-3mOuU0YzvwYvh_vDQ&s',
    'https://imgv3.fotor.com/images/side/ai-generate-watercolor-fairy-from-text-with-Fotor-ai-image-generator.jpg',
    'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg'
];



images2.map(function(i){
    let img = document.createElement('img');
    img.src = i;
    img.addEventListener('click',function(event){
        image.src = event.target.src;
    })
    item2.appendChild(img);
});




images.map(function(i){
    let img = document.createElement('img');
    img.src = i;
    img.addEventListener('click',function(event){
        image.src = event.target.src;
    })
    item1.appendChild(img);
});











// // variables
// // var age = 25;
// let name = "John";
// // const pi = 3.14;
// // let isMarried;
// // const hungry = true;
// // // pi = 10
// // let animal;
// // {
// //     let a=10;
// //     var b=20;
// // }

// // data types -->  number string boolean null undefined object

// // let age = 10; // number
// // let movie = 'harry potter'; // string "",'',``
// // let phone = "7470587647" // string 

// // let b = "10"
// // let a = 10;
// // let c = 20;
// // console.log(a+c+b)

// // let isMarried = false; // boolean

// // let fruits = ['apple', 'mango', 'banana']; // array
// // console.log(typeof(fruits));

// // let pen = {
// //     color: 'blue',
// //     brand: 'nike',
// //     price: 20,
// //     write:function(message){console.log(message)}
// // }


// // functions and type of functions

// // build-in functions

// // console.log('hello','jello','mello');
// // alert("welcome to the website");
// // let name = prompt("enter your name");
// // // alert('welcome '+name);
// // alert(`welcome ${name}`);
// // console.log(Math.pow(2,3));
// // console.log(Math.random())

// //and user defined (custom functions) functions 

// // function jump(){
// //     console.log('boing boing');
// // }
// // jump();
// // jump();
// // jump();
// // jump();

// add(10,20);
// function add(a,b){
//     console.log(a+b);
// }


// // function product(a,b){
// //     return a*b;
    
// // };

// // anaymous function

// let fire = function(){
//     console.log('fire');
// }

// // arrow function
// let ice = ()=>{}

// // THIS

// let car = {
//     start:function(){console.log(this)},
//     stop:()=>{console.log(this)}
// }

// // car.start()
// car.stop()

// // higher order functions

// setTimeout(function(){console.log('sorry i am late')},1000);

// // callback functions

// // Dom manuplation // DOCUMENT OBJECT MODEL

// let para = document.getElementById('intro');
// let clickMe = document.getElementById('btn');
// let header = document.querySelector('.header');

// clickMe.addEventListener('click',function(){
//     para.innerHTML = 'welcome to the jungle';
//     header.style.background = 'green';
//     let button = document.createElement('button');
//     button.innerHTML = 'click me again';
//     document.body.appendChild(button);
// })

// function changeColor(event,color){
//    event.target.style.background = 'blue'
// }

// // conditional statements

// //falsy values ---> false, 0, '', null, undefined, NaN
// // let coin = 'eee'

// // if(coin == 'heads'){
// //    alert('this is heads')
// // }
// // else if(coin=='tails'){
// //     alert('this is tails')
// // }
// // else{
// //     alert('invalid coin value')
// // }


// // switch case  

// // let dice = 1;

// // switch(dice){
// //     case 1:
// //         alert('one');
// //         break;
// //     case 2:
// //         alert('two');
// //         break;
// //     case 3:
// //         alert('three');
// //         break;
// //     case 4:
// //         alert('four');
// //         break;
// //     case 5:
// //         alert('five');
// //         break;
// //     case 6:
// //         alert('six');
// //         break;
// //     default: 'invalid'

// // }
// // loops

// let mad  = false;

// // while(mad==false){
// //    mad = confirm('are you mad ?');
// // }


// // let i = 0;
// // while(i<=10){
// //     console.log(i);
// //     i++;
// // }

// // for(let i = 1; i<=10; i++){
// //     console.log(i*2)
// // }

// let nums = [1,9,5,7,3];

// for(let i of nums){
//     console.log(i)
// }

// for(let i in nums){
//     console.log(i)
// }


// let newNums = nums.map(function(n){
//     return n*10
// })

// console.log(newNums)

// // arrays
// // objects




// // classes
// // promises
// // async await
// // event loops

// /*
// hsdfdjkf
// s lksdjlkse sd
// fsd
// fosd
// */