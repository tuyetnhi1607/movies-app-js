import React from 'react'
import './button.scss';

function Button(props) {
    return (
        <div>
            <button 
                className={`btn ${props.className ? props.className : ''}`}
                onClick={props.onClick ? () => props.onClick():null}    
            >
                {props.children}
            </button>
        </div>
    )
}

export default Button
