/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// Defining a functional component named Button that takes props as its parameter
export default function Button(props) {
    
    // Destructuring props to extract 'children' and 'text'
    const { children, text } = props; 

    // Returning a button element with some styles and classes
    return (
        // Using spread operator to pass all props to the button element
        <button {...props} className='[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md'>
            {/* Displaying either the 'text' prop or 'children' prop */}
            {text || children}
        </button>
    );
}
