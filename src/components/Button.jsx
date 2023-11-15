/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import clsx from 'clsx';
import React from 'react';

// Defining a functional component named Button that takes props as its parameter
export default function Button(props) {
    const { children, text, type = 'submit', className = 'bg-blue-600 hover:bg-blue-700' } = props;
    return (
        <div className='flex flex-col justify-center items-center'>
            {/*via props variabel  */}
            <button
                {...props}
                className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 inline-flex justify-center whitespace-nowrap items-center text-white font-bold py-2 px-4 h-10 rounded`}>
                {/* Displaying either the 'text' prop or 'children' prop */}
                {text || children}
            </button>

            {/* via clsx */}
            {/* <button
                {...props}
                type={type}
                className={clsx(
                    className,
                    '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center text-white font-bold py-2 px-4 rounded mt-5',
                )}
            >
                {' '}
                clsx
                {text || children}
            </button> */}
        </div>
    );
}
