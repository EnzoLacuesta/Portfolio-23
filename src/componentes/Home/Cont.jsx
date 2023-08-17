import React from 'react'
import './home.css'
import {AiOutlineInstagram}from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {SiWhatsapp} from 'react-icons/si'

const Cont = () => {
  return (
    <div className='cont-home'>
      
        <div className='hi'>
            Hi, my name is
        </div>
        <h1>
            Enzo Lacuesta
        </h1>
        <h2>
            I build things for the web.
        </h2>
        <div className='div-p'>
          <p>
            I’m a software engineer specializing in building 
            (and occasionally designing) exceptional 
            digital experiences. Currently, 
            I’m focused on building accessible,
            human-centered products at Upstatement.
          </p>
        </div>
        <div className='icons'>
          <a href="https://github.com/EnzoLacuesta"><AiFillGithub/></a>
          <a href="https://www.linkedin.com/in/enzo-lacuesta-53a402208/"><AiFillLinkedin/></a>
          <a href="https://www.instagram.com/enzolacuesta/"><AiOutlineInstagram/></a>    
          <a href="https://www.instagram.com/enzolacuesta/"><SiWhatsapp/></a>      
        </div>
    </div>
  )
}

export default Cont