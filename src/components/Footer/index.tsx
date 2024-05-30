import React from 'react';
import classNames from "classnames";
import s from "./style.module.css";
import Button from "@/components/Button";

function Footer() {
    return (
        <div className={ classNames(s.container, s.footer) }>
            <div>
                <div className={ classNames(s.footerArrows, s.footer) }>
                    <div className={ classNames(s.slideBtnContainer, s.slideBtnRotateContainer) }>
                        <span className={ s.slideBtn }>➜</span>
                    </div>
                    <div className={ s.slideBtnContainer }>
                        <span className={ s.slideBtn }>➜</span>
                    </div>
                </div>
            </div>
            <div>
                <Button
                    rightIcon={
                        <span className={ s.slideBtn }>➜</span>
                    }
                >
                    Посмотреть все работы
                </Button>
            </div>
        </div>
    );
}

export default Footer;
