import success from "../../assets/img/success.png"
import { Link, useNavigate } from "react-router-dom"
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { createOrder } from "../../services/apiServices";
import { toast } from "react-toastify"
import CartSlice from "../../redux/CartSlice";

const SuccessPage = () => {

    const listProduct = useSelector((state) => state.cart.cart)
    const users = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleCheckOut = async (listProduct, user) => {
        const data = {
            listProduct: listProduct,
            customer_id: user[0].id
        }
        dispatch(CartSlice.actions.deleteAll(data))

        toast.success("Đặt hàng thành công ")
        const result = await createOrder(data)

    }

    return (
        <div className="order-success">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6} className="text-center">
                        <div className="success-image-container">
                            <img src={success} alt="Success" className="success-image"
                                style={{ width: "100px", height: "100px", marginTop: "100px" }}
                            />
                            <div className="success-content">
                                <h1 className="text-success display-4">Payment Successful</h1>
                                <h2 className="text-secondary mt-4">Your order is in our system</h2>
                                <div className="btn btn-primary mt-4"
                                    onClick={() => {
                                        handleCheckOut(listProduct, users)
                                        navigate("/")
                                    }}
                                >
                                    Back to Home Page
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SuccessPage