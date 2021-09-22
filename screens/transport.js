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
        title="Cycle" onPress={() => navigation.navigate('Cycle')} />
        </View>
        
        <View style={styles.buttonView}>
        <Button style={styles.button} 
        title="Go back" onPress={() => navigation.goBack()} />
        </View>

      </View>
      
    );
    
  }
 
export default Transport;