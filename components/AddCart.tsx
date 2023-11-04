"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {useDispatch, useSelector } from 'react-redux';
import { remove } from '@/Redux/Cartslice';
import { toast } from 'react-toastify';

export default function AddCart() {

    const [quantity, setQuantity] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    
    const item = useSelector((state:any)=> state.cart)
    const dispatch = useDispatch();
    const cartitems = useSelector((state:any) => state.cart )
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    const notify = () => toast.error('Item has beed remove from the cart', {
      autoClose: 500
      });
  
    const handleRemove = (id:any) => {
      dispatch(remove(id))
      notify();
    };
  
  
  
  
    const Add = (id:any) => {
      setQuantity(quantity + 1);
    };
  
    const Subtract = (id:any) => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    };
  return (
    <>
   
        <div className="fixed top-0 right-0 w-full h-full md:w-[100vh]  transition menu-add bg-white z-10 shadow-lg">
          <div className=" flex flex-wrap gap-4 px-4 py-6">
            {
              cartitems.map((item:any) => (
                <div className="py-2" key={item.id}>
                <Image src={item.image} width={100} height={100} alt={item.alt} className=' h-40 w-40' />
                <h3 className="text-center text-normal text-slate-500 font-semibold mb-1">{`Price - Rs: ${item.price*quantity} `}</h3>

                <div className=" w-full flex justify-center items-center mb-1 ">
                  <div className='border rounded-lg'>
                    <button onClick={() => Subtract(item.id)} className="w-10 h-10 cursor-pointer">
                    -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => Add(item.id)} className="w-10 h-10 cursor-pointer">
                    +
                    </button>
                  </div>
                </div>

                <div className='flex justify-center items-center mb-1 w-full '>
                <button  className="border p-2 rounded-lg hover:text-[#fff] hover:bg-[#fb872e]" onClick={()=> handleRemove(item.id)}> 
                  Remove
                </button>
                </div>
                
                </div>
                
                
              ) )
            }
        
          </div>
          {item.length <=0 ? 
          (<div className=" w-full flex justify-center items-center  border rounded-lg p-20">
            Nothing to show
            </div>
           ) 
           :
           ''
          }

          <div className="absolute top-4 right-4 cursor-pointer  text-2xl font-bold" onClick={toggleMenu}>
            X
          </div>

          {item.length && item.length>0 ? 
          (
          <>
          <div className="py-20">
            <div className=''>
            {/* cartitems.price * quantity */}
            <h3 className="text-center text-lg text-slate-500 font-semibold">{`Total - Rs: ${item.price} `}</h3>
            </div>     
          </div>
          
          <div className="text-center py-10 hover:-translate-y-1 duration-200 ease-in">
          <Link  href="/checkout" className="border text-lg text-slate-500 font-bold  px-6 py-3 rounded-lg  hover:text-[#fff] hover:bg-[#fb872e]">
              Checkout
          </Link>
        </div>
        </>)
         :
         ''
         }

        </div>
  
    </>
  )
}
