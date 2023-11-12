/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function Card({children}) {
    return (
        <div className='p-4 overflow-hidden bg-white rounded-lg shadow-lg'>
            {children}
        </div>
    );
}

function Title({children}) {
    return (
        <div className='p-4 border-b'>
            <h1 className='text-2xl'>{children}</h1>
        </div>
    );
}
function Body({children}) {
    return (
        <div className='leading-relaxed p-4'>{children}</div>
    );
}
function Footer({children}) {
    return (
        <div className='leading-relaxed p-4'>{children}</div>
    );
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;