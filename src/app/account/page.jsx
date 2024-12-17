'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from "../components/Navbar";
import banimg from "../../../public/Rectangle 1.png";
import InstagramSection from '../components/InstaSection';
import Features from '../components/Features';
import Footer from '../components/Footer';


export default function AuthPage() {
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <>
    <Navbar bgcol={"#FFFFFF"}/>
    <InstagramSection img={banimg} fs={"48"} fw={"500"} lh={"70"} head={"My Account"} bc={"My Account"}/>
    
        <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Login Section */}
        <div>
          <h2 className="font-poppins text-[35px] leading-[50px] font-[600] text-black mb-8">Log In</h2>
          <form className="space-y-6">
            <div className='flex flex-col'>
              <label 
                htmlFor="login-email" 
                className="font-poppins text-[16px] leading-[24px] font-[500] text-black mb-2"
              >
                Username or email address
              </label>
              <input
                id="login-email"
                type="email"
                className="w-[60%] px-3 py-4 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                required
              />
            </div>

            <div className='flex flex-col'>
              <label 
                htmlFor="login-password" 
                className="font-poppins text-[16px] leading-[24px] font-[500] text-black mb-2"
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                className="w-[60%] px-3 py-4 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                id="remember-me"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded focus:ring-gray-200"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label 
                htmlFor="remember-me" 
                className="text-sm"
              >
                Remember me
              </label>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="w-[32%] px-6 py-2 text-black font-poppins text-[20px] leading-[30px] font-[400]" style={{border: "1px solid black", borderRadius: "15px"}}
              >
                Log In
              </button>
              <Link 
                href="/lost-password"
                className="font-poppins text-[16px] leading-[24px] font-[300] text-black"
              >
                Lost Your Password?
              </Link>
            </div>
          </form>
        </div>

        {/* Register Section */}
        <div>
          <h2 className="font-poppins text-[35px] leading-[50px] font-[600] text-black mb-8">Register</h2>
          <form className="space-y-6">
            <div className='flex flex-col'>
              <label 
                htmlFor="register-email" 
                className="font-poppins text-[16px] leading-[24px] font-[500] text-black mb-2"

              >
                Email address
              </label>
              <input
                id="register-email"
                type="email"
                className="w-[60%] px-3 py-4 border border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-200" style={{borderRadius: "10px"}}
                required
              />
            </div>

            <div className="font-poppins text-[16px] leading-[24px] font-[300] text-black"
            >
              <p>
                A link to set a new password will be sent to your email address.
              </p>
              <br/>
              <p>
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-[600]'>privacy policy</span>.
              </p>
            </div>

            <button
              type="submit"
              className="w-[35%] px-6 py-2 text-black font-poppins text-[20px] leading-[30px] font-[400]" style={{border: "1px solid black", borderRadius: "15px"}}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>

    <Features/>
    <Footer/>
    </>

  )
}

