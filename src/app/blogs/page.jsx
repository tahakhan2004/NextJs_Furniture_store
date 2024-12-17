'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import img1 from "../../../public/Rectangle 68.png"
import img2 from "../../../public/Rectangle 69.png"
import img3 from "../../../public/Rectangle 70.png"
import sm1 from "../../../public/dashicons_admin-users.png"
import sm2 from "../../../public/uis_calender.png"
import sm3 from "../../../public/ci_tag.png"
import rec1 from "../../../public/r1.png"
import rec2 from "../../../public/r2.png"
import rec3 from "../../../public/r3.png"
import rec4 from "../../../public/r4.png"
import rec5 from "../../../public/r5.png"
import Navbar from '../components/Navbar'
import InstagramSection from '../components/InstaSection'
import banimg from "../../../public/Rectangle 1.png";
import Features from '../components/Features'
import Footer from '../components/Footer'



export default function BlogLayout() {
  const categories = [
    { name: 'Crafts', count: 2 },
    { name: 'Design', count: 8 },
    { name: 'Handmade', count: 7 },
    { name: 'Interior', count: 5 },
    { name: 'Wood', count: 6 },
  ]

  const recentPosts = [
    {
      title: 'Going all-in with millennial design',
      date: '03 Aug 2022',
      image: rec1,
    },
    {
      title: 'Exploring new ways of decorating',
      date: '03 Aug 2022',
      image: rec2,
    },
    {
      title: 'Handmade pieces that took time to make',
      date: '03 Aug 2022',
      image: rec3,
    },
    {
      title: 'Modern home in Milan',
      date: '03 Aug 2022',
      image: rec4,
    },
  ]

  return (
    <>
     <Navbar bgcol={"#FFFFFF"}/>
     <InstagramSection img={banimg} fs={"48"} fw={"500"} lh={"70"} head={"Blog"} bc={"Blog"}/>
    <div className="container mx-auto px-4 py-24">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <article className="space-y-4">
            <Image
              src={img1}
              alt="Laptop on wooden desk"
              width={800}
              height={400}
              className="rounded-lg w-full"
            />
            <div className="space-y-2">
              <div className="pb-2 flex items-center gap-10 text-sm text-gray-500">
                <span className='flex items-center gap-2 font-poppins text-[16px] leading-[24px] font-[400] text-[#9F9F9F]'><Image src={sm1} alt='admin' width={20}/> Admin</span>
                <span className='flex items-center gap-2 font-poppins text-[16px] leading-[24px] font-[400] text-[#9F9F9F]'><Image src={sm2} alt='calender' width={20}/> 14 Oct 2022</span>
                <span className='flex items-center gap-2 font-poppins text-[16px] leading-[24px] font-[400] text-[#9F9F9F]'><Image src={sm3} alt='tag' width={20}/> Wood</span>
              </div>
              <h2 className="pb-1 font-poppins text-[30px] leading-[45px] font-[500] text-black">
                <Link href="#" className=" hover:text-gray-600">
                  Going all-in with millennial design
                </Link>
              </h2>
              <p className="pb-4 font-poppins text-[15px] leading-[22px] font-[400] text-[#9F9F9F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
              </p>
              <Link 
                href="#" 
                className=" inline-block font-poppins text-[16px] leading-[24px] font-[400] text-black border-b border-black pb-2"
              >
                Read more
              </Link>
            </div>
          </article>

          <article className="space-y-4">
            <Image
              src={img2}
              alt="Laptop on wooden desk"
              width={800}
              height={400}
              className="rounded-lg w-full"
            />
            <div className="space-y-2">
              <div className="pb-2 flex items-center gap-10 text-sm text-gray-500">
                <span className='flex items-center gap-2 font-poppins text-[16px] leading-[24px] font-[400] text-[#9F9F9F]'><Image src={sm1} alt='admin' width={20}/> Admin</span>
                <span className='flex items-center gap-2 font-poppins text-[16px] leading-[24px] font-[400] text-[#9F9F9F]'><Image src={sm2} alt='calender' width={20}/> 14 Oct 2022</span>
                <span className='flex items-center gap-2 font-poppins text-[16px] leading-[24px] font-[400] text-[#9F9F9F]'><Image src={sm3} alt='tag' width={20}/> Handmade</span>
              </div>
              <h2 className="pb-1 font-poppins text-[30px] leading-[45px] font-[500] text-black">
                <Link href="#" className=" hover:text-gray-600">
                Exploring new ways of decorating
                </Link>
              </h2>
              <p className="pb-4 font-poppins text-[15px] leading-[22px] font-[400] text-[#9F9F9F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
              </p>
              <Link 
                href="#" 
                className=" inline-block font-poppins text-[16px] leading-[24px] font-[400] text-black border-b border-black pb-2"
              >
                Read more
              </Link>
            </div>
          </article>

          <article className="space-y-4">
            <Image
              src={img3}
              alt="Laptop on wooden desk"
              width={800}
              height={400}
              className="rounded-lg w-full"
            />
            <div className="space-y-2">
              <div className="pb-2 flex items-center gap-10 text-sm text-gray-500">
                <span className='flex items-center gap-2 font-poppins text-[16px] leading-[24px] font-[400] text-[#9F9F9F]'><Image src={sm1} alt='admin' width={20}/> Admin</span>
                <span className='flex items-center gap-2 font-poppins text-[16px] leading-[24px] font-[400] text-[#9F9F9F]'><Image src={sm2} alt='calender' width={20}/> 14 Oct 2022</span>
                <span className='flex items-center gap-2 font-poppins text-[16px] leading-[24px] font-[400] text-[#9F9F9F]'><Image src={sm3} alt='tag' width={20}/> Wood</span>
              </div>
              <h2 className="pb-1 font-poppins text-[30px] leading-[45px] font-[500] text-black">
                <Link href="#" className=" hover:text-gray-600">
                Handmade pieces that took time to make                </Link>
              </h2>
              <p className="pb-4 font-poppins text-[15px] leading-[22px] font-[400] text-[#9F9F9F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
              </p>
              <Link 
                href="#" 
                className=" inline-block font-poppins text-[16px] leading-[24px] font-[400] text-black border-b border-black pb-2"
              >
                Read more
              </Link>
            </div>
          </article>
        </div>

        <div className="space-y-8 w-[85%] ms-auto">
          <div className="relative">
            <input
              type="search"
              className="w-full px-6 py-2 text-black font-poppins text-[20px] leading-[30px] font-[400]" style={{border: "1px solid #9F9F9F", borderRadius: "10px"}}
            />
            <FaSearch className="absolute right-4 top-[14px] w-5 h-5 text-black" />
          </div>

          <div>
            <h3 className="text-black font-poppins text-[24px] leading-[36px] font-[500] mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name} className="flex justify-between items-center">
                  <Link href="#" className="pt-4 font-poppins text-[16px] leading-[24px] font-[400] text-[#9F9F9F]">
                    {category.name}
                  </Link>
                  <span className="font-poppins text-[16px] leading-[24px] font-[400] text-[#9F9F9F]">{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="pt-5 text-black font-poppins text-[24px] leading-[36px] font-[500] mb-4">Recent Posts</h3>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <Link 
                  key={post.title} 
                  href="#" 
                  className="flex gap-4 group"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="font-poppins text-[15px] leading-[20px] font-[400] text-black">
                      {post.title}
                    </h4>
                    <p className="mt-2 font-poppins text-[13px] leading-[17px] font-[400] text-[#9F9F9F]">{post.date}</p>
                  </div>
                </Link>
              ))}
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

