import React from "react";
import './contact.css';
import address from '../../assets/address.webp';
import call from '../../assets/call.png';
import email from '../../assets/email.webp';
import OIP from '../../assets/OIP.webp';
import { Element } from 'react-scroll';
import ScrollFadeIn from "../scroll/ScrollFadeIn";
const Contact=()=>{
    return(
         <ScrollFadeIn>
        <Element name="Contact" className="contacts">
            <h2>Contact</h2>
            <p>Get in touch to hire me for frontend development.</p>
            <div className="get">
                <img src={address} alt="Addresss" className="address" />
                <div className="addres">
                    <h2>Address</h2>
                    <p>4-541 Bethamcherla,Bethamcherla mandal,Nandyal Dist</p>
                </div>
            </div>
            <div className="get">
                <img src={call} alt="Call " className="calls" />
                <div className="call">
                    <h2>Call Me</h2>
                    <p>+91 7780732858</p>
                </div>
            </div>
            <div className="get">
                <img src={email} alt="Emails " className=" email" />
                <div className=" Email">
                    <h2>Email</h2>
                    <p>22x51a0529@srecnandyal.edu.in</p>
                </div>
            </div>
            <div className="end">
                <img src={OIP} alt="oip" />
                <div className="lo">
                    <p>Designed by Mabunni.</p>
                </div>

            </div>
        </Element>
        </ScrollFadeIn>
    )
}
export default Contact;