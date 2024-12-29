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
import Cart from "./components/cart/Cart"
import Orders from "./routes/admin-orders/Orders"
import AdminControll from "./routes/admin-controll/AdminControll"
import AdminCreate from "./routes/admin-create/AdminCreate"
import AdminOrdersDetails from "./routes/adminOrdersDetails/AdminOrdersDetails"

function App() {

  return (
    <>
      <ScrollToTop />
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-view/:id" element={<Product />}></Route>
        <Route path="/maincategory/:name" element={<MainCategory />}></Route>
        <Route path="/subcategory/:name" element={<SubCategory />}></Route>
        <Route path="/subcategory/:name" element={<SubCategory />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/orders" element={<Orders />}>
            <Route path="/admin/orders/:status" element={<AdminOrdersDetails />} />
          </Route>
          <Route path="/admin/controll" element={<AdminControll />} />
          <Route path="/admin/create" element={<AdminCreate />} />
        </Route>

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