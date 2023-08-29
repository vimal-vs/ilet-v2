'use client';

import { useEffect, useState } from "react"
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

export default function Stats() {

    const [data, setData] = useState("");

    useEffect(() => {
        setData(localStorage.getItem("text-area"));
    }, []);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Statistics for the Input Data',
            },
        },
    };

    const labels = ['Total words', 'Unique Words'];
    var words = data.split(" ");
    const uniqueWords = [...new Set(words)]
    const wordsBar = [words.length, uniqueWords.length];

    const Graphdata = {
        labels,
        datasets: [
            {
                label: 'Total words (vs) Unique words',
                data: wordsBar,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <div className="flex justify-center items-center px-4 mt-6 h-full w-full">
            <Bar id="bar" options={options} data={Graphdata} />
        </div>
    )
}
