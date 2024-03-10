import React from 'react'
import backIcon from '../../../public/svgs/back-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <Link href='/' className='flex items-center gap-[5px]'>
                <Image src={backIcon} alt='back icon' />
                <span className='text-[16px] font-medium text-[#050123]'>Geri</span>
            </Link>
            <div className='my-[50px] flex justify-between items-start'>
                <div className='flex flex-col'>
                    <span className='text-[24px] font-semibold text-[#050123]'>Daxil ol</span>
                    <span className='text-[14px] text-[#44415a] mt-[5px]'>Biznes və ya fərdi</span>
                </div>
                <div>
                    <span className='text-[28px] font-extrabold text-[#1ea59a]'>HƏR</span>
                    <span className='text-[28px] font-extrabold text-[#050123]'>RAC.ORG</span>
                </div>
            </div>
            <div className='mt-[100px] flex justify-center px-[100px]'>
                <div className='w-full'>
                    <div className='flex flex-col items-center'>
                        <span className='text-[24px] font-medium text-[#050123]'>Şifrənin bərpası</span>
                        <p className='mt-[5px] text-[#44415a] text-[16px]'>Şifrəni sıfırlamaq üçün e-mailinizi daxil edin</p>
                    </div>
                    <div className='mt-[50px] flex flex-col'>
                        <label htmlFor="E-poçt" className='text-[16px] text-[#44415a]'>E-poçt</label>
                        <input type="email" id="E-poçt" className='mt-[5px] px-[16px] py-[10px] w-full outline-none rounded-[8px] border-[1px] border-[#C1BFC8]'/>
                    </div>
                    <div className='mt-[30px] flex flex-col items-center'>
                        <button className='w-full bg-[#1ea59a] rounded-[8px] py-[10px] text-[16px] font-semibold text-[#fff]'>Parolu sıfırlamaq</button>
                        <Link href='/registration' className='mt-[15px] text-[14px] text-[#828091]announcement'>geri qayıdın</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
