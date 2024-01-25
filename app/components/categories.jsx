"use client"

import React, { useRef } from 'react'

import { IoIosPhonePortrait } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";
import { IoWatch } from "react-icons/io5";
import { IoCamera } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";
import { useDraggable } from "react-use-draggable-scroll";

export default function Categories() {
    const ref = useRef();   
  const { events } = useDraggable(ref);
  const items = [
    {
    id:1,    
    icon:<IoIosPhonePortrait className='text-5xl'></IoIosPhonePortrait>,
    name:'Phones'    
},
{icon:<FaComputer className='text-5xl'></FaComputer>,
    name:'Computer'    
},
{
    id:2,
    icon:<IoWatch className='text-5xl'></IoWatch>,
    name:'Watches'    
},
{
    id:3,
    icon:<IoCamera className='text-5xl'></IoCamera>,
    name:'Camera'    
},
{
    id:4,
    icon:<FaHeadphones className='text-5xl'></FaHeadphones>,
    name:'HeadPhones'    
},
{
    id:5,
    icon:<IoIosPhonePortrait className='text-5xl'></IoIosPhonePortrait>,
    name:'Phones'    
},
  ]
  return (
    <div>
        <div className="mt-10 grid gap-x-6 grid-flow-col overflow-x-auto  hidescoll" {...events} ref={ref}>
        
            {
                items.map((item)=>(<div key={item.id} className="container w-56 px-18 py-12 rounded-sm border-2 border-gray-200 grid place-items-center hover:bg-slate-100 hover:border-gray-400">
                {item.icon}
                <p>{item.name}</p>
            </div>))
            }

               
             
    </div>


        <div className='flex justify-center'>
            <button className='py-2 px-10 mx-auto bg-red-500 text-white rounded mt-10'>View all Categories</button>
        </div>

        <div className='flex justify-center border-t-2 bg-gray-800 my-5 mr-10'>
        </div>
    </div>
  )
}
