import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import TransportMode from '../components/transportModes';


function Transport({ navigation }) {
    return (
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
        <Text>Transport screen</Text>

        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button title="Calculate"/>
        <TransportMode/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 50,
    }  
  });  
export default Transport;