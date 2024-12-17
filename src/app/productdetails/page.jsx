"use client"
import Image from "next/image"
import { useState } from "react"
import { FaStar, FaMinus, FaPlus, FaFacebookF, FaLinkedinIn, FaTwitter, FaHeart } from 'react-icons/fa';
import img1 from "../../../public/Outdoor sofa set 2.png"
import img2 from "../../../public/Outdoor sofa set_2 1.png"
import img3 from "../../../public/Stuart sofa 1.png"
import img4 from "../../../public/Maya sofa three seater 1.png"
import img5 from "../../../public/Asgaard sofa 3.png"
import c1 from "../../../public/Trenton modular sofa_3 1.png";
import c2 from "../../../public/Granite dining table with dining chair 1.png";
import c3 from "../../../public/Outdoor bar table and stool 1.png";
import c4 from "../../../public/Plain console with teak mirror 1.png";
import Navbar from "../components/Navbar";
import ProductMoreDetails from "../components/productmoredet";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import { useRouter } from "next/navigation";



const data = [
  {
      name: "Trenton modular sofa_3",
      image: c1,
      price: "25,000.00"
  },
  {
      name: "Granite dining table with dining chair",
      image: c2,
      price: "25,000.00"
  },
  {
      name: "Outdoor bar table and stool",
      image: c3,
      price: "25,000.00"
  },
  {
      name: "Plain console with teak mirror",
      image: c4,
      price: "25,000.00"
  },
  ]

export default function ProductPage() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const router = useRouter()
  const handleAddToCart = () => {
    // setIsCartOpen(true)
    router.push("/cart")
  }
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("L")
  const [selectedColor, setSelectedColor] = useState("purple")

  const images = [
    {
      src: img1,
      alt: "Asgaard sofa front view"
    },
    {
      src: img2,
      alt: "Asgaard sofa side view"
    },
    {
      src: img3,
      alt: "Asgaard sofa detail view"
    },
    {
      src: img4,
      alt: "Asgaard sofa back view"
    }
  ]

  const sizes = ["L", "XL", "XS"]
  const colors = ["purple", "black", "beige"]

  return (
    <>
    <Navbar bgcol={"#FFFFFF"}/>
   
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border p-2 rounded-lg ${
                  selectedImage === index
                    ? "border-gray-500"
                    : "border-gray-200"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1 bg-[#FFF9E5] rounded-lg">
            <Image
              src={selectedImage === 0 ? img5 : images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="font-[400] leading-[60px] text-black font-poppins text-[40px]">Asgaard sofa</h1>
          <div className="font-[500] leading-[35px] text-[#9F9F9F] font-poppins text-[24px]">Rs. 250,000.00</div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <FaStar
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
              <FaStar
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                strokeWidth={0.5}
              />
            </div>
            <span className="text-sm text-gray-500">5 Customer Review</span>
          </div>

          {/* Description */}
          <p className="text-black font-poppins text-[14px] font-[400] ">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size Selection */}
          <div className="space-y-2">
            <div className="text-sm font-medium">Size</div>
            <div className="flex gap-4">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-lg border ${
                    selectedSize === size
                      ? "border-none bg-[#FBEBB5] text-black font-poppins text-[14px]"
                      : "border-gray-200 hover:border-gray-300 text-black font-poppins text-[14px]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="space-y-2">
            <div className="text-sm font-medium">Color</div>
            <div className="flex gap-4">
              {colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-gray-400"
                      : "border-transparent"
                  }`}
                  style={{
                    backgroundColor:
                      color === "beige"
                        ? "#CDBA7B"
                        : color === "purple"
                        ? "#816DFA"
                        : color
                  }}
                />
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex gap-4">
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-gray-50"
              >
                <FaMinus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-gray-50"
              >
                <FaPlus className="w-4 h-4" />
              </button>
            </div>
            <button className="bg-white w-1/3 text-black font-poppins text-[20px] font-[400] py-3 px-6" style={{border: "1px solid black", borderRadius: '15px'}} onClick={handleAddToCart}
            > 
              Add To Cart
            </button>
          </div>

          {/* Product Meta */}
          <div className="space-y-2 pt-6 border-t">
            <div className="flex gap-2 font-[400] leading-[22px] text-[#9F9F9F] font-poppins text-[16px]">
              <span className="">SKU</span>
              <span>:</span>
              <span>SS001</span>
            </div>
            <div className="flex gap-2 font-[400] leading-[22px] text-[#9F9F9F] font-poppins text-[16px]">
              <span className="">Category</span>
              <span>:</span>
              <span>Sofas</span>
            </div>
            <div className="flex gap-2 font-[400] leading-[22px] text-[#9F9F9F] font-poppins text-[16px]">
              <span className="">Tags</span>
              <span>:</span>
              <span>Sofa, Chair, Home, Shop</span>
            </div>
            <div className="flex items-center gap-4 font-[400] leading-[22px] text-[#9F9F9F] font-poppins text-[16px]">
              <span className="">Share</span>
              <span>:</span>
              <div className="flex gap-4">
                <FaFacebookF className="w-5 h-5 cursor-pointer text-black" />
                <FaLinkedinIn className="w-5 h-5 cursor-pointer text-black" />
                <FaTwitter className="w-5 h-5 cursor-pointer text-black" />
              </div>
              <FaHeart className="w-5 h-5 cursor-pointer ml-auto text-[#FF0000]" />
            </div>
          </div>
        </div>
      </div>

<ProductMoreDetails/>


<h1 className="font-[500] mt-8 leading-[52px] text-black font-poppins text-[36px] text-center mb-4">Related Products</h1>
    
  <Card data={data}/>
    </div>
    <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
<Footer/>
    
    </>
  )
}
