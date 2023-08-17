import React from 'react'
import './about.css'
import Nav from '../Nav/Nav'
import { BsArrowRightShort } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about'>
      <Nav></Nav>
      <div className='cont-about'>
        <div className='first-about'>
          <div><h1>Texto cambiante</h1></div>
          <div>ston sisor paper</div>
        </div>
        <div className='second-about'>
          <div className='div-me'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Voluptatum exercitationem aperiam, consectetur d
             ignissimos cumque sapiente consequuntur ipsum inventore? Tempore, 
            sint tenetur numquam dicta omnis quaerat placeat quidem suscipit deserunt eum.
          </div>
          <div className='div-tec'>
            <ul>
                <li><BsArrowRightShort style={{color : 'skyblue', fontSize:'1.2rem'}}/> Javascript</li>
                <li><BsArrowRightShort style={{color : 'skyblue', fontSize:'1.2rem'}}/> NodeJS</li>
                <li><BsArrowRightShort style={{color : 'skyblue', fontSize:'1.2rem'}}/> ReactJS</li>
                <li><BsArrowRightShort style={{color : 'skyblue', fontSize:'1.2rem'}}/> ExpressJS</li>
                <li><BsArrowRightShort style={{color : 'skyblue', fontSize:'1.2rem'}}/> CSS</li>
                <li><BsArrowRightShort style={{color : 'skyblue', fontSize:'1.2rem'}}/> PostgresSQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About