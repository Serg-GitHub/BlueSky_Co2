import * as React from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';
import styles from './styles'

import carComponent from '../components/transportComponents/carComponent';



function Transport({ navigation }) {
    return (
     
      <View style={styles.container}>
        <Text style={styles.text}>Transport mode</Text>
    
        <View style={styles.buttonView}>
        <Button style={styles.button} 
        color="#ff0000"
        title="Car" onPress={() => navigation.navigate('Car')} />
        </View>

        <View style={styles.buttonView}>
        <Button style={styles.button}
        color="#ffa500"
        title="Bus" onPress={() => navigation.navigate('Bus')} />
        </View>

        <View style={styles.buttonView}>
        <Button style={styles.button} 
        color="#0000ff"
        title="Train" onPress={() => navigation.navigate('Train')} />
        </View>
        
        <View style={styles.buttonView}>
        <Button style={styles.button}
        color="#5cb85c"
        title="Bicycle" onPress={() => navigation.navigate('Bicycle')} />
        </View>
        
        <View style={styles.buttonView}>
        <Button style={styles.button} 
        title="Go back" onPress={() => navigation.goBack()} />
        </View>
        {/* <Button title="Calculate"/> */}
        {/* <TransportMode/> */}
      </View>
      
    );
  }

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#001315',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   text: {
  //     fontSize: 40,
  //     color: 'white',
  //     letterSpacing: 10,

  //   }  
   
  // });  
export default Transport;