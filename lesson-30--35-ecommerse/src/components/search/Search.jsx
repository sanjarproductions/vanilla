import { useState, useEffect } from 'react'
import "./Search.css"
import { Link } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import MainLogo from "../../assets/main-logo.svg";
import instance from "../../api/axios";

const Search = () => {
    const [inputSearch, setInputSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        instance(`product/search/${inputSearch}`)
            .then(response => setSearchResults(response.data))
            .catch(err => {
                // console.log(err)
                setSearchResults([])
            })
    }, [inputSearch])

    // console.log(searchResults)

    return (
        <>
            <div className="search">
                <div className="container">
                    <div className="flex">
                        <Link to={"/"} className='main-logo'>
                            <img src={MainLogo} alt="" />
                        </Link>
                        <div className='input-wrapper'>
                            <input type="text" name="" id="" placeholder='Qidirish' onChange={e => setInputSearch(e.target.value)} />
                            <button><CiSearch /></button>

                            {searchResults.length > 0 ?
                                <div className='search-results'>
                                    {
                                        searchResults?.map(searchedItem =>
                                            <>
                                                <Link to={`/product-view/${searchedItem._id}`}>
                                                    <div className="flex searched-item">
                                                        <div className='flex searched-item__title'>
                                                            <img src={searchedItem?.productImages?.[0]} alt="" />
                                                            <h4>{searchedItem.productName_uz}</h4>

                                                        </div>
                                                        <p>{searchedItem.productSizesAndQuantity.length > 1 ? `${searchedItem.productSizesAndQuantity[0].price} - ${searchedItem.productSizesAndQuantity[searchedItem.productSizesAndQuantity.length - 1].price} SUM` : `${searchedItem.productSizesAndQuantity[0].price} SUM`}</p>
                                                    </div>
                                                </Link>
                                            </>
                                        )
                                    }
                                </div> :
                                <div className="search-results">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt="" className='not-fount__message'/>
                                </div>
                            }

                        </div>
                    </div>
                </div>
                <div className="links">
                    <Link to="/">Бош сахифа</Link>
                    <Link to="/about">Биз ҳақимизда</Link>
                    <Link to="/contact">Алоқа</Link>
                </div>
            </div>
        </>
    )
}

export default Search
