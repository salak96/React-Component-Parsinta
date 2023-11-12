/* eslint-disable no-unused-vars */
import React from 'react';
// Importing the custom Button component and two icons from the '@tabler/icons-react' library
import Button from './components/Button';
import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';

// Defining a functional component named MyFunctionComponent
export default function MyFunctionComponent() {
    return (
        // Main container with background color and centering styles
        <div className='bg-slate-500 grid place-content-center min-h-screen'>
            <div className='flex gap-x-2'>
                <Button className='bg-red-500 hover:bg-black' onClick={() => console.log('register')} type='submit'>
                    <IconBrandFacebook /> Register
                </Button>
                <Button className='bg-yellow-500 hover:bg-green-600' onClick={() => console.log('Login')} type='button'>
                    <IconBrandTwitter />
                    Login
                </Button>
                <Button>
                    <IconBrandGithub />
                    Login
                </Button>
            </div>
        </div>
    );
}
