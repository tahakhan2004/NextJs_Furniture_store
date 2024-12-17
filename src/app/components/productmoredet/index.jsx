'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import img2 from "../../../../public/Cloud sofa three seater + ottoman_1 1@3x.png" 
import img1 from "../../../../public/Cloud sofa three seater + ottoman_2 1.png" 



const ProductMoreDetails = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'additional', label: 'Additional Information' },
    { id: 'reviews', label: 'Reviews [5]' },
  ];

  return (
    <div className="container mx-auto px-10 py-8 mt-20">
      {/* Tabs Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 font-poppins font-[400] text-[20px] leading-[35px] transition-colors relative ${
                activeTab === tab.id
                  ? 'text-black'
                  : 'text-gray-400 hover:text-gray-500'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {activeTab === 'description' && (
          <div className="space-y-6 font-poppins text-[#9F9F9F] font-[400] text-[16px] leading-[22px]">
            <p className="">
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p className="">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange
              and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls
              to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>

            {/* Product Images */}
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="bg-[#FFF9E5] rounded-lg p-4">
                <Image
                  src={img1}
                  alt="Product view 1"
                  width={600}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="bg-[#FFF9E5] rounded-lg p-4">
                <Image
                  src={img2}
                  alt="Product view 2"
                  width={600}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'additional' && (
          <div className="text-gray-600">
            <p>Additional information content goes here.</p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="text-gray-600">
            <p>Reviews content goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductMoreDetails;

