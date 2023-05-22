import Content from "../Content"
import "./share.scss"
import { BsSearch } from "react-icons/bs"
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from "react";
import { getUserPageinate } from "../../../services/apiServices";
const DashBoardUser = () => {

    const [pageCount, setPageCount] = useState()
    const [listUser, setListUser] = useState([]);



    const getListUser = async (limit, page) => {
        const res = await getUserPageinate(limit, page);
        if (res) {
            setListUser(res.data)
            setPageCount(res.total_page)
            console.log(res)
        }
    }

    useEffect(() => {
        getListUser(4, 1)
    }, [])

    return (
        <>
            <div className="user-content">
                <div className="search">
                    <BsSearch />
                    <input type="text" placeholder="Tìm kiếm" />
                </div>
                <p>Người dùng </p>
                <table className="table table-striped" style={{ border: "1px solid gray" }}>
                    <thead className='table-title'>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Email</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Vai trò</th>
                            <th scope="col">Khóa tài khoản</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.address}</td>
                                        <td>Khách hàng</td>
                                        <td>
                                            <div className="btn btn-secondary"

                                            >Khóa tài khoản</div>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>

            </div>
            <ReactPaginate
                nextLabel="Next >"
                pageRangeDisplayed={3}
                onPageChange={(event) => {
                    getListUser(4, event.selected + 1)
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
        </>
    )
}

export default DashBoardUser