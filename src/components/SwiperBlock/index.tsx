import React from 'react';
import s from "@/pages/style.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import data from "../../asd.json";

function SwiperBlock() {
    return (
        <Swiper
            spaceBetween={ 50 }
            slidesPerView={ 4 }
            className={ s.slider }
            modules={ [Navigation, Autoplay] }
            navigation={ {
                enabled: true
            } }
            autoplay={ {
                delay: 5_000
            } }
            loop
        >
            { data.map((slide, slideInd) => (
                <SwiperSlide key={ slideInd } className={ s.slide }>
                    <div>
                        <img src={ slide.image }/>
                    </div>
                    <div>
                        <div className={ s.slideTitle }>
                            { slide.company } | { slide.task }
                        </div>
                        <div className={ s.slideDescriptionBlock }>
                            <h3 className={ s.slideDescription }>
                                { slide.short_description }
                            </h3>
                            <div className={ s.slideBtnContainer }>
                                <span className={ s.slideBtn }>➜</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )) }
        </Swiper>
    );
}

export default SwiperBlock;
