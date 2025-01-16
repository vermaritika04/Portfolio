import React from 'react'
import { motion } from 'framer-motion'
import "../Css/Project.css"
import ProjectCard from './ProjectCard'
import sudokoImage from "../Images/sudoko.png"  // Update the path if necessary
import campusNavImage from "../Images/MR.png"  // Update the path if necessary
import webScrapProImage from "../Images/webscrap.png"  // Update the path if necessary
import instagramReachImage from "../Images/ig_reach.jpg"  // Update the path if necessary
import bloodBankImage from "../Images/blood bank.png"  // Update the path if necessary

const Project = () => {
  const projectHeading = "Projects"

  return (
    <div className='projectContainerWrapper' id='Project'>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [0], y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3>
          {projectHeading.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </h3>
      </motion.div>

      <div className='projectCardContainer'>
        <ProjectCard projectName="Sudoku Solver and Generator" projectImage={sudokoImage} />
        <ProjectCard projectName="Campus Navigation App" projectImage={campusNavImage} />
        <ProjectCard projectName="Web Scrap-Pro" projectImage={webScrapProImage} />
        <ProjectCard projectName="Instagram Reach Analysis" projectImage={instagramReachImage} />
        <ProjectCard projectName="Blood Bank Management System" projectImage={bloodBankImage} />
      </div>
    </div>
  )
}

export default Project
