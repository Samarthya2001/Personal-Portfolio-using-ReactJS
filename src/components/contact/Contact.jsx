import React from 'react';
import {useRef} from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md';
import{BsInstagram} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ixxlfye', 'template_8cq8rih', form.current, 'YwftGUazPU1Bf2s2i')

    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Connect with Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>sammygoyal2002@gmail.com</h5>
            <a href='mailto:sammygoyal2002@gmail.com' target='_blank'>Email Me</a>
          </article>

          <article className='contact_option'>
            <BsInstagram className='contact_option-icon'/>
            <h4>Instagram</h4>
            <h5>iz_me_samy</h5>
            <a href='https://instagram.com/iz_me_samy?igshid=NGExMmI2YTkyZg==' target='_blank'>Let's be Friends</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91-7597721337</h5>
            <a href='https://api.whatsapp.com/send?phone=+91-7597721337' target='_blank'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}


export default Contact