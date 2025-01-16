import React, { useState, useEffect } from "react";
import "../Css/Skills.css";
import { motion } from "framer-motion";
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoCss3,
  IoLogoHtml5,
} from "react-icons/io5";
import {
  SiCplusplus,
  SiMicrosoftsqlserver,
  SiDotnet,
  SiPython,
} from "react-icons/si";
import { FaBootstrap, FaGitAlt, FaGithub, FaJava, FaFigma } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di"; // for VB.NET (using Visual Studio icon)

const SkillBox = ({ Reacticon, title }) => {
  return (
    <div className="skillIconContainer">
      <Reacticon className="reactIcon" />
      <div className="iconTitleContainer">
        <p className="iconTitle">{title}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const skillsHeading = "Professional Skills";

  return (
    <div className="skillsContainerWrapper" id="Skills">
      <motion.div
        className="skillsContainer"
        initial={{ opacity: 0, y: [-50], scale: 0 }}
        whileInView={{ opacity: 1, y: [0], scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3>
          {skillsHeading
            .split("")
            .map((char, index) =>
              char === " " ? (
                windowWidth <= 400 ? (
                  <br key={index} />
                ) : (
                  " "
                )
              ) : (
                <span key={index}>{char}</span>
              )
            )}
        </h3>
      </motion.div>

      {/* Skills */}
      <motion.div
        className="skillsBox"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* First Row: Frontend & SQL */}
        <SkillBox Reacticon={IoLogoHtml5} title="HTML5" />
        <SkillBox Reacticon={IoLogoCss3} title="CSS3" />
        <SkillBox Reacticon={FaBootstrap} title="Bootstrap" />
        <SkillBox Reacticon={IoLogoJavascript} title="JavaScript" />
        <SkillBox Reacticon={IoLogoReact} title="ReactJS" />
        <SkillBox Reacticon={SiMicrosoftsqlserver} title="SQL Server" />

        {/* Second Row: Backend */}
        <SkillBox Reacticon={IoLogoNodejs} title="NodeJS" />
        <SkillBox Reacticon={FaJava} title="Java" />
        <SkillBox Reacticon={SiDotnet} title="ASP.NET" />
        <SkillBox Reacticon={DiVisualstudio} title="VB.NET" />
        <SkillBox Reacticon={SiPython} title="Python" />
        <SkillBox Reacticon={SiCplusplus} title="C++" />
      </motion.div>
    </div>
  );
};

export default Skills;
