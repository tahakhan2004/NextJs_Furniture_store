'use client'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation';
import { FaGreaterThan } from "react-icons/fa";

export default function InstagramSection({img, fw, fs, lh, flag, bc , head}) {
  const currentRouteName = usePathname();
  console.log(currentRouteName);
  
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={img}
        alt="Background"
        width={1920}
        height={400}
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Blue border at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 z-10"></div>

      {/* Content container */}
      <div className="relative z-20 mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className={`font-[${fw}] font-poppins sm:text-[${fs}px] text-[30px] mb-3 text-[black] leading-[${lh}px]`}>
          {head}
        </h2>
        {
          flag ? <p className="font-[400] font-poppins text-[19px] text-[black] leading-[30px]">
          Follow our store on Instagram
        </p> : null 
        }
       
        {
          flag ? <button className="mt-7 rounded-full bg-white px-8 py-3 font-[400] font-poppins text-[19px] text-[black] leading-[30px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-md" style={{boxShadow: "0px 20px 20px 0px #0000001A"}}>
          Follow Us
        </button> : null
        }

        {
          currentRouteName === "/" ? null : <p className="flex justify-center font-[500] font-poppins text-[16px] text-[black] leading-[24px]">
          Home <FaGreaterThan className='mt-1 ms-1 me-1' size={16}/> <span className='font-[400]'> {bc}</span>
        </p>
        }


      </div>
    </section>
  )
}


