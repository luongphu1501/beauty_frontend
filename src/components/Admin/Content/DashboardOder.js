import Content from "../Content"
import "./share.scss"
import { BsSearch } from "react-icons/bs"
import ReactPaginate from "react-paginate"
import { useEffect, useState } from "react"
import { getOrderAdmin, postUpdateOrder } from "../../../services/apiServices"
import OrderItem from "./OrderItem"


const DashBoardOrder = () => {

    const [pageCount, setPageCount] = useState()
    const [listOrder, setListOrder] = useState([]);




    const getListOrder = async (limit, page) => {
        const res = await getOrderAdmin(limit, page);
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
        <div className="order-content">
            <div className="search">
                <BsSearch />
                <input type="text" placeholder="Tìm kiếm" />
            </div>
            <p>ĐƠn hàng</p>
            <table className="table table-striped" style={{ border: "1px solid gray" }}>
                <thead className='table-title'>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên khách hàng</th>
                        <th scope="col">Tổng tiền </th>
                        <th scope="col">Tình trạng </th>
                        <th scope="col">Ngày tạo </th>
                        <th scope="col">Chi tiết </th>
                        <th scope="col" style={{ textAlign: "center" }}>Cập nhật đơn hàng</th>
                    </tr>
                </thead>
                <tbody>
                    {listOrder.map(item => {
                        return <>
                            <OrderItem
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
    )
}

export default DashBoardOrder