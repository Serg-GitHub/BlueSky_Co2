import * as React from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';
import carbonFormCar from '../components/carbonformcar';

function Transport({ navigation }) {
    return (
      <View style= {styles.container}>
        <Text style={styles.white}>Transport Activity</Text>
        <Button title="Go back" 
        color="#5cb85c"
        onPress={() => navigation.goBack()} />
        
        <Button title="Calculate"
        color="#27ae60" /> 
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
export default Transport;