import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">A.B.</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="#"><FaFacebookF/></a>
                <a href="#"><FiInstagram/></a>
                <a href="#"><IoLogoTwitter/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; AB . All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer
