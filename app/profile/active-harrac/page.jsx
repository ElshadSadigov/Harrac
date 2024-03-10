import Card from '@/components/card'
import React from 'react'

const page = () => {
  const data = [1, 2, 3, 4, 5, 6]
  return (
    <div className='grid grid-cols-3 gap-x-[32px] gap-y-[32px]'>
      {
        data.map(item =>{
          return <Card key={item}/>
        })
      }
    </div>
  )
}

export default page
