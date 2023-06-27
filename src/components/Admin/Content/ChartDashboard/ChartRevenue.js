import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ChartRevenue = (props) => {

    const name = props.name;
    const product_renevue = props.product_renevue
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };


    const data = {
        labels: name,
        datasets: [
            {
                label: 'Doanh thu bán hàng hôm nay',
                data: product_renevue,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },

        ],
    }
    return <Bar options={options} data={data} />;
}

export default ChartRevenue