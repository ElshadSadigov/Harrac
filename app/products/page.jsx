"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import starGray from '../../public/svgs/star-gray.svg'
import downGray from '../../public/svgs/dawn-gray.svg'
import Card from '@/components/card'
import '../../public/css/style.css'

const page = () => {
    const [harrac, setHarrac] = useState(false)
    const [category, setCategory] = useState(false)
    const [location, setLocation] = useState(false)
    const [price, setPrice] = useState(false)
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    return (
        <div className='pb-[120px]'>
            <div className='flex items-center justify-between px-[80px] py-[23px] border-b-[1px] border-[#D9D9DE]'>
                <div className='flex items-center gap-[5px]'>
                    <span className='text-[16px] font-medium text-[#050123]'>Ana səhifə</span>
                    <span className='text-[16px] font-medium text-[#050123]'>/</span>
                    <span className='text-[16px] font-medium text-[#050123]'>Məhsullar</span>
                </div>
                <Link href='/' className='flex items-center gap-[5px]'>
                    <Image src={backIcon} alt='back icon' />
                    <span className='text-[16px] font-medium text-[#050123]'>Geri</span>
                </Link>
            </div>
            <div className='px-[80px] flex items-start gap-[32px] mt-[30px]'>
                <div className='w-1/4'>
                    <div className='flex justify-between items-center'>
                        <span className='text-[16px] font-medium text-[#44415a]'>110 Məhsul</span>
                        <button className='text-[#1ea59a] font-medium text-[16px] underline'>Filteri təmizlə</button>
                    </div>
                    <div className='mt-[32px] px-[15px]  rounded-[8px] bg-[#E6E6E9] '>
                        <div className='w-full border-b-[2px] border-[#828091] py-[15px]'>
                            <div onClick={()=>setHarrac(!harrac)} className='flex items-center justify-between cursor-pointer'>
                                <span className='text-[#44415a] text-[16px] font-medium'>Hərrac</span>
                                <Image src={downGray} alt='down gray'/>
                            </div>
                            {
                                harrac ? 
                                <ul className='mt-[9px] flex flex-col gap-[10px]'>
                                <li className='flex items-center gap-[8px]'>
                                    <input type="checkbox" name="harrac-all" id="harrac-all" className='w-[20px] h-[20px] cursor-pointer'/>
                                    <label htmlFor="harrac-all" className='text-[16px] text-[#828091] cursor-pointer selection:bg-transparent'>Hamısı</label>
                                </li>
                                <li className='flex items-center gap-[8px]'>
                                    <input type="checkbox" name="harrac-art" id="harrac-art" className='w-[20px] h-[20px] cursor-pointer'/>
                                    <label htmlFor="harrac-art" className='text-[16px] text-[#828091] cursor-pointer selection:bg-transparent'>İncəsənət</label>
                                </li>
                                <li className='flex items-center gap-[8px]'>
                                    <input type="checkbox" name="harrac-electronics" id="harrac-electronics" className='w-[20px] h-[20px] cursor-pointer'/>
                                    <label htmlFor="harrac-electronics" className='text-[16px] text-[#828091] cursor-pointer selection:bg-transparent'>Elektronika</label>
                                </li>
                                <li className='flex items-center gap-[8px]'>
                                    <input type="checkbox" name="harrac-antiquities" id="harrac-antiquities" className='w-[20px] h-[20px] cursor-pointer'/>
                                    <label htmlFor="harrac-antiquities" className='text-[16px] text-[#828091] cursor-pointer selection:bg-transparent'>Qədim Əşyalar</label>
                                </li>
                                <li className='flex items-center gap-[8px]'>
                                    <input type="checkbox" name="harrac-memories" id="harrac-memories" className='w-[20px] h-[20px] cursor-pointer'/>
                                    <label htmlFor="harrac-memories" className='text-[16px] text-[#828091] cursor-pointer selection:bg-transparent'>Kitablar və tarixi xatirələr</label>
                                </li>
                            </ul> : null
                            }
                        </div>
                        <div className='w-full border-b-[2px] border-[#828091] py-[15px]'>
                            <div onClick={()=> setCategory(!category)} className='flex items-center justify-between cursor-pointer'>
                                <span  className='text-[#44415a] text-[16px] font-medium'>Kategoriya</span>
                                <Image src={downGray} alt='down gray'/>
                            </div>
                            {
                                category ?
                                <ul className='mt-[9px] flex flex-col gap-[10px]'>
                                <li className='flex items-center gap-[8px]'>
                                    <input type="checkbox" name="kat-all" id="kat-all" className='w-[20px] h-[20px] cursor-pointer'/>
                                    <label htmlFor="kat-all" className='text-[16px] text-[#828091] cursor-pointer selection:bg-transparent'>Hamısı</label>
                                </li>
                                <li className='flex items-center gap-[8px]'>
                                    <input type="checkbox" name="kat-trend" id="kat-trend" className='w-[20px] h-[20px] cursor-pointer'/>
                                    <label htmlFor="kat-trend" className='text-[16px] text-[#828091] cursor-pointer selection:bg-transparent'>Trend</label>
                                </li>
                                <li className='flex items-center gap-[8px]'>
                                    <input type="checkbox" name="kat-recommended" id="kat-recommended" className='w-[20px] h-[20px] cursor-pointer'/>
                                    <label htmlFor="kat-recommended" className='text-[16px] text-[#828091] cursor-pointer selection:bg-transparent'>Tövsiyə olunanlar</label>
                                </li>
                                <li className='flex items-center gap-[8px]'>
                                    <input type="checkbox" name="upcoming-auctions" id="upcoming-auctions" className='w-[20px] h-[20px] cursor-pointer'/>
                                    <label htmlFor="upcoming-auctions" className='text-[16px] text-[#828091] cursor-pointer selection:bg-transparent'>Qarşıdan gələn hərraclar</label>
                                </li>
                            </ul> : null
                            }
                        </div>
                        <div className='w-full border-b-[2px] border-[#828091] py-[15px]'>
                            <div onClick={()=> setLocation(!location)} className='flex items-center justify-between cursor-pointer'>
                                <span  className='text-[#44415a] text-[16px] font-medium'>Məkan</span>
                                <Image src={downGray} alt='down gray'/>
                            </div>
                            {
                                location ? 
                                <ul className='mt-[9px] flex flex-col gap-[10px]'>
                                <li className='flex items-center gap-[8px]'>
                                    <input type="checkbox" name="loc-all" id="loc-all" className='w-[20px] h-[20px] cursor-pointer'/>
                                    <label htmlFor="loc-all" className='text-[16px] text-[#828091] cursor-pointer selection:bg-transparent'>Hamısı</label>
                                </li>
                                <li className='flex items-center gap-[8px]'>
                                    <input type="checkbox" name="bakı" id="bakı" className='w-[20px] h-[20px] cursor-pointer'/>
                                    <label htmlFor="bakı" className='text-[16px] text-[#828091] cursor-pointer selection:bg-transparent'>Bakı</label>
                                </li>
                                <li className='flex items-center gap-[8px]'>
                                    <input type="checkbox" name="sumqayıt" id="sumqayıt" className='w-[20px] h-[20px] cursor-pointer'/>
                                    <label htmlFor="sumqayıt" className='text-[16px] text-[#828091] cursor-pointer selection:bg-transparent'>Sumqayıt</label>
                                </li>
                            </ul> : null
                            }
                        </div>
                        <div className='w-full  py-[15px]'>
                            <div onClick={()=> setPrice(!price)} className='flex items-center justify-between cursor-pointer'>
                                <span className='text-[#44415a] text-[16px] font-medium'>Qiymət</span>
                                <Image src={downGray} alt='down gray'/>
                            </div>
                            {
                                price ? 
                                <div className='grid grid-cols-2 gap-[50px] mt-[9px]'>
                                <input type="number" placeholder='Min' className='py-[10px] text-center rounded-[8px] border-[1px] border-[#c1bfc8] outline-none'/>
                                <input type="number" placeholder='Max' className='py-[10px] text-center rounded-[8px] border-[1px] border-[#c1bfc8] outline-none'/>
                            </div> : null
                            }
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-3/4'>
                    <div className='flex items-center justify-end gap-[32px]'>
                        <div className='flex items-center gap-[5px]'>
                            <span className='text-[16px] text-[#828091] font-medium'>Sevimli məhsullar</span>
                            <Image src={starGray} alt='star gray'/>
                        </div>
                        <div className='flex items-center gap-[5px]'>
                            <span className='text-[16px] text-[#828091] font-medium'>Son əlavələr</span>
                            <Image src={downGray} alt='down gray'/>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-[32px] mt-[32px]'>
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

export default page
