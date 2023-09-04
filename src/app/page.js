'use client';

import Form from "@/components/Form";
import Header from "@/components/Header"
import { useState } from "react";

const TEXT = "";

export default function Home() {

  const [data, setData] = useState(TEXT);
  const [findReplaceData, setFindReplaceData] = useState([]);

  const updateData = (value) => {
    setData(value);
  };
  const updateFindReplaceData = (key, value) => {
    setFindReplaceData(prev => {
      return { ...prev, [key]: value }
    })
  };

  const entries = Object.entries(findReplaceData);

  return (
    <div className="h-screen">
      <Header data={data} updateData={updateData} updateFindReplaceData={updateFindReplaceData} />
      <Form data={data} updateData={updateData} updateFindReplaceData={updateFindReplaceData} />
      <div className="flex flex-col justify-center items-center py-4">
        {entries.length > 0 &&
          <div className="flex flex-col gap-4">
            <span className="self-start text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Changes made :</span>
            {entries.map(([key, val] = entry) => {
              return (
                <div key={val} className="w-fit mx-auto">Replaced from <strong>{key}</strong> to <strong>{val}</strong></div>
              )
            }
            )}
          </div>
        }
      </div>
    </div>
  )
};
