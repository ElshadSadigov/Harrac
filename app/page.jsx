'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import homesagkate from '../public/svgs/homesagkate.svg';
import homesolkate from '../public/svgs/homesolkate.svg';
import ProductSlider from "@/components/ProductSlider";

export default function Home() {
  const prductData = [1, 2, 3, 4]
  const aboutData = [1, 2, 3];
  return (
    <div className="w-full">
        <div className="w-full justify-center md:flex md:justify-between  px-[15px] md:px-[80px]   pt-[50px]  md:pt-[145px] pb-[20px] md:pb-[35px] bg-[#eefafa]">
          <div className="flex  flex-col text-center md:text-start items-center  md:flex md:flex-col md:items-start md:w-1/2  p-[5px] md:p-0 ">
             <span className="text-[#1EA59A] text-[12px] md:text-[20px] font-medium">HƏRRACIN FAVORİ MƏTKƏZİ</span>
             <span className="text-[24px] font-medium text-[#050123] md:hidden">Bənzərsiz məhsullar üçün ən yaxşı təklifləri əldə edin!</span>
             <span className="text-[24px] md:text-[36px] font-medium text-[#050123] me-[95px] hidden md:block">Bənzərsiz məhsulların axtarırsınız? İndi qoşulun və ən yaxşı təklifləri əldə edin!</span>
             <span className="text-[#44415A] mt-[16px] hidden md:block">Dəyərli istifadəçilərimizə xüsusi təcrübə təqdim etmək üçün buradayıq! Onlayn auksionlarla dolu maraqlı dünyaya addım atın və istədiyiniz əşyaları ən yaxşı qiymətlərlə əldə edin.</span>
             <span className=" md:hidden">Onlayn auksionlarla dolu maraqlı dünyaya addım atın və istədiyiniz əşyaları ən yaxşı qiymətlərlə əldə edin.</span>
             <Link href='/products' className="px-[40px] py-[15px] font-bold text-[16px] md:text-[24px] text-[#fff] rounded-[8px] bg-[#FF6B00] mt-[50px]">Elə indi başla</Link>
          </div>
          <div className=" flex justify-center items-end md:flex md:items-end md:justify-start  md:min-w-1/2 mt-[40px] md:mt-0 ">
            <Image src={homeTitle} alt="" className="translate-x-[20px] md:translate-x-[30px] z-50  md:h-[184px] md:w-[184px]  h-[104px] w-[104px]" />
            <div className="translate-x-[-50px]  md:translate-x-[-90px] bg-gradient-to-t from-[#aaf0eb] to-[#1ea59a] flex justify-center md:rotate-[146deg]  w-[300px] h-[300px]  md:min-w-[500px] md:h-[500px] overflow-hidden rounded-[430px] ">
              <Image src={homeImg} alt="home img" className="w-[230px] h-[280px] md:w-[380px] md:h-[450px] translate-y-[20px] md:translate-y-[-15px] md:rotate-[214deg]" />
            </div>
        </div>
      </div>
          {/** New Div */}
      <div className="w-full p-[15px] h-[50px] flex justify-between items-center md:hidden mt-[60px] ">
        <div>
          <p className="text-[18px] font-medium leading-7">Kateqoriya</p>
        </div>
        <div className="w-1/6 flex items-center justify-center ">
          <Image src={homesolkate} className="h-[25px] w-[25px]"/>
          <Image src={homesagkate} className="ml-3"/>
        </div>
      </div>

      <div className="p-[15px] mt-10px md:mt-0 md:px-[80px] md:py-[85px] flex grid grid-cols-2 gap-[12px]  md:flex md:flex-col md:grid md:grid-cols-4 md:gap-[32px] ">
        <div className="relative">
          <Image src={AntiquesImg} alt="Antiques img" className="w-full h-full" />
          <div className="absolute left-3 top-9 md:left-0 md:top-0 md:w-full bg-[#000] bg-opacity-25 rounded-[16px] flex items-center justify-center">
            <span className="bg-[#000] bg-opacity-50 px-[44px] py-[12px] text-[16px] md:text-[24px] font-bold text-[#fff] rounded-[8px]">Əntiq əşya</span>
          </div>
        </div>
        <div className="relative">
          <Image src={CarsImg} alt="Cards img" className="w-full h-full" />
          <div className="absolute left-7 top-9 md:left-0 md:top-0 md:w-full md:h-full bg-[#000] bg-opacity-25 rounded-[16px] flex items-center justify-center">
            <span className="bg-[#000] bg-opacity-50 px-[44px] py-[12px] text-[16px] md:text-[24px] font-bold text-[#fff] rounded-[8px]">Maşın</span>
          </div>
        </div>
        <div className="relative hidden md:block">
          <Image src={ElectronicsImg} alt="Electronics img" className="w-full h-full" />
          <div className="absolute left-0 top-0 w-full h-full bg-[#000] bg-opacity-25 rounded-[16px] flex items-center justify-center">
            <span className="bg-[#000] bg-opacity-50 rounded-[8px] px-[44px] py-[12px] text-[24px] font-bold text-[#fff]">Electronics</span>
          </div>
        </div>
        <div className="relative hidden md:block">
          <Image src={AccessioriesImg} alt="Accessiories img" className="w-full h-full" />
          <div className="absolute left-0 top-0 w-full h-full bg-[#000] bg-opacity-25 rounded-[16px] flex items-center justify-center">
            <span className="px-[44px] py-[12px] text-[24px] text-[#fff] bg-[#000] bg-opacity-50 font-bold rounded-[8px]">Accessiories</span>
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-t from-[#f0ffff] via-[#f0ffff] to-[#f0ffff] ">
        <div className="flex flex-col items-center justify-center py-[72px] ">
          <span className="text-[16px] text-[#1ea59a]">Vaxt itirmədən indi başla</span>
          <span className="text-[50px] font-medium text-[#050123] w-[50%] text-center hidden md:block">HƏRRAC.ORG Hərrac: Unikal Fürsətləri Qaçırmayın!</span>
          <span className="text-[22px] font-medium text-[#050123] w-[90%] text-center md:hidden">Unikal Fürsətləri Qaçırmayın!</span>
          <p className="py-[24px] text-[16px] text-[#44415a] w-[80%] md:w-[40%] text-center">Hərrac keçirməklə özəl məhsulları sərfəli qiymətlərlə satmaq şansınız var, mövcud fürsətləri dəyərləndirin.</p> 
          <ul className="flex grid grid-cols-2 gap-[40px] md:flex md:items-center  md:gap-[50px] text-[16px] list-disc text-[#050123] mt-[170px] md:mt-0">
            <li className="hidden md:block">Hərracın adı</li>
            <li>Hərracın qiyməti</li>
            <li>Hərracın detayları</li>
            <li>Hərracın qiyməti</li>
            <li>Hərracın vaxtı</li>
            <li>Hərracın məkanı</li>
          </ul>
          <Link href='/announcement' className="mt-[40px] px-[32px] py-[16px] rounded-[8px] bg-[#1ea59a] text-[#fff] text-[16px] font-medium">Hərrac elan et</Link>
        </div>
        <div className="">
          <Image src={sticker1} alt="sticker-1" className="md:rounded-[100px] rounded-[8px]  absolute  w-[164px] h-[110px]  left-[224px] top-[260px] md:w-[100px] md:h-[100px]  md:left-[172px] md:top-[151px] " />
          <Image src={sticker2} alt="sticker-2" className="md:rounded-[100px] rounded-[8px]  absolute  w-[164px] h-[110px]  left-[34px] top-[260px] md:w-[50px] md:h-[50px] md:left-[222px] md:top-[427px] " />
          <Image src={sticker3} alt="sticker-3" className="w-[60px] h-[60px] rounded-[200px] absolute right-[316px] top-[36px] hidden md:block" />
          <Image src={sticker4} alt="sticker-4" className="w-[120px] h-[120px] rounded-[100px] absolute right-[100px] top-[220px] hidden md:block" />
          <div className="w-[20px] h-[20px] bg-[#1ea59a] rounded-[200px] absolute left-[120px] top-[350px] hidden md:block"></div>
          <div className="w-[20px] h-[20px] bg-[#FF6B00] rounded-[200px] absolute right-[291px] top-[477px] hidden md:block"></div>
        </div>
      </div>    
      <div className=" p-[50px] md:p-[80px]">
        <div className="flex flex-col items-center">
          <span className="text-[24px]  md:text-[36px] font-semibold text-[#050123]">Hərracları kəşf et</span>
          <p className="mt-[10px] text-[18px] font-medium text-[#828091] mx-auto w-[70%] text-center hidden md:block">Növbəti hərracı hara etməyi qərar vermık üçün HERRAC.ORG vebsaytından istifadə edən istifadəçilərin rəyləri ilə maraqlanırsınız? Gəlin aşağıda yoxlayın!</p>
          <p className="mt-[10px]text-[18px] font-medium text-[#828091] mx-auto w-100% md:w-[70%] text-center md:hidden">Növbəti hərracı hara etməyi istədiynizə qərar verin!</p>
        </div>      
        <div className="mt-[60px] flex flex-col gap-[90px]">  
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[24px] font-medium text-[#050123]">Trend</span>
              <Link href='/' className="text-[18px] font-medium text-[#1ea59a]">Hamsı</Link>
            </div>
            <div className="mt-[16px] grid grid-cols-4 gap-[32px] ">
              {
                prductData.map(item => {
                  return <Card key={item} />
                })
              }
            </div>
            <div className="mt-[16px] grid grid-cols-1 md:grid md:grid-cols-4 md:gap-[32px] md:hidden">
            <ProductSlider prductData={prductData} />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[24px] font-medium text-[#050123]">Qarşıdan gələn hərraclar</span>
              <Link href='/' className="text-[18px] font-medium text-[#1ea59a]">Hamsı</Link>
            </div>
            <div className="mt-[16px] grid grid-cols-4 gap-[32px] ">
              {
                prductData.map(item => {
                  return <Card key={item} />
                })
              }
            </div>
            <div className="mt-[16px] grid grid-cols-1 md:grid md:grid-cols-4 md:gap-[32px] md:hidden">
              <ProductSlider prductData={prductData} />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[24px] font-medium text-[#050123]">Tövsiyə olunanlar</span>
              <Link href='/' className="text-[18px] font-medium text-[#1ea59a]">Hamsı</Link>
            </div>
            <div className="mt-[16px] grid grid-cols-4 gap-[32px] ">
              {
                prductData.map(item => {
                  return <Card key={item} />
                })
              }
            </div>
            <div className="mt-[16px] grid grid-cols-1 md:grid md:grid-cols-4 md:gap-[32px] md:hidden">
            <ProductSlider prductData={prductData} />
            </div>
          </div>
        </div>
      </div>
      <div className="py-[120px]">
        <div className="w-full  bg-[#F5F6FD] md:ps-[80px] md:flex md:items-center md:gap-[212px]">
          <div className="py-[25px] p-[20px] md:p-0">
            <div className="flex justify-center items-center flex-col md:flex md:flex-col">
              <span className="text-[24px] md:text-[36px] font-medium text-[#050123]">İndi al</span>
              <p className="pt-[8px] text-[18px] text-[#828091]">Programınıza uyğun olaraq təsviri sənət, dekorativ əşyalar, zərgərlik və saatlar alın və ya satın</p>
            </div>
            <div className="mt-[36px] mb-[15px] flex justify-center items-center flex-col md:flex md:flex-col">
              <Link href='/profile/activity-harrac' className="px-[26px] py-[13px] border-[1px] border-[#828091] bg-[#050123] md:bg-[#F2FFF9] rounded-[8px] text-[20px] font-medium text-[#F2FFF9] md:text-[#050123]">Şəxsi satışlara baxın</Link>
            </div>
          </div>
          <div>
            <Image src={nowBuy} alt="Now buy" className="md:max-w-[624px]" />
          </div>
        </div>
     </div>
      <div className=" p-[30px] md:p-[0] md:px-[80px] md:py-[60px]">
        <div className="flex flex-col items-center">
          <span className="text-[24px] md:text-[36px] font-semibold text-[#050123] ">Haqqımızda Dedikləri</span>
          <p className="pt-[10px] text-[18px] font-medium text-[#828091] w-[70%] mx-auto text-center hidden md:block">Növbəti hərracı hara etməyi qərar vermık üçün HERRAC.ORG vebsaytından istifadə edən istifadəçilərin rəyləri ilə maraqlanırsınız? Gəlin aşağıda yoxlayın!</p>    
          <p className="pt-[10px] text-[16px] font-medium text-[#828091]  w-[94%] text-center mx-auto md:hidden">Növbəti hərracı hara etməkdə qərarsızsınız? Eləysə şərhlərə nəzər yetirin!</p>
        </div>
        <div className="py-[60px] grid grid-cols-1 gap-[30px] md:grid md:grid-cols-3 md:gap-[32px] ">
          {
            aboutData.map(item => {
              return <AboutCard key={item} />
            })
          }
        </div>
        <div className="flex justify-center">
          <Link href='/about' className="md:py-[12px] md:px-[46px]  py-[14px] px-[50px] md:text-[#1ea59a] text-[#FFFFFF] bg-[#1EA59A] md:bg-[#FFFFFF] text-[18px] md:text-[24px] font-medium border-[2px] border-[#1ea59a] rounded-[8px]">Daha çox</Link>
        </div>
      </div>    
      <div className="pt-[77px] ">
        <div className="relative flex justify-center items-center">
          <Image src={infoImg} alt="" className="absolute left-0 top-0 h-full z-[-1] " />
          <div className="py-[40px] flex flex-col items-center bg-[#000] w-full bg-opacity-50">
            <span className="text-[24px] md:text-[44px] font-bold text-[#fff] w-[100%] md:w-[60%] mx-auto text-center">Yeniliklərdən anında xəbərdar olmaq üçün abunə olun</span>
            <div className="py-[7px] pe-[7px] ps-[18px] bg-[#fff] rounded-[8px] flex items-center justify-between mt-[40px] max-w-[400px]">
              <input type="email" id="email" placeholder="E-mailinizi daxil edin" className="outline-none text-[#828091]" />
              <Link href='/' className="px-[18px] py-[9px] bg-[#1ea59a] rounded-[4px] text-[#fff] font-medium">Abonə ol</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[40px] py-[60px] md:px-[80px] md:py-[120px] bg-[#fff] grid grid-cols-1 gap-[28px] md:grid md:grid-cols-4 md:gap-[32px] ">
        <IndicatorCard img={indicatorIcon1} number="1000+" text="Xoşbəxt Müştəri" />
        <IndicatorCard img={indicatorIcon2} number="100+" text="Təqdirəlayiq rəylər" />
        <IndicatorCard img={indicatorIcon3} number="100+" text="Qalib Müştəri" />
        <IndicatorCard img={indicatorIcon4} number="100+" text="Yeni Şərhlər" />
      </div>
    </div>
  );
}
