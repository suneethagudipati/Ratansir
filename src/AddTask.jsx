import { useState } from "react";

function AddTask() {
    const [count, setCount] = useState([]);
    
    const addTask = () => {
        setCount((prevCount) => [...prevCount, "Task" + (prevCount.length + 1)]);
    };

    const listOfTask = count.map((task, index) => {
        return <li key={index}>{task}</li>;
    });

    return (
        <>
            <h2>Add Task</h2>
            <button onClick={addTask}>Add Task</button>
            <ul>{listOfTask}</ul>
        </>
    );
}

export default AddTask;
