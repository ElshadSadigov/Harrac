import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import backIcon from '../../../public/svgs/back-icon.svg'
import google from '../../../public/svgs/Google.svg'

const page = () => {
    return (
        <div>
            <Link href='/' className='flex items-center gap-[5px]'>
                <Image src={backIcon} alt='back icon' />
                <span className='text-[16px] font-medium text-[#050123]'>Geri</span>
            </Link>
            <div className='my-[50px] flex justify-between items-start'>
                <div className='flex flex-col'>
                    <span className='text-[24px] font-semibold text-[#050123]'>Hesab yarat</span>
                    <span className='text-[14px] text-[#44415a] mt-[5px]'>Biznes və ya fərdi</span>
                </div>
                <div>
                    <span className='text-[28px] font-extrabold text-[#1ea59a]'>HƏR</span>
                    <span className='text-[28px] font-extrabold text-[#050123]'>RAC.ORG</span>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-x-[45px] gap-y-[40px]'>
                <div className='flex flex-col'>
                    <label htmlFor="Ad" className='text-[16px] text-[#44415a]'>Ad</label>
                    <input type="text" id='Ad soyad' className='border-[1px] border-[#c1bfc8] mt-[5px] outline-none rounded-[8px] px-[16px] py-[10px] text-[15px]' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="Soyad" className='text-[16px] text-[#44415a]'>Soyad</label>
                    <input type="text" id='Soyad' className='border-[1px] border-[#c1bfc8] mt-[5px] outline-none rounded-[8px] px-[16px] py-[10px] text-[15px]' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="E-poçt" className='text-[16px] text-[#44415a]'>E-poçt</label>
                    <input type="email" id="E-poçt" className='border-[1px] border-[#c1bfc8] mt-[5px] outline-none rounded-[8px] px-[16px] py-[10px] text-[15px]' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="Telefon nömrəsi" className='text-[16px] text-[#44415a]'>Telefon nömrəsi</label>
                    <input type="text" id="Telefon nömrəsi" className='border-[1px] border-[#c1bfc8] mt-[5px] outline-none rounded-[8px] px-[16px] py-[10px] text-[15px]' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="Şifrə" className='text-[16px] text-[#44415a]'>Şifrə</label>
                    <input type="password" id='Şifrə' className='border-[1px] border-[#c1bfc8] mt-[5px] outline-none rounded-[8px] px-[16px] py-[10px] text-[15px]' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="Şifrə" className='text-[16px] text-[#44415a]'>Şifrəni təsdiqləyin</label>
                    <input type="password" id='Şifrə' className='border-[1px] border-[#c1bfc8] mt-[5px] outline-none rounded-[8px] px-[16px] py-[10px] text-[15px]' />
                </div>
            </div>
            <div className='my-[31px] flex items-center gap-[8px]'>
                <input type="checkbox" id="razi" className='w-[16px] h-[16px] cursor-pointer'/>
                <label htmlFor="razi" className='text-[12px] cursor-pointer'>
                    Mən bütün <Link href='/' className='text-[#1ea59a]'>Şərtlər</Link> və <Link href='/' className='text-[#1ea59a]'>Məxfilik siyasəti</Link> ilə razıyam
                </label>
            </div>
            <div className='grid grid-cols-2 gap-[45px]'>
                <button className='bg-[#1ea59a] rounded-[8px] w-full text-[16px] py-[10px] font-semibold text-[#fff]'>
                    Daxil ol
                </button>
                <button className='flex items-center justify-center gap-[8px] bg-[#2d3748] rounded-[8px] py-[10px] text-[#fff] font-semibold'>
                    <Image src={google} alt='google'/>
                    Google
                </button>
            </div>
            <div className='mt-[28px] flex items-center justify-center gap-[5px]'>
                <span className='text-[16px] text-[#2b2b2b]'>Artıq hesabınız var?</span>
                <Link href='/registration' className='text-[#1ea59a] text-[16px]'>Daxil ol</Link>
            </div>
        </div>
    )
}

export default page
