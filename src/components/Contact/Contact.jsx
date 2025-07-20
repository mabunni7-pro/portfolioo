import React,{useRef} from "react";
import './contact.css';
import address from '../../assets/address.webp';
import call from '../../assets/call.png';
import email from '../../assets/email.webp';
import OIP from '../../assets/OIP.webp';
import { Element } from 'react-scroll';
import ScrollFadeIn from "../scroll/ScrollFadeIn";
import emailjs from '@emailjs/browser';
const Contact=()=>{
    const form=useRef();
    const sendEmail =(e)=>{
        e.preventDefault();
          emailjs.sendForm('service_586fxed', 'template_atu9s39', form.current, 'p02c-Y125Tagmi6rm')
            .then((result) => {
                alert('Email sent successfully!');
                form.current.reset();
            }, (error) => {
                alert('Failed to send email.');
                console.error(error.text);
            });
    };
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
            {/* ✅ Email Form Section */}
                <div className="get">
                    <img src={email} alt="Email" className="email" />
                    <div className="Email">
                        <h2>Email</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <input
                                className="mail"
                                type="email"
                                name="user_email"
                                placeholder="Enter your email"
                                required
                            />
                            <textarea className="message"name="message"
                            placeholder="Enter yout message"
                            required/>
                            <button type="submit" className="btn">Send</button>
                        </form>
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