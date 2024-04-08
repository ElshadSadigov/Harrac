import React from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import google from '../../public/svgs/Google.svg'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
    return (
        <div>
            <Link href='/' className='flex items-center gap-[5px]'>
                <Image src={backIcon} alt='back icon' />
                <span className='text-[16px] font-medium text-[#050123]'>Geri</span>
            </Link>
            
            <div className='my-[50px] md:flex md:justify-between  md:items-start'>
                <div className='flex justify-between  md:flex md:flex-col '>
                    <span className='text-[24px] font-semibold text-[#050123]'>Daxil ol</span>
                    <span className='text-[14px] text-[#44415a] mt-[5px]'>Biznes və ya fərdi</span>
                </div>
                <div className='hidden md:block'>
                    <span className='text-[28px] font-extrabold text-[#1ea59a]'>HƏR</span>
                    <span className='text-[28px] font-extrabold text-[#050123]'>RAC.ORG</span>
                </div>
            </div>
            <div className=' flex flex-col md:grid md:grid-cols-2 md:gap-x-[45px] md:gap-y-[40px] mt-[45px]'>     
                <div className='flex flex-col'>
                    <label htmlFor="E-poçt" className='text-[16px] text-[#44415a]'>E-poçt</label>
                    <input type="email" id="E-poçt" className='border-[1px] border-[#c1bfc8] mt-[5px] outline-none rounded-[8px] px-[16px] py-[10px] text-[15px]' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="Şifrə" className='text-[16px] text-[#44415a]'>Şifrə</label>
                    <input type="password" id='Şifrə'  className='border-[1px] border-[#c1bfc8] mt-[5px] outline-none rounded-[8px] px-[16px] py-[10px] text-[15px]'/>
                </div>
            </div>
            <div className='mt-[16px] flex justify-between items-center'>
                <div className='flex items-start gap-[8px]'>
                    <input type="checkbox" id="Məni xatırla" className='w-[16px] h-[16px] cursor-pointer'/>
                    <label htmlFor="Məni xatırla" className='text-[12px] text-[#44415a] cursor-pointer'>Məni xatırla</label>
                </div>
                <Link href='/registration/forget' className='text-[12px] text-[#1ea59a]'>Şifrəni unutmusunuz?</Link>
            </div>
            <div className='mt-[60px] flex flex-col  md:grid  md:grid-cols-2  md:gap-[45px] '>
                <button className='bg-[#1ea59a] rounded-[8px] w-full text-[16px] py-[10px] font-semibold text-[#fff] '>
                    Daxil ol
                </button>
                <button className='flex items-center  justify-center gap-[8px] bg-[#2d3748] rounded-[8px] py-[10px] text-[#fff] font-semibold mt-6 md:mt-0'>
                    <Image src={google} alt='google'/>
                    Google
                </button>
            </div>
            <div className='mt-[28px] flex items-center justify-center gap-[5px]'>
                <span className='text-[16px] text-[#2b2b2b]'>Hesabınız yoxdur?</span>
                <Link href='/registration/sign-up' className='text-[16px] text-[#1ea59a]'>Qeydiyyatdan keçin</Link>
            </div>
        </div>
    )
}

export default page
