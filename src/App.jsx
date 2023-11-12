/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PlaceContentCenter from './components/PlaceContentCenter';
import Button from './components/Button';

// Defining a functional component named MyFunctionComponent
export default function App() {
    const [name, setName] = useState('sasangka');
    const [counter, setCounter] = useState(0);
    function handleClick() {
        const nextName = 'kurniawan';
        setName(nextName);
        console.log(name, nextName);
    }
    return (
        <PlaceContentCenter>
            <div className='flex flex-col justify-center items-center'>
                {name}
                <Button onClick={handleClick}>Change Name</Button>
                <h1>{counter}</h1>
                <div className="mt-5 flex gap-2">
                    <Button className="bg-red-600" onClick={() => setCounter(counter + 1)}>+</Button>
                    <Button className="bg-yellow-600" onClick={() => setCounter(counter - 1)}>-</Button>
                </div>
            </div>
        </PlaceContentCenter>
    );
}
