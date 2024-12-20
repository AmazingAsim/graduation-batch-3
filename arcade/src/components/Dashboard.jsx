import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../global/userContext'
import { useContext } from 'react'
export default function Dashboard() {
  const [user,setUser] = useContext(UserContext);
  return (
    <div>
      <h1 className='p-5 text-center bg-dark text-light'>Welcome {user}</h1>

      <div className="container p-2">
          <div className="row">
            <div className="col">
                <div className="card p-2">
                    <h3>Toss the Coin Game</h3>
                    <p>Toss the coin to see who wins</p>
                    <Link to={'coin'} className='btn btn-primary'>Click To Play</Link>
                </div>
            </div>

            <div className="col">
                <div className="card p-2">
                    <h3>Rock Paper Scissors Game</h3>
                    <p>Rock Paper Scissors game</p>
                    <Link to={'rock'} className='btn btn-primary'>Click To Play</Link>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}
