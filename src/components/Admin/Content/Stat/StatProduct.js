import { useEffect, useState } from "react"
import "./share_stat.scss"
import { getProductRenevue } from "../../../../services/apiServices"
import Excel from 'exceljs';
import { saveAs } from 'file-saver';
import { saveExcel } from "../../../../ultils/ExportReport";
import ChartProduct from "./ChartProduct";

const StatProduct = () => {
    const [dataStat, setDataStat] = useState([])
    const [year, setYear] = useState(2023)
    const [userdata, setUserdata] = useState([]);

    const getuserdata = async () => {

        const res = await getProductRenevue()
        const data = res.data;
        console.log(data);
        setUserdata(data);
    }


    const getData = async () => {
        const res = await getProductRenevue()
        console.log(res.data)
        setDataStat(res.data.sort((a, b) => b.product_revenue - a.product_revenue))
        setUserdata(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [year])
    return (
        <>
            <div className="revenue-content">
                <p>Thống kê doanh thu theo sản phẩm</p>
                <div className="date-input">
                    <div>
                        <label htmlFor="start">Chọn năm </label>
                        <select class="form-select" id="start" value={year} onChange={(e) => setYear(e.target.value)}>
                            <option value="2023" selected>2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016" >2016</option>
                        </select>
                    </div>

                </div>
                <div className="stat-content">
                    <div className="table-stat">
                        <p>Chi tiet</p>
                        <table className="table table-striped" style={{ border: "1px solid gray" }}>
                            <thead className='table-title'>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Sản phẩm</th>
                                    <th scope="col">Doanh thu</th>

                                </tr>
                            </thead>
                            <tbody>
                                {dataStat.map((item, index) => {
                                    return (
                                        <tr>
                                            <td scope="row">{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.product_renevue}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                        <div className="btn btn-secondary" onClick={() => {
                            saveExcel(userdata)
                        }}>Xuất báo cáo</div>
                    </div>

                    <div className="chart-stat">
                        <p>Bieu do</p>
                        {dataStat ? <ChartProduct
                            months={dataStat.map(item => item.name)}
                            revenues={dataStat.map(item => item.product_renevue)}
                            title={"Doanh thu sản phẩm"}
                        /> : <></>}

                    </div>
                </div>
            </div>


        </>
    )
}

export default StatProduct