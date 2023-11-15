/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function PlaceContentCenter({ children }) {
    return (
        <div className='bg-black'>
            <div className='text-violet-50 bg-violet-900/20 min-h-screen flex items-center justify-center antialiased tracking-tight'>
                <div className='max-w-lg w-full'>{children}</div>
            </div>
        </div>
    );
}
