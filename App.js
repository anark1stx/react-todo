import "react-native-gesture-handler";
import React from "react";
import {View} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { TodoProvider } from "./Contexts/TodoContext";
import { Routes } from "./Routes"

export default function App() {
  return (
    <PaperProvider>
      <TodoProvider>
          <Routes />
      </TodoProvider>
    </PaperProvider>
  );
}
