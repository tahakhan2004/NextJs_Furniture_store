'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import InstagramSection from '../components/InstaSection'
import banimg from "../../../public/Rectangle 1.png";
import Features from '../components/Features'
import Footer from '../components/Footer'


export default function CheckoutForm() {
    const [paymentMethod, setPaymentMethod] = useState('bank-transfer')

    return (
        <>
        <Navbar bgcol={"#FFFFFF"}/>
        <InstagramSection img={banimg} fs={"48"} fw={"500"} lh={"70"} head={"Checkout"} bc={"Checkout"}/>
        <div className="container mx-auto px-4 py-20 ">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Billing Details Form */}
                    <div>
                        <h2 className="font-poppins text-[35px] leading-[50px] font-[600] text-black mb-6">Billing details</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className='flex flex-col'>
                                    <label htmlFor="firstName" className="font-poppins text-[16px] leading-[24px] font-[500] text-black"
                                    >First name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="mt-2 w-[80%] px-3 py-4 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="font-poppins text-[16px] leading-[24px] font-[500] text-black"
                                    >Last name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="mt-2 w-[80%] px-3 py-4 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                                        required
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="company" className="font-poppins text-[16px] leading-[24px] font-[500] text-black"
                                >
                                    Company name (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    className="mt-3 w-[85%] px-3 py-4 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="country" className="font-poppins text-[16px] leading-[24px] font-[500] text-black mb-3"
                                >Country / Region</label>
                                <select
                                    id="country"
                                    className="w-[85%] px-3 py-4 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                                    required
                                >
                                    <option value="">Select a country</option>
                                    <option value="IN">India</option>
                                    {/* Add more countries as needed */}
                                </select>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="street" className="font-poppins text-[16px] leading-[24px] font-[500] text-black mb-3"
                                >Street address</label>
                                <input
                                    type="text"
                                    id="street"
                                    className="w-[85%] px-3 py-4 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                                    required
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="city" className="font-poppins text-[16px] leading-[24px] font-[500] text-black mb-3"
                                >Town / City</label>
                                <input
                                    type="text"
                                    id="city"
                                    className="w-[85%] px-3 py-4 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                                    required
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="province" className="font-poppins text-[16px] leading-[24px] font-[500] text-black mb-3"
                                >Province</label>
                                <select
                                    id="province"
                                    className="w-[85%] px-3 py-4 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                                    required
                                >
                                    <option value="">Select a province</option>
                                    <option value="MH">Maharashtra</option>
                                    {/* Add more provinces as needed */}
                                </select>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="zip" className="font-poppins text-[16px] leading-[24px] font-[500] text-black mb-3"
                                >ZIP code</label>
                                <input
                                    type="text"
                                    id="zip"
                                    className="w-[85%] px-3 py-4 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                                    required
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="phone" className="font-poppins text-[16px] leading-[24px] font-[500] text-black mb-3"
                                >Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-[85%] px-3 py-4 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                                    required
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="email" className="font-poppins text-[16px] leading-[24px] font-[500] text-black mb-3"
                                >Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-[85%] px-3 py-4 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                                    required
                                />
                            </div>

                            <div className='flex flex-col'>
                                {/* <label htmlFor="notes" className="font-poppins text-[16px] leading-[24px] font-[500] text-black mb-3"
                                >Additional information</label> */}
                                <input
                                    type="text"
                                    id="addnotes"
                                    placeholder='Additional Information'
                                    className="mt-6 w-[85%] px-3 py-4 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                                    required
                                />
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div>
                        <div className=" p-6 rounded-lg">
                            <div className="space-y-4">
                                <div className="flex justify-between pb-4 ">
                                    <span className="text-[24px] leading-[36px] font-poppins text-black font-[500]">Product</span>
                                    <span className="text-[24px] leading-[36px] font-poppins text-black font-[500]">Subtotal</span>
                                </div>

                                <div className="flex justify-between ">
                                    <span className='text-[16px] leading-[24px] font-poppins text-[#9F9F9F] font-[400]  '>Asgaard sofa × 1</span>
                                    <span  className='text-[16px] leading-[24px] font-poppins text-black font-[300]'>Rs. 250,000.00</span>
                                </div>

                                <div className="flex justify-between pb-4 ">
                                    <span className='text-[16px] leading-[24px] font-poppins text-black font-[400]'>Subtotal</span>
                                    <span className='text-[16px] leading-[24px] font-poppins text-black font-[300]'>Rs. 250,000.00</span>
                                </div>

                                <div className="flex justify-between pb-4 border-b">
                                    <span className='text-[16px] leading-[24px] font-poppins text-black font-[400]'>Total</span>
                                    <span className="text-[24px] leading-[36px] font-poppins text-[#B88E2F] font-[700]">Rs. 250,000.00</span>
                                </div>

                                {/* Payment Methods */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            id="bank-transfer"
                                            name="payment"
                                            value="bank-transfer"
                                            checked={paymentMethod === 'bank-transfer'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="w-4 h-4"
                                        />
                                        <label htmlFor="bank-transfer" className="font-medium">
                                            Direct Bank Transfer
                                        </label>
                                    </div>

                                    {paymentMethod === 'bank-transfer' && (
                                        <p className="text-[16px] leading-[24px] font-poppins text-[#9F9F9F] font-[300]">
                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                            <div className="flex items-center gap-2 mt-3">
                                        <input
                                            type="radio"
                                            id="bank-transfer"
                                            name="payment"
                                            value="bank-transfer"
                                            checked={false}
                                            className="w-4 h-4"
                                        />
                                        <label htmlFor="bank-transfer" className="font-medium">
                                            Direct Bank Transfer
                                        </label>
                                    </div>

                                    <div className="flex items-center gap-2 mt-3">
                                        <input
                                            type="radio"
                                            id="bank-transfer"
                                            name="payment"
                                            value="bank-transfer"
                                            checked={false}
                                            className="w-4 h-4"
                                        />
                                        <label htmlFor="bank-transfer" className="font-medium">
                                        Cash On Delivery
                                        </label>
                                    </div>
                                        </p>
                                    )}
                                </div>

                                <div className="text-[16px] leading-[24px] font-poppins text-black font-[300]">
                                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                                    <span className='font-[600]'>
                                        privacy policy
                                        </span>
                                   
                                    .
                                </div>
<div className='text-center'>
                                <button
                                    type="submit"
                                    className="mt-5 w-[60%] px-6 py-2 text-black font-poppins text-[20px] leading-[30px] font-[400]" style={{border: "1px solid black", borderRadius: "15px"}}
                                >
                                    Place order
                                </button>
                                </div>
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

