import * as React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import styles from "../../screens/styles";


const beefComponent=({navigation})=>{
         const [number, onChangeNumber] = React.useState(null);
         

    return(
      <View style={styles.container} >
      <Text style={styles.text}>How many kilograms of Beef do you eat a week?</Text>
      <View style={styles.textInputView} >
      <TextInput style={styles.textInput}
      onChangeText={onChangeNumber}
      value={number}
      placeholder="Enter number"
      keyboardType="numeric" />
        
        
      <Button style={styles.button} 
      color= "#5cb85c"
      title= "Add Activity" onPress={()=>{
      navigation.navigate("Home", {
      beefNumber: number
      })
      }}/>
      </View>
      </View>  
    )   
}

export default beefComponent
