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
import openIcon from '../public/svgs/open-icon.svg'
import closeIcon from '../public/svgs/close-icon.svg'
import peopleIcon from '../public/svgs/people-icon.svg'
import Link from 'next/link'

const Header = () => {
  const [searchShow, setSearchShow] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [mobileLan, setMobileLan] = useState(false)
  return (
    <div>
      <div className='fixed z-[998] left-[50%] top-0 translate-x-[-50%] w-full max-w-[1500px] mx-auto bg-[#eefafa]'>
        <div className='py-[23px] xl:px-[80px] lg:px-[40px] md:px-[20px] px-[16px] border-b-[1px] border-[#d9d9de] flex justify-between items-center'>
          <button onClick={() => setOpenMenu(!openMenu)} className='md:hidden'>
            <Image src={openIcon} alt='open icon' />
          </button>
          <Link href='/' className='flex items-start'>
            <span className='font-extrabold lg:text-[30px] text-[26px] text-[#1EA59A]'>HƏR</span>
            <span className='font-extrabold lg:text-[30px] text-[26px] text-[#050123]'>RAC.ORG</span>
            <Image src={logoPoint} alt='Logo point' className='mt-[11px] ms-[2px]' />
          </Link>
          <ul className='hidden md:flex items-center xl:gap-[40px] lg:gap-[30px] md:gap-[15px]'>
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
          <div className='flex items-center lg:gap-[20px] gap-[10px]'>
            <div className='hidden md:flex items-center lg:gap-[20px] gap-[10px]'>
              <div className='cursor-pointer relative'>
                <Image src={searchIcon} alt='Search icon' onClick={() => setSearchShow(!searchShow)} />
                {searchShow ?
                  <div className='absolute left-[-10px] top-[35px] pe-[5px] py-[5px] ps-[17px] w-[250px] rounded-[8px] bg-[#fff] flex items-center justify-between shadow-md'>
                    <input type="text" placeholder='Axtar...' className='w-[80%] outline-none text-[16px]' />
                    <Image src={searchIcon2} alt='search icon' />
                  </div> : null
                }
              </div>
              <div className='flex items-center cursor-pointer'>
                <Image src={flagAZ} alt='Flag-AZ' className='rounded-[50%] w-[25px] h-[25px]' />
                <Image src={downIcon} alt='Down Icon' />
              </div>
              <Link href='/my-like'>
                <Image src={like} alt='Basket icon' />
              </Link>
            </div>
            <Link href='/registration' className='lg:px-[20px] px-[15px] py-[10px] rounded-[8px] border-[1px] border-[#FF6B00] font-semibold text-[#FF6B00]'>
              Daxil ol
            </Link>
          </div>
        </div>
        <div className='px-[16px] py-[20px] w-full md:hidden'>
          <div className='flex items-center justify-between bg-[#fff] py-[5px] pe-[5px] ps-[17px] rounded-[8px] border-[1px] border-[#E6E6E9]'>
            <input type="text" className='w-screen py-[5px] outline-none' />
            <Image src={searchIcon2} alt='search icon' />
          </div>
        </div>
      </div>
      <div className={openMenu
        ? 'fixed z-[999] left-0 top-0 w-full h-screen bg-[#eee] ease-in duration-500'
        : 'fixed left-[-100%] top-0 ease-in '}
      >
        <div className='flex items-start justify-center relative w-full py-[20px] border-b-[1px] border-[#62d0b6]'>
          <span className='uppercase text-[22px] font-extrabold text-[#1ea59a]'>hər</span>
          <span className='uppercase text-[22px] font-extrabold text-[#050123]'>rac.org</span>
          <Image src={logoPoint} alt='logo point' className='mt-[4px] ms-[2px]' />
          <button onClick={() => setOpenMenu(!openMenu)} className='absolute top-[16px] right-[16px] cursor-pointer'>
            <Image src={closeIcon} alt='close icon' />
          </button>
        </div>
        <div className='mt-[30px] px-[16px]'>
          <div className='w-full grid grid-cols-2 gap-[15px]'>
            <Link
              href='/my-like'
              onClick={() => setOpenMenu(!openMenu)}
              className='flex items-center justify-center bg-[#fff] rounded-[7px] gap-[5px] py-[14px]'>
              <Image src={like} alt='like' />
              <Image src={downIcon} alt='dropdown' className='rotate-[270deg]' />
            </Link>
            <Link
              href='/'
              onClick={() => setOpenMenu(!openMenu)}
              className='flex items-center justify-center bg-[#fff] rounded-[7px] gap-[5px] py-[14px]'>
              <Image src={peopleIcon} alt='people icon' />
              <Image src={downIcon} alt='dropdown' className='rotate-[270deg]' />
            </Link>
          </div>
          <div className='mt-[30px] flex flex-col bg-[#fff] shadow-md rounded-[8px] px-[16px] py-[8px]'>
            <Link onClick={() => setOpenMenu(!openMenu)} href='/' className='py-[8px] border-b-[1px] border-[#e6e6e9] text-[16px] text-[#050123] font-medium'>Haqqında</Link>
            <Link onClick={() => setOpenMenu(!openMenu)} href='/' className='py-[8px] border-b-[1px] border-[#e6e6e9] text-[16px] text-[#050123] font-medium'>Məhsullar</Link>
            <Link onClick={() => setOpenMenu(!openMenu)} href='/' className='py-[8px] border-b-[1px] border-[#e6e6e9] text-[16px] text-[#050123] font-medium'>Qaydalar</Link>
            <Link onClick={() => setOpenMenu(!openMenu)} href='/' className='py-[8px] text-[16px] text-[#050123] font-medium'>Əlaqə</Link>
          </div>
          <div className='mt-[20px]'>
            <div onClick={()=>setMobileLan(!mobileLan)} className='flex items-center justify-center bg-[#fff] rounded-[8px] py-[7px] gap-[5px]'>
              <Image src={flagAZ} alt='flag' className='w-[25px] h-[25px] rounded-[25px]' />
              <span className='text-[16px] font-medium'>Azərbaycan dili</span>
              <Image src={downIcon} />
            </div>
            { mobileLan ?
              <ul className='w-full bg-[#fff] rounded-[8px] mt-[15px]'>
                <li className='flex items-center justify-between p-[10px]'>
                  <label htmlFor="az" className='w-full text-[20px] font-semibold'>AZ</label>
                  <input type="radio" id='az' name='language' className='w-[24px] h-[24px]'/>
                </li>
                <li className='flex items-center justify-between p-[10px]'>
                  <label htmlFor="ru" className='w-full text-[20px] font-semibold'>RU</label>
                  <input type="radio" id='ru' name='language' className='w-[24px] h-[24px]'/>
                </li>
                <li className='flex items-center justify-between p-[10px]'>
                  <label htmlFor="en" className='w-full text-[20px] font-semibold'>EN</label>
                  <input type="radio" id='en' name='language' className='w-[24px] h-[24px]'/>
                </li>
              </ul> : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
