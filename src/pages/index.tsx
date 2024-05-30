import Head from "next/head";
import { Oswald } from "next/font/google";
import React from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from 'swiper/react';
import data from "../asd.json";
import s from "./style.module.css";
import { Autoplay, Navigation } from "swiper/modules";

import 'swiper/css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({subsets: ["latin"]});

export default function Home() {
    return (<>
        <Head>
            <title>Выполненные проекты</title>
            <meta name="description" content="Портфолио компании"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main className={ classNames(oswald.className, s.body) }>
            <Header/>
            <Swiper
                spaceBetween={ 50 }
                slidesPerView={ 3 }
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
            <Footer/>
        </main>
    </>);
}
