/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// Defining a functional component named Button that takes props as its parameter
export default function Button(props) {
    
    // Destructuring props to extract 'children' and 'text' default clasName Tailwind css
    const { children, text,className='bg-blue-600 hover:bg-blue-700' } = props; 

    // Returning a button element with some styles and classes
    return (
        // Using spread operator to pass all props to the button element
        <button {...props} className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center text-white font-bold py-2 px-4 rounded`}>
            {/* Displaying either the 'text' prop or 'children' prop */}
            {text || children}
        </button>
    );
}
