import * as React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";


const beefComponent=({navigation})=>{
         const [number, onChangeNumber] = React.useState(null);
         

    return(
      <View style={styles.container}>
        <Text>How many kilograms of Beef do you eat a week?</Text>
        
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter number"
        keyboardType="numeric"
     
      />
      <Button title = "Add Activity" onPress={()=>{
        navigation.navigate("Home", {
          beefNumber: number
        })
      }} />
        
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

    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',


    },
  
  
  });
export default beefComponent
