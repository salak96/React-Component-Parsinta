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
    const [form, setForm] = useState({
        name: '',
        email: '',
    });

    function onChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    function submit(e){
        e.preventDefault();
        console.log(form)
    }
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Sign up for new account</Card.Title>
                <form onSubmit={submit}>
                <Card.Body>
                    <div className='mb-5 border rounded-lg'>
                        <p>Name : {form.name || 'No name provided'}</p> <p>Email : {form.email || 'No email provided'}</p>
                    </div>
                    <div className='mb-6'>
                        <Label htmlFor='name' value={'Name'}>
                            Name
                        </Label>
                        <Input id='name' type='text' name='name' value={form.name} onChange={onChange} placeholder='Enter your name' />
                    </div>
                    <div className='mb-6'>
                        <Label htmlFor='email' value={'Email'}>
                            Email
                        </Label>
                        <Input type='email' name='email' value={form.email} onChange={onChange} id='email' placeholder='Enter your Email' />
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button className='bg-black text-white'>
                        <IconBrandGithub />
                        Github
                    </Button>
                </Card.Footer>
                </form>
            </Card>
        </PlaceContentCenter>
    );
}
