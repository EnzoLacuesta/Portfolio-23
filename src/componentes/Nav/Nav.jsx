import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import {GiAbstract038} from 'react-icons/gi'
const Nav = () => {
  return ( 
        <nav className='nav'>
            <div className='gi'>
                <GiAbstract038 style={{fontSize:'2rem',color:'skyblue'}}/>
            </div>
            <div>
                <ul className='ul'>
                    <li><Link className='li' to='/'>Home</Link></li>
                    <li><Link className='li' to='/about'>About <span className='sp'>me</span></Link></li>
                    <li><Link className='li' to='/works'>Proyects</Link></li>
                </ul>
            </div>
        </nav>
  )
}

export default Nav