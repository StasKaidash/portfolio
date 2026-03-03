import React from 'react'
import "./About.css"
import {aboutImg} from "../../assets/images/index.js";
import { FaDownload } from "react-icons/fa";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";


const About = () => {
    return (
        <div>
            <section className="about section" id="about">
                <div className="container flex-center">
                    <SectionTitle title="About me" subtitle="About me"/>
                    <div className="about-wrapper">
                        <div className="about-img"><img src={aboutImg} alt="about"/></div>
                        <div className="about-info">
                            <div className="description">
                                <h3>I`m Stas</h3>
                                <h4>A Lead <span>Front-End Developer</span> based in <span>California</span></h4>
                                <p>I design and develop services for customers specializing creating stylish, modern
                                    websites,
                                    web services and online stores. My passion is to design digital user experiences through
                                    meaningful interactions. Check out my Portfolio
                                </p>
                            </div>
                            <ul className="professional-list">
                                <li className="list-item">
                                    <span className="number">1+</span>
                                    <span className="text">Years of experience</span>
                                </li>
                                <li className="list-item">
                                    <span className="number">5+</span>
                                    <span className="text">Success Projects</span>
                                </li>
                                <li className="list-item">
                                    <span className="number">1K+</span>
                                    <span className="text">Happy Customers</span>
                                </li>
                            </ul>
                            <a href="/" className="inner-info-link">
                                Download
                                <FaDownload />
                            </a>
                        </div>
                    </div>
                </div>

            </section>


        </div>
    )
}
export default About
