/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function Input({
    type = 'text',
    className = 'transition-duration-300 focus:border-red-500 focus:ring-1 focus:ring-red-600 w-full p-2 border-slate-300 shadow-sm rounded-lg',
    ...props
}) {
    return <input {...props} name={props.name} type={type} className={className} />;
}

export default Input;
