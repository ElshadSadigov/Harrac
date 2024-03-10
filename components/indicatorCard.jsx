import Image from 'next/image'
import React from 'react'

const IndicatorCard = ({img, number, text}) => {
  return (
    <div className='shadow-xl rounded-[16px] px-[36px] py-[35px] flex items-center gap-[20px]'>
      <div>
        <Image src={img} alt='img' className='w-[70px] h-[70px]'/>    
      </div>
      <div className='flex flex-col'>
        <span className='text-[32px] font-semibold text-[#050123]'>{number}</span>
        <span className='text-[16px] text-[#828091] font-semibold'>{text}</span>
      </div>
    </div>
  )
}

export default IndicatorCard
