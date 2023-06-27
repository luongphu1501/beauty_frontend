import { useEffect, useState } from "react"
import "./share_stat.scss"
import { getRevenue } from "../../../../services/apiServices"
import ChartReveNue from "./ChartRevenue"
import { CSVLink } from 'react-csv';
import Excel from 'exceljs';
import { saveAs } from 'file-saver';
import { saveExcel } from "../../../../ultils/ExportRevenue";

const Revenue = () => {

    const [dataStat, setDataStat] = useState([])
    const [year, setYear] = useState(2023)

    const [userdata, setUserdata] = useState([]);

    const workSheetName = 'Worksheet-1';
    const workbook = new Excel.Workbook();


    const getuserdata = async () => {

        const res = await getRevenue(year)
        const data = res.data.sort((a, b) => {
            return a.month - b.month
        });
        console.log(data);
        setUserdata(data);
    }

    const getData = async () => {
        const res = await getRevenue(year)
        console.log(res.data)
        const data = res.data
        setDataStat(data)
        setUserdata(data)
    }


    // useEffect(() => {

    //     getuserdata();
    // }, []);

    useEffect(() => {
        getData()
    }, [year])
    return (
        <div className="revenue-content">
            <p>Thống kê doanh thu </p>
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
                                <th scope="col">Tháng bán hàng</th>
                                <th scope="col">Doanh số</th>

                            </tr>
                        </thead>
                        <tbody>
                            {dataStat.map((item, index) => {
                                return (
                                    <tr>
                                        <td scope="row">{index + 1}</td>
                                        <td>{item.month}</td>
                                        <td>{item.month_revenue}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                    <div className="btn btn-secondary" onClick={() => {
                        saveExcel(userdata, year)
                    }}>
                        Xuât báo cáo
                    </div>
                </div>

                <div className="chart-stat">
                    <p>Bieu do</p>
                    {dataStat ? <ChartReveNue
                        months={dataStat.map(item => item.month)}
                        revenues={dataStat.map(item => item.month_revenue)}
                        title="Biểu đồ doanh thu theo tháng"
                    /> : <></>}

                </div>
            </div>
        </div>
    )
}

export default Revenue