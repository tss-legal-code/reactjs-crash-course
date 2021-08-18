import React from 'react'
import {useState} from 'react'


const tasks = [
    {
        id: 1,
        text: "doctor's appointment",
        day: "17.08.2021",
        reminder: true,
    },
    {
        id: 2,
        text: "beer festival",
        day: "21.08.2021",
        reminder: true,
    },
    {
        id: 3,
        text: "buy car",
        day: "23.08.2021",
        reminder: false,
    },
    {
        id: 4,
        text: "swimmingpool",
        day: "29.08.2021",
        reminder: true,
    },

]


const Tasks = () => {
    return (
        <>
            {tasks.map(
                (task) => 
                (<h1 key={task.id}>{task.id} - {task.text}</h1>)
            )}
        </>
    )
}

export default Tasks
