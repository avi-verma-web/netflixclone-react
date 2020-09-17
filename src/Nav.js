import React, { useEffect, useState } from 'react';
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <h2 style={{ "color": "rgb(229, 9, 20)" }} className="nav-logo">AVINASH'S NETFLIX</h2>

            <img className="nav_avatar"
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                alt="Netflix logo"
            ></img>
        </div>
    );
}

export default Nav;