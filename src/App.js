import React,{useState} from "react"
import './App.css';


function App() {
  const[todos,setTodos]= useState([
    {text:'Learn React',
  isCompleted:false},
  {text:'Learn Css',
isCompleted:false},
{text:'Build todo app',
isCompleted:false}
  ]);
  const addTodo= text =>{
    const newTodos=[...todos,{text}];
    setTodos(newTodos);
  };
 const completeTodo=index =>{
  const newTodos=[...todos];
  newTodos[index].isCompleted=true;
  setTodos(newTodos)
 };
 const removeTodo=index=>{
  const newTodos=[...todos];
  newTodos.splice(index,1);
  setTodos(newTodos);
 }

  return (
    <div className="App">
      <div className="todo-header">
        <h1>Todo list</h1>
        <form onSubmit={e => {e.preventDefault();
        addTodo(e.target.elements.todo.value);
        e.target.elements.todo.value='';
        }}>
          <input type="text" name="todo" placeholder="Add a new todo "></input>
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="todo-list">
       {todos.map((todo,index) =>(
        <div className="todo" key={index}> 
        <div className="todo-text"style={{textDecortion:todo.isCompleted?'line-through':''}}>{todo.text}</div>
        <div className="todo-button">
          <button onClick={()=>completeTodo(index)}>complete</button>
          <button onClick={()=>removeTodo(index)}>Remove</button>
        </div>
        </div>
       ))}
      </div>
    </div>
  );
}

export default App;
