import UserDashboard from "./UserDashboard"
import { BsSearch } from "react-icons/bs"
import ReactPaginate from "react-paginate"
import { useEffect, useState } from "react"

import { useSelector } from "react-redux"
import Item from "./Item"
import { getMyOrder } from "../../services/apiServices"

const OrderUser = (props) => {

    const [pageCount, setPageCount] = useState()
    const [listOrder, setListOrder] = useState([]);
    const users = useSelector((state) => state.user.user)
    const user = users[0]

    const getListOrder = async (limit, page) => {
        const res = await getMyOrder(limit, page, user.id);
        if (res) {
            setListOrder(res.data)
            setPageCount(res.total_page)
            console.log(res)
        }
    }



    useEffect(() => {
        getListOrder(4, 1)
    }, [])
    return (
        <div className="order_user">
            <div class="main">
                <UserDashboard />
                <div class="form_profile">
                    <div className="my-order">
                        <div className="search">
                            <BsSearch />
                            <input type="text" placeholder="Tìm kiếm" />
                        </div>
                        <h5>Đơn hàng</h5>
                        <table className="table table-striped" style={{
                            border: "1px solid gray",

                        }}>
                            <thead className='table-title'>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Tên khách hàng</th>
                                    <th scope="col">Tổng tiền </th>
                                    <th scope="col">Tình trạng </th>
                                    <th scope="col">Ngày tạo </th>
                                    <th scope="col">Chi tiết </th>
                                    <th scope="col" style={{ textAlign: "center" }}> Hủy đơn hàng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listOrder.map(item => {
                                    return <>
                                        <Item
                                            item={item}
                                            getListOrder={getListOrder}
                                        />
                                    </>
                                })}
                            </tbody>
                        </table>
                        <ReactPaginate
                            nextLabel="Next >"
                            pageRangeDisplayed={3}
                            onPageChange={(event) => {
                                getListOrder(4, event.selected + 1)
                            }}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            previousLabel="< Prev"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                            forcePage={0}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderUser