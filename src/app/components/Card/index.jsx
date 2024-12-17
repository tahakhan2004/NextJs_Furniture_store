import React from 'react'
import Image from 'next/image';
import Link from 'next/link';



const Card = ({data}) => {
  return (
   <>
   <Link href={"/productdetails"}>
    <div className="flex flex-wrap">
        {
            data.map((item, ind)=>{
                return(
                    <>
                    <div className="lg:w-1/4 md:w-1/2 p-3 w-full mb-5" key={ind}>
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={item.image}
          />
        </a>
        <div className="mt-4">
          
          <h2 className="font-[400] leading-[23px] text-black font-poppins text-[16px]">
            {item.name}
          </h2>
          <p className="font-[500] leading-[35px] text-black font-poppins text-[24px]">Rs {item.price}</p>
        </div>
      </div>

                    </>
                )
            })
        }
      
      
    </div>
    </Link>
   </>
  )
}

export default Card