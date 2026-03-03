import React from 'react'
import "./Home.css"
import { FaFacebookF, FaInstagramSquare, FaGithub, FaArrowDown } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";
import {mainImg} from "../../assets/images/index.js";






const Home = () => {
    return (
        <section className="home" id="home">
            <div className="container home-wrapper">
                <div className="media-icons">
                    <a href="">
                        <FaFacebookF />
                    </a><a href="">
                    <FaInstagramSquare />
                    </a><a href="">
                    <FaGithub />
                     </a>
                </div>

                <div className="home-info">
                    <h1>Hi, I am Stas</h1>
                    <h3>Front-end Developer</h3>
                    <p>
                        I create stunning websites for your business, Highly experienced in web design and development
                    </p>
                    <a href="" className="home-info-link inner-info-link">
                        Contact me
                        <BsArrowRightCircleFill />
                    </a>
                </div>
                <div className="home-img">
                    <img src={mainImg} alt="man"/>
                </div>
            </div>
            <a href="" className="scroll-down">Scroll down
                <FaArrowDown  />
            </a>
        </section>
    )
}
export default Home
