'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlinePerson } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import Image from 'next/image';
import heart from "../../../../public/akar-icons_heart.png";
import cart from "../../../../public/ant-design_shopping-cart-outlined.png";
import Cart from '../Cart';
import { useRouter } from 'next/navigation';

const Navbar = ({bgcol}) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const router = useRouter()

  const handleAddToCart = () => {
    setIsCartOpen(true)
  }

  const handletoacc = ()=>{
    router.push("/account")
  }
  return (
    <>
    <header className={`text-gray-600 body-font bg-[${bgcol}]`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center p-5">
        <nav className="flex-1 flex justify-center gap-10 text-base items-center">
          <Link href={"/"} className="text-[#000000] text-[16px] font-poppins">
            Home
          </Link>
          <Link href={"/shop"} className="text-[#000000] text-[16px] font-poppins">
            Shop
          </Link>
          <Link href={"/"} className="text-[#000000] text-[16px] font-poppins">
            About
          </Link>
          <Link href={"/contact"} className="text-[#000000] text-[16px] font-poppins">
            Contact
          </Link>
        </nav>
        <div className="flex gap-6 mt-4 md:mt-0">
          <MdOutlinePerson size={30} color="black" onClick={handletoacc} className='cursor-pointer'/>
          <FiSearch size={28} color="black" />
          <Image src={heart} alt="heart" />
          <Image src={cart} alt="cart" className='cursor-pointer' onClick={handleAddToCart}/>
        </div>
      </div>
    </header>
    <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
};

export default Navbar;
