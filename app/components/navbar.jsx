import React from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex justify-around border-b-2 pb-5'>
        <h2 className='text-xl font-bold'>
            Exclusive
        </h2>
        <ul className='flex justify-around items-center'>
            <li className='mx-2 active underline'>Home</li>
            <li className='mx-2'>Contact</li>
            <li className='mx-2'>About</li>
            <li className='mx-2'>Signup</li>
        </ul>

        <div className="flex items-center">
        <div className="relative">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="border border-gray-300 rounded-md py-2 pl-10 pr-4 border-none focus:border-gray-200 w-full bg-gray-100 text-sm"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <CiSearch></CiSearch>
      </div>
    </div>
    <MdFavoriteBorder className="ml-5 text-2xl"></MdFavoriteBorder>
    <Link href={`/shoppingcart`}><MdOutlineShoppingCart  className="ml-2 text-2xl"></MdOutlineShoppingCart  ></Link>
    
        </div>
    </nav>
  )
}
