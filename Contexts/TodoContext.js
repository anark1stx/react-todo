import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [usernameInputText, setUsernameInputText] = useState("");
  const [todoInputText, setTodoInputText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("username")
      .then((uname) => {
        uname && setUsername(uname)
      })
      .catch((err) => {
        console.error(err);
      });
    AsyncStorage.getItem("todos")
      .then((todos) => {
        todos && setTodos(JSON.parse(todos));
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []); //once the app starts require the username

  useEffect(() => {
    AsyncStorage.setItem("username", username).catch((err) => console.error(err));    
  }, [username]);


  useEffect(() => {
    const saveTodos = () => {
      AsyncStorage.setItem("todos", JSON.stringify(todos)).catch((err) =>
        console.error(err)
      );
    };

    saveTodos();
  }, [todos]); //whenever something changes update in collection and storage

  return (
    <TodoContext.Provider
      value={{
        username,
        setUsername,
        usernameInputText,
        setUsernameInputText,
        loading,
        setLoading,
        todoInputText,
        setTodoInputText,
        todos,
        setTodos,
        logout: () => {
          setUsername('');
          AsyncStorage.removeItem("username");
        }
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
