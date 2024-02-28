import React from 'react'
import './About.css'
import ME from '../../assets/my-image2.jpg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>GET TO KNOW</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="ABOUT IMAGE" />
        </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years Working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>8+ completed</small>
            </article>
          </div>

          <p>
          I'm a frontend developer with a passion for learning and teamwork. I'm eager to work in a respected organization and give my best to every project. With a strong work ethic and a focus on excellence, I am committed to delivering exceptional results. In summary, I am a dedicated learner and team player, ready to contribute to the success of any project.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About