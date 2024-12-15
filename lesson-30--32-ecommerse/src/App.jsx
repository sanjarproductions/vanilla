import Home from "./routes/home/Home"
import About from "./routes/about/About"
import { Routes, Route } from "react-router-dom"
import Contact from "./routes/contact/Contact"
import Product from "./routes/product/Product"
import MainCategory from "./routes/main-category/MainCategory"
import SubCategory from "./routes/sub-category/SubCategory"
import ScrollToTop from "./components/scrollToTop/scrollToTop"
import Login from "./routes/login/Login"
import Admin from "./routes/admin/Admin"
import { ToastContainer } from "react-toastify"
function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-view/:id" element={<Product />}></Route>
        <Route path="/maincategory/:name" element={<MainCategory />}></Route>
        <Route path="/subcategory/:name" element={<SubCategory />}></Route>
        <Route path="/subcategory/:name" element={<SubCategory />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
      <ToastContainer limit={2} />
    </>
  )
}

export default App

// search +
// subcategory +
// product-view +

// admin + auth +
// add to cart (redux)
// language -