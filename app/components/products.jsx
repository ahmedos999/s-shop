import React from 'react'

export default function ProductsHeader() {
  return (
    <div className='mt-10'>
        <div className='flex text-lg font-bold'>
            <div className='bg-red-500 w-2 rounded-sm'></div>
            <h5 className='ml-2 text-red-500'>Today's</h5>
            
        </div>
        
        <div className="flex text-3xl font-bold mt-5">
        <h2>Flash Sales</h2>
        <h2 className='ml-10 '>03 : 23 : 19 : 56</h2>
        </div>
        
    </div>
  )
}
