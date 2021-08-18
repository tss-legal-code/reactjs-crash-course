import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react' // initailly - for Tasks

function App() {
    return (
        <div className="container">
            <Header  />
            <Tasks /> 
        </div>
    );
}

export default App;
