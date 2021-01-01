import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AppTabs } from "./AppTabs";
import { AuthStack } from "./AuthStack"
import { TodoContext } from "./Contexts/TodoContext";
import { ActivityIndicator } from "react-native";
import { Center } from "./components/Center";

export const Routes = () =>{
    
    const { 
        loading, 
        username, 
     } = useContext(TodoContext);
     
    
    return (
        <NavigationContainer>
            {loading ? <Center><ActivityIndicator size="large" color="black" style={{alignSelf: "center"}} /></Center> : username ? <AppTabs/> : <AuthStack/> }
        </NavigationContainer>
    )
}