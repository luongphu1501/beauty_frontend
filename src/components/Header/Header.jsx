import "./Header.css"
import logo from "../../assets/img/logo.png"
import search from "../../assets/img/search_icon.png"
import cart from "../../assets/img/cart_icon.png"
import { Link, useNavigate, redirect } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react"
import UserSlice from "../../redux/UserSlice"
import CartSlice from "../../redux/CartSlice"
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    const users = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = users[0];

    const Logout = () => {

        dispatch(UserSlice.actions.deleteAll())
        dispatch(CartSlice.actions.deleteAll())
        navigate("/login")

    }
    useEffect(() => {
        console.log(user)

    }, [user])
    return (
        <div className="header">
            <div className="logo" onClick={() => navigate(`${user.role == 2 ? "/admin" : "/"}`)}>
                <img src={logo} />
            </div>
            {user ?
                (user.role == 1 ?
                    <>
                        <div className="link">
                            <Link to={"/"}>Trang chủ</Link>
                            <Link to={"/product"}>Sản phẩm</Link>

                            <NavDropdown title={`Xin chào, ${user.username}`} id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1" onClick={() => {
                                    navigate("/myorder")
                                }}>Đơn hàng của tôi </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2"
                                    onClick={() => {
                                        navigate("/profile")
                                    }}
                                >Thông tin của tôi </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3"
                                    onClick={() => { Logout() }}
                                >Đăng xuất</NavDropdown.Item>

                            </NavDropdown>
                        </div></> :

                    <>
                        <div className="link right">
                            <Link to={"/admin"}>Trang chủ</Link>

                            <NavDropdown title={`Xin chào, ${user.username}`} id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1" onClick={() => { Logout() }}>Đăng xuất</NavDropdown.Item>

                            </NavDropdown>
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

            {user?.role == 2 ?
                <></> :
                <div className="icon">
                    <span>
                        <img src={search} />
                    </span>
                    <span>
                        <img src={cart}
                            onClick={() => navigate("/cart")} />
                    </span>
                </div>
            }


        </div >
    )
}

export default Header