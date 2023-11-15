/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from './Card';
import Input from './Input';
import Button from './Button';

function Todo() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Load tasks from local storage on component mount
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
        console.log('Tasks loaded from local storage');
    }, []); // Empty dependency array ensures this effect runs only once on mount

    useEffect(() => {
        // Save tasks to local storage whenever tasks change
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log('Tasks saved to local storage');
    }, [tasks]);

    const handleAddTask = (e) => {
        e.preventDefault();

        setTasks((prevTasks) => [
            ...prevTasks,
            {
                id: Math.floor(Math.random() * Date.now()),
                name: newTask,
                completed: false,
            },
        ]);
        setNewTask('');
    };

    const handleCompleteTask = (id) => {
        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
        });
    };

    const handleDeleteTask = (id) => {
        setTasks((prevTasks) => {
            return prevTasks.filter((task) => task.id !== id);
        });
    };

    return (
        <Card>
            <Card.Title>Todo</Card.Title>
            <Card.Body>
                <form>
                    <div className='flex item-center gap-x-3'>
                        <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                        <Button onClick={handleAddTask} text={'Add task'} />
                    </div>
                </form>
                {tasks.length > 0 ? (
                    <ol className={'space-y-2'}>
                        {tasks.map((task) => (
                            <li key={task.id} className='flex justify-between items-center mt-4'>
                                <span>
                                    {task.name} {task.completed ? '✅' : '❌'}
                                </span>
                                <div className='flex items-center gap-x-2'>
                                    <Button className='text-white bg-green-500' onClick={() => handleCompleteTask(task.id)}>
                                        Mark as {task.completed ? 'incomplete' : 'complete'}
                                    </Button>
                                    <Button className='text-white bg-red-500' onClick={() => handleDeleteTask(task.id)}>
                                        delete
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ol>
                ) : null}
            </Card.Body>
            <Card.Footer>You have {tasks.length} tasks</Card.Footer>
        </Card>
    );
}

export default Todo;
