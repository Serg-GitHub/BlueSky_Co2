import * as React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import Home from "../../screens/homescreen";


const carComponent=({route, navigation })=>{
         const [number, onChangeNumber] = React.useState(null);
         const { onChangeCarNumber} = route.params;

         

    return(
        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <Text>How many kilometers do you drive a week?</Text>
        <Text>{onChangeCarNumber}</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter number"
        keyboardType="numeric"
        
     
      />
      <Button title = "Add Activity" onPress={()=>{
        navigation.navigate("Home", {
         carNumber: number
        })
      }}/>
        
      </View>
    )   
    
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
export default carComponent
