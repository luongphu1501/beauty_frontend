import { useSelector, useDispatch } from 'react-redux'
import "../Cart/cart.scss"
import CheckOutItem from './CheckOutItem'
import { createOrder, postCreatePayment } from '../../services/apiServices'
import { useNavigate, redirect } from "react-router-dom"
import CartSlice from '../../redux/CartSlice'
import { toast } from "react-toastify"
import Form from 'react-bootstrap/Form';
import { useState } from 'react'


const CheckOutPage = () => {
    const [discount, setDisCount] = useState(0)
    const [payment, setPayment] = useState("cod")

    const listProduct = useSelector((state) => state.cart.cart)
    const users = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const checkUser = (users) => {
        const user = users[0];
        if (user.address && user.username && user.phone) {
            return true
        } else {
            return false
        }
    }

    const handleCheckOut = async (listProduct, user) => {
        const data = {
            listProduct: listProduct,
            customer_id: user[0].id
        }
        dispatch(CartSlice.actions.deleteAll(data))

        toast.success("Đặt hàng thành công ")
        const result = await createOrder(data)
    }

    const handlePaymentVisa = async () => {
        const total = listProduct.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const url = await postCreatePayment(total)
        console.log(url)
        window.location.replace(url);
    }

    return (
        <div className="cart_page">
            <div class="main">
                <div class="customer" style={{ marginLeft: "60px" }}>
                    <h5>Thông tin khách hàng</h5>
                    <p>Tên khách hàng: <span>{users[0].username}</span></p>
                    <p>Số điện thoại: <span>{users[0].phone}</span></p>
                    <p>Địa chỉ: <span>{users[0].address}</span></p>
                </div>
                <div class="border"></div>
                <div class="product">
                    <table style={{ marginLeft: "60px" }}>
                        <tr>
                            <th style={{ width: "700px;" }}>Sản phẩm </th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                        </tr>
                        {listProduct.map(item => {
                            console.log(item)
                            return (
                                <CheckOutItem item={item} />
                            )
                        })}
                    </table>
                </div>
                <div class="border"></div>
                <div class="checkout">
                    <div>
                        <span class="property">Giá sản phẩm</span>
                        <span>{listProduct.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
                    </div>
                    <div>
                        <span class="property">Khuyến mãi </span>
                        <span>0</span>
                    </div>
                    <div>
                        <span class="property">Tổng tiền </span>
                        <span>{listProduct.reduce((sum, item) => sum + item.price * item.quantity, 0) - discount}</span>
                    </div>
                    <div>
                        <Form.Select aria-label="Default select example" size='lg' style={{ width: "300px" }}
                            onChange={(event) => setPayment(event.target.value)}
                        >
                            <option value="cod">Thanh toán khi nhận hàng </option>
                            <option value="visa">Thanh toán bằng thẻ Visa</option>
                        </Form.Select>
                    </div>
                    <button className='btn btn-primary'
                        onClick={() => {
                            if (checkUser(users)) {
                                if (payment === "cod") {
                                    handleCheckOut(listProduct, users)
                                    navigate("/")
                                } else if (payment === "visa") {
                                    handlePaymentVisa()
                                }
                            } else {
                                toast.error("Bạn cần cập nhật thông tin trước khi mua hàng");
                            }
                        }}
                    >Thanh toán </button>
                </div>
            </div>
        </div>
    )

}

export default CheckOutPage