import React from 'react'
import "./footer.css";
import {BsInstagram, BsFacebook, BsTwitter} from "react-icons/bs";

export const footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>SAMARTHYA GOYAL</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#contact'>Contact</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://google.com'><BsInstagram /></a>
        <a href='https://google.com'><BsFacebook /></a>
        <a href='https://google.com'><BsTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; SAMARTHYA GOYAL, All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default footer