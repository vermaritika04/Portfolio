import React from 'react'
import "../Css/About.css" 
import { motion } from 'framer-motion'
import about from "../Images/about.png"
import { Tilt } from 'react-tilt'

const About = () => {
  const aboutHeading="About";
  return (
    <div className='aboutContainerWrapper' id='About'>
      <motion.h3 
      initial={{ x: 0, opacity: 0}}
      whileInView={{ x: [0], y:[-50,0], opacity: 1}}
      transition={{ duration: 1 }}
      >
        {aboutHeading.split("").map((char)=> <span>{char}</span>)}
      </motion.h3>
      <div className='aboutContainer'>
        <Tilt className='tiltEffect'>
        <motion.img 
        initial={{ x: 0, opacity: 0}}
        whileInView={{ x: [-100,0], y:[0], opacity: 1}}
        transition={{ duration: 1 }}
        src={about} 
        className="aboutIllustration floatingAnimation"
        alt="about-img"
        >
        </motion.img>
        </Tilt>
        <motion.h4 
        initial={{ x: 0, opacity: 0}}
        whileInView={{ x: [100,0], y:[0], opacity: 1}}
        transition={{ duration: 1 }}
        className='aboutSectionText'
        >
          <h1>Welcome to My Portfolio</h1>
  <p>
    I am a final-year <span class="highlightText">MCA student</span>, specializing in 
    <span class="highlightText"> Artificial Intelligence and Machine Learning</span> from Faridabad, Haryana, India.  
    With expertise in <span class="highlightText">.NET, Java, and SQL</span>, I am dedicated to developing user-centric digital solutions and building scalable applications.
  </p>

  <p>
    As I transition from academia to the professional world, I am eager to enhance my skills, explore emerging technologies, and collaborate on impactful projects.  
    If you are interested in discussing potential collaborations, feel free to <a href="#Contact"><span class="highlightText">connect</span></a>.
  </p>

  <p>Thank you for visiting my portfolio.</p>
        </motion.h4>
      </div>
    </div>
  )
}

export default About