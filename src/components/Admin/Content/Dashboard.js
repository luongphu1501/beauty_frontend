import { BsCurrencyDollar, BsCartDash, BsGift } from "react-icons/bs"
import { FaRegUser } from "react-icons/fa"
import Content from "../Content"
import "./dasboard.scss"
import ChartRevenue from "./ChartDashboard/ChartRevenue"
import ProductChart from "./ChartDashboard/ProductChart"
import OrderChart from "./ChartDashboard/OrderChart"
import { useEffect, useState } from "react"
import { getDataChart, getDataDashboard } from "../../../services/apiServices"

const DashBoard = () => {
    const [data, setData] = useState();
    const [dataChart, setDataChart] = useState();
    const getData = async () => {
        const res = await getDataDashboard();
        setData(res)
    }

    const getDataForChart = async () => {
        const res = await getDataChart();
        setDataChart(res)
    }

    setTimeout(() => {
        getData()
        getDataChart()
    }, 30 * 1000)

    useEffect(() => {
        getData();
        getDataForChart();
    }, [])
    return (
        <>
            <div className="dashboard-content">
                <div className="function-container">
                    <div className="dashboard-card">
                        <div className="card-content">
                            <h4>Đơn hàng</h4>
                            <p>{data?.total_order}</p>
                        </div>
                        <div className="card-icon">
                            <BsCartDash />
                        </div>
                    </div>
                    <div className="dashboard-card">
                        <div className="card-content">
                            <h4>Doanh thu</h4>
                            <p>{data?.total_revenue}</p>
                        </div>
                        <div className="card-icon">
                            <BsCurrencyDollar />
                        </div>
                    </div>
                    <div className="dashboard-card">
                        <div className="card-content">
                            <h4>Sản phẩm</h4>
                            <p>{data?.total_product}</p>
                        </div>
                        <div className="card-icon">
                            <BsGift />
                        </div>
                    </div>
                    <div className="dashboard-card">
                        <div className="card-content">
                            <h4>Người dùng</h4>
                            <p>{data?.total_user}</p>
                        </div>
                        <div className="card-icon">
                            <FaRegUser />
                        </div>
                    </div>
                </div>
                <div className="dashboard-order">
                    <p>Đơn hàng mới</p>
                    <Content
                        listOrder={data?.listOrder}
                    />
                    <div className="dashboard-chart">
                        <div className="chart-revenue">
                            Biểu đồ doanh thu sản phẩm hôm qua và nay (cột)
                            <ChartRevenue
                                name={dataChart?.StatProduct.map(item => item.name)}
                                product_renevue={dataChart?.StatProduct.map(item => item.product_renevue)}
                            />
                        </div>
                        <div className="chart-product">
                            Biểu đồ doanh số sản phẩm
                            {
                                dataChart ?
                                    <ProductChart
                                        name={dataChart.StatProduct.map(item => item.name)}
                                        sold={dataChart.StatProduct.map(item => item.total_sell)}
                                        title="Biểu đồ tỷ lệ doanh số bán các sản phẩm trong ngày"
                                    /> : <></>
                            }
                        </div>
                        <div className="chart-order">
                            {
                                dataChart ?
                                    <OrderChart
                                        name={dataChart.OrderSuccess.map(item => new Date(item.order_date).toLocaleDateString())}
                                        cancel={dataChart.OrderSuccess.map(item => item.status1)}
                                        success={dataChart.OrderSuccess.map(item => item.status2)}
                                        title="Biểu đồ đơn hàng trong 7 ngày qua"
                                    /> : <></>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard