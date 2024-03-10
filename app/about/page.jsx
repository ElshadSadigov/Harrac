import Link from 'next/link'
import React from 'react'
import backIcon from '../../public/svgs/back-icon.svg'
import aboutImg from '../../public/imgs/about-img.png'
import Image from 'next/image'
import WeAboutCard from '@/components/weAboutCard'

const Page = () => {
  return (
    <div>
        <div className='px-[80px] py-[23px] border-b-[1px] border-[#D9D9DE] flex items-center justify-between'>
            <div className='flex items-center gap-[8px]'>
                <span className='text-[16px] font-medium text-[#050123]'>Ana səhifə</span>
                <span className='text-[16px] font-medium text-[#050123]'>/</span>
                <span className='text-[16px] font-medium text-[#050123]'>Haqqımızda</span>
            </div>
            <Link href='/' className='flex items-center gap-[5px]'>
                <Image src={backIcon} alt='Back icon'/>
                <span className='text-[16px] font-medium'>Geri</span>
            </Link>
        </div>
        <div className='w-full relative'>
            <Image src={aboutImg} alt='About img' className='w-full'/>
            <div className='absolute left-0 top-0 w-full h-full bg-[#000] bg-opacity-50'>

            </div>
        </div>
        <div className='mt-[50px] px-[80px]'>
            <div className='flex flex-col items-center'>
                <span className='text-[32px] font-semibold text-[#050123]'>Haqqımızda</span>
                <span className='text-[18px] font-semibold text-[#050123] my-[10px]'>Harracın unikal səyahəti ilə tanış olun</span>
                <p className='text-[16px] text-[#05023]'>Azərbaycanda maraqlı hərraclar və misilsiz onlayn tender təcrübəsi üçün əsas ünvanınız olan "HƏRRAC.ORG"-a xoş gəlmisiniz! </p>
            </div>
            <div className='grid grid-cols-2 gap-[32px] mt-[50px] mb-[120px]'>
                <WeAboutCard
                id='04.'
                title='Ekspert Dəstəyi'
                text='Suallarınız var? Mütəxəssis Dəstəyi  məhz burada işə düşür. Mütəxəssis komandamız hər addımda sizinlədir və alış-veriş təcrübənizi ən yaxşı şəkildə istiqamətləndirir.'
                />
                <WeAboutCard
                id='02.'
                title='Təhlükəsiz Təklif'
                text='Təklif bir zəmanət olmalıdır, biz sizə bu zəmanəti təqdim edirik. Təhlükəsiz Təklif sayəsində siz hərraclarda iştirak edərkən rahat və ən yaxşı sövdələşmələrdən yararlana bilərsiniz.'
                />
                <WeAboutCard
                id='01.'
                title='Seçilmiş Kolleksiyalar'
                text='Hər kolleksiya bir hekayə danışır; Biz sizə bu hekayəni yaşatmaq fürsətini təklif edirik. Estetik, keyfiyyət və orijinallığı birləşdirərək alış-veriş təcrübənizi qeyri-adi edirik.'
                />
                <WeAboutCard
                id='03.'
                title='Rəqabətcil qiymətlər'
                text='Biz sizə rəqabətli qiymətlərlə alış-verişin zövqünü təklif edirik. Hər bir təklif diqqətlə seçilir və ən yaxşı dəyəri əldə etməyinizə əmin olmaq üçün rəqabətli qiymətə verilir.'
                />
            </div>
        </div>
        <div className='bg-[#fff9e8] px-[80px] py-[60px]'>
            <div className='flex flex-col items-center'>
                <span className='text-[16px] font-semibold text-[#1ea59a]'>2024</span>
                <span className='text-[32px] font-semibold text-[#050123]'>Hekayəmiz</span>
            </div>
            <div className='mt-[20px] flex flex-col gap-[12px]'>
                <p className='text-[16px] text-[#050123]'>Səyahətimiz Azərbaycanda onlayn hərrac təcrübəsini yenidən müəyyənləşdirmək vizyonu ilə başladı. Mədəniyyətimizin zəngin qobelenlərindən ilhamlanaraq, HƏRRAC.ORG ənənəni qabaqcıl texnologiya ilə qüsursuz şəkildə birləşdirən platforma kimi düşünülmüşdür.</p>
                <p className='text-[16px] text-[#050123]'>HƏRRAC, azərbaycanca "hərrac" mənasını verir, tender və ticarətin köhnə təcrübəsinə hörmət etmək öhdəliyimizi əks etdirir. Biz auksionların ruhunu qoruyub saxlamaqla yanaşı, ona müasir rahatlığı aşılamağı hədəfləyirik.</p>
                <p className='text-[16px] text-[#050123]'>Hekayəmizin ürəyində qüsursuz və cəlbedici auksion prosesi üçün texnologiyanın gücündən istifadə etməyə həsr olunmuşuq. HƏRRAC.ORG sadəcə bir platforma deyil; bu, alıcıların və satıcıların virtual bazarda birləşdiyi immersiv rəqəmsal məkandır.</p>
                <p className='text-[16px] text-[#050123]'>Qürurla Azərbaycanda yerləşərək, yerli zövqlərlə səsləşən hərraclar təşkil etməklə, millətimizin müxtəlifliyini qeyd edirik. Bununla belə, bizim əhatə dairəmiz sərhədləri aşaraq beynəlxalq iştirakçıları həyəcana qoşulmağa və HƏRRAC.ORG-də təklif olunan xəzinələri kəşf etməyə dəvət edir.</p>
                <p className='text-[16px] text-[#050123]'>HƏRRAC.ORG internet saytından daha çox şeydir; bir icmadır. Hər bir təklif bizim böyüyən ailəmizin canlı qobeleninə töhfə verir, həvəskarları, kolleksiyaçıları və satıcıları kəşf üçün ortaq ehtirasda birləşdirir.</p>
                <p className='text-[16px] text-[#050123]'>HƏRRAC.ORG-da şəffaflıq bizim təməl daşımızdır. Biz aydın ünsiyyət, təhlükəsiz əməliyyatlar və ən yüksək etik standartlara sadiqlik vasitəsilə etimadın artırılmasına inanırıq.</p>
                <p className='text-[16px] text-[#050123]'>HƏRRAC.ORG-un hekayəsini danışarkən sizi onun açılan fəsillərinin bir hissəsi olmağa dəvət edirik. Hər təklifin bir nağıl danışdığı və hər auksionun yeni macəra üçün fürsət olduğu bu həyəcanverici səyahətdə bizə qoşulun.</p>
                <p className='text-[16px] text-[#050123] mt-[20px]'>HƏRRAC.ORG-un hekayəsini danışarkən sizi onun açılan fəsillərinin bir hissəsi olmağa dəvət edirik. Hər təklifin bir nağıl danışdığı və hər auksionun yeni macəra üçün fürsət olduğu bu həyəcanverici səyahətdə bizə qoşulun.</p>
            </div>
        </div>
        <div className='mt-[100px] mb-[120px] px-[80px] flex flex-col items-center'>
            <span className='text-[32px] text-[#050123] font-semibold '>Bizim mədəniyyətimiz</span>
            <p className='mt-[20px] text-[16px] text-[#050123]'>Mədəniyyətimiz Azərbaycan tarixinə həkk olunmuş çoxillik hərrac ənənələrinə hörmətlə yanaşır. Hərraclar nəsillər boyu mədəni quruluşumuzun bir hissəsi olub, hər bir təkliflə hekayələrin açıldığı canlı bazar yeri kimi xidmət edir. HƏRRAC.ORG sadəcə bir platforma deyil; bu, təklif sənətinə yeni nəfəs verən bu köhnə təcrübələrin müasir davamıdır. Mədəniyyətimiz kolleksiya əşyalarına və nadir xəzinələrə olan dərin köklü ehtirasları əks etdirir. Azərbaycanın incəsənətə, sənətkarlığa və nadir əşyalara qiymət verməklə bağlı zəngin tarixi var. HƏRRAC.ORG kolleksiyaçılar, həvəskarlar və qeyri-adiliyi qiymətləndirənlər üçün rəqəmsal sığınacaq rolunu oynayır və onlara Azərbaycan mədəniyyətini əks etdirən nadir parçaları kəşf etməyə və əldə etməyə imkan verir. Azərbaycan mədəniyyətində auksion ticarətdən daha çox şeydir - bu, ümumi təcrübədir. HƏRRAC.ORG bu kommunal ruha əsaslanaraq, bizim iddiaçılar icmasının əlaqələr qurduğu, hekayələr paylaşdığı və hərracların dinamik dünyasında kollektiv şəkildə iştirak etdiyi məkan yaradır. Kökləri ənənəyə malik olsa da, mədəniyyətimiz uyğunlaşma və innovasiyanı əhatə edir. Azərbaycan əsrlər boyu dəyişiklikləri qəbul edərək inkişaf etmiş bir xalqdır. Eynilə, HƏRRAC.ORG davamlı olaraq təkmilləşir, auksion təcrübəsini artırmaq üçün müasir texnologiyadan istifadə edərək onu müasir auditoriya üçün əlçatan və cəlbedici edir. Azərbaycanın hərrac mədəniyyətinin mərkəzində HƏRRAC.ORG bir platformadan daha çox şeydir; mədəni səyahətdir. Hər bir təklif irsimizə işarədir və hər auksion mədəni mahiyyətimizi müəyyən edən ənənə, şəffaflıq və ehtirasın unikal qarışığını qeyd etmək üçün bir fürsətdir.</p>
        </div>
    </div>
  )
}

export default Page
