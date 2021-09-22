import * as React from 'react';
import { View, Button, Text, StyleSheet, requireNativeComponent } from 'react-native';




function Food({ navigation }) {
    return (
      
      <View style={styles.container}>
      

      <Text style={styles.text}>Food Type</Text>
        
        <Button style={styles.button}
        color="#ff0000"
        title="Beef" onPress={() => navigation.navigate('Beef')} />

        <Button style={styles.button}
        color="#ffa500"
        title="Chicken" onPress={() => navigation.navigate('Chicken')} />

        <Button style={styles.button}
        color="#4b0082"
        title="Lamb" onPress={() => navigation.navigate('Lamb')} />
        <Button style={styles.button}
        color="#0000ff"
        title="Pork" onPress={() => navigation.navigate('Pork')} />
        <Button style={styles.button}
        color="#5cb85c"
        title="Go back" onPress={() => navigation.goBack()} />
        
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#001315',
      alignItems: 'center',
      justifyContent: 'center',
     
      
    },
    text: {
      fontSize: 40,
      color: 'white',
      letterSpacing: 10,
      
      
    },

    });  
   



  

export default Food;