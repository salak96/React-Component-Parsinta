/* eslint-disable no-unused-vars */
import React from 'react';
import Card from './components/Card';
import Button from './components/Button';

// Defining a functional component named MyFunctionComponent
export default function App() {
    return (
        <div className='bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen'>   
            <div className='max-w-md w-full flex items-center gap-4'>
                <Card>
                <Card.Title>Title</Card.Title>
                <Card.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus.</Card.Body>
                <Card.Footer>
                    <Button>Click me</Button>
                </Card.Footer>
                </Card>
           </div>
        </div>
    );
}
