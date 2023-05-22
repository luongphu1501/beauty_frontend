import order_img from "../../../assets/img/order.png"
import stat_img from "../../../assets/img/stat.png"
import product_img from "../../../assets/img/product.png"
import customer_img from "../../../assets/img/customer.png"
import Content from "../Content"
import "./dasboard.scss"
const DashBoard = () => {
    return (
        <>
            <div className="dashboard-content">
                <div className="function-container">
                    <div>
                        <img src={product_img} />
                    </div>
                    <div>
                        <img src={order_img} />
                    </div>
                    <div>
                        <img src={stat_img} />
                    </div>
                    <div>
                        <img src={customer_img} />
                    </div>
                </div>
                <div className="dashboard-order">
                    <p>Đơn hàng mới</p>
                    <Content />
                </div>
            </div>
        </>
    )
}

export default DashBoard