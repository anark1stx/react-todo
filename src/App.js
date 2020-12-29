import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);
  
  //effect

  useEffect(() =>{
    const getLocalTodos = () => {
      if (window.localStorage.getItem("todos") === null){
        window.localStorage.setItem("todos", JSON.stringify([]));
      }else{
        setTodos(JSON.parse(window.localStorage.getItem("todos")));
      }
    };
    getLocalTodos();
  }, []); //run once

  useEffect(()=>{
    const filterHandler= () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    
    const saveLocalTodos = () => {
      if (window.localStorage.getItem("todos") === null){
        window.localStorage.setItem("todos", JSON.stringify([]));
      }else{
        window.localStorage.setItem("todos",JSON.stringify(todos));
      }
    };

    filterHandler();
    saveLocalTodos();
  }, [todos, status]); //run every time either todos or status changes
  
  return (
    <div className="App">
      <header>
        <h1>Your Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      {/* use of props to give TodoList component access to the state. */}
      <TodoList setTodos={setTodos} todos={filteredTodos} inputText={inputText} setInputText={setInputText} />
    </div>
  );
}

export default App;
