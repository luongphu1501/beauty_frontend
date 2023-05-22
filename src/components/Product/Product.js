
import { BsCart } from "react-icons/bs"
import { Link } from 'react-router-dom';


const Product = (props) => {
    const { listProduct } = props;
    return (
        <>
            {listProduct.map(item => {
                return (
                    <div className="product-item">
                        <img src={item.image} />
                        <div className="info-product">
                            <Link to={`/product/${item.id}`} className="product-name">{item.name}</Link>
                            <p className="price-product">${item.price}</p>
                            <p className="rating">{Array(+item.rating).fill().map(item => { return ("⭐") })}</p>
                            <div className="cart-icon">
                                <BsCart />
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Product