import "./productdetail.scss"
import product_img from "../../assets/img/product_img.png"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProductById } from "../../services/apiServices"
import { useSelector, useDispatch } from 'react-redux'
import CartSlice from "../../redux/CartSlice"
import { toast } from "react-toastify";
const ProductDetailPage = () => {
    const url_infor = useParams();
    const id = url_infor.id;
    const [product, setProduct] = useState({});
    const [count, setCount] = useState(1);
    const carts = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getDetailProduct = async (id) => {
        const res = await getProductById(id);
        const data = res.data
        setProduct(data)

    }

    const handleChangeInput = (event) => {
        if (event.target.value < 0) {
            setCount(0);
        } else {
            setCount(event.target.value)
        }
    }

    const handleClickAdd = (id, name, quantity, price, image) => {
        const data = { id, name, quantity, price, image }
        console.log(data)
        dispatch(CartSlice.actions.addToCart(data))
    }

    useEffect(() => {
        getDetailProduct(id)
    }, [url_infor])

    useEffect(() => {

    }, [product])
    return (
        <div className="product-detail">
            <div class="main">
                {product ?
                    <>
                        <div class="title">
                            <p>Trang chủ/ Sản phẩm/{product.name}</p>
                        </div>
                        <div class="content">
                            <div class="product">
                                <div class="img-product">
                                    <div class="core_image">
                                        <img src={product.image} style={{ width: "150px", height: "200px" }} />
                                    </div>
                                    <div class="preview_image">
                                        <img src={product.image} alt="" />
                                        <img src={product.image} alt="" />
                                        <img src={product.image} alt="" />
                                        <img src={product.image} alt="" />
                                    </div>
                                </div>
                                <div class="infor-detail">
                                    <p>Chi tiết sản phẩm</p>
                                    <ul>
                                        <li>Màu son: </li>
                                        <li>Nhà sản xuất: </li>
                                        <li>Chất liệu: </li>
                                        <li>Độ tuổi sử dụng: </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="product-infor">
                                <p class="product-name">{product.name}</p>
                                <p class="rating">{Array(product.rating).fill().map(item => { return ("⭐") })}</p>
                                <p class="review">Số lượng: {product.quantity}</p>
                                <p class="product-code">Đã bán: {product.sold} </p>
                                <p class="product-price">${product.price}</p>
                                <div class="choose-number">
                                    <p>-</p>
                                    <input type="number" value={count}
                                        onChange={(event) => {
                                            handleChangeInput(event)
                                        }}
                                    />
                                    <p>+</p>
                                </div>
                                <div class="button">
                                    <button class="add btn"
                                        onClick={() => {
                                            handleClickAdd(product.id, product.name, count, product.price, product.image)
                                            toast.success("THêm vào giỏ hàng thành công")
                                        }}
                                    >Add to cart</button>
                                    <button class="buy btn">Buy</button>
                                </div>
                            </div>

                        </div>
                    </>
                    : <></>}
            </div>
        </div>
    )
}

export default ProductDetailPage