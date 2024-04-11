import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import '../../public/css/style.css'

const page = () => {
    return (
        <div className='w-full max-w-[1500px] mx-auto'>
            <div className='flex justify-between items-center md:px-[80px] px-[16px] py-[23px] border-b-[1px] border-[#D9D9DE]'>
                <div className='flex items-center gap-[5px]'>
                    <span className='md:text-[18px] text-[16px] font-medium text-[#050123]'>Ana səhifə</span>
                    <span className='md:text-[18px] text-[16px] font-medium text-[#050123]'>/</span>
                    <span className='md:text-[18px] text-[16px] font-medium text-[#050123]'>Hərrac elan et</span>
                </div>
                <Link href='/' className='flex items-center gap-[5px]'>
                    <Image src={backIcon} alt='back icon' />
                    <span className='md:text-[16px] text-[14px] font-medium text-[#050123]'>Geri</span>
                </Link>
            </div>
            <div className='md:px-[80px] px-[16px] md:py-[100px] py-[50px]'>
                <div className='flex flex-col items-center'>
                    <span className='text-[16px] text-[#1EA59A]'>Vaxt itirmədən indi başla</span>
                    <span className='md:text-[32px] text-[24px] font-medium text-[#050123] text-center'>HƏRRAC.ORG Hərrac: Unikal Fürsətləri Qaçırmayın!</span>
                    <p className='md:text-[18px] text-[16px] text-[#44415a] mt-[16px] text-center'>Hərrac keçirməklə özəl məhsulları sərfəli qiymətlərlə satmaq şansınız var, mövcud fürsətlərdən dəyərləndirin.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-x-[32px] gap-y-[48px] md:mt-[100px] mt-[50px]'>
                    <div className='flex flex-col'>
                        <label htmlFor="Hərracın Sahibi" className='md:text-[18px] text-[16px] text-[#44415a]'>Hərracın Sahibi</label>
                        <input type="text" id='Hərracın Sahibi' 
                        placeholder='Ad və soyadınızı daxil edin'
                        className='px-[20px] py-[16px] mt-[10px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] md:text-[16px] text-[14px]'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="Hərracın adı" className='md:text-[18px] text-[16px] text-[#44415a]'>Hərracın adı</label>
                        <input type="text" id='Hərracın adı' 
                        placeholder='Hərracın adını daxil edin'
                        className='px-[20px] py-[16px] mt-[10px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] md:text-[16px] text-[14px]'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="Hərracın məkanını daxil edin" className='md:text-[18px] text-[16px] text-[#44415a]'>Hərracın məkanı</label>
                        <input type="text" id='Hərracın məkanını daxil edin' 
                        placeholder='Hərracın məkanını daxil edin'
                        className='px-[20px] py-[16px] mt-[10px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] md:text-[16px] text-[14px]'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="Hərracın qiyməti" className='md:text-[18px] text-[16px] text-[#44415a]'>Hərracın qiyməti</label>
                        <input type="number" id='Hərracın qiyməti' 
                        placeholder='Hərracın məkanını daxil edin'
                        className='px-[20px] py-[16px] mt-[10px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] md:text-[16px] text-[14px] '
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="Hərracın şəkili" className='md:text-[18px] text-[16px] text-[#44415a]'>Hərracın şəkili</label>
                        <input type="file" id='Hərracın şəkili' 
                        placeholder='Hərracın şəkili daxil edin'
                        className='px-[20px] py-[16px] mt-[10px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] md:text-[16px] text-[14px] cursor-pointer'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="Hərracın vaxtı" className='md:text-[18px] text-[16px] text-[#44415a]'>Hərracın vaxtı</label>
                        <input type="date" id='Hərracın vaxtı' 
                        placeholder='Hərracın vaxtını daxil edin'
                        className='px-[20px] py-[16px] mt-[10px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] md:text-[16px] text-[14px] cursor-pointer'
                        />
                    </div>
                </div>
                <div className='my-[48px] flex flex-col'>
                    <label htmlFor="Hərracın detayları" className='md:text-[18px] text-[16px] text-[#44415a]'>Hərracın detayları</label>
                    <textarea id="Hərracın detayları" cols="30" rows="7" className='px-[20px] py-[16px] mt-[10px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] md:text-[16px] text-[14px]'></textarea>
                </div>
                <div>
                    <button className='px-[63px] py-[15px] bg-[#1ea59a] rounded-[8px] md:text-[18px] text-[16px] text-[#fff] font-medium'>Elan et</button>
                </div>
            </div>
        </div>
    )
}

export default page
