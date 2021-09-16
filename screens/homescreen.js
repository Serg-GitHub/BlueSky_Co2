import * as React from "react";
import { View, Button, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationContainer } from "react-navigation/native";
export default Home 


function Home({navigation}){
    return(
        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <Text>Home screen</Text>
        <Button
         title= "Go to food"
         onPress={()=> navigation.navigate("food")}/>
        </View> 
    ) 
    
    
}

