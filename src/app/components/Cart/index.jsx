'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MdClose } from 'react-icons/md'
import imgg from "../../../../public/Asgaard sofa 5.png"


const Cart = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
          onClick={onClose}
        />
      )}

      {/* Cart Panel */}
      <div className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b">
            <h2 className="text-[24px] leading-[36px] font-poppins text-black font-[600]    ">Shopping Cart</h2>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex gap-4 items-center">
              <div className="relative w-20 h-20 bg-[#FBEBB5] rounded-lg">
                <Image
                  src={imgg}
                  alt="Asgaard sofa"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="flex-1">
                <h3 className='text-[16px] leading-[24px] font-poppins text-black font-[400]'>Asgaard sofa</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className='text-[15px] leading-[22px] font-poppins text-black font-[300]'>1</span>
                  <span className='text-[15px] leading-[22px] font-poppins text-black font-[300]'>x</span>
                  <span className="text-[12px] leading-[18px] font-poppins text-[#B88E2F] font-[500]">Rs. 250,000.00</span>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <MdClose className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[16px] leading-[24px] font-poppins text-black font-[400]">Subtotal</span>
              <span className="text-[16px] leading-[24px] font-poppins text-[#B88E2F] font-[600]">Rs. 250,000.00</span>
            </div>
            <div className="grid gap-2">
              <button className="w-full px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
                View Cart
              </button>
              <button className="w-full px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart

