
import ActivityCard from '@/components/activityCard'
import React from 'react'

const page = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className='rounded-[16px] overflow-hidden shadow-md'>
      <div className='w-full px-[42px] py-[25px] bg-[#dcf9ff] grid grid-cols-4'>
        <span className='text-[20px] font-medium text-[#050123]'>Hərrac</span>
        <span className='text-[20px] font-medium text-[#050123]'>Tarix</span>
        <span className='text-[20px] font-medium text-[#050123] text-center'>Təklif</span>
        <span className='text-[20px] font-medium text-[#050123] text-end'>Cari Təklif</span>
      </div>
      <div>
        {
          data.map(item =>{
            return <ActivityCard key={item}/>
          })
        }
      </div>
    </div>
  )
}

export default page
