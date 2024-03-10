import React from 'react'

const WeAboutCard = ({id, title, text}) => {
  return (
    <div className='p-[20px] shadow-md flex flex-col items-start rounded-[16px]'>
      <span className='text-[18px] text-[#1ea59a] font-medium'>{id}</span>  
      <span className='my-[10px] text-[18px] font-medium text-[#050123]'>{title}</span>
      <p className='text-[14px] text-[#44415a]'>{text}</p>  
    </div>
  )
}

export default WeAboutCard