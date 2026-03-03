import React, {useState} from 'react'
import "./Header.css"
import {Nav} from "../index.js";
import { FaXing } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";





const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <>
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <a href="" className="logo">Stas</a>
                    <Nav isMenuOpen={isMenuOpen}/>
                    <div className="nav-menu-btn" onClick={toggleMenu}>

                        {isMenuOpen ? <FaXing /> : <HiMenu />}
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}
export default Header
