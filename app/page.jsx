import Link from "next/link";
import AntiquesImg from '../public/imgs/Antiques-img.png'
import CarsImg from '../public/imgs/Cars-img.png'
import ElectronicsImg from '../public/imgs/Electronics-img.png'
import AccessioriesImg from '../public/imgs/Accessiories-img.png'
import infoImg from '../public/imgs/info-img.png'
import nowBuy from '../public/imgs/now-buy.png'
import indicatorIcon1 from '../public/svgs/indicator-icon1.svg'
import indicatorIcon2 from '../public/svgs/indicator-icon2.svg'
import indicatorIcon3 from '../public/svgs/indicator-icon3.svg'
import indicatorIcon4 from '../public/svgs/indicator-icon4.svg'
import sticker1 from '../public/imgs/sticker-img1.jpeg'
import sticker2 from '../public/imgs/sticker-img2.jpeg'
import sticker3 from '../public/imgs/sticker-img3.jpeg'
import sticker4 from '../public/imgs/sticker-img4.jpeg'
import Image from "next/image";
import Card from "@/components/card";
import AboutCard from "@/components/aboutCard";
import NewsCard from "@/components/newsCard";
import IndicatorCard from "@/components/indicatorCard";


export default function Home() {
  const prductData = [1, 2, 3, 4]
  const aboutData = [1,2,3]
  return (
    <div className="w-full">
      <div className="w-full px-[80px] pt-[15px] pb-[25px] bg-[#eefafa]">
        <div className="flex flex-col items-start w-1/2">
          <span className="text-[#1EA59A] text-[20px] font-medium">HƏRRACIN FAVORİ MƏTKƏZİ</span>
          <span className="text-[36px] font-medium text-[#050123] me-[95px]">Bənzərsiz məhsulların axtarırsınız? İndi qoşulun və ən yaxşı təklifləri əldə edin!</span>
          <span className="text-[#44415A] mt-[16px]">Dəyərli istifadəçilərimizə xüsusi təcrübə təqdim etmək üçün buradayıq! Onlayn auksionlarla dolu maraqlı dünyaya addım atın və istədiyiniz əşyaları ən yaxşı qiymətlərlə əldə edin.</span>
          <Link href='/' className="px-[40px] py-[15px] font-bold text-[24px] text-[#fff] rounded-[8px] bg-[#1EA59A] mt-[50px]">Elə indi başla</Link>
        </div>
        <div>

        </div>
      </div>
      <div className="px-[80px] py-[85px] grid grid-cols-4 gap-[32px] ">
        <div className="relative">
          <Image src={AntiquesImg} alt="Antiques img" className="w-full h-full"/>
          <div className="absolute left-0 top-0 w-full h-full bg-[#000] bg-opacity-25 rounded-[16px] flex items-center justify-center">
            <span className="bg-[#000] bg-opacity-50 px-[44px] py-[12px] text-[24px] font-bold text-[#fff] rounded-[8px]">Antiques</span>
          </div>
        </div>
        <div className="relative">
          <Image src={CarsImg} alt="Cards img" className="w-full h-full"/>
          <div className="absolute left-0 top-0 w-full h-full bg-[#000] bg-opacity-25 rounded-[16px] flex items-center justify-center">
            <span className="bg-[#000] bg-opacity-50 px-[44px] py-[12px] text-[24px] font-bold text-[#fff] rounded-[8px]">Cars</span>
          </div>
        </div>
        <div className="relative">
          <Image src={ElectronicsImg} alt="Electronics img" className="w-full h-full"/>
          <div className="absolute left-0 top-0 w-full h-full bg-[#000] bg-opacity-25 rounded-[16px] flex items-center justify-center">
            <span className="bg-[#000] bg-opacity-50 rounded-[8px] px-[44px] py-[12px] text-[24px] font-bold text-[#fff]">Electronics</span>
          </div>
        </div>
        <div className="relative">
          <Image src={AccessioriesImg} alt="Accessiories img" className="w-full h-full"/>
          <div className="absolute left-0 top-0 w-full h-full bg-[#000] bg-opacity-25 rounded-[16px] flex items-center justify-center">
            <span className="px-[44px] py-[12px] text-[24px] text-[#fff] bg-[#000] bg-opacity-50 font-bold rounded-[8px]">Accessiories</span>
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-t from-[#f0ffff] via-[#f0ffff] to-[#f0ffff]">
        <div className="flex flex-col items-center justify-center py-[72px] ">
          <span className="text-[16px] text-[#1ea59a]">Vaxt itirmədən indi başla</span>
          <span className="text-[50px] font-medium text-[#050123] w-[50%] text-center">HƏRRAC.ORG Hərrac: Unikal Fürsətləri Qaçırmayın!</span>
          <p className="py-[24px] text-[16px] text-[#44415a] w-[40%] text-center">Hərrac keçirməklə özəl məhsulları sərfəli qiymətlərlə satmaq şansınız var, mövcud fürsətlərdən dəyərləndirin.</p>
          <ul className="flex items-center gap-[50px] text-[16px] list-disc text-[#050123]">
            <li>Hərracın adı</li>
            <li>Hərracın detayları</li>
            <li>Hərracın qiyməti</li>
            <li>Hərracın vaxtı</li>
            <li>Hərracın məkanı</li>
          </ul>
          <Link href='/announcement' className="mt-[40px] px-[32px] py-[16px] rounded-[8px] bg-[#1ea59a] text-[#fff] text-[16px] font-medium">Hərrac elan et</Link>
        </div>
        <div className="">
          <Image src={sticker1} alt="sticker-1" className="w-[100px] h-[100px] rounded-[100px] absolute left-[172px] top-[151px]"/>
          <Image src={sticker2} alt="sticker-2" className="w-[50px] h-[50px] rounded-[100px] absolute left-[222px] top-[427px]"/>
          <Image src={sticker3} alt="sticker-3" className="w-[60px] h-[60px] rounded-[200px] absolute right-[316px] top-[36px]"/>
          <Image src={sticker4} alt="sticker-4" className="w-[120px] h-[120px] rounded-[100px] absolute right-[100px] top-[220px]"/>
          <div className="w-[20px] h-[20px] bg-[#1ea59a] rounded-[200px] absolute left-[120px] top-[350px]"></div>
          <div className="w-[20px] h-[20px] bg-[#FF6B00] rounded-[200px] absolute right-[291px] top-[477px]"></div>
        </div>
      </div>
      <div className="p-[80px]">
        <div className="flex flex-col items-center">
          <span className="text-[36px] font-semibold text-[#050123]">Hərracları kəşf et</span>
          <p className="mt-[10px]text-[18px] font-medium text-[#828091] mx-auto w-[70%] text-center">Növbəti hərracı hara etməyi qərar vermık üçün HERRAC.ORG vebsaytından istifadə edən istifadəçilərin rəyləri ilə maraqlanırsınız? Gəlin aşağıda yoxlayın!</p>
        </div>
        <div className="mt-[60px] flex flex-col gap-[90px]">
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[24px] font-medium text-[#050123]">Trend</span>
              <Link href='/' className="text-[18px] font-medium text-[#1ea59a]">Hamsı</Link>
            </div>
            <div className="mt-[16px] grid grid-cols-4 gap-[32px]">
              {
                prductData.map(item =>{
                  return <Card key={item}/>
                })
              }
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[24px] font-medium text-[#050123]">Qarşıdan gələn hərraclar</span>
              <Link href='/' className="text-[18px] font-medium text-[#1ea59a]">Hamsı</Link>
            </div>
            <div className="mt-[16px] grid grid-cols-4 gap-[32px]">
              {
                prductData.map(item =>{
                  return <Card key={item}/>
                })
              }
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[24px] font-medium text-[#050123]">Tövsiyə olunanlar</span>
              <Link href='/' className="text-[18px] font-medium text-[#1ea59a]">Hamsı</Link>
            </div>
            <div className="mt-[16px] grid grid-cols-4 gap-[32px]">
              {
                prductData.map(item =>{
                  return <Card key={item}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className="py-[120px]">
        <div className="w-full bg-[#F5F6FD] ps-[80px] flex items-center gap-[212px]">
          <div className="py-[25px]">
            <div>
            <span className="text-[36px] font-medium text-[#050123] ">İndi al</span>
            <p className="pt-[8px] text-[18px] text-[#828091]">Programınıza uyğun olaraq təsviri sənət, dekorativ əşyalar, zərgərlik və saatlar alın və ya satın</p>
            </div>
            <div className="mt-[36px] mb-[15px]">
              <Link href='/' className="px-[26px] py-[13px] border-[1px] border-[#828091] rounded-[8px] text-[20px] font-medium text-[#050123]">Şəxsi satışlara baxın</Link>
            </div>
          </div>
          <div>
            <Image src={nowBuy} alt="Now buy" className="max-w-[624px]"/>
          </div>
        </div>
      </div>
      <div className="px-[80px] py-[60px]">
          <div className="flex flex-col items-center">
            <span className="text-[36px] font-semibold text-[#050123] ">Haqqımızda Dedikləri</span>
            <p className="pt-[10px] text-[18px] font-medium text-[#828091] w-[70%] mx-auto text-center">Növbəti hərracı hara etməyi qərar vermık üçün HERRAC.ORG vebsaytından istifadə edən istifadəçilərin rəyləri ilə maraqlanırsınız? Gəlin aşağıda yoxlayın!</p>
          </div>
          <div className="py-[60px] grid grid-cols-3 gap-[32px] ">
            {
              aboutData.map(item =>{
                return <AboutCard key={item} />
              })
            }
          </div>
          <div className="flex justify-center">
            <Link href='/' className="py-[12px] px-[46px] text-[#2335cc] text-[24px] font-medium border-[2px] border-[#2335cc] rounded-[8px]">Daha çox</Link>
          </div>
      </div>
      <div className="pt-[77px] pb-[120px]">
        <div className="relative flex justify-center items-center">
            <Image src={infoImg} alt="" className="absolute left-0 top-0 h-full z-[-1] "/>
            <div className="py-[40px] flex flex-col items-center bg-[#000] w-full bg-opacity-50">
              <span className="text-[44px] font-bold text-[#fff] w-[60%] mx-auto text-center">Yeniliklərdən anında xəbərdar olmaq üçün abunə olun</span>
              <div className="py-[7px] pe-[7px] ps-[18px] bg-[#fff] rounded-[8px] flex items-center justify-between mt-[40px] max-w-[400px]">
                <input type="email"  id="email" placeholder="E-mailinizi daxil edin" className="outline-none text-[#828091]"/>
                <Link href='/' className="px-[18px] py-[9px] bg-[#2335cc] rounded-[4px] text-[#fff] font-medium">Abonə ol</Link>
              </div>
            </div>
        </div>
      </div>
      <div className="px-[80px] py-[60px] bg-[#f5f6fd] flex flex-col">
        <div className="flex flex-col items-center ">
            <span className="text-[36px] font-semibold text-[#050123] ">Xəbərlər</span>
            <p className="mt-[10px] text-[#828091] text-[18px] font-medium ">Hərracı hara etməyə qərar vermək  və ən son xəbərləri bilmək üçün  </p>
        </div>
        <div className="grid grid-cols-3 gap-[32px] my-[60px]">
          {
            aboutData.map(item =>{
              return <NewsCard key={item}/>
            })
          }
        </div>
        <div className="flex justify-center">
          <Link href='/' className="text-[#2335cc] text-[24px] font-medium py-[12px] px-[46px] border-[2px] border-[#2335cc] rounded-[8px]">Daha çox</Link>
        </div>
      </div>
      <div className="px-[80px] py-[120px] bg-[#fff] grid grid-cols-4 gap-[32px] ">
          <IndicatorCard img={indicatorIcon1} number="1000+" text="Xoşbəxt Müştəri"/>
          <IndicatorCard img={indicatorIcon2} number="100+" text="Təqdirəlayiq rəylər"/>
          <IndicatorCard img={indicatorIcon3} number="100+" text="Qalib Müştəri"/>
          <IndicatorCard img={indicatorIcon4} number="100+" text="Yeni Şərhlər"/>
      </div>
    </div>
  );
}
