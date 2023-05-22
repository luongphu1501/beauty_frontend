import "./Login.scss"
import { Link, useNavigate } from 'react-router-dom';
import layout from "../../assets/img/LayoutLogin.png"
import layout2 from "../../assets/img/layoutlogin2.png"
import { useState } from "react";
import { postLogin } from "../../services/apiServices";
import { toast } from "react-toastify";
import UserSlice from "../../redux/UserSlice";
import { useSelector, useDispatch } from 'react-redux'

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async (email, password) => {
        const res = await postLogin(email, password)
        const data = res.data
        console.log(res)
        if (+res.EC === 0) {
            const user = {
                id: data.id,
                username: data.username || "",
                phone: data.phone || "",
                address: data.address || "",
                role: data.role
            }
            toast.success(res.EM)
            dispatch(UserSlice.actions.userLogin(user))
            if (user.role == 1) {
                navigate("/")
            } else {
                navigate("/admin")
            }

        }
        else {
            toast.error(res.EM)
        }
    }
    return (
        <div className="login-container">
            <div className="container">
                <img src={layout} className="layout" />
                <h3>Đăng nhập</h3>
                <div className="input_field">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="text" id="email" value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="input_field">
                    <label htmlFor="password">
                        Mật khẩu
                    </label>
                    <input type="password" id="password" value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button className="btn" onClick={() => {
                    handleLogin(email, password)
                }}>
                    Đăng nhập
                </button>
                <div>
                    <div>
                        <span>Chưa có tài khoản </span>
                        <Link to={'/signup'} className="signup">Đăng kí</Link>
                    </div>
                </div>
                <img src={layout2} className="layout2" />
            </div>
        </div>
    )
}

export default Login