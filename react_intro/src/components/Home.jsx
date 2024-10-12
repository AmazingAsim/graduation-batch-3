import { useState, useEffect, useLayoutEffect } from "react";

export default function Home(){
    let count = 0;
    const [count2,setCount2] = useState(0)
    const inc = ()=>{
        setCount2(count2+1)
        count++;
        console.log(count)
    }

    
    function tenX(){
        setTimeout(function(){console.log("10x");setCount2(count2+10)},1000)
    }

   useEffect(function(){
       tenX();
       return(()=>{
           console.log("clean up");
       })
   },[])

   useLayoutEffect(function(){
    console.log("useLayoutEffect")
   },[count2]);


    function jump(){
        console.log("jumping")
    }

    jump()
    
    return(
        <div className="p-5 text-center"> 
            <h1> count: {count}</h1>
            <h1> count2: {count2} </h1>
            <button onClick={inc}>Increase + </button>
        </div>
    )
}

 