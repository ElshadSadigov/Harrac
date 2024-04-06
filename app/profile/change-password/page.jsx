import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col md:gap-y-[50px] gap-y-[30px]'>
      <div className='flex md:justify-start justify-center'>
        <span className='md:text-[26px] text-[22px] text-[#050123] font-medium'>Şifrə dəyişikliyi</span>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="Cari şifrə" className='md:text-[18px] text-[16px] text-[#44415a]'>Cari şifrə</label>
        <input type="password" id="Cari şifrə" placeholder='*********' className='text-[16px] px-[20px] py-[16px] outline-none border-[1px] border-[#c1bfc8] rounded-[8px] mt-[10px]' />
      </div>
      <div className='flex flex-col '>
        <label htmlFor="Yeni şifrə" className='md:text-[18px] text-[16px] text-[#44415a]'>Yeni şifrə</label>
        <input type="password" id="Yeni şifrə" placeholder='Yeni şifrəni daxil edin' className='text-[16px] px-[20px] py-[16px] outline-none border-[1px] border-[#c1bfc8] rounded-[8px] mt-[10px]' />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="Yeni şifrəni təstiqlə" className='md:text-[18px] text-[16px] text-[#44415a]'>Yeni şifrəni təstiqlə</label>
        <input type="password" id="Yeni şifrəni təstiqlə" placeholder='Yeni şifrəni daxil edin' className=' text-[16px] px-[20px] py-[16px] outline-none border-[1px] border-[#c1bfc8] rounded-[8px] mt-[10px]' />
      </div>
      <div>
        <button className='px-[38px] py-[15px] md:text-[18px] text-[16px] text-[#fff] bg-[#1ea59a] rounded-[8px]'>Yadda saxla</button>
      </div>
    </div>
  )
}

export default page
