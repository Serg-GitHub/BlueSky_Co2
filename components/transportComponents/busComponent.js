import * as React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";


const busComponent=({route, navigation})=>{
         const [number, onChangeNumber] = React.useState(null);
         const { onChangeBusNumber} = route.params;

    return(
        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <Text>How many kilometers do you travel on the Bus a week?</Text>
        <Text>{onChangeBusNumber}</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter number"
        keyboardType="numeric"
     
      />
      <Button title = "Add Activity" onPress={()=>{
        navigation.navigate("Home", {
         busNumber: number
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
export default busComponent
