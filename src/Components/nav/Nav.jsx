import React from 'react'
import "./Nav.css"
import {Link} from "react-scroll";


const Nav = ({isMenuOpen}) => {
    const items = ["home", "about", "skills", "services", "portfolio", "clients", "contact"];
    return (


        <nav className={isMenuOpen ? "nav active" : "nav"}>
           <div className={isMenuOpen ? " nav-list active" : "nav-list"}>
                {items.map((item, index) => (
                    <Link
                        to={item}
                        className="nav-link"
                        key={index}>{item}
                    </Link>
                ))}
           </div>
        </nav>
    )
}
export default Nav
