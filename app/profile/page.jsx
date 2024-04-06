import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-[50px] '>
            <div className='flex md:justify-start justify-center'>
                <span className='md:text-[26px] text-[22px] font-medium text-[#050123]'>Hesab Təfərrüatları</span>
            </div>
            <div className='grid grid-cols-2 gap-x-[32px]  '>
                <div className='flex flex-col '>
                    <label htmlFor="Ad" className='md:text-[18px] text-[16px] text-[#44415a]'>Ad</label>
                    <input type="text" id='Ad' placeholder='Adınızı daxil edin' className='mt-[10px] px-[20px] py-[16px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] md:text-[16px] text-[14px]' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="Soyad" className='md:text-[18px] text-[16px] text-[#44415a] '>Soyad</label>
                    <input type="text" id='Soyad' placeholder='Soyadınızı daxil edin' className='mt-[10px] px-[20px] py-[16px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] md:text-[16px] text-[14px]' />
                </div>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="E-poçt" className='md:text-[18px] text-[16px] text-[#44415a]'>E-poçt ünvanı</label>
                <input type="email" id="E-poçt" placeholder='E-poçt ünvanınızı daxil edin' className='mt-[10px] px-[20px] py-[16px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] md:text-[16px] text-[14px]' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="Ünvan" className='md:text-[18px] text-[16px] text-[#44415a]'>Ünvan</label>
                <input type="text" id="Ünvan" placeholder='Ünvanınızı daxil edin' className='mt-[10px] px-[20px] py-[16px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] md:text-[16px] text-[14px]' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="Şifrə" className='md:text-[18px] text-[16px] text-[#44415a]'>Şifrə</label>
                <input type="password" id="Şifrə" placeholder='Şifrənizi daxil edin' className='mt-[10px] px-[20px] py-[16px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] md:text-[16px] text-[14px]' />
            </div>
            <div>
                <button className='md:px-[38px] px-[32px] md:py-[15px] py-[13px] bg-[#1ea59a] md:text-[18px] text-[16px] text-[#fff] rounded-[8px]'>Yadda saxla</button>
            </div> </div>
    )
}

export default page
