import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import '../../public/css/style.css'

const page = () => {
    return (
        <div className='flex flex-col items-start w-full max-w-[1500px] mx-auto'>
            <div className='md:px-[80px] px-[16px] py-[23px] w-[100%] flex items-center justify-between border-b-[1px] border-[#D9D9DE]'>
                <div className='flex items-center gap-[5px]'>
                    <span className='md:text-[18px] text-[16px] font-medium text-[#050123]'>Ana səhifə</span>
                    <span className='md:text-[18px] text-[16px] font-medium text-[#050123]'>/</span>
                    <span className='md:text-[18px] text-[16px] font-medium text-[#050123]'>Ödəniş</span>
                </div>
                <Link href='/' className='flex items-center gap-[5px]'>
                    <Image src={backIcon} alt='back icon' />
                    <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Geri</span>
                </Link>
            </div>
            <div className='md:px-[80px] px-[16px] w-[100%] mt-[84px] '>
                <div className='py-[10px] border-b-[1px] border-[#ccc]'>
                    <span className='text-[#2b2b2b] font-medium text-[24px]'>Kartla ödə</span>
                </div>
                <div className='mt-[50px]'>
                    <div>
                        <span className='text-[18px] text-[#2b2b2b]'>Şəxsi məlumat</span>
                        <div className='grid md:grid-cols-2 gap-[32px] mt-[16px]'>
                            <input type="text" placeholder='Ad' className='px-[16px] py-[18px] text-[16px] outline-none border-[1px] border-[#ccc] border-opacity-75 rounded-[8px]' />
                            <input type="email" placeholder='E-poçt' className='px-[16px] py-[18px] text-[16px] outline-none border-[1px] border-[#ccc] border-opacity-75 rounded-[8px]' />
                            <input type="number" placeholder='Telefon nömrəsi' className='px-[16px] py-[18px] text-[16px] outline-none border-[1px] border-[#ccc] border-opacity-75 rounded-[8px]' />
                            <input type="text" placeholder='Soyad' className='px-[16px] py-[18px] text-[16px] outline-none border-[1px] border-[#ccc] border-opacity-75 rounded-[8px]' />
                        </div>
                    </div>
                    <div className='mt-[50px]'>
                        <span className='text-[18px] text-[#2b2b2b]'>Kart məlumatı</span>
                        <div className='grid md:grid-cols-2 gap-[32px] mt-[16px]'>
                            <input type="number" placeholder='Kart nömrəsi' className='px-[16px] py-[18px] text-[16px] outline-none border-[1px] border-[#ccc] border-opacity-75 rounded-[8px]' />
                            <input type="text" placeholder='Ad və soyad' className='px-[16px] py-[18px] text-[16px] outline-none border-[1px] border-[#ccc] border-opacity-75 rounded-[8px]' />
                            <input type="number" placeholder='CVV' className='px-[16px] py-[18px] text-[16px] outline-none border-[1px] border-[#ccc] border-opacity-75 rounded-[8px]' />
                            <input type="number" placeholder='MM/YY' className='px-[16px] py-[18px] text-[16px] outline-none border-[1px] border-[#ccc] border-opacity-75 rounded-[8px]' />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className='md:px-[80px] px-[16px] md:my-[120px] my-[80px]'>
                <button className='px-[31px] py-[18px] rounded-[8px] bg-[#29cb57] text-[16px] text-[#fff] font-semibold'>Ödənişi tamamla</button>
            </div>
        </div>
    )
}

export default page
