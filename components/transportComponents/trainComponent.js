import * as React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import styles from "../../screens/styles";

const trainComponent=({navigation})=>{
         const [number, onChangeNumber] = React.useState(null);
       

    return(
      <View style={styles.container} >
        <Text style={styles.text}>How many kilometers do you travel by Train a week?</Text>
       
        <View style={styles.textInputView} >
        <TextInput style={styles.textInput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter number"
        keyboardType="numeric" />
     
       
        <Button style={styles.button} 
        color= "#5cb85c"
        title = "Add Activity" onPress={()=>{
        navigation.navigate("Home", {
        trainNumber: number
        })
      }}/>
      <Text style={styles.text}>Avg Train produces</Text>
       <Text style={styles.text}> 37 g/km of Co2</Text>
        
      </View>
      </View>
    )   
    
}
export default trainComponent
