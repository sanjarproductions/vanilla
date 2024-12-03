// import React from 'react'
import Main from "../../components/main/Main"
import Nav from "../../components/nav/Nav"
import Search from "../../components/search/Search"
import Sidebar from "../../components/sidebar/Sidebar"
const Home = () => {
    return (
        <>
            <Nav />
            <Search />
            <Sidebar/>
            <Main />
        </>
    )
}

export default Home
