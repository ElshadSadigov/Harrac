import React from 'react'
import Slider from 'react-slick';
import Image from 'next/image'
import cardImg from '../public/imgs/card-img.png'
import cardSvg from '../public/svgs/card-img.svg'
import rightIcon from '../public/svgs/right-icon.svg'
import lookIcon from '../public/svgs/look-icon.svg'
import shareIcon from '../public/svgs/share-icon.svg'
import Link from 'next/link'
const ProductSlider = ({ prductData }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    return (
      <Slider {...settings}>
        {prductData.map(item => (
          <div key={item}>
           <div className='relative rounded-[8px] overflow-hidden'>
            <Image src={cardImg} alt='Card img' className='w-full'/>
            <div className='absolute left-[10px] top-[10px] bg-[#000] bg-opacity-20 rounded-[100px] flex items-center py-[2px] ps-[3px] pe-[26px]'>
                <Image src={cardSvg} alt='card svg' width={30} height={30}/>
                <span className='text-[12px] font-medium text-[#fff] ms-[8px]'>Mery Jane</span>
            </div>zz
            <div className='absolute left-0 bottom-0 w-full bg-[#000] bg-opacity-20 py-[9px] px-[21px] backdrop-blur flex items-center justify-between gap-[30px]'>
                <div className='flex flex-col items-center'>
                    <span className='text-[#fff] font-medium'>240</span>
                    <span className='text-[12px] mt-[-5px] text-[#fff]'>Days</span>
                </div>
                <div className='flex flex-col items-center'>
                    <span className='text-[#fff] font-medium'>16</span>
                    <span className='text-[12px] mt-[-5px] text-[#fff]'>Hours</span>
                </div>
                <div className='flex flex-col items-center'>
                    <span className='text-[#fff] font-medium'>40</span>
                    <span className='text-[12px] mt-[-5px] text-[#fff]'>Minutes</span>
                </div>
                <div className='flex flex-col items-center'>
                    <span className='text-[#fff] font-medium'>15</span>
                    <span className='text-[12px] mt-[-5px] text-[#fff]'>Seconds</span>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-start mt-[10px]'>
            <span className='text-[20px] font-semibold text-[#050123]'>Basgetbol top</span>
            <div className='mt-[10px] flex items-center gap-[5px]'>
                <span className='font-medium text-[#050123]'>Cari təklif:</span>
                <span className='font-medium text-[#050123]'>100 ₼</span>
            </div>
            <div className='flex justify-between items-center w-full mt-[20px]'>
                <Link href='/offer' className='flex items-center gap-[5px] text-[#fff] stroke-[1.5px] px-[22px] py-[8px] bg-[#1ea59a] rounded-[8px]'>
                    Təklif et
                    <Image src={rightIcon} alt='Right icon'/>
                </Link>
                <div className='flex items-center gap-[5px] px-[14px] py-[8px] bg-[#f2f2f4] rounded-[8px]'>
                    <Image src={lookIcon} alt='Look icon' />
                    <span className='text-[14px]'>150</span>
                </div>
                <Link href='/'>
                    <Image src={shareIcon} alt='Share icon' className='w-[36px] h-[36px]'/>
                </Link>
            </div>
        </div>
          </div>
        ))}
      </Slider>
    );
  };
  

export default ProductSlider