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

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Biểu đồ đường\nSo sánh doanh thu cửa hàng và sân bóng',
        },
    },
};


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


export default function LineChart({ label, data1, data2 }) {
    const labels = label ? label : ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Cửa hàng',
                data: data1 ? data1 : labels.map(() => Math.floor(Math.random() * 1000)),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Sân bóng',
                data: data2 ? data2 : labels.map(() => Math.floor(Math.random() * 1000)),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    const variable = window.innerWidth <= 768 ? 500 : 250;
    return <Line width={500} height={variable} options={options} data={data} />;
}
