import Image from 'next/image'
import React from 'react'
import lookIcon from '../public/svgs/look-icon.svg'
import shareIcon from '../public/svgs/share-icon.svg'
import newsTitle from '../public/imgs/news-title.png'
import cardTitle from '../public/svgs/card-img.svg'

const NewsCard = () => {
  return (
    <div className='shadow-2xlxl bg-[#fff] rounded-[24px] overflow-hidden'>
      <div className='relative'>
        <Image src={newsTitle} alt='News title' className='w-full'/>
        <span className='py-[5px] px-[20px] bg-[#2335CC] absolute left-0 top-[20px]  text-[14px] text-[#fff] font-medium'>Yanvar 22, 2024</span>
      </div>
      <div className='p-[20px]'>
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-[16px]'>
                    <Image src={cardTitle} alt='Card title'/>
                    <span className='text-[14px] text-[#44415a] font-medium'>Jake Will.</span>
                </div>
                <div className='flex items-center gap-[5px] px-[14px] py-[8px] bg-[#f2f2f4] rounded-[100px]'>
                    <Image src={lookIcon} alt='Look icon'/>
                    <span>150</span>
                </div>
                <div>
                    <Image src={shareIcon} alt='Share icon' />
                </div>
            </div>
        </div>
        <div className='mt-[30px]'>
            <span className='text-[22px] font-semibold text-[#050123] '>Hərraclar haqqında yanlış təsəvvürlər və tez-tez...</span>
            <p className='mt-[5px] text-[#828091]'>Hərracı hara etməyə qərar vermək  və ən son xəbərləri bilmək üçün... </p>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
