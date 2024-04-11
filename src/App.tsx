// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import {Counter} from "./components/Counter.tsx";
import {todos} from "./mock.ts";
import {TodoTask} from "./types.ts";
import {TaskItem} from "./components/TaskItem.tsx";
import {useState} from "react";
import {Input} from "./components/Input.tsx";

function App() {
    const [todoList, setTodoList] = useState(todos);
    const [newTask, setNewTask] = useState('');


    const handleTodoDoneClick = (id:number) => {
        setTodoList(todoList.map((item) =>
            item.id == id
                ?{
                    ...item,
                    completed: true,
                }
                : item
        ));
    }
    const handleDeleteTaskClick = (id: number) => {
        setTodoList(todoList.filter(item=> item.id != id))
    }
    const handleAddTaskClick = (todoList: TodoTask[]) => {
    const new_task: TodoTask = {
        userId: 1,
        id: todoList.length + 1,
        title: newTask,
        completed: false
    };
    setTodoList([...todoList, new_task])
    setNewTask('');
    };
    const handleInputChange = (value: string) => {
        setNewTask(value);
      };


    return (
        <>
            <h2>
                My App
            </h2>
            <Input onAddClick={()=>handleAddTaskClick(todoList)}
                   onChange={(value)=>handleInputChange(value)}
                   inputValue={newTask}/>
            <ol>
                {todoList.map(
                    (item: TodoTask) => (
                        <TaskItem item={item} key={item.id}
                                  onDoneClick={() => handleTodoDoneClick(item.id)}
                                  onDeleteClick={() => handleDeleteTaskClick(item.id)}/>
                    ))}
            </ol>
        </>
    )
}

export default App
