import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png" 
import HeaderSocials from './HeaderSocials';

export const header = () => {
  return (
    <header>
      <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Samarthya Goyal</h1>
          <h5 className='text-light'>Data Scientist and Full Stack Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt='Image of Samarthya Goyal' />
        </div>
        <a href= "#contact" className= "scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header