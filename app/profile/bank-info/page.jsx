import React from 'react'
import '../../../public/css/style.css'
import plusIcon from '../../../public/svgs/plus-icon.svg'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <div className='grid grid-cols-2 gap-x-[32px] gap-y-[50px]'>
            <input type="number" placeholder='Kart nömrəsi' className='py-[16px] px-[20px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px]'/>
            <input type="text" placeholder='Ad və soyadınızı daxil edin' className='py-[16px] px-[20px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px]'/>
            <input type="date" className='py-[16px] px-[20px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px]'/>
            <input type="number" placeholder='CVV' className='py-[16px] px-[20px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px]'/>
        </div>
        <div className='mt-[50px] flex items-center gap-[33px]'>
            <button className='px-[38px] py-[15px] bg-[#1ea59a] text-[18px] text-[#fff] rounded-[8px]'>Yadda saxla</button>
            <button className='flex items-center gap-[5px] px-[27px] py-[15px] border-[2px] border-[#1ea59a] rounded-[8px] text-[18px]'>
                <Image src={plusIcon} alt='Plus icon'/>
                <span>Kart əlavə et</span>
            </button>
        </div>
    </div>
  )
}

export default page
