import React from 'react'
import Card from './Card'
export default function Edtech() {
  return (
    <div>
        <h1 className='p-5 text-center bg-primary'>Asim's Coding Classes</h1>

        <div className="container">
            <div className="row">
                <div className="col-4"><Card title="HTML" desc="learn the basic of HTML fundamentals" ></Card></div>
                <div className="col-4"><Card title="CSS" desc="learn the basic of CSS fundamentals" ></Card></div>
                <div className="col-4"><Card title="JS" desc="learn the basic of Javascript programming"  /></div>
                <div className="col-4"><Card title="React" desc="learn the basic of React fundamentals"  /></div>
            </div>
        </div>

    </div>
  )
}
