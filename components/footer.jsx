import React from 'react'
import logoPoint from '../public/svgs/Logo-point.svg'
import sosiaIcons from '../public/svgs/sosial-icons.svg'
import footerImg1 from '../public/imgs/footer-img1.png'
import footerImg2 from '../public/imgs/footer-img2.png'
import footerImg3 from '../public/imgs/footer-img3.png'
import footerImg4 from '../public/imgs/footer-img4.png'
import footerImg5 from '../public/imgs/footer-img5.png'
import footerImg6 from '../public/imgs/footer-img6.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full max-w-[1500px] mx-auto lg:px-[80px] md:px-[40px] px-[16px] md:pt-[80px] pt-[30px] bg-[#050123]'>
        <div className='pb-[60px] grid md:grid-cols-4 gap-y-[50px]'>
            <div className='flex flex-col'>
                <div className='flex items-start'>
                    <span className='text-[#1EA59A] text-[30px] font-extrabold'>HƏR</span>
                    <span className='text-[#fff] text-[30px] font-extrabold'>RAC.ORG</span>
                    <Image src={logoPoint} alt='Logo point' className='mt-[11px] ms-[2px]'/>
                </div>
                <span className='text-[#fff] text-opacity-75 text-[14px]'>Hər kolleksiya bir hekayə danışır. Biz sizə bu hekayəni yaşatmaq fürsətini təklif edirik.</span>
                <div className='mt-[25px]'>
                    <span className='text-[#fff] font-medium'>Bizi izləyin</span>
                    <div >
                        <Image src={sosiaIcons} alt='Sosial icons' width={202} height={36} className='ms-[-15px]'/>
                    </div>
                </div>
            </div>
            <div className='flex md:justify-center'>
                <div>
                    <span className='text-[#fff] font-medium text-[16px]'>Vacib linklər</span>
                    <ul className='grid grid-cols-1 gap-[10px] mt-[20px] text-[#fff] text-opacity-75 text-[14px]'>
                        <li><Link href="/">Hərrac</Link></li>
                        <li><Link href="/">Kateqoriya</Link></li>
                        <li><Link href="/">Məkan</Link></li>
                        <li><Link href="/">Xidmət</Link></li>
                        <li><Link href="/">Qaydalar</Link></li>
                    </ul>
                </div>
            </div>
            <div className='flex md:justify-center'>
                <div>
                    <span className='text-[#fff] font-medium text-[16px]'>Kömək və dəstək</span>
                    <ul className='grid grid-cols-1 gap-[10px] mt-[20px] text-[#fff] text-opacity-75 text-[14px]'>
                        <li><Link href='/'>Haqqımızda</Link></li>
                        <li><Link href='/'>FAQ</Link></li>
                        <li><Link href='/'>Qiymətlər</Link></li>
                        <li><Link href='/'>Dəstək</Link></li>
                        <li><Link href='/'>Yardım mərkəzi</Link></li>
                    </ul>
                </div>
            </div>
            <div className='flex md:justify-end'>
                <div>
                    <div>
                        <span className='text-[#fff] font-medium text-[16px]'>Əlaqə</span>
                        <ul className='grid grid-cols-1 gap-[10px] mt-[20px] text-[#fff] text-opacity-75 text-[14px]'>
                            <li><Link href='/'>Verdiyiniz feedbacklər bizim üçün önəmlidir.</Link></li>
                            <li><Link href='/'>Phone: +994 99 315 54 75</Link></li>
                            <li><Link href='/'>E-mail: infoherrac.org@gmail.com</Link></li>
                        </ul>
                    </div>
                    <div className='mt-[10px]'>
                        <span className='text-[#fff] font-medium text-[16px]'>İnstagramdan</span>
                        <ul className='grid grid-cols-3 '>
                            <li><Image src={footerImg1} alt='Footer img-1'/></li>
                            <li><Image src={footerImg2} alt='Footer img-2'/></li>
                            <li><Image src={footerImg3} alt='Footer img-3'/></li>
                            <li><Image src={footerImg4} alt='Footer img-4'/></li>
                            <li><Image src={footerImg5} alt='Footer img-5'/></li>
                            <li><Image src={footerImg6} alt='Footer img-6'/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='border-t-[1px] border-[#fff] border-opacity-75 py-[10px] flex justify-center'>
            <span className='text-[#fff] text-opacity-75 text-[12px] font-medium'>© HƏRRAC.ORG - Bütün Hüquqlar Qorunur</span>
        </div>
    </div>
  )
}

export default Footer
