import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark  bg-primary">
  <div className="container-fluid ">
    <span className="navbar-brand mb-0 h1">Fullstack Application </span>
  <Link  className='btn btn-outline-light' to="/adduser" >Add User</Link>
  </div>
</nav>

    </div>
  )
}
