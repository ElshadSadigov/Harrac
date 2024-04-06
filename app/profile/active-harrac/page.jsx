import Card from '@/components/card'
import React from 'react'

const page = () => {
  const data = [1, 2, 3, 4, 5, 6]
  return (
    <div>
      <div className='flex md:justify-start justify-center'>
        <span className='md:text-[26px] text-[22px] text-[#050123] font-medium'>Aktiv hərraclar</span>
      </div>
      <div className='grid xl:grid-cols-3 sm:grid-cols-2 gap-x-[32px] gap-y-[32px] md:mt-[50px] mt-[30px]'>
        {
          data.map(item => {
            return <Card key={item} />
          })
        }
      </div>
    </div>
  )
}

export default page
