import * as React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import styles from "../../screens/styles";

const lambComponent=({navigation})=>{
         const [number, onChangeNumber] = React.useState(null);

    return(
      <View style={styles.container} >
        <Text style={styles.text}>How many kilograms of Lamb do you eat a week?</Text>
        
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
        lambNumber: number
        })
      }}/>

       <Text style={styles.text}>Lamb produces</Text>
       <Text style={styles.text}> 10.9 kg of Co2 per kg</Text>
        
      </View>
      </View>
    )   
}
export default lambComponent
