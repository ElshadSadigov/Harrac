import React from 'react'
import aboutTitle from '../public/svgs/about-title.svg'
import fullStar from '../public/svgs/full-star.svg'
import Image from 'next/image'
import Link from 'next/link'

const AboutCard = () => {
  return (
    <div className='shadow-2xl px-[75px] py-[40px] rounded-[24px] flex flex-col items-center'>
      <Image src={aboutTitle} alt='About title'/>
      <p className='mt-[30px] font-medium text-[#828091] text-center'>Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah</p>
      <div className='flex gap-[5px] my-[15px]'>
        <Image src={fullStar} alt='Full star' />
        <Image src={fullStar} alt='Full star' />
        <Image src={fullStar} alt='Full star' />
        <Image src={fullStar} alt='Full star' />
        <Image src={fullStar} alt='Full star' />
      </div>
      <Link href='/' className='text-[14px] font-semibold text-[#23a6f0]'>Sandhika Galih</Link>
      <Link href='/' className='mt-[15px] text-[#050123] text-[14px]'>Dosen di WPU</Link>
    </div>
  )
}

export default AboutCard
