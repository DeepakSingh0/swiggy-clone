"use client"
import React from 'react'
import { useForm} from "react-hook-form";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { ContactForm } from '../interfaces';

export default function Checkout() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();
    const notify = () => toast.success('Email has been sent successfully', {
    autoClose: 1000
    });
    
    const onSubmit = async (data:ContactForm) => {
        try {
          const contactData = { full_name: data.full_name,
                                email: data.email, 
                                message:data.message,
                              };
        const response = await emailjs.send('service_657kjrf', 'template_45ey2ag',
            contactData,
            'ck75gMv7oyRYA80EN'
          );

        // const confirmationData = {
        //     full_name: data.full_name,
        //     email: data.email,
        //     message: 'Thank you for your submission. This is a confirmation email.',
        //   };

          notify();
          reset();
          console.log(response)
        } 
        
        catch (error) {
          console.error('Error creating job post:', error);
        }
        
      };
  return (
    <>
    
    <section id="contact" className="h-[100vh] flex justify-center items-center  bg-gray-100 text-black tracking-wide">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-black text-center mb-4">Contact us Form</h2>
            <div className="flex flex-wrap justify-center items-center">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="p-5 lg:p-10  bg-[#fff] rounded-lg border">
                        <p className="text-lg leading-relaxed mt-1 mb-4 text-blueGray-500 text-center ">
                            Complete this form and we will get back to you in 24 hours.
                        </p>
                        <div className=" w-full mb-3 mt-8">
                            <label
                            className="block uppercase  text-xs font-bold mb-2"
                            htmlFor="full-name"
                            >
                            Full Name
                            </label>
                            <input
                            type="text"
                            className="border px-3 py-3  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Full Name"
                            
                            id="full_name"
                            {...register('full_name', { 
                            required: true,
                            minLength: 2,
                            maxLength: 50,
                            })}
                            />
                            {errors?.full_name?.type === "required" &&(
                            <p className=" text-red-500">This field is required</p>
                            )}
                            {errors?.full_name?.type === "maxLength" && (
                            <p className=" text-red-500">Full Name cannot exceed 50 characters</p>
                            )}
                            {errors?.full_name?.type === "minLength" && (
                            <p className=" text-red-500">Full Name cannot less than 2 characters</p>
                            )}
                        </div>

                        <div className=" w-full mb-3">
                            <label
                            className="block uppercase  text-xs font-bold mb-2"
                            htmlFor="email"
                            >
                            Email
                            </label>
                            <input
                            type="email"
                            className="border px-3 py-3    bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder='Email'
                            id="email"
                            {...register("email", 
                            { 
                                required: true,  
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                            })}
                            />
                            {errors?.email?.type === "required" && <p className=" text-red-500">This field is required</p>}
                            {errors?.email?.type === "pattern" && (
                            <p className=" text-red-500">Please Enter Valid Email</p>
                            )}
                        </div>

                        <div className=" w-full mb-6">
                            <label
                            className="block uppercase  text-xs font-bold mb-2" 
                            htmlFor="message"
                            >
                            Message
                            </label>
                            <textarea
                            className="border px-3 py-3   bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Type a message..."
                            rows={4}
                            id="message"
                            {...register('message', { 
                            required: true,
                            })}
                            />
                            {errors?.message?.type === "required" &&(
                            <p className=" text-red-500">This field is required</p>
                            )}
                        </div>
                        <div className="text-center hover:-translate-y-1 duration-200 ease-in">
                            <button className=" border text-sm font-bold uppercase px-6 py-3 rounded-lg  mr-4 mb-2  bg-white hover:text-[#fff] hover:bg-[#fb872e] " type="submit">
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}
