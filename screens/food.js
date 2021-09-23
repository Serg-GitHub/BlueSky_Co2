import * as React from 'react';
import { View, Button, Text } from 'react-native';
import styles from "./styles"




function Food({ navigation }) {
    return (
      
      <View style={styles.container}>
      

      <Text style={styles.text}>Food Type</Text>
        
        <View style={styles.buttonView}>
        <Button style={styles.button}
        color="#ff0000"
        title="Beef" onPress={() => navigation.navigate('Beef')} />
        </View>

        <View style={styles.buttonView}>
        <Button style={styles.button}
        color="#ffa500"
        title="Chicken" onPress={() => navigation.navigate('Chicken')} />
        </View>

        <View style={styles.buttonView}>
        <Button style={styles.button}
        color="#4b0082"
        title="Lamb" onPress={() => navigation.navigate('Lamb')} />
        </View>

        <View style={styles.buttonView}>
        <Button style={styles.button}
        color="#0000ff"
        title="Pork" onPress={() => navigation.navigate('Pork')} />
        </View>

        <View style={styles.buttonView}>
        <Button style={styles.button}
        color="#5cb85c"
        title="Go back" onPress={() => navigation.goBack()} />
        </View>
        </View>
    );
}
export default Food;