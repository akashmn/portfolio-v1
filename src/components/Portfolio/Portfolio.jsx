import React from 'react'
import './Portfolio.css'
import Netflix from '../../assets/Netflix.jpeg'
import DisHot from '../../assets/disney+hotstar.jpeg'
import Landing from '../../assets/landing page.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Netflix} alt="" />
          </div>
          <h3>Netflix-Clone</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/akashmn/Netflix_clone" className='btn' target='_blank'>Github</a>
          <a href="https://netflix-clone-akashmn.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={DisHot} alt="" />
          </div>
          <h3>Disney+Hotstar-Clone</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/akashmn/Disney_Hotstar_clone" className='btn' target='_blank'>Github</a>
          <a href="https://disney-hotstar-clone-iota.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Landing} alt="" />
          </div>
          <h3>Landing Page</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/akashmn/Landing-page" className='btn' target='_blank'>Github</a>
          <a href="https://landing-page-ojuw4kgxr-akashmn.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/*<article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio Item</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio Item</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
         <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio Item</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>*/}
      </div>
    </section>
  )
}

export default Portfolio