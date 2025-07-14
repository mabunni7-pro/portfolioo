import React from "react";
import './resume.css';
import { Element } from 'react-scroll';
import ScrollFadeIn from "../scroll/ScrollFadeIn";
const Resume=()=>{
    return(
       <ScrollFadeIn>
        <Element name="resume"className="resumecontainer">
            <h2 className="name">Resume</h2>
            <p>I have gained Experience in learderShip. Learing in Frontend course,and gained some skills in field of frontend development</p>
            <h2>Summary</h2>
            <Element name="resume" className="timeline-row">
               <div className="timeline-container">
                 <div className="timeline-circle"></div>
                 <div className="timeline-line"></div>
               </div>
               <div className="content">
                    <h3>DUDEKULA MABUNNI</h3>
                    <p>Hi, I'm Mabunni — a passionate and skilled frontend developer with a strong foundation in building responsive, user-friendly web applications. I thrive on creativity and problem-solving, demonstrated through my active participation in innovation challenges, hackathons, and presentations. My goal is to turn ideas into seamless digital experiences using modern web technologies and a sharp eye for detail. </p>
                    <ul>
                        <li>4-521 Bethamcherla,Bethamcherla Mandal,Kurnool, 518010</li>
                        <li>+91-7780732858</li>
                        <li>dudekulamabunni46@gmail.com</li>
                    </ul>
                </div>
            </Element>
            <h2>Education</h2>
            <Element name="resume" className="timeline-row">
               <div className="timeline-container">
                 <div className="timeline-circle"></div>
                 <div className="timeline-line"></div>
               </div>
               <div className="content">
                    <h3>BACHELOR OF TECHNOLOGY (B.Tech) IN COMPUTER SCIENCE<br/><p>2022-2026(Expected)</p></h3>
                    <h4>Santhiram Engineering college,Nandyal</h4>
                    <p>Currently pursuing a B.Tech degree. Actively participating in hackathons, ideathons, and projects.internship. </p>
                </div>
            </Element>
            <Element name="resume" className="timeline-row">
               <div className="timeline-container">
                 <div className="timeline-circle"></div>
                 <div className="timeline-line"></div>
               </div>
               <div className="content">
                    <h3>BOARD OF INTERMEDIATE EDUCATION<br/><p>2020-2022</p></h3>
                    <h4>Gnana Saraswati Junior Collage,Bethamcherla</h4>
                    <p>I have a strong interest in web development and problem solving, which has led me to explore frontend technologies and build interactive user interfaces. I'm passionate about learning new skills, creating projects, and actively participating in events like hackathons and innovation challenges to grow as a developer. </p>
                </div>
            </Element>
            <div className="timeline-row">
               <div className="timeline-container">
                 <div className="timeline-circle"></div>
                 <div className="timeline-line"></div>
               </div>
               <div className="content">
                    <h3>BOARD OF SECONDARY EDUCATION<br/><p>2020</p></h3>
                    <h4>ST Anne's (EM) School,Bethamcherla</h4>
                    <p> I learned core subjects like math, science, language, and social studies.
They also explore electives based on interests, such as arts, technology, or vocational skills.
The focus is on developing knowledge, critical thinking, and preparing for higher education or careers.. </p>
                </div>
            </div>
        </Element>
        </ScrollFadeIn>
    )
}
export default Resume;