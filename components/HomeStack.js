import React, { useContext } from "react";
import { TodoContext } from "../Contexts/TodoContext";
import { Center } from "./Center";
import { Text, Button, TextInput } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

const Stack = createStackNavigator();

function Welcome({ navigation }) {
  const { username } = useContext(TodoContext);

  return (
    <Center>
      <Text> Welcome to your Todo List {username} ! </Text>
      <Button onPress={() => navigation.navigate("Todos")}>
        Go to your todo list
      </Button>
    </Center>
  );
}

function Todos() {
  return (
    <Center>
      <Form />
      <TodoList/>
    </Center>
  );
}

function Form() {
  const { todoInputText, setTodoInputText, setTodos, todos } = useContext(
    TodoContext
  );

  return (
    <Center>
      <Text>Adding a new Todo</Text>
      <View style={{ justifyContent: "space-between", width: "60%" }}>
        <TextInput
          style={{ width: "100%" }}
          label="Description"
          onChangeText={(todoInputText) => setTodoInputText(todoInputText)}
        />
        <Button
          style={{ marginTop: 10 }}
          mode="contained"
          onPress={() => {
            setTodos([
              ...todos,
              { text: todoInputText, completed: false, id: uuidv4() }
            ])
          }}
        >
          Add Todo
        </Button>
      </View>
    </Center>
  );
}

function TodoList() {
  const { todos } = useContext(
    TodoContext
  );
  
  return (
    <View style={{flex: 1, flexDirection: 'column',justifyContent:"space-around"}}>
     {todos.map(todo => (<Todo key={todo.id} todo={todo}/>))} 
    </View>
  )
}

function Todo(props){
  const { todos,setTodos } = useContext(
    TodoContext
  );
  return(
    <View style={{flex: 1, flexDirection: 'row', justifyContent:"space-around"}}>
      <Text style={{marginTop:9, color:"black"}}>{props.todo.text} </Text>
      <Button mode="contained" style={{alignSelf:"flex-start"}} onPress={
        () => setTodos(todos.filter(el => el.id !== props.todo.id))
      }>Delete</Button>
    </View>
  )
}

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Todos" component={Todos} />
    </Stack.Navigator>
  );
};

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : r && 0x3 | 0x8;
    return v.toString(16);
  });
}
