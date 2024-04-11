import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import trash from '../../public/svgs/trash.svg'
import Card from '@/components/card'

const page = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className='max-w-[1500px] mx-auto w-full'>
        <div className='md:px-[80px] px-[16px] py-[23px] w-full flex justify-between items-center border-b-[1px] border-[#D9D9DE]'>
            <div className='flex items-center gap-[5px]'>
                <span className='md:text-[18px]  text-[#050123] font-medium'>Ana səhifə</span>
                <span className='md:text-[18px] text-[16px] text-[#050123] font-medium'>/</span>
                <span className='md:text-[18px] text-[16px] text-[#050123] font-medium'>Bəyəndiklərim</span>
            </div>
            <Link href='/' className='flex items-center gap-[5px]'>
                <Image src={backIcon} alt='back icon'/>
                <span className='text-[#050123] md:text-[16px] text-[14px] font-medium'>Geri</span>
            </Link>
        </div>
        <div className='md:px-[80px] px-[16px] flex justify-between items-center py-[30px]'>
            <span className='text-[16px] font-medium text-[#44415a]'>8 Məhsul</span>
            <button className='flex items-center gap-[8px] text-[16px] font-medium text-[#050123] underline'>
                Sil
                <Image src={trash} alt='trash'/>
            </button>
        </div>
        <div className='flex flex-wrap justify-center gap-[32px] md:px-[80px] px-[16px] mb-[120px]'>
            {
                data.map(item =>{
                    return <Card key={item}/>
                })
            }
        </div>
    </div>
  )
}

export default page
