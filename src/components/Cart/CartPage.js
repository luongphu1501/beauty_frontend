import "./cart.scss"

import coupon_img from "../../assets/img/coupon.png"
import { useSelector, useDispatch } from 'react-redux'
import CartSlice from "../../redux/CartSlice"
import CartItem from "./CartItem"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const CartPage = () => {
    const listProduct = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [discount, setDisCount] = useState(0)

    return (
        <div className="cart_page">
            <div class="main">
                <div class="title">
                    <p>Giỏ hàng</p>
                </div>
                {listProduct?.length > 0 ?
                    <>
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
                                <span>{listProduct.reduce((sum, item) => sum + item.price * item.quantity, 0) - discount}</span>
                            </div>
                            <div>
                                <span class="property">Khuyến mãi </span>
                                <span>0</span>
                            </div>
                            <div>
                                <span class="property">Tổng tiền </span>
                                <span>{listProduct.reduce((sum, item) => sum + item.price * item.quantity, 0) - discount}</span>
                            </div>
                            <button
                                onClick={() => {
                                    navigate("/checkout")
                                }}
                            >Thanh toán </button>
                        </div>
                    </> :
                    <div>
                        <div
                            style={{
                                fontSize: "20px",
                                textAlign: "center"
                            }}
                        >Không có sản phẩm nào trong giỏ hàng.
                            <Link to={"/product"}
                                style={{
                                    textDecoration: "none",

                                }}
                            >   Chọn sản phẩm</Link>
                        </div>

                    </div>
                }
            </div>
        </div>
    )
}

export default CartPage