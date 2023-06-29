import React from 'react'
import "./experience.css"
import {MdVerified} from 'react-icons/md';

export const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_fullstack">
          <h3>Full Stack Development</h3>
          <div className="experience_content">
            
            <article className='experience_details'><MdVerified className='expeerience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'><MdVerified className='expeerience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'><MdVerified className='expeerience_details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'><MdVerified className='expeerience_details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>



        <div className="experience_datascience">
        <h3>Data Science</h3>
          <div className="experience_content">
            
            <article className='experience_details'><MdVerified className='expeerience_details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'><MdVerified className='expeerience_details-icon'/>
              <div>
              <h4>Matplotlib</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'><MdVerified className='expeerience_details-icon'/>
              <div>
              <h4>Supervised</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'><MdVerified className='expeerience_details-icon'/>
              <div>
              <h4>Unsupervised</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
