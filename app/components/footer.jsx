import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-gray-900 grid grid-cols-4 gap-2 mt-4 p-4 text-white'>
        <div>
            <h2 className='font-main text-3xl'>Exclusive</h2>
            <p className='text-lg my-2'>Follow us to no not miss promotinal news</p>
            <p className='text-lg my-2'>Follow us on</p>
            <div className='flex'>
                <div className='bg-slate-50 p-1 rounded-full hover:rotate-180 duration-300 '><FaFacebookF className="text-xl  text-red-500 "></FaFacebookF></div>
                <div className='bg-slate-50 ml-5 p-1 rounded-full hover:rotate-180 duration-300 '><FaTwitter className="text-xl  text-red-500 "></FaTwitter></div>
                <div className='bg-slate-50 ml-5 p-1 rounded-full hover:rotate-180 duration-300 '><FaInstagram className="text-xl  text-red-500 "></FaInstagram></div>
                <div className='bg-slate-50 ml-5 p-1 rounded-full hover:rotate-180 duration-300 '><FaTiktok className="text-xl  text-red-500 "></FaTiktok></div>  
                </div>
        </div>
        <div>
            <h2 className='font-bold text-lg'>Information</h2>
            <ul className='my-4 text-gray-400'>
                <li>About</li>
                <li>FAQs</li>
                <li>Shipment</li>
                <li>Blog</li>
            </ul>
        </div>
        <div>
        <h2 className='font-bold text-lg'>My Account</h2>
            <ul className='my-4 text-gray-400'>
                <li>Shopping Cart</li>
                <li>Wishlist</li>
                <li>Contact us</li>
                <li>Terms & agreement</li>
            </ul>
        </div>
        <div>
        <h2 className='font-bold text-lg'>About us</h2>
        <p className='text-gray-400 my-4'>
            We are online shopping service provider where you can browse view & buy item with the best prices and offers,
        </p>
        <div className='bg-red-500 text-slate-50 p-2 rounded font-bold box-content w-fit hover:bg-slate-50 hover:text-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'><p>Get in touch with us</p></div>
        </div>
    </div>
  )
}
