import React from 'react'
import "./about.css";
import ME from "../../assets/me-about.jpg";
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'

export const about = () => {
  return (
    <section id='about'>

      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt='About Image'></img>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Multiple Internships</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Projects including ML and WebD</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Doloribus, soluta corporis. Soluta voluptate accusantium voluptates, 
            esse iusto sunt consectetur molestias quidem fuga pariatur voluptatum omnis. 
            Natus quos ullam molestias dolores!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}


export default about