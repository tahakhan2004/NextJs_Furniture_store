import React from 'react'
import banimg from "../../../../public/Rocket single seater 1.png";
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
 <>
 <section className="text-gray-600 body-font bg-[#FBEBB5]">
  <div className="container mx-auto flex px-2 md:px-32 py-0 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font font-[500] font-poppins sm:text-[60px] text-[30px] mb-4 text-[black] md:leading-[95px] mt-20 md:mt-0">
      Rocket single seater
      </h1>
      <div className="flex justify-center">
       <Link href={"/shop"}><p className='text-[17px] md:text-[23px] text-black font-poppins font-[500]'>Shop Now</p></Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
      <Image
        className="object-cover object-center rounded w-full"
        alt="hero"
        src={banimg}
      />
    </div>
  </div>
</section>

 </>
  )
}

export default Banner