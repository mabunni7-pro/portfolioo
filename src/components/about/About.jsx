import React from "react";
import './about.css';
import { Element } from 'react-scroll';
import ScrollFadeIn from "../scroll/ScrollFadeIn";
const About=()=>{
    return(
         <ScrollFadeIn>
        <Element name="About"className="aboutsection">
            <span className="aboutt">About</span><br />
            <div className="paragraph">
                <br/>
            <p className="para">
                I am Dudekula Mabunni, Skilled in <strong>Frontend development</strong> and driving forward thicking initiatives within the tech industry.Going with good in innovations.
                creating some projects based on Frontend technology.
            </p>
            </div>
        </Element>
        </ScrollFadeIn>
    )
}
export default About;