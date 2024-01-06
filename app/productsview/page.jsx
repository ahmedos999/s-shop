"use client"

import React from 'react'
import img1 from '../../public/jordan.png'
import img2 from '../../public/shoe1.png'
import img3 from '../../public/shoe8.png'
import img4 from '../../public/shoe3.png'
import img5 from '../../public/shoe4.png'
import img6 from '../../public/shoe5.png'
import img7 from '../../public/shoe6.png'


import { FaStar } from "react-icons/fa6";

import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlinePreview } from "react-icons/md";
import { useState } from 'react'

import Link from 'next/link';
import Image from 'next/image'


export default function Productsview() {

    const [rangeValue, setRangeValue] = useState(500);

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
    };
    const items = [
        {id:'1',name:'Jordan Nike Shoes',img:img1,price:120},
        {id:'2',name:'Black Nike Shoes',img:img2,price:140},
        {id:'3',name:'High Nike Shoes',img:img3,price:110},
        {id:'4',name:'Light Blue Nike Shoes',img:img4,price:144},
        {id:'5',name:'Blue Nike Shoes',img:img5,price:150},
        {id:'6',name:'Pink Nike Shoes',img:img6,price:160},
        {id:'7',name:'Gi Nike Shoes',img:img7,price:120},
    ]
  return (
    <>
    <div className='my-10 text-2xl mx-4'>Men's shoes</div>
    <div className="grid grid-cols-5 mx-10">
        <div className="filter">
            <h2 className='text-2xl font-bold border-b pb-1 mb-1'>Brands</h2>
            <ul>
                <li>
                    <div class="flex items-center justify-between">
                    <label for="default-checkbox" className="font-medium">Nike</label>
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                </li>
                <li>
                    <div class="flex items-center justify-between">
                    <label for="default-checkbox" className="font-medium">Adidas</label>
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                </li>
                <li>
                    <div class="flex items-center justify-between">
                    <label for="default-checkbox" className="font-medium">Puma</label>
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                </li>
                <li>
                    <div class="flex items-center justify-between">
                    <label for="default-checkbox" className="font-medium">All Star</label>
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                </li>
                <li>
                    <div class="flex items-center justify-between">
                    <label for="default-checkbox" className="font-medium">Vans</label>
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                </li>
            </ul>
            <h2 className='text-2xl font-bold border-b pb-1 mb-1'>Ratings</h2>
            <ul>
                <li className='my-2'>
                    <div class="flex items-center justify-between">
                    <label for="default-checkbox" className="font-medium text-yellow-500 flex"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></label>
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                </li>
                <li className='my-2'>
                    <div class="flex items-center justify-between">
                    <label for="default-checkbox" className="font-medium text-yellow-500 flex"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar className='text-gray-300'></FaStar></label>
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                </li>
                <li className='my-2'>
                    <div class="flex items-center justify-between">
                    <label for="default-checkbox" className="font-medium text-yellow-500 flex"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar className='text-gray-300'></FaStar><FaStar className='text-gray-300'></FaStar></label>
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                </li>
                <li className='my-2'>
                    <div class="flex items-center justify-between">
                    <label for="default-checkbox" className="font-medium text-yellow-500 flex"><FaStar></FaStar><FaStar></FaStar><FaStar className='text-gray-300'></FaStar><FaStar className='text-gray-300'></FaStar><FaStar className='text-gray-300'></FaStar></label>
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                </li>
            </ul>
            <h2 className='text-2xl font-bold my-2'>Prices range</h2>
            <div className="relative mb-6">
                <label for="labels-range-input" className="sr-only">Labels range</label>
                <input id="labels-range-input" type="range" value={rangeValue} min={100} max={1500} onChange={handleRangeChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
                <span className="text-xs text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($100)</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($1500)</span>
            </div>

            

                

        </div>
    <div className='grid grid-cols-4 gap-1 mx-6 col-span-4'>
        {
            items.map((e)=>
                (
                    <div className='shadow-md p-3' key={e.id}>
                    <div className="container bg-gray-100 p-1 rounded-sm">
                        <div className='relative h-36'>
                        <Link href={`/product`}>
                        <Image
                        src={e.img}
                        alt='ad' quality={100} placeholder='blur'
                        className=' mx-auto w-9/12 h-full'
                        >
                        </Image>
                        </Link>
                        <div className='p-1 rounded-sm bg-red-500 text-white absolute top-0 text-sm'>
                            -47%
                        </div>
                        <MdFavoriteBorder className=' absolute top-0 right-0 text-2xl'/>
                        <MdOutlinePreview className=' absolute top-10 right-0 text-2xl'/>
                        </div>
                        
                    </div>
                    <h4>{e.name}</h4>
                    <div className='flex items-center'>
                    <p className='text-red-500 font-bold'>${e.price}</p>
                    <p className='text-gray-500 line-through ml-2 text-sm'>$210</p>
                    </div>
            
                    <div className='flex text-yellow-500 items-center'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <p className='text-gray-500 ml-2 text-sm'>(88)</p>
                    </div>
                </div>
                )
            )
        }
    </div>
    </div>
    </>
  )
}
