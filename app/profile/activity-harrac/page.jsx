
import ActivityCard from '@/components/activityCard'
import React from 'react'

const page = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div>
      <div className='flex md:justify-start justify-center'>
        <span className='md:text-[26px] text-[22px] text-[#050123] font-medium'>Qazanılmış hərraclar</span>
      </div>
      <div className='rounded-[16px] overflow-hidden shadow-md md:mt-[50px] mt-[30px]'>
        <div className='w-full px-[42px] py-[25px] bg-[#dcf9ff] flex justify-between'>
          <span className='md:text-[20px] text-[16px] font-medium text-[#050123]'>Hərrac</span>
          <span className='md:text-[20px] text-[16px] font-medium text-[#050123]'>Tarix</span>
          <span className='md:text-[20px] text-[16px] font-medium text-[#050123] text-center'>Təklif</span>
          <span className='md:text-[20px] text-[16px] font-medium text-[#050123] text-end'>Cari Təklif</span>
        </div>
        <div>
          {
            data.map(item => {
              return <ActivityCard key={item} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default page
