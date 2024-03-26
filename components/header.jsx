"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import logoPoint from '../public/svgs/Logo-point.svg'
import homeIcon from '../public/svgs/home-icon.svg'
import searchIcon from '../public/svgs/search-icon.svg'
import searchIcon2 from '../public/svgs/search-icon2.svg'
import flagAZ from '../public/svgs/Flag-AZ.svg'
import downIcon from '../public/svgs/down-icon.svg'
import like from '../public/svgs/like.svg'
import Link from 'next/link'

const Header = () => {
  const [searchShow, setSearchShow] = useState(false)
  return (
    <div className='bg-[#eefafa] py-[23px] px-[80px] border-b-[1px] border-[#d9d9de] fixed z-[999] left-0 top-0 w-full mx-auto flex justify-between items-center'>
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
            <Link href='/products'>Məhsullar</Link>
          </li>
          <li>
            <Link href='/rules'>Qaydalar</Link>
          </li>
          <li>
            <Link href='/contact'>Əlaqə</Link>
          </li>
        </ul>
        <div className='flex items-center gap-[20px]'>
          <div className='cursor-pointer relative'>
            <Image src={searchIcon} alt='Search icon' onClick={()=>setSearchShow(!searchShow)}/>
            { searchShow ?
              <div className='absolute left-[-10px] top-[35px] pe-[5px] py-[5px] ps-[17px] w-[250px] rounded-[8px] bg-[#fff] flex items-center justify-between shadow-md'>
              <input type="text" placeholder='Axtar...' className='w-[80%] outline-none text-[16px]'/>
              <Image src={searchIcon2} alt='search icon'/>
            </div> : null
            }
          </div>
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
