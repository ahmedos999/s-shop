import Image from 'next/image'
import React from 'react'
import img1 from '../../public/ps.png'
import { FaStar } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlinePreview } from "react-icons/md";

export default function Productlist() {
  return (
    <div className="mt-10 flex justify-between">
    <div className=''>
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
        <h4>Playstation 4 controller</h4>
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
    <div className=''>
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
        <h4>Playstation 4 controller</h4>
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
    <div className=''>
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
        <h4>Playstation 4 controller</h4>
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
    <div className=''>
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
        <h4>Playstation 4 controller</h4>
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
    <div className=''>
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
        <h4>Playstation 4 controller</h4>
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
  )
}
