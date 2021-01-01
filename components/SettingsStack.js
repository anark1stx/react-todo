import React, { useContext } from "react";
import { Center } from "./Center";
import { Text } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TodoContext } from "../Contexts/TodoContext";

const Stack = createStackNavigator();

function Settings({ navigation }) {
  return (
    <Center>
      <Text>This is the settings page ! </Text>
    </Center>
  );
}

export const SettingsStack = () => {
  const { logout } = useContext(TodoContext);
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{ marginRight: 20, marginTop:5 }}
                onPress={() => {
                  logout();
                }}
              >
                <Text style={{color: 'red'}}>Log Out</Text>
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};
