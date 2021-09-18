import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';



function Food({ navigation }) {
    return (
      
      <View style={styles.container}>
      

      <Text style={styles.text}>Food Type</Text>
        <Button 
        color="#ff0000"
        title="beef" onPress={() => navigation.navigate('beef')} />
        <Button 
        color="#ffa500"
        title="chicken" onPress={() => navigation.navigate('chicken')} />
        <Button 
        color="#4b0082"
        title="lamb" onPress={() => navigation.navigate('lamb')} />
        <Button 
        color="#0000ff"
        title="pork" onPress={() => navigation.navigate('pork')} />
        <Button 
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
      
    },
    });  
   



  

export default Food;