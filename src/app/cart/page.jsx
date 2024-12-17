'use client'

import Image from 'next/image'
import { AiFillDelete } from "react-icons/ai";
import imgg from "../../../public/Asgaard sofa 5.png"
import Navbar from '../components/Navbar';
import InstagramSection from '../components/InstaSection';
import Features from '../components/Features';
import Footer from '../components/Footer';
import banimg from "../../../public/Rectangle 1.png";
import Link from 'next/link';

export default function CartPage() {
  return (
    <>
    <Navbar bgcol={"#FFFFFF"}/>
    <InstagramSection img={banimg} fs={"48"} fw={"500"} lh={"70"} head={"Cart"} bc={"Cart"}/>
    <div className="container mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items Table */}
        <div className="lg:col-span-2">
          {/* Header for desktop */}
          <div className="bg-[#FFF9E5] rounded-lg p-4 mb-4 hidden md:block">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium">
              <div className='font-poppins text-[16px] leading-[24px] font-[500] text-black col-span-4'>Product</div>
              <div className='font-poppins text-[16px] leading-[24px] font-[500] text-black col-span-3'>Price</div>
              <div className='font-poppins text-[16px] leading-[24px] font-[500] text-black col-span-2'>Quantity</div>
              <div className='font-poppins text-[16px] leading-[24px] font-[500] text-black col-span-3'>Subtotal</div>
            </div>
          </div>

          {/* Header for mobile */}
          <div className="bg-[#FFF9E5] rounded-lg p-4 mb-4 md:hidden">
            <div className="grid grid-cols-4 text-center text-sm font-medium gap-2">
              <div className='font-poppins text-[14px] leading-[20px] font-[500] text-black'>Product</div>
              <div className='font-poppins text-[14px] leading-[20px] font-[500] text-black'>Price</div>
              <div className='font-poppins text-[14px] leading-[20px] font-[500] text-black'>Qty</div>
              <div className='font-poppins text-[14px] leading-[20px] font-[500] text-black'>Subtotal</div>
            </div>
          </div>

          {/* Product Row */}
          <div className="p-4">
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Product */}
              <div className="col-span-12 sm:col-span-6 md:col-span-4 flex items-center gap-4">
                <div className="relative w-20 h-20 bg-[#FBEBB5] rounded-lg">
                  <Image
                    src={imgg}
                    alt="Asgaard sofa"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <span className="font-poppins text-[16px] leading-[24px] font-[400] text-[#9F9F9F]">Asgaard sofa</span>
              </div>

              {/* Price */}
              <div className='font-poppins text-[16px] leading-[24px] font-[400] text-[#9F9F9F] col-span-6 sm:col-span-3'>
                Rs. 250,000.00
              </div>

              {/* Quantity */}
              <div className='col-span-6 sm:col-span-2'>
                <input
                  type="number"
                  min="1"
                  value="1"
                  className="w-12 px-3 py-2 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200"
                  style={{ borderRadius: "5px" }}
                  readOnly
                />
              </div>

              {/* Subtotal */}
              <div className="col-span-12 sm:col-span-3 flex items-center justify-between">
                <span className='font-poppins text-[16px] leading-[24px] font-[400] text-black'>Rs. 250,000.00</span>
                <button className="p-1 hover:bg-gray-100 rounded-full">
                  <AiFillDelete color='#FBEBB5' size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Totals */}
        <div>
          <div className="bg-[#FFF9E5] rounded-lg p-6">
            <h2 className="font-poppins text-[32px] leading-[45px] font-[600] text-black mb-6 text-center">Cart Totals</h2>

            <div className="space-y-4 pt-12">
              <div className="flex justify-between pb-4 border-gray-200">
                <span className="font-poppins text-[16px] leading-[24px] font-[500] text-black">Subtotal</span>
                <span className='font-poppins text-[16px] leading-[24px] font-[400] text-[#9F9F9F]'>Rs. 250,000.00</span>
              </div>

              <div className="flex justify-between pb-9">
                <span className="font-poppins text-[16px] leading-[24px] font-[500] text-black">Total</span>
                <span className="font-poppins text-[20px] leading-[30px] font-[500] text-[#B88E2F]">Rs. 250,000.00</span>
              </div>

              <div className='text-center pb-5'>
                <Link href={"/checkout"}>
                <button className="w-[60%] px-6 py-2 text-black font-poppins text-[20px] leading-[30px] font-[400]"
                  style={{ border: "1px solid black", borderRadius: "15px" }}>
                  Check Out
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <Features/>
    <Footer/>
    </>
  )
}
