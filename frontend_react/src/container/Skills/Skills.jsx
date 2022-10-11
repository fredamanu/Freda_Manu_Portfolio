import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ReactTooltip from 'react-tooltip'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../Wrapper'
import { urlFor, client } from '../../client'

import './Skills.scss'
const Skills = () => {
 const [skills, setSkills] = useState([])
 const [experience, setExperience] = useState([])

 useEffect(() => {
  const query = '*[_type == "experiences"]'
  const skillsQuery = '*[_type == "skills"]'

  client.fetch(query).then((data) => {
   setExperience(data)
  })
  client.fetch(skillsQuery).then((data) => {
   setSkills(data)
  })
 }, [])

 return (
  <>
   <h2 className="head-text"> Skills and Experience</h2>
   <div className="app__skills-container">
    <motion.div className="app__skills-list">
     {skills.map((skill, index) => (
      <motion.div
       whileInView={{ opacity: [0, 1] }}
       transition={{ duration: 0.5 }}
       className="app__skills-item app__flex"
       key={uuidv4()}
      >
       <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
        <img src={urlFor(skill.icon)} alt={skill.name} />
       </div>
       <p className="p-text">{skill.name}</p>
      </motion.div>
     ))}
    </motion.div>

    <motion.div className="app__skills-exp">
     {/* {console.log(experience.works)} */}
     {experience?.map((experience, index) => (
      <motion.div className="app__skills-exp-item" key={uuidv4()}>
       <div className="app__skills-exp-year">
        <p className="p-text">{experience.year}</p>
       </div>
       <motion.div className="app__skills-exp-works">
        {experience.works.map((work, index) => (
         <div key={uuidv4()}>
          <motion.div
           whileInView={{ opacity: [0, 1] }}
           transition={{ duration: 0.5 }}
           className="app__skills-exp-work app__flex"
           data-tip
           data-for={work.name}
          >
           <h4 className="bold-text">{work.name}</h4>
           <p className="p-text">{work.company}</p>
          </motion.div>
          <ReactTooltip
           id={work.name}
           effect="solid"
           arrowColor="#fff"
           className="skills-tooltip"
          >
           {work.desc}
          </ReactTooltip>
         </div>
        ))}
       </motion.div>
      </motion.div>
     ))}
    </motion.div>
   </div>
  </>
 )
}

export default AppWrap(
    MotionWrap(Skills, "app__skills"), 
    'skills',
    "app__whitebg"
    )
