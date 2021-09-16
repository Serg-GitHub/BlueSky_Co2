import * as React from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';

function Transport({ navigation }) {
    return (
      <View style= {styles.container}>
        <Text style={styles.white}>Transport Activity</Text>
        <Button title="Go back" 
        color="#ff8c00"
        onPress={() => navigation.goBack()} />
        
        <Button title="Calculate"
        color="#ffcc00" /> 
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0f270e',
      alignItems: 'center',
      justifyContent: 'center',
     
      
    },
    white: {
      fontSize: 40,
      color: 'white',
      
    },

})
export default Transport;