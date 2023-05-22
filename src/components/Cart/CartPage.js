import "./cart.scss"

import coupon_img from "../../assets/img/coupon.png"
import { useSelector, useDispatch } from 'react-redux'
import CartSlice from "../../redux/CartSlice"
import CartItem from "./CartItem"
import { useNavigate } from "react-router-dom"

const CartPage = () => {
    const listProduct = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className="cart_page">
            <div class="main">
                <div class="title">
                    <p>Giỏ hàng</p>
                </div>
                <div class="border"></div>
                <div class="product">
                    <table>
                        <tr>
                            <th style={{ width: "700px" }}>Sản phẩm </th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                        </tr>
                        {listProduct.map(item => {
                            console.log(item)
                            return (
                                <CartItem item={item} />
                            )
                        })}
                    </table>
                </div>
                <div class="border"></div>
                <div class="discount">
                    <img src={coupon_img} />
                    <input type="text" placeholder="Mã khuyến mãi" />
                </div>
                <div class="border"></div>
                <div class="checkout">
                    <div>
                        <span class="property">Giá sản phẩm</span>
                        <span>150</span>
                    </div>
                    <div>
                        <span class="property">Khuyến mãi </span>
                        <span>0</span>
                    </div>
                    <div>
                        <span class="property">Tổng tiền </span>
                        <span>150</span>
                    </div>
                    <button
                        onClick={() => {
                            navigate("/checkout")
                        }}
                    >Thanh toán </button>
                </div>
            </div>
        </div>
    )
}

export default CartPage