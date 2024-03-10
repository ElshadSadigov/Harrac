import Image from 'next/image'
import React from 'react'
import ruleImg from '../../public/imgs/about-img.png'

const Page = () => {
  return (
    <div>
        <div className='relative'>
            <Image src={ruleImg} alt='Qaydalar img' className='w-full'/>
            <div className='w-full absolute left-0 top-0 bg-[#000] bg-opacity-50 h-full'></div>
        </div>
        <div className='px-[80px] pb-[120px] pt-[50px]'>
            <div className='flex flex-col items-center'>
                <span className='text-[32px] font-semibold text-[#050123]'>Qaydalar</span>
                <p className='mt-[10px] text-[16px] text-[#050123] text-opacity-75'>Azərbaycanda maraqlı hərraclar və misilsiz onlayn tender təcrübəsi üçün əsas ünvanınız olan "HƏRRAC.ORG"-a xoş gəlmisiniz! </p>
            </div>
            <div className='mt-[50px] flex flex-col gap-[30px]'>
                <p className='text-[16px] text-[#050123]'>THIS DOCUMENT CONTAINS IMPORTANT INFORMATION REGARDING YOUR RIGHTS AND OBLIGATIONS, AS WELL AS CONDITIONS, LIMITATIONS, AND EXCLUSIONS THAT APPLY TO YOU. PLEASE READ IT CAREFULLY.</p>
                <p className='text-[16px] text-[#050123]'>BY ACCESSING OR USING THE DIGITAL PLATFORMS (AS DEFINED BELOW), YOU ACCEPT AND AGREE TO BE BOUND BY THESE TERMS OF USE (“TERMS OF USE”) (INCLUDING THE ARBITRATION AGREEMENT AND CLASS ACTION WAIVER SET FORTH HEREIN, PURSUANT TO WHICH YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION (EXCEPT AS OTHERWISE PROVIDED HEREIN) AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION) and our Privacy Policy , AND YOU REPRESENT THAT (A) YOUR ACCESS TO AND USE OF THE DIGITAL PLATFORMS WILL BE IN ACCORDANCE WITH THESE TERMS OF USE AND ALL APPLICABLE LAWS, RULES AND REGULATIONS AND (B) YOU ARE OF LEGAL AGE TO ENTER INTO A BINDING CONTRACT. If you do not agree to these Terms of Use and the Privacy Policy , you may not access or otherwise use the Digital Platforms.</p>
                <p className='text-[16px] text-[#050123]'>The following Terms of Use are entered into by and between you and Sotheby’s (“Sotheby’s” or “we” or “us” or “our” or other similar pronouns) and, together with any documents incorporated herein by reference, govern your access to and use of the Sotheby’s website at www.sothebys.com , and the websites for Sotheby’s Wine, Sotheby’s Diamonds, or any other Sotheby’s website on which this is posted (each, a “Sotheby’s Website”), whether accessed through the Sotheby’s website (desktop or mobile) and/or Sotheby’s applications for mobile and tablet devices (collectively, the “Digital Platforms”).</p>
                <p className='text-[16px] text-[#050123]'>For the avoidance of doubt, your use of certain areas, services or features of the Digital Platforms may be subject to additional terms, which will be posted or otherwise made available to you in connection with such area or feature. By way of example, your purchase of non-auction products through the Sotheby’s Digital Platforms will be governed by the applicable Terms of Sale, and your participation in online auctions shall be governed by the Conditions of Sale applicable to the relevant auction. Sotheby’s consignments and purchases are governed by terms located at www.sothebys.com .</p>
                <p className='text-[16px] text-[#050123]'>We may change these Terms of Use from time to time, at any time without notice to you, by posting such changes on the Sotheby’s Websites. It is your responsibility to periodically check the Terms of Use. You will know if these Terms of Use have been revised since your last visit to the Digital Platforms by referring to the “Last Modified” date at the bottom of this page. IF YOU DO NOT AGREE TO THE CURRENT VERSION OF THE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO REFRAIN FROM ACCESSING OR OTHERWISE USING THE DIGITAL PLATFORMS.</p>
                <p className='text-[16px] text-[#050123]'>1. Electronic Communication. When you access or use the Digital Platforms, provide your e-mail address to a Sotheby’s representative, or send us e-mails, you are communicating with us electronically. In so doing, you consent to receive communications from us electronically. We will communicate with you by e-mail or by posting notices on the Digital Platforms. You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communication be in writing.</p>
                <p className='text-[16px] text-[#050123]'>2. Proprietary Rights. As between you and Sotheby's, Sotheby's owns, solely and exclusively, all right, title and interest in and to the Digital Platforms and all elements thereof, including: all the content (including without limitation audio, images, photographs, illustrations, text, graphics, logos, button icons, other visuals, video, copy, Trademarks, etc.), software, code, data and materials used therein or available thereon; the look and feel, design and organization of the Digital Platforms; the compilation of the content, code, data and materials in the Digital Platforms; and all copyrights, trademark rights, patent rights, database rights, trade secrets, moral rights (including rights of authorship, attribution and subsequent modification) and other intellectual property and proprietary rights (whether registered or unregistered in any jurisdiction) in any of the foregoing. Your use of the Digital Platforms does not grant to you any right, title or interest in any element thereof, and Sotheby’s (or our applicable licensors, partners, or affiliates) owns and retains all right, title and interest (including all intellectual property and proprietary rights) therein and thereto.</p>
            </div>
        </div>
    </div>
  )
}

export default Page
