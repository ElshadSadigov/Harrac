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

const layout = ({children}) => {
  const [pageName, setPageName] = useState('Profil')
  useEffect(()=>{
    setPageName(pageName)
  }, [pageName])
  return (
    <div>
      <div className='flex justify-between items-center px-[80px] py-[23px] border-b-[1px] border-[#D9D9DE]'>
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
      <div className='px-[80px] mt-[50px] '>
        <div className='bg-[#DCF9FF] rounded-[16px] w-full flex justify-between overflow-hidden h-[240px]'>
            <div className='py-[64px] ps-[80px] flex flex-col w-1/2'>
                <span className='text-[40px] font-semibold text-[#050123]'>Salam, Aqşin Rəcəbov</span>
                <span className='mt-[10px] text-[28px] text-[#050123]'>İstifadəçi / Sahibkar</span>
            </div>
            <div className='w-1/2 grid grid-cols-4 gap-[20px] rotate-[-45deg] me-[100px]'>
                <Image src={profile1} alt='profile-1' className='w-[100%] h-[123px] rounded-[16px]'/>
                <Image src={profile2} alt='profile-2' className='w-[100%] h-[123px] rounded-[16px]'/>
                <Image src={profile3} alt='profile-3' className='w-[100%] h-[123px] rounded-[16px]'/>
                <Image src={profile4} alt='profile-4' className='w-[100%] h-[123px] rounded-[16px]'/>
                <Image src={profile5} alt='profile-5' className='w-[100%] h-[123px] rounded-[16px]'/>
                <Image src={profile6} alt='profile-6' className='w-[100%] h-[123px] rounded-[16px]'/>
                <Image src={profile7} alt='profile-7' className='w-[100%] h-[123px] rounded-[16px]'/>
                <Image src={profile8} alt='profile-8' className='w-[100%] h-[123px] rounded-[16px]'/>
                <Image src={profile9} alt='profile-9' className='w-[100%] h-[123px] rounded-[16px]'/>
                <Image src={profile10} alt='profile-10' className='w-[100%] h-[123px] rounded-[16px]'/>
                <Image src={profile11} alt='profile-11' className='w-[100%] h-[123px] rounded-[16px]'/>
                <Image src={profile12} alt='profile-12' className='w-[100%] h-[123px] rounded-[16px]'/>
            </div>
        </div>
      </div>
      <div className='px-[80px] mt-[60px] mb-[130px] flex gap-[32px] items-start'>
        <div className='w-1/4 flex flex-col gap-y-[30px]'>
            <Link
            onClick={()=>setPageName('Qazanılmış Hərraclar')} 
            href='/profile' 
            className='w-full px-[30px] py-[32px] shadow rounded-[16px] text-[20px] font-medium text-[#050123]'>Hesab Təfərrüatları</Link> 
            <Link 
            onClick={()=>setPageName('Bank Məlumatları')}
            href='/profile/bank-info' 
            className='w-full px-[30px] py-[32px] shadow rounded-[16px] text-[20px] font-medium text-[#050123]'>Bank Məlumatları</Link> 
            <Link 
            onClick={()=>setPageName('Şifrə Dəyişikliyi')}
            href='/profile/change-password' 
            className='w-full px-[30px] py-[32px] shadow rounded-[16px] text-[20px] font-medium text-[#050123]'>Şifrə Dəyişikliyi</Link> 
            <Link 
            onClick={()=>setPageName('Aktiv Hərraclar')} 
            href='/profile/active-harrac' 
            className='w-full px-[30px] py-[32px] shadow rounded-[16px] text-[20px] font-medium text-[#050123]'>Aktiv Hərraclar</Link> 
            <Link 
            onClick={()=>setPageName('Qazanılmış Hərraclar')} 
            href='/profile/won-harrac' 
            className='w-full px-[30px] py-[32px] shadow rounded-[16px] text-[20px] font-medium text-[#050123]'>Qazanılmış Hərraclar</Link> 
            <Link 
            onClick={()=>setPageName('Hərrac Fəaliyyəti')} 
            href='/profile/activity-harrac' 
            className='w-full px-[30px] py-[32px] shadow rounded-[16px] text-[20px] font-medium text-[#050123]'>Hərrac Fəaliyyəti</Link> 
            <Link  href='/' className='w-full px-[30px] py-[32px] shadow rounded-[16px] text-[20px] font-medium text-[#EF3340]'>Hesabdan Çıxış</Link> 
        </div>
        <div className='w-3/4'>
            {children}
        </div>
      </div>
    </div>
  )
}

export default layout
