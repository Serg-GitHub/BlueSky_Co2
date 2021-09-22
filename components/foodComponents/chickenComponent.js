import * as React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import styles from "../../screens/styles";

const chickenComponent=({navigation})=>{
         const [number, onChangeNumber] = React.useState(null);

    return(
      <View style={styles.container} >
        <Text style={styles.text}>How many kilograms of Chicken do you eat a week?</Text>

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
          chickenNumber: number
        })
      }} />
        
      </View>
      </View>
    )   
    
}
// const styles = StyleSheet.create({
//     input: {
//       height: 40,
//       margin: 12,
//       borderWidth: 1,
//       padding: 10,
//     },
//   });
export default chickenComponent
