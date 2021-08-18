import { useState } from 'react' // initailly - for Tasks
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {
    // context API, Redux///
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState(
        [
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

    );
    // add task 
    const addTask = (task) =>{
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ...task}
        setTasks([...tasks,newTask])
    }

    // delete task
    const deleteTask = (id) => {
        setTasks(
            tasks.filter(
                element => element.id !== id
            )
        )

    }

    const toggleReminder = (id) => {
        // console.log(id)
        setTasks(
            tasks.map(
                task => 
                    task.id === id
                    ? {...task, reminder: !task.reminder }
                    : task)
        )
    }

    return (
        <div className="container">
            <Header 
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask} 
            />
            
            {showAddTask && <AddTask onAdd={addTask}  />} 
            
            {tasks.length > 0
                ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
                : "No tasks to show."}
        </div>
    );
}

export default App;
