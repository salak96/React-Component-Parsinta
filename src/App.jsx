/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import axios from 'axios';

export default function App() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    async function getUser() {
        setLoading(true);
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(data);
        } catch (err) {
            console.log('Something went wrong: ', err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUser();
        // Cleanup function to handle component unmounting
        return () => {
            // You can cancel the asynchronous operation here if needed
            console.log('Component unmounted');
        };
    }, []); // Empty dependency array to run the effect only once

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Total user : {users.length}</Card.Title>
                <Card.Body className='p-0'>
                    {loading ? (
                        <div className='text-green-500 font-bold'>Loading...</div>
                    ) : (
                        <ol>
                            {users.map((user) => (
                                <li key={user.id}>{user.name}</li>
                            ))}
                        </ol>
                    )}
                </Card.Body>
            </Card>
        </PlaceContentCenter>
    );
}
