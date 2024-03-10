import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import '../../public/css/style.css'

const page = () => {
    return (
        <div>
            <div className='flex justify-between items-center px-[80px] py-[23px] border-b-[1px] border-[#D9D9DE]'>
                <div className='flex items-center gap-[5px]'>
                    <span className='text-[16px] font-medium text-[#050123]'>Ana səhifə</span>
                    <span className='text-[16px] font-medium text-[#050123]'>/</span>
                    <span className='text-[16px] font-medium text-[#050123]'>Hərrac elan et</span>
                </div>
                <Link href='/' className='flex items-center gap-[5px]'>
                    <Image src={backIcon} alt='back icon' />
                    <span className='text-[16px] font-medium text-[#050123]'>Geri</span>
                </Link>
            </div>
            <div className='px-[80px] py-[100px]'>
                <div className='flex flex-col items-center'>
                    <span className='text-[16px] text-[#1EA59A]'>Vaxt itirmədən indi başla</span>
                    <span className='text-[32px] font-medium text-[#050123]'>HƏRRAC.ORG Hərrac: Unikal Fürsətləri Qaçırmayın!</span>
                    <p className='text-[18px] text-[#44415a] mt-[16px]'>Hərrac keçirməklə özəl məhsulları sərfəli qiymətlərlə satmaq şansınız var, mövcud fürsətlərdən dəyərləndirin.</p>
                </div>
                <div className='grid grid-cols-2 gap-x-[32px] gap-y-[48px] mt-[100px]'>
                    <div className='flex flex-col'>
                        <label htmlFor="Hərracın Sahibi" className='text-[18px] text-[#44415a]'>Hərracın Sahibi</label>
                        <input type="text" id='Hərracın Sahibi' 
                        placeholder='Ad və soyadınızı daxil edin'
                        className='px-[20px] py-[16px] mt-[10px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] text-[16px]'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="Hərracın adı" className='text-[18px] text-[#44415a]'>Hərracın adı</label>
                        <input type="text" id='Hərracın adı' 
                        placeholder='Hərracın adını daxil edin'
                        className='px-[20px] py-[16px] mt-[10px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] text-[16px]'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="Hərracın məkanını daxil edin" className='text-[18px] text-[#44415a]'>Hərracın məkanı</label>
                        <input type="text" id='Hərracın məkanını daxil edin' 
                        placeholder='Hərracın məkanını daxil edin'
                        className='px-[20px] py-[16px] mt-[10px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] text-[16px]'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="Hərracın qiyməti" className='text-[18px] text-[#44415a]'>Hərracın qiyməti</label>
                        <input type="number" id='Hərracın qiyməti' 
                        placeholder='Hərracın məkanını daxil edin'
                        className='px-[20px] py-[16px] mt-[10px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] text-[16px] '
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="Hərracın şəkili" className='text-[18px] text-[#44415a]'>Hərracın şəkili</label>
                        <input type="text" id='Hərracın şəkili' 
                        placeholder='Hərracın şəkili daxil edin'
                        className='px-[20px] py-[16px] mt-[10px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] text-[16px] '
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="Hərracın vaxtı" className='text-[18px] text-[#44415a]'>Hərracın vaxtı</label>
                        <input type="date" id='Hərracın vaxtı' 
                        placeholder='Hərracın vaxtını daxil edin'
                        className='px-[20px] py-[16px] mt-[10px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] text-[16px] cursor-pointer'
                        />
                    </div>
                </div>
                <div className='my-[48px] flex flex-col'>
                    <label htmlFor="Hərracın detayları" className='text-[18px] text-[#44415a]'>Hərracın detayları</label>
                    <textarea id="Hərracın detayları" cols="30" rows="7" className='px-[20px] py-[16px] mt-[10px] outline-none border-[1px] border-[#C1BFC8] rounded-[8px] text-[16px]'></textarea>
                </div>
                <div>
                    <button className='px-[63px] py-[15px] bg-[#1ea59a] rounded-[8px] text-[18px] text-[#fff] font-medium'>Elan et</button>
                </div>
            </div>
        </div>
    )
}

export default page
