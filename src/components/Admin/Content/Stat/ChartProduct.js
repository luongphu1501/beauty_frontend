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

function ChartProduct(props) {
    const months = props.months
    const revenues = props.revenues;
    const title = props.title

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

    return (
        <div className="App" style={{ width: '700px', height: '800px' }}>
            <Bar
                options={options}
                data={{
                    labels: months,
                    datasets: [
                        {
                            label: title,
                            data: revenues,
                            borderColor: 'green',
                            tension: 0.4,
                            fill: true,
                            pointStyle: 'rect',
                            pointBorderColor: 'blue',
                            pointBackgroundColor: '#fff',
                            showLine: true,
                            backgroundColor: 'rgba(255, 99, 36, 0.5)',
                        }
                    ]
                }}></Bar>
        </div >
    );
}
export default ChartProduct