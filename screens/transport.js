import * as React from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';

import carComponent from '../components/transportComponents/carComponent';



function Transport({ navigation }) {
    return (
     
      <View style={styles.container}>
        <Text style={styles.text}>Transport mode</Text>
    

        <Button 
        color="#ff0000"
        title="Car" onPress={() => navigation.navigate({ name: 'Car', params: {onChangeCarNumber: null }})} />
        
        <Button 
        color="#ffa500"
        title="Bus" onPress={() => navigation.navigate({ name: 'Bus', params: {onChangeBusNumber: null }})} />
        <Button 
        color="#0000ff"
        title="Train" onPress={() => navigation.navigate({ name: 'Train', params: {onChangeTrainNumber: null}})} />
        
        <Button 
        color="#5cb85c"
        title="Bicycle" onPress={() => navigation.navigate({name:'Bicycle', params: {onChangeBicycleNumber: null}})} />
        
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