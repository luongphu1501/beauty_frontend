import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const OrderChart = (props) => {
    const name = props.name
    const title = props.title
    const success = props.success
    const cancel = props.cancel

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };



    const data = {
        labels: name,
        datasets: [
            {
                label: "Đơn hàng đã giao",
                data: success,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Đơn hàng đã hủy',
                data: cancel,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return <Line options={options} data={data} />;
}

export default OrderChart