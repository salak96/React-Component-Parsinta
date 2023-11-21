/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ type = 'text', ...props }, ref) => (
    <input ref={ref} {...props} className='w-full h-10 px-3 border border-slate-200 rounded' type={type} />
));

export default Input;
