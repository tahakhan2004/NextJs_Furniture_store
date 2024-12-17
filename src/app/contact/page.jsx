'use client'

import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import InstagramSection from '../components/InstaSection'
import banimg from "../../../public/Rectangle 1.png";
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
    <Navbar bgcol={"#FFFFFF"}/>
    <InstagramSection img={banimg} fs={"48"} fw={"500"} lh={"70"} head={"Contact"} bc={"Cart"}/>
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-poppins text-[35px] leading-[50px] font-[600] text-black mb-4">Get In Touch With Us</h1>
          <p className="font-poppins text-[16px] leading-[24px] font-[400] text-[#9F9F9F] max-w-2xl mx-auto">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <FaMapMarkerAlt className="mt-1" color='black' size={24} />
              <div>
                <h3 className="font-poppins text-[24px] leading-[36px] font-[500] text-black mb-2">Address</h3>
                <p className="font-poppins text-[16px] leading-[24px] font-[400] text-black">
                  236 5th SE Avenue, New <br/> York NY10000, United <br/> States
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaPhoneAlt className="mt-1" color='black' size={24} />
              <div>
                <h3 className="font-poppins text-[24px] leading-[36px] font-[500] text-black mb-2">Phone</h3>
                <p className="font-poppins text-[16px] leading-[24px] font-[400] text-black">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaClock className="mt-1" color='black' size={24} />
              <div>
                <h3 className="font-poppins text-[24px] leading-[36px] font-[500] text-black mb-2">Working Time</h3>
                <p className="font-poppins text-[16px] leading-[24px] font-[400] text-black">
                  Monday-Friday: 9:00 - <br/> 22:00
                  <br />
                  Saturday-Sunday: 9:00 - <br/> 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div className='flex flex-col'>
              <label 
             htmlFor="name"
                className="font-poppins text-[16px] leading-[24px] font-[500] text-black mb-2"
              >
                Your name
              </label>
              <input
                 id="name"
                 type="text"
                 placeholder="Your name"
                className="mt-2 w-full px-3 py-5 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                required
              />
            </div>

            <div className='flex flex-col'>
              <label 
       htmlFor="email"
                className="mt-4 font-poppins text-[16px] leading-[24px] font-[500] text-black mb-2"
              >
                              Email address

              </label>
              <input
                   id="email"
                   type="email"
                   placeholder="Email address"
                className="mt-2 w-full px-3 py-5 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                required
              />
            </div>

            <div className='flex flex-col'>
              <label 
     htmlFor="subject"
                className="mt-4 font-poppins text-[16px] leading-[24px] font-[500] text-black mb-2"
              >
                             Subject
              </label>
              <input
                    id="subject"
                    type="text"
                    placeholder="This is an optional"
                className="mt-2 w-full px-3 py-5 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                required
              />
            </div>


            <div className='flex flex-col'>
              <label 
   htmlFor="message"
                className="mt-4 font-poppins text-[16px] leading-[24px] font-[500] text-black mb-2"
              >
                             Message
              </label>
              <input
                  id="message"
                  type='text'
                  placeholder="Hi! I'd like to ask about"
                className="mt-2 w-full px-3 py-5 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                required
              />
            </div>

<div className='pt-4'></div>
              <button
                type="submit"
                className=" w-[60%] px-6 py-2 text-black font-poppins text-[20px] leading-[30px] font-[400]" style={{border: "1px solid black", borderRadius: "15px"}}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    
    <Features/>
    <Footer/>
    </>
  )
}
