import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="container mx-auto py-24 px-5 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Address Section */}
        <div className="w-full md:w-2/5 my-auto">
          <p className='font-[500] leading-[24px] text-[#9F9F9F] font-poppins text-[16px] '>400 University Drive Suite 200 Coral Gables,</p>
          <p className='font-[500] leading-[24px] text-[#9F9F9F] font-poppins text-[16px] '>FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/5 ">
          <h3 className="font-[500] leading-[24px] text-[#9F9F9F] font-poppins text-[16px] mb-7 ">Links</h3>
          <ul className="space-y-2">
            <li className=''><a href="#" className="hover:underline ">Home</a></li>
            <li className='pt-3'><a href="#" className="hover:underline">Shop</a></li>
            <li className='pt-3'><a href="#" className="hover:underline ">About</a></li>
            <li className='pt-3'><a href="#" className="hover:underline ">Contact</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="w-full md:w-1/5">
          <h3 className="font-[500] leading-[24px] text-[#9F9F9F] font-poppins text-[16px] mb-7">Help</h3>
          <ul className="space-y-2">
            <li className=''><a href="#" className="hover:underline">Payment Options</a></li>
            <li className='pt-3'><a href="#" className="hover:underline">Returns</a></li>
            <li className='pt-3'><a href="#" className="hover:underline">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="w-full md:w-1/3">
          <h3 className="font-[500] leading-[24px] text-[#9F9F9F] font-poppins text-[16px] mb-7">Newsletter</h3>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="px-1 py-2 w-full font-[400] leading-[20px] text-[#9F9F9F] font-poppins text-[15px]"
              style={{borderBottom: "1px solid black"}}
            />
            <button className="px-4 py-2 font-[500] font-poppins text-[14px] text-[black] leading-[20px]" 
              style={{borderBottom: "1px solid black"}}
            
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 px-12">
        <p className="px-2 font-[400] font-poppins text-[16px] text-[black] leading-[24px]">2022 Meubel House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
