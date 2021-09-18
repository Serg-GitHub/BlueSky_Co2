import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';



function Food({ navigation }) {
    return (
      
      <View style={styles.container}>
      

      <Text style={styles.text}>Food Activity</Text>
        <Button 
        color="#5cb85c"
        title="beef" onPress={() => navigation.navigate('beef')} />
        <Button 
        color="#27ae60"
        title="chicken" onPress={() => navigation.navigate('chicken')} />
        <Button 
        color="#5cb85c"
        title="lamb" onPress={() => navigation.navigate('lamb')} />
        <Button 
        color="#27ae60"
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