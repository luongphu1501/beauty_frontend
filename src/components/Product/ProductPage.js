import Category from "./Category"
import Product from "./Product"
import "./product.scss"
import { BsSearch } from "react-icons/bs"
import { getProductPaginate, getCategory, getSearchProduct, getProductByCategory } from "../../services/apiServices"
import { useEffect } from "react"
import { useState } from "react";
import ReactPaginate from 'react-paginate';

const ProductPage = () => {

    const [listCategory, setListCategory] = useState([])
    const [pageCount, setPageCount] = useState()
    const [listProduct, setListProduct] = useState([]);
    const [activeBtn, setActiveBtn] = useState("")
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState("")
    const [category_id, setCategoryID] = useState();

    const handleChangeCategory = (event) => {
        setCategoryID(event.target.value)
    }

    const getProductbyCategory = async (limit, page, category_id) => {
        const res = await getProductByCategory(limit, page, category_id);
        if (res) {
            setListProduct(res.data)
            setPageCount(res.total_page)
        }
    }

    const getListProduct = async (limit, page, order) => {
        const res = await getProductPaginate(limit, page, order);
        if (res) {
            setListProduct(res.data)
            setPageCount(res.total_page)
        }
    }

    const searchProduct = async (limit, page, product) => {
        const res = await getSearchProduct(limit, page, product);
        if (res) {
            setListProduct(res.data)
            setPageCount(res.total_page)
            setCurrentPage(0)
            setSearch("")
        }
    }

    const getListCategory = async () => {
        const res = await getCategory()
        if (res.data) {
            setListCategory([{ id: -1, name: "Tất cả" }, ...res.data])
        }
    }

    useEffect(() => {
        getProductbyCategory(4, 1, category_id)
    }, [category_id])

    useEffect(() => {
        getListProduct(4, 1, activeBtn)
        getListCategory()
    }, [])


    return (
        <div className="product_page">
            <div className="main">
                <div className="title">
                    <p>Trang chủ/ Sản phẩm</p>
                </div>
                <div className="content">
                    <div className="categorypr">
                        <h3>Danh mục</h3>
                        <Category listCategory={listCategory}
                            handleChangeCategory={handleChangeCategory}
                            category_id={category_id}
                        />
                    </div>
                    <div className="product">
                        <div className="select-option">
                            <p>Sắp xếp theo</p>
                            <div className="option">
                                <div className={`btn btn-light ${activeBtn === "" ? "active" : ""}`}
                                    onClick={() => {
                                        setCurrentPage(0)
                                        setActiveBtn("")
                                        getListProduct(4, 1, activeBtn)
                                    }}
                                >Tất cả</div>
                                <div className={`btn btn-light ${activeBtn === "name" ? "active" : ""}`}
                                    onClick={() => {
                                        setCurrentPage(0)
                                        setActiveBtn("name")
                                        getListProduct(4, 1, "name")
                                    }}
                                >Tên</div>
                                <div className={`btn btn-light ${activeBtn === "sold" ? "active" : ""}`}
                                    onClick={() => {
                                        setCurrentPage(0)
                                        setActiveBtn("sold")
                                        getListProduct(4, 1, "sold")
                                    }}
                                >Bán chạy</div>
                                <div className={`btn btn-light ${activeBtn === "low-price" ? "active" : ""}`}
                                    onClick={() => {
                                        setCurrentPage(0)
                                        setActiveBtn("low-price")
                                        getListProduct(4, 1, "low-price")
                                    }}
                                >Giá thấp</div>
                                <div className={`btn btn-light ${activeBtn === "high-price" ? "active" : ""}`}
                                    onClick={() => {
                                        setCurrentPage(0)
                                        setActiveBtn("high-price")
                                        getListProduct(4, 1, "high-price")
                                    }}
                                >Giá cao</div>
                            </div>
                            <div className="search">
                                <BsSearch />
                                <input type="text" placeholder="Tìm kiếm" value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter")
                                            searchProduct(4, 1, search)
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="list-product">
                                <Product
                                    listProduct={listProduct}
                                />
                                <div style={{
                                    position: "fixed",
                                    bottom: '80px',
                                    right: '200px'
                                }}>
                                    <ReactPaginate
                                        nextLabel="Next >"
                                        pageRangeDisplayed={3}
                                        onPageChange={(event) => {
                                            setCurrentPage(currentPage + 1)
                                            getListProduct(4, event.selected + 1, activeBtn)
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
                                        forcePage={currentPage}

                                    />
                                </div>
                            </div >

                        </div>

                        <div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductPage