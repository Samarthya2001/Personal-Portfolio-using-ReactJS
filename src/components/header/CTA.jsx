import React from 'react'
import CV from "../../assets/cv.pdf"

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download={CV} className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Connect</a>
        </div>
  )
}


export default CTA;