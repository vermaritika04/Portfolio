import React from 'react'
import { IconContext } from 'react-icons'
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import { FaGithubAlt } from 'react-icons/fa'
import {TbBrandLeetcode} from 'react-icons/tb'
import "../Css/Footer.css"

const Footer = () => {
  return (
    <div className='footerContainer'>
        <p>Developed &amp; Designed by Ritika Verma</p>
        <div className='footerIconsContainer'>
        <IconContext.Provider value={{ className: 'footerIcons' }}>
            <a href="mailto:vermaritika3969@gmail.com"><AiFillMail /></a>
            <a href="https://leetcode.com/u/vermaritika04/"><TbBrandLeetcode /></a>
            <a href="https://github.com/vermaritika04" target="_blank"><FaGithubAlt/></a>
            <a href="https://www.linkedin.com/in/vermaritika04/" target="_blank"><AiFillLinkedin/></a>
        </IconContext.Provider>
        </div>
    </div>
  )
}

export default Footer