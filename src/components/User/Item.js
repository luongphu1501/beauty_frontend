import { useState } from "react";

import { toast } from "react-toastify"
import { DetailOrder } from "../Admin/Content/Stat/DetailOrder"
import UserOrderDetail from "./UserOrderDetail";
import { postCancelOrder } from "../../services/apiServices";

const Item = (props) => {
    const { item } = props;
    const [show, setShow] = useState(false)
    const handleCancel = async (id) => {
        const res = await postCancelOrder(id);
        props.getListOrder(4, 1);
        toast.success(res.EM)
    }

    return (
        <>
            <tr>
                <td scope="row">{item.order_id}</td>
                <td>{item.username}</td>
                <td>{item.total}</td>

                <td>
                    {
                        item.status == 0 ? "Chờ xác nhận" :
                            item.status == 1 ? "Đang giao hàng" :
                                item.status == 2 ? "Đã giao hàng" :
                                    "Đã hủy"
                    }
                </td>

                <td>{new Date(item.order_date).toLocaleDateString()}</td>
                <td><div className="btn btn-secondary"
                    onClick={() => setShow(true)}
                >
                    Xem
                </div></td>
                <td style={{ textAlign: "center" }}>
                    {(item && item.status == 0) ?
                        <div className="btn btn-secondary"
                            onClick={() => handleCancel(item.order_id)}
                        >
                            Hủy
                        </div>
                        :
                        <div className="btn btn-secondary " disabled
                            onClick={() => {
                                toast.error("Không thể hủy đơn hàng")
                            }}
                        >
                            Hủy
                        </div>
                    }
                </td>
            </tr>
            <UserOrderDetail
                order={item}
                show={show}
                setShow={setShow}
            />

        </>
    )
}

export default Item;