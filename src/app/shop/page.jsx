
import React from 'react'
import Navbar from '../components/Navbar'
import banimg from "../../../public/Rectangle 1.png";
import logo from "../../../public/Meubel House_Logos-05.png";
import Image from 'next/image';
import InstagramSection from '../components/InstaSection';
import FilterInterface from '../components/Filter';
import Card from '../components/Card';
import c1 from "../../../public/Trenton modular sofa_3 1.png";
import c2 from "../../../public/Granite dining table with dining chair 1.png";
import c3 from "../../../public/Outdoor bar table and stool 1.png";
import c4 from "../../../public/Plain console with teak mirror 1.png";
import c5 from "../../../public/Grain coffee table 1.png";
import c6 from "../../../public/Kent coffee table 1.png";
import c7 from "../../../public/Round coffee table_color 2 1.png";
import c8 from "../../../public/Reclaimed teak coffee table 1.png";
import c9 from "../../../public/Plain console_ 1.png";
import c10 from "../../../public/Reclaimed teak Sideboard 1.png";
import c11 from "../../../public/SJP_0825  1.png";
import c12 from "../../../public/Bella chair and table 1.png";
import c13 from "../../../public/Granite square side table 2.png";
import c14 from "../../../public/Asgaard sofa 2.png";
import c15 from "../../../public/Maya sofa three seater 1.png";
import c16 from "../../../public/Outdoor sofa set 1.png";
import Features from '../components/Features';
import Footer from '../components/Footer';






const data = [
    {
        name: "Trenton modular sofa_3",
        image: c1,
        price: "25,000.00"
    },
    {
        name: "Granite dining table with dining chair",
        image: c2,
        price: "25,000.00"
    },
    {
        name: "Outdoor bar table and stool",
        image: c3,
        price: "25,000.00"
    },
    {
        name: "Plain console with teak mirror",
        image: c4,
        price: "25,000.00"
    },
    {
        name: "Grain coffee table",
        image: c5,
        price: "15,000.00"
    },
    {
        name: "Kent coffee table",
        image: c6,
        price: "225,000.00"
    },
    {
        name: "Round coffee table_color 2",
        image: c7,
        price: "251,000.00"
    },
    {
        name: "Reclaimed teak coffee table",
        image: c8,
        price: "25,200.00"
    },
    {
        name: "Plain console_",
        image: c9,
        price: "258,200.00"
    },
    {
        name: "Reclaimed teak Sideboard",
        image: c10,
        price: "20,000.00"
    },
    {
        name: "SJP_0825",
        image: c11,
        price: "200,000.00"
    },
    {
        name: "Bella chair and table",
        image: c12,
        price: "100,000.00"
    },
    {
        name: "Granite square side table",
        image: c13,
        price: "258,800.00"
    },
    {
        name: "Asgaard sofa",
        image: c14,
        price: "250,000.00"
    },
    {
        name: "Maya sofa three seater",
        image: c15,
        price: "115,000.00"
    },
    {
        name: "Outdoor sofa set",
        image: c16,
        price: "244,000.00"
    },
    ]

const Shop = () => {
  return (
    <>
    <Navbar bgcol={"#FFFFFF"}/>
    <InstagramSection img={banimg} fs={"48"} fw={"500"} lh={"70"} head={"Shop"} bc={"Shop"}/>
    <FilterInterface/>
    <section className="">
  <div className="container px-5 py-16 mx-auto">
  <Card data={data}/>
  </div>
  </section>

  <div className="flex justify-center gap-7 py-10">
      <button className="px-4 py-2 rounded-md bg-[#FBEBB5] font-[400] leading-[30px] text-black font-poppins text-[18px]">1</button>
      <button className="px-4 py-2 rounded-md bg-[#FFF9E5] font-[400] leading-[30px] text-black font-poppins text-[18px]">2</button>
      <button className="px-4 py-2 rounded-md bg-[#FFF9E5] font-[400] leading-[30px] text-black font-poppins text-[18px]">3</button>
      <button className="font-[400] leading-[30px] text-black font-poppins text-[18px] px-4 py-2 rounded-md bg-[#FFF9E5] hover:bg-gray-100">Next</button>
    </div>

    <Features/>
    <Footer/>
    </>
  )
}

export default Shop