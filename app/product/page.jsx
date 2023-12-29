"use client"

import React, { useState } from 'react'
import img from '../../public/jordan.png'
import Image from 'next/image'
import { MdFavoriteBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";

export default function Product() {
    const [counter,setCounter] = useState(0)

    function increase(){
        if(counter<10)
        setCounter(counter+1)
    }
    function decrease(){
        if(counter>0)
        setCounter(counter-1)
    }
    
    const changeSize = event => {
        for(var child of event.target.parentNode.parentNode.children){
           child.className = 'ml-2  border-2 border-gray-200 rounded-full p-1'
        }
        event.target.parentNode.className += ' border-gray-500'
      }

      const changeColor = event => {
        for(var child of event.target.parentNode.parentNode.children){
           child.className = 'ml-2  border-2 border-gray-200 rounded-full p-1'
        }
        event.target.parentNode.className += ' border-gray-500'
      }

  return (
    <div className='flex flex-row'>
        <div className='basis-5/12 h-4/6'>
            <Image src={img}></Image>
            <div className='flex justify-center'>
                <div className="border w-20 h-20 p-2">
                <Image src={img}></Image>
                </div>
                <div className="border w-20 h-20 p-2 mx-5">
                <Image src={img}></Image>
                </div>
                <div className="border w-20 h-20 p-2">
                <Image src={img}></Image>
                </div>
            </div>
            </div>
        <div className='basis-7/12'>
            <div className='flex items-center justify-between mt-8 mx-10'>
                <h1 className='text-6xl font-main'>Jordan Nike Shoes</h1>
                <MdFavoriteBorder className='border border-gray-400 rounded-full text-5xl p-2'></MdFavoriteBorder>
            </div>
            <div className='flex items-center mt-4 mx-10'>
                <div className='flex'>
                    <FaStar className='mx-1 text-yellow-400'></FaStar><FaStar className='mx-1 text-yellow-400'></FaStar><FaStar className='mx-1 text-yellow-400'></FaStar><FaStar className='mx-1 text-yellow-400'></FaStar><FaStar className='text-gray-300 mx-1'></FaStar>
                </div>
                <p className='text-gray-600'>4.0 (433 comments)</p>
            </div>
            <div className='flex items-center justify-between mt-4 mx-10'>
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
                    <div className='w-5 h-5 bg-red-500 rounded-full' onClick={changeColor}></div>
                </div>
                <div className='ml-2  border-2 border-gray-500 rounded-full p-1'>
                    <div className='w-5 h-5 bg-blue-400 rounded-full' onClick={changeColor}></div>
                </div>
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                    <div className='w-5 h-5 bg-black rounded-full' onClick={changeColor}></div>
                </div>
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                    <div className='w-5 h-5 bg-green-500 rounded-full' onClick={changeColor}></div>
                </div>
                </div>
                </div>


                <div>
                <p className='text-lg font-bold mb-4' id='sizes'>Avaiable Sizes</p>
                <div className="flex items-center">
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                    <div className='cursor-pointer' onClick={changeSize}>38</div>
                </div>
                <div className='ml-2  border-2 border-gray-500 rounded-full p-1' >
                <div className='cursor-pointer' onClick={changeSize}>39</div>
                </div>
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                <div className='cursor-pointer' onClick={changeSize}>40</div>
                </div>
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                <div className='cursor-pointer' onClick={changeSize}>41</div>
                </div>
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                <div className='cursor-pointer' onClick={changeSize}>42</div>
                </div>
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                <div className='cursor-pointer' onClick={changeSize}>43</div>
                </div>
                <div className='ml-2  border-2 border-gray-200 rounded-full p-1'>
                <div className='cursor-pointer' onClick={changeSize}>44</div>
                </div>
                </div>
                </div>
            </div>

            <div className=' border bg-gray-800 mx-10 mt-8'></div>

            <div className='flex items-center justify-between mx-10 mt-8'>
                <div className='flex items-center'>
                <p>QTY</p>
                <button className='w-10 h-10 border p-2 ml-4 rounded-s hover:bg-slate-100' onClick={decrease}>-</button>
                <div className='w-10 h-10 border p-2 text-center'>{counter}</div>
                <button className='w-10 h-10 border p-2 rounded-e hover:bg-slate-100' onClick={increase}>+</button>
                </div>
                <div className='flex'>
                    <button className=' bg-red-500 py-2 px-12 h-10 text-white rounded mr-4 hover:bg-red-600'>Buy now</button>
                    <button className=' border-red-500 border-2 py-2 px-12 h-10 rounded text-red-500 hover:bg-gray-100'>Add to Cart</button>
                </div>
            </div>
            <div className=' border bg-gray-800 mx-10 mt-8'></div>



            <div className='mt-8 mx-8'>
            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li class="me-2">
                    <a href="#" aria-current="page" class="inline-block p-4 rounded-t-lg active bg-red-500 text-white">Product Details</a>
                </li>
                <li class="me-2">
                    <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-red-500 dark:hover:text-gray-200">Reviews</a>
                </li>
                <li class="me-2">
                    <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-red-500 dark:hover:text-gray-200">FAQ</a>
                </li>
                <li class="me-2">
                    <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-red-500 dark:hover:text-gray-200">Contacts</a>
                </li>
                
            </ul>
            <div className='mt-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nulla maxime laborum doloremque velit beatae odio! Esse eius, dolor sed maxime, eligendi alias libero dicta impedit quisquam expedita excepturi magni, incidunt quos labore exercitationem cumque eaque temporibus reprehenderit eveniet nisi!
            </div>
            </div>
        </div>
    </div>
  )
}
