import React from 'react'
import t1 from "../../../../public/Granite square side table 1.png";
import t2 from "../../../../public/Cloud sofa three seater + ottoman_3 1.png";

import Image from 'next/image';

const TwoCardcmp = () => {
  return (
<>
<section className="text-gray-600 body-font bg-[#FAF4F4]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg md:h-96 h-52 overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-auto w-full"
            src={t1}
          />
        </div>
        <h2 className="leading-[54px] font-[500] text-black font-poppins text-[25px] sm:text-[36px]">
        Side table
        </h2>
        <p className="font-[500] leading-[35px] text-black text-[17px] font-poppins sm:text-[22px] underline">
        View More
        </p>
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-lg md:h-96 h-52 overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-auto w-full"
            src={t2}
          />
        </div>
        <h2 className="leading-[54px] font-[500] text-black font-poppins text-[25px] sm:text-[36px]">
        Side table
        </h2>
        <p className="font-[500] leading-[35px] text-black text-[17px] font-poppins sm:text-[22px] underline">
        View More
        </p>
      </div>
    </div>
  </div>
</section>

</>  )
}

export default TwoCardcmp