import React, {useState} from "react";

export default function TODo() {

    const [tasks, setTasks] = useState([
        {text: 'Task 1', completed: false},
        {text: 'Task 2', completed: false},
        {text: 'Task 3', completed: false}
    ]);
    const[newTask, setNewTask] = useState('');



    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }


    const addTask = () => {
        if(newTask.trim() !== '') {
            setTasks([...tasks, {text: newTask, completed: false}]);
            setNewTask('');
        }
    }

    const toggleComplited = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    return(
        <div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                        {task.text}
                        <button onClick={() => removeTask(index)}>delete</button>
                        <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleComplited(index)} 
                        />
                    </li>
                ))}
            </ul>
            <div>
                <input 
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="new task"
                />
                <button onClick={addTask}>add task</button>
            </div>
        </div>
    )
}