import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return ( 
        <nav className='nav'>
            <div>Logo</div>
            <div>
                <ul className='ul'>
                    <li><Link className='li' to='/'>Home</Link></li>
                    <li><Link className='li' to='/about'>About</Link></li>
                    <li><Link className='li' to='/works'>Proyects</Link></li>
                </ul>
            </div>
        </nav>
  )
}

export default Nav