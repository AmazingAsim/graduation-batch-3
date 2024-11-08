import React from 'react'
import {useState} from 'react'
export default function Rock() {
  const [you,setYou] = useState('');  
  const [computer,setComputer] = useState('');
  const [result,setResult] = useState('result');

  function play(e) {
    
    // Extract the file name (rock.png, paper.png, or scissor.png) from the src
    const selectedYou = e.target.src.split('/').pop(); 
    setYou(selectedYou);
  
    let random = Math.ceil(Math.random() * 3);
    let selectedComputer;
  
    if (random === 1) {
      selectedComputer = 'rock.png';
    } else if (random === 2) {
      selectedComputer = 'paper.png';
    } else {
      selectedComputer = 'scissor.png';
    }
    setComputer(selectedComputer);
  
    if (selectedYou === selectedComputer) {
      setResult('Draw');
    } else if (
      (selectedYou === 'rock.png' && selectedComputer === 'scissor.png') ||
      (selectedYou === 'paper.png' && selectedComputer === 'rock.png') ||
      (selectedYou === 'scissor.png' && selectedComputer === 'paper.png')
    ) {
      setResult('You Win');
    } else {
      setResult('You Lose');
    }
  }
  
  
  
  return (
    <div>
      <h1 className="header display-1 text-center bg-warning fw-bolder p-5">Rock Paper Scissors Game</h1>
      <div className="container">
        <div className="row">
            <h3>{result}</h3>
        </div>
         <div className="row my-5" style={{height:"200px"}}>
            <div className="col-4 offset-1 bg-info">
              <h3>You</h3>
              <img src={you} alt="" />
            </div>
            <div className="col-4 offset-2 bg-danger">
              <h3>Computer</h3>
              <img src={computer} alt="" />
            </div>
         </div>
      </div>

      <div className="row">
         <div className="col-sm-4">
              <img onClick={play} class="img-fluid" src="rock.png" role='button' />
         </div>
         <div className="col-sm-4">
              <img onClick={play} class="img-fluid" src="paper.png" role='button' />
         </div>
         <div className="col-sm-4">
              <img onClick={play} class="img-fluid" src="scissor.png"  role='button' />
         </div>
      </div>

    </div>
  )
}
