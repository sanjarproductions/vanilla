import React from 'react'
import "./Search.css"
import { Link } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import MainLogo from "../../assets/main-logo.svg"

const Search = () => {
    // api => product/search/${inputSearch})
    return (
        <>
            <div className="search">
                <div className="container">
                    <div className="flex">
                        <Link to={"/"} className='main-logo'>
                            <img src={MainLogo} alt=""  />
                        </Link>
                        <div className='input-wrapper'>
                            <input type="text" name="" id="" placeholder='Qidirish' />
                            <button><CiSearch /></button>
                        </div>
                    </div>
                    <div className="links">
                        <Link to="/">Бош сахифа</Link>
                        <Link to="/about">Биз ҳақимизда</Link>
                        <Link to="/contact">Алоқа</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Search
