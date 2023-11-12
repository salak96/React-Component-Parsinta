/* eslint-disable no-unused-vars */
import React from 'react';
// Importing the custom Button component and two icons from the '@tabler/icons-react' library
import Button from './components/Button';
import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';

// Defining a functional component named MyFunctionComponent
export default function MyFunctionComponent() {
    return (
        // Main container with background color and centering styles
        <div className='bg-slate-500 grid place-content-center min-h-screen'>
            {/* Container for buttons with horizontal gap */}
            <div className='flex gap-x-2'>
                {/* Using the custom Button component with an onClick handler and type='submit' */}
                <Button onClick={() => console.log('register')} type='submit'>
                    {/* IconBrandFacebook component and the text 'Register' */}
                    <IconBrandFacebook /> Register
                </Button>
                {/* Another instance of the custom Button component with an onClick handler and type='button' */}
                <Button onClick={() => console.log('Login')} type='button'>
                    {/* IconBrandTwitter component and the text 'Login' */}
                    <IconBrandTwitter />
                    Login
                </Button>
            </div>
        </div>
    );
}
