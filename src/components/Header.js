import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link to='/' className='navbar-brand'>Streamy</Link>
      <div className='collapse navbar-collapse' id='navbarNavDropdown'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item active'>
            <Link to='/' className='btn btn-outline-success'>Home</Link>
          </li>
          <li className='nav-item'>
            <GoogleAuth />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
