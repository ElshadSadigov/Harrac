import React from 'react'
import aboutTitle from '../public/svgs/about-title.svg'
import fullStar from '../public/svgs/full-star.svg'
import Image from 'next/image'
import Link from 'next/link'

const AboutCard = () => {
  return (
    <div className=''>
      <div className='shadow-2xl px-[30px] md:px-[75px] py-[40px] rounded-[24px] flex flex-col md:flex md:flex-col md:items-center'>
        <div className='flex flex-col items-center '>
          <Image src={aboutTitle} alt='About title'/>
          <p className='mt-[30px] font-medium text-[#828091] md:text-center'>Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah</p>
        </div>
      <div className='flex gap-[5px] my-[15px]'>
        <Image src={fullStar} alt='Full star' />
        <Image src={fullStar} alt='Full star' />
        <Image src={fullStar} alt='Full star' />
        <Image src={fullStar} alt='Full star' />
        <Image src={fullStar} alt='Full star' />
      </div>
      <div className='flex justify-between items center md:flex md:flex-col'>
              <Link href='/' className='text-[14px] font-semibold text-[#23a6f0]'>Sandhika Galih</Link>
              <Link href='/' className='md:mt-[5px] text-[#050123] text-[14px]'>Dosen di WPU</Link>
      </div>
    </div>
    </div>

  )
}
export default AboutCard;
