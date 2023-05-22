import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)

function ChartReveNue(props) {
    const months = props.months
    const revenues = props.revenues;
    const title = props.title

    return (
        <div className="App" style={{ width: '700px', height: '800px' }}>
            <Line data={{
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
                        showLine: true
                    }
                ]
            }}>Hello</Line>
        </div>
    );
}
export default ChartReveNue