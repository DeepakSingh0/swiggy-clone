"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {useDispatch, useSelector } from 'react-redux';
import { remove } from '@/Redux/Cartslice';
import { toast } from 'react-toastify';
import {useRouter} from 'next/navigation'

type Quantity = {
  [id: number]: number;
};

export default function Navbar() {
  
  const [quantity, setQuantity] = useState<Quantity>({});
  const [menuOpen, setMenuOpen] = useState(false);
  const item = useSelector((state:any)=> state.cart)
  const dispatch = useDispatch();
  const cartitems = useSelector((state:any) => state.cart )

  const router = useRouter();

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
    setQuantity({
      ...quantity,
      [id]: (quantity[id] || 0) + 1,
    });
  };

  const Subtract = (id:any) => {
    if (quantity[id] > 0) {
      setQuantity({
        ...quantity,
        [id]: quantity[id] - 1,
      });
    }
  };

  const calculateTotalPrice = (id:any) => {
    const item = cartitems.find((item:any) => item.id === id);
    return (item ? item.price : 0) * (quantity[id] || 0);
  };

  const totalPrice = Object.keys(quantity).reduce((total, id) => {
    const item = cartitems.find((item:any) => item.id === Number(id));
    if (item) {
      return total + (quantity[Number(id)] || 0) * item.price;
    }
    return total;
  }, 0);
  

  const CheckoutPage = () => {
    router.push("/checkout")
    setMenuOpen(false);

  }
  
  return (
    <>
    <div id="navbar" className="flex justify-around items center fixed w-full z-10  py-4 bg-white shadow-md">
            <div className='flex justify-center items center'>
              <Link href="/">
                <Image src="/svg/logo.svg" height={100} width={100} alt='swiggy' className='w-14 h-12 hover:scale-125 duration-300'>
                </Image>
              </Link>
            </div>

            <div className='flex'>
              <div className='flex justify-center items center group group-hover:text-[#fb872e]'>
                <div className=''>
                    
                </div>
                {/* <Image src="/svg/leftArrow.svg" height={100} width={100} alt='swi' className='w-6 h-6 mr-2'>
                </Image> */}
                <h2 className='text-[#3d4152] font-[500] mr-4 md:mr-10 cursor-pointer  '>
                  Search
                </h2>
              </div>
              <div className='flex justify-center items center'>
                {/* <Image src="/svg/leftArrow.svg" height={100} width={100} alt='swi' className='w-6 h-6 mr-2'>
                </Image> */}
                <h2 className='text-[#3d4152] font-[500] mr-4 md:mr-10 cursor-pointer  hover:text-[#fb872e]'>
                  Offers
                </h2>
              </div>
              <div className='flex justify-center items center'>
                {/* <Image src="/svg/leftArrow.svg" height={100} width={100} alt='swi' className='w-6 h-6 mr-2'>
                </Image> */}
                <h2 className='text-[#3d4152] font-[500] mr-4 md:mr-10 cursor-pointer  hover:text-[#fb872e]'>
                  Help
                </h2>
              </div>
              <div className='flex justify-center items center'>
                {/* <Image src="/svg/leftArrow.svg" height={100} width={100} alt='swi' className='w-6 h-6 mr-2'>
                </Image> */}
                <h2 className='text-[#3d4152] font-[500] mr-4 md:mr-10 cursor-pointer  hover:text-[#fb872e]'>
                  Sign In
                </h2>
              </div>
              <div className='flex justify-center items center'>
                <h2 className='text-[#3d4152] font-[500] mr-4 md:mr-10 cursor-pointer  hover:text-[#fb872e]' onClick={toggleMenu}>
                  Cart{item.length && item.length>0 ? `: ${item.length}` :''}
                </h2>
              </div>
            </div>

    </div>
    {menuOpen && (
        <div className="fixed top-0 right-0 w-full h-full md:w-[100vh]  transition menu-add bg-white z-10 shadow-lg">
          <div className=" flex flex-wrap gap-4 px-4 py-6">
            {
              cartitems.map((item:any) => (
                <div className="py-2" key={item.id}>
                <Image src={item.image} width={100} height={100} alt={item.alt} className=' h-40 w-40' />
                <h3 className="text-center text-normal text-slate-500 font-semibold mb-1">{`Price - Rs: ${calculateTotalPrice(item.id)} `}</h3>

                <div className=" w-full flex justify-center items-center mb-1 ">
                  <div className='border rounded-lg'>
                    <button onClick={() => Subtract(item.id)} className="w-10 h-10 cursor-pointer">
                    -
                    </button>
                    <span>{quantity[item.id] || 0}</span>
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
            <h3 className="text-center text-lg text-slate-500 font-semibold">{`Total - Rs: ${totalPrice} `}</h3>
            </div>     
          </div>
          
          <div className="text-center py-10 hover:-translate-y-1 duration-200 ease-in">
          <button onClick={CheckoutPage} className="border text-lg text-slate-500 font-bold  px-6 py-3 rounded-lg  hover:text-[#fff] hover:bg-[#fb872e]">
              Checkout
          </button>
        </div>
        </>)
         :
         ''
         }

        </div>
      )}
    </>
  )
}
