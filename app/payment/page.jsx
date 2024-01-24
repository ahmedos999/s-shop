import React from 'react'
import { FaPaypal } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";

export default function Payment() {
  return (
        <div className="grid grid-cols-12">
            <div className='py-10 px-52 col-span-8'>
              <h2 className='font-main text-3xl font-bold mb-4'>Payment Details</h2>
            <h4>Payment method</h4>
            <div className='py-2 border-2 flex items-center justify-center font-bold my-2 border-gray-600'>
            <FaCreditCard className='text-blue-800 text-2xl mx-2'/>
                Debit or Credit Card
            </div>
            <div className='py-2 border-2 flex items-center justify-center font-bold'>
              <FaPaypal className='text-blue-800 text-2xl mx-2'/>
                Paypal
            </div>
            <p className='my-2'>Name on card</p>
            <input
        type="text"
        placeholder="Your name here"
        className="border border-gray-300 rounded-md py-2 pl-10 pr-4 border-1 focus:border-gray-200 w-full bg-gray-100 text-sm"
      />
      <p className='my-2'>Card Details</p>
            <input
        type="text"
        placeholder="XXXX XXXX XXXX XXXX"
        className="border border-gray-300 rounded-t-md py-2 pl-10 pr-4 border-1 border-b-gray-700 focus:border-gray-200 w-full bg-gray-100 text-sm"
      />
      <div className='flex'>
      <input
        type="text"
        placeholder="MM/YY"
        className="border basis-4/6 rounded-es-md border-gray-300 py-2 pl-10 pr-4 border-1  focus:border-gray-200 w-full bg-gray-100 text-sm"
      />
      <input
        type="text"
        placeholder="CVC"
        className="border basis-2/6 rounded-ee-md border-gray-300 py-2 pl-10 pr-4 border-1 focus:border-gray-200 w-full bg-gray-100 text-sm"
      />
      </div>
      <p className='my-2'>Billing address</p>
      <input
        type="text"
        placeholder="Address 1"
        className="border border-gray-300 rounded-md my-1 py-2 pl-1 pr-4 border-1  focus:border-gray-200 w-full bg-gray-100 text-sm"
      />



      <div className="flex">
      <input
        type="text"
        placeholder="Zip Code"
        className="border border-gray-300 rounded-md my-1 py-2 pl-2 pr-4 border-1 focus:border-gray-200 w-full bg-gray-100 text-sm"
      />
      <input
        type="text"
        placeholder="City"
        className="border border-gray-300 rounded-md my-1 py-2 pl-1 pr-4 border-1 mx-2 focus:border-gray-200 w-full bg-gray-100 text-sm"
      />
  <select placeholder='State' id="States" className="bg-gray-100 border rounded-md border-gray-300 text-sm my-1 py-2 pl-1 pr-4 focus:border-gray-200 w-full text-gray-400">
  <option  value="" disabled selected hidden>State</option>
    <option>United States</option>
    <option>Canada</option>
    <option>France</option>
    <option>Germany</option>
  </select>
      </div>



      <select id="countries" className="bg-gray-100 border rounded-md border-gray-300 text-sm my-1 py-2 pl-1 pr-4 focus:border-gray-200 w-full text-gray-400">
  <option  value="" disabled selected hidden>Country</option>
    <option>United States</option>
    <option>Canada</option>
    <option>France</option>
    <option>Germany</option>
  </select>
      <div className='text-center bg-red-500 p-2 rounded my-2 text-slate-50 '>
        Place order
      </div>
            </div>
            <div className='py-10 px-20 bg-gray-200 col-span-4'>
              <h2 className='text-xl my-2 font-semibold'>Order Summary</h2>
              <div className="flex justify-between mt-4">
              <p>Jordan nike shoes</p>
              <p>$16.00</p>
              </div>
              <p className='text-gray-600 py-2 border-b border-black'>Qty:1</p>
              <div className="flex my-2 py-2 border-b border-black">
              <p>Subtotal</p>
              <p>$16.00</p>
              </div>
              <div className="flex justify-between my-2">
              <p>Tax</p>
              <p>${16.00*15/100}</p>
              </div>
              <div className="flex justify-between font-semibold text-lg my-2">
              <p>Total</p>
              <p>${(16.00*15/100)+16.00}</p>
              </div>
            </div>
        </div>
  )
}
