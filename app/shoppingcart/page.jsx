import React from 'react'
import img from '../../public/jordan.png'
import Image from 'next/image'

export default function ShoppingCart() {

    
  return (
    <div className='m-10'>
        <h2 className='my-10 text-3xl font-main font-bold rounded-sm'>You shopping Cart (3)</h2>
        <div className="grid grid-cols-12">
            
            <div className='col-span-8'>
            <div className=' flex items-center justify-between shadow-lg px-2'>
            <Image src={img} height={200}></Image>
            <div className='font-semibold'>
                <h2>Jordan Nike shoes</h2>
                <h2 className='flex items-center'>Color: <span><div className='bg-red-500 h-2 w-2  rounded-full p-2 mx-2'></div></span></h2>
                <h2>Size: 40</h2>
            </div>
            <div className='ml-20'>
                <h2>Unit Price</h2>
                <p className='text-center text-red-500'>$149</p>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                <button className='w-10 h-10 border p-2 ml-4 rounded-s hover:bg-slate-100' >-</button>
                <div className='w-10 h-10 border p-2 text-center'>0</div>
                <button className='w-10 h-10 border p-2 rounded-e hover:bg-slate-100'>+</button>
                </div>
                
            </div>
            <div>
                <h2 className='font-bold'>Total Price</h2>
                <p className='text-center text-red-500 font-bold'>$149.00</p>
            </div>
            </div>
            <div className=' flex items-center justify-between shadow-lg px-2'>
            <Image src={img} height={200}></Image>
            <div className='font-semibold'>
                <h2>Jordan Nike shoes</h2>
                <h2 className='flex items-center'>Color: <span><div className='bg-red-500 h-2 w-2  rounded-full p-2 mx-2'></div></span></h2>
                <h2>Size: 40</h2>
            </div>
            <div className='ml-20'>
                <h2>Unit Price</h2>
                <p className='text-center text-red-500'>$149</p>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                <button className='w-10 h-10 border p-2 ml-4 rounded-s hover:bg-slate-100' >-</button>
                <div className='w-10 h-10 border p-2 text-center'>0</div>
                <button className='w-10 h-10 border p-2 rounded-e hover:bg-slate-100'>+</button>
                </div>
                
            </div>
            <div>
                <h2 className='font-bold'>Total Price</h2>
                <p className='text-center text-red-500 font-bold'>$149.00</p>
            </div>
            </div>
            <div className=' flex items-center justify-between shadow-lg px-2'>
            <Image src={img} height={200}></Image>
            <div className='font-semibold'>
                <h2>Jordan Nike shoes</h2>
                <h2 className='flex items-center'>Color: <span><div className='bg-red-500 h-2 w-2  rounded-full p-2 mx-2'></div></span></h2>
                <h2>Size: 40</h2>
            </div>
            <div className='ml-20'>
                <h2>Unit Price</h2>
                <p className='text-center text-red-500'>$149</p>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                <button className='w-10 h-10 border p-2 ml-4 rounded-s hover:bg-slate-100' >-</button>
                <div className='w-10 h-10 border p-2 text-center'>0</div>
                <button className='w-10 h-10 border p-2 rounded-e hover:bg-slate-100'>+</button>
                </div>
                
            </div>
            <div>
                <h2 className='font-bold'>Total Price</h2>
                <p className='text-center text-red-500 font-bold'>$149.00</p>
            </div>
            </div>
            </div>
            
            <div className='col-span-4 mx-4 px-4 shadow-lg flex flex-col justify-between self-start'>
            <div className='flex justify-between border-b my-4'>
            <h2 className='text-lg '>SubTotal</h2>
            <p className='text-lg'>$149.00</p>
            </div>
            <div className='flex justify-between border-b my-4'>
            <h2 className='text-lg '>Tax %15</h2>
            <p className='text-lg'>${149*15/100}</p>
            </div>
            <div className='flex justify-between my-4 font-bold'>
            <h2 className='text-2xl font-main    text-red-500'>Total</h2>
            <p className='text-lg'>${(149*15/100)+149}</p>
            </div>

            <div className='text-center my-2 bg-red-500 text-white p-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105'>
            proceed to payment
            </div>
            
            </div>
        </div>
    </div>
  )
}
