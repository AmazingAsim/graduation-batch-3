import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand p-2 bg-warning">
            <ul className="navbar-nav ms-auto">
                <li> <Link to="/" className="nav-link" >Home</Link> </li>
                <li> <Link to="about" className="nav-link" >About</Link> </li>
                <li> <Link to="edtech" className="nav-link" >Edtech</Link> </li>
                <li> <Link to="users" className="nav-link" >Users</Link> </li>
            </ul>
        </nav>
    </div>
  )
}
