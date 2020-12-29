import React from "react";

const Todo = (props) =>{
    const deleteHandler = () =>{
        props.setTodos(props.todos.filter(el => el.id !== props.todo.id));
    };
    
    const completeHandler = () =>{
        props.setTodos(props.todos.map((item) => {
            if (item.id === props.todo.id){
                return { ...item, completed: !item.completed}
            }
            return item
        }));
    };

    const editHandler = (e) =>{
        console.log('updating')
        props.setTodos(props.todos.map((item) => {
            if (item.id === props.todo.id){
                return { ...item, text: e.target.value}
            }
            return item
        }));
    };

    return(
        <div className="todo">
            {/* <li className={`todoItem ${props.todo.completed ? "completed" : ''}`}>{props.todo.text}</li> */}
            <input type="text" className={`todoItem ${props.todo.completed ? "completed" : ''} todo-input `} required onChange={editHandler} defaultValue={props.todo.text}></input>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}


export default Todo;