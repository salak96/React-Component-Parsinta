/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PlaceContentCenter from './components/PlaceContentCenter';
import Todo from './components/Todo';

export default function App() {
    return (
        <PlaceContentCenter>
            <Todo />
        </PlaceContentCenter>
    );
}
