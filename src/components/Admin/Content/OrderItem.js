import { useState } from "react";
import { postUpdateOrder } from "../../../services/apiServices"
import { toast } from "react-toastify"
import DetailOrder from "./Stat/DetailOrder";

const OrderItem = (props) => {
    const { item } = props;
    const [isUpdate, setIsUpdate] = useState(false)
    const [role, setRole] = useState(item.status || 0)
    const [show, setShow] = useState(false)

    const updateOrder = async (id, role) => {
        console.log(id, +role)
        const res = await postUpdateOrder(id, +role)
        props.getListOrder(4, 1)
        toast.success(res.EM)

    }
    return (
        <>
            <tr>
                <td scope="row">{item.order_id}</td>
                <td>{item.username}</td>
                <td>{item.total}</td>
                {
                    isUpdate ?
                        <td>
                            <select class="form-select" id="start" onChange={(e) => setRole(e.target.value)}
                                style={{ width: "150px" }}
                            >
                                <option value="-1" >Hủy đơn hàng</option>
                                <option value="0">Chưa xác nhận</option>
                                <option value="1">Đang giao hàng</option>
                                <option value="2">Đã giao hàng</option>

                            </select>
                        </td>
                        :
                        <td>
                            {
                                item.status == 0 ? "Chờ xác nhận" :
                                    item.status == 1 ? "Đang giao hàng" :
                                        item.status == 2 ? "Đã giao hàng" :
                                            "Đã hủy"
                            }
                        </td>
                }
                <td>{new Date(item.order_date).toLocaleDateString()}</td>
                <td><div className="btn btn-secondary"
                    onClick={() => setShow(true)}
                >
                    Xem
                </div></td>
                <td style={{ textAlign: "center" }}>
                    {isUpdate ?
                        <div className="btn btn-secondary"
                            onClick={() => {
                                setIsUpdate(!isUpdate)
                                updateOrder(item.order_id, role)
                            }}
                        >
                            Lưu
                        </div> :
                        <>
                            <div className="btn btn-secondary"
                                onClick={() => {
                                    setIsUpdate(!isUpdate)
                                }}
                            >
                                Cập nhật
                            </div></>

                    }
                </td>
            </tr>
            <DetailOrder
                show={show}
                setShow={setShow}
            />
        </>
    )
}

export default OrderItem;