/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import clsx from 'clsx';
import React from 'react';

// Defining a functional component named Button that takes props as its parameter
export default function Button(props) {
    
    // Destructuring props to extract 'children' and 'text' default clasName Tailwind css
    const { children, text,className='bg-blue-600 hover:bg-blue-700' } = props; 

    // Returning a button element with some styles and classes
    return (
        <div className='bg-slate-500 grid place-content-center min-h-screen'>
        {/*via props variabel  */}
        <button {...props} className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center text-white font-bold py-2 px-4 rounded`}>
            {/* Displaying either the 'text' prop or 'children' prop */}
            {text || children}
        </button>
        
        {/* via clsx */}
        <button {...props} className={clsx(
            className,
            '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center text-white font-bold py-2 px-4 rounded mt-5'
        )}> clsx
            {text || children}
        </button>
        </div>
    );
}
