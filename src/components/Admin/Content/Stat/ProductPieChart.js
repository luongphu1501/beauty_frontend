import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



function ProductPieChart(props) {
    const names = props.names
    const sold = props.sold;
    const title = props.title


    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const color = names.map(() => getRandomColor());
    const borderColor = names.map(() => getRandomColor());
    return (
        <div className="App" style={{ width: '400px', height: '400px', marginLeft: "200px" }}>
            <Pie
                data={{
                    labels: names,
                    datasets: [
                        {
                            label: title,
                            data: sold,
                            backgroundColor: color,
                            borderColor: borderColor,
                            borderWidth: 1,
                        }
                    ]
                }}></Pie>
        </div >
    );
}
export default ProductPieChart