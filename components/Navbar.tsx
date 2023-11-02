"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
export default function Navbar() {
  return (
    <>
    <div className="flex justify-around items center fixed w-full z-10  py-4 bg-white shadow-md">
            <div className='flex justify-center items center'>
                <Image src="/svg/logo.svg" height={100} width={100} alt='swi' className='w-full h-full logo'>
                </Image>
                <h2 className='text-xs font-extrabold'>Other</h2>
            </div>

            <div className='flex'>
              <div className='flex justify-center items center group group-hover:text-[#fb872e]'>
                <div className=''>
                    
                </div>
                <Image src="/svg/leftArrow.svg" height={100} width={100} alt='swi' className='w-6 h-6 mr-2'>
                </Image>
                <h2 className='text-[#3d4152] font-[500] mr-4 md:mr-10 cursor-pointer  '>
                  Search
                </h2>
              </div>
              <div className='flex justify-center items center'>
                <Image src="/svg/leftArrow.svg" height={100} width={100} alt='swi' className='w-6 h-6 mr-2'>
                </Image>
                <h2 className='text-[#3d4152] font-[500] mr-4 md:mr-10 cursor-pointer  hover:text-[#fb872e]'>
                  Offers
                </h2>
              </div>
              <div className='flex justify-center items center'>
                <Image src="/svg/leftArrow.svg" height={100} width={100} alt='swi' className='w-6 h-6 mr-2'>
                </Image>
                <h2 className='text-[#3d4152] font-[500] mr-4 md:mr-10 cursor-pointer  hover:text-[#fb872e]'>
                  Help
                </h2>
              </div>
              <div className='flex justify-center items center'>
                <Image src="/svg/leftArrow.svg" height={100} width={100} alt='swi' className='w-6 h-6 mr-2'>
                </Image>
                <h2 className='text-[#3d4152] font-[500] mr-4 md:mr-10 cursor-pointer  hover:text-[#fb872e]'>
                  Sign In
                </h2>
              </div>
              <div className='flex justify-center items center'>
                <Image src="/svg/leftArrow.svg" height={100} width={100} alt='swi' className='w-6 h-6 mr-2'>
                </Image>
                <h2 className='text-[#3d4152] font-[500] mr-4 md:mr-10 cursor-pointer  hover:text-[#fb872e]'>
                  Cart
                </h2>
              </div>
            </div>

    </div>
    </>
  )
}
