'use client';

import Form from "@/components/Form";
import Header from "@/components/Header"
import { useState } from "react";

const TEXT = "";

export default function Home() {

  const [data, setData] = useState(TEXT);

  const updateData = (value) => {
    setData(value);
  };

  return (
    <div className="h-screen">
      <Header data={data} updateData={updateData} />
      <Form data={data} updateData={updateData} />
    </div>
  )
};
