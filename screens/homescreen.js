import * as React from "react";
import { View, Button, Text } from "react-native";
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

