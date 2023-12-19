import React, { useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Button, Grid } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);
/*
export const options = {
    maintainAspectRatio: false, // Tắt tỷ lệ giữ nguyên
    plugins: {
        datalabels: {
            formatter: (value, context) => {
                return ' (' + context.dataset.data[context.dataIndex] + '%)';
            },
            color: '#333', // Màu chữ
            anchor: 'end',
            align: 'start',
        }
    }
};*/
const calculatePercentages = (data) => {
    const total = data.reduce((acc, value) => acc + value, 0);
    return data.map((value) => ((value / total) * 100).toFixed(2));
};
export default function PieChart({ label, data1 }) {
    const percentages = calculatePercentages(data1);
    const options = {
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                formatter: (value, context) => {
                    return ' (' + percentages[context.dataIndex] + '%)';
                },
                color: '#333',
                anchor: 'end',
                align: 'start',
            },
        },
    };
    const data = {
        labels: label ? label : ['Giày', 'Quần áo', 'Dụng cụ', 'Bóng', 'Phụ kiện', 'Sân bóng'],
        datasets: [
            {
                label: 'Doanh thu ',
                data: data1 ? data1 : [12, 19, 3, 5, 4, 30],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <Grid item xs={12}>
                <Pie data={data} width={500} height={500} options={options} plugins={[ChartDataLabels]} />
            </Grid>

        </div>)
}
