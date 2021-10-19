import React from "react";
import './Button.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    return (
        <button className={'btn ${checkButtonStyle} ${checkButtonSize}'} onClick={onClick}
    type={type}>
    {children}
</button>    )
}

