import "./Header.css"
import logo from "../../assets/img/logo.png"
import search from "../../assets/img/search_icon.png"
import cart from "../../assets/img/cart_icon.png"
import { Link, useNavigate, redirect } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react"
import UserSlice from "../../redux/UserSlice"

const Header = () => {
    const users = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = users[0];

    const Logout = () => {

        dispatch(UserSlice.actions.deleteAll())
        redirect("/login")

    }
    useEffect(() => {
        console.log(user)

    }, [user])
    return (
        <div className="header">
            <div className="logo" onClick={() => navigate('/')}>
                <img src={logo} />
            </div>
            {user ?
                (user.role == 1 ?
                    <>
                        <div className="link">
                            <Link to={"/"}>Trang chủ</Link>
                            <Link to={"/product"}>Sản phẩm</Link>

                            <a href="/login"
                                onClick={Logout}
                            >
                                Đăng xuất</a>
                        </div></> :

                    <>
                        <div className="link">
                            <Link to={"/admin"}>Trang chủ</Link>

                            <a href="/login"
                                onClick={Logout}
                            >
                                Đăng xuất</a>
                        </div>
                    </>
                ) :
                <>
                    <div className="link">
                        <Link to={"/"}>Trang chủ</Link>
                        <Link to={"/product"}>Sản phẩm</Link>
                        <Link to={"/login"}>Đăng nhập</Link>
                    </div>
                </>

            }
            <div className="icon">
                <span>
                    <img src={search} />
                </span>
                <span>
                    <img src={cart}
                        onClick={() => navigate("/cart")} />
                </span>
            </div>
        </div >
    )
}

export default Header