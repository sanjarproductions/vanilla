import React from 'react'
import "./Sidebar.css"
import { useEffect, useState } from 'react'
import instance from "../../api/axios"
import { v4 as uuidv4 } from 'uuid';

const Sidebar = () => {
    const [smt, setSmt] = useState([])

    useEffect(() => {
        instance("/category/category-reel")
            .then(response => setSmt(response.data))
    }, [])
    // console.log(smt)

    return (
        <div className="container">
            <div className='sidebar'>
                <ul>
                    {
                        smt.map(i => <li key={uuidv4()}>{i.categoryName_uz}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar


