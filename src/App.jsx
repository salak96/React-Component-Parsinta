/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import Button from './components/Button';
import { IconBrandGithub } from '@tabler/icons-react';
import Input from './components/Input';
import Label from './components/Label';

// Defining a functional component named MyFunctionComponent
export default function App() {
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Sign up for new account</Card.Title>
                <Card.Body>
                    <div className='mb-6'>
                        <Label htmlFor='name' value={'Name'}>
                            Name
                        </Label>
                        <Input id='name' placeholder='Enter your name' />
                    </div>
                    <div className='mb-6'>
                        <Label htmlFor='email' value={'Email'}>
                            Email
                        </Label>
                        <Input id='email' placeholder='Enter your Email' />
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button className='bg-black text-white'>
                        <IconBrandGithub />
                        Github
                    </Button>
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}
