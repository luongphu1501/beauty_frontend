import Category from "./Category"
import Product from "./Product"
import "./product.scss"
import { BsSearch } from "react-icons/bs"
import { getProductPaginate, getCategory } from "../../services/apiServices"
import { useEffect } from "react"
import { useState } from "react";
import ReactPaginate from 'react-paginate';

const ProductPage = () => {

    const [listCategory, setListCategory] = useState([])

    const [pageCount, setPageCount] = useState()
    const [listProduct, setListProduct] = useState([]);



    const getListProduct = async (limit, page) => {
        const res = await getProductPaginate(limit, page);
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
        }
    }

    useEffect(() => {
        getListProduct(4, 1)
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
                        <Category listCategory={listCategory} />
                    </div>
                    <div className="product">
                        <div className="select-option">
                            <p>Sắp xếp theo</p>
                            <div className="option">
                                <div className="active">Tất cả</div>
                                <div>Bán chạy</div>
                                <div>Giảm giá</div>
                                <div>Giá thấp</div>
                                <div>Giá cao</div>
                            </div>
                            <div className="search">
                                <BsSearch />
                                <input type="text" placeholder="Tìm kiếm" />
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
                                            getListProduct(4, event.selected + 1)
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