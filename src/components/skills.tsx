import React from 'react';
import { SkillsPath } from '../assets/svg/exportSVG';

const Skills = () => {
    return (
        <div className='skills-container section'>
            <div className="header">Skills</div>
            <div className="skills-container">
                {["HTML", "CSS", "SCSS", "JavaScript", "React js", "GSAP", "Three.js"].map((skill, index) => (
                    <div className="skill" key={index}>
                        {skill}
                    </div>
                ))}
            </div>
            <div className="svg">
                <SkillsPath />
            </div>
        </div>
    );
}

export default Skills;
