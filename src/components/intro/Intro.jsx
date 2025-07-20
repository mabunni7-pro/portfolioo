import React from "react";
import './intro.css';
import pic from '../../assets/pic.jpg';
import {Link} from 'react-scroll';

const Intro=()=>{
    

    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Mabunni</span><br/>Frontend Developer</span>
               <p className="intropara"> I am skilled as a Frontend developer This is my first project</p>
               <Link><button className="btn">Know more</button></Link>
            </div>
          <img src={pic} alt="profile"className="bg" />
        </section>
    )
}
export default Intro;