import React from 'react';
import s from "./style.module.css";

function Header() {
    return (
        <div className={ s.container }>
            <div className={ s.preheaderContainer }>
                    <span className={ s.preheader }>
                        Только посмотрите, какие у нас
                    </span>
            </div>
            <h1 className={ s.header }>
                Выполненные <span className={ s.headerGradient }>проекты</span>
            </h1>
        </div>
    );
}

export default Header;
