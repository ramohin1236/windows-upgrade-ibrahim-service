import Image from 'next/image'
import React from 'react'

const HowWorkCard = ({item}) => {
  return (
    <div className='shadow-md rounded-lg p-4 flex flex-col items-left hover:shadow-lg transition transform duration-300 hover:scale-101 cursor-pointer pl-8 py-8 gap-4 bg-white'>
        <Image src={item.icon} alt={item.cateName} />
      <h4 className='text-2xl font-medium'>{item.cateName}</h4>
      <p>{item.providers}</p>
      
    </div>
  )
}

export default HowWorkCard