import { Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home/Home";
import ProductPage from "./components/Product/ProductPage";
import ProductDetailPage from "./components/Product/ProductDetailPage";
import CartPage from "./components/Cart/CartPage";
import CheckOutPage from "./components/CheckOut/CheckOutPage";
import AdminDashboard from "./components/Admin/AdminDasboarh";
import DashBoard from "./components/Admin/Content/Dashboard";
import DashBoardProduct from "./components/Admin/Content/DashboardProduct";
import DashBoardOrder from "./components/Admin/Content/DashboardOder";
import DashBoardUser from "./components/Admin/Content/DashboardUser";
import Revenue from "./components/Admin/Content/Stat/Revenue";
import StatProduct from "./components/Admin/Content/Stat/StatProduct";
import StatSeller from "./components/Admin/Content/Stat/StatSeller";
import ProfileUser from "./components/User/ProfileUser";
import OrderUser from "./components/User/OrderUser";

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<App />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route index element={<Home />} />
                    <Route path="product" element={<ProductPage />} />
                    <Route path="product/:id" element={<ProductDetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckOutPage />} />
                    <Route path="/profile" element={<ProfileUser />} />
                    <Route path="/myorder" element={<OrderUser />} />
                </Route>
                <Route path="/admin" element={<AdminDashboard />} >
                    <Route index element={<DashBoard />} />
                    <Route path="product" element={<DashBoardProduct />} />
                    <Route path="order" element={<DashBoardOrder />} />
                    <Route path="user" element={<DashBoardUser />} />
                    <Route path="statrevenue" element={<Revenue />} />
                    <Route path="statproduct" element={<StatProduct />} />
                    <Route path="statseller" element={<StatSeller />} />
                </Route>
            </Routes >

        </>
    )
}

export default Layout