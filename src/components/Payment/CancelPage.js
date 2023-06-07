import cancel from "../../assets/img/cancel.png"
import { Link } from "react-router-dom"
import { Container, Row, Col, Image } from 'react-bootstrap';

const CancelPage = () => {
    return (
        <div className="order-success">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6} className="text-center">
                        <div className="success-image-container">
                            <img src={cancel} alt="Success" className="cancel-image"
                                style={{ width: "100px", height: "100px", marginTop: "100px" }}
                            />
                            <div className="success-content">
                                <h1 className="text-success display-4">Something went wrong!!</h1>
                                <h2 className="text-secondary mt-4">Please retry after sometime</h2>
                                <Link to="/" className="btn btn-primary mt-4">
                                    Back to Home Page
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CancelPage