"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Sliders({title}:any) {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
    "/img/image1.webp",
    "/img/image2.webp",
    "/img/image3.webp",
    "/img/image4.webp",
    "/img/image5.webp",
    "/img/image6.webp",
    "/img/image7.webp",

    ];
  

  const numSlidesToShow = 3;

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - numSlidesToShow < 0 ? slides.length - numSlidesToShow : prev - numSlidesToShow));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + numSlidesToShow >= slides.length ? 0 : prev + numSlidesToShow));
  };

  const visibleSlides = slides.slice(activeSlide, activeSlide + numSlidesToShow);
  return (
    <>
    <div className="flex justify-between items-center">
            <div className=''>
              <h2 className='font-bold md:text-2xl text-lg mb-4'>{title}
              </h2>
            </div>

            <div className=''>
              <div>
                <button className='font-bold md:text-2xl text-lg mr-4 w-10' onClick={prevSlide}>
                  <Image src={"/svg/leftArrow.svg"} height={100} width={100} alt='left' className='w-full h-full'>
                  </Image>
                </button>
                <button className='font-bold md:text-2xl text-lg w-10' onClick={nextSlide}>
                  <Image src={"/svg/rightArrow.svg"} height={100} width={100} alt='right' className='w-full h-full'>
                  </Image>
                </button>
              </div>
            </div>

          </div>

          {visibleSlides.map((slide, index) => (
              <div className="col-span-1 w-full h-full" key={index}>
                <div>
                  <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full" />
                </div>
              </div>
            ))}
    </>
  )
}
