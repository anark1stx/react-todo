import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { HomeStack } from "./components/HomeStack";
import { SettingsStack } from "./components/SettingsStack";

const Tabs = createBottomTabNavigator();

export const AppTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
            return <AntDesign name={"home"} size={size} color={color} />;
          } else if (route.name === "Settings") {
            return <Ionicons name={"settings-outline"} size={size} color={color} />;
          }
          //else if
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray"
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Settings" component={SettingsStack} />
    </Tabs.Navigator>
  );
};
