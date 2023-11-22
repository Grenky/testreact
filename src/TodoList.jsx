import { useState } from "react";





export default function TodoList({tasks = []}) {

  
   
    const[counter, setCounter] = useState(0);
    const[inputText, setInputText] = useState('');
    const[text, setText] = useState('');

   


    if(!tasks) {
        return <div>Loading...</div>;
    }


    const handleInputChange = (event) => {
        setInputText(event.target.value);
    }

    const plus = () => {
        setCounter(counter +1);
    }

    const minus = () => {
        if(counter > 0) { 
        setCounter(counter -1);
        }
    }

    

    const showText = () => {
        setText(inputText);
    };

    return(
        <div className="list">
            <p>hello world!</p>
            <p>{counter}</p>
            <button onClick={plus}>plus</button>
            <button onClick={minus}>minus</button>
            <ul>
                {tasks.map((task, index) => (
                <li key={index}>{task}</li>
                ))}
            </ul>
            {text && <p>{text}</p>}
            <form>
                <input type="text" value={inputText} onChange={handleInputChange} placeholder="write Text"></input>
                <button onClick={showText}>click</button>
            </form>
            
        </div>
    );
}