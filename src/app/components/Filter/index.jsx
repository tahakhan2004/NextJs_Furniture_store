"use client"

import Image from 'next/image'
import { useState } from 'react'
import { FiFilter, FiGrid, FiList, FiChevronDown } from 'react-icons/fi'
import flogo from "../../../../public/system-uicons_filtering.png";

export default function FilterInterface() {
  const [showDropdown, setShowDropdown] = useState('')

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200 gap-4 sm:gap-0 bg-[#FAF4F4] px-16 py-5 mt-8">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
          <Image src={flogo} alt='filter'/>
          <span className="font-[400] font-poppins text-[18px] text-[black] leading-[30px]">Filter</span>
        </button>
        <div className="flex gap-1 ">
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <FiGrid size={20} />
            <span className="sr-only">Grid view</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <FiList size={20} />
            <span className="sr-only">List view</span>
          </button>
        </div>
        <span className="font-[400] font-poppins text-[15px] text-[black] leading-[22px]">
          Showing 1-16 of 32 results
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <button 
            className="flex items-center gap-2 text-sm border rounded-md px-3 py-1"
            onClick={() => setShowDropdown(showDropdown === 'show' ? '' : 'show')}
          >
            <span className='font-[400] font-poppins text-[16px] text-[black] leading-[30px]'>Show: 16</span>
            <FiChevronDown className="h-4 w-4" />
          </button>
          {showDropdown === 'show' && (
            <div className="absolute top-full mt-1 bg-white border rounded-md shadow-lg">
              {[8, 16, 32, 64].map((num) => (
                <button key={num} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  {num}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <button 
            className="flex items-center gap-2 text-sm border rounded-md px-3 py-1"
            onClick={() => setShowDropdown(showDropdown === 'sort' ? '' : 'sort')}
          >
            <span className='font-[400] font-poppins text-[16px] text-[black] leading-[30px]'>Sort by: Default</span>
            <FiChevronDown className="h-4 w-4" />
          </button>
          {showDropdown === 'sort' && (
            <div className="absolute top-full right-0 mt-1 bg-white border rounded-md shadow-lg">
              {['Default', 'Price: Low to High', 'Price: High to Low', 'Newest First'].map((option) => (
                <button key={option} className="block w-full text-left px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

