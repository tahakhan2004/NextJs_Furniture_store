import React from 'react'
import banimg from "../../../../public/Asgaard sofa 1.png";
import Image from 'next/image';

const BannerD = () => {
  return (
 <>
 <section className="text-gray-600 body-font bg-[#FBEBB5]">
  <div className="container mx-auto flex px-2 py-0 md:flex-row flex-col items-center">
  <div className="w-full">
      <Image
        className="object-cover object-center rounded w-full"
        alt="hero"
        src={banimg}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
      <p className="font-[500] font-poppins sm:text-[24px] text-[20px] mb-1 text-[black] leading-[35px] md:mt-0 ms-auto me-auto">
      New Arrivals
      </p>
        <p className='font-[700] font-poppins sm:text-[48px] text-[30px] mb-4 text-[black] leading-[70px] md:mt-0 ms-auto me-auto'>Asgaard sofa</p>
        <button className='p-4 w-[100%] md:w-[60%] font-[400] font-poppins text-[18px] text-[black] leading-[30px] ms-auto me-auto mt-2' style={{border: "1px solid black"}}>Order Now</button>
    </div>
    
  </div>
</section>

 </>
  )
}

export default BannerD