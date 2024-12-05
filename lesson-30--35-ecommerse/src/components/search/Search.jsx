import React from 'react'
import "./Search.css"
import { Link } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import MainLogo from "../../assets/main-logo.svg"

const Search = () => {
    return (
        <>
            <div className="search">
                <div className="container">
                    <div className="flex">
                        <img src={MainLogo} alt="" className='main-logo' />
                        {/* form */}
                        <div className='input-wrapper'>
                            <input type="text" name="" id="" placeholder='Qidirish' />
                            <button><CiSearch /></button>
                        </div>
                    </div>
                    <div className="links">
                        <Link path="/">Бош сахифа</Link>
                        <Link path="/">Ҳамкорлар</Link>
                        <Link path="/">Биз ҳақимизда</Link>
                        <Link path="/">Алоқа</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Search
