import Image from 'next/image'
import React from 'react'
import registrationImg from '../../public/imgs/registration-img.png'
import registration from '../../public/svgs/registration.svg'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col md:flex-row w-full md:flex md:items-center'>
      <div className='w-full md:w-[45%] bg-[#1ea59a] xl:px-[80px] md:px-[40px] px-[16px] py-[80px] relative -z-20'>
        <div className='border-[1px] border-[#fff] rounded-[16px] bg-[#fff] bg-opacity-20 px-[30px] py-[33px] h-full '>
          <div className='flex flex-col items-center'>
            <span className='md:text-[22px] text-[18px] font-semibold text-[#fff]'>Yenidən salam, xoş gəlmisiniz!</span>
            <p className='text-center mt-[5px] md:text-[16px] text-[14px] text-[#fff]'>Bənzərsiz məhsulların axtarırsınız? İndi qoşulun və ən yaxşı təklifləri əldə edin!</p>
          </div>
          <div className='mt-[32px]'>
            <Image src={registrationImg} alt='registrantion-img' className='w-full'/>
          </div>
          <div className='mt-[69px]'>
            <Image src={registration} alt='registration-img' />
          </div>
        </div>
        {/* line */}
        <div className='absolute -z-10  md:left-[-193px] left-[-106.43px] md:bottom-[-64px] bottom-[-49.43px] md:w-[410px] w-[197.87px] md:h-[410px] h-[197.87px] md:rounded-[410px] rounded-[197.87px] md:border-[30px] border-[10px] border-[#fff] border-opacity-20'></div>
        <div className='absolute -z-10  md:left-[-263px] left-[-140.22px] md:bottom-[-134px] bottom-[-83px] md:w-[550px] w-[265px] md:h-[550px] h-[265px] md:rounded-[550px] rounded-[265px] md:border-[30px] border-[10px] border-[#fff] border-opacity-20'></div>
        <div className='absolute -z-10  md:left-[-333px] left-[-174px] md:bottom-[-204px] bottom-[-117px] md:w-[690px] w-[333px] md:h-[690px] h-[333px] md:rounded-[690px] rounded-[333px] md:border-[30px] border-[10px] border-[#fff] border-opacity-20'></div>
        {/* line */}
      </div>
      <div className='w-full xl:p-[80px] md:w-[55%] md:p-[50px] px-[16px] pb-[50px] md:mt-0 mt-[30px]'>
        {children}
      </div>
    </div>
  )
}

export default Layout
