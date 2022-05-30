import React from 'react';
import './Button.css'
import { Link as Link1 } from 'react-router-dom'; //link na stranku
import { Link as Link2} from 'react-scroll'; //animace pri scrollovani
import './PlayVideo.js';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'button--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, lnk, scroll, text}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
   
        if (scroll == 'true')
        {
            return (
                <>
                
                    <Link2 to={lnk} smooth={true} duration={1000} className='btn-mobile'>
                        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                        onClick={onClick}
                        type={type}
                        >
                            {children}
                        </button>
                    </Link2>
                
                </>
            )
        }
        else
        {
            return (
                <>
                
                    <Link1 to={`${lnk}`} className='btn-mobile'>
                    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}
                    >
                        {children}
                        </button>
                    </Link1>
                
                </>
            )
        }
}
