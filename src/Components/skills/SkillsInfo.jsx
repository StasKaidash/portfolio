import React from 'react'
import "./Skills.css"
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
import Education from "./Education.jsx";
import Awards from "./Awards.jsx";
import Skills from "./Skills.jsx";
import {WorkExperience} from "./WorkExperience.jsx";


const SkillsInfo = () => {
    return (
        <div>
            <section className="skills section" id="skills">
                <div className="container flex-center">
                    <SectionTitle title="Skills" subtitle="Skills"/>
                    <div className="inner-content">
                        <div className="skills-description">
                            <h3>Education & Skills</h3>
                            <p>
                                For more than 5 years our experts have been accomplishing enough with modern Web
                                Development,
                                new generation web and app programming language.
                            </p>
                        </div>
                        <div className="skills-info education-all">
                            <Education />
                            <Skills />
                            <Awards />
                        </div>
                        <WorkExperience />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default SkillsInfo
