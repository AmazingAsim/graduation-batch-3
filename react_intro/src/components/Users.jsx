import React from 'react'
import { Outlet,Link } from 'react-router-dom'
export default function Users() {
  return (
    <div>
        <div className="row">
            <div className="col-sm-4">
                <Link to="user/1" >User 1</Link>
                <Link to="user/2" >User 2</Link>
            </div>
            <div className="col-sm-8">
                <Outlet></Outlet>
            </div>
        </div>

    </div>
  )
}
