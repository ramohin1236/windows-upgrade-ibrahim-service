import Image from 'next/image'
import React from 'react'

const ServiceCard = ({data}) => {
    console.log(data)
  return (
    <div className='flex flex-col gap-4 shadow-xl rounded-md p-6'>
        <div className='flex justify-between items-center'>
            <p className='text-xl font-semibold'>{data.serviceName}</p>
            <p className='text-xl font-semibold'>{data.price}</p>
        </div>

        <div className='flex flex-col gap-1.5'>
            <p className='text-[#115E59] flex items-center gap-1.5'>{data.mapIcon} <span className='text-[#6B7280] text-sm'>{data.place}</span></p>
            <p className='text-[#115E59] flex items-center gap-1.5'>{data.calenderIcon} <span className='text-[#6B7280] text-sm'>{data.city}</span></p>
            <p className='text-[#115E59] flex items-center gap-1.5'>{data.monthIcon} <span className='text-[#6B7280] text-sm'>{data.month}</span></p>
        </div>

        <div className='flex gap-1.5 items-center'>
            <div>
                <Image src={data.userImaage.src} alt='iamge' width={80} height={80}/>
            </div>

            <div className='flex gap-1 flex-col'>
                <p className='text-base font-semibold'>{data.userName}</p>
                <p className='text-base text-[115E59]'> {data.open}</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard