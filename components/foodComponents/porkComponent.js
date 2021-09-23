import * as React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import styles from "../../screens/styles";

const porkComponent=({navigation})=>{
         const [number, onChangeNumber] = React.useState(null);

    return(
      <View style={styles.container} >
      <Text style={styles.text}>How many kilograms of Pork do you eat a week?</Text>
      <View style={styles.textInputView} >
      <TextInput style={styles.textInput} 
      onChangeText={onChangeNumber}
      value={number}
      placeholder="Enter number"
      keyboardType="numeric" />
     
      
      <Button style={styles.button} 
      color= "#5cb85c"
      title = "Add Activity" onPress={()=>{
      navigation.navigate('Home', {
      porkNumber: number
      })
      }}/>

       <Text style={styles.text}>Pork produces</Text>
       <Text style={styles.text}> 5.77 kg of Co2 per kg</Text>

      </View>
      </View>
    )   
    
}

export default porkComponent
