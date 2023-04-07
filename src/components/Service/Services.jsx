import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>WHAT I OFFER?</h5>
      <h2>Services</h2>

      <div className="container services__container">
       <article className="services">
        <div className="service__head">
          <h3>UI / UX Design</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
              <p>Wireframing: Creating low-fidelity designs to represent the layout and functionality of digital products.
</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
              <p>Prototyping: Developing interactive mockups to test and refine product designs.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
              <p>User Interface Design: Designing the visual elements of digital products, such as typography, color schemes, and iconography.
</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
              <p>User Experience Design: Ensuring that digital products are easy to use and provide a seamless user experience.</p>
          </li>
        
        </ul>
       </article>

       {/* ################ END OF UI / UX ################ */}
       
       <article className="services">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
              <p>I am an experienced web developer and I am ready to create a website that meets your needs and exceeds your expectations. I offer competitive and flexible pricing, and I am committed to working collaboratively with you to ensure that your vision for the website is fully realized. Thank you for considering my services.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
              <p>Website design and development
Frontend development, including HTML, CSS, and JavaScript
Website analytics and reporting to monitor website performance and user behavior.</p>
          </li>
          
        </ul>
       </article>
       {/* ################ WEB DEVELOPMENT ################ */}
       <article className="services">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>

        <ul className='service__list'>
          
        <li>
            <BiCheck className='service__list-icon' />
              <p>Content writing: creating written content such as articles, blog posts, product descriptions, social media posts, and more. 
Social media management: managing social media accounts and creating content for various platforms.</p>
          </li>
          {/* <li>
            <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </li> */}
          
        </ul>
       </article>
       {/* ################ END OF CONTENT CREATION ################ */}
      </div>
    </section>
  )
}

export default Services