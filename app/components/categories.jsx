import React from 'react'

import { IoIosPhonePortrait } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";
import { IoWatch } from "react-icons/io5";
import { IoCamera } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";

export default function Categories() {
  return (
    <div>
        <div className="mt-10 grid gap-x-6 grid-flow-col overflow-x-auto snap-inline hidescoll">
        
                <div className="container w-56 px-18 py-12 rounded-sm border-2 border-gray-200 grid place-items-center">
                    <IoIosPhonePortrait className='text-5xl'></IoIosPhonePortrait>
                    <p>Phones</p>
                </div>

                <div className="container w-56 px-18 py-12 rounded-sm border-2 border-gray-200 grid place-items-center">
                    <FaComputer className='text-5xl'></FaComputer>
                    <p>Computers</p>
                </div>

                <div className="container w-56 px-18 py-12 rounded-sm border-2 border-gray-200 grid place-items-center">
                    <IoWatch className='text-5xl'></IoWatch>
                    <p>Watches</p>
                </div>

                <div className="container w-56 px-18 py-12 rounded-sm border-2 border-gray-200 grid place-items-center">
                    <IoCamera className='text-5xl'></IoCamera>
                    <p>Cameras</p>
                </div>
        
                <div className="container w-56 px-18 py-12 rounded-sm border-2 border-gray-200 grid place-items-center">
                    <FaHeadphones className='text-5xl'></FaHeadphones>
                    <p>Headphones</p>
                </div>
                <div className="container w-56 px-18 py-12 rounded-sm border-2 border-gray-200 grid place-items-center">
                    <FaHeadphones className='text-5xl'></FaHeadphones>
                    <p>Headphones</p>
                </div>
                <div className="container w-56 px-18 py-12 rounded-sm border-2 border-gray-200 grid place-items-center">
                    <FaHeadphones className='text-5xl'></FaHeadphones>
                    <p>Headphones</p>
                </div>
                <div className="container w-56 px-18 py-12 rounded-sm border-2 border-gray-200 grid place-items-center">
                    <FaHeadphones className='text-5xl'></FaHeadphones>
                    <p>Headphones</p>
                </div>
                
                
                
        
        
        
        
             
    </div>


        <div className='flex justify-center'>
            <button className='py-2 px-10 mx-auto bg-red-500 text-white rounded mt-10'>View all Products</button>
        </div>

        <div className='flex justify-center border-t-2 bg-gray-800 my-5 mr-10'>
        </div>
    </div>
  )
}
