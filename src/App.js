import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react' // initailly - for Tasks

function App() {
    // context API, Redux///
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

    // delete task

    const deleteTask = (id) => {
        setTasks(
            tasks.filter(
                element => element.id !== id
            )
        )

    }

    return (
        <div className="container">
            <Header />
            <Tasks tasks={tasks} onDelete={deleteTask} />
        </div>
    );
}

export default App;
