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
import homeTitle from '../public/svgs/home-title.svg'
import sticker1 from '../public/imgs/sticker-img1.jpeg'
import sticker2 from '../public/imgs/sticker-img2.jpeg'
import sticker3 from '../public/imgs/sticker-img3.jpeg'
import sticker4 from '../public/imgs/sticker-img4.jpeg'
import homeImg from '../public/imgs/home-img.png'
import Image from "next/image";
import Card from "@/components/card";
import AboutCard from "@/components/aboutCard";
import IndicatorCard from "@/components/indicatorCard";


export default function Home() {
  const prductData = [1, 2, 3, 4]
  const aboutData = [1, 2, 3]
  return (
    <div className="w-full">
      <div className="w-full flex gap-[20px] md:flex-row flex-col justify-between md:px-[80px] px-[16px] md:pt-[75px] pt-[50px] pb-[50px] bg-[#eefafa]">
        <div className="flex flex-col md:items-start items-center md:w-1/2 w-full">
          <span className="text-[#1EA59A] font-medium md:text-[16px] text-[12px]">HƏRRACIN FAVORİ MƏTKƏZİ</span>
          <span className="lg:text-[36px] md:text-[28px] text-[24px] font-medium text-[#050123] lg:me-[95px] md:text-start text-center">Bənzərsiz məhsulların axtarırsınız? İndi qoşulun və ən yaxşı təklifləri əldə edin!</span>
          <span className="text-[#44415A] mt-[16px] md:text-[18px] text-[16px] md:text-start text-center">Dəyərli istifadəçilərimizə xüsusi təcrübə təqdim etmək üçün buradayıq! Onlayn auksionlarla dolu maraqlı dünyaya addım atın və istədiyiniz əşyaları ən yaxşı qiymətlərlə əldə edin.</span>
          <Link href='/products' className="px-[40px] py-[15px] font-bold md:text-[24px] text-[16px] text-[#fff] rounded-[8px] bg-[#1EA59A] md:mt-[50px] mt-[30px]">Elə indi başla</Link>
        </div>
        <div className="flex items-end justify-center md:w-1/2 w-full">
          <div className="bg-gradient-to-t from-[#1ea59a] to-[#aaf0eb] flex justify-center items-end  lg:min-w-[430px] md:min-w-[380px] min-w-[350px] lg:h-[430px] md:h-[380px] h-[350px] rounded-[430px] relative">
            <Image src={homeTitle} alt="" className="absolute bottom-[-20px] left-[-98px] z-50 md:w-[180px] w-[100px] md:h-[180px] h-[100px] md:translate-x-0 translate-x-[80px]" />
            <Image src={homeImg} alt="home img" className="lg:w-[320px] md:w-[300px] w-[280px] lg:h-[380px] md:h-[350px] h-[300px] mb-6" />
          </div>
        </div>
      </div>
      <div className="md:px-[80px] px-[16px] max-w-[1550px] mx-auto overflow-auto md:my-[160px] my-[80px]">
        <div className="flex md:justify-center gap-[32px] md:min-w-[1250px] min-w-[750px] ">
          <div className="relative rounded-[24px] overflow-hidden md:w-[300px]  w-[165px]">
            <Image src={AntiquesImg} alt="Antiques img" className="w-full h-full" />
            <div className="absolute left-0 top-0 w-full h-full bg-[#000] bg-opacity-25 flex items-center justify-center">
              <span className="bg-[#000] bg-opacity-50 md:px-[44px] px-[18px] md:py-[12px] py-[10px] md:text-[24px] text-[16px] mx-[20px] font-bold text-[#fff] rounded-[8px]">Antiques</span>
            </div>
          </div>
          <div className="relative rounded-[24px] overflow-hidden md:w-[300px] w-[165px]">
            <Image src={CarsImg} alt="Cards img" className="w-full h-full" />
            <div className="absolute left-0 top-0 w-full h-full bg-[#000] bg-opacity-25 flex items-center justify-center">
              <span className="bg-[#000] bg-opacity-50 md:px-[44px] px-[18px] md:py-[12px] py-[10px] md:text-[24px] text-[16px] font-bold text-[#fff] rounded-[8px]">Cars</span>
            </div>
          </div>
          <div className="relative rounded-[24px] overflow-hidden md:w-[300px] w-[165px]">
            <Image src={ElectronicsImg} alt="Electronics img" className="w-full h-full" />
            <div className="absolute left-0 top-0 w-full h-full bg-[#000] bg-opacity-25 flex items-center justify-center">
              <span className="bg-[#000] bg-opacity-50 rounded-[8px] md:px-[44px] px-[18px] md:py-[12px] py-[10px] md:text-[24px] text-[16px] font-bold text-[#fff]">Electronics</span>
            </div>
          </div>
          <div className="relative rounded-[24px] overflow-hidden md:w-[300px] w-[165px]">
            <Image src={AccessioriesImg} alt="Accessiories img" className="w-full h-full" />
            <div className="absolute left-0 top-0 w-full h-full bg-[#000] bg-opacity-25 flex items-center justify-center">
              <span className="md:px-[44px] px-[18px] md:py-[12px] py-[10px] md:text-[24px] text-[16px] text-[#fff] bg-[#000] bg-opacity-50 font-bold rounded-[8px]">Accessiories</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-t from-[#f0ffff] via-[#f0ffff] to-[#f0ffff]">
        <div className="flex flex-col items-center justify-center py-[72px] ">
          <span className="md:text-[16px] text-[14px] text-[#1ea59a]">Vaxt itirmədən indi başla</span>
          <span className="md:text-[50px] text-[22px] font-medium text-[#050123] xl:w-[50%] lg:w-[60%] md:w-[70%] text-center">HƏRRAC.ORG Hərrac: Unikal Fürsətləri Qaçırmayın!</span>
          <p className="py-[24px] text-[16px] text-[#44415a] md:-[40%] text-center">Hərrac keçirməklə özəl məhsulları sərfəli qiymətlərlə satmaq şansınız var, mövcud fürsətlərdən dəyərləndirin.</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-[50px] gap-y-[25px] text-[16px] list-disc text-[#050123]">
            <li>Hərracın adı</li>
            <li>Hərracın detayları</li>
            <li>Hərracın qiyməti</li>
            <li>Hərracın vaxtı</li>
            <li>Hərracın məkanı</li>
          </ul>
          <Link href='/announcement' className="mt-[40px] px-[32px] py-[16px] rounded-[8px] bg-[#1ea59a] text-[#fff] text-[16px] font-medium">Hərrac elan et</Link>
        </div>
        <div className="">
          <Image src={sticker1} alt="sticker-1" className="md:block hidden w-[100px] h-[100px] rounded-[100px] absolute lg:left-[172px] md:left-[30px] top-[151px]" />
          <Image src={sticker2} alt="sticker-2" className="md:block hidden w-[50px] h-[50px] rounded-[100px] absolute lg:left-[222px] md:left-[150px] top-[427px]" />
          <Image src={sticker3} alt="sticker-3" className="md:block hidden w-[60px] h-[60px] rounded-[200px] absolute lg:right-[316px] md:right-[200px] top-[36px]" />
          <Image src={sticker4} alt="sticker-4" className="md:block hidden w-[120px] h-[120px] rounded-[100px] absolute lg:right-[100px] md:right-[45px] top-[220px]" />
          <div className="md:block hidden w-[20px] h-[20px] bg-[#1ea59a] rounded-[200px] absolute left-[120px] top-[350px]"></div>
          <div className="md:block hidden w-[20px] h-[20px] bg-[#FF6B00] rounded-[200px] absolute right-[291px] top-[477px]"></div>
        </div>
      </div>
      <div className="md:px-[80px] px-[16px] py-[80px]">
        <div className="flex flex-col items-center">
          <span className="md:text-[36px] text-[24px] font-semibold text-[#050123]">Hərracları kəşf et</span>
          <p className="mt-[10px] md:text-[18px] text-[16px] font-medium text-[#828091] mx-auto md:w-[70%] text-center">Növbəti hərracı hara etməyi istədiynizə qərar verin!</p>
        </div>
        <div className="mt-[60px] flex flex-col gap-[90px]">
          <div className="overflow-auto">
            <div className="flex justify-between items-center">
              <span className="md:text-[24px] text-[18px] font-medium text-[#050123]">Trend</span>
              <Link href='/' className="md:text-[18px] text-[16px] font-medium text-[#1ea59a]">Hamsı</Link>
            </div>
            <div className="mt-[16px] flex  gap-[32px] min-w-[1220px]">
              {
                prductData.map(item => {
                  return <Card key={item} />
                })
              }
            </div>
          </div>
          <div className="overflow-auto">
            <div className="flex justify-between items-center">
              <span className="md:text-[24px] text-[18px] font-medium text-[#050123]">Qarşıdan gələn hərraclar</span>
              <Link href='/' className="md:text-[18px] text-[16px] font-medium text-[#1ea59a]">Hamsı</Link>
            </div>
            <div className="mt-[16px] flex gap-[32px] min-w-[1220px]">
              {
                prductData.map(item => {
                  return <Card key={item} />
                })
              }
            </div>
          </div>
          <div className="overflow-auto">
            <div className="flex justify-between items-center">
              <span className="md:text-[24px] text-[18px] font-medium text-[#050123]">Tövsiyə olunanlar</span>
              <Link href='/' className="md:text-[18px] text-[16px] font-medium text-[#1ea59a]">Hamsı</Link>
            </div>
            <div className="mt-[16px] flex gap-[32px] min-w-[1220px]">
              {
                prductData.map(item => {
                  return <Card key={item} />
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className="py-[120px] ">
        <div className="w-full md:flex-row flex-col bg-[#F5F6FD] md:ps-[80px] flex items-center xl:gap-x-[212px] lg:gap-x-[100px]">
          <div className="py-[25px] md:px-0 px-[16px] md:w-[55%] w-full ">
            <div className="flex flex-col md:items-start items-center w-full">
              <span className="md:text-[36px] text-[24px] font-medium text-[#050123] ">İndi al</span>
              <p className="pt-[8px] md:text-[18px] text-[16px] text-[#828091] md:text-start text-center">Programınıza uyğun olaraq təsviri sənət, dekorativ əşyalar, zərgərlik və saatlar alın və ya satın</p>
            </div>
            <div className="md:mt-[36px] mt-[30px] mb-[15px] flex md:justify-start justify-center">
              <Link href='/profile/activity-harrac' className="px-[26px] py-[13px] border-[1px] border-[#828091] rounded-[8px] md:text-[20px] text-[18px] font-medium md:text-[#050123] text-[#f2fff9] md:bg-transparent bg-[#050123]">Şəxsi satışlara baxın</Link>
            </div>
          </div>
          <div className="md:w-[45%] w-full h-[100%]">
            <Image src={nowBuy} alt="Now buy" className="w-full h-[288px]" />
          </div>
        </div>
      </div>
      <div className="lg:px-[80px] md:px-[50px] px-[16px] py-[60px]">
        <div className="flex flex-col items-center">
          <span className="md:text-[36px] text-[24px] font-semibold text-[#050123] ">Haqqımızda Dedikləri</span>
          <p className="pt-[10px] md:text-[18px] text-[16px] font-medium text-[#828091] md:w-[70%] mx-auto text-center">Növbəti hərracı hara etməyi qərar vermık üçün HERRAC.ORG vebsaytından istifadə edən istifadəçilərin rəyləri ilə maraqlanırsınız? Gəlin aşağıda yoxlayın!</p>
        </div>
        <div className="py-[60px] grid lg:rid-cols-3 md:grid-cols-3 justify-between gap-[32px] ">
          {
            aboutData.map(item => {
              return <AboutCard key={item} />
            })
          }
        </div>
        <div className="flex justify-center">
          <Link href='/about' className="py-[12px] px-[46px] md:text-[#1ea59a] text-[#fff] md:text-[24px] text-[18px] font-medium border-[2px] border-[#1ea59a] rounded-[8px] md:bg-transparent bg-[#1ea59a] ">Daha çox</Link>
        </div>
      </div>
      <div className="pt-[77px] ">
        <div className="relative flex justify-center items-center">
          <Image src={infoImg} alt="" className="absolute left-0 top-0 h-full z-[-1] " />
          <div className="py-[40px] flex flex-col items-center bg-[#000] w-full bg-opacity-50">
            <span className="md:text-[44px] text-[24px] font-bold text-[#fff] md:w-[60%] mx-auto text-center">Yeniliklərdən anında xəbərdar olmaq üçün abunə olun</span>
            <div className="py-[7px] pe-[7px] ps-[18px] bg-[#fff] rounded-[8px] flex items-center justify-between md:mt-[40px] mt-[30px] max-w-[400px]">
              <input type="email" id="email" placeholder="E-mailinizi daxil edin" className="outline-none text-[#828091]" />
              <button className="px-[18px] py-[9px] bg-[#1ea59a] rounded-[4px] text-[#fff] font-medium">Abonə ol</button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-[80px] px-[16px] py-[120px] bg-[#fff] grid lg:grid-cols-4 md:grid-cols-2  gap-[32px] ">
        <IndicatorCard img={indicatorIcon1} number="1000+" text="Xoşbəxt Müştəri" />
        <IndicatorCard img={indicatorIcon2} number="100+" text="Təqdirəlayiq rəylər" />
        <IndicatorCard img={indicatorIcon3} number="100+" text="Qalib Müştəri" />
        <IndicatorCard img={indicatorIcon4} number="100+" text="Yeni Şərhlər" />
      </div>
    </div>
  );
}
