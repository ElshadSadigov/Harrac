import Image from 'next/image'
import React from 'react'
import contactImg from '../../public/imgs/contact-img.png'
import backIcon from '../../public/svgs/back-icon.svg'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <div className='px-[80px] py-[23px] bg-[#fff] flex items-center justify-between'>
        <div className='flex items-center gap-[8px]'>
          <span className='text-16px] font-medium text-[#050123]'>Ana səhifə</span>
          <span className='text-16px] font-medium text-[#050123]'>/</span>
          <span className='text-16px] font-medium text-[#050123]'>Əlaqə</span>
        </div>
        <Link href='/' className='flex items-center gap-[5px]'>
          <Image src={backIcon} alt='Back icon' />
          <span className='text-[16px] font-medium text-[#050123]'>Geri</span>
        </Link>
      </div>
      <div className='relative w-full' >
        <Image src={contactImg} alt='Contact img' className='w-full' />
        <div className='absolute left-0 top-0 w-full h-full bg-[#000] bg-opacity-50'>
        </div>
      </div>
      <div className='px-[80px] mt-[75px]'>
        <div className='flex flex-col items-center'>
          <span className='text-[32px] font-semibold '>Əlaqə</span>
          <p className='text-[18px] font-medium text-[#828091] text-center w-[65%] mt-[20px]'>Söhbətə qoşulun, sual verin, nəyi bəyəndiyinizi və nəyi daha yaxşı edə biləcəyimizi söyləyin. Əlaqə həmişə xoşdur, belə ki, bizimlə əlaqə saxlamaqdan çekinmeyin.</p>
        </div>
        <div className='mt-[44px] flex gap-[140px] justify-between'>
          <div>
            <div className='flex flex-col items-start'>
              <span className='text-[18px] font-medium text-[#050123] ms-[12px]'>Əlaqə</span>
              <span className='leading-9 mt-[5px] ps-[10px] border-s-[2.5px] border-[#1ea59a] text-[36px] font-extrabold text-[#050123]'><span className='text-[#1ea59a]'>HƏR</span>RAC.ORG</span>
              <p className='mt-[10px] text-[#44415a] ms-[12px]'>Hər kolleksiya bir hekayə danışır. Biz sizə bu hekayəni yaşatmaq fürsətini təklif edirik.</p>
            </div>
            <div className='my-[50px]'>
              <span className='text-[20px] font-medium text-[#050123]'>Ümumi məlumat üçün bizə müraciət et:</span>
              <ul className='mt-[15px] flex flex-col gap-[10px]'>
                <li className='flex items-center gap-[5px]'>
                  <span className='text-[16px] font-medium text-[#050123]'>Ünvan:</span>
                  <span className='text-[16px] text-[#44415a]'>Bakı şəhəri, Ü.Hacıbəyli 80</span>
                </li>
                <li className='flex items-center gap-[5px]'>
                  <span className='text-[16px] font-medium text-[#050123]'>Tel:</span>
                  <span className='text-[16px] text-[#44415a]'>(+994 12) 498 00 92</span>
                </li>
                <li className='flex items-center gap-[5px]'>
                  <span className='text-[16px] font-medium text-[#050123]'>Faks:</span>
                  <span className='text-[16px] text-[#44415a]'>(+994 12) 493 58 72</span>
                </li>
                <li className='flex items-center gap-[5px]'>
                  <span className='text-[16px] font-medium text-[#050123]'>E-mail:</span>
                  <span className='text-[16px] text-[#44415a]'>herracorg2024@gmail.com</span>
                </li>
              </ul>
            </div>
            <div>
              <span className='text-[20px] font-medium text-[#050123]'>Vətəndaşların müraciətləri üçün:</span>
              <ul className='mt-[15px] flex flex-col gap-[10px]'>
                <li className='flex items-center gap-[5px]'>
                  <span className='text-[16px] font-medium text-[#050123]'>Tel:</span>
                  <span className='text-[16px] text-[#44415a]'>(+994 12) 498 00 92</span>
                </li>
                <li className='flex items-center gap-[5px]'>
                  <span className='text-[16px] font-medium text-[#050123]'>E-mail:</span>
                  <span className='text-[16px] text-[#44415a]'>office@scfwca.go.az</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16408.752340633346!2d49.84518124539898!3d40.370994615128964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da97b6f60f3%3A0x559b0d76c5587ad8!2zODAgw5x6ZXlpciBIYWPEsWLJmXlvdiwgQmFrxLE!5e0!3m2!1saz!2saz!4v1709306808750!5m2!1saz!2saz"
             width="600"
             height="480"
             style={{ border: 0 }}
             allowFullScreen=""
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className='my-[100px] px-[80px]'>
        <div className='flex flex-col items-center'>
          <span className='text-[32px] font-semibold text-[#050123] '>Hər hansı bir sual verin?</span>
          <p className='mt-[5px] text-[18px] font-medium text-[#828091]'>E-poçt ünvanınız dərc olunmayacaq. Tələb olunan sahələr qeyd olunub </p>
        </div>
        <div className='mt-[50px] shadow-lg p-[35px]'>
          <div className='grid grid-cols-3 gap-[35px]'>
            <div className='flex flex-col'>
              <label htmlFor="name-surname" className='font-medium text-[16px] text-[#44415a]'>Ad və soyadınız</label>
              <input type="text" id='name-surname' placeholder='Ad və soyadınızı daxil edin' className='mt-[11px] outline-none rounded-[8px] border-[1px] border-[#c1bfc8] px-[24px] py-[20px]'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email" className='font-medium text-[16px] text-[#44415a]'>E-poçtunuz</label>
              <input type="email" id='email' placeholder='E-poçtunuzu daxil edin' className='mt-[11px] outline-none rounded-[8px] border-[1px] border-[#c1bfc8] px-[24px] py-[20px]'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="sector" className='font-medium text-[16px] text-[#44415a]'>Mövzu</label>
              <input type="text" id='sector' placeholder='Mövzunu daxil edin' className='mt-[11px] outline-none rounded-[8px] border-[1px] border-[#c1bfc8] px-[24px] py-[20px]'/>
            </div>
          </div>
          <div className='flex flex-col mt-[35px]'>
            <label htmlFor="mesaj" className='text-[16px] font-semibold'>Mesajınız</label>
            <textarea name="mesaj" id="mesaj" cols="30" rows="10" placeholder='Mesajınızı daxil edin' className='mt-[11px] px-[24px] py-[20px] outline-none border-[1px] border-[#c1bfc8] rounded-[8px] resize-none'>
            </textarea>
          </div>
          <div className='mt-[70px]'>
            <button className='rounded-[8px] bg-[#1EA59A] py-[20px] px-[48px] text-[18px] text-[#fff]'>Göndər</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
