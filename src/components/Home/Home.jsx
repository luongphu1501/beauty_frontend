import "./Home.scss"
import banner from "../../assets/img/HomeBanner.png"
import HomeProduct from './HomeProduct'
import Category from './Category'
import { useEffect, useState } from "react"
import { getCategory, getProduct } from "../../services/apiServices"

const Home = () => {
    const [listProduct, setListProduct] = useState([]);
    const [listCategory, setListCategory] = useState([])

    const getListProduct = async () => {
        const res = await getProduct(5);
        setListProduct(res.data)
    }

    const getListCategory = async () => {
        const res = await getCategory()
        if (res.data) {
            setListCategory(res.data)
        }
    }



    useEffect(() => {
        getListProduct()
        getListCategory()
        console.log(listProduct)
    }, [])


    return (
        <div className="home">
            <div className="main">
                <div className="homeBanner">
                    <img src={banner} />
                </div>
                <div className="best-seller">
                    <h3>Sản phẩm bán chạy</h3>
                    <div className="list-product">
                        <div className="list-product">
                            <HomeProduct
                                listProduct={listProduct}
                            />
                        </div>
                    </div>
                </div>
                <div className="new-arriver">
                    <div className="title">
                        <p>NEW ARRIVER</p>
                    </div>
                    <div className="list-category">
                        <Category
                            listCategory={listCategory}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;