'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import heartIcon from '../../public/svgs/heart-icon.svg'
import shareIcon from '../../public/svgs/shareicon.svg'
import offerIcon from '../../public/svgs/offer-icon.svg'
import offerImg1 from '../../public/imgs/offer-img1.png'
import offerImg2 from '../../public/imgs/offer-img2.png'
import offerImg3 from '../../public/imgs/offer-img3.png'
import offerImg4 from '../../public/imgs/offer-img4.png'
import offerImg5 from '../../public/imgs/offer-img5.png'
import plus from '../../public/svgs/minus.svg'
import minus from '../../public/svgs/plus.svg'

import Card from '@/components/card'

const page = () => {
    const data = [1, 2, 3, 4];
    const [count, setCount] = useState(15000);

    const inCount = () => {
        setCount(count + 100);
    };

    const deCount = () => {
        setCount(count - 100);
    };
    return (
        <div className='max-w-[1500px] mx-auto w-full'>
            <div className='flex justify-between items-center  px-[20px] md:px-[80px] py-[23px]  border-b-[1px] border-[#D9D9DE]'>
                <div className='flex items-center  gap-[5px] mt-[20px] md:mt-[0px]'>
                    <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Ana səhifə</span>
                    <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>/</span>
                    <span className='md:text-[16px] text-[14px] text-[#050123] font-medium'>Təklif</span>
                </div>
                <Link href='/' className='flex items-center gap-[5px] mt-[20px] md:mt-[0px]'>
                    <Image src={backIcon} alt='back icon' />
                    <span className='md:text-[16px] text-[14px] font-medium text-[#050123]'>Geri</span>
                </Link>
            </div>
            <div className='px-[20px] xl:px-[80px] lg:px-[50px] my-[50px] flex md:flex-row flex-col xl:gap-x-[32px] md:gap-x-[15px]'>
                <div className='w-full md:w-1/2 flex md:flex-row flex-col-reverse md:gap-[32px] '>
                    <div className='flex md:flex-col flex-row justify-between  mt-[30px] md:mt-[0px] md lg:min-w-[77px] md:min-w-[65px]'>
                        <Image src={offerImg1} alt='offer img' className='md:w-[77px] md:h-[77px] w-[65px] h-[65px]' />
                        <Image src={offerImg2} alt='offer img' className='md:w-[77px] md:h-[77px] w-[65px] h-[65px]' />
                        <Image src={offerImg3} alt='offer img' className='md:w-[77px] md:h-[77px] w-[65px] h-[65px]' />
                        <Image src={offerImg4} alt='offer img' className='md:w-[77px] md:h-[77px] w-[65px] h-[65px]' />
                        <Image src={offerIcon} alt='offer icon' className='md:w-[77px] md:h-[77px] w-[65px] h-[65px]' />
                    </div>
                    <div className='md:h-auto'>
                        <Image src={offerImg5} alt='offer img' className='w-[100%] h-[280px] md:w-[100%] md:h-[100%]' />
                    </div>
                </div>
                <div className='mt-[30px] md:mt-[0px] md:w-1/2 w-full flex flex-col gap-[32px] md:gap-[20px]  ml-[0] md:ml-[20px]'>
                    <div>
                        <span className='text-[24px] md:text-[32px] font-medium text-[#050123]'>Rolex. Paslanmayan Saat</span>
                        <p className='mt-[8px] text-[16px] text-[#44415a]'>Rolex zərifliyi və mükəmməlliyi simvollaşdırır. Paslanmayan polad korpusları və üstün hərəkətləri ilə brend sadəcə bir saat deyil, lüksün simvoludur.</p>
                        <div className='mt-[16px] flex items-center gap-[5px]'>
                            <span className='text-[16px] text-[#44415a] '>Hərracın bitməsi:</span>
                            <span className='text-[16px] '>31 dekabr 2024-cü il, saat 12:00</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[16px] text-[#44415a] '>Qalan vaxt:</span>
                        <div className='grid grid-cols-4 gap-[16px] lg:gap-[24px] md:gap-[10px] mt-[16px]'>
                            <div className='flex flex-col items-center justify-center px-[7px] md:px-[30px] py-[7px] bg-[#fff] shadow-md rounded-[8px]'>
                                <span className=' text-[18px] md:text-[24px] font-bold text-[#050123]'>240</span>
                                <span className='mt-[-6px] text-[14px] md:text-[16px] text-[#050123]'>Gün</span>
                            </div>
                            <div className='flex flex-col items-center justify-center px-[7px] md:px-[30px] py-[7px] bg-[#fff] shadow-md rounded-[8px]'>
                                <span className='text-[18px] md:text-[24px] font-bold text-[#050123]'>16</span>
                                <span className='mt-[-6px] text-[14px] md:text-[16px] text-[#050123]'>saat</span>
                            </div>
                            <div className='flex flex-col items-center justify-center px-[7px] md:px-[30px] py-[7px] bg-[#fff] shadow-md rounded-[8px]'>
                                <span className='text-[18px] md:text-[24px] font-bold text-[#050123]'>40</span>
                                <span className='mt-[-6px] text-[14px] md:text-[16px]  text-[#050123]'>Dəqiqə</span>
                            </div>
                            <div className='flex flex-col items-center justify-center px-[7px] md:px-[30px] py-[7px] bg-[#fff] shadow-md rounded-[8px]'>
                                <span className='text-[18px] md:text-[24px] font-bold text-[#050123]'>25</span>
                                <span className='mt-[-6px] text-[14px] md:text-[16px]  text-[#050123]'>Saniyə</span>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex-col md:items-start flex items-center'>
                        <span className='text-[16px] text-[#44415a]'>Cari təklif: </span>
                        <span className='text-[20px] md:text-[26px] font-semibold text-[#1ea59a] ml-[4px] md:ml-0' > 15,000 ₼</span>
                    </div>
                    <div className=' flex items-center justify-center gap-[2px] md:w-[360px] md:h-[70px] w-[350px] h-[70px] border-[1px] border-[#D9D9DE] rounded-[8px]'>
                        <button onClick={deCount}><Image src={minus} /></button>
                        <hr className='w-[60px] h-[3px]   rotate-[90deg]' />
                        <h1 className='text-[24px] font-bold'>{count} ₼</h1>
                        <hr className='w-[60px]  rotate-[90deg]' />
                        <button onClick={inCount}><Image src={plus} /></button>
                    </div>
                    <div className='flex items-center gap-[19px]  md:gap-[32px] mt-[10px] md:mt-[0px]'>
                        <div className='md:py-[10px] py-[10px] px-[26px] md:px-[32px] rounded-[8px] border-[1px] border-[#D9D9DE]'>
                            <button className='md:pe-[36px] pe-[26px] py-[16px] border-r-[1px] border-[#CDCCD3]'>
                                <Image src={heartIcon} alt='heart icon' className='w-[16px] h-[14px]' />
                            </button>
                            <button className='md:ps-[36px] ps-[26px] py-[16px] '>
                                <Image src={shareIcon} alt='share icon' className='w-[15px] h-[16px]' />
                            </button>
                        </div>
                        <button className='md:py-[16px] py-[16px] px-[40px] md:px-[32px] bg-[#1ea59a] rounded-[8px] text-[24px] text-[#fff] font-semibold'>Təklif al</button>
                    </div>
                </div>
            </div>
            <div className='px-[24px] md:px-[80px] mt-[50px] flex flex-col gap-[16px]'>
                <span className='text-[24px] font-semibold text-[#050123] '>Təfərrüatlar</span>
                <p className='text-[16px] text-[#44415a] '>Rolex GMT-Master II 40mm 18K Yellow Gold Watch W/Anniversary Green Dial (Ref. 116718) - This magnificent timepiece was crafted by the artisans at the world renowned luxury watch maker Rolex. This GMT-Master II features: 40mm solid 18k yellow gold case and Rolex oyster bracelet with Oysterlock clasp, bi-directional rotating 18k yellow gold bezel with a black ceramic top ring, Anniversary Green dial with luminous yellow gold hands and dot hour markers, minute markers around the outer rim, date display at the 3 o'clock position, automatic 3186 GMT movement with a 50-hour (approximate) power reserve, scratch resistant sapphire crystal, screw down crown and water resistance to 100 meters. This variation of the GMT is unlike any other gold Rolex on the market, and is truly a collector's dream.</p>
            </div>
            <div className='mt-[100px] mb-[120px] px-[20px] md:px-[80px] '>
                <div className='flex items-center justify-between '>
                    <span className='text-[24px] font-medium text-[#050123] '>Tövsiyə olunanlar</span>
                    <Link href='/' className='text-[18px] font-medium text-[#1ea59a]'>Hamısı</Link>
                </div>
                <div className='overflow-auto'>

                    <div className='flex justify-between gap-[20px] md:gap-[32px] mt-[16px] overflow-auto'>
                        {
                            data.map(item => {
                                return <Card key={item} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default page;
