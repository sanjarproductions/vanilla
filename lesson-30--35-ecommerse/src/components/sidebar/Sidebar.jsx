import React from 'react'
import "./Sidebar.css"
import { useEffect, useState } from 'react'
import instance from "../../api/axios"
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router";
import CategoryIcon from "../../assets/categoryIcon.svg"

const Sidebar = () => {
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        instance("/category/category-nest")
            .then(response => setCategoryData(response.data))
    }, [])
    console.log(categoryData)

    return (
        // <div className="container">
        <div className='sidebar'>
            <ul>

                <li>
                    <img src={CategoryIcon} alt="" />
                    <p>Kategoriyalar</p>
                </li>

                {
                    categoryData.mainCategory_uz?.map((i, index) =>
                        <li key={uuidv4()}> <Link to="">{i}</Link></li>

                    )

                }
                {
                    categoryData.productSubCategories_uz?.map(i => console.log(i))
                }
            </ul>
        </div>
        // </div>
    )
}

export default Sidebar


