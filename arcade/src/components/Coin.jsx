import React, { useRef, useState } from 'react'

export default function Coin() {
  const [flips, setFlips] = useState(0);
  const [heads, setHeads] = useState(0);
  const [tails,setTails] = useState(0);
  const [coin,setCoin] = useState('heads');
  let coinRef = useRef(null);

  function flip(){
    coinRef.current.style.display ='none'
    setTimeout(function(){coinRef.current.style.display ='inline'},100);
    setFlips(flips+1);
     let random = Math.random();
     if(random<0.5){
      setCoin('heads');
      setHeads(heads+1);
     }
     else{
      setCoin('tails');
      setTails(tails+1);
     }
  }
  return (
    <div>
        <h1 className="header display-1 text-center bg-warning fw-bolder p-5">Coin Flipper Game</h1>

         <div className="container">
            {
              coin=='heads'? <img src="heads.png" ref={coinRef} alt="" className='coinimg' /> : <img src="tails.png" ref={coinRef} className='coinimg' alt="" />
            }
         </div>

         <div className="container">
            <button className='btn btn-warning' onClick={flip}>Flip The Coin</button>
            <br />
            <h2>Out of {flips} flips, there have been {heads} heads and {tails} tails</h2> 
         </div>
        

    </div>
  )
}
