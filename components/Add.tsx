"use client"
import React, { useState } from 'react'
import Image from 'next/image';

export default function MenuItem({ imageUrl, price, alt }:any) {
  const [quantity, setQuantity] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const Add = () => {
    setQuantity(quantity + 1);
  };

  const Subtract = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const priceSum = price * quantity;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="col-span-1 w-full h-full">
      <div className="">
        <Image src={imageUrl} width={1000} height={1000} priority alt="item" className="w-full h-full" />
      </div>
      <h3 className="text-center text-lg text-slate-500 font-semibold">{`Rs: ${price}`}</h3>
      <div className="flex justify-center items-center">
        <Image onClick={toggleMenu} src="/svg/add.svg" width={100} height={100} priority alt="add" className="w-8 h-8 cursor-pointer" />
      </div>

      {menuOpen && (
        <div className="fixed top-0 right-0 w-full h-full md:w-[100vh] md:h-full flex items-center transition menu-add  justify-center bg-white z-10">
          <div className="">
            <Image src={imageUrl} width={1000} height={1000} priority alt={alt} className="w-full h-full" />
            <h3 className="text-center text-lg text-slate-500 font-semibold">{`Total - Rs: ${priceSum}`}</h3>
          </div>

          <div className="flex justify-center items-center">
            <button onClick={Subtract} className="w-10 h-10 cursor-pointer">
              -
            </button>
            <span>{quantity}</span>
            <button onClick={Add} className="w-10 h-10 cursor-pointer">
              +
            </button>
          </div>

          <div className="absolute top-4 right-4 cursor-pointer  text-2xl font-bold" onClick={toggleMenu}>
            X
          </div>
        </div>
      )}
    </div>
  );
}
