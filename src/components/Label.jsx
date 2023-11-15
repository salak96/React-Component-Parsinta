/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

function Label({ value, children, ...props }) {
    return (
        <label className='text-slate-600 mb-1 block' {...props}>
            {value || children}
        </label>
    );
}

export default Label;
