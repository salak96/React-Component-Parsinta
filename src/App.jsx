/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import useJoke from './hooks/useJoke';
import Button from './components/Button';
import Input from './components/Input';

export default function App() {
    const nameRef = useRef();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const joke = useJoke(name);
    const generetaJoke = (e) => {
        e.preventDefault();
        setName(nameRef.current.value);
    };
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>
                    <h1 className='text-3xl text-center'>Joke Card</h1>
                </Card.Title>
                <Card.Body className='p-0'>
                    <p className='p-4 text-center text-2xl text-red-500'>{loading ? 'Loading...' : name ? `Joke of ${name}` : 'Joke of the day'}</p>
                    <p className='p-4 text-center'>{joke}</p>
                    <Input ref={nameRef} />
                </Card.Body>
                <Card.Footer>
                    <Button onClick={generetaJoke} disabled={loading} Get joke>
                        Get joke
                    </Button>
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}
