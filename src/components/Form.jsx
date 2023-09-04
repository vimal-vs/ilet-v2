'use client';

import { useEffect } from "react";

export default function Form({ data, updateData }) {

    const handleReset = () => {
        if (confirm("are you sure to reset all data?")) {
            updateData("");
            localStorage.setItem("text-area", "");
            location.reload();
        }
    };

    useEffect(() => {
        if (data) localStorage.setItem("text-area", data);
    }, [data]);

    useEffect(() => {
        if (data === "" && localStorage.getItem("text-area")) {
            updateData(localStorage.getItem("text-area"));
        }
    }, []);

    return (
        <div className="flex flex-col gap-4 md:gap-8 justify-center items-center h-[80vh]">
            <h1 className="px-4 text-2xl text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Indian language Editing Tool for Tamil</h1>
            <textarea
                className="border-2 border-slate-400 p-2 h-2/3 w-4/5 md:w-2/4"
                onChange={e => { updateData(e.target.value) }}
                value={data}
            />
            <button onClick={handleReset} className="border-2 bg-blue-500 hover:bg-blue-400 text-white font-medium text-xl py-1 px-4 rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-95 transition-all duration-300">Reset</button>
        </div>
    )
}
