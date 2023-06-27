import Table from 'react-bootstrap/Table';
const Content = (props) => {

    return (
        <table className="table table-striped" style={{ border: "1px solid gray" }}>
            <thead className='table-title'>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Người mua hàng</th>
                    <th scope="col">Ngày tạo</th>
                    <th scope="col">Tổng tiền</th>
                    <th scope="col">trạng thái</th>
                </tr>
            </thead>
            <tbody>

                {props?.listOrder && props.listOrder.length > 0 &&
                    props.listOrder.map(item => {
                        return (
                            <tr>
                                <th scope="row">{item.order_id}</th>
                                <td>{item.username}</td>
                                <td>{new Date(item.order_date).toLocaleString()}</td>
                                <td>{item.total}</td>
                                <td>{item.status == 0 ? "Chờ xác nhận" :
                                    item.status == 1 ? "Đang giao hàng" :
                                        item.status == 2 ? "Đã giao hàng" :
                                            "Đã hủy"}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}



export default Content