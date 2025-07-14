import React from "react";
import './project.css';
import { Element } from 'react-scroll';
import ScrollFadeIn from "../scroll/ScrollFadeIn";
const Project=()=>{
    return(
         <ScrollFadeIn>
        <Element  name="Project"className="projects">
         <h2>Projects</h2>
        </Element>
        </ScrollFadeIn>
    )
}
export default Project;