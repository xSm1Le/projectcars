import { Swiper, SwiperSlide } from 'swiper/react';
import { useAuth } from '../global/checkStatus';

import './swiper.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export const SlideShow =  () => {
    const {token} = useAuth();

    return (
        <Swiper
        spaceBetween={30}
        effect='fade'
        navigation={true}
        pagination={{
            clickable: true
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper">
            <SwiperSlide>
                    <h3 className='autoname'>BSP VW Passat B8</h3>
                    <img src="../beispielAutos/VW_Passat_B8_Limousine_2.0_TDI_Highline.JPG" alt="auto" />
            </SwiperSlide>
            <SwiperSlide>
                    <h3 className='autoname'>BSP Audi Q7</h3>
                    <img src="../beispielAutos/Audi_Q7.jpg" alt="auto" />
            </SwiperSlide>
            <SwiperSlide>
                    <h3 className='autoname'>BSP BMW E90</h3>
                    <img src="../beispielAutos/BMW_3er_E90.jpg" alt="auto" />
            </SwiperSlide>
            <SwiperSlide>
                    <h3 className='autoname'>BSP Skoda superb</h3>
                    <img src="../beispielAutos/1200px-2019_Skoda_Superb_SE_L_Executive_TDi_2.0_Front.jpg" alt="auto" />
            </SwiperSlide>
        </Swiper>
    );
  };