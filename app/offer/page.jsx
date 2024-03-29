import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import heartIcon from '../../public/svgs/heart-icon.svg'
import shareIcon from '../../public/svgs/shareicon.svg'
import offerIcon from '../../public/svgs/offer-icon.svg'
import offerImg1 from '../../public/imgs/offer-img1.png'
import offerImg2 from '../../public/imgs/offer-img2.png'
import offerImg3 from '../../public/imgs/offer-img3.png'
import offerImg4 from '../../public/imgs/offer-img4.png'
import offerImg5 from '../../public/imgs/offer-img5.png'
import Card from '@/components/card'

const page = () => {
    const data = [1, 2, 3, 4]
    return (
        <div>
            <div className='flex justify-between items-center px-[80px] py-[23px] border-b-[1px] border-[#D9D9DE]'>
                <div className='flex items-center gap-[5px]'>
                    <span className='text-[16px] text-[#050123] font-medium'>Ana səhifə</span>
                    <span className='text-[16px] text-[#050123] font-medium'>/</span>
                    <span className='text-[16px] text-[#050123] font-medium'>Təklif</span>
                </div>
                <Link href='/' className='flex items-center gap-[5px]'>
                    <Image src={backIcon} alt='back icon' />
                    <span className='text-[16px] font-medium text-[#050123]'>Geri</span>
                </Link>
            </div>
            <div className='px-[80px] my-[50px] flex gap-[32px]'>
                <div className='w-1/2 flex gap-[32px]'>
                    <div className='grid grid-cols-1 gap-[30px]'>
                        <Image src={offerImg1} alt='offer img' />
                        <Image src={offerImg2} alt='offer img' />
                        <Image src={offerImg3} alt='offer img' />
                        <Image src={offerImg4} alt='offer img' />
                        <Image src={offerIcon} alt='offer icon' />
                    </div>
                    <div>
                        <Image src={offerImg5} alt='offer img' className='w-[100%] h-[100%]' />
                    </div>
                </div>
                <div className='w-1/2 flex flex-col gap-[32px]'>
                    <div>
                        <span className='text-[32px] font-medium text-[#050123]'>Rolex. Paslanmayan Saat</span>
                        <p className='mt-[8px] text-[16px] text-[#44415a]'>Rolex zərifliyi və mükəmməlliyi simvollaşdırır. Paslanmayan polad korpusları və üstün hərəkətləri ilə brend sadəcə bir saat deyil, lüksün simvoludur.</p>
                        <div className='mt-[24px] flex items-center gap-[5px]'>
                            <span className='text-[16px] text-[#44415a] '>Hərracın bitməsi:</span>
                            <span className='text-[16px] text-[#ff6b00]'>31 dekabr 2024-cü il, saat 12:00</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-[32px]'>
                        <span className='text-[16px] text-[#000]'>EDİLƏN TƏKLİF:</span>
                        <span className='text-[24px] font-bold text-[#00ff1a]'>36000</span>
                    </div>
                    <div className='flex flex-col '>
                        <span className='text-[16px] text-[#44415a]'>Cari təklif:</span>
                        <span className='text-[26px] font-semibold text-[#1ea59a]'>32,000 ₼ - 43,000 ₼</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[16px] text-[#44415a] '>Qalan vaxt:</span>
                        <div className='flex items-center gap-[24px] mt-[16px]'>
                            <div className='flex flex-col items-center justify-center px-[30px] py-[7px] bg-[#fff] shadow-md rounded-[8px]'>
                                <span className='text-[24px] font-bold text-[#050123]'>240</span>
                                <span className='mt-[-6px] text-[16px] text-[#050123]'>Gün</span>
                            </div>
                            <div className='flex flex-col items-center justify-center px-[30px] py-[7px] bg-[#fff] shadow-md rounded-[8px]'>
                                <span className='text-[24px] font-bold text-[#050123]'>16</span>
                                <span className='mt-[-6px] text-[16px] text-[#050123]'>saat</span>
                            </div>
                            <div className='flex flex-col items-center justify-center px-[30px] py-[7px] bg-[#fff] shadow-md rounded-[8px]'>
                                <span className='text-[24px] font-bold text-[#050123]'>40</span>
                                <span className='mt-[-6px] text-[16px] text-[#050123]'>Dəqiqə</span>
                            </div>
                            <div className='flex flex-col items-center justify-center px-[30px] py-[7px] bg-[#fff] shadow-md rounded-[8px]'>
                                <span className='text-[24px] font-bold text-[#050123]'>25</span>
                                <span className='mt-[-6px] text-[16px] text-[#050123]'>Saniyə</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-[32px]'>
                        <button className='px-[32px] py-[16px] bg-[#1ea59a] rounded-[8px] text-[24px] text-[#fff] font-semibold'>Təklif al</button>
                        <div className='py-[10px] px-[32px] rounded-[8px] border-[1px] border-[#D9D9DE]'>
                            <button className='pe-[36px] py-[16px] border-r-[1px] border-[#CDCCD3]'>
                                <Image src={heartIcon} alt='heart icon' className='w-[16px] h-[14px]' />
                            </button>
                            <button className='ps-[36px] py-[16px] '>
                                <Image src={shareIcon} alt='share icon' className='w-[15px] h-[16px]' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[80px] mt-[50px] flex flex-col gap-[16px]'>
                <span className='text-[24px] font-semibold text-[#050123] '>Təfərrüatlar</span>
                <p className='text-[16px] text-[#44415a] '>Rolex GMT-Master II 40mm 18K Yellow Gold Watch W/Anniversary Green Dial (Ref. 116718) - This magnificent timepiece was crafted by the artisans at the world renowned luxury watch maker Rolex. This GMT-Master II features: 40mm solid 18k yellow gold case and Rolex oyster bracelet with Oysterlock clasp, bi-directional rotating 18k yellow gold bezel with a black ceramic top ring, Anniversary Green dial with luminous yellow gold hands and dot hour markers, minute markers around the outer rim, date display at the 3 o'clock position, automatic 3186 GMT movement with a 50-hour (approximate) power reserve, scratch resistant sapphire crystal, screw down crown and water resistance to 100 meters. This variation of the GMT is unlike any other gold Rolex on the market, and is truly a collector's dream.</p>
            </div>
            <div className='mt-[100px] mb-[120px] px-[80px]'>
                <div className='flex items-center justify-between'>
                    <span className='text-[24px] font-medium text-[#050123] '>Tövsiyə olunanlar</span>
                    <Link href='/' className='text-[18px] font-medium text-[#1ea59a]'>Hamısı</Link>
                </div>
                <div className='grid grid-cols-4 gap-[32px] mt-[16px]'>
                    {
                        data.map(item => {
                            return <Card key={item}/> 
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default page
