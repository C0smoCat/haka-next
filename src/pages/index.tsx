import Head from "next/head";
import { Oswald } from "next/font/google";
import React from "react";
import classNames from "classnames";
import s from "./style.module.css";

import 'swiper/css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SwiperBlock from "@/components/SwiperBlock";

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
            <SwiperBlock/>
            <Footer/>
        </main>
    </>);
}
