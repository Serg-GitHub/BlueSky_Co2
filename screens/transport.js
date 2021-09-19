import * as React from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';
// import TransportMode from '../components/transportComponents/transportModes';
import carComponent from '../components/transportComponents/carComponent';



function Transport({ navigation }) {
    return (
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
        <Text style={styles.text}>Transport mode</Text>
    

        <Button 
        color="#ff0000"
        title="Car" onPress={() => navigation.navigate('Car')} />
        <Button 
        color="#ffa500"
        title="Bus" onPress={() => navigation.navigate('Bus')} />
        <Button 
        color="#0000ff"
        title="Train" onPress={() => navigation.navigate('Train')} />
        
        <Button 
        color="#5cb85c"
        title="Bicycle" onPress={() => navigation.navigate('Bicycle')} />
        
        <Button title="Go back" onPress={() => navigation.goBack()} />
        {/* <Button title="Calculate"/> */}
        {/* <TransportMode/> */}
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

    }  
   
  });  
export default Transport;