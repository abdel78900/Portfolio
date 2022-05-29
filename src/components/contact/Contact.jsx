import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xekr4dr', 'template_07ncne7', form.current, 'tprVX8Irv9bUelFfY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        <section id='contact'>
           <h5>Get in Touch</h5>
           <h2>Contact Me</h2>
           <div className="container contact__container">
               <div className="contact__options">
                   <article className="contact__option">
                       <MdOutlineEmail className='contact__option-icon'/>
                      <h4>Email</h4>
                   <h5>abdel78900@hotmail.com</h5>               
                   <a href="mailto:abdel78900@hotmail.com">Send a message</a>  
                   </article>
                   <article className="contact__option">
                       <BsWhatsapp className='contact__option-icon'/>
                      <h4>WhatsApp</h4>
                   <h5>06 85 38 84 41</h5>               
                   <a href="https://api.whatsapp.com/send?phone=33685388441" target='_blank'>Send a message</a>  
                   </article>
                   </div>
                   <form ref={form} onSubmit={sendEmail}>
                       <input type="text" name='name' placeholder='Your Full Name' required />
                       <input type="text" name='email' placeholder='Your Email' required />
                       <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                       <button type="submit" className='btn btn-primary'>Send Message</button>
                   </form>
           </div>
        </section>
    )
}

export default Contact
