/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PlaceContentCenter from './components/PlaceContentCenter';
import Button from './components/Button';
import Counter from './components/Counter';

// Defining a functional component named MyFunctionComponent
export default function App() {
    const [name, setName] = useState('sasangka');
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
                <Counter initialValue={0}/>
                </div>
        </PlaceContentCenter>
    );
}
