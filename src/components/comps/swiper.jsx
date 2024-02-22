import { Swiper, SwiperSlide } from 'swiper/react';

import './swiper.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export const SlideShow =  () => {
    return (
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
            clickable: true
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='slideDiv' >
                <h3>BSP VW Passat</h3>
                <img src="../pwa-maskable-192x192.png" alt="auto" /> 
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slideDiv'>
                <h3>BSP Audi Q7</h3>
                <img src="./pwa-maskable-192x192.png" alt="auto" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slideDiv'>
                <h3>BSP BMW E90</h3>
                <img src="./pwa-maskable-192x192.png" alt="auto" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slideDiv'>
                <h3>BSP Skoda superb</h3>
                <img src="./pwa-maskable-192x192.png" alt="auto" />
            </div>
        </SwiperSlide>
        ...
      </Swiper>
    );
  };