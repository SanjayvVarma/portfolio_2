import React from 'react'
import skills from '../data/skills'

const Skills = () => {
  return (
    <>
      <div className="container skills" id='skills'>
        <h2 className='text-center'>SKILLS</h2>
        <div className="s-items my-5">
          {
            skills.map((skill) => (
              <div key={skill.title} className="item" data-aos='flip-left' data-aos-duration='1000'>
                <img src={skill.imageSrc} alt={skill.title} />
                <h3>{skill.title}</h3>
              </div>

            ))
          }
        </div>
      </div>
    </>
  )
}

export default Skills