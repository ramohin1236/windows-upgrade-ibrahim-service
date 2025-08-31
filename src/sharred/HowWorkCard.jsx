import Image from 'next/image'
import React from 'react'

const HowWorkCard = ({item}) => {
  return (
    <div className="relative shadow-md rounded-lg p-4 flex flex-col items-start hover:shadow-lg transition transform duration-300 hover:scale-105 cursor-pointer pl-8 py-8 gap-4 bg-white overflow-hidden">
  {/* Gradient Overlay (background decoration only) */}
  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-200 pointer-events-none"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col gap-4">
    <Image src={item.icon} alt={item.cateName} />
    <h4 className="text-2xl font-medium">{item.cateName}</h4>
    <p>{item.providers}</p>
  </div>
</div>

  )
}

export default HowWorkCard