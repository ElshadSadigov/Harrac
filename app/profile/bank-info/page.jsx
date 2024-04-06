import React from 'react'
import '../../../public/css/style.css'
import plusIcon from '../../../public/svgs/plus-icon.svg'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className='flex md:justify-start justify-center'>
        <span className='md:text-[26px] text-[22px] text-[#050123] font-medium'>Bank Məlumatları</span>
      </div>
      <div className='grid md:grid-cols-2 gap-x-[32px] md:gap-y-[50px] gap-y-[30px] mt-[30px]'>
        <input
          type="number"
          placeholder='Kart nömrəsi'
          className='md:text-[16px] text-[14px] py-[16px] px-[20px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px]' />
        <input
          type="text"
          placeholder='Ad və soyadınızı daxil edin'
          className='md:text-[16px] text-[14px] py-[16px] px-[20px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px]' />
        <input
          type="date"
          className='md:text-[16px] text-[14px] py-[16px] px-[20px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px]' />
        <input
          type="number"
          placeholder='CVV'
          className='md:text-[16px] text-[14px] py-[16px] px-[20px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px]' />
      </div>
      <div className='mt-[50px] flex items-center gap-[33px]'>
        <button className='md:px-[38px] px-[32px] md:py-[15px] py-[13px] bg-[#1ea59a] md:text-[18px] text-[16px] text-[#fff] rounded-[8px]'>Yadda saxla</button>
        <button className='flex items-center gap-[5px] md:px-[27px] px-[23px] md:py-[15px] py-[13px] border-[2px] border-[#1ea59a] rounded-[8px] text-[18px]'>
          <Image src={plusIcon} alt='Plus icon' />
          <span className='md:text-[18px] text-[16px] text-[#050123]'>Kart əlavə et</span>
        </button>
      </div>
    </div>
  )
}

export default page
