"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Add from './Add';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux/es/exports';
import { add } from '@/Redux/Cartslice';

export default function Page() {

  const [activeSlide, setActiveSlide] = useState(0);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([
    {
      id: 1,
      image: '/img/pizza.webp',
      price: 100,
      alt: 'Pizza',
    },
    {
      id: 2,
      image: '/img/Burger.webp',
      price: 150,
      alt: 'Burger',
    },
    {
      id: 3,
      image: '/img/North.webp',
      price: 200,
      alt: 'North',
    },
    {
      id: 4,
      image: '/img/Cakes.webp',
      price: 250,
      alt: 'Cakes',
    },
    {
      id: 5,
      image: '/img/Chinese.webp',
      price: 300,
      alt: 'Chinese',
    },
    {
      id: 6,
      image: '/img/Biryani.webp',
      price: 350,
      alt: 'Biryani',
    },
    {
      id: 7,
      image: '/img/Ice_Creams.webp',
      price: 400,
      alt: 'Ice_Creams',
    },
    {
      id: 8,
      image: '/img/idli.webp',
      price: 450,
      alt: 'idli',
    },
    {
      id: 9,
      image: '/img/Pasta.webp',
      price: 500,
      alt: 'Pasta',
    },
   
  ]);

  // const imagesData = [
  //   {
  //   "id":1,
  //   "image": "/img/pizza.webp",
  //   "price":100,
  //   "alt" :"pizza"
  //   },
  //   {
  //     "id":2,
  //   "image": "/img/pizza.webp",
  //   "price":150,
  //   "alt" :"pizza"
  //   },
  //   {
  //   "id":3,
  //   "image": "/img/pizza.webp",
  //   "price":200,
  //   "alt" :"pizza"
  //   },
  //   {
  //   "id":4,
  //   "image": "/img/pizza.webp",
  //   "price":250,
  //   "alt" :"pizza"
  //   },
  //   {
  //     "id":5,
  //   "image": "/img/pizza.webp",
  //   "price":300,
  //   "alt" :"pizza"
  //   },
  //   {
  //     "id":6,
  //   "image": "/img/pizza.webp",
  //   "price":350,
  //   "alt" :"pizza"
  //   },
  //   {
  //     "id":7,
  //   "image": "/img/pizza.webp",
  //   "price":400,
  //   "alt" :"pizza"
  //   },
  //   {
  //     "id":8,
  //   "image": "/img/pizza.webp",
  //   "price":450,
  //   "alt" :"pizza"
  //   },
  //   {
  //     "id":9,
  //   "image": "/img/pizza.webp",
  //   "price":500,
  //   "alt" :"pizza"
  //   }
  // ]
   
  useEffect(() => {
    setProducts(products)
  },[]);

  const notify = () => toast.success('Item has been added to the cart', {
    autoClose: 500
    });

const handleAdd = (products:any) =>{
  dispatch(add(products));
  notify();

}

  // console.log(products)

  const slides = [
    "/img/image1.webp",
    "/img/image2.webp",
    "/img/image3.webp",
    "/img/image4.webp",
    "/img/image5.webp",
    "/img/image6.webp",
    "/img/image7.webp",
    "/img/image1.webp",
    "/img/image2.webp",
   
    
  ];
  

  const numSlidesToShow = 3;

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - numSlidesToShow < 0 ? slides.length - numSlidesToShow : prev - numSlidesToShow));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + numSlidesToShow >= slides.length ? 0 : prev + numSlidesToShow));
  };

  const visibleSlides = slides.slice(activeSlide, activeSlide + numSlidesToShow);

  // const amount = 'Rs: 100';
  // const Add = () => {
  //   console.log(`Value: ${amount}`);
  // };

  // const [quantity, setQuantity] = useState(0);
  
  // const price = 100;
  // const imageUrl = '/img/pizza.webp';

  // const Add = () => {
  //   setQuantity(quantity + 1);
  // };

  // const Subtract = () => {
  //   if (quantity > 0) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  // const priceSum = price * quantity; 

  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  return (
  <>
    <div id="home" className="min-h-screen  scroll-section bg-white py-24">
      <div className="w-full h-full container mx-auto px-4 md:px-16 grid place-content-center ">


        
        <div className="w-full h-full mb-8">
        <div className="flex justify-between items-center">
            <div className=''>
              <h2 className='font-bold md:text-2xl text-lg mb-4'>Best offers for you
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
          {/* <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row md:grid-flow-col gap-4 mx-auto">
            <div className="col-span-1 w-full h-full">
                <div className="">
                    <Image src="/img/image1.webp" width={1000} height={1000} priority alt='cardboard' className=' w-full h-full'/>
                </div>
              </div>

              <div className="col-span-1 w-full h-full">
                <div className="">
                    <Image src="/img/image2.webp" width={1000} height={1000} priority alt='cardboard' className=' w-full h-full'/>
                </div>
              </div>

              <div className="col-span-1 w-full h-full">
                <div className="">
                    <Image src="/img/image3.webp" width={1000} height={1000} priority alt='cardboard' className=' w-full h-full'/>
                </div>
              </div>

          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row md:grid-flow-col gap-4 mx-auto">
            {visibleSlides.map((slide, index) => (
              <div className="col-span-1 w-full h-full" key={index}>
                <div>
                  <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full menu-add " />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-full mb-16">
          <div className="flex justify-between items-center">
            <div className=''>
              <h2 className='font-bold md:text-2xl text-lg mb-4'>What's on your mind?</h2>
            </div>

            <div className=''>
              <div>
                <button className='font-bold md:text-2xl text-lg mr-4 w-10'>
                  <Image src={"/svg/leftArrow.svg"} height={100} width={100} alt='left' className='w-full h-full'>
                  </Image>
                </button>
                <button className='font-bold md:text-2xl text-lg w-10 '>
                  <Image src={"/svg/rightArrow.svg"} height={100} width={100} alt='right' className='w-full h-full'>
                  </Image>
                </button>
              </div>
            </div>

          </div>
          <div className="">


          <div className="grid grid-cols-1 md:grid-cols-9 grid-flow-row md:grid-flow-col gap-4 md:gap-8 mx-auto">
            {products.map((product) => (
              <div key={product.id} className="col-span-1 w-full h-full">
                <div>
                  <Image src={product.image} width={100} height={100} alt={product.alt} className='w-full h-full' />
                </div>
                <h3 className="text-center text-normal text-slate-500 font-semibold">{`Rs: ${product.price}`}</h3> 
                <div className="flex justify-center items-center">
                  <Image onClick={() => handleAdd(product)} src="/svg/add.svg" width={100} height={100} priority alt="add" className="w-8 h-8 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>   
{/* 
                {menuOpen && (
                  <div className="fixed top-0 right-0 w-full h-full md:w-[100vh] md:h-full flex items-center justify-center bg-white z-10">
                      <div className="">
                          <Image src={imageUrl} width={1000} height={1000} priority alt='pizza' className='w-full h-full' />
                          <h3 className='text-center text-lg text-slate-500 font-semibold getValue'>{`Total - Rs: ${priceSum}`}</h3>
                        </div>
                      
                        <div className="flex justify-center items-center">
                          <button onClick={Subtract} className='w-10 h-10 cursor-pointer'>
                            -
                          </button>
                          <span>{quantity}</span>
                          <button onClick={Add} className='w-10 h-10 cursor-pointer'>
                            +
                          </button>
                        </div>
                        
                      <div className="absolute top-4 right-4 cursor-pointer " onClick={toggleMenu}>
                        X
                      </div>
                  </div>
                  )}
                 */}
                
             

              {/* <div className="col-span-1 w-full h-full">
                <div className="">
                    <Image src="/img/Burger.webp" width={1000} height={1000} priority alt='Burger' className=' w-full h-full'/>
                </div>
                <h3 className='text-center text-lg text-slate-500 font-semibold'>Rs: 150 </h3>
                <div className=" flex justify-center items-center">
                  <Image onClick={Add} src="/svg/add.svg" width={100} height={100} priority alt='add' className='w-10 h-10 cursor-pointer'/>
                </div>
              </div>

              <div className="col-span-1 w-full h-full">
                <div className="">
                    <Image src="/img/North.webp" width={1000} height={1000} priority alt='North' className=' w-full h-full'/>
                </div>
                <h3 className='text-center text-lg text-slate-500 font-semibold'>Rs: 200 </h3>
                <div className=" flex justify-center items-center">
                  <Image onClick={Add} src="/svg/add.svg" width={100} height={100} priority alt='add' className='w-10 h-10 cursor-pointer'/>
                </div>
              </div>
              <div className="col-span-1 w-full h-full">
                <div className="">
                    <Image src="/img/Chinese.webp" width={1000} height={1000} priority alt='Chinese' className=' w-full h-full'/>
                </div>
                <h3 className='text-center text-lg text-slate-500 font-semibold'>Rs: 250 </h3>
                <div className=" flex justify-center items-center">
                  <Image onClick={Add} src="/svg/add.svg" width={100} height={100} priority alt='add' className='w-10 h-10 cursor-pointer'/>
                </div>
              </div>
              <div className="col-span-1 w-full h-full">
                <div className="">
                    <Image src="/img/North.webp" width={1000} height={1000} priority alt='North' className=' w-full h-full'/>
                </div>
                <h3 className='text-center text-lg text-slate-500 font-semibold'>Rs: 300 </h3>
                <div className=" flex justify-center items-center">
                  <Image onClick={Add} src="/svg/add.svg" width={100} height={100} priority alt='add' className='w-10 h-10 cursor-pointer'/>
                </div>
              </div>
              <div className="col-span-1 w-full h-full">
                <div className="">
                    <Image src="/img/Biryani.webp" width={1000} height={1000} priority alt='Biryani' className=' w-full h-full'/>
                </div>
                <h3 className='text-center text-lg text-slate-500 font-semibold'>Rs: 350 </h3>
                <div className=" flex justify-center items-center">
                  <Image onClick={Add} src="/svg/add.svg" width={100} height={100} priority alt='add' className='w-10 h-10 cursor-pointer'/>
                </div>
              </div>
              <div className="col-span-1 w-full h-full">
                <div className="">
                    <Image src="/img/South.webp" width={1000} height={1000} priority alt='South' className=' w-full h-full'/>
                </div>
                <h3 className='text-center text-lg text-slate-500 font-semibold'>Rs: 400 </h3>
                <div className=" flex justify-center items-center">
                  <Image onClick={Add} src="/svg/add.svg" width={100} height={100} priority alt='add' className='w-10 h-10 cursor-pointer'/>
                </div>
              </div>
              <div className="col-span-1 w-full h-full">
                <div className="">
                    <Image src="/img/Rolls.webp" width={1000} height={1000} priority alt='Rolls' className=' w-full h-full'/>
                </div>
                <h3 className='text-center text-lg text-slate-500 font-semibold'>Rs: 450 </h3>
                <div className=" flex justify-center items-center">
                  <Image onClick={Add} src="/svg/add.svg" width={100} height={100} priority alt='add' className='w-10 h-10 cursor-pointer'/>
                </div>
              </div>
              <div className="col-span-1 w-full h-full">
                <div className="">
                    <Image src="/img/Pasta.webp" width={1000} height={1000} priority alt='Pasta' className=' w-full h-full'/>
                </div>
                <h3 className='text-center text-lg text-slate-500 font-semibold'>Rs: 500 </h3>
                <div className=" flex justify-center items-center">
                  <Image onClick={Add} src="/svg/add.svg" width={100} height={100} priority alt='add' className='w-10 h-10 cursor-pointer'/>
                </div>
              </div>
              <div className="col-span-1 w-full h-full">
                <div className="">
                    <Image src="/img/Pure_Veg.webp" width={1000} height={1000} priority alt='Pure_Veg' className=' w-full h-full'/>
                </div>
                <h3 className='text-center text-lg text-slate-500 font-semibold'>Rs: 600 </h3>
                <div className=" flex justify-center items-center">
                  <Image onClick={Add} src="/svg/add.svg" width={100} height={100} priority alt='add' className='w-10 h-10 cursor-pointer'/>
                </div>
              </div> */}

          </div>
        </div>

        <hr className='mb-12'/>

        <div className="w-full h-full mb-8">
        <div className="flex justify-between items-center">
            <div className=''>
              <h2 className='font-bold md:text-2xl text-lg mb-4'>Top restaurant chains in Ahmedabad</h2>
            </div>

            <div className=''>
              <div>
                <button className='font-bold md:text-2xl text-lg mr-4 w-10'>
                  <Image src={"/svg/leftArrow.svg"} height={100} width={100} alt='left' className='w-full h-full'>
                  </Image>
                </button>
                <button className='font-bold md:text-2xl text-lg w-10'>
                  <Image src={"/svg/rightArrow.svg"} height={100} width={100} alt='right' className='w-full h-full'>
                  </Image>
                </button>
              </div>
            </div>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 grid-flow-row md:grid-flow-col gap-4 md:gap-8 mx-auto">
            <div className="col-span-1 w-full h-full">
              <div className="bg-gray-50 w-full rounded-[16px] hover:scale-95 duration-100">
                <div className='relative'>
                  <Image className="rounded-[16px] w-full h-40 object-cover bg-cover" width={1000} height={1000} priority src ="/img/restro_1.webp" alt="restro"/>
                </div>
                <div className="absolute">
                  <h2 className=" text-[#FFFFFF] text-lg font-extrabold md:text-xl text-center -mt-8 ml-2">
                  50% OFF UPTO ₹100
                  </h2>
                </div>
                  <div className='p-2'>
                    <h2 className=" font-semibold">
                    1944 The Hocco Kitchen <br/>
                    4.5 • 18 mins
                    </h2>
                    <p className="text-slate-500 line-clamp-2">
                    North Indian <br/>
                    Navrangpura
                    </p>
                  </div>

              </div>
              </div>

              <div className="col-span-1 w-full h-full">
              <div className="bg-gray-50 w-full rounded-[16px] hover:scale-95 duration-100">
                <div className='relative' >
                  <Image className="rounded-[16px] w-full h-40 object-cover bg-cover" width={1000} height={1000} priority src ="/img/restro_2.webp" alt="restro"/>
                </div>
                <div className="absolute">
                  <h2 className=" text-[#FFFFFF] text-lg font-extrabold md:text-xl text-center -mt-8 ml-2">
                  20% OFF UPTO ₹50
                  </h2>
                </div>
                  <div className='p-2'>
                    <h2 className=" font-semibold">
                    McDonald's <br/>
                    4.2 • 17 mins
                    </h2>
                    <p className="text-slate-500 line-clamp-1">
                    Burgers, Beverages, Cafe, Desserts
                    </p>
                    <p className="text-slate-500 line-clamp-1">
                    City Gold The Multiplex- Ashram
                    </p>
                  </div>

              </div>
              </div>

              <div className="col-span-1 w-full h-full">
              <div className="bg-gray-50 w-full rounded-[16px] hover:scale-95 duration-100">
                <div className='relative'>
                  <Image className="rounded-[16px] w-full h-40 object-cover bg-cover" width={1000} height={1000} priority src ="/img/restro_3.webp" alt="restro"/>
                </div>
                <div className="absolute">
                  <h2 className=" text-[#FFFFFF] text-lg font-extrabold md:text-xl text-center -mt-8 ml-2">
                  ₹150 OFF ABOVE ₹349
                  </h2>
                </div>
                  <div className='p-2'>
                    <h2 className=" font-semibold">
                    Iscon Thal <br/>
                    4.2 • 28 mins
                    </h2>
                    <p className="text-slate-500 line-clamp-1">
                    Gujarati, Thalis, Indian, Sweets, Desserts, Jain
                    </p>
                    <p className="text-slate-500 line-clamp-1">
                    Satellite
                   
                    </p>
                  </div>

              </div>
              </div>
              <div className="col-span-1 w-full h-full">
              <div className="bg-gray-50 w-full rounded-[16px] hover:scale-95 duration-100">
                <div className='relative'>
                  <Image className="rounded-[16px] w-full h-40 object-cover bg-cover" width={1000} height={1000} priority src ="/img/restro_4.webp" alt="restro"/>
                </div>
                <div className="absolute">
                  <h2 className=" text-[#FFFFFF] text-lg font-extrabold md:text-xl text-center -mt-8 ml-2">
                  20% OFF UPTO ₹50
                  </h2>
                </div>
                  <div className='p-2'>
                    <h2 className=" font-semibold">
                    KFC <br/>
                    3.9 • 17 mins
                    </h2>
                    <p className="text-slate-500 line-clamp-1">
                    Burgers, Biryani, American, Snacks, Fast Food
                    </p>
                    <p className="text-slate-500 line-clamp-1">
                    Paldi & Ambawadi
                    </p>
                  </div>

              </div>
              </div>
              <div className="col-span-1 w-full h-full">
              <div className="bg-gray-50 w-full rounded-[16px] hover:scale-95 duration-100">
                <div className='relative'>
                  <Image className="rounded-[16px] w-full h-40 object-cover bg-cover" width={1000} height={1000} priority src ="/img/restro_5.webp" alt="restro"/>
                </div>
                <div className="absolute">
                  <h2 className=" text-[#FFFFFF] text-lg font-extrabold md:text-xl text-center -mt-8 ml-2">
                  ₹150 OFF ABOVE ₹349
                  </h2>
                </div>
                <div className='p-2'>
                    <h2 className=" font-semibold">
                    Burger King <br/>
                    4 • 21 mins
                    </h2>
                    <p className="text-slate-500 line-clamp-1">
                    Burgers, American, Salads, Beverages, Chaat
                    </p>
                    <p className="text-slate-500 line-clamp-1">
                    Ellisbridge
                    </p>
                  </div>

              </div>
              </div>

          </div>
        </div>

  
      </div>

    </div>
  </>
  )
}
