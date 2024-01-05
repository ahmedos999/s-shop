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

import Link from 'next/link';
import Image from 'next/image'


export default function Productsview() {
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
    <div className='mx-4'><ul className='flex gap-2'>
        <li className='bg-gray-200 rounded-3xl px-3'>Price</li>
        <li className='bg-gray-200 rounded-3xl px-3'>Review</li>
        <li className='bg-gray-200 rounded-3xl px-3'>Color</li>
        <li className='bg-gray-200 rounded-3xl px-3'>Offer</li>
    </ul></div>
    <div className='grid grid-cols-5 gap-1 mx-6'>
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
                    <div className='flex'>
                    <p className='text-red-500'>$ {e.price}</p>
                    <p className='text-gray-500 line-through ml-2'>$210</p>
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
                )
            )
        }
    </div>
    </>
  )
}
