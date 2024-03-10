import React from 'react'
import Image from 'next/image'
import logoPoint from '../public/svgs/Logo-point.svg'
import homeIcon from '../public/svgs/home-icon.svg'
import searchIcon from '../public/svgs/search-icon.svg'
import flagAZ from '../public/svgs/Flag-AZ.svg'
import downIcon from '../public/svgs/down-icon.svg'
import like from '../public/svgs/like.svg'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-[#eefafa] py-[23px] px-[80px] border-b-[1px] border-[#d9d9de] fixed left-0 top-0 w-full mx-auto z-50 flex justify-between items-center'>
      <Link href='/' className='flex items-start'>
          <span className='font-extrabold text-[30px] text-[#1EA59A]'>HƏR</span>
          <span className='font-extrabold text-[30px] text-[#050123]'>RAC.ORG</span>
          <Image src={logoPoint} alt='Logo point' className='mt-[11px] ms-[2px]'/>
      </Link>
      <div className='flex items-center'>
        <ul className='flex items-center gap-[40px] me-[150px]'>
          <li>
            <Link href='/'><Image src={homeIcon} alt='Home icon' /></Link>
          </li>
          <li>
            <Link href='/about'>Haqqında</Link>
          </li>
          <li>
            <Link href='/'>Xidmətlər</Link>
          </li>
          <li>
            <Link href='/rules'>Qaydalar</Link>
          </li>
          <li>
            <Link href='/contact'>Əlaqə</Link>
          </li>
        </ul>
        <div className='flex items-center gap-[20px]'>
          <Link href='/'>
            <Image src={searchIcon} alt='Search icon' />
          </Link>
          <div className='flex items-center cursor-pointer'>
              <Image src={flagAZ} alt='Flag-AZ' className='rounded-[50%] w-[25px] h-[25px]'/>
              <Image src={downIcon} alt='Down Icon' />
          </div>
          <Link href='/my-like'>
            <Image src={like} alt='Basket icon'/>
          </Link>
          <Link href='/registration' className='px-[20px] py-[10px] rounded-[8px] border-[1px] border-[#FF6B00] font-semibold text-[#FF6B00]'>
            Daxil ol
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
