import Header from "../Header/Header"

import SiderBar from "./SiderBar"
import "./siderbar.scss"

import DashBoard from "./Content/Dashboard"
import { Outlet } from "react-router-dom"

const AdminDashboard = () => {
    return (
        <div>
            <Header />
            <div className="main-admin" style={{ display: "flex" }}>
                <div className="content-left"><SiderBar /></div>
                <div className="content-right">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default AdminDashboard