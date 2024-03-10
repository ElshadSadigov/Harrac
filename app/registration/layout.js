import Image from 'next/image'
import React from 'react'
import registrationImg from '../../public/imgs/registration-img.png'
import registration from '../../public/svgs/registration.svg'

const Layout = ({ children }) => {
  return (
    <div className='flex w-full '>
      <div className='w-[40%] bg-[#1ea59a] p-[80px]'>
        <div className='border-[1px] border-[#fff] rounded-[16px] bg-[#fff] bg-opacity-20 px-[30px] py-[33px] h-full'>
            <div className='flex flex-col items-center'>
                <span className='text-[22px] font-semibold text-[#fff]'>Yenidən salam, xoş gəlmisiniz!</span>
                <p className='text-center mt-[5px] text-[16px] text-[#fff]'>Bənzərsiz məhsulların axtarırsınız? İndi qoşulun və ən yaxşı təklifləri əldə edin!</p>
            </div>
            <div className='mt-[32px]'>
                <Image src={registrationImg} alt='registrantion-img' />
            </div>
            <div className='mt-[69px]'>
                <Image src={registration} alt='registration-img' />
            </div>
        </div>
      </div>
      <div className='w-[60%] p-[80px]'>
        {children}
      </div>
    </div>
  )
}

export default Layout
