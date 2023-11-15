/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';
export default function App() {
    const inputRef = useRef(null);
    function handleClick() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    return (
        <PlaceContentCenter>
          <Card>
            <Card.Title>Use Ref Hooks</Card.Title>
            <Card.Body>
             <div className="flex flex-col gap-2">
             <Input placeholder={"Email"} className="bg-black" type="text" />
             <Input placeholder={"password"} className="bg-black" type="text" />
             <Button className="bg-black mt-3"onClick={handleClick}>Tick</Button>
             </div>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </PlaceContentCenter>
    );
}
