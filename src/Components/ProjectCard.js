import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineEye } from "react-icons/ai"
import { FaGithubAlt } from 'react-icons/fa'

const ProjectCard = ({ projectName, projectImage }) => {
  const desc = {
    "Sudoku Solver and Generator": {
      desc: "Unleash your logic skills with Sudoku.js – where every grid is a new adventure!",
      github: "https://github.com/vermaritika04/Sudoko_Solver",
      website: "https://github.com/vermaritika04/Sudoko_Solver"
    },
    "Campus Navigation App": {
      desc: "Developing a GPS-based Android app for campus navigation, featuring optimized route finding, real-time directions, and seamless usability through Google Maps and Firebase integration.",
      github: "https://github.com/vermaritika04/CampusNavigator",
      website: "#"
    },
    "Web Scrap-Pro": {
      desc: "Created a Python-based tool for real-time data extraction from Flipkart, leveraging advanced scraping techniques and automated data parsing for actionable insights.",
      github: "https://github.com/vermaritika04/Web-Scraping",
      website: "https://github.com/vermaritika04/Web-Scraping"
    },
    "Instagram Reach Analysis": {
      desc: "Analyzed Instagram metrics to evaluate content performance and engagement trends, delivering actionable insights for optimization.",
      github: "https://github.com/vermaritika04/InstaReach-Insights",
      website: "https://github.com/vermaritika04/InstaReach-Insights"
    },
    "Blood Bank Management System": {
      desc: "A comprehensive web application designed to manage blood donations and requests. It helps streamline the process of tracking donations, blood inventory, and emergency blood requests, making it easier for hospitals and individuals to access lifesaving resources during critical times.",
      github: "https://github.com/vermaritika04/BloodBank",
      website: "https://github.com/vermaritika04/BloodBank"
    }
  }

  const project = desc[projectName] || { desc: 'Description not available', github: '#', website: '#' }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='projectCard'>
      <a href={project.website} target="_blank" rel="noopener noreferrer">
        <div className='projectImageContainer'>
          <img src={projectImage} alt={projectName} />
          <AiOutlineEye className='viewIcon' />
        </div>
        <div className='projectInfo'>
          <h2>{projectName}</h2>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithubAlt className='githubIcon' />
          </a>
        </div>
        <p>{project.desc}</p>
      </a>
    </motion.div>
  )
}

export default ProjectCard
