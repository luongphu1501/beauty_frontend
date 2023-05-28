import { useDispatch, useSelector } from "react-redux"
import UserDashboard from "./UserDashboard"
import { useState } from "react";
import UserSlice from "../../redux/UserSlice";
import { postUpdateUser } from "../../services/apiServices";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";

const ProfileUser = (props) => {
    const users = useSelector((state) => state.user.user)
    const dispatch = useDispatch();
    const user = users[0]

    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [gender, setGender] = useState(user.gender)
    const [dob, setDob] = useState(user.dob)
    const [address, setAddress] = useState(user.address)
    const navigate = useNavigate()

    const handleUpdate = async (event) => {
        event.preventDefault()
        const newUser = {
            username, phone, gender, dob, address
        }
        dispatch(UserSlice.actions.updateUser(newUser))
        const data = await postUpdateUser(newUser, user.id)
        console.log(data)
        toast.success(data.EM)
        navigate("/")
    }

    return (
        <div className="order_user">
            <div class="main">
                <UserDashboard />
                <div class="form_profile">
                    <h5>Tài khoản của tôi</h5>
                    <form>
                        <div>
                            <label>Tên</label>
                            <input type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email"
                                value={email}
                                disabled />
                        </div>
                        <div>
                            <label>Số điện thoại</label>
                            <input type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div class="gender">
                            <p>Giới tính:</p>
                            <div>
                                <input type="radio" name="gender" value="1" onChange={(e) => setGender(e.target.value)} />
                                <label>Nam</label>
                            </div>
                            <div>
                                <input type="radio" name="gender" value={"2"} onChange={(e) => setGender(e.target.value)} />
                                <label>Nữ</label>
                            </div>
                            <div>
                                <input type="radio" name="gender" value={"0"} onChange={(e) => setGender(+e.target.value)} />
                                <label>Khác</label>
                            </div>

                        </div>
                        <div>
                            <label>Ngày sinh</label>
                            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                        </div>
                        <div>
                            <label>Địa chỉ</label>
                            <textarea name="" id="" value={address} onChange={(e) => setAddress(e.target.value)} />

                        </div>
                        <button
                            onClick={(event) => handleUpdate(event)}
                        >Lưu</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileUser