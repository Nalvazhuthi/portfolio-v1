import React from "react";

const Skills = () => {
  const skills = [
    "HTML5",
    "CSS3 / SCSS",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux / Zustand",
    "Tailwind CSS",
    "Framer Motion",
    "Responsive Design",
    "Figma",
    "Adobe XD",
    "Wireframing",
    "Prototyping",
    "Design Systems",
    "Git & GitHub",
    "VS Code",
    "npm / yarn",
    "Webpack / Vite",
    "Chrome DevTools",
    "Agile / Scrum",
  ];

  // To create a smooth infinite scroll, duplicate the skills array
  const skillsList = [...skills, ...skills];

  return (
    <div className="skills-container">
      <div className="skills-scroller">
        {skillsList.map((skill, index) => (
          <div className="skill-item" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
