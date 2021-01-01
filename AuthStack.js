import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TodoContext } from "./Contexts/TodoContext";
import { Button, Text, TextInput } from "react-native-paper";
import { Center } from "./components/Center";
import { View } from "react-native";

const Stack = createStackNavigator();

function Login({ navigation }) {
  const { usernameInputText, setUsernameInputText, setUsername } = useContext(
    TodoContext
  );

  return (
    <Center>
      <View style={{width: "60%"}}>
        <TextInput
          label="Your name"
          value={usernameInputText}
          mode="outlined"
          onChangeText={(username) => setUsernameInputText(username)}
          style={{ width: "100%", marginBottom:30 }}
        />
        <Button mode="contained" onPress={() => setUsername(usernameInputText)}>
          Set name
        </Button>
      </View>
      <Button mode="outlined" onPress={() => navigation.navigate("About")}>
        About this app
      </Button>
    </Center>
  );
}

function About() {
  return (
    <Center>
      <Text> Thank you for downloading anark1stx's Todo List App!</Text>
    </Center>
  );
}

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};
