import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TwoCardcmp from "./components/TwoCardscmp";
import Card from "./components/Card";
import c1 from "../../public/Trenton modular sofa_3 1.png";
import c2 from "../../public/Granite dining table with dining chair 1.png";
import c3 from "../../public/Outdoor bar table and stool 1.png";
import c4 from "../../public/Plain console with teak mirror 1.png";
import BannerD from "./components/BannerDown";
import Footer from "./components/Footer";
import InstagramSection from "./components/InstaSection";
import i4 from "../../public/instaf.png";



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

export default function Home() {
  return (
  <>
  <Navbar bgcol={"#FBEBB5"}/>
  <Banner/>
  <TwoCardcmp />
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-16 mx-auto">
    <h1 className="font-[500] leading-[52px] text-black font-poppins text-[36px] text-center mb-4">Top Picks For You</h1>
    <p className="font-[500] leading-[24px] text-[#9F9F9F] font-poppins text-[16px] text-center mb-16">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
  <Card data={data}/>
  </div>
  </section>

  <BannerD/>
<InstagramSection img={i4} fs={"60"} fw={"700"} lh={"90"} flag={true} head={"Our Instagram"}/>
  <Footer/>
  </>
  );
}
