"use client"
import dynamic from "next/dynamic";
import GeneratePdf from "../components/GeneratePDF";


const MyFormPage = () => {
  return (
    <div>
      <h1>My Form Page</h1>
      <GeneratePdf />
    </div>
  );
};

export default MyFormPage;