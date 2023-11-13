/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from './Button';

function Counter({ initialValue }) {
    const [counter, setCounter] = useState(initialValue);
    const handleClick = () => setCounter(counter + 1);
    const handleClickMinus = () => setCounter(counter - 1);

    return (
        <div>
            <h1 className='text-3xl font bold flex justify-center items-center'>{counter}</h1>
            <div className='mt-5 flex items-center gap-2'>
                <Button onClick={handleClick}>+1</Button>
                <Button onClick={handleClickMinus}>-1</Button>
            </div>
        </div>
    );
}

export default Counter;
