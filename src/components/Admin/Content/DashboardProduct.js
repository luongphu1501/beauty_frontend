import { useEffect, useState } from "react"
import Content from "../Content"
import AddProduct from "./AddProduct"
import "./share.scss"
import { BsSearch } from "react-icons/bs"
import { deleteProduct, getCategory, getProductPaginate } from "../../../services/apiServices"
import ReactPaginate from 'react-paginate';
import { toast } from "react-toastify"
const DashBoardProduct = () => {
    const [listCategory, setListCategory] = useState([])
    const [pageCount, setPageCount] = useState()
    const [listProduct, setListProduct] = useState([]);
    const [current, setCurrent] = useState(0)


    const getListProduct = async (limit, page) => {
        const res = await getProductPaginate(limit, page, "");
        if (res) {
            setListProduct(res.data)
            setPageCount(res.total_page)
            console.log(res)
        }
    }

    const getListCategory = async () => {
        const res = await getCategory()
        if (res.data) {
            setListCategory(res.data)
            console.log(res.data)
        }
    }

    const handleDelete = async (id) => {
        const res = await deleteProduct(id)
        if (res && res.EM) {
            toast.success("Xóa sản phẩm thành công")
            setCurrent(0)
            getListProduct(4, 1)
        }
    }

    useEffect(() => {
        getListCategory()
        getListProduct(4, 1)
    }, [])
    return (
        <div className="product-content">

            <div className="modal-add">
                <AddProduct
                    listCategory={listCategory}
                    getListProduct={getListProduct}
                />
            </div>
            <table className="table table-striped" style={{ border: "1px solid gray" }}>
                <thead className='table-title'>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Hình ảnh </th>
                        <th scope="col">Giá tiền</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Xóa sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                    {listProduct.map(item => {
                        return (
                            <tr key={item.id}>
                                <td scope="row">{item.id}</td>
                                <td>{item.name}</td>
                                <td style={{ padding: "5px" }}><img className="product-img" src={item.image}
                                    style={{ width: "60px", height: "80px" }}
                                /></td>
                                <td>${item.price}</td>
                                <td>{item.description}</td>
                                <td>{item.quantity}</td>
                                <td><div className="btn btn-secondary"
                                    onClick={() => handleDelete(item.id)}
                                >Xóa</div>
                                </td>

                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>
            <ReactPaginate
                nextLabel="Next >"
                onPageChange={(event) => {
                    setCurrent(event.selected)
                    getListProduct(4, event.selected + 1)
                }}
                pageRangeDisplayed={3}
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
                forcePage={current}
            />
        </div>
    )
}

export default DashBoardProduct