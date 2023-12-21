import React from 'react'
import img from '../../public/ps.png'
import Image from 'next/image'
import { MdFavoriteBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";

export default function Product() {
  return (
    <div className='flex flex-row'>
        <div className='basis-5/12 h-4/6'><Image src={img}></Image></div>
        <div className='basis-7/12'>
            <div className='flex items-center justify-between mt-8 mx-10'>
                <h1 className='text-6xl font-main'>Playstation 5 controller</h1>
                <MdFavoriteBorder className='border border-gray-400 rounded-full text-5xl p-2'></MdFavoriteBorder>
            </div>
            <div className='flex items-center mt-8 mx-10'>
                <div className='flex'>
                    <FaStar className='mx-1 text-yellow-400'></FaStar><FaStar className='mx-1 text-yellow-400'></FaStar><FaStar className='mx-1 text-yellow-400'></FaStar><FaStar className='mx-1 text-yellow-400'></FaStar><FaStar className='text-gray-300 mx-1'></FaStar>
                </div>
                <p className='text-gray-600'>4.0 (433 comments)</p>
            </div>
            <div className='flex items-center justify-between mt-8 mx-10'>
                <div className='flex'>
                    <p className='text-xl font-bold'>$129.97</p>
                    <p className='text-xl ml-4 text-red-400 line-through font-bold'>$160.00</p>
                </div>
                <div className="flex items-center">
                    <CiCircleCheck className='text-blue-400 mr-2 text-2xl'></CiCircleCheck>
                    <p className='text-blue-800 text-xl'>In Stock</p>
                </div>
            </div>
            <div className='border bg-gray-800 mx-10 mt-8'></div>

            <div className="flex mx-10 justify-between mt-8">
                <div>
                <p className='text-lg font-bold mb-4'>Choose color</p>
                <div className="flex items-center">
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                    <div className='w-5 h-5 bg-red-500 rounded-full'></div>
                </div>
                <div className='ml-2  border-2 border-gray-500 rounded-full p-1'>
                    <div className='w-5 h-5 bg-blue-400 rounded-full'></div>
                </div>
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                    <div className='w-5 h-5 bg-black rounded-full'></div>
                </div>
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                    <div className='w-5 h-5 bg-green-500 rounded-full'></div>
                </div>
                </div>
                </div>


                <div>
                <p className='text-lg font-bold mb-4'>Avaiable Sizes</p>
                <div className="flex items-center">
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                    <div className=''>38</div>
                </div>
                <div className='ml-2  border-2 border-gray-500 rounded-full p-1'>
                <div className=''>39</div>
                </div>
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                <div className=''>40</div>
                </div>
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                <div className=''>41</div>
                </div>
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                <div className=''>42</div>
                </div>
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                <div className=''>43</div>
                </div>
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                <div className=''>44</div>
                </div>
                </div>
                </div>
            </div>

            <div className=' border bg-gray-800 mx-10 mt-8'></div>
        </div>
    </div>
  )
}
