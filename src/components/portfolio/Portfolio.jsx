import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

export const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt=''></img>
            <h3>This is a portfolio item title</h3>
            <div className='portfolio_item-cta'>
            <a href='https://google.com' className='btn'>lorem</a>
            <a href='https://google.com' className='btn btn-primary' target='_blank'>lorem</a>
            </div>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt=''></img>
            <h3>This is a portfolio item title</h3>
            <div className='portfolio_item-cta'>
            <a href='https://google.com' className='btn'>lorem</a>
            <a href='https://google.com' className='btn btn-primary' target='_blank'>lorem</a>
            </div>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt=''></img>
            <h3>This is a portfolio item title</h3>
            <div className='portfolio_item-cta'>
            <a href='https://google.com' className='btn'>lorem</a>
            <a href='https://google.com' className='btn btn-primary' target='_blank'>lorem</a>
            </div>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt=''></img>
            <h3>This is a portfolio item title</h3>
            <div className='portfolio_item-cta'>
            <a href='https://google.com' className='btn'>lorem</a>
            <a href='https://google.com' className='btn btn-primary' target='_blank'>lorem</a>
            </div>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG5} alt=''></img>
            <h3>This is a portfolio item title</h3>
            <div className='portfolio_item-cta'>
            <a href='https://google.com' className='btn'>lorem</a>
            <a href='https://google.com' className='btn btn-primary' target='_blank'>lorem</a>
            </div>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6} alt=''></img>
            <h3>This is a portfolio item title</h3>
            <div className='portfolio_item-cta'>
            <a href='https://google.com' className='btn'>lorem</a>
            <a href='https://google.com' className='btn btn-primary' target='_blank'>lorem</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio


/*
If we had a dictionary of the portfolio items including all title, description and other 
details then we can use the array method to dynamically traverse through that

export const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      data.map(({id, image, title, github, demo})=>{
        return(
          <article key ={id} className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={image} alt={title}></img>
            <h3>{title}</h3>
            <div className='portfolio_item-cta'>
            <a href={github} className='btn'>lorem</a>
            <a href={demo} className='btn btn-primary' target='_blank'>lorem</a>
            </div>
          </div>
        </article>
        )
      })        
      </div>
    </section>
  )
}
*/