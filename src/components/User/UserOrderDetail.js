import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { getOrderById } from '../../services/apiServices';


const UserOrderDetail = (props) => {
    const order = props.order
    const [detail, setDetail] = useState([])

    const getDetailOrder = async (id) => {
        const res = await getOrderById(id)
        if (res) {
            setDetail(res.data)
            console.log(res.data)
        }
    }

    useEffect(() => {
        getDetailOrder(+order.order_id)
    }, [])
    return (
        <>
            <Modal show={props.show} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Chi tiết đơn hàng
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row className="mb-3">
                            <Col xs={18} md={8}>
                                Tên khách hàng: <span>{order.username}</span>
                            </Col>

                        </Row>
                        <Row className="mb-3">
                            <Col xs={18} md={8}>
                                Ngày mua hàng <span>{new Date(order.order_date).toLocaleDateString()}</span>
                            </Col>

                        </Row>
                        <Row className="mb-3">
                            <Col xs={18} md={8}>
                                Tình trạng đơn hàng: <span>{
                                    order.status == 0 ? "Chờ xác nhận" :
                                        order.status == 1 ? "Đang giao hàng" :
                                            order.status == 2 ? "Đã giao hàng" :
                                                "Đã hủy"
                                }</span>
                            </Col>

                        </Row>
                        <Row className="mb-3">
                            <Col xs={18} md={8}>
                                Danh sách sản phẩm:
                            </Col>
                        </Row>
                        <Row style={{ fontWeight: "500" }} className='mb-2'>
                            <Col xs={6} md={4}>
                                Tên sản phẩm
                            </Col>
                            <Col xs={6} md={4}>
                                Số lượng
                            </Col>
                            <Col xs={6} md={4}>
                                Đơn giá
                            </Col>
                        </Row>
                        {detail.length > 0 ?
                            detail.map(detail => {
                                return (
                                    <>
                                        <Row>
                                            <Col xs={6} md={4}>
                                                {detail.name}
                                            </Col>
                                            <Col xs={6} md={4}>
                                                {detail.quantity}
                                            </Col>
                                            <Col xs={6} md={4}>
                                                {detail.unit_price}
                                            </Col>
                                        </Row>
                                    </>
                                )
                            })
                            :
                            <span>Không có sản phẩm</span>
                        }
                        <Row className="mt-3">
                            <Col xs={18} md={8}>
                                Tổng tiền: <span>${order.total}</span>
                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => props.setShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UserOrderDetail