"use client"
import React, { useEffect, useState } from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import profile1 from '../../public/imgs/profile-1.png'
import profile2 from '../../public/imgs/profile-2.png'
import profile3 from '../../public/imgs/profile-3.png'
import profile4 from '../../public/imgs/profile-4.png'
import profile5 from '../../public/imgs/profile-5.png'
import profile6 from '../../public/imgs/profile-6.png'
import profile7 from '../../public/imgs/profile-7.png'
import profile8 from '../../public/imgs/profile-8.png'
import profile9 from '../../public/imgs/profile-9.png'
import profile10 from '../../public/imgs/profile-10.png'
import profile11 from '../../public/imgs/profile-11.png'
import profile12 from '../../public/imgs/profile-12.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const layout = ({ children }) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useState('Profil');
  useEffect(() => {
    setPageName(pageName)
  }, [pageName]);

  return (
    <div className='w-full max-w-[1500px] mx-auto'>
      <div className='flex justify-between items-center md:px-[40px] lg:px-[80px] px-[16px] md:py-[23px] py-[15px] border-b-[1px] border-[#D9D9DE]'>
        <div className='flex items-center gap-[5px]'>
          <span className='text-[16px] font-medium text-[#050123]'>Ana səhifə</span>
          <span className='text-[16px] font-medium text-[#050123]'>/</span>
          <span className='text-[16px] font-medium text-[#050123]'>{pageName}</span>
        </div>
        <Link href='/' className='flex items-center gap-[5px]'>
          <Image src={backIcon} alt='back icon' />
          <span className='text-[16px] text-[#050123]'>Geri</span>
        </Link>
      </div>
      <div className='lg:px-[80px] md:px-[40px] px-[] md:mt-[50px] w-full'>
        <div className='bg-[#DCF9FF] md:rounded-[16px] w-full flex md:flex-row flex-col justify-between overflow-hidden md:h-[240px] h-[350px]'>
          <div className='py-[64px] ps-[50px] flex flex-col min-w-[350px] '>
            <span className='md:text-[36px] text-[24px] font-semibold text-[#050123]'>Aqşin Rəcəbov</span>
            <span className='mt-[10px] md:text-[24px] text-[18px] text-[#050123]'>İstifadəçi / Sahibkar</span>
          </div>
          <div className='flex justify-end md:w-1/2 w-full'>
            <div className='w-[600px] min-w-[600px] rotate-[-45deg] grid grid-cols-4 gap-[20px] md:translate-x-24 md:translate-y-[-35px] translate-x-48 translate-y-10'>
              <Image src={profile1} alt='profile-1' className='w-[123px] h-[123px] rounded-[16px]' />
              <Image src={profile2} alt='profile-2' className='w-[123px] h-[123px] rounded-[16px]' />
              <Image src={profile3} alt='profile-3' className='w-[123px] h-[123px] rounded-[16px]' />
              <Image src={profile4} alt='profile-4' className='w-[123px] h-[123px] rounded-[16px]' />
              <Image src={profile5} alt='profile-5' className='w-[123px] h-[123px] rounded-[16px]' />
              <Image src={profile6} alt='profile-6' className='w-[123px] h-[123px] rounded-[16px]' />
              <Image src={profile7} alt='profile-7' className='w-[123px] h-[123px] rounded-[16px]' />
              <Image src={profile8} alt='profile-8' className='w-[123px] h-[123px] rounded-[16px]' />
              <Image src={profile9} alt='profile-9' className='w-[123px] h-[123px] rounded-[16px]' />
              <Image src={profile10} alt='profile-10' className='w-[123px] h-[123px] rounded-[16px]' />
              <Image src={profile11} alt='profile-11' className='w-[123px] h-[123px] rounded-[16px]' />
              <Image src={profile12} alt='profile-12' className='w-[123px] h-[123px] rounded-[16px]' />
            </div>
          </div>
        </div>
      </div>
      <div className='lg:px-[80px] md:px-[50px] px-[16px] mt-[60px] mb-[130px] flex md:flex-row flex-col gap-[32px] items-start'>
        <div className='md:w-1/4 w-full flex flex-col gap-y-[30px]'>
          <Link
            onClick={() => setPageName('Profile')}
            href='/profile'
            className={`${pathname === "/profile" ? "bg-[#dcf9ff] text-[#050123]" : "text-[#44415a]"} w-full px-[30px] py-[32px] shadow rounded-[16px] md:text-[20px] text-[16px] font-medium `}>
            Hesab Təfərrüatları</Link>
          <Link
            onClick={() => setPageName('Bank Məlumatları')}
            href='/profile/bank-info'
            className={`${pathname === "/profile/bank-info" ? "bg-[#DCF9FF] text-[#050123]" : 'text-[#44415a]'} w-full px-[30px] py-[32px] shadow rounded-[16px] md:text-[20px] text-[16px] font-medium `}>Bank Məlumatları</Link>
          <Link
            onClick={() => setPageName('Şifrə Dəyişikliyi')}
            href='/profile/change-password'
            className={`${pathname === "/profile/change-password" ? "bg-[#DCF9FF] text-[#050123]" : 'text-[#44415a]'} w-full px-[30px] py-[32px] shadow rounded-[16px] md:text-[20px] text-[16px] font-medium `}>Şifrə Dəyişikliyi</Link>
          <Link
            onClick={() => setPageName('Aktiv Hərraclar')}
            href='/profile/active-harrac'
            className={`${pathname === "/profile/active-harrac" ? "bg-[#DCF9FF] text-[#050123]" : "text-[#44415a]"} w-full px-[30px] py-[32px] shadow rounded-[16px] md:text-[20px] text-[16px] font-medium `}>Aktiv Hərraclar</Link>
          <Link
            onClick={() => setPageName('Qazanılmış Hərraclar')}
            href='/profile/won-harrac'
            className={`${pathname === "/profile/won-harrac" ? "bg-[#DCF9FF] text-[#050123]" : "text-[#44415a]"} w-full px-[30px] py-[32px] shadow rounded-[16px] md:text-[20px] text-[16px] font-medium `}>Qazanılmış Hərraclar</Link>
          <Link
            onClick={() => setPageName('Hərrac Fəaliyyəti')}
            href='/profile/activity-harrac'
            className={`${pathname === "/profile/activity-harrac" ? "bg-[#DCF9FF] text-[#050123]" : "text-[#44415a]"} w-full px-[30px] py-[32px] shadow rounded-[16px] md:text-[20px] text-[16px] font-medium `}>Hərrac Fəaliyyəti</Link>
          <Link href='/' className={`${pathname === "/" && "bg-[#DCF9FF] "} w-full px-[30px] py-[32px] shadow rounded-[16px] md:text-[20px] text-[16px] font-medium text-[#EF3340]`}>Hesabdan Çıxış</Link>
        </div>
        <div className='md:w-3/4 w-full md:border-[0] border-t-[1px] border-[#828091] border-opacity-50 md:mt-0 mt-[40px] md:pt-0 pt-[40px]'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default layout
