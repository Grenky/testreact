import Counter from './Counter';
import TodoList from './TodoList';
import './App.css';
import ConditionalR from './ConditionalR';
import Colors from './Colors';
import TODo from './ToDo';
import ReduxTest from './ReduxTest';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { increment } from './action';

const App = ({count, increment}) => {

  const tasksArray = ['task1', 'task2', 'task3'];
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  const[taskUrl, setTaskUrl] = useState([]);

  const url = 'https://jsonplaceholder.typicode.com/posts/1';


  useEffect(() => {
    axios
    .get(url)
    .then( response =>{
      setTaskUrl(response.data);
    })
    .catch(error => {
      console.error("Error fetching datat:", error)
    })
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
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <ReduxTest />
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count
})

export default connect(mapStateToProps, {increment})(App);
