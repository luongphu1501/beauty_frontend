import "./userdashboard.scss"
import { Link } from "react-router-dom"
import avatar from "../../assets/img/avatar.png"
const UserDashboard = () => {
    return (
        <div className="user-dashboard">
            <div className="user">
                <img src={avatar} alt="avatar user" />
                <p>ABC XYZ</p>
            </div>
            <div className="group">
                <div className="icon">

                </div>
                <div>
                    <p>Tài khoản của tôi </p>
                    <p><Link to={"/profile"}>Thông tin cá nhân</Link></p>
                    <p>Đổi mật khẩu</p>
                </div>
            </div>
            <div className="group">
                <p><Link to={"/myorder"}>Đơn hàng</Link></p>
            </div>
            <div className="group">
                <p>Cài đặt</p>
            </div>
            <div className="group">
                <p>Liên hệ</p>
            </div>
            <div className="group">
                <p>Mã giảm giá</p>
            </div>
            <div className="group">
                <p>
                    Đăng xuất
                </p>
            </div>
        </div>
    )
}

export default UserDashboard