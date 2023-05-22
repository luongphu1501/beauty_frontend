import "./Login.scss"
import { Link, useNavigate } from 'react-router-dom';
import layout from "../../assets/img/LayoutLogin.png"
import layout2 from "../../assets/img/layoutlogin2.png"
import { useState } from "react";
import { postSignup } from "../../services/apiServices";
import { toast } from "react-toastify"

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [checkedPassword, setCheckedPassword] = useState("");

    const handeSignup = async (email, password, checkedPassword) => {
        const data = await postSignup(email, password, checkedPassword)
        console.log(email, password, checkedPassword)
        console.log(data)
        if (+data.EC === 0) {
            toast.success(data.EM)
            navigate("/login")
        } else {
            toast.error(data.EM)
        }
    }
    return (
        <div className="login-container">
            <div className="container signup-container">
                <img src={layout} className="layout" />
                <h3>Đăng kí</h3>
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
                <div className="input_field">
                    <label htmlFor="check">
                        Xác nhận mật khẩu
                    </label>
                    <input type="password" id="check" value={checkedPassword}
                        onChange={(event) => setCheckedPassword(event.target.value)} />
                </div>
                <button className="btn" onClick={() => {
                    handeSignup(email, password, checkedPassword)
                }}>
                    Đăng ký
                </button>
                <div>
                    <div>
                        <span>Đã có tài khoản </span>
                        <Link to={'/signup'} className="signup">Đăng Nhập</Link>
                    </div>
                </div>
                <img src={layout2} className="layout2" />
            </div>
        </div>
    )
}

export default Signup