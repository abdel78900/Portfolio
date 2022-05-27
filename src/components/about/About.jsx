import React from 'react'
import './about.css'
import ME from '../../assets/software-developer-png.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About image" />
                    </div>
                    
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experiences</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>80+ completed</small>
                        </article>
                    
                    </div>
                    <p className='about__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis ex eum officiis ratione ea tempora est impedit! A voluptatibus quis et commodi culpa eligendi sapiente totam. Consectetur, ducimus exercitationem.
                    Optio officiis ipsum aperiam, iste quasi alias inventore, dolor doloremque voluptatum voluptas facilis voluptatibus porro totam cupiditate cumque eveniet enim tenetur </p>
                    <a href="#contact" className='btn btn-primary'>let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
