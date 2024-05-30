import React, { ReactNode } from 'react';
import s from './style.module.css';

export type ButtonProps = {
    children?: ReactNode,
    leftIcon?: ReactNode,
    rightIcon: ReactNode,
};

function Button({children, leftIcon, rightIcon}: ButtonProps) {
    return (
        <div className={ s.btn }>
            { leftIcon && (
                <div className={ s.leftIcon }>
                    { leftIcon }
                </div>
            ) }
            <div className={ s.children }>
                { children }
            </div>
            { rightIcon && (
                <div className={ s.rightIcon }>
                    { rightIcon }
                </div>
            ) }
        </div>
    );
}

export default Button;
