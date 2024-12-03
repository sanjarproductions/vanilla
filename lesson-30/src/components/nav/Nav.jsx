import React from 'react'
import "./Nav.css"

import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Nav = () => {
    return (
        <nav>
            <div className="container">
                <div className="flex">
                    <div className='flags'>
                        🇺🇿🇷🇺 
                    </div>
                    <div className='contact'>
                        <FaPhoneAlt />
                        <a href="tel:+998911860085">+998 91 186 00 85</a>
                    </div>
                    <div className='contact'>
                        <IoMdMail />
                        <a href="mailto:erkinjon.hodjaev@gmail.com">erkinjon.hodjaev@gmail.com</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
