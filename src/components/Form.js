import React from "react";

const Form = (props) => {
  const inputTextHandler = (e)=>{
    props.setInputText(e.target.value);
  };

  const submitTodoHandler = (e) =>{
    e.preventDefault();
    if (props.inputText !== ''){
      props.setTodos([...props.todos, {text: props.inputText,completed: false, id: uuidv4()}]); //... = all the previous todos + the new todo
      props.setInputText("");
    }else{
     alert('Please input something.'); 
    }
    
  };

  const statusHandler = (e) =>{
    props.setStatus(e.target.value);
  };

  function uuidv4() { //thanks to: https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid/2117523#2117523 , replaced c=='x' with c==='x' and r & 0x3 with r && 0x3 to disable a warning
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
      return v.toString(16);
    });
  }

  return (
    <form>
      <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" required/>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;