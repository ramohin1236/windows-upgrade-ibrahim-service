import Image from 'next/image'
import React from 'react'

const CateCard = ({item}) => {
    console.log(item)
  return (
    <div className='border-2 border-[#115E59] rounded-lg p-4 flex items-center hover:shadow-lg transition transform duration-300 hover:scale-101 cursor-pointer pl-8 py-8 gap-4'>
        <div>
            <Image src={item.icon} alt={item.cateName} height={60} />
        </div>
        <div className='flex flex-col gap-2 mt-3'>
            <h5 className='text-[#1F2937] text-xl font-semibold'>{item.cateName}</h5>
            <p className='text-[#6B7280] text-md'> {item.providers}</p>
        </div>
    </div>
  )
}

export default CateCard