"use client"

import Image from 'next/image'
import React ,{useRef} from 'react'
import img1 from '../../public/jordan.png'
import { FaStar } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlinePreview } from "react-icons/md";
import { useDraggable } from "react-use-draggable-scroll";

export default function Productlist() {
    const ref = useRef();
    const {events} = useDraggable(ref)
  return (
    <div>
        <div className="mt-10 grid gap-x-6 grid-flow-col overflow-x-auto hidescoll"{...events} ref={ref}>
    <div className='shadow-md p-3'>
        <div className="container w-56 bg-gray-100 p-1 rounded-sm ">
            <div className='relative'>
            <Image
            src={img1}
            alt='ad' quality={100} placeholder='blur'
            className=' mx-auto w-9/12'
            >
            </Image>
            <div className='p-1 rounded-sm bg-red-500 text-white absolute top-0 text-sm'>
                -47%
            </div>
            <MdFavoriteBorder className=' absolute top-0 right-0 text-2xl'/>
            <MdOutlinePreview className=' absolute top-10 right-0 text-2xl'/>
            </div>
            
            
        </div>
        <h4>Jordan Nike Shoes</h4>
        <div className='flex'>
        <p className='text-red-500'>$120</p>
        <p className='text-gray-500 line-through ml-2'>$120</p>
        </div>

        <div className='flex text-yellow-500 items-center'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <p className='text-gray-500 ml-2'>(88)</p>
        </div>
    </div>
    <div className='shadow-md p-3'>
        <div className="container w-56 bg-gray-100 p-1 rounded-sm">
            <div className='relative'>
            <Image
            src={img1}
            alt='ad' quality={100} placeholder='blur'
            className=' mx-auto w-9/12'
            >
            </Image>
            <div className='p-1 rounded-sm bg-red-500 text-white absolute top-0 text-sm'>
                -47%
            </div>
            <MdFavoriteBorder className=' absolute top-0 right-0 text-2xl'/>
            <MdOutlinePreview className=' absolute top-10 right-0 text-2xl'/>
            </div>
            
            
        </div>
        <h4>Jordan Nike Shoes</h4>
        <div className='flex'>
        <p className='text-red-500'>$120</p>
        <p className='text-gray-500 line-through ml-2'>$120</p>
        </div>

        <div className='flex text-yellow-500 items-center'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <p className='text-gray-500 ml-2'>(88)</p>
        </div>
    </div>
    <div className='shadow-md p-3'>
        <div className="container w-56 bg-gray-100 p-1 rounded-sm">
            <div className='relative'>
            <Image
            src={img1}
            alt='ad' quality={100} placeholder='blur'
            className=' mx-auto w-9/12'
            >
            </Image>
            <div className='p-1 rounded-sm bg-red-500 text-white absolute top-0 text-sm'>
                -47%
            </div>
            <MdFavoriteBorder className=' absolute top-0 right-0 text-2xl'/>
            <MdOutlinePreview className=' absolute top-10 right-0 text-2xl'/>
            </div>
            
            
        </div>
        <h4>Jordan Nike Shoes</h4>
        <div className='flex'>
        <p className='text-red-500'>$120</p>
        <p className='text-gray-500 line-through ml-2'>$120</p>
        </div>

        <div className='flex text-yellow-500 items-center'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <p className='text-gray-500 ml-2'>(88)</p>
        </div>
    </div>
    <div className='shadow-md p-3'>
        <div className="container w-56 bg-gray-100 p-1 rounded-sm">
            <div className='relative'>
            <Image
            src={img1}
            alt='ad' quality={100} placeholder='blur'
            className=' mx-auto w-9/12'
            >
            </Image>
            <div className='p-1 rounded-sm bg-red-500 text-white absolute top-0 text-sm'>
                -47%
            </div>
            <MdFavoriteBorder className=' absolute top-0 right-0 text-2xl'/>
            <MdOutlinePreview className=' absolute top-10 right-0 text-2xl'/>
            </div>
            
            
        </div>
        <h4>Jordan Nike Shoes</h4>
        <div className='flex'>
        <p className='text-red-500'>$120</p>
        <p className='text-gray-500 line-through ml-2'>$120</p>
        </div>

        <div className='flex text-yellow-500 items-center'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <p className='text-gray-500 ml-2'>(88)</p>
        </div>
    </div>
    <div className='shadow-md p-3'>
        <div className="container w-56 bg-gray-100 p-1 rounded-sm">
            <div className='relative'>
            <Image
            src={img1}
            alt='ad' quality={100} placeholder='blur'
            className=' mx-auto w-9/12'
            >
            </Image>
            <div className='p-1 rounded-sm bg-red-500 text-white absolute top-0 text-sm'>
                -47%
            </div>
            <MdFavoriteBorder className=' absolute top-0 right-0 text-2xl'/>
            <MdOutlinePreview className=' absolute top-10 right-0 text-2xl'/>
            </div>
            
            
        </div>
        <h4>Jordan Nike Shoes</h4>
        <div className='flex'>
        <p className='text-red-500'>$120</p>
        <p className='text-gray-500 line-through ml-2'>$120</p>
        </div>

        <div className='flex text-yellow-500 items-center'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <p className='text-gray-500 ml-2'>(88)</p>
        </div>
    </div>
    <div className='shadow-md p-3'>
        <div className="container w-56 bg-gray-100 p-1 rounded-sm">
            <div className='relative'>
            <Image
            src={img1}
            alt='ad' quality={100} placeholder='blur'
            className=' mx-auto w-9/12'
            >
            </Image>
            <div className='p-1 rounded-sm bg-red-500 text-white absolute top-0 text-sm'>
                -47%
            </div>
            <MdFavoriteBorder className=' absolute top-0 right-0 text-2xl'/>
            <MdOutlinePreview className=' absolute top-10 right-0 text-2xl'/>
            </div>
            
            
        </div>
        <h4>Jordan Nike Shoes</h4>
        <div className='flex'>
        <p className='text-red-500'>$120</p>
        <p className='text-gray-500 line-through ml-2'>$120</p>
        </div>

        <div className='flex text-yellow-500 items-center'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <p className='text-gray-500 ml-2'>(88)</p>
        </div>
    </div>
    <div className='shadow-md p-3'>
        <div className="container w-56 bg-gray-100 p-1 rounded-sm">
            <div className='relative'>
            <Image
            src={img1}
            alt='ad' quality={100} placeholder='blur'
            className=' mx-auto w-9/12'
            >
            </Image>
            <div className='p-1 rounded-sm bg-red-500 text-white absolute top-0 text-sm'>
                -47%
            </div>
            <MdFavoriteBorder className=' absolute top-0 right-0 text-2xl'/>
            <MdOutlinePreview className=' absolute top-10 right-0 text-2xl'/>
            </div>
            
            
        </div>
        <h4>Jordan Nike Shoes</h4>
        <div className='flex'>
        <p className='text-red-500'>$120</p>
        <p className='text-gray-500 line-through ml-2'>$120</p>
        </div>

        <div className='flex text-yellow-500 items-center'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <p className='text-gray-500 ml-2'>(88)</p>
        </div>
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
