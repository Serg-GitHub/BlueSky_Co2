import * as React from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';

function Food({ navigation }) {
    return (
      
      <View style= {styles.container}>
        <Text style={styles.white}>Food Activity</Text>
        <Button title="Go back" 
        color="#5cb85c"
        onPress={() => navigation.goBack()} />
   
        <Button title="Add a transport Activity"
        color="#27ae60"
        onPress={() => navigation.navigate('Transport')} />

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
      white: {
        fontSize: 40,
        color: 'white',
        
      },
  
})
export default Food;
  

