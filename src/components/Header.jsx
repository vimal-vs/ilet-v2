'use client';

import { useEffect, useState } from "react"
import logo from "../../public/logo.png"
import Image from "next/image"

export default function Header({ data, updateData }) {

    const [showFileDropDown, setFileShowDropDown] = useState(false);
    const [showEditDropDown, setEditShowDropDown] = useState(false);

    const [path, setPath] = useState();

    useEffect(() => {
        setPath(window.location.pathname);
    }, []);

    const [foundValue, setFoundValue] = useState("");

    const triggerFile = () => {
        document.querySelector("#file").click();
    };

    const readFile = async (e) => {
        e.preventDefault();
        const reader = new FileReader()
        reader.onload = async (e) => {
            const value = (e.target.result);
            updateData(value);
        };
        reader.readAsText(e.target.files[0]);
    };

    const saveFile = () => {
        const text = data;
        if (text === "") return alert("Cannot download empty data!");
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "ilet-data.txt";
        link.click();
    };

    const findData = () => {
        const value = prompt("Enter a word to Find");
        if (value) {
            alert(`Number of occurences: ${data.split(value).length - 1}`);
            setFoundValue(value);
        }
    };

    const replaceData = () => {
        if (foundValue) {
            const value = prompt(`Enter a word to replace  '${foundValue}'`);
            if (value) {
                updateData(data.replaceAll(foundValue, value));
                setFoundValue("");
            }
        }
        else {
            alert("First find a value to replace!");
        }
    };

    const hoverEffect = "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-300 to-cyan-500"

    return (
        <nav className="flex items-center md:px-8 justify-center md:justify-between bg-slate-700">
            <ul className="flex text-white gap-12 py-3 md:py-1 font-medium">
                {path === "/" &&
                    <>
                        <li className={`cursor-pointer ${hoverEffect}`}
                            onClick={() => { showFileDropDown ? setFileShowDropDown(false) : setFileShowDropDown(true); }}
                        >
                            <div>File</div>
                            <ul className={`${showFileDropDown ? "flex" : "hidden"} flex-col items-center gap-4 -translate-x-6 md:translate-x-0 top-12 md:top-14 md:left-1 absolute bg-slate-700 px-4 py-2`}>
                                <li className="text-white"><button onClick={triggerFile}>Open</button></li>
                                <input type="file" id="file" onChange={e => readFile(e)} className="file:hidden hidden" />
                                <li className="text-white"><button onClick={saveFile}>Save</button></li>
                            </ul>
                        </li>
                        <li className={`cursor-pointer ${hoverEffect}`}
                            onClick={() => { showEditDropDown ? setEditShowDropDown(false) : setEditShowDropDown(true); }}
                        >
                            <div>Edit</div>
                            <ul className={`${showEditDropDown ? "flex" : "hidden"} flex-col items-center gap-4 -translate-x-8 md:translate-x-0 top-12 md:top-14 md:left-[74px] absolute bg-slate-700 px-4 py-2`}>
                                <li className="text-white"><button onClick={findData}>Find</button></li>
                                <li className="text-white"><button onClick={replaceData}>Replace</button></li>
                            </ul>
                        </li>
                    </>
                }
                {path !== "/" &&
                    <li className={`cursor-pointer ${hoverEffect}`}><a href="/">Home</a></li>
                }
                <li className={`cursor-pointer ${hoverEffect}`}><a href="/spellcheck">Spell Check</a></li>
                <li className={`cursor-pointer ${hoverEffect}`}><a href="/stats">Stats</a></li>
            </ul>
            <a href="/"><Image src={logo} alt="img" height={60} className="hidden md:inline-block" /></a>
        </nav>
    )
}; 