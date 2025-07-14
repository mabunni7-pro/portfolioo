import React from 'react';
import './skill.css';
import { Element } from 'react-scroll';
import ScrollFadeIn from "../scroll/ScrollFadeIn";
 // You can create this CSS file to style the section

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JAVASCRIPT', level: 85 },
  { name: 'C', level: 70 },
  { name: 'PYTHON', level: 75 },
  { name: 'MS EXCEL', level: 90 },
  { name: 'VS CODE', level: 90 },
  { name:'REACT JS',level:80},
];

export default function Skills() {
  return (
    <ScrollFadeIn>
    <Element className="skills-section">
      <h2 className='skil'>Skills</h2>
      <p>
        I excel in a diverse set of technical skills that drive my passion for
        innovation and success, especially in web development and software engineering.
      </p>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-bar" key={index}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="bar-background">
              <div className="bar-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </Element>
    </ScrollFadeIn>
  );
}
