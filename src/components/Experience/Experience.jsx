import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>WHAT SKILLS I HAVE?</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>Figma</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>Java Script</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>React.js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Next.js</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

        {/* ############## End of Frontend details ##################### */}
        
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            {/* <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article> */}
            {/* <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article> */}
            {/* <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article> */}
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>Django</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
              <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>Rest Framework</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>Sanity</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
              <h4>Firebase</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience