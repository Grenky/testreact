import Counter from './Counter';
import TodoList from './TodoList';
import './App.css';
import ConditionalR from './ConditionalR';
import Colors from './Colors';
import TODo from './ToDo';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const tasksArray = ['task1', 'task2', 'task3'];
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  const[taskUrl, setTaskUrl] = useState([]);

  const url = 'https://jsonplaceholder.typicode.com/posts/1';


  useEffect(() => {
    axios
    .get(url)
    .then( response =>{
      setTaskUrl(response)});
    }, []);
  



  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TodoList tasks={tasksArray} />
        <ConditionalR />
        <Colors items={items}/>
        <TODo />
        {Array.isArray(taskUrl) && taskUrl.map((task, index) => (
          <p key={index}>{task.title}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
